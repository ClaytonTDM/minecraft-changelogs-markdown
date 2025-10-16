# Minecraft Snapshot 21w16a

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
-   [MC-213998](https://bugs.mojang.com/browse/MC-213998) root;;_;;vines;;_;;head is unused in-game files
-   [MC-214129](https://bugs.mojang.com/browse/MC-214129) Several dirt blocks are not part of the #minecraft:lush;;_;;plants;;_;;replaceable tag
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
-   [MC-223553](https://bugs.mojang.com/browse/MC-223553) minecraft.used:minecraft.glow;;_;;ink;;_;;sac doesn't increase when applying a glow ink sac to a sign
-   [MC-223554](https://bugs.mojang.com/browse/MC-223554) minecraft.used:minecraft.ink;;_;;sac doesn't increase when applying an ink sac to a sign
-   [MC-223555](https://bugs.mojang.com/browse/MC-223555) minecraft.used:minecraft.COLOR;;_;;dye doesn't increase when applying a dye to a sign
-   [MC-223557](https://bugs.mojang.com/browse/MC-223557) minecraft.used:minecraft.bucket doesn't increase when taking powder snow, lava, or water from a cauldron using a bucket
-   [MC-223558](https://bugs.mojang.com/browse/MC-223558) minecraft.used:minecraft.glass;;_;;bottle doesn't increase when taking water from a cauldron using a glass bottle
-   [MC-223563](https://bugs.mojang.com/browse/MC-223563) minecraft.used:minecraft.glass;;_;;bottle doesn't increase when collecting honey from a beehive or bee nest
-   [MC-223638](https://bugs.mojang.com/browse/MC-223638) minecraft.used:minecraft.shears doesn't increase when carving a pumpkin
-   [MC-223639](https://bugs.mojang.com/browse/MC-223639) minecraft.used:minecraft.shears doesn't increase when collecting honeycombs from a beehive or bee nest
-   [MC-223756](https://bugs.mojang.com/browse/MC-223756) minecraft.used:minecraft.powder;;_;;snow;;_;;bucket doesn't increase when filling a cauldron with a powder snow bucket
-   [MC-223757](https://bugs.mojang.com/browse/MC-223757) minecraft.used:minecraft.lava;;_;;bucket doesn't increase when filling a cauldron with a lava bucket

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

-   [MC-203855](https://bugs.mojang.com/browse/MC-203855) A geode configured;;_;;feature causes a crash when use;;_;;alternate;;_;;layer0;;_;;chance is used with no entries in inner;;_;;placements
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

A new snapshot is ready to be served, although somewhat… raw. Gordon Ramsey would be furious. Please don’t tell him, we don’t want to be called donuts. :(

Most of us have just gotten back from being off for a few days during Easter, so this snapshot is a bit on the smaller side.

## New Features in 21w14a

-   Added Raw Copper, Raw Iron and Raw Gold items
-   Tuff blobs can now be found between heights 0 and 16

### Smeltable Ore Drops

-   Ores that are smeltable now drop raw item forms of the ore instead of the ore block, and these can be smelted just like before
-   This is to prevent cluttering the inventory, and have consistency with Fortune on all ores
-   Ore blocks from old worlds and silk-touched ore blocks will continue to be smeltable

## Changes in 21w14a

-   Fully oxidized copper can now be waxed

## Bugs fixed in 21w14a

-   [MC-203854](https://bugs.mojang.com/browse/MC-203854) Fishing rod texture always looks like it has been cast when in the player's hand
-   [MC-207173](https://bugs.mojang.com/browse/MC-207173) Entering only colons into multiplayer Direct Connection & pressing enter crashes the game
-   [MC-210155](https://bugs.mojang.com/browse/MC-210155) Command block output no longer is displayed immediately after running a command
-   [MC-213665](https://bugs.mojang.com/browse/MC-213665) Crash upon attempting to generate a world with a height of 0 blocks
-   [MC-214287](https://bugs.mojang.com/browse/MC-214287) Crash upon entering a nether portal when logical;;_;;height is set to 0 and min;;_;;y is set to 80 or greater
-   [MC-215120](https://bugs.mojang.com/browse/MC-215120) World-gen datapacks can cause crashes when first generating world
-   [MC-216697](https://bugs.mojang.com/browse/MC-216697) Having 'min;;_;;y' set to lower than -64 causes either a crash or the world not to behave correctly if the height limit wasn't modified
-   [MC-217702](https://bugs.mojang.com/browse/MC-217702) Game crashes (ArrayIndexOutOfBoundsException) during world feature placement / decoration
-   [MC-219849](https://bugs.mojang.com/browse/MC-219849) Fishing doesn't animate or render the rod, line or bobber anymore
-   [MC-220652](https://bugs.mojang.com/browse/MC-220652) IndexOutOfBound exception hard crash when loading a simple custom dimension datapack
-   [MC-221553](https://bugs.mojang.com/browse/MC-221553) The end dimension generates differently than it did previously
-   [MC-221586](https://bugs.mojang.com/browse/MC-221586) Excessive pillager spawning in pillager outposts
-   [MC-221673](https://bugs.mojang.com/browse/MC-221673) Ocean monuments are completely empty

---

Another snapshot hits the streets, and it's dropping some sick bleats. That's right, Goats are leaping into this snapshot!

## New Features in 21w13a

-   Added the goat!
-   Added an accessibility option

### Goat

-   Goats spawn in mountains
-   Goats can scale the sides of mountains with their incredible jumps!
-   Goats can be tempted and bred using wheat
-   Goats are another source of milk!

### Accessibility

Added an alternative solid black background color for the Mojang Studios loading screen, toggleable with the "Monochrome Logo" accessibility option

## Changes in 21w13a

-   Tweaks to Caves
-   Tweaks to Ore Distribution
-   Tweaks to Powdered Snow
-   Dripstone clusters can now be found rarely in normal caves
-   Deepslate blobs can now be found between heights 0 and 16
-   Axolotls and glow squids now spawn in underground water sources
-   Axolotls will now always chase after and attack squids, glow squids, tropical fish, cod, salmon, pufferfish, drowned, guardians, and elder guardians
-   Axolotls now have a 2 minute cooldown after hunting non-hostile targets such as fish, squids, etc.
-   They will prioritise targeting hostile mobs first before hunting.
-   Bees now see Flowering Azalea (and Flowering Azalea Leaves) as flowers
-   Additions to Wandering Trader and Mason trades
-   Additions to chest loot tables

### Cave Tweaks

-   Mineshaft tweak: increased the max length of pillars and chains.
-   Carver tweaks: made carvers less likely to be too flat to walk through.
-   Noise cave tweaks:
    -   Increased likelihood of megacaves (large cheese caves)
    -   Reduced likelihood of toothpick pillars (tall 1-block thin pillars)
    -   Other tweaks to make the cheese caves more varied and interesting.

### Ore Distribution Tweaks

-   Slightly more iron
-   Larger diamond blobs sometimes form

### Powdered Snow

-   Powder snow's durability/hardness was slightly increased
-   Freeze time has decreased to 7 seconds and hurt frequency has decreased to 2 seconds
-   Entities on fire now melt powder snow when colliding
-   Increase vertical movement speed within powder snow
-   Strays, polar bears, and snow golems are now immune to freezing
-   Mobs now shake when they are fully frozen
-   Skeletons converting to strays now only require the 7 seconds it takes for an entity to be fully frozen to begin converting, instead of the 30 seconds it took before
-   Leather horse armor now protects horses from freeze damage
-   Mobs that enjoy the heat (Blazes, Magma Cubes, and Striders) take increased freeze damage

### Trade & Loot Table Additions

-   Added the following trades to Mason:
    -   Will sell 4 Dripstone blocks for 1 emerald
-   Added the following trades to Wandering Trader:
    -   Will sell 2 Pointed Dripstones for 1 emerald
    -   Will sell 2 Rooted Dirt for 1 emerald
    -   Will sell 2 Moss Blocks for 1 emerald
-   Moss blocks can be found in Shipwreck chests
-   Glow Berries can be found in Mineshaft chest minecarts

## Technical Changes in 21w13a

-   Added metric cube of light!
-   Unused parts of code are no longer removed

### Light block

-   Op-only (`/give`) air-like waterloggable block
-   Emits light at level determined by block state
-   Visible and targetable only when item is held (similar to barrier)
-   Right click cycles light level

## Bugs fixed in 21w13a

-   [MC-3366](https://bugs.mojang.com/browse/MC-3366) End portal appears transparent from below
-   [MC-70738](https://bugs.mojang.com/browse/MC-70738) Killing guardian with lava does not give cooked fish
-   [MC-102269](https://bugs.mojang.com/browse/MC-102269) Polar bears drop raw fish instead of cooked fish when killed with fire or lava
-   [MC-108636](https://bugs.mojang.com/browse/MC-108636) There are a number of unused texture files
-   [MC-123587](https://bugs.mojang.com/browse/MC-123587) Kicked from the game when reaching y levels over 30,000,000
-   [MC-124667](https://bugs.mojang.com/browse/MC-124667) Air can be used in custom recipes, causing a crash
-   [MC-136776](https://bugs.mojang.com/browse/MC-136776) Some NBT tags are not kept when fish or axolotl mobs are caught in water buckets
-   [MC-167853](https://bugs.mojang.com/browse/MC-167853) Observer doesn't detect when a grass block changes to dirt if a tree grows on top
-   [MC-174701](https://bugs.mojang.com/browse/MC-174701) Leash knot sound effect plays when loading singleplayer world
-   [MC-187544](https://bugs.mojang.com/browse/MC-187544) 'Cover Me With Diamonds' advancement improperly capitalized
-   [MC-190774](https://bugs.mojang.com/browse/MC-190774) Stonecutter saw spins both ways simultaneously
-   [MC-194183](https://bugs.mojang.com/browse/MC-194183) Some experience points do not go towards Mending repair, even if the Mending gear is not fully repaired
-   [MC-195640](https://bugs.mojang.com/browse/MC-195640) Suspicious stew inedible with full hunger
-   [MC-197073](https://bugs.mojang.com/browse/MC-197073) Turtles laying eggs on red sand produce normal sand particles
-   [MC-199065](https://bugs.mojang.com/browse/MC-199065) Zombies that die while on fire do not drop baked potatoes
-   [MC-199237](https://bugs.mojang.com/browse/MC-199237) Back of ladder is incorrectly mirrored
-   [MC-199239](https://bugs.mojang.com/browse/MC-199239) Vines appear incorrectly mirrored when viewed from behind
-   [MC-199242](https://bugs.mojang.com/browse/MC-199242) Texture planes of crop models appear incorrectly mirrored from behind
-   [MC-201748](https://bugs.mojang.com/browse/MC-201748) Chain model planes are incorrectly mirrored on the rear
-   [MC-201751](https://bugs.mojang.com/browse/MC-201751) Chain section on lanterns is incorrectly mirrored from behind
-   [MC-201753](https://bugs.mojang.com/browse/MC-201753) Sea pickle green top sections do not render correctly from behind
-   [MC-203553](https://bugs.mojang.com/browse/MC-203553) Water bottle doesn't extinguish candles
-   [MC-203605](https://bugs.mojang.com/browse/MC-203605) Lightning rod bottom texture is mapped incorrectly
-   [MC-203617](https://bugs.mojang.com/browse/MC-203617) Can't "Pick Block" cauldrons with liquid or powdered snow inside
-   [MC-203838](https://bugs.mojang.com/browse/MC-203838) Aiming a spyglass with a loaded crossbow in offhand creates weird third person effect
-   [MC-203847](https://bugs.mojang.com/browse/MC-203847) Waterlogged candles can be lit
-   [MC-204133](https://bugs.mojang.com/browse/MC-204133) Candle extinguishing particle appears offset from the candle
-   [MC-204430](https://bugs.mojang.com/browse/MC-204430) Cauldrons filled with water, lava or powder snow cannot be used as a workstation for villagers
-   [MC-205060](https://bugs.mojang.com/browse/MC-205060) Powder snow does not cause underlying grass, mycelium or podzol to appear snowy
-   [MC-205083](https://bugs.mojang.com/browse/MC-205083) Mobs wearing leather boots spin around when walking on powder snow
-   [MC-205106](https://bugs.mojang.com/browse/MC-205106) Mobs that get damaged by powder snow can spawn inside powder snow
-   [MC-205131](https://bugs.mojang.com/browse/MC-205131) Landing on powder snow while wearing leather boots inflicts fall damage on Java, but not on Bedrock
-   [MC-205143](https://bugs.mojang.com/browse/MC-205143) The particles produced when extinguishing a campfire are misplaced
-   [MC-205158](https://bugs.mojang.com/browse/MC-205158) Powder snow inside textures are not correctly mirrored
-   [MC-205169](https://bugs.mojang.com/browse/MC-205169) Mobs don't path find across powder snow blocks when not wandering
-   [MC-205302](https://bugs.mojang.com/browse/MC-205302) Using /setblock to place a structure block defaults to save mode, unlike placing one by hand
-   [MC-205613](https://bugs.mojang.com/browse/MC-205613) Skeletons in powder snow spin when aiming at the player
-   [MC-205885](https://bugs.mojang.com/browse/MC-205885) Endermen holding water, lava or powder snow cauldrons don't drop cauldrons
-   [MC-205914](https://bugs.mojang.com/browse/MC-205914) Placing turtle egg/sea pickle onto turtle egg/sea pickle while sneaking doesn’t place it next to it, although placing candle onto candle does
-   [MC-205918](https://bugs.mojang.com/browse/MC-205918) Experience orb stacks that were used in the mending process lose their experience amount, even if the stack is still larger than one
-   [MC-208075](https://bugs.mojang.com/browse/MC-208075) Copper slabs and stairs are not included in the #minecraft:slabs and #minecraft:stairs tags
-   [MC-208588](https://bugs.mojang.com/browse/MC-208588) Axolotls change color when released from bucket / axolotl entity data isn't stored in the bucket item
-   [MC-208594](https://bugs.mojang.com/browse/MC-208594) Axolotls aren't required for the "Two By Two" advancement
-   [MC-208647](https://bugs.mojang.com/browse/MC-208647) Axolotls don't attack elder guardians
-   [MC-208695](https://bugs.mojang.com/browse/MC-208695) Semi-transparent pixels on axolotl textures
-   [MC-208703](https://bugs.mojang.com/browse/MC-208703) Axolotls don't give regeneration or remove mining fatigue
-   [MC-208745](https://bugs.mojang.com/browse/MC-208745) Explorer maps & filled maps turn blank after entering the nether or end
-   [MC-209371](https://bugs.mojang.com/browse/MC-209371) Can't cut stacks in half in furnace output
-   [MC-212221](https://bugs.mojang.com/browse/MC-212221) Glow item frames are rendered dark when a light source is nearby
-   [MC-212305](https://bugs.mojang.com/browse/MC-212305) Back face of glow lichen is not correctly mirrored from behind
-   [MC-212736](https://bugs.mojang.com/browse/MC-212736) Some world border faces are rendered mirrored, resulting in incorrect corners
-   [MC-213552](https://bugs.mojang.com/browse/MC-213552) Shulker hitbox does not immediately rotate after the shulker visually rotates
-   [MC-213769](https://bugs.mojang.com/browse/MC-213769) Rooted dirt is far from other dirt variants in the Creative inventory
-   [MC-213771](https://bugs.mojang.com/browse/MC-213771) Rooted dirt is in decorations tab
-   [MC-213772](https://bugs.mojang.com/browse/MC-213772) Certain faces of azalea are not culled by other blocks
-   [MC-213777](https://bugs.mojang.com/browse/MC-213777) Azalea and flowering azalea z-fight when placed next to blocks
-   [MC-213789](https://bugs.mojang.com/browse/MC-213789) Water behaves as if moss blocks were air
-   [MC-213815](https://bugs.mojang.com/browse/MC-213815) Grass, ferns, flowers, bushes, saplings and bamboo cannot be placed on top of rooted dirt
-   [MC-213837](https://bugs.mojang.com/browse/MC-213837) Can't pick block big dripleaf stem
-   [MC-213841](https://bugs.mojang.com/browse/MC-213841) Signs, banners, paintings & item frames cannot be placed on moss
-   [MC-213860](https://bugs.mojang.com/browse/MC-213860) Farmland/dirt path don't convert to dirt when moss is placed above
-   [MC-213877](https://bugs.mojang.com/browse/MC-213877) Cannot turn Rooted Dirt into a Dirt Path
-   [MC-213878](https://bugs.mojang.com/browse/MC-213878) Using bone meal on a small dripleaf shows breaking particles
-   [MC-213899](https://bugs.mojang.com/browse/MC-213899) Big Dripleaf can be rotated incorrectly by breaking and replacing it
-   [MC-213907](https://bugs.mojang.com/browse/MC-213907) Skeletons don't have a shaking animation while converting to strays
-   [MC-213958](https://bugs.mojang.com/browse/MC-213958) Azalea bushes connect to walls and fences
-   [MC-214049](https://bugs.mojang.com/browse/MC-214049) Mining rooted dirt is slightly faster than mining other dirt blocks
-   [MC-214073](https://bugs.mojang.com/browse/MC-214073) The azalea's side textures are partially cut off
-   [MC-214097](https://bugs.mojang.com/browse/MC-214097) Cake cannot be placed on top of a moss block
-   [MC-214135](https://bugs.mojang.com/browse/MC-214135) Converted moss blocks do not update redstone
-   [MC-214181](https://bugs.mojang.com/browse/MC-214181) Rooted dirt cannot be picked up by endermen
-   [MC-214374](https://bugs.mojang.com/browse/MC-214374) Redstone doesn't connect vertically on moss blocks
-   [MC-214586](https://bugs.mojang.com/browse/MC-214586) Rooted Dirt has no assigned tool
-   [MC-214589](https://bugs.mojang.com/browse/MC-214589) End gateway exit portals can be set to high coordinates, kicking the player
-   [MC-214639](https://bugs.mojang.com/browse/MC-214639) Rooted dirt is not randomly rotated
-   [MC-214693](https://bugs.mojang.com/browse/MC-214693) Tripwire texture is not mirrored correctly from behind
-   [MC-214694](https://bugs.mojang.com/browse/MC-214694) Tripwire which is part of a tripwire hook is not mirrored correctly from behind
-   [MC-214695](https://bugs.mojang.com/browse/MC-214695) Big dripleaf texture mirrored incorrectly from underneath
-   [MC-214696](https://bugs.mojang.com/browse/MC-214696) Small dripleaf texture mirrored incorrectly from underneath
-   [MC-214698](https://bugs.mojang.com/browse/MC-214698) Azalea top texture is mirrored incorrectly
-   [MC-214818](https://bugs.mojang.com/browse/MC-214818) Waterlogged pointed stalagmites don't drop when their support block is broken
-   [MC-214858](https://bugs.mojang.com/browse/MC-214858) Powered big dripleaf play tilting sounds when blocks are changed nearby
-   [MC-214879](https://bugs.mojang.com/browse/MC-214879) Selecting nothing and pressing Ctrl+C clears clipboard
-   [MC-214901](https://bugs.mojang.com/browse/MC-214901) Rain passes through moss blocks
-   [MC-214965](https://bugs.mojang.com/browse/MC-214965) Maximum building height is 319, but warning message says 320
-   [MC-216820](https://bugs.mojang.com/browse/MC-216820) Cobbled Deepslate Slab uses the stone sounds instead of the deepslate sounds
-   [MC-217749](https://bugs.mojang.com/browse/MC-217749) Small Dripleaf can't be placed on Rooted Dirt while waterlogged
-   [MC-218888](https://bugs.mojang.com/browse/MC-218888) Shift Clicking items into inventory prevents the relevant advancement from triggering
-   [MC-219054](https://bugs.mojang.com/browse/MC-219054) Can type text into anvil text field without putting an item in it, preventing you from closing the UI with E
-   [MC-219103](https://bugs.mojang.com/browse/MC-219103) The eyes of some entities can be seen through powder snow/lava
-   [MC-219203](https://bugs.mojang.com/browse/MC-219203) Mineshaft support legs can generate in lava
-   [MC-219240](https://bugs.mojang.com/browse/MC-219240) Inconsistency: cobbled deepslate does not take longer to mine than deepslate
-   [MC-219635](https://bugs.mojang.com/browse/MC-219635) There is no sound when defrosting from fire/lava (vanilla parity)
-   [MC-219740](https://bugs.mojang.com/browse/MC-219740) Spyglass overlay broken while in water with fast graphics
-   [MC-219850](https://bugs.mojang.com/browse/MC-219850) There is no sound or subtitle for applying/removing/scraping wax or oxidation
-   [MC-219868](https://bugs.mojang.com/browse/MC-219868) Opening a UI darkens the background less than it used to
-   [MC-219906](https://bugs.mojang.com/browse/MC-219906) Minecraft crashes when spectating an entity submerged in water
-   [MC-219920](https://bugs.mojang.com/browse/MC-219920) Amethyst Blocks can no longer be gained by mining them
-   [MC-219933](https://bugs.mojang.com/browse/MC-219933) Shulker heads do not flash red when taking damage / when killed
-   [MC-219937](https://bugs.mojang.com/browse/MC-219937) Parity issue: Clouds are at y=192
-   [MC-219973](https://bugs.mojang.com/browse/MC-219973) Hanging Roots takes about a second to be mined
-   [MC-219974](https://bugs.mojang.com/browse/MC-219974) Big Dripleaf takes about a second to be mined
-   [MC-220068](https://bugs.mojang.com/browse/MC-220068) Experience orbs are no longer affected by the fog from powder snow/lava
-   [MC-220069](https://bugs.mojang.com/browse/MC-220069) Wither/creeper armor is no longer affected by the fog from powder snow/lava
-   [MC-220070](https://bugs.mojang.com/browse/MC-220070) Lightning is not affected by the fog from powder snow/lava
-   [MC-220157](https://bugs.mojang.com/browse/MC-220157) String is not affected by light levels
-   [MC-220174](https://bugs.mojang.com/browse/MC-220174) With graphics set to Fabulous!, blocks such as honey, slime and stained glass appear lit up in third person mode
-   [MC-220269](https://bugs.mojang.com/browse/MC-220269) Shader texture coordinate wrapping mode causes screen effects like glowing to wrap where they shouldn't
-   [MC-220339](https://bugs.mojang.com/browse/MC-220339) Beacon beam is not affected by the fog from powder snow/lava
-   [MC-221146](https://bugs.mojang.com/browse/MC-221146) Water fog still very subtle making water appear too clear in the distance

---

