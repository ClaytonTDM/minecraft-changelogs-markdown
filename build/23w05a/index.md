# Minecraft Snapshot 23w05a

In this snapshot we've tweaked the armor trim feature and redefined the Create New World user experience flow.

Happy world creating!

## Changes

-   Updated the Create New World screen
-   Interacting with armor or elytra items in-hand will now swap them with equipped gear
-   The enchantment glint has been further tweaked to be slower and less visible, but also have more contrast in some intervals

### Accessibility

-   Changed how tooltips in the menu UI are positioned so buttons are still readable
-   Added two new options in the Accessibility menu for adjusting the speed and transparency of enchantment glints

### Updated Create New World Screen

-   The screen is now organized into three tabs
    -   The Game-Tab allows to set the world name, Gamemode, Difficultly and whether to allow cheats
    -   The World-Tab allows to set the World-Type and Seed, and to toggle the generation of structures and the bonus chest
    -   The More-Tab provides access to the Game Rules and DataPack Selection Screen
-   Removed the Import Settings button and the corresponding Export Settings button in the Edit World Screen

## Technical Changes

### Trim Patterns & Materials

-   The following data is now also defined by a trim material:
    -   `override_armor_materials` which is an optional map of armor material to overriden color palette
        -   Map key is the armor material that this trim material wants to override with a different color palette
        -   Map value is the name of the color palette that will be used when this trim material is applied to an armor piece with the corresponding armor material
-   The following data is no longer defined by a trim material:
    -   `incompatible_armor_material`

### Commands

#### `effect`

-   `infinite` is now a valid option for effect durations
    -   Infinite effect durations show up as "∞" in the player inventory view

## Experimental Features

-   Armor trims can now be applied to leather armor
-   Armor can now have trims of the same material it is made out of
    -   For example, a Golden Chestplate with a Golden Armor Trim is now possible
-   The texture of the Dune armor trim has been tweaked so that the symbol on the chestplate is moved up a few pixels
-   Loot tables for smithing templates have been adjusted

### Loot tables for smithing templates

-   The following common armor trims now always generate 2 templates in a chest when found:
    -   Dune
    -   Coast
    -   Wild
    -   Sentry
-   This is to give new players a chance to understand that smithing templates are consumed when used
-   Netherite Upgrade smithing templates have been made twice as common
    -   While we do want Netherite upgrading to be more challenging, we felt the previous rates did not encourage further exploration after finding the first Netherite Upgrade template
-   1 Eye Armor Trim is now guaranteed in every Stronghold library chest
    -   This is so even in the most unlucky worlds, this armor trim can still be found
-   Woodland Mansions now have a greatly increased chance of generating the Vex Armor Trim smithing template
    -   Woodland Mansions already have very few chests that utilize loot tables - in unlucky generations, none at all. It was too rare to find one of these trims, and we want the challenge of getting the Vex Armor Trim to be more about finding a Woodland Mansion to begin with
-   Across the board, smithing templates have been made slightly more common
    -   Due to the method of crafting copies of templates, we want the process of discovering another template in a structure to feel like the player has just saved 7 diamonds. If the templates are too rare, this situation does not happen as much, meaning players will not be encouraged to explore more structures

## Fixed bugs in Snapshot 23w05a

-   [MC-127749](https://bugs.mojang.com/browse/MC-127749) Cape is jittering; movement way sharper than in snapshot 18w03b
-   [MC-147711](https://bugs.mojang.com/browse/MC-147711) Drowned no longer have a different swimming animation
-   [MC-216270](https://bugs.mojang.com/browse/MC-216270) It's not possible to replace armor by right clicking while holding the armor item
-   [MC-252625](https://bugs.mojang.com/browse/MC-252625) Frogs play a running animation after the NoAI NBT is applied
-   [MC-254074](https://bugs.mojang.com/browse/MC-254074) Frogs don't play their walking animation when they take damage
-   [MC-256479](https://bugs.mojang.com/browse/MC-256479) Camels don't play their walking animations when they are damaged
-   [MC-256493](https://bugs.mojang.com/browse/MC-256493) Camels don't have smooth transitions to their idle states when they stop moving
-   [MC-256650](https://bugs.mojang.com/browse/MC-256650) Frogs don't have smooth transitions to their idle states when they stop moving
-   [MC-256664](https://bugs.mojang.com/browse/MC-256664) Camels play their walking animations after the "NoAI" NBT tag is applied to them
-   [MC-257464](https://bugs.mojang.com/browse/MC-257464) Axolotl walking animation stutters when moving slowly
-   [MC-259206](https://bugs.mojang.com/browse/MC-259206) The accessibility onboarding screen can not display any language other than English (US)
-   [MC-259357](https://bugs.mojang.com/browse/MC-259357) Text inside the smithing table GUI renders behind the armor stand model in some languages
-   [MC-259362](https://bugs.mojang.com/browse/MC-259362) The "item.minecraft.smithing\_template.netherite\_upgrade.additions\_slot\_description" string is missing an article before the word "Netherite"
-   [MC-259370](https://bugs.mojang.com/browse/MC-259370) Stronghold library loot table has been replaced by stronghold altar loot table
-   [MC-259389](https://bugs.mojang.com/browse/MC-259389) Incompatible crafting arrow overlay in the new smithing GUI uses the position of the legacy smithing GUI
-   [MC-259399](https://bugs.mojang.com/browse/MC-259399) The armor stand model within the smithing table GUI doesn't render the output item after resizing the game window
-   [MC-259418](https://bugs.mojang.com/browse/MC-259418) Camels with large "LastPoseTick" NBT values still behave strangely and cause a variety of issues
-   [MC-259420](https://bugs.mojang.com/browse/MC-259420) Pixels not present in the palettes get erased, not kept