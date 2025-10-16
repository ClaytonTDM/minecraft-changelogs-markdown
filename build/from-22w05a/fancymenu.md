# Minecraft Snapshot 22w05a

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
-   [MC-237262](https://bugs.mojang.com/browse/MC-237262) Crash report and tick profiling causes "Failed to find module info for ;;_;;" spam to log
-   [MC-238114](https://bugs.mojang.com/browse/MC-238114) Meadow trees can spawn without bee nests
-   [MC-238866](https://bugs.mojang.com/browse/MC-238866) Snow / powder snow can generate underwater
-   [MC-239031](https://bugs.mojang.com/browse/MC-239031) Glitchy chunk rendering persists since 21w41a
-   [MC-239436](https://bugs.mojang.com/browse/MC-239436) Broken culling in very long caves
-   [MC-240559](https://bugs.mojang.com/browse/MC-240559) JFR JSON report's bytesPerSecond is incorrectly calculated
-   [MC-241152](https://bugs.mojang.com/browse/MC-241152) Powder snow is part of #goat;;_;;spawnable;;_;;on block tag / Goats can spawn on powder snow
-   [MC-241205](https://bugs.mojang.com/browse/MC-241205) Sandstone generates 2-5 layers instead of 3-8 layers
-   [MC-242010](https://bugs.mojang.com/browse/MC-242010) Snow Blocks, Powder Snow aren't a part of #azalea;;_;;root;;_;;replaceable / Rooted dirt can't replace Snow Blocks & Powder Snow
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
-   [MC-246449](https://bugs.mojang.com/browse/MC-246449) Game crashes when villager tries to open non-door in #wooden;;_;;doors tag
-   [MC-246464](https://bugs.mojang.com/browse/MC-246464) Game crashes when dispensing a bone meal in a warm ocean and there is a block with no facing block state in #wall;;_;;corals
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
-   [MC-239866](https://bugs.mojang.com/browse/MC-239866) Terrain shaper in noise;;_;;settings is not used

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

