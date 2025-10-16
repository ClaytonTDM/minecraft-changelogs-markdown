# Minecraft Snapshot 21w42a

It's time for a musical snapshot! We're now introducing new music for Caves & Cliffs: Part II. This time around we have a bunch of new tracks composed by the talented Lena Raine and Kumi Tanioka. These tracks are also available on [Spotify](https://open.spotify.com/album/7yQIrNTf3pBu0FdyAJqTqb?si=CC31NZyIQrOl-MNVCNYYkQ) for you to listen to, and they will soon be available on other services such as Apple Music and YouTube as well.

This snapshot also includes a few additional tweaks, bug fixes, and performance improvements.

**We still highly recommend backing up your world before loading it in this snapshot.**

## New Features in 21w42a

-   New music has been added to the game
-   Added world autosave indicator for single-player worlds

### Music

-   Added new music by Lena Raine and Kumi Tanioka to the Overworld (when playing in survival mode) and the main menu
-   Added a new music disc from Lena Raine titled 'otherside'. This can be found rarely in Stronghold corridor chests or much more rarely in Dungeon chests.

## Changes in 21w42a

-   World spawn selection algorithm has been reworked, now spawns player according to climate parameters
-   World generation tweaks

### World Generation

-   Lava springs can generate in mountains and snowy terrain
-   Water springs don't generate higher than y 192, and are slightly less common
-   Badlands gold generates higher up

## Technical Changes in 21w42a

-   Replaced `light` and `barrier` particles with `block_marker`

### Particles

**`block_marker`**

-   Renders with texture declared in `particle` slot for model assigned to configured block state
-   Summoned with same syntax as `block` particle (i.e. `block_marker wheat[age=2]`)

## Bugs fixed in 21w42a

-   [MC-129912](https://bugs.mojang.com/browse/MC-129912) Player no longer spawned at highest level at world spawn
-   [MC-132347](https://bugs.mojang.com/browse/MC-132347) Spawning inside icebergs
-   [MC-214288](https://bugs.mojang.com/browse/MC-214288) Player does not spawn on the surface of the world when min;;_;;y is greater than 0
-   [MC-233771](https://bugs.mojang.com/browse/MC-233771) Parity issue: Light blocks do not display their light level when shown via a held light block item
-   [MC-236837](https://bugs.mojang.com/browse/MC-236837) The player can occasionally spawn underground when loading into a new world
-   [MC-238582](https://bugs.mojang.com/browse/MC-238582) Beaches generate between desert and ocean
-   [MC-238900](https://bugs.mojang.com/browse/MC-238900) Values of 'Infinity' in noise settings in default worldgen

---

# Minecraft Snapshot 21w41a

Have a random snapshot! In this snapshot, we've replaced the random number generator used for world generation, which makes more seeds come out as different... but it also moves everything around in the world, so expect all worlds to look different in this snapshot.

Another thing that we've replaced is the cubemap - the spinning image that you see behind the main menu. It's pretty sweet!

Also, in case you missed it, we're having our [annual Minecraft Live event](https://www.minecraft.net/live) this Saturday. Make sure to check that out!

**We still highly recommend backing up your world before loading it in this snapshot.**

## Changes in 21w41a

-   The main menu backdrop now shows a Caves & Cliffs: Part II scene
-   Badlands mineshafts generate higher up
-   Geodes now only generate up to height 30 and their rarity has been adjusted to match 1.17 levels
-   The angle at which sprinting against a block does not break your sprint has been increased a bit

## Technical Changes in 21w41a

-   Changed the prioritization order of the chunk rendering pipeline
    -   Unrendered chunk holes in the world should not appear anymore while flying fast with high render distance
-   Server classes are now signed
-   New random number generator for Overworld generation

## Fixed bugs in 21w41a

-   [MC-118134](https://bugs.mojang.com/browse/MC-118134) Item frame texture as an item uses texture of oak planks
-   [MC-137950](https://bugs.mojang.com/browse/MC-137950) Signs textures does not correspond to the actual texture of their handle
-   [MC-142385](https://bugs.mojang.com/browse/MC-142385) Campfire texture has one pixel extending into hotbar outline
-   [MC-148182](https://bugs.mojang.com/browse/MC-148182) The zombie villager "profession" texture uses villager-skin-colored pixels
-   [MC-152506](https://bugs.mojang.com/browse/MC-152506) Wither skull projectile has faces with old texture
-   [MC-160256](https://bugs.mojang.com/browse/MC-160256) Texture of door items does not match the blocks
-   [MC-166508](https://bugs.mojang.com/browse/MC-166508) Glitchy chunk rendering since 1.15 pre-release 2
-   [MC-173339](https://bugs.mojang.com/browse/MC-173339) Comparators lit base texture is incorrect
-   [MC-203155](https://bugs.mojang.com/browse/MC-203155) Enchanting table GUI uses old lapis texture
-   [MC-225949](https://bugs.mojang.com/browse/MC-225949) Parity Issue: different Bedrock and Java sign items textures.
-   [MC-227398](https://bugs.mojang.com/browse/MC-227398) Misplaced pixel on cave vines texture
-   [MC-230302](https://bugs.mojang.com/browse/MC-230302) Glow Item Frame item texture is missing two pixels
-   [MC-236620](https://bugs.mojang.com/browse/MC-236620) Nether biomes don't generate correctly
-   [MC-236650](https://bugs.mojang.com/browse/MC-236650) Minecraft in 1.18 has 2^48 seeds instead of 2^64 seeds.
-   [MC-237330](https://bugs.mojang.com/browse/MC-237330) Worlds created with seed "REDApRES" (0) crash when trying to load new 1.18 mountain biomes / java.lang.NullPointerException: Cannot invoke "dfw.a(double, double, double)" because "this.a" is null
-   [MC-237457](https://bugs.mojang.com/browse/MC-237457) Snowy Slopes biome no longer generates stone cliff feature from experimental snapshots
-   [MC-238003](https://bugs.mojang.com/browse/MC-238003) Stone in jagged peaks is always covered by snow blocks
-   [MC-238561](https://bugs.mojang.com/browse/MC-238561) Axolotls aren't able to spawn at all in lush caves (recurrence of MC-218701)
-   [MC-238661](https://bugs.mojang.com/browse/MC-238661) InhabitedTime value/Local Difficulty doesn't increase

---

# Minecraft Snapshot 21w40a

Badabee badablurb.

**We still highly recommend backing up your world before loading it in this snapshot.**

## Changes in 21w40a

-   World generation tweaks
-   Changes to mob spawning
-   Copper Ore now drops 2-5 (from 2-3) Raw Copper items
-   In the Stonecutter, a Block of Copper can be converted to four Cut Copper
-   A bunch of biome variant with similar features but different shapes have been merged into one, since the shape is controlled independently now
-   Renamed some biomes

### World Generation

-   Updated ore distribution to make branch mining deep down more rewarding. [Updated ore distribution chart](TODO)
    -   For example, added more unexposed diamonds
    -   Iron ore now generates above 80, with more iron ore as you go higher
    -   Extra gold generates below height -48
-   Non-cave biomes no longer change with height - so no more savannas in the sky and things like that
-   Tweaked the relative size of some biomes to match 1.17 a bit closer.
-   Increased the average size of most biomes (this also means biomes aren't in the same places as before)
-   Fixed some aquifer issues (a side effect of this is that aquifers are in different places now compared to last snapshot)
-   Slightly increased the frequency of underwater magma
-   Increased the amount of dungeons, especially below height 0
-   Gravel now generates below height 0
-   Villages are slightly more spread out
-   Removed water lake features, Aquifers provide local water levels

### Mob Spawns

-   Axolotls now only spawn in water, above clay blocks, in lush caves
-   Glowsquids now only spawn in water blocks, under height 30
-   Cod, Salmon, Pufferfish, Tropical Fish, Squid and Dolphins now only spawn in water from height 50 to height 64
-   Tropical Fish now also spawn in lush caves at any height
-   Zombies once again spawn in dripstone caves - drowned can also spawn there however
-   Goats no longer spawn in stony peaks

## Technical Changes in 21w40a

-   Optimized AI for Axolotls, Goats, Hoglins, Zoglins, Piglins, Piglin Brutes and Villagers
-   Bedrock layers generate dependent on the world seed now

## Fixed bugs in 21w40a

-   [MC-132306](https://bugs.mojang.com/browse/MC-132306) Snowy grass without snow near lakes in snowy biome
-   [MC-169523](https://bugs.mojang.com/browse/MC-169523) As of 18w06a, the sand, clay and gravel blocks no longer generate around small lakes
-   [MC-197688](https://bugs.mojang.com/browse/MC-197688) Mountain Edge never generates
-   [MC-217906](https://bugs.mojang.com/browse/MC-217906) Large amounts of axolotls cause performance issues
-   [MC-225842](https://bugs.mojang.com/browse/MC-225842) Flowers can generate on large plants near lakes
-   [MC-225858](https://bugs.mojang.com/browse/MC-225858) Seeds and flowers appear in ponds
-   [MC-227064](https://bugs.mojang.com/browse/MC-227064) Floating grass can still generate above water lakes
-   [MC-229365](https://bugs.mojang.com/browse/MC-229365) Large amounts of goats causes performance issues
-   [MC-236617](https://bugs.mojang.com/browse/MC-236617) Mountains & Gravelly Mountains use their 1.17.1 biome ID name
-   [MC-236632](https://bugs.mojang.com/browse/MC-236632) Banners without patterns do not render properly
-   [MC-236663](https://bugs.mojang.com/browse/MC-236663) Command blocks do not display command in their UI
-   [MC-236736](https://bugs.mojang.com/browse/MC-236736) No relief on treasure map or explorer maps
-   [MC-236896](https://bugs.mojang.com/browse/MC-236896) Strange mini broken aquifer walls generating commonly on the surface
-   [MC-237490](https://bugs.mojang.com/browse/MC-237490) The bottom parts of aquifers aren't always surrounded by blocks which can occasionally cause them to spill into caves in ways that appear bizarre
-   [MC-237666](https://bugs.mojang.com/browse/MC-237666) Unused biomes still present in game files
-   [MC-237925](https://bugs.mojang.com/browse/MC-237925) Opening world from 1.12.2 (or older) in latest snapshot regenerates random chunks
-   [MC-237933](https://bugs.mojang.com/browse/MC-237933) Sweet Berries generate much too often
-   [MC-237950](https://bugs.mojang.com/browse/MC-237950) Cave vines can generate without tip because prioritize;;_;;tip option is negated
-   [MC-237951](https://bugs.mojang.com/browse/MC-237951) Cave vines can generate into water
-   [MC-237962](https://bugs.mojang.com/browse/MC-237962) Entities bob their head up and down when targeting towards the player
-   [MC-238104](https://bugs.mojang.com/browse/MC-238104) Blue Orchid generation has decreased
-   [MC-238265](https://bugs.mojang.com/browse/MC-238265) version.json contains internal revision ID instead of game version ID

---

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

