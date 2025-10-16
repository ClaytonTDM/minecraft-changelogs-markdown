# Minecraft 1.17.1 Release Candidate 1

A first and hopefully only Release Candidate for Minecraft: Java Edition 1.17.1 is now available in the launcher, fixing a few more crashes and bugs. If nothing critical is found, we expect this to be released as the full version of 1.17.1 on Tuesday, July 6th.

## The Caves & Cliffs Preview

Download the [latest datapack](https://launcher.mojang.com/v1/objects/622bf0fd298e1e164ecd05d866045ed5941283cf/CavesAndCliffsPreview.zip).

## Fixed bugs in 1.17.1 Release Candidate 1

-   [MC-230716](https://bugs.mojang.com/browse/MC-230716) "death.attack.dryout" and "death.attack.dryout.player" display raw translation strings (are untranslated)

---

A third pre-release for 1.17.1 is now available in your launcher, fixing a few more crashes and bugs.

## The Caves & Cliffs Preview

​ Download the [latest datapack](https://launcher.mojang.com/v1/objects/622bf0fd298e1e164ecd05d866045ed5941283cf/CavesAndCliffsPreview.zip). ​

## Fixed bugs in 1.17.1 Pre-release 3

​

-   [MC-222731](https://bugs.mojang.com/browse/MC-222731) Captured axolotl constantly tries to leave water
-   [MC-224894](https://bugs.mojang.com/browse/MC-224894) Light tickets are released too early
-   [MC-228802](https://bugs.mojang.com/browse/MC-228802) Chunks not loading on a server / Cannot invoke "cmq.a(int, int, int)" because "☃" is null
-   [MC-228858](https://bugs.mojang.com/browse/MC-228858) Axolotls despawning though named and on leashes.
-   [MC-229246](https://bugs.mojang.com/browse/MC-229246) Piglins and piglin brutes no longer call other piglins after attacking one of them behind walls
-   [MC-229475](https://bugs.mojang.com/browse/MC-229475) Placing a small dripleaf results in the top half of water getting deleted
-   [MC-229887](https://bugs.mojang.com/browse/MC-229887) "Unable to create a jar-filesystem" warning logged upon starting the game

---

The second pre-release for 1.17.1 is now available in your launcher. This pre-release fixes a few more bugs.

## The Caves & Cliffs Preview

Download the [latest datapack](https://launcher.mojang.com/v1/objects/622bf0fd298e1e164ecd05d866045ed5941283cf/CavesAndCliffsPreview.zip).

## Technical Changes in 1.17.1 Pre-release 1

-   Deaths of named mobs are now logged

## Fixed Bugs in 1.17.1 Pre-Release 2

-   [MC-219290](https://bugs.mojang.com/browse/MC-219290) Calcite is too quiet compared to other blocks
-   [MC-221656](https://bugs.mojang.com/browse/MC-221656) Creative mode obtained Bucket of Axolotl/Tropical Fish only spawns one kind axolotl/tropical fish
-   [MC-226926](https://bugs.mojang.com/browse/MC-226926) Emerald ore generates too often
-   [MC-228599](https://bugs.mojang.com/browse/MC-228599) Attempting to walk through flowing water constantly switches the player from swimming into normal mode
-   [MC-229191](https://bugs.mojang.com/browse/MC-229191) Diamond ore distribution changed between 1.16.5 and 1.17
-   [MC-229441](https://bugs.mojang.com/browse/MC-229441) You can steal the item a villager is holding for trade by killing it
-   [MC-229614](https://bugs.mojang.com/browse/MC-229614) Wandering Trader obtained tropical fish are only white kob
-   [MC-229983](https://bugs.mojang.com/browse/MC-229983) /clear command doesn't clear certain stacks after dropping items from them

---

Happy Friday! The first pre-release for 1.17.1 is now available for download. This pre-release introduces a few changes to some gameplay mechanics, and it also fixes a bunch of bugs.

## Changes in 1.17.1 Pre-release 1

-   Blue axolotls can now only be obtained through breeding
-   Non-screaming goats now have a rare chance to produce a screaming goat when bred
-   Status effects on goats now also apply when the goat is jumping or ramming
-   Raised the drop rate for copper ingots from Drowned to 11% + 2% per level of looting
-   Powder snow now fills cauldrons 2 times faster than before (still pretty slowly, though!)
-   Zombies, Zombie Villagers, Husks and Drowned will no longer pick up glow ink sacs

## The Caves & Cliffs Preview

Download the [latest datapack](https://launcher.mojang.com/v1/objects/622bf0fd298e1e164ecd05d866045ed5941283cf/CavesAndCliffsPreview.zip).

## Technical Changes in 1.17.1 Pre-release 1

-   In case of DNS-based redirection, the client will send the hostname actually used to connect (this restores the pre-1.17 behaviour)

## Bugs fixed in 1.17.1 Pre-release 1

-   [MC-123654](https://bugs.mojang.com/browse/MC-123654) Sun, moon, and/or clouds are not showing if render distance is below 4
-   [MC-131290](https://bugs.mojang.com/browse/MC-131290) Enchantments are saved as shorts, but are loaded as and function with integer values
-   [MC-156155](https://bugs.mojang.com/browse/MC-156155) Turkish lira sign (₺) appears as □ in the game
-   [MC-194736](https://bugs.mojang.com/browse/MC-194736) Duplicate text mapping for U+00B7
-   [MC-196999](https://bugs.mojang.com/browse/MC-196999) U+1FEC is wrong in Minecraft's font
-   [MC-213986](https://bugs.mojang.com/browse/MC-213986) Pistons and dispensers can be used to create ghost blocks using powder snow
-   [MC-219018](https://bugs.mojang.com/browse/MC-219018) Ghost items can be created using /item (server doesn't update client inventory correctly)
-   [MC-223350](https://bugs.mojang.com/browse/MC-223350) Loaded chunks sometimes don't render until the player moves their head slightly
-   [MC-225816](https://bugs.mojang.com/browse/MC-225816) Hanging Roots appear large when an item entity
-   [MC-226461](https://bugs.mojang.com/browse/MC-226461) Logs can be replaced with stone near lava pools
-   [MC-226948](https://bugs.mojang.com/browse/MC-226948) Withers are now affected by potion effects
-   [MC-227387](https://bugs.mojang.com/browse/MC-227387) World gen datapacks will likely crash or softlock the game
-   [MC-227435](https://bugs.mojang.com/browse/MC-227435) Lag when placing heads of non-existent players when on servers
-   [MC-227483](https://bugs.mojang.com/browse/MC-227483) root\_system feature config's codec uses a wrong field
-   [MC-227520](https://bugs.mojang.com/browse/MC-227520) Overworld Fossils always generate at bedrock level
-   [MC-227557](https://bugs.mojang.com/browse/MC-227557) End portal texture appears stretched after world conversion
-   [MC-227618](https://bugs.mojang.com/browse/MC-227618) Small dripleaf is consumed without being placed when used on tall seagrass
-   [MC-227651](https://bugs.mojang.com/browse/MC-227651) Group for lapis lazuli ore smelting and blasting recipes is misspelled
-   [MC-227821](https://bugs.mojang.com/browse/MC-227821) Client crash when trying to create/edit realm immediately after deleting previous one
-   [MC-227891](https://bugs.mojang.com/browse/MC-227891) Ender pearls despawn when player logs out of a server
-   [MC-228219](https://bugs.mojang.com/browse/MC-228219) Thrown ender pearls disappear upon entering the exit end portal
-   [MC-228343](https://bugs.mojang.com/browse/MC-228343) java.lang.NullPointerException when random\_selector default feature isn't found
-   [MC-228430](https://bugs.mojang.com/browse/MC-228430) Very long loading pause while booting the game ("Failed to add PDH Counter", caused by oshi)
-   [MC-228828](https://bugs.mojang.com/browse/MC-228828) Specifying the --server parameter when starting the game, causes the game to crash
-   [MC-229299](https://bugs.mojang.com/browse/MC-229299) Blue axolotls can spawn naturally

---

