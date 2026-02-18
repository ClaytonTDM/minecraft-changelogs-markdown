# Minecraft 26.1 Snapshot 8

Get ready to meet the last baby mobs waddling into testing! This week's snapshot brings you the final gameplay features of our upcoming drop. Happy mining!

## Changes

-   Updated the visuals of more baby mobs
-   Deepslate can now be directly crafted into their cobbled, polished, brick, and tile variants in the Stonecutter
-   Stone can now be directly crafted into cobbled variants in the Stonecutter
-   Adult horse's blackdot markings have been updated to be visually closer to the new baby horse markings
-   Updated some of the sound assets for the adult sound variants
-   Fix a bug where Cat variant sounds `stray_ambient` and `purreow` weren't played

### Baby Mobs

-   Updated visuals for the following mobs:
    -   Panda
    -   Hoglin
    -   Zoglin
    -   Strider
    -   Snifflet
-   Hitboxes have been re-adjusted to be able to fit in spaces 1 block high and 0.5 blocks wide for the following mobs:
    -   Zombie
    -   Husk
    -   Drowned
    -   Piglin
    -   Zombified Piglin
    -   Villager
    -   Zombie Villager

### Creative Mode

-   Using Ctrl + Pick input as an operator on players and mannequins will now show the same results as executing the `/fetchprofile` command for this entity would

### User Interface

-   Input Method Editors (IME) candidates will now be shown in-game (on supported platforms, currently Windows and macOS) above currently edited text field
-   Fullscreen no longer uses exclusive mode

**Debug Screen**

-   Added a new entry called `detailed_memory` with additional information about used memory

### Default JVM Options

-   Decreased the initial heap size to 2GB

> **Developer's Note**: _The intention of this change is to reduce the amount of crashes we're seeing in the latest snapshots. If you're experiencing crashes, please refer to the [help article](https://help.minecraft.net/hc/en-us/articles/39083573916941-Fix-Minecraft-Java-Edition-Game-Crashes-by-Checking-Memory-Allocation) for more information on how to configure memory allocation._

## Technical Changes

-   The Data Pack version is now 99.2
-   The Resource Pack version is now 81.1

## Data Pack Version 99.2

-   Changes to the `minecraft:nbt` text component format

### Commands

**Changes to `/fetchprofile`**

-   Added a new `entity` subcommand that will print profile information from entity in world
    -   Syntax: `/fetchprofile entity <single entity selector>`
    -   If targeted entity does not have profile (currently only Players and Mannequins do) this command will fail
    -   Note that the profile is shown as-is - no additional resolving is done

### Text components

**`minecraft:selector`**

-   Field `selector` no longer accepts trailing data after a selector

**`minecraft:nbt`**

-   Tags resolved with the `minecraft:nbt` text component when the `interpret` field is set to `false` are now pretty-printed instead of being flattened into a single `text` component
-   Contents of the `nbt` and `block` fields are no longer silently rejected when parsing fails
-   Field `entity` no longer accepts trailing data after a selector
-   A new option called `plain` has been added to remove styling from pretty-printed text
    -   The `plain` and `interpret` options can't both be enabled at the same time

## Resource Pack Version 81.1

### UI Sprites

-   Added new UI sprites:
    -   `gui/sprites/widget/preedit.png` for IME preedit overlay background

### Entity Textures

-   Added new entity textures:
    -   `entity/hoglin/hoglin_baby.png`
    -   `entity/hoglin/zoglin_baby.png`
    -   `entity/strider/strider_baby.png`
    -   `entity/strider/strider_cold_baby.png`
    -   `entity/sniffer/snifflet.png`
    -   `entity/panda/aggresive_panda_baby.png`
    -   `entity/panda/brown_panda_baby.png`
    -   `entity/panda/lazy_panda_baby.png`
    -   `entity/panda/playful_panda_baby.png`
    -   `entity/panda/weak_panda_baby.png`
    -   `entity/panda/worried_panda_baby.png`
    -   `entity/panda/panda_baby.png`

## Fixed bugs in 26.1 Snapshot 8

