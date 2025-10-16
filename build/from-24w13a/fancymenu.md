# Minecraft Snapshot 24w13a

This fine Wednesday brings 24w13a, a snapshot containing changes to the Mace, Trial Chambers, and introduces the new Ominous Trials!

You might just be inclined to try out the ominous new features of this snapshot. ...or else? Did I do that right?

Happy mining!

Note: some of the features below will only work in freshly generated Trial Chambers.

## Experimental Features

-   Changes to the Mace
-   Tweaks to the Breeze and Wind Charges
-   Redesigned Bad Omen
-   Added Ominous Bottle
-   Added 6 new mob effects
-   Added Ominous Trial Spawner
-   Added Ominous Vault
-   Added Ominous Trial Key

### Mace

-   Added a new explosive particle effect when executing a smash attack with the Mace to really show the player's power
-   Increased the power and range of the knockback effect from a smash attack
-   Introduced an even stronger knockback when falling for more than 5 blocks before attacking
-   When successfully striking a target, all vertical momentum will be reset in addition to negating any accumulated fall distance
-   The baseline additional damage dealt by the Mace smash attack has been slightly reduced to 3 (1.5 hearts) per fallen block
-   These existing enchantments can now be applied to the Mace:
    -   Mending
    -   Unbreaking
    -   Smite
    -   Bane of Arthropods
    -   Fire Aspect
    -   Curse of Vanishing
-   Three new enchantments have been introduced that are unique to the Mace:
    -   Density:
        -   Common Enchantment, accessible in the Enchanting Table and on Enchanted Books in loot
        -   Has 5 levels
        -   Maces enchanted with Density do more damage per fallen block per Density level
            -   Damage dealt per fallen block is increased by 1 per level of Density
    -   Breach:
        -   Rare Enchantment, accessible in the Enchanting Table and on Enchanted Books in loot
        -   Has 4 levels
        -   Maces enchanted with Breach reduce the effectiveness of armor on the target
            -   The effectiveness of the armor is reduced by 15% per Breach level
    -   Wind Burst:
        -   Unique enchantment which can only be found in Ominous Vaults
        -   Has 3 levels
        -   Maces enchanted with Wind Burst will emit a Wind Burst upon hitting an enemy, launching the attacker upward and enabling the linking of smash attacks one after the other
        -   Each level will bounce the attacker higher up in the air

### Breeze & Wind Charges

-   The Breeze now avoids jumping into dangerous blocks or air
-   Wind Charges no longer collide with End Crystals

### Ominous Events

-   Bad Omen has been expanded to give access to an optional experience in Trial Chambers
-   These optional experiences accessed through Bad Omen are now known as Ominous Events
    -   They are more challenging than usual, and are designed to shake up the experience in unique ways
    -   Illager Raids are an example of an existing Ominous Event
-   Bad Omen is getting some changes with this redesign:
    -   It has a new, shadowy icon and a sound for being applied to the player
    -   It no longer triggers a Raid directly when entering a village
        -   Instead, it will transform into a Raid Omen variant with a duration of 30 seconds
        -   Once the Raid Omen expires, a Raid will start at the location the player gained the Raid Omen
        -   Like any other effect, players can drink a Bucket of Milk to clear the Raid Omen to prevent the Raid from starting
    -   It is no longer given to players that defeat a Raid Captain outside a Raid
        -   Instead, players can gain access to Bad Omen by consuming a new Ominous Bottle

#### Ominous Bottle

-   An item which can be consumed by players to receive the Bad Omen effect for 1 hour and 40 minutes
    -   Comes in 5 variations, one for each Bad Omen level
    -   The bottle breaks when consumed
    -   Can be stacked to 64
-   Can be found uncommonly in any Vaults that are unlocked with Trial Keys, and is dropped by Raid Captains when defeated outside a Raid

### Ominous Trials

-   A new Ominous Event that can be accessed by exploring a Trial Chamber with Bad Omen
-   This event will have players facing more powerful Trial Spawners if they dare!

#### Trial Omen

-   A variant that Bad Omen can transform into
    -   This occurs when the player is within detection range of a Trial Spawner that is not Ominous
    -   The Trial Omen has a duration of 15 minutes multiplied by the transformed Bad Omen's level
