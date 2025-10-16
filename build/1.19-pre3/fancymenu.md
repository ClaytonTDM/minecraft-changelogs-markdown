# 1.19-pre3

It is now time for pre-release 3 for Minecraft 1.19, which will be our last pre-release for this week. In this pre-release we've tweaked the sonic boom attack and fixed more bugs.

Enjoy!

## Changes in 1.19 Pre-release 3

-   Wardens' sonic boom attack now bypasses the damage reduction by armor enchantments such as Protection

## Technical Changes in 1.19 Pre-release 3

-   `item_interact_start` is no longer detectable as a vibration to allow more specific actions be detected, like `drink` or `eat`, but `item_interact_finish` still is

## Fixed Bugs in 1.19 Pre-Release 3

-   [MC-209932](https://bugs.mojang.com/browse/MC-209932) Sculk sensors only detect the last turtle egg being broken when being stepped on
-   [MC-210277](https://bugs.mojang.com/browse/MC-210277) Sculk sensors are not activated upon chickens laying eggs
-   [MC-210278](https://bugs.mojang.com/browse/MC-210278) Sculk sensors are not activated upon bees entering or leaving their hive or nest
-   [MC-214622](https://bugs.mojang.com/browse/MC-214622) Sculk sensors do not detect daylight detector mode switching
-   [MC-249094](https://bugs.mojang.com/browse/MC-249094) Unexpected culling of inner sculk shrieker faces
-   [MC-249230](https://bugs.mojang.com/browse/MC-249230) Frogs prioritize eating entities over panicking when being damaged
-   [MC-250162](https://bugs.mojang.com/browse/MC-250162) Placing a map in an item frame will break any intersecting paintings and item frames with a map inside
-   [MC-250238](https://bugs.mojang.com/browse/MC-250238) Frogs attempt to pathfind to entities outside of their reach causing them to spin and twitch constantly
-   [MC-250983](https://bugs.mojang.com/browse/MC-250983) Allays can get stuck and freeze inside non-full blocks
-   [MC-251220](https://bugs.mojang.com/browse/MC-251220) Block lighting on extended parts are a lot darker in 22w17a compared to 1.18.2
-   [MC-251420](https://bugs.mojang.com/browse/MC-251420) Demo Mode: The "Purchase Now!" link's destination is incorrect
-   [MC-251858](https://bugs.mojang.com/browse/MC-251858) Subtitles are higher than in previous versions
-   [MC-251872](https://bugs.mojang.com/browse/MC-251872) The game output and server console are logged with warnings regarding chat packets with invalid signatures when using entity selectors within commands
-   [MC-251878](https://bugs.mojang.com/browse/MC-251878) Sculk sensors hearing items being dropped on the ground doesn't alert shriekers even if a player drops it
-   [MC-251968](https://bugs.mojang.com/browse/MC-251968) /execute running chat related commands logs "Received chat packet without valid signature" warning
-   [MC-252071](https://bugs.mojang.com/browse/MC-252071) Warden still detects after death if signal is traveling before death
-   [MC-252078](https://bugs.mojang.com/browse/MC-252078) Allays no longer flee or panic when taking damage