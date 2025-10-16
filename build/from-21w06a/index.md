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

Snapshot 21w05b is a small snapshot to address a couple of bugs.

## Fixed bugs in 21w05b

-   [MC-203813](https://bugs.mojang.com/browse/MC-203813) Copper blocks are named inconsistently
-   [MC-213788](https://bugs.mojang.com/browse/MC-213788) The game can randomly freeze
-   [MC-213802](https://bugs.mojang.com/browse/MC-213802) Copper is not upgraded correctly from pre-21w05a worlds

---

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

