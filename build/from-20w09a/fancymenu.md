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
-   [MC-172025](https://bugs.mojang.com/browse/MC-172025) Several misrotated blocks at snowy;;_;;medium;;_;;house;;_;;2

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

**How to make Netherite**

-   Mine Ancient Debris in the lower depths of the Nether. At own risk. No insurance coverage for that.
-   Refine it into Netherite Scrap in a furnace (although that's kind of slow so you might want a Blast Furnace).
-   Combine 4 Nether Scrap with 4 Gold Ingots in a crafting table to make a Netherite Ingot.

**Netherite effects**

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

**locatebiome**

New command that locates a specified biome. Useful in creative mode when you're looking for a specific biome and don't want to fly around randomly searching for it. Syntax: `locatebiome <biome>` Parameters:

-   `biome` - The id of the biome to find

### Particles

-   New particle types: ash, crimson;;_;;spore, soul;;_;;fire;;_;;flame and warped;;_;;spore

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
-   [MC-109844](https://bugs.mojang.com/browse/MC-109844) en;;_;;us.json contains unused strings
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

**Modified Data Fields**

-   `profile` - now has the same format as a `minecraft:profile` component (which has been extended to allow overrides), defaults to `{}` (i.e. static profile with both `id` and `name` missing)

**New Data Fields**

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

**Modified `minecraft:profile`**

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

**Modified `minecraft:player`**

-   Changes to the `respawn` object
    -   `angle` has been renamed to `yaw` and is now a required field
    -   `pitch` has been added as a required field
    -   `dimension` is now a required field

### Loot Functions

**`minecraft:copy_name`**

-   The `source` field now accepts new context values:
    -   `direct_attacker`
    -   `target_entity`
    -   `interacting_entity`

**`minecraft:copy_components`**

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
-   [MC-301424](https://bugs.mojang.com/browse/MC-301424) entity;;_;;data item component detection is broken in resource packs
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
-   [MC-301951](https://bugs.mojang.com/browse/MC-301951) Misleading description for operator;;_;;user;;_;;permission;;_;;level in server management protocol documentation
-   [MC-301979](https://bugs.mojang.com/browse/MC-301979) Copper golems no longer properly check chests
-   [MC-301984](https://bugs.mojang.com/browse/MC-301984) Teleporting a player to their own position is now jittery/frozen
-   [MC-301991](https://bugs.mojang.com/browse/MC-301991) deprecated.json has some renamed keys pointing to text values instead of the new keys
-   [MC-302032](https://bugs.mojang.com/browse/MC-302032) Static profiles no longer resolve texture data unless an id or name is provided
-   [MC-302089](https://bugs.mojang.com/browse/MC-302089) Game crashes when flying mobs start pathfinding in debug mode
-   [MC-302092](https://bugs.mojang.com/browse/MC-302092) Crash when placing iron bars next to stairs, when stairs are added to #bars tag
-   [MC-302094](https://bugs.mojang.com/browse/MC-302094) Crash when adding blocks to #copper;;_;;chests then placing it next to actual copper chests
-   [MC-302095](https://bugs.mojang.com/browse/MC-302095) Crash when adding blocks to #lightning;;_;;rods and summoning a lightning over it
-   [MC-302096](https://bugs.mojang.com/browse/MC-302096) Crash when adding blocks to #wooden;;_;;shelves, placing it next to wooden shelf, then powering the shelf

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
-   [MC-298681](https://bugs.mojang.com/browse/MC-298681) Text displays with the "shadow" tag enabled and the "see;;_;;through" tag disabled exhibit z-plane fighting at a close distance
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

