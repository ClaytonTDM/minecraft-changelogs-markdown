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

# Minecraft 26.1 Snapshot 1

As the year draws to a close, we gather in the shipping room one more time to press the buttons that make snapshots happen! In this final release of 2025 we're (among other things) upgrading our runtime version of Java, giving villager trades the data-driven treatment, and adding a new swing command that swings the arms of entities. Finally, all our builds will now be unobfuscated moving forward.

Did we miss something? Oh, yeah! This snapshot marks the beginning of our new version numbering system for Minecraft on Java Edition. We'll see you next year for more snapshots and the eventual release of what will be Java Edition 26.1!

Happy mining!

## Changes

-   What trades are unlocked by villager professions are now determined using deterministic random sequences, like loot drops and barter loot
-   The algorithm that maps block and sky light levels to how bright things appear on screen has been fully rewritten
-   A new lightmap debug renderer was introduced, which can be enabled using the `F3 + 4` keybind

### Lightmap Algorithm Changes

-   The new algorithm is supposed to mostly provide the same overall results as before, but:
    -   It is simpler and more straightforward, and fixes multiple issues of the previous one, as listed in the Fixed Bugs section below
    -   The Darkness effect and world darkening effect of the Wither fight now works the same way in all dimensions
    -   The Night Vision effect now simply adds ambient light instead of scaling the resulting colors
        -   It means that fully dark areas no longer look brighter than areas lit by block or sky light
    -   More aspects of the algorithm such as block light tint, ambient light color and night vision color are now data-driven through environment attributes, as described in the Data Pack section below

### Lightmap Debug Renderer

-   A new debug renderer for the lightmap was added, which can be enabled using the `F3 + 4` keybind
-   It is mutually exclusive with FPS/TPS and networking charts
-   It shows the lightmap texture in real-time in the bottom right corner of the screen
-   The vertical axis of the texture represent sky light levels (0-15 from bottom to top)
-   The horizontal axis of the texture represent block light levels (0-15 from left to right)
-   The color of each pixel represents the resulting color that will be applied to blocks and entities lit with the corresponding block and sky light levels

### UI

**Debug Screen**

-   The `looking_at_block` and `looking_at_fluid` debug entries no longer show tags
-   New debug entries have been added:
    -   `looking_at_block_tags`
    -   `looking_at_fluid_tags`
    -   `looking_at_entity_tags`
-   Renamed debug entries:
    -   `looking_at_block` -> `looking_at_block_state`
    -   `looking_at_fluid` -> `looking_at_fluid_state`

## Technical Changes

-   The Data Pack version is now 95
-   If a server's disk space is low, a toast will now be shown to server operators
-   The game now requires Java 25
-   The included Java distribution is now the Microsoft build of OpenJDK 25

## Data Pack Version 95

-   Added data-driven registry for villager trades
-   Piglin inventory slots can now be accessed using `piglin.*` similar to how Villager inventories can be accessed using `villager.*`

### Data-driven Villager Trades

Trades offered by Villagers and Wandering Traders are now data-driven and can be customized by datapack developers

**Villager Trades**

-   Present in the `villager_trade` folder, represents a blueprint for trades which is used by Villagers and Wandering Traders to generate actual trades
-   Entry Format:
    -   `wants`, an object representing an item type and number of them needed to trade
        -   `id`, the id of the item
        -   `count`, an optional number provider representing how many of the item is needed for the trade
            -   Defaults to a constant `1`
        -   `components`, an optional component map representing the expected data components on the item
            -   Defaults to an empty map
    -   `additional_wants`, an optional object representing an additional item required by the merchant, has the same format as `wants`
    -   `gives`, an Item Stack representing the resulting item given by the merchant when trading
        -   Uses the existing format for Item Stacks
    -   `given_item_modifiers`, a optional list of Item Modifiers representing modifiers to apply to the item in `gives` such as enchantments or potions, used to add dynamism to the trade rather than hardcoding certain values
        -   Uses the existing format for Item Modifiers (also known as loot modifiers, item functions, loot functions...)
        -   If any of these returns an empty item the entire trade will be discarded
        -   Item Modifier references are not yet supported
        -   If the final item has a `stored_enchantment` component containing an enchantment in the `#double_trade_price` tag, then the count of `wants` is doubled
    -   `max_uses`, an optional number provider representing the maximum number of times a trade may be used
        -   Is set to `1` if the number provider returns a lower value
        -   Defaults to `4`
    -   `reputation_discount`, an number provider representing how much factors such as demand, discounts or penalties affects the cost represented by `wants`
        -   Is set to `0.0` if the number provider returns a lower value
        -   Defaults to `0.0`
    -   `xp`, an optional number provider representing the amount of xp a merchant gets when the trade is done
        -   Is set to `0` if the number provider returns a lower value
        -   Defaults to `1`
    -   `merchant_predicate`, a Predicate representing conditions on the merchant that need to be met for the trade to be offered
        -   Uses the existing format for Predicates (also known as loot conditions)
        -   Predicate references are not yet supported
    -   `double_trade_price_enchantments`, an optional enchantment id, list of namespaced enchantment IDs, or hash-prefixed enchantment tag representing enchantments that will double the additional cost from `minecraft:enchant_randomly` and `minecraft:enchant_with_levels` if they have `include_additional_cost_component` set to `true` and if the item has one of the provided values in its `minecraft:stored_enchantments` component

