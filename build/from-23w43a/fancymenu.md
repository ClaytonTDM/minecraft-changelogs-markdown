# Minecraft Snapshot 23w43a

In this week's snapshot we're extending the Update 1.21 experiment with ALL the new blocks! And how about a bat makeover just in time for spooky fall? Happy crafting!

## Experimental Features

### Copper Family

-   The Copper family of blocks has been expanded, including:
    -   Chiseled Copper
    -   Copper Grate
    -   Copper Bulb
    -   Copper Door
    -   Copper Trapdoor
    -   Oxidized and waxed variants of all of the above

**Chiseled Copper**

-   Crafted with 2 Cut Copper Slabs of a shared oxidation level
-   Can be crafted in the Stonecutter

**Copper Grate**

-   A new type of decorative block unique to the Copper family
-   Crafted with 4 Copper Blocks of a shared oxidation level
    -   Can be crafted in the Stonecutter
-   Properties:
    -   Transparent and allows light to pass through
    -   Mobs cannot suffocate inside them
    -   Cannot conduct redstone
    -   Hostile mobs cannot naturally spawn on them

**Copper Bulb**

-   A light-emitting block that can toggle its light emission through redstone pulses
-   Oxidizes like other Copper blocks, and emits less light the more oxidized they are
    -   Copper Bulb: Light level 15
    -   Exposed Copper Bulb: Light level 12
    -   Weathered Copper Bulb: Light level 8
    -   Oxidized Copper Bulb: Light level 4
-   When placed, its light is off by default
    -   While the Copper Bulb is unpowered, it will toggle its light on or off when it receives a redstone pulse
    -   Copper Bulb light will stay on even when the redstone source is removed until it receives another redstone pulse to toggle it off
-   A redstone crystal will glow in the center of Copper Bulbs while it is powered by a redstone signal
-   Comparators will read a signal strength of 15 if the Copper Bulb's light is on
-   Does not conduct redstone power
-   Can craft 4 Copper Bulbs with:
    -   3 Copper Blocks of a shared oxidation level
    -   1 Blaze Rod
    -   1 Redstone Dust

**Copper Doors and Trapdoors**

-   Copper variants of Doors and Trapdoors that can oxidize over time and be waxed
-   Works like wooden doors in that they can be opened and closed with interaction as well as redstone
-   Crafted with Copper Blocks of a shared oxidation level

### Tuff Family

-   Tuff has been expanded to have its own family of blocks, including:
    -   Stair, Slab, Wall and Chiseled variants
    -   Tuff Bricks with Stair, Slab, Wall and Chiseled variants
    -   Polished Tuff with Stair, Slab and Wall variants
-   All Tuff variants can be crafted in the Stonecutter

## Changes

-   The Bat now has a new look
-   Thrown Ender Pearls produce a teleportation sound on impact
-   Small tweaks to the Telemetry Data Collection screen

### Bat

-   The Bat has an updated model, animations and texture

## Technical Changes

-   The Data Pack version is now 22
-   The Resource Pack version is now 20

## Data Pack Version 22

-   Added `tick` command
-   Added two new input fields for Selection Priority and Placement Priority in the Jigsaw block edit screen
-   Added `item` to `minecraft:arrow` and `minecraft:spectral_arrow`, this is the item that will be picked up
-   Renamed `Trident` to `item` in `minecraft:trident`

### `tick` command

Added a new `tick` command. This is an adminstative and debugging command that allows to control the ticking flow and measure the performance of the game. The command requires elevated permissions (admins and above) and so it is not by default available in command blocks and datapacks.

Syntax:

`tick query` - outputs the current target ticking rate, with information about the tick times performance.

`tick rate <rate>` - sets a custom target ticking rate to the specified value. The value must be greater than 1.0 and lower than 10000.0. Setting a very low tick rate can cause the game to feel unresponsive and setting too high tick rate for your system can cause the game to crash as the game now assumes, it is constantly falling behind the ticking target. Please use `tick query` or `<F3> + 2` (Integrated server only) debug screen to measure the performance of the game and adjust the tick rate accordingly. Setting a tick target lower than the default `20.0` will also cause the players to be simulated at a lower rate (including player movement and input controls), while setting a higher tick rate will cause the players to be simulated at the default rate of `20` ticks per second to maintain the expected responsiveness of the game, but can cause artifacts in entities interpolation.

