# 1.20.2-pre2

Another pre-release this week with minor changes and some bug fixes.

## Recipe book search revert

We received a lot of great feedback on the changes to the Recipe Book search in the last pre-release, as well as a number of bugs. As we do not have time to address this feedback so close to release, we have reverted the change for now, but we may look into this again at a later time.

## Technical Changes

-   The resource pack version is now 18 accounting for the new icons in last pre-release

## Fixed bugs in 1.20.2 Pre-release 2

-   [MC-109346](https://bugs.mojang.com/browse/MC-109346) Newly rendered players always look south until they move their head
-   [MC-206182](https://bugs.mojang.com/browse/MC-206182) Cannot tab out of console text field of command block
-   [MC-235762](https://bugs.mojang.com/browse/MC-235762) Screenshots wider than 16384 pixels causes a crash / java.lang.OutOfMemoryError: Out of stack space
-   [MC-249702](https://bugs.mojang.com/browse/MC-249702) Server crash: java.lang.NullPointerException: Cannot invoke "com.google.gson.JsonArray.iterator()" because "$$1" is null
-   [MC-261119](https://bugs.mojang.com/browse/MC-261119) Accessibility button in the Welcome screen needs its own string
-   [MC-262754](https://bugs.mojang.com/browse/MC-262754) Change in AbstractScrollWidget breaks MultiLineEditBox click-to-move-cursor behaviour
-   [MC-264759](https://bugs.mojang.com/browse/MC-264759) Narrator narrates incorrect tab action in command block suggestions
-   [MC-265237](https://bugs.mojang.com/browse/MC-265237) Recipe book search no longer finds anything containing non-English characters
-   [MC-265241](https://bugs.mojang.com/browse/MC-265241) Recipe book search no longer finds relevant items in languages where compound words are not separated
-   [MC-265243](https://bugs.mojang.com/browse/MC-265243) Uncraftable variants of a craftable recipe are shown as craftable now
-   [MC-265244](https://bugs.mojang.com/browse/MC-265244) Macro arguments entered as floats are converted to scientific notation
-   [MC-265245](https://bugs.mojang.com/browse/MC-265245) Crafting book search doesn't find anything when a space is included in the search
-   [MC-265253](https://bugs.mojang.com/browse/MC-265253) Fullscreen Resolution value is untranslatable
-   [MC-265260](https://bugs.mojang.com/browse/MC-265260) Boats and rafts when placed turn south
-   [MC-265262](https://bugs.mojang.com/browse/MC-265262) Revoked recipes remain in the recipe book until relogging
-   [MC-265263](https://bugs.mojang.com/browse/MC-265263) Ender Pearl vanishes client side when enderPearlsVanishOnDeath is false
-   [MC-265264](https://bugs.mojang.com/browse/MC-265264) trade\_rebalance tags are not in the trade\_rebalance pack
-   [MC-265276](https://bugs.mojang.com/browse/MC-265276) Fire under naturally generated end crystals does not always emit light correctly
-   [MC-265280](https://bugs.mojang.com/browse/MC-265280) Mobs sometimes become invisible when you join a singleplayer world