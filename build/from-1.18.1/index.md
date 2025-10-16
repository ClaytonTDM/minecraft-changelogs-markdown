# Minecraft: Java Edition 1.18.1

We’re now releasing Minecraft: Java Edition 1.18.1. This release fixes a critical security issue for multiplayer servers, changes how the world fog works to make more of the world visible, and fixes a couple of other bugs.

If you are running a multiplayer server, we highly encourage you to upgrade to this version as soon as possible.

Enjoy!

## Technical Changes in 1.18.1

-   Fixed an issue that would cause players on low-bandwidth connections to get timeout errors when connecting to a server
-   World fog now starts further away from the player, to make distant terrain more visible
-   Instead of applying fog as a spherical volume it is now applied as a cylindrical volume

## Fixed Bugs in 1.18.1

-   [MC-152198](https://bugs.mojang.com/browse/MC-152198) Actual render distance is 2 chunks lower than render distance setting
-   [MC-219507](https://bugs.mojang.com/browse/MC-219507) Beacon's power reverts back to previous one on world reload
-   [MC-229321](https://bugs.mojang.com/browse/MC-229321) Bees inside of bee hives / nests sometimes despawn when the world is reloaded
-   [MC-242729](https://bugs.mojang.com/browse/MC-242729) "Observer activating without any updates nearby, caused by /clone"
-   [MC-243216](https://bugs.mojang.com/browse/MC-243216) Chunk render distance on servers seems shorter than in 1.17.1
-   [MC-243796](https://bugs.mojang.com/browse/MC-243796) Random non fatal exceptions in console: Failed to store chunk ConcurrentModificationException

---

It’s been quite the trek, but we’re here. At the summit. The Caves & Cliffs Update: Part II is out today, completing the much anticipated cave update. What better way to celebrate than by climbing to the top of a higher than ever mountain. Let’s take a moment and just take in that view. Wait. What’s that sound. Don’t tell me that goat is back.

AAAAARGH.

Ouff! Ouch! Ow!

Where am I? It’s dark down here! It’s almost as if I fell a greater distance than I would have before today. Figures. While I try to get out of this dripstone cave, I hope you enjoy all of the new features that 1.18 brings. Could you pass me a candle before you leave? It really is dark down here.

## Features

-   Added an "Allow Server Listings" option to opt out of having your name displayed in server listings
-   Added an Online options screen where you can now find the Realms Notifications option
-   Added new Overworld biomes
-   Added noise caves and aquifers
-   Added world autosave indicator for single-player worlds
-   Axolotls now have their own, separate, mob cap
-   Axolotls now only spawn in Lush Caves when in water that is above Clay Blocks
-   Badlands Mineshafts now generate higher up
-   Buried Treasure Chests may contain a Potion of Water Breathing
-   Changed default brightness to 50
-   Cod, Salmon, Pufferfish, Tropical Fish, Squid, and Dolphins now only spawn in water from height 50 to height 64
-   Frozen Peaks biome
-   Glow Squids now only spawn in water blocks under height 30
-   If it is raining, sleeping will stop the rain and reset the weather cycle (in 1.17 sleeping would always reset the weather cycle)
-   Illagers (Vindicator, Pillager, Evoker) no longer attack baby villagers
-   New music has been added to the game
-   New ore distribution and large ore veins
-   Overworld build and generation limits have been expanded
-   Raised the cloud level from 128 to 192
-   Redesigned how effects look in the inventory screen, to allow them to show even with recipe book open
-   Removed world types "Caves" and "Floating islands" from the world creation screen
-   Sprinting is no longer reduced to walking when gently brushing your sleeve against a wall
-   Tropical Fish now also spawn in Lush Caves at any height
-   Villages are slightly more spread out
-   World spawn selection algorithm has been reworked, now spawns player according to climate parameters

### Advancements

-   Added "Caves & Cliffs" for falling from top to bottom of the Overworld
-   Added "Feels like home" for riding strider on lava for 50 blocks in the Overworld
-   Added "Star Trader" for trading with a villager at the build height limit
-   Added "Sound of Music" for playing music with a jukebox in a Meadow biome

### Blocks

-   Enchanting Tables now emit a low amount of light
-   Using Shears on the tip of a Cave Vine, Twisting Vine, Weeping Wine, and Kelp will stop them from further growing
-   Copper Ore now drops 2-5 (from 2-3) Raw Copper items
-   In the Stonecutter, a Block of Copper can be converted to 4 Cut Copper
-   Restricted Big Dripleaf placement to Clay, Grass, Dirt, Farmland, Moss, Rooted Dirt, Podzol, and Mycelium

### Effects

-   Your list of effects are now shown to the right of your inventory, instead of the left side
-   When the inventory effects list is visible, it will be hidden from the game view to reduce screen clutter
-   There's now two modes of seeing the effect list: Compact and Classic
    -   Classic is the pre-existing list of effects, one after another
    -   Compact is a single icon for each effect, suitable for small screen estate
-   The game will automatically switch between the two modes to suit the available screen estate (including having the recipe book open)

### Large ore veins

-   Ore Veins are large, rare, snake-like underground ore formations
-   Copper Ore Veins form between heights 0 and 50 and are mixed with Granite
-   Iron Ore Veins form betweens heights -60 and -8 and are mixed with Tuff

### Mob Spawning

-   Monsters now only spawn in places where the light from blocks is 0 (sky light still prevents spawning like before)

### Music

-   Added new music by Lena Raine and Kumi Tanioka to the Overworld (when playing in Survival Mode) and the main menu
-   Added a new music disc from Lena Raine titled 'Otherside'. This can be found rarely in Stronghold Corridor Chests or much more rarely in Dungeon Chests.

### New Overworld Biomes

#### Dripstone Caves

-   Contains plenty of Pointed Dripstone and Dripstone Block on the floors and ceilings, as well as within small pools of water
-   In some places, you'll find larger stalagmites, stalactites, and columns built from Dripstone Blocks
-   Contains extra Copper Ore
-   Drowned can spawn in aquifers inside Dripstone Caves

#### Frozen Peaks

-   Smooth mountain peaks with ice and snow
-   Spawns Goats and Yeti. Wait, no, actually it's just Goats.

#### Grove

-   Snowy terrain with big Spruce Trees and Powder Snow traps. You might want to wear leather boots!
-   Tends to generate on high-altitude terrain beneath mountain peaks or on hilltops
-   Spawns Wolves, Rabbits, and Foxes

#### Jagged Peaks

-   Dramatic jagged mountain peaks with Snow and Stone blocks
-   Spawns Goats

#### Lush Caves

-   Moss covers the floors and ceilings
-   Spore Blossoms grow from the ceiling and drip particles
-   Contains Clay pools with Dripleaf plants growing out of them
-   Contains Azalea Bushes and Flowering Azalea Bushes
-   The Azalea Tree loves to have its roots in Lush Caves, so if you find an Azalea Tree (either overground or in a cave) you know there is a Lush Cave beneath you
-   Cave Vines with Glow Berries grow from the ceiling and light up the caves

#### Meadow

-   Large grassy and flowery biome that tends to generate high up on plateaus or next to large mountain ranges
-   Sometimes contains a lone, tall Oak or Birch Tree with a Bee Nest
-   Think Sound of Music!
-   Spawns Donkeys, Rabbits, and Sheep

#### Snowy Slopes

-   Very snowy terrain that can hide Powder Snow traps. I hope you kept those leather boots!
-   Tends to generate on high-altitude terrain beneath mountain peaks or on hilltops
-   Spawns Rabbits and Goats

#### Stony Peaks

-   Stony mountain peaks that may be jagged or smooth
-   These sometimes have large strips of Calcite running through them

### New ore distribution

-   Changed ore generation to match the new world height, and to add more strategy to mining. There is no longer a single height level that is best for all ores – you need to make tradeoffs!
-   Iron Ore generates below height 72, with a strong bias towards height 16. Iron Ore also generates above 80, with more Iron Ore as you go higher.
-   Copper Ore generates between height 0 and 96, with a strong bias towards height 48. Copper Ore generates in larger amounts in Dripstone Caves Biome.
-   Lapis Lazuli Ore generates below height 64, with a strong bias towards height 0. However, Lapis Lazuli Ore below height -32 or above height 32 cannot generate exposed to air. It will either be buried or inside water.
-   Coal Ore generates above height 0, with a strong bias towards height 96 and above. Coal Ore has reduced air exposure, so you will find more Coal Ore buried or underwater than exposed to air.
-   Gold Ore generates below height 32, with a strong bias towards height -16. Extra Gold Ore generates below height -48. Extra Gold Ore can be found in Badlands biomes above height 32.
-   Redstone Ore generates below height 16. Redstone Ore generation gradually increases as you go below height -32 and further down.
-   Diamond Ore generates below height 16, with more Diamond Ore the lower you go. Diamond Ore have reduced air exposure, so you will find more Diamond Ore buried or underwater than exposed to air.
-   Emerald Ore generates above height -16 in mountainous biomes, with more Emerald Ore the higher you go. Emerald Ore below height 0 is very rare!

###### Ore Distribution in Minecraft 1.18

![Minecraft 1.18 Ore Distribution](https://launchercontent.mojang.com/images/1-18-ore-distribution.jpg)

### Noise caves and Aquifers

-   Noise caves are a new way of generating caves, providing more natural variety. They can get really huge sometimes! Noise caves come in three flavors:
    -   Cheese caves: Like the holes in swiss cheese. These often form caverns of various size.
    -   Spaghetti caves: Long squiggly tunnels, sometimes wide like tagliatelle
    -   Noodle caves: Thinner, squigglier, and more claustrophobic variant of spaghetti caves
-   No, they aren't loud. The "noise" part of noise caves is a technical term and has nothing to do with sound.
-   The old cave carvers and canyons still generate, combining with the noise caves to form interesting cave systems
-   As with carvers, noise caves form cave entrances where they intersect the surface
-   An aquifer is an area with local water level, independent of sea level
-   Aquifers are used during world generation to generate bodies of water inside noise caves
-   This sometimes results in large underground lakes
-   They can also form inside mountains and on the surface
-   Aquifers below y0 will sometimes be lava aquifers instead of water aquifers
-   Magma Blocks sometimes generates at the bottom of underground bodies of water
-   Underwater cave carvers and underwater canyons have been removed, since aquifers are used to generate water in caves instead

### Sprinting

-   Previously, any collision with a block would reduce sprinting to walking. Now, for very minor angles of collision with a block, players retain their sprint. For larger angles of collision, the old behavior is retained.

### Upgrading of old worlds

-   The transition between new and old terrain is less "cliffy"
    -   Will surface height blend? Yes.
    -   Will biomes blend? Yes.
    -   Will caves blend? Your mileage may vary.
-   In old chunks, if there is any Bedrock at y=0, the sections below non-air blocks will be filled with new generation
-   The old Bedrock between y=0 and y=4 in old chunks gets replaced with Deepslate
-   A new Bedrock layer is placed at y=-64

### World generation

-   Generation range and build limits have been expanded by 64 blocks up and 64 blocks down, to a total range of 384 blocks
-   Underground features, structures, and caves generate all the way down to y-64
-   Exception: Diorite, Granite, Andesite, and Dirt will not generate below y0
-   Tweaked size and positioning of Diorite, Andesite, and Granite generation
-   Dripstone clusters can no longer be found in normal caves, only in Dripstone Caves biomes
-   Starting from y8 and below, Deepslate gradually replaces all Stone
-   Deepslate blobs no longer generate above y0
-   The terrain shape and elevation varies dramatically, indepedently from biomes
    -   For example, forests and deserts could form up on a hill without needing a special biome just for that
-   Less Diorite, Granite, and Andesite generates above y 60
-   Strips of Gravel can generate in stony shores
-   Swamp trees can grow in water 2 blocks deep (instead of just 1 block deep)
-   Removed water lake features, aquifers provide local water levels
-   A bunch of biome variants with simular features but different shapes have been merged into one, since the shape is controlled independently now
-   Renamed some biomes
-   Geodes now only generate up to height 30

## Technical

-   Added an accessibility option to stop the sky from flashing during thunderstorms
-   Added `fall_from_height` and `ride_entity_distance` advancement triggers
-   Changed `nether_travel` to match other similar triggers
-   Added an option to specify the audio device used by the game
-   Replaced `light` and `barrier` particles with `block_marker`
-   Replaced the clientbound chunk update network packet with another one that additionally contains light update data
    -   The separate light update packet still exists and is sent when a light update happens without a chunk update
-   New video setting called "Chunk Builder"
-   Changed the prioritization order of the chunk rendering pipeline
    -   Unrendered chunk holes in the world should not appear anymore while flying fast with high render distance
-   View distance now causes chunks to load cylindrically around players instead of in a square
-   Added "Toggle Sprint" and "Toggle Sneak" to the Controls settings
-   Moved Keybinds out to their own settings screen, accessible from Controls
-   Information about the world generation noise is now displayed on the debug screen
-   Added `illageralt`, rune-like font from Minecraft Dungeons (currently only usable via commands)
-   Added startup option `--jfrProfile` and command `jfr` to start profiling with Java Flight Recorder as well as a few custom events
-   Loot table functions `set_contents` and `set_loot_table` now require a `type` field with a valid block entity type
-   Added new loot table function `set_potion`
-   The maximum amount of background threads are increased
-   Worlds last saved before Minecraft 1.2 (pre "Anvil") can no longer be opened directly
-   Data pack format has been increased to 8
-   Resource pack format has been increased to 8
-   `--report` option in data generator now creates reference files for the entirety of the worldgen, instead of just the biomes
-   Removed length limits for scoreboard, score holder, and team names
-   Standalone `server.jar` now bundles contains individual libraries instead of being flat archive
-   Size limit for server resource packs has been increased to 250 MB
-   Servers can now set property `hide-online-players` to `true` in order to not send a player list on status requests
-   New setting called "Simulation Distance"
-   Mob spawners can now override light checks for spawning
-   Added telemetry for world loading

### Advancements

#### Changed triggers

##### `nether_travel`

-   `entered` condition is renamed to `start_position`
-   `exited` has been removed since it was identical to `player.location`

#### New triggers

##### `fall_from_height`

-   Triggered when a player lands after falling
-   Conditions:
    -   `player` - a player for which this trigger runs
    -   `start_position` - a location predicate for the last position before the falling started
    -   `distance` - a predicate for the distance between `start_position` and the player

##### `ride_entity_in_lava`

-   Triggered for every tick when a player rides in lava
-   Conditions
    -   `player` - a player for which this trigger runs
    -   `start_position` - a position where the riding started (first tick on lava)
    -   `distance` - a predicate for the distance between `start_position` and the player

### Chunk Builder Setting

-   This setting determines if chunk sections are updated immediately during a single frame, or asynchronously using threads
-   "Fully Blocking" corresponds to the previous way chunks were updated, which prevents potential visual gaps when blocks are destroyed
-   "Threaded" will significantly reduce stutters when blocks are placed or destroyed (especially with light sources), however brief visual gaps may rarely occur
-   "Semi Blocking" is the middle-option, and will only immediately update chunks that are deemed important, otherwise updates occur asynchronously using threads

### Java 17

Minecraft now uses Java version 17. If you are using a default setup, the Launcher will download and install the correct version. If you are using a custom Java setup, or a third-party launcher, you will need to ensure that your Java installation is version 17 or above.

### JFR Profiling

#### Custom events

All events are enabled when starting the profiling using either `jfr start` command or `--jfrProfile` startup flag. If profiling is started through any other means for monitoring purposes, only the `ServerTickTime`, `LoadWorld` and `NetworkSummary` are included by default.

-   `minecraft.ServerTickTime`: periodic event (1 second intervals) exposing average server tick times
-   `minecraft.NetworkSummary`: periodic event (10 second intervals) reporting total packet sizes and counts per connection
-   `minecraft.PacketReceived | minecraft.PacketSent`: network traffic
-   `minecraft.ChunkGeneration`: time taken to generate individual chunk stages
-   `minecraft.LoadWorld`: initial world loading duration

#### Overview

[Java Flight Recorder](https://openjdk.java.net/jeps/328) is the internal JVM profiling tool bundled with the Java Runtime to analyze performance and runtime characteristics.  
It's a useful tool for exposing internal JVM performance metrics as well as custom metrics that can be monitored or analyzed using any stock Java profiler or monitoring agents.

#### Profiling lifecycle

A profiling run can be started using any of the following alternatives:  
The run will then be stopped either by:

-   `--jfrProfile` startup flag when starting a Minecraft server or client
-   `jfr start` in-game command
-   Regular Java CLI tools such as `jcmd`
-   shutting down the JVM
-   `jfr stop` in-game command
-   `jcmd` CLI tool

#### Reports

A summary JSON report is written both to the log file and in the debug folder accompanied by a `.jfr` recording ready to be analyzed in i.e [JMC](https://github.com/openjdk/jmc) or any other profiler tool supporting the format.

### Loot tables

#### Changed functions

##### `set_contents`, `set_loot_table`

Added new mandatory field `type`. This type will be written into `BlockEntityTag.id`, to make sure that this tag can be correctly migrated between versions.

#### New functions

##### `set_potion`

-   Sets the `Potion` tag on any item

###### Parameters:

-   `id` - potion id

### Maximum amount of background threads increased

-   Various background tasks including worldgen are executed on a background thread pool
-   The default thread pool size equals the amount of available CPU threads, minus one
-   The upper thread pool limit has been raised from 7 to 255, which should help higher-end machines with improved world-gen performance
-   The upper limit can be overridden via the `max.bg.threads` Java system property, for example when running multiple servers on a single machine

### Mob spawning

-   Monster spawning limits are now per-player, rather than global for each dimension

### Old world conversion

-   Worlds last saved before Minecraft 1.2 (pre "Anvil") now require conversion in a previous version of the game to be able to be opened
-   We recommend that you upgrade your old version, 1.2 (pre "Anvil") or older, to version 1.6.4 - worlds opened for the first time in later versions will have incorrect biome information

### Particles

#### `block_marker`

-   Renders with a texture declared in the `particle` slot for a model assigned to the configured block state
-   Is summoned with same syntax as the `block` particle (i.e. `block_marker wheat[age=2]`)

### Resource Pack format

-   `minecraft/textures/gui/container/inventory.png` now contains an extra sprite for a thin-layout version of the effect list in the inventory

### Server bundling

-   `server.jar` now bundles individual libraries instead of merging all the files into a single archive
-   This change is meant to solve certain problems related to Java modules
-   On startup, `server.jar` will unpack libraries into a directory configured by `bundlerRepoDir` (default: working directory)
-   To run a different main class other than the server, use the `bundlerMainClass` property (for example `java -DbundlerMainClass=net.minecraft.data.Main -jar server.jar --reports`) or unpack the jar manually and use the contents of `META-INF/classpath-joined` for command line
-   If `bundlerMainClass` is empty, the program will just validate and extract files, and will then exit
-   Server classes are now signed

### Simulation Distance Setting

-   A new slider which is available under video settings
-   Entities, blocks, and fluids will not be updated outside of simulation distance
-   Allows higher render distance with less CPU load
-   There's also a new `simulation-distance` property in the dedicated server properties

### Spawner data changes

Example:

    SpawnData: {
        entity: {
            id: "minecraft:cow"
        },
        custom_spawn_rules: {
              sky_light_limit: {min_inclusive: 10, max_inclusive: 15}
        },
    }
    SpawnPotentials: [
      {
        data: {
          custom_spawn_rules: {
              block_light_limit: {min_inclusive: 0, max_inclusive: 15}
          },
          entity: {id: "minecraft:pig"},
        },
        weight: 2
      },
      {
        data: {
          custom_spawn_rules: {
              block_light_limit: {min_inclusive: 5, max_inclusive: 10},
              sky_light_limit: {min_inclusive: 10, max_inclusive: 15}
          },
          entity: {id: "minecraft:panda"}
        },
        weight: 1
      }
    ]
    

-   Spawners now support the `custom_spawn_rules` NBT in the `SpawnData` field and the `SpawnPotentials` list
-   `custom_spawn_rules` currently may contain fields `block_light_limit` and `sky_light_limit` - both are integer ranges with fields `min_inclusive` and `max_inclusive`
-   To make `SpawnPotentials` format similar to other weighted lists, structure was changed to `{weight: <int>, data: <previous contents without 'Weight', 'Entity' renamed to 'entity'>}`
-   To accommodate that change, previous contents of `SpawnData` were moved to `SpawnData.entity` (making format of that field same as elements of `SpawnPotentials.data`)

### Telemetry

In this release, we are re-introducing diagnostic tracking, which was part of Minecraft: Java Edition until 2018. We are bringing it back to better understand our players and to improve their experience. Specifically this information will help us prioritise various aspects of development and identify pain points. All data is treated according to GDPR and CCPA best practices and is used to develop a better-performing and generally more enjoyable Minecraft: Java Edition.

-   At this point, the only implemented event is world load

#### World Load event

-   Sent when loading singleplayer world or connecting to multiplayer server
-   Contains following information:
    -   launcher identifier
    -   user identitifer (XUID)
    -   client session id (changes on restart)
    -   world session id (changes per world load, to be reused for later events)
    -   game version
    -   operating system name and version
    -   Java runtime version
    -   if client or server is modded (same information as on crash logs)
    -   server type (single player, Realms or other)
    -   game mode

### World Data: Chunk Format

-   Removed chunk's `Level` and moved everything it contained up
-   Chunk's `Level.Entities` has moved to `entities`
-   Chunk's `Level.TileEntities` has moved to `block_entities`
-   Chunk's `Level.TileTicks` and `Level.ToBeTicked` have moved to `block_ticks`
-   Chunk's `Level.LiquidTicks` and `Level.LiquidsToBeTicked` have moved to `fluid_ticks`
-   Chunk's `Level.Sections` has moved to `sections`
-   Chunk's `Level.Structures` has moved to `structures`
-   Chunk's `Level.Structures.Starts` has moved to `structures.starts`
-   Chunk's `Level.Sections[].BlockStates` and `Level.Sections[].Palette` have moved to a container structure in `sections[].block_states`
-   Chunk's `Level.Biomes` are now paletted and live in a similar container structure in `sections[].biomes`
-   Chunk's `Level.CarvingMasks[]` is now `long[]` instead of `byte[]`
-   Added `yPos` the minimum section y position in the chunk
-   Added `below_zero_retrogen` containing data to support below zero generation
-   Added `blending_data` containing data to support blending new world generation with existing chunks

### World Generation

-   Bedrock layers now generate dependent on the world seed
-   New random number generator for overworld generation

## Fixed Bugs in 1.18

About 250 bugs were fixed in this release. [View the entire list on the issue tracker](https://bugs.mojang.com/issues/?filter=26552).

---

We're now releasing Minecraft: Java Edition 1.17.1. This release changes some behaviours of the features added in Caves & Cliffs: Part I, and it also fixes a few bugs and critical issues.

## Changes in 1.17.1

-   Blue axolotls can now only be obtained through breeding
-   Non-screaming goats now have a rare chance to produce a screaming goat when bred
-   Status effects on goats now also apply when the goat is jumping or ramming
-   Raised the drop rate for copper ingots from Drowned to 11% + 2% per level of looting
-   Powder snow now fills cauldrons 2 times faster than before (still pretty slowly, though!)
-   Zombies, Zombie Villagers, Husks and Drowned will no longer pick up glow ink sacs

## Technical Changes in 1.17.1

-   Deaths of named mobs are now logged
-   In case of DNS-based redirection, the client will send the hostname actually used to connect (this restores the pre-1.17 behaviour)

## Fixed bugs in 1.17.1

-   [MC-123654](https://bugs.mojang.com/browse/MC-123654) - "Sun, moon, and/or clouds are not showing if render distance is below 4"
-   [MC-131290](https://bugs.mojang.com/browse/MC-131290) - "Enchantments are saved as shorts, but are loaded as and function with integer values"
-   [MC-156155](https://bugs.mojang.com/browse/MC-156155) - Turkish lira sign (₺) appears as □ in the game
-   [MC-194736](https://bugs.mojang.com/browse/MC-194736) - Duplicate text mapping for U+00B7
-   [MC-196999](https://bugs.mojang.com/browse/MC-196999) - U+1FEC is wrong in Minecraft's font
-   [MC-213986](https://bugs.mojang.com/browse/MC-213986) - Pistons and dispensers can be used to create ghost blocks using powder snow
-   [MC-219018](https://bugs.mojang.com/browse/MC-219018) - Ghost items can be created using /item (server doesn't update client inventory correctly)
-   [MC-219290](https://bugs.mojang.com/browse/MC-219290) - Calcite is too quiet compared to other blocks
-   [MC-221656](https://bugs.mojang.com/browse/MC-221656) - Creative mode obtained Bucket of Axolotl/Tropical Fish only spawns one kind axolotl/tropical fish
-   [MC-222731](https://bugs.mojang.com/browse/MC-222731) - Captured axolotl constantly tries to leave water
-   [MC-223350](https://bugs.mojang.com/browse/MC-223350) - Loaded chunks sometimes don't render until the player moves their head slightly
-   [MC-223368](https://bugs.mojang.com/browse/MC-223368) - Strength and weakness potions / custom attack damage attributes does not change damage from goats
-   [MC-224894](https://bugs.mojang.com/browse/MC-224894) - Light tickets are released too early
-   [MC-225816](https://bugs.mojang.com/browse/MC-225816) - Hanging Roots appear large when an item entity
-   [MC-226461](https://bugs.mojang.com/browse/MC-226461) - Logs can be replaced with stone near lava pools
-   [MC-226505](https://bugs.mojang.com/browse/MC-226505) - Goat's long jump is not affected by the jump boost effect
-   [MC-226512](https://bugs.mojang.com/browse/MC-226512) - Goats do not use the damage of held items when ramming entities
-   [MC-226926](https://bugs.mojang.com/browse/MC-226926) - Emerald ore generates too often
-   [MC-226948](https://bugs.mojang.com/browse/MC-226948) - Withers are now affected by potion effects
-   [MC-227387](https://bugs.mojang.com/browse/MC-227387) - World gen datapacks will likely crash or softlock the game
-   [MC-227435](https://bugs.mojang.com/browse/MC-227435) - Lag when placing heads of non-existent players when on servers
-   [MC-227483](https://bugs.mojang.com/browse/MC-227483) - root\_system feature config's codec uses a wrong field
-   [MC-227520](https://bugs.mojang.com/browse/MC-227520) - Overworld Fossils always generate at bedrock level
-   [MC-227557](https://bugs.mojang.com/browse/MC-227557) - End portal texture appears stretched after world conversion
-   [MC-227618](https://bugs.mojang.com/browse/MC-227618) - Small dripleaf is consumed without being placed when used on tall seagrass
-   [MC-227651](https://bugs.mojang.com/browse/MC-227651) - Group for lapis lazuli ore smelting and blasting recipes is misspelled
-   [MC-227821](https://bugs.mojang.com/browse/MC-227821) - Client crash when trying to create/edit realm immediately after deleting previous one
-   [MC-227891](https://bugs.mojang.com/browse/MC-227891) - Ender pearls despawn when player logs out of a server
-   [MC-228219](https://bugs.mojang.com/browse/MC-228219) - Thrown ender pearls disappear upon entering the exit end portal
-   [MC-228343](https://bugs.mojang.com/browse/MC-228343) - java.lang.NullPointerException when random\_selector default feature isn't found
-   [MC-228430](https://bugs.mojang.com/browse/MC-228430) - "Very long loading pause while booting the game (""Failed to add PDH Counter"", caused by oshi)"
-   [MC-228599](https://bugs.mojang.com/browse/MC-228599) - Attempting to walk through flowing water constantly switches the player from swimming into normal mode
-   [MC-228802](https://bugs.mojang.com/browse/MC-228802) - "Chunks not loading on a server / Cannot invoke ""cmq.a(int, int, int)"" because ""☃"" is null"
-   [MC-228828](https://bugs.mojang.com/browse/MC-228828) - "Specifying the --server parameter when starting the game, causes the game to crash"
-   [MC-228858](https://bugs.mojang.com/browse/MC-228858) - Axolotls despawning though named and on leashes.
-   [MC-229169](https://bugs.mojang.com/browse/MC-229169) - Piglins can no longer hear players breaking protected blocks through walls
-   [MC-229191](https://bugs.mojang.com/browse/MC-229191) - Diamond ore distribution changed between 1.16.5 and 1.17
-   [MC-229246](https://bugs.mojang.com/browse/MC-229246) - Piglins and piglin brutes no longer call other piglins after attacking one of them behind walls
-   [MC-229299](https://bugs.mojang.com/browse/MC-229299) - Blue axolotls can spawn naturally
-   [MC-229441](https://bugs.mojang.com/browse/MC-229441) - You can steal the item a villager is holding for trade by killing it
-   [MC-229614](https://bugs.mojang.com/browse/MC-229614) - Wandering Trader obtained tropical fish are only white kob
-   [MC-230716](https://bugs.mojang.com/browse/MC-230716) - """death.attack.dryout"" and ""death.attack.dryout.player"" display raw translation strings (are untranslated)"

---

It’s here. The Cave Update, with a side of cliffs. That’s right, The Caves & Cliffs Update: Part I is launching today!

Now you can finally swim with the glow squid, fight alongside the axolotls, and get rammed off a mountain by a goat. You can also build with new blocks like copper, pointed dripstone, and moss, hang some hanging roots and cave vines, and marvel at the new ore textures. Light up your homes, caves, mineshaft and lives with the glow berry. Build a spyglass and peep your next adventure or just keep track of what that creeper over yonder is doing. Wait, what is it doing? Is it getting closer, or is this spyglass just really good?

Have fun with Part I!

## Features

-   Added Dripstone Blocks and Pointed Dripstone
-   Added Block of Amethyst, Budding Amethyst, Amethyst Cluster, and Amethyst Bud
-   Added Block of Raw Iron, Copper, and Gold
-   Added Candles
-   Added Copper
-   Added Deepslate
-   Added Glow Lichen
-   Added Lava Cauldrons
-   Added Lightning Rod
-   Added Lush Caves blocks
-   Added Powder Snow
-   Added Raw Copper, Raw Iron, and Raw Gold items
-   Added the Axolotl
-   Added the Glow Squid
-   Added the Goat
-   Added Spyglass
-   Added Tinted Glass
-   A Shulker hitting a Shulker with a Shulker Bullet can make a new Shulker
-   Additions to Wandering Trader and Mason trades
-   Bundles and Shulker Box items will drop their contents when destroyed
-   Changed Infested Block destroy times
-   Changes to the Shipwreck and Mineshaft loot
-   Dirt Paths (formerly Grass Path) can now be made by using a Shovel on Dirt, Podzol, Mycelium, or Coarse Dirt (as well as Grass)
-   Drowned now has a chance of dropping a Copper Ingot, and they no longer drop Gold Ingots
-   Experience Orbs now sometimes merge when in large quantities to improve performance. This does not change the rate at which the player can absorb them, it simply limits the amount of separate orbs floating around in the world. Orbs that merge will gain the lifetime of the most recently created one.
-   Holding down the space bar now increases the scroll speed in the credits
-   Minecarts and Rails work in water
-   Particles now appear when Pistons break blocks
-   Reordered some blocks in the Building Blocks Tab in the Creative Menu
-   Reordered the Redstone Tab in the Creative Menu
-   Simple Firework Rockets with one Gunpowder can now be crafted using the recipe book

### Accessibility

-   Added an alternative solid black background color for the Mojang Studios loading screen, toggleable with the "Monochrome Logo" accessibility option

### Advancements

-   Added "Whatever Floats Your Goat!" for floating in a boat with a Goat
-   Added "Wax on" for applying Honeycomb to a Copper block
-   Added "Wax off" for scraping wax off a Copper block
-   Added "The Cutest Predator" for catching an Axolotl in a Bucket
-   Added "The Healing Power of Friendship!" for teaming up with an Axolotl and winning a fight
-   Added "Glow and Behold" for making a Sign glow
-   Added "Light as a Rabbit" for walking on Powder Snow with Leather Boots
-   Added "Surge Protector!" for having a lightning strike a Lightning Rod near a Villager without setting the area on fire
-   Added "Is It a Bird?" for looking at a Parrot through a Spyglass
-   Added "Is It a Balloon?" for looking at a Ghast through a Spyglass
-   Added "Is It a Plane?" for looking at the Ender Dragon through a Spyglass

### Amethyst Blocks

-   Amethyst comes in block form inside the Geodes in two ways: Block of Amethyst and Budding Amethyst
-   All types of Amethyst blocks (Clusters included) create beautiful sounds when you walk on them, break them, place them, or hit them with a projectile – go make some music!

### Amethyst Clusters

-   Amethyst Clusters grow from Budding Amethyst, which can be found inside Amethyst Geodes
-   Clusters have four growth stages: Small Amethyst Bud, Medium Amethyst Bud, Large Amethyst Bud, and Amethyst Cluster
-   Clusters can only grow when they are placed on Budding Amethyst blocks
-   Fully-grown Amethyst Clusters drop four Amethyst Shards (or more with Fortune) when mined with a Pickaxe, and drop two Amethyst Shards when broken by hand, Piston, or other means
-   Clusters can be Silk Touched at any stage

### Amethyst Geodes

-   These huge geodes can be found anywhere underground in the Overworld
-   Amethyst Geodes have an outer layer of a new stone called Smooth Basalt
-   Amethyst Geodes have a second layer of another new block called Calcite
-   Amethyst Geodes have an inner layer of various Amethyst blocks

### Amethyst Shards

-   Amethyst Clusters drop two Amethyst Shards when broken by hand, Piston, or other means" to the
-   Amethyst Clusters drop four Amethyst Shards when mined with a Pickaxe (or more with Fortune)

### Axolotl

-   Amphibious!
-   Axolotls spawn in underground water that is in total darkness with Stone, Granite, Diorite, Andesite, Tuff, or Deepslate below
-   Axolotls love tropical fish! Bucket of Tropical Fish can be used to breed Axolotls
-   Axolotls will swim around with you if you're holding a Bucket of Tropical Fish in either hand
-   When a player kills a mob that the Axolotl was attacking or being attacked by, the Axolotl will show its appreciation by granting the player temporary Regeneration and removing any Mining Fatigue effects
-   If the player has more than two minutes of Regeneration effect left already, the axolotl will not grant additional Regeneration
-   You can pick up your Axolotl in a Water Bucket and carry it around just like a Salmon or a Cod
-   Axolotls will always chase after and attack Squids, Glow Squids, Tropical Fish, Cod, Salmon, Pufferfish, Drowned, Guardians, and Elder Guardians
-   Axolotls do not like being out of water, and will dry up and begin taking damage if they are out of water for longer than five minutes
-   An Axolotl will not dry up as long as they are in water or rain
-   Sometimes when an Axolotl takes damage while inside water, it will pretend to be dead so that it stops being attacked
-   There are four common varieties and one rare variety (blue) of Axolotl
-   Axolotls spawn in underground water sources that are in total darkness and above natural stone blocks
-   Axolotls now have a two-minute cooldown after hunting non-hostile targets: Squids, Glow Squids, Tropical Fish, Cod, Salmon, and Pufferfish
-   They will prioritize targeting hostile mobs over hunting

### Bone Meal

-   A crinkly, crunchy sound plays when Bone Meal is used

### Budding Amethyst

-   On any side of a Budding Amethyst block where there is air or a water source block, a Small Amethyst Bud will eventually grow
-   Amethyst Buds can only grow when attached to Budding Amethyst, and will grow until they become Amethyst Clusters

### Building Blocks Tab

-   All ores have been reordered to be in the same location in the creative inventory
-   Compact forms of raw and refined underground materials have been reordered

### Candles

-   Candles come in all sixteen colors and one uncolored variant
-   Up to four Candles can be placed in one block
-   Waterloggable! (But you cannot light them underwater, silly)
-   Wish anybody a happy birthday with a Cake with a Candle!
-   Candles can only be placed if there is a solid surface below but will remain even if the surface below is removed

### Cauldrons

-   Cauldrons can now be filled with Lava and Powder Snow Buckets!
-   Cauldrons filled with lava give off a Redstone signal with Strength 3 when used with a comparator

### Copper blocks

-   Craft nine Copper Ingots into a Copper Block
-   Craft Cut Copper, Cut Copper Stairs, and Cut Copper Slabs
-   The Stonecutter can be used to craft the different Copper Block variants
-   Use Honeycomb to craft Waxed Copper Blocks
-   Right-click with Honeycomb on Copper Blocks to wax them
-   Use Honeycomb in a Dispenser to wax Copper Blocks

### Copper Ore

-   Copper Ore can be found in ore blobs across the Overworld, similar to Iron and Coal (this is not the final generation for Copper...)
-   Smelt Copper Ore to get a Copper Ingot
-   Copper Ore drops 2-3 Raw Copper

### Deepslate

-   Deepslate can be found in the deepest parts of the underground, and is slightly tougher to mine than normal Stone
-   Deepslate will drop Cobbled Deepslate, similar to how Stone drops Cobblestone
    -   You can still obtain Deepslate with Silk Touch
-   Like Cobblestone, Cobbled Deepslate can be used to craft basic tools, Furnaces, and Brewing Stands
-   You can also craft the following blocks with Deepslate:
    -   Cobbled Deepslate Slab
    -   Cobbled Deepslate Stairs
    -   Cobbled Deepslate Wall
    -   Polished Deepslate
    -   Polished Deepslate Slab
    -   Polished Deepslate Stairs
    -   Polished Deepslate Wall
    -   Deepslate Bricks
    -   Deepslate Brick Slab
    -   Deepslate Brick Stairs
    -   Deepslate Brick Wall
    -   Deepslate Tiles
    -   Deepslate Tile Slab
    -   Deepslate Tile Stairs
    -   Deepslate Tile Wall
    -   Chiseled Deepslate
    -   Cracked Deepslate Bricks
    -   Cracked Deepslate Tiles
-   There is also an Infested variant of Deepslate found in the underground
-   Cobbled Deepslate can be smelted into Deepslate

### Deepslate Ores

-   Added Deepslate versions of Iron, Gold, Lapis, Redstone, and Diamond Ores that generate wherever those ores replace Deepslate
-   Twice as tough to mine as normal ores
-   While they will not generate underground, Deepslate versions of Copper, Emerald and Coal Ores have been added for map makers and data packs

### Dripstone Block

-   Decorative block
-   Can be crafted with four Pointed Dripstone

### Pointed Dripstone

-   Forms a stalactite if placed on the ceiling or a stalagmite if placed on the floor
-   Can be combined to form longer stalactites & stalagmites
-   Stalactites and stalagmites merge if the tips are next to each other, unless you press shift while placing
-   Stalagmites will break if they're not attached to something below
-   Landing or jumping on a stalagmite hurts, and they are sharp!
-   Stalactites fall down if not attached to something above
-   Being hit by a falling stalactite hurts, and they are sharp!
-   Stalactites drip water (or lava if there is lava above the ceiling)
-   A stalactite with a water source above the ceiling will gradually fill a cauldron below with water
-   A stalactite with a lava source above the ceiling will fill a cauldron below with lava after a while
-   Thrown Tridents break Pointed Dripstone

### Dripstone growth

-   If a stalactite is hanging from a Dripstone Block with a water source above, it will slowly grow both the stalactite from above and a stalagmite from below
-   Growth speed is random but very slow, a single growth step can take several Minecraft days
-   A stalactite will only grow up to seven blocks long
-   A stalactite will only cause stalagmite growth if the floor or stalagmite below is within ten blocks
-   If the stalactite tip is inside water it won't drip, and therefore won't trigger any growth
-   If the stalagmite tip is inside water it won't receive drops, and therefore won't be grown by a dripping stalactite. Same thing if there is any fluid between the two tips
-   A stalagmite or stalactite will never grow into a fluid

### Glow Lichen

-   A dim light source that generates in caves
-   Use Shears to pick it up
-   Use Bone Meal to spread it along block surfaces

### Glow Squid

-   Glow Squids are well-lit and can be seen from far distances!
-   When killed, Glow Squids drop Glow Ink Sacs
-   Glow Ink Sacs can be used on Signs to make the text super visible, even at night. Works with colors!
-   Craft a Glow Item Frame by combining a Glow Ink Sac with an Item Frame in a Crafting Table. Any item in a Glow Item Frame is perfectly illuminated, even at night.
-   Use an Ink Sac on a Sign to remove the glow effect
-   Axolotls will attack any Glow Squids they see, so... be careful
-   Glow Squids spawn in underground water that is in total darkness with Stone, Granite, Diorite, Andesite, Tuff, or Deepslate below

### Goat

-   Goats spawns in mountains
-   Goats can scale the sides of mountains with their incredible jumps
-   Goats can be tempted and bred using Wheat
-   Goats are another source of Milk!
-   Goats will ram anything that moves... also Armor Stands
-   Two in every 100 goats have something very loud to tell you!
-   Goats will avoid walking on Powder Snow
-   Screaming Goats will use their ram attack more often than other Goats will
-   Mobs rammed by Goats do not retaliate

### Infested Blocks

-   Infested Blocks are no longer instantly destroyed, and instead, have half the destroy time of their non-infested counterpart

### Lightning Rod

-   A Lightning Rod is crafted from three Copper Ingots
-   Keeps your builds safe (well, as long as the closest area around the Lightning Rod is fireproof) during thunderstorms!
-   The Lightning Rod will protect an area of 8 \* 16 blocks around it from the, sometimes devastating, lightning strikes!
-   Lightning Rods give off a Redstone signal when struck by lightning

### Lush Caves blocks

-   Added Moss
-   Added Dripleaves
-   Added Rooted Dirt and Hanging Roots
-   Added Spore Blossoms (currently only available in the Creative inventory)
-   Added Cave Vines and Glow Berries
-   Added Azalea Bushes

#### Azalea Bushes

-   Added Azalea Bushes as well as Flowering Azaela Bushes
-   Bees see Flowering Azalea (and Flowering Azalea Leaves) as flowers
-   Bonemeal Azalea or Flowering Azalea to get an Azalea Tree

#### Cave Vines and Glow Berries

-   Cave Vines grow down from the ceiling, like Weeping Vines
-   When they grow they have a chance of producing Glow Berries
-   Glow Berries are a natural light source as well as a food source
-   Foxes eat Glow Berries
-   Use Glow Berries to plant new Cave Vines
-   Bonemealing a Cave Vine will create Glow Berries

#### Drip Leaves

-   Small Dripleaf needs moisture, so it grows on Clay or underwater
-   The facing direction of Small Dripleaf blocks is determined by which direction the player is facing when placing it
-   The Wandering Trader will sometimes sell Small Dripleaf plants
-   Small Dripleaf grows into Big Dripleaf when bonemealed
-   Big Dripleaf grows taller when bonemealed
-   If you stand on a Big Dripleaf, it will tilt after a while, and you will fall off
-   A tilted Big Dripleaf will tilt up again after a while
-   A Big Dripleaf will tilt when hit by a projectile
-   A Redstone powered Big Dripleaf will not tilt (except when hit by a projectile)

#### Moss

-   Two new decorative blocks: Moss Block and Moss Carpet
-   Moss Carpet can be crafted from Moss Blocks
-   Moss Blocks can be crafted with Cobblestone or Stone Bricks to make the mossy versions of those blocks

#### Roots

-   Added Rooted Dirt and Hanging Roots – decorative blocks that will appear in the upcoming Lush Caves biome
-   Bonemealing Rooted Dirt grows Hanging Roots underneath
-   Tilling Rooted Dirt with a Hoe will convert it into Dirt, and pop out a Hanging Roots item

#### Spore Blossoms

-   A beautiful large flower placed on ceilings
-   Particles drip from it and will appear in the air around it

### Minecarts and Rails work in water

-   All Rails can be waterlogged (works with a Dispenser & Water Bucket too)
-   Flowing water doesn't break Rails
-   Minecarts can pass through water, but get slowed down more than usual

### Oxidation

-   Copper will oxidize over time
-   There are four stages: Copper, Exposed Copper, Weathered Copper, and Oxidized Copper
-   It takes 50-82 Minecraft days (in loaded chunks) for a Copper Block to oxidize one stage
-   Waxed Copper Blocks will not oxidize
-   You can wax any oxidation stage - keep that pretty Weathered Copper Block in its weathered stage forever!
-   A lightning strike hitting Copper will clean its oxidation
-   Waxed Copper Blocks can be crafted into nine Copper Ingots
-   Axes can scrape off wax and oxidation from Copper Blocks

### Powder Snow

Snowier snow!

-   Powder Snow is a trap block that causes any entity that walks into it to sink in it
-   You can pick up and place Powder Snow with a Bucket
-   Wear Leather Boots to prevent yourself from sinking into Powder Snow blocks
-   Leave a Cauldron outside in falling snow and it will fill with Powder Snow
-   Entities on fire now get extinguished when they collide with Powder Snow. The Powder Snow block is also destroyed
-   Skeletons convert to Strays when frozen
-   Powder Snow is pushable by Pistons and Sticky Pistons
-   Rabbits, Endermites, Silverfish, and Foxes can walk on top of Powder Snow without falling in

#### Freezing

-   Standing in Powder Snow will slowly freeze an entity
-   Once frozen, freeze damage is done every few seconds to the frozen entity
-   Wearing any piece of Leather Armor prevents freezing entirely
-   Added a `freezeDamage` game rule that allows players to toggle whether Powder Snow causes freeze damage or not
-   Strays, Polar Bears, and Snow Golems are immune to freezing
-   Mobs that are fully frozen will shake
-   Mobs that enjoy the heat (Blazes, Magma Cubes, and Striders) take increased freeze damage

### Redstone Tab

-   The Redstone Tab has been reordered to prioritize highly-used blocks
-   Redstone items/blocks have been grouped and ordered in the following way:
    -   Essentials
    -   Unique activators
    -   Miscellaneous
    -   Common activators
    -   Openables
-   Slime Blocks and Honey Blocks have been moved to the Redstone tab

### Smeltable Ore Drops

-   Ores that are smeltable now drop raw item forms of the ore instead of the ore block, and these can be smelted just like before
-   This is to prevent cluttering the inventory and have consistency with Fortune on all ores
-   Just like other ore materials, you can craft a compact version with raw ore items in order to save inventory space

### Smooth Basalt

-   Smelt Basalt to obtain Smooth Basalt

### Spyglass

-   You can use a Spyglass to see faraway things
-   Pretend to be a sea captain, or catch your neighbor in the act as they dye your Sheep lime green!
-   The Spyglass is crafted from two Copper Ingots and one Amethyst Shard

### Tinted Glass

-   Tinted Glass is a type of glass that does not allow light to pass through
-   Tinted Glass is crafted by putting a Glass Block in the middle of four Amethyst Shards
-   Tinted Glass can be obtained without Silk Touch; it does not shatter like normal glass

### Trade & Loot Table Additions

-   Added the following trades to Mason:
    -   Will sell four Dripstone Blocks for one Emerald
-   Added the following trades to Wandering Trader:
    -   Will sell two Pointed Dripstones for one Emerald
    -   Will sell two Rooted Dirt for one Emerald
    -   Will sell two Moss Blocks for one Emerald
-   Moss Blocks can be found in Shipwreck Chests
-   Glow Berries can be found in Mineshaft Chest Minecarts

### Tuff

-   A new type of stone that can be found in blobs between y0 and y16

### Underground structure changes

-   Strongholds are mostly encased in Stone
-   Mineshaft corridors are supported by log pillars below or Chains above when needed
-   Cobwebs don't generate fully floating in the air

### Visuals

-   Sky color now varies smoothly when moving between different biomes
-   Ores without unique shapes have been given new textures for accessibility reasons, so that each ore is distinguishable by shape alone
    -   Emerald Ore and Lapis Ore have had some small touch-ups
-   Being the most iconic ore, Diamond Ore texture is staying the same to keep that classic feel maintained
-   Blackstone, Polished Blackstone Bricks, and Cracked Polished Blackstone Bricks have had some minor touch-ups
-   Clock and Compass textures have been updated

### World generation

-   Dripstone clusters can be found rarely in normal caves
-   Deepslate blobs can be found from Y0 to y16

## Technical

-   Added `/debug function`
-   Added `/item` command
-   Added `lightning_bolt` sub-predicate
-   Added `looking_at` condition to player sub-predicate
-   Added `passenger`, `stepping_on` and `lightning_bolt` properties to entity predicate
-   Added `source` condition to `effects_changed` trigger
-   Added `started_riding`, `lightning_strike` and `using_item` advancement triggers
-   Added a metric cube of light!
-   Added a new NBT tag for entities, named "HasVisualFire", which will cause any entity with this flag to visually appear on fire, even if they are not actually on fire
-   Added F3+L shortcut to generate and persist performance metrics from in-game
    -   F3+L on single-player worlds will also include reports for the integrated server
-   Added gamerule `playersSleepingPercentage` (100 by default), which sets what percentage of players that must sleep in order to skip the night. Setting it to 0 will mean one player is always enough to skip the night. Setting it above 100 will prevent skipping the night.
-   Added item modifiers, which will reuse loot table functions syntax to describe item modification in `/item` command
-   Added loot table function `set_banner_pattern`
-   Added the Marker entity
-   Buttons that change value (like `Difficulty`) can now be controlled with the mouse wheel
-   Clicking on a button that changes the value while holding the shift key changes to the previous value
-   Data pack version is now 7
-   "Debug" world type can now be accessed while holding the alt key (was shift)
-   Entities are now saved separately from terrain chunks
-   Expanded `block` field on block predicate to `blocks`
-   Expanded `item` field on item predicate to `items`
-   GUI narration now includes position and usage of hovered or focused elements
-   Loot tables can now access scoreboard values by UUID
-   OpenGL 3.2 core profile
-   Perf start/stop command on dedicated servers will now generate and persist server performance metrics
-   Removed `/replaceitem`
-   Removed debug report command (use perf start/stop for server performance measurement)
-   `selector` and `nbt` chat components can now configure separators between elements
-   Servers can also display a custom message on resource pack prompt
-   Servers can now require custom resource packs to be accepted
-   The '/give' command can only give up to 100 stacks of items at a time (e.g. 6400 stone or 100 iron swords)
-   The default mode of structure blocks is now `Load`. `Data` is now hidden (but can be accessed by clicking the mode button while holding the alt key)
-   The maximum length of item names in the Anvil UI has been increased from 35 to 50
-   The maximum size that Slimes can be summoned with is now 128
-   The pack format in `version.json` has been split into data and resource versions
-   The Resource pack version is now 7
-   Upgraded to Java 16
-   Values inside random number generators can now be nested

### `/debug function`

-   New debug subcommand executes a command with the same syntax as function
-   Every executed command, message (even if it would be normally invisible), result, or error is stored to file

### Advancements

#### Changed predicates

##### Block predicate

-   `block` field expended to `blocks`, which now accepts an array of block types

##### Entity predicate

-   `passenger` - a new sub-predicate for a passenger that is directly riding this vehicle (if present, must match one or more)
-   `stepping_on` - a location predicate for a block that an entity is currently standing on
-   `lightning_bolt` - a sub-predicate that is valid only for a lightning bolt entity

##### Item predicate

-   `item` field expended to `items`, which now accepts an array of item types

##### Player predicate

-   `looking_at` - an entity that is currently viewed by a player
    -   uses same the line-of-sight rules as attacking mobs
    -   actual detection radius might be changed in future

#### Changed triggers

##### `effects_changed`

-   Added `source` triggers that match an entity that triggered the change
-   Might be empty when:
    -   there is no entity (for example, effect gained from a Beacon)
    -   the effect is self-applied
    -   an effect is removed

#### Lightning Bolt

-   `blocks_set_on_fire` - a range check for blocks set on fire by this entity
-   `entity_struck` - a predicate for entities struck by this lightning bolt (if present, must match one or more)

#### New triggers

##### `lightning_strike`

-   Triggered when a lightning strike finishes (i.e. entity disappears)
-   Triggers for any player within a certain radius of a lightning strike
-   Conditions
    -   `player` - a player for which this trigger runs
    -   `lightning` -a predicate for a lightning entity
    -   `bystander` - a predicate for one of the entities in a certain area around a strike that is not hurt by it

##### `started_riding`

-   Triggered when a player starts riding a vehicle or an entity starts riding a vehicle currently ridden by a player
-   Conditions:
    -   `player` - either a player that has started riding or one of the boat passengers

##### `using_item`

-   Triggered for every tick of using items (like Crossbows and Spyglasses)
-   Conditions
    -   `player` - a player that uses an item
    -   `item` - an item being used

### Chat component separators

-   Added `occludes_vibration_signals` block tag. Anything in this tag will occlude vibrations, and inherits `wool` tag entries by default
-   Components that prints lists of names, like `selector` or `nbt` can now override separator (`,` by default) with `separator` element
-   Examples:
    -   `{"selector": "@e[type=chicken]", "separator": "|"}`
    -   `{"nbt": "CustomName", "entity": "@e[type=chicken]", "interpret": true, "separator": {"text": "*", "color": "red"}}`

### Commands

#### `item`

Modifies the item or block inventory. This command has three forms: Possible sources and targets: For example, `/item replace block ~ ~ ~ container.0 from entity @s enderchest.0` will copy the first item from the player's Ender Chest to the first slot of a container that the player is currently standing on.

-   `/item replace <target> with <item stack> [<count>]` - the same as old `replaceitem`
-   `/item replace <target> from <source> [<modifier>]` - copies an item for source to target(s), optionally applying a modifier
-   `/item modify <target> <modifier>` - modifies an item (without copying)
-   `entity <selector> <slot>`
-   `block <x> <y> <z> <slot>`

### Custom server resource packs

-   A dedicated server can enforce custom resource packs by setting `require-resource-pack` in `server.properties`
    -   When this option is used, players will be prompted for a response and will be disconnected if they decline the required pack
    -   If user has a setting to automatically decline packs, the prompt will still be shown (since the alternative would be automatic disconnection)
-   A dedicated server can also configure an additional message to be shown on the resource pack prompt (`resource-pack-prompt` in `server.properties`, expects chat component syntax, can contain multiple lines)
    -   This message won't be shown if user has already declined pack and it's not required

### Customized worlds

-   World height related values are now exposed for customized worlds

### Data Packs

Changes to data packs for version 7:

-   Removal of `/replaceitem` (replaced with `/item replace`)

### Entity storage

-   Entities have been extracted from main (terrain) chunks and are now stored in a separate `entities` directory (similar to POI storage)
-   Those new files are still region files with NBT

### Item modifiers

-   The function part of loot tables can now be defined as a separate data pack resource in the `item_modifiers` directory
-   This type of file can contain a single function (i.e single JSON object) or an array of functions

### Java 16

Minecraft now uses a more recent version of Java. If you are using a default setup, the Launcher will download and install the correct version. If you are using a custom Java setup, or a third-party launcher, you will need to ensure that your Java installation is version 16 or above.

### Light block

-   Op-only (`/give`), air-like, waterloggable block
-   Emits light at a level that is determined by block state
-   Visible and targetable only when an item is held (similar to Barrier Blocks)
-   Right click cycles the light level

### Loot tables

#### Changed conditions

#### Changed functions

##### `copy_nbt`

-   `source` parameter can now accept an object with type and additional parameters
-   The old syntax of just writing "target" is present and equivalent to `{"type": "context", "target": "<target>"}`
-   New `storage` provider (example: `{"type": "storage", <namespaced id>}`) can be used to access command storage

##### `set_count`

This function now has `add` parameter. If `true`, the change will be relative to the current item count. If `false`, item count will be replaced with current value (default behavior)

##### `set_damage`

This function now has an `add` parameter. If `true`, the change will be relative to the current damage. If `false`, the damage will be replaced with the current value (default behavior)

#### New conditions

##### `value_check`

Checks range of value. Parameters:

-   `value` - see "New value providers" section (currently a combination of random generators and score)
-   `range` - min/max range

#### New functions

##### `set_banner_pattern`

Sets tags needed for banner patterns. Parameters:

-   `patterns` - list of pattern objects:
    -   `pattern` - the name of the pattern (`square_bottom_left`, `bricks`, etc.)
    -   `color` - the name of the color (`light_gray`, etc.)
-   `append` - if `true`, the new elements will be appended to the existing ones instead of replacing them

##### `set_enchantments`

Modifies enchantments on an item.

###### Parameters

-   `enchantments` - map of enchantment id to level value (can be a score or a random number)
-   `add` - if `true`, the change will be relative to the current level. If `false`, the level will be replaced with the current value (default behavior)

#### New value providers

Note: value providers can be used in same places as random number generators.

##### `score`

Returns scaled scoreboard value.

###### Parameters

-   `score` - scoreboard name
-   `target` - see below
-   `scale` - scaling factor (float)

###### Scoreboard provider targets

-   `<target>` or `{"type": "context", "target": <target>}` where `<target>` can be one of `this`, `killer`, `direct_killer`, `killer_player` (not all may be available depending on context)
-   `{"type": "fixed", "name": "<scoreboard name>"}` for fixed scoreboard name (may be fake player)

### Markers

Markers are a new type of entity that is meant for custom use cases like map-making and data packs.

-   Only exist on the server-side, and are never sent to clients
-   They do not do any updates of their own
-   They have a `data` compound field that can contain any data

### OpenGL

Rendering is now using OpenGL 3.2 core profile. All fixed-function rendering has been replaced with shader-based rendering.

#### Shaders

Shaders are now included for all supported render states. Any shader, except for the `blit` shader, can also be replaced in resource packs. For now, replacing these shaders is **not officially supported**, and the way it works may change in the future. The current rendering engine uses a system similar to the post-processing shader pipeline. There are some differences between both systems that cater to the slightly different requirements.

### Particles

-   Added new particle types called `vibration` and `dust_color_transition`

### Performance metrics reporting

These will be saved to a zip file in `debug/profiling/<yyyy-MM-dd_HH.mm.ss-[levelname]-[version]>.zip` and could be used for performance regression analysis if included in bug reports. The exact metrics, output format, and names are susceptible to change between versions. Our plan is to continue iterating on which metrics to capture.

#### Client F3+L shortcut

Pressing F3+L while in the game will start a recording for 10 seconds, which captures metrics such as tick durations, used heap sizes, and other more detailed stats. Pressing F3+L before the 10-second limit will end the recording early. This shortcut is always available to clients, even on multi-player servers where it will record client-side performance.

#### Dedicated Server perf start/stop command

-   `perf start` will start a recording for 10 seconds, which captures metrics such as tick durations, used heap sizes, and other more detailed stats.
-   `perf stop` before the 10-second limit will end the recording early.

### Resource Packs

Changes to resource packs for version 7:

-   Drowned texture mirroring has changed (see [MC-174685](https://bugs.mojang.com/browse/MC-174685))
-   The slots for the Game Mode Selector are now 26 pixels instead of 25

### Server properties

-   Removed `max-build-height`

### Statistics

-   The statistic for play time has been renamed to `play_time`
-   There is now a statistic for "Time with World Open" (`total_world_time`) that also includes time when the game was paused

## Fixed Bugs in 1.17

-   More than 300 bugs were fixed in this release. [View the entire list on the issue tracker](https://bugs.mojang.com/issues/?filter=26014)

---

Happy Friday! We're now releasing 1.16.5, which fixes two critical stability issues. We are not releasing more information about these issues at this time to protect servers that have not yet updated.

This release is network compatible with 1.16.4 - this means you do not need to upgrade your game right away to play on an upgraded server. However, we highly encourage all server owners to update as soon as possible to apply the stability fixes.

Next week, we aim to release the next snapshot of Caves & Cliffs. Stay tuned!

---

It's time for the 1.16.4 release! This release adds the new social interactions screen and fixes a few crashes.

If you missed it, we recently announced that Mojang accounts will be migrating into Microsoft accounts. This release prepares for that by having the game understand the settings and block-list of Microsoft accounts. You can read more about it over [here](https://www.minecraft.net/article/java-edition-moving-house), and you can find answers to questions you might have in the [FAQ](https://help.minecraft.net/hc/en-us/articles/360050865492), which will be continuously updated.

## Features in 1.16.4

-   New UI called Social Interactions Screen
-   A button to open a link to the Accessibility Guide can now be found in the Accessibility Options screen

### Social Interactions Screen

A new screen available in Multiplayer which shows a list of all players on a server so you can hide chat from any player.

-   Opens with a configurable key binding, by default P
-   Which players are hidden resets when you disconnect from a server

### Blocked Players

-   When logging in with a Microsoft account, players blocked in your account are now also blocked in the game, and account restrictions are now respected
-   Chat from blocked players is always hidden
-   Realms invites from blocked players are hidden

## Bugs fixed in 1.16.4

-   [MC-192434](https://bugs.mojang.com/browse/MC-192434) Netherite Leggings are textured weirdly
-   [MC-199487](https://bugs.mojang.com/browse/MC-199487) WorldGen Deadlock
-   [MC-201885](https://bugs.mojang.com/browse/MC-201885) Divide by zero error in the Ender dragon entity class can cause a server crash and infinite velocity
-   [MC-202147](https://bugs.mojang.com/browse/MC-202147) Cursor in Social Interactions & Recipe Book & Anvil menu doesn’t blink

---

