# 1.20-pre6

The sixth pre-release of the 1.20 update is here, yet again containing more bug fixes.

Happy mining!

## Technical Changes

-   `"item": "minecraft:air"` can no longer be used in datapack recipes
-   Ingredients in array form are now also allowed in `smithing_trim` and `smithing_transform` recipes on fields `template`, `base` and `addition`
    -   Those fields also allow empty arrays, which signalize that slot needs to be left empty

### Loot tables

#### Random sequences

The ID of the random sequence is now an optional field. If no sequence name is given, loot is drawn using a non-deterministic random source.

## Fixed bugs in 1.20 Pre-Release 6

-   [MC-237042](https://bugs.mojang.com/browse/MC-237042) Killing players in the sneaking state that have their sneak option set to "Toggle" in their accessibility settings, results in other players not being able to see them in this state when they respawn
-   [MC-241326](https://bugs.mojang.com/browse/MC-241326) Thomas Guimbretière's name is listed twice and misspelt in the credits
-   [MC-260411](https://bugs.mojang.com/browse/MC-260411) Re-summoned dragons don't spawn end gateways when exiting the world before killing the dragon
-   [MC-262340](https://bugs.mojang.com/browse/MC-262340) Iron Golems can spawn on transparent blocks
-   [MC-262575](https://bugs.mojang.com/browse/MC-262575) Company names are still inconsistent in the credits