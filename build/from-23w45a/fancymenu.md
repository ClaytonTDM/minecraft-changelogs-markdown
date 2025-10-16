# Minecraft Snapshot 23w45a

We're happy to share another snapshot, this time offering an early look at some exciting new adventures waiting for you underground in the form of Trial Chambers!

Trial Chambers are designed to be challenging moments of combat and exploration hidden medium-deep below the surface of the Overworld. Trial Chambers bring new decorative and lighting blocks, new Trial Spawners to deliver a different style of multi-mob fights, and the bushy-browed Breeze, a new mob specific to Trial Chambers which will add quite a bit of chaos to your combats.

Happy Mining!

## Changes

-   Monster Spawner now renders their inner faces when looking inside

## Technical Changes

-   The Data Pack version is now 24
-   The Resource Pack version is now 21

## Data Pack Version 24

-   Added experimental Breeze mob
-   Added experimental Trial Spawner block
-   Increased maximum value of Jigsaw structure variable `size` from 7 to 20
-   Added `trial_chambers_copper_bulb_degradation` structure processor list

## Resource Pack Version 21

-   `uniform` font has been updated to use Unifont 15.1.04 (from 15.0.06)
-   The only supported texture format is now .png

### Breeze Mob

-   Added entity models and textures for experimental Breeze mob:
    -   `breeze`, `wind_charge`
-   Added shader:
    -   `breeze_wind`

## Experimental Features

### Added Breeze mob

-   The Breeze is a cunning, hostile mob that can spawn via Trial Spawner in some rooms within the Trial Chambers
-   The Breeze moves primarily by leaping around the target, sometimes jumping quite long distances
-   An aggressive adversary, the Breeze shoots volatile wind energy in the form of wind charge projectiles at its target
-   Wind charges deal a small amount of damage when colliding directly with an entity
-   After colliding with an entity or a block, wind charge projectiles produce a wind burst, which knocks back entities in the area by several blocks
-   Wind bursts also have the effect of 'activating' certain blocks:
    -   Non-Iron Doors and Trapdoors are flipped
    -   Fence Gates are flipped
    -   Buttons are pressed
    -   Levers are flipped
    -   Bells are rung and swung
    -   Lit Candles (both standalone and on cake) are extinguished
-   Wind bursts do not have any effect on Iron Doors, Iron Trapdoors, or any block being held in its position by a Redstone signal

### Trial Spawner

-   Trial Spawner is a new variant of Monster Spawners that ejects rewards upon completion and can have variable levels of challenge in multiplayer
-   The challenge level will increase for each new player a Trial Spawner notices nearby
    -   Challenge level will not decrease until it is reset during a Trial Spawner's cooldown
-   Unlike normal spawners, a Trial Spawner will spawn a limited number of mobs proportional to its current challenge level
    -   It can only spawn a mob at positions that are within line of sight
    -   It can spawn a mob regardless of any light level requirement the mob has
    -   Spawned mobs are persistent
-   Once all mobs are defeated, the Trial Spawner will eject a set of rewards proportional to the current challenge level
    -   After the rewards have been ejected, the Trial Spawner goes into cooldown for 30 minutes during which it will no longer spawn mobs
-   Trial Spawners cannot be crafted nor obtained by players in Survival - instead, they can be found naturally placed throughout Trial Chambers
-   Trial Spawners are extremely slow to mine and resistant to explosions, and will not drop even with Silk Touch
-   When placed in Creative, Trial Spawners have no mob type set by default
    -   The mob type can be set by interacting with it while holding a Spawn Egg
-   Creative and Spectator players cannot be detected or noticed by Trial Spawners

### Trial Chambers

-   Trial Chambers are a new structure in the Overworld where players can explore and take on combat challenges during the mid-game
    -   Trial Chambers are made out of a variety of Copper and Tuff blocks and can be found in different sizes from large to small
    -   Trial Chambers are a relatively common find throughout the Deepslate layer of the underground
-   The layout of each Trial Chamber is procedurally generated, and can include traps, reward chests and a variety of combat spaces
    -   Supply chests can be found between different rooms, and give you blocks and items which help you navigate your trials
    -   Reward chests are guarded by challenges in each room, and can be a source of many high level enchanted books and equipment
    -   The loot found in reward chests are still being iterated, and are absolutely not final
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

#### Known issues

-   The corridors sometimes end with a dead end
-   Aquifers, Lush Caves, and Sculk Veins sometimes intersect with the Trial Chamber

### Trial Key

-   An item that can only be obtained from Trial Spawners
-   Trial Keys do not currently have any functionality

## Fixed bugs in Snapshot 23w45a

