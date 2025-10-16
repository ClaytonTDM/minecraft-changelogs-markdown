# Minecraft 1.21.6 Release Candidate 1

As we get ready to Chase the Skies, here comes the first test flight of 1.21.6 - Release Candidate 1!

Happy Ghast(-ing)!

## Fixed bugs in 1.21.6 Release Candidate 1

-   [MC-298022](https://bugs.mojang.com/browse/MC-298022) Not signed Books and Quills with an overflowing new line at the bottom do not depict the pages' contents
-   [MC-298633](https://bugs.mojang.com/browse/MC-298633) Happy Ghast gets you stuck in blocks while riding and gets stuck in blocks upon dismount
-   [MC-298658](https://bugs.mojang.com/browse/MC-298658) Locator Bar shows inaccurate positions after respawn

---

We are now releasing Pre-Release 4 for Minecraft 1.21.6, with a few minor bug fixes.

Happy crafting!

## Fixed bugs in 1.21.6 Pre-Release 4

-   [MC-279417](https://bugs.mojang.com/browse/MC-279417) Luring mobs onto blocks at Y=-64 will instead make them pathfind to the highest elevation
-   [MC-298446](https://bugs.mojang.com/browse/MC-298446) The "Thunder roars" sound is no longer affected by the master volume
-   [MC-298510](https://bugs.mojang.com/browse/MC-298510) Happy ghasts stay still for a few seconds when you get off them
-   [MC-298653](https://bugs.mojang.com/browse/MC-298653) Master volume slider no longer affects /playsoud sounds with high volume

---

We've got another pre-release coming in hot! This time with a new advancement trigger and sound category but most importantly some much needed bug fixes.

## New Features

### Music and Sound

-   Added new sound volume category called "UI" for sounds played by UI elements, like button clicks

## Technical Changes

-   The Data Pack version is now 80

## Data Pack Version 80

-   Added `player_sheared_equipment` trigger

### New Triggers

Added `minecraft:player_sheared_equipment`

-   Can Trigger when a player shears off a shearable equipment from an Entity
-   Conditions:
    -   `item` - Item that is sheared
    -   `entity` - The entity that was sheared

### Commands

#### Modified `playsound`

-   Added new category `ui`
    -   Sounds in this category will continue playing when paused, similarly to `music`

## Fixed bugs in 1.21.6 Pre-Release 3

-   [MC-296371](https://bugs.mojang.com/browse/MC-296371) The entity shadows of happy ghasts are too small in relation to the size of their models
-   [MC-296374](https://bugs.mojang.com/browse/MC-296374) The entity shadows of ghastlings are too small in relation to the size of their models
-   [MC-296853](https://bugs.mojang.com/browse/MC-296853) The "Shear Brilliance" advancement is incorrectly given by shearing a lead off a wolf
-   [MC-297113](https://bugs.mojang.com/browse/MC-297113) Hotbar shown in loading terrain screen
-   [MC-297497](https://bugs.mojang.com/browse/MC-297497) The “Connection Lost” title isn’t displayed when being kicked from realms due to idle timeout
-   [MC-297972](https://bugs.mojang.com/browse/MC-297972) Dialog body content is misaligned
-   [MC-298353](https://bugs.mojang.com/browse/MC-298353) Ridden entities won't make the lead breaking sound when attached to a fence
-   [MC-298412](https://bugs.mojang.com/browse/MC-298412) Subtitles are no longer shown when the master volume is set to zero
-   [MC-298466](https://bugs.mojang.com/browse/MC-298466) When clicking the "yes" button to confirm command execution in a dialog, if the player is put into another dialog, the click sound from the "yes" button will not be played until it is closed
-   [MC-298492](https://bugs.mojang.com/browse/MC-298492) Disconnecting through dialog in configuration phase causes the client to crash.
-   [MC-298516](https://bugs.mojang.com/browse/MC-298516) While running /dialog clear and /dialog show every tick, pressing the warning button just after joining the world can crash the game
-   [MC-298520](https://bugs.mojang.com/browse/MC-298520) Items in slots now render behind the container title, mismatching 1.21.5 behavior

---

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

---

