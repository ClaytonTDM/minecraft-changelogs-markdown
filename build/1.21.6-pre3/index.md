We've got another pre-release coming in hot! This time with a new advancement trigger and sound category but most importantly some much needed bug fixes.

# New Features

## Music and Sound

-   Added new sound volume category called "UI" for sounds played by UI elements, like button clicks

# Technical Changes

-   The Data Pack version is now 80

# Data Pack Version 80

-   Added `player_sheared_equipment` trigger

## New Triggers

Added `minecraft:player_sheared_equipment`

-   Can Trigger when a player shears off a shearable equipment from an Entity
-   Conditions:
    -   `item` - Item that is sheared
    -   `entity` - The entity that was sheared

## Commands

### Modified `playsound`

-   Added new category `ui`
    -   Sounds in this category will continue playing when paused, similarly to `music`

# Fixed bugs in 1.21.6 Pre-Release 3

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