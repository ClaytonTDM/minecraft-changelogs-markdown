# 24w14a

Hello Minecraft players! Today we have a Snapshot with some technical changes and bug fixes for you.

## Technical Changes

-   The Data Pack version is now 38
-   The game now requires Java 21
-   The game now requires a 64-bit Operating System
-   The included Java distribution is now the Microsoft build of OpenJDK 21.0.2

## Data Pack Version 38

-   Added `replace` field to the `set_attributes` loot function (default: `true`)
    -   When `false`, attributes will be appended
-   The `text` field within filterable entries in book components has been renamed to `raw` to avoid ambiguity
-   The `profile` component and fields on player head items and blocks respectively now support resolving from a UUID
    -   By specifying the `id` field without a `name`, the `name` and textures will be looked up

## Fixed bugs in Snapshot 24w14a

-   [MC-80142](https://bugs.mojang.com/browse/MC-80142) Power tag for wither skulls, small/dragon fireballs and wind charges is not synced correctly, leading to stuttering during flight
-   [MC-266467](https://bugs.mojang.com/browse/MC-266467) Wind charges stutter when flying through the air
-   [MC-268563](https://bugs.mojang.com/browse/MC-268563) Snowballs, eggs, experience bottles, and ender pearls are destroyed instead of being deflected when hitting breezes
-   [MC-268597](https://bugs.mojang.com/browse/MC-268597) Hitting a breeze with a player reflected/dispensed wind charge causes it to become trapped within the breeze until it moves
-   [MC-268727](https://bugs.mojang.com/browse/MC-268727) Server disconnects the client when sending a keepalive packet while transitioning out of configuration phase
-   [MC-268877](https://bugs.mojang.com/browse/MC-268877) Beehives/bee nests in inventory lose honey level after converting to newer world version
-   [MC-268945](https://bugs.mojang.com/browse/MC-268945) Some interfaces instantly close when opened from long distances when players have their "minecraft:player.block;;_;;interaction;;_;;range" attribute set to high values
-   [MC-269355](https://bugs.mojang.com/browse/MC-269355) Heavy Core has no required tool
-   [MC-269446](https://bugs.mojang.com/browse/MC-269446) "Are you sure you want to quit?" screen uses background blur
-   [MC-269482](https://bugs.mojang.com/browse/MC-269482) The set;;_;;attributes function in loot tables no longer replaces default attribute modifiers
-   [MC-269503](https://bugs.mojang.com/browse/MC-269503) Goat horn default instrument is missing when using /give
-   [MC-269553](https://bugs.mojang.com/browse/MC-269553) Items with empty enchantments NBT tag do not upgrade as expected
-   [MC-269596](https://bugs.mojang.com/browse/MC-269596) EntityTag of existing items is not upgraded to entity;;_;;data component
-   [MC-269677](https://bugs.mojang.com/browse/MC-269677) Filterable "text" field conflicts with text components
-   [MC-269684](https://bugs.mojang.com/browse/MC-269684) Commands accepting stack sizes are restricted to a maximum of 64
-   [MC-269700](https://bugs.mojang.com/browse/MC-269700) Item count in "/item replace" is restricted to the default stack size
-   [MC-269716](https://bugs.mojang.com/browse/MC-269716) Unable to craft the maximum possible allowed items using shift-click in the recipe book
-   [MC-269960](https://bugs.mojang.com/browse/MC-269960) Ctrl + Pick block is not copying container data correctly
-   [MC-269983](https://bugs.mojang.com/browse/MC-269983) Player Head Data is not evaluated when id is present
-   [MC-269991](https://bugs.mojang.com/browse/MC-269991) Dragon breath particles look wrong
-   [MC-270003](https://bugs.mojang.com/browse/MC-270003) Ominous banners are not "pick block"-ed properly
-   [MC-270061](https://bugs.mojang.com/browse/MC-270061) Ctrl + Pick Block does not copy Trial Spawner data correctly
-   [MC-270162](https://bugs.mojang.com/browse/MC-270162) The game crashes when attempting to upgrade a world from version 1.12.2 and below
-   [MC-270187](https://bugs.mojang.com/browse/MC-270187) Command block's nbt cannot copy before second save