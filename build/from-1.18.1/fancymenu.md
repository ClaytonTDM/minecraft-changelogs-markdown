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

# Minecraft: Java Edition 1.18

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

# Minecraft: Java Edition 1.17.1

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
-   [MC-227483](https://bugs.mojang.com/browse/MC-227483) - root;;_;;system feature config's codec uses a wrong field
-   [MC-227520](https://bugs.mojang.com/browse/MC-227520) - Overworld Fossils always generate at bedrock level
-   [MC-227557](https://bugs.mojang.com/browse/MC-227557) - End portal texture appears stretched after world conversion
-   [MC-227618](https://bugs.mojang.com/browse/MC-227618) - Small dripleaf is consumed without being placed when used on tall seagrass
-   [MC-227651](https://bugs.mojang.com/browse/MC-227651) - Group for lapis lazuli ore smelting and blasting recipes is misspelled
-   [MC-227821](https://bugs.mojang.com/browse/MC-227821) - Client crash when trying to create/edit realm immediately after deleting previous one
-   [MC-227891](https://bugs.mojang.com/browse/MC-227891) - Ender pearls despawn when player logs out of a server
-   [MC-228219](https://bugs.mojang.com/browse/MC-228219) - Thrown ender pearls disappear upon entering the exit end portal
-   [MC-228343](https://bugs.mojang.com/browse/MC-228343) - java.lang.NullPointerException when random;;_;;selector default feature isn't found
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

