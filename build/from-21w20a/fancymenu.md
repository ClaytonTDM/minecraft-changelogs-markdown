# Minecraft Snapshot 21w20a

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
-   [MC-205680](https://bugs.mojang.com/browse/MC-205680) minecraft:location;;_;;check predicate floating point imprecision
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
-   [MC-216214](https://bugs.mojang.com/browse/MC-216214) netherrack;;_;;replace;;_;;blobs with water as target crashes the game
-   [MC-216980](https://bugs.mojang.com/browse/MC-216980) Comma splices in two source strings (EN;;_;;US)
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
-   [MC-225347](https://bugs.mojang.com/browse/MC-225347) cave;;_;;vines;;_;;plant isn't in #bee;;_;;growables
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
-   [MC-223907](https://bugs.mojang.com/browse/MC-223907) Moss block appears in the #lush;;_;;ground;;_;;replaceable.json twice
-   [MC-224322](https://bugs.mojang.com/browse/MC-224322) Powder snow can create ghost blocks in creative mode
-   [MC-224325](https://bugs.mojang.com/browse/MC-224325) minecraft.used:minecraft.COMPOSTABLE;;_;;ITEM doesn't increase when placing an item into a composter
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

