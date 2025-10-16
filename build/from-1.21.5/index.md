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

#### Sheep Wool Color in Warm and Cold Biomes

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

#### Cartographer Trades

-   Cartographers now sell 7 new maps each pointing to a different village or other structures in a different biome
-   Cartographers from different village types will sell a different range of maps and colored banners
-   Some prices and quantities have also been adjusted

#### Wandering Trader Trades

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

#### Item Tooltips

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

#### Test Instances

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

##### Function Tests

Function tests rely on built-in functions to run a test and indicate success or failure. They have one additional field:

-   `function`: The namespaced ID of the Test Function to run

See the "Using the Game Test Framework from Code" changelog section for more information.

##### Block Based Tests

Block based tests use Test Blocks in the test structure to run the test and indicate success or failure.

#### Test Environments

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

#### Test Blocks

The Test Block is a block used for implementing a block-based tests. It has four modes:

-   `start`: Triggers a redstone pulse when the test starts
-   `log`: Logs a message to the log file when powered by redstone
-   `fail`: Fails the test when powered by redstone
-   `accept`: Completes the test when powered by redstone

Block-based tests are required to have at least one `start` block and one `accept` block in the structure.

#### The `test` Command

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

##### `test clear*`

These subcommands clear the structures and blocks associated with the selected tests.

##### `test create`

This subcommand creates a test setup in the current location for the given test, preparing for a structure of the given size. This gives a starting point for creating the structure for the test.

##### `test locate`

Attempts to locate the given test. Note that only loaded chunks are searched.

##### `test reset*`

These subcommands reset the structures for the selected tests, removing any surrounding barriers and placing the structure in from scratch.

##### `test pos`

Shows the local coordinates to the block pointed at in the test. If the optional variable name is specified, this variable name is used in a code fragment obtained by clicking on the coordinates in the output message.

##### `test run*`

Runs one or more tests. If multiple tests are run at once, they are placed in a grid and run in parallel, although only up to a certain limit. Beyond that limit, tests are run in rounds where each round completes before any tests from the next round are started.

For each test, loads the given structure and runs the associated test. Each test location will have a beacon beam showcasing the test status.

-   Gray beacon = in progress
-   Red = fail (required test)
-   Orange = fail (optional test)
-   Green = success

If a test fails, the error is shown on a lectern book and an overlay.

Note that Game Tests are designed to run on standard superflat worlds. The area around each test is replaced with stone when it runs, and the running test is encased in barrier blocks.

##### `test stop`

This stops all running tests. Note that gameplay events triggered by tests may still remain.

##### `test verify*`

Verifies one or more tests by running multiple instances of the same test.

#### Test Instance Blocks

To run a test in a world, a Test Instance Block is used. This type of block represents the test as placed in the world and is used to interact with that test, to save the structure, reset or run the test.

Using the `test` command to run or create a test will also place a Test Instance Block to control that test.

#### Using the Game Test Framework from Code

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

#### `allowFireTicksAwayFromPlayer`

-   When `true`, fire and lava can spread fire outside the 8 chunk range of a player
-   Note: the fire and lava blocks must still be in simulation distance to spread
-   Default value: `false`

#### `tntExplodes`

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

#### Spawn Conditions

##### `minecraft:biome`

-   Checks if entity is spawning in specific biomes
-   Fields:
    -   `biomes` - single entry, list or a tag describing biomes

##### `minecraft:moon_brightness`

-   Checks if the current moon brightness is within a certain range
-   Fields:
    -   `range` - floating point range (a single number or an object like `{"min": 1, "max": 2}`)

##### `minecraft:structures`

-   Checks if the entity is spawning in specific structures
-   Fields:
    -   `structures` - single entry, list or a tag describing structures

### Data-driven Mob Variants

#### Wolf Variants

-   The fields `angry_texture`, `tame_texture` and `wild_texture` have been grouped in an `assets` field, and renamed to `angry`, `tame`, and `wild`
-   Added field `spawn_conditions` described in uniform variant selection above

#### Pig Variants

-   Pig variants can be data-driven by adding entries to `data/<namespace>/pig_variant/<id>.json`
-   This feature is experimental
-   Fields in file:
    -   `model` - one of: `normal`, `cold`
    -   `asset_id` - namespaced id for this variant asset, resolves to `assets/<namespace>/textures/<path>.png`
    -   `spawn_conditions` - field described in uniform variant selection above

#### Cat Variants

-   Cat variants can be data-driven by adding entries to `data/<namespace>/cat_variant/<id>.json`
-   This feature is experimental
-   Fields in file:
    -   `asset_id` - namespaced id for this variant asset, resolves to `assets/<namespace>/textures/<path>.png`
    -   `spawn_conditions` - field described in uniform variant selection above

#### Frog Variants

-   Frog variants can be data-driven by adding entries to `data/<namespace>/frog_variant/<id>.json`
-   This feature is experimental
-   Fields in file:
    -   `asset_id` - namespaced id for this variant asset, resolves to `assets/<namespace>/textures/<path>.png`
    -   `spawn_conditions` - field described in uniform variant selection above

#### Cow Variants

-   Cow variants can be data-driven by adding entries to `data/<namespace>/cow_variant/<id>.json`
-   This feature is experimental
-   Fields in file:
    -   `model` - one of: `normal`, `cold`, `warm`
    -   `asset_id` - namespaced id for this variant asset, resolves to `assets/<namespace>/textures/<path>.png`
    -   `spawn_conditions` - field described in uniform variant selection above

#### Chicken Variants

-   Chicken variants can be data-driven by adding entries to `data/<namespace>/chicken_variant/<id>.json`
-   This feature is experimental
-   Fields in file:
    -   `model` - one of: `normal`, `cold`
    -   `asset_id` - namespaced id for this variant asset, resolves to `assets/<namespace>/textures/<path>.png`
    -   `spawn_conditions` - field described in uniform variant selection above

#### Wolf Sound Variants

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

#### Changes to `/setblock`, `/fill`, `/clone`, and `/place`

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

#### Number Format

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

#### Strings

-   Quoted strings can now use escape sequences beyond `\'`, `\"` and `\\`:
    -   Unicode escapes:
        -   `\x` - two digit escape, like `\x42`
        -   `\u` - four digit escape, like `\u2603`
        -   `\U` - eight digit escape, like `\U00002603`
        -   `\N{<name>}` - named Unicode character, like `\N{Snowman}`
    -   Built-in escape sequences:
        -   `\b` - backspace, Unicode `\x08`
        -   `\s` - space, Unicode `\x20`
        -   `\t` - horizontal tab, Unicode `\x09`
        -   `\n` - linefeed, Unicode `\u0a`
        -   `\f` - form feed, Unicode `\u0c`
        -   `\r` - carriage return, Unicode `\u0d`
-   Unquoted strings now can't start with `0-9`, `.`, `+`, `-` to avoid accidental collision with numbers

#### Number Arrays

-   Values in arrays (`[B;]`, `[I;]`, `[L;]`) without a suffix are now assumed to have suffix matching the type of the array
    
    -   Example: `[B;1,2]` is equivalent to `[B; 1b, 2b]`
-   Arrays can now also accept types smaller than the array type
    
    -   Example: `[I;1b,2s,3]` is valid and equivalent to `[I;1i,2i,3i]`

#### Lists

-   Lists now accept trailing commas
    -   Example: `[1,2,]` is valid and equivalent to `[1,2]`
    -   Only one trailing comma is allowed, and it must come after a valid element - both `[,]` and `[1,,]` are invalid

#### Compounds

-   Compounds (maps) now accept trailing commas
    -   Example: `{a:b,}`
    -   Only one trailing comma is allowed, and it must come after a valid key-value pair - both `{,}` and `{a:b,,}` are invalid

### Text Component Data Format

-   Text Components are no longer stored as JSON wrapped by a string
-   The format itself is the same as before, but inlined directly into the outer structure
    -   For example, the item component `minecraft:custom_name="{\"text\":\"Renamed item\"}"` will become `minecraft:custom_name={text:'Renamed item'}`
-   This includes Text Components passed as arguments to commands such as `/tellraw` or `/title`
    -   For example, `/tellraw @s {"text":"Hello world"}` may become `/tellraw @s {text:'Hello world'}`
-   Note: in the case where Text Components are embedded in NBT, no distinction exists between boolean and integer types
    -   To pass boolean arguments to translations, you must use the string form
-   For Text Components with the `nbt` type and `interpret` set to `true`, Text Components will be parsed from the given NBT directly rather than converting to a string and parsing as JSON
-   The format of hover and click events has been updated

#### Hover Events

-   The `hoverEvent` field has been renamed to `hover_event`
-   The legacy `value` field (which was parsed from a rendered text component) is no longer supported
-   For the `show_text` action:
    -   The `contents` field has been renamed to `value`
    -   e.g. `{action:'show_text',contents:'Hello world'}` becomes `{action:'show_text',value:'Hello world'}`
-   For the `show_item` action:
    -   The `contents` field has been inlined
    -   e.g. `{action:'show_item',contents:{id:'minecraft:stick',count:2}}` becomes `{action:'show_item',id:'minecraft:stick',count:2}`
    -   If contents was specified only as an item id, it is replaced with the full format and inlined
    -   e.g. `{action:'show_item',contents:'minecraft:stick'}` becomes `{action:'show_item',id:'minecraft:stick'}`
-   For the `show_entity` action:
    -   The `contents` field has been inlined
    -   The `id` field has been renamed to `uuid`
    -   The `type` field has been renamed to `id`
    -   e.g. `{action:'show_entity',contents:{id:[I;0,0,0,0],type:'minecraft:pig'}}` becomes `{action:'show_entity',uuid:[I;0,0,0,0],id:'minecraft:pig'}`

#### Click Events

-   The `clickEvent` field has been renamed to `click_event`
-   For the `open_url` action:
    -   The `value` field has been renamed to `url`
    -   The click event will no longer parse if not a valid URI with either `https://` or `http://` schemes, instead of simply not working
    -   e.g. `{action:'open_url',value:'https://minecraft.net'}` becomes `{action:'open_url',url:'https://minecraft.net'}`
-   For the `run_command` action:
    -   The `value` field has been renamed to `command`
    -   The click event will no longer parse if the command contains disallowed characters, instead of simply not working
    -   It is no longer required that the specified `command` field has a `/` prefix
    -   e.g. `{action:'run_command',value:'/tp @e @s'}` becomes `{action:'run_command',command:'/tp @e @s'}`
-   For the `suggest_command` action:
    -   The `value` field has been renamed to `command`
    -   The click event will no longer parse if the command contains disallowed characters, instead of simply not working
    -   e.g. `{action:'suggest_command',value:'/help'}` becomes `{action:'suggest_command',command:'/help'}`
-   For the `change_page` action:
    -   The `value` field has been renamed to `page`
    -   The `page` value now requires a positive integer instead of a string
    -   e.g. `{action:'change_page',value:'1'}` becomes `{action:'change_page',page:1}`
-   The `copy_to_clipboard` format is unchanged

### Entity Data

-   Custom data (previously present only on Marker) is now available on all entities
    -   It's exposed as a `minecraft:custom_data` component, so it can be set by spawning items and matched by predicates
    -   The component is currently stored in a field called `data`, which will be changed in the future when more proper storage for entity components is introduced
    -   It's stored only if it's non-empty
-   Updated and unified formats for storing equipment-related data on entities
-   The `Owner` field of tamed animals is no longer restricted to referencing Players
-   The `Health` and `Air` fields now default to their respective maximum value if not specified
-   The `Tags` and `FallFlying` fields will no longer be preserved if removed
-   The `FallDistance` field has been changed from float to double and is now called `fall_distance`
-   The `SleepingX`, `SleepingY`, and `SleepingZ` fields have been collected into a single `sleeping_pos` field
-   `Pos`, `Motion`, and `Rotation` values without the correct number of components (3, 3, and 2 respectively) will now be fully discarded, instead of only selecting the specified components
    -   e.g. `sleeping_pos: [I;1,2,3]`
-   Block States in the entity data of Arrows, Minecarts, Block Displays, Endermen, Falling Blocks, Primed TNT, or Piston Moving Blocks are no longer allowed to be specified as an empty object
-   Many tweaks to entity data formats of specific entities

#### Equipment Data

-   The `ArmorItems`, `HandItems`, and `body_armor_item` fields have been merged into an `equipment` field
    -   Format: map between equipment slot type and item stack
        -   Valid equipment slots: `head`, `chest`, `legs`, `feet`, `mainhand`, `offhand`, `body`, `saddle`
    -   If not specified or removed, the entity will have no equipment
    -   e.g. `equipment:{chest:{id:'minecraft:diamond_chestplate'}}`
    -   This affects all mobs and Armor Stands
    -   The armor and off-hand equipment of Players is now also stored in the `equipment` field (although items written into the Inventory using armor and off-hand slot numbers still work)
-   The data format of saddles has been unified between mobs such as Horses and Pigs, becoming a new kind of equipment slot (and stored in the `equipment.saddle` field)
    -   This is a pure rename from the previous `SaddleItem` in Horse-like mobs
    -   This also replaces the boolean `Saddle` flag from Pigs and Striders
    -   The Saddle dropping on death is now affected by the `drop_chances` field, as with other equipment slots
-   The `ArmorDropChances`, `HandDropChances`, and `body_armor_drop_chance` fields have been merged into a `drop_chances` field
    -   Format: map between equipment slot type and chance value
    -   If not specified or removed, chances will be assumed as default (`0.085f`)
    -   e.g. `drop_chances:{chest:0.1,feet:1.0}`
-   Drop chances with a default value will no longer be stored, and the `drop_chances` field is removed entirely if all defaults

#### `allay`

-   Removed redundant `CanDuplicate` field (controlled by `DuplicationCooldown`)

#### `area_effect_cloud`

-   Area Effect Clouds have a new field: `potion_duration_scale` (float)
    -   If not specified, defaults to `1.0`
    -   The duration of the potion effect applied is scaled by this factor
    -   Area Effect Clouds created by Lingering Potions will have a scale of `0.25`
-   The `Duration` field now defaults to `-1` if not specified
-   If the `Duration` field is `-1`, the Area Effect Cloud will never run out
-   This means that an Area Effect Cloud summoned with no duration specified will no longer immediately disappear

#### `cat`

-   The `CollarColor` field now defaults to `14` (red) if not specified

#### `creeper`

-   The `Fuse` field now defaults to `30` if not specified
-   The `ExplosionRadius` field now defaults to `3` if not specified

#### `dolphin`

-   Removed `TreasurePosX`, `TreasurePosY`, `TreasurePosZ` fields
-   The `Moistness` field now defaults to `2400` if not specified

#### `ender_dragon`

-   The `DragonDeathTime` field now defaults to `0` if not specified

#### `falling_block`

-   The `BlockState` field can now be `air` (will despawn immediately) - if otherwise not specified or invalid, defaults to `sand`
-   The `HurtEntities` field now defaults to `false` if not specified (or `true` if `BlockState` is `anvil`)
-   The `FallHurtAmount` field now defaults to `0` if not specified
-   The `FallHurtMax` field now defaults to `40` if not specified
-   The `DropItem` field now defaults to `true` if not specified
-   The `TileEntityData` field will no longer be preserved if removed

#### `firework_rocket`

-   The `ShotAtAngle` field now defaults to `false` if not specified

#### `fox`

-   The `Trusted` field now defaults to empty if not specified (and will no longer be merged with the previous state if modified by `/data`)

#### `ghast`

-   The `ExplosionPower` field now defaults to `1` if not specified

#### `goat`

-   The `HasLeftHorn` and `HasRightHorn` fields now default to `true` if not specified

#### `interaction`

-   The `width` and `height` fields now default to `1` if not specified

#### `item`

-   The `Health` field now defaults to `5` if not specified
-   The `PickupDelay` field now defaults to `0` if not specified
-   The `Age` field now defaults to `0` if not specified
-   The `Owner` and `Thrower` fields will no longer be preserved when removed

#### `item_frame` and `glow_item_frame`

-   The `TileX`, `TileY`, and `TileZ` fields have been collected into a single `block_pos` field
-   The `ItemDropChance` field now defaults to `1.0` if not specified

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

-   The `fuse` field now defaults to `80` if not specified
-   The `block_state` field now defaults to `tnt` if not specified
-   The `explosion_power` field now defaults to `4` if not specified

#### `shulker`

-   The `Color` field now defaults to `16` (no color) if not specified

#### `shulker_bullet`

-   The `Dir` and `Target` fields will no longer be preserved when removed

#### `skeleton`

-   The `StrayConversionTime` field will no longer be preserved when removed

#### `spectral_arrow`

-   The `Duration` field now defaults to `200` if not specified

#### `snow_golem`

-   The `Pumpkin` field now defaults to `true` if not specified

#### `tnt_minecart`

-   The `fuse` field now defaults to `80` if not specified
-   The `explosion_power` field now defaults to `4` if not specified
-   The `explosion_speed_factor` field now defaults to `1` if not specified

#### `turtle`

-   The `HomePosX`, `HomePosY`, and `HomePosZ` fields have been collected into a single `home_pos` field
-   Removed `TravelPosX`, `TravelPosY`, and `TravelPosZ` fields
-   The `HasEgg` field has been renamed to `has_egg`

