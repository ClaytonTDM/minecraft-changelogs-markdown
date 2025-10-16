# Minecraft Snapshot 21w19a

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

A delicious snapshot appears! This snapshot introduces some tweaks to the raw ore textures, a few copper changes, and the introduction of noodle caves in the Caves & Cliffs Preview datapack.

If you have any [feedback](https://feedback.minecraft.net/), a penne for your thoughts...

## Changes in 21w17a

-   Small dripleaves can now also be placed on moss blocks
-   Copper ore drops 2-3 raw copper when mined, or more when using a tool enchanted with Fortune
-   Copper blocks are now crafted from 9 copper ingots
-   Tweaked the texture of raw metal blocks

![Minecraft Snapshot 21w17a Texture Comparison](https://launchercontent.mojang.com/images/snapshot-21w17a-ore-texture-comparison.jpg) New raw ore textures in snapshot 21w17a. [Click here](https://launchercontent.mojang.com/v2/images/snapshot21w17aoretexturecomparisonfull.jpg) for a link to the full resolution image.

## Changes to the Caves & Cliffs Preview

Download the [updated datapack](https://launcher.mojang.com/v1/objects/6d37f3c37d583e45f0d792f0eccd315032ada0fa/CavesAndCliffsPreview.zip).

![Minecraft Snapshot 21w17a Noodle Caves](https://launchercontent.mojang.com/images/snapshot-21w17a-carousel.jpg) Noodles caves in snapshot 21w17a. [Click here](https://launchercontent.mojang.com/v2/images/snapshot21w17anoodlecavesfull.jpg) for a link to the full resolution image.

-   Large Ore Veins have been tweaked
-   Added thinner, squigglier, and more claustrophobic variant of spaghetti caves

### Large Ore Veins

-   Ore veins are now slightly rarer and slightly smaller (but they are still large!)
-   The ores in the vein are clumpier and less evenly distributed
-   If you are lucky you may find a raw ore block in the vein

## Bugs fixed in 21w17a

-   [MC-170443](https://bugs.mojang.com/browse/MC-170443) Banner copying recipe ignores existence of other items in crafting grid
-   [MC-187664](https://bugs.mojang.com/browse/MC-187664) World border uses float to determine its size, making some border sizes inaccessible, and cannot be set to 30 million or beyond
-   [MC-201269](https://bugs.mojang.com/browse/MC-201269) Constantly teleporting player to a phantom crashes the game/kicks the player
-   [MC-203570](https://bugs.mojang.com/browse/MC-203570) Candles aren't grouped in the recipe book
-   [MC-203745](https://bugs.mojang.com/browse/MC-203745) Repeated teleport between dimensions causes the entity to duplicate on the client
-   [MC-204031](https://bugs.mojang.com/browse/MC-204031) Waxed Cut Copper (any level of weathered) have two separate recipes in the recipe book
-   [MC-214187](https://bugs.mojang.com/browse/MC-214187) Void platform generates multiple times
-   [MC-214735](https://bugs.mojang.com/browse/MC-214735) Horse disappears when dying while riding it and reloading the world while it's unloaded
-   [MC-214838](https://bugs.mojang.com/browse/MC-214838) Big dripleaf stem remains after breaking a stem or leaf above it
-   [MC-214865](https://bugs.mojang.com/browse/MC-214865) Floating islands world type generates extreme terrain
-   [MC-219155](https://bugs.mojang.com/browse/MC-219155) Fishing line only starts on half distance between the fishing rod and bobber (Apple M1 only)
-   [MC-219840](https://bugs.mojang.com/browse/MC-219840) You cannot unlock the recipe for Mossy Stone Bricks
-   [MC-219842](https://bugs.mojang.com/browse/MC-219842) Recipes for mossy cobblestone and mossy stone bricks aren't grouped
-   [MC-220033](https://bugs.mojang.com/browse/MC-220033) (Parity issue) Hanging Roots can't be waterlogged
-   [MC-221560](https://bugs.mojang.com/browse/MC-221560) Copper/Coal Ore in Deepslate Patches aren't Deepslate Ores
-   [MC-222008](https://bugs.mojang.com/browse/MC-222008) Empty/missing template pool error grammar mistake
-   [MC-222520](https://bugs.mojang.com/browse/MC-222520) Raw and Ore smelting previews aren't grouped together
-   [MC-223055](https://bugs.mojang.com/browse/MC-223055) Amethyst buds and cluster have an unused blockstate
-   [MC-223792](https://bugs.mojang.com/browse/MC-223792) Shrinking world border with center past x/z 29999983 crashes the game

---

Snapshot 21w16a introduces some changes to azaleas and dripstone. On top of that, we've tweaked the textures of raw ores. There are also a few additions to the Caves & Cliffs preview datapack.

## New Features in 21w16a

-   Azalea and Flowering Azalea can now be bonemealed to get an Azalea Trees
-   Added dripstone growth

### Dripstone growth

-   If a stalactite is hanging from a dripstone block with a water source above, it will slowly grow both the stalactite from above and a stalagmite from below
-   Growth speed is random but very slow, a single growth step can take several minecraft days
-   A stalactite will only grow up to 7 blocks long
-   A stalactite will only cause stalagmite growth if the floor or stalagmite below is within 10 blocks
-   If the stalactite tip is inside water it won't drip, and therefore won't trigger any growth
-   If the stalagmite tip is inside water it won't receive drops, and therefore won't be grown by a dripping stalactite. Same thing if there is any fluid between the two tips
-   A stalagmite or stalactite will never grow into a fluid

## Changes in 21w16a

-   Tweaked the texture of raw ores and raw ore blocks

![Snapshot 21w16a Texture Comparison](https://launchercontent.mojang.com/images/snapshot-21w16a-ore-texture-comparison.png) New raw ore textures in snapshot 21w16a. [Click here](https://launchercontent.mojang.com/v2/images/snapshot21w16aoretexturecomparisonfull.png) for a link to the full resolution image.

## Changes to the Caves & Cliffs Preview

Download the updated [datapack here](https://launcher.mojang.com/v1/objects/ebe5698b1f6787e30662691f57511a08587db502/CavesAndCliffsPreview.zip) ![Minecraft Snapshot 21w16a Lava Aquifer](https://launchercontent.mojang.com/images/snapshot-21w16a-carousel.jpg) A lava aquifer in snapshot 21w16a. [Click here](https://launchercontent.mojang.com/v2/images/snapshot21w16acarouselfull.png) for a link to the full resolution image.

-   Aquifers below height 0 will sometimes be lava aquifers instead of water aquifers
-   Ore veins can now spawn underground

### Ore veins

-   Ore veins are large, rare, snake-like underground ore formations
-   Copper veins form above height 0 and are mixed with granite
-   Iron veins form below height 0 and are mixed with tuff

## Technical Changes in 21w16a

-   Users who previously permanently declined server resource packs will now still be shown the pack prompt if the pack is mandatory (instead of being immediately disconnected)
-   The statistic for play time has been renamed to `play_time`
-   There is now a statistic for "Time with World Open" (`total_world_time`) that also includes time when the game was paused

## Bugs fixed in 21w16a

-   [MC-29522](https://bugs.mojang.com/browse/MC-29522) stat.playOneMinute adds a value of 1 every tick
-   [MC-55775](https://bugs.mojang.com/browse/MC-55775) Statistics screen sometimes doesn't show up to date information
-   [MC-111534](https://bugs.mojang.com/browse/MC-111534) The firework rocket use statistic doesn't count rockets used for elytra boosting
-   [MC-117653](https://bugs.mojang.com/browse/MC-117653) Recipes and advancements are not granted while most GUIs are open
-   [MC-136560](https://bugs.mojang.com/browse/MC-136560) minecraft.used:minecraft.elytra not functioning
-   [MC-136681](https://bugs.mojang.com/browse/MC-136681) Debug Stick use statistic increases when not allowed to use it
-   [MC-157116](https://bugs.mojang.com/browse/MC-157116) Food that is plantable counts towards using when right clicked on the ground
-   [MC-190128](https://bugs.mojang.com/browse/MC-190128) Using a flint and steel to ingite TNT is not tracked by the in-game stats
-   [MC-203637](https://bugs.mojang.com/browse/MC-203637) Mobs don't avoid lava cauldrons when pathfinding despite of setting themselves on fire
-   [MC-205236](https://bugs.mojang.com/browse/MC-205236) Frozen State doesn't go away after respawn when on a server
-   [MC-208598](https://bugs.mojang.com/browse/MC-208598) Baby axolotls take damage when touching a solid block from below / eye height is outside of their hitbox
-   [MC-212113](https://bugs.mojang.com/browse/MC-212113) Glow Lichen can spawn underwater whilst not in a cave.
-   [MC-212863](https://bugs.mojang.com/browse/MC-212863) Glow lichen use the same color as vines on maps
-   [MC-213927](https://bugs.mojang.com/browse/MC-213927) Using bone meal on a sapling that is on a moss block consumes bone meal, but doesn't grow into a tree
-   [MC-213998](https://bugs.mojang.com/browse/MC-213998) root\_vines\_head is unused in-game files
-   [MC-214129](https://bugs.mojang.com/browse/MC-214129) Several dirt blocks are not part of the #minecraft:lush\_plants\_replaceable tag
-   [MC-214293](https://bugs.mojang.com/browse/MC-214293) Mobs can spawn on top of azaleas
-   [MC-215270](https://bugs.mojang.com/browse/MC-215270) Moss requires air above a replaceable block to spread
-   [MC-216787](https://bugs.mojang.com/browse/MC-216787) Cobwebs in mineshafts can generate as if supported by chains
-   [MC-217411](https://bugs.mojang.com/browse/MC-217411) Anvils can become damaged when only falling one block
-   [MC-218590](https://bugs.mojang.com/browse/MC-218590) Error message for commands.give.failed.toomanyitems doesn't translate item name
-   [MC-218592](https://bugs.mojang.com/browse/MC-218592) Azalea trees can generate inside of lakes (even completely submerged in water)
-   [MC-218614](https://bugs.mojang.com/browse/MC-218614) Inconsistency: Infested Deepslate can't be placed along axis
-   [MC-218637](https://bugs.mojang.com/browse/MC-218637) Inconsistency: Infested deepslate is not rotated randomly like normal deepslate
-   [MC-219155](https://bugs.mojang.com/browse/MC-219155) Cast fishing line is disconnected from the rod
-   [MC-219211](https://bugs.mojang.com/browse/MC-219211) Two mysterious white pixels can be seen in the upper left corner of the recipe book icon
-   [MC-219851](https://bugs.mojang.com/browse/MC-219851) Applying bone meal to a waterlogged big dripleaf stem creates more waterlogged big dripleaf stems
-   [MC-219903](https://bugs.mojang.com/browse/MC-219903) Silverfish infesting deepslate cause it to rotate
-   [MC-220024](https://bugs.mojang.com/browse/MC-220024) Shader compilation slows or fails the more asterisks are in a multiline comment
-   [MC-220307](https://bugs.mojang.com/browse/MC-220307) TrueType Font glyphs render incorrectly
-   [MC-220641](https://bugs.mojang.com/browse/MC-220641) Loyalty tridents disappear when your inventory is full
-   [MC-220887](https://bugs.mojang.com/browse/MC-220887) Shader includes fail to compile correctly when missing newline at end of file
-   [MC-221560](https://bugs.mojang.com/browse/MC-221560) Copper/Coal Ore in Deepslate Patches aren't Deepslate Ores
-   [MC-221628](https://bugs.mojang.com/browse/MC-221628) Entities don’t stop glowing after losing the glowing effect
-   [MC-221652](https://bugs.mojang.com/browse/MC-221652) Teleport command to player does not work as in previous versions
-   [MC-221655](https://bugs.mojang.com/browse/MC-221655) Glow Squids and Axolotls Spawn in Monuments
-   [MC-222004](https://bugs.mojang.com/browse/MC-222004) Grass block isn't apart of the #dirt block tag
-   [MC-222517](https://bugs.mojang.com/browse/MC-222517) A large amount of slime or honey blocks will crash the game
-   [MC-222684](https://bugs.mojang.com/browse/MC-222684) You cannot grow azalea trees by bonemealing Azalea plants
-   [MC-222778](https://bugs.mojang.com/browse/MC-222778) minecraft.used:minecraft.candle doesn't increase when placing a candle on a cake
-   [MC-223260](https://bugs.mojang.com/browse/MC-223260) Emerald ore does not generate as intended
-   [MC-223553](https://bugs.mojang.com/browse/MC-223553) minecraft.used:minecraft.glow\_ink\_sac doesn't increase when applying a glow ink sac to a sign
-   [MC-223554](https://bugs.mojang.com/browse/MC-223554) minecraft.used:minecraft.ink\_sac doesn't increase when applying an ink sac to a sign
-   [MC-223555](https://bugs.mojang.com/browse/MC-223555) minecraft.used:minecraft.COLOR\_dye doesn't increase when applying a dye to a sign
-   [MC-223557](https://bugs.mojang.com/browse/MC-223557) minecraft.used:minecraft.bucket doesn't increase when taking powder snow, lava, or water from a cauldron using a bucket
-   [MC-223558](https://bugs.mojang.com/browse/MC-223558) minecraft.used:minecraft.glass\_bottle doesn't increase when taking water from a cauldron using a glass bottle
-   [MC-223563](https://bugs.mojang.com/browse/MC-223563) minecraft.used:minecraft.glass\_bottle doesn't increase when collecting honey from a beehive or bee nest
-   [MC-223638](https://bugs.mojang.com/browse/MC-223638) minecraft.used:minecraft.shears doesn't increase when carving a pumpkin
-   [MC-223639](https://bugs.mojang.com/browse/MC-223639) minecraft.used:minecraft.shears doesn't increase when collecting honeycombs from a beehive or bee nest
-   [MC-223756](https://bugs.mojang.com/browse/MC-223756) minecraft.used:minecraft.powder\_snow\_bucket doesn't increase when filling a cauldron with a powder snow bucket
-   [MC-223757](https://bugs.mojang.com/browse/MC-223757) minecraft.used:minecraft.lava\_bucket doesn't increase when filling a cauldron with a lava bucket

---

