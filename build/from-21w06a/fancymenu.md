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
-   [MC-206550](https://bugs.mojang.com/browse/MC-206550) block.pointed;;_;;dripstone.drip;;_;;;;[;;liquid/cauldron;;];; has no subtitles
-   [MC-206599](https://bugs.mojang.com/browse/MC-206599) Pointed dripstone can be placed atop each other, even if a player would be inside the hitbox of the lower dripstone
-   [MC-206923](https://bugs.mojang.com/browse/MC-206923) Dripstone subtitles are not capitalized properly
-   [MC-207250](https://bugs.mojang.com/browse/MC-207250) Dripstone caves biome name is not properly capitalized
-   [MC-207254](https://bugs.mojang.com/browse/MC-207254) Dripstone caves generate merging dripstones in impossible ways
-   [MC-207293](https://bugs.mojang.com/browse/MC-207293) Dripstone generated in dripstone caves can replace lava sources which looks weird
-   [MC-207335](https://bugs.mojang.com/browse/MC-207335) Mobs cannot spawn in Dripstone Caves
-   [MC-207388](https://bugs.mojang.com/browse/MC-207388) Issues with chunk rendering when height limit is large
-   [MC-207900](https://bugs.mojang.com/browse/MC-207900) Summoning "dust" or "dust;;_;;color;;_;;transition" particles kicks nearby players when on a server
-   [MC-208336](https://bugs.mojang.com/browse/MC-208336) 'player' sub-predicate of 'entity;;_;;properties' predicate only passes if game mode is specified
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

**Vibration Frequency Changes**

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

**Redstone Emission**

-   Sculk Sensors emit a redstone signal when they are activated.
-   The strength of the redstone signal is inversely proportional to the distance the vibration signal travelled.
    -   This means that the closer the vibration is, the stronger the redstone signal is.
    -   The output is also scaled based on the Sculk Sensor's radius, so it can reach the max redstone signal strength when the vibration is 0 distance away (directly on top of the sensor).

**Vibration Frequencies**

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

**Wool Occlusion**

-   Wool has a special interaction with Sculk Sensors.
-   If a wool block is in the way of a vibration source, the sensor will not be able to detect it.

**Technical Tidbits**

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

**Tags**

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

