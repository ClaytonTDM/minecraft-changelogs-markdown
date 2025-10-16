# Minecraft Snapshot 25w15a

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
-   [MC-296035](https://bugs.mojang.com/browse/MC-296035) Two pixels from "mooshroom;;_;;spawn;;_;;egg" are the same as "cow;;_;;spawn;;_;;egg"
-   [MC-296624](https://bugs.mojang.com/browse/MC-296624) Old Brown Mooshroom texture is missing from Programmer Art
-   [MC-297537](https://bugs.mojang.com/browse/MC-297537) Extra "entity.wolf;;_;;whine.whine" sound event exists in sounds.json

---

It's time for a new Minecraft snapshot! We've got some more under-the-hood updates including a `tntExplodes` game rule previously found in Bedrock edition, new features in SNBT syntax, and allowing all entities to store custom data. We also have some more bug fixes coming your way.

You can now also enjoy a new main menu background, happy mining!

## Changes

-   The Sheep wool texture has been tweaked to remove the stark line at the back
-   Blocks that are broken by a Piston now play their breaking sound
-   Updated the menu panorama for the first Game Drop of the year
-   The textures of Test Blocks and Test Instance Blocks have been updated
-   Cactus Flowers can now be placed on Farmland

## Technical Changes

-   The Data Pack version is now 70
-   The Resource Pack version is now 54

## Data Pack Version 70

-   All entities can now store custom data
-   Unified format and functionality of predicates for components on Entities and Block Entities
-   New operations for SNBT
-   Added new `tntExplodes` Game Rule
-   Added `#flowers` item tag - corresponding item tag for the already existing `#flowers` block tag

### Entity Data

-   Custom data (previously present only on Marker) is now available on all entities
    -   It's exposed as a `minecraft:custom_data` component, so it can be set by spawning items and matched by predicates
    -   The component is currently stored in a field called `data`, which will be changed in the future when more proper storage for entity components is introduced
    -   It's stored only if it's non-empty

### Entity Predicates

-   A new optional field has been added to entity predicates: `predicates`
    -   Its functionality and format is identical to the field `predicates` on item predicates, but they operate on entity components
        -   When present, `predicates` will match partial contents of entity components

### Block Predicates

-   New optional fields have been added to block predicates: `components` and `predicates`
-   Their functionality and format are identical to the fields `components` and `predicates` on item predicates, but they operate on block entity components (when present)
    -   When present, `components` will match exact contents of block entity components
    -   When present, `predicates` will match partial contents of block entity components

### SNBT Format

-   To simplify input of data and macro use, SNBT now also supports following operations:
    -   `bool(arg)` - converts argment to boolean
        -   if argument is a boolean value, returns value directly
        -   if argument is a number value, returns `true` if it is non-zero
    -   `uuid(str)` - converts string representation of UUID to integer array
-   Implicit infinite float values (like `1e1000`) are now rejected

### `tntExplodes` Game Rule

-   When `false`, TNT will not explode and cannot be primed
-   Default value: `true`

## Resource Pack Version 54

-   "Global" uniforms may now be defined in any shader, and the game will attempt to fill it
    -   Currently, these are: `ModelViewMat`, `ProjMat`, `TextureMat`, `ScreenSize`, `ColorModulator`, `Light0_Direction`, `Light1_Direction`, `GlintAlpha`, `FogStart`, `FogEnd`, `FogColor`, `FogShape`, `LineWidth`, `GameTime`, `ModelOffset`
    -   The type of the uniform must match what it would normally be, or it'll be undefined behavior

## Fixed bugs in 25w10a

-   [MC-269386](https://bugs.mojang.com/browse/MC-269386) Flow Pottery Sherd is not in the correct spot in the creative inventory
-   [MC-270043](https://bugs.mojang.com/browse/MC-270043) Reduced armor glint applies to tridents
-   [MC-279920](https://bugs.mojang.com/browse/MC-279920) Beacons play the deactivation sound every game tick while on the death screen
-   [MC-279967](https://bugs.mojang.com/browse/MC-279967) Temperate cows have strange mapping/harsh borders because of the leg texture becoming mirrored
-   [MC-279993](https://bugs.mojang.com/browse/MC-279993) Baby cows' heads are incorrectly positioned
-   [MC-280050](https://bugs.mojang.com/browse/MC-280050) The mule saddle texture is missing in the Programmer Art resource pack
-   [MC-280061](https://bugs.mojang.com/browse/MC-280061) Test instance block has flipped lighting direction
-   [MC-280063](https://bugs.mojang.com/browse/MC-280063) crafting;;_;;transmute recipes don't give an output if the output stack has the same count as the stack in the crafting grid
-   [MC-280106](https://bugs.mojang.com/browse/MC-280106) Cactus flowers cannot be held by endermen
-   [MC-280109](https://bugs.mojang.com/browse/MC-280109) Leash all frog variants advancement is not deterministic in data generation
-   [MC-280113](https://bugs.mojang.com/browse/MC-280113) Shears no longer consume durability when used on insta-mined blocks
-   [MC-280143](https://bugs.mojang.com/browse/MC-280143) Monster spawner and trial spawner tooltip no longer displays the "Interact with Spawn Egg" hint
-   [MC-280159](https://bugs.mojang.com/browse/MC-280159) New cow model does not match Bedrock Edition
-   [MC-280242](https://bugs.mojang.com/browse/MC-280242) Not all ambient sounds have been moved to the "Ambient/Environment" category
-   [MC-280244](https://bugs.mojang.com/browse/MC-280244) Temperate cow model in Java does not have its new horn placement from Bedrock Edition
-   [MC-280285](https://bugs.mojang.com/browse/MC-280285) Some game events can crash the game when attempting to create vibration resonance with an amethyst block
-   [MC-280315](https://bugs.mojang.com/browse/MC-280315) Crash when listing suggestions with invalid Unicode escapes
-   [MC-280325](https://bugs.mojang.com/browse/MC-280325) The player hand flickers in first-person mode
-   [MC-280337](https://bugs.mojang.com/browse/MC-280337) Slimes freeze the game
-   [MC-280360](https://bugs.mojang.com/browse/MC-280360) The game stops updating frames while loading chunks
-   [MC-280379](https://bugs.mojang.com/browse/MC-280379) Frozen screen when entering any UI or after a few minutes of playing
-   [MC-280383](https://bugs.mojang.com/browse/MC-280383) Items in inventories sometimes do not render
-   [MC-280423](https://bugs.mojang.com/browse/MC-280423) Block textures flicker randomly
-   [MC-280439](https://bugs.mojang.com/browse/MC-280439) Values out of bounds for float and double parse successfully in SNBT resulting in storing the value Infinity

---

Back so soon! We're releasing a second snapshot this week, following frequently occurring issues in yesterday's snapshot.

Happy mining!

## Fixed bugs in 25w09b

-   [MC-280302](https://bugs.mojang.com/browse/MC-280302) Text does not render in menus until entering a world
-   [MC-280303](https://bugs.mojang.com/browse/MC-280303) Game crashes when trying to render a warden
-   [MC-280305](https://bugs.mojang.com/browse/MC-280305) GUI elements incorrectly overlap on macOS
-   [MC-280308](https://bugs.mojang.com/browse/MC-280308) Crash from GL error when opening world
-   [MC-280310](https://bugs.mojang.com/browse/MC-280310) The game crashes near a Trial Chamber
-   [MC-280322](https://bugs.mojang.com/browse/MC-280322) Game crashes when trying to render a breeze
-   [MC-280324](https://bugs.mojang.com/browse/MC-280324) Game crashes when entering the end from the nether
-   [MC-280329](https://bugs.mojang.com/browse/MC-280329) Game sometime crashes when saving world
-   [MC-280334](https://bugs.mojang.com/browse/MC-280334) The Report Player screen is broken
-   [MC-280346](https://bugs.mojang.com/browse/MC-280346) The loading screen initially appears black and only changes to red at the end

---

In this week's snapshot, we are bringing a long-awaited feature into parity as fallen trees are making their debut in Java Edition. Additionally, firefly bushes can now generate in mangrove swamps and rarely in badlands.

On the technical side, SNBT syntax in commands has been expanded and improved, including fixing bugs related to SNBT text components preventing escapes from working.

## New Features

-   Added fallen trees to be in parity with Bedrock Edition

### Fallen Trees

-   Fallen trees are a new decorative variant of trees
-   Fallen trees come in four different wood type variants:
    -   Oak
    -   Birch
    -   Jungle
    -   Spruce
-   Birch fallen trees can come in a shorter version or a longer version
-   Some fallen trees can be decorated with mushroom or vines
-   Fallen trees can be found in all biomes where their standing tree variant grow, except the following:
    -   Meadow
    -   Bamboo Jungle
    -   River
    -   Grove
    -   Flower Forest has fallen birch trees but not fallen oak trees

## Changes

### Leaf Litter

-   Leaf Litter is now replaceable by other blocks

### Firefly Bush

-   The Firefly Bush can now generate near water in Mangrove Swamps and Badlands (very rarely), like other biomes with water

## Technical Changes

-   The Data Pack version is now 69
-   New command line argument `--renderDebugLabels` is available for the client
    -   Adds debug labels to relevant OpenGL objects, making debugging rendering easier for developers

## Data Pack Version 69

-   Object notation used in commands for NBT, text components and inline predicates (a.k.a. SNBT) has been extended

### Commands

-   `/data` can now create and modify heterogeneous lists transparently

### Entity Data

-   The `FallFlying` field will no longer be preserved if removed
-   The `Health` and `Air` fields now default to their respective maximum value if not specified

#### `area_effect_cloud`

-   The `Duration` field now defaults to `-1` if not specified
-   If the `Duration` field is `-1`, the Area Effect Cloud will never run out
-   This means that an Area Effect Cloud summoned with no duration specified will no longer immediately disappear

#### `creeper`

-   The `Fuse` field now defaults to `30` if not specified
-   The `ExplosionRadius` field now defaults to `3` if not specified

#### `dolphin`

-   The `Moistness` field now defaults to `2400` if not specified

#### `ender_dragon`

-   The `DragonDeathTime` field now defaults to `0` if not specified

#### `falling_block`

-   The `BlockState` field can now be `air` (will despawn immediately) - if otherwise not specified or invalid, defaults to `sand`
-   The `HurtEntities` field now defaults to `false` if not specified (or `true` if `BlockState` is `anvil`)
-   The `FallHurtAmount` field now defaults to `0` if not specified
-   The `FallHurtMax` field now defaults to `40` if not specified
-   The `DropItem` field now defaults to `true` if not specified
-   The `TileEntityData` field will no longer be preserved if removed

#### `firework_rocket`

-   The `ShotAtAngle` field now defaults to `false` if not specified

#### `fox`

-   The `Trusted` field now defaults to empty if not specified (and will no longer be merged with the previous state if modified by `/data`)

#### `ghast`

-   The `ExplosionPower` field now defaults to `1` if not specified

#### `goat`

-   The `HasLeftHorn` and `HasRightHorn` fields now default to `true` if not specified

#### `interaction`

-   The `width` and `height` fields now default to `1` if not specified

#### `item`

-   The `Health` field now defaults to `5` if not specified
-   The `PickupDelay` field now defaults to `0` if not specified
-   The `Age` field now defaults to `0` if not specified
-   The `Owner` and `Thrower` fields will no longer be preserved when removed

#### `item_frame` and `glow_item_frame`

-   The `ItemDropChance` field now defaults to `1.0` if not specified

#### `primed_tnt`

-   The `fuse` field now defaults to `80` if not specified
-   The `explosion_power` field now defaults to `4` if not specified

#### `shulker`

-   The `Color` field now defaults to `16` (no color) if not specified

#### `skeleton`

-   The `StrayConversionTime` field will no longer be preserved when removed

#### `spectral_arrow`

-   The `Duration` field now defaults to `200` if not specified

#### `snow_golem`

-   The `Pumpkin` field now defaults to `true` if not specified

#### `tnt_minecart`

-   The `fuse` field now defaults to `80` if not specified
-   The `explosion_power` field now defaults to `4` if not specified
-   The `explosion_speed_factor` field now defaults to `1` if not specified

#### `trader_llama`

-   The `DespawnDelay` field now defaults to `47999`

#### `villager`

-   The `FoodLevel` and `Xp` fields now default to `0` if not specified
-   The `ConversionTime` field will no longer be preserved when removed

#### `wandering_trader`

-   The `DespawnDelay` field now defaults to `0` if not specified

#### `zombie`

-   The `DrownedConversionTime` field will no longer be preserved when removed

#### `zombie_villager`

-   The `Xp` field now defaults to `0` if not specified
-   The `ConversionTime` field will no longer be preserved when removed

#### `arrow`, `spectral_arrow`, `trident`

-   The `damage` field now defaults to `2` if not specified

#### `dragon_fireball`, `wind_charge`, `breeze_wind_charge`, `wither_skull`, `small_fireball`, and `large_fireball`

-   The `acceleration_power` field now defaults to `0.1` if not specified

#### `small_fireball` and `large_fireball`

-   The `ExplosionPower` field now defaults to `1` if not specified

#### `block_display`, `item_display`, and `text_display`

-   The `interpolation_duration`, `teleport_duration`, and `start_interpolation` fields now default to `0` if not specified
-   The `view_range` field now defaults to `1` if not specified
-   The `shadow_radius` field now defaults to `0` if not specified
-   The `shadow_strength` field now defaults to `1` if not specified
-   The `width` and `height` fields now default to `0` if not specified

### Block Entity Data

#### `campfire`

-   The `CookingTimes` and `CookingTotalTimes` fields will no longer be preserved when removed

#### `chiseled_bookshelf`

-   The `last_interacted_slot` field now defaults to `-1` if not specified

#### `hopper`

-   The `TransferCooldown` field now default to `-1` if not specified

#### `jigsaw`

-   The `name`, `target`, and `pool` fields now default to `minecraft:empty` if not specified
-   The `final_state` field now defaults to `minecraft:air` if not specified

#### `sculk_shrieker`

-   The `warning_level` field now defaults to `0` if not specified

#### `structure_block`

-   The `ignoreEntities` and `showboundingbox` fields now default to `true` if not specified
-   The `posY` field now defaults to `1` if not specified

### NBT changes

-   Any interface with NBT data within the game (SNBT representation, `/data`) now supports heterogeneous lists, i.e. ones where elements are not of the same type
    -   Inserting or replacing into a list of a different type with `/data` will no longer give an error
    -   Inserting into an array type (e.g. `[I;1,2,3]`) is still type-restricted
    -   This means that the 'wrapper' objects previously used to represent heterogeneous lists will no longer be observable by in-game means
-   `/data` can no longer traverse paths with an empty key (e.g. `/data get ... foo.''.bar`)
-   The NBT file format is unchanged:
    -   Heterogeneous lists are transformed before storage to bypass NBT constraints
    -   Example transform: `['a', {'b':3}]` is stored as `[{'':'a'},{'b':3}]`
    -   Existing external tools will still be able to read NBT files as before, but heterogeneous lists will be displayed in the transformed form
-   No data produced by the game has changed: objects such as Text Components were already producing heterogeneous lists in this form
-   Note: these wrapper objects may never be observed in-game, they are only relevant to developers working with the NBT file or network format directly

### SNBT Changes

-   The text format for describing object-like data in commands (like NBT, text components, predicates, etc.) has been extended

#### Number Format

-   Either whole or fraction parts of a float number can be omitted
    -   Examples: `.1` and `1.` are valid now
-   Float numbers now use E notation
    -   Example: both `1.2e3` and `1.2E3`, `1.2E+3`, `12000e-1` are now a valid way to represent `1200.0`
-   Integer numbers can now be prefixed with `0x` to represent hexadecimal numbers and `0b` to represent binary numbers
    -   Example: `0xbad` (equal to `2989`), `0xCAFE` (equal to `51966`), `0b101` (equal to `5`)
-   Integer numbers now can't start with `0`
    -   Normally it would mean number is in base-8, but we are restricting it to avoid accidental use
-   Numbers can now contain `_` character between sequences of digits (but not at the start or the end of sequence)
    -   Example: `0b10_01`, `0xAB_CD`, `1_2.3_4__5f`, `1_2e3_4`
-   `NaN`, `Inf` or hexadecimal float representation are NOT supported
-   Type suffixes have been extended:
    -   Integer type suffixes (`b` or `B` - byte, `s` or `S` - short, `i` or `I` - integer, `l` or `L`) can now be prefixed with `s` (signed) or `u` unsigned
    -   New suffixes only affect valid range when parsing - values are still stored as signed
        -   Example: `240ub` is equal to `-16sb`, while `240sb` does not parse
    -   When a suffix is used without `u` or `s`, it defaults to signed for decimal numbers and unsigned for binary and hexadecimal numbers
    -   Note: since `b` is also a valid hexadecimal digit, byte sized hexadecimal values can only be written with a signed suffix, like `0x11ub` or `0x11sb`

#### Strings

-   Quoted strings can now use escape sequences beyond `;;';;`, `;;";;` and `;;\;;`:
    -   Unicode escapes:
        -   `;;x;;` - two digit escape, like `;;x;;42`
        -   `;;u;;` - four digit escape, like `;;u;;2603`
        -   `;;U;;` - eight digit escape, like `;;U;;00002603`
        -   `;;N;;{<name>}` - named Unicode character, like `;;N;;{Snowman}`
    -   Built-in escape sequences:
        -   `;;b;;` - backspace, Unicode `;;x;;08`
        -   `;;s;;` - space, Unicode `;;x;;20`
        -   `;;t;;` - horizontal tab, Unicode `;;x;;09`
        -   `;;n;;` - linefeed, Unicode `;;u;;0a`
        -   `;;f;;` - form feed, Unicode `;;u;;0c`
        -   `;;r;;` - carriage return, Unicode `;;u;;0d`
-   Unquoted strings now can't start with `0-9`, `.`, `+`, `-` to avoid accidental collision with numbers

#### Number arrays

-   Values in arrays (`[B;]`, `[I;]`, `[L;]`) without a suffix are now assumed to have suffix matching the type of the array
    -   Example: `[B;1,2]` is equivalent to `[B; 1b, 2b]`
-   Arrays can now also accept types smaller than the array type
    -   Example: `[I;1b,2s,3]` is valid and equivalent to `[I;1i,2i,3i]`

#### Lists

-   Lists now accept trailing commas
    -   Example: `[1,2,]` is valid and equivalent to `[1,2]`
    -   Only one trailing comma is allowed, and it must come after a valid element - both `[,]` and `[1,,]` are invalid

#### Compounds

-   Compounds (maps) now accept trailing commas
    -   Example: `{a:b,}`
    -   Only one trailing comma is allowed, and it must come after a valid key-value pair - both `{,}` and `{a:b,,}` are invalid

## Fixed bugs in 25w09a

-   [MC-168262](https://bugs.mojang.com/browse/MC-168262) Dead bushes cannot be placed on farmland
-   [MC-236100](https://bugs.mojang.com/browse/MC-236100) End crystal beam appears to be black
-   [MC-276861](https://bugs.mojang.com/browse/MC-276861) The player can sometimes teleport through blocked end portals when moving very fast
-   [MC-279229](https://bugs.mojang.com/browse/MC-279229) SNBT text components prevent ;;\;;n and ;;\;;t from working
-   [MC-279236](https://bugs.mojang.com/browse/MC-279236) Flying into water with an elytra puts the player into an erroneous state
-   [MC-279250](https://bugs.mojang.com/browse/MC-279250) SNBT text components prevent unicode escapes from working
-   [MC-279252](https://bugs.mojang.com/browse/MC-279252) Changing a single line of a sign with /data is no longer possible in some situations
-   [MC-279278](https://bugs.mojang.com/browse/MC-279278) Strafing twice in rapid succession while walking forward causes player to sprint
-   [MC-279928](https://bugs.mojang.com/browse/MC-279928) Beacon beam clips into beacon block when far enough away
-   [MC-279932](https://bugs.mojang.com/browse/MC-279932) Beacon beam disappears and reappears when approaching it
-   [MC-279942](https://bugs.mojang.com/browse/MC-279942) Beacon beam can render over fog when outside render distance
-   [MC-279947](https://bugs.mojang.com/browse/MC-279947) Snout of the new cow model is offset vertically by 0.1 pixels
-   [MC-280022](https://bugs.mojang.com/browse/MC-280022) Players can be lit by lava while stepping onto solid blocks next to it
-   [MC-280033](https://bugs.mojang.com/browse/MC-280033) Beacon beams render beyond client render distance
-   [MC-280121](https://bugs.mojang.com/browse/MC-280121) Leaf litter can be placed on walls and fences
-   [MC-280123](https://bugs.mojang.com/browse/MC-280123) Short dry grass and tall dry grass aren't randomly offset, unlike similar blocks
-   [MC-280155](https://bugs.mojang.com/browse/MC-280155) Random ticks can cause entity build-up in lazy chunks
-   [MC-280170](https://bugs.mojang.com/browse/MC-280170) Goats can no longer ram armor stands unless the game rule mobGriefing is set to false
-   [MC-280211](https://bugs.mojang.com/browse/MC-280211) End crystal beams cause OpenGL errors with glDebugVerbosity set to 3

---

We're adding some new, fun and cute features in this week's snapshot. Spawn eggs just got cuter with new textures looking more like the mobs they spawn. Wolves are becoming even more unique with their own individual sounds. When a wolf spawns, it will get one of seven personalities, unrelated to their variant or biome. From cute to grumpy, each wolf will bark, growl, pant, whine, and express themselves in their own unique way. To top it all off, leaf litter will now look even better with new colors and we have made some tweaks to what color of sheep spawns in different biomes.

Have fun exploring!

## New Features

-   Added new sound variants for Wolves
-   Overhauled the visuals of each Spawn Egg to improve readability and accessibility

### Farm Animal variants

#### Sheep wool color in warm and cold biomes

-   Reverted the change from last week that allowed Blue, Light Blue, Cyan, Yellow, Orange and Red Sheep to spawn naturally in different biomes
-   Black Sheep will still be the most common type to spawn in cold biomes, and Brown Sheep will be the most common type in warm biomes
-   Pink Sheep will still be very rare and able to spawn anywhere where Sheep can spawn
-   Uncommon Sheep colors in Cold Biomes are gray, light gray, white and brown
-   Uncommon Sheep colors in Warm Biomes are gray, light gray, white and black

### Leaf Litter

-   Leaf Litter is tinted based on which biome it's in

### Spawn Egg visuals overhaul

-   Each Spawn Egg now has their own unique visual which captures the personality and character of the mob it spawns
-   Each egg visual varies in shape to reflect the in-world size of the mob it spawns
    -   For example, smaller mobs tend to have a smaller Spawn Egg

### Wolf Sounds Variants

-   Added 6 new Wolf sound variants with unique ambient, hurt, death, growl, whine, and pant sounds
    -   The new sounds are part of variants that are called `big`, `cute`, `puglin`, `angry`, `grumpy` and `sad`
    -   The original Wolf sounds now are used for the variant called `classic`
    -   Every Wolf will have a random sound variant assigned to it from the 6 new variants and the original one
    -   The sound variant is not related to the texture variant

## Changes

-   Sheep's wool undercoat is now also colored when dyed, matching existing behaviour in Bedrock Edition
-   Sheep can now eat Fern blocks to match Bedrock Edition

## Technical Changes

-   The Data Pack version is now 68
-   The Resource Pack version is now 53

## Data Pack Version 68

-   Added data driven sound variants for Wolves
-   Biome effects has a new field `dry_foliage_color` that defines the color used for tinting blocks using dry foliage tinting

### Wolf Sound Variants

-   Wolf sound variants can be data-driven by adding entries to `data/<namespace>/wolf_sound_variant/<id>.json`
-   The file contains the following fields which correspond to sound events to use for the specific behaviour:
    -   `ambient_sound`
    -   `death_sound`
    -   `growl_sound`
    -   `hurt_sound`
    -   `pant_sound`
    -   `whine_sound`

### Item Components

#### `blocks_attacks` component

-   If the blocked damage has no position, the compared angle will be assumed to be the maximum `180` for `horizontal_blocking_angle` field of `damage_reductions`

#### Entity components

-   New component
    -   `wolf/sound_variant` - namespaced id from `wolf_sound_variant` registry

## Resource Pack Version 53

-   Added possibility to tint blocks based on a dry foliage color map
-   Updated textures for Spawn Eggs
-   New and updated sounds for Wolf sound variants
-   Added colormap texture for tinting dry foliage tinted blocks
-   Name of `sheep_fur` texture has been renamed to `sheep_wool`
-   Sheep now has a separate texture for its wool undercoat, which is dynamically recolored in-game
    -   The name of this undercoat texture is `sheep_wool_undercoat`

### Updated textures for Spawn Eggs

-   New textures have been added for all Spawn Eggs
-   Removed `spawn_egg.png` and `spawn_egg_overlay.png`

### Equipment Assets

-   Equipment layers configured to be dyeable will now show if the `dyed_color` component is present on the item, even if the item is not in the `#dyeable` tag

### New and updated Wolf sound variants

-   Sound files for the classic Wolf sounds have been moved into `classic` folder for the Wolf sound files
-   Removed unused `howl` sound
-   Added sounds for the new Wolf sound variants: `big`, `cute`, `puglin`, `angry`, `grumpy` and `sad`

## Fixed bugs in 25w08a

-   [MC-177522](https://bugs.mojang.com/browse/MC-177522) Wolf barking and whining sounds are subtitled as "Wolf pants"
-   [MC-280182](https://bugs.mojang.com/browse/MC-280182) Shields can block some environmental damage sources
-   [MC-280230](https://bugs.mojang.com/browse/MC-280230) DeathLootTable field is incorrectly named DeathLoothTable

---

Frogday on a Thursday, who thinks of that?! In this week's snapshot we are updating trades for wandering traders and cartographers. We have also introduced new, biome-based spawn rules for sheep. It's time to go out and explore the world! Mojang's bug-tracker Mojira is migrating to the cloud and during the process bug reporting is unavailable. The new platform will soon be up and running, ready for players to log in, create accounts, and most importantly – report bugs! During the downtime, try to keep the bug alive and report it once Mojira is back!

## New Features

-   Sheep have different rules for which wool color to have based on biome they spawn in

### Farm Animal variants

#### Sheep wool color in warm and cold biomes

-   Sheep have updated rules for which color of wool they have based on which biome they spawn in:
    -   Temperate Biomes: (these colors are unchanged from current behavior)
        -   Common sheep color is white
        -   Uncommon sheep colors are black, gray, light gray and brown
        -   There is a rare chance for a pink Sheep to spawn
    -   Cold biomes:
        -   Common Sheep color is black
        -   Uncommon Sheep colors are light gray, light blue, blue and cyan
        -   There is a rare chance for a pink Sheep to spawn
    -   Warm Biomes:
        -   Common Sheep color is brown
        -   Uncommon Sheep colors are gray, yellow, orange and red
        -   There is a rare chance for a pink Sheep to spawn

## Changes

-   A Bush only drops when broken with Shears or a Silk Touch tool and is replaceable when building
-   The look of both Mooshroom variants have been slightly updated to have an extruded snout
-   Ambient block sounds in Desert, Badlands and Pale Garden which are only used for ambience have been moved from "Blocks" to "Ambient/Environment" category
-   Cartographer and Wandering Trader has tweaks to their trades
-   Camels now spawn in Deserts
-   Bundles can now be found in some of the chests in villages
-   The breaking sound for grass sound type has been lowered affecting all blocks using this sound

### Cartographer and Wandering Trader Trade Rebalance

## Cartographer Trades

-   Cartographers now sell 7 new maps each pointing to a different village or other structures in a different biome. These maps can help players who want to quickly find a specific location
-   Cartographers from different village types will sell a different range of maps and colored banners
-   Some prices and quantities have also been adjusted

![Cartographers now sell maps to structures in different biomes (villages in Desert, Plains, Savanna, Snowy Plains or Taiga, the Swamp Hut in a Swamp or the Jungle Temple in a Jungle). Cartographers in different biomes will have a different selection of these maps, available at Apprentice level. The previously existing maps to Trial Chambers and Ocean Monuments are available at Journeyman level. Colored banners are sold at Expert level and the range is different in different biomes. A Woodland Mansion map is guaranteed at Master level along with the globe banner pattern.](https://launchercontent.mojang.com/v2/images/25w07acartographertrades.jpg)

[Click here](https://minecraftnetassets.z13.web.core.windows.net/minecraft-net-assets-container/25w07a_cartographer_trades.png) for a link to the high-resolution image

## Wandering Trader Trades

-   The Wandering Trader now has better prices, more trades and a larger amount of stock for many items
-   They will also now buy basic supplies from players, so it's possible to get some emeralds by helping them prepare for their next journey even if you don't feel like buying anything
-   The Wandering Trader will offer to buy two items from this list:
    -   Water Bottle
    -   Water Bucket
    -   Milk Bucket
    -   Fermented Spider Eye
    -   Baked Potato
    -   Hay Bale
-   Wandering Traders now have a chance of selling these items (in addition to their previous trades):
    -   Logs (Acacia, Birch, Dark Oak, Jungle, Oak, Spruce, Pale Oak or Cherry)
    -   Enchanted Iron Pickaxe
    -   Potion of Invisibility

![Each Wandering Trader has two buying trades (buying Water Bottle, Water Bucket, Milk Bucket, Spider Eye, 4 Baked Potatoes or a Hay Bale) which give emeralds in return. They also have two 'special offers' where they sell Ice, Gunpowder, an Enchanted Pickaxe or any type of Logs, and five normal offers which are similar to the trades they had before this update.](https://launchercontent.mojang.com/v2/images/25w07awanderingtradertrades.jpg)

[Click here](https://minecraftnetassets.z13.web.core.windows.net/minecraft-net-assets-container/25w07a_wandering_trader_trades.png) for a link to the high-resolution image

### Sound for Leaf Litter and Grass

-   Lowered volume in sound files for Leaf Litter (break, step, place)
-   Lowered volume in sound files for grass sound type, affecting all blocks using this (dig)

## Technical Changes

-   The Data Pack version is now 67
-   The Resource Pack version is now 52

## Data Pack Version 67

-   Changed so that `stepping_on` entity predicate can only evaluate to true if the entity is on ground

## Tags

#### Block Tags

-   Added `#camels_spawnable_on` - blocks that Camels can spawn on

#### Structure Tags

-   Added `#on_savanna_village_maps` - structures that can appear on Savanna Village Maps
-   Added `#on_desert_village_maps` - structures that can appear on Desert Village Maps
-   Added `#on_plains_village_maps` - structures that can appear on Plains Village Maps
-   Added `#on_taiga_village_maps` - structures that can appear on Taiga Village Maps
-   Added `#on_snowy_village_maps` - structures that can appear on Snowy Village Maps
-   Added `#on_swamp_explorer_maps` - structures that can appear on Swamp Explorer Maps
-   Added `#on_jungle_explorer_maps` - structures that can appear on Jungle Explorer Maps

### Entity Data

-   `Pos`, `Motion`, and `Rotation` values without the correct number of components (3, 3, and 2 respectively) will now be fully discarded, instead of only selecting the specified components
-   The `SleepingX`, `SleepingY`, and `SleepingZ` fields have been collected into a single `sleeping_pos` field
    -   e.g. `sleeping_pos: [I;1,2,3]`
-   Block States in the entity data of Arrows, Minecarts, Block Displays, Endermen, Falling Blocks, Primed TNT, or Piston Moving Blocks are no longer allowed to be specified as an empty object
-   The `Tags` field will no longer be preserved if removed

#### `allay`

-   Removed redundant `CanDuplicate` field (controlled by `DuplicationCooldown`)

#### `cat`

-   The `CollarColor` field now defaults to `14` (red) if not specified

#### `dolphin`

-   Removed `TreasurePosX`, `TreasurePosY`, `TreasurePosZ` fields

#### `falling_block`

-   The `BlockState` field can now be `air` (will despawn immediately) - if otherwise not specified or invalid, defaults to `sand`

#### `fox`

-   The `Trusted` field now defaults to empty if not specified (and will no longer be merged with the previous state if modified by `/data`)

#### `item`

-   The `Owner` and `Thrower` fields will no longer be preserved when removed

#### `phantom`

-   The `Size` field has been renamed to `size`
-   The `AX`, `AY`, and `AZ` fields have been collected into a single `anchor_pos` field

#### `player`

-   The `SpawnX`, `SpawnY`, `SpawnZ`, `SpawnAngle`, `SpawnDimension`, and `SpawnForced` fields have been collected into a single `respawn` field
    -   Format: object with fields
        -   `pos` - block position to spawn at
        -   `angle` - float, angle to spawn with (default: `0.0`)
        -   `dimension` - dimension id to spawn in (default `minecraft:overworld`)
        -   `forced` - boolean, true if this spawn was set through commands (default: `false`)
-   The `enteredNetherPosition` field has been renamed to `entered_nether_pos`, and is now formatted as a list of doubles
    -   e.g. `entered_nether_pos: [1.0, 2.0, 3.0]`

#### `primed_tnt`

-   The `block_state` field now defaults to `tnt` if not specified

#### `shulker_bullet`

-   The `Dir` and `Target` fields will no longer be preserved when removed

#### `turtle`

-   The `HomePosX`, `HomePosY`, and `HomePosZ` fields have been collected into a single `home_pos` field
-   Removed `TravelPosX`, `TravelPosY`, and `TravelPosZ` fields
-   The `HasEgg` field has been renamed to `has_egg`

#### `vex`

-   The `LifeTicks` field has been renamed to `life_ticks`
-   The `BoundX`, `BoundY`, and `BoundZ` fields have been collected into a single `bound_pos` field

#### `villager`

-   The `Gossips` field will no longer be preserved when removed

#### `wandering_trader`

-   The `wander_target` field will no longer be preserved when removed

#### `wolf`

-   The `CollarColor` field now defaults to `14` (red) if not specified

#### `zombie_villager`

-   The `Gossips` field will no longer be preserved when removed

#### `evoker_fangs`, `area_effect_cloud`, and all projectiles

-   The `Owner` field will no longer be preserved when removed

#### `item_frame`, `glow_item_frame`, `painting`, and `leash_knot`

-   The `TileX`, `TileY`, and `TileZ` fields have been collected into a single `block_pos` field

#### `arrow`, `spectral_arrow`, `trident`

-   The `inBlockState` and `SoundEvent` fields will no longer be preserved when removed

#### `minecart`, `*_minecart`

-   The `CustomDisplayTile` field has been removed
-   `DisplayState` will now always override the default displayed block state if specified
-   `DisplayOffset` may now be specified to override the default offset even without a custom display block state set

#### `block_display`, `item_display`, and `text_display`

-   The `glow_color_override` field will no longer be preserved when removed

#### `witch`, `ravager`, `pillager`, `illusioner`, `evoker`, and `vindicator`

-   The `patrol_target` field will no longer be preserved when removed

### Block Entity Data

-   The `CustomName` field will no longer be preserved when removed
-   The `LootTable` field will no longer be preserved when removed

#### `end_gateway`

-   The `exit_portal` field will no longer be preserved when removed

#### `furnace`, `smoker`, `blast_furnace`

-   The `RecipesUsed` field will no longer be preserved when removed

#### `skull`

-   The `note_block_sound` field will no longer be preserved when removed

## Resource Pack Version 52

-   Small changes in rendering of items in world

### Updated Mooshroom texture and model

-   The Mooshroom have updated model and texture
    -   Model now has a snout
    -   Model now has its legs mirrored

### Shaders & Post-process Effects

> **Developer's Note**: _Although it is possible in Resource Packs, overriding Core Shaders is considered as unsupported and not an intended Resource Pack feature. These shaders exist as part of the internal implementation of the game, and as such, may change at any time as the game's internals evolve. We understand that overriding Core Shaders is used for very cool Resource Pack features, many of which lack supported alternatives. We would like to provide better, supported alternatives in the future._

-   Shader program definitions for core shaders and post-processing effects as JSON files have been removed
-   The shader programs themselves are still available and can be overridden
-   The post-processing effects are still configurable as JSON

#### Post-process Effect Definitions

-   The field `program` was replaced with `vertex_shader` and `fragment_shader`
    -   `<namespace>:<path>` will resolve to `assets/<namespace>/shaders/<path>.<vsh|fsh>`
-   `type` is now a required field for each `uniform`
    -   Possible values are currently `int`, `ivec3`, `float`, `vec2`, `vec3`, `vec4`, `matrix4`
-   `values` in each `uniform` is now optional
    -   Leaving it unset is not recommended and is used for runtime configuration of the blur effect
-   Leaving a uniform unspecified results in undefined behavior, you must specify each one that will be used by the shaders

### Item rendering

#### Item Display

-   `firstperson_lefthand` and `thirdperson_lefthand` transforms are now rendered the same as when held in hand

#### Item Entity

-   When on ground, model size is now taken into account when determining hovering motion
    -   That means that models should never clip into the block below, no matter what size they are
-   Positioning of items in an item stack on ground now depends on model size and model type
    -   If model depth (Z coordinate) is below 1/16th of a block, item is rendered as flat stack of items
    -   Otherwise model is rendered as a cluster of items offset in all directions around center
    -   Previously, flat stack rendering happened only for models with `builtin/generated` parent

## Fixed bugs in 25w07a

> **Developer's Note**: _Since our bugtracker is currently down due to the migration at the time of publishing this article, the links to bugs will not work temporarily._

-   [MC-122840](https://bugs.mojang.com/browse/MC-122840) "/data remove" cannot delete beam;;_;;target tag in End Crystals
-   [MC-152382](https://bugs.mojang.com/browse/MC-152382) End gateways and end portals don't fade away with render distance fog
-   [MC-153392](https://bugs.mojang.com/browse/MC-153392) Unable to remove villager gossips using /data remove
-   [MC-220091](https://bugs.mojang.com/browse/MC-220091) Summoning falling;;_;;block entities with BlockState NBT set to any air block (air, cave;;_;;air, void;;_;;air) default to sand
-   [MC-230445](https://bugs.mojang.com/browse/MC-230445) End portals and end gateways are not rendered properly with the Blindness or Darkness effects
-   [MC-279196](https://bugs.mojang.com/browse/MC-279196) Block loot tables cannot be removed with /data remove
-   [MC-279364](https://bugs.mojang.com/browse/MC-279364) CustomName cannot be removed from block entities
-   [MC-279434](https://bugs.mojang.com/browse/MC-279434) Standing on powder snow and fire at the same time spams the fire extinguish sound
-   [MC-279472](https://bugs.mojang.com/browse/MC-279472) Void appears lower & more faded than before
-   [MC-279572](https://bugs.mojang.com/browse/MC-279572) End portals and end gateways aren't affected by water, lava or powder snow fog
-   [MC-279598](https://bugs.mojang.com/browse/MC-279598) Parts of test structures sometimes remain after running /test clearall
-   [MC-279637](https://bugs.mojang.com/browse/MC-279637) Game crashes when /test verify-ing a test instance with max;;_;;attempts greater than 1
-   [MC-279711](https://bugs.mojang.com/browse/MC-279711) Test instance block "Entities" flips when closing UI
-   [MC-279913](https://bugs.mojang.com/browse/MC-279913) Mooshroom snout no longer matches cows
-   [MC-279921](https://bugs.mojang.com/browse/MC-279921) The "Light as a Rabbit" advancement is granted even when the player sinks in powder snow
-   [MC-279934](https://bugs.mojang.com/browse/MC-279934) block.sand.idle and block.sand.wind are not in the Ambient/Environment sound category
-   [MC-279936](https://bugs.mojang.com/browse/MC-279936) The "commands.test.success" raw translation key is displayed when using "/test create..." command
-   [MC-279948](https://bugs.mojang.com/browse/MC-279948) Cold cow variant's horns are not mirrored
-   [MC-279992](https://bugs.mojang.com/browse/MC-279992) Jumping when wearing leather boots and landing on powder snow from some specific heights can cause the player to get stuck in the powder snow
-   [MC-280067](https://bugs.mojang.com/browse/MC-280067) Scaffolding can no longer be placed if the player is intersecting it
-   [MC-280132](https://bugs.mojang.com/browse/MC-280132) Leaf litter generation is inconsistently interrupted by non-grass blocks
-   [MC-280133](https://bugs.mojang.com/browse/MC-280133) The world border produces graphical glitches when moving near it
-   [MC-280134](https://bugs.mojang.com/browse/MC-280134) Sneaking with a Sneaking Speed attribute of 0 causes the game to freeze
-   [MC-280167](https://bugs.mojang.com/browse/MC-280167) Profiling with F3+L outputs many errors to log

---

This week we have been contemplating existential questions like "What came first; the cold chicken or the blue egg?". It's time for the cold chicken and the warm chicken to make their way into snapshot 25w06a together with their respective colorful egg. In addition, pink cactus flowers and dry grass will now decorate deserts and badlands.

## New Features

-   Added Warm and Cold Chicken variants
-   Added Short Dry Grass and Tall Dry Grass
-   Added Cactus Flower block which can grow on Cactus blocks

### Farm Animal variants

-   Warm and cold variants have been added for Chicken
-   Existing Chicken variant has been renamed to temperate
-   The variant is determined by the biome they spawn in
-   Warm and cold biomes are the same for all animals with variants (i.e. Chicken, Pig, Cow)
-   Two new Egg items have been added for the warm and cold Chicken variants
    -   Blue Egg - The Egg that is laid by and can hatch cold Chicken variant
    -   Brown Egg - The Egg that is laid by and can hatch warm Chicken variant
-   Already existing Egg is laid by and can hatch temperate Chicken variant

### Short and Tall Dry Grass

-   Added two new types of grass: Short Dry Grass and Tall Dry Grass
-   Both are one block high, which makes Tall Dry Grass differ from Tall Grass which is two blocks high
-   Both generate in the Desert and Badlands
-   Both can be placed on types of Sand, Terracotta and Dirt blocks like the Dead Bush
-   Both can be bone mealed
    -   Using Bone Meal on Short Dry Grass grows it into a Tall Dry Grass
    -   Using Bone Meal on Tall Dry Grass places a neighbouring Short Dry Grass next to the block if possible
-   Both can be used in the Composter
-   Sheep can eat both to regrow its wool
-   Both can be used as fuel for smelting

### Cactus Flower

-   Cactus Flower is a new type of flower which has a chance of generating on cactuses in Deserts and Badlands
-   Cactus Flower can be placed on Cactus blocks or any block which has center support at the top of the block
-   Cactus Flowers have a chance of growing on Cactus blocks
    -   If a Cactus is one or two blocks high the Cactus Flower has a 10% chance to grow instead of the Cactus getting higher
    -   If a Cactus is three blocks or higher the Cactus Flower has a 25% chance to grow
    -   Cactus Flowers will only grow if they have space on all four sides
-   Cactus Flowers can be used in the Composter
-   A Cactus Flower can be used to craft 1 Pink Dye

## Changes

-   Any block in the simulation distance of a player or loaded by another source of chunk loading (such as Ender Pearls) may now receive random ticks, instead of just 8 chunks around players
    -   For example: if a chunk is loaded by an Ender Pearl or is in the spawn chunks, crops are able to grow, Ice can melt, Snow can fall, and a Cauldron can be filled by rain
    -   Mob spawning, Lava spreading fire, and Lightning strikes still occur in the previous radius of 8 chunks around players
-   Fire will no longer burn or spread if no player is within 8 chunks
-   Tooltips for Fireworks and Crossbows now show a compact form of multiple repeated stars or projectiles that are identical

### Firefly Bush

Conditions for The Firefly Bush playing ambient sounds have changed. It now plays when all of the following conditions are met:

-   it's night
-   Firefly Bush not blocked from above by any collidable block (except Leaves)

## Technical Changes

-   The Data Pack version is now 66
-   The Resource Pack version is now 51

## Data Pack Version 66

-   Added new `allowFireTicksAwayFromPlayer` Game Rule

### Game Rule

#### `allowFireTicksAwayFromPlayer`

-   When true, Fire and Lava ticks can occur ouside of an 8 chunk range of a player
-   Default value: `false`

### Block Tags

-   `#dead_bush_may_place_on` has been renamed to `#dry_vegetation_may_place_on`
-   Added `#edible_for_sheep` - blocks that can be eaten by Sheep to regrow their Wool

### Item Tags

-   Added `#eggs` - all variants of the Egg item

### Entity Data

-   The armor and off-hand equipment of Players is now also stored in the `equipment` field (although items written into the Inventory using armor and off-hand slot numbers still work)

### Chicken Variants

-   Chicken variants can be data-driven by adding entries to `data/<namespace>/chicken_variant/<id>.json`
-   This feature is experimental
-   Fields in file:
    -   `model` - one of: `normal`, `cold`
    -   `asset_id` - namespaced id for this variant asset, resolves to `assets/<namespace>/textures/<path>.png`
    -   `spawn_conditions` - field described in uniform variant selection above

## Resource Pack Version 51

-   New and updated Chicken textures
-   Added textures for new Blue Egg and Brown Egg items
-   Added textures for new Cactus Flower block
-   Added textures for new Short Dry Grass and Tall Dry Grass blocks

### New and updated Chicken textures

-   Added new textures for Chicken variants:
    -   `cold_chicken`
    -   `warm_chicken`
-   Texture `chicken` has been renamed to `temperate_chicken`
-   The `temperate_chicken` texture has been moved to a new folder:
    -   `entity/chicken.png` -> `entity/chicken/temperate_chicken.png`

## Fixed bugs in 25w06a

-   [MC-157196](https://bugs.mojang.com/browse/MC-157196) Tamed animals cannot be added to a team
-   [MC-186241](https://bugs.mojang.com/browse/MC-186241) World border faces are rendered incorrectly with "Fabulous!" graphics
-   [MC-279205](https://bugs.mojang.com/browse/MC-279205) Leaf litter map color is incorrect
-   [MC-279207](https://bugs.mojang.com/browse/MC-279207) Leaf Litter can only be placed on dirt-like blocks
-   [MC-279223](https://bugs.mojang.com/browse/MC-279223) Country Lode Take Me Home Advancement can be completed in the overworld but is still listed as a Nether advancement
-   [MC-279235](https://bugs.mojang.com/browse/MC-279235) Certain farm animals are not spawned as their cold variant in some cold biomes due to an incomplete tag
-   [MC-279242](https://bugs.mojang.com/browse/MC-279242) Kelp, twisting vines, weeping vines, and cave vines can no longer be stacked above or below one another by placing
-   [MC-279261](https://bugs.mojang.com/browse/MC-279261) Making a mob its own owner causes persistent crashes
-   [MC-279279](https://bugs.mojang.com/browse/MC-279279) Dismounting places player in same space as mount
-   [MC-279292](https://bugs.mojang.com/browse/MC-279292) Pigs spawn as temperate in desert villages
-   [MC-279309](https://bugs.mojang.com/browse/MC-279309) Wildflowers item has a misplaced transparent pixel
-   [MC-279464](https://bugs.mojang.com/browse/MC-279464) Fire placed with /setblock doesn't tick/burn out
-   [MC-279719](https://bugs.mojang.com/browse/MC-279719) Tooltip description for saddle attribute modifier slot is not translated
-   [MC-279912](https://bugs.mojang.com/browse/MC-279912) You can use bone meal on bushes in situations where nothing grows
-   [MC-279914](https://bugs.mojang.com/browse/MC-279914) The hitboxes of bushes don't reach the ground and are too wide compared to other similar blocks
-   [MC-279924](https://bugs.mojang.com/browse/MC-279924) Bushes cannot be replaced by trees or mushrooms
-   [MC-279933](https://bugs.mojang.com/browse/MC-279933) Firefly bushes cannot be replaced by trees or mushrooms
-   [MC-279950](https://bugs.mojang.com/browse/MC-279950) Modifying command data storage throws an error
-   [MC-279972](https://bugs.mojang.com/browse/MC-279972) Using /setblock & /fill with fluids of levels at a non-full-block no longer updates the fluid

---

Happy snapshot Wednesday! (You didn't think we were done, did you?) Today's snapshot is filled with new features: Say hello the cold and warm cow variants roaming cold and warm biomes across the Overworld, treat your ears to new ambient desert sounds and spruce up your builds with the bush block and sparkling firefly bush! And of course, we're also bringing you a fresh collection of bug fixes and technical updates. Happy mining!

## New Features

-   Added cold and warm variants for the Cow
-   Added Firefly Bush block
-   Added Bush block
-   Added new ambient block sounds for ambient sounds in Desert and Badlands biomes

### Cow Variants

-   New Cow variants have been added, the variant is determined by the biome they spawn in
-   Temperate variant - The Cow we are all familiar with
    -   Spawns by default where the cold and warm variants do not spawn
-   Cold variant - A variant that spawns in the following biomes:
    -   Old Growth Pine Taiga
    -   Old Growth Spruce Taiga
    -   Taiga
    -   Snowy Taiga
    -   Windswept Hills
    -   Windswept Gravelly Hills
    -   Windswept Forest
-   Warm variant - A variant that spawns in the following biomes:
    -   Savanna
    -   Savanna Plateau
    -   Windswept Savanna
    -   Jungle
    -   Sparse Jungle
    -   Bamboo Jungle
    -   Eroded Badlands
    -   Wooded Badlands
    -   Badlands
-   When bred by a player, a baby Cow variant will not be chosen by the current biome, but instead randomly selected from one of the parents' variants

### Firefly Bush

-   The Firefly Bush is found in Swamps and near Rivers
-   When it's dark, glowing firefly particles appear around the Firefly Bush
-   Using Bone Meal on a Firefly Bush will spawn another Firefly Bush item
-   The Firefly Bush emits light level 2

### Bush

-   The Bush is a new type of decorative block that can be found in small patches in the following biomes:
    -   Plains
    -   Windswept Hills
    -   Windswept Gravelly Hills
    -   Windswept Forest
    -   River
    -   Frozen River
    -   Forest
    -   Birch Forest
    -   Old Growth Birch Forest
-   The Bush can be used in the Composter
-   Using Bone Meal on a Bush places a neighbouring Bush next to the Bush if possible

### New Ambient Sounds for Desert and Badlands

-   Sand, Red Sand and Terracotta of any color have a chance of playing ambient sounds when surrounded by any one of them on at least 3 sides 8 blocks away
    -   `block.sand.idle` can be played in any biome
    -   `block.sand.wind` only plays when in Desert or Badlands biomes
-   Dead Bush blocks have a chance of playing ambient sounds when placed on top of two blocks that are any color of Terracotta, Sand or Red Sand blocks in any biome

## Changes

-   The look of the temperate Cow has been slightly updated to have an extruded snout
-   Beacons and their beams now render beyond 16 chunks up to the client render distance
    -   To keep it easily visible at large distances, the beam is rendered thicker the further away you are
    -   The beam now renders up to 2048 blocks high, up from 1024

## Technical Changes

-   The Data Pack version is now 65
-   The Resource Pack version is now 50

## Data Pack Versions 65

### Commands

-   Text component arguments in `/bossbar`, `/scoreboard` and `/team` commands are now resolved before use in context of entity held in `@s`

### Tags

#### Block Tags

-   Added `#plays_ambient_desert_block_sounds` - blocks that will play ambient desert block sounds

#### Damage Type Tags

-   Renamed `#bypasses_blocking` back to `#bypasses_shield`

### Cow Variants

-   Cow variants can be data-driven by adding entries to `data/<namespace>/cow_variant/<id>.json`
-   This feature is experimental
-   Fields in file:
    -   `model` - one of: `normal`, `cold`, `warm`
    -   `asset_id` - namespaced id for this variant asset, resolves to `assets/<namespace>/textures/<path>.png`
    -   `spawn_conditions` - field described in uniform variant selection above

### Item Components

#### Changes to the `blocks_attacks` component

-   New `bypassed_by` field - hashtagged damage type tag (optional)
    -   If specified, blocking is bypassed by these damage types
-   The objects within the `damage_reductions` list now have a new field:
    -   `horizontal_blocking_angle` - angle in degrees as a positive float (default: `90`)
        -   The maximum angle between the user's facing and the incoming attack for the block to be effective

## Resource Pack Version 50

-   Updated Pig textures
-   New and updated Cow textures
-   Added textures for new Firefly Bush block
-   Added textures for new Bush blocks

### Updated Pig textures

-   Texture `pig` has been renamed to `temperate_pig`

### New and updated Cow textures and model

-   Added new textures for Cow variants:
    -   `cold_cow`
    -   `warm_cow`
-   Texture `cow` has been renamed to `temperate_cow`
-   Changed the size of `temperate_cow` texture
-   Changed the size of `red_mooshroom` and `brown_mooshroom` textures
-   The temperate Cow has an updated model and texture
    -   Cow models now have a snout
    -   Cow models now have their legs mirrored

## Fixed bugs in 25w05a

-   [MC-108495](https://bugs.mojang.com/browse/MC-108495) Non-LivingBase entities can be on a team (and show color) but can't be targeted using team=
-   [MC-165711](https://bugs.mojang.com/browse/MC-165711) Eye of ender hitbox always lags behind the animation
-   [MC-279257](https://bugs.mojang.com/browse/MC-279257) crafting;;_;;transmute recipes don't give output if the resulting item has the same ID as the input item
-   [MC-279280](https://bugs.mojang.com/browse/MC-279280) windswept;;_;;hills is in both the warm and cold variant farm animal biome tags
-   [MC-279315](https://bugs.mojang.com/browse/MC-279315) Warm pigs do not spawn in windswept savannas
-   [MC-279353](https://bugs.mojang.com/browse/MC-279353) The minecraft:fall;;_;;damage;;_;;multiplier attribute doesn't function when riding specific rideable mobs
-   [MC-279390](https://bugs.mojang.com/browse/MC-279390) Baby zombified piglin helmet clipping
-   [MC-279497](https://bugs.mojang.com/browse/MC-279497) Structure preview outline breaks for max integer-length sizes
-   [MC-279531](https://bugs.mojang.com/browse/MC-279531) GameTest entrypoint doesn't report failures to spawn the structure
-   [MC-279534](https://bugs.mojang.com/browse/MC-279534) Display entities use interpolation duration value for teleport duration
-   [MC-279543](https://bugs.mojang.com/browse/MC-279543) Neutral Mobs don't attack the player back when attacked under certain conditions
-   [MC-279556](https://bugs.mojang.com/browse/MC-279556) The "/execute on attacker" command does not target an entity previously targeted by the "/data" command
-   [MC-279577](https://bugs.mojang.com/browse/MC-279577) Test blocks are restricted to one within a block-based structure
-   [MC-279684](https://bugs.mojang.com/browse/MC-279684) Shield blocking animation no longer plays when blocking an attack
-   [MC-279685](https://bugs.mojang.com/browse/MC-279685) Shields no longer consume durability when blocking attacks
-   [MC-279688](https://bugs.mojang.com/browse/MC-279688) Sprinting is canceled upon flying with elytra
-   [MC-279692](https://bugs.mojang.com/browse/MC-279692) Instrument component crashes the game
-   [MC-279693](https://bugs.mojang.com/browse/MC-279693) Summoned lingering potions render as splash potions
-   [MC-279697](https://bugs.mojang.com/browse/MC-279697) Llamas show a non-interactive saddle slot
-   [MC-279698](https://bugs.mojang.com/browse/MC-279698) provides;;_;;banner;;_;;pattern component does not use hash prefix
-   [MC-279760](https://bugs.mojang.com/browse/MC-279760) Typing an inline definition in the provides;;_;;trim;;_;;material component crashes the game
-   [MC-279857](https://bugs.mojang.com/browse/MC-279857) Piglins summoned by the /summon command do not pick up gold items

---

It's time for another snapshot! To kick things off, we are reverting the fixes for [MC-271065](https://bugs.mojang.com/browse/MC-271065) and [MC-152728](https://bugs.mojang.com/browse/MC-152728).

This week's snapshot also comes with a whole slew of datapack updates, including new components and item model capabilities. If you like to play around with datapacks, you will definitely find something fun in this update!

As always, we're keen to get your feedback on these new features at [feedback.minecraft.net](https://feedback.minecraft.net) and you can report any bugs at [bugs.mojang.com](https://bugs.mojang.com)! Here's what's new this week:

## New Features

-   Added language support for Kyrgyz

## Changes

-   Reverted fixes:
    
    -   [MC-271065](https://bugs.mojang.com/browse/MC-271065) - Diagonal movement is not normalized when crouching or using certain items
    -   [MC-152728](https://bugs.mojang.com/browse/MC-152728) - The player continues sprinting when performing actions that slow them down
    
    > **Developer's Note**: _After consideration, we have decided to revert both fixed bugs. While we do want to revisit these mechanics in the future, it's clear that these recent fixes alone didn't quite hit the mark and caused too many negative side-effects for parkour, speedbridging, and movement in general_
    
-   Crossbows will now show all charged projectiles in their tooltip instead of just the first
    -   All charged projectiles will also add their entire tooltip as a subsection, instead of only Fireworks
-   All container items with stored contents, such as a Chest picked with Ctrl+Pick Block, will now list the first 4 items in their tooltip just like Shulker Boxes

## Technical Changes

-   The Data Pack version is now 64
-   The Resource Pack version is now 49

## Data Pack Versions 64

-   The `potion` entity type has been split into `splash_potion` and `lingering_potion`
-   Filled Maps without any `map_id` component no longer show an 'Unknown Map' tooltip (invalid IDs will still produce this tooltip)
-   Trim pattern and trim material items are no longer specified in the trim registries, but instead in the recipes and items respectively
-   Field `background` in advancement definition no longer contains `textures/` prefix and `.png` suffix
-   Changes to entity variant definitions
    -   Cat and Frog variants are now data-driven
    -   Added uniform way to define variant selection rules

### Commands

-   SNBT literals now accept heterogenous lists

### SNBT changes

-   SNBT (textual representation of NBT-like data) has been expanded to accept heterogenous lists, i.e. ones where elements are not of the same type
-   NBT format is not changed
    -   If SNBT command argument transforms value to NBT (like arguments of `/data` or `/summon`), lists might be transformed to bypass NBT constraints
    -   Example transform: `['a', {'b':3}]` is stored as `[{'':'a'},{'b':3}]`
    -   This transform is not reversed by `/data`

> **Developer's Note**: _Internally, in new code we read and write data in both JSON and NBT formats. This change makes sure that we don't have to worry about NBT limitations when it comes to lists. We have chosen to not expand NBT itself to avoid breaking existing external tools._

### Tags

#### Entity Tags

-   Added `#can_wear_horse_armor` - entity that can hold horse armor in their body slot

#### Damage Type Tags

-   Renamed `#bypasses_shield` to `#bypasses_blocking`

#### Cat Variant Tags

-   Removed `#default_spawns` and `#full_moon_spawns`

### Uniform variant selection

-   Variants that have spawn rules now use uniform approach for selecting
-   Selection process:
    -   Every variant field `spawn_conditions` that contain a list of entries
    -   Every entry has a condition and an integer priority
    -   Conditions for all variants for given entity type are evaluated for position where entity is being spawned
    -   Entries with priority lower than maximum priority of remaining entries are removed
    -   Game randomly picks one entry out of remaining ones
    -   If no conditions are remaining, variant remains unchanged from default
-   Entry format:
    -   `priority` - integer
    -   `condition` - optional structure
        -   Fields:
            -   `type` - see below for values
            -   Additional fields dependent on `type`
        -   If field is not present, condition is always true

#### Spawn conditions

##### `minecraft:biome`

-   Checks if entity is spawning in specific biomes
-   Fields:
    -   `biomes` - single entry, list or a tag describing biomes

##### `minecraft:moon_brightness`

-   Checks if current moon brightness is within certain range
-   Fields:
    -   `range` - floating point range (a single number or an object like `{"min": 1, "max": 2}`)

##### `minecraft:structures`

-   Checks if entity is spawning in specific structures
-   Fields:
    -   `structures` - single entry, list or a tag describing structures

### Wolf Variants

-   Fields `angry_texture`, `tame_texture` and `wild_texture` have been grouped in field `assets` and renamed to `angry`, `tame` and `wild`
-   Added field `spawn_conditions` described in uniform variant selection above

### Pig Variants

-   `texture` and `biome` fields are replaced with `asset_id` and `spawn_conditions` respectively.
-   Fields in file:
    -   `asset_id` - namespaced id for this variant asset, resolves to `assets/<namespace>/textures/<path>.png`
    -   `spawn_conditions` - field described in uniform variant selection above

### Cat variants

-   Cat variants can be data-driven by adding entries to `data/<namespace>/cat_variant/<id>.json`
-   This feature is experimental
-   Fields in file:
    -   `asset_id` - namespaced id for this variant asset, resolves to `assets/<namespace>/textures/<path>.png`
    -   `spawn_conditions` - field described in uniform variant selection above

### Frog variants

-   Frog variants can be data-driven by adding entries to `data/<namespace>/frog_variant/<id>.json`
-   This feature is experimental
-   Fields in file:
    -   `asset_id` - namespaced id for this variant asset, resolves to `assets/<namespace>/textures/<path>.png`
    -   `spawn_conditions` - field described in uniform variant selection above

### Item Components

#### New `weapon` component

-   `can_disable_blocking` field is replaced with `disable_blocking_for_seconds`
    -   `disable_blocking_for_seconds` - non-negative float (default: `0`)
        -   If non-zero, will disable a blocking Shield on successful attack for the specified amount of seconds

#### New `blocks_attacks` component

-   When present, this item can be used like a Shield to block attacks to the holding player
-   Format: object with fields:
    -   `block_delay_seconds` - non-negative float (default: `0`)
        -   The number of seconds that right-click must be held before successfully blocking attacks
    -   `disable_cooldown_scale` - non-negative float (default: `1`)
        -   Multiplier applied to the number of seconds that the item will be on cooldown for when attacked by a disabling attack (`disable_blocking_for_seconds` on the `weapon` component)
        -   If 0, this item can never be disabled by attacks
    -   `damage_reductions` - list of object with fields (optional)
        -   Controls how much damage should be blocked in a given attack
        -   If not specified, all damage is blocked
        -   Each entry in the list contributes an amount of damage to be blocked, optionally filtered by damage type
        -   Each entry adds to blocked damage, determined by `clamp(base + factor * dealt_damage, 0, dealt_damage)`
        -   The final damage applied in the attack to the entity is determined by `dealt_damage - clamp(blocked_damage, 0, dealt_damage)`
        -   Entry format:
            -   `type` - damage type id, list of damage type ids, or hash-prefixed damage type tag (optional)
                -   This entry will only contribute to the blocked damage if the dealt damage type matches this field
                -   If not specified, any damage type will be accepted
            -   `base` - float
                -   Constant amount of damage to be blocked
            -   `factor` - float
                -   Fraction of the dealt damage that should be blocked
    -   `item_damage` - object with fields (optional)
        -   Controls how much damage should be applied to the item from a given attack
        -   If not specified, a point of durability is removed for every point of damage dealt
        -   The final damage applied to the item is determined by: `floor(base + factor * dealt_damage)`
        -   The final value may be negative, causing the item to be repaired
        -   Format:
            -   `threshold` - non-negative float
                -   The minimum amount of damage dealt by the attack before item damage is applied to the item
            -   `base` - float
                -   Constant amount of damage applied to the item, if `threshold` is passed
            -   `factor` - float
                -   Fraction of the dealt damage that should be applied to the item, if `threshold` is passed
    -   `block_sound` - sound event (optional)
        -   If specified, this sound will be played when an attack is successfully blocked
    -   `disable_sound` - sound event (optional)
        -   If specified, this sound will be played when the item goes on its disabled cooldown due to an attack

#### New `break_sound` component

-   When present, this sound will be played when the item runs out of durability and breaks
-   If not present, no sound will be played on break
-   This component is present by default on every item type
-   Format: sound event
    -   e.g. `break_sound='item.wolf_armor.break'`

#### New `provides_banner_patterns` component

-   When present, this item can be placed in the pattern slot of a Loom
-   Format: hash-prefixed banner pattern tag
    -   e.g. `provides_banner_patterns='#minecraft:pattern_item/globe'`

#### New `provides_trim_material` component

-   When present, this item will provide the specified trim material when used in a trimming recipe
-   Note that to be used in the built-in smithing recipes, the item must also be in the `#trim_material` tag
-   As such, the trim material registry definition no longer specifies an item
-   Format: trim material id
    -   e.g. `provides_trim_material='minecraft:iron'`

#### Entity components

-   Some existing components are now also transferred from spawning item to spawned entity:
    -   `minecraft:custom_name` - any entity
    -   `minecraft:potion_contents` - Lingering Potion to Area Effect Cloud
    -   `minecraft:potion_duration_scale` - Lingering Potion to Area Effect Cloud

#### New `tooltip_display` component

-   This component allows the tooltips provided specifically by any given item component to be surpressed
-   This replaces the previous `show_in_tooltip` fields, `hide_additional_tooltip` and `hide_tooltip` components
-   Format: object with fields:
    -   `hide_tooltip` - boolean (default: `false`)
        -   If true, the item will have no tooltip when hovered
    -   `hidden_components` - list of item component ids (default: `[]`)
        -   The tooltips provided by any component in this list will be hidden
        -   If that component provides no tooltip, it will have no effect

#### Removed `hide_additional_tooltip` Component

-   Replaced by use of the `tooltip_display` component and `hidden_components` field
-   The following components previously covered by the `hide_additional_tooltip` component may need to be hidden:
    -   `minecraft:banner_patterns`
    -   `minecraft:bees`
    -   `minecraft:block_entity_data`
        -   Specifically, Mob Spawner and Trial Spawner block entity data will display the configured mob
    -   `minecraft:block_state`
        -   Specifically, the `honey_level` property will be displayed in the tooltip for any item with this specified
    -   `minecraft:bundle_contents`
    -   `minecraft:charged_projectiles`
    -   `minecraft:container`
    -   `minecraft:container_loot`
    -   `minecraft:firework_explosion`
    -   `minecraft:fireworks`
    -   `minecraft:instrument`
    -   `minecraft:map_id`
    -   `minecraft:painting/variant`
    -   `minecraft:pot_decorations`
    -   `minecraft:potion_contents`
    -   `minecraft:tropical_fish/pattern`
    -   `minecraft:written_book_content`
-   This additionally means that tooltips from the above listed components are no longer restricted to specific item types
-   Note: for existing items in a world with the `hide_additional_tooltip` component, any of the above listed components also present on the same item will be added to the list to hide in `tooltip_display`

#### Removed `hide_tooltip` Component

-   Replaced by use of the `tooltip_display` component and `hide_tooltip` field

#### `attribute_modifiers` Component

-   Removed `show_in_tooltip` field, replaced by `tooltip_display` component
-   This component now always uses its simplified form, with the `modifiers` field inlined to top-level
    -   e.g. `attribute_modifiers={modifiers:[...]}` -> `attributes_modifiers=[...]`

#### `dyed_color` Component

-   Removed `show_in_tooltip` field, replaced by `tooltip_display` component
-   This component now always uses its simplified form, with the `rgb` field inlined to top-level
    -   e.g. `dyed_color={rgb:12345}` -> `dyed_color=12345`
-   The specified color now supports the RGB array format
    -   e.g. `dyed_color=[0.5, 1.0, 0.2]`

#### `can_place_on` and `can_break` Components

-   Removed `show_in_tooltip` field, replaced by `tooltip_display` component
-   The `predicates` field has been inlined to top-level, and supports either a single element or list
    -   e.g. `can_place_on={predicates:[{blocks:'stone'},{blocks:'dirt'}]}` -> `can_place_on=[{blocks:'stone'},{blocks:'dirt'}]`
    -   or: `can_place_on={predicates:[{blocks:'stone'}]}` -> `can_place_on={blocks:'stone'}`

#### `enchantments` and `stored_enchantments` Components

-   Removed `show_in_tooltip` field, replaced by `tooltip_display` component
-   These components now always use their simplified form, with the `levels` field inlined to top-level
    -   e.g. `enchantments={levels:{sharpness:2}}` -> `enchantments={sharpness:2}`

#### `jukebox_playable` Component

-   Removed `show_in_tooltip` field, replaced by `tooltip_display` component

#### `trim` Component

-   Removed `show_in_tooltip` field, replaced by `tooltip_display` component

#### `unbreakable` Component

-   Removed `show_in_tooltip` field, replaced by `tooltip_display` component

### Particles

-   The particle type `tinted_leaves` now has a parameter:
    -   `color`: Tint color, specified either as packed int or list of 4 floats

### Recipes

#### `smithing_transform` Recipe Type

-   The `base` ingredient field is no longer optional
    -   Previously, if no base ingredient was given, the recipe would parse but never be useable

#### `smihing_trim` Recipe Type

-   The `base`, `template`, and `addition` ingredient fields are no longer optional
    -   Previously, if these ingredients were not given, the recipe would parse but never be useable
-   Added new `pattern` field, controlling which trim pattern will be applied in the recipe
    -   As such, the trim pattern registry definition no longer specifies the item
    -   Format: trim pattern id
    -   e.g. `"pattern": "minecraft:bolt"`

### Trim Patterns and Trim Materials

-   The registry definitions for trim patterns and trim materials no longer include an `item` field
-   Instead, this mapping in patterns and materials is defined by the recipe and item components respectively

### Loot Functions

#### `toggle_tooltips`

-   Now supports any component id in the `toggles` map
-   Any component specified will be toggled in the `tooltip_display` component

## Resource Pack Version 49

### Item Models

#### `minecraft:component` Select Property

-   If the selected value comes from a registry and the current datapacks does not provide it, the entry will be silently ignored
-   In previous snapshot, unrecognized elements caused the whole item model to be ignored

#### `minecraft:component` Boolean Property

-   New conditional model property has been added to `condition` item model: `component`
-   Uses component predicates (like ones used in item predicates) to match item components
    -   However, instead of encoding them as a map of `<predicate type>:<predicate value>`, a single predicate is encoded in two fields
-   Fields:
    -   `predicate` - type of component predicate (member of `minecraft:data_component_predicate_type` registry)
    -   `value` - predicate-specific value

### Atlas

#### `minecraft:paletted_permutations` sprite source

-   New field:
    -   `separator` - optional string (default: `_`) - value to be used when joining texture and permutation names to produce sprite name

## Fixed bugs in 25w04a

-   [MC-98271](https://bugs.mojang.com/browse/MC-98271) The sound of blocking with a shield is only hearable by other players (not the person blocking)
-   [MC-165421](https://bugs.mojang.com/browse/MC-165421) Bubble columns have the opposite effect on wind charges
-   [MC-165461](https://bugs.mojang.com/browse/MC-165461) Crossbow loading animation stops after loading, even when still holding down right click
-   [MC-255756](https://bugs.mojang.com/browse/MC-255756) When the shield is broken between players, the attacking side has no shield breaking sound
-   [MC-276061](https://bugs.mojang.com/browse/MC-276061) Decorated pot sherds don't visually update until relog when replacing with blank pot
-   [MC-278400](https://bugs.mojang.com/browse/MC-278400) Arrows and tridents move after hitting a block in flowing lava
-   [MC-279217](https://bugs.mojang.com/browse/MC-279217) Arrows and tridents constantly spin after hitting a block in flowing lava
-   [MC-279218](https://bugs.mojang.com/browse/MC-279218) The minecraft:enchant.thorns.hit sound does not play when mobs or players are killed by the Thorns enchantment
-   [MC-279225](https://bugs.mojang.com/browse/MC-279225) Players jitter and land slightly too high up when landing on powder snow while wearing leather boots
-   [MC-279232](https://bugs.mojang.com/browse/MC-279232) SNBT text components prevent mixing text styles in lists
-   [MC-279389](https://bugs.mojang.com/browse/MC-279389) The minecraft:entity.arrow.hit;;_;;player sound is played when player is hit by an arrow shot by himself
-   [MC-279454](https://bugs.mojang.com/browse/MC-279454) hide;;_;;additional;;_;;tooltip no longer hides author and generation on written books
-   [MC-279480](https://bugs.mojang.com/browse/MC-279480) The "test;;_;;instance;;_;;block.reset;;_;;success" string incorrectly spells the word "succeeded" as "succeded"
-   [MC-279481](https://bugs.mojang.com/browse/MC-279481) Leaf litter no longer generates in forests or wooded badlands
-   [MC-279482](https://bugs.mojang.com/browse/MC-279482) Elements within the test block and test instance block menus are not selected in order when using the TAB key
-   [MC-279483](https://bugs.mojang.com/browse/MC-279483) Test blocks set to start mode show the "Message:" text despite no text field being present
-   [MC-279485](https://bugs.mojang.com/browse/MC-279485) Test block and test instance block menus have blurred backgrounds
-   [MC-279486](https://bugs.mojang.com/browse/MC-279486) Some strings displayed within the test instance block interface are untranslatable
-   [MC-279487](https://bugs.mojang.com/browse/MC-279487) The "Test Instance ID" and "Test Structure Size" text within the test instance block interface are positioned too far to the right
-   [MC-279488](https://bugs.mojang.com/browse/MC-279488) Leaf litter generates very sparsely in Dark Forests
-   [MC-279489](https://bugs.mojang.com/browse/MC-279489) An unexpected error occurs when attempting to create tests with large sizes
-   [MC-279490](https://bugs.mojang.com/browse/MC-279490) No command feedback messages are displayed when attempting to reset tests that don't exist
-   [MC-279491](https://bugs.mojang.com/browse/MC-279491) The "commands.test.no;;_;;tests" raw translation key is displayed when using "/test run..." commands in situations where no tests exist
-   [MC-279492](https://bugs.mojang.com/browse/MC-279492) An unexpected error occurs when attempting to locate tests that don't exist
-   [MC-279493](https://bugs.mojang.com/browse/MC-279493) No command feedback messages are displayed when using the "/test create" command
-   [MC-279498](https://bugs.mojang.com/browse/MC-279498) Test blocks and test instance blocks aren't part of the "#minecraft:dragon;;_;;immune" or "#minecraft:wither;;_;;immune" tags
-   [MC-279502](https://bugs.mojang.com/browse/MC-279502) Axolotl variants are no longer saved when bucketing
-   [MC-279504](https://bugs.mojang.com/browse/MC-279504) "minecraft:enchantments" component does not work on the select property of Item Models
-   [MC-279505](https://bugs.mojang.com/browse/MC-279505) Horse-esque mobs that disallow horse armor still show an non-interactive slot
-   [MC-279511](https://bugs.mojang.com/browse/MC-279511) Using "minecraft:always;;_;;pass" while the player is inside the test zone breaks the world
-   [MC-279518](https://bugs.mojang.com/browse/MC-279518) Test environment accepts minecraft:raining instead of minecraft:weather
-   [MC-279519](https://bugs.mojang.com/browse/MC-279519) Some words within some test command strings are always pluralized
-   [MC-279522](https://bugs.mojang.com/browse/MC-279522) GameTest entrypoint doesn't load zip datapacks
-   [MC-279527](https://bugs.mojang.com/browse/MC-279527) GameTest entrypoint doesn't load custom tests from datapacks
-   [MC-279538](https://bugs.mojang.com/browse/MC-279538) The key name of the test instances field that represents the namespaced ID of the test environment is different from the changelog
-   [MC-279539](https://bugs.mojang.com/browse/MC-279539) Villager variant is not applied to spawned zombie villagers
-   [MC-279553](https://bugs.mojang.com/browse/MC-279553) Players using items no longer turn their body in the moving direction while moving diagonally
-   [MC-279570](https://bugs.mojang.com/browse/MC-279570) Some piston operations don't send neighbor updates
-   [MC-279573](https://bugs.mojang.com/browse/MC-279573) The "test;;_;;instance;;_;;block.error.no;;_;;test" string is missing the word "no"
-   [MC-279588](https://bugs.mojang.com/browse/MC-279588) Test instance field typo 'sky;;_;;accesss'
-   [MC-279599](https://bugs.mojang.com/browse/MC-279599) /test pos is offset by one on the y and z axis
-   [MC-279601](https://bugs.mojang.com/browse/MC-279601) "test.error.expected;;_;;entity;;_;;at;;_;;pos" translation is missing
-   [MC-279646](https://bugs.mojang.com/browse/MC-279646) Toggling fullscreen with F11 does not visually update the fullscreen option in the video settings menu
-   [MC-279653](https://bugs.mojang.com/browse/MC-279653) Block Entity Data desynchronizes after subsequent setblock commands

---

This week's snapshot comes with a huge update to game tests! The game tests system is now accessible through data packs with the new test command. You can now run block based tests with the new test block or set up even more versatile test from code in mods.

Happy testing!

## Changes

-   Leaf Litter can be used in the Composter
-   Saddles equipped onto Pigs or Striders will now maintain properties such as custom name when dropped

## Technical Changes

-   The Data Pack version is now 63
-   The Resource Pack version is now 48
-   New entry point `net.minecraft.gametest.Main` is present in the server jar
    -   Automatically starts a server and runs all available game tests

### Game Test Main

This new entry point automatically starts a server, runs all available game test and then exists.

Options:

-   `--help` - Shows usage information
-   `--packs <path>` - Set a folder of datapacks to include in the world
    -   Any zip file or folder with a `pack.mcmeta` file is included
-   `--report <path>` - Exports results in a junit-like XML report at the given path
-   `--tests <selection>` - Specify which tests to run with a selection - a wildcard expression matching namespace test instance IDs
    -   If omitted, or used with an empty ID, runs all tests
-   `--universe <path>` - The path to where the test server world will be created
    -   Any existing folder will be replaced
    -   Default: `gametestserver`
-   `--verify <boolean>` - Enables test verification
    -   Runs the tests specified with `test` or `testNamespace` 100 times for each 90 degree rotation step
    -   Default: `false`

Example usage: `java -DbundlerMainClass="net.minecraft.gametest.Main" -jar server.jar --packs mytestpacks`

## Data Pack Versions 63

-   The Game Tests system is now accessible through data packs and for mods
-   Entity variants are now set and queried with components
-   Added `saddle` equipment slot, driven by the `equippable` component - Only mobs that normally support saddles will support riding and rendering of the saddle - Items in the `saddle` slot can apply attribute modifiers as with other equipment

### Game Tests

The Game Tests system is a new integrated system for testing aspects of the game. Each test is an asset defining some parameters for how the test gets executed, combined with a saved structure file containing a base setup.

Generally, the test framework expects to run tests in a separate superflat world.

#### Test Instances

Test instances are defined in the registry `test_instance`. They're small assets defining a test to run.

Fields:

-   `environment`: Namespaced ID of the test environment to run this test as part of
-   `structure`: The namespaced ID of the structure to use for the test
-   `max_ticks`: A positive integer representing the maximum number of ticks allowed to pass before the test is considered timed out
-   `setup_ticks`: Optional non-negative integer (default: `0`) representing a number of ticks to wait after placing the structure before starting the test
-   `required`: Optional boolean (default `true`) - whether the test is considered required to pass for the full test suite to pass
-   `rotation`: Optional rotation to apply to the test structure
    -   One of `none` (default), `clockwise_90`, `180` and `counterclockwise_90`
-   `manual_only`: Optional boolean (default `false`), set to `true` for tests that are not included as part of automated test runs
-   `sky_access`: Whether the test needs clear access to the sky
    -   By default (`false`), tests are enclosed in barrier blocks - if set to `true`, the top is left open
-   `max_attempts`: Number of attempts to run the test (default `1`)
-   `required_successes`: Number of attempts that must succeed for the test to be considered successful (default `1`)
-   `type`: The type of test - one of `block_based` and `function`

##### Function Tests

Function tests rely on built-in functions to run a test and indicate success or failure. They have one additional field:

-   `function`: The namespaced ID of the Test Function to run

See the "Using the Game Test Framework from Code" changelog section for more information.

##### Block Based Tests

Block based tests use Test Blocks in the test structure to run the test and indicate success or failure.

#### Test Environments

Test Environments are a way to group up tests and give them the right preconditions to run. A Test Environment is an asset in the `test_environment` registry. Each Test Environment definition has a `type` field that determines its setup:

-   `all_of` definitions apply the setup from several sub-definitions in the `definitions` field
-   `function` definitions use mcfunction files as setup and teardown
    -   `setup`: Optional namespaced ID of the mcfunction to use for setup, if any
    -   `teardown`: Optional namespaced ID of the mcfunction to use for teardown, if any
-   `game_rules`: definitions set any number of game rules
    -   `bool_rules`: A list of boolean game rules to set and the value to set
    -   `int_rules`: A list of integer game rules to set and the value to set
    -   Each rule is an object with two fields:
        -   `rule`: The exact name of the rule to set
        -   `value`: The value to set
    -   Game rules are reset to their default values after the test environment has completed
-   `weather` definitions sets the weather state
    -   `weather`: The weather to set - one of `clear`, `rain` and `thunder`
-   `time_of_day` definitions set a given time of day
    -   `time`: The time of day to set in number of ticks, as a non-negative integer

The game provides a single, empty Test Environment by default: `minecraft:default`.

#### Test Blocks

The Test Block is a block used for implementing a block-based tests. It has four modes:

-   `start`: Triggers a redstone pulse when the test starts
-   `log`: Logs a message to the log file when powered by redstone
-   `fail`: Fails the test when powered by redstone
-   `accept`: Completes the test when powered by redstone

Block-based tests are required to have at least one `start` block and one `accept` block in the structure.

#### The `test` Command

The `test` command is a new command used to create and run tests.

Syntax:

    test clearall [<radius>]
    test clearthat
    test clearthese
    
    test create <test> [<width>] [<height> <depth>]
    
    test locate <selector>
    
    test resetclosest
    test reseetthese
    test resetthat
    
    test pos [<variable>]
    
    test run <selector> [<numberOfTimes>] [<untilFailed>] [<rotationSteps>] [<testsPerRow>]
    test runclosest [<numberOfTimes>] [<untilFailed>]
    test runfailed [<numberOfTimes>] [<untilFailed>] [<rotationSteps>] [<testsPerRow>]
    test runmultiple <selector> [<amount>]
    test runthat [<numberOfTimes>] [<untilFailed>]
    test runthese [<numberOfTimes>] [<untilFailed>]
    
    test stop
    
    test verify <tests>
    

Parameters:

-   `radius`: The radius to clear tests within
-   `test`: The namespaced ID of a test
-   `selector`: A wildcard-enabled selector for test IDs
    -   Supports `*` and `?` for matching namespaced IDs
    -   If namespace is not supplied, defaults to `minecraft`
    -   Examples:
        -   `*:*` - matches all IDs
        -   `*` - matches everything in the `minecraft` namespace
        -   `custom:folder/*_test_?` - matches IDs in the `folder` folder of the `custom` namespace, with a prefix followed by `_test_` followed by a single valid character
-   `width`: The width of the test structure - if omitted, `5` is used
-   `height`: The height of the test structure - if omitted, the width is used
-   `depth`: The depth of the test structure - if omitted, the width is used
-   `variable`: The variable name to include in the copied code snippet
-   `numberOfTimes`: The number of times to repeat each test - if omitted, `1` is ued
-   `untilFailed`: Boolean (default `false`) noting that the test should be stopped as soon as one iteration fails
-   `rotationSteps`: Number of extra 90 degree steps to apply to the test - if omitted, `0` is used
-   `testsPerRow`: Number of tests to place per row in a grid layout - if omitted, `8` is used

##### `test clear*`

These subcommands clear the structures and blocks associated with the selected tests.

##### `test create`

This subcommand creates a test setup in the current location for the given test, preparing for a structure of the given size. This gives a starting point for creating the structure for the test.

##### `test locate`

Attempts to locate the given test. Note that only loaded chunks are searched.

##### `test reset*`

These subcommands reset the structures for the selected tests, removing any surrounding barriers and placing the structure in from scatch.

##### `test pos`

Shows the local coordinates to the block pointed at in the test. If the optional variable name is specified, this variable name is used in a code fragment obtained by clicking on the coordinates in the output message.

##### `test run*`

Runs one or more tests. If multiple tests are run at once, they are placed in a grid and run in parallel, although only up to a certain limit. Beyond that limit, tests are run in rounds where each round completes before any tests from the next round are started.

For each test, loads the given structure and runs the associated test. Each test location will have a beacon beam showcasing the test status.

-   Gray beacon = in progress
-   Red = fail (required test)
-   Orange = fail (optional test)
-   Green = success

If a test fails, the error is shown on a lectern book and an overlay.

Note that Game Tests are designed to run on standard superflat worlds. The area around each test is replaced with stone when it runs, and the running test is encased in barrier blocks.

##### `test stop`

This stops all running tests. Note that gameplay events triggered by tests may still remain.

##### `test verify*`

Verifies one or more tests by running multiple instances of the same test.

#### Test Instance Blocks

To run a test in a world, a Test Instance Block is used. This type of block represents the test as placed in the world and is used to interact with that test, to save the structure, reset or run the test.

Using the `test` command to run or create a test will also place a Test Instance Block to control that test.

#### Using the Game Test Framework from Code

The Game Test Framework can also be used from code in a more versatile manner than block-based tests. For this to work, you need to mod the game to add your test functions to the `test_function` registry (`Registries.TEST_FUNCTION`).

Hook into some startup method (pre-registry bootstrap) to add your loader - call `TestFunctionLoader.registerLoader()` with an implementation of `TestFunctionLoader`. Your implementation can then use the provided `register` consumer to register test functions with their namespaced IDs. This namespaced ID can then be referenced in a `function` type Test Instance.

A test function is a `Consumer<GameTestHelper>`, using that `GameTestHelper` instance to manipulate the world and make assertions about the state of the resulting world.

The helper can be used to summon mobs, set blocks, query for blocks and entities and assert the state of the test. Most `GameTestHelper` methods take test-local coordinates, which you can also find using `/test pos`.

Example code that might go along with a test structure with a locked hopper containing a cod, pointed into a furnace:

    public void furnace_smelts_item(final GameTestHelper helper) {
        helper.setBlock(0, 4, 0, Blocks.AIR);
        helper.succeedWhen(() -> helper.assertContainerContainsSingle(new BlockPos(0, 0, 0), Items.COOKED_COD));
    }
    

More complicated setups will often use `helper.startSequence()` to model sequences of events that must happen.

As opposed to block-based tests, function tests failing will often produce more helpful error messages including the location of whatever failed and what was expected at that location.

### Commands

-   The `horse.saddle` item slot has been renamed to `saddle`, and now supports any entity that can equip a Saddle

### Text Component Data Format

#### Hover Events

-   For the `show_text` action:
    -   `text` field has been renamed to `value`

### Tags

#### Entity Tags

-   Added `#can_equip_saddle` - entities that can be equipped with a Saddle
    -   Note: this does not mean that the Saddle will function, just that it can be equipped into the saddle slot

### Entity Data

-   The `ArmorItems`, `HandItems`, and `body_armor_item` fields have been merged into an `equipment` field
    -   Format: map between equipment slot type and item stack
        -   Valid equipment slots: `head`, `chest`, `legs`, `feet`, `mainhand`, `offhand`, `body`, `saddle`
    -   If not specified or removed, the entity will have no equipment
    -   e.g. `equipment:{chest:{id:'minecraft:diamond_chestplate'}}`
    -   This affects all mobs and Armor Stands, but Players are unaffected
-   The data format of saddles has been unified between mobs such as Horses and Pigs, becoming a new kind of equipment slot (and stored in the `equipment.saddle` field)
    -   This is a pure rename from the previous `SaddleItem` in Horse-like mobs
    -   This also replaces the boolean `Saddle` flag from Pigs and Striders
    -   The Saddle dropping on death is now affected by the `drop_chances` field, as with other equipment slots
-   The `FallDistance` field has been changed from float to double and is now called `fall_distance`

### Item Components

#### `weapon` component

-   `damage_per_attack` field was renamed to `item_damage_per_attack`

#### `equippable` Component

-   Can now apply to `saddle` slot
-   Any mob can now have equipment added in the `body` slot as long as the component allows it (`allowed_entities`)
-   Added new optional field: `equip_on_interaction` (boolean)
    -   If `true`, players can equip this item onto a target mob by right-clicking it (as long as this item can be equipped on the target at all)
    -   The item will not be equipped if the target already has an item in the relevant slot
    -   If not specified, defaults to `false`

#### Entity variant components

-   Entities now have a set of components for configuring variants and other aspects of apperance
-   If those components are present on spawning item (like spawn eggs, mob buckets, `minecraft:painting`, `minecraft:item_frame`), they will be applied to new entity
-   Components are currently not restored when spawn egg is picked from existing entity
-   New components:
    -   `villager/variant` - one of `desert`, `jungle`, `plains`, `savanna`, `snow`, `swamp`, `taiga`
    -   `wolf/variant` - namespaced id from `wolf_variant` registry
    -   `wolf/collar` - one of 16 dye colors
    -   `fox/variant` - one of `red`, `snow`
    -   `salmon/size` - one of `small`, `medium`, `large`
    -   `parrot/variant` - one of `red_blue`, `blue`, `green`, `yellow_blue`, `gray`
    -   `tropical_fish/pattern` - one of `kob`, `sunstreak`, `snooper`, `dasher`, `brinely`, `spotty`, `flopper`, `stripey`, `glitter`, `blockfish`, `betty`, `clayfish`
    -   `tropical_fish/base_color` - one of 16 dye colors
    -   `tropical_fish/pattern_color` - one of 16 dye colors
    -   `mooshroom/variant` - one of `red`, `brown`
    -   `rabbit/variant` - one of `brown`, `white`, `black`, `white_splotched`, `gold`, `salt`, `evil`
    -   `pig/variant` - namespaced id from `pig_variant` registry
    -   `frog/variant` - namespaced id from `frog_variant` registry
    -   `horse/variant` - one of `white`, `creamy`, `chestnut`, `brown`, `black`, `gray`, `dark_brown`
    -   `painting/variant` - namespaced id from `painting_variant` registry
    -   `llama/variant` - one of `creamy`, `white`, `brown`, `gray`
    -   `axolotl/variant` - one of `lucy`, `wild`, `gold`, `cyan`, `blue`
    -   `cat/variant` - namespaced id from `cat_variant` registry
    -   `cat/collar` - one of 16 dye colors
    -   `sheep/color` - one of 16 dye colors
    -   `shulker/color` - one of 16 dye colors
-   Mob buckets and paintings available in creative menu will now use new variants instead of `minecraft:entity_data` component
-   Custom tooltips for Bucket of Tropical Fish and Painting items are now based on new components instead of `minecraft:bucket_entity_data` and `minecraft:entity_data`

### Predicates

#### Entity predicates

-   New optional field has been added to entity predicate: `components`
    -   When present, predicate will match contents of entity components (similarily to field `components` on item predicate that works on item stacks)
    -   Format: map of component type key to matching component values
-   Following entity sub-predicates have been removed and replaced with combination of `components` predicate and variant entity components:
    -   `minecraft:axolotl`
    -   `minecraft:fox`
    -   `minecraft:mooshroom`
    -   `minecraft:rabbit`
    -   `minecraft:horse`
    -   `minecraft:llama`
    -   `minecraft:villager`
    -   `minecraft:parrot`
    -   `minecraft:salmon`
    -   `minecraft:tropical_fish`
    -   `minecraft:painting`
    -   `minecraft:cat`
    -   `minecraft:frog`
    -   `minecraft:wolf`
    -   `minecraft:pig`
-   Field `color` has been removed from `minecraft:sheep` sub-predicate

## Resource Pack Version 48

-   Added new equipment asset layer type for Pigs and Striders, and moved saddle textures
-   Changed the size of `pig_saddle` texture

### Equipment Assets

-   Equipment assets may now define new layer types:
    -   `pig_saddle` - equipment layer for Pig saddles
    -   `strider_saddle` - equipment layer for Strider saddles
    -   `camel_saddle` - equipment layer for Camel saddles
    -   `horse_saddle` - equipment layer for Horse saddles
    -   `donkey_saddle` - equipment layer for Donkey saddles
    -   `mule_saddle` - equipment layer for Mule saddles
    -   `skeleton_horse_saddle` - equipment layer for Skeleton Horse saddles
    -   `zombie_horse_saddle` - equipment layer for Zombie Horse saddles
-   The following textures have been moved to support the use of equipment assets for saddles:
    -   `entity/pig/pig_saddle.png` -> `entity/equipment/pig_saddle/saddle.png`
    -   `entity/strider/strider_saddle.png` -> `entity/equipment/strider_saddle/saddle.png`
-   The following textures have been split from their base entity texture to support the use of equipment assets for saddles:
    -   `entity/camel/camel.png` -> `entity/equipment/camel_saddle/saddle.png`
    -   `entity/horse/horse_<variant>.png` -> `entity/equipment/horse_saddle/saddle.png`
    -   `entity/horse/donkey.png` -> `entity/equipment/donkey_saddle/saddle.png`
    -   `entity/horse/mule.png` -> `entity/equipment/mule_saddle/saddle.png`
    -   `entity/horse/horse_skeleton.png` -> `entity/equipment/skeleton_horse_saddle/saddle.png`
    -   `entity/horse/horse_zombie.png` -> `entity/equipment/zombie_horse_saddle/saddle.png`

### Item Models

#### `minecraft:component` Select Property

-   New data source has been added to `select` item model: `component`
-   Returns value of component on item, if any
-   Fields:
    -   `component` - namespaced ID of component type
-   Possible values: depends on component type
    -   Example: if `component` is set to `minecraft:wolf/collar`, list of cases will accept dye colors, like `lime`

## Fixed bugs in 25w03a

-   [MC-13738](https://bugs.mojang.com/browse/MC-13738) Invisible saddle when using invisibility potion on a horse, donkey or mule
-   [MC-80243](https://bugs.mojang.com/browse/MC-80243) Saddles don't apply attribute modifiers when worn by entities
-   [MC-189525](https://bugs.mojang.com/browse/MC-189525) Armored entities from pre-1.9 worlds upgrade to dual wielding armor
-   [MC-190000](https://bugs.mojang.com/browse/MC-190000) Saddles equipped on horses cannot be replaced without removing them first
-   [MC-256469](https://bugs.mojang.com/browse/MC-256469) Invisible camels don't show their saddles
-   [MC-266912](https://bugs.mojang.com/browse/MC-266912) Saddle equipping sounds aren't played when saddles are equipped on horses, donkeys, mules, or camels shortly after the said entity is summoned
-   [MC-269637](https://bugs.mojang.com/browse/MC-269637) Horses can wear multiple saddles but not multiple horse armor
-   [MC-270192](https://bugs.mojang.com/browse/MC-270192) The saddles of some entities stay visible through their death animation
-   [MC-270197](https://bugs.mojang.com/browse/MC-270197) The saddle on pigs and striders stays visible through their death animation
-   [MC-272100](https://bugs.mojang.com/browse/MC-272100) Unused palette pixels in horse textures (horse;;_;;;;[;;brown/chestnut/creamy/white;;];;.png)
-   [MC-272790](https://bugs.mojang.com/browse/MC-272790) Shulker boxes and other blocks in the end exit portal when it changes state are not dropped as items
-   [MC-274258](https://bugs.mojang.com/browse/MC-274258) All horse textures contain an unused chest bag texture
-   [MC-278673](https://bugs.mojang.com/browse/MC-278673) The x-rotation of /teleport is limited to ±90 degrees relative to the entity's original angle
-   [MC-279208](https://bugs.mojang.com/browse/MC-279208) Players can no longer begin sprinting when pressing a sideways movement key first
-   [MC-279211](https://bugs.mojang.com/browse/MC-279211) Shulker boxes both keep and drop their contents upon being broken via certain methods causing item duplication
-   [MC-279213](https://bugs.mojang.com/browse/MC-279213) Mushroom Blocks can't replace Leaf Litter
-   [MC-279221](https://bugs.mojang.com/browse/MC-279221) Leaf Litter replaces leaves in world gen
-   [MC-279224](https://bugs.mojang.com/browse/MC-279224) Using bone meal in meadows doesn't generate wildflowers
-   [MC-279226](https://bugs.mojang.com/browse/MC-279226) Experience orbs of any value all render as the smallest value
-   [MC-279233](https://bugs.mojang.com/browse/MC-279233) Shulker boxes drop their contents when broken
-   [MC-279234](https://bugs.mojang.com/browse/MC-279234) The minecraft:entity.generic.extinguish;;_;;fire sound does not play when the fire on an entity is extinguished
-   [MC-279238](https://bugs.mojang.com/browse/MC-279238) Dying to a minecart with TNT ignited by a blaze fireball doesn't count as the blaze's kill
-   [MC-279239](https://bugs.mojang.com/browse/MC-279239) The motion of primed TNT is choppy and jittery
-   [MC-279245](https://bugs.mojang.com/browse/MC-279245) Most hostile mobs aren't spawning even under the right conditions
-   [MC-279248](https://bugs.mojang.com/browse/MC-279248) Lava collision is too high
-   [MC-279281](https://bugs.mojang.com/browse/MC-279281) Fall damage occurs from jumping from 2 blocks up
-   [MC-279282](https://bugs.mojang.com/browse/MC-279282) Parrots with non-player owner UUID cause crash upon spawning
-   [MC-279285](https://bugs.mojang.com/browse/MC-279285) Experience orbs abruptly accelerate towards the ground very fast
-   [MC-279301](https://bugs.mojang.com/browse/MC-279301) Player dies by falling from 22.00001 blocks instead of 23 blocks
-   [MC-279313](https://bugs.mojang.com/browse/MC-279313) The motion of item entities is choppy and jittery under certain circumstances
-   [MC-279314](https://bugs.mojang.com/browse/MC-279314) Projectiles twitch up and down slightly while flying through the air
-   [MC-279316](https://bugs.mojang.com/browse/MC-279316) The motion of fishing bobbers is choppy and jittery
-   [MC-279339](https://bugs.mojang.com/browse/MC-279339) Update order for sloped rails is incorrect
-   [MC-279340](https://bugs.mojang.com/browse/MC-279340) Baby polar bears are too small
-   [MC-279345](https://bugs.mojang.com/browse/MC-279345) Pink petals and Wildflowers can no longer be grown by bone meal
-   [MC-279357](https://bugs.mojang.com/browse/MC-279357) Player can fall off edges while sneaking
-   [MC-279434](https://bugs.mojang.com/browse/MC-279434) Standing on powder snow and fire at the same time spams the fire extinguish sound
-   [MC-279459](https://bugs.mojang.com/browse/MC-279459) /setblock and other fills don't properly update block entities

---

It's the first snapshot Wednesday of 2025, and we have some fun new features to kick off the new year. This snapshot adds new ambient features to the game, including wildflowers, leaf litter, and falling leaves. Pigs are getting two new variants: you may venture into the colder biomes to find the cold pig, or head for sunnier spots to meet its counterpart – the warm pig! Lodestones are also becoming easier to craft, making them more accessible in the early game. Now you'll only need an iron ingot with your chiseled stone bricks.

## New Features

-   Added new falling leaves particles to Leaf blocks without particles
-   Added cold and warm variants for the Pig
-   Added Wildflowers block
-   Added Leaf Litter block

### Leaves block particles

-   All Leaves blocks now have chance of spawning falling leaf particles
-   These blocks are affected by this change:
    -   Oak Leaves
    -   Jungle Leaves
    -   Acacia Leaves
    -   Dark Oak Leaves
    -   Spruce Leaves
    -   Mangrove Leaves
    -   Birch Leaves
    -   Azalea Leaves
    -   Flowering Azalea Leaves

### Pig Variants

-   New Pig variants have been added, the variant is determined by the biome they spawn in
-   Temperate Pig - The Pig we are all familiar with
    -   Spawns by default where the cold and warm Pig variants do not spawn
-   Cold Pig - A variant that spawns in the following biomes:
    -   Old Growth Pine Taiga
    -   Old Growth Spruce Taiga
    -   Taiga
    -   Snowy Taiga
    -   Windswept Hills
    -   Windswept Gravelly Hills
    -   Windswept Forest
-   Warm Pig - A variant that spawns in the following biomes:
    -   Savanna
    -   Savanna Plateau
    -   Windswept Savanna
    -   Jungle
    -   Sparse Jungle
    -   Bamboo Jungle
    -   Eroded Badlands
    -   Wooded Badlands
    -   Badlands
-   When bred by a player, a baby Pig variant will not be chosen by the current biome, but instead randomly selected from one of the parents' variants

### Wildflowers

-   Wildflowers are a new type of flower which grow in Birch Forests, Old Growth Birch Forests and Meadows
-   Wildflowers can have different amounts of flowers in one block space
    -   Up to four Wildflowers can be placed in the same block space
    -   Placing a Wildflower into an already placed Wildflowers block increases the amount of flowers
    -   Using Bone Meal on Wildflowers will produce more Wildflowers
-   Wildflowers can be placed in four orientations
-   Wildflowers can be crafted into Yellow Dye

### Leaf Litter

-   Leaf Litter is a new type of decorative block which can be found in the Forests, Dark Forests and Wooded Badlands
-   Leaf Litter can have different amounts of leaves in one block space
    -   Up to four Leaf Litter pieces can be placed in the same block space
    -   Placing a Leaf Litter into an already placed Leaf Litter block increases the amount of leaves
-   Leaf Litter can be placed in four orientations
-   Leaf Litter can be created by smelting any type of Leaves block
-   Leaf Litter can be used as fuel for smelting
-   Leaf Litter has unique block sounds

## Changes

-   Lodestones have a new crafting recipe and can now be found in Ruined Portals
-   Added new break, place, step, fall and hit sounds for Iron Blocks, Iron Bars, Iron Trapdoors, Iron Doors and Heavy Weighted Pressure Plates
-   Zombified Piglins now need to be killed by a Player to drop the Player-specific loot
    -   This makes them consistent with all other mobs in the game
-   Chunks loaded by a portal will now be re-loaded again automatically when the world is reopened
-   Farm animals can now spawn in Badlands
-   Short Grass now generates slightly sparser in Meadows
-   The volume of the narrator is now affected by the game's configured volume in the 'Voice' category
-   Uploading a world to Realms will now enable Command Blocks by default
-   It is now possible to upload Hardcore singleplayer worlds to Realms
-   Bubble columns produce less particles and sounds when entities that are unaffected by them are inside them
-   If the game detects that the last startup did not complete normally, the fullscreen option will now be reset

### Garden Awakens Changes

-   Pale Garden biome now occupies more space that was previously taken by Dark Forest
-   Woodland Mansions can now generate in Pale Garden biome
-   Pale Oak Leaves and Pale Oak Saplings have an updated map color
-   Creakings can now be named using Name Tags
    -   Named Creaking will persist through the day
        -   However, it will still be torn down if stuck with a player or if it is too far from its Heart
    -   Named Creakings are still resistant to all damage, and can communicate with their Hearts via particles
-   Creaking Hearts correctly placed between Logs have a new dormant texture during the day
    -   Dormant Creaking Hearts cannot spawn new Creakings and Resin
-   Transition between the awake and dormant states for Creaking Hearts and transition of Eye Blossoms is now based on the fixed day time
    -   All these behaviors are no longer affected by weather or dimension brightness

### Lodestone Changes

-   The Lodestone is now crafted from 1 Iron Ingot surrounded by 8 Chiseled Stone Bricks
-   Lodestones can now be found as loot at Ruined Portals in the Overworld or Nether

## Technical Changes

-   The Data Pack version is now 62
-   The Resource Pack version is now 47

## Data Pack Version 62

-   Changes to commands
-   Updated data format of Text Components
-   `structure_block` in the `load` mode has now a new option: `Strict Placement`
    -   If set to `false`, the blocks in the placed structure will not trigger block updates, block entity side effects, or shape updates
-   The `Owner` field of tamed animals is no longer restricted to referencing Players
-   Updated data format of equipment drop chances in entity data
-   Added data-driven registry for pig variants
-   Added `pig` entity sub-predicate for matching pig variants

### Commands

-   Text Components in commands such as `/tellraw` or `/title` are now specified with SNBT instead of JSON
-   Text Style in the `/scoreboard` command when specifying the `styled` number format is also now specified with SNBT instead of JSON
-   The behavior of `setblock` and `fill` commands have changed in how they handle block entity data:
    -   If the block entity data is not specified, and the existing block has data, the block entity data will be preserved
    -   If the block entity data is specified, the block entity data will be set to the specified value
    -   To clear the block entity data explicitly, you must now specify the block entity data as `{}`
    -   The operation is now successful if either the block state changed or the block entity data changed
-   `fill`, `clone`, `setblock` and `place template` accept a new option: `strict`
    -   If specified, the command will place blocks as-is without triggering block updates and shape updates
-   The `replace` option in the `fill` command is no longer terminal, and can be followed with additional options
-   New syntax for commands to use the new `strict` option, and more flexible use of `replace`:
    -   `fill <from> <to> <block> keep`
    -   `fill <from> <to> <block> [replace <filter>]? [strict|destroy|hollow|outline]?`
    -   `clone [from <sourceDimension>]? <begin> <end> [to <targetDimension>]? <destination> [strict]? [[replace|masked|filtered <filter>] [force|move|normal]?]?`
    -   `setblock <pos> <block> [destroy|keep|replace|strict]?`
    -   `place template <template> [<pos> [<rotation> [<mirror> [<integrity> [<seed> [strict]?]?]?]?]?]?`

### Text Component Data Format

-   Text Components are no longer stored as JSON wrapped by a string
-   The format itself is the same as before, but inlined directly into the outer structure
-   For example, the item component `minecraft:custom_name="{;;";;text;;";;:;;";;Renamed item;;";;}"` will become `minecraft:custom_name={text:'Renamed item'}`
-   This includes Text Components passed as arguments to commands such as `/tellraw` or `/title`
    -   For example, `/tellraw @s ";;";;text;;";;:;;";;Hello world;;";;"` may become `/tellraw @s {text:'Hello world'}`
-   Note: in the case where Text Components are embedded in NBT, no distinction exists between boolean and integer types
    -   To pass boolean arguments to translations, you must use the string form
-   For Text Components with the `nbt` type and `interpret` set to `true`, Text Components will be parsed from the given NBT directly rather than converting to string and parsing as JSON
-   The format of hover and click events has been updated

#### Hover Events

-   The `hoverEvent` field has been renamed to `hover_event`
-   The legacy `value` field (which was parsed from a rendered text component) is no longer supported
-   For the `show_text` action:
    -   `contents` field has been renamed to `text`
    -   e.g. `{action:'show_text',contents:'Hello world'}` becomes `{action:'show_text',text:'Hello world'}`
-   For the `show_item` action:
    -   The `contents` field has been inlined
    -   e.g. `{action:'show_item',contents:{id:'minecraft:stick',count:2}}` becomes `{action:'show_item',id:'minecraft:stick',count:2}`
    -   If contents was specified only as an item id, it is replaced with the full format and inlined
    -   e.g. `{action:'show_item',contents:'minecraft:stick'}` becomes `{action:'show_item',id:'minecraft:stick'}`
-   For the `show_entity` action:
    -   The `contents` field has been inlined
    -   The `id` field has been renamed to `uuid`
    -   The `type` field has been renamed to `id`
    -   e.g. `{action:'show_entity',contents:{id:[I;0,0,0,0],type:'minecraft:pig'}}` becomes `{action:'show_entity',uuid:[I;0,0,0,0],id:'minecraft:pig'}`

#### Click Events

-   The `clickEvent` field has been renamed to `click_event`
-   For the `open_url` action:
    -   The `value` field has been renamed to `url`
    -   The click event will no longer parse if not a valid URI with either `https://` or `http://` schemes, instead of simply not working
    -   e.g. `{action:'open_url',value:'https://minecraft.net'}` becomes `{action:'open_url',url:'https://minecraft.net'}`
-   For the `run_command` action:
    -   The `value` field has been renamed to `command`
    -   The click event will no longer parse if the command contains disallowed characters, instead of simply not working
    -   It is no longer required that the specified `command` field has a `/` prefix
    -   e.g. `{action:'run_command',value:'/say Hi'}` becomes `{action:'run_command',command:'/say Hi'}`
-   For the `suggest_command` action:
    -   The `value` field has been renamed to `command`
    -   The click event will no longer parse if the command contains disallowed characters, instead of simply not working
    -   e.g. `{action:'suggest_command',value:'/help'}` becomes `{action:'suggest_command',command:'/help'}`
-   For the `change_page` action:
    -   The `value` field has been renamed to `page`
    -   The `page` value now requires a positive integer instead of a string
    -   e.g. `{action:'change_page',value:'1'}` becomes `{action:'change_page',page:1}`
-   The `copy_to_clipboard` format is unchanged

### Tags

#### Block Tags

-   Added `#replaceable_by_mushrooms` - exhaustive list of all bocks that can be replaced as a mushroom is placed or grows
-   Added `#sword_instantly_mines` - blocks that are instantly mined by Swords

#### Item Tags

-   Added `#book_cloning_target` - item that can be crafted together with a Written Book to clone it

#### Biome Tags

-   Added `#spawns_cold_variant_farm_animals` - all biomes where cold variant of farm animals spawn
-   Added `#spawns_warm_variant_farm_animals` - all biomes where warm variants of farm animals spawn

### Entity Data

-   The `ArmorDropChances`, `HandDropChances`, and `body_armor_drop_chance` fields have been merged into a `drop_chances` field
    -   Format: map between equipment slot type and chance value
        -   Valid equipment slots: `head`, `chest`, `legs`, `feet`, `mainhand`, `offhand`, `body`
    -   If not specified or removed, chances will be assumed as default (`0.085f`)
    -   e.g. `drop_chances:{chest:0.1,feet:1.0}`
-   Drop chances with a default value will no longer be stored, and the `drop_chances` field is removed entirely if all defaults
-   Area Effect Clouds have a new field: `potion_duration_scale` (float)
    -   If not specified, defaults to `1.0`
    -   The duration of the potion effect applied is scaled by this factor
    -   Area Effect Clouds created by Lingering Potions will have a scale of `0.25`

### Pig Variants

-   Pig variants can be data-driven by adding entries to `data/<namespace>/pig_variant/<id>.json`
-   This feature is experimental
-   Fields in file:
    -   `model` - one of: `normal`, `cold`
    -   `texture` - texture id for this variant, resolves to `assets/<namespace>/textures/<path>.png`
    -   `biome` - single entry, list or a tag describing biomes in which this variant natually spawns
        -   If not specified, this variant will only be selected if no other variant matches the current biome

### Recipes

#### `crafting_transmute` Recipe Type

-   The `result` field now supports specifying a count and a components patch to apply to the result
-   The components patch is applied to the final transmuted item
-   The new format is an object with fields:
    -   `id` - item id
    -   `count` - positive integer (default: `1`)
    -   `components` - a component patch object (default: empty)
    -   e.g. `"result": {"id": "minecraft:stick", "count": 3, "components": {"!minecraft:damage": {}, "minecraft:enchantment_glint_override": {}}}`
-   The field can still be defined as before as an inline item id (e.g. `"result": "minecraft:stick"`)

### Item Components

#### New `weapon` component

-   When present, the 'Item Used' statistic will be incremented for each attack with the item
-   The specified amount of damage can be done to the item with each attack
-   Format: object with fields:
    -   `damage_per_attack` - non-negative integer (default: `1`)
        -   The amount to damage the weapon for each attack performed
    -   `can_disable_blocking` - boolean (default: `false`)
        -   If `true`, will disable a blocking Shield on successful attack
    -   e.g. `weapon={damage_per_attack:2}`

#### New `potion_duration_scale` component

-   When present, for items that have the `potion_contents` component, the duration of the applied effects will be scaled by this factor
-   This also applies to `custom_effects` in the `potion_contents` component, unlike the previous hardcoded scaling factor
-   If not specified, defaults to `1.0`
-   Format: non-negative float
    -   e.g. `potion_duration_scale=0.25`

#### `tool` Component

-   Added new optional field: `can_destroy_blocks_in_creative` (bool)
    -   If `false`, players cannot break blocks while holding this tool in Creative Mode
    -   If not specified, defaults to `true`

## Resource Pack Version 47

-   Added textures for new falling leaves particles
-   New and updated Pig textures
-   Added textures for new Wildflowers block
-   Added break, place, step, fall and hit sounds for Iron Blocks, Iron Bars, Iron Trapdoors, Iron Doors and Heavy Weighted Pressure Plates

### New and updated Pig textures

-   Added new textures for Pig variants:
    -   `cold_pig`
    -   `warm_pig`
-   Changed the size of `pig` texture

## Fixed bugs in 25w02a

-   [MC-7697](https://bugs.mojang.com/browse/MC-7697) Tridents or arrows shot through lava sometimes don't catch fire
-   [MC-55800](https://bugs.mojang.com/browse/MC-55800) Successful "/fill air destroy" commands give error message and return 0 for result/success
-   [MC-56653](https://bugs.mojang.com/browse/MC-56653) Zombified Piglins drop XP and rare drops if killed by anything while in angered state
-   [MC-90212](https://bugs.mojang.com/browse/MC-90212) You cannot hang on to climbable blocks while gliding with elytra
-   [MC-93185](https://bugs.mojang.com/browse/MC-93185) The exit portal in the end generates at highest block at 0 0 which can make it generate incomplete
-   [MC-97244](https://bugs.mojang.com/browse/MC-97244) The "minecraft:enchant.thorns.hit" sound event doesn't play when non-player entities are damaged by the thorns enchantment
-   [MC-113878](https://bugs.mojang.com/browse/MC-113878) Attribute modifiers description for chest is misleading / "When on body" instead of "When on chest"
-   [MC-118053](https://bugs.mojang.com/browse/MC-118053) Wolves with the Owner of a non-player are spawned sitting
-   [MC-118092](https://bugs.mojang.com/browse/MC-118092) Crafting recipe unlock toast says "New Recipes Unlocked!" even when only one recipe was unlocked
-   [MC-118470](https://bugs.mojang.com/browse/MC-118470) Narrator plays at full volume when volume is off
-   [MC-128079](https://bugs.mojang.com/browse/MC-128079) Statistic for using shears doesn't increase when mining certain blocks
-   [MC-135192](https://bugs.mojang.com/browse/MC-135192) Boats are immediately sunken if there is a string on the surface of the water
-   [MC-141297](https://bugs.mojang.com/browse/MC-141297) You cannot set lit state of redstone torches using setblock, debug stick and BlockStateTag, to be to opposite of the situation it would be in
-   [MC-165421](https://bugs.mojang.com/browse/MC-165421) Bubble columns have the opposite effect on tridents and wind charges
-   [MC-167125](https://bugs.mojang.com/browse/MC-167125) Rounding error on fall damage
-   [MC-183329](https://bugs.mojang.com/browse/MC-183329) Nether portal teleport overlay does not show up if the player has the nausea effect
-   [MC-183623](https://bugs.mojang.com/browse/MC-183623) Hardcore worlds in the world menu have a comma after the red exclamation mark
-   [MC-184681](https://bugs.mojang.com/browse/MC-184681) Customized worlds still say "Buffet world customization" since 20w21a
-   [MC-202226](https://bugs.mojang.com/browse/MC-202226) /recipe give or take for one recipe says "recipes"
-   [MC-220672](https://bugs.mojang.com/browse/MC-220672) Inconsistent pluralization in customize world preset heading source string
-   [MC-222876](https://bugs.mojang.com/browse/MC-222876) "Buffet world customization" is incorrectly capitalized
-   [MC-226772](https://bugs.mojang.com/browse/MC-226772) Shulker box opening / closing subtitle shows "Shulker"
-   [MC-241951](https://bugs.mojang.com/browse/MC-241951) Player momentum on X and Z axis are cancelled separately at low values
-   [MC-248099](https://bugs.mojang.com/browse/MC-248099) Mob pathfinding breaks after falling into water accidentally while walking
-   [MC-253721](https://bugs.mojang.com/browse/MC-253721) Wrong logs when running /op @a
-   [MC-260440](https://bugs.mojang.com/browse/MC-260440) Players can no longer activate swimming mode in water while flying with elytra
-   [MC-261385](https://bugs.mojang.com/browse/MC-261385) Bubble columns act differently at the surface depending on non-air blocks
-   [MC-262928](https://bugs.mojang.com/browse/MC-262928) The "minecraft:entity.player.hurt" sound is no longer played when players receive thorns damage from guardians or elder guardians
-   [MC-262939](https://bugs.mojang.com/browse/MC-262939) Changing dimensions or respawning with nausea effect active displays nether portal overlay
-   [MC-265514](https://bugs.mojang.com/browse/MC-265514) HRTF stuck on even when directional audio is set to off in update 1.20.2
-   [MC-267221](https://bugs.mojang.com/browse/MC-267221) "value" within "change;;_;;page" clickEvent json looks for a string instead of an integer
-   [MC-267323](https://bugs.mojang.com/browse/MC-267323) Items fields with old boolean JSON formatting are cleared upon world update
-   [MC-270220](https://bugs.mojang.com/browse/MC-270220) Granting all advancements results in prolonged, disruptive and loud audio spam
-   [MC-271065](https://bugs.mojang.com/browse/MC-271065) Diagonal movement is not normalized when crouching or using certain items
-   [MC-272790](https://bugs.mojang.com/browse/MC-272790) Shulker boxes and other blocks in the end exit portal when it changes state are not dropped as items
-   [MC-273338](https://bugs.mojang.com/browse/MC-273338) Flying boat glitch using string and rising bubble columns
-   [MC-274187](https://bugs.mojang.com/browse/MC-274187) The sweeping attack from a sword enchanted with Fire Aspect can ignite other players with PVP disabled
-   [MC-275994](https://bugs.mojang.com/browse/MC-275994) Having the pie chart open while the window is unfocused spams the logs
-   [MC-277403](https://bugs.mojang.com/browse/MC-277403) Flaming arrows and tridents still don't extinguish when water is placed in their location
-   [MC-277537](https://bugs.mojang.com/browse/MC-277537) Pale moss carpets sometimes generate disjointed
-   [MC-277780](https://bugs.mojang.com/browse/MC-277780) Minecraft resaves all maps with every autosave even after the 1st patch
-   [MC-277807](https://bugs.mojang.com/browse/MC-277807) Teleporting the player's mount causes rotation de-sync, previously did not
-   [MC-277865](https://bugs.mojang.com/browse/MC-277865) The animation of boats in bubble columns breaks when over a certain "Time" in level.dat
-   [MC-277922](https://bugs.mojang.com/browse/MC-277922) Boats in 1 block high downward bubble column will continue to rock back and forth
-   [MC-278040](https://bugs.mojang.com/browse/MC-278040) Creaking swim pathfinding breaks after being submerged
-   [MC-278096](https://bugs.mojang.com/browse/MC-278096) "Fabulous!" graphics and clouds disabled causes all particles to linger in frame buffer for one frame
-   [MC-278164](https://bugs.mojang.com/browse/MC-278164) Click sound is played twice when you click a setting button and there's a slider under the mouse in the next screen
-   [MC-278204](https://bugs.mojang.com/browse/MC-278204) Blaze fireballs now cause TNT minecarts to explode instantly
-   [MC-278249](https://bugs.mojang.com/browse/MC-278249) Experience orb positions desync severely and abruptly correct themselves
-   [MC-278375](https://bugs.mojang.com/browse/MC-278375) Feeding wheat or hay bale to llama or trader llama with maximum Temper causes item stack to be desynced
-   [MC-278376](https://bugs.mojang.com/browse/MC-278376) Arrows and tridents act weirdly in one block deep bubble columns
-   [MC-278422](https://bugs.mojang.com/browse/MC-278422) Reloading the world after removing Owner tag from a sitting tamed wolf with /data remove makes the wolf moving and sitting at the same time
-   [MC-278493](https://bugs.mojang.com/browse/MC-278493) Tamed wolves which are angry at creakings remain angry when said creakings despawn
-   [MC-278502](https://bugs.mojang.com/browse/MC-278502) Weeping and twisting vines disconnect
-   [MC-278552](https://bugs.mojang.com/browse/MC-278552) minecraft:entity.player.big;;_;;fall no longer plays the sound when falling from great height
-   [MC-278585](https://bugs.mojang.com/browse/MC-278585) Players can get stuck when landing on the edge of powder snow
-   [MC-278591](https://bugs.mojang.com/browse/MC-278591) Ender dragon spawn egg is no longer given when using pick block on the ender dragon entity
-   [MC-278615](https://bugs.mojang.com/browse/MC-278615) Reinforcement zombified piglins are angry at you even if you killed the "caller" in one hit
-   [MC-278621](https://bugs.mojang.com/browse/MC-278621) Client/server desync when placing powder snow while landing in it
-   [MC-278627](https://bugs.mojang.com/browse/MC-278627) Players wearing leather boots will take fall damage when landing on the edge of powder snow
-   [MC-278634](https://bugs.mojang.com/browse/MC-278634) Trying to /setblock a 'waterlogged=true' state on (glow;;_;;lichen, resin;;_;;clump, sculk;;_;;vein, etc.) produces an error
-   [MC-278659](https://bugs.mojang.com/browse/MC-278659) Attacking a natural stationary creaking does not trigger sculk sensors
-   [MC-278683](https://bugs.mojang.com/browse/MC-278683) Mobs spawned from spawners or /summon never drop their equipment
-   [MC-278708](https://bugs.mojang.com/browse/MC-278708) Throwing ender pearls while mounted only dismounts you, without teleporting
-   [MC-278728](https://bugs.mojang.com/browse/MC-278728) smithing;;_;;transform recipes can't set an item's components back to default
-   [MC-278733](https://bugs.mojang.com/browse/MC-278733) Breaking a double resin brick slab block only returns a single slab
-   [MC-278734](https://bugs.mojang.com/browse/MC-278734) Sheep's heads stutter when they look up or down
-   [MC-278755](https://bugs.mojang.com/browse/MC-278755) Teleporting far away while riding an entity softlocks the game
-   [MC-278801](https://bugs.mojang.com/browse/MC-278801) The closed eyeblossom to gray dye recipe is not grouped with the other gray dye recipe
-   [MC-278841](https://bugs.mojang.com/browse/MC-278841) Powder snow no longer slows down the player falling from a high place
-   [MC-279145](https://bugs.mojang.com/browse/MC-279145) Shulker bullets are no longer affected by bubble columns
-   [MC-279152](https://bugs.mojang.com/browse/MC-279152) Shulker bullets can't teleport through nether or end portals, end gateways

---

