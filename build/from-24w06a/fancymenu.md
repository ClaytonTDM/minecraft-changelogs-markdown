# Minecraft Snapshot 24w06a

Poof! Here's snapshot 24w06a with the new experimental Wind Charge item and optimizations for Hoppers... among other changes!

We'd love to get your feedback on the new Wind Charge feature over at the official feedback site: [Let's talk about Wind Charges!](https://aka.ms/mcwindchargefeedback)

We've also made a change so that a hopper will no longer try to pick up item entities if there is a full block placed above it. This will improve performance for many redstone builds, but will break some machines that relied on glitching items into a block above a hopper.

Happy parkouring!

## Experimental Features

### Wind Charge

-   Become the Breeze! Using a Wind Charge will fire off a wind charge projectile similar to the Breeze's
-   A Wind Charge fired by a player will grant 10% more knockback than a Breeze's, but have a much smaller area of impact
-   Just like the projectile fired by the Breeze, Wind Charges fired by the player also deal damage if they hit an entity directly
-   The Breeze drops between 4-6 Wind Charges when killed
-   There is a half-second cooldown after each use
-   Wind Charges can be fired from a dispenser
-   Players that launch themselves with a wind charge only accumulate fall damage below the y-level of where they collided with the wind burst

### Vault

-   Tweaked the texture of Vaults to make them easier to distinguish from Trial Spawners

## Changes

-   Final tweaks to Armadillo
-   Updates to Tamed Wolves health and damage
-   Added option to use Japanese variants of CJK characters
-   Hoppers will no longer try to pick up item entities if there is a full block placed above it

### Armadillo

-   Armadillos do not panic when damaged but roll up instead, and hide their head and feet
-   Armadillos peek out to see if “the coast is clear” before unrolling
-   New animations and sounds for rolling up and unrolling + the peek out animation

With these changes the Armadillo work is done for now, and we are switching our attention to the Wolf Armor instead.

### Tamed Wolves health and damage

-   Tamed Wolves now have 40 health points (20 hearts) instead of 20 health points (10 hearts)
-   They no longer take half of the damage from most environmental sources like they used to do
    -   In most cases this change will make no difference given the health boost, but now they can withstand more damage from players and arrows
-   Feeding a Wolf now heals twice as many health points

### Japanese font variants

-   New option has been added to select Japanese variants for some CJK characters
-   Replacement glyphs come from Japanese version of Unifont font
-   New option is included in new "Font Settings" menu, accessible from "Language" menu
-   Default value of this option is based on system locale language setting
-   "Force Unicode" button has been moved to "Font Settings"

## Technical Changes

-   The Data Pack version is now 31
-   The Resource Pack version is now 26
-   Improved hopper performance
-   Added JFR (Java Flight Recorder) events for individual chunk reads (`minecraft.ChunkRegionRead`) and writes (`minecraft.ChunkRegionWrite`)
-   Maximum length of a command in a function (including macro expansions) can no longer exceed 2,000,000 characters
-   Reduced amount of data sent by the server during login by reusing parts of the vanilla datapack

## Data Pack Version 31

-   Potion effect amplifiers are restricted between 0 and 255 again
    -   The former behavior of effects such as Jump Boost, Levitation, and Mining Fatigue over 127 has been replaced with new attributes
-   Added `generic.gravity` attribute that controls blocks/tick^2 acceleration downward
-   Added `generic.safe_fall_distance` attribute to control the fall distance after which the entity will take fall damage
-   Added `generic.fall_damage_multiplier` attribute to multiply overall fall damage amount
-   Renamed `horse.jump_strength` to `generic.jump_strength`, and now applies to all entities
    -   This controls the base impulse from a jump (before jump boost or modifier on block)
-   Added `player.block_break_speed` attribute that acts as a multiplier over block breaking speed for players
-   All block positions are now stored as an array of 3 integers instead of a map of `X`, `Y`, and `Z`
-   `FlowerPos` and `HivePos` in Bees have been renamed to `flower_pos` and `hive_pos`
-   `FlowerPos` in Beehives has been renamed to `flower_pos`
-   `BeamTarget` in End Crystals has been renamed to `beam_target`
-   `Leash` in all leashable entities has been renamed to `leash`
-   `PatrolTarget` in patrolling mobs has been renamed to `patrol_target`
-   `ExitPortal` in End Gateways has been renamed to `exit_portal`
-   `WanderTarget` in Wandering Traders has been renamed to `wander_target`

### Tags

#### Block Tags:

-   Added 'minecraft:blocks;;_;;wind;;_;;charge;;_;;explosions' for blocks not impacted by the explosion when hit by Wind Charge.

## Resource Pack Version 26

-   Added font variant filters to font providers

### Font variant filters

-   Every glyph provider can now be enabled or disabled based on certain set of variants
-   Available variants are currently hardcoded and controlled by font options menu
    -   Current variants:
        -   `uniform` - wired to "Force Uniform" button
        -   `jp` - wired to "Japanese Glyph Variants" button
-   Filters are defined in section called `filter`, available for every glyph provider
    -   Keys in that object are variant names (for example `uniform`)
    -   Glyph provider will be included only when value in filter matches actual value of variant in key

## Fixed bugs in 24w06a

-   [MC-72151](https://bugs.mojang.com/browse/MC-72151) Snow Golem's snowballs damage wolves instead of pushing them
-   [MC-193202](https://bugs.mojang.com/browse/MC-193202) Tamed wolf health resets when NBT is loaded (e.g. relog)
-   [MC-259142](https://bugs.mojang.com/browse/MC-259142) Hoppers with barrel facing downwards on top picking up item
-   [MC-261846](https://bugs.mojang.com/browse/MC-261846) Japanese language uses a Chinese font
-   [MC-264684](https://bugs.mojang.com/browse/MC-264684) Too long macro silently fails
-   [MC-267512](https://bugs.mojang.com/browse/MC-267512) Invulnerable ghasts can be killed with reflected fireballs
-   [MC-267917](https://bugs.mojang.com/browse/MC-267917) Baby armadillos don't make an eating sound when feeding them spider eyes
-   [MC-267940](https://bugs.mojang.com/browse/MC-267940) Armadillo's scute drop timer is not saved to data
-   [MC-268065](https://bugs.mojang.com/browse/MC-268065) Armadillos with no AI roll up after being attacked
-   [MC-268091](https://bugs.mojang.com/browse/MC-268091) "Shuniji", "Dragon Fish" and "Axolotl" no longer play underwater
-   [MC-268096](https://bugs.mojang.com/browse/MC-268096) Singleplayer client discards synced biome tags
-   [MC-268179](https://bugs.mojang.com/browse/MC-268179) Horse armor and wolf armor disappear when right-clicking in the air
-   [MC-268189](https://bugs.mojang.com/browse/MC-268189) "block.vault.fall" uses placeholder sounds

---

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

# Minecraft Snapshot 24w05a

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

# Minecraft Snapshot 24w04a

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

# Minecraft Snapshot 24w03b

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

# Minecraft Snapshot 24w03a

New year, new Snapshot - we're now releasing the third Snapshot of Minecraft 1.20.5. This time around, we're bringing some updates to the Armadillo, the Breeze, as well as accessibility improvements.

In addition to a big bundle of bug fixes, we're bringing some changes to how spawn chunks are handled.

The spawn chunks are an area of the Overworld located at the world spawn which are always loaded in memory. These are useful for some players but use more of your computer’s resources and make the game load and run more slowly. (You can read more about spawn chunks at the [community wiki](https://minecraft.wiki/w/Spawn_chunk)!)

In this snapshot we made the size of the spawn chunks configurable by adding a new gamerule: `spawnChunkRadius`. The new default setting is 2 (which creates a 48x48 block area). This is 98% smaller than the previous area and will result in a noticeable performance improvement for most players.

If you would like to keep your spawn chunks working like they did before, you can use the game rule to change the spawn chunk radius value to 10. This will make your spawn chunks work the same as they did before, but you will miss out on the performance gains.

We're interested in hearing your feedback on this change and how the new default setting affects you.

[Let's talk about spawn chunks!](https://aka.ms/spawnchunksfeedback)

## New Features

### Armadillo

Armadillo visual update! We gathered feedback from the first Armadillo snapshot, and the next step in the look of the Armadillo, the Armadillo Scutes and the Wolf Armor are now here.

-   Armadillos now also spawn in Badlands

#### Armadillo Rolling Up Behavior

-   Spiders and Cave Spiders will run away from Armadillos not in a rolled up state

## Changes

-   Adjusted the texture of the Wolf Collar layer to be more consistent with the new Wolf Armor

### Accessibility

-   The default focus is now always set when entering or exiting any menu while navigating using tab or arrow keys

## Technical Changes

-   The Data Pack version is now 28
-   The Resource Pack version is now 24
-   Custom Villager trades can be configured to accept items that have different tags from the expected item by adding `ignoreTags: true` in the trade's NBT
-   When entities leave or enter the end the area they arrive in will now stay loaded for 15 seconds, matching the behavior of nether portals
-   Added transfer packets
-   Added cookie packets
-   Decreased the default size of the spawn chunks and made the value configurable

### Transfer Packets

-   Custom servers can now request that clients connect to another server with a new packet
-   When a client is transferred it will connect to the target server with a new transfer intent (id 3)
-   By default servers will not accept incoming transfers and will disconnect the client
-   This can be changed by setting the `accepts-transfers` property to `true` in the `server.properties` file
-   Resource packs are maintained across transfers
-   In the case of a transfer custom servers can skip authentication with a new flag

### Cookie Packets

-   Cookie packets allow custom servers to request and store data on a client
    -   Each cookie may be up to 5 KiB in size
    -   Cookies may be requested during login, configuration and play phases — but only stored during the configuration and play phases
-   Cookies are persisted across server transfers but are not persisted when the player disconnects
    -   This allows servers to pass along information such as authentication or custom game data to the new server

### Spawn Chunk Changes

-   The size of the spawn chunks changed from radius 10 (19x19 entity ticking chunks) to radius 2 (3x3 entity ticking chunks)
    -   This was done to reduce memory usage, loading times and CPU usage
    -   We opted to not fully remove spawn chunks to allow players who currently utilize this functionality to continue to do so
-   Added a new gamerule `spawnChunkRadius` to set the size of the spawn chunks
    -   Possible values are 0 to 32, where 0 completely disables the spawn chunks and 10 is equivalent to the functionality before this change
    -   Default value is 2, equivalent to 3x3 entity ticking chunks

## Data Pack Version 28

-   The `minecraft:sweeping` enchantment has been renamed to `minecraft:sweeping_edge`
-   Added Advancement Criteria trigger `default_block_use` which triggers due to the default interaction of a block by a player, such as opening a door
-   Added Advancement Criteria trigger `any_block_use` which triggers due to any type of interaction with a block by a player, such as using an item on the block or its default usage

### Tags

#### Item Tags

New item tags controlling what enchantments can be added to what gear:

-   `minecraft:enchantable/foot_armor`
-   `minecraft:enchantable/leg_armor`
-   `minecraft:enchantable/chest_armor`
-   `minecraft:enchantable/head_armor`
-   `minecraft:enchantable/armor`
-   `minecraft:enchantable/weapon`
-   `minecraft:enchantable/sword`
-   `minecraft:enchantable/mining`
-   `minecraft:enchantable/mining_loot`
-   `minecraft:enchantable/fishing`
-   `minecraft:enchantable/trident`
-   `minecraft:enchantable/durability`
-   `minecraft:enchantable/bow`
-   `minecraft:enchantable/equippable`
-   `minecraft:enchantable/crossbow`
-   `minecraft:enchantable/vanishing`

#### Entity Type Tags:

-   Added `minecraft:ignores_poison_and_regen` for entities that cannot be affected by Poison and Regeneration effects
-   Added `minecraft:illager_friends` for entities that Illagers will consider allies (unless on a different team)
-   Added `minecraft:inverted_healing_and_harm` for entities that have inverted meanings of the Healing and Harm effects
-   Added `minecraft:not_scary_for_pufferfish` for entities that will not cause Pufferfish to puff
-   Added `minecraft:sensitive_to_bane_of_arthropods` for entities sensitive to Bane of Arthropods
-   Added `minecraft:sensitive_to_impaling` for entities sensitive to Impaling
-   Added `minecraft:wither_friends` for entities that the Wither will not target and which cannot harm the Wither

## Resource Pack 24

-   The `ttf` font provider transforms have been adjusted to have more reasonable defaults
    -   `shift` is no longer applied double, and now directly represents a number of pixels in the game UI
    -   The font EM square is fitted to `size` pixels in the game UI, instead of between the font ascender and font descender
    -   The font baseline is positioned consistently with the default font (7 pixels below line top)
    -   This means that generally, any font with a `size` of 9 and no `shift` should look correct by default

## Experimental Features

### Breeze

-   Breeze now deflects all projectiles
-   Deflected projectiles now deflect in the direction of the shooter

### Trade Rebalance

-   In the Trade Rebalance Experiment, Villagers who buy armor now ignore durability and can buy damaged armor

## Fixed bugs in Snapshot 24w03a

-   [MC-153160](https://bugs.mojang.com/browse/MC-153160) Villagers don't auto-fill items if NBT data doesn't match
-   [MC-155857](https://bugs.mojang.com/browse/MC-155857) Team command doesn't affect illagers and witches' AI
-   [MC-171981](https://bugs.mojang.com/browse/MC-171981) Map of fuel times is created anew every time an item is placed in a furnace, instead of being cached
-   [MC-187372](https://bugs.mojang.com/browse/MC-187372) There is no space between fps limit/vsync and graphics level in the debug screen
-   [MC-260889](https://bugs.mojang.com/browse/MC-260889) Players can use water buckets and lava buckets on blocks that are out of reach
-   [MC-261596](https://bugs.mojang.com/browse/MC-261596) Crafting Table search keyboard shortcut not working
-   [MC-265273](https://bugs.mojang.com/browse/MC-265273) The tab list in create world screen does not indicate it's tab-focused by highlight or rendering borders
-   [MC-265520](https://bugs.mojang.com/browse/MC-265520) Switching connection protocols sometimes produces errors
-   [MC-265749](https://bugs.mojang.com/browse/MC-265749) Tooltips flash when the values of buttons or fields are changed
-   [MC-266078](https://bugs.mojang.com/browse/MC-266078) The output of Crafting and Stonecutting Copper Grates is inconsistent with each other
-   [MC-267044](https://bugs.mojang.com/browse/MC-267044) Tick status strings contain inconsistent word usage
-   [MC-267045](https://bugs.mojang.com/browse/MC-267045) Some tick strings are missing articles and are unclear
-   [MC-267086](https://bugs.mojang.com/browse/MC-267086) Compass does not indicate spawn point correctly when game is frozen with /tick
-   [MC-267104](https://bugs.mojang.com/browse/MC-267104) The bottom face textures of breezes' rods are incorrect and don't match with surrounding colors
-   [MC-267149](https://bugs.mojang.com/browse/MC-267149) Crafter top face has an inverted UV texture map
-   [MC-267366](https://bugs.mojang.com/browse/MC-267366) You cannot use Spider Eyes on Baby Armadillos to age them up
-   [MC-267367](https://bugs.mojang.com/browse/MC-267367) Wolf armor flashes red when the wolf takes damage
-   [MC-267371](https://bugs.mojang.com/browse/MC-267371) Shulkers hitbox doesn't scale with generic.scale
-   [MC-267377](https://bugs.mojang.com/browse/MC-267377) Applying bone meal to mangrove leaves no longer produces any particles
-   [MC-267378](https://bugs.mojang.com/browse/MC-267378) Armor stand interaction points do not change with scale
-   [MC-267379](https://bugs.mojang.com/browse/MC-267379) Applying bone meal to rooted dirt no longer produces any particles
-   [MC-267380](https://bugs.mojang.com/browse/MC-267380) Cannot open inventories beyond default block reach
-   [MC-267383](https://bugs.mojang.com/browse/MC-267383) Can't place water and lava with extended attribute "block;;_;;interaction;;_;;range"
-   [MC-267384](https://bugs.mojang.com/browse/MC-267384) Unused duplicate wolf armor sound events
-   [MC-267385](https://bugs.mojang.com/browse/MC-267385) Attribute entity;;_;;interaction;;_;;range is capped by block;;_;;interaction;;_;;range
-   [MC-267388](https://bugs.mojang.com/browse/MC-267388) The subtitle for brushing armadillos is inconsistent with other item usage subtitles
-   [MC-267389](https://bugs.mojang.com/browse/MC-267389) Armadillos don't always stand in close proximity to one another when breeding
-   [MC-267392](https://bugs.mojang.com/browse/MC-267392) Armadillos are scared of players in spectator mode
-   [MC-267395](https://bugs.mojang.com/browse/MC-267395) Armadillos panic when receiving fall damage
-   [MC-267397](https://bugs.mojang.com/browse/MC-267397) Armadillos and baby armadillos stand a bit too far away from players that are tempting them
-   [MC-267398](https://bugs.mojang.com/browse/MC-267398) Armadillos don't play a roll out sound after finishing hiding
-   [MC-267402](https://bugs.mojang.com/browse/MC-267402) Head of armadillo in boat is twitching when turning the boat
-   [MC-267404](https://bugs.mojang.com/browse/MC-267404) Scared armadillo pushed into boat is scared of player riding the boat
-   [MC-267405](https://bugs.mojang.com/browse/MC-267405) Scared armadillo can move when having a passenger
-   [MC-267406](https://bugs.mojang.com/browse/MC-267406) Armadillos with their "Silent" NBT tag set to "1b" still play their landing and rolling up sounds
-   [MC-267413](https://bugs.mojang.com/browse/MC-267413) Feeding an armadillo a spider eye doesn't cancel eating it
-   [MC-267416](https://bugs.mojang.com/browse/MC-267416) Particles created from Slimes do not account for the scale attribute
-   [MC-267417](https://bugs.mojang.com/browse/MC-267417) Suffocation overlay shown when on solid almost-full blocks at scale < .06
-   [MC-267418](https://bugs.mojang.com/browse/MC-267418) Warden sonic boom attack doesn't account for the scale attribute
-   [MC-267420](https://bugs.mojang.com/browse/MC-267420) Boat placement ignores custom "block;;_;;interaction;;_;;range" attribute
-   [MC-267422](https://bugs.mojang.com/browse/MC-267422) Attribute entity;;_;;interaction;;_;;range is classified as 'generic', but has no effect on mobs
-   [MC-267427](https://bugs.mojang.com/browse/MC-267427) Rendering offset of sleeping entities does not account for scale attribute
-   [MC-267428](https://bugs.mojang.com/browse/MC-267428) Phantom wing particles do not account for scale attribute
-   [MC-267434](https://bugs.mojang.com/browse/MC-267434) Upside-down mobs with big scale attribute are displayed above hitbox
-   [MC-267435](https://bugs.mojang.com/browse/MC-267435) Baby armadillos do not follow parents consistently or closely
-   [MC-267454](https://bugs.mojang.com/browse/MC-267454) Baby striders are visually the same size as normal striders
-   [MC-267456](https://bugs.mojang.com/browse/MC-267456) Changes to item;;_;;used;;_;;on;;_;;block advancement criteria breaks previous functionality
-   [MC-267465](https://bugs.mojang.com/browse/MC-267465) 1.20.3 upload error: "Cannot invoke "ctt.c()" because "this.b" is null"
-   [MC-267470](https://bugs.mojang.com/browse/MC-267470) The regeneration effect granted from beacons is no longer applied to players
-   [MC-267479](https://bugs.mojang.com/browse/MC-267479) Inventory view model scales with generic.scale
-   [MC-267497](https://bugs.mojang.com/browse/MC-267497) Baby armadillos do not sound high pitched when curling up
-   [MC-267538](https://bugs.mojang.com/browse/MC-267538) Putting placeable blocks inside decorated pots also places them
-   [MC-267565](https://bugs.mojang.com/browse/MC-267565) Low scale attribute lets you breathe underwater
-   [MC-267588](https://bugs.mojang.com/browse/MC-267588) The hand animation is no longer played when putting items inside decorated pots
-   [MC-267706](https://bugs.mojang.com/browse/MC-267706) Evoker and illusioner summon particles do not account for scale attribute
-   [MC-267707](https://bugs.mojang.com/browse/MC-267707) Wither particles do not account for scale attribute
-   [MC-267708](https://bugs.mojang.com/browse/MC-267708) The wither's skull projectile attacks do not account for the scale attribute
-   [MC-267725](https://bugs.mojang.com/browse/MC-267725) Players' experience levels no longer render above the health and hunger bars
-   [MC-267726](https://bugs.mojang.com/browse/MC-267726) Applying bone meal to blocks underwater no longer produces any particles

---

# Minecraft Snapshot 23w51b

Coming in hot, here is Snapshot 23w51b, fixing a crash in 23w51a.

## Fixed bugs in 23w51b

-   Fixed a crash that would occur when the nametag of a player was visible during sleeping, swimming or dying

---

# Minecraft Snapshot 23w51a

We're now releasing Snapshot 23w51a, the first snapshot for Minecraft 1.20.5. This one comes with a present for your pet Wolf in time for the holidays - and the Armadillo.

Happy brushing!

## New Features

-   Added Armadillo, Armadillo Scutes and Wolf Armor

### Armadillo

-   The Armadillo is a new passive mob that:
    -   drops Armadillo Scutes periodically
    -   drops Armadillo Scutes when brushed
    -   spawns in Savannas
    -   its favorite food is Spider Eye

#### Armadillo Rolling Up Behavior

-   Armadillo rolls up when it detects a threat such as:
    -   a sprinting player
    -   a player in a vehicle or mounted
    -   undead mobs
-   It does not roll up when:
    -   it is fleeing
    -   in water
    -   in the air or
    -   on a leash
-   When an Armadillo is rolled up it does not walk, cannot eat, and will not be tempted by food
    -   It will continue to scan for threats: if none are detected for 3 seconds, it will unroll

#### Armadillo Scutes

-   Armadillo Scutes can be used to craft Wolf Armor
-   They are dropped by Armadillos
-   Dispensers can be used to brush Armadillo Scutes off Armadillos

### Wolf Armor

-   Using Wolf Armor on an adult tamed Wolf will equip the armor on the wolf.
-   Only a Wolf's owner can put a Wolf Armor on their tamed Wolf, and with this in mind; Dispensers cannot put Wolf Armor on wolves.
-   Wolf Armor gives the same protection as Diamond Horse Armor.
-   Using Shears on a Wolf that is wearing armor will make it drop the armor
-   Only a Wolf's owner can shear a Wolf Armor from it, and with this in mind; Dispensers cannot remove Wolf Armor from wolves.
-   If a Wolf dies while wearing armor, it will drop the armor.

## Changes

-   Renamed scutes that come from Turtles to Turtle Scutes
-   Llamas and Shulkers are no longer able to destroy armor stands

## Technical Changes

-   The Data Pack version is now 27

## Data Pack 27

-   Llamas now use a new damage type `spit` instead of `mob_projectile`
-   `FactorCalculationData` has been removed from mob effect instance tags
-   Added `generic.scale` attribute that can be used to rescale any living entity
-   Player reach distance can now be controlled with the `generic.block_interaction_range` and `generic.entity_interaction_range` attributes
-   The maximum number of blocks that an entity can step up without jumping is now controlled by the `generic.step_height` attribute

## Experimental Features

### Breeze

-   Added a new 'whirl' idle sound
-   Added a 'charging up attack' sound
-   Added a sound that plays while the Breeze is in the air
-   Added a projectile deflection sound
-   Tweaked existing sounds

### Trial Spawner

-   The Trial Spawner now has the same two default loot tables as they have in the Trial Chamber

## Fixed bugs in 23w51a

-   [MC-130244](https://bugs.mojang.com/browse/MC-130244) When opening chat in F1 mode, previous messages aren't visible
-   [MC-153643](https://bugs.mojang.com/browse/MC-153643) Debug overlay is rendered behind hotbar items
-   [MC-167375](https://bugs.mojang.com/browse/MC-167375) Baby turtle subtitles are grammatically incorrect
-   [MC-173672](https://bugs.mojang.com/browse/MC-173672) Title text renders in front of player names in player list
-   [MC-184066](https://bugs.mojang.com/browse/MC-184066) Respawn anchors don't produce an ambient sound
-   [MC-184622](https://bugs.mojang.com/browse/MC-184622) Sound for exiting a portal/travelling to another dimension does not use its subtitle string despite it existing in en;;_;;us.json
-   [MC-185379](https://bugs.mojang.com/browse/MC-185379) Baby polar bear subtitle does not explicitly mention it comes from a baby polar bear
-   [MC-187267](https://bugs.mojang.com/browse/MC-187267) Title text renders in front of sidebar
-   [MC-187372](https://bugs.mojang.com/browse/MC-187372) There is no space between fps limit/vsync and graphics level in the debug screen
-   [MC-193511](https://bugs.mojang.com/browse/MC-193511) Title text renders in front of narrator text
-   [MC-193515](https://bugs.mojang.com/browse/MC-193515) Boss bar text renders in front of narrator text
-   [MC-193517](https://bugs.mojang.com/browse/MC-193517) Boss bar text renders in front of sidebar
-   [MC-193521](https://bugs.mojang.com/browse/MC-193521) Boss bar text renders in front of F3
-   [MC-193524](https://bugs.mojang.com/browse/MC-193524) Boss bar text strikethough/underline renders on tab list
-   [MC-193753](https://bugs.mojang.com/browse/MC-193753) Respawn anchor ambient sound subtitle refers to it as a portal
-   [MC-194948](https://bugs.mojang.com/browse/MC-194948) Block breaking subtitle inconsistent with painting, item frame and lead breaking subtitles
-   [MC-198787](https://bugs.mojang.com/browse/MC-198787) Inefficient streams in GoalSelector
-   [MC-198963](https://bugs.mojang.com/browse/MC-198963) Chat text renders in front of player names in player list
-   [MC-219899](https://bugs.mojang.com/browse/MC-219899) Bone meal used on rooted dirt causes the particles to appear above it, despite the growth being below it
-   [MC-238242](https://bugs.mojang.com/browse/MC-238242) There is an unnecessary black pixel in the upper right corner of small potion UI icons in the inventory
-   [MC-248961](https://bugs.mojang.com/browse/MC-248961) takenDamage for achievement criteria is calculated wrongly when the player has equipped a helmet
-   [MC-249335](https://bugs.mojang.com/browse/MC-249335) Using bone meal on mangrove leaves spawns growth particles at the center of the block instead of below it
-   [MC-251027](https://bugs.mojang.com/browse/MC-251027) Wearing a helmet doesn't reduce the damage of falling anvils or stalactites by 1⁄4
-   [MC-252409](https://bugs.mojang.com/browse/MC-252409) Memory statistics within the debug menu contain some unnecessary spaces
-   [MC-259587](https://bugs.mojang.com/browse/MC-259587) Negative item durability causes the durability bar to render incorrectly
-   [MC-261577](https://bugs.mojang.com/browse/MC-261577) The nether portal overlay is rendered completely opaque when using spyglasses while standing inside of nether portals
-   [MC-263256](https://bugs.mojang.com/browse/MC-263256) Chat renders on top of TAB, blocking information
-   [MC-265541](https://bugs.mojang.com/browse/MC-265541) player.dat;;_;;old won't be read even if player.dat doesn't exist
-   [MC-265669](https://bugs.mojang.com/browse/MC-265669) Hotbar text renders above subtitle background but under subtitle text
-   [MC-265835](https://bugs.mojang.com/browse/MC-265835) The freezing effect is rendered totally opaque when using a spyglass
-   [MC-266055](https://bugs.mojang.com/browse/MC-266055) Opening or closing a copper door or trapdoor while holding an axe / honeycomb grants wax-related advancement
-   [MC-266135](https://bugs.mojang.com/browse/MC-266135) Cached macro commands ignore permission level, allowing limited permission escalation
-   [MC-266136](https://bugs.mojang.com/browse/MC-266136) Macro commands ignore function-permisson-level server setting, including when lower than default
-   [MC-266144](https://bugs.mojang.com/browse/MC-266144) Copper Doors are not part of the #doors item tag
-   [MC-266145](https://bugs.mojang.com/browse/MC-266145) Copper Trapdoors are not part of the #trapdoors item tag
-   [MC-266308](https://bugs.mojang.com/browse/MC-266308) Copper Bulbs have unused "turn;;_;;off" sound
-   [MC-266334](https://bugs.mojang.com/browse/MC-266334) Shulker bullets destroy armor stands
-   [MC-266389](https://bugs.mojang.com/browse/MC-266389) Glow berry particles are barely visible when bonemealed
-   [MC-266430](https://bugs.mojang.com/browse/MC-266430) Breeze on top of a non-full block produces particles of the block below it
-   [MC-266432](https://bugs.mojang.com/browse/MC-266432) Exposed, weathered and oxidised copper bulbs are unwaxed in trial chambers
-   [MC-266469](https://bugs.mojang.com/browse/MC-266469) When attacked, breezes sometimes stop pathfinding, jumping, or firing wind charges
-   [MC-266524](https://bugs.mojang.com/browse/MC-266524) Breezes sometimes get the zoomies after jumping
-   [MC-266533](https://bugs.mojang.com/browse/MC-266533) Breeze's AI has serious flaws in open terrain
-   [MC-266589](https://bugs.mojang.com/browse/MC-266589) Armor durability is changed when swapping on creative
-   [MC-266628](https://bugs.mojang.com/browse/MC-266628) High polling rate causing stuttering
-   [MC-266680](https://bugs.mojang.com/browse/MC-266680) The glowing outline isn't applied to the eyes or eyebrows of breezes
-   [MC-266685](https://bugs.mojang.com/browse/MC-266685) The entity shadows of breezes are too large in relation to the size of their models
-   [MC-266688](https://bugs.mojang.com/browse/MC-266688) Breeze model's glowing eyes are not resource pack-friendly
-   [MC-266738](https://bugs.mojang.com/browse/MC-266738) Subtitles string "subtitles.block.trial;;_;;spawner.spawn;;_;;mob" is misleading and inconsistent
-   [MC-266879](https://bugs.mojang.com/browse/MC-266879) Clouds, entity hitboxes, block outlines, specially rendered blocks, and enchantment glints, render through the insides of breezes' eyes and eyebrows
-   [MC-266960](https://bugs.mojang.com/browse/MC-266960) Bossbar text renders in front of player list background and player icons
-   [MC-266990](https://bugs.mojang.com/browse/MC-266990) Maps with the same 'map' tag value, but different 'display' tag data can cause markers to disappear
-   [MC-266999](https://bugs.mojang.com/browse/MC-266999) Crafter's tooltip buttons can still be visible to players on spectator mode
-   [MC-267193](https://bugs.mojang.com/browse/MC-267193) A function with /return fail run in chat doesn't indicate failure
-   [MC-267194](https://bugs.mojang.com/browse/MC-267194) /return run function in combination with a fork and a function that doesn't return has inconsistent behavior

---

