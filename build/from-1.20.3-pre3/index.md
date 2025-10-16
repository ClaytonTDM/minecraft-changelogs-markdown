# Minecraft 1.20.3 Pre-Release 3

We are now releasing the third Pre-Release for Minecraft 1.20.3, containing mostly bug fixes, as well as changes to server resource pack handling.

Happy Mining!

## Technical Changes

### World resource packs

#### Local storage

-   Only up to 20 server resource packs are cached

#### Packets

-   Client now sends additional updates about packs (like download success)

## Fixed bugs in 1.20.3 Pre-Release 3

-   [MC-265908](https://bugs.mojang.com/browse/MC-265908) Pool aliases don't redirect start pool
-   [MC-266060](https://bugs.mojang.com/browse/MC-266060) The word "ignored" is misspelled as "ingored" within the "commands.tick.query.rate.sprinting" string
-   [MC-266115](https://bugs.mojang.com/browse/MC-266115) Inconsistent Copper Door block drops when broken with tools weaker than stone
-   [MC-266144](https://bugs.mojang.com/browse/MC-266144) Copper Doors are not part of the #doors item tag
-   [MC-266145](https://bugs.mojang.com/browse/MC-266145) Copper Trapdoors are not part of the #trapdoors item tag
-   [MC-266189](https://bugs.mojang.com/browse/MC-266189) Freezing the game during pick-up animation desyncs item position
-   [MC-266210](https://bugs.mojang.com/browse/MC-266210) Dragon respawn is unable to be frozen with /tick freeze
-   [MC-266335](https://bugs.mojang.com/browse/MC-266335) Copper Doors/Trapdoors have wrong Blast Resistance
-   [MC-266903](https://bugs.mojang.com/browse/MC-266903) Incorrect part of copper door texture
-   [MC-266920](https://bugs.mojang.com/browse/MC-266920) Server Resource Packs Setting disabled no longer overridden by require-resource-pack
-   [MC-266948](https://bugs.mojang.com/browse/MC-266948) You can run "/summon wind\_charge" without enabling the 1.21 datapack

---

Hello again! The stabilization phase for 1.20.3 release continues. This Pre-Release brings more bug fixes.

## Changes

-   Breeze wind charges now break decorated pots, chorus flowers, and pointed dripstone blocks upon collision

## Fixed bugs in 1.20.3 Pre-Release 2

-   [MC-265291](https://bugs.mojang.com/browse/MC-265291) Command suggestions within the command block interface don't disappear when the console command field is unselected
-   [MC-265426](https://bugs.mojang.com/browse/MC-265426) Certain inputs pressed whilst in F3+Esc Pause will be carried out after game is unpaused
-   [MC-265772](https://bugs.mojang.com/browse/MC-265772) A command with multiple redirect modifiers can ignore "maxCommandChainLength"
-   [MC-265788](https://bugs.mojang.com/browse/MC-265788) The "Start free Snapshot Realm" element can be selected or remain selected causing its tooltip to erroneously be visible when other interfaces are open
-   [MC-266075](https://bugs.mojang.com/browse/MC-266075) "Player teleports" not shown in subtitles when an ender pearl lands far from the thrower
-   [MC-266206](https://bugs.mojang.com/browse/MC-266206) Renamed arrows are reffered as just "Arrow" in the death message
-   [MC-266380](https://bugs.mojang.com/browse/MC-266380) Rain texture doesn't loop correctly
-   [MC-266439](https://bugs.mojang.com/browse/MC-266439) Decorated pots with loot table desync item consumption if it cannot be inserted in the pot
-   [MC-266496](https://bugs.mojang.com/browse/MC-266496) Wind Charge can not break Decorated Pots
-   [MC-266516](https://bugs.mojang.com/browse/MC-266516) Arrows on fire set breezes on fire, despite being deflected
-   [MC-266728](https://bugs.mojang.com/browse/MC-266728) The "styled" number format uses the resource location "result"
-   [MC-266886](https://bugs.mojang.com/browse/MC-266886) Backspace in Anvil no longer works when renaming an item
-   [MC-266890](https://bugs.mojang.com/browse/MC-266890) The minecraft:grass item does not get upgraded to minecraft:short\_grass

---

We're bringing you the first Pre-Release of 1.20.3 with updates to server resource pack handling and bug fixes!

## Technical Changes

-   The Data Pack version is now 26
-   The Resource Pack version is now 22
-   Changes to downloaded/world resource pack handling

### World resource packs

Changes apply to world resource packs (`resources.zip`), Realms resource packs and resource packs controlled by dedicated servers.

#### UI

-   Download screen has been replaced with a toast
-   World resource pack application will start together with chunk loading

#### Local storage

Downloaded packs are now stored in `downloads` directory (with different file organization than old `server-resource-packs`)

-   Files in this directory are no longer automatically cleaned (previously only up 10 packs were kept)
-   Additionally, inside this directory there is also log file `log.json` that stores information about downloaded files for debug purposes

#### Server config

Downloaded packs now have unique id (GUID/UUID) that can be used to differentiate them

-   This value for dedicated server pack can be configured with `resource-pack-id` option in `server.properties`
-   If the value is missing, it will be generated based on URL
-   If hash of a pack is not set, this pack will be redownloaded before every application
    -   Previously, if hash was missing, latest downloaded version of pack was applied

#### Packets

Some additional options are added for 3rd-party servers software:

-   Client can now accept multiple server resource packs
-   New packet was added to un-apply server resource packs
-   Resource packs are no longer cleaned when entering configuration phase

## Data Pack Version 26

-   Renamed `minecraft:grass` block and item to `minecraft:short_grass`

## Resource Pack Version 22

-   Renamed `minecraft:grass` block and item to `minecraft:short_grass`

## Fixed bugs in 1.20.3 Pre-Release 1

-   [MC-142160](https://bugs.mojang.com/browse/MC-142160) pausedTickDelta updated when the game is unpaused rather than paused
-   [MC-164316](https://bugs.mojang.com/browse/MC-164316) Resource pack update by a hash doesn't work
-   [MC-251126](https://bugs.mojang.com/browse/MC-251126) Server resource pack is not redownloaded when a hash mismatch is detected with the previously downloaded version
-   [MC-265927](https://bugs.mojang.com/browse/MC-265927) Edit box length restrictions can result in unpaired surrogate characters
-   [MC-265929](https://bugs.mojang.com/browse/MC-265929) Ctrl+Backspacing a word with non-BMP characters in an edit box deletes additional characters
-   [MC-266456](https://bugs.mojang.com/browse/MC-266456) Breezes in minecarts or boats are passive
-   [MC-266468](https://bugs.mojang.com/browse/MC-266468) Breeze cannot attack in deep water
-   [MC-266472](https://bugs.mojang.com/browse/MC-266472) Charged creeper / wither armor is rendered incorrectly
-   [MC-266507](https://bugs.mojang.com/browse/MC-266507) Number of block drops from TNT explosions is capped to 16
-   [MC-266563](https://bugs.mojang.com/browse/MC-266563) End Crystals and TNT Minecarts that explode without a source entity deal no damage at all
-   [MC-266571](https://bugs.mojang.com/browse/MC-266571) Breezes won't attack while under the effects of levitation status
-   [MC-266656](https://bugs.mojang.com/browse/MC-266656) The interpolation of particle, entity and block entity transforms is disrupted when pausing the game in singleplayer
-   [MC-266723](https://bugs.mojang.com/browse/MC-266723) Monsters Hunted advancement requires killing a Breeze even when they're disabled
-   [MC-266724](https://bugs.mojang.com/browse/MC-266724) scoreboard players reset no longer works
-   [MC-266729](https://bugs.mojang.com/browse/MC-266729) Unformatted objects in scoreboard error messages

---

A second Release Candidate for 1.20.2 is now available in the Minecraft Launcher. If no further critical issues are found, we still aim to release 1.20.2 later this week.

## Changes

-   Fixed a problem with Villagers and Wandering Traders suffocating when travelling up slopes in Minecarts

---

