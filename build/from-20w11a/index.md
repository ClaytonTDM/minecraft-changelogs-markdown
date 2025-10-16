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

A wild snapshot appears! To tell you the truth, we hadn't actually planned to do a snapshot this week, but the Villagers were in dire need of neurosurgery.

## Fixed bug in 20w08a

-   [MC-172078](https://bugs.mojang.com/browse/MC-172078) All villagers with saved memory disappear when upgrading to 20w07a

---

