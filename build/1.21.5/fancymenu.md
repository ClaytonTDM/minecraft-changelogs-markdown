# Minecraft: Java Edition 1.21.5

It's time to experience new wonders of the Overworld as we release the Spring to Life drop, the first Minecraft game drop of 2025.

The Spring to Life drop brings more reasons to explore both near and far! Warm winds have swept across biomes, bringing new mob variants, ambient sounds, and lush plants for you to discover. Befriend fluffy pigs, marvel at glittering firefly bushes, listen out for whispers of sand, and delight in a blooming Overworld humming with new beginnings.

In this release we are also making the game tests system accessible through data packs with the new test command. And as usual, we continue to rebuild our engine to improve the experience for players and content creators. We are sure all those spare parts left on our floor can't be that important, right?

## New Features

-   Added cold and warm variants for the Pig, Cow and Chicken
-   Sheep now spawn with wool color dependent on the biome in which they spawn
-   Added new sound variants for Wolves
-   Overhauled the visuals of each Spawn Egg to improve readability and accessibility
-   Added fallen tree generation
-   Added Firefly Bush block
-   Added Leaf Litter block
-   Added Wildflowers block
-   Added Bush block
-   Added Short Dry Grass and Tall Dry Grass blocks
-   Added Cactus Flower block which can grow on Cactus blocks
-   Added new falling leaf particles to all Leaves blocks that did not already have them
-   Added new ambient block sounds in the Desert and Badlands biomes
-   Added language support for Kyrgyz

### Farm Animal Variants

