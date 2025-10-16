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
-   [MC-165518](https://bugs.mojang.com/browse/MC-165518) - Village houses desert;;_;;temple;;_;;1 and plains;;_;;temple;;_;;4 have no floor at entrance
-   [MC-169533](https://bugs.mojang.com/browse/MC-169533) - Asymmetrical walls in snowy;;_;;cartographer;;_;;house;;_;;1
-   [MC-169715](https://bugs.mojang.com/browse/MC-169715) - Misrotated block in snowy;;_;;small;;_;;house;;_;;3
-   [MC-169869](https://bugs.mojang.com/browse/MC-169869) - Mooshroom using incorrect texture in Programmer Art
-   [MC-170242](https://bugs.mojang.com/browse/MC-170242) - Asymmetrical walls in taiga;;_;;medium;;_;;house;;_;;4
-   [MC-170470](https://bugs.mojang.com/browse/MC-170470) - At snowy;;_;;library;;_;;1, the snow block is placed next to the window, which causes ugly visual effect
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
-   [MC-173165](https://bugs.mojang.com/browse/MC-173165) - Piglin Bartering Loot Table contains an extra "set;;_;;count" function
-   [MC-173168](https://bugs.mojang.com/browse/MC-173168) - The word "backup" appears instead of the phrase "back up."
-   [MC-173169](https://bugs.mojang.com/browse/MC-173169) - Piglins still aren't attracted to powered rails
-   [MC-173176](https://bugs.mojang.com/browse/MC-173176) - Serialization error affecting operators list and whitelist
-   [MC-173244](https://bugs.mojang.com/browse/MC-173244) - Target block moved by pistons permanently keep their signal strength

---

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
-   [MC-170932](https://bugs.mojang.com/browse/MC-170932) Cave generator won't cut through crimson;;_;;nylium and warped;;_;;nylium, leading to lots of floating nylium
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

A wild snapshot appears! To tell you the truth, we hadn't actually planned to do a snapshot this week, but the Villagers were in dire need of neurosurgery.

## Fixed bug in 20w08a

-   [MC-172078](https://bugs.mojang.com/browse/MC-172078) All villagers with saved memory disappear when upgrading to 20w07a

---

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
-   [MC-172025](https://bugs.mojang.com/browse/MC-172025) Several misrotated blocks at snowy;;_;;medium;;_;;house;;_;;2

---

