# Minecraft Snapshot 22w07a

Another snapshot is now available for Minecraft: Java Edition. If you're into custom worlds, you might want to try out biome tags.

Enjoy!

## Technical Changes in 22w07a

-   Biome tags are now used to determine which biomes a structure can generate in

## Fixed bugs in 22w07a

-   [MC-237110](https://bugs.mojang.com/browse/MC-237110) Grass blocks can generate underwater
-   [MC-238977](https://bugs.mojang.com/browse/MC-238977) Glow squids spawn in villager farms and wells in superflat worlds
-   [MC-243190](https://bugs.mojang.com/browse/MC-243190) Rooted dirt can replace cave vines
-   [MC-244683](https://bugs.mojang.com/browse/MC-244683) Tropical Fish in lush caves spawn in bubble columns
-   [MC-245857](https://bugs.mojang.com/browse/MC-245857) Enchanting table registers block diagonally above the bookshelves as blocking said bookshelf
-   [MC-245925](https://bugs.mojang.com/browse/MC-245925) Falling block visual glitch when dying with doImmediateRespawn
-   [MC-246465](https://bugs.mojang.com/browse/MC-246465) Lava can burn, damage, and destroy entities client-side and lead to de-sync
-   [MC-248095](https://bugs.mojang.com/browse/MC-248095) Active repeating command blocks stop running after world conversion to 1.18
-   [MC-248523](https://bugs.mojang.com/browse/MC-248523) The game crashes when attempting to open the beacon GUI

---

Today we're happy to share snapshot 22w06a with you. It contains compliance updates for South Korean players and is Totally Teeming with Technical Tag Tastiness.

Happy Mining (in moderation)!

## Changes in 22w06a

If you’re playing in South Korea, we added gameplay timers and notices in compliance with gaming laws to help remind players to take occasional breaks from gameplay. For more information, please see [the FAQ](https://help.minecraft.net/hc/articles/360052763631).

## Technical Changes in 22w06a

-   Any type present in registries (blocks, items, biomes, etc.) can now have tags

### Universal tags

-   Tags can now be defined for any registry (blocks, items, biomes, etc. - see `registries.json` in report)
-   New tags are stored in datapacks under `tags` directory (same as old ones)
    -   Names of new tag directories are the same as registry names (so `/data/[namespace]/tags/potion` and `/data/[namespace]/tags/worldgen/biome`)
    -   Existing tags (`blocks`, `items`, `fluids`, `entity_types`, `game_events` and `functions`) keep their name (for now)
-   Some fields in worldgen structures that previously only lists of element ids now accept tags
    -   Those entries now accept `[id, ...]`, `id` (shortcut for `[id]`) and `#tag`
    -   Changed fields are:
        -   `feature.glow_lichen` configuration: `can_be_placed_on`
        -   `feature.spring_feature` configuration: `valid_blocks`
        -   `feature.simple_random_selector` configuration: `features`
        -   `block_predicate_type.matching_blocks`: `blocks`
        -   `block_predicate_type.matching_fluids`: `fluids`
        -   `biome`: inner list in `features`, map value in `carvers`
        -   `biome_source.checkerboard`: `biomes`
-   Some tag fields now require id to be prepended with `#` (however they are not yet accepting element list)
    -   `dimension_type`: `infiniburn`
    -   `feature.geode` configration: `blocks.cannot_replace`, `blocks.invalid_blocks`
    -   `feature.vegetation_patch`, `feature.waterlogged_vegetation_patch` configuration: `replaceable`
    -   `feature.root_system` configuration: `root_replaceable`
    -   `structure_processor.protected_blocks`: `value`

## Fixed bugs in 22w06a

-   [MC-105317](https://bugs.mojang.com/browse/MC-105317) Structure blocks do not rotate entities correctly when loading
-   [MC-239708](https://bugs.mojang.com/browse/MC-239708) Superflat world "Water World" preset settings are obsolete for the 1.18 update
-   [MC-245937](https://bugs.mojang.com/browse/MC-245937) Flashing particles when boosting upwards with firework rockets
-   [MC-248106](https://bugs.mojang.com/browse/MC-248106) Parrot dying while using Riptide enchantment

---

While we work on some larger changes that aren't quite ready yet, here's snapshot 22w05a which contains a small squishing (that's a word, right?) of bugs.

Happy mining!

## Changes in 22w05a

-   A change in 22w03a that re-arranged Badlands biome layouts has been reverted to avoid causing generation changes and chunk borders. This change will be re-introduced later.

## Fixed bugs in 22w05a

-   [MC-4533](https://bugs.mojang.com/browse/MC-4533) Water graphical glitch when connecting diagonally
-   [MC-70848](https://bugs.mojang.com/browse/MC-70848) Water looks like it flows up
-   [MC-105317](https://bugs.mojang.com/browse/MC-105317) Structure blocks do not rotate entities correctly when loading
-   [MC-214289](https://bugs.mojang.com/browse/MC-214289) Pointed dripstone can replace blocks when generating
-   [MC-216004](https://bugs.mojang.com/browse/MC-216004) Wood pillars from mineshafts are generating on pointed dripstones
-   [MC-216589](https://bugs.mojang.com/browse/MC-216589) Abandoned Mineshafts don't delete dripstone in certain situations
-   [MC-232290](https://bugs.mojang.com/browse/MC-232290) Foxes will lay down in powder snow and not try to escape even when taking damage
-   [MC-236775](https://bugs.mojang.com/browse/MC-236775) Biome Selector is disordered in other languages
-   [MC-243152](https://bugs.mojang.com/browse/MC-243152) Slimes spawn in "Redstone Ready" superflat worlds
-   [MC-245772](https://bugs.mojang.com/browse/MC-245772) Outdated chests' loot tables get deleted when updating to 1.18.1
-   [MC-245910](https://bugs.mojang.com/browse/MC-245910) Campfires and hoppers cause constant chunk saving
-   [MC-247636](https://bugs.mojang.com/browse/MC-247636) Deleting a world no longer logs that a world is being deleted
-   [MC-248181](https://bugs.mojang.com/browse/MC-248181) The player disappears at certain heights
-   [MC-248189](https://bugs.mojang.com/browse/MC-248189) Teleporting below level 0 from the overworld to another dimension freezes the game on the loading screen until player dies
-   [MC-248195](https://bugs.mojang.com/browse/MC-248195) Typing /placefeature crashes client when connected to a server
-   [MC-248210](https://bugs.mojang.com/browse/MC-248210) Harsh chunk borders appear when upgrading to 22w03a
-   [MC-248225](https://bugs.mojang.com/browse/MC-248225) Incorrect BlockPos getSquaredDistance() calculation
-   [MC-248230](https://bugs.mojang.com/browse/MC-248230) Players get stuck on the "Loading terrain..." screen after rejoining the world whilst above or below the build limit

---

Happy New Year! It's time for the first snapshot of 2022 to hit the shelves. This snapshot series will be leading up to the release of 1.18.2. With this release we aim to address a few issues before moving on and starting with the Wild Update snapshots.

This snapshot contains tweaks to the world seed input and adds a new `placefeature` command. On top of that, it also fixes a bunch of bugs.

Happy mining!

## Changes in 22w03a

-   A seed of the number zero is no longer handled as a special case
-   Any spaces before/after an inputted seed will now be trimmed
-   Ender chests are no longer gift wrapped around Christmas

## Technical Changes in 22w03a

-   The `locate` command now uses a namespaced id parameter
-   Added command: `placefeature`

### `placefeature`

New command that places a configured feature at a given location. Syntax: `placefeature <id> [pos]`

Parameters:

-   `id`: The namespaced id of a configured feature to place
-   `pos`: The position to use as the origin for the feature placement (if omitted, `~ ~ ~` is used)

## Fixed bugs in 22w03a

-   [MC-83938](https://bugs.mojang.com/browse/MC-83938) Standing on entities with solid collision boxes (shulkers, boats) kicks you for flying
-   [MC-98727](https://bugs.mojang.com/browse/MC-98727) Server: Entering a boat/minecart/horse while going upwards from jumping causes a kick for flying
-   [MC-111082](https://bugs.mojang.com/browse/MC-111082) Riding a boat with NoGravity on a server without flight enabled causes kick for flying
-   [MC-126772](https://bugs.mojang.com/browse/MC-126772) Underwater fog doesn't hide edge of chunks correctly at low render distances
-   [MC-135989](https://bugs.mojang.com/browse/MC-135989) Kicked for flying using trident with Riptide enchantment
-   [MC-167763](https://bugs.mojang.com/browse/MC-167763) Blindness does not work underwater for certain graphics cards
-   [MC-185545](https://bugs.mojang.com/browse/MC-185545) Knockback Resistance on players is still affected by chance
-   [MC-185695](https://bugs.mojang.com/browse/MC-185695) Twisting vines don't reliably protect the player from fall damage
-   [MC-205232](https://bugs.mojang.com/browse/MC-205232) Player can see farther in powder snow with blindness effect
-   [MC-223834](https://bugs.mojang.com/browse/MC-223834) Pointed dripstone can form below some non-full (non-solid) blocks
-   [MC-226359](https://bugs.mojang.com/browse/MC-226359) The Zero-Width Non-Joiner shows as a "ZWNJ" box
-   [MC-229313](https://bugs.mojang.com/browse/MC-229313) Some blocks that negate fall damage don't reliably protect mobs at certain heights
-   [MC-230905](https://bugs.mojang.com/browse/MC-230905) Sky background is visible on certain reduced fog situations
-   [MC-233599](https://bugs.mojang.com/browse/MC-233599) /spreadplayers command does not allow for negative "under" values
-   [MC-235574](https://bugs.mojang.com/browse/MC-235574) Game crashes when replacing a block with a wall with blockstate up:false
-   [MC-236693](https://bugs.mojang.com/browse/MC-236693) "Done" button in controls submenu is very low
-   [MC-237262](https://bugs.mojang.com/browse/MC-237262) Crash report and tick profiling causes "Failed to find module info for \_" spam to log
-   [MC-238114](https://bugs.mojang.com/browse/MC-238114) Meadow trees can spawn without bee nests
-   [MC-238866](https://bugs.mojang.com/browse/MC-238866) Snow / powder snow can generate underwater
-   [MC-239031](https://bugs.mojang.com/browse/MC-239031) Glitchy chunk rendering persists since 21w41a
-   [MC-239436](https://bugs.mojang.com/browse/MC-239436) Broken culling in very long caves
-   [MC-240559](https://bugs.mojang.com/browse/MC-240559) JFR JSON report's bytesPerSecond is incorrectly calculated
-   [MC-241152](https://bugs.mojang.com/browse/MC-241152) Powder snow is part of #goat\_spawnable\_on block tag / Goats can spawn on powder snow
-   [MC-241205](https://bugs.mojang.com/browse/MC-241205) Sandstone generates 2-5 layers instead of 3-8 layers
-   [MC-242010](https://bugs.mojang.com/browse/MC-242010) Snow Blocks, Powder Snow aren't a part of #azalea\_root\_replaceable / Rooted dirt can't replace Snow Blocks & Powder Snow
-   [MC-242331](https://bugs.mojang.com/browse/MC-242331) Entities are displayed faster than chunks
-   [MC-242543](https://bugs.mojang.com/browse/MC-242543) Suffocation always uses the entity head center position for predicate and collision box
-   [MC-242709](https://bugs.mojang.com/browse/MC-242709) Pointed dripstone clusters create holes in the ground when generating in aquifers
-   [MC-243015](https://bugs.mojang.com/browse/MC-243015) Falling blocks at chunk generation cause tons of entities and (client-side) lag
-   [MC-243196](https://bugs.mojang.com/browse/MC-243196) Driver view angle resets when another player enters or exits boat
-   [MC-243245](https://bugs.mojang.com/browse/MC-243245) Unable to select "What is Realms?" button using Tab
-   [MC-243489](https://bugs.mojang.com/browse/MC-243489) Console spam: Skipping update for removed player
-   [MC-243619](https://bugs.mojang.com/browse/MC-243619) Raid waves can spawn outside of simulation distance
-   [MC-244164](https://bugs.mojang.com/browse/MC-244164) Upgrade to 1.18 makes chests invisible and empty
-   [MC-244174](https://bugs.mojang.com/browse/MC-244174) Fog effect for void, blindness, water, lava & powder snow is cylindrical
-   [MC-245345](https://bugs.mojang.com/browse/MC-245345) Crash when reloading chunks
-   [MC-245347](https://bugs.mojang.com/browse/MC-245347) Flying with an elytra and colliding with floating flowing water sometimes doesn't reset fall damage
-   [MC-245406](https://bugs.mojang.com/browse/MC-245406) Memory leak leading to crashes when loading pre-1.18 chunks
-   [MC-245416](https://bugs.mojang.com/browse/MC-245416) Baby turtles suffocate on soul sand
-   [MC-246445](https://bugs.mojang.com/browse/MC-246445) Game crashes when dispenser with shears is used on non-beehive block in #beehives tag
-   [MC-246449](https://bugs.mojang.com/browse/MC-246449) Game crashes when villager tries to open non-door in #wooden\_doors tag
-   [MC-246464](https://bugs.mojang.com/browse/MC-246464) Game crashes when dispensing a bone meal in a warm ocean and there is a block with no facing block state in #wall\_corals
-   [MC-247415](https://bugs.mojang.com/browse/MC-247415) Game crashes if coral related block tags are empty during coral reef generation

---

Another snapshot is now available. We've added new world generation below existing chunks, and blocks and fluids are now also part of the simulation distance setting. We also fixed a few bugs.

Keep in mind that we're still working on the world upgrades, so making a backup before upgrading is still a good idea.

Enjoy!

## New Features in 21w44a

-   New world generation is now inserted under existing chunks when upgrading a world to the new world height
-   Added an Online options screen where you can now find the Realms Notifications option and Difficulty when on a server
-   Added an "Allow Server Listings" option to opt-out of having your name displayed in server listings

## Changes in 21w44a

-   Sleeping now only resets the weather cycle if it was raining
-   Blocks and fluids are now also affected by simulation distance. It might be a good idea to test that the behavior of your Redstone contraptions remained the same
-   Optimized entity collisions

## Technical Changes in 21w44a

-   Servers can now set property `hide-online-players` to `true` in order to not send a player list on status requests
-   When JFR profiling is started from an external source, the JFR events for network packets are now aggregated instead of one event per packet

## Bugs fixed in 21w44a

-   [MC-63340](https://bugs.mojang.com/browse/MC-63340) Sleeping always resets time until rain
-   [MC-170551](https://bugs.mojang.com/browse/MC-170551) Foxes can't spawn on podzol or coarse dirt
-   [MC-200494](https://bugs.mojang.com/browse/MC-200494) In mineshafts, torches can generate attached to blocks other than the wooden supports
-   [MC-216432](https://bugs.mojang.com/browse/MC-216432) Mineshafts can generate with light but without any torches
-   [MC-216561](https://bugs.mojang.com/browse/MC-216561) Torches not spawning in abandoned mineshafts under y=0
-   [MC-217038](https://bugs.mojang.com/browse/MC-217038) Large dripstone structures can be generated outside the caves
-   [MC-236701](https://bugs.mojang.com/browse/MC-236701) New mountain biomes don't count towards "Adventuring Time" advancement
-   [MC-236938](https://bugs.mojang.com/browse/MC-236938) /jfr stop output does not have a link
-   [MC-237986](https://bugs.mojang.com/browse/MC-237986) Mobs specific to structures aren't spawning in their structures
-   [MC-238062](https://bugs.mojang.com/browse/MC-238062) Foxes & Wolves don't spawn in Groves
-   [MC-238761](https://bugs.mojang.com/browse/MC-238761) Adventuring Time does not account for the new cave biomes
-   [MC-238877](https://bugs.mojang.com/browse/MC-238877) Deep Ocean & Ocean is not needed for the "Adventure Time" advancement
-   [MC-238900](https://bugs.mojang.com/browse/MC-238900) Values of 'Infinity' in noise settings in default worldgen
-   [MC-238912](https://bugs.mojang.com/browse/MC-238912) Powder snow strips can't generate exposed to the surface
-   [MC-238962](https://bugs.mojang.com/browse/MC-238962) Icebergs go all the way to ocean floor.
-   [MC-238966](https://bugs.mojang.com/browse/MC-238966) Old Growth Spruce Taiga and Old Growth Birch Forest aren't part of the "Adventuring Time" advancement
-   [MC-238968](https://bugs.mojang.com/browse/MC-238968) Windswept Gravelly Hills & Windswept Savanna aren't apart of the "Adventuring Time" advancement
-   [MC-239280](https://bugs.mojang.com/browse/MC-239280) Withers do not move down to follow the player when the wither's health is half or lower
-   [MC-239344](https://bugs.mojang.com/browse/MC-239344) All torches in mineshafts are facing the wrong way
-   [MC-239359](https://bugs.mojang.com/browse/MC-239359) Wither Skeletons can only spawn on Nether Bricks
-   [MC-239689](https://bugs.mojang.com/browse/MC-239689) The "amplified" boolean in noise settings does nothing
-   [MC-239854](https://bugs.mojang.com/browse/MC-239854) Nether and caves world is missing bedrock
-   [MC-239858](https://bugs.mojang.com/browse/MC-239858) Nether decorations can be generated on the original bedrock layer
-   [MC-239866](https://bugs.mojang.com/browse/MC-239866) Terrain shaper in noise\_settings is not used

---

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

