# Minecraft Snapshot 21w18a

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

In today’s snapshot, we’re making a few needed changes that directly relate to our [recent announcement](https://www.minecraft.net/article/a-caves---cliffs-announcement). If you haven’t yet read it, we strongly recommend you do. You can also check out [this Caves & Cliffs video](https://youtu.be/6YgKUZnUyak) from Agnes and Henrik to learn more about our plans for the update.

Even though some features will be released later than we’d planned, you can still try them out through a separate data pack. More information, as well as our latest tweaks, can be found here below.

## Caves & Cliffs World Generation

The riskier and technically more complex world generation changes for the Caves & Cliffs update will be shipped in a later update and have been switched off in this snapshot. This means:

-   World height has been switched back to the 1.16 levels
-   Noise caves and aquifers have been switched off
-   Cave and ravine carvers have been returned to their old settings
-   Crack carvers have been switched off
-   Ore distribution has been returned to the 1.16 setup
-   Copper now generates between the bottom of the world and height 192, being most common around height 96
-   Tuff now generates in blobs between heights 0 and 16
-   Worlds created in snapshot 21w05b or any earlier version can now once again be opened
-   Worlds created in any version between snapshot 21w06a and 21w14a can no longer be opened

### The Caves & Cliffs Prototype Data Pack

You can still try out the world generation for the later update using a datapack which activates the changes as an experimental custom world:

-   [Download the data pack](https://launcher.mojang.com/v1/objects/643b1f8f7f71c74ffc913e8572f52fd5bca88282/CavesAndCliffsPreview.zip)
-   Launch the game, go to the "Create New World" screen, and click the “Data Packs” button
-   Drag the downloaded zip file onto the Minecraft window
-   The game will ask you if you want to add the data pack – click “Yes”
-   Click the play arrow on the data pack that just appeared in the list – this will move it to the list on the right-hand side of the screen
-   Click the "Done" button and continue creating your world as normal

Keep in mind that the world you create with the data pack will be flagged as experimental by the game, and such worlds are not guaranteed to work in future versions. Also, please note that you can’t add data packs that change the world generation to existing worlds, so you must create a new world to access the experimental features.

## New Features in 21w15a

-   Goats will ram anything that moves... and also armor stands

## Changes in 21w15a

-   A crinkly, crunchy sound now plays when Bone Meal is used
-   Reordered some blocks in the Building Blocks Tab in Creative Menu
-   Goats will avoid walking on powder snow
-   Creepers know not to mess with goats
-   The main menu background has been updated
-   Tweaked the textures of raw ore items
-   Just like other ore materials, you can craft a compact version with raw ore items in order to save inventory space

![Minecraft Snapshot 21w15a Texture Comparison](https://launchercontent.mojang.com/images/snapshot-21w15a-ore-texture-comparison.png) New raw ore textures in snapshot 21w15a. [Click here](https://launchercontent.mojang.com/v2/images/snapshot21w15aoretexturecomparisonfull.png) for a link to the full resolution image.

### Building Blocks tab

-   All ores have been reordered to be in the same location in the creative inventory.
-   Compact forms of raw and refined underground materials have been reordered.

## Technical Changes in 21w15a

-   Added the Marker entity
-   Added `/debug function`
-   `selector` and `nbt` chat components can now configure separators between elements
-   Servers can now customize a message to display when prompting players about custom resource packs

### Markers

Markers are a new type of entity meant for custom use cases like map making and data packs.

-   Only exist on the server side, are never sent to clients
-   Do not do any updates of their own
-   Have a `data` compound field that can contain any data

### `/debug function`

New debug subcommand executes command with same syntax as function

-   Every executed command, message (even if it would be normally invisible), result or error is stored to file
-   Cannot be run from inside functions

### Chat component separators

-   Components that print lists of names, like `selector` or `nbt` can now override separator (`", "` by default) with `separator` element
-   Examples:
    -   `{"selector": "@e[type=chicken]", "separator": "|"}`
    -   `{"nbt": "CustomName", "entity": "@e[type=chicken]", "interpret": true, "separator": {"text": "*", "color": "red"}}`

### Custom server resource packs

When `require-resource-pack` is used in `server.properties`, there's now an option for servers to add a custom message.

-   A dedicated server can configure additional message to be shown on resource pack prompt (`resource-pack-prompt` in `server.properties`, expects chat component syntax, can contain multiple lines)

## Bugs fixed in 21w15a

-   [MC-203855](https://bugs.mojang.com/browse/MC-203855) A geode configured\_feature causes a crash when use\_alternate\_layer0\_chance is used with no entries in inner\_placements
-   [MC-212145](https://bugs.mojang.com/browse/MC-212145) Summoning Glow Lichen using /setblock doesn't place any lichen but creates light until the block is updated
-   [MC-212273](https://bugs.mojang.com/browse/MC-212273) Glow Lichen doesn't render when being held by an Enderman
-   [MC-215836](https://bugs.mojang.com/browse/MC-215836) Deepslate uses the same color as stone on maps
-   [MC-215844](https://bugs.mojang.com/browse/MC-215844) Stone still generates around lava pools at low levels
-   [MC-216588](https://bugs.mojang.com/browse/MC-216588) Feature placement - java.lang.IllegalArgumentException: bound must be positive
-   [MC-218588](https://bugs.mojang.com/browse/MC-218588) Cracked deepslate bricks & tiles are in the incorrect position in the creative inventory
-   [MC-218698](https://bugs.mojang.com/browse/MC-218698) Infested deepslate makes the old "stone" sounds
-   [MC-218705](https://bugs.mojang.com/browse/MC-218705) Deepslate emerald ore is separated from other deepslate ores in the creative inventory
-   [MC-218749](https://bugs.mojang.com/browse/MC-218749) Deepslate coal ore doesn't drop experience
-   [MC-218944](https://bugs.mojang.com/browse/MC-218944) Copper ore and deepslate copper ore have inconsistent textures
-   [MC-219972](https://bugs.mojang.com/browse/MC-219972) Deepslate gold ore has an inconsistent pixel
-   [MC-221501](https://bugs.mojang.com/browse/MC-221501) Water splash potions don't give the axolotl 1.5 minutes of moisture
-   [MC-221718](https://bugs.mojang.com/browse/MC-221718) Lava fog repeatedly fails to render each block at certain y-levels
-   [MC-221798](https://bugs.mojang.com/browse/MC-221798) Blindness doesn't render correctly
-   [MC-222104](https://bugs.mojang.com/browse/MC-222104) Beacon beam fog is incorrectly computed
-   [MC-222266](https://bugs.mojang.com/browse/MC-222266) Goats don't attack
-   [MC-222522](https://bugs.mojang.com/browse/MC-222522) Nether Gold Ore is no longer smeltable

---

