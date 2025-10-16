# Minecraft: Java Edition 1.18.1

We’re now releasing Minecraft: Java Edition 1.18.1. This release fixes a critical security issue for multiplayer servers, changes how the world fog works to make more of the world visible, and fixes a couple of other bugs.

If you are running a multiplayer server, we highly encourage you to upgrade to this version as soon as possible.

Enjoy!

## Technical Changes in 1.18.1

-   Fixed an issue that would cause players on low-bandwidth connections to get timeout errors when connecting to a server
-   World fog now starts further away from the player, to make distant terrain more visible
-   Instead of applying fog as a spherical volume it is now applied as a cylindrical volume

## Fixed Bugs in 1.18.1

-   [MC-152198](https://bugs.mojang.com/browse/MC-152198) Actual render distance is 2 chunks lower than render distance setting
-   [MC-219507](https://bugs.mojang.com/browse/MC-219507) Beacon's power reverts back to previous one on world reload
-   [MC-229321](https://bugs.mojang.com/browse/MC-229321) Bees inside of bee hives / nests sometimes despawn when the world is reloaded
-   [MC-242729](https://bugs.mojang.com/browse/MC-242729) "Observer activating without any updates nearby, caused by /clone"
-   [MC-243216](https://bugs.mojang.com/browse/MC-243216) Chunk render distance on servers seems shorter than in 1.17.1
-   [MC-243796](https://bugs.mojang.com/browse/MC-243796) Random non fatal exceptions in console: Failed to store chunk ConcurrentModificationException