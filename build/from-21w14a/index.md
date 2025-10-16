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
-   [MC-214287](https://bugs.mojang.com/browse/MC-214287) Crash upon entering a nether portal when logical\_height is set to 0 and min\_y is set to 80 or greater
-   [MC-215120](https://bugs.mojang.com/browse/MC-215120) World-gen datapacks can cause crashes when first generating world
-   [MC-216697](https://bugs.mojang.com/browse/MC-216697) Having 'min\_y' set to lower than -64 causes either a crash or the world not to behave correctly if the height limit wasn't modified
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
-   [MC-203554](https://bugs.mojang.com/browse/MC-203554) block.amethyst\_block.chime has no subtitle
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

# Minecraft Snapshot 21w10a

A truly fabulous snapshot enters the arena! This snapshot brings fundamental changes to our rendering pipeline with the introduction of the brand new tech that is OpenGL Core 3.2. On top of that, we're finally introducing the Lush Caves biome. However, as with the Dripstone Caves, this is only available through creating a custom world.

There's an important note about this snapshot for those of you with older computers: With the introduction of OpenGL Core 3.2 there is a chance Minecraft Java will no longer run on computers that do not meet the [minimum system requirements](https://help.minecraft.net/hc/en-us/articles/360035131371-Minecraft-Java-Edition-system-requirements-). Computers that meet the [minimum system requirements](https://help.minecraft.net/hc/en-us/articles/360035131371-Minecraft-Java-Edition-system-requirements-) should not be affected.

## New Features in 21w10a

-   Added Lush Caves underground biome!
-   Added Cracked Deepslate Bricks and Cracked Deepslate Tiles
-   There is now an Infested variant of Deepslate found in the underground
-   While they will not generate in the world by default, Deepslate versions of copper, emerald and coal ores have been added for use by creators of maps and data packs

### Lush caves biome

The Lush Caves underground biome now exists for use in single-biome worlds. It does not yet generate in other world types.

-   Moss covers the floors and ceilings
-   Spore Blossoms grow from the ceiling and drip particles
-   Contains clay pools with dripleaf plants grow out of them
-   Contains azalea bushes and flowering azalea bushes
-   The azalea tree loves to have its roots in lush caves, so if you find an azalea tree (either overground or in a cave) you know there is a lush cave beneath you
-   Cave vines with glow berries grow from the ceiling and light up the caves

## Changes in 21w10a

-   Cobbled Deepslate can now be smelted into Deepslate.
-   Deepslate can now be placed along any axis
-   Lightning rods can now be waterlogged
-   Fossils in the deepest part of the underground generate with deepslate diamond ore instead of coal ore
-   Some ore textures have been updated

![Minecraft Snapshot 21w10a texture comparison (cropped)](https://launchercontent.mojang.com/images/snapshot-21w10a-texture-comparison.jpg)

Ore texture changes in snapshot 21w10a. [Click here](https://launchercontent.mojang.com/v2/images/snapshot21w10atexturecomparisonfullresolution.jpg) for a link to the full resolution image.

![Minecraft Snapshot 21w10a texture comparison 2 (cropped)](https://launchercontent.mojang.com/images/snapshot-21w10a-texture-comparison2.jpg)

New textures for emerald, coal, and copper in Deepslate. [Click here](https://launchercontent.mojang.com/v2/images/snapshot21w10atexturecomparison2fullresolution.jpg) for a link to the full resolution image.

### Ore distribution

Overworld ore generation has been tweaked.

-   More emeralds in mountains
-   More lapis
-   Less copper, gold, and redstone
-   Smaller diamond blobs, but slightly more frequent. Less diamond ore overall though
-   Less iron, and it generates lower down
-   Reduced air exposure for coal

![Minecraft Snapshot 21w10a ores distribution (cropped)](https://launchercontent.mojang.com/images/snapshot-21w10a-ores-distribution-cropped.jpg)

Ore distribution in snapshot 21w10a. [Click here](https://launchercontent.mojang.com/v2/images/snapshot21w10aoredistributionfull.jpg) for a link to the full resolution image.

## Technical Changes in 21w10a

-   The game now runs using OpenGL 3.2 core profile
-   The maximum size that slimes can be summoned with is now 128
-   The `give` command can only give up to 100 stacks of items at a time (e.g. 6400 stone or 100 iron swords)

### OpenGL

Rendering is now using OpenGL 3.2 core profile. All fixed function rendering has been replaced with shader based rendering.

#### Shaders

Shaders are now included for all supported render states. Any shader except for the `blit` shader can also be replaced in resource packs. For now replacing these shaders is **not officially supported** and the way it works may change in the future.

The current rendering engine uses a system similar to the post processing shader pipeline. There are some differences between both system that cater to the slightly different requirements.

## Bugs fixed in 21w10a

-   [MC-29318](https://bugs.mojang.com/browse/MC-29318) Client misses inventory updates while player is manipulating items causes invisible items
-   [MC-84121](https://bugs.mojang.com/browse/MC-84121) Shape of glow effect is based on mob's base layer
-   [MC-87019](https://bugs.mojang.com/browse/MC-87019) Only visible slots are updated clientside when you are inside an inventory
-   [MC-154094](https://bugs.mojang.com/browse/MC-154094) Lectern running /clear turns items into ghost items
-   [MC-175964](https://bugs.mojang.com/browse/MC-175964) Setblock command run by book in lectern to clear inventory run in command block causes ghost items
-   [MC-201316](https://bugs.mojang.com/browse/MC-201316) The /give command can create so many items that the game will freeze
-   [MC-207818](https://bugs.mojang.com/browse/MC-207818) Placing a sign from the offhand closes the sign UI immediately
-   [MC-208301](https://bugs.mojang.com/browse/MC-208301) /clear does not properly affect the item on the mouse pointer after crafting it
-   [MC-210408](https://bugs.mojang.com/browse/MC-210408) /spawnpoint allows players to set their spawnpoint to out-of-bounds coordinates, which crashes the game when trying to respawn
-   [MC-211666](https://bugs.mojang.com/browse/MC-211666) Guardians attack invisible axolotls
-   [MC-212127](https://bugs.mojang.com/browse/MC-212127) Normal ink sac and glow ink sac are not grouped in the creative inventory
-   [MC-212144](https://bugs.mojang.com/browse/MC-212144) Subtitles refer to Glow Item Frame as "Item Frame"
-   [MC-212168](https://bugs.mojang.com/browse/MC-212168) Ctrl + Pick Block doesn't copy block state "lit"
-   [MC-212236](https://bugs.mojang.com/browse/MC-212236) Cannot visually critical-hit a glow squid (No sound/particles)
-   [MC-212314](https://bugs.mojang.com/browse/MC-212314) Glow squid remains dark even if there is a light source block next to it
-   [MC-212325](https://bugs.mojang.com/browse/MC-212325) Glow Squid entity data (potion effects, custom name, ...) does not get saved
-   [MC-214629](https://bugs.mojang.com/browse/MC-214629) FOV decreases when underwater regardless of FOV Effects accessibility setting
-   [MC-214781](https://bugs.mojang.com/browse/MC-214781) Lava does not generate at the very bottom of noise caves
-   [MC-214784](https://bugs.mojang.com/browse/MC-214784) Fossils can generate floating in caves
-   [MC-214836](https://bugs.mojang.com/browse/MC-214836) Water caves cause land to be excessively flooded
-   [MC-214844](https://bugs.mojang.com/browse/MC-214844) Bedrock can be exposed to the air at the very bottom of the new caves
-   [MC-214970](https://bugs.mojang.com/browse/MC-214970) Phantoms continously make too much flapping sounds
-   [MC-215194](https://bugs.mojang.com/browse/MC-215194) Structure blocks do not work below y=0
-   [MC-215838](https://bugs.mojang.com/browse/MC-215838) There is currently no way to craft deepslate tiles and deepslate bricks
-   [MC-215850](https://bugs.mojang.com/browse/MC-215850) Deepslate Tile Wall comes before Deepslate Brick Wall but Deepslate Bricks come before Deepslate Tiles in creative inventory
-   [MC-215939](https://bugs.mojang.com/browse/MC-215939) Emerald ore spawns in lower frequencies than it should above y=100
-   [MC-216136](https://bugs.mojang.com/browse/MC-216136) Polished deepslate slab isn't grouped with the other deepslate slabs in creative inventory
-   [MC-216363](https://bugs.mojang.com/browse/MC-216363) Crash upon replacing soul sand or magma with the other under a tall bubble column using /setblock
-   [MC-216735](https://bugs.mojang.com/browse/MC-216735) Stone Lapis Ore generating in Deepslate
-   [MC-216736](https://bugs.mojang.com/browse/MC-216736) Lava lakes generate exposed in caves
-   [MC-216765](https://bugs.mojang.com/browse/MC-216765) Coal ore can generate below Y=0 when attached to a fossil
-   [MC-216817](https://bugs.mojang.com/browse/MC-216817) Inconsistency: Cobbled deepslate cannot be smelted back into deepslate
-   [MC-218139](https://bugs.mojang.com/browse/MC-218139) Spectator vision bug

---

# Minecraft Snapshot 21w08b

Snapshot 21w08b is a small hotfix to fix two issues with ore distribution.

Happy mining!

## Fixed Bugs in 21w08b

-   [MC-216744](https://bugs.mojang.com/browse/MC-216744) Iron ore doesn't generate (only iron ore in deepslate is generated)
-   [MC-216101](https://bugs.mojang.com/browse/MC-216101) Redstone ore generates with a flat distribution below y=12

---

# Minecraft Snapshot 21w08a

In this snapshot, our new beloved stone type has suffered a grim fate and has been renamed to Deepslate. How mysterious!

## Changes in 21w08a

-   Tweaked cave sizes further
-   Canyon and cave carvers now apply below y=0
-   Cracks can now be found carved into the ground
-   Grimstone has been changed into Deepslate
-   Added Deepslate ores
-   The [distribution of ores](https://launchercontent.mojang.com/v2/images/snapshot21w08aoredistribution.jpg) has been further tweaked
-   Andesite no longer generates under y=0
-   Tuff now sometimes generates under y=0
-   The Tuff layer of amethyst geodes has been replaced with now a new type of stone called Smooth Basalt
-   Smooth basalt is now obtained from smelting basalt
-   Another round of tweaking has been done to the new textures of ores and blackstone
-   Emerald and Lapis Lazuli ore textures have had some touch ups
-   Mineshafts now once again generate in the open air in caves
-   Particles now appear in the air around spore blossoms
-   Slime blocks and honey blocks have been moved to the redstone tab of the creative inventory

![Snapshot 21w08a texture comparison.](https://launchercontent.mojang.com/images/snapshot-21w08a-texture-comparison.jpg)

### Deepslate

-   Grimstone is now called Deepslate
-   Deepslate now has a top texture, and a new block called Cobbled Deepslate drops from Deepslate
-   The cobbled variant is the same but without the top texture, and is used to craft all Deepslate variants instead
-   Deepslate now has a unique set of sounds! Very crunchy indeed

### Deepslate ores

-   Added Deepslate versions of iron, gold, lapis, redstone and diamond ores that generate wherever those ores replace Deepslate
-   Twice as tough to mine as normal ores

### Ore Distribution Tweaks

![Ore distribution in snapshot 21w08a.](https://launchercontent.mojang.com/images/snapshot-21w08a-ore-distribution-741x421.jpg) [Click here](https://launchercontent.mojang.com/v2/images/snapshot21w08aoredistribution.jpg) for a link to the image in full resolution.

## Fixed bugs in 21w08a

-   [MC-213926](https://bugs.mojang.com/browse/MC-213926) Rooted dirt footstep sounds are considerably quieter than normal dirt footstep sounds
-   [MC-214782](https://bugs.mojang.com/browse/MC-214782) Geodes can generate floating in caves
-   [MC-214843](https://bugs.mojang.com/browse/MC-214843) Old style caves don't generate past Y=0

---

# Minecraft Snapshot 21w07a

## New Features in 21w07a

-   Added Grimstone!

## Grimstone

Grimstone can be found in the deepest parts of the underground, and is slightly tougher to mine than normal Stone.

-   Like Blackstone, Grimstone can be used to craft basic tools, furnaces and brewing stands.
-   You can craft the following blocks with this new stone type:
    -   Grimstone Slab
    -   Grimstone Stairs
    -   Grimstone Wall
    -   Polished Grimstone
    -   Polished Grimstone Slab
    -   Polished Grimstone Stairs
    -   Polished Grimstone Wall
    -   Grimstone Bricks
    -   Grimstone Brick Slab
    -   Grimstone Brick Stairs
    -   Grimstone Brick Wall
    -   Grimstone Tiles
    -   Grimstone Tile Slab
    -   Grimstone Tile Stairs
    -   Grimstone Tile Wall
    -   Chiseled Grimstone

## Changes in 21w07a

-   Tweaks and updates to world generation and ores
-   Changes to the visuals of some ores and stone types
-   Reordered Redstone Tab in Creative Inventory

### World Generation

-   Tweaked huge caves to be more rare and decreased the chance that caves are filled with water
-   Changed ore generation to match the new world height and to add more strategy to mining
-   Tweaked size and positioning of diorite, andesite & granite generation
-   Exception: Diorite and Granite and Dirt no longer generate below y = 0
-   Strongholds are now mostly encased in stone
-   Mineshaft corridors are now supported by log pillars below or chains above when needed

![Comparing old and new ore distribution](https://launchercontent.mojang.com/images/snapshot-21w07a-ore-comparison.png) [Click here](https://i.imgur.com/RH5cgSF.jpg) to view full resolution.

### Visuals

-   Ores without unique shapes have been given new textures for accessibility reasons, so that each ore is distinguishable by shape alone
-   Being the most iconic ore, Diamond Ore texture is staying the same to keep that classic feel maintained
-   Blackstone, Polished Blackstone Bricks, and Cracked Polished Blackstone Bricks have had some minor touch ups

![snapshot-21w07a-texture-comparison](https://launchercontent.mojang.com/images/snapshot-21w07a-texture-comparison.jpg)

### Creative Inventory

-   The Redstone Tab has been reordered to prioritize highly-used blocks
-   Redstone items/blocks have been grouped and ordered in the following way:
    -   Essentials
    -   Unique activators
    -   Miscellaneous
    -   Common activators
    -   Openables

## Fixed bugs in 21w07a

-   [MC-147589](https://bugs.mojang.com/browse/MC-147589) Vines no longer randomly generate in jungles
-   [MC-208613](https://bugs.mojang.com/browse/MC-208613) Amount of players who need to sleep to skip the night is calculated incorrectly
-   [MC-208618](https://bugs.mojang.com/browse/MC-208618) Clicking on a bed immediately skips the night if gamerule playersSleepingPercentage is set to 0
-   [MC-211224](https://bugs.mojang.com/browse/MC-211224) Seagrass can occasionally replace parts of a swamp hut
-   [MC-214082](https://bugs.mojang.com/browse/MC-214082) Crash after placing soul sand or magma under 2032 tall water
-   [MC-214814](https://bugs.mojang.com/browse/MC-214814) Strongholds generate floating and without walls, floors, or ceilings when inside caves
-   [MC-214844](https://bugs.mojang.com/browse/MC-214844) Bedrock can be exposed to the air at the very bottom of the new caves
-   [MC-214885](https://bugs.mojang.com/browse/MC-214885) Beacon beam only render 256 blocks from source
-   [MC-214973](https://bugs.mojang.com/browse/MC-214973) Powder snow bucket in a dispenser at y = 319 facing upwards or at y = -64 facing downwards is replaced with empty bucket, despite no powder snow being placed
-   [MC-214986](https://bugs.mojang.com/browse/MC-214986) Large dripstones only generate as stalagmites below Y=0

---

# Minecraft Snapshot 21w06a

Hello, new snapshot! Hello, new cave generation!

Today's snapshot introduces a major change to how caves are generated within Minecraft. You could say that we're now introducing the cave part of Caves & Cliffs.

This is only the first step in our underground adventure, so please note that snapshots show features in early development and that there are two notable caveats with this snapshot:

-   You'll be unable to open old worlds in this snapshot as there is currently no upgrade path towards the new world height
-   All caves of the new type between y31 and y63 will be flooded with water

## New Features in 21w06a

-   Added noise caves and aquifers

### Noise caves and Aquifers

-   Noise caves are a new way of generating caves, providing more natural variety. They can get really huge sometimes! Noise caves come in two flavors:
    -   Cheese caves. Like the holes in swiss cheese. These often form caverns of various size.
    -   Spaghetti caves. Long squiggly tunnels, sometimes wide like tagliatelle.
-   No, they aren't loud. The "noise" part of noise caves is a technical term and has nothing to do with sound.
-   The old cave carvers and canyons still generate, combining with the noise caves to form interesting cave systems.
-   As with carvers, when noise caves intersect the surface they form cave entrances.
-   An aquifer is an area with local water level, independent of sea level. Aquifers are used during world generation to generate bodies of water inside noise caves. This sometimes results in large underground lakes!
-   For now, aquifers are only used below y31. This means all noise caves between y31 and sea level (y63) will be flooded with water, and noise cave entrances will essentially be lakes. This will be fixed later.
-   Magma sometimes generates at the bottom of underground bodies of water
-   Underwater cave carvers and underwater canyons have been removed, since aquifers are used to generate water in caves instead.

## Changes in 21w06a

-   Overworld build and generation limits have been expanded
-   Mineshafts adapted to larger caves
-   You can no longer crouch or jump to prevent a big dripleaf from tilting
-   A big dripleaf will now tilt rather than break when hit by a projectile
-   A redstone powered big dripleaf will not tilt (except when hit by a projectile)
-   The textures for hanging roots and small dripleaves have been updated

### World generation

-   Generation range and build limits have been expanded by 64 blocks up and 64 blocks down, to a total range of 384 blocks
-   Underground features, structures, and caves generate all the way down to y -64.

### Mineshaft changes

-   Mineshaft pieces don't generate if they would be fully floating in the air
-   Mineshaft corridors are supported by log pillars when needed
-   No floating cobwebs

## Fixed bugs in 21w06a

-   [MC-214346](https://bugs.mojang.com/browse/MC-214346) Big dripleaf can be broken with arrows in spawn protection
-   [MC-213813](https://bugs.mojang.com/browse/MC-213813) Small dripleaf can destroy any block

---

# Minecraft Snapshot 21w05b

Snapshot 21w05b is a small snapshot to address a couple of bugs.

## Fixed bugs in 21w05b

-   [MC-203813](https://bugs.mojang.com/browse/MC-203813) Copper blocks are named inconsistently
-   [MC-213788](https://bugs.mojang.com/browse/MC-213788) The game can randomly freeze
-   [MC-213802](https://bugs.mojang.com/browse/MC-213802) Copper is not upgraded correctly from pre-21w05a worlds

---

# Minecraft Snapshot 21w05a

## New Features in 21w05a

-   Azalea bushes as well as flowering azaela bushes!
-   Added cave vines and glow berries!
-   Added drip leaves!
-   Added decorative blocks for the upcoming lush caves: hanging roots and rooted dirt!
-   Added moss!
-   Added spore blossom!

### Cave vines and glow berries

-   Cave vines grow down from the ceiling, like weeping vines
-   When they grow they have a chance of producing glow berries
-   Glow berries are a natural light source as well as a food source
-   Foxes eat glow berries
-   Use glow berries to plant new cave vines
-   Bonemealing a cave vine will create glow berries

### Dripleaf

-   Small dripleaf needs moisture, so it grows on clay or underwater
-   Small dripleaf grow into big dripleaf when bonemealed.
-   Big dripleaf grows taller when bonemealed
-   If you stand on a big dripleaf it will tilt after a while and you will fall off
-   You can crouch or jump to prevent a big dripleaf from tilting
-   A tilted big drip leaf will tilt up again after a while
-   The big dripleaf will break when hit by a projectile
-   The wandering trader will sometimes sell small dripleaf plants

### Moss

-   Two new decorative blocks: Moss block and moss carpet
-   Moss carpet can be crafted from moss blocks

### Spore blossom

-   A beautiful large flower placed on ceilings
-   Particles drip from it

## Changes in 21w05a

-   The stonecutter can be used to craft the different copper block variants
-   The stages of copper oxidization are now called "Copper Block", "Exposed Copper Block", "Weathered Copper Block" and "Oxidized Copper Block" in sequence of least to most oxidized
-   Drowned now have a chance of dropping a copper ingot, they no longer drop gold ingots
-   Added new sculk sensor events
-   Changes to powder snow

### Sculk Sensor Changes

Added the following game events that the Sculk Sensor reacts to, along with corresponding frequency value:

Vibration Types

Frequency Value

Minecart Moving, Ring Bell, Block Change

6

Drinking Finish, Prime Fuse

7

Mob Interact

8

Equip, Shear, Ravager Roar

9

Entity Place

12

Entity Killed

13

Shulker Close

14

Shulker Open

15

-   `Block Change` is for when player or dispenser action has changed a block. Example: cake slice being eaten.
-   `Mob Interact` is for specific mob interaction events that cause vibrations.
-   `Prime Fuse` is for both TNT and Creepers.

### Powder Snow changes

-   Flaming arrows now get extinguished when they collide with Powder Snow
-   Skeletons now convert to Strays when frozen
-   Powder snow is now pushable by pistons and sticky pistons
-   Foxes can now walk on top of powder snow without falling in

## Technical Changes in 21w05a

-   Improved performance when using many overrides on an item model
-   Copper oxidization is now a random tick effect and thus affected by the randomTickSpeed game rule

## Fixed Bugs in 21w05a

-   [MC-9568](https://bugs.mojang.com/browse/MC-9568) Mobs suffocate / go through blocks when growing up near a solid block
-   [MC-130098](https://bugs.mojang.com/browse/MC-130098) Debug world spawns player at y=2 instead at y=70 where all the blocks are
-   [MC-142711](https://bugs.mojang.com/browse/MC-142711) Baby turtles take damage when pushed against ceiling
-   [MC-148432](https://bugs.mojang.com/browse/MC-148432) Sound spam while in water and lava at the same time
-   [MC-149495](https://bugs.mojang.com/browse/MC-149495) Pufferfish triggers tripwire without colliding with it upon reloading the game
-   [MC-152265](https://bugs.mojang.com/browse/MC-152265) Starting server outputs "unable to resolve BlockEntity for ItemStack" errors
-   [MC-153254](https://bugs.mojang.com/browse/MC-153254) Baby zombies/piglins take damage when pushed against ceiling by bubble columns
-   [MC-163673](https://bugs.mojang.com/browse/MC-163673) Baby husks, piglins, zombies, zombie villagers, and zombified piglins take damage when jumping into a space with a solid block above it
-   [MC-186879](https://bugs.mojang.com/browse/MC-186879) Standing in fire and water spams the extinguish sound
-   [MC-191714](https://bugs.mojang.com/browse/MC-191714) Player is dismounted when standing on farmland while riding a horse/boat while the farmland turns to dirt, causing a desync
-   [MC-198432](https://bugs.mojang.com/browse/MC-198432) Pufferfish phases through blocks after reloading world
-   [MC-199356](https://bugs.mojang.com/browse/MC-199356) chatDelay in options.txt has a space between the colon and the value
-   [MC-200906](https://bugs.mojang.com/browse/MC-200906) Pufferfish hitbox incorrect when reloading world
-   [MC-204801](https://bugs.mojang.com/browse/MC-204801) Large amounts of copper blocks lag the server and causes the worldsave to take forever
-   [MC-205079](https://bugs.mojang.com/browse/MC-205079) Cauldrons don't fill with powder snow in some biomes
-   [MC-205401](https://bugs.mojang.com/browse/MC-205401) "Fire extinguishes" Sound repeatedly plays when a mob that burns in daylight is in powder snow
-   [MC-205477](https://bugs.mojang.com/browse/MC-205477) Occasional desync when trying to enter/exit a boat while the server is lagging
-   [MC-205735](https://bugs.mojang.com/browse/MC-205735) Baby cows can suffocate on stairs
-   [MC-206113](https://bugs.mojang.com/browse/MC-206113) Powder Snow causes Z-Fighting with Falling Blocks
-   [MC-207258](https://bugs.mojang.com/browse/MC-207258) Sculk sensors do not react to minecarts being driven
-   [MC-207261](https://bugs.mojang.com/browse/MC-207261) Bell ringing event is not considered a vibration
-   [MC-207262](https://bugs.mojang.com/browse/MC-207262) Drinking potions or milk doesn’t cause vibrations even though eating does
-   [MC-207263](https://bugs.mojang.com/browse/MC-207263) Inconsistency: Filling cauldrons with liquids or powder snow is not detected by sculk sensors
-   [MC-207277](https://bugs.mojang.com/browse/MC-207277) Sculk sensor can't detect setting a fire with fire charge
-   [MC-207283](https://bugs.mojang.com/browse/MC-207283) Extinguishing a campfire is not detected by sculk sensor
-   [MC-207300](https://bugs.mojang.com/browse/MC-207300) Blocks being placed or picked up by an enderman are not detected by sculk sensors
-   [MC-207329](https://bugs.mojang.com/browse/MC-207329) Sculk sensors don't properly detect eating from other mobs
-   [MC-207340](https://bugs.mojang.com/browse/MC-207340) Sculk sensors do not detect buckets of fish being emptied
-   [MC-207358](https://bugs.mojang.com/browse/MC-207358) Sculk sensors don't detect shulkers opening and closing
-   [MC-207384](https://bugs.mojang.com/browse/MC-207384) Flame arrows repeatedly trigger sculk sensors
-   [MC-207387](https://bugs.mojang.com/browse/MC-207387) Sculk sensors can sense players sneaking in water when they move, even when they're not swimming
-   [MC-207391](https://bugs.mojang.com/browse/MC-207391) Sculk sensors don't detect certain flying mobs
-   [MC-207397](https://bugs.mojang.com/browse/MC-207397) The fire extinguish sound plays every tick when the player is on fire and freezing
-   [MC-207407](https://bugs.mojang.com/browse/MC-207407) Villages will always generate at least on y=0
-   [MC-207417](https://bugs.mojang.com/browse/MC-207417) Directly breaking fire does not alert sculk sensors, but removing its supporting block correctly does
-   [MC-207418](https://bugs.mojang.com/browse/MC-207418) Breaking paintings/item frames/glow item frames does not alert sculk sensors, even though placing them does
-   [MC-207445](https://bugs.mojang.com/browse/MC-207445) Sculk sensor doesn't detect squids swimming
-   [MC-207473](https://bugs.mojang.com/browse/MC-207473) Sculk sensors do not detect when ghasts shoot
-   [MC-207520](https://bugs.mojang.com/browse/MC-207520) Sculk sensors don't react to ravager roars
-   [MC-207521](https://bugs.mojang.com/browse/MC-207521) Ocelots and cats can still emit vibrations while sneaking
-   [MC-207592](https://bugs.mojang.com/browse/MC-207592) Shooting bow with flame enchantment while sneaking triggers sculk sensor
-   [MC-207600](https://bugs.mojang.com/browse/MC-207600) Sculk sensor detects wrong sound for fishing rod
-   [MC-207670](https://bugs.mojang.com/browse/MC-207670) Sculk sensors do not detect the placement of boats and minecarts
-   [MC-207671](https://bugs.mojang.com/browse/MC-207671) Sculk sensors do not detect candles being placed into cakes
-   [MC-207672](https://bugs.mojang.com/browse/MC-207672) Sculk sensors do not detect when creepers are set off with flint and steel
-   [MC-207673](https://bugs.mojang.com/browse/MC-207673) Sculk sensors do not detect lighting TNT with flint and steel
-   [MC-207674](https://bugs.mojang.com/browse/MC-207674) Sculk sensors do not detect placing things in flower pots
-   [MC-207675](https://bugs.mojang.com/browse/MC-207675) Sculk sensors do not detect books being placed onto lecterns
-   [MC-207677](https://bugs.mojang.com/browse/MC-207677) Sculk sensors do not detect collecting water with bottles
-   [MC-207678](https://bugs.mojang.com/browse/MC-207678) Sculk sensors do not detect collecting honey bottles
-   [MC-207679](https://bugs.mojang.com/browse/MC-207679) Sculk sensors do not detect the breaking of bee nests and beehives in Creative mode
-   [MC-207745](https://bugs.mojang.com/browse/MC-207745) Sculk sensors do not detect when ender dragons shoot fireballs
-   [MC-208193](https://bugs.mojang.com/browse/MC-208193) Sculk sensors do not detect removing things from flower pots
-   [MC-208194](https://bugs.mojang.com/browse/MC-208194) Sculk sensors do not detect when candle cakes are eaten
-   [MC-208477](https://bugs.mojang.com/browse/MC-208477) Going into a dimension that has height higher than the maximum height crashes the game
-   [MC-209361](https://bugs.mojang.com/browse/MC-209361) Game crashes upon instantly click-replacing the block underneath a bamboo sapling with another bamboo
-   [MC-209625](https://bugs.mojang.com/browse/MC-209625) Baby llamas suffocate when below a solid block while standing on top of a carpet
-   [MC-212117](https://bugs.mojang.com/browse/MC-212117) Placing glow lichen in lava creates waterlogged glow lichen
-   [MC-212141](https://bugs.mojang.com/browse/MC-212141) Shulkers get rotated when upgrading to 21w03a
-   [MC-212149](https://bugs.mojang.com/browse/MC-212149) Shulker is sometimes mis-rotated when player teleports through a nether portal and reloading an active chunk with Shulker
-   [MC-212284](https://bugs.mojang.com/browse/MC-212284) Crammed enitities pushed through blocks when growing to adults
-   [MC-212290](https://bugs.mojang.com/browse/MC-212290) Commands "setblock" and "fill" don't work at or above height 1024 in some cases
-   [MC-212291](https://bugs.mojang.com/browse/MC-212291) Client can dismount vehicles independently from the server, causing a de-sync
-   [MC-212331](https://bugs.mojang.com/browse/MC-212331) Boats dismount you in the direction the boat is facing instead of the direction of the player
-   [MC-212347](https://bugs.mojang.com/browse/MC-212347) Importing custom world file height is limited to 2047 instead of 2048
-   [MC-212422](https://bugs.mojang.com/browse/MC-212422) Game crashes when generating a world with increased height limit
-   [MC-212532](https://bugs.mojang.com/browse/MC-212532) Shulkers are spawned slightly mis-rotated after a shulker was hit by another shulker's shulker bullet
-   [MC-212537](https://bugs.mojang.com/browse/MC-212537) Standing near a shulker slightly lifts you when they open
-   [MC-212541](https://bugs.mojang.com/browse/MC-212541) Shulkers are often incorrectly rotated upon generation
-   [MC-213512](https://bugs.mojang.com/browse/MC-213512) Copper blocks are named differently from bedrock edition

---

# Minecraft Snapshot 21w03a

Today's Caves & Cliffs snapshot is particularly shiny! You could almost say it's glowing... Oh wait, that's a squid.

## New Features in 21w03a

​

-   Added Glow Lichen!
-   Added the Glow Squid!

​

### Glow Lichen

-   A dim light source that generates in caves
-   Use shears to pick it up
-   Use bonemeal to spread it along block surfaces

​

### Glow Squid

Glow squids have been added, but do not yet spawn naturally. You can find spawn eggs for them in the creative inventory.

-   Glow Squids are well-lit and can be seen from even far distances!
-   When killed, Glow Squids drop Glow Ink Sacs
-   Glow Ink Sacs can be used on signs to make the text super visible, even at night! Works with colors!
-   Craft a Glow Item Frame by combining a Glow Ink Sac with an Item Frame in a Crafting Table. Any item in a Glow Item Frame is perfectly illuminated, even at night!
-   Use an Ink Sac on a sign to remove the glow effect
-   Axolotls will attack any Glow Squids they see, so...be careful

​

## Changes in 21w03a

​

-   Dripstone blocks can be crafted from 4 pointed dripstone

​

## Fixed bugs in 21w03a

​

-   [MC-9568](https://bugs.mojang.com/browse/MC-9568) Mobs suffocate / go through blocks when growing up near a solid block
-   [MC-89880](https://bugs.mojang.com/browse/MC-89880) Spawner with weight 0 crashes game
-   [MC-91522](https://bugs.mojang.com/browse/MC-91522) Shulker rendering position desync and generates ghost shulker when destroying shulker-ridden boat or minecart
-   [MC-92349](https://bugs.mojang.com/browse/MC-92349) Players can't tempt animals with food while other players are closer to the animal
-   [MC-92867](https://bugs.mojang.com/browse/MC-92867) Setting Json text value to null throws exceptions and crashes
-   [MC-105344](https://bugs.mojang.com/browse/MC-105344) Shulkers in boats and minecarts do not sit up if previousely attached to blocks sideways
-   [MC-108717](https://bugs.mojang.com/browse/MC-108717) Shulkers can't be pushed back
-   [MC-111196](https://bugs.mojang.com/browse/MC-111196) Using a monster spawner to spawn shulkers spawns white shulkers
-   [MC-113177](https://bugs.mojang.com/browse/MC-113177) Shulkers cannot be pushed inside non-solid blocks
-   [MC-119051](https://bugs.mojang.com/browse/MC-119051) Random transparent line in shulker box GUI texture
-   [MC-121897](https://bugs.mojang.com/browse/MC-121897) Gaps in an animation's used frames throws ArrayIndexOutOfBoundsException
-   [MC-139265](https://bugs.mojang.com/browse/MC-139265) Shulkers do not teleport correctly when going through a portal
-   [MC-161334](https://bugs.mojang.com/browse/MC-161334) Shulker boxes cannot be opened if next to a shulker mob
-   [MC-168900](https://bugs.mojang.com/browse/MC-168900) Shulkers teleport with original dimension coordinates after passing through portals
-   [MC-183884](https://bugs.mojang.com/browse/MC-183884) Shulkers are afraid of being next to another shulker
-   [MC-186172](https://bugs.mojang.com/browse/MC-186172) Shulkers open into blocks when unable to teleport
-   [MC-190677](https://bugs.mojang.com/browse/MC-190677) Shulkers aren't aligned to the grid for a split second after being spawned in
-   [MC-200195](https://bugs.mojang.com/browse/MC-200195) Boats don't try dismounting you on land
-   [MC-202202](https://bugs.mojang.com/browse/MC-202202) Server is unable to prevent a player from dismounting a vehicle, causing a desync
-   [MC-203373](https://bugs.mojang.com/browse/MC-203373) Shulker bullet subtitles are not capitalized correctly
-   [MC-203571](https://bugs.mojang.com/browse/MC-203571) Right-clicking an empty bundle sometimes plays hand animation
-   [MC-204337](https://bugs.mojang.com/browse/MC-204337) Bundle use stat never increases
-   [MC-205076](https://bugs.mojang.com/browse/MC-205076) Game mode selection is ordered differently
-   [MC-206118](https://bugs.mojang.com/browse/MC-206118) "type" in loot table number providers is not optional anymore
-   [MC-206510](https://bugs.mojang.com/browse/MC-206510) Game crashes when trying to shift-click a chest into the inventory of a donkey whose chest is being removed
-   [MC-206550](https://bugs.mojang.com/browse/MC-206550) block.pointed\_dripstone.drip\_\[liquid/cauldron\] has no subtitles
-   [MC-206599](https://bugs.mojang.com/browse/MC-206599) Pointed dripstone can be placed atop each other, even if a player would be inside the hitbox of the lower dripstone
-   [MC-206923](https://bugs.mojang.com/browse/MC-206923) Dripstone subtitles are not capitalized properly
-   [MC-207250](https://bugs.mojang.com/browse/MC-207250) Dripstone caves biome name is not properly capitalized
-   [MC-207254](https://bugs.mojang.com/browse/MC-207254) Dripstone caves generate merging dripstones in impossible ways
-   [MC-207293](https://bugs.mojang.com/browse/MC-207293) Dripstone generated in dripstone caves can replace lava sources which looks weird
-   [MC-207335](https://bugs.mojang.com/browse/MC-207335) Mobs cannot spawn in Dripstone Caves
-   [MC-207388](https://bugs.mojang.com/browse/MC-207388) Issues with chunk rendering when height limit is large
-   [MC-207900](https://bugs.mojang.com/browse/MC-207900) Summoning "dust" or "dust\_color\_transition" particles kicks nearby players when on a server
-   [MC-208336](https://bugs.mojang.com/browse/MC-208336) 'player' sub-predicate of 'entity\_properties' predicate only passes if game mode is specified
-   [MC-208611](https://bugs.mojang.com/browse/MC-208611) Shulkerboxes/bundles duplicate items when destroyed by two fire blocks simultaneously
-   [MC-208666](https://bugs.mojang.com/browse/MC-208666) Shulker boxes and bundles drop their items twice when thrown into a lava cauldron

---

# Minecraft Snapshot 20w51a

Ready your screenshot buttons and start rehearsing your best "naaaaww"s. The final snapshot of the year enters Minecraft Java, and what better way to end the year than with something that has been on our bucket list for quite a while: the adorable **axolotl**?

We hope you'll end the year on a good note, and the entirety of the Java team wishes you happy holidays.

## New Features in 20w51a

​

-   Added the axolotl!

​

### Axolotl

-   Amphibious!
-   Axolotls currently love tropical fish, though this may change. Tropical fish or tropical fish buckets can be used to mate axolotls
-   Axolotls will swim around with you if you're holding a tropical fish or tropical fish bucket in one of your hands
-   When a player kills a mob that the axolotl was attacking or being attacked by, the axolotl will show its appreciation by granting the player temporary regeneration and removing any mining fatigue effects
-   You can pick up your axolotl in a water bucket and carry it around just like a salmon or cod!
-   Axolotls will always chase after squids and other types of fish
-   Axolotls are skittish, but they will attack Drowned and Guardians if you tempt them with their favorite food - tropical fish!
-   Axolotls do not like it out of water, and will dry up and begin taking damage if they are out of water for longer than 5 minutes
-   An axolotl will not dry up as long as they are in water or rain
-   Sometimes when an axolotl takes damage, it will pretend to be dead so that it stops being attacked
-   There are 4 common varieties and 1 rare variety of axolotl
-   Axolotls do not spawn in the world yet, but you can find spawn eggs for them in the creative inventory

​

## Changes in 20w51a

-   Bundles and shulker box items will now drop their items when destroyed
-   Some changes have been made to Sculk Sensors

​

### Sculk Sensors

-   Eating Start has been removed as an event for a few reasons.
    -   It is inconsistent with our philosophy around vibrations. Mining a block is not considered a vibration because a physical event hasn't happened in the world yet (you can stop mining and the block will revert). This is the same for eating: you can start eating, but then stop and the food reverts as if eating never occurred.
    -   It wasn't widely considered to be a useful event for players to use Sculk Sensors with.
    -   Eating Finish is staying, and will likely be much more useful to Sculk Sensors for this scenario.
-   Walking on wool no longer causes vibrations.
-   Throwing wool as an item onto the ground no longer causes vibrations.
-   Sculk Sensors are now silent while waterlogged.

​

#### Vibration Frequency Changes

As we continue to consider feedback from the community, some changes to the frequency ranges have been made. We expect this to change quite heavily up until release to figure out the most interesting ranges for gameplay, and as always feedback is extremely welcome! Here is the newest table in this snapshot.

Vibration Types

Frequency Value

Step

1

Flap

2

Swim

3

Elytra Free Fall

4

Hit Ground

5

Splash, Wolf Shaking

6

Projectile Shoot

7

Projectile Land, Eating Finish, Entity Hit

8

Armor Stand Add Item

9

Block Close, Block Unswitch, Block Unpress, Block Detach, Dispense Fail

10

Block Open, Block Switch, Block Press, Block Attach

11

Block Place, Fluid Place, Flint And Steel Use

12

Block Destroy, Fluid Pickup

13

Fishing Rod Reel-In, Container Close, Piston Contract

14

Fishing Rod Cast, Container Open, Explode, Lightning Strike, Piston Extend

15

## Technical Changes in 20w51a

-   Added gamerule playersSleepingPercentage (100 by default), which sets what percentage of players must sleep to skip the night. Setting to 0 will mean 1 player is always enough to skip the night. Setting above 100 will prevent skipping the night.

​

## Fixed bugs in 20w51a

​

-   [MC-149799](https://bugs.mojang.com/browse/MC-149799) When a crossbow is loaded and in the offhand, you do not see it anymore if you carry an item in the main hand
-   [MC-176615](https://bugs.mojang.com/browse/MC-176615) It is possible to destroy netherite items with lava by putting them inside a container
-   [MC-203563](https://bugs.mojang.com/browse/MC-203563) Cake appears eaten for a split second when putting a candle on it
-   [MC-203568](https://bugs.mojang.com/browse/MC-203568) Trying to put a candle onto a candle cake duplicates the candle
-   [MC-204058](https://bugs.mojang.com/browse/MC-204058) Placing a candle on a cake causes hunger display desync
-   [MC-204146](https://bugs.mojang.com/browse/MC-204146) Netherite can burn whilst inside of a bundle
-   [MC-205057](https://bugs.mojang.com/browse/MC-205057) Bundle inventory preview is off-center inside of the tooltip box
-   [MC-205212](https://bugs.mojang.com/browse/MC-205212) Desync when putting a candle on a cake in Survival mode
-   [MC-207405](https://bugs.mojang.com/browse/MC-207405) Nether stars can be blown up while being inside of a bundle/shulker box
-   [MC-208082](https://bugs.mojang.com/browse/MC-208082) Game stalls when any message is displayed in chat while playing with an expired session

---

# Minecraft Snapshot 20w49a

Another snapshot is going out, and this one introduces the Sculk. They're a bit creepy, but don't let that put you off. Pick up some good vibrations!

## New Features in 20w49a

-   Added Dripstone Caves biome
-   Added Sculk Sensors

### Dripstone Caves biome

This biome doesn't generate naturally yet, since it is designed for the upcoming larger caves. However, if you want to see the biome in the current caves you can create a single-biome world with dripstone caves.

-   Contains plenty of Pointed Dripstone on the floors and ceilings, and small pools of water
-   In some places you'll find larger stalagmites, stalactites, and columns built from Dripstone Blocks.

### Sculk Sensors

-   Introducing the bizarre, tendril-filled world of Sculk - prepare for Sculk Sensors to creep you out with their unique ability to detect vibrations nearby.
-   A vibration is anything that causes physical motion; if you are careful, there are some motions that are undetectable to sensors by sneaking.
    -   These sneak-friendly vibrations currently include walking, falling to the ground or throwing/shooting projectiles.
-   Sculk Sensors will not listen to vibrations that are directly created by other Sculk sources.
-   When a vibration is detected, a signal is sent from the source location to the sensor at a speed of 1 game tick per block.
    -   Other vibrations cannot be detected by a sensor when a signal is already travelling to it.
    -   When the signal has arrived, the sensor will be activated for 40 game ticks (approximately 2 seconds).
    -   While activated, the sensor cannot detect other vibrations.
-   Sculk Sensors can detect vibrations in an 8 block radius around it.
-   The efficient tool to mine Sculk Sensors is the Hoe.
-   They can be waterlogged.

#### Redstone Emission

-   Sculk Sensors emit a redstone signal when they are activated.
-   The strength of the redstone signal is inversely proportional to the distance the vibration signal travelled.
    -   This means that the closer the vibration is, the stronger the redstone signal is.
    -   The output is also scaled based on the Sculk Sensor's radius, so it can reach the max redstone signal strength when the vibration is 0 distance away (directly on top of the sensor).

#### Vibration Frequencies

-   Sculk Sensors have a unique interaction with comparators.
-   Each vibration in the game falls under a certain frequency value, and this value can be measured with a comparator.
-   With the right contraption, this allows you to detect when a certain action has occured nearby.

Vibration Type

Frequency Value

Step

1

Flap

2

Swim

3

Elytra Free Fall

4

Hit Ground

5

Splash

6

Wolf Shaking

6

Projectile Shoot

7

Projectile Land

8

Start Eating

7

Finish Eating

8

Hit Entity

9

Add Item To Armor Stand

9

Open Block

11

Close Block

10

Switch Block

11

Unswitch Block

10

Press Block

11

Unpress Block

10

Attach Block

11

Detach Block

10

Open Container

11

Close Container

10

Dispense Failed

10

Use Flint And Steel

12

Place Block

12

Destroy Block

13

Place Fluid

12

Pickup Fluid

13

Cast Fishing Rod

15

Reel-In Fishing Rod

14

Extend Piston

15

Contract Piston

14

Explosion

15

Lightning Strike

15

#### Wool Occlusion

-   Wool has a special interaction with Sculk Sensors.
-   If a wool block is in the way of a vibration source, the sensor will not be able to detect it.

#### Technical Tidbits

-   Sculk Sensors have a cooldown period of 1 tick after being placed or after deactivating.
-   During this short cooldown period, it cannot detect vibrations. This is to prevent it from activating itself when a contraption it is powering is being unpowered. Feedback is welcome on this point!

## Changes in 20w49a

-   The Fullness of a bundle now shows up regardless of whether Advanced Tooltips are on or off
-   Stalactites and stalagmites merge if the tips are next to each other, unless you press shift while placing

## Technical Changes in 20w49a

-   A new game event system has been implemented to support Sculk Sensors detecting vibrations.
-   World height related values are now exposed for customized worlds
-   Removed the `max-build-height` server setting
-   Added `occludes_vibration_signals` block tag. Anything in this tag will occlude vibrations, and inherits `wool` tag entries by default
-   New particle types: `vibration` and `dust_color_transition`
-   A new game event system has been implemented to support Sculk Sensors detecting vibrations.

### Game Events

This system has been developed to identify when certain in-world actions are happening in nearby chunks, particularly so the new Sculk Sensor can detect these events as vibrations.

The following is a list of the initial game events:

-   `minecraft:step`
-   `minecraft:swim`
-   `minecraft:flap`
-   `minecraft:elytra_free_fall`
-   `minecraft:hit_ground`
-   `minecraft:splash`
-   `minecraft:projectile_shoot`
-   `minecraft:projectile_land`
-   `minecraft:entity_hit`
-   `minecraft:block_place`
-   `minecraft:block_destroy`
-   `minecraft:fluid_place`
-   `minecraft:fluid_pickup`
-   `minecraft:block_open`
-   `minecraft:block_close`
-   `minecraft:block_switch`
-   `minecraft:block_unswitch`
-   `minecraft:block_attach`
-   `minecraft:block_detach`
-   `minecraft:block_press`
-   `minecraft:block_unpress`
-   `minecraft:container_open`
-   `minecraft:container_close`
-   `minecraft:explode`
-   `minecraft:armor_stand_add_item`
-   `minecraft:wolf_shaking`
-   `minecraft:dispense_fail`
-   `minecraft:fishing_rod_cast`
-   `minecraft:fishing_rod_reel_in`
-   `minecraft:piston_extend`
-   `minecraft:piston_contract`
-   `minecraft:flint_and_steel_use`
-   `minecraft:eating_start`
-   `minecraft:eating_finish`
-   `minecraft:lightning_strike`

#### Tags

There are also game event tags that come with this, and can be modified by data packs. They can be found under `data/minecraft/tags/game_events`.

-   `vibrations` Determines which game events are considered vibrations by the Sculk Sensor. Currently, all added game events are in this tag by default.
-   `ignore_vibrations_stepping_carefully` Which game events should be ignored by the Sculk Sensor when the source of the event is sneaking.

The following game events are in `ignore_vibrations_stepping_carefully` by default:

-   `minecraft:step`
-   `minecraft:hit_ground`
-   `minecraft:projectile_shoot`

## Fixed bugs in 20w49a

-   [MC-18880](https://bugs.mojang.com/browse/MC-18880) The Absorption effect has no texture for poison/wither hearts (appears empty instead)
-   [MC-201840](https://bugs.mojang.com/browse/MC-201840) Optional function tags sometimes don't run even when the tag exists
-   [MC-203797](https://bugs.mojang.com/browse/MC-203797) Placing or removing a block over the void causes a DecoderException on servers
-   [MC-204314](https://bugs.mojang.com/browse/MC-204314) Double copper slabs only drop a single slab when mined
-   [MC-205043](https://bugs.mojang.com/browse/MC-205043) Absorption hearts appear broken when taking freezing damage
-   [MC-205096](https://bugs.mojang.com/browse/MC-205096) Hardcore hearts lose all color when player is taking freeze damage
-   [MC-205391](https://bugs.mojang.com/browse/MC-205391) Waxing cut copper doesn’t prevent it from oxidising
-   [MC-205629](https://bugs.mojang.com/browse/MC-205629) Unused sign cache when rendering signs
-   [MC-206553](https://bugs.mojang.com/browse/MC-206553) Pointed Dripstone creates water particles in the Nether
-   [MC-206563](https://bugs.mojang.com/browse/MC-206563) Pointed dripstone is not connected to the player's hand
-   [MC-206578](https://bugs.mojang.com/browse/MC-206578) Large pillars of stalactites don't fall when the block above is removed
-   [MC-206583](https://bugs.mojang.com/browse/MC-206583) Cauldrons below stalactites at least 2 blocks tall won't fill up
-   [MC-206591](https://bugs.mojang.com/browse/MC-206591) Setting any floating block to a pointed dripstone, causes the replaced block to drop as an item
-   [MC-206594](https://bugs.mojang.com/browse/MC-206594) Large stalactites falling occasionally don't drop all of their pointed dripstone items
-   [MC-206599](https://bugs.mojang.com/browse/MC-206599) Pointed dripstone can be placed atop each other, even if a player would be inside the hitbox of the lower dripstone
-   [MC-206606](https://bugs.mojang.com/browse/MC-206606) Frustum stage of stalactites negates fall damage
-   [MC-206613](https://bugs.mojang.com/browse/MC-206613) Pointed Dripstone duplicates when the block it was attached to is removed
-   [MC-206615](https://bugs.mojang.com/browse/MC-206615) Pointed dripstone's hitbox can extend further than a block, causing nearby stalactites to not be able to fall
-   [MC-206642](https://bugs.mojang.com/browse/MC-206642) Stalactites destroy items they fall on, however stalagmites don't
-   [MC-206643](https://bugs.mojang.com/browse/MC-206643) When a dripstone's hitbox extends into the space of another block, the area that extends into said block cannot be targeted
-   [MC-206669](https://bugs.mojang.com/browse/MC-206669) Inconsistency between dripstone and non-mob entities
-   [MC-206682](https://bugs.mojang.com/browse/MC-206682) Floating dripstone tips are sometimes left behind from large dripstone pillars
-   [MC-206691](https://bugs.mojang.com/browse/MC-206691) Pointed dripstone replaces items with pointed dripstone items
-   [MC-206711](https://bugs.mojang.com/browse/MC-206711) Coding error at net.minecraft.world.entity.Entity.resetPos()
-   [MC-206790](https://bugs.mojang.com/browse/MC-206790) Waterlogged dripstone does not update
-   [MC-206878](https://bugs.mojang.com/browse/MC-206878) Pointed dripstone attached to a piston is not removed as the piston extends

---

# Minecraft Snapshot 20w48a

Did someone ask for a snapshot full of tasty Caves & Cliffs features? Then you came to the right place! This particular snapshot adds blocks for dripstone – stalagmites and stalactites. Or is it stalactites and stalagmites? Anyway, you can’t find them in the world just yet… but try out the functionality of the new blocks!

## New Features in 20w48a

-   Added Dripstone Blocks and Pointed Dripstone

### Pointed Dripstone

-   Forms a stalactite if placed on the ceiling or a stalagmite if placed on the floor
-   Can be combined to form longer stalactites & stalagmites
-   Stalagmites break if not attached to something below
-   Landing or jumping on a stalagmite hurts! They are sharp
-   Stalactites fall down if not attached to something above
-   Being hit by a falling stalactite hurts! They are sharp
-   Stalactites drip water (or lava if there is lava above the ceiling)
-   A stalactite with a water source above the ceiling will gradually fill a cauldron below with water
-   A stalactite with a lava source above the ceiling will fill a cauldron below with lava after a while
-   Thrown tridents break pointed dripstone

## Changes in 20w48a

-   Right-clicking a bundle in the inventory now empties one item from the bundle
-   Using a bundle now throws out its entire content into the world
-   Advanced tooltips now show how full a bundle is
-   Candles can now only be placed if there is a solid surface below
-   Wearing any piece of leather armor now prevents freezing entirely
-   Changed textures for amethysts, candles, clocks and compasses

## Technical Changes in 20w48a

-   Added a freezeDamage game rule that allows players to toggle whether powder snow causes freeze damage or not

## Fixed bugs in 20w48a

-   [MC-3615](https://bugs.mojang.com/browse/MC-3615) Lava and water are completely transparent at certain height levels
-   [MC-176614](https://bugs.mojang.com/browse/MC-176614) Swimming and doing certain actions make the player look very odd/does not have animations for swimming + doing certain actions
-   [MC-198864](https://bugs.mojang.com/browse/MC-198864) World border does not render below y=0 / above y=255
-   [MC-203602](https://bugs.mojang.com/browse/MC-203602) Spyglass animation is wrong when swimming
-   [MC-203645](https://bugs.mojang.com/browse/MC-203645) Spyglass wobbles when walking while in use
-   [MC-203824](https://bugs.mojang.com/browse/MC-203824) Weird Hand animation when attacking and using spyglass at the same time
-   [MC-203925](https://bugs.mojang.com/browse/MC-203925) Items inside of a bundle disappear if you empty the bundle in the inventory when in Creative mode while the inventory is full
-   [MC-203951](https://bugs.mojang.com/browse/MC-203951) The elder guardian particle moves when an elder guardian moves
-   [MC-204323](https://bugs.mojang.com/browse/MC-204323) Inconsistency: Crafting copper blocks into slabs only yields 4 slabs instead of 6
-   [MC-204424](https://bugs.mojang.com/browse/MC-204424) Using a spyglass while gliding with an elytra points the spyglass down in third person view
-   [MC-205041](https://bugs.mojang.com/browse/MC-205041) Full leather armour does not prevent freezing damage
-   [MC-205069](https://bugs.mojang.com/browse/MC-205069) Powdered snow doesn't give you frozen effect in creative mode
-   [MC-205072](https://bugs.mojang.com/browse/MC-205072) Snow Ambient Effect sometimes don't show correctly on the edge of a Powder Snow Block
-   [MC-205145](https://bugs.mojang.com/browse/MC-205145) Compass with nothing to point to will spin very rapidly when in bundle.
-   [MC-205197](https://bugs.mojang.com/browse/MC-205197) Creating a map from an empty map no longer plays a sound
-   [MC-205220](https://bugs.mojang.com/browse/MC-205220) Cannot manipulate horse.saddle using /item command
-   [MC-205269](https://bugs.mojang.com/browse/MC-205269) Chest closing sounds desynced with closing animations
-   [MC-205321](https://bugs.mojang.com/browse/MC-205321) Item modifiers that change the item type don't work on entities
-   [MC-205445](https://bugs.mojang.com/browse/MC-205445) The Fabulous graphics warning is shown at the wrong time
-   [MC-205492](https://bugs.mojang.com/browse/MC-205492) The 'Include entities' option in the structure block UI is the opposite of the actual behavior
-   [MC-205567](https://bugs.mojang.com/browse/MC-205567) TNT flashes are translucent once again
-   [MC-205627](https://bugs.mojang.com/browse/MC-205627) Item modifiers that change the count to 0 don't completely remove the item
-   [MC-206058](https://bugs.mojang.com/browse/MC-206058) /item modify doesn't visually update the model of an item in an item frame

---

# Minecraft Snapshot 20w46a

The snow is snowier than before.

For today’s snapshot, we’ve changed most of the textures introduced in the previous snapshot. This is simply to test if these textures give a better experience in exploring and building. We’re interested to hear what you think. Keep in mind, that some textures might be reverted or changed again in the future

## New Features in 20w46a

-   Added Powder Snow!

### Powder Snow

Snowier snow!

-   Powder Snow is a trap block that causes any entity that walks into it to sink in it
-   You can pick up and place Powder Snow with a bucket
-   Wear leather boots to prevent yourself from sinking into Powder Snow blocks
-   Leave a Cauldron outside in falling snow and it will fill with Powder Snow

#### Freezing

-   Standing in Powder Snow will slowly freeze an entity
-   Once frozen, freeze damage is done every few seconds to the frozen entity
-   Each piece of leather armor warn causes an entity to freeze more slowly
-   Wearing a full set of leather armor prevents freezing entirely

## Changes in 20w46a

-   The range in which a lightning rod attracts lightning has been doubled
-   Copper blocks are now crafted from 4 copper ingots
-   Sky color now varies smoothly when moving between different biomes
-   Buttons that change value (like `Difficulty`) can now be controlled with mouse wheel
-   Clicking on button that changes value while holding shift key changes to previous value
-   "Debug" world type can now be accessed while holding alt key (was shift)

### Textures

Changed a number of the textures for blocks and items introduced in the previous snapshot:

-   Cut Copper
-   Lightning Rod
-   Calcite
-   Amethyst Block
-   Budding Amethyst Block
-   Tinted Glass
-   Candle Item Icons
-   Copper Ingot Item Icon
-   Amethyst Shard Item Icon
-   Bundle Item Icon

## Technical Changes in 20w46a

-   Removed `/replaceitem` command
-   Added `/item` command
-   Added item modifiers, which reuse loot table functions syntax to describe item modification in `/item` command.
-   Data pack version is now 7
-   Loot tables can now access scoreboard values by UUID.
-   Loot table values inside random number generators can now be nested.
-   Default mode of structure blocks is now `Load`. `Data` is now hidden (but can be accessed by clicking mode button while holding alt key)

### Item modifiers

The function part of loot tables can now be defined as separate data pack resource in `item_modifiers` directory. Such files can contain a single function (i.e single JSON object) or an array of functions.

### Commands

#### `item`

Modifies item or block inventory.

This command has three forms:

-   `/item <target> replace <item stack> [<count>]` - same as old `replaceitem`
-   `/item <target> modify <modifier>` - modifies item (without copying).
-   `/item <target> copy <source> [<modifier>]` - copies item for source to target(s), optionally applying modifier

Possible sources and targets:

-   `entity <selector> <slot>`
-   `block <x> <y> <z> <slot>`

For example, `/item block ~ ~ ~ container.0 copy entity @s enderchest.0` will copy first item from player's enderchest to first slot of container player is currently standing on.

### Loot tables

#### New conditions

##### `value_check`

Checks range of value.

Parameters:

-   `value` - see "New value providers" section (currently combination of random generators and score)
-   `range` - min/max range

#### Changed conditions

##### `score`

`entity` parameter has now been replaced with `target`. It can either contain value from old `entity` field (like `this`) or be an score holder name in form `{"name": "..."}`.

#### Changed functions

##### `set_damage`

This function now has `add` parameter. If `true`, change will be relative to current damage. If `false`, damage will be replaced with current value (default behavior)

##### `set_count`

This function now has `add` parameter. If `true`, change will be relative to current item count. If `false`, item count will be replaced with current value (default behavior)

##### `copy_nbt`

`source` parameter can now be set to `{"storage": <namespaced id>}`, to access command storage.

#### New functions

##### `set_enchantments`

Modifies enchantments on item

###### Parameters

-   `enchantments` - map of enchantment id to level value (can be score or random number)
-   `add` - if `true`, change will be relative to current level. If `false`, level will be replaced with current value (default behavior)

#### New value providers

Note: value providers can be used in same places as random number generators.

##### `score`

Returns scaled scoreboard value.

###### Parameters

-   `score` - scoreboard name
-   `target` - same as `target` in `score` predicate
-   `scale` - scaling factor (float)

### Data Packs

Changes to data packs for version 7:

-   Removal of `/replaceitem` (replaced with `/item replace`)
-   `score` loot table condition: `entity` parameter has been replaced with `target`

## Resource Packs

Changes to resource packs for version 7:

-   Drowned texture mirroring has changed (see MC-174685)
-   slots for the game mode selector are now 26 pixels instead of 25

## Fixed bugs in 20w46a

-   [MC-2490](https://bugs.mojang.com/browse/MC-2490) TNT animation ends at 80 ticks, ignores fuse length changes
-   [MC-53518](https://bugs.mojang.com/browse/MC-53518) Endermen don't attack endermites spawned using spawn eggs or /summon
-   [MC-80468](https://bugs.mojang.com/browse/MC-80468) Inconsistency between block names
-   [MC-99259](https://bugs.mojang.com/browse/MC-99259) As of 1.9, the wither health bar doesn't go up during spawn
-   [MC-110903](https://bugs.mojang.com/browse/MC-110903) Cannot remove horse saddle using /replaceitem
-   [MC-143821](https://bugs.mojang.com/browse/MC-143821) Using empty map in creative mode can create additional map with ID 0
-   [MC-147729](https://bugs.mojang.com/browse/MC-147729) Crafting via the recipe book can delete items if picking up items while crafting
-   [MC-162910](https://bugs.mojang.com/browse/MC-162910) Additional map is created when using an empty map in Creative in a newly created world
-   [MC-182954](https://bugs.mojang.com/browse/MC-182954) "block.minecraft.banner.base." displays raw translation string (is untranslated)
-   [MC-183771](https://bugs.mojang.com/browse/MC-183771) Gamemode switcher icons in the F3+F4 menu are not centered
-   [MC-183917](https://bugs.mojang.com/browse/MC-183917) Min and max are both required in entity\_scores condition
-   [MC-185605](https://bugs.mojang.com/browse/MC-185605) Kelp generates on top of Magma Blocks
-   [MC-188448](https://bugs.mojang.com/browse/MC-188448) Food pops off of campfire when extinguished
-   [MC-189482](https://bugs.mojang.com/browse/MC-189482) LAN World screen buttons are selected in the wrong order when using Tab
-   [MC-196425](https://bugs.mojang.com/browse/MC-196425) "Off" is not completely capitalized for the Distortion Effects and FOV Effects sliders, which is inconsistent with other sliders
-   [MC-197276](https://bugs.mojang.com/browse/MC-197276) Pufferfish gives poison IV instead of II
-   [MC-198514](https://bugs.mojang.com/browse/MC-198514) Creating a superflat world with nothing but air crashes the game
-   [MC-198725](https://bugs.mojang.com/browse/MC-198725) Crash when clicking "Presets" after setting the superflat preset with a non-existent biome
-   [MC-203562](https://bugs.mojang.com/browse/MC-203562) Shulker boxes animate when shulkers do
-   [MC-203574](https://bugs.mojang.com/browse/MC-203574) Decorations don't generate in the Nether
-   [MC-203621](https://bugs.mojang.com/browse/MC-203621) Unable to pick up experience orbs
-   [MC-203622](https://bugs.mojang.com/browse/MC-203622) Arm when using Spyglass aligned wrong on Multiplayer
-   [MC-203631](https://bugs.mojang.com/browse/MC-203631) Amethyst buds do not drop themselves with silk touch
-   [MC-203643](https://bugs.mojang.com/browse/MC-203643) Command modified bundle has a bigger progress bar than a slot
-   [MC-203644](https://bugs.mojang.com/browse/MC-203644) Cats & Ocelots are missing one of their legs
-   [MC-203646](https://bugs.mojang.com/browse/MC-203646) Some mobs won't despawn when switched to peaceful
-   [MC-203648](https://bugs.mojang.com/browse/MC-203648) The armour stand model floats above its base
-   [MC-203746](https://bugs.mojang.com/browse/MC-203746) Levitation particles go on forever when killed by a levitating creeper
-   [MC-203880](https://bugs.mojang.com/browse/MC-203880) Floating creepers / creeper with no AI

---

# Minecraft Snapshot 20w45a

Good things come to those who wait, and we've believe you've waited long enough. The first Caves & Cliffs snapshot is finally here and ready to enter the Java Edition of Minecraft! We hope that you're as excited about this as we are, because this snapshot brings you a variety of features, some changes to existing features, and a few technical changes. All of it is listed in this blog post, and we can't wait to see you experiment with it all.

Happy mining!

## New Features in 20w45a

-   Added bundles!
-   Added candles!
-   Added lava cauldrons!
-   Added Copper!
-   Added Amethyst!
-   Added Lightning Rod!
-   Added the Spyglass!
-   Added Tinted Glass!
-   A Shulker hitting a Shulker with a Shulker Bullet can make a new Shulker.

### Amethysts

#### Amethyst Blocks

-   Amethyst comes in block form inside the geodes in two ways: Block of Amethyst and Budding Amethyst
-   All types of Amethyst blocks (clusters included) create beautiful sounds when you walk on them, break them, place them, or hit them with a projectile - go make some music!

#### Amethyst Clusters

-   Amethyst Clusters grow from Budding Amethyst, which can be found inside geodes
-   Clusters have 4 growth stages: Small Amethyst Bud, Medium Amethyst Bud, Large Amethyst Bud, and Amethyst Cluster
-   Clusters can only grow when they are placed on Budding Amethyst blocks
-   Fully-grown Amethyst Clusters drop 4 Amethyst Shards (or more with Fortune) when an Iron Pickaxe or higher is used, and drop nothing otherwise when broken
-   Clusters can be Silk Touched at any stage

#### Amethyst Geodes

-   These huge geodes can be found anywhere underground in the overworld
-   Amethyst geodes have an outer layer of a new stone called Tuff
-   Amethyst geodes have a second layer of another new block called Calcite
-   Amethyst geodes have an inner layer of various Amethyst blocks

#### Amethyst Shards

-   Amethyst Clusters drop 4 Amethyst Shards (or more with Fortune)

#### Budding Amethyst

-   On any side of a Budding Amethyst block where there is air, or a water source block, a Small Amethyst Bud will eventually grow
-   Amethyst Buds can only grow when attached to Budding Amethyst, and will grow until they become Amethyst Clusters

### Bundles

-   Bundles are items that hold other items.
-   A bundle can hold a mixture of items, but only one stack’s worth. For example, a bundle could fit:
    -   64 dirt
    -   32 dirt + 32 stone
    -   32 dirt + 8 ender pearls
    -   1 of every color of wool, concrete, carpet and terracotta (64 blocks in total)
    -   Or 1 diamond helmet
-   Use right click to put an item into a bundle.
-   Right-click a bundle to empty it.
-   Wrap a present in a bundle and give it to your friend!

### Candles

-   Candles come in all 16 colors + 1 uncolored variant
-   Up to 4 can be placed in one block
-   Candles allow you to properly wish someone a happy birthday
-   Waterloggable! (But you cannot light them underwater, silly)
-   Wish anybody a happy birthday with a candle cake!

### Cauldrons

-   Cauldrons can now be filled with buckets of lava!
-   Filled lava cauldrons give off a redstone signal of strength 1

### Copper

#### Copper blocks

-   Craft 9 copper ingots to a copper block
-   Craft cut copper, cut copper stairs and cut copper slabs
-   Use honeycomb to craft waxed copper blocks

#### Copper ore

-   Copper ore can be found in ore blobs across Overworld, similar to iron and coal (this is not the final generation for copper…)
-   Smelt copper ore to get a copper ingot

#### Lightning Rod

-   The Lightning Rod is crafted from three copper ingots
-   Keep your builds safe (well, as long as the closest area around the lightning rod is fire proof) during thunderstorms!
-   The lightning rod will protect an area of 4 \* 16 blocks around it from the, sometimes devastating, lightning strikes!
-   Lightning rods give off a redstone signal when struck by lightning

#### Oxidation

-   Copper will oxidize over time
-   There are for stages: copper, lightly weathered copper, semi-weathered copper and weathered copper
-   It takes 50 - 82 Minecraft days (in loaded chunks) for a copper block to oxidize one stage
-   Waxed copper blocks will not oxidize
-   You can wax any oxidation stage - how lovely that means you can keep that pretty lightly weathered copper block in it’s lightly weathered stage forever!

### Spyglass

-   You can use your spyglass to see faraway things
-   Pretend to be a sea captain, or catch your neighbor in the act as they dye your sheep lime green
-   The spyglass is crafted from two copper ingots and one amethyst shard

### Tinted Glass

-   Tinted Glass is a type of glass that does not allow light to pass through
-   Tinted Glass is crafted by putting a Glass block in the middle of 4 Amethyst Shards
-   Tinted Glass can be obtained without silk touch; it does not shatter like normal glass

## Changes in 20w45a

-   Experience orbs now sometimes merge when in large quantities to improve performance. This does not change the rate at which the player can absorb them, it simply limits the amount of separate orbs floating around in the world. Orbs that merge will gain the lifetime of the most recently created one.
-   Simple firework rockets with 1 gunpowder can now be crafted using the recipe book
-   Dirt paths (formerly grass path) can now be made by using a shovel on dirt, podzol, mycelium or course dirt (as well as grass)
-   Minecarts and rails work in water
-   Particles now appear when pistons break blocks

### Minecarts

Minecarts and rails now work in water

-   All rails can be waterlogged (works with a dispenser & water bucket too)
-   Flowing water doesn’t break rails
-   Minecarts can pass through water, but get slowed down more than usual

## Technical Changes in 20w45a

-   Entities are now saved separately from terrain chunks.
-   Added loot table function set\_banner\_pattern
-   Pack format in version.json has been split into data and resource versions
-   Servers can now require custom resource packs to be accepted

### Custom server resource packs

A dedicated server can enforce custom resource packs by setting `require-resource-pack` in `server.properties`. When this option is used, players will be prompted for a response and will be disconnected if they decline the required pack.

### Entity storage

Entities have been extracted from main (terrain) chunks and are now stored in separate `entities` directory (similar to POI storage). Those new files are still region files with NBT.

### Loot tables

#### New functions

##### `set_banner_pattern`

Sets tags needed for banner patterns. Parameters:

-   `patterns` - list of pattern objects:
    -   `pattern` - name of pattern (`square_bottom_left`, `bricks`, etc.)
    -   `color` - name of color (`light_gray`, etc.)
-   `append` - if `true`, new elements will be appended to existing ones instead of replacing

## Fixed bugs in 20w45a

-   [MC-98219](https://bugs.mojang.com/browse/MC-98219) Experience orbs follow dead players
-   [MC-108469](https://bugs.mojang.com/browse/MC-108469) Chunk-wise entity lists often don't get updated correctly (Entities disappear)
-   [MC-112147](https://bugs.mojang.com/browse/MC-112147) Lava burning items or XP orbs sound muted when "Friendly Creatures" slider is turned off
-   [MC-127201](https://bugs.mojang.com/browse/MC-127201) /replaceitem makes quite an obnoxious sound, which is not heard by the person whose items are being replaced.
-   [MC-127692](https://bugs.mojang.com/browse/MC-127692) Experience build up in furnace when using a hopper which can cause severe lag
-   [MC-130449](https://bugs.mojang.com/browse/MC-130449) Cartographer villager freezes or crashes the game when unlocking explorer maps
-   [MC-130584](https://bugs.mojang.com/browse/MC-130584) When a structure loads, water sources in the structure spread into waterloggable blocks
-   [MC-133691](https://bugs.mojang.com/browse/MC-133691) Blocks can't be placed normally on a full cauldron
-   [MC-135552](https://bugs.mojang.com/browse/MC-135552) Dead Entities are saved to chunk
-   [MC-136497](https://bugs.mojang.com/browse/MC-136497) XP orbs causing severe lag
-   [MC-141034](https://bugs.mojang.com/browse/MC-141034) taiga\_fisher\_cottage\_1 is filled with water
-   [MC-169900](https://bugs.mojang.com/browse/MC-169900) Incorrect jigsaw setting in snowy\_small\_house\_8
-   [MC-169945](https://bugs.mojang.com/browse/MC-169945) Skeletons don't burn in minecarts while being exposed to daylight
-   [MC-171852](https://bugs.mojang.com/browse/MC-171852) Putting item in a spectator's hand plays sound "Gear equips" for other players
-   [MC-174685](https://bugs.mojang.com/browse/MC-174685) Drowned arm texture is reversed by the model
-   [MC-175959](https://bugs.mojang.com/browse/MC-175959) One door is open in taiga\_shepherds\_house\_1
-   [MC-177622](https://bugs.mojang.com/browse/MC-177622) One log in taiga\_butcher\_shop\_1 seems to be misrotated causing the side roof to look asymmetrical
-   [MC-177624](https://bugs.mojang.com/browse/MC-177624) Entrance in snowy\_medium\_house\_2 is asymmetrical
-   [MC-181889](https://bugs.mojang.com/browse/MC-181889) Equipping sound plays when mobs picking up non-armor items
-   [MC-185357](https://bugs.mojang.com/browse/MC-185357) Removing a plant from a flower pot still plays generic armor equipping sound/shows Gear equips in subtitles
-   [MC-185359](https://bugs.mojang.com/browse/MC-185359) Using a bucket in Survival mode still plays generic armor equipping sound/shows Gear equips in subtitles
-   [MC-185360](https://bugs.mojang.com/browse/MC-185360) Milking a mooshroom for stew still plays armor equip sound/shows Gear equips subtitle
-   [MC-189565](https://bugs.mojang.com/browse/MC-189565) Some entities do not render inside of spawners and producing error log spam in console, potentially causing lag
-   [MC-190896](https://bugs.mojang.com/browse/MC-190896) Lag when opening a shipwreck chest containing buried treasure map
-   [MC-192594](https://bugs.mojang.com/browse/MC-192594) plains\_stable\_1 misplaced blocks
-   [MC-192629](https://bugs.mojang.com/browse/MC-192629) plains\_stable\_2 misplaced blocks
-   [MC-192876](https://bugs.mojang.com/browse/MC-192876) Misplaced trapdoor on taiga\_decoration\_6
-   [MC-192879](https://bugs.mojang.com/browse/MC-192879) Wall incorrectly placed on certain taiga houses
-   [MC-192930](https://bugs.mojang.com/browse/MC-192930) Zombies picking up items play the gear equipping sound and subtitle
-   [MC-193071](https://bugs.mojang.com/browse/MC-193071) Eating food items that return empty containers still play gear equipping sound
-   [MC-195125](https://bugs.mojang.com/browse/MC-195125) plains\_animal\_pen\_1 misplaced block
-   [MC-195126](https://bugs.mojang.com/browse/MC-195126) plains\_animal\_pen\_3 misplaced blocks
-   [MC-195351](https://bugs.mojang.com/browse/MC-195351) Comparator in compare mode can schedule unneeded tileticks
-   [MC-196542](https://bugs.mojang.com/browse/MC-196542) Small cleanup for skylight propagation code
-   [MC-197009](https://bugs.mojang.com/browse/MC-197009) Referencing empty item tag in recipe can crash client
-   [MC-197140](https://bugs.mojang.com/browse/MC-197140) Jack o'Lantern doesn't come after Carved Pumpkin in Creative Inventory
-   [MC-197179](https://bugs.mojang.com/browse/MC-197179) Baby piglins that pick up leather don't despawn, cluttering the Nether with unnecessary baby piglins
-   [MC-197524](https://bugs.mojang.com/browse/MC-197524) Border chunks do not enforce neighbors to be loaded, causing light updates to get stuck
-   [MC-198129](https://bugs.mojang.com/browse/MC-198129) ReplaceBlobsFeature changed from 1.16.1 to 1.16.2, affecting Basalt Delta generation
-   [MC-198414](https://bugs.mojang.com/browse/MC-198414) if the angle in /spawnpoint is set to +-infinity, and the player dies, it will kick the player, and upon rejoin will crash the game
-   [MC-198807](https://bugs.mojang.com/browse/MC-198807) Making piglins and piglin brutes angry at certain entities (like dropped items) crashes the game
-   [MC-202246](https://bugs.mojang.com/browse/MC-202246) Drowned navigation causes memory leak/performance degredation

---

# Minecraft Snapshot 20w30a

Today we're releasing Snapshot 20w30a for Minecraft Java Edition in which we've tweaked Bastion Remnants, and given you the ability to have lanterns under water.

## Changes in 20w30a

-   Modified how respawn positions are chosen for beds and respawn anchors
-   Lanterns can now be waterlogged
-   Soul Lanterns can now be waterlogged
-   Tweaked the Bastion Remnant chest loot
-   Chests in Bastion Remnants are now more likely to be located on top of gilded blackstone

### Respawn Block Positions

-   Respawn anchors will prioritize cardinal directions over corners
-   Beds will prioritize the side of the bed the player entered from and then spaces circling around the foot of the bed up to the head of the bed
-   Respawning players will now face the block that they respawned at
-   Placing players onto dangerous blocks is now avoided when possible

## Technical Changes in 20w30a

-   The sign edit screen will now intialize from existing sign text (should have no noticeable impact on vanilla)
-   Tags can now have optional entries

### Optional Tag Entries

Entries in tags can now be marked as optional. Failure to resolve optional entries does not prevent the whole tag from loading.

Example:

    {
      "replace": false,
      "values": [
        "#minecraft:beds", // existing syntax
        { "id":"#missing:tag", "required": false }, // optional sub-tag entry
    "minecraft:anvil", // existing syntax
    { "id":"minecraft:stone_button", "required": true }, // new syntax for required tags
    { "id":"missing:block", "required": false } // optional single-element entry
    
    

## Fixed bugs in 20w30a

-   [MC-35765](https://bugs.mojang.com/browse/MC-35765) Viewing text in Right-to-Left language while in another language renders backwards and non-connected
-   [MC-57869](https://bugs.mojang.com/browse/MC-57869) Some item tooltips use § for coloring, rendering them incorrect in right-to-left languages
-   [MC-116857](https://bugs.mojang.com/browse/MC-116857) Advancement descriptions use unnecessary capitalization on generic resource names
-   [MC-148447](https://bugs.mojang.com/browse/MC-148447) Villagers often get stuck while trying to go through a door at the same time
-   [MC-149060](https://bugs.mojang.com/browse/MC-149060) Villagers "spam" doors by opening and closing them really fast
-   [MC-153195](https://bugs.mojang.com/browse/MC-153195) Mobs can drop items with duplicate enchantments
-   [MC-181925](https://bugs.mojang.com/browse/MC-181925) Unarmed vexes raise their arms in an offensive way when attacking
-   [MC-187344](https://bugs.mojang.com/browse/MC-187344) Fast graphics tooltip has incorrect 'tree-leaves' spelling
-   [MC-187379](https://bugs.mojang.com/browse/MC-187379) Text for pack.incompatible.confirm.new makes no sense
-   [MC-187380](https://bugs.mojang.com/browse/MC-187380) Incorrect grammar in en\_us translation of pack.dropConfirm
-   [MC-188389](https://bugs.mojang.com/browse/MC-188389) Several minor errors in datapackFailure.title
-   [MC-188390](https://bugs.mojang.com/browse/MC-188390) Comma splices in four strings
-   [MC-188392](https://bugs.mojang.com/browse/MC-188392) Death message for getting shot by a skull is not grammatically correct in all situations
-   [MC-188621](https://bugs.mojang.com/browse/MC-188621) Mojang "Production Manager" credit is indented further than other credits
-   [MC-188880](https://bugs.mojang.com/browse/MC-188880) Baby zombified piglins riding on chickens aren't positioned properly
-   [MC-189918](https://bugs.mojang.com/browse/MC-189918) Multiplayer warning uses "Mojang" instead of "Mojang Studios"
-   [MC-190102](https://bugs.mojang.com/browse/MC-190102) Some UI strings are not consistently capitalized
-   [MC-190288](https://bugs.mojang.com/browse/MC-190288) Fabulous and Fancy graphics tooltips have missing commas
-   [MC-191441](https://bugs.mojang.com/browse/MC-191441) Right-to-left text is rendered bottom-up in some cases
-   [MC-191562](https://bugs.mojang.com/browse/MC-191562) "Cancel" button overlaps "Done" button when uploading a world to Realms, making users unable to upload world
-   [MC-192296](https://bugs.mojang.com/browse/MC-192296) Spider Jockey from a spawner minecart crashes with"java.lang.IllegalStateException: Entity is already tracked"
-   [MC-193276](https://bugs.mojang.com/browse/MC-193276) Player floats slightly above strider while riding it
-   [MC-193339](https://bugs.mojang.com/browse/MC-193339) NullPointerException during shutdown when rcon enabled with no password
-   [MC-194263](https://bugs.mojang.com/browse/MC-194263) Large End Cities do not generate correctly / get cut off
-   [MC-194273](https://bugs.mojang.com/browse/MC-194273) Save data of new Nether biomes is lost when upgrading a world to 20w28a or above
-   [MC-194350](https://bugs.mojang.com/browse/MC-194350) Some feature configurations don't load in a datapack (java.lang.IllegalArgumentException: value already present: clh@77f95e19)
-   [MC-195052](https://bugs.mojang.com/browse/MC-195052) "angle" argument in spawnpoint command doesn't use "minecraft:rotation" parser
-   [MC-195582](https://bugs.mojang.com/browse/MC-195582) Typing a colon twice or after a slash in chat when specifying a function/item/block/etc. in a command crashes the game

---

# Minecraft Snapshot 20w29a

Today we're releasing Snapshot 20w29a for Minecraft Java Edition. We found some bugs to squash, but also snuck in a technical change or two!

## Changes in 20w29a

-   Tools are now sorted based on material in the creative inventory

## Technical Changes in 20w29a

### Commands

#### spawnpoint & setworldspawn

Added angle parameter for setting the default facing angle of a respawning player.  
Syntax: `spawnpoint [targets] [pos] [angle]`  
Syntax: `setworldspawn [pos] [angle]` New parameters:

-   `angle`: Floating point angle in degrees. Supports the relative `~` modifier

### Customized world generation

-   `worldgen/noise_settings` can now contain noise configurations

## Fixed bugs in 20w29a

-   [MC-194464](https://bugs.mojang.com/browse/MC-194464) "large\_oak\_foliage\_placer" incorrectly serializes to "blob\_foliage\_placer"
-   [MC-194298](https://bugs.mojang.com/browse/MC-194298) Bone meal can't create flowers
-   [MC-194257](https://bugs.mojang.com/browse/MC-194257) Several instances of "snowy" being spelled as "snovy" in the vanilla\_worldgen configuration
-   [MC-194220](https://bugs.mojang.com/browse/MC-194220) Totems of Undying give you Fire Resistance II instead of the maximum Fire Resistance I
-   [MC-194200](https://bugs.mojang.com/browse/MC-194200) Birch trees are not generated correctly in the Birch Forest and Birch Forest Hills biomes
-   [MC-194173](https://bugs.mojang.com/browse/MC-194173) Hitboxes are rendered offset while picking up items or experience on graphics settings Fast and Fancy
-   [MC-193662](https://bugs.mojang.com/browse/MC-193662) Player flying in creative slightly above blocks while sneaking and jumping are restrained to that block
-   [MC-193560](https://bugs.mojang.com/browse/MC-193560) Enchantment glint doesn't render on elytra in specific circumstances
-   [MC-192021](https://bugs.mojang.com/browse/MC-192021) Enchantment Glint effect on transparent blocks not properly rendered on Fabulous graphic
-   [MC-191623](https://bugs.mojang.com/browse/MC-191623) Ender dragon battle music does not stop after ender dragon has been defeated
-   [MC-191031](https://bugs.mojang.com/browse/MC-191031) Players in spectator mode can interact with boats
-   [MC-190559](https://bugs.mojang.com/browse/MC-190559) Baby striders don't die when it's raining and they are in lava
-   [MC-189788](https://bugs.mojang.com/browse/MC-189788) Certain mobs in boats sometimes take drowning damage while the boat is moving
-   [MC-185019](https://bugs.mojang.com/browse/MC-185019) Worldgen settings with empty structures parameter generates all structures extremely frequent
-   [MC-176836](https://bugs.mojang.com/browse/MC-176836) Unarmed vindicators raise their arm in offensive way when attacking
-   [MC-176778](https://bugs.mojang.com/browse/MC-176778) Camera is reset when a block reappears due to high server latency
-   [MC-166718](https://bugs.mojang.com/browse/MC-166718) Mobs no longer suffocate inside of soul sand, farmland or grass paths
-   [MC-158735](https://bugs.mojang.com/browse/MC-158735) Pillagers without crossbows hold their arm up, in a way that may be offensive to some people
-   [MC-153230](https://bugs.mojang.com/browse/MC-153230) Players in spectator mode can stop minecarts

---

# Minecraft Snapshot 20w28a

This week's snapshot introduces experimental support for custom biomes in data packs. This work has involved redoing some of the internal plumbing of things behind the scene, so it might be a bit leaky. We hope no important parts drip out, but if they do, pick them back up for us, please.

As always, make sure to make backups if you try a world in a snapshot.

## Changes in 20w28a

​

-   Villagers now emit green particles when joining a village, setting a home bed, or acquiring a job site/profession
-   Brewing stands can now be crafted with blackstone
-   Tweaked bartering loot
-   Totems of undying now give the fire resistance status affect for 40 seconds when activated

​

## Technical Changes in 20w28a

​

-   Custom worlds now support custom biomes
-   Dedicated servers can now rate limit clients

​

### Customized world generation

​

-   There is now experimental support for a `worldgen` folder in data packs
-   `worldgen/biome` can contain biome definitions
-   `worldgen/configured_carver` can contain definitions for world carver settings
-   `worldgen/configured_feature` can contain definitions for feature placements
-   `worldgen/configured_structure_feature` can contain definitions for structure placements
-   `worldgen/configured_surface_builder` can contain definitions for surfaces
-   `worldgen/processor_list` can contain sets of block processors
-   `worldgen/template_pool` can contain pool definitions for jigsaw structures
-   Custom biomes can now be used in the single biome/caves/floating islands world types (add the data pack containing the biome first)
-   Custom biomes can now be used in custom dimension generators

​

### Dedicated server packet limit

​

-   Dedicated servers can now kick clients that consistently send too many packets within a second
-   Controlled with the `rate-limit` settings in `server.properties`
-   The default rate limit of 0 means "no limit"

​

## Fixed bugs in 20w28a

​

-   [MC-34661](https://bugs.mojang.com/browse/MC-34661) Thorns enchantment causes double armor decay
-   [MC-65953](https://bugs.mojang.com/browse/MC-65953) Tags IsBaby and IsVillager can't be changed from true to false with /entitydata
-   [MC-171363](https://bugs.mojang.com/browse/MC-171363) Nether forest biomes: Large fungi and small plants only generate on the topmost layer of nylium, leaving all lower layers devoid of flora
-   [MC-172221](https://bugs.mojang.com/browse/MC-172221) Hoglins, zoglins, ravagers, iron golems, and polar bears won't walk down a block if they are partially walking on air
-   [MC-173526](https://bugs.mojang.com/browse/MC-173526) All Minecarts can survive in lava
-   [MC-174479](https://bugs.mojang.com/browse/MC-174479) Cannot place sea pickles on soul sand
-   [MC-174520](https://bugs.mojang.com/browse/MC-174520) Soul particle texture is incorrect for the first frame
-   [MC-176753](https://bugs.mojang.com/browse/MC-176753) Piglins stand around dropped golden items if their "CanPickUpLoot" tag is set to "0b"
-   [MC-179369](https://bugs.mojang.com/browse/MC-179369) Wandering Traders are always invisible in the Nether and the End
-   [MC-181204](https://bugs.mojang.com/browse/MC-181204) doDaylightCycle button slightly incorrectly labeled
-   [MC-181233](https://bugs.mojang.com/browse/MC-181233) Mobs cannot spawn on wooden trapdoors, but can on iron and nether fungus trapdoors
-   [MC-182430](https://bugs.mojang.com/browse/MC-182430) Piglins continuously try and fail to pick up gold ingots if they can't reach them
-   [MC-182868](https://bugs.mojang.com/browse/MC-182868) Rail updates are 4-5x times laggier since 1.14 if the rail is on top of a non-full cube
-   [MC-185684](https://bugs.mojang.com/browse/MC-185684) Enderman can teleport when hit in cases where they previously would not teleport
-   [MC-185925](https://bugs.mojang.com/browse/MC-185925) Casting issue: Mineral vein generation uses 32-bit floats, leading to precision loss and potential crashes
-   [MC-187112](https://bugs.mojang.com/browse/MC-187112) Extra space in "Keep Jigsaws" button in jigsaw block
-   [MC-187126](https://bugs.mojang.com/browse/MC-187126) Jigsaw block UI is not closed when pressing "Generate"
-   [MC-187129](https://bugs.mojang.com/browse/MC-187129) Jigsaw blocks do not generate the correct structure until "Done" is pressed and the UI is reopened
-   [MC-188459](https://bugs.mojang.com/browse/MC-188459) Potted cactus still missing cullface argument for top
-   [MC-188534](https://bugs.mojang.com/browse/MC-188534) Potted cactus missing bottom face
-   [MC-189769](https://bugs.mojang.com/browse/MC-189769) Fungi grows through fire
-   [MC-190098](https://bugs.mojang.com/browse/MC-190098) Structure size and offset still limited to 32 for dedicated servers
-   [MC-190852](https://bugs.mojang.com/browse/MC-190852) Advancement announcement message has switched brackets for right-to-left languages
-   [MC-190856](https://bugs.mojang.com/browse/MC-190856) '/list uuids' shows parentheses incorrectly for right-to-left languages
-   [MC-190860](https://bugs.mojang.com/browse/MC-190860) '/' (slash) in chat and command block shows legacy formatting symbol for right-to-left languages
-   [MC-190891](https://bugs.mojang.com/browse/MC-190891) Certain redstone circuits causing lag
-   [MC-190892](https://bugs.mojang.com/browse/MC-190892) Brackets in potion effects are reversed in right-to-left languages
-   [MC-191501](https://bugs.mojang.com/browse/MC-191501) Opening a world from earlier 1.14 releases in 1.16 causes villagers to vanish
-   [MC-191571](https://bugs.mojang.com/browse/MC-191571) Switched square brackets for right-to-left languages
-   [MC-191579](https://bugs.mojang.com/browse/MC-191579) Book signing GUI has broken formatting for right-to-left languages
-   [MC-191656](https://bugs.mojang.com/browse/MC-191656) Right-to-left languages don't perform as expected in creative search menu
-   [MC-192306](https://bugs.mojang.com/browse/MC-192306) Crimson and warped slabs use incorrect colors on maps
-   [MC-193073](https://bugs.mojang.com/browse/MC-193073) Game crashes when Piglins or Piglin Brutes convert to Zombified Piglins
-   [MC-193089](https://bugs.mojang.com/browse/MC-193089) Mobs do not get damaged anymore if they're in lava and water at the same time
-   [MC-193125](https://bugs.mojang.com/browse/MC-193125) Cannot use "Inventory" key to write in recipe book, it closes GUI instead (Default: "E")

---

# Minecraft Snapshot 20w27a

It's time for another snapshot cycle as we make our way towards 1.16.2! This snapshot introduces the Piglin Brutes, and you might have heard about them in a [Bedrock beta](https://feedback.minecraft.net/hc/en-us/articles/360045006632-Minecraft-Beta-1-16-20-50-Xbox-One-Windows-10-Android-) already.

The Piglin Brutes will be the only feature addition of 1.16.2, the rest of these snapshots will be focused on fixing bugs.

## New Features in 20w27a

-   Added Piglin Brutes!

### Piglin Brute

-   Piglin Brutes are stronger versions of Piglins that live in bastions and protect the treasures there
-   Unlike their cowardly and greedy counterparts, the Piglin Brutes cannot be distracted by gold and aren't afraid of anything
-   Piglin Brutes attack players on sight, no matter how the player is dressed
-   Piglin Brutes wield axes and don't need any armor, because they're just that tough

## Changes in 20w27a

-   Zoglins can now be leashed
-   Crimson and warped fungus can now be placed on mycelium

## Technical Changes in 20w27a

-   Small improvements to data and resource pack selection screens

### Pack selection screens

-   While screen is open, it will automatically update when pack directory contents change
-   Both pack selection screen will now display contents of `pack.png` as pack icon

## Fixed bugs in 20w27a

-   [MC-1058](https://bugs.mojang.com/browse/MC-1058) A dragon head is invisible if the entity wearing it is not in view
-   [MC-2404](https://bugs.mojang.com/browse/MC-2404) Stepping down while sneaking allows falling off of blocks
-   [MC-49476](https://bugs.mojang.com/browse/MC-49476) NBT "HideFlags" does not hide "Dyed" on leather armor
-   [MC-68487](https://bugs.mojang.com/browse/MC-68487) Player heads of the same player always have the same skin texture, even if the saved texture data is different
-   [MC-97507](https://bugs.mojang.com/browse/MC-97507) Using item which modifies the held item shows "Gear equips" subtitle
-   [MC-145691](https://bugs.mojang.com/browse/MC-145691) Binding "Open/Close Inventory" to Tab only opens inventory
-   [MC-150417](https://bugs.mojang.com/browse/MC-150417) Some items get stuck in soul sand when there is liquid above the soul sand
-   [MC-167285](https://bugs.mojang.com/browse/MC-167285) Travelling into an end gateway with a platform on the other side while on a boat would instantly teleport you back
-   [MC-171739](https://bugs.mojang.com/browse/MC-171739) Weeping and twisting vines, bamboo, and kelp can be replaced by "saplings" by breaking and placing the block at the same time
-   [MC-173526](https://bugs.mojang.com/browse/MC-173526) All Minecarts can survive in lava
-   [MC-178729](https://bugs.mojang.com/browse/MC-178729) Inconsistency: Red and brown mushrooms can't be grown into huge mushrooms on nylium, while they can on all other "grass" blocks
-   [MC-182652](https://bugs.mojang.com/browse/MC-182652) Ruined portals don't always spawn with chest
-   [MC-183663](https://bugs.mojang.com/browse/MC-183663) Farmer villagers don't compost correctly
-   [MC-183743](https://bugs.mojang.com/browse/MC-183743) Iron golem overpopulation
-   [MC-185274](https://bugs.mojang.com/browse/MC-185274) Subtitles are still showing ''Gear equips'' when eating in snapshot 20w21a or newer.
-   [MC-188473](https://bugs.mojang.com/browse/MC-188473) Resource pack screen no longer updates when adding or removing resource packs
-   [MC-188969](https://bugs.mojang.com/browse/MC-188969) Having a suspicious stew in inventory prevents all types of suspicious stew from going into your inventory when milking brown mooshroom
-   [MC-189909](https://bugs.mojang.com/browse/MC-189909) player\_interacted\_with\_entity does not trigger if there is only one item and the item gets consumed
-   [MC-190021](https://bugs.mojang.com/browse/MC-190021) Trying to mount a pig or strider while sneaking plays hand animation
-   [MC-190266](https://bugs.mojang.com/browse/MC-190266) Players and other entities can catch on fire after logging on while riding a Strider in lava
-   [MC-190274](https://bugs.mojang.com/browse/MC-190274) Collecting liquids in bottles on Creative mode is inconsistent with the new creative bucket mechanics
-   [MC-190849](https://bugs.mojang.com/browse/MC-190849) Slime blocks can only push entities 5 blocks high instead of 6 blocks high as in 1.15.2
-   [MC-191915](https://bugs.mojang.com/browse/MC-191915) While in a boat the elytra does not show as enchanted
-   [MC-192894](https://bugs.mojang.com/browse/MC-192894) Transparency layers lose their auxiliary depth buffer ID when resized

## Get the Snapshot

Snapshots are available for Minecraft Java Edition. To install the snapshot, open up the Minecraft Launcher and enable snapshots in the "Installations" tab.

Testing versions can corrupt your world, please backup and/or run them in a different folder from your main worlds.

Cross-platform server jar:

-   [Minecraft server jar](https://launcher.mojang.com/v1/objects/40efae0a2412154f44a99f158752b8417b384f06/server.jar)

---

# Minecraft Snapshot 20w22a

It has been a busy week for us but we still wanted to squeeze out a snapshot as we've been busy squashing a bunch of bugs.

## Experimental Rendering Changes

We've included some experimental changes to graphics rendering in this snapshot, which might reveal some issues on a small number of older graphics cards.

If do you find any new graphical bugs then please report them to the bug tracker with the make and model of your graphics card as well as which operating system you are using ​

## New Features in 20w22a

​

-   Piglins now sometimes dance in celebration of a completed hunt

​

## Changes in 20w22a

​

-   Villager workstation logic changes
-   Bells can be hung from the underside of more blocks
-   When a villager that was traded with is struck by lightning, the witch it is converted to will no longer despawn
-   Players can no longer mount another entity when the crouch key is held down

​

### Villager Workstation Logic

​

-   Villagers no longer try to work at the same workstation
-   The most experienced nearby villager for the profession corresponding to the workstation you add will get the workstation
-   Villagers now have to walk to and reach the workstation before they can acquire the profession / work there
-   Villagers can no longer claim workstations / professions during raids or night time.
-   Villagers will check and make sure their workstation is valid at all times of day as long as they are within 16 blocks of their workstation.

​

## Technical Changes in 20w22a

​

-   Slightly changed datapack loading to prevent custom datapacks from crashing
-   Cached repeated block type lookups and collisions during pathfinding for increased performance
-   Minor optimizations in collision detection
-   Top level element in predicate file can now be array (all contents will be ANDed)
-   Added shader support for accessing depth buffer.
-   Renderer now uses per-pixel blending layers for some transparent elements.

​

### Datapack loading

​

-   If datapack reload fails, changes will not be applied and game will continue using previous data
-   If existing datapacks prevent world from loading, game will give option to load world in safe mode, which loads only vanilla datapack
-   Changes to datapack list are stored only after successful reload
-   Added `--safeMode` option to server to load only with vanilla datapack
-   Game will now detect critical datapack issues, like missing required tags and prevent world from being loaded

​

## Fixed bugs in 20w22a

-   [MC-667](https://bugs.mojang.com/browse/MC-667) Lily pads can be placed intersecting entities
-   [MC-4065](https://bugs.mojang.com/browse/MC-4065) Messages/commands sent while in a bed won't be remembered in sent history
-   [MC-112131](https://bugs.mojang.com/browse/MC-112131) Intersecting dungeons: spawner replaced by cobblestone
-   [MC-118594](https://bugs.mojang.com/browse/MC-118594) Removal of Log4J2Plugins.dat causing a slowdown of 3 secs on startup while it has to rescan all classes
-   [MC-120805](https://bugs.mojang.com/browse/MC-120805) Pig rotation is wrong when you see a player riding them with carrot on a stick
-   [MC-124812](https://bugs.mojang.com/browse/MC-124812) Endermen holding a block can despawn
-   [MC-125006](https://bugs.mojang.com/browse/MC-125006) Stronghold and dungeon generate over each other
-   [MC-134755](https://bugs.mojang.com/browse/MC-134755) All short mobs drown just below the surface of water
-   [MC-143443](https://bugs.mojang.com/browse/MC-143443) Redstone dust block states don't update properly if the wire is broken by a piston
-   [MC-148893](https://bugs.mojang.com/browse/MC-148893) Fox spawners do not render the fox inside of the block
-   [MC-150806](https://bugs.mojang.com/browse/MC-150806) Multiple villagers are attached to the same profession block
-   [MC-153787](https://bugs.mojang.com/browse/MC-153787) Zombie Reinforcements can spawn on glass
-   [MC-156161](https://bugs.mojang.com/browse/MC-156161) Some chest loot is randomized across the same seed, unlike before 1.14
-   [MC-156866](https://bugs.mojang.com/browse/MC-156866) Villagers level from Apprentice to Journeyman with less experience than shown by XP bar
-   [MC-157303](https://bugs.mojang.com/browse/MC-157303) Villagers wake up and seek a new "home" (bed) while living in a 2 high house
-   [MC-157436](https://bugs.mojang.com/browse/MC-157436) Player position is constantly reset when clicking with a sword or a trident onto the ground in creative mode
-   [MC-162340](https://bugs.mojang.com/browse/MC-162340) World border is rendered behind transparent blocks
-   [MC-162665](https://bugs.mojang.com/browse/MC-162665) Food does not drop from a campfire when it is put out with a shovel/water bottle
-   [MC-163910](https://bugs.mojang.com/browse/MC-163910) Hand animation sometimes plays for a second time with high ping
-   [MC-164233](https://bugs.mojang.com/browse/MC-164233) "Skilled" villagers without job site do not get precedence over unemployed villagers
-   [MC-165549](https://bugs.mojang.com/browse/MC-165549) Arm swing animation is still played when drinking an item
-   [MC-166135](https://bugs.mojang.com/browse/MC-166135) Bees inside a nest/hive don't grow up or get their breeding timer reset
-   [MC-167039](https://bugs.mojang.com/browse/MC-167039) Right-clicking on a spawner with the same mob spawn egg as in spawner plays hand animation
-   [MC-169891](https://bugs.mojang.com/browse/MC-169891) Zombie Reinforcements can spawn in regardless if light level is higher than 9 in nether (hard difficulty)
-   [MC-171515](https://bugs.mojang.com/browse/MC-171515) Semi-transparent items don't render properly in front of semi-transparent blocks
-   [MC-171553](https://bugs.mojang.com/browse/MC-171553) Basalt can generate inside Nether fortresses
-   [MC-172079](https://bugs.mojang.com/browse/MC-172079) The /clear command output doesn't count items in the inventory crafting grid
-   [MC-172142](https://bugs.mojang.com/browse/MC-172142) Items are invisible while being picked up
-   [MC-172197](https://bugs.mojang.com/browse/MC-172197) Nylium is not dropping netherrack when it is broken by pickaxe
-   [MC-172272](https://bugs.mojang.com/browse/MC-172272) /clear removes all items from crafting grid regardless of item type
-   [MC-172479](https://bugs.mojang.com/browse/MC-172479) Hoglins immediately attack invisible players
-   [MC-172980](https://bugs.mojang.com/browse/MC-172980) Light does not propagate across chunk borders properly
-   [MC-173032](https://bugs.mojang.com/browse/MC-173032) Fossils can overwrite the stronghold end portal
-   [MC-173063](https://bugs.mojang.com/browse/MC-173063) Redstone wire doesn't update connections going up or down when being placed by commands
-   [MC-173197](https://bugs.mojang.com/browse/MC-173197) Zombified Piglin does not hold its arms upwards like a zombie
-   [MC-173404](https://bugs.mojang.com/browse/MC-173404) Desync when mounting an entity while sneaking
-   [MC-173552](https://bugs.mojang.com/browse/MC-173552) Nether Fossil support islands are sometimes cut off at chunk borders
-   [MC-174307](https://bugs.mojang.com/browse/MC-174307) Nether fossil stops basalt pillar
-   [MC-174325](https://bugs.mojang.com/browse/MC-174325) Mushrooms or Nether fungi can replace the stem of large nether fungi (trees)
-   [MC-174692](https://bugs.mojang.com/browse/MC-174692) Shroomlights, wart blocks and vines can overwrite the stem of large Nether fungi
-   [MC-174932](https://bugs.mojang.com/browse/MC-174932) Right-to-left text appears left-to-right after game start until language is changed
-   [MC-175553](https://bugs.mojang.com/browse/MC-175553) Piglins don't drop their inventories when converted to zombified piglins
-   [MC-176020](https://bugs.mojang.com/browse/MC-176020) If a player is riding a strider, other players can not see the animation of the strider
-   [MC-176051](https://bugs.mojang.com/browse/MC-176051) Glowstone in the offhand sets spawn point and charges respawn anchor at the same time
-   [MC-176147](https://bugs.mojang.com/browse/MC-176147) Basalt randomly gets cut off
-   [MC-176628](https://bugs.mojang.com/browse/MC-176628) Frost Walker protects player from fire
-   [MC-177150](https://bugs.mojang.com/browse/MC-177150) Ticking entity java.lang.IllegalStateException: Tag minecraft:fire used before it was bound
-   [MC-177265](https://bugs.mojang.com/browse/MC-177265) Piglin and Zombified Piglin right arm/leg/loincloth textures are identical to the left ones
-   [MC-177626](https://bugs.mojang.com/browse/MC-177626) Spruce generation is broken
-   [MC-177870](https://bugs.mojang.com/browse/MC-177870) Soul campfire doesn’t deal twice the amount of damage as normal campfire
-   [MC-177888](https://bugs.mojang.com/browse/MC-177888) Blackstone can’t be used to repair stone tools and weapons using an anvil
-   [MC-177962](https://bugs.mojang.com/browse/MC-177962) Giant fungi can replace waterlogged blocks when growing
-   [MC-177970](https://bugs.mojang.com/browse/MC-177970) Player can occasionally be forced into crawling in one block tall spaces
-   [MC-178003](https://bugs.mojang.com/browse/MC-178003) Fossils can generate inside of desert temples
-   [MC-178441](https://bugs.mojang.com/browse/MC-178441) Endermen don't avoid the wither's skull projectiles
-   [MC-179020](https://bugs.mojang.com/browse/MC-179020) Jigsaw blocks do not disappear post-gen when structure is spawned using the 'Generate' action from an initial jigsaw
-   [MC-179890](https://bugs.mojang.com/browse/MC-179890) Fire stops ticking forever if gamerule doFireTick is set to false once
-   [MC-179909](https://bugs.mojang.com/browse/MC-179909) 2x2 trees sometimes fail to grow, but if they grow, they always grow on the surface
-   [MC-180098](https://bugs.mojang.com/browse/MC-180098) Farmer villagers' farming behavior is broken
-   [MC-180771](https://bugs.mojang.com/browse/MC-180771) Observer not updating when tree grows leaves in front of it
-   [MC-180877](https://bugs.mojang.com/browse/MC-180877) Fire does not spread from netherack to other blocks
-   [MC-181108](https://bugs.mojang.com/browse/MC-181108) Right-to-left text is displayed left-to-right at all times
-   [MC-181464](https://bugs.mojang.com/browse/MC-181464) When a piglin picks up a shield the gear equip sound is infinitely spammed
-   [MC-181529](https://bugs.mojang.com/browse/MC-181529) Ctrl + Pick Block no longer copies skull / head NBT data properly
-   [MC-181555](https://bugs.mojang.com/browse/MC-181555) When replacing a snow layer with a grass block, podzol or mycelium, the block has the "snowy=true" blockstate
-   [MC-182666](https://bugs.mojang.com/browse/MC-182666) Parity issue: Piglins do not have a dancing animation when celebrating their victory
-   [MC-182888](https://bugs.mojang.com/browse/MC-182888) Compasses and clocks work like normal in villager trading GUI
-   [MC-182919](https://bugs.mojang.com/browse/MC-182919) Horse armour stops rendering if you equip the horse with a saddle by right-clicking
-   [MC-182967](https://bugs.mojang.com/browse/MC-182967) Throwing ender pearl whilst mounted doesn't teleport you
-   [MC-183275](https://bugs.mojang.com/browse/MC-183275) Basalt pillars end above the lava in Java Edition but inside of the lava in Bedrock Edition
-   [MC-183374](https://bugs.mojang.com/browse/MC-183374) Text on signs stops rendering while still in view
-   [MC-183496](https://bugs.mojang.com/browse/MC-183496) Enchantment glint doesn't render in boat interior
-   [MC-183718](https://bugs.mojang.com/browse/MC-183718) Stronghold end portal can be overwritten by ocean ruins
-   [MC-183808](https://bugs.mojang.com/browse/MC-183808) "Bee Our Guest" advancement does not trigger when harvesting honey from bee nests
-   [MC-183860](https://bugs.mojang.com/browse/MC-183860) Zombie villager converted from villager gets PersistenceRequired depending on whether attacking zombie had it
-   [MC-184482](https://bugs.mojang.com/browse/MC-184482) End Gateways don't generate after defeating the ender dragon
-   [MC-184609](https://bugs.mojang.com/browse/MC-184609) Text renders in the wrong order
-   [MC-184619](https://bugs.mojang.com/browse/MC-184619) Piglins riding on other entities float
-   [MC-184629](https://bugs.mojang.com/browse/MC-184629) Piglins riding on hoglins or other piglins automatically dismount them
-   [MC-184730](https://bugs.mojang.com/browse/MC-184730) \[Crash\] "java.lang.NullPointerException: mouseClicked event handler" Some Superflat presets crash immediately when trying to generate them
-   [MC-184740](https://bugs.mojang.com/browse/MC-184740) Structures generated in previous versions are not recognised as valid structures, causing mobs not to spawn
-   [MC-184778](https://bugs.mojang.com/browse/MC-184778) Redstone dust can be toggled between cross and dot in adventure mode
-   [MC-184936](https://bugs.mojang.com/browse/MC-184936) Old Minecraft logo in the end poem/credits
-   [MC-185156](https://bugs.mojang.com/browse/MC-185156) Worldgen settings are not validated and can cause crashes

---

# Minecraft Snapshot 20w21a

In this snapshot, we're adding support for custom world settings and custom dimensions. This is an early release to hear your feedback about this feature - do note that this support is considered experimental and unsupported. Any custom world settings may change from one snapshot to the next, and worlds using custom settings will be clearly marked as experimental in your worlds list. ​

## New Features in 20w21a

​

-   Added the ability to toggle redstone wire between a cross and a dot
-   Added import/export world settings functionality
-   Added a new disableMultiplayer command line option - when used, the Multiplayer button is disabled
-   Added a new disableChat command line option - when used, receiving and sending online chat is disabled

​

### Redstone Toggle

​

-   When right clicking a single piece of redstone, it toggles between a the cross and the dot
-   A dot of redstone will not power its surrounding blocks

​

## Changes in 20w21a

​

-   Piglins no longer walk around when admiring gold
-   If you hurt a piglin while it is admiring an ingot, the ingot will now disappear
-   Increased the chance of ores to generate in the Basalt Deltas to balance against the reduced amount of Netherrack in this biome
-   Lily pads are now considered junk fishing loot rather than treasure
-   Updated logos for Mojang Studios and Minecraft
-   Temporarily removed structure settings from flat level preset strings (workaround: use import/export settings functionality)

​

## Technical Changes in 20w21a

​

-   Added the ability to control the height of the `spreadplayers` command
-   Added custom worlds and custom dimensions

​

### Commands

​

#### `spreadplayers`

​ Added an optional argument to specify maximum height. New syntax: `spreadplayers <center> <spreadDistance> <maxRange> [under <maxHeight>] <respectTeams> <targets>` ​

-   `maxHeight` - Specifies the maximum height for resulting positions

​

#### `locate`

​

-   Structure names are now specified as lowercase

​

### Custom Worlds

​

-   Added experimental support for new custom worlds
-   Edit world screen now has an option to export world settings to a JSON file
-   During world creation you can import previously exported world settings
-   A bunch of new parameters are exposed, but marked as experimental, meaning you can play with them, but there is no guarantee that any of them will continue working (even in the next snapshot!)
-   Flat level preset string lost structure settings (they are now stored in a common format for all worlds), we will restore some form of this functionality soon
-   Buffet world can no longer be created from server.properties, flat level settings changed a bit; better support for custom world creation on the server is coming soon

​

## Fixed bugs in 20w21a

-   [MC-97247](https://bugs.mojang.com/browse/MC-97247) Map making sound uses equipment sound subtitle
-   [MC-97507](https://bugs.mojang.com/browse/MC-97507) Using item which modifies the held item shows "Gear equips" subtitle
-   [MC-107103](https://bugs.mojang.com/browse/MC-107103) Trying to interact with entity 3 or more blocks away without seeing its eyes only interacts client-side
-   [MC-113068](https://bugs.mojang.com/browse/MC-113068) Zombie banging on door subtitle is called "Block broken"
-   [MC-123155](https://bugs.mojang.com/browse/MC-123155) When any non-player entity enters an End portal the obsidian platform is not regenerated and the entity can fall into the void
-   [MC-147516](https://bugs.mojang.com/browse/MC-147516) Hostile mobs will sometimes stop attacking/following their target when directly next to it
-   [MC-166292](https://bugs.mojang.com/browse/MC-166292) Subtitle from foxes eating chorus fruit: "Player teleports"
-   [MC-169764](https://bugs.mojang.com/browse/MC-169764) Fish flopping sound shows 'Footsteps' subtitles
-   [MC-170930](https://bugs.mojang.com/browse/MC-170930) Nether Sprouts item not visible when held in the hand in first person
-   [MC-172090](https://bugs.mojang.com/browse/MC-172090) Piglins would rather hold a golden item instead of a crossbow
-   [MC-172207](https://bugs.mojang.com/browse/MC-172207) Parrots don't imitate hoglins, zoglins and piglins
-   [MC-172255](https://bugs.mojang.com/browse/MC-172255) Piglins immediately dismount any entity that they are riding
-   [MC-177075](https://bugs.mojang.com/browse/MC-177075) Taking product out of stonecutter produces no subtitle
-   [MC-177088](https://bugs.mojang.com/browse/MC-177088) Polar bear step sound does not have subtitles
-   [MC-177438](https://bugs.mojang.com/browse/MC-177438) Turtle egg's name inconsistently capitalized across different subtitles
-   [MC-177830](https://bugs.mojang.com/browse/MC-177830) Blackstone and basalt prevent Ancient Debris and other Nether ores from generating
-   [MC-178130](https://bugs.mojang.com/browse/MC-178130) Zombie Villagers are called "Zombie" in some subtitles
-   [MC-178212](https://bugs.mojang.com/browse/MC-178212) Nether planks, their variants, and hyphae are harder than stems
-   [MC-178298](https://bugs.mojang.com/browse/MC-178298) Ancient debris and nether gold ore can't generate in Basalt Deltas
-   [MC-180257](https://bugs.mojang.com/browse/MC-180257) Crash when setting LodestonePos of compass to something other than NBT compound
-   [MC-180852](https://bugs.mojang.com/browse/MC-180852) There is no space on the beacon's secondary power effects in the UI
-   [MC-181270](https://bugs.mojang.com/browse/MC-181270) Trying to open old worlds (in Region format?) without version information in snapshots does not show warning screen
-   [MC-181298](https://bugs.mojang.com/browse/MC-181298) Game crashes when trying to generate a nether biome superflat world with ruined portals
-   [MC-181463](https://bugs.mojang.com/browse/MC-181463) The buttons are not selected in the right order using Tab in the new world creation menus
-   [MC-181499](https://bugs.mojang.com/browse/MC-181499) Buckets cannot be emptied into a source block, but still produce a sound when trying
-   [MC-181511](https://bugs.mojang.com/browse/MC-181511) Chunks with redstone are removed
-   [MC-181522](https://bugs.mojang.com/browse/MC-181522) Chunks that haven't been explored since 1.13 are resetting
-   [MC-181611](https://bugs.mojang.com/browse/MC-181611) Vindicators stop attacking you when they are standing really close to you
-   [MC-182514](https://bugs.mojang.com/browse/MC-182514) 15 Block States per SubChunk Limit during World Upgrade
-   [MC-182743](https://bugs.mojang.com/browse/MC-182743) Wither skeletons don't spawn inside of wither roses
-   [MC-182912](https://bugs.mojang.com/browse/MC-182912) Piglins still do not change their current crossbow for a new enchanted one
-   [MC-183249](https://bugs.mojang.com/browse/MC-183249) Carving Mask BitSets created for lower chunk statuses
-   [MC-183786](https://bugs.mojang.com/browse/MC-183786) Named seeds that are not numbers are not being recognized

---

# Minecraft Snapshot 20w20b

This week we are releasing a bit of a smaller snapshot. However, if you're into switching game modes and completing advancements, this is right up your alley!

**Edit:** We've now released 20w20b to fix a bug

## Fixed Bug in 20w20b

-   [MC-183769](https://bugs.mojang.com/browse/MC-183769) NPE in server initialization

## New Features in 20w20a

-   Added new Game Mode Switcher debug menu
-   Added new Nether Advancements

​

### Game Mode Switcher

New F3 debug feature which allows you to switch game modes with traditional "tabbing" functionality. ​

-   Hold F3 and tap F4 to open the menu
-   Tapping F4 will cycle the game mode, or you can use the mouse
-   Release F3 to apply
-   Your last game mode is remembered and will be the first selected option, so you can quickly toggle between two game modes with a single press of F3 + F4!

​

#### F3 + N (Toggle Spectator)

A small change has been made to this debug combination. ​

-   By default, using this key would return to Creative after toggling from Spectator. It now will toggle back to the previous game mode you had.
-   As an example, if you were in Survival, then toggled to Spectator and back, you would be set back to Survival.

​

### New Advancements

-   `Hidden in the Depths` unlocks when obtaining Ancient Debris
-   `Cover Me in Debris` unlocks when obtaining full Netherite armor
-   `Country Lode, Take Me Home` unlocks when using a Compass on a Lodestone
-   `Who Is Cutting Onions?` unlocks when obtaining Crying Obsidian
-   `Not Quite "Nine" Lives` unlocks when setting a Respawn Anchor to the maximum
-   `This Boat Has Legs` unlocks when riding a Strider with a Fungus on a Stick
-   `Hot Tourist Destinations` unlocks when visiting all Biomes in the Nether
-   `Those Were the Days` unlocks when entering a Bastion
-   `War Pigs` unlocks when looting a chest in a Bastion
-   `Oh Shiny` unlocks when distracting an angry Piglin with gold

​

## Changes in 20w20a

-   The `Bullseye` advancement now unlocks when hitting the bullseye of a target block from at least 30 meters away
-   The `Serious Dedication` advancement is now awarded for obtaining a Netherite Hoe
-   Obtaining Blackstone now also counts for the `Stone Age` advancement
-   Breeding Striders now counts for `The Parrots and the Bats` and is now required for `Two by Two`

​

## Technical Changes in 20w20a

-   Shulkers with "NoAI" can now be summoned with rotation.
-   Added `thrown_item_picked_up_by_entity` advancement trigger
-   Added `player_generates_container_loot` advancement trigger
-   Added `item_used_on_block` advancement trigger
-   Removed `safely_harvest_honey` advancement trigger

​

### Advancements

#### `item_used_on_block` trigger type

Properties:

-   `item` matches the thrown item which was picked up
-   `entity` matches the entity which picked up the item

​

#### `player_generates_container_loot` trigger type

Properties:

-   `loot_table` matches the resource location of the generated loot table

​

#### `item_used_on_block` trigger type

Properties:

-   `location` matches the location at the center of the block the item was used on
-   `item` matches the item used on the block

​

### Miscellaneous trigger changes

-   `location` got a new property `smokey` which checks if the location is closely above a campfire
-   `entity_properties` got new properties `vehicle` and `targetedEntity` which match the vehicle or the entity targeted by a mob

​

## Fixed bugs in 20w20a

-   [MC-182967](https://bugs.mojang.com/browse/MC-182967) Throwing ender pearl whilst mounted doesn't teleport you
-   [MC-179481](https://bugs.mojang.com/browse/MC-179481) Structure block offset can't be bigger than 32
-   [MC-175992](https://bugs.mojang.com/browse/MC-175992) Striders are not part of the "Two by Two" advancement challenge
-   [MC-173756](https://bugs.mojang.com/browse/MC-173756) Ice Bucket Challenge advancement can be obtained by collecting obsidian from bartering
-   [MC-173207](https://bugs.mojang.com/browse/MC-173207) Bullseye advancement can be made when using a non-arrow projectile, even though the description explicitly mentions arrows
-   [MC-118234](https://bugs.mojang.com/browse/MC-118234) Advancement 'Not Today, Thank You' can be triggered by non-arrow projectiles

---

# Minecraft Snapshot 20w19a

This snapshot contains another round of tweaks and bugfixes, but also quality of life features such as **strider distancing**. It might not be as important as social distancing, but we hope you'll like it. Stay safe and wash your hands!

## New Features in 20w19a

-   Added "distance by strider" statistic
-   Patches of blackstone and gravel now generate in all Nether biomes, and patches of soul sand now generate in Soul Sand Valleys

​

## Changes in 20w19a

-   Villagers can now spawn iron golems regardless of their profession status or latest working time
-   Bastions are now a bit less common
-   Lowered the amount that Weeping and Twisting vines grow when bonemealed
-   You now need to use shears to get an item when breaking Nether Sprouts
-   Tweaked spawning of mobs to more closely adhere to mob caps
-   Biome distribution in the Nether has been tweaked

## Technical Changes in 20w19a

-   Fish now have their own mob category and mob cap

​

## Fixed bugs in 20w19a

-   [MC-87949](https://bugs.mojang.com/browse/MC-87949) The shield use statistic is not working
-   [MC-89956](https://bugs.mojang.com/browse/MC-89956) Levitation has no effect if gliding with elytra
-   [MC-116293](https://bugs.mojang.com/browse/MC-116293) Functioning clock and compass in recipe book
-   [MC-125613](https://bugs.mojang.com/browse/MC-125613) Datapack tag "stairs" does not use #wooden\_stairs
-   [MC-145862](https://bugs.mojang.com/browse/MC-145862) Villagers try to sleep in occupied beds
-   [MC-152084](https://bugs.mojang.com/browse/MC-152084) Villagers occasionally stand up out of beds at night, then can never sleep in that bed again
-   [MC-152170](https://bugs.mojang.com/browse/MC-152170) When a villager takes the bed of another villager then the bed's previous owner will not look for a new bed
-   [MC-157077](https://bugs.mojang.com/browse/MC-157077) Villagers will not sleep in beds at night
-   [MC-158542](https://bugs.mojang.com/browse/MC-158542) Iron Golems don't stop spawning
-   [MC-160250](https://bugs.mojang.com/browse/MC-160250) Naturally generated villagers are not pathfinding towards their POI; POI detection range is too small
-   [MC-166764](https://bugs.mojang.com/browse/MC-166764) Villagers spawned on world generation have a lower follow range than villagers spawned by other means
-   [MC-170612](https://bugs.mojang.com/browse/MC-170612) Villagers spawned by meeting points have frozen AI and do not move when that chunk is freshly generated
-   [MC-172107](https://bugs.mojang.com/browse/MC-172107) Piglins and Hoglins don't get zombified in the end
-   [MC-172524](https://bugs.mojang.com/browse/MC-172524) Letters of name tag render inconsistently when sneaking (within the same name tag)
-   [MC-172899](https://bugs.mojang.com/browse/MC-172899) Piglins with blocks (pumpkins) equipped on their heads show z-fighting
-   [MC-173015](https://bugs.mojang.com/browse/MC-173015) Crimson roots, Warped roots, and Nether sprouts are not randomly offset
-   [MC-173115](https://bugs.mojang.com/browse/MC-173115) Mobs can spawn inside of wither roses
-   [MC-174568](https://bugs.mojang.com/browse/MC-174568) Rail updates are 3-4x times laggier since 1.13
-   [MC-174909](https://bugs.mojang.com/browse/MC-174909) Endermen don't teleport when on magma blocks
-   [MC-175251](https://bugs.mojang.com/browse/MC-175251) Fish are spawning in with extremely high numbers. Over 200 different entities of cod every five minutes
-   [MC-177839](https://bugs.mojang.com/browse/MC-177839) Blackstone and blackstone walls use the blackstone side face on the bottom, while blackstone stairs and slabs use the blackstone top face on the bottom
-   [MC-178487](https://bugs.mojang.com/browse/MC-178487) Saddles on untamed horses no longer render
-   [MC-179989](https://bugs.mojang.com/browse/MC-179989) Smithing Table and Anvil UI does not have "Inventory" title above player inventory
-   [MC-180064](https://bugs.mojang.com/browse/MC-180064) Piglins would rather use an unenchanted crossbow instead of an enchanted crossbow
-   [MC-180297](https://bugs.mojang.com/browse/MC-180297) Player name color in list appears too dark
-   [MC-180407](https://bugs.mojang.com/browse/MC-180407) Piglin bartering is limited to dropping a single item stack from the loot table
-   [MC-180410](https://bugs.mojang.com/browse/MC-180410) Enderman spawn rate seems very low on upgraded worlds
-   [MC-180575](https://bugs.mojang.com/browse/MC-180575) Dispensers now always plays "dispenser failed" when dispensing glowstone
-   [MC-181353](https://bugs.mojang.com/browse/MC-181353) Warped and Crimson Doors have no hinges
-   [MC-181418](https://bugs.mojang.com/browse/MC-181418) Entity names can no longer be colored
-   [MC-181424](https://bugs.mojang.com/browse/MC-181424) Fish (and other items from fishing) cannot be caught with a fishing rod
-   [MC-181461](https://bugs.mojang.com/browse/MC-181461) Enchantement glint doesn't render on shields, tridents and elytra
-   [MC-181479](https://bugs.mojang.com/browse/MC-181479) Map marker labels do not render properly
-   [MC-181524](https://bugs.mojang.com/browse/MC-181524) Redstone does not visually connect when going up soul sand
-   [MC-181566](https://bugs.mojang.com/browse/MC-181566) Powered redstone dust only generates particles at the center of the block
-   [MC-181944](https://bugs.mojang.com/browse/MC-181944) Font of category/section text in creative mode item selection screen is much thicker than in 1.15.2
-   [MC-182595](https://bugs.mojang.com/browse/MC-182595) Parity issue: Blackstone doesn't generate in ore veins in nether wastes

---

# Minecraft Snapshot 20w18a

In this snapshot we made some changes to Redstone wire and we fixed a bunch of bugs.

## Changes in 20w18a

-   Redstone wire changes
-   The target block now conducts redstone signals

​

### Redstone wire

The blockstate, rendering and behavior of redstonewire are more in line with each other. Redstone will provide power to blocks on all sides it shows a visual connection to, and not do so on those sides without a visual connection. ​

-   A single redstone wire is now represented as a cross.
-   A wire on top of a block, which is redirected from below, will power the sides it is redirected to now. E.g. a fence gate above the redirecting wire will be powered.
-   Wires that redirect upwards to wires on non-conductive blocks used to only be redirected visually. Now this redirection applies to their behavior as well.
-   A wire that is redirected to go over a block will now always provide power to the block. This is most noticeable when the wire has signal strength 1.

​![Comparison between 1.15.2 and snapshot 20w18a](https://launchercontent.mojang.com/images/RedstoneChanges3_741x421.png)

## Technical Changes in 20w18a

-   Added a `enable-status` option to the server.properties file which if set to `false` will suppress replies to status requests from clients. This makes the server appear offline in the multiplayer screen.
-   Added control over how much entity data a server sends to clients
-   Advancement system changes

​

### Entity Broadcasting

It is now possible to control at what range the server sends data about entities to clients. ​

-   Added an `entity-broadcast-range-percentage` server property controlling how close entities need to be before being sent to clients. Higher values means entities are visible further away from players but cause more network traffic. Specifies percentage of default value, so for example `50` specifies half of the default range.

​

### Advancements

-   Added `player` check to every trigger (except `impossible`)
-   Entity checks in triggers can now use loot table condition syntax

​

#### Extended entity checks

Entity checks in triggers can now use loot table condition syntax. Old notation:

    {
      "trigger": "minecraft:player_killed_entity",
      "conditions": {
        "entity": {
          "type": "minecraft:blaze"
        }
      }
    }
    

is now equivalent to:

    {
      "trigger": "minecraft:player_killed_entity",
      "conditions": {
        "entity": [
          {
            "condition": "minecraft:entity_properties",
            "predicate": {
              "type": "minecraft:blaze"
            },
            "entity": "this"
          }
        ]
      }
    }
    

**Note 1**: Like in loot tables, all conditions in top level array must be met for whole condition to trigger. ​ **Note 2**: To access new functionality, top level element must be JSON array. JSON object are interpreted as old notation.  
​ Full list of extended triggers:

-   New field `player` in every trigger
-   `bred_animals` - `parent`, `partner`, `child`
-   `channeled_lightning` - `victims`
-   `cured_zombie_villager` - `zombie`, `villager`
-   `fishing_rod_hooked` - `entity`
-   `killed_by_crossbow` - `victims`
-   `player_killed_entity` - `entity`
-   `entity_killed_player` - `entity`
-   `player_hurt_entity` - `entity`
-   `summoned_entity` - `entity`
-   `tame_animal` - `entity`
-   `target_hit` - `projectile`
-   `villager_trade` - `villager`

​

#### Miscellaneous trigger changes

-   Due to addition of `player`, existing contents of `location`, `slept_in_bed`, `hero_of_the_village`, `voluntary_exile` can now be placed in `location` field instead of top-level object. Old syntax is still supported, but depreciated.

​

## Fixed bugs in 20w18a

-   [MC-11211](https://bugs.mojang.com/browse/MC-11211) Unable to perform many right click actions when targeting the top face of blocks placed at y=255
-   [MC-111381](https://bugs.mojang.com/browse/MC-111381) Rendering rotations for shulkers are set in onInitialSpawn method
-   [MC-143904](https://bugs.mojang.com/browse/MC-143904) Adding a non-rail block to the "rails" block tag will crash the game when placing a minecart on it
-   [MC-147255](https://bugs.mojang.com/browse/MC-147255) Beds in the overworld will explode if in a nether wastes biome
-   [MC-162385](https://bugs.mojang.com/browse/MC-162385) The background of the title text does not fade with the text
-   [MC-166269](https://bugs.mojang.com/browse/MC-166269) Wet wolves become black for an instant after shaking off water
-   [MC-166296](https://bugs.mojang.com/browse/MC-166296) Mobs picking up and equipping items does not play the equipping sound
-   [MC-170840](https://bugs.mojang.com/browse/MC-170840) Broken spawn rates in soul sand valleys and warped forests
-   [MC-170944](https://bugs.mojang.com/browse/MC-170944) /locatebiome messages do not fit for all biome names
-   [MC-171523](https://bugs.mojang.com/browse/MC-171523) Inconsistent strings for warped and crimson wall signs
-   [MC-172172](https://bugs.mojang.com/browse/MC-172172) Adult piglins spin around while following the player
-   [MC-172253](https://bugs.mojang.com/browse/MC-172253) Equip sound doesn't play when Piglins equip items
-   [MC-173067](https://bugs.mojang.com/browse/MC-173067) NullPointerException when a structure containing a campfire is placed during world generation
-   [MC-173198](https://bugs.mojang.com/browse/MC-173198) Target blocks are transparent and do not transfer redstone signals
-   [MC-173385](https://bugs.mojang.com/browse/MC-173385) New Nether lighting system doesn't affect fluids, entity-like blocks (chests, etc.) and entities
-   [MC-173747](https://bugs.mojang.com/browse/MC-173747) Armor enchantment glint doesn't render
-   [MC-174573](https://bugs.mojang.com/browse/MC-174573) Nether vines can drop multiple copies with fortune (free duplication)
-   [MC-174593](https://bugs.mojang.com/browse/MC-174593) Inconsistent pluralisation in "fell off a scaffolding"
-   [MC-174811](https://bugs.mojang.com/browse/MC-174811) Zombified piglins are able to spawn on top of nether wart blocks
-   [MC-175107](https://bugs.mojang.com/browse/MC-175107) It's possible to get Bad Omen VI in Survival mode
-   [MC-175740](https://bugs.mojang.com/browse/MC-175740) Game crashes when dispenser is used on non-beehive block in #beehives tag
-   [MC-175741](https://bugs.mojang.com/browse/MC-175741) Game crashes when a cat attempts to sleep in a non-bed in the #beds tag
-   [MC-176028](https://bugs.mojang.com/browse/MC-176028) Striders can spawn in stacks of three or more
-   [MC-176032](https://bugs.mojang.com/browse/MC-176032) Striders can float
-   [MC-176135](https://bugs.mojang.com/browse/MC-176135) Striders riding other entities are not cold
-   [MC-176203](https://bugs.mojang.com/browse/MC-176203) Striders with Levitation walking on Lava don't levitate
-   [MC-176459](https://bugs.mojang.com/browse/MC-176459) Baby striders can spawn with saddles
-   [MC-176468](https://bugs.mojang.com/browse/MC-176468) Adult striders can spawn with saddles
-   [MC-177105](https://bugs.mojang.com/browse/MC-177105) Piglins, hoglins, zoglins and villagers look at their target's feet instead of its head
-   [MC-177127](https://bugs.mojang.com/browse/MC-177127) Unnecessary exclamation point in subtitle "End Portal opens!"
-   [MC-177173](https://bugs.mojang.com/browse/MC-177173) Baby Zoglin age status value is not stored in the NBT tag.
-   [MC-177561](https://bugs.mojang.com/browse/MC-177561) Compasses used on the top of lodestone at y=255 do not break when the lodestone is destroyed
-   [MC-177771](https://bugs.mojang.com/browse/MC-177771) "death.attack.fireworks.item" displays raw translation string (is untranslated)
-   [MC-177790](https://bugs.mojang.com/browse/MC-177790) Piglin Banners are named block.minecraft.banner.piglin.\[\]
-   [MC-177794](https://bugs.mojang.com/browse/MC-177794) Globe Banner Pattern is not required to add the globe to a banner
-   [MC-177816](https://bugs.mojang.com/browse/MC-177816) Failed to access/delete level should be "world"
-   [MC-177911](https://bugs.mojang.com/browse/MC-177911) Cave generator doesn't cut through blackstone
-   [MC-177951](https://bugs.mojang.com/browse/MC-177951) Game crashes when fire starters are used on a non-campfire in the #campfires tag
-   [MC-177976](https://bugs.mojang.com/browse/MC-177976) Baby piglins can pick up soul campfires
-   [MC-178013](https://bugs.mojang.com/browse/MC-178013) Zombified Piglins riding striders can despawn, leaving saddled striders
-   [MC-178129](https://bugs.mojang.com/browse/MC-178129) Entity conversion subtitles use inconsistent tenses
-   [MC-178336](https://bugs.mojang.com/browse/MC-178336) The message "You have no home bed or respawn anchor, or it was obstructed" doesn't make it clear that your respawn anchor might have been depleted
-   [MC-178817](https://bugs.mojang.com/browse/MC-178817) "Chain Blocks" don't have a "waterlogged" state
-   [MC-178943](https://bugs.mojang.com/browse/MC-178943) Piglins/hoglins spawned in bastion remnants can outrun players
-   [MC-178949](https://bugs.mojang.com/browse/MC-178949) Bastion Remnants cannot be generated in in superflat worlds
-   [MC-179839](https://bugs.mojang.com/browse/MC-179839) Chat text renders behind the armor bar
-   [MC-179841](https://bugs.mojang.com/browse/MC-179841) Game crashes when you optimize your world
-   [MC-179845](https://bugs.mojang.com/browse/MC-179845) Rain falls through any blocks in some spots
-   [MC-179847](https://bugs.mojang.com/browse/MC-179847) Hoglins and Piglins spin around
-   [MC-179850](https://bugs.mojang.com/browse/MC-179850) There is no difference between Entity Distance 100% and 500%
-   [MC-179858](https://bugs.mojang.com/browse/MC-179858) Maps show stone-like pattern despite it not being there
-   [MC-179863](https://bugs.mojang.com/browse/MC-179863) Setting attribute minecraft:generic.max\_health value to 0 or lower causes an infinite death loop after dying
-   [MC-179866](https://bugs.mojang.com/browse/MC-179866) In some spots, it is raining even if it should be snowing
-   [MC-179868](https://bugs.mojang.com/browse/MC-179868) Crash when going to a previous page of writable books
-   [MC-179883](https://bugs.mojang.com/browse/MC-179883) Raw JSON text duplicates components in "extra" in entity names
-   [MC-179886](https://bugs.mojang.com/browse/MC-179886) Play button overlay doesn't appear in worldsave selection GUI
-   [MC-179905](https://bugs.mojang.com/browse/MC-179905) Caption of game rule screen is missing
-   [MC-179952](https://bugs.mojang.com/browse/MC-179952) Height map data doesn't get converted
-   [MC-179954](https://bugs.mojang.com/browse/MC-179954) Keybindings are not correctly inserted into the demo info box text
-   [MC-180030](https://bugs.mojang.com/browse/MC-180030) Adult hoglins zombified into an adult zoglin deals the same damage as a baby
-   [MC-180100](https://bugs.mojang.com/browse/MC-180100) Rain particles appear black under certain conditions
-   [MC-180110](https://bugs.mojang.com/browse/MC-180110) Underline and strikethrough in JSON text don't always render correctly
-   [MC-180125](https://bugs.mojang.com/browse/MC-180125) Incorrect font spacing on non-BMP characters
-   [MC-180135](https://bugs.mojang.com/browse/MC-180135) Empty chat messages are not displayed
-   [MC-180138](https://bugs.mojang.com/browse/MC-180138) Long messages in chat no longer have hanging indention
-   [MC-180246](https://bugs.mojang.com/browse/MC-180246) The "r" in "Game rules" is not capitalized
-   [MC-180248](https://bugs.mojang.com/browse/MC-180248) The "g" in "Upgrade gear" is not capitalized
-   [MC-180299](https://bugs.mojang.com/browse/MC-180299) "Elytra" in "Disable Elytra movement check" is inconsistently capitalized
-   [MC-180353](https://bugs.mojang.com/browse/MC-180353) Chat background renders in front of the Debug Menu but chat text renders behind it
-   [MC-181296](https://bugs.mojang.com/browse/MC-181296) Panorama has wrong overlay when using Programmer Art

---

# Minecraft Snapshot 20w17a

This week's snapshot brings you some tweaks, bugfixes, and technical changes!

We also have a survey up so that you can tell us what you think about the Nether Update. You can find it by clicking [here](https://www.surveymonkey.com/r/SF65G2F). We would very much appreciate if you could take the time and fill it out.

## New Features in 20w17a

-   Added an Entity Distance scale option ranging from 50% to 500%
-   Difficulty and game rules can now be changed from "Create World" screen

## Changes in 20w17a

-   Improved Smithing Table UI
-   Ruined portals now spawn less frequently
-   Renamed "Soul Fire Torch" and "Soul Fire Lantern" to "Soul Torch" and "Soul Lantern"
-   Tweaked Bastion Remnant loot
-   Walls now create posts under more things, like pressure plates and banners
-   The "Singleplayer" button will jump directly to "Create World" screen if there are no worlds to select

## Technical Changes in 20w17a

-   Block storage format in chunks slightly changed to speed up various tasks (rendering, pathfinding, world generation, etc).
-   Chat component style can now select font.
-   Full range of Unicode characters is supported (some may know what that means 😉)
-   Added the `attribute` command

### World save format

-   Saving `level.dat` now uses randomly-named temporary files (instead of using `level.dat_new` every time)
-   `player/*.dat` are now saved in a way similar to `level.dat` (including leaving `.dat_old` files)

### Block storage

`BlockStates` in `Sections` elements no longer contain values stretching over multiple 64-bit fields. If number of bits per block is not power of two (i.e. single 64-bit value can't fill whole number of blockstates) some bits will not be used. For example, if single block state takes 5 bits, highest 4 bits of every 64-bit field will be unused. That also means slight increase in storage size (in case of 5 bits, from 320 to 342 64-bit fields).

### Commands

#### `attribute`

Adds modifies attribute on single entity. Possible syntax: Parameters:

-   `attribute <target> <attribute> get [<scale>]` - get total value of attribute
-   `attribute <target> <attribute> base set <value>` - sets base valye
-   `attribute <target> <attribute> base get [<scale>]` - get base value
-   `attribute <target> <attribute> modifier add <uuid> <name> <value> add|multiply|multiply_base` - adds modifier (fails if modifier is already present)
-   `attribute <target> <attribute> modifier remove <uuid>` - removes modifier
-   `attribute <target> <attribute> modifier value get <uuid> [<scale>]` - get value of modifier
-   `target` - single entity (note: only players, armor stands and mobs have attributes)
-   `attribute` - name of attribute (like `minecraft:generic.max_health`)
-   `name` - string (in optional quotes) describing human-readable name of modifier
-   `value` - floating point value (note: certain attributes have limits on final value, so your change might not be noticeable)

### Chat components

#### Hover event argument

-   `style.hoverEvent` parameter now has parameter `contents`, with contents depending on type:
    -   For `show_text` - chat component
    -   For `show_item` - either item id or object with fields `id`, `count` and `tag` (with last one being serialized NBT)
    -   For `show_entity` - object with fields: `id` (UUID), `name` (chat component) and `type` (entity type resource location)
-   Old style `value` argument is now deprecated (but still supported)

#### Colors

`color` property can now contain RGB value prefixed by `#`. For example `#55ff55` will result in the same color as `green`.

#### Custom fonts

Chat component style now supports `font` property, which is resource location for font in resource pack. No entry is equivalent to `minecraft:default`.

### Fonts

-   `Force Unicode` option now switches between normal and alternative font (called `uniform.json`) - no reload needed

## Fixed bugs in 20w17a

-   [MC-5410](https://bugs.mojang.com/browse/MC-5410) In creative mode, flying down is stopped when brushing up against ladders or vines.
-   [MC-31032](https://bugs.mojang.com/browse/MC-31032) Using only one empty map doesn't increase minecraft.used:minecraft.map
-   [MC-46417](https://bugs.mojang.com/browse/MC-46417) Sprint particles are generated in spectator mode
-   [MC-56373](https://bugs.mojang.com/browse/MC-56373) Selector and score text components don't work on hoverEvents
-   [MC-94535](https://bugs.mojang.com/browse/MC-94535) Flying and holding CTRL really close to the ground, emits walking particles
-   [MC-96319](https://bugs.mojang.com/browse/MC-96319) Mob pathfinding AI does not regard some blocks as obstructions and is unable to pathfind on top of them
-   [MC-100195](https://bugs.mojang.com/browse/MC-100195) Player retains 1-block hitbox if entering a minecart/boat while swimming or when flying with elytra or a riptide trident
-   [MC-114544](https://bugs.mojang.com/browse/MC-114544) Kicked by "Flying is not enabled on this server" while sleeping
-   [MC-120572](https://bugs.mojang.com/browse/MC-120572) /recipe crashes the game
-   [MC-126244](https://bugs.mojang.com/browse/MC-126244) '/locate', explorer maps, and treasure maps can cause extreme TPS lag, even leading to a complete server freeze if structure generation is turned off
-   [MC-149704](https://bugs.mojang.com/browse/MC-149704) Sneaking / crouching twice makes player sprint
-   [MC-169514](https://bugs.mojang.com/browse/MC-169514) Tamed parrots cannot be renamed unless they are flying
-   [MC-171561](https://bugs.mojang.com/browse/MC-171561) Only one player can access shulker box at a time
-   [MC-174359](https://bugs.mojang.com/browse/MC-174359) Piglins prefer using an unenchanted gold item instead of an enchanted gold item
-   [MC-175113](https://bugs.mojang.com/browse/MC-175113) Rain prevents entities from burning in fire
-   [MC-175186](https://bugs.mojang.com/browse/MC-175186) Respawning doesn't check if the "respawn block" is the correct one for the dimension
-   [MC-175998](https://bugs.mojang.com/browse/MC-175998) Striders are moving very fast between two blocks or when diagonally running into blocks
-   [MC-176029](https://bugs.mojang.com/browse/MC-176029) Right clicking a lodestone with a stack of compasses converts the whole stack
-   [MC-176060](https://bugs.mojang.com/browse/MC-176060) Recipe book doesn't load the entire empty map recipe anymore
-   [MC-176104](https://bugs.mojang.com/browse/MC-176104) Dropped compasses always point up
-   [MC-176116](https://bugs.mojang.com/browse/MC-176116) Saddle texture on Strider is backwards
-   [MC-176521](https://bugs.mojang.com/browse/MC-176521) Pressing space while the recipe book button is highlighted in crafting interfaces doesn't toggle the recipe book
-   [MC-177346](https://bugs.mojang.com/browse/MC-177346) Compass in a mob's hand does not point to correct location if mob turns
-   [MC-177776](https://bugs.mojang.com/browse/MC-177776) Netherite ingots are not sorted properly with other ingots
-   [MC-177780](https://bugs.mojang.com/browse/MC-177780) Shulkers cannot be opened while playing closing animation anymore
-   [MC-177796](https://bugs.mojang.com/browse/MC-177796) Blackstone walls are in the "Building Blocks" category instead of "decoration Blocks" category, unlike all other walls
-   [MC-177862](https://bugs.mojang.com/browse/MC-177862) Polished blackstone button and pressure plate in incorrect area in creative inventory
-   [MC-177885](https://bugs.mojang.com/browse/MC-177885) Invisible Horses show patterns
-   [MC-177997](https://bugs.mojang.com/browse/MC-177997) Baby zoglins still use the same attack damage as an adult
-   [MC-178086](https://bugs.mojang.com/browse/MC-178086) Flying close to the ground with soul speed over soul blocks speeds up player and generates soul particles
-   [MC-178093](https://bugs.mojang.com/browse/MC-178093) Piglins with full inventories won't pick up gold ingots to barter even though you can still right-click to barter with them
-   [MC-178259](https://bugs.mojang.com/browse/MC-178259) Game crashes when an iron golem with the attack damage attribute set to 0.5d
-   [MC-178316](https://bugs.mojang.com/browse/MC-178316) Dispenser plays "dispensed item" sound when attempting to charge a full respawn anchor instead of "dispenser fails"
-   [MC-178630](https://bugs.mojang.com/browse/MC-178630) TNT eyeheight changed
-   [MC-178797](https://bugs.mojang.com/browse/MC-178797) Barrier blocks generate in bastion remnant
-   [MC-178955](https://bugs.mojang.com/browse/MC-178955) Badlands are viewed as a mountainous biome for Ruined Portals
-   [MC-179542](https://bugs.mojang.com/browse/MC-179542) Basalt Delta Blocks Override Nether Bricks in Fortresses

---

# Minecraft Snapshot 20w16a

Bastion remnants, or "home sweet home" as Piglins would call them, are finally here! This snapshot introduces the home of the Piglins. If you scour the world you might also find ruins of some old portals.

## New Features in 20w16a

-   Added Bastion Remnants!
-   Added Ruined Portals
-   Added chain blocks
-   Added a new music disc titled "Pigstep" by Lena Raine which can only be found in Bastions Remnants

### Bastion Remnants

What's made of Blackstone and full of piglins and hoglins? Bastion Remnants!

-   Added 4 separate Bastion Remnant types: Bridge, Hoglin Stable, Housing Units, and Treasure Room
-   You can find these sizable structures in all biomes in the Nether except the treacherous ash-dusted towers of Basalt Deltas
-   Explore, loot, and conquer a Bastion Remnant to call it your home...but beware, Piglins don't take kindly to intruders stealing their things

### Ruined Portals

Shattered remains of ancient nether portals. Wonder who built them?

-   They can be found in any overworld or nether biome
-   Some are hidden underground, under the sea, or buried in sand

## Changes in 20w16a

-   The piglin banner pattern can now be found in Bastion Remnants
-   Increased the amount of lava pools to make the deltas more "deltary"

## Technical Changes in 20w16a

-   Added a button in the GUI that generates a jigsaw structure starting from the jigsaw block, using given generation depth.
-   Expanded the max size per axis of Structure Blocks from 32 to 48
-   Added a JMX MBean to monitor dedicated server tick times

### JMX Monitoring

It is now possible to monitor the server tick times though JMX. The rationale for this is that JMX is a well known and supported monitoring technology with existing integrations and tools.

This enables server admins to hook alerts and graphing tools using ordinary JMX clients and dashboards.

#### Enabling JMX Monitoring

-   A new flag `enable-jmx-monitoring` has been added to the server.properties file which if set to `true` will expose an MBean with the Object name `net.minecraft.server:type=Server` and two attributes `averageTickTime` and `tickTimes` exposing the tick times in milliseconds.
-   In order for enabling JMX on the Java runtime you also need to add a couple of JVM flags to the startup as documented [here](https://docs.oracle.com/javase/8/docs/technotes/guides/management/agent.html).

## Fixed bugs in 20w16a

-   [MC-37557](https://bugs.mojang.com/browse/MC-37557) Sometimes a minecart sound plays/subtitle shown when loading a world
-   [MC-91163](https://bugs.mojang.com/browse/MC-91163) Certain subtitles show up when the player is too far away to hear the sound
-   [MC-154617](https://bugs.mojang.com/browse/MC-154617) Server hangs on stop due to rcon
-   [MC-171020](https://bugs.mojang.com/browse/MC-171020) New nether biomes don't work properly in buffet worlds
-   [MC-175919](https://bugs.mojang.com/browse/MC-175919) Villagers sometimes stop farming
-   [MC-177136](https://bugs.mojang.com/browse/MC-177136) All compasses and lodestone compasses point to the same target, regardless of what type of compass it is
-   [MC-177238](https://bugs.mojang.com/browse/MC-177238) Windows symbolic link in saves/ is no longer followed as of 20w14a
-   [MC-177253](https://bugs.mojang.com/browse/MC-177253) Running a set\_attributes function throws java.lang.NullPointerException if it contains an undefined attribute
-   [MC-177316](https://bugs.mojang.com/browse/MC-177316) Lodestone compass in item frame does not update after turning
-   [MC-178368](https://bugs.mojang.com/browse/MC-178368) When rotating a lodestone compass is put in the item frame the compass don't work

---

# Minecraft Snapshot 20w15a

It's a wonderful day here in Sweden today! The sun is shining and spring is in the air, and when I say "spring" I mean **pollen**. Let's remedy that by 1) Staying indoors and 2) Introduce an all new biome with a grain of basalt, blackstone, and magma cubes! To spice it up, we also have some new fine tunes for you to listen to while traversing the Nether. Enjoy the snapshot!

## New Features in 20w15a

-   Accessibility improvements
-   Added a piglin banner pattern
-   Added Basalt Deltas biome to the Nether
-   Added soul campfires. Warm your buns with the heat of one thousand souls!
-   Added three new tracks of Nether music
-   Added chiseled nether bricks, cracked nether bricks, and quartz bricks!
-   Added a new set of stone blocks called Blackstone with regular, polished, and polished brick variants!
-   Added Gilded Blackstone - Blackstone which has been imbued with gold and has a chance of dropping gold nuggets when broken
-   Blackstone can be used to craft furnaces and stone tools

### Accessibility

-   Added "Line Spacing" chat and accessibility option
-   Added "Chat Delay" accessibility option

### Basalt Deltas

Basalt Deltas can now be found in the Nether!

-   Remnants of volcanic eruptions, this biome sports a high concentration of Basalt columns and lava deltas
-   Walking through, you will be surrounded by flakes of flowing white ash
-   Magma Cubes finally have a place to call home, spawning very frequently
-   A new block, Blackstone, can be found in large patches here

### Nether Music

We're happy to announce that we've added three new tracks for the upcoming Nether Update, all composed by the very talented Lena Raine.

-   Rubedo will be played in the Nether Wastes
-   So Below will be played in Soul Sand Valleys and in Basalt Deltas
-   Chrysopoeia will be played in Crimson Forests

Some words from Lena:

-   "One of the primary instruments in Minecraft is the piano, and so one of my challenges to myself was to see how far I could push the sound of the piano until it resembled other things entirely–again, that alchemical process."
-   "I wanted each piece to feel like a progression of emotions, or a journey from place to place within this other world. There's a degree of beauty to the Nether, but it is also terrifying in both its details and scale."

Take a portal to the Nether, and stay awhile and listen...

## Changes in 20w15a

-   Dispenser changes
-   Soul sand can now be used to craft soul torches
-   Nether vegetation blocks (sprouts, roots, vines, fungus, wart and wart blocks) are now compostable
-   Walls will now connect to more things! (like iron bars, panes and even pickles!)
-   Hoes are now the appropriate tool for mining leaves
-   Mobs now avoid walking on magma blocks and lit campfires

### Dispensers

-   Dispensers can now saddle pigs and horses
-   Dispensers can now put horse armor on horses
-   Dispensers can now put carpets on llamas
-   Dispensers can now put chests on llamas, donkeys and mules
-   Dispensers can now shear a Mooshroom
-   Dispensers can shear snow golems

## Technical Changes in 20w15a

-   Tab completion for resource location will match any part after an `_`
-   Mob and pathfinding-related optimizations

## Fixed bugs in 20w15a

-   [MC-171463](https://bugs.mojang.com/browse/MC-171463) Iron Bars don't fully connect to walls
-   [MC-172120](https://bugs.mojang.com/browse/MC-172120) Hoglins don't try to avoid fire
-   [MC-172209](https://bugs.mojang.com/browse/MC-172209) Non-fire resistant mobs don't try to avoid walking into fire
-   [MC-172226](https://bugs.mojang.com/browse/MC-172226) Baby animals, villagers, and zombie villagers spawned with a spawn egg on an adult entity always are of the same variant
-   [MC-172268](https://bugs.mojang.com/browse/MC-172268) Bartering with a piglin by right-clicking does not display hand animation
-   [MC-174542](https://bugs.mojang.com/browse/MC-174542) Killing baby hoglins drops leather and porkchop
-   [MC-174559](https://bugs.mojang.com/browse/MC-174559) Baby hoglins/zoglins uses the same attack damage as an adult when spawned in some cases
-   [MC-175030](https://bugs.mojang.com/browse/MC-175030) Curse of Binding doesn't affect Piglins
-   [MC-175169](https://bugs.mojang.com/browse/MC-175169) Respawn Anchor can create ghost blocks when it explodes
-   [MC-175176](https://bugs.mojang.com/browse/MC-175176) Using return portal in The End softlocks the game if /spawnpoint was used in The End
-   [MC-175256](https://bugs.mojang.com/browse/MC-175256) Screen is overlayed with a grey opaque texture when inside of a transparent block
-   [MC-175274](https://bugs.mojang.com/browse/MC-175274) "Quartz pillar" is translated as "White wool" ("Lana blanca" instead of "Pilar de cuarzo") in Spanish (Spain)
-   [MC-175356](https://bugs.mojang.com/browse/MC-175356) Piglins and hoglins do not avoid magma blocks
-   [MC-175538](https://bugs.mojang.com/browse/MC-175538) Fish/Swimming sounds are louder than they should be
-   [MC-175566](https://bugs.mojang.com/browse/MC-175566) Piglins with full inventories drop the items they received
-   [MC-176095](https://bugs.mojang.com/browse/MC-176095) Striders have an unused fin in the strider.png texture file
-   [MC-176384](https://bugs.mojang.com/browse/MC-176384) CompassItem checks twice if LodestonePos tag exists
-   [MC-176517](https://bugs.mojang.com/browse/MC-176517) striders spawn in underground lava pockets
-   [MC-176633](https://bugs.mojang.com/browse/MC-176633) Lime carpets are named "acacia slab" in Spanish (Spain)
-   [MC-177069](https://bugs.mojang.com/browse/MC-177069) Dispenser will not drop glowstone as item when not connected to a respawn anchor
-   [MC-177085](https://bugs.mojang.com/browse/MC-177085) Missing UUID field in attributes crash the game
-   [MC-177102](https://bugs.mojang.com/browse/MC-177102) Zoglins aren't considered an undead mob
-   [MC-177225](https://bugs.mojang.com/browse/MC-177225) Tag minecraft:water used before it was bound

---

# Minecraft Snapshot 20w14a

Even though we just added [every update imaginable to Minecraft](https://www.minecraft.net/article/every-update-imaginable-coming-minecraft), we thought that it might be good to pick up the Nether Update snapshots from where we left off. This snapshot introduces the Zoglins!

## New Features in 20w14a

-   Hoglins that somehow end up in the Overworld become Zoglins fairly quickly - but who would ever bring a Hoglin to the Overworld?
-   Compasses can now be enchanted with Curse of Vanishing

​

### Zoglins

​

-   Zoglins are zombified hoglins - the result of bringing a hoglin into the overworld
-   Unlike hoglins they can't be bred or fed, and they don't care about warped fungus
-   Beware - these beasts are raving mad and attack just about everything they see!

## Changes in 20w14a

-   The main menu background is now in the Nether
-   The General statistics list is now alphabetically sorted
-   Strider balancing

### Strider Balancing

-   Strider speed while mounted has been significantly increased to more closely resemble boat speeds
-   Warped Fungus on a Stick now has 100 max item damage, and only takes 1 damage per Strider consume
-   When Warped Fungus on a Stick is used with Striders, the boost is a great way to traverse the lava seas

​

## Technical Changes in 20w14a

-   The compass now has `LodestonePos`, `LodestoneDimension` and `LodestoneTracked` data fields. If `LodestoneTracked` is zero, the game will skip checking for a Lodestone in the specified position.
-   Attributes are now added to game registry, similar to items, sound events, etc.
-   Region files are now opened in synchronous mode to increase reliability

​

### Attributes

Attributes have been moved to game registry. That means few changes: ​

-   Items and entities will no longer keep unknown attributes
-   Names of some attributes have been renamed to meet resource location requirements

#### Renames:

-   `generic.maxHealth` 🡆 `generic.max_health`
-   `zombie.spawnReinforcements` 🡆 `zombie.spawn_reinforcements`
-   `horse.jumpStrength` 🡆 `horse.jump_strength`
-   `generic.followRange` 🡆 `generic.follow_range`
-   `generic.knockbackResistance` 🡆 `generic.knockback_resistance`
-   `generic.movementSpeed` 🡆 `generic.movement_speed`
-   `generic.flyingSpeed` 🡆 `generic.flying_speed`
-   `generic.attackDamage` 🡆 `generic.attack_damage`
-   `generic.attackKnockback` 🡆 `generic.attack_knockback`
-   `generic.attackSpeed` 🡆 `generic.attack_speed`
-   `generic.armorToughness` 🡆 `generic.armor_toughness`

## Fixed bugs in 20w14a

-   [MC-83039](https://bugs.mojang.com/browse/MC-83039) End City chests generate destroyed, items on the ground
-   [MC-91893](https://bugs.mojang.com/browse/MC-91893) Missing subtitles for various sounds
-   [MC-109248](https://bugs.mojang.com/browse/MC-109248) Extended piston head not removed when /setblock is used to place a different piston base.
-   [MC-115750](https://bugs.mojang.com/browse/MC-115750) Advancement "Monster Hunter" (kill\_a\_mob) is not granted for killing certain hostile mobs
-   [MC-116756](https://bugs.mojang.com/browse/MC-116756) Reversed and inconsistent subtitles for iron trapdoor
-   [MC-124428](https://bugs.mojang.com/browse/MC-124428) Firework star crashes game if there's an int array but no colors
-   [MC-125055](https://bugs.mojang.com/browse/MC-125055) Igloo generates with brewing stand and flower pot contents dropped (and placed)
-   [MC-127316](https://bugs.mojang.com/browse/MC-127316) General statistics out of order
-   [MC-133049](https://bugs.mojang.com/browse/MC-133049) Compasses don't point to the correct location when in an item frame on the ground or on the ceiling
-   [MC-154427](https://bugs.mojang.com/browse/MC-154427) Villagers only pick up four stacks of items
-   [MC-164129](https://bugs.mojang.com/browse/MC-164129) Ender dragon inner hitboxes are rendered offset by approximately 200 blocks
-   [MC-164446](https://bugs.mojang.com/browse/MC-164446) Tags don't load if one of their values is invalid, causing all data packs to unload
-   [MC-169975](https://bugs.mojang.com/browse/MC-169975) Highlight players (spectators) key doesn't affect any players other than yourself
-   [MC-171020](https://bugs.mojang.com/browse/MC-171020) New nether biomes don't work properly in buffet worlds
-   [MC-172069](https://bugs.mojang.com/browse/MC-172069) Piston arms are not deleted when the base of a pulsing piston is replaced with another piston
-   [MC-173192](https://bugs.mojang.com/browse/MC-173192) Fluid collision is too high
-   [MC-173684](https://bugs.mojang.com/browse/MC-173684) Spawning under the portal when using a nether portal
-   [MC-173774](https://bugs.mojang.com/browse/MC-173774) Shulker bullets do not act as a projectile
-   [MC-173875](https://bugs.mojang.com/browse/MC-173875) Item frames cannot be interacted with after unloading and reloading the chunk
-   [MC-174231](https://bugs.mojang.com/browse/MC-174231) Ocelots are no longer spawning
-   [MC-174838](https://bugs.mojang.com/browse/MC-174838) Target detection of fireworks is unreliable
-   [MC-175201](https://bugs.mojang.com/browse/MC-175201) Misrotated floor block in savanna\_small\_house\_1, savanna\_small\_house\_2, savanna\_small\_house\_3 and savanna\_small\_house\_7
-   [MC-175434](https://bugs.mojang.com/browse/MC-175434) Fireworks launched from upwards-facing dispensers explode inside of the dispenser block
-   [MC-175985](https://bugs.mojang.com/browse/MC-175985) Lodestone compass needle doesn't have an animation
-   [MC-175990](https://bugs.mojang.com/browse/MC-175990) Lodestone compass needle spins around quickly when the lodestone has been destroyed or is not in the same dimension
-   [MC-176052](https://bugs.mojang.com/browse/MC-176052) Using a compass on a lodestone plays no hand animation
-   [MC-176195](https://bugs.mojang.com/browse/MC-176195) Many mountable mobs and vehicles can still be shot by the rider's arrows
-   [MC-176231](https://bugs.mojang.com/browse/MC-176231) Compasses with custom enchantments does not display enchanted glint
-   [MC-176269](https://bugs.mojang.com/browse/MC-176269) Right-clicking Lodestone with Compass also uses offhand item
-   [MC-176420](https://bugs.mojang.com/browse/MC-176420) Lodestone compass sound is in friendly creatures option
-   [MC-176644](https://bugs.mojang.com/browse/MC-176644) Observers don't trigger when a fence connects to a newly grown tree

---

# Minecraft Snapshot 20w13b

A small release to fix a few critical bugs.

## Fixed bugs in 20w13b

-   [MC-175177](https://bugs.mojang.com/browse/MC-175177) Exhausting, breaking or obstructing the respawn anchor creates ghost blocks in the overworld when breaking blocks
-   [MC-175988](https://bugs.mojang.com/browse/MC-175988) Dying without a valid spawnpoint causes a softlock
-   [MC-176004](https://bugs.mojang.com/browse/MC-176004) Cannot interact with the world after dying in the end or the nether without a valid spawn point

---

# Minecraft Snapshot 20w13a

Ever felt that you want to take a ride across fields of lava? Yeah? Me too! This snapshot introduces the adorable(?) strider. It might need some help with directions...

## New Features in 20w13a

-   Added the Lodestone
-   Added the Strider
-   Basalt is formed when lava flows over soul soil next to blue ice
-   Farmer villagers can now compost seeds

### Lodestone

A new block that can help you get your bearings!

-   Crafted from a netherite ingot and chiseled stone bricks
-   Use a compass on a lodestone to create a lodestone compass pointing to that lodestone

### Strider

A new mob living the lava lakes of the Nether.

-   Strides on top of the surface of lava
-   Can be saddled, but has a will of its own
-   Really likes the smell of warped fungi - might even be convinced to follow it

### Farmers

-   Farmer villagers can now put excess seeds in the composter to create bone meal
-   Bone meal is used by the farmers to grow crops
-   Farmers share excess wheat to other farmers, so more farmers can make bread

## Changes in 20w13a

-   You're now more likely to get soul speed books and boots when bartering with Piglins
-   You can now charge the Respawn Anchor using a Dispenser

## Technical Changes in 20w13a

### Jigsaw block

-   Jigsaw now can have one of 12 orientations
-   Added new property `Joint type` to describe if attached piece can be rotated (`rollable`) or not (`aligned`)
-   NBT field `target_pool` has been renamed to `pool`
-   `attachement_type` has been split into `name` (on parent block) and `target` (on child block).

### Loot tables

-   A fishing location is now considered to be open water if the fishing hook is in water, there are no blocks besides lily pads above water and all water blocks are source blocks with no solid underwater blocks around

## Fixed bugs in 20w13a

-   [MC-118080](https://bugs.mojang.com/browse/MC-118080) Bows without pulling predicate animate when other bows are pulled back
-   [MC-154427](https://bugs.mojang.com/browse/MC-154427) Villagers only pick up four stacks of items
-   [MC-171003](https://bugs.mojang.com/browse/MC-171003) Crimson and Warped stairs, planks and slabs can be used as fuel in a furnace
-   [MC-171286](https://bugs.mojang.com/browse/MC-171286) Warped fences and Crimson fences don't connect with other fences
-   [MC-171484](https://bugs.mojang.com/browse/MC-171484) Shields, crossbows, bows, and fishing rods don't show their proper animations in first person mode after certain actions
-   [MC-171526](https://bugs.mojang.com/browse/MC-171526) en\_us.json issue: weeping\_vines and weeping\_vines\_plant have the same name
-   [MC-171830](https://bugs.mojang.com/browse/MC-171830) Smokers cannot be crafted using crimson or warped stems
-   [MC-172123](https://bugs.mojang.com/browse/MC-172123) Using a spawn egg on a mob without a baby variant spawns an adult mob of the same type without a weapon
-   [MC-172279](https://bugs.mojang.com/browse/MC-172279) Can't craft campfire with nether stems or hyphae
-   [MC-172307](https://bugs.mojang.com/browse/MC-172307) All loaded tileticks instantly run in the first tick after loading the chunk
-   [MC-173258](https://bugs.mojang.com/browse/MC-173258) Back of zombified piglin heads has very different texture/shading compared to the other sides
-   [MC-173367](https://bugs.mojang.com/browse/MC-173367) Arrows are floating in midair after being pushed by piston
-   [MC-173791](https://bugs.mojang.com/browse/MC-173791) Mobs dismount vehicles only in front of the boat, even if there is danger ahead
-   [MC-174368](https://bugs.mojang.com/browse/MC-174368) Minecarts can no longer eject entities into an open trap door
-   [MC-174428](https://bugs.mojang.com/browse/MC-174428) Nylium can be bonemealed underwater with seagrass above it
-   [MC-174434](https://bugs.mojang.com/browse/MC-174434) Sugar Cane, Kelp and Bamboo are in the incorrect creative inventory tab
-   [MC-174481](https://bugs.mojang.com/browse/MC-174481) en\_us.json issue: twisting\_vines and twisting\_vines\_plant have the same name
-   [MC-174510](https://bugs.mojang.com/browse/MC-174510) Stems, Hyphae, and variants do not use the Nether Wood material
-   [MC-174537](https://bugs.mojang.com/browse/MC-174537) Zombie Pigman hooves are still visible on Zombified Piglin texture
-   [MC-174547](https://bugs.mojang.com/browse/MC-174547) Kelp, Weeping Vines, and Twisted Vines can be bonemealed at age 25
-   [MC-174642](https://bugs.mojang.com/browse/MC-174642) Hitbox of twisting vine is incorrect
-   [MC-174731](https://bugs.mojang.com/browse/MC-174731) Modifying "soul.json" (inside of "particles" folder) causes crash
-   [MC-174787](https://bugs.mojang.com/browse/MC-174787) Arrow physics don't work correctly when in a target that is moved
-   [MC-174823](https://bugs.mojang.com/browse/MC-174823) Sprinting and walking scoreboards don't update properly
-   [MC-174988](https://bugs.mojang.com/browse/MC-174988) Bee nests are brown on maps
-   [MC-175165](https://bugs.mojang.com/browse/MC-175165) Using glowstone on a respawn anchor doesn't consume it
-   [MC-175171](https://bugs.mojang.com/browse/MC-175171) Fishing bobber can get stuck on a ledge when being reeled in
-   [MC-175174](https://bugs.mojang.com/browse/MC-175174) Respawn anchor is considered obstructed if all its sides are covered or air
-   [MC-175178](https://bugs.mojang.com/browse/MC-175178) Anchor uses up the glowstone charge even though it didn't respawn you
-   [MC-175185](https://bugs.mojang.com/browse/MC-175185) No datafixer for item AttributeModifiers UUIDs
-   [MC-175191](https://bugs.mojang.com/browse/MC-175191) Respawn Anchor charging cannot be heard by other players
-   [MC-175193](https://bugs.mojang.com/browse/MC-175193) Using glowstone in the offhand does not charge respawn anchor
-   [MC-175199](https://bugs.mojang.com/browse/MC-175199) In snowy\_medium\_house\_2, some blocks are still misrotated
-   [MC-175204](https://bugs.mojang.com/browse/MC-175204) Four misrotated blocks in snowy\_masons\_house\_1
-   [MC-175208](https://bugs.mojang.com/browse/MC-175208) Incorrect grammar "Your have no home bed or respawn anchor, or it was obstructed."
-   [MC-175209](https://bugs.mojang.com/browse/MC-175209) Dying in a different dimension than your respawn anchor will cause the anchor to not play the depletion sound
-   [MC-175210](https://bugs.mojang.com/browse/MC-175210) Respawn anchor uses a charge after leaving the end dimension through the end portal
-   [MC-175218](https://bugs.mojang.com/browse/MC-175218) Looking at a map of an area with spruce sign, jungle sign or dark oak sign in it crashes the game
-   [MC-175219](https://bugs.mojang.com/browse/MC-175219) Respawn Anchor plays the "Respawn Point set" sound when right-clicked even when its already your respawn point
-   [MC-175224](https://bugs.mojang.com/browse/MC-175224) Nether gold ore does not yield any experience when mined
-   [MC-175239](https://bugs.mojang.com/browse/MC-175239) Villagers are generated very rarely in villages
-   [MC-175278](https://bugs.mojang.com/browse/MC-175278) Fishing near lily pads prevents players from receiving treasure loot table
-   [MC-175289](https://bugs.mojang.com/browse/MC-175289) Respawn anchor isn't in the #dragon\_immune tag
-   [MC-175322](https://bugs.mojang.com/browse/MC-175322) Clicking on a fully charged respawn anchor with a glowstone block doesn't activate it
-   [MC-175327](https://bugs.mojang.com/browse/MC-175327) The crafting recipe of Polished Basalt is inconsistent
-   [MC-175514](https://bugs.mojang.com/browse/MC-175514) Villager Gossips still use old UUID NBT format (TargetMost and TargetLeast)
-   [MC-175827](https://bugs.mojang.com/browse/MC-175827) Entities not loading in structure blocks (duplicate UUID)
-   [MC-175830](https://bugs.mojang.com/browse/MC-175830) F3 + I copies UUID

---

# Minecraft Snapshot 20w12a

In this snapshot you can be on your merry way across the beautiful Soulsand Valleys with your freshly enchanted boots. It's a bit scary to be fair, so these boots will help you out with that bit...

This update can also be found on [minecraft.net](https://www.minecraft.net/en-us/article/minecraft-snapshot-20w12a).

If you find any bugs, please report them on the official [Minecraft Issue Tracker](https://aka.ms/snapshotbugs?ref=reddit).

## New Features in 20w12a

-   Added the respawn anchor that can set your respawn point in the Nether. Use while holding Glowstone to charge to a maximum of four charges - each respawn depletes one charge
-   Added polished basalt! Smelt your basalt to make it clean and shiny!
-   Warped and crimson nylium can now be bonemealed to get more of the strange new vegetation
-   Hoes are now the appropriate tool to mine sponges and wet sponges

## Changes in 20w12a

-   When fishing, treasure loot can now only be obtained by fishing in open waters
-   Reduced the maximum distance a bee can wander away from its home hive when randomly wandering to around 22 blocks
-   Nether gold ore can now be mined with any type of pickaxe and drops a few gold nuggets
-   Parrots imitate hostile mobs less often
-   Parrots do not randomly imitate hostile mobs when gamemode is on peaceful
-   New mood detection algorithm for cave sounds

## Technical Changes in 20w12a

### Commands

#### spawnpoint

The spawnpoint command now supports being run in any dimension.

#### UUIDs in NBT

UUIDs stored in NBT are now represented as an array of four integers. Example: `{UUID:[I;1498693494,1027158888,1898994005,860320107]}` Along with that a couple of fields have been renamed:

-   `OwnerUUID` of tamed animals, area effect clouds, evoker fangs and projectiles is now simply `Owner`
-   `TrustedUUIDs` of foxes is now `Trusted`
-   `target_uuid` of conduits is now `Target`

### Loot Tables

#### Entity Predicate

-   Added `fishing_hook` sub-predicate

##### `fishing_hook`

Check properties of the fishing hook

###### Parameters

to be open water if there are no blocks above water and no solid underwater blocks around, all water blocks are source blocks and there are no bubble columns.

-   `in_open_water` - Matches whether the fishing location is open water fishing or not. A fishing location is considered

## Fixed bugs in 20w11a

-   [MC-3328](https://bugs.mojang.com/browse/MC-3328) Dismounting an entity places riding entity / player half block too high
-   [MC-64242](https://bugs.mojang.com/browse/MC-64242) Silent tag is not working for some entities
-   [MC-100342](https://bugs.mojang.com/browse/MC-100342) Several Non-Ticking blocks are marked as ticking forcing the growth-algorithm to check chunks needlessly
-   [MC-113809](https://bugs.mojang.com/browse/MC-113809) Chorus Flower plant, Bamboo, Sugarcane, Cactus and other plants grow instantly when supporting block is replaced with same block type
-   [MC-114000](https://bugs.mojang.com/browse/MC-114000) Mouse click in cat hissing sounds
-   [MC-122128](https://bugs.mojang.com/browse/MC-122128) Recipe book resets itself to closed state after death
-   [MC-129137](https://bugs.mojang.com/browse/MC-129137) Parrots imitating hostile mobs in peaceful is not that peaceful
-   [MC-130137](https://bugs.mojang.com/browse/MC-130137) Grass and mycelium don't decay underwater
-   [MC-140545](https://bugs.mojang.com/browse/MC-140545) Pathfinding prefers North (negative Z) direction
-   [MC-148936](https://bugs.mojang.com/browse/MC-148936) Parrot summoned with negative Age has smaller hitbox
-   [MC-149375](https://bugs.mojang.com/browse/MC-149375) Camera can be positioned inside of snow layers
-   [MC-160959](https://bugs.mojang.com/browse/MC-160959) Clicking onto a bed in daytime doesn't grant the advancement "Sweet Dreams"
-   [MC-161754](https://bugs.mojang.com/browse/MC-161754) Item duplication with chested donkeys, mules and llamas
-   [MC-163918](https://bugs.mojang.com/browse/MC-163918) Bees not animating their pollen gathering
-   [MC-166980](https://bugs.mojang.com/browse/MC-166980) Bees become stuck wandering to the north-west after completing a task, or randomly in large numbers
-   [MC-168384](https://bugs.mojang.com/browse/MC-168384) NBT-Tag "Silent:1b" doesn't work for bees.
-   [MC-169965](https://bugs.mojang.com/browse/MC-169965) Potion effect timers for higher levels can remain at 0:00 after the higher level has run out if multiple levels of the same effect were applied in descending order
-   [MC-170584](https://bugs.mojang.com/browse/MC-170584) Structure taiga\_meeting\_point\_2 from zombie villages has 1 misrotated log
-   [MC-170591](https://bugs.mojang.com/browse/MC-170591) Misrotated floor blocks in desert\_tool\_smith\_1 basement
-   [MC-170773](https://bugs.mojang.com/browse/MC-170773) Recipe book and filtering craftable do not stay open for blast furnace and smoker when (re)loading the world
-   [MC-170940](https://bugs.mojang.com/browse/MC-170940) Netherite ingot recipes are not grouped
-   [MC-171133](https://bugs.mojang.com/browse/MC-171133) Camera can be positioned inside of soul sand
-   [MC-172188](https://bugs.mojang.com/browse/MC-172188) Hoglins are not required by 'Two by Two' advancement
-   [MC-172690](https://bugs.mojang.com/browse/MC-172690) Smelting netherite scraps doesn't provide the right amount of experience
-   [MC-172820](https://bugs.mojang.com/browse/MC-172820) Piglins can turn into adult chicken jockeys in the overworld
-   [MC-173199](https://bugs.mojang.com/browse/MC-173199) Fossils in the nether cause caves / floating islands to generate and can break through the nether roof
-   [MC-173220](https://bugs.mojang.com/browse/MC-173220) Dismounting passenger moves to a nearby block when ridden entity dies
-   [MC-173420](https://bugs.mojang.com/browse/MC-173420) Sign crafting recipes of various wood types are not grouped
-   [MC-173487](https://bugs.mojang.com/browse/MC-173487) Falling out of water death message still does not seem to appear
-   [MC-173552](https://bugs.mojang.com/browse/MC-173552) Nether Fossile support islands cut off at chunk borders
-   [MC-173791](https://bugs.mojang.com/browse/MC-173791) Mobs dismount vehicles only in front of the boat, even if there is danger ahead
-   [MC-173828](https://bugs.mojang.com/browse/MC-173828) Village church entrance does not generate correctly
-   [MC-173832](https://bugs.mojang.com/browse/MC-173832) Crimson and Warped Hyphae and Stripped Hyphae are switched in Creative inventory
-   [MC-173837](https://bugs.mojang.com/browse/MC-173837) Removing fire and soul fire with shears will reduce the shears' durability
-   [MC-174049](https://bugs.mojang.com/browse/MC-174049) Fireworks shot from a crossbow do not explode instantly when hitting a solid block
-   [MC-174071](https://bugs.mojang.com/browse/MC-174071) Roof of savanna\_mason\_1 is cut off
-   [MC-174072](https://bugs.mojang.com/browse/MC-174072) Structure savanna\_temple\_2 contains one misrotated block
-   [MC-174073](https://bugs.mojang.com/browse/MC-174073) Two misrotated blocks in savanna\_small\_house\_5
-   [MC-174075](https://bugs.mojang.com/browse/MC-174075) Misrotated block in savanna\_butchers\_shop\_1
-   [MC-174076](https://bugs.mojang.com/browse/MC-174076) Inconsistent rotation of logs under windows in savanna\_small\_house\_4
-   [MC-174077](https://bugs.mojang.com/browse/MC-174077) Structure snowy\_library\_1 no longer has snow under the roof
-   [MC-174078](https://bugs.mojang.com/browse/MC-174078) Three misrotated blocks in snowy\_armorer\_house\_2
-   [MC-174079](https://bugs.mojang.com/browse/MC-174079) Misrotated block at snowy\_weapon\_smith\_1
-   [MC-174082](https://bugs.mojang.com/browse/MC-174082) Three misrotated blocks in snowy\_small\_house\_2
-   [MC-174083](https://bugs.mojang.com/browse/MC-174083) Three misrotated blocks in snowy\_butchers\_shop\_1
-   [MC-174174](https://bugs.mojang.com/browse/MC-174174) Arrow animation stuck on loop when a flame bow is used to detonate TNT
-   [MC-174234](https://bugs.mojang.com/browse/MC-174234) Village structure snowy\_masons\_house\_1 has two misrotated blocks
-   [MC-174258](https://bugs.mojang.com/browse/MC-174258) Fixed item frames do not take void damage
-   [MC-174391](https://bugs.mojang.com/browse/MC-174391) Several misrotated blocks at snowy\_medium\_house\_2
-   [MC-174429](https://bugs.mojang.com/browse/MC-174429) Chorus flowers remove arrow and trident velocity
-   [MC-174464](https://bugs.mojang.com/browse/MC-174464) Soul speed decreases durability on boots in creative mode
-   [MC-174466](https://bugs.mojang.com/browse/MC-174466) Soul speed particles are generated in spectator mode
-   [MC-174467](https://bugs.mojang.com/browse/MC-174467) Placing fire on soul sand does not place soul fire
-   [MC-174476](https://bugs.mojang.com/browse/MC-174476) Soul fire torch is in the piglin\_repellents item tag twice
-   [MC-174480](https://bugs.mojang.com/browse/MC-174480) Piglins are not attracted to Nether gold ore
-   [MC-174489](https://bugs.mojang.com/browse/MC-174489) Shroomlight preferred tool is now both Axe and Hoe
-   [MC-174502](https://bugs.mojang.com/browse/MC-174502) Soul Speed 3 on Soul Soil in water keeps and increases player momentum
-   [MC-174513](https://bugs.mojang.com/browse/MC-174513) Soul Speed Enchanted Books from bartering with piglins do not work in an anvil
-   [MC-174522](https://bugs.mojang.com/browse/MC-174522) Soul Speed doesn't break boots
-   [MC-174690](https://bugs.mojang.com/browse/MC-174690) Soul speed enchantment books can be found in chests
-   [MC-174785](https://bugs.mojang.com/browse/MC-174785) Mining speed of crimson and warped wall signs is not affected by an axe

---

# Minecraft Snapshot 20w11a

In this snapshot you can be on your merry way across the beautiful Soulsand Valleys with your freshly enchanted boots. It's a bit scary to be fair, so these boots will help you out with that bit...

## Before we dive into this snapshot, a word about Redstone

Redstone is one of the coolest things in Minecraft and many of you are members of communities that focus on building mind-blowing redstone contraptions, farms, computing machines and 256x256 piston doors.

A lot of redstone behaviour is currently categorized as “undefined”. This is when the behaviour of the block is not the result of intentional code but is a side-effect of unaccounted edge cases or quirks in the game code.​

We know that many players consider undefined behaviour as a very interesting aspect of redstone and enjoy experimenting with and using undefined behaviour to build unique contraptions to share with the rest of the community.​

However, the quirks of undefined behaviour can be quite surprising - even when building simple contraptions. This quirkiness can be a negative experience for players new to redstone and may turn them away from this very unique and exciting aspect of Minecraft as well as the vast redstone community behind it.​

Our goal is to bring all redstone components up to a level of quality that we are happy with and we will be making adjustments where it makes the most sense for redstone going forward.

Any changes we make will be communicated in the snapshot changelogs and as always we will be reading your feedback and comments.

## New Features in 20w11a

-   Added Soul Speed enchantment
-   Added Twisting Vines that grow upwards
-   Nether gold ore can now be found in the nether - it is just like gold ore, but more Nether-y

### Soul Speed

Never suffer again drudging through Soul Sand Valleys - Soul Speed has you covered!

-   Shine your boots of choice with this soul-sucking enchantment to speed around on Soul Sand and Soul Soil!
-   There's a downside, however: enchantments will slowly degrade your boots each Soul block you walk on
-   Can only be obtained by bartering with those pesky Piglins

## Changes in 20w11a

-   Bell blocks will now ring when hit by any projectile
-   TNT and Campfires will now ignite when hit by any burning projectile
-   Bone meal can now be used to grow kelp, weeping vines and twisting vines
-   Hoes are now the appropriate tools for mining Hay, Targets, Dried Kelp Blocks, Shroomlights, Nether Wart Blocks and Warped Wart Blocks
-   Doors, rails, buttons, pressure plates, redstone and more can now be placed on soulsand and full-block of snow layers
-   Soul sand with a rail on top will no longer slow-down minecarts

## Technical Changes in 20w11a

-   `minecraft:soul_speed_blocks` is any block that the Soul Speed enchantment increases speed on
-   New particle type: `soul`

## Fixed bugs in 20w11a

-   [MC-81659](https://bugs.mojang.com/browse/MC-81659) Fireball and witherskull hitboxes are frequently invisible for some seconds
-   [MC-134900](https://bugs.mojang.com/browse/MC-134900) server.properties generator-settings for level-type FLAT not implemented; property is stored in ignored flat\_world\_options NBT
-   [MC-145140](https://bugs.mojang.com/browse/MC-145140) Fireballs cannot be interacted with when summoned
-   [MC-146928](https://bugs.mojang.com/browse/MC-146928) Can't place doors, rails, buttons, pressure plate, redstone, etc. on soul sand
-   [MC-148935](https://bugs.mojang.com/browse/MC-148935) Zombies with no AI still convert into drowned
-   [MC-171079](https://bugs.mojang.com/browse/MC-171079) Comparators no longer work as expected reading containers through powered blocks
-   [MC-171860](https://bugs.mojang.com/browse/MC-171860) Nether fossils have code implying an unimplemented /locate function
-   [MC-172266](https://bugs.mojang.com/browse/MC-172266) Crossbow wielding piglins do not properly walk backwards to target the player when very close
-   [MC-172323](https://bugs.mojang.com/browse/MC-172323) Game crashes when summoning a hoglin with the attack damage attribute set to 0 or giving a hoglin weakness with a very high level (255)
-   [MC-172374](https://bugs.mojang.com/browse/MC-172374) Can teleport to invalid y coordinates and crash the game
-   [MC-172428](https://bugs.mojang.com/browse/MC-172428) Piglins and hoglins don't look at their target
-   [MC-172470](https://bugs.mojang.com/browse/MC-172470) When the piglin holds the bow, it will try to attack and follow the enemy eventually stood there not moving
-   [MC-172530](https://bugs.mojang.com/browse/MC-172530) Piglins indefinitely stand around dropped golden items if mobGriefing is disabled
-   [MC-172903](https://bugs.mojang.com/browse/MC-172903) Piglins which convert into zombified piglins delete armor if equipped
-   [MC-173156](https://bugs.mojang.com/browse/MC-173156) Z-fighting at bottom of potted bamboo; bottom texture of bamboo is exposed
-   [MC-173167](https://bugs.mojang.com/browse/MC-173167) Netherite sword/tools not sorted with other swords/tools
-   [MC-173180](https://bugs.mojang.com/browse/MC-173180) Hoglins are not scared of Warped Fungus in flower pots
-   [MC-173219](https://bugs.mojang.com/browse/MC-173219) No sound when climbing weeping vines
-   [MC-173243](https://bugs.mojang.com/browse/MC-173243) Crying obsidian is movable by pistons
-   [MC-173283](https://bugs.mojang.com/browse/MC-173283) Piglin admiring held gold ingot doesn't drop it when killed
-   [MC-173302](https://bugs.mojang.com/browse/MC-173302) Crying Obsidian can be harvested with any pickaxe
-   [MC-173384](https://bugs.mojang.com/browse/MC-173384) Crying obsidian can be destroyed by the Ender Dragon
-   [MC-173433](https://bugs.mojang.com/browse/MC-173433) Killing a baby Hoglin doesn't yield experience
-   [MC-173462](https://bugs.mojang.com/browse/MC-173462) Baby piglins can hold soul fire torches
-   [MC-173467](https://bugs.mojang.com/browse/MC-173467) Piglins admiring bartering gold ingot drop nothing when converting to Zombified Piglin
-   [MC-173484](https://bugs.mojang.com/browse/MC-173484) Death message from falling off a trapdoor does not mention it by name
-   [MC-173485](https://bugs.mojang.com/browse/MC-173485) Death message from falling off scaffolding does not mention it by name
-   [MC-173706](https://bugs.mojang.com/browse/MC-173706) NullPointerException in server tick loop when trying to load a flatland world with Nether biome
-   [MC-173725](https://bugs.mojang.com/browse/MC-173725) Anvil name field doesn't automatically receive focus anymore and is unclickable
-   [MC-173731](https://bugs.mojang.com/browse/MC-173731) Fire and soul fire play a sound and produce particles when extinguished
-   [MC-173732](https://bugs.mojang.com/browse/MC-173732) Fire and soul fire do not have loot tables
-   [MC-173739](https://bugs.mojang.com/browse/MC-173739) Missing sound for event: minecraft:block.smithing\_table.use
-   [MC-173766](https://bugs.mojang.com/browse/MC-173766) Thrown tridents disappear after hitting and damaging a mob or entity
-   [MC-173776](https://bugs.mojang.com/browse/MC-173776) Hoes do not mine targets faster
-   [MC-173792](https://bugs.mojang.com/browse/MC-173792) End gateways don't work using enderpearls
-   [MC-173858](https://bugs.mojang.com/browse/MC-173858) Unable to set "LeftHanded" to "1b" for piglins

---

# Minecraft Snapshot 20w10a

Today's snapshot is loud! It comes with a bunch of new ambient sound that adds some really nice flavour to the Nether biomes. Apart from this, you now have to use the smithing table to craft Netherite. Happy mining!

## New Features in 20w10a

-   Added crimson and warped hyphae – all-sided "stem" blocks including stripped variations
-   Use a smithing table to fuse the Netherite ingot with your diamond weapon/tool/armor
-   New ambient sounds for the Nether biomes

​

## Changes in 20w10a

​

-   Hoes are now more like other tools used to break blocks
-   Fish now despawn when further than 64 blocks away from the closest player
-   Updated netherite item textures

​

### Hoe Changes

​ We've made some changes to Hoes to make them more useful in the Nether. ​

-   Each tier has different speed at which Hoes mine blocks they are effective against
-   Hoes can now be enchanted with the following enchantments: Efficiency, Fortune, Silk Touch
-   Those enchantments can now be provided through the enchanting table.

​

## Technical Changes in 20w10a

​

### Entity UUIDs

​

-   UUIDs of the owners of projectiles, such as arrows or snowballs, are now stored as an array of four integers. All UUIDs will be stored in this format in the future

​

### New tags for item frames

​

-   `Invisible` - makes item frame invisible (item inside frame remains visible)
-   `Fixed` - prevents item frame from being broken and the item inside from being removed

​

### `target_hit` advancement trigger type

​ Conditions:

-   `signal_strength` matches the signal strength output from the block on hit
-   `projectile` matches the projectile entity
-   `shooter` matches the player who shot or threw the projectile

​

## Fixed bugs in 20w10a

​

-   [MC-130906](https://bugs.mojang.com/browse/MC-130906) - Dolphins are moving very fast when near a boat
-   [MC-131046](https://bugs.mojang.com/browse/MC-131046) - Angry dolphins give players dolphin's grace
-   [MC-146824](https://bugs.mojang.com/browse/MC-146824) - Inconsistency: Ladders and tripwire hooks cannot be placed on the sides of redstone blocks, observers and target blocks
-   [MC-147496](https://bugs.mojang.com/browse/MC-147496) - Dolphin tries to catch the boat of the non-player ride
-   [MC-152441](https://bugs.mojang.com/browse/MC-152441) - Corner quartz stairs (not corner smooth quartz stairs) do not have the border on the back/bottom that a normal quartz stair would have
-   [MC-165518](https://bugs.mojang.com/browse/MC-165518) - Village houses desert\_temple\_1 and plains\_temple\_4 have no floor at entrance
-   [MC-169533](https://bugs.mojang.com/browse/MC-169533) - Asymmetrical walls in snowy\_cartographer\_house\_1
-   [MC-169715](https://bugs.mojang.com/browse/MC-169715) - Misrotated block in snowy\_small\_house\_3
-   [MC-169869](https://bugs.mojang.com/browse/MC-169869) - Mooshroom using incorrect texture in Programmer Art
-   [MC-170242](https://bugs.mojang.com/browse/MC-170242) - Asymmetrical walls in taiga\_medium\_house\_4
-   [MC-170470](https://bugs.mojang.com/browse/MC-170470) - At snowy\_library\_1, the snow block is placed next to the window, which causes ugly visual effect
-   [MC-170819](https://bugs.mojang.com/browse/MC-170819) - Netherite sword and boots textures have transparent pixels
-   [MC-170829](https://bugs.mojang.com/browse/MC-170829) - When dropping netherite tools and armor into lava, it sounds as if they are burning
-   [MC-170897](https://bugs.mojang.com/browse/MC-170897) - Fossils in soulsand valleys can be generated in the air
-   [MC-171367](https://bugs.mojang.com/browse/MC-171367) - Warped Fungi item does not match block texture
-   [MC-171447](https://bugs.mojang.com/browse/MC-171447) - Crimson root item form has inconsistent texture
-   [MC-172077](https://bugs.mojang.com/browse/MC-172077) - Piglins with NoAI shake in the overworld
-   [MC-172082](https://bugs.mojang.com/browse/MC-172082) - Piglins do not serialize their conversion time
-   [MC-172242](https://bugs.mojang.com/browse/MC-172242) - Left handed piglins don't look at gold ingots in their right hand
-   [MC-172567](https://bugs.mojang.com/browse/MC-172567) - Wither skeletons don't automaticly attack piglins
-   [MC-173021](https://bugs.mojang.com/browse/MC-173021) - Unuseful warning is logged when server receives incorrect vehicle movement packets
-   [MC-173090](https://bugs.mojang.com/browse/MC-173090) - Attacking baby piglins don't anger any adult piglins
-   [MC-173165](https://bugs.mojang.com/browse/MC-173165) - Piglin Bartering Loot Table contains an extra "set\_count" function
-   [MC-173168](https://bugs.mojang.com/browse/MC-173168) - The word "backup" appears instead of the phrase "back up."
-   [MC-173169](https://bugs.mojang.com/browse/MC-173169) - Piglins still aren't attracted to powered rails
-   [MC-173176](https://bugs.mojang.com/browse/MC-173176) - Serialization error affecting operators list and whitelist
-   [MC-173244](https://bugs.mojang.com/browse/MC-173244) - Target block moved by pistons permanently keep their signal strength

---

# Minecraft Snapshot 20w09a

Today is a sad day for Obsidian... It's crying. If you're not into crying you could always take aim at the new Target that we've added.

This update can also be found on [minecraft.net](https://www.minecraft.net/en-us/article/minecraft-snapshot-20w09a).

If you find any bugs, please report them on the official [Minecraft Issue Tracker](https://aka.ms/snapshotbugs?ref=reddit).

## New Features in 20w09a

-   Added the Target Block!
-   Added new Crying Obsidian block! It's sad and it cries purple energy

### Target Block

Because let’s face it, your aim could use some practice

-   The closer you hit to the center, the larger the redstone signal!
-   Test your skills with a variety of projectiles, including eggs, snowballs, tridents, and more!
-   You will need one hay block and four redstone for this recipe

### Zombified Piglin

-   Zombie Pigmen are now known as Zombified Piglins, and they now have ears... or well, one at least

## Changes in 20w09a

-   Bartering loot has been restructured to be more appealing to Survival players
-   Crying Obsidian can now be obtained from Piglin Bartering
-   Entities now get pushed by flowing lava
-   Huge Fungi will now grow only on its matching type of Nylium
-   Can now place Warped/Crimson roots and fungi into pots
-   Nether wart blocks and warped wart block can be cleared quickly using a hoe
-   Weeping vines are now climbable!
-   Biome fog color smoothly blends between biomes. Smooth
-   Changed ambient block lighting in the Nether to be on parity with other editions

### Block Renames

Some blocks have been renamed. Turns out singular Fungus in the Nether attempted to falsely present itself as many Fungi - very sneaky!

-   Crimson Fungi is now called Crimson Fungus
-   Warped Fungi is now called Warped Fungus

## Technical Changes in 20w09a

-   New particle types: `dripping_obsidian_tear`, `falling_obsidian_tear`, `landing_obsidian_tear`
-   Piglins now have an `IsImmuneToZombification` data value that prevents them from zombifying in the overworld

## Fixed bugs in 20w09a

-   [MC-7424](https://bugs.mojang.com/browse/MC-7424) Fall damage death messages don't show block player fall from correctly (ladders, vines, water)
-   [MC-102319](https://bugs.mojang.com/browse/MC-102319) Nether portal trigger and travel sounds are not assigned to any sound category
-   [MC-137554](https://bugs.mojang.com/browse/MC-137554) Shearing sound is in "friendly creatures" sound category
-   [MC-147601](https://bugs.mojang.com/browse/MC-147601) Purpur pillar block top texture hasn't changed to a new texture
-   [MC-148869](https://bugs.mojang.com/browse/MC-148869) Player can clip through the ground when exiting a minecart or a boat
-   [MC-166246](https://bugs.mojang.com/browse/MC-166246) Skeleton horses cannot be leashed
-   [MC-170273](https://bugs.mojang.com/browse/MC-170273) Diamond Swords use the wrong pallet
-   [MC-170274](https://bugs.mojang.com/browse/MC-170274) Pickaxe textures are inconsistent
-   [MC-170556](https://bugs.mojang.com/browse/MC-170556) Hoe textures are inconsistent
-   [MC-170815](https://bugs.mojang.com/browse/MC-170815) Soul sand valley fossils generate duplicated / stacked
-   [MC-170833](https://bugs.mojang.com/browse/MC-170833) Crimson Fungi and Warped Fungi cannot be placed in flower pots
-   [MC-170835](https://bugs.mojang.com/browse/MC-170835) Nether large fungi do not kill nylium underneath them
-   [MC-170842](https://bugs.mojang.com/browse/MC-170842) Potted plant models still missing bottom due to faulty uv
-   [MC-170844](https://bugs.mojang.com/browse/MC-170844) Nether sprouts don't break without supporting block
-   [MC-170890](https://bugs.mojang.com/browse/MC-170890) You can get normal fire on soul soil
-   [MC-170897](https://bugs.mojang.com/browse/MC-170897) Fossils in soulsand valleys can be generated in the air
-   [MC-170904](https://bugs.mojang.com/browse/MC-170904) When viewed in 3rd person mode, the cape renders incorrectly when sneaking while wearing a chest plate
-   [MC-170915](https://bugs.mojang.com/browse/MC-170915) Hoglins have inconsistent texture
-   [MC-170932](https://bugs.mojang.com/browse/MC-170932) Cave generator won't cut through crimson\_nylium and warped\_nylium, leading to lots of floating nylium
-   [MC-170954](https://bugs.mojang.com/browse/MC-170954) Lava spreads blue fire at invalid locations
-   [MC-170961](https://bugs.mojang.com/browse/MC-170961) Mining speeds for breaking crimson & warped doors, trapdoors, fences, signs, stairs and slabs aren't faster with an axe
-   [MC-170968](https://bugs.mojang.com/browse/MC-170968) Crimson and Warped trees / fungi replace certain blocks when growing
-   [MC-170986](https://bugs.mojang.com/browse/MC-170986) Lava fire spread creates normal fire on soul soil
-   [MC-171025](https://bugs.mojang.com/browse/MC-171025) Netherite items aren't pushed in flowing lava
-   [MC-171048](https://bugs.mojang.com/browse/MC-171048) HugeFungiConfiguration has an unused planted field
-   [MC-171077](https://bugs.mojang.com/browse/MC-171077) Soul Fire can be setblock on air, while normal Fire can't
-   [MC-171245](https://bugs.mojang.com/browse/MC-171245) Warped and Crimson signs cannot be crafted
-   [MC-171448](https://bugs.mojang.com/browse/MC-171448) The top textures of stripped stems don't match the normal stem top textures
-   [MC-171491](https://bugs.mojang.com/browse/MC-171491) Fossils spawn floating in the sky in buffet worlds
-   [MC-171548](https://bugs.mojang.com/browse/MC-171548) Soul Soil is not mined quicker with a shovel
-   [MC-171731](https://bugs.mojang.com/browse/MC-171731) Huge Fungi Generate on the Lowest Nylium Block
-   [MC-172084](https://bugs.mojang.com/browse/MC-172084) Soul Sand and Soul Soil have no sounds
-   [MC-172090](https://bugs.mojang.com/browse/MC-172090) Piglins would rather hold a golden item instead of a crossbow
-   [MC-172096](https://bugs.mojang.com/browse/MC-172096) Baby hoglins and baby piglins don't seem to play with each other
-   [MC-172112](https://bugs.mojang.com/browse/MC-172112) Hoglin walking sound is subtitled as "Hoglin dies" instead of "Footsteps"
-   [MC-172151](https://bugs.mojang.com/browse/MC-172151) Dark oak saplings are called "Jukebox/Note Blocks" in English (United Kingdom)
-   [MC-172242](https://bugs.mojang.com/browse/MC-172242) Left handed piglins don't look at gold ingots in their right hand
-   [MC-172356](https://bugs.mojang.com/browse/MC-172356) Piglin admiring held gold ingot drops it when killed
-   [MC-172363](https://bugs.mojang.com/browse/MC-172363) Piglins aren't attracted to certain golden items
-   [MC-172434](https://bugs.mojang.com/browse/MC-172434) Baby piglins don't sound high pitched when zombified
-   [MC-172486](https://bugs.mojang.com/browse/MC-172486) Piglins drop two shields when killed while holding one in their offhand
-   [MC-172516](https://bugs.mojang.com/browse/MC-172516) Piglin/hoglin become Persistant when within 16 blocks of a player, causing massive lag due to piling up entites
-   [MC-172580](https://bugs.mojang.com/browse/MC-172580) Piglin can no longer pick up items when equipped with a shield

---

# Minecraft Snapshot 20w08a

A wild snapshot appears! To tell you the truth, we hadn't actually planned to do a snapshot this week, but the Villagers were in dire need of neurosurgery.

## Fixed bug in 20w08a

-   [MC-172078](https://bugs.mojang.com/browse/MC-172078) All villagers with saved memory disappear when upgrading to 20w07a

---

# Minecraft Snapshot 20w07a

Ahh, a freshly baked snapshot! It undoubtedly smells better than the piglins that we just added...

## Features in 20w07a

-   Endermen can now pick up some of the new Nether blocks
-   Endermen will no longer pick up Netherrack
-   Gave Hoglins some actual functionality
-   Added Piglins
-   Netherite blocks can be used as the base of a beacon and Netherite ingots can be used as the fuel for a beacon. Weird flex but ok.

### Advancements

-   Piglins and hoglins are now required for Monster Hunter and Monsters Hunted

### Hoglins

-   Hoglins are big aggressive beasts that live in crimson forests in the nether
-   They attack players on sight, so be careful, they can easily knock you off a ledge!
-   Hoglins drop pork and sometimes leather, but not willingly
-   You can breed hoglins by feeding them crimson fungi, but do so at your own risk
-   Hoglins get hunted by piglins sometimes, but they don't go down without a fight!
-   Despite this, hoglins and piglin aren't enemies - they are more like an ecosystem
-   Baby hoglins like to pretend they are tough - but don't worry, they are more like angry puppies with no teeth
-   Want to keep hoglins off your back? Pro tip: Hoglins hate the smell of warped fungi!

### Piglins

-   Piglins are an aggressive civilization that live in the nether
-   They mostly hang around in the crimson forest, but you might find some in the nether wastes too
-   They think of players as target practice and will attack on sight
-   However if you dress appropriately they will see you as a respectable figure, or tolerable at least
-   Piglins are suspicious of strangers and if they see you opening a chest, or mining a block of gold, they will assume that you're stealing and will treat you accordingly
-   Piglins LOVE gold and get very distracted by gold items
-   Gold ingots are currency to piglins and you can throw ingots at them or right-click them with an ingot to barter for various goods
-   Piglins sometimes get hungry and hunt hoglins for food. Or they try at least. They results... vary.
-   Piglins prefer to hunt and fight in groups, and when a fight is happening everyone wants in
-   Piglins that somehow end up in the overworld become zombified fairly quickly
-   Piglins are creeped out by soul fire and zombified piglins, and will stay clear whenever possible
-   Wither skeletons are a historic enemy and piglins will attack on sight
-   Baby piglins are not as dangerous, but they can be mischievous so watch your back
-   ... and they like to play with baby hoglins

## Fixed bugs in 20w07a

-   [MC-65951](https://bugs.mojang.com/browse/MC-65951) Armor stands fall through fences
-   [MC-75328](https://bugs.mojang.com/browse/MC-75328) /clear doesn't clear items in the inventory crafting grid
-   [MC-79944](https://bugs.mojang.com/browse/MC-79944) Various statistics overflow at 32-bit integer limit
-   [MC-89043](https://bugs.mojang.com/browse/MC-89043) Slime blocks moved by pistons often fail to bounce up the player
-   [MC-93813](https://bugs.mojang.com/browse/MC-93813) Snow golems throwing snowballs play arrow shooting sound
-   [MC-94094](https://bugs.mojang.com/browse/MC-94094) Snow golems don't drop their pumpkin when sheared
-   [MC-94730](https://bugs.mojang.com/browse/MC-94730) Endermen become passive when teleporting randomly during day while being aggressive
-   [MC-132967](https://bugs.mojang.com/browse/MC-132967) Mushrooms show as green dots on map
-   [MC-133088](https://bugs.mojang.com/browse/MC-133088) Missing translation string death.attack.magic.player
-   [MC-135034](https://bugs.mojang.com/browse/MC-135034) Burning mobs are extinguished by snow in cold biomes, but not in snowy biomes
-   [MC-148067](https://bugs.mojang.com/browse/MC-148067) Snow Golems Damaged by Snowfall in Mountain/Cold Biomes
-   [MC-155977](https://bugs.mojang.com/browse/MC-155977) Enchanting a book makes the book lose its name
-   [MC-160053](https://bugs.mojang.com/browse/MC-160053) Enderman keeps following the player after becoming neutral/passive
-   [MC-166245](https://bugs.mojang.com/browse/MC-166245) No sound for shearing snow golems
-   [MC-167561](https://bugs.mojang.com/browse/MC-167561) All players can make a dog stand up or sit down
-   [MC-167692](https://bugs.mojang.com/browse/MC-167692) Infested blocks don't spawn silverfish when blown up
-   [MC-170816](https://bugs.mojang.com/browse/MC-170816) Debug Pie freezes in place when closing F3 menu and stays there
-   [MC-170846](https://bugs.mojang.com/browse/MC-170846) Stacked walls create pillars when they should not, depending on the order of placement
-   [MC-170848](https://bugs.mojang.com/browse/MC-170848) Hoglin and zombie pigman spawn eggs look identical
-   [MC-170849](https://bugs.mojang.com/browse/MC-170849) Hoglin's hitbox is way too small
-   [MC-170852](https://bugs.mojang.com/browse/MC-170852) Breaking a warped or crimson doors drops two items in Survival mode
-   [MC-170862](https://bugs.mojang.com/browse/MC-170862) Soul "Lights" do not update walls
-   [MC-170869](https://bugs.mojang.com/browse/MC-170869) Soul fire lantern animation missing
-   [MC-170881](https://bugs.mojang.com/browse/MC-170881) Fire doesn't burn items
-   [MC-170886](https://bugs.mojang.com/browse/MC-170886) Alt+F3 debug graph no longer functions
-   [MC-170899](https://bugs.mojang.com/browse/MC-170899) Netherite cannot power beacons
-   [MC-170939](https://bugs.mojang.com/browse/MC-170939) Walls don't create pillars with string / tripwire above
-   [MC-170951](https://bugs.mojang.com/browse/MC-170951) Cannot teleport entities outside of the world
-   [MC-171023](https://bugs.mojang.com/browse/MC-171023) Walls don't stack properly in some directions when placed next to blocks
-   [MC-171211](https://bugs.mojang.com/browse/MC-171211) Observers no longer detect a piston base starting to retract
-   [MC-171333](https://bugs.mojang.com/browse/MC-171333) Killing a hoglin does not grant the 'Monster Hunter'/'Monsters Hunted' advancements
-   [MC-172025](https://bugs.mojang.com/browse/MC-172025) Several misrotated blocks at snowy\_medium\_house\_2

---

# Minecraft Snapshot 20w06a

## Features in 20w06a

-   Added new Nether blocks!
-   Knockback resistance is now a scale instead of a probability
-   Added Crimson Forest biome to the Nether
-   Added Hoglins - they don't do much yet, but they have cute flappy ears!
-   Patrols no longer spawn when the player is close to any village
-   Added Netherite!
-   Added Soulsand Valley biome to the Nether
-   Walls do not have gaps anymore when stacked vertically
-   Added Warped Forest biome to the Nether

### Blocks

Many new block types have been added!

-   Two new wood-like materials - Crimson Stems and Warped Stems
-   Basalt blocks - you can find them as pillars but they can be placed in any direction
-   New ground surface blocks: Crimson Nylium and Warped Nylium
-   New vegetation: Nether Sprouts, Crimson Roots and Warped Roots
-   Two types of Fungi: Crimson and Warped - try using bone meal to grow them!
-   Warped Wart blocks
-   Weeping Vines that grow from the bottom of a block downwards!
-   A new natural light source: Shroomlights
-   Added Soul Soil! Whenever fire burns on Soul Soil, it burns with a blue flame!
-   Soul Soil can be used to craft Soul Torches - and those can be crafted into Soul Lanterns!
-   Using bone meal on Netherrack can now spread Nylium

### Crimson Forest

Crimson Forests can now be found in the Nether!

-   Crimson nylium carpets the cave floor with all kinds of strange new vegetation
-   Huge Crimson Fungi make up the "trees" of this forest, with Shroomlights lighting up the forest floor
-   Weeping Vines grow from the cave ceilings and fungi
-   Hoglins wander these Forests
-   Crimson spores swirl through the air

### Netherite

-   A new high level material found in the Nether. Use it to upgrade your diamond gear!

#### How to make Netherite

-   Mine Ancient Debris in the lower depths of the Nether. At own risk. No insurance coverage for that.
-   Refine it into Netherite Scrap in a furnace (although that's kind of slow so you might want a Blast Furnace).
-   Combine 4 Nether Scrap with 4 Gold Ingots in a crafting table to make a Netherite Ingot.

#### Netherite effects

-   Netherite items float in lava. So you don't lose all your gear after that unplanned lava bath.
-   Netherite items have higher enchantment value than diamond (but not as high as gold).
-   Netherite tools work faster and last longer than diamond.
-   Netherite weapons do more damage than diamond.
-   Netherite armor have higher toughness and durability than diamond.
-   Netherite armor gives you knockback resistance, so you barely get knocked back at all when hit by arrows and such.
-   And it looks cool!

### Soulsand Valley

Soulsand Valleys can now be found in the Nether!

-   An open space made mostly of Soul Sand and Soul Soil
-   Basalt pillars span from floor to ceiling
-   Fossile remains of unknown creatures from the past litter the valley
-   Ash falls through the air
-   A light blue glow envelopes the valley
-   Beware of Skeletons here

### Sounds

-   Ghasts sounds are now heard at shorter range
-   Updated block sounds for Bone Blocks, Netherrack, Soul Sand, Netherwart, Nether Bricks and Quartz Ore

### Warped Forest

Warped Forests can now be found in the Nether!

-   Warped nylium carpets the cave floor with all kinds of strange new vegetation
-   Huge Warped Fungi make up the "trees" of this forest, with Shroomlights lighting up the forest floor
-   A dark blue fog covers the forest!
-   Warped spores swirl through the air
-   The Warped Forests are strange, but also the least hostile place of Nether

### World Generation

-   The old Nether biome is now called Nether Wastes
-   Made shipwrecks and ocean ruins a bit less common, so you get more excited when you find one!

## Technical changes in 20w06a

-   Added a `locatebiome` command

### Commands

#### locatebiome

New command that locates a specified biome. Useful in creative mode when you're looking for a specific biome and don't want to fly around randomly searching for it. Syntax: `locatebiome <biome>` Parameters:

-   `biome` - The id of the biome to find

### Particles

-   New particle types: ash, crimson\_spore, soul\_fire\_flame and warped\_spore

### Rendering

-   Nailed Entity shadows to the ground.

## Fixed bugs in 20w06a

-   [MC-17431](https://bugs.mojang.com/browse/MC-17431) Shift-clicking stacked items with a data tag into the enchanting table GUI removes data tags from the moved item
-   [MC-45619](https://bugs.mojang.com/browse/MC-45619) Water, Signs, Vines, Torches etc. in the same block as item frame break item frame's redstone signal
-   [MC-52178](https://bugs.mojang.com/browse/MC-52178) Cape doesn't move down while sneaking / Cape detaches from body while sneaking
-   [MC-59363](https://bugs.mojang.com/browse/MC-59363) Items in item frames are deleted if both mouse buttons are used simultaneously
-   [MC-82235](https://bugs.mojang.com/browse/MC-82235) Baby pigs turn into adult zombie pigmen when struck by lightning
-   [MC-92889](https://bugs.mojang.com/browse/MC-92889) Mending doesn't always consume experience if the player wears items with mending that are already fully repaired
-   [MC-93198](https://bugs.mojang.com/browse/MC-93198) Throwing potions / throwable projectiles causes both hands to bob up and down
-   [MC-93631](https://bugs.mojang.com/browse/MC-93631) Pistons pop off blocks attached to their back when retracting
-   [MC-96436](https://bugs.mojang.com/browse/MC-96436) Eggs/snowballs/xp-bottles break instantly when thrown while riding a horse
-   [MC-97958](https://bugs.mojang.com/browse/MC-97958) Small slime has no jump or squish sound
-   [MC-103655](https://bugs.mojang.com/browse/MC-103655) Cats don't stand up when using right click on them while they're sitting on chests or beds
-   [MC-109370](https://bugs.mojang.com/browse/MC-109370) Bottom face of column blocks are rotated 180 degrees
-   [MC-109844](https://bugs.mojang.com/browse/MC-109844) en\_us.json contains unused strings
-   [MC-109850](https://bugs.mojang.com/browse/MC-109850) Redstone wire doesn't have a bottom texture
-   [MC-112630](https://bugs.mojang.com/browse/MC-112630) Carrot on a stick cannot be broken
-   [MC-113381](https://bugs.mojang.com/browse/MC-113381) Falling dust particles of anvil and concrete powder blocks are black
-   [MC-120335](https://bugs.mojang.com/browse/MC-120335) Flower pot bottom texture is not rendered because of incorrect "uv" values in the model file
-   [MC-131440](https://bugs.mojang.com/browse/MC-131440) The message for trying to sleep at the wrong time implies that you can only sleep at night during a thunderstorm
-   [MC-131770](https://bugs.mojang.com/browse/MC-131770) Rain particles appear one block below the water or lava surface
-   [MC-132607](https://bugs.mojang.com/browse/MC-132607) Splitting slimes and magma cubes do not copy NoAI value
-   [MC-134162](https://bugs.mojang.com/browse/MC-134162) Item entities can break turtle eggs
-   [MC-136868](https://bugs.mojang.com/browse/MC-136868) Ignited TNT, arrow or trident turns black when it falls on soul sand or snow layers
-   [MC-138600](https://bugs.mojang.com/browse/MC-138600) Cats don't bring gifts if they have already decided to sit on your bed
-   [MC-140544](https://bugs.mojang.com/browse/MC-140544) Pickaxes don't speed up piston breaking
-   [MC-148474](https://bugs.mojang.com/browse/MC-148474) Sloped powered detector rails break when pushed or pulled by a piston
-   [MC-149052](https://bugs.mojang.com/browse/MC-149052) Stonecutter recipe list doesn't show item tooltips
-   [MC-149776](https://bugs.mojang.com/browse/MC-149776) Cartography Table requires string for the recipe to show up in the recipe book
-   [MC-150020](https://bugs.mojang.com/browse/MC-150020) Composter is in the "Miscellaneous" category instead of "Decoration" like the other workstation blocks
-   [MC-154867](https://bugs.mojang.com/browse/MC-154867) Tamed cats remain sitting if the world is reloaded while the cat is sitting on a chest
-   [MC-158807](https://bugs.mojang.com/browse/MC-158807) You can remove cursed enchantments on items by repairing them in inventory
-   [MC-159300](https://bugs.mojang.com/browse/MC-159300) Villagers that have been infected by a zombie can despawn, even if they have been traded with
-   [MC-159773](https://bugs.mojang.com/browse/MC-159773) Shulkers can teleport to non-solid faces, and don't teleport to some solid faces
-   [MC-159918](https://bugs.mojang.com/browse/MC-159918) Foxes don't run from polar bears
-   [MC-159963](https://bugs.mojang.com/browse/MC-159963) Minecarts can break turtle eggs
-   [MC-160897](https://bugs.mojang.com/browse/MC-160897) Dropping an item using the drop key displays the hand animation but dropping items from within the inventory does not
-   [MC-160902](https://bugs.mojang.com/browse/MC-160902) Arm swings when right-clicking on full minecart
-   [MC-161156](https://bugs.mojang.com/browse/MC-161156) Silverfish and endermites appear black on soul sand
-   [MC-161259](https://bugs.mojang.com/browse/MC-161259) Using the carrot on a stick while riding a pig plays no hand animation
-   [MC-162881](https://bugs.mojang.com/browse/MC-162881) Composter doesn't display particles when being fed composting items through a hopper
-   [MC-163286](https://bugs.mojang.com/browse/MC-163286) /setblock ~ ~ ~ air destroy does not destroy liquids
-   [MC-164184](https://bugs.mojang.com/browse/MC-164184) Breaking a shulker box with contents in Creative mode drops the block at an incorrect location
-   [MC-164948](https://bugs.mojang.com/browse/MC-164948) Entity shadow renders through transparent blocks
-   [MC-167077](https://bugs.mojang.com/browse/MC-167077) Foxes sleep on top of honey blocks, even in broad daylight
-   [MC-167512](https://bugs.mojang.com/browse/MC-167512) Glass in the hand is rendered differently depending on the "Clouds" setting
-   [MC-167989](https://bugs.mojang.com/browse/MC-167989) Spawn point is not set when monsters are nearby
-   [MC-168540](https://bugs.mojang.com/browse/MC-168540) Threads created by net.minecraft.Util.backgroundExecutor() have misleading names
-   [MC-168772](https://bugs.mojang.com/browse/MC-168772) Experience orbs can crush turtle eggs
-   [MC-169679](https://bugs.mojang.com/browse/MC-169679) Composters do not make sounds when fed by hoppers
-   [MC-169692](https://bugs.mojang.com/browse/MC-169692) Entity shadow floats slightly above the ground
-   [MC-169832](https://bugs.mojang.com/browse/MC-169832) Transparent item models have inconsistent rendering when a glowing entity is present
-   [MC-170128](https://bugs.mojang.com/browse/MC-170128) Cannot build an EntityType without a datafixer due to an IllegalArgumentException

---

# Minecraft 1.21.9 Release Candidate 1

We are now releasing the first, and hopefully only, release-candidate for 1.21.9. If all goes well, no further changes will be made before the full release. Happy mining!

## Fixed bugs in 1.21.9 Release Candidate 1

-   [MC-302243](https://bugs.mojang.com/browse/MC-302243) Creakings can spawn with the "spawnMonsters" game rule set to false
-   [MC-302278](https://bugs.mojang.com/browse/MC-302278) The texture in the middle of conduits is upside down

---

# Minecraft 1.21.9 Pre-Release 4

Here is another Pre-Release for 1.21.9 with more bugfixes!

## Changes

### UI

-   Debug Options screen is now accessible using F3 + F6, instead of the previous F3 + F5

## Fixed bugs in 1.21.9 Pre-Release 4

-   [MC-300216](https://bugs.mojang.com/browse/MC-300216) The new F3 + F5 debug settings menu does not open on Mac keyboards
-   [MC-301735](https://bugs.mojang.com/browse/MC-301735) Server Management Protocol Kick command parameter mis match
-   [MC-302039](https://bugs.mojang.com/browse/MC-302039) Conduits don't have the block-breaking animation.
-   [MC-302119](https://bugs.mojang.com/browse/MC-302119) Shield with patterns has no enchantment glint when enchanted
-   [MC-302130](https://bugs.mojang.com/browse/MC-302130) Mobs have visual glitches all over them
-   [MC-302170](https://bugs.mojang.com/browse/MC-302170) Player Heads do not Glow
-   [MC-302240](https://bugs.mojang.com/browse/MC-302240) Bugs on ranged weapons

---

# Minecraft 1.21.9 Pre-Release 3

We'll kick the week off with a third pre-release for the Copper Age Drop. This pre-release includes a performance update and bug fix for the copper golem.

## Fixed bugs in 1.21.9 Pre-Release 3

-   [MC-301963](https://bugs.mojang.com/browse/MC-301963) Copper golems cause huge lag spikes when checking chests
-   [MC-301990](https://bugs.mojang.com/browse/MC-301990) Copper golem statues cause culling issues when placed above certain blocks

---

# Minecraft 1.21.9 Pre-Release 2

We heard Friday would be a Pre-tty cool day to release the second Pre-Release for Minecraft: Java Edition 1.21.9, so here we are! This pre-release contains fixes to various issues introduced in previous snapshots, as well as a missed bump to the Data Pack major version.

Happy Crafting!

## Changes

-   Copper Golems will now oxidize even when the game rule `doDaylightCycle` is disabled
-   The Copper Golem's behavior for turning into a statue has been tweaked to match Bedrock
    -   Copper Golems no longer need to be close to the center of an empty block position in order to turn into a statue
    -   Copper Golems now have the possibility to turn into a statue as soon as they become fully oxidized

## Technical Changes

-   The Data Pack version is now 88.0, to match the breaking change to `/setworldspawn` and `/spawnpoint` in the 1.21.9-pre1

## Fixed bugs in 1.21.9 Pre-Release 2

-   [MC-300362](https://bugs.mojang.com/browse/MC-300362) Copper golems do not oxidize when doDaylightCycle is disabled
-   [MC-301566](https://bugs.mojang.com/browse/MC-301566) Occasional sound crash on resource pack reload
-   [MC-301706](https://bugs.mojang.com/browse/MC-301706) Server Management Protocol does not support parameters as object (by-name)
-   [MC-301770](https://bugs.mojang.com/browse/MC-301770) The `below_name` plate is not displayed higher for players and mannequins named “deadmau5”
-   [MC-301963](https://bugs.mojang.com/browse/MC-301963) Copper golems cause huge lag spikes when checking chests
-   [MC-302088](https://bugs.mojang.com/browse/MC-302088) Oxidized Copper Golems take an extremely long time to turn into a statue
-   [MC-302112](https://bugs.mojang.com/browse/MC-302112) Posed mannequins don't use the correct hitbox
-   [MC-302117](https://bugs.mojang.com/browse/MC-302117) Text display billboarding is broken
-   [MC-302120](https://bugs.mojang.com/browse/MC-302120) Dimension-specific world spawn point causes mob spawning in other dimensions to fail
-   [MC-302148](https://bugs.mojang.com/browse/MC-302148) Copper Golem does not get close enough to search the chest, getting permanently stuck
-   [MC-302164](https://bugs.mojang.com/browse/MC-302164) Breaking change to /setworldspawn and /spawnpoint in minor datapack version

---

# Minecraft 1.21.9 Pre-Release 1

The copper age is approaching and it's time for this drop's first pre-release. Today's release includes more copper golem improvements, some changes to the mannequins and several bug fixes. Pre-releases don't follow the regular Tuesday release schedule, so keep an eye out for the next one.

## Changes

### Minor Tweaks to Blocks, Items and Entities

-   Copper Golem now only tries to open Chests that are neighboring blocks when it's a passenger

### Minecraft Server Management Protocol

-   Notifications now use `minecraft:notification/` prefix instead of `notification:`

## Technical Changes

-   The Data Pack version is now 87.1

## Data Pack Version 87.1

### Mannequins

-   Mannequins description text can now be configured
-   Mannequins now accept `minecraft:profile` component from spawner items

#### Modified Data Fields

-   `profile` - now has the same format as a `minecraft:profile` component (which has been extended to allow overrides), defaults to `{}` (i.e. static profile with both `id` and `name` missing)

#### New Data Fields

-   `pose` - The pose of the Mannequin
    -   Valid entries: `standing`, `crouching`, `swimming`, `fall_flying`, `sleeping`
-   `immovable` - Optional boolean specifying that the Mannequin cannot be moved (defaults to `false`)
-   `description` - Optional Text Component shown where a Player's `below_score` score would show
    -   The default "NPC" (`entity.minecraft.mannequin.label`) text is shown if omitted
-   `hide_description` - Optional boolean specifying that no description should be shown at all
    -   A Mannequin with the description hidden displays as if a Player had no `below_score` display

### Commands

-   The `spawnpoint` command now optionally takes in a `pitch` argument
-   The `setworldspawn` command is no longer limited to the overworld
    -   This means players can respawn e.g. in the Nether when they have no bed or respawn anchor
    -   It now also takes in an optional `pitch` argument
-   Server commands now run from the respawn dimension by default instead of always the overworld
-   The `fetchprofile` command now also prints a clickable text to summon a Mannequin with the resolved profile

### Data Components

#### Modified `minecraft:profile`

-   Profiles can now also have additional fields that can replace various values used for rendering
-   If any of the fields are omitted, the value from the resolved profile is used, even if the profile resolved to the default skin
-   New fields
    -   `texture` - Optional namespaced ID of the skin texture to use for rendering
        -   The skin is specified relative to the `textures` folder and with a `.png` suffix
        -   e.g. `entity/player/wide/steve` will use the default wide Steve skin
    -   `cape` - Optional namespaced ID of the cape texture to use for rendering
        -   When specified, uses the same format as the `texture` field
    -   `elytra` - Optional namespaced ID of the elytra texture to use for rendering
        -   When specified, uses the same format as the `texture` field
        -   If this value is not present either as override or in player profile, Mannequins using this profile will use the cape texture, or if that is also not present, the default Elytra texture when wearing Elytra
    -   `model` - Optional model type, one of `wide` and `slim`

### Entity Data

#### Modified `minecraft:player`

-   Changes to the `respawn` object
    -   `angle` has been renamed to `yaw` and is now a required field
    -   `pitch` has been added as a required field
    -   `dimension` is now a required field

### Loot Functions

#### `minecraft:copy_name`

-   The `source` field now accepts new context values:
    -   `direct_attacker`
    -   `target_entity`
    -   `interacting_entity`

#### `minecraft:copy_components`

-   The `source` field now accepts new context values:
    -   `this`
    -   `attacker`
    -   `direct_attacker`
    -   `attacking_player`
    -   `target_entity`
    -   `interacting_entity`
    -   `tool`

## Fixed bugs in 1.21.9 Pre-Release 1

-   [MC-160528](https://bugs.mojang.com/browse/MC-160528) End portals do not negate fall damage
-   [MC-243759](https://bugs.mojang.com/browse/MC-243759) Explosions won't damage an entity if the distance to its eyes is 0
-   [MC-300257](https://bugs.mojang.com/browse/MC-300257) Lightning does not reset copper golem oxidation
-   [MC-300294](https://bugs.mojang.com/browse/MC-300294) Copper golems pathfind to chests incorrectly
-   [MC-300687](https://bugs.mojang.com/browse/MC-300687) The copper chains and bars aren't organized correctly in the Creative inventory
-   [MC-300881](https://bugs.mojang.com/browse/MC-300881) The skin preview in the skin reporting screen is no longer interactive
-   [MC-301409](https://bugs.mojang.com/browse/MC-301409) Acceleration power of fireballs and wind charges gets halved when they are redirected by explosions
-   [MC-301414](https://bugs.mojang.com/browse/MC-301414) Scraping oxidation off double chests doesn't produce particles on the half of the chest that wasn’t directly interacted with
-   [MC-301424](https://bugs.mojang.com/browse/MC-301424) entity\_data item component detection is broken in resource packs
-   [MC-301541](https://bugs.mojang.com/browse/MC-301541) Copper golems no longer sort items when in minecarts
-   [MC-301569](https://bugs.mojang.com/browse/MC-301569) Sounds of copper chests and all variants are too quiet and sound low-quality compared to before
-   [MC-301573](https://bugs.mojang.com/browse/MC-301573) Relative teleportation across dimensions is inconsistent
-   [MC-301798](https://bugs.mojang.com/browse/MC-301798) Copper golems do not open chests with specific transparent/non-full blocks above them
-   [MC-301814](https://bugs.mojang.com/browse/MC-301814) CustomNameVisible does not work for mannequins (for the name, not the NPC annotation)
-   [MC-301815](https://bugs.mojang.com/browse/MC-301815) Mannequin data is sometimes lost when using spawn eggs
-   [MC-301819](https://bugs.mojang.com/browse/MC-301819) Mannequins' name tags are visible when on a team and ridden
-   [MC-301862](https://bugs.mojang.com/browse/MC-301862) When clicking a command suggestion in chat, it occasionally selects half of the new word
-   [MC-301883](https://bugs.mojang.com/browse/MC-301883) Entities going through portals with their Motion set to more than 10 on an axis have their Motion tag reset
-   [MC-301893](https://bugs.mojang.com/browse/MC-301893) When a copper golem is leashed by a player and then oxidizes into a statue, it will not drop the lead
-   [MC-301951](https://bugs.mojang.com/browse/MC-301951) Misleading description for operator\_user\_permission\_level in server management protocol documentation
-   [MC-301979](https://bugs.mojang.com/browse/MC-301979) Copper golems no longer properly check chests
-   [MC-301984](https://bugs.mojang.com/browse/MC-301984) Teleporting a player to their own position is now jittery/frozen
-   [MC-301991](https://bugs.mojang.com/browse/MC-301991) deprecated.json has some renamed keys pointing to text values instead of the new keys
-   [MC-302032](https://bugs.mojang.com/browse/MC-302032) Static profiles no longer resolve texture data unless an id or name is provided
-   [MC-302089](https://bugs.mojang.com/browse/MC-302089) Game crashes when flying mobs start pathfinding in debug mode
-   [MC-302092](https://bugs.mojang.com/browse/MC-302092) Crash when placing iron bars next to stairs, when stairs are added to #bars tag
-   [MC-302094](https://bugs.mojang.com/browse/MC-302094) Crash when adding blocks to #copper\_chests then placing it next to actual copper chests
-   [MC-302095](https://bugs.mojang.com/browse/MC-302095) Crash when adding blocks to #lightning\_rods and summoning a lightning over it
-   [MC-302096](https://bugs.mojang.com/browse/MC-302096) Crash when adding blocks to #wooden\_shelves, placing it next to wooden shelf, then powering the shelf

---

# 1.21.8 Release Candidate 1

Hotfix coming in ho-... very cold? Today we're releasing 1.21.8 Release Candidate 1, addressing various graphical corruption and freeze issues on certain graphics devices.

As always, if you encounter any graphical issues with this Release Candidate, reports on our [Bug Tracker](https://bugs.mojang.com/projects/MC/summary) are very much appreciated!

Happy Crafting!

## Fixed bugs in 1.21.8 Release Candidate 1

-   [MC-295947](https://bugs.mojang.com/browse/MC-295947) The game screen freezes after a while on some Intel integrated graphics
-   [MC-296107](https://bugs.mojang.com/browse/MC-296107) Entities and block entities become visually corrupted after a while on some Intel integrated graphics
-   [MC-296908](https://bugs.mojang.com/browse/MC-296908) Text and texture atlases become visually corrupted after a while on some Intel integrated graphics
-   [MC-297784](https://bugs.mojang.com/browse/MC-297784) Entities are shaded incorrectly after a while on Intel graphics of Gen11 architecture
-   [MC-298903](https://bugs.mojang.com/browse/MC-298903) Items in the inventory can turn into a solid color and then disappear and text can render colored while on some Intel integrated graphics
-   [MC-298908](https://bugs.mojang.com/browse/MC-298908) Items in the inventory are lit as if from the opposite direction on some Intel integrated graphics
-   [MC-299144](https://bugs.mojang.com/browse/MC-299144) Crash with AMD graphics card when loading Resource Pack with invalid shader

---

# Minecraft 1.21.7 Release Candidate 2

Hey! We had to fix some more bugs today! Here is Release Candidate 2 for Minecraft: Java Edition 1.21.7.

## Technical Changes

-   The Data Pack version is now 81
-   The Resource Pack version is now 64

## Fixed bugs in 1.21.7 Release Candidate 2

-   [MC-298879](https://bugs.mojang.com/browse/MC-298879) The game crashes upon startup on some AMD graphics
-   [MC-299110](https://bugs.mojang.com/browse/MC-299110) Force upgrading does not write new DataVersion to converted data
-   [MC-299126](https://bugs.mojang.com/browse/MC-299126) The server crashes when certain mobs ride a turtle
-   [MC-299130](https://bugs.mojang.com/browse/MC-299130) Pack formats were not incremented in 1.21.7 rc1 after breaking changes

---

# Minecraft 1.21.7 Release Candidate 1

Today we are shipping Release Candidate 1 for 1.21.7, a hotfix release that takes care of some critical issues that managed to sneak their way into the Chase the Skies drop (1.21.6). The hotfix also includes a new music disc and a painting of the good boy Dennis. If no other critical issues are found, this will be the version for 1.21.7 that can be expected to be released soon. Happy mining!

## New Features

-   Added a painting of a good boy by artist Sarah Boeving
-   Added music disc "Lava Chicken" by Hyper Potions
    -   Drops when defeating a Baby Zombie riding a Chicken (Chicken Jockey)

## Fixed bugs in 1.21.7 Release Candidate 1

-   [MC-297748](https://bugs.mojang.com/browse/MC-297748) The moon is rendered incorrectly on some Qualcomm graphics
-   [MC-298448](https://bugs.mojang.com/browse/MC-298448) Filled maps are rendered incorrectly on some Qualcomm graphics
-   [MC-298681](https://bugs.mojang.com/browse/MC-298681) Text displays with the "shadow" tag enabled and the "see\_through" tag disabled exhibit z-plane fighting at a close distance
-   [MC-298710](https://bugs.mojang.com/browse/MC-298710) TTF glyphs are incorrectly rendered over some elements
-   [MC-298832](https://bugs.mojang.com/browse/MC-298832) The breaking particles of droppers and dispensers facing up or down appear incorrect on some Qualcomm graphics
-   [MC-298856](https://bugs.mojang.com/browse/MC-298856) Blindness and darkness fog effects no longer work underwater
-   [MC-298898](https://bugs.mojang.com/browse/MC-298898) TextureAtlas leaks textures after resource reload
-   [MC-298919](https://bugs.mojang.com/browse/MC-298919) Sometimes you pass through the happy ghast when you get off while going forward
-   [MC-299017](https://bugs.mojang.com/browse/MC-299017) Text on glowing signs is not visible on some graphics
-   [MC-299071](https://bugs.mojang.com/browse/MC-299071) Memory Leak in ItemStackRenderState leads to OutOfMemoryError

---

# Minecraft 1.21.6 Release Candidate 1

As we get ready to Chase the Skies, here comes the first test flight of 1.21.6 - Release Candidate 1!

Happy Ghast(-ing)!

## Fixed bugs in 1.21.6 Release Candidate 1

-   [MC-298022](https://bugs.mojang.com/browse/MC-298022) Not signed Books and Quills with an overflowing new line at the bottom do not depict the pages' contents
-   [MC-298633](https://bugs.mojang.com/browse/MC-298633) Happy Ghast gets you stuck in blocks while riding and gets stuck in blocks upon dismount
-   [MC-298658](https://bugs.mojang.com/browse/MC-298658) Locator Bar shows inaccurate positions after respawn

---

# Minecraft 1.21.6 Pre-Release 4

We are now releasing Pre-Release 4 for Minecraft 1.21.6, with a few minor bug fixes.

Happy crafting!

## Fixed bugs in 1.21.6 Pre-Release 4

-   [MC-279417](https://bugs.mojang.com/browse/MC-279417) Luring mobs onto blocks at Y=-64 will instead make them pathfind to the highest elevation
-   [MC-298446](https://bugs.mojang.com/browse/MC-298446) The "Thunder roars" sound is no longer affected by the master volume
-   [MC-298510](https://bugs.mojang.com/browse/MC-298510) Happy ghasts stay still for a few seconds when you get off them
-   [MC-298653](https://bugs.mojang.com/browse/MC-298653) Master volume slider no longer affects /playsoud sounds with high volume

---

# Minecraft 1.21.6 Pre-Release 3

We've got another pre-release coming in hot! This time with a new advancement trigger and sound category but most importantly some much needed bug fixes.

## New Features

### Music and Sound

-   Added new sound volume category called "UI" for sounds played by UI elements, like button clicks

## Technical Changes

-   The Data Pack version is now 80

## Data Pack Version 80

-   Added `player_sheared_equipment` trigger

### New Triggers

Added `minecraft:player_sheared_equipment`

-   Can Trigger when a player shears off a shearable equipment from an Entity
-   Conditions:
    -   `item` - Item that is sheared
    -   `entity` - The entity that was sheared

### Commands

#### Modified `playsound`

-   Added new category `ui`
    -   Sounds in this category will continue playing when paused, similarly to `music`

## Fixed bugs in 1.21.6 Pre-Release 3

-   [MC-296371](https://bugs.mojang.com/browse/MC-296371) The entity shadows of happy ghasts are too small in relation to the size of their models
-   [MC-296374](https://bugs.mojang.com/browse/MC-296374) The entity shadows of ghastlings are too small in relation to the size of their models
-   [MC-296853](https://bugs.mojang.com/browse/MC-296853) The "Shear Brilliance" advancement is incorrectly given by shearing a lead off a wolf
-   [MC-297113](https://bugs.mojang.com/browse/MC-297113) Hotbar shown in loading terrain screen
-   [MC-297497](https://bugs.mojang.com/browse/MC-297497) The “Connection Lost” title isn’t displayed when being kicked from realms due to idle timeout
-   [MC-297972](https://bugs.mojang.com/browse/MC-297972) Dialog body content is misaligned
-   [MC-298353](https://bugs.mojang.com/browse/MC-298353) Ridden entities won't make the lead breaking sound when attached to a fence
-   [MC-298412](https://bugs.mojang.com/browse/MC-298412) Subtitles are no longer shown when the master volume is set to zero
-   [MC-298466](https://bugs.mojang.com/browse/MC-298466) When clicking the "yes" button to confirm command execution in a dialog, if the player is put into another dialog, the click sound from the "yes" button will not be played until it is closed
-   [MC-298492](https://bugs.mojang.com/browse/MC-298492) Disconnecting through dialog in configuration phase causes the client to crash.
-   [MC-298516](https://bugs.mojang.com/browse/MC-298516) While running /dialog clear and /dialog show every tick, pressing the warning button just after joining the world can crash the game
-   [MC-298520](https://bugs.mojang.com/browse/MC-298520) Items in slots now render behind the container title, mismatching 1.21.5 behavior

---

# Minecraft 1.21.6 Pre-Release 2

We're kicking the week off with another pre-release, including some music and happy ghast bug fixes. The Chase the Skies drop is getting closer and the pre-release schedule might include more than one pre-release per week.

## Changes

### Music and Sound

-   The following sound categories have been renamed:
    -   Friendly Creatures -> Friendly Mobs
    -   Hostile Creatures -> Hostile Mobs

## Technical Changes

### Dialogs

#### Dialog Description Format

##### Input Control Types

###### `minecraft:text`

-   Output values:
    
    -   As template substitution: contents with special characters escaped to fit in a SNBT literal (note: both `'` and `"` are escaped)
-   For `multiline` field:
    
    -   If `height` field is omitted, but `max_lines` is present, the height that will be chosen to fit the maximum number of lines can't exceed `512`

## Fixed bugs in 1.21.6 Pre-Release 2

-   [MC-217887](https://bugs.mojang.com/browse/MC-217887) Unsigned books written in 1.9-pre1 or earlier don't upgrade properly
-   [MC-297575](https://bugs.mojang.com/browse/MC-297575) Happy Ghast with nbt NoAI set to true can't be controlled by player
-   [MC-297591](https://bugs.mojang.com/browse/MC-297591) Ender pearls can unexpectedly come to a halt
-   [MC-298104](https://bugs.mojang.com/browse/MC-298104) The max\_lines field of multiline text input control is unrestricted, lagging the game
-   [MC-298144](https://bugs.mojang.com/browse/MC-298144) The initial value of minecraft:text input type is limited to 32 characters, regardless of max\_length field
-   [MC-298155](https://bugs.mojang.com/browse/MC-298155) Dialog command\_template using a multiline text input causes player to be kicked out of the server due to illegal characters in chat (which is \\n)
-   [MC-298209](https://bugs.mojang.com/browse/MC-298209) Player cannot move while touching a happy ghast's body
-   [MC-298301](https://bugs.mojang.com/browse/MC-298301) Blinking the cursor shifts all characters to the right of a multilines text field input in Dialogs
-   [MC-298307](https://bugs.mojang.com/browse/MC-298307) Entering and exiting a pale garden while in Creative mode causes the current music track to remain silent
-   [MC-298358](https://bugs.mojang.com/browse/MC-298358) Riding a mob into powder snow no longer affects the player properly
-   [MC-298361](https://bugs.mojang.com/browse/MC-298361) Happy ghast with player riding, teleports back and forth when exiting nether portal
-   [MC-298368](https://bugs.mojang.com/browse/MC-298368) "music\_notes.png.mcmeta" has an extra index that does not exist, causing a warning
-   [MC-298394](https://bugs.mojang.com/browse/MC-298394) Freezing in Powdered Snow is very inconsistent and jittery
-   [MC-298422](https://bugs.mojang.com/browse/MC-298422) Ghasts and happy ghasts do not take damage from harmful blocks under some circumstances

---

# 1.21.6 Pre-Release 1

Hey! This is the first pre-release of 1.21.6. From now on, you will mostly see us fixing bugs and the release schedule might include more than one pre-release per week. We are on the finish line for the second drop of the year!

## Changes

-   The Dried Ghast Block now emits a vibration frequency of 11 when its block state changes
-   Shearing Saddles, Horse Armor, and Carpets now emits a vibration frequency of 6, along with the Unequip frequency of 4
-   The Ambient Dried Ghast sounds are now adjusted under the Blocks sound option instead of the Ambient/Environment option
-   A player riding a Happy Ghast can no longer completely fly through a Happy Ghast ridden by another player

## Technical Changes

-   The Data Pack version is now 79
-   The Resource Pack version is now 63

## Data Pack Version 79

-   Dialogs can now configure if they pause the game and if they close after an action is taken
-   Every dialog can now have inputs and can submit information
    -   The definition of actions has been changed to accommodate that
    -   The dedicated input dialog types have been removed, since they are redundant now
    -   The order of elements is:
        -   Body
        -   Inputs
        -   Actions
-   The `minecraft:custom` click event has been expanded to carry full a NBT tag
-   A new keybind called "Quick Actions" has been added to allow accessing content-configured dialogs

### Quick Actions Keybind

-   A new keybind has been addded that allows users to access a set of dialogs
-   Default key: `G`
-   This feature is configured by `minecraft:quick_actions` dialog tag
    -   If this tag is empty, the keybind does nothing
    -   If this tag has a single element, the keybind will open this dialog
    -   If this tag has multiple elements, the keybind will lead to `minecraft:quick_actions` dialog which (by default) lets user select one of the tag elements
        -   If this dialog is removed, the keybind does nothing
-   This option is intended to be used in custom content and by servers, so this tag is empty by default

### Common Dialog fields

New fields:

-   `pause` - if the dialog screen should pause the game in single-player mode, default: `true`
-   `after_action` - an additional operation performed on the dialog after click or submit actions, default: `close`
    -   `close` - closes the dialog and returns to the previous non-dialog screen (if any)
    -   `none` - does nothing, i.e. keeps the current dialog screen open
        -   only available if `pause` is `false` to avoid locking the game in single-player mode
    -   `wait_for_response` - replace the current dialog with a "Waiting for Response" screen
        -   this option is intended to prevent users from sending multiple actions on slow connections
            -   servers are expected to eventually replace this screen with a new dialog
        -   to avoid accidental locking, a "Back" button will become active after 5 seconds
            -   clicking this button will continue as if the dialog was closed (i.e. the game returns to the previous non-dialog screen, if any)
        -   The "Waiting for Response" screen will unpause the game in single-player mode to avoid locking the game

### Dialog Types

#### Changed `minecraft:multi_action`, `minecraft:server_links`, `minecraft:dialog_list`

-   Replaced field `on_cancel` with `exit_action`, holding an optional action
    -   If `exit_action` is present, a button for it will appear in footer, otherwise the footer is not present
    -   `exit_action` is also used for the Escape action

#### Removed `minecraft:simple_input_form`

-   Since any dialog can now have inputs, this dialog can be replaced by `minecraft:notice`

#### Removed `minecraft:multi_action_input_form`

-   Since any dialog can now have inputs, this dialog can be replaced by `minecraft:multi_action` (without any specified `exit_action`)

### Input Control Types

-   To accomodate the new `minecraft:custom` click event, all inputs will now return either a string or an NBT tag, depending on context

#### `minecraft:text`

-   Output values:
    -   As template substitution: contents without modification
    -   As tag: a string tag with contents without modification

#### `minecraft:boolean`

-   Output values:
    -   As template substitution: `on_true` when checked, `on_false` when unchecked
    -   As tag: `1b` when checked, `0b` when unchecked

#### `minecraft:number_range`

-   Output values:
    -   As template substitution: text representation of current value
        -   Whole numbers will be sent without decimal point
    -   As tag: a float tag with current value

#### Dialog Body Types

Hover and click events on text components within bodies now work as expected

-   Click events are handled by the dialog screen like any other action - that means it will also run the `after_action`

### Actions

-   The format of actions has been changed due to the merging of plain and input dialogs
-   After every action the dialog will always evaluate the contents of the `after_action` field (see above)

Fields:

-   Kept fields: `label`, `tooltip`, `width`
-   New field: `action` (replaces `on_click` and `on_submit`) - an action to perform when button is clicked, optional object with fields:
    -   `type` - value from `minecraft:dialog_action_type` registry
    -   `<type-specific>` - see below, depends on `type`

##### Static Dialog Action Types

All existing `click_event` actions (except for `open_file`) are included as dialog action types.

Uses same format as `click_event` on text components (but with `action` replaced with `type`) For example, when using `show_dialog`, entry for action button will look like:

    {
        "label": "some label",
        "action": {
            "type": "show_dialog",
            "dialog": "some:id"
        }
    }
    

##### `minecraft:dynamic/run_command` Action Type

-   This action will build a `run_command` event using a provided macro template
-   The macro will be expanded with string values from all inputs
    -   For example, if the macro template is `some_command $(some_input)`, the string value from the input with `key` of `some_input` will be used for the template expansion
    -   Inputs not used in macro will be ignored, while macro parameters not matching any inputs will be replaced with an empty string

Fields:

-   `template` - a string with a macro template to be interpreted as a command

###### `minecraft:dynamic/custom` Action Type

-   This method will build a `minecraft:custom` event using all input values
-   All input contents will be sent together inside a compound tag, with tag value of each input put under id from `key` field of that input
-   Additional static fields can be added to payload

Fields:

-   `additions` - fields to be added to payload, optional compound tag
-   `id` - namespaced ID

## Resource Pack version 63

-   Added `oversized_in_gui` item model field
-   Introduced new player head special model type

### Item Models

-   Item model definitions now have a boolean field `oversized_in_gui` which is `false` by default
    -   If `true`, the item model will be allowed to be bigger than its item slot
    -   If `false`, the item model will be clipped to the item slot size when being rendered in gui
    -   This ability of items being rendered outside their slots should not be considered officially supported, it was temporarily restored as an exception since many servers are relying on it
    -   At some point in the future we hope to replace it with an officially supported way of achieving similar functionality
-   Introduced new item model `minecraft:player_head` to handle player profile texture loading and rendering
-   Removed support for `minecraft:profile` from `minecraft:head`

##### `minecraft:player_head` special model type

-   Renders a player head
-   Uses profile from the `minecraft:profile` component to load a texture. Renders a default texture until the profile texture is fully loaded
-   No fields

##### `minecraft:head` special model type

-   No longer supports profile from `minecraft:profile` component to load a player texture
-   Renders a default player texture when `kind` is `player` and no texture override is supplied
-   Fields remain unchanged

## Fixed bugs in 1.21.6 Pre-Release 1

-   [MC-94800](https://bugs.mojang.com/browse/MC-94800) URL shown in open URL dialog is not shortened
-   [MC-140819](https://bugs.mojang.com/browse/MC-140819) Lectern model extends past inventory slot
-   [MC-200092](https://bugs.mojang.com/browse/MC-200092) /setworldspawn seems to ignore the 'angle' parameter
-   [MC-272825](https://bugs.mojang.com/browse/MC-272825) Custom filled maps from 23w31a and earlier do not upgrade properly in later versions
-   [MC-280276](https://bugs.mojang.com/browse/MC-280276) Some item models can still clip into the block below when hovering on the ground
-   [MC-296420](https://bugs.mojang.com/browse/MC-296420) '/datapack create' can create directories with illegal names
-   [MC-296431](https://bugs.mojang.com/browse/MC-296431) Clipping item sprites to stay in slot makes it impossible to hide the slot for resource packs
-   [MC-296458](https://bugs.mojang.com/browse/MC-296458) Player heads in the inventory don't show the right skin
-   [MC-297275](https://bugs.mojang.com/browse/MC-297275) Players can desync from their mounts when jumping on a happy ghast
-   [MC-297550](https://bugs.mojang.com/browse/MC-297550) Happy ghasts don’t remain stationary correctly when players dismount them while other players are still controlling them
-   [MC-297807](https://bugs.mojang.com/browse/MC-297807) Clicking "Save and Quit to Title" in the dialog warning menu takes you to the server list even if the world is singleplayer or locally-hosted LAN
-   [MC-297817](https://bugs.mojang.com/browse/MC-297817) Newly placed paintings sometimes appear at a different position
-   [MC-297848](https://bugs.mojang.com/browse/MC-297848) The menu background is not shown for a short amount of time when leaving a world from a dialog
-   [MC-297868](https://bugs.mojang.com/browse/MC-297868) Items in the armor.body and saddle slots are not kept when dying while the game rule keepInventory is set to true
-   [MC-297893](https://bugs.mojang.com/browse/MC-297893) prevent\_equipment\_drop enchantment effect does not work with armor.body and saddle slots
-   [MC-297894](https://bugs.mojang.com/browse/MC-297894) /clear command does not clear armor.body and saddle slots
-   [MC-297897](https://bugs.mojang.com/browse/MC-297897) Players can fall through happy ghasts
-   [MC-297899](https://bugs.mojang.com/browse/MC-297899) FPS drops due to clouds
-   [MC-297906](https://bugs.mojang.com/browse/MC-297906) Running a command with a large output whilst on a dedicated server causes a kick and no logged output
-   [MC-297915](https://bugs.mojang.com/browse/MC-297915) The name plates of entities with an empty custom name are now rendered incorrectly
-   [MC-298071](https://bugs.mojang.com/browse/MC-298071) All naturally spawned zombie villagers are professionless since 25w16a
-   [MC-298101](https://bugs.mojang.com/browse/MC-298101) Sniffers now show the digging animation instead of the walking animation
-   [MC-298116](https://bugs.mojang.com/browse/MC-298116) The warning text in the confirm link screen is no longer visible
-   [MC-298117](https://bugs.mojang.com/browse/MC-298117) All buttons at the bottom of the Realms screen are clickable when no realm is selected
-   [MC-298139](https://bugs.mojang.com/browse/MC-298139) Items bigger than the size of a slot incorrectly bleed over onto other items
-   [MC-298146](https://bugs.mojang.com/browse/MC-298146) GUI items disappear at high screen resolutions

---

# Minecraft 1.21.5 Release Candidate 2

Second time's the charm! We're shipping 1.21.5 Release Candidate 2, fixing some final issues before releasing the Spring To Life drop tomorrow!

## Fixed bugs in 1.21.5 Release Candidate 2

-   [MC-295665](https://bugs.mojang.com/browse/MC-295665) There is no blending in new chunks
-   [MC-295688](https://bugs.mojang.com/browse/MC-295688) Piston movement is not applying block effects to entities

---

# 1.21.5 Release Candidate 1

With Minecraft Live just around the corner, we are getting closer to the release of the first drop of the year. Today we're shipping the first 1.21.5 Release Candidate with a few bug fixes, which means if no new critical issues surface, this is the version we are planning to release as Minecraft: Java Edition 1.21.5.

## Fixed bugs in 1.21.5 Release Candidate 1

-   [MC-295383](https://bugs.mojang.com/browse/MC-295383) "Received missed or reordered chat message from server" string doesn't make logical sense
-   [MC-295412](https://bugs.mojang.com/browse/MC-295412) Lighting of magma block is incorrect
-   [MC-295416](https://bugs.mojang.com/browse/MC-295416) Beacon receives wrong shading from nearby blocks

---

# Minecraft 1.21.5 Pre Release 3

It's Tuesday, and today we're bringing you a third pre-release for Minecraft 1.21.5, with some fixes to recently introduced issues.

## Fixed bugs in 1.21.5 Pre-Release 3

-   [MC-295387](https://bugs.mojang.com/browse/MC-295387) fireball and small\_fireball can no longer have their Owner, HasBeenShot, or LeftOwner fields modified
-   [MC-297384](https://bugs.mojang.com/browse/MC-297384) The second horn in the cold cow texture is unused by the model
-   [MC-299223](https://bugs.mojang.com/browse/MC-299223) F3 debug crosshair lost its outline
-   [MC-299543](https://bugs.mojang.com/browse/MC-299543) Experience orbs follow players in Spectator mode

---

# Minecraft 1.21.5 Pre Release 2

We're shipping some crash fixes in today's pre-release.

## Technical Changes

-   The Data Pack version is now 71 since this was missed in Pre-Release 1

## Fixed bugs in 1.21.5 Pre-Release 2

-   [MC-280482](https://bugs.mojang.com/browse/MC-280482) Main menu is totally broken when using Mesa 25.0
-   [MC-296644](https://bugs.mojang.com/browse/MC-296644) Game crashes while rendering section / java.lang.NullPointerException: Cannot read field "b" because "$$3" is null
-   Additional crash fixes

---

# Minecraft 1.21.5 Pre-Release 1

Today we're shipping the first pre-release of Minecraft 1.21.5. From now on you will mostly see bug fixes and technical tweaks until the start of the next snapshot cycle. As we enter the pre-release phase we will be releasing more frequently than our regular cadence on Wednesdays, so keep an eye out for the next pre-release!

## Changes

-   Added Spawn Eggs textures for programmer art texture pack

## Technical Changes

-   The Resource Pack version is now 55
-   Arguments in commands that accept inline values like loot tables, predicates, modifiers, data components, formatted text (`/loot`, `/give`, `/tellraw`, `/execute if predicate`, data components in `/execute if items`, etc.) have been reverted to accept numbers in place of booleans

> **Developer's Note**: The original change happened because we moved away from using NBT as an intermediate format for parsing those values, which meant that booleans were separated from numbers (similar to handling in JSON). We've decided to temporarily revert that, since some functionality can't be achieved yet without using storage and macro functions. However, once that missing functionality is added (and data can be transferred without being converted to and from text), legacy boolean handling will be removed once again.

### Network Protocol

-   The clientbound `player_chat` packet now contains an index increasing for every message sent to the client
    -   The index starts at 0 when logging in (or is reset by configuration phase and the `login` packet)
    -   For every message, the server should increment this value by 1
    -   If this value updates in an unexpected way, the client will disconnect
    -   As the protocol requires that every chat packet reaches the client in produced order, the goal is to enable faster detection of missed/reordered chat messages for custom server developers
-   The serverbound `chat` and `chat_command_signed` packets now contain a checksum byte along with the 'last seen' update
    -   This is a simple hash of the 'last seen' signatures which should be reconstructed by the server, allowing quicker detection of desynchronized state
    -   This can be passed as `0` to disable the check, for compatibility with protocol translation

## Resource Pack Version 55

-   Tweaked Leaf Litter block models

## Fixed bugs in 1.21.5 Pre-Release 1

-   [MC-170134](https://bugs.mojang.com/browse/MC-170134) Minecraft uses several times more VRAM than needed after exploring terrain for a while
-   [MC-279350](https://bugs.mojang.com/browse/MC-279350) Leaf litter multipart model system is unoptimized, causing render lag
-   [MC-280141](https://bugs.mojang.com/browse/MC-280141) Baby farm animals from spawn eggs with a variant differing from the parent flash the wrong variant initially
-   [MC-280241](https://bugs.mojang.com/browse/MC-280241) Cold Cows have improperly mirrored and incorrectly aligned ear textures
-   [MC-280249](https://bugs.mojang.com/browse/MC-280249) Spawn eggs don't use their old textures with the Programmer Art resource pack enabled
-   [MC-280278](https://bugs.mojang.com/browse/MC-280278) Sheep wool uses 1.14 texture with Programmer Art resource pack enabled
-   [MC-280326](https://bugs.mojang.com/browse/MC-280326) When teleporting across dimensions an error is often thrown
-   [MC-280361](https://bugs.mojang.com/browse/MC-280361) When a fallen tree replaces the bottom half of tall vegetation, the top part of the vegetation still generates
-   [MC-280474](https://bugs.mojang.com/browse/MC-280474) TNT minecarts explode regardless of tntExplodes gamerule
-   [MC-280477](https://bugs.mojang.com/browse/MC-280477) TNT still explodes when summoned or dispensed while tntExplodes gamerule is false
-   [MC-280479](https://bugs.mojang.com/browse/MC-280479) TNT is completely deleted when attempting to ignite it using redstone pulses when the “tntExplodes” gamerule is disabled
-   [MC-280480](https://bugs.mojang.com/browse/MC-280480) No flint and steel clicking sound when attempting to ignite TNT with a flint and steel when the "tntExplodes" gamerule is disabled
-   [MC-280493](https://bugs.mojang.com/browse/MC-280493) If the tntExplodes game rule is changed to false while primed TNT already exists in the world, the primed TNT explodes as normal
-   [MC-280501](https://bugs.mojang.com/browse/MC-280501) The "Fire extinguishes" sound plays every game tick while on fire in rain
-   [MC-280520](https://bugs.mojang.com/browse/MC-280520) ItemDropChance on an item frame is not serialized when there is no item anymore, leading to inconsistencies

---

# Minecraft 1.21.4 Release Candidate 3

What's better than shipping on a Friday? How about shipping twice on a Friday?!

Here's Release Candidate 3 for Minecraft 1.21.4, fixing some critical issues, including several crashes.

## Fixed bugs in 1.21.4 Release Candidate 3

-   [MC-276962](https://bugs.mojang.com/browse/MC-276962) JVM crash occurs when minimizing maximized window
-   [MC-277889](https://bugs.mojang.com/browse/MC-277889) Villagers' iron golem detection range is increased for villagers upgraded from 1.21.1 or earlier

---

# 1.21.4 Release Candidate 2

Today we are releasing 1.21.4 Release Candidate 2 to activate Blending around the Pale Garden Biome.

If no further critical issues surface, this is the version we are planning to ship as Minecraft: Java Edition 1.21.4.

Happy Mining!

## Fixed bugs in 1.21.4 Release Candidate 2

-   [MC-278573](https://bugs.mojang.com/browse/MC-278573) Updating can cause straight biome borders with pale garden

---

# Minecraft 1.21.4 Release Candidate 1

After yesterday's [announcement](https://www.minecraft.net/en-us/article/the-garden-awakens-drop-date) that the The Garden Awakens drop comes out on December 3rd, today we're releasing the first release candidate!

If no new critical issues surface, this is the version we are planning to ship as Minecraft: Java Edition 1.21.4.

Happy Mining!

## Changes

-   Added language support for Popoloca

## Fixed bugs in 1.21.4 Release Candidate 1

-   [MC-278494](https://bugs.mojang.com/browse/MC-278494) Resin Bricks appears twice in "mineable/pickaxe" block tag
-   [MC-278548](https://bugs.mojang.com/browse/MC-278548) Spyglass is held incorrectly when used from the off hand

---

# 1.21.4 Pre-Release 3

We are now releasing a third Pre-Release for Minecraft 1.21.4 to fix a crash and a few bugs. Watch your step before jumping!

## Fixed bugs in 1.21.4 Pre-Release 3

-   [MC-277977](https://bugs.mojang.com/browse/MC-277977) Teleporting large distances whilst gliding prevents the world from loading and player model glitchiness
-   [MC-278444](https://bugs.mojang.com/browse/MC-278444) Waterlogged resin clumps do not drop when their supporting block is broken/moved
-   [MC-278518](https://bugs.mojang.com/browse/MC-278518) Player takes damage from jumping down from one block

---

# 1.21.4 Pre-Release 2

We are starting off this week with the second 1.21.4 Pre-Release, including even more bug fixes!

Happy mining!

## Technical Changes

-   The Data Pack version is now 61

## Data Pack Version 61

### Furnace, Smoker and Blast Furnace Data

-   Renamed `CookTime` to `cooking_time_spent`
-   Renamed `CookTimeTotal` to `cooking_total_time`
-   Renamed `BurnTime` to `lit_time_remaining`
-   Added field `lit_total_time` representing the total time the furnace should be lit

## Fixed bugs in 1.21.4 Pre-Release 2

-   [MC-10025](https://bugs.mojang.com/browse/MC-10025) Burn time indicator of a furnace not working correctly after reloading the world
-   [MC-197857](https://bugs.mojang.com/browse/MC-197857) Villagers trying to claim claimed beds
-   [MC-275952](https://bugs.mojang.com/browse/MC-275952) Riding a minecart above the water with Frost Walker boots on will also give the Frost Walker effect
-   [MC-277169](https://bugs.mojang.com/browse/MC-277169) Creaking moves while a player is looking at it while moving a certain way and looking through pale moss
-   [MC-278256](https://bugs.mojang.com/browse/MC-278256) Horses jumping multiple times in a row take fall damage
-   [MC-278282](https://bugs.mojang.com/browse/MC-278282) "Tried to load a DUMMY block entity"/"Tried to load a block entity" errors at specific coordinates
-   [MC-278370](https://bugs.mojang.com/browse/MC-278370) Winter drop feature flag is not added to the removed features list
-   [MC-278430](https://bugs.mojang.com/browse/MC-278430) Trim materials item tag is not deterministic in data generation
-   [MC-278497](https://bugs.mojang.com/browse/MC-278497) Using items while sneaking slows down the player way less than in previous versions

---

# Minecraft 1.21.4 Pre-Release 1

The first pre-release of Minecraft 1.21.4 is now available. Today's update and for the remainder of the 1.21.4 cycle, you will mostly see bug fixes and tweaks. In addition to that, pre-releases don't follow the regular snapshot cadence of releasing only on Wednesdays, so keep an eye out for the next pre-release.

As always, a big thank you to the community for your feedback, bugs reported, and awesome ideas throughout the snapshot series. Let the pre-releases commence!

## Technical Changes

-   The Resource Pack version is now 46
-   Similarly to block items, Spawn Eggs for entities that could execute operator-only commands now have a warning in tooltip

## Resource Pack Version 46

-   Added a way of suppressing first-person hand animation on item change for specific models
-   Unifont has been updated to 16.0.01

### Item models

-   A new field has been added to the client-side item info format (i.e. files in `/assets/*/items/*.json`)
    -   `hand_animation_on_swap` - boolean field describing if down-and-up animation should be played in first-person view when item stack is changed (either type, count or components), default: `true`
        -   only value from new item is taken into account
        -   does not control "pop" animation in GUI when item is picked or changes count

#### `minecraft:model` item model type

##### Added `minecraft:team` tint source type

-   Returns team color of context entity, if any
-   Fields:
    -   `default` - RGB value to return when there is no context entity, entity is not in a team or team has no color

##### Changed `minecraft:head` special model type

-   Added field `animation` - float controlling head animation (like Piglin ears or Ender Dragon jaw), default: `0.0`

##### Added `minecraft:view_entity` boolean property

-   When not spectating, returns `true` if context entity is the local player entity, i.e. one controlled by client
-   When spectating, returns `true` if context entity is the spectated entity
-   If context entity is not present, will return `false`
-   No fields

##### Renamed property `minecraft:holder_type` to `minecraft:context_entity_type`

**Developer's Note**: _Context entities were initially used only for compasses and clocks, which means that type is available only in rendering contexts where those items would show correct reading (see MC-186797 and related bugs). The name change has been made to better reflect that._

##### Added `minecraft:context_dimension` property

-   Returns the ID of the dimension in context, if any
-   No fields
-   Values: namespaced dimension ID (like `minecraft:overworld`)

##### Changed `minecraft:time` numeric property

-   Removed field `natural_only`
-   Added field `source` - time source, possible values:
    -   `daytime` - time of day
    -   `moon_phase` - moon phase
    -   `random` - random value

##### Changed `minecraft:compass` numeric property

-   Added value `none` to field `target` which always returns an invalid target

#### Added `minecraft:empty` item model type

-   Does not render anything
-   No fields

## Fixed bugs in 1.21.4 Pre-Release 1

-   [MC-128225](https://bugs.mojang.com/browse/MC-128225) '/data remove' can't remove the NBT "CustomName"
-   [MC-138100](https://bugs.mojang.com/browse/MC-138100) /data remove doesn't work for the Jukebox's RecordItem tag
-   [MC-179815](https://bugs.mojang.com/browse/MC-179815) Data command doesn't remove leash from a mob
-   [MC-207605](https://bugs.mojang.com/browse/MC-207605) /data remove entity \[tamed wolf\] Owner does not remove ownership of the wolf
-   [MC-265788](https://bugs.mojang.com/browse/MC-265788) The "Start free Snapshot Realm" element can be selected or remain selected causing its tooltip to erroneously be visible when other interfaces are open
-   [MC-278134](https://bugs.mojang.com/browse/MC-278134) The TAB key cannot be used to select messages to report after clicking the "X message(s) hidden" element
-   [MC-278193](https://bugs.mojang.com/browse/MC-278193) Baby piglins can't decide between crossbows and golden items
-   [MC-278257](https://bugs.mojang.com/browse/MC-278257) Oxygen bar animation can be interrupted by applying water breathing
-   [MC-278290](https://bugs.mojang.com/browse/MC-278290) Using items while swimming or walking underwater doesn't slow the player down
-   [MC-278300](https://bugs.mojang.com/browse/MC-278300) Creakings struck by lightning show visual fire
-   [MC-278302](https://bugs.mojang.com/browse/MC-278302) Bundle always takes out first item and ignores selected item
-   [MC-278311](https://bugs.mojang.com/browse/MC-278311) Respawned creakings from creaking hearts don't persist when the world is reloaded
-   [MC-278312](https://bugs.mojang.com/browse/MC-278312) Creakings spawned from a creaking heart can be name-tagged once again
-   [MC-278387](https://bugs.mojang.com/browse/MC-278387) Creaking respawns when going to the nether and back
-   [MC-278390](https://bugs.mojang.com/browse/MC-278390) Opening shulkers no longer trigger tripwire or pressure plates

---

# Minecraft 1.21.2 Release Candidate 2

We were so worried that you had forgotten all about us over the weekend, so we're kicking this week off with a surprise second Release Candidate for 1.21.2! Let's hope this is (fingers crossed) the last one before the full release of Bundles of Bravery.

If no other critical issues are found, this will be the version for 1.21.2 that can be expected to be released later this week.

Happy mining!

## Fixed bugs in 1.21.2 Release Candidate 2

-   [MC-277625](https://bugs.mojang.com/browse/MC-277625) Player's OnGround tag doesn't update when riding a vehicle
-   [MC-277708](https://bugs.mojang.com/browse/MC-277708) The sound of breaking leaves on a riding mob is not played In survival
-   [MC-277718](https://bugs.mojang.com/browse/MC-277718) Minecart behaviour altered even with experiments disabled
-   [MC-277732](https://bugs.mojang.com/browse/MC-277732) Block break block updates can stop working in a chunk

---

# Minecraft 1.21.2 Release Candidate 1

We missed you so much since the previous pre-release so today we're releasing Release Candidate 1. If no critical issues surface, this is the version we are planning to ship as Minecraft: Java Edition 1.21.2, the Bundles of Bravery drop.

## Fixed bugs in 1.21.2-rc1

-   [MC-273812](https://bugs.mojang.com/browse/MC-273812) Intersection chests in trial chambers not generating correctly
-   [MC-277636](https://bugs.mojang.com/browse/MC-277636) Projectiles visually fall when relogging
-   [MC-277638](https://bugs.mojang.com/browse/MC-277638) Client sometimes rejects a set passengers packet

---

# Minecraft 1.21.2 Pre-Release 5

Did we have a Pre-Release yesterday? We don't remember. But here is one anyway, fixing more bugs.

Happy mining!

## Fixed bugs in 1.21.2 Pre-Release 5

-   [MC-277630](https://bugs.mojang.com/browse/MC-277630) Recipe book is not updated when one of the available recipes is used
-   [MC-277634](https://bugs.mojang.com/browse/MC-277634) Arrows shot at walls when facing south sometimes end up vertical instead of horizontal

---

# 1.21.2 Pre-Release 4

Hello! Another day, another Pre-Release. We're releasing the fourth Pre-Release of 1.21.2, further stabilizing this version.

Happy mining!

## Fixed bugs in 1.21.2 Pre-Release 4

-   [MC-277496](https://bugs.mojang.com/browse/MC-277496) Text on maps that are in item frames render through blocks
-   [MC-277502](https://bugs.mojang.com/browse/MC-277502) Compasses do not point in correct direction when in left hand
-   [MC-277505](https://bugs.mojang.com/browse/MC-277505) Clocks are mirrored and spin in the wrong direction when in left hand
-   [MC-277513](https://bugs.mojang.com/browse/MC-277513) Item cooldowns of item stacks greater than 1 render in front of item tooltips
-   [MC-277517](https://bugs.mojang.com/browse/MC-277517) Arrows' landing points are lower than in previous versions
-   [MC-277518](https://bugs.mojang.com/browse/MC-277518) Crafting an item that has not yet been crafted removes all tabs in the recipe book other than the topmost one
-   [MC-277548](https://bugs.mojang.com/browse/MC-277548) Invisible block entities and items disappearing
-   [MC-277552](https://bugs.mojang.com/browse/MC-277552) Wandering traders look smaller than in previous versions
-   [MC-277559](https://bugs.mojang.com/browse/MC-277559) Sliding down honey blocks is still different from previous versions

---

# 1.21.2 Pre-Release 3

We are rounding off this week with the third 1.21.2 Pre-Release, including even more bug fixes!

Happy mining and have a nice weekend!

## Changes

### High Contrast Resource Pack

Added the following high contrast textures:

-   Frame and background textures for tooltips
-   Slot background and highlight textures for the Bundle tooltip

## Technical Changes

-   Resource Pack version is now 42

## Resource Pack Version 42

-   Added `container/bundle/slot_background` texture for bundle slot background

## Fixed bugs in 1.21.2 Pre-Release 3

-   [MC-277316](https://bugs.mojang.com/browse/MC-277316) Passengers dismount minecarts/boats when converting
-   [MC-277453](https://bugs.mojang.com/browse/MC-277453) Projectiles visually fall when shot in a wall with high tick rate
-   [MC-277488](https://bugs.mojang.com/browse/MC-277488) Mobs in their death animations produce the fire extinguishing sound every tick while being in lava while it's raining
-   [MC-277491](https://bugs.mojang.com/browse/MC-277491) Mobs in their death animations that are inside both water and lava produce the fire extinguishing sound every tick

---

# Minecraft 1.21.2 Pre-Release 2

Today we are shipping the second Pre-Release for 1.21.2 with some more bug fixes and Pale Hanging Moss changes. During this stabilization phase before the full release of Minecraft Java Edition 1.21.2 we are focusing on fixing bugs and don't follow the regular snapshot cadence of releasing on Wednesdays, so keep an eye out for the next pre-release.

## Experimental Features

### Winter Drop

#### Pale Moss

-   Pale Hanging Moss now only drops when cut with Shears or destroyed using tool with Silk Touch
-   Pale Moss Carpet is now more efficient to destroy with Sword
-   Pale Moss Carpet now plays the correct step sound when walking over it

## Fixed bugs in 1.21.2 Pre-Release 2

-   [MC-54532](https://bugs.mojang.com/browse/MC-54532) Sneaking while falling on Slime Blocks inflicts fall damage
-   [MC-160810](https://bugs.mojang.com/browse/MC-160810) Some items are held sideways in left hand
-   [MC-266480](https://bugs.mojang.com/browse/MC-266480) Breeze can jump on top of honey blocks
-   [MC-266494](https://bugs.mojang.com/browse/MC-266494) Jump Boost does not affect the breeze's jump
-   [MC-269851](https://bugs.mojang.com/browse/MC-269851) Breeze idle animations are different than Bedrock Edition
-   [MC-275834](https://bugs.mojang.com/browse/MC-275834) Jumping when falling onto a slime block no longer cancels the bounce effect
-   [MC-275941](https://bugs.mojang.com/browse/MC-275941) Consumable item components with inlined sound event definitions cause undefined behavior
-   [MC-276072](https://bugs.mojang.com/browse/MC-276072) Tridents enchanted with Loyalty fly around drowned upon returning to them
-   [MC-276605](https://bugs.mojang.com/browse/MC-276605) Throwing an ender pearl through a portal or gateway often results in the player being placed slightly too low
-   [MC-276624](https://bugs.mojang.com/browse/MC-276624) Nether portal can send you back when your ender pearl land in the portal
-   [MC-276716](https://bugs.mojang.com/browse/MC-276716) Thrown ender pearl teleport position is inconsistent
-   [MC-276813](https://bugs.mojang.com/browse/MC-276813) Minecraft no longer prints an error to the game log when trying to render a character without a defined glyph in the loaded fonts
-   [MC-276825](https://bugs.mojang.com/browse/MC-276825) Transmute recipes allow air as output
-   [MC-276906](https://bugs.mojang.com/browse/MC-276906) Specifying a block tag in an item's can\_place\_on or can\_break component in a recipe or loot table causes validation error
-   [MC-276954](https://bugs.mojang.com/browse/MC-276954) Ender pearl interaction with bubble columns is still broken
-   [MC-276963](https://bugs.mojang.com/browse/MC-276963) Mobs standing inside both lava and water produce the fire extinguishing sound every tick
-   [MC-276978](https://bugs.mojang.com/browse/MC-276978) Mobs produce the fire extinguishing sound every tick while standing in lava in rain
-   [MC-277000](https://bugs.mojang.com/browse/MC-277000) Entities can be damaged by fire without being ignited
-   [MC-277073](https://bugs.mojang.com/browse/MC-277073) Pale moss and pale moss carpets cannot be broken faster using hoes
-   [MC-277091](https://bugs.mojang.com/browse/MC-277091) Pale oak boats are in the chest boats tag in place of pale oak chest boats
-   [MC-277096](https://bugs.mojang.com/browse/MC-277096) When selecting a biome in the single biome world type, there is no translation for the pale garden
-   [MC-277135](https://bugs.mojang.com/browse/MC-277135) Entity collision order is now locational
-   [MC-277165](https://bugs.mojang.com/browse/MC-277165) Particles produced upon creakings spawning are spawned one block too far to the east
-   [MC-277175](https://bugs.mojang.com/browse/MC-277175) #overworld\_natural\_logs block tag contains #pale\_oak\_logs instead of pale\_oak\_log
-   [MC-277212](https://bugs.mojang.com/browse/MC-277212) The "options.accessibility.high\_contrast\_block\_outline.tooltip" string is missing an article before the word "targeted"
-   [MC-277309](https://bugs.mojang.com/browse/MC-277309) Missing translations for Pale Oak Wall (Hanging) Signs
-   [MC-277376](https://bugs.mojang.com/browse/MC-277376) Consumable block animation inherits shield behaviors
-   [MC-277389](https://bugs.mojang.com/browse/MC-277389) Armor stand in the smithing table interface no longer render armor when appropriate
-   [MC-277392](https://bugs.mojang.com/browse/MC-277392) The realms description text and the game mode text within the realms menu can intersect one another
-   [MC-277398](https://bugs.mojang.com/browse/MC-277398) The horse armor equipping sound is unusually loud
-   [MC-277402](https://bugs.mojang.com/browse/MC-277402) Horse armor doesn't render properly in horse inventory again
-   [MC-277404](https://bugs.mojang.com/browse/MC-277404) Entities' limbs are incorrectly positioned for a brief second when entities are damaged while riding entities
-   [MC-277405](https://bugs.mojang.com/browse/MC-277405) Mounts no longer receive damage when riding them through sweet berry bushes
-   [MC-277409](https://bugs.mojang.com/browse/MC-277409) Text on glowing signs no longer looks different to text on normal signs
-   [MC-277417](https://bugs.mojang.com/browse/MC-277417) /tp no longer works when run from a command block without context from "execute as"
-   [MC-277424](https://bugs.mojang.com/browse/MC-277424) The pale garden can prevent trial chambers from spawning
-   [MC-277438](https://bugs.mojang.com/browse/MC-277438) Wolf Armor no longer shows cracks when damaged
-   [MC-277452](https://bugs.mojang.com/browse/MC-277452) Player idle timeout does not kick players

---

# Minecraft 1.21.2 Pre-Release 1

## Experimental Features

### Winter Drop

#### Creaking mob

-   Creaking will not activate or freeze around players in Creative mode
-   Creaking summoned from the Creaking Heart cannot be named with a Nametag

#### Creaking Heart

-   Comparators attached to the Creaking Heart block will output a signal strength dependent on the distance to the connected Creaking

## Changes

-   Tweaked air bubbles UI
    -   Added an empty state for air bubbles along with a wobble when the player is drowning
    -   Added a popping sound when the bubbles pop in the UI

## Technical Changes

-   The Data Pack version is now 57
-   Resource Pack version is now 41

## Data Pack Version 57

-   Added `disablePlayerMovementCheck` game rule (default: false) that disables player movement speed restriction
    -   This behaves the same as the `disableElytraMovementCheck` rule, but applies irrespective of flying with Elytra

### Item Components

#### `minecraft:equippable`

-   Added field `camera_overlay` (optional): namespaced ID of the overlay texture to use when equipped
    -   If not specified, no overlay is used
    -   The ID will address a texture under the `textures/` folder and automatically assumed to be `.png`
        -   For instance, `misc/pumpkinblur` addresses `textures/misc/pumpkinblur.png`

### Particles

-   Format of color fields in particle options is now more standardized:
    -   RGB fields can always be encoded either as a vector of floats (order: `[R,G,B]`) or as a single packed integer (order: `RGB`)
    -   ARGB fields can always be encoded either as a vector of floats (order: `[R,G,B,A]` or as a single packed integer (order: `ARGB`)
    -   Changed fields:
        -   `minecraft:trail.color` (previously accepted only integer)
        -   `minecraft:dust.color` (previously accepted only vector of floats)
        -   `minecraft:dust_color_transition.from_color` (previously accepted only vector of floats)
        -   `minecraft:dust_color_transition.to_color` (previously accepted only vector of floats)

## Resource Pack Version 41

-   Added texture and sound for tweaked air bubble UI
    -   New texture added for empty air bubble
    -   Sound added for when air bubble pops

## Fixed bugs in 1.21.2 Pre-Release 1

-   [MC-276360](https://bugs.mojang.com/browse/MC-276360) Repeating command block data is often lost when moving it around in inventory
-   [MC-276604](https://bugs.mojang.com/browse/MC-276604) Horse Armor no longer has enchantment glint
-   [MC-276815](https://bugs.mojang.com/browse/MC-276815) Dyed bundles are missing the "filled" predicate
-   [MC-276965](https://bugs.mojang.com/browse/MC-276965) Post shader ColorModulate uniform not reset properly after spectating spiders
-   [MC-276979](https://bugs.mojang.com/browse/MC-276979) Lock field on containers and minecraft:lock data component do not get datafixed correctly when a \\ is present
-   [MC-277017](https://bugs.mojang.com/browse/MC-277017) Flaming arrows no longer extinguish when water or powder snow is placed in its location
-   [MC-277019](https://bugs.mojang.com/browse/MC-277019) Execute command teleporting across dimensions does not use correct relative coordinates
-   [MC-277027](https://bugs.mojang.com/browse/MC-277027) Shapeless recipes accept anything if one of their ingredients is an empty tag
-   [MC-277028](https://bugs.mojang.com/browse/MC-277028) Bundles do not empty smoothly
-   [MC-277067](https://bugs.mojang.com/browse/MC-277067) The high contrast and programmer art resource packs are displayed as being incompatible
-   [MC-277078](https://bugs.mojang.com/browse/MC-277078) Trim advancements use recipe registry key
-   [MC-277108](https://bugs.mojang.com/browse/MC-277108) The "below\_name" scoreboard display mode renders with dark parts when custom colors are set
-   [MC-277111](https://bugs.mojang.com/browse/MC-277111) Wandering traders can sell pale oak saplings even when they're disabled
-   [MC-277118](https://bugs.mojang.com/browse/MC-277118) Creakings can spawn with doMobSpawning set to false
-   [MC-277131](https://bugs.mojang.com/browse/MC-277131) Pale garden missing from #minecraft:is\_overworld biome tag
-   [MC-277141](https://bugs.mojang.com/browse/MC-277141) /rotate command is not restricted to permission level 2
-   [MC-277143](https://bugs.mojang.com/browse/MC-277143) Horse armor has damage-related components
-   [MC-277144](https://bugs.mojang.com/browse/MC-277144) Furnaces, blast furnaces, and smokers delete all of their contents inside them once reloaded after smelting items
-   [MC-277148](https://bugs.mojang.com/browse/MC-277148) Pack filters removing recipes that the player has unlocked causes data pack loading to fail
-   [MC-277160](https://bugs.mojang.com/browse/MC-277160) Pale hanging moss is often immediately destroyed when placed using the "/fill" command
-   [MC-277163](https://bugs.mojang.com/browse/MC-277163) Map color for pale oak saplings is incorrect
-   [MC-277176](https://bugs.mojang.com/browse/MC-277176) Team affixes have dark lines between them and the username in player name tags
-   [MC-277215](https://bugs.mojang.com/browse/MC-277215) The game crashes when attempting to accept or reject already accepted or rejected realm invitations
-   [MC-277301](https://bugs.mojang.com/browse/MC-277301) The enchantment glint isn't visible on thrown tridents that are enchanted or held in the hand in third person when using Fabulous graphics
-   [MC-277302](https://bugs.mojang.com/browse/MC-277302) The enchantment glint isn't visible on shields that are enchanted in third person when using Fabulous graphics

---

# Minecraft 1.21.10 Release Candidate 1

Today we are shipping Release Candidate 1 for 1.21.10, a hotfix release fixing a couple of issues that have bubbled up to the surface following the release of The Copper Age drop.

Happy mining!

## Fixed bugs in 1.21.10 Release Candidate 1

-   [MC-211096](https://bugs.mojang.com/browse/MC-211096) Entities in cobwebs clip though pistons
-   [MC-278182](https://bugs.mojang.com/browse/MC-278182) Items glitch inside the piston head when pushed through powder snow or cobwebs
-   [MC-301916](https://bugs.mojang.com/browse/MC-301916) The behavior of wind charges when colliding with certain blocks is different
-   [MC-302321](https://bugs.mojang.com/browse/MC-302321) Chunks don't load while the player is being teleported
-   [MC-302383](https://bugs.mojang.com/browse/MC-302383) Rooms with carpet on the floor cannot have maps in item frames placed on walls touching the floor
-   [MC-302405](https://bugs.mojang.com/browse/MC-302405) Repeating(or chain) command block with any form of /tp \[player\] doesn't constantly tp player to one spot
-   Fixed an issue that caused entities on bubble columns to fly high up into the air

---

# Minecraft 1.21.1 Release Candidate 1

Before we get to new snapshots, today we are delivering Release Candidate 1 for Minecraft 1.21.1. This is a hotfix version fixing critical exploits. If no other critical issues are found, 1.21.1 can be expected to be released later this week.

## Changes

-   Fixed critical exploits
-   Added language support for Tzotzil and Belarusian (Latin)

---

# Minecraft 1.21 Release Candidate 1

Here is the first Release Candidate for 1.21, addressing some critical issues. Apart from that we decided to revert the changes made in Pre-Release 4 to armor enchantments based on your feedback.

Happy mining!

## Changes

-   The changes to Burn Time reduction from Fire Protection and Knockback reduction from Blast Protection from pre-release 4 have been reverted
    -   We have heard your feedback, and we expect to rebalance these two enchantments in the future to find a better place for them
    -   Values are now the same as in 1.20.6
    -   These effects still stack from wearing multiple pieces (changed from 1.20.6)

## Fixed bugs in 1.21 Release Candidate 1

-   [MC-272888](https://bugs.mojang.com/browse/MC-272888) Zooming with riptide still applies mace wind burst if held in main hand
-   [MC-273007](https://bugs.mojang.com/browse/MC-273007) Projectiles have incorrect motion when shot from a vehicle which was entered with player velocity
-   [MC-273158](https://bugs.mojang.com/browse/MC-273158) Animals stay floating after getting on a boat

---

# Minecraft 1.21 Pre-Release 4

Frog day on a Friday? What could go wrong? We're back with 1.21 Pre-Release 4 today, with a couple more bug fixes, and some tweaks to the Blast Resistance and Fire Protection enchantments.

## Changes

-   The "Burning Time" reduction effect of Fire Protection and "Knockback Resistance" effect of Blast Protection now stack from wearing several pieces
    -   To get the maximum benefit of these effects, you now need to wear a full set of enchanted armor
    -   Wearing a fully enchanted armor set still grants the same effect as in 1.20.6
    -   Wearing only a single piece of enchanted armor now has reduced effect compared to before
-   After a Primed TNT has gone through a Nether Portal, it will no longer be able to destroy Nether Portal blocks

## Fixed bugs in 1.21 Pre-Release 4

-   [MC-270540](https://bugs.mojang.com/browse/MC-270540) The prevention of fall damage from wind charges is not retained upon reloading the world
-   [MC-271971](https://bugs.mojang.com/browse/MC-271971) Wind Charges sometimes don't prevent fall damage
-   [MC-272933](https://bugs.mojang.com/browse/MC-272933) Fire protection burning time reduction now stacks for every piece of armor
-   [MC-272935](https://bugs.mojang.com/browse/MC-272935) Blast protection explosion knockback resistance now stacks for every piece of armor
-   [MC-272947](https://bugs.mojang.com/browse/MC-272947) Boat clutching after using a wind charge results in the player taking fall damage
-   [MC-272948](https://bugs.mojang.com/browse/MC-272948) Wind Burst damages the player twice on one use, even when using Wind Charges
-   [MC-272981](https://bugs.mojang.com/browse/MC-272981) Using a wind charge to stop the fall damage after using the wind burst enchantment doesn't correctly cancel the damage
-   [MC-272982](https://bugs.mojang.com/browse/MC-272982) Mace can have sharpness

---

# Minecraft 1.21 Pre-Release 3

The third pre-release for 1.21 is now available and it comes with even more bugfixes!

Additionally, we introduced some intentional but undocumented changes to the Wind Burst Enchantment in Pre-Release 1 last week. To remedy this, we're including those changes in this changelog instead.

Happy mining!

## Changes

### Wind Burst

-   Following changes were introduced in Pre-Release 1; The Wind Burst enchantment now bounces the player 7 blocks up per enchantment level
    -   With great power comes great responsibility - and risk! At level 3, the enchantment will bounce the player 21 blocks up which _doing some quick maths_ will hurt quite a bit when hitting the ground again
    -   In other words, make sure you have a target locked in (or other means of mitigating the fall damage) before making contact with the ground again

## Technical Changes

-   Data Pack version is now 48

## Data Pack Version 48

-   `replace_disc` entity effect type is renamed to `replace_disk`

## Fixed bugs in 1.21 Pre-Release 3

-   [MC-252817](https://bugs.mojang.com/browse/MC-252817) Placing a map into an item frame and removing it does not remove the green player marker
-   [MC-267988](https://bugs.mojang.com/browse/MC-267988) Tamed entities ignore their "LookAtPlayerGoal" distance and look in the direction of their owners from any distance when being stood up
-   [MC-272194](https://bugs.mojang.com/browse/MC-272194) Empty Attribute Modifiers lost during upgrade
-   [MC-272565](https://bugs.mojang.com/browse/MC-272565) Hanging leashed boats gain excessive upward momentum
-   [MC-272577](https://bugs.mojang.com/browse/MC-272577) Summoning any entity with rotation causes it to be rotated incorrectly
-   [MC-272582](https://bugs.mojang.com/browse/MC-272582) Mip-mapping not properly applied to moss carpet
-   [MC-272661](https://bugs.mojang.com/browse/MC-272661) Entities have incorrect rotations after loading or reloading a world
-   [MC-272670](https://bugs.mojang.com/browse/MC-272670) Crash while saving entity NBT - Cannot encode empty ItemStack
-   [MC-272772](https://bugs.mojang.com/browse/MC-272772) Leashed Boats' leashes disappear upon rejoining world
-   [MC-272789](https://bugs.mojang.com/browse/MC-272789) Leashing a boat to a fence which already has a lead attached to it removes the existing lead rather than attaching the new one
-   [MC-272798](https://bugs.mojang.com/browse/MC-272798) Teleporting a leashed boat (with chest) or raft (with chest) to another dimension makes a ghost lead
-   [MC-272809](https://bugs.mojang.com/browse/MC-272809) Placed boats/rafts no longer face the same direction as the player
-   [MC-272814](https://bugs.mojang.com/browse/MC-272814) Entering an end gateway does not consistently grant the Remote Getaway advancement
-   [MC-272827](https://bugs.mojang.com/browse/MC-272827) Unleashing boats leashed to fences via Use Item/Place Block drops the lead in Creative mode
-   [MC-272843](https://bugs.mojang.com/browse/MC-272843) Stepping up blocks while falling on the side of them can sometimes allow players to climb to normally unreachable heights
-   [MC-272854](https://bugs.mojang.com/browse/MC-272854) Crash when entity is leashed by non-LivingEntity
-   [MC-272870](https://bugs.mojang.com/browse/MC-272870) /execute on leasher does not work for leashed boats
-   [MC-272879](https://bugs.mojang.com/browse/MC-272879) Entering an End portal makes you face the entering direction rather than always facing west
-   [MC-272886](https://bugs.mojang.com/browse/MC-272886) Maces incorrectly cause damage to the player
-   [MC-272901](https://bugs.mojang.com/browse/MC-272901) Boats & Rafts with Chests cannot be leashed if they have a passenger

---

# Minecraft 1.21 Pre-Release 2

We're rounding out the week with the second Pre-Release of 1.21, with a lot of bug fixes. In case you did not catch the news, the full release of 1.21 is planned for the 13th of June!

Happy mining!

## Changes

-   End Crystals are now immune to fire damage
-   Added an attestation checkbox when submitting a player report
-   Heavy Core, Trident and Mace are now considered of Epic rarity, giving their hover text a purple color

## Technical Changes

-   Data Pack version is now 47

## Data Pack Version 47

-   Added new placement modifier type `fixed_placement` to place features in a set of fixed positions
-   Added new feature type `end_platform` for the obsidian platform in the end

## Fixed bugs in 1.21 Pre-Release 2

-   [MC-223165](https://bugs.mojang.com/browse/MC-223165) The Snout Banner Pattern is treated as common in the game.
-   [MC-269359](https://bugs.mojang.com/browse/MC-269359) "Field Masoned", "Skull Charge", "Flow", and "Guster" banner patterns are not mirrored on the backside
-   [MC-269389](https://bugs.mojang.com/browse/MC-269389) Flow banner pattern is treated as common loot
-   [MC-269390](https://bugs.mojang.com/browse/MC-269390) Guster banner pattern is treated as common loot
-   [MC-270033](https://bugs.mojang.com/browse/MC-270033) Infested or Oozing effect cloud shrinks when silverfish or slime enters it
-   [MC-271199](https://bugs.mojang.com/browse/MC-271199) Advancement 'Local Brewery' not granted on shift-clicking
-   [MC-271754](https://bugs.mojang.com/browse/MC-271754) Copper doors can be used as furnace fuel
-   [MC-271887](https://bugs.mojang.com/browse/MC-271887) Your FOV doesn't change back to normal after jumping off from soul sand/soul soil while wearing soul speed boots
-   [MC-271892](https://bugs.mojang.com/browse/MC-271892) Your FOV doesn't immediately change when jumping onto soul sand/soul soil while having the slow falling effect and wearing soul speed boots
-   [MC-272224](https://bugs.mojang.com/browse/MC-272224) 'in\_bounding\_box' vertical position for 'spawn\_particles' effect is anchored incorrectly
-   [MC-272241](https://bugs.mojang.com/browse/MC-272241) Error when traveling through nether portal outside world border
-   [MC-272333](https://bugs.mojang.com/browse/MC-272333) The gamerule spawnRadius doesn't work anymore on respawn (always respawn at the same place)
-   [MC-272547](https://bugs.mojang.com/browse/MC-272547) block.portal.travel sound no longer plays when entering End portal
-   [MC-272550](https://bugs.mojang.com/browse/MC-272550) End crystals now receive fire damage causing them to explode instantly
-   [MC-272553](https://bugs.mojang.com/browse/MC-272553) Naturally generated End Stone drops in cases where the Obsidian platform generates inside the island
-   [MC-272556](https://bugs.mojang.com/browse/MC-272556) Ender pearls don't work correctly when riding entities and cause players to be teleported for a split second
-   [MC-272559](https://bugs.mojang.com/browse/MC-272559) Players cannot traverse dimensions when throwing ender pearls into portals while riding entities
-   [MC-272563](https://bugs.mojang.com/browse/MC-272563) The ender dragon death animation is rendered behind blocks when using "Fabulous!" graphic settings
-   [MC-272571](https://bugs.mojang.com/browse/MC-272571) Server crashes upon updating from 24w21b to 1.21 Pre-release 1.
-   [MC-272583](https://bugs.mojang.com/browse/MC-272583) Each time you pass through an end gateway with an ender pearl from the main island, a new portal is created
-   [MC-272585](https://bugs.mojang.com/browse/MC-272585) Crash when bow or crossbow enchanted with multishot runs out of durability
-   [MC-272588](https://bugs.mojang.com/browse/MC-272588) Wind Charges can trigger Wind Burst
-   [MC-272595](https://bugs.mojang.com/browse/MC-272595) Breaking a Carrot/Warped Fungus on a Stick no longer gives a Fishing Rod
-   [MC-272596](https://bugs.mojang.com/browse/MC-272596) Throwing an ender pearl into the end fountain skips the credits
-   [MC-272625](https://bugs.mojang.com/browse/MC-272625) Game crashes when saving after teleporting a leashed entity to another dimension
-   [MC-272638](https://bugs.mojang.com/browse/MC-272638) Leads attached to a boat are deleted when breaking the boat
-   [MC-272639](https://bugs.mojang.com/browse/MC-272639) trial\_spawner\_bottom texture is different from Bedrock
-   [MC-272650](https://bugs.mojang.com/browse/MC-272650) Can respawn mid-air with default spawnpoint

---

# Minecraft 1.21 Pre-Release 1

We're bringing you the first Pre-Release of 1.21 with leashable boats, portal-able Ender Pearls and bug fixes!

With this snapshot, we are temporarily removing the functionality of lighting blocks on fire using the Fire Aspect enchantment, as we want to refine it further. This functionality will be reintroduced in a later release.

Happy portaling! ;)

## New Features

### Ominous Trial Spawner

-   Mobs removed by a Trial Spawner converting to Ominous state now drop any items they previously picked up from the ground

## Changes

-   Mace attack speed has been changed to 0.6
-   Doors of different materials can now form a double door
-   Ender Pearls that are thrown through portals can now teleport players to a different dimension than the one they are currently in
-   It is now possible to ride entities such as Horses or Minecarts through portals
    -   When riding entities through portals, the delay before teleporting is not applied

## Technical Changes

-   Data Pack version is now 46
-   Removed the `entitiesWithPassengersCanUsePortals` gamerule that was introduced last snapshot. Entity with passengers being able to use portals is now the default behavior.
-   Report data generator now includes information about network packets
-   The game will now store reports from failed chunks' loads and saves in the `debug` directory

### Server links

-   There are some generic-use link names, like "Support" or "Website", without any special functionality

## Data Pack Versions 42 through 46

-   Added new configurable fields to jigsaw structures and `single_pool_element` types

### Enchantments

#### Level-Based Values

##### `lookup`

A Level-Based Value type that maps a list of values to specific levels, and applies a fallback if the level is greater than the number of values supplied. Fields:

-   `values` - A list of values indexed by `level - 1` to apply, if present
-   `fallback` - A fallback Level-Based Value to apply if the level is greater than the size of `values`

#### Effect Conditions

Unlike with loot tables, all effect conditions need to be inline objects and cannot be references.

### Tags

#### Block Tags

-   `fire_aspect_lightable` has been removed
    -   With this snapshot, we are temporarily removing the functionality of lighting blocks on fire using the Fire Aspect enchantment, as we want to refine it further. This functionality will be reintroduced in a later release.

### Loot tables

#### Conditions

##### `random_chance_with_enchanted_bonus`

-   `chance`: field has been removed
-   `unenchanted_chance`: new field for the chance for an unenchanted item
-   `enchanted_chance`: new field for the chance for an enchanted item - a Level-Based Value

### Structures

-   Added `liquid_settings` field to structures of type `minecraft:jigsaw`. Possible values:
    -   `apply_waterlogging`: If any waterloggable block overlaps with existing water, it will become waterlogged
    -   `ignore_waterlogging`: Will not waterlog any waterloggable blocks that overlap existing water
    -   Default value is `apply_waterlogging`
-   Added optional field `override_liquid_settings` to `single_pool_element` element type
    -   Same possible values as the `liquid_settings` in jigsaw structures
    -   Overrides the inherited liquid settings from the parent jigsaw structure while generating this pool element

## Fixed bugs in 1.21 Pre-Release 1

-   [MC-902](https://bugs.mojang.com/browse/MC-902) The end obsidian platform resets every time entities go through the end portal, which can cause blocks to be deleted
-   [MC-50612](https://bugs.mojang.com/browse/MC-50612) Command blocks do not update when you place them near any source of power
-   [MC-97087](https://bugs.mojang.com/browse/MC-97087) Attributes won't work in main hand if they were in offhand
-   [MC-114566](https://bugs.mojang.com/browse/MC-114566) Can't teleport back to the central island with End Gateway Portal on outer End islands
-   [MC-148741](https://bugs.mojang.com/browse/MC-148741) Selection boxes in some screens are misaligned in comparison with their text
-   [MC-160140](https://bugs.mojang.com/browse/MC-160140) Shulker boxes on the obsidian platform are destroyed and do not drop when a player enters the End
-   [MC-169698](https://bugs.mojang.com/browse/MC-169698) Blocks within igloo basements can generate waterlogged when generating in close proximity to water
-   [MC-170907](https://bugs.mojang.com/browse/MC-170907) Network position deltas are processed relative to a wrong point
-   [MC-172031](https://bugs.mojang.com/browse/MC-172031) Throwing an ender pearl into a Nether or End portal often has no effect
-   [MC-191591](https://bugs.mojang.com/browse/MC-191591) Saddles lose their NBT data when equipped on horses, zombie horses, skeleton horses, mules or donkeys via right-clicking
-   [MC-265583](https://bugs.mojang.com/browse/MC-265583) Incorrect pluralization for skin customization strings for pants
-   [MC-265818](https://bugs.mojang.com/browse/MC-265818) The "gamerule.doVinesSpread.description" string consists of grammatically incorrect word usage
-   [MC-266140](https://bugs.mojang.com/browse/MC-266140) The "Open link" button within the realms menu is improperly capitalized
-   [MC-266471](https://bugs.mojang.com/browse/MC-266471) Trial chambers can intersect aquifers, causing some blocks inside the structure to be waterlogged
-   [MC-267050](https://bugs.mojang.com/browse/MC-267050) Chat disabled strings are missing verbs
-   [MC-267071](https://bugs.mojang.com/browse/MC-267071) The word "packs" within the "download.pack.failed" string is always pluralized
-   [MC-267474](https://bugs.mojang.com/browse/MC-267474) Strings referencing the player's off hand are inconsistently spelled
-   [MC-267954](https://bugs.mojang.com/browse/MC-267954) World upgrade and downgrade realms strings are improperly capitalized
-   [MC-268023](https://bugs.mojang.com/browse/MC-268023) The "selectWorld.experimental.details.title" string displayed within the experimental features details menu is improperly capitalized
-   [MC-268185](https://bugs.mojang.com/browse/MC-268185) Copper grates in trial chambers are waterlogged
-   [MC-269921](https://bugs.mojang.com/browse/MC-269921) Wind charges can be thrown though corners
-   [MC-270181](https://bugs.mojang.com/browse/MC-270181) Wind charges go through an entity if it is close to a player
-   [MC-270572](https://bugs.mojang.com/browse/MC-270572) Programmer Art resource pack duplicates some GUI texture files
-   [MC-270649](https://bugs.mojang.com/browse/MC-270649) The width of challenge advancements header is calculated in relation to the slash formatting of progress counter, causing overlap in some languages
-   [MC-270795](https://bugs.mojang.com/browse/MC-270795) Mobs despawned by Ominous Trial Spawners can delete picked up items
-   [MC-270821](https://bugs.mojang.com/browse/MC-270821) Regular Trial Spawners spawn the first mob with Ominous Trial equipment if they were last active as Ominous
-   [MC-270981](https://bugs.mojang.com/browse/MC-270981) View Bobbing toggle is not available in Accessibility Settings
-   [MC-271870](https://bugs.mojang.com/browse/MC-271870) random\_chance\_with\_looting function base value is for enchantment level 1
-   [MC-271897](https://bugs.mojang.com/browse/MC-271897) End Portal makes items disappear
-   [MC-271929](https://bugs.mojang.com/browse/MC-271929) Applying multiple layers of "using\_converts\_to" will produce ghost items
-   [MC-271971](https://bugs.mojang.com/browse/MC-271971) Wind Charges sometimes don't prevent fall damage
-   [MC-272014](https://bugs.mojang.com/browse/MC-272014) Ender Dragon death animation is broken since 20w22a (and broken again in 20w45a)
-   [MC-272038](https://bugs.mojang.com/browse/MC-272038) The error "Can't access registry ResourceKey\[minecraft:root / minecraft:game\_event\]" is sometimes in the log file
-   [MC-272053](https://bugs.mojang.com/browse/MC-272053) The "armor\_effectiveness" effect does not work with projectiles or indirect damage
-   [MC-272073](https://bugs.mojang.com/browse/MC-272073) Item displays with billboard and rotation values create major visual bug
-   [MC-272079](https://bugs.mojang.com/browse/MC-272079) Medium/small Slimes and magma cube's attack reach is too short
-   [MC-272198](https://bugs.mojang.com/browse/MC-272198) Shulkers' models sometimes appear offset upon end city generation
-   [MC-272253](https://bugs.mojang.com/browse/MC-272253) The strength of the riptide enchantment is increased when holding tridents enchanted with riptide in both hands
-   [MC-272258](https://bugs.mojang.com/browse/MC-272258) block.portal.travel sound now plays when teleporting to a different dimension using commands
-   [MC-272264](https://bugs.mojang.com/browse/MC-272264) Narrator button in Accessibility Settings doesn't update upon pressing Ctrl+B
-   [MC-272267](https://bugs.mojang.com/browse/MC-272267) "Changes the blurriness of menu background" lacks punctuation
-   [MC-272279](https://bugs.mojang.com/browse/MC-272279) Resource packs containing TrueType fonts fail to load on x64 macOS systems
-   [MC-272308](https://bugs.mojang.com/browse/MC-272308) Axolots can be attached to new leads when being already leashed
-   [MC-272311](https://bugs.mojang.com/browse/MC-272311) The enchantment glint sometimes doesn't render in interfaces and first person
-   [MC-272313](https://bugs.mojang.com/browse/MC-272313) The game crashes when attempting to open the realms menu
-   [MC-272315](https://bugs.mojang.com/browse/MC-272315) Serial comma is missing from the entitiesWithPassengersCanUsePortals game rule description
-   [MC-272322](https://bugs.mojang.com/browse/MC-272322) When you are riding an entity through portals, you and the entity may teleport to the wrong place
-   [MC-272328](https://bugs.mojang.com/browse/MC-272328) entitiesWithPassengersCanUsePortals game rule description is missing the proper term capitalization
-   [MC-272329](https://bugs.mojang.com/browse/MC-272329) Riding an entity into portals may cause the game to softlock
-   [MC-272333](https://bugs.mojang.com/browse/MC-272333) The gamerule spawnRadius doesn't work anymore on respawn (always respawn at the same place)
-   [MC-272339](https://bugs.mojang.com/browse/MC-272339) Holding crossbows in both hands stacks quick charge
-   [MC-272342](https://bugs.mojang.com/browse/MC-272342) Typo in mining fatigue attribute ID 'minecraft:effect.minining\_fatigue'
-   [MC-272343](https://bugs.mojang.com/browse/MC-272343) Ender pearls don't work when riding an entity
-   [MC-272344](https://bugs.mojang.com/browse/MC-272344) When teleported by an ender pearl, the "portal noise fades" sound is played
-   [MC-272347](https://bugs.mojang.com/browse/MC-272347) Upgrading from before 24w21a doesn't update structures saved by structure blocks
-   [MC-272355](https://bugs.mojang.com/browse/MC-272355) Ellipsis text is stringified within NBT text formatter list truncation
-   [MC-272361](https://bugs.mojang.com/browse/MC-272361) Minecarts and Passengers offset from block when riding through portals
-   [MC-272364](https://bugs.mojang.com/browse/MC-272364) Players spawn one block above the obsidian platform when entering an end portal
-   [MC-272365](https://bugs.mojang.com/browse/MC-272365) Inventory Images of All Banners are Completely White
-   [MC-272369](https://bugs.mojang.com/browse/MC-272369) Can respawn in a solid block with default spawnpoint
-   [MC-272374](https://bugs.mojang.com/browse/MC-272374) 24w21b will not upgrade attribute\_modifiers from previous versions
-   [MC-272399](https://bugs.mojang.com/browse/MC-272399) Primed TNT entities can't go through an End portal anymore
-   [MC-272400](https://bugs.mojang.com/browse/MC-272400) Shield in Inventory with Banner Shows as White
-   [MC-272403](https://bugs.mojang.com/browse/MC-272403) Portal linking chunk loading changes
-   [MC-272406](https://bugs.mojang.com/browse/MC-272406) Crash when zombie tries to spawn second reinforcement
-   [MC-272408](https://bugs.mojang.com/browse/MC-272408) set\_attributes item modifier can add the same attribute modifier twice
-   [MC-272424](https://bugs.mojang.com/browse/MC-272424) Chunks occasionally have large dark areas in the sky
-   [MC-272427](https://bugs.mojang.com/browse/MC-272427) Flame, power, punch, and piercing enchantments no longer work on the last use of the item
-   [MC-272430](https://bugs.mojang.com/browse/MC-272430) Breaking a Carrot/Warped Fungus on a Stick gives a damaged Fishing Rod
-   [MC-272438](https://bugs.mojang.com/browse/MC-272438) End crystal entities can't go through an End portal anymore
-   [MC-272442](https://bugs.mojang.com/browse/MC-272442) Comparator output of jukebox no longer persists on music disc finish
-   [MC-272445](https://bugs.mojang.com/browse/MC-272445) Command blocks made from Ctrl + Pick Block do not activate on first try
-   [MC-272469](https://bugs.mojang.com/browse/MC-272469) When the wind charge, fireball or shulker bullet is in the lava, it will continue to make a high-loudness noise
-   [MC-272490](https://bugs.mojang.com/browse/MC-272490) @n can select dying entities, unlike @e
-   [MC-272515](https://bugs.mojang.com/browse/MC-272515) Component-Modified Saddles get their components wiped when dispensed onto a horse, mule, or camel.

---

# Minecraft 1.20.6 Release Candidate 1

We missed release day so much, we made Friday a release day! Here is Release Candidate 1 for 1.20.6, a hotfix release intended to fix a few critical issues. If nothing further critical is found, we expect to release this hotfix early next week. Happy mining!

## Fixed bugs in 1.20.6 Release Candidate 1

-   [MC-271109](https://bugs.mojang.com/browse/MC-271109) Trader llama inventory shifted, partially lost during upgrade

---

# Minecraft: 1.20.5 Release Candidate 3

Oh look, it's finally Monday! Since we haven't shipped something for several hours, we thought we'd kick the week off with a third and (fingers crossed!) final Release Candidate for Minecraft: Java Edition 1.20.5.

Happy mining!

## Fixed bugs in 1.20.5 Release Candidate 3

-   [MC-270964](https://bugs.mojang.com/browse/MC-270964) Race condition in can\_break/can\_place\_on item stack components

---

# Minecraft 1.20.5 Release Candidate 2

We're honestly starting to lose count at this point. Anyways! Here's 1.20.5 Release Candidate 2 coming in clutch with some bona fide bug fixes to round off the week.

Happy weekend mining!

## Fixed bugs in 1.20.5 Release Candidate 2

-   [MC-270862](https://bugs.mojang.com/browse/MC-270862) Firework Star item displays have inconsistent color updates
-   [MC-270902](https://bugs.mojang.com/browse/MC-270902) Game unpauses when credits are played via pause menu
-   [MC-270916](https://bugs.mojang.com/browse/MC-270916) Villagers can sell experimental enchantments without the 1.21 experiment enabled

---

# Minecraft 1.20.5 Release Candidate 1

This week's shipping frenzy continues with our very first Release Candidate for 1.20.5! Barring any significant or critical issues found within it, this is the version we are planning to ship as Minecraft: Java Edition 1.20.5 next week.

## Technical Changes

-   Changed the approach to game client disconnecting on invalid data in packets sent from a server
    -   To ease the transition period, modded servers can opt out by setting the appropriate field in the `handshake/game_profile` packet
    -   This option will be removed in the next release

## Fixed bugs in 1.20.5 Release Candidate 1

-   [MC-270867](https://bugs.mojang.com/browse/MC-270867) Severe lag when upgrading 1.20.4 worlds
-   [MC-270871](https://bugs.mojang.com/browse/MC-270871) Upgrading a world with horses wearing leather horse armor makes the horse immune to freezing forever

---

# Minecraft 1.20.5 Pre-Release 4

And back again! Here comes the fourth Pre-Release of 1.20.5. Similar story this time around, fixing some important issues.

Happy crafting!

## Technical Changes

-   The Resource Pack version is now 32

## Resource Pack Version 32

-   The `shift` in TTF glyph providers is now restricted to the range `[-512; 512]`

## Fixed bugs in 1.20.5 Pre-Release 4

-   [MC-270666](https://bugs.mojang.com/browse/MC-270666) The game tries to spawn bogged without experimental feature "update 1.21" active (but failed)
-   [MC-270825](https://bugs.mojang.com/browse/MC-270825) Certain simulation distance values cannot be saved visually
-   [MC-270838](https://bugs.mojang.com/browse/MC-270838) Stationary fireballs can no longer be redirected
-   [MC-270845](https://bugs.mojang.com/browse/MC-270845) Summoned wind charges can no longer be redirected

---

# Minecraft 1.20.5 Pre-Release 3

Back-to-back! Releasing yesterday was so much fun that we decided to ship another Pre-Release for Minecraft: Java Edition 1.20.5 today as well. This one is coming in hot with important bug & crash fixes.

Happy mining!

## Technical Changes

-   The Data Pack version is now 41

## Data Pack Version 41

-   Replaced Entity Type tag `minecraft:punchable_projectiles` with tag `minecraft:redirectable_projectile` for projectiles which can be redirected by player attacks and projectiles

## Fixed bugs in 1.20.5 Pre-Release 3

-   [MC-269384](https://bugs.mojang.com/browse/MC-269384) Panorama sometimes spins quickly when exiting world
-   [MC-270097](https://bugs.mojang.com/browse/MC-270097) Crash when set\_ominous\_bottle\_amplifier item modifier sets out-of-range amplifier
-   [MC-270375](https://bugs.mojang.com/browse/MC-270375) The screen repetitively flashes when changing the render distance and biome blend settings
-   [MC-270608](https://bugs.mojang.com/browse/MC-270608) Projectiles can no longer deflect ghast fireballs
-   [MC-270609](https://bugs.mojang.com/browse/MC-270609) Client requires a tick between StoreCookiePacket and TransferPacket for cookie to be stored
-   [MC-270634](https://bugs.mojang.com/browse/MC-270634) Fireworks shot from Dispensers go much higher than before
-   [MC-270668](https://bugs.mojang.com/browse/MC-270668) Item data serialization is significantly slower than before
-   [MC-270799](https://bugs.mojang.com/browse/MC-270799) Player can no longer sprint/walk across one block gaps since 1.20.5 Pre-Release 2

---

# Minecraft 1.20.5 Pre-Release 2

It's the start of a new week and we're coming right out of the gate with another pre-release for Minecraft: Java Edition 1.20.5! Apart from upping our pun-game in the Advancements department, this pre-release also fixes a slew of bugs and crashes.

Happy mining!

## New Features

### Advancements

-   `Snip it!` advancement is renamed to `Shear Brilliance`

## Changes

-   Using ctrl+pick block no longer lists "(+NBT)" in the item tooltip

### UI

-   The animated Nether Portal texture is displayed when changing dimension to or from The Nether
-   The animated End Portal effect is displayed when changing dimension to or from The End

## Technical Changes

-   The Data Pack version is now 40
-   Invalid data in packets sent from a server will now cause the game client to disconnect

## Data Pack Version 40

### Modified loot functions

#### `set_fireworks`

Fields `explosions` and `mode` have been grouped together as a sub-object

-   `{ "explosions": <list>, "mode": <mode>, <mode-dependent fields>}` becomes `{"explosions": {"values": <list>, "mode": <mode>, <mode-dependent fields>}}`
-   New `explosions` field is now optional, while `values` field inside it is now mandatory

## Fixed bugs in 1.20.5 Pre-Release 2

-   [MC-199973](https://bugs.mojang.com/browse/MC-199973) Wet wolf is rendered too dark compared to past versions
-   [MC-259355](https://bugs.mojang.com/browse/MC-259355) Game crashes because /place sometimes does not check whether position is loaded and out of world
-   [MC-265585](https://bugs.mojang.com/browse/MC-265585) Waterlogged barriers do not diffuse sky light
-   [MC-265709](https://bugs.mojang.com/browse/MC-265709) Stonecutter outputs are broken past the 32nd row in the GUI (server only)
-   [MC-265741](https://bugs.mojang.com/browse/MC-265741) Waterlogged barriers don't show up on maps
-   [MC-266997](https://bugs.mojang.com/browse/MC-266997) Sky light doesn't update when breaking a shulker box while its (closing) animation is playing
-   [MC-267352](https://bugs.mojang.com/browse/MC-267352) Singleplayer worlds don't load the player.dat when the "Player" tag is absent from level.dat
-   [MC-267381](https://bugs.mojang.com/browse/MC-267381) Moving while sneaking is impossible with high generic.step\_height attribute
-   [MC-267414](https://bugs.mojang.com/browse/MC-267414) Scale attribute causes extreme TPS loss with the ender dragon
-   [MC-267441](https://bugs.mojang.com/browse/MC-267441) When a player's generic.step\_height attribute is set to more than two, attempting to step atop of more than two blocks may fail if there are blocks higher up
-   [MC-268015](https://bugs.mojang.com/browse/MC-268015) Shulker bullets shot from shulkers don't account for the scale attribute
-   [MC-268035](https://bugs.mojang.com/browse/MC-268035) True Type Font when changing Language causes error with Rendering overlay
-   [MC-268064](https://bugs.mojang.com/browse/MC-268064) Armadillos that aren't rolled up can roll up during their death animation
-   [MC-268257](https://bugs.mojang.com/browse/MC-268257) Equipping a carpet on a Llama doesn't play a sound
-   [MC-268347](https://bugs.mojang.com/browse/MC-268347) Setting gravity higher than 0.84 allows you to jump up a block
-   [MC-268804](https://bugs.mojang.com/browse/MC-268804) Wolves attacked while wearing wolf armor resets eating timer despite being at full health
-   [MC-268810](https://bugs.mojang.com/browse/MC-268810) Ctrl+Picking chests still says (+NBT) even though NBT is replaced by components
-   [MC-268854](https://bugs.mojang.com/browse/MC-268854) Firework explosions in items without a `Type` field are not correctly upgraded
-   [MC-268858](https://bugs.mojang.com/browse/MC-268858) Buttons to enchant become enabled when placing wolf armor in an enchanting table
-   [MC-268984](https://bugs.mojang.com/browse/MC-268984) Running /give command throws EncoderException
-   [MC-269123](https://bugs.mojang.com/browse/MC-269123) Enabling or disabling a resource pack that changes a shader will not affect that shader until the resource pack is reloaded
-   [MC-269161](https://bugs.mojang.com/browse/MC-269161) Stonecutter does not support multiple recipes with the same result item type
-   [MC-269171](https://bugs.mojang.com/browse/MC-269171) The client is disconnected when receiving the system\_chat packet containing deeply nested NBT data
-   [MC-269173](https://bugs.mojang.com/browse/MC-269173) The server cannot send the client the system\_chat packet containing deeply nested NBT data
-   [MC-269300](https://bugs.mojang.com/browse/MC-269300) The "Alternatively, here's some we made earlier!" text is positioned too close to the header separator
-   [MC-269304](https://bugs.mojang.com/browse/MC-269304) Horse armor renders incorrectly when worn by wolves
-   [MC-269415](https://bugs.mojang.com/browse/MC-269415) set\_fireworks "mode" is required even when "explosions" is optional
-   [MC-269472](https://bugs.mojang.com/browse/MC-269472) Crash when table\_bonus loot condition has empty chances list
-   [MC-269619](https://bugs.mojang.com/browse/MC-269619) Scroller in Telemetry Data screen renders translucent pixels as opaque, unlike elsewhere
-   [MC-269660](https://bugs.mojang.com/browse/MC-269660) arguments.item.predicate.unknown quotes are different
-   [MC-269802](https://bugs.mojang.com/browse/MC-269802) Selecting a villager trade merges items with different components
-   [MC-269932](https://bugs.mojang.com/browse/MC-269932) Item disappears when trying to trade using items with lower max stack count
-   [MC-270003](https://bugs.mojang.com/browse/MC-270003) Ominous banners are not "pick block"-ed properly
-   [MC-270049](https://bugs.mojang.com/browse/MC-270049) Enchanting table buttons and level icons render translucent pixels as opaque
-   [MC-270116](https://bugs.mojang.com/browse/MC-270116) The minecraft:generic.fall\_damage\_multiplier attribute does not function for many mobs with nonstandard fall damage behaviour
-   [MC-270117](https://bugs.mojang.com/browse/MC-270117) The calculation of fall damage for horses, donkeys, mules, zombie horses, skeleton horses, camels, llamas, trader llamas, and foxes disregards the minecraft:generic.safe\_fall\_distance
-   [MC-270262](https://bugs.mojang.com/browse/MC-270262) You can see the world loading while in the process of entering it
-   [MC-270265](https://bugs.mojang.com/browse/MC-270265) Blur slider does not say "OFF" when set to 0%
-   [MC-270413](https://bugs.mojang.com/browse/MC-270413) A nbt copy of a block is ABSOLUTELY the same as the first nbt copy of the original and n (+nbt) display for tooltip of (a copy of)×n a block have an "Items" block data
-   [MC-270559](https://bugs.mojang.com/browse/MC-270559) FreeType error: Unrecognized error: 0x62 (Loading glyph)
-   [MC-270590](https://bugs.mojang.com/browse/MC-270590) Dropped items from creative mode get deleted when inventory is open
-   [MC-270603](https://bugs.mojang.com/browse/MC-270603) Crash updating world: ClassCastException: RegularImmutableList cannot be cast to class com.mojang.datafixers.util.Pair
-   [MC-270610](https://bugs.mojang.com/browse/MC-270610) Some new advancement titles are incorrectly capitalized
-   [MC-270648](https://bugs.mojang.com/browse/MC-270648) Wolf armor with the curse of binding enchantment cannot be removed from wolves using shears in creative mode
-   [MC-270679](https://bugs.mojang.com/browse/MC-270679) Clicking on text with run\_command can cause EncoderException and will exit to multiplayer menu
-   [MC-270712](https://bugs.mojang.com/browse/MC-270712) Cannot move while sneaking if attribute generic.step\_height is set to 0
-   [MC-270767](https://bugs.mojang.com/browse/MC-270767) Leather horse armor no longer prevents horses from freezing in powder snow

---

# Minecraft 1.20.5 Pre-Release 1

It is now time for the first Pre-release of Minecraft 1.20.5, featuring some tweaks to Trial Chambers and Ominous Trials, as well as new advancements, a big set of technical tweaks and changes, and lots of bug fixes.

From now on, you should mostly see bugs being fixed. In addition to that, pre-releases don't follow the regular snapshot cadence of releasing on Wednesdays, so keep an eye out for the next pre-release.

## Experimental Features

### Trial Chambers

-   More consistently buried by terrain when found underground
-   Remade 'Chamber 6' with variations, and renamed it to 'Assembly'
-   Added a new trap dispenser style to chambers
-   Fixed various broken jigsaw connections in the corridors
-   Chamber Eruption:
    -   Stopped Tuff Bricks from spawning in the air
    -   Added more lights to quadrants

### Ominous Trials

-   Mobs that can wear equipment will now often spawn with enchanted weapons and armor
    -   Armor enchantments include Protection IV, Projectile Protection IV and Fire Protection IV
    -   Weapon enchantments include Sharpness I, Knockback I, Power I and Punch I
-   Mobs that wear equipment no longer have a chance to drop their equipment on death
-   Players are now chosen 50% of the time when an Ominous Trial Spawner chooses which entity to drop projectiles on top of
    -   Projectiles now spawn more accurately above chosen entities

### Weaving

-   Now more consistently spawns 2-3 cobwebs on death
-   Players are now affected by the movement buff through Cobwebs
    -   Move through Cobweb with 50% of their normal speed instead of 25%

### Infested

-   Now has a 10% chance to spawn 1-2 Silverfish instead of 5%
-   Silverfish will now spawn at the center of the entity's bounding box and fling out in the direction the entity is facing

### Oozing

-   Will only spawn slimes in a given 5x5x5 area up to the max entity cramming count

### Advancements

-   Added `Revaulting` - Unlock an Ominous Vault with an Ominous Trial Key

## New Features in 1.20.5-pre1

### Advancements

-   Added the following advancements:
    -   `Isn't it Scute?` - Get Armadillo Scutes from an Armadillo using a Brush
    -   `Snip it!` - Remove Wolf Armor from a Wolf using Shears
    -   `Good as New` - Repair a damaged Wolf Armor using Armadillo Scutes
    -   `The Whole Pack` - Tame one of each Wolf variant

## Changes in 1.20.5-pre1

-   Added support for Viossa language

## Technical Changes

-   The Data Pack version is now 39

## Data Pack Version 39

-   Added new item sub-predicates and loot functions
-   Added new terrain adaptation type for structures: `encapsulate`
    -   Density will be added all around every piece of a structure
    -   Ideal for structures that need to be entirely covered underground
-   The page limit in Written Books has been removed
-   The combination of `max_stack_size` and `max_damage` components is no longer allowed in commands and data pack definitions
-   Added a new option `body` in entity `equipment` sub-predicate to match the item in the body armor slot of an entity
-   The `saturation_modifier` field on the `food` component has been replaced with `saturation`
    -   `saturation` is the exact value added to the player's saturation level
    -   In respect to the former `saturation_modifier`, this is defined by `saturation = nutrition * saturation_modifier * 2`
-   Particle representation in commands and area effect clouds has been changed
-   Changed optional `equipment_loot_table` field in the `SpawnPotentials` of Monster Spawners and `spawn_potentials` of Trial Spawner configs
    -   Now named `equipment` instead of `equipment_loot_table`
    -   Format: object with fields
        -   `loot_table` - A loot table used to generate the equipment
        -   `slot_drop_chances` - An optional map of equipment slot to specified drop chance
            -   Can also be a single value instead of a list to apply to all slots: e.g. `slot_drop_chances: 0.0f` will apply a chance of 0% to all slots
    -   e.g. `equipment: {loot_table: "minecraft:equipment/trial_chamber", slot_drop_chances: {"head": 0.0f, "chest": 0.25f, "legs": 1.0f, "feet": 0.25f}}`
    -   If present, rolled items from the specified loot table will be equipped to the mob that spawns
-   Removed Item tag `minecraft:tools` (overlapping with `minecraft:breaks_decorated_pots`)
-   Added Entity Type tag `minecraft:punchable_projectiles` for projectiles which should be able to be punched and deflected toward the direction the player is looking
-   Added Enchantment tag `minecraft:tooltip_order` controlling which order Enchantments are listed in tooltips

### Modified loot functions

#### `set_contents`

-   Unused field `type` has been removed
-   Added new mandatory field `component`:
    -   Describes target component to be filled with items
    -   Existing contents will be replaced
    -   Allowed values: `container`, `bundle_contents`, `charged_projectiles`
    -   `bundle_contents` and `charged_projectiles` will ignore empty stacks

#### `set_custom_data`

Field `tag` now accepts both SNBT data written as a string (existing format) and unflattened tags

### New Loot Functions

#### `modify_contents`

-   Apply modifier function to every item inside a component
-   If component does not exist, it will not be added
-   Fields:
    -   `conditions`\- list of conditions to filter this function
    -   `component` - target component
        -   Allowed values: `container`, `bundle_contents`, `charged_projectiles`
    -   `modifier` - function or list of functions to be applied to every item inside container

#### `set_item`

-   Replaces item type of item stack without changing count and components
-   Fields:
    -   `conditions` - list of conditions to filter this function
    -   `item` - new item type

#### `filtered`

-   Applies sub-function only to items that match item predicate
-   Fields:
    -   `conditions` - list of conditions to filter this function
    -   `item_filter` - item predicate used to match items
    -   `modifier` - functions to apply to matching items

#### `set_custom_model_data`

-   Sets `custom_model_data` component
-   Fields:
    -   `conditions` - list of conditions to filter this function
    -   `value` - integer number provider

### New Item Sub-predicates

General rules of component predicates:

-   Unless otherwise specified, a field in predicate with the same name as a field in component that matches (i.e. has the same name as predicate) will match that field value
-   Those fields will usually have the same type as in the components, but will be optional.
-   Exceptions:
    -   List fields will be replaced with collection matchers (see below)
    -   Integer and float fields will be replaced with ranges
    -   Registry ids will be replaced with a type that accepts id, list of ids or a tag

#### Collection matcher

Collection matcher is a shared part of predicate used for matching collections. Every instance of this matcher will have same fields with same functionality, with only difference being type of matched element Fields:

-   `size` - integer range to match against collection size
-   `contains` - a list of element predicates
    -   All conditions must match for predicate to pass
    -   Not all elements in tested container have to be matched
    -   Elements can be in any order
    -   Single element can match multiple predicates
    -   Examples (when matching item stacks):
        -   `{contents:[{item:diamond}]}` - will match when there is at least one diamond item
        -   `{contents:[{item:diamond}, {item:dirt}]}` - will match when there is at least one diamond item and at least one dirt item
-   `count` - a list of matchers on element counts
    -   Entry fields:
        -   `test` - element matcher
        -   `count` - optional integer range to check against number of elements passing `test`
    -   Examples (when matching item stacks):
        -   `{count:[{count:3,test:{items:diamond}}]}}` will match only when there are exactly 3 stacks of diamonds (no matter the stack size)

#### `container`

-   Matcher for `container` component (like shulker box)
-   Fields:
    -   `items` - optional collection matcher
        -   Note: empty items are ignored. That means `container~{items:{size:3}}` will only pass if there are exactly 3 non-empty stacks in container

### `bundle_contents`

-   Matcher for `bundle_contents` component
-   Fields:
    -   `items` - optional collection matcher

### `firework_explosion`

-   Matcher for `firework_explosion` component
-   Fields
    -   `shape` - optional matcher for shape, same values as `shape` field in `minecraft:firework_explosion` component
    -   `has_trail` - optional boolean
    -   `has_twinkle` - optional boolean

### `fireworks`

-   Matcher for `fireworks` component
-   Fields:
    -   `explosions` - optional collection matcher for `firework_explosion` predicates
    -   `flight_duration` - optional integer range check for flight duration
-   Example: `minecraft:fireworks~{explosions:{contains:[{shape:small_ball}]}}]` - matches if firework has at least one explosion with `small_ball` shape

### `writable_book_content`

-   Matcher for `writable_book_content` component
-   Fields
    -   `pages` - optional collection matcher for strings (matching only unfiltered contents of page)

### `fireworks`

-   Matcher for `written_book_content` component
-   Fields
    -   `pages` - optional collection matcher for chat components (matching only unfiltered contents of page)
    -   `author` - optional string value
    -   `title` - optional string value (matching only value)
    -   `generation` - optional integer range check for generation
    -   `resolved` - optional boolean

### `attribute_modifiers`

-   Matcher for `attribute_modifiers` component
-   Fields:
    -   `modifiers` - optional collection matcher for following entries with following fields:
        -   `attribute` - optional id, list of ids or tag for attribute to be matched
        -   `id` - optional UUID
        -   `name` - optional string
        -   `amount` - optional double range check
        -   `operation` - optional operation type (same values as `operation` field from `attribute_modifiers` component)
        -   `slot` - optional applicable slot type (same values as `slot` field from `attribute_modifiers` component)

### `trim`

-   Matcher for `trim` component
-   Fields:
    -   `material` - optional id, list of ids or tag for material to be matched
    -   `pattern` - optional id, list of ids or tag for pattern to be matched

### Particle representation

-   Particle options in commands and in fields like `Particles` in Area Effect clouds now use the same representation as worldgen files (like existing biomes' ambient particle settings)
-   For example, command `/particle minecraft:dust 1.0 0.0 0.0 2.0 ...` becomes `/particle minecraft:dust{color:[1.0, 0.0, 0.0], scale:2.0} ...`
-   The syntax for particles without extra options (like `minecraft:villager`) remains unchanged
-   Changes to block particles (`minecraft:block`, `minecraft:block_marker`, `minecraft:falling_dust`, `minecraft:dust_pillar`) options:
    -   Field `value` has been renamed to `block_state`
    -   Field `block_state` now also accepts plain block name to represent default block state
    -   Example transformations:
        -   `minecraft:block minecraft:redstone_lamp[lit=true]` -> `minecraft:block{block_state: {Name: "minecraft:redstone_lamp", Properties: {lit: "true"}}}`
        -   `minecraft:block minecraft:diamond_block` -> `minecraft:block{block_state: "minecraft:diamond_block"}`
-   Changes to `minecraft:item` options:
    -   Field `value` has been renamed to `item`
    -   Field `item` now also accepts plain item name to represent item stack with default components
    -   `count` field is now ignored
    -   Example transformations:
        -   `minecraft:item minecraft:dirt` -> `minecraft:item{item: {id: "minecraft:dirt"}}`
        -   `minecraft:item minecraft:dirt` -> `minecraft:item{item: "minecraft:dirt"}`
-   Changes to `dust_color_transition` options:
    -   Field `fromColor` has been renamed to `from_color`
    -   Field `toColor` has been renamed to `to_color`
    -   Example transformation: `dust_color_transition 1.0 0.0 0.0 0.5 0.0 1.0 0.5` -> `dust_color_transition{from_color: [1.0f, 0.0f, 0.0f], scale: 0.5f, to_color: [0.0f, 1.0f, 0.5f]}`
-   Changes to `entity_effect` options:
    -   Field `value` has been renamed to `color`
    -   Field `color` now also accepts list of floats representing RGBA color

## Fixed bugs in 1.20.5 Pre-Release 1

-   [MC-165435](https://bugs.mojang.com/browse/MC-165435) Can't trigger flying mode in creative while standing in the middle of 2×2 magma block bubble column
-   [MC-188497](https://bugs.mojang.com/browse/MC-188497) AngerTime and AngryAt cannot be set on summon
-   [MC-207353](https://bugs.mojang.com/browse/MC-207353) Ghast fireballs and wind charges can't be redirected in melee if the attack does 0 damage
-   [MC-263315](https://bugs.mojang.com/browse/MC-263315) Attack Target of hoglins/zoglins can't be detected by /execute on target
-   [MC-264456](https://bugs.mojang.com/browse/MC-264456) Entity targeted by frogs and axolotls can't be detected by /execute on target
-   [MC-265390](https://bugs.mojang.com/browse/MC-265390) Forceload Command provides wrong output
-   [MC-267934](https://bugs.mojang.com/browse/MC-267934) Sending ClientboundTransferPacket followed by disconnect just kicks the player
-   [MC-268000](https://bugs.mojang.com/browse/MC-268000) The client crashes when using /give to give players a skull
-   [MC-268346](https://bugs.mojang.com/browse/MC-268346) Jump can be used with generic.jump\_strength set to 0 resulting in a speed boost
-   [MC-268947](https://bugs.mojang.com/browse/MC-268947) Flying cannot be initiated reliably when the minecraft:generic.gravity attribute is increased
-   [MC-269191](https://bugs.mojang.com/browse/MC-269191) Old villagers can't trade
-   [MC-269192](https://bugs.mojang.com/browse/MC-269192) Breeze is not affected by the 'execute on target' command
-   [MC-269266](https://bugs.mojang.com/browse/MC-269266) Area effect cloud particles from creeper explosions are incorrectly tinted
-   [MC-269320](https://bugs.mojang.com/browse/MC-269320) Books with more than 100 pages get cut off when upgraded
-   [MC-269357](https://bugs.mojang.com/browse/MC-269357) Flow and guster banner pattern descriptions display as raw translation strings
-   [MC-269366](https://bugs.mojang.com/browse/MC-269366) Mace doesn't break Decorated Pots unlike other tools
-   [MC-269496](https://bugs.mojang.com/browse/MC-269496) You don't get any damage if you fight against the breeze in a minecart or in a boat
-   [MC-269501](https://bugs.mojang.com/browse/MC-269501) The text above the hotbar has no background, even when the "Text Background" setting is "Everywhere" in spectator mode
-   [MC-269508](https://bugs.mojang.com/browse/MC-269508) Player keeps vertical momentum when jumping when landing on the ground from sonic boom
-   [MC-269609](https://bugs.mojang.com/browse/MC-269609) Wind charges can harm the ender dragon while it perches atop the end portal, unlike arrows and tridents.
-   [MC-269610](https://bugs.mojang.com/browse/MC-269610) Wind charges have the capability to harm the wither when it has reached half health or less
-   [MC-269680](https://bugs.mojang.com/browse/MC-269680) Game crashes when trying to save after modifying item stack to have a max\_stack\_size below its current stack size
-   [MC-269707](https://bugs.mojang.com/browse/MC-269707) Brewing stand slots have artificial maximum stack size of 64
-   [MC-269765](https://bugs.mojang.com/browse/MC-269765) Mace damage does not reset after a hit while still falling
-   [MC-269933](https://bugs.mojang.com/browse/MC-269933) limit\_count item modifier can create overstacked items
-   [MC-269947](https://bugs.mojang.com/browse/MC-269947) Clicking spam with Mace causes very high damage
-   [MC-269948](https://bugs.mojang.com/browse/MC-269948) The subtitle for the "minecraft:event.mob\_effect.raid\_omen" sound event displays as a raw translation string
-   [MC-269949](https://bugs.mojang.com/browse/MC-269949) New "Raid Omen" effect texture is using Programmer Art Evoker as base
-   [MC-269954](https://bugs.mojang.com/browse/MC-269954) Striking non-living entities with a mace enchanted with Wind Burst propels the player upward, even when they are flying
-   [MC-269955](https://bugs.mojang.com/browse/MC-269955) When flying in creative mode, hitting ender dragons with a mace enchanted with Wind Burst pushes the player upward, unlike when attacking other mobs
-   [MC-269959](https://bugs.mojang.com/browse/MC-269959) "Not a list" printed to console when loading into a world
-   [MC-269961](https://bugs.mojang.com/browse/MC-269961) Non-player entities with the Weaving effect can't walk through Cobweb at normal speeds
-   [MC-269963](https://bugs.mojang.com/browse/MC-269963) Bad Omen is not removed when experimental features are disabled
-   [MC-269974](https://bugs.mojang.com/browse/MC-269974) Mobs with the weaving effect, when dying, are unable to replace replaceable blocks with cobwebs
-   [MC-269976](https://bugs.mojang.com/browse/MC-269976) Wind Burst book available from villager trading
-   [MC-269977](https://bugs.mojang.com/browse/MC-269977) Wind Burst enchantment is obtainable in Enchanting Table
-   [MC-269980](https://bugs.mojang.com/browse/MC-269980) Wind Burst enchantment triggers from normal attacks rather than smash attacks
-   [MC-269993](https://bugs.mojang.com/browse/MC-269993) Hitting wind charges using mace with Wind Burst creates very high upwards momentum
-   [MC-269999](https://bugs.mojang.com/browse/MC-269999) Potions of Infestation, Oozing and Weaving can be obtained without experimental features enabled
-   [MC-270001](https://bugs.mojang.com/browse/MC-270001) The particle 'minecraft:item minecraft:air' crashes the client
-   [MC-270004](https://bugs.mojang.com/browse/MC-270004) Giving yourself an item with a Wind Burst enchantment level higher than 3, then hitting certain entities crashes the game
-   [MC-270005](https://bugs.mojang.com/browse/MC-270005) Mace smash attack can be done multiple times from a single fall
-   [MC-270009](https://bugs.mojang.com/browse/MC-270009) Entities with the infested effect can spawn silverfish without actually being hurt
-   [MC-270048](https://bugs.mojang.com/browse/MC-270048) Vault textures are inconsistent
-   [MC-270060](https://bugs.mojang.com/browse/MC-270060) The glowing parts of trial spawner textures are inconsistent
-   [MC-270094](https://bugs.mojang.com/browse/MC-270094) Fletcher sells new tipped arrows without experimental features enabled
-   [MC-270099](https://bugs.mojang.com/browse/MC-270099) Killing a mob with Weaving effect places cobwebs even if mobGriefing is disabled
-   [MC-270119](https://bugs.mojang.com/browse/MC-270119) The contents slot for the /item command does not function with shot arrows, tridents, and fireballs
-   [MC-270125](https://bugs.mojang.com/browse/MC-270125) Wind Burst can be obtained from chest and fishing loot
-   [MC-270158](https://bugs.mojang.com/browse/MC-270158) Wind Burst activates while mace is on cooldown
-   [MC-270161](https://bugs.mojang.com/browse/MC-270161) Wind burst enchantment is significantly stronger on vehicle entities
-   [MC-270201](https://bugs.mojang.com/browse/MC-270201) Fishing rod line does not account for the scale attribute in third-person
-   [MC-270236](https://bugs.mojang.com/browse/MC-270236) area\_effect\_cloud and lingering potions causing potion\_contents.custom\_color to be slightly transparent
-   [MC-270412](https://bugs.mojang.com/browse/MC-270412) Wind charge item crash on non-experimental worlds.
-   [MC-270475](https://bugs.mojang.com/browse/MC-270475) Container component slot -1 crash

---

# Minecraft 1.20.4 Release Candidate 1

We're releasing a Release Candidate for Minecraft 1.20.4. This Release Candidate fixes a critical issue found after the release of Minecraft 1.20.3

## Fixed bugs in 1.20.4 Release Candidate 1

-   [MC-267185](https://bugs.mojang.com/browse/MC-267185) Decorated pots can delete items when reloading the world

---

# Minecraft 1.20.3 Release Candidate 1

We're now releasing the first (and hopefully last) release candidate for 1.20.3. Unless something critical pops up, no further changes will be made for the full release, which is planned for next week.

Happy Mining!

## Fixed bugs in 1.20.3 Release Candidate 1

-   [MC-266537](https://bugs.mojang.com/browse/MC-266537) Disparity between the read/write logic of the explosion packet

---

# Minecraft 1.20.3 Pre-Release 4

We're now releasing Pre-release 4 for 1.20.3 with a few more bug fixes.

Happy mining!

## Fixed bugs in 1.20.3 Pre-Release 4

-   [MC-266968](https://bugs.mojang.com/browse/MC-266968) /return executed within an advancement reward function globally discards all subsequent commands
-   [MC-267062](https://bugs.mojang.com/browse/MC-267062) Server list ping icon doesn't display tooltip

---

# Minecraft 1.20.3 Pre-Release 3

We are now releasing the third Pre-Release for Minecraft 1.20.3, containing mostly bug fixes, as well as changes to server resource pack handling.

Happy Mining!

## Technical Changes

### World resource packs

#### Local storage

-   Only up to 20 server resource packs are cached

#### Packets

-   Client now sends additional updates about packs (like download success)

## Fixed bugs in 1.20.3 Pre-Release 3

-   [MC-265908](https://bugs.mojang.com/browse/MC-265908) Pool aliases don't redirect start pool
-   [MC-266060](https://bugs.mojang.com/browse/MC-266060) The word "ignored" is misspelled as "ingored" within the "commands.tick.query.rate.sprinting" string
-   [MC-266115](https://bugs.mojang.com/browse/MC-266115) Inconsistent Copper Door block drops when broken with tools weaker than stone
-   [MC-266144](https://bugs.mojang.com/browse/MC-266144) Copper Doors are not part of the #doors item tag
-   [MC-266145](https://bugs.mojang.com/browse/MC-266145) Copper Trapdoors are not part of the #trapdoors item tag
-   [MC-266189](https://bugs.mojang.com/browse/MC-266189) Freezing the game during pick-up animation desyncs item position
-   [MC-266210](https://bugs.mojang.com/browse/MC-266210) Dragon respawn is unable to be frozen with /tick freeze
-   [MC-266335](https://bugs.mojang.com/browse/MC-266335) Copper Doors/Trapdoors have wrong Blast Resistance
-   [MC-266903](https://bugs.mojang.com/browse/MC-266903) Incorrect part of copper door texture
-   [MC-266920](https://bugs.mojang.com/browse/MC-266920) Server Resource Packs Setting disabled no longer overridden by require-resource-pack
-   [MC-266948](https://bugs.mojang.com/browse/MC-266948) You can run "/summon wind\_charge" without enabling the 1.21 datapack

---

# Minecraft 1.20.3 Pre-Release 2

Hello again! The stabilization phase for 1.20.3 release continues. This Pre-Release brings more bug fixes.

## Changes

-   Breeze wind charges now break decorated pots, chorus flowers, and pointed dripstone blocks upon collision

## Fixed bugs in 1.20.3 Pre-Release 2

-   [MC-265291](https://bugs.mojang.com/browse/MC-265291) Command suggestions within the command block interface don't disappear when the console command field is unselected
-   [MC-265426](https://bugs.mojang.com/browse/MC-265426) Certain inputs pressed whilst in F3+Esc Pause will be carried out after game is unpaused
-   [MC-265772](https://bugs.mojang.com/browse/MC-265772) A command with multiple redirect modifiers can ignore "maxCommandChainLength"
-   [MC-265788](https://bugs.mojang.com/browse/MC-265788) The "Start free Snapshot Realm" element can be selected or remain selected causing its tooltip to erroneously be visible when other interfaces are open
-   [MC-266075](https://bugs.mojang.com/browse/MC-266075) "Player teleports" not shown in subtitles when an ender pearl lands far from the thrower
-   [MC-266206](https://bugs.mojang.com/browse/MC-266206) Renamed arrows are reffered as just "Arrow" in the death message
-   [MC-266380](https://bugs.mojang.com/browse/MC-266380) Rain texture doesn't loop correctly
-   [MC-266439](https://bugs.mojang.com/browse/MC-266439) Decorated pots with loot table desync item consumption if it cannot be inserted in the pot
-   [MC-266496](https://bugs.mojang.com/browse/MC-266496) Wind Charge can not break Decorated Pots
-   [MC-266516](https://bugs.mojang.com/browse/MC-266516) Arrows on fire set breezes on fire, despite being deflected
-   [MC-266728](https://bugs.mojang.com/browse/MC-266728) The "styled" number format uses the resource location "result"
-   [MC-266886](https://bugs.mojang.com/browse/MC-266886) Backspace in Anvil no longer works when renaming an item
-   [MC-266890](https://bugs.mojang.com/browse/MC-266890) The minecraft:grass item does not get upgraded to minecraft:short\_grass

---

# Minecraft 1.20.3 Pre-Release 1

We're bringing you the first Pre-Release of 1.20.3 with updates to server resource pack handling and bug fixes!

## Technical Changes

-   The Data Pack version is now 26
-   The Resource Pack version is now 22
-   Changes to downloaded/world resource pack handling

### World resource packs

Changes apply to world resource packs (`resources.zip`), Realms resource packs and resource packs controlled by dedicated servers.

#### UI

-   Download screen has been replaced with a toast
-   World resource pack application will start together with chunk loading

#### Local storage

Downloaded packs are now stored in `downloads` directory (with different file organization than old `server-resource-packs`)

-   Files in this directory are no longer automatically cleaned (previously only up 10 packs were kept)
-   Additionally, inside this directory there is also log file `log.json` that stores information about downloaded files for debug purposes

#### Server config

Downloaded packs now have unique id (GUID/UUID) that can be used to differentiate them

-   This value for dedicated server pack can be configured with `resource-pack-id` option in `server.properties`
-   If the value is missing, it will be generated based on URL
-   If hash of a pack is not set, this pack will be redownloaded before every application
    -   Previously, if hash was missing, latest downloaded version of pack was applied

#### Packets

Some additional options are added for 3rd-party servers software:

-   Client can now accept multiple server resource packs
-   New packet was added to un-apply server resource packs
-   Resource packs are no longer cleaned when entering configuration phase

## Data Pack Version 26

-   Renamed `minecraft:grass` block and item to `minecraft:short_grass`

## Resource Pack Version 22

-   Renamed `minecraft:grass` block and item to `minecraft:short_grass`

## Fixed bugs in 1.20.3 Pre-Release 1

-   [MC-142160](https://bugs.mojang.com/browse/MC-142160) pausedTickDelta updated when the game is unpaused rather than paused
-   [MC-164316](https://bugs.mojang.com/browse/MC-164316) Resource pack update by a hash doesn't work
-   [MC-251126](https://bugs.mojang.com/browse/MC-251126) Server resource pack is not redownloaded when a hash mismatch is detected with the previously downloaded version
-   [MC-265927](https://bugs.mojang.com/browse/MC-265927) Edit box length restrictions can result in unpaired surrogate characters
-   [MC-265929](https://bugs.mojang.com/browse/MC-265929) Ctrl+Backspacing a word with non-BMP characters in an edit box deletes additional characters
-   [MC-266456](https://bugs.mojang.com/browse/MC-266456) Breezes in minecarts or boats are passive
-   [MC-266468](https://bugs.mojang.com/browse/MC-266468) Breeze cannot attack in deep water
-   [MC-266472](https://bugs.mojang.com/browse/MC-266472) Charged creeper / wither armor is rendered incorrectly
-   [MC-266507](https://bugs.mojang.com/browse/MC-266507) Number of block drops from TNT explosions is capped to 16
-   [MC-266563](https://bugs.mojang.com/browse/MC-266563) End Crystals and TNT Minecarts that explode without a source entity deal no damage at all
-   [MC-266571](https://bugs.mojang.com/browse/MC-266571) Breezes won't attack while under the effects of levitation status
-   [MC-266656](https://bugs.mojang.com/browse/MC-266656) The interpolation of particle, entity and block entity transforms is disrupted when pausing the game in singleplayer
-   [MC-266723](https://bugs.mojang.com/browse/MC-266723) Monsters Hunted advancement requires killing a Breeze even when they're disabled
-   [MC-266724](https://bugs.mojang.com/browse/MC-266724) scoreboard players reset no longer works
-   [MC-266729](https://bugs.mojang.com/browse/MC-266729) Unformatted objects in scoreboard error messages

---

# Minecraft 1.20.2 Release Candidate 2

A second Release Candidate for 1.20.2 is now available in the Minecraft Launcher. If no further critical issues are found, we still aim to release 1.20.2 later this week.

## Changes

-   Fixed a problem with Villagers and Wandering Traders suffocating when travelling up slopes in Minecarts

---

# Minecraft 1.20.2 Release Candidate 1

Here is the first (and hopefully last) release candidate for 1.20.2. Unless something critical pops up, no further changes will be made for the full release, which is planned for next week.

## Changes

-   The positions that all entities ride on minecarts have been adjusted to make more sense

## Fixed bugs in 1.20.2 Release Candidate 1

-   [MC-265238](https://bugs.mojang.com/browse/MC-265238) trade\_rebalance loot tables have a wrong type
-   [MC-265388](https://bugs.mojang.com/browse/MC-265388) Mobs now sit too high in minecarts

---

# Minecraft 1.20.2 Pre-Release 4

Here comes the fourth pre-release for 1.20.2. Much like the previous one, this pre-release contains some bug and crash fixes.

Happy Mining!

## Technical Changes

### Data Pack Changes

-   Added damage type tag `always_kills_armor_stands` for damage types that should always fully kill an Armor Stand

## Fixed bugs in 1.20.2 Pre-Release 4

-   [MC-265239](https://bugs.mojang.com/browse/MC-265239) Error in logs: java.lang.IllegalStateException: recursive call to sendBlockUpdated
-   [MC-265289](https://bugs.mojang.com/browse/MC-265289) Error in log: java.lang.IllegalStateException: onTrackingStart called during navigation iteration

---

# Minecraft 1.20.2 Pre-Release 3

We are now releasing the third pre-release for 1.20.2. As we are now on the final stabilisation stretch of 1.20.2, this pre-release contains some bug and crash fixes.

Happy Mining!

## Fixed bugs in 1.20.2 Pre-Release 3

-   [MC-264564](https://bugs.mojang.com/browse/MC-264564) Record attribute is stripped from records with no components
-   [MC-265296](https://bugs.mojang.com/browse/MC-265296) Player sits lower in minecarts
-   [MC-265335](https://bugs.mojang.com/browse/MC-265335) Hoglins can't be bred

---

# Minecraft 1.20.2 Pre-Release 2

Another pre-release this week with minor changes and some bug fixes.

## Recipe book search revert

We received a lot of great feedback on the changes to the Recipe Book search in the last pre-release, as well as a number of bugs. As we do not have time to address this feedback so close to release, we have reverted the change for now, but we may look into this again at a later time.

## Technical Changes

-   The resource pack version is now 18 accounting for the new icons in last pre-release

## Fixed bugs in 1.20.2 Pre-release 2

-   [MC-109346](https://bugs.mojang.com/browse/MC-109346) Newly rendered players always look south until they move their head
-   [MC-206182](https://bugs.mojang.com/browse/MC-206182) Cannot tab out of console text field of command block
-   [MC-235762](https://bugs.mojang.com/browse/MC-235762) Screenshots wider than 16384 pixels causes a crash / java.lang.OutOfMemoryError: Out of stack space
-   [MC-249702](https://bugs.mojang.com/browse/MC-249702) Server crash: java.lang.NullPointerException: Cannot invoke "com.google.gson.JsonArray.iterator()" because "$$1" is null
-   [MC-261119](https://bugs.mojang.com/browse/MC-261119) Accessibility button in the Welcome screen needs its own string
-   [MC-262754](https://bugs.mojang.com/browse/MC-262754) Change in AbstractScrollWidget breaks MultiLineEditBox click-to-move-cursor behaviour
-   [MC-264759](https://bugs.mojang.com/browse/MC-264759) Narrator narrates incorrect tab action in command block suggestions
-   [MC-265237](https://bugs.mojang.com/browse/MC-265237) Recipe book search no longer finds anything containing non-English characters
-   [MC-265241](https://bugs.mojang.com/browse/MC-265241) Recipe book search no longer finds relevant items in languages where compound words are not separated
-   [MC-265243](https://bugs.mojang.com/browse/MC-265243) Uncraftable variants of a craftable recipe are shown as craftable now
-   [MC-265244](https://bugs.mojang.com/browse/MC-265244) Macro arguments entered as floats are converted to scientific notation
-   [MC-265245](https://bugs.mojang.com/browse/MC-265245) Crafting book search doesn't find anything when a space is included in the search
-   [MC-265253](https://bugs.mojang.com/browse/MC-265253) Fullscreen Resolution value is untranslatable
-   [MC-265260](https://bugs.mojang.com/browse/MC-265260) Boats and rafts when placed turn south
-   [MC-265262](https://bugs.mojang.com/browse/MC-265262) Revoked recipes remain in the recipe book until relogging
-   [MC-265263](https://bugs.mojang.com/browse/MC-265263) Ender Pearl vanishes client side when enderPearlsVanishOnDeath is false
-   [MC-265264](https://bugs.mojang.com/browse/MC-265264) trade\_rebalance tags are not in the trade\_rebalance pack
-   [MC-265276](https://bugs.mojang.com/browse/MC-265276) Fire under naturally generated end crystals does not always emit light correctly
-   [MC-265280](https://bugs.mojang.com/browse/MC-265280) Mobs sometimes become invisible when you join a singleplayer world

---

# Minecraft 1.20.2 Pre-Release 1

Are you pre-pared for Pre-release 1 of 1.20.2? Moving into pre-releases means that, moving forward, you won't see any significant changes besides bug fixes and tweaks until the next snapshot cycle. It also means that we will be releasing more frequently than just Wednesdays, so keep your eyes peeled! However, Pre-release 1 brings new changes to the 'Villager Trade Rebalance' experiment, updates to Recipe Book search, command changes, and a new game rule!

Happy crafting!

## Changes

-   The Recipe Book search has been updated with the following changes:
    -   The search will only match the beginning of any word in the item's name
        -   For example, searching for "tor" will still show Torch and Redstone Torch but not Daylight Detector anymore
    -   All recipes, including those that have not been unlocked, will now show up in search results
    -   This will enable experienced players to find the recipes they are looking for (even if it hasn't been unlocked yet) without overwhelming new players
-   Updated structure icons on explorer maps sold by Cartographers
-   When villagers unlock new trades, the order of those trades in the UI is now always random instead of sometimes being deterministic

## Technical Changes

-   The data pack version is now 18
-   Client options are now sent during the configuration network phase when joining a server

### Data Pack Version 18

This data pack version removes the recently introduced `execute if function` and `return run` functionality. Flaws with those commands (see bugs [MC-264595](https://bugs.mojang.com/browse/MC-264595), [MC-264699](https://bugs.mojang.com/browse/MC-264699) and [MC-264710](https://bugs.mojang.com/browse/MC-264710)) require some substantial changes to fix, which we do not want to make close to a release.

These commands will instead be reintroduced early in the next snapshot series when we can take the time to iterate on and test them together with pack makers.

-   Removed `execute if|unless function` command form
-   Removed `return run` command form
-   Numbers used as macro arguments are now always inserted without suffixes, regardless of numeric type
-   Added game rule `enderPearlsVanishOnDeath`, controlling whether thrown ender pearls vanish when the player that threw them dies (default `true`)

## Experimental Features

### Villager Trade Rebalance Part 2

This pre-release updates the Villager Trade Rebalance experiment. This experiment has no effect on normal worlds. If you want to try these changes, you must turn on the Feature Toggle in the Experiments Menu when creating a new world. You can find more information about Feature Toggles [here](https://www.minecraft.net/article/testing-new-minecraft-features/feature-toggles-java-edition).

Thank you to everyone that has sent in their suggestions and feedback regarding the experimental trade change! We are trying out these changes to rebalance the villager trade system and make it more fair and fun for everyone. However, these changes are not yet final, and they will stay as experimental features while we continue to work on them. We appreciate your feedback on these changes. Visit [this link](https://aka.ms/VillagerTradingFeedback) to share your thoughts! We have been following the discussions about the previous Librarian and Wandering Trader updates and look forward to seeing the conversation continue.

#### Cartographer

Before now, Cartographers only sold maps to the Ocean Monument and Woodland Mansion. In this experiment Cartographers can sell seven new maps as well. These new maps each point to a different village or structure and can be used to find seven different biomes. This will help players who want to quickly find a specific location without waiting until they come across it by chance.

Cartographers from different biomes will sell a different selection of maps. Starting from one village, it will be possible to find every other village type by following maps from village to village.

Cartographers now sell 7 new maps: Desert Village Map, Jungle Explorer Map, Plains Village Map, Savanna Village Map, Snow Village Map, Swamp Explorer Map, and Taiga Village Map.

#### Armorer

The Armorer's trades have been updated with many changes.

The biggest change is that buying diamond armor now requires paying a small amount of Diamonds as well as Emeralds. This is meant to make the Armorer's diamond armor trades less useful at the start of the game when players don't have any Diamonds, while still giving a powerful advantage to advanced players who have spent some time collecting Diamonds.

Early-game players will find Armorers useful as a great source of iron armor, Shields and Emeralds.

Other changes include:

-   Most master-level Armorers buy Iron Blocks (and pay very well for them)
-   Chainmail armor is exclusively sold by the secret Jungle and Swamp Armorers
-   The Savanna Armorer sells cursed diamond armor at reduced prices
-   The Taiga Armorer can swap one piece of diamond armor for another

#### Structure Loot

Certain Enchanted Books now have a high chance of generating in some structures:

-   Ancient Cities: Mending
-   Mineshafts: Efficiency (I to V)
-   Pillager Outposts: Quick Charge (I to III)
-   Desert Temples: Unbreaking (I to III)
-   Jungle Temples: Unbreaking (I to III)

## Fixed bugs in 1.20.2 Pre-release 1

-   [MC-70127](https://bugs.mojang.com/browse/MC-70127) Some block state changes aren't communicated to clients
-   [MC-72721](https://bugs.mojang.com/browse/MC-72721) Chat messages show after death independent of chat setting
-   [MC-103800](https://bugs.mojang.com/browse/MC-103800) Sometimes armor stands won't update their visual rotation
-   [MC-119873](https://bugs.mojang.com/browse/MC-119873) The text used for the credits button within the title screen is untranslatable
-   [MC-154827](https://bugs.mojang.com/browse/MC-154827) Typo in splash text "Verlet intregration!"
-   [MC-177172](https://bugs.mojang.com/browse/MC-177172) Dash in villager/trader UI is hardcoded / untranslatable
-   [MC-248778](https://bugs.mojang.com/browse/MC-248778) The item count symbol within shulker box tooltips is untranslatable
-   [MC-248833](https://bugs.mojang.com/browse/MC-248833) The parentheses used before and after the warning label within the language menu are untranslatable
-   [MC-248844](https://bugs.mojang.com/browse/MC-248844) The page indicator symbol within the recipe book GUI is untranslatable
-   [MC-248846](https://bugs.mojang.com/browse/MC-248846) The colon used within the death screen to show the player's score is untranslatable
-   [MC-249355](https://bugs.mojang.com/browse/MC-249355) The hyphen used within the statistics menu to show a null value is untranslatable
-   [MC-252295](https://bugs.mojang.com/browse/MC-252295) The word "whilst" within several death messages isn't spelled in American English
-   [MC-252298](https://bugs.mojang.com/browse/MC-252298) Death messages relating to the Thorns enchantment don't contain conjunctions where appropriate
-   [MC-252316](https://bugs.mojang.com/browse/MC-252316) The word "burnt" within some death messages isn't spelled in American English
-   [MC-253241](https://bugs.mojang.com/browse/MC-253241) The player count indicator symbol within the multiplayer menu is untranslatable
-   [MC-253269](https://bugs.mojang.com/browse/MC-253269) The advancement progress indicator symbol within the advancements menu is untranslatable
-   [MC-253270](https://bugs.mojang.com/browse/MC-253270) The hyphen used within boss bars for raids is untranslatable
-   [MC-253278](https://bugs.mojang.com/browse/MC-253278) The percentage symbol used within the level loading screen to show the loading progress of the world is untranslatable
-   [MC-253281](https://bugs.mojang.com/browse/MC-253281) Text within filled map tooltips when advanced tooltips are hidden is untranslatable
-   [MC-253283](https://bugs.mojang.com/browse/MC-253283) The percentage and chunk indicator symbols used within the optimize world menu are untranslatable
-   [MC-253638](https://bugs.mojang.com/browse/MC-253638) The symbols used within shulker box tooltips to show random loot table contents are untranslatable
-   [MC-255418](https://bugs.mojang.com/browse/MC-255418) Vertical redstone dust placed against dropper/dispenser/hopper doesn't visually disappear when the dust above is removed
-   [MC-256777](https://bugs.mojang.com/browse/MC-256777) The two characters used within the tab list to show players' health are untranslatable
-   [MC-260819](https://bugs.mojang.com/browse/MC-260819) The "death.attack.message\_too\_long" string is missing an article before the word "stripped"
-   [MC-263133](https://bugs.mojang.com/browse/MC-263133) Inconsistent word usage in Out of Memory screen
-   [MC-264233](https://bugs.mojang.com/browse/MC-264233) Player is shown as Anonymous after dying and respawning
-   [MC-264574](https://bugs.mojang.com/browse/MC-264574) symlink does not work for root world folder
-   [MC-264615](https://bugs.mojang.com/browse/MC-264615) It takes several seconds for the absorption effect icon to display after obtaining the effect
-   [MC-264656](https://bugs.mojang.com/browse/MC-264656) Regular golden apples don't increase the number of gold hearts if you previously ate an enchanted golden apple and then took damage
-   [MC-264657](https://bugs.mojang.com/browse/MC-264657) Absorption gold heart refilling is determined by whether the low level and the high level have the same hideParticles parameter
-   [MC-264658](https://bugs.mojang.com/browse/MC-264658) Only integer numeric data type can be used in macro
-   [MC-264809](https://bugs.mojang.com/browse/MC-264809) Redstone comparators cause redstone dust connection issue
-   [MC-265053](https://bugs.mojang.com/browse/MC-265053) Programmer Art lapis lazuli outline texture in enchanting table UI incorrectly uses the old formatting
-   [MC-265060](https://bugs.mojang.com/browse/MC-265060) Missing sprite for error in Loom GUI (loom.png)
-   [MC-265126](https://bugs.mojang.com/browse/MC-265126) 'requirements' field can no longer be skipped in advancements
-   [MC-265151](https://bugs.mojang.com/browse/MC-265151) The "(Unknown)" string that's displayed when being banned from a server for an unknown reason is untranslatable
-   [MC-265209](https://bugs.mojang.com/browse/MC-265209) Switching to protocol "CONFIGURATION" causes race condition
-   [MC-265213](https://bugs.mojang.com/browse/MC-265213) The chat message from the /random command says "between 1 and 6" instead of "1 to 6"

---

# Minecraft 1.20.1 Release Candidate 1

We're now releasing a Release Candidate for a first minor update for Minecraft 1.20. This minor update will be a stability issue to fix some critical issues found after the release of Minecraft 1.20.

## Fixed bugs in 1.20.1 Release Candidate 1

-   Fixed a disk permissions-related crash
-   [MC-263244](https://bugs.mojang.com/browse/MC-263244) The realms invitation icon that appears on the realms button in the main menu is displayed incorrectly
-   [MC-263245](https://bugs.mojang.com/browse/MC-263245) Buttons in the "Add Realm" interface within the realms menu no longer render
-   [MC-263296](https://bugs.mojang.com/browse/MC-263296) Game softlocks after cancelling joining a server
-   [MC-263340](https://bugs.mojang.com/browse/MC-263340) Incorrect Protochunk#setStatus call on chunk generate

---

# Minecraft 1.20 Release Candidate 1

We are now releasing the first, and hopefully only, release-candidate for 1.20, containing two bug fixes. If all goes well, no further changes will be made before the full release of Minecraft 1.20 on Wednesday next week.

Happy crafting!

## Fixed bugs in 1.20 Release Candidate 1

-   [MC-256477](https://bugs.mojang.com/browse/MC-256477) Knowledge books can't be placed in chiseled bookshelves
-   [MC-262853](https://bugs.mojang.com/browse/MC-262853) Pitcher plant breaks and floats when growing without enough light

---

# Minecraft 1.20 Pre-release 7

Pre-release 7 for Minecraft 1.20 is now available in the Minecraft Launcher. This pre-release adds validation of symbolic links and fixes a bug.

### Changes

To improve safety, the game will now detect symbolic links used inside world directory. For a detailed explanation, check our [help article](https://aka.ms/MinecraftSymLinks).

-   If the target of a symbolic link is not on the user-configured allow-list, the game will not proceed with loading the world
    -   Note: world directory itself can still be linked
-   The list of allowed symbolic link targets is stored in file `allowed_symlinks.txt` in client or server top directory
-   The file consists of entries (one per line) with following formats allowed:
    -   Lines starting with `#` are comments and are ignored
    -   `[type]pattern`, where `type` can be `glob`, `regex` or `prefix`
        -   `prefix` matches start of path with given pattern (so for `/test` paths `/test`, `/test/` and `/test/foo.txt` would match)
        -   `regex` matches regular expression against whole path
        -   `glob` uses OS-specific path matching mechanism (for example `*.txt` would usually match files with `txt` extension)
        -   Note: paths will use OS-specific separators
    -   `pattern`, which uses default `prefix` type

## Fixed bug in 1.20 Pre-release 7

-   [MC-257778](https://bugs.mojang.com/browse/MC-257778) Bamboo Mosaic Slabs and Stairs are not in the #slabs and #stairs block and item tags

---

# Minecraft 1.20 Pre-Release 6

The sixth pre-release of the 1.20 update is here, yet again containing more bug fixes.

Happy mining!

## Technical Changes

-   `"item": "minecraft:air"` can no longer be used in datapack recipes
-   Ingredients in array form are now also allowed in `smithing_trim` and `smithing_transform` recipes on fields `template`, `base` and `addition`
    -   Those fields also allow empty arrays, which signalize that slot needs to be left empty

### Loot tables

#### Random sequences

The ID of the random sequence is now an optional field. If no sequence name is given, loot is drawn using a non-deterministic random source.

## Fixed bugs in 1.20 Pre-Release 6

-   [MC-237042](https://bugs.mojang.com/browse/MC-237042) Killing players in the sneaking state that have their sneak option set to "Toggle" in their accessibility settings, results in other players not being able to see them in this state when they respawn
-   [MC-241326](https://bugs.mojang.com/browse/MC-241326) Thomas Guimbretière's name is listed twice and misspelt in the credits
-   [MC-260411](https://bugs.mojang.com/browse/MC-260411) Re-summoned dragons don't spawn end gateways when exiting the world before killing the dragon
-   [MC-262340](https://bugs.mojang.com/browse/MC-262340) Iron Golems can spawn on transparent blocks
-   [MC-262575](https://bugs.mojang.com/browse/MC-262575) Company names are still inconsistent in the credits

---

# Minecraft 1.20 Pre-Release 5

Summer is around the corner here at the office, and what better time to stay inside and try out the new pre-release?!

Happy crafting, you wonderful people!

## Library version updates

-   `uniform` font has been updated to use Unifont 15.0.03 (was 15.0.01 last pre-release)

## Fixed bugs in 1.20 Pre-release 5

-   [MC-120158](https://bugs.mojang.com/browse/MC-120158) Anvils and other falling\_blocks with HurtEntities set to true kill items and xp orbs
-   [MC-261294](https://bugs.mojang.com/browse/MC-261294) Jack o'lantern can be placed on the player or armor stand head without commands and without appearing the blur
-   [MC-262334](https://bugs.mojang.com/browse/MC-262334) Item display entities have wrong lighting when they're rotated
-   [MC-262504](https://bugs.mojang.com/browse/MC-262504) Recipes for colored wool, carpets, and beds in the recipe book are not grouped
-   [MC-262513](https://bugs.mojang.com/browse/MC-262513) Blocks placed in the spot of a previously broken block will display the first frame of the breaking animation until updated
-   [MC-262514](https://bugs.mojang.com/browse/MC-262514) Unbreakable blocks display the first breaking animation frame when attempting to mine them
-   [MC-262690](https://bugs.mojang.com/browse/MC-262690) The player can still jump from the edge of the honey block
-   [MC-262730](https://bugs.mojang.com/browse/MC-262730) Biomes being partially overwritten / regenerated in 1.20pre2 inside old world
-   [MC-262773](https://bugs.mojang.com/browse/MC-262773) Markers, interaction, and display entities prevent weighted pressure plates from deactivating
-   [MC-262778](https://bugs.mojang.com/browse/MC-262778) Losing control of a ridden mob with levitation and then re-gaining control causes levitation to persist indefinitely
-   [MC-262797](https://bugs.mojang.com/browse/MC-262797) Book model not rendering in Enchanting Table GUI
-   [MC-262801](https://bugs.mojang.com/browse/MC-262801) Z-fighting occurs on trimmed enchanted armor in the inventory

---

# Minecraft 1.20 Pre-Release 4

We've now released 1.20 Pre-release 4, resolving a crash in the Multiplayer screen introduced in the last pre-release.

---

# Minecraft 1.20 Pre-Release 3

We are now releasing 1.20 Pre-release 3, containing even more bug fixes.

Happy crafting!

## Fixed bugs in 1.20 Pre-release 3

-   [MC-121788](https://bugs.mojang.com/browse/MC-121788) Jump boost, slow falling and levitation don't apply to ridden horses, pigs or striders until after a relog
-   [MC-152258](https://bugs.mojang.com/browse/MC-152258) Riding an entity with slow falling will not stop fall damage
-   [MC-181280](https://bugs.mojang.com/browse/MC-181280) Incorrect textures can sometimes be displayed
-   [MC-259912](https://bugs.mojang.com/browse/MC-259912) Saddled horses can infinitely retain Levitation effect
-   [MC-260653](https://bugs.mojang.com/browse/MC-260653) Markers, interaction, and display entities can prevent pressure plates from deactivating
-   [MC-260903](https://bugs.mojang.com/browse/MC-260903) Less recent attacker can be credited for kill
-   [MC-261202](https://bugs.mojang.com/browse/MC-261202) Teleporting a display entity jitters the player riding on the stack
-   [MC-262324](https://bugs.mojang.com/browse/MC-262324) Teleporting a mob while riding it doesn't work well
-   [MC-262505](https://bugs.mojang.com/browse/MC-262505) Iron golems can produce particles for blocks they're not colliding with
-   [MC-262593](https://bugs.mojang.com/browse/MC-262593) The word "occurred" is misspelled as "occured" within two realms strings
-   [MC-262684](https://bugs.mojang.com/browse/MC-262684) Game icon has low resolution
-   [MC-262709](https://bugs.mojang.com/browse/MC-262709) Dispensers do not dispense boats at the correct height
-   [MC-262712](https://bugs.mojang.com/browse/MC-262712) Alternative recipes in recipe book do not appear on right-click
-   [MC-262714](https://bugs.mojang.com/browse/MC-262714) The "key.keyboard.unknown" string displayed within the key binds menu is improperly capitalized

---

# Minecraft 1.20 Pre-Release 2

We are now releasing the second pre-release for Minecraft 1.20. This pre-release contains bug fixes.

Happy Mining!

## Technical Changes

-   Game will now display message box on startup if user enabled text-to-speech functionality, but it is not available
-   `"item": "minecraft:air"` can now be used in datapack recipes to denote an ingredient that will match an empty slot.
    -   The following recipe types, however, do not allow for an empty ingredient:
        -   `minecraft:crafting_shaped`
        -   `minecraft:crafting_shapeless`
        -   `minecraft:smelting`
        -   `minecraft:blasting`
        -   `minecraft:smoking`
        -   `minecraft:campfire_cooking`
        -   `minecraft:stonecutting`

## Fixed bugs in 1.20 Pre-release 2

-   [MC-1310](https://bugs.mojang.com/browse/MC-1310) Dispensed boats and rafts get stuck inside of dispensers used to place them
-   [MC-124327](https://bugs.mojang.com/browse/MC-124327) Changing the name of an item and then emptying the text field in an anvil doesn't make the rename unavailable, keeps last non-empty name on output item
-   [MC-132076](https://bugs.mojang.com/browse/MC-132076) Lowercase Letters in controls menu + "Not Bound" is missing
-   [MC-159633](https://bugs.mojang.com/browse/MC-159633) Command feedback messages are unnecessarily created during function execution
-   [MC-165562](https://bugs.mojang.com/browse/MC-165562) Command suggestion report "incorrect argument" when cursor is at the start of a node without suggestions
-   [MC-175504](https://bugs.mojang.com/browse/MC-175504) Single quotation marks are not supported in NBT paths
-   [MC-220096](https://bugs.mojang.com/browse/MC-220096) Graphics warning button(s) improperly capitalized
-   [MC-224976](https://bugs.mojang.com/browse/MC-224976) NativeImage.setPixelRGBA throws exception with message getPixelRGBA
-   [MC-226344](https://bugs.mojang.com/browse/MC-226344) Changing the "Owner" tag of a projectile doesn't affect the outcome of the projectile unless the world is reloaded
-   [MC-237960](https://bugs.mojang.com/browse/MC-237960) New potion effect GUI doesn't work when using Programmer Art
-   [MC-250197](https://bugs.mojang.com/browse/MC-250197) Glass bottles are inconsistently referred to throughout some advancement description strings
-   [MC-252216](https://bugs.mojang.com/browse/MC-252216) 65540: Invalid scancode -1 logged in key bind menu when an option is unbound
-   [MC-252408](https://bugs.mojang.com/browse/MC-252408) Chat restriction strings consist of inconsistent concluding punctuation
-   [MC-256833](https://bugs.mojang.com/browse/MC-256833) Ridable entities that can be steered build up fall damage when on climbable blocks
-   [MC-257052](https://bugs.mojang.com/browse/MC-257052) You cannot double-click on languages within the "Language" menu to select them
-   [MC-257370](https://bugs.mojang.com/browse/MC-257370) Buckets of fish are not sorted in the same order as the fish items
-   [MC-257512](https://bugs.mojang.com/browse/MC-257512) Dead tube coral in creative inventory is in wrong order
-   [MC-258360](https://bugs.mojang.com/browse/MC-258360) Horse armor loses its NBT data when equipped on horses via right-clicking
-   [MC-258461](https://bugs.mojang.com/browse/MC-258461) The "Detect structure size and position:" string displayed within the structure block GUI is improperly capitalized
-   [MC-260468](https://bugs.mojang.com/browse/MC-260468) Wither rose is not grouped with other small flowers in the creative inventory
-   [MC-260602](https://bugs.mojang.com/browse/MC-260602) 'data modify from string' index failure does not return 0 for 'execute store success'
-   [MC-260711](https://bugs.mojang.com/browse/MC-260711) Some words within "/datapack list" command feedback messages are always pluralized
-   [MC-260712](https://bugs.mojang.com/browse/MC-260712) Some words within "/scoreboard" command feedback messages are always pluralized
-   [MC-260713](https://bugs.mojang.com/browse/MC-260713) Some words within "/team" command feedback messages are always pluralized
-   [MC-260715](https://bugs.mojang.com/browse/MC-260715) Some words within "/bossbar" command feedback messages are always pluralized
-   [MC-260716](https://bugs.mojang.com/browse/MC-260716) Some words within "/fill", "/fillbiome", and "/clone" command feedback messages are always pluralized
-   [MC-261024](https://bugs.mojang.com/browse/MC-261024) /execute if loaded does not guarantee entities are loaded
-   [MC-261080](https://bugs.mojang.com/browse/MC-261080) Player can fall through scaffolding when loading a world
-   [MC-261233](https://bugs.mojang.com/browse/MC-261233) Minecart movement is not reliably detected by sculk sensors
-   [MC-261349](https://bugs.mojang.com/browse/MC-261349) Chiseled Bookshelf won't rotate when placed as part of a structure
-   [MC-261433](https://bugs.mojang.com/browse/MC-261433) Shield doesn't block TNT explosion
-   [MC-261816](https://bugs.mojang.com/browse/MC-261816) Most two block tall flowers do not block enchanting tables / are part of #minecraft:replaceable
-   [MC-261988](https://bugs.mojang.com/browse/MC-261988) Inconsistency with Mangrove Roots and Leaves in the Creative Tab
-   [MC-262033](https://bugs.mojang.com/browse/MC-262033) The command block GUI remains open when the said command block is destroyed
-   [MC-262106](https://bugs.mojang.com/browse/MC-262106) Smithing recipe must have template to work
-   [MC-262135](https://bugs.mojang.com/browse/MC-262135) Recipe book GUI is positioned incorrectly
-   [MC-262181](https://bugs.mojang.com/browse/MC-262181) NBSP is a valid invisible character that can be used to rename items to have blank names
-   [MC-262213](https://bugs.mojang.com/browse/MC-262213) Baby sniffer's head is smaller on the first frame of existing
-   [MC-262310](https://bugs.mojang.com/browse/MC-262310) Telemetry description strings consist of inconsistent concluding punctuation
-   [MC-262311](https://bugs.mojang.com/browse/MC-262311) The "telemetry.event.game\_load\_times.description" string is missing an article before the word "execution"
-   [MC-262355](https://bugs.mojang.com/browse/MC-262355) Death messages for falling from climbable blocks do not work
-   [MC-262440](https://bugs.mojang.com/browse/MC-262440) Sniffers can sniff while in love and pathfinding to their lover
-   [MC-262441](https://bugs.mojang.com/browse/MC-262441) Baby sniffers stand a bit too far away from players that are tempting them
-   [MC-262445](https://bugs.mojang.com/browse/MC-262445) The text cursor no longer renders above text
-   [MC-262446](https://bugs.mojang.com/browse/MC-262446) Text within buttons renders above the semi-transparent black lines at the edges of menus
-   [MC-262471](https://bugs.mojang.com/browse/MC-262471) Random skylight underwater where it shouldn't be, that cuts off at the chunk border
-   [MC-262506](https://bugs.mojang.com/browse/MC-262506) Parts of beds render through the alternative recipe GUI in the recipe book
-   [MC-262508](https://bugs.mojang.com/browse/MC-262508) Torchflower\_crop causes the game to crash and locks the world when pollinated by bees
-   [MC-262518](https://bugs.mojang.com/browse/MC-262518) The "mco.configure.world.uninvite.player" string contains an unnecessary space before the question mark
-   [MC-262531](https://bugs.mojang.com/browse/MC-262531) "death.attack.genericKill.player" displays raw translation string (is untranslated)

---

# Minecraft 1.20 Pre-release 1 

It is now time for the first Pre-release for Minecraft 1.20: The Trails and Tales update!

From now on, you should mostly see bugs being fixed. In addition to that, pre-releases don't follow the regular snapshot cadence of releasing on Wednesdays, so keep an eye out for the next pre-release.

As always, a big thank you to the community for your feedback, bugs reported, and awesome ideas throughout the snapshot series. Let the pre-releases commence!

## Changes

-   Colored Wool, Carpets and Beds can now be dyed to any other color

## Technical Changes

-   Added new damage types: `outside_border` and `generic_kill`
-   Random sequences for loot tables are now deterministic
-   Changes in `server.properties` encoding
-   `string` data sources for the `data` command now accept negative boundaries, which are interpreted as index counted from the end of the string

### Damage Types

-   Players outside the world border are now hurt by the damage type `outside_border` instead of `in_wall`
-   Forcibly removing an entity using i.e. the `/kill` command now uses damage type `generic_kill` instead of `out_of_world`

### Loot Table Random Sequences

The game now uses named random sequences to deterministically produce loot for loot tables. Each random sequence produces a unique sequence based on the world seed and sequence ID, which means a loot table will produce the same results when ran with the same parameters in the same world.

The ID of the random sequence to use for a loot table is specified in a new field called `random_sequence`.

### `server.properties`

-   File is now read in UTF-8 initially, with previous encoding (ISO 8859-1/Latin 1) as a fallback
-   File is now written with UTF-8 encoding

## Fixed bugs in 1.20 Pre-release 1

-   [MC-180](https://bugs.mojang.com/browse/MC-180) When reaching the other side of a nether portal the animation plays forever until stepped out of
-   [MC-2215](https://bugs.mojang.com/browse/MC-2215) Encoding errors in server.properties
-   [MC-18060](https://bugs.mojang.com/browse/MC-18060) Several realms strings are untranslatable
-   [MC-35078](https://bugs.mojang.com/browse/MC-35078) Breaking animation is one frame off
-   [MC-123081](https://bugs.mojang.com/browse/MC-123081) Placing an end crystal when entering The End prevents Ender Dragon from spawning
-   [MC-146582](https://bugs.mojang.com/browse/MC-146582) When entering spectator mode while standing on the ground, the player moves down by 0.19051 blocks, which makes you fall down
-   [MC-195781](https://bugs.mojang.com/browse/MC-195781) The "Include entities:" string displayed within the structure block GUI is improperly capitalized
-   [MC-195825](https://bugs.mojang.com/browse/MC-195825) "datapacks" string is inconsistent with "data pack" string in "datapackFailure.title" text
-   [MC-198202](https://bugs.mojang.com/browse/MC-198202) Options background texture does not match dirt texture
-   [MC-203039](https://bugs.mojang.com/browse/MC-203039) Incorrect use of colon in options.hideMatchedNames.tooltip
-   [MC-206548](https://bugs.mojang.com/browse/MC-206548) Leash knot subtitles are not properly capitalized
-   [MC-226454](https://bugs.mojang.com/browse/MC-226454) The "Light as a Rabbit" advancement description has no space after the ellipsis
-   [MC-236606](https://bugs.mojang.com/browse/MC-236606) Lightning bolt related string lacks capitalization
-   [MC-241736](https://bugs.mojang.com/browse/MC-241736) Company names are still inconsistent and partly misspelled in the credits
-   [MC-250571](https://bugs.mojang.com/browse/MC-250571) Gamerule description strings within the world creation menu consist of inconsistent concluding punctuation
-   [MC-256424](https://bugs.mojang.com/browse/MC-256424) Game mode is sometimes referred to as "gamemode"
-   [MC-257336](https://bugs.mojang.com/browse/MC-257336) Some chiseled bookshelf interaction subtitles are improperly capitalized
-   [MC-262006](https://bugs.mojang.com/browse/MC-262006) Melon and Pumpkin are in the default '#maintains\_farmland' tag despite not maintain farmland
-   [MC-262208](https://bugs.mojang.com/browse/MC-262208) In the credits, "Lionbridge" is misspelt in one place (no "g")
-   [MC-262253](https://bugs.mojang.com/browse/MC-262253) Music composers not listed in credits
-   [MC-262265](https://bugs.mojang.com/browse/MC-262265) Changing resource pack that overrides a font crashes JVM
-   [MC-262296](https://bugs.mojang.com/browse/MC-262296) Rabbits are no longer affected by jump boost
-   [MC-262300](https://bugs.mojang.com/browse/MC-262300) Menu text is now rendered in front of the Mojang Studios loading screen fade animation
-   [MC-262304](https://bugs.mojang.com/browse/MC-262304) The stepping\_on predicate condition does not correctly succeed on trapdoors
-   [MC-262308](https://bugs.mojang.com/browse/MC-262308) Entities do not stick to honey blocks pushed by pistons if their center isn't over the honey block
-   [MC-262313](https://bugs.mojang.com/browse/MC-262313) Nether won't load in upgraded worlds
-   [MC-262317](https://bugs.mojang.com/browse/MC-262317) Items don't respect properties of the block they are supported on
-   [MC-262351](https://bugs.mojang.com/browse/MC-262351) Worldgen deadlock caused by supporting block checks
-   [MC-262363](https://bugs.mojang.com/browse/MC-262363) Player can still gain a normal jump off of a honey block with precise timing
-   [MC-262424](https://bugs.mojang.com/browse/MC-262424) Sprinting particles on the edges of blocks are still incorrect

---

# Minecraft 1.19.4 Release Candidate 3

A third Release Candidate is now available for Minecraft 1.19.4, fixing one issue in preparation for the full release of Minecraft 1.19.4 tomorrow.

Happy Crafting!

## Fixed bug in 1.19.4 Release Candidate 3

-   [MC-260901](https://bugs.mojang.com/browse/MC-260901) Guardians deal thorns damage even while their spikes are retracted

---

# Minecraft 1.19.4 Release Candidate 2

We are releasing a second Release Candidate for 1.19.4 to fix a few critical issues.

## Fixed bugs in 1.19.4 Release Candidate 2

-   [MC-260677](https://bugs.mojang.com/browse/MC-260677) Advancement icons handle translucent textures wrong
-   [MC-260878](https://bugs.mojang.com/browse/MC-260878) Guardians apply Thorns damage when hit by projectiles
-   [MC-260881](https://bugs.mojang.com/browse/MC-260881) Transparent 3D models dont render properly in the GUI/Hotbar

---

# Minecraft 1.19.4 Release Candidate 1

Here is the first (and hopefully last) release candidate for 1.19.4. Unless something critical pops up, no further changes will be made for the full release, which is planned for next week.

Happy mining!

## Technical Changes

Changes to display entity interpolation:

-   interpolation always starts at the beginning on client tick
-   field `interpolation_start` is replaced with `start_interpolation`, with a different meaning
-   `start_interpolation` describes amount of ticks from the start of next client tick after receiving an update to start of interpolation
    -   for example value `0` means that interpolation will start at the beginning of next client tick after receiving the update
-   `start_interpolation` is not stored in entity data
    -   when using data commands, if interpolated value is updated, but `start_interpolation` is not present in modified tag, interpolation will continue from the time of previous update, but with new values

## Fixed bugs in 1.19.4-rc1

-   [MC-260857](https://bugs.mojang.com/browse/MC-260857) Display entities summoned with initial transformation interpolate incorrectly from default transformation during next transformation

---

# Minecraft 1.19.4 Pre-Release 4

We are now releasing the fourth pre-release for Minecraft 1.19.4. This pre-release contains bug fixes, some cherry texture tweaks, and a button in the options menu to view the game credits.

Happy mining!

## Changes

-   Added "Credits & Attribution" button in the Options menu

## Technical Changes

### Display entities

-   When a new interpolation is started, it now starts from the current state instead of the final state

## Changes to Experimental Features

-   The textures for the Cherry Tree Leaves and Cherry Sign have been updated

## Fixed bugs in 1.19.4 Pre-release 4

-   [MC-172305](https://bugs.mojang.com/browse/MC-172305) Some words within "/clear" command feedback messages are always pluralized
-   [MC-193497](https://bugs.mojang.com/browse/MC-193497) Tall Grass & Large Fern are rendered incorrectly when an Enderman is holding them
-   [MC-210816](https://bugs.mojang.com/browse/MC-210816) Sculk sensors are not activated upon breaking shulker bullets
-   [MC-211071](https://bugs.mojang.com/browse/MC-211071) Some words within "/spreadplayers" command feedback messages are always pluralized
-   [MC-255060](https://bugs.mojang.com/browse/MC-255060) Some words within "/function" and "/schedule" command feedback messages are always pluralized
-   [MC-255087](https://bugs.mojang.com/browse/MC-255087) Some words within "/worldborder" command feedback messages are always pluralized
-   [MC-256270](https://bugs.mojang.com/browse/MC-256270) Some words within some multiplayer command feedback messages are always pluralized
-   [MC-257784](https://bugs.mojang.com/browse/MC-257784) Some words within some realms strings are always pluralized
-   [MC-259259](https://bugs.mojang.com/browse/MC-259259) Hostile mobs can't replace armor they're wearing with better armor
-   [MC-259603](https://bugs.mojang.com/browse/MC-259603) The "selectWorld.gameMode.hardcore.info" string displayed within the create new world GUI is improperly capitalized
-   [MC-259610](https://bugs.mojang.com/browse/MC-259610) Gamemode information strings consist of inconsistent concluding punctuation
-   [MC-259637](https://bugs.mojang.com/browse/MC-259637) Natural spider potion effects still last max int instead of infinity
-   [MC-259702](https://bugs.mojang.com/browse/MC-259702) The "death.attack.hotFloor.player" string is missing an article before the word "danger"
-   [MC-259714](https://bugs.mojang.com/browse/MC-259714) Death messages relating to dragons' breath aren't possessive
-   [MC-259715](https://bugs.mojang.com/browse/MC-259715) The "death.attack.message\_too\_long" string is missing an article before the word "message"
-   [MC-259792](https://bugs.mojang.com/browse/MC-259792) The "selectWorld.experimental.message" string is missing a serial comma
-   [MC-259853](https://bugs.mojang.com/browse/MC-259853) block\_display transform breaks when shearing
-   [MC-259896](https://bugs.mojang.com/browse/MC-259896) item\_display has a wrong default value
-   [MC-260068](https://bugs.mojang.com/browse/MC-260068) The sounds of using brushes don't show any subtitles
-   [MC-260196](https://bugs.mojang.com/browse/MC-260196) Entities don't recognize decorated pots as obstacles when pathfinding
-   [MC-260214](https://bugs.mojang.com/browse/MC-260214) Entities will often spin while pathfinding on top of decorated pots
-   [MC-260215](https://bugs.mojang.com/browse/MC-260215) Water within waterlogged decorated pots doesn't flow
-   [MC-260265](https://bugs.mojang.com/browse/MC-260265) Lighting does not transform with display entities
-   [MC-260285](https://bugs.mojang.com/browse/MC-260285) Applying an identical transformation will result in the previous interpolation repeating instead of having no effect
-   [MC-260321](https://bugs.mojang.com/browse/MC-260321) Sniffers in the distance have lots of Z-fighting on their body
-   [MC-260429](https://bugs.mojang.com/browse/MC-260429) The texture of the Cherry Sign post has an inconsistency with the other Signs
-   [MC-260497](https://bugs.mojang.com/browse/MC-260497) Villager trade button interferes with the slider
-   [MC-260642](https://bugs.mojang.com/browse/MC-260642) tall\_grass and large\_fern display gray as block\_display entities
-   [MC-260681](https://bugs.mojang.com/browse/MC-260681) UI click sounds in Create New World menu tabs are louder than they should be
-   [MC-260735](https://bugs.mojang.com/browse/MC-260735) You can block falling anvils and dripstone with a shield
-   [MC-260764](https://bugs.mojang.com/browse/MC-260764) Right-clicking will focus text fields
-   [MC-260765](https://bugs.mojang.com/browse/MC-260765) Right-clicking will move packs in the pack edit screen
-   [MC-260774](https://bugs.mojang.com/browse/MC-260774) Players are kicked from server environments due to chat message validation failures when attempting to type in chat after having previously altered chat settings

---

# Minecraft 1.19.4 Pre-Release 3

We're back again with the third pre-release for Minecraft 1.19.4. This pre-release contains more bug fixes, as well as color adjustments for potions. The archer pottery shard texture has also been updated. ​ Happy mining! ​

## Changes

-   Potions have had their colors adjusted to make them more distinguishable from each other

​

## Technical Changes

-   Pressing F3+S will now dump contents of dynamic textures (like atlases, maps, etc.) to `screenshots/debug/`

​

## Experimental Feature Changes

### Pottery Shards

-   Updated the textures of the Archer Pottery Shard based on community feedback

​

## Fixed bugs in 1.19.4-pre3

-   [MC-148458](https://bugs.mojang.com/browse/MC-148458) Ridable mobs aren't knocked back upon death
-   [MC-250486](https://bugs.mojang.com/browse/MC-250486) Error saving GUI scale option when toggling fullscreen while fullscreen resolution is changed
-   [MC-258561](https://bugs.mojang.com/browse/MC-258561) Endermen teleport away instead of taking damage from end crystal, TNT and wither skull explosions
-   [MC-259666](https://bugs.mojang.com/browse/MC-259666) Reloading a resource pack that has a custom texture atlas for a second time causes severe FPS lag on the client
-   [MC-260277](https://bugs.mojang.com/browse/MC-260277) potted\_cherry\_sapling and potted\_torchflower not part of #flower\_pots block tag
-   [MC-260451](https://bugs.mojang.com/browse/MC-260451) Inventory character with semi-transparent outer skin layer not rendered correctly when looking right
-   [MC-260456](https://bugs.mojang.com/browse/MC-260456) Certain potions are still indistinguishable by color
-   [MC-260470](https://bugs.mojang.com/browse/MC-260470) Endermen can't dodge arrows fired from a dispenser
-   [MC-260474](https://bugs.mojang.com/browse/MC-260474) Players and mobs are no longer affected by knockback upon death
-   [MC-260501](https://bugs.mojang.com/browse/MC-260501) Cannot delete previous snapshot world in launcher
-   [MC-260579](https://bugs.mojang.com/browse/MC-260579) Crash when a guardian deals damage to itself after removing thorns from avoids\_guardian\_thorns
-   [MC-260605](https://bugs.mojang.com/browse/MC-260605) Repeating command block summoning piglins/villagers causes memory usage to constantly increase
-   [MC-260627](https://bugs.mojang.com/browse/MC-260627) Dolphins with passengers either accelerate to ludicrous speed or are immobilized completely

---

# Minecraft 1.19.4 Pre-Release 2

We are now releasing the second pre-release for Minecraft 1.19.4. This pre-release contains bug fixes, as well as an updated model for the decorated pot.

As a reminder, the pre-release cycle for 1.19.4 will continue to contain mostly bug fixes.

Happy mining!

## Technical Changes

### Mob Behavior

-   Only mobs in the `dismounts_underwater` entity tag will now force the rider to dismount when underwater

## Changes for Experimental Features

### Cherry Biome and Wood Set

-   Updated the texture for Pink Petals
-   Updated textures for the Cherry Door, Cherry Sapling, and Cherry Boat with Chest

### Decorated Pot

-   Updated the neck of the Decorated Pot model
    -   With the former pot we decided to make the pot's neck clip with blocks, so it would be extra flexible to build with
    -   However, this had some Z-fighting issues where 2 objects are in the same exact position and cause flickering
    -   This is prevented with the new and more complex block model

## Fixed bugs in 1.19.4 Pre-release 2

-   [MC-137552](https://bugs.mojang.com/browse/MC-137552) Loaded crossbows look unloaded in item frames and when dropped on the ground
-   [MC-229293](https://bugs.mojang.com/browse/MC-229293) Casting issue: Broken blocks drop items in the wrong position at high distances
-   [MC-259208](https://bugs.mojang.com/browse/MC-259208) Zombie riding chicken or skeleton riding spider not considered controllers by /execute on controller command
-   [MC-259609](https://bugs.mojang.com/browse/MC-259609) Tooltips from selected buttons and sliders don't disappear when expected
-   [MC-259831](https://bugs.mojang.com/browse/MC-259831) UI Buttons break certain resource packs as of 23w06a
-   [MC-259839](https://bugs.mojang.com/browse/MC-259839) Duplicated "minecraft:freeze" in damage\_type tag "bypasses\_armor"
-   [MC-259885](https://bugs.mojang.com/browse/MC-259885) Upon entering the credits screen while in F1 mode, the Minecraft: Java Edition logo does not display correctly
-   [MC-259961](https://bugs.mojang.com/browse/MC-259961) item\_display does not take some nbt tags into account
-   [MC-259979](https://bugs.mojang.com/browse/MC-259979) Striders and blazes do not take five times the damage when using /damage with freeze type
-   [MC-260208](https://bugs.mojang.com/browse/MC-260208) Display entities in spawn chunks with interpolation\_duration greater than 0 visually reset to default transformation on rejoin
-   [MC-260268](https://bugs.mojang.com/browse/MC-260268) Can't scroll using arrows in "Telemetry Data Collection" screen
-   [MC-260324](https://bugs.mojang.com/browse/MC-260324) Cherry Boat with Chest item texture has a misplaced pixel
-   [MC-260335](https://bugs.mojang.com/browse/MC-260335) Clicking with an item that is out of stock in the villager trading menu with sufficient payment will allow purchase of the item regardless
-   [MC-260364](https://bugs.mojang.com/browse/MC-260364) Cherry Door inconsistent item texture
-   [MC-260427](https://bugs.mojang.com/browse/MC-260427) Button text is visible outside menus
-   [MC-260434](https://bugs.mojang.com/browse/MC-260434) There is no "Will be saved in..." text in the new world creation menu
-   [MC-260436](https://bugs.mojang.com/browse/MC-260436) Item Tags in 1.19.4-pre1 have extra entries
-   [MC-260438](https://bugs.mojang.com/browse/MC-260438) Items are not rendered in the bundle UI
-   [MC-260443](https://bugs.mojang.com/browse/MC-260443) Loading a snapshot 23w07a experimental world says it can be opened in "safe mode" and clicking "safe mode" does nothing
-   [MC-260445](https://bugs.mojang.com/browse/MC-260445) Player can climb up one block while riding a boat or raft
-   [MC-260461](https://bugs.mojang.com/browse/MC-260461) Water mobs cannot be ridden in water

---

# Minecraft 1.19.4 Pre-Release 1

We are now releasing the first pre-release for Minecraft 1.19.4. This pre-release contains a new high contrast accessibility setting, some updates to the Create World tab visuals, a new execute subcommand, improvements to startup performance, and lots of bug fixes!

For the remainder of the 1.19.4 cycle, you should mostly see bugs being fixed. In addition to that, pre-releases don't follow the regular snapshot cadence of releasing on Wednesdays, so keep an eye out for the next pre-release.

Happy mining!

## Important Note

-   Experimental 1.20 worlds created in the previous snapshot (23w07a) can no longer be opened in this version

## Changes

-   The enchantment glint for items in the inventory has been made more visible
-   The default value of the "Glint Strength" setting has been reduced to 75%
-   Potions no longer have an enchantment glint due to it obscuring the color of the potion contents
-   Added a notification system for Realms to tell you about important information about your Realm

### Accessibility

-   Added a built-in resource pack that enhances the contrast of UI elements
    -   The resource pack can be enabled in the Accessibility Options screen or manually in the Resource Pack screen
    -   This is only available in the menus for now, but we’ll be looking to bring this to gameplay UIs in the future as well

### Updated Create New World Screen

-   The appearance of the tab bar in the Create New World screen has been updated
    -   Tabs now have unique visuals instead of being traditional buttons
    -   The tabs now align to the center of the screen
    -   The content has been aligned to the top of the screen

## Technical Changes

-   The resource pack version is now 13
-   Changed the following game events:
    -   `item_interact_finish` now has a vibration frequency of 2 instead of 14
-   New Damage Type Tag: `bypasses_cooldown` - damage types with this tag bypass the regular invincibility time after taking damage
-   New Entity Type Tag: `fall_damage_immune` - entity types with this tag do not take fall damage

### Resource Pack format

-   The enchantment glint now has two separate texture files: `enchanted_glint_entity.png` and `enchanted_glint_item.png`

### Commands

##### `execute positioned over`

New `execute` sub-command for finding positions on top of a heightmap. Changes the height of the execution position to be on top of the given heightmap. Syntax:

-   `execute positioned over <heightmap>`

###### Heightmaps

A heightmap records the highest position in a column of blocks according to some criteria. Available options:

-   `world_surface`: Any non-air block
-   `motion_blocking`: Any motion blocking material (e.g. ignores flowers and grass)
-   `motion_blocking_no_leaves`: Any non-leaf motion blocking material
-   `ocean_floor`: Any non-fluid motion blocking material

## Changes for Experimental Features

-   The Brush crafting recipe now uses a Feather, Copper Ingot and Stick in a vertical line
-   The Sniffer Spawn Egg colors have been updated
-   The recipe for the Decorated Pot made of all Bricks can now be found in the Recipe Book

## Fixed bugs in 1.19.4 Pre-release 1

-   [MC-106484](https://bugs.mojang.com/browse/MC-106484) Some potions are indistinguishable by color
-   [MC-132200](https://bugs.mojang.com/browse/MC-132200) Ghost block hoppers appear if summoned by command to powered location
-   [MC-253210](https://bugs.mojang.com/browse/MC-253210) Goats will panic when receiving fall damage
-   [MC-253211](https://bugs.mojang.com/browse/MC-253211) Frogs will panic when receiving fall damage
-   [MC-256484](https://bugs.mojang.com/browse/MC-256484) Sitting camels don't stand up and begin following players that are tempting them with their favorite food
-   [MC-256489](https://bugs.mojang.com/browse/MC-256489) Sitting camels that are in love don't attempt to stand up and approach one another to breed
-   [MC-256731](https://bugs.mojang.com/browse/MC-256731) The sounds of camels recovering aren't controlled by the "Friendly Creatures" sound slider
-   [MC-256861](https://bugs.mojang.com/browse/MC-256861) Camels panic when receiving fall damage
-   [MC-259192](https://bugs.mojang.com/browse/MC-259192) Server/client position desync when running /ride too fast and manually dismounting
-   [MC-259246](https://bugs.mojang.com/browse/MC-259246) Passengers on an ender dragon ride too high
-   [MC-259576](https://bugs.mojang.com/browse/MC-259576) Passenger's riding position is too high on a phantom
-   [MC-259613](https://bugs.mojang.com/browse/MC-259613) Enchantment glint is hardly noticeable on some items, even when the Glint Strength is set to 100%
-   [MC-259630](https://bugs.mojang.com/browse/MC-259630) Camels, horses and mules bounce high into the air when being ridden across water
-   [MC-259882](https://bugs.mojang.com/browse/MC-259882) Axolotls no longer give the Regeneration effect to nearby players after they kill a mob, and do not grant "The Healing Power of Friendship!" advancement
-   [MC-259893](https://bugs.mojang.com/browse/MC-259893) Long texts on buttons scroll too fast
-   [MC-259917](https://bugs.mojang.com/browse/MC-259917) Entities immune to fall damage are damaged when using minecraft:fall damage type in /damage
-   [MC-259918](https://bugs.mojang.com/browse/MC-259918) Text scrolling speed isn't accessible-friendly
-   [MC-259920](https://bugs.mojang.com/browse/MC-259920) The "ITEM\_INTERACT\_FINISH" game event overrides other game events causing several actions to not produce their intended vibration frequency
-   [MC-260030](https://bugs.mojang.com/browse/MC-260030) Starting data.Main for data generation crashes
-   [MC-260033](https://bugs.mojang.com/browse/MC-260033) Torchflowers cannot be used to craft suspicious stew
-   [MC-260035](https://bugs.mojang.com/browse/MC-260035) Chickens and parrots are not tempted by torchflower seeds
-   [MC-260051](https://bugs.mojang.com/browse/MC-260051) Bees are not tempted by or attempt to pollinate Pink Petals and Torchflowers
-   [MC-260059](https://bugs.mojang.com/browse/MC-260059) Pigs do not seem to spawn in Cherry Grove biome
-   [MC-260071](https://bugs.mojang.com/browse/MC-260071) Sniffer Digging Sounds can be heard from way too far
-   [MC-260089](https://bugs.mojang.com/browse/MC-260089) Sniffers panic when receiving fall damage
-   [MC-260092](https://bugs.mojang.com/browse/MC-260092) Sniffers' hitboxes are too small resulting in sniffers not being rendered from certain angles despite being visible on the screen
-   [MC-260098](https://bugs.mojang.com/browse/MC-260098) Sniffers aren't required for the "Two by Two" advancement
-   [MC-260102](https://bugs.mojang.com/browse/MC-260102) Torchflower seeds don't contribute to the "A Seedy Place" advancement
-   [MC-260107](https://bugs.mojang.com/browse/MC-260107) Sniffers don't swim properly and their walking animations freeze when in water
-   [MC-260109](https://bugs.mojang.com/browse/MC-260109) Sniffers do not rotate their head to look at the player
-   [MC-260118](https://bugs.mojang.com/browse/MC-260118) Disabling experimental features on the world creation screen causes pack validation to fail
-   [MC-260121](https://bugs.mojang.com/browse/MC-260121) Hoppers are ghost blocks for other players when placed on jukeboxes that are playing music
-   [MC-260125](https://bugs.mojang.com/browse/MC-260125) Sniffer's head occasionally disappears
-   [MC-260126](https://bugs.mojang.com/browse/MC-260126) Using pick block function on grown torchflower crop gives torchflower seeds instead of the plant item
-   [MC-260149](https://bugs.mojang.com/browse/MC-260149) Cherry logs can't be used to craft campfires
-   [MC-260156](https://bugs.mojang.com/browse/MC-260156) The sound of the torchflower being broken after growing is different than the sound of it breaking after being placed
-   [MC-260157](https://bugs.mojang.com/browse/MC-260157) On existing snapshot servers, cherry grove biomes cannot be found with "/locate", nor do they generate
-   [MC-260168](https://bugs.mojang.com/browse/MC-260168) Torchflower crop aren't part of the #crops block tag
-   [MC-260171](https://bugs.mojang.com/browse/MC-260171) Cherry Leaves and Pink Petals aren't part of the #flower block tag
-   [MC-260172](https://bugs.mojang.com/browse/MC-260172) Torchflower isn't part of the #flowers block or item tags
-   [MC-260181](https://bugs.mojang.com/browse/MC-260181) Torchflower seeds are not grouped with other seeds in the creative inventory
-   [MC-260185](https://bugs.mojang.com/browse/MC-260185) Pink Petals aren't insta-mined
-   [MC-260189](https://bugs.mojang.com/browse/MC-260189) Cherry Sapling is not part of the #saplings item tag
-   [MC-260191](https://bugs.mojang.com/browse/MC-260191) Cherry Leaves aren't part of the #leaves and #complete\_find\_tree\_tutorial item tags
-   [MC-260192](https://bugs.mojang.com/browse/MC-260192) You can't make Charcoal with Cherry Logs or Wood
-   [MC-260193](https://bugs.mojang.com/browse/MC-260193) Cherry Logs and Wood can't be used as fuel in furnaces
-   [MC-260194](https://bugs.mojang.com/browse/MC-260194) Create new world screen appears even when world is created; clicking on button causes freeze or crash
-   [MC-260195](https://bugs.mojang.com/browse/MC-260195) Cherry Logs and Wood are missing from the #log, #logs\_that\_burn and #complete\_find\_tree\_tutorial item tags
-   [MC-260209](https://bugs.mojang.com/browse/MC-260209) breaks\_decorated\_pots Item Tag is in the Vanilla datapack, not 1.20
-   [MC-260210](https://bugs.mojang.com/browse/MC-260210) Brush Recipe is in the Vanilla datapack, not 1.20

---

# Minecraft 1.19.3 Release Candidate 3

In order to secure the quality of the Minecraft 1.19.3 release, we have decided to fix a few more critical issues and to delay the release until tomorrow. To that end we are now releasing Minecraft 1.19.3 Release Candidate 3.

Happy mining!

## Fixed bugs in 1.19.3 Release Candidate 3

-   [MC-108707](https://bugs.mojang.com/browse/MC-108707) Potion effects, particles, and fire animations persist client-side after death in server environments
-   [MC-258258](https://bugs.mojang.com/browse/MC-258258) The "EntityTag" NBT data on armor stands is no longer applied upon placement
-   [MC-258279](https://bugs.mojang.com/browse/MC-258279) Particle groups aren't cleared on resource reload

---

# Minecraft 1.19.3 Release Candidate 2

We're now releasing the second (and hopefully last) release candidate for Minecraft 1.19.3, fixing a few critical bugs. If there are no major issues following this release candidate, no further changes will be done before the full release.

With this release candidate, we are reverting a behavior change for translation strings due to a prevalent but unsupported use case. Expect this behavior to be changed in the future to provide a supported alternative.

Happy mining!

## Fixed bugs in 1.19.3 Release Candidate 2

-   [MC-258256](https://bugs.mojang.com/browse/MC-258256) Cannot join a LAN world while offline
-   [MC-258251](https://bugs.mojang.com/browse/MC-258251) Slots (like %s) in translations no longer ignore missing elements in "with"

---

# Minecraft 1.19.3 Release Candidate 1

We're now releasing the first (and hopefully only) release candidate for Minecraft 1.19.3. If there are no major issues following this release candidate, no further changes will be done before the full release.

Happy mining!

## Fixed bugs in 1.19.3 Release Candidate 1

-   [MC-58668](https://bugs.mojang.com/browse/MC-58668): Smooth Lighting Minimum and Maximum levels no longer differ
-   [MC-185279](https://bugs.mojang.com/browse/MC-185279): "Done" and "Cancel" buttons in the game rules screen are not selected in the right order when navigating using Tab
-   [MC-187812](https://bugs.mojang.com/browse/MC-187812): The buttons are not selected in the right order using Tab in the new datapacks and resource packs menus
-   [MC-187816](https://bugs.mojang.com/browse/MC-187816): Using Tab multiple times to select a datapack / resource pack from the list does not deselect it
-   [MC-227250](https://bugs.mojang.com/browse/MC-227250): Mobs continue converting after the conversion process starts and the block causing the conversion is removed
-   [MC-240724](https://bugs.mojang.com/browse/MC-240724): There are no shadows on text displayed within the subtitles overlay
-   [MC-248589](https://bugs.mojang.com/browse/MC-248589): World border texture jumps back and forth between two positions as the player's y level changes
-   [MC-254809](https://bugs.mojang.com/browse/MC-254809): You cannot get water bottles from water in creative mode if there's a potion in your inventory
-   [MC-258159](https://bugs.mojang.com/browse/MC-258159): Pick block doesn't work on Ender Dragon
-   [MC-258190](https://bugs.mojang.com/browse/MC-258190): Bubble columns let skylight through
-   [MC-258195](https://bugs.mojang.com/browse/MC-258195): Performance degradation of NBT modification
-   [MC-258196](https://bugs.mojang.com/browse/MC-258196): Stray pixel in gui/toasts.png
-   [MC-258203](https://bugs.mojang.com/browse/MC-258203): /data modify thinks NBT is too large, but /data merge doesn't
-   [MC-258209](https://bugs.mojang.com/browse/MC-258209): Storage data is broken

---

# Minecraft 1.19.3 Pre-release 3

We're now releasing pre-release 3 for Minecraft 1.19.3 with more bug fixes. Happy mining!

## Fixed bugs in 1.19.3 Pre-release 3

-   [MC-108597](https://bugs.mojang.com/browse/MC-108597): Shulker box still plays the close sound, even if it is destroyed or replaced
-   [MC-165686](https://bugs.mojang.com/browse/MC-165686): Knowledge book texture in the crafting UI hasn't been updated
-   [MC-177141](https://bugs.mojang.com/browse/MC-177141): Cleric working subtitle is "Brewing Stand bubbles" instead of "Cleric works"
-   [MC-194501](https://bugs.mojang.com/browse/MC-194501): IllegalArgumentException (Cannot set property) when using a block without the "axis" property in fancy\_tree\_placer
-   [MC-201769](https://bugs.mojang.com/browse/MC-201769): Copying deeply nested NBT causes StackOverflowError
-   [MC-208051](https://bugs.mojang.com/browse/MC-208051): Chests/trapped chests/barrels do not 'open' after respawning
-   [MC-228976](https://bugs.mojang.com/browse/MC-228976): Entity collision is run on render thread
-   [MC-233051](https://bugs.mojang.com/browse/MC-233051): Server crashes as player logs in
-   [MC-250428](https://bugs.mojang.com/browse/MC-250428): Narrator does not narrate the death screen
-   [MC-256706](https://bugs.mojang.com/browse/MC-256706): Carpet texture is cut off in the recipe book
-   [MC-257121](https://bugs.mojang.com/browse/MC-257121): Players' capes and outer skin layers don't render client-side in server environments when joining worlds while dead
-   [MC-257340](https://bugs.mojang.com/browse/MC-257340): Vexes' hitboxes aren't vertically centered with their models
-   [MC-257350](https://bugs.mojang.com/browse/MC-257350): Top and bottom texture of block of bamboo rotated incorrectly
-   [MC-257392](https://bugs.mojang.com/browse/MC-257392): Vex's new model's head does not rotate to where it looks
-   [MC-257411](https://bugs.mojang.com/browse/MC-257411): Vex Renders Offhand Items Incorrectly
-   [MC-257495](https://bugs.mojang.com/browse/MC-257495): Dying whilst in the Shulker Box GUI will spam "Shulker Closes" sound
-   [MC-257530](https://bugs.mojang.com/browse/MC-257530): When Chat is set to Hidden, the Chat Hidden Warning appears in chat instead of the actionbar when attempting to send a message whilst sleeping or switching gamemode
-   [MC-257817](https://bugs.mojang.com/browse/MC-257817): Player heads with a custom skin lose their noteblock sound data when using Ctrl+Pick block
-   [MC-257839](https://bugs.mojang.com/browse/MC-257839): NullPointerException when attempting to render a tooltip in the Game Rules menu
-   [MC-257843](https://bugs.mojang.com/browse/MC-257843): note\_block\_sound data is lost when breaking a player head
-   [MC-257861](https://bugs.mojang.com/browse/MC-257861): Villagers and Piglin no longer seek out Items

---

# Minecraft 1.19.3 Pre-Release 2

We're now releasing 1.19.3 pre-release 2 which fixes a few bugs.

## Changes in 1.19.3 Pre-release 2

​

-   When tabbing through buttons, tooltips are displayed above or below them
-   Tooltips displayed when hovering are displayed next to the cursor
-   Tooltips from focused buttons (focused by pressing tab) take priority over tooltips from hovered buttons
-   Optimized some exceptionally slow cases of structure lookup

​

## Fixed bugs in 1.19.3 Pre-release 2

​

-   [MC-185618](https://bugs.mojang.com/browse/MC-185618) Creepers can't be ignited with a fire charge
-   [MC-187744](https://bugs.mojang.com/browse/MC-187744) "Place pack files here" hover text on pack selection screen shows everywhere when "Open pack folder" button has focus
-   [MC-189111](https://bugs.mojang.com/browse/MC-189111) Bees get stuck on non-full blocks
-   [MC-256655](https://bugs.mojang.com/browse/MC-256655) Some shorter mobs can attack Players on a Camel
-   [MC-257616](https://bugs.mojang.com/browse/MC-257616) The "Data Collection" button in the telemetry menu displays its hover text regardless of the position of the cursor
-   [MC-257636](https://bugs.mojang.com/browse/MC-257636) Villagers rarely close doors after going through them
-   [MC-257664](https://bugs.mojang.com/browse/MC-257664) Buttons within the list in the social interactions menu display their hover text regardless of the position of the cursor
-   [MC-257668](https://bugs.mojang.com/browse/MC-257668) The draft report icon isn't present on any of the "Title Screen" buttons within the death screen when attempting to disconnect from worlds while having saved draft reports

---

# Minecraft 1.19.3 Pre-Release 1

We’re now releasing the first pre-release for Minecraft 1.19.3. This pre-release fixes a few bugs, contains a few tweaks, and it has some technical changes.

If everything goes as expected, we aim to release this version on December 6th.

Happy mining!

## Technical Changes in 1.19.3 Pre-release 1

-   Added new entity sub-predicate types: `axolotl`, `boat`, `fox`, `mushroom`, `painting`, `rabbit`, `horse`, `llama`, `villager`, `parrot`, `tropical_fish`
-   `fillbiome` command now supports a filtered mode
-   Player Heads can now contain a `note_block_sound` field
    -   When present, this determines the sound a note block makes when the head is placed on top of it

### Loot tables and Advancements

#### New entity sub-predicate types

-   Added new entity sub-predicates for some entity types with variants:
-   `axolotl`
    -   `variant` - values: `lucy`, `wild`, `gold`, `cyan`, `blue`
-   `boat`
    -   Works for boats, chest boats and rafts
    -   `variant` - values: `oak`, `spruce`, `birch`, `jungle`, `acacia`, `dark_oak`, `mangrove`, `bamboo`
-   `fox`
    -   `variant` - values: `red`, `snow`
-   `mooshroom`
    -   `variant` - values: `red`, `brown`
-   `painting`
    -   `variant` - values: see `painting_variant` registry
-   `rabbit`
    -   `variant` - values: `brown`, `white`, `black`, `white_splotched`, `gold`, `salt`, `evil`
-   `horse`
    -   `variant` - values: `white`, `creamy`, `chestnut`, `brown`, `black`, `gray`, `dark_brown`
    -   Markings are separate value and not matched
-   `llama`
    -   `variant` - values: `creamy`, `white`, `brown`, `gray`
-   `villager`
    -   `variant` - values: see `villager_type` registry
    -   Also works for Zombie Villagers
    -   Profession and level are separate values and not matched
-   `parrot`
    -   `variant` - values: `red_blue`, `blue`, `green`, `yellow_blue`, `gray`
-   `tropical_fish`
    -   `variant` - values: `kob`, `sunstreak`, `snooper`, `dasher`, `brinely`, `spotty`, `flopper`, `stripey`, `glitter`, `blockfish`, `betty`, `clayfish`

### `fillbiome` command

Now supports a filtered form. New syntax:

`fillbiome <from> <to> <biome> [replace <filter>]`

New parameter:

-   `filter`: A biome or biome tag to replace

## Fixed bugs in 1.19.3 Pre-release 1

-   [MC-156663](https://bugs.mojang.com/browse/MC-156663) Villager pathfinding broken in water
-   [MC-177596](https://bugs.mojang.com/browse/MC-177596) Weaponsmith working subtitle is "Grindstone used" instead of "Weaponsmith works"
-   [MC-177676](https://bugs.mojang.com/browse/MC-177676) Armorer working subtitle is "Blast Furnace crackles" instead of "Armorer works"
-   [MC-245697](https://bugs.mojang.com/browse/MC-245697) Certain mobs can't get out of water that is at least two blocks deep
-   [MC-255133](https://bugs.mojang.com/browse/MC-255133) Extra copper ore generates in deep dark
-   [MC-256481](https://bugs.mojang.com/browse/MC-256481) minecraft.used:minecraft.BOOK\_TYPE doesn't increase when placing books onto chiseled bookshelves
-   [MC-256679](https://bugs.mojang.com/browse/MC-256679) Axolotls commonly hesitate when avoiding danger and occasionally start pathfinding in dangerous directions
-   [MC-256883](https://bugs.mojang.com/browse/MC-256883) Elements within the game menu are now positioned slightly lower than they were in previous versions
-   [MC-257341](https://bugs.mojang.com/browse/MC-257341) Vex texture does not utilize translucency
-   [MC-257349](https://bugs.mojang.com/browse/MC-257349) Vex does not sit in boats and minecarts properly anymore
-   [MC-257368](https://bugs.mojang.com/browse/MC-257368) Not a valid port error in Open to LAN doesn't show if port is <1024
-   [MC-257373](https://bugs.mojang.com/browse/MC-257373) The cursor in the port number text box doesn't blink
-   [MC-257374](https://bugs.mojang.com/browse/MC-257374) The word "number" isn't capitalized in "Port number"
-   [MC-257386](https://bugs.mojang.com/browse/MC-257386) Inventory menu has broken textures with Programmer Art enabled
-   [MC-257506](https://bugs.mojang.com/browse/MC-257506) Top and bottom texture of chiseled bookshelf rotates depending on placement
-   [MC-257525](https://bugs.mojang.com/browse/MC-257525) Allay movement AI is broken in 22w42a+ causing them to sometimes spin mid-air
-   [MC-257617](https://bugs.mojang.com/browse/MC-257617) You cannot scroll with the mouse wheel on the telemetry screen after clicking the "Open my data" or "Data collection" button
-   [MC-257618](https://bugs.mojang.com/browse/MC-257618) The word "pair" uses the incorrect verb form within the "telemetry.event.world\_loaded.description" string
-   [MC-257619](https://bugs.mojang.com/browse/MC-257619) Baby piglins and zombified piglins take damage when they hit their head on a block
-   [MC-257625](https://bugs.mojang.com/browse/MC-257625) Piglin Head placed on noteblock play the piglin angry sound instead of the piglin ambient sound
-   [MC-257648](https://bugs.mojang.com/browse/MC-257648) The fillbiome command can result in flickering biome colors
-   [MC-257658](https://bugs.mojang.com/browse/MC-257658) Sculk sensors are not activated upon taking books from chiseled bookshelves
-   [MC-257663](https://bugs.mojang.com/browse/MC-257663) The "Hide messages" button in the social interactions menu can now no longer be toggled due to it being executed twice upon being pressed

---

# Minecraft 1.19.2 Release Candidate 2

We're now releasing the first (and hopefully only) release candidate for Minecraft 1.19.2. This release candidate fixes a critical issue related to server connectivity with secure chat. If there are no major issues following this release, no further changes will be done before the full release.

Edit: We've now released 1.19.2 release candidate 2

## FIXED BUGS IN 1.19.2 RELEASE CANDIDATE 2

-   We're now releasing Release Candidate 2 for Minecraft 1.19.2 to fix a crash.

## FIXED BUGS IN 1.19.2 RELEASE CANDIDATE 1

-   This release candidate fixes a critical issue related to server connectivity with secure chat.

## Feedback

Report bugs here: [Minecraft issue tracker!](https://bugs.mojang.com/)

Want to give feedback?

-   Head over to our [feedback website](https://aka.ms/snapshotfeedback) or come chat with us about it on the [official Minecraft Discord](https://discordapp.com/invite/minecraft).

---

# Minecraft 1.19.2 Release Candidate 1

We're now releasing the first (and hopefully only) release candidate for Minecraft 1.19.2. This release candidate fixes a critical issue related to server connectivity with secure chat. If there are no major issues following this release, no further changes will be done before the full release.

## Feedback

Report bugs here: [Minecraft issue tracker!](https://bugs.mojang.com/)

Want to give feedback?

-   Head over to our [feedback website](https://aka.ms/snapshotfeedback) or come chat with us about it on the [official Minecraft Discord](https://discordapp.com/invite/minecraft).

---

# Minecraft 1.19.1 Release Candidate 3

We are now releasing Release Candidate 3 for Minecraft 1.19.1. We still expect to release the full version of 1.19.1 this week.

## Technical Changes in 1.19.1 Release Candidate 3

-   The chat input box will no longer apply custom font glyphs with negative advances, or glyphs with advances greater than 32

## Bugs fixed in 1.19.1 Release Candidate 3

-   [MC-254529](https://bugs.mojang.com/browse/MC-254529) Warning and information toasts can overlap one another

---

# Minecraft 1.19.1 Release Candidate 2

We are now releasing Release Candidate 2 for Minecraft 1.19.1. If no critical issues are found, we expect to release the full version next week.

## Changes in 1.19.1 Release Candidate 2

-   Tweaked the names of the chat preview options
-   Added a warning toast when connecting to a server that doesn't enforce secure chat

## Bugs fixed in 1.19.1 Release Candidate 2

-   [MC-254355](https://bugs.mojang.com/browse/MC-254355) Key binds set to mouse buttons of number greater than 8 switch over by 1 when the game starts
-   [MC-254405](https://bugs.mojang.com/browse/MC-254405) Debug messages aren't prefixed with gray color indicators

---

# Minecraft 1.19.1 Release Candidate 1

We're now releasing the first (and hopefully only) release candidate for Minecraft 1.19.1. We have also now created a help article on chat reporting, available [here](https://help.minecraft.net/hc/articles/7149823936781).

If there are no major issues following this release, no further changes will be done before the full release on Tuesday.

Happy mining!

## Changes in 1.19.1 Release Candidate 1

-   Updated the categories for chat reporting
    -   The "Profanity", "Nudity or pornography" and "Extreme violence or gore" categories have been removed
    -   The description for the "Drugs and alcohol" category has been updated to "Someone is encouraging others to partake in illegal drug related activities or encouraging underage drinking"
    -   The description of the "Harassment and bullying" category has been extended with the following: or posting private personal information about you or someone else without consent ("doxing").

## Technical changes in 1.19.1 Release Candidate 1

-   The `run_command` click event for text components no longer supports sending chat messages directly
    -   Only commands are supported, so a command such as `/say` should be used instead
    -   This means values now always need to be '/'-prefixed
-   Increased the amount of chat context sent with each chat report

## Fixed bugs in 1.19 Release Candidate 1

-   [MC-250020](https://bugs.mojang.com/browse/MC-250020) Allay doesn't ignore items when mobGriefing is set to false
-   [MC-252511](https://bugs.mojang.com/browse/MC-252511) Bedrock not generating on the new blending border between old and new blending
-   [MC-252987](https://bugs.mojang.com/browse/MC-252987) Illegal character '\\n' in text component clickEvent
-   [MC-253114](https://bugs.mojang.com/browse/MC-253114) Selection boxes within the "Select Chat Messages to Report" menu don't disappear when deselecting fields after reentering the menu
-   [MC-253188](https://bugs.mojang.com/browse/MC-253188) Selection boxes within the "Select Chat Messages to Report" menu differ in size ever so slightly depending on how they're selected
-   [MC-253225](https://bugs.mojang.com/browse/MC-253225) Selection boxes of fields within player reporting menu lists don't contain white outlines when selected using the TAB key
-   [MC-253227](https://bugs.mojang.com/browse/MC-253227) Players can only be reported using the reporting system if they're present within the world
-   [MC-253336](https://bugs.mojang.com/browse/MC-253336) Using the eye of ender "crashes" game in the seed: -3721742095548798177
-   [MC-253422](https://bugs.mojang.com/browse/MC-253422) The selection of the "Please report breaches of our Community Standards" text within the "Select Report Category" menu is slightly confusing due to the words "Community Standards" being underlined by default

---

# Minecraft 1.19.1 Pre-Release 6

We are now releasing pre-release 6 for Minecraft 1.19.1 with some small tweaks to sculk sensors and catalysts as well as bug fixes and improvements to the chat signing system.

## Changes in 1.19.1 Pre-release 6

-   Sculk Catalysts will now drop 5 XP instead of 20 XP
-   Colors of the signing indicators for sending a message have been adjusted for improved accessiblity

## Technical Changes in 1.19.1 Pre-release 6

-   The `run_command` click event for text components no longer supports any commands that send chat messages
    -   `/tellraw` should be used instead

## Bugs fixed in 1.19.1 Pre-release 6

-   [MC-148149](https://bugs.mojang.com/browse/MC-148149) Linux game crash when opening links
-   [MC-207077](https://bugs.mojang.com/browse/MC-207077) Crash on loading pre-1.13 world with noteblock + note NBT in inventory
-   [MC-235614](https://bugs.mojang.com/browse/MC-235614) Reference to unexisting predicate in a datapack causes java.lang.NullPointerException
-   [MC-252190](https://bugs.mojang.com/browse/MC-252190) Player-dropped items creating vibrations depends on you sneaking at the moment the item hits the ground, instead of when you threw the item
-   [MC-252258](https://bugs.mojang.com/browse/MC-252258) Wool block / carpet items generate vibrations, unless thrown by crouching players
-   [MC-252265](https://bugs.mojang.com/browse/MC-252265) --server argument causes java.lang.NullPointerException crash on some servers
-   [MC-253402](https://bugs.mojang.com/browse/MC-253402) Game crash when you shift right click on item in your hotbar to the chest at the same time as you die
-   [MC-254255](https://bugs.mojang.com/browse/MC-254255) Unable to text in chat with Chat Preview On send while sleeping
-   [MC-254261](https://bugs.mojang.com/browse/MC-254261) "The background opacity box of the chat preview field renders behind the ""Leave Bed"" button when sleeping in beds"
-   [MC-254284](https://bugs.mojang.com/browse/MC-254284) Sending chat packets with invalid message type id crashes the game
-   [MC-254349](https://bugs.mojang.com/browse/MC-254349) Crash when putting dye into a loom on a modded server

---

# Minecraft 1.19.1 Pre-release 5

We are now releasing pre-release 5 for Minecraft 1.19.1. This pre-release includes the remaining fixes for a known exploit regarding player report context. It also fixes some other crashes and bugs.

## Changes in 1.19.1 Pre-release 5

### Chat

-   When writing chat messages, the signing status of the displayed chat messages is shown with a colored indicator
    -   The indicator will either appear to the left of the chat input field, or to the left of the chat preview if chat preview is being used
    -   The indicator will be green when the displayed message is signed
    -   The indicator will be orange when Chat Preview is enabled and a preview is waiting to be signed
-   The background of the chat preview will also display slightly faded when a preview is waiting to be signed

### Chat Preview

-   Added "On Send" Chat Preview option for updating chat previews only when attempting to send a message
    -   To confirm sending a message, a second hit of the Enter/Return key is required
    -   The previous "ON" setting has been renamed to "On Modified"
-   The "On Modified" mode no longer displays previews if the message has not been modified by the server
-   Chat Preview is now enabled in singleplayer, and will display when using commands that have selector substitution such as `/say`
-   Previewed hover events and click events are now highlighted with a solid background

## Technical Changes in 1.19.1 Pre-release 5

-   The `team_msg_command` chat type has been split apart into `team_msg_command_incoming` and `team_msg_command_outgoing`

## Bugs fixed in 1.19.1 Pre-release 5

-   [MC-130243](https://bugs.mojang.com/browse/MC-130243) /debug stop message uses OS locale specific number formatting
-   [MC-149047](https://bugs.mojang.com/browse/MC-149047) Scroll Sensitivity slider label uses OS locale for number formatting
-   [MC-252546](https://bugs.mojang.com/browse/MC-252546) Poor audio quality compared to 1.18.2
-   [MC-252702](https://bugs.mojang.com/browse/MC-252702) Game crashes when trying to launch 1.19 when system is in Arabic, Persian, or adjacent formats
-   [MC-253223](https://bugs.mojang.com/browse/MC-253223) "A preposition is incorrectly used within the ""gui.abuseReport.reason.terrorism\_or\_violent\_extremism.description"" string"
-   [MC-253888](https://bugs.mojang.com/browse/MC-253888) Messages that servers have tampered with through chat reporting are signed and reportable
-   [MC-253950](https://bugs.mojang.com/browse/MC-253950) Sending a chat message too fast after typing it fails to sign the eventual proper chat preview
-   [MC-253997](https://bugs.mojang.com/browse/MC-253997) "The current description of ""Imminent harm - Threat to harm others"" report category seems not matching its title"
-   [MC-254089](https://bugs.mojang.com/browse/MC-254089) "Chat Preview components allow server to ""hide"" content"

---

# Minecraft 1.19.1 Pre-Release 4

This pre-release fixes an exploit found regarding contextual chat evidence when creating a Player Report.

## Technical changes in 1.19.1 Pre-Release 4

-   Custom servers can hide player chat messages from display via a new network packet
    -   This does not delete player chat messages from chat logs
-   Insecure chat messages logged in the server are prefixed with a `[Not Secure]` tag
-   The order of chat messages are now cryptographically verified
    -   This will be used for validating the context of chat messages for Player Reports

## Fixed bugs in 1.19.1 Pre-Release 4

-   [MC-253743](https://bugs.mojang.com/browse/MC-253743) The server console doesn't state if chat messages aren't secure or have been modified
-   [MC-253813](https://bugs.mojang.com/browse/MC-253813) Chat commands with entity selectors often reported as "This message is not secure"

---

# Minecraft 1.19.1 Pre-Release 3

Hi everyone,

Before we jump into today's pre-release, we would like to take a moment and dedicate some thoughts to a person who over the years has made an incredible impact on the Minecraft community and touched the lives of many. **Technoblade** became synonymous with a source of good – a positive force that time and time again made many, many people happy and someone we are proud to have as part of our giant family.

Minecraft is its community, which is why it should come as no surprise that so many of us mourn the loss of him, with tributes and love pouring in from across the world.

On behalf of the Java Team – thank you Technoblade for the memories, for all the fun and the laughter. You will be dearly missed. Our thoughts are with your family and friends.

* * *

Regarding 1.19.1: We still have a number of fixes in the pipeline, set for another pre-release in the near future. After that, once everything is tested and verified, we'll be aiming for a release candidate.

## Changes in 1.19.1 Pre-Release 3

-   Moved the chat scrollbar to the right of the chat window
-   System messages (non-player chat, such as those outputted by commands) are displayed with a gray color indicator

## Technical changes in 1.19.1 Pre-Release 3

-   Custom servers can set their own auto-completion options for regular chat via a new network packet
-   The list of players on the Social Interactions screen now places entries for players with recently seen messages at the top of the list
-   The `msg_command` chat type has been split apart into `msg_command_incoming` and `msg_command_outgoing`
-   The `team_name` chat type parameter has been renamed to `target`
    -   This chat type parameter is now used by `msg_command_outgoing`

## Fixed bugs in 1.19.1 Pre-Release 3

-   [MC-253182](https://bugs.mojang.com/browse/MC-253182) The second instance of a reflexive pronoun is used incorrectly within the "gui.abuseReport.reason.self\_harm\_or\_suicide.description" string
-   [MC-253214](https://bugs.mojang.com/browse/MC-253214) Tooltips will become offset in certain cases
-   [MC-253223](https://bugs.mojang.com/browse/MC-253223) A preposition is incorrectly used within the "gui.abuseReport.reason.terrorism\_or\_violent\_extremism.description" string
-   [MC-253496](https://bugs.mojang.com/browse/MC-253496) /execute as {player} run say counts to the report system
-   [MC-253742](https://bugs.mojang.com/browse/MC-253742) The chat scroll bar overlaps the colored indicators used to show the trust status of messages
-   [MC-253773](https://bugs.mojang.com/browse/MC-253773) Whispers appear as modified by the server

---

# Minecraft 1.19.1 Pre-Release 2

Hey everyone! As a few of you might have noticed, we’ve made the decision to postpone the release of 1.19.1 and we're now going back into pre-release mode. This is in order to address a few of our more noticeable issues. We've yet to fully decide on a new release date, but it won't be too far in the future.

We’ve received a lot of feedback regarding the Player Chat Report feature, which is something we address specifically in a newly released post [here](https://www.minecraft.net/article/addressing-player-chat-reporting-tool), as well as in our [FAQ](https://aka.ms/chatreportingfaq) which hopefully answers all your questions!

## Changes in 1.19.1 Pre-Release 2

We've added the ability to see the signing status of chat messages – this is so you can easily tell when a server is tampering with, or removing the signing security of, their players' messages.

### Chat Trust Status

-   Messages that are not signed with the Secure Chat system, or have been tampered with by the server will now be marked
    -   Messages with missing or invalid signatures are marked as "Not Secure"
    -   Messages that are detected as modified are marked as "Modified"
-   The trust status of messages are displayed with both a colored indicator and an icon
    -   The colored indicator is always visible
    -   The icon is only visible when the chat screen is open
-   Hovering over the icon will provide more information about the trust status
    -   For modified messages, the original secure text will also be displayed in the tooltip

## Technical changes in 1.19.1 Pre-Release 2

### Chat Types

-   Chat types added to the `chat_types` registry are now only used for player chat, and not system messages
    -   The `system` and `game_info` chat types have been removed
-   Chat types have been simplified and are now only required to define `chat` and `narration` decorations
    -   Chat types no longer support overlays
    -   A system message should instead be used to display overlays

### server.properties

-   `enforce-secure-profile` is now defaulted to `true` for dedicated servers

## Fixed Bugs in 1.19.1 Pre-Release 2

-   [MC-253112](https://bugs.mojang.com/browse/MC-253112) The game output console is logged with warnings regarding chat packets with invalid signatures when using entity selectors within commands
-   [MC-253121](https://bugs.mojang.com/browse/MC-253121) Entities and other non-player chat message sources appear as players on the Select Chat Messages to Report screen
-   [MC-253493](https://bugs.mojang.com/browse/MC-253493) The descriptions of report categories can once again overlap the "Description:" subtitle
-   [MC-253495](https://bugs.mojang.com/browse/MC-253495) Selection boxes of fields within the "Select Report Category" menu list don't contain white outlines when selected using the TAB key
-   [MC-253497](https://bugs.mojang.com/browse/MC-253497) Entities and other non-player chat message sources appear in the Social Interactions menu
-   [MC-253501](https://bugs.mojang.com/browse/MC-253501) Long messages within the "Select Chat Messages to Report" menu can extend beyond selection boxes and past the scroll bar
-   [MC-253517](https://bugs.mojang.com/browse/MC-253517) Online players cannot connect to offline server because "invalid profile public key signature"

---

# Minecraft 1.19.1 Pre-Release 1

The first pre-release for 1.19.1 is now available. This release contains a few bugfixes, an increased cooldown for Allay duplication, and it also contains a new UI if you have been banned for violating the Minecraft [Community Standards](https://www.minecraft.net/community-standards). ​ On the topic of community standards and the recent introduction of the chat reporting feature, we’re working on creating a help article that aims to add some context surrounding the functionality. ​ All of this said, if everything goes as planned, we plan to release the update next Tuesday on June 28th.

## Changes in 1.19.1 Pre-release 1

​

-   Allay duplication now has a 5-minute cooldown
-   Along with the support for reporting chat, reported players can now be banned from online play and Realms after moderator review
-   The game will show a notice screen on startup if you have been banned from online play
    -   The reason for the ban is shown as well as how long the ban is valid for

## Fixed Bugs in 1.19.1 Pre-Release 1

-   [MC-249973](https://bugs.mojang.com/browse/MC-249973) Loading resource packs is significantly slower in 1.19
-   [MC-252327](https://bugs.mojang.com/browse/MC-252327) World list fails to load after restarting game and deleting a world
-   [MC-252508](https://bugs.mojang.com/browse/MC-252508) Realms worldgen type missing language string
-   [MC-253055](https://bugs.mojang.com/browse/MC-253055) Resource packs causing each WeighedSoundEvents to duplicate Sounds
-   [MC-253102](https://bugs.mojang.com/browse/MC-253102) Chat reporting uses "Messages" for one message
-   [MC-253105](https://bugs.mojang.com/browse/MC-253105) Chat report category scroll bar intersects the selected option outline
-   [MC-253108](https://bugs.mojang.com/browse/MC-253108) Selection boxes within the "Select Report Category" menu aren't vertically centered with the text inside them
-   [MC-253109](https://bugs.mojang.com/browse/MC-253109) The descriptions of report categories can overlap the "Description:" subtitle
-   [MC-253110](https://bugs.mojang.com/browse/MC-253110) Text within the "Discard report and comments?" menu isn't horizontally centered
-   [MC-253111](https://bugs.mojang.com/browse/MC-253111) You cannot use CTRL+HOME or CTRL+END to navigate to the beginning or end of text within the "Report Chat" menu
-   [MC-253113](https://bugs.mojang.com/browse/MC-253113) Chat message content can extend past the outline of a button and past the scroll bar
-   [MC-253123](https://bugs.mojang.com/browse/MC-253123) The button within the "Sending your report" menu changes upon resizing the game window
-   [MC-253126](https://bugs.mojang.com/browse/MC-253126) The scroll bar within the "Select Chat Messages to Report" menu sometimes resets its position to the bottom of the list after scrolling upwards
-   [MC-253127](https://bugs.mojang.com/browse/MC-253127) Reason is not provided when chat report creation is not able to be started
-   [MC-253134](https://bugs.mojang.com/browse/MC-253134) Allays from older worlds don't duplicate
-   [MC-253176](https://bugs.mojang.com/browse/MC-253176) The character indicator symbol within the "Report Chat" menu is untranslatable
-   [MC-253178](https://bugs.mojang.com/browse/MC-253178) The word "Non-consensual" is spelled as "Non-consentual" within the "gui.abuseReport.reason.non\_consensual\_intimate\_imagery" string
-   [MC-253183](https://bugs.mojang.com/browse/MC-253183) The word "Unrelated" within the "gui.chatSelection.fold" string is incorrectly capitalized
-   [MC-253185](https://bugs.mojang.com/browse/MC-253185) The ESC key cannot be used to exit the "Sending your report" menu
-   [MC-253191](https://bugs.mojang.com/browse/MC-253191) Particles produced from allays duplicating cannot be seen by other players

---

# Minecraft 1.19 Release Candidate 2

1.19 release candidate 2 is now available which fixes a crash.

---

# Minecraft 1.19 Release Candidate 1

We're now releasing the first (and hopefully only) release candidate for The Wild Update. If there are no major issues following this release, no further changes will be done before the full release.

Happy mining!

## Fixed Bugs in 1.19 Release Candidate 1

-   [MC-252398](https://bugs.mojang.com/browse/MC-252398) Darkness effect fading in death screen causes subtle flashing

---

# Minecraft 1.19 Pre-Release 5

The fifth pre-release for 1.19 is now available with more bug fixes.

## Fixed bugs in 1.19 Pre-release 5

-   [MC-249121](https://bugs.mojang.com/browse/MC-249121) Sculk is missing subtitles for some sounds
-   [MC-249323](https://bugs.mojang.com/browse/MC-249323) Modifying a world preset to not include overworld settings will not give a datapack error, but selecting the world type will instantly crash your game
-   [MC-250034](https://bugs.mojang.com/browse/MC-250034) Standing on top of mud as it converts to clay causes the player to fall through or be pushed out of the block
-   [MC-250295](https://bugs.mojang.com/browse/MC-250295) Allay's head does not rotate to where it looks
-   [MC-251030](https://bugs.mojang.com/browse/MC-251030) Standing on top of soul sand or mud that converts to sculk will cause entities to fall through it
-   [MC-251323](https://bugs.mojang.com/browse/MC-251323) Mobs target emerging warden/ warden faces attacking mob while emerging if dealt melee damage
-   [MC-251594](https://bugs.mojang.com/browse/MC-251594) Leads are leashed too high on allays
-   [MC-252038](https://bugs.mojang.com/browse/MC-252038) Warden attacks immediately if hit during emerging animation
-   [MC-252108](https://bugs.mojang.com/browse/MC-252108) Eating a food item no longer opens the piston doors in city\_center\_2
-   [MC-252157](https://bugs.mojang.com/browse/MC-252157) 'CustomName' NBT tag still prevents wardens from digging down
-   [MC-252352](https://bugs.mojang.com/browse/MC-252352) URL in eula.txt (dedicated server) points to the wrong location

---

# Minecraft 1.19 Pre-Release 4

The fourth pre-release for 1.19 is now available with a few bugfixes.

In case you missed it, we just announced the release date for the Wild Update (June 7th). You can read more about that [here](https://www.minecraft.net/article/the-wild-update-coming?ref=launcher).

## Fixed bugs in 1.19 Pre-release 4

-   [MC-220067](https://bugs.mojang.com/browse/MC-220067) - Chunk corruption with command block full of certain Unicode characters
-   [MC-245504](https://bugs.mojang.com/browse/MC-245504) - Touchscreen mode crash // java.lang.ClassCastException: class eec$a cannot be cast to class eec$c (eec$a and eec$c are in unnamed module of loader 'app')
-   [MC-249831](https://bugs.mojang.com/browse/MC-249831) - Aquifers can cut themselves off at chunk borders
-   [MC-251840](https://bugs.mojang.com/browse/MC-251840) - Game crash whilst getting block state: cwj: Missing Palette entry for index 8
-   [MC-251859](https://bugs.mojang.com/browse/MC-251859) - Gear equipping sound plays every time armor/elytra durability changes while equipped
-   [MC-251989](https://bugs.mojang.com/browse/MC-251989) - Cannot send chats or use commands in multiplayer since 1.19 Pre-release 1

---

# Minecraft 1.19 Pre-Release 3

It is now time for pre-release 3 for Minecraft 1.19, which will be our last pre-release for this week. In this pre-release we've tweaked the sonic boom attack and fixed more bugs.

Enjoy!

## Changes in 1.19 Pre-release 3

-   Wardens' sonic boom attack now bypasses the damage reduction by armor enchantments such as Protection

## Technical Changes in 1.19 Pre-release 3

-   `item_interact_start` is no longer detectable as a vibration to allow more specific actions be detected, like `drink` or `eat`, but `item_interact_finish` still is

## Fixed Bugs in 1.19 Pre-Release 3

-   [MC-209932](https://bugs.mojang.com/browse/MC-209932) Sculk sensors only detect the last turtle egg being broken when being stepped on
-   [MC-210277](https://bugs.mojang.com/browse/MC-210277) Sculk sensors are not activated upon chickens laying eggs
-   [MC-210278](https://bugs.mojang.com/browse/MC-210278) Sculk sensors are not activated upon bees entering or leaving their hive or nest
-   [MC-214622](https://bugs.mojang.com/browse/MC-214622) Sculk sensors do not detect daylight detector mode switching
-   [MC-249094](https://bugs.mojang.com/browse/MC-249094) Unexpected culling of inner sculk shrieker faces
-   [MC-249230](https://bugs.mojang.com/browse/MC-249230) Frogs prioritize eating entities over panicking when being damaged
-   [MC-250162](https://bugs.mojang.com/browse/MC-250162) Placing a map in an item frame will break any intersecting paintings and item frames with a map inside
-   [MC-250238](https://bugs.mojang.com/browse/MC-250238) Frogs attempt to pathfind to entities outside of their reach causing them to spin and twitch constantly
-   [MC-250983](https://bugs.mojang.com/browse/MC-250983) Allays can get stuck and freeze inside non-full blocks
-   [MC-251220](https://bugs.mojang.com/browse/MC-251220) Block lighting on extended parts are a lot darker in 22w17a compared to 1.18.2
-   [MC-251420](https://bugs.mojang.com/browse/MC-251420) Demo Mode: The "Purchase Now!" link's destination is incorrect
-   [MC-251858](https://bugs.mojang.com/browse/MC-251858) Subtitles are higher than in previous versions
-   [MC-251872](https://bugs.mojang.com/browse/MC-251872) The game output and server console are logged with warnings regarding chat packets with invalid signatures when using entity selectors within commands
-   [MC-251878](https://bugs.mojang.com/browse/MC-251878) Sculk sensors hearing items being dropped on the ground doesn't alert shriekers even if a player drops it
-   [MC-251968](https://bugs.mojang.com/browse/MC-251968) /execute running chat related commands logs "Received chat packet without valid signature" warning
-   [MC-252071](https://bugs.mojang.com/browse/MC-252071) Warden still detects after death if signal is traveling before death
-   [MC-252078](https://bugs.mojang.com/browse/MC-252078) Allays no longer flee or panic when taking damage

---

# Minecraft 1.19 Pre-Release 2

A recent change made it possible for more types of mobs to spawn inside Nether Portals, which caused them to instantly change dimensions after spawning. We will not be making any further changes to this before the release of 1.19, but our intent for the future is to prevent most mobs from spawning in Nether Portals and the ones that do will not immediately travel through the portal. Expect to see these changes in a coming version.

## Changes in 1.19 Pre-release 2

​

-   If the Warden is stuck in a liquid, it will angrily despawn instead of digging
-   Reverted using `generic equip` sound when equipping blocks in the head slot

## Technical Changes in 1.19 Pre-release 2

-   Added game event `teleport` with a vibration frequency of 5

## Fixed bugs in 1.19 Pre-release 2

-   [MC-186148](https://bugs.mojang.com/browse/MC-186148) "death.attack.witherSkull.item" displays raw translation string (is untranslated)
-   [MC-186851](https://bugs.mojang.com/browse/MC-186851) "death.attack.sting.item" displays raw translation string (is untranslated)
-   [MC-207268](https://bugs.mojang.com/browse/MC-207268) Sculk sensors don't detect stripping logs, tilling dirt, or pathing grass
-   [MC-208759](https://bugs.mojang.com/browse/MC-208759) Sculk Sensor's 'block placed' doesn't trigger with villagers placing crops
-   [MC-208760](https://bugs.mojang.com/browse/MC-208760) Sculk Sensor's 'block placed' doesn't trigger when snow golems place snow layers
-   [MC-208761](https://bugs.mojang.com/browse/MC-208761) Sculk Sensor's 'block destroyed' doesn't trigger when blocks are destroyed by pistons
-   [MC-209701](https://bugs.mojang.com/browse/MC-209701) Sculk sensors are not activated upon placing food onto campfires
-   [MC-209900](https://bugs.mojang.com/browse/MC-209900) Sculk sensors are not activated upon inserting or retrieving music discs from jukeboxes
-   [MC-210330](https://bugs.mojang.com/browse/MC-210330) Sculk sensors are not activated upon throwing eyes of ender
-   [MC-210489](https://bugs.mojang.com/browse/MC-210489) Sculk sensors are not activated upon pointed dripstone filling partially filled cauldrons
-   [MC-210496](https://bugs.mojang.com/browse/MC-210496) Sculk sensors are not activated upon harvesting sweet berry bushes
-   [MC-210801](https://bugs.mojang.com/browse/MC-210801) Wool incorrectly occludes the vibration of item frames being placed
-   [MC-212430](https://bugs.mojang.com/browse/MC-212430) Sculk sensors are not activated upon rain or snow filling partially filled cauldrons
-   [MC-213387](https://bugs.mojang.com/browse/MC-213387) Sculk sensors don't detect endermen/shulkers teleporting from a place to another
-   [MC-220086](https://bugs.mojang.com/browse/MC-220086) Sculk sensors do not detect using an axe to clear the wax/weathering of a copper block
-   [MC-220087](https://bugs.mojang.com/browse/MC-220087) Sculk sensors do not detect using a honeycomb to wax copper
-   [MC-249696](https://bugs.mojang.com/browse/MC-249696) Certain void worlds fail to spawn the player on the stone platform
-   [MC-250259](https://bugs.mojang.com/browse/MC-250259) Warden AI doesn't function properly when it rides on entities
-   [MC-250941](https://bugs.mojang.com/browse/MC-250941) Goats' horns don't snap on copper ore
-   [MC-250956](https://bugs.mojang.com/browse/MC-250956) Baby goats with horns lose their horns when fed
-   [MC-251314](https://bugs.mojang.com/browse/MC-251314) Goats loaded from older worlds lose their horns
-   [MC-251336](https://bugs.mojang.com/browse/MC-251336) Darkness fog flashes at high duration values
-   [MC-251412](https://bugs.mojang.com/browse/MC-251412) Warden afflicting Darkness to players in the same team
-   [MC-251500](https://bugs.mojang.com/browse/MC-251500) Wardens ignore PersistenceRequired and dig away
-   [MC-251601](https://bugs.mojang.com/browse/MC-251601) Darkness rendering incorrectly when reloading the game
-   [MC-251639](https://bugs.mojang.com/browse/MC-251639) Warden emerging particles don't match up with block they emerge on the entire way
-   [MC-251646](https://bugs.mojang.com/browse/MC-251646) "death.attack.sonic\_boom.item" displays raw translation string (is untranslated)
-   [MC-251670](https://bugs.mojang.com/browse/MC-251670) Villager sometimes won't refill their stock
-   [MC-251675](https://bugs.mojang.com/browse/MC-251675) Mesa Mineshafts no longer generate with /place command outside of badlands biomes despite saying the structure has been generated successfully
-   [MC-251736](https://bugs.mojang.com/browse/MC-251736) Reflected ghast fireball cannot hit the ghast
-   [MC-251824](https://bugs.mojang.com/browse/MC-251824) Wardens aren't angered by being hit with damageless projectiles
-   [MC-251854](https://bugs.mojang.com/browse/MC-251854) "It Spreads" advancement can be granted when killing a mob that does not give experience
-   [MC-251859](https://bugs.mojang.com/browse/MC-251859) Gear equipping sound plays every time armor/elytra durability changes while equipped
-   [MC-251860](https://bugs.mojang.com/browse/MC-251860) The minecraft:item.armor.equip\_generic sound is produced when giving items to allays
-   [MC-251862](https://bugs.mojang.com/browse/MC-251862) Shift clicking the destroy item button in the creative inventory creates a vibration when there is nothing in your equipment slots
-   [MC-251864](https://bugs.mojang.com/browse/MC-251864) The minecraft:item.armor.equip\_generic sound is produced when filling water buckets with fish, axolotls, or tadpoles
-   [MC-251871](https://bugs.mojang.com/browse/MC-251871) The minecraft:item.armor.equip\_generic sound is produced and can only be heard by other players when switching items between hands
-   [MC-251876](https://bugs.mojang.com/browse/MC-251876) Villagers produce armor equipping sound when previewing armor
-   [MC-251889](https://bugs.mojang.com/browse/MC-251889) io.netty.handler.codec.EncoderException when evaluating too many entity selectors in chat preview
-   [MC-251890](https://bugs.mojang.com/browse/MC-251890) run\_command click events send value as command instead of chat message
-   [MC-251915](https://bugs.mojang.com/browse/MC-251915) Milking cows, mooshrooms and goats plays gear equipping sound
-   [MC-251916](https://bugs.mojang.com/browse/MC-251916) Eating food items that return empty containers plays gear equipping sound
-   [MC-251919](https://bugs.mojang.com/browse/MC-251919) Equipping a player head, skull or carved pumpkin displays the generic "Gear equips" subtitle
-   [MC-251920](https://bugs.mojang.com/browse/MC-251920) Taking a plant from a pot plays the gear equipping sound and subtitle
-   [MC-251921](https://bugs.mojang.com/browse/MC-251921) Equipping horse armor onto a horse plays the "Gear equips" sound
-   [MC-251922](https://bugs.mojang.com/browse/MC-251922) "Gear equips" sound plays when equipping or removing a saddle from a horse wearing horse armor
-   [MC-251924](https://bugs.mojang.com/browse/MC-251924) Gear equipping sounds and subtitles are played when foxes pick up any item
-   [MC-251925](https://bugs.mojang.com/browse/MC-251925) Gear equipping sounds and subtitles are played when dolphins throw around items
-   [MC-251927](https://bugs.mojang.com/browse/MC-251927) Gear equipping sounds and subtitles are played when CanPickUpLoot mobs pick up items
-   [MC-251928](https://bugs.mojang.com/browse/MC-251928) Gear equips sound plays when filling a single bottle with honey
-   [MC-251929](https://bugs.mojang.com/browse/MC-251929) Gear equips sound plays when filling a single bottle with water from a water source

---

# Minecraft 1.19 Pre-release 1

Presenting the first pre-release of 1.19: The Wild Update!

From now on, you should mostly see bugs being fixed. In addition to that, pre-releases don't follow the regular snapshot cadence of releasing on Wednesdays, so keep an eye out for the next pre-release ;)

As always, a big thank you to the community for your feedback, bugs reported, and awesome ideas throughout the snapshot series. Let the pre-releases commence!

## Changes in 1.19 Pre-release 1

-   Slightly reduced the number of Mangrove trees in Mangrove Swamps
-   Endermen, Skeletons, Wither Skeletons and Piglins now spawn in a wider range of light levels in the Nether (from light level 0 to 11)
-   Item interaction vibrations are now emitted when you start or finish "using" an item with a start and finish state (such as Bows, Crossbows, Goat Horns, Shields, Food)
-   Item interaction vibrations are now ignored when sneaking
-   Placing items that aren't armor (such as Pumpkins and Skulls) in your headwear slot now plays a generic equip sound

## Technical Changes in 1.19 Pre-release 1

-   Auto-completion is now available for the template argument to `place template`
-   Custom servers can now enable or disable chat preview for certain clients by sending a new network packet
-   Now, a chat preview is also shown for chat-related commands, such as `/say` and `/msg`
-   `test-rainbow-chat` has been removed from `server.properties`

### Added Game Events

-   `note_block_play` with a vibration frequency of 6
-   `instrument_play` with a vibration frequency of 15

## Fixed bugs in 1.19 Pre-release 1

-   [MC-94060](https://bugs.mojang.com/browse/MC-94060) Equipping armor/elytra through inventory or dispenser doesn't play sounds
-   [MC-134892](https://bugs.mojang.com/browse/MC-134892) PacketBuffer.writeString's max length is in bytes, while readString is in characters
-   [MC-209222](https://bugs.mojang.com/browse/MC-209222) Attempting to open the Minecraft Realms menu claims that the client is outdated, even if the snapshot may be newer than the release
-   [MC-210279](https://bugs.mojang.com/browse/MC-210279) Sculk sensors are not activated upon entities being summoned by a spawner
-   [MC-213915](https://bugs.mojang.com/browse/MC-213915) Equipping armor through the inventory does not count as a vibration
-   [MC-218222](https://bugs.mojang.com/browse/MC-218222) Distance value for Sculk Sensors is limited to integers
-   [MC-225195](https://bugs.mojang.com/browse/MC-225195) Goats don't panic when tempted with their favorite food
-   [MC-230735](https://bugs.mojang.com/browse/MC-230735) "FOV Effects" setting description is innacurate
-   [MC-249141](https://bugs.mojang.com/browse/MC-249141) No subtitles are produced upon frogs stepping
-   [MC-249164](https://bugs.mojang.com/browse/MC-249164) The entity.frog.tounge sound is misspelled
-   [MC-249209](https://bugs.mojang.com/browse/MC-249209) Frogs don't panic when tempted with their favorite food
-   [MC-249260](https://bugs.mojang.com/browse/MC-249260) Tadpoles are not tempted by slime balls
-   [MC-249328](https://bugs.mojang.com/browse/MC-249328) Frogs can jump around while being tempted with slimeballs
-   [MC-249456](https://bugs.mojang.com/browse/MC-249456) Tadpoles drop experience, unlike other baby mobs
-   [MC-249619](https://bugs.mojang.com/browse/MC-249619) The comparator frequency of sculk sensors when you are stepping on it is the last frequency it heard
-   [MC-249711](https://bugs.mojang.com/browse/MC-249711) Items collected off the ground by allays travel too high above their hitboxes
-   [MC-249757](https://bugs.mojang.com/browse/MC-249757) 'It Spreads' advancement is not a child of 'Monster Hunter'
-   [MC-249834](https://bugs.mojang.com/browse/MC-249834) Swapping items to the player's off-hand can generate vibrations
-   [MC-249980](https://bugs.mojang.com/browse/MC-249980) The Birthday Song advancement description doesn't capitalise the word Cake
-   [MC-250006](https://bugs.mojang.com/browse/MC-250006) ID of the british cat doesn't match texture name
-   [MC-250019](https://bugs.mojang.com/browse/MC-250019) Sculk catalyst triggers when a villager converts into zombie villager by a zombie
-   [MC-250317](https://bugs.mojang.com/browse/MC-250317) The subtitle for picking up a Tadpole with a bucket is the generic "Bucket fills" subtitle
-   [MC-250351](https://bugs.mojang.com/browse/MC-250351) /tp "argument" duplicated on the tab options
-   [MC-250919](https://bugs.mojang.com/browse/MC-250919) The server crashes when attempting to load chunks that contain command blocks that consist of large numbers of characters within the previous output field
-   [MC-250932](https://bugs.mojang.com/browse/MC-250932) Goat horn subtitles are improperly capitalized
-   [MC-250940](https://bugs.mojang.com/browse/MC-250940) Goat horn playing isn't detected as a vibration
-   [MC-251132](https://bugs.mojang.com/browse/MC-251132) Server logs "Game test server" messages
-   [MC-251312](https://bugs.mojang.com/browse/MC-251312) Entity selectors in /say commands are no longer evaluated
-   [MC-251355](https://bugs.mojang.com/browse/MC-251355) Potted mangrove propagule model is incorrect
-   [MC-251405](https://bugs.mojang.com/browse/MC-251405) Structure Block messages are formatted as chat
-   [MC-251479](https://bugs.mojang.com/browse/MC-251479) Duplicate object key \[lang file\]
-   [MC-251550](https://bugs.mojang.com/browse/MC-251550) Failed to launch the game on 32-bit operating system
-   [MC-251640](https://bugs.mojang.com/browse/MC-251640) io.netty.handler.codec.EncoderException when using special characters in chat message
-   [MC-251641](https://bugs.mojang.com/browse/MC-251641) Game crash regarding warden anger
-   [MC-251647](https://bugs.mojang.com/browse/MC-251647) Chat closes itself if the control for Open Chat is set to Enter
-   [MC-251649](https://bugs.mojang.com/browse/MC-251649) Clicking "incomplete command" message removes / in chat
-   [MC-251650](https://bugs.mojang.com/browse/MC-251650) Iron golems can spawn on non spawnable blocks such as leaves, glass, sea lanterns, etc
-   [MC-251652](https://bugs.mojang.com/browse/MC-251652) Warden emerge/roar/sonic charge/dig animation (and possibly other similar animations) don't start unless the player looks at the Warden first
-   [MC-251656](https://bugs.mojang.com/browse/MC-251656) /say command fails to apply server message styling when sent from a command block, server console, or RCON, unlike /msg
-   [MC-251690](https://bugs.mojang.com/browse/MC-251690) Wardens can spawn on any non-full block, as long as it's solid
-   [MC-251736](https://bugs.mojang.com/browse/MC-251736) Reflected ghast fireball cannot hit the ghast
-   [MC-251762](https://bugs.mojang.com/browse/MC-251762) You can run commands with double slash prefix
-   [MC-251773](https://bugs.mojang.com/browse/MC-251773) The --dev argument for the data generators no longer converts NBT to SNBT properly

---

# Minecraft 1.18.2 Release Candidate

We’re now releasing the first (and hopefully only) release candidate for Minecraft 1.18.2. This release candidate fixes two world generation bugs that could cause a server to stop running. If there are no major issues following this release, no further changes will be done before the full release, which is planned for February 28th. ​ Happy mining!

## Fixed Bugs in 1.18.2 Release Candidate 1

-   [MC-244682](https://bugs.mojang.com/browse/MC-244682) Some custom dimensions settings can cause the server to stop running, but not crash
-   [MC-248764](https://bugs.mojang.com/browse/MC-248764) Some worldgen datapacks can kill the internal server (possibly related to density functions)

---

# Minecraft 1.18.2 Pre-Release 3

The third pre-release for 1.18.2 is now out, fixing more bugs!

Happy Crafting!

## Fixed bugs in 1.18.2 Pre-release 3

-   [MC-218739](https://bugs.mojang.com/browse/MC-218739) Glow berries and glow lichen generation does not cause light updates across chunk borders
-   [MC-244772](https://bugs.mojang.com/browse/MC-244772) Can't double click to join a realm
-   [MC-248539](https://bugs.mojang.com/browse/MC-248539) /locate command not working properly in Flat Worlds
-   [MC-248636](https://bugs.mojang.com/browse/MC-248636) The game output and server console are logged and spammed with "Creating a MIN function between two non-overlapping inputs" when joining or creating a world
-   [MC-248637](https://bugs.mojang.com/browse/MC-248637) Crash when opening singleplayer screen due to StackOverflowError in net.minecraft.nbt.CompoundTag$1.skip
-   [MC-248680](https://bugs.mojang.com/browse/MC-248680) The world freezes on superflat when using the locate command to find a pillager outpost
-   [MC-248748](https://bugs.mojang.com/browse/MC-248748) Explorer maps leading to custom structures can cause the server to hang

---

# Minecraft 1.18.2 Pre-Release 2

The second pre-release for 1.18.2 is now out! This pre-release adds a spline density function and fixes a few bugs.

Enjoy!

## Technical Changes in 1.18.2 Pre-Release 2

-   Added [`spline` density](https://wikipedia.org/wiki/Spline_interpolation) function: general-purpose building block that allows you to express almost any function using a cubic spline

## Fixed bugs in 1.18.2 Pre-Release 2

-   [MC-243766](https://bugs.mojang.com/browse/MC-243766) Unable to put focus on "Copyright Mojang AB. Do not distribute" using Tab key
-   [MC-248638](https://bugs.mojang.com/browse/MC-248638) Strongholds can generate in The Void biome
-   [MC-248681](https://bugs.mojang.com/browse/MC-248681) Superflat worlds cannot be created without using presets
-   [MC-248694](https://bugs.mojang.com/browse/MC-248694) An empty generator-settings string crashes the server when starting up
-   [MC-248717](https://bugs.mojang.com/browse/MC-248717) Fortress mobs can spawn outside of fortresses

---

# Minecraft 1.18.2 Pre-Release 1

We're now releasing the first pre-release for Minecraft 1.18.2. This pre-release introduces the possibility for data packs to customize cave generation and to add new custom structures to worlds.

If everything goes as expected, we aim to release this version on February 28th.

Happy mining!

## Changes in 1.18.2 Pre-release 1

-   Users running Minecraft in a 32-bit environment will receive a warning in the main menu about the upcoming end of 32-bit environment support

## Technical Changes in 1.18.2 Pre-release 1

-   The data pack version is now 9
-   It is now possible to add custom structures in experimental datapacks
-   `locate` and `locatebiome` commands now support tags (prefix with `#` to distinguish from normal ids)
-   The `locate` command parameter is now a configured structure rather than a structure type. For instance, you can now use `/locate village_desert` or `/locate shipwreck_beached`
-   A lot of the cave generation is now configurable through data packs

### Configurable caves

-   A new registry was added for Density functions (caves are created by combining those together)
-   Noise settings got a new field `noise_router` (and lost a couple of flags), see `worldgen/noise_settings` folder in the worldgen report
-   Noise router wires data-driven parts of the cave generation with the rest of the code

### Configured Structures and Structure Sets

The game now generates and stores data-driven configured structures.

-   Experimental datapacks can add new structure sets
-   The `feature` field in location predicates now references a configured feature
-   The `exploration_map` loot table function `destination` field is now a configured feature tag id
-   The `exploration_map` loot table function no longer automatically sets the display name of the map

#### Side effects

Some gameplay oddities have been affected by this change.

-   Dolphins will now more accurately pick the closest structure regardless of type
-   Bastion Remnant bounding boxes are now slightly more accurate to the shape of the structure

## Fixed bugs in 1.18.2 Pre-release 1

-   [MC-3524](https://bugs.mojang.com/browse/MC-3524) Structure related mobs do not spawn in flat type world generation
-   [MC-146854](https://bugs.mojang.com/browse/MC-146854) Player movement favors x axis when in a corner
-   [MC-179315](https://bugs.mojang.com/browse/MC-179315) Ruined portals never generate in superflat worlds by default
-   [MC-210612](https://bugs.mojang.com/browse/MC-210612) Strongholds do not generate in certain customized worlds despite /locate saying otherwise
-   [MC-241288](https://bugs.mojang.com/browse/MC-241288) Support for custom structures has been removed
-   [MC-244137](https://bugs.mojang.com/browse/MC-244137) The option "level-seed" is not present in server.properties by default
-   [MC-248532](https://bugs.mojang.com/browse/MC-248532) Elytra firework particle spawns on the wrong hand when dual wielding fireworks

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
-   [MC-239900](https://bugs.mojang.com/browse/MC-239900) Upgrading custom world to 21w43a ignores min\_y and height
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
-   [MC-239714](https://bugs.mojang.com/browse/MC-239714) Doing /locate desert\_pryamid in a desert superflat world freezes the world
-   [MC-239851](https://bugs.mojang.com/browse/MC-239851) Upgrading old worlds causes leaves to change to surface builder blocks
-   [MC-239852](https://bugs.mojang.com/browse/MC-239852) Lava pools intersecting strongholds can cause end portal frames to be deleted
-   [MC-240021](https://bugs.mojang.com/browse/MC-240021) Cullface arguments in cauldrons are excessive
-   [MC-240481](https://bugs.mojang.com/browse/MC-240481) Deepslate doesn't generate in the new cave generation under old chunks
-   [MC-240482](https://bugs.mojang.com/browse/MC-240482) There is no bedrock in the overworld in old chunks
-   [MC-240495](https://bugs.mojang.com/browse/MC-240495) Deepslate does not generate below Y=0 in Badlands or Wooded Badlands Biomes
-   [MC-240503](https://bugs.mojang.com/browse/MC-240503) Bedrock doesn\`t generate in Badlands or Wooded Badlands
-   [MC-240516](https://bugs.mojang.com/browse/MC-240516) Noise cave carvers don't generate below old chunks
-   [MC-240531](https://bugs.mojang.com/browse/MC-240531) Block simulation distance is always 8 chunks regardless of the slider's value
-   [MC-240534](https://bugs.mojang.com/browse/MC-240534) Clicking a JFR link copies full server-side path to clipboard
-   [MC-240631](https://bugs.mojang.com/browse/MC-240631) Extremely slow End terrain generation
-   [MC-240998](https://bugs.mojang.com/browse/MC-240998) Portals no longer load chunks as non entity processing

---

# Minecraft 1.17.1 Release Candidate 2

A second Release Candidate for Minecraft Java Edition 1.17.1 is now available in the launcher, fixing some critical issues. If nothing critical is found, we expect this to be released as the full version of 1.17.1 on Tuesday, July 6th.

## The Caves & Cliffs Preview

Download the [latest datapack](https://launcher.mojang.com/v1/objects/622bf0fd298e1e164ecd05d866045ed5941283cf/CavesAndCliffsPreview.zip).

---

# Minecraft 1.17.1 Release Candidate 1

A first and hopefully only Release Candidate for Minecraft: Java Edition 1.17.1 is now available in the launcher, fixing a few more crashes and bugs. If nothing critical is found, we expect this to be released as the full version of 1.17.1 on Tuesday, July 6th.

## The Caves & Cliffs Preview

Download the [latest datapack](https://launcher.mojang.com/v1/objects/622bf0fd298e1e164ecd05d866045ed5941283cf/CavesAndCliffsPreview.zip).

## Fixed bugs in 1.17.1 Release Candidate 1

-   [MC-230716](https://bugs.mojang.com/browse/MC-230716) "death.attack.dryout" and "death.attack.dryout.player" display raw translation strings (are untranslated)

---

# Minecraft 1.17.1 Pre-Release 3

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

# Minecraft 1.17.1 Pre-Release 2

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

# Minecraft 1.17.1 Pre-Release 1

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
-   [MC-227483](https://bugs.mojang.com/browse/MC-227483) root\_system feature config's codec uses a wrong field
-   [MC-227520](https://bugs.mojang.com/browse/MC-227520) Overworld Fossils always generate at bedrock level
-   [MC-227557](https://bugs.mojang.com/browse/MC-227557) End portal texture appears stretched after world conversion
-   [MC-227618](https://bugs.mojang.com/browse/MC-227618) Small dripleaf is consumed without being placed when used on tall seagrass
-   [MC-227651](https://bugs.mojang.com/browse/MC-227651) Group for lapis lazuli ore smelting and blasting recipes is misspelled
-   [MC-227821](https://bugs.mojang.com/browse/MC-227821) Client crash when trying to create/edit realm immediately after deleting previous one
-   [MC-227891](https://bugs.mojang.com/browse/MC-227891) Ender pearls despawn when player logs out of a server
-   [MC-228219](https://bugs.mojang.com/browse/MC-228219) Thrown ender pearls disappear upon entering the exit end portal
-   [MC-228343](https://bugs.mojang.com/browse/MC-228343) java.lang.NullPointerException when random\_selector default feature isn't found
-   [MC-228430](https://bugs.mojang.com/browse/MC-228430) Very long loading pause while booting the game ("Failed to add PDH Counter", caused by oshi)
-   [MC-228828](https://bugs.mojang.com/browse/MC-228828) Specifying the --server parameter when starting the game, causes the game to crash
-   [MC-229299](https://bugs.mojang.com/browse/MC-229299) Blue axolotls can spawn naturally

---

# Minecraft 1.17 Release Candidate 2

## Fixed Bugs in 1.17 Release Candidate 2

-   Fixed a few critical issues

---

# Minecraft 1.17 Release Candidate 1

We're now releasing the first (and hopefully only) release candidate for Caves & Cliffs: Part I. If there are no major issues following this release, no further changes will be done before the full release.

Happy mining!

## The Caves & Cliffs Preview

Download the [latest datapack](https://launcher.mojang.com/v1/objects/622bf0fd298e1e164ecd05d866045ed5941283cf/CavesAndCliffsPreview.zip).

## Fixed bugs in 1.17 Release Candidate 1

-   [MC-227323](https://bugs.mojang.com/browse/MC-227323) Custom player heads sometimes flash when placed on armor stands
-   Improved desync issues when exiting a boat over a high latency connection
-   Fixed crashes

---

# Minecraft 1.17 Pre-Release 5

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

# Minecraft 1.17 Pre-Release 4

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

# Minecraft 1.17 Pre-Release 3

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
-   [MC-226874](https://bugs.mojang.com/browse/MC-226874) Player's owned player\_head on mobs are flashing
-   [MC-226956](https://bugs.mojang.com/browse/MC-226956) Gravity blocks do not break when doEntityDrops is set to false
-   [MC-226970](https://bugs.mojang.com/browse/MC-226970) Stars are occluded by render fog
-   [MC-227018](https://bugs.mojang.com/browse/MC-227018) Changing or reloading resource packs does not reload core shaders until reloading a second time

---

# Minecraft 1.17 Pre-Release 2

It's Monday and it's time for another pre-release! This one fixed a few bugs and crashes.

In case you missed our recent [news](https://www.minecraft.net/article/caves---cliffs--part-i-has-release-date-), we just announced that we're releasing Caves & Cliffs Part I on June 8th. That's soon!

## Bugs fixed in 1.17 Pre-release 2

-   [MC-68129](https://bugs.mojang.com/browse/MC-68129) Smooth lighting doesn't work properly underwater
-   [MC-196298](https://bugs.mojang.com/browse/MC-196298) Arrows fired into the side of bamboo or pointed dripstone never despawn
-   [MC-205840](https://bugs.mojang.com/browse/MC-205840) Smooth lighting behaves oddly on blocks covered with tinted glass
-   [MC-213767](https://bugs.mojang.com/browse/MC-213767) Flowering azalea leaves ID is unintuitive
-   [MC-220698](https://bugs.mojang.com/browse/MC-220698) The ExplosionPower of ghast fireballs is uncapped, causing a freeze / crash
-   [MC-223602](https://bugs.mojang.com/browse/MC-223602) Glowing translucent entities often don't merge their outlines with other glowing entities
-   [MC-225190](https://bugs.mojang.com/browse/MC-225190) Tnt can be pushed with enchanted sword with knockback
-   [MC-225911](https://bugs.mojang.com/browse/MC-225911) Slimes and Magma Cubes not interacting with player
-   [MC-226470](https://bugs.mojang.com/browse/MC-226470) Nether Fossils generate on the nether roof above bedrock in soul sand valleys
-   [MC-226561](https://bugs.mojang.com/browse/MC-226561) Facing away from signs with glowing text makes the text disappear or z-fight
-   [MC-226576](https://bugs.mojang.com/browse/MC-226576) Unknown CPU on Debug menu.
-   [MC-226782](https://bugs.mojang.com/browse/MC-226782) /debug start does not work as described

---

# Minecraft 1.17 Pre-Release 1

The first 1.17 pre-release is here!

From now on, you should mostly see bugs being fixed. In addition to that, pre-releases doesn't follow the regular snapshot cadence of releasing on Wednesdays, so keep an eye out!

Addtionally, based on feedback from the community, we have decided to include candles in part 1 of Caves & Cliffs again. Candles will become available in Bedrock shortly after the release of part 1.

## New Features in 1.17 Pre-release 1

-   Added new advancements

### Advancements

-   Added "Whatever Floats Your Goat!" for floating in a boat with a goat
-   Added "Wax on" for applying wax to a Copper block!
-   Added "Wax off" for scraping wax off a Copper block!
-   Added "The Cutest Predator" for catching an axolotl in a bucket!
-   Added "The Healing Power of Friendship!" for teaming up with an axolotl and winning a fight
-   Added "Glow and Behold" for making a sign glow
-   Added "Light as a Rabbit" for walking on powder snow with leather boots
-   Added "Surge Protector!" for having a lightning strike a lightning rod near a villager without setting the area on fire
-   Added "Is it a Bird?" for looking at a parrot through a spyglass
-   Added "Is it a Balloon?" for looking at a ghast through a spyglass
-   Added "Is it a Plane?" for looking at a dragon through a spyglass

## Changes in 1.17 Pre-release 1

-   Candles have been added back to the creative inventory
-   Recipes for crafting and dying candles are once again available
-   Candles now have a different texture when lit
-   Glowing text on signs now has an outer glow, making text in dark colors more visible in the dark
-   Holding down the space bar now increases the scroll speed in the credits

## The Caves & Cliffs Preview

Download the [updated datapack](https://launcher.mojang.com/v1/objects/233aa01c6db99ffcf95594e384e72671ae279ced/CavesAndCliffsPreview.zip).

## Technical changes in 1.17 Pre-release 1

-   Added `started_riding`, `lightning_strike` and `using_item` advancement triggers
-   Added `source` condition to `effects_changed` trigger
-   Added `lightning_bolt` sub-predicate
-   Added `passenger`, `stepping_on` and `lightning_bolt` properties to entity predicate
-   Added `looking_at` condition to player sub-predicate
-   Expanded `item` field on item predicate to `items`
-   Expanded `block` field on block predicate to `blocks`
-   Added F3+L shortcut to generate and persist performance metrics from in-game
    -   F3+L on single-player worlds will also include reports for the integrated server
-   Removed debug report command (use perf start/stop for server performance measurement)
-   perf start/stop command on dedicated servers will now generate and persist server performance metrics

### Advancements

#### New triggers

##### `started_riding`

-   Triggered when player starts riding a vehicle or entity starts riding vehicle currently ridden by player
-   Conditions:
    -   `player` - either a player that started riding or one of boat passengers

##### `lightning_strike`

-   Triggered when lighting finishes (i.e. entity disappears)
-   Triggers for any player on server
-   Conditions
    -   `player` - player for which this trigger runs
    -   `lightning` - predicate for lightning entity
    -   `bystander` - predicate for one of the entities in certain area around strike not hurt by it

##### `using_item`

-   Triggered for every tick of using items (like crossbows, spyglass, fishing rods, etc)
-   Conditions
    -   `player` - players that uses item
    -   `item` - item being used

#### Changed triggers

##### `effects_changed`

-   Added `source` triggers that matches entity that triggered the change
-   Might be empty when:
    -   there is no entity (for example, effect gained from beacon)
    -   the effect is self-applied
    -   effect is removed

#### Changed predicates

##### Item predicate

-   `item` field expended to `items`, now accepting array of item types

##### Block predicate

-   `block` field expended to `blocks`, now accepting array of block types

##### Entity predicate

-   `passenger` - new sub-predicate for passenger directly riding this vehicle (if present, must match one or more)
-   `stepping_on` - location predicate for block entity is currently standing on
-   `lightning_bolt` - sub-predicate valid only for lightning bolt entity

##### Player predicate

-   `looking_at` - entity currently viewed by player
    -   uses same line-of-sight rules as attacking mobs
    -   actual detection radius might be changed in future

#### Lightning bolt

-   `blocks_set_on_fire` - range check for of blocks set on fire by this entity
-   `entity_struck` - predicate for entities struck by this lightning (if present, must match one or more)

### Performance metrics reporting

These will be saved to a zip file in `debug/profiling/<yyyy-MM-dd_HH.mm.ss-[levelname]-[version]>.zip` and could be used for performance regression analysis if included in bug reports.

The exact metrics, output format, and names are susceptible to change between versions. Our plan is to continue iterating on which metrics to capture.

#### Client F3+L shortcut

Pressing F3+L while in the game will start a recording for 10 seconds capturing metrics such as tick durations, used heap sizes and other more detailed stats.

Pressing F3+L before the 10-second limit will end the recording early.

This shortcut is always available to clients, even on multi-player servers where it will record client-side performance.

#### Dedicated Server perf start/stop command

`perf start` will start a recording for 10 seconds capturing metrics such as tick durations, used heap sizes and other more detailed stats.

`perf stop` before the 10-second limit will end the recording early.

## Bugs fixed in 1.17 Pre-release 1

-   [MC-19690](https://bugs.mojang.com/browse/MC-19690) Reducing maxHealth / max\_health can cause fake death
-   [MC-65587](https://bugs.mojang.com/browse/MC-65587) Lag spike while loading player head textures/player skins
-   [MC-104897](https://bugs.mojang.com/browse/MC-104897) End crystals placed on exit portals generated before 1.9 do not respawn the ender dragon
-   [MC-117708](https://bugs.mojang.com/browse/MC-117708) Credits background jitters
-   [MC-118757](https://bugs.mojang.com/browse/MC-118757) Increasing Game State Rain Level values make the game increasingly laggier and distorts UI
-   [MC-148809](https://bugs.mojang.com/browse/MC-148809) Structure block data length limited to 12
-   [MC-163945](https://bugs.mojang.com/browse/MC-163945) Intersecting structures can create corrupted block entities (spawner / chest)
-   [MC-189336](https://bugs.mojang.com/browse/MC-189336) Shifting around servers in the server list crashes the game (ArrayIndexOutOfBoundsException)
-   [MC-192889](https://bugs.mojang.com/browse/MC-192889) When placing certain heads or putting them in entities' head slot the game stutters
-   [MC-197942](https://bugs.mojang.com/browse/MC-197942) Leaves change to stone near Lava Pool (Recurrence of MC-48340)
-   [MC-198957](https://bugs.mojang.com/browse/MC-198957) End Portal Frames change to Stone near Lava Pool
-   [MC-202249](https://bugs.mojang.com/browse/MC-202249) Angering passive mobs in new nether chunks very far away from previously generated chunks, then entering a nether portal causes server to completely freeze
-   [MC-203131](https://bugs.mojang.com/browse/MC-203131) Setting the weight in Template Pool to high values will lag world and can cause out of memory error.
-   [MC-203558](https://bugs.mojang.com/browse/MC-203558) Lighting a candle is sometimes delayed
-   [MC-203661](https://bugs.mojang.com/browse/MC-203661) Flowing liquids look very dark through tinted glass
-   [MC-203704](https://bugs.mojang.com/browse/MC-203704) Candles don't show flame animations when particles are set to "Minimal"
-   [MC-204649](https://bugs.mojang.com/browse/MC-204649) Amethyst blocks don't make chime sounds when walked on by certain mobs
-   [MC-205035](https://bugs.mojang.com/browse/MC-205035) Powder Snow Bucket is not grouped with Snowball or buckets in creative inventory
-   [MC-208604](https://bugs.mojang.com/browse/MC-208604) While the mainhand is empty and there's a loaded crossbow in the offhand, the mainhand will appear invisible
-   [MC-209819](https://bugs.mojang.com/browse/MC-209819) Server crash when pathfinding to player that is teleporting away
-   [MC-211601](https://bugs.mojang.com/browse/MC-211601) Entities are loaded after scheduled ticks are processed causing detector rails, pressure plates, etc. to turn off
-   [MC-212142](https://bugs.mojang.com/browse/MC-212142) Applying glow ink on signs doesn't render the text bright without also having applied a custom color
-   [MC-212146](https://bugs.mojang.com/browse/MC-212146) Glow lichen can generate floating inside underground structures
-   [MC-212207](https://bugs.mojang.com/browse/MC-212207) Geodes generating inside icebergs
-   [MC-213062](https://bugs.mojang.com/browse/MC-213062) A ruined portal generated in an end portal
-   [MC-213799](https://bugs.mojang.com/browse/MC-213799) Dripleaf isn't properly held in the player's hand
-   [MC-214057](https://bugs.mojang.com/browse/MC-214057) Entities no longer showing flame animation when in water/lava at the same time
-   [MC-214636](https://bugs.mojang.com/browse/MC-214636) Small dripleaf leafs can overlap each other and cause z-fighting
-   [MC-214684](https://bugs.mojang.com/browse/MC-214684) Azaleas cannot be placed in flower pots
-   [MC-216276](https://bugs.mojang.com/browse/MC-216276) Lava pools break bedrock with custom world generation
-   [MC-218112](https://bugs.mojang.com/browse/MC-218112) SynchedEntityData is using locks incorrectly
-   [MC-218831](https://bugs.mojang.com/browse/MC-218831) Lots of missing shaders in the game assets
-   [MC-218972](https://bugs.mojang.com/browse/MC-218972) The glowing effect outline omits parts of entities if the entity is invisible
-   [MC-219762](https://bugs.mojang.com/browse/MC-219762) More performant noise blending algorithm in BlendedNoise
-   [MC-221554](https://bugs.mojang.com/browse/MC-221554) When searching, the goat spawn egg appears in the middle of the different boat types
-   [MC-221820](https://bugs.mojang.com/browse/MC-221820) Inconsistency: Enderman is able to pick up flowering azalea, while unable to hold normal azalea bush.
-   [MC-223021](https://bugs.mojang.com/browse/MC-223021) glShaderSource fails on some AMD drivers resulting in a crash on 1.17
-   [MC-223843](https://bugs.mojang.com/browse/MC-223843) Mycelium inside enderman\_holdable.json twice
-   [MC-224159](https://bugs.mojang.com/browse/MC-224159) Absorbtion hearts don't have the wither heart effect
-   [MC-224445](https://bugs.mojang.com/browse/MC-224445) Reloading resource packs with fabulous graphics causes screen to become black, after a few times causes crash for AMD drivers
-   [MC-224778](https://bugs.mojang.com/browse/MC-224778) Game crashes when there is a block with no facing block state in #wall\_corals and a warm ocean tries to generate
-   [MC-224861](https://bugs.mojang.com/browse/MC-224861) Falling blocks disappear for a moment when landing
-   [MC-224862](https://bugs.mojang.com/browse/MC-224862) Azalea and Flowering Azaleas can take bone meal despite being on clay
-   [MC-225010](https://bugs.mojang.com/browse/MC-225010) Closing the inventory in creative mode while having an item on the cursor turns it into a ghost item
-   [MC-225129](https://bugs.mojang.com/browse/MC-225129) Players do not despawn until they respawn
-   [MC-225193](https://bugs.mojang.com/browse/MC-225193) Goats will attempt to ram entities that are outside of the world border
-   [MC-225315](https://bugs.mojang.com/browse/MC-225315) Selected text on signs blinks
-   [MC-225404](https://bugs.mojang.com/browse/MC-225404) The axe is still an appropriate tool for moss carpets
-   [MC-225722](https://bugs.mojang.com/browse/MC-225722) java.lang.IllegalArgumentException: bound must be positive
-   [MC-225773](https://bugs.mojang.com/browse/MC-225773) Axolotls can make ambient noises when they're playing dead
-   [MC-225843](https://bugs.mojang.com/browse/MC-225843) Snow layers can still generate floating over lakes
-   [MC-225850](https://bugs.mojang.com/browse/MC-225850) Grass, tall grass, flower, double flower, fern, large fern and tree can generate on sand or gravel
-   [MC-225853](https://bugs.mojang.com/browse/MC-225853) Minecraft sometimes crashes when trying to start 21w20a for the first time
-   [MC-225895](https://bugs.mojang.com/browse/MC-225895) Floating grass can still generate above lava lakes
-   [MC-225916](https://bugs.mojang.com/browse/MC-225916) Non-waxed oxidized copper blocks don't require at least stone tier to be mined
-   [MC-225919](https://bugs.mojang.com/browse/MC-225919) Coal Ore from fossils can generate through bedrock
-   [MC-225929](https://bugs.mojang.com/browse/MC-225929) Item statistic sorting not functioning
-   [MC-225978](https://bugs.mojang.com/browse/MC-225978) Non-waxed weathered copper blocks appear twice in needs\_stone\_tool.json
-   [MC-226192](https://bugs.mojang.com/browse/MC-226192) Crash upon attempting to create a new scoreboard objective: java.lang.NullPointerException: Cannot invoke "String.toLowerCase(java.util.Locale)" because "â˜ƒ" is null

---

# Minecraft 1.16.5 Release Candidate 1

We're now releasing 1.16.5 Release Candidate 1, which addresses two critical stability issues. If no further critical issues are found, we plan to release 1.16.5 on Friday. We hope to release another Caves & Cliffs snapshot next week.

Happy mining!

---

# Minecraft 1.16.4 Release Candidate 1

We have now released 1.16.4 Release Candidate 1. If no further critical issues are found, we expect this version to be the full release of 1.16.4 on Thursday.

## Changes in 1.16.4 Release Candidate 1

-   Added an option to hide matched names

### Hide matched names

-   Some servers send chat messages in non-standard formats. With this option on, the game will attempt to apply chat hiding anyway by matching the text in messages

## Fixed bugs in 1.16.4 Release Candidate 1

-   [MC-202614](https://bugs.mojang.com/browse/MC-202614) Search function in social interactions screen only finds names that begin with the letters that you typed in

---

# Minecraft 1.16.4 Pre-Release 2

Time for another pre-release! This time around we've fixed some issues with the new social interactions screen and we've also fixed some crashes.

In case you haven't heard, yesterday we announced that Mojang accounts will be migrating into Microsoft accounts. With this pre-release, we are preparing for that by having the game understand the settings and block-list of Microsoft accounts. You can read more about that over [here](https://www.minecraft.net/article/java-edition-moving-house), and you can find answers to questions you might have in the [FAQ](https://help.minecraft.net/hc/articles/360050865492). The FAQ will be continuously updated.

We aim to release 1.16.4 sometime during next week.

## Changes in 1.16.4 Pre-release 2

-   Players blocked in your Microsoft account are now also blocked in the game
-   A button to open a link to the Accessibility Guide can now be found in the Accessibility Options screen

### Social Interactions

-   The status of a player is now listed below their name on the Social Interactions screen
-   A new tab is available to filter by Blocked players in the Social Interactions screen
-   Chat from blocked players is always hidden
-   Realms invites from blocked players are hidden

## Fixed bugs in 1.16.4 Pre-release 2

-   [MC-202150](https://bugs.mojang.com/browse/MC-202150) Slider bar on social menu appears broken
-   [MC-202147](https://bugs.mojang.com/browse/MC-202147) Cursor in Social Interactions & Recipe Book & Anvil menu doesn’t blink
-   [MC-202137](https://bugs.mojang.com/browse/MC-202137) Social Interaction Screen says players for 1 player
-   [MC-202143](https://bugs.mojang.com/browse/MC-202143) Social Interactions search bar does not stay selected when switching tabs, although the cursor remains
-   [MC-202145](https://bugs.mojang.com/browse/MC-202145) Opening the Social Interactions menu in a singleplayer world open to LAN after attempting to join an outdated multiplayer server displays the name of the outdated server instead of the name of the current world
-   [MC-202156](https://bugs.mojang.com/browse/MC-202156) Social Interactions search box entries can go out of the box
-   [MC-202155](https://bugs.mojang.com/browse/MC-202155) Outdated server warn text doesn't actually exist
-   [MC-202136](https://bugs.mojang.com/browse/MC-202136) Social Interaction Toast icon doesn't render properly with Programmer Art resource pack
-   [MC-201885](https://bugs.mojang.com/browse/MC-201885) Divide by zero error in the Ender dragon entity class can cause a server crash and infinite velocity

---

# Minecraft 1.16.4 Pre-Release 1

The first pre-release for 1.16.4 is officially out! ​ If you’ve been on the Internet for some time, you’ve probably noticed that you occasionally run into other players that you don’t get along with. To alleviate some of that frustration, we’re introducing a UI element called the “social interactions screen”, which will let you disable chatting with certain players, thus hiding any messages you receive from them. Additionally, the 1.16.4 update will contain some fixes for critical bugs, but other than that, this will be it for this dot-release. ​ Please help us out by testing the new UI and reporting any bugs you find on the [Minecraft Issue Tracker](https://aka.ms/snapshotbugs?ref=launcher). ​

## New Features in 1.16.4 Pre-release 1

​

-   New UI called Social Interactions Screen

​

### Social Interactions Screen

A new screen available in Multiplayer which shows a list of all players on a server so you can can hide chat from any player. ​

-   Opens with a configurable key binding, by default P
-   Whether a player is hidden resets when re-joining a server

​

## Technical Changes in 1.16.4 Pre-release 1

​

-   New network protocol scheme, with a high bit (bit 30) set for snapshots. The protocol version will increase by 1 for each snapshot, but full releases may keep the same protocol version as the previous full release in cases where the network protocols are compatible
-   More information is now added to the crash log in cases where poor performance causes the server to crash

​

## Fixed bugs in 1.16.4 Pre-release 1

​

-   [MC-192434](https://bugs.mojang.com/browse/MC-192434) Netherite Leggings are textured weirdly
-   [MC-199487](https://bugs.mojang.com/browse/MC-199487) WorldGen Deadlock

---

# Minecraft 1.16.3 Release Candidate 1

What better way to start the week than with a new release candidate that fixes two bugs? 1.16.3 addresses a duplication exploit, along with a pathfinding issue.

## Fixed bugs in 1.16.3 Release Candidate 1

-   [MC-198678](https://bugs.mojang.com/browse/MC-198678) Giving an item and a gold ingot to a baby piglin and killing it duplicates the item
-   [MC-196449](https://bugs.mojang.com/browse/MC-196449) Piglins, Piglin Brutes, Hoglins and Zoglins have trouble pathfinding to the player when attacking

---

# Minecraft 1.16.2 Release Candidate 2

We have now released 1.16.2 Release Candidate 2, fixing a few critical issues. If no further critical issues are found, we expect this version to be the full release of 1.16.2 tomorrow.

## Fixed bugs in 1.16.2 Release Candidate 2

-   [MC-197512](https://bugs.mojang.com/browse/MC-197512) Incompatible resource packs don't display their name and description anymore
-   [MC-197362](https://bugs.mojang.com/browse/MC-197362) Cannot load 2 or more resource packs if the second one is incompatible
-   [MC-197354](https://bugs.mojang.com/browse/MC-197354) Block event lag in 1.16.2-rc1 is still higher than in 1.15.2
-   [MC-197348](https://bugs.mojang.com/browse/MC-197348) Piston heads occasionally appear twice in certain piston setups

---

# Minecraft 1.16.2 Release Candidate 1

We have now released 1.16.2 Release Candidate 1, fixing even more stability issues. If no further critical issues are found, we expect this version to be the full release of 1.16.2 on Tuesday next week.

## Technical Changes in 1.16.2 Release Candidate 1

-   The Resource and Data pack version has been raised to 6

## Fixed bugs in 1.16.2 Release Candidate 1

-   [MC-197275](https://bugs.mojang.com/browse/MC-197275) Due to changes to walls, "pack\_format: 5" is not cross-compatible between 1.15 and 1.16
-   [MC-197263](https://bugs.mojang.com/browse/MC-197263) End sky and nether fog don't work on servers
-   [MC-197258](https://bugs.mojang.com/browse/MC-197258) Certain dimensions can cause a game crash
-   [MC-197225](https://bugs.mojang.com/browse/MC-197225) Crash: java.util.concurrent.CompletionException: u: Exception generating new chunk
-   [MC-197197](https://bugs.mojang.com/browse/MC-197197) Game crashes/freezes after creating/entering a Superflat world without presets
-   [MC-194933](https://bugs.mojang.com/browse/MC-194933) Game crashes when loading a custom biome / java.lang.UnsupportedOperationException: Trying to add tag of type 8 to list of 10
-   [MC-190103](https://bugs.mojang.com/browse/MC-190103) Crash when using a nether portal: java.lang.IndexOutOfBoundsException: fromIndex < 0: -2368549

---

# Minecraft 1.16.2 Pre-Release 3

We have now released 1.16.2 Pre-release 3, fixing some stability issues.

## Fixed bugs in 1.16.2 Pre-release 3

-   [MC-105248](https://bugs.mojang.com/browse/MC-105248) Wet wolves become nearly black in dark areas
-   [MC-107529](https://bugs.mojang.com/browse/MC-107529) Marker:1 Armor Stands render themself and their equipment dark if inside solid blocks
-   [MC-167756](https://bugs.mojang.com/browse/MC-167756) Wolf is rendered too dark when not directly affected by skylight
-   [MC-191388](https://bugs.mojang.com/browse/MC-191388) "No key position\_predicate in MapLike" console spam
-   [MC-197053](https://bugs.mojang.com/browse/MC-197053) Pressing F3+D clears the pending lines message, but doesn't clear the pending messages
-   [MC-197152](https://bugs.mojang.com/browse/MC-197152) Ghost Blocks can be generated in some piston setups
-   [MC-197218](https://bugs.mojang.com/browse/MC-197218) Piston arm appears twice during retraction in some mechanisms

---

# Minecraft 1.16.2 Pre-Release 2

We have now released the second pre-release for Minecraft 1.16.2, in which another round of bugs have been squished!

## Changes in 1.16.2 Pre-release 2

-   Crimson and Warped Roots no longer require shears when mined

## Technical Changes in 1.16.2 Pre-release 2

### Execute Command

-   `execute in` now respects dimension scaling

## Fixed bugs in 1.16.2 Pre-release 2

-   [MC-69876](https://bugs.mojang.com/browse/MC-69876) Pistons at Y=1 do not push downwards / at Y=254 do not push upwards
-   [MC-124320](https://bugs.mojang.com/browse/MC-124320) Endermen can pick up and place snowless snowy grass blocks
-   [MC-130558](https://bugs.mojang.com/browse/MC-130558) Item frames cannot be emptied if gamerule doEntityDrops is set to false
-   [MC-134084](https://bugs.mojang.com/browse/MC-134084) If gamerule sendCommandFeedback is disabled, /msg or /tell don't display the message to the sender
-   [MC-136553](https://bugs.mojang.com/browse/MC-136553) Dyes in creative inventory are in reverse order
-   [MC-152037](https://bugs.mojang.com/browse/MC-152037) Powered, activator and detector rails are deleted when pushed/pulled onto a block they cannot be placed on
-   [MC-187357](https://bugs.mojang.com/browse/MC-187357) Strongholds will not generate in floating\_islands or caves preset
-   [MC-189736](https://bugs.mojang.com/browse/MC-189736) "distance" within predicate no longer works
-   [MC-190552](https://bugs.mojang.com/browse/MC-190552) Demo mode resets position and inventory upon launch
-   [MC-190859](https://bugs.mojang.com/browse/MC-190859) floating\_islands or caves buffet worlds no longer generate strongholds and ender eyes do not locate previously generated strongholds after upgrading to 1.16
-   [MC-192136](https://bugs.mojang.com/browse/MC-192136) Lava damage works differently than in previous versions
-   [MC-192236](https://bugs.mojang.com/browse/MC-192236) Endermen can place blocks on top of item frames on the floor
-   [MC-192371](https://bugs.mojang.com/browse/MC-192371) Paintings in the same block space pop off when chunk loads
-   [MC-192845](https://bugs.mojang.com/browse/MC-192845) Block Event Lag in 1.16 is excessive
-   [MC-194217](https://bugs.mojang.com/browse/MC-194217) Lava sets nether vegetation on fire despite it being fire resistant
-   [MC-194867](https://bugs.mojang.com/browse/MC-194867) Minecarts come out the wrong side of a nether portal and lose momentum when coming back to overworld
-   [MC-194953](https://bugs.mojang.com/browse/MC-194953) Custom Biomes are not useable in Predicates
-   [MC-195803](https://bugs.mojang.com/browse/MC-195803) Mob kill statistics are formatted in reverse: "N killed you times"
-   [MC-195851](https://bugs.mojang.com/browse/MC-195851) "Hat" layer on helmets detaches from Piglins' heads while bartering
-   [MC-196245](https://bugs.mojang.com/browse/MC-196245) Charged creeper does not always drop skull if zombie variants are nearby
-   [MC-196441](https://bugs.mojang.com/browse/MC-196441) Stonecutter/Smithing Table recipes are not given after crafting a stack of more than one
-   [MC-196469](https://bugs.mojang.com/browse/MC-196469) F1 hides the nausea green tint
-   [MC-196473](https://bugs.mojang.com/browse/MC-196473) Pufferfish gives Nausea II instead of the maximum of Nausea I
-   [MC-196653](https://bugs.mojang.com/browse/MC-196653) Creating multiple datapack dimensions which reference the same dimension\_type string causes "unregistered dimension" crash
-   [MC-196743](https://bugs.mojang.com/browse/MC-196743) Custom/modified biomes don't work in the overworld

---

# Minecraft 1.16.2 Pre-Release 1

It's time for pre-releases for Minecraft Java Edition 1.16.2!

From now on you should mostly see bug fixes leading up to the full release of 1.16.2 which we expect to happen in a few weeks.

## New Features in 1.16.2 Pre-release 1

-   New accessibility settings have been added to help with visual comfort

### Accessibility

-   Distortion effects such as nausea and the Nether portal overlay can now be reduced
-   At lower values, the nausea effect is replaced with a green overlay as an alternative visualization
-   Field of view effects shown after speed modifiers are applied can now be reduced

## Changes in 1.16.2 Pre-release 1

-   Chains can now be placed in all orientations
-   Endermen will no longer place their held blocks onto bedrock blocks
-   Piglins now become angry with players who open or destroy a Chest Minecart
-   Villagers now lose their job sites when changing dimension
-   Chat delay has been added to the Chat Settings screen

## Technical Changes in 1.16.2 Pre-release 1

-   Custom world generation and dimension settings now use the same folder pattern in data packs as other resources (`namespace/<type>/resource.json`)

## Fixed bugs in 1.16.2 Pre-release 1

-   [MC-73884](https://bugs.mojang.com/browse/MC-73884) Throwable projectiles get destroyed at contact with non solid blocks
-   [MC-125758](https://bugs.mojang.com/browse/MC-125758) Bubble column does not affect egg, snowball, ender pearl, splash potion, lingering potion, fireball and shulker bullet
-   [MC-158987](https://bugs.mojang.com/browse/MC-158987) Raid still continues after a villager turns into a witch
-   [MC-163767](https://bugs.mojang.com/browse/MC-163767) Villagers get ejected from a minecart when converted to a zombie villager
-   [MC-167045](https://bugs.mojang.com/browse/MC-167045) Banners are rendered too dark in the inventory
-   [MC-170900](https://bugs.mojang.com/browse/MC-170900) New Nether plants can be picked up without shears/silk touch
-   [MC-174574](https://bugs.mojang.com/browse/MC-174574) Soul speed doesn't work when slabs and blocks of similar height are placed above the soul sand block
-   [MC-176015](https://bugs.mojang.com/browse/MC-176015) Strider suffocates when player is saddled on and looking up with Warped Fungus on a Stick
-   [MC-176034](https://bugs.mojang.com/browse/MC-176034) You can walk on striders
-   [MC-177651](https://bugs.mojang.com/browse/MC-177651) Despite being cold outside of lava, striders don't care about staying in lava
-   [MC-178061](https://bugs.mojang.com/browse/MC-178061) Chat Delay option doesn't exist in Chat settings
-   [MC-182330](https://bugs.mojang.com/browse/MC-182330) Crossbow-wielding piglins behave weirdly when they try to pursue invisible players
-   [MC-185490](https://bugs.mojang.com/browse/MC-185490) Separated Trader Lamas On Leads Cause TPS Hit
-   [MC-187398](https://bugs.mojang.com/browse/MC-187398) Smithing table and stonecutter recipes are not unlocked when used
-   [MC-187904](https://bugs.mojang.com/browse/MC-187904) Data packs cannot replace settings of vanilla dimensions during world creation
-   [MC-189414](https://bugs.mojang.com/browse/MC-189414) Smithing table doesn't calculate amount of output items correctly
-   [MC-189797](https://bugs.mojang.com/browse/MC-189797) Hoglins, Zoglins, melee Piglins, and Piglin Brutes do not properly attack invisible entities within normal range
-   [MC-191168](https://bugs.mojang.com/browse/MC-191168) Piglins that convert into Zombified Piglins while sitting on a minecart sometimes sink into blocks
-   [MC-192032](https://bugs.mojang.com/browse/MC-192032) Villagers don't always try to claim the closest workstation and are sometimes focussed on a non-existent one or one out of their reach
-   [MC-193213](https://bugs.mojang.com/browse/MC-193213) Leads are positioned incorrectly on players and Wandering Traders
-   [MC-194263](https://bugs.mojang.com/browse/MC-194263) Large End Cities do not generate correctly / get cut off
-   [MC-194299](https://bugs.mojang.com/browse/MC-194299) Template pools fail to load via datapack
-   [MC-194845](https://bugs.mojang.com/browse/MC-194845) Subspace Bubble advancement cannot be completed with 7 km distance
-   [MC-195062](https://bugs.mojang.com/browse/MC-195062) Raids often will not end in defeat when all villagers are dead if there are job sites in the village
-   [MC-195544](https://bugs.mojang.com/browse/MC-195544) Game crashes after killing a mob that is being ridden by a guardian while it is being ridden by a wither skeleton

---

# Minecraft 1.16 Release Candidate

Out with the old, and in with the new! Today we're introducing a new naming convention (well, it's been a while) for Minecraft Java Edition. Previously, the last pre-release was, in fact, the release candidate, but we're now making that more clear by changing the name to be "release candidate". This means that if there are no major issues following this release, no further changes will be done before the full release.

Speaking of the full release: In case you've been living under a rock (it's Minecraft, so that's OK), [we're releasing the Nether Update on Tuesday, June 23](https://www.minecraft.net/article/the-nether-update-has-date-). That's next week!

## Fixed Bugs in 1.16 Release Candidate 1

-   Fixed issues with the Nether surface generation, causing issues like floating lava and crimson forests without nylium
-   [MC-150543](https://bugs.mojang.com/browse/MC-150543) Using a stonecutter can sometimes crash the game in certain circumstances
-   [MC-174790](https://bugs.mojang.com/browse/MC-174790) Mob on turtle eggs causes the game to crash
-   [MC-181833](https://bugs.mojang.com/browse/MC-181833) Crash on world startup after playing world in 20w18a

---

# Minecraft 1.16 Pre-Release 8

Squish, squash is the sound bugs make when you squish them. Or was it squash them? Anyway, here's pre-release 8 with more bug fixes.

## Fixed Bugs in 1.16 Pre-Release 8

-   [MC-114030](https://bugs.mojang.com/browse/MC-114030) Structure blocks take and apply NBT data of entities and tile entities directly instead of a copy when loading and saving structures
-   [MC-127971](https://bugs.mojang.com/browse/MC-127971) Trying to throw a trident while having a shield or bow equipped will make the trident appear backwards in your hand
-   [MC-153483](https://bugs.mojang.com/browse/MC-153483) When Swapping Tridents between hands the trident being held doesnt swap visually, it just flips backwards
-   [MC-159820](https://bugs.mojang.com/browse/MC-159820) 3rd person reverse trident bug
-   [MC-179309](https://bugs.mojang.com/browse/MC-179309) Trident animates backwards while eating
-   [MC-187953](https://bugs.mojang.com/browse/MC-187953) Adding items to #minecraft:small\_flowers item tag and feeding them to brown mooshrooms crashes the game
-   [MC-188746](https://bugs.mojang.com/browse/MC-188746) Not selecting a biome for "Floating Islands" world type spawns an empty world
-   [MC-188859](https://bugs.mojang.com/browse/MC-188859) Incorrect throwing animation for tridents
-   [MC-189007](https://bugs.mojang.com/browse/MC-189007) When entering or leaving swimming mode both arms now move parallel instead of symmetrical
-   [MC-189782](https://bugs.mojang.com/browse/MC-189782) Large ferns only drop one small fern when harvested
-   [MC-189858](https://bugs.mojang.com/browse/MC-189858) Leads can disappear when transporting a mob through a nether portal
-   [MC-189937](https://bugs.mojang.com/browse/MC-189937) Saddled pigs accumulate speed when ridden in water
-   [MC-189970](https://bugs.mojang.com/browse/MC-189970) Selected worlds using keyboard nav does not enable world-specific options such as Play, Edit, Delete, and Re-Create
-   [MC-189973](https://bugs.mojang.com/browse/MC-189973) ClassCastException when bee with passenger flies through village at night
-   [MC-190005](https://bugs.mojang.com/browse/MC-190005) Piglins can spawn with gear with too many enchantments, including multiple enchantments of the same type
-   [MC-190036](https://bugs.mojang.com/browse/MC-190036) Passive mobs do not spawn in floating island world type
-   [MC-190124](https://bugs.mojang.com/browse/MC-190124) Grass decays too quickly when covered in water
-   [MC-190166](https://bugs.mojang.com/browse/MC-190166) Game crashes when burning a tree in a custom dimension: java.lang.NullPointerException: Exception while ticking

---

# Minecraft 1.16 Pre-Release 7

We've now released pre-release 7 to fix a few more bugs.

## Fixed Bugs in 1.16 Pre-Release 7

-   [MC-176447](https://bugs.mojang.com/browse/MC-176447) Striders left/right leg uses the same texture
-   [MC-180467](https://bugs.mojang.com/browse/MC-180467) World Border is no longer fully solid
-   [MC-183673](https://bugs.mojang.com/browse/MC-183673) Skeletons not spawning frequently in Soul Sand Valley
-   [MC-185126](https://bugs.mojang.com/browse/MC-185126) Unable to jump one block high from flowing lava that has level 3 or lower
-   [MC-186228](https://bugs.mojang.com/browse/MC-186228) Zombified piglins' sleeve layers are not held upwards like their arms
-   [MC-188552](https://bugs.mojang.com/browse/MC-188552) Zombified Piglins drop less XP than before
-   [MC-188838](https://bugs.mojang.com/browse/MC-188838) Heads and skulls on a wall cause z-fighting
-   [MC-189824](https://bugs.mojang.com/browse/MC-189824) Overworld/general gameplay music can play in the nether in creative mode
-   [MC-189846](https://bugs.mojang.com/browse/MC-189846) Turtle eggs hatching broken, game checking for sand one block too deep
-   [MC-189856](https://bugs.mojang.com/browse/MC-189856) Unable to set nether portal block with /setblock or /fill
-   [MC-189867](https://bugs.mojang.com/browse/MC-189867) Cannot use /setblock and /fill to place blocks in positions they cannot normally be in
-   [MC-189868](https://bugs.mojang.com/browse/MC-189868) Player gets set on fire and extinguished continuously when standing in fire in Creative mode
-   [MC-189895](https://bugs.mojang.com/browse/MC-189895) Redstone in jungle temple / pyramid no longer connects to blocks and redstone components properly
-   [MC-189905](https://bugs.mojang.com/browse/MC-189905) The player can get stuck inside of the world border
-   [MC-189971](https://bugs.mojang.com/browse/MC-189971) Clicking the "Take me back" button causes translucent blocks to stop rendering

---

# Minecraft 1.16 Pre-Release 6

Start your new week by not slipping and sliding on blocks that should not be slippy or slidey - we've now released pre-release 6 for Minecraft Java Edition 1.16.

## Changes in 1.16 Pre-Release 6

-   Tweaked map colours of crimson and warped materials
-   There is now a text that says "Search..." in the recipe book that higlights that you can... search...
-   Opening the game mode switcher now has a default selection if you have not entered a different game mode before in that world.
    -   In this scenario, by default, you will now select Creative if currently in any other game mode, and Survival if currently in Creative

## Technical Changes in 1.16 Pre-release 6

​ Added `player_interacted_with_entity` advancement trigger

-   `item` matches the item which was in the player's hand during interaction
-   `entity` matches the entity which was interacted with

## Fixed Bugs in 1.16 Pre-Release 6

-   [MC-45749](https://bugs.mojang.com/browse/MC-45749) Potion particles spread always from the north-west corner of a block, regardless of impact
-   [MC-163333](https://bugs.mojang.com/browse/MC-163333) Plains houses and decorations can generate in taiga villages
-   [MC-166593](https://bugs.mojang.com/browse/MC-166593) Zombie villagers in zombie villages aren't persistent
-   [MC-167386](https://bugs.mojang.com/browse/MC-167386) binding hotbar hotkeys to mouse thumb button won't interact the way it should
-   [MC-167554](https://bugs.mojang.com/browse/MC-167554) Enchantment glint on shields is rendered incorrectly
-   [MC-171543](https://bugs.mojang.com/browse/MC-171543) Ravagers can easily be knocked back with the knockback enchantment
-   [MC-172027](https://bugs.mojang.com/browse/MC-172027) Datafixer for minecraft:recipes/misc/composter advancement is missing
-   [MC-172442](https://bugs.mojang.com/browse/MC-172442) Piglins don't spawn with enchanted gear
-   [MC-172592](https://bugs.mojang.com/browse/MC-172592) Breaking a larger than normally possible Nether portal makes the game crash with a java.lang.StackOverflowError
-   [MC-174279](https://bugs.mojang.com/browse/MC-174279) Baby piglins don't run from wither skeletons
-   [MC-175993](https://bugs.mojang.com/browse/MC-175993) Enchantment glint of lodestone compass or enchanted compass/clock jumps when compass/clock rotates
-   [MC-177929](https://bugs.mojang.com/browse/MC-177929) End gateways don't always teleport the player when throwing an ender pearl into it
-   [MC-178573](https://bugs.mojang.com/browse/MC-178573) Piglins are afraid of extinguished soul campfires
-   [MC-178947](https://bugs.mojang.com/browse/MC-178947) Explosion damage can be blocked by fire
-   [MC-181465](https://bugs.mojang.com/browse/MC-181465) Bartering with a piglin with an equipped shield using right click deletes the shield instead of dropping it on the ground
-   [MC-182309](https://bugs.mojang.com/browse/MC-182309) Command autocomplete doesn't sort strings that start with the given word to the top
-   [MC-182325](https://bugs.mojang.com/browse/MC-182325) Iron golem causes lag when it can't attack its enemies
-   [MC-183759](https://bugs.mojang.com/browse/MC-183759) Oh Shiny advancement doesn't activate when right clicking
-   [MC-184277](https://bugs.mojang.com/browse/MC-184277) Last game mode for game mode switcher and F3 + N is always survival after relogging
-   [MC-184813](https://bugs.mojang.com/browse/MC-184813) Superflat world corruption when converting the world
-   [MC-186614](https://bugs.mojang.com/browse/MC-186614) New Nether mobs make too many noises under certain circumstances
-   [MC-186617](https://bugs.mojang.com/browse/MC-186617) Zombified piglins sound angry too many times when hit constantly
-   [MC-187031](https://bugs.mojang.com/browse/MC-187031) Piglin swinging animation does not match attacking or targeting animation
-   [MC-187420](https://bugs.mojang.com/browse/MC-187420) Zombified piglins make angry sounds too frequently
-   [MC-187490](https://bugs.mojang.com/browse/MC-187490) Piglins that pick up gold while pathfinding will continue pathfinding
-   [MC-187522](https://bugs.mojang.com/browse/MC-187522) Server doesn't generate amplified / large biome worlds
-   [MC-187622](https://bugs.mojang.com/browse/MC-187622) Piglins can still remove curse of binding enchanted helmets / carved pumpkins after they've inspected a golden helmet
-   [MC-187853](https://bugs.mojang.com/browse/MC-187853) Water / Lava doesnt move entities unless they move first
-   [MC-188581](https://bugs.mojang.com/browse/MC-188581) Glass placed in item frame isn't rendered properly
-   [MC-188659](https://bugs.mojang.com/browse/MC-188659) New "swap items with offhand" feature doesn't work if the control is bound to the 4th or 5th mouse button
-   [MC-188702](https://bugs.mojang.com/browse/MC-188702) When loading in a redstone dot via a structure block, the dot gets set to a redstone cross
-   [MC-188987](https://bugs.mojang.com/browse/MC-188987) When standing on certain non-full blocks, the player gets pushed off if there is a lower area next to the block
-   [MC-189081](https://bugs.mojang.com/browse/MC-189081) Chains create water sources
-   [MC-189256](https://bugs.mojang.com/browse/MC-189256) Hoglin and zoglin tusks textures are not separate
-   [MC-189326](https://bugs.mojang.com/browse/MC-189326) Lecterns don't stack with other lecterns after being placed down and broken

---

# Minecraft 1.16 Pre-Release 5

Spend your weekend with this brand new fifth pre-release for Minecraft Java Edition 1.16 - it has a check to warn you not to try to run with too high graphics settings for your system and a bunch of bug fixes.

## Changes in 1.16 Pre-Release 5

-   Added a GPU warn list for graphics drivers that are known to have rendering issues with Fabulous graphics
-   If your GPU driver is detected as problematic then a warning message will be displayed with details of the detected problem
-   This warning message can be ignored, but support cannot be provided for graphics drivers on the warn list running Fabulous

## Fixed Bugs in 1.16 Pre-Release 5

-   [MC-141934](https://bugs.mojang.com/browse/MC-141934) Ctrl + Pick block on a lectern does not display its book despite being saved to NBT
-   [MC-148955](https://bugs.mojang.com/browse/MC-148955) Iron golems can spawn inside of non-full blocks
-   [MC-149308](https://bugs.mojang.com/browse/MC-149308) Thrown items appear right in front of head for a frame
-   [MC-166276](https://bugs.mojang.com/browse/MC-166276) Thrown items and blocks sometimes appear black for an instant
-   [MC-166413](https://bugs.mojang.com/browse/MC-166413) Item frame turns black for an instant when being placed
-   [MC-166718](https://bugs.mojang.com/browse/MC-166718) Mobs no longer suffocate inside of soul sand, farmland or grass paths
-   [MC-167359](https://bugs.mojang.com/browse/MC-167359) Items are bright for a brief moment after being broken
-   [MC-167362](https://bugs.mojang.com/browse/MC-167362) Item frames are bright for a brief moment when placed
-   [MC-177361](https://bugs.mojang.com/browse/MC-177361) Villagers/wandering traders don't flee away from zoglins
-   [MC-180867](https://bugs.mojang.com/browse/MC-180867) Jukeboxes grabbed with an NBT+ picker do not release discs on right click.
-   [MC-181605](https://bugs.mojang.com/browse/MC-181605) Right-clicking a Respawn Anchor with an item in off-hand uses that item
-   [MC-182119](https://bugs.mojang.com/browse/MC-182119) Game mode description text is no longer centered and now extends off the screen in some languages
-   [MC-183469](https://bugs.mojang.com/browse/MC-183469) Mobs do not pathfind around holes or lava
-   [MC-185777](https://bugs.mojang.com/browse/MC-185777) Shift-clicking a netherite ingot in a smithing table moves the ingot to gear slot
-   [MC-186206](https://bugs.mojang.com/browse/MC-186206) Water tinted rendered differently behind glass top versus sides
-   [MC-188468](https://bugs.mojang.com/browse/MC-188468) User Control for "Swap Item with Offhand" gets reset when upgrading from 1.16pre-2 to 3
-   [MC-188489](https://bugs.mojang.com/browse/MC-188489) "Switch item with offhand" inventory keyboard shortcut still works in Search Items creative tab, overriding text input
-   [MC-188505](https://bugs.mojang.com/browse/MC-188505) Attacking an entity while sneaking cancels sneaking for a moment, then desyncs client and server about player's height
-   [MC-188509](https://bugs.mojang.com/browse/MC-188509) Zombified Piglins drop experience but not gold ingots when they die while aggressive
-   [MC-188542](https://bugs.mojang.com/browse/MC-188542) Custom world gen settings causes minecraft to crash upon import
-   [MC-188633](https://bugs.mojang.com/browse/MC-188633) Small mobs drown while in boat
-   [MC-188652](https://bugs.mojang.com/browse/MC-188652) Gamerules doMobLoot and doTileDrops have the same description in gamerule menu
-   [MC-188655](https://bugs.mojang.com/browse/MC-188655) Number keys in Creative search override typing in the search bar, resulting in unintentional hotbar item switching
-   [MC-188675](https://bugs.mojang.com/browse/MC-188675) Bed heads, tall flowers and bottom doors drop two items
-   [MC-188678](https://bugs.mojang.com/browse/MC-188678) Milking a cow/mooshroom for milk or mushroom stew consumes the item without giving anything back
-   [MC-188691](https://bugs.mojang.com/browse/MC-188691) Can no longer light Nether Portal using Fire Charge on the side of Obsidian

---

# Minecraft 1.16 Pre-Release 4

We've now released Minecraft 1.16 Pre-release 4, with tweaked spawn rates and another round of bug fixes.

## Changes in 1.16 Pre-Release 4

-   Tweaked hostile spawn rates in Warped Forests and Soulsand Valleys

## Fixed Bugs in 1.16 Pre-Release 4

-   [MC-136085](https://bugs.mojang.com/browse/MC-136085) Blocks attached to multi-block blocks are deleted when breaking the other half of the block
-   [MC-177463](https://bugs.mojang.com/browse/MC-177463) Crash report "Connection:" field contains unuseful value (Object.toString())
-   [MC-179851](https://bugs.mojang.com/browse/MC-179851) Attribute generic.movement\_speed does not work in /attribute
-   [MC-180967](https://bugs.mojang.com/browse/MC-180967) Advancement description JSON can ignore the first specified color
-   [MC-181498](https://bugs.mojang.com/browse/MC-181498) Using a fire charge on top of fire briefly creates another fire on top of it
-   [MC-181556](https://bugs.mojang.com/browse/MC-181556) Baby Zombified Piglins float while riding striders
-   [MC-181576](https://bugs.mojang.com/browse/MC-181576) Worlds which are already open in another instance of Minecraft can be selected with arrow keys and tab
-   [MC-184613](https://bugs.mojang.com/browse/MC-184613) End Stone generates in Floating Islands setting
-   [MC-184644](https://bugs.mojang.com/browse/MC-184644) Cave buffet generator generates with netherrack, even if using a non-nether biome
-   [MC-186468](https://bugs.mojang.com/browse/MC-186468) Although reload failed, the game will also tell you "Disabled data pack \[XXX\]"
-   [MC-187419](https://bugs.mojang.com/browse/MC-187419) Hand animation is not played when feeding horses or donkeys with golden carrots
-   [MC-188352](https://bugs.mojang.com/browse/MC-188352) Creative mode cow milking / mushroom stewing inconsistent with picking up placed fluids
-   [MC-188451](https://bugs.mojang.com/browse/MC-188451) Game crashes when dispensing a shulker box from a dispenser "java.lang.NullPointerException: Exception while ticking"
-   [MC-188463](https://bugs.mojang.com/browse/MC-188463) Transparent dropped items render in wrong order when behind entities when graphics setting is set to fabulous
-   [MC-188467](https://bugs.mojang.com/browse/MC-188467) "Sound Director" in credits is too light compared to the rest of the text, and is missing an "S"
-   [MC-188517](https://bugs.mojang.com/browse/MC-188517) Cannot create multiple empty tags in a datapack
-   [MC-188519](https://bugs.mojang.com/browse/MC-188519) Clouds render on top of blocks
-   [MC-188528](https://bugs.mojang.com/browse/MC-188528) Particles render on top of stained glass

---

# Minecraft 1.16 Pre-Release 3

Another pre-release is now available for Minecraft: Java Edition! This pre-release fixes a bunch of bugs, but we also made a few minor tweaks. The Nether Update is closing in and we aim to release the update within a couple of weeks.

## Changes in 1.16 Pre-release 3

​

-   Food can now be placed on unlit campfires
-   Made Nether Fortresses slightly more common
-   Visibility under lava is now slightly better when under the effect of fire resistance
-   Piglins now hear you break a chest or block of gold (or similar) even if your are our of line of sight, and will assume you are stealing
-   Game rule descriptions now span multiple lines if needed on the game rules screen
-   A loading screen is now displayed while the game is reading world data for loading, creating or re-creating a world
-   The game will now attempt to recover worlds broken in 1.16 Pre-release 1

​

## Technical changes in 1.16 Pre-release 3

​ Region files are now only opened in synchronous mode on Windows, not on other operating systems. Status of this feature can be manually controlled by following options:

-   For dedicated servers: `sync-chunk-writes` within `server.properties`
-   For clients: `syncChunkWrites` within `options.txt`

## Fixed Bugs in 1.16 Pre-Release 3

-   [MC-13823](https://bugs.mojang.com/browse/MC-13823) Leads are incorrectly positioned on certain entities
-   [MC-14680](https://bugs.mojang.com/browse/MC-14680) Lead is shifted upwards or downwards based on leashed entity height
-   [MC-27535](https://bugs.mojang.com/browse/MC-27535) Mobs can sometimes still despawn, even if named with a name tag
-   [MC-84610](https://bugs.mojang.com/browse/MC-84610) Off-hand hotkey doesn't work in inventories
-   [MC-131286](https://bugs.mojang.com/browse/MC-131286) Attack will use right hand instead of left hand when swimming (main hand: left)
-   [MC-134608](https://bugs.mojang.com/browse/MC-134608) Certain Spawner Tag Conditions Induce Game Crash
-   [MC-143473](https://bugs.mojang.com/browse/MC-143473) Teleporting a mob while it is pathfinding will make it navigate back to where it was originally going
-   [MC-152157](https://bugs.mojang.com/browse/MC-152157) "Marie Stålkrantz" is not the right color in game credits
-   [MC-159371](https://bugs.mojang.com/browse/MC-159371) Leads are incorrectly positioned on bees
-   [MC-159502](https://bugs.mojang.com/browse/MC-159502) Bees don't avoid water; killing themselves
-   [MC-160520](https://bugs.mojang.com/browse/MC-160520) Bee's wandering AI tries to go through three-way corners
-   [MC-163921](https://bugs.mojang.com/browse/MC-163921) Placing a block while looking at redstone ore plays no sound
-   [MC-166346](https://bugs.mojang.com/browse/MC-166346) Transparent blocks do not render properly with tripwire above
-   [MC-166880](https://bugs.mojang.com/browse/MC-166880) Pufferfish spikes model seems to be broken
-   [MC-167043](https://bugs.mojang.com/browse/MC-167043) Enchantment glint does only apply to the handle of shields with banners
-   [MC-169008](https://bugs.mojang.com/browse/MC-169008) Using End portal in the Nether teleports the player to the End, but at the same coordinates the player was in the Nether
-   [MC-171618](https://bugs.mojang.com/browse/MC-171618) Players wearing armor take less damage from burning when standing in fire under certain conditions
-   [MC-171810](https://bugs.mojang.com/browse/MC-171810) Some Mojang employees are not mentioned in the credits
-   [MC-171969](https://bugs.mojang.com/browse/MC-171969) Fall damage is negated when stepping up after falling
-   [MC-172053](https://bugs.mojang.com/browse/MC-172053) Nether particles get stuck on the bottom of blocks
-   [MC-172105](https://bugs.mojang.com/browse/MC-172105) When a piglin is dancing, targeting or looking at an item, the chestplate the piglin is wearing does not adjust to the piglin's pose
-   [MC-172110](https://bugs.mojang.com/browse/MC-172110) Texture of turtle shells is missing when worn by a piglin or zombified piglin
-   [MC-172871](https://bugs.mojang.com/browse/MC-172871) Unable to spawn wither in horizontal arrangement below y level 2
-   [MC-173310](https://bugs.mojang.com/browse/MC-173310) Observer powered texture doesn't match unpowered
-   [MC-173404](https://bugs.mojang.com/browse/MC-173404) Desync when mounting an entity while sneaking
-   [MC-173825](https://bugs.mojang.com/browse/MC-173825) Bats break turtle eggs
-   [MC-176094](https://bugs.mojang.com/browse/MC-176094) Baby zombified piglin chicken jockeys can spawn riding striders
-   [MC-177336](https://bugs.mojang.com/browse/MC-177336) 'Failed to access level' when opening a world from a CIFS mount on Ubuntu
-   [MC-177530](https://bugs.mojang.com/browse/MC-177530) The new minecraft:attributes registry is plural, while all the others are singular
-   [MC-177542](https://bugs.mojang.com/browse/MC-177542) Chunk loading and saving is extremely slow when sync-chunk-writes=true
-   [MC-177626](https://bugs.mojang.com/browse/MC-177626) Spruce generation is broken
-   [MC-177694](https://bugs.mojang.com/browse/MC-177694) Zombified Piglin Spawn Egg is placed before Zombie Villager Spawn Egg in the creative inventory
-   [MC-177712](https://bugs.mojang.com/browse/MC-177712) Nether portal blocks do not have loot tables
-   [MC-177795](https://bugs.mojang.com/browse/MC-177795) Overworld music can start playing in the Nether
-   [MC-177863](https://bugs.mojang.com/browse/MC-177863) Shroomlights cannot be composted
-   [MC-177876](https://bugs.mojang.com/browse/MC-177876) Striders are now much rarer
-   [MC-178010](https://bugs.mojang.com/browse/MC-178010) Lena Raine does not appear in credits
-   [MC-178338](https://bugs.mojang.com/browse/MC-178338) Striders only get warm when lava touches their legs
-   [MC-179140](https://bugs.mojang.com/browse/MC-179140) Sea guardians have an odd swimming behavior
-   [MC-180603](https://bugs.mojang.com/browse/MC-180603) Wrong structures are generated in superflat worlds
-   [MC-181630](https://bugs.mojang.com/browse/MC-181630) Advancement trigger "minecraft:tick" does not support standard "player" predicate
-   [MC-181813](https://bugs.mojang.com/browse/MC-181813) Edit "g"ame "r"ules are not capitalized in the Game Rules menu title
-   [MC-181884](https://bugs.mojang.com/browse/MC-181884) Falling quickly/Flying with Elytra/Swimming with Riptide Trident and throwing a projectile will cause it to hit the player
-   [MC-182076](https://bugs.mojang.com/browse/MC-182076) Horse jumping sound is unused
-   [MC-182249](https://bugs.mojang.com/browse/MC-182249) Problems with potted\_cactus.json block model file
-   [MC-182766](https://bugs.mojang.com/browse/MC-182766) Recipe book search function does not work if recipe book was not open before
-   [MC-182909](https://bugs.mojang.com/browse/MC-182909) Esc from Customised World's Biome selection screen kicks us back to main menu
-   [MC-183018](https://bugs.mojang.com/browse/MC-183018) When sneaking while flying underwater in Creative, the player exits flying mode after a few seconds
-   [MC-183402](https://bugs.mojang.com/browse/MC-183402) Tutorial doesn't advance when breaking nether tree
-   [MC-183554](https://bugs.mojang.com/browse/MC-183554) Ruined portals generated in lava lakes unnaturally displace lava, resulting in weird borders
-   [MC-183588](https://bugs.mojang.com/browse/MC-183588) Stray emerald block in structure bastion/treasure/big\_air\_full
-   [MC-183594](https://bugs.mojang.com/browse/MC-183594) The 5th large inner and outer hoglin stables do not generate in bastions
-   [MC-183599](https://bugs.mojang.com/browse/MC-183599) Some hoglin stable stair structures do not generate
-   [MC-183762](https://bugs.mojang.com/browse/MC-183762) Description of F3+N in help menu still describes the old functionality
-   [MC-183809](https://bugs.mojang.com/browse/MC-183809) Large Oak Trees replace blocks
-   [MC-183880](https://bugs.mojang.com/browse/MC-183880) Distracting baby piglins with gold grants the 'Oh Shiny' advancement
-   [MC-183915](https://bugs.mojang.com/browse/MC-183915) Wall Heads & Skulls are slightly offset from block selection outline
-   [MC-183931](https://bugs.mojang.com/browse/MC-183931) nether fortress mobs no longer spawn in extended bounding box
-   [MC-183933](https://bugs.mojang.com/browse/MC-183933) show\_text tellraw hover events don't work for components that need resolving (nbt, score, selector)
-   [MC-184093](https://bugs.mojang.com/browse/MC-184093) Using an end gateway teleports the player half a block too high
-   [MC-184250](https://bugs.mojang.com/browse/MC-184250) Font of the enchantments displayed in the enchanting table is italic
-   [MC-184608](https://bugs.mojang.com/browse/MC-184608) "Unknown biome, defaulting to plains" error upon launching the game
-   [MC-184612](https://bugs.mojang.com/browse/MC-184612) Import Settings "s" isn't capitalized
-   [MC-184613](https://bugs.mojang.com/browse/MC-184613) End Stone generates in Floating Islands setting
-   [MC-184644](https://bugs.mojang.com/browse/MC-184644) Cave buffet generator generates with netherrack, even if using a non-nether biome
-   [MC-184653](https://bugs.mojang.com/browse/MC-184653) \[Crash\] "java.lang.IllegalArgumentException: value already present:" Game crashes when worldgen dimension type presets are not unique
-   [MC-184675](https://bugs.mojang.com/browse/MC-184675) Superflat void preset doesn't have a starting platform again
-   [MC-184699](https://bugs.mojang.com/browse/MC-184699) '/spreadplayers under' does not prevent invalid values
-   [MC-184723](https://bugs.mojang.com/browse/MC-184723) The "i" in "World Type: Floating islands" is not capitalized
-   [MC-184757](https://bugs.mojang.com/browse/MC-184757) \[Crash\] "java.lang.NullPointerException: Ticking memory connection" on loading a dimension with debug chunk generator
-   [MC-184887](https://bugs.mojang.com/browse/MC-184887) You can spawn in the bedrock ceiling of a Caves world
-   [MC-184900](https://bugs.mojang.com/browse/MC-184900) Newline in tellraw adds a space at the beginning of the new line
-   [MC-184984](https://bugs.mojang.com/browse/MC-184984) Game crashes after generating multiple worlds in succession
-   [MC-185004](https://bugs.mojang.com/browse/MC-185004) \[Crash\] java.lang.NullPointerException Crash on entering end/nether portal when dimension is removed in worldgen settings
-   [MC-185164](https://bugs.mojang.com/browse/MC-185164) Bottom half of icebergs always generate at y=62 regardless of sea\_level
-   [MC-185285](https://bugs.mojang.com/browse/MC-185285) Entering the End or the Nether after creating and reentering a debug world crashes the game
-   [MC-185299](https://bugs.mojang.com/browse/MC-185299) Villagers cannot be summoned with a specific type unless you also specify a profession
-   [MC-185363](https://bugs.mojang.com/browse/MC-185363) sync-chunk-writes often takes over a minute to close a world
-   [MC-185417](https://bugs.mojang.com/browse/MC-185417) Maps reset on upgrade
-   [MC-185616](https://bugs.mojang.com/browse/MC-185616) Turtle eggs can't hatch on red sand
-   [MC-185949](https://bugs.mojang.com/browse/MC-185949) Copy "C" in Click to Copy to Clipboard isn't capitalized
-   [MC-186078](https://bugs.mojang.com/browse/MC-186078) Transparent items render in front of transparent blocks on some graphics cards when graphics setting is set to fabulous
-   [MC-186084](https://bugs.mojang.com/browse/MC-186084) Piglin head and torso floats and detaches during celebration dance
-   [MC-186085](https://bugs.mojang.com/browse/MC-186085) Player is unable to interact with the world after dismounting a boat while it's moving
-   [MC-186091](https://bugs.mojang.com/browse/MC-186091) When you stop swimming, "diving underwater" sound occurs and vision flashes
-   [MC-186092](https://bugs.mojang.com/browse/MC-186092) The head of a piglin becomes offset after performing their celebration dance
-   [MC-186097](https://bugs.mojang.com/browse/MC-186097) Pigs are moving very slowly
-   [MC-186248](https://bugs.mojang.com/browse/MC-186248) "m" in Safe Mode button isn't capitalized
-   [MC-186263](https://bugs.mojang.com/browse/MC-186263) "b" & "l" in Create Backup & Load isn't capitalized
-   [MC-186337](https://bugs.mojang.com/browse/MC-186337) The lighting of the "Client" doesn't correspond to that of the "Server"
-   [MC-186353](https://bugs.mojang.com/browse/MC-186353) The "s" and "m" in "Edit sign message" are uncapitalized
-   [MC-186403](https://bugs.mojang.com/browse/MC-186403) Swimming up on the side of flowing water no longer prevents the player from drowning
-   [MC-186492](https://bugs.mojang.com/browse/MC-186492) Lily pad placement in creative mode causes item on hotbar to flicker/vanish
-   [MC-186905](https://bugs.mojang.com/browse/MC-186905) "Superflat Customization" screen resets every time you open it and does not show previously saved settings
-   [MC-187363](https://bugs.mojang.com/browse/MC-187363) Charged respawn anchors no longer light up blocks around them
-   [MC-187367](https://bugs.mojang.com/browse/MC-187367) Netherite recipes show up in crafting table despite requiring a smithing table to use
-   [MC-187371](https://bugs.mojang.com/browse/MC-187371) Game crashes when attempting to change cloud settings on some graphics cards
-   [MC-187392](https://bugs.mojang.com/browse/MC-187392) Items in waterlogged stairs don't float up high enough to be caught by a water stream above the stair
-   [MC-187394](https://bugs.mojang.com/browse/MC-187394) Dying Ender dragons are rendered completely white when using Fabulous graphics
-   [MC-187402](https://bugs.mojang.com/browse/MC-187402) Lighting in the End dimension is much darker when on a server
-   [MC-187405](https://bugs.mojang.com/browse/MC-187405) /seed is no longer available without cheats enabled
-   [MC-187411](https://bugs.mojang.com/browse/MC-187411) Particles and clouds not rendering properly behind stained glass and solid blocks
-   [MC-187437](https://bugs.mojang.com/browse/MC-187437) Held item is invisible in inventory menu
-   [MC-187449](https://bugs.mojang.com/browse/MC-187449) Zombie Pigmen/Zombified Piglins do not drop XP and rare drops anymore if killed by anything other than the player while in angered state
-   [MC-187466](https://bugs.mojang.com/browse/MC-187466) Mobs killed in creative mode don't drop experience
-   [MC-187468](https://bugs.mojang.com/browse/MC-187468) Enchantment glint does not render for certain things on "Fabulous" setting
-   [MC-187483](https://bugs.mojang.com/browse/MC-187483) The advancement "Two by Two" can be achieved by just breeding turtles
-   [MC-187504](https://bugs.mojang.com/browse/MC-187504) Mobs do not drop rare drop items when killed by a player in Creative Mode
-   [MC-187552](https://bugs.mojang.com/browse/MC-187552) Piglins and Hoglins shake in the nether on servers
-   [MC-187585](https://bugs.mojang.com/browse/MC-187585) Dolphins with NoAI:1b can drown
-   [MC-187592](https://bugs.mojang.com/browse/MC-187592) Piglins constantly picking up gold nuggets and dropping them
-   [MC-187611](https://bugs.mojang.com/browse/MC-187611) White squares when in first person with fabulous video settings and F1
-   [MC-187618](https://bugs.mojang.com/browse/MC-187618) Demo world not saving after saving and quitting then quiting out of minecraft
-   [MC-187673](https://bugs.mojang.com/browse/MC-187673) \[Crash\] "java.lang.IllegalStateException: Unregistered dimension type"
-   [MC-187676](https://bugs.mojang.com/browse/MC-187676) "d" in Reset to default isn't capitalized
-   [MC-187677](https://bugs.mojang.com/browse/MC-187677) "b" in Go back isn't capitalized
-   [MC-187679](https://bugs.mojang.com/browse/MC-187679) Bees stay angry far longer
-   [MC-187730](https://bugs.mojang.com/browse/MC-187730) Newly spawned Zombified Piglins do not pick up the aggro of older spawned aggravated Zombified Piglins
-   [MC-187739](https://bugs.mojang.com/browse/MC-187739) NeutralMob.playerDied(Player) does not return if forgiveDeadPlayers = false
-   [MC-187796](https://bugs.mojang.com/browse/MC-187796) Wolves only use their hostile appearance after being attacked
-   [MC-187811](https://bugs.mojang.com/browse/MC-187811) Ender dragon death animation suddenly flashes right after it has ended
-   [MC-187978](https://bugs.mojang.com/browse/MC-187978) /seed availiable to all players on multiplayer server
-   [MC-188070](https://bugs.mojang.com/browse/MC-188070) Glitched skin while swimming (left hand)
-   [MC-188088](https://bugs.mojang.com/browse/MC-188088) Overworld superflat preset no longer generates with terrain decorations
-   [MC-188216](https://bugs.mojang.com/browse/MC-188216) Superflat biome selection overrides block selection on "Create New World" screen
-   [MC-188393](https://bugs.mojang.com/browse/MC-188393) K in "4k" should be capitalized

---

# Minecraft 1.16 Pre-Release 2

We've now released 1.16 pre-release 2, fixing some crashes. Note that worlds opened in 1.16 pre-release 1 are corrupt and will not work in any way in 1.16 pre-release 2 (this includes using the re-create world button). Please restore an older backup or create a brand new world to play in this pre-release.

## Fixed bugs in 1.16 Pre-Release 2

-   [MC-187350](https://bugs.mojang.com/browse/MC-187350) Game randomly crashes / IllegalStateException: POI never registered
-   [MC-187352](https://bugs.mojang.com/browse/MC-187352) Loading a world created in 1.16-pre1 always ask for confirmation
-   [MC-187353](https://bugs.mojang.com/browse/MC-187353) Crash when loading some worlds: IllegalStateException: Lock is no longer valid
-   [MC-187358](https://bugs.mojang.com/browse/MC-187358) Worlds generated in 1.16-pre1 do not have their world generation settings saved correctly, causing chunk errors
-   [MC-187364](https://bugs.mojang.com/browse/MC-187364) Disabling and enabling dimension datapack disables nether and end
-   [MC-187408](https://bugs.mojang.com/browse/MC-187408) Game crashing with Nether portals - java.lang.NullPointerException: Ticking player

---

# Minecraft 1.16 Pre-Release 1

It's time for 1.16 pre-releases!

Going forward you should mostly see bugs being fixed. Additionally, pre-releases doesn't necessarily tend to our usual cadence of releasing on Wednesdays, so keep an eye out!

## New Features in 1.16 Pre-release 1

-   Added new "Fabulous" graphics option - uses per-pixel blending layers for some transparent elements

## Changes in 1.16 Pre-release 1

-   You can now milk Cows and Mooshrooms in creative mode
-   You can now get stew from Mooshrooms in creative mode
-   When you use an empty bucket on water in creative mode, you now get a bucket of water. If you have a bucket of water in your inventory already, no additional water buckets will be added when you use your empty bucket on water.
-   When any villager is struck by lightning, the witch it is converted to will no longer despawn
-   Added gamerule universalAnger (disabled by default), which makes angered neutral mobs attack any nearby player, not just the player that angered them. Works best if you disable forgiveDeadPlayers.
-   Added gamerule forgiveDeadPlayers (enabled by default), which makes angered neutral mobs stop being angry when the targeted player dies nearby.
-   Zombified piglins no longer attack innocent bystanders (unless you enable gamerule universalAnger)
-   Zombified piglins stop being angry if the targeted player dies nearby (unless you disable gamerule forgiveDeadPlayers)

## Technical Changes in 1.16 Pre-release 1

-   Smithing recipes can now be added or changed through data packs
-   Game will now detect critical datapack issues, like missing required tags and prevent world from being loaded

### Data Pack Selection

-   Data packs can now be selected before world is created
-   "Copy world" option will also copy data packs present in source world

### Pack Selection Screen

-   Packs can now be dropped directly on data and resource pack selection screens
-   Dropped files and directories will be copied to appropriate places

### Smithing Recipes

There's now a `smithing` recipe type. Recipes of this type are used in the smithing table to upgrade one item type into another type, maintaining tags.

-   `base` - Ingredient specifying an item to be upgraded.
-   `addition` - Ingredient specifying valid items to trigger the upgrade.
-   `result` - Item specifying the resulting type of the upgraded item.

## Fixed Bugs in 1.16 Pre-release 1

-   [MC-4520](https://bugs.mojang.com/browse/MC-4520) Aggressive neutral mobs become neutral when the world is reloaded
-   [MC-9856](https://bugs.mojang.com/browse/MC-9856) you cannot pick up buckets of water/lava in creative mode
-   [MC-36322](https://bugs.mojang.com/browse/MC-36322) Unable to milk cows in creative
-   [MC-64623](https://bugs.mojang.com/browse/MC-64623) Lightning bolts cannot be targeted by selectors
-   [MC-69032](https://bugs.mojang.com/browse/MC-69032) When a mob hits a zombified piglin, and that mob dies, the zombified piglins attack you
-   [MC-90969](https://bugs.mojang.com/browse/MC-90969) Cannot get mushroom stew from mooshrooms / milk from cows in creative mode
-   [MC-106968](https://bugs.mojang.com/browse/MC-106968) Snow golems aren't damaged by splash or lingering water bottles
-   [MC-127004](https://bugs.mojang.com/browse/MC-127004) Waterlogged blocks cause z-fighting when looking at them from a distance
-   [MC-138675](https://bugs.mojang.com/browse/MC-138675) Wither skulls inflict the Wither effect on players in Creative mode
-   [MC-138713](https://bugs.mojang.com/browse/MC-138713) "Two by Two" advancement does not require donkeys or mules
-   [MC-158906](https://bugs.mojang.com/browse/MC-158906) After sleeping in a bed, players aren't positioned in the center of a block
-   [MC-159500](https://bugs.mojang.com/browse/MC-159500) Hostile mobs attacking bees also cause the bees to attack players
-   [MC-161969](https://bugs.mojang.com/browse/MC-161969) Casting issue: Adding ender eyes to end portal frames at high distances causes particles to lose precision
-   [MC-163950](https://bugs.mojang.com/browse/MC-163950) Ice bordering water causes z-fighting issues from a distance
-   [MC-164692](https://bugs.mojang.com/browse/MC-164692) Entering a boat does not play the hand animation
-   [MC-165669](https://bugs.mojang.com/browse/MC-165669) Hand animation is playing when you're aiming at a block through the mob and use the spawn egg
-   [MC-165734](https://bugs.mojang.com/browse/MC-165734) Minecarts with furnace still display a hand animation with incompatible items when not on a rail
-   [MC-166188](https://bugs.mojang.com/browse/MC-166188) Bees still hitting player after death
-   [MC-166524](https://bugs.mojang.com/browse/MC-166524) Trying to dye a sheep with the same color as sheep displays hand animation
-   [MC-167042](https://bugs.mojang.com/browse/MC-167042) Casting issue: Campfire embers are generated at a point that loses precision at high coordinates
-   [MC-167044](https://bugs.mojang.com/browse/MC-167044) Casting issue: Enchanting table book does not open for the player at high distances in some cases
-   [MC-167046](https://bugs.mojang.com/browse/MC-167046) Casting issue: Lava ember particles and lava popping sounds lose precision on creation at high coordinates
-   [MC-167047](https://bugs.mojang.com/browse/MC-167047) Casting issue: TNT blocks ignited by other explosions lose precision at high coordinates
-   [MC-167091](https://bugs.mojang.com/browse/MC-167091) Casting issue: Water particles dripping from leaves lose precision at high coordinates
-   [MC-167195](https://bugs.mojang.com/browse/MC-167195) Bees anger towards players in survival when killed in one hit
-   [MC-167971](https://bugs.mojang.com/browse/MC-167971) Casting issue: Particles emitted by redstone repeaters lose precision at high coordinates
-   [MC-168675](https://bugs.mojang.com/browse/MC-168675) Settings that update after closing the video settings menu don't if you change the fullscreen setting
-   [MC-170872](https://bugs.mojang.com/browse/MC-170872) Casting issue: Nether biome particles suffer from precision loss
-   [MC-170944](https://bugs.mojang.com/browse/MC-170944) /locatebiome messages do not fit for all biome names
-   [MC-171035](https://bugs.mojang.com/browse/MC-171035) Casting issue: Particles from falling rain lose precision at high coordinates
-   [MC-171037](https://bugs.mojang.com/browse/MC-171037) Casting issue: smoke produced by lava during rain loses precision at high coordinates
-   [MC-171663](https://bugs.mojang.com/browse/MC-171663) Right-clicking on unemployed villagers sometimes cause hand animation to stop after a villager has a profession
-   [MC-171683](https://bugs.mojang.com/browse/MC-171683) Crimson and warped doors can't have transparent textures
-   [MC-172259](https://bugs.mojang.com/browse/MC-172259) Baby Hoglin/Zoglin have their head slightly above their neck, it seems that their head is partly floating
-   [MC-172531](https://bugs.mojang.com/browse/MC-172531) Small mobs get stuck in fence corners
-   [MC-172610](https://bugs.mojang.com/browse/MC-172610) When not aiming at a block through a ridable mob while using a spawn egg on it, the player starts riding the mob and a baby mob is spawned
-   [MC-174815](https://bugs.mojang.com/browse/MC-174815) Piglins don't automatically attack withers
-   [MC-175028](https://bugs.mojang.com/browse/MC-175028) Sometimes hoglins don't avoid warped fungus
-   [MC-175215](https://bugs.mojang.com/browse/MC-175215) Respawn anchors destroy blocks when detonated underwater
-   [MC-175409](https://bugs.mojang.com/browse/MC-175409) Soul speed "effect" stays when you levitate/fly off of soul sand or soul soil
-   [MC-175476](https://bugs.mojang.com/browse/MC-175476) Respawn anchor doesn't cull block faces
-   [MC-175911](https://bugs.mojang.com/browse/MC-175911) Soul Speed lasts after leaving soul blocks
-   [MC-176041](https://bugs.mojang.com/browse/MC-176041) Using a spawn egg on a strider while aiming at lava spawns both a baby and an adult strider
-   [MC-176188](https://bugs.mojang.com/browse/MC-176188) Striders are not damaged by splash or lingering water bottles
-   [MC-176225](https://bugs.mojang.com/browse/MC-176225) Accelerating a baby strider's growth does not display hand animation
-   [MC-176470](https://bugs.mojang.com/browse/MC-176470) Respawning in the nether does not de-aggro zombified piglins
-   [MC-176637](https://bugs.mojang.com/browse/MC-176637) Closing game during Mojang load screen causes NullPointerException
-   [MC-176640](https://bugs.mojang.com/browse/MC-176640) You can set your spawn point inside dangerous blocks
-   [MC-178567](https://bugs.mojang.com/browse/MC-178567) Shearing sheep does not display hand animation again
-   [MC-178618](https://bugs.mojang.com/browse/MC-178618) Feeding a flower to a brown mooshroom does not perform hand animation
-   [MC-178961](https://bugs.mojang.com/browse/MC-178961) /loot ... fish ... command no longer has any functionality
-   [MC-179561](https://bugs.mojang.com/browse/MC-179561) Retreating baby hoglins sometimes won't pathfind to the opposite direction of the player
-   [MC-180111](https://bugs.mojang.com/browse/MC-180111) Hoglins angered for reasons other than being attacked by the player ignore placed repellents.
-   [MC-180922](https://bugs.mojang.com/browse/MC-180922) Right clicking a mob with a spawn egg to spawn the baby variant doesn’t play the hand swing animation when not aiming at a block through the mob
-   [MC-182308](https://bugs.mojang.com/browse/MC-182308) Chicken jockeys cannot despawn
-   [MC-182748](https://bugs.mojang.com/browse/MC-182748) Casting issue: Redstone dust particles are generated at the wrong positions at high coordinates
-   [MC-182883](https://bugs.mojang.com/browse/MC-182883) Parity issue: Baby hoglins don't follow adult hoglins
-   [MC-183766](https://bugs.mojang.com/browse/MC-183766) Who Is Cutting Onions Improperly Capitalized
-   [MC-183767](https://bugs.mojang.com/browse/MC-183767) Incorrect filename for "Serious Dedication" advancement in vanilla data pack
-   [MC-183792](https://bugs.mojang.com/browse/MC-183792) piglin\_loved item tag has unnecessary items
-   [MC-183821](https://bugs.mojang.com/browse/MC-183821) "Game Mode Switcher" bottom hint text isn't centered
-   [MC-183825](https://bugs.mojang.com/browse/MC-183825) New nether challenges don't grant experience points
-   [MC-183893](https://bugs.mojang.com/browse/MC-183893) Gold nugget isn't under #piglin\_loved
-   [MC-184679](https://bugs.mojang.com/browse/MC-184679) Using custom world generation, temperature is written wrong
-   [MC-184947](https://bugs.mojang.com/browse/MC-184947) Carriage return symbol can be seen when importing or exporting world generation settings to or from certain worlds
-   [MC-185095](https://bugs.mojang.com/browse/MC-185095) "thrown\_item\_picked\_up\_by\_entity" advancement trigger does not work for players
-   [MC-185377](https://bugs.mojang.com/browse/MC-185377) Bone mealing kelp creates a large field of particles, rather than only within the kelp's block space
-   [MC-185480](https://bugs.mojang.com/browse/MC-185480) Casting issue: Smoke particles emitted by campfires during rain form at the wrong positions at high coordinates
-   [MC-186062](https://bugs.mojang.com/browse/MC-186062) Warning "Could not find uniform named InSize in the specified shader program." when loading resources
-   [MC-186064](https://bugs.mojang.com/browse/MC-186064) Clouds render in front of everything for some users
-   [MC-186067](https://bugs.mojang.com/browse/MC-186067) Some structures' loot chests do not contain any items
-   [MC-186071](https://bugs.mojang.com/browse/MC-186071) Clouds are visible and don't render correctly when they are turned off
-   [MC-186074](https://bugs.mojang.com/browse/MC-186074) Particles render in the wrong order with transparent blocks when using certain graphics cards
-   [MC-186075](https://bugs.mojang.com/browse/MC-186075) GPU usage in latest snapshot significantly higher than before, causing lag or crash for some users
-   [MC-186080](https://bugs.mojang.com/browse/MC-186080) Entities, block entities, and items are rendered black on some graphics cards
-   [MC-186088](https://bugs.mojang.com/browse/MC-186088) Block hitboxes once again cause semi-transparent blocks not to render behind them
-   [MC-186089](https://bugs.mojang.com/browse/MC-186089) Functions load before entity tags do, causing loading errors.
-   [MC-186101](https://bugs.mojang.com/browse/MC-186101) Some commands in functions cause a NullPointerException
-   [MC-186108](https://bugs.mojang.com/browse/MC-186108) Enchantment glint does not render on dropped/thrown items
-   [MC-186109](https://bugs.mojang.com/browse/MC-186109) You can use multiplayer commands on a singleplayer world
-   [MC-186124](https://bugs.mojang.com/browse/MC-186124) Lightning bolt doesn't render
-   [MC-186204](https://bugs.mojang.com/browse/MC-186204) Items render in front of other entities, transparent blocks, and blocks with special renderers
-   [MC-186253](https://bugs.mojang.com/browse/MC-186253) Held translucent blocks make the water, clouds, particles, and placed translucent blocks behind them invisible in third person mode.
-   [MC-186274](https://bugs.mojang.com/browse/MC-186274) Purple light from Ender Dragon's Death doesn't appear
-   [MC-186284](https://bugs.mojang.com/browse/MC-186284) Player's point of view is upside down in 20w22a
-   [MC-186314](https://bugs.mojang.com/browse/MC-186314) Villagers become fixated on potential job site
-   [MC-186335](https://bugs.mojang.com/browse/MC-186335) Bees age calculation inside hive/nest is broken
-   [MC-186455](https://bugs.mojang.com/browse/MC-186455) Persistent villagers without experience can despawn after converting to a witch
-   [MC-186464](https://bugs.mojang.com/browse/MC-186464) Enabled data packs still show up in the "/datapack enable" list
-   [MC-186478](https://bugs.mojang.com/browse/MC-186478) Tag minecraft:tick doesn't work when joining a world
-   [MC-186480](https://bugs.mojang.com/browse/MC-186480) Inner parts of slime blocks and honey blocks disappear again while the block is moved by a piston
-   [MC-186600](https://bugs.mojang.com/browse/MC-186600) Nether gold ore is gray on a map
-   [MC-186696](https://bugs.mojang.com/browse/MC-186696) Totem of Undying causes red or blue tint in the screen when in F5 mode

---

# Minecraft: Java Edition 1.15.2 Pre-release 2

## CHANGES IN 1.15.2 PRE-RELEASE 2

-   Fixed bugs

## FIXED BUGS IN 1.15.2 PRE-RELEASE 2

-   [MC-169825](https://bugs.mojang.com/browse/MC-169825) - “Multiplayer (3rd party)” shows in window title when disconnecting from a singleplayer world
-   [MC-169839](https://bugs.mojang.com/browse/MC-169839) - Certain potion effects that override lower level effects don’t get removed after their duration ends
-   [MC-169840](https://bugs.mojang.com/browse/MC-169840) - Drinking a level 1 potion under a level 2 beacon and leaving results in the effect being lost
-   [MC-169848](https://bugs.mojang.com/browse/MC-169848) - Crashes when trying to create Beehive From planted tree
-   [MC-169886](https://bugs.mojang.com/browse/MC-169886) - No older world protection in 1.15.2 PR 1

---

# Minecraft: Java Edition 1.15.2 Pre-release 1

## CHANGES IN 1.15.2 PRE-RELEASE 1

-   Bees no longer anger when a nearby nest/hive is destroyed using a silk touch tool
-   Added `doPatrolSpawning` and `doTraderSpawning` game rules that control spawning of patrols and wandering traders, respectively
-   Added `gui_light` option in block models to allow controlling light when rendering model as item in GUI
-   Controls light when rendering block model inside slot. If set to `side`, model will be rendered like block. If set to `front`, model is shaded like flat item
-   Any birch or oak sapling grown near a flower within 2 blocks distance on the same y-level has a 5% chance of having a bee nest
-   Bee Nests now have a 2% chance of spawning in Flower Forests
-   Bee Nests now have a 0.2% chance of spawning in Forest, Wooded Hills, Birch Forest, Tall Birch Forest, Birch Forest Hills, and Tall Birch Hills biomes
-   Fixed bugs

## FIXED BUGS IN 1.15.2 PRE-RELEASE 1

-   [MC-862](https://bugs.mojang.com/browse/MC-862) - Spawn protection doesn’t work for item frames, paintings and armor stands
-   [MC-1541](https://bugs.mojang.com/browse/MC-1541) - Beacon effect removes potion effect of the same type
-   [MC-51053](https://bugs.mojang.com/browse/MC-51053) - Furnace minecarts lose power after navigating corners
-   [MC-150575](https://bugs.mojang.com/browse/MC-150575) - Concrete powder does not turn into concrete when letting it fall beside water
-   [MC-153987](https://bugs.mojang.com/browse/MC-153987) - Falling down ladders while wearing elytra
-   [MC-165695](https://bugs.mojang.com/browse/MC-165695) - Hoppers harvesting honeycomb from bee hives and bee nests only pick up one honeycomb
-   [MC-166312](https://bugs.mojang.com/browse/MC-166312) - Loom UI pattern icons are too dark
-   [MC-166319](https://bugs.mojang.com/browse/MC-166319) - B on “Open in browser” is lowercase in link confirmation GUI
-   [MC-166324](https://bugs.mojang.com/browse/MC-166324) - “Raw input” button has lowercase “i”
-   [MC-166722](https://bugs.mojang.com/browse/MC-166722) - Some custom item models appear dark in the inventory
-   [MC-167018](https://bugs.mojang.com/browse/MC-167018) - Misplaced pixel in critical hit particle texture
-   [MC-167079](https://bugs.mojang.com/browse/MC-167079) - Horse Armor texture is off
-   [MC-167201](https://bugs.mojang.com/browse/MC-167201) - Invisible glowing entities do not respect their team color
-   [MC-167219](https://bugs.mojang.com/browse/MC-167219) - Reloading a resource pack enough times will cause intense lag
-   [MC-167220](https://bugs.mojang.com/browse/MC-167220) - Items on marker armor stands no longer glow
-   [MC-167235](https://bugs.mojang.com/browse/MC-167235) - Distance from where you can enter a bed is off center
-   [MC-167344](https://bugs.mojang.com/browse/MC-167344) - com.mojang.blaze3d.platform.ClipboardManager leaks direct buffers
-   [MC-167416](https://bugs.mojang.com/browse/MC-167416) - Distance from where a monster will stop you from sleeping is off center
-   [MC-167444](https://bugs.mojang.com/browse/MC-167444) - iron\_golem\_crackiness\_\* textures show up on invisible iron golems that are damaged
-   [MC-167709](https://bugs.mojang.com/browse/MC-167709) - Bees that ride a boat, minecart or other entities when entering their hive or nest can’t leave the hive or nest ever again
-   [MC-168091](https://bugs.mojang.com/browse/MC-168091) - Concrete powder doesn’t convert into concrete when dropped into deep water
-   [MC-168230](https://bugs.mojang.com/browse/MC-168230) - End crystal beam is dark / desaturated
-   [MC-168467](https://bugs.mojang.com/browse/MC-168467) - Bees do not remember how many crops they’ve pollinated
-   [MC-169157](https://bugs.mojang.com/browse/MC-169157) - Breaking a hive with obstructed front makes bees vanish

---

