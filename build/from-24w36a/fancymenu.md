# Minecraft Snapshot 24w36a

Hi everyone! In the most exciting Minecraft-related news of the day, we have a new movi- I mean snapshot coming your way! This week we are adding support for custom equipment with Data Packs and Resource Packs. We have also tweaked the Bundle so that you can empty a group of items when it's used in the hotbar. And as usual, we have included a bunch of bug fixes!

Happy mining!

## Known Issues

-   Ender Pearls will not teleport you to the right location

## Experimental Features

### Bundles

-   When a Bundle is used in the hotbar, one group of items is emptied at a time instead of everything being emptied at once

## Changes

-   Squid Spawn Eggs now only spawn adult Squids
    -   There is a 5% chance of Squids spawned in groups in the wild to be a baby
-   When a mob converts from one type to another (ex: Piglin to Zombified Piglin), the health of the converted mob is set to the same percentage of max health as the original mob had before conversion

## Technical Changes

-   The Data Pack version is now 52
-   Resource Pack version is now 37

## Data Pack Version 52

### Tags

#### Block Tags

-   `bats_spawnable_on`: Blocks that bats can spawn on

#### Item Tags

-   Added new tags to control which items can be used to repair various armor sets:
    -   `repairs_leather_armor`
    -   `repairs_iron_armor`
    -   `repairs_chain_armor`
    -   `repairs_gold_armor`
    -   `repairs_diamond_armor`
    -   `repairs_netherite_armor`
    -   `repairs_turtle_helmet`
    -   `repairs_wolf_armor`
-   `piglin_safe_armor`: Items that, when worn by a player, will cause Piglins to not get angry

### Changed Item Components

#### `minecraft:item_name`

This component is now always present on every item

### New Item Components

#### `minecraft:item_model`

-   Controls item model
-   Present on every item
-   Format: namespaced id
    -   `namespace:id` will reference model `/assets/<namespace>/models/item/<id>`

#### `minecraft:equippable`

-   If present, this item can be equipped by players in the selected slot
-   When right-clicking with an item with this component, it will be swapped into the appropriate slot
-   Format: object with fields
    -   `slot`: one of `head`, `chest`, `legs`, `feet`, `body`, `mainhand`, or `offhand`
    -   `equip_sound` (optional): Sound event to play when the item is equipped
        -   If not specified, the default armor equip sound will be played
    -   `model` (optional): namespaced ID of the equipment model to use when equipped
        -   These model definitions are loaded from Resource Packs
        -   If not specified, will fall back to rendering as the item itself when in the head slot (or no rendering if not applicable)
    -   `allowed_entities` (optional): Entity ID, Entity Tag, or list of Entity IDs to limit which entities can equip this item
        -   If not specified, any entity (that can wear this kind of equipment) is allowed to equip this item
    -   `dispensable`: boolean (default: `true`), whether the item can be equipped by using a Dispenser
        -   If the item type has special dispenser behavior, this will have no effect
    -   e.g. `equippable={slot:'chest',equip_sound:'item.armor.equip_chain'}`

#### `minecraft:glider`

-   If present, this item will allow players to glide (as with Elytra) when equipped
-   Format: empty object
    -   e.g. `glider={}`

#### `minecraft:tooltip_style`

-   If present, this item can use custom sprites for its tooltip background and frame
-   Format: namespaced ID for a tooltip style
    -   A tooltip style of `namespace:path` will use sprites with IDs:
        -   `<namespace>:tooltip/<path>_background` and `<namespace>:tooltip/<path>_frame`
    -   e.g. `tooltip_style='minecraft:special_sword'`

### Predicates

-   Added a new field in the Player sub-predicate, `input`, that can be used to detect which movement keys the player is pressing
-   If specified the predicate matches with the corresponding keybind that the player is pressing; it supports detecting the following input:
    -   `forward` : boolean (optional)
    -   `backward` : boolean (optional)
    -   `left` : boolean (optional)
    -   `right` : boolean (optional)
    -   `jump` : boolean (optional)
    -   `sneak` : boolean (optional)
    -   `sprint` : boolean (optional)

## Resource Pack Version 37

-   Introduced equipment models
-   Textures for entity equipment have been moved and renamed
-   The tooltip background and frame may now be customized by replacing sprites:
    -   `tooltip/background`: The background of the tooltip
    -   `tooltip/frame`: The frame appearing around the tooltip
    -   Items with a custom `tooltip_style` component will use sprites with IDs:
        -   `<namespace>:tooltip/<path>_background` and `<namespace>:tooltip/<path>_frame`
-   The `nine_slice` GUI sprite scaling mode has a new optional boolean property: `stretch_inner`
    -   If `true`, the inner parts of the texture (i.e. not the corners) will be stretched instead of tiled
    -   If not specified, defaults to `false` as before

### Item Models