-   [MC-98631](https://bugs.mojang.com/browse/MC-98631) The heights of shields in first person are different depending on what hand you have them held in
-   [MC-99647](https://bugs.mojang.com/browse/MC-99647) The "below;;_;;name" scoreboard display slot doesn't work with non-player entities
-   [MC-129886](https://bugs.mojang.com/browse/MC-129886) Trying to place a block underneath min;;_;;y does not give an error message
-   [MC-178713](https://bugs.mojang.com/browse/MC-178713) Bone meal can be used on certain plants at build height, but they don't grow
-   [MC-184432](https://bugs.mojang.com/browse/MC-184432) There is no warning when plants are bonemealed, but cannot grow above or below world height limits
-   [MC-184433](https://bugs.mojang.com/browse/MC-184433) When applying bone meal to grass / ferns / nether fungi at the upper build limit, there is no warning, and the taller part of the plant is cut off
-   [MC-254785](https://bugs.mojang.com/browse/MC-254785) Bone meal is used when clicked on a bamboo stalk with a block above it
-   [MC-264155](https://bugs.mojang.com/browse/MC-264155) Bone meal doesn't work on grass blocks beneath cave air or void air
-   [MC-305103](https://bugs.mojang.com/browse/MC-305103) The panorama sometimes spins too fast when saving or loading a world
-   [MC-305714](https://bugs.mojang.com/browse/MC-305714) "/time set " is unable to decrease time
-   [MC-305989](https://bugs.mojang.com/browse/MC-305989) Golden dandelions do not stop baby brown mooshrooms from aging
-   [MC-306019](https://bugs.mojang.com/browse/MC-306019) Items added to #cauldron;;_;;can;;_;;remove;;_;;dye by datapacks can't be undyed
-   [MC-306196](https://bugs.mojang.com/browse/MC-306196) Age-locked baby bees age while in the hive
-   [MC-306314](https://bugs.mojang.com/browse/MC-306314) The glowing effect is no longer visible
-   [MC-306319](https://bugs.mojang.com/browse/MC-306319) The content of the chat restrictions screen can shift off-center and overflow the edge of the game window when the game window is shrunken horizontally while the chat restrictions screen is open
-   [MC-306321](https://bugs.mojang.com/browse/MC-306321) The chat and chat restrictions screen don't update when changing the client chat option from that screen
-   [MC-306326](https://bugs.mojang.com/browse/MC-306326) Various block animations and particles in motion now jitter while the game is frozen
-   [MC-306333](https://bugs.mojang.com/browse/MC-306333) Grass blocks in dark forests no longer have a side overlay if Biome Blend is disabled
-   [MC-306342](https://bugs.mojang.com/browse/MC-306342) Stray adult cats play incorrect sounds
-   [MC-306345](https://bugs.mojang.com/browse/MC-306345) Baby zombies, gurgles, baby husks, and baby zombie villagers can no longer traverse one-block-high passages
-   [MC-306364](https://bugs.mojang.com/browse/MC-306364) Blocks rendered as block entities are now invisible in sections without regularly rendered blocks

---

# Minecraft 26.1 Snapshot 7

Sound the new trumpet note block instrument, it's Tuesday! With this week's release, our undead and hostile babies have a new scary strategy: looking even more adorable! The baby zombie, husk, zombie villager, piglin, zombified piglin, and drowned are storming the snapshot looking deceivingly innocent and huggable. Just know you can only truly trust the baby villagers! Oh, we've also added sound variants for some of your favorite adult mobs!

On the technical side of things we are, among other things, making changes to how chunks are rendered, as well as improving support for block translucency in resource packs. For the full list of changes, browse the changelog below!

Happy mining!

## New Features

-   Added adult sound variants for the following animals:
    -   Cats have a new variant called `royal`
    -   Pigs have new variants called `mini` and `big`
    -   Cows have a new variant called `moody`
    -   Chickens have a new variant called `picky`
    -   The original sounds of each animal are used for the variant called `classic`
    -   Every one of these animals will have a random sound variant assigned to it from the new variants and the original one
-   Added a trumpet instrument for when using a Note Block that is placed on a Copper Block
    -   The sound is different based on the oxidation level of the Copper Block
-   Golden Dandelion can now be used on Hoglin babies

## Changes

-   Revamped the visuals of more baby mobs
-   Fixed issue where Baby Axolotl animations were being disrupted by walking animation

### Baby Mobs

-   Updated the models and textures of the following baby mobs:
    -   Zombie
        -   Increased the bounding box of baby Zombie to better fit the new model
    -   Husk
        -   Increased the bounding box of baby Husk to better fit the new model
    -   Drowned
        -   Increased the bounding box of baby Drowned to better fit the new model
    -   Piglin
        -   Increased the bounding box of baby Piglin to better fit the new model
    -   Zombified Piglin
        -   Increased the bounding box of baby Zombified Piglin to better fit the new model
    -   Villager
        -   Increased the bounding box of baby Villager to better fit the new model
    -   Zombie Villager
        -   Increased the bounding box of baby Zombie Villager to better fit the new model

### UI

-   Changes to how the chat screen is handled when it's restricted by settings

**Chat**

-   The chat screen can now always be opened, even when chatting is restricted by settings
    -   When the chat screen is open, specific actions and message types may still be restricted
    -   Information about the restrictions (if there are any) is displayed on top of the chat box and above the chat input when the chat screen is open
    -   The same information can also be accessed in World Settings screen
-   Chat entries from client actions like taking screenshots will now be displayed even when messages from players and servers are restricted
-   Changing chat settings will now hide all messages of restricted types and discard any new ones
-   The handling of chat messages on a published local server is now more consistent with dedicated servers in regard to chat settings

## Technical Changes

-   The Data Pack version is now 99.1
    
-   The Resource Pack version is now 81
    
-   The internals of how chunk geometry data is stored in GPU memory and how they are rendered has been changed
    

> **Developer's Note**: _If you experience any visual bugs, performance degradation or crashes, please report it to us on our [bug tracker](https://bugs.mojang.com)._

## Data Pack Version 99.1

-   Added data-driven registry for sound variants for Pig, Cat, Cow and Chicken

### Data-driven Mob Sound Variants

### Cat Sound Variants

-   Cat sound variants can be data-driven by adding entries to data//cat;;_;;sound;;_;;variant/.json
-   The file contains two sound sets defining `adult_sounds` and `baby_sounds`
-   Each sound set contains the following fields which correspond to sound events to use for the specific behaviour:
    -   `ambient_sound`
    -   `stray_ambient_sound`
    -   `hiss_sound`
    -   `hurt_sound`
    -   `death_sound`
    -   `eat_sound`
    -   `beg_for_food_sound`
    -   `purr_sound`
    -   `purreow_sound`

### Pig Sound Variants

-   Pig sound variants can be data-driven by adding entries to data//pig;;_;;sound;;_;;variant/.json
-   The file contains two sound sets defining `adult_sounds` and `baby_sounds`
-   Each sound set contains the following fields which correspond to sound events to use for the specific behaviour:
    -   `ambient_sound`
    -   `hurt_sound`
    -   `death_sound`
    -   `step_sound`

### Cow Sound Variants

-   Cow sound variants can be data-driven by adding entries to data//cow;;_;;sound;;_;;variant/.json
-   Each sound variant contains the following fields which correspond to sound events to use for the specific behaviour:
    -   `ambient_sound`
    -   `hurt_sound`
    -   `death_sound`
    -   `step_sound`

### Chicken Sound Variants

-   Cow sound variants can be data-driven by adding entries to data//chicken;;_;;sound;;_;;variant/.json
-   The file contains two sound sets defining `adult_sounds` and `baby_sounds`
-   Each sound set contains the following fields which correspond to sound events to use for the specific behaviour:
    -   `ambient_sound`
    -   `hurt_sound`
    -   `death_sound`
    -   `step_sound`

## Resource Pack Version 81

-   Updated `mule_baby.png` and `donkey_baby.png` to fit model properly

### Block Model Format

-   Any block model can now support cutout or translucent (partially transparent pixels) textures
    -   Whether a quad is rendered in the cutout or translucent render pass is determined by the contents of its assigned sprite
        -   Any sprite with translucent (partially transparent) pixels will be assigned to the "translucent" pass
        -   Any sprite with fully transparent pixels will be assigned to the "cutout" pass
        -   All other sprites are assigned to the "solid" pass
    -   Note: the assigned render pass also implies rendering order: all solid geometry is rendered before all cutout geometry, which is rendered before all translucent geometry
-   The format of the `textures` map has been updated:
    -   Non-string entries will now be rejected, instead of interpreted as strings
    -   Alongside the previous inline sprite ID form, entries can now be defined as an object with fields:
        -   `sprite` - the sprite ID
        -   `force_translucent` - optional boolean, `true` if any geometry with this texture should be forced into the "translucent" pass
            -   This is useful for example for blocks that don't have any translucent pixels, but use the `mean` mipmap strategy
            -   Default: `false`

### Entity Textures

-   Added new entity textures:
    -   `entity/villager/villager_baby.png`
    -   `entity/villager/baby/desert.png`
    -   `entity/villager/baby/jungle.png`
    -   `entity/villager/baby/plains.png`
    -   `entity/villager/baby/savanna.png`
    -   `entity/villager/baby/snow.png`
    -   `entity/villager/baby/swamp.png`
    -   `entity/villager/baby/taiga.png`
    -   `entity/zombie/drowned_baby.png`
    -   `entity/zombie/drowned_outer_layer_baby.png`
    -   `entity/zombie/husk_baby.png`
    -   `entity/zombie/zombie_baby.png`
    -   `entity/zombie_villager/zombie_villager_baby.png`
    -   `entity/zombie_villager/baby/desert.png`
    -   `entity/zombie_villager/baby/jungle.png`
    -   `entity/zombie_villager/baby/plains.png`
    -   `entity/zombie_villager/baby/savanna.png`
    -   `entity/zombie_villager/baby/snow.png`
    -   `entity/zombie_villager/baby/swamp.png`
    -   `entity/zombie_villager/baby/taiga.png`
    -   `entity/piglin/piglin_baby.png`
    -   `entity/piglin/zombiefied_piglin_baby.png`
    -   `entity/equipment/humanoid_baby/chainmail.png`
    -   `entity/equipment/humanoid_baby/copper.png`
    -   `entity/equipment/humanoid_baby/diamond.png`
    -   `entity/equipment/humanoid_baby/gold.png`
    -   `entity/equipment/humanoid_baby/iron.png`
    -   `entity/equipment/humanoid_baby/leather_overlay.png`
    -   `entity/equipment/humanoid_baby/leather.png`
    -   `entity/equipment/humanoid_baby/netherite.png`
    -   `entity/equipment/humanoid_baby/turtle_scute.png`

### Sounds

-   Added new sound variants: one for adult Cat, adult Chicken, adult Cow and two for adult Pig
-   Added new sound events for the Cat:
    -   `entity.cat_royal.ambient`
    -   `entity.cat_royal.hiss`
    -   `entity.cat_royal.hurt`
    -   `entity.cat_royal.death`
    -   `entity.cat_royal.eat`
    -   `entity.cat_royal.beg_for_food`
    -   `entity.cat_royal.purr`
    -   `entity.cat_royal.purreow`
    -   `entity.cat_royal.stray_ambient`
-   Added new sound events for the Pig:
    -   `entity.pig_mini.ambient`
    -   `entity.pig_mini.hurt`
    -   `entity.pig_mini.death`
    -   `entity.pig_big.ambient`
    -   `entity.pig_big.hurt`
    -   `entity.pig_big.death`
-   Added new sound events for the Chicken:
    -   `entity.chicken_picky.ambient`
    -   `entity.chicken_picky.death`
    -   `entity.chicken_picky.hurt`
    -   `entity.chicken_picky.step`
-   Added new sound events for the Cow:
    -   `entity.cow_moody.ambient`
    -   `entity.cow_moody.death`
    -   `entity.cow_moody.hurt`
    -   `entity.cow_moody.step`
-   Added new sound events for the trumpet instrument:
    -   `block.note_block.trumpet`
    -   `block.note_block.trumpet_exposed`
    -   `block.note_block.trumpet_oxidized`
    -   `block.note_block.trumpet_weathered`

### Shaders & Post-process Effects

> **Developer's Note**: _Although it is possible in Resource Packs, overriding Core Shaders is considered as unsupported and not an intended Resource Pack feature. These shaders exist as part of the internal implementation of the game, and as such, may change at any time as the game's internals evolve. We understand that overriding Core Shaders is used for very cool Resource Pack features, many of which lack supported alternatives. We would like to provide better, supported alternatives in the future._

-   The `block.vsh` and `terrain.vsh` no longer receive the `Normal` vertex attribute

## Fixed bugs in 26.1 Snapshot 7

-   [MC-13187](https://bugs.mojang.com/browse/MC-13187) Water in water cauldrons is not transparent
-   [MC-257362](https://bugs.mojang.com/browse/MC-257362) Particles from breaking frogspawn are transparent
-   [MC-263488](https://bugs.mojang.com/browse/MC-263488) The item texture of pink petals has a misplaced transparent pixel
-   [MC-299730](https://bugs.mojang.com/browse/MC-299730) Dumping textures while using a TTF font crashes the game
-   [MC-305492](https://bugs.mojang.com/browse/MC-305492) Baby wolves have visible z-fighting
-   [MC-305501](https://bugs.mojang.com/browse/MC-305501) Baby wolves render their collar incorrectly all over their body
-   [MC-305515](https://bugs.mojang.com/browse/MC-305515) Rabbits float when panicking
-   [MC-305545](https://bugs.mojang.com/browse/MC-305545) The "wolf;;_;;baby" and "wolf;;_;;tame;;_;;baby" textures are identical
-   [MC-305580](https://bugs.mojang.com/browse/MC-305580) Baby zombie horses and baby skeleton horses grow into adults, unlike other baby undead mobs
-   [MC-305583](https://bugs.mojang.com/browse/MC-305583) The right side of the texture of British shorthair kittens overlaps the back of the head
-   [MC-305591](https://bugs.mojang.com/browse/MC-305591) The texture of temperate piglets uses the wrong color for a part of their body
-   [MC-305644](https://bugs.mojang.com/browse/MC-305644) Piglet heads are off-center
-   [MC-305984](https://bugs.mojang.com/browse/MC-305984) The legs of baby donkeys and baby mules extend into the ground by one pixel, mapped to an irregular texture area
-   [MC-305986](https://bugs.mojang.com/browse/MC-305986) “subtitles.entity.baby;;_;;chicken.hurt” displays as a raw translation key
-   [MC-305999](https://bugs.mojang.com/browse/MC-305999) Entities in any light level besides 0 render fully bright
-   [MC-306008](https://bugs.mojang.com/browse/MC-306008) Baby horse legs are not connected to the body correctly when it rears up
-   [MC-306034](https://bugs.mojang.com/browse/MC-306034) "subtitles.entity.baby;;_;;horse.land" displays as a raw translation key
-   [MC-306097](https://bugs.mojang.com/browse/MC-306097) Golden dandelions don't make mobs persistent
-   [MC-306136](https://bugs.mojang.com/browse/MC-306136) Baby pandas float in the air when fed bamboo after being fed golden dandelions
-   [MC-306137](https://bugs.mojang.com/browse/MC-306137) Players can feed baby pandas after feeding them golden dandelions
-   [MC-306157](https://bugs.mojang.com/browse/MC-306157) Getting the average water color of blocks takes up about half of the chunk render compile times
-   [MC-306161](https://bugs.mojang.com/browse/MC-306161) The color of baby turtles' front legs is inconsistent with the back legs
-   [MC-306172](https://bugs.mojang.com/browse/MC-306172) Golden dandelions don't work on baby hoglins
-   [MC-306185](https://bugs.mojang.com/browse/MC-306185) The podzol patches in the Old Growth Pine Taiga and Old Growth Spruce Taiga biomes are now generated incorrectly
-   [MC-306195](https://bugs.mojang.com/browse/MC-306195) Camel husks with the "Age" tag set below -24000 use their removed baby variant's hitbox size and animation speed
-   [MC-306201](https://bugs.mojang.com/browse/MC-306201) Baby turtles' legs now z-fight
-   [MC-306207](https://bugs.mojang.com/browse/MC-306207) The world upgrade tooltips in the world selection screen appear with any world after selecting a world that needs to be upgraded
-   [MC-306222](https://bugs.mojang.com/browse/MC-306222) Some strings introduced in 26.1 Snapshot 6 are grammatically incorrect

---

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