-   [MC-131646](https://bugs.mojang.com/browse/MC-131646) Drowned spawners only work in biomes where drowned spawn
-   [MC-177446](https://bugs.mojang.com/browse/MC-177446) "RootVehicle" tag in playerdata entry is not upgraded
-   [MC-186797](https://bugs.mojang.com/browse/MC-186797) Functioning clock and compasses in crafting output slot
-   [MC-255244](https://bugs.mojang.com/browse/MC-255244) NBT link/reference when using /fill
-   [MC-265702](https://bugs.mojang.com/browse/MC-265702) Text components in commands accept malformed JSON
-   [MC-265747](https://bugs.mojang.com/browse/MC-265747) Punching a TNT Minecart in creative mode drops the minecart
-   [MC-265875](https://bugs.mojang.com/browse/MC-265875) Compasses, Clocks and Recovery Compasses work normally within the output slot of the crafter
-   [MC-266054](https://bugs.mojang.com/browse/MC-266054) Side Water texture on Copper bulbs
-   [MC-266056](https://bugs.mojang.com/browse/MC-266056) Mobs suffocate inside most copper grate block variants
-   [MC-266063](https://bugs.mojang.com/browse/MC-266063) Copper Doors and Trapdoors make generic metal sounds when placing
-   [MC-266090](https://bugs.mojang.com/browse/MC-266090) Light can pass through copper bulbs
-   [MC-266091](https://bugs.mojang.com/browse/MC-266091) Copper Bulbs do not cull faces correctly
-   [MC-266096](https://bugs.mojang.com/browse/MC-266096) Mobs can spawn on oxidized or waxed copper grates
-   [MC-266248](https://bugs.mojang.com/browse/MC-266248) No error message when granting/revoking an advancement that is already granted/revoked
-   [MC-266256](https://bugs.mojang.com/browse/MC-266256) Accessibility button in the Welcome screen still needs its own string
-   [MC-266287](https://bugs.mojang.com/browse/MC-266287) Can't load .dat and .nbt files (server list & saved hotbar)
-   [MC-266289](https://bugs.mojang.com/browse/MC-266289) Could not save data raids.dat and random;;_;;sequences.dat

---

In this week's Snapshot we're taking a break from new features to improve ones we've already added, including fixes to Commands and the ability to use Loot Tables with Decorated Pots.

## Changes

-   Copper Doors & Copper Trapdoors has updated textures

## Technical Changes

-   The Data Pack version is now 23

## Data Pack Version 23

-   Decorated Pots can now utilize loot tables and will read from the `LootTable` tag key
-   Additional changes to command functions

### Commands

#### `tick`

-   The `<time>` parameter in the `tick step` command is now optional. The default value is 1

#### `return`

-   `return run` will now always return
    -   If there are no valid results from returned command, function containing `return run` will fail (i.e. `success=0` and `result=0`)
-   `return run` will now propagate success value together with results value (previously it always set success to `1`)
-   `return run` now also allows storing values - that means `execute store ... run return run some_command` will both store value and return it outside function
-   New subcommand `return fail` is added to make whole function fail (i.e. return `success=0` and `result=0`)

#### `function`

-   If `function <function tag>` runs multiple functions in combination with `return run`, execution will stop after first `return` in any of the functions
-   A single call to the `function` command will always have return when run with `return run`
    -   For example, `return run execute [split context] run function <some function with conditional return>` will always return after processing the first context

#### `execute if|unless function`

-   `execute if|unless function` will no longer always fail if all functions had no return
    -   If there were no `returns` in called functions, `if` will fail and `unless` will pass
    -   First `return` in any of called functions will return (for a single context)

## Fixed bugs in Snapshot 23w44a

-   [MC-219293](https://bugs.mojang.com/browse/MC-219293) When teleporting via Chorus Fruit, the burping and teleporting sounds play at the wrong location
-   [MC-265805](https://bugs.mojang.com/browse/MC-265805) Executing a tail-recursive function consumes memory resources linearly with recursion depth
-   [MC-266052](https://bugs.mojang.com/browse/MC-266052) Subtitles for turning copper bulb on or off display raw translation string
-   [MC-266053](https://bugs.mojang.com/browse/MC-266053) Subtitles for opening or closing a copper trapdoor display raw translation string
-   [MC-266064](https://bugs.mojang.com/browse/MC-266064) Footsteps on Polished Tuff create missing subtitle
-   [MC-266084](https://bugs.mojang.com/browse/MC-266084) Top of copper doors include an open part of the window
-   [MC-266086](https://bugs.mojang.com/browse/MC-266086) Tuff bricks do not properly align with other bricks
-   [MC-266105](https://bugs.mojang.com/browse/MC-266105) Bat head upside down when spawned while ticks are frozen
-   [MC-266112](https://bugs.mojang.com/browse/MC-266112) New Bat's ears are lower than the official render and Bedrock's
-   [MC-266117](https://bugs.mojang.com/browse/MC-266117) Chiseled copper cannot be stonecut from cut copper blocks
-   [MC-266147](https://bugs.mojang.com/browse/MC-266147) Copper Door item texture is inconsistent with the block
-   [MC-266197](https://bugs.mojang.com/browse/MC-266197) The "Transfer Now" button in the realms menu cannot be selected via keyboard navigation
-   [MC-266215](https://bugs.mojang.com/browse/MC-266215) The pivot point of the head of the new bats is different from that of Bedrock's

---

We're now releasing a second snapshot for the week to fix some crashes.

## Bug Fixes

-   Fixed a crash on server startup
-   Fixed a crash when leaving the "Configure Realm" screen

---

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
    -   Cannot conduct redstone
    -   Hostile mobs cannot naturally spawn on them

#### Copper Bulb

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

#### Copper Doors and Trapdoors

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

