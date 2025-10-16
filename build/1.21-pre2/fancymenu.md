# Minecraft 1.21 Pre-Release 2

We're rounding out the week with the second Pre-Release of 1.21, with a lot of bug fixes. In case you did not catch the news, the full release of 1.21 is planned for the 13th of June!

Happy mining!

## Changes

-   End Crystals are now immune to fire damage
-   Added an attestation checkbox when submitting a player report
-   Heavy Core, Trident and Mace are now considered of Epic rarity, giving their hover text a purple color

## Technical Changes

-   Data Pack version is now 47

## Data Pack Version 47

-   Added new placement modifier type `fixed_placement` to place features in a set of fixed positions
-   Added new feature type `end_platform` for the obsidian platform in the end

## Fixed bugs in 1.21 Pre-Release 2

-   [MC-223165](https://bugs.mojang.com/browse/MC-223165) The Snout Banner Pattern is treated as common in the game.
-   [MC-269359](https://bugs.mojang.com/browse/MC-269359) "Field Masoned", "Skull Charge", "Flow", and "Guster" banner patterns are not mirrored on the backside
-   [MC-269389](https://bugs.mojang.com/browse/MC-269389) Flow banner pattern is treated as common loot
-   [MC-269390](https://bugs.mojang.com/browse/MC-269390) Guster banner pattern is treated as common loot
-   [MC-270033](https://bugs.mojang.com/browse/MC-270033) Infested or Oozing effect cloud shrinks when silverfish or slime enters it
-   [MC-271199](https://bugs.mojang.com/browse/MC-271199) Advancement 'Local Brewery' not granted on shift-clicking
-   [MC-271754](https://bugs.mojang.com/browse/MC-271754) Copper doors can be used as furnace fuel
-   [MC-271887](https://bugs.mojang.com/browse/MC-271887) Your FOV doesn't change back to normal after jumping off from soul sand/soul soil while wearing soul speed boots
-   [MC-271892](https://bugs.mojang.com/browse/MC-271892) Your FOV doesn't immediately change when jumping onto soul sand/soul soil while having the slow falling effect and wearing soul speed boots
-   [MC-272224](https://bugs.mojang.com/browse/MC-272224) 'in;;_;;bounding;;_;;box' vertical position for 'spawn;;_;;particles' effect is anchored incorrectly
-   [MC-272241](https://bugs.mojang.com/browse/MC-272241) Error when traveling through nether portal outside world border
-   [MC-272333](https://bugs.mojang.com/browse/MC-272333) The gamerule spawnRadius doesn't work anymore on respawn (always respawn at the same place)
-   [MC-272547](https://bugs.mojang.com/browse/MC-272547) block.portal.travel sound no longer plays when entering End portal
-   [MC-272550](https://bugs.mojang.com/browse/MC-272550) End crystals now receive fire damage causing them to explode instantly
-   [MC-272553](https://bugs.mojang.com/browse/MC-272553) Naturally generated End Stone drops in cases where the Obsidian platform generates inside the island
-   [MC-272556](https://bugs.mojang.com/browse/MC-272556) Ender pearls don't work correctly when riding entities and cause players to be teleported for a split second
-   [MC-272559](https://bugs.mojang.com/browse/MC-272559) Players cannot traverse dimensions when throwing ender pearls into portals while riding entities
-   [MC-272563](https://bugs.mojang.com/browse/MC-272563) The ender dragon death animation is rendered behind blocks when using "Fabulous!" graphic settings
-   [MC-272571](https://bugs.mojang.com/browse/MC-272571) Server crashes upon updating from 24w21b to 1.21 Pre-release 1.
-   [MC-272583](https://bugs.mojang.com/browse/MC-272583) Each time you pass through an end gateway with an ender pearl from the main island, a new portal is created
-   [MC-272585](https://bugs.mojang.com/browse/MC-272585) Crash when bow or crossbow enchanted with multishot runs out of durability
-   [MC-272588](https://bugs.mojang.com/browse/MC-272588) Wind Charges can trigger Wind Burst
-   [MC-272595](https://bugs.mojang.com/browse/MC-272595) Breaking a Carrot/Warped Fungus on a Stick no longer gives a Fishing Rod
-   [MC-272596](https://bugs.mojang.com/browse/MC-272596) Throwing an ender pearl into the end fountain skips the credits
-   [MC-272625](https://bugs.mojang.com/browse/MC-272625) Game crashes when saving after teleporting a leashed entity to another dimension
-   [MC-272638](https://bugs.mojang.com/browse/MC-272638) Leads attached to a boat are deleted when breaking the boat
-   [MC-272639](https://bugs.mojang.com/browse/MC-272639) trial;;_;;spawner;;_;;bottom texture is different from Bedrock
-   [MC-272650](https://bugs.mojang.com/browse/MC-272650) Can respawn mid-air with default spawnpoint