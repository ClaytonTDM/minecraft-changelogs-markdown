# Minecraft 26.1 Snapshot 6

Beware! A pack of seven floofy and feral baby mobs have taken over the snapshot! These tiny foxes, polar bears, bees, llamas, armadillos, and goats might have snuggly new looks, but might not all be cuddle-friendly (or tamable!). From the icy tundra to the sandy deserts – few biomes are safe from their cuteness!

And on the technical front: This week's release is bringing some major changes to the world data format, so make sure to read through the full changelog below before upgrading your worlds.

Happy mining!

## Changes

-   Revamped the visuals of more baby mobs
-   Baby Polar Bears no longer attack Foxes
-   Baby Axolotls now have a play dead animation
-   Fixed the baby chicken's wings and the warm chicken's stripes

### Baby Mobs

-   Updated the models and textures of the following baby mobs:
    -   Bee
    -   Fox
    -   Goat
    -   Camel
    -   Armadillo
    -   Polar Bear
    -   Llama
-   Saddles on baby Camels will no longer render
-   Camel Husk no longer has a baby model

### UI

-   Along with large changes to the world data format in this release, worlds that need to be upgraded will now show `Upgrade and Play` instead of `Play Selected World` and the `Edit World` and `Re-Create World` buttons are disabled until the world has been upgraded
    -   A new screen has been added to show upgrading progress

> **Developer's Note**: _Due to additional risk when upgrading a world, we will be forcing a backup when you load your world for the first time in this snapshot cycle. After upgrading, you will not be able to load your world in an older version at all._

## Technical Changes

-   The Data Pack version is now 99
-   The Resource Pack version is now 80

## Data Pack Version 99

### World Storage

-   All default dimensions are now stored in the `dimensions` subfolder
    -   Data for the Overworld has been moved from the root folder to `dimensions/minecraft/overworld`
        -   This includes the `region`, `entities`, and `poi` folders, as well as related files out of `data`
    -   Data for the Nether has been moved from `DIM-1` to `dimensions/minecraft/the_nether`
    -   Data for the End has been moved from `DIM1` to `dimensions/minecraft/the_end`
    -   The top level `data` folder is now only for data shared across dimensions instead of also for the Overworld
-   Player storage has been moved to the `players` subdirectory
    -   `advancements` -> `players/advancements`
    -   `playerdata` -> `players/data`
    -   `stats` -> `players/stats`
-   The world resource pack (`resources.zip`) has been moved to the `resourcepacks` subdirectory
-   Data saved in the `data` folder is now namespaced
    -   This means that all that data will now be stored in a namespace subfolder in the corresponding `data` folder
        -   All existing vanilla data files have been moved accordingly
        -   Example: `data/scoreboard.dat` -> `data/minecraft/scoreboard.dat`
    -   Command storage is now stored in namespace subfolders instead of having a namespace suffix
        -   Example: `data/command_storage_foo.dat` -> `data/foo/command_storage.dat`
    -   `chunks.dat` has been renamed to `chunk_tickets.dat`
    -   Data for maps is now stored in the `data/minecraft/maps` subfolder
        -   Map index files have been renamed to only the number
            -   Example: `map_1.dat` -> `1.dat`
        -   `idcounts.dat` has been renamed to `last_id.dat`
    -   There is no more `raids_end.dat` special case
        -   The End now uses `raids.dat` as well
-   Structures saved by Structure Blocks have been moved from `generated/namespace/structures` to `generated/namespace/structure`

**Changes to `level.dat`**

-   The `Player` tag has been replaced with a `singleplayer_uuid` tag, referencing the player data file to use
-   Difficulty-related settings have been moved into a `difficulty_settings` tag
    -   `Difficulty` is renamed to `difficulty` and is now a string instead of an integer
        -   Allowed values:
            -   `peaceful`
            -   `easy`
            -   `normal`
            -   `hard`
    -   `DifficultyLocked` is renamed to `locked`
-   Data for the Ender Dragon fight has been moved out to the data folder
    -   It can now be found at `dimensions/minecraft/the_end/data/minecraft/ender_dragon_fight.dat`
    -   The Ender Dragon fight can be activated in other dimensions, see the Dimension Types section below
    -   Data changes:
        -   `NeedsStateScanning` has been renamed to `needs_state_scanning`
        -   `DragonKilled` has been renamed to `dragon_killed`
        -   `PreviouslyKilled` has been renamed to `previously_killed`
        -   `IsRespawning` has been replaced by `respawn_stage`
            -   Allowed values:
                -   `start`
                -   `preparing_to_summon_pillars`
                -   `summoning_pillars`
                -   `summoning_dragon`
                -   `end`
        -   `Dragon` has been renamed to `dragon_uuid`
        -   `ExitPortalLocation` has been renamed to `exit_portal_location`
        -   `Gateways` has been renamed to `gateways`
        -   Added `respawn_time` - the time that has elapsed since the current stage of the respawn sequence started
        -   Added `respawn_crystals` - a list of UUIDs for the end crystals used to trigger the respawn sequence
