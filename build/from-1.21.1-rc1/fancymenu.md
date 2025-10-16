# Minecraft 1.21.1 Release Candidate 1

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

The third pre-release for 1.21 is now available and it comes with even more bugfixes!

Additionally, we introduced some intentional but undocumented changes to the Wind Burst Enchantment in Pre-Release 1 last week. To remedy this, we're including those changes in this changelog instead.

Happy mining!

## Changes

### Wind Burst

-   Following changes were introduced in Pre-Release 1; The Wind Burst enchantment now bounces the player 7 blocks up per enchantment level
    -   With great power comes great responsibility - and risk! At level 3, the enchantment will bounce the player 21 blocks up which _doing some quick maths_ will hurt quite a bit when hitting the ground again
    -   In other words, make sure you have a target locked in (or other means of mitigating the fall damage) before making contact with the ground again

## Technical Changes

-   Data Pack version is now 48

## Data Pack Version 48

-   `replace_disc` entity effect type is renamed to `replace_disk`

## Fixed bugs in 1.21 Pre-Release 3

-   [MC-252817](https://bugs.mojang.com/browse/MC-252817) Placing a map into an item frame and removing it does not remove the green player marker
-   [MC-267988](https://bugs.mojang.com/browse/MC-267988) Tamed entities ignore their "LookAtPlayerGoal" distance and look in the direction of their owners from any distance when being stood up
-   [MC-272194](https://bugs.mojang.com/browse/MC-272194) Empty Attribute Modifiers lost during upgrade
-   [MC-272565](https://bugs.mojang.com/browse/MC-272565) Hanging leashed boats gain excessive upward momentum
-   [MC-272577](https://bugs.mojang.com/browse/MC-272577) Summoning any entity with rotation causes it to be rotated incorrectly
-   [MC-272582](https://bugs.mojang.com/browse/MC-272582) Mip-mapping not properly applied to moss carpet
-   [MC-272661](https://bugs.mojang.com/browse/MC-272661) Entities have incorrect rotations after loading or reloading a world
-   [MC-272670](https://bugs.mojang.com/browse/MC-272670) Crash while saving entity NBT - Cannot encode empty ItemStack
-   [MC-272772](https://bugs.mojang.com/browse/MC-272772) Leashed Boats' leashes disappear upon rejoining world
-   [MC-272789](https://bugs.mojang.com/browse/MC-272789) Leashing a boat to a fence which already has a lead attached to it removes the existing lead rather than attaching the new one
-   [MC-272798](https://bugs.mojang.com/browse/MC-272798) Teleporting a leashed boat (with chest) or raft (with chest) to another dimension makes a ghost lead
-   [MC-272809](https://bugs.mojang.com/browse/MC-272809) Placed boats/rafts no longer face the same direction as the player
-   [MC-272814](https://bugs.mojang.com/browse/MC-272814) Entering an end gateway does not consistently grant the Remote Getaway advancement
-   [MC-272827](https://bugs.mojang.com/browse/MC-272827) Unleashing boats leashed to fences via Use Item/Place Block drops the lead in Creative mode
-   [MC-272843](https://bugs.mojang.com/browse/MC-272843) Stepping up blocks while falling on the side of them can sometimes allow players to climb to normally unreachable heights
-   [MC-272854](https://bugs.mojang.com/browse/MC-272854) Crash when entity is leashed by non-LivingEntity
-   [MC-272870](https://bugs.mojang.com/browse/MC-272870) /execute on leasher does not work for leashed boats
-   [MC-272879](https://bugs.mojang.com/browse/MC-272879) Entering an End portal makes you face the entering direction rather than always facing west
-   [MC-272886](https://bugs.mojang.com/browse/MC-272886) Maces incorrectly cause damage to the player
-   [MC-272901](https://bugs.mojang.com/browse/MC-272901) Boats & Rafts with Chests cannot be leashed if they have a passenger

---