-   Players that have Trial Omen are surrounded by ominous particles

#### Ominous Trial Spawner

-   A more powerful active phase of the Trial Spawner with unique challenges and rewards
    -   Provides a more challenging experience that advanced players can opt into for better rewards
-   If a Trial Spawner detects a player that has the Trial Omen effect, the spawner will become Ominous if:
    -   It is not in cooldown
    -   Or, it is in cooldown but was not Ominous during its last activation
        -   Making it Ominous this way will bypass the cooldown
-   While active, it will:
    -   Glow blue instead of orange
    -   Emit soul flames instead of normal flames
    -   Very commonly spawns mobs with equipment if they can wear it
        -   The equipment these mobs wear have armor trims applied from the Trial Chambers
        -   Known issue: these mobs can currently drop their equipment on death, but they will not in the future
    -   Periodically spawn potions and projectiles on top of unsuspecting players and mobs
        -   Based on their location, spawners in an area will select a random set of projectiles to spawn
        -   These projectiles will always include a single type of Lingering Potion from a set of possible effects
-   Becoming Ominous will despawn any existing mobs it spawned and reset its challenge
    -   It will stay Ominous until it has been defeated and its cooldown has finished
-   When defeated, it will eject a different set of loot to normal Trial Spawners

#### Ominous Trial Key

-   A new variant of the Trial Key which can only be obtained by defeating an Ominous Trial Spawner
-   They can be used to unlock Ominous Vaults

#### Ominous Vault

-   A variant of Vaults that have a different texture and emit soul flames instead of normal flames
-   These can be found throughout the Trial Chambers in harder to find places and require an Ominous Trial Key to unlock
    -   These Vaults hold a more valuable set of rewards than the standard Vaults unlocked by Trial Keys

### Mob Effects

-   The following effects have been added:
    -   Wind Charged
        -   Affected entities will emit a wind burst upon death
        -   Brewed with an Awkward Potion and a Breeze Rod
    -   Weaving
        -   Affected entities will spread Cobweb blocks upon death
        -   Non-player entities with this effect can walk through Cobweb at normal speeds
        -   Brewed with an Awkward Potion and a Cobweb block
    -   Oozing
        -   Affected entities will spawn two Slimes upon death
        -   Brewed with an Awkward Potion and a Slime Block
    -   Infested
        -   Affected entities have a 5% chance to spawn 1-2 Silverfish when hurt
        -   Brewed with an Awkward Potion and a Stone block
-   These effects can be encountered while taking on an Ominous Trial Spawner
-   Some mobs are immune to these effects
    -   Slimes are immune to Oozing
    -   Silverfish are immune to Infested

### Trial Chambers Loot

-   The loot found within Trial Chamber Vaults has been adjusted
-   Standard Vaults will give slightly less items of high quality, but also include the following changes:
    -   Ominous Bottle I - II can be found
    -   Flow Banner Pattern, Flow Armor Trim Smithing Template, and Heavy Core can no longer be obtained
        -   Guster Banner Pattern and Bolt Armor Trim Smithing Template remain exclusive to standard Vaults
        -   In Heavy Core's place, standard Vaults will instead have a very rare chance of providing a Trident
-   Ominous Vaults can provide some particularly valuable items, to mention a few:
    -   Ominous Bottle III - V
    -   Enchanted Golden Apple
    -   Flow Banner Pattern and Flow Armor Trim Smithing Template
    -   Wind Burst, Breach and Density Enchantments for the Mace
    -   Heavy Core
-   The loot ejected from Trial Spawners have been adjusted
    -   It now has a focus on providing higher quality food more often to make replenishing between fights more safe
-   Ominous Trial Keys have a 30% chance of ejecting from a defeated Ominous Trial Spawner, replacing the usual 50% chance to eject Trial Keys

### Trial Spawner

-   All spawners now increase the amount of mobs present at once by 0.5 for each additional player, down from 2
-   Baby Zombie spawners now only have 2 mobs present at once for its baseline, down from 3 mobs
-   Can now only activate when a player is in line of sight

### Trial Chambers

