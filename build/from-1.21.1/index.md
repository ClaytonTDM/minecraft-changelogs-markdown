# Minecraft: Java Edition 1.21.1

It will soon be time for new snapshots, but before that: we are now releasing Minecraft 1.21.1. This is a hotfix version that addresses some critical exploits.

We highly recommend that server owners upgrade to this version. Players on Minecraft 1.21 will be able to join servers running on 1.21.1.

## Changes

-   Fixed critical exploits that could be used to crash servers
-   Added language support for Tzotzil and Belarusian (Latin)

---

It's a fantastic day today, because it's release day Thursday! And not just any old release day. This one is extra special because today we're shipping Minecraft: Java Edition 1.21, also known as the Tricky Trials Update!

Venture into the hazardous Trial Chambers alone or with friends, face off against the new Breeze mob and craft a smashingly powerful new weapon, the Mace! Take your ingenious Redstone designs to new heights with the Crafter, play around with the Wind Charge, discover new decorative blocks made of Copper and Tuff, enjoy new Paintings, Music Discs, and more!

And that's not all! On the technical side, Tricky Trials is heralding a new age for data packs with Enchantments, Paintings and Jukebox Music Discs now being data-driven. With this release, we're also going live with performance improvements to chunk loading that were introduced in 24w19a, which reduces memory and CPU overhead compared to the old system.

Embark on your very first adventure in Tricky Trials by delving into the full changelog below, it's a long one!

Happy mining!

## New Features

-   Added a new underground structure called the Trial Chambers
-   Added 2 new mobs
    -   Breeze
    -   Bogged
-   Added a new weapon, the Mace
-   Added 3 new enchantments exclusive to the Mace
    -   Density
    -   Breach
    -   Wind Burst
-   Added the following blocks:
    -   Crafter
    -   Trial Spawner
    -   Ominous Trial Spawner
    -   Vault
    -   Ominous Vault
    -   New variants in the Copper Family
    -   New variants in the Tuff Family
    -   Heavy Core
-   Added the following items:
    -   Trial Explorer Map
    -   Ominous Bottle
    -   Wind Charge
    -   Trial Key
    -   Ominous Trial Key
    -   Breeze Rod
    -   3 new Pottery Sherds
    -   2 new Banner Patterns
    -   2 new Armor Trims
    -   4 new Potions
        -   Potion of Infestation
        -   Potion of Oozing
        -   Potion of Weaving
        -   Potion of Wind Charging
    -   4 new Tipped Arrows
        -   Arrow of Infestation
        -   Arrow of Oozing
        -   Arrow of Weaving
        -   Arrow of Wind Charging
-   Added 3 new Music Discs by Aaron Cherof and Lena Raine
-   Added 20 new Paintings
    -   5 by artist Sarah Boeving
    -   15 by artist Kristoffer Zetterstrand
-   Redesigned Bad Omen to give access to Ominous Events
-   Added 6 new Status Effects
    -   Infested
    -   Oozing
    -   Weaving
    -   Wind Charged
    -   Raid Omen
    -   Trial Omen
-   Added 9 new music tracks by Aaron Cherof, Kumi Tanioka, and Lena Raine
-   Added 8 new Advancements
-   Added 4 new cave ambient sounds
-   Boats are now leashable