-   Wandering Trader data has been moved out to the data folder
    -   It can now be found at `data/minecraft/wandering_trader.dat`
    -   Data changes:
        -   `WanderingTraderId` has been removed
        -   `WanderingTraderSpawnChance` has been renamed to `spawn_chance`
        -   `WanderingTraderSpawnDelay` has been renamed to `spawn_delay`
-   `CustomBossEvents` has been moved to the data folder
    -   It can now be found at `data/minecraft/custom_boss_events.dat`
-   Weather-related data has been moved to the data folder
    -   It can now be found at `data/minecraft/weather.dat`
    -   Data changes:
        -   `clearWeatherTime` has been renamed to `clear_weather_time`
        -   `rainTime` has been renamed to `rain_time`
        -   `thunderTime` has been renamed to `thunder_time`
-   `ScheduledEvents` has been moved out to the data folder
    -   It can now be found at `data/minecraft/scheduled_events.dat`
    -   Data changes:
        -   `Name` has been renamed to `id`
        -   `TriggerTime` has been renamed to `trigger_time`
        -   `Callback` has been renamed to `callback`
            -   `Type` has been renamed to `type`
            -   `Name` has been renamed to `id`
-   `game_rules` has been moved out to the data folder
    -   It can now be found at `data/minecraft/game_rules.dat`
-   `WorldGenSettings` has been moved out to the data folder
    -   It can now be found at `data/minecraft/world_gen_settings.dat`
    -   Data changes:
        -   `generate_features` has been renamed to `generate_structures`
-   `world_clocks` has been moved out to the data folder
    -   It can now be found at `data/minecraft/world_clocks.dat`

### World Generation

-   Rule-based block state providers have changed so that their `fallback` is optional and can be empty
    -   In such cases that an empty fallback is invoked, features that use them will not place anything
    -   Current configuration that uses a rule-based block state provider is the `state_provider` in the `disk` feature
-   `forest_rock` feature has been renamed to `block_blob`
-   `block_blob` feature configuration has changed to support the following parameters:
    -   `state` The block the rock is made out of
    -   `can_place_on` A block predicate that defines which blocks the rock can be placed on
-   `ice_spike` feature has been renamed to `spike`
-   `spike` feature configuration now supports the following parameters:
    -   `state` The block the spike is made out of
    -   `can_place_on` A block predicate that defines which blocks the spike can be placed on
    -   `can_replace` A block predicate that defines which blocks the spike can replace
-   `huge_red_mushroom` and `huge_brown_mushroom` feature configurations have a new parameter:
    -   `can_place_on` A block predicate that defines which blocks the huge mushroom can be placed on
-   `alter_ground` tree decorator configuration has changed so that `provider` is now a rule-based block state provider
-   `tree` feature configuration has replaced the `force_dirt` and `dirt_provider` parameters with a single `below_trunk_provider` rule-based block state provider:
    -   Format:
        -   `fallback` - An optional block state provider
        -   `rules` - A list of rules
            -   `if_true` - A block predicate that checks the block position before providing the block
            -   `then` - A block state provider
    -   Default value:
        
            "below_trunk_provider": {
                "rules": [
                    {
                        "if_true": {
                            "type": "minecraft:not",
                            "predicate": {
                                "type": "minecraft:matching_block_tag",
                                "tag": "minecraft:cannot_replace_below_tree_trunk"
                            }
                        },
                        "then": {
                            "type": "minecraft:simple_state_provider",
                            "state": {
                                "Name": "minecraft:dirt"
                            }
                        }
                    }
                ]
            }
            
        
    -   Any trees that previously used `force_dirt` have a `below_trunk_provider` that always provides a `dirt` block instead

**Dimension Types**

-   `has_ender_dragon_fight`: boolean
    -   Controls whether it is possible for an Ender Dragon fight to exist in the dimension

### Tags

**Block Tags**

-   Split apart `#dirt` into multiple block tags
    -   `#dirt` now only contains Dirt, Coarse Dirt and Rooted Dirt
    -   `#mud` contains Mud and Muddy Mangrove Roots
    -   `#moss_blocks` contains Moss Block and Pale Moss Block
    -   `#grass_blocks` contains Grass Block, Mycelium and Podzol
-   Added `#substrate_overworld` which contains `#dirt`, `#mud`, `#moss_blocks` and `#grass_blocks`
    -   This is used as a collection for world generation conditions
-   Added the following tags which define which ground blocks beneath an applicable tree or bamboo can be replaced with podzol:
    -   `#beneath_tree_podzol_replaceable`
    -   `#beneath_bamboo_podzol_replaceable`
-   Added `#cannot_replace_below_tree_trunk` which contains `#dirt`, `#mud`, `#moss_blocks` and `podzol`
-   Added the following tags defining which blocks their feature can be placed on
    -   `#forest_rock_can_place_on`
    -   `#huge_brown_mushroom_can_place_on`
    -   `#huge_red_mushroom_can_place_on`