An example trade of an emerald and a book for an enchanted book offered only by Desert Villagers

    {
      "additional_wants": {
        "id": "minecraft:book"
      },
      "double_trade_price_enchantments": "#minecraft:double_trade_price",
      "given_item_modifiers": [
        {
          "function": "minecraft:enchant_randomly",
          "include_additional_cost_component": true,
          "only_compatible": false,
          "options": "#minecraft:trades/desert_common"
        },
        {
          "function": "minecraft:filtered",
          "item_filter": {
            "items": "minecraft:enchanted_book",
            "predicates": {
              "minecraft:stored_enchantments": [
                {}
              ]
            }
          },
          "on_fail": {
            "function": "minecraft:discard"
          }
        }
      ],
      "gives": {
        "count": 1,
        "id": "minecraft:enchanted_book"
      },
      "max_uses": 12.0,
      "merchant_predicate": {
        "condition": "minecraft:entity_properties",
        "entity": "this",
        "predicate": {
          "predicates": {
            "minecraft:villager/variant": "minecraft:desert"
          }
        }
      },
      "reputation_discount": 0.2,
      "wants": {
        "id": "minecraft:emerald"
      }
    }
    

**Trade Sets**

-   Present in the `trade_set` folder, they're groupings of trades offered by Villagers and Wandering Traders
-   We currently only have hardcoded ones available in `<profession>/level_<level>` for Villagers, as well as `wandering_trader/buying`, `wandering_trader/special`, `wandering_trader/common` for Wandering Traders
-   Entry Format:
    -   `trades`, a villager trade id, list of namespaced villager trade IDs, or hash-prefixed villager trade tag representing the trades that are part of this trade set
    -   `amount`, a number provider representing the amount of trades to be generated from this set when used
        -   If the generated number is greater than the number of available `trades` then it will only generate until all `trades` have been used once, unless `allow_duplicates` is set to `true`
    -   `allow_duplicates`, a boolean representing if the trade set can use the same Villager Trade multiple times to generate trades
        -   Defaults to `false`
    -   `random_sequence`, an optional named random sequence that determines which trades are generated
        -   Defaults to a non-deterministic random sequence

An example trade set offering 2 trades from the `#minecraft:armorer/level_1` tag, allowing duplicates

    {
      "amount": 2.0,
      "trades": "#minecraft:armorer/level_1",
      "random_sequence": "minecraft:trade_set/armorer/level_1",
      "allow_duplicates": true
    }
    

### Commands

**Added `swing`**

-   New command that enables swinging of entities arms
-   Not all entities support swing animation. `swing` will succeed for those entities, but clients will only display it when possible
-   For example, this makes it possible to swing Mannequin arms
-   Returns the amount of entities for which a swing was sent

Syntax: `/swing <entity selector> <mainhand|offhand>`

**`minecraft:visual/block_light_tint`**

Tint of the block light. Block light color start as dark grey at low light levels, becomes tinted by this attribute at medium levels and turns white at high levels. By default, it provides the yellowish tint of torches. Bright colors work best for this attribute, with at least one color component being fully bright. The tint applies globally to all light sources visible on the screen. Individual lights can not be tinted differently.

