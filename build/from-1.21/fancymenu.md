# Minecraft: Java Edition 1.21

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

**Trial Chambers**

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

**Breeze**

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

**Bogged**

-   A new variant of Skeletons that shoots poisonous arrows
    -   They're easier to take down with 16 health instead of 20 health
    -   They attack at a slower interval of 3.5 seconds instead of 2 seconds
-   Has a chance to drop Arrows of Poison when killed by players
-   These mossy and mushroom covered Skeletons spawn naturally in Swamps and Mangrove Swamps
    -   Can also be found spawning from Trial Spawners in some Trial Chambers
-   Drops 2 mushrooms when sheared (either both red, both brown, or one of each)

![A Bogged is aiming its Bow at something at night in a Swamp. It is a Skeleton variation with moss on its bones and Mushrooms growing on its head. The Moon is rising between Mangrove trees in the background.](https://launchercontent.mojang.com/v2/images/t1.21newbogged.jpg)

### Weapons

**Mace**

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

**Crafter**

-   A new block that enables the crafting of items and blocks via Redstone
    -   Can be crafted with 5 Iron Ingots, 2 Redstone Dust, 1 Crafting Table and 1 Dropper
-   Will eject one crafting result at a time when powered by a Redstone pulse
    -   Its current powered state is indicated by Redstone crystals on its back face, which will light up
    -   The crafting grid on its top face will light up red when it successfully crafts a recipe
-   Upon receiving a signal, it will eject the recipe result from the front face
    -   If the recipe output has any remainder items (such as a Bucket), the result and remainder items will be ejected together
-   When placed, the front face of the Crafter will face towards the player

![An automated rail Crafter is producing rails. Makena is collecting the rails and Noor is building a railway.](https://launchercontent.mojang.com/v2/images/t1.21newcrafter.jpg)

**Crafter User Interface**

-   Has a 3x3 interactable crafting grid
-   The crafting grid slots are toggleable, meaning that the player can change the behavior of a slot by interacting with it while not holding an item
-   A slot that is ‘toggled’ cannot hold any items
    -   Other blocks such as Hoppers and Droppers also cannot place items into them
-   Unlike the Crafting Table, the Crafter displays a preview of the crafted item which will be crafted and ejected on the next Redstone pulse, but cannot be manually taken out by the player
    -   The arrow pointing out from the recipe grid will light up red when the Crafter is currently powered
-   The Crafter User Interface is shared between all players interacting with it, meaning that multiple players can interact with the Crafter at the same time, similar to Chests and Hoppers

**Crafter Interaction with Other Blocks**

-   The signal strength of a Comparator reading a Crafter is 0-9, where each non-empty or toggled slot adds 1 strength
-   Hoppers and Minecarts with Hoppers can be used to both insert and extract items from the Crafter
-   Droppers can be used to insert items into the Crafter
-   Items inserted from another block (ex: Hopper, Dropper) will fill the Crafter's slots based on these rules:
    -   Prioritize the first empty slot (from left-to-right, top-to-bottom)
    -   If there are no empty slots then prioritize the smallest stack of the same item (pick the first if there are multiple)
    -   If there is a toggled slot it will be skipped. The item will then be moved into the container
    -   If the item cannot be moved, it will be ejected into the world
-   Items are removed from Crafters by Hoppers and Minecarts with Hoppers in the same order as from other containers like Chests

**Trial Spawner**

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

**Vault**

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

**Copper Family**

-   The Copper family of blocks has been expanded to add:
    -   Chiseled Copper
    -   Copper Grate
    -   Copper Bulb
    -   Copper Door
    -   Copper Trapdoor
    -   Oxidized and waxed variants of all of the above

**Chiseled Copper**

-   Crafted with 2 Cut Copper Slabs of a shared oxidation level
-   Can be crafted in the Stonecutter

**Copper Grate**

-   A new type of decorative block unique to the Copper family
-   Crafted with 4 Copper Blocks of a shared oxidation level
    -   Stonecutting a Copper Block into Copper Grates outputs 4 Copper Grates
-   Properties:
    -   Transparent and allows light to pass through
    -   Mobs cannot suffocate inside them
    -   Cannot conduct Redstone
    -   Hostile mobs cannot naturally spawn on them
    -   Can hold water

**Copper Bulb**

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

**Copper Doors and Trapdoors**

-   Copper variants of Doors and Trapdoors that can oxidize over time and be waxed
-   Behaves like wooden doors, meaning they can be opened and closed with interaction as well as Redstone
    -   Can be opened by mobs that have the ability to open doors
-   Crafted with Copper Ingots

**Tuff Family**

-   Tuff has been expanded to have its own family of blocks:
    -   Stair, Slab, Wall and Chiseled variants
    -   Tuff Bricks with Stair, Slab, Wall and Chiseled variants
    -   Polished Tuff with Stair, Slab and Wall variants
-   All Tuff variants can be crafted in the Stonecutter

**Heavy Core**

-   A mysterious, dense block which can be combined with a Breeze Rod to craft the Mace
-   Can only be obtained from Ominous Vaults

![A house built out of Tuff Bricks, Chiseled Tuff and new Copper-based blocks. Decorative Pots with new Guster and Flow patterns are also visible.](https://launchercontent.mojang.com/v2/images/t1.21newtuff.jpg)

### Items

**Trial Explorer Map**

-   Used to locate a nearby Trial Chamber
-   Level up a Cartographer Villager to Journeyman for the opportunity to trade for this map

**Ominous Bottle**

-   An item which can be consumed by players to receive the Bad Omen effect for 1 hour and 40 minutes
    -   Comes in 5 variations, one for each Bad Omen level
    -   The bottle breaks when consumed
    -   Can be stacked to 64
-   Ominous Bottles can be found uncommonly in any Vaults, and are dropped by Raid Captains which are defeated outside a Raid

**Wind Charge**

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

**Trial Key**

-   An item that can only be obtained from Trial Spawners
-   Can be used to unlock Vaults

**Breeze Rod**

-   An item dropped by a Breeze that can be crafted into 4 Wind Charges, or used with the Heavy Core to craft a Mace

**Pottery Sherds**

-   Added Flow, Guster, and Scrape Pottery Sherds
-   These can be obtained by breaking Decorated Pots that display them in Trial Chambers

**Banner Patterns**

-   Added Flow Banner Pattern, found in Vaults
-   Added Guster Banner Pattern, found in Ominous Vaults

**Armor Trims**

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

**Raids**

-   Bad Omen no longer triggers a Raid directly when entering a Village
    -   Instead, it will transform into a Raid Omen variant with a duration of 30 seconds
    -   Once the Raid Omen expires, a Raid will start at the location the player gained the Raid Omen
    -   Like any other effect, players can drink a Bucket of Milk to clear the Raid Omen, preventing the Raid from starting

**Ominous Trials**

-   A new Ominous Event that can be accessed by exploring a Trial Chamber while Bad Omen is active
-   This event will have players facing more powerful Ominous Trial Spawners, if they dare

**Trial Omen**

-   A variant that Bad Omen can transform into
    -   This occurs when the player is within detection range of a Trial Spawner that is not Ominous
    -   The Trial Omen will have a duration of 15 minutes multiplied by the transformed Bad Omen's level
-   Players that have Trial Omen are surrounded by ominous particles

**Ominous Trial Spawner**

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

**Ominous Vault**

-   A variant of Vaults that have a more menacing looking and emit soul flames instead of normal flames
-   These hold a more valuable set of rewards than the standard Vaults that are unlocked by Trial Keys
-   Can be found throughout Trial Chambers in harder to reach places, and require an Ominous Trial Key to unlock

**Ominous Trial Key**

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

**`jukebox_playable` Item Component**

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

**`attribute` Command**

-   The `uuid` and `name` arguments have been replaced with a singular `id` argument

**Item Stack Attribute Modifiers**

-   The `uuid` and `name` fields have been removed
-   Attribute Modifiers now have an `id` (namespaced ID) field
    -   This is a unique identifier per attribute for the modifier

**Entity Attributes**

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

**Level-Based Values**

Many effects of Enchantments depend on the level of the Enchantment. For these fields, a type called Level-Based Values is used. In their most basic form, Level-Based Values can be written as floating-point constants, which is interpreted as a value that isn't in fact level-based, the constant is used as-is for all levels.

If a Level-Based value is not a floating-point constant, it is an object with a `type` field, specifying one of the following types.

**`linear`**

The most common type of Level-Based Value is a `linear` value. A `linear` Level-Based Value has two fields:

-   `base`: The base value added to all levels
-   `per_level_above_first`: Amount added for each level above the first one

In effect, a `linear` Level-Based Value results in `base + per_level_above_first * (level - 1)`.

**`clamped`**

A Level-Based Value type that clamps a value between a min and max. Fields:

-   `value`: A Level-Based Value used as the input
-   `min`: A floating point value specifying the minimum value of the output
-   `max`: A floating point value specifying the maximum value of the output

**`fraction`**

A Level-Based Value type that represents the fraction between two values. Fields:

-   `numerator`: A Level-Based Value used as the numerator
-   `denominator`: A Level-Based Value used as the denominator

**`levels_squared`**

A Level-Based Value type that evaluates to the square of the levels, plus an addition. Fields:

-   `added`: A floating-point value added to the result of the squared levels

In effect, a `levels_squared` Level-Based Value results in `level ^ 2 + added`

**`lookup`**

A Level-Based Value type that maps a list of values to specific levels, and applies a fallback if the level is greater than the number of values supplied. Fields:

-   `values` - A list of values indexed by `level - 1` to apply, if present
-   `fallback` - A fallback Level-Based Value to apply if the level is greater than the size of `values`

**Value Effect Types**

Value Effects are effects used to manipulate the amount of _something_ in the game.

**`add`**

A Value Effect that adds a value to the processed results.

Fields:

-   `value`: A Level-Based Value determining how much to add
    -   Negative values are supported

**`all_of`**

A Value Effect that runs a number of other Value Effects, in order. This can be useful when the same set of conditions apply to a number of Value Effects.

Fields:

-   `effects`: A list of the Value Effects to run

**`multiply`**

A Value Effect that multiplies the processed value by a given factor.

Fields:

-   `factor`: A Level-Based Value determining the factor to multiply in

**`remove_binomial`**

A Value Effect that runs a Binomial series of checks, reducing the input value by 1 for every successful check.

Fields:

-   `chance`: A Level-Based Value repres