#### `trader_llama`

-   The `DespawnDelay` field now defaults to `47999`

#### `vex`

-   The `LifeTicks` field has been renamed to `life_ticks`
-   The `BoundX`, `BoundY`, and `BoundZ` fields have been collected into a single `bound_pos` field

#### `villager`

-   The `FoodLevel` and `Xp` fields now default to `0` if not specified
-   The `Gossips` and `ConversionTime` fields will no longer be preserved when removed

#### `wandering_trader`

-   The `DespawnDelay` field now defaults to `0` if not specified
-   The `wander_target` field will no longer be preserved when removed

#### `wolf`

-   The `CollarColor` field now defaults to `14` (red) if not specified

#### `zombie`

-   The `DrownedConversionTime` field will no longer be preserved when removed

#### `zombie_villager`

-   The `Xp` field now defaults to `0` if not specified
-   The `Gossips` and `ConversionTime` fields will no longer be preserved when removed

#### `evoker_fangs`, `area_effect_cloud`, and all projectiles

-   The `Owner` field will no longer be preserved when removed

#### `painting` and `leash_knot`

-   The `TileX`, `TileY`, and `TileZ` fields have been collected into a single `block_pos` field

#### `arrow`, `spectral_arrow`, `trident`

-   The `inBlockState` and `SoundEvent` fields will no longer be preserved when removed
-   The `damage` field now defaults to `2` if not specified

#### `dragon_fireball`, `wind_charge`, `breeze_wind_charge`, `wither_skull`, `small_fireball`, and `large_fireball`

-   The `acceleration_power` field now defaults to `0.1` if not specified

#### `small_fireball` and `large_fireball`

-   The `ExplosionPower` field now defaults to `1` if not specified

#### `minecart`, `*_minecart`

-   The `CustomDisplayTile` field has been removed
-   `DisplayState` will now always override the default displayed block state if specified
-   `DisplayOffset` may now be specified to override the default offset even without a custom display block state set

#### `block_display`, `item_display`, and `text_display`

-   The `interpolation_duration`, `teleport_duration`, and `start_interpolation` fields now default to `0` if not specified
-   The `view_range` field now defaults to `1` if not specified
-   The `shadow_radius` field now defaults to `0` if not specified
-   The `shadow_strength` field now defaults to `1` if not specified
-   The `width` and `height` fields now default to `0` if not specified
-   The `glow_color_override` field will no longer be preserved when removed

#### `witch`, `ravager`, `pillager`, `illusioner`, `evoker`, and `vindicator`

-   The `patrol_target` field will no longer be preserved when removed

### Block Entity Data

-   The `CustomName` field will no longer be preserved when removed
-   The `LootTable` field will no longer be preserved when removed

#### `campfire`

-   The `CookingTimes` and `CookingTotalTimes` fields will no longer be preserved when removed

#### `chiseled_bookshelf`

-   The `last_interacted_slot` field now defaults to `-1` if not specified

#### `end_gateway`

-   The `exit_portal` field will no longer be preserved when removed

#### `furnace`, `smoker`, `blast_furnace`

-   The `RecipesUsed` field will no longer be preserved when removed

#### `hopper`

-   The `TransferCooldown` field now default to `-1` if not specified

#### `jigsaw`

-   The `name`, `target`, and `pool` fields now default to `minecraft:empty` if not specified
-   The `final_state` field now defaults to `minecraft:air` if not specified

#### `sculk_shrieker`

-   The `warning_level` field now defaults to `0` if not specified

#### `skull`

-   The `note_block_sound` field will no longer be preserved when removed

#### `structure_block`

-   The `ignoreEntities` and `showboundingbox` fields now default to `true` if not specified
-   The `posY` field now defaults to `1` if not specified

### Data Components

#### New `weapon` Item Component

-   When present, the "Item Used" statistic will be incremented for each attack with the item
-   The specified amount of damage will be subtracted from the item's durability with each attack
-   Format: object with fields:
    -   `item_damage_per_attack` - non-negative integer (default: `1`)
        -   The amount of damage to subtract from the weapon item's durability for each attack performed
    -   `disable_blocking_for_seconds` - non-negative float (default: `0`)
        -   If non-zero, will disable a blocking Shield on successful attack for the specified amount of seconds
    -   e.g. `weapon={item_damage_per_attack:2}`

#### New `blocks_attacks` Item Component

-   When present, this item can be used like a Shield to block attacks to the holding player
-   Format: object with fields:
    -   `block_delay_seconds` - non-negative float (default: `0`)
        -   The number of seconds that right-click must be held before successfully blocking attacks
    -   `disable_cooldown_scale` - non-negative float (default: `1`)
        -   Multiplier applied to the number of seconds that the item will be on cooldown when attacked by a disabling attack (`disable_blocking_for_seconds` on the `weapon` component)
        -   If 0, this item can never be disabled by attacks
    -   `damage_reductions` - list of objects with fields (optional)
        -   Controls how much damage should be blocked in a given attack
        -   If not specified, all damage is blocked
        -   Each entry in the list contributes an amount of damage to be blocked, optionally filtered by damage type
        -   Each entry adds to blocked damage, determined by `clamp(base + factor * dealt_damage, 0, dealt_damage)`
        -   The final damage applied in the attack to the entity is determined by `dealt_damage - clamp(blocked_damage, 0, dealt_damage)`
        -   Entry format:
            -   `horizontal_blocking_angle` - angle in degrees as a positive float (default: `90`)
                -   The maximum angle between the user's facing and the incoming attack for the block to be effective
                -   If the damage has no position, the compared angle will be assumed to be the maximum `180`
            -   `type` - damage type id, list of damage type ids, or hash-prefixed damage type tag (optional)
                -   This entry will only contribute to the blocked damage if the dealt damage type matches this field
                -   If not specified, any damage type will be accepted
            -   `base` - float
                -   Constant amount of damage to be blocked
            -   `factor` - float
                -   Fraction of the dealt damage that should be blocked
    -   `item_damage` - object with fields (optional)
        -   Controls how much damage should be applied to the item from a given attack
        -   If not specified, a point of durability is removed for every point of damage blocked
        -   The final damage applied to the item is determined by: `floor(base + factor * damage_blocked)`
        -   The final value may be negative, causing the item to be repaired
        -   Format:
            -   `threshold` - non-negative float
                -   The minimum amount of damage blocked in the attack before item damage is applied to the item
            -   `base` - float
                -   Constant amount of damage applied to the item, if `threshold` is passed
            -   `factor` - float
                -   Fraction of the blocked damage that should be applied to the item, if `threshold` is passed
    -   `bypassed_by` - hash-prefixed damage type tag (optional)
        -   If specified, blocking is bypassed by these damage types
    -   `block_sound` - sound event (optional)
        -   If specified, this sound will be played when an attack is successfully blocked
    -   `disabled_sound` - sound event (optional)
        -   If specified, this sound will be played when the item goes on its disabled cooldown due to an attack

#### New `potion_duration_scale` Item Component

-   When present, for items that have the `potion_contents` component, the duration of the applied effects will be scaled by this factor
-   This also applies to `custom_effects` in the `potion_contents` component, unlike the previous hardcoded scaling factor
-   If not specified, defaults to `1.0`
-   Format: non-negative float
    -   e.g. `potion_duration_scale=0.25`

#### New `break_sound` Item Component

-   When present, this sound will be played when the item runs out of durability and breaks
-   If not present, no sound will be played on break
-   This component is present by default on every item type
-   Format: sound event
    -   e.g. `break_sound='item.wolf_armor.break'`

#### New `provides_banner_patterns` Item Component

-   When present, this item can be placed in the pattern slot of a Loom
-   Format: hash-prefixed banner pattern tag
    -   e.g. `provides_banner_patterns='#minecraft:pattern_item/globe'`

#### New `provides_trim_material` Item Component

-   When present, this item will provide the specified trim material when used in a trimming recipe
-   Note that to be used in the built-in smithing recipes, the item must also be in the `#trim_materials` tag
-   As such, the trim material registry definition no longer specifies an item
-   Format: trim material id
    -   e.g. `provides_trim_material='minecraft:iron'`

#### `tool` Item Component

-   Added new optional field: `can_destroy_blocks_in_creative` (boolean)
    -   If `false`, players cannot break blocks while holding this tool in Creative Mode
    -   If not specified, defaults to `true`

#### `equippable` Item Component

-   Can now apply to `saddle` slot
-   Any mob can now have equipment added in the `body` slot as long as the component allows it (`allowed_entities`)
-   Added new optional field: `equip_on_interact` (boolean)
    -   If `true`, players can equip this item onto a target mob by right-clicking it (as long as this item can be equipped on the target at all)
    -   The item will not be equipped if the target already has an item in the relevant slot
    -   If not specified, defaults to `false`

#### Updated Tooltip Components

-   The way in which tooltips are controlled by components has been reworked
-   Individual `show_in_tooltip` fields, as well as the `hide_additional_tooltip` and `hide_tooltip` components have been replaced by a general `tooltip_display` component
-   Filled Maps without any `map_id` component no longer show an "Unknown Map" tooltip (invalid IDs will still produce this tooltip)

#### New `tooltip_display` Item Component

-   This component allows the tooltips provided specifically by any given item component to be suppressed
-   This replaces the previous `show_in_tooltip` fields, `hide_additional_tooltip` and `hide_tooltip` components
-   Format: object with fields:
    -   `hide_tooltip` - boolean (default: `false`)
        -   If true, the item will have no tooltip when hovered
    -   `hidden_components` - list of item component ids (default: `[]`)
        -   The tooltips provided by any component in this list will be hidden
        -   If that component provides no tooltip, it will have no effect

##### Removed `hide_additional_tooltip` Item Component

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

##### Removed `hide_tooltip` Item Component

-   Replaced by use of the `tooltip_display` component and `hide_tooltip` field

##### `attribute_modifiers` Item Component

-   Removed `show_in_tooltip` field, replaced by `tooltip_display` component
-   This component now always uses its simplified form, with the `modifiers` field inlined to top-level
    -   e.g. `attribute_modifiers={modifiers:[...]}` -> `attributes_modifiers=[...]`

##### `dyed_color` Item Component

-   Removed `show_in_tooltip` field, replaced by `tooltip_display` component
-   This component now always uses its simplified form, with the `rgb` field inlined to top-level
    -   e.g. `dyed_color={rgb:12345}` -> `dyed_color=12345`
-   The specified color now supports the RGB array format
    -   e.g. `dyed_color=[0.5, 1.0, 0.2]`

##### `can_place_on` and `can_break` Item Components

-   Removed `show_in_tooltip` field, replaced by `tooltip_display` component
-   The `predicates` field has been inlined to top-level, and supports either a single element or list
    -   e.g. `can_place_on={predicates:[{blocks:'stone'},{blocks:'dirt'}]}` -> `can_place_on=[{blocks:'stone'},{blocks:'dirt'}]`
    -   or: `can_place_on={predicates:[{blocks:'stone'}]}` -> `can_place_on={blocks:'stone'}`

##### `enchantments` and `stored_enchantments` Item Components

-   Removed `show_in_tooltip` field, replaced by `tooltip_display` component
-   These components now always use their simplified form, with the `levels` field inlined to top-level
    -   e.g. `enchantments={levels:{sharpness:2}}` -> `enchantments={sharpness:2}`

##### `jukebox_playable` Item Component

-   Removed `show_in_tooltip` field, replaced by `tooltip_display` component

##### `trim` Item Component

-   Removed `show_in_tooltip` field, replaced by `tooltip_display` component

##### `unbreakable` Item Component

-   Removed `show_in_tooltip` field, replaced by `tooltip_display` component

#### Entity Components

-   Entities now have a set of components for configuring variants and other aspects of appearance
-   If those components are present on spawning item, they will be applied to the new entity
    -   Spawning items include Spawn Eggs, Mob Buckets, Arrows, Lingering Potions, Armor Stands, Paintings, Item Frames, Minecarts, and Boats
-   Components are currently not restored when a Spawn Egg is picked from an existing entity
-   New components:
    -   `villager/variant` - one of `desert`, `jungle`, `plains`, `savanna`, `snow`, `swamp`, `taiga`
    -   `wolf/variant` - namespaced id from `wolf_variant` registry
    -   `wolf/sound_variant` - namespaced id from `wolf_sound_variant` registry
    -   `wolf/collar` - one of 16 dye colors
    -   `fox/variant` - one of `red`, `snow`
    -   `salmon/size` - one of `small`, `medium`, `large`
    -   `parrot/variant` - one of `red_blue`, `blue`, `green`, `yellow_blue`, `gray`
    -   `tropical_fish/pattern` - one of `kob`, `sunstreak`, `snooper`, `dasher`, `brinely`, `spotty`, `flopper`, `stripey`, `glitter`, `blockfish`, `betty`, `clayfish`
    -   `tropical_fish/base_color` - one of 16 dye colors
    -   `tropical_fish/pattern_color` - one of 16 dye colors
    -   `mooshroom/variant` - one of `red`, `brown`
    -   `rabbit/variant` - one of `brown`, `white`, `black`, `white_splotched`, `gold`, `salt`, `evil`
    -   `pig/variant` - namespaced id from `wolf_variant` registry
    -   `frog/variant` - namespaced id from `frog_variant` registry
    -   `horse/variant` - one of `white`, `creamy`, `chestnut`, `brown`, `black`, `gray`, `dark_brown`
    -   `painting/variant` - namespaced id from `painting_variant` registry
    -   `llama/variant` - one of `creamy`, `white`, `brown`, `gray`
    -   `axolotl/variant` - one of `lucy`, `wild`, `gold`, `cyan`, `blue`
    -   `cat/variant` - namespaced id from `cat_variant` registry
    -   `cat/collar` - one of 16 dye colors
    -   `sheep/color` - one of 16 dye colors
    -   `shulker/color` - one of 16 dye colors
-   Mob buckets and paintings available in the creative menu will now use the new variants instead of `minecraft:entity_data` component
-   Custom tooltips for Bucket of Tropical Fish and Painting items are now based on new components instead of `minecraft:bucket_entity_data` and `minecraft:entity_data`
-   Some existing components are now also transferred from the spawning item to the spawned entity:
    -   `minecraft:custom_name` - any entity
    -   `minecraft:potion_contents` - Lingering Potion to Area Effect Cloud
    -   `minecraft:potion_duration_scale` - Lingering Potion to Area Effect Cloud

### Predicates

#### Entity Predicates

-   New optional fields have been added to entity predicates: `components` and `predicates`
    -   Their functionality and format are identical to the fields `components` and `predicates` on item predicates, but they operate on entity components
        -   When present, `components` will match exact contents of entity components
        -   When present, `predicates` will match partial contents of entity components
    -   In general, any component that is transferred from a spawning item to an entity should be available to this predicate
-   The following entity sub-predicates have been removed and replaced with a combination of the `components` predicate and entity variant components:
    -   `minecraft:axolotl`
    -   `minecraft:cat`
    -   `minecraft:fox`
    -   `minecraft:frog`
    -   `minecraft:horse`
    -   `minecraft:llama`
    -   `minecraft:mooshroom`
    -   `minecraft:painting`
    -   `minecraft:parrot`
    -   `minecraft:pig`
    -   `minecraft:rabbit`
    -   `minecraft:salmon`
    -   `minecraft:tropical_fish`
    -   `minecraft:villager`
    -   `minecraft:wolf`
-   The `color` field has been removed from the `minecraft:sheep` sub-predicate
-   The `stepping_on` field will now only match the specified location if the entity is on the ground

#### Block Predicates

-   New optional fields have been added to block predicates: `components` and `predicates`
-   Their functionality and format are identical to the fields `components` and `predicates` on item predicates, but they operate on block entity components (when present)
    -   When present, `components` will match exact contents of block entity components
    -   When present, `predicates` will match partial contents of block entity components

### Loot Functions

#### `toggle_tooltips`

-   Now supports any component id in the `toggles` map
-   Any component specified will be toggled in the `tooltip_display` component

### Recipes

#### `crafting_transmute` Recipe Type

-   The `result` field now supports specifying a count and a components patch to apply to the result
-   The components patch is applied to the final transmuted item
-   The new format is an object with fields:
    -   `id` - item id
    -   `count` - positive integer (default: `1`)
    -   `components` - a component patch object (default: empty)
    -   e.g. `"result": {"id": "minecraft:stick", "count": 3, "components": {"!minecraft:damage": {}, "minecraft:enchantment_glint_override": {}}}`
-   The field can still be defined as before as an inline item id (e.g. `"result": "minecraft:stick"`)

#### `smithing_transform` Recipe Type

-   The `base` ingredient field is no longer optional
    -   Previously, if no base ingredient was given, the recipe would parse but never be usable

#### `smithing_trim` Recipe Type

-   The `base`, `template`, and `addition` ingredient fields are no longer optional
    -   Previously, if these ingredients were not given, the recipe would parse but never be usable
-   Added new `pattern` field, controlling which trim pattern will be applied in the recipe
    -   As such, the trim pattern registry definition no longer specifies the item
    -   Format: trim pattern id
    -   e.g. `"pattern": "minecraft:bolt"`