-   All item models can now use the `broken` property in model overrides that was previously limited to just Elytra
    -   This will have a value of 1 if the item has 1 durability left, or 0 otherwise

### Custom Equipment Models

The appearance of equipment when equipped by players or certain mobs can now be customized by defining 'equipment models' in the Resource Pack.

-   Equipment model definitions are loaded from `assets/<namespace>/models/equipment/<path>.json`
    -   These can then be referenced by the `equippable` component with a model id of `namespace:path`
-   The model definition is an object with fields: `wolf_body`, `horse_body`, `llama_body`, `humanoid`, `humanoid_leggings`, `wings`
    -   All fields are optional, and can be used to specify a list of layers for the given model layer type
    -   Each field contains list of layer objects:
        -   `texture`: namespaced texture location for this layer
            -   `namespace:path` will resolve to `assets/<namespace>/textures/entity/equipment/<layer_type>/<path>.png`
        -   `dyeable`: object with fields (optional), specifying how this layer behaves when dyed (in the `dyeable` item tag, and has `dyed_color` component)
            -   `color_when_undyed`: rgb color int (optional)
            -   If specified, this layer will be tinted by the color contained in the `dyed_color` component
                -   If the item is not dyeable or not dyed, it will be tinted based on the color specified by `color_when_undyed`
                -   If `color_when_undyed` is not specified and the item is not dyed, the layer will be hidden
        -   `use_player_texture`: boolean (default: `false`), true if this layer texture should be overridden by a texture given by the player
            -   Only used for `wings` layers, which will override with the player's custom Elytra texture

A model definition specifying both player and horse armor layers might look like:

    {
      "layers": {
        "horse_body": [
          { "texture": "minecraft:iron" }
        ],
        "humanoid": [
          { "texture": "minecraft:iron" }
        ],
        "humanoid_leggings": [
          { "texture": "minecraft:iron" }
        ]
      }
    }
    

### Trims

-   All equippable items with an equipment model defined support rendering trims, based on the `trim` component
-   Trim textures will be loaded from the appropriate folder in the `textures/trims/entity` directory
    -   For example, armor with `wolf_body` layers will fetch trims from `textures/trims/entity/wolf_body`

### Moved Textures

-   All equipment-related textures have been moved to subfolders of the `textures/entity/equipment` directory
    -   Player armor textures have been moved to `textures/entity/equipment/humanoid` and `textures/entity/equipment/humanoid_leggings`
        -   `<material>_layer_1` textures have been renamed to `<material>`, and moved into the `humanoid` subdirectory
        -   `<material>_layer_2` textures have been renamed to `<material>`, and moved into the `humanoid_leggings` subdirectory
        -   `leather_layer_1_overlay` and `leather_layer_2_overlay` textures have been renamed to `leather_overlay` in their respective subdirectories
    -   `wolf_armor` and `wolf_armor_overlay` textures have moved to `textures/entity/equipment/wolf_body/` and have been renamed to `armadillo_scute` and `armadillo_scute_overlay` respectively
    -   `turtle_layer_1` has been renamed to `turtle_scute`
    -   Llama decor textures have been moved to `textures/entity/equipment/llama_body`
    -   Horse armor textures have been moved to `textures/entity/equipment/horse_body`
    -   The Elytra texture has been moved to `textures/entity/equipment/wings/elytra`
-   Armor trim textures have also been moved to match the folder structure of the regular `equipment` textures
    -   Textures in `textures/trims/models/armor` have been divided between `textures/trims/entity/humanoid` and `textures/trims/entity/humanoid_leggings`
    -   For leggings textures, the `_leggings` suffix is dropped

## Fixed bugs in 24w36a