-   Remade `chamber_5` with variations, and renamed it to `eruption`
-   Reduced amount of Trial Spawners in corridors
-   Updated layout and placements of Vaults
-   Placed Ominous Vaults in chambers, intersections, at the ends of corridors
-   Corridors will no longer generate endlessly
-   Added an atrium to the corridors
-   Made various layout changes in intersections and corridors

Known issues:

-   Corner quadrants in slanted may still fail to generate correctly

## Changes in 24w13a

-   Added unique sounds for Cobwebs

## Technical Changes in 24w13a

-   The Data Pack version is now 37
-   The Resource Pack version is now 31
-   Client chat state is now preserved by default when entering configuration phase
-   Changes to chat network protocol

### Chat

-   Client chat state (on-screen messages and chat input history) is now preserved by client when entering and exiting configuration phase
-   Message signature chain handling remains unchanged - going into configuration phase starts new session
-   If client has message delay configured, pending messages will be delivered immediately before leaving world
-   Server can clear chat state by sending `reset_chat` packet in configuration phase

### Network Protocol

-   The `minecraft:chat_command_signed` packet has been split from `minecraft:chat_command`
    -   Commands that do not accept any signed arguments will use the unsigned packet, and will not pass any 'last seen' chat updates

## Data Pack Version 37

-   Added new loot table type `minecraft:equipment`
    -   Has required parameters of `this_entity` and `origin`
        -   `this_entity` : the mob that is about to be given equipment
        -   `origin` : the position of the mob
-   Added optional `equipment_loot_table` to the spawn data present in the `SpawnPotentials` of Monster Spawners and `spawn_potentials` of Trial Spawner configs
    -   If present, rolled items from the specified loot table will be equipped to the mob that spawns
-   Modified `copy_components` and `set_name` loot function arguments
-   Added new `set_ominous_bottle_amplifier` loot function
-   Added new item components
-   Non-default components on item stacks are now stored when block entity is placed
-   Int and float providers used in worldgen definitions are no longer wrapped in an extra `value` field next to `type`
    -   For example, `{"type":"minecraft:uniform","value":{"min_inclusive":0.0,"max_inclusive":1.0}}` becomes `{"type":"minecraft:uniform","min_inclusive":0.0,"max_inclusive":1.0}`
-   New Damage Type Tag: `minecraft:is_player_attack` for attacks performed by the player
-   New Entity Type Tags:
    -   `immune_to_oozing` For entities that cannot receive the Oozing mob effect
    -   `immune_to_infested` For entities that cannot receive the Infested mob effect
-   Added `raider` sub entity predicate

### Block entities

Non-default components on item stacks containing block items are now stored on block entities when placed

-   Component removals from defaults are currently not preserved
-   Placing and breaking non-block entity blocks remains unchanged - nothing is preserved
-   Does not automatically cause preserved components to be restored on drops - this requires addition of `copy_components` function to loot table
-   Components are stored in field called `components`
    -   Some components (like `custom_name`) are still handled by legacy serialization, which means they might not be present in there
    -   Contains map of component id to component value

### New Item Stack Components

#### `minecraft:item_name`

-   When present, replaces default item name with contained chat component
-   Differences from `custom_name`:
    -   `item_name` can't be changed or removed in anvil
    -   `item_name` is not styled with italics when displayed to player
    -   `item_name` does not show labels where applicable (for example: banner markers, names in item frames)

#### `minecraft:ominous_bottle_amplifier`

-   Controls the amplifier amount for an Ominous Bottle's bad omen effect
-   Format: integer between 0 and 4
    -   e.g. `ominous_bottle_amplifier=3`

### Loot Functions

#### `copy_components`

Removed field `components` and replaced it with:

-   `include` - optional list of data components to be copied from source
    -   if omitted, all components present are included
-   `exclude` - optional list of data components to be excluded from copying
    -   if omitted, defaults to empty
-   Only components that are included (explicitly or implicitly) but not excluded will be copied

#### `set_name`

Added optional field `target` to specify which name should be set

-   Values:
    -   `custom_name` - sets `custom_name` component (default)
    -   `item_name` - sets `item_name` component

#### Added `set_ominous_bottle_amplifier`

Sets the `ominous_bottle_amplifier` component on the target item according to a number provider.

-   `conditions`: list of conditions to filter this function
-   `amplifier`: a number provider used to generate the `ominous_bottle_amplifier` component

