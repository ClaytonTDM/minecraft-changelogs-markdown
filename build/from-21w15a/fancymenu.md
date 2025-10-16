# Minecraft Snapshot 21w15a

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

# Minecraft Snapshot 21w14a

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

# Minecraft Snapshot 21w13a

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

# Minecraft Snapshot 21w11a

An absolutely shocking snapshot arrives! This snapshot adds some new functionality to Copper, some general tweaks, a fancy new way of getting performance metrics, and a bunch of bugfixes.

Happy mining!

## New Features in 21w11a

-   Lightning rods can now, for the very first time ever, be waterlogged
-   New functionality for applying and removing wax from copper
-   Bonemealing rooted dirt now grows hanging roots underneath

### Waxing Copper and Oxidization

-   Right click with honeycomb on copper blocks to wax them
-   Use honeycomb in a dispenser to wax copper blocks
-   Axes can scrape off wax and oxidation of copper blocks
-   Lightning strike hitting copper will clean its oxidation

## Changes in 21w11a

-   Waxed copper blocks can be crafted into 4 copper ingots
-   Tweaked the cave sizes
-   Slightly increased the frequency of diamond ore blobs
-   Hanging roots block now renders randomly offset
-   Breaking a Big Dripleaf stem now drops a Big Dripleaf block
-   Moss blocks can be crafted with cobblestone or stone bricks to make the mossy versions of those blocks
-   The facing direction of Small Dripleaf blocks is now determined by which direction the player is facing when placing it
-   Fully-grown Amethyst Clusters now drop 4 Amethyst Shards (or more with Fortune) when mined with a pickaxe, and drop 2 Amethyst Shards when broken by hand, piston, or other means

## Technical Changes in 21w11a

-   Added F3+L shortcut to generate and persist performance metrics from in-game

### In-game client metrics reporting

Pressing F3+L while in the game will start a recording for 10 seconds capturing metrics such as tick durations, used heap sizes and other more detailed stats. These will be saved to a zip file in `debug/profiling/<yyyy-MM-dd_HH.mm.ss>.zip` and could be used for performance regression analysis if included in bug reports.

The exact metrics, output format and names are susceptible to change between versions, and our plan is to continue iterating on which metrics to capture.

## Fixed Bugs in 21w11a

