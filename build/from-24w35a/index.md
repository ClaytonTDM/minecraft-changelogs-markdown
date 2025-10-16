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
-   [MC-275837](https://bugs.mojang.com/browse/MC-275837) The use\_cooldown component uses field cooldownGroup instead of cooldown\_group
-   [MC-275838](https://bugs.mojang.com/browse/MC-275838) Drowned holds trident upside down
-   [MC-275843](https://bugs.mojang.com/browse/MC-275843) Using an empty map (single item in stack) doesn't create a filled map in survival mode
-   [MC-275851](https://bugs.mojang.com/browse/MC-275851) diameter in teleport\_randomly consume effect is ignored
-   [MC-275959](https://bugs.mojang.com/browse/MC-275959) Drowned no longer raise their arms to attack
-   [MC-276053](https://bugs.mojang.com/browse/MC-276053) Glass bottles are deleted when used on a water source block

---

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
-   [MC-269715](https://bugs.mojang.com/browse/MC-269715) Food won't be eaten when the component food.eat\_seconds is less than 0.05
-   [MC-272643](https://bugs.mojang.com/browse/MC-272643) Items containing using\_converts\_to cannot be stacked with the original items after restarting the world.
-   [MC-273629](https://bugs.mojang.com/browse/MC-273629) Adding effects with an effects\_changed advancement causes a packet error (ConcurrentModificationException) if it was triggered by Milk
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
-   [MC-275277](https://bugs.mojang.com/browse/MC-275277) Trial chambers' encounter\_4 trap often does not hit the player
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

We know you have been waiting long for the next update, and we are finally kicking off the new snapshot cycle with Snapshot 24w33a!

Over the summer someone changed our password and wouldn't let us know what it was until we finished 200 bug fixes (the password was cubepork14 by the way). This update also features a Bundle of new Experiments that we are eager for you to try out!

Enable the new experimental features in the Experiments menu when creating a new world and let us know what you think!

Read below for a full list of the changes included.

Your thoughts on the game continue to shape new updates so please upvote and report any new bugs at [bugs.mojang.com](https://bugs.mojang.com/) and leave us your feedback at [feedback.minecraft.net](https://feedback.minecraft.net).

## Experimental Features

The following changes only apply when their respective Experiment is turned on, either by activating the corresponding experimental data pack or by turning it on in the Experiments screen while creating the world.

These experiments have no effect unless enabled. You can find more information about Feature Toggles [here](https://www.minecraft.net/en-us/article/testing-new-minecraft-features/feature-toggles-java-edition).

### Bundles

Bundles are back The Bundle was added to Java Edition as an experiment in 2020. We are now working on Bundles again! To test Bundles you must create a new world with the Bundles experiment turned on. (When creating a new world click ‘More’, then ‘Experiments’, then click the button next to the word ‘Bundles’.) A Bundle is an item that lets you stack different blocks or items together in the same inventory slot. Different items normally don’t stack together, so you can end up wasting space by only having a few items in each slot. A Bundle lets you pack those items together so there is no wasted space.

![Screenshots of an inventory with no empty slots and then the same inventory with 8 empty slots because some incomplete stacks have moved inside a Bundle.](https://launchercontent.mojang.com/v2/images/bundlebeforeafterimage.jpg)

The Bundle has a tooltip that shows some of the items inside. If the Bundle has up to 8 item types, you will see all of them and can pull any item out immediately. If there are more than 8 item types then some rows of items will be hidden. You may want to craft a new Bundle to keep everything easy to reach. A Bundle can be crafted with 1 String and 1 Leather. Please try out this all-new version of the Bundle and let us know what you think!

-   A Bundle only fits one stack (usually 64 items) but it can be a mixture of many different item types
-   You can insert items into a Bundle directly in the inventory
-   Bundles have a tooltip that shows the items inside
    -   If a Bundle has less than 8 item types inside, the tooltip will show all of them
    -   Otherwise the tooltip will show the top two rows of items and the others will be hidden below
-   You can select any of the visible items to pull out of the Bundle
    -   Right-click to take the first item
    -   Use the number keys or scroll wheel to select a different item, then right-click to take it

> **Developer's Note:** In the original Bundle experiment you could only pick the top item. We got a lot of feedback that players wanted more flexibility when taking items out. To address this we put a submenu inside the Bundle, which has never been done before in Minecraft!

-   When selecting an item to remove, the Bundle icon shows that item poking out of the Bundle
-   When holding a Bundle in hand, you can empty it onto the ground by right-clicking
-   The Bundle is crafted with one String above one Leather

> **Developer's Note:** The original prototype for Bundles was much more expensive to craft and used Rabbit Hide which is only available in certain biomes, so the player had to explore to get their first Bundle. In this version we’ve made it cheaper and something that you can craft at home in almost any biome. We want it to be easy to get Bundles in a new world so you can use it in your early adventures.

-   The controls have changed from the original prototype:
    -   Use left-click to put an item into a Bundle
    -   Use right-click to remove the top item type from a Bundle
    -   When the Bundle tooltip is visible, use number keys or the mouse wheel to select a different item type then use right-click to remove it

### Redstone Experiments

Added a new Experiment containing various Redstone-related changes. This can be enabled by selecting "Redstone Experiments" in the Experiments menu when creating a world.

Please note that the experimental features behind this toggle are not aimed at any future release at this time. Instead, this is a place for us to try out changes and gather feedback.  
We are excited to hear what you think about these changes: please share your feedback on the [feedpack page](https://aka.ms/fbredstone).

#### Redstone Wire

-   The performance impact of Redstone wire (connected blocks of Redstone Dust) has been improved
-   Redstone wire now only triggers block updates on blocks that may receive power from the wire
-   Before a line of wire causes block updates, the new signal strength of all connected wires is set
-   The update order around Redstone wire has been changed
    -   The aim is to make wire work the same, independent of position and orientation
    -   When possible the order is deterministic based on the context the updates are caused in
    -   When there is not enough context to fully determine the order, the rest is picked at random

> **Developer's note:** We know that randomness in Redstone is usually unwanted.  
> We've used it here because we've made things deterministic whenever it makes sense, and sometimes it just doesn't make sense - and we don't want some hidden state (like location-based hashes!) determining the order and making machines work differently at different coordinates or in different orientations.  
> The screenshot below shows an example of a 'random' vs 'non-random' wire - we think it's actually pretty logical, and is within the players control to build machines that behave deterministically.  
> But we are looking forward to hearing what you think after trying it out!

![The image shows three Redstone machines. In each of them a lever is powering a Redstone wire leading to two pistons that are trying to push into the same block. In the machine on the left, the wire to the left piston is shorter and the left piston is the one that got to extend. In the machine on the right, the wire to the right piston is shorter and the right piston is the one that got to extend. In the machine in the center, the wire is the same length to both pistons and which piston extended was picked by random choice.](https://launchercontent.mojang.com/v2/images/redstone.jpg)

##### Order in Which a Line of Wire Changes

-   When a line of wire turns on, the wires closer to the power source will cause block updates first
-   When a line of wire turns off, the wires closer to where the power source was, will cause block updates first
-   When two wires have the same distance to the power source, which of them causes updates first is picked at random
    -   The random choice is made once for the entire line of wire, to limit the amount of possible outcomes
    -   This means, when powering a line of wire from the side, it randomly chooses one of two possible update orders
    -   The advantage of having few possible update orders is that the results are more predictable

##### Block Updates Around a Wire

-   The order in which blocks around the wire update is based on the direction the wire received an update from
-   Currently, the order is: back, front, left, right, down, up
    -   left and right may be swapped, depending on the random choice made by the line of wire
-   When the updates are further distributed through solid blocks, the same order is applied there

#### Known Issues

As this experiment only changes Redstone wire, interactions with other components may not always act as expected, especially when it comes to update orders.

### Minecart Improvements

Added a new Experiment containing various movement changes to Minecarts. This can be enabled by selecting "Minecart Improvements" in the Experiments menu when creating a world.

Our long term goal is to make vehicle travel, like minecarts, a viable option for players compared to other late-game options which currently dominate most playstyles. To achieve this, we aim to make riding minecarts a smooth experience, with consistent and predictable motion and rotation. With this feature toggle we are laying a foundation to build upon in the future. We are aware of that these changes will break some existing contraptions, which is why we want to collaborate with the community to shape the upgrade and future experience of riding minecarts.

Please note that the experimental features behind this toggle are not aimed at any future release at this time. Instead, this is a place for us to try out changes and gather feedback.

We are excited to hear what you think about these changes: please share your feedback on this [feedback page](https://aka.ms/fbcarts).

#### Movement Changes

-   Minecarts will articulate their movement better when going fast, riding on the rail all the time
    -   Minecarts will now smoothly turn along with the track and are less likely to halt or derail
-   Minecarts can now jump better
    -   They keep their vertical momentum when the track ends with a slope
    -   Minecarts will tilt to visually articulate while in the air
    -   No rail grinding sound is played when Minecarts are flying through the air
-   Added a new accessibility setting that makes players follow the rotation of Minecarts they ride
    -   Defaults to off
    -   Only has effect when within a world with the experiment enabled
-   Added new gamerule `minecartMaxSpeed` that changes the maximum speed of Minecarts
    -   Defaults to 8 and goes up to 1000 blocks per second.
    -   Setting it to a specific value does not guarantee that a minecart will reach that particular max speed - there are built in air resistances and similar effects that the speed added through slopes or powered rails need to overcome
    -   This gamerule only exists in worlds with the experiment enabled

#### Minecart Changes

-   Minecarts can no longer be placed within another Minecart by the player or a dispenser
-   Minecarts can now consistently be placed next to each other along a track
-   Minecarts now pick up mobs more consistently when moving along a track

#### Known Impact

-   We are aware that these changes will make certain contraptions such as 'piston bolts' not work at all, or have their behavior changed
-   Very delicate rail networks will have their timings changed due to slight changes in speeds, movement distance, friction etc.
-   Contraptions that rely on Minecarts snapping to rails will no longer work, or have their behavior changed

## Changes

-   Various items and blocks have had their assigned rarities changed
-   Tweaked portal cooldowns of vehicles and projectiles
    -   After using a Nether Portal, Minecarts and Boats now only need to leave the portal for 0.5 seconds to use a portal again (down from previous 15 seconds)
    -   After using a Nether Portal, projectiles such as Enderpearls and Arrows now only need to leave the portal for 2 ticks to use a portal again (down from previous 15 seconds)
-   Suspicious Stew recipes are now shown in the recipe book
-   Breeze no longer have a minimum distance required to attack a target
-   Added a new death message for when killed by a Mace smash attack
-   Wolves can now also be fed cod, cooked cod, salmon, cooked salmon, tropical fish, pufferfish and rabbit stew to achieve parity with Bedrock
-   Enchanted shields now have the same reduced glint as enchanted armor
-   Banner Pattern items have new names and icons
-   Smithing Template items are now named after their template type instead of the generic "Smithing Template" name
    -   They instead specify that they are a Smithing Template through a subtitle in the hover text
-   The game will now limit the maximum framerate when it is minimized or when the player is AFK
    -   A new Video Setting is introduced to configure this behavior
-   Added language support for Tzotzil and Belarusian (Latin)
-   Tweaked Bee flight distances and cooldowns
    -   Bees now wander around randomly for less time after exiting a nest/hive
    -   If a bee has a known nest/hive, it will travel less far from it, thus being less likely to get lost
    -   Significantly increased the amount of time a Bee can take to return to a known nest/hive before it gives up trying to return home
    -   Bees are now a lot less likely to get stuck on corners or when they are close to a nest/hive they are trying to return to
    -   Bees are also now a lot less likely to try and pathfind to a flower it cannot reach
-   Updated the Bundle
-   Bats can now spawn at any height, not just below sea level, as long as it is dark enough and there is a solid block to spawn on
-   A triggered raid will no longer start if the raiders cannot find a place to spawn within a reasonable distance of the village they are trying to raid
-   Added baby versions of Dolphins, Squids, and Glow Squids
-   Added small and large Salmon variants
-   The title specified in the `written_book_content` component will now be prioritized over `custom_name` and `item_name` for any item with a non-empty title in this component
-   The performance of the server (tick rate) has been improved when using higher render distances
    -   Furthermore, the impact of loading and generating chunks on tick rate has been reduced
-   Redstone Torches have been given a new look with updated textures and models, to give it a unique and distinctive identity

### Banner Patterns

-   Each Banner Pattern item now includes their pattern type in their name instead of as a subtitle
    -   Unique item textures have been added to better distinguish each pattern type
-   The following Banner Patterns have been added to achieve parity with Bedrock:
    -   Field Masoned
        -   Crafted with Paper and Bricks
    -   Bordure Indented
        -   Crafted with Paper and Vines
-   The Bricks and Curved Border patterns in the Loom can no longer be accessed without the above Banner Patterns

### Rarity

-   Rarity is a set of categories which determine the color used to display the name of an item or block
    -   It has no gameplay impact, but is used to signal how difficult something is to obtain
    -   By default, unless specified otherwise, all items and blocks have a rarity of Common which displays their name in the color white
-   We have re-evaluated the rarity of all items and blocks in the game to more accurately reflect the current challenge of obtaining them, given the following guidelines:
    -   Items and blocks become more rare depending on the following factors:
        -   The chance of finding it in a loot table, including mob drops
        -   The amount of travelling required to obtain it
        -   The difficulty of any obstacle which must be overcome to obtain it
        -   The possible amount of that item or block which exists in the world
    -   Any item or block which can be crafted must inherit the highest rarity of its crafting ingredients
        -   For example, a Mace has an Epic rarity because one of its ingredients (the Heavy Core) has an Epic rarity
        -   Likewise, any crafted item which has only Common crafting ingredients must also be Common
-   The lists below detail the items and blocks which have changed to that rarity category

#### Common

-   End Crystal
-   Golden Apple

#### Uncommon

-   Sniffer Egg
-   Chainmail Helmet
-   Chainmail Chestplate
-   Chainmail Leggings
-   Chainmail Boots
-   Recovery Compass
-   Disc Fragment 5
-   Nautilus Shell
-   Echo Shard
-   Goat Horns
-   Pottery Sherds
-   Ominous Bottles
-   Ominous Banner
-   Netherite Upgade
-   Sentry Armor Trim
-   Dune Armor Trim
-   Coast Armor Trim
-   Wild Armor Trim
-   Tide Armor Trim
-   Snout Armor Trim
-   Rib Armor Trim
-   Wayfinder Armor Trim
-   Shaper Armor Trim
-   Raiser Armor Trim
-   Host Armor Trim
-   Flow Armor Trim
-   Bolt Armor Trim
-   The following Music Discs:
    -   13
    -   Cat
    -   Blocks
    -   Chirp
    -   Creator (Music Box)
    -   Far
    -   Mall
    -   Mellohi
    -   Stal
    -   Strad
    -   Ward
    -   11
    -   Wait
    -   Relic
    -   5
    -   Precipice

#### Rare

-   Enchanted Golden Apple
    -   Enchanted Golden Apples have become more common in recent years due to being accessible in both Ancient Cities and Trial Chambers, warranting a demotion to Rare instead of Epic
-   Trident
    -   We recently increased Trident's rarity up to Epic from Common, but after re-evaluating we felt that it was easier to obtain than other items in the Epic category such as Heavy Cores or Elytras
-   Nether Star
-   Ward Armor Trim
-   Eye Armor Trim
-   Vex Armor Trim
-   Spire Armor Trim
-   Wither Skeleton Skull
-   Skull Charge Banner Pattern
    -   Now that Wither Skeleton Skulls are Rare, these banner patterns should be Rare as well
-   Thing Banner Pattern
    -   Now that Enchanted Golden Apples are Rare, these banner patterns should be Rare as well
-   The following Music Discs:
    -   Pigstep
    -   otherside
    -   Creator

#### Epic

-   Elytra
-   Dragon Head
-   Silence Armor Trim

### Inactivity FPS limit

-   The game will now limit the maximum framerate in certain situations
-   These situations are controlled by a new Video Setting: `Reduce FPS when`
-   Possible options are:
    -   `Mimimized`
        -   Limits framerate to 10 FPS only when the game window is minimized
    -   `AFK`
        -   Limits framerate to 30 FPS when the game is not getting any player input for more than a minute
        -   Further limits to 10 FPS after 9 more minutes of no input
        -   Also limits to 10 FPS when the game window is minimized
-   The default is `AFK`

### Player Safety

#### Skin Reporting

-   Added reporting reason "Sexually inappropriate"
    -   This is intended for skins that are graphic in nature relating to sexual acts, sexual organs, and sexual violence
-   Removed reason "Defamation" due to lack of relevance for skins
-   Removed reason "Threat of harm to others" due to already being covered by "Harassment or bullying" reporting reason

#### Name Reporting

-   Added a text label above the description box to clarify that only the name of the player is subject to the report

#### Realms

-   Extended the `text-filtering-config` in order to support an internal migration for Realms Profanity Filtering
    -   Servers currently utilizing the `text-filtering-config` will be able to continue to do so without any changes

### Trial Chambers

-   Added new variations to the hallways, including "Encounters": Short challenges leading to a larger chamber.
-   Beds in intersections now have their colors randomized.
-   Replaced the empty chests at the entrance of chamber with a Hopper and Barrel to better show the players that these are meant for disposal and inventory managment!

## Technical Changes

-   The Data Pack version is now 49
-   Resource Pack version is now 35
-   Added some information about data pack structure (for example, data-driven registries) to generated reports
-   Added unique block sounds to the Monster Spawner block
-   New `server.properties` option: `pause-when-empty-seconds` (default `60`)
    -   When set to a positive value, causes the server to pause when no player has been online for that many seconds
-   Removed `server.properties` options: `spawn-animals` and `spawn-npcs`

### Network Protocol

-   Added `minecraft:client_tick_end` serverbound packet during play phase, sent when the client finishes processing its current tick
    -   This is unused by the Vanilla server, but left for use by custom server implementations
-   Added ability for custom servers to override the order that players appear in the 'tab list'
    -   This is controlled by a non-negative ordering index that is sorted highest to lowest
-   The client now shares the state of the 'Particles' limiter option to be used by custom servers

## Data Pack Version 49

-   Goat Horn instruments are now data-driven
-   Sheep shearing is now controlled by loot tables found as `shearing/sheep/<color>`
-   Mooshroom shearing is now controlled by loot tables found as `shearing/mooshroom/<variant>`
-   Snow golem shearing is now controlled by a loot table found as `shearing/snow_golem`
-   The `crafting_special_suspiciousstew` recipe type has been removed
-   Added new fields to painting variant definitions
-   Added optional field `explosion_power` to `tnt` and `tnt_minecart` types
    -   Defaults to 4
    -   For TNT minecarts, field value is added to speed-based explosion power
-   Added support for Enchantment trigger `projectile_spawned` in the following items:
    -   Snowballs
    -   Tridents
    -   Small Fireballs
    -   Thrown Potions
    -   Ender Pearls
    -   Fishing Rod
    -   Firework Rocket
    -   Wind Charge
    -   Eggs
-   Added new item components
-   Attribute IDs no longer have `generic.`, `player.` and `zombie.` prefixes
-   Recipe ingredient format has been simplified
-   Invalid `selector` patterns in Chat Components will now cause commands to fail to parse, instead of resolving to an empty string
-   Added `tempt_range` attribute - can be used to change the range, in blocks, at which temptable mobs can be tempted

### Instruments

Goat Horn instruments are now defined in a data pack registry folder called `instruments`. Like other registries, changing this content in data packs is considered experimental and requires a full world re-load to take effect.

Fields:

-   `sound_event`: The sound event the instrument plays
-   `range`: The maximum range (in blocks) at which the sound can be heard
-   `use_duration`: The amount of time (in seconds) the instrument is considered in use after triggering, which also serves as its cooldown
-   `description`: A Text Component used as the descrpition of the instrument in item tooltips

### Painting variant

-   Added new optional fields `author` and `title`, holding text components to be displayed in the creative menu tooltip
-   This replaces previous mechanism where those values were derived from variant name
-   Author tooltip has been removed for `earth`, `wind`, `fire`, `water` and `wither` variants

### Tags

#### Item Tags

-   `furnace_minecart_fuel`: Items that can be used to refuel furnace minecart
-   `villager_picks_up`: Items that a Villager will try to pick up from the ground
-   Added new tags to control which items can be used to craft and repair various tool sets:
    -   `wooden_tool_materials`
    -   `iron_tool_materials`
    -   `gold_tool_materials`
    -   `diamond_tool_materials`
    -   `netherite_tool_materials`

### New Item Components

#### `minecraft:repairable`

-   If present, and this item is damageable, this item can be repaired in an Anvil using the specified ingredient
-   Format: object with fields
    -   `items`: Item, list of Items, or hash-prefixed Item Tag matching what can be used to repair this item
    -   e.g. `repairable={items:'stick'}`

#### `minecraft:enchantable`

-   If present (and any enchantments are applicable), this item can be enchanted in an Enchanting Table
-   Format: object with fields
    -   `value`: Positive integer, a higher value allows enchantments with a higher cost to be picked
    -   e.g. `enchantable={value:15}`

### Recipes

The format used for recipe ingredients has been simplified and aligned with other fields that accept item lists (like item predicates):

-   For items: `{ "item": "<item id>" }` now becomes `"<item id>"`
-   For tags: `{ "tag": "<tag id>" }` now becomes `"#<tag id>"`
-   Lists of items are still allowed, but tags can no longer appear in such list
-   Remaining restrictions:
    -   `minecraft:air` can't appear anywhere in ingredient
    -   ingredient must have at least one tag or item
-   Fields `template`, `base` and `addition` in `smithing_transform` and `smithing_trim` recipes are now optional instead of accepting empty list

## Resource Pack Version 35

-   Added break, fall, hit, place, and step sounds for the Spawner block
-   Removals and renames of some translations is now automatically applied at startup
-   Updated the format of post-processing effect definitions
-   Added support for emissive layers for block models
-   The texture map for the Arrow and Bee Stinger models have been updated
-   The model and UV mapping of the Dragon Egg have been updated
-   Updated textures, models and sounds for the Bundle item
    -   Bundle icon has new models and textures
    -   The Bundle UI has new textures and scaling
    -   Added a new sound for when failing to add an item to a Bundle
-   The models and UV mapping related to the Torch and blocks containing Redstone Torch have been updated
-   Added new models for the Redstone Torch and updated its texture

### Shaders & Post-process Effects

-   The format of post-processing effect configurations have been updated
-   The `ChunkOffset` uniform in terrain shaders has been renamed to `ModelOffset`

#### Post-process Effect Definitions

-   `intarget` and `auxtargets` have been merged into a single `inputs` list, as specified by the input format below
-   `outtarget` has been renamed to `output` with the same format
-   `targets` is now a map between target name and target definition, as opposed to a list
    -   Inline target names are replaced with an empty object
        -   For example, `["swap"]` becomes `{"swap": {}}`
    -   Target definitions with a specific size remain the same, with the `name` field moved into the map key
        -   For example, `[{"name": "potato", "width": 16, "height": 16}]` becomes `{"potato": {"width": 16, "height": 16}}`

##### Input Format

For both render target and texture inputs, the following fields may be specified:

-   `sampler_name`: string - prefix to set up both `_Sampler` and `_Size` uniforms
    -   For example, `"sampler_name": "Diffuse"` will link to the `DiffuseSampler` and `DiffuseSize` uniforms
    -   This was previously always `DiffuseSampler` and `InSize` for `intarget`
    -   For `auxtargets`, the `name` defined the sampler uniform, and the size was given as `AuxSize<index>`
-   `bilinear`: boolean (default: `false`) - if true, the input will be sampled with a bilinear filter
    -   This formerly only existed on texture inputs, however now functions for render targets
    -   For render targets, replaces the now removed `use_linear_filter` field on the pass definition

For inputs from a render target, the following fields may be specified:

-   `target`: namespaced id - the render target id
    -   Either a custom target id defined in the same file, or `minecraft:main` to reference the main screen target
    -   This replaces the former `id` field, which was a free-form string
-   `use_depth_buffer`: boolean (default: `false`) - true to sample from the depth texture, false to sample from the color texture
    -   This replaces the former `:depth` suffix applied to the target id

For inputs from a static texture, the following fields may be specified:

-   `location`: namespaced string - the location to a static texture file that can be sampled by the effect
    -   As the `id` field did before, this resolves to a texture at `assets/<namespace>/textures/effect/<path>.png`
-   `width`: positive integer - width in pixels of the texture
-   `height`: positive integer - height in pixels of the texture

##### External Targets

-   The 'Fabulous' graphics transparency post-processing config no longer specifies the sorted framebuffers as custom targets
    -   These are instead imported in the same way as the `minecraft:main` target
    -   `translucent`, `itemEntity`, `particles`, `weather`, `clouds` are now `minecraft:translucent`, `minecraft:item_entity`, `minecraft:particles`, `minecraft:weather`, and `minecraft:clouds` respectively
-   The entity outline processing shader similarly imports the `minecraft:entity_outline` target

## Translation removals and renames

-   During load some deprecated translation strings will now be removed and/or renamed
-   Packs that used those translations will need to re-add them manually
-   The full list is available in `/assets/minecraft/lang/deprecated.json` file inside the game's JAR file

## Emissive layers for block models

-   Added an optional `light_emission` field to block model elements
-   Integer value between 0 and 15, with 0 being the default value (no light emission)
-   If specified and non-zero, this will behave as the minimum light level that the element can receive

## Fixed bugs in Snapshot 24w33a

-   [MC-379](https://bugs.mojang.com/browse/MC-379) spawn-animals and spawn-npcs=false removes all villagers and prevents summoning new mobs
-   [MC-1673](https://bugs.mojang.com/browse/MC-1673) Several mobs can pop off paintings, item frames and leads and destroy minecarts, armor stands and anything in item form even when mobGriefing is turned off
-   [MC-3266](https://bugs.mojang.com/browse/MC-3266) Your experience level overflows once it exceeds the integer limit
-   [MC-3697](https://bugs.mojang.com/browse/MC-3697) TNT submerged in water can destroy item frames, paintings, armor stands, and other similar entities
-   [MC-4665](https://bugs.mojang.com/browse/MC-4665) Anvil consuming 2 unbroken items of the same kind when renaming them
-   [MC-14800](https://bugs.mojang.com/browse/MC-14800) When zombie villagers, husks, drowned or zombified piglins are damaged, they spawn regular zombie reinforcements
-   [MC-49628](https://bugs.mojang.com/browse/MC-49628) When in spectator mode the head overlay shows even if it is set not to show in the skin customisation options
-   [MC-53602](https://bugs.mojang.com/browse/MC-53602) Projectiles don't collide with the world border
-   [MC-55863](https://bugs.mojang.com/browse/MC-55863) It rains over unloaded chunks, ignoring the biome
-   [MC-59471](https://bugs.mojang.com/browse/MC-59471) String can be duplicated using tripwire hooks
-   [MC-72494](https://bugs.mojang.com/browse/MC-72494) In Statistics screen 'm' is the same unit for both minutes and meters
-   [MC-75494](https://bugs.mojang.com/browse/MC-75494) Lead item drop is not affected by doEntityDrops gamerule
-   [MC-86252](https://bugs.mojang.com/browse/MC-86252) Shields can continue to block after entity changes dimensions due to client and server desync
-   [MC-89883](https://bugs.mojang.com/browse/MC-89883) Squid and glow squid collision error and rubberbanding
-   [MC-92875](https://bugs.mojang.com/browse/MC-92875) Collisionless blocks ignore entities with high velocity
-   [MC-101376](https://bugs.mojang.com/browse/MC-101376) Elytra appearance doesn't update in 1st person mode; only in 3rd person
-   [MC-112257](https://bugs.mojang.com/browse/MC-112257) Some NBT tags require the correct suffix
-   [MC-120417](https://bugs.mojang.com/browse/MC-120417) Incorrect dragon egg block model
-   [MC-121013](https://bugs.mojang.com/browse/MC-121013) "Followrange" Attribute only targets mobs on (roughly) the same y level.
-   [MC-125642](https://bugs.mojang.com/browse/MC-125642) Bone meal is consumed when used on fern, grass and seagrass even if it cannot grow
-   [MC-127995](https://bugs.mojang.com/browse/MC-127995) You can use bone meal on sea pickles in situations where no sea pickles will grow
-   [MC-129826](https://bugs.mojang.com/browse/MC-129826) \["shade": false\] is missing from potted cross models, resulting in most potted plants appearing darker than they should
-   [MC-130097](https://bugs.mojang.com/browse/MC-130097) Tropical fish fin UV mapping wrong
-   [MC-132804](https://bugs.mojang.com/browse/MC-132804) Low follow range attribute also affects mobs' idle wandering range
-   [MC-133862](https://bugs.mojang.com/browse/MC-133862) Optimize world screen backup button has inaccurate text
-   [MC-135971](https://bugs.mojang.com/browse/MC-135971) Can't use CTRL+Q in crafting table
-   [MC-137053](https://bugs.mojang.com/browse/MC-137053) You cannot set the "CanBreakDoors" NBT tag of drowned to "1b"
-   [MC-144761](https://bugs.mojang.com/browse/MC-144761) Animated texture interpolation ignores alpha channel during transition from/to transparent pixels
-   [MC-145656](https://bugs.mojang.com/browse/MC-145656) Attribute "follow\_range" is not working for hostile mobs before they find the target
-   [MC-151828](https://bugs.mojang.com/browse/MC-151828) Woodland mansion structure '1x1\_b3' has dark oak leaf block with persistent tag set to 'false'
-   [MC-156579](https://bugs.mojang.com/browse/MC-156579) Creative players can fly through portals when going quickly enough using elytra or Riptide trident
-   [MC-161913](https://bugs.mojang.com/browse/MC-161913) Misalignment on edges/corners of clouds
-   [MC-162713](https://bugs.mojang.com/browse/MC-162713) Clouds are generated with offset to east and south
-   [MC-165182](https://bugs.mojang.com/browse/MC-165182) Inventory/GUI textures no longer handle translucent pixels correctly
-   [MC-166880](https://bugs.mojang.com/browse/MC-166880) Pufferfish spikes model seems to be broken
-   [MC-174732](https://bugs.mojang.com/browse/MC-174732) Semi-transparent status effect textures do not render correctly in the inventory or beacon UI
-   [MC-179629](https://bugs.mojang.com/browse/MC-179629) Faces in between cloud "blocks" can still render from outside of the cloud
-   [MC-180272](https://bugs.mojang.com/browse/MC-180272) en\_us.json contains unused strings
-   [MC-182478](https://bugs.mojang.com/browse/MC-182478) Mob armor generates starting with boots rather than helmet
-   [MC-182877](https://bugs.mojang.com/browse/MC-182877) Piglins use one hand to hold a loaded crossbow
-   [MC-183518](https://bugs.mojang.com/browse/MC-183518) High CPU usage on hypervisor host possibly due to excessive syscall usage by Minecraft Server
-   [MC-183636](https://bugs.mojang.com/browse/MC-183636) follow\_range attribute not working for piglins
-   [MC-187920](https://bugs.mojang.com/browse/MC-187920) Bees sometimes give up when returning home
-   [MC-188217](https://bugs.mojang.com/browse/MC-188217) Bees circle above flower that is covered by all sides
-   [MC-190163](https://bugs.mojang.com/browse/MC-190163) Zoglin spawn eggs don't occasionally spawn baby zoglins on their own accord
-   [MC-190484](https://bugs.mojang.com/browse/MC-190484) Sneaking players' name tags are partly invisible depending on what angle you're facing
-   [MC-195754](https://bugs.mojang.com/browse/MC-195754) Illagers in raids continuously try and fail to pick up ominous banners if they can't reach them
-   [MC-196556](https://bugs.mojang.com/browse/MC-196556) When projectiles (such as arrows and tridents) move too fast, they can't be teleported by portals and end gateways
-   [MC-203748](https://bugs.mojang.com/browse/MC-203748) Filled lava cauldrons are able to be put under water
-   [MC-209947](https://bugs.mojang.com/browse/MC-209947) minecraft:block/scaffolding\_unstable has incorrect cullfaces
-   [MC-215332](https://bugs.mojang.com/browse/MC-215332) Glow squids lack a baby variant
-   [MC-215752](https://bugs.mojang.com/browse/MC-215752) Z-fighting with paintings and item frames in solid blocks
-   [MC-224035](https://bugs.mojang.com/browse/MC-224035) Small Dripleaf's model is inconsistent
-   [MC-224454](https://bugs.mojang.com/browse/MC-224454) Entities don't recognize azaleas or flowering azaleas as obstacles when pathfinding
-   [MC-225270](https://bugs.mojang.com/browse/MC-225270) Goats can move armor stands even with mobGriefing turned off
-   [MC-226038](https://bugs.mojang.com/browse/MC-226038) Scheduled functions are part of weather in profile results
-   [MC-226687](https://bugs.mojang.com/browse/MC-226687) Sea Level is assumed to be Y = 63 in numerous parts of Minecraft
-   [MC-227139](https://bugs.mojang.com/browse/MC-227139) Sky fog stutters
-   [MC-234318](https://bugs.mojang.com/browse/MC-234318) Small dripleaf stems intersect its leaves
-   [MC-239581](https://bugs.mojang.com/browse/MC-239581) Bees do not become angry at the closest player when hive is exploded
-   [MC-240948](https://bugs.mojang.com/browse/MC-240948) Filled powder snow cauldrons are able to be put under water
-   [MC-241873](https://bugs.mojang.com/browse/MC-241873) Ravagers can move armor stands even with mobGriefing turned off
-   [MC-243413](https://bugs.mojang.com/browse/MC-243413) Some Explorer Maps are missing their icon
-   [MC-244720](https://bugs.mojang.com/browse/MC-244720) "Erased cached data" button in Optimize World is not labeled in the right order when using Tab
-   [MC-245510](https://bugs.mojang.com/browse/MC-245510) Piglin Brute's generic.follow\_range attribute functions oddly
-   [MC-247238](https://bugs.mojang.com/browse/MC-247238) Sky fog is not cylindrical
-   [MC-249067](https://bugs.mojang.com/browse/MC-249067) Ominous banners lose their rarity color when renamed using anvils
-   [MC-249901](https://bugs.mojang.com/browse/MC-249901) Frogs don't play the frog eating sound when given a slime ball
-   [MC-256422](https://bugs.mojang.com/browse/MC-256422) Some words within some strings use right single quotation marks instead of apostrophes
-   [MC-257309](https://bugs.mojang.com/browse/MC-257309) Monster spawner tries to spawn wardens and zoglins when the difficulty is Peaceful
-   [MC-259687](https://bugs.mojang.com/browse/MC-259687) "Distance by Elytra" statistic is approximately doubled
-   [MC-259798](https://bugs.mojang.com/browse/MC-259798) Block hitboxes cause semi-transparent blocks not to render behind them in lower than "Fabulous" graphics settings
-   [MC-260013](https://bugs.mojang.com/browse/MC-260013) Baby Llama's head has incorrect scale method
-   [MC-260858](https://bugs.mojang.com/browse/MC-260858) The word "ticks" within a "/schedule" command feedback message is always pluralized
-   [MC-260859](https://bugs.mojang.com/browse/MC-260859) Some words within a tick profiling feedback message are always pluralized
-   [MC-260860](https://bugs.mojang.com/browse/MC-260860) Some words within some chat delay strings are always pluralized
-   [MC-260913](https://bugs.mojang.com/browse/MC-260913) The word "blocks" within some "/spreadplayers" command feedback messages is always pluralized
-   [MC-260914](https://bugs.mojang.com/browse/MC-260914) "/spreadplayers" strings for entities consist of inconsistent noun usage
-   [MC-261691](https://bugs.mojang.com/browse/MC-261691) Bees get stuck while trying to pathfind to inaccessible flowers
-   [MC-262112](https://bugs.mojang.com/browse/MC-262112) Wither skull's bounding box is wrongly positioned in the first tick, and cannot be selected with volume checks in commands
-   [MC-262175](https://bugs.mojang.com/browse/MC-262175) The "advancements.adventure.trim\_with\_any\_armor\_pattern.description" text contains incorrect English grammar
-   [MC-262498](https://bugs.mojang.com/browse/MC-262498) Underground seagrass feature files exist despite never generating
-   [MC-262652](https://bugs.mojang.com/browse/MC-262652) Dragon egg's side texture is mapped strangely as of 1.8 (and the model is also unoptimized)
-   [MC-263838](https://bugs.mojang.com/browse/MC-263838) doLimitedCrafting gamerule does not work on suspicious stew
-   [MC-263858](https://bugs.mojang.com/browse/MC-263858) Text Displays are rendered differently compared to name tags
-   [MC-264886](https://bugs.mojang.com/browse/MC-264886) Geode features ignore the invalid\_blocks field
-   [MC-264986](https://bugs.mojang.com/browse/MC-264986) Item count of fuel slot affects the way smelting recipe book moves ingredients
-   [MC-265554](https://bugs.mojang.com/browse/MC-265554) Aaron Cherof listed as "Aaron Cherof\\u00a0" in credits.json
-   [MC-265693](https://bugs.mojang.com/browse/MC-265693) Movement does not reset a player's last action time
-   [MC-265695](https://bugs.mojang.com/browse/MC-265695) The feedback for setting the idle timeout to 0 minutes does not reflect the actual behavior
-   [MC-265703](https://bugs.mojang.com/browse/MC-265703) BrushableBlock's codec misspells 'completed' as 'comleted'
-   [MC-266441](https://bugs.mojang.com/browse/MC-266441) Multiple trial chamber templates have missing or incorrect blocks
-   [MC-266949](https://bugs.mojang.com/browse/MC-266949) Monster spawner tries to spawn breezes when the difficulty is Peaceful
-   [MC-267006](https://bugs.mojang.com/browse/MC-267006) The Distance Flown statistics rapidly increases when you are standing in Ender Dragon's hitbox
-   [MC-267107](https://bugs.mojang.com/browse/MC-267107) Spawners unsuccessfully try to summon hostile entities on peaceful difficulty
-   [MC-267401](https://bugs.mojang.com/browse/MC-267401) All the player skin report's category descriptions use the chat message ones
-   [MC-267838](https://bugs.mojang.com/browse/MC-267838) Projectile yaw rotations have incorrect interpolation, causing flickering
-   [MC-268045](https://bugs.mojang.com/browse/MC-268045) The name of Entity Argument is plural in Query literal node of Experience command
-   [MC-268220](https://bugs.mojang.com/browse/MC-268220) Zoglins ignore monster spawning requirements when spawning naturally
-   [MC-268241](https://bugs.mojang.com/browse/MC-268241) The bottom faces of vaults aren't culled when covered by blocks
-   [MC-268528](https://bugs.mojang.com/browse/MC-268528) Cave Vines can be pollinated infinitely (instead of limit of 10)
-   [MC-268645](https://bugs.mojang.com/browse/MC-268645) Scheduling a macro function silently fails
-   [MC-268929](https://bugs.mojang.com/browse/MC-268929) pack.png does not support translucent pixels
-   [MC-269083](https://bugs.mojang.com/browse/MC-269083) Effect background texture in inventory renders translucent pixels as opaque
-   [MC-269152](https://bugs.mojang.com/browse/MC-269152) nine\_slice texture scaling will cause ridiculous levels of lag when used on small textures
-   [MC-269352](https://bugs.mojang.com/browse/MC-269352) The breeze rod uses an incorrect model for holding
-   [MC-269375](https://bugs.mojang.com/browse/MC-269375) Breeze's wind charge attack can move or break armor stands when mobGriefing is disabled
-   [MC-269428](https://bugs.mojang.com/browse/MC-269428) Mace fall damage multiplier does not apply to mobs
-   [MC-269440](https://bugs.mojang.com/browse/MC-269440) Text fields render translucent pixels as opaque
-   [MC-269441](https://bugs.mojang.com/browse/MC-269441) Difficulty lock button renders translucent pixels as opaque
-   [MC-269445](https://bugs.mojang.com/browse/MC-269445) Some empty slot icons render translucent pixels as opaque
-   [MC-269528](https://bugs.mojang.com/browse/MC-269528) Recipe book tabs are rendered over items held by the mouse cursor
-   [MC-269549](https://bugs.mojang.com/browse/MC-269549) Items held in cursor are rendered behind recipe book UI elements
-   [MC-269622](https://bugs.mojang.com/browse/MC-269622) Previous/Next Page buttons render translucent pixels as opaque
-   [MC-269627](https://bugs.mojang.com/browse/MC-269627) Toasts render translucent pixels as opaque
-   [MC-269656](https://bugs.mojang.com/browse/MC-269656) Feeding parrots poison while holding mace grants Over-Overkill challenge
-   [MC-269738](https://bugs.mojang.com/browse/MC-269738) Recipe book cannot quick-move oversized item stacks into applicable recipe slots
-   [MC-269751](https://bugs.mojang.com/browse/MC-269751) Advancement frames render translucent pixels as opaque
-   [MC-269814](https://bugs.mojang.com/browse/MC-269814) Can’t feed fish to wolves
-   [MC-269832](https://bugs.mojang.com/browse/MC-269832) Gamemode switcher sprites render translucent pixels as opaque
-   [MC-269834](https://bugs.mojang.com/browse/MC-269834) Statistics screen sprites render translucent pixels as opaque
-   [MC-269895](https://bugs.mojang.com/browse/MC-269895) Breezes missing higher fidelity jump animation from Bedrock
-   [MC-269936](https://bugs.mojang.com/browse/MC-269936) Transferable list (resource pack, data pack) screen buttons render translucent pixels as opaque
-   [MC-269937](https://bugs.mojang.com/browse/MC-269937) World list buttons render translucent pixels as opaque
-   [MC-269996](https://bugs.mojang.com/browse/MC-269996) Custom names of Interaction entities render at wrong location
-   [MC-270051](https://bugs.mojang.com/browse/MC-270051) Recipe book button renders translucent pixels as opaque
-   [MC-270299](https://bugs.mojang.com/browse/MC-270299) New data pack component crafting doesn't work with suspicious stews
-   [MC-270348](https://bugs.mojang.com/browse/MC-270348) Some slime trial spawners in trial chambers won't spawn slimes without player intervention
-   [MC-270510](https://bugs.mojang.com/browse/MC-270510) youJustLostTheGame is not the first item in the mappings
-   [MC-270518](https://bugs.mojang.com/browse/MC-270518) Scrollers in block UIs render translucent pixels as opaque
-   [MC-270519](https://bugs.mojang.com/browse/MC-270519) "Error" textures in block/entity GUIs do not support translucent textures
-   [MC-270563](https://bugs.mojang.com/browse/MC-270563) Furnace, blast furnace and smoker smelting progress and burn time indicators do not support translucent textures
-   [MC-270564](https://bugs.mojang.com/browse/MC-270564) Brewing stand fuel, bubbles and progress sprites do not support translucent textures
-   [MC-270570](https://bugs.mojang.com/browse/MC-270570) TPS chart uses OS locale specific number formatting
-   [MC-270571](https://bugs.mojang.com/browse/MC-270571) /tick command uses OS locale specific number formatting
-   [MC-270640](https://bugs.mojang.com/browse/MC-270640) Anvil text field does not support translucent textures
-   [MC-270641](https://bugs.mojang.com/browse/MC-270641) Crafter UI sprites do not support translucent pixels
-   [MC-270678](https://bugs.mojang.com/browse/MC-270678) Tabs in recipe book and Creative inventory do not support translucent pixels
-   [MC-270680](https://bugs.mojang.com/browse/MC-270680) Buttons in the beacon GUI do not support translucent pixels
-   [MC-270692](https://bugs.mojang.com/browse/MC-270692) Textures for empty slots do not support translucent pixels
-   [MC-270696](https://bugs.mojang.com/browse/MC-270696) Traps are generated behind walls in Trial Chambers
-   [MC-270697](https://bugs.mojang.com/browse/MC-270697) Stonecutter recipe buttons render translucent pixels as opaque
-   [MC-270698](https://bugs.mojang.com/browse/MC-270698) Loom recipe buttons render translucent pixels as opaque
-   [MC-270726](https://bugs.mojang.com/browse/MC-270726) Advancement backgrounds render translucent pixels as opaque
-   [MC-270741](https://bugs.mojang.com/browse/MC-270741) Realms main menu icons do not render translucent pixels correctly, but accessibility/language icons do
-   [MC-270764](https://bugs.mojang.com/browse/MC-270764) Recipe book buttons and icons do not render translucent pixels correctly
-   [MC-270765](https://bugs.mojang.com/browse/MC-270765) Bundle background does not handle translucent pixels correctly
-   [MC-270775](https://bugs.mojang.com/browse/MC-270775) Ominous vault failed to generate sometimes
-   [MC-271113](https://bugs.mojang.com/browse/MC-271113) Bees occasionally freezing right before they enter the hives
-   [MC-271191](https://bugs.mojang.com/browse/MC-271191) Poor saving performance due to large amount of item frames
-   [MC-271628](https://bugs.mojang.com/browse/MC-271628) Enchantment effect "projectile\_spawned" doesn't trigger for fishing rods and tridents
-   [MC-272327](https://bugs.mojang.com/browse/MC-272327) Attribute effects not properly postfixed with slot name
-   [MC-272414](https://bugs.mojang.com/browse/MC-272414) Redundant calculation causes 2x lag during explosions
-   [MC-272506](https://bugs.mojang.com/browse/MC-272506) Fast switching between servers causes disconnect
-   [MC-272603](https://bugs.mojang.com/browse/MC-272603) Riding an entity into the end fountain skips the credits
-   [MC-272649](https://bugs.mojang.com/browse/MC-272649) After a chest with the item component "container\_loot" is opened, it will appear on the subsequent pick Block
-   [MC-272670](https://bugs.mojang.com/browse/MC-272670) Crash while saving entity NBT - Cannot encode empty ItemStack
-   [MC-272766](https://bugs.mojang.com/browse/MC-272766) When riding a minecart through a portal, the direction the player is facing after they go through the portal is not the same as when they entered
-   [MC-272802](https://bugs.mojang.com/browse/MC-272802) Ender pearls deal no damage to their owners after switching dimensions and landing
-   [MC-272804](https://bugs.mojang.com/browse/MC-272804) The mining fatigue animation plays in reverse
-   [MC-272805](https://bugs.mojang.com/browse/MC-272805) Command blocks made from Pick Block still do not activate when placed near sources of power
-   [MC-272821](https://bugs.mojang.com/browse/MC-272821) Wind Charges incorrectly negate fall damage
-   [MC-272932](https://bugs.mojang.com/browse/MC-272932) Auto-save text in the pause menu is rendered at the wrong position
-   [MC-272994](https://bugs.mojang.com/browse/MC-272994) Allays assigned to a player can be set on fire with sweeping and fire aspect
-   [MC-273076](https://bugs.mojang.com/browse/MC-273076) Breeze immediately forgets the player once Line of Sight is lost, even through transparent blocks
-   [MC-273239](https://bugs.mojang.com/browse/MC-273239) Trial Spawners rapidly change block state when switching gamerule "doMobSpawning" from false to true
-   [MC-273263](https://bugs.mojang.com/browse/MC-273263) Attributes are retained even if destroyed by "damage\_item"
-   [MC-273281](https://bugs.mojang.com/browse/MC-273281) "projectile\_spawned" Enchantment Component runs predicates and effects on projectiles before all of their data has been assigned
-   [MC-273288](https://bugs.mojang.com/browse/MC-273288) Dropping a stack of items while in the creative mode inventory deletes them
-   [MC-273311](https://bugs.mojang.com/browse/MC-273311) Taking near Float.MAX\_VALUE damage from mob attack through commands on hard causes NaN Absorption and Health
-   [MC-273328](https://bugs.mojang.com/browse/MC-273328) Stars are smaller than supposed to
-   [MC-273361](https://bugs.mojang.com/browse/MC-273361) Entities teleported to the player from a force loaded chunk are not rendered
-   [MC-273377](https://bugs.mojang.com/browse/MC-273377) No debug stick in hand, but I can still edit blocks
-   [MC-273400](https://bugs.mojang.com/browse/MC-273400) Baby zombified piglin chicken jockeys immediately teleport
-   [MC-273427](https://bugs.mojang.com/browse/MC-273427) Respawn anchor loses charges when returning from the End
-   [MC-273464](https://bugs.mojang.com/browse/MC-273464) Incorrect partial tick during screen render
-   [MC-273489](https://bugs.mojang.com/browse/MC-273489) Sneaking players' name tags are barely visible
-   [MC-273578](https://bugs.mojang.com/browse/MC-273578) Interaction entities position passengers incorrectly
-   [MC-273662](https://bugs.mojang.com/browse/MC-273662) Trial spawners cannot spawn silverfish at all/have unusually long delays between spawns
-   [MC-273672](https://bugs.mojang.com/browse/MC-273672) When spectatorsGenerateChunks is set to false, the player cannot stop spectating an entity without running /spectate
-   [MC-273758](https://bugs.mojang.com/browse/MC-273758) Ominous item spawner's animation breaks if the level.dat "Time" value is over a certain number
-   [MC-273771](https://bugs.mojang.com/browse/MC-273771) Passengers can glitch into walls when their mounts are killed
-   [MC-273811](https://bugs.mojang.com/browse/MC-273811) Ender pearls don't teleport the player if he hasn't been in the pearl's dimension after relog
-   [MC-273822](https://bugs.mojang.com/browse/MC-273822) The words "forwards" and "backwards" within two movement key bind strings aren't spelled in American English
-   [MC-273828](https://bugs.mojang.com/browse/MC-273828) Movement predicate is incorrect for stationary players until either mouse is moved or one second elapses
-   [MC-273848](https://bugs.mojang.com/browse/MC-273848) Players can spawn underwater again in 1.21
-   [MC-273850](https://bugs.mojang.com/browse/MC-273850) Shield enchantment glint is too bright to clearly see banner patterns
-   [MC-273914](https://bugs.mojang.com/browse/MC-273914) Client game options that do not constitute sending a network packet will send one anyway
-   [MC-273960](https://bugs.mojang.com/browse/MC-273960) The NBT data stored in the world affects copying a Decorated Pot in creative mode
-   [MC-274030](https://bugs.mojang.com/browse/MC-274030) Item stacks with a count over 99 cause the player to get kicked from their world in creative mode
-   [MC-274244](https://bugs.mojang.com/browse/MC-274244) minecraft:villager\_plantable\_seeds tag does not allow farmer Villagers to pick up items
-   [MC-274371](https://bugs.mojang.com/browse/MC-274371) Depleting a Respawn Anchor doesn't play any sound
-   [MC-274372](https://bugs.mojang.com/browse/MC-274372) using\_item advancement trigger keeps being activated even after the item stops being used, after teleporting to another dimension
-   [MC-274400](https://bugs.mojang.com/browse/MC-274400) Dispensers firing a wind charge play the crafter crafting world event, showing incorrect particles beneath the block
-   [MC-274519](https://bugs.mojang.com/browse/MC-274519) Minecraft resaves all maps with every autosave
-   [MC-274657](https://bugs.mojang.com/browse/MC-274657) Ominous Banner's orange name is handled as a custom text color, rather than as a rarity
-   [MC-274708](https://bugs.mojang.com/browse/MC-274708) Exiting the end portal first time removes player attribute modifiers
-   [MC-274852](https://bugs.mojang.com/browse/MC-274852) "item\_name" component has priority over signed book title
-   [MC-274911](https://bugs.mojang.com/browse/MC-274911) If the raid begins more than 112 blocks above the ground, all illagers will be summoned and the player wins
-   [MC-274960](https://bugs.mojang.com/browse/MC-274960) Registries allow duplicate entries

---

We are now releasing snapshot 24w21b to fix a frequent crash which happened when Zombies spawned in areas of high local difficulty.

## Fixed bugs in 24w21b

-   [MC-272321](https://bugs.mojang.com/browse/MC-272321) Crash after upgrading snapshot world to 24w21a

---

This week we're bringing a Snapshot you can vibe out to! This time around we're bringing data-driven jukeboxes, a new gamerule, and a bunch of fixes.

Happy vibing!

## Changes

-   It seems we cooked a bit too hard with the new Piston sounds last week, which is why we're reverting back to the old sounds again
-   Lowered volume of original sounds to address initial feedback of Pistons being too loud
-   Pause menu now can include a list of links provided by server
-   Improvements to the disconnection screen
-   Any member of a Realm can now upgrade a world
-   In the Realms main screen, all online players of a Realm are displayed
    -   When hovered, a tooltip is shown with each player's head and name

### Vault

-   Added sound effect to help players understand they've already looted a vault

### Trial Chambers

-   Trial Chambers are less likely to generate in the Deep Dark

### Animal Panic

-   Animals now panic based on the damage caused by predefined Damage Source Types
-   The panic lasts for 2 seconds after the damage is dealt. The following damage type tags are used by vanilla animals:
    -   `panic_environmental_causes`: Used by Wolves, Polar Bears (adults) and Pandas
    -   `panic_causes`: Used by all other animals and baby Polar Bears

### Server links

-   Servers can now provide a list of links to clients
-   If client has received any links, a new button called "Server Links..." will show up in pause game screen
    -   To make space for that button, "Report Bugs" and "Give Feedback" buttons might be moved into a sub-screen if necessary

### Disconnection screen improvements

-   In some cases client will now store detailed information about disconnection (similar to crash reports)
-   When that happens, new "Open Disconnection Report Directory" button will be added to the disconnection screen
-   When server provides link for bug reporting, it will be also be added as a button to the disconnection screen

## Technical Changes

-   Resource Pack version is now 34
-   Data Pack version is now 45
-   Server can now provide list of links to client
-   Servers can add custom details to crash and disconnection reports

### Gamerules

-   Added new `entitiesWithPassengersCanUsePortals` gamerule
    -   When `true`, entities with passengers can use Nether Portals, End Portals and End Gateways
    -   Defaults to `false`

### Server links

-   New clientbound packet `server_links` is available in `configuration` and `game` protocols
-   On receival, client will make links available from pause menu
-   Link labels can be built-in or custom (i.e. any text)
-   Some built-ins also have special fuctionality:
    -   `report_bug`:
        -   link will be displayed on disconnection screen, if disconnection was caused by packet handling error
        -   link will be included as a comment in disconnection report
-   Added `bug-report-link` to `server.properties` to allow vanilla server to configure `report_bug` links
    -   If this field is non-empty, server will send that link to clients
    -   This field should contain well-formed URL

### Custom server crash report details

-   New clientbound packet `custom_report_details` is available in `configuration` and `game` protocols
-   This packet contains a list of key-value text entries
-   If received, contents of this packet will be added in a separate section to any crash or disconnection report generated during connection to this server

## Data Pack Version 45

-   Jukebox songs are now data-driven
-   Added new command syntax

### Jukebox Songs

-   Added a jukebox song registry which is loaded from data packs
-   Path to jukebox song definition is `data/<namespace>/jukebox_song/<id>.json`
-   Fields in definition:
    -   `sound_event` - sound event that is streamed when played by a Jukebox
    -   `description` - the name of the song that will be displayed in the hover tooltip represented as a Text Component
    -   `length_in_seconds` - length of the song in seconds as a positive float
    -   `comparator_output` - the redstone signal output by a comparator when played in a Jukebox, between 0 and 15
-   Added `minecraft:jukebox_playable` item stack component

#### `jukebox_playable` item component

-   If set, the item can be inserted into Jukeboxes to play a song
-   Format: object with fields
    -   `song`: jukebox song id
        -   The song that will be played by the Jukebox when this item stack is inserted
    -   `show_in_tooltip`: boolean (default: true)
        -   If false, the name of the song will not be shown in the tooltip
        -   This was formerly controlled by the `hide_additional_tooltip` component on Music Discs
    -   e.g. `jukebox_playable={song:'minecraft:precipice'}`, `jukebox_playable={song:'minecraft:precipice', show_in_tooltip:false}`

### Attributes

-   Attribute modifiers no longer have a UUID and name combination
-   Instead, attribute modifiers are now uniquely identified by a namespaced ID, similar to other resources
-   The ID of a modifier uniquely identifies it in the set of modifiers for a single attribute
    -   Using the same ID for different modifiers is allowed as long as the modifiers are for different attributes
-   Existing built-in modifiers will be upgraded to new IDs
-   Existing custom modifiers will be upgraded to the GUID as an ID in the `minecraft` namespace

#### `attribute` command

-   The `uuid` and `name` arguments have been replaced with a singular `id` argument

#### Item Stack Attribute Modifiers

-   The `uuid` and `name` fields have been removed.
-   Attribute Modifiers now have an `id` (namespaced ID) field
    -   This is a unique identifier per attribute for the modifier

#### Entity Attributes

-   Attributes are now stored as `attributes`
-   Attribute format:
    -   `id`, renamed from `Name`
    -   `base`, renamed from `Base`
    -   `modifiers`, renamed from `Modifiers`
        -   Now stores modifiers in the same format as modifiers in `attribute_modifiers` item stack components:
            -   `id`, replaces `UUID` and `Name`
            -   `amount`, renamed from `Amount`
            -   `operation`, renamed from `Operation`, now a named constant instead of an int:
                -   `add_value` - previously `0`
                -   `add_multiplied_base` - previously `1`
                -   `add_multiplied_total` - previously `2`

### Enchantments

#### Attribute Effects

Fields:

-   `name` & `uuid` have been removed, replaced by `id`
-   `id`: The namespaced ID of the Attribute Modifier to add
    -   This will be postfixed with the slot name when the enchanted item is equipped in a slot
    -   Must be unique to avoid different Enchantments (or other systems) interfering with each others

#### Entity Effect Types

##### `damage_item`

The damage is not applied to items held by players in creative mode.

##### Hit Block Parameters

-   Entities: `this`
-   Enchantment Level
-   Origin
-   Block State

#### Effect Components

-   `minecraft:hit_block`:
    -   Condition Context: changed to take a Hit Block Parameter - `this` is the entity hitting the Block

### Tags

#### Directory renames

-   Some registry types that used legacy datapack directory names (based on plural name of element) have been renamed to match registry name
-   Affected directories:
    -   `structures` -> `structure`
    -   `advancements` -> `advancement`
    -   `recipes` -> `recipe`
    -   `loot_tables` -> `loot_table`
    -   `predicates` -> `predicate`
    -   `item_modifiers` -> `item_modifier`
    -   `functions` -> `function`
    -   `tags/functions` -> `tags/function`

#### Item Tags

-   Removed `music_discs` item tag

#### Block Tags

-   `air`: All blocks that resemble air

#### Damage Type Tags

-   Removed `breeze_immune_to` damage type tag
-   Added `panic_environmental_causes`: Damage types that cause panic in aggressive animals that can panic, i.e. mobs that retaliate when attacked
-   Added `panic_causes`: Damage types that cause panic in passive animals, i.e. mobs that run away when attacked

### Predicates

#### Jukebox Playable Predicate

New item sub-predicate available as `jukebox_playable`.

-   Matcher for `jukebox_playable` component (like Music Discs)
-   Fields:
    -   `song` - optional id, list of ids or tag for jukebox song to be matched

#### Player Predicate

-   The `gamemode` field has been changed to accept a list of gamemodes

### Commands

-   Added `@n` entity selector, selecting the nearest entity
    -   This functions as `@e[sort=nearest,limit=1]`
    -   Additional requirements may still be provided; for example: `@n[type=pig]` will select the closest Pig

## Resource Pack Version 34

-   Added the `block.vault.reject_rewarded_player` sound event
-   Changes to Shaders

### Shaders

-   The `blend` block in core shader definitions has been removed, as it was not used
-   The `position_color_tex` shader has been removed, replaced with the pre-existing `position_tex_color`
-   The `glint_direct` shader has been removed, replaced with the pre-existing `glint` shader
-   The `armor_glint` shader has been removed, as it was unused

## Fixed bugs in 24w21a

-   [MC-67](https://bugs.mojang.com/browse/MC-67) Entities with passengers cannot travel through portals
-   [MC-31819](https://bugs.mojang.com/browse/MC-31819) Hunger saturation depletes on peaceful difficulty
-   [MC-116279](https://bugs.mojang.com/browse/MC-116279) Non-player entities going through Nether portal do not generate portal in Nether if none exists
-   [MC-151648](https://bugs.mojang.com/browse/MC-151648) Non-player entities cannot travel through unlinked nether portals
-   [MC-170103](https://bugs.mojang.com/browse/MC-170103) Untamed wolves only beg for food while being angry and jumping
-   [MC-260346](https://bugs.mojang.com/browse/MC-260346) Custom music discs cut off when vanilla disc would normally end
-   [MC-266290](https://bugs.mojang.com/browse/MC-266290) Double doors do not automatically form between waxed and unwaxed copper doors, even of the same variant
-   [MC-266586](https://bugs.mojang.com/browse/MC-266586) Trial chambers can spawn directly inside the deep dark biome
-   [MC-266626](https://bugs.mojang.com/browse/MC-266626) Breeze doesn't stop attacking the player when it enters on the same team
-   [MC-267967](https://bugs.mojang.com/browse/MC-267967) Breezes ignore the deflects\_projectiles entity type tag
-   [MC-268438](https://bugs.mojang.com/browse/MC-268438) Baby armadillos can still eat while rolled up
-   [MC-269034](https://bugs.mojang.com/browse/MC-269034) Wolves no longer teleport while trying to pathfind out of Lava
-   [MC-269351](https://bugs.mojang.com/browse/MC-269351) The Bolt Armor Trim cannot be duplicated with Waxed Copper Block
-   [MC-269370](https://bugs.mojang.com/browse/MC-269370) Sharp lag spike caused by incorrect upper limit on particles created by mace smash attack
-   [MC-269460](https://bugs.mojang.com/browse/MC-269460) Thorns enchantment doesn't work when entities are hit by wind charges
-   [MC-269964](https://bugs.mojang.com/browse/MC-269964) Ominous item spawners are missing an NBT load for spawn\_item\_after\_ticks
-   [MC-269988](https://bugs.mojang.com/browse/MC-269988) New potion effects don't apply their respective behaviors when creeper explodes
-   [MC-270024](https://bugs.mojang.com/browse/MC-270024) When drinking ominous bottles, bad omen of higher levels can be overriden by lower amplifiers
-   [MC-270377](https://bugs.mojang.com/browse/MC-270377) Wind charges can be hit and redirected the moment they are thrown
-   [MC-270573](https://bugs.mojang.com/browse/MC-270573) Mounted entities are immune to wind charge damage
-   [MC-270808](https://bugs.mojang.com/browse/MC-270808) Any item in the armor.body slot protects wolves from taking damage
-   [MC-271458](https://bugs.mojang.com/browse/MC-271458) Channeling tridents no longer summon lightning bolt every time hitting lightning rod under thunderstorm
-   [MC-271573](https://bugs.mojang.com/browse/MC-271573) Attribute Enchantments Don't Behave Properly on Armor
-   [MC-271634](https://bugs.mojang.com/browse/MC-271634) Custom enchantments don't appear in the creative menu
-   [MC-271718](https://bugs.mojang.com/browse/MC-271718) Crash when randomized\_int\_state\_provider is applied to blocks lacking the property
-   [MC-271753](https://bugs.mojang.com/browse/MC-271753) Crash due to overflow inside cost calculation in by\_cost\_with\_difficulty
-   [MC-271856](https://bugs.mojang.com/browse/MC-271856) Crossbows enchanted with Quick Charge do not benefit from its effects when used in the offhand
-   [MC-271868](https://bugs.mojang.com/browse/MC-271868) Frost walker replaces flowing water now
-   [MC-271901](https://bugs.mojang.com/browse/MC-271901) Entity effect "play\_sound" Field "pitch" value upper limit is 1.0 instead of 2.0
-   [MC-271911](https://bugs.mojang.com/browse/MC-271911) Frost walker no longer works with void or cave air
-   [MC-271914](https://bugs.mojang.com/browse/MC-271914) Soul speed enchantment doesn't emit particles when the entity is controlled by a player
-   [MC-272039](https://bugs.mojang.com/browse/MC-272039) Soul Speed uses durability in creative mode
-   [MC-272042](https://bugs.mojang.com/browse/MC-272042) If players have max health over 20 and die, when they respawn they will have 20 health instead of their max health
-   [MC-272043](https://bugs.mojang.com/browse/MC-272043) The game crashes when entities die while having the oozing effect
-   [MC-272075](https://bugs.mojang.com/browse/MC-272075) Attempting to step up while controlling entity and moving fast often glitches
-   [MC-272084](https://bugs.mojang.com/browse/MC-272084) Creepers with potion effects no longer create area effect clouds upon exploding
-   [MC-272182](https://bugs.mojang.com/browse/MC-272182) Knowledge Books no longer function properly with a stack size of 1 in survival/adventure mode

---

After some recent irregularities in our Snapshot schedule (public holidays, we're looking at you!) we're back to shipping on a Wednesday! Among other things, 24w20a includes a buff to the amount of Redstone Dust dropped by Witches, as well as a long requested change to make Piston sounds a tad more pleasing to the ear. We're also throwing 41 new bug fixes into the mix, because we like squashing bugs.

Happy mining!

## Changes

-   Witches now always drop 4-8 redstone dust on death
    -   This is to improve the viability of farms that utilize Witch Huts to obtain Redstone Dust
-   Improved player attribute and effect handling
    -   Custom set base attributes are now kept when respawning
    -   Active effects and modifiers are kept when changing dimension or winning the game
-   Updated credits

### Sounds

-   Updated Piston sounds to lower volume and attenuation
    -   This was done to address the long-received feedback on the old sounds being too harsh and loud, creating very noisy redstone builds

## Technical Changes

-   Data Pack version is now 44

## Data Pack Version 44

-   `dimension_padding` jigsaw structure NBT tag was changed
    -   Now it is an object with fields:
        -   `bottom` the vertical padding at the bottom of the dimension, non-negative integer
        -   `top` the vertical padding at the top of the dimension, non-negative integer
    -   Can be written as a single non-negative integer instead to be applied to both top and bottom fields
        -   e.g. both `dimension_padding: 10` or `dimension_padding: { bottom: 10, top: 5 }` are valid
-   Data-driven enchantment field `weight` now has an upper bound of 1024
-   Data-driven enchantment field `max_level` now has an upper bound of 255

### Predicates

#### Entity Predicate

-   New option: `movement_affected_by` - optional Location Predicate
    -   When present, adds requirements on a block at most 0.5 blocks below the entity which can affect its movement

## Fixed bugs in 24w20a

-   [MC-6431](https://bugs.mojang.com/browse/MC-6431) Status effects are lost when returning to the overworld from the exit end portal
-   [MC-83590](https://bugs.mojang.com/browse/MC-83590) Armor attributes list can be too long
-   [MC-137719](https://bugs.mojang.com/browse/MC-137719) The player's horizontal motion doesn't affect fired projectiles in certain situations
-   [MC-179940](https://bugs.mojang.com/browse/MC-179940) Player's attributes reset back to default values upon respawning
-   [MC-181604](https://bugs.mojang.com/browse/MC-181604) Exiting the end portal resets player attributes to their default values
-   [MC-267230](https://bugs.mojang.com/browse/MC-267230) Hangul fonts are rendered with missing pixels
-   [MC-268113](https://bugs.mojang.com/browse/MC-268113) the minecraft:generic.scale attribute is desynchronized when the player leaves the End dimension via an End portal
-   [MC-268370](https://bugs.mojang.com/browse/MC-268370) Japanese CJK variants use the same diacritic
-   [MC-268598](https://bugs.mojang.com/browse/MC-268598) The "weight" of skeletons in swamp biomes is too high causing less bogged spawns
-   [MC-269036](https://bugs.mojang.com/browse/MC-269036) Bogged do not drop mushrooms when sheared with doMobLoot false
-   [MC-269147](https://bugs.mojang.com/browse/MC-269147) Shearing a bogged spawns mushrooms at the bogged's feet
-   [MC-269951](https://bugs.mojang.com/browse/MC-269951) When the gamerule "doImmediateRespawn" is set to true, the Wind Charged, Oozing or Weaving effects don't function for players
-   [MC-270052](https://bugs.mojang.com/browse/MC-270052) Blur levels below 10% do not appear to actually work
-   [MC-270301](https://bugs.mojang.com/browse/MC-270301) The fire protection enchantment applied to horse armor no longer decreases the duration of time the horse remains ablaze
-   [MC-270539](https://bugs.mojang.com/browse/MC-270539) The blast protection enchantment, when applied to horse armor, no longer diminishes the knockback effect from explosions on horse
-   [MC-270637](https://bugs.mojang.com/browse/MC-270637) maxentityCramming set to 0 prevents slime spawning from oozing effect
-   [MC-271034](https://bugs.mojang.com/browse/MC-271034) List entries in the Social interaction menu are rendered over the background
-   [MC-271168](https://bugs.mojang.com/browse/MC-271168) Demo timer does not respect "Text Background" setting
-   [MC-271244](https://bugs.mojang.com/browse/MC-271244) Auto-save text does not respect "Text Background" setting in accessibility settings
-   [MC-271360](https://bugs.mojang.com/browse/MC-271360) Horse armor and wolf armor are deleted when used on an armor stand
-   [MC-271414](https://bugs.mojang.com/browse/MC-271414) Damage command at position applies knockback in random direction
-   [MC-271462](https://bugs.mojang.com/browse/MC-271462) Buttons make the deactivation sound when pressed
-   [MC-271468](https://bugs.mojang.com/browse/MC-271468) Game crashes with custom enchantment's "rotated\_block\_provider"
-   [MC-271532](https://bugs.mojang.com/browse/MC-271532) Mace only loses durability during smash attacks
-   [MC-271547](https://bugs.mojang.com/browse/MC-271547) Can't immediately sprint jump into a 2 block ceiling when standing next to it since 24w18a
-   [MC-271566](https://bugs.mojang.com/browse/MC-271566) Game crash on insufficient "ammo\_use" amount
-   [MC-271574](https://bugs.mojang.com/browse/MC-271574) Inlining a painting variant causes players to disconnect when receiving entity data
-   [MC-271583](https://bugs.mojang.com/browse/MC-271583) Soul speed no longer works through partial blocks
-   [MC-271629](https://bugs.mojang.com/browse/MC-271629) Channeling doesn't work / "post\_attack" effect requires enchanted item to be in the mainhand
-   [MC-271636](https://bugs.mojang.com/browse/MC-271636) Attempting to modify NBT of killer rabbit throws unexpected error
-   [MC-271678](https://bugs.mojang.com/browse/MC-271678) damage\_item enchantment entity effect doesn't break items
-   [MC-271715](https://bugs.mojang.com/browse/MC-271715) Crash when the sum of enchantments' weights overflow
-   [MC-271716](https://bugs.mojang.com/browse/MC-271716) Fraction value provider allows division by zero
-   [MC-271803](https://bugs.mojang.com/browse/MC-271803) Custom enchantment with very large max level causes game to hang after opening Creative inventory
-   [MC-271853](https://bugs.mojang.com/browse/MC-271853) Random "Failed to store chunk" error
-   [MC-271854](https://bugs.mojang.com/browse/MC-271854) Trying to generate new chunks crashes the server
-   [MC-271863](https://bugs.mojang.com/browse/MC-271863) Crafter recipe gets stuck on an item with a similar recipe
-   [MC-271881](https://bugs.mojang.com/browse/MC-271881) Soul speed doesn't soul make particles.
-   [MC-271896](https://bugs.mojang.com/browse/MC-271896) Using Shift+F3+I on a villager crashes the game
-   [MC-271937](https://bugs.mojang.com/browse/MC-271937) Strike a villager with channeling trident in thunder doesn't obtain the advancement "Very Very Frightening"
-   [MC-271948](https://bugs.mojang.com/browse/MC-271948) Entering the Nether breaks the game

---

Oh wow, we never could have guessed you all were so violent! Here's a 24w19b, fixing a crash when a Villager died.

## Fixed bugs in 24w19b

-   [MC-271843](https://bugs.mojang.com/browse/MC-271843) Crash when a villager dies

---

The weekend is right around the corner, and what better way to celebrate that fact than by bringing you a serving of Snapshot Friday? This one rounds off the week by introducing performance improvements to chunk loading, alongside the usual assortment of technical improvements and bug fixes.

On another note, last week's Snapshot introduced some changes to the Mace that went undocumented in the 24w18a changelog. That was a whoopsie on our end, and to clear up any confusion we've decided to add those changes to this changelog in addition to updating the previous one. We're sorry about that!

Happy mining!

## Mace changes from 24w18a

-   Raised Mace durability from 250 to 500
-   Reduced Mace base damage to 5
-   Lower the Mace attack speed from -2.4 to -3.5
-   Reduced Density damage per level per block to 0.5
-   Mace Smash attack damage now has a fall off:
    -   First 3 blocks fallen give 4 damage per block
    -   Next 5 blocks fallen give 2 damage per block
    -   Any block fallen after that give 1 damage per block
-   Density and Breach are now incompatible with each other and the other damage enchantments (Smite and Bane of Arthropods)

## Changes

-   Blocks frozen by Frost Walker now emit "Block Placed" vibrations (frequency 13)
-   Changes to sounds
-   Improved chunk loading performance

### Sounds

-   Added 4 new cave ambient sounds
-   Replaced turn off and turn on sounds for Copper Bulb with one toggle sound

### Chunk loading improvements

-   When reading an already generated chunk from disk, surrounding chunks are no longer unnecessarily loaded
    -   This is also visible on the singleplayer world loading screen
-   The new system has less memory and CPU overhead

## Technical Changes

-   Data Pack version is now 43

## Data Pack Version 43

-   The `custom_data` component can now be specified as an SNBT string to preserve type information in JSON
    -   This is the same as is used in the `set_custom_data` loot function and `custom_data` predicate
-   The `food` item component has new fields:
    -   `using_converts_to`: item with components (optional)
        -   Once consumed, the food item will be replaced with the specified item
        -   e.g. `food={nutrition:1,saturation:0,using_converts_to:{id:"poisonous_potato",components:{"minecraft:custom_name":'"Wait what?"'}}}`
-   Registry `decorated_pot_patterns` has been renamed to `decorated_pot_pattern`
-   Removed legacy tag directory names
-   Removed `power` NBT tag and replaced with `acceleration_power` tag with a number value that contol the projectiles acceleration (and maximum speed)
    -   This change affects the following projectiles; `dragon_fireball`, `large_fireball`, `small_fireball`, `fireball`, `breeze_wind_charge`, `wind_charge`, `wither_skull`
-   New NBT tag `dimension_padding` for structures
    -   ensures that a structure is not generating through the edges of a dimension by adding vertical padding to its bounding box
    -   default is 0
    -   Trial Chambers have a padding of 10 since they are generated deep underground and sometimes would intersect with Bedrock layer

### Enchantments

#### Entity Effect Types

-   Added field `trigger_game_event` for effect types `replace_block`, `replace_disc` and `set_block_properties`
    -   Format: Optional Game Event ID for a game event to trigger when a block has been replaced

### Tags

#### Directory renames

-   Some types that used legacy directory names (based on plural name of element) have been renamed to match registry name
-   Affected directories:
    -   `tags/items` -> `tags/item`
    -   `tags/blocks` -> `tags/block`
    -   `tags/entity_types` -> `tags/entity_type`
    -   `tags/fluids` -> `tags/fluid`
    -   `tags/game_events` -> `tags/game_event`

#### Block Tags

-   `fire_aspect_lightable`: All blocks that should be possible to light by hitting with Fire Aspect enchanted tools

#### Damage Type Predicate

-   New option: `is_direct` - optional boolean
    -   When present, requires the damage to be direct (`true`) or indirect (`false`)
    -   Damage is direct when its direct and source entities are the same

## Fixed bugs in 24w19a

-   [MC-9568](https://bugs.mojang.com/browse/MC-9568) Mobs suffocate / go through blocks when growing up near a solid block
-   [MC-9644](https://bugs.mojang.com/browse/MC-9644) Launched falling\_block entities do not travel through portals
-   [MC-14923](https://bugs.mojang.com/browse/MC-14923) Players can be kicked for spamming in a singleplayer world with cheats disabled
-   [MC-16345](https://bugs.mojang.com/browse/MC-16345) Reducing the player's base max health using /attribute does not always reduce their current health
-   [MC-26304](https://bugs.mojang.com/browse/MC-26304) Brewing stands reset brew cycle when unloaded
-   [MC-96198](https://bugs.mojang.com/browse/MC-96198) Boats / rafts move into blocks when landing in less than one block deep water
-   [MC-175619](https://bugs.mojang.com/browse/MC-175619) Dispenser drops honey bottle unless empty slot is available
-   [MC-252846](https://bugs.mojang.com/browse/MC-252846) Mobs can pass through fences with carpets on top when growing up
-   [MC-253791](https://bugs.mojang.com/browse/MC-253791) Frogs suffocating when growing
-   [MC-267947](https://bugs.mojang.com/browse/MC-267947) Ender pearls can teleport players in spectator mode
-   [MC-267951](https://bugs.mojang.com/browse/MC-267951) The game freezes and eventually crashes when creating a world with the "spawnChunkRadius" gamerule set to high values
-   [MC-267981](https://bugs.mojang.com/browse/MC-267981) The "Trial Spawner crackles" subtitle is only displayed for a split second upon the "minecraft:block.trial\_spawner.ambient" sound being played
-   [MC-268772](https://bugs.mojang.com/browse/MC-268772) Fall damage multiplier attribute has unintuitive coloring
-   [MC-269318](https://bugs.mojang.com/browse/MC-269318) Books placed on a lectern in creative mode are consumed
-   [MC-269601](https://bugs.mojang.com/browse/MC-269601) Mace smash attack does not knock back other players when they are not the attacked entity
-   [MC-269633](https://bugs.mojang.com/browse/MC-269633) Placing an oversized filled bucket resets the stack size to 1
-   [MC-269642](https://bugs.mojang.com/browse/MC-269642) Eating an oversized Soup / Stew resets the stack size to 1
-   [MC-269674](https://bugs.mojang.com/browse/MC-269674) Oversized book and quill stacks reset count when signed
-   [MC-269685](https://bugs.mojang.com/browse/MC-269685) Buckets are lost when consuming oversized milk buckets
-   [MC-269686](https://bugs.mojang.com/browse/MC-269686) Oversized music disc stacks can be duplicated with jukeboxes
-   [MC-269708](https://bugs.mojang.com/browse/MC-269708) Dispensers using an oversized stack of Water Bottles resets the stack size to 1
-   [MC-269717](https://bugs.mojang.com/browse/MC-269717) Cauldron deletes overstacked tinted shulker boxes
-   [MC-269809](https://bugs.mojang.com/browse/MC-269809) Feeding an axolotl an oversized tropical fish bucket resets the stack size to 1
-   [MC-270296](https://bugs.mojang.com/browse/MC-270296) Ominous Item Spawner spawns unstackable arrows with potion effects
-   [MC-270635](https://bugs.mojang.com/browse/MC-270635) Trial spawners textures are inconsistent
-   [MC-270684](https://bugs.mojang.com/browse/MC-270684) set\_attributes loot function doesn't accept an empty list
-   [MC-270687](https://bugs.mojang.com/browse/MC-270687) Maces enchanted with wind burst don't reliably protect players from fall damage
-   [MC-270779](https://bugs.mojang.com/browse/MC-270779) Getting data with /data command from a block/chest with a large amount of data can cause the game to crash
-   [MC-270818](https://bugs.mojang.com/browse/MC-270818) Data generator items report is not deterministic
-   [MC-270926](https://bugs.mojang.com/browse/MC-270926) "foodSaturationLevel" can be negative
-   [MC-270965](https://bugs.mojang.com/browse/MC-270965) The data type of the "minecraft:custom\_data" component of the recipe result will be forcibly modified
-   [MC-271001](https://bugs.mojang.com/browse/MC-271001) Items in a container can be given a count above 99 (to max integer), and can crash the world
-   [MC-271005](https://bugs.mojang.com/browse/MC-271005) Knowledge books with a max stack size over 1 consume all items in the stack when used
-   [MC-271026](https://bugs.mojang.com/browse/MC-271026) Components that set a status effect sometimes lose parts of the data
-   [MC-271094](https://bugs.mojang.com/browse/MC-271094) Entity ID inside EntityTag is ignored when updating a world to 1.20.5
-   [MC-271159](https://bugs.mojang.com/browse/MC-271159) Banner pattern entries without colors are invalidated when upgrading to 1.20.5
-   [MC-271170](https://bugs.mojang.com/browse/MC-271170) Unexpected error when modifying skull's custom name to an invalid value
-   [MC-271398](https://bugs.mojang.com/browse/MC-271398) Crafting ingredients remain in the grid after crafting certain items, causing item duplication
-   [MC-271400](https://bugs.mojang.com/browse/MC-271400) The quick charge enchantment on crossbows no longer increases the crossbow loading speed
-   [MC-271402](https://bugs.mojang.com/browse/MC-271402) Sharpness and mob-specific damage enchantments reduce attack damage instead of increasing it
-   [MC-271404](https://bugs.mojang.com/browse/MC-271404) Breach and Density enchantments aren't mutually exclusive
-   [MC-271406](https://bugs.mojang.com/browse/MC-271406) Blocks reappear when mined instantly
-   [MC-271422](https://bugs.mojang.com/browse/MC-271422) Soul Speed causes your FOV to change whenever you jump
-   [MC-271423](https://bugs.mojang.com/browse/MC-271423) Riptide enchantment does not work properly
-   [MC-271427](https://bugs.mojang.com/browse/MC-271427) Sweep attacks no longer trigger consistently
-   [MC-271434](https://bugs.mojang.com/browse/MC-271434) Campfires knockback the player
-   [MC-271435](https://bugs.mojang.com/browse/MC-271435) Moving while being attacked no longer deals knockback correctly
-   [MC-271436](https://bugs.mojang.com/browse/MC-271436) Mace can no longer be enchanted with Fire Aspect
-   [MC-271441](https://bugs.mojang.com/browse/MC-271441) Fire Protection tooltip is displayed in red text despite being a positive effect
-   [MC-271442](https://bugs.mojang.com/browse/MC-271442) The fire aspect enchantment can change the "lit" states of redstone lamps, redstone torches, copper bulbs, furnaces, smokers, and blast furnaces
-   [MC-271444](https://bugs.mojang.com/browse/MC-271444) The fire aspect enchantment can turn on campfires and candles while underwater
-   [MC-271455](https://bugs.mojang.com/browse/MC-271455) When holding a fire aspect weapon in the mainhand, thrown tridents in the offhand will set mobs on fire
-   [MC-271459](https://bugs.mojang.com/browse/MC-271459) Frost walker deletes waterlogged blocks
-   [MC-271461](https://bugs.mojang.com/browse/MC-271461) Interacting with certain villagers with the villager trade rebalance enabled causes client crash
-   [MC-271477](https://bugs.mojang.com/browse/MC-271477) "projectile\_spawned" enchantment effect always activates at 0, 0, 0
-   [MC-271484](https://bugs.mojang.com/browse/MC-271484) Lighting candles and campfires with fire aspect doesn't send vibration to sculk sensors
-   [MC-271556](https://bugs.mojang.com/browse/MC-271556) The drop rate of wither skeleton skulls is lowered by 0.01
-   [MC-271565](https://bugs.mojang.com/browse/MC-271565) The game can crash when upgrading worlds with zombie villagers from before 1.9
-   [MC-271632](https://bugs.mojang.com/browse/MC-271632) Weapon with Bane of Arthropods can only give the target slowness I instead of slowness IV
-   [MC-271637](https://bugs.mojang.com/browse/MC-271637) The enchantment entity effect type "run\_command" always runs the command in the overworld
-   [MC-271652](https://bugs.mojang.com/browse/MC-271652) Holding items enchanted with thorns in your hand no longer works as if you were wearing them
-   [MC-271710](https://bugs.mojang.com/browse/MC-271710) Key Binds background is darker than the rest of UI
-   [MC-271725](https://bugs.mojang.com/browse/MC-271725) Enchantment entity effect "apply\_mob\_effect" never applies an amplifier even if one is defined.
-   [MC-271726](https://bugs.mojang.com/browse/MC-271726) The item.trident.thunder sound can no longer be heard by the player who was struck by a lightning

---

Because it's the month of May, may we tempt you with the first Snapshot for Java Edition 1.21? This one looks as excellent as it sounds, thanks to the 20 new paintings and 3 new music discs it adds to the game. And we're not stopping there, data-driven enchantments are also being thrown into the fray with this Snapshot (hence the 900+ line changelog). We also included a batch of new bug fixes for good measure.

Happy mining!

## New Features

-   All Features from the experimental 1.21 pack have been moved to vanilla
-   Added 5 new paintings by artist Sarah Boeving
-   Added 15 new paintings by artist Kristoffer Zetterstrand
-   Added 9 new music tracks
-   Added 3 new music discs

### Music

-   Added 9 new background music tracks which will all play in the main menu
-   Some of these new songs play in specific biomes in-game:
    -   `featherfall`
        -   Plays in Badlands, Cherry Grove, Flower Forest, and Lush Caves
    -   `deeper`
        -   Plays in Deep Dark and Dripstone Caves
    -   `eld_unknown`
        -   Plays in Dripstone Caves, Grove, Jagged Peaks, and Stony Peaks
    -   `endless`
        -   Plays in Dripstone Caves, Grove, Jagged Peaks, and Stony Peaks
    -   `pokopoko`
        -   Plays in Dripstone Caves, Grove, Jagged Peaks, and Snow Slopes
-   The following have been added to the pool of songs which play in Overworld biomes that do not have biome-specific music:
    -   `featherfall`
    -   `komorebi`
    -   `puzzlebox`
    -   `watcher`
    -   `yakusoku`

### Music Discs

-   Added 3 new music discs
-   Aaron Cherof - Precipice can be found rarely in standard Vaults
    -   Has a comparator output of 13 when played in a Jukebox
-   Lena Raine - Creator can be found rarely in Ominous Vaults
    -   Has a comparator output of 12 when played in a Jukebox
-   Lena Raine - Creator (Music Box) can be found rarely in Decorated Pots broken in Trial Chambers
    -   Has a comparator output of 11 when played in a Jukebox

### Paintings

-   Added five new paintings by artist Sarah Boeving:
    -   `baroque`
    -   `humble`
    -   `meditative`
    -   `prairie_ride`
    -   `unpacked`
-   Added fifteen new paintings by artist Kristoffer Zetterstrand:
    -   `backyard`
    -   `bouquet`
    -   `cavebird`
    -   `changing`
    -   `cotan`
    -   `fern`
    -   `endboss`
    -   `finding`
    -   `lowmist`
    -   `orb`
    -   `owlemons`
    -   `passage`
    -   `pond`
    -   `sunflowers`
    -   `tides`

## Changes

-   Rotten flesh has been removed as a possible item for Trial Spawners to eject
-   Mace enchantments are slightly more common in Ominous Vaults
-   Projectile knockback is no longer dependent on the shooters position
    -   Projectiles such as Arrows and Fireballs knock back in the direction they travel
    -   Projectiles such as Splash Potions and Fireworks knock back away from themselves
    -   Projectiles shot by a Dispenser will also knock back
-   Updated the confirmation-screens in Realms to show as popups
-   Changes to the Mace

### Mace

-   Raised Mace durability from 250 to 500
-   Reduced Mace base damage to 5
-   Lower the Mace attack speed from -2.4 to -3.5
-   Reduced Density damage per level per block to 0.5
-   Mace Smash attack damage now has a fall off:
    -   First 3 blocks fallen give 4 damage per block
    -   Next 5 blocks fallen give 2 damage per block
    -   Any block fallen after that give 1 damage per block
-   Density and Breach are now incompatible with each other and the other damage enchantments (Smite and Bane of Arthropods)

### Trial Chambers

-   Spider spawners have been moved to the "melee" category
-   Slime spawners have been moved to the "small melee" category
-   Made various layout changes in intersections and corridors
-   Added new trap dispenser style to chambers
-   Fixed various broken jigsaw connections in the corridors
-   Made seams match in corridors
-   Added new entrance variations
-   Fixed various broken or incorrect jigsaw data
-   Added empty Chests to chamber entrances

### Ominous Trial Spawner

-   Ominous Trial Spawners with mobs that are unable to wear equipment now spawn double the total mob count over the course of the challenge
    -   These spawners will also have an additional mob out at once during its challenge
-   Bottle o' Enchanting is no longer a possible projectile for Ominous Trial Spawners

### Copper Doors and Trapdoors

-   Copper Doors and Trapdoors are now crafted from Copper Ingots instead of Copper Blocks
-   Oxidized variants of Copper Doors and Copper Trapdoors can no longer be crafted
    -   Waxed variants can still be crafted with Honeycomb

## Technical Changes

-   Resource Pack version is now 33
-   Data Pack version is now 42
-   Removed the `update_1_21` feature flag and built-in datapack

## Data Pack Version 42

-   Added new Music Disc items and loot table entries for the Music Discs
-   Painting variants are now data-driven
-   The item argument in the `/give`, `/item`, and `/loot` commands now supports removal of default components with `!` prefix
    -   e.g. `/give @s diamond_pickaxe[!tool]` will give a Diamond Pickaxe without the `tool` component
-   Enchantments are now data-driven
-   Enchantments that show up in the game are now controlled by Enchantment Providers
-   Enchantment exclusivity is now controlled through tags
-   Changes to predicates and loot table functions

### Painting variants

-   Painting variants registry are now loaded from packs
-   Path to painting definition is `data/<namespace>/painting_variant/<id>.json`
-   Fields in definition:
    -   `width` - width of painting in blocks, between 1 and 16
    -   `height` - height of painting in blocks, between 1 and 16
    -   `asset_id` - id of sprite in `paintings` atlas

### Enchantments

Enchantments are now set through data. An Enchantment is a set of core properties like level ranges and cost together with some effects. Most effect types also support a set of conditions, making it possible to apply them only when certain criteria are met.

Enchantments can be added in the registry `enchantment`. All Vanilla Enchantments can be found in the vanilla datapack in the client and server jar files.

Fields:

-   `description`: The name of the Enchantment when displayed in text represented as a Text Component
-   `exclusive_set`: The Enchantment(s) this Enchantment is exclusive with
    -   Two Enchantments can never co-exist on an item if either is in the other's exclusive set
    -   Specified as an Enchantment ID, a list of Enchantment IDs or an Enchantment Tag prefixed with `#`
    -   Optional - if omitted, the exclusive set is empty
-   `supported_items`: The item types that can have this Enchantment
    -   Item ID, list of item IDs or tag prefixed with `#`
-   `primary_items`: The item types for which this Enchantment shows up in Enchanting Tables and on traded equipment
    -   Item ID, list of item IDs or tag prefixed with `#`
    -   Must be a subset of `supported_items`
-   `weight`: How commonly the Enchantment appears, compared to the total combined `weight` of all available Enchantments
    -   Positive integer - higher values mean more common
-   `max_level`: The maximum level of the Enchantment
    -   All Enchantments range from level 1 to their maximum level
    -   Positive integer
-   `min_cost`, `max_cost`: describe the range of costs for this Enchantment in the Enchanting Table (and how much it returns when disenchanted)
    -   Both min and max cost are described using a linear formula:
    -   `base`: Base cost at level 1
    -   `per_level_above_first`: Added for each level over 1
-   `anvil_cost`: The fee taken for the Enchantment in the anvil
    -   Non-negative integer
    -   This value is halved when an Enchantment is added to a book
    -   The effective fee is multiplied by the level of the Enchantment
-   `slots`: A list of slot groups this Enchantment works in
    -   Each entry is one of `any`, `hand`, `mainhand`, `offhand`, `armor`, `feet`, `legs`, `chest`, `head` and `body`
-   `effects`: A map of effect components, as described below in the Effect Components section

#### Level-Based Values

Many effects of Enchantments depend on the level of the Enchantment. For these fields, a type called Level-Based Values is used. In their most basic form, Level-Based Values can be written as floating-point constants, which is interpreted as a value that isn't in fact level-based, the constant is used as-is for all levels.

If a Level-Based value is not a floating-point constant, it is an object with a `type` field, specifying one of the following types.

##### `linear`

The most common type of Level-Based Value is a `linear` value. A `linear` Level-Based Value has two fields:

-   `base`: The base value added to all levels
-   `per_level_above_first`: Amount added for each level above the first one

In effect, a `linear` Level-Based Value results in `base + per_level_above_first * (level - 1)`.

##### `clamped`

A Level-Based Value type that clamps a value between a min and max. Fields:

-   `value`: A Level-Based Value used as the input
-   `min`: A floating point value specifying the minimum value of the output
-   `max`: A floating point value specifying the maximum value of the output

##### `fraction`

A Level-Based Value type that represents the fraction between two values. Fields:

-   `numerator`: A Level-Based Value used as the numerator
-   `denominator`: A Level-Based Value used as the denominator

##### `levels_squared`

A Level-Based Value type that evaluates to the square of the levels, plus an addition. Fields:

-   `added`: A floating-point value added to the result of the squared levels

In effect, a `levels_squared` Level-Based Value results in `level ^ 2 + added`

#### Value Effect Types

Value Effects are effects used to manipulate the amount of _something_ in the game.

##### `add`

A Value Effect that adds a value to the processed results.

Fields:

-   `value`: A Level-Based Value determining how much to add
    -   Negative values are supported

##### `all_of`

A Value Effect that runs a number of other Value Effects, in order. This can be useful when the same set of conditions apply to a number of Value Effects.

Fields:

-   `effects`: A list of the Value Effects to run

##### `multiply`

A Value Effect that multiplies the processed value by a given factor.

Fields:

-   `factor`: A Level-Based Value determining the factor to multiply in

##### `remove_binomial`

A Value Effect that runs a Binomial series of checks, reducing the input value by 1 for every successful check.

Fields:

-   `chance`: A Level-Based Value representing the chance that an input value is dropped.
    -   The span is 0 to 1, with 0 being no chance to drop an input value and 1 dropping all input values

##### `set`

A Value Effect that overwrites the input value with a given Level-Based Value.

Fields:

-   `value`: The Level-Based Value to use as the result

#### Attribute Effects

Attribute effects use the Attribute system to apply an Attribute Modifier whenever the Enchanted Item is correctly equipped. Attribute effects do not have a dynamic type - they are all the same type.

Fields:

-   `name`: The name of the Attribute Modifier to add
-   `attribute`: The ID of the attribute to modify
-   `operation`: The operation of the Attribute Modifier
    -   One of `add_value`, `add_multiplied_base` and `add_multiplied_total`
-   `amount`: A Level-Based Value describing the amount
-   `uuid`: A string containing a UUID for the Attribute Modifier to use
    -   Must be unique to avoid different Enchantments (or other systems) interfering with each others

#### Entity Effect Types

Entity Effects are Enchantment effects that generally do something to an Entity involved in an event. Which Entity is affected depends on the specific component being configured.

##### `all_of`

An Entity Effect that runs a list of other Entity Effects. This can be useful when a set of conditions should apply to more than one Entity Effect.

Fields:

-   `effects`: List of Entity Effects to run

##### `apply_mob_effect`

An Entity Effect that applies a random Mob Effect to the affected Entity, chosen from a set of options. The duration and amplifier are randomized within a given span. The effect of specifying larger maximum values than the minimum value is undefined.

Fields:

-   `to_apply`: Options for the Effect to apply
    -   One of an Effect ID, a list of Effect IDs or an Effect Tag prefixed by `#`
-   `min_duration`, `max_duration`: Level-Based Values representing the minimum and maximum duration of the effect in seconds
-   `min_amplifier`, `max_amplifier`: Level-Based Values representing the minimum and maximum amplifier

##### `damage_entity`

An Entity Effect that applies damage to the affected Entity. The amount of damage is randomized within a given span. The effect of specifying a larger maximum value than the minimum value is undefined.

Fields:

-   `damage_type`: The ID of the Damage Type to use
-   `min_damage`, `max_damage`: Level-Based Values representing the minimum and maximum amount of damage

##### `damage_item`

An Entity Effect that applies damage to the Enchanted Item.

Fields:

-   `amount`: A Level-Based Value determining the amount of damage to apply

##### `explode`

An Entity Effect that causes an explosion.

Fields:

-   `attribute_to_user`: A boolean deciding whether the explosion should be attributed to the user of the enchanted tool
-   `damage_type`: Optional damage type of the explosion - if omitted, no damage is dealt by the explosion
-   `immune_blocks`: Optional Block, list of Blocks or hash-prefixed Block Tag specifying which blocks fully block the explosion
-   `knockback_multiplier`: A Level-Based Value deciding the knockback multiplier caused by the explosion - if omitted, the default explosion knockback is applied
-   `offset`: A position offset for where the explosion is spawned
    -   Format: list of 3 integers representing X, Y and Z offset
    -   Optional, if omitted \[0, 0, 0\] is used
-   `radius`: A Level-Based Value representing the radius of the explosion
-   `create_fire`: A boolean for whether the explosion causes fire to be placed or not
-   `block_interaction`: How the explosion interacts with blocks. One of:
    -   `none`: No effect
    -   `block`: Act as if a block caused the explosion - the `blockExplosionDropDecay` game rule applies to drops
    -   `mob`: Act as if a mob caused the explosion - the `mobExplosionDropDecay` game rule applies to drops
    -   `tnt`: Act as if TNT caused the explosion - the `tntExplosionDropDecay` game rule applies to drops
    -   `trigger`: Trigger redstone-activated blocks
-   `small_particle`: The small particle emitted by the explosion
-   `large_particle`: The large particle emitted by the explosion
-   `sound`: The sound event caused by the explosion

##### `ignite`

An Entity Effect that ignites the affected Entity for a given number of seconds.

Fields:

-   `duration`: A Level-Based Value specifying the number of seconds the fire should last

##### `play_sound`

An Entity Effect that plays a sound.

Fields:

-   `sound`: A Sound Event ID for the sound to play
-   `volume`: A Float Provider between `0.00001` and `10.0` specifying the volume of the sound
-   `pitch`: A Float Provider between `0.00001` and `2.0` specifying the pitch of the sound

##### `replace_block`

An Entity Effect that replaces a block in the world.

Fields:

-   `block_state`: A block state provider giving the block state to set
-   `offset`: A positional offset from the position of the event to where to place the block
    -   Format: list of 3 integers representing X, Y and Z offset
    -   Optional, if omitted \[0, 0, 0\] is used
-   `predicate`: A World-generation style Block Predicate to used to determine if the block should be replaced
    -   Optional, if omitted all block types are replaced

##### `replace_disc`

An Entity Effect that replaces blocks in a disc / cylinder in the world.

Fields:

-   `block_state`: A block state provider giving the block state to set
-   `radius`: A Level-Based Value describing the radius of the cylinder
-   `height`: A Level-Based Value describing the height of the cylinder
-   `offset`: A positional offset from the position of the event to the center of the cylinder
    -   Format: list of 3 integers representing X, Y and Z offset
    -   Optional, if omitted \[0, 0, 0\] is used
-   `predicate`: A World-generation style Block Predicate to used to determine if the block should be replaced
    -   Optional, if omitted all block types are replaced

##### `run_function`

An Entity Effect that runs a Command Function. The execution entity the effect is executing for is represented as `@s` and `~ ~ ~` is the position of the event.

Fields:

-   `function`: Namespaced ID of the Command Function to run

##### `set_block_properties`

An Entity Effect that sets properties on a block

Fields:

-   `properties`: map of property key to property value (same format as a `minecraft:block_state` item component)
-   `offset`: A positional offset from the position of the event to the center of the cylinder
    -   Format: list of 3 integers representing X, Y and Z offset
    -   Optional, if omitted \[0, 0, 0\] is used

##### `spawn_particles`

An Entity Effect that spawns particles around the affected Entity.

Fields:

-   `particle`: A particle type definition
-   `horizontal_position`, `vertical_position`: Decides where the particle spawns horizontally and vertically. Objects with fields:
    -   `type`: Specifies the position selectiont type. One of:
        -   `"entity_position"`: Spawn particles based on the entity position
        -   `"in_bounding_box"`: Spawn particles based on randomized positions inside the bounding box of the entity
    -   `offset`: A floating point value specifying an offset to the position source
        -   Optional, interpreted as `0` if omitted
    -   `scale`: A floating point value specifying a scaling factor
        -   Only available if type is `"in_bounding_box"`
        -   Optional, interpreted as `1` if omitted
-   `horizontal_velocity`, `vertical_velocity`: Decides the initial velocity of the spawned particle. Object with fields:
    -   `base`: A Float Provider giving the base speed along the given axis
        -   Optional, interpreted as `0` if omitted
    -   `movement_scale`: A floating point scale factor applied to the Entity speed along the given axis
        -   Optional, interpreted as `0` if omitted
        -   Example: a `movement_scale` of `1` adds the velocity of the Entity to the spawned particles

##### `summon_entity`

An Entity Effect that summons a new Entity, randomly chosen from a set of Entity Types, at the site of the event.

Fields:

-   `entity`: The options for the Entity Type to summon
    -   Either an Entity Type ID, a list of Entity Type IDs or an Entity Type Tag prefixed with `#`
-   `join_team`: Boolean that specifies whether the summoned Entity should join the team of the owner of the Enchanted Item

#### Location-Based Effect Types

Location-Based Effects are special effects that activate and deactivate depending on where the owner of the Enchanted Item moves. Location-Based Effect only trigger when such items are initially equipped and subsequently when the owning Entity moves to a new space in the Block grid - i.e. when their coordinates change to a new integer value.

All Entity Effect types can also be used as Location-Based Effects, and in addition `attribute` can be used to specify an Attribute Effect as a location-based effect.

#### Effect Conditions

Most Enchantment effects are filtered using Conditions (same types as in loot tables). This enables effects to be specific for different situations. Each Effect Component defines which parameters are available for the condition to evaluate - some parameters are available for all of these parameter sets, while some are specific to a certain set.

Each effect component specifies which parameters are available in the [Effect Components](#effect-components) list below.

##### Damage Parameters

-   Entities: `this`, `attacker`, `direct_attacker`
-   Enchantment Level
-   Origin
-   Damage Source

##### Item Parameters

-   Tool
-   Enchantment Level

##### Location Parameters

-   Entities: `this`
-   Enchantment Level
-   Origin
-   Enchantment Active status

##### Entity Parameters

-   Entities: `this`
-   Enchantment Level
-   Origin

#### Effect Components

The `effects` field in an Enchantment is a map of Effect Component type the Effect List data. Most Effect Components are lists, so any number of Effects can be added of any Component Type. The data for each effect generally involves having a specified condition context and Effect Type, but some Effects also deviate from this format.

In cases where the documentation specifies a Condition Context and Effect, the Component is a list. Each entry in the list has a field named `effect` with the effect of the type used by the list. Entries can also optionally include a field named `requirements` specifying the condition parameters, which are then evaluated with the documented context.

-   `minecraft:armor_effectiveness`: Effects for changing the armor effectiveness of the target of an attack
    -   Condition Context: Damage Parameters
    -   Effect: Value Effect on the armor effectiveness: 0 for completely ineffective, 1 for fully effective
-   `minecraft:attributes`: Unfiltered list of Attribute Effects.
-   `minecraft:ammo_use`: Effects for ammunition being used when drawing a projectile weapon (firing a Bow or loading a Crossbow)
    -   Condition Context: Item Parameters - Tool is the ammunition item
    -   Effect: Value Effect on the amount of ammunition being used up
-   `minecraft:block_experience`: Effects for the amount of experience that drops when mining a block with the Enchanted Item
    -   Condition Context: Item Parameters - Tool is the mining tool used
    -   Effect: Value Effect on the amount of experience awarded
-   `minecraft:crossbow_charge_sounds`: Effect for changing the charging sounds of a Crossbow
    -   Note: Only one of these effects can ever be active - the highest level is picked
    -   Format: A list of Crossbow sound banks:
        -   `start`: Optional sound event id for the start of charging
        -   `mid`: Optional sound event id for the middle of charging
        -   `end`: Optional sound event id for the end of charging
    -   Each entry in the list represents the sounds at one level of the Enchantment, so the first entry represents the sounds used by a level 1 Enchantment
-   `minecraft:crossbow_charge_time`: Effects for the charging time of a Crossbow
    -   Condition Context: Item Parameters - Tool is the Crossbow
    -   Effect: Value Effect on the charge time of the Crossbow in seconds
-   `minecraft:damage`: Effects for the amount of damage caused by an attack
    -   Condition Context: Damage Parameters
    -   Effect: Value Effect on the amount of damage
-   `minecraft:damage_immunity`: Effects for complete damage immunity
    -   Condition Context: Damage Parameters
    -   Effect: Not specified - any matching entry causes damage immunity
-   `minecraft:damage_protection`: Effects for damage protection
    -   Condition Context: Damage Parameters
    -   Effect: Value Effect on the amount of damage protection
    -   Note that this adds damage protection ("magical armor") rather than processing the damage itself
-   `minecraft:equipment_drops`: Effects for the chance of equipment dropping when a target is killed by the owner of the Enchanted Item
    -   Condition Context: Damage Parameters
    -   Effect: Value Effect on the chance between `0` and `1` of an equipped piece dropping
    -   Also has one other field:
        -   `enchanted`: A specifier for who needs to be enchanted for the effect to apply
        -   Possible values are `attacker` and `victim`
-   `minecraft:fishing_luck_bonus`: Effects for the amount of luck given to a player fishing
    -   Condition Context: Entity Parameters - `this` is the player fishing
    -   Effect: Value Effect on the amount of luck
    -   Note: The total amount of luck (in integer form) is applied as a luck effect to the fishing loot table
-   `minecraft:fishing_time_reduction`: Effects for reducing the time until a fish bites when fishing
    -   Condition Context: Entity Parameters - `this` is the player fishing
    -   Effect: Value Effect on the amount of time saved in seconds
    -   Note: Higher values here mean less time until a fish bites
-   `minecraft:hit_block`: Effects applying after a weapon or tool hits a Block
    -   Condition Context: Entity Parameters - `this` is the entity hitting the Block
    -   Effect: Entity Effect on the entity hitting the Block
    -   Note: In the case of a projectile attack, `this` is the projectile
-   `minecraft:knockback`: Effects for the amount of knockback caused by an attack
    -   Condition Context: Damage Parameters
    -   Effect: Value Effect on the amount of knockback caused by the attack
-   `minecraft:item_damage`: Effects for the amount of durability lost when an item is damaged
    -   Condition Context: Item Parameters - Tool is the damaged item
    -   Effect: Value Effect on the amount of damage to the item
-   `minecraft:location_changed`: Effects that take effect when an entity crosses into a new block position
    -   Condition Context: Location Parameters
    -   Effect: Location Based Effect
-   `minecraft:mob_experience`: Effects for the amount of experience that drops when killing a mob with the Enchanted Item
    -   Condition Context: Entity Parameters - `this` is the killed Mob
    -   Effect: Value Effect on the amount of experience awarded
-   `minecraft:post_attack`: Effects applying after an attack damages a target
    -   Condition Context: Damage Parameters
    -   Effect: Entity Effect
    -   Also has two other fields:
        -   `enchanted`: A specifier for who needs to be enchanted for the effect to apply
        -   `affected`: A specifier for whom the effect is applied to
    -   Possible values for both fields are `attacker`, `damaging_entity` and `victim`
    -   Example, a Fire Aspect Enchant would specify that when the `attacker` is `enchanted`, the `ignite` effect is applied, and the `affected` party is the `victim`
    -   Another example: Thorns would specify that when the `victim` is `enchanted`, the `damage_entity` effect is applied, and the `affected` party is the `attacker`
-   `minecraft:prevent_armor_change`: Effect for preventing the enchanted item from being unequipped from an armor slot
    -   Format: Empty object
-   `minecraft:prevent_equipment_drop`: Effect for preventing the enchanted item from being dropped on owner death
    -   Format: Empty object
-   `minecraft:projectile_count`: Effects for the amount of projectiles drawn when using a projectile weapon
    -   Condition Context: Entity Parameters - `this` is the entity drawing the weapon
    -   Effect: Value Effect on the number of projectiles drawn
-   `minecraft:projectile_piercing`: Effects for the piercing count of projectiles fired from a projectile weapon, i.e. the number of targets it can hit
    -   Condition Context: Item Parameters - Tool is the ammunition item
    -   Effect: Value Effect on the pierce count of the fired projectile
-   `minecraft:projectile_spread`: Effects for the spread of arrows from a projectile weapon firing multiple projectiles
    -   Condition Context: Entity Parameters - `this` is the Entity using the Weapon
    -   Effect: Value effect on the maximum spread of projectiles measured in degrees from the aim line
-   `minecraft:projectile_spawned`: Effects applying after a projectile entity has been spawned when firing a projectile weapon
    -   Condition Context: Entity Parameters - `this` is the projectile Entity
    -   Effect: Entity Effect on the projectile Entity
-   `minecraft:repair_with_xp`: Effect for repairing the item with xp when picked up by the player - any effect present triggers the function
    -   Condition Context: Item Parameters - `tool` is the item being repaired
    -   Effect: Value Effect converting the amount of XP to the amount of durability to repair
-   `minecraft:smash_damage_per_block_fallen`: Effects for the amount of damage caused by a Mace's smash attack
    -   Condition Context: Damage Parameters
    -   Effect: Value Effect on the amount of damage
-   `minecraft:tick`: Effects that apply every tick for correctly equipped Enchanted Items
    -   Condition Context: Entity Parameters - `this` is the owner of the Enchanted Item
    -   Effect: Entity Effect on the owner of the Enchanted Item
-   `minecraft:trident_return_acceleration`: Effects for the special acceleration value of a Trident that returns it to its owner
    -   Condition Context: Entity Parameters - `this` the Trident Entity
    -   Effect: Value Effect on the acceleration value
-   `minecraft:trident_spin_attack_strength`: Effects for the strength of a Trident used as a spin attack
    -   Condition Context: Entity Parameters - `this` is the Player holding the Trident
    -   Effect: Value Effect on the attack strength
    -   Any resulting value greater than 0 converts the Trident to be a spin attack weapon instead of a thrown attack
-   `minecraft:trident_sound`: Effect for changing the charging sounds of a Trident attack
    -   Note: Only one of these effects can ever be active - the highest level is picked
    -   Format: A list of sound events
    -   Each entry in the list represents the sound at one level of the Enchantment, so the first entry represents the sound used by a level 1 Enchantment

### Enchantment Providers

Enchantment Providers are new ways for the game to source Enchantments to use in various situations where Enchantments show up.

#### Spawn Equipment Enchantment Providers

-   `mob_spawn_equipment`: Enchantment provider for mobs that spawn with randomly Enchanted equipment
-   `pillager_spawn_crossbow`: Enchantment provider for Pillagers that spawn with Enchanted Crossbows
-   `raid/pillager_post_wave_3`: Enchantment provider applied as a buff on the Crossbow of Pillagers spawning as waves 4 and 5
-   `raid/pillager_post_wave_5`: Enchantment provider applied as a buff on the Crossbow of Pillagers spawning as waves above 5
-   `raid/vindicator`: Enchantment provider applied as a buff on the Axe of a Vindicator spawning as wave 1-5
-   `raid/vindicator_post_wave_5`: Enchantment provider applied as a buff on the Axe of a Vindicator spawning as waves above 5

#### Enderman Loot Enchantment Provider

-   `enderman_loot_drop`: An Enchantment provided used for the "fake tool" applied to the carried block of a killed Enderman

#### Villager Trade Rebalance Enchantment Providers

All Equipment-specific Enchantments in Villager trades in the Villager Trade Rebalance experiment are now sourced from Enchantment Providers.

These Enchantment Providers are only used when the Villager Trade Rebalance experiment is enabled and all have the following pattern:

`trades/<biome>_<profession>_<equipment>_<level>`

For example: `trades/desert_armorer_helmet_4` and `trades/taiga_armorer_chestplate_5`.

#### Enchantment Provider Types

##### `single_enchantment`

An Enchantment Provider which always provides the same Enchantment. The level of the Enchantment can be either constant or randomized.

Fields:

-   `enchantment`: Namespaced ID of the Enchantment
-   `level`: Int provider representing the level of the Enchantment

##### `enchantments_by_cost`

An Enchantment Provider which gives one or more Enchantments from a set of options according to a given cost (similar to the cost value in the Enchantment Table).

Fields:

-   `enchantments`: The set of Enchantments as either a single Enchantment, a list of Enchantments or hash-prefixed Enchantment Tag
-   `cost`: Int provider representing the cost to use for the Enchanting process

##### `enchantments_by_cost_with_difficulty`

An Enchantment Provider which works like `enchantments_by_cost`, but where the cost is calculated partially based on the local difficulty of the area where the event happens causing the Enchantments to be added.

The used cost is a minimum cost plus a uniformly randomized factor up to a base cost span multiplied with the special factor, which starts at `0` for local difficulty up to `2`, increases linearly up to `1` for local difficulty `4` and stays at a constant value of `1` for any difficulty above that.

Fields:

-   `enchantments`: The set of Enchantments as either a single Enchantment, a list of Enchantments or hash-prefixed Enchantment Tag
-   `min_cost`: Positive integer representing the minimum possible cost
-   `max_cost_span`: Non-negative integer representing the span of the cost randomization when the special factor is at its maximum

### Damage Types

-   New damage type: `campfire`, split from `in_fire`

### Tags

#### Enchantment Tags

##### Enchantment Functionality Tags

-   `curse`: Enchantments that get listed in red in tooltips and cannot be removed by disenchanting
-   `prevents_bee_spawns_when_mining`: Enchantments that allow a tool to mine bee nests and hives with the bees still inside
-   `prevents_decorated_pot_shattering`: Enchantments that make a tool not shatter decorated pots
-   `prevents_ice_melting`: Enchantments that cause a tool to not break Ice into Water
-   `prevents_infested_spawns`: Enchantments that allow a tool to break Infested blocks without causing the mob inside to spawn
-   `smelts_loot`: Enchantments that cause loot drops to be smelted

##### Enchantment Availability Tags

-   `tradeable`: Enchantments that show up on Books in Villager trades
-   `on_traded_equipment`: Enchantments that show up on enchanted equipment in Villager trades
-   `double_trade_price`: Enchantments that double the Emerald cost when traded
-   `in_enchanting_table`: Enchantments that can show up in the Enchanting Table
-   `on_mob_spawn_equipment`: Enchantments that can show up on equipment worn by randomly spawned Mobs
-   `on_random_loot`: Enchantments that can show up on loot in loot chests found in the world

##### Enchantment Exclusivitity Tags

New tags used by the Vanilla Enchantments to control which ones are mutually exclusive, all of which are found under the `exclusive_set/` path.

-   `armor`: Enchantments that cannot co-exist on Armor pieces
-   `boots`: Enchantments that cannot co-exist on Boots
-   `bow`: Enchantments that cannot co-exist on Bows
-   `crossbow`: Enchantments that cannot co-exist on Crossbows
-   `damage`: Damage-increasing Enchantments that cannot co-exist
-   `mining`: Mining-related Enchantments that cannot co-exit
-   `riptide`: Enchantments that cannot co-exist with Riptide

##### Trade Rebalance Enchantment Tags

In the experimental `trade_rebalance` pack, each biome type has two tags:

-   `trades/<biome>_common`: Contains Enchantments traded on the lower profession levels
-   `trades/<biome>_special`: Contains Enchantments traded on the highest profession level

#### Damage Type Tags

-   `burn_from_stepping`: Damage types that represent burning damage from stepping on something - in particular, damage types counterd by the `frost_walker` Enchantment

### Loot tables

#### Conditions

##### Targets

Some target entity names have been renamed to fit in a more generic context:

-   `killer` is now called `attacker`
-   `direct_killer` is now called `direct_attacker`
-   `killer_player` is now called `attacking_player`

##### `enchantment_active_check`

New condition, requires the "Enchantment Active" parameter to exist in the context, which currently means it only works in Enchantment conditions.

Fields:

-   `active`: boolean determining whether the check should match for an active (`true`) or inactive (`false`)

##### `random_chance`

-   The `chance` field is now a Number Provider

##### `random_chance_with_enchanted_bonus`

Renamed from `random_chance_with_looting`. Field changes:

-   `looting_multiplier`: field has been removed
-   `chance`: this is now a Level-Based Values
-   `enchantment`: new field containing the namespaced ID of the Enchantment which grants the bonus chance

#### Functions

##### `enchanted_count_increase`

Renamed from `looting_enchant`. Now has a new field:

-   `enchantment`: Namespaced ID of the Enchantment that increases yields

##### `enchant_randomly`

-   Changed format - the `enchantments` field is now called `options`
-   `options` is now specified as one of an Enchantment, a list of Enchantments or an Enchantment Tag (prefixed with `#`)
-   `only_compatible`: New optional boolean field - if `true`, only allows enchantments that are compatible with the item
    -   If omitted, defaults to `true`
    -   Note: Books are considered compatible with all Enchantments

#### `enchant_with_levels`

-   The `treasure` field has been removed
-   Changed format - `options` is now specified as one of an Enchantment, a list of Enchantments or an Enchantment Tag (prefixed with `#`)

#### `copy_name`

-   Some of the possible values for the `source` field have changed:
    -   `killer` renamed to `attacking_entity`
    -   `killer_player` renamed to `last_damage_player`

#### Number Providers

##### `enchantment_level`

A new number provider that sources values from the Enchantment Level parameter.

Fields:

-   `amount`: A [Level-Based Value](#level-based-values) giving a value based on the level of the Enchantment

### Predicates

#### Enchantment Predicate

-   The `enchantment` field has been removed
-   Added an `enchantments` field, one of an Enchantment, a list of Enchantments or an Enchantment Tag (prefixed with `#`)
    -   If multiple Enchantments are specified through a list or a tag, the Predicate matches if any Enchantment matches
-   If no `enchantments` field is specified, any enchantment matching `levels` will succeed the test
    -   If neither the `levels` nor `enchantments` fields are defined, the predicate will match an item that has any enchantment

#### Entity Flags Predicate

New possible fields:

-   `is_on_ground`: Optional boolean - if provided, matches the "on ground" state of the entity
-   `is_flying`: Optional boolean - if provided, matches whether the entity is flying, including:
    -   Gliding with Elytra
    -   Flying in Creative Mode

#### Location Predicate

New possible fields:

-   `can_see_sky`: Optional boolean - if provided, matches exactly when the location has the maximum possible level of sky light
-   `weather`: Optional enumerated value, matching the weather in the location's dimension. One of:
    -   `clear`
    -   `raining`
    -   `thunder`

#### Movement Predicate

New sub-predicate available as `movement` in Entity Predicates. Possible fields:

-   `x`, `y`, `z`: `min`/`max` limits for movement speed along a certain axis in blocks / second
-   `speed`: `min`/`max` limits for overall movement speed in blocks / second
-   `horizontal_speed`: `min`/`max` limits for the horizontal speed component of the Entity's movement in blocks / second
-   `vertical_speed`: `min`/`max` limits for the vertical speed component of the Entity's movement in blocks / second
-   `fall_distance`: `min`/`max` limits for the fall distance of the Entity in blocks

#### Periodic Ticks

New Entity sub-predicate available as `periodic_ticks` in Entity Predicates. Format: a positive integer.

This sub-predicate is true every _n_ ticks of an Entity's lifetime.

### Attributes

#### `generic.attack_knockback`

Now also works on Players.

#### `generic.burning_time`

A factor to how long an Entity remains on fire after being ignited. A factor of `0` removes the entire burn time, a factor of `1` lets the Entity burn the default fire time - larger values increase the amount of time the entity remains on fire.

-   Default: `1`
-   Minimum: `0`
-   Maximum: `1024`

#### `generic.explosion_knockback_resistance`

A factor to how much knockback an Entity takes from an Explosion. A factor of `1` removes the entire knockback, a factor of `0` means no knockback reduction.

-   Default: `0`
-   Minimum: `0`
-   Maximum: `1`

#### `player.mining_efficiency`

Mining speed factor added to the speed of mining when using a tool that efficiently mines a block.

-   Default: `0`
-   Minimum: `0`
-   Maximum: `1024`

#### `generic.movement_efficiency`

How efficiently the entity can move through impeding terrain that slows down movement. A factor of `1` removes all movement penalty, a factor of `0` applies full movement penalty.

-   Default: `0`
-   Minimum: `0`
-   Maximum: `1`

#### `generic.oxygen_bonus`

Factor to the chance an Entity has to not use up air when underwater. `0` has no effect, values over `0` are used in the following formula to determine the chance of using up air:

`1 / (oxygen_bonus + 1)`

-   Default: `0`
-   Minimum: `0`
-   Maximum: `1024`

#### `player.sneaking_speed`

The movement speed factor when sneaking. A factor of `1` means sneaking is as fast as walking, a factor of `0` means unable to move while sneaking.

-   Default: `0.3`
-   Minimum: `0`
-   Maximum: `1`

#### `player.submerged_mining_speed`

The mining speed factor when submerged. A factor of `1` means mining as fast submerged as on land, a factor of `0` means unable to mine while submerged. Note that this represents only the submersion factor itself, and other factors (such as not touching the ground) also apply.

-   Default: `0.2`
-   Minimum: `0`
-   Maximum: `20`

#### `player.sweeping_damage_ratio`

How much of the base attack damage that gets transfered transfer to secondary targets in a sweep attack. This is additive to the base attack of the sweep damage itself of `1`. A value of `0` means none of the base attack damage is transferred (sweep damage is `1`). A value of `1` means all of the base attack damage is transferred (sweep damage is `attack_damage + 1`)

-   Default: `0`
-   Minimum: `0`
-   Maximum: `1`

#### `generic.water_movement_efficiency`

The movement speed factor when submerged. The higher, the more of the underwater movement penalty is mitigated. Note that this represents only the submersion factor itself, and other factors (such as not touching the ground) also apply.

-   Default: `0`
-   Minimum: `0`
-   Maximum: `1`

### Block Predicates (World Generation Style)

#### `unobstructed`

New block predicate type that passes if the selected block is unobstructed (no Entities are in the space of the block).

Fields:

-   `offset`: List of 3 int offset coordinates, specifying the offset from the origin position to test
    -   Optional, defaults to `[0, 0, 0]` if unspecified

### Entity Data

#### Projectiles

Arrow-like projectile data now contains a `weapon` field containing an Item Stack representing the weapon the projectile was fired from. The following fields have been removed:

-   `ShotFromCrossbow`

## Resource Pack Version 33

-   Added new textures and music assets for Music Discs
-   Renamed sound events for Ominous Trial Spawner becoming active and ambient sound

## Fixed bugs in Snapshot 24w18a

-   [MC-44280](https://bugs.mojang.com/browse/MC-44280) Entities don't receive knockback from projectiles fired from dispensers
-   [MC-59626](https://bugs.mojang.com/browse/MC-59626) Arrows lose their Punch enchantment property when unloaded
-   [MC-76104](https://bugs.mojang.com/browse/MC-76104) Guardians are unaffected by Thorns enchantment
-   [MC-93669](https://bugs.mojang.com/browse/MC-93669) The sweeping attack doesn't ignite other mobs when using the fire aspect enchantment
-   [MC-99411](https://bugs.mojang.com/browse/MC-99411) Frost Walker ice only semi-affected by randomTickSpeed gamerule
-   [MC-116643](https://bugs.mojang.com/browse/MC-116643) Silk Touch cannot be combined with Looting or Luck of the Sea
-   [MC-117361](https://bugs.mojang.com/browse/MC-117361) Mob type specific damage enchantment (Smite, Bane of Arthropods) affects all nearby entities when hitting affected mob with Sweeping Edge
-   [MC-131637](https://bugs.mojang.com/browse/MC-131637) The slowness effect is applied to entities when the bane of arthropods enchantment is held in the off hand
-   [MC-158245](https://bugs.mojang.com/browse/MC-158245) Fire Aspect enchantment from mobs can set you on fire even when blocking with a shield
-   [MC-177965](https://bugs.mojang.com/browse/MC-177965) Putting on/taking off soul speed boots while standing on soul sand/soil does not properly give speed
-   [MC-182606](https://bugs.mojang.com/browse/MC-182606) When sneak-walking with Soul Speed on a Soul Sand or Soul Soil block (most noticeably) adjacent to lava, too many soul particles spawn
-   [MC-188693](https://bugs.mojang.com/browse/MC-188693) FOV doesn't change back when riding a mob after staying on Soul Sand with Soul Speed
-   [MC-189365](https://bugs.mojang.com/browse/MC-189365) Player can retain Soul Speed effect by bridging
-   [MC-200899](https://bugs.mojang.com/browse/MC-200899) Players don't receive thorns damage when attacking entities wearing thorns armor with indirect sweeping attacks
-   [MC-200991](https://bugs.mojang.com/browse/MC-200991) Soul Speed in minecart uses durability
-   [MC-213349](https://bugs.mojang.com/browse/MC-213349) Certain mobs that can melee can't use the Fire Aspect enchantment
-   [MC-215144](https://bugs.mojang.com/browse/MC-215144) A re-created "Default" world has world type of "Custom"
-   [MC-223301](https://bugs.mojang.com/browse/MC-223301) Goats not taking damage when attacking with Thorns armor equipped
-   [MC-224743](https://bugs.mojang.com/browse/MC-224743) Jumping on soul sand uses durability of Soul Speed boots
-   [MC-225312](https://bugs.mojang.com/browse/MC-225312) Evokers using evoker fangs are not affected by the Thorns enchantment
-   [MC-232770](https://bugs.mojang.com/browse/MC-232770) Entities receive knockback from incorrect directions when being damaged by firework explosions
-   [MC-234880](https://bugs.mojang.com/browse/MC-234880) Llama's unaffected by Thorns
-   [MC-237057](https://bugs.mojang.com/browse/MC-237057) The "minecraft:particle.soul\_escape" sound is very rarely heard by other players when using boots enchanted with soul speed
-   [MC-237063](https://bugs.mojang.com/browse/MC-237063) Particles produced from using boots enchanted with soul speed are inconsistently displayed for other players
-   [MC-248272](https://bugs.mojang.com/browse/MC-248272) Enchantment::doPostHurt and Enchantment::doPostAttack are called twice for players
-   [MC-253457](https://bugs.mojang.com/browse/MC-253457) Cats and Ocelots are immune to Thorns damage
-   [MC-258497](https://bugs.mojang.com/browse/MC-258497) Parity issue: Fire Aspect enchant does not set fire to candles
-   [MC-258967](https://bugs.mojang.com/browse/MC-258967) Entities receive knockback from splash potions based on the direction that the said entity was facing when throwing the potion
-   [MC-261701](https://bugs.mojang.com/browse/MC-261701) Lag spike when opening creative inventory for first time in world
-   [MC-266556](https://bugs.mojang.com/browse/MC-266556) Trial spawner cannot be activated in peaceful difficulty
-   [MC-267154](https://bugs.mojang.com/browse/MC-267154) Using an Eye of Ender plays the minecraft:entity.ender\_eye.launch sound event twice
-   [MC-267441](https://bugs.mojang.com/browse/MC-267441) When a player's generic.step\_height attribute is set to more than two, attempting to step atop of more than two blocks may fail if there are blocks higher up
-   [MC-268347](https://bugs.mojang.com/browse/MC-268347) Setting gravity higher than 0.84 allows you to jump up a block
-   [MC-268367](https://bugs.mojang.com/browse/MC-268367) Arrows repeatedly bouncing off a breeze spam sound
-   [MC-268551](https://bugs.mojang.com/browse/MC-268551) When a wind charge is fired from a dispenser, it makes a "dispensed item" sound instead of a "Wind Charge flies" sound
-   [MC-268564](https://bugs.mojang.com/browse/MC-268564) Entities receive knockback from incorrect directions when being hit by projectiles deflected by breezes
-   [MC-269881](https://bugs.mojang.com/browse/MC-269881) Flow and Bolt Armor Trims don't grant "Crafting a New Look" advancement
-   [MC-269958](https://bugs.mojang.com/browse/MC-269958) New effects are not required for the "How Did We Get Here?" advancement
-   [MC-269966](https://bugs.mojang.com/browse/MC-269966) "A Furious Cocktail" Advancement does not require the new potion effects
-   [MC-269969](https://bugs.mojang.com/browse/MC-269969) Using a normal trial key on the ominous vault grants Under Lock and Key advancement
-   [MC-270021](https://bugs.mojang.com/browse/MC-270021) Drinking a single ominous bottle in survival doesn't grant bad omen with the correct amplifier
-   [MC-270031](https://bugs.mojang.com/browse/MC-270031) Arrows spawned from ominous trial spawner can be picked up
-   [MC-270047](https://bugs.mojang.com/browse/MC-270047) Axe Prioritizes Scraping Copper over Shield
-   [MC-270216](https://bugs.mojang.com/browse/MC-270216) Mace smash attack particles cannot be reduced with the Particles setting
-   [MC-270278](https://bugs.mojang.com/browse/MC-270278) "Who needs rockets?" is granted at heights lower than 8 blocks when using slow falling
-   [MC-270379](https://bugs.mojang.com/browse/MC-270379) Buttons and Levers don't make sounds when toggled by Wind Charges
-   [MC-270499](https://bugs.mojang.com/browse/MC-270499) Riptide trident in off-hand applies mace effects in main hand
-   [MC-270588](https://bugs.mojang.com/browse/MC-270588) Hitting Wind Charges and Fireballs makes no sound
-   [MC-270682](https://bugs.mojang.com/browse/MC-270682) modify\_contents item modifier can create overstacked items
-   [MC-270791](https://bugs.mojang.com/browse/MC-270791) Mace smash attack can knockback tamed mobs
-   [MC-270849](https://bugs.mojang.com/browse/MC-270849) Breeze can extinguish lit candles when mobGriefing is false
-   [MC-270934](https://bugs.mojang.com/browse/MC-270934) Missing trial chamber structure minecraft:trial\_chambers/chamber/addon/c6
-   [MC-270974](https://bugs.mojang.com/browse/MC-270974) Breeze wind charges can change activation blockstates of redstone components when mobGriefing is disabled
-   [MC-270977](https://bugs.mojang.com/browse/MC-270977) Breezes don't make deflection sounds
-   [MC-271039](https://bugs.mojang.com/browse/MC-271039) Upgrading to 1.20.5 leads to the removal of all enchantments if item had the "sweeping" enchantment without namespace
-   [MC-271157](https://bugs.mojang.com/browse/MC-271157) "Telemetry is disabled" tooltip does not get updated when the client locale changes

---

Hello Minecraft players! Today we have a Snapshot with some technical changes and bug fixes for you.

## Technical Changes

-   The Data Pack version is now 38
-   The game now requires Java 21
-   The game now requires a 64-bit Operating System
-   The included Java distribution is now the Microsoft build of OpenJDK 21.0.2

## Data Pack Version 38

-   Added `replace` field to the `set_attributes` loot function (default: `true`)
    -   When `false`, attributes will be appended
-   The `text` field within filterable entries in book components has been renamed to `raw` to avoid ambiguity
-   The `profile` component and fields on player head items and blocks respectively now support resolving from a UUID
    -   By specifying the `id` field without a `name`, the `name` and textures will be looked up

## Fixed bugs in Snapshot 24w14a

-   [MC-80142](https://bugs.mojang.com/browse/MC-80142) Power tag for wither skulls, small/dragon fireballs and wind charges is not synced correctly, leading to stuttering during flight
-   [MC-266467](https://bugs.mojang.com/browse/MC-266467) Wind charges stutter when flying through the air
-   [MC-268563](https://bugs.mojang.com/browse/MC-268563) Snowballs, eggs, experience bottles, and ender pearls are destroyed instead of being deflected when hitting breezes
-   [MC-268597](https://bugs.mojang.com/browse/MC-268597) Hitting a breeze with a player reflected/dispensed wind charge causes it to become trapped within the breeze until it moves
-   [MC-268727](https://bugs.mojang.com/browse/MC-268727) Server disconnects the client when sending a keepalive packet while transitioning out of configuration phase
-   [MC-268877](https://bugs.mojang.com/browse/MC-268877) Beehives/bee nests in inventory lose honey level after converting to newer world version
-   [MC-268945](https://bugs.mojang.com/browse/MC-268945) Some interfaces instantly close when opened from long distances when players have their "minecraft:player.block\_interaction\_range" attribute set to high values
-   [MC-269355](https://bugs.mojang.com/browse/MC-269355) Heavy Core has no required tool
-   [MC-269446](https://bugs.mojang.com/browse/MC-269446) "Are you sure you want to quit?" screen uses background blur
-   [MC-269482](https://bugs.mojang.com/browse/MC-269482) The set\_attributes function in loot tables no longer replaces default attribute modifiers
-   [MC-269503](https://bugs.mojang.com/browse/MC-269503) Goat horn default instrument is missing when using /give
-   [MC-269553](https://bugs.mojang.com/browse/MC-269553) Items with empty enchantments NBT tag do not upgrade as expected
-   [MC-269596](https://bugs.mojang.com/browse/MC-269596) EntityTag of existing items is not upgraded to entity\_data component
-   [MC-269677](https://bugs.mojang.com/browse/MC-269677) Filterable "text" field conflicts with text components
-   [MC-269684](https://bugs.mojang.com/browse/MC-269684) Commands accepting stack sizes are restricted to a maximum of 64
-   [MC-269700](https://bugs.mojang.com/browse/MC-269700) Item count in "/item replace" is restricted to the default stack size
-   [MC-269716](https://bugs.mojang.com/browse/MC-269716) Unable to craft the maximum possible allowed items using shift-click in the recipe book
-   [MC-269960](https://bugs.mojang.com/browse/MC-269960) Ctrl + Pick block is not copying container data correctly
-   [MC-269983](https://bugs.mojang.com/browse/MC-269983) Player Head Data is not evaluated when id is present
-   [MC-269991](https://bugs.mojang.com/browse/MC-269991) Dragon breath particles look wrong
-   [MC-270003](https://bugs.mojang.com/browse/MC-270003) Ominous banners are not "pick block"-ed properly
-   [MC-270061](https://bugs.mojang.com/browse/MC-270061) Ctrl + Pick Block does not copy Trial Spawner data correctly
-   [MC-270162](https://bugs.mojang.com/browse/MC-270162) The game crashes when attempting to upgrade a world from version 1.12.2 and below
-   [MC-270187](https://bugs.mojang.com/browse/MC-270187) Command block's nbt cannot copy before second save

---

This fine Wednesday brings 24w13a, a snapshot containing changes to the Mace, Trial Chambers, and introduces the new Ominous Trials!

You might just be inclined to try out the ominous new features of this snapshot. ...or else? Did I do that right?

Happy mining!

Note: some of the features below will only work in freshly generated Trial Chambers.

## Experimental Features

-   Changes to the Mace
-   Tweaks to the Breeze and Wind Charges
-   Redesigned Bad Omen
-   Added Ominous Bottle
-   Added 6 new mob effects
-   Added Ominous Trial Spawner
-   Added Ominous Vault
-   Added Ominous Trial Key

### Mace

-   Added a new explosive particle effect when executing a smash attack with the Mace to really show the player's power
-   Increased the power and range of the knockback effect from a smash attack
-   Introduced an even stronger knockback when falling for more than 5 blocks before attacking
-   When successfully striking a target, all vertical momentum will be reset in addition to negating any accumulated fall distance
-   The baseline additional damage dealt by the Mace smash attack has been slightly reduced to 3 (1.5 hearts) per fallen block
-   These existing enchantments can now be applied to the Mace:
    -   Mending
    -   Unbreaking
    -   Smite
    -   Bane of Arthropods
    -   Fire Aspect
    -   Curse of Vanishing
-   Three new enchantments have been introduced that are unique to the Mace:
    -   Density:
        -   Common Enchantment, accessible in the Enchanting Table and on Enchanted Books in loot
        -   Has 5 levels
        -   Maces enchanted with Density do more damage per fallen block per Density level
            -   Damage dealt per fallen block is increased by 1 per level of Density
    -   Breach:
        -   Rare Enchantment, accessible in the Enchanting Table and on Enchanted Books in loot
        -   Has 4 levels
        -   Maces enchanted with Breach reduce the effectiveness of armor on the target
            -   The effectiveness of the armor is reduced by 15% per Breach level
    -   Wind Burst:
        -   Unique enchantment which can only be found in Ominous Vaults
        -   Has 3 levels
        -   Maces enchanted with Wind Burst will emit a Wind Burst upon hitting an enemy, launching the attacker upward and enabling the linking of smash attacks one after the other
        -   Each level will bounce the attacker higher up in the air

### Breeze & Wind Charges

-   The Breeze now avoids jumping into dangerous blocks or air
-   Wind Charges no longer collide with End Crystals

### Ominous Events

-   Bad Omen has been expanded to give access to an optional experience in Trial Chambers
-   These optional experiences accessed through Bad Omen are now known as Ominous Events
    -   They are more challenging than usual, and are designed to shake up the experience in unique ways
    -   Illager Raids are an example of an existing Ominous Event
-   Bad Omen is getting some changes with this redesign:
    -   It has a new, shadowy icon and a sound for being applied to the player
    -   It no longer triggers a Raid directly when entering a village
        -   Instead, it will transform into a Raid Omen variant with a duration of 30 seconds
        -   Once the Raid Omen expires, a Raid will start at the location the player gained the Raid Omen
        -   Like any other effect, players can drink a Bucket of Milk to clear the Raid Omen to prevent the Raid from starting
    -   It is no longer given to players that defeat a Raid Captain outside a Raid
        -   Instead, players can gain access to Bad Omen by consuming a new Ominous Bottle

#### Ominous Bottle

-   An item which can be consumed by players to receive the Bad Omen effect for 1 hour and 40 minutes
    -   Comes in 5 variations, one for each Bad Omen level
    -   The bottle breaks when consumed
    -   Can be stacked to 64
-   Can be found uncommonly in any Vaults that are unlocked with Trial Keys, and is dropped by Raid Captains when defeated outside a Raid

### Ominous Trials

-   A new Ominous Event that can be accessed by exploring a Trial Chamber with Bad Omen
-   This event will have players facing more powerful Trial Spawners if they dare!

#### Trial Omen

-   A variant that Bad Omen can transform into
    -   This occurs when the player is within detection range of a Trial Spawner that is not Ominous
    -   The Trial Omen has a duration of 15 minutes multiplied by the transformed Bad Omen's level
-   Players that have Trial Omen are surrounded by ominous particles

#### Ominous Trial Spawner

-   A more powerful active phase of the Trial Spawner with unique challenges and rewards
    -   Provides a more challenging experience that advanced players can opt into for better rewards
-   If a Trial Spawner detects a player that has the Trial Omen effect, the spawner will become Ominous if:
    -   It is not in cooldown
    -   Or, it is in cooldown but was not Ominous during its last activation
        -   Making it Ominous this way will bypass the cooldown
-   While active, it will:
    -   Glow blue instead of orange
    -   Emit soul flames instead of normal flames
    -   Very commonly spawns mobs with equipment if they can wear it
        -   The equipment these mobs wear have armor trims applied from the Trial Chambers
        -   Known issue: these mobs can currently drop their equipment on death, but they will not in the future
    -   Periodically spawn potions and projectiles on top of unsuspecting players and mobs
        -   Based on their location, spawners in an area will select a random set of projectiles to spawn
        -   These projectiles will always include a single type of Lingering Potion from a set of possible effects
-   Becoming Ominous will despawn any existing mobs it spawned and reset its challenge
    -   It will stay Ominous until it has been defeated and its cooldown has finished
-   When defeated, it will eject a different set of loot to normal Trial Spawners

#### Ominous Trial Key

-   A new variant of the Trial Key which can only be obtained by defeating an Ominous Trial Spawner
-   They can be used to unlock Ominous Vaults

#### Ominous Vault

-   A variant of Vaults that have a different texture and emit soul flames instead of normal flames
-   These can be found throughout the Trial Chambers in harder to find places and require an Ominous Trial Key to unlock
    -   These Vaults hold a more valuable set of rewards than the standard Vaults unlocked by Trial Keys

### Mob Effects

-   The following effects have been added:
    -   Wind Charged
        -   Affected entities will emit a wind burst upon death
        -   Brewed with an Awkward Potion and a Breeze Rod
    -   Weaving
        -   Affected entities will spread Cobweb blocks upon death
        -   Non-player entities with this effect can walk through Cobweb at normal speeds
        -   Brewed with an Awkward Potion and a Cobweb block
    -   Oozing
        -   Affected entities will spawn two Slimes upon death
        -   Brewed with an Awkward Potion and a Slime Block
    -   Infested
        -   Affected entities have a 5% chance to spawn 1-2 Silverfish when hurt
        -   Brewed with an Awkward Potion and a Stone block
-   These effects can be encountered while taking on an Ominous Trial Spawner
-   Some mobs are immune to these effects
    -   Slimes are immune to Oozing
    -   Silverfish are immune to Infested

### Trial Chambers Loot

-   The loot found within Trial Chamber Vaults has been adjusted
-   Standard Vaults will give slightly less items of high quality, but also include the following changes:
    -   Ominous Bottle I - II can be found
    -   Flow Banner Pattern, Flow Armor Trim Smithing Template, and Heavy Core can no longer be obtained
        -   Guster Banner Pattern and Bolt Armor Trim Smithing Template remain exclusive to standard Vaults
        -   In Heavy Core's place, standard Vaults will instead have a very rare chance of providing a Trident
-   Ominous Vaults can provide some particularly valuable items, to mention a few:
    -   Ominous Bottle III - V
    -   Enchanted Golden Apple
    -   Flow Banner Pattern and Flow Armor Trim Smithing Template
    -   Wind Burst, Breach and Density Enchantments for the Mace
    -   Heavy Core
-   The loot ejected from Trial Spawners have been adjusted
    -   It now has a focus on providing higher quality food more often to make replenishing between fights more safe
-   Ominous Trial Keys have a 30% chance of ejecting from a defeated Ominous Trial Spawner, replacing the usual 50% chance to eject Trial Keys

### Trial Spawner

-   All spawners now increase the amount of mobs present at once by 0.5 for each additional player, down from 2
-   Baby Zombie spawners now only have 2 mobs present at once for its baseline, down from 3 mobs
-   Can now only activate when a player is in line of sight

### Trial Chambers

-   Remade `chamber_5` with variations, and renamed it to `eruption`
-   Reduced amount of Trial Spawners in corridors
-   Updated layout and placements of Vaults
-   Placed Ominous Vaults in chambers, intersections, at the ends of corridors
-   Corridors will no longer generate endlessly
-   Added an atrium to the corridors
-   Made various layout changes in intersections and corridors

Known issues:

-   Corner quadrants in slanted may still fail to generate correctly

## Changes in 24w13a

-   Added unique sounds for Cobwebs

## Technical Changes in 24w13a

-   The Data Pack version is now 37
-   The Resource Pack version is now 31
-   Client chat state is now preserved by default when entering configuration phase
-   Changes to chat network protocol

### Chat

-   Client chat state (on-screen messages and chat input history) is now preserved by client when entering and exiting configuration phase
-   Message signature chain handling remains unchanged - going into configuration phase starts new session
-   If client has message delay configured, pending messages will be delivered immediately before leaving world
-   Server can clear chat state by sending `reset_chat` packet in configuration phase

### Network Protocol

-   The `minecraft:chat_command_signed` packet has been split from `minecraft:chat_command`
    -   Commands that do not accept any signed arguments will use the unsigned packet, and will not pass any 'last seen' chat updates

## Data Pack Version 37

-   Added new loot table type `minecraft:equipment`
    -   Has required parameters of `this_entity` and `origin`
        -   `this_entity` : the mob that is about to be given equipment
        -   `origin` : the position of the mob
-   Added optional `equipment_loot_table` to the spawn data present in the `SpawnPotentials` of Monster Spawners and `spawn_potentials` of Trial Spawner configs
    -   If present, rolled items from the specified loot table will be equipped to the mob that spawns
-   Modified `copy_components` and `set_name` loot function arguments
-   Added new `set_ominous_bottle_amplifier` loot function
-   Added new item components
-   Non-default components on item stacks are now stored when block entity is placed
-   Int and float providers used in worldgen definitions are no longer wrapped in an extra `value` field next to `type`
    -   For example, `{"type":"minecraft:uniform","value":{"min_inclusive":0.0,"max_inclusive":1.0}}` becomes `{"type":"minecraft:uniform","min_inclusive":0.0,"max_inclusive":1.0}`
-   New Damage Type Tag: `minecraft:is_player_attack` for attacks performed by the player
-   New Entity Type Tags:
    -   `immune_to_oozing` For entities that cannot receive the Oozing mob effect
    -   `immune_to_infested` For entities that cannot receive the Infested mob effect
-   Added `raider` sub entity predicate

### Block entities

Non-default components on item stacks containing block items are now stored on block entities when placed

-   Component removals from defaults are currently not preserved
-   Placing and breaking non-block entity blocks remains unchanged - nothing is preserved
-   Does not automatically cause preserved components to be restored on drops - this requires addition of `copy_components` function to loot table
-   Components are stored in field called `components`
    -   Some components (like `custom_name`) are still handled by legacy serialization, which means they might not be present in there
    -   Contains map of component id to component value

### New Item Stack Components

#### `minecraft:item_name`

-   When present, replaces default item name with contained chat component
-   Differences from `custom_name`:
    -   `item_name` can't be changed or removed in anvil
    -   `item_name` is not styled with italics when displayed to player
    -   `item_name` does not show labels where applicable (for example: banner markers, names in item frames)

#### `minecraft:ominous_bottle_amplifier`

-   Controls the amplifier amount for an Ominous Bottle's bad omen effect
-   Format: integer between 0 and 4
    -   e.g. `ominous_bottle_amplifier=3`

### Loot Functions

#### `copy_components`

Removed field `components` and replaced it with:

-   `include` - optional list of data components to be copied from source
    -   if omitted, all components present are included
-   `exclude` - optional list of data components to be excluded from copying
    -   if omitted, defaults to empty
-   Only components that are included (explicitly or implicitly) but not excluded will be copied

#### `set_name`

Added optional field `target` to specify which name should be set

-   Values:
    -   `custom_name` - sets `custom_name` component (default)
    -   `item_name` - sets `item_name` component

#### Added `set_ominous_bottle_amplifier`

Sets the `ominous_bottle_amplifier` component on the target item according to a number provider.

-   `conditions`: list of conditions to filter this function
-   `amplifier`: a number provider used to generate the `ominous_bottle_amplifier` component

#### Entity sub-predicates

##### `raider`

New `raider` sub-predicate has been added to match raiders Fields:

-   `has_raid` - Match whether the raider is in an active raid
-   `is_captain` - Match whether the raider is a captain

## Resource Pack Version 31

-   Added the following particle types:
    -   `infested`
    -   `item_cobweb`
    -   `small_gust`
    -   `raid_omen`
    -   `trial_omen`
    -   `trial_spawner_detection_ominous`
    -   `ominous_spawning`
-   Added the following sound events:
    -   `block.cobweb.break`
    -   `block.cobweb.step`
    -   `block.cobweb.place`
    -   `block.cobweb.hit`
    -   `block.cobweb.fall`
    -   `block.trial_spawner.about_to_spawn_item`
    -   `block.trial_spawner.spawn_item`
    -   `block.trial_spawner.spawn_item_begin`
    -   `block.trial_spawner.charge_activate`
    -   `block.trial_spawner.ambient_charged`
    -   `item.ominous_bottle.dispose`
    -   `event.mob_effect.bad_omen`
    -   `event.mob_effect.trial_omen`
    -   `event.mob_effect.raid_omen`
-   Added textures for the following blocks and items:
    -   Ominous Vault
    -   Ominous Trial Spawner
    -   Ominous Bottle
-   Updated textures for normal Vault block
-   Added the following mob effect icon textures:
    -   `infested`
    -   `oozing`
    -   `weaving`
    -   `wind_charged`
    -   `raid_omen`
    -   `trial_omen`
    -   `bad_omen_121`
-   Added new models for Ominous state of Vault block

## Fixed bugs in 24w13a

-   [MC-123804](https://bugs.mojang.com/browse/MC-123804) Explorer map and Ominous banner names appear in item frames, draw in italics, and can be removed with an anvil
-   [MC-148057](https://bugs.mojang.com/browse/MC-148057) Ominous banners generated in outposts show the pattern list
-   [MC-166361](https://bugs.mojang.com/browse/MC-166361) GUI scale does not visually update when the option is changed using the keyboard and without the mouse
-   [MC-178410](https://bugs.mojang.com/browse/MC-178410) Banners don't support the HideFlags tag when placed down as blocks
-   [MC-268578](https://bugs.mojang.com/browse/MC-268578) Bogged mob sits wrong in boats
-   [MC-268627](https://bugs.mojang.com/browse/MC-268627) Slime spawns are incorrect
-   [MC-268716](https://bugs.mojang.com/browse/MC-268716) Magma Cubes spawn even if there's only 2 blocks in height
-   [MC-268882](https://bugs.mojang.com/browse/MC-268882) Same Enchantments in an item components crashes the game
-   [MC-268893](https://bugs.mojang.com/browse/MC-268893) Comparators require a block update to function properly, and droppers/observers receive false state changes
-   [MC-269015](https://bugs.mojang.com/browse/MC-269015) Wind charges can destroy end crystals
-   [MC-269143](https://bugs.mojang.com/browse/MC-269143) Attribute modifiers cannot exclusively target the "body" slot
-   [MC-269342](https://bugs.mojang.com/browse/MC-269342) The experimental features details menu is rendered incorrectly after resizing the game window
-   [MC-269371](https://bugs.mojang.com/browse/MC-269371) If the 'GUI Scale' option is on 'Auto', and if you try to scale it down using CTRL + mouse wheel, it shows as '-1'
-   [MC-269387](https://bugs.mojang.com/browse/MC-269387) Mace sounds use the neutral sound category
-   [MC-269388](https://bugs.mojang.com/browse/MC-269388) Mace falling damage increase is applied while using an elytra
-   [MC-269427](https://bugs.mojang.com/browse/MC-269427) Lingering potion particles are tinted black instead of the potion's color
-   [MC-269628](https://bugs.mojang.com/browse/MC-269628) Heavy cores delete water when placed into it
-   [MC-269635](https://bugs.mojang.com/browse/MC-269635) The game crashes when attempting to eat lily pads or frogspawn
-   [MC-269643](https://bugs.mojang.com/browse/MC-269643) Waterlogged heavy core does not update water flow correctly
-   [MC-269649](https://bugs.mojang.com/browse/MC-269649) Who Needs Rockets advancement is granted after launching yourself up 8 blocks instead of 7 blocks
-   [MC-269656](https://bugs.mojang.com/browse/MC-269656) Feeding parrots poison while holding mace grants Over-Overkill challenge
-   [MC-269659](https://bugs.mojang.com/browse/MC-269659) Parrots can now be fed carrots to kill them instead of cookies
-   [MC-269670](https://bugs.mojang.com/browse/MC-269670) Game crash when giving bundle with hide tooltip

---

