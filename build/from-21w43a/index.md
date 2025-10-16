# Minecraft Snapshot 21w43a

Here's a snapshot from the blender! In this snapshot, world generation around the edges of an old world will now be adjusted for a smoother transition! This is the first iteration of this system which we expect to keep improving. Keep in mind that if you try it out now, the result will be saved to your world forever - which, as we know, is quite a long time. Better be safe than sorry. Make a backup before you try it!

Also - the space underneath existing chunks is now filled in, but only with deepslate. We will later be adding full cave generation in this place, so if you want that in your world, make a backup before you try it!

Due to some updates to terrain generation in this snapshot, seeds have shuffled once again so worlds will not look like they did in the previous snapshot. We expect world seeds to be stable after this snapshot.

Oh yeah, did we mention that it's a good idea to make a backup?

## New Features in 21w43a

-   The edge between old and new world generation is now adjusted when you upgrade a world

### Upgrading of old worlds

-   When generating close to old chunks hew terrain is adjusted to better match the existing terrain at the borders
-   In old chunks, if there is Bedrock at y=0, the column below will be filled with Deepslate
    -   Worlds upgraded in this snapshot will permanently have this deepslate, so if you want new caves under height 0 later, make sure to keep a backup before upgrading
-   The old Bedrock between y=0 and y=4 in old chunks gets replaced with Deepslate
-   A new Bedrock layer is placed at y=-64

## Changes in 21w43a

-   The Priority Updates video setting has been renamed to Chunk Builder
-   Reduced the amount of flooded caves near river and ocean coastlines
-   Aquifer water levels change less often, so you'll more often have larger areas with the same water level. This means slightly fewer underground waterfalls and slightly easier underground boat travel
-   Lava aquifers are slightly less common
-   Restricted Big Dripleaf placement to Clay, Grass, Dirt, Farmland, Moss, Rooted Dirt, Podzol and Mycelium

## Technical Changes in 21w43a

-   Some internal details of block and fluid ticking have been changed to improve save times. While it should behave exactly as it was, it might be a good time to test your redstone contraptions (on a copy of a world or with a backup, of course)
-   The Chunk format has been updated

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
-   Added `yPos` the minimum section y position in the chunk
-   Added `below_zero_retrogen` containing data to support below zero generation
-   Added `blending_data` containing data to support blending new world generation with existing chunks

## Fixed bugs in 21w43a

-   [MC-131930](https://bugs.mojang.com/browse/MC-131930) Deep warm ocean generates without coral and sea pickles
-   [MC-156616](https://bugs.mojang.com/browse/MC-156616) Badlands layers not generating properly
-   [MC-217379](https://bugs.mojang.com/browse/MC-217379) Pufferfish don't spawn in deep warm ocean
-   [MC-236624](https://bugs.mojang.com/browse/MC-236624) Deep Warm Oceans don't count towards the "Adventuring Time" advancement
-   [MC-236970](https://bugs.mojang.com/browse/MC-236970) Badlands strata is covered by orange terracotta at Y=160 and above
-   [MC-238073](https://bugs.mojang.com/browse/MC-238073) Decorators are independent of world seed
-   [MC-238939](https://bugs.mojang.com/browse/MC-238939) Stone can generate in the Nether
-   [MC-239397](https://bugs.mojang.com/browse/MC-239397) Lava pockets generate in icebergs

---

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

#### `block_marker`

-   Renders with texture declared in `particle` slot for model assigned to configured block state
-   Summoned with same syntax as `block` particle (i.e. `block_marker wheat[age=2]`)

## Bugs fixed in 21w42a

-   [MC-129912](https://bugs.mojang.com/browse/MC-129912) Player no longer spawned at highest level at world spawn
-   [MC-132347](https://bugs.mojang.com/browse/MC-132347) Spawning inside icebergs
-   [MC-214288](https://bugs.mojang.com/browse/MC-214288) Player does not spawn on the surface of the world when min\_y is greater than 0
-   [MC-233771](https://bugs.mojang.com/browse/MC-233771) Parity issue: Light blocks do not display their light level when shown via a held light block item
-   [MC-236837](https://bugs.mojang.com/browse/MC-236837) The player can occasionally spawn underground when loading into a new world
-   [MC-238582](https://bugs.mojang.com/browse/MC-238582) Beaches generate between desert and ocean
-   [MC-238900](https://bugs.mojang.com/browse/MC-238900) Values of 'Infinity' in noise settings in default worldgen

---

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

