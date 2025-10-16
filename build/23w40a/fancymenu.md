# Minecraft Snapshot 23w40a

We are now releasing Snapshot 23w40a, the first snapshot for 1.20.3! This snapshot contains improvements for shields, changes to chat component serialization and bug fixes.

## Changes

-   When a player is blocking with a shield, the arm with the shield now follows the direction the player is looking at, when viewed from third person perspective

## Technical Changes

-   The Data Pack version is now 19
-   A few minor changes to chat component serialization

### Chat components

#### Serialization

-   Plain-text chat components (text, no sibilings, no stylings) are now always serialized as string instead of `{"text': "blah"}`
-   Chat components now serialize to NBT when sent over network
-   Chat components now have an optional `type` value (allowed values: `text`, `translatable`, `score`, `nbt`, `keybind`) to speed up parsing and improve error checking
-   `id` field in `show_entity` `hoverEvent` style now also accepts UUID as an array of 4 ints
-   Numeric and boolean arguments for `translate` component are no longer converted to string
-   The following JSON component representations are no longer accepted:
    -   `null`
    -   `[]`
-   Errors in following style fields are no longer silently ignored:
    -   `color`
    -   `clickEvent`
    -   `hoverEvent`
    -   `hoverEvent[action=show_entity].contents.name`
    -   `hoverEvent[action=show_item].contents.tag`

## Data Pack Version 19

### Tags

-   Added `can_breathe_under_water` entity type tag which disables drowning
-   Added `can_break_armor_stands` damage type tag for damage types that can incrementally knock down armor stands

## Fixed bugs in 23w40a

-   [MC-47607](https://bugs.mojang.com/browse/MC-47607) Barrier particles aren't shown if particles are set to minimal
-   [MC-50647](https://bugs.mojang.com/browse/MC-50647) Slime mob spawners spawn slimes only in slime chunks
-   [MC-78314](https://bugs.mojang.com/browse/MC-78314) (Marker) Armor stands create bubbles in water
-   [MC-109101](https://bugs.mojang.com/browse/MC-109101) Shields do not block damage while the player faces straight up
-   [MC-114761](https://bugs.mojang.com/browse/MC-114761) Area effect cloud applies effect to dying mob
-   [MC-172398](https://bugs.mojang.com/browse/MC-172398) Fire texture renders according to the player's rotation in the player inventory
-   [MC-221558](https://bugs.mojang.com/browse/MC-221558) Light particles aren't shown if particles are set to minimal
-   [MC-227255](https://bugs.mojang.com/browse/MC-227255) Beehives and bee nests do not rotate/mirror correctly in structure blocks
-   [MC-236946](https://bugs.mojang.com/browse/MC-236946) Shield attack vector is normalized incorrectly
-   [MC-253819](https://bugs.mojang.com/browse/MC-253819) Bells don't rotate correctly when loaded by structure/jigsaw blocks
-   [MC-254850](https://bugs.mojang.com/browse/MC-254850) An operator can kick a host of a LAN world
-   [MC-255173](https://bugs.mojang.com/browse/MC-255173) Nether portal teleportation is inaccurate at large coordinate values
-   [MC-261303](https://bugs.mojang.com/browse/MC-261303) Decorated pots have an unused "cracked" block state
-   [MC-263123](https://bugs.mojang.com/browse/MC-263123) Mending incorrectly calculates overflow after full repair
-   [MC-264748](https://bugs.mojang.com/browse/MC-264748) GLX.;;_;;initGlfw Treats Pointer as a String
-   [MC-265353](https://bugs.mojang.com/browse/MC-265353) Clocks and Compasses in Item Display Entities don't show correct time/direction
-   [MC-265462](https://bugs.mojang.com/browse/MC-265462) Sending resource pack during play phase shows loading terrain screen for a long time
-   [MC-265519](https://bugs.mojang.com/browse/MC-265519) Game minimizes when certain areas of the screen are clicked on Mac in fullscreen mode