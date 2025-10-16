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

A second Release Candidate for Minecraft Java Edition 1.17.1 is now available in the launcher, fixing some critical issues. If nothing critical is found, we expect this to be released as the full version of 1.17.1 on Tuesday, July 6th.

## The Caves & Cliffs Preview

Download the [latest datapack](https://launcher.mojang.com/v1/objects/622bf0fd298e1e164ecd05d866045ed5941283cf/CavesAndCliffsPreview.zip).

---

A first and hopefully only Release Candidate for Minecraft: Java Edition 1.17.1 is now available in the launcher, fixing a few more crashes and bugs. If nothing critical is found, we expect this to be released as the full version of 1.17.1 on Tuesday, July 6th.

## The Caves & Cliffs Preview

Download the [latest datapack](https://launcher.mojang.com/v1/objects/622bf0fd298e1e164ecd05d866045ed5941283cf/CavesAndCliffsPreview.zip).

## Fixed bugs in 1.17.1 Release Candidate 1

-   [MC-230716](https://bugs.mojang.com/browse/MC-230716) "death.attack.dryout" and "death.attack.dryout.player" display raw translation strings (are untranslated)

---

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

## Fixed Bugs in 1.17 Release Candidate 2

-   Fixed a few critical issues

---

We're now releasing the first (and hopefully only) release candidate for Caves & Cliffs: Part I. If there are no major issues following this release, no further changes will be done before the full release.

Happy mining!

## The Caves & Cliffs Preview

Download the [latest datapack](https://launcher.mojang.com/v1/objects/622bf0fd298e1e164ecd05d866045ed5941283cf/CavesAndCliffsPreview.zip).

## Fixed bugs in 1.17 Release Candidate 1

-   [MC-227323](https://bugs.mojang.com/browse/MC-227323) Custom player heads sometimes flash when placed on armor stands
-   Improved desync issues when exiting a boat over a high latency connection
-   Fixed crashes

---

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