`tick freeze` - freezes all gameplay elements, except for players and any entity a player is riding. This is useful for debugging and isolating issues with the game allowing the player to move around freely and inspect the world.

`tick step <time>` - Only works when the game is frozen. It runs the game for the specified number of ticks and then freezes the game again. This allows to step through the game a set amount of ticks at a time.

`tick step stop` - stops the current stepping process, and re-freezes the game.

`tick unfreeze` - unfreezes the game and resumes all gameplay elements.

`tick sprint <time>` - runs the game while ignoring the set ticking target rate (meaning that the game will run as fast as possible) for the specified number of ticks. At the end of the sprint, the game will resume the previous ticking target and display performance information about the tick times while sprinting. This is especially useful for testing gameplay elements that are time dependent, such as redstone contraptions, or mob behaviour in isolated environments that allow for much faster simulation.

`tick sprint stop` - stops the current tick sprint, and resumes the previous ticking target.

### Jigsaw Selection & Placement Priority

-   Selection Priority
    -   When the parent piece is being processed for connections, this controls the order in which this Jigsaw block attempts to connect to its target piece
    -   Jigsaws will be processed in descending priority order and randomly within the same priority
-   Placement Priority
    -   When this Jigsaw block connects to a piece, this is the order in which that piece is processed for connections in the wider structure
    -   Pieces will be processed in descending priority order with the default insertion order breaking ties within the same priority
-   This functionality has been added to support the ability for Jigsaw structures to generate branches in a depth-first order, as well as give finer control over ordering of connections
-   All existing Jigsaw blocks will default their Selection and Placement Priority to 0, resulting in the same behaviour as before these two configurable values were introduced

## Resource Pack Version 20

-   `bat.png` has been updated for the new Bat model
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

## Fixed bugs in Snapshot 23w43a

