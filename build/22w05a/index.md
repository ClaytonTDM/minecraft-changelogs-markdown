While we work on some larger changes that aren't quite ready yet, here's snapshot 22w05a which contains a small squishing (that's a word, right?) of bugs.

Happy mining!

# Changes in 22w05a

-   A change in 22w03a that re-arranged Badlands biome layouts has been reverted to avoid causing generation changes and chunk borders. This change will be re-introduced later.

# Fixed bugs in 22w05a

-   [MC-4533](https://bugs.mojang.com/browse/MC-4533) Water graphical glitch when connecting diagonally
-   [MC-70848](https://bugs.mojang.com/browse/MC-70848) Water looks like it flows up
-   [MC-105317](https://bugs.mojang.com/browse/MC-105317) Structure blocks do not rotate entities correctly when loading
-   [MC-214289](https://bugs.mojang.com/browse/MC-214289) Pointed dripstone can replace blocks when generating
-   [MC-216004](https://bugs.mojang.com/browse/MC-216004) Wood pillars from mineshafts are generating on pointed dripstones
-   [MC-216589](https://bugs.mojang.com/browse/MC-216589) Abandoned Mineshafts don't delete dripstone in certain situations
-   [MC-232290](https://bugs.mojang.com/browse/MC-232290) Foxes will lay down in powder snow and not try to escape even when taking damage
-   [MC-236775](https://bugs.mojang.com/browse/MC-236775) Biome Selector is disordered in other languages
-   [MC-243152](https://bugs.mojang.com/browse/MC-243152) Slimes spawn in "Redstone Ready" superflat worlds
-   [MC-245772](https://bugs.mojang.com/browse/MC-245772) Outdated chests' loot tables get deleted when updating to 1.18.1
-   [MC-245910](https://bugs.mojang.com/browse/MC-245910) Campfires and hoppers cause constant chunk saving
-   [MC-247636](https://bugs.mojang.com/browse/MC-247636) Deleting a world no longer logs that a world is being deleted
-   [MC-248181](https://bugs.mojang.com/browse/MC-248181) The player disappears at certain heights
-   [MC-248189](https://bugs.mojang.com/browse/MC-248189) Teleporting below level 0 from the overworld to another dimension freezes the game on the loading screen until player dies
-   [MC-248195](https://bugs.mojang.com/browse/MC-248195) Typing /placefeature crashes client when connected to a server
-   [MC-248210](https://bugs.mojang.com/browse/MC-248210) Harsh chunk borders appear when upgrading to 22w03a
-   [MC-248225](https://bugs.mojang.com/browse/MC-248225) Incorrect BlockPos getSquaredDistance() calculation
-   [MC-248230](https://bugs.mojang.com/browse/MC-248230) Players get stuck on the "Loading terrain..." screen after rejoining the world whilst above or below the build limit