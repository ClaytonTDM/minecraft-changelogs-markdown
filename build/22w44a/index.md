Another Wednesday, another snapshot. This week's snapshot introduces a few new game rules and a few gameplay changes which include another round of inventory tweaks. As usual, there are a few bugfixes as well.

Happy Mining!

# Changes in 22w44a

-   Bamboo Mosaic can now be used as fuel
-   Chiseled Bookshelves now works with Hoppers
-   More changes to the Creative Inventory
-   Monster Spawner changes
-   Spawn Egg changes
-   Step sound changes

## Creative Inventory changes

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

## Monster Spawners

-   Spawners no longer have a default mob spawn type when placed by a player (previously was the Pig)
-   Will not emit fire particles when a mob spawn type has not been defined
-   Renamed to Monster Spawner to match Bedrock, and removed purple text color
-   Pick-block now works for Spawner blocks
-   The mob type is now displayed in the hover description of a Spawner item stack
    -   If a mob type has not been defined yet, the hover description will describe how to set it

## Spawn Eggs

-   Added new Spawn Egg items for Ender Dragon, Iron Golem, Snow Golem and Wither mobs to Creative mode
    -   Ender Dragon and Wither Spawn Eggs will only be available through commands to prevent accidental destruction of player builds
-   Polar Bear Spawn Egg colors have changed to distinguish it from the Ghast Spawn Egg

## Sounds

-   Step sounds can now be heard when walking on:
    -   Carpets
    -   Lily Pads
    -   Small Amethyst Buds
-   Step sounds can now be heard when walking through:
    -   Nether Sprouts
    -   Glow Lichen
    -   Crimson Roots
    -   Warped Roots

# Technical Changes in 22w44a

-   Added new game rules

## Game Rules

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

# Fixed bugs in 22w44

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