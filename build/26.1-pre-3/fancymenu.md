# Minecraft 26.1 Pre-Release 3

Today we are shipping the third pre-release with minor tech changes and bug fixes.

Happy mining!

## Technical Changes

-   The Data Pack version is now 101.1

## Data Pack Version 101.1

### World Generation

**Placement Modifiers**

**`count` Placement Modifier**

-   The `count` field is now limited to a range of `0` to `4096` instead of the previous `256`

## Fixed bugs in 26.1 Pre-Release 3

-   [MC-305118](https://bugs.mojang.com/browse/MC-305118) Resource packs previously labeled as "Broken or incompatible" don't show up at all
-   [MC-306240](https://bugs.mojang.com/browse/MC-306240) /fill does not obey the max;;_;;block;;_;;modifications game rule if too many blocks are in the specified area
-   [MC-306620](https://bugs.mojang.com/browse/MC-306620) Feeding a snifflet with a golden dandelion resets its age to the wrong amount of ticks
-   [MC-306805](https://bugs.mojang.com/browse/MC-306805) Baby zombie villagers' arms are positioned and move incorrectly when holding an item
-   [MC-306840](https://bugs.mojang.com/browse/MC-306840) Dolphins still drown themselves when no players are nearby
-   [MC-306850](https://bugs.mojang.com/browse/MC-306850) The `caves` and `floating_islands` noise settings no longer generate as intended
-   [MC-306854](https://bugs.mojang.com/browse/MC-306854) Unmentioned differences of villager trades between 1.21.11 and 26.1 snapshots
-   [MC-306859](https://bugs.mojang.com/browse/MC-306859) The arms of baby zombies, baby husks, gurgles, and baby zombie villagers clip through their worn chestplates when holding items
-   [MC-306860](https://bugs.mojang.com/browse/MC-306860) Player object text components in server status messages (MotD) are no longer replaced by fallback text
-   [MC-306898](https://bugs.mojang.com/browse/MC-306898) Placed / Configured Features are now limited to only 256 tries, previously higher numbers where possible
-   [MC-306899](https://bugs.mojang.com/browse/MC-306899) The blocklists of the `fire_patch` and `soul_fire_patch` features are inverted, causing generation issues