-   Added `#ice_spike_replaceable` defining which blocks an Ice Spike feature can replace

**Item Tags**

-   Added the following tags which mirror their block tag contents:
    -   `#mud`
    -   `#moss_blocks`
    -   `#grass_blocks`

## Resource Pack Version 80

-   Added sound event for baby chicken step

### Entity Textures

-   Added new entity textures:
    -   `entity/bee/bee_baby.png`
    -   `entity/bee/bee_baby.png`
    -   `entity/bee/bee_angry_baby.png`
    -   `entity/bee/bee_nectar_baby.png`
    -   `entity/bee/bee_angry_nectar_baby.png`
    -   `entity/fox/fox_baby.png`
    -   `entity/fox/fox_snow_baby.png`
    -   `entity/fox/fox_sleep_baby.png`
    -   `entity/fox/fox_snow_sleep_baby.png`
    -   `entity/camel/camel_baby.png`
    -   `entity/goat/goat_baby.png`
    -   `entity/armadillo/armadillo_baby.png`
    -   `entity/bear/polarbear_baby.png`
    -   `entity/llama/llama_creamy_baby.png`
    -   `entity/llama/llama_white_baby.png`
    -   `entity/llama/llama_brown_baby.png`
    -   `entity/llama/llama_gray_baby.png`
    -   `entity/equipment/llama_body/trader_llama_baby.png`

### Shaders & Post-process Effects

-   The `core/rendertype_item_entity_translucent_cull` shaders have been removed in favor of `core/entity`
-   The `core/rendertype_entity_alpha` and `core/rendertype_entity_decal` shaders have been replaced by a `DISSOLVE` flag implemented by `core/entity`
-   Rendering of items (in UI and in the world) has been split from the `core/entity` into new `core/item` shaders

## Fixed bugs in 26.1 Snapshot 6

