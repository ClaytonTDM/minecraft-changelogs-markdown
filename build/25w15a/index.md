# 25w15a

Snapshot on a Tuesday? Yes! From now on we will be moving snapshots to the same weekday as full releases, Tuesdays.

This week we are releasing the first snapshot of the second game drop of 2025, including the happy ghast, ghastling, dried ghast and ghast harness. Experience soaring new gameplay thanks to the happy ghast, and discover how to raise one of your own – from retrieving a dried ghast block from the Nether to submerging it in water in the Overworld to spawn a ghastling. We are also adding the locator bar to Java this week, you can finally easily find your friends when you are out adventuring.

Take your first test flight with the happy ghast, craft your own dried ghast – and send us your [feedback](https://feedback.minecraft.net/hc/en-us/community/topics/35301401438605-Upcoming-Game-Drop-Features?sort_by=votes)!

## New Features

-   Added Dried Ghast block
-   Added Happy Ghast mob
-   Added Harness items
-   Added new advancements

### Dried Ghast block

-   Can be found in the Nether in Nether Fossil structures
-   Is crafted with 1 Bone Block and 8 Ghast Tears
-   When waterlogged it undergoes 3 state changes over about 20 minutes until it spawns a Ghastling mob
-   Makes sounds and shows particles depending on the state
-   If mined during the waterlogging, it will revert to its “dry” state regardless of what state it has reached during waterlogging
-   Will revert states back to its initial “dry” state when it is taken away from being waterlogged, using the same time scale

### Happy Ghast mob

#### Ghastling

-   Ghastling is a young version of the Happy Ghast mob
-   Spawns from a Dried Ghast block that has continuously been waterlogged for about 20 minutes
-   After spawning, the Ghastling will try and follow:
    -   Players within a 16-block radius or
    -   An adult, non-aquatic passive mob (and some neutral mobs) within a 16-block radius
-   If no player or suitable mob is close around the Ghastling will idle around within 32 blocks from its home position (where it spawned or last was interacted with)
    -   It will reset its home position if it is moved more than 16 blocks away from the border of its home area
-   Can be tempted and fed using Snowballs
-   Will grow up into a Happy Ghast after about 20 minutes (or faster if fed Snowballs)

#### Happy Ghast

-   The adult Happy Ghast is a new flying mount that can carry up to four players
-   Grows up from a Ghastling after about 20 minutes (or faster if the Ghastling is fed Snowballs)
-   Can be equipped with a Harness and then be mounted by up to 4 players
-   Tempted by Snowballs and Harness
    -   Harness tempting only works if the Happy Ghast is unharnessed
-   Has no panic behavior when taking damage
-   Cannot be bred
-   Slowly regenerates health, with regeneration speeding up during rain, snow or when flying at the same height as clouds are rendered
-   The first player that mounts the Happy Ghast will control it, sitting in front of the Happy Ghast, just above its face
    -   Pressing the forward key will make the Happy Ghast fly in the direction the player is looking
    -   Pressing the back key will make the Happy Ghast fly in the opposite direction the player is looking
    -   Pressing the left and right keys will strafe the Happy Ghast in the respective direction
    -   Pressing the jump key will make the Happy Ghast fly directly up
    -   Pressing the sneak key will make the player dismount the Happy Ghast
-   When a player mounts, the goggles on the Happy Ghast go down to cover its eyes, indicating that it now can be controlled
-   Players mounted after the first player piloting the Happy Ghast are placed in slots on each side of it, starting clockwise from the first player
-   Pressing crouch button dismounts the player on top of the Happy Ghast
-   If the Happy Ghast detects players on top of it, it then ceases all movement and aligns to the closest cardinal horizontal direction
-   This happens regardless of it having a Harness equipped or not
-   3rd person camera is moved back when player is mounted on the Happy Ghast
-   When there are no players mounted or walking on the Happy Ghast, the goggles go up and the Happy Ghast starts to roam around the home position
-   If players dismount midair, the Happy Ghast will descend towards the ground before it resumes roaming
-   Cannot enter boats
-   Idles around within 64 blocks from its home position in the similar way as the Ghastling
    -   If wearing a Harness, the Happy Ghast idles closer to the home position (within 32 blocks)
-   The Happy Ghast will try to stay close to blocks when roaming on its own

### Ghast

-   Updated Ghast texture

### Harness items

-   Harness is a new item that can be equipped on a Happy Ghast to allow players to ride it
-   It is 16 new items, one for each color
-   Crafted out of 3 Leather, 2 Glass blocks and 1 Wool block, the Harness will have the same color as the Wool block used when crafting
-   Can be re-dyed
-   Can only be equipped on a Happy Ghast
-   Allows up to 4 players to mount the Happy Ghast
-   Can be removed from the Happy Ghast using Shears but only when no players are mounted

### Advancements

-   Added new "Stay Hydrated!" Husbandry Advancemet when a Dried Ghast Block is placed into Water
-   Added "Heart Transplanter" Adventure Advancement that is unlocked when a player places a Creaking Heart with the correct alignment between two Pale Oak Log blocks

## Experimental Features

-   This snapshot introduces a new experimental Feature Toggle that adds a locator bar to find your friends easily. You must turn on this Feature Toggle in the Experiments Menu when creating a new world if you want to test the locator bar. You can find more information about Feature Toggles [here](https://www.minecraft.net/article/testing-new-minecraft-features/feature-toggles-java-edition).

### Locator Bar

The Locator Bar is an experimental new UI element for players that displays the direction of Waypoints.

-   This experiment allows servers to manage Waypoints and their connections with Players
-   By default, all Players transmit a Waypoint from themselves, and all Players receive all Waypoints; allowing players to locate other players in multiplayer
-   The Locator Bar will display colored indicators when the camera is facing within 120 degrees towards a Waypoint. If a Waypoint is above/below the camera's viewport (the screen) an up/down arrow will display
-   Any Waypoint that is determined to be a Player or Mob that belongs to a Team then the color indicator will match the Team color

#### Player Changes

-   Crouching will hide the player, preventing them from appearing on the Locator Bar of other players
-   Spectators are only visible to other spectators on the Locator Bar

#### Item Changes

-   The following items will hide players when worn in the head slot:
    -   Carved Pumpkin
    -   Skeleton Skull
    -   Wither Skeleton Skull
    -   Player Head
    -   Zombie Head
    -   Creeper Head
    -   Dragon Head
    -   Piglin Head

#### Potion Changes

-   Using a Potion of Invisibility will also hide players from the Locator Bar

#### Game Rules

##### Added `useLocatorBar`

-   Default is enabled for servers running the Locator Bar experiment
-   Toggling to off will remove all existing Waypoints from all players

#### Attributes

##### Added `waypoint_transmit_range` and `waypoint_receive_range`

-   Default: `0.0`, Minimum: `0.0`, Maximum: `60000000.0`
-   Players have a default transmission and receive range of 60,000,000
-   Mobs with a transmission range above zero will send waypoint packets to nearby receivers
-   Similarly, receivers only receive with a range above zero, and cannot receive waypoints outside of this range

#### `waypoint` command

This is a new command for querying and modifying waypoints.

    waypoint list
    
    waypoint modify <entity-selector> color <color>
    waypoint modify <entity-selector> color hex <hex-color>
    waypoint modify <entity-selector> color reset
    waypoint modify <entity-selector> fade <fade_start> <alpha_start> <fade_end> <alpha_end>
    waypoint modify <entity-selector> fade reset
    

Parameters:

-   `entity-selector`: For selecting entities that are transmitting as waypoints (see `waypoint_transmit_range` attribute)
-   `color`: Overrides the Locator Bar icon color for this waypoint
-   `hex <hex-color>` arguments are in web format (RRGGBB)
    -   Red is either `hex F00` or `hex FF0000`
    -   Cornflower blue is `hex 6495ED`
-   `fade`: Set the fade out effect for waypoints
    -   The arguments `<fade_start> <alpha_start> <fade_end> <alpha_end>` handle the starting/ending fade distance & alpha opacity
        -   `*_start` is the nearby values (closest to the player)
        -   `*_end` is the far values (furthest from the player)
    -   `reset` will restore the default behavior of distant Locator Bar icons fading out to 0.2 alpha

## Changes

-   Updated the textures for the Ghast
-   Increased the third-person camera distance when spectating or riding Ghasts, Ender Dragons, and Giants
-   Wolves, Sheep and Pigs now have their legs mirrored
-   Spectators will now teleport together with, but stop spectating, entities that move to other dimensions
-   Rules for when ambient desert blocks sounds play have been tweaked

### Ambient Desert Block Sounds Changes

-   Ambient sand sounds no longer require sky access to play
-   Ambient sand sounds now have a slightly decreased chance to play
-   Terracotta blocks no longer trigger ambient sand sounds
-   Sand blocks no longer trigger ambient wind sounds
-   Terracotta blocks no longer trigger ambient wind sounds
-   Short Dry Grass and Tall Dry Grass can now trigger ambient wind sounds when above 2 Sand, Red Sand or Terracotta blocks
-   Dead Bush ambient sounds now have a slightly increased chance of playing

## Technical Changes

-   The Data Pack version is now 72
-   The Resource Pack version is now 56
-   Pressing F3 + V now prints client-side version information

> **Developer's Note**: _The GUI rendering code is undergoing a significant refactoring in this Snapshot series. The version of it released in this Snapshot is not supposed to be final and will be further iterated upon._

## Data Pack Version 72

-   Dimension Type definitions have a new optional field, `cloud_height` that indicates on what y-level the clouds start in the dimension
-   New `version` command has been added
-   New `datapack create` subcommand has been added

### Commands

#### Added `version`

-   No arguments
-   Prints current version information on server side
-   Available in singleplayer or for server operators

#### Added `datapack create`

-   Creates new empty directory data pack for current world
-   Supported pack version is always equal to one supported by game
-   Available only to server owners
-   Syntax: `datapack create <id> <name>`
    -   `id` - new pack name, must be a valid directory name
    -   `name` - text component to be placed in `description` in `pack.mcmeta`

### Attributes

#### Added `camera_distance`

-   Default value: `4.0`
-   Modifies the distance at which the camera is placed away from the player or spectated entity when in a third-person view
-   If the entity being ridden has a larger `camera_distance` attribute, that distance will be used
-   This distance is multiplied by the `scale` attribute to get a final target camera distance

### Data Components

#### `attribute_modifiers` Item Component

-   Added optional `display` field to `attributes_modifiers` entries
    -   There are 3 `display` types:
        -   `default` - Current behavior of showing the calculated attribute modifier values on the tooltip
        -   `hidden` - Does not show the attribute modifier entry
        -   `override` - Replaces the shown attribute modifier text
            -   Contains a single field `value` for the text contents to show for this attribute modifer entry

### Entity Data

#### `area_effect_cloud`

-   The `Particle` field has been renamed to `custom_particle`, and now always functions as an exact override for the default colored `entity_effect` particle
    -   The field will not be written if no override is specified
    -   The color will no longer be inherited from the potion contents when specifying the `entity_effect` or `tinted_leaves` particle types

### Tags

#### Block Tags

-   Added `#triggers_ambient_desert_dry_vegetation_block_sounds` - blocks that can trigger ambient desert dry vegetation sounds to play from blocks above
-   `#plays_ambient_desert_block_sounds` has been renamed to `#triggers_ambient_desert_sand_block_sounds`

#### Item Tags

-   Added `#happy_ghast_food` - items that can be used to feed Happy Ghasts
-   Added `#happy_ghast_tempt_items` - items that can be used to tempt Happy Ghasts

#### Entity Tags

-   Added `#can_equip_harness` - entities that can equip the Harness items
-   Added `#followable_friendly_mobs` - non-baby entities that will be followed by Baby Happy Ghasts

## Resource Pack Version 56

-   The game will now consistently respect `blur` texture parameter in `.png.mcmeta` files

### Sound Events

-   `block.sand.wind` has been renamed to `block.dry_grass.ambient`

### Sounds

-   Changed location on the sounds for glow squid, squid, guardian, horse, rabbit and pufferfish from `entity` folder to the `mob` folder

### Equipment Assets

-   Added new `happy_ghast_body` layer type, rendering in the body slot of the Happy Ghast

## Fixed bugs in 25w15a

-   [MC-147260](https://bugs.mojang.com/browse/MC-147260) Map icons are not displayed in the cartography table
-   [MC-191306](https://bugs.mojang.com/browse/MC-191306) Sounds played using /playsound are played in all dimensions
-   [MC-266318](https://bugs.mojang.com/browse/MC-266318) Trapdoors and doors have inconsistent subtitles for being opened and closed
-   [MC-275374](https://bugs.mojang.com/browse/MC-275374) Drowneds with CanBreakDoors:1b don't break doors
-   [MC-276264](https://bugs.mojang.com/browse/MC-276264) Advancement screen shadow renders below item icons
-   [MC-277992](https://bugs.mojang.com/browse/MC-277992) 1 color in the pale chest boat item is incorrect
-   [MC-278466](https://bugs.mojang.com/browse/MC-278466) Bundle experiment data pack related strings are not in deprecated.json
-   [MC-278873](https://bugs.mojang.com/browse/MC-278873) The data fixer regenerates chunks containing items obtained from flower pots using Ctrl + Pick Block before version 1.13, or it crashes the game if the item is in the player's inventory
-   [MC-280047](https://bugs.mojang.com/browse/MC-280047) Temperate cows use their 1.14 texture with the Programmer Art resource pack enabled
-   [MC-280266](https://bugs.mojang.com/browse/MC-280266) Firefly bushes don't produce as many, or as constant, amounts of particles as on Bedrock Edition
-   [MC-280268](https://bugs.mojang.com/browse/MC-280268) Blazes and breezes use "large" spawn eggs despite mobs of a similar size using "medium"
-   [MC-280471](https://bugs.mojang.com/browse/MC-280471) The Particle.color field in area effect clouds is read-only
-   [MC-293619](https://bugs.mojang.com/browse/MC-293619) The chicken spawn egg texture in Programmer Art is missing pixels that match the inventory slot background color
-   [MC-295681](https://bugs.mojang.com/browse/MC-295681) Leaf litter can generate inside of woodland mansions
-   [MC-295850](https://bugs.mojang.com/browse/MC-295850) Done and Cancel buttons on the world creation Edit Game Rules screen do the same thing
-   [MC-295866](https://bugs.mojang.com/browse/MC-295866) The /setblock and /fill commands no longer update redstone power in some situations
-   [MC-295867](https://bugs.mojang.com/browse/MC-295867) Structures from previous versions fail with DataFixerUpper
-   [MC-296035](https://bugs.mojang.com/browse/MC-296035) Two pixels from "mooshroom\_spawn\_egg" are the same as "cow\_spawn\_egg"
-   [MC-296624](https://bugs.mojang.com/browse/MC-296624) Old Brown Mooshroom texture is missing from Programmer Art
-   [MC-297537](https://bugs.mojang.com/browse/MC-297537) Extra "entity.wolf\_whine.whine" sound event exists in sounds.json