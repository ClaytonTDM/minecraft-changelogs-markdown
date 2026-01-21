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

# Minecraft 26.1 Snapshot 2

We're back from vacation and the lights are back on in the shipping room! In this very first Snapshot of the new year, we're bringing you the first features from our cutest game drop yet! Befriend floofier wolf pups, kittens, piglets, calves, lambs, baby chickens, baby ocelots, and rabbits; craft name tags, and hear heart-melting mob sounds!

Happy mining!

## Changes

-   Name Tags are now craftable and can be crafted with 1 Paper and 1 of any Metal Nugget
-   Zombie Horses no longer panic when hurt
-   Tweaked default JVM options
-   Added new baby sounds for Wolf, Cat and Pig
-   Revamped the visuals of several baby mobs
-   The programmer art rabbit textures have been removed following the re-modelling of the rabbit

### Baby Mobs

-   Updated the models and textures of the following baby mobs:
    -   Cow
    -   Sheep
    -   Pig
    -   Cat
    -   Ocelot
    -   Mooshroom
    -   Wolf
    -   Chicken
        -   Tweaked the bounding box to align with the new model
    -   Rabbit
        -   Both adult and baby Rabbits also received new animations
        -   Tweaked the bounding box to align with the new model
-   Armor on baby Wolves and saddles on baby Pigs will no longer render

### Default JVM Options

-   The game now allocates 4 GB of RAM by default (up from 2 GB)
-   Garbage collection has been changed from G1GC to ZGC for compatible devices

