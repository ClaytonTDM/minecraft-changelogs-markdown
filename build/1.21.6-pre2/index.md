# 1.21.6-pre2

We're kicking the week off with another pre-release, including some music and happy ghast bug fixes. The Chase the Skies drop is getting closer and the pre-release schedule might include more than one pre-release per week.

## Changes

### Music and Sound

-   The following sound categories have been renamed:
    -   Friendly Creatures -> Friendly Mobs
    -   Hostile Creatures -> Hostile Mobs

## Technical Changes

### Dialogs

#### Dialog Description Format

##### Input Control Types

###### `minecraft:text`

-   Output values:
    
    -   As template substitution: contents with special characters escaped to fit in a SNBT literal (note: both `'` and `"` are escaped)
-   For `multiline` field:
    
    -   If `height` field is omitted, but `max_lines` is present, the height that will be chosen to fit the maximum number of lines can't exceed `512`

## Fixed bugs in 1.21.6 Pre-Release 2

-   [MC-217887](https://bugs.mojang.com/browse/MC-217887) Unsigned books written in 1.9-pre1 or earlier don't upgrade properly
-   [MC-297575](https://bugs.mojang.com/browse/MC-297575) Happy Ghast with nbt NoAI set to true can't be controlled by player
-   [MC-297591](https://bugs.mojang.com/browse/MC-297591) Ender pearls can unexpectedly come to a halt
-   [MC-298104](https://bugs.mojang.com/browse/MC-298104) The max\_lines field of multiline text input control is unrestricted, lagging the game
-   [MC-298144](https://bugs.mojang.com/browse/MC-298144) The initial value of minecraft:text input type is limited to 32 characters, regardless of max\_length field
-   [MC-298155](https://bugs.mojang.com/browse/MC-298155) Dialog command\_template using a multiline text input causes player to be kicked out of the server due to illegal characters in chat (which is \\n)
-   [MC-298209](https://bugs.mojang.com/browse/MC-298209) Player cannot move while touching a happy ghast's body
-   [MC-298301](https://bugs.mojang.com/browse/MC-298301) Blinking the cursor shifts all characters to the right of a multilines text field input in Dialogs
-   [MC-298307](https://bugs.mojang.com/browse/MC-298307) Entering and exiting a pale garden while in Creative mode causes the current music track to remain silent
-   [MC-298358](https://bugs.mojang.com/browse/MC-298358) Riding a mob into powder snow no longer affects the player properly
-   [MC-298361](https://bugs.mojang.com/browse/MC-298361) Happy ghast with player riding, teleports back and forth when exiting nether portal
-   [MC-298368](https://bugs.mojang.com/browse/MC-298368) "music\_notes.png.mcmeta" has an extra index that does not exist, causing a warning
-   [MC-298394](https://bugs.mojang.com/browse/MC-298394) Freezing in Powdered Snow is very inconsistent and jittery
-   [MC-298422](https://bugs.mojang.com/browse/MC-298422) Ghasts and happy ghasts do not take damage from harmful blocks under some circumstances