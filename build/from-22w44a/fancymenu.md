# Minecraft Snapshot 22w44a

Another Wednesday, another snapshot. This week's snapshot introduces a few new game rules and a few gameplay changes which include another round of inventory tweaks. As usual, there are a few bugfixes as well.

Happy Mining!

## Changes in 22w44a

-   Bamboo Mosaic can now be used as fuel
-   Chiseled Bookshelves now works with Hoppers
-   More changes to the Creative Inventory
-   Monster Spawner changes
-   Spawn Egg changes
-   Step sound changes

### Creative Inventory changes

A (hopefully) final round of changes have been made to the Creative Tab orderings to address feedback:

-   Operator-only blocks and items can now be found in the Redstone Blocks tab if you have the required permissions
-   Functional Blocks
    -   Added:
        -   Tinted Glass
        -   Bee Nest
    -   Moved Respawn Anchor before Beds
    -   Reordered Pressure Plates by functionality
    -   Moved End Portal Frame & Infested blocks into this tab from Natural Blocks tab
-   Redstone Blocks
    -   Added:
        -   Chest
        -   Barrel
        -   Cauldron
        -   Furnace
        -   Composter
-   Building Blocks
    -   Added:
        -   Chain
        -   Block of Amethyst
    -   Moved Block of Redstone and Block of Coal into this tab from Natural Blocks tab
-   Crafting
    -   Added:
        -   Ancient Debris
-   Reordered the following tabs for better consistency
    -   Building Blocks
    -   Natural Blocks
    -   Consumables
-   Reordered ore materials and blocks to be more consistent across tabs

### Monster Spawners

-   Spawners no longer have a default mob spawn type when placed by a player (previously was the Pig)
-   Will not emit fire particles when a mob spawn type has not been defined
-   Renamed to Monster Spawner to match Bedrock, and removed purple text color
-   Pick-block now works for Spawner blocks
-   The mob type is now displayed in the hover description of a Spawner item stack
    -   If a mob type has not been defined yet, the hover description will describe how to set it

### Spawn Eggs

-   Added new Spawn Egg items for Ender Dragon, Iron Golem, Snow Golem and Wither mobs to Creative mode
    -   Ender Dragon and Wither Spawn Eggs will only be available through commands to prevent accidental destruction of player builds
-   Polar Bear Spawn Egg colors have changed to distinguish it from the Ghast Spawn Egg

### Sounds

-   Step sounds can now be heard when walking on:
    -   Carpets
    -   Lily Pads
    -   Small Amethyst Buds
-   Step sounds can now be heard when walking through:
    -   Nether Sprouts
    -   Glow Lichen
    -   Crimson Roots
    -   Warped Roots

## Technical Changes in 22w44a

-   Added new game rules

### Game Rules

-   Added `blockExplosionDropDecay`, `mobExplosionDropDecay` and `tntExplosionDropDecay` game rules
    -   When set to `false`, all blocks drop loot
    -   When set to `true`, blocks drop loot randomly depending on how far from the explosion center
    -   Defaults to `false` for TNT, `true` for block and mob
-   Added `snowAccumulationHeight` game rule
    -   When it is snowing, this game rule determines the maximum number of Sniow Layers that can be accumulated in each block
    -   Defaults to `1`
    -   Set to `0` makes no Snow form at all
    -   Set to `8` or above lets Snow form up to the level of a full block
-   Added `waterSourceConversion` and `lavaSourceConversion` game rules
    -   When set to `true`, allows new sources of that fluid to form
    -   Defaults to `true` for Water and `false` for lava
-   Added `globalSoundEvents` game rule, controlling whether certain gameplay moments are heard by all players regardless of location
    -   Defaults to `true`

## Fixed bugs in 22w44