### Trim Patterns and Trim Materials

-   The registry definitions for trim patterns and trim materials no longer include an `item` field
-   Instead, this mapping in patterns and materials is defined by the recipe and item components respectively

### World Generation

#### Added `fallen_tree` Feature Type

-   Places a stump block (given by `trunk_provider`), and a number of logs to the side placed in a random direction (given by `trunk_provider`, rotated by direction)
-   Format:
    -   `trunk_provider` - Block State Provider, the log block to be placed
    -   `log_length` - Int Provider (between 0 and 16), the number of blocks from the origin to generate (including the stump and free space)
    -   `stump_decorators` - List of Tree Decorators to apply to the stump block
    -   `log_decorators` - List of Tree Decorators to apply to the log blocks

#### Added `attached_to_logs` Tree Decorator Type

-   Places blocks adjacent to logs in random directions, with a specified probability
-   Format:
    -   `probability` - float (between 0 and 1), the probability for a block to be attached in a given direction
    -   `block_provider` - Block State Provider, selects the adjacent block to place
    -   `directions` - list of directions, the cardinal directions in which blocks can be placed

### Tags

#### Block Tags

-   Added `#replaceable_by_mushrooms` - exhaustive list of all bocks that can be replaced as a mushroom is placed or grows
-   Added `#sword_instantly_mines` - blocks that are instantly mined by Swords
-   Added `#plays_ambient_desert_block_sounds` - blocks that will play ambient desert block sounds
-   Added `#edible_for_sheep` - blocks that can be eaten by Sheep to regrow their Wool
-   Added `#camels_spawnable_on` - blocks that Camels can spawn on
-   `#dead_bush_may_place_on` has been renamed to `#dry_vegetation_may_place_on`

#### Item Tags

-   Added `#book_cloning_target` - item that can be crafted together with a Written Book to clone it
-   Added `#eggs` - all variants of the Egg item
-   Added `#flowers` - corresponding item tag for the already existing `#flowers` block tag

#### Biome Tags

-   Added `#spawns_cold_variant_farm_animals` - all biomes where cold variant of farm animals spawn
-   Added `#spawns_warm_variant_farm_animals` - all biomes where warm variants of farm animals spawn

#### Entity Tags

-   Added `#can_equip_saddle` - entities that can be equipped with a Saddle
    -   Note: this does not mean that the Saddle will function, just that it can be equipped into the saddle slot
-   Added `#can_wear_horse_armor` - entity that can hold horse armor in their body slot

#### Structure Tags

-   Added `#on_savanna_village_maps` - structures that can appear on Savanna Village Maps
-   Added `#on_desert_village_maps` - structures that can appear on Desert Village Maps
-   Added `#on_plains_village_maps` - structures that can appear on Plains Village Maps
-   Added `#on_taiga_village_maps` - structures that can appear on Taiga Village Maps
-   Added `#on_snowy_village_maps` - structures that can appear on Snowy Village Maps
-   Added `#on_swamp_explorer_maps` - structures that can appear on Swamp Explorer Maps
-   Added `#on_jungle_explorer_maps` - structures that can appear on Jungle Explorer Maps

#### Cat Variant Tags

-   Removed `#default_spawns` and `#full_moon_spawns`

### Particles

#### `tinted_leaves`

-   This particle is spawned below most Leaves blocks
-   Fields:
    -   `color`: Tint color, specified either as packed int or list of 4 floats

#### `firefly`

-   This particle spawns around Firefly Bushes
-   Has no fields

## Resource Pack Version 47 through 55

-   Added new block sprites for new content
-   The Creaking Heart "active" state has been renamed to "awake"
-   Added new item sprites for new content
-   Added new item sprites for each Spawn Egg
-   Added new sound events for new content
-   Added new particle definitions and sprites for Falling Leaves and Fireflies
-   New and updated textures for the Pig, Cow, Chicken and Sheep
-   Added new equipment asset layer type for Pigs and Striders, and moved saddle textures
-   Renamed `textures/misc/enchanted_glint_entity.png` to `textures/misc/enchanted_glint_armor.png`
-   Added colormap texture for tinting dry foliage tinted blocks (`textures/colormap/dry_foliage.png`)
-   Item model definitions can now dispatch on item component contents
-   Changes to shaders and post-processing effect definitions
-   Expanded `paletted_permutations` atlas sprite source to support custom separators
-   Small changes in rendering of items in world

### Block Sprites

-   Added new block sprites:
    -   `bush`
    -   `cactus_flower`
    -   `creaking_heart_dormant`
    -   `creaking_heart_top_dormant`
    -   `firefly_bush_emissive`
    -   `firefly_bush`
    -   `leaf_litter`
    -   `short_dry_grass`
    -   `tall_dry_grass`
    -   `test_block_accept`
    -   `test_block_fail`
    -   `test_block_log`
    -   `test_block_start`
    -   `test_instance_block`
    -   `wildflowers_stem`
    -   `wildflowers`
-   Renamed block sprites:
    -   `creaking_heart_active` -> `creaking_heart_awake`
    -   `creaking_heart_top_active` -> `creaking_heart_top_awake`

### Item Sprites

-   Added new item sprites:
    -   `blue_egg`
    -   `brown_egg`
    -   `firefly_bush`
    -   `leaf_litter`
    -   `wildflowers`
    -   `<mob>_spawn_egg` for every mob, replacing the previous `spawn_egg` and `spawn_egg_overlay` sprites

### Sound Events

-   Added new sound events:
    -   `block.cactus_flower.break`
    -   `block.cactus_flower.place`
    -   `block.deadbush.idle`
    -   `block.firefly_bush.idle`
    -   `block.iron.break`
    -   `block.iron.step`
    -   `block.iron.place`
    -   `block.iron.hit`
    -   `block.iron.fall`
    -   `block.leaf_litter.break`
    -   `block.leaf_litter.step`
    -   `block.leaf_litter.place`
    -   `block.leaf_litter.hit`
    -   `block.leaf_litter.fall`
    -   `block.sand.idle`
    -   `block.sand.wind`
    -   For each of: `puglin`, `sad`, `angry`, `grumpy`, `big`, `cute`:
        -   `entity.wolf_<variant>.ambient`
        -   `entity.wolf_<variant>.death`
        -   `entity.wolf_<variant>.growl`
        -   `entity.wolf_<variant>.hurt`
        -   `entity.wolf_<variant>.pant`
        -   `entity.wolf_<variant>.whine`
-   Removed sound event: `entity.wolf.howl`

### Particles

-   Added new particle sprites:
    -   `firefly`
    -   `leaf_<frame>` with frame ranging between 0 and 11

### New and Updated Pig Textures

-   Added new textures for Pig variants:
    -   `cold_pig`
    -   `warm_pig`
-   Texture `pig` has been renamed to `temperate_pig`
-   Changed the size of `temperate_pig` and `pig_saddle` texture

### New and Updated Cow Textures and Model

-   Added new textures for Cow variants:
    -   `cold_cow`
    -   `warm_cow`
-   Texture `cow` has been renamed to `temperate_cow`
-   Changed the size of `temperate_cow` texture
-   Changed the size of `red_mooshroom` and `brown_mooshroom` textures
-   The temperate Cow and Mooshroom have updated models and textures
    -   Models now have a snout
    -   Models now have their legs mirrored

### New and Updated Chicken Textures

-   Added new textures for Chicken variants:
    -   `cold_chicken`
    -   `warm_chicken`
-   Texture `chicken` has been renamed to `temperate_chicken`
-   The `temperate_chicken` texture has been moved to a new folder:
    -   `entity/chicken.png` -> `entity/chicken/temperate_chicken.png`

### Updated Sheep Textures

-   Name of `sheep_fur` texture has been renamed to `sheep_wool`
-   Sheep now has a separate texture for its wool undercoat, which is dynamically recolored in-game
    -   The name of this undercoat texture is `sheep_wool_undercoat`

### Equipment Assets

-   Equipment assets may now define new layer types:
    -   `pig_saddle` - equipment layer for Pig saddles
    -   `strider_saddle` - equipment layer for Strider saddles
    -   `camel_saddle` - equipment layer for Camel saddles
    -   `horse_saddle` - equipment layer for Horse saddles
    -   `donkey_saddle` - equipment layer for Donkey saddles
    -   `mule_saddle` - equipment layer for Mule saddles
    -   `skeleton_horse_saddle` - equipment layer for Skeleton Horse saddles
    -   `zombie_horse_saddle` - equipment layer for Zombie Horse saddles
-   The following textures have been moved to support the use of equipment assets for saddles:
    -   `entity/pig/pig_saddle.png` -> `entity/equipment/pig_saddle/saddle.png`
    -   `entity/strider/strider_saddle.png` -> `entity/equipment/strider_saddle/saddle.png`
-   The following textures have been split from their base entity texture to support the use of equipment assets for saddles:
    -   `entity/camel/camel.png` -> `entity/equipment/camel_saddle/saddle.png`
    -   `entity/horse/horse_<variant>.png` -> `entity/equipment/horse_saddle/saddle.png`
    -   `entity/horse/donkey.png` -> `entity/equipment/donkey_saddle/saddle.png`
    -   `entity/horse/mule.png` -> `entity/equipment/mule_saddle/saddle.png`
    -   `entity/horse/horse_skeleton.png` -> `entity/equipment/skeleton_horse_saddle/saddle.png`
    -   `entity/horse/horse_zombie.png` -> `entity/equipment/zombie_horse_saddle/saddle.png`
-   Equipment layers configured to be dyeable will now show if the `dyed_color` component is present on the item, even if the item is not in the `#dyeable` tag

### Item Models

#### `minecraft:component` Select Property

-   New data source has been added to `select` item model: `component`
-   Returns value of component on item, if any
-   Fields:
    -   `component` - namespaced ID of component type
-   Possible values: depends on component type
    -   Example: if `component` is set to `minecraft:wolf/collar`, list of cases will accept dye colors, like `lime`
    -   If value comes from registry and current datapack does not provide it, entry will be silently ignored

#### `minecraft:component` Boolean Property

-   New conditional model property has been added to `condition` item model: `component`
-   Uses component predicates (like ones used in item predicates) to match item components
    -   However, instead of encoding them as a map of `<predicate type>:<predicate value>`, a single predicate is encoded in two fields
-   Fields:
    -   `predicate` - type of component predicate (member of `minecraft:data_component_predicate_type` registry)
    -   `value` - predicate-specific value

### Atlas

#### `minecraft:paletted_permutations` Sprite Source

-   New field:
    -   `separator` - optional string (default: `_`) - value to be used when joining texture and permutation names to produce sprite name

### Shaders & Post-process Effects

> **Developer's Note**: _Although it is possible in Resource Packs, overriding Core Shaders is considered as unsupported and not an intended Resource Pack feature. These shaders exist as part of the internal implementation of the game, and as such, may change at any time as the game's internals evolve. We understand that overriding Core Shaders is used for very cool Resource Pack features, many of which lack supported alternatives. We would like to provide better, supported alternatives in the future._

-   Shader program definitions for core shaders and post-processing effects as JSON files have been removed
-   The shader programs themselves are still available and can be overridden
-   The post-processing effects are still configurable as JSON
-   "Global" uniforms may be defined in any shader, and the game will attempt to fill it
    -   Currently, these are: `ModelViewMat`, `ProjMat`, `TextureMat`, `ScreenSize`, `ColorModulator`, `Light0_Direction`, `Light1_Direction`, `GlintAlpha`, `FogStart`, `FogEnd`, `FogColor`, `FogShape`, `LineWidth`, `GameTime`, `ModelOffset`
    -   The type of the uniform must match what it would normally be, or it'll be undefined behavior

#### Post-process Effect Definitions

-   The field `program` was replaced with `vertex_shader` and `fragment_shader`
    -   `<namespace>:<path>` will resolve to `assets/<namespace>/shaders/<path>.<vsh|fsh>`
-   `type` is now a required field for each `uniform`
    -   Possible values are currently `int`, `ivec3`, `float`, `vec2`, `vec3`, `vec4`, `matrix4`
-   `values` in each `uniform` is now optional
    -   Leaving it unset is not recommended and is used for runtime configuration of the blur effect
-   Leaving a uniform unspecified results in undefined behavior, you must specify each one that will be used by the shaders

### Item Rendering

#### Item Display

-   `firstperson_lefthand` and `thirdperson_lefthand` transforms are now rendered the same as when held in hand

#### Item Entity

-   When on ground, model size is now taken into account when determining hovering motion
    -   That means that models should never clip into the block below, no matter what size they are
-   Positioning of items in an item stack on ground now depends on model size and model type
    -   If model depth (Z coordinate) is below 1/16th of a block, item is rendered as flat stack of items
    -   Otherwise, the model is rendered as a cluster of items offset in all directions around center
    -   Previously, flat stack rendering happened only for models with `builtin/generated` parent

## Fixed bugs in 1.21.5

