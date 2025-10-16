# Minecraft Snapshot 22w03a

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

# Minecraft 1.18.1 Release Candidate 3

We're now releasing a third release candidate for Minecraft 1.18.1 to fix a critical security issue. If there are no major issues following this release, no further changes will be done before the full release.

Happy mining!

---

# Minecraft 1.18.1 Release Candidate 2

We're now releasing the second (uh... something something hopefully) release candidate for Minecraft 1.18.1. This release candidate fixes a chunk rendering issue. If there are no major issues following this release, no further changes will be done before the full release. ​ Happy mining!

## Fixed Bugs in 1.18.1 Release Candidate 2

-   [MC-245010](https://bugs.mojang.com/browse/MC-245010) Sometimes certain chunks will never load

---

# Minecraft 1.18.1 Release Candidate 1

We're now releasing the first (and hopefully only) release candidate for Minecraft 1.18.1. This release candidate fixes crashes and bugs. If there are no major issues following this release, no further changes will be done before the full release. ​ Happy mining! ​

## Fixed Bugs in 1.18 Release Candidate 1

​

-   [MC-229321](https://bugs.mojang.com/browse/MC-229321) Bees inside of bee hives / nests sometimes despawn when the world is reloaded
-   [MC-243796](https://bugs.mojang.com/browse/MC-243796) Random non fatal exceptions in console: Failed to store chunk ConcurrentModificationException
-   [MC-244190](https://bugs.mojang.com/browse/MC-244190) Entity fog doesn't match the fog of blocks around them

---

# Minecraft 1.18.1 Pre-Release 1

We're now releasing the first pre-release for Minecraft 1.18.1. This will be a fairly small release that will fix a few stability issues and a few bugs. We aim to release this version at the end of next week.

Happy mining!

## Technical Changes in 1.18.1 Pre-Release 1

-   Fixed an issue that would cause players on low-bandwidth connections to get timeout errors when connecting to a server
-   World fog now starts further away from the player, to make distant terrain more visible
-   Instead of applying fog as a spherical volume it is now applied as a cylindrical volume

## Fixed Bugs in 1.18.1 Pre-Release 1

-   [MC-219507](https://bugs.mojang.com/browse/MC-219507) - Beacon's power reverts back to previous one on world reload
-   [MC-242729](https://bugs.mojang.com/browse/MC-242729) - Observer activating without any updates nearby, caused by /clone
-   [MC-243216](https://bugs.mojang.com/browse/MC-243216) - Chunk render distance on servers seems shorter than in 1.17.1

---

# Minecraft 1.18 Release Candidate 4

We're now releasing the fourth (and totally last) release candidate for Caves & Cliffs: Part II. If there are no major issues following this release, no further changes will be done before the full release.

## Changes in 1.18 Release Candidate 4

​

-   Fixed an issue with the lower distribution of coal ore

---

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