![The cow, the chicken, and the pig are joined by their new variations high up on a mountain.](https://launchercontent.mojang.com/v2/images/1.21.5animalvariations.jpg)

-   Warm and cold variants have been added for the following animals:
    -   Pig
    -   Cow
    -   Chicken

![Warm pigs are amongst cactus flowers in a desert.](https://launchercontent.mojang.com/v2/images/1.21.5pigdesert.jpg)

-   The variant is determined by the biome they spawn in
-   Temperate variant - The variants we are all familiar with, spawns by default where the other variants do not
-   Cold variant - A variant that will be selected if spawned (naturally or by player) in these biomes:
    -   Cold Ocean
    -   Deep Cold Ocean
    -   Deep Dark
    -   Deep Frozen Ocean
    -   End Barrens
    -   End Highlands
    -   End Midlands
    -   Frozen Ocean
    -   Frozen Peaks
    -   Frozen River
    -   Grove
    -   Ice Spikes
    -   Jagged Peaks
    -   Old Growth Pine Taiga
    -   Old Growth Spruce Taiga
    -   Small End Islands
    -   Snowy Beach
    -   Snowy Plains
    -   Snowy Slopes
    -   Snowy Taiga
    -   Stony Peaks
    -   Taiga
    -   The End
    -   Windswept Forest
    -   Windswept Gravelly Hills
    -   Windswept Hills

![A cold chicken can be seen in the forefront, with a creeper peaking out from behind a tree.](https://launchercontent.mojang.com/v2/images/1.21.5coldchickencreeper.jpg)

-   Warm variant - A variant that will be selected if spawned (naturally or by player) in these biomes:
    -   Badlands
    -   Bamboo Jungle
    -   Basalt Deltas
    -   Crimson Forest
    -   Deep Lukewarm Ocean
    -   Desert
    -   Eroded Badlands
    -   Jungle
    -   Lukewarm Ocean
    -   Mangrove Swamp
    -   Nether Wastes
    -   Savanna
    -   Savanna Plateau
    -   Soul Sand Valley
    -   Sparse Jungle
    -   Warm Ocean
    -   Warped Forest
    -   Windswept Savanna
    -   Wooded Badlands

![A warm chicken in a desert village. A cat can be seen sitting on top of a villager's house.](https://launchercontent.mojang.com/v2/images/1.21.5desertvillagechicken.jpg)

-   When bred by a player, a baby variant will not be chosen by the current biome, but instead randomly selected from one of the parents' variants
-   Two new Egg items have been added for the warm and cold Chicken variants
    -   Blue Egg - The Egg that is laid by and can hatch cold Chicken variants
    -   Brown Egg - The Egg that is laid by and can hatch warm Chicken variants

**Sheep Wool Color in Warm and Cold Biomes**

-   Sheep now spawn with wool color dependent on the biome in which they spawn:
    -   Temperate biomes: (these colors are unchanged from previous behavior)
        -   Common Sheep color is white
        -   Uncommon Sheep colors are black, gray, light gray and brown
        -   There is a rare chance for a pink Sheep to spawn
    -   Cold biomes:
        -   Common Sheep color is black
        -   Uncommon Sheep colors are gray, light gray, white and brown
        -   There is a rare chance for a pink Sheep to spawn
    -   Warm biomes:
        -   Common Sheep color is brown
        -   Uncommon Sheep colors are gray, light gray, white and black
        -   There is a rare chance for a pink Sheep to spawn

### Wolf Sounds Variants

![A wolf walking on top of a fallen oak tree.](https://launchercontent.mojang.com/v2/images/1.21.5fallentreewolf.jpg)

-   Added 6 new Wolf sound variants with unique ambient, hurt, death, growl, whine, and pant sounds
    -   The new sounds are part of variants that are called "Big", "Cute", "Puglin", "Angry", "Grumpy", and "Sad"
    -   The original Wolf sounds now are used for the variant called "Classic"
    -   Every Wolf will have a sound variant randomly assigned to it from these 7 variants
    -   The sound variant is not related to the texture variant

### Spawn Egg Visuals Overhaul

![Sunny and Noor are inspecting a collection of spawn eggs. A cartographer villager can also been seen peaking in through the window.](https://launchercontent.mojang.com/v2/images/1.21.5spawneggs.jpg)

-   Each Spawn Egg now has their own unique visual which captures the personality and character of the mob it spawns
-   Each egg visual varies in shape to reflect the in-world size of the mob it spawns
    -   For example, smaller mobs tend to have a smaller Spawn Egg

### Fallen Trees

![A fallen birch tree with a brown mushroom growing on top of it.](https://launchercontent.mojang.com/v2/images/1.21.5fallentree.jpg)

-   Fallen trees are a new decorative variant of trees
-   Fallen trees come in four different wood type variants:
    -   Oak
    -   Birch
    -   Jungle
    -   Spruce
-   Birch fallen trees come in a shorter and a longer version
-   Some fallen trees can be decorated with Mushrooms or Vines
-   Fallen trees can be found in all biomes where their standing tree variant grows, except the following:
    -   Bamboo Jungle
    -   Flower Forest (has fallen Birch trees but not fallen Oak trees)
    -   Grove
    -   Meadow
    -   River

### Firefly Bush

![In the moonlit swamp, firefly bushes can be seen emitting particles. Meanwhile, a frog seems to be leaping towards the moon.](https://launchercontent.mojang.com/v2/images/1.21.5frogfireflybush.jpg)

-   The Firefly Bush is found adjacent to water in Swamps, Mangrove Swamps, Badlands, and near Rivers
-   When it is dark, glowing firefly particles appear around the Firefly Bush
-   Using Bone Meal on a Firefly Bush grows a Firefly Bush in a random adjacent space if possible
-   The Firefly Bush emits a light level of 2
-   The Firefly Bush has a chance of playing ambient sounds when these conditions are met:
    -   it is night
    -   it is not blocked from above by any collidable block except leaves

### Leaf Litter

-   Leaf Litter is a new type of decorative block which can be found in the Forests, Dark Forests and Wooded Badlands
    -   Note: Leaf Litter is only spawned as part of world generation, and does not regenerate during gameplay
-   Leaf Litter can have different amounts of leaves in one block space
    -   Up to four Leaf Litter pieces can be placed in the same block space
    -   Placing a Leaf Litter into an existing Leaf Litter block increases the amount of leaves
-   Leaf Litter can be placed in four orientations
-   Leaf Litter can be placed on any block with a full top face
-   Leaf Litter can be created by smelting any type of Leaves block
-   Leaf Litter can be used as fuel for smelting
-   Leaf Litter can be used in the Composter
-   Leaf Litter has unique block sounds
-   Leaf Litter is tinted based on which biome it is in
-   Leaf Litter is replaceable when building

### Wildflowers

-   Wildflowers are a new type of flower which grow in Birch Forests, Old Growth Birch Forests and Meadows
-   Wildflowers can have different amounts of flowers in one block space
    -   Up to four Wildflowers can be placed in the same block space
    -   Placing a Wildflower into an existing Wildflowers block increases the amount of flowers
    -   Using Bone Meal on Wildflowers will produce more Wildflowers
-   Wildflowers can be placed in four orientations
-   Wildflowers can be crafted into Yellow Dye

### Bush

-   The Bush is a new type of decorative block that can be found in small patches in the following biomes:
    -   Birch Forest
    -   Forest
    -   Frozen River
    -   Old Growth Birch Forest
    -   Plains
    -   River
    -   Windswept Forest
    -   Windswept Gravelly Hills
    -   Windswept Hills
-   The Bush can be used in the Composter
-   Using Bone Meal on a Bush grows a Bush in a random adjacent space if possible
-   A Bush only drops when broken with Shears or a Silk Touch tool
-   The Bush is replaceable when building

### Short and Tall Dry Grass

-   Added two new types of grass: Short Dry Grass and Tall Dry Grass
-   Both are 1 block high, which means Tall Dry Grass differs from regular Tall Grass which is 2 blocks high
-   Both generate in the Desert and Badlands biomes
-   Both can be placed on types of Sand, Terracotta, Dirt blocks, and Farmland like the Dead Bush
-   Both can be bonemealed
    -   Using Bone Meal on Short Dry Grass grows it into a Tall Dry Grass
    -   Using Bone Meal on Tall Dry Grass grows a Short Dry Grass in a random adjacent space if possible
-   Both can be used in the Composter
-   Sheep can eat both to regrow their wool
-   Both can be used as fuel for smelting
-   Both are replaceable when building

### Cactus Flower

-   Cactus Flower is a new type of flower that has a chance of generating on Cactuses in Deserts and Badlands
-   Cactus Flower can be placed on Cactus blocks, Farmland, or any block which has center support at the top of the block
-   Cactus Flowers have a chance of growing on Cactus blocks instead of the Cactus growing taller
    -   If a Cactus is 1-2 blocks tall, the Cactus Flower has a 10% chance to grow
    -   If a Cactus is 3 blocks or taller the Cactus Flower has a 25% chance to grow
    -   Cactus Flowers will only grow if they have space on all four sides
-   Cactus Flowers can be used in the Composter
-   A Cactus Flower can be used to craft 1 Pink Dye

### Falling Leaf Particles

-   All Leaves blocks now have chance of spawning falling leaf particles
-   The following blocks are affected by this change:
    -   Acacia Leaves
    -   Azalea Leaves
    -   Birch Leaves
    -   Dark Oak Leaves
    -   Flowering Azalea Leaves
    -   Jungle Leaves
    -   Mangrove Leaves
    -   Oak Leaves
    -   Spruce Leaves

### New Ambient Sounds for Desert and Badlands

-   Sand, Red Sand and Terracotta of any color have a chance of playing ambient sounds when surrounded by another block in the same group on at least 3 sides, at a distance of 8 blocks
    -   `block.sand.idle` can be played in any biome
    -   `block.sand.wind` only plays when in Desert or Badlands biomes
-   Dead Bush blocks have a chance of playing ambient sounds when placed on top of two blocks that are any color of Terracotta, Sand or Red Sand blocks in any biome

## Changes

-   The main menu panorama has been updated for the "Spring to Life" drop
-   Beacons and their beams now render beyond 16 chunks, up to the client render distance
    -   To keep it easily visible at large distances, the beam is rendered thicker the further away you are
    -   The beam now renders up to 2048 blocks high, up from 1024

![Three differently colored beacon beams are seen in the sky of a sunset scenery.](https://launchercontent.mojang.com/v2/images/1.21.5beacons.jpg)

-   Lodestones have a new crafting recipe and can now be found in Ruined Portals
-   The trades of the Cartographer and Wandering Trader have been updated
-   Bundles can now be found in some of the Chests in Villages
-   Updates to Camel, Chicken, Cow, Pig, and Sheep spawning
-   Zombified Piglins now need to be killed by a Player to drop the Player-specific loot such as experience
    -   This makes them consistent with all other mobs in the game
-   Changes to world generation of the Pale Garden and Meadow biomes
-   Chunks loaded by a portal will now be re-loaded again automatically when the world is reopened
-   Improved how simulation distance affects block ticks
-   Tweaks to the Creaking and Creaking Heart
-   Textures and models for temperate Cow, Mooshrooms and Sheep have been updated
-   Minor tweaks to existing Blocks, Items and Entities
-   Various changes and tweaks to sounds
-   Minor improvements to world uploads in Realms
-   Reverted fix [MC-152728](https://bugs.mojang.com/browse/MC-152728) - "_The player continues sprinting when performing actions that slow them down_"
    
    > **Developer's Note**: _After consideration, we have decided to revert this fix. While we do want to revisit these mechanics in the future, it's clear that these recent fixes alone didn't quite hit the mark and caused too many negative side effects for parkour, speedbridging, and movement in general_
    
-   If the game detects that the last startup did not complete normally, the fullscreen option will now be reset
-   Removed Herobrine

### Lodestone Changes

-   The Lodestone is now crafted from 1 Iron Ingot surrounded by 8 Chiseled Stone Bricks
-   Lodestones can now be found as loot at Ruined Portals in the Overworld or Nether
-   Advancement "Country Lode, Take me Home" has been moved from the "Nether" category to the "Adventure" category

### Cartographer and Wandering Trader Trade Rebalance

**Cartographer Trades**

-   Cartographers now sell 7 new maps each pointing to a different village or other structures in a different biome
-   Cartographers from different village types will sell a different range of maps and colored banners
-   Some prices and quantities have also been adjusted

**Wandering Trader Trades**

-   The Wandering Trader now has better prices, more trades and a larger amount of stock for many items
-   They will also now buy basic supplies from players, so it is possible to get some Emeralds by helping them prepare for their next journey - even if you don't feel like buying anything
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

### Mob Spawning Changes

-   Camels now spawn in Deserts
-   Chickens, Cows, Pigs, and Sheep can now spawn in Badlands

### World Generation Changes

-   The Pale Garden biome now occupies more space that was previously taken by Dark Forest
-   Woodland Mansions can now generate in the Pale Garden biome
-   Short Grass now generates slightly sparser in Meadows

### Simulation Distance

-   Any block in simulation distance of a player, or loaded by another source of chunk loading such as Ender Pearls, may now receive random ticks instead of 8 chunks just around players
    -   For example: if a chunk is loaded by an Ender Pearl or is in the spawn chunks, crops are able to grow, Ice can melt, Snow can fall, and a Cauldron can be filled by rain
    -   Mob spawning, Lava spreading fire, and Lightning strikes still occur in the previous radius of 8 chunks around players
-   Fire will no longer burn or spread if no player is within 8 chunks

### Creaking and Creaking Heart

-   Creakings can now be named using Name Tags
    -   Named Creakings will persist through the day
        -   However, they will still be torn down if stuck with a player or if too far from their Heart
    -   Named Creakings are still resistant to all damage, and can communicate with their Hearts via particles
-   Creaking Hearts correctly placed between Logs have a new dormant texture during the day
    -   Dormant Creaking Hearts cannot spawn new Creakings or Resin
-   The transition between the awake and dormant states for Creaking Hearts, as well as the transition of Eye Blossoms is now based on the fixed day time
    -   All these behaviors are no longer affected by weather or dimension brightness

### Mob Texture and Model Changes

-   The look of the temperate Cow has been slightly updated to have an extruded snout
-   The look of both Mooshroom variants have been slightly updated to have an extruded snout
-   Sheep's wool undercoat is now also colored when dyed
-   The Sheep wool texture has been tweaked to remove the stark line at the back

### Minor Tweaks to Blocks, Items and Entities

-   Sheep can now eat Fern blocks
-   Landing on Powdered Snow with Leather Boots equipped after falling further than 2.5 blocks will now make entities fall through the snow
    -   Jumping or falling less than 2.5 blocks allows the entity to land on top of the snow like before
-   Saddles equipped onto Pigs or Striders will now maintain properties such as custom name when dropped
-   Bubble columns produce less particles and sounds when entities are unaffected by them are inside them
-   Pale Oak Leaves and Pale Oak Saplings have an updated map color
-   Improved tooltips for the Crossbow and all container items

**Item Tooltips**

-   Crossbows will now show all charged projectiles in their tooltip instead of just the first
    -   All charged projectiles will also add their entire tooltip as a subsection, instead of only Fireworks
-   All container items with stored contents, such as a Chest picked with Ctrl+Pick Block, will now list the first 4 items in their tooltip just like Shulker Boxes

### Sound Changes

-   The volume of the narrator is now affected by the game's configured volume in the "Voice" category
-   Added new break, place, step, fall and hit sounds for Iron Blocks, Iron Bars, Iron Trapdoors, Iron Doors and Heavy Weighted Pressure Plates
-   The breaking sound for the "grass" sound type has been lowered
-   Blocks that are broken by a Piston now play their breaking sound
-   Ambient block sounds in Desert, Badlands and Pale Garden which are only used for ambience have been moved from the "Blocks" to the 'Ambient/Environment' category

### Realms World Uploads

-   Uploading a world to Realms will now enable Command Blocks by default
-   It is now possible to upload Hardcore singleplayer worlds to Realms

## Technical Changes

-   The Data Pack version is now 71
-   The Resource Pack version is now 55
-   A new entry point is present in the server jar: `net.minecraft.gametest.Main`
    -   Automatically starts a server and runs all available game tests
-   A new command line argument is available for the client: `--renderDebugLabels`
    -   Adds debug labels to relevant OpenGL objects, making debugging rendering easier for developers
-   Minor changes to chat network protocol

### Game Test Entry Point

This new entry point automatically starts a server, runs all available game test, and then exits.

Options:

-   `--help` - Shows usage information
-   `--packs <path>` - Set a folder of data packs to include in the world
    -   Any zip file or folder containing a `pack.mcmeta` file is included
-   `--report <path>` - Exports results in a JUnit-like XML report at the given path
-   `--tests <selection>` - Specify which tests to run with a selection - a wildcard expression matching namespace test instance IDs
    -   If omitted, or used with an empty ID, all tests will be run
-   `--universe <path>` - The path in which the test server world will be created
    -   Any existing folder will be replaced
    -   Default: `gametestserver`
-   `--verify <boolean>` - Enables test verification
    -   Runs the tests specified with `test` or `testNamespace` 100 times for each 90-degree rotation step
    -   Default: `false`

Example usage: `java -DbundlerMainClass="net.minecraft.gametest.Main" -jar server.jar --packs mytestpacks`

### Network Protocol

-   The clientbound `player_chat` packet now contains an index increasing for every message sent to the client
    -   The index starts at 0 when logging in (or is reset by configuration phase and the `login` packet)
    -   For every message, the server should increment this value by 1
    -   If this value updates in an unexpected way, the client will disconnect
    -   As the protocol requires that every chat packet reaches the client in produced order, the goal is to enable faster detection of missed/reordered chat messages for custom server developers
-   The serverbound `chat` and `chat_command_signed` packets now contain a checksum byte along with the "last seen" update
    -   This is a simple hash of the "last seen" signatures which should be reconstructed by the server, allowing quicker detection of desynchronized state
    -   This can be passed as `0` to disable the check, for compatibility with protocol translation

## Data Pack Versions 62 through 71

-   The Game Tests system is now accessible through data packs and for mods
-   Added new `allowFireTicksAwayFromPlayer` and `tntExplodes` Game Rules
-   All entities can now store custom data
-   Added a uniform way to define variant selection rules
-   Wolf Sound, Pig, Cat, Chicken, Cow, and Frog variants are now data-driven
-   Changes to commands
-   Structure Blocks in the "Load" mode have a new option: "Strict Placement"
    -   If set to `false`, the blocks in the placed structure will not trigger block updates, block entity side effects, or shape updates
-   The game's handling of NBT has been updated to allow "heterogeneous" lists with elements of different types
-   The object notation used in commands for NBT, text components and inline predicates (a.k.a. SNBT) has been extended
-   Updated data format of Text Components
-   Updated many data formats within entities and block entities
-   Added new item components, and updates to existing components
    -   The control of tooltip behavior has been reworked into a `tooltip_display` component
-   Entity variants are now set and queried with components
-   Updated Entity Predicates to support entity components
-   Updated Block Predicates to support block entity components
-   Updated `toggle_tooltips` loot function to support new `tooltip_display` component
-   The `potion` entity type has been split into `splash_potion` and `lingering_potion`
-   Added `saddle` equipment slot for entities, driven by the `equippable` component
    -   Only mobs that normally support saddles will support riding and rendering of the saddle
    -   Items in the `saddle` slot can apply attribute modifiers as with other equipment
-   Changes to `crafting_transmute`, `smithing_transform`, and `smithing_trim` recipe types
-   Trim pattern and trim material items are no longer specified in the trim registries, but instead in the recipes and items respectively
-   Added `fallen_tree` feature type and `attached_to_logs` tree decorator type
-   The `background` field in Advancement definitions no longer contains a `textures/` prefix and `.png` suffix
-   The `effects` field in Biome definitions has a new subfield, `dry_foliage_color`, that defines the color used for tinting blocks using dry foliage tinting (Leaf Litter)
-   Changes to tags
-   Added `firefly` and `tinted_leaves` particles

### Game Tests

![Kai is seen testing curious behaviors with the new test blocks.](https://launchercontent.mojang.com/v2/images/1.21.5qctest.jpg)

The Game Tests system is a new integrated system for testing aspects of the game. Each test is an asset defining some parameters for how the test gets executed, combined with a saved structure file containing a base setup.

Generally, the test framework expects to run tests in a separate superflat world.

**Test Instances**

![A game test is running, where a villagers is seen running through a maze to get to their bed.](https://launchercontent.mojang.com/v2/images/1.21.5villagertest.jpg)

Test instances are defined in the registry `test_instance`. They're small assets defining a test to run.

Fields:

-   `environment`: Namespaced ID of the test environment to run this test as part of
-   `structure`: The namespaced ID of the structure to use for the test
-   `max_ticks`: A positive integer representing the maximum number of ticks allowed to pass before the test is considered timed out
-   `setup_ticks`: Optional non-negative integer (default: `0`) representing a number of ticks to wait after placing the structure before starting the test
-   `required`: Optional boolean (default `true`) - whether the test is considered required to pass for the full test suite to pass
-   `rotation`: Optional rotation to apply to the test structure
    -   One of `none` (default), `clockwise_90`, `180` and `counterclockwise_90`
-   `manual_only`: Optional boolean (default `false`), set to `true` for tests that are not included as part of automated test runs
-   `sky_access`: Whether the test needs clear access to the sky
    -   By default (`false`), tests are enclosed in barrier blocks - if set to `true`, the top is left open
-   `max_attempts`: Number of attempts to run the test (default `1`)
-   `required_successes`: Number of attempts that must succeed for the test to be considered successful (default `1`)
-   `type`: The type of test - one of `block_based` and `function`

**Function Tests**

Function tests rely on built-in functions to run a test and indicate success or failure. They have one additional field:

-   `function`: The namespaced ID of the Test Function to run

See the "Using the Game Test Framework from Code" changelog section for more information.

**Block Based Tests**

Block based tests use Test Blocks in the test structure to run the test and indicate success or failure.

**Test Environments**

Test Environments are a way to group up tests and give them the right preconditions to run. A Test Environment is an asset in the `test_environment` registry. Each Test Environment definition has a `type` field that determines its setup:

-   `all_of` definitions apply the setup from several sub-definitions in the `definitions` field
-   `function` definitions use mcfunction files as setup and teardown
    -   `setup`: Optional namespaced ID of the mcfunction to use for setup, if any
    -   `teardown`: Optional namespaced ID of the mcfunction to use for teardown, if any
-   `game_rules`: definitions set any number of game rules
    -   `bool_rules`: A list of boolean game rules to set and the value to set
    -   `int_rules`: A list of integer game rules to set and the value to set
    -   Each rule is an object with two fields:
        -   `rule`: The exact name of the rule to set
        -   `value`: The value to set
    -   Game rules are reset to their default values after the test environment has completed
-   `weather` definitions sets the weather state
    -   `weather`: The weather to set - one of `clear`, `rain` and `thunder`
-   `time_of_day` definitions set a given time of day
    -   `time`: The time of day to set in number of ticks, as a non-negative integer

The game provides a single, empty Test Environment by default: `minecraft:default`.

**Test Blocks**

The Test Block is a block used for implementing a block-based tests. It has four modes:

-   `start`: Triggers a redstone pulse when the test starts
-   `log`: Logs a message to the log file when powered by redstone
-   `fail`: Fails the test when powered by redstone
-   `accept`: Completes the test when powered by redstone

Block-based tests are required to have at least one `start` block and one `accept` block in the structure.

**The `test` Command**

The `test` command is a new command used to create and run tests.

Syntax:

    test clearall [<radius>]
    test clearthat
    test clearthese
    
    test create <test> [<width>] [<height> <depth>]
    
    test locate <selector>
    
    test resetclosest
    test reseetthese
    test resetthat
    
    test pos [<variable>]
    
    test run <selector> [<numberOfTimes>] [<untilFailed>] [<rotationSteps>] [<testsPerRow>]
    test runclosest [<numberOfTimes>] [<untilFailed>]
    test runfailed [<numberOfTimes>] [<untilFailed>] [<rotationSteps>] [<testsPerRow>]
    test runmultiple <selector> [<amount>]
    test runthat [<numberOfTimes>] [<untilFailed>]
    test runthese [<numberOfTimes>] [<untilFailed>]
    
    test stop
    
    test verify <tests>
    

Parameters:

-   `radius`: The radius to clear tests within
-   `test`: The namespaced ID of a test
-   `selector`: A wildcard-enabled selector for test IDs
    -   Supports `*` and `?` for matching namespaced IDs
    -   If namespace is not supplied, defaults to `minecraft`
    -   Examples:
        -   `*:*` - matches all IDs
        -   `*` - matches everything in the `minecraft` namespace
        -   `custom:folder/*_test_?` - matches IDs in the `folder` folder of the `custom` namespace, with a prefix followed by `_test_` followed by a single valid character
-   `width`: The width of the test structure - if omitted, `5` is used
-   `height`: The height of the test structure - if omitted, the width is used
-   `depth`: The depth of the test structure - if omitted, the width is used
-   `variable`: The variable name to include in the copied code snippet
-   `numberOfTimes`: The number of times to repeat each test - if omitted, `1` is ued
-   `untilFailed`: Boolean (default `false`) noting that the test should be stopped as soon as one iteration fails
-   `rotationSteps`: Number of extra 90 degree steps to apply to the test - if omitted, `0` is used
-   `testsPerRow`: Number of tests to place per row in a grid layout - if omitted, `8` is used

**`test clear*`**

These subcommands clear the structures and blocks associated with the selected tests.

**`test create`**

This subcommand creates a test setup in the current location for the given test, preparing for a structure of the given size. This gives a starting point for creating the structure for the test.

**`test locate`**

Attempts to locate the given test. Note that only loaded chunks are searched.

**`test reset*`**

These subcommands reset the structures for the selected tests, removing any surrounding barriers and placing the structure in from scratch.

**`test pos`**

Shows the local coordinates to the block pointed at in the test. If the optional variable name is specified, this variable name is used in a code fragment obtained by clicking on the coordinates in the output message.

**`test run*`**

Runs one or more tests. If multiple tests are run at once, they are placed in a grid and run in parallel, although only up to a certain limit. Beyond that limit, tests are run in rounds where each round completes before any tests from the next round are started.

For each test, loads the given structure and runs the associated test. Each test location will have a beacon beam showcasing the test status.

-   Gray beacon = in progress
-   Red = fail (required test)
-   Orange = fail (optional test)
-   Green = success

If a test fails, the error is shown on a lectern book and an overlay.

Note that Game Tests are designed to run on standard superflat worlds. The area around each test is replaced with stone when it runs, and the running test is encased in barrier blocks.

**`test stop`**

This stops all running tests. Note that gameplay events triggered by tests may still remain.

**`test verify*`**

Verifies one or more tests by running multiple instances of the same test.

**Test Instance Blocks**

To run a test in a world, a Test Instance Block is used. This type of block represents the test as placed in the world and is used to interact with that test, to save the structure, reset or run the test.

Using the `test` command to run or create a test will also place a Test Instance Block to control that test.

**Using the Game Test Framework from Code**

The Game Test Framework can also be used from code in a more versatile manner than block-based tests. For this to work, you need to mod the game to add your test functions to the `test_function` registry (`Registries.TEST_FUNCTION`).

Hook into some startup method (pre-registry bootstrap) to add your loader - call `TestFunctionLoader.registerLoader()` with an implementation of `TestFunctionLoader`. Your implementation can then use the provided `register` consumer to register test functions with their namespaced IDs. This namespaced ID can then be referenced in a `function` type Test Instance.

A test function is a `Consumer<GameTestHelper>`, using that `GameTestHelper` instance to manipulate the world and make assertions about the state of the resulting world.

The helper can be used to summon mobs, set blocks, query for blocks and entities and assert the state of the test. Most `GameTestHelper` methods take test-local coordinates, which you can also find using `/test pos`.

Example code that might go along with a test structure with a locked hopper containing a Cod, pointed into a Furnace:

    public void furnaceSmeltsItem(final GameTestHelper helper) {
        helper.setBlock(0, 4, 0, Blocks.AIR);
        helper.succeedWhen(() -> helper.assertContainerContainsSingle(new BlockPos(0, 0, 0), Items.COOKED_COD));
    }
    

More complicated setups will often use `helper.startSequence()` to model sequences of events that must happen.

As opposed to block-based tests, function tests failing will often produce more helpful error messages including the location of whatever failed and what was expected at that location.

### Game Rules

**`allowFireTicksAwayFromPlayer`**

-   When `true`, fire and lava can spread fire outside the 8 chunk range of a player
-   Note: the fire and lava blocks must still be in simulation distance to spread
-   Default value: `false`

**`tntExplodes`**

-   When `false`, TNT will not explode and cannot be ignited
-   Default value: `true`

### Uniform Variant Selection

-   Variants that have spawn rules now use a uniform approach for selection
-   Selection process:
    -   Every variant has a field `spawn_conditions` that contains a list of entries
    -   Every entry has a condition and an integer priority
    -   Conditions for all variants for given entity type are evaluated for the position that entity is being spawned
    -   Entries with a priority lower than the maximum priority of remaining entries are removed
    -   The game randomly picks one entry out of the remaining ones
    -   If no conditions are remaining, the variant remains unchanged from default for that entity
-   Entry format:
    -   `priority` - integer
    -   `condition` - optional structure
        -   Fields:
            -   `type` - see below for values
            -   Additional fields are dependent on `type`
        -   If this field is not present, the condition is always true

**Spawn Conditions**

**`minecraft:biome`**

-   Checks if entity is spawning in specific biomes
-   Fields:
    -   `biomes` - single entry, list or a tag describing biomes

**`minecraft:moon_brightness`**

-   Checks if the current moon brightness is within a certain range
-   Fields:
    -   `range` - floating point range (a single number or an object like `{"min": 1, "max": 2}`)

**`minecraft:structures`**

-   Checks if the entity is spawning in specific structures
-   Fields:
    -   `structures` - single entry, list or a tag describing structures

### Data-driven Mob Variants

**Wolf Variants**

-   The fields `angry_texture`, `tame_texture` and `wild_texture` have been grouped in an `assets` field, and renamed to `angry`, `tame`, and `wild`
-   Added field `spawn_conditions` described in uniform variant selection above

**Pig Variants**

-   Pig variants can be data-driven by adding entries to `data/<namespace>/pig_variant/<id>.json`
-   This feature is experimental
-   Fields in file:
    -   `model` - one of: `normal`, `cold`
    -   `asset_id` - namespaced id for this variant asset, resolves to `assets/<namespace>/textures/<path>.png`
    -   `spawn_conditions` - field described in uniform variant selection above

**Cat Variants**

-   Cat variants can be data-driven by adding entries to `data/<namespace>/cat_variant/<id>.json`
-   This feature is experimental
-   Fields in file:
    -   `asset_id` - namespaced id for this variant asset, resolves to `assets/<namespace>/textures/<path>.png`
    -   `spawn_conditions` - field described in uniform variant selection above

**Frog Variants**

-   Frog variants can be data-driven by adding entries to `data/<namespace>/frog_variant/<id>.json`
-   This feature is experimental
-   Fields in file:
    -   `asset_id` - namespaced id for this variant asset, resolves to `assets/<namespace>/textures/<path>.png`
    -   `spawn_conditions` - field described in uniform variant selection above

**Cow Variants**

-   Cow variants can be data-driven by adding entries to `data/<namespace>/cow_variant/<id>.json`
-   This feature is experimental
-   Fields in file:
    -   `model` - one of: `normal`, `cold`, `warm`
    -   `asset_id` - namespaced id for this variant asset, resolves to `assets/<namespace>/textures/<path>.png`
    -   `spawn_conditions` - field described in uniform variant selection above

**Chicken Variants**

-   Chicken variants can be data-driven by adding entries to `data/<namespace>/chicken_variant/<id>.json`
-   This feature is experimental
-   Fields in file:
    -   `model` - one of: `normal`, `cold`
    -   `asset_id` - namespaced id for this variant asset, resolves to `assets/<namespace>/textures/<path>.png`
    -   `spawn_conditions` - field described in uniform variant selection above

**Wolf Sound Variants**

-   Wolf sound variants can be data-driven by adding entries to `data/<namespace>/wolf_sound_variant/<id>.json`
-   The file contains the following fields which correspond to sound events to use for the specific behaviour:
    -   `ambient_sound`
    -   `death_sound`
    -   `growl_sound`
    -   `hurt_sound`
    -   `pant_sound`
    -   `whine_sound`

### Commands

-   SNBT literals now accept heterogeneous lists
-   `/data` can now create and modify heterogeneous lists transparently
-   The `/setblock`, `/fill`, `/clone`, and `/place` commands now support a "strict" placement mode
-   `/setblock` and `/fill` have updated handling of block entities
-   The `horse.saddle` item slot has been renamed to `saddle`, and now supports any entity that can equip a Saddle
-   Text Components in commands such as `/tellraw` or `/title` are now specified with SNBT instead of JSON
-   Text Style in the `/scoreboard` command when specifying the `styled` number format is also now specified with SNBT instead of JSON
-   Text Component arguments in `/bossbar`, `/scoreboard` and `/team` commands are now resolved before use (in the context of entity the held in `@s`)

**Changes to `/setblock`, `/fill`, `/clone`, and `/place`**

-   The behavior of `setblock` and `fill` commands have changed in how they handle block entity data:
    -   If the block entity data is not specified, and the existing block has data, the block entity data will be preserved
    -   If the block entity data is specified, the block entity data will be set to that specified value
    -   To clear block entity data explicitly, you must now specify the block entity data as `{}`
    -   The operation is now successful if either the block state changed or the block entity data changed
-   `fill`, `clone`, `setblock` and `place template` accept a new option: `strict`
    -   If specified, the command will place blocks as-is without triggering block updates or shape updates
-   The `replace` option in the `fill` command is no longer terminal, and can be followed with additional options
-   New syntax for commands to use the new `strict` option, and more flexible use of `replace`:
    -   `fill <from> <to> <block> keep`
    -   `fill <from> <to> <block> [replace <filter>]? [strict|destroy|hollow|outline]?`
    -   `clone [from <sourceDimension>]? <begin> <end> [to <targetDimension>]? <destination> [strict]? [[replace|masked|filtered <filter>] [force|move|normal]?]?`
    -   `setblock <pos> <block> [destroy|keep|replace|strict]?`
    -   `place template <template> [<pos> [<rotation> [<mirror> [<integrity> [<seed> [strict]?]?]?]?]?]?`

### NBT Changes

-   Any interface with NBT data within the game (SNBT representation, `/data`) now supports heterogeneous lists, i.e. ones where elements are not of the same type
    -   Inserting or replacing into a list of a different type with `/data` will no longer give an error
    -   Inserting into an array type (e.g. `[I;1,2,3]`) is still type-restricted
    -   This means that the "wrapper" objects previously used to represent heterogeneous lists will no longer be observable by in-game means
-   `/data` can no longer traverse paths with an empty key (e.g. `/data get ... foo.''.bar`)
-   The NBT file format is unchanged:
    -   Heterogeneous lists are transformed before storage to bypass NBT constraints
    -   Example transform: `['a', {'b':3}]` is stored as `[{'':'a'},{'b':3}]`
    -   Existing external tools will still be able to read NBT files as before, but heterogeneous lists will be displayed in the transformed form
-   No data produced by the game has changed: objects such as Text Components were already producing heterogeneous lists in this form
-   Note: these wrapper objects may never be observed in-game, they are only relevant to developers working with the NBT file or network format directly

### SNBT Changes

-   The text format for describing object-like data in commands (like NBT, text components, predicates, etc.) has been extended
-   To simplify input of data and macro use, SNBT now also supports following operations:
    -   `bool(arg)` - converts argument to boolean
        -   if argument is a boolean value, returns value directly
        -   if argument is a number value, returns `true` if it is non-zero
    -   `uuid(str)` - converts string representation of UUID to integer array

**Number Format**

-   Either whole or fraction parts of a float number can be omitted
    -   Examples: `.1` and `1.` are valid now
-   Float numbers now use E notation
    -   Example: both `1.2e3` and `1.2E3`, `1.2E+3`, `12000e-1` are now a valid way to represent `1200.0`
-   Integer numbers can now be prefixed with `0x` to represent hexadecimal numbers and `0b` to represent binary numbers
    -   Example: `0xbad` (equal to `2989`), `0xCAFE` (equal to `51966`), `0b101` (equal to `5`)
-   Non-zero integer numbers now can't start with `0`
    -   Normally it would mean number is in base-8, but we are restricting it to avoid accidental use
-   Numbers can now contain `_` character between sequences of digits (but not at the start or the end of sequence)
    -   Example: `0b10_01`, `0xAB_CD`, `1_2.3_4__5f`, `1_2e3_4`
-   `NaN`, `Inf` or hexadecimal float representation are NOT supported
-   Implicit infinite float values (like `1e1000`) are rejected
-   Type suffixes have been extended:
    -   Integer type suffixes (`b` or `B` - byte, `s` or `S` - short, `i` or `I` - integer, `l` or `L` - long) can now be prefixed with `s` (signed) or `u` unsigned
    -   New suffixes only affect the valid range when parsing - values are still stored as signed
        -   Example: `240ub` is equal to `-16sb`, while `240sb` does not parse
    -   When a suffix is used without `u` or `s`, it defaults to signed for decimal numbers and unsigned for binary and hexadecimal numbers
    -   Note: since `b` is also a valid hexadecimal digit, byte sized hexadecimal values can only be written with a signed suffix, like `0x11ub` or `0x11sb`

**Strings**

-   Quoted strings can now use escape sequences beyond `;;';;`, `;;";;` and `;;\;;`:
    -   Unicode escapes:
        -   `;;x;;` - two digit escape, like `;;x;;42`
        -   `;;u;;` - four digit escape, like `;;u;;2603`
        -   `;;U;;` - eight digit escape, like `;;U;;00002603`
        -   `;;N;;{<name>}` - named Unicode character, like `;;N;;{Snowman}`
    -   Built-in escape sequences:
        -   `;;b;;` - backspace, Unicode `;;x;;08`
        -   `;;s;;` - space, Unicode `;;x;;20`
        -   `;;t;;` - horizontal tab, Unicode `;;x;;09`
        -   `;;n;;` - linefeed, Unicode `;;u;;0a`
        -   `;;f;;` - form feed, Unicode `;;u;;0c`
        -   `;;r;;` - carriage return, Unicode `;;u;;0d`
- 