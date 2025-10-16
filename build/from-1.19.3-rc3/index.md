# Minecraft 1.19.3 Release Candidate 3

In order to secure the quality of the Minecraft 1.19.3 release, we have decided to fix a few more critical issues and to delay the release until tomorrow. To that end we are now releasing Minecraft 1.19.3 Release Candidate 3.

Happy mining!

## Fixed bugs in 1.19.3 Release Candidate 3

-   [MC-108707](https://bugs.mojang.com/browse/MC-108707) Potion effects, particles, and fire animations persist client-side after death in server environments
-   [MC-258258](https://bugs.mojang.com/browse/MC-258258) The "EntityTag" NBT data on armor stands is no longer applied upon placement
-   [MC-258279](https://bugs.mojang.com/browse/MC-258279) Particle groups aren't cleared on resource reload

---

We're now releasing the second (and hopefully last) release candidate for Minecraft 1.19.3, fixing a few critical bugs. If there are no major issues following this release candidate, no further changes will be done before the full release.

With this release candidate, we are reverting a behavior change for translation strings due to a prevalent but unsupported use case. Expect this behavior to be changed in the future to provide a supported alternative.

Happy mining!

## Fixed bugs in 1.19.3 Release Candidate 2

-   [MC-258256](https://bugs.mojang.com/browse/MC-258256) Cannot join a LAN world while offline
-   [MC-258251](https://bugs.mojang.com/browse/MC-258251) Slots (like %s) in translations no longer ignore missing elements in "with"

---

We're now releasing the first (and hopefully only) release candidate for Minecraft 1.19.3. If there are no major issues following this release candidate, no further changes will be done before the full release.

Happy mining!

## Fixed bugs in 1.19.3 Release Candidate 1

-   [MC-58668](https://bugs.mojang.com/browse/MC-58668): Smooth Lighting Minimum and Maximum levels no longer differ
-   [MC-185279](https://bugs.mojang.com/browse/MC-185279): "Done" and "Cancel" buttons in the game rules screen are not selected in the right order when navigating using Tab
-   [MC-187812](https://bugs.mojang.com/browse/MC-187812): The buttons are not selected in the right order using Tab in the new datapacks and resource packs menus
-   [MC-187816](https://bugs.mojang.com/browse/MC-187816): Using Tab multiple times to select a datapack / resource pack from the list does not deselect it
-   [MC-227250](https://bugs.mojang.com/browse/MC-227250): Mobs continue converting after the conversion process starts and the block causing the conversion is removed
-   [MC-240724](https://bugs.mojang.com/browse/MC-240724): There are no shadows on text displayed within the subtitles overlay
-   [MC-248589](https://bugs.mojang.com/browse/MC-248589): World border texture jumps back and forth between two positions as the player's y level changes
-   [MC-254809](https://bugs.mojang.com/browse/MC-254809): You cannot get water bottles from water in creative mode if there's a potion in your inventory
-   [MC-258159](https://bugs.mojang.com/browse/MC-258159): Pick block doesn't work on Ender Dragon
-   [MC-258190](https://bugs.mojang.com/browse/MC-258190): Bubble columns let skylight through
-   [MC-258195](https://bugs.mojang.com/browse/MC-258195): Performance degradation of NBT modification
-   [MC-258196](https://bugs.mojang.com/browse/MC-258196): Stray pixel in gui/toasts.png
-   [MC-258203](https://bugs.mojang.com/browse/MC-258203): /data modify thinks NBT is too large, but /data merge doesn't
-   [MC-258209](https://bugs.mojang.com/browse/MC-258209): Storage data is broken

---

We're now releasing pre-release 3 for Minecraft 1.19.3 with more bug fixes. Happy mining!

## Fixed bugs in 1.19.3 Pre-release 3

-   [MC-108597](https://bugs.mojang.com/browse/MC-108597): Shulker box still plays the close sound, even if it is destroyed or replaced
-   [MC-165686](https://bugs.mojang.com/browse/MC-165686): Knowledge book texture in the crafting UI hasn't been updated
-   [MC-177141](https://bugs.mojang.com/browse/MC-177141): Cleric working subtitle is "Brewing Stand bubbles" instead of "Cleric works"
-   [MC-194501](https://bugs.mojang.com/browse/MC-194501): IllegalArgumentException (Cannot set property) when using a block without the "axis" property in fancy\_tree\_placer
-   [MC-201769](https://bugs.mojang.com/browse/MC-201769): Copying deeply nested NBT causes StackOverflowError
-   [MC-208051](https://bugs.mojang.com/browse/MC-208051): Chests/trapped chests/barrels do not 'open' after respawning
-   [MC-228976](https://bugs.mojang.com/browse/MC-228976): Entity collision is run on render thread
-   [MC-233051](https://bugs.mojang.com/browse/MC-233051): Server crashes as player logs in
-   [MC-250428](https://bugs.mojang.com/browse/MC-250428): Narrator does not narrate the death screen
-   [MC-256706](https://bugs.mojang.com/browse/MC-256706): Carpet texture is cut off in the recipe book
-   [MC-257121](https://bugs.mojang.com/browse/MC-257121): Players' capes and outer skin layers don't render client-side in server environments when joining worlds while dead
-   [MC-257340](https://bugs.mojang.com/browse/MC-257340): Vexes' hitboxes aren't vertically centered with their models
-   [MC-257350](https://bugs.mojang.com/browse/MC-257350): Top and bottom texture of block of bamboo rotated incorrectly
-   [MC-257392](https://bugs.mojang.com/browse/MC-257392): Vex's new model's head does not rotate to where it looks
-   [MC-257411](https://bugs.mojang.com/browse/MC-257411): Vex Renders Offhand Items Incorrectly
-   [MC-257495](https://bugs.mojang.com/browse/MC-257495): Dying whilst in the Shulker Box GUI will spam "Shulker Closes" sound
-   [MC-257530](https://bugs.mojang.com/browse/MC-257530): When Chat is set to Hidden, the Chat Hidden Warning appears in chat instead of the actionbar when attempting to send a message whilst sleeping or switching gamemode
-   [MC-257817](https://bugs.mojang.com/browse/MC-257817): Player heads with a custom skin lose their noteblock sound data when using Ctrl+Pick block
-   [MC-257839](https://bugs.mojang.com/browse/MC-257839): NullPointerException when attempting to render a tooltip in the Game Rules menu
-   [MC-257843](https://bugs.mojang.com/browse/MC-257843): note\_block\_sound data is lost when breaking a player head
-   [MC-257861](https://bugs.mojang.com/browse/MC-257861): Villagers and Piglin no longer seek out Items

---

