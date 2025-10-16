# Minecraft 1.21.9 Pre-Release 1

The copper age is approaching and it's time for this drop's first pre-release. Today's release includes more copper golem improvements, some changes to the mannequins and several bug fixes. Pre-releases don't follow the regular Tuesday release schedule, so keep an eye out for the next one.

## Changes

### Minor Tweaks to Blocks, Items and Entities

-   Copper Golem now only tries to open Chests that are neighboring blocks when it's a passenger

### Minecraft Server Management Protocol

-   Notifications now use `minecraft:notification/` prefix instead of `notification:`

## Technical Changes

-   The Data Pack version is now 87.1

## Data Pack Version 87.1

### Mannequins

-   Mannequins description text can now be configured
-   Mannequins now accept `minecraft:profile` component from spawner items

#### Modified Data Fields

-   `profile` - now has the same format as a `minecraft:profile` component (which has been extended to allow overrides), defaults to `{}` (i.e. static profile with both `id` and `name` missing)

#### New Data Fields

-   `pose` - The pose of the Mannequin
    -   Valid entries: `standing`, `crouching`, `swimming`, `fall_flying`, `sleeping`
-   `immovable` - Optional boolean specifying that the Mannequin cannot be moved (defaults to `false`)
-   `description` - Optional Text Component shown where a Player's `below_score` score would show
    -   The default "NPC" (`entity.minecraft.mannequin.label`) text is shown if omitted
-   `hide_description` - Optional boolean specifying that no description should be shown at all
    -   A Mannequin with the description hidden displays as if a Player had no `below_score` display

### Commands

-   The `spawnpoint` command now optionally takes in a `pitch` argument
-   The `setworldspawn` command is no longer limited to the overworld
    -   This means players can respawn e.g. in the Nether when they have no bed or respawn anchor
    -   It now also takes in an optional `pitch` argument
-   Server commands now run from the respawn dimension by default instead of always the overworld
-   The `fetchprofile` command now also prints a clickable text to summon a Mannequin with the resolved profile

### Data Components

#### Modified `minecraft:profile`

-   Profiles can now also have additional fields that can replace various values used for rendering
-   If any of the fields are omitted, the value from the resolved profile is used, even if the profile resolved to the default skin
-   New fields
    -   `texture` - Optional namespaced ID of the skin texture to use for rendering
        -   The skin is specified relative to the `textures` folder and with a `.png` suffix
        -   e.g. `entity/player/wide/steve` will use the default wide Steve skin
    -   `cape` - Optional namespaced ID of the cape texture to use for rendering
        -   When specified, uses the same format as the `texture` field
    -   `elytra` - Optional namespaced ID of the elytra texture to use for rendering
        -   When specified, uses the same format as the `texture` field
        -   If this value is not present either as override or in player profile, Mannequins using this profile will use the cape texture, or if that is also not present, the default Elytra texture when wearing Elytra
    -   `model` - Optional model type, one of `wide` and `slim`

### Entity Data

#### Modified `minecraft:player`

-   Changes to the `respawn` object
    -   `angle` has been renamed to `yaw` and is now a required field
    -   `pitch` has been added as a required field
    -   `dimension` is now a required field

### Loot Functions

#### `minecraft:copy_name`

-   The `source` field now accepts new context values:
    -   `direct_attacker`
    -   `target_entity`
    -   `interacting_entity`

#### `minecraft:copy_components`

-   The `source` field now accepts new context values:
    -   `this`
    -   `attacker`
    -   `direct_attacker`
    -   `attacking_player`
    -   `target_entity`
    -   `interacting_entity`
    -   `tool`

## Fixed bugs in 1.21.9 Pre-Release 1