#### Entity sub-predicates

##### `raider`

New `raider` sub-predicate has been added to match raiders Fields:

-   `has_raid` - Match whether the raider is in an active raid
-   `is_captain` - Match whether the raider is a captain

## Resource Pack Version 31

-   Added the following particle types:
    -   `infested`
    -   `item_cobweb`
    -   `small_gust`
    -   `raid_omen`
    -   `trial_omen`
    -   `trial_spawner_detection_ominous`
    -   `ominous_spawning`
-   Added the following sound events:
    -   `block.cobweb.break`
    -   `block.cobweb.step`
    -   `block.cobweb.place`
    -   `block.cobweb.hit`
    -   `block.cobweb.fall`
    -   `block.trial_spawner.about_to_spawn_item`
    -   `block.trial_spawner.spawn_item`
    -   `block.trial_spawner.spawn_item_begin`
    -   `block.trial_spawner.charge_activate`
    -   `block.trial_spawner.ambient_charged`
    -   `item.ominous_bottle.dispose`
    -   `event.mob_effect.bad_omen`
    -   `event.mob_effect.trial_omen`
    -   `event.mob_effect.raid_omen`
-   Added textures for the following blocks and items:
    -   Ominous Vault
    -   Ominous Trial Spawner
    -   Ominous Bottle
-   Updated textures for normal Vault block
-   Added the following mob effect icon textures:
    -   `infested`
    -   `oozing`
    -   `weaving`
    -   `wind_charged`
    -   `raid_omen`
    -   `trial_omen`
    -   `bad_omen_121`
-   Added new models for Ominous state of Vault block

## Fixed bugs in 24w13a