-   Value type: RGB color
-   Default value: `#FFD88C`
-   Modifiers: RGB Color Modifiers
-   Interpolated: yes
-   Resolved at the camera's position

**`minecraft:visual/ambient_light_color`**

Defines both the ambient light tint and brightness. This light is applied to the world at 0 light level. Block and sky light are added on top of it.

-   Value type: RGB color
-   Default values: `#0A0A0A` for the Overworld, `#302821` for the Nether, `#3f473f` for the End
-   Modifiers: RGB Color Modifiers
-   Interpolated: yes
-   Resolved at the camera's position

**`minecraft:visual/night_vision_color`**

This color is used similarly to ambient light color. When the Night Vision effect is active, per-component maximum of `minecraft:visual/night_vision_color` and `minecraft:visual/ambient_light_color` is used as ambient color. Night Vision is not tinted by default.

-   Value type: RGB color
-   Default value: `#999999`
-   Modifiers: RGB Color Modifiers
-   Interpolated: yes
-   Resolved at the camera's position

### Data Components

**Added `minecraft:additional_trade_cost`**

-   Transient component used to modify `count` needed of the `gives` item in a villager trade, is removed after a trade has been generated
-   Format: integer

### Loot Functions

-   Added `minecraft:villager_trade` loot table type which takes the following parameters:
    -   `this`, the entity offering the trade
    -   `origin`, the block position of the entity at its feet

**Added `minecraft:set_random_dyes`**

-   Additively adds dyes to an item's `minecraft:dyed_color` data component if the item is in the `#dyeable` tag Fields:
-   `conditions` - conditions for the function to apply
-   `number_of_dyes` - number provider representing the number of random dyes out of sixteen to apply to the item
    -   The same dye might be selected repeatedly

**Added `minecraft:set_random_potion`**

-   Randomly sets the `minecraft:potion_contents` data component on an item Fields:
-   `conditions` - conditions for the function to apply
-   `options` - optional potion id, list of namespaced potion IDs, or hash-prefixed potion tag, representing the possible potions to select from
    -   Defaults to any potion in the `potions` registry

**Changed `minecraft:enchant_with_levels`**

Now also takes the following field:

-   `include_additional_cost_component` - optional boolean representing if an `minecraft:additional_cost_component` should be added to the item based on the cost of the enchantment
    -   Defaults to `false`
    -   The value is determined by the `levels` number provider and is the same that is used to determine what enchantment level is used for enchanting

**Changed `minecraft:enchant_randomly`**

Now also takes the following field:

-   `include_additional_cost_component` - optional boolean representing if an `minecraft:additional_cost_component` should be added to the item based on the cost of the enchantment
    -   Defaults to `false`
    -   The value is determined by the value selected by `levels` or its default value using the following formula: `2 + random(0, 5 + level * 10) + 3 * level`

### Predicates

**Entity Predicates**

**`player` Sub-Predicate**

-   New optional field: `food` - A Food predicate
-   Format: Object with fields:
    -   `level` - optional integer min/max range specifying the required food level
    -   `saturation` - optional float min/max range specifying the required saturation level

**Added `minecraft:sum`**

-   Returns the sum of a list of number providers
-   Fields:
    -   `summands`, a list of number providers

### Enchantments

-   The `post_piercing_attack` component no longer only works for a player if that player has a certain food level

### Tags

-   Added several tags representing groups of villager trades from which Villagers and Wandering Traders derive their trading pools
    -   Villagers have the following tags representing each profession and level of trade in the format: `#<profession>/level_<level>`, up to level 5
        -   Smiths have the `#common_smith/level_<level>` tags representing common trades among armorers, weaponsmiths and toolsmiths, up to level 5
    -   Wandering Traders have the following tags: `#wandering_trader/buying`, `#wandering_trader/special`, `#wandering_trader/common`

**Enchantment Tags**

-   Removed the following tags:
    -   `trades/desert_special`
    -   `trades/jungle_special`
    -   `trades/plains_special`
    -   `trades/savanna_special`
    -   `trades/snow_special`
    -   `trades/swamp_special`
    -   `trades/taiga_special`

**Potion Tags**

-   Added `#tradeable` - all potion effects that can appear in villager trades

## Resource Pack Version 76

### Lightmap Shader Changes