-   [MC-16829](https://bugs.mojang.com/browse/MC-16829) The horse armor model does not show the enchantment glint effect
-   [MC-38022](https://bugs.mojang.com/browse/MC-38022) Order of rendering translucent block faces fails to update with camera position
-   [MC-88967](https://bugs.mojang.com/browse/MC-88967) Most NBT tags are not kept when a mob converts to another mob
-   [MC-92875](https://bugs.mojang.com/browse/MC-92875) Collisionless blocks ignore entities with high velocity
-   [MC-135898](https://bugs.mojang.com/browse/MC-135898) Teams are not retained when a mob converts to another mob
-   [MC-196556](https://bugs.mojang.com/browse/MC-196556) When projectiles (such as arrows and tridents) move too fast, they can't be teleported by portals and end gateways
-   [MC-196964](https://bugs.mojang.com/browse/MC-196964) Fall damage is reset when an entity converts to another entity
-   [MC-230317](https://bugs.mojang.com/browse/MC-230317) Lead disappears when mooshroom cow is sheared
-   [MC-250924](https://bugs.mojang.com/browse/MC-250924) Goat horns are missing sounds
-   [MC-259936](https://bugs.mojang.com/browse/MC-259936) Equipping armor in hand via right-click equips entire stack
-   [MC-261666](https://bugs.mojang.com/browse/MC-261666) Armor given to Villagers is lost when they convert to Zombie Villagers
-   [MC-270842](https://bugs.mojang.com/browse/MC-270842) Scores are not kept when a mob converts to another mob
-   [MC-271826](https://bugs.mojang.com/browse/MC-271826) Armor default attribute modifier component can't be removed
-   [MC-275011](https://bugs.mojang.com/browse/MC-275011) Instant mine does not work when standing inside of cobwebs
-   [MC-275228](https://bugs.mojang.com/browse/MC-275228) You can duplicate items in your creative hotbar
-   [MC-275239](https://bugs.mojang.com/browse/MC-275239) Item duplication while a screen is opened (Creative Mode)
-   [MC-275298](https://bugs.mojang.com/browse/MC-275298) Blocks with special collision behavior have a larger detection range than previously
-   [MC-275299](https://bugs.mojang.com/browse/MC-275299) Crafting using Ctrl + Drop key crafts the incorrect amount of items
-   [MC-275344](https://bugs.mojang.com/browse/MC-275344) Sweet Berry Bushes deal damage inconsistently
-   [MC-275345](https://bugs.mojang.com/browse/MC-275345) Inventory bug that causes items to be constantly shuffled
-   [MC-275416](https://bugs.mojang.com/browse/MC-275416) Baby squid or baby glow squid produces ink particles that are too far away from itself
-   [MC-275418](https://bugs.mojang.com/browse/MC-275418) Feeding baby dolphins won't speed up their growth
-   [MC-275437](https://bugs.mojang.com/browse/MC-275437) Fast moving entities freeze the server which causes watchdog crash
-   [MC-275445](https://bugs.mojang.com/browse/MC-275445) Specifying the size of a target in post effect shaders fails
-   [MC-275450](https://bugs.mojang.com/browse/MC-275450) Player Motion data no longer updates while riding another entity
-   [MC-275455](https://bugs.mojang.com/browse/MC-275455) Player motion is no longer retained on relative teleportation
-   [MC-275462](https://bugs.mojang.com/browse/MC-275462) Bats can spawn in unusual places, such as in woodland mansions and beneath trees
-   [MC-275497](https://bugs.mojang.com/browse/MC-275497) The repairable data component does not exist in armor items by default
-   [MC-275537](https://bugs.mojang.com/browse/MC-275537) Sliding down honey blocks is slower than in previous versions
-   [MC-275622](https://bugs.mojang.com/browse/MC-275622) Minecarts with TNT are more volatile than in previous releases
-   [MC-275624](https://bugs.mojang.com/browse/MC-275624) Redstone wire with custom model unexpectedly appears green
-   [MC-275638](https://bugs.mojang.com/browse/MC-275638) It is still possible to go through portals without being teleported when going quickly enough by throwing riptide tridents
-   [MC-275642](https://bugs.mojang.com/browse/MC-275642) Baby dolphins do not spawn naturally
-   [MC-275655](https://bugs.mojang.com/browse/MC-275655) Entity rotation does not visually update when using the teleport command until the world is reloaded
-   [MC-275745](https://bugs.mojang.com/browse/MC-275745) A scoreboard objective with display mode below;;_;;name renders right behind the player's name
-   [MC-275767](https://bugs.mojang.com/browse/MC-275767) Camera is shaky when riding an entity that is being constantly teleported
-   [MC-275770](https://bugs.mojang.com/browse/MC-275770) Guardian beam attacks stay yellow and do not shift colors anymore
-   [MC-276027](https://bugs.mojang.com/browse/MC-276027) Chestplates and Boots on Armor Stands render the helmet overlay texture
-   [MC-276030](https://bugs.mojang.com/browse/MC-276030) The blue highlighted text background for signs is gone
-   [MC-276064](https://bugs.mojang.com/browse/MC-276064) Tall grass generated from bone mealing a grass block will delete the 2nd block above it
-   [MC-276122](https://bugs.mojang.com/browse/MC-276122) Soul sand and magma block bubble columns don't move the player vertically in creative mode when not flying
-   [MC-276132](https://bugs.mojang.com/browse/MC-276132) Translucency sorting seems to be slightly broken
-   [MC-276179](https://bugs.mojang.com/browse/MC-276179) Zombie villagers don't raise their arms to attack again
-   [MC-276204](https://bugs.mojang.com/browse/MC-276204) Dolphins and axolotls keep trying to swim into the seabed

---

# Minecraft Snapshot 24w35a

Hello! In this week's snapshot we have addressed some important bugs related to village raid spawns, Bundles and Redstone.

Happy mining!

## Experimental Features

### Bundles

-   Selecting items in a Bundle is now only done by scrolling

> **Developer's Note**: _In previous snapshots you could select items in a Bundle with the number keys. We removed this because it was conflicting with hotkeys used by expert players, and it was not as useful now that the Bundle can have more than 10 items visible._

## Changes

-   Raiders must find a place to spawn no more than 96 blocks vertically above or below the village center, or a raid will not start
-   It is now much less likely for raiders to not find a valid place to spawn when raiding

## Technical Changes

-   The Data Pack version is now 51

## Data Pack Version 51

-   Trial Spawner configurations in fields `normal_config` and `ominous_config` are now defined in registry `trial_spawner`
    -   This allows for easier customization of Trial Spawner configurations in data packs
    -   Inlined configuration data is still supported
-   Entities' rotation on the x axis is now clamped between -90 and 90
-   `loot` command now returns an error when trying to drop from block without loot table (like air)

### Loot tables

-   Special loot table `empty` has been removed and is no longer defined in vanilla data pack

#### Sheep loot tables

-   Sheep now always uses a single loot table `entities/sheep`
-   Wool drops are still defined in sub-tables in `entities/sheep/<color>`, but they are now just dispatched from the main table
    -   Note: mutton drop is now controlled by the main table, while sub-tables are responsible only for wool drop
-   Sheep shearing is now controlled by loot table found as `shearing/sheep`

#### Mooshroom shearing loot table

-   Mooshroom shearing is now controlled by loot table found as `shearing/mooshroom`

### New conditions

#### `sheep` entity sub-predicate

New entity sub-predicate for testing sheep wool Fields:

-   `sheared` - optional boolean
-   `color` - optional wool dye color

## Fixed bugs in 24w35a

-   [MC-124331](https://bugs.mojang.com/browse/MC-124331) Redstone lamps do not show on maps
-   [MC-129298](https://bugs.mojang.com/browse/MC-129298) Drowned don't chase you if they are in 1 block deep water
-   [MC-146805](https://bugs.mojang.com/browse/MC-146805) Trader Llamas don't attack zombies, drowned, husks, zombie villager and illagers
-   [MC-148982](https://bugs.mojang.com/browse/MC-148982) Map color for wheat is incorrect
-   [MC-167906](https://bugs.mojang.com/browse/MC-167906) Beehive items at full honey level do not appear with honey in inventory/as item/in hand
-   [MC-168329](https://bugs.mojang.com/browse/MC-168329) Bees do not leave their hives in the Nether/End in some cases
-   [MC-168546](https://bugs.mojang.com/browse/MC-168546) Bee nest / hive items have no lore
-   [MC-203382](https://bugs.mojang.com/browse/MC-203382) The "Bee Our Guest" advancement description only states a beehive is required to unlock
-   [MC-270742](https://bugs.mojang.com/browse/MC-270742) Displays don't rotate properly between 179 and 180
-   [MC-272345](https://bugs.mojang.com/browse/MC-272345) Some trial spawners don't have an extra breeze out at once when ominous
-   [MC-273601](https://bugs.mojang.com/browse/MC-273601) The channeling enchantment no longer functions on tridents without an owner
-   [MC-273745](https://bugs.mojang.com/browse/MC-273745) Soul speed momentum resets when jumping on soul sand
-   [MC-275204](https://bugs.mojang.com/browse/MC-275204) Coast Armor Trim has generic "Smithing Template" name
-   [MC-275208](https://bugs.mojang.com/browse/MC-275208) You cannot move the bundle into or around the inventory using hotkeys
-   [MC-275220](https://bugs.mojang.com/browse/MC-275220) Picking up a Salmon in a Bucket doesn't keep its size
-   [MC-275222](https://bugs.mojang.com/browse/MC-275222) Salmons always have same hitbox regardless of their size
-   [MC-275256](https://bugs.mojang.com/browse/MC-275256) Snow golem shoots to the sky/floor instead of at mobs
-   [MC-275275](https://bugs.mojang.com/browse/MC-275275) Footsteps on Monster Spawners create missing subtitle
-   [MC-275279](https://bugs.mojang.com/browse/MC-275279) Raiders do not spawn on small islands even though there are close enough places around the village
-   [MC-275322](https://bugs.mojang.com/browse/MC-275322) "Subspace Bubble" is granted when exiting and entering some Nether Portals
-   [MC-275353](https://bugs.mojang.com/browse/MC-275353) Item Frame/Glow Item Frame "Fixed" tag behaving strangely since 24w33a
-   [MC-275358](https://bugs.mojang.com/browse/MC-275358) Renamed bundle's contents are not centered
-   [MC-275409](https://bugs.mojang.com/browse/MC-275409) Stuffing too many items into a bundle through commands will cause the capacity bar to overflow
-   [MC-275410](https://bugs.mojang.com/browse/MC-275410) Flying in Creative Mode no longer resists the thrust of the bubble column
-   [MC-275417](https://bugs.mojang.com/browse/MC-275417) Creepers can destroy vehicles even if mobGriefing is set to false
-   [MC-275521](https://bugs.mojang.com/browse/MC-275521) Tall seagrass can now generate when bone mealing one-high water
-   [MC-275523](https://bugs.mojang.com/browse/MC-275523) Reduced shield glint applies to the shield's item appearance
-   [MC-275586](https://bugs.mojang.com/browse/MC-275586) Renamed items highlighted in the bundle are not in italics
-   [MC-275612](https://bugs.mojang.com/browse/MC-275612) Items with rarity values highlighted in bundles do not display their rarity colors
-   [MC-275752](https://bugs.mojang.com/browse/MC-275752) Villagers indefinitely stand around items when their "CanPickUpLoot" tag is set to "0b"
-   [MC-275754](https://bugs.mojang.com/browse/MC-275754) Random stack trace sometimes appears
-   [MC-275755](https://bugs.mojang.com/browse/MC-275755) Attempting to swap armor by right clicking deletes it
-   [MC-275757](https://bugs.mojang.com/browse/MC-275757) Using a bucket deletes the bucket in most cases
-   [MC-275774](https://bugs.mojang.com/browse/MC-275774) Observers no longer detect redstone dust powering/unpowering
-   [MC-275778](https://bugs.mojang.com/browse/MC-275778) Bundle fullness bar texture and color are hardcoded
-   [MC-275800](https://bugs.mojang.com/browse/MC-275800) Translucency sorting is broken
-   [MC-275801](https://bugs.mojang.com/browse/MC-275801) Use cooldown triggers without item consumption
-   [MC-275828](https://bugs.mojang.com/browse/MC-275828) Game crashes when there is an invalid shader path
-   [MC-275837](https://bugs.mojang.com/browse/MC-275837) The use;;_;;cooldown component uses field cooldownGroup instead of cooldown;;_;;group
-   [MC-275838](https://bugs.mojang.com/browse/MC-275838) Drowned holds trident upside down
-   [MC-275843](https://bugs.mojang.com/browse/MC-275843) Using an empty map (single item in stack) doesn't create a filled map in survival mode
-   [MC-275851](https://bugs.mojang.com/browse/MC-275851) diameter in teleport;;_;;randomly consume effect is ignored
-   [MC-275959](https://bugs.mojang.com/browse/MC-275959) Drowned no longer raise their arms to attack
-   [MC-276053](https://bugs.mojang.com/browse/MC-276053) Glass bottles are deleted when used on a water source block

---

# Minecraft Snapshot 24w34a

Hello! Here is the next snapshot for 1.21.2! It contains some much-requested tweaks to experimental features, as well as some technical changes and optimizations.

Happy mining!

## Experimental Features

The following changes only apply when their respective Experiment is turned on, either by activating the corresponding experimental data pack or by turning it on in the Experiments screen while creating the world.

These experiments have no effect unless enabled. You can find more information about Feature Toggles [here](https://www.minecraft.net/en-us/article/testing-new-minecraft-features/feature-toggles-java-edition).

### Bundles

-   The Bundle tooltip now fits 3 rows and can always show at least 8 item types

> **Developer's Note**: _Items fill up a Bundle in rows of four, and when a row is full it is pushed down by the row above. This means there can be empty spaces in the top row._
> 
> _In the previous 2020 Bundle experiment, items filled in from the top without leaving any gaps. We changed this behavior because it meant that items moved left and right in the Bundle as new items were added. This made it more difficult for some players to keep track of the order of items and some even reported that the items were moving randomly!_
> 
> _With only two rows in the tooltip, the behavior of pushing a full row of items further down the Bundle removed half of the visible items, which was too much. We're adding a third row to make the design work better and allow players to see more of the items in their Bundles as they fill up._

### Minecart Improvements

Please note that the experimental features behind this toggle are not aimed at any future release at this time. Instead, this is a place for us to try out changes and gather feedback.

We are excited to hear what you think about these changes: please share your feedback on this [feedback page](https://aka.ms/fbcarts).

-   Minecarts no longer forcefully snap to the center of a block when landing on a rail
    -   Minecarts snap to corners along the diagonal, and snaps after being pushed by a Piston
    -   This allows for Piston bolts and similar contraptions
-   Dispensers are allowed to stack Minecarts again
-   Minecarts now more easily come to rest at opposing slopes
-   Minecarts no longer tilt during a short fall, or when they are falling straight down
-   Minecarts are now placed (or dispensed) with the correct rotation straight away when put on rails
    -   They are also placed with the correct rotation onto slopes
-   Minecarts no longer phase through blocks on slopes when going up or down, they collide instead

### Redstone Experiments

Please note that the experimental features behind this toggle are not aimed at any future release at this time.  
Instead, this is a place for us to try out changes and gather feedback.

We are excited to hear what you think about these changes: please share your feedback on the [feedpack page](https://aka.ms/fbredstone).

> **Developer's Note**: _The removal of excessive neighbor updates around wire affects the behavior of Quasi-Connectivity based contraptions. We plan to address these issues at a later point._

-   Redstone wire updates now have a left-first preference
    -   That means if there is a fork in a wire and the distance on both sides is the same, the left side will be updated first
    -   This removes most of the random behavior
    -   The remaining edge cases which are still random are situations where wire gets powered from above or below without enough context

## Changes

The following changes apply to the game regardless of which experiments are turned on.

-   Projectiles such as Arrows, Tridents and Fishing Bobbers now bounce on the world border if hit
-   Framerate has been improved when using higher render distances
    -   Significantly reduced the performance impact when turning the camera
-   The recipe book now repeats the last selected recipe when a "selected" key is pressed (space or either enter key)
-   Items which convert to another item after consumption will no longer do so in Creative
    -   For example, a Honey Bottle will no longer add a Glass Bottle to your inventory when consumed in Creative

## Technical Changes

-   The Data Pack version is now 50
-   Resource Pack version is now 36

## Data Pack Version 50

### Changed Item Components

#### `minecraft:food`

-   The food component has been changed to become a data container which only holds the food stats applied when the item is consumed
    -   This component no longer gives it the ability to be consumed, and can be done instead with the new `consumable` component
-   Format: object with fields
    -   `nutrition` The amount of nutrition applied when consumed
    -   `saturation` The amount of saturation applied when consumed
    -   `can_always_eat` Whether it can be consumed even when the user is not hungry

### New Item Components

#### `minecraft:use_remainder`

-   If present, will replace the item with a remainder item if its stack count has decreased after use
    -   If the item has a stack count higher than 0 after use, the remainder item will be added to the inventory instead
    -   If the inventory is full when trying to add a remainder item to it, it will be dropped on the ground instead
-   Format: single value as an item stack
    -   e.g. `use_remainder={id:'minecraft:stick', count:1}`

#### `minecraft:use_cooldown`

-   If present, this item will apply a cooldown to all items of the same type when it has been used
-   Format: object with fields
    -   `seconds`: Positive float representing the amount of seconds the cooldown will take place for
    -   `cooldown_group`: Optional namespaced id representing the cooldown group
        -   If present, this item will be part of a cooldown group and no longer share cooldowns with its base item type
        -   Instead, cooldowns applied to this item will only be shared with any other items that are part of the same cooldown group
    -   e.g. `use_cooldown={seconds:1.5, cooldown_group:"minecraft:custom_weapon"}`

#### `minecraft:consumable`

-   If present, this item can be consumed on use
    -   If `food`, `potion_contents`, `ominous_bottle_amplifier` or `suspicious_stew_contents` are also present on this item, consuming this will apply the stats and effects of those components
-   Format: object with fields
    -   `consume_seconds`: Non-negative float, the amount of seconds it takes for a player to consume the item
        -   Default value: 1.6
    -   `animation`: The animation used during consumption of the item
        -   Default value: `eat`
        -   Accepted values:
            -   `none`
            -   `eat`
            -   `drink`
            -   `block`
            -   `bow`
            -   `spear`
            -   `crossbow`
            -   `spyglass`
            -   `toot_horn`
            -   `brush`
    -   `sound`: Sound event, the sound used during and on completion of the item's consumption
        -   Default value: `entity.generic.eat`
    -   `has_consume_particles`: Boolean, whether consumption particles are emitted while consuming this item
        -   Default value: `true`
    -   `on_consume_effects`: An optional list of side effects which take place as a result of consuming this item
        -   There are currently 5 valid consume effects
        -   `minecraft:apply_effects`
            -   `effects`: A list of status effect instances applied once consumed
            -   `probability`: Float, the probability the above effects will be applied once consumed
                -   Default value: 1.0
        -   `minecraft:remove_effects`
            -   `effects`: A set of status effects removed once consumed, as either a tag or list of ids
        -   `minecraft:clear_all_effects`
            -   Clears all status effects of the consumer
        -   `minecraft:teleport_randomly`
            -   `diameter`: Positive float, the diameter that the consumer will be teleported within
                -   Default value: 16.0
        -   `minecraft:play_sound`
            -   `sound`: Sound event, played once consumed
    -   e.g. `consumable={consume_seconds:3.0, animation:'eat', sound:'entity.generic.eat', has_consume_particles:true, on_consume_effects:[{type:'minecraft:clear_all_effects'}]}`

## Resource Pack Versions 36

### Shaders & Post-process Effects

> **Developer's Note**: _Although it is possible in Resource Packs, overriding Core Shaders is considered as unsupported and not an intended Resource Pack feature. These shaders exist as part of the internal implementation of the game, and as such, may change at any time as the game's internals evolve. We understand that overriding Core Shaders is used for very cool Resource Pack features, many of which lack supported alternatives. We would like to provide better, supported alternatives in the future._

-   Shader program configurations can now specify preprocessor define directives to apply to their linked shaders
    -   Many shader implementations have been merged by making use of this
-   The format of core shader and post-processing shader configurations have been consolidated
-   The `rendertype_entity_glint_direct` shader has been removed (replaced by `rendertype_entity_glint`)
-   The `rendertype_entity_translucent_cull` shader has been removed (replaced by `rendertype_item_entity_translucent_cull`)

#### Shader Program Definitions

-   Program definitions for post-processing effects (`assets/<namespace>/shaders/program/<name>.json`) have been made consistent with core shader definitions (`assets/<namespace>/shaders/core/<name>.json`)
    -   The `blend` field has been removed, as it had no use
    -   The `attributes` field has been removed, instead the `Position` attribute will always be bound
    -   The provided uniforms have been consolidated with those provided to core shaders
        -   `Time` has been renamed to `GameTime`
-   The `vertex` and `fragment` shader references in program definitions (including post-processing effects) are now namespaced shader ids
    -   A vertex shader `<namespace>:<path>` will resolve to `assets/<namespace>/shaders/<path>.vsh`
    -   A fragment shader `<namespace>:<path>` will resolve to `assets/<namespace>/shaders/<path>.fsh`
-   Shader source files are no longer required to be in the `shaders/core` subdirectory, this only exists for organization
-   Added `defines` field to program definitions (object with fields)
    -   Allows GLSL define directives to be injected into the shader source, which can be referenced in the shader
    -   `values` (map of string to string)
        -   Will be injected as `#define <key> <value>` at the top of the file
    -   `flags` (list of strings)
        -   Will be injected as `#define <key>` at the top of the file

#### Shader Imports

-   The `#moj_import` directive now supports namespaced includes with absolute paths
    -   For example, `#moj_import <minecraft:fog.glsl>` will import `assets/minecraft/shaders/include/fog.glsl`
-   Relative imports are not namespaced and behave as before

#### Post-process Effect Definitions

-   Post-processing effect configuration has been moved out of the `assets/<namespace>/shaders/post` directory to just `assets/<namespace>/post_effect`
-   Vertex and fragment shaders used by these effects have been moved from `assets/<namespace>/shaders/program` to `assets/<namespace>/shaders/post`
-   `name` has been renamed to `program`, and is now a namespaced id of a shader program configuration
    -   `<namespace>:<path>` will resolve to `assets/<namespace>/shaders/<path>.json`

## Fixed bugs in 24w34a

-   [MC-73178](https://bugs.mojang.com/browse/MC-73178) Villagers' "CanPickUpLoot" tag cannot be set to zero
-   [MC-144327](https://bugs.mojang.com/browse/MC-144327) The bottom face texture of a blaze's rods is the same as their top face texture
-   [MC-191431](https://bugs.mojang.com/browse/MC-191431) Player spectator head is invisible / does not render in the inventory after switching to "Fabulous!"
-   [MC-269376](https://bugs.mojang.com/browse/MC-269376) Breeze fires wind charge from center of hitbox
-   [MC-269715](https://bugs.mojang.com/browse/MC-269715) Food won't be eaten when the component food.eat;;_;;seconds is less than 0.05
-   [MC-272643](https://bugs.mojang.com/browse/MC-272643) Items containing using;;_;;converts;;_;;to cannot be stacked with the original items after restarting the world.
-   [MC-273629](https://bugs.mojang.com/browse/MC-273629) Adding effects with an effects;;_;;changed advancement causes a packet error (ConcurrentModificationException) if it was triggered by Milk
-   [MC-275203](https://bugs.mojang.com/browse/MC-275203) Minecarts always spawn facing east/west and move upward slightly when being placed on rails
-   [MC-275209](https://bugs.mojang.com/browse/MC-275209) It's impossible to put water in a cauldron underwater
-   [MC-275210](https://bugs.mojang.com/browse/MC-275210) Minecarts can phase through blocks when travelling diagonally upwards
-   [MC-275211](https://bugs.mojang.com/browse/MC-275211) The enchantment glint isn't visible on dropped items
-   [MC-275213](https://bugs.mojang.com/browse/MC-275213) Hand animation still plays when trying to put lava or powder snow in an underwater cauldron
-   [MC-275218](https://bugs.mojang.com/browse/MC-275218) "Minecart rolls" sound does not play when on tracks after de-railing then re-railing
-   [MC-275219](https://bugs.mojang.com/browse/MC-275219) Hand animation still plays in creative when trying to use minecarts inside each other on the same rail
-   [MC-275221](https://bugs.mojang.com/browse/MC-275221) Baby polar bear model is messed up in 24w33a
-   [MC-275224](https://bugs.mojang.com/browse/MC-275224) Minecart items desync when using them on a rail with a minecart above it
-   [MC-275226](https://bugs.mojang.com/browse/MC-275226) Enchantment glint is not visible on items held by player and mobs in third person
-   [MC-275229](https://bugs.mojang.com/browse/MC-275229) Minecarts behave strangely on bubble columns
-   [MC-275230](https://bugs.mojang.com/browse/MC-275230) The game crashes when opening the inventory while in spectator mode
-   [MC-275232](https://bugs.mojang.com/browse/MC-275232) The mining fatigue animation appears too close
-   [MC-275237](https://bugs.mojang.com/browse/MC-275237) Cannot rename written book in an anvil
-   [MC-275241](https://bugs.mojang.com/browse/MC-275241) Minecarts continue to produce sound for a short while after being stopped
-   [MC-275246](https://bugs.mojang.com/browse/MC-275246) Crash after attempting to move item from off-hand in Creative inventory
-   [MC-275248](https://bugs.mojang.com/browse/MC-275248) Torches no longer have bottom faces
-   [MC-275249](https://bugs.mojang.com/browse/MC-275249) "FOV Effects" slider incorrectly modifying zoom values on the spyglass
-   [MC-275252](https://bugs.mojang.com/browse/MC-275252) Player head angle when crawling is now strange
-   [MC-275270](https://bugs.mojang.com/browse/MC-275270) Minecart not oriented correctly when placed on a sloped unpowered powered rail
-   [MC-275271](https://bugs.mojang.com/browse/MC-275271) Crash after attempting to move item to hotbar slot in Creative inventory
-   [MC-275273](https://bugs.mojang.com/browse/MC-275273) Baby mooshroom uses wrong scale
-   [MC-275277](https://bugs.mojang.com/browse/MC-275277) Trial chambers' encounter;;_;;4 trap often does not hit the player
-   [MC-275289](https://bugs.mojang.com/browse/MC-275289) There are empty chests in some chambers even after 24w33a
-   [MC-275293](https://bugs.mojang.com/browse/MC-275293) Internal exception when picking blocks not in hotbar but in inventory in Survival mode
-   [MC-275296](https://bugs.mojang.com/browse/MC-275296) Emissive textures are not emissive in the player's hand
-   [MC-275297](https://bugs.mojang.com/browse/MC-275297) Failing selectors and fake players in "score" selector result in an unexpected error
-   [MC-275307](https://bugs.mojang.com/browse/MC-275307) Hand doesn't show up when switching from Spectator mode
-   [MC-275310](https://bugs.mojang.com/browse/MC-275310) Cannot enchant armor in enchanting table
-   [MC-275319](https://bugs.mojang.com/browse/MC-275319) End crystals in 24w33a appear to be slightly smaller than in previous versions
-   [MC-275328](https://bugs.mojang.com/browse/MC-275328) Enchantment glint is not visible on items in item frames
-   [MC-275329](https://bugs.mojang.com/browse/MC-275329) As of 24w33a zombie villagers no longer raise their arms to attack
-   [MC-275332](https://bugs.mojang.com/browse/MC-275332) The rotation of a wall/ceiling lever and buttons does not affect the update order of wire in Redstone Experiment
-   [MC-275343](https://bugs.mojang.com/browse/MC-275343) Projectiles stuck in the world border can float in the air if the border size is changed
-   [MC-275361](https://bugs.mojang.com/browse/MC-275361) Baby zombie variant arms disconnect from their body when attacking
-   [MC-275397](https://bugs.mojang.com/browse/MC-275397) Redstone dust doesn't update properly
-   [MC-275436](https://bugs.mojang.com/browse/MC-275436) Cannot enchant books in enchanting table
-   [MC-275467](https://bugs.mojang.com/browse/MC-275467) Minecarts can launch you hundreds of thousands of blocks upwards if you derail inside cobwebs or powdered snow
-   [MC-275473](https://bugs.mojang.com/browse/MC-275473) Slim model's arms are now lower than the torso by 0.5 pixels
-   [MC-275479](https://bugs.mojang.com/browse/MC-275479) Dispensers cannot place minecarts onto rails if there is a minecart one block away
-   [MC-275482](https://bugs.mojang.com/browse/MC-275482) Minecarts do not pick up mobs like they used to
-   [MC-275486](https://bugs.mojang.com/browse/MC-275486) Enchantable data component doesn't work with items that only have enchantments through a data pack
-   [MC-275498](https://bugs.mojang.com/browse/MC-275498) Clocks, compasses and recovery compasses don't function in item frames
-   [MC-275554](https://bugs.mojang.com/browse/MC-275554) Minecarts between two downward slopes will shake violently and never settle
-   [MC-275566](https://bugs.mojang.com/browse/MC-275566) Game crash when trying to open various GUIs with Fabulous graphics
-   [MC-275569](https://bugs.mojang.com/browse/MC-275569) Outer layer of the skin shows when disabled until you go into third person

---

