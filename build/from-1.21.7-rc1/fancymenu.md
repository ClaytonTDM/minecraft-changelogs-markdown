# Minecraft 1.21.7 Release Candidate 1

Today we are shipping Release Candidate 1 for 1.21.7, a hotfix release that takes care of some critical issues that managed to sneak their way into the Chase the Skies drop (1.21.6). The hotfix also includes a new music disc and a painting of the good boy Dennis. If no other critical issues are found, this will be the version for 1.21.7 that can be expected to be released soon. Happy mining!

## New Features

-   Added a painting of a good boy by artist Sarah Boeving
-   Added music disc "Lava Chicken" by Hyper Potions
    -   Drops when defeating a Baby Zombie riding a Chicken (Chicken Jockey)

## Fixed bugs in 1.21.7 Release Candidate 1

-   [MC-297748](https://bugs.mojang.com/browse/MC-297748) The moon is rendered incorrectly on some Qualcomm graphics
-   [MC-298448](https://bugs.mojang.com/browse/MC-298448) Filled maps are rendered incorrectly on some Qualcomm graphics
-   [MC-298681](https://bugs.mojang.com/browse/MC-298681) Text displays with the "shadow" tag enabled and the "see;;_;;through" tag disabled exhibit z-plane fighting at a close distance
-   [MC-298710](https://bugs.mojang.com/browse/MC-298710) TTF glyphs are incorrectly rendered over some elements
-   [MC-298832](https://bugs.mojang.com/browse/MC-298832) The breaking particles of droppers and dispensers facing up or down appear incorrect on some Qualcomm graphics
-   [MC-298856](https://bugs.mojang.com/browse/MC-298856) Blindness and darkness fog effects no longer work underwater
-   [MC-298898](https://bugs.mojang.com/browse/MC-298898) TextureAtlas leaks textures after resource reload
-   [MC-298919](https://bugs.mojang.com/browse/MC-298919) Sometimes you pass through the happy ghast when you get off while going forward
-   [MC-299017](https://bugs.mojang.com/browse/MC-299017) Text on glowing signs is not visible on some graphics
-   [MC-299071](https://bugs.mojang.com/browse/MC-299071) Memory Leak in ItemStackRenderState leads to OutOfMemoryError

---

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