-   [MC-1981](https://bugs.mojang.com/browse/MC-1981) All arrow types lose their name/NBT data when shot and picked up
-   [MC-257786](https://bugs.mojang.com/browse/MC-257786) The game takes a long time to process players leaving realms groups or accepting or declining realms invitations
-   [MC-263263](https://bugs.mojang.com/browse/MC-263263) The operator buttons intersect the scroll bar within the realms player menu
-   [MC-263272](https://bugs.mojang.com/browse/MC-263272) You cannot click on an area to set a value within the spawn protection slider in the realms world options menu
-   [MC-263309](https://bugs.mojang.com/browse/MC-263309) You can configure your realm before it has been created by using the TAB key
-   [MC-265872](https://bugs.mojang.com/browse/MC-265872) The word "available" is misspelled as "availible" within the "recover;;_;;world.no;;_;;fallback" string
-   [MC-265874](https://bugs.mojang.com/browse/MC-265874) Right-clicking and keyboard input can disable or enable slots in the crafter
-   [MC-265880](https://bugs.mojang.com/browse/MC-265880) The subtitle for Crafters crafting something uses inconsistent tense
-   [MC-265884](https://bugs.mojang.com/browse/MC-265884) The word "occurred" is misspelled as "occured" within the "recover;;_;;world.message" string
-   [MC-265885](https://bugs.mojang.com/browse/MC-265885) Extra space in the word "cannot" in selectWorld.incompatible.description
-   [MC-265886](https://bugs.mojang.com/browse/MC-265886) The built-in update;;_;;1;;_;;21 pack contains duplicate files from the vanilla pack
-   [MC-265891](https://bugs.mojang.com/browse/MC-265891) Placing items into the crafter output slot deletes them
-   [MC-265896](https://bugs.mojang.com/browse/MC-265896) Additional lines appear on the crafter's face when it crafts
-   [MC-265899](https://bugs.mojang.com/browse/MC-265899) The translation for "gamerule.commandModificationBlockLimit" is in title case instead of sentence case
-   [MC-265901](https://bugs.mojang.com/browse/MC-265901) Comparator sometimes doesn't update when crafting with the Crafter
-   [MC-265938](https://bugs.mojang.com/browse/MC-265938) Elements within the list in the "Changes From Last Backup" realms menu cannot be selected via the mouse cursor
-   [MC-265939](https://bugs.mojang.com/browse/MC-265939) The "No pending invites!" text within the realms invitation menu cannot be narrated or selected
-   [MC-265961](https://bugs.mojang.com/browse/MC-265961) Inconsistent pixels near light on the crafter's side

---

# Minecraft Snapshot 23w42a

Hey! Today we bring you the first of the features we've shown you during Minecraft Live last weekend: the Crafter!

## Experimental Features

### Crafter

-   The Crafter is a new block that enables the crafting of items and blocks via Redstone
-   The Crafter will eject one crafted item at a time when powered by a new Redstone signal / pulse (not a continuous signal)
-   Upon receiving this new signal, the Crafter will eject the recipe result from the front face
-   If the output result has multiple type of items all the result items will be ejected together
-   The Crafter can be oriented in any direction when placed

**Crafter UI**

-   The Crafter has a 3x3 interactable crafting grid
-   The Crafter’s crafting grid slots are toggleable, meaning that the player can change the behavior of a slot by clicking or pressing on a slot with an empty hand
-   A slot that is ‘toggled’ cannot hold any items, and therefore cannot have items placed into it by other blocks, such as Hoppers and Droppers
-   Unlike the Crafting Table, the Crafter displays a preview of the crafted item which will be crafted and ejected on the next Redstone pulse but cannot be manually taken out by the player
-   The Crafter UI is shared between all players interacting with the Crafter, meaning that multiple players can interact with the Crafter at the same time, similar to Chests and Hoppers

**Crafter interaction with other blocks**

-   The Comparator signal strength is 0-9, where each non-empty or toggled slot adds 1 strength
-   Hoppers can be used to both insert and pull out items from the Crafter
-   Droppers can be used to insert items into the Crafter
-   Moving items in from another block (ex: Hopper, Dropper) prioritizes filling items into slots following these rules:
    -   Prioritize the first empty slot (from left-to-right, top-to-bottom)
    -   If there are no empty slots then prioritize the smallest stack of the same item (pick the first if there are multiple)
    -   If there is a toggled slot it will be skipped. The item will then be moved into the container
    -   If the item cannot be moved, it will be ejected into the world

We want to hear your feedback on the Crafter, so please let us know what you think the over in our dedicated [feedback thread](https://feedback.minecraft.net/hc/en-us/community/posts/20459106029709-Let-s-talk-about-the-Crafter-).

## Changes

-   Added an accessibility option that allows to hide the yellow splash texts in the main menu
-   Added a recovery screen for worlds with missing data (for example, if saving failed due to an unexpected shutdown)

## Technical Changes

-   The Data Pack version is now 21
-   The Resource Pack version is now 19
-   Minor changes to chat component serialization

### Chat components

**Serialization**

-   The optional `type` field has a new allowed value: `selector`
-   Components of type `nbt` now have `source` field with allowed values `entity`, `block`, `storage`

## Data Pack Version 21

-   Introduced Jigsaw structure pool aliases, which can be used to rewire pool selection
-   Added field `block_state` to `tnt` entity to allow replacement of rendered block model
-   Renamed field `Fuse` to `fuse` on `tnt` entity
-   Added `playersNetherPortalDefaultDelay` and `playersNetherPortalCreativeDelay` gamerules to control time (in ticks) that a player needs to stand in a Nether portal before changing dimensions
-   Added new gamerule `projectilesCanBreakBlocks` to control whether impact projectiles will destroy blocks that are destructible by them, i.e. Chorus Flowers, Pointed Dripstone and Decorated Pots
-   Added `white_smoke` particle type

### Jigsaw pool aliases

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

## Resource Pack Version 19

-   Added block model, item model and block state definitions for `crafter`
-   Added GUI container texture and sprites for `crafter`
-   Added `white_smoke` particle definition

## Fixed bugs in Snapshot 23w34a

-   [MC-189261](https://bugs.mojang.com/browse/MC-189261) Various Realms buttons and texts are incorrectly capitalized
-   [MC-223774](https://bugs.mojang.com/browse/MC-223774) Firework Rockets can't be used to break Chorus Flowers
-   [MC-232719](https://bugs.mojang.com/browse/MC-232719) The scroll bar within the singleplayer menu doesn't reset its position to the top of the list when searching for worlds
-   [MC-234483](https://bugs.mojang.com/browse/MC-234483) Some strange pixels can be seen on the left side of world slot frames within several realms menus
-   [MC-262888](https://bugs.mojang.com/browse/MC-262888) Clicking "I know what I'm doing!" on the world loading screen when loading a world in a new snapshot is way too loud
-   [MC-264966](https://bugs.mojang.com/browse/MC-264966) "Signature is missing from Property textures" appears in the logs of some Minecraft worlds due to player heads
-   [MC-265515](https://bugs.mojang.com/browse/MC-265515) The "You don't seem to have a Realm" element in the realms menu cannot be selected via the mouse cursor
-   [MC-265517](https://bugs.mojang.com/browse/MC-265517) The "Buy a realm!" button is automatically selected when opening the "Add Realm" interface
-   [MC-265551](https://bugs.mojang.com/browse/MC-265551) "No pending invites!" tooltip in Realms is now untranslatable
-   [MC-265744](https://bugs.mojang.com/browse/MC-265744) Kick during login causes client error
-   [MC-265745](https://bugs.mojang.com/browse/MC-265745) You can’t break decorated pots with fireworks launched from crossbow
-   [MC-265751](https://bugs.mojang.com/browse/MC-265751) Decorated pot subtitles are inconsistent
-   [MC-265758](https://bugs.mojang.com/browse/MC-265758) Decorated pots can be destroyed by projectiles in adventure mode
-   [MC-265761](https://bugs.mojang.com/browse/MC-265761) Decorated pots are missing from the creative inventory's redstone blocks tab
-   [MC-265767](https://bugs.mojang.com/browse/MC-265767) Commands don't show error messages in chat
-   [MC-265773](https://bugs.mojang.com/browse/MC-265773) Functions executed as advancement rewards are executed at the top level
-   [MC-265778](https://bugs.mojang.com/browse/MC-265778) "gamerule maxCommandChainLength 0" prevents subsequent command execution in the world
-   [MC-265789](https://bugs.mojang.com/browse/MC-265789) Realms popup strings consist of inconsistent concluding punctuation

---

# Minecraft Snapshot 23w41a

For this week's Snapshot, we've made improvements to the Decorated Pots!

Additionally, Realms is now available in Snapshots moving forward! Any player who has an active Realms subscription is eligible to create a free Snapshot Realm. This Snapshot Realm will be separate from your regular Realm to prevent any issues from impacting your regular Realm. For more information on how Snapshot Realms work, please see Realms in [Minecraft: Java Edition Snapshot FAQ](https://help.minecraft.net/hc/en-us/articles/20143730191245).

## New Features

### Snapshot Realms

-   Realms is now available in Snapshots, Pre-Releases, and Release Candidates
-   The version of the last played world on a Realm is displayed in the Realms list
-   Experiments are available for newly created worlds

## Changes

-   Decorated Pots can now store items, and can be smashed by projectiles

### Decorated Pots

-   Decorated Pots now store up to a single stack of items
-   Hoppers, Hopper Minecarts and Droppers can now insert and/or extract items from Decorated Pots
-   Comparators can now read the number of items in Decorated Pots
-   Players can interact with Decorated Pots to insert items into them
-   Decorated Pots have no GUI, and need to be broken to retrieve or discover their content by players
-   Player interactions with Decorated Pots cause the Decorated Pot to wobble and trigger the vibration frequency of 11
-   Decorated Pots can be smashed by projectiles which cause them to shatter and drop their content
-   Decorated Pots now stack up to 64

We want to hear your feedback on these improvements to Decorated Pots - let us know what you think in [our dedicated feedback site post](https://feedback.minecraft.net/hc/en-us/community/posts/20289952762637-Let-s-talk-about-Decorated-Pot-improvements-)!

## Technical Changes

-   The Data Pack version is now 20
-   The name of non-living entities will now be shown if looked at and a CustomName is set, or always displayed if CustomNameVisible is set, similar to living entities

## Data Pack Version 20

-   Changed `function` command results
-   Adjusted check for gamerule `maxCommandChainLength`
-   Added new gamerule `maxCommandForkCount`
-   Reintroduced form of the `execute` command: `execute if function`
-   Reintroduced form of the `return` command: `return run`
-   Decorated Pots with `cracked` state set to true will always shatter when broken
-   Added new `dust_plume` particle type

### Commands

**Functions**

-   `function` command has been changed to better accomodate new `return` command
-   Functions no longer have any result unless they use `return` or there was error during lookup or instantiation
    -   That means `function` command will no longer return (or even display) number of commands run during execution
    -   Error conditions:
        -   Calling non-existent function
        -   Calling empty function tag
        -   Macro instantiation failure
-   "Result" in this context means values that would be stored with `execute store`
-   The previous behavior where every command in function would perform store if a function was called with `execute store ... run function` is removed
    -   That means that a single call to `function` will store at most once (zero times if `return` was not called)
    -   For function tags with multiple entries, function results will be accumulated, but partial results will be stored at the end of every function

**Limits**

Existing limits for functions have been refined to accomodate new execution rules and prevent wider range of exploits:

-   Limits apply even if run from command line (so it will now always behave as if they were placed in a function)
    -   For example, all functions called by `execute as @e run function` will count towards same limit
    -   Executions from command blocks still count as separate ones
-   Limit `maxCommandChainLength` for functions will now count "operations" like:
    -   execution of command for a single context
    -   execution of a stage in `execute` (no matter how many contexts were modified)
    -   invocation of function
-   New limit with game rule `maxCommandForkCount` now restricts total amount of context that can be created by single state of functions like `execute`
    -   Example: if there are 5 entities in world, `execute as @e` creates 5 contexts, while `execute as @e at @e` creates 5;;*;;5 = 25 contexts

**`execute if function`**

An `execute` sub-command that runs a function or function tag and matches the return value(s). This is a reintroduction of functionality removed in previous version. If a tag is given, all functions run regardless of the results of prior functions.

Syntax: `execute if|unless function <function> <continuation>`

Parameters:

-   `function`: The function or tag to run

**Matching**

The matching of the result value of the function(s) that run:

-   At least one of the functions must succeed for the match to succeed
-   A succeessful call is defined as a function that:
    -   Uses the `return` command to return a value
    -   The return value is not 0
-   If no functions exited with `return`, neither `if` or `unless` will run

**`return run`**

A form of the `return` command is now available, `return run`. This is a reintroduction of functionality removed in previous version.

Syntax: `return run <command>`

This takes the `result` value from running the specified `command` and returns that as the return value of the function.

-   If command did not return any value (like, for example, call to a `function` without `return`), return will not execute and function will continue execution
-   If the given command fails, the return value is `0`
-   In all other aspects, it works like `return` with a specified return value
-   In case of fork (for example `return run execute as @e run some_command`) the first execution of the command will return
    -   If there are no executions (for example in `return run execute if @e[something_impossible] run some_command`) function will not return and will continue execution

## Fixed bugs in Snapshot 23w41a

-   [MC-16937](https://bugs.mojang.com/browse/MC-16937) Shooting an arrow into the nether portal can hurt anybody when PvP is disabled
-   [MC-50319](https://bugs.mojang.com/browse/MC-50319) Player owned projectiles lose their player ownership when exiting portals
-   [MC-81656](https://bugs.mojang.com/browse/MC-81656) Field determining whether or not a wither skull is blue is not saved to and read from NBT
-   [MC-118403](https://bugs.mojang.com/browse/MC-118403) Vexes summoned by evoker do not have evoker team applied
-   [MC-143266](https://bugs.mojang.com/browse/MC-143266) Nested function calls reevaluate maxCommandChainLength before queueing commands
-   [MC-143269](https://bugs.mojang.com/browse/MC-143269) Nested intermediate functions are skipped when maxCommandChainLength commands are already queued
-   [MC-189227](https://bugs.mojang.com/browse/MC-189227) First time tutorial uses old textures
-   [MC-198113](https://bugs.mojang.com/browse/MC-198113) Incomplete commands do not prevent functions from loading
-   [MC-233276](https://bugs.mojang.com/browse/MC-233276) You can feed adult donkeys, horses, llamas or mules with maximum Temper value, and hand animation is not played
-   [MC-234323](https://bugs.mojang.com/browse/MC-234323) Performance issue with text parsing
-   [MC-236501](https://bugs.mojang.com/browse/MC-236501) Renamed minecarts and boats don't show their name tag in the world
-   [MC-249408](https://bugs.mojang.com/browse/MC-249408) Boats with Chests lose their name when placed
-   [MC-257786](https://bugs.mojang.com/browse/MC-257786) The game takes a long time to process players leaving realms groups or accepting or declining realms invitations
-   [MC-260576](https://bugs.mojang.com/browse/MC-260576) Incomplete 'execute summon' command still runs
-   [MC-261682](https://bugs.mojang.com/browse/MC-261682) Brushing can continue when block goes out of range
-   [MC-262105](https://bugs.mojang.com/browse/MC-262105) Entities can block brushing actions when players look very close to their hitboxes
-   [MC-263575](https://bugs.mojang.com/browse/MC-263575) When an item is extracted from suspicious sand/gravel, gravity does not work on this block
-   [MC-263660](https://bugs.mojang.com/browse/MC-263660) "Sign wobbles" subtitle is the same for signs and hanging signs, causing translation issues
-   [MC-264595](https://bugs.mojang.com/browse/MC-264595) Return command cannot run function when inside another function
-   [MC-264699](https://bugs.mojang.com/browse/MC-264699) Functions return the output of commands only if the command doesn't start with return run
-   [MC-264710](https://bugs.mojang.com/browse/MC-264710) "/execute if function" always fails and "/execute unless function" always succeeds if run from a function
-   [MC-264880](https://bugs.mojang.com/browse/MC-264880) GUI slider uses new texture with programmer art
-   [MC-265516](https://bugs.mojang.com/browse/MC-265516) The "Cancel" button within some realms menus can be deselected using keyboard navigation despite it being the only element within the said menu
-   [MC-265647](https://bugs.mojang.com/browse/MC-265647) Shield arm position is incorrect while in a boat
-   [MC-265656](https://bugs.mojang.com/browse/MC-265656) Pumpkins can no longer be sheared

---

# Minecraft Snapshot 23w40a

We are now releasing Snapshot 23w40a, the first snapshot for 1.20.3! This snapshot contains improvements for shields, changes to chat component serialization and bug fixes.

## Changes

-   When a player is blocking with a shield, the arm with the shield now follows the direction the player is looking at, when viewed from third person perspective

## Technical Changes

-   The Data Pack version is now 19
-   A few minor changes to chat component serialization

### Chat components

**Serialization**

-   Plain-text chat components (text, no sibilings, no stylings) are now always serialized as string instead of `{"text': "blah"}`
-   Chat components now serialize to NBT when sent over network
-   Chat components now have an optional `type` value (allowed values: `text`, `translatable`, `score`, `nbt`, `keybind`) to speed up parsing and improve error checking
-   `id` field in `show_entity` `hoverEvent` style now also accepts UUID as an array of 4 ints
-   Numeric and boolean arguments for `translate` component are no longer converted to string
-   The following JSON component representations are no longer accepted:
    -   `null`
    -   `[]`
-   Errors in following style fields are no longer silently ignored:
    -   `color`
    -   `clickEvent`
    -   `hoverEvent`
    -   `hoverEvent[action=show_entity].contents.name`
    -   `hoverEvent[action=show_item].contents.tag`

## Data Pack Version 19

### Tags

-   Added `can_breathe_under_water` entity type tag which disables drowning
-   Added `can_break_armor_stands` damage type tag for damage types that can incrementally knock down armor stands

## Fixed bugs in 23w40a

-   [MC-47607](https://bugs.mojang.com/browse/MC-47607) Barrier particles aren't shown if particles are set to minimal
-   [MC-50647](https://bugs.mojang.com/browse/MC-50647) Slime mob spawners spawn slimes only in slime chunks
-   [MC-78314](https://bugs.mojang.com/browse/MC-78314) (Marker) Armor stands create bubbles in water
-   [MC-109101](https://bugs.mojang.com/browse/MC-109101) Shields do not block damage while the player faces straight up
-   [MC-114761](https://bugs.mojang.com/browse/MC-114761) Area effect cloud applies effect to dying mob
-   [MC-172398](https://bugs.mojang.com/browse/MC-172398) Fire texture renders according to the player's rotation in the player inventory
-   [MC-221558](https://bugs.mojang.com/browse/MC-221558) Light particles aren't shown if particles are set to minimal
-   [MC-227255](https://bugs.mojang.com/browse/MC-227255) Beehives and bee nests do not rotate/mirror correctly in structure blocks
-   [MC-236946](https://bugs.mojang.com/browse/MC-236946) Shield attack vector is normalized incorrectly
-   [MC-253819](https://bugs.mojang.com/browse/MC-253819) Bells don't rotate correctly when loaded by structure/jigsaw blocks
-   [MC-254850](https://bugs.mojang.com/browse/MC-254850) An operator can kick a host of a LAN world
-   [MC-255173](https://bugs.mojang.com/browse/MC-255173) Nether portal teleportation is inaccurate at large coordinate values
-   [MC-261303](https://bugs.mojang.com/browse/MC-261303) Decorated pots have an unused "cracked" block state
-   [MC-263123](https://bugs.mojang.com/browse/MC-263123) Mending incorrectly calculates overflow after full repair
-   [MC-264748](https://bugs.mojang.com/browse/MC-264748) GLX.;;_;;initGlfw Treats Pointer as a String
-   [MC-265353](https://bugs.mojang.com/browse/MC-265353) Clocks and Compasses in Item Display Entities don't show correct time/direction
-   [MC-265462](https://bugs.mojang.com/browse/MC-265462) Sending resource pack during play phase shows loading terrain screen for a long time
-   [MC-265519](https://bugs.mojang.com/browse/MC-265519) Game minimizes when certain areas of the screen are clicked on Mac in fullscreen mode

---

# Minecraft Snapshot 23w35a

We are releasing a new snapshot that contains updates to support libraries, and a whole bundle of bug fixes!

## Technical Changes

-   The `LWJGL` library has been upgraded to version 3.3.2
-   The default Java version shipped with the game has been upgraded to Microsoft OpenJDK 17.0.8

## Fixed bugs in 23w35a

-   [MC-229121](https://bugs.mojang.com/browse/MC-229121) JVM crash in jdk.internal.loader.NativeLibraries.load
-   [MC-242385](https://bugs.mojang.com/browse/MC-242385) Inconsistency on the buffer size calculation in the chunk packet data
-   [MC-256549](https://bugs.mojang.com/browse/MC-256549) Baby camels that aren't moving face in the direction of their adults when pathfinding to players that are tempting them
-   [MC-256737](https://bugs.mojang.com/browse/MC-256737) Sniffers, frogs, goats, and camels prioritize pathfinding to their lover when fed over panicking when being damaged
-   [MC-259475](https://bugs.mojang.com/browse/MC-259475) The rotation of controlling passengers on sitting camels is sometimes restricted while adjusting your rotation slowly
-   [MC-259860](https://bugs.mojang.com/browse/MC-259860) Sitting camels that have passengers continuously look up and down for other players
-   [MC-261951](https://bugs.mojang.com/browse/MC-261951) Dragon/piglin head does not move when placed on a jukebox that is playing a record
-   [MC-264092](https://bugs.mojang.com/browse/MC-264092) Functions execute commands out of order when containing /say
-   [MC-264558](https://bugs.mojang.com/browse/MC-264558) The word "reconfiguring" is spelled as "reconfiging" within the "connect.reconfiging" translation key
-   [MC-264559](https://bugs.mojang.com/browse/MC-264559) Grammar error in "Added pack(s) contain symbolic links"
-   [MC-264561](https://bugs.mojang.com/browse/MC-264561) Some new strings introduced in 23w31a are missing articles
-   [MC-264566](https://bugs.mojang.com/browse/MC-264566) Force loaded chunks reset when changing versions
-   [MC-264619](https://bugs.mojang.com/browse/MC-264619) Strings for returning to menus and loading lists are inconsistently spelled and capitalized
-   [MC-264686](https://bugs.mojang.com/browse/MC-264686) Z-fighting occurs on the backs of bamboo chest rafts
-   [MC-264698](https://bugs.mojang.com/browse/MC-264698) The absorption effect is lost when reloading the world
-   [MC-264750](https://bugs.mojang.com/browse/MC-264750) Effects are lost when updating to 23w32a
-   [MC-264897](https://bugs.mojang.com/browse/MC-264897) Shift-clicking to unequip armor bypasses vibrations in survival
-   [MC-264899](https://bugs.mojang.com/browse/MC-264899) Narrator is not capitalized in the Narrator Hotkey tooltip
-   [MC-264915](https://bugs.mojang.com/browse/MC-264915) Some mobs can still attack you through blocks
-   [MC-264917](https://bugs.mojang.com/browse/MC-264917) Entry list gradients render below content
-   [MC-264920](https://bugs.mojang.com/browse/MC-264920) Some buttons within the "Report Player" menu are improperly capitalized
-   [MC-264947](https://bugs.mojang.com/browse/MC-264947) Torches generated on end fountain don't emit light

---

# Minecraft Snapshot 23w33a

We are making some important updates to our Player Reporting Tool in this Snapshot to better protect the online safety of our players.

Playing Minecraft should be an inclusive and safe experience for everyone, which is why alongside in-game chat messages, you will now be able to report player skins and usernames that violate our Community Standards in Java Edition.

Just like with chat reports, nothing is automated. Any reported skin or username will be reviewed manually by a team of trained Minecraft moderators, who will use the submitted evidence to decide whether the skin and/or username is in breach of our Community Standards. Skins that are in violation of these standards will be removed from Minecraft and will no longer be accessible for use by any player. Usernames that are in violation of these standards will need to be changed before that player can play online via a shared server or Realm; though single player mode will still be accessible. To find out more about this and other safety policies, including more detail on the suspension procedure, appeals process, and how we handle malicious or repeat reporting, please visit our dedicated FAQ page.

## New Features

### Player Skin & Name Reporting

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

-   Sponges and Wet Sponges now have their own custom sounds
-   The calculations to determine whether a mob can attack a player or other mobs have been changed
-   Added the "Narrator Hotkey" accessibility option
    -   Allows the narrator to be toggled on and off with `Ctrl+B`
-   Added "I want to report them" Player Reporting category
-   A change has been reverted where armor trim patterns would be masked by the underlying armor texture

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

This change does not affect the reach of players, and mobs still need to see their target to attack it. We believe this new system will be more intuitive and will result in a more consistent behavior, and we welcome all feedback on this change.

## Technical Changes

-   The charts on the debug screen can now be toggled with F3+1 (pie chart), F3+2 (FPS and TPS) and F3+3 (bandwidth and ping) instead of holding Shift, Alt or Ctrl while opening the screen

### Data Pack Changes

-   Added `decal` field to armor trim patterns (default: `false`)
    -   If `true`, the pattern texture will be masked based on the underlying armor

## Fixed bugs in 23w33a

-   [MC-2310](https://bugs.mojang.com/browse/MC-2310) Wrong attack radius calculation damages/kills entities through blocks and corners
-   [MC-112133](https://bugs.mojang.com/browse/MC-112133) Eating chorus fruit does not reset fall distance
-   [MC-118616](https://bugs.mojang.com/browse/MC-118616) The sounds of magma cubes and slimes aren't controlled by the "Hostile Creatures" sound slider
-   [MC-122645](https://bugs.mojang.com/browse/MC-122645) Narrator hotkey cannot be customized or disabled
-   [MC-125046](https://bugs.mojang.com/browse/MC-125046) "RepairCost" NBT tag is created on any renamed item using anvils which can cause items to not stack properly
-   [MC-181109](https://bugs.mojang.com/browse/MC-181109) Grindstone adds RepairCost: 0
-   [MC-182820](https://bugs.mojang.com/browse/MC-182820) Repeaters and comparators use wood sounds for placing/breaking despite being made mostly of stone
-   [MC-197473](https://bugs.mojang.com/browse/MC-197473) Renamed block entities don't stack properly
-   [MC-200484](https://bugs.mojang.com/browse/MC-200484) Jukeboxes use stone sounds despite being composed predominantly of wood
-   [MC-214126](https://bugs.mojang.com/browse/MC-214126) Bees don't pollinate themselves with spore blossoms or chorus flowers
-   [MC-217628](https://bugs.mojang.com/browse/MC-217628) Levers use wood sounds rather than stone
-   [MC-217629](https://bugs.mojang.com/browse/MC-217629) Tripwire hooks use stone sounds, rather than wood
-   [MC-257909](https://bugs.mojang.com/browse/MC-257909) Zoglins, hoglins, and pandas can still attack players riding camels
-   [MC-264741](https://bugs.mojang.com/browse/MC-264741) Unequip vibration only works in creative mode
-   [MC-264743](https://bugs.mojang.com/browse/MC-264743) The "Debug" line on the debug screen that shows which debug graphs are enabled doesn't mention the ping and network traffic chart
-   [MC-264746](https://bugs.mojang.com/browse/MC-264746) Armor trims no longer render their second layer
-   [MC-264753](https://bugs.mojang.com/browse/MC-264753) Eye armor trim on chainmail helmets now has absolutely no effect
-   [MC-264773](https://bugs.mojang.com/browse/MC-264773) There's a misplaced label in the network traffic graph, overlapping minimum B/s rate text

---

