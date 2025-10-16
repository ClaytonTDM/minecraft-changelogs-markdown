# Minecraft 1.20.3

We're now releasing 1.20.3 for Minecraft: Java Edition. This release comes with new functionality for Decorated Pots, a new look for the Bat and improvements to Shields.

This release also includes new features for map makers and pack creators like Scoreboard Display Names and extensions for the `execute` and `return` commands and a new administrative tool: the `tick` command.

The optional Update 1.21 Experiment also shows up in this version as a sneak preview of features for the next major version of Minecraft.

## Changes

-   Decorated Pots can now store items, and can be smashed by projectiles
-   When a player is blocking with a shield, the arm with the shield now follows the direction the player is looking at, when viewed from third-person perspective
-   The Bat now has a new look
-   Added an accessibility option that allows to hide the yellow splash texts in the main menu
-   Added a recovery screen for worlds with missing data (for example, if saving failed due to an unexpected shutdown)
-   Other minor tweaks

![Minecraft Java Edition 1.20.3 Image 2 Thumbnail](https://launchercontent.mojang.com/images/1.20.3_image_2_tn.jpg)

### Decorated Pots

-   Decorated Pots now store up to a single stack of items
-   Hoppers, Droppers and Minecarts with Hoppers can now insert and/or extract items from Decorated Pots
-   Comparators can now read the number of items in Decorated Pots
-   Players can interact with Decorated Pots to insert items into them
-   Decorated Pots have no GUI, and need to be broken to retrieve or discover their content by players
-   Player interactions with Decorated Pots cause the Decorated Pot to wobble and trigger the vibration frequency of 11
-   Decorated Pots can be smashed by projectiles which cause them to shatter and drop their content
-   Decorated Pots now stack up to 64

### Bat

-   The Bat has an updated model, animations and texture

![Minecraft Java Edition 1.20.3 Image 1 Thumbnail](https://launchercontent.mojang.com/images/1.20.3_image_1_tn.jpg)

### Minor Tweaks

-   Monster Spawner now renders their inner faces when looking inside
-   Thrown Ender Pearls produce a teleportation sound on impact
-   Small tweaks to the Telemetry Data Collection screen

## Technical Changes

-   The Data Pack version is now 26
-   The Resource Pack version is now 22
-   A few minor changes to chat component serialization
-   The name of non-living entities will now be shown if targeted and a CustomName is set, or always displayed if CustomNameVisible is set, similar to living entities
-   Changes to downloaded/world resource pack handling

### Chat Components

#### Serialization

-   Plain-text chat components (text, no sibilings, no stylings) are now always serialized as strings instead of `{"text': "blah"}`
-   Chat components now serialize to NBT when sent over network
-   Chat components now have an optional `type` value (allowed values: `text`, `translatable`, `score`, `nbt`, `keybind`, `selector`) to speed up parsing and improve error checking
-   Similarily, components of type `nbt` now have a `source` field with allowed values `entity`, `block`, `storage`
-   The `id` field in `show_entity` `hoverEvent` style now also accepts UUIDs as an array of 4 ints
-   Numeric and boolean arguments for `translate` components are no longer converted to strings
-   The following JSON component representations are no longer accepted:
    -   `null`
    -   `[]`
-   Errors in the following style fields are no longer silently ignored:
    -   `color`
    -   `clickEvent`
    -   `hoverEvent`
    -   `hoverEvent[action=show_entity].contents.name`
    -   `hoverEvent[action=show_item].contents.tag`

### World Resource Packs

Changes have been made to world resource packs (`resources.zip`), Realms resource packs and resource packs controlled by dedicated servers.

#### User Interface

-   The download screen has been replaced with a toast
-   World resource pack application now starts together with chunk loading

#### Local Storage

Downloaded packs are now stored in the `downloads` directory (with a different file organization than the old `server-resource-packs`)

-   Only up to 20 files are cached
-   Inside this directory there is also log file (`log.json`) that stores information about downloaded files for debug purposes

#### Server Config

Downloaded packs now have a unique id (GUID/UUID) that can be used to differentiate them

-   For dedicated server packs, this value can be configured with the `resource-pack-id` option in `server.properties`
-   If the value is missing, it will be generated based on the pack URL
-   If the hash of a pack is not set, this pack will be redownloaded before every application
    -   Previously, if the hash was missing, the latest downloaded version of pack was applied

#### Packets

Some additional options have been added for 3rd-party servers software:

-   The client can now accept multiple server resource packs
-   A new packet was added to un-apply server resource packs
-   The client now sends additional updates about packs (like download success)
-   Resource packs are no longer cleaned when entering configuration phase

## Data Pack Version 19

### Tags

-   Added `can_breathe_under_water` entity type tag which disables drowning
-   Added `can_break_armor_stand` damage type tag for damage types that can incrementally knock down armor stands

## Data Pack Version 20

-   Changed `function` command results
-   Adjusted check for gamerule `maxCommandChainLength`
-   Added new gamerule `maxCommandForkCount`
-   Reintroduced form of the `execute` command: `execute if function`
-   Reintroduced form of the `return` command: `return run`
-   Decorated Pots with the `cracked` state set to true will always shatter when broken
-   Added new `dust_plume` particle type

### Commands

#### Functions

(See further changes in Pack Version 23)

-   The `function` command has been changed to better accomodate new `return` command
-   Functions no longer have any result unless they use `return` or there was error during lookup or instantiation
    -   That means the `function` command will no longer return (or even display) the number of commands run during execution
    -   Error conditions:
        -   Calling a non-existent function
        -   Calling an empty function tag
        -   Macro instantiation failures
-   "Result" in this context means values that would be stored with `execute store`
-   The previous behavior where every command in a function would perform a store if a function was called with `execute store ... run function` has been removed
    -   A single call to `function` will now store at most once (zero times if `return` was not called)
    -   For function tags with multiple entries, function results will be accumulated, but partial results will be stored at the end of every function

##### Limits

Existing limits for functions have been refined to accomodate new execution rules and prevent wider range of exploits:

-   Limits now apply even for commands run from the server console or chat input (so it will now always behave as if they were placed in a function)
    -   For example, all functions called by `execute as @e run function` will count towards the same limit
    -   Executions from command blocks still count as separate ones
-   The `maxCommandChainLength` limit for functions will now count "operations" like:
    -   execution of command for a single context
    -   execution of a stage in `execute` (no matter how many contexts were modified)
    -   invocation of function
-   A new limit with game rule called `maxCommandForkCount` now restricts the total amount of contexts that can be created by single state of functions like `execute`
    -   For example: if there are 5 entities in world, `execute as @e` creates 5 contexts, while `execute as @e at @e` creates 5\*5 = 25 contexts

#### `execute if function`

An `execute` sub-command that runs a function or function tag and matches the return value(s). This is a reintroduction of functionality removed in a previous version. If a tag is given, all functions run regardless of the results of prior functions.

Syntax: `execute if|unless function <function> <continuation>`

Parameters:

-   `function`: The function or tag to run

##### Matching

The matching of the result value of the function(s) that run:

-   At least one of the functions must succeed for the match to succeed
-   A succeessful call is defined as a function that:
    -   Uses the `return` command to return a value
    -   The return value is not 0
-   If no functions exited with `return`, neither `if` or `unless` will run

#### `return run`

A form of the `return` command is now available, `return run`. This is a reintroduction of functionality removed in a previous version.

Syntax: `return run <command>`

This takes the `result` value from running the specified `command` and returns that as the return value of the function.

-   If the command did not return any value (like, for example, a call to a `function` without `return`), return will not execute and function will continue execution (changed in Data Pack Version 23)
-   If the given command fails, the return value is `0`
-   In all other aspects, it works like `return` with a specified return value
-   In case of a fork (for example `return run execute as @e run some_command`), the first execution of the command will return
    -   If there are no executions (for example in `return run execute if entity @e[something_impossible] run some_command`), the function will not return and will continue execution (changed in Data Pack Version 23)

## Data Pack Version 21

-   Introduced Jigsaw structure pool aliases, which can be used to rewire pool selection
-   Added field `block_state` to `tnt` entity to allow replacement of rendered block model
-   Renamed field `Fuse` to `fuse` on `tnt` entity
-   Added `playersNetherPortalDefaultDelay` and `playersNetherPortalCreativeDelay` game rules to control time (in ticks) that a player needs to stand in a Nether portal before changing dimensions
-   Added new game rule `projectilesCanBreakBlocks` to control whether impact projectiles will destroy blocks that are destructible by them, i.e. Chorus Flowers, Pointed Dripstone and Decorated Pots
-   Added `white_smoke` particle type

### Jigsaw Pool Aliases

-   Added optional `pool_aliases` list to Jigsaw structures
-   Aliases represent the possibility to rewire Jigsaw pool connections by redirecting pool references on individual structure instances
-   Alias variants are represented in `type` and is one of:
    -   `direct` 1:1 mapping from an alias to a new pool
        -   `alias` pool to replace
        -   `target` pool to replace with
    -   `random` 1:n mapping where a pool from `n` is randomly selected for the structure instance
        -   `alias` pool to replace
        -   `targets` randomized list of candidate pools to replace `alias` with
    -   `random_group`
        -   `groups` each group is a randomized list of above alias types
        -   only one group is selected per structure instance
        -   this enables modelling selections such as "if pool X is replaced with X1, also replace pool Y with Y1"

## Data Pack Version 22

-   Added `tick` command
-   Added two new input fields for Selection Priority and Placement Priority in the Jigsaw block edit screen
-   Added `item` to `minecraft:arrow` and `minecraft:spectral_arrow`, this is the item that will be picked up
-   Renamed `Trident` to `item` in `minecraft:trident`

### `tick` Command

Added a new `tick` command. This is an adminstative and debugging command that allows control of the ticking flow and measuring the performance of the game. The command requires elevated permissions (admins and above) and so it is not by default available in command blocks and datapacks.

Syntax:

`tick query` - outputs the current target ticking rate, with information about the tick times performance.

`tick rate <rate>` - sets a custom target ticking rate to the specified value. The value must be greater than 1.0 and lower than 10000.0. Setting a very low tick rate can cause the game to feel unresponsive and setting too high tick rate for your system can cause the game to crash as the game now assumes it is constantly falling behind the ticking target. Please use `tick query` or `<F3> + 2` (Integrated server only) debug screen to measure the performance of the game and adjust the tick rate accordingly. Setting a tick target lower than the default `20.0` will also cause the players to be simulated at a lower rate (including player movement and input controls), while setting a higher tick rate will cause the players to be simulated at the default rate of `20` ticks per second to maintain the expected responsiveness of the game, but can cause artifacts in entities interpolation.

`tick freeze` - freezes all gameplay elements, except for players and any entity a player is riding. This is useful for debugging and isolating issues with the game allowing the player to move around freely and inspect the world.

`tick step [<time>]` - Only works when the game is frozen. It runs the game for the specified number of ticks and then freezes the game again. This allows to step through the game a set amount of ticks at a time. If no time is given, steps 1 tick.

`tick step stop` - stops the current stepping process, and re-freezes the game.

`tick unfreeze` - unfreezes the game and resumes all gameplay elements.

`tick sprint <time>` - runs the game while ignoring the set ticking target rate (meaning that the game will run as fast as possible) for the specified number of ticks. At the end of the sprint, the game will resume the previous ticking target and display performance information about the tick times while sprinting. This is especially useful for testing gameplay elements that are time-dependent, such as Redstone contraptions, or mob behaviour in isolated environments that allow for much faster simulation.

`tick sprint stop` - stops the current tick sprint, and resumes the previous ticking target.

![Minecraft Java Edition 1.20.3 Image 3 Thumbnail](https://launchercontent.mojang.com/images/1.20.3_image_3_tn.jpg)

### Jigsaw Selection & Placement Priority

-   Selection Priority
    -   When the parent piece is being processed for connections, this controls the order in which this Jigsaw block attempts to connect to its target piece
    -   Jigsaws will be processed in descending priority order and randomly within the same priority
-   Placement Priority
    -   When this Jigsaw block connects to a piece, this is the order in which that piece is processed for connections in the wider structure
    -   Pieces will be processed in descending priority order with the default insertion order breaking ties within the same priority
-   This functionality has been added to support the ability for Jigsaw structures to generate branches in a depth-first order, as well as give finer control over ordering of connections
-   All existing Jigsaw blocks will default their Selection and Placement Priority to 0, resulting in the same behaviour as before these two configurable values were introduced

## Data Pack Version 23

-   Decorated Pots can now utilize loot tables and will read from the `LootTable` tag key
-   Additional changes to command functions

### Commands

#### `return`

-   `return run` will now always return
    -   If there are no valid results from the returned command, the function containing the `return run` will fail (i.e. `success=0` and `result=0`)
-   `return run` will now propagate the success value together with the results value (previously it always set success to `1`)
-   `return run` now also allows storing values - that means `execute store ... run return run some_command` will both store the value and return it outside the function
-   A new subcommand `return fail` has been added to make the whole function fail (i.e. return `success=0` and `result=0`)

#### `function`

-   If `function <function tag>` runs multiple functions in combination with `return run`, execution will stop after first `return` in any of the functions
-   A single call to the `function` command will always return when run with `return run`
    -   For example, `return run execute [split context] run function <some function with conditional return>` will always return after processing the first context

#### `execute if|unless function`

-   `execute if|unless function` no longer always fails if none of the functions had a `return`
    -   If there were no `returns` in called functions, `if` will fail and `unless` will pass
    -   The first `return` in any of called functions will return (for a single context)

## Data Pack Version 24

-   Increased maximum value of Jigsaw structure variable `size` from 7 to 20

## Data Pack Version 25

-   Added individual display names for scoreboard entries
-   Scoreboard sidebar will now render even when if there are no scores in selected objective

### Commands

#### `scoreboard`

##### Display Names

Each entry in a scoreboard can now have a custom display name.

-   These values are kept separate per objective and score holder
-   If the name is not present, the score holder name is used (i.e. the old behavior)
-   If the score is reset or the whole objective is removed, the name is not preserved
-   Team decorations will still be applied to names as normal
-   Subcommands for managing names:
    -   `scoreboard players display name <targets> <objective> <text component>` - set display name
    -   `scoreboard players display name <targets> <objective>` - clear display name

##### Display Name Auto-Update

To make display name management easier, objectives can also be configured to auto-update display names on every score update.

-   This option is disabled by default
-   If a score holder has no display name (because it can't be attributed to any currently loaded entity), the current name is preserved
-   Command to control auto-update for objective:
    -   `scoreboard objectives modify <scoreboard> displayautoupdate [true|false]`

##### Number Formatting

Scores in numeric form can now be formatted.

-   Formats can be set for both objectives and individual scores
-   Scores with set formats will render the same in all context (sidebar, under player name, etc.)
-   Subcommands for managing formats:
    -   `scoreboard objectives modify <objective> numberformat <format>` - set the default format for an objective
    -   `scoreboard objectives modify <objective> numberformat` - clear the default format for an objective
    -   `scoreboard players display numberformat <targets> <score> <format>` - set the format for a specific score holder
    -   `scoreboard players display numberformat <targets> <score>` - clear the format for a specific score holder
-   Formats:
    -   `styled <style>` - the score will be displayed with selected style (like `{"bold":true}`)
    -   `fixed <text component>` - the score will be replaced with the text component
    -   `blank` - the score will not be displayed

## Data Pack Version 26

-   Renamed `minecraft:grass` block and item to `minecraft:short_grass`

## Resource Pack Version 19

-   Added block model, item model and block state definitions for `crafter`
-   Added GUI container texture and sprites for `crafter`
-   Added `white_smoke` particle definition

## Resource Pack Version 20

-   `bat.png` has been updated for the new Bat model with new texture mapping
-   Added block models, items models and block state definitions for the following blocks:
    -   `chiseled_copper`, `exposed_chiseled_copper`, `weathered_chiseled_copper`, `oxidized_chiseled_copper`
    -   `copper_grate`, `expxosed_copper_grate`, `weathered_copper_grate`, `oxidized_copper_grate`
    -   `copper_bulb`, `exposed_copper_bulb`, `weathered_copper_bulb`, `oxidized_copper_bulb`
    -   `copper_door`, `exposed_copper_door`, `weathered_copper_door`, `oxidized_copper_door`
    -   `copper_trapdoor`, `exposed_copper_trapdoor`, `weathered_copper_trapdoor`, `oxidized_copper_trapdoor`
    -   `tuff_stairs`
    -   `tuff_slab`
    -   `tuff_wall`
    -   `chiseled_tuff`
    -   `polished_tuff`
    -   `polished_tuff_stairs`
    -   `polished_tuff_slab`
    -   `polished_tuff_wall`
    -   `tuff_bricks`
    -   `tuff_brick_stairs`
    -   `tuff_brick_slab`
    -   `tuff_brick_wall`
    -   `chiseled_tuff_bricks`
-   Added unique sprites for the following blocks:
    -   `chiseled_copper`, `exposed_chiseled_copper`, `weathered_chiseled_copper`, `oxidized_chiseled_copper`
    -   `copper_grate`, `expxosed_copper_grate`, `weathered_copper_grate`, `oxidized_copper_grate`
    -   `copper_bulb`, `exposed_copper_bulb`, `weathered_copper_bulb`, `oxidized_copper_bulb`
    -   `copper_door`, `exposed_copper_door`, `weathered_copper_door`, `oxidized_copper_door`
    -   `copper_trapdoor`, `exposed_copper_trapdoor`, `weathered_copper_trapdoor`, `oxidized_copper_trapdoor`
    -   `chiseled_tuff`
    -   `polished_tuff`
    -   `tuff_bricks`
    -   `chiseled_tuff_bricks`

## Resource Pack Version 21

-   The `uniform` font has been updated to use Unifont 15.1.04 (from 15.0.06)
-   The only supported texture format is now `.png`

### Breeze Mob

-   Added entity models and textures for experimental Breeze mob:
    -   `breeze`, `wind_charge`
-   Added shader:
    -   `breeze_wind`

## Resource Pack Version 22

-   Renamed `minecraft:grass` block and item to `minecraft:short_grass`

## Experimental Features

### Crafter

-   The Crafter is a new block that enables the crafting of items and blocks via Redstone
-   The Crafter will eject one crafted item at a time when powered by a Redstone pulse
-   Upon receiving a signal, the Crafter will eject the recipe result from the front face
-   If the output result has multiple types of items, all the result items will be ejected together
-   When placed, the front face of the Crafter will face towards the Player

#### Crafter User Interface

-   The Crafter has a 3x3 interactable crafting grid
-   The Crafter’s crafting grid slots are toggleable, meaning that the player can change the behavior of a slot by interacting with it while not holding an item
-   A slot that is ‘toggled’ cannot hold any items
    -   Other blocks such as Hoppers and Droppers also cannot place items into them
-   Unlike the Crafting Table, the Crafter displays a preview of the crafted item which will be crafted and ejected on the next Redstone pulse, but cannot be manually taken out by the player
-   The Crafter User Interface is shared between all players interacting with it, meaning that multiple players can interact with the Crafter at the same time, similar to Chests and Hoppers

#### Crafter Interaction with Other Blocks

-   The signal strength of a Comparator reading a Crafter is 0-9, where each non-empty or toggled slot adds 1 strength
-   Hoppers and Minecarts with Hoppers can be used to both insert and extract items from the Crafter
-   Droppers can be used to insert items into the Crafter
-   Items inserted from another block (ex: Hopper, Dropper) will fill the Crafter's slots based on these rules:
    -   Prioritize the first empty slot (from left-to-right, top-to-bottom)
    -   If there are no empty slots then prioritize the smallest stack of the same item (pick the first if there are multiple)
    -   If there is a toggled slot it will be skipped. The item will then be moved into the container
    -   If the item cannot be moved, it will be ejected into the world
-   Items are removed from Crafters by Hoppers and Minecarts with Hoppers in the same order as from other containers like Chests

![Minecraft Java Edition 1.20.3 Experimental Image 3 Thumbnail](https://launchercontent.mojang.com/images/1.20.3_experimental_3_tn.jpg)

### Copper Family

The Copper family of blocks has been expanded, including:

-   Chiseled Copper
-   Copper Grate
-   Copper Bulb
-   Copper Door
-   Copper Trapdoor
-   Oxidized and waxed variants of all of the above

#### Chiseled Copper

-   Crafted with 2 Cut Copper Slabs of a shared oxidation level
-   Can be crafted in the Stonecutter

#### Copper Grate

-   A new type of decorative block unique to the Copper family
-   Crafted with 4 Copper Blocks of a shared oxidation level
    -   Can be crafted in the Stonecutter
-   Properties:
    -   Transparent and allows light to pass through
    -   Mobs cannot suffocate inside them
    -   Cannot conduct Redstone
    -   Hostile mobs cannot naturally spawn on them
    -   Can hold Water

#### Copper Bulb

-   A light-emitting block that can toggle its light emission through Redstone pulses
-   Oxidizes like other Copper blocks, and emits light based on oxidation level
    -   Copper Bulb: Light level 15
    -   Exposed Copper Bulb: Light level 12
    -   Weathered Copper Bulb: Light level 8
    -   Oxidized Copper Bulb: Light level 4
-   When placed, its light is off by default
    -   While the Copper Bulb is unpowered, it will toggle its light on or off when it receives a Redstone pulse
    -   Copper Bulb light will stay on even when the Redstone source is removed until it receives another Redstone pulse to toggle it off
-   A Redstone crystal will glow in the center of Copper Bulbs while it is powered by a Redstone signal
-   Comparators will read a signal strength of 15 if the Copper Bulb's light is on
-   Copper Bulbs do not conduct Redstone power
-   The crafting recipe for 4 Copper Bulbs is:
    -   3 Copper Blocks of a shared oxidation level
    -   1 Blaze Rod
    -   1 Redstone Dust

#### Copper Doors and Trapdoors

-   Copper variants of Doors and Trapdoors that can oxidize over time and be waxed
-   Works like wooden doors in that they can be opened and closed with interaction, as well as Redstone
-   Crafted with Copper Blocks that have a shared oxidation level

### Tuff Family

Tuff has been expanded to have its own family of blocks, including:

-   Stair, Slab, Wall and Chiseled variants
-   Tuff Bricks with Stair, Slab, Wall and Chiseled variants
-   Polished Tuff with Stair, Slab and Wall variants

All Tuff variants can be crafted in the Stonecutter.

### Added Breeze Mob

-   The Breeze is a cunning hostile mob spawned by the Trial Spawner in some rooms within the Trial Chambers
-   The Breeze moves primarily by leaping around its target
-   An aggressive adversary, the Breeze shoots volatile wind energy in the form of Wind Charge projectiles at its target
-   Wind Charges deal a small amount of damage when colliding directly with an entity
-   After colliding with an entity or a block, Wind Charge projectiles produce a Wind Burst, which knocks back entities in the area
-   Wind Charges break decorated pots and chorus flower blocks upon collision
-   Wind Bursts also have the effect of 'activating' certain blocks:
    -   Non-Iron Doors and Trapdoors are flipped
    -   Fence Gates are flipped
    -   Buttons are pressed
    -   Levers are flipped
    -   Bells are rung and swung
    -   Lit Candles are extinguished
-   Wind Bursts do not have any effect on Iron Doors, Iron Trapdoors, or any block being held in its position by a Redstone signal

![Minecraft Java Edition 1.20.3 Experimental Image 1 Thumbnail](https://launchercontent.mojang.com/images/1.20.3_experimental_1_tn.jpg)

### Trial Spawner

-   The Trial Spawner is a new variant of Monster Spawners that ejects rewards upon completion
-   The challenge level will increase for each new player a Trial Spawner notices nearby
    -   The challenge level will not decrease until it is reset during a Trial Spawner's cooldown
-   Unlike normal Spawners, a Trial Spawner will spawn a limited number of mobs proportional to its current challenge level
    -   It can only spawn a mob at positions that are within line of sight
    -   It can spawn a mob regardless of any light level requirement the mob has
    -   Spawned mobs are persistent
-   Once all mobs are defeated, the Trial Spawner will eject a set of rewards proportional to the current challenge level
    -   After the rewards have been ejected, the Trial Spawner goes into cooldown for 30 minutes, during which it will no longer spawn mobs
-   Trial Spawners cannot be crafted nor obtained by players in Survival - instead, they can be found naturally placed throughout Trial Chambers
-   Trial Spawners are extremely slow to mine and resistant to explosions, and will not drop even with Silk Touch
-   When placed in Creative, Trial Spawners have no mob type set by default
    -   The mob type can be set by interacting with it while holding a Spawn Egg
-   Creative and Spectator players cannot be detected or noticed by Trial Spawners

![Minecraft Java Edition 1.20.3 Experimental Image 2 Thumbnail](https://launchercontent.mojang.com/images/1.20.3_experimental_2_tn.jpg)

### Trial Chambers

-   Trial Chambers are a new structure in the Overworld where players can explore and take on combat challenges
    -   Trial Chambers are made out of a variety of Copper and Tuff blocks, and can be found in different sizes
    -   Trial Chambers are a relatively common find throughout the Deepslate layer of the underground
-   The layout of each Trial Chamber is procedurally generated, and can include traps, Reward Chests and a variety of combat areas
    -   Supply Chests can be found between different rooms, and give you blocks and items which help you navigate your trials
    -   Reward Chests are guarded by challenges in each room, and can be a source of many high level enchanted books and equipment
    -   The loot found in Reward Chests are still being iterated, and are absolutely not final
-   Each Trial Chamber will include Trial Spawners with a melee, small melee, or ranged category:
    -   Melee
        -   Zombie
        -   Husk
        -   Slime
    -   Small Melee
        -   Spider
        -   Cave Spider
        -   Baby Zombie
        -   Silverfish
    -   Ranged
        -   Skeleton
        -   Stray
        -   Skeleton with Poison Tipped Arrows
-   Each Trial Spawner category will only use one mob for the entire structure when generated, and these mobs are randomized for each Trial Chamber
    -   For example, one Trial Chamber might only spawn Zombies, Cave Spiders and Strays, while another might only spawn Slimes, Silverfish and Skeletons
    -   The exceptions to this are some Trial Spawners in unique rooms which always spawn Breezes
-   Natural mob spawning does not occur within Trial Chambers

#### Known Issues

-   The corridors sometimes end with a dead end
-   Aquifers, Lush Caves, and Sculk Veins sometimes intersect with the Trial Chamber

### Trial Key

-   An item that can only be obtained from Trial Spawners
-   Trial Keys do not currently have any functionality

## Fixed bugs in 1.20.3

Around 85 bugs were fixed in this release. View the [list on the issue tracker](https://bugs.mojang.com/issues/?filter=27936).

---

We're now releasing 1.20.2 for Minecraft: Java Edition. This release comes with more diamond ore in the deep regions of the world and changes to mob attack reach as well as optimizations to the game's networking performance enabling smoother online play even on low-bandwidth connections.

This release also includes new features for map makers and pack creators like macro functions, a random command and pack overlays.

With 1.20.2, we are making some important updates to our Player Reporting Tool to better protect the online safety of our players. You will now be able to report player skins and usernames that violate our Community Standards.

The optional Villager Trade Rebalance Experiment also makes its debut in this version with changes to trades in the making that you can try out.

## New Features

### Player Skin & Name Reporting

We are making some important updates to our Player Reporting Tool to better protect the online safety of our players.

Playing Minecraft should be an inclusive and safe experience for everyone, which is why alongside in-game chat messages, you will now be able to report player skins and usernames that violate our Community Standards in Java Edition.

Just like with chat reports, nothing is automated. Any reported skin or username will be reviewed manually by a team of trained Minecraft moderators, who will use the submitted evidence to decide whether the skin and/or username is in breach of our Community Standards. Skins that are in violation of these standards will be removed from Minecraft and will no longer be accessible for use by any player. Usernames that are in violation of these standards will need to be changed before that player can play online via a shared server or Realm; though single player mode will still be accessible. To find out more about this and other safety policies, including more detail on the suspension procedure, appeals process, and how we handle malicious or repeat reporting, please visit our dedicated [FAQ page](https://help.minecraft.net/hc/en-us/articles/7317376541197).

-   Player Skins and Names can now be reported in the Social Interactions Screen
-   If a skin or name is reported, and found to be violating the [Community Standards](https://www.minecraft.net/community-standards), our team of human moderators can action in a few ways:
    -   Ban the skin from being used by any player
    -   Ban the name from being used by any player
    -   Suspend the player from online play in the case of repeated offences
-   When a skin is banned, players with that skin:
    -   Will have their skin removed
    -   Will be notified when they launch the game
    -   Will be automatically assigned one of the default skins
    -   Can still play multiplayer and singleplayer
    -   Can select a new custom skin at any time
-   When a player's name is banned, that player:
    -   Will need to choose a new name
    -   Will be notified when they launch the game
    -   Will not be able to play online until they change their name
    -   Can still play singleplayer
-   A skin or name that has been banned cannot be used by any player in the future

## Changes

-   The calculations to determine whether a mob can attack a player or other mobs have been changed
-   Diamond Ore is now generated more frequently in the Deepslate layers of the Overworld
-   Optimizations to networked play
-   Curing a Zombie Villager now only gives a big discount the first time
    -   There is no longer a bonus discount for reinfecting and curing the same Villager multiple times
-   Sponges and Wet Sponges now have their own custom sounds
-   Barrier blocks can now be waterlogged by players in Creative mode
    -   Water cannot be placed in them or taken out by non-direct interactions such as Dispensers
-   The positions that all entities ride on other entities have been adjusted to make more sense
-   Added the "Narrator Hotkey" accessibility option (default on)
    -   The narrator can be toggled on and off with `Ctrl+B` when this is on
-   Added "I want to report them" Player Reporting category
-   Removed Herobrine

### Mob attack reach changes

The calculations to determine whether a mob can attack a player or other mobs have been changed. Previously a mob's horizontal width was used to determine their attack reach and their height had no effect. The area where a mob can attack is now their bounding box extended in horizontal directions.

Here are some situations where the new rules will affect the reach of mobs:

-   If a mob is entirely below you, or entirely above you, it will not be able to reach you
-   While riding on a medium-sized mob, like a Horse, you will be protected from small mobs, like Baby Zombies
-   While riding on a tall mob, like a Camel, you will be protected from standard-size mobs, like Zombies
-   Also, Ravagers won't be able to attack you through a few block thick walls anymore
-   However, to escape from an Enderman, you need to be at least 3 blocks above the ground, not 1.5 as before
-   Mobs will be able to attack you with the bottom of their hitbox, assuming your head is in range
-   Builds that trap hostile mobs might need to be adjusted to be safe

This change does not affect the reach of players, and mobs still need to see their target to attack it.

### Networked Play

The Multiplayer mode of the game has been optimized to enable more fluid online play. If you have previously experienced disconnections or slow loading into online servers, this version may significantly improve that experience.

-   The game world will now show earlier instead of the loading screen while loading into a world on a server
-   Clients with extremely low-bandwidth connections will not time out while loading the world
-   Clients with low-bandwidth connections can interact with the world while some chunks are still loading

### Vibrations

-   Vibrations no longer risk being lost on simulation distance limit
-   Using Bone Meal emits an `item_interact_finish` vibration of frequency 3
-   Unequipping items emits a new `unequip` vibration of frequency 4
-   Camels eating Cactus emit an `eat` vibration of frequency 8
-   Carrots being eaten by Rabbits emit a `block_change` vibration of frequency 11
-   Sweet Berries being eaten by Foxes emit a `block_change` vibration of frequency 11
-   Chiseled Bookshelves emit a `block_change` vibration of frequency 11 when receiving books from Hoppers
-   Turtle Eggs cracking emit a `block_change` vibration of frequency 11
-   Turtle Eggs hatching emit a `block_destroy` vibration of frequency 12
-   Fire being doused by Water Potion emits a `block_destroy` vibration of frequency 12
-   Evokers evoking Vexes or Fangs emit an `entity_place` vibration of frequency 14

### Miscellaneous Minor Tweaks

-   Chorus Flower no longer provides support for hanging or standing blocks
-   Updated structure icons on Explorer Maps sold by Cartographers
-   When Villagers unlock new trades, the order of those trades in the UI is now always random instead of sometimes being deterministic
-   The sizes of text fields in the user interface are now consisent with the size of buttons

![1.20.2 Release Image 4](https://launchercontent.mojang.com/images/1_20_2_release_4.jpg)

## Technical Changes

-   The resource pack version is now 18
-   The data pack version is now 18
-   History of used commands is now saved and accessible across worlds
-   Optimized networking to improve the experience on low bandwidth connections
-   Added support for multi-version packs
-   Changed network protocol to allow for more data-driven content in the future
-   Added new `log-ips` option to `server.properties`
-   Added validation for symbolic links in datapacks and resource packs
-   When hitboxes are displayed through F3+B, entities that have a passenger will display the passenger's attachment point
-   The charts on the debug screen can now be toggled with F3+1 (pie chart) and F3+2 (FPS and TPS) instead of holding Shift or Alt while opening the screen
-   Pressing F3+3 will now show charts for ping and received network traffic on the debug screen
-   The `LWJGL` library has been upgraded to version 3.3.2
-   The default Java version shipped with the game has been upgraded to Microsoft OpenJDK 17.0.8

### Command History

-   The last 50 commands that you sent in chat will be remembered across game sessions
-   You can access the command and chat history by pressing up or down arrows in the chat
-   Regular chat is only persisted within the same game session (leaving a server or world clears them)
-   Recent commands are stored in `command_history.txt` in the game folder

### Network optimizations

-   Gameplay packets are now packed into bigger TCP packets to reduce overhead from TCP headers, significantly reducing network usage
-   Chunks are not sent over the network to the client in one big continuous batch anymore
-   Chunks are instead sent in smaller batches depending on the available bandwidth, meaning that:
    -   Clients with extremely low-bandwidth connections will not time out while loading the world
    -   Clients with low-bandwidth connections can interact with the world while some chunks are still loading
-   Only chunks within the client's render distance are now sent

### Multi-version Packs

New features have been added to datapacks and resource packs to allow creation of packs that are compatible with multiple versions of game.

#### Pack Metadata

-   Pack metadata now includes an optional field `supported_formats` which describes a range for pack formats that this pack supports
    -   Examples: `16`, `[16,17]`, `{"min_inclusive": 16, "max_inclusive": 17}`
-   `pack_format` field is still required and its format remains unchanged, to allow older game versions to read pack data
    -   If `supported_formats` is present, it must contain the value declared in `pack_format`
    -   Note: since this new information is ignored by older versions of the game, they will always see a "normal", single-version pack, without any extended compatibility

#### Overlays

-   Packs can now contain overlay directories ("overlays")
-   Overlays are sub-packs applied over the "normal" contents of a pack
    -   These directories have the same layout as the top-level pack, including the `assets` and `data` directories
    -   Overlays can be applied if they support the client's pack format
    -   Overlays can add and replace files, but not remove them
        -   For example, if the overlay `foo` is applied, the file `foo/assets/minecraft/textures/bar.png` will replace the contents of `assets/minecraft/textures/bar.png`
    -   `pack.mcmeta` and `pack.png` are ignored in overlay directories
-   New section called `overlays` have been added to pack metadata
    -   It contains an `entries` field, containing a list of overlays
    -   Every overlay entry has two fields:
        -   `formats` - range of supported formats
        -   `directory` - overlay directory (allowed characters: `a-z`, `0-9`, `_` and `-`)
-   Order of application: overlays are stacked from the bottom to top of the list
    -   For example, if a pack has two overlays: `"entries": [{"directory":"A", ...}, {"directory":"B", ...}]`, the game will first look in `B`, then `A` and then in the top pack directory

### Symbolic Link Validation

To improve safety, the game will now also detect symbolic links used inside data- and resource packs.

-   This feature expands on symbolic link validation in worlds added in the previous release
-   The game will now warn users if a pack added via drag and drop contains disallowed symbolic links
-   Packs containing disallowed symbolic links will not be visible in UI and commands
-   Additionally, directories and files that are not recognized as packs will no longer be copied via drag and drop
-   For a detailed explanation, see this [help article](https://aka.ms/MinecraftSymLinks)

### Network Protocol

As part of ongoing work towards more data-driven features, the network protocol has been changed to include a new configuration phase.

-   Configuration phase automatically starts after login phase (i.e. after client account has been verified) and lasts until the player joins the world (play phase)
-   Clients can stay in configuration phase indefinitely - it's up to the server to release it to the world
-   Servers can also request clients to re-enter the configuration phase after it has entered the play phase
    -   Other players will see such clients as disconnected
-   Users in configuration phase will not be visible on the player list
-   Actions allowed in configuration phase (moved from play phase):
    -   Configuration of data-driven registries
    -   Configuration of enabled features
-   Actions shared between configuration and play phases:
    -   Application of server resource packs
    -   Update of tags
    -   Exchange of custom packets
    -   Ping and keep-alive packets
    -   Sending of client options
-   The server will now negotiate resource packs in the configuration phase
    -   This means that the player will no longer be in the world when answering prompts and reloading resources

#### Secure Chat

-   Clients will no longer disconnect themselves when receiving an invalid chat message
    -   A placeholder message will instead be shown in chat

### `server.properties`

-   New option: `log-ips` (default `true`)
    -   When set to `false`, will prevent player IPs from being included in the log when players join the game

### Telemetry

-   Added a button to the Telemetry Data Collection Screen that links to the Microsoft Privacy Statement

## Resource Pack Version 16

-   The process of upgrading your pack can be assisted by using this automated [Slicer](https://github.com/Mojang/slicer/releases/tag/v1.1.2) tool
-   All textures containing multiple sprites in a sheet for GUI have been split into individual sprites under `textures/gui/sprites` (automated by the Slicer tool)
-   All textures in the `realms` namespace have been moved into the `minecraft` namespace (automated by the Slicer tool)
-   `villager2.png` has been renamed to `villager.png` (automated by the Slicer tool)
-   `icon/trial_available` and `realm_status/expires_soon` GUI sprites are animated with `.mcmeta` declarations instead of individual sprites (automated by the Slicer tool)
-   The Bundle tooltip background is now drawn as a nine-sliced sprite
-   The icons for the Accessibility, Language, Realms News buttons have been split from their underlying button texture
-   The Realms Invite button is now drawn as an overlay on the normal button texture
    -   The highlighted texture state for this button has been removed
-   The highlighted states for Realms invitation number icons have been removed
-   The exclamation marks on the `notification\more.png` have been removed

### GUI Sprite Sheet

-   Sprites used in GUI drawing have been split into individual sprite files instead of larger sprite sheets
    -   For example, `widgets/button.png` and `widgets/button_highlighted.png` have been split from `widgets.png`
-   Each sprite can now be individually overriden by a resource pack instead of replacing the entire sheet
-   Sprites are loaded into the `gui` atlas from the `textures/gui/sprites` directory

#### GUI Sprite .mcmeta

-   Any sprite used in the GUI can now be animated using `.mcmeta` files, similar to other atlases
    -   `icon/trial_available` and `realm_status/expires_soon` are now animated this way
-   Sprites in the `gui` atlas can now configure scaling behavior through a new `gui` section in `.mcmeta` files
    -   For example, button textures must be scaled based on how big the button should be
    -   The `gui` section in `.mcmeta` contains one `scaling` field:
        -   `type`: one of: `stretch` (default), `tile`, or `nine_slice`
        -   When `stretch`, the sprite will be stretched across the desired space
            -   No additional fields need to be defined
        -   When `tile`, the sprite will be repeated across the desired space, starting from the top-left
            -   `width`: number of pixels for this sprite to cover on-screen across its width
            -   `height`: number of pixels for this sprite to cover on-screen across its height
        -   When `nine_slice`, the sprite will be sliced into 4 corners, 4 edges, and 1 center slice, which will be tiled across the desired space
            -   `width`: number of pixels for this sprite to cover on-screen across its width
            -   `height`: number of pixels for this sprite to cover on-screen across its height
            -   `border`: the size in pixels that the border slices should cover on-screen, one of:
                -   Constant integer for uniform border size on all sides
                -   Object containing `left`, `top`, `right`, and `bottom`

## Resource Pack Version 17

-   The text field background is now a nine-sliced sprite at `widget/text_field` and `widget/text_field_highlighted`
-   The scroll bar in lists and text fields is now a nine-sliced sprite at `widget/scroller`

## Resource Pack Version 18

-   The `map_icons.png` texture now contains new icons

## Data Pack Version 16

-   Gamerule `randomTickSpeed` now affects the rate of accumulation of Snow and Ice the same way it affects crops and other blocks affected by random ticking
-   Added a `random` command
-   Added support for function macros
-   Changed Display entities' post-teleport interpolation
-   Added new attribute `generic.max_absorption`
-   Renamed `belowName` value in display slot argument in `scoreboard` command to `below_name`
-   Game event changes
-   New tags

### Commands

#### `random`

A new command for randomizing values and controlling random sequences. The `value` and `roll` forms can be used to draw a random value. In the case of `roll`, the resulting value is also shown in chat for all players.

Syntax:

    random value|roll <range> [<sequenceId>]
    random reset *|<sequenceId> [<seed>] [<includeWorldSeed>] [<includeSequenceId>]
    

Parameters:

-   `range`: A range of values to randomize between, inclusively
    -   For instance, 1..6 is a regular D6 roll
-   `sequenceId`: The name of a random sequence to sample or reset
-   `seed`: A seed to use for the random sequence after reset
-   `includeWorldSeed`: A boolean \[default: `true`\] specifying whether to include the world seed when seeding the sequence
    -   `false` means the sequence will evaluate to the same regardless of which world the command is run in
-   `includeSequenceId`: A boolean \[default: `true`\] specifying whether to include the sequence ID when seeding the sequence
    -   `false` means all sequences will evaluate to the same regardless of which name they have

By default, all sequences are seeded as `0`, `true`, `true`. Using `*` instead of a sequence ID resets all sequences and sets the default parameters.

If no seed is specified, the sequence resets to the default parameters.

Note that `random value|roll <range>` used without a sequence id is available to non-operator players.

### Functions

-   A single backslash `\` as the last non-whitespace character of a line now allows a command to be continued on the next line
    -   Leading and trailing whitespace of the following line are stripped before appending

#### Macros

Functions can now contain macro lines, making them Function Macros.

-   Any line beginning with `$` (as the first non-space character) marks a macro line
-   A macro line also contains one or more substitutions in the form of `$(variable)`
-   When calling a function macro a compound with data for all argument variables must be provided

##### Calling Function Macros

The `function` command has new forms:

`function <id> <compound>` `function <id> with <data source> [<path>]`

New Arguments:

-   `compound`: A data compound, enclosed in `{}`
-   `data source`: A data source specification, like what could already be used for `data get`
-   `path`: An NBT path specification

Notes:

-   The data source and path must specify a compound data entry
-   The compound must contain one entry for each variable used in the macro
-   More data may be present in the compound and if so is ignored
-   Calling a non-macro function with a data compound is silently ignored
-   When a macro is called, the values provided are substituted in place of the variable specifications and the resulting commands are executed
-   Any syntax errors in the lines resulting from variable substitution result in the entire function call being skipped

##### Performance Considerations

Using a macro means commands must be re-evaulated after variable substitution. This has an extra cost compared to running pre-parsed functions.

Regular commands (non-macro lines) are still pre-parsed. Only commands with variable substitutions in them are parsed when a macro is called and the game will attempt to cache the result of a certain parameter set being used in a call.

This makes repeated calls with the same parameter set cheaper than new calls with different parameters, but an overhead still remains compared to regular functions. Note that only the values references by macro as parameters are included in this cache, so any extra data in the provided compound is ignored.

### Display Entity Interpolation

-   Display entities now start updating their client-side position and rotation on the first tick after an update
    -   In previous versions, updates were applied in the same tick, causing uneven motion
    -   The new behavior is similar to Armor Stands, mobs and players
-   On the server, position and rotation are still updated immediately
-   The duration of this interpolation is controlled by the field `teleport_duration`
    -   `0` means that updates are applied immediately
    -   `1` means that the Display Entity will move from current position to the updated one over one tick
    -   Higher values spread the movement over multiple ticks
    -   Please note that this value is clamped to avoid glitches due to periodic position updates
    -   The new value will apply only to position and rotation changes made after it changed
        -   That means any current movement will continue unchanged
-   Note: behavior while riding remains unchanged from previous versions

### Attributes

-   Added new attribute `generic.max_absorption`
    -   `generic.max_absorption` acts similar to `generic.max_health`, but instead of being the upper bound for `Health`, it is the upper bound for `AbsorptionAmount`
    -   The mob effect `absorption` increases `generic.max_absorption` as well as fills the `AbsorptionAmount` to the max when applied

### Game Events

-   `entity_roar` and `entity_shake` game events have been removed and replaced with `entity_action` game event

### Tags

-   Added `no_knockback` damage type tag which causes knockback to not be caused by the damage itself
    -   Used in Vanilla for damage that is caused by events, such as explosions, which apply knockback separately
-   Added `non_controlling_rider` to represent entities that don't override their vehicles movement control
-   Added `concrete_powder` block tag for Concrete Powder blocks
-   Added `camel_sand_step_sound_blocks` block tag for blocks that produce `entity.camel.step_sand` sound

## Data Pack Version 17

-   Changed mob effect storage on items, entities and block entities
-   Added `decal` field to armor trim patterns (default: `false`)
    -   If `true`, the pattern texture will be masked based on the underlying armor

### Mob effect storage changes

-   The game no longer uses numeric values when storing mob effects to a world (so, for example, `4` becomes `minecraft:mining_fatigue`)
-   Various mob effect fields have been renamed for consistency with new structures

#### Mob Effect Instance

This structure is used in many places, so its changes are described separately.

-   `Id` -> `id`, also changed from number to string id
-   `Ambient` -> `ambient`
-   `Amplifier` -> `amplifier`
-   `Duration` -> `duration`
-   `ShowParticles` -> `show_particles`
-   `ShowIcon` -> `show_icon`
-   `HiddenEffect` -> `hidden_effect`, also since it's mob effect instance, changes apply recursively
-   `FactorCalculationData` -> `factor_calculation_data`

#### Items

##### `potion`, `lingering_potion`, `splash_potion`, `tipped_arrow`

-   `CustomPotionEffects` -> `custom_potion_effects`, contents tranformed as a list of mob effect instances

##### `suspicous_stew`

-   `Effects` -> `effects`, for each entry:
    -   `EffectId` -> `id`, also changed from number to string id
    -   `EffectDuration` -> `duration`

#### Entities

##### `mooshroom`

-   Removed `EffectId` and `EffectDuration`
-   Added `stew_effects` with the same format as `suspicious_stew.effects` tag (i.e. list of effect id and duration)

##### `area_effect_cloud`

-   `Effects` -> `effects`, contents tranformed as a list of mob effect instances

##### `arrow`

-   `CustomPotionEffects` -> `custom_potion_effects`, contents tranformed as a list of mob effect instances

##### Players, Armor Stands and mobs

-   `ActiveEffects` -> `active_effects`, contents tranformed as a list of mob effect instances

#### Block Entities

`beacon`

-   `Primary` -> `primary_effect`, also changed from number to string id
-   `Secondary` -> `secondary_effect`, also changed from number to string id

### Loot Tables

-   Added `sequence` loot function
    -   Contains 1 field:
        -   `functions`: an array of sub-functions to run in sequence
    -   Can also be declared as an inline array without a type
        -   This matches the existing behavior where loot function JSON files can be declared as an array of composite functions
-   `all_of` predicates in loot tables can now be declared implicitly as an inline array without a type
    -   This similarly matches the existing behavior where loot predicate JSON files can be declared as an array of sub-predicates
-   Block or fluid state property matchers in loot conditions no longer accept non-string values
    -   Any number or boolean value in a property matcher must be quoted

## Data Pack Version 18

This data pack version removes the `execute if function` and `return run` functionality that existed for a time during the development of this version. Flaws with those commands (see bugs [MC-264595](https://bugs.mojang.com/browse/MC-264595), [MC-264699](https://bugs.mojang.com/browse/MC-264699) and [MC-264710](https://bugs.mojang.com/browse/MC-264710)) require some substantial changes to fix, which we do not want to make close to a release.

These commands will instead be reintroduced early in the next snapshot series when we can take the time to iterate on and test them together with pack makers.

-   Removed `execute if|unless function` command form
-   Removed `return run` command form
-   Numbers used as macro arguments are now always inserted without suffixes, regardless of numeric type
-   Added game rule `enderPearlsVanishOnDeath`, controlling whether thrown Ender Pearls vanish when the player that threw them dies (default `true`, which matches the existing behavior in previous versions)
-   Added damage type tag `always_kills_armor_stands` for damage types that should always fully kill an Armor Stand

![1.20.2 Experimental Image 4](https://launchercontent.mojang.com/images/1_20_2_experimental_4.jpg)

## Experimental Features

### Villager Trade Rebalance

The Experiments screen when creating a world now has an option to enable the Villager Trade Rebalance. When this option is selected, some Villager trades will change.

This experiment has no effect on normal worlds. You can find more information about Feature Toggles [here](https://www.minecraft.net/article/testing-new-minecraft-features/feature-toggles-java-edition).

#### Librarian Changes

-   Librarians from different biomes now sell different Enchanted Books
-   Each village biome has one special enchantment that is only available from Master Librarians with full XP
-   This means that players must visit all seven village biomes to get the full set of villager enchantments
-   There are two secret village biomes where villages do not generate
    -   A player must build these villages to access their trades!
-   Some enchantments have been removed from village trading and must be found in other ways

#### Cartographer Changes

-   Cartographers can now sell seven new Explorer Maps
    -   Five new maps show the way to five different types of village
    -   The other two new maps show the way to a Swamp Hut and a Jungle Temple
-   Cartographers from different biomes now sell a different range of maps

#### Wandering Trader Changes

-   Wandering Traders now have lower prices and have a higher amount of each item in stock
-   Wandering Traders now sell Logs
-   Wandering Traders can now buy many items, instead of only selling

#### Armorer Changes

-   Armorer from different biomes now sell different Armor with different enchantments
-   Buying Diamond Armor now requires a small amount of Diamonds as well as Emeralds
-   Many other Armorer trades have been updated

#### Structure Loot

Certain Enchanted Books now have a high chance of generating in some structures:

-   Ancient Cities: Mending
-   Mineshafts: Efficiency (I to V)
-   Pillager Outposts: Quick Charge (I to III)
-   Desert Temples: Unbreaking (I to III)
-   Jungle Temples: Unbreaking (I to III)

## Fixed bugs in 1.20.2

Around 200 bugs were fixed in this release. View the [list on the issue tracker](https://bugs.mojang.com/issues/?filter=27828).

---

It's barely been a week, and we're already releasing 1.20.1 for Minecraft: Java Edition. This hotfix update contains fixes for critical issues found in the 1.20 release.

Happy mining!

## Fixed bugs in 1.20.1

-   Fixed a disk permissions-related crash
-   [MC-263244](https://bugs.mojang.com/browse/MC-263244) The realms invitation icon that appears on the realms button in the main menu is displayed incorrectly
-   [MC-263245](https://bugs.mojang.com/browse/MC-263245) Buttons in the "Add Realm" interface within the realms menu no longer render
-   [MC-263296](https://bugs.mojang.com/browse/MC-263296) Game softlocks after cancelling joining a server
-   [MC-263340](https://bugs.mojang.com/browse/MC-263340) Incorrect Protochunk#setStatus call on chunk generate

---

What, is there something special happening today? Hold on, let me grab my calendar book from my chiseled bookshelf.

Oh, it's time for Trails & Tales! How could I forget? Time to equip your new brush and ride your camel off to new adventures!

## New Features

-   All features and changes from the "Update 1.20" experimental pack are now part of the game
-   Added Archaeology
-   Added Sniffer mob, Torchflowers and Pitcher Plants
-   Added Camel mob
-   Added Smithing Template items and redesigned the Smithing Table
    -   Added a new armor trimming system to visually customize your armor
    -   Changed how Netherite equipment is crafted
-   Added the Cherry Grove biome and Cherry Wood Set
-   Added the Bamboo Wood Set
-   Added the Chiseled Bookshelf block
-   Added Hanging Signs
-   Improved customization options for Signs
-   Added the Calibrated Sculk Sensor block
-   Vibration resonance functionality has been added to Blocks of Amethyst
-   Added playable mob sounds with Mob Heads on Note Blocks
-   Added Piglin Mob Head
-   New music tracks added to Cherry Groves, Desert, Jungle, Badlands, and Flower Forest biomes
-   New Trails & Tales Advancements
-   Added support for Windows Aarch64/ARM64

### Archaeology

-   Added craftable Brush item
-   Added Suspicious Sand and Suspicious Gravel
    -   Suspicious Sand can be found in Desert Temples, Desert Wells and Warm Ocean Ruins
    -   Suspicious Gravel can be found in Cold Ocean Ruins and Trail Ruins
    -   These fragile blocks are hard to spot and easy to destroy, so be careful!
    -   Brushing Suspicious Sand or Suspicious Gravel with a Brush will extract objects that were buried long ago
-   Added the Trail Ruins, a buried structure from a lost culture
    -   Four types of Armor Trim Templates can be found here
    -   Trail Ruins can be found in Taigas, Snowy Taigas, all Old Growth forest biomes and Jungles
    -   A new music disc can be found by brushing suspicious blocks in this structure
        -   When put in a Jukebox, "Relic" by Aaron Cherof is played
-   Added Pottery Sherds
    -   Pottery Sherds have pictures on them
    -   A total of 20 sherd have been distributed between the 5 Archaeology sites: Desert Wells, Desert Temples, Cold Ocean Ruins, Warm Ocean Ruins, and Trail Ruins
    -   They cannot be crafted, and are only found by brushing Suspicious Sand or Suspicious Gravel

#### Decorated Pots

-   Crafting four Pottery Sherds together will create a Decorated Pot with a picture on each side
-   Brick items can be used instead of Pottery Sherds in the Decorated Pot recipe
    -   The sides that were made from Brick items will not have pictures
-   Smash a Decorated Pot with any block-breaking tool to break it apart and get the Pottery Sherds back
    -   Hitting the pot with bare hands, silk touch tools, or any other item will drop an intact pot instead
-   Crafted Decorated Pots with at least one pattern have a hover tooltip displaying the Sherd & Brick ingredients

### Sniffer

-   The Sniffer is the mob vote winner of Minecraft Live 2022
-   Sniffers are passive, friendly mobs
-   Sniffers sniff the air and occasionally dig for seeds, which produces a Torchflower Seed or a Pitcher Pod item
-   Sniffers can only dig grass and dirt-like blocks
-   Sniffers can be tempted by, and bred with Torchflowers Seeds

#### Sniffer Egg

-   Can be found by brushing the Suspicious Sand of Warm Ocean Ruins
-   When two Sniffers breed they do not immediately spawn a Snifflet; instead, a Sniffer Egg is dropped
-   When placed in the world, the Sniffer Egg will hatch after some time
    -   When placed on Moss, the Egg will hatch in approximately 10 minutes
    -   On all other blocks, it will hatch in approximately 20 minutes

#### Torchflowers

-   The Sniffer can occasionally sniff up a Torchflowers seed, and it can be used to breed two Sniffers
-   The Torchflower seed can be planted on Farmland and grows into a Torchflower
-   The full-grown flower can be harvested and replanted
-   The Torchflower can be crafted into Orange Dye

#### Pitcher Plant

-   The Sniffer can occasionally sniff up a Pitcher Pod item
-   The Pitcher Pod, when planted on Farmland, grows into a Pitcher Crop
-   The Pitcher Crop has five growth stages
-   Once fully grown, the Pitcher Crop can be harvested, yielding a two-block-tall Pitcher Plant
-   The Pitcher Plant can be crafted into Cyan Dye

### Camel

-   Camels can be equipped with a Saddle and ridden by two players
-   Camels spawn naturally when Desert Villages generate
-   Camels can be tempted by holding Cactus
-   Feed Cactus to Camels to breed them
-   Camels are tall
    -   Most hostile mobs will not be able to reach you when you are on a Camel
    -   They can walk over Fences and Walls
-   Camels randomly sit down
    -   While sitting, it is difficult to convince them to move
-   Camels can either walk slowly or sprint quickly
-   They can also dash forward but will lose stamina for a while when doing so

### Smithing

-   Smithing Tables have been redesigned into a workstation for physical equipment upgrades and modifications
-   Alongside slots for combining a piece of equipment and materials, there is now a required slot for an item type called Smithing Template
-   Smithing Templates define what type of upgrade you will be making to a piece of equipment
    -   It specifies both what type of items you can upgrade, and which ingredients are valid to customize the upgrade
    -   There are currently two categories of Smithing Templates: Armor Trim and Netherite Upgrade
-   Smithing Templates are consumed when used to upgrade an item in the Smithing Table
-   You can craft a copy of a Smithing Template in the Crafting Table with 7 diamonds + 1 block of material that the template is made out of + 1 smithing template, which will output 2 of the same Smithing Template

#### Netherite Equipment

-   Netherite equipment crafting now also requires a Netherite Upgrade Smithing Template
-   Netherite Upgrade Smithing Templates can be found randomly in all Bastion Remnant chests
    -   Every Treasure Room Bastion Remnant will contain 2 Smithing Templates
-   This change was made for a variety of reasons:
    -   Increase the time players utilize Diamond equipment before Netherite
    -   Make Netherite equipment more significant achievement in the game's progression
    -   Adapt Netherite more naturally into the new Smithing Table crafting system

#### Armor Trims

-   You can now visually customize your armor with a variety of unique trims at the Smithing Table
-   Armor trims are purely visual with no gameplay benefits
-   Armor trims can be applied to Helmets, Chestplates, Leggings and Boots
    -   All trim patterns are visually the same on an armor's item icon, but the color will still change based on the trim material
    -   To check which trim pattern a piece of armor has, you can hover over it in the inventory
-   Armor Trim Smithing Templates can be found all throughout the world, and each of the following structures contain their own unique Smithing Templates:
    -   Trail Ruins: Wayfinder, Raiser, Shaper, and Host Armor Trims
    -   Pillager Outpost: Sentry Armor Trim
    -   Desert Pyramid: Dune Armor Trim
    -   Shipwreck: Coast Armor Trim
    -   Jungle Temple: Wild Armor Trim
    -   Ocean Monument: Tide Armor Trim
    -   Ancient City: Ward and Silence Armor Trims
    -   Woodland Mansion: Vex Armor Trim
    -   Nether Fortress: Rib Armor Trim
    -   Bastion Remnant: Snout Armor Trim
    -   Stronghold: Eye Armor Trim
    -   End City: Spire Armor Trim
-   Smithing Templates are found in chests in their respective structure
    -   Trail Ruins have no chests, Smithing Templates are instead found by brushing Suspicious Gravel
    -   The Ocean Monument has no chests, Elder Guardians sometimes instead drop a Smithing Template upon death
-   Some Armor Trim Smithing Templates are rarer than others, so be on the lookout for them to impress your friends!
-   An armor trim has two properties: a pattern and a material
    -   The pattern is defined by the Smithing Template used to apply the trim, and represents the visual pattern of the trim
    -   The material is defined by which ingredient you used to apply the trim, and controls the color of the trim
-   The viable ingredients you can use to define the color of your armor trim are the following:
    -   Iron, Copper, Gold, Lapis, Emerald, Diamond, Netherite, Redstone, Amethyst, Quartz

### Cherry Groves

-   Added a new Cherry Grove biome, with pretty cherry blossom trees
    -   The biome can be found in the mountains, in similar places as Meadows
-   Added a new Cherry wood set, with all the corresponding wooden things you can craft from it
-   Pink particles fall from beneath Cherry Leaves
-   Added a new Pink Petals block with lots of pink flowers on the ground
    -   Each Pink Petal block can contain up to 4 petals
    -   Using Bone Meal on it increases the number of petals
    -   Placing a Pink Petal into an already placed block increases the number of petals
    -   Drops the number of petals in the block when mined

### Bamboo Wood Set

-   Added a new Bamboo wood set, with all the corresponding wooden things you can craft from it
-   Block of Bamboo can be crafted from 9 Bamboo and can be stripped like other wood logs
-   Bamboo Planks crafted from Block of Bamboo yield only 2 planks compared to 4 for wood logs
-   Added a new "Mosaic" plank variant that is unique to Bamboo called the Bamboo Mosaic
    -   It can be crafted with 1x2 Bamboo Slabs in a vertical strip
    -   You can craft Stair and Slab variants of Bamboo Mosaic
    -   Bamboo Mosaic blocks cannot be used as a crafting ingredient where other wooden blocks are used, but they can be used as fuel
-   Added a unique Bamboo Raft and Bamboo Chest Raft which can be crafted like normal boats, but with Bamboo Planks
    -   They function the same as ordinary boats, but have a unique look to them

### Chiseled Bookshelf

-   A new, chiseled variation of the Bookshelf
-   Crafted with 6 planks and 3 wooden slabs
-   Can store Books, Book and Quills, Written Books, Enchanted Books, and Knowledge Books
    -   Holds up to 6 books
    -   These can be added or removed from any slot by targeting the specific slot
-   The Comparator signal strength corresponds to the number of the last book that was inserted or removed
    -   The numbering of book slots starts from 1 at the top-left, and increments from left-to-right
-   Works with Hoppers

### Hanging Signs

-   Hanging Signs are a more expensive version of normal Signs
    -   Crafted with 2 chains and 6 stripped logs of your preferred wood type
    -   Crafting results in 6 Hanging Signs
-   Can be hung up in the following ways:
    -   Underneath a block that can provide support in the center, like a full block or a fence
    -   Attached to the solid side of a block
    -   Attached to the side or underneath another Hanging Sign
-   Unlike normal Signs, they cannot be placed directly on the ground without support from the side or above
    -   However, Hanging Signs that have a horizontal bar will not pop when the supporting block is removed

### Signs

The following changes have been made for both Signs and Hanging Signs.

-   Sign text can now be edited after being placed in the world
    -   This can be done by interacting with the Sign
    -   Signs with non-text chat components can not be edited
-   Both sides of the Sign can now have separate text and colors, allowing for further customization options
    -   By default, a Sign will prompt you to input the front side's text when placed
    -   To apply text to the back-side, you must walk to the other side and interact with that face to edit it
-   Signs can now also be waxed with Honeycomb, preventing any further edits to its text
-   Opening the sign edit screen in singleplayer no longer pauses the game

### Calibrated Sculk Sensors

-   A new variant of Sculk Sensors that allows you to filter vibrations based on their frequency level
-   They are not found naturally and can only be crafted with 1 Sculk Sensor and 3 Amethyst Shards in the Crafting Table
-   One side of the Calibrated Sculk Sensor can receive a redstone signal as input
    -   The strength of that redstone signal is the only vibration frequency the Sculk Sensor will listen to
-   They have a combined active and cooldown phase that lasts 20 game ticks
    -   They output their redstone signal for the first 10 game ticks
-   They can detect vibrations up to 16 blocks away

### Vibration Resonance

-   Blocks of Amethyst have a new behavior when placed adjacent to Sculk Sensors
    -   If that Sculk Sensor receives a vibration, the Block of Amethyst will re-emit its frequency as a separate vibration at its location
-   This behavior is called Vibration Resonance, and allows players to move vibration frequencies across long distances without having to recreate the vibration naturally

### Playable Mob Sounds

-   When placing a Mob Head on a Note Block, that Note Block will now play one of the ambient sounds of that mob when played by a player or powered by Redstone
-   Mob Heads can be placed on top of Note Blocks without sneaking

### Piglin Mob Head

-   Piglins will now drop their heads when killed by a charged Creeper
-   Placing the Piglin head on a Note Block will play one of the Piglin's ambient sounds
-   The Piglin head will flap its ears when powered by Redstone, or when worn by a player while walking

### New Music

-   Added the following new music tracks by Aaron Cherof to Cherry Groves, Desert, Jungle, Badlands, and Flower Forest biomes:
    -   A Familiar Room
    -   Bromeliad
    -   Crescent Dunes
    -   Echo in the Wind
-   Added a new music disc with the track "Relic" by Aaron Cherof, found in Trail Ruins

### Windows Aarch64/ARM64 support

-   Minecraft Java Edition is now fully supported on Windows devices using an Aarch64/ARM64 architecture, such as the Windows Surface Pro X

### Advancements

#### New Husbandry Advancements

-   `Smells Interesting` : Obtain a Sniffer Egg
-   `Little Sniffs` : Feed a Snifflet (requires `Smells interesting`)
-   `Planting the Past` : Plant any Sniffer seed (requires `Little sniffs`)

#### New Adventure Advancements

-   `Respecting the Remnants` : Brush a Suspicious block to obtain a Pottery Sherd
-   `Careful Restoration` : Make a Decorated Pot out of 4 Pottery Sherds (requires `Respecting the Remnants`)
-   `Crafting a New Look` : Craft a trimmed armor at a Smithing Table
-   `Smithing with Style` : Apply these Trim Smithing Templates at least once: Spire, Snout, Rib, Ward, Silence, Vex, Tide, Wayfinder (requires `Crafting a New Look`)
-   `The Power of Books` : Read the power signal of a Chiseled Bookshelf using a Comparator

## Changes

-   Changes to Sculk Sensor block behaviors
-   Vibration frequencies of many actions in the game have been tweaked
-   Colored Wool, Carpets and Beds can now be dyed to any other color
-   Replaceable blocks no longer block the connection between enchanting tables and bookshelves
-   Wither effect particle and Potion of Slow Falling color have been adjusted to make them more distinguishable
-   Updated step sounds
-   Updated Advancements
-   The main menu background is now a Trails & Tales panorama
-   Updated the Minecraft Java Edition logo
-   Updated the Minecraft Realms logo
-   The game's application icon has been updated
    -   This will be a Grass Block in release versions, and a Dirt Block in snapshot versions
-   GUI can be scaled on the Video Settings screen by holding `Ctrl` and scrolling the mouse wheel
-   Updated the credits
    -   Added the ability to scroll upwards by pressing the `up arrow` key
-   The game will now display a message box on startup if user enabled text-to-speech functionality, but it is not available
-   Removed Herobrine

### Sculk Changes

-   If a vibration is scheduled to be received by a Sculk Sensor or Sculk Shrieker, they will stay queued until all adjacent chunks are loaded and ticking
    -   Prevents vibration resonance setups from breaking when unloading their chunks from a distance
-   Waterlogging a Sculk Shrieker will now silence their shriek sounds
-   Sculk Sensors' default redstone output has been modified to be more reliable for distance calculations
-   Sculk Sensors and Calibrated Sculk Sensors now strongly power the block they are placed on
-   Both types of Sculk Sensors now stay in their Cooldown phase for 10 ticks, with other phase timings being adjusted to compensate

#### Sculk Sensor Phases

-   Sculk Sensors and Calibrated Sculk Sensors have three phases: Inactive, Active and Cooldown
-   The default phase is Inactive
    -   This phase lasts indefinitely until the block receives a vibration
    -   During this phase, the block is able to listen to nearby vibrations until one has been scheduled
-   When a scheduled vibration is received, the block switches to the Active phase
    -   This phase lasts 30 game ticks for Sculk Sensors, and 10 game ticks for Calibrated Sculk Sensors
    -   During this phase, the block stops listening to nearby vibrations, wiggles its tendrils and emits a redstone signal and light
-   After the Active phase has finished, the block switches to a Cooldown phase
    -   This phase lasts for 10 game ticks
    -   During this phase, the block keeps wiggling its tendrils, but no longer emits a redstone signal nor light
    -   Finally, once this phase is finished, the block will switch back to the Inactive phase
-   Previously, some of these phases had different timing values:
    -   Active: 40 game ticks for Sculk Sensors and 20 game ticks for Calibrated Sculk Sensors
    -   Cooldown: 1 game tick for both types of Sculk Sensors
-   These phase timings were tweaked so that it is less common for activated contraptions to recursively activate the Sculk Sensor that powered them

#### Vibration Frequencies

In preparation for the Calibrated Sculk Sensor, vibration frequencies have been greatly simplified to prevent unwanted interference. The following are category descriptions for each frequency and the expected events that they correspond to:

1.  Movement in any medium (land, water and air)
2.  Landing on any surface (land or water)
3.  Item interactions
4.  Gliding with an elytra or unique mob actions (Ravager roar, Wolf shaking, etc)
5.  Dismounting a mob or equipping gear
6.  Mounting a mob or interacting with a mob
7.  Mobs and players getting damaged
8.  Consuming items (drinking and eating)
9.  Blocks 'deactivating' (door close, chest close, button unpress, etc)
10.  Blocks 'activating' (door open, chest open, button press, etc)
11.  Blocks changing (cauldron water level rising, adding food to campfire, etc.)
12.  Blocks being destroyed
13.  Blocks being placed
14.  Mobs and players teleporting or spawning
15.  Mobs and players dying or an explosion

### Step Sounds

-   Walking on a block will now always play a step sound
    -   It was previously not the case if you were walking along the edge of a block with air or fluid besides it
-   Walking on the ocean floor will produce a step sound for the block you are walking on at a lower volume and pitch
-   When walking on Carpets, Snow, Nether Sprouts, Warped Roots, and Crimson Roots, a combination of step sounds will be played
    -   The top-most block you are walking on is played as normal
    -   The block underneath is played at a lower volume and pitch

### Advancements

-   Breeding Camels and Sniffers now count for "The Parrots and the Bats" and are now required for "Two by Two"
-   Hanging Signs now count for "Glow and Behold"
-   Visiting a Cherry Grove is now required for "Adventuring Time"

## Technical Changes

-   Improved performance of the light engine
-   The data pack version is now 15, accounting for sign data format, item display orientation and advancement changes
-   Removed `update_1_20` feature flag and built-in datapack - features are no longer experimental
-   Added a `return` command
-   Tweaked display entity interpolation
-   Added a `capped` rule structure processor that limits the number of replaced blocks for a structure piece to a configured maximum
-   Configuring block entity fields in a `rule` processor rule is now delegated to a referenced `block_entity_modifier` instead of the previously fixed `output_nbt` configuration
-   Random sequences for loot tables are now deterministic
-   Added a `reference` loot table function
-   Loot table condition/predicate changes:
    -   Renamed `alternative` to `any_of`
    -   Added `all_of`
-   Advancement trigger changes:
    -   Added `recipe_crafted`
    -   Changed format of `placed_block`, `item_used_on_block` and `allay_drop_item_on_block` triggers
-   Ingredients in array form are now also allowed in `smithing_trim` and `smithing_transform` recipes on fields `template`, `base` and `addition`
    -   Those fields also allow empty arrays, which signalize that slot needs to be left empty
-   Added new damage types: `outside_border` and `generic_kill`
-   Game events have changed vibration frequency and some have been removed
-   The resource pack version is now 15, accounting for the font and credits update
    -   Updated the sprite layout of `minecraft.png`
    -   Removed the overriding `minecraft.png` from the Programmer Art resource pack
    -   Updated the sprite layout of `invite_icon.png`
    -   `legacy_unicode` glyph provider has been removed
    -   Bitmaps used by `uniform` font have been removed
    -   `uniform` font has been updated to use Unifont 15.0.06
        -   That changes shape of multiple characters, while also adding support for new ones
        -   Combining characters no longer include circle overlayed over them (so M◌̆ now renders as M ̆)
    -   Added second level of organization of entries in credits.json on top of `titles`, called `disciplines`
-   Font textures are included in debug texture dump (F3 + S)
-   Added new font glyph providers: `unihex` and `reference`, removed `legacy_unicode`
-   Added support for Quick Play
-   Removed the `server` & `port` commandline arguments as their functionality has been replaced by Quick Play
-   Updates to telemetry
-   Changed encoding of `server.properties` to UTF-8
-   Added validation for symbolic links in world saves

### Light Engine

The light engine is responsible for calculating the brightness of each block in the world. Light is calculated during world generation as well as updated when a block is changed in the world. Behavior of the light engine has not been changed.

-   The performance of calculating light has been improved
    -   Reduces one source of lag spikes when crossing chunk borders
    -   Improves FPS in situations when a lot of light updates occur
    -   Improves how quickly chunks can be generated

### Commands

#### `return`

The `return` command can be used to control execution flow inside functions and change their return value. Effects:

-   Remaining separate top-level commands in the currently executing function (if any) are skipped
-   The result value of the `function` command that triggered the function is changed from the number of commands executed to `value`
-   The result value of the `return` command is also `value`

Syntax:

`return <value>`

Parameters:

-   `value`: An integer return value

#### `data`

-   `string` data sources now accept negative boundaries, which are interpreted as index counted from the end of the string

### Display Entity

#### Interpolation Changes

-   Previous values are always discarded if `interpolation_duration` is `0`
-   Made sure that render properties are applied at the same time (so `block_state` is applied at the same time as transformation, i.e. at the next tick after receiving an update)
-   Display entities are not rendered until their initial data is received. That means display entities might not be shown on the first tick.
-   Note: due to how the game handles updates, changes to entities made after summoning might be delivered to clients within a later tick

#### Rendering Changes

-   `item_display` items have been rotated 180 degrees around the Y axis to better match the transformation that is applied when rendering items on an Armor Stand head and in Item Frames
    -   For reference, the order of transformations applied to model (starting from innermost) is `item_transform`, rotate Y 180, `transformation` field, entity orientation (billboard option + `Rotation` field + `Pos` field)

### Structure post-processors

#### Capped post-processor

-   A `capped` post-processor has been added which can limit how many blocks a delegated post-processor randomly transform in a structure
-   This can be used to configure a structure piece to have an exact amount of specific blocks, instead of using random distribution
-   The `capped` post-processor has following required parameters:
    -   `delegate` A post-processor which performs the actual block transformation
    -   `limit` Maximum amount of blocks that the delegated post-processor can transform
        -   The blocks inside a structure are all randomly passed to the delegated post-processor until it has transformed the limited amount
        -   Either constant or random number generator sampled during post-processing

#### Rule post-processor block entity configuration

-   Previously a rule could specify an optional fixed `output_nbt` which would be added to the processed output block entity
-   This field has now been changed to reference a `block_entity_modifier`
-   Existing `block_entity_modifier`'s are:
    -   `passthrough` Retains existing fields on the block entity
        -   This is the default if no `block_entity_modifier` is specified
    -   `append_static` Similar to previous `output_nbt` this provides fixed fields to add to the block entity
        -   A minor change is that this modifier appends configured fields to the processed block instead of replacing existing fields
    -   `clear` Removes any existing fields on the block entity
    -   `append_loot` Appends a loot table and seed to the block entity through required parameter:
        -   `loot_table` Referenced loot table to add to block entity as `LootTable` field
        -   Field `LootTableSeed` is also added to the block entity using random seeded by block position

### Loot Tables

#### Random Sequences

The game now uses named random sequences to deterministically produce loot for loot tables. Each random sequence produces a unique sequence based on the world seed and sequence ID, which means a loot table will produce the same results when ran with the same parameters in the same world.

The ID of the random sequence to use for a loot table is specified in a new optional field called `random_sequence`. If no sequence name is given, loot is drawn using a non-deterministic random source.

#### `reference`

New function `reference` allows functions to call sub-functions (similar to `reference` condition).

Fields:

-   `name` - location of function to call

#### `any_of`/`all_of`

-   Loot condition `alternative` has been renamed to `any_of`
-   Added new loot condition `all_of` that passes only when all sub-conditions pass
    -   Has the same syntax as `any_of`

### Advancements

#### New Triggers

##### `recipe_crafted`

-   Triggered when crafting a recipe
-   Conditions:
    -   `recipe_id` - the resource location of the recipe crafted
    -   `ingredients` - an array of predicates for the item stacks used in the recipe
        -   A single item stack can only be used to fulfill one predicate
        -   Each predicate needs to be fulfilled to trigger the advancement. This allows for separation between recipes that have same identifier but use different ingredients.
        -   This field is optional. When not provided, or left empty, only the `recipe_id` will dictate the success of the trigger

#### Changed Triggers

-   All fields in `placed_block`, `item_used_on_block` and `allay_drop_item_on_block` have been collapsed into a single `location` field
-   The new `location` is similar to the `player` field - it is a list of loot conditions/predicates
-   All conditions in this list must match for a trigger to run
-   Conditions are evaluated in a new loot context called `advancement_location`. It has access to:
    -   Player as `this` entity
    -   Position of the placed block
    -   Block state of the placed/interacted block
    -   Held/used item as "tool"
-   Migration guide:
    -   Contents of old `location` field should be migrated to `location_check` condition
    -   Contents of `item` field should be migrated to `match_tool` condition
    -   Contents of `block` + `state` fields should be migrated to `block_state_property` condition

**Example** (from `make_a_sign_glow` advancement):

Before:

    {
        "conditions": {
            "item": {
                "items": [
                    "minecraft:glow_ink_sac"
                ]
            },
            "location": {
                "block": {
                    "tag": "minecraft:all_signs"
                }
            }
        },
        "trigger": "minecraft:item_used_on_block"
    }
    

After:

    {
        "conditions": {
            "location": [
                {
                    "condition": "minecraft:match_tool",
                    "predicate": {
                        "items": [
                            "minecraft:glow_ink_sac"
                        ]
                    }
                },
                {
                    "condition": "minecraft:location_check",
                    "predicate": {
                        "block": {
                            "tag": "minecraft:all_signs"
                        }
                    }
                }
            ]
        },
        "trigger": "minecraft:item_used_on_block"
    }
    

### Damage Types

-   Players outside the world border are now hurt by the damage type `outside_border` instead of `in_wall`
-   Forcibly removing an entity using the `/kill` command now uses damage type `generic_kill` instead of `out_of_world`

### Tags

#### Block Tags

-   Removed `replaceable_plants` since it was only used as a subset of the blocks for the tag above, and not as universally
-   Added `replaceable_by_trees` to better express blocks that are replaced when the tree grows through them
-   Added `replaceable` with all the blocks that can be replaced
    -   This tag only represents the internal state of the game, changing this tag does not make blocks replaceable
-   Added `sword_efficient` to represent blocks that are broken 50% faster by a sword than normal
-   Added `maintains_farmland` to represent which blocks will not cause farmland to be converted into dirt due to drying out when placed on top of it
-   Added `combination_step_sound_blocks` that controls which blocks produce a combination of step sounds
-   Added `enchantment_power_provider` to control which blocks increase the level of an Enchantment Table
-   Added `enchantment_power_transmitter` to control which blocks are allowed between an Enchantment Table and a Bookshelf (or other Power Transmitter)
-   Added `vibration_resonators` to control which blocks transmit vibration signals when placed next to Sculk Sensors
-   Added `trail_ruins_replaceable` for blocks that Trail Ruins can replace when generating
-   Added `sniffer_diggable_block` to control which blocks Sniffers can dig
-   Added `sniffer_egg_hatch_boost` to that control on which blocks Sniffer Eggs hatch twice as fast
-   Added `ceiling_hanging_signs`
-   Added `wall_hanging_signs`
-   Added `all_hanging_signs`
-   Added `stone_buttons` block tag
-   Added `cherry_logs` block tag
-   Added `bamboo_blocks` block tag

#### Item Tags

-   Added `villager_plantable_seeds` to represent which kind of seeds Villagers can farm
-   Added `noteblock_top_instruments` to control which blocks can be placed on top of Note Blocks without sneaking
-   Added `breaks_decorated_pots` to control which tools can break Decorated Pots
-   Added `decorated_pot_ingredients`
-   Added `decorated_pot_sherds`
-   Added `sniffer_food`
-   Added `trimmable_armor`
-   Added `trim_materials`
-   Added `trim_templates`
-   Added `stone_buttons` item tag
-   Added `cherry_logs` item tag
-   Added `bamboo_blocks` item tag

#### Biome Tags

-   Added `has_structure/trail_ruins`

### Game Events

-   Removed `piston_contract` game event in favor of `block_deactivate`
-   Removed `piston_extend` and `dispense_fail` game events in favor of `block_activate`
-   Many game events have new vibration frequencies:
    -   1: `step`, `swim`, `flap`
    -   2: `projectile_land`, `hit_ground`, `splash`
    -   3: `item_interact_finish`, `projectile_shoot`, `instrument_play`
    -   4: `entity_roar`, `entity_shake`, `elytra_glide`
    -   5: `entity_dismount`, `equip`
    -   6: `entity_mount`, `entity_interact`, `shear`
    -   7: `entity_damage`
    -   8: `drink`, `eat`
    -   9: `container_close`, `block_close`, `block_deactivate`, `block_detach`
    -   10: `container_open`, `block_open`, `block_activate`, `block_attach`, `prime_fuse`, `note_block_play`
    -   11: `block_change`
    -   12: `block_destroy`, `fluid_pickup`
    -   13: `block_place`, `fluid_place`
    -   14: `entity_place`, `lightning_strike`, `teleport`
    -   15: `entity_die`, `explode`

### Fonts

#### New `unihex` Glyph Provider

-   New glyph provider for reading Unifont HEX files
    -   HEX format describes font glyphs using a bitmap
        -   The height of every glyph is 16 pixels
        -   The width of glyph can be 8, 16, 24 or 32 pixels
    -   Every line is made of two hexadecimal numbers separated by `:`
    -   The first value describes a codepoint - it must have 4, 5 or 6 hex digits
    -   The second value describes the glyph as a stream of bits, line by line
-   When rendering, empty columns on left and right side of glyphs are removed
    -   Custom glyph widths can be set with `size_overrides`
-   This provider requires two fields:
    -   `hex_file` - path to ZIP archive containing one or more `*.hex` files (files in archive with different extensions are ignored)
    -   `size_overrides` - list of codepoint ranges that should have width different from auto-detected (based on empty space in glyph). Fields:
        -   `from`, `to` - start and end of codepoint range (inclusive)
        -   `left`, `right` - integers describing the position of the left-most and right-most columns of the glyph in range
            -   Any bits in columns outside of this range will be discarded

#### New `reference` Glyph Provider

-   New glyph provider that can be used to include providers from other fonts
    -   Providers are guaranteed to be loaded only once, no matter how many times they are included
-   Provider has one field `id`, that describes another font to be included in the currently loaded one
    -   Inclusion is performed after all fonts are loaded, so it will include all providers for a given font defined in all datapacks

#### Removed `legacy_unicode` Glyph Provider

-   The `legacy_unicode` glyph provider has been removed
-   This functionality has been replaced by the `unihex` provider

### Quick Play

-   Added support for four new command line arguments that allow the game to be launched directly into a world
-   `quickPlayPath` takes a specified path for logging (relative to the run directory)
    -   If a path is provided the following will be logged upon joining a world:
        -   `type`: is either `singleplayer`, `multiplayer`, or `realms`
        -   `identifier`: represents the world you want to join
            -   For singleplayer, the folder name of the world
            -   For multiplayer, the IP address of the server
            -   For realms, the Realms ID
        -   `port`: represents the server port and is only logged for multiplayer
        -   `name`: The name of the world
        -   `gamemode`: The gamemode of the world
        -   `lastPlayedTime`: The time you joined the world
    -   Example:
        -   `--quickPlayPath "quickPlay/log.json"` will resolve into `.minecraft/quickPlay/log.json`
-   `quickPlaySingleplayer`, `quickPlayMultiplayer` and `quickPlayRealms` all take their respective `identifier`
    -   If one of these arguments is provided, the game will try to launch directly into the given world
    -   Examples:
        -   `--quickPlaySingleplayer "New World"`
        -   `--quickPlayMultiplayer "localhost:25565"`
        -   `--quickPlayRealms "1234"`

### Telemetry

#### All Events

-   Added new property: `launcher_name`
    -   This is set based on the `minecraft.launcher.brand` system property
    -   This will help us troubleshoot game launch related bugs more effectively, as we will be able to see whether the issue originated in the Minecraft launcher or a third-party program

#### Updated Required Events

-   `world_loaded`
    -   Added new property: `realms_map_content`
        -   When loading into a Realms Map Content world (Minigame), the `world_loaded` event will receive the name of that map
        -   This is to help us understand how Java Realms players interact with Java Realms adventure or minimap content

#### New Optional Events

-   `advancement_made`
    -   This event is triggered when a player completes an advancement, and allows us to see the advancement ID and the time when the advancement was completed
    -   This helps us as a studio understand player progress and limits, which informs our game design
-   `game_load_times`
    -   This event is triggered when the game client is loaded
    -   Includes the time it took for the client to load
    -   This is so that we can work on improving and reducing the time it takes to load the game client

### `server.properties`

-   File is now read in UTF-8 initially, with previous encoding (ISO 8859-1/Latin 1) as a fallback
-   File is now written with UTF-8 encoding

### Symbolic Link Validation

To improve safety, the game will now detect symbolic links used inside world directory. For a detailed explanation, check our [help article](https://aka.ms/MinecraftSymLinks).

-   If the target of a symbolic link is not on the user-configured allow-list, the game will not proceed with loading the world
    -   Note: the world directory itself can still be linked
-   The list of allowed symbolic link targets is stored in file `allowed_symlinks.txt` in the client or server top directory
-   The file consists of entries (one per line) with following formats allowed:
    -   Lines starting with `#` are comments and are ignored
    -   `[type]pattern`, where `type` can be `glob`, `regex` or `prefix`
        -   `prefix` matches start of path with given pattern (so for `/test` paths `/test`, `/test/` and `/test/foo.txt` would match)
        -   `regex` matches regular expression against whole path
        -   `glob` uses OS-specific path matching mechanism (for example `*.txt` would usually match files with `txt` extension)
        -   Note: paths will use OS-specific separators
    -   `pattern`, which uses default `prefix` type

## Fixed bugs in 1.20

Around 250 bugs were fixed in this release. View the [list on the issue tracker](https://bugs.mojang.com/issues/?filter=27705).

---

We're now releasing 1.19.4 for Minecraft: Java Edition. This release comes with improvements to horse breeding and jukeboxes, new visuals for potions, new accessibility features and many new technical capabilities like the damage and ride commands and display and interaction entities.

The update\_1\_20 experiment has also been updated with a first look at the Sniffer, Archaeology, Armor Trims and Cherry Grove features.

## Changes

-   Updated Horse Breeding
-   Jukeboxes have changed to be at parity with Bedrock
-   Interacting with armor or elytra items in-hand will now swap them with equipped gear
-   The camera tilt when hurt is now based on the direction of incoming damage
-   Potions colors have been adjusted to make different types of potions more distinguishable
-   Potions no longer have an enchantment glint due to it obscuring the color of the potion contents
-   Enchantment glint on items and armor is now more subtle
-   Armor Stands now preserve custom names when placed and broken
-   Vexes now use a separate charging animation when empty-handed
-   Tweaks to recipe unlocking to make discovering vital crafting recipes easier for new players
-   Updated the Create New World screen
-   New accessibility options and improvements
-   Updated the Realms screen to be more in line with the Singleplayer and Multiplayer screens
-   Added a notification system for Realms to tell you about important information about your Realm
-   Added "Credits & Attribution" button in the Options menu

### Horses, Donkeys and Llamas

The speed, jump height and health of a baby is now a variation of the average of the parents' attributes, rather than being biased towards the average possible value.

This change makes horse breeding a viable way of getting great horses, if a player starts with good parents and puts in enough time and Golden Carrots.

### Jukebox

-   Emits a note particle above it while playing a music disc
-   While playing a music disc, it will emit a redstone signal of 15
-   Droppers and hoppers can now interact with it

### Creative menu

-   Added painting variants to the creative menu
-   Paintings with a pre-defined variant will now display the author and title in the item description when hovered over

### Recipe unlocking

-   The Crafting Table recipe is unlocked immediately on creating a new world
-   The Crossbow recipe is no longer unlocked by sticks
-   The Soul Campfire recipe is no longer unlocked by sticks

### Updated Create New World Screen

-   The screen is now organized into three tabs
    -   The Game-Tab allows to set the world name, Gamemode, Difficulty and whether to allow cheats
    -   The World-Tab allows to set the World-Type and Seed, and to toggle the generation of structures and the bonus chest
    -   The More-Tab provides access to the Game Rules and DataPack Selection Screen
-   Tabs can be switched with the keyboard by pressing Ctrl+Tab and Ctrl+Shift+Tab
-   Specific tabs can also be navigated to by pressing Ctrl+Tab Number
    -   For example, Ctrl+2 navigates to the second tab
-   Removed the Import Settings button and the corresponding Export Settings button in the Edit World Screen
-   Added a screen to easily enable/disable experimental features
    -   The screen can always be found under the More-tab
    -   In snapshots, a shortcut button can be found under the Game-tab

### Accessibility

-   Added an accessibility onboarding screen for players launching the game for the first time
-   Auto-Jump is now off by default
-   Added arrow key navigation
-   Added high contrast resource pack
-   The resource pack screen is now keyboard-navigatable
-   Changed how tooltips in the menu UI are positioned so buttons are still readable
-   Added a tooltip in the key binds screen that specifies which key binds are conflicting
-   Added a "Damage Tilt" accessibility option that controls the amount the camera shakes when being hurt
-   Added two new options in the accessibility menu for adjusting the speed and transparency of enchantment glints
-   Added a "Notification Time" accessibility option that changes how long notifications such as unlocked recipes, advancements, subtitles and selected item names are visible for

#### Arrow key navigation

-   Menu screens can now be navigated by using the arrow keys
-   When navigating with arrow keys, sliders need to be activated by pressing Enter or Space to start changing the value

#### High contrast resource pack

-   Added a built-in resource pack that enhances the contrast of UI elements
-   Added a new option in the Accessibility menu that enables the high contrast resource pack
-   This only affects the menu UIs for now, but we’ll be looking to bring this to gameplay UIs in the future as well

## Technical Changes

-   The data pack version is now 12
-   The resource pack version is now 13
-   Added a group of entities to display items, blocks and text
-   Added entities to detect interactions and attacks
-   Added data-driven damage types
-   Added a `damage` command for applying damage to entities
-   Added `ride` command to mount and dismount entities
-   The `clone` command now supports cloning to and from different dimensions
-   A new `string` source is now available for the `data modify` command
-   New `execute` sub-commands: `if dimension`, `if loaded`, `on`, `positioned over`, `summon`
-   Added a new type of atlas configuration source: `paletted_permutations`
-   Pressing F3+S will now dump contents of dynamic textures (like atlases, maps, etc.) to `screenshots/debug/`
-   Added `fallback` fields to `translate` text components
-   Out-of-bound arguments in `translate` formats are no longer silently ignored
-   Added the following game events:
    -   `entity_dismount` with a vibration frequency of 6
    -   `entity_mount` with a vibration frequency of 7
-   Changed the following game events:
    -   `item_interact_finish` now has a vibration frequency of 2 instead of 14
-   Removed `heldItemTooltips` option from `options.txt`
-   Added a network protocol feature for forcing bundle of packets to be processed within same client tick
-   Added `--pidFile` argument to dedicated server command line for printing process id to file
-   The vanilla resource pack en\_us language file is now sorted alphanumerically by key
-   Added `show_notification` field to recipes
    -   Accepts a boolean which determines if a notification is shown when unlocking this recipe
    -   defaults to `true` if isn't specified
-   A new recipe type `smithing_transform` has been added for the updated Netherite Upgrade recipe
-   A new recipe type `smithing_trim` has been added for the new Armor Trim recipe
-   A new recipe type `crafting_decorated_pot` has been added for the new Decorated Pot recipe
-   New registries `trim_pattern` and `trim_material` have been added for the armor trim system
-   Smithing table has temporarily two menu types
    -   Old menu without Smithing Template slot has been renamed to `legacy_smithing`
        -   Will be removed when Armor Trim feature stops being an experimental feature
    -   New menu with Smithing Template slot was added called `smithing`
-   Added new flag (value 128) to `HideFlags` NBT field for hiding armor trim item tooltips

### Resource Pack format

-   The enchantment glint now has two separate texture files: `enchanted_glint_entity.png` and `enchanted_glint_item.png`
-   The texture format used to dynamically scale buttons and sliders has been updated to always include fixed 20px borders on the left and right
-   Slider textures are now defined in a separate `slider.png` file
-   The Create New World screen now uses a separate `light_dirt_background.png` for its background, unlike other screens

### Commands

#### `clone`

The clone command now supports specifying the source and target dimensions.

New syntax:

`clone [from <sourceDimension>] <begin> <end> [to <targetDimension>] <destination> ...`

Parameters:

-   `sourceDimension`: id of dimension to clone from
-   `targetDimension`: id of dimension to clone to

#### `damage`

New command to apply damage to entities.

Syntax:

-   `damage <target> <amount> [<damageType>] [at <location>]`
-   `damage <target> <amount> [<damageType>] [by <entity>] [from <cause>]`

Parameters:

-   `target`: The entity to damage
-   `amount`: Amount of damage to inflict
-   `damageType`: The type of damage to inflict
    -   This determines how the damage affects the entity as well as which death message is displayed
-   `entity`: The entity inflicting the damage
-   `cause`: The cause of the damage, in the case of indirect damage
    -   Example: When shot by an Arrow, the `entity` is the Arrow projectile while `cause` might be a Skeleton
-   `location`: The location the damage originated at (when no entity caused the damage)
    -   For instance, `location` might represent the location of a Bed exploding in the Nether

#### `data`

New source available:

-   `string <entity|block|storage> [path] [start] [end]` - reads a value as text, resulting in a string value

New arguments:

-   `start`: Index of first character to include at the start of the string
-   `end`: Index of the first character to exclude at the end of the string

#### `effect`

-   `infinite` is now a valid option for effect durations
    -   Infinite effect durations show up as "∞" in the player inventory view

#### `execute`

##### `execute if|unless`

New conditions available for the `execute if|unless` sub-command:

-   `execute if|unless loaded <pos>` - checks if the position given is fully loaded (in regard to both blocks and entities)
-   `execute if|unless dimension <dimension>` - checks if the execution is in a matching dimension

Parameters:

-   `pos`: Block position to check
-   `dimension`: A dimension id

##### `execute on`

New `execute` sub-command for selecting entities based on relation to the current executing entity:

-   `execute on <relation>`

Relations:

-   `vehicle` - the entity that the executing entity is riding
-   `passengers` - all entities directly riding the executing entity (no sub-passengers)
-   `controller` - the entity that is controlling the executing entity (for example: first passenger in a boat)
-   `owner` - the owner of the executing entity, if it is a tameable animal (like cats, wolves or parrots)
-   `leasher` - the entity leading the executing entity with a leash (might be a leash knot in case of being attached to a fence)
-   `target` - the attack target for the executing entity
-   `attacker` - the last entity that damaged the executing entity in the previous 5 seconds
-   `origin`:
    -   shooter, if the executing entity is a projectile (like Arrow, Fireball, Trident, Firework, Thrown Potion, etc.)
    -   thrower, if the executing entity is an item
    -   source of effect, if the executing entity is an Area Effect Cloud
    -   igniter, if the executing entity is a Primed TNT
    -   summoner, if the executing entity is Evoker Fangs or a Vex

If the relation is not applicable to the executing entity or there are no entities matching it, the selector returns zero elements.

##### `execute positioned over`

New `execute` sub-command for finding positions on top of a heightmap. Changes the height of the execution position to be on top of the given heightmap.

Syntax:

-   `execute positioned over <heightmap>`

###### Heightmaps

A heightmap records the highest position in a column of blocks according to some criteria. Available options:

-   `world_surface`: Any non-air block
-   `motion_blocking`: Any motion blocking material (e.g. ignores flowers and grass)
-   `motion_blocking_no_leaves`: Any non-leaf motion blocking material
-   `ocean_floor`: Any non-fluid motion blocking material

##### `execute summon`

New `execute` sub-command for summoning a new entity and binding the context (`@s`) to it. Meant to simplify entity setup and reduce the need for raw NBT editing.

Syntax:

-   `execute summon <entity id>`

#### `fillbiome`

-   The amount of network data transmitted when using the `fillbiome` command has been optimized

### `title`

-   All time arguments to `title times` are now time durations and work with `t`, `s` and `d` suffixes

#### `weather`

-   The duration of the weather change now matches the game's regular weather cycle if not specified
-   The `duration` parameter is now a time duration in ticks and works with `t`, `s` and `d` suffixes
    -   To retain existing functionality, you need to add an `s` suffix to pre-existing commands

#### `ride`

New command to allow entities to start or stop riding other entities.

Syntax:

-   `ride <target> mount <vehicle>`
    -   Makes a single target mount a single vehicle
    -   The command will fail if:
        -   `vehicle` is a player
        -   `target` is already riding a vehicle
        -   `target` and `vehicle` are the same entity
        -   `vehicle` is already a passenger (direct or indirect) of `target`
-   `ride <target> dismount`
    -   Dismounts `target` from any vehicle it is riding
    -   Fails if `target` is not riding anything

### Damage Types

Damage Types are a new registry that can be extended through data packs. A Damage Type determines how damage is handled by the game. This includes which attributes the damage has as well as which death message is used when an entity dies due to that type of damage.

Example:

    {
      "exhaustion": 0.1,
      "message_id": "arrow",
      "scaling": "when_caused_by_living_non_player"
    }
    

Fields:

-   `message_id`: The message id used for deaths caused by this damage type
    -   Will be combined with other string fragments to form a translation key
-   `exhaustion`: The amount of hunger exhaustion caused by this damage type
-   `scaling`: Whether this damage type scales with difficulty levels. Possible values:
    -   `never`: Damage is always the same
    -   `always`: Damage always scales with difficulty
    -   `when_caused_by_living_non_player`: Damage scales with difficulty if it was caused by a living entity who is not a player
-   `effects`: Optional field controlling how damage manifests when inflicted on players. Possible values:
    -   `hurt` (default): the default hurt sound
    -   `thorns`: Thorns hurt sound
    -   `drowning`: Drowning sound
    -   `burning`: A single tick of burning sound
    -   `poking`: Berry bush poke sound
    -   `freezing`: Freeze tick sound
-   `death_message_type`: Optional field that controls if special death message variants are used. Possible values:
    -   `default` (default): No special death message logic is applied
    -   `fall_variants`: Show a variant of fall damage death instead of a regular death message, e.g. `death.fell.assist.item`
    -   `intentional_game_design`: Show the intentional game design message instead of a regular death message

Damage type tags control many aspects of how damage from different sources are interpreted.

### Predicates

#### Damage Type Predicates

The following fields have been removed from damage type predicates: `is_projectile`, `is_explosion`, `bypasses_armor`, `bypasses_invulnerability`, `bypasses_magic`, `is_fire`, `is_magic`, `is_lightning`.

A new `tags` array has been added, with the predicate matching if all entries match. Each entry has two fields:

-   `id`: The ID of a damage type tag
-   `expected`: Whether the damage is expected to have or not have the tag for the predicate to match

### Game Rules

-   Added `commandModificationBlockLimit`, controlling the maximum number of blocks changed in one execution of `clone`, `fill` and `fillbiome`
-   Added `doVinesSpread` game rule, determining if vines will spread to nearby blocks
    -   Defaults to `true`

### Text components

Added an optional `fallback` field to `translate` text components.

-   The new field is a string that will be used in place of translation if it is missing
-   If `fallback` is missing, the old behavior (i.e. using the key itself as the translation) is preserved

### Display entities

Three new entities have been added for flexible display of items, blocks and text

-   Those entities, similarily to `marker`, don't tick and have no collisions or physics
-   Models render at entity position, with normal rotation around X and Y axis (so it can be controlled by teleport commands), but also with additional arbitrary model transform

#### Common data types

Tag contents for display entities include some new data types with a complex structure. Any form can be used for modifying data, but only one form is used for saving.

##### Transformations

Arbitrary affine transform.

-   Matrix form: array of 16 numbers, describing row-major matrix
-   Decomposed form (used for saving): object with following fields:
    -   `translation` - 3d vector
    -   `left_rotation`, `right_rotation` - `rotation`
    -   `scale` - 3d vector
    -   Transforms are composed in order `translation`, `left_rotation`, `scale`, `right_rotation`

##### Rotations

-   Quaternion form (used for saving): array of 4 numbers, describing components (x, y, z, w)
-   Axis-angle form: object with following fields:
    -   `axis` - unit 3d vector
    -   `angle` - in radians

#### Interpolation

Some properties of display entities can be interpolated. That means that clients will see gradual changes over time instead of instantaneous jumps.

Display entities keep track of current and previous values of interpolated values:

-   All properties marked as "interpolated" are part of a single interpolation set
-   Any update to interpolated property will cause all values of interpolation set to be saved as "current"
    -   Data command executions that do not change value of property (even if it's present in NBT) do not count as updates
    -   Updates are synchronized to clients at most once per tick, so multiple updates within command will still count as a single update
-   The last values generated before an update are saved as "previous"
-   If interpolation is enabled, the entity will transition between "previous" and "current" values over `interpolation_duration` ticks
-   Interpolation can be started by writing to the `start_interpolation` field (this field is not normally present in NBT)
    -   The value in this field is a delay in ticks between client receiving the update and interpolation start
    -   A value of `0` ticks means that interpolation will start in next client tick after receiving the update
    -   Positive values increase this delay further
-   Interpolation will end (entity fully in "current" state) in `start_interpolation` + `interpolation_duration` ticks after receiving the update
-   The interpolation target can be updated without setting `start_interpolation`, but it will still behave as if it was started at the moment of the last update to `start_interpolation`
    -   That means that if the value is updated, but more than `interpolation_duration` ticks have passed since last `start_interpolation` update, the entity will immediately jump to new values

#### Common properties

All display entity types have the following fields:

-   `transformation` - the transformation applied to model (after normal entity orientation). Defaults to identity. Interpolated
-   `billboard` - option to control if entity should pivot to face player when rendered:
    -   `fixed` - no rotation (default)
    -   `vertical` - entity can pivot around its vertical axis
    -   `horizontal` - entity can pivot around its horizontal axis
    -   `center` - entity can pivot around its center point
-   `brightness` - if present, overrides light values used for rendering. Omitted by default (which means rendering uses values from entity position). Object has two fields:
    -   `sky` - value of skylight, 0..15
    -   `block` - value of block light, 0..15
-   `view_range` - maximum view range of this entity. Actual distance depends on client-side render distance and entity distance scalling. Default value 1.0 (roughly the same as fireball)
-   `shadow_radius` - size of shadow. Defaults to 0 (no shadow). Interpolated
-   `shadow_strength` - strength of the shadow. Controls the opacity of the shadow as a function of distance to block below. Defaults to 1. Interpolated
-   `width`, `height` - describe size of culling bounding box
    -   Bounding box spans vertically `y` to `y+height` and horizontally `width/2` in all directions from entity position
    -   If either field is set to `0`, culling is disabled
    -   Both default to `0`
-   `glow_color_override` - override glow border color. Defaults to `-1` (use team color). Alpha component is ignored

#### `item_display`

Displays a single item stack.

-   Stack can be changed with commands by setting slot `container.0`

Fields:

-   `item` - item stack to display. Same format as in inventory (example: `{id: "minecraft:dirt", Count: 1}`)
-   `item_display` - describes item model transform applied to item (as defined in `display` section in model JSON)
    -   Values: `none` (default), `thirdperson_lefthand`, `thirdperson_righthand`, `firstperson_lefthand`, `firstperson_righthand`, `head`, `gui`, `ground`, `fixed`

#### `block_display`

Displays a block state.

-   Does not display all block entities, even if they would normally be created on block placement (like chests)

Fields:

-   `block_state` - block state to display. Same format as item held by endermen (example `{Name:"minecraft:dirt"}`)

#### `text_display`

Displays a text component.

Fields:

-   `text` - text to display. Components are resolved with the context of the display entity
-   `line_width` - line width used to split lines (note: new lines can be also added with `\n` characters). Defaults to 200
-   `text_opacity` - opacity (alpha component) of rendered text. Defaults to 255. Interpolated
-   `background` - color of background. Includes alpha channel. Defaults to 0x40000000. Interpolated
-   `default_background` - if true, rendering uses default text background color (same as in chat). Defaults to false
-   `shadow` - whether the text should be displayed with a shadow. Defaults to false
-   `see_through` - whether the text should be visible through blocks. Defaults to false
-   `alignment` - how the text should be aligned
    -   Values: `center` (default), `left`, `right`

Note: text display backgrounds uses new shader types `rendertype_text_background` and `rendertype_text_background_see_through`.

### Interaction Entities

A new type of entity that records attacks ("left clicks") and interactions ("right clicks"). Interactions are invisible and of a custom size.

Fields:

-   `width`: Width of the entity's bounding box (default `1`)
-   `height`: Height of the entity's bounding box (default `1`)
-   `attack`: Records the last attack action on the entity
-   `interaction`: Records the last interaction action on the entity
-   `response`: Boolean specifying if interacting should trigger a response (arm swing, sound effects, etc - default `false`)

#### Action Format

When an action is stored, it always has two fields:

-   `player`: The UUID (in standard integer array format) of the player performing the action
-   `timestamp`: The timestamp of the game tick when the event happened (stored as a long)

#### Advancement Triggers

-   Interacting with an Interaction entity triggers `player_interacted_with_entity`
-   Attacking an Interaction entity triggers `player_hurt_entity`

#### `execute on` with Interactions

The Interaction entity targets the player who last interacted with it. That makes the following possible:

-   `execute on attacker`: execute as the last player who attacked the entity
-   `execute on target`: execute as the last player who interacted with the entity

### Tags

#### Block Behavior

-   Fire burns out faster in certain biomes, and this is now controlled by the `increased_fire_burnout` biome tag

#### Mob Spawning

-   The `only_allows_snow_and_gold_rabbits` biome tag has been renamed to `spawns_gold_rabbits` to match its behavior
-   White Rabbit variants are now controlled by the `spawns_white_rabbits` biome tag
-   Fox variants are now controlled by the `spawns_snow_foxes` biome tag

#### Mob Behavior

-   Snow Golems melting in warm biomes is now controlled by the `snow_golem_melts` biome tag
-   Only mobs in the `dismounts_underwater` entity tag will now force the rider to dismount when underwater

### Network Protocol

-   Clients now reset their Secure Chat session state when receiving the login packet

#### Packet bundles

-   Added new delimiter packet to clientbound game protocol
-   All packets between two delimiters are guaranteed to be processed within same tick
-   For security reasons this feature is not supported in the serverbound direction

### Paletted Permutations

-   `paletted_permutations` is a new type of atlas configuration source used to dynamically generate new textures in memory based on a set of color palettes
-   Color palettes allow you to swap out the colors of a texture without having to supply all files for the variants of a texture in a resource pack
-   This is useful for things like armor trims, where you want to be able to change the color of parts of the armor without having to create a new texture for each color
-   The `paletted_permutations` source has a set of required parameters:
    -   `textures` A list of namespaced locations of base textures
        -   These textures will be used to generate variants of them that have been modified by color palettes
    -   `palette_key` A namespaced location of a color palette key file
        -   A color palette key is used to define the set of key pixel colors we want to swap out with the color palettes defined below
    -   `permutations` A map of permutations from suffix to a namespaced location of a color palette file
        -   The suffix is appended at the beginning to the resource location of the output variant textures, with a `_` character separating the suffix and the base texture name
        -   The color palette is a texture file with a set of pixels that are used for replacing pixels that match the color palette key in each base texture
        -   The number of pixels in each color palette must be the same as that of the `palette_key` defined for this source
        -   Key matching is done by comparing the RGB values of each pixel in the `palette_key` to the RGB values of each pixel in the color palette
        -   The alpha channel is ignored for key matching, but in the resulting texture the alpha channel is multiplied with the color palette's alpha channel
        -   Pixels that do not match the `palette_key` are copied over to the resulting texture as-is
-   After defining a `paletted_permutations` source, you can then reference those namespaced output textures in other resources in your resource pack

For example, if you have the following `paletted_permutations` source:

    {
        "type": "paletted_permutations",
        "textures": [
            "minecraft:item/leather_helmet",
            "minecraft:item/leather_chestplate",
            "minecraft:item/leather_leggings",
            "minecraft:item/leather_boots"
        ],
        "palette_key": "minecraft:colormap/color_palettes/leather_armor_color_key",
        "permutations": {
            "red": "minecraft:colormap/color_palettes/red",
            "green": "minecraft:colormap/color_palettes/green",
            "blue": "minecraft:colormap/color_palettes/blue"
        }
    }
    

You can then reference the resulting textures in other resources like this:

    {
        "textures": {
            "layer0": "minecraft:item/leather_helmet_red",
            "layer1": "minecraft:item/leather_chestplate_green",
            "layer2": "minecraft:item/leather_boots_blue"
        }
    }
    

### Trim Patterns & Materials

-   Trim patterns and materials for armor are defined by the server through the `trim_pattern` and `trim_material` registry respectively
    -   As a result, new trim patterns and materials can be added via data packs
-   These are synchronized to clients when they join the server
    -   However, clients must have an accompanying resource pack to see those registered trim patterns and materials
    -   The paths to these textures are inferred based on the filename of the pattern json, and will try to find the textures within the same namespace as the trim pattern's `name` field
-   The following data is defined by a trim pattern:
    -   `asset_id` which is a namespaced id used to infer texture locations and localization
    -   `template_item` which is the id of the smithing template item used to apply the trim pattern
    -   `description` which is a text component used for displaying the pattern name of an armor trim when hovering an armor itemstack
-   The following data is defined by a trim material:
    -   `asset_name` which is a string used as a suffix for armor trim texture locations
    -   `ingredient` which is the id of the ingredient item used to apply the trim material
    -   `item_model_index` which is a float which defines the item model override each armor item model should target to change their visuals for this material
    -   `override_armor_materials` which is an optional map of armor material to overridden color palette
        -   Map key is the armor material that this trim material wants to override with a different color palette
        -   Map value is the name of the color palette that will be used when this trim material is applied to an armor piece with the corresponding armor material
    -   `description` which is a text component used for displaying the material name of an armor trim when hovering an armor item stack
        -   The style defined in this description is applied to the armor trim pattern `description` as well

## Experimental Features

The following changes only apply when one or more Experiments is turned on, either by activating the corresponding experimental data pack or by turning it on in the Experiments screen while creating the world.

-   Added Smithing Template items
-   Redesigned the Smithing Table
-   Changed how Netherite equipment is crafted
-   Added a new armor trimming system to visually customize your armor
-   Added Sniffer mob and Torchflowers
-   Added the Cherry Grove biome
-   Added Archaeology
-   Mob Heads can now be placed on top of Note Blocks without sneaking

### Smithing Templates

-   Smithing Tables have been redesigned into a workstation for physical equipment upgrades and modifications
-   Alongside slots for combining a piece of equipment and materials, there is now a required slot for an item type called Smithing Templates
-   Smithing Templates define what type of upgrade you will be making to equipment
    -   It specifies both what type of items you can upgrade, and which ingredients are valid to customize the upgrade
    -   There are currently two categories of Smithing Templates: Armor Trim and Netherite Upgrade
-   Smithing Templates are consumed when used to upgrade an item in the Smithing Table
-   You can craft a copy of a Smithing Template in the Crafting Table with 7 diamonds + 1 block of material that the template is made out of + 1 smithing template, which will output 2 of the same Smithing Template

### Netherite Equipment

-   Netherite equipment crafting now also requires a Netherite Upgrade Smithing Template
-   Netherite Upgrade Smithing Templates can be found randomly in all Bastion Remnant chests, and there is a guarantee of 2 in every Treasure Room Bastion Remnant
-   This change was made for a variety of reasons:
    -   Increase the time players utilize Diamond equipment before Netherite
    -   Make Netherite equipment a more significant achievement in the game's progression
    -   Adapt Netherite more naturally into the new Smithing Table crafting system

### Armor Trims

-   You can now visually customize your armor with a variety of unique trims at the Smithing Table
-   Armor trims are purely visual with no gameplay benefits, and can only be applied to Helmets, Chestplates, Leggings and Boots
    -   All trim patterns are visually the same on an armor's item icon, but the color will still change based on the trim material
    -   To check which trim pattern a piece of armor has, you can hover over it in the inventory
-   Armor Trim Smithing Templates can be found all throughout the world, and each of the following structures contain their own unique Smithing Template:
    -   Pillager Outpost: Sentry Armor Trim
    -   Desert Pyramid: Dune Armor Trim
    -   Shipwreck: Coast Armor Trim
    -   Jungle Temple: Wild Armor Trim
    -   Ocean Monument: Tide Armor Trim
    -   Ancient City: Ward Armor Trim
    -   Woodland Mansion: Vex Armor Trim
    -   Nether Fortress: Rib Armor Trim
    -   Bastion Remnant: Snout Armor Trim
    -   Stronghold: Eye Armor Trim
    -   End City: Spire Armor Trim
-   Smithing Templates are found in chests in their respective structure
    -   The Ocean Monument has no chests, Elder Guardians sometimes instead drop a Smithing Template upon death
-   Some Armor Trim Smithing Templates are rarer than others, so be on the lookout for them to impress your friends!
-   An armor trim has two properties: a pattern and a material
    -   The pattern is defined by the Smithing Template used to apply the trim, and represents the visual pattern of the trim
    -   The material is defined by what ingredient you used to apply the trim, and represents the color of the trim
-   The viable ingredients you can use to define the color of your armor trim are the following:
    -   Iron, Copper, Gold, Lapis, Emerald, Diamond, Netherite, Redstone, Amethyst, Quartz

### Sniffer

-   The Sniffer is the mob vote winner of Minecraft Live 2022
-   Sniffers cannot be tempted or tamed
-   Sniffers are passive, friendly mobs
-   Sniffers sniff the air and occasionally dig for seeds, which produces a Torchflower Seed
-   Sniffers can be bred by feeding them Torchflower Seeds
-   The Sniffer is currently only available as a Spawn Egg in the creative inventory

### Torchflowers

-   The Torchflower seed can be planted on farmland and grows into a flower
-   The seed can be used to breed two Sniffers
-   The full-grown flower can be harvested and replanted but can also be crafted into a dye

### Cherry Groves

-   Added a new Cherry Grove biome, with pretty cherry blossom trees
    -   The biome can be found in the mountains, in similar places as Meadows
-   Added a new Cherry wood set, with all the corresponding wooden things you can make from it
-   Cherry Leaves have pink particles falling underneath
-   Added a new Pink Petals block with lots of pink flowers on the ground
    -   Each pink petal block can contain up to 4 petals
    -   Using bone meal on it increases the number of petals
    -   Placing a petal on a block increases the number of petals
    -   Mining the block gives you the number of petals in the block

### Archaeology

#### The Brush

-   The brush is a craftable item you can use to brush things

#### Suspicious Sand

-   Can be found in Desert Temples and Desert Wells
-   This fragile block is hard to spot and easy to destroy, so be careful!
-   Brushing the Suspicious Sand with a Brush will extract objects that were buried long ago

#### Pottery Shards

-   Pottery Shards have pictures on them
-   They cannot be crafted and are only found by brushing Suspicious Sand

#### Decorated Pots

-   Crafting four Pottery Shards together will create a Decorated Pot with a picture on each side
-   Brick items can be used instead of Pottery Shards in the Decorated Pot recipe
    -   The sides that were made from Brick items will not have pictures
-   Smash a Decorated Pot with any block-breaking tool to break it apart and get the Pottery Shards back
    -   Hitting the pot with bare hands, silk touch tools, or any other item, will drop an intact pot instead

## Fixed bugs in 1.19.4

Around 150 bugs were fixed in this release. View the [list on the issue tracker](https://bugs.mojang.com/issues/?filter=27608).

---

We're now releasing 1.19.3 for Minecraft: Java Edition. This release gives the Vex a brand new look as well as containing technical improvements and bug fixes.

## New Features in 1.19.3

-   Some experimental features are now available through built-in experimental datapacks
-   Added a new "Panorama Scroll Speed" accessibility option
-   Added new default skins for offline players
-   New wood sounds

### Sounds

-   Various wood types now have unique sounds when placed, broken, or walked on
    -   There are three sets of unique sounds: Overworld wood types, Nether wood types, and Bamboo (when enabled)
-   Step sounds can now be heard when walking on Carpets, Lily Pads and Small Amethyst Buds
-   Step sounds can now be heard when walking through Nether sprouts, Glow lichen, Crimson Roots and Warped Roots

## Changes in 1.19.3

-   Reworked the Creative Inventory tabs
-   Added Operator Items Tab option in the Controls menu which is off by default
-   The Vex now has a new look
-   In the Nether dimension Endermen, Skeletons and Wither Skeletons now only spawn at light level 7 and below (instead of 11 and below)
-   Changes to block support
-   Spawner block changes
-   Changes to chat
-   Added Draft Player Reports
-   Improvements to the Open to LAN screen
-   The Realms News button will now show a confirmation screen before opening the link
-   Stronghold placement code has been changed to be more efficient, causing stronghold positions to shift
    -   They are still placed in concentric rings, but their positions in the rings may change by a few degrees
-   "Teleport to Team Member" option in spectator menu now only shows up for teams with viable target players
-   Changes to tooltips
-   The Wild update music has been tweaked to be slightly less loud

### Creative Inventory

The ordering of tabs and the contents in the Creative Inventory have been tweaked to make the experience of finding relevant blocks and items easier.

-   Blocks and items have been moved into categories that fit them better
-   Blocks are now ordered by their material as much as possible
    -   For example, all Oak blocks and variants are now next to each other
-   Some items can now be found in more than one tab
-   Various tabs have been renamed or collapsed into others
-   The search tab now lists items sequentially grouped by the other tabs
    -   For example, items found in Building Blocks will always appear before items in Redstone Blocks
-   A Colored Blocks tab has been added that contains all blocks with 16 color variants
-   Petrified Oak Slab has been removed from the Creative Inventory
    -   It can still be accessed through commands
-   The following missing items have been added to the Creative Inventory:
    -   Suspicious Stew
        -   The tooltip will show the effect of a stew before it's picked up from the Creative Inventory
        -   Only stews with effects available via crafting or Mooshrooms are listed
    -   Dragon Egg
    -   Ominous Banner
    -   Monster Spawner
    -   All 3 flight durations of Fireworks
    -   Operator-only blocks and items
        -   These only appear in the Operator Utilities tab if you have both:
            -   Operator Items Tab option in Controls menu set to `ON`
            -   The required operator permissions
-   Tooltips for all items in Creative Menu outside single-category tabs will show categories where this item can be found
    -   Previously this only happened on the search tab

### Vex

-   Changes to Vex model and textures
    -   The Vex retains its old, now slightly oversized, hitbox to make it easier to fight

### Block Support

-   Fence Gates no longer provide center support beneath them
-   When opening, Shulker Boxes will pop off blocks which are attached to opened faces (such as Torches)
    -   Blocks that require support cannot be placed on these open faces while the Shulker Box is open

### Spawners

-   No longer has a default mob spawn type when placed by a player (previously was the Pig)
-   Will not emit fire particles when a mob spawn type has not been defined
-   Renamed to Monster Spawner to match Bedrock, and removed purple text color
-   Pick-block now works for Spawner blocks
-   The mob type is now displayed in the hover description of a Spawner item stack
    -   If a mob type has not been defined yet, the hover description will describe how to set it

### Items

-   Added new Spawn Egg items for Ender Dragon, Iron Golem, Snow Golem and Wither mobs to Creative mode
    -   Ender Dragon and Wither Spawn Eggs will only be available through commands to prevent accidental destruction of player builds
-   Polar Bear Spawn Egg colors have changed to distinguish it from the Ghast Spawn Egg

### Chat

-   Removed Chat Preview
-   Chat messages deleted by server moderators will no longer be completely hidden, but rather replaced with text stating "This chat message has been deleted by the server."
-   Deleted chat messages will now be displayed in the chat window for at least 3 total seconds before being hidden
-   The Chat Trust Status indicators have been tweaked:
    -   The 'Modified' tag will no longer display for server-modified messages where only style has been changed
    -   The 'Modified' tag icon and indicator is now dark gray
    -   The 'Not Secure' tag is now light gray and does not have an icon
-   Partially filtered chat messages now show the filtered text as gray hashes with a hover text saying that it was filtered
-   The Chat Reporting screen now shows when the player being reported rejoined chat

### Added Draft Player Reports

Player Reports can now be kept temporarily as a draft while connected to a server.

-   When exiting the Player Reporting screen, the report can be either discarded or kept as a draft
    -   The draft will always be kept if the screen was forcefully closed (e.g. player dying)
-   Draft reports are kept until the player leaves the current server or world
    -   When leaving, the player will be prompted to either discard or finish and send the report

### LAN screen

-   The screen now allows selecting the port on which to host the LAN world
-   The game mode and allow cheats buttons are now initialized with the default values of the world

### Tooltips

-   When tabbing through buttons, tooltips are displayed above or below them
-   Tooltips displayed when hovering are displayed next to the cursor
-   Tooltips from focused buttons (focused by pressing tab) take priority over tooltips from hovered buttons

## Technical Changes in 1.19.3

-   Added Feature Flags - world options to enable or disable some experimental or unfinished features (like blocks, entities and items)
-   Command changes
-   Added new Telemetry Events
-   Added new Game Rules
-   Custom Player Head Note Block sounds
-   New entity sub-predicate types
-   Instances of recipe types that have recipe books now have field `category` to determine placement
-   Changes to texture loading and stitching
-   Network protocol changes
-   Migrated linear algebra types to Java OpenGL Math Library (JOML)
-   Blocks carried by Endermen now use loot tables to generate drops when killed

### Feature flags

#### General notes

-   Feature flags are options that enable or disable certain groups of game elements (like blocks, entities and items), later called "features"
-   Game elements controlled by flags are hardcoded
-   Feature flags are stored in world

#### Configuration and datapack changes

-   Feature flags are enabled by datapacks
    -   New pack metadata section called `features` is added, containing enabled feature flags in list named `enabled`
-   The game now contains built-in datapacks (similar to the "Programmer Art" resource pack) that enable features and provide associated recipes, advancements, loot tables, etc
-   Added new fields to `server.properties` to allow initial selection of packs (works only during world creation)
    -   `initial-enabled-packs` - comma-separated list of packs to be enabled (feature packs need to be explicitly enabled)
    -   `initial-disabled-packs` - comma-separated list of packs to not auto-enable
-   Datapacks discovered after world creation will be disabled if they require features that are not enabled for loaded world
-   Added new entity sub-predicate types: `axolotl`, `boat`, `fox`, `mushroom`, `painting`, `rabbit`, `horse`, `llama`, `villager`, `parrot`, `tropical_fish`

#### Effects of feature flags

##### Blocks

-   Disabled block ids are not recognized by commands that can create new blocks
-   Block items for disabled blocks are disabled
-   Disabled blocks won't spawn in structures
-   Disabled blocks won't be loaded as part of entities (for example as falling sand or blocks carried by Endermen)
-   Players can't interact with disabled blocks

##### Entities

-   Disabled entity ids are not recognized by commands that can summon new entities
-   Disabled entities will not spawn or load
-   Spawn egg items for disabled entities are disabled

##### Items

-   Disabled items are hidden from creative menu
-   Recipes and loot tables are prevented from creating disabled items
-   Disabled item ids are not recognized by commands that can create new items
-   Disabled items can't be used for interactions or attacking

### Commands

-   New command: `fillbiome`
-   New execute sub-command: `execute if|unless biome`
-   Improvements to the `publish` command

#### `fillbiome`

Changes biome entries for an area. Note that biomes are not stored per-block, so affected positions may not match input precisely.

Syntax:

`fillbiome <from> <to> <biome> [replace <filter>]`

Parameters:

-   `from`: One corner of the area to fill
-   `to`: The other corner of the area to fill
-   `biome`: The biome to set
-   `filter`: A biome or biome tag to replace

#### `execute`

Execute commands can now be conditional on biomes.

Syntax:

`execute if|unless biome <pos> <biome>`

#### `publish`

The `publish` command has new arguments to enable commands and set the default gamemode.

Syntax:

`publish [allowCommands] [gamemode] [port]`

### Telemetry

This release includes the WorldUnloaded event, a required event, as well as several opt-in events. Diagnostic tracking is a tool that helps us understand what you like about Minecraft, which allows us to make those things better.

The reason that WorldUnloaded, along with [WorldLoaded](https://www.minecraft.net/en-us/article/minecraft-snapshot-21w38a), is a required event is that the information we’re looking at is, well, required. As a part of Xbox, we all need to follow a standard of practice, you can find a detailed description of it [here](https://privacy.microsoft.com/en-us/privacystatement). The parameters for what data we consider to be critical to our work are set by our team at Mojang Studios in alignment with Xbox.

What we want to find out is how fun you think Minecraft is. There are lots of ways to figure that out, like feedback, playtests, experience, and magic. We want to add data to that mix, which is where WorldLoaded and WorldUnloaded come in. WorldLoaded measures when you boot a session up, and WorldUnloaded measures when you shut it down. Together, they will measure how fun Minecraft is, using metrics such as playtime and the game modes that players choose to play. That’s it. All the data we collect, whether it’s required or opt-in, follows GDPR and CCPA best practices to keep your information safe.

The rest of the current telemetry events are opt-in, which means that you can choose whether or not you want to send us additional data. The only players that can’t opt-in are Microsoft child accounts, but everyone can still send in all of their feedback to [feedback.minecraft.net](http://feedback.minecraft.net/).

Just like all the thoughts and comments we get from you on our feedback site, this is something that greatly helps us improve Minecraft. We want to make a game that you want to play, so we want to know what that game needs. Even if it’s more lava.

#### Transparency

-   Added Telemetry Data Collection Screen
    -   This screen displays information about the type of data that is sent
    -   The level of data sent can be controlled between "Minimal" and "All"
        -   "Minimal" sends only the required data
        -   "All" sends the required data, as well as optional data
    -   The default data level is "Minimal" (only the required data)
-   Every telemetry event sent from the client is now logged to disk
    -   Old log files are removed after 7 days
    -   These can be found under the `logs/telemetry` directory
        -   A shortcut to this directory is available via the "Open My Data" button on the Telemetry Data Collection screen

#### Required events

-   Added WorldUnloaded event
-   Removed client Java version from the WorldLoaded event

##### WorldLoaded & WorldUnloaded

Understanding how Minecraft is played allows us to focus game updates and improvements on the areas that are most relevant to players. The data that tells us this includes game mode, client or server modded status, and game version.

WorldLoaded & WorldUnloaded are two paired events that calculate how long the world session has lasted (in seconds and ticks). Data from WorldLoaded is sent when a world is launched, and data from WorldUnloaded is sent when a world is shut down (quitting to title, disconnecting from a server).

#### Optional events

-   Added PerformanceMetrics and WorldLoadTimes events

##### PerformanceMetrics

Knowing the overall performance profile of Minecraft helps us tune and optimize the game for a wide range of machine specifications and operating systems.

The periodic performance metrics includes data such as frame-rates, rendering performance, memory usage, operating system, and the modded status of the client and server.

Game version is included to help us compare the performance profile for new versions of Minecraft.

##### WorldLoadTimes

It’s important for us to understand how long it takes to join a world, and how that changes over time. For example, when we add new features or do larger technical changes, we need to see what impact that had on load times.

This event includes the total time in milliseconds for the world to load, whether this was a new world, as well as game version and platform details.

### Game Rules

-   Added `blockExplosionDropDecay`, `mobExplosionDropDecay` and `tntExplosionDropDecay` game rules
    -   When set to `false`, all blocks drop loot
    -   When set to `true`, blocks drop loot randomly depending on how far from the explosion center
    -   Defaults to `false` for tnt, true for block and mob
-   Added `snowAccumulationHeight` game rule
    -   When it is snowing, this game rule determines the maximum number of layers can be accumulated in each block
    -   Defaults to `1`
    -   Set to `0` makes no snow form at all
    -   Set to `8` or above lets snow form up to the level of a full block
-   Added `waterSourceConversion` and `lavaSourceConversion` game rules
    -   When set to `true`, allows new sources of that fluid to form
    -   Defaults to `true` for water and `false` for lava
-   Added `globalSoundEvents` game rule, controlling whether certain gameplay moments are heard by all players regardless of location
    -   Defaults to `true`

### Recipes

#### Crafting book categories

-   Crafting book categories/tabs can now be controlled by recipe definitions
-   Categories available for `shaped`/`shapeless` and various special crafting recipes:
    -   `building`
    -   `redstone`
    -   `equipment`
    -   `misc` (default)
-   Categories available for `smelting`, `blasting`, `smoking`, `campfire_cooking`
    -   `food`
    -   `blocks`
    -   `misc` (default)
-   Some crafting books collapse multiple categories into a single tab
-   The exact mappings might change in the future

### Resource Packs

-   The Resource Pack version is now 12
-   Removed "fixers" for resource packs with versions 3 and 4 (pre-flattening)
    -   The game will no longer try to adapt packs with those versions to the current version
-   Game now loads all block models and blockstate definitions in appropriate directories
    -   That means that if a pack has invalid model it will prevent pack from loading, even if this model is unused

#### Texture loading changes

-   Context: When the game loads all textures used by block and item models need to be stitched (merged) into a single image, called the "atlas"
    -   Individual textures that are stitched onto the atlas are called "sprites"
-   To improve loading performance, block and item textures are now loaded before they are processed by block and item models
    -   By default, textures not in the `textures/item` and `textures/block` directories will no longer be automatically recognized and will fail to load
-   Resource packs can now have configuration files, located in `atlases` directory, that control which images are included in the atlases

##### Atlas configuration files

-   New directory `atlases` is now present for resource packs
-   This directory contains JSON entries for configuring atlases:
    -   `blocks` - textures used by block and item models
    -   `banner_patterns`, `beds`, `chests`, `shield_patterns`, `shulker_boxes`, `signs` - used to render some special-case models
    -   `mob_effects` - textures used for effect icons in the UI
    -   `paintings` - textures used for paintings
    -   `particles` - textures used for particles (referenced by the `textures` field in files within the `particles` directory)
-   If multiple packs include those files, they are merged by their order within the pack (same as tags in data packs)
-   Inside these files is a JSON object with a single list called `sources`
    -   Every entry in `sources` runs in during load, in order of definition, adding or removing new files to the texture list; to be later referenced by block models, particles, etc
-   Types of sources:
    -   `directory` - lists all files in a directory and its subdirectories, across all namespaces
        -   `source` - directory in pack to be listed (relative to `textures` directory)
        -   `prefix` - string to be appended to the sprite name when loaded
    -   `single` - adds a single file
        -   `resource` - location of a resource within the pack (relative to `textures` directory, implied `.png` extension)
        -   `sprite` - sprite name (optional, defaults to `resource`)
    -   `filter` - removes sprites matching the given pattern
        -   `namespace`, `path` - patterns (regular expressions, regex) of ids to be removed (only works for entries already in the list)
            -   If omitted, any value will be matched
    -   `unstitch` - copies rectangular regions from other images
        -   `resource` - location of a resource within the pack (relative to `textures` directory, implied `.png` extension)
        -   `divisor_x`, `divisor_y` - used for determining the units used by regions
        -   `regions` - list of regions to copy from the source image
            -   `sprite` - sprite name
            -   `x`, `y` - coordinates of the top-left corner of the region
            -   `width`, `height` - size of the region
        -   Values such as `x` are transformed to real image coordinates via dividing by their divisor, and then multiplying by the real image size
-   Example: if a pack has a file named `assets/test/textures/fancy/iridium.png` and source is `{"type": "directory", "source": "fancy", "prefix": "custom/"}`, the texture will be available in models as `test:custom/iridium`

### Custom Player Head Note Block sounds

-   Player Heads can now contain a `note_block_sound` field
    -   When present, this determines the sound a note block makes when the head is placed on top of it

### New entity sub-predicate types

-   Added new entity sub-predicates for some entity types with variants:
-   `axolotl`
    -   `variant` - values: `lucy`, `wild`, `gold`, `cyan`, `blue`
-   `boat`
    -   Works for boats, chest boats and rafts
    -   `variant` - values: `oak`, `spruce`, `birch`, `jungle`, `acacia`, `dark_oak`, `mangrove`, `bamboo`
-   `fox`
    -   `variant` - values: `red`, `snow`
-   `mooshroom`
    -   `variant` - values: `red`, `brown`
-   `painting`
    -   `variant` - values: see `painting_variant` registry
-   `rabbit`
    -   `variant` - values: `brown`, `white`, `black`, `white_splotched`, `gold`, `salt`, `evil`
-   `horse`
    -   `variant` - values: `white`, `creamy`, `chestnut`, `brown`, `black`, `gray`, `dark_brown`
    -   Markings are separate value and not matched
-   `llama`
    -   `variant` - values: `creamy`, `white`, `brown`, `gray`
-   `villager`
    -   `variant` - values: see `villager_type` registry
    -   Also works for Zombie Villagers
    -   Profession and level are separate values and not matched
-   `parrot`
    -   `variant` - values: `red_blue`, `blue`, `green`, `yellow_blue`, `gray`
-   `tropical_fish`
    -   `variant` - values: `kob`, `sunstreak`, `snooper`, `dasher`, `brinely`, `spotty`, `flopper`, `stripey`, `glitter`, `blockfish`, `betty`, `clayfish`

### Network Protocol

-   The network protocol now supports adding player entities to the world without being added to the 'tab' player list
-   Servers can now lazily distribute players' profile public keys along with their first chat packet
-   Message 'headers' within the Secure Chat protocol no longer need to be distributed when private messages are sent
-   Contextual message references are now deduplicated for efficiency within the Secure Chat network protocol
-   Servers can now lazily distribute players' profile public keys along with their first chat packet
-   Profile public keys will now be refreshed without reconnecting
-   Clients now reset their chat session on receiving a login packet

## Experimental Features in 1.19.3

-   Some experimental features now need to be enabled to appear in worlds
-   Such features are enabled by adding a built-in datapack when creating a world
-   Feature toggles are meant to hide unfinished or experimental features, to make sure your existing worlds remain unaffected
-   Worlds that are using experimental features will be marked as "Experimental" in world selection list
-   Experimental features cannot be toggled for existing worlds

### Bundles

-   Bundles are now available as an experimental feature

### Added Camel

Camels are now available when Update 1.20 experimental features are enabled.

-   Camels can be equipped with a saddle and ridden by two players
-   Camels spawn naturally in Desert Villages
-   Camels are tall
    -   Most hostile mobs will not be able to reach you when you are on a Camel
    -   They can walk over Fences and Walls without a sweat
-   Camels are very graceful, but grumpy mobs
    -   They randomly sit down
    -   While sitting, it is difficult to convince them to move
-   Camels can either walk slowly or sprint quickly
-   They can also dash forward but will lose stamina for a while when doing so

### Bamboo Wood Set

A new set of Bamboo wood blocks are now available when Update 1.20 experimental features are enabled.

-   New wood blocks
    -   Block of Bamboo
    -   Stripped Block of Bamboo
    -   Bamboo Planks
    -   Bamboo Door
    -   Bamboo Trapdoor
    -   Bamboo Sign
    -   Bamboo Stairs
    -   Bamboo Slab
    -   Bamboo Fence
    -   Bamboo Fence Gate
    -   Bamboo Button
    -   Bamboo Pressure Plate
-   Block of Bamboo can be crafted from 9 Bamboo and can be stipped like other wood logs
-   Bamboo Planks crafted from Block of Bamboo yield only 2 planks compared to 4 for wood logs
-   Added a new "Mosaic" plank variant that is unique to Bamboo called Bamboo Mosaic
    -   It can be crafted with 1x2 Bamboo Slabs in a vertical strip
    -   You can craft Stair and Slab variants of Bamboo Mosaic
    -   Bamboo Mosaic blocks cannot be used as a crafting ingredient where other wooden blocks are used, but they can be used as fuel
-   Added a unique Bamboo Raft and Bamboo Chest Raft which can be crafted like normal boats, but with Bamboo Planks
    -   They function the same as ordinary boats, but have a unique look to them

### Chiseled Bookshelf

A new, chiseled variation of the Bookshelf is now available when Update 1.20 experimental features are enabled.

-   Crafted with 6 planks and 3 wooden slabs
-   Can store Books, Book and Quills, Written Books, and Enchanted Books
    -   Holds up to 6 books
    -   Keeps the stories and lore of your world safe
    -   These can be added or removed from any slot by targeting the specific slot
-   Comparators can detect the last book placed/removed
    -   Perfect for hiding secrets in your spooky library
-   Works with Hoppers

### Hanging Signs

Ever wanted to hang up your signs? Fetch a few chains, strip some logs, and now you can! Hanging signs are now available when Update 1.20 experimental features are enabled.

-   Hanging Signs are a more expensive version of normal Signs
    -   Crafted with 2 chains and 6 stripped logs of your preferred wood type
    -   Crafting results in 6 Hanging Signs
-   Can be hung up in the following ways:
    -   Underneath a block that can provide support in the center, like a full block or a fence
    -   Attached to the solid side of a block
    -   Attached to the side or underneath another Hanging Sign
-   Unlike normal Signs, they cannot be placed directly on the ground without support from the side or above
    -   However, Hanging Signs that have a horizontal bar will not pop when the supporting block is removed

### Mob Heads on Note Blocks interaction

-   When placing a Mob Head on a Note Block, that Note Block will now play one of the ambient sounds of that mob when played by a player or powered by Redstone

### Piglin Mob Head

-   Piglins will now drop their heads when killed by a charged Creeper
-   Placing the Piglin head on a Note Block will play one of the Piglin's ambient sounds
-   The Piglin head will flap its ears when powered by Redstone, or when worn by a player while walking

### Advancements

-   Breeding Camels now counts for "The Parrots and the Bats" and is now required for "Two by Two"
-   Hanging Signs now counts for "Glow and Behold"

## Fixed bugs in 1.19.3

Around 200 bugs were fixed in this release. View the [list on the issue tracker](https://bugs.mojang.com/issues/?filter=27487).

---

