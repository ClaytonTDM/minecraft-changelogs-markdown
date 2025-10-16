# Minecraft Snapshot 24w05b

We are now releasing 24w05b to address a crash and bug introduced in yesterday's snapshot.

Happy mining!

## Technical Changes

-   Potion effect amplifiers are now restricted between 0 and 127

## Fixed bugs in 24w05b

-   [MC-118857](https://bugs.mojang.com/browse/MC-118857) Effect amplifier is read/written as byte from NBT despite being stored as an integer
-   [MC-268168](https://bugs.mojang.com/browse/MC-268168) Chainmail armor texture broken due to armor material renaming
-   [MC-268172](https://bugs.mojang.com/browse/MC-268172) Game crashes when saving an entity's effect above 127

---

Hi everyone! We're back with yet another snapshot for 1.20.5, which includes a collection of technical changes, bug fixes and a new experimental feature for Trial Chambers, the Vault Block!

We're very interested in hearing your feedback on this new feature over at the feedback site: [Let's talk about Vaults!](https://aka.ms/mcvaultsfeedback)

Happy looting!

## Technical Changes

-   The Data Pack version is now 30
-   The Resource Pack version is now 25
-   Added a reserved region file compression id for third-party servers to use for custom compression implementations
-   Added an option to not compress region files
-   Allowed server operators to view dedicated server TPS debug chart

### Region file compression algorithm

-   Added a third value to the dedicated server configuration property `region-file-compression`:
    -   `none` does not compress the data. Consumes significantly more space and requires significant time to read and write, even though CPU is used less. Might make sense together with filesystem level compression

### Reserved compression id for third-party servers

-   Compression id `127` can now be used for custom implementations of region file compression
-   When used, the version id must be followed by a namespaced string representing the custom algorithm used

## Data Pack Version 30

-   Potion effects stored in items or entities will no longer encode their default values
    -   `amplifier`: `0`
    -   `duration`: `0`
    -   `ambient`: `false`
    -   `show_particles`: `true`
-   Added `body_armor_item` and `body_armor_drop_chance` to all entities that currently have `HandItems` and `ArmorItems`, and handle the same way as `HandItems` and `ArmorItems`
-   Handling of Horses `ArmorItem`, Llamas `DecorItem`, and Wolf's `armor` has been changed to use `body_armod_item` and `body_armor_drop_chance` instead
-   In commands, removed `horse.armor` slot argument, and added instead `armor.body` slot argument, applicable now to all mobs
-   Added `vault_connection` particle
-   Added Vault block with a variety of NBT elements which can be configured for custom content
    -   `config`
        -   `loot_table` The loot table that will be ejected upon being unlocked
            -   Default value: `"minecraft:chests/trial_chambers/reward"`
        -   `activation_range` The range any player who hasn't unlocked the Vault must be within for it to open its keyhole
            -   Default value: `4`
        -   `deactivation_range` The range all viable players must be outside of for the Vault to close its keyhole
            -   Default value: `4.5`
        -   `key_item` An itemstack that is required to unlock the Vault
            -   NBT and stack count is used for comparison
            -   Default value: `"minecraft:trial_key"`
        -   `override_loot_table_to_display` An optional loot table which will be used for displaying items inside the cage instead of results from the config's `loot_table`
            -   Default value: No value
    -   `shared_data`
        -   `connected_particles_range` The range players who have not unlocked the Vault must be within before particles will flow from them
            -   Default value: `4.5`

## Resource Pack Version 25

-   The unused attributes array in core shader definitions has been removed
-   The unused `position_color_normal` and `position_tex_lightmap_color` shaders have been removed
-   The `position_tex_color_normal` shader (only used by clouds) has been replaced by `rendertype_clouds`
-   The `IViewRotMat` uniform has been removed, and the `Position` attribute for entities is now in (camera relative) world space
-   Light direction uniforms are no longer premultiplied by the view matrix
-   Added texture and model files for Vault block
-   Changed texture for the Trial Key item
-   Added texture and particle file for `vault_connection` particle

## Experimental Features

-   Added Vault block

### Vault

-   A block that holds locked treasure and loot - find the right key to eject its rewards
    -   Found throughout Trial Chambers, containing the structures' most valuable loot
    -   Vaults in Trial Chambers require a Trial Key to be unlocked
-   Can be unlocked by an unlimited amount of players
    -   After a player has unlocked a Vault, they cannot unlock that Vault again
    -   If a player has not unlocked that Vault before, an orange stream of particles will flow from the player to the Vault when nearby
-   Has a keyhole that will be open or closed depending on the players nearby
    -   If any nearby player has not unlocked that Vault, the keyhole will be open
    -   If all nearby players have unlocked that Vault, the keyhole will be closed
-   Within its cage, it will cycle through and display items which are possible to eject from its loot table
-   The rewards it ejects are randomized from its loot table each time it is unlocked
-   Cannot be crafted or obtained in Survival, and does not drop anything when mined
-   Explosion-resistant and cannot be moved
-   Vaults currently reuse the same loot table that reward chests previously used in the Trial Chambers
    -   This loot table is temporary and will be completely revised as development continues

### Trial Key

-   Updated texture to reflect new Vault visuals

## Fixed bugs in Snapshot 24w05a

-   [MC-225170](https://bugs.mojang.com/browse/MC-225170) Normal matrix scaling broken in some situations
-   [MC-260099](https://bugs.mojang.com/browse/MC-260099) Sniffer's snout shading changes during sniffing
-   [MC-264821](https://bugs.mojang.com/browse/MC-264821) The fog on armor worn by entities occurs too early
-   [MC-267922](https://bugs.mojang.com/browse/MC-267922) Wolf armor loses custom display name and other NBT when equipped

---

Hello again! Here is another snapshot bringing you some Armadillo changes, experimental feature changes, and a bunch of technical changes. We have some server-side performance improvements and improved debug tools along with a new `transfer` command. Enjoy!

## Changes

-   Armadillo now also rolls up when it detects a mob, or a player that has attacked it recently
-   When an Armadillo is in rolled up state, its shell will protect it, and reduce the damage dealt to it, even allowing it to fully resist weak attacks
-   Renamed "Allow cheats" to "Allow commands"

## Technical Changes

-   The Data Pack version is now 29
-   Added an option to use a faster region file compression algorithm on dedicated servers
-   Introduced changes to optimizing worlds
-   Improved server TPS debug chart
-   Reduced time needed to generate explorer maps to buried treasures

### Region file compression algorithm

-   Added a dedicated server configuration property `region-file-compression` with 2 possible values:
    -   `deflate`, the default option. Uses the old algorithm
    -   `lz4` uses LZ4 algorithm, which requires less CPU time to compress and decompress but uses more disk space
-   Changing the compression algorithm will not automatically recompress the world
    -   New or updated chunks will use the newly configured algorithm, but the old ones will stay in the previous format

### World optimizing changes

-   Optimizing singleplayer worlds and running dedicated server with `forceUpgrade` now also upgrades contents of `entities` and `poi` directories of the world
-   New `recreateRegionFiles` dedicated server startup parameter
    -   It will trigger world optimization similar to `forceUpgrade`, but will also rewrite all the chunks independently of whether they have been upgraded
    -   This will create fresh and defragmented region files
    -   Using this parameter after changing the `region-file-compression` server property will recompress all region files in the new format

### Improved the server TPS debug chart

-   As before, it is accessible by pressing `F3 + 2` in a Singleplayer world
-   The bottom dark red section of the chart displays the time spent during the main logic of the server tick. It is equivalent to the value diplayed in the old chart
-   The light brown section displays time spent on running scheduled tasks
-   The purple section displays time spent executing all other code during the tick
-   The top light green (or yellow or red depending on lag) section displays time spent idling, waiting for next tick
-   The `min`, `avg`, `max` aggregate values are based on the sum of the first 3 sections

## Data Pack Version 29

-   Added the `transfer` command

### `transfer` Command

New command that triggers a transfer of a player to another server. Only exists on dedicated servers.

Syntax:

`transfer <hostname> [<port>] [<players>]`

Parameters:

-   `hostname`: String describing the hostname of the server to connect to
-   `port`: Integer denoting the port number of the server to connect to - if omitted, 25565 is used
-   `players`: The players to transfer - if omitted, `@s` is used

## Experimental Features

### Breeze

-   Breeze is now aggressive toward Iron Golems in addition to players
-   Breeze no longer retaliates against attacks from the following mobs: Skeletons, Strays, Zombies, Husks, Spiders, Cave Spiders, Slimes
-   The above mobs will not retaliate when hurt by the Breeze's Wind Charge Projectile

### Copper Grates

-   Stonecutting Copper Blocks into Copper Grates outputs 4 Copper Grates

## Fixed bugs in Snapshot 24w04a

-   [MC-232489](https://bugs.mojang.com/browse/MC-232489) Retrieving a plant from a flower pot ignores inventory contents
-   [MC-266449](https://bugs.mojang.com/browse/MC-266449) Breeze doesn't attack or retaliate against mob on sight
-   [MC-266707](https://bugs.mojang.com/browse/MC-266707) Trial spawners ignore custom;;_;;spawn;;_;;rules
-   [MC-267925](https://bugs.mojang.com/browse/MC-267925) Retrieving an item from a flower pot while holding something causes the item to end up in your off hand
-   [MC-267937](https://bugs.mojang.com/browse/MC-267937) Shooting a breeze with a piercing crossbow makes the game crash
-   [MC-267938](https://bugs.mojang.com/browse/MC-267938) The world loading percentage value can get covered by the spawn chunk loading animation when the "spawnChunkRadius" gamerule is set to large values
-   [MC-267941](https://bugs.mojang.com/browse/MC-267941) The end portal kills mobs at spawnChunkRadius 0
-   [MC-267953](https://bugs.mojang.com/browse/MC-267953) No element is focused when opening the realms world backups menu using keyboard navigation

---

We are releasing Snapshot 24w03b to fix a crash, along with some bug fixes and minor changes.

Happy Mining!

## Experimental Features

### Breeze

-   Updated the model, texture, and animation of the Wind Charge projectile to give it a more dynamic look and feel

## Fixed bugs in Snapshot 24w03b

-   [MC-266032](https://bugs.mojang.com/browse/MC-266032) Attempting to copy a "Copy of a copy" book in a Crafter behaves incorrectly
-   [MC-266577](https://bugs.mojang.com/browse/MC-266577) Some trial spawners in trial chambers spawn mobs without persistence
-   [MC-267918](https://bugs.mojang.com/browse/MC-267918) The game crashes when opening the configure realms menu
-   [MC-267927](https://bugs.mojang.com/browse/MC-267927) The hitboxes of magma cubes are too large
-   [MC-267935](https://bugs.mojang.com/browse/MC-267935) Items on top of soul sand or mud will be rendered black

---

