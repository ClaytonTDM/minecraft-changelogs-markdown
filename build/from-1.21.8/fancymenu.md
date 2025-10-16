# Minecraft: Java Edition 1.21.8

Nothing beats graphical corruption and freeze issues like a blazing, steamy hotfix. Today we are releasing 1.21.8 fixing various issues experienced on certain graphics devices.

## Fixed bugs in 1.21.8

-   [MC-295947](https://bugs.mojang.com/browse/MC-295947) The game screen occasionally freezes while the game keeps running on Intel graphics of Gen11 architecture
-   [MC-296107](https://bugs.mojang.com/browse/MC-296107) Entity and block entity textures become corrupted over time on Intel graphics of Gen11 architecture
-   [MC-296585](https://bugs.mojang.com/browse/MC-296585) Flickering and other graphical corruption appears after summoning one or multiple text;;_;;display entities on some Intel devices
-   [MC-296908](https://bugs.mojang.com/browse/MC-296908) Texture atlases, most notably those of text, become corrupted over time on Intel graphics of Gen11 architecture
-   [MC-297784](https://bugs.mojang.com/browse/MC-297784) Entities and block entities are lit incorrectly after a while on Intel graphics of Gen11 architecture
-   [MC-298903](https://bugs.mojang.com/browse/MC-298903) Items in the inventory and text are rendered in a solid color after a while, and the items sometimes become invisible, on Intel graphics of Gen11 architecture
-   [MC-298908](https://bugs.mojang.com/browse/MC-298908) Items in the inventory are lit incorrectly after a while on Intel graphics of Gen11 architecture
-   [MC-299144](https://bugs.mojang.com/browse/MC-299144) The game crashes when loading a resource pack with an invalid shader on some AMD graphics

---

# Minecraft: Java Edition 1.21.7

A hot-as-lava hotfix. It's Minecraft 1.21.7, bringing updates to your disco, plus a fresco and some crash and bug fixes. We've added a new 3x3 painting to honor everyone's best friend, as well as refreshed the loot dropped by an iconic mob. The Baby Zombie riding a Chicken (Chicken Jockey) will drop the “Lava Chicken” music disc when defeated.

We will be back with the next snapshot in a few weeks.

Happy Mining!

## New Features

-   Added a painting of a good boy by artist Sarah Boeving
-   Added music disc "Lava Chicken" by Hyper Potions
    -   Drops when defeating a Baby Zombie riding a Chicken (Chicken Jockey)

## Technical Changes

-   The Data Pack version is now 81
-   The Resource Pack version is now 64

## Fixed bugs in 1.21.7

-   [MC-280354](https://bugs.mojang.com/browse/MC-280354) Loading and unloading a resource pack that uses a x32000 atlas breaks the game
-   [MC-297748](https://bugs.mojang.com/browse/MC-297748) The moon is rendered incorrectly on some Qualcomm graphics
-   [MC-298448](https://bugs.mojang.com/browse/MC-298448) Filled maps are rendered incorrectly on some Qualcomm graphics
-   [MC-298681](https://bugs.mojang.com/browse/MC-298681) Text displays with the "shadow" tag enabled and the "see;;_;;through" tag disabled exhibit z-plane fighting at a close distance
-   [MC-298710](https://bugs.mojang.com/browse/MC-298710) TTF glyphs are incorrectly rendered over some elements
-   [MC-298818](https://bugs.mojang.com/browse/MC-298818) Good boy is missing from Java Edition
-   [MC-298832](https://bugs.mojang.com/browse/MC-298832) The breaking particles of droppers and dispensers facing up or down appear incorrect on some Qualcomm graphics
-   [MC-298856](https://bugs.mojang.com/browse/MC-298856) Blindness and darkness fog effects no longer work underwater
-   [MC-298879](https://bugs.mojang.com/browse/MC-298879) The game crashes upon startup on some AMD graphics
-   [MC-298898](https://bugs.mojang.com/browse/MC-298898) TextureAtlas leaks textures after resource reload
-   [MC-298919](https://bugs.mojang.com/browse/MC-298919) Sometimes you pass through the happy ghast when you get off while going forward
-   [MC-298986](https://bugs.mojang.com/browse/MC-298986) Repeatedly reloading a 512x512 resource pack will eventually result in severe graphics corruption
-   [MC-299017](https://bugs.mojang.com/browse/MC-299017) Text on glowing signs is not visible on some graphics
-   [MC-299071](https://bugs.mojang.com/browse/MC-299071) Memory Leak in ItemStackRenderState leads to OutOfMemoryError
-   [MC-299110](https://bugs.mojang.com/browse/MC-299110) Force upgrading does not write new DataVersion to converted data
-   [MC-299126](https://bugs.mojang.com/browse/MC-299126) The server crashes when certain mobs ride a turtle

---