![Sunny and Makena are posing in a Trial Chamber, showcasing the new Flow and Bolt Armor Trims.](https://launchercontent.mojang.com/v2/images/t1.21newtrialchamberspatterns.jpg)

### Structures

#### Trial Chambers

-   Trial Chambers are a new structure in the Overworld where players can explore and take on combat challenges
    -   Made out of a variety of Copper and Tuff blocks, and can be found in different sizes
    -   A relatively common find throughout the Deepslate layer of the underground
    -   Natural mob spawning does not occur inside, similar to Ancient Cities
    -   Never starts inside a Deep Dark biome, but can sometimes overlap it
-   The layout of each Trial Chamber is procedurally generated, and can include traps, rewards and a variety of combat areas
    -   Decorated Pots line the corridors and hold hidden treasures
    -   Supply Barrels can be found between different rooms, and give you blocks and items which help you navigate your trials
    -   Vaults are guarded by challenges in each room, and can be a source of many high level Enchanted Books and equipment including a very rare chance to receive a Trident
    -   Ominous Vaults can be found in harder to reach places and give even better loot than standard Vaults, including some items which are exclusive to Ominous Vaults
-   Each Trial Chamber will include Trial Spawners with a melee, small melee, or ranged category:
    -   Melee
        -   Zombie
        -   Husk
        -   Spider
    -   Small Melee
        -   Slime
        -   Cave Spider
        -   Baby Zombie
        -   Silverfish
    -   Ranged
        -   Skeleton
        -   Stray
        -   Bogged
-   Each Trial Spawner category will only use one mob for the entire structure when generated, and these mobs are randomized for each Trial Chamber
    -   For example, one Trial Chamber might only spawn Zombies, Cave Spiders and Strays, while another might only spawn Spiders, Silverfish and Skeletons
    -   The exceptions to this are some Trial Spawners in unique rooms which always spawn Breezes

### Mobs

#### Breeze

-   A cunning hostile mob spawned by some Trial Spawners in Trial Chamber rooms
    -   Drops 1-2 Breeze Rods when killed by a player
    -   The number of Breeze Rods dropped is affected by looting enchantments
-   Moves primarily by leaping around its target
-   Deflects almost all projectiles, making it immune to ranged combat
    -   With one notable exception: it cannot deflect Wind Charges
-   An aggressive adversary, it shoots volatile wind energy in the form of Wind Charge projectiles at its target
    -   After colliding with an entity or a block, Wind Charge projectiles produce a Wind Burst, which knocks back entities in the area
    -   Wind Charges deal a small amount of damage when colliding directly with an entity
    -   Wind Charges break decorated pots and chorus flower blocks upon collision
-   Wind Bursts have the effect of 'activating' certain blocks:
    -   Non-Iron Doors and Trapdoors are flipped
    -   Fence Gates are flipped
    -   Buttons are pressed
    -   Levers are flipped
    -   Bells are rung and swung
    -   Lit Candles are extinguished
-   Wind Bursts do not have any effect on Iron Doors, Iron Trapdoors, or any block being held in its position by a Redstone signal
-   Will not retaliate against attacks from the following mobs: Skeletons, Strays, Bogged, Zombies, Husks, Spiders, Cave Spiders and Slimes
    -   The same mobs will not retaliate against a Breeze when hurt by its Wind Charge projectile

#### Bogged

-   A new variant of Skeletons that shoots poisonous arrows
    -   They're easier to take down with 16 health instead of 20 health
    -   They attack at a slower interval of 3.5 seconds instead of 2 seconds
-   Has a chance to drop Arrows of Poison when killed by players
-   These mossy and mushroom covered Skeletons spawn naturally in Swamps and Mangrove Swamps
    -   Can also be found spawning from Trial Spawners in some Trial Chambers
-   Drops 2 mushrooms when sheared (either both red, both brown, or one of each)

![A Bogged is aiming its Bow at something at night in a Swamp. It is a Skeleton variation with moss on its bones and Mushrooms growing on its head. The Moon is rising between Mangrove trees in the background.](https://launchercontent.mojang.com/v2/images/t1.21newbogged.jpg)

### Weapons

#### Mace

-   A new heavy weapon to smash your enemies!
    -   Has a base damage of 5
    -   Can be crafted with a Breeze Rod and a Heavy Core
    -   Using it will decrease its durability like any other weapon; can be repaired with Breeze Rods at an Anvil
-   Has a unique attack called the smash attack. When the player falls more than 1.5 blocks before hitting, a smash attack is triggered which has multiple effects:
    -   Safe Fall: Resets all vertical momentum and negates any fall damage accumulated from the fall
    -   Extra Damage: Does more damage the further the player fell before hitting the target with it:
        -   For the first 3 blocks fallen: Add 4 damage per block
        -   For the next 5 blocks fallen: Add 2 damage per block
        -   For any blocks fallen after: Add 1 damage per block
    -   Great Knockback: Other entities near the struck enemy will be knocked back by the immense force of the Mace
-   Can be used in combination with Wind Charges to launch up and deliver devastating smash attacks to enemies
-   These existing enchantments can be applied to the Mace:
    -   Mending
    -   Unbreaking
    -   Smite
    -   Bane of Arthropods
    -   Fire Aspect
    -   Curse of Vanishing
-   The Mace also has 3 exclusive enchantments: Density, Breach and Wind Burst

![Noor is using a Mace with a Wind Burst enchantment to fight a group of Pillagers next to a Pillager Outpost. One of the Pillagers is dramatically thrown towards the viewer by the Wind Burst explosion, while the others are aiming their Crossbows at Noor.](https://launchercontent.mojang.com/v2/images/t1.21newmace.jpg)

### Enchantments

Three new enchantments have been added which are exclusive to the Mace

-   Density
    -   Common Enchantment, accessible in the Enchanting Table and on Enchanted Books in random loot chests
    -   Has 5 levels
    -   Maces enchanted with Density do more damage per fallen block per Density level
        -   Damage dealt per fallen block is increased by 0.5 per level of Density
    -   Mutually exclusive with Breach, Smite, and Bane of Arthropods
-   Breach
    -   Rare Enchantment, accessible in the Enchanting Table and on Enchanted Books in random loot chests
    -   Has 4 levels
    -   Maces enchanted with Breach reduce the effectiveness of armor on the target
        -   The effectiveness of the armor is reduced by 15% per Breach level
    -   Mutually exclusive with Density, Smite, and Bane of Arthropods
-   Wind Burst
    -   Unique enchantment which can only be found in Ominous Vaults
        -   Only Wind Burst I can be found, higher levels must be obtained by combining them in an Anvil
    -   Has 3 levels
    -   Maces enchanted with Wind Burst will emit a Wind Burst upon hitting an enemy, launching the attacker upward and enabling the linking of smash attacks one after the other
    -   Successfully landing a Wind Burst attack causes the player to lose the fall damage protection they would otherwise have from landing a successful smash attack
    -   Each level will bounce the attacker an additional 7 blocks into the air

### Blocks

#### Crafter

-   A new block that enables the crafting of items and blocks via Redstone
    -   Can be crafted with 5 Iron Ingots, 2 Redstone Dust, 1 Crafting Table and 1 Dropper
-   Will eject one crafting result at a time when powered by a Redstone pulse
    -   Its current powered state is indicated by Redstone crystals on its back face, which will light up
    -   The crafting grid on its top face will light up red when it successfully crafts a recipe
-   Upon receiving a signal, it will eject the recipe result from the front face
    -   If the recipe output has any remainder items (such as a Bucket), the result and remainder items will be ejected together
-   When placed, the front face of the Crafter will face towards the player

![An automated rail Crafter is producing rails. Makena is collecting the rails and Noor is building a railway.](https://launchercontent.mojang.com/v2/images/t1.21newcrafter.jpg)

##### Crafter User Interface

-   Has a 3x3 interactable crafting grid
-   The crafting grid slots are toggleable, meaning that the player can change the behavior of a slot by interacting with it while not holding an item
-   A slot that is ‘toggled’ cannot hold any items
    -   Other blocks such as Hoppers and Droppers also cannot place items into them
-   Unlike the Crafting Table, the Crafter displays a preview of the crafted item which will be crafted and ejected on the next Redstone pulse, but cannot be manually taken out by the player
    -   The arrow pointing out from the recipe grid will light up red when the Crafter is currently powered
-   The Crafter User Interface is shared between all players interacting with it, meaning that multiple players can interact with the Crafter at the same time, similar to Chests and Hoppers

##### Crafter Interaction with Other Blocks

-   The signal strength of a Comparator reading a Crafter is 0-9, where each non-empty or toggled slot adds 1 strength
-   Hoppers and Minecarts with Hoppers can be used to both insert and extract items from the Crafter
-   Droppers can be used to insert items into the Crafter
-   Items inserted from another block (ex: Hopper, Dropper) will fill the Crafter's slots based on these rules:
    -   Prioritize the first empty slot (from left-to-right, top-to-bottom)
    -   If there are no empty slots then prioritize the smallest stack of the same item (pick the first if there are multiple)
    -   If there is a toggled slot it will be skipped. The item will then be moved into the container
    -   If the item cannot be moved, it will be ejected into the world
-   Items are removed from Crafters by Hoppers and Minecarts with Hoppers in the same order as from other containers like Chests

#### Trial Spawner

-   A new variant of Monster Spawners that ejects rewards upon defeat
    -   Cannot be crafted nor obtained by players in Survival - instead, they can be found naturally throughout Trial Chambers
    -   Very slow to mine and resistant to explosions, and will not drop even with Silk Touch
    -   Cannot be moved by Pistons
-   The challenge level will increase for each new player a Trial Spawner notices nearby
    -   The challenge level will not decrease until it is reset during a Trial Spawner's cooldown
    -   Trial Spawners can only notice players which are in line of sight, and will ignore Creative and Spectator players
-   Unlike normal Spawners, a Trial Spawner will spawn a limited number of mobs proportional to its current challenge level
    -   It can only spawn a mob at positions that are within line of sight
    -   It can spawn a mob regardless of any light level requirement the mob has
    -   Spawned mobs are persistent
-   Once all mobs are defeated, the Trial Spawner will eject a number of rewards which is proportional to the current challenge level
    -   After the rewards have been ejected, the Trial Spawner goes into cooldown for 30 minutes, during which it will no longer spawn mobs
-   When placed in Creative, Trial Spawners have no mob type set by default
    -   The mob type can be set by interacting with it while holding a Spawn Egg
-   Has an Ominous Trial Spawner variant, accessible through an Ominous Trial

#### Vault

-   A block that holds locked treasure and loot - players must find the right key to eject its rewards
    -   Can be found throughout Trial Chambers, containing the structures' most valuable loot
    -   Vaults in Trial Chambers require a Trial Key to be unlocked
    -   Cannot be crafted nor obtained in Survival, and does not drop anything when mined
    -   Explosion resistant and cannot be moved by Pistons
-   Can be unlocked by an unlimited number of players
    -   After a player has unlocked a Vault, they cannot personally unlock that Vault again
    -   If a player has not unlocked a particular Vault before, this can be seen by an orange stream of particles that flow from the player to that Vault when nearby
-   Has a keyhole that will be open or closed depending on the players nearby
    -   If any nearby player has not unlocked that Vault, the keyhole will be open
    -   If all nearby players have unlocked that Vault, the keyhole will be closed
-   Within its cage, it will cycle through and display items which are possible to eject from its loot table
    -   Players cannot time their unlocks to eject the item that is currently displayed in the cage
-   The loot it ejects is randomized each time it is unlocked
-   Has an Ominous Vault variant, unlockable through an Ominous Trial

#### Copper Family

-   The Copper family of blocks has been expanded to add:
    -   Chiseled Copper
    -   Copper Grate
    -   Copper Bulb
    -   Copper Door
    -   Copper Trapdoor
    -   Oxidized and waxed variants of all of the above

##### Chiseled Copper

-   Crafted with 2 Cut Copper Slabs of a shared oxidation level
-   Can be crafted in the Stonecutter

##### Copper Grate

-   A new type of decorative block unique to the Copper family
-   Crafted with 4 Copper Blocks of a shared oxidation level
    -   Stonecutting a Copper Block into Copper Grates outputs 4 Copper Grates
-   Properties:
    -   Transparent and allows light to pass through
    -   Mobs cannot suffocate inside them
    -   Cannot conduct Redstone
    -   Hostile mobs cannot naturally spawn on them
    -   Can hold water

##### Copper Bulb

-   A light-emitting block that can toggle its light emission through Redstone pulses
-   Oxidizes like other Copper blocks, and emits light based on oxidation level
    -   Copper Bulb: Light level 15
    -   Exposed Copper Bulb: Light level 12
    -   Weathered Copper Bulb: Light level 8
    -   Oxidized Copper Bulb: Light level 4
-   When placed, its light is off by default
    -   While it is unpowered, it will toggle its light on or off when it receives a Redstone pulse
    -   Its light will stay on even when the Redstone source is removed, and will only toggle off when it receives another Redstone pulse
-   A Redstone crystal can be seen in its center while it is powered by a Redstone signal
-   Similar to Glass Blocks, it does not conduct Redstone power
-   Comparators reading a Copper Bulb will output a signal strength of 15 if the Copper Bulb's light is on
-   The crafting recipe for 4 Copper Bulbs is:
    -   3 Copper Blocks of a shared oxidation level
    -   1 Blaze Rod
    -   1 Redstone Dust

##### Copper Doors and Trapdoors

-   Copper variants of Doors and Trapdoors that can oxidize over time and be waxed
-   Behaves like wooden doors, meaning they can be opened and closed with interaction as well as Redstone
    -   Can be opened by mobs that have the ability to open doors
-   Crafted with Copper Ingots

#### Tuff Family

-   Tuff has been expanded to have its own family of blocks:
    -   Stair, Slab, Wall and Chiseled variants
    -   Tuff Bricks with Stair, Slab, Wall and Chiseled variants
    -   Polished Tuff with Stair, Slab and Wall variants
-   All Tuff variants can be crafted in the Stonecutter

#### Heavy Core

-   A mysterious, dense block which can be combined with a Breeze Rod to craft the Mace
-   Can only be obtained from Ominous Vaults

![A house built out of Tuff Bricks, Chiseled Tuff and new Copper-based blocks. Decorative Pots with new Guster and Flow patterns are also visible.](https://launchercontent.mojang.com/v2/images/t1.21newtuff.jpg)

### Items

#### Trial Explorer Map

-   Used to locate a nearby Trial Chamber
-   Level up a Cartographer Villager to Journeyman for the opportunity to trade for this map

#### Ominous Bottle

-   An item which can be consumed by players to receive the Bad Omen effect for 1 hour and 40 minutes
    -   Comes in 5 variations, one for each Bad Omen level
    -   The bottle breaks when consumed
    -   Can be stacked to 64
-   Ominous Bottles can be found uncommonly in any Vaults, and are dropped by Raid Captains which are defeated outside a Raid

#### Wind Charge

-   Become the Breeze! Using this item will fire off a Wind Charge projectile similar to the Breeze's
    -   Can be used to launch entities away from the impact of the Wind Burst
    -   Grants 10% more knockback than a Breeze's, but has a much smaller area of impact
    -   Deals damage if it hits an entity directly
    -   Has a half-second cooldown after each use
    -   Can be fired from a dispenser
-   Players can use Wind Charges to propel themselves high into the air
    -   Players that launch themselves with a Wind Charge only accumulate fall damage below the height of where they collided with the Wind Burst
    -   As an example, if a player uses a Wind Charge to launch themselves 9 blocks into the air, and they do not land lower than where they initially launched, they will take 0 damage

![Sunny is using Wind Charges to jump across rocky formations in Badlands. The Wind Charge particles are visible where they jumped up from.](https://launchercontent.mojang.com/v2/images/t1.21newwindcharge.jpg)

#### Trial Key

-   An item that can only be obtained from Trial Spawners
-   Can be used to unlock Vaults

#### Breeze Rod

-   An item dropped by a Breeze that can be crafted into 4 Wind Charges, or used with the Heavy Core to craft a Mace

#### Pottery Sherds

-   Added Flow, Guster, and Scrape Pottery Sherds
-   These can be obtained by breaking Decorated Pots that display them in Trial Chambers

#### Banner Patterns

-   Added Flow Banner Pattern, found in Vaults
-   Added Guster Banner Pattern, found in Ominous Vaults

#### Armor Trims

-   Added Bolt Armor Trim and Smithing Template, found in Vaults
    -   Can be duplicated using a Copper Block or Waxed Copper
-   Added Flow Armor Trim and Smithing Template, found in Ominous Vaults
    -   Can be duplicated using a Breeze Rod

### Music Discs

Added 3 new music discs:

-   "Precipice" by Aaron Cherof. Can be found rarely in standard Vaults, and has a comparator output of 13 when played in a Jukebox
-   "Creator" by Lena Raine. Can be found rarely in Ominous Vaults, and has a comparator output of 12 when played in a Jukebox
-   "Creator (Music Box)" by Lena Raine. Can be found rarely in Decorated Pots broken in Trial Chambers, and has a comparator output of 11 when played in a Jukebox

### Paintings

Added five new paintings by artist Sarah Boeving:

-   Baroque
-   Humble
-   Meditative
-   Prairie Ride
-   Unpacked

Added fifteen new paintings by artist Kristoffer Zetterstrand:

-   Backyard
-   Bouquet
-   Cavebird
-   Changing
-   Cotan
-   Fern
-   Endboss
-   Finding
-   Lowmist
-   Orb
-   Owlemons
-   Passage
-   Pond
-   Sunflowers
-   Tides

![Noor is looking at the new paintings in a gallery. "Unpacked" by Sarah Boeving is in the forefront. Around Noor, six items are displayed on Chiseled Tuff Brick stands: 3 new Music Discs, an enchanted Mace, an enchanted Golden Sword, and an enchanted Copper Door.](https://launchercontent.mojang.com/v2/images/t1.21newmuseum.jpg)

### Ominous Events

-   Bad Omen has been expanded to give access to an optional experience in Trial Chambers
-   These optional experiences can be accessed through Bad Omen, and are now known as Ominous Events
    -   They are more challenging than usual, and are designed to shake up the experience in unique ways
    -   Raids are an example of an existing Ominous Event
-   As a result, Bad Omen has a new, shadowy icon and a sound for being applied to the player
    -   It is no longer given to players that defeat a Raid Captain outside a Raid
    -   Instead, players can gain access to Bad Omen by consuming the new Ominous Bottle item

#### Raids

-   Bad Omen no longer triggers a Raid directly when entering a Village
    -   Instead, it will transform into a Raid Omen variant with a duration of 30 seconds
    -   Once the Raid Omen expires, a Raid will start at the location the player gained the Raid Omen
    -   Like any other effect, players can drink a Bucket of Milk to clear the Raid Omen, preventing the Raid from starting

#### Ominous Trials

-   A new Ominous Event that can be accessed by exploring a Trial Chamber while Bad Omen is active
-   This event will have players facing more powerful Ominous Trial Spawners, if they dare

##### Trial Omen

-   A variant that Bad Omen can transform into
    -   This occurs when the player is within detection range of a Trial Spawner that is not Ominous
    -   The Trial Omen will have a duration of 15 minutes multiplied by the transformed Bad Omen's level
-   Players that have Trial Omen are surrounded by ominous particles

##### Ominous Trial Spawner

-   A more powerful active phase of the Trial Spawner with unique challenges and rewards
    -   Provides a more challenging experience that combat-loving players can opt into for better rewards
-   If a Trial Spawner detects a player that has the Trial Omen effect, the spawner will become Ominous if:
    -   It is not in cooldown
    -   Or, it is in cooldown but was not Ominous during its last activation
        -   Making it Ominous this way will bypass the cooldown
-   While active, it will:
    -   Glow blue instead of orange
    -   Emit soul flames instead of normal flames
    -   Periodically spawn potions and projectiles on top of unsuspecting players and mobs
        -   Based on their location, spawners in an area will select a random set of projectiles to spawn
        -   These projectiles will always include a single type of Lingering Potion from a set of possible effects
-   The mobs it spawns are more powerful than usual:
    -   Mobs that can wear equipment will often spawn with enchanted weapons and armor
        -   The armor these mobs wear have Armor Trims applied from the Trial Chambers
        -   All 3 of the following armor enchantments are applied to each piece:
            -   Protection IV
            -   Projectile Protection IV
            -   Fire Protection IV
        -   Sword enchantments can be either of the two:
            -   Sharpness I
            -   Knockback I
        -   Bow enchantments can be either of the two:
            -   Power I
            -   Punch I
    -   Mobs that cannot wear equipment will instead be spawned at double the total mob count over the course of the challenge
        -   The spawners for these mobs will also have an additional mob out at once during its challenge
-   Becoming Ominous will despawn any existing mobs it spawned and reset its challenge
    -   If those mobs picked up or equipped any items on the floor, those items will be dropped when they despawn
    -   It will stay Ominous until it has been defeated and its cooldown has finished
-   When defeated, it will eject a different set of loot to normal Trial Spawners

##### Ominous Vault

-   A variant of Vaults that have a more menacing looking and emit soul flames instead of normal flames
-   These hold a more valuable set of rewards than the standard Vaults that are unlocked by Trial Keys
-   Can be found throughout Trial Chambers in harder to reach places, and require an Ominous Trial Key to unlock

##### Ominous Trial Key

-   A variant of the Trial Key which has a 30% chance to eject when defeating an Ominous Trial Spawner
-   Can be used to unlock Ominous Vaults

### Status Effects

-   The following status effects have been added:
    -   Wind Charged
        -   Affected entities will emit a wind burst upon death
        -   Can be brewed as a Potion with an Awkward Potion and a Breeze Rod
    -   Weaving
        -   Affected entities will spread Cobweb blocks upon death
        -   Affected entities can move through Cobweb with 50% of their normal speed instead of 25%
        -   Can be brewed as a Potion with an Awkward Potion and a Cobweb block
    -   Oozing
        -   Affected entities will spawn two Slimes upon death
        -   Can be brewed as a Potion with an Awkward Potion and a Slime Block
    -   Infested
        -   Affected entities have a 10% chance to spawn 1-2 Silverfish when hurt
        -   Can be brewed as a Potion with an Awkward Potion and a Stone block
    -   Splash Potions, Lingering Potions and Tipped Arrows can be made with these effects
-   These effects can be encountered while taking on an Ominous Trial Spawner
-   Some mobs are immune to these effects
    -   Slimes are immune to Oozing
    -   Silverfish are immune to Infested
-   Whenever a mob with Oozing dies, it will check within a 5x5x5 area how many Slimes there are
    -   If the amount exceeds the max entity cramming cap (24 by default), it will not spawn any Slimes
    -   If it does not exceed it, it will attempt to spawn 2 Slimes up until the max entity cramming cap

### Music

Added 9 new background music tracks which will all play in the main menu:

-   "Featherfall" by Aaron Cherof
    -   Plays in Badlands, Cherry Grove, Flower Forest, and Lush Caves Biomes
-   "Deeper" by Lena Raine
    -   Plays in Deep Dark and Dripstone Caves Biomes
-   "Eld Unknown" by Lena Raine
    -   Plays in Dripstone Caves, Grove, Jagged Peaks, and Stony Peaks Biomes
-   "Endless" by Lena Raine
    -   Plays in Dripstone Caves, Grove, Jagged Peaks, and Stony Peaks Biomes
-   "pokopoko" by Kumi Tanioka
    -   Plays in Dripstone Caves, Grove, Jagged Peaks, and Snow Slopes Biomes

The following have been added to the pool of songs which play in Overworld Biomes that do not have biome-specific music:

-   "Featherfall" by Aaron Cherof
-   "komorebi" by Kumi Tanioka
-   "Puzzlebox" by Aaron Cherof
-   "Watcher" by Aaron Cherof
-   "yakusoku" by Kumi Tanioka

### Advancements

-   Added 8 new advancements
    -   "Minecraft: Trial(s) Edition" - Step foot in a Trial Chamber
    -   "Under Lock & Key" - Unlock a Vault using a Trial Key
    -   "Revaulting" - Unlock an Ominous Vault with an Ominous Trial Key
    -   "Blowback" - Kill a Breeze with a deflected Wind Charge
        -   Challenge Advancement - rewards 40 experience
    -   "Who Needs Rockets?" - Use a Wind Charge to launch yourself upward at least 8 blocks
    -   "Crafters Crafting Crafters" - Be near a Crafter when it crafts a Crafter
    -   "Lighten Up" - Scrape a Copper Bulb with an Axe to make it brighter
    -   "Over-Overkill" - Deal 50 hearts of damage in a single hit using the Mace
        -   Challenge Advancement - rewards 50 experience

![Boats are leashed to a Fence on the dock in a Desert Village. Steve is sitting in a boat together with a Villager.](https://launchercontent.mojang.com/v2/images/t1.21leashedboats.jpg)

## Changes

-   Improved chunk loading performance
-   Doors of different materials can now form a double door
-   Witches now always drop 4-8 redstone dust on death
    -   This is to improve the viability of farms that utilize Witch Huts to obtain Redstone Dust
-   Piston sound volume and attenuation have been lowered
    -   This was done to address the long-received feedback on the old sounds being too harsh and loud, creating very noisy redstone builds
-   The panic behaviour of animals now lasts for 2 seconds after the damage is dealt, down from 5
-   Ender Pearls that are thrown through portals can now teleport players to a different dimension than the one they are currently in
-   It is now possible to ride entities such as Horses or Minecarts through portals
    -   When riding entities through portals, the delay before teleporting is not applied
-   Projectile knockback is no longer dependent on the shooters position
    -   Projectiles such as Arrows and Fireballs knock back in the direction they travel
    -   Projectiles such as Splash Potions and Fireworks knock back away from themselves
    -   Projectiles shot by a Dispenser will also knock back
-   Improved player attribute and effect handling
    -   Custom set base attributes are now kept when respawning
    -   Active effects and modifiers are kept when changing dimension or winning the game
-   Blocks frozen by Frost Walker now emit "Block Placed" vibrations (frequency 13)
-   End Crystals are now immune to fire damage
-   The Trident is now considered of Epic rarity, giving its hover text a purple color
-   Added an attestation checkbox when submitting a player report
-   The "Burning Time" reduction effect of Fire Protection and "Knockback Resistance" effect of Blast Protection now stack from wearing several pieces
-   Realms improvements
-   The Pause Menu can now include a list of links provided by server
-   Improvements to the disconnection screen
-   Updated credits
-   Removed Herobrine

![Sunny and Noor are next to a fully rebuilt Ruined Portal. The brave Sunny throws an Ender Pearl towards the lit Nether Portal. Noor is to the side holding a Leash tied to a Boat with a Sheep in it.](https://launchercontent.mojang.com/v2/images/t1.21pearlportal.jpg)

### Chunk Loading Improvements

-   When reading an already generated chunk from disk, surrounding chunks are no longer unnecessarily loaded
    -   This is also visible on the singleplayer world loading screen
-   The new system has less memory and CPU overhead

### Realms Improvements

-   Any member of a Realm can now upgrade a world
-   In the Realms main screen, all online players of a Realm are displayed
    -   When hovered, a tooltip is shown with each player's head and name
-   Updated the confirmation screens in Realms to show as popups

### Server Links

-   Servers can now provide a list of links to clients
-   If client has received any links, a new button called "Server Links..." will show up in the Pause Menu
    -   To make space for that button, the "Report Bugs" and "Give Feedback" buttons are moved into a sub-screen

### Disconnection Screen Improvements

-   In some cases client will now store detailed information about disconnection (similar to crash reports)
    -   When that happens, an "Open Disconnection Report Directory" button will be added to the disconnection screen
    -   If a server provides a link for bug reporting, it will be also be added as a button to the disconnection screen

![Sunny is riding a Minecart that leads into a Nether Portal.](https://launchercontent.mojang.com/v2/images/t1.21minecartportal.jpg)

## Technical Changes

-   Data Pack version is now 48
-   Resource Pack version is now 34
-   Removed the `update_1_21` feature flag and built-in datapack
-   Server can now provide list of links to client
-   Servers can add custom details to crash and disconnection reports
-   Report data generator now includes information about network packets
-   The game will now store reports from failed chunk loads and saves in the `debug` directory

![A swarm of Bees are leashed to a Dragon Egg Block Display Entity, flying above a Savannah. This gives the impression that the Bees have plotted to steal the Dragon Egg.](https://launchercontent.mojang.com/v2/images/t1.21techbeeswithegg.jpg)

### Server Links

-   New clientbound packet `server_links` is available in `configuration` and `game` protocols
-   On receival, the links are made available in the Pause Menu
-   Link labels can be built-in or custom (i.e. any text)
-   Some built-ins also have special functionality:
    -   `report_bug`:
        -   link will be displayed on disconnection screen, if disconnection was caused by packet handling error
        -   link will be included as a comment in disconnection report
-   Additionally, there are some generic-use link names, like "Support" or "Website", without any special functionality
-   Added `bug-report-link` to `server.properties` to allow vanilla server to configure `report_bug` links
    -   If this field is non-empty, server will send that link to clients
    -   This field should contain well-formed URL

### Custom Server Crash Report Details

-   New clientbound packet `custom_report_details` is available in the `configuration` and `game` protocols
-   This packet contains a list of key-value text entries
-   If received, contents of this packet will be added in a separate section to any crash or disconnection report generated during connection to this server

## Data Pack Versions 42 Through 48

-   Added new Music Disc items and loot table entries for the Music Discs
-   Painting variants are now data-driven
-   Jukebox songs are now data-driven
-   Enchantments are now data-driven
-   Enchantments that show up in the game are now controlled by Enchantment Providers
-   Enchantment exclusivity is now controlled through tags
-   Added new command syntax
-   Changes to predicates and loot table functions
-   Registry `decorated_pot_patterns` has been renamed to `decorated_pot_pattern`
-   Updated legacy element and tag directory names in datapacks
-   Added new configurable fields to jigsaw structures and `single_pool_element` types
-   Added new placement modifier type `fixed_placement` to place features in a set of fixed positions
-   Added new feature type `end_platform` for the obsidian platform in the end

### Painting Variants

-   Painting variants registry are now loaded from packs
-   Path to painting definition is `data/<namespace>/painting_variant/<id>.json`
-   Fields in definition:
    -   `width` - width of painting in blocks, between 1 and 16
    -   `height` - height of painting in blocks, between 1 and 16
    -   `asset_id` - id of sprite in `paintings` atlas

### Jukebox Songs

-   Added a jukebox song registry which is loaded from data packs
-   Path to jukebox song definition is `data/<namespace>/jukebox_song/<id>.json`
-   Fields in definition:
    -   `sound_event` - sound event that is streamed when played by a Jukebox
    -   `description` - the name of the song that will be displayed in the hover tooltip represented as a Text Component
    -   `length_in_seconds` - length of the song in seconds as a positive float
    -   `comparator_output` - the redstone signal output by a comparator when played in a Jukebox, between 0 and 15
-   Added `minecraft:jukebox_playable` item stack component

#### `jukebox_playable` Item Component

-   If set, the item can be inserted into Jukeboxes to play a song
-   Format: object with fields
    -   `song`: Jukebox song id
        -   The song that will be played by the Jukebox when this item stack is inserted
    -   `show_in_tooltip`: boolean (default: true)
        -   If false, the name of the song will not be shown in the tooltip
        -   This was formerly controlled by the `hide_additional_tooltip` component on Music Discs
    -   e.g. `jukebox_playable={song:'minecraft:precipice'}`, `jukebox_playable={song:'minecraft:precipice', show_in_tooltip:false}`

![Steve is playing around with a Jukebox in the center of a Village. A Nether Star can be seen on top of the Jukebox, suggesting that Steve has used custom data to vibe out to songs that he likes.](https://launchercontent.mojang.com/v2/images/t1.21techcustommusic.jpg)

### Attributes

-   Attribute Modifiers no longer have a UUID and name combination
-   Instead, Attribute Modifiers are now uniquely identified by a namespaced ID, similar to other resources
-   The ID of a modifier uniquely identifies it in the set of modifiers for a single attribute
    -   Using the same ID for different modifiers is allowed as long as the modifiers are for different attributes
-   Existing built-in modifiers will be upgraded to new IDs
-   Existing custom modifiers will be upgraded to the UUID as an ID in the `minecraft` namespace

#### `attribute` Command

-   The `uuid` and `name` arguments have been replaced with a singular `id` argument

#### Item Stack Attribute Modifiers

-   The `uuid` and `name` fields have been removed
-   Attribute Modifiers now have an `id` (namespaced ID) field
    -   This is a unique identifier per attribute for the modifier

#### Entity Attributes

-   Attributes are now stored as `attributes`
-   Attribute format:
    -   `id`, renamed from `Name`
    -   `base`, renamed from `Base`
    -   `modifiers`, renamed from `Modifiers`
        -   Now stores modifiers in the same format as modifiers in `attribute_modifiers` item stack components:
            -   `id`, replaces `UUID` and `Name`
            -   `amount`, renamed from `Amount`
            -   `operation`, renamed from `Operation`, now a named constant instead of an int:
                -   `add_value` - previously `0`
                -   `add_multiplied_base` - previously `1`
                -   `add_multiplied_total` - previously `2`

### Enchantments

![Efe, wearing Diamond Boots with a custom enchantment that spawns sparkling particles, tempts a Cat with Salmon in a snowy Village under moonlight.](https://launchercontent.mojang.com/v2/images/t1.21techcustomenchantparticles.jpg)

Enchantments are now set through data. An Enchantment is a set of core properties like level ranges and cost together with some effects. Most effect types also support a set of conditions, making it possible to apply them only when certain criteria are met.

Enchantments can be added in the registry `enchantment`. All Vanilla Enchantments can be found in the vanilla datapack in the client and server jar files.

Fields:

-   `description`: The name of the Enchantment when displayed in text represented as a Text Component
-   `exclusive_set`: The Enchantment(s) this Enchantment is mutually exclusive with
    -   Two Enchantments can never co-exist on an item if either is in the other's exclusive set
    -   Specified as an Enchantment ID, a list of Enchantment IDs or an Enchantment Tag prefixed with `#`
    -   Optional - if omitted, the exclusive set is empty
-   `supported_items`: The item types that can have this Enchantment
    -   Item ID, list of item IDs or tag prefixed with `#`
-   `primary_items`: The item types for which this Enchantment shows up in Enchanting Tables and on traded equipment
    -   Item ID, list of item IDs or tag prefixed with `#`
    -   Must be a subset of `supported_items`
-   `weight`: How commonly the Enchantment appears, compared to the total combined `weight` of all available Enchantments
    -   Positive integer, at most 1024 - higher values mean more common
-   `max_level`: The maximum level of the Enchantment
    -   All Enchantments range from level 1 to their maximum level
    -   Positive integer, at most 255
-   `min_cost`, `max_cost`: describe the range of costs for this Enchantment in the Enchanting Table (and how much it returns when disenchanted)
    -   Both min and max cost are described using a linear formula:
    -   `base`: Base cost at level 1
    -   `per_level_above_first`: Added for each level over 1
-   `anvil_cost`: The fee taken for the Enchantment in the anvil
    -   Non-negative integer
    -   This value is halved when an Enchantment is added to a Book
    -   The effective fee is multiplied by the level of the Enchantment
-   `slots`: A list of slot groups this Enchantment works in
    -   Each entry is one of `any`, `hand`, `mainhand`, `offhand`, `armor`, `feet`, `legs`, `chest`, `head` and `body`
-   `effects`: A map of effect components, as described below in the Effect Components section

#### Level-Based Values

Many effects of Enchantments depend on the level of the Enchantment. For these fields, a type called Level-Based Values is used. In their most basic form, Level-Based Values can be written as floating-point constants, which is interpreted as a value that isn't in fact level-based, the constant is used as-is for all levels.

If a Level-Based value is not a floating-point constant, it is an object with a `type` field, specifying one of the following types.

##### `linear`

The most common type of Level-Based Value is a `linear` value. A `linear` Level-Based Value has two fields:

-   `base`: The base value added to all levels
-   `per_level_above_first`: Amount added for each level above the first one

In effect, a `linear` Level-Based Value results in `base + per_level_above_first * (level - 1)`.

##### `clamped`

A Level-Based Value type that clamps a value between a min and max. Fields:

-   `value`: A Level-Based Value used as the input
-   `min`: A floating point value specifying the minimum value of the output
-   `max`: A floating point value specifying the maximum value of the output

##### `fraction`

A Level-Based Value type that represents the fraction between two values. Fields:

-   `numerator`: A Level-Based Value used as the numerator
-   `denominator`: A Level-Based Value used as the denominator

##### `levels_squared`

A Level-Based Value type that evaluates to the square of the levels, plus an addition. Fields:

-   `added`: A floating-point value added to the result of the squared levels

In effect, a `levels_squared` Level-Based Value results in `level ^ 2 + added`

##### `lookup`

A Level-Based Value type that maps a list of values to specific levels, and applies a fallback if the level is greater than the number of values supplied. Fields:

-   `values` - A list of values indexed by `level - 1` to apply, if present
-   `fallback` - A fallback Level-Based Value to apply if the level is greater than the size of `values`

#### Value Effect Types

Value Effects are effects used to manipulate the amount of _something_ in the game.

##### `add`

A Value Effect that adds a value to the processed results.

Fields:

-   `value`: A Level-Based Value determining how much to add
    -   Negative values are supported

##### `all_of`

A Value Effect that runs a number of other Value Effects, in order. This can be useful when the same set of conditions apply to a number of Value Effects.

Fields:

-   `effects`: A list of the Value Effects to run

##### `multiply`

A Value Effect that multiplies the processed value by a given factor.

Fields:

-   `factor`: A Level-Based Value determining the factor to multiply in

##### `remove_binomial`

A Value Effect that runs a Binomial series of checks, reducing the input value by 1 for every successful check.

Fields:

-   `chance`: A Level-Based Value representing the chance that an input value is dropped.
    -   The span is 0 to 1, with 0 being no chance to drop an input value and 1 dropping all input values

##### `set`

A Value Effect that overwrites the input value with a given Level-Based Value.

Fields:

-   `value`: The Level-Based Value to use as the result

#### Attribute Effects

Attribute effects use the Attribute system to apply an Attribute Modifier whenever the Enchanted Item is correctly equipped. Attribute effects do not have a dynamic type - they are all the same type.

Fields:

-   `id`: The namespaced ID of the Attribute Modifier to add
    -   This will be postfixed with the slot name when the enchanted item is equipped in a slot
    -   Must be unique to avoid different Enchantments (or other systems) interfering with each others
-   `attribute`: The ID of the attribute to modify
-   `operation`: The operation of the Attribute Modifier
    -   One of `add_value`, `add_multiplied_base` and `add_multiplied_total`
-   `amount`: A Level-Based Value describing the amount

#### Entity Effect Types

Entity Effects are Enchantment effects that generally do something to an Entity involved in an event. Which entity is affected depends on the specific component being configured.

##### `all_of`

An Entity Effect that runs a list of other Entity Effects. This can be useful when a set of conditions should apply to more than one Entity Effect.

Fields:

-   `effects`: List of Entity Effects to run

##### `apply_mob_effect`

An Entity Effect that applies a random Mob Effect to the affected entity, chosen from a set of options. The duration and amplifier are randomized within a given span. The effect of specifying larger maximum values than the minimum value is undefined.

Fields:

-   `to_apply`: Options for the Effect to apply
    -   One of an Effect ID, a list of Effect IDs or an Effect Tag prefixed by `#`
-   `min_duration`, `max_duration`: Level-Based Values representing the minimum and maximum duration of the effect in seconds
-   `min_amplifier`, `max_amplifier`: Level-Based Values representing the minimum and maximum amplifier

##### `damage_entity`

An Entity Effect that applies damage to the affected entity. The amount of damage is randomized within a given span. The effect of specifying a larger maximum value than the minimum value is undefined.

Fields:

-   `damage_type`: The ID of the Damage Type to use
-   `min_damage`, `max_damage`: Level-Based Values representing the minimum and maximum amount of damage

##### `damage_item`

An Entity Effect that applies damage to the Enchanted Item. The damage is not applied to items held by players in creative mode.

Fields:

-   `amount`: A Level-Based Value determining the amount of damage to apply

##### `explode`

An Entity Effect that causes an explosion.

Fields:

-   `attribute_to_user`: A boolean deciding whether the explosion should be attributed to the user of the enchanted tool
-   `damage_type`: Optional damage type of the explosion - if omitted, no damage is dealt by the explosion
-   `immune_blocks`: Optional Block, list of Blocks or hash-prefixed Block Tag specifying which blocks fully block the explosion
-   `knockback_multiplier`: A Level-Based Value deciding the knockback multiplier caused by the explosion - if omitted, the default explosion knockback is applied
-   `offset`: A position offset for where the explosion is spawned
    -   Format: list of 3 integers representing X, Y and Z offset
    -   Optional, if omitted \[0, 0, 0\] is used
-   `radius`: A Level-Based Value representing the radius of the explosion
-   `create_fire`: A boolean for whether the explosion causes fire to be placed or not
-   `block_interaction`: How the explosion interacts with blocks. One of:
    -   `none`: No effect
    -   `block`: Act as if a block caused the explosion - the `blockExplosionDropDecay` game rule applies to drops
    -   `mob`: Act as if a mob caused the explosion - the `mobExplosionDropDecay` game rule applies to drops
    -   `tnt`: Act as if TNT caused the explosion - the `tntExplosionDropDecay` game rule applies to drops
    -   `trigger`: Trigger redstone-activated blocks
-   `small_particle`: The small particle emitted by the explosion
-   `large_particle`: The large particle emitted by the explosion
-   `sound`: The sound event caused by the explosion

##### `ignite`

An Entity Effect that ignites the affected entity for a given number of seconds.

Fields:

-   `duration`: A Level-Based Value specifying the number of seconds the fire should last

##### `play_sound`

An Entity Effect that plays a sound.

Fields:

-   `sound`: A Sound Event ID for the sound to play
-   `volume`: A Float Provider between `0.00001` and `10.0` specifying the volume of the sound
-   `pitch`: A Float Provider between `0.00001` and `2.0` specifying the pitch of the sound

##### `replace_block`

An Entity Effect that replaces a block in the world.

Fields:

-   `block_state`: A block state provider giving the block state to set
-   `offset`: A positional offset from the position of the event to where to place the block
    -   Format: list of 3 integers representing X, Y and Z offset
    -   Optional, if omitted \[0, 0, 0\] is used
-   `predicate`: A World-generation style Block Predicate to used to determine if the block should be replaced
    -   Optional, if omitted all block types are replaced
-   `trigger_game_event`: Optional Game Event ID for a game event to trigger when a block has been replaced

##### `replace_disk`

An Entity Effect that replaces blocks in a disk / cylinder in the world.

Fields:

-   `block_state`: A block state provider giving the block state to set
-   `radius`: A Level-Based Value describing the radius of the cylinder
-   `height`: A Level-Based Value describing the height of the cylinder
-   `offset`: A positional offset from the position of the event to the center of the cylinder
    -   Format: list of 3 integers representing X, Y and Z offset
    -   Optional, if omitted \[0, 0, 0\] is used
-   `predicate`: A World-generation style Block Predicate to used to determine if the block should be replaced
    -   Optional, if omitted all block types are replaced
-   `trigger_game_event`: Optional Game Event ID for a game event to trigger when a block has been replaced

##### `run_function`

An Entity Effect that runs a Command Function. The execution entity the effect is executing for is represented as `@s` and `~ ~ ~` is the position of the event, rotated in the direction of the affected entity.

Fields:

-   `function`: Namespaced ID of the Command Function to run

##### `set_block_properties`

An Entity Effect that sets properties on a block

Fields:

-   `properties`: map of property key to property value (same format as a `minecraft:block_state` item component)
-   `offset`: A positional offset from the position of the event to the center of the cylinder
    -   Format: list of 3 integers representing X, Y and Z offset
    -   Optional, if omitted \[0, 0, 0\] is used
-   `trigger_game_event`: Optional Game Event ID for a game event to trigger when a block has been changed

##### `spawn_particles`

An Entity Effect that spawns particles around the affected entity.

Fields:

-   `particle`: A particle type definition
-   `horizontal_position`, `vertical_position`: Decides where the particle spawns horizontally and vertically. Objects with fields:
    -   `type`: Specifies the position selection type. One of:
        -   `"entity_position"`: Spawn particles based on the entity position
        -   `"in_bounding_box"`: Spawn particles based on randomized positions inside the bounding box of the entity
    -   `offset`: A floating point value specifying an offset to the position source
        -   Optional, interpreted as `0` if omitted
    -   `scale`: A floating point value specifying a scaling factor
        -   Only available if type is `"in_bounding_box"`
        -   Optional, interpreted as `1` if omitted
-   `horizontal_velocity`, `vertical_velocity`: Decides the initial velocity of the spawned particle. Object with fields:
    -   `base`: A Float Provider giving the base speed along the given axis
        -   Optional, interpreted as `0` if omitted
    -   `movement_scale`: A floating point scale factor applied to the entity speed along the given axis
        -   Optional, interpreted as `0` if omitted
        -   Example: a `movement_scale` of `1` adds the velocity of the entity to the spawned particles

##### `summon_entity`

An Entity Effect that summons a new entity, randomly chosen from a set of Entity Types, at the site of the event.

Fields:

-   `entity`: The options for the Entity Type to summon
    -   Either an Entity Type ID, a list of Entity Type IDs or an Entity Type Tag prefixed with `#`
-   `join_team`: Boolean that specifies whether the summoned entity should join the team of the owner of the Enchanted Item

#### Location-Based Effect Types

Location-Based Effects are special effects that activate and deactivate depending on where the owner of the Enchanted Item moves. Location-Based Effect only trigger when such items are initially equipped and subsequently when the owning entity moves to a new space in the Block grid - i.e. when their coordinates change to a new integer value.

All Entity Effect types can also be used as Location-Based Effects, and in addition `attribute` can be used to specify an Attribute Effect as a location-based effect.

#### Effect Conditions

Most Enchantment effects are filtered using Conditions (same types as in loot tables). This enables effects to be specific for different situations. Each Effect Component defines which parameters are available for the condition to evaluate - some parameters are available for all of these parameter sets, while some are specific to a certain set.

Unlike with loot tables, all effect conditions need to be inline objects and cannot be references.

Each effect component specifies which parameters are available in the Effect Components list below.

##### Damage Parameters

-   Entities: `this`, `attacker`, `direct_attacker`
-   Enchantment Level
-   Origin
-   Damage Source

##### Item Parameters

-   Tool
-   Enchantment Level

##### Location Parameters

-   Entities: `this`
-   Enchantment Level
-   Origin
-   Enchantment Active status

##### Entity Parameters

-   Entities: `this`
-   Enchantment Level
-   Origin

##### Hit Block Parameters

-   Entities: `this`
-   Enchantment Level
-   Origin
-   Block State

#### Effect Components

The `effects` field in an Enchantment is a map of Effect Component type the Effect List data. Most Effect Components are lists, so any number of Effects can be added of any Component Type. The data for each effect generally involves having a specified condition context and Effect Type, but some Effects also deviate from this format.

In cases where the documentation specifies a Condition Context and Effect, the Component is a list. Each entry in the list has a field named `effect` with the effect of the type used by the list. Entries can also optionally include a field named `requirements` specifying the condition parameters, which are then evaluated with the documented context.

-   `minecraft:armor_effectiveness`: Effects for changing the armor effectiveness of the target of an attack
    -   Condition Context: Damage Parameters
    -   Effect: Value Effect on the armor effectiveness: 0 for completely ineffective, 1 for fully effective
-   `minecraft:attributes`: Unfiltered list of Attribute Effects
-   `minecraft:ammo_use`: Effects for ammunition being used when drawing a projectile weapon (firing a Bow or loading a Crossbow)
    -   Condition Context: Item Parameters - Tool is the ammunition item
    -   Effect: Value Effect on the amount of ammunition being used up
-   `minecraft:block_experience`: Effects for the amount of experience that drops when mining a block with the Enchanted Item
    -   Condition Context: Item Parameters - Tool is the mining tool used
    -   Effect: Value Effect on the amount of experience awarded
-   `minecraft:crossbow_charge_sounds`: Effect for changing the charging sounds of a Crossbow
    -   Note: Only one of these effects can ever be active - the highest level is picked
    -   Format: A list of Crossbow sound banks:
        -   `start`: Optional sound event id for the start of charging
        -   `mid`: Optional sound event id for the middle of charging
        -   `end`: Optional sound event id for the end of charging
    -   Each entry in the list represents the sounds at one level of the Enchantment, so the first entry represents the sounds used by a level 1 Enchantment
-   `minecraft:crossbow_charge_time`: Effects for the charging time of a Crossbow
    -   Format: A single Value Effect on the charge time of the Crossbow in seconds - unconditional
-   `minecraft:damage`: Effects for the amount of damage caused by an attack
    -   Condition Context: Damage Parameters
    -   Effect: Value Effect on the amount of damage
-   `minecraft:damage_immunity`: Effects for complete damage immunity
    -   Condition Context: Damage Parameters
    -   Effect: Not specified - any matching entry causes damage immunity
-   `minecraft:damage_protection`: Effects for damage protection
    -   Condition Context: Damage Parameters
    -   Effect: Value Effect on the amount of damage protection
    -   Note that this adds damage protection ("magical armor") rather than processing the damage itself
-   `minecraft:equipment_drops`: Effects for the chance of equipment dropping when a target is killed by the owner of the Enchanted Item
    -   Condition Context: Damage Parameters
    -   Effect: Value Effect on the chance between `0` and `1` of an equipped piece dropping
    -   Also has one other field:
        -   `enchanted`: A specifier for who needs to be enchanted for the effect to apply
        -   Possible values are `attacker` and `victim`
-   `minecraft:fishing_luck_bonus`: Effects for the amount of luck given to a player fishing
    -   Condition Context: Entity Parameters - `this` is the player fishing
    -   Effect: Value Effect on the amount of luck
    -   Note: The total amount of luck (in integer form) is applied as a luck effect to the fishing loot table
-   `minecraft:fishing_time_reduction`: Effects for reducing the time until a fish bites when fishing
    -   Condition Context: Entity Parameters - `this` is the player fishing
    -   Effect: Value Effect on the amount of time saved in seconds
    -   Note: Higher values here mean less time until a fish bites
-   `minecraft:hit_block`: Effects applying after a weapon or tool hits a Block
    -   Condition Context: Hit Block Parameters - `this` is the entity hitting the Block
    -   Effect: Entity Effect on the entity hitting the Block
    -   Note: In the case of a projectile attack, `this` is the projectile
-   `minecraft:knockback`: Effects for the amount of knockback caused by an attack
    -   Condition Context: Damage Parameters
    -   Effect: Value Effect on the amount of knockback caused by the attack
-   `minecraft:item_damage`: Effects for the amount of durability lost when an item is damaged
    -   Condition Context: Item Parameters - Tool is the damaged item
    -   Effect: Value Effect on the amount of damage to the item
-   `minecraft:location_changed`: Effects that take effect when an entity crosses into a new block position
    -   Condition Context: Location Parameters
    -   Effect: Location Based Effect
-   `minecraft:mob_experience`: Effects for the amount of experience that drops when killing a mob with the Enchanted Item
    -   Condition Context: Entity Parameters - `this` is the killed Mob
    -   Effect: Value Effect on the amount of experience awarded
-   `minecraft:post_attack`: Effects applying after an attack damages a target
    -   Condition Context: Damage Parameters
    -   Effect: Entity Effect
    -   Also has two other fields:
        -   `enchanted`: A specifier for who needs to be enchanted for the effect to apply
        -   `affected`: A specifier for whom the effect is applied to
    -   Possible values for both fields are `attacker`, `damaging_entity` and `victim`
    -   Example, a Fire Aspect Enchant would specify that when the `attacker` is `enchanted`, the `ignite` effect is applied, and the `affected` party is the `victim`
    -   Another example: Thorns would specify that when the `victim` is `enchanted`, the `damage_entity` effect is applied, and the `affected` party is the `attacker`
-   `minecraft:prevent_armor_change`: Effect for preventing the enchanted item from being unequipped from an armor slot
    -   Format: Empty object
-   `minecraft:prevent_equipment_drop`: Effect for preventing the enchanted item from being dropped on owner death
    -   Format: Empty object
-   `minecraft:projectile_count`: Effects for the amount of projectiles drawn when using a projectile weapon
    -   Condition Context: Entity Parameters - `this` is the entity drawing the weapon
    -   Effect: Value Effect on the number of projectiles drawn
-   `minecraft:projectile_piercing`: Effects for the piercing count of projectiles fired from a projectile weapon, i.e. the number of targets it can hit
    -   Condition Context: Item Parameters - Tool is the ammunition item
    -   Effect: Value Effect on the pierce count of the fired projectile
-   `minecraft:projectile_spread`: Effects for the spread of arrows from a projectile weapon firing multiple projectiles
    -   Condition Context: Entity Parameters - `this` is the entity using the Weapon
    -   Effect: Value effect on the maximum spread of projectiles measured in degrees from the aim line
-   `minecraft:projectile_spawned`: Effects applying after a projectile entity has been spawned when firing a projectile weapon
    -   Condition Context: Entity Parameters - `this` is the projectile entity
    -   Effect: Entity Effect on the projectile entity
-   `minecraft:repair_with_xp`: Effect for repairing the item with xp when picked up by the player - any effect present triggers the function
    -   Condition Context: Item Parameters - `tool` is the item being repaired
    -   Effect: Value Effect converting the amount of XP to the amount of durability to repair
-   `minecraft:smash_damage_per_block_fallen`: Effects for the amount of damage caused by a Mace's smash attack
    -   Condition Context: Damage Parameters
    -   Effect: Value Effect on the amount of damage
-   `minecraft:tick`: Effects that apply every tick for correctly equipped Enchanted Items
    -   Condition Context: Entity Parameters - `this` is the owner of the Enchanted Item
    -   Effect: Entity Effect on the owner of the Enchanted Item
-   `minecraft:trident_return_acceleration`: Effects for the special acceleration value of a Trident that returns it to its owner
    -   Condition Context: Entity Parameters - `this` the Trident Entity
    -   Effect: Value Effect on the acceleration value
-   `minecraft:trident_spin_attack_strength`: Effects for the strength of a Trident used as a spin attack
    -   Format: A single Value Effect on the strength - unconditional
    -   Any resulting value greater than 0 converts the Trident to be a spin attack weapon instead of a thrown attack
-   `minecraft:trident_sound`: Effect for changing the charging sounds of a Trident attack
    -   Note: Only one of these effects can ever be active - the highest level is picked
    -   Format: A list of sound events
    -   Each entry in the list represents the sound at one level of the Enchantment, so the first entry represents the sound used by a level 1 Enchantment

![Noor, basking in the sunset, fires a Crossbow with a custom enchantment that allows for multiple Firework Rockets to be fired simultaneously.](https://launchercontent.mojang.com/v2/images/t1.21techcustommultishotfireworks.jpg)

### Enchantment Providers

Enchantment Providers are new ways for the game to source Enchantments to use in various situations where Enchantments show up.

#### Spawn Equipment Enchantment Providers

-   `mob_spawn_equipment`: Enchantment Provider for mobs that spawn with randomly Enchanted equipment
-   `pillager_spawn_crossbow`: Enchantment Provider for Pillagers that spawn with Enchanted Crossbows
-   `raid/pillager_post_wave_3`: Enchantment Provider that is applied as a buff on the Crossbow of Pillagers spawning as waves 4 and 5
-   `raid/pillager_post_wave_5`: Enchantment Provider that is applied as a buff on the Crossbow of Pillagers spawning as waves above 5
-   `raid/vindicator`: Enchantment Provider that is applied as a buff on the Axe of a Vindicator spawning as wave 1-5
-   `raid/vindicator_post_wave_5`: Enchantment Provider that is applied as a buff on the Axe of a Vindicator spawning as waves above 5

#### Enderman Loot Enchantment Provider

-   `enderman_loot_drop`: Enchantment Provider that is used for the "fake tool" applied to the carried block of a killed Enderman

#### Villager Trade Rebalance Enchantment Providers

All Equipment-specific Enchantments in Villager trades in the Villager Trade Rebalance experiment are now sourced from Enchantment Providers.

These Enchantment Providers are only used when the Villager Trade Rebalance experiment is enabled and all have the following pattern:

`trades/<biome>_<profession>_<equipment>_<level>`

For example: `trades/desert_armorer_helmet_4` and `trades/taiga_armorer_chestplate_5`.

#### Enchantment Provider Types

##### `single_enchantment`

An Enchantment Provider which always provides the same Enchantment. The level of the Enchantment can be either constant or randomized.

Fields:

-   `enchantment`: Namespaced ID of the Enchantment
-   `level`: Int provider representing the level of the Enchantment

##### `enchantments_by_cost`

An Enchantment Provider which gives one or more Enchantments from a set of options according to a given cost (similar to the cost value in the Enchantment Table).

Fields:

-   `enchantments`: The set of Enchantments as either a single Enchantment, a list of Enchantments or hash-prefixed Enchantment Tag
-   `cost`: Int provider representing the cost to use for the Enchanting process

##### `enchantments_by_cost_with_difficulty`

An Enchantment Provider which works like `enchantments_by_cost`, but where the cost is calculated partially based on the local difficulty of the area where the event happens causing the Enchantments to be added.

The used cost is a minimum cost plus a uniformly randomized factor up to a base cost span multiplied with the special factor, which starts at `0` for local difficulty up to `2`, increases linearly up to `1` for local difficulty `4` and stays at a constant value of `1` for any difficulty above that.

Fields:

-   `enchantments`: The set of Enchantments as either a single Enchantment, a list of Enchantments or hash-prefixed Enchantment Tag
-   `min_cost`: Positive integer representing the minimum possible cost
-   `max_cost_span`: Non-negative integer representing the span of the cost randomization when the special factor is at its maximum

### Damage Types

-   New damage type: `campfire`, split from `in_fire`

### Tags

#### Directory renames

-   Some registry types that used legacy datapack directory names (based on plural name of element) have been renamed to match registry name
-   Affected directories:
    -   `structures` -> `structure`
    -   `advancements` -> `advancement`
    -   `recipes` -> `recipe`
    -   `loot_tables` -> `loot_table`
    -   `predicates` -> `predicate`
    -   `item_modifiers` -> `item_modifier`
    -   `functions` -> `function`
    -   `tags/functions` -> `tags/function`
    -   `tags/items` -> `tags/item`
    -   `tags/blocks` -> `tags/block`
    -   `tags/entity_types` -> `tags/entity_type`
    -   `tags/fluids` -> `tags/fluid`
    -   `tags/game_events` -> `tags/game_event`

#### Item Tags

-   Removed `music_discs` item tag

#### Block Tags

-   `air`: All blocks that resemble air

#### Enchantment Tags

##### Enchantment Functionality Tags

-   `curse`: Enchantments that get listed in red in tooltips and cannot be removed by disenchanting
-   `prevents_bee_spawns_when_mining`: Enchantments that allow a tool to mine Bee Nests and Beehives with the Bees still inside
-   `prevents_decorated_pot_shattering`: Enchantments that make a tool not shatter Decorated Pots
-   `prevents_ice_melting`: Enchantments that cause a tool to not break Ice into Water
-   `prevents_infested_spawns`: Enchantments that allow a tool to break Infested blocks without causing the mob inside to spawn
-   `smelts_loot`: Enchantments that cause loot drops to be smelted

##### Enchantment Availability Tags

-   `tradeable`: Enchantments that show up on Books in Villager trades
-   `on_traded_equipment`: Enchantments that show up on enchanted equipment in Villager trades
-   `double_trade_price`: Enchantments that double the Emerald cost when traded
-   `in_enchanting_table`: Enchantments that can show up in the Enchanting Table
-   `on_mob_spawn_equipment`: Enchantments that can show up on equipment worn by randomly spawned mobs
-   `on_random_loot`: Enchantments that can show up in Chests found in the world

##### Enchantment Exclusivity Tags

New tags used by the Vanilla Enchantments to control which ones are mutually exclusive, all of which are found under the `exclusive_set/` path.

-   `armor`: Enchantments that cannot co-exist on Armor pieces
-   `boots`: Enchantments that cannot co-exist on Boots
-   `bow`: Enchantments that cannot co-exist on Bows
-   `crossbow`: Enchantments that cannot co-exist on Crossbows
-   `damage`: Damage-increasing Enchantments that cannot co-exist
-   `mining`: Mining-related Enchantments that cannot co-exist
-   `riptide`: Enchantments that cannot co-exist with Riptide

##### Trade Rebalance Enchantment Tags

In the experimental `trade_rebalance` pack, each biome type has two tags:

-   `trades/<biome>_common`: Contains Enchantments traded on the lower profession levels
-   `trades/<biome>_special`: Contains Enchantments traded on the highest profession level

#### Damage Type Tags

-   Removed `breeze_immune_to` Damage type tag
-   Added `burn_from_stepping`: Damage types that represent burning damage from stepping on something - in particular, damage types countered by the `frost_walker` Enchantment
-   Added `panic_environmental_causes`: Damage types that cause panic in aggressive animals that can panic, i.e. mobs that retaliate when attacked
-   Added `panic_causes`: Damage types that cause panic in passive animals, i.e. mobs that run away when attacked

### Loot Tables

#### Conditions

##### Targets

Some target entity names have been renamed to fit in a more generic context:

-   `killer` is now called `attacker`
-   `direct_killer` is now called `direct_attacker`
-   `killer_player` is now called `attacking_player`

##### `enchantment_active_check`

New condition, requires the "Enchantment Active" parameter to exist in the context, which currently means it only works in Enchantment conditions.

Fields:

-   `active`: boolean determining whether the check should match for an active (`true`) or inactive (`false`)

##### `random_chance`

-   The `chance` field is now a Number Provider

##### `random_chance_with_enchanted_bonus`

Renamed from `random_chance_with_looting`. Field changes:

-   `looting_multiplier`: field has been removed
-   `chance`: field has been removed
-   `unenchanted_chance`: new field for the chance for an unenchanted item
-   `enchanted_chance`: new field for the chance for an enchanted item - a Level-Based Value
-   `enchantment`: new field containing the namespaced ID of the Enchantment which grants the bonus chance

#### Functions

##### `enchanted_count_increase`

Renamed from `looting_enchant`. Now has a new field:

-   `enchantment`: Namespaced ID of the Enchantment that increases yields

##### `enchant_randomly`

-   Changed format - the `enchantments` field is now called `options`
-   `options` is now specified as one of an Enchantment, a list of Enchantments or an Enchantment Tag (prefixed with `#`)
-   `only_compatible`: New optional boolean field - if `true`, only allows Enchantments that are compatible with the item
    -   If omitted, defaults to `true`
    -   Note: Books are considered compatible with all Enchantments

#### `enchant_with_levels`

-   The `treasure` field has been removed
-   Changed format - `options` is now specified as one of an Enchantment, a list of Enchantments or an Enchantment Tag (prefixed with `#`)

#### `copy_name`

-   Some of the possible values for the `source` field have changed:
    -   `killer` renamed to `attacking_entity`
    -   `killer_player` renamed to `last_damage_player`

#### Number Providers

##### `enchantment_level`

A new number provider that sources values from the Enchantment Level parameter.

Fields:

-   `amount`: A Level-Based Value giving a value based on the level of the Enchantment

### Predicates

#### Damage Type Predicate

-   New option: `is_direct` - optional boolean
    -   When present, requires the damage to be direct (`true`) or indirect (`false`)
    -   Damage is direct when its direct and source entities are the same

#### Enchantment Predicate

-   The `enchantment` field has been removed
-   Added an `enchantments` field, one of an Enchantment, a list of Enchantments or an Enchantment Tag (prefixed with `#`)
    -   If multiple Enchantments are specified through a list or a tag, the Predicate matches if any Enchantment matches
-   If no `enchantments` field is specified, any enchantment matching `levels` will succeed the test
    -   If neither the `levels` nor `enchantments` fields are defined, the predicate will match an item that has any enchantment

#### Jukebox Playable Predicate

New item sub-predicate available as `jukebox_playable`.

-   Matcher for `jukebox_playable` component (like Music Discs)
-   Fields:
    -   `song` - optional id, list of ids or tag for jukebox song to be matched

#### Entity Predicate

-   New sub-predicate type Movement Predicate available as `movement`
-   New sub-predicate type Periodic Ticks Predicate available as `periodic_tick`
-   New option: `movement_affected_by` - optional Location Predicate
    -   When present, adds requirements on a block at most 0.5 blocks below the entity which can affect its movement

#### Player Predicate

-   The `gamemode` field has been changed to accept a list of game modes

#### Entity Flags Predicate

New possible fields:

-   `is_on_ground`: Optional boolean - if provided, matches the "on ground" state of the entity
-   `is_flying`: Optional boolean - if provided, matches whether the entity is flying, including:
    -   Gliding with Elytra
    -   Flying in Creative Mode

#### Location Predicate

New possible field:

-   `can_see_sky`: Optional boolean - if provided, matches exactly when the location has the maximum possible level of sky light

#### Movement Predicate

New predicate type. Possible fields:

-   `x`, `y`, `z`: `min`/`max` limits for movement speed along a certain axis in blocks / second
-   `speed`: `min`/`max` limits for overall movement speed in blocks / second
-   `horizontal_speed`: `min`/`max` limits for the horizontal speed component of the entity's movement in blocks / second
-   `vertical_speed`: `min`/`max` limits for the vertical speed component of the entity's movement in blocks / second
-   `fall_distance`: `min`/`max` limits for the fall distance of the entity in blocks

#### Periodic Ticks Predicate

New Entity sub-predicate available as `periodic_tick` in Entity Predicates. Format: a positive integer.

This sub-predicate is true every _n_ ticks of an entity's lifetime.

### Attributes

#### `generic.attack_knockback`

Now also works on Players.

#### `generic.burning_time`

A factor to how long an entity remains on fire after being ignited. A factor of `0` removes the entire burn time, a factor of `1` lets the entity burn the default fire time - larger values increase the amount of time the entity remains on fire.

-   Default: `1`
-   Minimum: `0`
-   Maximum: `1024`

#### `generic.explosion_knockback_resistance`

A factor to how much knockback an entity takes from an Explosion. A factor of `1` removes the entire knockback, a factor of `0` means no knockback reduction.

-   Default: `0`
-   Minimum: `0`
-   Maximum: `1`

#### `player.mining_efficiency`

Mining speed factor added to the speed of mining when using a tool that efficiently mines a block.

-   Default: `0`
-   Minimum: `0`
-   Maximum: `1024`

#### `generic.movement_efficiency`

How efficiently the entity can move through impeding terrain that slows down movement. A factor of `1` removes all movement penalty, a factor of `0` applies full movement penalty.

-   Default: `0`
-   Minimum: `0`
-   Maximum: `1`

#### `generic.oxygen_bonus`

Factor to the chance an Entity has to not use up air when underwater. `0` has no effect, values over `0` are used in the following formula to determine the chance of using up air:

`1 / (oxygen_bonus + 1)`

-   Default: `0`
-   Minimum: `0`
-   Maximum: `1024`

#### `player.sneaking_speed`

The movement speed factor when sneaking. A factor of `1` means sneaking is as fast as walking, a factor of `0` means unable to move while sneaking.

-   Default: `0.3`
-   Minimum: `0`
-   Maximum: `1`

#### `player.submerged_mining_speed`

The mining speed factor when submerged. A factor of `1` means mining as fast submerged as on land, a factor of `0` means unable to mine while submerged. Note that this represents only the submersion factor itself, and other factors (such as not touching the ground) also apply.

-   Default: `0.2`
-   Minimum: `0`
-   Maximum: `20`

#### `player.sweeping_damage_ratio`

How much of the base attack damage that gets transferred transfer to secondary targets in a sweep attack. This is additive to the base attack of the sweep damage itself of `1`. A value of `0` means none of the base attack damage is transferred (sweep damage is `1`). A value of `1` means all of the base attack damage is transferred (sweep damage is `attack_damage + 1`)

-   Default: `0`
-   Minimum: `0`
-   Maximum: `1`

#### `generic.water_movement_efficiency`

The movement speed factor when submerged. The higher, the more of the underwater movement penalty is mitigated. Note that this represents only the submersion factor itself, and other factors (such as not touching the ground) also apply.

-   Default: `0`
-   Minimum: `0`
-   Maximum: `1`

### Block Predicates (World Generation Style)

#### `unobstructed`

New block predicate type that passes if the selected block is unobstructed (no entities are in the space of the block).

Fields:

-   `offset`: List of 3 int offset coordinates, specifying the offset from the origin position to test
    -   Optional, defaults to `[0, 0, 0]` if unspecified

### Entity Data

#### Projectiles

-   Arrow-like projectile data now contains a `weapon` field containing an Item Stack representing the weapon the projectile was fired from
-   The `ShotFromCrossbow` field has been removed
-   Removed `power` NBT tag and replaced it with `acceleration_power` tag with a number value that control the projectiles acceleration (and maximum speed)
    -   This change affects the following projectiles; `dragon_fireball`, `large_fireball`, `small_fireball`, `fireball`, `breeze_wind_charge`, `wind_charge`, `wither_skull`

### Item Components

-   The `custom_data` component can now be specified as an SNBT string to preserve type information in JSON
    -   This is the same as is used in the `set_custom_data` loot function and `custom_data` predicate
-   The `food` item component has a new field:
    -   `using_converts_to`: item with components (optional)
        -   Once consumed, the food item will be replaced with the specified item
        -   e.g. `food={nutrition:1,saturation:0,using_converts_to:{id:"poisonous_potato",components:{"minecraft:custom_name":'"Wait what?"'}}}`

### Structures

-   Added `dimension_padding` field to structures of type `minecraft:jigsaw`, which ensures that a structure is not generating through the edges of a dimension by adding vertical padding to its bounding box
    -   Can be written as an object with two fields:
        -   `bottom` the vertical padding at the bottom of the dimension, non-negative integer
        -   `top` the vertical padding at the top of the dimension, non-negative integer
        -   e.g. `dimension_padding: { bottom: 10, top: 5 }`
    -   Can be written as a single non-negative integer instead to be applied to both top and bottom fields
        -   e.g. `dimension_padding: 10`
-   Added `liquid_settings` field to structures of type `minecraft:jigsaw`. Possible values:
    -   `apply_waterlogging`: If any waterloggable block overlaps with existing water, it will become waterlogged
    -   `ignore_waterlogging`: If any waterloggable block overlaps with existing water, it will not become waterlogged
    -   Default value is `apply_waterlogging`
-   Added optional field `override_liquid_settings` to `single_pool_element` element type
    -   Has the same possible values as the `liquid_settings` in jigsaw structures
    -   If provided, it overrides the inherited liquid settings from the parent jigsaw structure while generating this pool element

### Commands

-   The item argument in the `/give`, `/item`, and `/loot` commands now supports removal of default components with `!` prefix
    -   e.g. `/give @s diamond_pickaxe[!tool]` will give a Diamond Pickaxe without the `tool` component
-   Added `@n` entity selector, selecting the nearest entity
    -   This functions as `@e[sort=nearest,limit=1]`
    -   Additional requirements may still be provided; for example: `@n[type=pig]` will select the closest Pig

## Resource Pack Versions 33 Through 34

-   Added new textures and music assets for Music Discs
-   Renamed sound events for Ominous Trial Spawner becoming active and ambient sound
-   Added the `block.vault.reject_rewarded_player` sound event
-   Changes to Shaders

### Shaders

-   The `blend` block in core shader definitions has been removed, as it was not used
-   The `position_color_tex` shader has been removed, replaced with the pre-existing `position_tex_color`
-   The `glint_direct` shader has been removed, replaced with the pre-existing `glint` shader
-   The `armor_glint` shader has been removed, as it was unused

## Fixed bugs in 1.21

-   [MC-67](https://bugs.mojang.com/browse/MC-67) Entities with passengers cannot travel through portals
-   [MC-902](https://bugs.mojang.com/browse/MC-902) The end obsidian platform resets every time entities go through the end portal, which can cause blocks to be deleted
-   [MC-6431](https://bugs.mojang.com/browse/MC-6431) Status effects are lost when returning to the overworld from the exit end portal
-   [MC-8983](https://bugs.mojang.com/browse/MC-8983) Primed TNT cannot travel through nether portals
-   [MC-9568](https://bugs.mojang.com/browse/MC-9568) Mobs suffocate / go through blocks when growing up near a solid block
-   [MC-9644](https://bugs.mojang.com/browse/MC-9644) Launched falling\_block entities do not travel through portals
-   [MC-14923](https://bugs.mojang.com/browse/MC-14923) Players can be kicked for spamming in a singleplayer world with cheats disabled
-   [MC-16345](https://bugs.mojang.com/browse/MC-16345) Reducing the player's base max health using /attribute does not always reduce their current health
-   [MC-26304](https://bugs.mojang.com/browse/MC-26304) Brewing stands reset brew cycle when unloaded
-   [MC-31819](https://bugs.mojang.com/browse/MC-31819) Hunger saturation depletes on peaceful difficulty
-   [MC-44280](https://bugs.mojang.com/browse/MC-44280) Entities don't receive knockback from projectiles fired from dispensers
-   [MC-50612](https://bugs.mojang.com/browse/MC-50612) Command blocks do not update when you place them near any source of power
-   [MC-59626](https://bugs.mojang.com/browse/MC-59626) Arrows lose their Punch enchantment property when unloaded
-   [MC-76104](https://bugs.mojang.com/browse/MC-76104) Guardians are unaffected by Thorns enchantment
-   [MC-78473](https://bugs.mojang.com/browse/MC-78473) Mobs don't panic when hit with a summoned or dispensed potion of harming
-   [MC-83590](https://bugs.mojang.com/browse/MC-83590) Armor attributes list can be too long
-   [MC-93669](https://bugs.mojang.com/browse/MC-93669) The sweeping attack doesn't ignite other mobs when using the fire aspect enchantment
-   [MC-93833](https://bugs.mojang.com/browse/MC-93833) Only if Health is provided maxHealth attribute is used as maximum Health value
-   [MC-96198](https://bugs.mojang.com/browse/MC-96198) Boats / rafts move into blocks when landing in less than one block deep water
-   [MC-97087](https://bugs.mojang.com/browse/MC-97087) Attributes won't work in main hand if they were in offhand
-   [MC-99411](https://bugs.mojang.com/browse/MC-99411) Frost Walker ice only semi-affected by randomTickSpeed gamerule
-   [MC-101170](https://bugs.mojang.com/browse/MC-101170) Portal sound doesn't get played when returning from End
-   [MC-110815](https://bugs.mojang.com/browse/MC-110815) Slimes are summoned with the wrong amount of health
-   [MC-114566](https://bugs.mojang.com/browse/MC-114566) Can't teleport back to the central island with End Gateway Portal on outer End islands
-   [MC-116279](https://bugs.mojang.com/browse/MC-116279) Non-player entities going through Nether portal do not generate portal in Nether if none exists
-   [MC-116643](https://bugs.mojang.com/browse/MC-116643) Silk Touch cannot be combined with Looting or Luck of the Sea
-   [MC-117361](https://bugs.mojang.com/browse/MC-117361) Mob type specific damage enchantment (Smite, Bane of Arthropods) affects all nearby entities when hitting affected mob with Sweeping Edge
-   [MC-124177](https://bugs.mojang.com/browse/MC-124177) Teleporting to another dimension loses some client states
-   [MC-131637](https://bugs.mojang.com/browse/MC-131637) The slowness effect is applied to entities when the bane of arthropods enchantment is held in the off hand
-   [MC-136147](https://bugs.mojang.com/browse/MC-136147) Riptide tridents use mainhand item to inflict damage when thrown in the offhand
-   [MC-137018](https://bugs.mojang.com/browse/MC-137018) Killing rabbits with Looting and Fire Aspect only drops cooked rabbit sometimes
-   [MC-137719](https://bugs.mojang.com/browse/MC-137719) The player's horizontal motion doesn't affect fired projectiles in certain situations
-   [MC-148741](https://bugs.mojang.com/browse/MC-148741) Selection boxes in some screens are misaligned in comparison with their text
-   [MC-151648](https://bugs.mojang.com/browse/MC-151648) Non-player entities cannot travel through unlinked nether portals
-   [MC-157215](https://bugs.mojang.com/browse/MC-157215) Loading 2 crossbows with 1 arrow in the mainhand and offhand can cause the arrow in the hotbar/inventory to become a "ghost arrow"
-   [MC-158245](https://bugs.mojang.com/browse/MC-158245) Fire Aspect enchantment from mobs can set you on fire even when blocking with a shield
-   [MC-160140](https://bugs.mojang.com/browse/MC-160140) Shulker boxes on the obsidian platform are destroyed and do not drop when a player enters the End
-   [MC-166809](https://bugs.mojang.com/browse/MC-166809) Cooldown rendering stutters while pausing
-   [MC-169698](https://bugs.mojang.com/browse/MC-169698) Blocks within igloo basements can generate waterlogged when generating in close proximity to water
-   [MC-170103](https://bugs.mojang.com/browse/MC-170103) Untamed wolves only beg for food while being angry and jumping
-   [MC-170907](https://bugs.mojang.com/browse/MC-170907) Network position deltas are processed relative to a wrong point
-   [MC-172031](https://bugs.mojang.com/browse/MC-172031) Throwing an ender pearl into a Nether or End portal often has no effect
-   [MC-175619](https://bugs.mojang.com/browse/MC-175619) Dispenser drops honey bottle unless empty slot is available
-   [MC-175729](https://bugs.mojang.com/browse/MC-175729) Walking on the edge of underwater soul soil with Depth Strider and Soul Speed doesn't show soul particles
-   [MC-177965](https://bugs.mojang.com/browse/MC-177965) Putting on/taking off soul speed boots while standing on soul sand/soil does not properly give speed
-   [MC-178383](https://bugs.mojang.com/browse/MC-178383) Horses, donkeys, mules and llamas spawned from spawn eggs or /summon command have 53 health
-   [MC-179940](https://bugs.mojang.com/browse/MC-179940) Player's attributes reset back to default values upon respawning
-   [MC-181604](https://bugs.mojang.com/browse/MC-181604) Exiting the end portal resets player attributes to their default values
-   [MC-182606](https://bugs.mojang.com/browse/MC-182606) When sneak-walking with Soul Speed on a Soul Sand or Soul Soil block (most noticeably) adjacent to lava, too many soul particles spawn
-   [MC-188693](https://bugs.mojang.com/browse/MC-188693) FOV doesn't change back when riding a mob after staying on Soul Sand with Soul Speed
-   [MC-189365](https://bugs.mojang.com/browse/MC-189365) Player can retain Soul Speed effect by bridging
-   [MC-191591](https://bugs.mojang.com/browse/MC-191591) Saddles lose their NBT data when equipped on horses, zombie horses, skeleton horses, mules or donkeys via right-clicking
-   [MC-193343](https://bugs.mojang.com/browse/MC-193343) Soul Speed effect remains after switching to spectator mode
-   [MC-195931](https://bugs.mojang.com/browse/MC-195931) Incorrect amount of damage heart particles shown when hitting some entities for the first time
-   [MC-200899](https://bugs.mojang.com/browse/MC-200899) Players don't receive thorns damage when attacking entities wearing thorns armor with indirect sweeping attacks
-   [MC-200991](https://bugs.mojang.com/browse/MC-200991) Soul Speed in minecart uses durability
-   [MC-213349](https://bugs.mojang.com/browse/MC-213349) Certain mobs that can melee can't use the Fire Aspect enchantment
-   [MC-215144](https://bugs.mojang.com/browse/MC-215144) A re-created "Default" world has world type of "Custom"
-   [MC-223165](https://bugs.mojang.com/browse/MC-223165) Snout banner pattern is treated as common loot
-   [MC-223301](https://bugs.mojang.com/browse/MC-223301) Goats not taking damage when attacking with Thorns armor equipped
-   [MC-224743](https://bugs.mojang.com/browse/MC-224743) Jumping on soul sand uses durability of Soul Speed boots
-   [MC-225312](https://bugs.mojang.com/browse/MC-225312) Evokers using evoker fangs are not affected by the Thorns enchantment
-   [MC-225870](https://bugs.mojang.com/browse/MC-225870) Breeding an axolotl in creative replaces the bucket of tropical fish
-   [MC-226894](https://bugs.mojang.com/browse/MC-226894) Entering the end while in water depletes hunger
-   [MC-228598](https://bugs.mojang.com/browse/MC-228598) Item count desync when firing an arrow while switching to a different hotbar slot
-   [MC-232770](https://bugs.mojang.com/browse/MC-232770) Entities receive knockback from incorrect directions when being damaged by firework explosions
-   [MC-234162](https://bugs.mojang.com/browse/MC-234162) The "minecraft:ui.button.click" sound isn't played when adjusting sliders if the mouse cursor is released while not being held over them
-   [MC-234880](https://bugs.mojang.com/browse/MC-234880) Llama's unaffected by Thorns
-   [MC-237057](https://bugs.mojang.com/browse/MC-237057) The "minecraft:particle.soul\_escape" sound is very rarely heard by other players when using boots enchanted with soul speed
-   [MC-237063](https://bugs.mojang.com/browse/MC-237063) Particles produced from using boots enchanted with soul speed are inconsistently displayed for other players
-   [MC-248272](https://bugs.mojang.com/browse/MC-248272) Enchantment::doPostHurt and Enchantment::doPostAttack are called twice for players
-   [MC-252361](https://bugs.mojang.com/browse/MC-252361) Obsidian platform in end is off by a block from entering from the nether compared to overworld
-   [MC-252691](https://bugs.mojang.com/browse/MC-252691) Player spawns on a bedrock layer when the world is first created as a SuperFlat world with non-full blocks on the surface
-   [MC-252817](https://bugs.mojang.com/browse/MC-252817) Placing a map into an item frame and removing it does not remove the green player marker
-   [MC-252846](https://bugs.mojang.com/browse/MC-252846) Mobs can pass through fences with carpets on top when growing up
-   [MC-253209](https://bugs.mojang.com/browse/MC-253209) Some mobs will no longer panic when receiving poison/wither damage
-   [MC-253457](https://bugs.mojang.com/browse/MC-253457) Cats and Ocelots are immune to Thorns damage
-   [MC-253791](https://bugs.mojang.com/browse/MC-253791) Frogs suffocating when growing
-   [MC-254004](https://bugs.mojang.com/browse/MC-254004) Falling Block Entities do not process their End Gateway Cooldown Timer
-   [MC-255218](https://bugs.mojang.com/browse/MC-255218) Fly mode is disabled after teleporting from the End to the Overworld through the end portal
-   [MC-258967](https://bugs.mojang.com/browse/MC-258967) Entities receive knockback from splash potions based on the direction that the said entity was facing when throwing the potion
-   [MC-259811](https://bugs.mojang.com/browse/MC-259811) Paintings with non-existent variant entity tag are falsely labeled as random variant
-   [MC-259987](https://bugs.mojang.com/browse/MC-259987) Damage command only issues knockback if it was done by an entity
-   [MC-260346](https://bugs.mojang.com/browse/MC-260346) Custom music discs cut off when vanilla disc would normally end
-   [MC-261701](https://bugs.mojang.com/browse/MC-261701) Lag spike when opening creative inventory for first time in world
-   [MC-262469](https://bugs.mojang.com/browse/MC-262469) The "Remote Getaway" advancement isn't granted upon traveling through end gateways while riding boats
-   [MC-265009](https://bugs.mojang.com/browse/MC-265009) Explosion knockback reduction caused by Blast Protection does not stack with several enchanted armor pieces
-   [MC-265088](https://bugs.mojang.com/browse/MC-265088) Onboarding Narrator button doesn't update upon pressing Ctrl+B
-   [MC-265583](https://bugs.mojang.com/browse/MC-265583) Incorrect pluralization for skin customization strings for pants
-   [MC-265818](https://bugs.mojang.com/browse/MC-265818) The "gamerule.doVinesSpread.description" string consists of grammatically incorrect word usage
-   [MC-266113](https://bugs.mojang.com/browse/MC-266113) Copper doors are in the #minecraft:wooden\_doors tag
-   [MC-266118](https://bugs.mojang.com/browse/MC-266118) Copper doors are in the #minecraft:mineable/axe tag
-   [MC-266140](https://bugs.mojang.com/browse/MC-266140) The "Open link" button within the realms menu is improperly capitalized
-   [MC-266290](https://bugs.mojang.com/browse/MC-266290) Double doors do not automatically form between waxed and unwaxed copper doors, even of the same variant
-   [MC-266431](https://bugs.mojang.com/browse/MC-266431) Trial chambers intersect with the bedrock layer
-   [MC-266471](https://bugs.mojang.com/browse/MC-266471) Trial chambers can intersect aquifers, causing some blocks inside the structure to be waterlogged
-   [MC-266556](https://bugs.mojang.com/browse/MC-266556) Trial spawner cannot be activated in peaceful difficulty
-   [MC-266586](https://bugs.mojang.com/browse/MC-266586) Trial chambers can spawn directly inside the deep dark biome
-   [MC-266626](https://bugs.mojang.com/browse/MC-266626) Breeze doesn't stop attacking the player when it enters on the same team
-   [MC-267050](https://bugs.mojang.com/browse/MC-267050) Chat disabled strings are missing verbs
-   [MC-267071](https://bugs.mojang.com/browse/MC-267071) The word "packs" within the "download.pack.failed" string is always pluralized
-   [MC-267154](https://bugs.mojang.com/browse/MC-267154) Using an Eye of Ender plays the minecraft:entity.ender\_eye.launch sound event twice
-   [MC-267230](https://bugs.mojang.com/browse/MC-267230) Hangul fonts are rendered with missing pixels
-   [MC-267441](https://bugs.mojang.com/browse/MC-267441) When a player's generic.step\_height attribute is set to more than two, attempting to step atop of more than two blocks may fail if there are blocks higher up
-   [MC-267474](https://bugs.mojang.com/browse/MC-267474) Strings referencing the player's off hand are inconsistently spelled
-   [MC-267498](https://bugs.mojang.com/browse/MC-267498) Operation names in /attribute and item modifiers' set\_attributes are different
-   [MC-267947](https://bugs.mojang.com/browse/MC-267947) Ender pearls can teleport players in spectator mode
-   [MC-267951](https://bugs.mojang.com/browse/MC-267951) The game freezes and eventually crashes when creating a world with the "spawnChunkRadius" gamerule set to high values
-   [MC-267954](https://bugs.mojang.com/browse/MC-267954) World upgrade and downgrade realms strings are improperly capitalized
-   [MC-267967](https://bugs.mojang.com/browse/MC-267967) Breezes ignore the deflects\_projectiles entity type tag
-   [MC-267968](https://bugs.mojang.com/browse/MC-267968) Medium slimes from trial chamber spawners take damage incorrectly when first hit
-   [MC-267981](https://bugs.mojang.com/browse/MC-267981) The "Trial Spawner crackles" subtitle is only displayed for a split second upon the "minecraft:block.trial\_spawner.ambient" sound being played
-   [MC-267988](https://bugs.mojang.com/browse/MC-267988) Tamed entities ignore their "LookAtPlayerGoal" distance and look in the direction of their owners from any distance when being stood up
-   [MC-268023](https://bugs.mojang.com/browse/MC-268023) The "selectWorld.experimental.details.title" string displayed within the experimental features details menu is improperly capitalized
-   [MC-268106](https://bugs.mojang.com/browse/MC-268106) Entities' current health is not capped at their max health in all applicable situations
-   [MC-268113](https://bugs.mojang.com/browse/MC-268113) the minecraft:generic.scale attribute is desynchronized when the player leaves the End dimension via an End portal
-   [MC-268185](https://bugs.mojang.com/browse/MC-268185) Copper grates in trial chambers are waterlogged
-   [MC-268347](https://bugs.mojang.com/browse/MC-268347) Setting gravity higher than 0.84 allows you to jump up a block
-   [MC-268367](https://bugs.mojang.com/browse/MC-268367) Arrows repeatedly bouncing off a breeze spam sound
-   [MC-268369](https://bugs.mojang.com/browse/MC-268369) Wind charges delete arrows without blowing up
-   [MC-268370](https://bugs.mojang.com/browse/MC-268370) Japanese CJK variants use the same diacritic
-   [MC-268438](https://bugs.mojang.com/browse/MC-268438) Baby armadillos can still eat while rolled up
-   [MC-268551](https://bugs.mojang.com/browse/MC-268551) When a wind charge is fired from a dispenser, it makes a "dispensed item" sound instead of a "Wind Charge flies" sound
-   [MC-268564](https://bugs.mojang.com/browse/MC-268564) Entities receive knockback from incorrect directions when being hit by projectiles deflected by breezes
-   [MC-268598](https://bugs.mojang.com/browse/MC-268598) The "weight" of skeletons in swamp biomes is too high causing less bogged spawns
-   [MC-268772](https://bugs.mojang.com/browse/MC-268772) Fall damage multiplier attribute has unintuitive coloring
-   [MC-269034](https://bugs.mojang.com/browse/MC-269034) Wolves no longer teleport while trying to pathfind out of Lava
-   [MC-269036](https://bugs.mojang.com/browse/MC-269036) Bogged do not drop mushrooms when sheared with doMobLoot false
-   [MC-269147](https://bugs.mojang.com/browse/MC-269147) Shearing a bogged spawns mushrooms at the bogged's feet
-   [MC-269318](https://bugs.mojang.com/browse/MC-269318) Books placed on a lectern in creative mode are consumed
-   [MC-269351](https://bugs.mojang.com/browse/MC-269351) The Bolt Armor Trim cannot be duplicated with Waxed Copper Block
-   [MC-269359](https://bugs.mojang.com/browse/MC-269359) "Field Masoned", "Skull Charge", "Flow", and "Guster" banner patterns are not mirrored on the backside
-   [MC-269370](https://bugs.mojang.com/browse/MC-269370) Sharp lag spike caused by incorrect upper limit on particles created by mace smash attack
-   [MC-269389](https://bugs.mojang.com/browse/MC-269389) Flow banner pattern is treated as common loot
-   [MC-269390](https://bugs.mojang.com/browse/MC-269390) Guster banner pattern is treated as common loot
-   [MC-269439](https://bugs.mojang.com/browse/MC-269439) Some diacritics intersect the language box in the languages menu
-   [MC-269460](https://bugs.mojang.com/browse/MC-269460) Thorns enchantment doesn't work when entities are hit by wind charges
-   [MC-269574](https://bugs.mojang.com/browse/MC-269574) Client attribute values may desync from the server after leaving the end
-   [MC-269601](https://bugs.mojang.com/browse/MC-269601) Mace smash attack does not knock back other players when they are not the attacked entity
-   [MC-269617](https://bugs.mojang.com/browse/MC-269617) When ender pearls teleport non-player entities, no teleportation sound is played upon impact
-   [MC-269633](https://bugs.mojang.com/browse/MC-269633) Placing an oversized filled bucket resets the stack size to 1
-   [MC-269642](https://bugs.mojang.com/browse/MC-269642) Eating an oversized Soup / Stew resets the stack size to 1
-   [MC-269674](https://bugs.mojang.com/browse/MC-269674) Oversized book and quill stacks reset count when signed
-   [MC-269685](https://bugs.mojang.com/browse/MC-269685) Buckets are lost when consuming oversized milk buckets
-   [MC-269686](https://bugs.mojang.com/browse/MC-269686) Oversized music disc stacks can be duplicated with jukeboxes
-   [MC-269708](https://bugs.mojang.com/browse/MC-269708) Dispensers using an oversized stack of Water Bottles resets the stack size to 1
-   [MC-269717](https://bugs.mojang.com/browse/MC-269717) Cauldron deletes overstacked tinted shulker boxes
-   [MC-269809](https://bugs.mojang.com/browse/MC-269809) Feeding an axolotl an oversized tropical fish bucket resets the stack size to 1
-   [MC-269881](https://bugs.mojang.com/browse/MC-269881) Flow and Bolt Armor Trims don't grant "Crafting a New Look" advancement
-   [MC-269921](https://bugs.mojang.com/browse/MC-269921) Wind charges can be thrown though corners
-   [MC-269951](https://bugs.mojang.com/browse/MC-269951) When the gamerule "doImmediateRespawn" is set to true, the Wind Charged, Oozing or Weaving effects don't function for players
-   [MC-269958](https://bugs.mojang.com/browse/MC-269958) New effects are not required for the "How Did We Get Here?" advancement
-   [MC-269964](https://bugs.mojang.com/browse/MC-269964) Ominous item spawners are missing an NBT load for spawn\_item\_after\_ticks
-   [MC-269966](https://bugs.mojang.com/browse/MC-269966) "A Furious Cocktail" Advancement does not require the new potion effects
-   [MC-269969](https://bugs.mojang.com/browse/MC-269969) Using a normal trial key on the ominous vault grants Under Lock and Key advancement
-   [MC-269978](https://bugs.mojang.com/browse/MC-269978) The centrial dispenser in eruption trial chamber is missing a water bucket
-   [MC-269988](https://bugs.mojang.com/browse/MC-269988) New potion effects don't apply their respective behaviors when creeper explodes
-   [MC-270021](https://bugs.mojang.com/browse/MC-270021) Drinking a single ominous bottle in survival doesn't grant bad omen with the correct amplifier
-   [MC-270024](https://bugs.mojang.com/browse/MC-270024) When drinking ominous bottles, bad omen of higher levels can be overriden by lower amplifiers
-   [MC-270031](https://bugs.mojang.com/browse/MC-270031) Arrows spawned from ominous trial spawner can be picked up
-   [MC-270033](https://bugs.mojang.com/browse/MC-270033) Infested or Oozing effect cloud shrinks when silverfish or slime enters it
-   [MC-270047](https://bugs.mojang.com/browse/MC-270047) Axes prioritize scraping copper over blocking with shields
-   [MC-270052](https://bugs.mojang.com/browse/MC-270052) Blur levels below 10% do not appear to actually work
-   [MC-270181](https://bugs.mojang.com/browse/MC-270181) Wind charges go through an entity if it is close to a player
-   [MC-270216](https://bugs.mojang.com/browse/MC-270216) Mace smash attack particles cannot be reduced with the Particles setting
-   [MC-270278](https://bugs.mojang.com/browse/MC-270278) "Who needs rockets?" is granted at heights lower than 8 blocks when using slow falling
-   [MC-270296](https://bugs.mojang.com/browse/MC-270296) Ominous Item Spawner spawns unstackable arrows with potion effects
-   [MC-270301](https://bugs.mojang.com/browse/MC-270301) The fire protection enchantment applied to horse armor no longer decreases the duration of time the horse remains ablaze
-   [MC-270377](https://bugs.mojang.com/browse/MC-270377) Wind charges can be hit and redirected the moment they are thrown
-   [MC-270379](https://bugs.mojang.com/browse/MC-270379) Buttons and Levers don't make sounds when toggled by Wind Charges
-   [MC-270499](https://bugs.mojang.com/browse/MC-270499) Riptide trident in off-hand applies mace effects in main hand
-   [MC-270539](https://bugs.mojang.com/browse/MC-270539) The blast protection enchantment, when applied to horse armor, no longer diminishes the knockback effect from explosions on horse
-   [MC-270540](https://bugs.mojang.com/browse/MC-270540) The prevention of fall damage from wind charges is not retained upon reloading the world
-   [MC-270572](https://bugs.mojang.com/browse/MC-270572) Programmer Art resource pack duplicates some GUI texture files
-   [MC-270573](https://bugs.mojang.com/browse/MC-270573) Mounted entities are immune to wind charge damage
-   [MC-270584](https://bugs.mojang.com/browse/MC-270584) Vault/Ominous Vault loot isn't predetermined, allowing players to create backups of their worlds to get desired rewards
-   [MC-270588](https://bugs.mojang.com/browse/MC-270588) Hitting Wind Charges and Fireballs makes no sound
-   [MC-270635](https://bugs.mojang.com/browse/MC-270635) Trial spawners textures are inconsistent
-   [MC-270637](https://bugs.mojang.com/browse/MC-270637) maxEntityCramming set to 0 prevents slime spawning from oozing effect
-   [MC-270649](https://bugs.mojang.com/browse/MC-270649) The width of challenge advancements header is calculated in relation to the slash formatting of progress counter, causing overlap in some languages
-   [MC-270682](https://bugs.mojang.com/browse/MC-270682) modify\_contents item modifier can create overstacked items
-   [MC-270684](https://bugs.mojang.com/browse/MC-270684) set\_attributes loot function doesn't accept an empty list
-   [MC-270749](https://bugs.mojang.com/browse/MC-270749) Remote Getaway advancement is not granted when entering a gateway by throwing an ender pearl next to it
-   [MC-270779](https://bugs.mojang.com/browse/MC-270779) Getting data with /data command from a block/chest with a large amount of data can cause the game to crash
-   [MC-270789](https://bugs.mojang.com/browse/MC-270789) Only mace smash attacks increment "Times Used" stat
-   [MC-270791](https://bugs.mojang.com/browse/MC-270791) Mace smash attack can knockback tamed mobs
-   [MC-270795](https://bugs.mojang.com/browse/MC-270795) Mobs despawned by Ominous Trial Spawners can delete picked up items
-   [MC-270808](https://bugs.mojang.com/browse/MC-270808) Any item in the armor.body slot protects wolves from taking damage
-   [MC-270818](https://bugs.mojang.com/browse/MC-270818) Data generator items report is not deterministic
-   [MC-270821](https://bugs.mojang.com/browse/MC-270821) Regular Trial Spawners spawn the first mob with Ominous Trial equipment if they were last active as Ominous
-   [MC-270849](https://bugs.mojang.com/browse/MC-270849) Breeze can extinguish lit candles when mobGriefing is false
-   [MC-270926](https://bugs.mojang.com/browse/MC-270926) "foodSaturationLevel" can be negative
-   [MC-270934](https://bugs.mojang.com/browse/MC-270934) Missing trial chamber structure minecraft:trial\_chambers/chamber/addon/c6
-   [MC-270965](https://bugs.mojang.com/browse/MC-270965) The data type of the "minecraft:custom\_data" component of the recipe result will be forcibly modified
-   [MC-270974](https://bugs.mojang.com/browse/MC-270974) Breeze wind charges can change activation blockstates of redstone components when mobGriefing is disabled
-   [MC-270977](https://bugs.mojang.com/browse/MC-270977) Breezes don't make deflection sounds
-   [MC-270981](https://bugs.mojang.com/browse/MC-270981) View Bobbing toggle is not available in Accessibility Settings
-   [MC-271001](https://bugs.mojang.com/browse/MC-271001) Items in a container can be given a count above 99 (to max integer), and can crash the world
-   [MC-271005](https://bugs.mojang.com/browse/MC-271005) Knowledge books with a max stack size over 1 consume all items in the stack when used
-   [MC-271026](https://bugs.mojang.com/browse/MC-271026) Components that set a status effect sometimes lose parts of the data
-   [MC-271034](https://bugs.mojang.com/browse/MC-271034) List entries in the Social interaction menu are rendered over the background
-   [MC-271039](https://bugs.mojang.com/browse/MC-271039) Upgrading to 1.20.5 leads to the removal of all enchantments if item had the "sweeping" enchantment without namespace
-   [MC-271094](https://bugs.mojang.com/browse/MC-271094) Entity ID inside EntityTag is ignored when updating a world to 1.20.5
-   [MC-271157](https://bugs.mojang.com/browse/MC-271157) "Telemetry is disabled" tooltip does not get updated when the client locale changes
-   [MC-271159](https://bugs.mojang.com/browse/MC-271159) Banner pattern entries without colors are invalidated when upgrading to 1.20.5
-   [MC-271168](https://bugs.mojang.com/browse/MC-271168) Demo timer does not respect "Text Background" setting
-   [MC-271170](https://bugs.mojang.com/browse/MC-271170) Unexpected error when modifying skull's custom name to an invalid value
-   [MC-271199](https://bugs.mojang.com/browse/MC-271199) Advancement 'Local Brewery' not granted on shift-clicking
-   [MC-271244](https://bugs.mojang.com/browse/MC-271244) Auto-save text does not respect "Text Background" setting in accessibility settings
-   [MC-271293](https://bugs.mojang.com/browse/MC-271293) Wind charge, fireball and shulker bullet makes a "Burning" sound as it passes through the lava
-   [MC-271353](https://bugs.mojang.com/browse/MC-271353) Crafting UI flickers incorrect or blank recipes when choosing items from the recipe book
-   [MC-271360](https://bugs.mojang.com/browse/MC-271360) Horse armor and wolf armor are deleted when used on an armor stand
-   [MC-271414](https://bugs.mojang.com/browse/MC-271414) Damage command at position applies knockback in random direction
-   [MC-271897](https://bugs.mojang.com/browse/MC-271897) End Portal makes items disappear
-   [MC-271980](https://bugs.mojang.com/browse/MC-271980) Arrows/bee stingers stuck in players disappear when leaving the end
-   [MC-272014](https://bugs.mojang.com/browse/MC-272014) Ender Dragon death animation is broken since 20w22a (and broken again in 20w45a)
-   [MC-272073](https://bugs.mojang.com/browse/MC-272073) Item displays with billboard and rotation values create major visual bug
-   [MC-272079](https://bugs.mojang.com/browse/MC-272079) Medium/small Slimes and magma cube's attack reach is too short
-   [MC-272194](https://bugs.mojang.com/browse/MC-272194) Empty Attribute Modifiers lost during upgrade
-   [MC-272198](https://bugs.mojang.com/browse/MC-272198) Shulkers' models sometimes appear offset upon end city generation
-   [MC-272241](https://bugs.mojang.com/browse/MC-272241) Error when traveling through nether portal outside world border
-   [MC-272253](https://bugs.mojang.com/browse/MC-272253) The strength of the riptide enchantment is increased when holding tridents enchanted with riptide in both hands
-   [MC-272267](https://bugs.mojang.com/browse/MC-272267) "Changes the blurriness of menu background" lacks punctuation
-   [MC-272279](https://bugs.mojang.com/browse/MC-272279) Resource packs containing TrueType fonts fail to load on x64 macOS systems
-   [MC-272308](https://bugs.mojang.com/browse/MC-272308) Axolots can be attached to new leads when being already leashed
-   [MC-272445](https://bugs.mojang.com/browse/MC-272445) Command blocks made from Ctrl + Pick Block do not activate on first try
-   [MC-272469](https://bugs.mojang.com/browse/MC-272469) When the wind charge, fireball or shulker bullet is in the lava, it will continue to make a high-loudness noise
-   [MC-272515](https://bugs.mojang.com/browse/MC-272515) Component-Modified Saddles get their components wiped when dispensed onto a horse, mule, or camel.
-   [MC-272808](https://bugs.mojang.com/browse/MC-272808) Step height steps too high when there's a gap the player can fit through
-   [MC-272996](https://bugs.mojang.com/browse/MC-272996) Using "/execute in..." to switch dimensions causes the player to fall when flying

---

The shipping room sure has been bustling with activity lately! So much so that we managed to cram one last release into the month of April. Today we're shipping Java Edition 1.20.6, a hotfix release that takes care of some critical issues that managed to sneak their way into the Armored Paws drop (1.20.5) last week.

Happy llama-safe mining!

## Fixed bugs in 1.20.6

-   [MC-271109](https://bugs.mojang.com/browse/MC-271109) Trader llama inventory shifted, partially lost during upgrade

---

Do you smell that? Ah yes, it's the magical, tell-tale scent of release day Tuesday - and what a release day it is!

Today we are shipping Minecraft: Java Edition 1.20.5, also known as the Armored Paws drop! Travel to the Savanna and Badlands biomes and say hello to the endearing Armadillos. Find and befriend eight new Wolf variants and equip your canine companions with dyable armor made from Armadillo Scutes and go adventuring together!

On the technical side, the Armored Paws drop is also introducing a change to how Java Edition spawn chunks work, the details of which we covered in [the changelog for Snapshot 24w03a](https://www.minecraft.net/en-us/article/minecraft-snapshot-24w03a) earlier this year. The tl;dr version of this change is that we're making the spawn chunk radius a configurable game rule and decreasing the default value by 98%. This should translate to a noticeable performance boost for most players!

So what are you waiting for? Stock up on food and water and start reading through the complete 1.20.5 changelog below. It's a looong one.

Happy scute brushing!

## New Features

-   Added Armadillo and Armadillo Scutes
-   Added Wolf Armor
-   Added Wolf variants

![A family of Armadillos walking on the Red Sand of the Badlands amidst Dead Bushes with a green Jungle in the background.](https://launchercontent.mojang.com/v2/images/1.20.51thumbnail.jpg)

### Armadillo

-   The Armadillo is a new passive mob
-   Armadillos drop Armadillo Scutes periodically, and when brushed
-   Armadillos spawn in Savannas and Badlands
-   The Armadillo's favorite food is the Spider Eye
    -   Armadillos are tempted by Spider Eyes
    -   Feeding two adult Armadillos Spider Eyes makes them breed
    -   Feeding a baby Armadillo a Spider Eye makes it grow up quicker
-   The Armadillo rolls up when it detects a threat such as:
    -   A player sprinting, riding a mount, or riding a vehicle
    -   Undead mobs
    -   A mob or a player it has recently been attacked by
-   The Armadillo does not roll up when:
    -   Fleeing, in water, in the air, or when on a Lead
-   When an Armadillo is rolled up:
    -   It does not walk, cannot eat, and will not be tempted by food
    -   Its shell will protect it, reducing damage taken, even allowing it to fully resist weak attacks
    -   It will continue to scan for threats, occasionally peeking to check the surroundings
        -   If no threats are detected for 4 seconds, it will unroll
-   Spiders and Cave Spiders will run away from Armadillos that are not in a rolled up state

![A rolled-up Armadillo is peeking to check if a Zombie is gone, but the Zombie is still close. It happens in Savanna during twilight.](https://launchercontent.mojang.com/v2/images/1.20.52thumbnail.jpg)

#### Armadillo Scutes

-   Armadillo Scutes are dropped by Armadillos periodically or when an Armadillo is brushed
-   Armadillo Scutes can be used to craft Wolf Armor
-   Dispensers can be used to brush Armadillo Scutes off Armadillos

![Ari is fighting two Skeletons and a Creeper in a partially lit cave with their Tamed Wolves who are wearing colorful Wolf Armor sets.](https://launchercontent.mojang.com/v2/images/1.20.53thumbnail.jpg)

### Wolf Armor

-   Wolf Armor can be crafted with Armadillo Scutes and can be dyed in a similar fashion to Leather Armor
-   The Wolf Armor will protect the Wolf from most damage sources until the armor loses all durability and breaks
-   Wolf Armor shows signs of breakage as durability goes down
-   Using Armadillo Scutes on the Wolf Armor while it is equipped on the Wolf will repair it
-   Using Shears on a Wolf that is wearing armor will drop the armor
-   Wolf Armor can only be equipped on a tame adult Wolf
-   Only the Wolf's owner can equip, repair, and shear Wolf Armor
-   Dispensers cannot equip nor remove Wolf Armor

![Efe is trying to tame a striped Wolf on a Savanna Plateau. In the background a river is flowing through a Badlands Canyon.](https://launchercontent.mojang.com/v2/images/1.20.54thumbnail.jpg)

### Wolf Variants

New Wolf variants have been added. The variant is determined by the biome they spawn in. Wolves spawn in packs, with a default pack size of 4.

-   Pale Wolf - The Wolf we're all familiar with. This variant spawns in the Taiga biome
-   Woods Wolf - A variant that spawns in the Forest biome. This will be the dominant Wolf variant that you will be able to find in the Overworld, since the Forest biome is very common
-   Ashen Wolf - A variant that spawns in the Snowy Taiga biome
-   Black Wolf - A variant that spawns in the Old Growth Pine Taiga biome, in smaller packs of 2-4
-   Chestnut Wolf - A variant that spawns in the Old Growth Spruce Taiga biome, in smaller packs of 2-4
-   Rusty Wolf - A variant that spawns in a new location for Wolves - the Sparse Jungle biome, in smaller packs of 2-4
-   Spotted Wolf - A variant that spawns in a new location for Wolves - the Savanna Plateau biome, in larger packs of 4-8
-   Striped Wolf - A variant that spawns in a new location for Wolves - the Wooded Badlands biome, in larger packs of 4-8
-   Snowy Wolf - A variant that spawns in the Grove biome. This lone Wolf is a rare type, as it always walks alone

When summoned in other ways (e.g. using the Spawn Egg or using the `summon` command), the variant selection follows the natural spawning biome rules with the following extensions:

-   Rusty Wolf: will be selected in all Jungle-like biomes, including Jungle and Bamboo Jungle Biomes
-   Spotted Wolf: will be selected in all Savanna-like biomes, including Savanna and Windswept Savanna Biomes
-   Striped Wolf: will be selected in all Badlands-like biomes, including Badlands and Eroded Badlands Biomes

![Ari is jumping over a ravine in a Savanna on a brown Horse with white spots. A big pack Tamed Wolves of different variants is following them.](https://launchercontent.mojang.com/v2/images/1.20.55thumbnail.jpg)

### Advancements

-   Added the following advancements:
    -   `Isn't It Scute?` - Get Armadillo Scutes from an Armadillo using a Brush
    -   `Shear Brilliance` - Remove Wolf Armor from a Wolf using Shears
    -   `Good as New` - Repair a damaged Wolf Armor using Armadillo Scutes
    -   `The Whole Pack` - Tame one of each Wolf variant

## Changes

-   The UI has been updated with a fresher look
-   Decreased the default size of the spawn chunks and made the value configurable
-   Updated the health and damage dealt by Tamed Wolves
-   Adjusted spawning conditions for Wolves, allowing them to spawn on Coarse Dirt and Podzol blocks
-   Adjusted the texture of the Wolf Collar layer to be more consistent with the new Wolf Armor
-   Adjusted passive mobs spawning in Grove biome to only include Rabbits, Foxes and Wolves
-   Minor tweaks to existing Blocks, Items and Entities
-   Added option to use Japanese variants of CJK characters
-   Added support for Viossa language
-   When entities leave or enter The End, the area they arrive in will now stay loaded for 15 seconds, matching the behavior of Nether Portals
-   Improvements to the Game's Performance
-   Improved handling of errors during saving and loading

### UI Updates

The UI has been updated to sport a fresher look and to be more consistent when it comes to the layout of different UI elements, all while retaining the essence and feel of the old screens.

![An updated Minecraft options screen with a new transparent background. The game world is blurred but visible behind the menu elements. A grey sheep is looking at the player.](https://launchercontent.mojang.com/v2/images/1.20.57thumbnail.jpg)

-   The menu background dirt texture has been replaced by a darkened background
    -   The dirt background can be restored by using the built-in Programmer Art Resource Pack
    -   Outside the game, the main menu panorama is displayed behind all screens
    -   In the game, the world will be visible behind all screens
    -   Paired with the darkened background is a blur
        -   The strength of the blur can be configured in Video Settings and Accessibility Settings
        -   In-game screens such as containers and books are not affected by these changes
-   Screen elements such as titles and buttons are positioned more consistently across different screens
-   The World Backups screen and the Players screen in the Realms menu have been updated
-   Lists now have clearer borders at the top and bottom
-   Button tooltips will no longer appear when hovering outside the containing element
-   After defeating the Ender Dragon and entering the End Portal, the End Poem and credits are now displayed with a background based on the animated End Portal effect
-   The animated Nether Portal texture is displayed when changing dimension to or from The Nether
-   The animated End Portal effect is displayed when changing dimension to or from The End

### Spawn Chunk Changes

-   The size of the spawn chunks changed from a radius of 10 (19x19 entity-ticking chunks) to a radius of 2 (3x3 entity-ticking chunks)
    -   This was done to reduce loading times, as well as memory and CPU usage
    -   We opted to not fully remove spawn chunks to allow players who currently utilize this functionality to continue to do so
-   Added a new gamerule `spawnChunkRadius` to set the size of the spawn chunks
    -   Possible values are 0 to 32, where 0 completely disables the spawn chunks and 10 is equivalent to the functionality before this change
    -   Default value is 2, equivalent to 3x3 entity ticking chunks
    -   Note that setting this to a high value might require allocating more memory for the game in the Launcher

### Tamed Wolves Health and Damage

-   Tamed Wolves now have 40 health points (20 hearts) instead of 20 health points (10 hearts)
-   They no longer take half of the damage from most environmental sources like they used to do
    -   In most cases, this change will make no difference given the health boost, but they can now withstand more damage from players and arrows
-   Feeding a Wolf now heals twice as many health points

![Steve is experimenting with different potion effects in a Savanna Village hut. Potion effect particles of different colors are visible around them.](https://launchercontent.mojang.com/v2/images/1.20.56thumbnail.jpg)

### Minor Tweaks to Blocks, Items and Entities

-   Renamed scutes that drop from Turtles to Turtle Scutes
-   Added unique sounds for Cobwebs
-   Enchantments on Items are now always listed in the same order in tooltips, regardless of how they were added to those items
-   Adjusted flying behaviour for Bees and Parrot to keep them from overshooting their position when flying up and down
-   Llamas and Shulkers are no longer able to destroy Armor Stands
-   Status effect particle colors are no longer blended into one particle color
    -   All active visible status effect particles are now rendered separately
-   Ctrl+Picking a renamed block (such as a Chest) in Creative Mode will now give a renamed item
-   Ctrl+Picking a block no longer lists "(+NBT)" in the item tooltip

### Accessibility

-   The default focus is now always set when entering or exiting any menu while navigating using tab or arrow keys
-   Added a new accessibility option to control the strength of the background blur when a menu is open

### Japanese Font Variants

-   A new option has been added to select Japanese variants for some CJK characters
-   Replacement glyphs come from the Japanese version of the Unifont font
-   The new option is included in a new "Font Settings" menu, accessible from the "Language" menu
-   The default value of this option is based on the system locale language setting
-   The "Force Unicode" button has been moved to "Font Settings"

### Performance Improvements

-   Improved Hopper performance
-   Hoppers will no longer try to pick up item entities if there is a full block placed above it
    -   Beehives and Bee Nests are exempt from this
    -   This does not affect Minecarts with Hoppers
-   Reduced time needed to generate Explorer Maps to Buried Treasures

### Saving and Loading Improvements

-   In Singleplayer, when errors occur during loading or saving of chunks, a warning will be shown in a toast
-   Trying to join a Singleplayer world with less than 64 MB free disk space will show a warning screen
    -   Additionally, a warning toast will be shown periodically while in game

## Technical Changes

-   The Data Pack version is now 41
-   The Resource Pack version is now 32
-   The game now requires Java 21
-   The game now requires a 64-bit Operating System
-   The included Java distribution is now the Microsoft build of OpenJDK 21.0.3
-   Added transfer and cookie packets for custom servers
-   Added an option to use a faster region file compression algorithm on dedicated servers
-   Added a reserved region file compression id for third-party servers to use for custom compression implementations
-   Changes to optimizing worlds
-   Improved server TPS debug chart
-   Allowed server operators to view dedicated server TPS debug chart
-   Added JFR (Java Flight Recorder) events for individual chunk reads (`minecraft.ChunkRegionRead`) and writes (`minecraft.ChunkRegionWrite`)

### Network Protocol

-   Reduced amount of data sent by the server during login by reusing parts of the vanilla data pack
-   Client chat state is now preserved by default when entering configuration phase
-   Invalid data in packets sent from a server will now cause the game client to disconnect
    -   To ease the transition period, modded servers can opt out by setting the appropriate field in the `handshake/game_profile` packet
    -   This option will be removed in the next release
-   The `chat_command_signed` packet has been split from `chat_command`
    -   Commands that do not accept any signed arguments will use the unsigned packet, and will not pass any 'last seen' chat updates

#### Transfer Packets

-   Custom servers can now request that clients connect to another server with a new packet
-   When a client is transferred, it will connect to the target server with a new transfer intent (id 3)
-   By default, servers will not accept incoming transfers and will disconnect the client
-   This can be changed by setting the `accepts-transfers` property to `true` in the `server.properties` file
-   Resource packs are maintained across transfers
-   In the case of a transfer, custom servers can skip authenticating again with a new flag in the clientbound `hello` packet

#### Cookie Packets

-   Cookie packets allow custom servers to request and store data on a client
    -   Each cookie may be up to 5 KiB in size
    -   Cookies may be requested during login, configuration and play phases — but only stored during the configuration and play phases
-   Cookies persist across server transfers but are not persisted when the player disconnects
    -   This allows servers to pass along information such as authentication or custom game data to the new server

### Region File Compression Algorithm

-   Added a dedicated server configuration property `region-file-compression` with 3 possible values:
    -   `deflate`, the default option. Uses the old algorithm
    -   `lz4` uses LZ4 algorithm, which requires less CPU time to compress and decompress but uses more disk space
    -   `none` does not compress the data
        -   This consumes significantly more space and requires significant time to read and write, even though CPU is used less
        -   Might make sense together with filesystem level compression
-   Changing the compression algorithm will not automatically recompress the world
    -   New or updated chunks will use the newly configured algorithm, but the old ones will stay in the previous format

### Reserved Compression Id for Third-party Servers

-   Compression id `127` can now be used for custom implementations of region file compression
-   When used, the version id must be followed by a namespaced string representing the custom algorithm used

### World Optimizing Changes

-   Optimizing singleplayer worlds and running a dedicated server with the `forceUpgrade` option now also upgrades contents of `entities` and `poi` directories of the world
-   Added a new `recreateRegionFiles` dedicated server startup parameter
    -   It will trigger world optimization similar to `forceUpgrade`, but will also rewrite all the chunks independently of whether they have been upgraded
    -   This will create fresh and defragmented region files
    -   Using this parameter after changing the `region-file-compression` server property will recompress all region files in the new format

![A screenshot of the updated ticks-per-second graph.](https://launchercontent.mojang.com/v2/images/1.20.5perfgraph.jpg)

### Improved The Server TPS Debug Chart

-   As before, it is accessible by pressing `F3 + 2`
-   The bottom dark red section of the chart displays the time spent during the main logic of the server tick
    -   This is equivalent to the value displayed in the old chart
-   The light brown section displays time spent running scheduled tasks
-   The purple section displays time spent executing all other code during the tick
-   The top light green (or yellow or red depending on lag) section displays time spent idling, waiting for next tick
-   The `min`, `avg`, `max` aggregate values are based on the sum of the first 3 sections
-   Server operators can now view the TPS debug chart while connected to their dedicated server

### Chat

-   Client chat state (on-screen messages and chat input history) is now preserved by client when entering and exiting configuration phase
-   Message signature chain handling remains unchanged - going into configuration phase starts a new session
-   If the client has a message delay configured, any pending messages will be delivered immediately before leaving the world
-   The server can clear chat state by sending a `reset_chat` packet in configuration phase

## Data Pack Versions 27 through 41

The Data Pack version used by the game is now 41. These are the changes compared to version 26, used in 1.20.4.

-   Renamed `scute` item to `turtle_scute`
-   Changed Item Stack data format, introducing Item Stack Components
-   Added many new Attributes
-   Added new loot functions
-   Added new advancement predicates
-   Added new tags
-   Recipe results can now specify component data
-   Added data-driven registries for Banner Patterns and Wolf Variants
-   Particle representation in commands and area effect clouds has been changed

![In the Crafting interface, a custom "Stiiiiiick" has been crafted with 3 Sticks in the grid. The item tooltip shows the text "Like a stick, but stickier".](https://launchercontent.mojang.com/v2/images/1.20.5tech1thumbnail.jpg)

### Item Data Format

We have made some large changes to how Item Stack-specific properties are stored and represented in this release, replacing the current NBT 'tag' with structured 'components'.

This change has been made in order to:

-   Validate item properties at load time, enabling easier identification of invalid data in commands and data packs
    -   This should avoid any 'silent' breakages in commands specifying custom item data for any potential future format changes
-   Continue to evolve the game to enable the creation of dynamic content
-   Improve performance in cases where the game needs to frequently look up some property of an item (e.g. Armor Trims rendering every frame)
-   We understand that this is a significant breaking change for many datapacks and custom maps which will require significant effort to upgrade

We do however believe that this builds critical foundations for future extensibility. We have taken care to ship these changes all at once, with the hope that this avoids future incremental changes requiring many small updates to packs.

The current NBT 'tag' has existed for quite some time, and we are aware that a lot of clever techniques have been developed with this for commands and data packs. Over the course of the snapshot series, we have hugely appreciated your feedback on these changes, allowing us to avoid (often undocumented) functionality being lost without suitable alternatives.

-   Unstructured NBT data attached to stacks of items (`tag` field) has been replaced with structured 'components'
    -   This data is parsed and validated when the item is loaded
    -   This should improve performance in certain scenarios (e.g. Armor Trim rendering) when item data was frequently compared or requested and parsed
    -   Custom data can still be stored in the `minecraft:custom_data` component
-   Item types (e.g. `minecraft:stick`) hold a set of default components on an item that individual item stacks can override
-   The format of serialized items and items in data packs has been updated for consistency and to support components
-   Item syntax in commands has been updated to support components
-   When advanced tooltips are enabled (F3+H), the number of components will be displayed instead of number of tags
-   Default component values for items are now listed in `items.json` generated in `reports` directory
-   Block definitions are now added to `blocks.json` report (note: those definitions are not used yet and present only for informational purposes)

#### Migrated Item Stack Components

These are item stack components that replace existing functionality that was formerly specified in item NBT. All commands and data definitions will need to be upgraded to use these formats. Items in-world will however be automatically upgraded.

##### `minecraft:custom_data`

-   Can be used for custom data storage on an item
-   When upgrading a world, any non-game data in the item `tag` will be moved into here
-   Format: object with any fields
    -   e.g. `custom_data={some:'data'}`
-   Can be modified with the `set_custom_data` and `copy_custom_data` loot functions

##### `minecraft:damage`

-   The amount of durability removed from an item
-   If removed, the item will not be damageable
-   Replaces `Damage` tag
-   Format: non-negative integer
    -   e.g. `damage=12`
-   For damageable items (with the `max_damage` component), has an implicit default value of: `0`
-   Can be modified with the `set_damage` loot function

##### `minecraft:repair_cost`

-   The additional experience cost required to modify an item in an Anvil
-   Replaces `RepairCost` tag
-   Format: non-negative integer
    -   e.g. `repair_cost=12`
-   If not set, has an implicit default value of: `0`

##### `minecraft:unbreakable`

-   If set, the item will not lose any durability when used
-   Replaces `Unbreakable` boolean tag
-   Format: object with fields
    -   `show_in_tooltip`: boolean (default: `true`)
        -   If `true`, an 'Unbreakable' line will be included in the tooltip
        -   Replaces 3rd bit of `HideFlags` tag
    -   e.g. `unbreakable={}`, `unbreakable={show_in_tooltip:false}`

##### `minecraft:enchantments`

-   Stores a list of enchantments and their levels on an item
-   Replaces `Enchantments` tag
-   Format: object with fields
    -   `levels`: object of enchantment (id string) to level (integer \[0; 255\])
    -   `show_in_tooltip`: boolean (default: `true`)
        -   If `false`, no enchantments will be shown in the item tooltip
        -   Replaces 1st bit of `HideFlags` tag
    -   e.g. `enchantments={levels:{'minecraft:protection':2},show_in_tooltip:false}`
    -   Alternatively, can be defined as an inline map of enchantment id to level
        -   e.g. `enchantments={sharpness:1}`
-   If not set, has an implicit default value of: `{levels:{}}`
-   Can be modified with the `set_enchantments`, `enchant_randomly`, and `enchant_with_levels` loot functions

##### `minecraft:stored_enchantments`

-   Stores list of enchantments and their levels for an Enchanted Book
-   Unlike `minecraft:enchantments`, the effects provided by enchantments do not apply from this component
-   Replaces `StoredEnchantments` tag on Enchanted Books
-   Format: same as `minecraft:enchantments`
    -   `show_in_tooltip` value replaces 6th bit of `HideFlags` tag
-   On Enchanted Books, has an implicit default value of: `{levels:{}}`

##### `minecraft:custom_name`

-   Custom name override for an item (as set by renaming with an Anvil)
-   Replaces `display.Name` tag
-   Format: JSON chat component string
    -   e.g. `custom_name='{"text": "This item is renamed!", "color": "red"}'`
-   Can be modified with the `set_name` loot function

##### `minecraft:lore`

-   Additional lines to include in an item's tooltip
-   Replaces `display.Lore` tag
-   Format: list of JSON chat component strings (max: 256 entries)
    -   e.g. `lore=['{"text": "The cake is a lie!"}']`
-   If not set, has an implicit default value of: `[]`
-   Can be modified with the `set_lore` loot function

##### `minecraft:can_break`

-   Controls which blocks a player in Adventure mode can break with this item
-   Replaces `CanDestroy` tag
    -   These were previously stored as flat strings, but now use the more flexible block predicate format already used in loot tables and advancements
-   Format: object with fields
    -   `predicates`: list of block predicates
        -   `blocks`: block, list of blocks, or hash-prefixed block tag
        -   `nbt`: block entity NBT to match
        -   `state`: map of state property key to values to match
    -   `show_in_tooltip`: boolean (default: `true`)
        -   Replaces 4th bit of `HideFlags` tag
    -   e.g. `can_break={predicates:[{blocks:'minecraft:furnace',state:{facing:'north'}]}`
    -   Alternatively, can be defined as a single block predicate
        -   e.g. `can_break={blocks:'minecraft:stone'}`

##### `minecraft:can_place_on`

-   Controls which blocks a player in Adventure mode can place on with this item
-   Replaces `CanPlaceOn` tag
-   Format: object with fields
    -   `predicates`: list of block predicates
        -   Same as `can_break.predicates`
    -   `show_in_tooltip`: boolean (default: `true`)
        -   Replaces 5th bit of `HideFlags` tag
    -   e.g. `can_place_on={predicates:[{blocks:'minecraft:furnace',state:{facing:'north'}]}`
    -   Alternatively, can be defined as a single block predicate
        -   e.g. `can_place_on={blocks:'minecraft:stone'}`

##### `minecraft:dyed_color`

-   Represents a color applied to a dyeable item (in the `#minecraft:dyeable` item tag)
-   Replaces `display.color` tag
-   Format: object with fields
    -   `rgb`: integer, RGB value
    -   `show_in_tooltip`: boolean (default: `true`)
        -   Replaces 7th bit of `HideFlags` tag
    -   e.g. `dyed_color={rgb:16711680}`
    -   Alternatively, can be defined as an inline integer RGB value
        -   e.g. `dyed_color=16711680`

![A very large Sunny is walking up 3-block-tall steps in a Cherry Grove biome, making use of the step height and scale attributes.](https://launchercontent.mojang.com/v2/images/1.20.5tech6thumbnail.jpg)

##### `minecraft:attribute_modifiers`

-   Holds attribute modifiers applied to any item
-   Replaces `AttributeModifiers` tag
-   Format: object with fields (default: `{modifiers:[]}`)
    -   `modifiers`: list of attribute modifiers
        -   `type`: attribute id
            -   Replaces `AttributeName`
        -   `slot`: one of:
            -   `any` (default)
            -   `hand`: either in main or offhand (new)
            -   `armor`: any armor slot (new)
            -   `mainhand`
            -   `offhand`
            -   `head`
            -   `chest`
            -   `legs`
            -   `feet`
            -   `body` (new)
            -   Modifiers will only apply when the item is equipped in the specified slot
            -   Replaces `Slot`
        -   `uuid`: uuid, uniquely represents this modifier
            -   Only one modifier can exist with the same id
            -   Replaces `UUID`
        -   `name`: string, human-readable name
            -   Replaces `Name`
        -   `amount`: double, number of units to modify this attribute (controlled by `operation`)
            -   Replaces `Amount`
        -   `operation`: one of:
            -   `add_value` (was `0`): Adds `amount` to the attribute
            -   `add_multiplied_base` (was `1`): Adds `amount` \* base value to the attribute
            -   `add_multiplied_total` (was `2`): Adds `amount` \* total value (from all previous modifiers) to the attribute
            -   Replaces `Operation` with integer ids
    -   `show_in_tooltip`: boolean (default: `true`)
        -   Replaces 2nd bit of `HideFlags` tag
    -   e.g. `attribute_modifiers={modifiers:[{type:'minecraft:generic.scale',uuid:[1,2,3,4],name:'Big!',amount:1.0,operation:'add_multiplied_base'}]}`
    -   Alternatively, can be defined as a direct list of modifiers
        -   e.g. `attribute_modifiers=[{type:'generic.scale',uuid:[1,2,3,4],name:'Big!',amount:1.0,operation:'add_multiplied_base'}]`
-   If not set, has an implicit default value based on the item type's default attributes (e.g. attack damage for weapons)
-   Can be modified with the `set_attributes` loot function

##### `minecraft:charged_projectiles`

-   Holds all projectiles that have been loaded into a Crossbow
-   If not present, the Crossbow is not charged
-   Replaces `Charged` and `ChargedProjectiles` tags
-   Format: list of item stacks
    -   Cannot store empty/air items
    -   e.g. `charged_projectiles=[{id:'minecraft:arrow'}]`
    -   No longer restricted to 3 entries
-   Can be modified with the `modify_contents` and `set_contents` loot functions

##### `minecraft:intangible_projectile`

-   Marks that a projectile item would be intangible when fired (i.e. can only be picked up by a creative mode player)
-   Only set when items are inside a Crossbow's `charged_projectiles` component
-   Format: empty object
    -   e.g. `intangible_projectile={}`

##### `minecraft:bundle_contents`

-   Holds all items stored inside of a Bundle
-   If removed, items cannot be added to the Bundle
-   Replaces `Items` tag
-   Format: list of item stacks
    -   Cannot store empty/air items
    -   e.g. `bundle_contents=[{id:'minecraft:poisonous_potato'}]`
-   On Bundles, has an implicit default value of: `[]`
-   Can be modified with the `modify_contents` and `set_contents` loot functions

##### `minecraft:map_color`

-   Represents the tint of the decorations on the Filled Map item
-   Replaces `display.MapColor` tag
-   Format: integer, RGB value
    -   e.g. `map_color=16711680`
-   On Filled Maps, has an implicit default value of: `4603950`

##### `minecraft:map_decorations`

-   Holds a list of markers to be placed on a Filled Map (used for Explorer Maps)
-   Replaces `Decorations` tag
-   Format: map of unique decoration id to decorations
    -   `type`: one of:
        -   `player` (was `0`)
        -   `frame` (was `1`)
        -   `red_marker` (was `2`)
        -   `blue_marker` (was `3`)
        -   `target_x` (was `4`)
        -   `target_point` (was `5`)
        -   `player_off_map` (was `6`)
        -   `player_off_limits` (was `7`)
        -   `mansion` (was `8`)
        -   `monument` (was `9`)
        -   `banner_white` (was `10`)
        -   `banner_orange` (was `11`)
        -   `banner_magenta` (was `12`)
        -   `banner_light_blue` (was `13`)
        -   `banner_yellow` (was `14`)
        -   `banner_lime` (was `15`)
        -   `banner_pink` (was `16`)
        -   `banner_gray` (was `17`)
        -   `banner_light_gray` (was `18`)
        -   `banner_cyan` (was `19`)
        -   `banner_purple` (was `20`)
        -   `banner_blue` (was `21`)
        -   `banner_brown` (was `22`)
        -   `banner_green` (was `23`)
        -   `banner_red` (was `24`)
        -   `banner_black` (was `25`)
        -   `red_x` (was `26`)
        -   `village_desert` (was `27`)
        -   `village_plains` (was `28`)
        -   `village_savanna` (was `29`)
        -   `village_snowy` (was `30`)
        -   `village_taiga` (was `31`)
        -   `jungle_temple` (was `32`)
        -   `swamp_hut` (was `33`)
        -   `trial_chambers` (new)
        -   Replaces `type` byte with numeric ids
    -   `x`: double, world coordinate
    -   `z`: double, world coordinate
    -   `rotation`: float, clockwise rotation from north in degrees
        -   Replaces `rot` double
    -   e.g. `map_decorations={'Some marker':{type:'target_x',x:123.0,z:-45.0,rotation:0.0f}}`
-   On Filled Maps, has an implicit default value of: `{}`

##### `minecraft:map_id`

-   References the shared map state holding map contents and markers for a Filled Map
-   Replaces `map` tag
-   Format: integer id
    -   e.g. `map_id=1`

##### `minecraft:custom_model_data`

-   Can be used to replace the models of items by selecting for the `minecraft:custom_model_data` property in the item model
-   Replaces `CustomModelData` tag
-   Format: integer value
    -   e.g. `custom_model_data=43`
-   Can be modified with the `set_custom_model_data` loot function

##### `minecraft:potion_contents`

-   Holds the contents of a potion (Potion, Splash Potion, Lingering Potion), or potion applied to an item (Tipped Arrow)
-   Replaces `Potion`, `CustomPotionColor`, and `custom_potion_effects` tags
-   Format: object with fields
    -   `potion`: potion id (optional)
        -   The potion type in this item: the item will inherit all effects from this
    -   `custom_color`: integer, RGB value (optional)
        -   Overrides the visual color of the potion
    -   `custom_effects`: list of effect instances (default: `[]`)
        -   Additional list of custom effects that this item should apply, that may not be representable by an existing potion
    -   e.g. `potion_contents={potion:'minecraft:invisibility',custom_color:16711680}`
    -   Alternatively, can be defined as a single potion ID
        -   e.g. `potion_contents="invisibility"`
-   On Potion or Tipped Arrow items, has an implicit default value of: `{}`
-   Can be modified with the `set_potion` loot function

##### `minecraft:writable_book_content`

-   Holds the contents in a Book and Quill
-   Replaces `pages` and `filtered_pages` tags
    -   The pages list objects directly, with `{raw:'...'}` wrapping
    -   `filtered_pages` are pulled by index keys into the relevant page entry under the `filtered` field
-   Format: object with fields
    -   `pages`: list (max: 100 entries) of either:
        -   object with fields
            -   `raw`: string, page plain text contents
            -   `filtered`: string, filtered page contents (optional)
                -   If specified, players with chat filter enabled will see this page instead of `raw`
        -   or: string, page plain text contents
    -   e.g. `writable_book_content={pages:['Hello world!']}` or `writable_book_content={pages:[{raw:'Hello world!'}]}`
-   On Book and Quill, has an implicit default value of: `{pages:[]}`
-   Can be modified with the `set_writable_book_pages` loot function

##### `minecraft:written_book_content`

-   Holds the contents and metadata of a Written Book
-   Replaces `pages`, `filtered_pages`, `title`, `filtered_title`, `author`, `generation`, and `resolved` tags
-   Format: object with fields
    -   `pages`: list of filtered chat components
        -   Same format as `writable_book_contents` pages, except uses JSON chat component strings which can be formatted
    -   `title`: filtered string (same format as pages)
    -   `author`: string, player name
    -   `generation`: integer \[0; 3\]
        -   The number of times this book has been copied (`0` = original)
    -   `resolved`: boolean
        -   `true` if the chat components in this book have already been resolved (entity selectors, scores substituted)
        -   If `false`, it will be resolved when opened by a player
    -   e.g. `written_book_content={pages:['"Hello world!"'],title:{raw:'"A delightful read"'},author:'Herobrine',generation:1,resolved:true}`
-   Can be modified with the `set_written_book_pages` and `set_book_cover` loot functions

##### `minecraft:trim`

-   Holds the trims applied to an item
    -   Presence of the component is no longer restricted by the `#minecraft:trimmable_armor` item tag (although, this tag is still used for recipes)
-   Replaces `Trim` tag of the same format
-   Format: object with fields
    -   `pattern`: pattern id (or inline pattern)
    -   `material`: material id (or inline material)
    -   `show_in_tooltip`: boolean (default: `true`)
        -   Replaces 8th bit of `HideFlags` tag
    -   e.g. `trim={pattern:'minecraft:silence',material:'minecraft:redstone'}`

##### `minecraft:suspicious_stew`

-   Holds the effects that will be applied when consuming Suspicious Stew
-   Replaces `effects` tag of the same format
-   Format: list of effect objects with fields
    -   `id`: effect id
    -   `duration`: integer, tick count (default: `160`)
    -   e.g. `suspicious_stew=[{id:'minecraft:poison'}]`
-   On Suspicious Stew, has an implicit default value of: `[]`
-   Can be modified with the `set_stew_effect` loot function

##### `minecraft:hide_additional_tooltip`

-   If present, disables 'additional' tooltip part which comes from the item type
-   Replaces 6th bit of `HideFlags` tag
-   Format: empty object
    -   e.g. `hide_additional_tooltip={}`

##### `minecraft:debug_stick_state`

-   Stores the selected block state properties used by a Debug Stick
-   Replaces `DebugProperty` tag
-   Format: map of block id to block property name
    -   e.g. `debug_stick_state={'minecraft:turtle_egg':'eggs','minecraft:furnace':'facing'}`
-   On Debug Stick, has an implicit default value of: `{}`

##### `minecraft:entity_data`

-   Stores unstructured NBT data to apply to an entity when using an item that spawns an entity, such as a Spawn Egg or Armor Stand
-   Replaces previous `EntityTag` tag, with same behavior
-   Format: object with fields
    -   Must contain an `id` field with the entity type
    -   Any additional fields will be merged into the entity when spawned
    -   e.g. `entity_data={id:'minecraft:pig',Health:1.0f}`

##### `minecraft:bucket_entity_data`

-   Stores unstructured NBT data to apply to an entity when placed from a bucket
-   Replaces `NoAI`, `Silent`, `NoGravity`, `Glowing`, `Invulnerable`, `Health`, `Age`, `Variant`, `HuntingCooldown`, and `BucketVariantTag` tags
-   Format: object with fields
    -   Can contain any of the above listed fields, which will be applied to the entity when placed
    -   e.g. `bucket_entity_data={NoAI:1,Age:43}`
-   On bucketed mob items, has an implicit default value of: `{}`

##### `minecraft:instrument`

-   Holds the instrument type used by a Goat Horn
-   Replaces `instrument` tag of same format
-   Format: instrument id
    -   e.g. `instrument='minecraft:ponder_goat_horn'`
-   Can be modified with the `set_instrument` loot function

##### `minecraft:recipes`

-   List of recipes that should be unlocked when using the Knowledge Book item
-   Replaces `Recipes` tag of same format
-   Format: list of recipe ids
    -   e.g. `recipes=['minecraft:acacia_boat','minecraft:anvil']`
-   On Knowledge Book, has an implicit default value of: `[]`

##### `minecraft:lodestone_tracker`

-   If present, specifies that the Compass is a Lodestone Compass
-   Replaces `LodestonePos`, `LodestoneDimension`, and `LodestoneTracked` tags
-   Format: object with fields
    -   `target`: object with fields (optional)
        -   `pos`: integer array of x, y, and z
        -   `dimension`: dimension id
        -   If not present, the compass will spin
    -   `tracked`: boolean (default: `true`)
        -   If `true`, when the Lodestone at the target position is removed, the `target` field will be removed
    -   e.g. `lodestone_tracker={target:{pos:[13,64,-43],dimension:'minecraft:the_nether'}}`

##### `minecraft:firework_explosion`

-   Stores the explosion crafted in a Firework Star
-   Replaces `Explosion.Type`, `Explosion.Colors`, `Explosion.FadeColors`, `Explosion.Trail`, and `Explosion.Flicker` tags
-   Format: object with fields
    -   `shape`: one of
        -   `small_ball` (was `0`)
        -   `large_ball` (was `1`)
        -   `star` (was `2`)
        -   `creeper` (was `3`)
        -   `burst` (was `4`)
        -   Replaces `Type` numeric ids
    -   `colors`: integer array, RGB values (default: `[]`)
        -   List of initial particle colors, randomly selected from
    -   `fade_colors`: integer array, RGB values (default: `[]`)
        -   List of particle colors to fade to, randomly selected from
    -   `has_trail`: boolean (default: `false`)
    -   `has_twinkle`: boolean (default: `false`)
        -   Renamed from `Flicker` tag
    -   e.g. `firework_explosion={shape:'large_ball',colors:[16711680],has_trail:true}`
-   Can be modified with the `set_firework_explosion` loot function

##### `minecraft:fireworks`

-   Stores all explosions crafted into a Firework Rocket, as well as flight duration
-   Replaces `Fireworks.Explosions` and `Fireworks.Flight` tags
-   Format: object with fields
    -   `explosions`: list of explosions (max: 256 entries)
        -   Same format as `minecraft:firework_explosion` component
    -   `flight_duration`: unsigned byte, number of gunpowder in this rocket
    -   e.g. `fireworks={explosions:[{shape:'large_ball',colors:[16711680],has_trail:true}],flight_duration:2}`
-   On Firework Rocket, has an implicit default value of: `{explosions:[],flight_duration:1}`
-   Can be modified with the `set_fireworks` loot function

##### `minecraft:profile`

-   Controls the skin displayed on a Player Head
-   Copied to Player Head block when placed
-   Replaces `SkullOwner` tag
-   If only a `name` is specified, it will be resolved into the corresponding player ID and skin data
-   Unlike `SkullOwner` which only supported resolution by name, if only `id` is specified, the profile and skin will be resolved from this UUID
-   Format: object with fields
    -   `name`: string, player profile name (optional)
        -   Must be a valid player name (max 16 characters, no spaces, or special characters)
        -   As this could exist in previous data formats, but would not resolve to a skin, this is replaced by the `item_name` component which is persisted when placed and broken
    -   `id`: uuid, player profile id (optional)
    -   `properties`: list of properties (optional)
        -   `name`: string, property name (e.g. `textures`)
        -   `value`: string (base64 encoded texture data)
        -   `signature`: string (optional)
    -   e.g. `profile={name:'MHF_Sheep'}`
    -   Alternatively, can be defined as a simple player profile name string
        -   e.g. `profile='MHF_Sheep'`
-   Can be modified with the `fill_player_head` loot function

##### `minecraft:note_block_sound`

-   Controls the sound played by a Player Head when placed on a Note Block
-   Copied to Player Head block when placed
-   Replaces `BlockEntityTag.note_block_sound` tag
-   Format: sound event id
    -   e.g. `note_block_sound='minecraft:ambient.cave'`

##### `minecraft:base_color`

-   Stores the base color for a Shield
-   Replaces `BlockEntityTag.Base` tag
-   Format: one of
    -   `white` (was `0`)
    -   `orange` (was `1`)
    -   `magenta` (was `2`)
    -   `light_blue` (was `3`)
    -   `yellow` (was `4`)
    -   `lime` (was `5`)
    -   `pink` (was `6`)
    -   `gray` (was `7`)
    -   `light_gray` (was `8`)
    -   `cyan` (was `9`)
    -   `purple` (was `10`)
    -   `blue` (was `11`)
    -   `brown` (was `12`)
    -   `green` (was `13`)
    -   `red` (was `14`)
    -   `black` (was `15`)
    -   e.g. `base_color='magenta'`

##### `minecraft:banner_patterns`

-   Stores the additional patterns applied to a Banner or Shield
-   Copied to Banner block when placed
-   Replaces `BlockEntityTag.Patterns` tag
-   Format: list of banner patterns
    -   `pattern`: banner pattern registry id
        -   Replaces short banner pattern code in `Patterns[].Pattern`
    -   `color`: dye color name
        -   Replaces integer dye color id in `Patterns[].Color`
    -   e.g. `banner_patterns=[{pattern:'minecraft:stripe_top',color:'red'}]`
-   On Banners and Shields, has an implicit default value of: `[]`
-   Can be modified with the `set_banner_pattern` loot function

##### `minecraft:pot_decorations`

-   Stores the Sherds applied to each side of a Decorated Pot
-   Copied to Decorated Pot block when placed
-   Replaces `BlockEntityTag.sherds` tag of same format
-   Format: list of sherd item ids
    -   e.g. `['arms_up_pottery_sherd','angler_pottery_sherd','danger_pottery_sherd','shelter_pottery_sherd']`
-   On Decorated Pots, has an implicit default value of: `['minecraft:brick','minecraft:brick','minecraft:brick','minecraft:brick']`

##### `minecraft:container`

-   Holds the contents of container blocks (Chests, Shulker Boxes) in item form
-   Copied into container block when placed
-   Replaces `BlockEntityTag.Items` tag
-   Format: list of slots
    -   `slot`: integer \[0; 255\], representing a slot in the container
    -   `item`: item stack
    -   e.g. `container=[{slot:7,item:{id:'diamond_pickaxe',components:{'minecraft:unbreakable':{}}}}]`
-   On container blocks, has an implicit default value of: `[]`
-   Can be modified with the `modify_contents` and `set_contents` loot functions

##### `minecraft:bees`

-   Holds the bees inside a Beehive or Bee Nest
-   Copied to Beehive or Bee Nest block when placed
-   Replaces `BlockEntityTag.Bees` tag
-   Format: list of bees
    -   `entity_data`: map of string to string
        -   `id`: entity id
        -   The remainder tags merged into the Bee when spawned
    -   `ticks_in_hive`: integer
    -   `min_ticks_in_hive`: integer
    -   e.g: `bees=[{entity_data:{id='minecraft:bee'},ticks_in_hive:3,min_ticks_in_hive:10}]`
-   On Beehive and Bee Nest, has an implicit default value of: `[]`

##### `minecraft:lock`

-   Holds the lock state of a container-like block
    -   An item with a custom name of the same value must be used to open this container
-   Copied to container block when placed
-   Replaces `BlockEntityTag.Lock` tag
-   Format: string value, representing the key
    -   e.g: `lock='hunter2'`

##### `minecraft:container_loot`

-   Holds the unresolved loot table and seed of a container-like block
-   Copied to container block when placed
-   Replaces `BlockEntityTag.LootTable` and `BlockEntityTag.LootTableSeed` tags
-   Format: object with fields
    -   `loot_table`: loot table id
    -   `seed`: long, pseudorandom seed to resolve the loot table with (optional)
        -   If not specified, or `0`, the seed will be picked randomly when the loot table is evaluated
    -   e.g. `container_loot={loot_table:'minecraft:chests/buried_treasure',seed:123}`
-   Can be modified with the `set_loot_table` loot function

##### `minecraft:block_entity_data`

-   Stores unstructured NBT data to apply to a block entity when placing a block such as a Chest or Furnace
-   Replaces previous `BlockEntityTag` tag, with same behavior
-   Any block entity data moved into a dedicated item component is removed from this tag
-   For Command Blocks, Lecterns, Signs, and Spawners: this tag will not be copied unless the player is an operator
-   Format: object with fields
    -   Must contain an `id` field with the block entity type
    -   Any additional fields will be merged into the block entity when placed
    -   e.g. `block_entity_data={id:'minecraft:chest',Items:[{Slot:1,item:'minecraft:diamond'}]}`

##### `minecraft:block_state`

-   Holds block state properties to apply when placing a block
-   Replaces `BlockStateTag` tag
-   Format: map of property key to property value
    -   All property values, including integer and boolean types, must be represented as strings
    -   e.g: `block_state={eggs:'10'}`

### New Item Stack Components

These are new components that did not exist in the previous item tag, and support new features and use-cases.

##### `minecraft:enchantment_glint_override`

-   Overrides the enchantment glint effect on an item
-   Can be used in the same way that an invalid `Enchantments` tag would previously behave to add a glint
-   Format: boolean
    -   If `true`, an item without an enchantment glint will display a glint
    -   If `false`, an item with a glint will not display this glint (either from enchantments or intrinsic properties of the item)
    -   e.g: `enchantment_glint_override=true`

![A player is eating a Stick by using an attached food component.](https://launchercontent.mojang.com/v2/images/1.20.5tech3thumbnail.jpg)

##### `minecraft:food`

-   When present, this item will behave as if a food (can be eaten)
-   Format: object with fields
    -   `nutrition`: non-negative integer, number of food points to restore when eaten
    -   `saturation`: float, amount of saturation to restore when eaten
    -   `can_always_eat`: boolean (default: `false`)
        -   If `true`, this food can be eaten even if not hungry
    -   `eat_seconds`: float (default: `1.6`)
        -   The number of seconds that it takes to eat this food item
    -   `effects`: list of effects to apply when eaten (default: `[]`)
        -   `effect`: effect instance (same format as `custom_effects` in `minecraft:potion_contents` component)
        -   `probability`: float between 0 and 1, chance for the effect to be applied (default: `1`)
    -   e.g: `food={nutrition:4,saturation:0.1}`
-   On food items, has an implicit default value for that food type

##### `minecraft:max_stack_size`

-   Controls the maximum stacking size of this item
-   Values greater than 1 are mutually exclusive with the `max_damage` component
-   Format: integer between 1 and 99
    -   e.g. `max_stack_size=4`
-   Has an implicit default value according to the item type (usually `64`)

##### `minecraft:max_damage`

-   Controls the maximum amount of damage than an item can take
-   Mutually exclusive with the `max_stack_size` component greater than 1
-   Requires that the `damage` component is also present on the item
-   If not present, the item cannot be damaged
-   Format: positive integer
    -   e.g. `max_damage=123`
-   Has an implicit default value for damageable items

##### `minecraft:tool`

-   Controls the behavior of the item as a tool
-   Format: object with fields
    -   `rules`: list of rule entries to apply in order
        -   `blocks`: single block, list of blocks, or `#`\-prefixed block tag to match
        -   `speed` (optional): float, overrides the mining speed if present and matched
        -   `correct_for_drops` (optional): boolean, overrides whether this tool is considered 'correct' if present and matched
            -   `true` will cause the block to mine at its most efficient speed, and drop items if the targeted block requires that
    -   `default_mining_speed`: float, mining speed to use if no rules match and override mining speed (default: `1.0`)
    -   `damage_per_block`: non-negative int, amount of durability to remove each time a block is mined with this tool
    -   e.g. `tool={rules:[{blocks:"#mineable/pickaxe",speed:4.0,correct_for_drops:true}]}`
-   Vanilla tool items will have an implicit default value based on their tier and tool type

##### `minecraft:hide_tooltip`

-   If present, it will completely hide whole item tooltip (that includes item name)
-   Tooltip will still be visible and searchable in creative mode
-   Format: empty object

##### `minecraft:item_name`

-   When present, replaces default item name with contained chat component
-   Differences from `custom_name`:
    -   `item_name` can't be changed or removed in Anvil
    -   `item_name` is not styled with italics when displayed to player
    -   `item_name` does not show labels where applicable (for example: banner markers, names in item frames)
-   Can be modified with the `set_name` loot function

##### `minecraft:fire_resistant`

-   If present, this item will not burn in fire
-   Format: empty object
    -   e.g. `fire_resistant={}`
-   Has an implicit default value for fire-resistant items such as Netherite

##### `minecraft:rarity`

-   Controls the color of the item name
-   Format: enumerated value, one of:
    -   `common` (default): white name, or aqua when enchanted
    -   `uncommon`: yellow name, or aqua when enchanted
    -   `rare`: aqua name, or light purple when enchanted
    -   `epic`: light purple name
    -   e.g. `rarity=rare`
-   Special items such as Golden Apples have an implicit default value

##### `minecraft:ominous_bottle_amplifier`

-   Controls the amplifier amount for an Ominous Bottle's Bad Omen effect
-   Format: integer between 0 and 4
    -   e.g. `ominous_bottle_amplifier=3`
-   Can be modified with the `set_ominous_bottle_amplifier` loot function

#### Saved Item Stack Format

-   Along with format changes due to components, the structures of item stacks on disk and in data packs have been updated for consistency
-   Previous `id` (string) and `Count` (byte) fields have been replaced with `id` (namespaced string) and `count` (integer) fields
    -   This format is additionally applied to the `icon` field in advancements, items in chat component hover events, and the `result` field in smelting recipes (`result` and `count` are no longer inlined)
-   The `count` field is optional (defaults to `1` if not specified)
    -   The field will however always be stored by the game
-   The `tag` field has been removed, and any remaining contents will end up in the `minecraft:custom_data` component when upgrading
-   A new `components` field stores all components attached to an item
    -   Format: map of component id to component value (varies by component id)
        -   e.g. `{..., components: {'minecraft:damage': 12}}`
        -   Components with a `!` prefix (e.g. `"!minecraft:damage": {}`) will cause this component to be removed
    -   Components equal to their default value on the target item will not be stored
-   The item stack format no longer represents empty stacks (`air` item, or `count` 0)
    -   Instead, in places that support it, the field should be omitted
    -   In some cases, such as lists of stacks (e.g. `HandItems` in living entities), an empty map (`{}`) is used to represent empty stacks

### Entity & Block Entity Data Formats

-   Non-default components on item stacks are now stored when a block entity is placed from that item stack
-   The storage format of block positions in entities and block entities has been updated
-   Added `body_armor_item` and `body_armor_drop_chance` to all entities that currently have `HandItems` and `ArmorItems`, and handle the same way as `HandItems` and `ArmorItems`
-   Handling of Horses `ArmorItem`, Llamas `DecorItem`, and Wolf's `armor` has been changed to use `body_armor_item` and `body_armor_drop_chance` instead
-   Villager Trades can be configured to accept only undamaged items by selecting for `'minecraft:damage': 0`
    -   By default, if no components are specified, any item will be accepted (similar to `components` field in item predicates)
-   Potion effects stored in items or entities will no longer encode their default values
    -   `amplifier`: `0`
    -   `duration`: `0`
    -   `ambient`: `false`
    -   `show_particles`: `true`
-   `FactorCalculationData` has been removed from mob effect instance tags
-   Tipped Arrows no longer store their applied potion effects
    -   This is instead fetched from their held `item`
-   Area Effect Clouds now store potions in the same format as the `minecraft:potion_contents` component in a `potion_contents` field:
    -   `Potion` -> `potion_contents.potion`
    -   `Color` -> `potion_contents.custom_color`
    -   `effects` -> `potion_contents.custom_effects`
-   Banners now store applied patterns in the same format as the `minecraft:banner_patterns` component in a `patterns` field:
    -   `Patterns[].Pattern` (string short id) -> `patterns[].pattern` (string pattern registry id)
    -   `Patterns[].Color` (integer dye id) -> `patterns[].color` (string dye name)
-   Beehive format has also been updated:
    -   `Bees[].EntityData` -> `bees[].entity_data`
    -   `Bees[].TicksInHive` -> `bees[].ticks_in_hive`
    -   `Bees[].MinOccupationTicks` -> `bees[].min_ticks_in_hive`
    -   `FlowerPos` -> `flower_pos`
-   The `SkullOwner` and `ExtraType` fields in Player Head blocks have been replaced with a `profile` field, with the same format as the item component
-   Player Head blocks now store a `custom_name` tag, which will be copied to and from the item form when broken or placed
-   Added optional `equipment` field to the spawn data present in the `SpawnPotentials` of Monster Spawners and `spawn_potentials` of Trial Spawner configs
    -   If present, rolled items from the specified loot table will be equipped to the mob that spawns
    -   Format: object with fields
        -   `loot_table` - A loot table used to generate the equipment
        -   `slot_drop_chances` - An optional map of equipment slot to specified drop chance
            -   Can also be a single value instead of a list to apply to all slots: e.g. `slot_drop_chances: 0.0f` will apply a chance of 0% to all slots
    -   e.g. `equipment: {loot_table: "minecraft:equipment/trial_chamber", slot_drop_chances: {"head": 0.0f, "chest": 0.25f, "legs": 1.0f, "feet": 0.25f}}`

#### Components on Block Entities

Non-default components on item stacks containing block items are now stored on block entities when placed.

-   Component removals from defaults are currently not preserved
-   Placing and breaking non-block entity blocks remains unchanged - nothing is preserved
-   Does not automatically cause preserved components to be restored on drops - this requires addition of `copy_components` function to loot table
-   Components are stored in field called `components`
    -   Some components (like `custom_name`) are still handled by legacy serialization, which means they might not be present in there
    -   Contains map of component id to component value

#### Block Positions

-   All block positions are now stored as an array of 3 integers instead of a map of `X`, `Y`, and `Z` for consistency
-   `FlowerPos` and `HivePos` in Bees have been renamed to `flower_pos` and `hive_pos`
-   `FlowerPos` in Beehives has been renamed to `flower_pos`
-   `BeamTarget` in End Crystals has been renamed to `beam_target`
-   `Leash` in all leashable entities has been renamed to `leash`
-   `PatrolTarget` in patrolling mobs has been renamed to `patrol_target`
-   `ExitPortal` in End Gateways has been renamed to `exit_portal`
-   `WanderTarget` in Wandering Traders has been renamed to `wander_target`

#### Vault Block Entity

-   Added Vault block (experimental) with a variety of NBT elements which can be configured for custom content:
-   Fields:
    -   `config`
        -   `loot_table` - The loot table that will be ejected upon being unlocked
            -   Default value: `"minecraft:chests/trial_chambers/reward"`
        -   `activation_range` - The range any player who hasn't unlocked the Vault must be within for it to open its keyhole
            -   Default value: `4`
        -   `deactivation_range` - The range all viable players must be outside of for the Vault to close its keyhole
            -   Default value: `4.5`
        -   `key_item` - An Item Stack that is required to unlock the Vault
            -   The player must be holding an item with the exact components and count
            -   If the field is not present, the Vault cannot be unlocked
        -   `override_loot_table_to_display` - An optional loot table which will be used for displaying items inside the cage instead of results from the config's `loot_table`
            -   Default value: No value
    -   `shared_data`
        -   `connected_particles_range` - The range players who have not unlocked the Vault must be within before particles will flow from them
            -   Default value: `4.5`

### Commands

-   Updated syntax of items and item predicates in commands
-   Added slot names for ranges, like `container.*`
-   `playsound` command can now be used without specifying the player (assuming `@s`) and without specifying the mixer (assuming `master`)
-   Command arguments that previously accepted namespaced ids of loot tables, modifiers and predicates can now also accept inline definitions
-   Added `execute if|unless items` to check and count items
-   Potion effect amplifiers are now restricted between 0 and 255
    -   The former behavior of effects such as Jump Boost, Levitation, and Mining Fatigue over 127 has been replaced with new attributes
-   Added the `transfer` command
-   The maximum length of a command in a function (including macro expansions) can no longer exceed 2,000,000 characters

#### Item Syntax

-   Commands such as `/give`, `/item`, `/loot` use an updated item syntax
-   Components can now be specified after the item name in square brackets
    -   Components are assigned with an `=` (e.g. `wooden_pickaxe[damage=23]`)
    -   Components are comma-separated (e.g. `netherite_hoe[damage=5,repair_cost=2]`)
-   Component types will be autocompleted, but possible values of them will not
-   Values will however be validated, and the command will fail to parse if the component is improperly specified
    -   e.g. `/give @s wooden_pickaxe[damage=-34]` is not valid
-   The previous NBT syntax (`{...}`) has been removed, and replaced with `custom_data` assignment
    -   e.g. `/give @s stick{foo:'bar'}` becomes `/give @s stick[custom_data={foo:'bar'}]`
-   Modifier operations in the `/attribute` command have been renamed:
    -   `add` -> `add_value`
    -   `multiply_base` -> `add_multiplied_base`
    -   `multiply` -> `add_multiplied_total`

#### Added `execute if|unless items`

-   `execute if|unless items <source> <slots> <item_predicate>` command can be used to count items
    -   `<source>` is the same as one used in `item` command, i.e.
        -   `block <x> <y> <z>`
        -   `entity <target>` (selector can return multiple entities)
    -   `<slots>` can accept single slot (like `container.0`) or a range (like `container.*`)
    -   `<item_predicate>` is the same as item predicate in `clear` command
-   If used alone, it will return the total number of items in stacks that match predicates

#### Item Predicate Argument

The item predicate syntax (used in `execute if|unless items` and `clear` commands) has been significantly expanded.

-   The general syntax is: `<type> [comma-separated list of <test>]`
-   `<type>` can be one of:
    -   item id
    -   item tag id prefixed with `#`
    -   `*` to match any item
-   `<test>` can have one of 3 forms:
    -   `<component_id>=<value>` - match exact value of component
        -   `<value>` is a representation of component value in SNBT format (same as in `item give` argument)
        -   Every specified component must be present on the target item, and have an exactly equal parsed value
        -   Components with defaults (e.g. `damage=0` by default) will be assumed to exist on the target item if not specified
            -   As such, `/clear @s diamond_pickaxe[damage=0]` will match only undamaged Diamond Pickaxes
            -   On the other hand, `/clear @s diamond_pickaxe` will match any Diamond Pickaxe, irrespective of damage
        -   Exact matching of component values applies even for the `minecraft:custom_data` component
    -   `<component_id>` - check if component exists
    -   `<predicate_id>~<value>` - check item sub-predicate
        -   `<value>` is a representation of item sub-predicate in SNBT format (but otherwise the same as those used for advancement and loot table JSON files)
        -   Example: `*[damage~{durability:{min:3}}]` will match any stack with at least 3 uses left
-   The special name `minecraft:count` can be used for matching the stack size
    -   `count=<positive int>` will pass only when the stack size equals the given value
    -   `count~<int range>` will pass when the stack size is in the specified range
        -   Example: `*[count~{max:2}]` will match any stack with count <= 2
    -   `count` will always pass
-   Any `<test>` entry can be negated by prefixing with `!`
    -   Example: `*[!count=1]` will match any stack that has count other than 1
-   `<test>` elements can be also joined with `|` to check multiple alternatives
    -   Example: `*[!damage|damage=0]` will look for items without damage component or with `0` damage
-   The syntax for NBT partial matching with custom data (`{}`) has been replaced by the `custom_data` predicate
    -   So `stick{a:2}` becomes `stick[custom_data~{a:2}]`
    -   This predicate uses the pre-existing NBT partial match behavior
        -   This requires that all tags specified in the predicate are present on the target item, but additional ones may be ignored
        -   Lists in the target must contain all items specified in the predicate, but additional may be present and order is ignored

#### Slot names

-   Slot names (used in `item` commands and `slots` entity predicates) now include slot ranges
-   Unless specified, existing commands can still only work on single slots
-   Added new slot ranges:
    -   `container.*` - contains `container.0` to `container.53`
    -   `hotbar.*` - contains `hotbar.0` to `hotbar.8`
    -   `inventory.*` - contains `inventory.0` to `inventory.26`
    -   `enderchest.*` - contains `enderchest.0` to `enderchest.26`
    -   `villager.*` - contains `villager.0` to `villager.7`
    -   `horse.*` - contains `horse.0` to `horse.14`
    -   `weapon.*` - contains `weapon.mainhand` and `weapon.offhand`
    -   `armor.*` - contains `armor.head`, `armor.chest`, `armor.legs`, `armor.feet`, `armor.body`
-   Added new slot names:
    -   `player.cursor` - item held by player on screen
        -   Note: this information cannot be read in creative mode
    -   `player.crafting.0` - `player.crafting.3`, `player.crafting.*` - player's crafting slots
        -   Note: this includes only player's inventory crafting slots. Crafting table (or any other slots on other screens) are not included
    -   `contents` - for single-slot entities like item frames, item displays, or dropped item entities
-   Replaced `horse.armor` slot name with `armor.body`, which is applicable to all mobs

#### Inline loot values

Arguments in the following commands that previously accepted namespaced ids of loot tables, modifiers and predicates can now also accept inline definitions:

-   `loot`
-   `item`
-   `execute if predicate`

Values have the same structure as matching JSON files, though they are encoded as SNBT. Example:

`execute if predicate {condition:weather_check, raining:true}`

#### `transfer` Command

New command that triggers a transfer of a player to another server. Only exists on dedicated servers.

Syntax:

`transfer <hostname> [<port>] [<players>]`

Parameters:

-   `hostname`: String describing the hostname of the server to connect to
-   `port`: Integer denoting the port number of the server to connect to - if omitted, 25565 is used
-   `players`: The players to transfer - if omitted, `@s` is used

### Predicate Formats in Loot Tables & Advancements

-   Block predicate format has been updated:
    -   `tag` field has been removed
    -   `blocks` field now supports a single entry, hash-prefixed block tag, or list of blocks
-   Fluid predicate format has been updated:
    -   `tag` field has been removed
    -   `fluid` -> `fluids`, and supports a single entry, hash-prefixed fluid tag, or list of fluids
-   Location predicate format has been updated:
    -   `biome` -> `biomes`, and supports a single entry, hash-prefixed biome tag, or list of biomes
    -   `structure` -> `structures`, and supports a single entry, hash-prefixed structure tag, or list of structures
-   Major changes to Entity and Item predicates

#### Entity Predicates

-   Entity predicate format has been updated:
    -   `type` field now supports a single entry, hash-prefixed entity type tag, or list of entity types
    -   Added new entity predicate field `slots`, for matching item slots
-   The `equipment` field format has been updated
    -   Added a new `body` field to match the item in the body armor slot of an entity
-   Removed `any` entity type-specific predicate (which had no effect)

##### `slots` entity predicate field

-   The new entity field `slots` allows checking a single or multiple slots on any entity
-   The field contains a map of slot names (same as those used in `item` commands) to item predicates
-   For slot ranges, only one slot needs to match for the whole entry to pass

Example:

    {
        "condition": "minecraft:entity_properties",
        "entity": "this",
        "predicate": {
            "slots": {
                "container.*": {
                    "items": "dirt"
                }
            }
        }
    }
    

##### `wolf` type-specific entity predicate

-   New `wolf` sub-predicate has been added to match Wolf variants
-   Fields:
    -   `variant` - Wolf variant to match (single entry, list of entries or tag)

##### `raider` type-specific entity predicate

-   New `raider` sub-predicate has been added to match raiders
-   Fields:
    -   `has_raid` - Match whether the raider is in an active raid
    -   `is_captain` - Match whether the raider is a captain

##### `cat`, `frog`, `painting` type-specific entity predicate

-   The `variant` field now accepts single entries, list of entries or tags

#### Item Predicates

Item predicate format has been updated:

-   `tag` field has been removed
-   `items` field now supports a single entry, hash-prefixed item tag, or list of items
-   A new optional `components` field matches exact components
    -   All specified components must be present and exactly equal on the target item, but additional components may be ignored
    -   Components with defaults will be assumed to exist on the target item if not specified
    -   Format: map of component id to component value (varies by component id)
        -   e.g. `"components": { "minecraft:damage": 0 }` will match only undamaged items
-   Component-specific item predicate properties have been moved to a separate field called `predicates`

#### Item Sub-predicates

-   Some fields from item predicate have been moved to a map in an optional field `predicates`
-   The new field is similar to the `components` field on item stacks
-   This was done to simplify addition for future predicates and to allow sub-predicates to more closely resemble names of components they match
-   The following fields have been moved:
    -   `enchantments` - field moved to sub-predicate `minecraft:enchantments`
    -   `stored_enchantments` - field moved to sub-predicate `minecraft:stored_enchantments`
    -   `potion` - field moved to sub-predicate `minecraft:potion_contents`
        -   Now supports a single potion entry, list of potions, or hash-prefixed potion tag
    -   `custom_data` - field moved to sub-predicate `minecraft:custom_data`
-   `durability` field has been expanded to `minecraft:damage` predicate:
    -   This check now works for any item that has `minecraft:damage` component
    -   An item that does not have a `minecraft:damage` component can never match
    -   To check for unbreakable items, query value of `minecraft:unbreakable` component
    -   Fields:
        -   `damage` - optional bounds for value of `minecraft:damage` component
        -   `durability` - optional bounds for durability (max damage minus value of `minecraft:damage`)
-   Predicates `minecraft:enchantments`, `minecraft:stored_enchantments`, `minecraft:potion_contents` and `minecraft:damage` require matching component to exist on item
    -   That means that, for example, matching for empty enchantment list will not pass on items without `minecraft:damage` component
    -   Note: some components, like `minecraft:enchantments` have default values, so they will always match
-   These sub-predicates can also be referenced in commands such as `/clear` and `/execute if|unless items`
-   The `minecraft:custom_data` predicate now accepts both SNBT data written as a string (existing format) and unflattened tags
    -   That means that `*[custom_data~{a:1}]` and `*[custom_data~"{a:1}"]` are equivalent
    -   Flattened string format has been kept since NBT type information can't be expressed in JSON
-   Many new sub-predicates have been introduced

##### Example:

Before:

    "item": {
      "enchantments": [
        {
          "enchantment": "minecraft:silk_touch",
          "levels": {
            "min": 1
          }
        }
      ]
    }
    

After:

    "item": {
      "predicates": {
        "minecraft:enchantments": [
            {
              "enchantment": "minecraft:silk_touch",
              "levels": {
                "min": 1
              }
            }
          ]
      }
    }
    

##### General Rules of Component Predicates

-   Unless otherwise specified, a field in predicate with the same name as a field in component that matches (i.e. has the same name as predicate) will match that field value
-   Those fields will usually have the same type as in the components, but will be optional
-   Exceptions:
    -   List fields will be replaced with collection matchers (see below)
    -   Integer and float fields will be replaced with ranges
    -   Registry ids will be replaced with a type that accepts id, list of ids or a tag

##### Collection Matcher

-   A collection matcher is a shared part of predicates that is used for matching collections
-   Every instance of this matcher will have the same fields with the same functionality, with the only difference being the type of matched element
-   Fields:
    -   `size` - integer range to match against collection size
    -   `contains` - a list of element predicates
        -   All conditions must match for the predicate to pass
        -   Not all elements in the tested container have to be matched
        -   Elements can be in any order
        -   A single element can be matched by multiple predicates
        -   Examples (when matching item stacks):
            -   `{contents:[{item:diamond}]}` - will match when there is at least one diamond item
            -   `{contents:[{item:diamond}, {item:dirt}]}` - will match when there is at least one diamond item and at least one dirt item
    -   `count` - a list of matchers on element counts
        -   Entry fields:
            -   `test` - element matcher
            -   `count` - optional integer range to check against number of elements passing `test`
        -   Examples (when matching item stacks):
            -   `{count:[{count:3,test:{items:diamond}}]}}` will match only when there are exactly 3 stacks of diamonds (no matter the stack size)

###### `container`

-   Matcher for `container` component (like Shulker Box)
-   Fields:
    -   `items` - optional collection matcher
        -   Note: empty items are ignored. That means `container~{items:{size:3}}` will only pass if there are exactly 3 non-empty stacks in container

###### `bundle_contents`

-   Matcher for `bundle_contents` component
-   Fields:
    -   `items` - optional collection matcher

###### `firework_explosion`

-   Matcher for `firework_explosion` component
-   Fields
    -   `shape` - optional matcher for shape, same values as `shape` field in `minecraft:firework_explosion` component
    -   `has_trail` - optional boolean
    -   `has_twinkle` - optional boolean

###### `fireworks`

-   Matcher for `fireworks` component
-   Fields:
    -   `explosions` - optional collection matcher for `firework_explosion` predicates
    -   `flight_duration` - optional integer range check for flight duration
-   Example: `minecraft:fireworks~{explosions:{contains:[{shape:small_ball}]}}]` - matches if firework has at least one explosion with `small_ball` shape

###### `writable_book_content`

-   Matcher for `writable_book_content` component
-   Fields
    -   `pages` - optional collection matcher for strings (matching only the unfiltered/raw contents of each page)

###### `written_book_content`

-   Matcher for `written_book_content` component
-   Fields
    -   `pages` - optional collection matcher for chat components (matching only the unfiltered/raw contents of each page)
    -   `author` - optional string value
    -   `title` - optional string value (matching only value)
    -   `generation` - optional integer range check for generation
    -   `resolved` - optional boolean

###### `attribute_modifiers`

-   Matcher for `attribute_modifiers` component
-   Fields:
    -   `modifiers` - optional collection matcher for following entries with following fields:
        -   `attribute` - optional id, list of ids or tag for attribute to be matched
        -   `id` - optional UUID
        -   `name` - optional string
        -   `amount` - optional double range check
        -   `operation` - optional operation type (same values as `operation` field from `attribute_modifiers` component)
        -   `slot` - optional applicable slot type (same values as `slot` field from `attribute_modifiers` component)

###### `trim`

-   Matcher for `trim` component
-   Fields:
    -   `material` - optional id, list of ids or tag for material to be matched
    -   `pattern` - optional id, list of ids or tag for pattern to be matched

### Advancements

#### Changes to `item_used_on_block`

-   This criteria trigger is now only triggered when a specific item is used successfully on a block (as opposed to any interaction with a block)
    -   For example, when using an Axe to scrape Oxidized Copper blocks would trigger, while using an Axe on a Crafting Table would not

#### Added `default_block_use`

-   Triggers due to the default interaction of a block by a player, such as opening a door

#### Added `any_block_use`

-   Triggers due to any type of interaction with a block by a player, such as using an item on the block or its default usage

#### Added `crafter_recipe_crafted`

-   Triggered when a Crafter ejects a successfully crafted item into the world
-   Fields (same format as `recipe_crafted`):
    -   `player` - an entity predicate matching nearby players in an 8 block radius
    -   `recipe_id` - the ID of the recipe being crafted
    -   `ingredients` - a list of item predicates matching the ingredients that form the recipe being crafted

#### Added `fall_after_explosion`

-   Triggered when a player begins falling after being knocked upwards by an explosion or wind burst
-   Fields:
    -   `player` - entity predicate matching the player who is falling
    -   `start_position` - location predicate matching the position the player was at when they were hit by the explosion or burst
    -   `distance` - distance predicate matching how far the player must be from `start_position` to cause the trigger to activate
    -   `cause` - entity predicate matching the entity that caused the explosion or burst to happen

### Loot Tables

-   Added `gameplay/panda_sneeze` loot table for drops when Pandas sneeze
-   Loot table entry `loot_table` (which returns all items from provided nested loot table) now has the following syntax:
    -   `value` - can be either:
        -   namespaced id - reference to another named loot table
        -   full loot table (same format as in standalone file)
-   Added new loot table type `minecraft:equipment` used for equipping items onto mobs

#### `storage` Number Provider

-   This number provider can access numeric values from command storage directly
-   If selected storage does not exist or tag selected by path is not numeric or does not exist, the provider returns 0
-   Fields:
    -   `storage` - namespaced id of command storage
    -   `path` - NBT path to field

#### Modified Loot Functions

-   Nested lists are no longer supported in function lists

##### `set_contents`

-   The `type` field has been removed
-   Added a new mandatory field `component`:
    -   Describes the target item stack component to be filled with items
    -   Any existing contents will be replaced
    -   Allowed values: `container`, `bundle_contents`, `charged_projectiles`
    -   `bundle_contents` and `charged_projectiles` will ignore empty stacks

##### `set_custom_data` (renamed from `set_nbt`)

-   Now applies to the `custom_data` component of the target item
-   The `tag` field now accepts both SNBT data written as a string (existing format) and unflattened tags

##### `copy_custom_data` (renamed from `copy_nbt`)

-   Now applies to the `custom_data` component of the target item

##### `set_name`

-   Added optional field `target` to specify which name should be set
-   Values:
    -   `custom_name` - sets `custom_name` component (default)
    -   `item_name` - sets `item_name` component

##### `set_attributes`

-   The modifier `slot` field now supports `any`, `armor`, `hand`, and `body` values
-   The modifier `operation` values have been renamed:
    -   `addition` -> `add_value`
    -   `multiply_base` -> `add_multiplied_base`
    -   `multiply_total` -> `add_multiplied_total`
-   Added `replace` field to the `set_attributes` loot function (default: `true`)
    -   When `false`, attributes will be appended

##### `set_lore`

-   The `replace` field has been removed
-   Now has `mode` like `set_fireworks` and `set_written_book_pages`

#### New Loot Functions

##### `set_components`

-   Adds or replaces provided components on the target item
-   Fields:
    -   `conditions` - optional list of conditions to filter this function
    -   `components` - map of component id to component value (format varied by id)
        -   Components with a `!` prefix (e.g. `"!minecraft:damage": {}`) will cause this component to be removed

##### `copy_components`

-   Copies components from a specified source onto an item
-   This is now used in the Vanilla pack in place of the `copy_name` and `copy_nbt` functions
-   Fields:
    -   `conditions` - optional list of conditions to filter this function
    -   `source` - source type to pull from
        -   Currently, can only and must be `"block_entity"`
    -   `include` - optional list of data components to be copied from source
        -   if omitted, all components present are included
    -   `exclude` - optional list of data components to be excluded from copying
        -   if omitted, defaults to empty
    -   Only components that are included (explicitly or implicitly) but not excluded will be copied

##### `modify_contents`

-   Applies a modifier function to every item inside of a component
-   If the component does not exist, it will not be added
-   Fields:
    -   `conditions` - optional list of conditions to filter this function
    -   `component` - target component
        -   Allowed values: `container`, `bundle_contents`, `charged_projectiles`
    -   `modifier` - function or list of functions to be applied to every item inside container

##### `set_item`

-   Replaces item type of item stack without changing its count and components
-   Fields:
    -   `conditions` - optional list of conditions to filter this function
    -   `item` - new item type

##### `filtered`

-   Applies a sub-function only to items that match item predicate
-   Fields:
    -   `conditions` - optional list of conditions to filter this function
    -   `item_filter` - item predicate used to match items
    -   `modifier` - functions to apply to matching items

##### `set_custom_model_data`

-   Sets the `custom_model_data` component on the target item according to a number provider
-   Fields:
    -   `conditions` - optional list of conditions to filter this function
    -   `value` - integer number provider

##### `set_ominous_bottle_amplifier`

-   Sets the `ominous_bottle_amplifier` component on the target item according to a number provider
-   Fields:
    -   `conditions` - optional list of conditions to filter this function
    -   `amplifier` - a number provider used to generate the `ominous_bottle_amplifier` component

##### `set_fireworks`

-   Sets the details of the `minecraft:fireworks` component
-   Fields:
    -   `conditions`: optional list of conditions:
        -   Conditions to check before applying the function
    -   `flight_duration`: optional integer, 0-255:
        -   The flight duration measured in number of gunpowder
        -   If omitted, the flight duration of the item is left untouched - or set to 0 if the component did not exist before
    -   `explosions`: optional object with fields:
        -   `values`: List of `firework_explosion` data - same format as the `explosion` field in the `minecraft:fireworks` component:
            -   The explosion data to set
        -   `mode`: enumerated value deciding function for explosions:
            -   `replace_all`: fully replace the explosions list
            -   `replace_section`: replace a section of the explosions. Arguments:
                -   `offset`: optional non-negative integer:
                    -   Start of replaced range
                    -   If omitted, `0` is used
                -   `size`: optional non-negative integer:
                    -   Size of range to be replaced in explosions
                    -   If omitted, the size of `explosions` field is used
            -   `insert`: insert explosions, moving existing explosions to after the inserted section. Arguments:
                -   `offset`: optional non-negative integer:
                    -   Index before which explosions will be inserted
                    -   If omitted, `0` (before first explosion) is used
            -   `append`: append explosions at the end of the list

##### `set_firework_explosion`

-   Sets the details of the `minecraft:firework_explosion` component
-   Fields:
    -   `conditions`: optional list of conditions:
        -   Conditions to check before applying the function
    -   `shape`: optional Explosion Shape:
        -   The explosion shape to set
        -   If omitted, the original shape is kept (or `small_ball` is used if there was no component)
    -   `colors`: optional integer array, RGB values:
        -   List of initial particle colors to replace the ones on the existing explosion with
        -   If omitted, the original colors are kept (or `[]` is used if there was no component)
    -   `fade_colors`: optional integer array, RGB values:
        -   List of fade-to particle colors to replace the ones on the existing explosion with
        -   If omitted, the original colors are kept (or `[]` is used if there was no component)
    -   `trail`: optional boolean:
        -   Set whether the explosion should have a trail or not
        -   If omitted, the original `has_trail` value is kept (or `false` is used if there was no component)
    -   `twinkle`: optional boolean:
        -   Set whether the explosion should have a twinkle or not
        -   If omitted, the original `has_twinkle` value is kept (or `false` is used if there was no component)

##### `set_book_cover`

-   Sets the cover details of the `minecraft:written_book_content` component
-   If present, any pages in the book are left untouched
-   Fields:
    -   `conditions`: optional list of conditions:
        -   Conditions to check before applying the function
    -   `title`: optional Filterable text (same format as `title` on the `minecraft:written_book_content` component):
        -   The title to set
        -   If omitted, the original title is kept (or an empty string is used if there was no component)
    -   `author`: optional string:
        -   The author to set
        -   If omitted, the original author is kept (or an empty string is used if there was no component)
    -   `generation`: optional integer \[0; 3\]:
        -   The generation value to set
        -   If omitted, the original generation is kept (or `0` is used if there was no component)

##### `set_writable_book_pages`

-   Manipulates the pages of the `minecraft:writable_book_content` component
-   Fields:
    -   `conditions`: list of conditions (default: `[]`):
        -   Conditions to check before applying the function
    -   `pages`: list of Filterable strings (same format as `pages` on the `minecraft:writable_book_content` component):
        -   The pages to apply
    -   `mode`: enumerated value deciding function:
        -   `replace_all`: fully replace the book contents
        -   `replace_section`: replace a section of the book. Arguments:
            -   `offset`: optional non-negative integer:
                -   Start of replaced range
                -   If omitted, `0` is used
            -   `size`: optional non-negative integer:
                -   Size of range to be replaced in book
                -   If omitted, the size of `pages` field is used
        -   `insert`: insert pages, moving existing pages to after the inserted section. Arguments:
            -   `offset`: optional non-negative integer:
                -   Index before which pages will be inserted
                -   If omitted, `0` (before first page) is used
        -   `append`: append pages at the end of the book

##### `set_written_book_pages`

-   Manipulates the pages of the `minecraft:written_book_content` component
-   Same format as `set_writable_book_content` but the `pages` field contains filterable Chat Components instead of Strings
    -   Unlike the `written_book_content` component, `pages` stores a list of JSON objects instead of JSON in string form
-   Any cover data is left untouched, and the page content components are set to resolve next time a player opens the book

##### `toggle_tooltips`

-   This function can be used to modify item component tooltip visibility
-   It works by setting fields like `show_in_tooltip` without changing other values
-   Format:
    -   `toggles` - a map of supported item component type to boolean value
-   Supported components: `trim`, `dyed_color`, `enchantments`, `stored_enchantments`, `unbreakable`, `can_break`, `can_place_on`, `attribute_modifiers`
-   Example:
    -   `{function:"toggle_tooltips","toggles":{"enchantments":false}}` will hide enchantments tooltip

### Recipes

-   Recipe types `crafting_shaped`, `crafting_shapeless`, `stonecutting` and `smithing_transform` now accept `components` for the `result` item stack
-   The `result` field for recipe types `smelting`, `blasting`, `smoking` and `campfire_cooking` is now an item stack format without a count, which means you'll need to specify an object with an `id` field
    -   This `result` now also accepts `components` data

![A tiny Kai, roughly 2 pixels tall, is standing next to a Birch Button and staring up towards a normal (but relatively giant) Milk Bucket item.](https://launchercontent.mojang.com/v2/images/1.20.5tech5thumbnail.jpg)

### Attributes

-   Added `generic.scale` attribute that can be used to rescale any living entity (default: `1.0`)
    -   Certain entities have special restrictions due to technical limitations:
        -   Shulkers can only be scaled up to 3x their normal size
        -   The Ender Dragon cannot be scaled
-   Added `player.block_interaction_range` (default: `4.5`) and `player.entity_interaction_range` (default: `3.0`) attributes that control player reach distance
-   Added `generic.step_height` attribute that defines the maximum number of blocks that an entity can step up without jumping (default: `0.6`)
-   Added `generic.gravity` attribute that controls blocks/tick^2 acceleration downward (default: `-0.08`)
-   Added `generic.safe_fall_distance` attribute to control the fall distance after which the entity will take fall damage (default: `3.0`)
-   Added `generic.fall_damage_multiplier` attribute to multiply overall applied fall damage (default: `1.0`)
-   Renamed `horse.jump_strength` to `generic.jump_strength`, and now applies to all entities
    -   This controls the base impulse from a jump (before jump boost or modifier on block)
-   Added `player.block_break_speed` attribute that acts as a multiplier over block breaking speed for players (default: \`1.0)

![A tiny Camel is looking at a very large Bee that flies towards the camera. In the background a giant Chicken is falling right above a regularly-sized Sheep.](https://launchercontent.mojang.com/v2/images/1.20.5tech2thumbnail.jpg)

### Particles

Added the following particle types:

-   `vault_connection`
-   `infested`
-   `item_cobweb`
-   `small_gust`
-   `raid_omen`
-   `trial_omen`
-   `trial_spawner_detection_ominous`
-   `ominous_spawning`

### Particle Representation

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
    -   The `fromColor` field has been renamed to `from_color`
    -   The `toColor` field has been renamed to `to_color`
    -   Example transformation: `dust_color_transition 1.0 0.0 0.0 0.5 0.0 1.0 0.5` -> `dust_color_transition{from_color: [1.0f, 0.0f, 0.0f], scale: 0.5f, to_color: [0.0f, 1.0f, 0.5f]}`
-   Added `entity_effect` options:
    -   Now accepts options to control the color of the particle
    -   Fields:
        -   `color`: packed integer ARGB color, or list of floats (0.0 to 1.0) representing RGBA color

### Enchantments

-   The `minecraft:sweeping` enchantment has been renamed to `minecraft:sweeping_edge`
-   Projectile weapon Enchantments like `infinity`, `multishot` and `piercing` now work on both Crossbows and Bows, if placed onto the alternative weapon using data manipulation or a change to the `enchantable/*` tags)

### Damage Types

-   Llamas now use a new damage type `spit` instead of `mob_projectile`

### Tags

#### Block Tags

-   Added `minecraft:does_not_block_hoppers` for blocks that will never disable a Hopper when placed above one
-   Added `minecraft:blocks_wind_charge_explosions` for blocks not impacted by the explosion when hit by Wind Charge
-   Added `minecraft:incorrect_for_wooden_tool`, `minecraft:incorrect_for_gold_tool`, `minecraft:incorrect_for_stone_tool`, `minecraft:incorrect_for_iron_tool`, `minecraft:incorrect_for_diamond_tool`, `minecraft:incorrect_for_netherite_tool`
    -   These tags combine the existing `needs_diamond_tool`, `needs_iron_tool`, and `needs_stone_tool` tags for each specific tool tier

#### Item Tags

New item tags controlling what enchantments can be added to what gear:

-   `minecraft:enchantable/foot_armor`
-   `minecraft:enchantable/leg_armor`
-   `minecraft:enchantable/chest_armor`
-   `minecraft:enchantable/head_armor`
-   `minecraft:enchantable/armor`
-   `minecraft:enchantable/weapon`
-   `minecraft:enchantable/sword`
-   `minecraft:enchantable/mining`
-   `minecraft:enchantable/mining_loot`
-   `minecraft:enchantable/fishing`
-   `minecraft:enchantable/trident`
-   `minecraft:enchantable/durability`
-   `minecraft:enchantable/bow`
-   `minecraft:enchantable/equippable`
-   `minecraft:enchantable/crossbow`
-   `minecraft:enchantable/vanishing`

New item tags defining food and tempting items for various mobs:

-   `minecraft:armadillo_food`
-   `minecraft:axolotl_food` (renamed from `minecraft:axolotl_tempt_items`)
-   `minecraft:bee_food`
-   `minecraft:camel_food`
-   `minecraft:cat_food`
-   `minecraft:chicken_food`
-   `minecraft:cow_food`
-   `minecraft:fox_food`
-   `minecraft:frog_food`
-   `minecraft:goat_food`
-   `minecraft:hoglin_food`
-   `minecraft:horse_food`
-   `minecraft:horse_tempt_items`
-   `minecraft:llama_food`
-   `minecraft:llama_tempt_items`
-   `minecraft:meat` collection tag: not used by the game directly, but may be included in other tags
-   `minecraft:ocelot_food`
-   `minecraft:panda_food`
-   `minecraft:parrot_food`
-   `minecraft:parrot_poisonous_food`
-   `minecraft:pig_food`
-   `minecraft:piglin_food`
-   `minecraft:rabbit_food`
-   `minecraft:sheep_food`
-   `minecraft:strider_food`
-   `minecraft:strider_tempt_items`
-   `minecraft:turtle_food`
-   `minecraft:wolf_food`

Removed item tags:

-   Removed tag `minecraft:tools` (overlapping with `minecraft:breaks_decorated_pots`)

#### Entity Type Tags

-   Added `minecraft:ignores_poison_and_regen` for entities that cannot be affected by Poison and Regeneration effects
-   Added `minecraft:illager_friends` for entities that Illagers will consider allies (unless on a different team)
-   Added `minecraft:immune_to_infested` for entities that cannot receive the Infested mob effect
-   Added `minecraft:immune_to_oozing` for entities that cannot receive the Oozing mob effect
-   Added `minecraft:inverted_healing_and_harm` for entities that have inverted meanings of the Healing and Harm effects
-   Added `minecraft:not_scary_for_pufferfish` for entities that will not cause Pufferfish to puff
-   Added `minecraft:redirectable_projectile` for projectiles which should be able to be redirected and deflected toward the direction the player is looking
-   Added `minecraft:sensitive_to_bane_of_arthropods` for entities sensitive to Bane of Arthropods
-   Added `minecraft:sensitive_to_impaling` for entities sensitive to Impaling
-   Added `minecraft:sensitive_to_smite` for entities that take extra damage from the Smite Enchantment
-   Added `minecraft:wither_friends` for entities that the Wither will not target and which cannot harm the Wither

#### Damage Type Tags

-   Added `minecraft:bypasses_wolf_armor` for damage sources that cannot be absorbed by Wolf Armor
-   Added `minecraft:is_player_attack` for attacks performed by the player

#### Enchantment Tags

-   Added `minecraft:tooltip_order` controlling which order Enchantments are listed in tooltips

### Banner Patterns

Banner Patterns will now be loaded into a dynamic registry from data packs (`data/<namespace>/banner_pattern/<id>`)

-   These entries have two fields:
    -   `asset_id` (namespaced string) is used to resolve texture locations
        -   e.g. `custom:pattern` resolves to `assets/custom/textures/entity/banner/pattern.png`, `assets/custom/textures/entity/shield/pattern.png`
    -   `translation_key` (string) is a translation key prefix
        -   e.g. `block.minecraft.banner.custom.pattern` resolves to `block.minecraft.banner.custom.pattern.<dye color>`

### Wolf Variants

Wolf variants can be data-driven by adding entries to `data/<namespace>/wolf_variant/<id>.json`.

-   Format: object with fields
    -   `wild_texture` - wild/untamed texture for this variant
        -   `<namespace>:<path>` resolves to `assets/<namespace>/textures/<path>.png`
    -   `tame_texture` - tamed texture for this variant
    -   `angry_texture` - to angry texture for this variant
    -   `biome` - a single entry, list or a tag describing biomes in which this variant naturally spawns

### Worldgen Data Formats

-   Added new terrain adaptation type for structures: `encapsulate`
    -   Density will be added all around every piece of a structure
    -   Ideal for structures that need to be entirely covered underground
-   Int and float providers are no longer wrapped in an extra `value` field next to `type`
    -   For example, `{"type":"minecraft:uniform","value":{"min_inclusive":0.0,"max_inclusive":1.0}}` becomes `{"type":"minecraft:uniform","min_inclusive":0.0,"max_inclusive":1.0}`

## Resource Pack Versions 23 through 32

The Resource Pack version is now 32. These are the changes compared to version 22, used in 1.20.4.

-   Renamed `scute` textures and models to `turtle_scute`
-   Added textures and models for new features
-   Changes to fonts
-   Changes to shaders

### Models and Textures

-   Added textures for Wolf variations
-   Added files for Armadillo and Wolf Armor
-   Added additional textures to support colored layers of Wolf Armor for the Wolf model and Wolf Armor item:
    -   `textures/entity/wolf/wolf_armor_overlay.png`
    -   `textures/item/wolf_armor_overlay.png`
-   Added three semi-transparent textures for the cracks to show on the Wolf Armor layer:
    -   `textures/entity/wolf/wolf_armor_crackiness_low.png`
    -   `textures/entity/wolf/wolf_armor_crackiness_medium.png`
    -   `textures/entity/wolf/wolf_armor_crackiness_high.png`
-   Added `trial_chambers` map decoration icon
-   Added textures and model files for the following experimental blocks and items:
    -   Vault
    -   Ominous Vault
    -   Ominous Trial Spawner
    -   Ominous Bottle
-   Added the following mob effect icon textures:
    -   `bad_omen_121`
    -   `infested`
    -   `oozing`
    -   `raid_omen`
    -   `trial_omen`
    -   `weaving`
    -   `wind_charged`

### GUI

-   The `gui/options_background` and the `gui/light_dirt_background` textures have been removed. Instead;
    -   Added `gui/menu_background` to be used as the background of screens, while `gui/menu_list_background` is used for the background of lists for menus accessed from the Title Screen
    -   Added `gui/inworld_menu_background`, `gui/inworld_menu_list_background`, `gui/inworld_header_separator`, `gui/inworld_footer_separator` textures for menus accessed from the Pause Menu
-   Lists now use the `gui/header_separator` and `gui/footer_separator` textures at the top and bottom, respectively
-   The following textures have been updated: `gui/footer_separator`, `gui/header_separator`
-   The following sprites have been updated: `widget/tab`, `widget/tab_highlighted`, `widget/tab_selected`, `widget/tab_selected_highlighted`
-   The `widget/scroller_background` sprite has been added
-   The following textures in Realms have been removed: `gui/sprites/backup/changes`, `gui/sprites/backup/changes_highlighted`, `gui/sprites/backup/restore`, `gui/sprites/backup/restore_highlighted`, `gui/sprites/player_list/make_operator_highlighted`, `gui/sprites/player_list/remove_operator_highlighted`, `gui/sprites/player_list/remove_player_highlighted`
-   Added `gui/tab_header_background` texture, which is rendered behind the tab buttons in the Create World Screen
-   Added `misc/credits_vignette` texture, which is rendered behind the poem and the credits
-   Split map decoration atlas into separate files

#### Map Decorations

-   Map decoration icons have been split from the former `map_icons.png` to use an atlas loaded from the `textures/map/decorations/` directory
-   The process of upgrading your pack can be assisted by using this automated [Slicer](https://github.com/Mojang/slicer/releases/tag/v1.1.5) tool

### Fonts

-   The `ttf` font provider transforms have been adjusted to have more reasonable defaults
    -   `shift` is no longer applied double, and now directly represents a number of pixels in the game UI
    -   The font EM square is fitted to `size` pixels in the game UI, instead of between the font ascender and font descender
    -   The font baseline is positioned consistently with the default font (7 pixels below line top)
    -   This means that generally, any font with a `size` of 9 and no `shift` should look correct by default
    -   `shift` is now restricted to the range `[-512; 512]`
-   Added font variant filters to font providers

#### Font Variant Filters

-   Every glyph provider can now be enabled or disabled based on certain set of variants
-   Available variants are currently hardcoded and controlled by the font options menu
    -   Current variants:
        -   `uniform` - wired to "Force Uniform" button
        -   `jp` - wired to "Japanese Glyph Variants" button
-   Filters are defined in section called `filter`, available for every glyph provider
    -   Keys in that object are variant names (for example `uniform`)
    -   Glyph provider will be included only when value in filter matches actual value of variant in key

### Shaders

-   The unused attributes array in core shader definitions has been removed
-   The unused `position_color_normal` and `position_tex_lightmap_color` shaders have been removed
-   The `position_tex_color_normal` shader (only used by clouds) has been replaced with `rendertype_clouds`
-   The `IViewRotMat` uniform has been removed, and the `Position` attribute for entities is now in (camera relative) world space
-   Light direction uniforms are no longer premultiplied by the view matrix
-   The `blur` post-processing shader has been renamed to `box_blur`
-   Added optional boolean field `use_linear_filter` to post-processing passes which when set to `true` switches texture sampling mode from nearest-neighbor sampling to linear interpolation for that pass
-   Added `entity_outline_box_blur` post-processing shader

### Particles

Added the following particle types:

-   `infested`
-   `item_cobweb`
-   `ominous_spawning`
-   `raid_omen`
-   `small_gust`
-   `trial_omen`
-   `trial_spawner_detection_ominous`
-   `vault_connection`

### Sound Events

Added the following sound events:

-   `block.cobweb.break`
-   `block.cobweb.fall`
-   `block.cobweb.hit`
-   `block.cobweb.place`
-   `block.cobweb.step`
-   `block.trial_spawner.about_to_spawn_item`
-   `block.trial_spawner.ambient_charged`
-   `block.trial_spawner.charge_activate`
-   `block.trial_spawner.spawn_item_begin`
-   `block.trial_spawner.spawn_item`
-   `event.mob_effect.bad_omen`
-   `event.mob_effect.raid_omen`
-   `event.mob_effect.trial_omen`
-   `item.ominous_bottle.dispose`

## Experimental Features

The following changes only apply when their respective Experiment is turned on, either by activating the corresponding experimental data pack or by turning it on in the Experiments screen while creating the world.

-   Added the Mace
-   Added Breeze Rod item
-   Updates to the Breeze
-   Added Wind Charge Item
-   Added Vault block
-   Redesigned Bad Omen to give access to Ominous Events
-   Added Ominous Bottle
-   Added Ominous Trial Spawner
-   Added Ominous Vault
-   Added Ominous Trial Key
-   Added Bogged mob
-   Added 6 new mob effects

![Noor is attacking a Piglin Brute by jumping from the top of a Bastion Remnant with a Mace. There is a Crimson Forest in the background.](https://launchercontent.mojang.com/v2/images/1.20.5exp3thumbnail.jpg)

### Mace

-   A new heavy weapon to smash your enemies!
-   Can be crafted with a Breeze Rod and a Heavy Core
-   Leverage the weight of this new weapon to deal additional damage the farther you fall before hitting your target
    -   Try it out by jumping down toward your target, and hit them before you hit the ground
    -   Successfully striking a target in this way will reset all vertical momentum and negate any fall-damage accumulated from the fall
    -   Other entities near the struck enemy will be knocked back by the immense force of the Mace
-   Using a Mace will decrease its durability like any other weapon; repair it with Breeze Rods at an anvil
-   Players can use a Mace in combination with Wind Charges to launch up and deliver devastating smash attacks on their enemies
-   The baseline additional damage dealt by the Mace smash attack is 3 (1.5 hearts) per fallen block
-   These existing enchantments can be applied to the Mace:
    -   Mending
    -   Unbreaking
    -   Smite
    -   Bane of Arthropods
    -   Fire Aspect
    -   Curse of Vanishing

![Noor is using a Mace with a Wind Burst enchantment to fight a group of Pillagers next to a Pillager Outpost. One of the Pillagers is dramatically thrown towards the viewer by the Wind Burst explosion, while the others are aiming their Crossbows at Noor.](https://launchercontent.mojang.com/v2/images/1.20.5exp4thumbnail.jpg)

-   Three new enchantments have been introduced that are unique to the Mace:
    -   Density:
        -   Common Enchantment, accessible in the Enchanting Table and on Enchanted Books in loot
        -   Has 5 levels
        -   Maces enchanted with Density do more damage per fallen block per Density level
            -   Damage dealt per fallen block is increased by 1 per level of Density
    -   Breach:
        -   Rare Enchantment, accessible in the Enchanting Table and on Enchanted Books in loot
        -   Has 4 levels
        -   Maces enchanted with Breach reduce the effectiveness of armor on the target
            -   The effectiveness of the armor is reduced by 15% per Breach level
    -   Wind Burst:
        -   Unique enchantment which can only be found in Ominous Vaults
        -   Has 3 levels
        -   Maces enchanted with Wind Burst will emit a Wind Burst upon hitting an enemy, launching the attacker upward and enabling the linking of smash attacks one after the other
        -   Each level will bounce the attacker higher up in the air

### Heavy Core

-   A mysterious, dense block which can be combined with a Breeze Rod to craft a brand-new weapon: the Mace!

### Breeze Rod

-   An item dropped by the Breeze that can be crafted into 4 Wind Charges, or used with the Heavy Core to craft the Mace

### Breeze

-   Now drops 1-2 Breeze Rods when killed by a player
    -   The number of Breeze Rods dropped is affected by looting enchantments
-   Added new sound effects, as well as tweaked existing sounds
-   Breeze now deflects all projectiles
-   Deflected projectiles now deflect in the direction of the shooter
-   Breeze is now aggressive toward Iron Golems
-   Breeze no longer retaliates against attacks from the following mobs: Skeletons, Strays, Zombies, Husks, Spiders, Cave Spiders, Slimes
    -   The above mobs will not retaliate when hurt by the Breeze's Wind Charge Projectile
-   Updated the model, texture, and animation of the Wind Charge projectile to give it a more dynamic look and feel

![Noor is jumping from one tall Jungle tree to another using a Wind Charge to launch themselves high into the air. There is a mountain overgrown with Bamboo Forest in the background.](https://launchercontent.mojang.com/v2/images/1.20.5exp2thumbnail.jpg)

### Wind Charge

-   Become the Breeze! Using a Wind Charge item will fire off a Wind Charge projectile similar to the Breeze's
-   The Wind Charge can be used to launch entities away from the impact of the Wind Burst
-   Players can also use Wind Charges to propel themselves high into the air
-   A Wind Charge fired by a player will grant 10% more knockback than a Breeze's, but have a much smaller area of impact
-   Just like the projectile fired by the Breeze, Wind Charges fired by the player also deal damage if they hit an entity directly
-   There is a half-second cooldown after each use
-   Wind Charges can be fired from a dispenser
-   Players that launch themselves with a Wind Charge only accumulate fall damage below the y-level of where they collided with the Wind Burst
    -   This means, for example, if a player uses a Wind Charge at y64 to launch themselves 9 blocks into the air, and they land back where they started at y64, they will take 0 damage.

### Trial Spawner

-   The Trial Spawner now has the same two default loot tables as they have in the Trial Chamber
-   Trial spawners can now only activate when a player is in line of sight

### Trial Chambers

-   Trial Chambers are now more consistently buried by terrain when found underground
-   Ominous Vaults can now be found inside rooms, intersections and at the end of corridors
-   Decorated Pots in the Trial Chambers now have a chance to display a Flow, Guster, or Scrape Pottery Sherd
-   Redesigned dispenser traps
-   Redesigned specific rooms with new variations and challenges
    -   Redesigned chamber room 9 to Slanted room
    -   Redesigned chamber room 3 to Pedestal room
    -   Redesigned chamber room 5 to Eruption room
    -   Redesigned chamber room 6 to Assembly room
-   Updated layout and placements of Vaults
-   Reduced amount of Trial Spawners in corridors
-   Added an atrium to the corridors
-   Made various layout changes in intersections and corridors

Known issue:

-   Corner quadrants in slanted may still fail to generate correctly

### Trial Key

-   Updated texture to reflect new Vault visuals

### Trial Chamber Explorer Map

-   Struggle no more to locate a Trial Chamber - level up your nearest Cartographer to Journeyman for the opportunity to trade for an Explorer Map pointing to a nearby Trial Chamber

### Vault

-   A block that holds locked treasure and loot - find the right key to eject its rewards
    -   Can be found throughout Trial Chambers, containing the structures' most valuable loot
    -   Vaults in Trial Chambers require a Trial Key to be unlocked
-   Can be unlocked by an unlimited number of players
    -   After a player has unlocked a Vault, they cannot unlock that Vault again
    -   If a player has not unlocked that Vault before, an orange stream of particles will flow from the player to the Vault when nearby
-   Has a keyhole that will be open or closed depending on the players nearby
    -   If any nearby player has not unlocked that Vault, the keyhole will be open
    -   If all nearby players have unlocked that Vault, the keyhole will be closed
-   Within its cage, it will cycle through and display items which are possible to eject from its loot table
-   The loot it ejects is randomized each time it is unlocked
-   Cannot be crafted nor obtained in Survival, and does not drop anything when mined
-   Vaults are explosion resistant and cannot be moved

### Ominous Events

-   Bad Omen has been expanded to give access to an optional experience in Trial Chambers
-   These optional experiences can be accessed through Bad Omen, which are now known as Ominous Events
    -   They are more challenging than usual, and are designed to shake up the experience in unique ways
    -   Illager Raids are an example of an existing Ominous Event
-   Bad Omen is getting some changes with this redesign:
    -   It has a new, shadowy icon and a sound for being applied to the player
    -   It no longer triggers a Raid directly when entering a village
        -   Instead, it will transform into a Raid Omen variant with a duration of 30 seconds
        -   Once the Raid Omen expires, a Raid will start at the location the player gained the Raid Omen
        -   Like any other effect, players can drink a Bucket of Milk to clear the Raid Omen to prevent the Raid from starting
    -   It is no longer given to players that defeat a Raid Captain outside a Raid
        -   Instead, players can gain access to Bad Omen by consuming a new Ominous Bottle

![An infographic explaining the Ominous Event System, as explained above.](https://launchercontent.mojang.com/v2/images/1.20.5ominouseventsystemthumbnail.jpg)

#### Ominous Bottle

-   An item which can be consumed by players to receive the Bad Omen effect for 1 hour and 40 minutes
    -   Comes in 5 variations, one for each Bad Omen level
    -   The bottle breaks when consumed
    -   Can be stacked to 64
-   Ominous Bottles can be found uncommonly in any Vaults that are unlocked with Trial Keys, and are dropped by Raid Captains when defeated outside a Raid

![Noor is fighting in Trial Chambers with Trial Omen effect. The Zombies who are trying to attack Noor are wearing Chainmail Armor with Armor Trims. There are multiple Lingering potion effect clouds present in the chamber with another potion about to burst.](https://launchercontent.mojang.com/v2/images/1.20.5exp5thumbnail.jpg)

### Ominous Trials

-   A new Ominous Event that can be accessed by exploring a Trial Chamber with Bad Omen
-   This event will have players facing more powerful Trial Spawners if they dare!

#### Trial Omen

-   A variant that Bad Omen can transform into
    -   This occurs when the player is within detection range of a Trial Spawner that is not Ominous
    -   The Trial Omen has a duration of 15 minutes multiplied by the transformed Bad Omen's level
-   Players that have Trial Omen are surrounded by ominous particles

#### Ominous Trial Spawner

-   A more powerful active phase of the Trial Spawner with unique challenges and rewards
    -   Provides a more challenging experience that advanced players can opt into for better rewards
-   If a Trial Spawner detects a player that has the Trial Omen effect, the spawner will become Ominous if:
    -   It is not in cooldown
    -   Or, it is in cooldown but was not Ominous during its last activation
        -   Making it Ominous this way will bypass the cooldown
-   While active, it will:
    -   Glow blue instead of orange
    -   Emit soul flames instead of normal flames
    -   Very commonly spawn mobs with equipment if they can wear it
        -   The equipment these mobs wear have Armor Trims applied from the Trial Chambers
        -   They also have various high-level enchantments
    -   Periodically spawn potions and projectiles on top of unsuspecting players and mobs
        -   Based on their location, spawners in an area will select a random set of projectiles to spawn
        -   These projectiles will always include a single type of Lingering Potion from a set of possible effects
-   Becoming an Ominous Trial Spawner will despawn any existing mobs it spawned and reset its challenge
    -   It will stay Ominous until it has been defeated and its cooldown has finished
-   When defeated, it will eject a different set of loot compared to normal Trial Spawners

![Noor is standing on an Oxidized Copper stairway in Trial Chambers and looking at an Ominous Trial Key which has appeared on top of a Trial Spawner as a reward after a difficult fight.](https://launchercontent.mojang.com/v2/images/1.20.5exp6thumbnail.jpg)

#### Ominous Trial Key

-   A new variant of the Trial Key which can only be obtained by defeating an Ominous Trial Spawner
-   They can be used to unlock Ominous Vaults

![Noor is about to open an Ominous Vault with an Ominous Trial Key in Trial Chambers.](https://launchercontent.mojang.com/v2/images/1.20.5exp7thumbnail.jpg)

#### Ominous Vault

-   A variant of Vaults that have a different texture and emit soul flames instead of normal flames
-   These can be found throughout the Trial Chambers in harder to find places and require an Ominous Trial Key to unlock
    -   These Vaults hold a more valuable set of rewards than the standard Vaults unlocked by Trial Keys

![A Bogged is aiming its bow at something at night in a Swamp. It is a Skeleton with moss on its bones and Mushrooms growing on its head. The Moon is rising between Mangrove trees in the background.](https://launchercontent.mojang.com/v2/images/1.20.5exp1thumbnail.jpg)

### Bogged

-   A new variant of Skeletons that shoots poisonous arrows
    -   They're faster to take down with 16 health instead of 20 health
    -   They attack at a slower interval of 3.5 seconds instead of 2 seconds
-   Bogged has a chance to drop Arrows of Poison when killed by players
-   These mossy and mushroom covered Skeletons spawn naturally in Swamps and Mangrove Swamps
    -   Can also be found spawning from Trial Spawners in some Trial Chambers
-   The Bogged drops 2 mushrooms (either both red/brown or one of each) when sheared

### Mob Effects

-   The following effects have been added:
    -   Wind Charged
        -   Affected entities will emit a wind burst upon death
        -   Brewed with an Awkward Potion and a Breeze Rod
    -   Weaving
        -   Affected entities will spread Cobweb blocks upon death
        -   Affected entities can move through Cobweb with 50% of their normal speed instead of 25%
        -   Brewed with an Awkward Potion and a Cobweb block
    -   Oozing
        -   Affected entities will spawn two Slimes upon death
        -   Brewed with an Awkward Potion and a Slime Block
    -   Infested
        -   Affected entities have a 10% chance to spawn 1-2 Silverfish when hurt
        -   Brewed with an Awkward Potion and a Stone block
-   These effects can be encountered while taking on an Ominous Trial Spawner
-   Some mobs are immune to these effects
    -   Slimes are immune to Oozing
    -   Silverfish are immune to Infested
-   Whenever a mob with Oozing dies, it will check within a 5x5x5 area how many Slimes there are
    -   If the amount exceeds the max entity cramming cap (24 by default), it will not spawn any Slimes
    -   If it does not exceed it, it will attempt to spawn 2 Slimes up until the max entity cramming cap

### Copper Grates

-   Stonecutting Copper Blocks into Copper Grates outputs 4 Copper Grates

### Pottery Sherds

-   Added Flow, Guster, and Scrape Pottery Sherds
-   These can be obtained by breaking Decorated Pots that display them in Trial Chambers

### Banner Patterns

-   Added Flow and Guster Banner Patterns

### Armor Trims

-   Added Bolt and Flow Armor Trims and Smithing Templates
-   Bolt can be duplicated using a Copper Block or Waxed Copper
-   Flow can be duplicated using a Breeze Rod

### Advancements

-   Added the following advancements:
    -   `Minecraft: Trial(s) Edition` - Step foot in a Trial Chamber
    -   `Under Lock & Key` - Unlock a Vault using a Trial Key
    -   `Blowback` - Kill a Breeze with a deflected Wind Charge (challenge - gives 40 exp)
    -   `Who Needs Rockets?` - Use a Wind Charge to launch yourself upward at least 8 blocks
    -   `Crafters Crafting Crafters` - Be near a Crafter when it crafts a Crafter
    -   `Lighten Up` - Scrape a Copper Bulb with an Axe to make it brighter
    -   `Over-Overkill` - Deal 50 hearts of damage in a single hit using the Mace (challenge - gives 50 exp)
    -   `Revaulting` - Unlock an Ominous Vault with an Ominous Trial Key (goal)

### Trade Rebalance

-   In the Trade Rebalance Experiment, Villagers who buy armor now ignore durability and can buy damaged armor

## Fixed bugs in 1.20.5

-   [MC-19893](https://bugs.mojang.com/browse/MC-19893) options\_background.png is incorrectly displayed upside down in the credits after beating the dragon
-   [MC-71977](https://bugs.mojang.com/browse/MC-71977) Changing generic.attack\_damage of tamed wolf has no effect / taming wolf removes custom generic.attack\_damage
-   [MC-72151](https://bugs.mojang.com/browse/MC-72151) Snow Golem's snowballs damage wolves instead of pushing them
-   [MC-94413](https://bugs.mojang.com/browse/MC-94413) Breaking, placing and walking in tripwire (string) or cobweb play stone sounds
-   [MC-96609](https://bugs.mojang.com/browse/MC-96609) Pick block on player head does not use BlockEntityTag
-   [MC-100016](https://bugs.mojang.com/browse/MC-100016) Singleplayer world selection screen is shown incorrectly when light\_dirt\_background.png and/or options\_background.png are transparent
-   [MC-100994](https://bugs.mojang.com/browse/MC-100994) Items in hot bar appear on top of tab menu
-   [MC-107353](https://bugs.mojang.com/browse/MC-107353) Ghast fireballs move incorrectly when hit with knockback enchantment
-   [MC-108350](https://bugs.mojang.com/browse/MC-108350) Totem of undying animation is rendered above hotbar, but underneath items and xp, hunger and health displays
-   [MC-109286](https://bugs.mojang.com/browse/MC-109286) Default dirt page background not aligned properly
-   [MC-117637](https://bugs.mojang.com/browse/MC-117637) World is visible for short moment after credits before respawn
-   [MC-117955](https://bugs.mojang.com/browse/MC-117955) Player teleports to the top when crushed by a piston head
-   [MC-117977](https://bugs.mojang.com/browse/MC-117977) Advancement GUI doesn't have a close button
-   [MC-118857](https://bugs.mojang.com/browse/MC-118857) Effect amplifier is read/written as byte from NBT despite being stored as an integer
-   [MC-118890](https://bugs.mojang.com/browse/MC-118890) Tipped arrows stuck in the ground never lose their effect
-   [MC-121621](https://bugs.mojang.com/browse/MC-121621) Pick block on shulker boxes doesn't find placed and mined shulker boxes in inventory
-   [MC-122703](https://bugs.mojang.com/browse/MC-122703) You can craft a stack of non-stackable items using data packs
-   [MC-123804](https://bugs.mojang.com/browse/MC-123804) Explorer map and Ominous banner names appear in item frames, draw in italics, and can be removed with an anvil
-   [MC-130244](https://bugs.mojang.com/browse/MC-130244) When opening chat in F1 mode, previous messages aren't visible
-   [MC-131636](https://bugs.mojang.com/browse/MC-131636) One additional character at the end is allowed in JSON text components
-   [MC-132380](https://bugs.mojang.com/browse/MC-132380) The "Joining world..." message shows up when you enter a nether/end portal
-   [MC-140397](https://bugs.mojang.com/browse/MC-140397) When combining two enchanted unbreakable items, the result will be two stacked items
-   [MC-140565](https://bugs.mojang.com/browse/MC-140565) Patrol leaders with banners can drop 2 different types of banners which don't stack
-   [MC-142372](https://bugs.mojang.com/browse/MC-142372) Ctrl + Pick block on a campfire with food cooking updates the nbt during cook time
-   [MC-143614](https://bugs.mojang.com/browse/MC-143614) Campfire item with "cooking" NBT heavily shakes in hand/off-screen, when CTRL+pick-blocked
-   [MC-147710](https://bugs.mojang.com/browse/MC-147710) Some long mob names are occluded by the scroll bar in the Statistics page
-   [MC-148057](https://bugs.mojang.com/browse/MC-148057) Ominous banners generated in outposts show the pattern list
-   [MC-148480](https://bugs.mojang.com/browse/MC-148480) Putting two identical enchanted books in a grindstone will output one book
-   [MC-149457](https://bugs.mojang.com/browse/MC-149457) Updating "Force Unicode" setting resets selected language in the language selection menu
-   [MC-151793](https://bugs.mojang.com/browse/MC-151793) Various Ominous Banner stacking issues
-   [MC-153329](https://bugs.mojang.com/browse/MC-153329) Leashing an iron golem breaks its pathfinding until reloading the world
-   [MC-153643](https://bugs.mojang.com/browse/MC-153643) Debug overlay is rendered behind hotbar items
-   [MC-153879](https://bugs.mojang.com/browse/MC-153879) Raiders ignore ominous banners that was saved in the Saved Toolbars from a different version
-   [MC-155857](https://bugs.mojang.com/browse/MC-155857) Team command doesn't affect illagers and witches' AI
-   [MC-157133](https://bugs.mojang.com/browse/MC-157133) Enchanted books with curses can be stacked using a grindstone
-   [MC-162453](https://bugs.mojang.com/browse/MC-162453) Custom heads do not show skin in hand
-   [MC-164298](https://bugs.mojang.com/browse/MC-164298) Applying the texture to player heads is inconsistent
-   [MC-165435](https://bugs.mojang.com/browse/MC-165435) Can't trigger flying mode in creative while standing in the middle of 2×2 magma block bubble column
-   [MC-165948](https://bugs.mojang.com/browse/MC-165948) Bees can be lured into dangerous blocks
-   [MC-166361](https://bugs.mojang.com/browse/MC-166361) GUI scale does not visually update when the option is changed using the keyboard and without the mouse
-   [MC-167324](https://bugs.mojang.com/browse/MC-167324) Multiple UI buttons can be highlighted at the same time
-   [MC-167375](https://bugs.mojang.com/browse/MC-167375) Baby turtle subtitles are grammatically incorrect
-   [MC-168407](https://bugs.mojang.com/browse/MC-168407) Bees can get stuck in a lantern
-   [MC-169187](https://bugs.mojang.com/browse/MC-169187) Hand animation plays when trying to use a spawn egg 5 blocks away from the player's reach
-   [MC-169389](https://bugs.mojang.com/browse/MC-169389) End portals sometimes teleport the player to overworld coordinates
-   [MC-170000](https://bugs.mojang.com/browse/MC-170000) Hand lighting / lighting of held items changes drastically in first-person mode when looking around
-   [MC-171177](https://bugs.mojang.com/browse/MC-171177) You can enter nether portals in creative mode by running against the frame of the portal
-   [MC-171981](https://bugs.mojang.com/browse/MC-171981) Map of fuel times is created anew every time an item is placed in a furnace, instead of being cached
-   [MC-172047](https://bugs.mojang.com/browse/MC-172047) Wolves try to attack armor stands
-   [MC-172447](https://bugs.mojang.com/browse/MC-172447) Leaving The End shows loading screen with overlapping text
-   [MC-172898](https://bugs.mojang.com/browse/MC-172898) Equiping armor in creative via right click causes it to disappear from the hotbar for a frame
-   [MC-173303](https://bugs.mojang.com/browse/MC-173303) Leashed pets teleport to the player when reloaded
-   [MC-173672](https://bugs.mojang.com/browse/MC-173672) Title text renders in front of player names in player list
-   [MC-174496](https://bugs.mojang.com/browse/MC-174496) Player heads lose their name after being placed
-   [MC-175437](https://bugs.mojang.com/browse/MC-175437) Fullscreen resolution isn't applied when exiting Video Settings with Esc
-   [MC-175622](https://bugs.mojang.com/browse/MC-175622) Wolf's tail will spin 360 degrees if max health is increased
-   [MC-178410](https://bugs.mojang.com/browse/MC-178410) Banners don't support the HideFlags tag when placed down as blocks
-   [MC-179817](https://bugs.mojang.com/browse/MC-179817) Lead drop when modifying it with /data
-   [MC-184066](https://bugs.mojang.com/browse/MC-184066) Respawn anchors don't produce an ambient sound
-   [MC-184622](https://bugs.mojang.com/browse/MC-184622) Sound for exiting a portal/travelling to another dimension does not use its subtitle string despite it existing in en\_us.json
-   [MC-185379](https://bugs.mojang.com/browse/MC-185379) Baby polar bear subtitle does not explicitly mention it comes from a baby polar bear
-   [MC-185955](https://bugs.mojang.com/browse/MC-185955) When your eye level is up to 2 pixels above water, you count as being underwater as if it would be a full block
-   [MC-186626](https://bugs.mojang.com/browse/MC-186626) /weather not working in custom dimensions
-   [MC-187267](https://bugs.mojang.com/browse/MC-187267) Title text renders in front of sidebar
-   [MC-187372](https://bugs.mojang.com/browse/MC-187372) There is no space between fps limit/vsync and graphics level in the debug screen
-   [MC-187616](https://bugs.mojang.com/browse/MC-187616) Totems rendered too dark for a second after being used
-   [MC-187746](https://bugs.mojang.com/browse/MC-187746) Game rule buttons on "Edit game rules" screen are highlighted despite being covered
-   [MC-188497](https://bugs.mojang.com/browse/MC-188497) AngerTime and AngryAt cannot be set on summon
-   [MC-189211](https://bugs.mojang.com/browse/MC-189211) Water Taken from Cauldron statistic is slightly covered by the bottom of the screen's overlay
-   [MC-189484](https://bugs.mojang.com/browse/MC-189484) Statistics screen Tab selection is not centered
-   [MC-193202](https://bugs.mojang.com/browse/MC-193202) Tamed wolf health resets when NBT is loaded (e.g. relog)
-   [MC-193460](https://bugs.mojang.com/browse/MC-193460) Inconsistent layering of sidebar and debug screen (F3) text
-   [MC-193511](https://bugs.mojang.com/browse/MC-193511) Title text renders in front of narrator text
-   [MC-193515](https://bugs.mojang.com/browse/MC-193515) Boss bar text renders in front of narrator text
-   [MC-193517](https://bugs.mojang.com/browse/MC-193517) Boss bar text renders in front of sidebar
-   [MC-193521](https://bugs.mojang.com/browse/MC-193521) Boss bar text renders in front of F3
-   [MC-193524](https://bugs.mojang.com/browse/MC-193524) Boss bar text strikethough/underline renders on tab list
-   [MC-193656](https://bugs.mojang.com/browse/MC-193656) Banners' breaking texture is displaced and/or repeatedly flips horizontally, depending on the banner's rotation
-   [MC-193753](https://bugs.mojang.com/browse/MC-193753) Respawn anchor ambient sound subtitle refers to it as a portal
-   [MC-194948](https://bugs.mojang.com/browse/MC-194948) Block breaking subtitle inconsistent with painting, item frame and lead breaking subtitles
-   [MC-195572](https://bugs.mojang.com/browse/MC-195572) The fog from lava is much denser when having the Fire Resistance effect active compared to Bedrock Edition
-   [MC-198492](https://bugs.mojang.com/browse/MC-198492) Players can be pushed into danger in situations where they wouldn't normally be damaged
-   [MC-198787](https://bugs.mojang.com/browse/MC-198787) Inefficient streams in GoalSelector
-   [MC-198963](https://bugs.mojang.com/browse/MC-198963) Chat text renders in front of player names in player list
-   [MC-199973](https://bugs.mojang.com/browse/MC-199973) Wet wolf is rendered too dark compared to past versions
-   [MC-200947](https://bugs.mojang.com/browse/MC-200947) Large amount of unused space in map\_icons.png texture file
-   [MC-200987](https://bugs.mojang.com/browse/MC-200987) Title in bossbar breaks HUD opacity
-   [MC-201722](https://bugs.mojang.com/browse/MC-201722) Summon command ignores stacking restrictions
-   [MC-204947](https://bugs.mojang.com/browse/MC-204947) Ctrl + Pick Block on placed ominous banners is not the same as Pick Block
-   [MC-206854](https://bugs.mojang.com/browse/MC-206854) Multiplayer warning and Chat Preview warning are off center
-   [MC-207353](https://bugs.mojang.com/browse/MC-207353) Ghast fireballs and wind charges can't be redirected in melee if the attack does 0 damage
-   [MC-208528](https://bugs.mojang.com/browse/MC-208528) Feeding tamed baby wolves and cats causes them to sit down/stand up
-   [MC-209906](https://bugs.mojang.com/browse/MC-209906) Sculk sensors are not activated upon attaching equipment to entities through their inventories
-   [MC-213104](https://bugs.mojang.com/browse/MC-213104) Statistics tab resets when resizing the Minecraft window
-   [MC-216071](https://bugs.mojang.com/browse/MC-216071) Splash text resets if you hit escape on the Multiplayer menu, but not the Singleplayer menu
-   [MC-217084](https://bugs.mojang.com/browse/MC-217084) Player head NBT "ExtraType" is no longer saved but doesn't use DataFixerUpper upgrade path
-   [MC-218811](https://bugs.mojang.com/browse/MC-218811) Big dripleaves tilt when touched from the side
-   [MC-219899](https://bugs.mojang.com/browse/MC-219899) Bone meal used on rooted dirt causes the particles to appear above it, despite the growth being below it
-   [MC-219967](https://bugs.mojang.com/browse/MC-219967) IndexOutOfBoundsException occurs instead of a "Bad packet id" message
-   [MC-221754](https://bugs.mojang.com/browse/MC-221754) Leashed wolves no longer attack when unleashed
-   [MC-224343](https://bugs.mojang.com/browse/MC-224343) Books don't stack after being placed on a lectern
-   [MC-225170](https://bugs.mojang.com/browse/MC-225170) Normal matrix scaling broken in some situations
-   [MC-226775](https://bugs.mojang.com/browse/MC-226775) Extinguishing candle shows inaccurate subtitle
-   [MC-228486](https://bugs.mojang.com/browse/MC-228486) Cannot switch to other windows using Cmd+Tab on macOS
-   [MC-229209](https://bugs.mojang.com/browse/MC-229209) Loot table function set\_count doesn't work with unstackable items anymore
-   [MC-229680](https://bugs.mojang.com/browse/MC-229680) Chest, Trapped Chest, Ender Chest and Barrels stop functioning when moving far away whilst in the GUI
-   [MC-229919](https://bugs.mojang.com/browse/MC-229919) Bees don't recognize beehives or bee nests with a campfire directly below and a block on top
-   [MC-230256](https://bugs.mojang.com/browse/MC-230256) NBT "HideFlags" does not hide "Slot" on minecraft:bundle
-   [MC-231466](https://bugs.mojang.com/browse/MC-231466) Minecraft crashes with message 'Index 335550507 out of bounds for length 8000' / java.lang.ArrayIndexOutOfBoundsException: Index 335550507 out of bounds for length 8000
-   [MC-232104](https://bugs.mojang.com/browse/MC-232104) Minecarts cause chunks to be corrupted/reset when loading worlds from before 1.5 (13w02a)
-   [MC-232489](https://bugs.mojang.com/browse/MC-232489) Retrieving a plant from a flower pot ignores inventory contents
-   [MC-232560](https://bugs.mojang.com/browse/MC-232560) Tamed wolf movement speed decreases when unleashed from a fence
-   [MC-234406](https://bugs.mojang.com/browse/MC-234406) The dirt background changes its position when interacting with the "Players" button in the realms menu
-   [MC-234558](https://bugs.mojang.com/browse/MC-234558) There is no title in the "Invite player" realms menu
-   [MC-234889](https://bugs.mojang.com/browse/MC-234889) Potion effect icons displayed within the HUD can overlap boss bars
-   [MC-238242](https://bugs.mojang.com/browse/MC-238242) There is an unnecessary black pixel in the upper right corner of small potion UI icons in the inventory
-   [MC-239084](https://bugs.mojang.com/browse/MC-239084) Item pickup animation is darker than the actual item model
-   [MC-248076](https://bugs.mojang.com/browse/MC-248076) Specific type of Firework Rockets won't stack with each other after use
-   [MC-248689](https://bugs.mojang.com/browse/MC-248689) Fog on falling blocks happens too early
-   [MC-248961](https://bugs.mojang.com/browse/MC-248961) takenDamage for achievement criteria is calculated wrongly when the player has equipped a helmet
-   [MC-249136](https://bugs.mojang.com/browse/MC-249136) Freeze/server-side lag spike sometimes occurs when attempting to locate a buried treasure or opening/breaking a chest containing a map
-   [MC-249335](https://bugs.mojang.com/browse/MC-249335) Using bone meal on mangrove leaves spawns growth particles at the center of the block instead of below it
-   [MC-250432](https://bugs.mojang.com/browse/MC-250432) Esc key always unpauses the game in Demo mode
-   [MC-251027](https://bugs.mojang.com/browse/MC-251027) Wearing a helmet doesn't reduce the damage of falling anvils or stalactites by 1⁄4
-   [MC-251042](https://bugs.mojang.com/browse/MC-251042) Third-party warning buttons are not positioned well in non-English languages
-   [MC-251303](https://bugs.mojang.com/browse/MC-251303) Transparent boss bars break when more than one is on screen
-   [MC-251509](https://bugs.mojang.com/browse/MC-251509) Patterned banners not stacking properly / banner loses "banner" ID when mined
-   [MC-252409](https://bugs.mojang.com/browse/MC-252409) Memory statistics within the debug menu contain some unnecessary spaces
-   [MC-253881](https://bugs.mojang.com/browse/MC-253881) The screen repetitively flashes for other players when the host of a LAN world changes the render distance
-   [MC-259142](https://bugs.mojang.com/browse/MC-259142) Hoppers with barrel facing downwards on top picking up item
-   [MC-259355](https://bugs.mojang.com/browse/MC-259355) Game crashes because /place sometimes does not check whether position is loaded and out of world
-   [MC-259587](https://bugs.mojang.com/browse/MC-259587) Negative item durability causes the durability bar to render incorrectly
-   [MC-260099](https://bugs.mojang.com/browse/MC-260099) Sniffer's snout shading changes during sniffing
-   [MC-260867](https://bugs.mojang.com/browse/MC-260867) Cannot focus entries on the pack selection screen using the mouse
-   [MC-260889](https://bugs.mojang.com/browse/MC-260889) Players can use water buckets and lava buckets on blocks that are out of reach
-   [MC-260921](https://bugs.mojang.com/browse/MC-260921) Data is focused last on the statistics screen when using keyboard navigation
-   [MC-261577](https://bugs.mojang.com/browse/MC-261577) The nether portal overlay is rendered completely opaque when using spyglasses while standing inside of nether portals
-   [MC-261596](https://bugs.mojang.com/browse/MC-261596) Crafting Table search keyboard shortcut not working
-   [MC-261749](https://bugs.mojang.com/browse/MC-261749) Tamed cats don't emit mob interaction vibrations for entering sitting/standing mode
-   [MC-261846](https://bugs.mojang.com/browse/MC-261846) Japanese language uses a Chinese font
-   [MC-262503](https://bugs.mojang.com/browse/MC-262503) light\_dirt\_background.png and header\_separator.png does not match options\_background.png
-   [MC-263256](https://bugs.mojang.com/browse/MC-263256) Chat renders on top of TAB, blocking information
-   [MC-263315](https://bugs.mojang.com/browse/MC-263315) Attack Target of hoglins/zoglins can't be detected by /execute on target
-   [MC-263641](https://bugs.mojang.com/browse/MC-263641) Boss bar text no longer renders behind potion effect icons
-   [MC-263872](https://bugs.mojang.com/browse/MC-263872) The "Scanning for games on your local network" element in the multiplayer menu cannot be selected via the mouse cursor
-   [MC-263873](https://bugs.mojang.com/browse/MC-263873) Elements within the statistics menu are not selected in order when using the TAB key
-   [MC-263874](https://bugs.mojang.com/browse/MC-263874) Elements in lists within the statistics menu cannot be selected via the mouse cursor
-   [MC-264456](https://bugs.mojang.com/browse/MC-264456) Entity targeted by frogs and axolotls can't be detected by /execute on target
-   [MC-264597](https://bugs.mojang.com/browse/MC-264597) F3 debug menu underlined text renders over subtitles
-   [MC-264637](https://bugs.mojang.com/browse/MC-264637) Text shaders resource packs cause subtitles to flicker
-   [MC-264684](https://bugs.mojang.com/browse/MC-264684) Too long macro silently fails
-   [MC-264821](https://bugs.mojang.com/browse/MC-264821) The fog on armor worn by entities occurs too early
-   [MC-265273](https://bugs.mojang.com/browse/MC-265273) The tab list in create world screen does not indicate it's tab-focused by highlight or rendering borders
-   [MC-265390](https://bugs.mojang.com/browse/MC-265390) Forceload Command provides wrong output
-   [MC-265520](https://bugs.mojang.com/browse/MC-265520) Switching connection protocols sometimes produces errors
-   [MC-265541](https://bugs.mojang.com/browse/MC-265541) player.dat\_old won't be read even if player.dat doesn't exist
-   [MC-265585](https://bugs.mojang.com/browse/MC-265585) Waterlogged barriers do not diffuse sky light
-   [MC-265661](https://bugs.mojang.com/browse/MC-265661) Dirt background appears to overlap back button on experimental feature requirements datapack screen for some window sizes
-   [MC-265669](https://bugs.mojang.com/browse/MC-265669) Hotbar text renders above subtitle background but under subtitle text
-   [MC-265698](https://bugs.mojang.com/browse/MC-265698) Skeleton Horse's head covers player's screen when jumping
-   [MC-265709](https://bugs.mojang.com/browse/MC-265709) Stonecutter outputs are broken past the 32nd row in the GUI (server only)
-   [MC-265741](https://bugs.mojang.com/browse/MC-265741) Waterlogged barriers don't show up on maps
-   [MC-265749](https://bugs.mojang.com/browse/MC-265749) Tooltips flash when the values of buttons or fields are changed
-   [MC-265835](https://bugs.mojang.com/browse/MC-265835) The freezing effect is rendered totally opaque when using a spyglass
-   [MC-266032](https://bugs.mojang.com/browse/MC-266032) Attempting to copy a "Copy of a copy" book in a Crafter behaves incorrectly
-   [MC-266055](https://bugs.mojang.com/browse/MC-266055) Opening or closing a copper door or trapdoor while holding an axe / honeycomb grants wax-related advancement
-   [MC-266135](https://bugs.mojang.com/browse/MC-266135) Cached macro commands ignore permission level, allowing limited permission escalation
-   [MC-266136](https://bugs.mojang.com/browse/MC-266136) Macro commands ignore function-permisson-level server setting, including when lower than default
-   [MC-266144](https://bugs.mojang.com/browse/MC-266144) Copper Doors are not part of the #doors item tag
-   [MC-266145](https://bugs.mojang.com/browse/MC-266145) Copper Trapdoors are not part of the #trapdoors item tag
-   [MC-266308](https://bugs.mojang.com/browse/MC-266308) Copper Bulbs have unused "turn\_off" sound
-   [MC-266334](https://bugs.mojang.com/browse/MC-266334) Shulker bullets destroy armor stands
-   [MC-266389](https://bugs.mojang.com/browse/MC-266389) Glow berry particles are barely visible when bonemealed
-   [MC-266430](https://bugs.mojang.com/browse/MC-266430) Breeze on top of a non-full block produces particles of the block below it
-   [MC-266432](https://bugs.mojang.com/browse/MC-266432) Exposed, weathered and oxidised copper bulbs are unwaxed in trial chambers
-   [MC-266449](https://bugs.mojang.com/browse/MC-266449) Breeze doesn't attack or retaliate against mob on sight
-   [MC-266467](https://bugs.mojang.com/browse/MC-266467) Wind charges stutter when flying through the air
-   [MC-266469](https://bugs.mojang.com/browse/MC-266469) When attacked, breezes sometimes stop pathfinding, jumping, or firing wind charges
-   [MC-266532](https://bugs.mojang.com/browse/MC-266532) Breezes can be hit by some projectiles
-   [MC-266533](https://bugs.mojang.com/browse/MC-266533) Breeze's AI has serious flaws in open terrain
-   [MC-266557](https://bugs.mojang.com/browse/MC-266557) The breeze sometimes moves around while attacking, interrupting its attack animation
-   [MC-266570](https://bugs.mojang.com/browse/MC-266570) Wind charges can't go through non solid blocks
-   [MC-266577](https://bugs.mojang.com/browse/MC-266577) Some trial spawners in trial chambers spawn mobs without persistence
-   [MC-266589](https://bugs.mojang.com/browse/MC-266589) Armor durability is changed when swapping on creative
-   [MC-266628](https://bugs.mojang.com/browse/MC-266628) High polling rate causing stuttering
-   [MC-266680](https://bugs.mojang.com/browse/MC-266680) The glowing outline isn't applied to the eyes or eyebrows of breezes
-   [MC-266685](https://bugs.mojang.com/browse/MC-266685) The entity shadows of breezes are too large in relation to the size of their models
-   [MC-266688](https://bugs.mojang.com/browse/MC-266688) Breeze model's glowing eyes are not resource pack-friendly
-   [MC-266707](https://bugs.mojang.com/browse/MC-266707) Trial spawners ignore custom\_spawn\_rules
-   [MC-266738](https://bugs.mojang.com/browse/MC-266738) Subtitles string "subtitles.block.trial\_spawner.spawn\_mob" is misleading and inconsistent
-   [MC-266879](https://bugs.mojang.com/browse/MC-266879) Clouds, entity hitboxes, block outlines, specially rendered blocks, and enchantment glints, render through the insides of breezes' eyes and eyebrows
-   [MC-266909](https://bugs.mojang.com/browse/MC-266909) Breezes don't have smooth transitions to their idle states when they stop moving
-   [MC-266960](https://bugs.mojang.com/browse/MC-266960) Bossbar text renders in front of player list background and player icons
-   [MC-266990](https://bugs.mojang.com/browse/MC-266990) Maps with the same 'map' tag value, but different 'display' tag data can cause markers to disappear
-   [MC-266997](https://bugs.mojang.com/browse/MC-266997) Sky light doesn't update when breaking a shulker box while its (closing) animation is playing
-   [MC-266999](https://bugs.mojang.com/browse/MC-266999) Crafter's tooltip buttons can still be visible to players on spectator mode
-   [MC-267044](https://bugs.mojang.com/browse/MC-267044) Tick status strings contain inconsistent word usage
-   [MC-267045](https://bugs.mojang.com/browse/MC-267045) Some tick strings are missing articles and are unclear
-   [MC-267086](https://bugs.mojang.com/browse/MC-267086) Compass does not indicate spawn point correctly when game is frozen with /tick
-   [MC-267103](https://bugs.mojang.com/browse/MC-267103) Client crashes when receiving inconsistent network registries
-   [MC-267104](https://bugs.mojang.com/browse/MC-267104) The bottom face textures of breezes' rods are incorrect and don't match with surrounding colors
-   [MC-267133](https://bugs.mojang.com/browse/MC-267133) Breezes can't attack or move when there is no land around them and they are on the same height block as the player
-   [MC-267149](https://bugs.mojang.com/browse/MC-267149) Crafter top face has an inverted UV texture map
-   [MC-267193](https://bugs.mojang.com/browse/MC-267193) A function with /return fail run in chat doesn't indicate failure
-   [MC-267194](https://bugs.mojang.com/browse/MC-267194) /return run function in combination with a fork and a function that doesn't return has inconsistent behavior
-   [MC-267273](https://bugs.mojang.com/browse/MC-267273) Second beacon power for level 4 beacon flickers when player hovers the mouse pointer over it
-   [MC-267352](https://bugs.mojang.com/browse/MC-267352) Singleplayer worlds don't load the player.dat when the "Player" tag is absent from level.dat
-   [MC-267366](https://bugs.mojang.com/browse/MC-267366) You cannot use Spider Eyes on Baby Armadillos to age them up
-   [MC-267367](https://bugs.mojang.com/browse/MC-267367) Wolf armor flashes red when the wolf takes damage
-   [MC-267371](https://bugs.mojang.com/browse/MC-267371) Shulkers hitbox doesn't scale with generic.scale
-   [MC-267377](https://bugs.mojang.com/browse/MC-267377) Applying bone meal to mangrove leaves no longer produces any particles
-   [MC-267378](https://bugs.mojang.com/browse/MC-267378) Armor stand interaction points do not change with scale
-   [MC-267379](https://bugs.mojang.com/browse/MC-267379) Applying bone meal to rooted dirt no longer produces any particles
-   [MC-267380](https://bugs.mojang.com/browse/MC-267380) Cannot open inventories beyond default block reach
-   [MC-267381](https://bugs.mojang.com/browse/MC-267381) Moving while sneaking is impossible with high generic.step\_height attribute
-   [MC-267433](https://bugs.mojang.com/browse/MC-267433) Shift double-clicking while holding the same item on your cursor doesn't transfer items
-   [MC-267451](https://bugs.mojang.com/browse/MC-267451) Items named with an anvil on 1.20.4 don't stack with items named prior
-   [MC-267456](https://bugs.mojang.com/browse/MC-267456) Changes to item\_used\_on\_block advancement criteria breaks previous functionality
-   [MC-267465](https://bugs.mojang.com/browse/MC-267465) Realms world upload error: "Cannot invoke "ctt.c()" because "this.b" is null"
-   [MC-267500](https://bugs.mojang.com/browse/MC-267500) Attribute modifier on an item with the first and/or last 2 integers of the UUID being 0 are non-functional
-   [MC-267732](https://bugs.mojang.com/browse/MC-267732) /place jigsaw still caps max depth at 7
-   [MC-267742](https://bugs.mojang.com/browse/MC-267742) Opening a written book makes it unstackable with identical unopened books
-   [MC-267747](https://bugs.mojang.com/browse/MC-267747) Click and hover events don't work when viewing chat while F1 is enabled
-   [MC-267809](https://bugs.mojang.com/browse/MC-267809) The word "armor" within the Wolf Armor subtitle strings is improperly capitalized
-   [MC-267866](https://bugs.mojang.com/browse/MC-267866) Panda slimeball drop is hardcoded
-   [MC-267975](https://bugs.mojang.com/browse/MC-267975) The realms player list is rendered larger than its visual size
-   [MC-267976](https://bugs.mojang.com/browse/MC-267976) The scroll bar in the realms player list can no longer be dragged using the mouse cursor
-   [MC-268000](https://bugs.mojang.com/browse/MC-268000) The client crashes when using /give to give players a skull
-   [MC-268011](https://bugs.mojang.com/browse/MC-268011) Hoppers leak the last world they sucked item on
-   [MC-268022](https://bugs.mojang.com/browse/MC-268022) Elements within the list in the "Experimental feature requirements" menu cannot be selected via the mouse cursor
-   [MC-268110](https://bugs.mojang.com/browse/MC-268110) Deleting world results in a file directory error
-   [MC-268236](https://bugs.mojang.com/browse/MC-268236) Search field in the social interactions menu not focused by default
-   [MC-268353](https://bugs.mojang.com/browse/MC-268353) Tick Freeze randomizes next AI tick type
-   [MC-268597](https://bugs.mojang.com/browse/MC-268597) Hitting a breeze with a player reflected/dispensed wind charge causes it to become trapped within the breeze until it moves
-   [MC-268624](https://bugs.mojang.com/browse/MC-268624) "Saving world" message is rendered behind pause menu background, instead of on top
-   [MC-269083](https://bugs.mojang.com/browse/MC-269083) Effect background texture in inventory renders translucent pixels as opaque
-   [MC-269085](https://bugs.mojang.com/browse/MC-269085) Experience bar and jump bar render translucent pixels as opaque
-   [MC-269279](https://bugs.mojang.com/browse/MC-269279) The "Normal user" button within the realms player menu is improperly capitalized
-   [MC-269472](https://bugs.mojang.com/browse/MC-269472) Crash when table\_bonus loot condition has empty chances list
-   [MC-269496](https://bugs.mojang.com/browse/MC-269496) You don't get any damage if you fight against the breeze in a minecart or in a boat
-   [MC-269755](https://bugs.mojang.com/browse/MC-269755) Scroller in Report Player screen renders translucent pixels as opaque, unlike elsewhere
-   [MC-269763](https://bugs.mojang.com/browse/MC-269763) Scroller in Realms screen renders translucent pixels as opaque, unlike elsewhere

---

Minecraft 1.20.4 is a hotfix release for Java Edition which fixes a critical bug that could cause items to vanish after being stored in a Decorated Pot.

Happy Pot Smashing!

## Fixed bugs in 1.20.4

-   [MC-267185](https://bugs.mojang.com/browse/MC-267185): Decorated pots can delete items when reloading the world

---

We're now releasing 1.20.3 for Minecraft: Java Edition. This release comes with new functionality for Decorated Pots, a new look for the Bat and improvements to Shields.

This release also includes new features for map makers and pack creators like Scoreboard Display Names and extensions for the `execute` and `return` commands and a new administrative tool: the `tick` command.

The optional Update 1.21 Experiment also shows up in this version as a sneak preview of features for the next major version of Minecraft.

## Changes

-   Decorated Pots can now store items, and can be smashed by projectiles
-   When a player is blocking with a shield, the arm with the shield now follows the direction the player is looking at, when viewed from third-person perspective
-   The Bat now has a new look
-   Added an accessibility option that allows to hide the yellow splash texts in the main menu
-   Added a recovery screen for worlds with missing data (for example, if saving failed due to an unexpected shutdown)
-   Other minor tweaks

![Minecraft Java Edition 1.20.3 Image 2 Thumbnail](https://launchercontent.mojang.com/images/1.20.3_image_2_tn.jpg)

### Decorated Pots

-   Decorated Pots now store up to a single stack of items
-   Hoppers, Droppers and Minecarts with Hoppers can now insert and/or extract items from Decorated Pots
-   Comparators can now read the number of items in Decorated Pots
-   Players can interact with Decorated Pots to insert items into them
-   Decorated Pots have no GUI, and need to be broken to retrieve or discover their content by players
-   Player interactions with Decorated Pots cause the Decorated Pot to wobble and trigger the vibration frequency of 11
-   Decorated Pots can be smashed by projectiles which cause them to shatter and drop their content
-   Decorated Pots now stack up to 64

### Bat

-   The Bat has an updated model, animations and texture

![Minecraft Java Edition 1.20.3 Image 1 Thumbnail](https://launchercontent.mojang.com/images/1.20.3_image_1_tn.jpg)

### Minor Tweaks

-   Monster Spawner now renders their inner faces when looking inside
-   Thrown Ender Pearls produce a teleportation sound on impact
-   Small tweaks to the Telemetry Data Collection screen

## Technical Changes

-   The Data Pack version is now 26
-   The Resource Pack version is now 22
-   A few minor changes to chat component serialization
-   The name of non-living entities will now be shown if targeted and a CustomName is set, or always displayed if CustomNameVisible is set, similar to living entities
-   Changes to downloaded/world resource pack handling

### Chat Components

#### Serialization

-   Plain-text chat components (text, no sibilings, no stylings) are now always serialized as strings instead of `{"text': "blah"}`
-   Chat components now serialize to NBT when sent over network
-   Chat components now have an optional `type` value (allowed values: `text`, `translatable`, `score`, `nbt`, `keybind`, `selector`) to speed up parsing and improve error checking
-   Similarily, components of type `nbt` now have a `source` field with allowed values `entity`, `block`, `storage`
-   The `id` field in `show_entity` `hoverEvent` style now also accepts UUIDs as an array of 4 ints
-   Numeric and boolean arguments for `translate` components are no longer converted to strings
-   The following JSON component representations are no longer accepted:
    -   `null`
    -   `[]`
-   Errors in the following style fields are no longer silently ignored:
    -   `color`
    -   `clickEvent`
    -   `hoverEvent`
    -   `hoverEvent[action=show_entity].contents.name`
    -   `hoverEvent[action=show_item].contents.tag`

### World Resource Packs

Changes have been made to world resource packs (`resources.zip`), Realms resource packs and resource packs controlled by dedicated servers.

#### User Interface

-   The download screen has been replaced with a toast
-   World resource pack application now starts together with chunk loading

#### Local Storage

Downloaded packs are now stored in the `downloads` directory (with a different file organization than the old `server-resource-packs`)

-   Only up to 20 files are cached
-   Inside this directory there is also log file (`log.json`) that stores information about downloaded files for debug purposes

#### Server Config

Downloaded packs now have a unique id (GUID/UUID) that can be used to differentiate them

-   For dedicated server packs, this value can be configured with the `resource-pack-id` option in `server.properties`
-   If the value is missing, it will be generated based on the pack URL
-   If the hash of a pack is not set, this pack will be redownloaded before every application
    -   Previously, if the hash was missing, the latest downloaded version of pack was applied

#### Packets

Some additional options have been added for 3rd-party servers software:

-   The client can now accept multiple server resource packs
-   A new packet was added to un-apply server resource packs
-   The client now sends additional updates about packs (like download success)
-   Resource packs are no longer cleaned when entering configuration phase

## Data Pack Version 19

### Tags

-   Added `can_breathe_under_water` entity type tag which disables drowning
-   Added `can_break_armor_stand` damage type tag for damage types that can incrementally knock down armor stands

## Data Pack Version 20

-   Changed `function` command results
-   Adjusted check for gamerule `maxCommandChainLength`
-   Added new gamerule `maxCommandForkCount`
-   Reintroduced form of the `execute` command: `execute if function`
-   Reintroduced form of the `return` command: `return run`
-   Decorated Pots with the `cracked` state set to true will always shatter when broken
-   Added new `dust_plume` particle type

### Commands

#### Functions

(See further changes in Pack Version 23)

-   The `function` command has been changed to better accomodate new `return` command
-   Functions no longer have any result unless they use `return` or there was error during lookup or instantiation
    -   That means the `function` command will no longer return (or even display) the number of commands run during execution
    -   Error conditions:
        -   Calling a non-existent function
        -   Calling an empty function tag
        -   Macro instantiation failures
-   "Result" in this context means values that would be stored with `execute store`
-   The previous behavior where every command in a function would perform a store if a function was called with `execute store ... run function` has been removed
    -   A single call to `function` will now store at most once (zero times if `return` was not called)
    -   For function tags with multiple entries, function results will be accumulated, but partial results will be stored at the end of every function

##### Limits

Existing limits for functions have been refined to accomodate new execution rules and prevent wider range of exploits:

-   Limits now apply even for commands run from the server console or chat input (so it will now always behave as if they were placed in a function)
    -   For example, all functions called by `execute as @e run function` will count towards the same limit
    -   Executions from command blocks still count as separate ones
-   The `maxCommandChainLength` limit for functions will now count "operations" like:
    -   execution of command for a single context
    -   execution of a stage in `execute` (no matter how many contexts were modified)
    -   invocation of function
-   A new limit with game rule called `maxCommandForkCount` now restricts the total amount of contexts that can be created by single state of functions like `execute`
    -   For example: if there are 5 entities in world, `execute as @e` creates 5 contexts, while `execute as @e at @e` creates 5\*5 = 25 contexts

#### `execute if function`

An `execute` sub-command that runs a function or function tag and matches the return value(s). This is a reintroduction of functionality removed in a previous version. If a tag is given, all functions run regardless of the results of prior functions.

Syntax: `execute if|unless function <function> <continuation>`

Parameters:

-   `function`: The function or tag to run

##### Matching

The matching of the result value of the function(s) that run:

-   At least one of the functions must succeed for the match to succeed
-   A succeessful call is defined as a function that:
    -   Uses the `return` command to return a value
    -   The return value is not 0
-   If no functions exited with `return`, neither `if` or `unless` will run

#### `return run`

A form of the `return` command is now available, `return run`. This is a reintroduction of functionality removed in a previous version.

Syntax: `return run <command>`

This takes the `result` value from running the specified `command` and returns that as the return value of the function.

-   If the command did not return any value (like, for example, a call to a `function` without `return`), return will not execute and function will continue execution (changed in Data Pack Version 23)
-   If the given command fails, the return value is `0`
-   In all other aspects, it works like `return` with a specified return value
-   In case of a fork (for example `return run execute as @e run some_command`), the first execution of the command will return
    -   If there are no executions (for example in `return run execute if entity @e[something_impossible] run some_command`), the function will not return and will continue execution (changed in Data Pack Version 23)

## Data Pack Version 21

-   Introduced Jigsaw structure pool aliases, which can be used to rewire pool selection
-   Added field `block_state` to `tnt` entity to allow replacement of rendered block model
-   Renamed field `Fuse` to `fuse` on `tnt` entity
-   Added `playersNetherPortalDefaultDelay` and `playersNetherPortalCreativeDelay` game rules to control time (in ticks) that a player needs to stand in a Nether portal before changing dimensions
-   Added new game rule `projectilesCanBreakBlocks` to control whether impact projectiles will destroy blocks that are destructible by them, i.e. Chorus Flowers, Pointed Dripstone and Decorated Pots
-   Added `white_smoke` particle type

### Jigsaw Pool Aliases

-   Added optional `pool_aliases` list to Jigsaw structures
-   Aliases represent the possibility to rewire Jigsaw pool connections by redirecting pool references on individual structure instances
-   Alias variants are represented in `type` and is one of:
    -   `direct` 1:1 mapping from an alias to a new pool
        -   `alias` pool to replace
        -   `target` pool to replace with
    -   `random` 1:n mapping where a pool from `n` is randomly selected for the structure instance
        -   `alias` pool to replace
        -   `targets` randomized list of candidate pools to replace `alias` with
    -   `random_group`
        -   `groups` each group is a randomized list of above alias types
        -   only one group is selected per structure instance
        -   this enables modelling selections such as "if pool X is replaced with X1, also replace pool Y with Y1"

## Data Pack Version 22

-   Added `tick` command
-   Added two new input fields for Selection Priority and Placement Priority in the Jigsaw block edit screen
-   Added `item` to `minecraft:arrow` and `minecraft:spectral_arrow`, this is the item that will be picked up
-   Renamed `Trident` to `item` in `minecraft:trident`

### `tick` Command

Added a new `tick` command. This is an adminstative and debugging command that allows control of the ticking flow and measuring the performance of the game. The command requires elevated permissions (admins and above) and so it is not by default available in command blocks and datapacks.

Syntax:

`tick query` - outputs the current target ticking rate, with information about the tick times performance.

`tick rate <rate>` - sets a custom target ticking rate to the specified value. The value must be greater than 1.0 and lower than 10000.0. Setting a very low tick rate can cause the game to feel unresponsive and setting too high tick rate for your system can cause the game to crash as the game now assumes it is constantly falling behind the ticking target. Please use `tick query` or `<F3> + 2` (Integrated server only) debug screen to measure the performance of the game and adjust the tick rate accordingly. Setting a tick target lower than the default `20.0` will also cause the players to be simulated at a lower rate (including player movement and input controls), while setting a higher tick rate will cause the players to be simulated at the default rate of `20` ticks per second to maintain the expected responsiveness of the game, but can cause artifacts in entities interpolation.

`tick freeze` - freezes all gameplay elements, except for players and any entity a player is riding. This is useful for debugging and isolating issues with the game allowing the player to move around freely and inspect the world.

`tick step [<time>]` - Only works when the game is frozen. It runs the game for the specified number of ticks and then freezes the game again. This allows to step through the game a set amount of ticks at a time. If no time is given, steps 1 tick.

`tick step stop` - stops the current stepping process, and re-freezes the game.

`tick unfreeze` - unfreezes the game and resumes all gameplay elements.

`tick sprint <time>` - runs the game while ignoring the set ticking target rate (meaning that the game will run as fast as possible) for the specified number of ticks. At the end of the sprint, the game will resume the previous ticking target and display performance information about the tick times while sprinting. This is especially useful for testing gameplay elements that are time-dependent, such as Redstone contraptions, or mob behaviour in isolated environments that allow for much faster simulation.

`tick sprint stop` - stops the current tick sprint, and resumes the previous ticking target.

![Minecraft Java Edition 1.20.3 Image 3 Thumbnail](https://launchercontent.mojang.com/images/1.20.3_image_3_tn.jpg)

### Jigsaw Selection & Placement Priority

-   Selection Priority
    -   When the parent piece is being processed for connections, this controls the order in which this Jigsaw block attempts to connect to its target piece
    -   Jigsaws will be processed in descending priority order and randomly within the same priority
-   Placement Priority
    -   When this Jigsaw block connects to a piece, this is the order in which that piece is processed for connections in the wider structure
    -   Pieces will be processed in descending priority order with the default insertion order breaking ties within the same priority
-   This functionality has been added to support the ability for Jigsaw structures to generate branches in a depth-first order, as well as give finer control over ordering of connections
-   All existing Jigsaw blocks will default their Selection and Placement Priority to 0, resulting in the same behaviour as before these two configurable values were introduced

## Data Pack Version 23

-   Decorated Pots can now utilize loot tables and will read from the `LootTable` tag key
-   Additional changes to command functions

### Commands

#### `return`

-   `return run` will now always return
    -   If there are no valid results from the returned command, the function containing the `return run` will fail (i.e. `success=0` and `result=0`)
-   `return run` will now propagate the success value together with the results value (previously it always set success to `1`)
-   `return run` now also allows storing values - that means `execute store ... run return run some_command` will both store the value and return it outside the function
-   A new subcommand `return fail` has been added to make the whole function fail (i.e. return `success=0` and `result=0`)

#### `function`

-   If `function <function tag>` runs multiple functions in combination with `return run`, execution will stop after first `return` in any of the functions
-   A single call to the `function` command will always return when run with `return run`
    -   For example, `return run execute [split context] run function <some function with conditional return>` will always return after processing the first context

#### `execute if|unless function`

-   `execute if|unless function` no longer always fails if none of the functions had a `return`
    -   If there were no `returns` in called functions, `if` will fail and `unless` will pass
    -   The first `return` in any of called functions will return (for a single context)

## Data Pack Version 24

-   Increased maximum value of Jigsaw structure variable `size` from 7 to 20

## Data Pack Version 25

-   Added individual display names for scoreboard entries
-   Scoreboard sidebar will now render even when if there are no scores in selected objective

### Commands

#### `scoreboard`

##### Display Names

Each entry in a scoreboard can now have a custom display name.

-   These values are kept separate per objective and score holder
-   If the name is not present, the score holder name is used (i.e. the old behavior)
-   If the score is reset or the whole objective is removed, the name is not preserved
-   Team decorations will still be applied to names as normal
-   Subcommands for managing names:
    -   `scoreboard players display name <targets> <objective> <text component>` - set display name
    -   `scoreboard players display name <targets> <objective>` - clear display name

##### Display Name Auto-Update

To make display name management easier, objectives can also be configured to auto-update display names on every score update.

-   This option is disabled by default
-   If a score holder has no display name (because it can't be attributed to any currently loaded entity), the current name is preserved
-   Command to control auto-update for objective:
    -   `scoreboard objectives modify <scoreboard> displayautoupdate [true|false]`

##### Number Formatting

Scores in numeric form can now be formatted.

-   Formats can be set for both objectives and individual scores
-   Scores with set formats will render the same in all context (sidebar, under player name, etc.)
-   Subcommands for managing formats:
    -   `scoreboard objectives modify <objective> numberformat <format>` - set the default format for an objective
    -   `scoreboard objectives modify <objective> numberformat` - clear the default format for an objective
    -   `scoreboard players display numberformat <targets> <score> <format>` - set the format for a specific score holder
    -   `scoreboard players display numberformat <targets> <score>` - clear the format for a specific score holder
-   Formats:
    -   `styled <style>` - the score will be displayed with selected style (like `{"bold":true}`)
    -   `fixed <text component>` - the score will be replaced with the text component
    -   `blank` - the score will not be displayed

## Data Pack Version 26

-   Renamed `minecraft:grass` block and item to `minecraft:short_grass`

## Resource Pack Version 19

-   Added block model, item model and block state definitions for `crafter`
-   Added GUI container texture and sprites for `crafter`
-   Added `white_smoke` particle definition

## Resource Pack Version 20

-   `bat.png` has been updated for the new Bat model with new texture mapping
-   Added block models, items models and block state definitions for the following blocks:
    -   `chiseled_copper`, `exposed_chiseled_copper`, `weathered_chiseled_copper`, `oxidized_chiseled_copper`
    -   `copper_grate`, `expxosed_copper_grate`, `weathered_copper_grate`, `oxidized_copper_grate`
    -   `copper_bulb`, `exposed_copper_bulb`, `weathered_copper_bulb`, `oxidized_copper_bulb`
    -   `copper_door`, `exposed_copper_door`, `weathered_copper_door`, `oxidized_copper_door`
    -   `copper_trapdoor`, `exposed_copper_trapdoor`, `weathered_copper_trapdoor`, `oxidized_copper_trapdoor`
    -   `tuff_stairs`
    -   `tuff_slab`
    -   `tuff_wall`
    -   `chiseled_tuff`
    -   `polished_tuff`
    -   `polished_tuff_stairs`
    -   `polished_tuff_slab`
    -   `polished_tuff_wall`
    -   `tuff_bricks`
    -   `tuff_brick_stairs`
    -   `tuff_brick_slab`
    -   `tuff_brick_wall`
    -   `chiseled_tuff_bricks`
-   Added unique sprites for the following blocks:
    -   `chiseled_copper`, `exposed_chiseled_copper`, `weathered_chiseled_copper`, `oxidized_chiseled_copper`
    -   `copper_grate`, `expxosed_copper_grate`, `weathered_copper_grate`, `oxidized_copper_grate`
    -   `copper_bulb`, `exposed_copper_bulb`, `weathered_copper_bulb`, `oxidized_copper_bulb`
    -   `copper_door`, `exposed_copper_door`, `weathered_copper_door`, `oxidized_copper_door`
    -   `copper_trapdoor`, `exposed_copper_trapdoor`, `weathered_copper_trapdoor`, `oxidized_copper_trapdoor`
    -   `chiseled_tuff`
    -   `polished_tuff`
    -   `tuff_bricks`
    -   `chiseled_tuff_bricks`

## Resource Pack Version 21

-   The `uniform` font has been updated to use Unifont 15.1.04 (from 15.0.06)
-   The only supported texture format is now `.png`

### Breeze Mob

-   Added entity models and textures for experimental Breeze mob:
    -   `breeze`, `wind_charge`
-   Added shader:
    -   `breeze_wind`

## Resource Pack Version 22

-   Renamed `minecraft:grass` block and item to `minecraft:short_grass`

## Experimental Features

### Crafter

-   The Crafter is a new block that enables the crafting of items and blocks via Redstone
-   The Crafter will eject one crafted item at a time when powered by a Redstone pulse
-   Upon receiving a signal, the Crafter will eject the recipe result from the front face
-   If the output result has multiple types of items, all the result items will be ejected together
-   When placed, the front face of the Crafter will face towards the Player

#### Crafter User Interface

-   The Crafter has a 3x3 interactable crafting grid
-   The Crafter’s crafting grid slots are toggleable, meaning that the player can change the behavior of a slot by interacting with it while not holding an item
-   A slot that is ‘toggled’ cannot hold any items
    -   Other blocks such as Hoppers and Droppers also cannot place items into them
-   Unlike the Crafting Table, the Crafter displays a preview of the crafted item which will be crafted and ejected on the next Redstone pulse, but cannot be manually taken out by the player
-   The Crafter User Interface is shared between all players interacting with it, meaning that multiple players can interact with the Crafter at the same time, similar to Chests and Hoppers

#### Crafter Interaction with Other Blocks

-   The signal strength of a Comparator reading a Crafter is 0-9, where each non-empty or toggled slot adds 1 strength
-   Hoppers and Minecarts with Hoppers can be used to both insert and extract items from the Crafter
-   Droppers can be used to insert items into the Crafter
-   Items inserted from another block (ex: Hopper, Dropper) will fill the Crafter's slots based on these rules:
    -   Prioritize the first empty slot (from left-to-right, top-to-bottom)
    -   If there are no empty slots then prioritize the smallest stack of the same item (pick the first if there are multiple)
    -   If there is a toggled slot it will be skipped. The item will then be moved into the container
    -   If the item cannot be moved, it will be ejected into the world
-   Items are removed from Crafters by Hoppers and Minecarts with Hoppers in the same order as from other containers like Chests

![Minecraft Java Edition 1.20.3 Experimental Image 3 Thumbnail](https://launchercontent.mojang.com/images/1.20.3_experimental_3_tn.jpg)

### Copper Family

The Copper family of blocks has been expanded, including:

-   Chiseled Copper
-   Copper Grate
-   Copper Bulb
-   Copper Door
-   Copper Trapdoor
-   Oxidized and waxed variants of all of the above

#### Chiseled Copper

-   Crafted with 2 Cut Copper Slabs of a shared oxidation level
-   Can be crafted in the Stonecutter

#### Copper Grate

-   A new type of decorative block unique to the Copper family
-   Crafted with 4 Copper Blocks of a shared oxidation level
    -   Can be crafted in the Stonecutter
-   Properties:
    -   Transparent and allows light to pass through
    -   Mobs cannot suffocate inside them
    -   Cannot conduct Redstone
    -   Hostile mobs cannot naturally spawn on them
    -   Can hold Water

#### Copper Bulb

-   A light-emitting block that can toggle its light emission through Redstone pulses
-   Oxidizes like other Copper blocks, and emits light based on oxidation level
    -   Copper Bulb: Light level 15
    -   Exposed Copper Bulb: Light level 12
    -   Weathered Copper Bulb: Light level 8
    -   Oxidized Copper Bulb: Light level 4
-   When placed, its light is off by default
    -   While the Copper Bulb is unpowered, it will toggle its light on or off when it receives a Redstone pulse
    -   Copper Bulb light will stay on even when the Redstone source is removed until it receives another Redstone pulse to toggle it off
-   A Redstone crystal will glow in the center of Copper Bulbs while it is powered by a Redstone signal
-   Comparators will read a signal strength of 15 if the Copper Bulb's light is on
-   Copper Bulbs do not conduct Redstone power
-   The crafting recipe for 4 Copper Bulbs is:
    -   3 Copper Blocks of a shared oxidation level
    -   1 Blaze Rod
    -   1 Redstone Dust

#### Copper Doors and Trapdoors

-   Copper variants of Doors and Trapdoors that can oxidize over time and be waxed
-   Works like wooden doors in that they can be opened and closed with interaction, as well as Redstone
-   Crafted with Copper Blocks that have a shared oxidation level

### Tuff Family

Tuff has been expanded to have its own family of blocks, including:

-   Stair, Slab, Wall and Chiseled variants
-   Tuff Bricks with Stair, Slab, Wall and Chiseled variants
-   Polished Tuff with Stair, Slab and Wall variants

All Tuff variants can be crafted in the Stonecutter.

### Added Breeze Mob

-   The Breeze is a cunning hostile mob spawned by the Trial Spawner in some rooms within the Trial Chambers
-   The Breeze moves primarily by leaping around its target
-   An aggressive adversary, the Breeze shoots volatile wind energy in the form of Wind Charge projectiles at its target
-   Wind Charges deal a small amount of damage when colliding directly with an entity
-   After colliding with an entity or a block, Wind Charge projectiles produce a Wind Burst, which knocks back entities in the area
-   Wind Charges break decorated pots and chorus flower blocks upon collision
-   Wind Bursts also have the effect of 'activating' certain blocks:
    -   Non-Iron Doors and Trapdoors are flipped
    -   Fence Gates are flipped
    -   Buttons are pressed
    -   Levers are flipped
    -   Bells are rung and swung
    -   Lit Candles are extinguished
-   Wind Bursts do not have any effect on Iron Doors, Iron Trapdoors, or any block being held in its position by a Redstone signal

![Minecraft Java Edition 1.20.3 Experimental Image 1 Thumbnail](https://launchercontent.mojang.com/images/1.20.3_experimental_1_tn.jpg)

### Trial Spawner

-   The Trial Spawner is a new variant of Monster Spawners that ejects rewards upon completion
-   The challenge level will increase for each new player a Trial Spawner notices nearby
    -   The challenge level will not decrease until it is reset during a Trial Spawner's cooldown
-   Unlike normal Spawners, a Trial Spawner will spawn a limited number of mobs proportional to its current challenge level
    -   It can only spawn a mob at positions that are within line of sight
    -   It can spawn a mob regardless of any light level requirement the mob has
    -   Spawned mobs are persistent
-   Once all mobs are defeated, the Trial Spawner will eject a set of rewards proportional to the current challenge level
    -   After the rewards have been ejected, the Trial Spawner goes into cooldown for 30 minutes, during which it will no longer spawn mobs
-   Trial Spawners cannot be crafted nor obtained by players in Survival - instead, they can be found naturally placed throughout Trial Chambers
-   Trial Spawners are extremely slow to mine and resistant to explosions, and will not drop even with Silk Touch
-   When placed in Creative, Trial Spawners have no mob type set by default
    -   The mob type can be set by interacting with it while holding a Spawn Egg
-   Creative and Spectator players cannot be detected or noticed by Trial Spawners

![Minecraft Java Edition 1.20.3 Experimental Image 2 Thumbnail](https://launchercontent.mojang.com/images/1.20.3_experimental_2_tn.jpg)

### Trial Chambers

-   Trial Chambers are a new structure in the Overworld where players can explore and take on combat challenges
    -   Trial Chambers are made out of a variety of Copper and Tuff blocks, and can be found in different sizes
    -   Trial Chambers are a relatively common find throughout the Deepslate layer of the underground
-   The layout of each Trial Chamber is procedurally generated, and can include traps, Reward Chests and a variety of combat areas
    -   Supply Chests can be found between different rooms, and give you blocks and items which help you navigate your trials
    -   Reward Chests are guarded by challenges in each room, and can be a source of many high level enchanted books and equipment
    -   The loot found in Reward Chests are still being iterated, and are absolutely not final
-   Each Trial Chamber will include Trial Spawners with a melee, small melee, or ranged category:
    -   Melee
        -   Zombie
        -   Husk
        -   Slime
    -   Small Melee
        -   Spider
        -   Cave Spider
        -   Baby Zombie
        -   Silverfish
    -   Ranged
        -   Skeleton
        -   Stray
        -   Skeleton with Poison Tipped Arrows
-   Each Trial Spawner category will only use one mob for the entire structure when generated, and these mobs are randomized for each Trial Chamber
    -   For example, one Trial Chamber might only spawn Zombies, Cave Spiders and Strays, while another might only spawn Slimes, Silverfish and Skeletons
    -   The exceptions to this are some Trial Spawners in unique rooms which always spawn Breezes
-   Natural mob spawning does not occur within Trial Chambers

#### Known Issues

-   The corridors sometimes end with a dead end
-   Aquifers, Lush Caves, and Sculk Veins sometimes intersect with the Trial Chamber

### Trial Key

-   An item that can only be obtained from Trial Spawners
-   Trial Keys do not currently have any functionality

## Fixed bugs in 1.20.3

Around 85 bugs were fixed in this release. View the [list on the issue tracker](https://bugs.mojang.com/issues/?filter=27936).

---

