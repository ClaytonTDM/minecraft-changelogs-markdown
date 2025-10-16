# Minecraft 1.21.9 Release Candidate 1

We are now releasing the first, and hopefully only, release-candidate for 1.21.9. If all goes well, no further changes will be made before the full release. Happy mining!

## Fixed bugs in 1.21.9 Release Candidate 1

-   [MC-302243](https://bugs.mojang.com/browse/MC-302243) Creakings can spawn with the "spawnMonsters" game rule set to false
-   [MC-302278](https://bugs.mojang.com/browse/MC-302278) The texture in the middle of conduits is upside down

---

Here is another Pre-Release for 1.21.9 with more bugfixes!

## Changes

### UI

-   Debug Options screen is now accessible using F3 + F6, instead of the previous F3 + F5

## Fixed bugs in 1.21.9 Pre-Release 4

-   [MC-300216](https://bugs.mojang.com/browse/MC-300216) The new F3 + F5 debug settings menu does not open on Mac keyboards
-   [MC-301735](https://bugs.mojang.com/browse/MC-301735) Server Management Protocol Kick command parameter mis match
-   [MC-302039](https://bugs.mojang.com/browse/MC-302039) Conduits don't have the block-breaking animation.
-   [MC-302119](https://bugs.mojang.com/browse/MC-302119) Shield with patterns has no enchantment glint when enchanted
-   [MC-302130](https://bugs.mojang.com/browse/MC-302130) Mobs have visual glitches all over them
-   [MC-302170](https://bugs.mojang.com/browse/MC-302170) Player Heads do not Glow
-   [MC-302240](https://bugs.mojang.com/browse/MC-302240) Bugs on ranged weapons

---

We'll kick the week off with a third pre-release for the Copper Age Drop. This pre-release includes a performance update and bug fix for the copper golem.

## Fixed bugs in 1.21.9 Pre-Release 3

-   [MC-301963](https://bugs.mojang.com/browse/MC-301963) Copper golems cause huge lag spikes when checking chests
-   [MC-301990](https://bugs.mojang.com/browse/MC-301990) Copper golem statues cause culling issues when placed above certain blocks

---

We heard Friday would be a Pre-tty cool day to release the second Pre-Release for Minecraft: Java Edition 1.21.9, so here we are! This pre-release contains fixes to various issues introduced in previous snapshots, as well as a missed bump to the Data Pack major version.

Happy Crafting!

## Changes

-   Copper Golems will now oxidize even when the game rule `doDaylightCycle` is disabled
-   The Copper Golem's behavior for turning into a statue has been tweaked to match Bedrock
    -   Copper Golems no longer need to be close to the center of an empty block position in order to turn into a statue
    -   Copper Golems now have the possibility to turn into a statue as soon as they become fully oxidized

## Technical Changes

-   The Data Pack version is now 88.0, to match the breaking change to `/setworldspawn` and `/spawnpoint` in the 1.21.9-pre1

## Fixed bugs in 1.21.9 Pre-Release 2

-   [MC-300362](https://bugs.mojang.com/browse/MC-300362) Copper golems do not oxidize when doDaylightCycle is disabled
-   [MC-301566](https://bugs.mojang.com/browse/MC-301566) Occasional sound crash on resource pack reload
-   [MC-301706](https://bugs.mojang.com/browse/MC-301706) Server Management Protocol does not support parameters as object (by-name)
-   [MC-301770](https://bugs.mojang.com/browse/MC-301770) The `below_name` plate is not displayed higher for players and mannequins named “deadmau5”
-   [MC-301963](https://bugs.mojang.com/browse/MC-301963) Copper golems cause huge lag spikes when checking chests
-   [MC-302088](https://bugs.mojang.com/browse/MC-302088) Oxidized Copper Golems take an extremely long time to turn into a statue
-   [MC-302112](https://bugs.mojang.com/browse/MC-302112) Posed mannequins don't use the correct hitbox
-   [MC-302117](https://bugs.mojang.com/browse/MC-302117) Text display billboarding is broken
-   [MC-302120](https://bugs.mojang.com/browse/MC-302120) Dimension-specific world spawn point causes mob spawning in other dimensions to fail
-   [MC-302148](https://bugs.mojang.com/browse/MC-302148) Copper Golem does not get close enough to search the chest, getting permanently stuck
-   [MC-302164](https://bugs.mojang.com/browse/MC-302164) Breaking change to /setworldspawn and /spawnpoint in minor datapack version

---