-   [MC-134573](https://bugs.mojang.com/browse/MC-134573) The game freezes while doing a world backup
-   [MC-259032](https://bugs.mojang.com/browse/MC-259032) /data produces a positive result for low negative numbers
-   [MC-264187](https://bugs.mojang.com/browse/MC-264187) Spawners with their light limits set to ranges that don't include 15 don't spawn mobs under the night sky
-   [MC-273228](https://bugs.mojang.com/browse/MC-273228) Crash when generating water lakes using a custom worldgen datapack
-   [MC-303403](https://bugs.mojang.com/browse/MC-303403) Hanging sign block displays render dark and above other blocks and mobs
-   [MC-305580](https://bugs.mojang.com/browse/MC-305580) Baby zombie horses, skeleton horses and camel husks grow into adults, unlike other baby undead mobs
-   [MC-305598](https://bugs.mojang.com/browse/MC-305598) The "wolf;;_;;baby;;_;;angry4" sound (angry puppy sound) ends abruptly
-   [MC-305813](https://bugs.mojang.com/browse/MC-305813) The game crashes due to an integer overflow when loading a level with a large number of days
-   [MC-305887](https://bugs.mojang.com/browse/MC-305887) The eating sound for baby horses is noticeably too low-pitched
-   [MC-305923](https://bugs.mojang.com/browse/MC-305923) Bubble columns delete waterlogged blocks that intersect them
-   [MC-305988](https://bugs.mojang.com/browse/MC-305988) Golden dandelions can't be fed to tadpoles
-   [MC-306022](https://bugs.mojang.com/browse/MC-306022) Golden dandelions work on tamed baby skeleton horses and zombie horses
-   [MC-306035](https://bugs.mojang.com/browse/MC-306035) The "Birthday Song" advancement is no longer being granted
-   [MC-306057](https://bugs.mojang.com/browse/MC-306057) The AgeLocked NBT tag isn't saved when picking up a baby axolotl in a bucket
-   [MC-306123](https://bugs.mojang.com/browse/MC-306123) Wolves still try to attack players even in Peaceful difficulty

---

# Minecraft 26.1 Snapshot 5

With today's snapshot release, we're bringing you another set of features from our next game drop! Dive into testing with new versions of aquatic baby mobs and discover eternal youth! Making big waves for looking adorably tiny are new baby versions of the axolotl, dolphin, turtle, squid, and glow squid. Don't want them to grow up? Feed your favorite baby mobs a golden dandelion to keep them young forever.

Happy mining!

## New Features

-   Revamped the visuals of more baby mobs
-   Added new baby sounds for Chicken
-   Added Golden Dandelion

### Golden Dandelion

-   Golden Dandelion is a new type of flower that can be used to stop baby mobs from aging
    -   Interacting with a baby mob while holding a Golden Dandelion will stop the mob from aging
    -   Interacting with a baby mob that has been stopped from aging while holding a Golden Dandelion will cause it to start aging again
    -   Golden Dandelion can not be used on hostile baby mobs and Villagers
-   Can be crafted using a Dandelion and Gold Nuggets

### Baby Mobs

-   Updated the models and textures of the following baby mobs:
    -   Dolphin
    -   Squid
        -   Increased the bounding box of baby Squid to better fit the new model
    -   Glow Squid
        -   Increased the bounding box of baby Glow Squid to better fit the new model
    -   Turtle
    -   Axolotl
        -   Increased the bounding box of baby Axolotl to better fit the new model

### UI

**Game rules**

-   The search bar will now also select gamerules based on description and category in addition to namespaced ID and name

## Technical Changes

-   The Data Pack version is now 98
-   The Resource Pack version is now 79
-   Tags resolved from `minecraft:nbt` text components, with `interpret: false`, are now pretty-printed instead of being flattened into a single `text` component

## Data Pack Version 98

-   Changed syntax of some custom recipe fields
-   Updated the `gameplay/turtle_egg_hatch_chance` environment attribute to have a default value of `0.002`

### Data Components

**Added `minecraft:dye`**

-   Represents a color of dye
-   Used in various places that previously required the exact dye item, including mob and block interactions
    -   Note: the presence of this component itself does not enable functionality. The item has to be explicitly allowed for the given functionality, for example by adding it to tags or changing recipe ingredients
-   Format: one of `white`, `orange`, `magenta`, `light_blue`, `yellow`, `lime`, `pink`, `gray`, `light_gray`, `cyan`, `purple`, `blue`, `brown`, `green`, `red`, `black`

### Loot Functions

**`minecraft:set_random_dyes`**

-   No longer works only for items in `#dyeable` tag

### Recipes

-   `minecraft:crafting_special_mapcloning` recipe type has been removed, functionality has been absorbed by `minecraft:crafting_transmute`
-   New `show_notification` fields with the same functionality as existing one in `minecraft:crafting_shaped` have been added to the following existing recipe types:
    -   `minecraft:crafting_shapeless`
    -   `minecraft:crafting_shaped`
    -   `minecraft:crafting_transmute`
    -   `minecraft:smelting`
    -   `minecraft:blasting`
    -   `minecraft:smoking`
    -   `minecraft:campfire_cooking`
    -   `minecraft:stonecutting`
    -   `minecraft:smithing_transform`
    -   `minecraft:smithing_trim`
-   Removed unused `group` field from recipes without a recipe book:
    -   `minecraft:stonecutting`
    -   `minecraft:smithing_transform`
    -   `minecraft:smithing_trim`
-   Renamed the following stonecutter recipes, along with the relevant advancement:
    -   `minecraft:chiseled_stone_bricks_stone_from_stonecutting` is renamed to `minecraft:chiseled_stone_bricks_from_stone_stonecutting`
    -   `minecraft:end_stone_brick_slab_from_end_stone_brick_stonecutting` is renamed to `minecraft:end_stone_brick_slab_from_end_stone_bricks_stonecutting`
    -   `minecraft:end_stone_brick_stairs_from_end_stone_brick_stonecutting` is renamed to `minecraft:end_stone_brick_stairs_from_end_stone_bricks_stonecutting`
    -   `minecraft:end_stone_brick_wall_from_end_stone_brick_stonecutting` is renamed to `minecraft:end_stone_brick_wall_from_end_stone_bricks_stonecutting`
    -   `minecraft:mossy_stone_brick_slab_from_mossy_stone_brick_stonecutting` is renamed to `minecraft:mossy_stone_brick_slab_from_mossy_stone_bricks_stonecutting`
    -   `minecraft:mossy_stone_brick_stairs_from_mossy_stone_brick_stonecutting` is renamed to `minecraft:mossy_stone_brick_stairs_from_mossy_stone_bricks_stonecutting`
    -   `minecraft:mossy_stone_brick_wall_from_mossy_stone_brick_stonecutting` is renamed to `minecraft:mossy_stone_brick_wall_from_mossy_stone_bricks_stonecutting`
    -   `minecraft:prismarine_brick_slab_from_prismarine_stonecutting` is renamed to `minecraft:prismarine_brick_slab_from_prismarine_bricks_stonecutting`
    -   `minecraft:prismarine_brick_stairs_from_prismarine_stonecutting` is renamed to `minecraft:prismarine_brick_stairs_from_prismarine_bricks_stonecutting`
    -   `minecraft:quartz_slab_from_stonecutting` is renamed to `minecraft:quartz_slab_from_quartz_block_stonecutting`
    -   `minecraft:stone_brick_walls_from_stone_stonecutting` is renamed to `minecraft:stone_brick_wall_from_stone_stonecutting`

**`minecraft:crafting_transmute`**

-   Recipes with this type can now accept multiple items matched by the `material` ingredient

Added fields:

-   `material_count` - integer range describing the amount of items matched by the `material` ingredient
    -   Must be a subrange of `[2,8]`
    -   Default: `[1,1]` (i.e. exactly one item)
-   `add_material_count_to_result` - boolean field (default: `false`)
    -   When `true`, the amount of slots containing items matched by the `material` ingredient will be added to the final count of the result

**`minecraft:crafting_dye`**

-   Replaces `minecraft:crafting_special_armordye`
-   Output:
    -   This recipe will first mix the current value of the `minecraft:dyed_color` component from the item matched by the `target` ingredient with the `minecraft:dye` component values from the items matched by the `dye` ingredients
    -   Result will be built by transmuting the item matched by the `target` ingredient into the `result` item stack and then applying the new value of the `minecraft:dyed_color` component

Fields:

-   `category` - crafting book category, one of `building`, `redstone`, `equipment`, `misc,` default: `misc`
-   `group` - string value used for grouping recipes in the crafting book, default: empty string
-   `show_notification` - optional boolean describing if a popup should be shown when this recipe is unlocked, default: `true`
-   `target` - ingredient (was harcoded to `#dyeable` tag)
-   `dye` - ingredient (was hardcoded to Dye items)
    -   The `minecraft:dye` component is required on matching items for the whole recipe to match
-   `result` - resulting item stack (was always a copy of the item matched by the `target` ingredient)

**`minecraft:crafting_imbue`**

-   Replaces `minecraft:crafting_special_tippedarrow`
-   Matches a single `source` ingredient surrounded by eight `material` ingredients
-   Output:
    -   This recipe will copy the `minecraft:potion_contents` component value from the item matched by the `source` ingredient to the resulting stack

Fields:

-   `category` - crafting book category, one of `building`, `redstone`, `equipment`, `misc,` default: `misc`
-   `group` - string value used for grouping recipes in the crafting book, default: empty string
-   `show_notification` - optional boolean describing if a popup should be shown when this recipe is unlocked, default: `true`
-   `source` - ingredient (was hardcoded to `minecraft:lingering_potion`)
-   `material` - ingredient (was hardcoded to `minecraft:arrow`)
-   `result` - resulting item stack (was hardcoded to eight `minecraft:tipped_arrow`s)

**`minecraft:crafting_special_bannerduplicate`**

-   Ingredients can now be restrained
-   Output can now be configured
-   The recipe still only works for Banner items
-   Removed unused `category` field
-   Added fields:
    -   `banner` - ingredient to be used for both source and target items (was hardcoded to any Banner item)
    -   `result` - resulting item stack (was always a copy of the Banner item with non-empty pattern)
-   Output:
    -   The recipe finds the first Banner item matched by the `banner` ingredient and treats it as the source Banner
    -   Result will be built by transmuting the source Banner into the `result` item stack
    -   The source Banner will be kept in the crafting grid

**`minecraft:crafting_special_bookcloning`**

-   Ingredients and output can now be configured
-   Removed unused `category` field
-   Added fields:
    -   `source` - ingredient to be used as a source book
        -   The `minecraft:written_book_contents` component is required on the matching item for the whole recipe to match
    -   `material` - ingredient to target the item to be cloned (was hardcoded to `#book_cloning_target` tag
    -   `allowed_generations` - integer range describing allowed value of the `generation` field of `minecraft:written_book_contents` component on the item matched by the `material` ingredient
        -   Must be a subrange of `[0,2]`
        -   Default: `[0,1]` (i.e. accepting original and first copies, but not copies of a copy)
    -   `result` - resulting item stack (was always a copy of the item matched by the `source` ingredient)
-   Output:
    -   The recipe will first take the value of `minecraft:written_book_contents` component in the item matched by the `source` ingredient
    -   Field `generation` in `minecraft:written_book_contents` will be incremented by one
        -   The recipe will not yield a result if the value of `generation` is `2` or more
    -   Result will be built by transmuting item matched by the `source` ingredient to the `result` item stack and then applying the new value of `minecraft:written_book_contents` component
    -   Number of items matched by the `material` ingredient beyond the first one will be added to the resulting stack size
    -   The original item matched by the `source` ingredient will be kept in the crafting grid

**`minecraft:crafting_decorated_pot`**

-   Ingredients and result can now be configured
-   Removed unused `category` field
-   Added fields:
    -   `back`, `left`, `right`, `front` - ingredients (was hardcoded to `#decorated_pot_ingredients`)
    -   `result` - resulting item stack (was hardcoded to a single `minecraft:decorated_pot`)
-   Other functionality remains unchanged, i.e. items matched by ingredients will be added to the matching fields in the `minecraft:pot_decorations` component of the resulting stack

**`minecraft:crafting_special_firework_rocket`**

-   Ingredients and result can now be configured
-   Removed unused `category` field
-   Added fields:
    -   `shell` - ingredient (was hardcoded to `minecraft:paper`)
    -   `fuel` - ingredient (was hardcoded to `minecraft:gunpowder`)
    -   `star` - ingredient (was hardcoded to `minecraft:firework_star`)
    -   `result` - resulting item stack (was hardcoded to three `minecraft:firework_rocket`s)
-   Outout:
    -   Exactly one stack matching the `shell` ingredient must be present
    -   The number of stacks matching the `fuel` ingredient will control the `flight_duration` field
    -   The `explosions` field will be copied from the `minecraft:firework_explosion` component of the `star` ingredient (if any)

**`minecraft:crafting_special_firework_star_fade`**

-   Ingredients can now be configured
-   Removed unused `category` field
-   The recipe will now use the `minecraft:dye` component instead of a hardcoded mapping of Dye items to colors
-   Added fields:
    -   `target` - ingredient (was hardcoded to `minecraft:firework_star`)
    -   `dye` - ingredient (was hardcoded to Dye items)
        -   The `minecraft:dye` component is required on matching items for the whole recipe to match
    -   `result` - resulting item stack (was always a copy of the item matched by the `target` ingredient)
-   Output:
    -   This recipe will find the current value of the `minecraft:firework_explosion` component from the item matched by the `target` ingredient
    -   The `fade_colors` field of the `minecraft:dye` component will be set to the values from the items matched by the `dye` ingredients
    -   Result will be built by transmuting item matched by the `target` ingredient into the `result` item stack and then applying the new value of `minecraft:firework_explosion` component

**`minecraft:crafting_special_firework_star`**

-   Ingredients and result can now be configured
-   Removed unused `category` field
-   Added fields:
    -   `trail` - ingredient (was hardcoded to `minecraft:diamond`)
    -   `twinkle` - ingredient (was hardcoded to `minecraft:glowstone_dust`)
    -   `fuel` - ingredient (was hardcoded to `minecraft:gunpowder`)
    -   `dye` - ingredient (was hardcoded to Dye items)
        -   The `minecraft:dye` component is required on matching items for the whole recipe to match
    -   `shapes` - a map of shapes to ingredients
        -   Allowed keys are the same as the ones for the `shape` field in the `minecraft:firework_explosion` component (i.e. `small_ball`, `large_ball`, `star`, `creeper`, `burst`)
        -   Was hardcoded to: `minecraft:fire_charge` - `large_ball`, `minecraft:feather` - `burst`, `minecraft:gold_nugget` - `star`, any Skull or Head - `creeper`
    -   `result` - resulting item stack (was hardcoded to three `minecraft:firework_star`)
-   The recipe will now use the `minecraft:dye` component instead of a hardcoded mapping of Dye items to colors
-   Output:
    -   Exactly one stack matching the `fuel` ingredient must be present
    -   Result will be based on the `result` field, with the contents of the `minecraft:firework_explosion` component built with following values:
        -   The values of the `minecraft:dye` component of items matched by the `dye` ingredient will be added to the `colors` field
        -   If an item matched by the `trail` ingredient is present, the `has_trail` field will be set to `true`
        -   If an item matched by the `twinkle` ingredient is present, the `has_twinkle` field will be set to `true`
        -   The `shape` field will be set based on the item matched by any of ingredients in the `shape` field (or `small_ball` if none is found)

**`minecraft:crafting_special_mapextending`**

-   Ingredients and output can now be configured
-   Removed unused `category` field
-   Added fields:
    -   `map` - ingredient (was hardcoded to `minecraft:filled_map` with `minecraft:map_id` components)
        -   `minecraft:map_id` component is required on the matching map item for the whole recipe to match
    -   `material` - ingredient (was hardcoded to `minecraft:paper`)
    -   `result` - resulting item stack (was always a copy of the item matched by the `map` ingredient)
-   Output:
    -   The recipe finds the item matched by the `map` ingredient with the `minecraft:map_id` component set
    -   Result will be built by transmuting the source item into the `result` item stack
    -   `minecraft:map_post_processing` component will be set on the result item
    -   The source item will be kept in the crafting grid

**`minecraft:crafting_special_shielddecoration`**

-   Ingredients and output can now be configured
-   Removed unused `category` field
-   Added fields:
    -   `banner` - ingredient (was hardcoded to any Banner item)
        -   will only match if the item is a Banner
    -   `target` - ingredient (was hardcoded to `minecraft:shield`)
        -   `minecraft:banner_patterns` component must be not set or be empty for the whole recipe to match
    -   `result` - resulting item stack (was always a copy of the item matched by the `target` ingredient)
-   Functionality remains unchanged, i.e. this recipe will apply the following changes to the copy of the item matched by the `target` ingredient:
-   Output:
    -   Result will be built by transmuting the item matched by the `target` ingredient into the `result` item stack and then:
        -   copying the `minecraft:banner_patterns` component from the item matched by the `banner` ingredient
        -   setting the `minecraft:base_color` component based on the type of the Banner matched by the `banner` ingredient

### Tags

**Item Tags**

-   Added `#dyes` - helper tag containing vanilla dyes
-   Added `#loom_dyes` - items that are allowed in the Loom screen to set pattern colors
    -   The Loom screen also requires the `minecraft:dye` component to be present on item stacks
-   Added `#loom_patterns` - items are allowed in the Loom screen to unlock patterns
    -   The Loom screen also requires the `minecraft:provides_banner_patterns` component to be present on item stacks
-   Added `#cat_collar_dyes` - items that can be used to dye a pet Cat's collar
    -   The color will be taken from the `minecraft:dye` component of the used item stack
-   Added `#wolf_collar_dyes` - items that can be used to dye a pet Wolf's collar
    -   The color will be taken from the `minecraft:dye` component of the used item stack
-   Added `#cauldron_can_remove_dye` - items that can be used on water-filled Cauldron to remove `minecraft:dyed_color` component
-   Removed `#dyeable` tag

**Entity Tags**

-   Added `#cannot_be_age_locked` to define which baby mobs that age that can not have its aging stopped using Golden Dandelion

## Resource Pack Version 79

-   The Glow particles emitted by Glow Squids, Lightning Rods, blocks being waxed, unwaxed and scraped is now rendered as opaque, since they never actually used translucency
-   Removed `demo_background.png` in favor of `popup/background.png` sprite

### Block Sprites

-   Added new block textures:
    -   `block/golden_dandelion.png`

### Sounds

-   Added new sound events for the Chicken:
    -   `entity.baby_chicken.ambient`
    -   `entity.baby_chicken.hurt`
    -   ;;`;;entity.baby;;_;;chicken.death
-   Added new sound events for Golden Dandelion:
    -   `item.golden_dandelion.use`
    -   `item.golden_dandelion.unuse`

## Fixed bugs in 26.1 Snapshot 5

-   [MC-102774](https://bugs.mojang.com/browse/MC-102774) You can respawn the ender dragon with only two end crystals
-   [MC-163978](https://bugs.mojang.com/browse/MC-163978) Mobs can spawn on moving blocks
-   [MC-260148](https://bugs.mojang.com/browse/MC-260148) show;;_;;notification only works for shaped crafting recipes
-   [MC-305145](https://bugs.mojang.com/browse/MC-305145) Emissive elements of items are invisible in the GUI
-   [MC-305388](https://bugs.mojang.com/browse/MC-305388) Bees never cease to be angry
-   [MC-305457](https://bugs.mojang.com/browse/MC-305457) The targeted fluid is always displayed as "empty" in the debug overlay
-   [MC-305692](https://bugs.mojang.com/browse/MC-305692) The World Options menu does not display or update properly for clients connected to dedicated servers
-   [MC-305693](https://bugs.mojang.com/browse/MC-305693) Smelting recipes do not add the correct count of items to the output
-   [MC-305698](https://bugs.mojang.com/browse/MC-305698) Some functions fail to load due to "components not bound yet"
-   [MC-305732](https://bugs.mojang.com/browse/MC-305732) Dedicated server operators can make all monsters despawn unintentionally with the World Options screen
-   [MC-305847](https://bugs.mojang.com/browse/MC-305847) Closed captions for baby horses are untranslated
-   [MC-305850](https://bugs.mojang.com/browse/MC-305850) Translucent blocks and fluids are no longer visible behind translucent particles if "Improved Transparency" is disabled
-   [MC-305886](https://bugs.mojang.com/browse/MC-305886) Unused sound event 'entity.baby;;_;;horse.fall'
-   [MC-305888](https://bugs.mojang.com/browse/MC-305888) Turtle eggs no longer hatch in the Nether or the End

---

# Minecraft 26.1 Snapshot 4

Earlier today we pranced into the shipping room in order to bring you the fourth snapshot of 26.1, featuring an equestrian batch of game drop cuteness. With this week's release, baby mounts are getting an adorable makeover! Donkeys. Mules. Every single horse variant. All of these tiny cuties are galloping into the Overworld looking tinier and cuter than ever!

Happy mining!

## New Features

-   Added new baby sounds for Horse

## Changes

-   Revamped the visuals of more baby mobs
-   Baby chicken wing texture has been updated/fixed

### Baby Mobs

-   Updated the models and textures of the following baby mobs:
    -   Horse
        -   Increased the bounding box of baby Horses to better fit the new model
    -   Donkey
    -   Mule
    -   Zombie Horse
        -   Increased the bounding box of baby Zombie Horses to better fit the new model
        -   Can only be spawned in Creative mode or by using commands
    -   Skeleton Horse
        -   Increased the bounding box of baby Skeleton Horses to better fit the new model
        -   Can only be spawned in Creative mode or by using commands

## Technical Changes

-   The Data Pack version is now 97.1
-   The Resource Pack version is now 78.1

## Data Pack Version 97.1

-   Villager and Piglin inventory slots can now only be accessed using `mob.inventory.*`. `villager.*` and `piglin.*` has been removed

### World Clocks

-   Added `minecraft:the_end` world clock to The End dimension
    -   It now controls the sky flashes in The End

### Tags

**Block Tags**

-   Added the following tags which determine which blocks a category of vegetation can be placed on and survive
    -   `#supports_stem_fruit`
    -   `#supports_pumpkin_stem_fruit`
    -   `#supports_melon_stem_fruit`

## Resource Pack Version 78.1

### Entity Textures

-   Added new entity textures:
    -   `entity/horse/donkey_baby.png`
    -   `entity/horse/horse_black_baby.png`
    -   `entity/horse/horse_brown_baby.png`
    -   `entity/horse/horse_chestnut_baby.png`
    -   `entity/horse/horse_creamy_baby.png`
    -   `entity/horse/horse_darkbrown_baby.png`
    -   `entity/horse/horse_gray_baby.png`
    -   `entity/horse/horse_blackdots_baby.png`
    -   `entity/horse/horse_markings_white_baby.png`
    -   `entity/horse/horse_markings_whitedots_baby.png`
    -   `entity/horse/horse_markings_whitefield_baby.png`
    -   `entity/horse/horse_skeleton_baby.png`
    -   `entity/horse/horse_white_baby.png`
    -   `entity/horse/horse_zombie_baby.png`
    -   `entity/horse/mule_baby.png`
-   Added new sound events for the Horse:
    -   `entity.baby_horse.ambient`
    -   `entity.baby_horse.hurt`
    -   `entity.baby_horse.death`
    -   `entity.baby_horse.angry`
    -   `entity.baby_horse.eat`
    -   `entity.baby_horse.fall`
    -   `entity.baby_horse.land`
    -   `entity.baby_horse.step`
    -   `entity.baby_horse.breathe`

## Fixed bugs in 26.1 Snapshot 4

-   [MC-131745](https://bugs.mojang.com/browse/MC-131745) Shipwrecks sometimes generate split into different variants at chunk boundaries
-   [MC-298136](https://bugs.mojang.com/browse/MC-298136) The aura of beacon beams now always renders behind block entities
-   [MC-302635](https://bugs.mojang.com/browse/MC-302635) Semi-transparent blocks render in front of solid blocks when viewed through semi-transparent blocks being pushed by a piston
-   [MC-305134](https://bugs.mojang.com/browse/MC-305134) "villager._" and "piglin._" can both test both villagers' and piglins' inventories
-   [MC-305510](https://bugs.mojang.com/browse/MC-305510) The top texture of stripped spruce logs is now inconsistent with Bedrock Edition
-   [MC-305632](https://bugs.mojang.com/browse/MC-305632) The minimum prices for enchanted books traded by librarians are inconsistent with the established price calculation formula
-   [MC-305674](https://bugs.mojang.com/browse/MC-305674) You can sell water bottles to wandering traders up to 12 times, instead of 2
-   [MC-305675](https://bugs.mojang.com/browse/MC-305675) Even when "Villager Trade Rebalance" is enabled, master armorers still sell diamond armor without buying diamonds
-   [MC-305676](https://bugs.mojang.com/browse/MC-305676) When "Villager Trade Rebalance" is enabled, master desert armorers sell diamond leggings for 4 diamonds instead of 3 diamonds
-   [MC-305677](https://bugs.mojang.com/browse/MC-305677) When "Villager Trade Rebalance" is enabled, master savanna armorers sell diamond chestplates for 6 emeralds and 2 diamonds instead of 8 emeralds and 3 diamonds
-   [MC-305691](https://bugs.mojang.com/browse/MC-305691) Villagers have insomnia
-   [MC-305695](https://bugs.mojang.com/browse/MC-305695) Piglins spawned from spawn eggs now immediately hunt
-   [MC-305699](https://bugs.mojang.com/browse/MC-305699) Piglins in groups fail to initiate hoglin hunting behavior
-   [MC-305700](https://bugs.mojang.com/browse/MC-305700) Hoglins and zoglins no longer attack
-   [MC-305708](https://bugs.mojang.com/browse/MC-305708) Sugar cane can no longer be placed on red sand
-   [MC-305711](https://bugs.mojang.com/browse/MC-305711) Wardens spawned from spawn eggs now immediately burrow into the ground
-   [MC-305719](https://bugs.mojang.com/browse/MC-305719) Iron golems now spawn in abundance
-   [MC-305743](https://bugs.mojang.com/browse/MC-305743) When the "Villager Trade Rebalance" experiment is enabled, novice armorers sell iron boots for 5 iron ingots
-   [MC-305744](https://bugs.mojang.com/browse/MC-305744) When the "Villager Trade Rebalance" experiment is enabled, apprentice armorers sell iron helmets instead of iron leggings or chestplates
-   [MC-305747](https://bugs.mojang.com/browse/MC-305747) When the "Villager Trade Rebalance" experiment is enabled, journeyman armorers sell chainmail chestplates instead of bells
-   [MC-305767](https://bugs.mojang.com/browse/MC-305767) Melons and pumpkins now grow only on farmland

---

