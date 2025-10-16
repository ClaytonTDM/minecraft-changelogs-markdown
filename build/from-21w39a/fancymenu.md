# Minecraft Snapshot 21w39a

Time for an Advanced snapshot! In this snapshot, you can also open worlds from previous versions again - with one big warning! The blending technology we intend to introduce for Caves & Cliffs: Part II is not yet available. If you open an old world in this snapshot it will be upgraded with air under the current bottom of the world and visible chunk borders to new areas.

**We highly recommend backing up your world before loading it in this snapshot.**

## New Features in 21w39a

-   Added Caves & Cliffs: Part II Advancements

### Advancements

-   Added "Caves & Cliffs" for falling from top to bottom of the Overworld
-   Added "Feels like home" for riding strider on lava for 50 blocks in the Overworld
-   Added "Star Trader" for trading with a villager at the build height limit
-   Added "Sound of Music" for playing music with a jukebox in a Meadow biome

## Changes in 21w39a

-   Tweaked peaks to make small mountains look more like proper jagged mountain peaks instead of flat hilly mounds
-   The lone trees in Meadows now always contain a bee nest
-   Drowned can spawn in aquifers inside dripstone caves
-   Zombies don't spawn in dripstone caves
-   Buried treasure chests can now contain water breathing potions
-   Changed default brightness to 50
-   Redesigned how effects look in the inventory screen, to allow them to show even with recipe book open

### Effects

-   Your list of effects are now shown to the right of your inventory, instead of the left side
-   When the inventory effects list is visible, it will be hidden from the game view to reduce screen clutter
-   There's now two modes of seeing the effect list: compact and classic
    -   Classic is the pre-existing list of effects, one after another
    -   Compact is a single icon for each effect, suitable for small screen estate
-   The game will automatically switch between the two looks to suit the available screen estate (including having the recipe book open)

## Technical Changes in 21w39a

-   Added `fall_from_height` and `ride_entity_distance` advancement triggers
-   Changed `nether_travel` to match other similar triggers
-   Added new loot table function `set_potion`
-   Changes to the on-disk chunk format
-   Resource pack format has been increased to 8
-   Standalone `server.jar` now bundles contains individual libraries instead of being flat archive

### Advancements

**New triggers**

**`fall_from_height`**

-   Triggered when a player lands after falling
-   Conditions:
    -   `player` - a player for which this trigger runs
    -   `start_position` - location predicate for last position before falling started
    -   `distance` - predicate for distance between `start_position` and player

**`ride_entity_in_lava`**

-   Triggered for every tick when player rides in lava
-   Conditions
    -   `player` - a player for which this trigger runs
    -   `start_position` - position where riding started (first tick on lava)
    -   `distance` - predicate for distance between `start_position` and player

**Changed triggers**

**`nether_travel`**

-   `entered` condition renamed to `start_position`
-   `exited` has been removed, since it was identical to `player.location`

### Loot Tables

**New functions**

**`set_potion`**

Sets `Potion` tag on any item

**Parameters:**

-   `id` - potion id

### World Data: Chunk Format

-   Chunk's `Level.Sections[].BlockStates` & `Level.Sections[].Palette` have moved to a container structure in `Level.Sections[].block_states`
-   Chunk's `Level.Biomes` are now paletted and live in a similar container structure in `Level.Sections[].biomes`
-   Chunk's `Level.CarvingMasks[]` is now `long[]` instead of `byte[]`

### Resource Pack format

-   `minecraft/textures/gui/container/inventory.png` now contains an extra sprite for a thin-layout version of the effect list in the inventory

### Server bundling

-   `server.jar` now bundles individual libraries instead of merging all the files into single archive
-   This change is meant to solve certain problems related to Java modules
-   On startup, `server.jar` will unpack libraries into directory configured by `bundlerRepoDir` (default: working directory)
-   To run different main class than server, use `bundlerMainClass` property (for example `java -DbundlerMainClass=net.minecraft.data.Main -jar server.jar --reports`) or unpack jar manually and use contents of `META-INF/classpath-joined` for command line

## Fixed bugs in 21w39a

