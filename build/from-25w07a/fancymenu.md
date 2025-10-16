# Minecraft Snapshot 25w07a

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

