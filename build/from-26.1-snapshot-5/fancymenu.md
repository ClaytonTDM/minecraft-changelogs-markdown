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

# Minecraft 26.1 Snapshot 3

We're back in action with another Snapshot! In this week's release we're making it possible to access game rules from the in-game pause screen, through the new world options button. On the data pack side of things, we're introducing a new concept of world clocks, which is an expansion of the work we did on timelines last year. For more information about world clocks and more, browse the full changelog below.

Happy mining!

## Changes

-   Additional tweaks to JVM configuration

### Minor Tweaks to Blocks, Items and Entities

-   The Tripwire texture is now rendered as alpha cutout instead of transparent

### UI

**Debug Screen**

-   A `day_count` debug entry has been split from `local_difficulty`

**Game Rules**

-   The Game Rules screen is now accessible in-game through a new World Options screen in the pause menu
-   A search bar has been added to the top of the Game Rules screen, both in-game and in the world creation menu

**World Options**

The difficulty button in the pause menu has been replaced with a button leading to a new screen - World Options.

-   The World Options screen contains the difficulty button as well as a button for changing Game Rules
-   The Game Rules screen is available for all operators and otherwise disabled

## Technical Changes

-   The Data Pack version is now 97
-   The Resource Pack version is now 78

## Data Pack Version 97

-   Added new block tags
-   Added new fluid tags
-   Changed format of `time` command to work with World Clocks and Timelines
-   Updated `time_check` condition to specify a World Clock

### World Clocks

World Clocks contain an internal time that increases every tick. They can be defined in data packs under the `world_clock` registry (i.e. found under `data/<namespace>/world_clock/<id>.json`)

-   World Clocks can be paused or resumed, and the time of the clock can be changed or queried from the `time` command
-   Format: object with no fields

### Timelines

-   Added a `clock` field: a World Clock ID, specifies which World Clock the timeline is tied to
    -   This field is required, but to match previous behavior the `minecraft:overworld` clock can be used
-   Added an optional `time_markers` field, an optional map between namespaced Time Marker IDs and either an int or a Time Marker object,
    -   Format:
        -   Non-negative int, the tick that the time marker marks
        -   Or object with fields:
            -   `ticks`: int between `0` and `period_ticks`, the tick that the time marker marks
            -   `show_in_commands`: optional boolean, specifies whether the Time Marker will show up in command suggestions
                -   Default: `false`

**Time Markers**

Time Markers assign a particular name to a specific (optionally repeating) point in time for a specific World Clock. Time Markers replace the previously predetermined names that could be used by `/time set`, for example `day` or `night`.

Time Markers will exist within the context of a specific World Clock. This means that even though the different Time Markers are defined by different Timelines, only one Time Marker can exist with a particular id for a particular World Clock. It also means that two World Clocks can have a Time Marker with the same name.

**Built-in uses of Time Markers**

Some Time Markers are used to drive Vanilla game behavior. Usually, they are configured to not show up in `/time` commands.

-   `minecraft:wake_up_from_sleep` - the time to advance the dimension's default clock to when players in that dimension wake up after sleeping
-   `minecraft:roll_village_siege` - the time of the dimension's default clock at which the random chance for a Zombie Village siege to occur should be evaluated

### Commands

**Changes to `swing`**

-   Both arguments can now be omitted and will fall back to the following defaults:
    -   The entity selector will be `@s` if omitted
    -   Which hand to swing will be `mainhand` if omitted

**Changes to `time`**

-   The `time` command is now based on World Clocks
    -   A clock can be optionally specified as an input for the time command with `time of <clock> ...`
    -   If the clock is not specified (`/time ...` as before), the default clock for the dimension is used
-   The return value (e.g. from `/execute store`) from the `set` and `add` subcommands is now the total elapsed ticks of the clock instead of the current time of day

Syntax:

-   `time [of <clock>] set <time>` - sets the total elapsed ticks of the clock
-   `time [of <clock>] set <timemarker>` - advances the clock forward to the next occurrence of the time marker
    -   For the `minecraft:overworld` clock, the available time markers are: `day`, `noon`, `night`, and `midnight`
-   `time [of <clock>] add <time>` - adds ticks to the clock, can be a negative or a positive number
-   `time [of <clock>] pause` - pauses the clock
-   `time [of <clock>] resume` - resumes the clock
-   `time [of <clock>] query <timeline>` - displays and returns the current number of ticks within the timeline's period
-   `time [of <clock>] query <timeline> repetitions` - displays and returns the number of times the timeline's period has repeated
-   `time [of <clock>] query time` - displays and returns the total elapsed ticks of the clock
-   `time query gametime` - as before, the total elapsed ticks within the world (unaffected by changes made to clocks using `/time`)

### Game Test Environments

**Replaced `time_of_day` with `clock_time`**

-   Added a new required field `clock`: World Clock ID, the clock within which to set time (from the existing `time` field)

### Predicates

**`minecraft:time_check` Loot Predicate**

-   Added `clock` field: a World Clock ID, specifies which World Clock the time check should be done for

### Recipes

-   `result` field should now be more consistent across all recipe types that contain it
    -   It will now accept short form (e.g. `"minecraft:foo"`, which is equivalent to `{"id":"minecraft:foo", "count": 1}`)
    -   For recipe types `smelting`, `blasting`, `smoking` and `campfire_cooking` this field now also accepts `count` field

### World Generation

**Dimension Types**

-   Added field:
    -   `default_clock`: optional World Clock ID
        -   Specifies the default clock that will be used for the `time` command.
            -   If not specified, the `time` command will require an explicit clock argument
        -   Also specifies the clock to which `minecraft:wake_up_from_sleep` and `minecraft:roll_village_siege` time markers apply
            -   If not specified, those time markers will never apply in that dimension

