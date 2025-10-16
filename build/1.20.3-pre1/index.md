# 1.20.3-pre1

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