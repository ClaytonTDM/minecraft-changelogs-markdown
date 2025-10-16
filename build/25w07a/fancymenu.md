# 25w07a

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