-   The `lightmap.fsh` shader was significantly modified.
    -   The `LightmapInfo` uniform now has two new fields:
        -   `BlockLightTint`
        -   `NightVisionColor`
    -   The `AmbientLightFactor` field was removed, its value is now premultiplied into `AmbientColor`
    -   The `DarkenWorldFactor` was renamed to `BossOverlayWorldDarkeningFactor`
-   Text and items rendered in UI now use a separate 1x1 white lightmap texture, so the lightmap shader does not always have to keep the 15, 15 pixel purely white

## Fixed bugs in 26.1 Snapshot 1

-   [MC-64087](https://bugs.mojang.com/browse/MC-64087) Revengeful zombies / Zombie reinforcements will try to attack you in Creative mode
-   [MC-179949](https://bugs.mojang.com/browse/MC-179949) You cannot edit the inventories of piglins by using '/item replace'
-   [MC-197497](https://bugs.mojang.com/browse/MC-197497) Smooth lighting transition from level 1 to 0 is not smooth
-   [MC-199589](https://bugs.mojang.com/browse/MC-199589) Hitting mobs in Creative mode then switching into Survival causes the mob to target you
-   [MC-219981](https://bugs.mojang.com/browse/MC-219981) Leader zombie-type mobs spawn with 20 health despite having an increased maximum health
-   [MC-300465](https://bugs.mojang.com/browse/MC-300465) Maps with the maximum number of markers cannot be placed in item frames
-   [MC-302186](https://bugs.mojang.com/browse/MC-302186) Ambient lighting in the Nether appears discolored compared to previous versions
-   [MC-302408](https://bugs.mojang.com/browse/MC-302408) Inconsistent underwater lighting with the Conduit Power effect applied
-   [MC-302528](https://bugs.mojang.com/browse/MC-302528) Low sky & block light look outright broken when cast on the same area
-   [MC-303119](https://bugs.mojang.com/browse/MC-303119) Feeding a cat or wolf in Survival mode with only one item in the selected item slot does not restore as much health as it should
-   [MC-303125](https://bugs.mojang.com/browse/MC-303125) Creepers can blow up after the player dies
-   [MC-303389](https://bugs.mojang.com/browse/MC-303389) The ender dragon's velocity can be affected by attacks while perched
-   [MC-303692](https://bugs.mojang.com/browse/MC-303692) Debug overlay text has an indent when improved transparency is disabled
-   [MC-304023](https://bugs.mojang.com/browse/MC-304023) Redundant level data fixer files are saved in worlds' "data" folder
-   [MC-304217](https://bugs.mojang.com/browse/MC-304217) Lunge's hunger requirement applies to post;;_;;piercing;;_;;attack effects of custom enchantments
-   [MC-304599](https://bugs.mojang.com/browse/MC-304599) Dolphins don't follow players riding nautiluses like in Bedrock Edition
-   [MC-304631](https://bugs.mojang.com/browse/MC-304631) Anisotropic filtering set to 8x causes opaque translucent textures to become transparent in the distance when there are odd-sized block textures
-   [MC-304725](https://bugs.mojang.com/browse/MC-304725) Zombie villagers summoned with default spawn eggs always spawn as their plains variant
-   [MC-304991](https://bugs.mojang.com/browse/MC-304991) Clicking on a chest with loot that hasn't been generated in Spectator mode makes the "block.chest.locked" sound
-   [MC-305012](https://bugs.mojang.com/browse/MC-305012) The description of the "Universal anger" game rule still uses the old ID of the "Forgive dead players" game rule

---

# Minecraft 1.21.11 Release Candidate 3

Today we are shipping Release Candidate 3 for 1.21.11, addressing three issues discovered after the recent update.

Happy mining!

## Fixed bugs in 1.21.11 Release Candidate 3

-   [MC-304790](https://bugs.mojang.com/browse/MC-304790) Transparent item models are rendered incorrectly
-   [MC-304797](https://bugs.mojang.com/browse/MC-304797) Zombie nautiluses generated in ocean ruins are not persistent
-   [MC-304810](https://bugs.mojang.com/browse/MC-304810) Zombies, skeletons and zombie horses can catch fire from light sources when exposed to the sky in an arid biome

---

# Minecraft 1.21.11 Release Candidate 2

Today we are shipping Release Candidate 2, fixing a crash issue affecting some players.

Happy mining!

### Stability

-   Fixed a crash

---