-   [MC-160528](https://bugs.mojang.com/browse/MC-160528) End portals do not negate fall damage
-   [MC-243759](https://bugs.mojang.com/browse/MC-243759) Explosions won't damage an entity if the distance to its eyes is 0
-   [MC-300257](https://bugs.mojang.com/browse/MC-300257) Lightning does not reset copper golem oxidation
-   [MC-300294](https://bugs.mojang.com/browse/MC-300294) Copper golems pathfind to chests incorrectly
-   [MC-300687](https://bugs.mojang.com/browse/MC-300687) The copper chains and bars aren't organized correctly in the Creative inventory
-   [MC-300881](https://bugs.mojang.com/browse/MC-300881) The skin preview in the skin reporting screen is no longer interactive
-   [MC-301409](https://bugs.mojang.com/browse/MC-301409) Acceleration power of fireballs and wind charges gets halved when they are redirected by explosions
-   [MC-301414](https://bugs.mojang.com/browse/MC-301414) Scraping oxidation off double chests doesn't produce particles on the half of the chest that wasn’t directly interacted with
-   [MC-301424](https://bugs.mojang.com/browse/MC-301424) entity\_data item component detection is broken in resource packs
-   [MC-301541](https://bugs.mojang.com/browse/MC-301541) Copper golems no longer sort items when in minecarts
-   [MC-301569](https://bugs.mojang.com/browse/MC-301569) Sounds of copper chests and all variants are too quiet and sound low-quality compared to before
-   [MC-301573](https://bugs.mojang.com/browse/MC-301573) Relative teleportation across dimensions is inconsistent
-   [MC-301798](https://bugs.mojang.com/browse/MC-301798) Copper golems do not open chests with specific transparent/non-full blocks above them
-   [MC-301814](https://bugs.mojang.com/browse/MC-301814) CustomNameVisible does not work for mannequins (for the name, not the NPC annotation)
-   [MC-301815](https://bugs.mojang.com/browse/MC-301815) Mannequin data is sometimes lost when using spawn eggs
-   [MC-301819](https://bugs.mojang.com/browse/MC-301819) Mannequins' name tags are visible when on a team and ridden
-   [MC-301862](https://bugs.mojang.com/browse/MC-301862) When clicking a command suggestion in chat, it occasionally selects half of the new word
-   [MC-301883](https://bugs.mojang.com/browse/MC-301883) Entities going through portals with their Motion set to more than 10 on an axis have their Motion tag reset
-   [MC-301893](https://bugs.mojang.com/browse/MC-301893) When a copper golem is leashed by a player and then oxidizes into a statue, it will not drop the lead
-   [MC-301951](https://bugs.mojang.com/browse/MC-301951) Misleading description for operator\_user\_permission\_level in server management protocol documentation
-   [MC-301979](https://bugs.mojang.com/browse/MC-301979) Copper golems no longer properly check chests
-   [MC-301984](https://bugs.mojang.com/browse/MC-301984) Teleporting a player to their own position is now jittery/frozen
-   [MC-301991](https://bugs.mojang.com/browse/MC-301991) deprecated.json has some renamed keys pointing to text values instead of the new keys
-   [MC-302032](https://bugs.mojang.com/browse/MC-302032) Static profiles no longer resolve texture data unless an id or name is provided
-   [MC-302089](https://bugs.mojang.com/browse/MC-302089) Game crashes when flying mobs start pathfinding in debug mode
-   [MC-302092](https://bugs.mojang.com/browse/MC-302092) Crash when placing iron bars next to stairs, when stairs are added to #bars tag
-   [MC-302094](https://bugs.mojang.com/browse/MC-302094) Crash when adding blocks to #copper\_chests then placing it next to actual copper chests
-   [MC-302095](https://bugs.mojang.com/browse/MC-302095) Crash when adding blocks to #lightning\_rods and summoning a lightning over it
-   [MC-302096](https://bugs.mojang.com/browse/MC-302096) Crash when adding blocks to #wooden\_shelves, placing it next to wooden shelf, then powering the shelf

---

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
-   [MC-298681](https://bugs.mojang.com/browse/MC-298681) Text displays with the "shadow" tag enabled and the "see\_through" tag disabled exhibit z-plane fighting at a close distance
-   [MC-298710](https://bugs.mojang.com/browse/MC-298710) TTF glyphs are incorrectly rendered over some elements
-   [MC-298832](https://bugs.mojang.com/browse/MC-298832) The breaking particles of droppers and dispensers facing up or down appear incorrect on some Qualcomm graphics
-   [MC-298856](https://bugs.mojang.com/browse/MC-298856) Blindness and darkness fog effects no longer work underwater
-   [MC-298898](https://bugs.mojang.com/browse/MC-298898) TextureAtlas leaks textures after resource reload
-   [MC-298919](https://bugs.mojang.com/browse/MC-298919) Sometimes you pass through the happy ghast when you get off while going forward
-   [MC-299017](https://bugs.mojang.com/browse/MC-299017) Text on glowing signs is not visible on some graphics
-   [MC-299071](https://bugs.mojang.com/browse/MC-299071) Memory Leak in ItemStackRenderState leads to OutOfMemoryError

---

