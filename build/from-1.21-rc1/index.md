# Minecraft 1.21 Release Candidate 1

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
-   [MC-272224](https://bugs.mojang.com/browse/MC-272224) 'in\_bounding\_box' vertical position for 'spawn\_particles' effect is anchored incorrectly
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
-   [MC-272639](https://bugs.mojang.com/browse/MC-272639) trial\_spawner\_bottom texture is different from Bedrock
-   [MC-272650](https://bugs.mojang.com/browse/MC-272650) Can respawn mid-air with default spawnpoint

---