-   [MC-116359](https://bugs.mojang.com/browse/MC-116359) Status effects aren't displayed in inventory when recipe book is open
-   [MC-149822](https://bugs.mojang.com/browse/MC-149822) Bottom border on status effect displays in the inventory is missing
-   [MC-193348](https://bugs.mojang.com/browse/MC-193348) Status effect bars shift the player's inventory in creative mode
-   [MC-196723](https://bugs.mojang.com/browse/MC-196723) Potion effects obtained in creative mode while in inventory do not show up until reopening inventory
-   [MC-214894](https://bugs.mojang.com/browse/MC-214894) Bamboo generates in caves under jungles
-   [MC-214959](https://bugs.mojang.com/browse/MC-214959) Sugar cane generated in cave
-   [MC-218167](https://bugs.mojang.com/browse/MC-218167) Chatting causes lag to occur
-   [MC-236755](https://bugs.mojang.com/browse/MC-236755) "Feature Placement" Crash / java.lang.IndexOutOfBoundsException: Index 0 out of bounds for length 0
-   [MC-236903](https://bugs.mojang.com/browse/MC-236903) Naturally generated cave vines have an age between 17-25
-   [MC-237505](https://bugs.mojang.com/browse/MC-237505) Certain Biome Builder debug values do not change

---

# Minecraft Snapshot 21w38a

The second Caves & Cliffs: Part II snapshot is here! This snapshot mostly contains tweaks and bug fixes, but there are also some new technical additions such as a separate simulation distance slider and an increased thread count (no I'm not talking about the fancy sheets you're thinking about buying).

Oh, and you also seemed to enjoy Strongholds quite a lot, so we decided to add them back into the game. Enjoy!

## Known Issues in 21w38a

-   This snapshot is still not compatible with older worlds - to play in this snapshot, you will have to create a new world
-   World saving can sometimes take a very long time - if you see the world stop moving for a time, this is why

## Changes in 21w38a

-   Sprinting is no longer reduced to walking when gently brushing your sleeve against a wall
-   Fixes for the distribution of ores

### Ore distribution

-   Copper ore generates up to y 95 (as originally designed)
-   Increased the amount of copper
-   Lapis lazuli generates in blobs, like other ores (instead of spread out)

### Sprinting

-   Previously, any collision with a block would reduce sprinting to walking. Now, for very minor angles of collision with a block, players retain their sprint. For larger angles of collision, the old behavior is retained.

## Technical Changes in 21w38a

-   A new setting has been added: "Simulation distance"
-   Maximum amount of background threads increased
-   Added telemetry for world loading

### Simulation distance setting

-   Entities will not be updated outside of simulation distance.
-   Allows higher render distance with less CPU load.
-   A new slider in video settings on the client.
-   A new `simulation-distance` property in dedicated server properties.
-   We will continue working on it with a goal of simulation distance also affecting block and fluid ticking.

### Maximum amount of background threads increased

Various background tasks including worldgen are executed on a background thread pool. Its size equals the amount of available CPU threads minus one, but there was an upper limit of 7. Now this upper limit is 255. This should help higher-end machines with world-gen performance.

The upper limit can be overridden by `max.bg.threads` Java system property, for example when running multiple servers on a single machine.

### Telemetry

In this release, we are re-introducing diagnostic tracking, which was part of Minecraft: Java Edition until 2018. We are bringing it back to better understand our players and to improve their experience. Specifically, we hope to ensure stronger performance for the extremely heavy world generation in the second part of the Caves & Cliffs update later this year.

In practice, this can mean identifying technical pain points in the game, like how less powerful hardware performs in high-complexity terrain. This information will also help us prioritize various aspects of development, balance game features (by learning, for instance, that the goats are pushing every single player off the cliffs) and lend new Minecrafters a helping hand (after realizing that many of them get stuck at the same points). All data is treated according to GDPR and CCPA best practices and is used to develop a better-performing and generally more enjoyable Minecraft: Java Edition.

At this point the only implemented event is world load.

**World Load event**

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

## Bugs fixed in 21w38a

-   [MC-44055](https://bugs.mojang.com/browse/MC-44055) Game fails to switch the audio output from one device to another after the game has started (from title screen)
-   [MC-236611](https://bugs.mojang.com/browse/MC-236611) No sound for using shears on weeping, twisting, cave vines or kelp
-   [MC-236618](https://bugs.mojang.com/browse/MC-236618) Strongholds don't generate in 21w37a
-   -   [MC-236621](https://bugs.mojang.com/browse/MC-236621) Liquids sometimes do not propagate
-   [MC-236633](https://bugs.mojang.com/browse/MC-236633) Random light level of 0 in sky
-   [MC-236656](https://bugs.mojang.com/browse/MC-236656) Crash when changing render distance / java.lang.ArrayIndexOutOfBoundsException: Index 28084 out of bounds for length 26136
-   [MC-236665](https://bugs.mojang.com/browse/MC-236665) Memory leak in 21w37a
-   [MC-236698](https://bugs.mojang.com/browse/MC-236698) Big Spruce Trees don't generate in Groves
-   [MC-236711](https://bugs.mojang.com/browse/MC-236711) Starting and stopping JFR profiling multiple times within the same minute overwrites previous JFR results saved during that minute
-   [MC-236718](https://bugs.mojang.com/browse/MC-236718) Dripstone caves generate above the ground
-   [MC-236795](https://bugs.mojang.com/browse/MC-236795) Cannot start with alternate JVM due to JFR requirement
-   [MC-236873](https://bugs.mojang.com/browse/MC-236873) Problems with JFR event metadata
-   [MC-236967](https://bugs.mojang.com/browse/MC-236967) Too many aquifers on biome surfaces at Y=63 and below
-   [MC-237109](https://bugs.mojang.com/browse/MC-237109) Aquifers often generate with harsh straight borders

---

# Minecraft Snapshot 21w37a

Marvellous mountains and colossal caves, this snapshot has it all! Today we're bringing the Overworld revamp to regular snapshots. If you've been playing or checking out the experimental snapshots that we've been releasing, you should be familiar with what you're seeing. If not, you're in for a treat!

Since we're extending the world height, and there are quite a few under-the-hood changes, we've been keeping an eye on how the game is running, and there are still improvements to be made. However, we would still appreciate it if you would be able to take this survey so that we can understand how you perceive the performance of this snapshot.

It should also be noted that there is currently no upgrade path for existing worlds in this snapshot. This means that you can only create new worlds in this snapshot, and not play on any of your existing worlds. We're working on this and you should be able to play on your existing worlds in an upcoming snapshot not too far in the future.

All of this said, we hope that you have a great time checking out these new additions. Watch your feet so that you don't fall into a very deep hole, and make sure you don't get punted off a mountain by a goat that's just minding its own business.

Happy mining!

## New Features in 21w37a

-   Added noise caves and aquifers
-   Added Dripstone Caves underground biome
-   Added Grove biome
-   Added Lofty peaks biome
-   Added Lush Caves underground biome
-   Added Meadow biome
-   Added Snowcapped peaks biome
-   Added Snowy slopes biome
-   Added Stony peaks biome
-   New ore distribution and large ore veins
-   Overworld build and generation limits have been expanded

### Blocks

-   Enchanting Tables now emit a low amount of light
-   Using shears on the tip of a Cave Vine, Twisting Vine, Weeping Wine or Kelp now causes it to stop growing

### Dripstone Caves biome

-   Contains plenty of Pointed Dripstone and Dripstone Block on the floors and ceilings, and small pools of water
-   In some places you'll find larger stalagmites, stalactites, and columns built from Dripstone Blocks
-   Contains extra copper ore

### Grove

-   Snowy terrain with big spruce trees and powder snow traps. Might want to wear leather boots!
-   Tends to generate on high-altitude terrain beneath mountain peaks or on hilltops.
-   Spawns wolfs, rabbits, and foxes.

### Large ore veins

-   Ore veins are large, rare, snake-like underground ore formations
-   Copper veins form between y 0 and y 50 and are mixed with Granite
-   Iron veins form below y -60 and y -8 and are mixed with Tuff

### Lofty peaks

-   Dramatic jagged mountain peaks with snow and stone
-   Spawns goats

### Lush Caves biome

-   Moss covers the floors and ceilings
-   Spore Blossoms grow from the ceiling and drip particles
-   Contains Clay pools with Dripleaf plants growing out of them
-   Contains Azalea Bushes and Flowering Azalea Bushes
-   The Azalea Tree loves to have its roots in Lush Caves, so if you find an Azalea Tree (either overground or in a cave) you know there is a Lush Cave beneath you
-   Cave Vines with Glow Berries grow from the ceiling and light up the caves

### Meadow biome

-   Large grassy and flowery biome that tends to generate high up on plateaus or next to large mountain ranges.
-   Sometimes contains a lone tall oak or birch tree, often with a bee nest.
-   Think Sound of Music!
-   Spawns donkeys, rabbits, and sheep.

### Mob Spawning

-   Monsters now only spawn in places where the light from blocks is 0 (sky light still prevents spawning like before)
-   Fixed an issue where players in multiplayer can face more or far fewer enemies than intended, particularly when other players are flying

### New ore distribution

-   Changed ore generation to match the new world height, and to add more strategy to mining.
-   There is no longer a single y level that is best for all ores, you need to make tradeoffs.
-   Iron ore generates below y 72, with a strong bias towards y 16.
-   Iron ore also generates above 112, with more iron ore as you go higher.
-   Copper ore generates between y 0 and y 96, with a strong bias towards y 48.
-   Copper ore generates in larger amounts in dripstone caves biome.
-   Lapis lazuli generates below y 64, with a strong bias towards y 0. However, Lapis below y -32 or above y 32 cannot generate exposed to air. It will either be buried or inside water.
-   Coal generates above y 0, with a strong bias towards y 96 and above.
-   Coal has reduced air exposure, so you will find more coal buried or underwater than exposed to air.
-   Gold generates below y 32, with a strong bias towards y -16.
-   Extra gold can (still) be found in badlands biomes.
-   Redstone ore generates below y 16. Redstone ore generation gradually increases as you go below y -32 and further down.
-   Diamond generates below y 16, with more diamond the lower you go.
-   Diamonds have reduced air exposure, so you will find more diamond buried or underwater than exposed to air.

### Noise caves and Aquifers

-   Noise caves are a new way of generating caves, providing more natural variety. They can get really huge sometimes! Noise caves come in three flavors:
    -   Cheese caves. Like the holes in swiss cheese. These often form caverns of various size
    -   Spaghetti caves. Long squiggly tunnels, sometimes wide like tagliatelle
    -   Noodle caves. Thinner, squigglier, and more claustrophobic variant of spaghetti caves
-   No, they aren't loud. The "noise" part of noise caves is a technical term and has nothing to do with sound
-   The old cave carvers and canyons still generate, combining with the noise caves to form interesting cave systems
-   As with carvers, when noise caves intersect the surface they form cave entrances
-   An aquifer is an area with local water level, independent of sea level. Aquifers are used during world generation to generate bodies of water inside noise caves. This sometimes results in large underground lakes! They can also form inside mountains and on the surface.
-   Aquifers below y0 will sometimes be lava aquifers instead of water aquifers
-   Magma Blocks sometimes generates at the bottom of underground bodies of water
-   Underwater cave carvers and underwater canyons have been removed, since aquifers are used to generate water in caves instead

### Options

-   Added an accessibility option to stop the sky flashing during thunderstorms
-   Added an option to specify the audio device used by the game
-   Added "Toggle Sprint" and "Toggle Sneak" to the Controls settings
-   Moved Keybinds out to their own settings screen, accessible from Controls

### Snowcapped peaks

-   Smooth mountain peaks with ice and snow
-   Spawns goats and yeti. No actually just goats.

### Snowy slopes

-   Very snowy terrain that can hide powder snow traps. Might want to wear leather boots!
-   Tends to generate on high-altitude terrain beneath mountain peaks or on hilltops.
-   Spawns rabbits and goats.

### Stony peaks

-   Stony mountain peaks that may be jagged or smooth
-   Spawns goats
-   Contains strips of calcite sometimes

### World generation

-   Generation range and build limits have been expanded by 64 blocks up and 64 blocks down, to a total range of 384 blocks
-   Underground features, structures, and caves generate all the way down to y-64
-   Exception: Diorite and Granite and Andesite and Dirt don't generate below y0
-   Tweaked size and positioning of Diorite, Andesite & Granite generation
-   Dripstone clusters can no longer be found in normal caves, only in dripstone caves biome
-   Starting from y0 and below deepslate gradually replaces all stone
-   Deepslate blobs no longer generate above y0
-   The terrain shape and elevation varies dramatically, indepedently from biomes. For example, forests and deserts could form up on a hill without needing a special biome just for that
-   Less diorite/granite/andesite generates above y 60
-   Strips of gravel can generate in stony shores
-   Swamp trees can grow in water 2 blocks deep (instead of just 1 block deep)

## Changes in 21w37a

-   Illagers (Vindicator, Pillager, Evoker) no longer attack baby villagers
-   Axolotls now only spawn in lush caves
-   Axolotls now have their own, separate, mob cap
-   Raised the cloud level from 128 to 192

## Technical Changes in 21w37a

-   Replaced the clientbound chunk update network packet with another one which additionally contains light update data. Separate light update packet still exists and is sent when light update happens without chunk update.
-   View distance now causes chunks to load cylindrically around players instead of in a square
-   Information about the world generation noise is now displayed on the debug screen
-   Added `illageralt`, rune-like font from Minecraft Dungeons (currently only usable via commands)
-   Added startup option `--jfrProfile` and command `jfr` to start profiling with Java FlightRecorder as well as a few custom events.
-   Loot table functions `set_contents` and `set_loot_table` now require `type` field with valid block entity type
-   Worlds last saved before Minecraft 1.2 ("pre-anvil") no longer can be opened directly
-   Data pack format has been increased to 8
-   New video setting "Priority updates".
-   Removed length limits for scoreboard, score holder and team names
-   Mob spawners can now override light checks for spawning

### JFR Profiling

**Custom events**

-   `minecraft.ServerTickTime`: sampling event exposing average server tick times at one second intervals
-   `minecraft.ChunkGeneration`: time taken to generate individual chunk stages
-   `minecraft.PacketRead | minecraft.PacketSent`: network traffic
-   `minecraft.WorldLoadFinishedEvent`: initial world loading duration

**Ending a profiling run**

The run will then be stopped either by:

-   shutting down the JVM
-   `jfr stop` in-game command
-   `jcmd` CLI tool

**Overview**

Java Flight Recorder ([https://openjdk.java.net/jeps/328](https://openjdk.java.net/jeps/328)) is the internal JVM profiling tool bundled with the Java Runtime to analyze performance and runtime characteristics. It's a useful tool for exposing internal JVM performance metrics as well as custom metrics that can be monitored or analyzed using any stock Java profiler or monitoring agents.

**Reports**

A summary JSON report is written both to the log file and in the debug folder accompanied by a `.jfr` recording ready to be analyzed in i.e JMC [https://github.com/openjdk/jmc](https://github.com/openjdk/jmc) or any other profiler tool supporting the format.

**Starting a profiling run**

A profiling run can be started using any of the following alternatives:

-   `--jfrProfile` startup flag when starting a Minecraft server or client
-   `jfr start` in-game command
-   Regular Java CLI tools such as `jcmd`

### Loot tables

**Changed functions**

**`set_contents`, `set_loot_table`**

Added new mandatory field `type`. This type will be written into `BlockEntityTag.id`, to make sure this tag can be correctly migrated between versions

### Old world conversion

-   Worlds last saved before Minecraft 1.2 ("pre-anvil") now require conversion in a previous version of a game to be able to be opened
-   Conversion works best in versions 1.6.4 and before - worlds opened for the first time in later versions will have incorrect biome information

### Priority update setting

-   This setting determines which chunks sections are updated synchronously during a single frame.
-   The most conservative option "nearby" corresponds to the state before the update.
-   The new options "by player" and "none" significantly reduce stutters when placing or removing blocks (especially light sources), but can potentially cause rare visually noticeable delays in world updates.

### Spawner data changes

-   Spawners now support the `custom_spawn_rules` NBT in the `SpawnData` field and the `SpawnPotentials` list
-   `custom_spawn_rules` currently may contain fields `block_light_limit` and `sky_light_limit` - both are integer ranges with fields `min_inclusive` and `max_inclusive`
-   To make `SpawnPotentials` format similar to other weighted lists, structure was changed to `{weight: <int>, data: <previous contents without 'Weight', 'Entity' renamed to 'entity'>}`
-   To accomodate that change, previous contents of `SpawnData` were moved to `SpawnData.entity` (making format of that field same as elements of `SpawnPotentials.data`)

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
    

## Fixed bugs in 21w37a

-   [MC-29274](https://bugs.mojang.com/browse/MC-29274) Withers will not pursue players in survival mode unless attacked
-   [MC-30560](https://bugs.mojang.com/browse/MC-30560) River through Eroded Badlands biome generates floating rock formations at water surface
-   [MC-54545](https://bugs.mojang.com/browse/MC-54545) Client render distance doesn't adjust to server render distance if they are different, causing faulty chunk loading
-   [MC-65628](https://bugs.mojang.com/browse/MC-65628) Desert pyramids generate underground when using amplified or custom terrain
-   [MC-123277](https://bugs.mojang.com/browse/MC-123277) Too long scoreboard objectives and team names are not detected when commands are parsed
-   [MC-129266](https://bugs.mojang.com/browse/MC-129266) Jagged ocean transitions and slower biome generation
-   [MC-138801](https://bugs.mojang.com/browse/MC-138801) The interactions between a biome and another biome and its variants are inconsistent
-   [MC-140690](https://bugs.mojang.com/browse/MC-140690) Giant Spruce Taiga Hills has no difference with Giant Spruce Taiga
-   [MC-159025](https://bugs.mojang.com/browse/MC-159025) Drowned do not spawn in warm ocean biomes
-   [MC-160710](https://bugs.mojang.com/browse/MC-160710) Chat messages written while sleeping are deleted after waking up
-   [MC-166423](https://bugs.mojang.com/browse/MC-166423) Splash water bottles don't damage endermen
-   [MC-182362](https://bugs.mojang.com/browse/MC-182362) Score callbacks with a too long name break callback chain
-   [MC-202376](https://bugs.mojang.com/browse/MC-202376) Rabbits, instead of spawning on snow blocks, spawn on snow layers
-   [MC-208601](https://bugs.mojang.com/browse/MC-208601) Axolotls do not avoid danger when pathfinding
-   [MC-212113](https://bugs.mojang.com/browse/MC-212113) Glow Lichen can spawn underwater whilst not in a cave.
-   [MC-213779](https://bugs.mojang.com/browse/MC-213779) FPS drops when looking up in a tall world (4064 blocks)
-   [MC-214783](https://bugs.mojang.com/browse/MC-214783) Oceans generate with stone floors
-   [MC-214797](https://bugs.mojang.com/browse/MC-214797) Pointed dripstone can generate floating at transitions between local water levels
-   [MC-214799](https://bugs.mojang.com/browse/MC-214799) Aquifiers sometimes create air pockets
-   [MC-214864](https://bugs.mojang.com/browse/MC-214864) Hard edges when new caves generate near surface
-   [MC-214989](https://bugs.mojang.com/browse/MC-214989) Isolated floating mineshaft platform
-   [MC-215296](https://bugs.mojang.com/browse/MC-215296) Mineshafts often don't generate in floating island worlds
-   [MC-215876](https://bugs.mojang.com/browse/MC-215876) Dirt can generate below y=0 from mineshafts
-   [MC-216784](https://bugs.mojang.com/browse/MC-216784) Ruined Portals don't generate below y=0
-   [MC-216952](https://bugs.mojang.com/browse/MC-216952) Some chunks interrupting with cave systems filled with blocks
-   [MC-216967](https://bugs.mojang.com/browse/MC-216967) Kelp & Seagrass can generate in aquifers
-   [MC-217465](https://bugs.mojang.com/browse/MC-217465) Unnatural shape looking like a chunk border but appears to be completely unrelated to chunk borders
-   [MC-217509](https://bugs.mojang.com/browse/MC-217509) Inefficient generation of aquifers, noise caves and ore veins
-   [MC-219774](https://bugs.mojang.com/browse/MC-219774) Magma blocks generate everywhere underwater in 21w10a
-   [MC-219946](https://bugs.mojang.com/browse/MC-219946) Weird flat sections of terrain
-   [MC-221777](https://bugs.mojang.com/browse/MC-221777) Horses donkeys, mules, llamas, and trader llamas do not follow players holding food
-   [MC-221815](https://bugs.mojang.com/browse/MC-221815) Flat roofs in underwater caves
-   [MC-221917](https://bugs.mojang.com/browse/MC-221917) Dripstone, pointed dripstone, and cave magma generate in oceans
-   [MC-222051](https://bugs.mojang.com/browse/MC-222051) Iron Ore generation was not increased in 21w13a
-   [MC-222379](https://bugs.mojang.com/browse/MC-222379) Magma can spawn under air in underwater caves
-   [MC-223044](https://bugs.mojang.com/browse/MC-223044) Floating Water can generate in ravines
-   [MC-223051](https://bugs.mojang.com/browse/MC-223051) Dripstone can generate in surface lakes
-   [MC-223148](https://bugs.mojang.com/browse/MC-223148) Extended height message goes behind the scrolling bar
-   [MC-226184](https://bugs.mojang.com/browse/MC-226184) Axolotls pathfinding to water can sometimes fall in wide holes
-   [MC-227244](https://bugs.mojang.com/browse/MC-227244) Ore blocks from ore veins float in underwater magma ravines
-   [MC-230343](https://bugs.mojang.com/browse/MC-230343) Parity issue: enchanting tables do not emit a light level of 7
-   [MC-231721](https://bugs.mojang.com/browse/MC-231721) Dinnerbone Animals do not look at food correctly.
-   [MC-231863](https://bugs.mojang.com/browse/MC-231863) Game crashes when trying to access the realms settings

---

# Minecraft 1.17.1 Release Candidate 2

A second Release Candidate for Minecraft Java Edition 1.17.1 is now available in the launcher, fixing some critical issues. If nothing critical is found, we expect this to be released as the full version of 1.17.1 on Tuesday, July 6th.

## The Caves & Cliffs Preview

Download the [latest datapack](https://launcher.mojang.com/v1/objects/622bf0fd298e1e164ecd05d866045ed5941283cf/CavesAndCliffsPreview.zip).

---

# Minecraft 1.17.1 Release Candidate 1

A first and hopefully only Release Candidate for Minecraft: Java Edition 1.17.1 is now available in the launcher, fixing a few more crashes and bugs. If nothing critical is found, we expect this to be released as the full version of 1.17.1 on Tuesday, July 6th.

## The Caves & Cliffs Preview

Download the [latest datapack](https://launcher.mojang.com/v1/objects/622bf0fd298e1e164ecd05d866045ed5941283cf/CavesAndCliffsPreview.zip).

## Fixed bugs in 1.17.1 Release Candidate 1

-   [MC-230716](https://bugs.mojang.com/browse/MC-230716) "death.attack.dryout" and "death.attack.dryout.player" display raw translation strings (are untranslated)

---

# Minecraft 1.17.1 Pre-Release 3

A third pre-release for 1.17.1 is now available in your launcher, fixing a few more crashes and bugs.

## The Caves & Cliffs Preview

​ Download the [latest datapack](https://launcher.mojang.com/v1/objects/622bf0fd298e1e164ecd05d866045ed5941283cf/CavesAndCliffsPreview.zip). ​

## Fixed bugs in 1.17.1 Pre-release 3

​

-   [MC-222731](https://bugs.mojang.com/browse/MC-222731) Captured axolotl constantly tries to leave water
-   [MC-224894](https://bugs.mojang.com/browse/MC-224894) Light tickets are released too early
-   [MC-228802](https://bugs.mojang.com/browse/MC-228802) Chunks not loading on a server / Cannot invoke "cmq.a(int, int, int)" because "☃" is null
-   [MC-228858](https://bugs.mojang.com/browse/MC-228858) Axolotls despawning though named and on leashes.
-   [MC-229246](https://bugs.mojang.com/browse/MC-229246) Piglins and piglin brutes no longer call other piglins after attacking one of them behind walls
-   [MC-229475](https://bugs.mojang.com/browse/MC-229475) Placing a small dripleaf results in the top half of water getting deleted
-   [MC-229887](https://bugs.mojang.com/browse/MC-229887) "Unable to create a jar-filesystem" warning logged upon starting the game

---

# Minecraft 1.17.1 Pre-Release 2

The second pre-release for 1.17.1 is now available in your launcher. This pre-release fixes a few more bugs.

## The Caves & Cliffs Preview

Download the [latest datapack](https://launcher.mojang.com/v1/objects/622bf0fd298e1e164ecd05d866045ed5941283cf/CavesAndCliffsPreview.zip).

## Technical Changes in 1.17.1 Pre-release 1

-   Deaths of named mobs are now logged

## Fixed Bugs in 1.17.1 Pre-Release 2

-   [MC-219290](https://bugs.mojang.com/browse/MC-219290) Calcite is too quiet compared to other blocks
-   [MC-221656](https://bugs.mojang.com/browse/MC-221656) Creative mode obtained Bucket of Axolotl/Tropical Fish only spawns one kind axolotl/tropical fish
-   [MC-226926](https://bugs.mojang.com/browse/MC-226926) Emerald ore generates too often
-   [MC-228599](https://bugs.mojang.com/browse/MC-228599) Attempting to walk through flowing water constantly switches the player from swimming into normal mode
-   [MC-229191](https://bugs.mojang.com/browse/MC-229191) Diamond ore distribution changed between 1.16.5 and 1.17
-   [MC-229441](https://bugs.mojang.com/browse/MC-229441) You can steal the item a villager is holding for trade by killing it
-   [MC-229614](https://bugs.mojang.com/browse/MC-229614) Wandering Trader obtained tropical fish are only white kob
-   [MC-229983](https://bugs.mojang.com/browse/MC-229983) /clear command doesn't clear certain stacks after dropping items from them

---

# Minecraft 1.17.1 Pre-Release 1

Happy Friday! The first pre-release for 1.17.1 is now available for download. This pre-release introduces a few changes to some gameplay mechanics, and it also fixes a bunch of bugs.

## Changes in 1.17.1 Pre-release 1

-   Blue axolotls can now only be obtained through breeding
-   Non-screaming goats now have a rare chance to produce a screaming goat when bred
-   Status effects on goats now also apply when the goat is jumping or ramming
-   Raised the drop rate for copper ingots from Drowned to 11% + 2% per level of looting
-   Powder snow now fills cauldrons 2 times faster than before (still pretty slowly, though!)
-   Zombies, Zombie Villagers, Husks and Drowned will no longer pick up glow ink sacs

## The Caves & Cliffs Preview

Download the [latest datapack](https://launcher.mojang.com/v1/objects/622bf0fd298e1e164ecd05d866045ed5941283cf/CavesAndCliffsPreview.zip).

## Technical Changes in 1.17.1 Pre-release 1

-   In case of DNS-based redirection, the client will send the hostname actually used to connect (this restores the pre-1.17 behaviour)

## Bugs fixed in 1.17.1 Pre-release 1

-   [MC-123654](https://bugs.mojang.com/browse/MC-123654) Sun, moon, and/or clouds are not showing if render distance is below 4
-   [MC-131290](https://bugs.mojang.com/browse/MC-131290) Enchantments are saved as shorts, but are loaded as and function with integer values
-   [MC-156155](https://bugs.mojang.com/browse/MC-156155) Turkish lira sign (₺) appears as □ in the game
-   [MC-194736](https://bugs.mojang.com/browse/MC-194736) Duplicate text mapping for U+00B7
-   [MC-196999](https://bugs.mojang.com/browse/MC-196999) U+1FEC is wrong in Minecraft's font
-   [MC-213986](https://bugs.mojang.com/browse/MC-213986) Pistons and dispensers can be used to create ghost blocks using powder snow
-   [MC-219018](https://bugs.mojang.com/browse/MC-219018) Ghost items can be created using /item (server doesn't update client inventory correctly)
-   [MC-223350](https://bugs.mojang.com/browse/MC-223350) Loaded chunks sometimes don't render until the player moves their head slightly
-   [MC-225816](https://bugs.mojang.com/browse/MC-225816) Hanging Roots appear large when an item entity
-   [MC-226461](https://bugs.mojang.com/browse/MC-226461) Logs can be replaced with stone near lava pools
-   [MC-226948](https://bugs.mojang.com/browse/MC-226948) Withers are now affected by potion effects
-   [MC-227387](https://bugs.mojang.com/browse/MC-227387) World gen datapacks will likely crash or softlock the game
-   [MC-227435](https://bugs.mojang.com/browse/MC-227435) Lag when placing heads of non-existent players when on servers
-   [MC-227483](https://bugs.mojang.com/browse/MC-227483) root;;_;;system feature config's codec uses a wrong field
-   [MC-227520](https://bugs.mojang.com/browse/MC-227520) Overworld Fossils always generate at bedrock level
-   [MC-227557](https://bugs.mojang.com/browse/MC-227557) End portal texture appears stretched after world conversion
-   [MC-227618](https://bugs.mojang.com/browse/MC-227618) Small dripleaf is consumed without being placed when used on tall seagrass
-   [MC-227651](https://bugs.mojang.com/browse/MC-227651) Group for lapis lazuli ore smelting and blasting recipes is misspelled
-   [MC-227821](https://bugs.mojang.com/browse/MC-227821) Client crash when trying to create/edit realm immediately after deleting previous one
-   [MC-227891](https://bugs.mojang.com/browse/MC-227891) Ender pearls despawn when player logs out of a server
-   [MC-228219](https://bugs.mojang.com/browse/MC-228219) Thrown ender pearls disappear upon entering the exit end portal
-   [MC-228343](https://bugs.mojang.com/browse/MC-228343) java.lang.NullPointerException when random;;_;;selector default feature isn't found
-   [MC-228430](https://bugs.mojang.com/browse/MC-228430) Very long loading pause while booting the game ("Failed to add PDH Counter", caused by oshi)
-   [MC-228828](https://bugs.mojang.com/browse/MC-228828) Specifying the --server parameter when starting the game, causes the game to crash
-   [MC-229299](https://bugs.mojang.com/browse/MC-229299) Blue axolotls can spawn naturally

---

# Minecraft 1.17 Release Candidate 2

## Fixed Bugs in 1.17 Release Candidate 2

-   Fixed a few critical issues

---

# Minecraft 1.17 Release Candidate 1

We're now releasing the first (and hopefully only) release candidate for Caves & Cliffs: Part I. If there are no major issues following this release, no further changes will be done before the full release.

Happy mining!

## The Caves & Cliffs Preview

Download the [latest datapack](https://launcher.mojang.com/v1/objects/622bf0fd298e1e164ecd05d866045ed5941283cf/CavesAndCliffsPreview.zip).

## Fixed bugs in 1.17 Release Candidate 1

-   [MC-227323](https://bugs.mojang.com/browse/MC-227323) Custom player heads sometimes flash when placed on armor stands
-   Improved desync issues when exiting a boat over a high latency connection
-   Fixed crashes

---

# Minecraft 1.17 Pre-Release 5

The fifth pre-release for 1.17 is now available, fixing another round of bugs and crashes.

## The Caves & Cliffs Preview

Download the [latest datapack](https://launcher.mojang.com/v1/objects/622bf0fd298e1e164ecd05d866045ed5941283cf/CavesAndCliffsPreview.zip).

## Fixed bugs in 1.17 Pre-release 5

-   [MC-225707](https://bugs.mojang.com/browse/MC-225707) - Caves and Cliffs Datapacks Server Error
-   [MC-227065](https://bugs.mojang.com/browse/MC-227065) - Cannot Invoke "na.b(String, int)" because "â˜ƒ is null
-   [MC-227207](https://bugs.mojang.com/browse/MC-227207) - Datafixer doesn't properly update certain scoreboard objectives from 1.16 to 1.17
-   [MC-227208](https://bugs.mojang.com/browse/MC-227208) - Breaking bamboo is excessively laggy since the 1.17 pre-releases
-   [MC-227232](https://bugs.mojang.com/browse/MC-227232) - Player head SkullOwner tag with username string no longer works

---

# Minecraft 1.17 Pre-Release 4

The fourth pre-release for 1.17 is now available, and this one fixes a few additional bugs and crashes.

## Changes in 1.17 Pre-Release 4

-   Holding down control while holding down space now makes the credits scroll even faster

## The Caves & Cliffs Preview

Download the [latest datapack](https://launcher.mojang.com/v1/objects/622bf0fd298e1e164ecd05d866045ed5941283cf/CavesAndCliffsPreview.zip).

## Fixed bugs in 1.17 Pre-Release 4

-   [MC-223552](https://bugs.mojang.com/browse/MC-223552) Credits not alphabetically ordered
-   [MC-226690](https://bugs.mojang.com/browse/MC-226690) In the credits, "EXPERIS" is in all capital letters for two employees
-   [MC-226692](https://bugs.mojang.com/browse/MC-226692) In the credits, a closing parenthesis is missing for Brian Canning
-   [MC-226693](https://bugs.mojang.com/browse/MC-226693) The credits say "Wed Developers" instead of "Web Developers" in one place
-   [MC-226696](https://bugs.mojang.com/browse/MC-226696) In the credits, "TEN GUN DESIGN INC" is in all capital letters for one employee
-   [MC-226700](https://bugs.mojang.com/browse/MC-226700) Some people are listed twice in the credits
-   [MC-226702](https://bugs.mojang.com/browse/MC-226702) The usage and punctuation of "Inc." and "LLC" are inconsistent in the credits
-   [MC-226762](https://bugs.mojang.com/browse/MC-226762) Credits Text Wrapping
-   [MC-226777](https://bugs.mojang.com/browse/MC-226777) When a crossbow is loaded in the offhand, you cannot see it or shoot with it if an item is held in the main hand
-   [MC-227003](https://bugs.mojang.com/browse/MC-227003) Game crashed whilst debug profiling
-   [MC-227058](https://bugs.mojang.com/browse/MC-227058) Any hostility between animals is removed in peaceful
-   [MC-227092](https://bugs.mojang.com/browse/MC-227092) Experimental Settings confirmation prompt appears when creating any world in 1.17-pre3
-   [MC-227107](https://bugs.mojang.com/browse/MC-227107) C418 is removed from ==Composers== in credits.json

---

# Minecraft 1.17 Pre-Release 3

Time for another pre-release, this time with some final tweaks to candles and more fixes for bugs and crashes!

Note that a bug has snuck into this pre-release making the game warn about every world as if it was experimental. This will be fixed in the next pre-release.

## Changes in 1.17 Pre-release 3

-   Tweaked the textures of lit candles
-   Mobs rammed by goats will no longer retaliate
-   Axolotls and Glow Squids now only spawn in total darkness and where there's a natural stone block less than 5 blocks below the spawning space

## The Caves & Cliffs Preview

Download the [latest datapack](https://launcher.mojang.com/v1/objects/622bf0fd298e1e164ecd05d866045ed5941283cf/CavesAndCliffsPreview.zip).

## Fixed Bugs in 1.17 Pre-Release 3

-   [MC-203773](https://bugs.mojang.com/browse/MC-203773) Lightning rod is floating when held in third-person
-   [MC-215946](https://bugs.mojang.com/browse/MC-215946) Game fatally crashed while exploring chunks (IllegalStateException: Accessing PalettedContainer from multiple threads)
-   [MC-222223](https://bugs.mojang.com/browse/MC-222223) Baby axolotls despawn
-   [MC-223147](https://bugs.mojang.com/browse/MC-223147) Vines aren't rendered with /setblock
-   [MC-223227](https://bugs.mojang.com/browse/MC-223227) Floating water caves in caves under the ocean
-   [MC-224893](https://bugs.mojang.com/browse/MC-224893) Replacing Chunk Futures causes several issues
-   [MC-225077](https://bugs.mojang.com/browse/MC-225077) Vines can spread upward to non-full blocks
-   [MC-225344](https://bugs.mojang.com/browse/MC-225344) Cave generation seems to be broken at seemingly random chunk borders
-   [MC-226441](https://bugs.mojang.com/browse/MC-226441) Lit candle texture doesn't change when on cake
-   [MC-226514](https://bugs.mojang.com/browse/MC-226514) Crash trying to start a world: Error: java.lang.NullPointerException: Cannot read field "u" because "â˜ƒ" is null
-   [MC-226660](https://bugs.mojang.com/browse/MC-226660) "Double closing program" warnings upon closing the game
-   [MC-226874](https://bugs.mojang.com/browse/MC-226874) Player's owned player;;_;;head on mobs are flashing
-   [MC-226956](https://bugs.mojang.com/browse/MC-226956) Gravity blocks do not break when doEntityDrops is set to false
-   [MC-226970](https://bugs.mojang.com/browse/MC-226970) Stars are occluded by render fog
-   [MC-227018](https://bugs.mojang.com/browse/MC-227018) Changing or reloading resource packs does not reload core shaders until reloading a second time

---

