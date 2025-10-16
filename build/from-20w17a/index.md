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