-   [MC-1483](https://bugs.mojang.com/browse/MC-1483) Snow covered grass/podzol/mycelium block side texture does not match original block
-   [MC-12363](https://bugs.mojang.com/browse/MC-12363) Lava / water / powder snow bucket desync when using it while rapidly turning
-   [MC-70850](https://bugs.mojang.com/browse/MC-70850) False negatives during occlusion culling
-   [MC-71530](https://bugs.mojang.com/browse/MC-71530) Spectators can't see through lava
-   [MC-145501](https://bugs.mojang.com/browse/MC-145501) Librarian and zombie librarian torso top texture is incorrect
-   [MC-150054](https://bugs.mojang.com/browse/MC-150054) Spectral arrow texture on item and entity aren't consistent
-   [MC-150784](https://bugs.mojang.com/browse/MC-150784) Brewing Stand bottle outline incorrect
-   [MC-154006](https://bugs.mojang.com/browse/MC-154006) Overworld wood signs use the outdated wood texture on all sides
-   [MC-160195](https://bugs.mojang.com/browse/MC-160195) Jungle door inventory texture is outdated
-   [MC-160388](https://bugs.mojang.com/browse/MC-160388) Painting back texture has not been updated with the texture update
-   [MC-195806](https://bugs.mojang.com/browse/MC-195806) Smoker's top and bottom textures have inconsistently colored pixels
-   [MC-197561](https://bugs.mojang.com/browse/MC-197561) Carved pumpkins and jack o'lanterns create swastikas
-   [MC-197883](https://bugs.mojang.com/browse/MC-197883) Jigsaw Structures causing DataFixer spam
-   [MC-198805](https://bugs.mojang.com/browse/MC-198805) Floating pixel in the tailfin of a guardian/elder guardian
-   [MC-202760](https://bugs.mojang.com/browse/MC-202760) Area effect cloud does not enforce a maximum radius
-   [MC-203554](https://bugs.mojang.com/browse/MC-203554) block.amethyst;;_;;block.chime has no subtitle
-   [MC-203561](https://bugs.mojang.com/browse/MC-203561) Amethyst crystal cluster drops items when block is moved directly by a piston without actually breaking the block
-   [MC-203623](https://bugs.mojang.com/browse/MC-203623) Inconsistency: Breaking amethyst crystals with hands doesn't drop the item, but breaking the block they are placed on drops them
-   [MC-203676](https://bugs.mojang.com/browse/MC-203676) Tinted Glass suffocates entities inside of it
-   [MC-203753](https://bugs.mojang.com/browse/MC-203753) Spyglass use statistic never increases
-   [MC-203918](https://bugs.mojang.com/browse/MC-203918) Mobs can spawn on tinted glass
-   [MC-204016](https://bugs.mojang.com/browse/MC-204016) When filling a lava cauldron with lava, the lava is placed on the ground, not in the cauldron. This also affects powder snow.
-   [MC-204862](https://bugs.mojang.com/browse/MC-204862) Tinted glass is not included in the impermeable tag
-   [MC-205913](https://bugs.mojang.com/browse/MC-205913) Lightning rod can spawn skeleton horses with skeletons
-   [MC-206787](https://bugs.mojang.com/browse/MC-206787) World Border is rendered upside down
-   [MC-207557](https://bugs.mojang.com/browse/MC-207557) Frozen hearts in hardcore mode look identical to frozen hearts in survival mode
-   [MC-211513](https://bugs.mojang.com/browse/MC-211513) Trident returning to owner not in the same world can cause permanent player kick
-   [MC-212123](https://bugs.mojang.com/browse/MC-212123) Player lighting is inconsistent in the inventory and appears darker on the front
-   [MC-212226](https://bugs.mojang.com/browse/MC-212226) Bone Meal can still be used on a Glow Lichen when it is unable to grow
-   [MC-212410](https://bugs.mojang.com/browse/MC-212410) Cannot compost glow lichen
-   [MC-213743](https://bugs.mojang.com/browse/MC-213743) Spectators can't see through powder snow
-   [MC-213764](https://bugs.mojang.com/browse/MC-213764) Removing the block supporting a spore blossom allows the spore blossom to float
-   [MC-213765](https://bugs.mojang.com/browse/MC-213765) Cave vine blocks are inconsistent in ID from other similar blocks
-   [MC-213768](https://bugs.mojang.com/browse/MC-213768) Removing the support block for hanging roots allows it to float
-   [MC-213778](https://bugs.mojang.com/browse/MC-213778) Cave vines cannot be climbed
-   [MC-213782](https://bugs.mojang.com/browse/MC-213782) Cave vines do not slow you down like other vines
-   [MC-213798](https://bugs.mojang.com/browse/MC-213798) Cave vines head and body emit different light levels
-   [MC-213886](https://bugs.mojang.com/browse/MC-213886) Bone meal cannot be used on dripleaf stems
-   [MC-213911](https://bugs.mojang.com/browse/MC-213911) Cave vines body and cave vines head share the same name
-   [MC-213980](https://bugs.mojang.com/browse/MC-213980) Moss appropriate tool is axe rather than hoe
-   [MC-214568](https://bugs.mojang.com/browse/MC-214568) Setting a lectern on fire causes z-fighting
-   [MC-215036](https://bugs.mojang.com/browse/MC-215036) Snow layers in "Snowy Kingdom" superflat preset generate 64 blocks above the ground
-   [MC-215384](https://bugs.mojang.com/browse/MC-215384) Azaleas cannot be used as a fuel
-   [MC-216134](https://bugs.mojang.com/browse/MC-216134) Gilded blackstone texture does not match the new side texture of blackstone
-   [MC-216184](https://bugs.mojang.com/browse/MC-216184) Player takes no fall damage on blocks above y=316
-   [MC-216227](https://bugs.mojang.com/browse/MC-216227) Sugar cane item texture is no longer accurate from 13w36a forward
-   [MC-216737](https://bugs.mojang.com/browse/MC-216737) When replacing tuff, ores still generate with a "stone" background below y=0
-   [MC-216945](https://bugs.mojang.com/browse/MC-216945) Teams become dysfunctional when any entity leaves the team
-   [MC-216965](https://bugs.mojang.com/browse/MC-216965) Flat "slices" of terrain generating in cracks
-   [MC-217303](https://bugs.mojang.com/browse/MC-217303) Potential optimization target in DepthBasedReplacingBaseStoneSource
-   [MC-217546](https://bugs.mojang.com/browse/MC-217546) stat.fallOneCm is not updated when falling onto a block above y=316
-   [MC-217802](https://bugs.mojang.com/browse/MC-217802) Some blocks generate at wrong Y height in a superflat world
-   [MC-218587](https://bugs.mojang.com/browse/MC-218587) Lightning rod still can't be waterlogged
-   [MC-218594](https://bugs.mojang.com/browse/MC-218594) Debug chunk borders don't render properly
-   [MC-218596](https://bugs.mojang.com/browse/MC-218596) Debug pie is blacked out
-   [MC-218597](https://bugs.mojang.com/browse/MC-218597) Water has no fog anymore
-   [MC-218603](https://bugs.mojang.com/browse/MC-218603) Screen turns dark grey when switching dimension
-   [MC-218604](https://bugs.mojang.com/browse/MC-218604) Hanging roots can generate hanging on other hanging roots, making them float
-   [MC-218609](https://bugs.mojang.com/browse/MC-218609) Mipmapping causes some block faces to become too dark
-   [MC-218610](https://bugs.mojang.com/browse/MC-218610) Banners are unimpacted by light levels
-   [MC-218626](https://bugs.mojang.com/browse/MC-218626) Cannot enchant items
-   [MC-218635](https://bugs.mojang.com/browse/MC-218635) With fast graphics, the freezing overlay renders black, and covers the whole screen black in first person
-   [MC-218640](https://bugs.mojang.com/browse/MC-218640) Broken spyglass overlay on fast graphics
-   [MC-218641](https://bugs.mojang.com/browse/MC-218641) Red vignette shown when outside the world border is too intense
-   [MC-218645](https://bugs.mojang.com/browse/MC-218645) The carved pumpkin overlay turns the screen completely black when using fast graphics
-   [MC-218652](https://bugs.mojang.com/browse/MC-218652) The green nausea overlay no longer renders
-   [MC-218653](https://bugs.mojang.com/browse/MC-218653) Glowing effect no longer changes to team color
-   [MC-218655](https://bugs.mojang.com/browse/MC-218655) Floating water generates excessively in lush caves
-   [MC-218660](https://bugs.mojang.com/browse/MC-218660) The nether portal overlay no longer renders, whilst using fast graphics
-   [MC-218695](https://bugs.mojang.com/browse/MC-218695) Shulkers do not flash red when hurt or killed
-   [MC-218712](https://bugs.mojang.com/browse/MC-218712) Debug pie has purple box when moving an enchanted item
-   [MC-218713](https://bugs.mojang.com/browse/MC-218713) Right clicking to open alternate recipes does not show the recipes
-   [MC-218729](https://bugs.mojang.com/browse/MC-218729) Noise cave entrances cause unnatural, smooth edges in terrain
-   [MC-218734](https://bugs.mojang.com/browse/MC-218734) Caves generate with very blocky areas
-   [MC-218748](https://bugs.mojang.com/browse/MC-218748) At sunset, a blue line appears in the northern and southern skies
-   [MC-218753](https://bugs.mojang.com/browse/MC-218753) Ambient occlusion of the player seen in the survival inventory has changed
-   [MC-218765](https://bugs.mojang.com/browse/MC-218765) Glowing effect no longer renders around translucent pixels
-   [MC-218793](https://bugs.mojang.com/browse/MC-218793) Two white lines appear on the Mojang loading screen
-   [MC-218817](https://bugs.mojang.com/browse/MC-218817) Cave Vines can generate without supporting blocks
-   [MC-218825](https://bugs.mojang.com/browse/MC-218825) M1 ARM Macs crash when using Fabulous Graphics mode as was the case in older versions, but no lack of support warning is shown
-   [MC-218830](https://bugs.mojang.com/browse/MC-218830) World border is white
-   [MC-218834](https://bugs.mojang.com/browse/MC-218834) You can see block hitboxes very clearly whilst in powder snow/lava
-   [MC-218845](https://bugs.mojang.com/browse/MC-218845) Mojang logo screen flashes blue before changing to red
-   [MC-218852](https://bugs.mojang.com/browse/MC-218852) World border is occasionally shown as a solid color upon being loaded
-   [MC-218877](https://bugs.mojang.com/browse/MC-218877) The red flash when a mob is hurt/killed appears to be slightly dimmed
-   [MC-218881](https://bugs.mojang.com/browse/MC-218881) When selecting text in the end, the sky gets highlighted
-   [MC-218911](https://bugs.mojang.com/browse/MC-218911) The background of hover-event text becomes blue when text is selected in an anvil or chat
-   [MC-218945](https://bugs.mojang.com/browse/MC-218945) Spyglass has a gradient effect while freezing
-   [MC-218979](https://bugs.mojang.com/browse/MC-218979) Cave ceilings and floors sometimes too flat or blocky
-   [MC-218988](https://bugs.mojang.com/browse/MC-218988) Fire is rendered dark in the player/horse/llama UI
-   [MC-218990](https://bugs.mojang.com/browse/MC-218990) Transparency buffers start with blue background instead of empty background
-   [MC-219002](https://bugs.mojang.com/browse/MC-219002) The wither's wither armor has a blue aura around it
-   [MC-219006](https://bugs.mojang.com/browse/MC-219006) The background opacity of subtitles and chat, are affected by a potion effect UI fading out
-   [MC-219014](https://bugs.mojang.com/browse/MC-219014) Charged creeper layer makes clouds and entities invisible
-   [MC-219036](https://bugs.mojang.com/browse/MC-219036) World border is shown as a solid color when picking up items or experience orbs
-   [MC-219039](https://bugs.mojang.com/browse/MC-219039) World border does not render when below the world
-   [MC-219049](https://bugs.mojang.com/browse/MC-219049) Reloading resource packs no longer shows the progress bar while the transparent background is shown
-   [MC-219105](https://bugs.mojang.com/browse/MC-219105) Entity hitboxes can be seen whilst inside of powder snow/lava
-   [MC-219108](https://bugs.mojang.com/browse/MC-219108) Chat scroll bar is offset
-   [MC-219111](https://bugs.mojang.com/browse/MC-219111) Social interactions scroll bar appears broken
-   [MC-219126](https://bugs.mojang.com/browse/MC-219126) Xray with spyglass
-   [MC-219155](https://bugs.mojang.com/browse/MC-219155) Cast fishing line is disconnected from the rod
-   [MC-219180](https://bugs.mojang.com/browse/MC-219180) Slime blocks, honey blocks, stained glass, and ice are fully lit when moved by pistons
-   [MC-219208](https://bugs.mojang.com/browse/MC-219208) Xray using enchanted items
-   [MC-219212](https://bugs.mojang.com/browse/MC-219212) Entity shadows can be seen whilst inside of powder snow/lava
-   [MC-219224](https://bugs.mojang.com/browse/MC-219224) The background opacity of command syntax help is affected when highlighting text
-   [MC-219278](https://bugs.mojang.com/browse/MC-219278) Being inside of a block no longer shows the block texture
-   [MC-219281](https://bugs.mojang.com/browse/MC-219281) Dying ender dragon is rendered too bright
-   [MC-219392](https://bugs.mojang.com/browse/MC-219392) Lead/fishing line is no longer affected by the fog from powder snow/lava
-   [MC-219597](https://bugs.mojang.com/browse/MC-219597) End portal and end gateway textures expand as the player travels further from the block

---