-   [MC-123804](https://bugs.mojang.com/browse/MC-123804) Explorer map and Ominous banner names appear in item frames, draw in italics, and can be removed with an anvil
-   [MC-148057](https://bugs.mojang.com/browse/MC-148057) Ominous banners generated in outposts show the pattern list
-   [MC-166361](https://bugs.mojang.com/browse/MC-166361) GUI scale does not visually update when the option is changed using the keyboard and without the mouse
-   [MC-178410](https://bugs.mojang.com/browse/MC-178410) Banners don't support the HideFlags tag when placed down as blocks
-   [MC-268578](https://bugs.mojang.com/browse/MC-268578) Bogged mob sits wrong in boats
-   [MC-268627](https://bugs.mojang.com/browse/MC-268627) Slime spawns are incorrect
-   [MC-268716](https://bugs.mojang.com/browse/MC-268716) Magma Cubes spawn even if there's only 2 blocks in height
-   [MC-268882](https://bugs.mojang.com/browse/MC-268882) Same Enchantments in an item components crashes the game
-   [MC-268893](https://bugs.mojang.com/browse/MC-268893) Comparators require a block update to function properly, and droppers/observers receive false state changes
-   [MC-269015](https://bugs.mojang.com/browse/MC-269015) Wind charges can destroy end crystals
-   [MC-269143](https://bugs.mojang.com/browse/MC-269143) Attribute modifiers cannot exclusively target the "body" slot
-   [MC-269342](https://bugs.mojang.com/browse/MC-269342) The experimental features details menu is rendered incorrectly after resizing the game window
-   [MC-269371](https://bugs.mojang.com/browse/MC-269371) If the 'GUI Scale' option is on 'Auto', and if you try to scale it down using CTRL + mouse wheel, it shows as '-1'
-   [MC-269387](https://bugs.mojang.com/browse/MC-269387) Mace sounds use the neutral sound category
-   [MC-269388](https://bugs.mojang.com/browse/MC-269388) Mace falling damage increase is applied while using an elytra
-   [MC-269427](https://bugs.mojang.com/browse/MC-269427) Lingering potion particles are tinted black instead of the potion's color
-   [MC-269628](https://bugs.mojang.com/browse/MC-269628) Heavy cores delete water when placed into it
-   [MC-269635](https://bugs.mojang.com/browse/MC-269635) The game crashes when attempting to eat lily pads or frogspawn
-   [MC-269643](https://bugs.mojang.com/browse/MC-269643) Waterlogged heavy core does not update water flow correctly
-   [MC-269649](https://bugs.mojang.com/browse/MC-269649) Who Needs Rockets advancement is granted after launching yourself up 8 blocks instead of 7 blocks
-   [MC-269656](https://bugs.mojang.com/browse/MC-269656) Feeding parrots poison while holding mace grants Over-Overkill challenge
-   [MC-269659](https://bugs.mojang.com/browse/MC-269659) Parrots can now be fed carrots to kill them instead of cookies
-   [MC-269670](https://bugs.mojang.com/browse/MC-269670) Game crash when giving bundle with hide tooltip

---

# Minecraft Snapshot 24w12a

Here's snapshot 24w12a with new advancements and several tweaks.

Happy Mining!

## Experimental Features

### Trial Chambers

Trial Chambers now generate slightly more rarely and a bit more spaced out from each other

### Trial Chambers Explorer Map

-   Struggle no more to locate a Trial Chamber - level up your nearest Cartographer to Journeyman for the opportunity to trade for an Explorer Map pointing to a nearby Trial Chamber

### Heavy Core

-   Can now be waterlogged
-   Survives lava flows
-   Most efficient tool is now the pickaxe
-   Adjusted destroy time and explosion resistance

### Advancements

-   Added the following advancements:
    -   `Minecraft: Trial(s) Edition` - Step foot in a Trial Chamber
    -   `Under Lock & Key` - Unlock a Vault using a Trial Key
    -   `[Challenge - 40 exp] Blowback` - Kill a Breeze with a deflected Wind Charge
    -   `Who Needs Rockets?` - Use a Wind Charge to launch yourself upward at least 8 blocks
    -   `Crafters Crafting Crafters` - Be near a Crafter when it crafts a Crafter
    -   `Lighten Up` - Scrape a Copper Bulb with an Axe to make it brighter
    -   `Over-Overkill` - Deal 50 hearts of damage in a single hit using the Mace

## Technical Changes

-   The Data Pack version is now 36
-   The Resource Pack version is now 30
-   -   Particle `entity_effect` takes color argument when spawned from command
    -   `/particle entity_effect <r> <g> <b> <a>`
    -   4 float values ranging from 0.0 to 1.0 representing RGBA

## Data Pack Version 36

-   Added a `crafter_recipe_crafted` trigger which is triggered when a Crafter ejects a successfully crafted item into the world.
    -   `<player>` an entity predicate matching the player who is nearby
    -   `<recipe_id>` is the ID of the recipe being crafted
    -   `<ingredients>` is a list of item predicates matching the ingredients that form the recipe being crafted
-   Added a `fall_after_explosion` trigger which is triggered when a player begins falling after being knocked upwards by an explosion or wind burst
    -   `<player>` an entity predicate matching the player who is falling
    -   `<start_position>` a location predicate matching the position the player was at when they were hit by the explosion or burst
    -   `<distance>` a distance predicate matching how far the player must be from `start_position` to cause the trigger to activate
    -   `<cause>` an entity predicate matching the entity which caused the explosion or burst to happen
-   Added `storage` loot number provider to access values from command storage
-   New Entity Type Tag: `sensitive_to_smite` - for Entity Types that take extra damage from the Smite Enchantment
-   Expanded item predicate syntax used in `execute if|unless items` and `clear` commands
-   Removed redundant custom data section (`{...}`) from item arguments (it's fully replaced by `[custom_data={...}]`)
    -   To make this transition easier, `custom_data` item sub-predicate has been changed to allow unquoted SNBT
-   Added `wolf` entity sub-predicate for matching wolf variants
-   `wolf`, `cat`, `frog` and `painting` entity sub-predicates now accept tags and plain lists instead of just single elements
-   Changed texture asset paths in `wolf_variant` to better match other formats
-   Command arguments that previously accepted namespaced ids of loot tables, modifiers and predicates can now also accept inline definitions
-   Added new item stack components
-   Added new loot functions

### `wolf_variant` definitions

-   Field `texture` has been renamed to `wild_texture`
-   `wild_texture`, `tame_texture` and `angry_texture` no longer require values to be prefixed with `textures/` and suffixed with `.png`

### Commands

#### Inline loot values

Arguments in following commands that previously accepted namespaced ids of loot tables, modifiers and predicates can now also accept inline definitions:

-   `loot`
-   `item`
-   `execute if predicate` Values have same structure as matching JSON files, though they are encoded as SNBT. Example: `execute if predicate {condition:weather_check, raining:true}`

### Loot tables

#### `storage` number provider

-   This number provider is able to access numeric values from command storage directly
-   If selected storage does not exist or tag selected by path is not numeric or does not exist, provider returns 0
-   Fields:
    -   `storage` - namespaced id of command storage
    -   `path` - NBT path to field

#### `set_lore` function

-   The `replace` field has been removed
-   Now has `mode` like `set_fireworks` and `set_written_book_pages`

#### `set_written_book_pages` function

-   `pages` is now a JSON Object rather than a string containing JSON

#### `toggle_tooltips` loot function

-   This function can be used to modify item component tooltip visiblity
-   It works by setting fields like `show_in_tooltip` without changing other values
-   Format:
    -   `toggles` - a map of supported item component type to boolean value
-   Supported components: `trim`, `dyed_color`, `enchantments`, `stored_enchantments`, `unbreakable`, `can_break`, `can_place_on`, `attribute_modifiers`
-   Example:
    -   `{function:"toggle_tooltips","toggles":{"enchantments":false}}` will hide enchantments tooltip

#### Functions

-   Nested lists are no longer supported in function lists

### Item predicate argument

The item predicate syntax (used in `execute if|unless items` and `clear` commands) has been significantly expanded.

-   The general syntax is: `<type> [comma-separated list of <test>]`
-   `<type>` can be one of:
    -   item id
    -   item tag id prefixed with `#`
    -   `*` to match any item
-   `<test>` can have one of 3 forms:
    -   `<component_id>=<value>` - match exact value of component (same as in previous format)
        -   `<value>` is a representation of component value in SNBT format (same as in `item give` argument)
    -   `<component_id>` - check if component exists
    -   `<predicate_id>~<value>` - check item sub-predicate
        -   `<value>` is a representation of item sub-predicate in SNBT format (but otherwise same as one used for advancement and loot table JSON files)
        -   Example: `*[damage~{durability:{min:3}}]` will match any stack with at least 3 uses left
-   The special name `minecraft:count` can be used for matching the stack size
    -   `count=<positive int>` will pass only when the stack size equals the given value
    -   `count~<int range>` will pass when the stack size is in the specified range
        -   Example: `*[count~{max:2}]` will match any stack with count <= 2
    -   `count` will always pass
-   Any `<test>` entry can be negated by prefixing with `!`
    -   Example: `*[!count=1]` will match any stack that has count other than 1
-   `<test>` elements can be also joined with `|` to check multiple alternatives
    -   Example: `*[!damage|damage=0]` will look for items without damage component or with `0` damage
-   The syntax for custom data partial matching (`{}`) has been removed in favor of using `custom_data` predicates
    -   So `stick{a:2}` becomes `stick[custom_data~{a:2}]`

### Predicates

#### Item sub-predicates

-   Predicate `minecraft:custom_data` now accepts both SNBT data written as a string (existing format) and unflattened tags
    -   That means that `*[custom_data~{a:1}]` and `*[custom_data~"{a:1}"]` are equivalent
    -   Flattened string format has been kept since NBT type information can't be expressed in JSON

#### Entity sub-predicates

##### `wolf`

New `wolf` sub-predicate has been added to match wolf variants Fields:

-   `variant` - wolf variant to match (single entry, list of entries or tag)

##### `cat`, `frog`, `painting`

-   Field `variant` now accepts single entries, list of entries or tags

### New Item Stack Components

#### `minecraft:food`

-   When present, this item will behave as if a food (can be eaten)
-   Format: object with fields
    -   `nutrition`: non-negative integer, number of food points to restore when eaten
    -   `saturation_modifier`: float, amount of saturation to restore when eaten
    -   `is_meat`: boolean (default: `false`)
        -   If `true`, can be fed to Wolves
    -   `can_always_eat`: boolean (default: `false`)
        -   If `true`, this food can be eaten even if not hungry
    -   `eat_seconds`: float (default: `1.6`)
        -   The number of seconds that it takes to eat this food item
    -   `effects`: list of effects to apply when eaten (default: `[]`)
        -   `effect`: effect instance (same format as `custom_effects` in `minecraft:potion_contents` component)
        -   `probability`: float between 0 and 1, chance for the effect to be applied (default: `1`)
    -   e.g: `food={nutrition:4,saturation_modifier:0.1}`
-   On food items, has an implicit default value for that food type

#### `minecraft:max_stack_size`

-   Controls the maximum stacking size of this item
-   Format: integer between 1 and 99
    -   e.g. `max_stack_size=4`
-   Has an implicit default value according to the item type (usually `64`)

#### `minecraft:max_damage`

-   Controls the maximum amount of damage than an item can take
-   If not present, the item cannot be damaged
-   Format: positive integer
    -   e.g. `max_damage=123`
-   Has an implicit default value for damageable items

#### `minecraft:fire_resistant`

-   If present, this item will not burn in fire
-   Format: empty object
    -   e.g. `fire_resistant={}`
-   Has an implicit default value for fire-resistant items such as Netherite

#### `minecraft:rarity`

-   Controls the color of the item name
-   Format: enumerated value, one of:
    -   `common` (default): white name, or aqua when enchanted
    -   `uncommon`: yellow name, or aqua when enchanted
    -   `rare`: aqua name, or light purple when enchanted
    -   `epic`: light purple name
    -   e.g. `rarity=rare`
-   Special items such as Golden Apples have an implicit default value

#### `minecraft:tool`

-   Controls the behavior of the item as a tool
-   Format: object with fields
    -   `rules`: list of rule entries
        -   `blocks`: single block, list of blocks, or `#`;;-;;prefixed block tag to match
        -   `speed` (optional): float, overrides the mining speed if present and matched
        -   `correct_for_drops` (optional): boolean, overrides whether this tool is considered 'correct' if present and matched
            -   `true` will cause the block to mine at its most efficient speed, and drop items if the targeted block requires that
    -   `default_mining_speed`: float, mining speed to use if no rules match and override mining speed (default: `1.0`)
    -   `damage_per_block`: non-negative int, amount of durability to remove each time a block is mined with this tool
    -   e.g. `tool={rules:[{blocks:"#mineable/pickaxe",speed:4.0,correct_for_drops:true}]}`
-   Vanilla tool items will have an implicit default value based on their tier and tool type

#### `hide_tooltip`

-   If present, it will completely hide whole item tooltip (that includes item name)
-   Tooltip will be still visible and searchable in creative mode
-   Format: empty object

### New Tags

-   Added `incorrect_for_wooden_tool`, `incorrect_for_gold_tool`, `incorrect_for_stone_tool`, `incorrect_for_iron_tool`, `incorrect_for_diamond_tool`, `incorrect_for_netherite_tool` block tags
    -   These tags combine the existing `needs_diamond_tool`, `needs_iron_tool`, and `needs_stone_tool` tags for each specific tool tier
-   Added `meat` collection item tag
    -   This is not used by the game directly, but may be included by other tags
-   Added `piglin_food`, `fox_food`, `cow_food`, `goat_food`, `sheep_food`, `wolf_food`, `cat_food`, `horse_food`, `horse_tempt_items`, `camel_food`, `armadillo_food`, `bee_food`, `chicken_food`, `frog_food`, `hoglin_food`, `llama_food`, `llama_tempt_items`, `ocelot_food`, `panda_food`, `pig_food`, `rabbit_food`, `strider_food`, `strider_tempt_items`, `turtle_food`, `parrot_food`, `parrot_poisonous_food` item tags to control which items can be fed to or tempt the corresponding mobs
-   `axolotl_tempt_items` has been renamed to `axolotl_food`

## Resource Pack Version 30

-   Map decoration icons have been split from the former `map_icons.png` to use an atlas loaded from the `textures/map/decorations/` directory
-   The process of upgrading your pack can be assisted by using this automated [Slicer](https://github.com/Mojang/slicer/releases/tag/v1.1.4) tool
-   Added `trial_chambers` map decoration icon

## Fixed bugs in 24w12a

-   [MC-266467](https://bugs.mojang.com/browse/MC-266467) Wind charges stutter when flying through the air
-   [MC-267747](https://bugs.mojang.com/browse/MC-267747) Click and hover events don't work when viewing chat while F1 is enabled
-   [MC-267933](https://bugs.mojang.com/browse/MC-267933) Silk Touch and Fortune enchanted books cannot be found in Creative inventory
-   [MC-267943](https://bugs.mojang.com/browse/MC-267943) Anvil exclusive enchantments can be obtained from enchanting tables
-   [MC-268068](https://bugs.mojang.com/browse/MC-268068) Pieces of text in the "Reset World" realm menu can intersect when using some resolutions
-   [MC-268171](https://bugs.mojang.com/browse/MC-268171) Some GUI textures can no longer be transparent in Minecraft
-   [MC-268311](https://bugs.mojang.com/browse/MC-268311) Bane of arthropods enchantment uses #arthropods tag instead of #sensitive;;_;;to;;_;;bane;;_;;of;;_;;arthropods
-   [MC-268312](https://bugs.mojang.com/browse/MC-268312) Impaling enchantment uses #aquatic tag instead of #sensitive;;_;;to;;_;;impaling
-   [MC-268343](https://bugs.mojang.com/browse/MC-268343) Breeze charge has laggy unnatural flightpaths when punched
-   [MC-268510](https://bugs.mojang.com/browse/MC-268510) Items with "Unbreakable:1b" NBT can no longer have the unbreaking enchant applied
-   [MC-268556](https://bugs.mojang.com/browse/MC-268556) Wind charges go through non-full blocks instead of colliding
-   [MC-269083](https://bugs.mojang.com/browse/MC-269083) Effect background texture in inventory renders translucent pixels as opaque
-   [MC-269085](https://bugs.mojang.com/browse/MC-269085) Experience bar and jump bar render translucent pixels as opaque
-   [MC-269169](https://bugs.mojang.com/browse/MC-269169) Wolf variant not present in advancement criteria
-   [MC-269268](https://bugs.mojang.com/browse/MC-269268) components don't work on the smithing table
-   [MC-269280](https://bugs.mojang.com/browse/MC-269280) The right side of incompatible resource or data packs isn't rendered correctly when the scroll bar is present
-   [MC-269299](https://bugs.mojang.com/browse/MC-269299) The red text within the "Experiments" menu cannot be narrated or selected
-   [MC-269336](https://bugs.mojang.com/browse/MC-269336) Crash with set;;_;;enchantments item modifier above level 255
-   [MC-269354](https://bugs.mojang.com/browse/MC-269354) The subtitle for the "minecraft:item.mace.smash;;_;;air" sound event displays as a raw translation string
-   [MC-269355](https://bugs.mojang.com/browse/MC-269355) Heavy Core has no required tool
-   [MC-269356](https://bugs.mojang.com/browse/MC-269356) Heavy Core cannot be oriented despite its blockstates suggesting otherwise
-   [MC-269361](https://bugs.mojang.com/browse/MC-269361) Weird Wind Charge behavior when deflecting
-   [MC-269373](https://bugs.mojang.com/browse/MC-269373) /datapack disable doesn't work
-   [MC-269393](https://bugs.mojang.com/browse/MC-269393) Game crashes when wind charge hits entity
-   [MC-269401](https://bugs.mojang.com/browse/MC-269401) The minecraft:set;;_;;written;;_;;book;;_;;pages item modifier is inconsistent with minecraft:set;;_;;name and minecraft:set;;_;;lore
-   [MC-269409](https://bugs.mojang.com/browse/MC-269409) Unable to execute /particle entity;;_;;effect
-   [MC-269419](https://bugs.mojang.com/browse/MC-269419) Heavy Core cannot be waterlogged
-   [MC-269422](https://bugs.mojang.com/browse/MC-269422) Carpet on powder snow no longer negates fall damage
-   [MC-269452](https://bugs.mojang.com/browse/MC-269452) Crash when using item modifier with replace;;_;;section mode and very large size field
-   [MC-269457](https://bugs.mojang.com/browse/MC-269457) Crash with set;;_;;lore item modifier setting more than 256 lores
-   [MC-269513](https://bugs.mojang.com/browse/MC-269513) Maces can break cobwebs

---

