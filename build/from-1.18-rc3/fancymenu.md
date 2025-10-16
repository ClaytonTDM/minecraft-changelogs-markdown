# Minecraft 1.18 Release Candidate 3

We're now releasing the third (and almost certainly last) release candidate for Caves & Cliffs: Part II. If there are no major issues following this release, no further changes will be done before the full release. ​ Happy crafting!

## Fixed bugs in 1.18 Release Candidate 3

​

-   [MC-242859](https://bugs.mojang.com/browse/MC-242859) Blocks losing the loot inside them after dying

​

---

# Minecraft 1.18 Release Candidate 2

We're now releasing the second (and hopefully last) release candidate for Caves & Cliffs: Part II. If there are no major issues following this release, no further changes will be done before the full release.

## Fixed bugs in 1.18 Release Candidate 2

-   [MC-242547](https://bugs.mojang.com/browse/MC-242547) In large caves, the cave generation can't reach y= -54, not allowing to generate large lava lakes

---

# Minecraft 1.18 Release Candidate 1

We're now releasing the first (and hopefully only) release candidate for Caves & Cliffs: Part II. If there are no major issues following this release, no further changes will be done before the full release.

Happy mining!

## Technical Changes in 1.18 Release Candidate 1

-   Size limit for server resource packs has been increased from 100 MB to 250 MB

## Fixed bugs in 1.18 Release Candidate 1

-   [MC-242708](https://bugs.mojang.com/browse/MC-242708) Moving through blocks in spectator mode causes a memory leak

---

# Minecraft 1.18 Pre-Release 8

It is now time for pre-release 8 for Minecraft 1.18 which contains more fixes for crashes and bugs.

## Fixed Bugs in 1.18 Pre-release 8

-   [MC-227537](https://bugs.mojang.com/browse/MC-227537) Crash: java.lang.NullPointerException: Cannot invoke "it.unimi.dsi.fastutil.objects.ObjectSet.remove(Object)" because "$$4" is null
-   [MC-230866](https://bugs.mojang.com/browse/MC-230866) Eating whilst traveling through a Nether portal prints error in game log
-   [MC-236783](https://bugs.mojang.com/browse/MC-236783) Parity Issue: Ravagers still attack baby villagers in Java Edition
-   [MC-241991](https://bugs.mojang.com/browse/MC-241991) Game freezes without crash logs when upgrading from 1.12.2 to 1.18 pre-5
-   [MC-242375](https://bugs.mojang.com/browse/MC-242375) Cats no longer scare phantoms away
-   [MC-242647](https://bugs.mojang.com/browse/MC-242647) Crash after respawning

---

# Minecraft 1.18 Pre-Release 7

We're now releasing the seventh pre-release for Minecraft 1.18, fixing more critical issues and tweaking cave biome features a bit further.

## Changes in 1.18 Pre-release 7

​

-   The numbers of features in cave biomes have been increased somewhat again

​

## Fixed bugs in 1.18 Pre-release 7

​

-   [MC-218592](https://bugs.mojang.com/browse/MC-218592) Azalea trees can generate in more than two blocks of water
-   [MC-241277](https://bugs.mojang.com/browse/MC-241277) Server can't generate amplified/large biomes worlds from scratch
-   [MC-241327](https://bugs.mojang.com/browse/MC-241327) Render Distance 13 at the world border causes excessive lag
-   [MC-242068](https://bugs.mojang.com/browse/MC-242068) Dirt part of the Dirt Path texture is one pixel too low
-   [MC-242546](https://bugs.mojang.com/browse/MC-242546) When optimizing 1.17 world in 1.18, old "Level" Compound is not deleted, resulting in increased world size

---

# Minecraft 1.18 Pre-Release 6

The sixth pre-release for 1.18 is now available. This pre-releases squashes some more bugs. Additionally, we now save the game more often, similar how to you should remember to save backups more often.

Happy mining!

## Changes in 1.18 Pre-release 6

-   The numbers of features in cave biomes have been tweaked

## Technical Changes in 1.18 Pre-release 6

-   The game now saves chunks whenever there is time spare to reduce autosave spikes

## Fixed Bugs in 1.18 Pre-release 6

-   [MC-236947](https://bugs.mojang.com/browse/MC-236947) Signature attribute is stripped from java records
-   [MC-238930](https://bugs.mojang.com/browse/MC-238930) Soul Sand and Soul Soil generate below the nether ceiling
-   [MC-238959](https://bugs.mojang.com/browse/MC-238959) Falling block placing at Y=1 changes into dropped item when landing on Y=0
-   [MC-239880](https://bugs.mojang.com/browse/MC-239880) Some chunks have missing blocks below 0
-   [MC-239900](https://bugs.mojang.com/browse/MC-239900) Upgrading custom world to 21w43a ignores min;;_;;y and height
-   [MC-241263](https://bugs.mojang.com/browse/MC-241263) Off-heap memory leak
-   [MC-241409](https://bugs.mojang.com/browse/MC-241409) Game crashes when terrain shaper data is missing
-   [MC-241630](https://bugs.mojang.com/browse/MC-241630) Temperatures don't properly get converted
-   [MC-241767](https://bugs.mojang.com/browse/MC-241767) Breaking a vine or ladder block while the player is climbing it while sneaking allows the player to hover in place indefinetly
-   [MC-241820](https://bugs.mojang.com/browse/MC-241820) Ocean Monuments upgraded from previous versions appears to have the bounding box shifted to chunk borders north and west
-   [MC-241830](https://bugs.mojang.com/browse/MC-241830) Windswept savannas in amplified worlds have the incorrect surface blocks
-   [MC-241941](https://bugs.mojang.com/browse/MC-241941) Nether bedrock roof can generate exposed
-   [MC-242016](https://bugs.mojang.com/browse/MC-242016) Dripstone doesn't generate at high y values
-   [MC-242022](https://bugs.mojang.com/browse/MC-242022) Game crashes when loading new chunks (Exception generating new chunk, caused by ArrayIndexOutOfBoundsException: Index 268435455 out of bounds for length 32)
-   [MC-242479](https://bugs.mojang.com/browse/MC-242479) Pointed dripstone makes holes in lava pools

---

# Minecraft 1.18 Pre-Release 5

We're now releasing pre-release 5 for Minecraft 1.18. This pre-release contains more bug fixes and a tweak to new cave generation under existing chunks.

## Changes in 1.18 Pre-release 5

-   If there is any bedrock at height 0 in a chunk, new world generation will happen under any non-air block at height 0 in that chunk

## Fixed Bugs in 1.18 Pre-release 5

-   [MC-138118](https://bugs.mojang.com/browse/MC-138118) Parrot wing texture is reversed on the bottom
-   [MC-148422](https://bugs.mojang.com/browse/MC-148422) Stripped dark oak log side texture is too bright
-   [MC-150567](https://bugs.mojang.com/browse/MC-150567) Dark oak log top texture bark ring not updated
-   [MC-162038](https://bugs.mojang.com/browse/MC-162038) Pillagers have no hood texture
-   [MC-162803](https://bugs.mojang.com/browse/MC-162803) Lily Pad mirrors texture when placed
-   [MC-170557](https://bugs.mojang.com/browse/MC-170557) Spruce door top/bottom has the incorrect texture
-   [MC-176309](https://bugs.mojang.com/browse/MC-176309) Illusioner has a few misplaced pixels left in their texture
-   [MC-176824](https://bugs.mojang.com/browse/MC-176824) Red glass and outline of blue glass are slightly more opaque.
-   [MC-176833](https://bugs.mojang.com/browse/MC-176833) Anvil GUI hammer uses an outdated iron pallet
-   [MC-177664](https://bugs.mojang.com/browse/MC-177664) Sound system warning messages are spamming the system log
-   [MC-180398](https://bugs.mojang.com/browse/MC-180398) Too many sounds causes client to stall, limit can be easily reached with rabbits
-   [MC-194822](https://bugs.mojang.com/browse/MC-194822) Glass pane top texture has not changed with the Texture Update
-   [MC-194950](https://bugs.mojang.com/browse/MC-194950) Cactus in potted cactus is vertically squished
-   [MC-198007](https://bugs.mojang.com/browse/MC-198007) Villages replace ice with path blocks instead of wood
-   [MC-199662](https://bugs.mojang.com/browse/MC-199662) Extra pixels in cocoa pod textures as of Texture Update
-   [MC-200046](https://bugs.mojang.com/browse/MC-200046) Cartography table planks texture is incorrect/slightly outdated
-   [MC-200137](https://bugs.mojang.com/browse/MC-200137) Lectern base plate texture still uses the old planks texture
-   [MC-200956](https://bugs.mojang.com/browse/MC-200956) Beetroot seeds texture is not vertically centered
-   [MC-200957](https://bugs.mojang.com/browse/MC-200957) Melon seeds texture is not vertically centered
-   [MC-202910](https://bugs.mojang.com/browse/MC-202910) Inconsistent highlight color on armor
-   [MC-204901](https://bugs.mojang.com/browse/MC-204901) Side texture for dirt paths hasn't been updated with the texture update
-   [MC-221172](https://bugs.mojang.com/browse/MC-221172) Warped and Crimson Stems use different top texture from Bedrock Edition
-   [MC-222154](https://bugs.mojang.com/browse/MC-222154) Cave vines can generate hanging on pointed dripstone
-   [MC-222763](https://bugs.mojang.com/browse/MC-222763) Armor stands use the old smooth stone slab texture
-   [MC-225553](https://bugs.mojang.com/browse/MC-225553) Oak and iron doors have a line in their textures
-   [MC-226711](https://bugs.mojang.com/browse/MC-226711) Carrot crop texture has an incorrect pixel
-   [MC-227258](https://bugs.mojang.com/browse/MC-227258) Flowering Azalea Leaves are in both #minecraft:mineable/hoe and #minecraft:mineable/axe tags, while regular Azalea Leaves (and all other leaves) are only in #minecraft:mineable/hoe
-   [MC-228900](https://bugs.mojang.com/browse/MC-228900) Cave vines can generate floating (Recurrence of MC-218817)
-   [MC-229977](https://bugs.mojang.com/browse/MC-229977) Breaking blocks with pistons on the east/west direction causes significant lag
-   [MC-231272](https://bugs.mojang.com/browse/MC-231272) Cave vines can sometimes generate hanging on cobwebs
-   [MC-231818](https://bugs.mojang.com/browse/MC-231818) You can no longer use the up or down arrow to navigate between servers in the multiplayer menu
-   [MC-233883](https://bugs.mojang.com/browse/MC-233883) The hide and show messages buttons in the social interactions menu display their hover text regardless of the position of the cursor
-   [MC-234039](https://bugs.mojang.com/browse/MC-234039) The back of wild axolotls are off-centered
-   [MC-235567](https://bugs.mojang.com/browse/MC-235567) Clusters of dripstone (stalagmites) tend to generate abnormally frequent with thickness "tip" on tall caves
-   [MC-236723](https://bugs.mojang.com/browse/MC-236723) The Floating Islands preset does not seem to be generating correctly
-   [MC-237500](https://bugs.mojang.com/browse/MC-237500) Azalea trees can generate on top of huge mushrooms, trees & bamboo
-   [MC-238360](https://bugs.mojang.com/browse/MC-238360) Rooted dirt cannot replace terracotta
-   [MC-238529](https://bugs.mojang.com/browse/MC-238529) Azalea trees can fail to generate
-   [MC-238892](https://bugs.mojang.com/browse/MC-238892) Rooted dirt doesn't replace red sand
-   [MC-239128](https://bugs.mojang.com/browse/MC-239128) Sweet berry bushes generate extremely rare in comparison with 1.17.1
-   [MC-239237](https://bugs.mojang.com/browse/MC-239237) Azalea trees can be generated on icebergs
-   [MC-239489](https://bugs.mojang.com/browse/MC-239489) Melons generate rarely in jungle biomes
-   [MC-239847](https://bugs.mojang.com/browse/MC-239847) Chunk blending occasionally produces sharp chunk border edges
-   [MC-241256](https://bugs.mojang.com/browse/MC-241256) Some feature configs still expect a configured feature instead of a placed feature
-   [MC-241278](https://bugs.mojang.com/browse/MC-241278) Azalea trees are no longer generating
-   [MC-241539](https://bugs.mojang.com/browse/MC-241539) Stone generates in the side of hoodoos
-   [MC-241566](https://bugs.mojang.com/browse/MC-241566) Mossy cobblestone boulders generate in a grid pattern in old-growth spruce taigas
-   [MC-241588](https://bugs.mojang.com/browse/MC-241588) Cave vines can sometimes generate hanging on water
-   [MC-241672](https://bugs.mojang.com/browse/MC-241672) Mobs don't panic when burning if standing on blocks placed above water
-   [MC-241728](https://bugs.mojang.com/browse/MC-241728) Converting world to 1.18 pre-release 2 generates new caves in too many places
-   [MC-241747](https://bugs.mojang.com/browse/MC-241747) Inconsistent Colors in grindstone gui
-   [MC-241784](https://bugs.mojang.com/browse/MC-241784) Some sliders in options menu do not work properly
-   [MC-241800](https://bugs.mojang.com/browse/MC-241800) Cannot change numbers for gamerules on world creation
-   [MC-241847](https://bugs.mojang.com/browse/MC-241847) Floating stone platform doesn't generate in void superflat world preset
-   [MC-241933](https://bugs.mojang.com/browse/MC-241933) Spore blossoms, cave vines, and pointed dripstones generate indented into the cave surface

---

# Minecraft 1.18 Pre-Release 4

We've now released Pre-release 4, which fixes a few crashes.

## Bugs fixed in 1.18 Pre-release 4

-   [MC-241774](https://bugs.mojang.com/browse/MC-241774) Crash when going nether portals or creating a single biome world with nether biomes // java.lang.IndexOutOfBoundsException: Index 0 out of bounds for length 0
-   [MC-241775](https://bugs.mojang.com/browse/MC-241775) Crash when going through end portals or creating a single biome world with end biomes // java.lang.NegativeArraySizeException: -5
-   [MC-241778](https://bugs.mojang.com/browse/MC-241778) Game crashes or freeze when loading and upgrading the 1.17.1 version of the Superflat world // java.util.concurrent.CompletionException: z: Biome decoration

---

# Minecraft 1.18 Pre-Release 3

We've now released 1.18 pre-release 3 with additional bugfixes and some performance improvements. In case you missed it, we've also announced the release date for 1.18! The update is set to release on November 30th, and you can read more about that [here](https://www.minecraft.net/article/caves---cliffs-update-part-ii-coming). Mark your calendars!

## Fixed bugs in 1.18 Pre-Release 3

-   [MC-109260](https://bugs.mojang.com/browse/MC-109260) Full-width punctuation characters are rendered incorrectly
-   [MC-185263](https://bugs.mojang.com/browse/MC-185263) Non full chunks in cache memory "semi-leak"
-   [MC-223840](https://bugs.mojang.com/browse/MC-223840) Lava blocks from "Lava Aquifers" don't get updated when a cave cuts through underneath them
-   [MC-231818](https://bugs.mojang.com/browse/MC-231818) You can no longer use the up or down arrow to navigate between servers in the multiplayer menu
-   [MC-236740](https://bugs.mojang.com/browse/MC-236740) Server-side lag spike sometimes occurs when attempting to locate a buried treasure or opening/breaking a chest containing a map
-   [MC-236764](https://bugs.mojang.com/browse/MC-236764) Lighting lags behind world generation
-   [MC-239397](https://bugs.mojang.com/browse/MC-239397) Lava pockets generate in icebergs
-   [MC-239610](https://bugs.mojang.com/browse/MC-239610) Severe world corruption due to 1.18 snapshots failing to deserialize chunks that 1.17 loads fine
-   [MC-239682](https://bugs.mojang.com/browse/MC-239682) Out of memory crash: World generation exhausts Java heap space
-   [MC-239950](https://bugs.mojang.com/browse/MC-239950) Feature placement doesn't check for biomes, causing unnecessary lag
-   [MC-240229](https://bugs.mojang.com/browse/MC-240229) Rain and snow fall on the same blocks in a certain height range
-   [MC-240483](https://bugs.mojang.com/browse/MC-240483) Foxes that spawn in grove biomes aren't the snowy variant
-   [MC-240589](https://bugs.mojang.com/browse/MC-240589) Game froze for several minutes and then crashed while flying around and loading chunks
-   [MC-241245](https://bugs.mojang.com/browse/MC-241245) Generated Deepslate overwrites ore veins (mainly Iron ore veins)
-   [MC-241255](https://bugs.mojang.com/browse/MC-241255) Gigantic Performance Drop after a couple of minutes
-   [MC-241352](https://bugs.mojang.com/browse/MC-241352) Directory structure is not consistent between server and client

---

# Minecraft 1.18 Pre-Release 2

The second pre-release for Minecraft Java is now available. In this pre-release, we've upgraded the Java version that is bundled with the game, and the game now uses Java 17. Other than this, we've mostly been busy fixing bugs.

Enjoy!

## Technical Changes in 1.18 Pre-Release 2

Minecraft now uses Java version 17. If you are using a default setup the Launcher will download and install the correct version. If you are using a custom Java setup or a third-party launcher, you will need to ensure that your Java installation is version 17 or above.

## Fixed Bugs in 1.18 Pre-Release 2

-   [MC-32813](https://bugs.mojang.com/browse/MC-32813) Floating water / lava above caves / cave carver doesn't update water
-   [MC-206303](https://bugs.mojang.com/browse/MC-206303) Minecarts have old textures on the bottom
-   [MC-217038](https://bugs.mojang.com/browse/MC-217038) Large dripstone structures can be generated outside the caves
-   [MC-217056](https://bugs.mojang.com/browse/MC-217056) Some high-speed particles lag/freeze the game
-   [MC-220061](https://bugs.mojang.com/browse/MC-220061) Painting back texture is mirrored
-   [MC-223917](https://bugs.mojang.com/browse/MC-223917) Goats on fire do not attempt to pathfind towards water
-   [MC-226689](https://bugs.mojang.com/browse/MC-226689) Albert Pastore's name is grey and improperly indented in the credits
-   [MC-227163](https://bugs.mojang.com/browse/MC-227163) Credits say ''IT Manager'' instead of ''IT Managers''
-   [MC-227204](https://bugs.mojang.com/browse/MC-227204) "Explore, dream, discover" quote no longer appears after new credits
-   [MC-227206](https://bugs.mojang.com/browse/MC-227206) Random names in the new credits use curly quotes/apostrophes
-   [MC-227231](https://bugs.mojang.com/browse/MC-227231) Steven Silvester's name is misspelt in the credits
-   [MC-227239](https://bugs.mojang.com/browse/MC-227239) In the credits, Elizabeth Batson's company name is improperly capitalized
-   [MC-227329](https://bugs.mojang.com/browse/MC-227329) The usage and punctuation of "Inc" is still inconsistent in the credits
-   [MC-231782](https://bugs.mojang.com/browse/MC-231782) Missing "(" in Frank Criscione credit
-   [MC-236756](https://bugs.mojang.com/browse/MC-236756) Biome-exclusive mob spawn rates are reduced
-   [MC-236858](https://bugs.mojang.com/browse/MC-236858) Seeds that spawn you in the middle of the ocean cause lag
-   [MC-237608](https://bugs.mojang.com/browse/MC-237608) Server address shown when connection fails during server startup
-   [MC-238049](https://bugs.mojang.com/browse/MC-238049) Passive mobs (cows, pigs, sheep, chickens) sometimes do not spawn
-   [MC-238076](https://bugs.mojang.com/browse/MC-238076) UpgradeData in chunk is not migrated to new world height
-   [MC-238375](https://bugs.mojang.com/browse/MC-238375) Crash and/or data corruption upon attempting to save a world with a world border center over 30 million blocks
-   [MC-238587](https://bugs.mojang.com/browse/MC-238587) Sprinting while flying into a block causes the screen to rapidly zoom in and out
-   [MC-239397](https://bugs.mojang.com/browse/MC-239397) Lava pockets generate in icebergs
-   [MC-239423](https://bugs.mojang.com/browse/MC-239423) Kumi Tanioka isn't under "Music composed by" in the credits
-   [MC-239856](https://bugs.mojang.com/browse/MC-239856) Upgrading old worlds causes vines to have the wrong block state
-   [MC-239857](https://bugs.mojang.com/browse/MC-239857) Fences, iron bars, and glass panes often use an incorrect block state after conversion
-   [MC-239884](https://bugs.mojang.com/browse/MC-239884) Water from old chunks don't properly propagate into new chunks
-   [MC-239899](https://bugs.mojang.com/browse/MC-239899) Connected redstone does not properly upgrade from older versions
-   [MC-240030](https://bugs.mojang.com/browse/MC-240030) Holes in worlds created in Alpha and Infdev below y=0 after conversion
-   [MC-240494](https://bugs.mojang.com/browse/MC-240494) Duplicated mineshafts with new cave generation
-   [MC-240507](https://bugs.mojang.com/browse/MC-240507) Mob Spawning in structures fails in pre-1.18 generated monuments/swamp huts/outposts
-   [MC-240570](https://bugs.mojang.com/browse/MC-240570) Biomes in old chunks are not copied to new caves below Y=0 when chunks are extended
-   [MC-240610](https://bugs.mojang.com/browse/MC-240610) "Allow Server Listings" option doesn't save its last setting
-   [MC-240783](https://bugs.mojang.com/browse/MC-240783) Powder snow does not reduce or negate fall damage
-   [MC-241111](https://bugs.mojang.com/browse/MC-241111) Some Mojang employees are not mentioned in the credits
-   [MC-241194](https://bugs.mojang.com/browse/MC-241194) Crash: java.lang.NullPointerException: Cannot invoke "ddm.a(cao, cps, java.util.Random, gh)" because the return value of "java.util.function.Supplier.get()" is null
-   [MC-241199](https://bugs.mojang.com/browse/MC-241199) Double chests have incorrect block states after upgrading old worlds
-   [MC-241208](https://bugs.mojang.com/browse/MC-241208) Powered buttons, pressure plates, and tripwire hooks remain powered forever after upgrading old worlds
-   [MC-241234](https://bugs.mojang.com/browse/MC-241234) Fossils get cut off at chunk borders
-   [MC-241413](https://bugs.mojang.com/browse/MC-241413) Floating water generates around ravines

---

# Minecraft 1.18 Pre-Release 1

The first 1.18 pre-release is here!

From now on, you should mostly see bugs being fixed. In addition to that, pre-releases don't follow the regular snapshot cadence of releasing on Wednesdays, so keep an eye out!

That being said, this pre-release introduces biome blending, which means that you should no longer find harsh borders between new and old terrain. On top of that, we've also reintroduced the Amplified and Large Biome world types.

Happy mining!

## Changes in 1.18 Pre-Release 1

-   Amplified and Large biome worlds have been adapted to the new terrain and are now once again available in the Create World screen
-   Removed world types "Caves" and "Floating islands" from the world creation screen
-   The transition between new and old terrain is less "cliffy"
    -   Will surface height blend? Yes
    -   Will biomes blend? Yes
    -   Will caves blend? Your mileage may vary

## Technical changes in 1.18 Pre-Release 1

-   `--report` option in data generator now creates full worldgen reference files instead of just biomes

## Fixed bugs in 1.18 Pre-Release 1

-   [MC-46584](https://bugs.mojang.com/browse/MC-46584) Clicking and dragging MOUSE3 (Mouse wheel) over item slots incorrectly attempts to place full stacks in survival
-   [MC-53444](https://bugs.mojang.com/browse/MC-53444) You can get outside of the worldborder by mounting a rideable entity (boat, pig, etc.) outside of it
-   [MC-54119](https://bugs.mojang.com/browse/MC-54119) Can place/take water/lava/lilypads outside worldborder and inside spawn protection
-   [MC-62550](https://bugs.mojang.com/browse/MC-62550) Worldborder not correctly initialized for the End and Nether
-   [MC-96535](https://bugs.mojang.com/browse/MC-96535) Ambient property of potion effects with ShowParticles:0b is not disregarded
-   [MC-113425](https://bugs.mojang.com/browse/MC-113425) Player can interact with entities outside the worldborder
-   [MC-117800](https://bugs.mojang.com/browse/MC-117800) Half bed can be placed outside the worldborder
-   [MC-121997](https://bugs.mojang.com/browse/MC-121997) Every dimension's world border is operating independently, and doesn't appear where it actually is
-   [MC-131808](https://bugs.mojang.com/browse/MC-131808) Forests don't spawn trees near the positive edges, but overstretch bounds on the negative edges
-   [MC-136523](https://bugs.mojang.com/browse/MC-136523) Invisible world border in the end dimension
-   [MC-187174](https://bugs.mojang.com/browse/MC-187174) Worldborder does not take nether coordinates into account
-   [MC-206660](https://bugs.mojang.com/browse/MC-206660) Stalactites don't fall properly if there are blocks directly below it
-   [MC-215139](https://bugs.mojang.com/browse/MC-215139) Some water in caves will not start flowing
-   [MC-219035](https://bugs.mojang.com/browse/MC-219035) Fossil structures can't generate in far east and south blocks of a chunk
-   [MC-222388](https://bugs.mojang.com/browse/MC-222388) Acacia trees under y=0 often grow with bare branches
-   [MC-229013](https://bugs.mojang.com/browse/MC-229013) Lava lake decorator config is unused
-   [MC-229517](https://bugs.mojang.com/browse/MC-229517) Conversion sounds for strays & drowned is controlled by Friendly Creatures mixer, not Hostile Creatures
-   [MC-231666](https://bugs.mojang.com/browse/MC-231666) Dragon egg can teleport to outside the world border
-   [MC-236610](https://bugs.mojang.com/browse/MC-236610) Lava lakes generate without stone around
-   [MC-236628](https://bugs.mojang.com/browse/MC-236628) Lava pools cause sand to fall now instead of putting sandstone beneath it
-   [MC-236652](https://bugs.mojang.com/browse/MC-236652) Weather can sometimes be incorrect within a biome
-   [MC-236803](https://bugs.mojang.com/browse/MC-236803) Extremely low amount of pillager spawns in outpost on jagged peaks, groves, snowy slopes & frozen peaks
-   [MC-237040](https://bugs.mojang.com/browse/MC-237040) Falling blocks still sometimes disappear for a moment when landing
-   [MC-237598](https://bugs.mojang.com/browse/MC-237598) Projectiles glitch around in the air when exiting simulation distance
-   [MC-237621](https://bugs.mojang.com/browse/MC-237621) Missing biome definitions in some peak grid cells causes unintended ocean placement
-   [MC-237791](https://bugs.mojang.com/browse/MC-237791) Villager spawn eggs used on grove, frozen peaks, snowy slopes and jagged peaks don't spawn snowy plains villagers
-   [MC-237954](https://bugs.mojang.com/browse/MC-237954) The "Sound of Music" and "Feels like home" advancements are internally located in the incorrect tab folder
-   [MC-238038](https://bugs.mojang.com/browse/MC-238038) Newly added advancements' namespace IDs do not match their translation keys
-   [MC-238972](https://bugs.mojang.com/browse/MC-238972) Deserts generate with little or no sandstone
-   [MC-239714](https://bugs.mojang.com/browse/MC-239714) Doing /locate desert;;_;;pryamid in a desert superflat world freezes the world
-   [MC-239851](https://bugs.mojang.com/browse/MC-239851) Upgrading old worlds causes leaves to change to surface builder blocks
-   [MC-239852](https://bugs.mojang.com/browse/MC-239852) Lava pools intersecting strongholds can cause end portal frames to be deleted
-   [MC-240021](https://bugs.mojang.com/browse/MC-240021) Cullface arguments in cauldrons are excessive
-   [MC-240481](https://bugs.mojang.com/browse/MC-240481) Deepslate doesn't generate in the new cave generation under old chunks
-   [MC-240482](https://bugs.mojang.com/browse/MC-240482) There is no bedrock in the overworld in old chunks
-   [MC-240495](https://bugs.mojang.com/browse/MC-240495) Deepslate does not generate below Y=0 in Badlands or Wooded Badlands Biomes
-   [MC-240503](https://bugs.mojang.com/browse/MC-240503) Bedrock doesn;;`;;t generate in Badlands or Wooded Badlands
-   [MC-240516](https://bugs.mojang.com/browse/MC-240516) Noise cave carvers don't generate below old chunks
-   [MC-240531](https://bugs.mojang.com/browse/MC-240531) Block simulation distance is always 8 chunks regardless of the slider's value
-   [MC-240534](https://bugs.mojang.com/browse/MC-240534) Clicking a JFR link copies full server-side path to clipboard
-   [MC-240631](https://bugs.mojang.com/browse/MC-240631) Extremely slow End terrain generation
-   [MC-240998](https://bugs.mojang.com/browse/MC-240998) Portals no longer load chunks as non entity processing

---

# Minecraft Snapshot 21w44a

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

