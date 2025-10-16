# Minecraft 1.21.10 Release Candidate 1

Today we are shipping Release Candidate 1 for 1.21.10, a hotfix release fixing a couple of issues that have bubbled up to the surface following the release of The Copper Age drop.

Happy mining!

## Fixed bugs in 1.21.10 Release Candidate 1

-   [MC-211096](https://bugs.mojang.com/browse/MC-211096) Entities in cobwebs clip though pistons
-   [MC-278182](https://bugs.mojang.com/browse/MC-278182) Items glitch inside the piston head when pushed through powder snow or cobwebs
-   [MC-301916](https://bugs.mojang.com/browse/MC-301916) The behavior of wind charges when colliding with certain blocks is different
-   [MC-302321](https://bugs.mojang.com/browse/MC-302321) Chunks don't load while the player is being teleported
-   [MC-302383](https://bugs.mojang.com/browse/MC-302383) Rooms with carpet on the floor cannot have maps in item frames placed on walls touching the floor
-   [MC-302405](https://bugs.mojang.com/browse/MC-302405) Repeating(or chain) command block with any form of /tp \[player\] doesn't constantly tp player to one spot
-   Fixed an issue that caused entities on bubble columns to fly high up into the air

---

Before we get to new snapshots, today we are delivering Release Candidate 1 for Minecraft 1.21.1. This is a hotfix version fixing critical exploits. If no other critical issues are found, 1.21.1 can be expected to be released later this week.

## Changes

-   Fixed critical exploits
-   Added language support for Tzotzil and Belarusian (Latin)

---

Here is the first Release Candidate for 1.21, addressing some critical issues. Apart from that we decided to revert the changes made in Pre-Release 4 to armor enchantments based on your feedback.

Happy mining!

## Changes

-   The changes to Burn Time reduction from Fire Protection and Knockback reduction from Blast Protection from pre-release 4 have been reverted
    -   We have heard your feedback, and we expect to rebalance these two enchantments in the future to find a better place for them
    -   Values are now the same as in 1.20.6
    -   These effects still stack from wearing multiple pieces (changed from 1.20.6)

## Fixed bugs in 1.21 Release Candidate 1

-   [MC-272888](https://bugs.mojang.com/browse/MC-272888) Zooming with riptide still applies mace wind burst if held in main hand
-   [MC-273007](https://bugs.mojang.com/browse/MC-273007) Projectiles have incorrect motion when shot from a vehicle which was entered with player velocity
-   [MC-273158](https://bugs.mojang.com/browse/MC-273158) Animals stay floating after getting on a boat

---

Frog day on a Friday? What could go wrong? We're back with 1.21 Pre-Release 4 today, with a couple more bug fixes, and some tweaks to the Blast Resistance and Fire Protection enchantments.

## Changes

-   The "Burning Time" reduction effect of Fire Protection and "Knockback Resistance" effect of Blast Protection now stack from wearing several pieces
    -   To get the maximum benefit of these effects, you now need to wear a full set of enchanted armor
    -   Wearing a fully enchanted armor set still grants the same effect as in 1.20.6
    -   Wearing only a single piece of enchanted armor now has reduced effect compared to before
-   After a Primed TNT has gone through a Nether Portal, it will no longer be able to destroy Nether Portal blocks

## Fixed bugs in 1.21 Pre-Release 4

-   [MC-270540](https://bugs.mojang.com/browse/MC-270540) The prevention of fall damage from wind charges is not retained upon reloading the world
-   [MC-271971](https://bugs.mojang.com/browse/MC-271971) Wind Charges sometimes don't prevent fall damage
-   [MC-272933](https://bugs.mojang.com/browse/MC-272933) Fire protection burning time reduction now stacks for every piece of armor
-   [MC-272935](https://bugs.mojang.com/browse/MC-272935) Blast protection explosion knockback resistance now stacks for every piece of armor
-   [MC-272947](https://bugs.mojang.com/browse/MC-272947) Boat clutching after using a wind charge results in the player taking fall damage
-   [MC-272948](https://bugs.mojang.com/browse/MC-272948) Wind Burst damages the player twice on one use, even when using Wind Charges
-   [MC-272981](https://bugs.mojang.com/browse/MC-272981) Using a wind charge to stop the fall damage after using the wind burst enchantment doesn't correctly cancel the damage
-   [MC-272982](https://bugs.mojang.com/browse/MC-272982) Mace can have sharpness

---

