# Minecraft 1.19.1 Pre-Release 6

We are now releasing pre-release 6 for Minecraft 1.19.1 with some small tweaks to sculk sensors and catalysts as well as bug fixes and improvements to the chat signing system.

## Changes in 1.19.1 Pre-release 6

-   Sculk Catalysts will now drop 5 XP instead of 20 XP
-   Colors of the signing indicators for sending a message have been adjusted for improved accessiblity

## Technical Changes in 1.19.1 Pre-release 6

-   The `run_command` click event for text components no longer supports any commands that send chat messages
    -   `/tellraw` should be used instead

## Bugs fixed in 1.19.1 Pre-release 6

-   [MC-148149](https://bugs.mojang.com/browse/MC-148149) Linux game crash when opening links
-   [MC-207077](https://bugs.mojang.com/browse/MC-207077) Crash on loading pre-1.13 world with noteblock + note NBT in inventory
-   [MC-235614](https://bugs.mojang.com/browse/MC-235614) Reference to unexisting predicate in a datapack causes java.lang.NullPointerException
-   [MC-252190](https://bugs.mojang.com/browse/MC-252190) Player-dropped items creating vibrations depends on you sneaking at the moment the item hits the ground, instead of when you threw the item
-   [MC-252258](https://bugs.mojang.com/browse/MC-252258) Wool block / carpet items generate vibrations, unless thrown by crouching players
-   [MC-252265](https://bugs.mojang.com/browse/MC-252265) --server argument causes java.lang.NullPointerException crash on some servers
-   [MC-253402](https://bugs.mojang.com/browse/MC-253402) Game crash when you shift right click on item in your hotbar to the chest at the same time as you die
-   [MC-254255](https://bugs.mojang.com/browse/MC-254255) Unable to text in chat with Chat Preview On send while sleeping
-   [MC-254261](https://bugs.mojang.com/browse/MC-254261) "The background opacity box of the chat preview field renders behind the ""Leave Bed"" button when sleeping in beds"
-   [MC-254284](https://bugs.mojang.com/browse/MC-254284) Sending chat packets with invalid message type id crashes the game
-   [MC-254349](https://bugs.mojang.com/browse/MC-254349) Crash when putting dye into a loom on a modded server