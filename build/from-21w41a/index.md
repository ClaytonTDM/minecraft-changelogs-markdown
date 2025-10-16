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
-   [MC-237950](https://bugs.mojang.com/browse/MC-237950) Cave vines can generate without tip because prioritize\_tip option is negated
-   [MC-237951](https://bugs.mojang.com/browse/MC-237951) Cave vines can generate into water
-   [MC-237962](https://bugs.mojang.com/browse/MC-237962) Entities bob their head up and down when targeting towards the player
-   [MC-238104](https://bugs.mojang.com/browse/MC-238104) Blue Orchid generation has decreased
-   [MC-238265](https://bugs.mojang.com/browse/MC-238265) version.json contains internal revision ID instead of game version ID

---

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

#### New triggers

##### `fall_from_height`

-   Triggered when a player lands after falling
-   Conditions:
    -   `player` - a player for which this trigger runs
    -   `start_position` - location predicate for last position before falling started
    -   `distance` - predicate for distance between `start_position` and player

##### `ride_entity_in_lava`

-   Triggered for every tick when player rides in lava
-   Conditions
    -   `player` - a player for which this trigger runs
    -   `start_position` - position where riding started (first tick on lava)
    -   `distance` - predicate for distance between `start_position` and player

#### Changed triggers

##### `nether_travel`

-   `entered` condition renamed to `start_position`
-   `exited` has been removed, since it was identical to `player.location`

### Loot Tables

#### New functions

##### `set_potion`

Sets `Potion` tag on any item

###### Parameters:

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

