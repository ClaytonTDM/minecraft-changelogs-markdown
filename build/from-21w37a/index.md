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

#### Custom events

-   `minecraft.ServerTickTime`: sampling event exposing average server tick times at one second intervals
-   `minecraft.ChunkGeneration`: time taken to generate individual chunk stages
-   `minecraft.PacketRead | minecraft.PacketSent`: network traffic
-   `minecraft.WorldLoadFinishedEvent`: initial world loading duration

#### Ending a profiling run

The run will then be stopped either by:

-   shutting down the JVM
-   `jfr stop` in-game command
-   `jcmd` CLI tool

#### Overview

Java Flight Recorder ([https://openjdk.java.net/jeps/328](https://openjdk.java.net/jeps/328)) is the internal JVM profiling tool bundled with the Java Runtime to analyze performance and runtime characteristics. It's a useful tool for exposing internal JVM performance metrics as well as custom metrics that can be monitored or analyzed using any stock Java profiler or monitoring agents.

#### Reports

A summary JSON report is written both to the log file and in the debug folder accompanied by a `.jfr` recording ready to be analyzed in i.e JMC [https://github.com/openjdk/jmc](https://github.com/openjdk/jmc) or any other profiler tool supporting the format.

#### Starting a profiling run

A profiling run can be started using any of the following alternatives:

-   `--jfrProfile` startup flag when starting a Minecraft server or client
-   `jfr start` in-game command
-   Regular Java CLI tools such as `jcmd`

### Loot tables

#### Changed functions

##### `set_contents`, `set_loot_table`

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

Another snapshot is now going out. This time around, we fixed quite a few bugs, and we also introduced some changes to some Caves & Cliffs features, and additionally, we added some extra context for the narrator.

## Changes in 21w20a

-   Actually made geodes rarer this time
-   GUI narration now includes position and usage of hovered or focused element
-   Tilling rooted dirt with a hoe will now convert it into dirt, and pop out a hanging roots item
-   Axolotls will now only play dead when in water
-   Llamas no longer spit at players in peaceful mode

## Changes to the Caves & Cliffs Preview

Download the [updated datapack](https://launcher.mojang.com/v1/objects/233aa01c6db99ffcf95594e384e72671ae279ced/CavesAndCliffsPreview.zip).

## Technical changes in 21w20a

-   Added a new NBT tag for entities - "HasVisualFire" - which will cause any entity with this flag to visually appear on fire, even if they are not actually on fire

## Bugs fixed in 21w20a

-   [MC-610](https://bugs.mojang.com/browse/MC-610) Grass / Flowers / Snow are placed incorrectly in newly created chunks
-   [MC-102220](https://bugs.mojang.com/browse/MC-102220) Barrier Blocks are not shown when "Show Invisible Blocks" is selected in Save Structure Blocks
-   [MC-149777](https://bugs.mojang.com/browse/MC-149777) Crash when loading world: java.util.ConcurrentModificationException when using Java 11 or above
-   [MC-172304](https://bugs.mojang.com/browse/MC-172304) Piglins, piglin brutes, hoglins, zoglins and axolotls can attack their own teammates
-   [MC-189535](https://bugs.mojang.com/browse/MC-189535) Catching a fish in a bucket on creative mode doesn't give player new bucket
-   [MC-191338](https://bugs.mojang.com/browse/MC-191338) Name color for Minecart with Command Block is incorrect
-   [MC-192591](https://bugs.mojang.com/browse/MC-192591) Name color for Structure Void is incorrect
-   [MC-198200](https://bugs.mojang.com/browse/MC-198200) Crash when leaving out processors in a template pool: java.lang.IllegalArgumentException: bound must be positive
-   [MC-203712](https://bugs.mojang.com/browse/MC-203712) Amethyst Geodes cause floating water/lava to generate when intersecting water/lava caves/pools
-   [MC-203867](https://bugs.mojang.com/browse/MC-203867) Amethyst geodes can overwrite bedrock
-   [MC-204393](https://bugs.mojang.com/browse/MC-204393) Lava Cauldron emits redstone signal strength 1 instead of 3
-   [MC-204902](https://bugs.mojang.com/browse/MC-204902) Dirt paths are no longer compatible with the programmer art resource pack
-   [MC-205104](https://bugs.mojang.com/browse/MC-205104) Rideable mobs are not affected by powder snow's freezing effect while being ridden
-   [MC-205120](https://bugs.mojang.com/browse/MC-205120) Freezing hearts aren't displayed properly in Programmer Art resource pack
-   [MC-205250](https://bugs.mojang.com/browse/MC-205250) Amethyst geodes can generate in a stronghold and can potentially destroy the end portal frames
-   [MC-205680](https://bugs.mojang.com/browse/MC-205680) minecraft:location\_check predicate floating point imprecision
-   [MC-206107](https://bugs.mojang.com/browse/MC-206107) Parrots sitting on shoulders do not freeze in powder snow
-   [MC-206131](https://bugs.mojang.com/browse/MC-206131) Amethyst blocks are transparent / don't conduct Redstone
-   [MC-206601](https://bugs.mojang.com/browse/MC-206601) Potion particles are showing when looking through spyglass
-   [MC-206839](https://bugs.mojang.com/browse/MC-206839) Pointed dripstones cause extreme durability damage to helmets
-   [MC-207324](https://bugs.mojang.com/browse/MC-207324) Mobs and particles sometimes don't fully render behind stained or tinted glass
-   [MC-207366](https://bugs.mojang.com/browse/MC-207366) Trying to modify the world height of a world after it's already been generated gives a null pointer exception
-   [MC-208586](https://bugs.mojang.com/browse/MC-208586) Axolotls get stuck and spin constantly on top of lily pads
-   [MC-208589](https://bugs.mojang.com/browse/MC-208589) Axolotls have a swimming animation (move their body up- and downwards) when on land
-   [MC-208601](https://bugs.mojang.com/browse/MC-208601) Axolotls do not avoid lava when pathfinding
-   [MC-208617](https://bugs.mojang.com/browse/MC-208617) Axolotls sometimes twitch rapidly when adjusting their rotation
-   [MC-208641](https://bugs.mojang.com/browse/MC-208641) Axolotl movement glitch on stairs
-   [MC-208649](https://bugs.mojang.com/browse/MC-208649) Breeding axolotl with a bucket of tropical gives back a bucket instead of a water bucket
-   [MC-208654](https://bugs.mojang.com/browse/MC-208654) Collecting an axolotl with a water bucket in creative mode replaces the original bucket
-   [MC-208675](https://bugs.mojang.com/browse/MC-208675) Axolotls sometimes use walking animation when in shallow water
-   [MC-208682](https://bugs.mojang.com/browse/MC-208682) Axolotls frequently get stuck inside of waterlogged blocks
-   [MC-208691](https://bugs.mojang.com/browse/MC-208691) Axolotls play dead even when they take damage without being attacked by an entity
-   [MC-208735](https://bugs.mojang.com/browse/MC-208735) Axolotls attempt to pathfind towards unreachable water, then start spinning, eventually drying out and dying
-   [MC-209324](https://bugs.mojang.com/browse/MC-209324) Pointed Dripstone can be broken with tridents in spawn protection
-   [MC-212125](https://bugs.mojang.com/browse/MC-212125) Only one glow lichen drops when using shears on multiple in a single block space
-   [MC-212531](https://bugs.mojang.com/browse/MC-212531) Shulkers can rotate their heads up and down
-   [MC-212931](https://bugs.mojang.com/browse/MC-212931) Fire extinguishing sound doesn't play when mobs are extinguished with rain/water
-   [MC-214041](https://bugs.mojang.com/browse/MC-214041) Mob can't properly or difficult walk on big dripleaf, when the big dripleaf is 4 blocks or more from the ground
-   [MC-214909](https://bugs.mojang.com/browse/MC-214909) Top half of a small dripleaf can turn into a ghost block when placing it in water while the water is being removed
-   [MC-215665](https://bugs.mojang.com/browse/MC-215665) Amethyst Geodes can overlap with dungeons
-   [MC-216214](https://bugs.mojang.com/browse/MC-216214) netherrack\_replace\_blobs with water as target crashes the game
-   [MC-216980](https://bugs.mojang.com/browse/MC-216980) Comma splices in two source strings (EN\_US)
-   [MC-217113](https://bugs.mojang.com/browse/MC-217113) Foxes spawned inside of powder snow sleeps
-   [MC-217608](https://bugs.mojang.com/browse/MC-217608) The big dripleaf texture is not vertically centered
-   [MC-217742](https://bugs.mojang.com/browse/MC-217742) Campfires and TNT can be lit by players using arrows shot from flame bows in spawn protection
-   [MC-219856](https://bugs.mojang.com/browse/MC-219856) F3 + L isn't sorted alphabetically in the debug screen
-   [MC-219870](https://bugs.mojang.com/browse/MC-219870) The Mojang loading screen upon start up flashes black
-   [MC-220063](https://bugs.mojang.com/browse/MC-220063) Sweet berries and glow berries sound events are named extremely differently
-   [MC-220128](https://bugs.mojang.com/browse/MC-220128) Parity Issue: Rooted dirt won't turn into the dirt and drop roots item after tilling with hoe in Java
-   [MC-220694](https://bugs.mojang.com/browse/MC-220694) Name color for knowledge book is incorrect
-   [MC-220867](https://bugs.mojang.com/browse/MC-220867) Fossils can generate through bedrock
-   [MC-221566](https://bugs.mojang.com/browse/MC-221566) Name color for light is incorrect
-   [MC-221694](https://bugs.mojang.com/browse/MC-221694) Strays do not spawn in powder snow
-   [MC-221833](https://bugs.mojang.com/browse/MC-221833) Light blocks are not shown within structure block bounds with Show Invisible Blocks on
-   [MC-221863](https://bugs.mojang.com/browse/MC-221863) Powder Snow can be broken by players on fire in spawn protection
-   [MC-221984](https://bugs.mojang.com/browse/MC-221984) Collecting an axolotl in a bucket and then placing it resets its kill cooldown
-   [MC-222002](https://bugs.mojang.com/browse/MC-222002) Light item displays the wrong level number
-   [MC-222116](https://bugs.mojang.com/browse/MC-222116) Splash water bottles doesn't extinguish candle cakes
-   [MC-222797](https://bugs.mojang.com/browse/MC-222797) Axolotl can be bred with just tropical fish items, not just bucket ones
-   [MC-223322](https://bugs.mojang.com/browse/MC-223322) Chorus flowers can be broken with projectiles in spawn protection
-   [MC-223372](https://bugs.mojang.com/browse/MC-223372) You can decrease the level of a water or powder snow cauldron, through the use of an entity on fire in spawn protection
-   [MC-224320](https://bugs.mojang.com/browse/MC-224320) minecraft.used:minecraft.potion doesn't increase when filling a partially filled cauldron with a water bottle
-   [MC-224322](https://bugs.mojang.com/browse/MC-224322) Powder snow can create ghost blocks in creative mode
-   [MC-224480](https://bugs.mojang.com/browse/MC-224480) Powder snow doesn't melt into water in cauldrons
-   [MC-224482](https://bugs.mojang.com/browse/MC-224482) Superflat presets no longer generate with decorations
-   [MC-225078](https://bugs.mojang.com/browse/MC-225078) Upgrading from 1.12.2 and below will cause items to lose enchantments
-   [MC-225253](https://bugs.mojang.com/browse/MC-225253) Dying in a nether portal softlocks the player on the "You Died!" menu
-   [MC-225347](https://bugs.mojang.com/browse/MC-225347) cave\_vines\_plant isn't in #bee\_growables
-   [MC-225352](https://bugs.mojang.com/browse/MC-225352) Geodes have not been made "significantly rarer"
-   [MC-225360](https://bugs.mojang.com/browse/MC-225360) Cannot resolve SRV records: unknown host

---

Now with twice as much Java version.

Starting with this snapshot, Candles, Bundles, and Sculk Sensors are only accessible through commands. We do not feel that they are at the quality we want for Part 1 of the Caves & Cliffs release. To keep trying these features out in survival mode, use the Preview data pack!

## Changes in 21w19a

-   The maximum length of item names in the anvil UI has been increased from 35 to 50
-   Made geodes significantly rarer
-   Unfinished items (Sculk Sensor, Bundle and Candles) have been removed from the creative inventory
-   Recipes for unfinished items (Bundle, Candles) have been removed

## Changes to the Caves & Cliffs Preview

Download the [updated datapack](https://launcher.mojang.com/v1/objects/a6b56d6f14869646eb8d399e99a0149bdd954490/CavesAndCliffsPreview.zip).

-   The pack now includes recipes related to bundles and candles

## Technical changes in 21w19a

-   Upgraded to Java 16
-   Added `mineable/axe`, `mineable/hoe`, `mineable/pickaxe` and `mineable/shovel` block tags. Blocks with these tags can be destroyed more quickly with the matching tool.
-   Added `needs_stone_tool`, `needs_iron_tool` and `needs_diamond_tool` block tags. If a block requires the correct tool to drop, these tags determine which tier of that tool is required.
-   Changed the syntax of the `/item` command

### Java 16

Minecraft now uses a more recent version of Java. If you are using a default setup the Launcher will download and install the correct version. If you are using a custom Java setup or a third-party launcher, you will need to ensure that your Java installation is version 16 or above.

### Item command

New syntax:

-   `/item replace <target> with <item stack> [<count>]` - same as old `replaceitem`
-   `/item replace <target> from <source> [<modifier>]` - copies item for source to target(s), optionally applying modifier
-   `/item modify <target> <modifier>` - modifies item (without copying)

For example, `/item replace block ~ ~ ~ container.0 from entity @s enderchest.0` will copy first item from player's enderchest to first slot of container player is currently standing on.

## Bugs fixed in 21w19a

-   [MC-105080](https://bugs.mojang.com/browse/MC-105080) Ender Dragon is respawned if all Exit End Portal blocks are removed / legacy scanning is done for worlds with new dragon fight
-   [MC-136647](https://bugs.mojang.com/browse/MC-136647) Leads don't work with Squids
-   [MC-200009](https://bugs.mojang.com/browse/MC-200009) Crash when using a non-mushroom block in a huge mushroom feature's cap
-   [MC-203606](https://bugs.mojang.com/browse/MC-203606) "X Candle Cake" should be "Cake with X Candle"
-   [MC-203718](https://bugs.mojang.com/browse/MC-203718) Lightning rod stays activated when struck by lighting at the same time as being moved by a piston
-   [MC-203757](https://bugs.mojang.com/browse/MC-203757) Anvil character limit is too low for items with long names
-   [MC-204244](https://bugs.mojang.com/browse/MC-204244) Sheep are rendered like white sheared sheep through tinted glass blocks
-   [MC-205626](https://bugs.mojang.com/browse/MC-205626) The command syntax order of /item is inconsistent
-   [MC-208663](https://bugs.mojang.com/browse/MC-208663) Pufferfish don't defend themselves from axolotls
-   [MC-208740](https://bugs.mojang.com/browse/MC-208740) Withers attack axolotls that are playing dead
-   [MC-209533](https://bugs.mojang.com/browse/MC-209533) Amethyst shard is not grouped with other gemstones in the Creative inventory
-   [MC-212206](https://bugs.mojang.com/browse/MC-212206) Shulkers generating outside the world border bug out when trying to spawn
-   [MC-213774](https://bugs.mojang.com/browse/MC-213774) Hanging roots float in your hand
-   [MC-213922](https://bugs.mojang.com/browse/MC-213922) Shulkers are not spawned in the correct place
-   [MC-213943](https://bugs.mojang.com/browse/MC-213943) Flying slightly above a big dripleaf can cause it to tilt without touching it
-   [MC-214127](https://bugs.mojang.com/browse/MC-214127) Despite being a type of berry plant, bees don't pollinate cave vines
-   [MC-214220](https://bugs.mojang.com/browse/MC-214220) Items in water streams don't fall from big dripleaves, but constantly try
-   [MC-214283](https://bugs.mojang.com/browse/MC-214283) Hanging roots break sound event uses break3 twice, excluding break4
-   [MC-217626](https://bugs.mojang.com/browse/MC-217626) Spore blossom is positioned rather strangely among flowers in Creative
-   [MC-219445](https://bugs.mojang.com/browse/MC-219445) Bonemealing big dripleaf in flowing water doesn't update the water
-   [MC-219873](https://bugs.mojang.com/browse/MC-219873) Lightning Bolt detecting lightning rod incorrectly
-   [MC-220106](https://bugs.mojang.com/browse/MC-220106) Lightning hitting an entity on copper slabs on top another copper block fully cleans the bottom block first
-   [MC-220215](https://bugs.mojang.com/browse/MC-220215) Opening a shulker box while an entity is standing on top of it pushes it too high for a short amount of time
-   [MC-221309](https://bugs.mojang.com/browse/MC-221309) Experience orbs produce particles whilst moving through powder snow
-   [MC-221756](https://bugs.mojang.com/browse/MC-221756) Snow particles do not render at all when the block light level is 7 or more
-   [MC-221844](https://bugs.mojang.com/browse/MC-221844) Powder snow doesn’t produce particles when broken by burning mobs
-   [MC-221957](https://bugs.mojang.com/browse/MC-221957) Pick Block used on a level 15 light block returns a different item from the default light block
-   [MC-222738](https://bugs.mojang.com/browse/MC-222738) Leads don't work with Glow Squids
-   [MC-222882](https://bugs.mojang.com/browse/MC-222882) Spyglass in Search tab of creative inventory is mixed with block types instead of tools where it belongs
-   [MC-223132](https://bugs.mojang.com/browse/MC-223132) Powder snow doesn't produce a breaking sound or subtitle, when destroyed through extinguishing a burning player, mob, or flame arrow
-   [MC-223171](https://bugs.mojang.com/browse/MC-223171) Budding Amethyst and Copper variants are far away in the creative inventory
-   [MC-223227](https://bugs.mojang.com/browse/MC-223227) Floating water caves in caves under the ocean
-   [MC-223446](https://bugs.mojang.com/browse/MC-223446) Shulkers appear in the wrong place when riding an entity
-   [MC-223820](https://bugs.mojang.com/browse/MC-223820) Azalea & Flowering Azalea aren't part of the block or item tags for #saplings
-   [MC-223907](https://bugs.mojang.com/browse/MC-223907) Moss block appears in the #lush\_ground\_replaceable.json twice
-   [MC-224322](https://bugs.mojang.com/browse/MC-224322) Powder snow can create ghost blocks in creative mode
-   [MC-224325](https://bugs.mojang.com/browse/MC-224325) minecraft.used:minecraft.COMPOSTABLE\_ITEM doesn't increase when placing an item into a composter
-   [MC-224388](https://bugs.mojang.com/browse/MC-224388) Ores and raw materials in smelting preview are off center
-   [MC-224389](https://bugs.mojang.com/browse/MC-224389) Copper Ingots are no longer grouped in the crafting table
-   [MC-224927](https://bugs.mojang.com/browse/MC-224927) Infested blocks take twice as long instead of half the time
-   [MC-224972](https://bugs.mojang.com/browse/MC-224972) Infested blocks have no effective tool
-   [MC-225025](https://bugs.mojang.com/browse/MC-225025) Server side performance drop with dragon's breath area effect clouds

---

Hey-hoo! Will you look at that! It's Wednesday once again, which means we get to share updates about all the Minecraft bits and bobs. This week, we're distributing an ore distribution Snapshot for all you lovely Snapshot connoisseurs to feast upon. Enjoy!

## Changes in 21w18a

-   Infested Blocks are no longer instantly destroyed, and instead have half the destroy time of their non-infested counterpart.
-   Screaming goats will use their ram attack more often than other goats will

## Changes to the Caves & Cliffs Preview

Download the [updated datapack](https://launcher.mojang.com/v1/objects/6b510a715701aec5e601c7966d87922a300e0c73/CavesAndCliffsPreview.zip).

![Minecraft Snapshot 21w18a Ore Distribution](https://launchercontent.mojang.com/images/snapshot-21w18a-ores-distribution-cropped.png) Ore distribution in snapshot 21w18a. [Click here](https://launchercontent.mojang.com/v2/images/snapshot21w18aoresdistributionfull.jpg) for a link to the full resolution image.

-   Reduced copper spawning a bit, to compensate for large ore veins
-   Large ore veins are slightly more rare and slightly smaller on average. But the size varies a lot so you can still find huge ones.
-   Increased chance of finding raw ore blocks in ore veins
-   Cave carvers generate below y 0 in ocean biomes (they didn't before, it was an accident)
-   Increased the minimum size of noodle caves and carvers, to make them easier to traverse and less likely to break up into fragments.
-   Noodle caves no longer generate above y 30, so the surface should be less riddled with holes.
-   Removed deepslate blobs above y 0
-   Extended the vertical range of the smaller blobs of iron ore, to make it possible to find iron in caves near the surface.
-   Slightly reduced the amount of normal-sized iron blobs, to compensate for large ore veins and the increased range of smaller blobs.

## Bugs fixed in 21w18a

-   [MC-3587](https://bugs.mojang.com/browse/MC-3587) Last use of an anvil causes player to drop their item
-   [MC-87935](https://bugs.mojang.com/browse/MC-87935) When closing the inventory while holding an item with the cursor in Creative mode, the item disappears
-   [MC-125033](https://bugs.mojang.com/browse/MC-125033) Old cave and ravine generation gets cut off unnaturally on chunk borders near water
-   [MC-162953](https://bugs.mojang.com/browse/MC-162953) NativeImage bounds checks are incorrect
-   [MC-197616](https://bugs.mojang.com/browse/MC-197616) Certain custom biome settings cause game to spam "Received invalid biome id: -1" in the console, causing major lag or freeze
-   [MC-204707](https://bugs.mojang.com/browse/MC-204707) Adventure mode players can extinguish candles
-   [MC-204969](https://bugs.mojang.com/browse/MC-204969) No "Burning" sound for items burning in lava cauldron
-   [MC-205797](https://bugs.mojang.com/browse/MC-205797) Zoglins attack Marker armor stands and Invisible armor stands
-   [MC-206560](https://bugs.mojang.com/browse/MC-206560) Pufferfish react to Marker armor stands and Invisible armor stands
-   [MC-208430](https://bugs.mojang.com/browse/MC-208430) Minecraft crashes when loading resource pack due to "tessellating block model"
-   [MC-208679](https://bugs.mojang.com/browse/MC-208679) Axolotl inconsistently doesn't show its mouth in-game
-   [MC-211064](https://bugs.mojang.com/browse/MC-211064) Loading in a TrueTypeFont with an out-of-bounds size crashes the game
-   [MC-214159](https://bugs.mojang.com/browse/MC-214159) Small Dripleaf sometimes shrink into smaller (1 block tall) Big Dripleaf when using bone meal
-   [MC-214427](https://bugs.mojang.com/browse/MC-214427) Spore Blossoms can be used to breathe underwater / cannot be waterlogged
-   [MC-214793](https://bugs.mojang.com/browse/MC-214793) Some strips of chunks generate completely dark
-   [MC-214808](https://bugs.mojang.com/browse/MC-214808) World occasionally fails to load correctly
-   [MC-214860](https://bugs.mojang.com/browse/MC-214860) Some chunks in a line are lit up constantly
-   [MC-214898](https://bugs.mojang.com/browse/MC-214898) Extreme world generation lag
-   [MC-215867](https://bugs.mojang.com/browse/MC-215867) Crash: java.lang.IllegalStateException: Chunk not there when requested
-   [MC-215946](https://bugs.mojang.com/browse/MC-215946) Game fatally crashed while exploring chunks (IllegalStateException: Accessing PalettedContainer from multiple threads)
-   [MC-216148](https://bugs.mojang.com/browse/MC-216148) Some chunks occasionally don't save properly, resetting progress
-   [MC-221647](https://bugs.mojang.com/browse/MC-221647) Goat Babies Don't Follow Parents
-   [MC-221725](https://bugs.mojang.com/browse/MC-221725) Legs of goats move differently
-   [MC-221727](https://bugs.mojang.com/browse/MC-221727) Goat eye height is outside of its hitbox while airborne
-   [MC-221840](https://bugs.mojang.com/browse/MC-221840) Goats can still do high jumps normally when on honey blocks
-   [MC-222151](https://bugs.mojang.com/browse/MC-222151) Goat head animation is weird when it rides a boat
-   [MC-222157](https://bugs.mojang.com/browse/MC-222157) Eye position of the goat is too high in some cases, causing suffocation
-   [MC-222458](https://bugs.mojang.com/browse/MC-222458) UVs on the goat's ears aren't mirrored as they should be
-   [MC-223141](https://bugs.mojang.com/browse/MC-223141) Piglins aren't attracted to a Block of Raw Gold
-   [MC-223145](https://bugs.mojang.com/browse/MC-223145) Piglins aren't angered when mining a Block of Raw Gold
-   [MC-223150](https://bugs.mojang.com/browse/MC-223150) Goats ram Marker armor stands & Invisible armor stands
-   [MC-223178](https://bugs.mojang.com/browse/MC-223178) Deepslate Tile Stairs come before Deepslate Brick Stairs in the creative inventory
-   [MC-223203](https://bugs.mojang.com/browse/MC-223203) Deepslate ore map colors are inconsistent with deepslate
-   [MC-223239](https://bugs.mojang.com/browse/MC-223239) Ramming sound that comes from a baby goat does not change pitch
-   [MC-223422](https://bugs.mojang.com/browse/MC-223422) When removing water from base of Small Dripleaf, the block stands without water untill a block update
-   [MC-224401](https://bugs.mojang.com/browse/MC-224401) Mob death does not show death particles
-   [MC-224428](https://bugs.mojang.com/browse/MC-224428) Raw ore blocks can generate as floating blocks in ore veins

---

