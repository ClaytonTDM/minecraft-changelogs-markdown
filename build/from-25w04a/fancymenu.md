# Minecraft Snapshot 25w04a

It's time for another snapshot! To kick things off, we are reverting the fixes for [MC-271065](https://bugs.mojang.com/browse/MC-271065) and [MC-152728](https://bugs.mojang.com/browse/MC-152728).

This week's snapshot also comes with a whole slew of datapack updates, including new components and item model capabilities. If you like to play around with datapacks, you will definitely find something fun in this update!

As always, we're keen to get your feedback on these new features at [feedback.minecraft.net](https://feedback.minecraft.net) and you can report any bugs at [bugs.mojang.com](https://bugs.mojang.com)! Here's what's new this week:

## New Features

-   Added language support for Kyrgyz

## Changes

-   Reverted fixes:
    
    -   [MC-271065](https://bugs.mojang.com/browse/MC-271065) - Diagonal movement is not normalized when crouching or using certain items
    -   [MC-152728](https://bugs.mojang.com/browse/MC-152728) - The player continues sprinting when performing actions that slow them down
    
    > **Developer's Note**: _After consideration, we have decided to revert both fixed bugs. While we do want to revisit these mechanics in the future, it's clear that these recent fixes alone didn't quite hit the mark and caused too many negative side-effects for parkour, speedbridging, and movement in general_
    
-   Crossbows will now show all charged projectiles in their tooltip instead of just the first
    -   All charged projectiles will also add their entire tooltip as a subsection, instead of only Fireworks
-   All container items with stored contents, such as a Chest picked with Ctrl+Pick Block, will now list the first 4 items in their tooltip just like Shulker Boxes

## Technical Changes

-   The Data Pack version is now 64
-   The Resource Pack version is now 49

## Data Pack Versions 64

-   The `potion` entity type has been split into `splash_potion` and `lingering_potion`
-   Filled Maps without any `map_id` component no longer show an 'Unknown Map' tooltip (invalid IDs will still produce this tooltip)
-   Trim pattern and trim material items are no longer specified in the trim registries, but instead in the recipes and items respectively
-   Field `background` in advancement definition no longer contains `textures/` prefix and `.png` suffix
-   Changes to entity variant definitions
    -   Cat and Frog variants are now data-driven
    -   Added uniform way to define variant selection rules

### Commands

-   SNBT literals now accept heterogenous lists

### SNBT changes

-   SNBT (textual representation of NBT-like data) has been expanded to accept heterogenous lists, i.e. ones where elements are not of the same type
-   NBT format is not changed
    -   If SNBT command argument transforms value to NBT (like arguments of `/data` or `/summon`), lists might be transformed to bypass NBT constraints
    -   Example transform: `['a', {'b':3}]` is stored as `[{'':'a'},{'b':3}]`
    -   This transform is not reversed by `/data`

> **Developer's Note**: _Internally, in new code we read and write data in both JSON and NBT formats. This change makes sure that we don't have to worry about NBT limitations when it comes to lists. We have chosen to not expand NBT itself to avoid breaking existing external tools._

### Tags

#### Entity Tags

-   Added `#can_wear_horse_armor` - entity that can hold horse armor in their body slot

#### Damage Type Tags

-   Renamed `#bypasses_shield` to `#bypasses_blocking`

#### Cat Variant Tags

-   Removed `#default_spawns` and `#full_moon_spawns`

### Uniform variant selection

-   Variants that have spawn rules now use uniform approach for selecting
-   Selection process:
    -   Every variant field `spawn_conditions` that contain a list of entries
    -   Every entry has a condition and an integer priority
    -   Conditions for all variants for given entity type are evaluated for position where entity is being spawned
    -   Entries with priority lower than maximum priority of remaining entries are removed
    -   Game randomly picks one entry out of remaining ones
    -   If no conditions are remaining, variant remains unchanged from default
-   Entry format:
    -   `priority` - integer
    -   `condition` - optional structure
        -   Fields:
            -   `type` - see below for values
            -   Additional fields dependent on `type`
        -   If field is not present, condition is always true

#### Spawn conditions

##### `minecraft:biome`

-   Checks if entity is spawning in specific biomes
-   Fields:
    -   `biomes` - single entry, list or a tag describing biomes

##### `minecraft:moon_brightness`

-   Checks if current moon brightness is within certain range
-   Fields:
    -   `range` - floating point range (a single number or an object like `{"min": 1, "max": 2}`)

##### `minecraft:structures`

-   Checks if entity is spawning in specific structures
-   Fields:
    -   `structures` - single entry, list or a tag describing structures

### Wolf Variants

-   Fields `angry_texture`, `tame_texture` and `wild_texture` have been grouped in field `assets` and renamed to `angry`, `tame` and `wild`
-   Added field `spawn_conditions` described in uniform variant selection above

### Pig Variants

-   `texture` and `biome` fields are replaced with `asset_id` and `spawn_conditions` respectively.
-   Fields in file:
    -   `asset_id` - namespaced id for this variant asset, resolves to `assets/<namespace>/textures/<path>.png`
    -   `spawn_conditions` - field described in uniform variant selection above

### Cat variants

-   Cat variants can be data-driven by adding entries to `data/<namespace>/cat_variant/<id>.json`
-   This feature is experimental
-   Fields in file:
    -   `asset_id` - namespaced id for this variant asset, resolves to `assets/<namespace>/textures/<path>.png`
    -   `spawn_conditions` - field described in uniform variant selection above

### Frog variants

-   Frog variants can be data-driven by adding entries to `data/<namespace>/frog_variant/<id>.json`
-   This feature is experimental
-   Fields in file:
    -   `asset_id` - namespaced id for this variant asset, resolves to `assets/<namespace>/textures/<path>.png`
    -   `spawn_conditions` - field described in uniform variant selection above

### Item Components

#### New `weapon` component

-   `can_disable_blocking` field is replaced with `disable_blocking_for_seconds`
    -   `disable_blocking_for_seconds` - non-negative float (default: `0`)
        -   If non-zero, will disable a blocking Shield on successful attack for the specified amount of seconds

#### New `blocks_attacks` component

-   When present, this item can be used like a Shield to block attacks to the holding player
-   Format: object with fields:
    -   `block_delay_seconds` - non-negative float (default: `0`)
        -   The number of seconds that right-click must be held before successfully blocking attacks
    -   `disable_cooldown_scale` - non-negative float (default: `1`)
        -   Multiplier applied to the number of seconds that the item will be on cooldown for when attacked by a disabling attack (`disable_blocking_for_seconds` on the `weapon` component)
        -   If 0, this item can never be disabled by attacks
    -   `damage_reductions` - list of object with fields (optional)
        -   Controls how much damage should be blocked in a given attack
        -   If not specified, all damage is blocked
        -   Each entry in the list contributes an amount of damage to be blocked, optionally filtered by damage type
        -   Each entry adds to blocked damage, determined by `clamp(base + factor * dealt_damage, 0, dealt_damage)`
        -   The final damage applied in the attack to the entity is determined by `dealt_damage - clamp(blocked_damage, 0, dealt_damage)`
        -   Entry format:
            -   `type` - damage type id, list of damage type ids, or hash-prefixed damage type tag (optional)
                -   This entry will only contribute to the blocked damage if the dealt damage type matches this field
                -   If not specified, any damage type will be accepted
            -   `base` - float
                -   Constant amount of damage to be blocked
            -   `factor` - float
                -   Fraction of the dealt damage that should be blocked
    -   `item_damage` - object with fields (optional)
        -   Controls how much damage should be applied to the item from a given attack
        -   If not specified, a point of durability is removed for every point of damage dealt
        -   The final damage applied to the item is determined by: `floor(base + factor * dealt_damage)`
        -   The final value may be negative, causing the item to be repaired
        -   Format:
            -   `threshold` - non-negative float
                -   The minimum amount of damage dealt by the attack before item damage is applied to the item
            -   `base` - float
                -   Constant amount of damage applied to the item, if `threshold` is passed
            -   `factor` - float
                -   Fraction of the dealt damage that should be applied to the item, if `threshold` is passed
    -   `block_sound` - sound event (optional)
        -   If specified, this sound will be played when an attack is successfully blocked
    -   `disable_sound` - sound event (optional)
        -   If specified, this sound will be played when the item goes on its disabled cooldown due to an attack

#### New `break_sound` component

-   When present, this sound will be played when the item runs out of durability and breaks
-   If not present, no sound will be played on break
-   This component is present by default on every item type
-   Format: sound event
    -   e.g. `break_sound='item.wolf_armor.break'`

#### New `provides_banner_patterns` component

-   When present, this item can be placed in the pattern slot of a Loom
-   Format: hash-prefixed banner pattern tag
    -   e.g. `provides_banner_patterns='#minecraft:pattern_item/globe'`

#### New `provides_trim_material` component

-   When present, this item will provide the specified trim material when used in a trimming recipe
-   Note that to be used in the built-in smithing recipes, the item must also be in the `#trim_material` tag
-   As such, the trim material registry definition no longer specifies an item
-   Format: trim material id
    -   e.g. `provides_trim_material='minecraft:iron'`

#### Entity components

-   Some existing components are now also transferred from spawning item to spawned entity:
    -   `minecraft:custom_name` - any entity
    -   `minecraft:potion_contents` - Lingering Potion to Area Effect Cloud
    -   `minecraft:potion_duration_scale` - Lingering Potion to Area Effect Cloud

#### New `tooltip_display` component

-   This component allows the tooltips provided specifically by any given item component to be surpressed
-   This replaces the previous `show_in_tooltip` fields, `hide_additional_tooltip` and `hide_tooltip` components
-   Format: object with fields:
    -   `hide_tooltip` - boolean (default: `false`)
        -   If true, the item will have no tooltip when hovered
    -   `hidden_components` - list of item component ids (default: `[]`)
        -   The tooltips provided by any component in this list will be hidden
        -   If that component provides no tooltip, it will have no effect

#### Removed `hide_additional_tooltip` Component

-   Replaced by use of the `tooltip_display` component and `hidden_components` field
-   The following components previously covered by the `hide_additional_tooltip` component may need to be hidden:
    -   `minecraft:banner_patterns`
    -   `minecraft:bees`
    -   `minecraft:block_entity_data`
        -   Specifically, Mob Spawner and Trial Spawner block entity data will display the configured mob
    -   `minecraft:block_state`
        -   Specifically, the `honey_level` property will be displayed in the tooltip for any item with this specified
    -   `minecraft:bundle_contents`
    -   `minecraft:charged_projectiles`
    -   `minecraft:container`
    -   `minecraft:container_loot`
    -   `minecraft:firework_explosion`
    -   `minecraft:fireworks`
    -   `minecraft:instrument`
    -   `minecraft:map_id`
    -   `minecraft:painting/variant`
    -   `minecraft:pot_decorations`
    -   `minecraft:potion_contents`
    -   `minecraft:tropical_fish/pattern`
    -   `minecraft:written_book_content`
-   This additionally means that tooltips from the above listed components are no longer restricted to specific item types
-   Note: for existing items in a world with the `hide_additional_tooltip` component, any of the above listed components also present on the same item will be added to the list to hide in `tooltip_display`

#### Removed `hide_tooltip` Component

-   Replaced by use of the `tooltip_display` component and `hide_tooltip` field

#### `attribute_modifiers` Component

-   Removed `show_in_tooltip` field, replaced by `tooltip_display` component
-   This component now always uses its simplified form, with the `modifiers` field inlined to top-level
    -   e.g. `attribute_modifiers={modifiers:[...]}` -> `attributes_modifiers=[...]`

#### `dyed_color` Component

-   Removed `show_in_tooltip` field, replaced by `tooltip_display` component
-   This component now always uses its simplified form, with the `rgb` field inlined to top-level
    -   e.g. `dyed_color={rgb:12345}` -> `dyed_color=12345`
-   The specified color now supports the RGB array format
    -   e.g. `dyed_color=[0.5, 1.0, 0.2]`

#### `can_place_on` and `can_break` Components

-   Removed `show_in_tooltip` field, replaced by `tooltip_display` component
-   The `predicates` field has been inlined to top-level, and supports either a single element or list
    -   e.g. `can_place_on={predicates:[{blocks:'stone'},{blocks:'dirt'}]}` -> `can_place_on=[{blocks:'stone'},{blocks:'dirt'}]`
    -   or: `can_place_on={predicates:[{blocks:'stone'}]}` -> `can_place_on={blocks:'stone'}`

#### `enchantments` and `stored_enchantments` Components

-   Removed `show_in_tooltip` field, replaced by `tooltip_display` component
-   These components now always use their simplified form, with the `levels` field inlined to top-level
    -   e.g. `enchantments={levels:{sharpness:2}}` -> `enchantments={sharpness:2}`

#### `jukebox_playable` Component

-   Removed `show_in_tooltip` field, replaced by `tooltip_display` component

#### `trim` Component

-   Removed `show_in_tooltip` field, replaced by `tooltip_display` component

#### `unbreakable` Component

-   Removed `show_in_tooltip` field, replaced by `tooltip_display` component

### Particles

-   The particle type `tinted_leaves` now has a parameter:
    -   `color`: Tint color, specified either as packed int or list of 4 floats

### Recipes

#### `smithing_transform` Recipe Type

-   The `base` ingredient field is no longer optional
    -   Previously, if no base ingredient was given, the recipe would parse but never be useable

#### `smihing_trim` Recipe Type

-   The `base`, `template`, and `addition` ingredient fields are no longer optional
    -   Previously, if these ingredients were not given, the recipe would parse but never be useable
-   Added new `pattern` field, controlling which trim pattern will be applied in the recipe
    -   As such, the trim pattern registry definition no longer specifies the item
    -   Format: trim pattern id
    -   e.g. `"pattern": "minecraft:bolt"`

### Trim Patterns and Trim Materials

-   The registry definitions for trim patterns and trim materials no longer include an `item` field
-   Instead, this mapping in patterns and materials is defined by the recipe and item components respectively

### Loot Functions

#### `toggle_tooltips`

-   Now supports any component id in the `toggles` map
-   Any component specified will be toggled in the `tooltip_display` component

## Resource Pack Version 49

### Item Models

#### `minecraft:component` Select Property

-   If the selected value comes from a registry and the current datapacks does not provide it, the entry will be silently ignored
-   In previous snapshot, unrecognized elements caused the whole item model to be ignored

#### `minecraft:component` Boolean Property

-   New conditional model property has been added to `condition` item model: `component`
-   Uses component predicates (like ones used in item predicates) to match item components
    -   However, instead of encoding them as a map of `<predicate type>:<predicate value>`, a single predicate is encoded in two fields
-   Fields:
    -   `predicate` - type of component predicate (member of `minecraft:data_component_predicate_type` registry)
    -   `value` - predicate-specific value

### Atlas

#### `minecraft:paletted_permutations` sprite source

-   New field:
    -   `separator` - optional string (default: `_`) - value to be used when joining texture and permutation names to produce sprite name

## Fixed bugs in 25w04a

-   [MC-98271](https://bugs.mojang.com/browse/MC-98271) The sound of blocking with a shield is only hearable by other players (not the person blocking)
-   [MC-165421](https://bugs.mojang.com/browse/MC-165421) Bubble columns have the opposite effect on wind charges
-   [MC-165461](https://bugs.mojang.com/browse/MC-165461) Crossbow loading animation stops after loading, even when still holding down right click
-   [MC-255756](https://bugs.mojang.com/browse/MC-255756) When the shield is broken between players, the attacking side has no shield breaking sound
-   [MC-276061](https://bugs.mojang.com/browse/MC-276061) Decorated pot sherds don't visually update until relog when replacing with blank pot
-   [MC-278400](https://bugs.mojang.com/browse/MC-278400) Arrows and tridents move after hitting a block in flowing lava
-   [MC-279217](https://bugs.mojang.com/browse/MC-279217) Arrows and tridents constantly spin after hitting a block in flowing lava
-   [MC-279218](https://bugs.mojang.com/browse/MC-279218) The minecraft:enchant.thorns.hit sound does not play when mobs or players are killed by the Thorns enchantment
-   [MC-279225](https://bugs.mojang.com/browse/MC-279225) Players jitter and land slightly too high up when landing on powder snow while wearing leather boots
-   [MC-279232](https://bugs.mojang.com/browse/MC-279232) SNBT text components prevent mixing text styles in lists
-   [MC-279389](https://bugs.mojang.com/browse/MC-279389) The minecraft:entity.arrow.hit;;_;;player sound is played when player is hit by an arrow shot by himself
-   [MC-279454](https://bugs.mojang.com/browse/MC-279454) hide;;_;;additional;;_;;tooltip no longer hides author and generation on written books
-   [MC-279480](https://bugs.mojang.com/browse/MC-279480) The "test;;_;;instance;;_;;block.reset;;_;;success" string incorrectly spells the word "succeeded" as "succeded"
-   [MC-279481](https://bugs.mojang.com/browse/MC-279481) Leaf litter no longer generates in forests or wooded badlands
-   [MC-279482](https://bugs.mojang.com/browse/MC-279482) Elements within the test block and test instance block menus are not selected in order when using the TAB key
-   [MC-279483](https://bugs.mojang.com/browse/MC-279483) Test blocks set to start mode show the "Message:" text despite no text field being present
-   [MC-279485](https://bugs.mojang.com/browse/MC-279485) Test block and test instance block menus have blurred backgrounds
-   [MC-279486](https://bugs.mojang.com/browse/MC-279486) Some strings displayed within the test instance block interface are untranslatable
-   [MC-279487](https://bugs.mojang.com/browse/MC-279487) The "Test Instance ID" and "Test Structure Size" text within the test instance block interface are positioned too far to the right
-   [MC-279488](https://bugs.mojang.com/browse/MC-279488) Leaf litter generates very sparsely in Dark Forests
-   [MC-279489](https://bugs.mojang.com/browse/MC-279489) An unexpected error occurs when attempting to create tests with large sizes
-   [MC-279490](https://bugs.mojang.com/browse/MC-279490) No command feedback messages are displayed when attempting to reset tests that don't exist
-   [MC-279491](https://bugs.mojang.com/browse/MC-279491) The "commands.test.no;;_;;tests" raw translation key is displayed when using "/test run..." commands in situations where no tests exist
-   [MC-279492](https://bugs.mojang.com/browse/MC-279492) An unexpected error occurs when attempting to locate tests that don't exist
-   [MC-279493](https://bugs.mojang.com/browse/MC-279493) No command feedback messages are displayed when using the "/test create" command
-   [MC-279498](https://bugs.mojang.com/browse/MC-279498) Test blocks and test instance blocks aren't part of the "#minecraft:dragon;;_;;immune" or "#minecraft:wither;;_;;immune" tags
-   [MC-279502](https://bugs.mojang.com/browse/MC-279502) Axolotl variants are no longer saved when bucketing
-   [MC-279504](https://bugs.mojang.com/browse/MC-279504) "minecraft:enchantments" component does not work on the select property of Item Models
-   [MC-279505](https://bugs.mojang.com/browse/MC-279505) Horse-esque mobs that disallow horse armor still show an non-interactive slot
-   [MC-279511](https://bugs.mojang.com/browse/MC-279511) Using "minecraft:always;;_;;pass" while the player is inside the test zone breaks the world
-   [MC-279518](https://bugs.mojang.com/browse/MC-279518) Test environment accepts minecraft:raining instead of minecraft:weather
-   [MC-279519](https://bugs.mojang.com/browse/MC-279519) Some words within some test command strings are always pluralized
-   [MC-279522](https://bugs.mojang.com/browse/MC-279522) GameTest entrypoint doesn't load zip datapacks
-   [MC-279527](https://bugs.mojang.com/browse/MC-279527) GameTest entrypoint doesn't load custom tests from datapacks
-   [MC-279538](https://bugs.mojang.com/browse/MC-279538) The key name of the test instances field that represents the namespaced ID of the test environment is different from the changelog
-   [MC-279539](https://bugs.mojang.com/browse/MC-279539) Villager variant is not applied to spawned zombie villagers
-   [MC-279553](https://bugs.mojang.com/browse/MC-279553) Players using items no longer turn their body in the moving direction while moving diagonally
-   [MC-279570](https://bugs.mojang.com/browse/MC-279570) Some piston operations don't send neighbor updates
-   [MC-279573](https://bugs.mojang.com/browse/MC-279573) The "test;;_;;instance;;_;;block.error.no;;_;;test" string is missing the word "no"
-   [MC-279588](https://bugs.mojang.com/browse/MC-279588) Test instance field typo 'sky;;_;;accesss'
-   [MC-279599](https://bugs.mojang.com/browse/MC-279599) /test pos is offset by one on the y and z axis
-   [MC-279601](https://bugs.mojang.com/browse/MC-279601) "test.error.expected;;_;;entity;;_;;at;;_;;pos" translation is missing
-   [MC-279646](https://bugs.mojang.com/browse/MC-279646) Toggling fullscreen with F11 does not visually update the fullscreen option in the video settings menu
-   [MC-279653](https://bugs.mojang.com/browse/MC-279653) Block Entity Data desynchronizes after subsequent setblock commands

---

This week's snapshot comes with a huge update to game tests! The game tests system is now accessible through data packs with the new test command. You can now run block based tests with the new test block or set up even more versatile test from code in mods.

Happy testing!

## Changes

-   Leaf Litter can be used in the Composter
-   Saddles equipped onto Pigs or Striders will now maintain properties such as custom name when dropped

## Technical Changes

-   The Data Pack version is now 63
-   The Resource Pack version is now 48
-   New entry point `net.minecraft.gametest.Main` is present in the server jar
    -   Automatically starts a server and runs all available game tests

### Game Test Main

This new entry point automatically starts a server, runs all available game test and then exists.

Options:

-   `--help` - Shows usage information
-   `--packs <path>` - Set a folder of datapacks to include in the world
    -   Any zip file or folder with a `pack.mcmeta` file is included
-   `--report <path>` - Exports results in a junit-like XML report at the given path
-   `--tests <selection>` - Specify which tests to run with a selection - a wildcard expression matching namespace test instance IDs
    -   If omitted, or used with an empty ID, runs all tests
-   `--universe <path>` - The path to where the test server world will be created
    -   Any existing folder will be replaced
    -   Default: `gametestserver`
-   `--verify <boolean>` - Enables test verification
    -   Runs the tests specified with `test` or `testNamespace` 100 times for each 90 degree rotation step
    -   Default: `false`

Example usage: `java -DbundlerMainClass="net.minecraft.gametest.Main" -jar server.jar --packs mytestpacks`

## Data Pack Versions 63

-   The Game Tests system is now accessible through data packs and for mods
-   Entity variants are now set and queried with components
-   Added `saddle` equipment slot, driven by the `equippable` component - Only mobs that normally support saddles will support riding and rendering of the saddle - Items in the `saddle` slot can apply attribute modifiers as with other equipment

### Game Tests

The Game Tests system is a new integrated system for testing aspects of the game. Each test is an asset defining some parameters for how the test gets executed, combined with a saved structure file containing a base setup.

Generally, the test framework expects to run tests in a separate superflat world.

#### Test Instances

Test instances are defined in the registry `test_instance`. They're small assets defining a test to run.

Fields:

-   `environment`: Namespaced ID of the test environment to run this test as part of
-   `structure`: The namespaced ID of the structure to use for the test
-   `max_ticks`: A positive integer representing the maximum number of ticks allowed to pass before the test is considered timed out
-   `setup_ticks`: Optional non-negative integer (default: `0`) representing a number of ticks to wait after placing the structure before starting the test
-   `required`: Optional boolean (default `true`) - whether the test is considered required to pass for the full test suite to pass
-   `rotation`: Optional rotation to apply to the test structure
    -   One of `none` (default), `clockwise_90`, `180` and `counterclockwise_90`
-   `manual_only`: Optional boolean (default `false`), set to `true` for tests that are not included as part of automated test runs
-   `sky_access`: Whether the test needs clear access to the sky
    -   By default (`false`), tests are enclosed in barrier blocks - if set to `true`, the top is left open
-   `max_attempts`: Number of attempts to run the test (default `1`)
-   `required_successes`: Number of attempts that must succeed for the test to be considered successful (default `1`)
-   `type`: The type of test - one of `block_based` and `function`

##### Function Tests

Function tests rely on built-in functions to run a test and indicate success or failure. They have one additional field:

-   `function`: The namespaced ID of the Test Function to run

See the "Using the Game Test Framework from Code" changelog section for more information.

##### Block Based Tests

Block based tests use Test Blocks in the test structure to run the test and indicate success or failure.

#### Test Environments

Test Environments are a way to group up tests and give them the right preconditions to run. A Test Environment is an asset in the `test_environment` registry. Each Test Environment definition has a `type` field that determines its setup:

-   `all_of` definitions apply the setup from several sub-definitions in the `definitions` field
-   `function` definitions use mcfunction files as setup and teardown
    -   `setup`: Optional namespaced ID of the mcfunction to use for setup, if any
    -   `teardown`: Optional namespaced ID of the mcfunction to use for teardown, if any
-   `game_rules`: definitions set any number of game rules
    -   `bool_rules`: A list of boolean game rules to set and the value to set
    -   `int_rules`: A list of integer game rules to set and the value to set
    -   Each rule is an object with two fields:
        -   `rule`: The exact name of the rule to set
        -   `value`: The value to set
    -   Game rules are reset to their default values after the test environment has completed
-   `weather` definitions sets the weather state
    -   `weather`: The weather to set - one of `clear`, `rain` and `thunder`
-   `time_of_day` definitions set a given time of day
    -   `time`: The time of day to set in number of ticks, as a non-negative integer

The game provides a single, empty Test Environment by default: `minecraft:default`.

#### Test Blocks

The Test Block is a block used for implementing a block-based tests. It has four modes:

-   `start`: Triggers a redstone pulse when the test starts
-   `log`: Logs a message to the log file when powered by redstone
-   `fail`: Fails the test when powered by redstone
-   `accept`: Completes the test when powered by redstone

Block-based tests are required to have at least one `start` block and one `accept` block in the structure.

#### The `test` Command

The `test` command is a new command used to create and run tests.

Syntax:

    test clearall [<radius>]
    test clearthat
    test clearthese
    
    test create <test> [<width>] [<height> <depth>]
    
    test locate <selector>
    
    test resetclosest
    test reseetthese
    test resetthat
    
    test pos [<variable>]
    
    test run <selector> [<numberOfTimes>] [<untilFailed>] [<rotationSteps>] [<testsPerRow>]
    test runclosest [<numberOfTimes>] [<untilFailed>]
    test runfailed [<numberOfTimes>] [<untilFailed>] [<rotationSteps>] [<testsPerRow>]
    test runmultiple <selector> [<amount>]
    test runthat [<numberOfTimes>] [<untilFailed>]
    test runthese [<numberOfTimes>] [<untilFailed>]
    
    test stop
    
    test verify <tests>
    

Parameters:

-   `radius`: The radius to clear tests within
-   `test`: The namespaced ID of a test
-   `selector`: A wildcard-enabled selector for test IDs
    -   Supports `*` and `?` for matching namespaced IDs
    -   If namespace is not supplied, defaults to `minecraft`
    -   Examples:
        -   `*:*` - matches all IDs
        -   `*` - matches everything in the `minecraft` namespace
        -   `custom:folder/*_test_?` - matches IDs in the `folder` folder of the `custom` namespace, with a prefix followed by `_test_` followed by a single valid character
-   `width`: The width of the test structure - if omitted, `5` is used
-   `height`: The height of the test structure - if omitted, the width is used
-   `depth`: The depth of the test structure - if omitted, the width is used
-   `variable`: The variable name to include in the copied code snippet
-   `numberOfTimes`: The number of times to repeat each test - if omitted, `1` is ued
-   `untilFailed`: Boolean (default `false`) noting that the test should be stopped as soon as one iteration fails
-   `rotationSteps`: Number of extra 90 degree steps to apply to the test - if omitted, `0` is used
-   `testsPerRow`: Number of tests to place per row in a grid layout - if omitted, `8` is used

##### `test clear*`

These subcommands clear the structures and blocks associated with the selected tests.

##### `test create`

This subcommand creates a test setup in the current location for the given test, preparing for a structure of the given size. This gives a starting point for creating the structure for the test.

##### `test locate`

Attempts to locate the given test. Note that only loaded chunks are searched.

##### `test reset*`

These subcommands reset the structures for the selected tests, removing any surrounding barriers and placing the structure in from scatch.

##### `test pos`

Shows the local coordinates to the block pointed at in the test. If the optional variable name is specified, this variable name is used in a code fragment obtained by clicking on the coordinates in the output message.

##### `test run*`

Runs one or more tests. If multiple tests are run at once, they are placed in a grid and run in parallel, although only up to a certain limit. Beyond that limit, tests are run in rounds where each round completes before any tests from the next round are started.

For each test, loads the given structure and runs the associated test. Each test location will have a beacon beam showcasing the test status.

-   Gray beacon = in progress
-   Red = fail (required test)
-   Orange = fail (optional test)
-   Green = success

If a test fails, the error is shown on a lectern book and an overlay.

Note that Game Tests are designed to run on standard superflat worlds. The area around each test is replaced with stone when it runs, and the running test is encased in barrier blocks.

##### `test stop`

This stops all running tests. Note that gameplay events triggered by tests may still remain.

##### `test verify*`

Verifies one or more tests by running multiple instances of the same test.

#### Test Instance Blocks

To run a test in a world, a Test Instance Block is used. This type of block represents the test as placed in the world and is used to interact with that test, to save the structure, reset or run the test.

Using the `test` command to run or create a test will also place a Test Instance Block to control that test.

#### Using the Game Test Framework from Code

The Game Test Framework can also be used from code in a more versatile manner than block-based tests. For this to work, you need to mod the game to add your test functions to the `test_function` registry (`Registries.TEST_FUNCTION`).

Hook into some startup method (pre-registry bootstrap) to add your loader - call `TestFunctionLoader.registerLoader()` with an implementation of `TestFunctionLoader`. Your implementation can then use the provided `register` consumer to register test functions with their namespaced IDs. This namespaced ID can then be referenced in a `function` type Test Instance.

A test function is a `Consumer<GameTestHelper>`, using that `GameTestHelper` instance to manipulate the world and make assertions about the state of the resulting world.

The helper can be used to summon mobs, set blocks, query for blocks and entities and assert the state of the test. Most `GameTestHelper` methods take test-local coordinates, which you can also find using `/test pos`.

Example code that might go along with a test structure with a locked hopper containing a cod, pointed into a furnace:

    public void furnace_smelts_item(final GameTestHelper helper) {
        helper.setBlock(0, 4, 0, Blocks.AIR);
        helper.succeedWhen(() -> helper.assertContainerContainsSingle(new BlockPos(0, 0, 0), Items.COOKED_COD));
    }
    

More complicated setups will often use `helper.startSequence()` to model sequences of events that must happen.

As opposed to block-based tests, function tests failing will often produce more helpful error messages including the location of whatever failed and what was expected at that location.

### Commands

-   The `horse.saddle` item slot has been renamed to `saddle`, and now supports any entity that can equip a Saddle

### Text Component Data Format

#### Hover Events

-   For the `show_text` action:
    -   `text` field has been renamed to `value`

### Tags

#### Entity Tags

-   Added `#can_equip_saddle` - entities that can be equipped with a Saddle
    -   Note: this does not mean that the Saddle will function, just that it can be equipped into the saddle slot

### Entity Data

-   The `ArmorItems`, `HandItems`, and `body_armor_item` fields have been merged into an `equipment` field
    -   Format: map between equipment slot type and item stack
        -   Valid equipment slots: `head`, `chest`, `legs`, `feet`, `mainhand`, `offhand`, `body`, `saddle`
    -   If not specified or removed, the entity will have no equipment
    -   e.g. `equipment:{chest:{id:'minecraft:diamond_chestplate'}}`
    -   This affects all mobs and Armor Stands, but Players are unaffected
-   The data format of saddles has been unified between mobs such as Horses and Pigs, becoming a new kind of equipment slot (and stored in the `equipment.saddle` field)
    -   This is a pure rename from the previous `SaddleItem` in Horse-like mobs
    -   This also replaces the boolean `Saddle` flag from Pigs and Striders
    -   The Saddle dropping on death is now affected by the `drop_chances` field, as with other equipment slots
-   The `FallDistance` field has been changed from float to double and is now called `fall_distance`

### Item Components

#### `weapon` component

-   `damage_per_attack` field was renamed to `item_damage_per_attack`

#### `equippable` Component

-   Can now apply to `saddle` slot
-   Any mob can now have equipment added in the `body` slot as long as the component allows it (`allowed_entities`)
-   Added new optional field: `equip_on_interaction` (boolean)
    -   If `true`, players can equip this item onto a target mob by right-clicking it (as long as this item can be equipped on the target at all)
    -   The item will not be equipped if the target already has an item in the relevant slot
    -   If not specified, defaults to `false`

#### Entity variant components

-   Entities now have a set of components for configuring variants and other aspects of apperance
-   If those components are present on spawning item (like spawn eggs, mob buckets, `minecraft:painting`, `minecraft:item_frame`), they will be applied to new entity
-   Components are currently not restored when spawn egg is picked from existing entity
-   New components:
    -   `villager/variant` - one of `desert`, `jungle`, `plains`, `savanna`, `snow`, `swamp`, `taiga`
    -   `wolf/variant` - namespaced id from `wolf_variant` registry
    -   `wolf/collar` - one of 16 dye colors
    -   `fox/variant` - one of `red`, `snow`
    -   `salmon/size` - one of `small`, `medium`, `large`
    -   `parrot/variant` - one of `red_blue`, `blue`, `green`, `yellow_blue`, `gray`
    -   `tropical_fish/pattern` - one of `kob`, `sunstreak`, `snooper`, `dasher`, `brinely`, `spotty`, `flopper`, `stripey`, `glitter`, `blockfish`, `betty`, `clayfish`
    -   `tropical_fish/base_color` - one of 16 dye colors
    -   `tropical_fish/pattern_color` - one of 16 dye colors
    -   `mooshroom/variant` - one of `red`, `brown`
    -   `rabbit/variant` - one of `brown`, `white`, `black`, `white_splotched`, `gold`, `salt`, `evil`
    -   `pig/variant` - namespaced id from `pig_variant` registry
    -   `frog/variant` - namespaced id from `frog_variant` registry
    -   `horse/variant` - one of `white`, `creamy`, `chestnut`, `brown`, `black`, `gray`, `dark_brown`
    -   `painting/variant` - namespaced id from `painting_variant` registry
    -   `llama/variant` - one of `creamy`, `white`, `brown`, `gray`
    -   `axolotl/variant` - one of `lucy`, `wild`, `gold`, `cyan`, `blue`
    -   `cat/variant` - namespaced id from `cat_variant` registry
    -   `cat/collar` - one of 16 dye colors
    -   `sheep/color` - one of 16 dye colors
    -   `shulker/color` - one of 16 dye colors
-   Mob buckets and paintings available in creative menu will now use new variants instead of `minecraft:entity_data` component
-   Custom tooltips for Bucket of Tropical Fish and Painting items are now based on new components instead of `minecraft:bucket_entity_data` and `minecraft:entity_data`

### Predicates

#### Entity predicates

-   New optional field has been added to entity predicate: `components`
    -   When present, predicate will match contents of entity components (similarily to field `components` on item predicate that works on item stacks)
    -   Format: map of component type key to matching component values
-   Following entity sub-predicates have been removed and replaced with combination of `components` predicate and variant entity components:
    -   `minecraft:axolotl`
    -   `minecraft:fox`
    -   `minecraft:mooshroom`
    -   `minecraft:rabbit`
    -   `minecraft:horse`
    -   `minecraft:llama`
    -   `minecraft:villager`
    -   `minecraft:parrot`
    -   `minecraft:salmon`
    -   `minecraft:tropical_fish`
    -   `minecraft:painting`
    -   `minecraft:cat`
    -   `minecraft:frog`
    -   `minecraft:wolf`
    -   `minecraft:pig`
-   Field `color` has been removed from `minecraft:sheep` sub-predicate

## Resource Pack Version 48

-   Added new equipment asset layer type for Pigs and Striders, and moved saddle textures
-   Changed the size of `pig_saddle` texture

### Equipment Assets

-   Equipment assets may now define new layer types:
    -   `pig_saddle` - equipment layer for Pig saddles
    -   `strider_saddle` - equipment layer for Strider saddles
    -   `camel_saddle` - equipment layer for Camel saddles
    -   `horse_saddle` - equipment layer for Horse saddles
    -   `donkey_saddle` - equipment layer for Donkey saddles
    -   `mule_saddle` - equipment layer for Mule saddles
    -   `skeleton_horse_saddle` - equipment layer for Skeleton Horse saddles
    -   `zombie_horse_saddle` - equipment layer for Zombie Horse saddles
-   The following textures have been moved to support the use of equipment assets for saddles:
    -   `entity/pig/pig_saddle.png` -> `entity/equipment/pig_saddle/saddle.png`
    -   `entity/strider/strider_saddle.png` -> `entity/equipment/strider_saddle/saddle.png`
-   The following textures have been split from their base entity texture to support the use of equipment assets for saddles:
    -   `entity/camel/camel.png` -> `entity/equipment/camel_saddle/saddle.png`
    -   `entity/horse/horse_<variant>.png` -> `entity/equipment/horse_saddle/saddle.png`
    -   `entity/horse/donkey.png` -> `entity/equipment/donkey_saddle/saddle.png`
    -   `entity/horse/mule.png` -> `entity/equipment/mule_saddle/saddle.png`
    -   `entity/horse/horse_skeleton.png` -> `entity/equipment/skeleton_horse_saddle/saddle.png`
    -   `entity/horse/horse_zombie.png` -> `entity/equipment/zombie_horse_saddle/saddle.png`

### Item Models

#### `minecraft:component` Select Property

-   New data source has been added to `select` item model: `component`
-   Returns value of component on item, if any
-   Fields:
    -   `component` - namespaced ID of component type
-   Possible values: depends on component type
    -   Example: if `component` is set to `minecraft:wolf/collar`, list of cases will accept dye colors, like `lime`

## Fixed bugs in 25w03a

-   [MC-13738](https://bugs.mojang.com/browse/MC-13738) Invisible saddle when using invisibility potion on a horse, donkey or mule
-   [MC-80243](https://bugs.mojang.com/browse/MC-80243) Saddles don't apply attribute modifiers when worn by entities
-   [MC-189525](https://bugs.mojang.com/browse/MC-189525) Armored entities from pre-1.9 worlds upgrade to dual wielding armor
-   [MC-190000](https://bugs.mojang.com/browse/MC-190000) Saddles equipped on horses cannot be replaced without removing them first
-   [MC-256469](https://bugs.mojang.com/browse/MC-256469) Invisible camels don't show their saddles
-   [MC-266912](https://bugs.mojang.com/browse/MC-266912) Saddle equipping sounds aren't played when saddles are equipped on horses, donkeys, mules, or camels shortly after the said entity is summoned
-   [MC-269637](https://bugs.mojang.com/browse/MC-269637) Horses can wear multiple saddles but not multiple horse armor
-   [MC-270192](https://bugs.mojang.com/browse/MC-270192) The saddles of some entities stay visible through their death animation
-   [MC-270197](https://bugs.mojang.com/browse/MC-270197) The saddle on pigs and striders stays visible through their death animation
-   [MC-272100](https://bugs.mojang.com/browse/MC-272100) Unused palette pixels in horse textures (horse;;_;;;;[;;brown/chestnut/creamy/white;;];;.png)
-   [MC-272790](https://bugs.mojang.com/browse/MC-272790) Shulker boxes and other blocks in the end exit portal when it changes state are not dropped as items
-   [MC-274258](https://bugs.mojang.com/browse/MC-274258) All horse textures contain an unused chest bag texture
-   [MC-278673](https://bugs.mojang.com/browse/MC-278673) The x-rotation of /teleport is limited to ±90 degrees relative to the entity's original angle
-   [MC-279208](https://bugs.mojang.com/browse/MC-279208) Players can no longer begin sprinting when pressing a sideways movement key first
-   [MC-279211](https://bugs.mojang.com/browse/MC-279211) Shulker boxes both keep and drop their contents upon being broken via certain methods causing item duplication
-   [MC-279213](https://bugs.mojang.com/browse/MC-279213) Mushroom Blocks can't replace Leaf Litter
-   [MC-279221](https://bugs.mojang.com/browse/MC-279221) Leaf Litter replaces leaves in world gen
-   [MC-279224](https://bugs.mojang.com/browse/MC-279224) Using bone meal in meadows doesn't generate wildflowers
-   [MC-279226](https://bugs.mojang.com/browse/MC-279226) Experience orbs of any value all render as the smallest value
-   [MC-279233](https://bugs.mojang.com/browse/MC-279233) Shulker boxes drop their contents when broken
-   [MC-279234](https://bugs.mojang.com/browse/MC-279234) The minecraft:entity.generic.extinguish;;_;;fire sound does not play when the fire on an entity is extinguished
-   [MC-279238](https://bugs.mojang.com/browse/MC-279238) Dying to a minecart with TNT ignited by a blaze fireball doesn't count as the blaze's kill
-   [MC-279239](https://bugs.mojang.com/browse/MC-279239) The motion of primed TNT is choppy and jittery
-   [MC-279245](https://bugs.mojang.com/browse/MC-279245) Most hostile mobs aren't spawning even under the right conditions
-   [MC-279248](https://bugs.mojang.com/browse/MC-279248) Lava collision is too high
-   [MC-279281](https://bugs.mojang.com/browse/MC-279281) Fall damage occurs from jumping from 2 blocks up
-   [MC-279282](https://bugs.mojang.com/browse/MC-279282) Parrots with non-player owner UUID cause crash upon spawning
-   [MC-279285](https://bugs.mojang.com/browse/MC-279285) Experience orbs abruptly accelerate towards the ground very fast
-   [MC-279301](https://bugs.mojang.com/browse/MC-279301) Player dies by falling from 22.00001 blocks instead of 23 blocks
-   [MC-279313](https://bugs.mojang.com/browse/MC-279313) The motion of item entities is choppy and jittery under certain circumstances
-   [MC-279314](https://bugs.mojang.com/browse/MC-279314) Projectiles twitch up and down slightly while flying through the air
-   [MC-279316](https://bugs.mojang.com/browse/MC-279316) The motion of fishing bobbers is choppy and jittery
-   [MC-279339](https://bugs.mojang.com/browse/MC-279339) Update order for sloped rails is incorrect
-   [MC-279340](https://bugs.mojang.com/browse/MC-279340) Baby polar bears are too small
-   [MC-279345](https://bugs.mojang.com/browse/MC-279345) Pink petals and Wildflowers can no longer be grown by bone meal
-   [MC-279357](https://bugs.mojang.com/browse/MC-279357) Player can fall off edges while sneaking
-   [MC-279434](https://bugs.mojang.com/browse/MC-279434) Standing on powder snow and fire at the same time spams the fire extinguish sound
-   [MC-279459](https://bugs.mojang.com/browse/MC-279459) /setblock and other fills don't properly update block entities

---

It's the first snapshot Wednesday of 2025, and we have some fun new features to kick off the new year. This snapshot adds new ambient features to the game, including wildflowers, leaf litter, and falling leaves. Pigs are getting two new variants: you may venture into the colder biomes to find the cold pig, or head for sunnier spots to meet its counterpart – the warm pig! Lodestones are also becoming easier to craft, making them more accessible in the early game. Now you'll only need an iron ingot with your chiseled stone bricks.

## New Features

-   Added new falling leaves particles to Leaf blocks without particles
-   Added cold and warm variants for the Pig
-   Added Wildflowers block
-   Added Leaf Litter block

### Leaves block particles

-   All Leaves blocks now have chance of spawning falling leaf particles
-   These blocks are affected by this change:
    -   Oak Leaves
    -   Jungle Leaves
    -   Acacia Leaves
    -   Dark Oak Leaves
    -   Spruce Leaves
    -   Mangrove Leaves
    -   Birch Leaves
    -   Azalea Leaves
    -   Flowering Azalea Leaves

### Pig Variants

-   New Pig variants have been added, the variant is determined by the biome they spawn in
-   Temperate Pig - The Pig we are all familiar with
    -   Spawns by default where the cold and warm Pig variants do not spawn
-   Cold Pig - A variant that spawns in the following biomes:
    -   Old Growth Pine Taiga
    -   Old Growth Spruce Taiga
    -   Taiga
    -   Snowy Taiga
    -   Windswept Hills
    -   Windswept Gravelly Hills
    -   Windswept Forest
-   Warm Pig - A variant that spawns in the following biomes:
    -   Savanna
    -   Savanna Plateau
    -   Windswept Savanna
    -   Jungle
    -   Sparse Jungle
    -   Bamboo Jungle
    -   Eroded Badlands
    -   Wooded Badlands
    -   Badlands
-   When bred by a player, a baby Pig variant will not be chosen by the current biome, but instead randomly selected from one of the parents' variants

### Wildflowers

-   Wildflowers are a new type of flower which grow in Birch Forests, Old Growth Birch Forests and Meadows
-   Wildflowers can have different amounts of flowers in one block space
    -   Up to four Wildflowers can be placed in the same block space
    -   Placing a Wildflower into an already placed Wildflowers block increases the amount of flowers
    -   Using Bone Meal on Wildflowers will produce more Wildflowers
-   Wildflowers can be placed in four orientations
-   Wildflowers can be crafted into Yellow Dye

### Leaf Litter

-   Leaf Litter is a new type of decorative block which can be found in the Forests, Dark Forests and Wooded Badlands
-   Leaf Litter can have different amounts of leaves in one block space
    -   Up to four Leaf Litter pieces can be placed in the same block space
    -   Placing a Leaf Litter into an already placed Leaf Litter block increases the amount of leaves
-   Leaf Litter can be placed in four orientations
-   Leaf Litter can be created by smelting any type of Leaves block
-   Leaf Litter can be used as fuel for smelting
-   Leaf Litter has unique block sounds

## Changes

-   Lodestones have a new crafting recipe and can now be found in Ruined Portals
-   Added new break, place, step, fall and hit sounds for Iron Blocks, Iron Bars, Iron Trapdoors, Iron Doors and Heavy Weighted Pressure Plates
-   Zombified Piglins now need to be killed by a Player to drop the Player-specific loot
    -   This makes them consistent with all other mobs in the game
-   Chunks loaded by a portal will now be re-loaded again automatically when the world is reopened
-   Farm animals can now spawn in Badlands
-   Short Grass now generates slightly sparser in Meadows
-   The volume of the narrator is now affected by the game's configured volume in the 'Voice' category
-   Uploading a world to Realms will now enable Command Blocks by default
-   It is now possible to upload Hardcore singleplayer worlds to Realms
-   Bubble columns produce less particles and sounds when entities that are unaffected by them are inside them
-   If the game detects that the last startup did not complete normally, the fullscreen option will now be reset

### Garden Awakens Changes

-   Pale Garden biome now occupies more space that was previously taken by Dark Forest
-   Woodland Mansions can now generate in Pale Garden biome
-   Pale Oak Leaves and Pale Oak Saplings have an updated map color
-   Creakings can now be named using Name Tags
    -   Named Creaking will persist through the day
        -   However, it will still be torn down if stuck with a player or if it is too far from its Heart
    -   Named Creakings are still resistant to all damage, and can communicate with their Hearts via particles
-   Creaking Hearts correctly placed between Logs have a new dormant texture during the day
    -   Dormant Creaking Hearts cannot spawn new Creakings and Resin
-   Transition between the awake and dormant states for Creaking Hearts and transition of Eye Blossoms is now based on the fixed day time
    -   All these behaviors are no longer affected by weather or dimension brightness

### Lodestone Changes

-   The Lodestone is now crafted from 1 Iron Ingot surrounded by 8 Chiseled Stone Bricks
-   Lodestones can now be found as loot at Ruined Portals in the Overworld or Nether

## Technical Changes

-   The Data Pack version is now 62
-   The Resource Pack version is now 47

## Data Pack Version 62

-   Changes to commands
-   Updated data format of Text Components
-   `structure_block` in the `load` mode has now a new option: `Strict Placement`
    -   If set to `false`, the blocks in the placed structure will not trigger block updates, block entity side effects, or shape updates
-   The `Owner` field of tamed animals is no longer restricted to referencing Players
-   Updated data format of equipment drop chances in entity data
-   Added data-driven registry for pig variants
-   Added `pig` entity sub-predicate for matching pig variants

### Commands

-   Text Components in commands such as `/tellraw` or `/title` are now specified with SNBT instead of JSON
-   Text Style in the `/scoreboard` command when specifying the `styled` number format is also now specified with SNBT instead of JSON
-   The behavior of `setblock` and `fill` commands have changed in how they handle block entity data:
    -   If the block entity data is not specified, and the existing block has data, the block entity data will be preserved
    -   If the block entity data is specified, the block entity data will be set to the specified value
    -   To clear the block entity data explicitly, you must now specify the block entity data as `{}`
    -   The operation is now successful if either the block state changed or the block entity data changed
-   `fill`, `clone`, `setblock` and `place template` accept a new option: `strict`
    -   If specified, the command will place blocks as-is without triggering block updates and shape updates
-   The `replace` option in the `fill` command is no longer terminal, and can be followed with additional options
-   New syntax for commands to use the new `strict` option, and more flexible use of `replace`:
    -   `fill <from> <to> <block> keep`
    -   `fill <from> <to> <block> [replace <filter>]? [strict|destroy|hollow|outline]?`
    -   `clone [from <sourceDimension>]? <begin> <end> [to <targetDimension>]? <destination> [strict]? [[replace|masked|filtered <filter>] [force|move|normal]?]?`
    -   `setblock <pos> <block> [destroy|keep|replace|strict]?`
    -   `place template <template> [<pos> [<rotation> [<mirror> [<integrity> [<seed> [strict]?]?]?]?]?]?`

### Text Component Data Format

-   Text Components are no longer stored as JSON wrapped by a string
-   The format itself is the same as before, but inlined directly into the outer structure
-   For example, the item component `minecraft:custom_name="{;;";;text;;";;:;;";;Renamed item;;";;}"` will become `minecraft:custom_name={text:'Renamed item'}`
-   This includes Text Components passed as arguments to commands such as `/tellraw` or `/title`
    -   For example, `/tellraw @s ";;";;text;;";;:;;";;Hello world;;";;"` may become `/tellraw @s {text:'Hello world'}`
-   Note: in the case where Text Components are embedded in NBT, no distinction exists between boolean and integer types
    -   To pass boolean arguments to translations, you must use the string form
-   For Text Components with the `nbt` type and `interpret` set to `true`, Text Components will be parsed from the given NBT directly rather than converting to string and parsing as JSON
-   The format of hover and click events has been updated

#### Hover Events

-   The `hoverEvent` field has been renamed to `hover_event`
-   The legacy `value` field (which was parsed from a rendered text component) is no longer supported
-   For the `show_text` action:
    -   `contents` field has been renamed to `text`
    -   e.g. `{action:'show_text',contents:'Hello world'}` becomes `{action:'show_text',text:'Hello world'}`
-   For the `show_item` action:
    -   The `contents` field has been inlined
    -   e.g. `{action:'show_item',contents:{id:'minecraft:stick',count:2}}` becomes `{action:'show_item',id:'minecraft:stick',count:2}`
    -   If contents was specified only as an item id, it is replaced with the full format and inlined
    -   e.g. `{action:'show_item',contents:'minecraft:stick'}` becomes `{action:'show_item',id:'minecraft:stick'}`
-   For the `show_entity` action:
    -   The `contents` field has been inlined
    -   The `id` field has been renamed to `uuid`
    -   The `type` field has been renamed to `id`
    -   e.g. `{action:'show_entity',contents:{id:[I;0,0,0,0],type:'minecraft:pig'}}` becomes `{action:'show_entity',uuid:[I;0,0,0,0],id:'minecraft:pig'}`

#### Click Events

-   The `clickEvent` field has been renamed to `click_event`
-   For the `open_url` action:
    -   The `value` field has been renamed to `url`
    -   The click event will no longer parse if not a valid URI with either `https://` or `http://` schemes, instead of simply not working
    -   e.g. `{action:'open_url',value:'https://minecraft.net'}` becomes `{action:'open_url',url:'https://minecraft.net'}`
-   For the `run_command` action:
    -   The `value` field has been renamed to `command`
    -   The click event will no longer parse if the command contains disallowed characters, instead of simply not working
    -   It is no longer required that the specified `command` field has a `/` prefix
    -   e.g. `{action:'run_command',value:'/say Hi'}` becomes `{action:'run_command',command:'/say Hi'}`
-   For the `suggest_command` action:
    -   The `value` field has been renamed to `command`
    -   The click event will no longer parse if the command contains disallowed characters, instead of simply not working
    -   e.g. `{action:'suggest_command',value:'/help'}` becomes `{action:'suggest_command',command:'/help'}`
-   For the `change_page` action:
    -   The `value` field has been renamed to `page`
    -   The `page` value now requires a positive integer instead of a string
    -   e.g. `{action:'change_page',value:'1'}` becomes `{action:'change_page',page:1}`
-   The `copy_to_clipboard` format is unchanged

### Tags

#### Block Tags

-   Added `#replaceable_by_mushrooms` - exhaustive list of all bocks that can be replaced as a mushroom is placed or grows
-   Added `#sword_instantly_mines` - blocks that are instantly mined by Swords

#### Item Tags

-   Added `#book_cloning_target` - item that can be crafted together with a Written Book to clone it

#### Biome Tags

-   Added `#spawns_cold_variant_farm_animals` - all biomes where cold variant of farm animals spawn
-   Added `#spawns_warm_variant_farm_animals` - all biomes where warm variants of farm animals spawn

### Entity Data

-   The `ArmorDropChances`, `HandDropChances`, and `body_armor_drop_chance` fields have been merged into a `drop_chances` field
    -   Format: map between equipment slot type and chance value
        -   Valid equipment slots: `head`, `chest`, `legs`, `feet`, `mainhand`, `offhand`, `body`
    -   If not specified or removed, chances will be assumed as default (`0.085f`)
    -   e.g. `drop_chances:{chest:0.1,feet:1.0}`
-   Drop chances with a default value will no longer be stored, and the `drop_chances` field is removed entirely if all defaults
-   Area Effect Clouds have a new field: `potion_duration_scale` (float)
    -   If not specified, defaults to `1.0`
    -   The duration of the potion effect applied is scaled by this factor
    -   Area Effect Clouds created by Lingering Potions will have a scale of `0.25`

### Pig Variants

-   Pig variants can be data-driven by adding entries to `data/<namespace>/pig_variant/<id>.json`
-   This feature is experimental
-   Fields in file:
    -   `model` - one of: `normal`, `cold`
    -   `texture` - texture id for this variant, resolves to `assets/<namespace>/textures/<path>.png`
    -   `biome` - single entry, list or a tag describing biomes in which this variant natually spawns
        -   If not specified, this variant will only be selected if no other variant matches the current biome

### Recipes

#### `crafting_transmute` Recipe Type

-   The `result` field now supports specifying a count and a components patch to apply to the result
-   The components patch is applied to the final transmuted item
-   The new format is an object with fields:
    -   `id` - item id
    -   `count` - positive integer (default: `1`)
    -   `components` - a component patch object (default: empty)
    -   e.g. `"result": {"id": "minecraft:stick", "count": 3, "components": {"!minecraft:damage": {}, "minecraft:enchantment_glint_override": {}}}`
-   The field can still be defined as before as an inline item id (e.g. `"result": "minecraft:stick"`)

### Item Components

#### New `weapon` component

-   When present, the 'Item Used' statistic will be incremented for each attack with the item
-   The specified amount of damage can be done to the item with each attack
-   Format: object with fields:
    -   `damage_per_attack` - non-negative integer (default: `1`)
        -   The amount to damage the weapon for each attack performed
    -   `can_disable_blocking` - boolean (default: `false`)
        -   If `true`, will disable a blocking Shield on successful attack
    -   e.g. `weapon={damage_per_attack:2}`

#### New `potion_duration_scale` component

-   When present, for items that have the `potion_contents` component, the duration of the applied effects will be scaled by this factor
-   This also applies to `custom_effects` in the `potion_contents` component, unlike the previous hardcoded scaling factor
-   If not specified, defaults to `1.0`
-   Format: non-negative float
    -   e.g. `potion_duration_scale=0.25`

#### `tool` Component

-   Added new optional field: `can_destroy_blocks_in_creative` (bool)
    -   If `false`, players cannot break blocks while holding this tool in Creative Mode
    -   If not specified, defaults to `true`

## Resource Pack Version 47

-   Added textures for new falling leaves particles
-   New and updated Pig textures
-   Added textures for new Wildflowers block
-   Added break, place, step, fall and hit sounds for Iron Blocks, Iron Bars, Iron Trapdoors, Iron Doors and Heavy Weighted Pressure Plates

### New and updated Pig textures

-   Added new textures for Pig variants:
    -   `cold_pig`
    -   `warm_pig`
-   Changed the size of `pig` texture

## Fixed bugs in 25w02a

-   [MC-7697](https://bugs.mojang.com/browse/MC-7697) Tridents or arrows shot through lava sometimes don't catch fire
-   [MC-55800](https://bugs.mojang.com/browse/MC-55800) Successful "/fill air destroy" commands give error message and return 0 for result/success
-   [MC-56653](https://bugs.mojang.com/browse/MC-56653) Zombified Piglins drop XP and rare drops if killed by anything while in angered state
-   [MC-90212](https://bugs.mojang.com/browse/MC-90212) You cannot hang on to climbable blocks while gliding with elytra
-   [MC-93185](https://bugs.mojang.com/browse/MC-93185) The exit portal in the end generates at highest block at 0 0 which can make it generate incomplete
-   [MC-97244](https://bugs.mojang.com/browse/MC-97244) The "minecraft:enchant.thorns.hit" sound event doesn't play when non-player entities are damaged by the thorns enchantment
-   [MC-113878](https://bugs.mojang.com/browse/MC-113878) Attribute modifiers description for chest is misleading / "When on body" instead of "When on chest"
-   [MC-118053](https://bugs.mojang.com/browse/MC-118053) Wolves with the Owner of a non-player are spawned sitting
-   [MC-118092](https://bugs.mojang.com/browse/MC-118092) Crafting recipe unlock toast says "New Recipes Unlocked!" even when only one recipe was unlocked
-   [MC-118470](https://bugs.mojang.com/browse/MC-118470) Narrator plays at full volume when volume is off
-   [MC-128079](https://bugs.mojang.com/browse/MC-128079) Statistic for using shears doesn't increase when mining certain blocks
-   [MC-135192](https://bugs.mojang.com/browse/MC-135192) Boats are immediately sunken if there is a string on the surface of the water
-   [MC-141297](https://bugs.mojang.com/browse/MC-141297) You cannot set lit state of redstone torches using setblock, debug stick and BlockStateTag, to be to opposite of the situation it would be in
-   [MC-165421](https://bugs.mojang.com/browse/MC-165421) Bubble columns have the opposite effect on tridents and wind charges
-   [MC-167125](https://bugs.mojang.com/browse/MC-167125) Rounding error on fall damage
-   [MC-183329](https://bugs.mojang.com/browse/MC-183329) Nether portal teleport overlay does not show up if the player has the nausea effect
-   [MC-183623](https://bugs.mojang.com/browse/MC-183623) Hardcore worlds in the world menu have a comma after the red exclamation mark
-   [MC-184681](https://bugs.mojang.com/browse/MC-184681) Customized worlds still say "Buffet world customization" since 20w21a
-   [MC-202226](https://bugs.mojang.com/browse/MC-202226) /recipe give or take for one recipe says "recipes"
-   [MC-220672](https://bugs.mojang.com/browse/MC-220672) Inconsistent pluralization in customize world preset heading source string
-   [MC-222876](https://bugs.mojang.com/browse/MC-222876) "Buffet world customization" is incorrectly capitalized
-   [MC-226772](https://bugs.mojang.com/browse/MC-226772) Shulker box opening / closing subtitle shows "Shulker"
-   [MC-241951](https://bugs.mojang.com/browse/MC-241951) Player momentum on X and Z axis are cancelled separately at low values
-   [MC-248099](https://bugs.mojang.com/browse/MC-248099) Mob pathfinding breaks after falling into water accidentally while walking
-   [MC-253721](https://bugs.mojang.com/browse/MC-253721) Wrong logs when running /op @a
-   [MC-260440](https://bugs.mojang.com/browse/MC-260440) Players can no longer activate swimming mode in water while flying with elytra
-   [MC-261385](https://bugs.mojang.com/browse/MC-261385) Bubble columns act differently at the surface depending on non-air blocks
-   [MC-262928](https://bugs.mojang.com/browse/MC-262928) The "minecraft:entity.player.hurt" sound is no longer played when players receive thorns damage from guardians or elder guardians
-   [MC-262939](https://bugs.mojang.com/browse/MC-262939) Changing dimensions or respawning with nausea effect active displays nether portal overlay
-   [MC-265514](https://bugs.mojang.com/browse/MC-265514) HRTF stuck on even when directional audio is set to off in update 1.20.2
-   [MC-267221](https://bugs.mojang.com/browse/MC-267221) "value" within "change;;_;;page" clickEvent json looks for a string instead of an integer
-   [MC-267323](https://bugs.mojang.com/browse/MC-267323) Items fields with old boolean JSON formatting are cleared upon world update
-   [MC-270220](https://bugs.mojang.com/browse/MC-270220) Granting all advancements results in prolonged, disruptive and loud audio spam
-   [MC-271065](https://bugs.mojang.com/browse/MC-271065) Diagonal movement is not normalized when crouching or using certain items
-   [MC-272790](https://bugs.mojang.com/browse/MC-272790) Shulker boxes and other blocks in the end exit portal when it changes state are not dropped as items
-   [MC-273338](https://bugs.mojang.com/browse/MC-273338) Flying boat glitch using string and rising bubble columns
-   [MC-274187](https://bugs.mojang.com/browse/MC-274187) The sweeping attack from a sword enchanted with Fire Aspect can ignite other players with PVP disabled
-   [MC-275994](https://bugs.mojang.com/browse/MC-275994) Having the pie chart open while the window is unfocused spams the logs
-   [MC-277403](https://bugs.mojang.com/browse/MC-277403) Flaming arrows and tridents still don't extinguish when water is placed in their location
-   [MC-277537](https://bugs.mojang.com/browse/MC-277537) Pale moss carpets sometimes generate disjointed
-   [MC-277780](https://bugs.mojang.com/browse/MC-277780) Minecraft resaves all maps with every autosave even after the 1st patch
-   [MC-277807](https://bugs.mojang.com/browse/MC-277807) Teleporting the player's mount causes rotation de-sync, previously did not
-   [MC-277865](https://bugs.mojang.com/browse/MC-277865) The animation of boats in bubble columns breaks when over a certain "Time" in level.dat
-   [MC-277922](https://bugs.mojang.com/browse/MC-277922) Boats in 1 block high downward bubble column will continue to rock back and forth
-   [MC-278040](https://bugs.mojang.com/browse/MC-278040) Creaking swim pathfinding breaks after being submerged
-   [MC-278096](https://bugs.mojang.com/browse/MC-278096) "Fabulous!" graphics and clouds disabled causes all particles to linger in frame buffer for one frame
-   [MC-278164](https://bugs.mojang.com/browse/MC-278164) Click sound is played twice when you click a setting button and there's a slider under the mouse in the next screen
-   [MC-278204](https://bugs.mojang.com/browse/MC-278204) Blaze fireballs now cause TNT minecarts to explode instantly
-   [MC-278249](https://bugs.mojang.com/browse/MC-278249) Experience orb positions desync severely and abruptly correct themselves
-   [MC-278375](https://bugs.mojang.com/browse/MC-278375) Feeding wheat or hay bale to llama or trader llama with maximum Temper causes item stack to be desynced
-   [MC-278376](https://bugs.mojang.com/browse/MC-278376) Arrows and tridents act weirdly in one block deep bubble columns
-   [MC-278422](https://bugs.mojang.com/browse/MC-278422) Reloading the world after removing Owner tag from a sitting tamed wolf with /data remove makes the wolf moving and sitting at the same time
-   [MC-278493](https://bugs.mojang.com/browse/MC-278493) Tamed wolves which are angry at creakings remain angry when said creakings despawn
-   [MC-278502](https://bugs.mojang.com/browse/MC-278502) Weeping and twisting vines disconnect
-   [MC-278552](https://bugs.mojang.com/browse/MC-278552) minecraft:entity.player.big;;_;;fall no longer plays the sound when falling from great height
-   [MC-278585](https://bugs.mojang.com/browse/MC-278585) Players can get stuck when landing on the edge of powder snow
-   [MC-278591](https://bugs.mojang.com/browse/MC-278591) Ender dragon spawn egg is no longer given when using pick block on the ender dragon entity
-   [MC-278615](https://bugs.mojang.com/browse/MC-278615) Reinforcement zombified piglins are angry at you even if you killed the "caller" in one hit
-   [MC-278621](https://bugs.mojang.com/browse/MC-278621) Client/server desync when placing powder snow while landing in it
-   [MC-278627](https://bugs.mojang.com/browse/MC-278627) Players wearing leather boots will take fall damage when landing on the edge of powder snow
-   [MC-278634](https://bugs.mojang.com/browse/MC-278634) Trying to /setblock a 'waterlogged=true' state on (glow;;_;;lichen, resin;;_;;clump, sculk;;_;;vein, etc.) produces an error
-   [MC-278659](https://bugs.mojang.com/browse/MC-278659) Attacking a natural stationary creaking does not trigger sculk sensors
-   [MC-278683](https://bugs.mojang.com/browse/MC-278683) Mobs spawned from spawners or /summon never drop their equipment
-   [MC-278708](https://bugs.mojang.com/browse/MC-278708) Throwing ender pearls while mounted only dismounts you, without teleporting
-   [MC-278728](https://bugs.mojang.com/browse/MC-278728) smithing;;_;;transform recipes can't set an item's components back to default
-   [MC-278733](https://bugs.mojang.com/browse/MC-278733) Breaking a double resin brick slab block only returns a single slab
-   [MC-278734](https://bugs.mojang.com/browse/MC-278734) Sheep's heads stutter when they look up or down
-   [MC-278755](https://bugs.mojang.com/browse/MC-278755) Teleporting far away while riding an entity softlocks the game
-   [MC-278801](https://bugs.mojang.com/browse/MC-278801) The closed eyeblossom to gray dye recipe is not grouped with the other gray dye recipe
-   [MC-278841](https://bugs.mojang.com/browse/MC-278841) Powder snow no longer slows down the player falling from a high place
-   [MC-279145](https://bugs.mojang.com/browse/MC-279145) Shulker bullets are no longer affected by bubble columns
-   [MC-279152](https://bugs.mojang.com/browse/MC-279152) Shulker bullets can't teleport through nether or end portals, end gateways

---

Sharpen your pickaxes, another snapshot is here! In today's snapshot we have a bunch of component improvements coming your way, Resin Clumps can be waterlogged now, and Rabbits can finally roam free again. Furthermore, there's a whole swarm of other bug fixes.

## Changes

-   Wither Skeletons no longer have Bows as their preferred weapon
-   Creakings will now persist when a world is reloaded
-   Mining speed and blast resistance of creaking hearts is doubled
-   Resin sounds have been adjusted to be softer
-   Resin Clump block can be placed on any full face of a neighboring block
-   Resin Clump block can now be waterlogged, and can therefore be placed underwater

## Technical Changes

-   The Data Pack version is now 60
-   The Resource Pack version is now 45

## Data Pack Version 60

-   Removed `creaking_transient` entity type

### Item tags

-   Removed `trim_templates`
-   Added `#wither_skeleton_disliked_weapons` for weapons that Wither Skeletons don't want to pick up

## Resource Pack Version 45

-   All blocks that previously rendered only block entity (banners, heads, beds, chests, conduits, decorated pots, shulker boxes and signs) will now also render normal block model over it (same as existing behavior of bells, enchantment tables, etc.)
    -   Note: rendered block entity still can't be removed or data-driven, this change only affects previously ignored block models

### Item models

#### `minecraft:special` item model type

##### Changed `minecraft:head` special model type

-   Added field `texture` - optional namespaced ID for texture, without `textures/entity/` prefix and `.png` suffix
    -   If absent, default texture will be used, depending on `kind` field
    -   Additionally, if present, `minecraft:profile` component is ignored

##### Added `minecraft:standing_sign` special model type

-   Renders a standing sign
-   Fields:
    -   `wood_type` - one of `oak`, `spruce`, `birch`, `acacia`, `cherry`, `jungle`, `dark_oak`, `pale_oak`, `mangrove`, `bamboo`, `crimson`, `warped`
    -   `texture` - optional namespaced ID for texture, without `textures/entity/signs/` prefix and `.png` suffix
        -   if not present, it will be derived from `wood_type`

##### Added `minecraft:hanging_sign` special model type

-   Renders a hanging sign
-   Fields:
    -   `wood_type` - one of `oak`, `spruce`, `birch`, `acacia`, `cherry`, `jungle`, `dark_oak`, `pale_oak`, `mangrove`, `bamboo`, `crimson`, `warped`
    -   `texture` - optional namespaced ID for texture, without `textures/entity/signs/hanging/` prefix and `.png` suffix
        -   if not present, it will be derived from `wood_type`

#### `minecraft:condition` item model type

-   Removed `minecraft:xmas` boolean property, replaced by `minecraft:local_time`
-   Removed `minecraft:shift_down` boolean property, replaced by `minecraft:extended_view`

##### Changed `minecraft:has_component` boolean property

-   Added field: `ignore_default` - if default component value should be handled as "no component", default: `false`

##### Added `minecraft:extended_view` boolean property

-   Returns true if player has requested extended details by holding shift key down
    -   Note: not a keybind, can't be rebound
-   Only works when item is displayed in UI
-   No fields

##### Added `minecraft:keybind_down` boolean property

-   Returns true if keybind is currently active
-   Fields:
    -   `keybind` - keybind ID, same as value in `keybind` text component
        -   Examples: `key.use`, `key.left`

##### Added `minecraft:local_time` property

-   Returns the current time formatted according to a given pattern
-   The value is updated every second
-   For full format documentation for locale, time zone and pattern, see ICU (International Components for Unicode) documentation
-   Fields:
    -   `locale` - optional value describing locale
        -   Examples:
            -   `en_US`: English language (used for things like week names), formating as in USA
            -   `cs_AU@numbers=thai;calendar=japanese`: Czech language, Australian formatting, Thai numerals and Japanese calendar
        -   default value is `""`, which means "root" locale (a set of defaults, including English names)
    -   `time_zone` - optional value describing time zone
        -   If not present, defaults to timezone set on client
        -   Examples:
            -   `Europe/Stockholm`
            -   `GMT+0:45`
    -   `pattern` - describes format to be used for time formatting
        -   Examples:
            -   `yyyy-MM-dd` - 4-digit year number, then 2-digit month number, then 2-digit day of month number, all zero-padded if needed, separated by `-`
            -   `HH:mm:ss` - current time (hours, minutes, seconds), 24-hour cycle, all zero-padded to 2 digits of needed, separated by `:`
-   Values: any string

> **Developer's Note**: _There is no "use locale set on client" option to avoid unexpected issues when the user's locale does not match the pack developer's one. Also, time is complicated, be careful._

##### Added `minecraft:holder_type` property

-   Returns holding entity type, if present
-   No fields
-   Values: namespaced entity type ID

## Fixed bugs in 24w46a

-   [MC-150224](https://bugs.mojang.com/browse/MC-150224) Rabbits can occasionally get stuck on the edges of blocks
-   [MC-160001](https://bugs.mojang.com/browse/MC-160001) Skulls, signs, hanging signs, banners and decorated pots have no breaking/sprinting particles
-   [MC-256649](https://bugs.mojang.com/browse/MC-256649) Hanging signs aren't rendered when held by endermen or as block display entities
-   [MC-266991](https://bugs.mojang.com/browse/MC-266991) Exposed Copper Bulb has inconsistent pixels
-   [MC-271169](https://bugs.mojang.com/browse/MC-271169) The "Isn't It Scute?" advancement is granted when unleashing an armadillo while holding a brush
-   [MC-272245](https://bugs.mojang.com/browse/MC-272245) You can get the advancement "Shear Brilliance" when you use shears on a leashed wolf
-   [MC-273861](https://bugs.mojang.com/browse/MC-273861) When a leashed bee enters a hive, the leash disappears
-   [MC-274571](https://bugs.mojang.com/browse/MC-274571) The advancement "Little Sniffs" can be obtained by unleashing the snifflet and not feeding it
-   [MC-275339](https://bugs.mojang.com/browse/MC-275339) Bad contrast in bundle interface with dark blocks
-   [MC-276697](https://bugs.mojang.com/browse/MC-276697) Neutral mobs don't pathfind correctly to their target after being unleashed
-   [MC-276986](https://bugs.mojang.com/browse/MC-276986) Missing pixel in open bundle texture
-   [MC-277042](https://bugs.mojang.com/browse/MC-277042) Blue and Red open bundle are inconsistent with the other colors
-   [MC-277071](https://bugs.mojang.com/browse/MC-277071) Middle clicking on a creaking spawned naturally through a creaking heart doesn't give you the spawn egg
-   [MC-277074](https://bugs.mojang.com/browse/MC-277074) The entity shadows of creakings are slightly too large in relation to the size of their models
-   [MC-277140](https://bugs.mojang.com/browse/MC-277140) The statistics screen does not visually differentiate the creaking and creaking;;_;;transient entities
-   [MC-277152](https://bugs.mojang.com/browse/MC-277152) The statistic for killing a creaking doesn't increment when breaking a creaking heart
-   [MC-277226](https://bugs.mojang.com/browse/MC-277226) Creakings not linked to any heart display wrong subtitles when attacked with non-damaging projectiles
-   [MC-277399](https://bugs.mojang.com/browse/MC-277399) The hand animation isn't played when constantly emptying items from bundles
-   [MC-277413](https://bugs.mojang.com/browse/MC-277413) The empty state sprite for the oxygen bar takes a little longer to start displaying compared to Bedrock Edition
-   [MC-277533](https://bugs.mojang.com/browse/MC-277533) Bundles can remain in the open state when taken out from saved hotbars
-   [MC-277892](https://bugs.mojang.com/browse/MC-277892) Clicking on the selected recipe a second time in the stonecutter GUI turns the result item into a ghost item
-   [MC-277915](https://bugs.mojang.com/browse/MC-277915) Translucency sorting seems incorrect in some cases in water
-   [MC-277948](https://bugs.mojang.com/browse/MC-277948) Suspicious stew gives different durations of Blindness for Eyeblossom and Azure Bluet
-   [MC-277962](https://bugs.mojang.com/browse/MC-277962) Chiseled Resin Bricks have a miscolored pixel
-   [MC-278028](https://bugs.mojang.com/browse/MC-278028) Using items underwater can force you to exit swimming mode
-   [MC-278058](https://bugs.mojang.com/browse/MC-278058) Breeze entity model rods no longer spin around when it is moving
-   [MC-278102](https://bugs.mojang.com/browse/MC-278102) Recipe book icons no longer visually indicate that an item has multiple recipes
-   [MC-278124](https://bugs.mojang.com/browse/MC-278124) Resin clumps are not waterloggable
-   [MC-278130](https://bugs.mojang.com/browse/MC-278130) Resin bricks cannot be placed or used inside smithing tables
-   [MC-278131](https://bugs.mojang.com/browse/MC-278131) Resin clumps can be placed inside smithing tables
-   [MC-278132](https://bugs.mojang.com/browse/MC-278132) Using items while riding camels that are sprinting slows the camel down
-   [MC-278136](https://bugs.mojang.com/browse/MC-278136) Bees still get poisoned when touching closed eyeblossoms
-   [MC-278149](https://bugs.mojang.com/browse/MC-278149) Strays, bogged, and wither skeletons hold their bows incorrectly when charging and shooting
-   [MC-278158](https://bugs.mojang.com/browse/MC-278158) Block/item models can no longer override parent model texture references by referencing the textures in the parent model of the first parent model
-   [MC-278184](https://bugs.mojang.com/browse/MC-278184) Eyeblossoms can generate replacing Pale Oak logs
-   [MC-278191](https://bugs.mojang.com/browse/MC-278191) Wandering Traders can sell Pale Oak Saplings in multiple offers at once
-   [MC-278212](https://bugs.mojang.com/browse/MC-278212) Resin clump is placed in an unexpected position in the creative inventory

---

With the spooky season behind us, we are entering November with the release of Snapshot 24w45a. This update comes with a bunch of bug fixes, changes to how mobs interact with equipable items on the ground, improvements to item models by adding more functionality and much more. It's a hefty update for resource packs! Enjoy!

## Changes

-   Baby Cats and Wolves now get a collar with the color that is a mix between the parents collar color if possible
-   Aligned durations of the Suspicious Stew effects with Bedrock Edition:
    -   Saturation: 0.35 seconds (unchanged)
    -   Night Vision: 5 seconds (unchanged)
    -   Fire Resistance: 3 seconds
    -   Blindness: 11 seconds
    -   Weakness: 7 seconds
    -   Regeneration: 7 seconds
    -   Jump Boost: 5 seconds
    -   Wither: 7 seconds
    -   Poison: 11 seconds

> **Developer's Note**: _Yay! They are all now prime numbers!_ (not really)

### Mobs picking up items

Some changes have been made to how mobs decide to replace their equipped items with items on the ground

-   If the item belongs in an armor slot, replace the item if any of the following conditions apply
    -   The new item has a higher base armor value
    -   The new item has a higher base armor toughness value
    -   The new item has more enchantments
    -   The new item is less damaged
    -   The new item has a custom name while the old one doesn't
-   If the item belongs in the main hand slot, replace the item if any of the following conditions apply
    -   The new item is a preferred weapon while the old one isn't
        -   If the old item is a preferred weapon while the new item isn't, do not replace the item
    -   The new item has a higher base damage value
    -   The new item has more enchantments
    -   The new item is less damaged
    -   The new item has a custom name while the old one doesn't

#### Preferred weapons

The following mobs now have a preferred weapon type to pick up:

-   Skeleton variants all prefer Bows
-   Piglins and Pillagers prefer Crossbows
-   Drowned prefer Tridents

### Eyeblossoms

-   Bees don't interact at all with Closed Eyeblossoms
-   Bees don't get poisoned when they touch Closed Eyeblossoms
-   Bees will not be tempted by Closed Eyeblossoms

### Creaking mob

-   An activated Creaking will not move if a survival or adventure player is looking at it
    -   Creaking will also have full knockback resistance in that state

### Resin Brick

-   Resin Brick is now used as the material for armor trimming instead of Resin Clump

## Technical Changes

-   The Data Pack Version is now 59
-   The Resource Pack version is now 44
-   Data generator in server jar (`net.minecraft.data.Main`) no longer generates `assets` directory
    -   `--client` option has been removed from command line for this entry point
-   New entry point `net.minecraft.client.data.Main` is present in client jar, with similar command line structure as data generator in server jar
    -   Available options: `--client` - generates `assets` directory

### Network Protocol

-   Client will now send the `minecraft:player_loaded` packet once the loading terrain screen has closed after initially loading into the world, and after closing the loading screen when respawning

## Data Pack Version 59

-   The tooltip warning on item blocks with the `minecraft:block_entity_data` component can no longer be hidden by any other component
-   Field `model` in `minecraft:equippable` component has been renamed to `asset_id`
-   Field `item_model_index` in `trim_material` registry has been removed (no longer needed for model rendering)
-   Component `minecraft:custom_model_data` has been expanded, together with `minecraft:set_custom_model_data` modifier

### Tags

#### Block Tags

-   Added `#bee_attractive` - denotes all blocks that Bees may pollinate
-   Removed `#tall_flowers`

#### Item Tags

-   Removed `#flowers` and `#tall_flowers`
-   Added `skeleton_preferred_weapon`, `piglin_preferred_weapon`, `pillager_preferred_weapon` and `drowned_preferred_weapon` tags for specifying preferred weapons types for these mobs when picking up items

### Components

#### `minecraft:custom_model_data`

-   Component has now more fields to accomodate new uses by various model property getters
-   Fields:
    -   `floats` - list of floats
    -   `flags` - list of booleans
    -   `strings` - list of strings
    -   `colors` - list of RGB color values

### Item Modifiers

#### `minecraft:set_custom_model_data`

-   Component has now more fields to accomodate more complex component structure
-   Fields:
    -   `floats` - optional list operation of number providers
    -   `flags` - optional list operation of boolean values
    -   `strings` - optional list operation of string values
    -   `colors` - optional list operation of RGB values or number providers
-   List operation uses same format as `explosions` field in `set_fireworks` modifier
-   For example `{function:"set_custom_model_data",floats:{values:[2],mode:replace_all}}` sets replaces `floats` with value `2`

## Resource Pack Version 44

-   Invalid `minecaft:filled_map` items in an Item Frame (map item without the `map_id` component) no longer change the size of the frame
-   New format for data-driving item models

### Renames

-   `equipment` directory has been moved one level up, i.e. `models/equipment/` becomes `equipment/`
-   `broken_elytra` model and texture has been renamed to `elytra_broken`

### Item models

-   New format has been introduced for describing item models
-   Item models are selected based on `minecraft:item_model` component
    -   Model for item with `item_model=foo:bar` is stored in `/assets/foo/items/bar.json`
-   Format of file is `{ "model": {"type": <item model type>, <item model type specific fields> } }` (see below for exact types)
-   `overrides` section has been removed from existing block models
-   There are no longer any hardcoded paths in `models` directory - models will be now only used if referenced by definitions in `items` or `blockstates` directories
-   Models in `models/item` that only redirect to a block model have been removed
    -   In such cases, the item model will refer to the `models/block` model directly

#### `minecraft:model` item model type

-   Renders a plain model from `models` directory
-   Fields:
    -   `model`: namespaced ID of model in `models` (like `minecraft:block/yellow_glazed_terracotta`)
    -   `tints`: a list of tint sources to apply to elements of rendered model (first entry applies to `tintindex` 0, second one - 1, etc.)
        -   Format:
            -   `type`: type of tint source (see below)
            -   `<type-specific>` - additional fields depending on tint source type

##### `minecraft:constant` tint source type

-   Returns a constant RGB color
-   Fields:
    -   `value` - A packed integer RGB value (e.g. `-1`) or an array of RGB values (e.g. `[ 1, 1, 1 ]`)

##### `minecraft:dye` tint source type

-   Returns value from `minecraft:dyed_color` component or default if not present
-   Fields:
    -   `default` - RGB value

##### `minecraft:grass` tint source type

-   Returns grass color at specific climate parameters, based on `textures/colormap/grass.png`
-   Same colors as ones selected by `downfall` and `temperature` in biome configuration
-   Fields:
    -   `temperature` - float in `0..1` (inclusive) range
    -   `downfall` - float in `0..1` (inclusive) range

##### `minecraft:firework` tint source type

-   Returns average of colors from `minecraft:firework_explosion` component or default color if there are none
-   Fields:
    -   `default`: RGB value

##### `minecraft:potion` tint source type

-   Returns color from `minecraft:potion_contents` component:
    -   if component is present:
        -   custom color, if there is one present in component
        -   default color, if effect list is empty
        -   average of effect colors, otherwise
    -   default color, otherwise
-   Fields:
    -   `default`: RGB value

##### `minecraft:map_color` tint source type

-   Return value from `minecraft:map_color` component or default color if component is not present
-   Fields:
    -   `default`: RGB value

##### `minecraft:custom_model_data` tint source type

-   Returns value from `colors` list in `minecraft:custom_model_data` component
-   Fields:
    -   `index` - index for field in `colors`, default: 0

#### `minecraft:special` item model type

-   Renders a special (not data-driven) model
-   Fields:
    -   `model`: special model instance
        -   Format:
            -   `type` - type of special model (see below)
            -   `<type-specific>` - additional fields depending on tint source type
    -   `base`: namespaced ID of model in `models`, providing transformations, particle texture and GUI light

##### `minecraft:bed` special model type

-   Renders a whole bed
-   Fields:
    -   `texture` - namespaced ID for texture, without `textures/entity/bed/` prefix and `.png` suffix

##### `minecraft:banner` special model type

-   Renders a banner with patterns from `minecraft:banner_patterns` component
-   Fields:
    -   `color` - color of banner base, one of 16 predefined colors

##### `minecraft:conduit` special model type

-   Renders conduit
-   No fields

##### `minecraft:chest` special model type

-   Renders a single chest
-   Fields:
    -   `texture` - namespaced ID for texture, without `textures/entity/chest/` prefix and `.png` suffix
    -   `openness` - float, `0.0` (default) - fully closed, `1.0` - fully open

##### `minecraft:head` special model type

-   Renders a head
-   Uses profile from `minecraft:profile` component when applicable
-   Fields:
    -   `kind` - one of `skeleton`, `wither_skeleton`, `player`, `zombie`, `creeper`, `piglin`, `dragon`

##### `minecraft:shulker_box` special model type

-   Renders a shulker box
-   Fields:
    -   `texture` - namespaced ID for texture, without `textures/entity/shulker/` prefix and `.png` suffix
    -   `openness` - float, `0.0` (default) - fully closed, `1.0` - fully open
    -   `orientation` - orientation for rendering, default: `up`

##### `minecraft:shield` special model type

-   Renders a shield
-   Uses patterns from `minecraft:banner_patterns` component and color from `minecraft:base_color` component
-   No fields

##### `minecraft:trident` special model type

-   Renders a trident
-   No fields

##### `minecraft:decorated_pot` special model type

-   Renders a decorated pot
-   Uses values from `minecraft:pot_decorations` component
-   No fields

#### `minecraft:composite` item model type

-   Renders multiple sub-models
-   All models are rendered in the same space
-   Fields:
    -   `models`: a list of item models to render

#### `minecraft:condition` item model type

-   Renders an item model depending on boolean property
-   Fields:
    -   `property`: type of property (see below)
    -   `<property-specific>` - additional fields depending on property type, added inline
    -   `on_true` - item model to render when property is true
    -   `on_false` - item model to render when property is false

##### `minecraft:using_item` boolean property

-   Returns true if player is currently using this item
-   No fields

##### `minecraft:broken` boolean property

-   Returns true if the item is damageable and has only one use remaining before breaking
-   No fields

##### `minecraft:damaged` boolean property

-   Returns true if the item is damageable and has been used at least once
-   No fields

##### `minecraft:has_component` boolean property

-   Returns true if the given component is present on the item
-   Fields:
    -   `component` - component type

##### `minecraft:fishing_rod/cast` boolean property

-   Returns true if there is a fishing bobber attached to currently used fishing rod
-   No fields

##### `minecraft:bundle/has_selected_item` boolean property

-   Returns true if bundle is "open", i.e. it has selected item visible in GUI
-   No fields

##### `minecraft:xmas` boolean property

-   Returns true if current date is between December 24th and December 26th (inclusive)
-   No fields

##### `minecraft:selected` boolean property

-   Returns true if item is selected on a hotbar
-   No fields

##### `minecraft:carried` boolean property

-   Returns true if item is carried between slots in GUI
-   No fields

##### `minecraft:shift_down` boolean property

-   Returns true if player currently holding shift key down
-   No fields

##### `minecraft:custom_model_data` boolean property

-   Returns value from `flags` list in `minecraft:custom_model_data` component
-   Fields:
    -   `index` - index for field in `flags`, default: 0

#### `minecraft:select` item model type

-   Renders an item model based on discrete property
-   Fields:
    -   `property`: type of property (see below)
    -   `<property-specific>` - additional fields depending on property type, added inline
    -   `cases` - list of cases to match in format:
        -   `when` - value to match against property, type depends on property
            -   could be a single value or a list of values
        -   `model` - item model to render when case is selected
    -   `fallback` - item model to render if none of the cases matched the value
        -   if not present, placeholder "missing" model will be rendered instead

##### `minecraft:main_hand` property

-   Returns main hand of holding player
-   No fields
-   Values: `left`, `right`

##### `minecraft:charge_type` property

-   Returns charge type stored in `minecraft:charged_projectiles` component
-   No fields
-   Values:
    -   `none` - if there are no projectiles or component is not present
    -   `rocket` - if there is at least one firework rocket
    -   `arrow` - any other case

##### `minecraft:trim_material` property

-   Returns value of `material` field from `minecraft:trim` component, if present
-   No fields
-   Values: namespaced ID

##### `minecraft:block_state` property

-   Returns value for some property from `minecraft:block_state` component
-   Fields:
    -   `block_state_property` - string key to select from component
-   Values: any string

##### `minecraft:display_context` property

-   Returns context this item is rendered in
-   No fields
-   Values:
    -   `none`
    -   `thirdperson_lefthand`
    -   `thirdperson_righthand`
    -   `firstperson_lefthand`
    -   `firstperson_righthand`
    -   `head`
    -   `gui`
    -   `ground`
    -   `fixed`

##### `minecraft:custom_model_data` property

-   Returns value from `strings` list in `minecraft:custom_model_data` component
-   Fields:
    -   `index` - index for field in `strings`, default: 0
-   Values: any string

#### `minecraft:range_dispatch` item model type

-   Renders an item model based on numeric property
-   Replacement for old `overrides` section from block models
-   Will select last entry with threshold less or equal to property value
-   Fields:
    -   `property`: type of property (see below)
    -   `<property-specific>` - additional fields depending on property type
    -   `scale` - factor to multiply property value with, default: `1.0`
    -   `entries` - list of entries in format:
        -   `threshold` - float value
        -   `model` - item model to render when entry is selected
        -   Note: order of fields does not matter, list will be sorted by threshold in ascending order before use
    -   `fallback` - item model to render if no entries were less or equal to property value
        -   if not present, placeholder "missing" model will be rendered instead

##### `minecraft:custom_model_data` numeric property

-   Returns value from `floats` list in `minecraft:custom_model_data` component
-   Fields:
    -   `index` - index for field in `floats`, default: 0

##### `minecraft:bundle/fullness` numeric property

-   Returns weight of `bundle_contents` component or 0 if not present
-   No fields

##### `minecraft:damage` numeric property

-   Returns value for `damage` component
-   Fields:
    -   `normalize`: boolean, default: `true`
        -   if true, returns value of damage divided by `max_damage` component, clamped to `0..1`
        -   if false, returns value of damage, clamped to `0..max_damage`

##### `minecraft:count` numeric property

-   Returns stack size
-   Fields:
    -   `normalize`: boolean, default: `true`
        -   if true, returns count divided by `max_stack_size` component, clamped to `0..1`
        -   if false, returns count clamped to `0..max_stack_size`

##### `minecraft:cooldown` numeric property

-   Returns remaining cooldown for item, scaled to `0..1`
-   No fields

##### `minecraft:time` numeric property

-   Returns value of day time (used for clock), scaled to `0..1`
-   Fields:
    -   `wobble` - if true, value will oscillate for some time around target before settling, default: `true`
    -   `natural_only` - if true, value will be random in dimensions with `natural=false`, default: `true`

##### `minecraft:compass` numeric property

-   Returns angle, scaled to `0..1` in x-z plane between holder position and target
-   If target is not valid (not present, in other dimension or to close to holder position) random value will be returned
-   Fields:
    -   `target` - one of:
        -   `spawn` - points at world spawn
        -   `lodestone` - points at location stored in `lodestone_tracker` component
        -   `recovery` - points at last player death location
    -   `wobble` - if true, value will oscillate for some time around target before settling, default: `true`

##### `crossbow/pull` numeric property

-   Returns crossbow-specific use time
-   No fields

##### `use_duration` numeric property

-   Returns item use ticks
-   Fields:
    -   `remaining` - if `true`, returned value will be remaining use ticks, if `false` - ticks so far, default: `false`

##### `use_cycle` numeric property

-   Returns remaining use ticks modulo `period`
-   Fields:
    -   `period` - positive float, default `1.0`

#### `minecraft:bundle/selected_item` item model type

-   Renders selected stack in `minecraft:bundle_contents` component, if present, otherwise does nothing

## Fixed bugs in 24w45a

-   [MC-212](https://bugs.mojang.com/browse/MC-212) Fall damage is ignored for a couple of seconds when reloading into LAN or singleplayer worlds
-   [MC-99848](https://bugs.mojang.com/browse/MC-99848) Sprinting isn't canceled upon receiving the blindness effect
-   [MC-158872](https://bugs.mojang.com/browse/MC-158872) Models use model of last matched predicate, not closest match
-   [MC-159508](https://bugs.mojang.com/browse/MC-159508) Ctrl + Pick block on beehives and nests does not copy their honey levels
-   [MC-166072](https://bugs.mojang.com/browse/MC-166072) Custom Trident model ignores "layer0" and "elements" section
-   [MC-186341](https://bugs.mojang.com/browse/MC-186341) Command autocomplete doesn't consider parts after a slash
-   [MC-193176](https://bugs.mojang.com/browse/MC-193176) Most mobs with CanPickUpLoot prefer swords over axes and will downgrade their weapon
-   [MC-193336](https://bugs.mojang.com/browse/MC-193336) Heads/skulls don't render when held by an enderman or as block display entities
-   [MC-201940](https://bugs.mojang.com/browse/MC-201940) After dying, Ender Dragon body part hitboxes do not move upwards with the main hitbox
-   [MC-206684](https://bugs.mojang.com/browse/MC-206684) Spyglass particles have no associated texture
-   [MC-229142](https://bugs.mojang.com/browse/MC-229142) Spyglass texture doesn't allow override through resource pack
-   [MC-249079](https://bugs.mojang.com/browse/MC-249079) Sculk veins are not mirrored correctly from behind
-   [MC-260216](https://bugs.mojang.com/browse/MC-260216) Decorated pots aren't rendered when held by endermen or as block display entities
-   [MC-267343](https://bugs.mojang.com/browse/MC-267343) Sprinting isn't canceled upon riding entities
-   [MC-269616](https://bugs.mojang.com/browse/MC-269616) Telemetry Data scroll bar does not have a background
-   [MC-270136](https://bugs.mojang.com/browse/MC-270136) Thrown projectiles with custom;;_;;model;;_;;data do not maintain proper particles when breaking
-   [MC-271786](https://bugs.mojang.com/browse/MC-271786) Empty block states in noise;;_;;provider does not cause validation to fail, causing crash
-   [MC-272994](https://bugs.mojang.com/browse/MC-272994) Allays assigned to a player can be set on fire with sweeping and fire aspect
-   [MC-273450](https://bugs.mojang.com/browse/MC-273450) Mobs with CanPickUpLoot:1b behave inconsistently with the mace / trident
-   [MC-273522](https://bugs.mojang.com/browse/MC-273522) Mobs with CanPickUpLoot no longer pick up enchanted items after picking up an unenchanted item
-   [MC-273635](https://bugs.mojang.com/browse/MC-273635) Trial spawners forget their designated mob when placed by player out of creative mode, assigned by spawn eggs
-   [MC-274268](https://bugs.mojang.com/browse/MC-274268) Trial Spawner keeps flashing after cooldown ends
-   [MC-275011](https://bugs.mojang.com/browse/MC-275011) Instant mine does not work when standing inside of cobwebs
-   [MC-275215](https://bugs.mojang.com/browse/MC-275215) Experiments warning goes off the screen if viewed at low window size
-   [MC-276110](https://bugs.mojang.com/browse/MC-276110) honey;;_;;level model predicate range is 1 for level 5 and 0 for levels 1-4
-   [MC-276115](https://bugs.mojang.com/browse/MC-276115) New Bee Nest and Beehive item models don't use the block parent
-   [MC-276412](https://bugs.mojang.com/browse/MC-276412) Custom item models set to a shield and various other items all create invisible items
-   [MC-276654](https://bugs.mojang.com/browse/MC-276654) item;;_;;model item component breaks on trident
-   [MC-276728](https://bugs.mojang.com/browse/MC-276728) Tridents and spyglasses appear dark in the inventory if given a custom item model for a block
-   [MC-276730](https://bugs.mojang.com/browse/MC-276730) Bundles appear dark in the inventory if given a custom item model for a block and then scrolled through
-   [MC-276731](https://bugs.mojang.com/browse/MC-276731) Items which use entity models will not render another entity model if specified via item model component
-   [MC-276732](https://bugs.mojang.com/browse/MC-276732) Colors will carry over from item ID to target model
-   [MC-276771](https://bugs.mojang.com/browse/MC-276771) Missing texture when a damageable item with one of several template models is destroyed
-   [MC-276828](https://bugs.mojang.com/browse/MC-276828) Minecraft no longer prints an error to the game log when a model fails to define a texture
-   [MC-276847](https://bugs.mojang.com/browse/MC-276847) Bundles given the model of a different bundle will not preserve their color when scrolled through
-   [MC-277082](https://bugs.mojang.com/browse/MC-277082) Creakings take knockback from wind charges
-   [MC-277092](https://bugs.mojang.com/browse/MC-277092) The eyes of creakings aren't visible when creakings have the invisibility effect
-   [MC-277149](https://bugs.mojang.com/browse/MC-277149) Creakings are affected by knockback from mace smash attacks
-   [MC-277243](https://bugs.mojang.com/browse/MC-277243) Creakings take knockback from Punch bows
-   [MC-277264](https://bugs.mojang.com/browse/MC-277264) The Creaking can be knocked back by zoglins
-   [MC-277916](https://bugs.mojang.com/browse/MC-277916) Containers are locked when upgrading a world from certain versions
-   [MC-277925](https://bugs.mojang.com/browse/MC-277925) Resin Brick Stairs are not part of the #stairs block and item tags
-   [MC-277926](https://bugs.mojang.com/browse/MC-277926) Resin Brick Slab is not part of the #slab block and item tags
-   [MC-277929](https://bugs.mojang.com/browse/MC-277929) The game crashes when attempting to use the void preset
-   [MC-277930](https://bugs.mojang.com/browse/MC-277930) Eyeblossom subtitles are inverted
-   [MC-277931](https://bugs.mojang.com/browse/MC-277931) Incorrect display on the map of the flower Closed and Open Eyeblossom
-   [MC-277932](https://bugs.mojang.com/browse/MC-277932) Resin Clump is not part of the #replaceable block tag
-   [MC-277933](https://bugs.mojang.com/browse/MC-277933) Smithing Table doesn't show a Clump icon for ingredient slot
-   [MC-277939](https://bugs.mojang.com/browse/MC-277939) Programmer Art's empty slot icons may not have been correctly updated for 24w44a
-   [MC-277941](https://bugs.mojang.com/browse/MC-277941) resin;;_;;clump is not mirrored correctly from behind
-   [MC-277945](https://bugs.mojang.com/browse/MC-277945) Incorrect verb form in "Elytra swooshes" subtitle
-   [MC-277948](https://bugs.mojang.com/browse/MC-277948) Suspicious stew gives different durations of Blindness for Eyeblossom and Azure Bluet
-   [MC-277950](https://bugs.mojang.com/browse/MC-277950) Open potted eyeblossom is shaded (flower;;_;;pot;;_;;cross;;_;;emissive)
-   [MC-277951](https://bugs.mojang.com/browse/MC-277951) Eyeblossom is placed in an unexpected position in the Creative inventory
-   [MC-277952](https://bugs.mojang.com/browse/MC-277952) Sprinting isn't canceled upon flying with elytra
-   [MC-277954](https://bugs.mojang.com/browse/MC-277954) Creaking Heart underwater plays spawning sounds in a loop
-   [MC-277955](https://bugs.mojang.com/browse/MC-277955) Using a loom crashes the game
-   [MC-277961](https://bugs.mojang.com/browse/MC-277961) Experience orbs incorrectly bounce up
-   [MC-277964](https://bugs.mojang.com/browse/MC-277964) Resin is not generated when a creaking is attacked by a wolf owned by a player
-   [MC-277966](https://bugs.mojang.com/browse/MC-277966) Creaking does not generate resin from player-caused explosions
-   [MC-277967](https://bugs.mojang.com/browse/MC-277967) The game crashes when certain explosions occur near a creaking in its death animation
-   [MC-277970](https://bugs.mojang.com/browse/MC-277970) Hanging signs don't display chains when attached to the side of a block
-   [MC-277972](https://bugs.mojang.com/browse/MC-277972) You can no longer swim when crouched under a slab
-   [MC-277983](https://bugs.mojang.com/browse/MC-277983) Naturally-spawned creaking hearts drop experience when broken in Creative mode
-   [MC-277994](https://bugs.mojang.com/browse/MC-277994) Picking a decorated pot or a shulker box always keeps its container data
-   [MC-278002](https://bugs.mojang.com/browse/MC-278002) Sculk sensors are not activated upon resin clumps spawning from creaking hearts
-   [MC-278004](https://bugs.mojang.com/browse/MC-278004) Hitting a creaking heart with a wind charge kills the creaking
-   [MC-278028](https://bugs.mojang.com/browse/MC-278028) Using items underwater can force you to exit swimming mode
-   [MC-278071](https://bugs.mojang.com/browse/MC-278071) "minecraft.used:minecraft.trident" doesn't increase when throwing a trident

---

We're back in the shipping room to serve you the first snapshot release for Minecraft: Java Edition 1.21.4! It's coming in hot with some new pale goodies in the form of Eyeblossoms and Resin, two new additions to the Pale Garden biome. You'll also find that leaves will now fall from the Pale Oak trees in said biome, something we hope will crank up the eerie atmosphere even further. In addition to that, this release is also bringing a collection of technical updates and bug fixes.

Happy mining!

## New Features

The `winter_drop` is no longer an experiment.

### Added Eyeblossoms

Eyeblossoms are new flowers that generate in the Pale Garden biome. Unique features:

-   They exist in two variants: Closed and Open Eyeblossom
-   Eyeblossoms transition between the two variants based on the time of day
    -   During the night, Eyeblossoms will become Open
    -   During the day, they will become Closed
    -   In dimensions that do not have a day/night cycle, they will remain as-is
    -   When transitioning, flowers will emit a particle effect
-   Eyeblossoms planted on the ground will communicate with each other, helping each other to open or close
-   Open Eyeblossoms have glowing eyes during the night
-   Eyeblossoms can be obtained by bonemealing the grass in the Pale Garden biome
-   Bees get poisoned when they touch Eyeblossoms
-   Bees can be tempted by Eyeblossoms, but they get poisoned on player interaction instead of typical breeding/growing behaviour
-   Suspicious Stew made from Eyeblossom will have Blindness or Nausea effect depending on the variant
-   Gray or Orange Dye can be crafted from Closed and Open Eyeblossoms respectively
-   Wandering Trader can sell Open Eyeblossoms

### Added Resin Clump, Block of Resin, Resin Brick, and a family of Resin Bricks blocks

-   Attacking a Creaking will cause its Creaking Heart to exude 2 to 3 Resin Clumps
-   Resin Clump spawns on the sides of Pale Oak Logs that are close, and are connected to the Creaking Heart
-   Creaking Heart is on cooldown and cannot produce more Resin Clumps for 5 seconds after an attack
-   Resin Clump can be used as a material for armor trimming
-   Block of Resin is a storage block for Resin Clumps
-   Resin Clumps can be smelted into Resin Brick items
-   Resin Brick items can be crafted into Resin Bricks, Resin Brick Slabs, Resin Brick Stairs, Resin Brick Walls, and then Chiseled Resin Bricks
-   Resin Clump and Resin Block does not require a tool and are mined instantly
-   The proper tool for Resin Bricks family of blocks is a pickaxe
-   Resin Clumps can be found in the Woodland Mansion chest loot

## Changes

-   The panorama has been updated
-   Sword is no longer efficient to break Moss Carpet. The proper tool for Moss Carpet remains the Hoe
-   Bees are now withered on player interactions with Wither Roses instead of typical breeding/growing behavior

### Required tools for drops

> **Developer's Note**: _We made it so any block that drops when its support is broken will also drop when mined with any tool. It seemed unfair that breaking a block directly could destroy it if it was possible to obtain it with any tool just by breaking the block below!_

-   The following blocks that require support now always drop when broken with any tool: Bell, Lantern, Soul Lantern, all Copper Doors, Iron Door, Heavy Weighted Pressure Plate, Light Weighted Pressure Plate, Polished Blackstone Pressure Plate, and Stone Pressure Plate
-   The Brewing Stand now drops when broken with any tool
-   The Ender Chest now drops Obsidian when broken with an incorrect tool, instead of dropping nothing

### Pale Garden

-   Pale Garden has no music and if a player enters the biome while music is playing, the music will fade out

### Creaking Heart

-   Creaking Heart can be obtained by using a Silk Touch enchanted tool
-   Creaking Heart can be crafted with a Resin Block and Pale Oak Logs
-   Naturally placed Creaking Hearts drop 20-24 experience when broken by a player, with or without silk touch
-   Breaking a Creaking Heart block will drop a 1-3 Resin Clumps, and it is affected by Fortune enchantment

### Pale Oak Tree

-   Pale Oak Leaves have a chance to spawn leaf particles if exposed on the bottom side
-   Player grown Pale Oak trees grow without any decorations
-   Naturally generated Pale Oak trees have Pale Hanging Moss hanging from the foliage, Pale Moss patches on the ground, and Creaking Heart blocks can generate in them
-   Wandering Trader can sell Pale Oak Saplings

### Pale Moss Block

-   Wandering Trader can sell a Pale Moss Block

### Pale Hanging Moss

-   Pale Hanging Moss breaks instantly when mined
-   Pale Hanging Moss requires shears or silk touch tools to be obtained
-   Wandering Trader can sell Pale Hanging Moss

### Creaking mob

-   Creaking melee attacks deal 3 points of damage (1.5 hearts)
-   Illagers are scared of Creaking and will run away from them

The following changes apply for naturally spawning Creaking:

-   Creaking reacts only to damage caused by mobs and projectiles, by swaying in place
-   Creaking ignores Cactus, Sweet Berry Bushes and Powder Snow damage and can now walk through/over them
-   Creaking has a twitching animation
-   Is fire-resistant
-   Creaking Heart decides to remove or replace the connected Creaking when:
    -   It turns day
    -   The Creaking is too far away from the Creaking Heart
    -   A player intersects with the Creaking for a few seconds

## Technical Changes

-   The Data Pack version is now 58
-   The Resource Pack version is now 43
-   Removed the `winter_drop` feature flag and built-in data pack

## Data Pack Version 58

-   `trail` particle has a new required field: `duration`
    -   Indicates, in ticks, how long the particle will take to fly from the start to the target
-   `simple_block` feature type has a new optional field: `schedule_tick`
    -   If set to `true`, the block will be scheduled to tick
-   biome effects have a new format for `music` using a weighted list
    -   The list can be empty indicating no music should play in this biome
-   biome effects have a new optional field: `music_volume`
    -   The game will smoothly transition between the current music volume and the new volume when entering the biome

      "music": [
        {
          "data": {
            "max_delay": 24000,
            "min_delay": 12000,
            "replace_current_music": false,
            "sound": "minecraft:music.overworld.forest"
          },
          "weight": 1
        }
      ],
      "music_volume": 1.0,
    

-   Item blocks with `minecraft:block_entity_data` component will now set block entity data only if `id` tag matches type of placed block entity
    -   Additionally, a warning will be added to item tooltip if placing such item might directly or indirectly lead to command execution with high permission level

### Commands

-   Suggestions will now be shown for attribute modifier IDs existing on the target in the `attribute` command

#### `attribute` Command

New subcommand to reset the base value of an attribute to its default value for the target entity. If the attribute does not exist on the entity, the command will fail.

Syntax:

    attribute <target> <attribute> base reset 
    

Parameters:

-   `target`: The entity to update the attribute for
-   `attribute`: The attribute ID to update

### TNT Minecart Data

-   The `TNTFuse` field of TNT Minecarts has been renamed to `fuse`
-   Addeded optional field `explosion_speed_factor` that controls the amount of added damage depending on the speed of the Minecart
    -   Default value: `1.0`

### Text Components

Added optional `shadow_color` style field to Text Components, which overrides the shadow properties of text.

-   Format:
    -   A packed integer ARGB value (e.g. `-1`)
    -   An array of RGBA values (e.g. `[1, 1, 1, 1]`)
-   If specified as `0`, the shadow will never be displayed for this text
-   If specified as a non-zero value, the shadow will always be displayed with this color

## Resource Pack Version 43

-   Added the following new block models and textures:
    -   `chiseled_resin_bricks`
    -   `closed_eyeblossom`
    -   `open_eyeblossom`
        -   Additionally uses `open_eyeblossom_emissive` texture layer
    -   `resin_block`
    -   `resin_bricks`
    -   `resin_clump`
-   Added the following non-top-level block models:
    -   `cross_emissive`
    -   `flower_pot_cross_emissive`
-   Added the following new item models and textures:
    -   `resin_brick`
    -   `resin_clump`
-   Added new Armor Trim color palette: `trims/color_palettes/resin`
-   Updates to GUI sprites
-   The UV mapping of the Magma Cube texture has been updated

### GUI Sprites

-   The `toast/system` sprite layout has been updated to use standard nine-slicing functionality
-   The `toast/tutorial` sprite will now be scaled for taller toasts, and as such has nine-slice scaling in the default Resource Pack
-   The `advancements/box_obtained` and `advancements/box_unobtained` GUI sprites are now configured to scale with nine-slicing
-   Empty slot sprites, such as those for the armor slots in the inventory, have been renamed and moved from `items` into the `gui/sprites/container/slot` directory
    -   `empty_armor_slot_helmet` -> `helmet`
    -   `empty_armor_slot_chestplate` -> `chestplate`
    -   `empty_armor_slot_leggings` -> `leggings`
    -   `empty_armor_slot_boots` -> `boots`
    -   `empty_slot_sword` -> `sword`
    -   `empty_slot_pickaxe` -> `pickaxe`
    -   `empty_slot_axe` -> `axe`
    -   `empty_slot_shovel` -> `shovel`
    -   `empty_slot_hoe` -> `hoe`
    -   `empty_slot_smithing_template_armor_trim` -> `smithing_template_armor_trim`
    -   `empty_slot_smithing_template_netherite` -> `smithing_template_netherite`
    -   `empty_slot_amethyst_shard` -> `amethyst_shard`
    -   `empty_slot_diamond` -> `diamond`
    -   `empty_slot_emerald` -> `emerald`
    -   `empty_slot_ingot` -> `ingot`
    -   `empty_slot_lapis_lazuli` -> `lapis_lazuli`
    -   `empty_slot_quartz` -> `quartz`
    -   `empty_slot_redstone_dust` -> `redstone_dust`
-   The empty slot sprites in the Loom have been split from their background and moved:
    -   `container/loom/banner_slot` -> `container/slot/banner`
    -   `container/loom/pattern_slot` -> `container/slot/banner_pattern`
    -   `container/loom/dye_slot` -> `container/slot/dye`
-   The empty slot sprites in the Brewing Stand have been split from the container background:
    -   `container/slot/brewing_fuel`
    -   `container/slot/potion`
-   The empty slot sprites in the Horse/Llama inventories have been split from their background, cropped, and moved:
    -   `container/horse/armor_slot` -> `container/slot/horse_armor`
    -   `container/horse/llama_armor_slot` -> `container/slot/llama_armor`
    -   `container/horse/saddle_slot` -> `container/slot/saddle`

## Fixed bugs in 24w44a

-   [MC-12829](https://bugs.mojang.com/browse/MC-12829) Flying through climbable blocks in creative mode slows you down
-   [MC-16132](https://bugs.mojang.com/browse/MC-16132) Cave carvers don't cut through snow blocks
-   [MC-49071](https://bugs.mojang.com/browse/MC-49071) The title of written books is not displayed in item frames unless renamed with anvils
-   [MC-50614](https://bugs.mojang.com/browse/MC-50614) Villager trading window is not closed when villager leaves interaction range
-   [MC-55347](https://bugs.mojang.com/browse/MC-55347) Title with long duration shows in other world
-   [MC-59308](https://bugs.mojang.com/browse/MC-59308) Dark/pale oak leaves sometimes do not generate centered on the tree
-   [MC-71990](https://bugs.mojang.com/browse/MC-71990) The 'Hat' layer of a player skin is not shown in the tab list under certain conditions
-   [MC-72846](https://bugs.mojang.com/browse/MC-72846) Altering the time of day using commands is delayed
-   [MC-74408](https://bugs.mojang.com/browse/MC-74408) The brewing stand GUI does not have container sprites for the fuel and potion output slots
-   [MC-86153](https://bugs.mojang.com/browse/MC-86153) Ctrl Pick Block gives new item even if picked item already exists in inventory
-   [MC-111516](https://bugs.mojang.com/browse/MC-111516) Player flickers/turns invisible when flying at high speeds
-   [MC-134002](https://bugs.mojang.com/browse/MC-134002) Blocks at y=-64 don't render on a map
-   [MC-152728](https://bugs.mojang.com/browse/MC-152728) The player continues sprinting when performing actions that slow them down
-   [MC-158205](https://bugs.mojang.com/browse/MC-158205) Ender Dragon doesn't take damage from melee attacks unless hit a certain way
-   [MC-166614](https://bugs.mojang.com/browse/MC-166614) Advancements menu doesn't render titles fully when they're longer than roughly 30 characters
-   [MC-191096](https://bugs.mojang.com/browse/MC-191096) Fences and walls can no longer be placed in invalid block states by using /setblock or /fill
-   [MC-191698](https://bugs.mojang.com/browse/MC-191698) Cannot set "shape" block state of stairs with /setblock
-   [MC-192498](https://bugs.mojang.com/browse/MC-192498) /fill and /setblock cannot set different directional block states of several blocks, such as glass panes and iron bars
-   [MC-192791](https://bugs.mojang.com/browse/MC-192791) Doors' block states cannot be set if another door half exists
-   [MC-192956](https://bugs.mojang.com/browse/MC-192956) Cannot setblock chest type other than single without other adjacent chest
-   [MC-192959](https://bugs.mojang.com/browse/MC-192959) Cannot setblock a directional state on redstone wire nor tripwire
-   [MC-203146](https://bugs.mojang.com/browse/MC-203146) No subtitle for item.crossbow.loading;;_;;middle
-   [MC-225367](https://bugs.mojang.com/browse/MC-225367) Magma Cube's layers UV mapping overlaps
-   [MC-255254](https://bugs.mojang.com/browse/MC-255254) Use /setblock can't place snowy grass block
-   [MC-256822](https://bugs.mojang.com/browse/MC-256822) Advancement description text cuts words in weird places if title is too short
-   [MC-264541](https://bugs.mojang.com/browse/MC-264541) Nine;;_;;sliced sprite glitch
-   [MC-265033](https://bugs.mojang.com/browse/MC-265033) Slots with item outline textures behave inconsistently when items are placed inside of these slots
-   [MC-265637](https://bugs.mojang.com/browse/MC-265637) /execute on origin doesn't work on Area Effect Cloud's owner after rejoining
-   [MC-266019](https://bugs.mojang.com/browse/MC-266019) Large bold text can have gaps in the middle of characters
-   [MC-267095](https://bugs.mojang.com/browse/MC-267095) Nether Brick block texture misalignment
-   [MC-267730](https://bugs.mojang.com/browse/MC-267730) Text wall when trying to join a server
-   [MC-267878](https://bugs.mojang.com/browse/MC-267878) Tutorial hint for movement may not fit all the required text if controls are changed
-   [MC-268364](https://bugs.mojang.com/browse/MC-268364) Wind Charges don't ignite TNT minecarts
-   [MC-268522](https://bugs.mojang.com/browse/MC-268522) The last language option is not deselected if you reach the bottom of the list and exit the menu
-   [MC-268822](https://bugs.mojang.com/browse/MC-268822) There are no shadows on text displayed within the singleplayer, multiplayer, and realms list menus
-   [MC-271218](https://bugs.mojang.com/browse/MC-271218) Empty Offers:{} NBT doesn't disable trades anymore
-   [MC-272062](https://bugs.mojang.com/browse/MC-272062) Dimension padding doesn't affect the start piece
-   [MC-272105](https://bugs.mojang.com/browse/MC-272105) Decorated Pot is missing the "contents" implicit data component type
-   [MC-275917](https://bugs.mojang.com/browse/MC-275917) Consumable blocking animation is broken in first person
-   [MC-276123](https://bugs.mojang.com/browse/MC-276123) Display entity shadow;;_;;radius updates for all display entities
-   [MC-276389](https://bugs.mojang.com/browse/MC-276389) The "Can hold a mixed stack of items" text within bundle tooltips doesn't have a shadow
-   [MC-276794](https://bugs.mojang.com/browse/MC-276794) There are no shadows on text displayed within the social interactions list menu
-   [MC-276799](https://bugs.mojang.com/browse/MC-276799) There are no shadows on text displayed within the superflat customization or preset lists
-   [MC-276969](https://bugs.mojang.com/browse/MC-276969) TNT Minecarts with explosion;;_;;power set to 0 can still break blocks
-   [MC-277066](https://bugs.mojang.com/browse/MC-277066) Creakings do not show particles leading to the creaking heart if Particles are set to Minimal
-   [MC-277072](https://bugs.mojang.com/browse/MC-277072) You can use bone meal on pale moss carpets in situations where nothing grows
-   [MC-277076](https://bugs.mojang.com/browse/MC-277076) Pale hanging moss doesn't have an assigned tool
-   [MC-277094](https://bugs.mojang.com/browse/MC-277094) Pale oak hanging sign uses a totally different palette to the rest of the wood set
-   [MC-277101](https://bugs.mojang.com/browse/MC-277101) Destroying a creaking heart with player-activated TNT does not grant the Monster Hunter advancement
-   [MC-277113](https://bugs.mojang.com/browse/MC-277113) Pale oak sign item and block texture is inconsistent with the other signs
-   [MC-277115](https://bugs.mojang.com/browse/MC-277115) Creaking mob can spawn inside block
-   [MC-277123](https://bugs.mojang.com/browse/MC-277123) You can get soft locked if a creaking falls in a hole with you
-   [MC-277129](https://bugs.mojang.com/browse/MC-277129) The Creaking "slides" on the ground when not aggro towards the player
-   [MC-277134](https://bugs.mojang.com/browse/MC-277134) Pale chest boat item is incorrect
-   [MC-277145](https://bugs.mojang.com/browse/MC-277145) The 2 brightest pixel colors on pale oak boat items are wrong
-   [MC-277164](https://bugs.mojang.com/browse/MC-277164) Music plays in the pale garden
-   [MC-277202](https://bugs.mojang.com/browse/MC-277202) Differences in the highlight effect of empty slot outlines in the GUI
-   [MC-277213](https://bugs.mojang.com/browse/MC-277213) Subtitles for cave sounds, creaking heart idle sounds, and pale hanging moss idle sounds are identical but are shown separately
-   [MC-277214](https://bugs.mojang.com/browse/MC-277214) The sound event associated with the "Creaking sees player" subtitle doesn't exist
-   [MC-277268](https://bugs.mojang.com/browse/MC-277268) Pufferfish have no hit delay on creakings; they make a loud buzzing noise constantly
-   [MC-277271](https://bugs.mojang.com/browse/MC-277271) Sniffers can't dig into pale moss
-   [MC-277275](https://bugs.mojang.com/browse/MC-277275) Crash upon loading chunks when teleporting
-   [MC-277305](https://bugs.mojang.com/browse/MC-277305) Creakings are able to be pushed around by entities and players when standing on soul sand and mud
-   [MC-277363](https://bugs.mojang.com/browse/MC-277363) Creakings cannot rotate their heads independently from their bodies
-   [MC-277368](https://bugs.mojang.com/browse/MC-277368) The "message(s) selected" text within the "Select Chat Messages to Report" menu is positioned too close to the header separator
-   [MC-277373](https://bugs.mojang.com/browse/MC-277373) There are no shadows on text used to display the names of categories within the key binds menu
-   [MC-277374](https://bugs.mojang.com/browse/MC-277374) There are no shadows on text used to display the names of lists within the resource pack and data pack menus
-   [MC-277387](https://bugs.mojang.com/browse/MC-277387) Evokers run away from creakings faster than other illagers
-   [MC-277408](https://bugs.mojang.com/browse/MC-277408) There are no shadows on text used to display the description of report categories within the "Select Report Category" menu
-   [MC-277440](https://bugs.mojang.com/browse/MC-277440) There are no shadows on text used to display the speed at which a world is being uploaded within the realms menu
-   [MC-277441](https://bugs.mojang.com/browse/MC-277441) There are no shadows on text used to display the start date and time left of your realm subscription within the realms menu
-   [MC-277443](https://bugs.mojang.com/browse/MC-277443) There are no shadows on text displayed when connecting to realms
-   [MC-277444](https://bugs.mojang.com/browse/MC-277444) There are no shadows on text used to display the names of text boxes within the realms settings menu
-   [MC-277477](https://bugs.mojang.com/browse/MC-277477) There are no shadows on text used to display the description of advancements within the advancements menu
-   [MC-277478](https://bugs.mojang.com/browse/MC-277478) The "Layer Material" and "Height" text within the "Superflat Customization" menu is positioned too close to the header separator
-   [MC-277479](https://bugs.mojang.com/browse/MC-277479) There are no shadows on text used to display the names of game rules within the game rules menu
-   [MC-277480](https://bugs.mojang.com/browse/MC-277480) There are no shadows on placeholder text displayed within the "Please describe what happened" box within the reporting menu
-   [MC-277510](https://bugs.mojang.com/browse/MC-277510) When grass or mycelium grows under powder snow the grass is not snowy
-   [MC-277549](https://bugs.mojang.com/browse/MC-277549) Arrows summoned with custom motion don't render correctly
-   [MC-277557](https://bugs.mojang.com/browse/MC-277557) Creaking Heart has inconsistent and miscolored pixels
-   [MC-277617](https://bugs.mojang.com/browse/MC-277617) The base damage of the Power enchantment was reduced in 1.21
-   [MC-277651](https://bugs.mojang.com/browse/MC-277651) Arrows and tridents glitch when in an explosion or wind charge burst
-   [MC-277657](https://bugs.mojang.com/browse/MC-277657) Arrows are not correctly affected by rising bubble columns
-   [MC-277658](https://bugs.mojang.com/browse/MC-277658) Tridents glitch up and down in rising bubble columns
-   [MC-277682](https://bugs.mojang.com/browse/MC-277682) Arrows and tridents glitch after shooting/throwing them onto magma/soul sand blocks underwater
-   [MC-277742](https://bugs.mojang.com/browse/MC-277742) Creakings activate for a brief moment when switching from Creative to Spectator mode
-   [MC-277754](https://bugs.mojang.com/browse/MC-277754) Chunks on the corner of the rendering distance are not synchronized between client and server for the terrain
-   [MC-277776](https://bugs.mojang.com/browse/MC-277776) Baby cats and ocelots size is changed
-   [MC-277815](https://bugs.mojang.com/browse/MC-277815) Creakings on a team can still be observed and stopped by teammate players
-   [MC-277833](https://bugs.mojang.com/browse/MC-277833) Creakings can attack players in the same team as them
-   [MC-277871](https://bugs.mojang.com/browse/MC-277871) Creaking Hearts do not have a unique place sound

---

Hello!

In this week's snapshot we are adding a new experiment which will allow you to experience the Pale Garden, a new eerie biome filled with Pale Oak Trees and Hanging Moss. Beware of its sole inhabitant, the Creaking, and don't blink!

Happy Exploring!

## Experimental Features

The experimental feature with the Pale Garden biome can be enabled by turning the "Winter Drop" experiment on. You can do this in the Experiments screen while creating the world. These experiments have no effect unless enabled. You can find more information about Feature Toggles [here](https://www.minecraft.net/en-us/article/testing-new-minecraft-features/feature-toggles-java-edition).

We would love to hear your feedback on the new Pale Garden biome and the hostile mob the Creaking.

Creaking feedback thread: [https://aka.ms/mccreakingfeedback](https://aka.ms/mccreakingfeedback)

Pale garden feedback thread: [https://aka.ms/mcpalegardenfeedback](https://aka.ms/mcpalegardenfeedback)

### Winter Drop

-   Added Pale Garden Biome, Pale Oak tree, Pale Moss block, Pale Moss carpet, Pale Hanging Moss and Pale Oak woodset
-   Added Creaking mob, Creaking Spawn Egg and Creaking Heart block

#### Pale Garden

Pale Garden is a biome variation of Dark Forest. Unique features:

-   Pale Oaks generate here
-   Pale Moss blocks/carpet generate on the ground here
-   Hanging Pale Moss generate hanging from the foliage of Pale Oaks
-   Animal mobs do not spawn naturally in Pale Gardens
-   New biome specific ambient sounds
-   Creaking Heart block can generate in Pale Oaks

#### Pale Oak Tree

-   Pale Oak Leaves drop Pale Oak Saplings that can be planted in a 2x2 configuration to grow Pale Oak trees
-   Pale Oaks logs can be crafted into the Pale Oak woodset:
    -   Door
    -   Fence
    -   Fence Gate
    -   Plank
    -   Sign
    -   Hanging Sign
    -   Slab
    -   Stairs
    -   Trapdoor
    -   Wood
    -   Stripped Log
    -   Stripped Wood
    -   Button
    -   Pressure Plate
    -   Boat
    -   Boat with Chest

#### Pale Moss Block

Pale Moss block generates naturally in the Pale Garden biome

#### Pale Moss Carpet

Pale Moss block generates naturally in the Pale Garden biome. Unique features:

-   When placed, Pale Moss Carpet grows up to two blocks on the solid faces of any block that borders it
-   Pale Moss Carpet can be bonemealed to grow to full on all solid faces of any block that borders it

#### Pale Hanging Moss

Pale Hanging Moss generates naturally in the Pale Garden biome under the foliage of Pale Oaks

-   Pale Hanging Moss does not grow randomly, but can be bonemealed to grow down

#### Creaking mob

The Creaking mob spawns at night in the Pale Garden biome if there is a Creaking Heart block that has been generated in a Pale Oak tree. Gameplay features:

-   An activated Creaking will not move if a player is looking at it
-   Creaking is invulnerable to damage
-   Creaking has Fire Resistance
-   When hit, a particle trail is shown between the Creaking and the Creaking Heart block it is connected to
-   When the Creaking Heart block the Creaking is connected to is destroyed, the Creaking is removed
-   Is not affected by light levels but spawns and despawns based on day/night cycle
-   Creaking cannot enter Boats
-   Creaking spawned from a Creaking Heart can not go through portals
-   The Creaking Spawn Egg will spawn a Creaking mob that is not connected to a Creaking Heart
    -   Creaking summoned from a Creaking Spawn Egg or commands will persist through day and night, and, loads and saves
    -   Is Fire Resistant
    -   Takes damage from attacks and other damage sources
    -   Has one point of health (half a heart)
-   Creaking summoned from the Creaking Heart cannot be spawned with a spawn egg, nor can it be summoned with commands. It can only exist as a part of the Creaking Heart block
-   Player wearing a carved pumpkin on their head can look at Creaking without it freezing in place

#### Creaking Heart

A Creaking Heart is a “living” block generating in Pale Oak trees, covered on all sides by Pale Oak wood logs. It can spawn a Creaking mob when it is nighttime, and it is placed between two correctly aligned Pale Oak log blocks.

-   Is active during night and dormant during day
-   Sends a trail of particles towards the connected Creaking when the Creaking gets hit by the player
-   When Creaking Heart block is destroyed, the connected Creaking is removed

#### New system for Pale Garden ambient sounds

Ambient sounds in the Pale Garden biome do not come from the biome settings but are generated by blocks found in the biome

-   Pale Hanging Moss emits subtle atmospheric sounds when it is attached to Pale Oak Logs and Pale Oak Leaves
-   Creaking Heart block emits a set of eerie sounds when it is active during night and surrounded by Logs on all sides

## Changes

-   Bundle coloring recipes are now unlocked by Dye rather than uncolored Bundle item
-   Shulker Box and Bundle coloring recipes no longer work when trying to apply a Dye to an item of the same color
-   Added an accessibility option to make targeted block's outlines more visible

### Realms

-   The game mode for the last active world on a Realm will now be visible on the main Realms screen if applicable

## Technical Changes

-   The Data Pack version is now 56
-   Resource Pack version is now 40

## Data Pack Version 56

-   Added new particles: `block_crumble` and `trail`

### Commands

-   You cannot ride Leash Knots, Lighting Bolts and Fishing Bobbers anymore with `ride` command
-   Added the `rotate` command

#### `rotate` Command

New command to rotate entities.

Syntax:

    rotate <target> <rotation>
    rotate <target> facing <facingLocation>
    rotate <target> facing entity <facingTarget> [<facingAnchor>]
    

Parameters:

-   `target`: The entity to rotate
-   `rotation`: Two rotation values in degrees denoting horizontal and vertial rotation
    -   May use relative (`~`) coordinate notation to specify rotation relative to current context rotation
-   `facingLocation`: The coordinates of a location in the world for the rotated entity to face
-   `facingTarget`: An entity for the rotated entity to face
-   `facingAnchor`: Specifies the anchor of the `facingTarget` entity to rotate towards - `feet` or `eyes` (by default `feet`)

Note: parameters have the same meaning as in the `teleport` command.

### Enchantment Effects

-   Renamed effect type `damage_item` to `change_item_damage`, now also supports negative amounts

### Tags

#### Item Tags

-   `gaze_disguise_equipment`: Items that can be equipped to disguise the player looking for other mobs

### Particles

-   added `block_crumble` particle with the following options:
    -   `block_state` - the block state of the block to crumble
-   added `trail` particle with the following options:
    -   `color` - the color of the trail
    -   `target` - the position of the target for particle to reach

## Resource Pack Version 40

Increased to support the new experimental changes

## Fixed bugs in 24w40a

-   [MC-64265](https://bugs.mojang.com/browse/MC-64265) Teleporting passengers does not dismount them
-   [MC-108323](https://bugs.mojang.com/browse/MC-108323) Underlines in chat and /title command intersect each other, causing an ugly effect when fading
-   [MC-185144](https://bugs.mojang.com/browse/MC-185144) Item durability bar and all items render incorrectly in the villager trade UI
-   [MC-272946](https://bugs.mojang.com/browse/MC-272946) The block outline is nearly invisible for some blocks
-   [MC-273848](https://bugs.mojang.com/browse/MC-273848) Players can spawn underwater again in 1.21
-   [MC-275505](https://bugs.mojang.com/browse/MC-275505) The /tp command forces a mounted entity to dismount
-   [MC-275706](https://bugs.mojang.com/browse/MC-275706) Vanilla clients can't display items with components in recipe book anymore
-   [MC-275790](https://bugs.mojang.com/browse/MC-275790) Non-existent entries in certain tags that are not required causes validation error
-   [MC-276005](https://bugs.mojang.com/browse/MC-276005) The text of sneaking players' name tags is rendered completely invisible or barely visible when the "Text Background Opacity" accessibility option is set to high values
-   [MC-276330](https://bugs.mojang.com/browse/MC-276330) Bundles no longer play a sound when being emptied
-   [MC-276387](https://bugs.mojang.com/browse/MC-276387) Bundles can remain in the open state when using hotkeys to move them into different slots
-   [MC-276391](https://bugs.mojang.com/browse/MC-276391) The item durability and bundle fullness bars render incorrectly when held over recipe book elements
-   [MC-276440](https://bugs.mojang.com/browse/MC-276440) Items within bundle tooltips can be unselected by scrolling despite only one item being present
-   [MC-276596](https://bugs.mojang.com/browse/MC-276596) Damageable horse armor with "damage;;_;;on;;_;;hurt" enabled doesn't take damage when the horse wearing it is hurt
-   [MC-276640](https://bugs.mojang.com/browse/MC-276640) Riding an entity constantly teleported with relative coordinates produces jittery camera movement
-   [MC-276651](https://bugs.mojang.com/browse/MC-276651) damage;;_;;item does not repair items when the value is negative
-   [MC-276669](https://bugs.mojang.com/browse/MC-276669) Pausing the game spams "Trying to save removed ender pearl, skipping" to log if ender pearls have landed
-   [MC-276806](https://bugs.mojang.com/browse/MC-276806) The text of name tags behind blocks or entities is rendered completely invisible or barely visible when the "Text Background Opacity" accessibility option is set to high values
-   [MC-276876](https://bugs.mojang.com/browse/MC-276876) Lava cauldrons deal less damage to boats and minecarts than before
-   [MC-276947](https://bugs.mojang.com/browse/MC-276947) Command server output in singleplayer is printed into chat
-   [MC-276948](https://bugs.mojang.com/browse/MC-276948) Split boat entity types have capitalized 'With'
-   [MC-276949](https://bugs.mojang.com/browse/MC-276949) Old boat entity type translation keys are not deprecated
-   [MC-276956](https://bugs.mojang.com/browse/MC-276956) Cannot access registries in container block entity "lock" field
-   [MC-276980](https://bugs.mojang.com/browse/MC-276980) Projectiles on the wall in the water will continue to produce bubble trails

---

Happy Wednesday miners! With this snapshot we're now bundling Bundles into the game for real - Bundles are no longer experimental!

Happy mining!

## New Features

-   Bundles are no longer experimental

## Changes

-   Updated slot highlight in the UI so Item texture has better visibility
    -   The previous textures have been added to Programmer Art resource pack
-   Equipping a Carved Pumpkin on your head now removes the player marker from other players' maps

## Technical Changes

-   The Data Pack version is now 55
-   Removed the `bundle` feature flag and built-in datapack

## Data Pack Version 55

-   `boat` and `chest_boat` entity types have been split into separate types, one per existing variant

### Boat split

-   Variants of boats and chest boats now have separate entity type instead of `Type` field
-   Removed entites:
    -   `minecraft:boat`
    -   `minecraft:chest_boat`
-   New entities:
    -   Boat without chest:
        -   `Type=oak` -> `minecraft:oak_boat`
        -   `Type=spruce` -> `minecraft:spruce_boat`
        -   `Type=birch` -> `minecraft:birch_boat`
        -   `Type=jungle` -> `minecraft:jungle_boat`
        -   `Type=acacia` -> `minecraft:acacia_boat`
        -   `Type=cherry` -> `minecraft:cherry_boat`
        -   `Type=dark_oak` -> `minecraft:dark_oak_boat`
        -   `Type=mangrove` -> `minecraft:mangrove_boat`
        -   `Type=bamboo` -> `minecraft:bamboo_raft`
    -   Boat with chest:
        -   `Type=oak` -> `minecraft:oak_chest_boat`
        -   `Type=spruce` -> `minecraft:spruce_chest_boat`
        -   `Type=birch` -> `minecraft:birch_chest_boat`
        -   `Type=jungle` -> `minecraft:jungle_chest_boat`
        -   `Type=acacia` -> `minecraft:acacia_chest_boat`
        -   `Type=cherry` -> `minecraft:cherry_chest_boat`
        -   `Type=dark_oak` -> `minecraft:dark_oak_chest_boat`
        -   `Type=mangrove` -> `minecraft:mangrove_chest_boat`
        -   `Type=bamboo` -> `minecraft:bamboo_chest_raft`

### Container Locks

-   The `Lock` field of containers has been renamed to `lock` and is now an item predicate
    -   Any items which match the predicate can open the container
-   The `lock` data component is now also an item predicate

### Tags

#### Item Tags

-   `map_invisibility_equipment`: Items that can be equipped to hide the player marker on other players maps

### Predicates

-   `minecraft:boat` entity sub-predicate has been removed, since boats no longer have variants

## Fixed bugs in 24w39a

-   [MC-219083](https://bugs.mojang.com/browse/MC-219083) Hunger client/server desync when natural regeneration is off in peaceful mode
-   [MC-275216](https://bugs.mojang.com/browse/MC-275216) Bowl is consumed when feeding a rabbit stew to a wolf
-   [MC-275544](https://bugs.mojang.com/browse/MC-275544) Drowned do not summon reinforcements anymore
-   [MC-276341](https://bugs.mojang.com/browse/MC-276341) The time how long you remain on fire no longer increases while being in the fire
-   [MC-276426](https://bugs.mojang.com/browse/MC-276426) Slimes or magma cubes spawned by splitting synchronize inherited status effects
-   [MC-276588](https://bugs.mojang.com/browse/MC-276588) Boat with chest inventory names no longer are suffixed with 'with Chest'
-   [MC-276598](https://bugs.mojang.com/browse/MC-276598) The slot;;_;;highlight;;_;;front texture renders incorrectly behind with missing recipe items
-   [MC-276610](https://bugs.mojang.com/browse/MC-276610) Ender pearl interaction with bubble columns is broken
-   [MC-276611](https://bugs.mojang.com/browse/MC-276611) Converted mobs do not keep CanBreakDoors tag
-   [MC-276615](https://bugs.mojang.com/browse/MC-276615) Cured Zombie Villagers keep CanPickUpLoot:0b
-   [MC-276638](https://bugs.mojang.com/browse/MC-276638) The server console or LAN game output spammed with "PLAYER moved too quickly!" after a player dies and respawns
-   [MC-276646](https://bugs.mojang.com/browse/MC-276646) Unique Horse Armor sound event is no longer used
-   [MC-276674](https://bugs.mojang.com/browse/MC-276674) Entities with emissive eyes aren't properly affected by fog of any kind
-   [MC-276707](https://bugs.mojang.com/browse/MC-276707) Underwater fireballs constantly play fire extinguishing sound
-   [MC-276724](https://bugs.mojang.com/browse/MC-276724) Arrows and potions resist upward flowing bubble columns
-   [MC-276727](https://bugs.mojang.com/browse/MC-276727) Projectiles are choppy while moving after hitting blocks or entities
-   [MC-276807](https://bugs.mojang.com/browse/MC-276807) All blocks and entities flicker at night or at lower light levels than 15
-   [MC-276817](https://bugs.mojang.com/browse/MC-276817) Teleport command offsets are applied incorrectly
-   [MC-276843](https://bugs.mojang.com/browse/MC-276843) Touching an end portal while in spectator mode teleports the player when they exit spectator mode
-   [MC-276919](https://bugs.mojang.com/browse/MC-276919) /tp teleports twice the relative distance if there's a block on the teleport point

---

Hey! This snapshot brings you dyable Bundles in the Bundles experiment and fully-featured world creation for Realms, including Hardcore mode.

Happy dyeing!

## Experimental Features

### Bundles

-   The Bundle can be dyed 16 different colors using Dyes

## Changes

-   Shulker Box coloring recipes are now shown in the recipe book
-   Updated the world creation screen for Realms
-   Enabled hardcore mode for Realms
-   Throwing items out of your inventory very quickly in creative mode is now throttled

### Realms

-   Now uses the normal, fully featured world creation screen
    -   Enables game rule customization
    -   Enables datapack customization

#### Hardcore mode

Hardcore mode is now available in Realms and is accessible by creating a new world or recreating an existing one

## Technical Changes

-   The Data Pack version is now 54
-   Resource Pack version is now 39
-   Temporary option for ignoring connection errors on client side (`strictErrorHandling`) has been removed

## Data Pack Versions 54

-   Introduced new Item tag `bundles` which includes all Bundle Items

### New Recipe Type

#### `crafting_transmute` recipe type

-   New crafting recipe type has been introduced: `crafting_transmute`
-   When matched, output will copy the input item stack, changing the item type but preserving all stack components
-   This completely replaces `crafting_special_shulkerboxcoloring`
-   Fields:
    -   `category` - crafting book category, one of `building`, `redstone`, `equipment`, `misc`
    -   `group` - optional string
    -   `input` - ingredient for item to copy
    -   `material` - additional ingredient to use
    -   `result` - item type to use for output

## Resource Pack Versions 39

-   Bundle models and textures have 16 colored variants
-   The models and UV mapping related to the Torch and blocks containing Redstone Torch have been updated
    -   The "inverted" model now uses 6 separate faces creating the same effect as a model with a negative size
    -   Updated the UV layout for the inverted model

## Fixed bugs in 24w38a

-   [MC-13246](https://bugs.mojang.com/browse/MC-13246) On certain enchanted items, the Anvil will display a "too expensive" message before attempting to repair, combine, or rename them
-   [MC-134626](https://bugs.mojang.com/browse/MC-134626) Squids/glow squids bounce up and down in bubble columns, teleporting high up in the air
-   [MC-164258](https://bugs.mojang.com/browse/MC-164258) Recipe book search field is not selected when clicking on the search icon
-   [MC-169660](https://bugs.mojang.com/browse/MC-169660) /teleport without can change the entity's rotation
-   [MC-204050](https://bugs.mojang.com/browse/MC-204050) Subtitle for shooting amethyst blocks is "Block breaking"
-   [MC-216016](https://bugs.mojang.com/browse/MC-216016) Launching fireworks into a crystal sound block will make the breaking noise
-   [MC-225060](https://bugs.mojang.com/browse/MC-225060) Burning entity sound repeats every tick
-   [MC-228070](https://bugs.mojang.com/browse/MC-228070) Name tags rendered in blocks have letters brighter depending on your angle
-   [MC-275347](https://bugs.mojang.com/browse/MC-275347) Minecart with Furnace does not travel correctly over curves
-   [MC-275413](https://bugs.mojang.com/browse/MC-275413) Squids and glow squids are not affected by the thrust of the bubble column
-   [MC-276292](https://bugs.mojang.com/browse/MC-276292) Shift-clicking the "Destroy Item" slot in the creative inventory deletes the items server-side but not client-side, causing a desync
-   [MC-276372](https://bugs.mojang.com/browse/MC-276372) Player drops 2 items from the hotbar at once when the Survival Inventory tab is not selected
-   [MC-276373](https://bugs.mojang.com/browse/MC-276373) Items dropped from the hotbar are sometimes lost when the Survival Inventory tab is not selected
-   [MC-276428](https://bugs.mojang.com/browse/MC-276428) Player cannot drink honey bottles when they're not hungry
-   [MC-276459](https://bugs.mojang.com/browse/MC-276459) Item display rotation wrapping does not interpolate cleanly
-   [MC-276539](https://bugs.mojang.com/browse/MC-276539) Name tags and text displays render brighter in dark areas when behind blocks or entities
-   [MC-276573](https://bugs.mojang.com/browse/MC-276573) Spruce boat item translation key misspells "minecaft"
-   [MC-276603](https://bugs.mojang.com/browse/MC-276603) No High Norwegian language option
-   [MC-276621](https://bugs.mojang.com/browse/MC-276621) Game crashes when opening inventory that renders entity with both Invisibility and Glowing effects
-   [MC-276640](https://bugs.mojang.com/browse/MC-276640) Riding an entity constantly teleported with relative coordinates produces jittery camera movement
-   [MC-276704](https://bugs.mojang.com/browse/MC-276704) Not using a selector in a tp command breaks rotation from a completely different tp command
-   [MC-276722](https://bugs.mojang.com/browse/MC-276722) Teleporting to your current position every tick sometimes doesn't let you move properly

---

Hi everyone! In this snapshot we have fixed the bug with Ender Pearls not teleporting the player to the point of impact. Ender Pearls will now also load chunks when thrown. Happy mining!

## New Features

## Changes

-   Thrown Ender Pearls now load and tick chunks
-   Added language support for High Norwegian

### Ender Pearl Chunk Loading

-   Ender Pearls now ensure that the chunk they are in or travel into is always loaded and ticking
-   They also load chunks when crossing to a new dimension, so that they can always continue to travel
-   This ensures that Ender Pearls can always land, and makes cross dimensional Ender Pearl travelling more predictable
-   Ender Pearls now unload when a player logs out, and reappear whenever that player logs back in, similar to how mounts currently behave

### Mob Conversion Details

In last week's snapshot, we fixed a bug related to which data gets transferred between mobs when converted from one type to another (ex: zombie to drowned). This week, we have reverted a few of those changes (health, attributes, and loot tables are no longer transferred).

-   Here is a full list of tags, data, and other properties which get transferred when a mob is converted (only relevant for mobs that can have these properties):
    
    -   `AbsorptionAmount`
    -   `active_effects`
    -   `Age`
    -   `AngerTime`
    -   `AngryAt`
    -   `ArmorDropChances`
    -   `ArmorItems`
    -   `Brain.memories.minecraft:angry_at.ttl`
    -   `Brain.memories.minecraft:angry_at.value`
    -   `CanBreakDoors`
    -   `CanPickUpLoot`
    -   `CustomNameVisible`
    -   `CustomName`
    -   `fall_distance`
    -   `FallFlying`
    -   `Fire`
    -   `ForcedAge`
    -   `HandDropChances`
    -   `HandItems`
    -   `HurtByTimestamp`
    -   `HurtTime`
    -   `Invulnerable`
    -   `IsBaby`
    -   `Leash`
    -   `LeftHanded`
    -   `Motion`
    -   `NoAI`
    -   `NoGravity`
    -   `OnGround`
    -   `Passengers`
    -   `PersistenceRequired`
    -   `PortalCooldown`
    -   `Position`
    -   `RootVehicle`
    -   `Rotation`
    -   `Silent`
    -   `SleepingX`
    -   `SleepingY`
    -   `SleepingZ`
    -   `Tags`
    -   `Team`
-   Mobs that split into several mobs rather than converting from one type into another do not transfer the following properties:
    
    -   `ArmorDropChances`
    -   `ArmorItems`
    -   `fall_distance`
    -   `FallFlying`
    -   `HandDropChances`
    -   `HandItems`
    -   `HurtByTimestamp`
    -   `HurtTime`
    -   `Leash`
    -   `Motion`
    -   `OnGround`
    -   `Passengers`
    -   `Position`
    -   `Rotation`
    -   `SleepingX`
    -   `SleepingY`
    -   `SleepingZ`
-   Some properties mentioned in MC-88967 are intentionally not transferred in any conversion:
    
    -   Attributes
    -   Gossips
    -   Health
    -   Loot tables
    -   VillagerData
    -   Xp

## Technical Changes

-   The Data Pack version is now 53
-   Resource Pack version is now 38

## Data Pack Version 53

### Loot tables

-   Tool value (used for functions like `match_tool`) is now available for some additional loot table types
    -   `archaeology` - used brush
    -   `vault` - inserted key (not available when displaying items)
    -   `shearing` - shears
-   Chickens laying eggs is now controlled by a loot table found at `gameplay/chicken_lay`
-   Armadillos randomly dropping scutes is now controlled by a loot table found at `gameplay/armadillo_shed`

#### Hero of the Village Gift Loot Tables

-   The loot given by Villagers is now controlled by two additional loot tables:
    -   `gameplay/hero_of_the_village/unemployed_gift` - used if the Villager is unemployed
    -   `gameplay/hero_of_the_village/baby_gift` - used if the Villager is a baby

### Tags

#### Item Tags

-   `duplicates_allays`: Items that can be used to duplicate Allays when dancing
-   `panda_eats_from_ground`: Items that a Panda will pick up from the ground and eat
-   `brewing_fuel`: Items that can be used as fuel in a Brewing Stand

### Item Component Changes

#### `minecraft:fire_resistant` -> `minecraft:damage_resistant`

-   Has a new field: `types`, hash-prefixed damage type tag
    -   Items with this component, when in entity form, will be resistant to the damage types included in the tag
    -   This component also affects whether the equipped item will be damaged when the wearer is hurt by a given damage type

#### `minecraft:item_name`

-   Name provided by this component always has the lowest priority
    -   That means it will be overriden by components like `minecraft:potion_contents`

#### `minecraft:potion_contents`

-   Added optional string field `custom_name`
    -   When present, it will be used to generate containing stack name
    -   For example, if value is `foo` and item is `minecraft:lingering_potion`, the name of item will be translation of `item.minecraft.lingering_potion.effect.foo`

#### `minecraft:equippable`

-   Added the following fields
    -   `swappable`: boolean (default: `true`), whether the item can be equipped into the relevant slot by right-clicking
    -   `damage_on_hurt`: boolean (default: `true`), whether this item will be damaged when the wearing entity is damaged

#### Added `minecraft:death_protection`

-   If present, this item will protect the holder from dying by restoring a single health point
-   Format: object with fields
    -   `death_effects`: An optional list of effects that are applied when the item protects the holder
        -   These effects are the same as those specified by the `on_consume_effects` field in the `consumable` component

### Predicates

#### `salmon` entity sub-predicate

-   Added `minecraft:salmon` entity sub-predicate
-   Fields:
    -   `variant`: one of `small`, `medium`, `large`

### Advancements

#### Triggers

##### `minecraft:killed_by_crossbow` -> `minecraft:killed_by_arrow`

-   Will now trigger whenever an Arrow kills an entity, not just when fired from a Crossbow
-   Has a new optional Item Predicate field, `fired_from_weapon`
    -   Can be used to match the item used to shoot the arrow

## Resource Pack Version 38

### GUI Sprites

-   The appearance of a highlighted slot may now be customized by replacing sprites:
    -   `container/slot_highlight_front`: The sprite to render in front of highlighted slots
    -   `container/slot_highlight_back`: The sprite to render behind highlighted slots
-   Likewise, the appearance of a highlighted item within the Bundle can be customized with the following sprites:
    -   `container/bundle/slot_highlight_front`
    -   `container/bundle/slot_highlight_back`

## Fixed bugs in

-   [MC-119369](https://bugs.mojang.com/browse/MC-119369) Boats crash/break and can kill their passengers when falling certain distances
-   [MC-206436](https://bugs.mojang.com/browse/MC-206436) Stonecutter ignores anything over 64 when shift-clicking
-   [MC-260537](https://bugs.mojang.com/browse/MC-260537) Tree growth can replace leaves that have the 'persistent' block state set to true
-   [MC-265399](https://bugs.mojang.com/browse/MC-265399) Players' heads are incorrectly positioned while exiting the swimming/crawling state when other players are on screen
-   [MC-275205](https://bugs.mojang.com/browse/MC-275205) The hand animation is delayed and doesn't play all the time
-   [MC-275300](https://bugs.mojang.com/browse/MC-275300) Mace smash attack damage does not work with mobs, even though particles and sounds happen
-   [MC-275302](https://bugs.mojang.com/browse/MC-275302) The animation speed of end crystals is no longer constant
-   [MC-275352](https://bugs.mojang.com/browse/MC-275352) Spectral arrow texture is not updated properly for Programmer Art
-   [MC-275406](https://bugs.mojang.com/browse/MC-275406) Grammatical error in "options.rotateWithMinecart.tooltip"
-   [MC-275468](https://bugs.mojang.com/browse/MC-275468) Gamerule minecartMaxSpeed can't be set through functions
-   [MC-275504](https://bugs.mojang.com/browse/MC-275504) Custom model data is not applied to open bundle
-   [MC-275538](https://bugs.mojang.com/browse/MC-275538) Breeze still do not attack when super close to them
-   [MC-275751](https://bugs.mojang.com/browse/MC-275751) Head snaps when coming out of crawling
-   [MC-275765](https://bugs.mojang.com/browse/MC-275765) Missing full stop in string gamerule.minecartMaxSpeed.description
-   [MC-275792](https://bugs.mojang.com/browse/MC-275792) Bottom faces of torches and soul torches are not culled against solid blocks
-   [MC-275833](https://bugs.mojang.com/browse/MC-275833) Hand animation plays higher than before
-   [MC-275883](https://bugs.mojang.com/browse/MC-275883) Riding a minecart cluster into a wall freezes the game
-   [MC-275909](https://bugs.mojang.com/browse/MC-275909) Wrong death message is displayed when being killed by a mob's smash attack
-   [MC-275964](https://bugs.mojang.com/browse/MC-275964) Bundles can remain in the open state when held by the mouse cursor via swapping items
-   [MC-275990](https://bugs.mojang.com/browse/MC-275990) Bundles can remain in the open state through the crafting table
-   [MC-276025](https://bugs.mojang.com/browse/MC-276025) Model overrides are not applied to items shown in an open bundle
-   [MC-276111](https://bugs.mojang.com/browse/MC-276111) Salmon spawned from a bucket are the wrong size for one tick
-   [MC-276127](https://bugs.mojang.com/browse/MC-276127) Fractions in bee nest tooltip are not padded with whitespace
-   [MC-276134](https://bugs.mojang.com/browse/MC-276134) Can't scroll in creative inventory while hovered over the bundle
-   [MC-276263](https://bugs.mojang.com/browse/MC-276263) explosion;;_;;power nbt does not work for minecarts with tnt
-   [MC-276293](https://bugs.mojang.com/browse/MC-276293) Mobs no longer get damaged by sweet berry bushes
-   [MC-276295](https://bugs.mojang.com/browse/MC-276295) Zombies always kill villagers
-   [MC-276296](https://bugs.mojang.com/browse/MC-276296) Worn chainmail armor has a missing texture
-   [MC-276297](https://bugs.mojang.com/browse/MC-276297) Worn netherite armor appears as diamond armor
-   [MC-276299](https://bugs.mojang.com/browse/MC-276299) Horse armor doesn't render properly in horse inventory
-   [MC-276301](https://bugs.mojang.com/browse/MC-276301) Item tooltip padding is gone
-   [MC-276304](https://bugs.mojang.com/browse/MC-276304) Carved pumpkins and skulls can be equipped through right-clicking
-   [MC-276310](https://bugs.mojang.com/browse/MC-276310) Players' capes detach from their bodies when wearing non-chestplate items in the chest slot
-   [MC-276311](https://bugs.mojang.com/browse/MC-276311) Players' capes illogically point upward when flying with non-elytra items
-   [MC-276314](https://bugs.mojang.com/browse/MC-276314) Wind charges cause entities to be launched extremely high when directly hit by them
-   [MC-276315](https://bugs.mojang.com/browse/MC-276315) Teleport command runs at the entity's position and ignores location from execution context
-   [MC-276316](https://bugs.mojang.com/browse/MC-276316) Ender pearls no longer teleport entities to the point of impact
-   [MC-276317](https://bugs.mojang.com/browse/MC-276317) Projectiles visually update slowly when their motion is changed
-   [MC-276320](https://bugs.mojang.com/browse/MC-276320) Shields no longer block incoming projectiles
-   [MC-276321](https://bugs.mojang.com/browse/MC-276321) Elytra loses durability when taking damage
-   [MC-276322](https://bugs.mojang.com/browse/MC-276322) Boats don't drop as items when destroyed
-   [MC-276326](https://bugs.mojang.com/browse/MC-276326) "Air" item lost its name
-   [MC-276327](https://bugs.mojang.com/browse/MC-276327) The item;;_;;name component no longer overrides potion names
-   [MC-276335](https://bugs.mojang.com/browse/MC-276335) Cured villagers have the wrong movement speed
-   [MC-276338](https://bugs.mojang.com/browse/MC-276338) Converted mob keeps the same loot table of the first mob
-   [MC-276339](https://bugs.mojang.com/browse/MC-276339) Witches converted from villagers move very fast
-   [MC-276344](https://bugs.mojang.com/browse/MC-276344) Hovered items in bundles do not reflect any tooltip;;_;;style component
-   [MC-276364](https://bugs.mojang.com/browse/MC-276364) Non-armor items with equippable tag cannot be given to wolves
-   [MC-276365](https://bugs.mojang.com/browse/MC-276365) Armor sleeves do not follow arms when switching to and from items and on item use animations
-   [MC-276370](https://bugs.mojang.com/browse/MC-276370) Golden armor pieces have wrong max durabilities
-   [MC-276376](https://bugs.mojang.com/browse/MC-276376) /tp command cannot teleport to the correct facing angles
-   [MC-276378](https://bugs.mojang.com/browse/MC-276378) Converted witches lose their armor yet are still protected by it
-   [MC-276383](https://bugs.mojang.com/browse/MC-276383) Using Pick Block on boats crashes the game
-   [MC-276384](https://bugs.mojang.com/browse/MC-276384) Players' capes detach from their bodies when moving
-   [MC-276394](https://bugs.mojang.com/browse/MC-276394) Some specially rendered elements are no longer affected by fog of any type
-   [MC-276415](https://bugs.mojang.com/browse/MC-276415) Turtle helmet does not give water breathing effect when equipped on any slot other than the head
-   [MC-276429](https://bugs.mojang.com/browse/MC-276429) Projectiles move after hitting a block
-   [MC-276433](https://bugs.mojang.com/browse/MC-276433) set;;_;;enchantments function removes enchantments component from books
-   [MC-276463](https://bugs.mojang.com/browse/MC-276463) Armor on piglins detach from their bodies while bartering
-   [MC-276476](https://bugs.mojang.com/browse/MC-276476) Crash when a boat is destroyed by a hazard
-   [MC-276480](https://bugs.mojang.com/browse/MC-276480) Projectile no longer moves correctly when it is deflected
-   [MC-276484](https://bugs.mojang.com/browse/MC-276484) Fireballs and wither skulls do too much damage
-   [MC-276495](https://bugs.mojang.com/browse/MC-276495) Creative player can go through nether portal without being teleported when throwing riptide trident
-   [MC-276501](https://bugs.mojang.com/browse/MC-276501) Returning tridents get stuck on blocks and spam sounds
-   [MC-276527](https://bugs.mojang.com/browse/MC-276527) Duplicate UUID error causes player to teleport to origin when riding on a pig after it is converted by lightning
-   [MC-276533](https://bugs.mojang.com/browse/MC-276533) Game crashes when three or more skeletons are about to release their arrows

---

Hi everyone! In the most exciting Minecraft-related news of the day, we have a new movi- I mean snapshot coming your way! This week we are adding support for custom equipment with Data Packs and Resource Packs. We have also tweaked the Bundle so that you can empty a group of items when it's used in the hotbar. And as usual, we have included a bunch of bug fixes!

Happy mining!

## Known Issues

-   Ender Pearls will not teleport you to the right location

## Experimental Features

### Bundles

-   When a Bundle is used in the hotbar, one group of items is emptied at a time instead of everything being emptied at once

## Changes

-   Squid Spawn Eggs now only spawn adult Squids
    -   There is a 5% chance of Squids spawned in groups in the wild to be a baby
-   When a mob converts from one type to another (ex: Piglin to Zombified Piglin), the health of the converted mob is set to the same percentage of max health as the original mob had before conversion

## Technical Changes

-   The Data Pack version is now 52
-   Resource Pack version is now 37

## Data Pack Version 52

### Tags

#### Block Tags

-   `bats_spawnable_on`: Blocks that bats can spawn on

#### Item Tags

-   Added new tags to control which items can be used to repair various armor sets:
    -   `repairs_leather_armor`
    -   `repairs_iron_armor`
    -   `repairs_chain_armor`
    -   `repairs_gold_armor`
    -   `repairs_diamond_armor`
    -   `repairs_netherite_armor`
    -   `repairs_turtle_helmet`
    -   `repairs_wolf_armor`
-   `piglin_safe_armor`: Items that, when worn by a player, will cause Piglins to not get angry

### Changed Item Components

#### `minecraft:item_name`

This component is now always present on every item

### New Item Components

#### `minecraft:item_model`

-   Controls item model
-   Present on every item
-   Format: namespaced id
    -   `namespace:id` will reference model `/assets/<namespace>/models/item/<id>`

#### `minecraft:equippable`

-   If present, this item can be equipped by players in the selected slot
-   When right-clicking with an item with this component, it will be swapped into the appropriate slot
-   Format: object with fields
    -   `slot`: one of `head`, `chest`, `legs`, `feet`, `body`, `mainhand`, or `offhand`
    -   `equip_sound` (optional): Sound event to play when the item is equipped
        -   If not specified, the default armor equip sound will be played
    -   `model` (optional): namespaced ID of the equipment model to use when equipped
        -   These model definitions are loaded from Resource Packs
        -   If not specified, will fall back to rendering as the item itself when in the head slot (or no rendering if not applicable)
    -   `allowed_entities` (optional): Entity ID, Entity Tag, or list of Entity IDs to limit which entities can equip this item
        -   If not specified, any entity (that can wear this kind of equipment) is allowed to equip this item
    -   `dispensable`: boolean (default: `true`), whether the item can be equipped by using a Dispenser
        -   If the item type has special dispenser behavior, this will have no effect
    -   e.g. `equippable={slot:'chest',equip_sound:'item.armor.equip_chain'}`

#### `minecraft:glider`

-   If present, this item will allow players to glide (as with Elytra) when equipped
-   Format: empty object
    -   e.g. `glider={}`

#### `minecraft:tooltip_style`

-   If present, this item can use custom sprites for its tooltip background and frame
-   Format: namespaced ID for a tooltip style
    -   A tooltip style of `namespace:path` will use sprites with IDs:
        -   `<namespace>:tooltip/<path>_background` and `<namespace>:tooltip/<path>_frame`
    -   e.g. `tooltip_style='minecraft:special_sword'`

### Predicates

-   Added a new field in the Player sub-predicate, `input`, that can be used to detect which movement keys the player is pressing
-   If specified the predicate matches with the corresponding keybind that the player is pressing; it supports detecting the following input:
    -   `forward` : boolean (optional)
    -   `backward` : boolean (optional)
    -   `left` : boolean (optional)
    -   `right` : boolean (optional)
    -   `jump` : boolean (optional)
    -   `sneak` : boolean (optional)
    -   `sprint` : boolean (optional)

## Resource Pack Version 37

-   Introduced equipment models
-   Textures for entity equipment have been moved and renamed
-   The tooltip background and frame may now be customized by replacing sprites:
    -   `tooltip/background`: The background of the tooltip
    -   `tooltip/frame`: The frame appearing around the tooltip
    -   Items with a custom `tooltip_style` component will use sprites with IDs:
        -   `<namespace>:tooltip/<path>_background` and `<namespace>:tooltip/<path>_frame`
-   The `nine_slice` GUI sprite scaling mode has a new optional boolean property: `stretch_inner`
    -   If `true`, the inner parts of the texture (i.e. not the corners) will be stretched instead of tiled
    -   If not specified, defaults to `false` as before

### Item Models

-   All item models can now use the `broken` property in model overrides that was previously limited to just Elytra
    -   This will have a value of 1 if the item has 1 durability left, or 0 otherwise

### Custom Equipment Models

The appearance of equipment when equipped by players or certain mobs can now be customized by defining 'equipment models' in the Resource Pack.

-   Equipment model definitions are loaded from `assets/<namespace>/models/equipment/<path>.json`
    -   These can then be referenced by the `equippable` component with a model id of `namespace:path`
-   The model definition is an object with fields: `wolf_body`, `horse_body`, `llama_body`, `humanoid`, `humanoid_leggings`, `wings`
    -   All fields are optional, and can be used to specify a list of layers for the given model layer type
    -   Each field contains list of layer objects:
        -   `texture`: namespaced texture location for this layer
            -   `namespace:path` will resolve to `assets/<namespace>/textures/entity/equipment/<layer_type>/<path>.png`
        -   `dyeable`: object with fields (optional), specifying how this layer behaves when dyed (in the `dyeable` item tag, and has `dyed_color` component)
            -   `color_when_undyed`: rgb color int (optional)
            -   If specified, this layer will be tinted by the color contained in the `dyed_color` component
                -   If the item is not dyeable or not dyed, it will be tinted based on the color specified by `color_when_undyed`
                -   If `color_when_undyed` is not specified and the item is not dyed, the layer will be hidden
        -   `use_player_texture`: boolean (default: `false`), true if this layer texture should be overridden by a texture given by the player
            -   Only used for `wings` layers, which will override with the player's custom Elytra texture

A model definition specifying both player and horse armor layers might look like:

    {
      "layers": {
        "horse_body": [
          { "texture": "minecraft:iron" }
        ],
        "humanoid": [
          { "texture": "minecraft:iron" }
        ],
        "humanoid_leggings": [
          { "texture": "minecraft:iron" }
        ]
      }
    }
    

### Trims

-   All equippable items with an equipment model defined support rendering trims, based on the `trim` component
-   Trim textures will be loaded from the appropriate folder in the `textures/trims/entity` directory
    -   For example, armor with `wolf_body` layers will fetch trims from `textures/trims/entity/wolf_body`

### Moved Textures

-   All equipment-related textures have been moved to subfolders of the `textures/entity/equipment` directory
    -   Player armor textures have been moved to `textures/entity/equipment/humanoid` and `textures/entity/equipment/humanoid_leggings`
        -   `<material>_layer_1` textures have been renamed to `<material>`, and moved into the `humanoid` subdirectory
        -   `<material>_layer_2` textures have been renamed to `<material>`, and moved into the `humanoid_leggings` subdirectory
        -   `leather_layer_1_overlay` and `leather_layer_2_overlay` textures have been renamed to `leather_overlay` in their respective subdirectories
    -   `wolf_armor` and `wolf_armor_overlay` textures have moved to `textures/entity/equipment/wolf_body/` and have been renamed to `armadillo_scute` and `armadillo_scute_overlay` respectively
    -   `turtle_layer_1` has been renamed to `turtle_scute`
    -   Llama decor textures have been moved to `textures/entity/equipment/llama_body`
    -   Horse armor textures have been moved to `textures/entity/equipment/horse_body`
    -   The Elytra texture has been moved to `textures/entity/equipment/wings/elytra`
-   Armor trim textures have also been moved to match the folder structure of the regular `equipment` textures
    -   Textures in `textures/trims/models/armor` have been divided between `textures/trims/entity/humanoid` and `textures/trims/entity/humanoid_leggings`
    -   For leggings textures, the `_leggings` suffix is dropped

## Fixed bugs in 24w36a

-   [MC-16829](https://bugs.mojang.com/browse/MC-16829) The horse armor model does not show the enchantment glint effect
-   [MC-38022](https://bugs.mojang.com/browse/MC-38022) Order of rendering translucent block faces fails to update with camera position
-   [MC-88967](https://bugs.mojang.com/browse/MC-88967) Most NBT tags are not kept when a mob converts to another mob
-   [MC-92875](https://bugs.mojang.com/browse/MC-92875) Collisionless blocks ignore entities with high velocity
-   [MC-135898](https://bugs.mojang.com/browse/MC-135898) Teams are not retained when a mob converts to another mob
-   [MC-196556](https://bugs.mojang.com/browse/MC-196556) When projectiles (such as arrows and tridents) move too fast, they can't be teleported by portals and end gateways
-   [MC-196964](https://bugs.mojang.com/browse/MC-196964) Fall damage is reset when an entity converts to another entity
-   [MC-230317](https://bugs.mojang.com/browse/MC-230317) Lead disappears when mooshroom cow is sheared
-   [MC-250924](https://bugs.mojang.com/browse/MC-250924) Goat horns are missing sounds
-   [MC-259936](https://bugs.mojang.com/browse/MC-259936) Equipping armor in hand via right-click equips entire stack
-   [MC-261666](https://bugs.mojang.com/browse/MC-261666) Armor given to Villagers is lost when they convert to Zombie Villagers
-   [MC-270842](https://bugs.mojang.com/browse/MC-270842) Scores are not kept when a mob converts to another mob
-   [MC-271826](https://bugs.mojang.com/browse/MC-271826) Armor default attribute modifier component can't be removed
-   [MC-275011](https://bugs.mojang.com/browse/MC-275011) Instant mine does not work when standing inside of cobwebs
-   [MC-275228](https://bugs.mojang.com/browse/MC-275228) You can duplicate items in your creative hotbar
-   [MC-275239](https://bugs.mojang.com/browse/MC-275239) Item duplication while a screen is opened (Creative Mode)
-   [MC-275298](https://bugs.mojang.com/browse/MC-275298) Blocks with special collision behavior have a larger detection range than previously
-   [MC-275299](https://bugs.mojang.com/browse/MC-275299) Crafting using Ctrl + Drop key crafts the incorrect amount of items
-   [MC-275344](https://bugs.mojang.com/browse/MC-275344) Sweet Berry Bushes deal damage inconsistently
-   [MC-275345](https://bugs.mojang.com/browse/MC-275345) Inventory bug that causes items to be constantly shuffled
-   [MC-275416](https://bugs.mojang.com/browse/MC-275416) Baby squid or baby glow squid produces ink particles that are too far away from itself
-   [MC-275418](https://bugs.mojang.com/browse/MC-275418) Feeding baby dolphins won't speed up their growth
-   [MC-275437](https://bugs.mojang.com/browse/MC-275437) Fast moving entities freeze the server which causes watchdog crash
-   [MC-275445](https://bugs.mojang.com/browse/MC-275445) Specifying the size of a target in post effect shaders fails
-   [MC-275450](https://bugs.mojang.com/browse/MC-275450) Player Motion data no longer updates while riding another entity
-   [MC-275455](https://bugs.mojang.com/browse/MC-275455) Player motion is no longer retained on relative teleportation
-   [MC-275462](https://bugs.mojang.com/browse/MC-275462) Bats can spawn in unusual places, such as in woodland mansions and beneath trees
-   [MC-275497](https://bugs.mojang.com/browse/MC-275497) The repairable data component does not exist in armor items by default
-   [MC-275537](https://bugs.mojang.com/browse/MC-275537) Sliding down honey blocks is slower than in previous versions
-   [MC-275622](https://bugs.mojang.com/browse/MC-275622) Minecarts with TNT are more volatile than in previous releases
-   [MC-275624](https://bugs.mojang.com/browse/MC-275624) Redstone wire with custom model unexpectedly appears green
-   [MC-275638](https://bugs.mojang.com/browse/MC-275638) It is still possible to go through portals without being teleported when going quickly enough by throwing riptide tridents
-   [MC-275642](https://bugs.mojang.com/browse/MC-275642) Baby dolphins do not spawn naturally
-   [MC-275655](https://bugs.mojang.com/browse/MC-275655) Entity rotation does not visually update when using the teleport command until the world is reloaded
-   [MC-275745](https://bugs.mojang.com/browse/MC-275745) A scoreboard objective with display mode below;;_;;name renders right behind the player's name
-   [MC-275767](https://bugs.mojang.com/browse/MC-275767) Camera is shaky when riding an entity that is being constantly teleported
-   [MC-275770](https://bugs.mojang.com/browse/MC-275770) Guardian beam attacks stay yellow and do not shift colors anymore
-   [MC-276027](https://bugs.mojang.com/browse/MC-276027) Chestplates and Boots on Armor Stands render the helmet overlay texture
-   [MC-276030](https://bugs.mojang.com/browse/MC-276030) The blue highlighted text background for signs is gone
-   [MC-276064](https://bugs.mojang.com/browse/MC-276064) Tall grass generated from bone mealing a grass block will delete the 2nd block above it
-   [MC-276122](https://bugs.mojang.com/browse/MC-276122) Soul sand and magma block bubble columns don't move the player vertically in creative mode when not flying
-   [MC-276132](https://bugs.mojang.com/browse/MC-276132) Translucency sorting seems to be slightly broken
-   [MC-276179](https://bugs.mojang.com/browse/MC-276179) Zombie villagers don't raise their arms to attack again
-   [MC-276204](https://bugs.mojang.com/browse/MC-276204) Dolphins and axolotls keep trying to swim into the seabed

---