-   [MC-7697](https://bugs.mojang.com/browse/MC-7697) Tridents or arrows shot through lava sometimes don't catch fire
-   [MC-13738](https://bugs.mojang.com/browse/MC-13738) Invisible saddle when using invisibility potion on a horse, donkey or mule
-   [MC-55800](https://bugs.mojang.com/browse/MC-55800) Successful "/fill air destroy" commands give error message and return 0 for result/success
-   [MC-56653](https://bugs.mojang.com/browse/MC-56653) Zombified Piglins drop XP and rare drops if killed by anything while in angered state
-   [MC-80243](https://bugs.mojang.com/browse/MC-80243) Saddles don't apply attribute modifiers when worn by entities
-   [MC-90212](https://bugs.mojang.com/browse/MC-90212) You cannot hang on to climbable blocks while gliding with elytra
-   [MC-93185](https://bugs.mojang.com/browse/MC-93185) The exit portal in the end generates at highest block at 0 0 which can make it generate incomplete
-   [MC-97244](https://bugs.mojang.com/browse/MC-97244) The "minecraft:enchant.thorns.hit" sound event doesn't play when non-player entities are damaged by the thorns enchantment
-   [MC-98271](https://bugs.mojang.com/browse/MC-98271) The sound of blocking with a shield is only hearable by other players (not the person blocking)
-   [MC-101556](https://bugs.mojang.com/browse/MC-101556) Nether Portal teleport range is too large (equivalent to a full block)
-   [MC-108495](https://bugs.mojang.com/browse/MC-108495) Non-LivingBase entities can be on a team (and show color) but can't be targeted using team=
-   [MC-113878](https://bugs.mojang.com/browse/MC-113878) Attribute modifiers description for chest is misleading / "When on body" instead of "When on chest"
-   [MC-117574](https://bugs.mojang.com/browse/MC-117574) Using /setblock or /fill to re-place a block entity keeps old NBT (if no NBT specified) but clears inventories, even when the command fails
-   [MC-118092](https://bugs.mojang.com/browse/MC-118092) Crafting recipe unlock toast says "New Recipes Unlocked!" even when only one recipe was unlocked
-   [MC-118470](https://bugs.mojang.com/browse/MC-118470) Narrator plays at full volume when volume is off
-   [MC-122840](https://bugs.mojang.com/browse/MC-122840) "/data remove" cannot delete beam\_target tag in End Crystals
-   [MC-128079](https://bugs.mojang.com/browse/MC-128079) Statistic for using shears doesn't increase when mining certain blocks
-   [MC-135192](https://bugs.mojang.com/browse/MC-135192) Boats are immediately sunken if there is a string on the surface of the water
-   [MC-141297](https://bugs.mojang.com/browse/MC-141297) You cannot set lit state of redstone torches using setblock, debug stick and BlockStateTag, to be to opposite of the situation it would be in
-   [MC-152382](https://bugs.mojang.com/browse/MC-152382) End gateways and end portals don't fade away with render distance fog
-   [MC-153392](https://bugs.mojang.com/browse/MC-153392) Unable to remove villager gossips using /data remove
-   [MC-157196](https://bugs.mojang.com/browse/MC-157196) Tamed animals cannot be added to a team
-   [MC-160304](https://bugs.mojang.com/browse/MC-160304) Sneaking on ice can change direction of movement to lines along axis
-   [MC-165421](https://bugs.mojang.com/browse/MC-165421) Bubble columns have the opposite effect on wind charges
-   [MC-165461](https://bugs.mojang.com/browse/MC-165461) Crossbow loading animation stops after loading, even when still holding down right click
-   [MC-165711](https://bugs.mojang.com/browse/MC-165711) Eye of ender hitbox always lags behind the animation
-   [MC-167125](https://bugs.mojang.com/browse/MC-167125) Rounding error on fall damage
-   [MC-168262](https://bugs.mojang.com/browse/MC-168262) Dead bushes cannot be placed on farmland
-   [MC-170134](https://bugs.mojang.com/browse/MC-170134) Minecraft uses several times more VRAM than needed after exploring terrain for a while
-   [MC-176233](https://bugs.mojang.com/browse/MC-176233) Crossbows no longer have a transition after loading
-   [MC-177522](https://bugs.mojang.com/browse/MC-177522) Wolf barking and whining sounds are subtitled as "Wolf pants"
-   [MC-183329](https://bugs.mojang.com/browse/MC-183329) Nether portal teleport overlay does not show up if the player has the nausea effect
-   [MC-183623](https://bugs.mojang.com/browse/MC-183623) Hardcore worlds in the world menu have a comma after the red exclamation mark
-   [MC-184530](https://bugs.mojang.com/browse/MC-184530) Player movement at low speeds is biased towards cardinal directions
-   [MC-184681](https://bugs.mojang.com/browse/MC-184681) Customized worlds still say "Buffet world customization" since 20w21a
-   [MC-186241](https://bugs.mojang.com/browse/MC-186241) World border faces are rendered incorrectly with "Fabulous!" graphics
-   [MC-189525](https://bugs.mojang.com/browse/MC-189525) Armored entities from pre-1.9 worlds upgrade to dual wielding armor
-   [MC-190000](https://bugs.mojang.com/browse/MC-190000) Saddles equipped on horses cannot be replaced without removing them first
-   [MC-193404](https://bugs.mojang.com/browse/MC-193404) Changing a powered or activator rail to powered using a debug stick or /setblock does not work
-   [MC-200311](https://bugs.mojang.com/browse/MC-200311) Advancement background texture referencing is inconsistent with models
-   [MC-202226](https://bugs.mojang.com/browse/MC-202226) /recipe give or take for one recipe says "recipes"
-   [MC-203550](https://bugs.mojang.com/browse/MC-203550) Blocks broken by pistons do not play breaking sounds
-   [MC-220091](https://bugs.mojang.com/browse/MC-220091) Summoning falling\_block entities with BlockState NBT set to any air block (air, cave\_air, void\_air) default to sand
-   [MC-220672](https://bugs.mojang.com/browse/MC-220672) Inconsistent pluralization in customize world preset heading source string
-   [MC-222876](https://bugs.mojang.com/browse/MC-222876) "Buffet world customization" is incorrectly capitalized
-   [MC-226772](https://bugs.mojang.com/browse/MC-226772) Shulker box opening / closing subtitle shows "Shulker"
-   [MC-227097](https://bugs.mojang.com/browse/MC-227097) End portals delete blocks that are inside of the portal
-   [MC-230445](https://bugs.mojang.com/browse/MC-230445) End portals and end gateways are not rendered properly with the Blindness or Darkness effects
-   [MC-231331](https://bugs.mojang.com/browse/MC-231331) Advancement toasts continue to appear despite the said advancements being revoked shortly after
-   [MC-236100](https://bugs.mojang.com/browse/MC-236100) End crystal beam appears to be black
-   [MC-239705](https://bugs.mojang.com/browse/MC-239705) Sprinting forward while facing a certain angle pushes the player either to the left or to the right
-   [MC-241951](https://bugs.mojang.com/browse/MC-241951) Player momentum on X and Z axis are cancelled separately at low values
-   [MC-248099](https://bugs.mojang.com/browse/MC-248099) Mob pathfinding breaks after falling into water accidentally while walking
-   [MC-253721](https://bugs.mojang.com/browse/MC-253721) Wrong logs when running /op @a
-   [MC-255756](https://bugs.mojang.com/browse/MC-255756) When the shield is broken between players, the attacking side has no shield breaking sound
-   [MC-256469](https://bugs.mojang.com/browse/MC-256469) Invisible camels don't show their saddles
-   [MC-257133](https://bugs.mojang.com/browse/MC-257133) Desync when placing large paintings with NBT on a small space
-   [MC-258253](https://bugs.mojang.com/browse/MC-258253) Spawn egg particles use an uncolored spawn egg overlay
-   [MC-260440](https://bugs.mojang.com/browse/MC-260440) Players can no longer activate swimming mode in water while flying with elytra
-   [MC-261385](https://bugs.mojang.com/browse/MC-261385) Bubble columns act differently at the surface depending on non-air blocks
-   [MC-262928](https://bugs.mojang.com/browse/MC-262928) The "minecraft:entity.player.hurt" sound is no longer played when players receive thorns damage from guardians or elder guardians
-   [MC-262939](https://bugs.mojang.com/browse/MC-262939) Changing dimensions or respawning with nausea effect active displays nether portal overlay
-   [MC-265514](https://bugs.mojang.com/browse/MC-265514) HRTF stuck on even when directional audio is set to off in update 1.20.2
-   [MC-266912](https://bugs.mojang.com/browse/MC-266912) Saddle equipping sounds aren't played when saddles are equipped on horses, donkeys, mules, or camels shortly after the said entity is summoned
-   [MC-267221](https://bugs.mojang.com/browse/MC-267221) "value" within "change\_page" clickEvent json looks for a string instead of an integer
-   [MC-267323](https://bugs.mojang.com/browse/MC-267323) Items fields with old boolean JSON formatting are cleared upon world update
-   [MC-268942](https://bugs.mojang.com/browse/MC-268942) The swimming animation no longer displays when gliding with an elytra and swimming at the same time
-   [MC-269386](https://bugs.mojang.com/browse/MC-269386) Flow Pottery Sherd is not in the correct spot in the creative inventory
-   [MC-269637](https://bugs.mojang.com/browse/MC-269637) Horses can wear multiple saddles but not multiple horse armor
-   [MC-270043](https://bugs.mojang.com/browse/MC-270043) Reduced armor glint applies to tridents
-   [MC-270192](https://bugs.mojang.com/browse/MC-270192) The saddles of some entities stay visible through their death animation
-   [MC-270197](https://bugs.mojang.com/browse/MC-270197) The saddle on pigs and striders stays visible through their death animation
-   [MC-270220](https://bugs.mojang.com/browse/MC-270220) Granting all advancements results in prolonged, disruptive and loud audio spam
-   [MC-272100](https://bugs.mojang.com/browse/MC-272100) Unused palette pixels in horse textures (horse\_\[brown/chestnut/creamy/white\].png)
-   [MC-272790](https://bugs.mojang.com/browse/MC-272790) Shulker boxes and other blocks in the end exit portal when it changes state are not dropped as items
-   [MC-273338](https://bugs.mojang.com/browse/MC-273338) Flying boat glitch using string and rising bubble columns
-   [MC-274187](https://bugs.mojang.com/browse/MC-274187) The sweeping attack from a sword enchanted with Fire Aspect can ignite other players with PVP disabled
-   [MC-274258](https://bugs.mojang.com/browse/MC-274258) All horse textures contain an unused chest bag texture
-   [MC-275994](https://bugs.mojang.com/browse/MC-275994) Having the pie chart open while the window is unfocused spams the logs
-   [MC-276061](https://bugs.mojang.com/browse/MC-276061) Decorated pot sherds don't visually update until relog when replacing with blank pot
-   [MC-276861](https://bugs.mojang.com/browse/MC-276861) The player can sometimes teleport through blocked end portals when moving very fast
-   [MC-277403](https://bugs.mojang.com/browse/MC-277403) Flaming arrows and tridents still don't extinguish when water is placed in their location
-   [MC-277537](https://bugs.mojang.com/browse/MC-277537) Pale moss carpets sometimes generate disjointed
-   [MC-277780](https://bugs.mojang.com/browse/MC-277780) Minecraft resaves all maps with every autosave even after the 1st patch
-   [MC-277807](https://bugs.mojang.com/browse/MC-277807) Teleporting the player's mount causes rotation de-sync, previously did not
-   [MC-277865](https://bugs.mojang.com/browse/MC-277865) The animation of boats in bubble columns breaks when over a certain "Time" in level.dat
-   [MC-277922](https://bugs.mojang.com/browse/MC-277922) Boats in 1 block high downward bubble column will continue to rock back and forth
-   [MC-278040](https://bugs.mojang.com/browse/MC-278040) Creaking swim pathfinding breaks after being submerged
-   [MC-278096](https://bugs.mojang.com/browse/MC-278096) "Fabulous!" graphics and clouds disabled causes all particles to linger in frame buffer for one frame
-   [MC-278140](https://bugs.mojang.com/browse/MC-278140) The "/fill" command doesn't work properly with the directional states of several blocks placed adjacent to one another
-   [MC-278164](https://bugs.mojang.com/browse/MC-278164) Click sound is played twice when you click a setting button and there's a slider under the mouse in the next screen
-   [MC-278204](https://bugs.mojang.com/browse/MC-278204) Blaze fireballs now cause TNT minecarts to explode instantly
-   [MC-278249](https://bugs.mojang.com/browse/MC-278249) Experience orb positions desync severely and abruptly correct themselves
-   [MC-278375](https://bugs.mojang.com/browse/MC-278375) Feeding wheat or hay bale to llama or trader llama with maximum Temper causes item stack to be desynced
-   [MC-278376](https://bugs.mojang.com/browse/MC-278376) Arrows and tridents act weirdly in one block deep bubble columns
-   [MC-278400](https://bugs.mojang.com/browse/MC-278400) Arrows and tridents move after hitting a block in flowing lava
-   [MC-278417](https://bugs.mojang.com/browse/MC-278417) Arrows and tridents on fire and stuck in the ground cannot be extinguished by rain
-   [MC-278422](https://bugs.mojang.com/browse/MC-278422) Reloading the world after removing Owner tag from a sitting tamed wolf with /data remove makes the wolf moving and sitting at the same time
-   [MC-278455](https://bugs.mojang.com/browse/MC-278455) Slow sideways movement in spectator mode is wrong at angles which aren't (close to) a multiple of 45°
-   [MC-278493](https://bugs.mojang.com/browse/MC-278493) Tamed wolves which are angry at creakings remain angry when said creakings despawn
-   [MC-278502](https://bugs.mojang.com/browse/MC-278502) Weeping and twisting vines disconnect
-   [MC-278552](https://bugs.mojang.com/browse/MC-278552) minecraft:entity.player.big\_fall no longer plays the sound when falling from great height
-   [MC-278585](https://bugs.mojang.com/browse/MC-278585) Players can get stuck when landing on the edge of powder snow
-   [MC-278591](https://bugs.mojang.com/browse/MC-278591) Ender dragon spawn egg is no longer given when using pick block on the ender dragon entity
-   [MC-278615](https://bugs.mojang.com/browse/MC-278615) Reinforcement zombified piglins are angry at you even if you killed the "caller" in one hit
-   [MC-278621](https://bugs.mojang.com/browse/MC-278621) Client/server desync when placing powder snow while landing in it
-   [MC-278627](https://bugs.mojang.com/browse/MC-278627) Players wearing leather boots will take fall damage when landing on the edge of powder snow
-   [MC-278634](https://bugs.mojang.com/browse/MC-278634) Trying to /setblock a 'waterlogged=true' state on (glow\_lichen, resin\_clump, sculk\_vein, etc.) produces an error
-   [MC-278639](https://bugs.mojang.com/browse/MC-278639) Tripwire hooks are not activated by shulker bullets
-   [MC-278659](https://bugs.mojang.com/browse/MC-278659) Attacking a natural stationary creaking does not trigger sculk sensors
-   [MC-278673](https://bugs.mojang.com/browse/MC-278673) The x-rotation of /teleport is limited to ±90 degrees relative to the entity's original angle
-   [MC-278683](https://bugs.mojang.com/browse/MC-278683) Mobs spawned from spawners or /summon never drop their equipment
-   [MC-278708](https://bugs.mojang.com/browse/MC-278708) Throwing ender pearls while mounted only dismounts you, without teleporting
-   [MC-278728](https://bugs.mojang.com/browse/MC-278728) smithing\_transform recipes can't set an item's components back to default
-   [MC-278733](https://bugs.mojang.com/browse/MC-278733) Breaking a double resin brick slab block only returns a single slab
-   [MC-278734](https://bugs.mojang.com/browse/MC-278734) Sheep's heads stutter when they look up or down
-   [MC-278755](https://bugs.mojang.com/browse/MC-278755) Teleporting far away while riding an entity softlocks the game
-   [MC-278801](https://bugs.mojang.com/browse/MC-278801) The closed eyeblossom to gray dye recipe is not grouped with the other gray dye recipe
-   [MC-278841](https://bugs.mojang.com/browse/MC-278841) Powder snow no longer slows down the player falling from a high place
-   [MC-279145](https://bugs.mojang.com/browse/MC-279145) Shulker bullets are no longer affected by bubble columns
-   [MC-279152](https://bugs.mojang.com/browse/MC-279152) Shulker bullets can't teleport through nether or end portals, end gateways
-   [MC-279196](https://bugs.mojang.com/browse/MC-279196) Block loot tables cannot be removed with /data remove
-   [MC-279340](https://bugs.mojang.com/browse/MC-279340) Baby polar bears are too small
-   [MC-279364](https://bugs.mojang.com/browse/MC-279364) CustomName cannot be removed from block entities
-   [MC-279390](https://bugs.mojang.com/browse/MC-279390) Baby zombified piglin helmet clipping
-   [MC-279472](https://bugs.mojang.com/browse/MC-279472) Void appears lower & more faded than before
-   [MC-279572](https://bugs.mojang.com/browse/MC-279572) End portals and end gateways aren't affected by water, lava or powder snow fog
-   [MC-279646](https://bugs.mojang.com/browse/MC-279646) Toggling fullscreen with F11 does not visually update the fullscreen option in the video settings menu
-   [MC-279653](https://bugs.mojang.com/browse/MC-279653) Block Entity Data desynchronizes after subsequent setblock commands
-   [MC-279857](https://bugs.mojang.com/browse/MC-279857) Piglins summoned by the /summon command do not pick up gold items
-   [MC-280170](https://bugs.mojang.com/browse/MC-280170) Goats can no longer ram armor stands unless the game rule mobGriefing is set to false
-   [MC-280211](https://bugs.mojang.com/browse/MC-280211) End crystal beams cause OpenGL errors with glDebugVerbosity set to 3

---

Shh! I'm writing this changelog from behind a Pale Oak tree – and I have to be very quiet because the Garden Awakens drop is finally here – and Creakings are spawning in Pale Gardens all across the Overworld! The Garden Awakens brings with it an eerie biome – the Pale Garden – which is carpeted in moss, filled with Pale Oak trees, and home to a unique flower called an Eyeblossom. It also brings a watchful hostile mob, the Creaking, as well as the secret to defeating (and spawning) it – the Creaking Heart! Facing up to a Creaking will also earn you Resin Clumps – another new block you can craft into Resin Bricks, or use to trim your armor. Was that everything? Oh! And we've also made some bug fixes. Now, let me see if I can back away slowly without this Creaking spotting me…

## New Features

-   Added Pale Garden Biome, Pale Oak tree, Pale Moss block, Pale Moss carpet, Pale Hanging Moss and Pale Oak woodset
-   Added the Creaking mob, Creaking Spawn Egg and Creaking Heart block
-   Added the Resin block family
-   Added Eyeblossoms

### Pale Garden

The Pale Garden is a biome variation of Dark Forest.

-   Pale Oaks generate here
-   Creaking Heart blocks can generate in Pale Oaks, causing Creakings to spawn at night
-   Eyeblossoms generate on the ground
-   Pale Moss blocks/carpet generate on the ground here
-   Hanging Pale Moss generate hanging from the foliage of Pale Oaks
-   Animal mobs do not spawn naturally in Pale Gardens
-   New biome specific ambient sounds
-   Pale Garden has no accompanying music
    -   If a player enters the biome while music is playing, the music will fade out
-   Using the seed 3515201313347228787 when creating a new world will spawn the player next to a Pale Garden ![In the moonlit canopy of a Pale Garden, an Enderman can be seen holding a Pale Moss block. A Creeper and a Creaking can also be seen in the distance.](https://launchercontent.mojang.com/v2/images/1.21.4canopy.jpg)

### Pale Oak Tree

Pale Oak trees are a new tree variant similar to Dark Oak trees.

-   Pale Oak Leaves drop Pale Oak Saplings that can be planted in a 2x2 configuration to grow Pale Oak trees
-   Player grown Pale Oak trees grow without any decorations
-   Naturally generated Pale Oak trees have Pale Hanging Moss hanging from the foliage, Pale Moss patches on the ground, and Creaking Heart blocks can generate in them
-   Pale Oak Leaves have a chance to spawn leaf particles if exposed on the bottom side
-   Wandering Traders can sell Pale Oak Saplings
-   Pale Oak Logs can be crafted into the Pale Oak woodset:
    -   Door
    -   Fence
    -   Fence Gate
    -   Plank
    -   Sign
    -   Hanging Sign
    -   Slab
    -   Stairs
    -   Trapdoor
    -   Wood
    -   Stripped Log
    -   Stripped Wood
    -   Button
    -   Pressure Plate
    -   Boat
    -   Boat with Chest ![A player made building constructed out of the Pale Oak woodset and Resin blocks is atop of a mountain near a Pale Garden.](https://launchercontent.mojang.com/v2/images/1.21.4building.jpg)

### Pale Moss

Pale Moss Blocks are new blocks that work similarly to existing Moss Blocks, including a Carpet variant.

-   Pale Moss Blocks generate naturally in the Pale Garden biome
-   Wandering Traders can sell a Pale Moss Block
-   Pale Moss Carpet can be crafted from two Pale Moss Blocks
-   Pale Moss Carpet generates naturally in the Pale Garden biome
    -   When placed, Pale Moss Carpet grows up to two blocks on the solid faces of any block that borders it
    -   Pale Moss Carpet can be Bone Mealed to grow to full on all solid faces of any block that borders it

### Pale Hanging Moss

Pale Hanging Moss is a vine-like block that grows downwards.

-   Pale Hanging Moss generates naturally in the Pale Garden biome under the foliage of Pale Oaks
-   Pale Hanging Moss does not grow randomly, but can be Bone Mealed to grow
-   Pale Hanging Moss breaks instantly when mined
-   Pale Hanging Moss requires shears or silk touch tools to be obtained
-   Wandering Traders can sell Pale Hanging Moss

### Eyeblossoms

Eyeblossoms are new flowers that generate in the Pale Garden biome.

-   They exist in two variants: Closed Eyeblossom and Open Eyeblossom
-   Eyeblossoms transition between the two variants based on the time of day
    -   During the night, Eyeblossoms will become Open
    -   During the day, they will become Closed
    -   In dimensions that do not have a day/night cycle, they will remain as-is
    -   When transitioning, flowers will emit a particle effect and sound
-   Eyeblossoms planted on the ground will communicate with each other, helping nearby flowers to open or close
-   Open Eyeblossoms have glowing eyes during the night
-   Eyeblossoms can be obtained by Bone Mealing grass blocks in the Pale Garden biome
-   Bees get poisoned when they touch Open Eyeblossoms
-   Bees can be tempted with Open Eyeblossoms, but they get poisoned on player interaction instead of typical breeding/growing behaviour
-   Bees do not interact at all with Closed Eyeblossoms
-   Suspicious Stew made from Open Eyeblossoms will cause a Blindness effect
-   Suspicious Stew made from Closed Eyeblossoms will cause a Nausea effect
-   Gray or Orange Dye can be crafted from Closed and Open Eyeblossoms respectively
-   Wandering Traders can sell Open Eyeblossoms

### Creaking Mob

The Creaking mob spawns at night if there is a Creaking Heart block between two Pale Oak logs. This happens naturally in the Pale Garden biome where the Creaking Heart generates inside Pale Oaks.

-   A Creaking will activate if a survival or adventure mode Player is within 12 blocks of it and looks at it
-   A Creaking stays active while there is a survival or adventure mode Player within 32 blocks of it
-   An activated Creaking will not move if a survival or adventure player is looking at it
    -   It will also have full knockback resistance in this state
-   Creaking melee attacks deal 3 points of damage (1.5 hearts)
-   Creakings react to damage caused by mobs and projectiles only by swaying in place
-   Creakings are resistant to fire
-   Creakings ignore Cacti, Sweet Berry Bushes and Powder Snow and can walk through/over them
-   When attacked by Players or their pets, a particle trail is shown between the Creaking and the Creaking Heart block it is connected to
-   When the Creaking Heart block that the Creaking is connected to is destroyed, the Creaking is removed with a custom twitching animation
-   Creaking spawns are based on the day/night cycle and not affected by light levels
-   Creakings cannot enter Boats
-   The Creaking Spawn Egg will spawn a Creaking mob that is not connected to a Creaking Heart which:
    -   Persists through day and night
    -   Takes damage from attacks and other damage sources
    -   Has one point of health (half a heart)
-   Creakings spawned from a Creaking Heart cannot go through portals
-   Creakings spawned from a Creaking Heart cannot be named with a Name Tag
-   Players wearing a Carved Pumpkin on their head can look at a Creaking without it freezing in place
-   Illagers are scared of Creakings and will run away from them ![Sunny is walking through a Pale Garden, unaware that several Creakings are stalking them.](https://launchercontent.mojang.com/v2/images/1.21.4creaking.jpg)

### Creaking Heart

A Creaking Heart is a “living” block generating in Pale Oak trees, covered on all sides by Pale Oak wood logs. It can spawn a Creaking mob during the night when it is placed between two Pale Oak Logs, all aligned along the same axis.

-   Is active during the night and dormant during the day
-   Sends a trail of particles towards the connected Creaking when the Creaking gets hit by a Player or their pet
-   When a Creaking Heart block is destroyed, the connected Creaking is removed
-   The Creaking Heart decides to remove or replace the connected Creaking when:
    -   It turns day
    -   The Creaking is too far away from the Creaking Heart
    -   A Player intersects with the Creaking for a few seconds
-   Comparators attached to the Creaking Heart block will output a signal strength dependent on the distance to the connected Creaking
-   A Creaking Heart can be crafted with a Resin Block and Pale Oak Logs
-   A Creaking Heart block can be obtained by using a Silk Touch enchanted tool
-   Breaking a Creaking Heart without Silk Touch block will drop 1-3 Resin Clumps or more when using a Fortune enchanted tool
-   Naturally placed Creaking Hearts drop 20-24 experience when broken by a Player, with or without Silk Touch ![Sunny stands face-to-face with a Creaking, hitting it to figure out where the connected Creaking Heart block is.](https://launchercontent.mojang.com/v2/images/1.21.4heart.jpg)

### Resin

Added Resin Clump, Block of Resin, Resin Brick, and a family of Resin Bricks blocks.

-   Attacking a Creaking will cause its Creaking Heart to exude 2-3 Resin Clumps
    -   Resin Clumps appear on the sides of Pale Oak Logs that are close and are connected to the Creaking Heart
    -   The Creaking Heart is on cooldown and cannot produce more Resin Clumps for 5 seconds after an attack
-   Resin Clump blocks can be placed on any full face of a neighboring block
-   Resin Clump blocks can be waterlogged
-   Block of Resin is a storage block for Resin Clumps
-   Resin Clumps can be smelted into Resin Brick items
-   Resin Brick items can be used as a material for armor trimming
-   Resin Brick items can be crafted into Resin Bricks
-   Resin Bricks can be crafted into Resin Brick Slabs, Resin Brick Stairs, Resin Brick Walls, and then Chiseled Resin Bricks
    -   The Stonecutter can also be used to craft these items
-   Resin Clump and Resin Block does not require a tool to mine and are mined instantly
-   The proper tool for Resin Bricks family of blocks is a Pickaxe
-   Resin Clumps can be found in some Woodland Mansion loot chests

### New System for Pale Garden Ambient Sounds

Ambient sounds in the Pale Garden biome do not come from the biome itself, but are generated by blocks found in the biome.

-   Pale Hanging Moss emits subtle atmospheric sounds when it is attached to Pale Oak Logs or Pale Oak Leaves
-   Creaking Hearts emit a set of eerie sounds when they are active during the night and surrounded by Logs on all sides
-   Open Eyeblossoms placed on Pale Moss Blocks emit a soft, whispering sound

## Changes

-   Swords are no longer considered efficient tools for mining Moss Carpet
    -   Hoes remain the proper tools for mining Moss Carpets
-   Bees are now withered on player interactions with Wither Roses instead of typical breeding/growing behavior
-   Baby Cats and Wolves now get a collar with the color that is a mix between the parents collar color if possible
-   Added language support for Popoloca
-   The durations of the effects of Suspicious Stews have been aligned with those in Bedrock Edition:
    -   Saturation: 0.35 seconds (unchanged)
    -   Night Vision: 5 seconds (unchanged)
    -   Fire Resistance: 3 seconds
    -   Blindness: 11 seconds
    -   Weakness: 7 seconds
    -   Regeneration: 7 seconds
    -   Jump Boost: 5 seconds
    -   Wither: 7 seconds
    -   Poison: 11 seconds
-   Removed Herobrine

### Required Tools for Drops

> **Developer's Note**: _We made it so any block that drops when its support is broken will also drop when mined with any tool. It seemed unfair that breaking a block directly could destroy it if it was possible to obtain it with any tool just by breaking the block below!_

-   The following blocks that require support now always drop when broken with any tool: Bell, Lantern, Soul Lantern, all Copper Doors, Iron Door, Heavy Weighted Pressure Plate, Light Weighted Pressure Plate, Polished Blackstone Pressure Plate, and Stone Pressure Plate
-   The Brewing Stand now drops when broken with any tool
-   The Ender Chest now drops Obsidian when broken with an incorrect tool, instead of dropping nothing

### Mobs Picking up Items

Some changes have been made to how mobs decide to replace their equipped items with items on the ground

-   If the item belongs in an armor slot, replace the item if any of the following conditions apply
    -   The new item has a higher base armor value
    -   The new item has a higher base armor toughness value
    -   The new item has more enchantments
    -   The new item is less damaged
    -   The new item has a custom name while the old one doesn't
-   If the item belongs in the main hand slot, replace the item if any of the following conditions apply
    -   The new item is a preferred weapon while the old one isn't
        -   If the old item is a preferred weapon while the new item isn't, do not replace the item
    -   The new item has a higher base damage value
    -   The new item has more enchantments
    -   The new item is less damaged
    -   The new item has a custom name while the old one doesn't

#### Preferred Weapons

The following mobs now have a preferred weapon type to pick up:

-   Skeleton-like mobs, except Wither Skeletons, prefer Bows
-   Adult Piglins and Pillagers prefer Crossbows
-   Drowned prefer Tridents

## Technical Changes

-   The Data Pack version is now 61
-   The Resource Pack version is now 46
-   Removed the `winter_drop` feature flag and built-in data pack

### The Data Generator

-   The data generator in the server jar (`net.minecraft.data.Main`) no longer generates the `assets` directory
    -   The `--client` option has been removed from the command line for this entry point
-   A new entry point `net.minecraft.client.data.Main` is now present in the client jar, with a similar command line structure as the data generator in the server jar
    -   Available options:
        -   `--client` - generates the `assets` directory

### Network Protocol

-   Client will now send the `minecraft:player_loaded` packet once the loading terrain screen has closed after initially loading into the world, and after closing the loading screen when respawning

## Data Pack Versions 58 through 61

-   The `minecraft:trail` particle has a new required field: `duration`
    -   Indicates, in ticks, how long the particle will take to fly from the start to the target
-   Spawn eggs with `minecraft:entity_data` and block items with `minecraft:block_entity_data` component will now apply data only if the `id` tag matches the type of placed entity or block entity
    -   Additionally, a warning will be added to item tooltip if using such an item might directly or indirectly lead to command execution with a high permission level
    -   This warning cannot be hidden by any other component
-   The field `item_model_index` in the `minecraft:trim_material` registry has been removed (no longer needed for model rendering)
-   The `minecraft:custom_model_data` component has been expanded, together with the `minecraft:set_custom_model_data` modifier
-   Removed the `minecraft:creaking_transient` entity type

### Commands

-   Suggestions will now be shown for attribute modifier IDs existing on the target in the `attribute` command

#### `attribute` Command

New subcommand: `base reset` for resetting the base value of an attribute to its default value for the target entity. If the attribute does not exist on the entity, the command will fail.

Syntax:

    attribute <target> <attribute> base reset 
    

Parameters:

-   `target`: The entity to update the attribute for
-   `attribute`: The attribute ID to update

### Tags

#### Block Tags

-   Added `#bee_attractive` - denotes all blocks that Bees may pollinate
-   Removed `#tall_flowers`

#### Item Tags

-   Removed `#flowers` and `#tall_flowers`
-   Removed `trim_templates`
-   Added `#skeleton_preferred_weapons`, `#piglin_preferred_weapons`, `#pillager_preferred_weapons` and `#drowned_preferred_weapons` tags for specifying preferred weapons types for these mobs when picking up items
-   Added `#wither_skeleton_disliked_weapons` for weapons that Wither Skeletons don't want to pick up

### Furnace, Smoker and Blast Furnace Data

-   Renamed `CookTime` to `cooking_time_spent`
-   Renamed `CookTimeTotal` to `cooking_total_time`
-   Renamed `BurnTime` to `lit_time_remaining`
-   Added field `lit_total_time` representing the total time the furnace should be lit

### TNT Minecart Data

-   The `TNTFuse` field of TNT Minecarts has been renamed to `fuse`
-   Addeded optional field `explosion_speed_factor` that controls the amount of added damage depending on the speed of the Minecart
    -   Default value: `1.0`

### Text Components

Added optional `shadow_color` style field to Text Components, which overrides the shadow properties of text.

-   Format:
    -   A packed integer ARGB value (e.g. `-1`)
    -   An array of RGBA values (e.g. `[1, 1, 1, 1]`)
-   If specified as `0`, the shadow will never be displayed for this text
-   If specified as a non-zero value, the shadow will always be displayed with this color

### Item Components

#### `minecraft:equippable`

-   The `model` field has been renamed to `asset_id`

#### `minecraft:custom_model_data`

-   Component now has more fields to accommodate new uses by various model property getters (see Resource Pack changes)
-   Fields:
    -   `floats` - list of floats
    -   `flags` - list of booleans
    -   `strings` - list of strings
    -   `colors` - list of RGB color values

### Item Modifiers

#### `minecraft:set_custom_model_data`

Now has more fields to accommodate more complex component structure.

-   New fields:
    -   `floats` - optional list operation of number providers
    -   `flags` - optional list operation of boolean values
    -   `strings` - optional list operation of string values
    -   `colors` - optional list operation of RGB values or number providers
-   The list operations uses same format as `explosions` field in `set_fireworks` modifier:
    -   `value` - list of values to insert
    -   `mode`: enumerated value deciding the function to apply:
        -   `replace_all`: fully replace the list
        -   `replace_section`: replace a section of the list. Arguments:
            -   `offset`: optional non-negative integer:
                -   Start of replaced range
                -   If omitted, `0` is used
            -   `size`: optional non-negative integer:
                -   Size of range to be replaced in the list
                -   If omitted, the size of the `values` field is used
        -   `insert`: insert into the list, moving existing entries to after the inserted section. Arguments:
            -   `offset`: optional non-negative integer:
                -   Index before which the new entries will be inserted
                -   If omitted, `0` (before first value) is used
        -   `append`: append values at the end of the list
-   For example `{function:"set_custom_model_data",floats:{values:[2],mode:replace_all}}` sets replaces `floats` with the single value `2`

### Custom World Generation

-   The `simple_block` feature type has a new optional field: `schedule_tick`
    -   If set to `true`, the block will be scheduled to tick once on the first tick the block is within the simulation distance after generation
    -   Default: `false`
-   Biome effects have a new format for `music` using a weighted list
    -   The list can be empty indicating no music should play in this biome
-   Biome effects have a new optional field: `music_volume`
    -   The game will smoothly transition between the current music volume and the new volume when entering the biome

## Resource Pack Version 43 through 46

-   New Resources for the Garden Awakens content
-   Updates to GUI sprites
-   The UV mapping of the Magma Cube texture has been updated
-   Invalid `minecaft:filled_map` items in an Item Frame (map item without the `map_id` component) no longer change the size of the frame
-   New format for data-driving item models
-   All blocks that previously rendered only a block entity (Banners, Heads, Beds, Chests, Conduits, Decorated Pots, Shulker Boxes and Signs) will now also render a normal block model over it (same as the existing behavior of Bells, Enchantment Tables, etc.)
    -   Note: rendered block entity still can't be removed or data-driven, this change only affects previously ignored block models
-   Unifont has been updated to 16.0.01

### New Resources

-   Added the following new block models and textures:
    -   `chiseled_resin_bricks`
    -   `closed_eyeblossom`
    -   `open_eyeblossom`
        -   Additionally, uses `open_eyeblossom_emissive` texture layer
    -   `resin_block`
    -   `resin_bricks`
    -   `resin_clump`
-   Added the following non-top-level block models:
    -   `cross_emissive`
    -   `flower_pot_cross_emissive`
-   Added the following new item models and textures:
    -   `resin_brick`
    -   `resin_clump`
-   Added new Armor Trim color palette: `trims/color_palettes/resin`

### Renames

-   `equipment` directory has been moved one level up, i.e. `models/equipment/` becomes `equipment/`
-   `broken_elytra` model and texture has been renamed to `elytra_broken`

### GUI Sprites

-   The `toast/system` sprite layout has been updated to use standard nine-slicing functionality
-   The `toast/tutorial` sprite will now be scaled for taller toasts, and as such has nine-slice scaling in the default Resource Pack
-   The `advancements/box_obtained` and `advancements/box_unobtained` GUI sprites are now configured to scale with nine-slicing
-   Empty slot sprites, such as those for the armor slots in the inventory, have been renamed and moved from `items` into the `gui/sprites/container/slot` directory
    -   `empty_armor_slot_helmet` -> `helmet`
    -   `empty_armor_slot_chestplate` -> `chestplate`
    -   `empty_armor_slot_leggings` -> `leggings`
    -   `empty_armor_slot_boots` -> `boots`
    -   `empty_slot_sword` -> `sword`
    -   `empty_slot_pickaxe` -> `pickaxe`
    -   `empty_slot_axe` -> `axe`
    -   `empty_slot_shovel` -> `shovel`
    -   `empty_slot_hoe` -> `hoe`
    -   `empty_slot_smithing_template_armor_trim` -> `smithing_template_armor_trim`
    -   `empty_slot_smithing_template_netherite` -> `smithing_template_netherite`
    -   `empty_slot_amethyst_shard` -> `amethyst_shard`
    -   `empty_slot_diamond` -> `diamond`
    -   `empty_slot_emerald` -> `emerald`
    -   `empty_slot_ingot` -> `ingot`
    -   `empty_slot_lapis_lazuli` -> `lapis_lazuli`
    -   `empty_slot_quartz` -> `quartz`
    -   `empty_slot_redstone_dust` -> `redstone_dust`
-   The empty slot sprites in the Loom have been split from their background and moved:
    -   `container/loom/banner_slot` -> `container/slot/banner`
    -   `container/loom/pattern_slot` -> `container/slot/banner_pattern`
    -   `container/loom/dye_slot` -> `container/slot/dye`
-   The empty slot sprites in the Brewing Stand have been split from the container background:
    -   `container/slot/brewing_fuel`
    -   `container/slot/potion`
-   The empty slot sprites in the Horse/Llama inventories have been split from their background, cropped, and moved:
    -   `container/horse/armor_slot` -> `container/slot/horse_armor`
    -   `container/horse/llama_armor_slot` -> `container/slot/llama_armor`
    -   `container/horse/saddle_slot` -> `container/slot/saddle`

### Item models

-   New format has been introduced for describing item models
-   Item models are selected based on the `minecraft:item_model` component
    -   Information (including model) for item with `item_model=foo:bar` is stored in `/assets/foo/items/bar.json`
-   The `overrides` section has been removed from existing block models
-   There are no longer any hardcoded paths in the `models` directory - models will be now only used if referenced by definitions in `items` or `blockstates` directories
-   Models in `models/item` that only redirect to a block model have been removed
    -   In such cases, the item model will refer to the `models/block` model directly ![Steve blocks an Arrow shot by a Skeleton with a Shield that has been given the item model of an Iron Sword.](https://launchercontent.mojang.com/v2/images/1.21.4blocking.jpg)

#### Top-level Client Item Info

-   Contains information needed to render item
-   Stored in `/assets/[namespace]/items/[path].json`
-   Fields:
    -   `model`: Object with fields:
        -   `type`: Type of item model (see below)
        -   `<type-specific>` - Additional fields depending on item model type
    -   `hand_animation_on_swap` - Boolean field describing if down-and-up animation should be played in first-person view when item stack is changed (either type, count or components), default: `true`
        -   Only the value from the new item is taken into account
        -   Does not control "pop" animation in GUI when item is picked up or changes count

#### `minecraft:model` Item Model Type

-   Renders a plain model from the `models` directory
-   Fields:
    -   `model`: Namespaced ID of a model in `models` (e.g. `minecraft:block/yellow_glazed_terracotta`)
    -   `tints`: A list of tint sources to apply to elements of rendered model (first entry applies to `tintindex` 0, second one - 1, etc.)
        -   Each tint source is expected to return an RGB color
        -   Colors are specified as either packed integer RGB values (e.g. `-1`) or an array of RGB values in range `0.0` to `1.0` (e.g. `[ 1.0, 1.0, 1.0 ]`)
        -   Format:
            -   `type`: Type of tint source (see below)
            -   `<type-specific>` - Additional fields depending on tint source type

##### `minecraft:constant` Tint Source Type

-   Returns a constant RGB color
-   Fields:
    -   `value` - RGB value

##### `minecraft:custom_model_data` Tint Source Type

-   Returns a value from the `colors` list in the `minecraft:custom_model_data` component, if present
-   Fields:
    -   `index` - Index for field in `colors`, default: `0`
    -   `default`: RGB value

##### `minecraft:dye` Tint Source Type

-   Returns the value from the `minecraft:dyed_color` component, or a default value if not present
-   Fields:
    -   `default` - RGB value

##### `minecraft:grass` Tint Source Type

-   Returns a grass color at specific climate parameters, based on `textures/colormap/grass.png`
-   This yields the same colors as ones selected by `downfall` and `temperature` in biome configuration
-   Fields:
    -   `temperature` - Float in `0..1` (inclusive) range
    -   `downfall` - Float in `0..1` (inclusive) range

##### `minecraft:firework` Tint Source Type

-   Returns the average of colors from `minecraft:firework_explosion` component, or a default color if there are none
-   Fields:
    -   `default`: RGB value

##### `minecraft:map_color` Tint Source Type

-   Return the color from the `minecraft:map_color` component, or the default color if the component is not present
-   Fields:
    -   `default`: RGB value

##### `minecraft:potion` Tint Source Type

-   Returns a color based on the `minecraft:potion_contents` component:
    -   If the component is present:
        -   Custom color, if there is one present in the component
        -   Average of the effect colors, if at least one is present
    -   Default color, if the component is not present or doesn't have any effects
-   Fields:
    -   `default`: RGB value

##### `minecraft:team` Tint Source Type

-   Returns the team color of the context entity, if any
-   Fields:
    -   `default` - RGB value to return when there is no context entity, entity is not in a team or the team has no color

#### `minecraft:special` Item Model Type

-   Renders a special (not data-driven) model
-   Fields:
    -   `model`: Special model instance
        -   Format:
            -   `type` - Type of special model (see below)
            -   `<type-specific>` - Additional fields depending on tint source type
    -   `base`: Namespaced ID of a model in `models` to provide transformations, particle texture and GUI light

##### `minecraft:banner` Special Model Type

-   Renders a Banner with patterns from the `minecraft:banner_patterns` component
-   Fields:
    -   `color` - Color of the Banner base, one of 16 predefined colors

##### `minecraft:bed` Special Model Type

-   Renders a whole Bed
-   Fields:
    -   `texture` - Namespaced ID for the texture to use, without `textures/entity/bed/` prefix and `.png` suffix

##### `minecraft:chest` Special Model Type

-   Renders a single Chest
-   Fields:
    -   `texture` - Namespaced ID for the texture to use, without `textures/entity/chest/` prefix and `.png` suffix
    -   `openness` - Float, `0.0` (default) - fully closed, `1.0` - fully open

##### `minecraft:conduit` Special Model Type

-   Renders a Conduit
-   No fields

##### `minecraft:decorated_pot` Special Model Type

-   Renders a Decorated Pot
-   Uses values from `minecraft:pot_decorations` component
-   No fields

##### `minecraft:hanging_sign` Special Model Type

-   Renders a Hanging Sign
-   Fields:
    -   `wood_type` - One of `oak`, `spruce`, `birch`, `acacia`, `cherry`, `jungle`, `dark_oak`, `pale_oak`, `mangrove`, `bamboo`, `crimson` and `warped`
    -   `texture` - Optional namespaced ID for the texture to use, without `textures/entity/signs/hanging/` prefix and `.png` suffix
        -   If not present, it will be derived from `wood_type`

##### `minecraft:head` Special Model Type

-   Renders a Head
-   Uses profile from `minecraft:profile` component when applicable
-   Fields:
    -   `kind` - One of `skeleton`, `wither_skeleton`, `player`, `zombie`, `creeper`, `piglin`, `dragon`
    -   `texture` - Optional namespaced ID for the texture to use, without `textures/entity/` prefix and `.png` suffix
        -   If absent, default texture will be used, depending on `kind` field
        -   Additionally, if present, `minecraft:profile` component is ignored
    -   `animation` - float controlling head animation (like Piglin ears or Ender Dragon jaw), default: `0.0`

##### `minecraft:shield` Special Model Type

-   Renders a Shield
-   Uses patterns from the `minecraft:banner_patterns` component and color from the `minecraft:base_color` component
-   No fields

##### `minecraft:shulker_box` Special Model Type

-   Renders a Shulker Box
-   Fields:
    -   `texture` - Namespaced ID for the texture to use, without `textures/entity/shulker/` prefix and `.png` suffix
    -   `openness` - Float, `0.0` (default) - fully closed, `1.0` - fully open
    -   `orientation` - Orientation for rendering, default: `up`

##### `minecraft:standing_sign` Special Model Type

-   Renders a Standing Sign
-   Fields:
    -   `wood_type` - One of `oak`, `spruce`, `birch`, `acacia`, `cherry`, `jungle`, `dark_oak`, `pale_oak`, `mangrove`, `bamboo`, `crimson` and `warped`
    -   `texture` - Optional namespaced ID for the texture to use, without `textures/entity/signs/` prefix and `.png` suffix
        -   If not present, it will be derived from `wood_type`

##### `minecraft:trident` Special Model Type

-   Renders a Trident
-   No fields

#### `minecraft:composite` Item Model Type

-   Renders multiple sub-models
-   All models are rendered in the same space
-   Fields:
    -   `models`: A list of item models to render

#### `minecraft:condition` Item Model Type

-   Renders an item model depending on boolean property
-   Fields:
    -   `property`: Type of property (see below)
    -   `<property-specific>` - Additional fields depending on property type, added inline
    -   `on_true` - Item model to render when property is `true`
    -   `on_false` - Item model to render when property is `false`

##### `minecraft:broken` Boolean Property

-   Returns `true` if the item is damageable and has only one use remaining before breaking
-   No fields

##### `minecraft:bundle/has_selected_item` Boolean Property

-   Returns `true` if Bundle is "open", i.e. it has selected item visible in GUI
-   No fields

##### `minecraft:carried` Boolean Property

-   Returns `true` if item is carried between slots in GUI
-   No fields

##### `minecraft:custom_model_data` Boolean Property

-   Returns a value from the `flags` list in the `minecraft:custom_model_data` component, if present
-   Returns `false` if the component is not present
-   Fields:
    -   `index` - Index for the entry to use in `flags`, default: `0`

##### `minecraft:damaged` Boolean Property

-   Returns `true` if the item is damageable and has been used at least once
-   No fields

##### `minecraft:extended_view` Boolean Property

-   Returns `true` if the player has requested extended details by holding down the shift key
    -   Note: not a keybind, can't be rebound
-   Only works when item is displayed in UI
-   No fields

##### `minecraft:fishing_rod/cast` Boolean Property

-   Returns `true` if there is a Fishing Bobber attached to currently used Fishing Rod
-   No fields

##### `minecraft:has_component` Boolean Property

-   Returns `true` if the given component is present on the item
-   Fields:
    -   `component` - Component type to check for
    -   `ignore_default` - If the default component value for the item type should be treated as "no component", default: `false`

##### `minecraft:keybind_down` Boolean Property

-   Returns `true` if keybind is currently active
    -   Note: The keybind tested is the local one for the viewer, regardless of the context
-   Fields:
    -   `keybind` - Keybind ID, same as the value in a `keybind` text component
        -   Examples: `key.use`, `key.left`

##### `minecraft:selected` Boolean Property

-   Returns `true` if item is selected on a hotbar
-   No fields

##### `minecraft:using_item` Boolean Property

-   Returns `true` if the Player is currently using this item
-   No fields

##### `minecraft:view_entity` Boolean Property

-   When not spectating, returns `true` if the context entity is the local Player entity, i.e. one controlled by client
-   When spectating, returns `true` if the context entity is the spectated entity
-   If no context entity is present, will return `false`
-   No fields

#### `minecraft:select` Item Model Type

-   Renders an item model based on matching a string property
-   Fields:
    -   `property`: Type of property (see below)
    -   `<property-specific>` - Additional fields depending on property type, added inline
    -   `cases` - List of cases to match in format:
        -   `when` - Value to match against property, type depends on property
            -   Can be a single string or a list of strings
        -   `model` - Item model to render when this case is selected
    -   `fallback` - Item model to render if none of the cases matched the value
        -   If not present, a placeholder "missing" model will be rendered instead

##### `minecraft:block_state` String Property

-   Returns the value of some property from the `minecraft:block_state` component
-   Fields:
    -   `block_state_property` - The string key to select from the component
-   Possible values: Any string

##### `minecraft:charge_type` String Property

-   Returns the charge type stored in the `minecraft:charged_projectiles` component, if present
-   No fields
-   Possible values:
    -   `none` - If there are no projectiles, or the component is not present
    -   `rocket` - If there is at least one firework rocket
    -   `arrow` - Any other case

##### `minecraft:context_dimension` String Property

-   Returns the ID of the dimension in the context, if any
-   No fields
-   Possible values: Namespaced dimension IDs (like `minecraft:overworld`)

##### `minecraft:context_entity_type` String Property

-   Returns the type of entity present in the context, if any
-   No fields
-   Possible values: Namespaced entity type IDs

> **Developer's Note**: _Context entities were initially used only for Compasses and Clocks, which means that type is available only in rendering contexts where those items would show correct reading (see [MC-186797](https://bugs.mojang.com/browse/MC-186797) and related bugs)._

##### `minecraft:custom_model_data` String Property

-   Returns a value from `strings` list in the `minecraft:custom_model_data` component
-   Fields:
    -   `index` - Index for the entry to use in `strings`, default: `0`
-   Possible values: Any string

##### `minecraft:display_context` String Property

-   Returns the context this item is being rendered in
-   No fields
-   Possible values:
    -   `none`
    -   `thirdperson_lefthand`
    -   `thirdperson_righthand`
    -   `firstperson_lefthand`
    -   `firstperson_righthand`
    -   `head`
    -   `gui`
    -   `ground`
    -   `fixed`

##### `minecraft:local_time` String Property

-   Returns the current time, formatted according to a given pattern
-   The value is updated every second
-   For full format documentation for locale, time zone and pattern, see the ICU (International Components for Unicode) documentation
-   Fields:
    -   `locale` - Optional value describing the locale
        -   Examples:
            -   `en_US`: English language (used for things like week names), formatting as in USA
            -   `cs_AU@numbers=thai;calendar=japanese`: Czech language, Australian formatting, Thai numerals and Japanese calendar
        -   The default value is `""`, which means the "root" locale (a set of defaults, including English names)
    -   `time_zone` - Optional value describing the time zone
        -   If not present, defaults to the timezone set on the client computer
        -   Examples:
            -   `Europe/Stockholm`
            -   `GMT+0:45`
    -   `pattern` - Describes format to be used for time formatting
        -   Examples:
            -   `yyyy-MM-dd` - 4-digit year number, then 2-digit month number, then 2-digit day of month number, all zero-padded if needed, separated by `-`
            -   `HH:mm:ss` - Current time (hours, minutes, seconds), 24-hour cycle, all zero-padded to 2 digits of needed, separated by `:`
-   Possible values: Any string

> **Developer's Note**: _There is no "use locale set on client" option to avoid unexpected issues when the user's locale does not match the pack developer's one. Also, time is complicated, be careful._

![Steve is opening up gifts under a custom Christmas tree.](https://launchercontent.mojang.com/v2/images/1.21.4christmas.jpg)

##### `minecraft:main_hand` String Property

-   Returns the main hand of holding player
-   No fields
-   Possible values: `left`, `right`

##### `minecraft:trim_material` String Property

-   Returns the value of the `material` field from the `minecraft:trim` component, if present
-   No fields
-   Possible values: Namespaced IDs

#### `minecraft:range_dispatch` Item Model Type

-   Renders an item model based on a numeric property
-   This is a replacement for the old `overrides` section from block models
-   The last entry with a threshold less than or equal to the property value is selected
-   Fields:
    -   `property`: Type of property (see below)
    -   `<property-specific>` - Additional fields depending on property type
    -   `scale` - Factor to multiply property value with, default: `1.0`
    -   `entries` - List of entries in format:
        -   `threshold` - Float value for when this entry should be selected
        -   `model` - Item model to render when this entry is selected
        -   Note: The order of entries does not matter, the list will be sorted by threshold in ascending order before use
    -   `fallback` - Item model to render if no entries were less than or equal to the property value
        -   If not present, a placeholder "missing" model will be rendered instead

##### `minecraft:bundle/fullness` Numeric Property

-   Returns the weight of the `minecraft:bundle_contents` component, or `0.0` if not present
-   No fields

##### `minecraft:compass` Numeric Property

-   Returns the angle in the X-Z plane between the holder position and the target, scaled to `0..1`
-   If the target is not valid (not present, in another dimension or too close to holder position), a random value will be returned
-   Fields:
    -   `target` - One of:
        -   `none` - Always returns an invalid target
        -   `spawn` - Points at the world spawn
        -   `lodestone` - Points at a location stored in the `minecraft:lodestone_tracker` component
        -   `recovery` - Points at the last death location of the Player in the context
    -   `wobble` - If `true`, the value will oscillate for some time around target before settling, default: `true`

##### `minecraft:cooldown` Numeric Property

-   Returns the remaining cooldown for the item, scaled to `0..1`
-   No fields

##### `minecraft:crossbow/pull` Numeric Property

-   Returns Crossbow-specific use time
-   No fields

##### `minecraft:count` Numeric Property

-   Returns stack size
-   Fields:
    -   `normalize`: Boolean, default: `true`
        -   If `true`, returns the count divided by the value of the `minecraft:max_stack_size` component, clamped to `0..1`
        -   If `false`, returns the count clamped to `0..max_stack_size`

##### `minecraft:custom_model_data` Numeric Property

-   Returns a value from the `floats` list in the `minecraft:custom_model_data` component, if present
-   If the component is not present, returns `0.0`
-   Fields:
    -   `index` - Index for the entry in `floats` to use, default: `0`

##### `minecraft:damage` Numeric Property

-   Returns the value of the `minecraft:damage` component, if present
-   If the component is not present, returns `0.0`
-   Fields:
    -   `normalize`: Boolean, default: `true`
        -   If `true`, returns the damage divided by the value of the `minecraft:max_damage` component, clamped to `0..1`
        -   If `false`, returns the damage, clamped to `0..max_damage`

##### `minecraft:time` Numeric Property

-   Returns an aspect of day time (like used for Clocks), scaled to `0..1`
-   Fields:
    -   `wobble` - If `true`, the value will oscillate for some time around target before settling, default: `true`
    -   `source` - The time source, possible values:
        -   `daytime` - Time of day
        -   `moon_phase` - Moon phase
        -   `random` - Random value

##### `minecraft:use_cycle` Numeric Property

-   Returns the remaining use ticks, modulo `period`
-   Fields:
    -   `period` - Positive float, default `1.0`

##### `minecraft:use_duration` Numeric Property

-   Returns item use ticks
-   Fields:
    -   `remaining` - Boolean value determining if the used or remaining ticks should be returned, default: `false`
        -   If `true`, the returned value is the remaining use ticks
        -   If `false`, the returned value is the ticks so far

#### `minecraft:empty` Item Model Type

-   Does not render anything
-   No fields

#### `minecraft:bundle/selected_item` Item Model Type

-   Renders the selected stack in the `minecraft:bundle_contents` component, if present
-   Renders nothing if the component is missing
-   No fields

## Fixed bugs in 1.21.4

-   [MC-212](https://bugs.mojang.com/browse/MC-212) Fall damage is ignored for a couple of seconds when reloading into LAN or singleplayer worlds
-   [MC-10025](https://bugs.mojang.com/browse/MC-10025) Burn time indicator of a furnace not working correctly after reloading the world
-   [MC-12829](https://bugs.mojang.com/browse/MC-12829) Flying through climbable blocks in creative mode slows you down
-   [MC-16132](https://bugs.mojang.com/browse/MC-16132) Cave carvers don't cut through snow blocks
-   [MC-21650](https://bugs.mojang.com/browse/MC-21650) Player is immune to damage for a few seconds after saving the world and returning
-   [MC-49071](https://bugs.mojang.com/browse/MC-49071) The title of written books is not displayed in item frames unless renamed with anvils
-   [MC-50614](https://bugs.mojang.com/browse/MC-50614) Villager trading window is not closed when villager leaves interaction range
-   [MC-55347](https://bugs.mojang.com/browse/MC-55347) Title with long duration shows in other world
-   [MC-59308](https://bugs.mojang.com/browse/MC-59308) Dark/pale oak leaves sometimes do not generate centered on the tree
-   [MC-65931](https://bugs.mojang.com/browse/MC-65931) The pick block function doesn't work with entities while in survival or adventure mode
-   [MC-71990](https://bugs.mojang.com/browse/MC-71990) The 'Hat' layer of a player skin is not shown in the tab list under certain conditions
-   [MC-72846](https://bugs.mojang.com/browse/MC-72846) Altering the time of day using commands is delayed
-   [MC-73784](https://bugs.mojang.com/browse/MC-73784) Players cannot see through ice when stuck inside of it
-   [MC-74408](https://bugs.mojang.com/browse/MC-74408) The brewing stand GUI does not have container sprites for the fuel and potion output slots
-   [MC-86153](https://bugs.mojang.com/browse/MC-86153) Ctrl Pick Block gives new item even if picked item already exists in inventory
-   [MC-86455](https://bugs.mojang.com/browse/MC-86455) Pick-block creates ghost items in Creative when hotbar is full
-   [MC-99848](https://bugs.mojang.com/browse/MC-99848) Sprinting isn't canceled upon receiving the blindness effect
-   [MC-100830](https://bugs.mojang.com/browse/MC-100830) Horses glitch out and warning is logged in console when climbing up stairs
-   [MC-111516](https://bugs.mojang.com/browse/MC-111516) Player flickers/turns invisible when flying at high speeds
-   [MC-128225](https://bugs.mojang.com/browse/MC-128225) '/data remove' can't remove the NBT "CustomName"
-   [MC-129888](https://bugs.mojang.com/browse/MC-129888) Naturally-generated seagrass and kelp destroys ice
-   [MC-134002](https://bugs.mojang.com/browse/MC-134002) Blocks at y=-64 don't render on a map
-   [MC-138100](https://bugs.mojang.com/browse/MC-138100) /data remove doesn't work for the Jukebox's RecordItem tag
-   [MC-150224](https://bugs.mojang.com/browse/MC-150224) Rabbits can occasionally get stuck on the edges of blocks
-   [MC-158205](https://bugs.mojang.com/browse/MC-158205) Ender Dragon doesn't take damage from melee attacks unless hit a certain way
-   [MC-158872](https://bugs.mojang.com/browse/MC-158872) Models use model of last matched predicate, not closest match
-   [MC-159508](https://bugs.mojang.com/browse/MC-159508) Ctrl + Pick block on beehives and nests does not copy their honey levels
-   [MC-160001](https://bugs.mojang.com/browse/MC-160001) Skulls, signs, hanging signs, banners and decorated pots have no breaking/sprinting particles
-   [MC-160051](https://bugs.mojang.com/browse/MC-160051) Players can prevent fire damage by reloading world/re-joining server
-   [MC-165778](https://bugs.mojang.com/browse/MC-165778) Maps ignore blocks at the lowest block position (y = -64 in the Overworld) with no block above
-   [MC-166072](https://bugs.mojang.com/browse/MC-166072) Custom Trident model ignores "layer0" and "elements" section
-   [MC-166614](https://bugs.mojang.com/browse/MC-166614) Advancements menu doesn't render titles fully when they're longer than roughly 30 characters
-   [MC-177078](https://bugs.mojang.com/browse/MC-177078) Sound event minecraft:entity.minecart.inside does not have an associated subtitle
-   [MC-177082](https://bugs.mojang.com/browse/MC-177082) block.\[block type\].fall sounds have no subtitles
-   [MC-177084](https://bugs.mojang.com/browse/MC-177084) Ambient sounds when flying with elytra have no subtitles
-   [MC-177091](https://bugs.mojang.com/browse/MC-177091) Skeleton horse underwater jump sound has no subtitle
-   [MC-179815](https://bugs.mojang.com/browse/MC-179815) Data command doesn't remove leash from a mob
-   [MC-181438](https://bugs.mojang.com/browse/MC-181438) Elytra visual shuddering when using slow falling
-   [MC-186105](https://bugs.mojang.com/browse/MC-186105) Rain particles look lighter than they should with graphics set to Fabulous!
-   [MC-186341](https://bugs.mojang.com/browse/MC-186341) Command autocomplete doesn't consider parts after a slash
-   [MC-189612](https://bugs.mojang.com/browse/MC-189612) When switching gamemode from survival to spectator using F3 + F4, the player's breathing does not reset.
-   [MC-191096](https://bugs.mojang.com/browse/MC-191096) Fences and walls can no longer be placed in invalid block states by using /setblock or /fill
-   [MC-191698](https://bugs.mojang.com/browse/MC-191698) Cannot set "shape" block state of stairs with /setblock
-   [MC-192498](https://bugs.mojang.com/browse/MC-192498) /fill and /setblock cannot set different directional block states of several blocks, such as glass panes and iron bars
-   [MC-192791](https://bugs.mojang.com/browse/MC-192791) Doors' block states cannot be set if another door half exists
-   [MC-192943](https://bugs.mojang.com/browse/MC-192943) Cannot set the in\_wall block state of fence gates with /setblock or /fill
-   [MC-192956](https://bugs.mojang.com/browse/MC-192956) Cannot setblock chest type other than single without other adjacent chest
-   [MC-192959](https://bugs.mojang.com/browse/MC-192959) Cannot setblock a directional state on redstone wire nor tripwire
-   [MC-193176](https://bugs.mojang.com/browse/MC-193176) Most mobs with CanPickUpLoot prefer swords over axes and will downgrade their weapon
-   [MC-193313](https://bugs.mojang.com/browse/MC-193313) Mob item pick up behavior is not distinct resulting in mobs constantly dropping and picking up items
-   [MC-193315](https://bugs.mojang.com/browse/MC-193315) /setblock and /fill resets the instrument block state of note blocks
-   [MC-193336](https://bugs.mojang.com/browse/MC-193336) Heads/skulls don't render when held by an enderman or as block display entities
-   [MC-197857](https://bugs.mojang.com/browse/MC-197857) Villagers trying to claim claimed beds
-   [MC-200508](https://bugs.mojang.com/browse/MC-200508) No subtitle for fish swim
-   [MC-201940](https://bugs.mojang.com/browse/MC-201940) After dying, Ender Dragon body part hitboxes do not move upwards with the main hitbox
-   [MC-202250](https://bugs.mojang.com/browse/MC-202250) Sprinting particles appear when sprinting inside of boats in shallow water
-   [MC-203146](https://bugs.mojang.com/browse/MC-203146) No subtitle for item.crossbow.loading\_middle
-   [MC-204124](https://bugs.mojang.com/browse/MC-204124) Underwater minecart riding sound does not have a subtitle
-   [MC-205074](https://bugs.mojang.com/browse/MC-205074) Rain and snow are not affected by the fog from powder snow when using the "Fabulous!" graphic setting
-   [MC-206684](https://bugs.mojang.com/browse/MC-206684) Spyglass particles have no associated texture
-   [MC-207605](https://bugs.mojang.com/browse/MC-207605) /data remove entity \[tamed wolf\] Owner does not remove ownership of the wolf
-   [MC-215992](https://bugs.mojang.com/browse/MC-215992) Inconsistency with blackstone and stone pressure plate drops compared to buttons
-   [MC-217515](https://bugs.mojang.com/browse/MC-217515) Particle effects are brighter using Fabulous! graphics setting
-   [MC-218873](https://bugs.mojang.com/browse/MC-218873) Lanterns and soul lanterns require a pickaxe to drop despite being able to break the block on which they are mounted and them drop
-   [MC-222795](https://bugs.mojang.com/browse/MC-222795) Daylight detector can be ctrl + pick-block'ed with NBT data despite being unable to store inverted: true state
-   [MC-224763](https://bugs.mojang.com/browse/MC-224763) Fireworks are not affected by the fog from powder snow or lava when using the "Fabulous!" graphic setting
-   [MC-225367](https://bugs.mojang.com/browse/MC-225367) Magma Cube's layers UV mapping overlaps
-   [MC-229142](https://bugs.mojang.com/browse/MC-229142) Spyglass texture doesn't allow override through resource pack
-   [MC-236295](https://bugs.mojang.com/browse/MC-236295) The game does not report absent particle texture references in models to the output log
-   [MC-248264](https://bugs.mojang.com/browse/MC-248264) /data remove can't remove ArmorItems
-   [MC-249079](https://bugs.mojang.com/browse/MC-249079) Sculk veins are not mirrored correctly from behind
-   [MC-254356](https://bugs.mojang.com/browse/MC-254356) Dying to a minecart with TNT ignited by a blaze fireball doesn't count as the blaze's kill
-   [MC-255254](https://bugs.mojang.com/browse/MC-255254) /setblock can't place snowy grass blocks
-   [MC-256649](https://bugs.mojang.com/browse/MC-256649) Hanging signs aren't rendered when held by endermen or as block display entities
-   [MC-256822](https://bugs.mojang.com/browse/MC-256822) Advancement description text cuts words in weird places if title is too short
-   [MC-260216](https://bugs.mojang.com/browse/MC-260216) Decorated pots aren't rendered when held by endermen or as block display entities
-   [MC-264541](https://bugs.mojang.com/browse/MC-264541) Nine\_sliced sprite glitch
-   [MC-264963](https://bugs.mojang.com/browse/MC-264963) Players jitter and land slightly too high up when landing on powder snow while wearing leather boots
-   [MC-265033](https://bugs.mojang.com/browse/MC-265033) Slots with item outline textures behave inconsistently when items are placed inside of these slots
-   [MC-265305](https://bugs.mojang.com/browse/MC-265305) Unused pixels in magmacube.png UV texture map & Used section removed in previous fix
-   [MC-265637](https://bugs.mojang.com/browse/MC-265637) /execute on origin doesn't work on Area Effect Cloud's owner after rejoining
-   [MC-265788](https://bugs.mojang.com/browse/MC-265788) The "Start free Snapshot Realm" element can be selected or remain selected causing its tooltip to erroneously be visible when other interfaces are open
-   [MC-266019](https://bugs.mojang.com/browse/MC-266019) Large bold text can have gaps in the middle of characters
-   [MC-266572](https://bugs.mojang.com/browse/MC-266572) When the experience orb is hit by a wind charge, the physical collision is much more lagged compared to the item
-   [MC-266991](https://bugs.mojang.com/browse/MC-266991) Exposed Copper Bulb has inconsistent pixels
-   [MC-267095](https://bugs.mojang.com/browse/MC-267095) Nether Brick block texture misalignment
-   [MC-267192](https://bugs.mojang.com/browse/MC-267192) "download.pack.failed" string exceeds the prompt box when the Force Unicode Font is turned off
-   [MC-267343](https://bugs.mojang.com/browse/MC-267343) Sprinting isn't canceled upon riding entities
-   [MC-267730](https://bugs.mojang.com/browse/MC-267730) Text wall when trying to join a server
-   [MC-267878](https://bugs.mojang.com/browse/MC-267878) Tutorial hint for movement may not fit all the required text if controls are changed
-   [MC-268364](https://bugs.mojang.com/browse/MC-268364) Wind Charges don't ignite TNT minecarts
-   [MC-268522](https://bugs.mojang.com/browse/MC-268522) The last language option is not deselected if you reach the bottom of the list and exit the menu
-   [MC-268822](https://bugs.mojang.com/browse/MC-268822) There are no shadows on text displayed within the singleplayer, multiplayer, and realms list menus
-   [MC-269145](https://bugs.mojang.com/browse/MC-269145) Wool item entities created when shearing a sheep stutter while flying
-   [MC-269616](https://bugs.mojang.com/browse/MC-269616) Telemetry Data scroll bar does not have a background
-   [MC-269743](https://bugs.mojang.com/browse/MC-269743) Layer material entry text on the superflat customization screen is not vertically centered
-   [MC-269749](https://bugs.mojang.com/browse/MC-269749) Report Player scroll bar does not have a background
-   [MC-269935](https://bugs.mojang.com/browse/MC-269935) Advancement box textures use nine-slice scaling, but seemingly cannot be configured
-   [MC-270136](https://bugs.mojang.com/browse/MC-270136) Thrown projectiles with custom\_model\_data do not maintain proper particles when breaking
-   [MC-270529](https://bugs.mojang.com/browse/MC-270529) Air's model does not define a particle texture, causing issues
-   [MC-271169](https://bugs.mojang.com/browse/MC-271169) The "Isn't It Scute?" advancement is granted when unleashing an armadillo while holding a brush
-   [MC-271218](https://bugs.mojang.com/browse/MC-271218) Empty Offers:{} NBT doesn't disable trades anymore
-   [MC-271786](https://bugs.mojang.com/browse/MC-271786) Empty block states in noise\_provider does not cause validation to fail, causing crash
-   [MC-272062](https://bugs.mojang.com/browse/MC-272062) Dimension padding doesn't affect the start piece
-   [MC-272105](https://bugs.mojang.com/browse/MC-272105) Decorated Pot is missing the "contents" implicit data component type
-   [MC-272245](https://bugs.mojang.com/browse/MC-272245) You can get the advancement "Shear Brilliance" when you use shears on a leashed wolf
-   [MC-272923](https://bugs.mojang.com/browse/MC-272923) 1.21 main menu panorama missing ladder
-   [MC-272994](https://bugs.mojang.com/browse/MC-272994) Allays assigned to a player can be set on fire with sweeping and fire aspect
-   [MC-273407](https://bugs.mojang.com/browse/MC-273407) Block entity items with custom block states keep them as components when placed
-   [MC-273450](https://bugs.mojang.com/browse/MC-273450) Mobs with CanPickUpLoot:1b behave inconsistently with the mace / trident
-   [MC-273522](https://bugs.mojang.com/browse/MC-273522) Mobs with CanPickUpLoot no longer pick up enchanted items after picking up an unenchanted item
-   [MC-273635](https://bugs.mojang.com/browse/MC-273635) Trial spawners forget their designated mob when placed by player out of creative mode, assigned by spawn eggs
-   [MC-273710](https://bugs.mojang.com/browse/MC-273710) Wild foxes "trust" the player after being leashed to a fence
-   [MC-273861](https://bugs.mojang.com/browse/MC-273861) When a leashed bee enters a hive, the leash disappears
-   [MC-274268](https://bugs.mojang.com/browse/MC-274268) Trial Spawner keeps flashing after cooldown ends
-   [MC-274571](https://bugs.mojang.com/browse/MC-274571) The advancement "Little Sniffs" can be obtained by unleashing the snifflet and not feeding it
-   [MC-275011](https://bugs.mojang.com/browse/MC-275011) Instant mine does not work when standing inside of cobwebs
-   [MC-275274](https://bugs.mojang.com/browse/MC-275274) Missing sound for event: minecraft:block.spawner.fall
-   [MC-275338](https://bugs.mojang.com/browse/MC-275338) Sprint particles can be seen if you mount a minecart (with no rail below it) while running
-   [MC-275339](https://bugs.mojang.com/browse/MC-275339) Bad contrast in bundle interface with dark blocks
-   [MC-275917](https://bugs.mojang.com/browse/MC-275917) Consumable blocking animation is broken in first person
-   [MC-275952](https://bugs.mojang.com/browse/MC-275952) Riding a minecart above the water with Frost Walker boots on will also give the Frost Walker effect
-   [MC-276110](https://bugs.mojang.com/browse/MC-276110) honey\_level model predicate range is 1 for level 5 and 0 for levels 1-4
-   [MC-276115](https://bugs.mojang.com/browse/MC-276115) New Bee Nest and Beehive item models don't use the block parent
-   [MC-276123](https://bugs.mojang.com/browse/MC-276123) Display entity shadow\_radius updates for all display entities
-   [MC-276329](https://bugs.mojang.com/browse/MC-276329) Bundles move up and down slightly when right-clicked
-   [MC-276389](https://bugs.mojang.com/browse/MC-276389) The "Can hold a mixed stack of items" text within bundle tooltips doesn't have a shadow
-   [MC-276412](https://bugs.mojang.com/browse/MC-276412) Custom item models set to a shield and various other items all create invisible items
-   [MC-276529](https://bugs.mojang.com/browse/MC-276529) Converting a villager into a witch does not close the trading GUI
-   [MC-276654](https://bugs.mojang.com/browse/MC-276654) item\_model item component breaks on trident
-   [MC-276697](https://bugs.mojang.com/browse/MC-276697) Neutral mobs don't pathfind correctly to their target after being unleashed
-   [MC-276728](https://bugs.mojang.com/browse/MC-276728) Tridents and spyglasses appear dark in the inventory if given a custom item model for a block
-   [MC-276730](https://bugs.mojang.com/browse/MC-276730) Bundles appear dark in the inventory if given a custom item model for a block and then scrolled through
-   [MC-276731](https://bugs.mojang.com/browse/MC-276731) Items which use entity models will not render another entity model if specified via item model component
-   [MC-276732](https://bugs.mojang.com/browse/MC-276732) Colors will carry over from item ID to target model
-   [MC-276764](https://bugs.mojang.com/browse/MC-276764) Eggs with custom models use the particles from that model, but snowballs do not
-   [MC-276769](https://bugs.mojang.com/browse/MC-276769) Missing texture when throwing eggs with certain template models
-   [MC-276771](https://bugs.mojang.com/browse/MC-276771) Missing texture when a damageable item with one of several template models is destroyed
-   [MC-276794](https://bugs.mojang.com/browse/MC-276794) There are no shadows on text displayed within the social interactions list menu
-   [MC-276799](https://bugs.mojang.com/browse/MC-276799) There are no shadows on text displayed within the superflat customization or preset lists
-   [MC-276828](https://bugs.mojang.com/browse/MC-276828) Minecraft no longer prints an error to the game log when a model fails to define a texture
-   [MC-276847](https://bugs.mojang.com/browse/MC-276847) Bundles given the model of a different bundle will not preserve their color when scrolled through
-   [MC-276962](https://bugs.mojang.com/browse/MC-276962) JVM crash occurs when minimizing maximized window
-   [MC-276969](https://bugs.mojang.com/browse/MC-276969) TNT Minecarts with explosion\_power set to 0 can still break blocks
-   [MC-276986](https://bugs.mojang.com/browse/MC-276986) Missing pixel in open bundle texture
-   [MC-277042](https://bugs.mojang.com/browse/MC-277042) Blue and Red open bundle are inconsistent with the other colors
-   [MC-277066](https://bugs.mojang.com/browse/MC-277066) Creakings do not show particles leading to the creaking heart if Particles are set to Minimal
-   [MC-277071](https://bugs.mojang.com/browse/MC-277071) Middle clicking on a creaking spawned naturally through a creaking heart doesn't give you the spawn egg
-   [MC-277072](https://bugs.mojang.com/browse/MC-277072) You can use bone meal on pale moss carpets in situations where nothing grows
-   [MC-277074](https://bugs.mojang.com/browse/MC-277074) The entity shadows of creakings are slightly too large in relation to the size of their models
-   [MC-277076](https://bugs.mojang.com/browse/MC-277076) Pale hanging moss doesn't have an assigned tool
-   [MC-277082](https://bugs.mojang.com/browse/MC-277082) Creakings take knockback from wind charges
-   [MC-277092](https://bugs.mojang.com/browse/MC-277092) The eyes of creakings aren't visible when creakings have the invisibility effect
-   [MC-277094](https://bugs.mojang.com/browse/MC-277094) Pale oak hanging sign uses a totally different palette to the rest of the wood set
-   [MC-277101](https://bugs.mojang.com/browse/MC-277101) Destroying a creaking heart with player-activated TNT does not grant the Monster Hunter advancement
-   [MC-277113](https://bugs.mojang.com/browse/MC-277113) Pale oak sign item and block texture is inconsistent with the other signs
-   [MC-277115](https://bugs.mojang.com/browse/MC-277115) Creaking mob can spawn inside block
-   [MC-277123](https://bugs.mojang.com/browse/MC-277123) You can get soft locked if a creaking falls in a hole with you
-   [MC-277129](https://bugs.mojang.com/browse/MC-277129) The Creaking "slides" on the ground when not aggro towards the player
-   [MC-277132](https://bugs.mojang.com/browse/MC-277132) Pale oak sign item textures are inconsistent
-   [MC-277134](https://bugs.mojang.com/browse/MC-277134) Pale chest boat item is incorrect
-   [MC-277140](https://bugs.mojang.com/browse/MC-277140) The statistics screen does not visually differentiate the creaking and creaking\_transient entities
-   [MC-277145](https://bugs.mojang.com/browse/MC-277145) The 2 brightest pixel colors on pale oak boat items are wrong
-   [MC-277149](https://bugs.mojang.com/browse/MC-277149) Creakings are affected by knockback from mace smash attacks
-   [MC-277152](https://bugs.mojang.com/browse/MC-277152) The statistic for killing a creaking doesn't increment when breaking a creaking heart
-   [MC-277154](https://bugs.mojang.com/browse/MC-277154) Sculk sensors are not activated upon creakings dying through their creaking hearts being destroyed
-   [MC-277164](https://bugs.mojang.com/browse/MC-277164) Music plays in the pale garden
-   [MC-277169](https://bugs.mojang.com/browse/MC-277169) Creaking moves while a player is looking at it while moving a certain way and looking through pale moss
-   [MC-277202](https://bugs.mojang.com/browse/MC-277202) Differences in the highlight effect of empty slot outlines in the GUI
-   [MC-277213](https://bugs.mojang.com/browse/MC-277213) Subtitles for cave sounds, creaking heart idle sounds, and pale hanging moss idle sounds are identical but are shown separately
-   [MC-277214](https://bugs.mojang.com/browse/MC-277214) The sound event associated with the "Creaking sees player" subtitle doesn't exist
-   [MC-277226](https://bugs.mojang.com/browse/MC-277226) Creakings not linked to any heart display wrong subtitles when attacked with non-damaging projectiles
-   [MC-277243](https://bugs.mojang.com/browse/MC-277243) Creakings take knockback from Punch bows
-   [MC-277264](https://bugs.mojang.com/browse/MC-277264) The Creaking can be knocked back by zoglins
-   [MC-277268](https://bugs.mojang.com/browse/MC-277268) Pufferfish have no hit delay on creakings; they make a loud buzzing noise constantly
-   [MC-277271](https://bugs.mojang.com/browse/MC-277271) Sniffers can't dig into pale moss
-   [MC-277275](https://bugs.mojang.com/browse/MC-277275) Crash upon loading chunks when teleporting
-   [MC-277305](https://bugs.mojang.com/browse/MC-277305) Creakings are able to be pushed around by entities and players when standing on soul sand and mud
-   [MC-277363](https://bugs.mojang.com/browse/MC-277363) Creakings cannot rotate their heads independently from their bodies
-   [MC-277368](https://bugs.mojang.com/browse/MC-277368) The "message(s) selected" text within the "Select Chat Messages to Report" menu is positioned too close to the header separator
-   [MC-277373](https://bugs.mojang.com/browse/MC-277373) There are no shadows on text used to display the names of categories within the key binds menu
-   [MC-277374](https://bugs.mojang.com/browse/MC-277374) There are no shadows on text used to display the names of lists within the resource pack and data pack menus
-   [MC-277387](https://bugs.mojang.com/browse/MC-277387) Evokers run away from creakings faster than other illagers
-   [MC-277399](https://bugs.mojang.com/browse/MC-277399) The hand animation isn't played when constantly emptying items from bundles
-   [MC-277408](https://bugs.mojang.com/browse/MC-277408) There are no shadows on text used to display the description of report categories within the "Select Report Category" menu
-   [MC-277413](https://bugs.mojang.com/browse/MC-277413) The empty state sprite for the oxygen bar takes a little longer to start displaying compared to Bedrock Edition
-   [MC-277440](https://bugs.mojang.com/browse/MC-277440) There are no shadows on text used to display the speed at which a world is being uploaded within the realms menu
-   [MC-277441](https://bugs.mojang.com/browse/MC-277441) There are no shadows on text used to display the start date and time left of your realm subscription within the realms menu
-   [MC-277443](https://bugs.mojang.com/browse/MC-277443) There are no shadows on text displayed when connecting to realms
-   [MC-277444](https://bugs.mojang.com/browse/MC-277444) There are no shadows on text used to display the names of text boxes within the realms settings menu
-   [MC-277477](https://bugs.mojang.com/browse/MC-277477) There are no shadows on text used to display the description of advancements within the advancements menu
-   [MC-277478](https://bugs.mojang.com/browse/MC-277478) The "Layer Material" and "Height" text within the "Superflat Customization" menu is positioned too close to the header separator
-   [MC-277479](https://bugs.mojang.com/browse/MC-277479) There are no shadows on text used to display the names of game rules within the game rules menu
-   [MC-277480](https://bugs.mojang.com/browse/MC-277480) There are no shadows on placeholder text displayed within the "Please describe what happened" box within the reporting menu
-   [MC-277499](https://bugs.mojang.com/browse/MC-277499) Most empty slot icons ignore "scaling" parameter in mcmeta files
-   [MC-277510](https://bugs.mojang.com/browse/MC-277510) When grass or mycelium grows under powder snow the grass is not snowy
-   [MC-277533](https://bugs.mojang.com/browse/MC-277533) Bundles can remain in the open state when taken out from saved hotbars
-   [MC-277549](https://bugs.mojang.com/browse/MC-277549) Arrows summoned with custom motion don't render correctly
-   [MC-277557](https://bugs.mojang.com/browse/MC-277557) Creaking Heart has inconsistent and miscolored pixels
-   [MC-277617](https://bugs.mojang.com/browse/MC-277617) The base damage of the Power enchantment was reduced in 1.21
-   [MC-277651](https://bugs.mojang.com/browse/MC-277651) Arrows and tridents glitch when in an explosion or wind charge burst
-   [MC-277657](https://bugs.mojang.com/browse/MC-277657) Arrows are not correctly affected by rising bubble columns
-   [MC-277658](https://bugs.mojang.com/browse/MC-277658) Tridents glitch up and down in rising bubble columns
-   [MC-277682](https://bugs.mojang.com/browse/MC-277682) Arrows and tridents glitch after shooting/throwing them onto magma/soul sand blocks underwater
-   [MC-277742](https://bugs.mojang.com/browse/MC-277742) Creakings activate for a brief moment when switching from Creative to Spectator mode
-   [MC-277754](https://bugs.mojang.com/browse/MC-277754) Chunks on the corner of the rendering distance are not synchronized between client and server for the terrain
-   [MC-277776](https://bugs.mojang.com/browse/MC-277776) Baby cats and ocelots size is changed
-   [MC-277815](https://bugs.mojang.com/browse/MC-277815) Creakings on a team can still be observed and stopped by teammate players
-   [MC-277833](https://bugs.mojang.com/browse/MC-277833) Creakings can attack players in the same team as them
-   [MC-277871](https://bugs.mojang.com/browse/MC-277871) Creaking Hearts do not have a unique place sound
-   [MC-277889](https://bugs.mojang.com/browse/MC-277889) Villagers' iron golem detection range is increased for villagers upgraded from 1.21.1 or earlier
-   [MC-277892](https://bugs.mojang.com/browse/MC-277892) Clicking on the selected recipe a second time in the stonecutter GUI turns the result item into a ghost item
-   [MC-277916](https://bugs.mojang.com/browse/MC-277916) Containers are locked when upgrading a world from certain versions
-   [MC-277925](https://bugs.mojang.com/browse/MC-277925) Resin Brick Stairs are not part of the #stairs block and item tags
-   [MC-277926](https://bugs.mojang.com/browse/MC-277926) Resin Brick Slab is not part of the #slab block and item tags
-   [MC-277929](https://bugs.mojang.com/browse/MC-277929) The game crashes when attempting to use the void preset
-   [MC-277930](https://bugs.mojang.com/browse/MC-277930) Eyeblossom subtitles are inverted
-   [MC-277931](https://bugs.mojang.com/browse/MC-277931) Incorrect display on the map of the flower Closed and Open Eyeblossom
-   [MC-277932](https://bugs.mojang.com/browse/MC-277932) Resin Clump is not part of the #replaceable block tag
-   [MC-277933](https://bugs.mojang.com/browse/MC-277933) Smithing Table doesn't show a Clump icon for ingredient slot
-   [MC-277939](https://bugs.mojang.com/browse/MC-277939) Programmer Art's empty slot icons may not have been correctly updated for 24w44a
-   [MC-277941](https://bugs.mojang.com/browse/MC-277941) resin\_clump is not mirrored correctly from behind
-   [MC-277945](https://bugs.mojang.com/browse/MC-277945) Incorrect verb form in "Elytra swooshes" subtitle
-   [MC-277948](https://bugs.mojang.com/browse/MC-277948) Suspicious stew gives different durations of Blindness for Eyeblossom and Azure Bluet
-   [MC-277950](https://bugs.mojang.com/browse/MC-277950) Open potted eyeblossom is shaded (flower\_pot\_cross\_emissive)
-   [MC-277951](https://bugs.mojang.com/browse/MC-277951) Eyeblossom is placed in an unexpected position in the Creative inventory
-   [MC-277952](https://bugs.mojang.com/browse/MC-277952) Sprinting isn't canceled upon flying with elytra
-   [MC-277954](https://bugs.mojang.com/browse/MC-277954) Creaking Heart underwater plays spawning sounds in a loop
-   [MC-277955](https://bugs.mojang.com/browse/MC-277955) Using a loom crashes the game
-   [MC-277959](https://bugs.mojang.com/browse/MC-277959) Reloading chunks can break translucency sorting
-   [MC-277961](https://bugs.mojang.com/browse/MC-277961) Experience orbs incorrectly bounce up
-   [MC-277962](https://bugs.mojang.com/browse/MC-277962) Chiseled Resin Bricks have a miscolored pixel
-   [MC-277964](https://bugs.mojang.com/browse/MC-277964) Resin is not generated when a creaking is attacked by a wolf owned by a player
-   [MC-277966](https://bugs.mojang.com/browse/MC-277966) Creaking does not generate resin from player-caused explosions
-   [MC-277967](https://bugs.mojang.com/browse/MC-277967) The game crashes when certain explosions occur near a creaking in its death animation
-   [MC-277970](https://bugs.mojang.com/browse/MC-277970) Hanging signs don't display chains when attached to the side of a block
-   [MC-277972](https://bugs.mojang.com/browse/MC-277972) You can no longer swim when crouched under a slab
-   [MC-277977](https://bugs.mojang.com/browse/MC-277977) Teleporting large distances whilst gliding prevents the world from loading and player model glitchiness
-   [MC-277983](https://bugs.mojang.com/browse/MC-277983) Naturally-spawned creaking hearts drop experience when broken in Creative mode
-   [MC-277994](https://bugs.mojang.com/browse/MC-277994) Picking a decorated pot or a shulker box always keeps its container data
-   [MC-278002](https://bugs.mojang.com/browse/MC-278002) Sculk sensors are not activated upon resin clumps spawning from creaking hearts
-   [MC-278004](https://bugs.mojang.com/browse/MC-278004) Hitting a creaking heart with a wind charge kills the creaking
-   [MC-278028](https://bugs.mojang.com/browse/MC-278028) Using items underwater can force you to exit swimming mode
-   [MC-278058](https://bugs.mojang.com/browse/MC-278058) Breeze entity model rods no longer spin around when it is moving
-   [MC-278071](https://bugs.mojang.com/browse/MC-278071) "minecraft.used:minecraft.trident" doesn't increase when throwing a trident
-   [MC-278102](https://bugs.mojang.com/browse/MC-278102) Recipe book icons no longer visually indicate that an item has multiple recipes
-   [MC-278124](https://bugs.mojang.com/browse/MC-278124) Resin clumps are not waterloggable
-   [MC-278137](https://bugs.mojang.com/browse/MC-278137) Inconsistent behavior occurs when the "Sprint" option is set to "Hold" while riding camels and when players sprint normally
-   [MC-278257](https://bugs.mojang.com/browse/MC-278257) Oxygen bar animation can be interrupted by applying water breathing

---