> **Developer's Note**: _The default memory allocation has been bumped from 2GB to 4GB to make the game run smoother and reduce stutters. Furthermore, with generational ZGC, you should see a more stable framerate – especially when operating memory heavy tasks. If you're running Minecraft on a machine with less than 4GB of RAM – please refer to [this help article](https://help.minecraft.net/hc/en-us/articles/39083573916941-Fix-Minecraft-Java-Edition-Game-Crashes-by-Checking-Memory-Allocation). If you want to change the garbage collector – please refer to [this help article](https://help.minecraft.net/hc/en-us/articles/41950300066573-Change-the-Garbage-Collector-for-Minecraft-Java-Edition). Third-party launchers may not support these changes._

## Technical Changes

-   The Data Pack version is now 96
-   The Resource Pack version is now 77

## Data Pack Version 96

-   Wolf sound variants sound events in `wolf_sound_variant` has been moved into a new field `adult_sounds` and field `baby_sounds` was added

### Entity Data

-   The `current_explosion_impact_pos` and `current_impulse_context_reset_grace_time` fields from Players have been added to all mobs and the Armor Stand
-   The `ignore_fall_damage_from_current_explosion` field on Players has been removed

**Item Tags**

-   Added `#metal_nuggets` - Copper, Iron and Gold Nuggets

## Resource Pack Version 77

### Entity Textures

-   Added new entity textures:
    
    -   `entity/cat/cat_all_black_baby.png`
    -   `entity/cat/cat_black_baby.png`
    -   `entity/cat/cat_british_shorthair_baby.png`
    -   `entity/cat/cat_calico_baby.png`
    -   `entity/cat/cat_collar_baby.png`
    -   `entity/cat/cat_jellie_baby.png`
    -   `entity/cat/ocelot_baby.png`
    -   `entity/cat/cat_persian_baby.png`
    -   `entity/cat/cat_ragdoll_baby.png`
    -   `entity/cat/cat_red_baby.png`
    -   `entity/cat/cat_siamese_baby.png`
    -   `entity/cat/cat_tabby_baby.png`
    -   `entity/cat/cat_white_baby.png`
    -   `entity/chicken/chicken_cold_baby.png`
    -   `entity/chicken/chicken_temperate_baby.png`
    -   `entity/chicken/chicken_warm_baby.png`
    -   `entity/cow/cow_cold_baby.png`
    -   `entity/cow/cow_temperate_baby.png`
    -   `entity/cow/cow_warm_baby.png`
    -   `entity/cow/mooshroom_brown_baby.png`
    -   `entity/cow/mooshroom_red_baby.png`
    -   `entity/pig/pig_cold_baby.png`
    -   `entity/pig/pig_temperate_baby.png`
    -   `entity/pig/pig_warm_baby.png`
    -   `entity/rabbit/rabbit_black.png`
    -   `entity/rabbit/rabbit_brown.png`
    -   `entity/rabbit/rabbit_caerbannog.png`
    -   `entity/rabbit/rabbit_gold.png`
    -   `entity/rabbit/rabbit_salt.png`
    -   `entity/rabbit/rabbit_toast.png`
    -   `entity/rabbit/rabbit_white.png`
    -   `entity/rabbit/rabbit_white_splotched.png`
    -   `entity/sheep/sheep_baby.png`
    -   `entity/sheep/sheep_wool_baby.png`
    -   `entity/wolf/wolf_angry_baby.png`
    -   `entity/wolf/wolf_ashen_angry_baby.png`
    -   `entity/wolf/wolf_ashen_baby.png`
    -   `entity/wolf/wolf_ashen_tame_baby.png`
    -   `entity/wolf/wolf_baby.png`
    -   `entity/wolf/wolf_black_angry_baby.png`
    -   `entity/wolf/wolf_black_baby.png`
    -   `entity/wolf/wolf_black_tame_baby.png`
    -   `entity/wolf/wolf_chestnut_angry_baby.png`
    -   `entity/wolf/wolf_chestnut_baby.png`
    -   `entity/wolf/wolf_chestnut_tame_baby.png`
    -   `entity/wolf/wolf_collar_baby.png`
    -   `entity/wolf/wolf_rusty_angry_baby.png`
    -   `entity/wolf/wolf_rusty_baby.png`
    -   `entity/wolf/wolf_rusty_tame_baby.png`
    -   `entity/wolf/wolf_snowy_angry_baby.png`
    -   `entity/wolf/wolf_snowy_baby.png`
    -   `entity/wolf/wolf_snowy_tame_baby.png`
    -   `entity/wolf/wolf_spotted_angry_baby.png`
    -   `entity/wolf/wolf_spotted_baby.png`
    -   `entity/wolf/wolf_spotted_tame_baby.png`
    -   `entity/wolf/wolf_striped_angry_baby.png`
    -   `entity/wolf/wolf_striped_baby.png`
    -   `entity/wolf/wolf_striped_tame_baby.png`
    -   `entity/wolf/wolf_tame_baby.png`
    -   `entity/wolf/wolf_woods_angry_baby.png`
    -   `entity/wolf/wolf_woods_baby.png`
    -   `entity/wolf/wolf_woods_tame_baby.png`
-   Renamed the following entity textures:
    
    -   `entity/armorstand/wood.png` -> `entity/armorstand/armorstand.png`
    -   `entity/cat/all_black.png` -> `entity/cat/cat_all_black.png`
    -   `entity/cat/black.png` -> `entity/cat/cat_black.png`
    -   `entity/cat/british_shorthair.png` -> `entity/cat/cat_british_shorthair.png`
    -   `entity/cat/calico.png` -> `entity/cat/cat_calico.png`
    -   `entity/cat/jellie.png` -> `entity/cat/cat_jellie.png`
    -   `entity/cat/persian.png` -> `entity/cat/cat_persian.png`
    -   `entity/cat/ragdoll.png` -> `entity/cat/cat_ragdoll.png`
    -   `entity/cat/red.png` -> `entity/cat/cat_red.png`
    -   `entity/cat/siamese.png` -> `entity/cat/cat_siamese.png`
    -   `entity/cat/tabby.png` -> `entity/cat/cat_tabby.png`
    -   `entity/cat/white.png` -> `entity/cat/cat_white.png`
    -   `entity/chicken/cold_chicken.png` -> `entity/chicken/chicken_cold.png`
    -   `entity/chicken/temperate_chicken.png` -> `entity/chicken/chicken_temperate.png`
    -   `entity/chicken/warm_chicken.png` -> `entity/chicken/chicken_warm.png`
    -   `entity/copper_golem/exposed_copper_golem.png` -> `entity/copper_golem/copper_golem_exposed.png`
    -   `entity/copper_golem/exposed_copper_golem_eyes.png` -> `entity/copper_golem/copper_golem_eyes_exposed.png`
    -   `entity/copper_golem/oxidized_copper_golem_eyes.png` -> `entity/copper_golem/copper_golem_eyes_oxidized.png`
    -   `entity/copper_golem/weathered_copper_golem_eyes.png` -> `entity/copper_golem/copper_golem_eyes_weathered.png`
    -   `entity/copper_golem/oxidized_copper_golem.png` -> `entity/copper_golem/copper_golem_oxidized.png`
    -   `entity/copper_golem/weathered_copper_golem.png` -> `entity/copper_golem/copper_golem_weathered.png`
    -   `entity/cow/cold_cow.png` -> `entity/cow/cow_cold.png`
    -   `entity/cow/temperate_cow.png` -> `entity/cow/cow_temperate.png`
    -   `entity/cow/warm_cow.png` -> `entity/cow/cow_warm.png`
    -   `entity/cow/brown_mooshroom.png` -> `entity/cow/mooshroom_brown.png`
    -   `entity/cow/red_mooshroom.png` -> `entity/cow/mooshroom_red.png`
    -   `entity/fox/snow_fox.png` -> `entity/fox/fox_snow.png`
    -   `entity/fox/snow_fox_sleep.png` -> `entity/fox/fox_snow_sleep.png`
    -   `entity/frog/cold_frog.png` -> `entity/frog/frog_cold.png`
    -   `entity/frog/temperate_frog.png` -> `entity/frog/frog_temperate.png`
    -   `entity/frog/warm_frog.png` -> `entity/frog/frog_warm.png`
    -   `entity/llama/brown.png` -> `entity/llama/llama_brown.png`
    -   `entity/llama/creamy.png` -> `entity/llama/llama_creamy.png`
    -   `entity/llama/gray.png` -> `entity/llama/llama_gray.png`
    -   `entity/llama/spit.png` -> `entity/llama/llama_spit.png`
    -   `entity/llama/white.png` -> `entity/llama/llama_white.png`
    -   `entity/panda/aggressive_panda.png` -> `entity/panda/panda_aggressive.png`
    -   `entity/panda/brown_panda.png` -> `entity/panda/panda_brown.png`
    -   `entity/panda/lazy_panda.png` -> `entity/panda/panda_lazy.png`
    -   `entity/panda/playful_panda.png` -> `entity/panda/panda_playful.png`
    -   `entity/panda/weak_panda.png` -> `entity/panda/panda_weak.png`
    -   `entity/panda/worried_panda.png` -> `entity/panda/panda_worried.png`
    -   `entity/pig/cold_pig.png` -> `entity/pig/pig_cold.png`
    -   `entity/pig/temperate_pig.png` -> `entity/pig/pig_temperate.png`
    -   `entity/pig/warm_pig.png` -> `entity/pig/pig_warm.png`
    -   `entity/projectiles/spectral.png` -> `entity/projectiles/arrow_spectral.png`
    -   `entity/projectiles/tipped.png` -> `entity/projectiles/arrow_tipped.png`
    -   `entity/turtle/big_sea_turtle.png` -> `entity/turtle/turtle.png`
-   Moved the following entity textures:
    
    -   `entity/armadillo.png` -> `entity/armadillo/armadillo.png`
    -   `entity/banner_base.png` -> `entity/banner/banner_base.png`
    -   `entity/bat.png` -> `entity/bat/bat.png`
    -   `entity/beacon_beam.png` -> `entity/beacon/beacon_beam.png`
    -   `entity/blaze.png` -> `entity/blaze/blaze.png`
    -   `entity/dolphin.png` -> `entity/dolphin/dolphin.png`
    -   `entity/enchanting_table_book.png` -> `entity/enchantment/enchanting_table_book.png`
    -   `entity/end_gateway_beam.png` -> `entity/end_portal/end_gateway_beam.png`
    -   `entity/end_portal.png` -> `entity/end_portal/end_portal.png`
    -   `entity/endermite.png` -> `entity/endermite/endermite.png`
    -   `entity/experience_orb.png` -> `entity/experience/experience_orb.png`
    -   `entity/fishing_hook.png` -> `entity/fishing/fishing_hook.png`
    -   `entity/guardian.png` -> `entity/guardian/guardian.png`
    -   `entity/guardian_beam.png` -> `entity/guardian/guardian_beam.png`
    -   `entity/guardian_elder.png` -> `entity/guardian/guardian_elder.png`
    -   `entity/lead_knot.png` -> `entity/lead_knot/lead_knot.png`
    -   `entity/minecart.png` -> `entity/minecart/minecart.png`
    -   `entity/phantom.png` -> `entity/phantom/phantom.png`
    -   `entity/phantom_eyes.png` -> `entity/phantom/phantom_eyes.png`
    -   `entity/shield_base.png` -> `entity/shield/shield_base.png`
    -   `entity/shield_base_nopattern.png` -> `entity/shield/shield_base_nopattern.png`
    -   `entity/silverfish.png` -> `entity/silverfish/silverfish.png`
    -   `entity/snow_golem.png` -> `entity/snow_golem/snow_golem.png`
    -   `entity/spider_eyes.png` -> `entity/spider/spider_eyes.png`
    -   `entity/trident.png` -> `entity/trident/trident.png`
    -   `entity/trident_riptide.png` -> `entity/trident/trident_riptide.png`
    -   `entity/wandering_trader.png` -> `entity/wandering_trader/wandering_trader.png`
    -   `entity/witch.png` -> `entity/witch/witch.png`

### Sounds

-   Added new sound events for the Cat:
    -   `entity.baby_cat.ambient`
    -   `entity.baby_cat.hiss`
    -   `entity.baby_cat.hurt`
    -   `entity.baby_cat.death`
    -   `entity.baby_cat.eat`
    -   `entity.baby_cat.beg_for_food`
    -   `entity.baby_cat.purr`
    -   `entity.baby_cat.purreow`
    -   `entity.baby_cat.stray_ambient`
-   Added new sound events for the Pig:
    -   `entity.baby_pig.ambient`
    -   `entity.baby_pig.hurt`
    -   `entity.baby_pig.death`
    -   `entity.baby_pig.step`
-   Added new sound events for the Wolf:
    -   `entity.baby_wolf.ambient`
    -   `entity.baby_wolf.growl`
    -   `entity.baby_wolf.death`
    -   `entity.baby_wolf.hurt`
    -   `entity.baby_wolf.pant`
    -   `entity.baby_wolf.whine`
    -   `entity.baby_wolf.step`

## Fixed bugs in 26.1 Snapshot 2

-   [MC-302734](https://bugs.mojang.com/browse/MC-302734) Zombie horses constantly move in and out of water and burn to death
-   [MC-304361](https://bugs.mojang.com/browse/MC-304361) The heads of zombie nautiluses have a massive empty gap on the back
-   [MC-304705](https://bugs.mojang.com/browse/MC-304705) The E value in entity;;_;;render;;_;;stats in the debug overlay doesn't work
-   [MC-304761](https://bugs.mojang.com/browse/MC-304761) Spears' charge animation takes too long to rotate sideways for slower spears
-   [MC-305040](https://bugs.mojang.com/browse/MC-305040) Nautili spawned as a result of a player breeding two other nautili can despawn
-   [MC-305104](https://bugs.mojang.com/browse/MC-305104) The "Programmer Art" and "High Contrast" resource packs are listed as incompatible
-   [MC-305121](https://bugs.mojang.com/browse/MC-305121) Some expert level mason trades no longer generate
-   [MC-305130](https://bugs.mojang.com/browse/MC-305130) Farmers sell suspicious stews with 20 times the intended duration
-   [MC-305131](https://bugs.mojang.com/browse/MC-305131) Duplicate trade entries in journeyman level shepherd trades
-   [MC-305132](https://bugs.mojang.com/browse/MC-305132) Master level fletchers can now sell tipped arrows of thick, mundane, and awkward potions
-   [MC-305164](https://bugs.mojang.com/browse/MC-305164) Armorers now buy diamonds at expert level instead of journeyman
-   [MC-305175](https://bugs.mojang.com/browse/MC-305175) The Lunge enchantment now works at 6 hunger and above, instead of 7
-   [MC-305279](https://bugs.mojang.com/browse/MC-305279) Expert cleric sells glowstone instead of ender pearl

---

