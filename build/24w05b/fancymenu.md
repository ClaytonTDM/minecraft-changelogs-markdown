# Minecraft Snapshot 24w05b

We are now releasing 24w05b to address a crash and bug introduced in yesterday's snapshot.

Happy mining!

## Technical Changes

-   Potion effect amplifiers are now restricted between 0 and 127

## Fixed bugs in 24w05b

-   [MC-118857](https://bugs.mojang.com/browse/MC-118857) Effect amplifier is read/written as byte from NBT despite being stored as an integer
-   [MC-268168](https://bugs.mojang.com/browse/MC-268168) Chainmail armor texture broken due to armor material renaming
-   [MC-268172](https://bugs.mojang.com/browse/MC-268172) Game crashes when saving an entity's effect above 127