### Tags

**Block Tags**

-   Added the following tags which determine which blocks a category of vegetation can be placed on and survive
    -   `#supports_vegetation` which provides support to the following blocks:
        -   Bush
        -   Short Grass
        -   Tall Grass
        -   Fern
        -   Large Fern
        -   Pitcher Plant
        -   Sunflower
        -   Lilac
        -   Rose Bush
        -   Peony
        -   Eyeblossom
        -   Firefly Bush
        -   Pink Petals
        -   Wildflowers
        -   Dandelion
        -   Torchflower
        -   Poppy
        -   Blue Orchid
        -   Allium
        -   Azure Bluet
        -   Red Tulip
        -   Orange Tulip
        -   White Tulip
        -   Pink Tulip
        -   Oxeye Daisy
        -   Cornflower
        -   Sweet Berry Bush
        -   Oak Sapling
        -   Spruce Sapling
        -   Birch Sapling
        -   Jungle Sapling
        -   Acacia Sapling
        -   Cherry Sapling
        -   Dark Oak Sapling
        -   Pale Oak Sapling
    -   `#supports_crops` which provides support to the following crops at all growth stages:
        -   Wheat
        -   Carrot
        -   Potato
        -   Beetroot
        -   Torchflower Crop
        -   Pitcher Plant Crop
    -   `#supports_stem_crops`
    -   `#supports_pumpkin_stem`
    -   `#supports_melon_stem`
    -   `#supports_sugar_cane`
    -   `#supports_sugar_cane_adjacently`
        -   Which blocks satisfy adjacency support requirements for Sugar Cane
    -   `#supports_cactus`
    -   `#supports_chorus_plant`
    -   `#supports_chorus_flower`
    -   `#supports_nether_sprouts`
    -   `#supports_azalea`
    -   `#supports_warped_fungus`
    -   `#supports_crimson_fungus`
    -   `#supports_mangrove_propagule`
    -   `#supports_hanging_mangrove_propagule`
    -   `#supports_nether_wart`
    -   `#supports_warped_roots`
    -   `#supports_crimson_roots`
    -   `#supports_wither_rose`
    -   `#supports_cocoa`
    -   `#supports_lily_pad`
    -   `#supports_frogspawn`
        -   Empty by default
    -   `#support_override_cactus_flower`
        -   Cactus Flowers can be placed on blocks in this tag even if they do not have a sturdy top face
-   Added the following tags which determine which blocks are not able to support specific categories of vegetation
    -   `#cannot_support_seagrass`
    -   `#cannot_support_kelp`
-   Renamed the following tags for consistency:
    -   `#dry_vegetation_may_place_on` -> `#supports_dry_vegetation`
    -   `#bamboo_plantable_on` -> `#supports_bamboo`
    -   `#small_dripleaf_placeable` -> `#supports_small_dripleaf`
    -   `#big_dripleaf_placeable` -> `#supports_big_dripleaf`
    -   `#mushroom_grow_block` -> `#overrides_mushroom_light_requirement`
        -   Mushrooms cannot survive without a light level below 13 if not in the above tag
    -   `#snow_layer_can_survive_on` -> `#support_override_snow_layer`
        -   Snow layers can be placed on blocks in this tag even if they do not have a top full face
    -   `#snow_layer_cannot_survive_on` -> `#cannot_support_snow_layer`
-   Added `#grows_crops` which defines which blocks beneath allow the following crops to grow:
    -   Wheat
    -   Carrot
    -   Potato
    -   Beetroot
    -   Torchflower Crop
    -   Pitcher Plant Crop
    -   Pumpkin Stem
    -   Melon Stem
-   Added the following tags to define which blocks can start particular types of Bubble Columns
    -   `#enables_bubble_column_drag_down`
        -   Magma Block by default
    -   `#enables_bubble_column_push_up`
        -   Soul Sand by default

**Fluid Tags**

-   Added tags to determine which fluids can support the following blocks:
    -   `#supports_lily_pad`
    -   `#supports_frogspawn`
-   Added `#supports_sugar_cane_adjacently`
    -   Which fluids satisfy adjacency support requirements for Sugar Cane
-   Added `#bubble_columns_can_occupy` fluid tag to define which fluids a bubble column can occupy with `water` as default

## Resource Pack Version 78

-   The Tripwire texture is now rendered as alpha cutout instead of transparent

## Fixed bugs in 26.1 Snapshot 3

-   [MC-297536](https://bugs.mojang.com/browse/MC-297536) Z-fighting occurs on the debug crosshair
-   [MC-299992](https://bugs.mojang.com/browse/MC-299992) Unexpected behavior when giving or testing for an item with certain components manually specified as their default values
-   [MC-305105](https://bugs.mojang.com/browse/MC-305105) The spear in an entity's main hand gets animated when their off hand arm is swung using /swing
-   [MC-305156](https://bugs.mojang.com/browse/MC-305156) Dialog elements are not displayed until the UI is refreshed
-   [MC-305251](https://bugs.mojang.com/browse/MC-305251) Breezes are aggressive toward every mob
-   [MC-305261](https://bugs.mojang.com/browse/MC-305261) The enchant;;_;;with;;_;;levels and enchant;;_;;randomly functions can crash the game
-   [MC-305292](https://bugs.mojang.com/browse/MC-305292) Copper chests use the Christmas present texture
-   [MC-305459](https://bugs.mojang.com/browse/MC-305459) Villagers spawned from spawn eggs use the biome at the world origin (0, 0, 0) for their variant
-   [MC-305540](https://bugs.mojang.com/browse/MC-305540) Wandering traders sell pumpkins instead of kelp for 3 emeralds
-   [MC-305577](https://bugs.mojang.com/browse/MC-305577) Piglins no longer flee from greater numbers of hoglins

---

