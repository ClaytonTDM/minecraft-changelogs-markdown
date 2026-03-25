# Minecraft: Java Edition 26.1

Ready or not, here comes the Tiny Takeover drop! New versions of baby mobs have stormed Minecraft, causing cuteness overload across biomes and builds. Listen out for heart-melting sounds, craft name tags for your pets, and keep babies forever young with the golden dandelion. The babies are officially on the loose, so get ready to collect, coo over, and create chaos with these tiny rascals!

## New Features

-   Added new baby sounds for Wolf, Cat, Pig, Horse, and Chicken
-   Added Golden Dandelion
-   Added adult sound variants for the following animals:
    -   Cats have one new sound variant
    -   Pigs have two new sound variants
    -   Cows have one new sound variant
    -   Chickens have one new sound variant
    -   The original sounds of each animal are used for the variant called `classic`
    -   Every one of these animals will have a random sound variant assigned to it from the new variants and the original one
-   Added a trumpet instrument for when using a Note Block that is placed on a Copper Block
    -   The sound is different based on the oxidation level of the Copper Block
-   Removed Baby Herobrine

### Golden Dandelion

-   The Golden Dandelion is a new type of flower that can be used to stop baby mobs from aging
    -   Interacting with a baby mob while holding a Golden Dandelion will stop the mob from aging
        -   When aging is stopped, green particles moving downwards will be shown
    -   Interacting with a baby mob that has been stopped from aging while holding a Golden Dandelion will cause it to start aging again
        -   When aging is started again, green particles moving upwards will be shown
    -   It cannot be used on undead baby mobs and baby Villagers
-   Can be crafted using a Dandelion and Gold Nuggets

