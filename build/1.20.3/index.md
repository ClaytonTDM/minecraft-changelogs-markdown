We're now releasing 1.20.3 for Minecraft: Java Edition. This release comes with new functionality for Decorated Pots, a new look for the Bat and improvements to Shields.

This release also includes new features for map makers and pack creators like Scoreboard Display Names and extensions for the `execute` and `return` commands and a new administrative tool: the `tick` command.

The optional Update 1.21 Experiment also shows up in this version as a sneak preview of features for the next major version of Minecraft.

# Changes

-   Decorated Pots can now store items, and can be smashed by projectiles
-   When a player is blocking with a shield, the arm with the shield now follows the direction the player is looking at, when viewed from third-person perspective
-   The Bat now has a new look
-   Added an accessibility option that allows to hide the yellow splash texts in the main menu
-   Added a recovery screen for worlds with missing data (for example, if saving failed due to an unexpected shutdown)
-   Other minor tweaks

![Minecraft Java Edition 1.20.3 Image 2 Thumbnail](https://launchercontent.mojang.com/images/1.20.3_image_2_tn.jpg)

## Decorated Pots

-   Decorated Pots now store up to a single stack of items
-   Hoppers, Droppers and Minecarts with Hoppers can now insert and/or extract items from Decorated Pots
-   Comparators can now read the number of items in Decorated Pots
-   Players can interact with Decorated Pots to insert items into them
-   Decorated Pots have no GUI, and need to be broken to retrieve or discover their content by players
-   Player interactions with Decorated Pots cause the Decorated Pot to wobble and trigger the vibration frequency of 11
-   Decorated Pots can be smashed by projectiles which cause them to shatter and drop their content
-   Decorated Pots now stack up to 64

## Bat

-   The Bat has an updated model, animations and texture

![Minecraft Java Edition 1.20.3 Image 1 Thumbnail](https://launchercontent.mojang.com/images/1.20.3_image_1_tn.jpg)

## Minor Tweaks

-   Monster Spawner now renders their inner faces when looking inside
-   Thrown Ender Pearls produce a teleportation sound on impact
-   Small tweaks to the Telemetry Data Collection screen

# Technical Changes

-   The Data Pack version is now 26
-   The Resource Pack version is now 22
-   A few minor changes to chat component serialization
-   The name of non-living entities will now be shown if targeted and a CustomName is set, or always displayed if CustomNameVisible is set, similar to living entities
-   Changes to downloaded/world resource pack handling

## Chat Components

### Serialization

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

## World Resource Packs

Changes have been made to world resource packs (`resources.zip`), Realms resource packs and resource packs controlled by dedicated servers.

### User Interface

-   The download screen has been replaced with a toast
-   World resource pack application now starts together with chunk loading

### Local Storage

Downloaded packs are now stored in the `downloads` directory (with a different file organization than the old `server-resource-packs`)

-   Only up to 20 files are cached
-   Inside this directory there is also log file (`log.json`) that stores information about downloaded files for debug purposes

### Server Config

Downloaded packs now have a unique id (GUID/UUID) that can be used to differentiate them

-   For dedicated server packs, this value can be configured with the `resource-pack-id` option in `server.properties`
-   If the value is missing, it will be generated based on the pack URL
-   If the hash of a pack is not set, this pack will be redownloaded before every application
    -   Previously, if the hash was missing, the latest downloaded version of pack was applied

### Packets

Some additional options have been added for 3rd-party servers software:

-   The client can now accept multiple server resource packs
-   A new packet was added to un-apply server resource packs
-   The client now sends additional updates about packs (like download success)
-   Resource packs are no longer cleaned when entering configuration phase

# Data Pack Version 19

## Tags

-   Added `can_breathe_under_water` entity type tag which disables drowning
-   Added `can_break_armor_stand` damage type tag for damage types that can incrementally knock down armor stands

# Data Pack Version 20

-   Changed `function` command results
-   Adjusted check for gamerule `maxCommandChainLength`
-   Added new gamerule `maxCommandForkCount`
-   Reintroduced form of the `execute` command: `execute if function`
-   Reintroduced form of the `return` command: `return run`
-   Decorated Pots with the `cracked` state set to true will always shatter when broken
-   Added new `dust_plume` particle type

## Commands

### Functions

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

#### Limits

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

### `execute if function`

An `execute` sub-command that runs a function or function tag and matches the return value(s). This is a reintroduction of functionality removed in a previous version. If a tag is given, all functions run regardless of the results of prior functions.

Syntax: `execute if|unless function <function> <continuation>`

Parameters:

-   `function`: The function or tag to run

#### Matching

The matching of the result value of the function(s) that run:

-   At least one of the functions must succeed for the match to succeed
-   A succeessful call is defined as a function that:
    -   Uses the `return` command to return a value
    -   The return value is not 0
-   If no functions exited with `return`, neither `if` or `unless` will run

### `return run`

A form of the `return` command is now available, `return run`. This is a reintroduction of functionality removed in a previous version.

Syntax: `return run <command>`

This takes the `result` value from running the specified `command` and returns that as the return value of the function.

-   If the command did not return any value (like, for example, a call to a `function` without `return`), return will not execute and function will continue execution (changed in Data Pack Version 23)
-   If the given command fails, the return value is `0`
-   In all other aspects, it works like `return` with a specified return value
-   In case of a fork (for example `return run execute as @e run some_command`), the first execution of the command will return
    -   If there are no executions (for example in `return run execute if entity @e[something_impossible] run some_command`), the function will not return and will continue execution (changed in Data Pack Version 23)

# Data Pack Version 21

-   Introduced Jigsaw structure pool aliases, which can be used to rewire pool selection
-   Added field `block_state` to `tnt` entity to allow replacement of rendered block model
-   Renamed field `Fuse` to `fuse` on `tnt` entity
-   Added `playersNetherPortalDefaultDelay` and `playersNetherPortalCreativeDelay` game rules to control time (in ticks) that a player needs to stand in a Nether portal before changing dimensions
-   Added new game rule `projectilesCanBreakBlocks` to control whether impact projectiles will destroy blocks that are destructible by them, i.e. Chorus Flowers, Pointed Dripstone and Decorated Pots
-   Added `white_smoke` particle type

## Jigsaw Pool Aliases

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

# Data Pack Version 22

-   Added `tick` command
-   Added two new input fields for Selection Priority and Placement Priority in the Jigsaw block edit screen
-   Added `item` to `minecraft:arrow` and `minecraft:spectral_arrow`, this is the item that will be picked up
-   Renamed `Trident` to `item` in `minecraft:trident`

## `tick` Command

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

## Jigsaw Selection & Placement Priority

-   Selection Priority
    -   When the parent piece is being processed for connections, this controls the order in which this Jigsaw block attempts to connect to its target piece
    -   Jigsaws will be processed in descending priority order and randomly within the same priority
-   Placement Priority
    -   When this Jigsaw block connects to a piece, this is the order in which that piece is processed for connections in the wider structure
    -   Pieces will be processed in descending priority order with the default insertion order breaking ties within the same priority
-   This functionality has been added to support the ability for Jigsaw structures to generate branches in a depth-first order, as well as give finer control over ordering of connections
-   All existing Jigsaw blocks will default their Selection and Placement Priority to 0, resulting in the same behaviour as before these two configurable values were introduced

# Data Pack Version 23

-   Decorated Pots can now utilize loot tables and will read from the `LootTable` tag key
-   Additional changes to command functions

## Commands

### `return`

-   `return run` will now always return
    -   If there are no valid results from the returned command, the function containing the `return run` will fail (i.e. `success=0` and `result=0`)
-   `return run` will now propagate the success value together with the results value (previously it always set success to `1`)
-   `return run` now also allows storing values - that means `execute store ... run return run some_command` will both store the value and return it outside the function
-   A new subcommand `return fail` has been added to make the whole function fail (i.e. return `success=0` and `result=0`)

### `function`

-   If `function <function tag>` runs multiple functions in combination with `return run`, execution will stop after first `return` in any of the functions
-   A single call to the `function` command will always return when run with `return run`
    -   For example, `return run execute [split context] run function <some function with conditional return>` will always return after processing the first context

### `execute if|unless function`

-   `execute if|unless function` no longer always fails if none of the functions had a `return`
    -   If there were no `returns` in called functions, `if` will fail and `unless` will pass
    -   The first `return` in any of called functions will return (for a single context)

# Data Pack Version 24

-   Increased maximum value of Jigsaw structure variable `size` from 7 to 20

# Data Pack Version 25

-   Added individual display names for scoreboard entries
-   Scoreboard sidebar will now render even when if there are no scores in selected objective

## Commands

### `scoreboard`

#### Display Names

Each entry in a scoreboard can now have a custom display name.

-   These values are kept separate per objective and score holder
-   If the name is not present, the score holder name is used (i.e. the old behavior)
-   If the score is reset or the whole objective is removed, the name is not preserved
-   Team decorations will still be applied to names as normal
-   Subcommands for managing names:
    -   `scoreboard players display name <targets> <objective> <text component>` - set display name
    -   `scoreboard players display name <targets> <objective>` - clear display name

#### Display Name Auto-Update

To make display name management easier, objectives can also be configured to auto-update display names on every score update.

-   This option is disabled by default
-   If a score holder has no display name (because it can't be attributed to any currently loaded entity), the current name is preserved
-   Command to control auto-update for objective:
    -   `scoreboard objectives modify <scoreboard> displayautoupdate [true|false]`

#### Number Formatting

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

# Data Pack Version 26

-   Renamed `minecraft:grass` block and item to `minecraft:short_grass`

# Resource Pack Version 19

-   Added block model, item model and block state definitions for `crafter`
-   Added GUI container texture and sprites for `crafter`
-   Added `white_smoke` particle definition

# Resource Pack Version 20

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

# Resource Pack Version 21

-   The `uniform` font has been updated to use Unifont 15.1.04 (from 15.0.06)
-   The only supported texture format is now `.png`

## Breeze Mob

-   Added entity models and textures for experimental Breeze mob:
    -   `breeze`, `wind_charge`
-   Added shader:
    -   `breeze_wind`

# Resource Pack Version 22

-   Renamed `minecraft:grass` block and item to `minecraft:short_grass`

# Experimental Features

## Crafter

-   The Crafter is a new block that enables the crafting of items and blocks via Redstone
-   The Crafter will eject one crafted item at a time when powered by a Redstone pulse
-   Upon receiving a signal, the Crafter will eject the recipe result from the front face
-   If the output result has multiple types of items, all the result items will be ejected together
-   When placed, the front face of the Crafter will face towards the Player

### Crafter User Interface

-   The Crafter has a 3x3 interactable crafting grid
-   The Crafter’s crafting grid slots are toggleable, meaning that the player can change the behavior of a slot by interacting with it while not holding an item
-   A slot that is ‘toggled’ cannot hold any items
    -   Other blocks such as Hoppers and Droppers also cannot place items into them
-   Unlike the Crafting Table, the Crafter displays a preview of the crafted item which will be crafted and ejected on the next Redstone pulse, but cannot be manually taken out by the player
-   The Crafter User Interface is shared between all players interacting with it, meaning that multiple players can interact with the Crafter at the same time, similar to Chests and Hoppers

### Crafter Interaction with Other Blocks

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

## Copper Family

The Copper family of blocks has been expanded, including:

-   Chiseled Copper
-   Copper Grate
-   Copper Bulb
-   Copper Door
-   Copper Trapdoor
-   Oxidized and waxed variants of all of the above

### Chiseled Copper

-   Crafted with 2 Cut Copper Slabs of a shared oxidation level
-   Can be crafted in the Stonecutter

### Copper Grate

-   A new type of decorative block unique to the Copper family
-   Crafted with 4 Copper Blocks of a shared oxidation level
    -   Can be crafted in the Stonecutter
-   Properties:
    -   Transparent and allows light to pass through
    -   Mobs cannot suffocate inside them
    -   Cannot conduct Redstone
    -   Hostile mobs cannot naturally spawn on them
    -   Can hold Water

### Copper Bulb

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

### Copper Doors and Trapdoors

-   Copper variants of Doors and Trapdoors that can oxidize over time and be waxed
-   Works like wooden doors in that they can be opened and closed with interaction, as well as Redstone
-   Crafted with Copper Blocks that have a shared oxidation level

## Tuff Family

Tuff has been expanded to have its own family of blocks, including:

-   Stair, Slab, Wall and Chiseled variants
-   Tuff Bricks with Stair, Slab, Wall and Chiseled variants
-   Polished Tuff with Stair, Slab and Wall variants

All Tuff variants can be crafted in the Stonecutter.

## Added Breeze Mob

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

## Trial Spawner

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

## Trial Chambers

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

### Known Issues

-   The corridors sometimes end with a dead end
-   Aquifers, Lush Caves, and Sculk Veins sometimes intersect with the Trial Chamber

## Trial Key

-   An item that can only be obtained from Trial Spawners
-   Trial Keys do not currently have any functionality

# Fixed bugs in 1.20.3

Around 85 bugs were fixed in this release. View the [list on the issue tracker](https://bugs.mojang.com/issues/?filter=27936).