# Minecraft Snapshot 21w05b

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