![A baby Fox stands amongst a field of Golden Dandelions.](https://launchercontent.mojang.com/v2/images/2618.jpg)

## Changes

-   Revamped the visuals of most baby mobs
-   Name Tags are now craftable and can be crafted with 1 Paper and 1 of any Metal Nugget
-   Removed Name Tags from loot chests in Ancient Cities and Woodland Mansions
-   Deepslate can now be directly crafted into its cobbled, polished, brick, and tile variants in the Stonecutter
-   Stone can now be directly crafted into cobbled variants in the Stonecutter
-   Updated the Main Menu background panorama
-   Tweaked default JVM options
-   The algorithm that maps block and sky light levels to how bright things appear on screen has been fully rewritten

### Baby Mobs

-   Updated the models and textures of the following baby mobs:
    -   Cow
    -   Mooshroom
    -   Sheep
    -   Pig
    -   Cat
    -   Ocelot
    -   Wolf
    -   Chicken
        -   Tweaked the bounding box to align with the new model
    -   Rabbit
        -   Both adult and baby Rabbits also received new animations
        -   Tweaked the bounding box to align with the new model
        -   The programmer art Rabbit textures have been removed following the remodeling of the Rabbit
    -   Horse
        -   Increased the bounding box of baby Horses to better fit the new model
    -   Donkey
    -   Mule
    -   Zombie Horse
        -   Increased the bounding box of baby Zombie Horses to better fit the new model
    -   Skeleton Horse
        -   Increased the bounding box of baby Skeleton Horses to better fit the new model
    -   Camel
    -   Llama
    -   Bee
    -   Fox
    -   Goat
    -   Armadillo
    -   Polar Bear
    -   Panda
    -   Snifflet
    -   Dolphin
    -   Squid
        -   Increased the bounding box of baby Squid to better fit the new model
    -   Glow Squid
        -   Increased the bounding box of baby Glow Squid to better fit the new model
    -   Turtle
    -   Axolotl
        -   Increased the bounding box of baby Axolotls to better fit the new model
    -   Strider
    -   Hoglin
    -   Zoglin
    -   Zombie
        -   Increased the bounding box of baby Zombies to better fit the new model
    -   Husk
        -   Increased the bounding box of baby Husks to better fit the new model
    -   Drowned
        -   Increased the bounding box of baby Drowned to better fit the new model
    -   Piglin
        -   Increased the bounding box of baby Piglins to better fit the new model
    -   Zombified Piglin
        -   Increased the bounding box of baby Zombified Piglins to better fit the new model
    -   Villager
        -   Increased the bounding box of baby Villagers to better fit the new model
    -   Zombie Villager
        -   Increased the bounding box of baby Zombie Villagers to better fit the new model
-   Baby Cats are now scaled up to be the same size as baby Ocelots
-   Baby Horses are now scaled up slightly
-   Baby Polar Bears no longer attack Foxes
-   Adult Horses' Blackdot markings were updated to be visually closer to the new baby Horse markings
-   Small Armor Stands now display correctly by using the adult armor and scaling it down
-   Armor on baby Wolves will no longer render
-   Saddles on baby Pigs and baby Camels will no longer render
-   Camel Husks no longer have a baby model

![A stack of baby mobs. A warm Chicken on top of a black Cat on top of a woods Wolf on top of a Donkey.](https://launchercontent.mojang.com/v2/images/26111.jpg)

### Trades

-   The trades that are unlocked by Villager professions are now generated using deterministic random sequences, like loot drops and barter loot
    -   Re-rolling a Villager's trades still produces a randomized sequence of trades, but that sequence is now determined by the world seed
-   Master Librarians no longer offer Name Tags
-   Master Librarians now offer Red Candles and Yellow Candles for the price of three Emeralds
-   Master Librarians now have three available trades to ensure that an Enchanted Book trade is always offered when using the Rebalance experiment
-   The Wandering Trader will now offer Name Tags for the price of one Emerald

![A Swamp Librarian and an unemployed Swamp Villager are looking at each other in front of a Lectern in a Swamp.](https://launchercontent.mojang.com/v2/images/2615.jpg)

### Minor Tweaks to Blocks, Items and Entities

-   Striders now correctly inherit the warmth of the Strider they are standing on, matching Bedrock
-   Zombie Horses no longer panic when hurt
-   Updated the dismount speed thresholds for Spears to match Bedrock
-   The Tripwire texture is now rendered as alpha cutout instead of transparent

### Lightmap Algorithm Changes

-   The new algorithm mostly provides the same overall results as before, but:
    -   It is simpler and more straightforward, and fixes multiple issues of the previous one, as listed in the Fixed Bugs section below
    -   The Darkness effect and world darkening effect of the Wither fight now work the same way in all dimensions
    -   The Night Vision effect now simply adds ambient light instead of scaling the resulting colors
        -   This means that fully dark areas no longer look brighter than areas lit by block or sky light
    -   More aspects of the algorithm such as block light tint, ambient light color and night vision color are now data-driven through environment attributes, as described in the Data Pack section below

### UI

-   Along with large changes to the world data format in this release, worlds that need to be upgraded will now show `Upgrade and Play` instead of `Play Selected World`, and the `Edit World` and `Re-Create World` buttons are disabled until the world has been upgraded
    -   A new screen has been added to show upgrading progress
-   Changes were made to how the chat screen is handled when it's restricted by settings
-   Input Method Editor (IME) candidates will now be shown in-game (on supported platforms, currently Windows and macOS) above the currently edited text field
    -   The game will try to restore the last IME status when any text field is selected
    -   If no text input is selected, IME input will be canceled and the status will not be updated
-   Added a new display option called "Exclusive Fullscreen" which controls if fullscreen mode should take full control of a monitor
    -   Defaults to `false` (i.e. non-exclusive mode)
    -   Any change will be applied only after the game restarts
    -   Warning: exclusive fullscreen mode might prevent use of input methods (IME)

![Two Rabbits of different types are sitting up in a Cherry Grove.](https://launchercontent.mojang.com/v2/images/2617.jpg)

**Debug Screen**

-   The `looking_at_block` and `looking_at_fluid` debug entries no longer show tags
-   New debug entries have been added:
    -   `looking_at_block_tags`
    -   `looking_at_fluid_tags`
    -   `looking_at_entity_tags`
    -   `sound_cache`
-   Renamed debug entries:
    -   `looking_at_block` -> `looking_at_block_state`
    -   `looking_at_fluid` -> `looking_at_fluid_state`
-   A `day_count` debug entry has been split from `local_difficulty`
-   Added a new entry `detailed_memory` with additional information about used memory
-   A new lightmap debug renderer can be enabled using the `F3 + 4` keybind

**Lightmap Debug Renderer**

-   A new debug renderer for the lightmap was added, which can be enabled using the `F3 + 4` keybind
-   It is mutually exclusive with the FPS/TPS and networking charts
-   It shows the lightmap texture in real time in the bottom right corner of the screen
-   The vertical axis of the texture represents sky light levels (0-15 from bottom to top)
-   The horizontal axis of the texture represents block light levels (0-15 from left to right)
-   The color of each pixel represents the resulting color that will be applied to blocks and entities lit with the corresponding block and sky light levels

![An underwater view of a few baby Squid which are swimming in a River.](https://launchercontent.mojang.com/v2/images/26110.jpg)

**World Options**

-   The difficulty button in the pause menu has been replaced with a button leading to a new screen - World Options
-   The World Options screen contains the difficulty button as well as a button for changing Game Rules
    -   The Game Rules screen is available for all operators and otherwise disabled

**Game Rules**

-   A search bar has been added to the top of the Game Rules screen, both in-game and in the world creation menu
    -   The search bar will select Game Rules based on id, name, category, and description

**Chat**

-   The chat screen can now always be opened, even when chatting is restricted by settings
    -   When the chat screen is open, specific actions and message types may still be restricted
    -   Information about the restrictions (if there are any) is displayed on top of the chat box and above the chat input when the chat screen is open
    -   The same information can also be accessed in the World Settings screen
-   Chat entries from client actions like taking screenshots will now be displayed even when messages from Players and servers are restricted
-   Changing chat settings will now hide all messages of restricted types and discard any new ones
-   The handling of chat messages on a published local server is now more consistent with dedicated servers in regard to chat settings

![A pen of many baby Chickens and two adult Chickens is shown inside of a Plains Village. There's a Cherry Grove in the background.](https://launchercontent.mojang.com/v2/images/2616.jpg)

### Creative Mode

-   Using Ctrl + Pick input as an operator on Players and Mannequins will now show the same results as executing the `/fetchprofile` command for this entity would

### Default JVM Options

-   The game now allocates 4 GB of RAM by default (up from 2 GB)
-   Garbage collection has been changed from G1GC to ZGC for compatible devices

> **Developer's Note**: _The default memory allocation has been bumped from 2GB to 4GB to make the game run smoother and reduce stutters. Furthermore, with generational ZGC, you should see a more stable framerate – especially when operating memory heavy tasks. If you're running Minecraft on a machine with less than 4GB of RAM – please refer to [this help article](https://help.minecraft.net/hc/en-us/articles/39083573916941-Fix-Minecraft-Java-Edition-Game-Crashes-by-Checking-Memory-Allocation). If you want to change the garbage collector – please refer to [this help article](https://help.minecraft.net/hc/en-us/articles/41950300066573-Change-the-Garbage-Collector-for-Minecraft-Java-Edition). Third-party launchers may not support these changes._

## Technical Changes

-   The Data Pack version is now 101.1
-   The Resource Pack version is now 84
-   Game executables are no longer obfuscated - see [this Minecraft.net article](https://www.minecraft.net/en-us/article/removing-obfuscation-in-java-edition) for more details
-   If a server's disk space is low, a toast will now be shown to server operators
-   The game now requires Java 25
-   The included Java distribution is now the Microsoft build of OpenJDK 25
-   The report generator for item components has been renamed to "Default Components" and now outputs one file for each element that has default components
-   The file structure of how worlds and their data are stored has been changed
-   The internals of how chunk geometry data is stored in GPU memory and how they are rendered have been changed
-   The game will now save all data once after the world has finished loading/the server has started up

> **Developer's Note**: _If you experience any visual bugs, performance degradation or crashes, please report it to us on our [bug tracker](https://bugs.mojang.com)._

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
        -   Added `respawn_time` - the time in ticks that has elapsed since the current stage of the respawn sequence started
        -   Added `respawn_crystals` - a list of UUIDs for the End Crystals used to trigger the respawn sequence
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

![An underwater view of a school of Cod and a few Dolphins swimming around.](https://launchercontent.mojang.com/v2/images/2612.jpg)

## Data Pack Versions 95 through 101.1

-   Added data-driven World Clocks
-   Added data-driven registry for Villager trades
-   Added data-driven registry for sound variants for Pig, Cat, Cow, and Chicken
-   Changed the syntax of some custom recipe fields
-   Added new block, fluid, item, entity, enchantment, potion, and configured feature tags

### World Clocks

World Clocks contain an internal time that increases every tick. They can be defined in data packs under the `world_clock` registry (found under `data/<namespace>/world_clock/<id>.json`)

-   World Clocks can be paused or resumed, and the time of the clock can be changed or queried from the `time` command
-   Format: object with no fields

### Timelines

-   Added a `clock` field: a World Clock ID, specifies which World Clock the timeline is tied to
    -   This field is required, but to match previous behavior the `minecraft:overworld` clock can be used
-   Added an optional `time_markers` field, an optional map between namespaced Time Marker IDs and either an integer or a Time Marker object,
    -   Format:
        -   Non-negative integer, the tick that the time marker marks
        -   Or object with fields:
            -   `ticks` - Integer between `0` and `period_ticks`, the tick that the Time Marker marks
            -   `show_in_commands` - optional boolean, specifies whether the Time Marker will show up in command suggestions
                -   Default: `false`

**Time Markers**

Time Markers assign a particular name to a specific (optionally repeating) point in time for a specific World Clock. Time Markers replace the previously predetermined names that could be used by `/time set`, for example `day` or `night`.

Time Markers will exist within the context of a specific World Clock. This means that even though the different Time Markers are defined by different Timelines, only one Time Marker can exist with a particular id for a particular World Clock. It also means that two World Clocks can have a Time Marker with the same name.

**Built-in uses of Time Markers**

Some Time Markers are used to drive Vanilla game behavior. Usually, they are configured to not show up in `/time` commands.

-   `minecraft:wake_up_from_sleep` - the time to advance the dimension's default clock to when Players in that dimension wake up after sleeping
-   `minecraft:roll_village_siege` - the time of the dimension's default clock at which the random chance for a Zombie Village siege to occur should be evaluated

### Environment Attributes

**Added `minecraft:visual/block_light_tint`**

Tint of the block light. Block light color starts as dark gray at low light levels, becomes tinted by this attribute at medium levels, and turns white at high levels. By default, it provides the yellowish tint of torches. Bright colors work best for this attribute, with at least one color component being fully bright. The tint applies globally to all light sources visible on the screen. Individual lights cannot be tinted differently.

-   Value type: RGB color
-   Default value: `#FFD88C`
-   Modifiers: RGB Color Modifiers
-   Interpolated: yes
-   Resolved at the camera's position

**Added `minecraft:visual/ambient_light_color`**

Defines both the ambient light tint and brightness. This light is applied to the world at 0 light level. Block and sky light are added on top of it.

-   Value type: RGB color
-   Default values: `#0A0A0A` for the Overworld, `#302821` for the Nether, `#3f473f` for the End
-   Modifiers: RGB Color Modifiers
-   Interpolated: yes
-   Resolved at the camera's position

**Added `minecraft:visual/night_vision_color`**

This color is used similarly to ambient light color. When the Night Vision effect is active, the per-component maximum of `minecraft:visual/night_vision_color` and `minecraft:visual/ambient_light_color` is used as the ambient color. Night Vision is not tinted by default.

-   Value type: RGB color
-   Default value: `#999999`
-   Modifiers: RGB Color Modifiers
-   Interpolated: yes
-   Resolved at the camera's position

**Changed `minecraft:gameplay/turtle_egg_hatch_chance`**

-   Now has a default value of `0.002`

### Data-driven Villager Trades

Trades offered by Villagers and Wandering Traders are now data-driven and can be customized by data pack developers

**Villager Trades**

-   Present in the `villager_trade` folder, represents a blueprint for trades which is used by Villagers and Wandering Traders to generate actual trades
-   Entry Format:
    -   `wants` - Object, represents an item type and number of them needed to trade
        -   `id` - String, the id of the item
        -   `count` - optional number provider, how many of the item is needed for the trade
            -   Defaults to a constant `1`
        -   `components` - optional component map, the expected data components on the item
            -   Defaults to an empty map
    -   `additional_wants` - optional object, an additional item required by the merchant, has the same format as `wants`
    -   `gives` - Item Stack, the resulting item given by the merchant when trading
        -   Uses the existing format for Item Stacks
    -   `given_item_modifiers` - optional list of Item Modifiers, modifiers to apply to the item in `gives` such as enchantments or potions, used to add dynamism to the trade rather than hardcoding certain values
        -   Uses the existing format for Item Modifiers (also known as loot modifiers, item functions, loot functions...)
        -   If any of these returns an empty item the entire trade will be discarded
        -   Item Modifier references are not yet supported
        -   If the final item has a `stored_enchantment` component containing an enchantment in the `#double_trade_price` tag, then the count of `wants` is doubled
    -   `max_uses` - optional number provider, the maximum number of times a trade may be used
        -   Is set to `1` if the number provider returns a lower value
        -   Defaults to a constant `4`
    -   `reputation_discount` - number provider, how much factors such as demand, discounts, or penalties affect the cost represented by `wants`
        -   Is set to `0.0` if the number provider returns a lower value
        -   Defaults to a constant `0.0`
    -   `xp` - optional number provider, the amount of xp a merchant gets when the trade is done
        -   Is set to `0` if the number provider returns a lower value
        -   Defaults to a constant `1`
    -   `merchant_predicate` - Predicate, conditions on the merchant that need to be met for the trade to be offered
        -   Uses the existing format for Predicates (also known as loot conditions)
        -   Predicate references are not yet supported
    -   `double_trade_price_enchantments` - optional enchantment id, list of namespaced enchantment IDs, or hash-prefixed enchantment tag representing enchantments that will double the additional cost from `minecraft:enchant_randomly` and `minecraft:enchant_with_levels` if they have `include_additional_cost_component` set to `true` and if the item has one of the provided values in its `minecraft:stored_enchantments` component

An example trade of an Emerald and a Book for an Enchanted Book offered only by Desert Villagers

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
    -   `trades` - Villager trade id, list of namespaced Villager trade IDs, or hash-prefixed Villager trade tag representing the trades that are part of this trade set
    -   `amount` - Number provider, the amount of trades to be generated from this set when used
        -   If the generated number is greater than the number of available `trades` then it will only generate until all `trades` have been used once, unless `allow_duplicates` is set to `true`
    -   `allow_duplicates` - Boolean, representing if the trade set can use the same Villager Trade multiple times to generate trades
        -   Defaults to `false`
    -   `random_sequence` - optional named random sequence, determines which trades are generated
        -   Defaults to a non-deterministic random sequence

An example trade set offering 2 trades from the `#minecraft:armorer/level_1` tag, allowing duplicates

    {
      "amount": 2.0,
      "trades": "#minecraft:armorer/level_1",
      "random_sequence": "minecraft:trade_set/armorer/level_1",
      "allow_duplicates": true
    }
    

### Mob Variants

**Cat Sound Variants**

-   Cat sound variants can be data-driven by adding entries to `data/<namespace>/cat_sound_variant/<id>.json`
-   The file contains two sound sets defining `adult_sounds` and `baby_sounds`
-   Each sound set contains the following fields which correspond to sound events used for the specific behavior:
    -   `ambient_sound`
    -   `stray_ambient_sound`
    -   `hiss_sound`
    -   `hurt_sound`
    -   `death_sound`
    -   `eat_sound`
    -   `beg_for_food_sound`
    -   `purr_sound`
    -   `purreow_sound`

**Pig Sound Variants**

-   Pig sound variants can be data-driven by adding entries to `data/<namespace>/pig_sound_variant/<id>.json`
-   The file contains two sound sets defining `adult_sounds` and `baby_sounds`
-   Each sound set contains the following fields which correspond to sound events used for the specific behavior:
    -   `ambient_sound`
    -   `hurt_sound`
    -   `death_sound`
    -   `step_sound`
    -   `eat_sound`

**Cow Sound Variants**

-   Cow sound variants can be data-driven by adding entries to `data/<namespace>/cow_sound_variant/<id>.json`
-   Each sound variant contains the following fields which correspond to sound events used for the specific behavior:
    -   `ambient_sound`
    -   `hurt_sound`
    -   `death_sound`
    -   `step_sound`

**Chicken Sound Variants**

-   Chicken sound variants can be data-driven by adding entries to `data/<namespace>/chicken_sound_variant/<id>.json`
-   The file contains two sound sets defining `adult_sounds` and `baby_sounds`
-   Each sound set contains the following fields which correspond to sound events used for the specific behavior:
    -   `ambient_sound`
    -   `hurt_sound`
    -   `death_sound`
    -   `step_sound`

**Wolf Sound Variants**

-   All sound event fields have been moved into a new object in the field `adult_sounds`
    -   Added a new `baby_sounds` field with the same fields

### Commands

-   Villager and Piglin inventory slots can now only be accessed using `mob.inventory.*`
    -   `villager.*` and `piglin.*` have been removed

**Added `swing`**

-   New command that enables swinging of entities' arms
-   Not all entities support the swing animation - `swing` will still succeed for those entities, but clients will only display it when possible
-   For example, this makes it possible to swing Mannequins' arms
-   Returns the amount of entities for which a swing was sent

Syntax: `/swing [<target>] [<hand>]`

Arguments:

-   `target` - Entity selector, the entity to swing
    -   If not present, defaults to `@s`
-   `hand` - String, which hand to swing, one of `mainhand`, `offhand`
    -   If not present, defaults to `mainhand`

**Changes to `time`**

-   The `time` command is now based on World Clocks
    -   A clock can be optionally specified as an input for the time command with `time of <clock> ...`
    -   If the clock is not specified (`/time ...` as before), the default clock for the dimension is used
-   The return value (e.g. from `/execute store`) from the `set` and `add` subcommands is now the total elapsed ticks of the clock instead of the current time of day
-   A new `rate` subcommand has additionally been added that can modify the speed at which a World Clock advances

Syntax:

-   `time [of <clock>] set <time>` - sets the total elapsed ticks of the clock
-   `time [of <clock>] set <timemarker>` - advances the clock forward to the next occurrence of the Time Marker
    -   For the `minecraft:overworld` clock, the available Time Markers are: `day`, `noon`, `night`, and `midnight`
-   `time [of <clock>] add <time>` - adds ticks to the clock, can be a negative or a positive number
-   `time [of <clock>] pause` - pauses the clock
-   `time [of <clock>] resume` - resumes the clock
-   `time [of <clock>] rate <rate>` - sets the rate multiplier at which the clock should advance
    -   Note: this only changes the rate at which the World Clock and any Timelines dependent on it advance their internal timers
        -   For example, in the case of the `minecraft:overworld` clock, the day/night cycle will pass quicker with a larger value, but actual game simulation will not speed up (as would happen with `/tick rate`)
    -   A `rate` of `1` corresponds to normal speed
    -   `rate` is a float between `0` (exclusive) and `1000` (inclusive)
-   `time [of <clock>] query <timeline>` - displays and returns the current number of ticks within the Timeline's period
-   `time [of <clock>] query <timeline> repetitions` - displays and returns the number of times the Timeline's period has repeated
-   `time [of <clock>] query time` - displays and returns the total elapsed ticks of the clock
-   `time query gametime` - as before, the total elapsed ticks within the world (unaffected by changes made to clocks using `/time`)

**Changes to `/fetchprofile`**

-   Added a new `entity` subcommand that will print profile information from an entity in the world
    -   Syntax: `/fetchprofile entity <single entity selector>`
    -   If the targeted entity does not have a profile (currently only Players and Mannequins do), this command will fail
    -   Note that the profile is shown as is - no additional resolving is done

### Game Test Environments

**Added `timeline_attributes` definition**

-   Allows setting any number of Timelines on the Environment

Format:

-   `timelines` - a list of timelines to set

**Replaced `time_of_day` with `clock_time`**

-   Added a new required field `clock` - World Clock ID, the clock within which to set time (from the existing `time` field)

### Data Components

**Added `minecraft:additional_trade_cost`**

-   Transient component used to modify the `count` needed of the `gives` item in a Villager trade
-   Is removed after a trade has been generated
-   Format: integer

**Added `minecraft:dye`**

-   Represents a color of dye
-   Used in various places that previously required the exact dye item, including mob and block interactions
    -   Note: the presence of this component itself does not enable functionality. The item has to be explicitly allowed for the given functionality, for example by adding it to tags or changing recipe ingredients
-   Format: one of `white`, `orange`, `magenta`, `light_blue`, `yellow`, `lime`, `pink`, `gray`, `light_gray`, `cyan`, `purple`, `blue`, `brown`, `green`, `red`, `black`

**Changed `minecraft:provides_banner_patterns`**

-   The component now also accepts an ID or a list of IDs in addition to a tag

**Changed `minecraft:blocks_attacks`**

-   The field `bypassed_by` now also accepts an ID or a list of IDs in addition to a tag

**Changed `minecraft:damage_resistant`**

-   The field `types` now also accepts an ID or a list of IDs in addition to a tag

### Entity Data

-   The `current_explosion_impact_pos` and `current_impulse_context_reset_grace_time` fields from Players have been added to all mobs and the Armor Stand
-   The `ignore_fall_damage_from_current_explosion` field on Players has been removed

### Block States

-   The `rotation` property in the default block state of Banners and Signs has been changed from `0` to `8`

> **Developer's Note**: The default block state is used in very few contexts, most notably `/setblock` without any properties. This change was done to align the default orientation of those blocks with other ones (like Skulls or Dispensers)

### Loot Functions

-   Added `minecraft:villager_trade` loot table type which takes the following parameters:
    -   `this` - the entity offering the trade
    -   `origin` - the block position of the entity at its feet

**Changed `minecraft:furnace_smelt`**

-   Added boolean field `use_input_count` (default: `true`)
    -   If set to `true`, the output of the smelting recipe will be multiplied by the number of input items

**Added `minecraft:set_random_dyes`**

-   Additively adds dyes to an item's `minecraft:dyed_color` data component

Format: object with fields:

-   `conditions` - list of conditions, conditions for the function to apply
-   `number_of_dyes` - Number provider, the number of random dyes out of sixteen to apply to the item
    -   The same dye might be selected repeatedly

**Added `minecraft:set_random_potion`**

-   Randomly sets the `minecraft:potion_contents` data component on an item

Format: object with fields:

-   `conditions` - list of conditions, conditions for the function to apply
-   `options` - optional potion id, list of namespaced potion IDs, or hash-prefixed potion tag, the possible potions to select from
    -   Defaults to any potion in the `potions` registry

**Changed `minecraft:enchant_with_levels`**

Now also takes the following field:

-   `include_additional_cost_component` - optional boolean, representing if an `minecraft:additional_cost_component` should be added to the item based on the cost of the enchantment
    -   Defaults to `false`
    -   The value is determined by the `levels` number provider and is the same that is used to determine what enchantment level is used for enchanting

**Changed `minecraft:enchant_randomly`**

Now also takes the following field:

-   `include_additional_cost_component` - optional boolean, representing if an `minecraft:additional_cost_component` should be added to the item based on the cost of the enchantment
    -   Defaults to `false`
    -   The value is determined by the value selected by `levels` or its default value using the following formula: `2 + random(0, 5 + level * 10) + 3 * level`

**Changed `minecraft:set_instrument`**

-   The `options` field now also accepts an ID and a list of IDs in addition to a tag

### Predicates

**Loot Predicates**

**Added `minecraft:environment_attribute_check`**

Exactly matches the value of an Environment Attribute at a given position. Note: this predicate requires a context with an `origin` position set as long as the Environment Attribute can vary positionally.

Format: object with fields:

-   `attribute` - Environment Attribute ID to test
-   `value` - Exact value of the Environment Attribute to match
-   e.g. `{condition: 'environment_attribute_check', attribute: 'gameplay/piglins_zombify', value: true}`

**Changed `minecraft:time_check`**

-   Added `clock` field: a World Clock ID, specifies which World Clock the time check should be done for

**Entity Predicates**

**`player` Sub-Predicate**

-   New optional field: `food` - A Food predicate
-   Format: object with fields:
    -   `level` - optional integer, min/max range specifying the required food level
    -   `saturation` - optional float, min/max range specifying the required saturation level

### Number Providers

**Added `minecraft:sum`**

-   Returns the sum of a list of number providers Format:
-   `summands` - a list of number providers

**Added `minecraft:environment_attribute`**

Fetches and provides the value of an Environment Attribute (that can be represented as a number). Note: this provider requires a context with an `origin` position set as long as the Environment Attribute can vary positionally.

Format: object with fields:

-   `attribute` - Environment Attribute ID to fetch
-   e.g. `{type: 'environment_attribute', attribute: 'gameplay/sky_light_level'}`

### Recipes

-   `result` field should now be more consistent across all recipe types that contain it
    -   It will now accept a short form (e.g. `"minecraft:foo"`, which is equivalent to `{"id":"minecraft:foo", "count": 1}`)
    -   For the recipe types `smelting`, `blasting`, `smoking`, and `campfire_cooking` this field now also accepts a `count` field
-   `minecraft:crafting_special_mapcloning` recipe type has been removed, the functionality has been absorbed by `minecraft:crafting_transmute`
-   New `show_notification` fields with the same functionality as the existing one in `minecraft:crafting_shaped` have been added to the following existing recipe types:
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
-   Removed the unused `group` field from recipes without a recipe book:
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

Note: several of the recipes below use the term "transmuting" when describing crafting output. This procedure is the same as the one currently used by `minecraft:crafting_transmute`, i.e:

-   First, a new item stack is created with the item type and count taken from the `result` field of the described recipe
-   Then, components from a source stack (the actual ingredient depends on the described recipe) are applied to the new stack
-   Lastly, components from the `result` field are applied to the new stack

**Changed `minecraft:crafting_transmute`**

-   Recipes with this type can now accept multiple items matched by the `material` ingredient

Added fields:

-   `material_count` - Integer range, the amount of items matched by the `material` ingredient
    -   Must be a subrange of `[2,8]`
    -   Default: `[1,1]` (i.e. exactly one item)
-   `add_material_count_to_result` - Boolean
    -   Default: `false`
    -   When `true`, the amount of slots containing items matched by the `material` ingredient will be added to the final count of the result

**Added `minecraft:crafting_dye`**

-   Replaces `minecraft:crafting_special_armordye`
-   Output:
    -   This recipe will mix the current value of the `minecraft:dyed_color` component from the item matched by the `target` ingredient with the `minecraft:dye` component values from the items matched by the `dye` ingredients
    -   The result will be built by transmuting the item matched by the `target` ingredient into the `result` item stack and then applying the new value of the `minecraft:dyed_color` component

Format: object with fields:

-   `category` - String, crafting book category, one of `building`, `redstone`, `equipment`, `misc`, default: `misc`
-   `group` - String, used for grouping recipes in the crafting book, default: empty string
-   `show_notifi