-   [MC-30403](https://bugs.mojang.com/browse/MC-30403) Sprinting isn't canceled when dismounting rideable entities while sprinting
-   [MC-137136](https://bugs.mojang.com/browse/MC-137136) Lily Pads use incorrect sound
-   [MC-137306](https://bugs.mojang.com/browse/MC-137306) Turtles don't have breeding delay
-   [MC-191790](https://bugs.mojang.com/browse/MC-191790) Re-creating a world doesn't allow a blank seed and uses recreated world's seed instead of random
-   [MC-195780](https://bugs.mojang.com/browse/MC-195780) "Data mode" and "Load mode" aren't capitalized while "Save Mode" and "Corner Mode" are
-   [MC-244721](https://bugs.mojang.com/browse/MC-244721) "Erase cached data" is not capitalized
-   [MC-253387](https://bugs.mojang.com/browse/MC-253387) Frog walking animation is slowed down when applied with slow falling
-   [MC-254435](https://bugs.mojang.com/browse/MC-254435) Neither the secure chat warning toast nor the chat preview warning screen is presented to the player when joining a server using the --server argument
-   [MC-255115](https://bugs.mojang.com/browse/MC-255115) Lily pads do not produce sounds when walking on them
-   [MC-256463](https://bugs.mojang.com/browse/MC-256463) Camels will not pathfind over 1.5 high blocks
-   [MC-256480](https://bugs.mojang.com/browse/MC-256480) Non Flammable Wood Item tag contains 1.20 content even when disabled
-   [MC-256526](https://bugs.mojang.com/browse/MC-256526) Bamboo Fence Gate has missing textures / culling issues
-   [MC-256606](https://bugs.mojang.com/browse/MC-256606) Camel walking animation is slowed down when applied with slow falling
-   [MC-256623](https://bugs.mojang.com/browse/MC-256623) Bamboo mosaic slabs aren't flammable
-   [MC-256637](https://bugs.mojang.com/browse/MC-256637) Some bamboo blocks can't be used as furnace fuel
-   [MC-256647](https://bugs.mojang.com/browse/MC-256647) Mobs face south even with a given rotation value
-   [MC-256768](https://bugs.mojang.com/browse/MC-256768) Entities no longer have random rotations upon being summoned from spawn eggs
-   [MC-256879](https://bugs.mojang.com/browse/MC-256879) Weighted pressure plates are placed wrong in creative inventory
-   [MC-256881](https://bugs.mojang.com/browse/MC-256881) The game crashes when pressing the ESC key while having draft chat reports saved
-   [MC-256887](https://bugs.mojang.com/browse/MC-256887) Tinted glass is not considered a 'Functional Block'
-   [MC-256934](https://bugs.mojang.com/browse/MC-256934) You aren't prompted to save your chat reports as drafts while only having report categories inputted
-   [MC-257058](https://bugs.mojang.com/browse/MC-257058) Cactus is not grouped with sugar cane in Creative inventory
-   [MC-257059](https://bugs.mojang.com/browse/MC-257059) Mushroom stem comes after nether fungus stems in Creative inventory, but mushroom blocks come before wart blocks
-   [MC-257060](https://bugs.mojang.com/browse/MC-257060) Bee nest is absent from Functional Blocks

---

# Minecraft Snapshot 22w43a

Did you know that Camels walk by lifting both legs on one side at the same time? Yes, in snapshot 22w43a, Minecraft knows too! This snapshot also contains another round of tweaks to the Creative Inventory.

Happy Mining!

## Changes in 22w43a

-   Changed the colours of the Camel Spawn Egg
-   Tweaked Camel walk cycle animation
-   Fence Gates no longer provide center support beneath them
-   The Chat Reporting screen now shows when the player being reported rejoined chat
-   More Changes to the Creative Inventory
-   Added Draft Player Reports

### More Changes to the Creative Inventory

A lot of feedback has come pouring in as a result of the creative inventory ordering changes.

#### Changes

-   Change the icons of creative tabs for better color coding as well as show most iconic visuals
-   Nature Blocks tab has been renamed to Natural Blocks
-   Moved dirts and stones to top of Natural Blocks tab which was a big ask from many people (saying they use many of those blocks more than flowers etc)
-   Fixed Water Bottles not populating in the Consumables tab
-   Reordered Quartz so Smooth Quartz is a separate section of blocks
-   Climbable plant blocks are now together in the Natural Blocks tab
-   Fixed order of Waxed Copper blocks
-   Fixed order of Coral Blocks to be consistent
-   Made sure Netherrack was next to Nylium in Natural Blocks tab
-   Reordered equipment so golden tools and weapons were in a logical order
-   Moved normal Rails to be before special Rails
-   Order colored blocks by their gradient (Wool, Terracotta, Candles, Banners, Stained Glass, etc)
-   Moved Signs up higher in the Functional Blocks tab as it is used quite often by players
-   Basalt blocks are now found after Nether Brick blocks in the Building Blocks tab, next to Blackstone
-   Generally reordered the plants of the Natural Blocks tab

#### Additions

-   Added to Redstone Blocks tab
    -   Boat with Chests
    -   Bell
    -   Big Dripleaf
    -   White Wool next to Sculk Sensor
    -   String next to Tripwire Hook
    -   Redstone Ores
    -   Chiselled Bookshelf
-   Added to Consumables tab
    -   Milk Buckets
-   Added to Functional Blocks tab
    -   Ominous Banner
    -   Dragon Egg
    -   Lectern
    -   Lightning Rod
    -   Note Block
-   Added to Crafting tab
    -   Snowball
-   Added to Spawn Eggs tab
    -   Spawner
-   Added to Combat tab
    -   TNT
    -   End Crystal
-   Added to Tools & Utilities tab
    -   Bone Meal

### Added Draft Player Reports

Player Reports can now be kept temporarily as a draft while connected to a server.

-   When exiting the Player Reporting screen, the report can be either discarded or kept as a draft
    -   The draft will always be kept if the screen was forcefully closed (e.g. player dying)
-   Draft reports are kept until the player leaves the current server or world
    -   When leaving, the player will be prompted to either discard or finish and send the report

## Technical Changes in 22w43a

-   Migrated linear algebra types to Java OpenGL Math Library (JOML)

### Network Protocol

-   Servers can now lazily distribute players' profile public keys along with their first chat packet
-   Profile public keys will now be refreshed without reconnecting
-   Clients now reset their chat session on receiving a login packet

## Fixed Bugs in 22w43a

-   [MC-84873](https://bugs.mojang.com/browse/MC-84873) DeathTime values 20+ cause corrupted mobs
-   [MC-92017](https://bugs.mojang.com/browse/MC-92017) Shield damage direction is incorrect
-   [MC-128003](https://bugs.mojang.com/browse/MC-128003) When destroying one block of tall seagrass, the other block becomes air when destroyed, rather than water
-   [MC-188247](https://bugs.mojang.com/browse/MC-188247) Explosions from end crystals can't be blocked by shields
-   [MC-188506](https://bugs.mojang.com/browse/MC-188506) AngryAt cannot be manually applied to endermen
-   [MC-189911](https://bugs.mojang.com/browse/MC-189911) Splash water bottles don't extinguish mobs and player
-   [MC-191948](https://bugs.mojang.com/browse/MC-191948) Ghast fireballs explosions still inflict damage when blocked by a shield
-   [MC-198493](https://bugs.mojang.com/browse/MC-198493) Villagers lose their discounts when relogging while it is a zombie villager
-   [MC-200006](https://bugs.mojang.com/browse/MC-200006) Explosions from beds and respawn anchors can't be blocked by shields
-   [MC-202513](https://bugs.mojang.com/browse/MC-202513) Weeping vines and twisting vines are not grouped with regular vines in creative inventory
-   [MC-222407](https://bugs.mojang.com/browse/MC-222407) Endermen holding big dripleaf stems don't drop big dripleaves upon being killed
-   [MC-244694](https://bugs.mojang.com/browse/MC-244694) The sounds of goats stomping and ramming aren't controlled by the "Friendly Creatures" sound slider
-   [MC-249691](https://bugs.mojang.com/browse/MC-249691) Nylium is not grouped with netherrack in the Creative inventory
-   [MC-252214](https://bugs.mojang.com/browse/MC-252214) Going into water does not extinguish the fire on you if you're in a boat
-   [MC-253542](https://bugs.mojang.com/browse/MC-253542) Spawner blocks with SpawnPotential and no SpawnData will crash during worldgen
-   [MC-254597](https://bugs.mojang.com/browse/MC-254597) Mobs hurt by water don't take water damage when they are on a boat
-   [MC-254634](https://bugs.mojang.com/browse/MC-254634) POIs are not created properly when upgrading worlds
-   [MC-256462](https://bugs.mojang.com/browse/MC-256462) If camel is sitting while exiting and reloading the world, it will play the sitting animation again
-   [MC-256476](https://bugs.mojang.com/browse/MC-256476) Panorama Scroll Speed isn't saved
-   [MC-256483](https://bugs.mojang.com/browse/MC-256483) Acacia hanging signs cannot be crafted
-   [MC-256494](https://bugs.mojang.com/browse/MC-256494) Birch hanging signs cannot be crafted
-   [MC-256495](https://bugs.mojang.com/browse/MC-256495) Z-fighting occurs when the legs of camels intersect one another
-   [MC-256502](https://bugs.mojang.com/browse/MC-256502) Crash when pressing certain buttons while on spectator mode
-   [MC-256515](https://bugs.mojang.com/browse/MC-256515) Hanging signs connect weirdly on the bottom of a fence gate.
-   [MC-256522](https://bugs.mojang.com/browse/MC-256522) Coral Blocks are sorted different than Corals and Coral Fans
-   [MC-256534](https://bugs.mojang.com/browse/MC-256534) Saved hotbars can import disabled items
-   [MC-256573](https://bugs.mojang.com/browse/MC-256573) Water bottles, awkward/mundane/thick potions and tipped arrows don't appear in the Creative Inventory
-   [MC-256575](https://bugs.mojang.com/browse/MC-256575) Some of the translation keys were merged, resulting in some language translation errors
-   [MC-256581](https://bugs.mojang.com/browse/MC-256581) Lightning Rod isn't in Functional Blocks tab in creative inventory
-   [MC-256582](https://bugs.mojang.com/browse/MC-256582) Lectern isn't in Functional Blocks tab in creative inventory
-   [MC-256612](https://bugs.mojang.com/browse/MC-256612) Waxed Exposed Copper blocks are out of order in Building Blocks creative tab
-   [MC-256639](https://bugs.mojang.com/browse/MC-256639) Allays, Piglins, and Villagers lose inventory if unloaded and reloaded
-   [MC-256661](https://bugs.mojang.com/browse/MC-256661) Line spacing on Hanging Signs is too small, causing certain characters to overlap
-   [MC-256705](https://bugs.mojang.com/browse/MC-256705) Discrepancy exists between identifier-allowed characters and path segment-allowed characters
-   [MC-256734](https://bugs.mojang.com/browse/MC-256734) Entities will often spin while pathfinding on top of wall hanging signs
-   [MC-256843](https://bugs.mojang.com/browse/MC-256843) Milk Bucket isn't in the Consumable Tab in the creative inventory
-   [MC-256845](https://bugs.mojang.com/browse/MC-256845) Nether Wart isn't in the Nature Blocks tab in the creative inventory
-   [MC-256846](https://bugs.mojang.com/browse/MC-256846) Chiseled Bookshelf isn't in the Redstone Blocks Tab in the creative inventory
-   [MC-256847](https://bugs.mojang.com/browse/MC-256847) Bone Meal isn't in the Tools & Utilities Tab in the creative inventory
-   [MC-256848](https://bugs.mojang.com/browse/MC-256848) String isn't in the Redstone Blocks Tab in the creative inventory

---

# Minecraft Snapshot 22w42a

Hello there! We are now releasing the first snapshot for 1.19.3! You might have been thinking that this snapshot would be for 1.20, but times are changing. Going forward, we are taking a bit of a different approach to how we release minor and major versions for Minecraft: Java Edition. Essentially, we will be releasing minor versions more often. You can find out more details about this in a post over [here](https://help.minecraft.net/hc/articles/9971900758413).

In this snapshot we’re introducing feature toggle, which you might have seen in [a post we released yesterday](https://www.minecraft.net/en-us/article/testing-new-minecraft-features/feature-toggles-java-edition). This means we can add a toggle for Update 1.20 with features such as the Camel, without committing to releasing them in version 1.19.3. This lets us have experimental features available for testing, while still being able to release updates with new functionality, changes, and improvements, without having to remove those features from the game first.

In this snapshot you’ll be seeing [the features that we talked about during Minecraft Live](https://www.minecraft.net/article/minecraft-live-2022-the-recap) as experimental features, a few changes to chat, some technical changes and many bug fixes.

## New Features in 22w42a

-   Some experimental features are now available through built-in experimental datapacks
-   Bundles are now available as an experimental feature
-   Added a new "Panorama Scroll Speed" accessibility option

### Experimental Features

-   Some experimental features now need to be enabled to appear in worlds
-   Such features are enabled by adding a built-in datapack when creating a world
-   Feature toggles are meant to hide unfinished or experimental features, to make sure your existing worlds remain unaffected
-   Worlds that are using experimental features will be marked as "Experimental" in world selection list
-   Experimental features cannot be toggled for existing worlds

#### Added Camel

Camels are now available when Update 1.20 experimental features are enabled.

-   Camels can be equipped with a saddle and ridden by two players
-   Camels spawn naturally in Desert Villages
-   Camels are tall
    -   Most hostile mobs will not be able to reach you when you are on a Camel
    -   They can walk over fences without a sweat
-   Camels are very graceful, but grumpy mobs
    -   They randomly sit down
    -   While sitting, it is difficult to convince them to move
-   Camels can either walk slowly or sprint quickly
-   They can also dash forward but will lose stamina for a while when doing so

#### Bamboo Wood Set

A new set of Bamboo wood blocks are now available when Update 1.20 experimental features are enabled.

-   New wood blocks
    -   Bamboo Planks
    -   Bamboo Door
    -   Bamboo Trapdoor
    -   Bamboo Sign
    -   Bamboo Stairs
    -   Bamboo Slab
    -   Bamboo Fence
    -   Bamboo Fence Gate
    -   Bamboo Button
    -   Bamboo Pressure Plate
-   Bamboo Planks can be crafted with 2x2 Bamboo items
-   Added a new "Mosaic" plank variant that is unique to Bamboo called Bamboo Mosaic
    -   It can be crafted with 1x2 Bamboo Slabs in a vertical strip
    -   You can craft Stair and Slab variants of Bamboo Mosaic
-   Added a unique Bamboo Raft and Bamboo Chest Raft which can be crafted like normal boats, but with Bamboo Planks
    -   They function the same as ordinary boats, but have a unique look to them

#### Chiseled Bookshelf

A new, chiseled variation of the Bookshelf is now available when Update 1.20 experimental features are enabled.

-   Crafted with 6 planks and 3 wooden slabs
-   Can store Books, Book and Quills, Written Books, and Enchanted Books
    -   Holds up to 6 books
    -   Keeps the stories and lore of your world safe
-   Comparators can detect the last book placed/removed
    -   Perfect for hiding secrets in your spooky library

#### Hanging Signs

Ever wanted to hang up your signs? Fetch a few chains, strip some logs, and now you can! Hanging signs are now available when Update 1.20 experimental features are enabled.

-   Hanging Signs are a more expensive version of normal Signs
    -   Crafted with 2 chains and 6 stripped logs of your preferred wood type
    -   Crafting results in 6 Hanging Signs
-   Can be hung up in the following ways:
    -   Underneath a block that can provide support in the center, like a full block or a fence
    -   Attached to the solid side of a block
    -   Attached to the side or underneath another Hanging Sign
-   Unlike normal Signs, they cannot be placed directly on the ground without support from the side or above
    -   However, Hanging Signs that have a horizontal bar will not pop when the supporting block is removed

### Sounds

-   Various wood types now have unique sounds when placed, broken, or walked on
    -   There are three sets of unique sounds: Overworld wood types, Nether wood types, and Bamboo

## Changes in 22w42a

-   Reworked the Creative Inventory tabs
-   Changes to chat
-   The Realms News button will now show a confirmation screen before opening the link
-   Stronghold placement code has been changed to be more efficient, causing stronghold positions to shift
    -   They are still placed in concentric rings, but their positions in the rings may change by a few degrees

### Creative Inventory

The ordering of tabs and the contents in the Creative Inventory have been tweaked to make the experience of finding relevant blocks and items easier.

-   Blocks and items have been moved into categories that fit them better
-   Blocks are now ordered by their material as much as possible
    -   For example, all Oak blocks and variants are now next to each other
-   Some items can now be found in more than one tab
-   Various tabs have been renamed or collapsed into others
-   The search tab now lists items sequentially grouped by the other tabs
    -   For example, items found in Building Blocks will always appear before items in Redstone Blocks
-   Petrified Oak Slab has been removed from the Creative Inventory
    -   It can still be accessed through commands
-   This is a first iteration to bring a better experience to the Creative Inventory, and we will look closely at the feedback for these changes to iterate as needed

### Chat

-   Removed Chat Preview
-   Chat messages deleted by server moderators will no longer be completely hidden, but rather replaced with text stating "This chat message has been deleted by the server."
-   Deleted chat messages will now be displayed in the chat window for at least 3 total seconds before being hidden
-   The Chat Trust Status indicators have been tweaked:
    -   The 'Modified' tag will no longer display for server-modified messages where only style has been changed
    -   The 'Modified' tag icon and indicator is now dark gray
    -   The 'Not Secure' tag is now light gray and does not have an icon
-   Partially filtered chat messages now show the filtered text as gray hashes with a hover text saying that it was filtered

## Technical Changes in 22w42a

-   Added Feature Flags - world options to enable or disable some experimental or unfinished features (like blocks, entities and items)
-   Network protocol changes
-   Instances of recipe types that have recipe books now have field `category` to determine placement

### Feature flags

#### General notes

-   Feature flags are options that enable or disable certain groups of game elements (like blocks, entities and items), later called "features"
-   Game elements controlled by flags are hardcoded
-   Feature flags are stored in world

#### Configuration and datapack changes

-   Feature flags are enabled by datapacks
    -   New pack metadata section called `features` is added, containing enabled feature flags in list named `enabled`
-   The game now contains built-in datapacks (similar to the "Programmer Art" resource pack) that enable features and provide associated recipes, advancements, loot tables, etc
-   Added new fields to `server.properties` to allow initial selection of packs (works only during world creation)
    -   `initial-enabled-packs` - comma-separated list of packs to be enabled (feature packs need to be explicitly enabled)
    -   `initial-disabled-packs` - comma-separated list of packs to not auto-enable
-   Datapacks discovered after world creation will be disabled if they require features that are not enabled for loaded world

#### Effects of feature flags

##### Blocks

-   Disabled block ids are not recognized by commands that can create new blocks
-   Block items for disabled blocks are disabled
-   Disabled blocks won't spawn in structures
-   Disabled blocks won't be loaded as part of entities (for example as falling sand or blocks carried by Endermen)
-   Players can't interact with disabled blocks

##### Entities

-   Disabled entity ids are not recognized by commands that can summon new entities
-   Disabled entities will not spawn or load
-   Spawn egg items for disabled entities are disabled

##### Items

-   Disabled items are hidden from creative menu
-   Recipes and loot tables are prevented from creating disabled items
-   Disabled item ids are not recognized by commands that can create new items
-   Disabled items can't be used for interactions or attacking

### Network Protocol

-   The network protocol now supports adding player entities to the world without being added to the 'tab' player list
-   Servers can now lazily distribute players' profile public keys along with their first chat packet
-   Message 'headers' within the Secure Chat protocol no longer need to be distributed when private messages are sent
-   Contextual message references are now deduplicated for efficiency within the Secure Chat network protocol

### Recipes

#### Crafting book categories

-   Crafting book categories/tabs can now be controlled by recipe definitions
-   Categories available for `shaped`/`shapeless` and various special crafting recipes:
    -   `building`
    -   `redstone`
    -   `equipment`
    -   `misc` (default)
-   Categories available for `smelting`, `blasting`, `smoking`, `campfire_cooking`
    -   `food`
    -   `blocks`
    -   `misc` (default)
-   Some crafting books collapse multiple categories into a single tab
-   The exact mappings might change in the future

### Resource Packs

-   The Resource Pack version is now 11
-   Removed "fixers" for resource packs with versions 3 and 4 (pre-flattening)
    -   The game will no longer try to adapt packs with those versions to the current version

## Fixed bugs in 22w42a

-   [MC-14167](https://bugs.mojang.com/browse/MC-14167) Mobs build up fall damage when dangling on a lead
-   [MC-96449](https://bugs.mojang.com/browse/MC-96449) Rabbits sometimes don't drop any raw rabbit upon being killed
-   [MC-130754](https://bugs.mojang.com/browse/MC-130754) Jumping on farmland pushes the player a bit
-   [MC-135973](https://bugs.mojang.com/browse/MC-135973) Can't hold Q to drop items rapidly from container inventories
-   [MC-145748](https://bugs.mojang.com/browse/MC-145748) Clicking a settings button when there's a slider under the mouse in the next screen plays the click sound twice
-   [MC-146930](https://bugs.mojang.com/browse/MC-146930) The "Programmer Art" resource pack is internally called "programer;;_;;art"
-   [MC-150488](https://bugs.mojang.com/browse/MC-150488) Mobs can spawn on scaffolding
-   [MC-152752](https://bugs.mojang.com/browse/MC-152752) Jukebox music sound originates from north-west edge of the block
-   [MC-160610](https://bugs.mojang.com/browse/MC-160610) Mobs are able to spawn on Chorus Flowers
-   [MC-170457](https://bugs.mojang.com/browse/MC-170457) Chest latch doesn't rotate properly
-   [MC-170817](https://bugs.mojang.com/browse/MC-170817) Click sound of sliders in the video settings noticeably louder than anywhere else
-   [MC-175313](https://bugs.mojang.com/browse/MC-175313) Composter filling sounds originate from the bottom northwest corner of the block
-   [MC-177738](https://bugs.mojang.com/browse/MC-177738) Spawnpoint set on respawn anchor using /spawnpoint depletes glowstone charge, and doesn't stay on respawn anchor if its charge is depleted
-   [MC-182708](https://bugs.mojang.com/browse/MC-182708) Nether and warped wart blocks do not come after leaves in the Creative inventory
-   [MC-183069](https://bugs.mojang.com/browse/MC-183069) Donkeys, mules and undead horses cannot be saddled by right-clicking
-   [MC-183502](https://bugs.mojang.com/browse/MC-183502) The sounds for collecting honey in a bottle and collecting honeycomb with shears is categorised under friendly creatures
-   [MC-183831](https://bugs.mojang.com/browse/MC-183831) Villagers breed when not standing up
-   [MC-183899](https://bugs.mojang.com/browse/MC-183899) You can set your spawn point inside an end portal, causing the player to become stuck in the End
-   [MC-197150](https://bugs.mojang.com/browse/MC-197150) Horse armor and carpets cannot be equipped onto horses or llamas by right-clicking them whilst having these items held in your hand
-   [MC-199162](https://bugs.mojang.com/browse/MC-199162) One farmland block in plains;;_;;large;;_;;farm;;_;;1 has moisture level 0
-   [MC-201684](https://bugs.mojang.com/browse/MC-201684) Torches and soul torches aren't grouped together in the creative inventory
-   [MC-201759](https://bugs.mojang.com/browse/MC-201759) Obsidians aren't grouped together in Creative
-   [MC-202607](https://bugs.mojang.com/browse/MC-202607) Cat can get off lead by teleporting when it gives a gift after sleeping
-   [MC-206854](https://bugs.mojang.com/browse/MC-206854) Multiplayer warning and Chat Preview warning are off center
-   [MC-216733](https://bugs.mojang.com/browse/MC-216733) Basalt and blackstone are not grouped together with other "polishable" stone types in the Creative inventory
-   [MC-217644](https://bugs.mojang.com/browse/MC-217644) Wart blocks and shroomlights are in different Creative tabs
-   [MC-218534](https://bugs.mojang.com/browse/MC-218534) Blackstone stairs & slabs are not grouped with the other stone type stairs & slabs
-   [MC-220489](https://bugs.mojang.com/browse/MC-220489) Beds and respawn anchors are not grouped in the Creative inventory
-   [MC-221568](https://bugs.mojang.com/browse/MC-221568) Inconsistency: Barriers and structure voids produce particles when broken, but light blocks do not
-   [MC-222879](https://bugs.mojang.com/browse/MC-222879) Netherite scrap comes after netherite ingot in the creative inventory
-   [MC-224921](https://bugs.mojang.com/browse/MC-224921) Mob pathfinding fails under certain circumstances / mobs fall on closed turns
-   [MC-226184](https://bugs.mojang.com/browse/MC-226184) Axolotls pathfinding to water can sometimes fall in wide holes
-   [MC-226566](https://bugs.mojang.com/browse/MC-226566) Inconsistency: Blocks are not placed correctly in Creative inventory
-   [MC-228475](https://bugs.mojang.com/browse/MC-228475) Pointed dripstone is not grouped with dripstone blocks in the creative inventory
-   [MC-234446](https://bugs.mojang.com/browse/MC-234446) Moss Block appears in the wrong creative inventory tab
-   [MC-239465](https://bugs.mojang.com/browse/MC-239465) Emerald block in creative inventory looks out of place
-   [MC-242663](https://bugs.mojang.com/browse/MC-242663) Melons can generate underwater
-   [MC-243458](https://bugs.mojang.com/browse/MC-243458) Worldgen data packs don't work on servers at first launch
-   [MC-248753](https://bugs.mojang.com/browse/MC-248753) Pressure plates don't activate even though visually they should
-   [MC-249106](https://bugs.mojang.com/browse/MC-249106) Water rendering incorrectly through frogspawn hitbox/model
-   [MC-249232](https://bugs.mojang.com/browse/MC-249232) Frogs can sometimes fall into deep holes when pathfinding to entities
-   [MC-249257](https://bugs.mojang.com/browse/MC-249257) The sounds of splashing when creating mud aren't controlled by the "Blocks" sound slider
-   [MC-249294](https://bugs.mojang.com/browse/MC-249294) Rabbits ignore the "MoreCarrotTicks" value, causing them to always try to eat carrots
-   [MC-249419](https://bugs.mojang.com/browse/MC-249419) Map color for mud brick slab is no longer consistent with map color for other mud brick blocks
-   [MC-249463](https://bugs.mojang.com/browse/MC-249463) Shulkers in boats with chests are lowered
-   [MC-249513](https://bugs.mojang.com/browse/MC-249513) Frogspawn is not grouped with turtle eggs in the Creative inventory
-   [MC-249720](https://bugs.mojang.com/browse/MC-249720) Allay's wings are not attached to its body
-   [MC-249765](https://bugs.mojang.com/browse/MC-249765) Allays don't render semi-transparent when invisible where appropriate
-   [MC-249806](https://bugs.mojang.com/browse/MC-249806) Allay renders too low in boat, boat with chest, minecart and entities
-   [MC-249842](https://bugs.mojang.com/browse/MC-249842) Allays attempt to pathfind to items that are outside of the world border
-   [MC-249875](https://bugs.mojang.com/browse/MC-249875) Parity Issue: Allays hesitate for a few seconds before following, throwing items, or doing other actions in Java
-   [MC-249935](https://bugs.mojang.com/browse/MC-249935) New advancement "Birthday Song" grants no experience
-   [MC-250249](https://bugs.mojang.com/browse/MC-250249) Parity Issue: Allays pick up arrow/potion items with other effects than the ones they're holding
-   [MC-250311](https://bugs.mojang.com/browse/MC-250311) The minecraft:entity.tadpole.grow;;_;;up sound event doesn't have a translation key
-   [MC-250423](https://bugs.mojang.com/browse/MC-250423) Frog frequently fails to long jump to small blocks
-   [MC-250943](https://bugs.mojang.com/browse/MC-250943) minecraft.used:minecraft.goat;;_;;horn doesn't increase when using goat horns
-   [MC-251296](https://bugs.mojang.com/browse/MC-251296) Allay has a transparent texture but it is not transparent in game
-   [MC-251518](https://bugs.mojang.com/browse/MC-251518) Allay's poses, flying animations, and dancing animations for duping differ from Bedrock's, causing intense clipping, inconsistencies, choppy movements, and strange item positioning
-   [MC-251688](https://bugs.mojang.com/browse/MC-251688) Chat preview can overlap chat contents if the message is long enough
-   [MC-252089](https://bugs.mojang.com/browse/MC-252089) The chat preview warning menu is forcibly closed when the player dies or changes dimensions
-   [MC-252415](https://bugs.mojang.com/browse/MC-252415) Bedrock Edition's new 1.19.10 splash text is not available on Java 1.19
-   [MC-253076](https://bugs.mojang.com/browse/MC-253076) Allay duplicates Items when its NBT data is updated every tick
-   [MC-253125](https://bugs.mojang.com/browse/MC-253125) Allays can dance while panicking
-   [MC-253189](https://bugs.mojang.com/browse/MC-253189) Allays with NoAI can dance
-   [MC-253367](https://bugs.mojang.com/browse/MC-253367) The screen is sometimes flashed with the "Loading terrain..." screen after proceeding with the chat preview warning when all nearby chunks are loaded
-   [MC-253738](https://bugs.mojang.com/browse/MC-253738) Vibration particle faces at a constant pitch of about 60 degrees, not pointing towards the target
-   [MC-254119](https://bugs.mojang.com/browse/MC-254119) Breeding a Screaming Goat and a Regular Goat never results in a screaming goat
-   [MC-254395](https://bugs.mojang.com/browse/MC-254395) Command suggestions can overlap the chat preview field when the chat preview option is set to "When Sending"
-   [MC-254427](https://bugs.mojang.com/browse/MC-254427) Secure chat warning toast can appear on singleplayer worlds
-   [MC-254535](https://bugs.mojang.com/browse/MC-254535) Nether portals cannot replace snow layers
-   [MC-254695](https://bugs.mojang.com/browse/MC-254695) "Narrator Disabled" pop-up doesn't render fully
-   [MC-254774](https://bugs.mojang.com/browse/MC-254774) Crash when a villager with a gossip of value 0 shares gossips
-   [MC-255151](https://bugs.mojang.com/browse/MC-255151) net.minecraft.client.Camera#getMaxZoom(double) issue
-   [MC-255164](https://bugs.mojang.com/browse/MC-255164) Sculk Shrieker warning level resets to 0 after player's death
-   [MC-255715](https://bugs.mojang.com/browse/MC-255715) Menu panorama stops spinning after several days
-   [MC-256217](https://bugs.mojang.com/browse/MC-256217) Explosions create ghost blocks on servers at high coordinates

---

# Minecraft Snapshot 22w24a

New snapshot! We're now heading towards 1.19.1, which will add Allay duplication, the ability to report chat, and, of course, fix a few bugs.

On the topic of chat reporting, we want everyone to feel safe and welcome in Minecraft, which is why we have community guidelines in place. If you feel unsafe, uncomfortable, or concerned that someone is breaking our [Community Guidelines](https://www.minecraft.net/community-standards) or the [Xbox Community Standards](https://www.xbox.com/legal/community-standards), you can soon report this in-game. Of course, it will also be possible to report incidents over at the [Report a Concern](https://help.minecraft.net/hc/requests/new?ticket_form_id=4416074743565) page.

We are looking for feedback regarding the Chat Reporting feature. For now, any reports made during the testing period may not be actioned on.

Enjoy!

## New Features in 22w24a

-   Added Allay duplication
-   Added Player Chat Reporting

### Allay

-   Allays will dance to a Record playing in a Jukebox
-   If the Allay is handed an Amethyst Shard while dancing it will duplicate
    -   Duplication has a 2.5 minute cooldown

### Player Chat Reporting

It is now possible to report a player for sending abusive messages in the game chat.

A reporter is required to select the individual chat messages that contain the objectionable content, as well as the category of the report, this is to provide the best context for our moderation team to take action.

Accessed via the social interactions screen (default keybind is P).

-   The social interactions screen is now available via the Pause screen when in a multiplayer game
-   Multiple chat messages can be selected for reporting
-   The category of the chat report can be selected from a list of Chat Report Categories
-   Additional comments can be entered to provide more details and information regarding the report

## Fixed bugs in 22w24a

-   [MC-144043](https://bugs.mojang.com/browse/MC-144043) Trader llamas continue to spit after their target died
-   [MC-146891](https://bugs.mojang.com/browse/MC-146891) Nitwit villager can have a profession
-   [MC-177505](https://bugs.mojang.com/browse/MC-177505) Cured Villager can work at wrong workstation
-   [MC-249523](https://bugs.mojang.com/browse/MC-249523) Sky color is visible for a brief moment after applying Night Vision under Darkness effect
-   [MC-250261](https://bugs.mojang.com/browse/MC-250261) Frogs can lay spawn on flowing water
-   [MC-250267](https://bugs.mojang.com/browse/MC-250267) Frogs don't lay their spawn on waterlogged blocks
-   [MC-252082](https://bugs.mojang.com/browse/MC-252082) Loading server resource packs reloads twice when one is already loaded
-   [MC-252363](https://bugs.mojang.com/browse/MC-252363) Mobs that naturally spawn in with equipment will play the respective equipping noise
-   [MC-252439](https://bugs.mojang.com/browse/MC-252439) Cured Villager trades are not refreshing
-   [MC-252539](https://bugs.mojang.com/browse/MC-252539) Commands sending messages use formatting of regular chat in server logs
-   [MC-252683](https://bugs.mojang.com/browse/MC-252683) Unexpected exception in the selector loop causing server lag

---

