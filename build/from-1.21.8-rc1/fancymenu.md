# 1.21.8 Release Candidate 1

Hotfix coming in ho-... very cold? Today we're releasing 1.21.8 Release Candidate 1, addressing various graphical corruption and freeze issues on certain graphics devices.

As always, if you encounter any graphical issues with this Release Candidate, reports on our [Bug Tracker](https://bugs.mojang.com/projects/MC/summary) are very much appreciated!

Happy Crafting!

## Fixed bugs in 1.21.8 Release Candidate 1

-   [MC-295947](https://bugs.mojang.com/browse/MC-295947) The game screen freezes after a while on some Intel integrated graphics
-   [MC-296107](https://bugs.mojang.com/browse/MC-296107) Entities and block entities become visually corrupted after a while on some Intel integrated graphics
-   [MC-296908](https://bugs.mojang.com/browse/MC-296908) Text and texture atlases become visually corrupted after a while on some Intel integrated graphics
-   [MC-297784](https://bugs.mojang.com/browse/MC-297784) Entities are shaded incorrectly after a while on Intel graphics of Gen11 architecture
-   [MC-298903](https://bugs.mojang.com/browse/MC-298903) Items in the inventory can turn into a solid color and then disappear and text can render colored while on some Intel integrated graphics
-   [MC-298908](https://bugs.mojang.com/browse/MC-298908) Items in the inventory are lit as if from the opposite direction on some Intel integrated graphics
-   [MC-299144](https://bugs.mojang.com/browse/MC-299144) Crash with AMD graphics card when loading Resource Pack with invalid shader

---

Hey! We had to fix some more bugs today! Here is Release Candidate 2 for Minecraft: Java Edition 1.21.7.

## Technical Changes

-   The Data Pack version is now 81
-   The Resource Pack version is now 64

## Fixed bugs in 1.21.7 Release Candidate 2

-   [MC-298879](https://bugs.mojang.com/browse/MC-298879) The game crashes upon startup on some AMD graphics
-   [MC-299110](https://bugs.mojang.com/browse/MC-299110) Force upgrading does not write new DataVersion to converted data
-   [MC-299126](https://bugs.mojang.com/browse/MC-299126) The server crashes when certain mobs ride a turtle
-   [MC-299130](https://bugs.mojang.com/browse/MC-299130) Pack formats were not incremented in 1.21.7 rc1 after breaking changes

---

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

