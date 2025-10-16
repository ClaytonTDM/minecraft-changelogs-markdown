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

# Minecraft: Java Edition 1.21.4

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

# Minecraft: Java Edition 1.21.3

Coming in hot with a hotfix, here's Minecraft 1.21.3 with a fix for a critical issue affecting Realms with Resource Packs enabled.

This version also fixes an upgrade problem with all Salmon turning small. This version will upgrade any small Salmon from previous versions into medium variants, including any from 1.21.2.

## Fixed bugs in 1.21.3

-   [MC-277791](https://bugs.mojang.com/browse/MC-277791) - Attempting to join a Realm with a Resource Pack enabled fails with an error
-   [MC-277779](https://bugs.mojang.com/browse/MC-277779) - Salmon from 1.21.1 or before shrink when updating to 1.21.2

---

# Minecraft: Java Edition 1.21.2

We're now releasing the Bundles of Bravery game drop for Java Edition, featuring space-saving Bundles and the addition of Hardcore Mode to Realms!

This game drop is all about embarking on a new adventure, collecting everything you can along the way, and definitely not dying. Together with these additions, we've also added baby variants of Dolphins and Squids, given Redstone Torches an updated look, optimized the game, and fixed over 300 bugs! To top it off, there's also a heap of technical changes, bringing even more control to creators.

Goodness, that was a lot, wasn't it? Perhaps we should've stuffed it all into a Bundle?

## New Features

-   Added Bundles

![An assortment of differently dyed bundles laying on the grass in a forest.](https://launchercontent.mojang.com/v2/images/1.21.2bundles.jpg)

### Bundles

-   A Bundle is an item that can pack different items together into the same stack
-   A Bundle only fits one stack (usually 64 items) but it can be a mixture of many different item types
-   You can insert items into a Bundle directly in the inventory
-   Bundles have a tooltip that shows the items inside
    -   If a Bundle has less than 12 item types inside, the tooltip will show all of them
    -   Otherwise, the tooltip will show the top three rows of items (at least 8 item types) and the others will be hidden below
-   You can select any of the visible items to pull out of the Bundle
    -   Right-click to take the first item
    -   Use the scroll wheel to select a different item, then right-click to take it
-   When selecting an item to remove, the Bundle icon shows that item poking out of the Bundle
-   When holding a Bundle in hand, you can empty items onto the ground by right-clicking or holding right-click
-   The Bundle is crafted with one String above one Leather
-   The controls have changed from the original prototype:
    -   Use left-click to put an item into a Bundle
    -   Use right-click to remove the top item type from a Bundle
    -   When the Bundle tooltip is visible, use the mouse wheel to select a different item type, then use right-click to remove it

![Alex is standing on the porch of a cobblestone house reaching out their arms with a pink dyed bundle in their hand, offering it to Ari that is standing opposite them on the gravel road outside the house.](https://launchercontent.mojang.com/v2/images/1.21.2bundlegift.jpg)

## Changes

-   Enabled hardcore mode for Realms
-   Updated the world creation screen for Realms
-   Trial Chambers have been updated with new variations
-   Added baby versions of Dolphins, Squids, and Glow Squids
-   Added Salmon variants
-   Sneaking while bouncing on a Slime Block will no longer cause fall damage

![Zuri is sneaking on a line of slime blocks as Efe falls on top of another line of slime blocks a little bit further back, bouncing as they are not sneaking. Under the blocks there is a pool of lava and magma blocks.](https://launchercontent.mojang.com/v2/images/1.21.2slimeblockcrouch.jpg)

-   Tweaks to existing Blocks, Items and Entities
-   Thrown Ender Pearls now load and tick chunks
-   Banner Pattern items have new names and icons
-   Redstone Torches have been given a new look to give them a unique and distinctive identity

![Zuri and Efe are looking at a peculiar machine pushing different coloured concrete powder. In the foreground the new red stone torch model is lit up as the machine is activated.](https://launchercontent.mojang.com/v2/images/1.21.2newredstonetorches.jpg)

-   Added two new Banner Patterns: Field Masoned, and Bordure Indented
-   The distance that Bees fly as well as the cooldowns between Bee behaviors have been tweaked
-   Raider spawn logic has been updated
-   Smithing Template items are now named after their template type instead of the generic "Smithing Template" name
    -   They instead specify that they are a Smithing Template through a subtitle in the hover text
-   Equipping a Carved Pumpkin on your head now removes the player marker from other players' maps
-   Various items and blocks have had their assigned rarities changed
-   Introduced new accessibility features
-   The game will now limit the maximum frame rate when it is minimized or when the player is AFK
    -   A new video setting is introduced to configure this behavior
-   Improvements to the game's performance
-   Added language support for Tzotzil, Belarusian (Latin), and High Norwegian
-   Throwing items out of your inventory very quickly in creative mode is now throttled

### Realms

-   Now uses the normal, fully-featured world creation screen
    -   Enables game rule customization
    -   Enables data pack customization
-   The game mode for the last active world on a Realm will now be visible on the main Realms screen if applicable

#### Hardcore Mode

-   Hardcore mode is now available in Realms
-   It is accessible when creating a new world or recreating an existing one

![The player in a hardcore realm is being attacked by a zombie librarian in front of a plains village. ](https://launchercontent.mojang.com/v2/images/1.21.2hardcore.jpg)

### Tweaks to Blocks, Items and Entities

-   Wolves can now also be fed Cod, Cooked Cod, Salmon, Cooked Salmon, Tropical Fish, Pufferfish and Rabbit Stew
-   Bats can now spawn at any height, not just below sea level, as long as it is dark enough and there is a solid block to spawn on
-   Breeze no longer have a minimum distance required to attack a target
-   The portal cooldowns of vehicles and projectiles have been tweaked
    -   After using a Nether Portal, Minecarts and Boats now only need to leave the portal for 0.5 seconds to use a portal again (down from previous 15 seconds)
    -   After using a Nether Portal, projectiles such as Ender Pearls and Arrows now only need to leave the portal for 2 ticks to use a portal again (down from previous 15 seconds)
-   Projectiles such as Arrows, Tridents and Fishing Bobbers now bounce off the world border if hit
-   Being killed by a Mace smash attack now shows a new death message
-   Added unique block sounds to the Monster Spawner block
-   Enchanted Shields now have the same reduced glint as enchanted armor
-   Items that convert to another item after consumption will no longer do so in creative mode
    -   For example, a Honey Bottle will no longer add a Glass Bottle to your inventory when consumed in creative mode
-   Suspicious Stew recipes are now shown in the Recipe Book
-   Shulker Box coloring recipes are now shown in the Recipe Book
-   Shulker Box and Bundle coloring recipes no longer work when trying to apply a Dye to an item of the same color

### Trial Chambers

-   Added new variations to the hallways, including "Encounters": Short challenges leading to a larger chamber
-   Beds in intersections now have their colors randomized
-   Replaced the empty Chests at the entrance of chamber with a Hopper and Barrel

### New Mob Variation

-   Added baby versions of Dolphins, Squids, and Glow Squids
    -   Squid Spawn Eggs will only spawn adult Squids
    -   There is a 5% chance of Squids spawned in groups in the wild to be a baby
-   Salmon may now spawn as Small, Medium (current size), or Large

![From under the water, looking up towards the sky through a ravine we can see baby glow squids and baby dolphins swimming around.](https://launchercontent.mojang.com/v2/images/1.21.2babysquidsanddolphins.jpg)

### Ender Pearl Chunk Loading

-   Ender Pearls now ensure that the chunk they are in or travel into is always loaded and ticking
    -   They also load chunks when crossing to a new dimension
    -   This ensures that Ender Pearls can always land, and makes cross-dimensional Ender Pearl travelling more predictable
-   Ender Pearls now unload when a player logs out, and reappear whenever that player logs back in, similar to how ridden entities currently behave

![A stream of Ender Pearls flying between two nether portals in a crimson forest in the nether.](https://launchercontent.mojang.com/v2/images/1.21.2pearlsthroughportals.jpg)

### Banner Patterns

-   Each Banner Pattern item now includes their pattern type in their name instead of as a subtitle
    -   Unique item textures have been added to better distinguish each pattern type
-   The following Banner Patterns have been added:
    -   Field Masoned
        -   Crafted with Paper and Bricks
    -   Bordure Indented
        -   Crafted with Paper and Vines
-   The Bricks and Curved Border patterns in the Loom can no longer be accessed without the above Banner Patterns

### Bee Behavior

-   Bees now wander around randomly for less time after exiting a nest/hive
-   A Bee with a known nest or hive will now stay closer to it, reducing the distance it travels and reducing the risk of getting lost
-   Significantly increased the amount of time a Bee can take to return to a known nest/hive before it gives up trying to return home
-   Bees are now a lot less likely to get stuck when on corners or when close to a nest/hive they are trying to return to
-   Bees are also now a lot less likely to try and pathfind to a flower that it cannot reach

### Raider Spawning

-   A triggered raid will no longer start if the Raiders cannot find a place to spawn within a reasonable distance of the village they are trying to raid
-   In order for a Raid to start, Raiders must now find a place to spawn no more than 96 blocks vertically above or below the Village center
-   It is now much less likely for Raiders to not find a valid place to spawn when raiding

### User Interface

-   The Recipe Book now repeats the last selected recipe when a "selected" key is pressed (space or either enter key)
-   Updated slot highlight in the UI so that the item texture has better visibility
    -   The previous textures have been added to Programmer Art resource pack
-   Tweaked air bubbles UI
    -   Added an empty state for air bubbles along with a wobble when the player is drowning
    -   Added a popping sound when the bubbles pop in the UI

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
-   Netherite Upgrade
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
    -   We recently increased Trident's rarity up to Epic from Common, but after re-evaluating felt that it was easier to obtain than other items in the Epic category such as Heavy Cores or Elytras
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

### Accessibility

-   Added an accessibility option to make targeted block's outlines more visible

#### High Contrast Resource Pack

Added the following high contrast textures:

-   Frame and background textures for tooltips
-   Slot background and highlight textures for the Bundle tooltip

### Inactivity FPS Limit

-   The game will now limit the maximum frame rate in certain situations
-   These situations are controlled by a new Video Setting: `Reduce FPS when`
-   Possible options are:
    -   `Mimimized`
        -   Limits frame rate to 10 FPS only when the game window is minimized
    -   `AFK`
        -   Limits frame rate to 30 FPS when the game is not getting any player input for more than a minute
        -   Further limits to 10 FPS after 9 more minutes of no input
        -   Also limits to 10 FPS when the game window is minimized
-   The default is `AFK`

### Performance

-   Frame rate has been improved when using higher render distances
    -   Significantly reduced the performance impact when turning the camera
-   The performance of the server (tick rate) has been improved when using higher render distances
    -   Furthermore, the impact of loading and generating chunks on tick rate has been reduced

### Player Safety

#### Skin Reporting

-   Added reporting reason "Sexually inappropriate"
    -   This is intended for skins that are graphic in nature relating to sexual acts, sexual organs, and sexual violence
-   Removed reason "Defamation" for skins due to lack of relevance
-   Removed reason "Threat of harm to others" due to already being covered by "Harassment or bullying" reporting reason

#### Name Reporting

-   Added a text label above the description box to clarify that only the name of the player is subject to the report

## Technical Changes

-   The Data Pack version is now 57
-   Resource Pack version is now 42
-   Updates to available `server.properties` options
-   Added some information about data pack structure (for example, data-driven registries) to generated reports
-   Removed the `bundle` feature flag and built-in data pack

### `server.properties`

-   New option: `pause-when-empty-seconds` (default: `60`)
    -   When set to a positive value, causes the server to pause when no player has been online for that many seconds
-   Removed options: `spawn-animals` and `spawn-npcs`
-   Extended the `text-filtering-config` option in `server.properties` in order to support an internal migration for Realms Profanity Filtering
    -   Servers currently utilizing the `text-filtering-config` will be able to continue to do so without any changes

### Network Protocol

-   Added `minecraft:client_tick_end` serverbound packet during play phase, sent when the client finishes processing its current tick
-   Added ability for custom servers to override the order that players appear in the "tab list"
    -   This is controlled by a non-negative ordering index that is sorted highest to lowest
-   The client now shares the state of the "Particles" limiter option to be used by custom servers
-   The server will now only send known recipes to the client
-   Temporary option for ignoring connection errors on client side (`strictErrorHandling`) has been removed

## Data Pack Versions 49 through 57

-   Added new Tags
-   Changes to Commands
-   Added new `disablePlayerMovementCheck` Game Rule
-   Changes to Item Components
-   New data-driven registries for Goat Horn instruments and Trial Spawner configurations
-   Added new fields to painting variant definitions
-   Added new functionality to Enchantment Effects
-   The `crafting_special_suspiciousstew` recipe type has been removed
-   Recipe ingredient format has been simplified
-   Added new Loot Tables
-   Added new Advancement Predicates
-   Changes to Advancement Triggers
-   Expanded the functionality of the `Lock` property on Containers
-   Added optional field `explosion_power` to `tnt` and `tnt_minecart` entity types
    -   Defaults to `4`
    -   For TNT Minecarts, the value is added to speed-based explosion power
-   `boat` and `chest_boat` entity types have been split into separate types
-   Changes to Attributes
-   Entities' rotation on the x-axis is now clamped between -90 and 90
-   Added new Particles and updated some Particle formats

### Tags

#### Block Tags

-   `bats_spawnable_on`: Blocks that Bats can spawn on

#### Item Tags

-   `furnace_minecart_fuel`: Items that can be used to refuel a Furnace Minecart
-   `villager_picks_up`: Items that a Villager will try to pick up from the ground
-   Added new tags to control which items can be used to craft and repair various tool sets:
    -   `wooden_tool_materials`
    -   `iron_tool_materials`
    -   `gold_tool_materials`
    -   `diamond_tool_materials`
    -   `netherite_tool_materials`
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
-   `duplicates_allays`: Items that can be used to duplicate Allays when dancing
-   `bundles`: All Bundle Items
-   `panda_eats_from_ground`: Items that a Panda will pick up from the ground and eat
-   `brewing_fuel`: Items that can be used as fuel in a Brewing Stand
-   `map_invisibility_equipment`: Items that can be equipped to hide the player marker on other players maps
-   `gaze_disguise_equipment`: Items that can be equipped to disguise the player looking for other mobs

### Commands

-   Invalid `selector` patterns in Chat Components will now cause commands to fail to parse, instead of resolving to an empty string
-   The `loot` command will now return an error when trying to drop from a block without a loot table (such as `air`)
-   You can no longer ride Leash Knots, Lighting Bolts and Fishing Bobbers with the `ride` command
-   Added the `rotate` command

#### `rotate` Command

New command to rotate an entity.

Syntax:

    rotate <target> <rotation>
    rotate <target> facing <facingLocation>
    rotate <target> facing entity <facingTarget> [<facingAnchor>]
    

Parameters:

-   `target`: The entity to rotate
-   `rotation`: Two rotation values in degrees denoting horizontal and vertial rotation
    -   May use relative (`~`) coordinate notation to specify rotation relative to current context rotation
-   `facingLocation`: The coordinates of a location in the world for the rotated entity to face
-   `facingTarget`: An entity for the rotated entity to face
-   `facingAnchor`: Specifies the anchor of the `facingTarget` entity to rotate towards - `feet` or `eyes` (by default `feet`)

Note: parameters have the same meaning as in the `teleport` command.

### Game Rules

#### `disablePlayerMovementCheck`

-   When true, disables player movement speed restriction
    -   Default value: `false`
    -   This behaves the same as the `disableElytraMovementCheck` rule, but applies irrespective of flying with Elytra

### Changed Item Components

#### `minecraft:food`

-   The food component has been changed to become a data container which only holds the food stats applied when the item is consumed
    -   This component no longer gives the item the ability to be consumed, and must be done instead with the new `consumable` component
-   Format: object with fields
    -   `nutrition`: Non-negative integer, the amount of nutrition applied when consumed
    -   `saturation`: Float, the amount of saturation applied when consumed
    -   `can_always_eat`: Boolean, whether it can be consumed even when the user is not hungry
        -   Default value: `false`

#### `minecraft:fire_resistant` -> `minecraft:damage_resistant`

-   Has a new field: `types`, hash-prefixed damage type tag
    -   Items with this component, when in entity form, will be resistant to the damage types included in the tag
    -   This component also affects whether the equipped item will be damaged when the wearer is hurt by a given damage type

#### `minecraft:item_name`

-   This component is now always present on every item
-   Name provided by this component always has the lowest priority
    -   That means it will be overriden by components such as `minecraft:potion_contents` or `minecraft:written_book_content`

#### `minecraft:potion_contents`

-   Added an optional string field: `custom_name`
    -   When present, it will be used to generate containing stack name
    -   For example, if the value is `foo` and the item is `minecraft:lingering_potion`, the name of item will be translation of `item.minecraft.lingering_potion.effect.foo`

### New Item Components

#### `minecraft:consumable`

-   If present, this item can be consumed on use
    -   If `food`, `potion_contents`, `ominous_bottle_amplifier` or `suspicious_stew_contents` are also present on this item, consuming this will apply the stats and effects of those components
-   Format: object with fields
    -   `consume_seconds`: Non-negative float, the amount of seconds it takes for a player to consume the item
        -   Default value: `1.6`
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
        -   There are currently 5 valid consume effects, identified by a `type` field
        -   `minecraft:apply_effects`
            -   `effects`: A list of status effect instances applied once consumed
            -   `probability`: Float, the probability the above effects will be applied once consumed
                -   Default value: `1.0`
        -   `minecraft:remove_effects`
            -   `effects`: A set of status effects removed once consumed, as either a Status Effect ID, hash-prefixed tag, or list of IDs
        -   `minecraft:clear_all_effects`
            -   Clears all status effects of the consumer
        -   `minecraft:teleport_randomly`
            -   `diameter`: Positive float, the diameter that the consumer will be teleported within
                -   Default value: `16.0`
        -   `minecraft:play_sound`
            -   `sound`: Sound event, played once consumed
    -   e.g. `consumable={consume_seconds:3.0, animation:'eat', sound:'entity.generic.eat', has_consume_particles:true, on_consume_effects:[{type:'minecraft:clear_all_effects'}]}`

#### `minecraft:use_remainder`

-   If present, will replace the item with a remainder if its stack count has decreased after use
    -   If the item has a stack count higher than 0 after use, the remainder item will be added to the inventory
    -   If the inventory is full when trying to add a remainder item to it, it will be dropped on the ground
-   Format: single value as an item stack
    -   e.g. `use_remainder={id:'minecraft:stick',count:1}`

#### `minecraft:use_cooldown`

-   If present, this item will apply a cooldown to all items of the same type or "cooldown group" once used
-   Format: object with fields
    -   `seconds`: Positive float, the amount of seconds the cooldown will take place for
    -   `cooldown_group`: Optional namespaced id representing the cooldown group
        -   Items with the same cooldown group will share any cooldown applied to another item within that group
        -   If not specified, the cooldown group defaults to the base item type's ID
    -   e.g. `use_cooldown={seconds:1.5,cooldown_group:"minecraft:custom_weapon"}`

#### `minecraft:item_model`

-   Controls item model
-   Present on every item
-   Format: namespaced ID
    -   `namespace:id` will reference model `/assets/<namespace>/models/item/<id>`

#### `minecraft:equippable`

-   If present, this item can be equipped by players in the selected slot
-   Format: object with fields
    -   `slot`: one of `head`, `chest`, `legs`, `feet`, `body`, `mainhand`, or `offhand`
    -   `equip_sound` (optional): Sound event to play when the item is equipped
        -   If not specified, the default armor equip sound will be played
    -   `model` (optional): namespaced ID of the equipment model to use when equipped
        -   These model definitions are loaded from Resource Packs
        -   If not specified, will fall back to rendering as the item itself when in the head slot (or no rendering if not applicable)
    -   `camera_overlay` (optional): namespaced ID of the overlay texture to use when equipped
        -   If not specified, no overlay is used
        -   The ID will address a texture under the `textures/` folder and automatically assumed to be `.png`
            -   For instance, `misc/pumpkinblur` addresses `textures/misc/pumpkinblur.png`
    -   `allowed_entities` (optional): Entity ID, Entity Tag, or list of Entity IDs to limit which entities can equip this item
        -   If not specified, any entity (that can wear this kind of equipment) is allowed to equip this item
    -   `dispensable`: boolean (default: `true`), whether the item can be equipped by using a Dispenser
        -   If the item type has special dispenser behavior, this will have no effect
    -   `swappable`: boolean (default: `true`), whether the item can be equipped into the relevant slot by right-clicking
    -   `damage_on_hurt`: boolean (default: `true`), whether this item will be damaged when the wearing entity is damaged
    -   e.g. `equippable={slot:'chest',equip_sound:'item.armor.equip_chain'}`

![A player is looking at two Creepers through a custom UI overlay in a shape of a Creeper face.](https://launchercontent.mojang.com/v2/images/1.21.2customcreeperoverlay.jpg)

#### `minecraft:glider`

-   If present, this item will allow players to glide (as with Elytra) when equipped
-   Format: empty object
    -   e.g. `glider={}`

![Zuri and Efe flying by some polar bears just above the Ice with fireworks in their hands. Zuri and Eve are both wearing custom items on their heads that enable them to fly, a potato and a feather. ](https://launchercontent.mojang.com/v2/images/1.21.2customglider.jpg)

#### `minecraft:tooltip_style`

-   If present, this item can use custom sprites for its tooltip background and frame
-   Format: namespaced ID for a tooltip style
    -   A tooltip style of `namespace:path` will use sprites with IDs:
        -   `<namespace>:tooltip/<path>_background` and `<namespace>:tooltip/<path>_frame`
    -   e.g. `tooltip_style='minecraft:special_sword'`

#### `minecraft:death_protection`

-   If present, this item will protect the holder from dying by restoring a single health point
-   Format: object with fields
    -   `death_effects`: An optional list of effects that are applied when the item protects the holder
        -   These effects are the same as those specified by the `on_consume_effects` field in the `consumable` component

![With a custom poisonous potato in the offhand and a sword in the main hand, the player is taking fatal damage. The equipped potato saves them with the totem animation playing, but with the totem being replaced by the poisonous potato.](https://launchercontent.mojang.com/v2/images/1.21.2customtotem.jpg)

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

### Instruments

Goat Horn instruments are now defined in a data pack registry folder called `instrument`. Like other registries, changing this content in data packs is considered experimental and requires a full world re-load to take effect.

Fields:

-   `sound_event`: The sound event the instrument plays
-   `range`: The maximum range (in blocks) at which the sound can be heard
-   `use_duration`: The amount of time (in seconds) the instrument is considered in use after triggering, which also serves as its cooldown
-   `description`: A Text Component used as the descrpition of the instrument in item tooltips

### Trial Spawner Configurations

Trial Spawner configurations are now defined in a data pack registry folder called `trial_spawner`. Like other registries, changing this content in data packs is considered experimental and requires a full world re-load to take effect.

-   Has the same format as the `normal_config` and `ominous_config` fields in Trial Spawner blocks
-   Inline configurations inside Trial Spawner blocks are supported in the same format as before
-   These fields may however now instead be replaced with a namespaced ID reference to a Trial Spawner configuration

### Painting Variant

-   Added new optional fields `author` and `title`, holding Text Components to be displayed in the creative menu tooltip
-   This replaces previous mechanism where those values were derived from variant name
-   Author tooltip has been removed for `earth`, `wind`, `fire`, `water` and `wither` variants

### Enchantment Effects

-   Added support for the Enchantment trigger `projectile_spawned` in the following items:
    -   Snowballs
    -   Tridents
    -   Small Fireballs
    -   Thrown Potions
    -   Ender Pearls
    -   Fishing Rod
    -   Firework Rocket
    -   Wind Charge
    -   Eggs
-   Renamed effect type `damage_item` to `change_item_damage`, now also supports negative amounts

### Recipes

The format used for recipe ingredients has been simplified and aligned with other fields that accept item lists (like item predicates):

-   For items: `{ "item": "<item id>" }` now becomes `"<item id>"`
-   For tags: `{ "tag": "<tag id>" }` now becomes `"#<tag id>"`
-   Lists of items are still allowed, but tags can no longer appear in such list
-   Remaining restrictions:
    -   `minecraft:air` can't appear anywhere in an ingredient
    -   Ingredients must have at least one tag or item
-   The fields `template`, `base` and `addition` in `smithing_transform` and `smithing_trim` recipes are now optional instead of accepting empty list

#### `crafting_transmute` Recipe Type

-   New crafting recipe type has been introduced: `crafting_transmute`
-   When matched, the output will copy the input item stack, changing the item type but preserving all stack components
-   This completely replaces `crafting_special_shulkerboxcoloring`
-   Fields:
    -   `category` - crafting book category, one of `building`, `redstone`, `equipment`, `misc`
    -   `group` - optional string
    -   `input` - ingredient for item to copy
    -   `material` - additional ingredient to use
    -   `result` - item type to use for output

### Loot Tables

-   The special loot table `empty` has been removed and is no longer defined in the Vanilla data pack
-   Snow Golem shearing is now controlled by a loot table found at `shearing/snow_golem`
-   Tool value (used for functions like `match_tool`) is now available for some additional loot table types
    -   `archaeology` - used brush
    -   `vault` - inserted key (not available when displaying items)
    -   `shearing` - shears
-   Chickens laying eggs is now controlled by a loot table found at `gameplay/chicken_lay`
-   Armadillos randomly dropping scutes is now controlled by a loot table found at `gameplay/armadillo_shed`

#### Sheep Loot Tables

-   Sheep now always uses a single loot table `entities/sheep`
-   Wool drops are still defined in sub-tables in `entities/sheep/<color>`, but are just dispatched from the main table
    -   Note: Mutton drop is now controlled by the main table, while sub-tables are responsible only for the wool drop
-   Sheep shearing is now controlled by loot table found as `shearing/sheep`
    -   This loot table also has dispatches to sub-tables for specific wool colors, which are found as `shearing/sheep/<color>`

#### Mooshroom shearing Loot Table

-   Mooshroom shearing is now controlled by loot table found as `shearing/mooshroom`
-   Sub-tables for specific variants are found as `shearing/mooshroom/<variant>`

#### Hero of the Village Gift Loot Tables

-   The loot given by Villagers is now controlled by two additional loot tables:
    -   `gameplay/hero_of_the_village/unemployed_gift` - used if the Villager is unemployed
    -   `gameplay/hero_of_the_village/baby_gift` - used if the Villager is a baby

### Predicates

-   `minecraft:boat` entity sub-predicate has been removed, since Boats no longer have variants

#### `sheep` Entity Sub-predicate

-   Added `minecraft:sheep` entity sub-predicate
-   Fields:
    -   `sheared` - optional boolean
    -   `color` - optional wool dye color

#### `salmon` Entity Sub-predicate

-   Added `minecraft:salmon` entity sub-predicate
-   Fields:
    -   `variant`: one of `small`, `medium`, `large`

#### `player` Entity Sub-predicate

-   Added a new field in the `minecraft:player` entity sub-predicate, `input`
    -   Can be used to detect which movement keys the player is pressing
    -   If specified, the predicate matches the corresponding keybinds that the player is pressing
    -   The following fields may be specified to match player inputs:
        -   `forward` : boolean (optional)
        -   `backward` : boolean (optional)
        -   `left` : boolean (optional)
        -   `right` : boolean (optional)
        -   `jump` : boolean (optional)
        -   `sneak` : boolean (optional)
        -   `sprint` : boolean (optional)

### Advancements

#### Triggers

##### `minecraft:killed_by_crossbow` -> `minecraft:killed_by_arrow`

-   Will now trigger whenever an Arrow kills an entity, not just when fired from a Crossbow
-   Has a new optional Item Predicate field, `fired_from_weapon`
    -   Can be used to match the item used to shoot the Arrow

### Container Locks

-   The `Lock` field of containers has been renamed to `lock` and is now an item predicate
    -   Any items which match the predicate can open the container
-   The `lock` data component is now also an item predicate

### Boat Split

-   Variants of Boats and Chest Boats now have separate entity types instead of a `Type` field
-   Removed entites:
    -   `minecraft:boat`
    -   `minecraft:chest_boat`
-   New entities:
    -   Boat without chest:
        -   `Type=oak` -> `minecraft:oak_boat`
        -   `Type=spruce` -> `minecraft:spruce_boat`
        -   `Type=birch` -> `minecraft:birch_boat`
        -   `Type=jungle` -> `minecraft:jungle_boat`
        -   `Type=acacia` -> `minecraft:acacia_boat`
        -   `Type=cherry` -> `minecraft:cherry_boat`
        -   `Type=dark_oak` -> `minecraft:dark_oak_boat`
        -   `Type=mangrove` -> `minecraft:mangrove_boat`
        -   `Type=bamboo` -> `minecraft:bamboo_raft`
    -   Boat with chest:
        -   `Type=oak` -> `minecraft:oak_chest_boat`
        -   `Type=spruce` -> `minecraft:spruce_chest_boat`
        -   `Type=birch` -> `minecraft:birch_chest_boat`
        -   `Type=jungle` -> `minecraft:jungle_chest_boat`
        -   `Type=acacia` -> `minecraft:acacia_chest_boat`
        -   `Type=cherry` -> `minecraft:cherry_chest_boat`
        -   `Type=dark_oak` -> `minecraft:dark_oak_chest_boat`
        -   `Type=mangrove` -> `minecraft:mangrove_chest_boat`
        -   `Type=bamboo` -> `minecraft:bamboo_chest_raft`

### Attributes

-   Attribute IDs no longer have `generic.`, `player.` and `zombie.` prefixes
-   Added `tempt_range` attribute that controls the range, in blocks, at which temptable mobs can be tempted

### Particles

-   Added `block_crumble` particle with the following fields:
    -   `block_state` - the block state of the block to crumble
-   Added `trail` particle with the following fields:
    -   `color` - the color of the trail
    -   `target` - the target position that the particle should move towards
-   The format of color fields in particle options is now more standardized:
    -   RGB fields can always be encoded either as a vector of floats (order: `[R,G,B]`) or as a single packed integer (order: `RGB`)
    -   ARGB fields can always be encoded either as a vector of floats (order: `[R,G,B,A]` or as a single packed integer (order: `ARGB`)
    -   Affected fields:
        -   `minecraft:trail.color`
        -   `minecraft:dust.color` (previously accepted only vector of floats)
        -   `minecraft:dust_color_transition.from_color` (previously accepted only vector of floats)
        -   `minecraft:dust_color_transition.to_color` (previously accepted only vector of floats)

## Resource Pack Versions 35 through 42

-   Added new GUI sprites
-   Added new sounds
-   Added support for emissive layers for block models
-   Added new `broken` item model property
-   Added support for custom equipment texture layers
-   Textures for entity equipment have been moved and renamed
-   Updated the format of post-processing effect definitions
-   The texture map for the Arrow and Bee Stinger models have been updated
-   The model and UV mapping of the Dragon Egg have been updated
-   Updated textures and models for the Bundle item
    -   Bundle icon has new models and textures
    -   Bundle models and textures have 16 colored variants
-   The models and UV mapping related to the Torch and blocks containing Redstone Torch have been updated
-   Removals and renames of some translations is now automatically applied at startup

### GUI Sprites

-   The `nine_slice` GUI sprite scaling mode has a new optional boolean property: `stretch_inner`
    -   If `true`, the inner parts of the texture (i.e. not the corners) will be stretched instead of tiled
    -   If not specified, defaults to `false` as before
-   The tooltip background and frame may now be customized by replacing sprites:
    -   `tooltip/background`: The background of the tooltip
    -   `tooltip/frame`: The frame appearing around the tooltip
    -   Items with a custom `tooltip_style` component will use sprites with IDs:
        -   `<namespace>:tooltip/<path>_background` and `<namespace>:tooltip/<path>_frame`
-   The appearance of a highlighted slot may now be customized by replacing sprites:
    -   `container/slot_highlight_front`: The sprite to render in front of highlighted slots
    -   `container/slot_highlight_back`: The sprite to render behind highlighted slots
-   Likewise, the appearance of a highlighted item within the Bundle can be customized with the following sprites:
    -   `container/bundle/slot_highlight_front`
    -   `container/bundle/slot_highlight_back`
-   Removed `container/bundle/background`, `container/bundle/slot`, and `container/bundle/blocked_slot` sprites
-   Added `container/bundle/slot_background` sprite for bundle slot background
-   Added `container/bundle/bundle_progressbar_fill`, `container/bundle/bundle_progressbar_border`, and `container/bundle/bundle_progressbar_full` sprites
-   Added `hud/air_empty` sprite for consumed bubble slots

### Sounds

-   Added break, fall, hit, place, and step sounds for the Spawner block
-   Added sound `ui.hud.bubble_pop` for when an air bubble in the UI pops
-   Added sound `item.bundle.insert_fail` for when failing to add an item to a Bundle

### Emissive Layers for Block Models

-   Added an optional `light_emission` field to block model elements
-   Integer value between 0 and 15, with 0 being the default value (no light emission)
-   If specified and non-zero, this will behave as the minimum light level that the element can receive

### Item Models

-   All item models can now use the `broken` property in model overrides that was previously limited to just Elytra
    -   This will have a value of 1 if the item has 1 durability left, or 0 otherwise

### Custom Equipment Layers

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

### Shaders & Post-process Effects

> **Developer's Note**: _Although it is possible in Resource Packs, overriding Core Shaders is considered as unsupported and not an intended Resource Pack feature. These shaders exist as part of the internal implementation of the game, and as such, may change at any time as the game's internals evolve. We understand that overriding Core Shaders is used for very cool Resource Pack features, many of which lack supported alternatives. We would like to provide better, supported alternatives in the future._

-   Shader program configurations can now specify preprocessor define directives to apply to their linked shaders
    -   Many shader implementations have been merged by making use of this
-   The format of core shader and post-processing shader configurations have been consolidated
-   The format of post-processing effect configurations have been updated
-   The `ChunkOffset` uniform in terrain shaders has been renamed to `ModelOffset`
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

### Translation Removals and Renames

-   During load some deprecated translation strings will now be removed and/or renamed
-   Packs that use these translations will need to re-add them manually
-   The full list is available in the `/assets/minecraft/lang/deprecated.json` file inside the game's JAR file

## Experimental Features

The following changes only apply when their respective Experiment is turned on, either by activating the corresponding experimental data pack or by turning it on in the Experiments screen while creating the world.

These experiments have no effect unless enabled. You can find more information about Feature Toggles [here](https://www.minecraft.net/en-us/article/testing-new-minecraft-features/feature-toggles-java-edition).

### Winter Drop

-   Added Pale Garden Biome, Pale Oak tree, Pale Moss block, Pale Moss carpet, Pale Hanging Moss and Pale Oak woodset
-   Added Creaking mob, Creaking Spawn Egg and Creaking Heart block

#### Pale Garden

Pale Garden is a biome variation of Dark Forest. Unique features:

-   Pale Oaks generate here
-   Pale Moss blocks/carpet generate on the ground here
-   Hanging Pale Moss generate hanging from the foliage of Pale Oaks
-   Animal mobs do not spawn naturally in Pale Gardens
-   New biome specific ambient sounds
-   Creaking Heart block can generate in Pale Oaks

#### Pale Oak Tree

-   Pale Oak Leaves drop Pale Oak Saplings that can be planted in a 2x2 configuration to grow Pale Oak trees
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
    -   Boat with Chest

#### Pale Moss Block

Pale Moss block generates naturally in the Pale Garden biome

#### Pale Moss Carpet

Pale Moss block generates naturally in the Pale Garden biome. Unique features:

-   When placed, Pale Moss Carpet grows up to two blocks on the solid faces of any block that borders it
-   Pale Moss Carpet can be bone mealed to grow to full on all solid faces of any block that borders it

#### Pale Hanging Moss

Pale Hanging Moss generates naturally in the Pale Garden biome under the foliage of Pale Oaks

-   Pale Hanging Moss does not grow randomly, but can be bone mealed to grow down

#### Creaking mob

The Creaking mob spawns at night in the Pale Garden biome if there is a Creaking Heart block that has been generated in a Pale Oak tree. Gameplay features:

-   Creaking will activate if a surivival or adventure mode player is within 12 blocks of it and looks at it
-   Creaking stays active while there is a survival or adventure mode player within 32 blocks of it
-   An activated Creaking will not move if a survival or adventure player is looking at it
-   Creaking is invulnerable to damage
-   Creaking has fire resistance
-   When hit by players, a particle trail is shown between the Creaking and the Creaking Heart block it is connected to
-   When the Creaking Heart block that the Creaking is connected to is destroyed, the Creaking is removed
-   Is not affected by light levels but spawns and despawns based on the day/night cycle
-   Creaking cannot enter Boats
-   Creaking spawned from a Creaking Heart can not go through portals
-   The Creaking Spawn Egg will spawn a Creaking mob that is not connected to a Creaking Heart. This form of Creaking:
    -   May also be spawned through commands
    -   Will persist through day and night, and loads and saves
    -   Is fire-resistant
    -   Takes damage from attacks and other damage sources
    -   Has one point of health (half a heart)
-   A Creaking summoned from the Creaking Heart cannot be spawned with a spawn egg, nor can it be named with a Name Tag or summoned with commands
    -   It can only exist as a part of the Creaking Heart block
-   Players wearing a Carved Pumpkin on their head can look at Creaking without it freezing in place

![A Creaking standing in the Pale Garden looking at the player.](https://launchercontent.mojang.com/v2/images/1.21.2experimentalcreaking.jpg)

#### Creaking Heart

A Creaking Heart is a “living” block generating in Pale Oak trees, covered on all sides by Pale Oak wood logs. It can spawn a Creaking mob when it is nighttime, and it is placed between two correctly aligned Pale Oak Logs.

-   Is active during the night and dormant during the day
-   Sends a trail of particles towards the connected Creaking when the Creaking gets hit by the player
-   When Creaking Heart block is destroyed, the connected Creaking is removed
-   Comparators attached to the Creaking Heart block will output a signal strength dependent on the distance to the connected Creaking

#### New system for Pale Garden ambient sounds

Ambient sounds in the Pale Garden biome do not come from the biome settings, but are generated by blocks found in the biome.

-   Pale Hanging Moss emits subtle atmospheric sounds when it is attached to Pale Oak Logs and Pale Oak Leaves
-   Creaking Heart block emits a set of eerie sounds when it is active during the night and surrounded by Logs on all sides

### Redstone Experiments

Added a new Experiment containing various Redstone-related changes. This can be enabled by selecting "Redstone Experiments" in the Experiments menu when creating a world.

Please note that the experimental features behind this toggle are not aimed at any future release at this time.  
Instead, this is a place for us to try out changes and gather feedback.  
We are excited to hear what you think about these changes: please share your feedback on the [feedpack page](https://aka.ms/fbredstone).

#### Redstone Wire

-   The performance impact of Redstone wire (connected blocks of Redstone Dust) has been improved
-   Redstone wire now only triggers block updates on blocks that may receive power from the wire
-   Before a line of wire causes block updates, the new signal strength of all connected wires is set
-   The update order around Redstone wire has been changed
    -   The aim is to make wire work the same, independent of position and global orientation
    -   When possible the order is deterministic based on the context the updates are caused in
    -   When there is not enough context to fully determine the order, the rest is picked at random

> **Developer's note:** _We know that randomness in Redstone is usually unwanted.  
> We've used it here because we've made things deterministic whenever it makes sense, and sometimes it just doesn't make sense - and we don't want some hidden state (like location-based hashes!) determining the order and making machines work differently at different coordinates or in different orientations._

##### Order in Which a Line of Wire Changes

-   When a line of wire turns on, the wires closer to the power source will cause block updates first
-   When a line of wire turns off, the wires closer to where the power source was, will cause block updates first
-   When two wires have the same distance to the power source, the one to the left in the direction of travel updates first
    -   If there is not enough context to know the direction of travel (when the wire was powered from above or below), the side to update first is picked at random

![Ari is testing the experimental Redstone changes, standing in the middle of a machine comprised of four sets of two pistons each facing each other. The leftmost piston according to the power source of the two is always extending regardless of orientation.](https://launchercontent.mojang.com/v2/images/1.21.2experimentalredstonepistons.jpg)

##### Block Updates Around a Wire

-   The order in which blocks around the wire update is based on the direction the wire received an update from
-   The order of the updates is: back, front, left, right, down, up
-   When the updates are further distributed through solid blocks, the same order is applied there

#### Known Issues

As this experiment only changes Redstone wire, interactions with other components may not always act as expected, especially when it comes to update orders.

The removal of excessive neighbor updates around wire affects behavior of Quasi-Connectivity based contraptions. We plan to address these issues at a later point.

### Minecart Improvements

Added a new Experiment containing various movement changes to Minecarts. This can be enabled by selecting "Minecart Improvements" in the Experiments menu when creating a world.

Our long term goal is to make vehicle travel, like Minecarts, a viable option for players compared to other late-game options which currently dominate most playstyles. To achieve this, we aim to make riding Minecarts a smooth experience, with consistent and predictable motion and rotation. With this feature toggle we are laying a foundation to build upon in the future. We are aware of that these changes will break some existing contraptions, which is why we want to collaborate with the community to shape the upgrade and future experience of riding Minecarts.

Please note that the experimental features behind this toggle are not aimed at any future release at this time. Instead, this is a place for us to try out changes and gather feedback.

We are excited to hear what you think about these changes: please share your feedback on this [feedback page](https://aka.ms/fbcarts).

![An experimental Minecart with Chest is speeding up on a powered circular railway, ready to be launched onto the distant track across the water.](https://launchercontent.mojang.com/v2/images/1.21.2experimentalminecartlauncher.jpg)

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

-   Minecarts can no longer be placed within another Minecart by the player
    -   Dispensers can still "stack" Minecarts by placing them on the Rail, even if there is another Minecart already there
-   Minecarts can now consistently be placed next to each other along a track
-   Minecarts now pick up mobs more consistently when moving along a track
-   Minecarts will no longer phase through blocks on slopes

#### Known Impact

-   We are aware that these changes will affect certain contraptions such as 'piston bolts', which may now not work at all, or have their behavior changed
-   Very delicate rail networks will have their timings changed due to slight changes in speeds, movement distance, friction etc.
-   Contraptions that rely on Minecarts snapping to rails will no longer work, or have their behavior changed

## Fixed bugs in 1.21.2

-   [MC-379](https://bugs.mojang.com/browse/MC-379) spawn-animals and spawn-npcs=false removes all villagers and prevents summoning new mobs
-   [MC-1673](https://bugs.mojang.com/browse/MC-1673) Several mobs can pop off paintings, item frames and leads and destroy minecarts, armor stands and anything in item form even when mobGriefing is turned off
-   [MC-3266](https://bugs.mojang.com/browse/MC-3266) Your experience level overflows once it exceeds the integer limit
-   [MC-3697](https://bugs.mojang.com/browse/MC-3697) TNT submerged in water can destroy item frames, paintings, armor stands, and other similar entities
-   [MC-4665](https://bugs.mojang.com/browse/MC-4665) Anvil consuming 2 unbroken items of the same kind when renaming them
-   [MC-13246](https://bugs.mojang.com/browse/MC-13246) On certain enchanted items, the Anvil will display a "too expensive" message before attempting to repair, combine, or rename them
-   [MC-14800](https://bugs.mojang.com/browse/MC-14800) When zombie villagers, husks, drowned or zombified piglins are damaged, they spawn regular zombie reinforcements
-   [MC-16829](https://bugs.mojang.com/browse/MC-16829) The horse armor model does not show the enchantment glint effect
-   [MC-38022](https://bugs.mojang.com/browse/MC-38022) Order of rendering translucent block faces fails to update with camera position
-   [MC-39263](https://bugs.mojang.com/browse/MC-39263) Cannot set horizontal Motion for squid on land
-   [MC-49628](https://bugs.mojang.com/browse/MC-49628) When in spectator mode the head overlay shows even if it is set not to show in the skin customisation options
-   [MC-51905](https://bugs.mojang.com/browse/MC-51905) Horse model in inventory doesn't follow mouse cursor correctly if horse is facing south
-   [MC-53602](https://bugs.mojang.com/browse/MC-53602) Projectiles don't collide with the world border
-   [MC-54532](https://bugs.mojang.com/browse/MC-54532) Sneaking while falling on Slime Blocks inflicts fall damage
-   [MC-58294](https://bugs.mojang.com/browse/MC-58294) Squids and glow squids do not collide properly with solid blocks
-   [MC-59471](https://bugs.mojang.com/browse/MC-59471) String can be duplicated using tripwire hooks
-   [MC-64265](https://bugs.mojang.com/browse/MC-64265) Teleporting passengers does not dismount them
-   [MC-72494](https://bugs.mojang.com/browse/MC-72494) In Statistics screen 'm' is the same unit for both minutes and meters
-   [MC-73178](https://bugs.mojang.com/browse/MC-73178) Villagers' "CanPickUpLoot" tag cannot be set to zero
-   [MC-75494](https://bugs.mojang.com/browse/MC-75494) Lead item drop is not affected by doEntityDrops gamerule
-   [MC-86252](https://bugs.mojang.com/browse/MC-86252) Shields can continue to block after entity changes dimensions due to client and server desync
-   [MC-88967](https://bugs.mojang.com/browse/MC-88967) Most NBT tags are not kept when a mob converts to another mob
-   [MC-89883](https://bugs.mojang.com/browse/MC-89883) Squid and glow squid collision error and rubberbanding
-   [MC-92875](https://bugs.mojang.com/browse/MC-92875) Collisionless blocks ignore entities with high velocity
-   [MC-101376](https://bugs.mojang.com/browse/MC-101376) Elytra appearance doesn't update in 1st person mode; only in 3rd person
-   [MC-108323](https://bugs.mojang.com/browse/MC-108323) Underlines in chat and /title command intersect each other, causing an ugly effect when fading
-   [MC-110386](https://bugs.mojang.com/browse/MC-110386) Certain mobs attack themselves when targeted by a mob of the same type
-   [MC-112257](https://bugs.mojang.com/browse/MC-112257) Some NBT tags require the correct suffix
-   [MC-116618](https://bugs.mojang.com/browse/MC-116618) Dropping items rapidly inside the "Survival Inventory" tab in creative mode deletes items
-   [MC-119369](https://bugs.mojang.com/browse/MC-119369) Boats crash/break and can kill their passengers when falling certain distances
-   [MC-120417](https://bugs.mojang.com/browse/MC-120417) Incorrect dragon egg block model
-   [MC-121013](https://bugs.mojang.com/browse/MC-121013) "Followrange" Attribute only targets mobs on (roughly) the same y level.
-   [MC-123739](https://bugs.mojang.com/browse/MC-123739) Recipe book entries are no longer sorted in any meaningful manner
-   [MC-123742](https://bugs.mojang.com/browse/MC-123742) Eyes of Endermen turn white when they are looking up during the day
-   [MC-124331](https://bugs.mojang.com/browse/MC-124331) Redstone lamps do not show on maps
-   [MC-125642](https://bugs.mojang.com/browse/MC-125642) Bone meal is consumed when used on fern, grass and seagrass even if it cannot grow
-   [MC-127995](https://bugs.mojang.com/browse/MC-127995) You can use bone meal on sea pickles in situations where no sea pickles will grow
-   [MC-129055](https://bugs.mojang.com/browse/MC-129055) Issues breaking tripwire with shears
-   [MC-129298](https://bugs.mojang.com/browse/MC-129298) Drowned don't chase you if they are in 1 block deep water
-   [MC-129826](https://bugs.mojang.com/browse/MC-129826) \["shade": false\] is missing from potted cross models, resulting in most potted plants appearing darker than they should
-   [MC-130097](https://bugs.mojang.com/browse/MC-130097) Tropical fish fin UV mapping wrong
-   [MC-131215](https://bugs.mojang.com/browse/MC-131215) Cannot teleport an entity which is in a boat
-   [MC-132804](https://bugs.mojang.com/browse/MC-132804) Low follow range attribute also affects mobs' idle wandering range
-   [MC-133862](https://bugs.mojang.com/browse/MC-133862) Optimize world screen backup button has inaccurate text
-   [MC-134626](https://bugs.mojang.com/browse/MC-134626) Squids/glow squids bounce up and down in bubble columns, teleporting high up in the air
-   [MC-135898](https://bugs.mojang.com/browse/MC-135898) Teams are not retained when a mob converts to another mob
-   [MC-135971](https://bugs.mojang.com/browse/MC-135971) Can't use CTRL+Q in crafting table
-   [MC-137053](https://bugs.mojang.com/browse/MC-137053) You cannot set the "CanBreakDoors" NBT tag of drowned to "1b"
-   [MC-144327](https://bugs.mojang.com/browse/MC-144327) The bottom face texture of a blaze's rods is the same as their top face texture
-   [MC-144761](https://bugs.mojang.com/browse/MC-144761) Animated texture interpolation ignores alpha channel during transition from/to transparent pixels
-   [MC-145656](https://bugs.mojang.com/browse/MC-145656) Attribute "follow\_range" is not working for hostile mobs before they find the target
-   [MC-146805](https://bugs.mojang.com/browse/MC-146805) Trader Llamas don't attack zombies, drowned, husks, zombie villager and illagers
-   [MC-148041](https://bugs.mojang.com/browse/MC-148041) Two separate translation lines for the same thing, "Bells Rung" statistic
-   [MC-148982](https://bugs.mojang.com/browse/MC-148982) Map color for wheat is incorrect
-   [MC-151706](https://bugs.mojang.com/browse/MC-151706) Player jitters when landing on a slime block with the slow falling effect
-   [MC-151828](https://bugs.mojang.com/browse/MC-151828) Woodland mansion structure '1x1\_b3' has dark oak leaf block with persistent tag set to 'false'
-   [MC-154053](https://bugs.mojang.com/browse/MC-154053) Trader llama spitting far distance when attacked
-   [MC-156579](https://bugs.mojang.com/browse/MC-156579) Creative players can fly through portals when going quickly enough using elytra or Riptide trident
-   [MC-156857](https://bugs.mojang.com/browse/MC-156857) Shift-clicking X button in Creative menu can create ghost items
-   [MC-158389](https://bugs.mojang.com/browse/MC-158389) Raid results in victory if it cannot find a valid spawn point
-   [MC-161913](https://bugs.mojang.com/browse/MC-161913) Misalignment on edges/corners of clouds
-   [MC-162551](https://bugs.mojang.com/browse/MC-162551) When shooting an arrow on top of a player in Creative mode, a closed shulker, or an invincible mob, the arrow glitches around on top of the entity
-   [MC-162713](https://bugs.mojang.com/browse/MC-162713) Clouds are generated with offset to east and south
-   [MC-164258](https://bugs.mojang.com/browse/MC-164258) Recipe book search field is not selected when clicking on the search icon
-   [MC-165182](https://bugs.mojang.com/browse/MC-165182) Inventory/GUI textures no longer handle translucent pixels correctly
-   [MC-166880](https://bugs.mojang.com/browse/MC-166880) Pufferfish spikes model seems to be broken
-   [MC-167242](https://bugs.mojang.com/browse/MC-167242) Bed stays occupied after a lightning turns the villager sleeping in it into a witch
-   [MC-167900](https://bugs.mojang.com/browse/MC-167900) Shulker Head texture doesn't support transparency
-   [MC-167906](https://bugs.mojang.com/browse/MC-167906) Beehive items at full honey level do not appear with honey in inventory/as item/in hand
-   [MC-168329](https://bugs.mojang.com/browse/MC-168329) Bees do not leave their hives in the Nether/End in some cases
-   [MC-168546](https://bugs.mojang.com/browse/MC-168546) Bee nest / hive items have no lore
-   [MC-169660](https://bugs.mojang.com/browse/MC-169660) /teleport without can change the entity's rotation
-   [MC-170863](https://bugs.mojang.com/browse/MC-170863) Dropping item stacks from the player's hotbar in any creative inventory tab other than "Survival Inventory" deletes items
-   [MC-170977](https://bugs.mojang.com/browse/MC-170977) F3 text is behind inventory and F3 cake diagram is in front of inventory
-   [MC-172075](https://bugs.mojang.com/browse/MC-172075) Mouth/jaw of a provoked enderman becomes slightly detached when looking up or down
-   [MC-173728](https://bugs.mojang.com/browse/MC-173728) The heads of baby sheep are positioned too low when they're eating grass
-   [MC-174214](https://bugs.mojang.com/browse/MC-174214) Fireworks for crossbow go through an entity if it is close to a player
-   [MC-174732](https://bugs.mojang.com/browse/MC-174732) Semi-transparent status effect textures do not render correctly in the inventory or beacon UI
-   [MC-176937](https://bugs.mojang.com/browse/MC-176937) Deleting items using the drop key while a tab is open in the creative inventory plays hand animation, even if the item isn't dropped
-   [MC-177452](https://bugs.mojang.com/browse/MC-177452) Unneeded faces inside repeater models
-   [MC-177453](https://bugs.mojang.com/browse/MC-177453) Unneeded faces inside comparator models
-   [MC-178660](https://bugs.mojang.com/browse/MC-178660) Player jitters when landing on a bed with the slow falling effect
-   [MC-179629](https://bugs.mojang.com/browse/MC-179629) Faces in between cloud "blocks" can still render from outside of the cloud
-   [MC-180272](https://bugs.mojang.com/browse/MC-180272) en\_us.json contains unused strings
-   [MC-182478](https://bugs.mojang.com/browse/MC-182478) Mob armor generates starting with boots rather than helmet
-   [MC-182814](https://bugs.mojang.com/browse/MC-182814) Drinking honey bottles increases "minecraft.used:minecraft.honey\_bottle" by a value of two and runs the "minecraft:consume\_item" advancement trigger twice
-   [MC-182877](https://bugs.mojang.com/browse/MC-182877) Piglins use one hand to hold a loaded crossbow
-   [MC-183518](https://bugs.mojang.com/browse/MC-183518) High CPU usage on hypervisor host possibly due to excessive syscall usage by Minecraft Server
-   [MC-183636](https://bugs.mojang.com/browse/MC-183636) follow\_range attribute not working for piglins
-   [MC-185144](https://bugs.mojang.com/browse/MC-185144) Item durability bar and all items render incorrectly in the villager trade UI
-   [MC-186362](https://bugs.mojang.com/browse/MC-186362) Casting issue: Translucent block rendering breaks down at high distances
-   [MC-187920](https://bugs.mojang.com/browse/MC-187920) Bees sometimes give up when returning home
-   [MC-188217](https://bugs.mojang.com/browse/MC-188217) Bees circle above flower that is covered by all sides
-   [MC-188485](https://bugs.mojang.com/browse/MC-188485) Inventory can get desynced when shift-clicking the Destroy Item slot
-   [MC-190163](https://bugs.mojang.com/browse/MC-190163) Zoglin spawn eggs don't occasionally spawn baby zoglins on their own accord
-   [MC-190484](https://bugs.mojang.com/browse/MC-190484) Sneaking players' name tags are partly invisible depending on what angle you're facing
-   [MC-191431](https://bugs.mojang.com/browse/MC-191431) Player spectator head is invisible / does not render in the inventory after switching to "Fabulous!"
-   [MC-195754](https://bugs.mojang.com/browse/MC-195754) Illagers in raids continuously try and fail to pick up ominous banners if they can't reach them
-   [MC-196556](https://bugs.mojang.com/browse/MC-196556) When projectiles (such as arrows and tridents) move too fast, they can't be teleported by portals and end gateways
-   [MC-196736](https://bugs.mojang.com/browse/MC-196736) Hoglins break their leash when zombifying, despite zoglins being leashable
-   [MC-196964](https://bugs.mojang.com/browse/MC-196964) Fall damage is reset when an entity converts to another entity
-   [MC-199238](https://bugs.mojang.com/browse/MC-199238) Unneeded faces and missing cullface in dragon egg model
-   [MC-199344](https://bugs.mojang.com/browse/MC-199344) Thrown ender pearls sometimes disappear after player death
-   [MC-203748](https://bugs.mojang.com/browse/MC-203748) Filled lava cauldrons are able to be put under water
-   [MC-204050](https://bugs.mojang.com/browse/MC-204050) Subtitle for shooting amethyst blocks is "Block breaking"
-   [MC-205851](https://bugs.mojang.com/browse/MC-205851) Being partway inside of a cloud can cause the opposite face of that cloud to not render
-   [MC-206074](https://bugs.mojang.com/browse/MC-206074) Survival tab of Creative inventory desyncs if changed manually after an external change
-   [MC-206436](https://bugs.mojang.com/browse/MC-206436) Stonecutter ignores anything over 64 when shift-clicking
-   [MC-207101](https://bugs.mojang.com/browse/MC-207101) When a lingering potion lands on top of a player/mob, the area effect cloud spawns above the player/mob instead of inside it, rendering the lingering potion useless
-   [MC-209947](https://bugs.mojang.com/browse/MC-209947) minecraft:block/scaffolding\_unstable has incorrect cullfaces
-   [MC-212213](https://bugs.mojang.com/browse/MC-212213) Squids unable to be affected by knockback enchantment.
-   [MC-213763](https://bugs.mojang.com/browse/MC-213763) Spore blossom gets darker when next to a block with smooth lighting enabled
-   [MC-214625](https://bugs.mojang.com/browse/MC-214625) Unlit redstone torches are unaffected by block shading / are evenly lit on all sides
-   [MC-214662](https://bugs.mojang.com/browse/MC-214662) Redstone torches on repeaters and comparators are shaded differently from normal redstone torches
-   [MC-215332](https://bugs.mojang.com/browse/MC-215332) Glow squids lack a baby variant
-   [MC-215752](https://bugs.mojang.com/browse/MC-215752) Z-fighting with paintings and item frames in solid blocks
-   [MC-216016](https://bugs.mojang.com/browse/MC-216016) Launching fireworks into a crystal sound block will make the breaking noise
-   [MC-219083](https://bugs.mojang.com/browse/MC-219083) Hunger client/server desync when natural regeneration is off in peaceful mode
-   [MC-220360](https://bugs.mojang.com/browse/MC-220360) Gifts given by baby villagers, nitwits and unemployed villagers when under the Hero of the Village effect are hardcoded
-   [MC-220469](https://bugs.mojang.com/browse/MC-220469) You cannot use items while looking at wolves owned by other players
-   [MC-223032](https://bugs.mojang.com/browse/MC-223032) Z-fighting can be seen on the stingers of bees when they're stuck in players
-   [MC-223375](https://bugs.mojang.com/browse/MC-223375) Pandas' bodies stay tilted after eating
-   [MC-224035](https://bugs.mojang.com/browse/MC-224035) Small Dripleaf's model is inconsistent
-   [MC-224454](https://bugs.mojang.com/browse/MC-224454) Entities don't recognize azaleas or flowering azaleas as obstacles when pathfinding
-   [MC-225060](https://bugs.mojang.com/browse/MC-225060) Burning entity sound repeats every tick
-   [MC-225270](https://bugs.mojang.com/browse/MC-225270) Goats can move armor stands even with mobGriefing turned off
-   [MC-225417](https://bugs.mojang.com/browse/MC-225417) Squids and glow squids can break free from leads when attacked
-   [MC-225422](https://bugs.mojang.com/browse/MC-225422) Squids and glow squids do not move smoothly in the water compared to other aquatic mobs
-   [MC-226038](https://bugs.mojang.com/browse/MC-226038) Scheduled functions are part of weather in profile results
-   [MC-226687](https://bugs.mojang.com/browse/MC-226687) Sea Level is assumed to be Y = 63 in numerous parts of Minecraft
-   [MC-227139](https://bugs.mojang.com/browse/MC-227139) Sky fog stutters
-   [MC-227169](https://bugs.mojang.com/browse/MC-227169) The main hand is positioned incorrectly when holding a loaded crossbow in your offhand
-   [MC-228070](https://bugs.mojang.com/browse/MC-228070) Name tags rendered in blocks have letters brighter depending on your angle
-   [MC-230317](https://bugs.mojang.com/browse/MC-230317) Lead disappears when mooshroom cow is sheared
-   [MC-233603](https://bugs.mojang.com/browse/MC-233603) HUD / Hotbar rendering can heavily impact frame rate performance
-   [MC-233817](https://bugs.mojang.com/browse/MC-233817) Items held by the cursor render behind the white highlight of recipe book previews
-   [MC-234318](https://bugs.mojang.com/browse/MC-234318) Small dripleaf stems intersect its leaves
-   [MC-235953](https://bugs.mojang.com/browse/MC-235953) Entity eyes render type doesn't blend non-black transparent pixels properly
-   [MC-239581](https://bugs.mojang.com/browse/MC-239581) Bees do not become angry at the closest player when hive is exploded
-   [MC-239812](https://bugs.mojang.com/browse/MC-239812) Dead players in LAN environments remain in the world when the host leaves
-   [MC-240001](https://bugs.mojang.com/browse/MC-240001) The white and red highlights from recipe book previews render above potion tooltips
-   [MC-240948](https://bugs.mojang.com/browse/MC-240948) Filled powder snow cauldrons are able to be put under water
-   [MC-241873](https://bugs.mojang.com/browse/MC-241873) Ravagers can move armor stands even with mobGriefing turned off
-   [MC-242882](https://bugs.mojang.com/browse/MC-242882) Cape detaches from body while sneaking and falling
-   [MC-243413](https://bugs.mojang.com/browse/MC-243413) Some Explorer Maps are missing their icon
-   [MC-244720](https://bugs.mojang.com/browse/MC-244720) "Erased cached data" button in Optimize World is not labeled in the right order when using Tab
-   [MC-244739](https://bugs.mojang.com/browse/MC-244739) Goat eating sounds aren't played when feeding them the last item of wheat within a stack
-   [MC-244948](https://bugs.mojang.com/browse/MC-244948) The "minecraft:item.bundle.remove\_one" sound plays even when no items are unpacked from bundles
-   [MC-245510](https://bugs.mojang.com/browse/MC-245510) Piglin Brute's generic.follow\_range attribute functions oddly
-   [MC-245603](https://bugs.mojang.com/browse/MC-245603) Powder snow can not put out the fire on arrows
-   [MC-247238](https://bugs.mojang.com/browse/MC-247238) Sky fog is not cylindrical
-   [MC-249067](https://bugs.mojang.com/browse/MC-249067) Ominous banners lose their rarity color when renamed using anvils
-   [MC-249414](https://bugs.mojang.com/browse/MC-249414) The "Shader rendertype\_entity\_translucent\_emissive could not find sampler named Sampler2 in the specified shader program." warning is logged in the game output console when launching the game
-   [MC-249901](https://bugs.mojang.com/browse/MC-249901) Frogs don't play the frog eating sound when given a slime ball
-   [MC-250924](https://bugs.mojang.com/browse/MC-250924) Goat horns are missing sounds
-   [MC-256422](https://bugs.mojang.com/browse/MC-256422) Some words within some strings use right single quotation marks instead of apostrophes
-   [MC-257309](https://bugs.mojang.com/browse/MC-257309) Monster spawner tries to spawn wardens and zoglins when the difficulty is Peaceful
-   [MC-257318](https://bugs.mojang.com/browse/MC-257318) Non-transparent toasts and some buttons that should be transparent in custom Resource Pack
-   [MC-258971](https://bugs.mojang.com/browse/MC-258971) ClientboundUpdateRecipesPacket breaks after multiple recipes use big tags
-   [MC-259264](https://bugs.mojang.com/browse/MC-259264) Left-handed vexes raise their right hands to attack
-   [MC-259376](https://bugs.mojang.com/browse/MC-259376) ServerboundMovePlayerPacket's xRot can have invalid value
-   [MC-259651](https://bugs.mojang.com/browse/MC-259651) updateSkyBrightness() is not used client-side, causing multiple issues
-   [MC-259687](https://bugs.mojang.com/browse/MC-259687) "Distance by Elytra" statistic is approximately doubled
-   [MC-259798](https://bugs.mojang.com/browse/MC-259798) Block hitboxes cause semi-transparent blocks not to render behind them in lower than "Fabulous" graphics settings
-   [MC-259936](https://bugs.mojang.com/browse/MC-259936) Equipping armor in hand via right-click equips entire stack
-   [MC-260013](https://bugs.mojang.com/browse/MC-260013) Baby Llama's head has incorrect scale method
-   [MC-260537](https://bugs.mojang.com/browse/MC-260537) Tree growth can replace leaves that have the 'persistent' block state set to true
-   [MC-260858](https://bugs.mojang.com/browse/MC-260858) The word "ticks" within a "/schedule" command feedback message is always pluralized
-   [MC-260859](https://bugs.mojang.com/browse/MC-260859) Some words within a tick profiling feedback message are always pluralized
-   [MC-260860](https://bugs.mojang.com/browse/MC-260860) Some words within some chat delay strings are always pluralized
-   [MC-260913](https://bugs.mojang.com/browse/MC-260913) The word "blocks" within some "/spreadplayers" command feedback messages is always pluralized
-   [MC-260914](https://bugs.mojang.com/browse/MC-260914) "/spreadplayers" strings for entities consist of inconsistent noun usage
-   [MC-261666](https://bugs.mojang.com/browse/MC-261666) Armor given to Villagers is lost when they convert to Zombie Villagers
-   [MC-261691](https://bugs.mojang.com/browse/MC-261691) Bees get stuck while trying to pathfind to inaccessible flowers
-   [MC-262112](https://bugs.mojang.com/browse/MC-262112) Wither skull's bounding box is wrongly positioned in the first tick, and cannot be selected with volume checks in commands
-   [MC-262175](https://bugs.mojang.com/browse/MC-262175) The "advancements.adventure.trim\_with\_any\_armor\_pattern.description" text contains incorrect English grammar
-   [MC-262498](https://bugs.mojang.com/browse/MC-262498) Underground seagrass feature files exist despite never generating
-   [MC-262598](https://bugs.mojang.com/browse/MC-262598) Tripwire textures in the tripwire hook "attached: true" state have a wrong black rendering when the tripwire hook is attached to a non-transparent block
-   [MC-262652](https://bugs.mojang.com/browse/MC-262652) Dragon egg's side texture is mapped strangely as of 1.8 (and the model is also unoptimized)
-   [MC-263838](https://bugs.mojang.com/browse/MC-263838) doLimitedCrafting gamerule does not work on suspicious stew
-   [MC-263858](https://bugs.mojang.com/browse/MC-263858) Text Displays are rendered differently compared to name tags
-   [MC-264886](https://bugs.mojang.com/browse/MC-264886) Geode features ignore the invalid\_blocks field
-   [MC-264986](https://bugs.mojang.com/browse/MC-264986) Item count of fuel slot affects the way smelting recipe book moves ingredients
-   [MC-265399](https://bugs.mojang.com/browse/MC-265399) Players' heads are incorrectly positioned while exiting the swimming/crawling state when other players are on screen
-   [MC-265554](https://bugs.mojang.com/browse/MC-265554) Aaron Cherof listed as "Aaron Cherof\\u00a0" in credits.json
-   [MC-265693](https://bugs.mojang.com/browse/MC-265693) Movement does not reset a player's last action time
-   [MC-265695](https://bugs.mojang.com/browse/MC-265695) The feedback for setting the idle timeout to 0 minutes does not reflect the actual behavior
-   [MC-265703](https://bugs.mojang.com/browse/MC-265703) BrushableBlock's codec misspells 'completed' as 'comleted'
-   [MC-265990](https://bugs.mojang.com/browse/MC-265990) Burning arrows can light candles and cakes with candles outside the world border
-   [MC-266441](https://bugs.mojang.com/browse/MC-266441) Multiple trial chamber templates have missing or incorrect blocks
-   [MC-266480](https://bugs.mojang.com/browse/MC-266480) Breeze can jump on top of honey blocks
-   [MC-266494](https://bugs.mojang.com/browse/MC-266494) Jump Boost does not affect the breeze's jump
-   [MC-266949](https://bugs.mojang.com/browse/MC-266949) Monster spawner tries to spawn breezes when the difficulty is Peaceful
-   [MC-267006](https://bugs.mojang.com/browse/MC-267006) The Distance Flown statistics rapidly increases when you are standing in Ender Dragon's hitbox
-   [MC-267107](https://bugs.mojang.com/browse/MC-267107) Spawners unsuccessfully try to summon hostile entities on peaceful difficulty
-   [MC-267308](https://bugs.mojang.com/browse/MC-267308) Profiling with F3+L while game is frozen spams output with errors
-   [MC-267401](https://bugs.mojang.com/browse/MC-267401) All the player skin report's category descriptions use the chat message ones
-   [MC-267838](https://bugs.mojang.com/browse/MC-267838) Projectile yaw rotations have incorrect interpolation, causing flickering
-   [MC-267889](https://bugs.mojang.com/browse/MC-267889) The "blocked\_slot" bundle texture has a miscolored pixel
-   [MC-267957](https://bugs.mojang.com/browse/MC-267957) Eating isn't canceled when feeding untamed wolves raw food
-   [MC-268045](https://bugs.mojang.com/browse/MC-268045) The name of Entity Argument is plural in Query literal node of Experience command
-   [MC-268220](https://bugs.mojang.com/browse/MC-268220) Zoglins ignore monster spawning requirements when spawning naturally
-   [MC-268241](https://bugs.mojang.com/browse/MC-268241) The bottom faces of vaults aren't culled when covered by blocks
-   [MC-268431](https://bugs.mojang.com/browse/MC-268431) External inventory changes except for the hotbar are not registered in a creative mode item selection screen
-   [MC-268518](https://bugs.mojang.com/browse/MC-268518) Attribute generic.luck only affect players
-   [MC-268528](https://bugs.mojang.com/browse/MC-268528) Cave Vines can be pollinated infinitely (instead of limit of 10)
-   [MC-268645](https://bugs.mojang.com/browse/MC-268645) Scheduling a macro function silently fails
-   [MC-268929](https://bugs.mojang.com/browse/MC-268929) pack.png does not support translucent pixels
-   [MC-269083](https://bugs.mojang.com/browse/MC-269083) Effect background texture in inventory renders translucent pixels as opaque
-   [MC-269152](https://bugs.mojang.com/browse/MC-269152) nine\_slice texture scaling will cause ridiculous levels of lag when used on small textures
-   [MC-269352](https://bugs.mojang.com/browse/MC-269352) The breeze rod uses an incorrect model for holding
-   [MC-269375](https://bugs.mojang.com/browse/MC-269375) Breeze's wind charge attack can move or break armor stands when mobGriefing is disabled
-   [MC-269376](https://bugs.mojang.com/browse/MC-269376) Breeze fires wind charge from center of hitbox
-   [MC-269428](https://bugs.mojang.com/browse/MC-269428) Mace fall damage multiplier does not apply to mobs
-   [MC-269440](https://bugs.mojang.com/browse/MC-269440) Text fields render translucent pixels as opaque
-   [MC-269441](https://bugs.mojang.com/browse/MC-269441) Difficulty lock button renders translucent pixels as opaque
-   [MC-269445](https://bugs.mojang.com/browse/MC-269445) Some empty slot icons render translucent pixels as opaque
-   [MC-269447](https://bugs.mojang.com/browse/MC-269447) Hover text background box cannot be retextured
-   [MC-269495](https://bugs.mojang.com/browse/MC-269495) Identifiers for chest boats in a lang file affect both the item tooltip and the container gui
-   [MC-269528](https://bugs.mojang.com/browse/MC-269528) Recipe book tabs are rendered over items held by the mouse cursor
-   [MC-269549](https://bugs.mojang.com/browse/MC-269549) Items held in cursor are rendered behind recipe book UI elements
-   [MC-269622](https://bugs.mojang.com/browse/MC-269622) Previous/Next Page buttons render translucent pixels as opaque
-   [MC-269627](https://bugs.mojang.com/browse/MC-269627) Toasts render translucent pixels as opaque
-   [MC-269656](https://bugs.mojang.com/browse/MC-269656) Feeding parrots poison while holding mace grants Over-Overkill challenge
-   [MC-269715](https://bugs.mojang.com/browse/MC-269715) Food won't be eaten when the component food.eat\_seconds is less than 0.05
-   [MC-269738](https://bugs.mojang.com/browse/MC-269738) Recipe book cannot quick-move oversized item stacks into applicable recipe slots
-   [MC-269751](https://bugs.mojang.com/browse/MC-269751) Advancement frames render translucent pixels as opaque
-   [MC-269814](https://bugs.mojang.com/browse/MC-269814) Can’t feed fish to wolves
-   [MC-269832](https://bugs.mojang.com/browse/MC-269832) Gamemode switcher sprites render translucent pixels as opaque
-   [MC-269834](https://bugs.mojang.com/browse/MC-269834) Statistics screen sprites render translucent pixels as opaque
-   [MC-269851](https://bugs.mojang.com/browse/MC-269851) Breeze idle animations are different than Bedrock Edition
-   [MC-269873](https://bugs.mojang.com/browse/MC-269873) Egg laying drop from chickens is hardcoded
-   [MC-269895](https://bugs.mojang.com/browse/MC-269895) Breezes missing higher fidelity jump animation from Bedrock
-   [MC-269936](https://bugs.mojang.com/browse/MC-269936) Transferable list (resource pack, data pack) screen buttons render translucent pixels as opaque
-   [MC-269937](https://bugs.mojang.com/browse/MC-269937) World list buttons render translucent pixels as opaque
-   [MC-269996](https://bugs.mojang.com/browse/MC-269996) Custom names of Interaction entities render at wrong location
-   [MC-270051](https://bugs.mojang.com/browse/MC-270051) Recipe book button renders translucent pixels as opaque
-   [MC-270113](https://bugs.mojang.com/browse/MC-270113) Trial spawner ominous\_config doesn't save setting values to default
-   [MC-270183](https://bugs.mojang.com/browse/MC-270183) Lingering potions do not give effects when hit on the target's head
-   [MC-270254](https://bugs.mojang.com/browse/MC-270254) Item slot highlight effect cannot be retextured
-   [MC-270299](https://bugs.mojang.com/browse/MC-270299) New data pack component crafting doesn't work with suspicious stews
-   [MC-270306](https://bugs.mojang.com/browse/MC-270306) Disabled item cooldown overlay renders behind effect icons in inventory
-   [MC-270307](https://bugs.mojang.com/browse/MC-270307) Disabled item cooldown renders behind recipe book and its buttons
-   [MC-270314](https://bugs.mojang.com/browse/MC-270314) "Use a Bundle" toast pops up repeatedly if player constantly left-clicks on a bundle while holding an item
-   [MC-270348](https://bugs.mojang.com/browse/MC-270348) Some slime trial spawners in trial chambers won't spawn slimes without player intervention
-   [MC-270510](https://bugs.mojang.com/browse/MC-270510) youJustLostTheGame is not the first item in the mappings
-   [MC-270518](https://bugs.mojang.com/browse/MC-270518) Scrollers in block UIs render translucent pixels as opaque
-   [MC-270519](https://bugs.mojang.com/browse/MC-270519) "Error" textures in block/entity GUIs do not support translucent textures
-   [MC-270527](https://bugs.mojang.com/browse/MC-270527) "tile" texture scaling also causes incredible lag with small textures
-   [MC-270563](https://bugs.mojang.com/browse/MC-270563) Furnace, blast furnace and smoker smelting progress and burn time indicators do not support translucent textures
-   [MC-270564](https://bugs.mojang.com/browse/MC-270564) Brewing stand fuel, bubbles and progress sprites do not support translucent textures
-   [MC-270570](https://bugs.mojang.com/browse/MC-270570) TPS chart uses OS locale specific number formatting
-   [MC-270571](https://bugs.mojang.com/browse/MC-270571) /tick command uses OS locale specific number formatting
-   [MC-270614](https://bugs.mojang.com/browse/MC-270614) A trapdoor in chamber\_8 is rotated the wrong way
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
-   [MC-270742](https://bugs.mojang.com/browse/MC-270742) Displays don't rotate properly between 179 and 180
-   [MC-270764](https://bugs.mojang.com/browse/MC-270764) Recipe book buttons and icons do not render translucent pixels correctly
-   [MC-270765](https://bugs.mojang.com/browse/MC-270765) Bundle background does not handle translucent pixels correctly
-   [MC-270775](https://bugs.mojang.com/browse/MC-270775) Ominous vault failed to generate sometimes
-   [MC-270852](https://bugs.mojang.com/browse/MC-270852) Fully charged projectiles that are thrown or fired at a nearby shulker will not deflect properly
-   [MC-271113](https://bugs.mojang.com/browse/MC-271113) Bees occasionally freezing right before they enter the hives
-   [MC-271191](https://bugs.mojang.com/browse/MC-271191) Poor saving performance due to large amount of item frames
-   [MC-271486](https://bugs.mojang.com/browse/MC-271486) The tree in the "entrance\_1" room of trial chambers is not removed
-   [MC-271628](https://bugs.mojang.com/browse/MC-271628) Enchantment effect "projectile\_spawned" doesn't trigger for fishing rods and tridents
-   [MC-271826](https://bugs.mojang.com/browse/MC-271826) Armor default attribute modifier component can't be removed
-   [MC-271961](https://bugs.mojang.com/browse/MC-271961) Parity Issue: No empty bubbles on the oxygen bar and popping sound
-   [MC-272020](https://bugs.mojang.com/browse/MC-272020) Players' capes don't move with the yaw of their bodies when swinging
-   [MC-272207](https://bugs.mojang.com/browse/MC-272207) Trial chambers no longer generate a bed in the secret room nearing the entrance
-   [MC-272327](https://bugs.mojang.com/browse/MC-272327) Attribute effects not properly postfixed with slot name
-   [MC-272345](https://bugs.mojang.com/browse/MC-272345) Some trial spawners don't have an extra breeze out at once when ominous
-   [MC-272409](https://bugs.mojang.com/browse/MC-272409) Item entity's name ignores `item_name` component
-   [MC-272414](https://bugs.mojang.com/browse/MC-272414) Redundant calculation causes 2x lag during explosions
-   [MC-272506](https://bugs.mojang.com/browse/MC-272506) Fast switching between servers causes disconnect
-   [MC-272603](https://bugs.mojang.com/browse/MC-272603) Riding an entity into the end fountain skips the credits
-   [MC-272643](https://bugs.mojang.com/browse/MC-272643) Items containing using\_converts\_to cannot be stacked with the original items after restarting the world.
-   [MC-272649](https://bugs.mojang.com/browse/MC-272649) After a chest with the item component "container\_loot" is opened, it will appear on the subsequent pick Block
-   [MC-272670](https://bugs.mojang.com/browse/MC-272670) Crash while saving entity NBT - Cannot encode empty ItemStack
-   [MC-272766](https://bugs.mojang.com/browse/MC-272766) When riding a minecart through a portal, the direction the player is facing after they go through the portal is not the same as when they entered
-   [MC-272802](https://bugs.mojang.com/browse/MC-272802) Ender pearls deal no damage to their owners after switching dimensions and landing
-   [MC-272804](https://bugs.mojang.com/browse/MC-272804) The mining fatigue animation plays in reverse
-   [MC-272805](https://bugs.mojang.com/browse/MC-272805) Command blocks made from Pick Block still do not activate when placed near sources of power
-   [MC-272821](https://bugs.mojang.com/browse/MC-272821) Wind Charges incorrectly negate fall damage
-   [MC-272920](https://bugs.mojang.com/browse/MC-272920) Bottles get deleted when drinking a potion when there is more than 1 in a slot
-   [MC-272932](https://bugs.mojang.com/browse/MC-272932) Auto-save text in the pause menu is rendered at the wrong position
-   [MC-272946](https://bugs.mojang.com/browse/MC-272946) The block outline is nearly invisible for some blocks
-   [MC-272994](https://bugs.mojang.com/browse/MC-272994) Allays assigned to a player can be set on fire with sweeping and fire aspect
-   [MC-273076](https://bugs.mojang.com/browse/MC-273076) Breeze immediately forgets the player once Line of Sight is lost, even through transparent blocks
-   [MC-273239](https://bugs.mojang.com/browse/MC-273239) Trial Spawners rapidly change block state when switching gamerule "doMobSpawning" from false to true
-   [MC-273263](https://bugs.mojang.com/browse/MC-273263) Attributes are retained even if destroyed by "damage\_item"
-   [MC-273281](https://bugs.mojang.com/browse/MC-273281) "projectile\_spawned" Enchantment Component runs predicates and effects on projectiles before all of their data has been assigned
-   [MC-273288](https://bugs.mojang.com/browse/MC-273288) Dropping a stack of items while in the creative mode inventory deletes them
-   [MC-273300](https://bugs.mojang.com/browse/MC-273300) Horse armor and wolf armor swap from off-hand to main hand upon pressing the Use Item/Place Block key
-   [MC-273311](https://bugs.mojang.com/browse/MC-273311) Taking near Float.MAX\_VALUE damage from mob attack through commands on hard causes NaN Absorption and Health
-   [MC-273328](https://bugs.mojang.com/browse/MC-273328) Stars are smaller than supposed to
-   [MC-273329](https://bugs.mojang.com/browse/MC-273329) Drinking milk buckets in Creative mode gives you empty buckets
-   [MC-273361](https://bugs.mojang.com/browse/MC-273361) Entities teleported to the player from a force loaded chunk are not rendered
-   [MC-273377](https://bugs.mojang.com/browse/MC-273377) No debug stick in hand, but I can still edit blocks
-   [MC-273400](https://bugs.mojang.com/browse/MC-273400) Baby zombified piglin chicken jockeys immediately teleport
-   [MC-273427](https://bugs.mojang.com/browse/MC-273427) Respawn anchor loses charges when returning from the End
-   [MC-273464](https://bugs.mojang.com/browse/MC-273464) Incorrect partial tick during screen render
-   [MC-273489](https://bugs.mojang.com/browse/MC-273489) Sneaking players' name tags are barely visible
-   [MC-273578](https://bugs.mojang.com/browse/MC-273578) Interaction entities position passengers incorrectly
-   [MC-273601](https://bugs.mojang.com/browse/MC-273601) The channeling enchantment no longer functions on tridents without an owner
-   [MC-273629](https://bugs.mojang.com/browse/MC-273629) Adding effects with an effects\_changed advancement causes a packet error (ConcurrentModificationException) if it was triggered by Milk
-   [MC-273632](https://bugs.mojang.com/browse/MC-273632) Opening or updating the creative inventory while holding a food item with the using\_converts\_to tag causes the item to animate up and down
-   [MC-273662](https://bugs.mojang.com/browse/MC-273662) Trial spawners cannot spawn silverfish at all/have unusually long delays between spawns
-   [MC-273672](https://bugs.mojang.com/browse/MC-273672) When spectatorsGenerateChunks is set to false, the player cannot stop spectating an entity without running /spectate
-   [MC-273745](https://bugs.mojang.com/browse/MC-273745) Soul speed momentum resets when jumping on soul sand
-   [MC-273758](https://bugs.mojang.com/browse/MC-273758) Ominous item spawner's animation breaks if the level.dat "Time" value is over a certain number
-   [MC-273771](https://bugs.mojang.com/browse/MC-273771) Passengers can glitch into walls when their mounts are killed
-   [MC-273811](https://bugs.mojang.com/browse/MC-273811) Ender pearls don't teleport the player if he hasn't been in the pearl's dimension after relog
-   [MC-273812](https://bugs.mojang.com/browse/MC-273812) Intersection chests in trial chambers not generating correctly
-   [MC-273822](https://bugs.mojang.com/browse/MC-273822) The words "forwards" and "backwards" within two movement key bind strings aren't spelled in American English
-   [MC-273828](https://bugs.mojang.com/browse/MC-273828) Movement predicate is incorrect for stationary players until either mouse is moved or one second elapses
-   [MC-273848](https://bugs.mojang.com/browse/MC-273848) Players can spawn underwater again in 1.21
-   [MC-273850](https://bugs.mojang.com/browse/MC-273850) Shield enchantment glint is too bright to clearly see banner patterns
-   [MC-273914](https://bugs.mojang.com/browse/MC-273914) Client game options that do not constitute sending a network packet will send one anyway
-   [MC-273939](https://bugs.mojang.com/browse/MC-273939) Capes clip through the player when taking knockback
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
-   [MC-275011](https://bugs.mojang.com/browse/MC-275011) Instant mine does not work when standing inside of cobwebs
-   [MC-275203](https://bugs.mojang.com/browse/MC-275203) Minecarts always spawn facing east/west and move upward slightly when being placed on rails
-   [MC-275204](https://bugs.mojang.com/browse/MC-275204) Coast Armor Trim has generic "Smithing Template" name
-   [MC-275205](https://bugs.mojang.com/browse/MC-275205) The hand animation is delayed and doesn't play all the time
-   [MC-275208](https://bugs.mojang.com/browse/MC-275208) You cannot move the bundle into or around the inventory using hotkeys
-   [MC-275209](https://bugs.mojang.com/browse/MC-275209) It's impossible to put water in a cauldron underwater
-   [MC-275210](https://bugs.mojang.com/browse/MC-275210) Minecarts can phase through blocks when travelling diagonally upwards
-   [MC-275211](https://bugs.mojang.com/browse/MC-275211) The enchantment glint isn't visible on dropped items
-   [MC-275213](https://bugs.mojang.com/browse/MC-275213) Hand animation still plays when trying to put lava or powder snow in an underwater cauldron
-   [MC-275216](https://bugs.mojang.com/browse/MC-275216) Bowl is consumed when feeding a rabbit stew to a wolf
-   [MC-275218](https://bugs.mojang.com/browse/MC-275218) "Minecart rolls" sound does not play when on tracks after de-railing then re-railing
-   [MC-275219](https://bugs.mojang.com/browse/MC-275219) Hand animation still plays in creative when trying to use minecarts inside each other on the same rail
-   [MC-275220](https://bugs.mojang.com/browse/MC-275220) Picking up a Salmon in a Bucket doesn't keep its size
-   [MC-275221](https://bugs.mojang.com/browse/MC-275221) Baby polar bear model is messed up in 24w33a
-   [MC-275222](https://bugs.mojang.com/browse/MC-275222) Salmons always have same hitbox regardless of their size
-   [MC-275224](https://bugs.mojang.com/browse/MC-275224) Minecart items desync when using them on a rail with a minecart above it
-   [MC-275226](https://bugs.mojang.com/browse/MC-275226) Enchantment glint is not visible on items held by player and mobs in third person
-   [MC-275228](https://bugs.mojang.com/browse/MC-275228) You can duplicate items in your creative hotbar
-   [MC-275229](https://bugs.mojang.com/browse/MC-275229) Minecarts behave strangely on bubble columns
-   [MC-275230](https://bugs.mojang.com/browse/MC-275230) The game crashes when opening the inventory while in spectator mode
-   [MC-275232](https://bugs.mojang.com/browse/MC-275232) The mining fatigue animation appears too close
-   [MC-275236](https://bugs.mojang.com/browse/MC-275236) Gamerule minecartMaxSpeed doesn't affect downward velocity
-   [MC-275237](https://bugs.mojang.com/browse/MC-275237) Cannot rename written book in an anvil
-   [MC-275239](https://bugs.mojang.com/browse/MC-275239) Item duplication while a screen is opened (Creative Mode)
-   [MC-275241](https://bugs.mojang.com/browse/MC-275241) Minecarts continue to produce sound for a short while after being stopped
-   [MC-275246](https://bugs.mojang.com/browse/MC-275246) Crash after attempting to move item from off-hand in Creative inventory
-   [MC-275248](https://bugs.mojang.com/browse/MC-275248) Torches no longer have bottom faces
-   [MC-275249](https://bugs.mojang.com/browse/MC-275249) "FOV Effects" slider incorrectly modifying zoom values on the spyglass
-   [MC-275252](https://bugs.mojang.com/browse/MC-275252) Player head angle when crawling is now strange
-   [MC-275256](https://bugs.mojang.com/browse/MC-275256) Snow golem shoots to the sky/floor instead of at mobs
-   [MC-275270](https://bugs.mojang.com/browse/MC-275270) Minecart not oriented correctly when placed on a sloped unpowered powered rail
-   [MC-275271](https://bugs.mojang.com/browse/MC-275271) Crash after attempting to move item to hotbar slot in Creative inventory
-   [MC-275273](https://bugs.mojang.com/browse/MC-275273) Baby mooshroom uses wrong scale
-   [MC-275275](https://bugs.mojang.com/browse/MC-275275) Footsteps on Monster Spawners create missing subtitle
-   [MC-275276](https://bugs.mojang.com/browse/MC-275276) Minecarts can phase through blocks at the bottom of a slant
-   [MC-275277](https://bugs.mojang.com/browse/MC-275277) Trial chambers' encounter\_4 trap often does not hit the player
-   [MC-275279](https://bugs.mojang.com/browse/MC-275279) Raiders do not spawn on small islands even though there are close enough places around the village
-   [MC-275289](https://bugs.mojang.com/browse/MC-275289) There are empty chests in some chambers even after 24w33a
-   [MC-275293](https://bugs.mojang.com/browse/MC-275293) Internal exception when picking blocks not in hotbar but in inventory
-   [MC-275296](https://bugs.mojang.com/browse/MC-275296) Emissive textures are not emissive in the player's hand
-   [MC-275297](https://bugs.mojang.com/browse/MC-275297) Failing selectors and fake players in "score" selector result in an unexpected error
-   [MC-275298](https://bugs.mojang.com/browse/MC-275298) Blocks with special collision behavior have a larger detection range than previously
-   [MC-275299](https://bugs.mojang.com/browse/MC-275299) Crafting using Ctrl + Drop key crafts the incorrect amount of items
-   [MC-275300](https://bugs.mojang.com/browse/MC-275300) Mace smash attack damage does not work with mobs, even though particles and sounds happen
-   [MC-275302](https://bugs.mojang.com/browse/MC-275302) The animation speed of end crystals is no longer constant
-   [MC-275307](https://bugs.mojang.com/browse/MC-275307) Hand doesn't show up when switching from Spectator mode
-   [MC-275310](https://bugs.mojang.com/browse/MC-275310) Cannot enchant armor in enchanting table
-   [MC-275319](https://bugs.mojang.com/browse/MC-275319) End crystals in 24w33a appear to be slightly smaller than in previous versions
-   [MC-275322](https://bugs.mojang.com/browse/MC-275322) "Subspace Bubble" is granted when exiting and entering some Nether Portals
-   [MC-275323](https://bugs.mojang.com/browse/MC-275323) Pressing F3 + A to reload chunks crashes the game
-   [MC-275328](https://bugs.mojang.com/browse/MC-275328) Enchantment glint is not visible on items in item frames
-   [MC-275329](https://bugs.mojang.com/browse/MC-275329) As of 24w33a zombie villagers no longer raise their arms to attack
-   [MC-275332](https://bugs.mojang.com/browse/MC-275332) The rotation of a wall/ceiling lever and button does not affect the update order of wire in Redstone Experiment
-   [MC-275343](https://bugs.mojang.com/browse/MC-275343) Projectiles stuck in the world border can float in the air if the border size is changed
-   [MC-275344](https://bugs.mojang.com/browse/MC-275344) Sweet Berry Bushes deal damage inconsistently
-   [MC-275345](https://bugs.mojang.com/browse/MC-275345) Inventory bug that causes items to be constantly shuffled
-   [MC-275347](https://bugs.mojang.com/browse/MC-275347) Minecart with Furnace does not travel correctly over curves
-   [MC-275352](https://bugs.mojang.com/browse/MC-275352) Spectral arrow texture is not updated properly for Programmer Art
-   [MC-275353](https://bugs.mojang.com/browse/MC-275353) Item Frame/Glow Item Frame "Fixed" tag behaving strangely since 24w33a
-   [MC-275358](https://bugs.mojang.com/browse/MC-275358) Renamed bundle's contents are not centered
-   [MC-275361](https://bugs.mojang.com/browse/MC-275361) Baby zombie variant arms disconnect from their body when attacking
-   [MC-275377](https://bugs.mojang.com/browse/MC-275377) Derailed minecarts snap onto nearby rails after falling down
-   [MC-275397](https://bugs.mojang.com/browse/MC-275397) Redstone dust doesn't update properly
-   [MC-275406](https://bugs.mojang.com/browse/MC-275406) Grammatical error in "options.rotateWithMinecart.tooltip"
-   [MC-275409](https://bugs.mojang.com/browse/MC-275409) Stuffing too many items into a bundle through commands will cause the capacity bar to overflow
-   [MC-275410](https://bugs.mojang.com/browse/MC-275410) Flying in Creative Mode no longer resists the thrust of the bubble column
-   [MC-275413](https://bugs.mojang.com/browse/MC-275413) Squids and glow squids are not affected by the thrust of the bubble column
-   [MC-275417](https://bugs.mojang.com/browse/MC-275417) Creepers can destroy vehicles even if mobGriefing is set to false
-   [MC-275418](https://bugs.mojang.com/browse/MC-275418) Feeding baby dolphins won't speed up their growth
-   [MC-275436](https://bugs.mojang.com/browse/MC-275436) Cannot enchant books in enchanting table
-   [MC-275437](https://bugs.mojang.com/browse/MC-275437) Fast moving entities freeze the server which causes watchdog crash
-   [MC-275445](https://bugs.mojang.com/browse/MC-275445) Specifying the size of a target in post effect shaders fails
-   [MC-275450](https://bugs.mojang.com/browse/MC-275450) Player Motion data no longer updates while riding another entity
-   [MC-275451](https://bugs.mojang.com/browse/MC-275451) Bundles do not use data for textures when the item in the bundle is rendered in the inventory
-   [MC-275455](https://bugs.mojang.com/browse/MC-275455) Player motion is no longer retained on relative teleportation
-   [MC-275462](https://bugs.mojang.com/browse/MC-275462) Bats can spawn in unusual places, such as in woodland mansions and beneath trees
-   [MC-275467](https://bugs.mojang.com/browse/MC-275467) Minecarts can launch you hundreds of thousands of blocks upwards if you derail inside cobwebs or powdered snow
-   [MC-275468](https://bugs.mojang.com/browse/MC-275468) Gamerule minecartMaxSpeed can't be set through functions
-   [MC-275473](https://bugs.mojang.com/browse/MC-275473) Slim model's arms are now lower than the torso by 0.5 pixels
-   [MC-275479](https://bugs.mojang.com/browse/MC-275479) Dispensers cannot place minecarts onto rails if there is a minecart one block away
-   [MC-275482](https://bugs.mojang.com/browse/MC-275482) Minecarts do not pick up mobs like they used to
-   [MC-275486](https://bugs.mojang.com/browse/MC-275486) Enchantable data component doesn't work with items that only have enchantments through a data pack
-   [MC-275497](https://bugs.mojang.com/browse/MC-275497) The repairable data component does not exist in armor items by default
-   [MC-275498](https://bugs.mojang.com/browse/MC-275498) Clocks, compasses and recovery compasses don't function in item frames
-   [MC-275504](https://bugs.mojang.com/browse/MC-275504) Custom model data is not applied to open bundle
-   [MC-275505](https://bugs.mojang.com/browse/MC-275505) The /tp command forces a mounted entity to dismount
-   [MC-275521](https://bugs.mojang.com/browse/MC-275521) Tall seagrass can now generate when bone mealing one-high water
-   [MC-275523](https://bugs.mojang.com/browse/MC-275523) Reduced shield glint applies to the shield's item appearance
-   [MC-275537](https://bugs.mojang.com/browse/MC-275537) Sliding down honey blocks is slower than in previous versions
-   [MC-275538](https://bugs.mojang.com/browse/MC-275538) Breeze still do not attack when super close to them
-   [MC-275544](https://bugs.mojang.com/browse/MC-275544) Drowned do not summon reinforcements anymore
-   [MC-275553](https://bugs.mojang.com/browse/MC-275553) Minecarts which exit the end onto no rails are left permamentally tilted
-   [MC-275554](https://bugs.mojang.com/browse/MC-275554) Minecarts between two downward slopes will shake violently and never settle
-   [MC-275566](https://bugs.mojang.com/browse/MC-275566) Game crash when trying to open various GUIs with Fabulous graphics
-   [MC-275569](https://bugs.mojang.com/browse/MC-275569) Outer layer of the skin shows when disabled until you go into third person
-   [MC-275586](https://bugs.mojang.com/browse/MC-275586) Renamed items highlighted in the bundle are not in italics
-   [MC-275612](https://bugs.mojang.com/browse/MC-275612) Items with rarity values highlighted in bundles do not display their rarity colors
-   [MC-275622](https://bugs.mojang.com/browse/MC-275622) Minecarts with TNT are more volatile than in previous releases
-   [MC-275624](https://bugs.mojang.com/browse/MC-275624) Redstone wire with custom model unexpectedly appears green
-   [MC-275628](https://bugs.mojang.com/browse/MC-275628) Minecarts transitioning from even to downward rails, derail above a certain speed
-   [MC-275631](https://bugs.mojang.com/browse/MC-275631) You cannot stop a minecart by standing in the way if it's on an ascending track
-   [MC-275638](https://bugs.mojang.com/browse/MC-275638) It is still possible to go through portals without being teleported when going quickly enough by throwing riptide tridents
-   [MC-275642](https://bugs.mojang.com/browse/MC-275642) Baby dolphins do not spawn naturally
-   [MC-275655](https://bugs.mojang.com/browse/MC-275655) Entity rotation does not visually update when using the teleport command until the world is reloaded
-   [MC-275677](https://bugs.mojang.com/browse/MC-275677) Minecarts sometimes aren't affected by cobwebs when moving upwards
-   [MC-275706](https://bugs.mojang.com/browse/MC-275706) Vanilla clients can't display items with components in recipe book anymore
-   [MC-275745](https://bugs.mojang.com/browse/MC-275745) A scoreboard objective with display mode below\_name renders right behind the player's name
-   [MC-275792](https://bugs.mojang.com/browse/MC-275792) Bottom faces of torches and soul torches are not culled against solid blocks
-   [MC-275834](https://bugs.mojang.com/browse/MC-275834) Jumping when falling onto a slime block no longer cancels the bounce effect
-   [MC-275838](https://bugs.mojang.com/browse/MC-275838) Drowned holds trident upside down
-   [MC-275919](https://bugs.mojang.com/browse/MC-275919) issues with hit detection/registration in PvP since server switch to 1.21
-   [MC-275998](https://bugs.mojang.com/browse/MC-275998) Menu blur turns glowing outlines black
-   [MC-276005](https://bugs.mojang.com/browse/MC-276005) The text of sneaking players' name tags is rendered completely invisible or barely visible when the "Text Background Opacity" accessibility option is set to high values
-   [MC-276007](https://bugs.mojang.com/browse/MC-276007) Players' name tags that are behind blocks or entities are rendered invisible or partly invisible depending on the angle you're facing
-   [MC-276134](https://bugs.mojang.com/browse/MC-276134) Can't scroll in creative inventory while hovered over the bundle
-   [MC-276305](https://bugs.mojang.com/browse/MC-276305) Bundles no longer available without enabling feature flag
-   [MC-276341](https://bugs.mojang.com/browse/MC-276341) The time how long you remain on fire no longer increases while being in the fire
-   [MC-276391](https://bugs.mojang.com/browse/MC-276391) The item durability and bundle fullness bars render incorrectly when held over recipe book elements
-   [MC-276433](https://bugs.mojang.com/browse/MC-276433) set\_enchantments function removes enchantments component from books
-   [MC-276459](https://bugs.mojang.com/browse/MC-276459) Item display rotation wrapping does not interpolate cleanly
-   [MC-276807](https://bugs.mojang.com/browse/MC-276807) All blocks and entities flicker at night or at lower light levels than 15
-   [MC-276852](https://bugs.mojang.com/browse/MC-276852) Shulker boxes can be colored in the same color they are made of
-   [MC-276936](https://bugs.mojang.com/browse/MC-276936) Foxes eat soup won't leave the bowl
-   [MC-277688](https://bugs.mojang.com/browse/MC-277688) Force disconnect when quickly editing then breaking sign

---

# Minecraft: Java Edition 1.21.10

It's hotfixin' time in the shipping room this week! Today we are releasing 1.21.10 to address some important issues that have been reported for 1.21.9.

And for those of you that were hoping for a Snapshot release today, fret not! We are planning on releasing that one later this week. Exciting times!

Happy mining!

## Fixed bugs in 1.21.10

-   [MC-211096](https://bugs.mojang.com/browse/MC-211096) Entities in cobwebs clip though pistons
-   [MC-278182](https://bugs.mojang.com/browse/MC-278182) Items glitch inside the piston head when pushed through powder snow or cobwebs
-   [MC-301916](https://bugs.mojang.com/browse/MC-301916) The behavior of wind charges when colliding with certain blocks is different
-   [MC-302321](https://bugs.mojang.com/browse/MC-302321) Chunks don't load while the player is being teleported
-   [MC-302383](https://bugs.mojang.com/browse/MC-302383) Rooms with carpet on the floor cannot have maps in item frames placed on walls touching the floor
-   [MC-302405](https://bugs.mojang.com/browse/MC-302405) Repeating/chain command blocks with any form of a '/tp ' command doesn't constantly teleport the player to one spot

---

# Minecraft: Java Edition 1.21.1

It will soon be time for new snapshots, but before that: we are now releasing Minecraft 1.21.1. This is a hotfix version that addresses some critical exploits.

We highly recommend that server owners upgrade to this version. Players on Minecraft 1.21 will be able to join servers running on 1.21.1.

## Changes

-   Fixed critical exploits that could be used to crash servers
-   Added language support for Tzotzil and Belarusian (Latin)

---

# Minecraft: Java Edition 1.21

It's a fantastic day today, because it's release day Thursday! And not just any old release day. This one is extra special because today we're shipping Minecraft: Java Edition 1.21, also known as the Tricky Trials Update!

Venture into the hazardous Trial Chambers alone or with friends, face off against the new Breeze mob and craft a smashingly powerful new weapon, the Mace! Take your ingenious Redstone designs to new heights with the Crafter, play around with the Wind Charge, discover new decorative blocks made of Copper and Tuff, enjoy new Paintings, Music Discs, and more!

And that's not all! On the technical side, Tricky Trials is heralding a new age for data packs with Enchantments, Paintings and Jukebox Music Discs now being data-driven. With this release, we're also going live with performance improvements to chunk loading that were introduced in 24w19a, which reduces memory and CPU overhead compared to the old system.

Embark on your very first adventure in Tricky Trials by delving into the full changelog below, it's a long one!

Happy mining!

## New Features

-   Added a new underground structure called the Trial Chambers
-   Added 2 new mobs
    -   Breeze
    -   Bogged
-   Added a new weapon, the Mace
-   Added 3 new enchantments exclusive to the Mace
    -   Density
    -   Breach
    -   Wind Burst
-   Added the following blocks:
    -   Crafter
    -   Trial Spawner
    -   Ominous Trial Spawner
    -   Vault
    -   Ominous Vault
    -   New variants in the Copper Family
    -   New variants in the Tuff Family
    -   Heavy Core
-   Added the following items:
    -   Trial Explorer Map
    -   Ominous Bottle
    -   Wind Charge
    -   Trial Key
    -   Ominous Trial Key
    -   Breeze Rod
    -   3 new Pottery Sherds
    -   2 new Banner Patterns
    -   2 new Armor Trims
    -   4 new Potions
        -   Potion of Infestation
        -   Potion of Oozing
        -   Potion of Weaving
        -   Potion of Wind Charging
    -   4 new Tipped Arrows
        -   Arrow of Infestation
        -   Arrow of Oozing
        -   Arrow of Weaving
        -   Arrow of Wind Charging
-   Added 3 new Music Discs by Aaron Cherof and Lena Raine
-   Added 20 new Paintings
    -   5 by artist Sarah Boeving
    -   15 by artist Kristoffer Zetterstrand
-   Redesigned Bad Omen to give access to Ominous Events
-   Added 6 new Status Effects
    -   Infested
    -   Oozing
    -   Weaving
    -   Wind Charged
    -   Raid Omen
    -   Trial Omen
-   Added 9 new music tracks by Aaron Cherof, Kumi Tanioka, and Lena Raine
-   Added 8 new Advancements
-   Added 4 new cave ambient sounds
-   Boats are now leashable

![Sunny and Makena are posing in a Trial Chamber, showcasing the new Flow and Bolt Armor Trims.](https://launchercontent.mojang.com/v2/images/t1.21newtrialchamberspatterns.jpg)

### Structures

#### Trial Chambers

-   Trial Chambers are a new structure in the Overworld where players can explore and take on combat challenges
    -   Made out of a variety of Copper and Tuff blocks, and can be found in different sizes
    -   A relatively common find throughout the Deepslate layer of the underground
    -   Natural mob spawning does not occur inside, similar to Ancient Cities
    -   Never starts inside a Deep Dark biome, but can sometimes overlap it
-   The layout of each Trial Chamber is procedurally generated, and can include traps, rewards and a variety of combat areas
    -   Decorated Pots line the corridors and hold hidden treasures
    -   Supply Barrels can be found between different rooms, and give you blocks and items which help you navigate your trials
    -   Vaults are guarded by challenges in each room, and can be a source of many high level Enchanted Books and equipment including a very rare chance to receive a Trident
    -   Ominous Vaults can be found in harder to reach places and give even better loot than standard Vaults, including some items which are exclusive to Ominous Vaults
-   Each Trial Chamber will include Trial Spawners with a melee, small melee, or ranged category:
    -   Melee
        -   Zombie
        -   Husk
        -   Spider
    -   Small Melee
        -   Slime
        -   Cave Spider
        -   Baby Zombie
        -   Silverfish
    -   Ranged
        -   Skeleton
        -   Stray
        -   Bogged
-   Each Trial Spawner category will only use one mob for the entire structure when generated, and these mobs are randomized for each Trial Chamber
    -   For example, one Trial Chamber might only spawn Zombies, Cave Spiders and Strays, while another might only spawn Spiders, Silverfish and Skeletons
    -   The exceptions to this are some Trial Spawners in unique rooms which always spawn Breezes

### Mobs

#### Breeze

-   A cunning hostile mob spawned by some Trial Spawners in Trial Chamber rooms
    -   Drops 1-2 Breeze Rods when killed by a player
    -   The number of Breeze Rods dropped is affected by looting enchantments
-   Moves primarily by leaping around its target
-   Deflects almost all projectiles, making it immune to ranged combat
    -   With one notable exception: it cannot deflect Wind Charges
-   An aggressive adversary, it shoots volatile wind energy in the form of Wind Charge projectiles at its target
    -   After colliding with an entity or a block, Wind Charge projectiles produce a Wind Burst, which knocks back entities in the area
    -   Wind Charges deal a small amount of damage when colliding directly with an entity
    -   Wind Charges break decorated pots and chorus flower blocks upon collision
-   Wind Bursts have the effect of 'activating' certain blocks:
    -   Non-Iron Doors and Trapdoors are flipped
    -   Fence Gates are flipped
    -   Buttons are pressed
    -   Levers are flipped
    -   Bells are rung and swung
    -   Lit Candles are extinguished
-   Wind Bursts do not have any effect on Iron Doors, Iron Trapdoors, or any block being held in its position by a Redstone signal
-   Will not retaliate against attacks from the following mobs: Skeletons, Strays, Bogged, Zombies, Husks, Spiders, Cave Spiders and Slimes
    -   The same mobs will not retaliate against a Breeze when hurt by its Wind Charge projectile

#### Bogged

-   A new variant of Skeletons that shoots poisonous arrows
    -   They're easier to take down with 16 health instead of 20 health
    -   They attack at a slower interval of 3.5 seconds instead of 2 seconds
-   Has a chance to drop Arrows of Poison when killed by players
-   These mossy and mushroom covered Skeletons spawn naturally in Swamps and Mangrove Swamps
    -   Can also be found spawning from Trial Spawners in some Trial Chambers
-   Drops 2 mushrooms when sheared (either both red, both brown, or one of each)

![A Bogged is aiming its Bow at something at night in a Swamp. It is a Skeleton variation with moss on its bones and Mushrooms growing on its head. The Moon is rising between Mangrove trees in the background.](https://launchercontent.mojang.com/v2/images/t1.21newbogged.jpg)

### Weapons

#### Mace

-   A new heavy weapon to smash your enemies!
    -   Has a base damage of 5
    -   Can be crafted with a Breeze Rod and a Heavy Core
    -   Using it will decrease its durability like any other weapon; can be repaired with Breeze Rods at an Anvil
-   Has a unique attack called the smash attack. When the player falls more than 1.5 blocks before hitting, a smash attack is triggered which has multiple effects:
    -   Safe Fall: Resets all vertical momentum and negates any fall damage accumulated from the fall
    -   Extra Damage: Does more damage the further the player fell before hitting the target with it:
        -   For the first 3 blocks fallen: Add 4 damage per block
        -   For the next 5 blocks fallen: Add 2 damage per block
        -   For any blocks fallen after: Add 1 damage per block
    -   Great Knockback: Other entities near the struck enemy will be knocked back by the immense force of the Mace
-   Can be used in combination with Wind Charges to launch up and deliver devastating smash attacks to enemies
-   These existing enchantments can be applied to the Mace:
    -   Mending
    -   Unbreaking
    -   Smite
    -   Bane of Arthropods
    -   Fire Aspect
    -   Curse of Vanishing
-   The Mace also has 3 exclusive enchantments: Density, Breach and Wind Burst

![Noor is using a Mace with a Wind Burst enchantment to fight a group of Pillagers next to a Pillager Outpost. One of the Pillagers is dramatically thrown towards the viewer by the Wind Burst explosion, while the others are aiming their Crossbows at Noor.](https://launchercontent.mojang.com/v2/images/t1.21newmace.jpg)

### Enchantments

Three new enchantments have been added which are exclusive to the Mace

-   Density
    -   Common Enchantment, accessible in the Enchanting Table and on Enchanted Books in random loot chests
    -   Has 5 levels
    -   Maces enchanted with Density do more damage per fallen block per Density level
        -   Damage dealt per fallen block is increased by 0.5 per level of Density
    -   Mutually exclusive with Breach, Smite, and Bane of Arthropods
-   Breach
    -   Rare Enchantment, accessible in the Enchanting Table and on Enchanted Books in random loot chests
    -   Has 4 levels
    -   Maces enchanted with Breach reduce the effectiveness of armor on the target
        -   The effectiveness of the armor is reduced by 15% per Breach level
    -   Mutually exclusive with Density, Smite, and Bane of Arthropods
-   Wind Burst
    -   Unique enchantment which can only be found in Ominous Vaults
        -   Only Wind Burst I can be found, higher levels must be obtained by combining them in an Anvil
    -   Has 3 levels
    -   Maces enchanted with Wind Burst will emit a Wind Burst upon hitting an enemy, launching the attacker upward and enabling the linking of smash attacks one after the other
    -   Successfully landing a Wind Burst attack causes the player to lose the fall damage protection they would otherwise have from landing a successful smash attack
    -   Each level will bounce the attacker an additional 7 blocks into the air

### Blocks

#### Crafter

-   A new block that enables the crafting of items and blocks via Redstone
    -   Can be crafted with 5 Iron Ingots, 2 Redstone Dust, 1 Crafting Table and 1 Dropper
-   Will eject one crafting result at a time when powered by a Redstone pulse
    -   Its current powered state is indicated by Redstone crystals on its back face, which will light up
    -   The crafting grid on its top face will light up red when it successfully crafts a recipe
-   Upon receiving a signal, it will eject the recipe result from the front face
    -   If the recipe output has any remainder items (such as a Bucket), the result and remainder items will be ejected together
-   When placed, the front face of the Crafter will face towards the player

![An automated rail Crafter is producing rails. Makena is collecting the rails and Noor is building a railway.](https://launchercontent.mojang.com/v2/images/t1.21newcrafter.jpg)

##### Crafter User Interface

-   Has a 3x3 interactable crafting grid
-   The crafting grid slots are toggleable, meaning that the player can change the behavior of a slot by interacting with it while not holding an item
-   A slot that is ‘toggled’ cannot hold any items
    -   Other blocks such as Hoppers and Droppers also cannot place items into them
-   Unlike the Crafting Table, the Crafter displays a preview of the crafted item which will be crafted and ejected on the next Redstone pulse, but cannot be manually taken out by the player
    -   The arrow pointing out from the recipe grid will light up red when the Crafter is currently powered
-   The Crafter User Interface is shared between all players interacting with it, meaning that multiple players can interact with the Crafter at the same time, similar to Chests and Hoppers

##### Crafter Interaction with Other Blocks

-   The signal strength of a Comparator reading a Crafter is 0-9, where each non-empty or toggled slot adds 1 strength
-   Hoppers and Minecarts with Hoppers can be used to both insert and extract items from the Crafter
-   Droppers can be used to insert items into the Crafter
-   Items inserted from another block (ex: Hopper, Dropper) will fill the Crafter's slots based on these rules:
    -   Prioritize the first empty slot (from left-to-right, top-to-bottom)
    -   If there are no empty slots then prioritize the smallest stack of the same item (pick the first if there are multiple)
    -   If there is a toggled slot it will be skipped. The item will then be moved into the container
    -   If the item cannot be moved, it will be ejected into the world
-   Items are removed from Crafters by Hoppers and Minecarts with Hoppers in the same order as from other containers like Chests

#### Trial Spawner

-   A new variant of Monster Spawners that ejects rewards upon defeat
    -   Cannot be crafted nor obtained by players in Survival - instead, they can be found naturally throughout Trial Chambers
    -   Very slow to mine and resistant to explosions, and will not drop even with Silk Touch
    -   Cannot be moved by Pistons
-   The challenge level will increase for each new player a Trial Spawner notices nearby
    -   The challenge level will not decrease until it is reset during a Trial Spawner's cooldown
    -   Trial Spawners can only notice players which are in line of sight, and will ignore Creative and Spectator players
-   Unlike normal Spawners, a Trial Spawner will spawn a limited number of mobs proportional to its current challenge level
    -   It can only spawn a mob at positions that are within line of sight
    -   It can spawn a mob regardless of any light level requirement the mob has
    -   Spawned mobs are persistent
-   Once all mobs are defeated, the Trial Spawner will eject a number of rewards which is proportional to the current challenge level
    -   After the rewards have been ejected, the Trial Spawner goes into cooldown for 30 minutes, during which it will no longer spawn mobs
-   When placed in Creative, Trial Spawners have no mob type set by default
    -   The mob type can be set by interacting with it while holding a Spawn Egg
-   Has an Ominous Trial Spawner variant, accessible through an Ominous Trial

#### Vault

-   A block that holds locked treasure and loot - players must find the right key to eject its rewards
    -   Can be found throughout Trial Chambers, containing the structures' most valuable loot
    -   Vaults in Trial Chambers require a Trial Key to be unlocked
    -   Cannot be crafted nor obtained in Survival, and does not drop anything when mined
    -   Explosion resistant and cannot be moved by Pistons
-   Can be unlocked by an unlimited number of players
    -   After a player has unlocked a Vault, they cannot personally unlock that Vault again
    -   If a player has not unlocked a particular Vault before, this can be seen by an orange stream of particles that flow from the player to that Vault when nearby
-   Has a keyhole that will be open or closed depending on the players nearby
    -   If any nearby player has not unlocked that Vault, the keyhole will be open
    -   If all nearby players have unlocked that Vault, the keyhole will be closed
-   Within its cage, it will cycle through and display items which are possible to eject from its loot table
    -   Players cannot time their unlocks to eject the item that is currently displayed in the cage
-   The loot it ejects is randomized each time it is unlocked
-   Has an Ominous Vault variant, unlockable through an Ominous Trial

#### Copper Family

-   The Copper family of blocks has been expanded to add:
    -   Chiseled Copper
    -   Copper Grate
    -   Copper Bulb
    -   Copper Door
    -   Copper Trapdoor
    -   Oxidized and waxed variants of all of the above

##### Chiseled Copper

-   Crafted with 2 Cut Copper Slabs of a shared oxidation level
-   Can be crafted in the Stonecutter

##### Copper Grate

-   A new type of decorative block unique to the Copper family
-   Crafted with 4 Copper Blocks of a shared oxidation level
    -   Stonecutting a Copper Block into Copper Grates outputs 4 Copper Grates
-   Properties:
    -   Transparent and allows light to pass through
    -   Mobs cannot suffocate inside them
    -   Cannot conduct Redstone
    -   Hostile mobs cannot naturally spawn on them
    -   Can hold water

##### Copper Bulb

-   A light-emitting block that can toggle its light emission through Redstone pulses
-   Oxidizes like other Copper blocks, and emits light based on oxidation level
    -   Copper Bulb: Light level 15
    -   Exposed Copper Bulb: Light level 12
    -   Weathered Copper Bulb: Light level 8
    -   Oxidized Copper Bulb: Light level 4
-   When placed, its light is off by default
    -   While it is unpowered, it will toggle its light on or off when it receives a Redstone pulse
    -   Its light will stay on even when the Redstone source is removed, and will only toggle off when it receives another Redstone pulse
-   A Redstone crystal can be seen in its center while it is powered by a Redstone signal
-   Similar to Glass Blocks, it does not conduct Redstone power
-   Comparators reading a Copper Bulb will output a signal strength of 15 if the Copper Bulb's light is on
-   The crafting recipe for 4 Copper Bulbs is:
    -   3 Copper Blocks of a shared oxidation level
    -   1 Blaze Rod
    -   1 Redstone Dust

##### Copper Doors and Trapdoors

-   Copper variants of Doors and Trapdoors that can oxidize over time and be waxed
-   Behaves like wooden doors, meaning they can be opened and closed with interaction as well as Redstone
    -   Can be opened by mobs that have the ability to open doors
-   Crafted with Copper Ingots

#### Tuff Family

-   Tuff has been expanded to have its own family of blocks:
    -   Stair, Slab, Wall and Chiseled variants
    -   Tuff Bricks with Stair, Slab, Wall and Chiseled variants
    -   Polished Tuff with Stair, Slab and Wall variants
-   All Tuff variants can be crafted in the Stonecutter

#### Heavy Core

-   A mysterious, dense block which can be combined with a Breeze Rod to craft the Mace
-   Can only be obtained from Ominous Vaults

![A house built out of Tuff Bricks, Chiseled Tuff and new Copper-based blocks. Decorative Pots with new Guster and Flow patterns are also visible.](https://launchercontent.mojang.com/v2/images/t1.21newtuff.jpg)

### Items

#### Trial Explorer Map

-   Used to locate a nearby Trial Chamber
-   Level up a Cartographer Villager to Journeyman for the opportunity to trade for this map

#### Ominous Bottle

-   An item which can be consumed by players to receive the Bad Omen effect for 1 hour and 40 minutes
    -   Comes in 5 variations, one for each Bad Omen level
    -   The bottle breaks when consumed
    -   Can be stacked to 64
-   Ominous Bottles can be found uncommonly in any Vaults, and are dropped by Raid Captains which are defeated outside a Raid

#### Wind Charge

-   Become the Breeze! Using this item will fire off a Wind Charge projectile similar to the Breeze's
    -   Can be used to launch entities away from the impact of the Wind Burst
    -   Grants 10% more knockback than a Breeze's, but has a much smaller area of impact
    -   Deals damage if it hits an entity directly
    -   Has a half-second cooldown after each use
    -   Can be fired from a dispenser
-   Players can use Wind Charges to propel themselves high into the air
    -   Players that launch themselves with a Wind Charge only accumulate fall damage below the height of where they collided with the Wind Burst
    -   As an example, if a player uses a Wind Charge to launch themselves 9 blocks into the air, and they do not land lower than where they initially launched, they will take 0 damage

![Sunny is using Wind Charges to jump across rocky formations in Badlands. The Wind Charge particles are visible where they jumped up from.](https://launchercontent.mojang.com/v2/images/t1.21newwindcharge.jpg)

#### Trial Key

-   An item that can only be obtained from Trial Spawners
-   Can be used to unlock Vaults

#### Breeze Rod

-   An item dropped by a Breeze that can be crafted into 4 Wind Charges, or used with the Heavy Core to craft a Mace

#### Pottery Sherds

-   Added Flow, Guster, and Scrape Pottery Sherds
-   These can be obtained by breaking Decorated Pots that display them in Trial Chambers

#### Banner Patterns

-   Added Flow Banner Pattern, found in Vaults
-   Added Guster Banner Pattern, found in Ominous Vaults

#### Armor Trims

-   Added Bolt Armor Trim and Smithing Template, found in Vaults
    -   Can be duplicated using a Copper Block or Waxed Copper
-   Added Flow Armor Trim and Smithing Template, found in Ominous Vaults
    -   Can be duplicated using a Breeze Rod

### Music Discs

Added 3 new music discs:

-   "Precipice" by Aaron Cherof. Can be found rarely in standard Vaults, and has a comparator output of 13 when played in a Jukebox
-   "Creator" by Lena Raine. Can be found rarely in Ominous Vaults, and has a comparator output of 12 when played in a Jukebox
-   "Creator (Music Box)" by Lena Raine. Can be found rarely in Decorated Pots broken in Trial Chambers, and has a comparator output of 11 when played in a Jukebox

### Paintings

Added five new paintings by artist Sarah Boeving:

-   Baroque
-   Humble
-   Meditative
-   Prairie Ride
-   Unpacked

Added fifteen new paintings by artist Kristoffer Zetterstrand:

-   Backyard
-   Bouquet
-   Cavebird
-   Changing
-   Cotan
-   Fern
-   Endboss
-   Finding
-   Lowmist
-   Orb
-   Owlemons
-   Passage
-   Pond
-   Sunflowers
-   Tides

![Noor is looking at the new paintings in a gallery. "Unpacked" by Sarah Boeving is in the forefront. Around Noor, six items are displayed on Chiseled Tuff Brick stands: 3 new Music Discs, an enchanted Mace, an enchanted Golden Sword, and an enchanted Copper Door.](https://launchercontent.mojang.com/v2/images/t1.21newmuseum.jpg)

### Ominous Events

-   Bad Omen has been expanded to give access to an optional experience in Trial Chambers
-   These optional experiences can be accessed through Bad Omen, and are now known as Ominous Events
    -   They are more challenging than usual, and are designed to shake up the experience in unique ways
    -   Raids are an example of an existing Ominous Event
-   As a result, Bad Omen has a new, shadowy icon and a sound for being applied to the player
    -   It is no longer given to players that defeat a Raid Captain outside a Raid
    -   Instead, players can gain access to Bad Omen by consuming the new Ominous Bottle item

#### Raids

-   Bad Omen no longer triggers a Raid directly when entering a Village
    -   Instead, it will transform into a Raid Omen variant with a duration of 30 seconds
    -   Once the Raid Omen expires, a Raid will start at the location the player gained the Raid Omen
    -   Like any other effect, players can drink a Bucket of Milk to clear the Raid Omen, preventing the Raid from starting

#### Ominous Trials

-   A new Ominous Event that can be accessed by exploring a Trial Chamber while Bad Omen is active
-   This event will have players facing more powerful Ominous Trial Spawners, if they dare

##### Trial Omen

-   A variant that Bad Omen can transform into
    -   This occurs when the player is within detection range of a Trial Spawner that is not Ominous
    -   The Trial Omen will have a duration of 15 minutes multiplied by the transformed Bad Omen's level
-   Players that have Trial Omen are surrounded by ominous particles

##### Ominous Trial Spawner

-   A more powerful active phase of the Trial Spawner with unique challenges and rewards
    -   Provides a more challenging experience that combat-loving players can opt into for better rewards
-   If a Trial Spawner detects a player that has the Trial Omen effect, the spawner will become Ominous if:
    -   It is not in cooldown
    -   Or, it is in cooldown but was not Ominous during its last activation
        -   Making it Ominous this way will bypass the cooldown
-   While active, it will:
    -   Glow blue instead of orange
    -   Emit soul flames instead of normal flames
    -   Periodically spawn potions and projectiles on top of unsuspecting players and mobs
        -   Based on their location, spawners in an area will select a random set of projectiles to spawn
        -   These projectiles will always include a single type of Lingering Potion from a set of possible effects
-   The mobs it spawns are more powerful than usual:
    -   Mobs that can wear equipment will often spawn with enchanted weapons and armor
        -   The armor these mobs wear have Armor Trims applied from the Trial Chambers
        -   All 3 of the following armor enchantments are applied to each piece:
            -   Protection IV
            -   Projectile Protection IV
            -   Fire Protection IV
        -   Sword enchantments can be either of the two:
            -   Sharpness I
            -   Knockback I
        -   Bow enchantments can be either of the two:
            -   Power I
            -   Punch I
    -   Mobs that cannot wear equipment will instead be spawned at double the total mob count over the course of the challenge
        -   The spawners for these mobs will also have an additional mob out at once during its challenge
-   Becoming Ominous will despawn any existing mobs it spawned and reset its challenge
    -   If those mobs picked up or equipped any items on the floor, those items will be dropped when they despawn
    -   It will stay Ominous until it has been defeated and its cooldown has finished
-   When defeated, it will eject a different set of loot to normal Trial Spawners

##### Ominous Vault

-   A variant of Vaults that have a more menacing looking and emit soul flames instead of normal flames
-   These hold a more valuable set of rewards than the standard Vaults that are unlocked by Trial Keys
-   Can be found throughout Trial Chambers in harder to reach places, and require an Ominous Trial Key to unlock

##### Ominous Trial Key

-   A variant of the Trial Key which has a 30% chance to eject when defeating an Ominous Trial Spawner
-   Can be used to unlock Ominous Vaults

### Status Effects

-   The following status effects have been added:
    -   Wind Charged
        -   Affected entities will emit a wind burst upon death
        -   Can be brewed as a Potion with an Awkward Potion and a Breeze Rod
    -   Weaving
        -   Affected entities will spread Cobweb blocks upon death
        -   Affected entities can move through Cobweb with 50% of their normal speed instead of 25%
        -   Can be brewed as a Potion with an Awkward Potion and a Cobweb block
    -   Oozing
        -   Affected entities will spawn two Slimes upon death
        -   Can be brewed as a Potion with an Awkward Potion and a Slime Block
    -   Infested
        -   Affected entities have a 10% chance to spawn 1-2 Silverfish when hurt
        -   Can be brewed as a Potion with an Awkward Potion and a Stone block
    -   Splash Potions, Lingering Potions and Tipped Arrows can be made with these effects
-   These effects can be encountered while taking on an Ominous Trial Spawner
-   Some mobs are immune to these effects
    -   Slimes are immune to Oozing
    -   Silverfish are immune to Infested
-   Whenever a mob with Oozing dies, it will check within a 5x5x5 area how many Slimes there are
    -   If the amount exceeds the max entity cramming cap (24 by default), it will not spawn any Slimes
    -   If it does not exceed it, it will attempt to spawn 2 Slimes up until the max entity cramming cap

### Music

Added 9 new background music tracks which will all play in the main menu:

-   "Featherfall" by Aaron Cherof
    -   Plays in Badlands, Cherry Grove, Flower Forest, and Lush Caves Biomes
-   "Deeper" by Lena Raine
    -   Plays in Deep Dark and Dripstone Caves Biomes
-   "Eld Unknown" by Lena Raine
    -   Plays in Dripstone Caves, Grove, Jagged Peaks, and Stony Peaks Biomes
-   "Endless" by Lena Raine
    -   Plays in Dripstone Caves, Grove, Jagged Peaks, and Stony Peaks Biomes
-   "pokopoko" by Kumi Tanioka
    -   Plays in Dripstone Caves, Grove, Jagged Peaks, and Snow Slopes Biomes

The following have been added to the pool of songs which play in Overworld Biomes that do not have biome-specific music:

-   "Featherfall" by Aaron Cherof
-   "komorebi" by Kumi Tanioka
-   "Puzzlebox" by Aaron Cherof
-   "Watcher" by Aaron Cherof
-   "yakusoku" by Kumi Tanioka

### Advancements

-   Added 8 new advancements
    -   "Minecraft: Trial(s) Edition" - Step foot in a Trial Chamber
    -   "Under Lock & Key" - Unlock a Vault using a Trial Key
    -   "Revaulting" - Unlock an Ominous Vault with an Ominous Trial Key
    -   "Blowback" - Kill a Breeze with a deflected Wind Charge
        -   Challenge Advancement - rewards 40 experience
    -   "Who Needs Rockets?" - Use a Wind Charge to launch yourself upward at least 8 blocks
    -   "Crafters Crafting Crafters" - Be near a Crafter when it crafts a Crafter
    -   "Lighten Up" - Scrape a Copper Bulb with an Axe to make it brighter
    -   "Over-Overkill" - Deal 50 hearts of damage in a single hit using the Mace
        -   Challenge Advancement - rewards 50 experience

![Boats are leashed to a Fence on the dock in a Desert Village. Steve is sitting in a boat together with a Villager.](https://launchercontent.mojang.com/v2/images/t1.21leashedboats.jpg)

## Changes

-   Improved chunk loading performance
-   Doors of different materials can now form a double door
-   Witches now always drop 4-8 redstone dust on death
    -   This is to improve the viability of farms that utilize Witch Huts to obtain Redstone Dust
-   Piston sound volume and attenuation have been lowered
    -   This was done to address the long-received feedback on the old sounds being too harsh and loud, creating very noisy redstone builds
-   The panic behaviour of animals now lasts for 2 seconds after the damage is dealt, down from 5
-   Ender Pearls that are thrown through portals can now teleport players to a different dimension than the one they are currently in
-   It is now possible to ride entities such as Horses or Minecarts through portals
    -   When riding entities through portals, the delay before teleporting is not applied
-   Projectile knockback is no longer dependent on the shooters position
    -   Projectiles such as Arrows and Fireballs knock back in the direction they travel
    -   Projectiles such as Splash Potions and Fireworks knock back away from themselves
    -   Projectiles shot by a Dispenser will also knock back
-   Improved player attribute and effect handling
    -   Custom set base attributes are now kept when respawning
    -   Active effects and modifiers are kept when changing dimension or winning the game
-   Blocks frozen by Frost Walker now emit "Block Placed" vibrations (frequency 13)
-   End Crystals are now immune to fire damage
-   The Trident is now considered of Epic rarity, giving its hover text a purple color
-   Added an attestation checkbox when submitting a player report
-   The "Burning Time" reduction effect of Fire Protection and "Knockback Resistance" effect of Blast Protection now stack from wearing several pieces
-   Realms improvements
-   The Pause Menu can now include a list of links provided by server
-   Improvements to the disconnection screen
-   Updated credits
-   Removed Herobrine

![Sunny and Noor are next to a fully rebuilt Ruined Portal. The brave Sunny throws an Ender Pearl towards the lit Nether Portal. Noor is to the side holding a Leash tied to a Boat with a Sheep in it.](https://launchercontent.mojang.com/v2/images/t1.21pearlportal.jpg)

### Chunk Loading Improvements

-   When reading an already generated chunk from disk, surrounding chunks are no longer unnecessarily loaded
    -   This is also visible on the singleplayer world loading screen
-   The new system has less memory and CPU overhead

### Realms Improvements

-   Any member of a Realm can now upgrade a world
-   In the Realms main screen, all online players of a Realm are displayed
    -   When hovered, a tooltip is shown with each player's head and name
-   Updated the confirmation screens in Realms to show as popups

### Server Links

-   Servers can now provide a list of links to clients
-   If client has received any links, a new button called "Server Links..." will show up in the Pause Menu
    -   To make space for that button, the "Report Bugs" and "Give Feedback" buttons are moved into a sub-screen

### Disconnection Screen Improvements

-   In some cases client will now store detailed information about disconnection (similar to crash reports)
    -   When that happens, an "Open Disconnection Report Directory" button will be added to the disconnection screen
    -   If a server provides a link for bug reporting, it will be also be added as a button to the disconnection screen

![Sunny is riding a Minecart that leads into a Nether Portal.](https://launchercontent.mojang.com/v2/images/t1.21minecartportal.jpg)

## Technical Changes

-   Data Pack version is now 48
-   Resource Pack version is now 34
-   Removed the `update_1_21` feature flag and built-in datapack
-   Server can now provide list of links to client
-   Servers can add custom details to crash and disconnection reports
-   Report data generator now includes information about network packets
-   The game will now store reports from failed chunk loads and saves in the `debug` directory

![A swarm of Bees are leashed to a Dragon Egg Block Display Entity, flying above a Savannah. This gives the impression that the Bees have plotted to steal the Dragon Egg.](https://launchercontent.mojang.com/v2/images/t1.21techbeeswithegg.jpg)

### Server Links

-   New clientbound packet `server_links` is available in `configuration` and `game` protocols
-   On receival, the links are made available in the Pause Menu
-   Link labels can be built-in or custom (i.e. any text)
-   Some built-ins also have special functionality:
    -   `report_bug`:
        -   link will be displayed on disconnection screen, if disconnection was caused by packet handling error
        -   link will be included as a comment in disconnection report
-   Additionally, there are some generic-use link names, like "Support" or "Website", without any special functionality
-   Added `bug-report-link` to `server.properties` to allow vanilla server to configure `report_bug` links
    -   If this field is non-empty, server will send that link to clients
    -   This field should contain well-formed URL

### Custom Server Crash Report Details

-   New clientbound packet `custom_report_details` is available in the `configuration` and `game` protocols
-   This packet contains a list of key-value text entries
-   If received, contents of this packet will be added in a separate section to any crash or disconnection report generated during connection to this server

## Data Pack Versions 42 Through 48

-   Added new Music Disc items and loot table entries for the Music Discs
-   Painting variants are now data-driven
-   Jukebox songs are now data-driven
-   Enchantments are now data-driven
-   Enchantments that show up in the game are now controlled by Enchantment Providers
-   Enchantment exclusivity is now controlled through tags
-   Added new command syntax
-   Changes to predicates and loot table functions
-   Registry `decorated_pot_patterns` has been renamed to `decorated_pot_pattern`
-   Updated legacy element and tag directory names in datapacks
-   Added new configurable fields to jigsaw structures and `single_pool_element` types
-   Added new placement modifier type `fixed_placement` to place features in a set of fixed positions
-   Added new feature type `end_platform` for the obsidian platform in the end

### Painting Variants

-   Painting variants registry are now loaded from packs
-   Path to painting definition is `data/<namespace>/painting_variant/<id>.json`
-   Fields in definition:
    -   `width` - width of painting in blocks, between 1 and 16
    -   `height` - height of painting in blocks, between 1 and 16
    -   `asset_id` - id of sprite in `paintings` atlas

### Jukebox Songs

-   Added a jukebox song registry which is loaded from data packs
-   Path to jukebox song definition is `data/<namespace>/jukebox_song/<id>.json`
-   Fields in definition:
    -   `sound_event` - sound event that is streamed when played by a Jukebox
    -   `description` - the name of the song that will be displayed in the hover tooltip represented as a Text Component
    -   `length_in_seconds` - length of the song in seconds as a positive float
    -   `comparator_output` - the redstone signal output by a comparator when played in a Jukebox, between 0 and 15
-   Added `minecraft:jukebox_playable` item stack component

#### `jukebox_playable` Item Component

-   If set, the item can be inserted into Jukeboxes to play a song
-   Format: object with fields
    -   `song`: Jukebox song id
        -   The song that will be played by the Jukebox when this item stack is inserted
    -   `show_in_tooltip`: boolean (default: true)
        -   If false, the name of the song will not be shown in the tooltip
        -   This was formerly controlled by the `hide_additional_tooltip` component on Music Discs
    -   e.g. `jukebox_playable={song:'minecraft:precipice'}`, `jukebox_playable={song:'minecraft:precipice', show_in_tooltip:false}`

![Steve is playing around with a Jukebox in the center of a Village. A Nether Star can be seen on top of the Jukebox, suggesting that Steve has used custom data to vibe out to songs that he likes.](https://launchercontent.mojang.com/v2/images/t1.21techcustommusic.jpg)

### Attributes

-   Attribute Modifiers no longer have a UUID and name combination
-   Instead, Attribute Modifiers are now uniquely identified by a namespaced ID, similar to other resources
-   The ID of a modifier uniquely identifies it in the set of modifiers for a single attribute
    -   Using the same ID for different modifiers is allowed as long as the modifiers are for different attributes
-   Existing built-in modifiers will be upgraded to new IDs
-   Existing custom modifiers will be upgraded to the UUID as an ID in the `minecraft` namespace

#### `attribute` Command

-   The `uuid` and `name` arguments have been replaced with a singular `id` argument

#### Item Stack Attribute Modifiers

-   The `uuid` and `name` fields have been removed
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

![Efe, wearing Diamond Boots with a custom enchantment that spawns sparkling particles, tempts a Cat with Salmon in a snowy Village under moonlight.](https://launchercontent.mojang.com/v2/images/t1.21techcustomenchantparticles.jpg)

Enchantments are now set through data. An Enchantment is a set of core properties like level ranges and cost together with some effects. Most effect types also support a set of conditions, making it possible to apply them only when certain criteria are met.

Enchantments can be added in the registry `enchantment`. All Vanilla Enchantments can be found in the vanilla datapack in the client and server jar files.

Fields:

-   `description`: The name of the Enchantment when displayed in text represented as a Text Component
-   `exclusive_set`: The Enchantment(s) this Enchantment is mutually exclusive with
    -   Two Enchantments can never co-exist on an item if either is in the other's exclusive set
    -   Specified as an Enchantment ID, a list of Enchantment IDs or an Enchantment Tag prefixed with `#`
    -   Optional - if omitted, the exclusive set is empty
-   `supported_items`: The item types that can have this Enchantment
    -   Item ID, list of item IDs or tag prefixed with `#`
-   `primary_items`: The item types for which this Enchantment shows up in Enchanting Tables and on traded equipment
    -   Item ID, list of item IDs or tag prefixed with `#`
    -   Must be a subset of `supported_items`
-   `weight`: How commonly the Enchantment appears, compared to the total combined `weight` of all available Enchantments
    -   Positive integer, at most 1024 - higher values mean more common
-   `max_level`: The maximum level of the Enchantment
    -   All Enchantments range from level 1 to their maximum level
    -   Positive integer, at most 255
-   `min_cost`, `max_cost`: describe the range of costs for this Enchantment in the Enchanting Table (and how much it returns when disenchanted)
    -   Both min and max cost are described using a linear formula:
    -   `base`: Base cost at level 1
    -   `per_level_above_first`: Added for each level over 1
-   `anvil_cost`: The fee taken for the Enchantment in the anvil
    -   Non-negative integer
    -   This value is halved when an Enchantment is added to a Book
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

##### `lookup`

A Level-Based Value type that maps a list of values to specific levels, and applies a fallback if the level is greater than the number of values supplied. Fields:

-   `values` - A list of values indexed by `level - 1` to apply, if present
-   `fallback` - A fallback Level-Based Value to apply if the level is greater than the size of `values`

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

-   `id`: The namespaced ID of the Attribute Modifier to add
    -   This will be postfixed with the slot name when the enchanted item is equipped in a slot
    -   Must be unique to avoid different Enchantments (or other systems) interfering with each others
-   `attribute`: The ID of the attribute to modify
-   `operation`: The operation of the Attribute Modifier
    -   One of `add_value`, `add_multiplied_base` and `add_multiplied_total`
-   `amount`: A Level-Based Value describing the amount

#### Entity Effect Types

Entity Effects are Enchantment effects that generally do something to an Entity involved in an event. Which entity is affected depends on the specific component being configured.

##### `all_of`

An Entity Effect that runs a list of other Entity Effects. This can be useful when a set of conditions should apply to more than one Entity Effect.

Fields:

-   `effects`: List of Entity Effects to run

##### `apply_mob_effect`

An Entity Effect that applies a random Mob Effect to the affected entity, chosen from a set of options. The duration and amplifier are randomized within a given span. The effect of specifying larger maximum values than the minimum value is undefined.

Fields:

-   `to_apply`: Options for the Effect to apply
    -   One of an Effect ID, a list of Effect IDs or an Effect Tag prefixed by `#`
-   `min_duration`, `max_duration`: Level-Based Values representing the minimum and maximum duration of the effect in seconds
-   `min_amplifier`, `max_amplifier`: Level-Based Values representing the minimum and maximum amplifier

##### `damage_entity`

An Entity Effect that applies damage to the affected entity. The amount of damage is randomized within a given span. The effect of specifying a larger maximum value than the minimum value is undefined.

Fields:

-   `damage_type`: The ID of the Damage Type to use
-   `min_damage`, `max_damage`: Level-Based Values representing the minimum and maximum amount of damage

##### `damage_item`

An Entity Effect that applies damage to the Enchanted Item. The damage is not applied to items held by players in creative mode.

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

An Entity Effect that ignites the affected entity for a given number of seconds.

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
-   `trigger_game_event`: Optional Game Event ID for a game event to trigger when a block has been replaced

##### `replace_disk`

An Entity Effect that replaces blocks in a disk / cylinder in the world.

Fields:

-   `block_state`: A block state provider giving the block state to set
-   `radius`: A Level-Based Value describing the radius of the cylinder
-   `height`: A Level-Based Value describing the height of the cylinder
-   `offset`: A positional offset from the position of the event to the center of the cylinder
    -   Format: list of 3 integers representing X, Y and Z offset
    -   Optional, if omitted \[0, 0, 0\] is used
-   `predicate`: A World-generation style Block Predicate to used to determine if the block should be replaced
    -   Optional, if omitted all block types are replaced
-   `trigger_game_event`: Optional Game Event ID for a game event to trigger when a block has been replaced

##### `run_function`

An Entity Effect that runs a Command Function. The execution entity the effect is executing for is represented as `@s` and `~ ~ ~` is the position of the event, rotated in the direction of the affected entity.

Fields:

-   `function`: Namespaced ID of the Command Function to run

##### `set_block_properties`

An Entity Effect that sets properties on a block

Fields:

-   `properties`: map of property key to property value (same format as a `minecraft:block_state` item component)
-   `offset`: A positional offset from the position of the event to the center of the cylinder
    -   Format: list of 3 integers representing X, Y and Z offset
    -   Optional, if omitted \[0, 0, 0\] is used
-   `trigger_game_event`: Optional Game Event ID for a game event to trigger when a block has been changed

##### `spawn_particles`

An Entity Effect that spawns particles around the affected entity.

Fields:

-   `particle`: A particle type definition
-   `horizontal_position`, `vertical_position`: Decides where the particle spawns horizontally and vertically. Objects with fields:
    -   `type`: Specifies the position selection type. One of:
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
    -   `movement_scale`: A floating point scale factor applied to the entity speed along the given axis
        -   Optional, interpreted as `0` if omitted
        -   Example: a `movement_scale` of `1` adds the velocity of the entity to the spawned particles

##### `summon_entity`

An Entity Effect that summons a new entity, randomly chosen from a set of Entity Types, at the site of the event.

Fields:

-   `entity`: The options for the Entity Type to summon
    -   Either an Entity Type ID, a list of Entity Type IDs or an Entity Type Tag prefixed with `#`
-   `join_team`: Boolean that specifies whether the summoned entity should join the team of the owner of the Enchanted Item

#### Location-Based Effect Types

Location-Based Effects are special effects that activate and deactivate depending on where the owner of the Enchanted Item moves. Location-Based Effect only trigger when such items are initially equipped and subsequently when the owning entity moves to a new space in the Block grid - i.e. when their coordinates change to a new integer value.

All Entity Effect types can also be used as Location-Based Effects, and in addition `attribute` can be used to specify an Attribute Effect as a location-based effect.

#### Effect Conditions

Most Enchantment effects are filtered using Conditions (same types as in loot tables). This enables effects to be specific for different situations. Each Effect Component defines which parameters are available for the condition to evaluate - some parameters are available for all of these parameter sets, while some are specific to a certain set.

Unlike with loot tables, all effect conditions need to be inline objects and cannot be references.

Each effect component specifies which parameters are available in the Effect Components list below.

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

##### Hit Block Parameters

-   Entities: `this`
-   Enchantment Level
-   Origin
-   Block State

#### Effect Components

The `effects` field in an Enchantment is a map of Effect Component type the Effect List data. Most Effect Components are lists, so any number of Effects can be added of any Component Type. The data for each effect generally involves having a specified condition context and Effect Type, but some Effects also deviate from this format.

In cases where the documentation specifies a Condition Context and Effect, the Component is a list. Each entry in the list has a field named `effect` with the effect of the type used by the list. Entries can also optionally include a field named `requirements` specifying the condition parameters, which are then evaluated with the documented context.

-   `minecraft:armor_effectiveness`: Effects for changing the armor effectiveness of the target of an attack
    -   Condition Context: Damage Parameters
    -   Effect: Value Effect on the armor effectiveness: 0 for completely ineffective, 1 for fully effective
-   `minecraft:attributes`: Unfiltered list of Attribute Effects
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
    -   Format: A single Value Effect on the charge time of the Crossbow in seconds - unconditional
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
    -   Condition Context: Hit Block Parameters - `this` is the entity hitting the Block
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
    -   Condition Context: Entity Parameters - `this` is the entity using the Weapon
    -   Effect: Value effect on the maximum spread of projectiles measured in degrees from the aim line
-   `minecraft:projectile_spawned`: Effects applying after a projectile entity has been spawned when firing a projectile weapon
    -   Condition Context: Entity Parameters - `this` is the projectile entity
    -   Effect: Entity Effect on the projectile entity
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
    -   Format: A single Value Effect on the strength - unconditional
    -   Any resulting value greater than 0 converts the Trident to be a spin attack weapon instead of a thrown attack
-   `minecraft:trident_sound`: Effect for changing the charging sounds of a Trident attack
    -   Note: Only one of these effects can ever be active - the highest level is picked
    -   Format: A list of sound events
    -   Each entry in the list represents the sound at one level of the Enchantment, so the first entry represents the sound used by a level 1 Enchantment

![Noor, basking in the sunset, fires a Crossbow with a custom enchantment that allows for multiple Firework Rockets to be fired simultaneously.](https://launchercontent.mojang.com/v2/images/t1.21techcustommultishotfireworks.jpg)

### Enchantment Providers

Enchantment Providers are new ways for the game to source Enchantments to use in various situations where Enchantments show up.

#### Spawn Equipment Enchantment Providers

-   `mob_spawn_equipment`: Enchantment Provider for mobs that spawn with randomly Enchanted equipment
-   `pillager_spawn_crossbow`: Enchantment Provider for Pillagers that spawn with Enchanted Crossbows
-   `raid/pillager_post_wave_3`: Enchantment Provider that is applied as a buff on the Crossbow of Pillagers spawning as waves 4 and 5
-   `raid/pillager_post_wave_5`: Enchantment Provider that is applied as a buff on the Crossbow of Pillagers spawning as waves above 5
-   `raid/vindicator`: Enchantment Provider that is applied as a buff on the Axe of a Vindicator spawning as wave 1-5
-   `raid/vindicator_post_wave_5`: Enchantment Provider that is applied as a buff on the Axe of a Vindicator spawning as waves above 5

#### Enderman Loot Enchantment Provider

-   `enderman_loot_drop`: Enchantment Provider that is used for the "fake tool" applied to the carried block of a killed Enderman

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
    -   `tags/items` -> `tags/item`
    -   `tags/blocks` -> `tags/block`
    -   `tags/entity_types` -> `tags/entity_type`
    -   `tags/fluids` -> `tags/fluid`
    -   `tags/game_events` -> `tags/game_event`

#### Item Tags

-   Removed `music_discs` item tag

#### Block Tags

-   `air`: All blocks that resemble air

#### Enchantment Tags

##### Enchantment Functionality Tags

-   `curse`: Enchantments that get listed in red in tooltips and cannot be removed by disenchanting
-   `prevents_bee_spawns_when_mining`: Enchantments that allow a tool to mine Bee Nests and Beehives with the Bees still inside
-   `prevents_decorated_pot_shattering`: Enchantments that make a tool not shatter Decorated Pots
-   `prevents_ice_melting`: Enchantments that cause a tool to not break Ice into Water
-   `prevents_infested_spawns`: Enchantments that allow a tool to break Infested blocks without causing the mob inside to spawn
-   `smelts_loot`: Enchantments that cause loot drops to be smelted

##### Enchantment Availability Tags

-   `tradeable`: Enchantments that show up on Books in Villager trades
-   `on_traded_equipment`: Enchantments that show up on enchanted equipment in Villager trades
-   `double_trade_price`: Enchantments that double the Emerald cost when traded
-   `in_enchanting_table`: Enchantments that can show up in the Enchanting Table
-   `on_mob_spawn_equipment`: Enchantments that can show up on equipment worn by randomly spawned mobs
-   `on_random_loot`: Enchantments that can show up in Chests found in the world

##### Enchantment Exclusivity Tags

New tags used by the Vanilla Enchantments to control which ones are mutually exclusive, all of which are found under the `exclusive_set/` path.

-   `armor`: Enchantments that cannot co-exist on Armor pieces
-   `boots`: Enchantments that cannot co-exist on Boots
-   `bow`: Enchantments that cannot co-exist on Bows
-   `crossbow`: Enchantments that cannot co-exist on Crossbows
-   `damage`: Damage-increasing Enchantments that cannot co-exist
-   `mining`: Mining-related Enchantments that cannot co-exist
-   `riptide`: Enchantments that cannot co-exist with Riptide

##### Trade Rebalance Enchantment Tags

In the experimental `trade_rebalance` pack, each biome type has two tags:

-   `trades/<biome>_common`: Contains Enchantments traded on the lower profession levels
-   `trades/<biome>_special`: Contains Enchantments traded on the highest profession level

#### Damage Type Tags

-   Removed `breeze_immune_to` Damage type tag
-   Added `burn_from_stepping`: Damage types that represent burning damage from stepping on something - in particular, damage types countered by the `frost_walker` Enchantment
-   Added `panic_environmental_causes`: Damage types that cause panic in aggressive animals that can panic, i.e. mobs that retaliate when attacked
-   Added `panic_causes`: Damage types that cause panic in passive animals, i.e. mobs that run away when attacked

### Loot Tables

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
-   `chance`: field has been removed
-   `unenchanted_chance`: new field for the chance for an unenchanted item
-   `enchanted_chance`: new field for the chance for an enchanted item - a Level-Based Value
-   `enchantment`: new field containing the namespaced ID of the Enchantment which grants the bonus chance

#### Functions

##### `enchanted_count_increase`

Renamed from `looting_enchant`. Now has a new field:

-   `enchantment`: Namespaced ID of the Enchantment that increases yields

##### `enchant_randomly`

-   Changed format - the `enchantments` field is now called `options`
-   `options` is now specified as one of an Enchantment, a list of Enchantments or an Enchantment Tag (prefixed with `#`)
-   `only_compatible`: New optional boolean field - if `true`, only allows Enchantments that are compatible with the item
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

-   `amount`: A Level-Based Value giving a value based on the level of the Enchantment

### Predicates

#### Damage Type Predicate

-   New option: `is_direct` - optional boolean
    -   When present, requires the damage to be direct (`true`) or indirect (`false`)
    -   Damage is direct when its direct and source entities are the same

#### Enchantment Predicate

-   The `enchantment` field has been removed
-   Added an `enchantments` field, one of an Enchantment, a list of Enchantments or an Enchantment Tag (prefixed with `#`)
    -   If multiple Enchantments are specified through a list or a tag, the Predicate matches if any Enchantment matches
-   If no `enchantments` field is specified, any enchantment matching `levels` will succeed the test
    -   If neither the `levels` nor `enchantments` fields are defined, the predicate will match an item that has any enchantment

#### Jukebox Playable Predicate

New item sub-predicate available as `jukebox_playable`.

-   Matcher for `jukebox_playable` component (like Music Discs)
-   Fields:
    -   `song` - optional id, list of ids or tag for jukebox song to be matched

#### Entity Predicate

-   New sub-predicate type Movement Predicate available as `movement`
-   New sub-predicate type Periodic Ticks Predicate available as `periodic_tick`
-   New option: `movement_affected_by` - optional Location Predicate
    -   When present, adds requirements on a block at most 0.5 blocks below the entity which can affect its movement

#### Player Predicate

-   The `gamemode` field has been changed to accept a list of game modes

#### Entity Flags Predicate

New possible fields:

-   `is_on_ground`: Optional boolean - if provided, matches the "on ground" state of the entity
-   `is_flying`: Optional boolean - if provided, matches whether the entity is flying, including:
    -   Gliding with Elytra
    -   Flying in Creative Mode

#### Location Predicate

New possible field:

-   `can_see_sky`: Optional boolean - if provided, matches exactly when the location has the maximum possible level of sky light

#### Movement Predicate

New predicate type. Possible fields:

-   `x`, `y`, `z`: `min`/`max` limits for movement speed along a certain axis in blocks / second
-   `speed`: `min`/`max` limits for overall movement speed in blocks / second
-   `horizontal_speed`: `min`/`max` limits for the horizontal speed component of the entity's movement in blocks / second
-   `vertical_speed`: `min`/`max` limits for the vertical speed component of the entity's movement in blocks / second
-   `fall_distance`: `min`/`max` limits for the fall distance of the entity in blocks

#### Periodic Ticks Predicate

New Entity sub-predicate available as `periodic_tick` in Entity Predicates. Format: a positive integer.

This sub-predicate is true every _n_ ticks of an entity's lifetime.

### Attributes

#### `generic.attack_knockback`

Now also works on Players.

#### `generic.burning_time`

A factor to how long an entity remains on fire after being ignited. A factor of `0` removes the entire burn time, a factor of `1` lets the entity burn the default fire time - larger values increase the amount of time the entity remains on fire.

-   Default: `1`
-   Minimum: `0`
-   Maximum: `1024`

#### `generic.explosion_knockback_resistance`

A factor to how much knockback an entity takes from an Explosion. A factor of `1` removes the entire knockback, a factor of `0` means no knockback reduction.

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

How much of the base attack damage that gets transferred transfer to secondary targets in a sweep attack. This is additive to the base attack of the sweep damage itself of `1`. A value of `0` means none of the base attack damage is transferred (sweep damage is `1`). A value of `1` means all of the base attack damage is transferred (sweep damage is `attack_damage + 1`)

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

New block predicate type that passes if the selected block is unobstructed (no entities are in the space of the block).

Fields:

-   `offset`: List of 3 int offset coordinates, specifying the offset from the origin position to test
    -   Optional, defaults to `[0, 0, 0]` if unspecified

### Entity Data

#### Projectiles

-   Arrow-like projectile data now contains a `weapon` field containing an Item Stack representing the weapon the projectile was fired from
-   The `ShotFromCrossbow` field has been removed
-   Removed `power` NBT tag and replaced it with `acceleration_power` tag with a number value that control the projectiles acceleration (and maximum speed)
    -   This change affects the following projectiles; `dragon_fireball`, `large_fireball`, `small_fireball`, `fireball`, `breeze_wind_charge`, `wind_charge`, `wither_skull`

### Item Components

-   The `custom_data` component can now be specified as an SNBT string to preserve type information in JSON
    -   This is the same as is used in the `set_custom_data` loot function and `custom_data` predicate
-   The `food` item component has a new field:
    -   `using_converts_to`: item with components (optional)
        -   Once consumed, the food item will be replaced with the specified item
        -   e.g. `food={nutrition:1,saturation:0,using_converts_to:{id:"poisonous_potato",components:{"minecraft:custom_name":'"Wait what?"'}}}`

### Structures

-   Added `dimension_padding` field to structures of type `minecraft:jigsaw`, which ensures that a structure is not generating through the edges of a dimension by adding vertical padding to its bounding box
    -   Can be written as an object with two fields:
        -   `bottom` the vertical padding at the bottom of the dimension, non-negative integer
        -   `top` the vertical padding at the top of the dimension, non-negative integer
        -   e.g. `dimension_padding: { bottom: 10, top: 5 }`
    -   Can be written as a single non-negative integer instead to be applied to both top and bottom fields
        -   e.g. `dimension_padding: 10`
-   Added `liquid_settings` field to structures of type `minecraft:jigsaw`. Possible values:
    -   `apply_waterlogging`: If any waterloggable block overlaps with existing water, it will become waterlogged
    -   `ignore_waterlogging`: If any waterloggable block overlaps with existing water, it will not become waterlogged
    -   Default value is `apply_waterlogging`
-   Added optional field `override_liquid_settings` to `single_pool_element` element type
    -   Has the same possible values as the `liquid_settings` in jigsaw structures
    -   If provided, it overrides the inherited liquid settings from the parent jigsaw structure while generating this pool element

### Commands

-   The item argument in the `/give`, `/item`, and `/loot` commands now supports removal of default components with `!` prefix
    -   e.g. `/give @s diamond_pickaxe[!tool]` will give a Diamond Pickaxe without the `tool` component
-   Added `@n` entity selector, selecting the nearest entity
    -   This functions as `@e[sort=nearest,limit=1]`
    -   Additional requirements may still be provided; for example: `@n[type=pig]` will select the closest Pig

## Resource Pack Versions 33 Through 34

-   Added new textures and music assets for Music Discs
-   Renamed sound events for Ominous Trial Spawner becoming active and ambient sound
-   Added the `block.vault.reject_rewarded_player` sound event
-   Changes to Shaders

### Shaders

-   The `blend` block in core shader definitions has been removed, as it was not used
-   The `position_color_tex` shader has been removed, replaced with the pre-existing `position_tex_color`
-   The `glint_direct` shader has been removed, replaced with the pre-existing `glint` shader
-   The `armor_glint` shader has been removed, as it was unused

## Fixed bugs in 1.21

-   [MC-67](https://bugs.mojang.com/browse/MC-67) Entities with passengers cannot travel through portals
-   [MC-902](https://bugs.mojang.com/browse/MC-902) The end obsidian platform resets every time entities go through the end portal, which can cause blocks to be deleted
-   [MC-6431](https://bugs.mojang.com/browse/MC-6431) Status effects are lost when returning to the overworld from the exit end portal
-   [MC-8983](https://bugs.mojang.com/browse/MC-8983) Primed TNT cannot travel through nether portals
-   [MC-9568](https://bugs.mojang.com/browse/MC-9568) Mobs suffocate / go through blocks when growing up near a solid block
-   [MC-9644](https://bugs.mojang.com/browse/MC-9644) Launched falling\_block entities do not travel through portals
-   [MC-14923](https://bugs.mojang.com/browse/MC-14923) Players can be kicked for spamming in a singleplayer world with cheats disabled
-   [MC-16345](https://bugs.mojang.com/browse/MC-16345) Reducing the player's base max health using /attribute does not always reduce their current health
-   [MC-26304](https://bugs.mojang.com/browse/MC-26304) Brewing stands reset brew cycle when unloaded
-   [MC-31819](https://bugs.mojang.com/browse/MC-31819) Hunger saturation depletes on peaceful difficulty
-   [MC-44280](https://bugs.mojang.com/browse/MC-44280) Entities don't receive knockback from projectiles fired from dispensers
-   [MC-50612](https://bugs.mojang.com/browse/MC-50612) Command blocks do not update when you place them near any source of power
-   [MC-59626](https://bugs.mojang.com/browse/MC-59626) Arrows lose their Punch enchantment property when unloaded
-   [MC-76104](https://bugs.mojang.com/browse/MC-76104) Guardians are unaffected by Thorns enchantment
-   [MC-78473](https://bugs.mojang.com/browse/MC-78473) Mobs don't panic when hit with a summoned or dispensed potion of harming
-   [MC-83590](https://bugs.mojang.com/browse/MC-83590) Armor attributes list can be too long
-   [MC-93669](https://bugs.mojang.com/browse/MC-93669) The sweeping attack doesn't ignite other mobs when using the fire aspect enchantment
-   [MC-93833](https://bugs.mojang.com/browse/MC-93833) Only if Health is provided maxHealth attribute is used as maximum Health value
-   [MC-96198](https://bugs.mojang.com/browse/MC-96198) Boats / rafts move into blocks when landing in less than one block deep water
-   [MC-97087](https://bugs.mojang.com/browse/MC-97087) Attributes won't work in main hand if they were in offhand
-   [MC-99411](https://bugs.mojang.com/browse/MC-99411) Frost Walker ice only semi-affected by randomTickSpeed gamerule
-   [MC-101170](https://bugs.mojang.com/browse/MC-101170) Portal sound doesn't get played when returning from End
-   [MC-110815](https://bugs.mojang.com/browse/MC-110815) Slimes are summoned with the wrong amount of health
-   [MC-114566](https://bugs.mojang.com/browse/MC-114566) Can't teleport back to the central island with End Gateway Portal on outer End islands
-   [MC-116279](https://bugs.mojang.com/browse/MC-116279) Non-player entities going through Nether portal do not generate portal in Nether if none exists
-   [MC-116643](https://bugs.mojang.com/browse/MC-116643) Silk Touch cannot be combined with Looting or Luck of the Sea
-   [MC-117361](https://bugs.mojang.com/browse/MC-117361) Mob type specific damage enchantment (Smite, Bane of Arthropods) affects all nearby entities when hitting affected mob with Sweeping Edge
-   [MC-124177](https://bugs.mojang.com/browse/MC-124177) Teleporting to another dimension loses some client states
-   [MC-131637](https://bugs.mojang.com/browse/MC-131637) The slowness effect is applied to entities when the bane of arthropods enchantment is held in the off hand
-   [MC-136147](https://bugs.mojang.com/browse/MC-136147) Riptide tridents use mainhand item to inflict damage when thrown in the offhand
-   [MC-137018](https://bugs.mojang.com/browse/MC-137018) Killing rabbits with Looting and Fire Aspect only drops cooked rabbit sometimes
-   [MC-137719](https://bugs.mojang.com/browse/MC-137719) The player's horizontal motion doesn't affect fired projectiles in certain situations
-   [MC-148741](https://bugs.mojang.com/browse/MC-148741) Selection boxes in some screens are misaligned in comparison with their text
-   [MC-151648](https://bugs.mojang.com/browse/MC-151648) Non-player entities cannot travel through unlinked nether portals
-   [MC-157215](https://bugs.mojang.com/browse/MC-157215) Loading 2 crossbows with 1 arrow in the mainhand and offhand can cause the arrow in the hotbar/inventory to become a "ghost arrow"
-   [MC-158245](https://bugs.mojang.com/browse/MC-158245) Fire Aspect enchantment from mobs can set you on fire even when blocking with a shield
-   [MC-160140](https://bugs.mojang.com/browse/MC-160140) Shulker boxes on the obsidian platform are destroyed and do not drop when a player enters the End
-   [MC-166809](https://bugs.mojang.com/browse/MC-166809) Cooldown rendering stutters while pausing
-   [MC-169698](https://bugs.mojang.com/browse/MC-169698) Blocks within igloo basements can generate waterlogged when generating in close proximity to water
-   [MC-170103](https://bugs.mojang.com/browse/MC-170103) Untamed wolves only beg for food while being angry and jumping
-   [MC-170907](https://bugs.mojang.com/browse/MC-170907) Network position deltas are processed relative to a wrong point
-   [MC-172031](https://bugs.mojang.com/browse/MC-172031) Throwing an ender pearl into a Nether or End portal often has no effect
-   [MC-175619](https://bugs.mojang.com/browse/MC-175619) Dispenser drops honey bottle unless empty slot is available
-   [MC-175729](https://bugs.mojang.com/browse/MC-175729) Walking on the edge of underwater soul soil with Depth Strider and Soul Speed doesn't show soul particles
-   [MC-177965](https://bugs.mojang.com/browse/MC-177965) Putting on/taking off soul speed boots while standing on soul sand/soil does not properly give speed
-   [MC-178383](https://bugs.mojang.com/browse/MC-178383) Horses, donkeys, mules and llamas spawned from spawn eggs or /summon command have 53 health
-   [MC-179940](https://bugs.mojang.com/browse/MC-179940) Player's attributes reset back to default values upon respawning
-   [MC-181604](https://bugs.mojang.com/browse/MC-181604) Exiting the end portal resets player attributes to their default values
-   [MC-182606](https://bugs.mojang.com/browse/MC-182606) When sneak-walking with Soul Speed on a Soul Sand or Soul Soil block (most noticeably) adjacent to lava, too many soul particles spawn
-   [MC-188693](https://bugs.mojang.com/browse/MC-188693) FOV doesn't change back when riding a mob after staying on Soul Sand with Soul Speed
-   [MC-189365](https://bugs.mojang.com/browse/MC-189365) Player can retain Soul Speed effect by bridging
-   [MC-191591](https://bugs.mojang.com/browse/MC-191591) Saddles lose their NBT data when equipped on horses, zombie horses, skeleton horses, mules or donkeys via right-clicking
-   [MC-193343](https://bugs.mojang.com/browse/MC-193343) Soul Speed effect remains after switching to spectator mode
-   [MC-195931](https://bugs.mojang.com/browse/MC-195931) Incorrect amount of damage heart particles shown when hitting some entities for the first time
-   [MC-200899](https://bugs.mojang.com/browse/MC-200899) Players don't receive thorns damage when attacking entities wearing thorns armor with indirect sweeping attacks
-   [MC-200991](https://bugs.mojang.com/browse/MC-200991) Soul Speed in minecart uses durability
-   [MC-213349](https://bugs.mojang.com/browse/MC-213349) Certain mobs that can melee can't use the Fire Aspect enchantment
-   [MC-215144](https://bugs.mojang.com/browse/MC-215144) A re-created "Default" world has world type of "Custom"
-   [MC-223165](https://bugs.mojang.com/browse/MC-223165) Snout banner pattern is treated as common loot
-   [MC-223301](https://bugs.mojang.com/browse/MC-223301) Goats not taking damage when attacking with Thorns armor equipped
-   [MC-224743](https://bugs.mojang.com/browse/MC-224743) Jumping on soul sand uses durability of Soul Speed boots
-   [MC-225312](https://bugs.mojang.com/browse/MC-225312) Evokers using evoker fangs are not affected by the Thorns enchantment
-   [MC-225870](https://bugs.mojang.com/browse/MC-225870) Breeding an axolotl in creative replaces the bucket of tropical fish
-   [MC-226894](https://bugs.mojang.com/browse/MC-226894) Entering the end while in water depletes hunger
-   [MC-228598](https://bugs.mojang.com/browse/MC-228598) Item count desync when firing an arrow while switching to a different hotbar slot
-   [MC-232770](https://bugs.mojang.com/browse/MC-232770) Entities receive knockback from incorrect directions when being damaged by firework explosions
-   [MC-234162](https://bugs.mojang.com/browse/MC-234162) The "minecraft:ui.button.click" sound isn't played when adjusting sliders if the mouse cursor is released while not being held over them
-   [MC-234880](https://bugs.mojang.com/browse/MC-234880) Llama's unaffected by Thorns
-   [MC-237057](https://bugs.mojang.com/browse/MC-237057) The "minecraft:particle.soul\_escape" sound is very rarely heard by other players when using boots enchanted with soul speed
-   [MC-237063](https://bugs.mojang.com/browse/MC-237063) Particles produced from using boots enchanted with soul speed are inconsistently displayed for other players
-   [MC-248272](https://bugs.mojang.com/browse/MC-248272) Enchantment::doPostHurt and Enchantment::doPostAttack are called twice for players
-   [MC-252361](https://bugs.mojang.com/browse/MC-252361) Obsidian platform in end is off by a block from entering from the nether compared to overworld
-   [MC-252691](https://bugs.mojang.com/browse/MC-252691) Player spawns on a bedrock layer when the world is first created as a SuperFlat world with non-full blocks on the surface
-   [MC-252817](https://bugs.mojang.com/browse/MC-252817) Placing a map into an item frame and removing it does not remove the green player marker
-   [MC-252846](https://bugs.mojang.com/browse/MC-252846) Mobs can pass through fences with carpets on top when growing up
-   [MC-253209](https://bugs.mojang.com/browse/MC-253209) Some mobs will no longer panic when receiving poison/wither damage
-   [MC-253457](https://bugs.mojang.com/browse/MC-253457) Cats and Ocelots are immune to Thorns damage
-   [MC-253791](https://bugs.mojang.com/browse/MC-253791) Frogs suffocating when growing
-   [MC-254004](https://bugs.mojang.com/browse/MC-254004) Falling Block Entities do not process their End Gateway Cooldown Timer
-   [MC-255218](https://bugs.mojang.com/browse/MC-255218) Fly mode is disabled after teleporting from the End to the Overworld through the end portal
-   [MC-258967](https://bugs.mojang.com/browse/MC-258967) Entities receive knockback from splash potions based on the direction that the said entity was facing when throwing the potion
-   [MC-259811](https://bugs.mojang.com/browse/MC-259811) Paintings with non-existent variant entity tag are falsely labeled as random variant
-   [MC-259987](https://bugs.mojang.com/browse/MC-259987) Damage command only issues knockback if it was done by an entity
-   [MC-260346](https://bugs.mojang.com/browse/MC-260346) Custom music discs cut off when vanilla disc would normally end
-   [MC-261701](https://bugs.mojang.com/browse/MC-261701) Lag spike when opening creative inventory for first time in world
-   [MC-262469](https://bugs.mojang.com/browse/MC-262469) The "Remote Getaway" advancement isn't granted upon traveling through end gateways while riding boats
-   [MC-265009](https://bugs.mojang.com/browse/MC-265009) Explosion knockback reduction caused by Blast Protection does not stack with several enchanted armor pieces
-   [MC-265088](https://bugs.mojang.com/browse/MC-265088) Onboarding Narrator button doesn't update upon pressing Ctrl+B
-   [MC-265583](https://bugs.mojang.com/browse/MC-265583) Incorrect pluralization for skin customization strings for pants
-   [MC-265818](https://bugs.mojang.com/browse/MC-265818) The "gamerule.doVinesSpread.description" string consists of grammatically incorrect word usage
-   [MC-266113](https://bugs.mojang.com/browse/MC-266113) Copper doors are in the #minecraft:wooden\_doors tag
-   [MC-266118](https://bugs.mojang.com/browse/MC-266118) Copper doors are in the #minecraft:mineable/axe tag
-   [MC-266140](https://bugs.mojang.com/browse/MC-266140) The "Open link" button within the realms menu is improperly capitalized
-   [MC-266290](https://bugs.mojang.com/browse/MC-266290) Double doors do not automatically form between waxed and unwaxed copper doors, even of the same variant
-   [MC-266431](https://bugs.mojang.com/browse/MC-266431) Trial chambers intersect with the bedrock layer
-   [MC-266471](https://bugs.mojang.com/browse/MC-266471) Trial chambers can intersect aquifers, causing some blocks inside the structure to be waterlogged
-   [MC-266556](https://bugs.mojang.com/browse/MC-266556) Trial spawner cannot be activated in peaceful difficulty
-   [MC-266586](https://bugs.mojang.com/browse/MC-266586) Trial chambers can spawn directly inside the deep dark biome
-   [MC-266626](https://bugs.mojang.com/browse/MC-266626) Breeze doesn't stop attacking the player when it enters on the same team
-   [MC-267050](https://bugs.mojang.com/browse/MC-267050) Chat disabled strings are missing verbs
-   [MC-267071](https://bugs.mojang.com/browse/MC-267071) The word "packs" within the "download.pack.failed" string is always pluralized
-   [MC-267154](https://bugs.mojang.com/browse/MC-267154) Using an Eye of Ender plays the minecraft:entity.ender\_eye.launch sound event twice
-   [MC-267230](https://bugs.mojang.com/browse/MC-267230) Hangul fonts are rendered with missing pixels
-   [MC-267441](https://bugs.mojang.com/browse/MC-267441) When a player's generic.step\_height attribute is set to more than two, attempting to step atop of more than two blocks may fail if there are blocks higher up
-   [MC-267474](https://bugs.mojang.com/browse/MC-267474) Strings referencing the player's off hand are inconsistently spelled
-   [MC-267498](https://bugs.mojang.com/browse/MC-267498) Operation names in /attribute and item modifiers' set\_attributes are different
-   [MC-267947](https://bugs.mojang.com/browse/MC-267947) Ender pearls can teleport players in spectator mode
-   [MC-267951](https://bugs.mojang.com/browse/MC-267951) The game freezes and eventually crashes when creating a world with the "spawnChunkRadius" gamerule set to high values
-   [MC-267954](https://bugs.mojang.com/browse/MC-267954) World upgrade and downgrade realms strings are improperly capitalized
-   [MC-267967](https://bugs.mojang.com/browse/MC-267967) Breezes ignore the deflects\_projectiles entity type tag
-   [MC-267968](https://bugs.mojang.com/browse/MC-267968) Medium slimes from trial chamber spawners take damage incorrectly when first hit
-   [MC-267981](https://bugs.mojang.com/browse/MC-267981) The "Trial Spawner crackles" subtitle is only displayed for a split second upon the "minecraft:block.trial\_spawner.ambient" sound being played
-   [MC-267988](https://bugs.mojang.com/browse/MC-267988) Tamed entities ignore their "LookAtPlayerGoal" distance and look in the direction of their owners from any distance when being stood up
-   [MC-268023](https://bugs.mojang.com/browse/MC-268023) The "selectWorld.experimental.details.title" string displayed within the experimental features details menu is improperly capitalized
-   [MC-268106](https://bugs.mojang.com/browse/MC-268106) Entities' current health is not capped at their max health in all applicable situations
-   [MC-268113](https://bugs.mojang.com/browse/MC-268113) the minecraft:generic.scale attribute is desynchronized when the player leaves the End dimension via an End portal
-   [MC-268185](https://bugs.mojang.com/browse/MC-268185) Copper grates in trial chambers are waterlogged
-   [MC-268347](https://bugs.mojang.com/browse/MC-268347) Setting gravity higher than 0.84 allows you to jump up a block
-   [MC-268367](https://bugs.mojang.com/browse/MC-268367) Arrows repeatedly bouncing off a breeze spam sound
-   [MC-268369](https://bugs.mojang.com/browse/MC-268369) Wind charges delete arrows without blowing up
-   [MC-268370](https://bugs.mojang.com/browse/MC-268370) Japanese CJK variants use the same diacritic
-   [MC-268438](https://bugs.mojang.com/browse/MC-268438) Baby armadillos can still eat while rolled up
-   [MC-268551](https://bugs.mojang.com/browse/MC-268551) When a wind charge is fired from a dispenser, it makes a "dispensed item" sound instead of a "Wind Charge flies" sound
-   [MC-268564](https://bugs.mojang.com/browse/MC-268564) Entities receive knockback from incorrect directions when being hit by projectiles deflected by breezes
-   [MC-268598](https://bugs.mojang.com/browse/MC-268598) The "weight" of skeletons in swamp biomes is too high causing less bogged spawns
-   [MC-268772](https://bugs.mojang.com/browse/MC-268772) Fall damage multiplier attribute has unintuitive coloring
-   [MC-269034](https://bugs.mojang.com/browse/MC-269034) Wolves no longer teleport while trying to pathfind out of Lava
-   [MC-269036](https://bugs.mojang.com/browse/MC-269036) Bogged do not drop mushrooms when sheared with doMobLoot false
-   [MC-269147](https://bugs.mojang.com/browse/MC-269147) Shearing a bogged spawns mushrooms at the bogged's feet
-   [MC-269318](https://bugs.mojang.com/browse/MC-269318) Books placed on a lectern in creative mode are consumed
-   [MC-269351](https://bugs.mojang.com/browse/MC-269351) The Bolt Armor Trim cannot be duplicated with Waxed Copper Block
-   [MC-269359](https://bugs.mojang.com/browse/MC-269359) "Field Masoned", "Skull Charge", "Flow", and "Guster" banner patterns are not mirrored on the backside
-   [MC-269370](https://bugs.mojang.com/browse/MC-269370) Sharp lag spike caused by incorrect upper limit on particles created by mace smash attack
-   [MC-269389](https://bugs.mojang.com/browse/MC-269389) Flow banner pattern is treated as common loot
-   [MC-269390](https://bugs.mojang.com/browse/MC-269390) Guster banner pattern is treated as common loot
-   [MC-269439](https://bugs.mojang.com/browse/MC-269439) Some diacritics intersect the language box in the languages menu
-   [MC-269460](https://bugs.mojang.com/browse/MC-269460) Thorns enchantment doesn't work when entities are hit by wind charges
-   [MC-269574](https://bugs.mojang.com/browse/MC-269574) Client attribute values may desync from the server after leaving the end
-   [MC-269601](https://bugs.mojang.com/browse/MC-269601) Mace smash attack does not knock back other players when they are not the attacked entity
-   [MC-269617](https://bugs.mojang.com/browse/MC-269617) When ender pearls teleport non-player entities, no teleportation sound is played upon impact
-   [MC-269633](https://bugs.mojang.com/browse/MC-269633) Placing an oversized filled bucket resets the stack size to 1
-   [MC-269642](https://bugs.mojang.com/browse/MC-269642) Eating an oversized Soup / Stew resets the stack size to 1
-   [MC-269674](https://bugs.mojang.com/browse/MC-269674) Oversized book and quill stacks reset count when signed
-   [MC-269685](https://bugs.mojang.com/browse/MC-269685) Buckets are lost when consuming oversized milk buckets
-   [MC-269686](https://bugs.mojang.com/browse/MC-269686) Oversized music disc stacks can be duplicated with jukeboxes
-   [MC-269708](https://bugs.mojang.com/browse/MC-269708) Dispensers using an oversized stack of Water Bottles resets the stack size to 1
-   [MC-269717](https://bugs.mojang.com/browse/MC-269717) Cauldron deletes overstacked tinted shulker boxes
-   [MC-269809](https://bugs.mojang.com/browse/MC-269809) Feeding an axolotl an oversized tropical fish bucket resets the stack size to 1
-   [MC-269881](https://bugs.mojang.com/browse/MC-269881) Flow and Bolt Armor Trims don't grant "Crafting a New Look" advancement
-   [MC-269921](https://bugs.mojang.com/browse/MC-269921) Wind charges can be thrown though corners
-   [MC-269951](https://bugs.mojang.com/browse/MC-269951) When the gamerule "doImmediateRespawn" is set to true, the Wind Charged, Oozing or Weaving effects don't function for players
-   [MC-269958](https://bugs.mojang.com/browse/MC-269958) New effects are not required for the "How Did We Get Here?" advancement
-   [MC-269964](https://bugs.mojang.com/browse/MC-269964) Ominous item spawners are missing an NBT load for spawn\_item\_after\_ticks
-   [MC-269966](https://bugs.mojang.com/browse/MC-269966) "A Furious Cocktail" Advancement does not require the new potion effects
-   [MC-269969](https://bugs.mojang.com/browse/MC-269969) Using a normal trial key on the ominous vault grants Under Lock and Key advancement
-   [MC-269978](https://bugs.mojang.com/browse/MC-269978) The centrial dispenser in eruption trial chamber is missing a water bucket
-   [MC-269988](https://bugs.mojang.com/browse/MC-269988) New potion effects don't apply their respective behaviors when creeper explodes
-   [MC-270021](https://bugs.mojang.com/browse/MC-270021) Drinking a single ominous bottle in survival doesn't grant bad omen with the correct amplifier
-   [MC-270024](https://bugs.mojang.com/browse/MC-270024) When drinking ominous bottles, bad omen of higher levels can be overriden by lower amplifiers
-   [MC-270031](https://bugs.mojang.com/browse/MC-270031) Arrows spawned from ominous trial spawner can be picked up
-   [MC-270033](https://bugs.mojang.com/browse/MC-270033) Infested or Oozing effect cloud shrinks when silverfish or slime enters it
-   [MC-270047](https://bugs.mojang.com/browse/MC-270047) Axes prioritize scraping copper over blocking with shields
-   [MC-270052](https://bugs.mojang.com/browse/MC-270052) Blur levels below 10% do not appear to actually work
-   [MC-270181](https://bugs.mojang.com/browse/MC-270181) Wind charges go through an entity if it is close to a player
-   [MC-270216](https://bugs.mojang.com/browse/MC-270216) Mace smash attack particles cannot be reduced with the Particles setting
-   [MC-270278](https://bugs.mojang.com/browse/MC-270278) "Who needs rockets?" is granted at heights lower than 8 blocks when using slow falling
-   [MC-270296](https://bugs.mojang.com/browse/MC-270296) Ominous Item Spawner spawns unstackable arrows with potion effects
-   [MC-270301](https://bugs.mojang.com/browse/MC-270301) The fire protection enchantment applied to horse armor no longer decreases the duration of time the horse remains ablaze
-   [MC-270377](https://bugs.mojang.com/browse/MC-270377) Wind charges can be hit and redirected the moment they are thrown
-   [MC-270379](https://bugs.mojang.com/browse/MC-270379) Buttons and Levers don't make sounds when toggled by Wind Charges
-   [MC-270499](https://bugs.mojang.com/browse/MC-270499) Riptide trident in off-hand applies mace effects in main hand
-   [MC-270539](https://bugs.mojang.com/browse/MC-270539) The blast protection enchantment, when applied to horse armor, no longer diminishes the knockback effect from explosions on horse
-   [MC-270540](https://bugs.mojang.com/browse/MC-270540) The prevention of fall damage from wind charges is not retained upon reloading the world
-   [MC-270572](https://bugs.mojang.com/browse/MC-270572) Programmer Art resource pack duplicates some GUI texture files
-   [MC-270573](https://bugs.mojang.com/browse/MC-270573) Mounted entities are immune to wind charge damage
-   [MC-270584](https://bugs.mojang.com/browse/MC-270584) Vault/Ominous Vault loot isn't predetermined, allowing players to create backups of their worlds to get desired rewards
-   [MC-270588](https://bugs.mojang.com/browse/MC-270588) Hitting Wind Charges and Fireballs makes no sound
-   [MC-270635](https://bugs.mojang.com/browse/MC-270635) Trial spawners textures are inconsistent
-   [MC-270637](https://bugs.mojang.com/browse/MC-270637) maxEntityCramming set to 0 prevents slime spawning from oozing effect
-   [MC-270649](https://bugs.mojang.com/browse/MC-270649) The width of challenge advancements header is calculated in relation to the slash formatting of progress counter, causing overlap in some languages
-   [MC-270682](https://bugs.mojang.com/browse/MC-270682) modify\_contents item modifier can create overstacked items
-   [MC-270684](https://bugs.mojang.com/browse/MC-270684) set\_attributes loot function doesn't accept an empty list
-   [MC-270749](https://bugs.mojang.com/browse/MC-270749) Remote Getaway advancement is not granted when entering a gateway by throwing an ender pearl next to it
-   [MC-270779](https://bugs.mojang.com/browse/MC-270779) Getting data with /data command from a block/chest with a large amount of data can cause the game to crash
-   [MC-270789](https://bugs.mojang.com/browse/MC-270789) Only mace smash attacks increment "Times Used" stat
-   [MC-270791](https://bugs.mojang.com/browse/MC-270791) Mace smash attack can knockback tamed mobs
-   [MC-270795](https://bugs.mojang.com/browse/MC-270795) Mobs despawned by Ominous Trial Spawners can delete picked up items
-   [MC-270808](https://bugs.mojang.com/browse/MC-270808) Any item in the armor.body slot protects wolves from taking damage
-   [MC-270818](https://bugs.mojang.com/browse/MC-270818) Data generator items report is not deterministic
-   [MC-270821](https://bugs.mojang.com/browse/MC-270821) Regular Trial Spawners spawn the first mob with Ominous Trial equipment if they were last active as Ominous
-   [MC-270849](https://bugs.mojang.com/browse/MC-270849) Breeze can extinguish lit candles when mobGriefing is false
-   [MC-270926](https://bugs.mojang.com/browse/MC-270926) "foodSaturationLevel" can be negative
-   [MC-270934](https://bugs.mojang.com/browse/MC-270934) Missing trial chamber structure minecraft:trial\_chambers/chamber/addon/c6
-   [MC-270965](https://bugs.mojang.com/browse/MC-270965) The data type of the "minecraft:custom\_data" component of the recipe result will be forcibly modified
-   [MC-270974](https://bugs.mojang.com/browse/MC-270974) Breeze wind charges can change activation blockstates of redstone components when mobGriefing is disabled
-   [MC-270977](https://bugs.mojang.com/browse/MC-270977) Breezes don't make deflection sounds
-   [MC-270981](https://bugs.mojang.com/browse/MC-270981) View Bobbing toggle is not available in Accessibility Settings
-   [MC-271001](https://bugs.mojang.com/browse/MC-271001) Items in a container can be given a count above 99 (to max integer), and can crash the world
-   [MC-271005](https://bugs.mojang.com/browse/MC-271005) Knowledge books with a max stack size over 1 consume all items in the stack when used
-   [MC-271026](https://bugs.mojang.com/browse/MC-271026) Components that set a status effect sometimes lose parts of the data
-   [MC-271034](https://bugs.mojang.com/browse/MC-271034) List entries in the Social interaction menu are rendered over the background
-   [MC-271039](https://bugs.mojang.com/browse/MC-271039) Upgrading to 1.20.5 leads to the removal of all enchantments if item had the "sweeping" enchantment without namespace
-   [MC-271094](https://bugs.mojang.com/browse/MC-271094) Entity ID inside EntityTag is ignored when updating a world to 1.20.5
-   [MC-271157](https://bugs.mojang.com/browse/MC-271157) "Telemetry is disabled" tooltip does not get updated when the client locale changes
-   [MC-271159](https://bugs.mojang.com/browse/MC-271159) Banner pattern entries without colors are invalidated when upgrading to 1.20.5
-   [MC-271168](https://bugs.mojang.com/browse/MC-271168) Demo timer does not respect "Text Background" setting
-   [MC-271170](https://bugs.mojang.com/browse/MC-271170) Unexpected error when modifying skull's custom name to an invalid value
-   [MC-271199](https://bugs.mojang.com/browse/MC-271199) Advancement 'Local Brewery' not granted on shift-clicking
-   [MC-271244](https://bugs.mojang.com/browse/MC-271244) Auto-save text does not respect "Text Background" setting in accessibility settings
-   [MC-271293](https://bugs.mojang.com/browse/MC-271293) Wind charge, fireball and shulker bullet makes a "Burning" sound as it passes through the lava
-   [MC-271353](https://bugs.mojang.com/browse/MC-271353) Crafting UI flickers incorrect or blank recipes when choosing items from the recipe book
-   [MC-271360](https://bugs.mojang.com/browse/MC-271360) Horse armor and wolf armor are deleted when used on an armor stand
-   [MC-271414](https://bugs.mojang.com/browse/MC-271414) Damage command at position applies knockback in random direction
-   [MC-271897](https://bugs.mojang.com/browse/MC-271897) End Portal makes items disappear
-   [MC-271980](https://bugs.mojang.com/browse/MC-271980) Arrows/bee stingers stuck in players disappear when leaving the end
-   [MC-272014](https://bugs.mojang.com/browse/MC-272014) Ender Dragon death animation is broken since 20w22a (and broken again in 20w45a)
-   [MC-272073](https://bugs.mojang.com/browse/MC-272073) Item displays with billboard and rotation values create major visual bug
-   [MC-272079](https://bugs.mojang.com/browse/MC-272079) Medium/small Slimes and magma cube's attack reach is too short
-   [MC-272194](https://bugs.mojang.com/browse/MC-272194) Empty Attribute Modifiers lost during upgrade
-   [MC-272198](https://bugs.mojang.com/browse/MC-272198) Shulkers' models sometimes appear offset upon end city generation
-   [MC-272241](https://bugs.mojang.com/browse/MC-272241) Error when traveling through nether portal outside world border
-   [MC-272253](https://bugs.mojang.com/browse/MC-272253) The strength of the riptide enchantment is increased when holding tridents enchanted with riptide in both hands
-   [MC-272267](https://bugs.mojang.com/browse/MC-272267) "Changes the blurriness of menu background" lacks punctuation
-   [MC-272279](https://bugs.mojang.com/browse/MC-272279) Resource packs containing TrueType fonts fail to load on x64 macOS systems
-   [MC-272308](https://bugs.mojang.com/browse/MC-272308) Axolots can be attached to new leads when being already leashed
-   [MC-272445](https://bugs.mojang.com/browse/MC-272445) Command blocks made from Ctrl + Pick Block do not activate on first try
-   [MC-272469](https://bugs.mojang.com/browse/MC-272469) When the wind charge, fireball or shulker bullet is in the lava, it will continue to make a high-loudness noise
-   [MC-272515](https://bugs.mojang.com/browse/MC-272515) Component-Modified Saddles get their components wiped when dispensed onto a horse, mule, or camel.
-   [MC-272808](https://bugs.mojang.com/browse/MC-272808) Step height steps too high when there's a gap the player can fit through
-   [MC-272996](https://bugs.mojang.com/browse/MC-272996) Using "/execute in..." to switch dimensions causes the player to fall when flying

---

# Minecraft: Java Edition 1.20.6

The shipping room sure has been bustling with activity lately! So much so that we managed to cram one last release into the month of April. Today we're shipping Java Edition 1.20.6, a hotfix release that takes care of some critical issues that managed to sneak their way into the Armored Paws drop (1.20.5) last week.

Happy llama-safe mining!

## Fixed bugs in 1.20.6

-   [MC-271109](https://bugs.mojang.com/browse/MC-271109) Trader llama inventory shifted, partially lost during upgrade

---

# Minecraft: Java Edition 1.20.5

Do you smell that? Ah yes, it's the magical, tell-tale scent of release day Tuesday - and what a release day it is!

Today we are shipping Minecraft: Java Edition 1.20.5, also known as the Armored Paws drop! Travel to the Savanna and Badlands biomes and say hello to the endearing Armadillos. Find and befriend eight new Wolf variants and equip your canine companions with dyable armor made from Armadillo Scutes and go adventuring together!

On the technical side, the Armored Paws drop is also introducing a change to how Java Edition spawn chunks work, the details of which we covered in [the changelog for Snapshot 24w03a](https://www.minecraft.net/en-us/article/minecraft-snapshot-24w03a) earlier this year. The tl;dr version of this change is that we're making the spawn chunk radius a configurable game rule and decreasing the default value by 98%. This should translate to a noticeable performance boost for most players!

So what are you waiting for? Stock up on food and water and start reading through the complete 1.20.5 changelog below. It's a looong one.

Happy scute brushing!

## New Features

-   Added Armadillo and Armadillo Scutes
-   Added Wolf Armor
-   Added Wolf variants

![A family of Armadillos walking on the Red Sand of the Badlands amidst Dead Bushes with a green Jungle in the background.](https://launchercontent.mojang.com/v2/images/1.20.51thumbnail.jpg)

### Armadillo

-   The Armadillo is a new passive mob
-   Armadillos drop Armadillo Scutes periodically, and when brushed
-   Armadillos spawn in Savannas and Badlands
-   The Armadillo's favorite food is the Spider Eye
    -   Armadillos are tempted by Spider Eyes
    -   Feeding two adult Armadillos Spider Eyes makes them breed
    -   Feeding a baby Armadillo a Spider Eye makes it grow up quicker
-   The Armadillo rolls up when it detects a threat such as:
    -   A player sprinting, riding a mount, or riding a vehicle
    -   Undead mobs
    -   A mob or a player it has recently been attacked by
-   The Armadillo does not roll up when:
    -   Fleeing, in water, in the air, or when on a Lead
-   When an Armadillo is rolled up:
    -   It does not walk, cannot eat, and will not be tempted by food
    -   Its shell will protect it, reducing damage taken, even allowing it to fully resist weak attacks
    -   It will continue to scan for threats, occasionally peeking to check the surroundings
        -   If no threats are detected for 4 seconds, it will unroll
-   Spiders and Cave Spiders will run away from Armadillos that are not in a rolled up state

![A rolled-up Armadillo is peeking to check if a Zombie is gone, but the Zombie is still close. It happens in Savanna during twilight.](https://launchercontent.mojang.com/v2/images/1.20.52thumbnail.jpg)

#### Armadillo Scutes

-   Armadillo Scutes are dropped by Armadillos periodically or when an Armadillo is brushed
-   Armadillo Scutes can be used to craft Wolf Armor
-   Dispensers can be used to brush Armadillo Scutes off Armadillos

![Ari is fighting two Skeletons and a Creeper in a partially lit cave with their Tamed Wolves who are wearing colorful Wolf Armor sets.](https://launchercontent.mojang.com/v2/images/1.20.53thumbnail.jpg)

### Wolf Armor

-   Wolf Armor can be crafted with Armadillo Scutes and can be dyed in a similar fashion to Leather Armor
-   The Wolf Armor will protect the Wolf from most damage sources until the armor loses all durability and breaks
-   Wolf Armor shows signs of breakage as durability goes down
-   Using Armadillo Scutes on the Wolf Armor while it is equipped on the Wolf will repair it
-   Using Shears on a Wolf that is wearing armor will drop the armor
-   Wolf Armor can only be equipped on a tame adult Wolf
-   Only the Wolf's owner can equip, repair, and shear Wolf Armor
-   Dispensers cannot equip nor remove Wolf Armor

![Efe is trying to tame a striped Wolf on a Savanna Plateau. In the background a river is flowing through a Badlands Canyon.](https://launchercontent.mojang.com/v2/images/1.20.54thumbnail.jpg)

### Wolf Variants

New Wolf variants have been added. The variant is determined by the biome they spawn in. Wolves spawn in packs, with a default pack size of 4.

-   Pale Wolf - The Wolf we're all familiar with. This variant spawns in the Taiga biome
-   Woods Wolf - A variant that spawns in the Forest biome. This will be the dominant Wolf variant that you will be able to find in the Overworld, since the Forest biome is very common
-   Ashen Wolf - A variant that spawns in the Snowy Taiga biome
-   Black Wolf - A variant that spawns in the Old Growth Pine Taiga biome, in smaller packs of 2-4
-   Chestnut Wolf - A variant that spawns in the Old Growth Spruce Taiga biome, in smaller packs of 2-4
-   Rusty Wolf - A variant that spawns in a new location for Wolves - the Sparse Jungle biome, in smaller packs of 2-4
-   Spotted Wolf - A variant that spawns in a new location for Wolves - the Savanna Plateau biome, in larger packs of 4-8
-   Striped Wolf - A variant that spawns in a new location for Wolves - the Wooded Badlands biome, in larger packs of 4-8
-   Snowy Wolf - A variant that spawns in the Grove biome. This lone Wolf is a rare type, as it always walks alone

When summoned in other ways (e.g. using the Spawn Egg or using the `summon` command), the variant selection follows the natural spawning biome rules with the following extensions:

-   Rusty Wolf: will be selected in all Jungle-like biomes, including Jungle and Bamboo Jungle Biomes
-   Spotted Wolf: will be selected in all Savanna-like biomes, including Savanna and Windswept Savanna Biomes
-   Striped Wolf: will be selected in all Badlands-like biomes, including Badlands and Eroded Badlands Biomes

![Ari is jumping over a ravine in a Savanna on a brown Horse with white spots. A big pack Tamed Wolves of different variants is following them.](https://launchercontent.mojang.com/v2/images/1.20.55thumbnail.jpg)

### Advancements

-   Added the following advancements:
    -   `Isn't It Scute?` - Get Armadillo Scutes from an Armadillo using a Brush
    -   `Shear Brilliance` - Remove Wolf Armor from a Wolf using Shears
    -   `Good as New` - Repair a damaged Wolf Armor using Armadillo Scutes
    -   `The Whole Pack` - Tame one of each Wolf variant

## Changes

-   The UI has been updated with a fresher look
-   Decreased the default size of the spawn chunks and made the value configurable
-   Updated the health and damage dealt by Tamed Wolves
-   Adjusted spawning conditions for Wolves, allowing them to spawn on Coarse Dirt and Podzol blocks
-   Adjusted the texture of the Wolf Collar layer to be more consistent with the new Wolf Armor
-   Adjusted passive mobs spawning in Grove biome to only include Rabbits, Foxes and Wolves
-   Minor tweaks to existing Blocks, Items and Entities
-   Added option to use Japanese variants of CJK characters
-   Added support for Viossa language
-   When entities leave or enter The End, the area they arrive in will now stay loaded for 15 seconds, matching the behavior of Nether Portals
-   Improvements to the Game's Performance
-   Improved handling of errors during saving and loading

### UI Updates

The UI has been updated to sport a fresher look and to be more consistent when it comes to the layout of different UI elements, all while retaining the essence and feel of the old screens.

![An updated Minecraft options screen with a new transparent background. The game world is blurred but visible behind the menu elements. A grey sheep is looking at the player.](https://launchercontent.mojang.com/v2/images/1.20.57thumbnail.jpg)

-   The menu background dirt texture has been replaced by a darkened background
    -   The dirt background can be restored by using the built-in Programmer Art Resource Pack
    -   Outside the game, the main menu panorama is displayed behind all screens
    -   In the game, the world will be visible behind all screens
    -   Paired with the darkened background is a blur
        -   The strength of the blur can be configured in Video Settings and Accessibility Settings
        -   In-game screens such as containers and books are not affected by these changes
-   Screen elements such as titles and buttons are positioned more consistently across different screens
-   The World Backups screen and the Players screen in the Realms menu have been updated
-   Lists now have clearer borders at the top and bottom
-   Button tooltips will no longer appear when hovering outside the containing element
-   After defeating the Ender Dragon and entering the End Portal, the End Poem and credits are now displayed with a background based on the animated End Portal effect
-   The animated Nether Portal texture is displayed when changing dimension to or from The Nether
-   The animated End Portal effect is displayed when changing dimension to or from The End

### Spawn Chunk Changes

-   The size of the spawn chunks changed from a radius of 10 (19x19 entity-ticking chunks) to a radius of 2 (3x3 entity-ticking chunks)
    -   This was done to reduce loading times, as well as memory and CPU usage
    -   We opted to not fully remove spawn chunks to allow players who currently utilize this functionality to continue to do so
-   Added a new gamerule `spawnChunkRadius` to set the size of the spawn chunks
    -   Possible values are 0 to 32, where 0 completely disables the spawn chunks and 10 is equivalent to the functionality before this change
    -   Default value is 2, equivalent to 3x3 entity ticking chunks
    -   Note that setting this to a high value might require allocating more memory for the game in the Launcher

### Tamed Wolves Health and Damage

-   Tamed Wolves now have 40 health points (20 hearts) instead of 20 health points (10 hearts)
-   They no longer take half of the damage from most environmental sources like they used to do
    -   In most cases, this change will make no difference given the health boost, but they can now withstand more damage from players and arrows
-   Feeding a Wolf now heals twice as many health points

![Steve is experimenting with different potion effects in a Savanna Village hut. Potion effect particles of different colors are visible around them.](https://launchercontent.mojang.com/v2/images/1.20.56thumbnail.jpg)

### Minor Tweaks to Blocks, Items and Entities

-   Renamed scutes that drop from Turtles to Turtle Scutes
-   Added unique sounds for Cobwebs
-   Enchantments on Items are now always listed in the same order in tooltips, regardless of how they were added to those items
-   Adjusted flying behaviour for Bees and Parrot to keep them from overshooting their position when flying up and down
-   Llamas and Shulkers are no longer able to destroy Armor Stands
-   Status effect particle colors are no longer blended into one particle color
    -   All active visible status effect particles are now rendered separately
-   Ctrl+Picking a renamed block (such as a Chest) in Creative Mode will now give a renamed item
-   Ctrl+Picking a block no longer lists "(+NBT)" in the item tooltip

### Accessibility

-   The default focus is now always set when entering or exiting any menu while navigating using tab or arrow keys
-   Added a new accessibility option to control the strength of the background blur when a menu is open

### Japanese Font Variants

-   A new option has been added to select Japanese variants for some CJK characters
-   Replacement glyphs come from the Japanese version of the Unifont font
-   The new option is included in a new "Font Settings" menu, accessible from the "Language" menu
-   The default value of this option is based on the system locale language setting
-   The "Force Unicode" button has been moved to "Font Settings"

### Performance Improvements

-   Improved Hopper performance
-   Hoppers will no longer try to pick up item entities if there is a full block placed above it
    -   Beehives and Bee Nests are exempt from this
    -   This does not affect Minecarts with Hoppers
-   Reduced time needed to generate Explorer Maps to Buried Treasures

### Saving and Loading Improvements

-   In Singleplayer, when errors occur during loading or saving of chunks, a warning will be shown in a toast
-   Trying to join a Singleplayer world with less than 64 MB free disk space will show a warning screen
    -   Additionally, a warning toast will be shown periodically while in game

## Technical Changes

-   The Data Pack version is now 41
-   The Resource Pack version is now 32
-   The game now requires Java 21
-   The game now requires a 64-bit Operating System
-   The included Java distribution is now the Microsoft build of OpenJDK 21.0.3
-   Added transfer and cookie packets for custom servers
-   Added an option to use a faster region file compression algorithm on dedicated servers
-   Added a reserved region file compression id for third-party servers to use for custom compression implementations
-   Changes to optimizing worlds
-   Improved server TPS debug chart
-   Allowed server operators to view dedicated server TPS debug chart
-   Added JFR (Java Flight Recorder) events for individual chunk reads (`minecraft.ChunkRegionRead`) and writes (`minecraft.ChunkRegionWrite`)

### Network Protocol

-   Reduced amount of data sent by the server during login by reusing parts of the vanilla data pack
-   Client chat state is now preserved by default when entering configuration phase
-   Invalid data in packets sent from a server will now cause the game client to disconnect
    -   To ease the transition period, modded servers can opt out by setting the appropriate field in the `handshake/game_profile` packet
    -   This option will be removed in the next release
-   The `chat_command_signed` packet has been split from `chat_command`
    -   Commands that do not accept any signed arguments will use the unsigned packet, and will not pass any 'last seen' chat updates

#### Transfer Packets

-   Custom servers can now request that clients connect to another server with a new packet
-   When a client is transferred, it will connect to the target server with a new transfer intent (id 3)
-   By default, servers will not accept incoming transfers and will disconnect the client
-   This can be changed by setting the `accepts-transfers` property to `true` in the `server.properties` file
-   Resource packs are maintained across transfers
-   In the case of a transfer, custom servers can skip authenticating again with a new flag in the clientbound `hello` packet

#### Cookie Packets

-   Cookie packets allow custom servers to request and store data on a client
    -   Each cookie may be up to 5 KiB in size
    -   Cookies may be requested during login, configuration and play phases — but only stored during the configuration and play phases
-   Cookies persist across server transfers but are not persisted when the player disconnects
    -   This allows servers to pass along information such as authentication or custom game data to the new server

### Region File Compression Algorithm

-   Added a dedicated server configuration property `region-file-compression` with 3 possible values:
    -   `deflate`, the default option. Uses the old algorithm
    -   `lz4` uses LZ4 algorithm, which requires less CPU time to compress and decompress but uses more disk space
    -   `none` does not compress the data
        -   This consumes significantly more space and requires significant time to read and write, even though CPU is used less
        -   Might make sense together with filesystem level compression
-   Changing the compression algorithm will not automatically recompress the world
    -   New or updated chunks will use the newly configured algorithm, but the old ones will stay in the previous format

### Reserved Compression Id for Third-party Servers

-   Compression id `127` can now be used for custom implementations of region file compression
-   When used, the version id must be followed by a namespaced string representing the custom algorithm used

### World Optimizing Changes

-   Optimizing singleplayer worlds and running a dedicated server with the `forceUpgrade` option now also upgrades contents of `entities` and `poi` directories of the world
-   Added a new `recreateRegionFiles` dedicated server startup parameter
    -   It will trigger world optimization similar to `forceUpgrade`, but will also rewrite all the chunks independently of whether they have been upgraded
    -   This will create fresh and defragmented region files
    -   Using this parameter after changing the `region-file-compression` server property will recompress all region files in the new format

![A screenshot of the updated ticks-per-second graph.](https://launchercontent.mojang.com/v2/images/1.20.5perfgraph.jpg)

### Improved The Server TPS Debug Chart

-   As before, it is accessible by pressing `F3 + 2`
-   The bottom dark red section of the chart displays the time spent during the main logic of the server tick
    -   This is equivalent to the value displayed in the old chart
-   The light brown section displays time spent running scheduled tasks
-   The purple section displays time spent executing all other code during the tick
-   The top light green (or yellow or red depending on lag) section displays time spent idling, waiting for next tick
-   The `min`, `avg`, `max` aggregate values are based on the sum of the first 3 sections
-   Server operators can now view the TPS debug chart while connected to their dedicated server

### Chat

-   Client chat state (on-screen messages and chat input history) is now preserved by client when entering and exiting configuration phase
-   Message signature chain handling remains unchanged - going into configuration phase starts a new session
-   If the client has a message delay configured, any pending messages will be delivered immediately before leaving the world
-   The server can clear chat state by sending a `reset_chat` packet in configuration phase

## Data Pack Versions 27 through 41

The Data Pack version used by the game is now 41. These are the changes compared to version 26, used in 1.20.4.

-   Renamed `scute` item to `turtle_scute`
-   Changed Item Stack data format, introducing Item Stack Components
-   Added many new Attributes
-   Added new loot functions
-   Added new advancement predicates
-   Added new tags
-   Recipe results can now specify component data
-   Added data-driven registries for Banner Patterns and Wolf Variants
-   Particle representation in commands and area effect clouds has been changed

![In the Crafting interface, a custom "Stiiiiiick" has been crafted with 3 Sticks in the grid. The item tooltip shows the text "Like a stick, but stickier".](https://launchercontent.mojang.com/v2/images/1.20.5tech1thumbnail.jpg)

### Item Data Format

We have made some large changes to how Item Stack-specific properties are stored and represented in this release, replacing the current NBT 'tag' with structured 'components'.

This change has been made in order to:

-   Validate item properties at load time, enabling easier identification of invalid data in commands and data packs
    -   This should avoid any 'silent' breakages in commands specifying custom item data for any potential future format changes
-   Continue to evolve the game to enable the creation of dynamic content
-   Improve performance in cases where the game needs to frequently look up some property of an item (e.g. Armor Trims rendering every frame)
-   We understand that this is a significant breaking change for many datapacks and custom maps which will require significant effort to upgrade

We do however believe that this builds critical foundations for future extensibility. We have taken care to ship these changes all at once, with the hope that this avoids future incremental changes requiring many small updates to packs.

The current NBT 'tag' has existed for quite some time, and we are aware that a lot of clever techniques have been developed with this for commands and data packs. Over the course of the snapshot series, we have hugely appreciated your feedback on these changes, allowing us to avoid (often undocumented) functionality being lost without suitable alternatives.

-   Unstructured NBT data attached to stacks of items (`tag` field) has been replaced with structured 'components'
    -   This data is parsed and validated when the item is loaded
    -   This should improve performance in certain scenarios (e.g. Armor Trim rendering) when item data was frequently compared or requested and parsed
    -   Custom data can still be stored in the `minecraft:custom_data` component
-   Item types (e.g. `minecraft:stick`) hold a set of default components on an item that individual item stacks can override
-   The format of serialized items and items in data packs has been updated for consistency and to support components
-   Item syntax in commands has been updated to support components
-   When advanced tooltips are enabled (F3+H), the number of components will be displayed instead of number of tags
-   Default component values for items are now listed in `items.json` generated in `reports` directory
-   Block definitions are now added to `blocks.json` report (note: those definitions are not used yet and present only for informational purposes)

#### Migrated Item Stack Components

These are item stack components that replace existing functionality that was formerly specified in item NBT. All commands and data definitions will need to be upgraded to use these formats. Items in-world will however be automatically upgraded.

##### `minecraft:custom_data`

-   Can be used for custom data storage on an item
-   When upgrading a world, any non-game data in the item `tag` will be moved into here
-   Format: object with any fields
    -   e.g. `custom_data={some:'data'}`
-   Can be modified with the `set_custom_data` and `copy_custom_data` loot functions

##### `minecraft:damage`

-   The amount of durability removed from an item
-   If removed, the item will not be damageable
-   Replaces `Damage` tag
-   Format: non-negative integer
    -   e.g. `damage=12`
-   For damageable items (with the `max_damage` component), has an implicit default value of: `0`
-   Can be modified with the `set_damage` loot function

##### `minecraft:repair_cost`

-   The additional experience cost required to modify an item in an Anvil
-   Replaces `RepairCost` tag
-   Format: non-negative integer
    -   e.g. `repair_cost=12`
-   If not set, has an implicit default value of: `0`

##### `minecraft:unbreakable`

-   If set, the item will not lose any durability when used
-   Replaces `Unbreakable` boolean tag
-   Format: object with fields
    -   `show_in_tooltip`: boolean (default: `true`)
        -   If `true`, an 'Unbreakable' line will be included in the tooltip
        -   Replaces 3rd bit of `HideFlags` tag
    -   e.g. `unbreakable={}`, `unbreakable={show_in_tooltip:false}`

##### `minecraft:enchantments`

-   Stores a list of enchantments and their levels on an item
-   Replaces `Enchantments` tag
-   Format: object with fields
    -   `levels`: object of enchantment (id string) to level (integer \[0; 255\])
    -   `show_in_tooltip`: boolean (default: `true`)
        -   If `false`, no enchantments will be shown in the item tooltip
        -   Replaces 1st bit of `HideFlags` tag
    -   e.g. `enchantments={levels:{'minecraft:protection':2},show_in_tooltip:false}`
    -   Alternatively, can be defined as an inline map of enchantment id to level
        -   e.g. `enchantments={sharpness:1}`
-   If not set, has an implicit default value of: `{levels:{}}`
-   Can be modified with the `set_enchantments`, `enchant_randomly`, and `enchant_with_levels` loot functions

##### `minecraft:stored_enchantments`

-   Stores list of enchantments and their levels for an Enchanted Book
-   Unlike `minecraft:enchantments`, the effects provided by enchantments do not apply from this component
-   Replaces `StoredEnchantments` tag on Enchanted Books
-   Format: same as `minecraft:enchantments`
    -   `show_in_tooltip` value replaces 6th bit of `HideFlags` tag
-   On Enchanted Books, has an implicit default value of: `{levels:{}}`

##### `minecraft:custom_name`

-   Custom name override for an item (as set by renaming with an Anvil)
-   Replaces `display.Name` tag
-   Format: JSON chat component string
    -   e.g. `custom_name='{"text": "This item is renamed!", "color": "red"}'`
-   Can be modified with the `set_name` loot function

##### `minecraft:lore`

-   Additional lines to include in an item's tooltip
-   Replaces `display.Lore` tag
-   Format: list of JSON chat component strings (max: 256 entries)
    -   e.g. `lore=['{"text": "The cake is a lie!"}']`
-   If not set, has an implicit default value of: `[]`
-   Can be modified with the `set_lore` loot function

##### `minecraft:can_break`

-   Controls which blocks a player in Adventure mode can break with this item
-   Replaces `CanDestroy` tag
    -   These were previously stored as flat strings, but now use the more flexible block predicate format already used in loot tables and advancements
-   Format: object with fields
    -   `predicates`: list of block predicates
        -   `blocks`: block, list of blocks, or hash-prefixed block tag
        -   `nbt`: block entity NBT to match
        -   `state`: map of state property key to values to match
    -   `show_in_tooltip`: boolean (default: `true`)
        -   Replaces 4th bit of `HideFlags` tag
    -   e.g. `can_break={predicates:[{blocks:'minecraft:furnace',state:{facing:'north'}]}`
    -   Alternatively, can be defined as a single block predicate
        -   e.g. `can_break={blocks:'minecraft:stone'}`

##### `minecraft:can_place_on`

-   Controls which blocks a player in Adventure mode can place on with this item
-   Replaces `CanPlaceOn` tag
-   Format: object with fields
    -   `predicates`: list of block predicates
        -   Same as `can_break.predicates`
    -   `show_in_tooltip`: boolean (default: `true`)
        -   Replaces 5th bit of `HideFlags` tag
    -   e.g. `can_place_on={predicates:[{blocks:'minecraft:furnace',state:{facing:'north'}]}`
    -   Alternatively, can be defined as a single block predicate
        -   e.g. `can_place_on={blocks:'minecraft:stone'}`

##### `minecraft:dyed_color`

-   Represents a color applied to a dyeable item (in the `#minecraft:dyeable` item tag)
-   Replaces `display.color` tag
-   Format: object with fields
    -   `rgb`: integer, RGB value
    -   `show_in_tooltip`: boolean (default: `true`)
        -   Replaces 7th bit of `HideFlags` tag
    -   e.g. `dyed_color={rgb:16711680}`
    -   Alternatively, can be defined as an inline integer RGB value
        -   e.g. `dyed_color=16711680`

![A very large Sunny is walking up 3-block-tall steps in a Cherry Grove biome, making use of the step height and scale attributes.](https://launchercontent.mojang.com/v2/images/1.20.5tech6thumbnail.jpg)

##### `minecraft:attribute_modifiers`

-   Holds attribute modifiers applied to any item
-   Replaces `AttributeModifiers` tag
-   Format: object with fields (default: `{modifiers:[]}`)
    -   `modifiers`: list of attribute modifiers
        -   `type`: attribute id
            -   Replaces `AttributeName`
        -   `slot`: one of:
            -   `any` (default)
            -   `hand`: either in main or offhand (new)
            -   `armor`: any armor slot (new)
            -   `mainhand`
            -   `offhand`
            -   `head`
            -   `chest`
            -   `legs`
            -   `feet`
            -   `body` (new)
            -   Modifiers will only apply when the item is equipped in the specified slot
            -   Replaces `Slot`
        -   `uuid`: uuid, uniquely represents this modifier
            -   Only one modifier can exist with the same id
            -   Replaces `UUID`
        -   `name`: string, human-readable name
            -   Replaces `Name`
        -   `amount`: double, number of units to modify this attribute (controlled by `operation`)
            -   Replaces `Amount`
        -   `operation`: one of:
            -   `add_value` (was `0`): Adds `amount` to the attribute
            -   `add_multiplied_base` (was `1`): Adds `amount` \* base value to the attribute
            -   `add_multiplied_total` (was `2`): Adds `amount` \* total value (from all previous modifiers) to the attribute
            -   Replaces `Operation` with integer ids
    -   `show_in_tooltip`: boolean (default: `true`)
        -   Replaces 2nd bit of `HideFlags` tag
    -   e.g. `attribute_modifiers={modifiers:[{type:'minecraft:generic.scale',uuid:[1,2,3,4],name:'Big!',amount:1.0,operation:'add_multiplied_base'}]}`
    -   Alternatively, can be defined as a direct list of modifiers
        -   e.g. `attribute_modifiers=[{type:'generic.scale',uuid:[1,2,3,4],name:'Big!',amount:1.0,operation:'add_multiplied_base'}]`
-   If not set, has an implicit default value based on the item type's default attributes (e.g. attack damage for weapons)
-   Can be modified with the `set_attributes` loot function

##### `minecraft:charged_projectiles`

-   Holds all projectiles that have been loaded into a Crossbow
-   If not present, the Crossbow is not charged
-   Replaces `Charged` and `ChargedProjectiles` tags
-   Format: list of item stacks
    -   Cannot store empty/air items
    -   e.g. `charged_projectiles=[{id:'minecraft:arrow'}]`
    -   No longer restricted to 3 entries
-   Can be modified with the `modify_contents` and `set_contents` loot functions

##### `minecraft:intangible_projectile`

-   Marks that a projectile item would be intangible when fired (i.e. can only be picked up by a creative mode player)
-   Only set when items are inside a Crossbow's `charged_projectiles` component
-   Format: empty object
    -   e.g. `intangible_projectile={}`

##### `minecraft:bundle_contents`

-   Holds all items stored inside of a Bundle
-   If removed, items cannot be added to the Bundle
-   Replaces `Items` tag
-   Format: list of item stacks
    -   Cannot store empty/air items
    -   e.g. `bundle_contents=[{id:'minecraft:poisonous_potato'}]`
-   On Bundles, has an implicit default value of: `[]`
-   Can be modified with the `modify_contents` and `set_contents` loot functions

##### `minecraft:map_color`

-   Represents the tint of the decorations on the Filled Map item
-   Replaces `display.MapColor` tag
-   Format: integer, RGB value
    -   e.g. `map_color=16711680`
-   On Filled Maps, has an implicit default value of: `4603950`

##### `minecraft:map_decorations`

-   Holds a list of markers to be placed on a Filled Map (used for Explorer Maps)
-   Replaces `Decorations` tag
-   Format: map of unique decoration id to decorations
    -   `type`: one of:
        -   `player` (was `0`)
        -   `frame` (was `1`)
        -   `red_marker` (was `2`)
        -   `blue_marker` (was `3`)
        -   `target_x` (was `4`)
        -   `target_point` (was `5`)
        -   `player_off_map` (was `6`)
        -   `player_off_limits` (was `7`)
        -   `mansion` (was `8`)
        -   `monument` (was `9`)
        -   `banner_white` (was `10`)
        -   `banner_orange` (was `11`)
        -   `banner_magenta` (was `12`)
        -   `banner_light_blue` (was `13`)
        -   `banner_yellow` (was `14`)
        -   `banner_lime` (was `15`)
        -   `banner_pink` (was `16`)
        -   `banner_gray` (was `17`)
        -   `banner_light_gray` (was `18`)
        -   `banner_cyan` (was `19`)
        -   `banner_purple` (was `20`)
        -   `banner_blue` (was `21`)
        -   `banner_brown` (was `22`)
        -   `banner_green` (was `23`)
        -   `banner_red` (was `24`)
        -   `banner_black` (was `25`)
        -   `red_x` (was `26`)
        -   `village_desert` (was `27`)
        -   `village_plains` (was `28`)
        -   `village_savanna` (was `29`)
        -   `village_snowy` (was `30`)
        -   `village_taiga` (was `31`)
        -   `jungle_temple` (was `32`)
        -   `swamp_hut` (was `33`)
        -   `trial_chambers` (new)
        -   Replaces `type` byte with numeric ids
    -   `x`: double, world coordinate
    -   `z`: double, world coordinate
    -   `rotation`: float, clockwise rotation from north in degrees
        -   Replaces `rot` double
    -   e.g. `map_decorations={'Some marker':{type:'target_x',x:123.0,z:-45.0,rotation:0.0f}}`
-   On Filled Maps, has an implicit default value of: `{}`

##### `minecraft:map_id`

-   References the shared map state holding map contents and markers for a Filled Map
-   Replaces `map` tag
-   Format: integer id
    -   e.g. `map_id=1`

##### `minecraft:custom_model_data`

-   Can be used to replace the models of items by selecting for the `minecraft:custom_model_data` property in the item model
-   Replaces `CustomModelData` tag
-   Format: integer value
    -   e.g. `custom_model_data=43`
-   Can be modified with the `set_custom_model_data` loot function

##### `minecraft:potion_contents`

-   Holds the contents of a potion (Potion, Splash Potion, Lingering Potion), or potion applied to an item (Tipped Arrow)
-   Replaces `Potion`, `CustomPotionColor`, and `custom_potion_effects` tags
-   Format: object with fields
    -   `potion`: potion id (optional)
        -   The potion type in this item: the item will inherit all effects from this
    -   `custom_color`: integer, RGB value (optional)
        -   Overrides the visual color of the potion
    -   `custom_effects`: list of effect instances (default: `[]`)
        -   Additional list of custom effects that this item should apply, that may not be representable by an existing potion
    -   e.g. `potion_contents={potion:'minecraft:invisibility',custom_color:16711680}`
    -   Alternatively, can be defined as a single potion ID
        -   e.g. `potion_contents="invisibility"`
-   On Potion or Tipped Arrow items, has an implicit default value of: `{}`
-   Can be modified with the `set_potion` loot function

##### `minecraft:writable_book_content`

-   Holds the contents in a Book and Quill
-   Replaces `pages` and `filtered_pages` tags
    -   The pages list objects directly, with `{raw:'...'}` wrapping
    -   `filtered_pages` are pulled by index keys into the relevant page entry under the `filtered` field
-   Format: object with fields
    -   `pages`: list (max: 100 entries) of either:
        -   object with fields
            -   `raw`: string, page plain text contents
            -   `filtered`: string, filtered page contents (optional)
                -   If specified, players with chat filter enabled will see this page instead of `raw`
        -   or: string, page plain text contents
    -   e.g. `writable_book_content={pages:['Hello world!']}` or `writable_book_content={pages:[{raw:'Hello world!'}]}`
-   On Book and Quill, has an implicit default value of: `{pages:[]}`
-   Can be modified with the `set_writable_book_pages` loot function

##### `minecraft:written_book_content`

-   Holds the contents and metadata of a Written Book
-   Replaces `pages`, `filtered_pages`, `title`, `filtered_title`, `author`, `generation`, and `resolved` tags
-   Format: object with fields
    -   `pages`: list of filtered chat components
        -   Same format as `writable_book_contents` pages, except uses JSON chat component strings which can be formatted
    -   `title`: filtered string (same format as pages)
    -   `author`: string, player name
    -   `generation`: integer \[0; 3\]
        -   The number of times this book has been copied (`0` = original)
    -   `resolved`: boolean
        -   `true` if the chat components in this book have already been resolved (entity selectors, scores substituted)
        -   If `false`, it will be resolved when opened by a player
    -   e.g. `written_book_content={pages:['"Hello world!"'],title:{raw:'"A delightful read"'},author:'Herobrine',generation:1,resolved:true}`
-   Can be modified with the `set_written_book_pages` and `set_book_cover` loot functions

##### `minecraft:trim`

-   Holds the trims applied to an item
    -   Presence of the component is no longer restricted by the `#minecraft:trimmable_armor` item tag (although, this tag is still used for recipes)
-   Replaces `Trim` tag of the same format
-   Format: object with fields
    -   `pattern`: pattern id (or inline pattern)
    -   `material`: material id (or inline material)
    -   `show_in_tooltip`: boolean (default: `true`)
        -   Replaces 8th bit of `HideFlags` tag
    -   e.g. `trim={pattern:'minecraft:silence',material:'minecraft:redstone'}`

##### `minecraft:suspicious_stew`

-   Holds the effects that will be applied when consuming Suspicious Stew
-   Replaces `effects` tag of the same format
-   Format: list of effect objects with fields
    -   `id`: effect id
    -   `duration`: integer, tick count (default: `160`)
    -   e.g. `suspicious_stew=[{id:'minecraft:poison'}]`
-   On Suspicious Stew, has an implicit default value of: `[]`
-   Can be modified with the `set_stew_effect` loot function

##### `minecraft:hide_additional_tooltip`

-   If present, disables 'additional' tooltip part which comes from the item type
-   Replaces 6th bit of `HideFlags` tag
-   Format: empty object
    -   e.g. `hide_additional_tooltip={}`

##### `minecraft:debug_stick_state`

-   Stores the selected block state properties used by a Debug Stick
-   Replaces `DebugProperty` tag
-   Format: map of block id to block property name
    -   e.g. `debug_stick_state={'minecraft:turtle_egg':'eggs','minecraft:furnace':'facing'}`
-   On Debug Stick, has an implicit default value of: `{}`

##### `minecraft:entity_data`

-   Stores unstructured NBT data to apply to an entity when using an item that spawns an entity, such as a Spawn Egg or Armor Stand
-   Replaces previous `EntityTag` tag, with same behavior
-   Format: object with fields
    -   Must contain an `id` field with the entity type
    -   Any additional fields will be merged into the entity when spawned
    -   e.g. `entity_data={id:'minecraft:pig',Health:1.0f}`

##### `minecraft:bucket_entity_data`

-   Stores unstructured NBT data to apply to an entity when placed from a bucket
-   Replaces `NoAI`, `Silent`, `NoGravity`, `Glowing`, `Invulnerable`, `Health`, `Age`, `Variant`, `HuntingCooldown`, and `BucketVariantTag` tags
-   Format: object with fields
    -   Can contain any of the above listed fields, which will be applied to the entity when placed
    -   e.g. `bucket_entity_data={NoAI:1,Age:43}`
-   On bucketed mob items, has an implicit default value of: `{}`

##### `minecraft:instrument`

-   Holds the instrument type used by a Goat Horn
-   Replaces `instrument` tag of same format
-   Format: instrument id
    -   e.g. `instrument='minecraft:ponder_goat_horn'`
-   Can be modified with the `set_instrument` loot function

##### `minecraft:recipes`

-   List of recipes that should be unlocked when using the Knowledge Book item
-   Replaces `Recipes` tag of same format
-   Format: list of recipe ids
    -   e.g. `recipes=['minecraft:acacia_boat','minecraft:anvil']`
-   On Knowledge Book, has an implicit default value of: `[]`

##### `minecraft:lodestone_tracker`

-   If present, specifies that the Compass is a Lodestone Compass
-   Replaces `LodestonePos`, `LodestoneDimension`, and `LodestoneTracked` tags
-   Format: object with fields
    -   `target`: object with fields (optional)
        -   `pos`: integer array of x, y, and z
        -   `dimension`: dimension id
        -   If not present, the compass will spin
    -   `tracked`: boolean (default: `true`)
        -   If `true`, when the Lodestone at the target position is removed, the `target` field will be removed
    -   e.g. `lodestone_tracker={target:{pos:[13,64,-43],dimension:'minecraft:the_nether'}}`

##### `minecraft:firework_explosion`

-   Stores the explosion crafted in a Firework Star
-   Replaces `Explosion.Type`, `Explosion.Colors`, `Explosion.FadeColors`, `Explosion.Trail`, and `Explosion.Flicker` tags
-   Format: object with fields
    -   `shape`: one of
        -   `small_ball` (was `0`)
        -   `large_ball` (was `1`)
        -   `star` (was `2`)
        -   `creeper` (was `3`)
        -   `burst` (was `4`)
        -   Replaces `Type` numeric ids
    -   `colors`: integer array, RGB values (default: `[]`)
        -   List of initial particle colors, randomly selected from
    -   `fade_colors`: integer array, RGB values (default: `[]`)
        -   List of particle colors to fade to, randomly selected from
    -   `has_trail`: boolean (default: `false`)
    -   `has_twinkle`: boolean (default: `false`)
        -   Renamed from `Flicker` tag
    -   e.g. `firework_explosion={shape:'large_ball',colors:[16711680],has_trail:true}`
-   Can be modified with the `set_firework_explosion` loot function

##### `minecraft:fireworks`

-   Stores all explosions crafted into a Firework Rocket, as well as flight duration
-   Replaces `Fireworks.Explosions` and `Fireworks.Flight` tags
-   Format: object with fields
    -   `explosions`: list of explosions (max: 256 entries)
        -   Same format as `minecraft:firework_explosion` component
    -   `flight_duration`: unsigned byte, number of gunpowder in this rocket
    -   e.g. `fireworks={explosions:[{shape:'large_ball',colors:[16711680],has_trail:true}],flight_duration:2}`
-   On Firework Rocket, has an implicit default value of: `{explosions:[],flight_duration:1}`
-   Can be modified with the `set_fireworks` loot function

##### `minecraft:profile`

-   Controls the skin displayed on a Player Head
-   Copied to Player Head block when placed
-   Replaces `SkullOwner` tag
-   If only a `name` is specified, it will be resolved into the corresponding player ID and skin data
-   Unlike `SkullOwner` which only supported resolution by name, if only `id` is specified, the profile and skin will be resolved from this UUID
-   Format: object with fields
    -   `name`: string, player profile name (optional)
        -   Must be a valid player name (max 16 characters, no spaces, or special characters)
        -   As this could exist in previous data formats, but would not resolve to a skin, this is replaced by the `item_name` component which is persisted when placed and broken
    -   `id`: uuid, player profile id (optional)
    -   `properties`: list of properties (optional)
        -   `name`: string, property name (e.g. `textures`)
        -   `value`: string (base64 encoded texture data)
        -   `signature`: string (optional)
    -   e.g. `profile={name:'MHF_Sheep'}`
    -   Alternatively, can be defined as a simple player profile name string
        -   e.g. `profile='MHF_Sheep'`
-   Can be modified with the `fill_player_head` loot function

##### `minecraft:note_block_sound`

-   Controls the sound played by a Player Head when placed on a Note Block
-   Copied to Player Head block when placed
-   Replaces `BlockEntityTag.note_block_sound` tag
-   Format: sound event id
    -   e.g. `note_block_sound='minecraft:ambient.cave'`

##### `minecraft:base_color`

-   Stores the base color for a Shield
-   Replaces `BlockEntityTag.Base` tag
-   Format: one of
    -   `white` (was `0`)
    -   `orange` (was `1`)
    -   `magenta` (was `2`)
    -   `light_blue` (was `3`)
    -   `yellow` (was `4`)
    -   `lime` (was `5`)
    -   `pink` (was `6`)
    -   `gray` (was `7`)
    -   `light_gray` (was `8`)
    -   `cyan` (was `9`)
    -   `purple` (was `10`)
    -   `blue` (was `11`)
    -   `brown` (was `12`)
    -   `green` (was `13`)
    -   `red` (was `14`)
    -   `black` (was `15`)
    -   e.g. `base_color='magenta'`

##### `minecraft:banner_patterns`

-   Stores the additional patterns applied to a Banner or Shield
-   Copied to Banner block when placed
-   Replaces `BlockEntityTag.Patterns` tag
-   Format: list of banner patterns
    -   `pattern`: banner pattern registry id
        -   Replaces short banner pattern code in `Patterns[].Pattern`
    -   `color`: dye color name
        -   Replaces integer dye color id in `Patterns[].Color`
    -   e.g. `banner_patterns=[{pattern:'minecraft:stripe_top',color:'red'}]`
-   On Banners and Shields, has an implicit default value of: `[]`
-   Can be modified with the `set_banner_pattern` loot function

##### `minecraft:pot_decorations`

-   Stores the Sherds applied to each side of a Decorated Pot
-   Copied to Decorated Pot block when placed
-   Replaces `BlockEntityTag.sherds` tag of same format
-   Format: list of sherd item ids
    -   e.g. `['arms_up_pottery_sherd','angler_pottery_sherd','danger_pottery_sherd','shelter_pottery_sherd']`
-   On Decorated Pots, has an implicit default value of: `['minecraft:brick','minecraft:brick','minecraft:brick','minecraft:brick']`

##### `minecraft:container`

-   Holds the contents of container blocks (Chests, Shulker Boxes) in item form
-   Copied into container block when placed
-   Replaces `BlockEntityTag.Items` tag
-   Format: list of slots
    -   `slot`: integer \[0; 255\], representing a slot in the container
    -   `item`: item stack
    -   e.g. `container=[{slot:7,item:{id:'diamond_pickaxe',components:{'minecraft:unbreakable':{}}}}]`
-   On container blocks, has an implicit default value of: `[]`
-   Can be modified with the `modify_contents` and `set_contents` loot functions

##### `minecraft:bees`

-   Holds the bees inside a Beehive or Bee Nest
-   Copied to Beehive or Bee Nest block when placed
-   Replaces `BlockEntityTag.Bees` tag
-   Format: list of bees
    -   `entity_data`: map of string to string
        -   `id`: entity id
        -   The remainder tags merged into the Bee when spawned
    -   `ticks_in_hive`: integer
    -   `min_ticks_in_hive`: integer
    -   e.g: `bees=[{entity_data:{id='minecraft:bee'},ticks_in_hive:3,min_ticks_in_hive:10}]`
-   On Beehive and Bee Nest, has an implicit default value of: `[]`

##### `minecraft:lock`

-   Holds the lock state of a container-like block
    -   An item with a custom name of the same value must be used to open this container
-   Copied to container block when placed
-   Replaces `BlockEntityTag.Lock` tag
-   Format: string value, representing the key
    -   e.g: `lock='hunter2'`

##### `minecraft:container_loot`

-   Holds the unresolved loot table and seed of a container-like block
-   Copied to container block when placed
-   Replaces `BlockEntityTag.LootTable` and `BlockEntityTag.LootTableSeed` tags
-   Format: object with fields
    -   `loot_table`: loot table id
    -   `seed`: long, pseudorandom seed to resolve the loot table with (optional)
        -   If not specified, or `0`, the seed will be picked randomly when the loot table is evaluated
    -   e.g. `container_loot={loot_table:'minecraft:chests/buried_treasure',seed:123}`
-   Can be modified with the `set_loot_table` loot function

##### `minecraft:block_entity_data`

-   Stores unstructured NBT data to apply to a block entity when placing a block such as a Chest or Furnace
-   Replaces previous `BlockEntityTag` tag, with same behavior
-   Any block entity data moved into a dedicated item component is removed from this tag
-   For Command Blocks, Lecterns, Signs, and Spawners: this tag will not be copied unless the player is an operator
-   Format: object with fields
    -   Must contain an `id` field with the block entity type
    -   Any additional fields will be merged into the block entity when placed
    -   e.g. `block_entity_data={id:'minecraft:chest',Items:[{Slot:1,item:'minecraft:diamond'}]}`

##### `minecraft:block_state`

-   Holds block state properties to apply when placing a block
-   Replaces `BlockStateTag` tag
-   Format: map of property key to property value
    -   All property values, including integer and boolean types, must be represented as strings
    -   e.g: `block_state={eggs:'10'}`

### New Item Stack Components

These are new components that did not exist in the previous item tag, and support new features and use-cases.

##### `minecraft:enchantment_glint_override`

-   Overrides the enchantment glint effect on an item
-   Can be used in the same way that an invalid `Enchantments` tag would previously behave to add a glint
-   Format: boolean
    -   If `true`, an item without an enchantment glint will display a glint
    -   If `false`, an item with a glint will not display this glint (either from enchantments or intrinsic properties of the item)
    -   e.g: `enchantment_glint_override=true`

![A player is eating a Stick by using an attached food component.](https://launchercontent.mojang.com/v2/images/1.20.5tech3thumbnail.jpg)

##### `minecraft:food`

-   When present, this item will behave as if a food (can be eaten)
-   Format: object with fields
    -   `nutrition`: non-negative integer, number of food points to restore when eaten
    -   `saturation`: float, amount of saturation to restore when eaten
    -   `can_always_eat`: boolean (default: `false`)
        -   If `true`, this food can be eaten even if not hungry
    -   `eat_seconds`: float (default: `1.6`)
        -   The number of seconds that it takes to eat this food item
    -   `effects`: list of effects to apply when eaten (default: `[]`)
        -   `effect`: effect instance (same format as `custom_effects` in `minecraft:potion_contents` component)
        -   `probability`: float between 0 and 1, chance for the effect to be applied (default: `1`)
    -   e.g: `food={nutrition:4,saturation:0.1}`
-   On food items, has an implicit default value for that food type

##### `minecraft:max_stack_size`

-   Controls the maximum stacking size of this item
-   Values greater than 1 are mutually exclusive with the `max_damage` component
-   Format: integer between 1 and 99
    -   e.g. `max_stack_size=4`
-   Has an implicit default value according to the item type (usually `64`)

##### `minecraft:max_damage`

-   Controls the maximum amount of damage than an item can take
-   Mutually exclusive with the `max_stack_size` component greater than 1
-   Requires that the `damage` component is also present on the item
-   If not present, the item cannot be damaged
-   Format: positive integer
    -   e.g. `max_damage=123`
-   Has an implicit default value for damageable items

##### `minecraft:tool`

-   Controls the behavior of the item as a tool
-   Format: object with fields
    -   `rules`: list of rule entries to apply in order
        -   `blocks`: single block, list of blocks, or `#`\-prefixed block tag to match
        -   `speed` (optional): float, overrides the mining speed if present and matched
        -   `correct_for_drops` (optional): boolean, overrides whether this tool is considered 'correct' if present and matched
            -   `true` will cause the block to mine at its most efficient speed, and drop items if the targeted block requires that
    -   `default_mining_speed`: float, mining speed to use if no rules match and override mining speed (default: `1.0`)
    -   `damage_per_block`: non-negative int, amount of durability to remove each time a block is mined with this tool
    -   e.g. `tool={rules:[{blocks:"#mineable/pickaxe",speed:4.0,correct_for_drops:true}]}`
-   Vanilla tool items will have an implicit default value based on their tier and tool type

##### `minecraft:hide_tooltip`

-   If present, it will completely hide whole item tooltip (that includes item name)
-   Tooltip will still be visible and searchable in creative mode
-   Format: empty object

##### `minecraft:item_name`

-   When present, replaces default item name with contained chat component
-   Differences from `custom_name`:
    -   `item_name` can't be changed or removed in Anvil
    -   `item_name` is not styled with italics when displayed to player
    -   `item_name` does not show labels where applicable (for example: banner markers, names in item frames)
-   Can be modified with the `set_name` loot function

##### `minecraft:fire_resistant`

-   If present, this item will not burn in fire
-   Format: empty object
    -   e.g. `fire_resistant={}`
-   Has an implicit default value for fire-resistant items such as Netherite

##### `minecraft:rarity`

-   Controls the color of the item name
-   Format: enumerated value, one of:
    -   `common` (default): white name, or aqua when enchanted
    -   `uncommon`: yellow name, or aqua when enchanted
    -   `rare`: aqua name, or light purple when enchanted
    -   `epic`: light purple name
    -   e.g. `rarity=rare`
-   Special items such as Golden Apples have an implicit default value

##### `minecraft:ominous_bottle_amplifier`

-   Controls the amplifier amount for an Ominous Bottle's Bad Omen effect
-   Format: integer between 0 and 4
    -   e.g. `ominous_bottle_amplifier=3`
-   Can be modified with the `set_ominous_bottle_amplifier` loot function

#### Saved Item Stack Format

-   Along with format changes due to components, the structures of item stacks on disk and in data packs have been updated for consistency
-   Previous `id` (string) and `Count` (byte) fields have been replaced with `id` (namespaced string) and `count` (integer) fields
    -   This format is additionally applied to the `icon` field in advancements, items in chat component hover events, and the `result` field in smelting recipes (`result` and `count` are no longer inlined)
-   The `count` field is optional (defaults to `1` if not specified)
    -   The field will however always be stored by the game
-   The `tag` field has been removed, and any remaining contents will end up in the `minecraft:custom_data` component when upgrading
-   A new `components` field stores all components attached to an item
    -   Format: map of component id to component value (varies by component id)
        -   e.g. `{..., components: {'minecraft:damage': 12}}`
        -   Components with a `!` prefix (e.g. `"!minecraft:damage": {}`) will cause this component to be removed
    -   Components equal to their default value on the target item will not be stored
-   The item stack format no longer represents empty stacks (`air` item, or `count` 0)
    -   Instead, in places that support it, the field should be omitted
    -   In some cases, such as lists of stacks (e.g. `HandItems` in living entities), an empty map (`{}`) is used to represent empty stacks

### Entity & Block Entity Data Formats

-   Non-default components on item stacks are now stored when a block entity is placed from that item stack
-   The storage format of block positions in entities and block entities has been updated
-   Added `body_armor_item` and `body_armor_drop_chance` to all entities that currently have `HandItems` and `ArmorItems`, and handle the same way as `HandItems` and `ArmorItems`
-   Handling of Horses `ArmorItem`, Llamas `DecorItem`, and Wolf's `armor` has been changed to use `body_armor_item` and `body_armor_drop_chance` instead
-   Villager Trades can be configured to accept only undamaged items by selecting for `'minecraft:damage': 0`
    -   By default, if no components are specified, any item will be accepted (similar to `components` field in item predicates)
-   Potion effects stored in items or entities will no longer encode their default values
    -   `amplifier`: `0`
    -   `duration`: `0`
    -   `ambient`: `false`
    -   `show_particles`: `true`
-   `FactorCalculationData` has been removed from mob effect instance tags
-   Tipped Arrows no longer store their applied potion effects
    -   This is instead fetched from their held `item`
-   Area Effect Clouds now store potions in the same format as the `minecraft:potion_contents` component in a `potion_contents` field:
    -   `Potion` -> `potion_contents.potion`
    -   `Color` -> `potion_contents.custom_color`
    -   `effects` -> `potion_contents.custom_effects`
-   Banners now store applied patterns in the same format as the `minecraft:banner_patterns` component in a `patterns` field:
    -   `Patterns[].Pattern` (string short id) -> `patterns[].pattern` (string pattern registry id)
    -   `Patterns[].Color` (integer dye id) -> `patterns[].color` (string dye name)
-   Beehive format has also been updated:
    -   `Bees[].EntityData` -> `bees[].entity_data`
    -   `Bees[].TicksInHive` -> `bees[].ticks_in_hive`
    -   `Bees[].MinOccupationTicks` -> `bees[].min_ticks_in_hive`
    -   `FlowerPos` -> `flower_pos`
-   The `SkullOwner` and `ExtraType` fields in Player Head blocks have been replaced with a `profile` field, with the same format as the item component
-   Player Head blocks now store a `custom_name` tag, which will be copied to and from the item form when broken or placed
-   Added optional `equipment` field to the spawn data present in the `SpawnPotentials` of Monster Spawners and `spawn_potentials` of Trial Spawner configs
    -   If present, rolled items from the specified loot table will be equipped to the mob that spawns
    -   Format: object with fields
        -   `loot_table` - A loot table used to generate the equipment
        -   `slot_drop_chances` - An optional map of equipment slot to specified drop chance
            -   Can also be a single value instead of a list to apply to all slots: e.g. `slot_drop_chances: 0.0f` will apply a chance of 0% to all slots
    -   e.g. `equipment: {loot_table: "minecraft:equipment/trial_chamber", slot_drop_chances: {"head": 0.0f, "chest": 0.25f, "legs": 1.0f, "feet": 0.25f}}`

#### Components on Block Entities

Non-default components on item stacks containing block items are now stored on block entities when placed.

-   Component removals from defaults are currently not preserved
-   Placing and breaking non-block entity blocks remains unchanged - nothing is preserved
-   Does not automatically cause preserved components to be restored on drops - this requires addition of `copy_components` function to loot table
-   Components are stored in field called `components`
    -   Some components (like `custom_name`) are still handled by legacy serialization, which means they might not be present in there
    -   Contains map of component id to component value

#### Block Positions

-   All block positions are now stored as an array of 3 integers instead of a map of `X`, `Y`, and `Z` for consistency
-   `FlowerPos` and `HivePos` in Bees have been renamed to `flower_pos` and `hive_pos`
-   `FlowerPos` in Beehives has been renamed to `flower_pos`
-   `BeamTarget` in End Crystals has been renamed to `beam_target`
-   `Leash` in all leashable entities has been renamed to `leash`
-   `PatrolTarget` in patrolling mobs has been renamed to `patrol_target`
-   `ExitPortal` in End Gateways has been renamed to `exit_portal`
-   `WanderTarget` in Wandering Traders has been renamed to `wander_target`

#### Vault Block Entity

-   Added Vault block (experimental) with a variety of NBT elements which can be configured for custom content:
-   Fields:
    -   `config`
        -   `loot_table` - The loot table that will be ejected upon being unlocked
            -   Default value: `"minecraft:chests/trial_chambers/reward"`
        -   `activation_range` - The range any player who hasn't unlocked the Vault must be within for it to open its keyhole
            -   Default value: `4`
        -   `deactivation_range` - The range all viable players must be outside of for the Vault to close its keyhole
            -   Default value: `4.5`
        -   `key_item` - An Item Stack that is required to unlock the Vault
            -   The player must be holding an item with the exact components and count
            -   If the field is not present, the Vault cannot be unlocked
        -   `override_loot_table_to_display` - An optional loot table which will be used for displaying items inside the cage instead of results from the config's `loot_table`
            -   Default value: No value
    -   `shared_data`
        -   `connected_particles_range` - The range players who have not unlocked the Vault must be within before particles will flow from them
            -   Default value: `4.5`

### Commands

-   Updated syntax of items and item predicates in commands
-   Added slot names for ranges, like `container.*`
-   `playsound` command can now be used without specifying the player (assuming `@s`) and without specifying the mixer (assuming `master`)
-   Command arguments that previously accepted namespaced ids of loot tables, modifiers and predicates can now also accept inline definitions
-   Added `execute if|unless items` to check and count items
-   Potion effect amplifiers are now restricted between 0 and 255
    -   The former behavior of effects such as Jump Boost, Levitation, and Mining Fatigue over 127 has been replaced with new attributes
-   Added the `transfer` command
-   The maximum length of a command in a function (including macro expansions) can no longer exceed 2,000,000 characters

#### Item Syntax

-   Commands such as `/give`, `/item`, `/loot` use an updated item syntax
-   Components can now be specified after the item name in square brackets
    -   Components are assigned with an `=` (e.g. `wooden_pickaxe[damage=23]`)
    -   Components are comma-separated (e.g. `netherite_hoe[damage=5,repair_cost=2]`)
-   Component types will be autocompleted, but possible values of them will not
-   Values will however be validated, and the command will fail to parse if the component is improperly specified
    -   e.g. `/give @s wooden_pickaxe[damage=-34]` is not valid
-   The previous NBT syntax (`{...}`) has been removed, and replaced with `custom_data` assignment
    -   e.g. `/give @s stick{foo:'bar'}` becomes `/give @s stick[custom_data={foo:'bar'}]`
-   Modifier operations in the `/attribute` command have been renamed:
    -   `add` -> `add_value`
    -   `multiply_base` -> `add_multiplied_base`
    -   `multiply` -> `add_multiplied_total`

#### Added `execute if|unless items`

-   `execute if|unless items <source> <slots> <item_predicate>` command can be used to count items
    -   `<source>` is the same as one used in `item` command, i.e.
        -   `block <x> <y> <z>`
        -   `entity <target>` (selector can return multiple entities)
    -   `<slots>` can accept single slot (like `container.0`) or a range (like `container.*`)
    -   `<item_predicate>` is the same as item predicate in `clear` command
-   If used alone, it will return the total number of items in stacks that match predicates

#### Item Predicate Argument

The item predicate syntax (used in `execute if|unless items` and `clear` commands) has been significantly expanded.

-   The general syntax is: `<type> [comma-separated list of <test>]`
-   `<type>` can be one of:
    -   item id
    -   item tag id prefixed with `#`
    -   `*` to match any item
-   `<test>` can have one of 3 forms:
    -   `<component_id>=<value>` - match exact value of component
        -   `<value>` is a representation of component value in SNBT format (same as in `item give` argument)
        -   Every specified component must be present on the target item, and have an exactly equal parsed value
        -   Components with defaults (e.g. `damage=0` by default) will be assumed to exist on the target item if not specified
            -   As such, `/clear @s diamond_pickaxe[damage=0]` will match only undamaged Diamond Pickaxes
            -   On the other hand, `/clear @s diamond_pickaxe` will match any Diamond Pickaxe, irrespective of damage
        -   Exact matching of component values applies even for the `minecraft:custom_data` component
    -   `<component_id>` - check if component exists
    -   `<predicate_id>~<value>` - check item sub-predicate
        -   `<value>` is a representation of item sub-predicate in SNBT format (but otherwise the same as those used for advancement and loot table JSON files)
        -   Example: `*[damage~{durability:{min:3}}]` will match any stack with at least 3 uses left
-   The special name `minecraft:count` can be used for matching the stack size
    -   `count=<positive int>` will pass only when the stack size equals the given value
    -   `count~<int range>` will pass when the stack size is in the specified range
        -   Example: `*[count~{max:2}]` will match any stack with count <= 2
    -   `count` will always pass
-   Any `<test>` entry can be negated by prefixing with `!`
    -   Example: `*[!count=1]` will match any stack that has count other than 1
-   `<test>` elements can be also joined with `|` to check multiple alternatives
    -   Example: `*[!damage|damage=0]` will look for items without damage component or with `0` damage
-   The syntax for NBT partial matching with custom data (`{}`) has been replaced by the `custom_data` predicate
    -   So `stick{a:2}` becomes `stick[custom_data~{a:2}]`
    -   This predicate uses the pre-existing NBT partial match behavior
        -   This requires that all tags specified in the predicate are present on the target item, but additional ones may be ignored
        -   Lists in the target must contain all items specified in the predicate, but additional may be present and order is ignored

#### Slot names

-   Slot names (used in `item` commands and `slots` entity predicates) now include slot ranges
-   Unless specified, existing commands can still only work on single slots
-   Added new slot ranges:
    -   `container.*` - contains `container.0` to `container.53`
    -   `hotbar.*` - contains `hotbar.0` to `hotbar.8`
    -   `inventory.*` - contains `inventory.0` to `inventory.26`
    -   `enderchest.*` - contains `enderchest.0` to `enderchest.26`
    -   `villager.*` - contains `villager.0` to `villager.7`
    -   `horse.*` - contains `horse.0` to `horse.14`
    -   `weapon.*` - contains `weapon.mainhand` and `weapon.offhand`
    -   `armor.*` - contains `armor.head`, `armor.chest`, `armor.legs`, `armor.feet`, `armor.body`
-   Added new slot names:
    -   `player.cursor` - item held by player on screen
        -   Note: this information cannot be read in creative mode
    -   `player.crafting.0` - `player.crafting.3`, `player.crafting.*` - player's crafting slots
        -   Note: this includes only player's inventory crafting slots. Crafting table (or any other slots on other screens) are not included
    -   `contents` - for single-slot entities like item frames, item displays, or dropped item entities
-   Replaced `horse.armor` slot name with `armor.body`, which is applicable to all mobs

#### Inline loot values

Arguments in the following commands that previously accepted namespaced ids of loot tables, modifiers and predicates can now also accept inline definitions:

-   `loot`
-   `item`
-   `execute if predicate`

Values have the same structure as matching JSON files, though they are encoded as SNBT. Example:

`execute if predicate {condition:weather_check, raining:true}`

#### `transfer` Command

New command that triggers a transfer of a player to another server. Only exists on dedicated servers.

Syntax:

`transfer <hostname> [<port>] [<players>]`

Parameters:

-   `hostname`: String describing the hostname of the server to connect to
-   `port`: Integer denoting the port number of the server to connect to - if omitted, 25565 is used
-   `players`: The players to transfer - if omitted, `@s` is used

### Predicate Formats in Loot Tables & Advancements

-   Block predicate format has been updated:
    -   `tag` field has been removed
    -   `blocks` field now supports a single entry, hash-prefixed block tag, or list of blocks
-   Fluid predicate format has been updated:
    -   `tag` field has been removed
    -   `fluid` -> `fluids`, and supports a single entry, hash-prefixed fluid tag, or list of fluids
-   Location predicate format has been updated:
    -   `biome` -> `biomes`, and supports a single entry, hash-prefixed biome tag, or list of biomes
    -   `structure` -> `structures`, and supports a single entry, hash-prefixed structure tag, or list of structures
-   Major changes to Entity and Item predicates

#### Entity Predicates

-   Entity predicate format has been updated:
    -   `type` field now supports a single entry, hash-prefixed entity type tag, or list of entity types
    -   Added new entity predicate field `slots`, for matching item slots
-   The `equipment` field format has been updated
    -   Added a new `body` field to match the item in the body armor slot of an entity
-   Removed `any` entity type-specific predicate (which had no effect)

##### `slots` entity predicate field

-   The new entity field `slots` allows checking a single or multiple slots on any entity
-   The field contains a map of slot names (same as those used in `item` commands) to item predicates
-   For slot ranges, only one slot needs to match for the whole entry to pass

Example:

    {
        "condition": "minecraft:entity_properties",
        "entity": "this",
        "predicate": {
            "slots": {
                "container.*": {
                    "items": "dirt"
                }
            }
        }
    }
    

##### `wolf` type-specific entity predicate

-   New `wolf` sub-predicate has been added to match Wolf variants
-   Fields:
    -   `variant` - Wolf variant to match (single entry, list of entries or tag)

##### `raider` type-specific entity predicate

-   New `raider` sub-predicate has been added to match raiders
-   Fields:
    -   `has_raid` - Match whether the raider is in an active raid
    -   `is_captain` - Match whether the raider is a captain

##### `cat`, `frog`, `painting` type-specific entity predicate

-   The `variant` field now accepts single entries, list of entries or tags

#### Item Predicates

Item predicate format has been updated:

-   `tag` field has been removed
-   `items` field now supports a single entry, hash-prefixed item tag, or list of items
-   A new optional `components` field matches exact components
    -   All specified components must be present and exactly equal on the target item, but additional components may be ignored
    -   Components with defaults will be assumed to exist on the target item if not specified
    -   Format: map of component id to component value (varies by component id)
        -   e.g. `"components": { "minecraft:damage": 0 }` will match only undamaged items
-   Component-specific item predicate properties have been moved to a separate field called `predicates`

#### Item Sub-predicates

-   Some fields from item predicate have been moved to a map in an optional field `predicates`
-   The new field is similar to the `components` field on item stacks
-   This was done to simplify addition for future predicates and to allow sub-predicates to more closely resemble names of components they match
-   The following fields have been moved:
    -   `enchantments` - field moved to sub-predicate `minecraft:enchantments`
    -   `stored_enchantments` - field moved to sub-predicate `minecraft:stored_enchantments`
    -   `potion` - field moved to sub-predicate `minecraft:potion_contents`
        -   Now supports a single potion entry, list of potions, or hash-prefixed potion tag
    -   `custom_data` - field moved to sub-predicate `minecraft:custom_data`
-   `durability` field has been expanded to `minecraft:damage` predicate:
    -   This check now works for any item that has `minecraft:damage` component
    -   An item that does not have a `minecraft:damage` component can never match
    -   To check for unbreakable items, query value of `minecraft:unbreakable` component
    -   Fields:
        -   `damage` - optional bounds for value of `minecraft:damage` component
        -   `durability` - optional bounds for durability (max damage minus value of `minecraft:damage`)
-   Predicates `minecraft:enchantments`, `minecraft:stored_enchantments`, `minecraft:potion_contents` and `minecraft:damage` require matching component to exist on item
    -   That means that, for example, matching for empty enchantment list will not pass on items without `minecraft:damage` component
    -   Note: some components, like `minecraft:enchantments` have default values, so they will always match
-   These sub-predicates can also be referenced in commands such as `/clear` and `/execute if|unless items`
-   The `minecraft:custom_data` predicate now accepts both SNBT data written as a string (existing format) and unflattened tags
    -   That means that `*[custom_data~{a:1}]` and `*[custom_data~"{a:1}"]` are equivalent
    -   Flattened string format has been kept since NBT type information can't be expressed in JSON
-   Many new sub-predicates have been introduced

##### Example:

Before:

    "item": {
      "enchantments": [
        {
          "enchantment": "minecraft:silk_touch",
          "levels": {
            "min": 1
          }
        }
      ]
    }
    

After:

    "item": {
      "predicates": {
        "minecraft:enchantments": [
            {
              "enchantment": "minecraft:silk_touch",
              "levels": {
                "min": 1
              }
            }
          ]
      }
    }
    

##### General Rules of Component Predicates

-   Unless otherwise specified, a field in predicate with the same name as a field in component that matches (i.e. has the same name as predicate) will match that field value
-   Those fields will usually have the same type as in the components, but will be optional
-   Exceptions:
    -   List fields will be replaced with collection matchers (see below)
    -   Integer and float fields will be replaced with ranges
    -   Registry ids will be replaced with a type that accepts id, list of ids or a tag

##### Collection Matcher

-   A collection matcher is a shared part of predicates that is used for matching collections
-   Every instance of this matcher will have the same fields with the same functionality, with the only difference being the type of matched element
-   Fields:
    -   `size` - integer range to match against collection size
    -   `contains` - a list of element predicates
        -   All conditions must match for the predicate to pass
        -   Not all elements in the tested container have to be matched
        -   Elements can be in any order
        -   A single element can be matched by multiple predicates
        -   Examples (when matching item stacks):
            -   `{contents:[{item:diamond}]}` - will match when there is at least one diamond item
            -   `{contents:[{item:diamond}, {item:dirt}]}` - will match when there is at least one diamond item and at least one dirt item
    -   `count` - a list of matchers on element counts
        -   Entry fields:
            -   `test` - element matcher
            -   `count` - optional integer range to check against number of elements passing `test`
        -   Examples (when matching item stacks):
            -   `{count:[{count:3,test:{items:diamond}}]}}` will match only when there are exactly 3 stacks of diamonds (no matter the stack size)

###### `container`

-   Matcher for `container` component (like Shulker Box)
-   Fields:
    -   `items` - optional collection matcher
        -   Note: empty items are ignored. That means `container~{items:{size:3}}` will only pass if there are exactly 3 non-empty stacks in container

###### `bundle_contents`

-   Matcher for `bundle_contents` component
-   Fields:
    -   `items` - optional collection matcher

###### `firework_explosion`

-   Matcher for `firework_explosion` component
-   Fields
    -   `shape` - optional matcher for shape, same values as `shape` field in `minecraft:firework_explosion` component
    -   `has_trail` - optional boolean
    -   `has_twinkle` - optional boolean

###### `fireworks`

-   Matcher for `fireworks` component
-   Fields:
    -   `explosions` - optional collection matcher for `firework_explosion` predicates
    -   `flight_duration` - optional integer range check for flight duration
-   Example: `minecraft:fireworks~{explosions:{contains:[{shape:small_ball}]}}]` - matches if firework has at least one explosion with `small_ball` shape

###### `writable_book_content`

-   Matcher for `writable_book_content` component
-   Fields
    -   `pages` - optional collection matcher for strings (matching only the unfiltered/raw contents of each page)

###### `written_book_content`

-   Matcher for `written_book_content` component
-   Fields
    -   `pages` - optional collection matcher for chat components (matching only the unfiltered/raw contents of each page)
    -   `author` - optional string value
    -   `title` - optional string value (matching only value)
    -   `generation` - optional integer range check for generation
    -   `resolved` - optional boolean

###### `attribute_modifiers`

-   Matcher for `attribute_modifiers` component
-   Fields:
    -   `modifiers` - optional collection matcher for following entries with following fields:
        -   `attribute` - optional id, list of ids or tag for attribute to be matched
        -   `id` - optional UUID
        -   `name` - optional string
        -   `amount` - optional double range check
        -   `operation` - optional operation type (same values as `operation` field from `attribute_modifiers` component)
        -   `slot` - optional applicable slot type (same values as `slot` field from `attribute_modifiers` component)

###### `trim`

-   Matcher for `trim` component
-   Fields:
    -   `material` - optional id, list of ids or tag for material to be matched
    -   `pattern` - optional id, list of ids or tag for pattern to be matched

### Advancements

#### Changes to `item_used_on_block`

-   This criteria trigger is now only triggered when a specific item is used successfully on a block (as opposed to any interaction with a block)
    -   For example, when using an Axe to scrape Oxidized Copper blocks would trigger, while using an Axe on a Crafting Table would not

#### Added `default_block_use`

-   Triggers due to the default interaction of a block by a player, such as opening a door

#### Added `any_block_use`

-   Triggers due to any type of interaction with a block by a player, such as using an item on the block or its default usage

#### Added `crafter_recipe_crafted`

-   Triggered when a Crafter ejects a successfully crafted item into the world
-   Fields (same format as `recipe_crafted`):
    -   `player` - an entity predicate matching nearby players in an 8 block radius
    -   `recipe_id` - the ID of the recipe being crafted
    -   `ingredients` - a list of item predicates matching the ingredients that form the recipe being crafted

#### Added `fall_after_explosion`

-   Triggered when a player begins falling after being knocked upwards by an explosion or wind burst
-   Fields:
    -   `player` - entity predicate matching the player who is falling
    -   `start_position` - location predicate matching the position the player was at when they were hit by the explosion or burst
    -   `distance` - distance predicate matching how far the player must be from `start_position` to cause the trigger to activate
    -   `cause` - entity predicate matching the entity that caused the explosion or burst to happen

### Loot Tables

-   Added `gameplay/panda_sneeze` loot table for drops when Pandas sneeze
-   Loot table entry `loot_table` (which returns all items from provided nested loot table) now has the following syntax:
    -   `value` - can be either:
        -   namespaced id - reference to another named loot table
        -   full loot table (same format as in standalone file)
-   Added new loot table type `minecraft:equipment` used for equipping items onto mobs

#### `storage` Number Provider

-   This number provider can access numeric values from command storage directly
-   If selected storage does not exist or tag selected by path is not numeric or does not exist, the provider returns 0
-   Fields:
    -   `storage` - namespaced id of command storage
    -   `path` - NBT path to field

#### Modified Loot Functions

-   Nested lists are no longer supported in function lists

##### `set_contents`

-   The `type` field has been removed
-   Added a new mandatory field `component`:
    -   Describes the target item stack component to be filled with items
    -   Any existing contents will be replaced
    -   Allowed values: `container`, `bundle_contents`, `charged_projectiles`
    -   `bundle_contents` and `charged_projectiles` will ignore empty stacks

##### `set_custom_data` (renamed from `set_nbt`)

-   Now applies to the `custom_data` component of the target item
-   The `tag` field now accepts both SNBT data written as a string (existing format) and unflattened tags

##### `copy_custom_data` (renamed from `copy_nbt`)

-   Now applies to the `custom_data` component of the target item

##### `set_name`

-   Added optional field `target` to specify which name should be set
-   Values:
    -   `custom_name` - sets `custom_name` component (default)
    -   `item_name` - sets `item_name` component

##### `set_attributes`

-   The modifier `slot` field now supports `any`, `armor`, `hand`, and `body` values
-   The modifier `operation` values have been renamed:
    -   `addition` -> `add_value`
    -   `multiply_base` -> `add_multiplied_base`
    -   `multiply_total` -> `add_multiplied_total`
-   Added `replace` field to the `set_attributes` loot function (default: `true`)
    -   When `false`, attributes will be appended

##### `set_lore`

-   The `replace` field has been removed
-   Now has `mode` like `set_fireworks` and `set_written_book_pages`

#### New Loot Functions

##### `set_components`

-   Adds or replaces provided components on the target item
-   Fields:
    -   `conditions` - optional list of conditions to filter this function
    -   `components` - map of component id to component value (format varied by id)
        -   Components with a `!` prefix (e.g. `"!minecraft:damage": {}`) will cause this component to be removed

##### `copy_components`

-   Copies components from a specified source onto an item
-   This is now used in the Vanilla pack in place of the `copy_name` and `copy_nbt` functions
-   Fields:
    -   `conditions` - optional list of conditions to filter this function
    -   `source` - source type to pull from
        -   Currently, can only and must be `"block_entity"`
    -   `include` - optional list of data components to be copied from source
        -   if omitted, all components present are included
    -   `exclude` - optional list of data components to be excluded from copying
        -   if omitted, defaults to empty
    -   Only components that are included (explicitly or implicitly) but not excluded will be copied

##### `modify_contents`

-   Applies a modifier function to every item inside of a component
-   If the component does not exist, it will not be added
-   Fields:
    -   `conditions` - optional list of conditions to filter this function
    -   `component` - target component
        -   Allowed values: `container`, `bundle_contents`, `charged_projectiles`
    -   `modifier` - function or list of functions to be applied to every item inside container

##### `set_item`

-   Replaces item type of item stack without changing its count and components
-   Fields:
    -   `conditions` - optional list of conditions to filter this function
    -   `item` - new item type

##### `filtered`

-   Applies a sub-function only to items that match item predicate
-   Fields:
    -   `conditions` - optional list of conditions to filter this function
    -   `item_filter` - item predicate used to match items
    -   `modifier` - functions to apply to matching items

##### `set_custom_model_data`

-   Sets the `custom_model_data` component on the target item according to a number provider
-   Fields:
    -   `conditions` - optional list of conditions to filter this function
    -   `value` - integer number provider

##### `set_ominous_bottle_amplifier`

-   Sets the `ominous_bottle_amplifier` component on the target item according to a number provider
-   Fields:
    -   `conditions` - optional list of conditions to filter this function
    -   `amplifier` - a number provider used to generate the `ominous_bottle_amplifier` component

##### `set_fireworks`

-   Sets the details of the `minecraft:fireworks` component
-   Fields:
    -   `conditions`: optional list of conditions:
        -   Conditions to check before applying the function
    -   `flight_duration`: optional integer, 0-255:
        -   The flight duration measured in number of gunpowder
        -   If omitted, the flight duration of the item is left untouched - or set to 0 if the component did not exist before
    -   `explosions`: optional object with fields:
        -   `values`: List of `firework_explosion` data - same format as the `explosion` field in the `minecraft:fireworks` component:
            -   The explosion data to set
        -   `mode`: enumerated value deciding function for explosions:
            -   `replace_all`: fully replace the explosions list
            -   `replace_section`: replace a section of the explosions. Arguments:
                -   `offset`: optional non-negative integer:
                    -   Start of replaced range
                    -   If omitted, `0` is used
                -   `size`: optional non-negative integer:
                    -   Size of range to be replaced in explosions
                    -   If omitted, the size of `explosions` field is used
            -   `insert`: insert explosions, moving existing explosions to after the inserted section. Arguments:
                -   `offset`: optional non-negative integer:
                    -   Index before which explosions will be inserted
                    -   If omitted, `0` (before first explosion) is used
            -   `append`: append explosions at the end of the list

##### `set_firework_explosion`

-   Sets the details of the `minecraft:firework_explosion` component
-   Fields:
    -   `conditions`: optional list of conditions:
        -   Conditions to check before applying the function
    -   `shape`: optional Explosion Shape:
        -   The explosion shape to set
        -   If omitted, the original shape is kept (or `small_ball` is used if there was no component)
    -   `colors`: optional integer array, RGB values:
        -   List of initial particle colors to replace the ones on the existing explosion with
        -   If omitted, the original colors are kept (or `[]` is used if there was no component)
    -   `fade_colors`: optional integer array, RGB values:
        -   List of fade-to particle colors to replace the ones on the existing explosion with
        -   If omitted, the original colors are kept (or `[]` is used if there was no component)
    -   `trail`: optional boolean:
        -   Set whether the explosion should have a trail or not
        -   If omitted, the original `has_trail` value is kept (or `false` is used if there was no component)
    -   `twinkle`: optional boolean:
        -   Set whether the explosion should have a twinkle or not
        -   If omitted, the original `has_twinkle` value is kept (or `false` is used if there was no component)

##### `set_book_cover`

-   Sets the cover details of the `minecraft:written_book_content` component
-   If present, any pages in the book are left untouched
-   Fields:
    -   `conditions`: optional list of conditions:
        -   Conditions to check before applying the function
    -   `title`: optional Filterable text (same format as `title` on the `minecraft:written_book_content` component):
        -   The title to set
        -   If omitted, the original title is kept (or an empty string is used if there was no component)
    -   `author`: optional string:
        -   The author to set
        -   If omitted, the original author is kept (or an empty string is used if there was no component)
    -   `generation`: optional integer \[0; 3\]:
        -   The generation value to set
        -   If omitted, the original generation is kept (or `0` is used if there was no component)

##### `set_writable_book_pages`

-   Manipulates the pages of the `minecraft:writable_book_content` component
-   Fields:
    -   `conditions`: list of conditions (default: `[]`):
        -   Conditions to check before applying the function
    -   `pages`: list of Filterable strings (same format as `pages` on the `minecraft:writable_book_content` component):
        -   The pages to apply
    -   `mode`: enumerated value deciding function:
        -   `replace_all`: fully replace the book contents
        -   `replace_section`: replace a section of the book. Arguments:
            -   `offset`: optional non-negative integer:
                -   Start of replaced range
                -   If omitted, `0` is used
            -   `size`: optional non-negative integer:
                -   Size of range to be replaced in book
                -   If omitted, the size of `pages` field is used
        -   `insert`: insert pages, moving existing pages to after the inserted section. Arguments:
            -   `offset`: optional non-negative integer:
                -   Index before which pages will be inserted
                -   If omitted, `0` (before first page) is used
        -   `append`: append pages at the end of the book

##### `set_written_book_pages`

-   Manipulates the pages of the `minecraft:written_book_content` component
-   Same format as `set_writable_book_content` but the `pages` field contains filterable Chat Components instead of Strings
    -   Unlike the `written_book_content` component, `pages` stores a list of JSON objects instead of JSON in string form
-   Any cover data is left untouched, and the page content components are set to resolve next time a player opens the book

##### `toggle_tooltips`

-   This function can be used to modify item component tooltip visibility
-   It works by setting fields like `show_in_tooltip` without changing other values
-   Format:
    -   `toggles` - a map of supported item component type to boolean value
-   Supported components: `trim`, `dyed_color`, `enchantments`, `stored_enchantments`, `unbreakable`, `can_break`, `can_place_on`, `attribute_modifiers`
-   Example:
    -   `{function:"toggle_tooltips","toggles":{"enchantments":false}}` will hide enchantments tooltip

### Recipes

-   Recipe types `crafting_shaped`, `crafting_shapeless`, `stonecutting` and `smithing_transform` now accept `components` for the `result` item stack
-   The `result` field for recipe types `smelting`, `blasting`, `smoking` and `campfire_cooking` is now an item stack format without a count, which means you'll need to specify an object with an `id` field
    -   This `result` now also accepts `components` data

![A tiny Kai, roughly 2 pixels tall, is standing next to a Birch Button and staring up towards a normal (but relatively giant) Milk Bucket item.](https://launchercontent.mojang.com/v2/images/1.20.5tech5thumbnail.jpg)

### Attributes

-   Added `generic.scale` attribute that can be used to rescale any living entity (default: `1.0`)
    -   Certain entities have special restrictions due to technical limitations:
        -   Shulkers can only be scaled up to 3x their normal size
        -   The Ender Dragon cannot be scaled
-   Added `player.block_interaction_range` (default: `4.5`) and `player.entity_interaction_range` (default: `3.0`) attributes that control player reach distance
-   Added `generic.step_height` attribute that defines the maximum number of blocks that an entity can step up without jumping (default: `0.6`)
-   Added `generic.gravity` attribute that controls blocks/tick^2 acceleration downward (default: `-0.08`)
-   Added `generic.safe_fall_distance` attribute to control the fall distance after which the entity will take fall damage (default: `3.0`)
-   Added `generic.fall_damage_multiplier` attribute to multiply overall applied fall damage (default: `1.0`)
-   Renamed `horse.jump_strength` to `generic.jump_strength`, and now applies to all entities
    -   This controls the base impulse from a jump (before jump boost or modifier on block)
-   Added `player.block_break_speed` attribute that acts as a multiplier over block breaking speed for players (default: \`1.0)

![A tiny Camel is looking at a very large Bee that flies towards the camera. In the background a giant Chicken is falling right above a regularly-sized Sheep.](https://launchercontent.mojang.com/v2/images/1.20.5tech2thumbnail.jpg)

### Particles

Added the following particle types:

-   `vault_connection`
-   `infested`
-   `item_cobweb`
-   `small_gust`
-   `raid_omen`
-   `trial_omen`
-   `trial_spawner_detection_ominous`
-   `ominous_spawning`

### Particle Representation

-   Particle options in commands and in fields like `Particles` in Area Effect clouds now use the same representation as worldgen files (like existing biomes' ambient particle settings)
-   For example, command `/particle minecraft:dust 1.0 0.0 0.0 2.0 ...` becomes `/particle minecraft:dust{color:[1.0, 0.0, 0.0], scale:2.0} ...`
-   The syntax for particles without extra options (like `minecraft:villager`) remains unchanged
-   Changes to block particles (`minecraft:block`, `minecraft:block_marker`, `minecraft:falling_dust`, `minecraft:dust_pillar`) options:
    -   Field `value` has been renamed to `block_state`
    -   Field `block_state` now also accepts plain block name to represent default block state
    -   Example transformations:
        -   `minecraft:block minecraft:redstone_lamp[lit=true]` -> `minecraft:block{block_state: {Name: "minecraft:redstone_lamp", Properties: {lit: "true"}}}`
        -   `minecraft:block minecraft:diamond_block` -> `minecraft:block{block_state: "minecraft:diamond_block"}`
-   Changes to `minecraft:item` options:
    -   Field `value` has been renamed to `item`
    -   Field `item` now also accepts plain item name to represent item stack with default components
    -   `count` field is now ignored
    -   Example transformations:
        -   `minecraft:item minecraft:dirt` -> `minecraft:item{item: {id: "minecraft:dirt"}}`
        -   `minecraft:item minecraft:dirt` -> `minecraft:item{item: "minecraft:dirt"}`
-   Changes to `dust_color_transition` options:
    -   The `fromColor` field has been renamed to `from_color`
    -   The `toColor` field has been renamed to `to_color`
    -   Example transformation: `dust_color_transition 1.0 0.0 0.0 0.5 0.0 1.0 0.5` -> `dust_color_transition{from_color: [1.0f, 0.0f, 0.0f], scale: 0.5f, to_color: [0.0f, 1.0f, 0.5f]}`
-   Added `entity_effect` options:
    -   Now accepts options to control the color of the particle
    -   Fields:
        -   `color`: packed integer ARGB color, or list of floats (0.0 to 1.0) representing RGBA color

### Enchantments

-   The `minecraft:sweeping` enchantment has been renamed to `minecraft:sweeping_edge`
-   Projectile weapon Enchantments like `infinity`, `multishot` and `piercing` now work on both Crossbows and Bows, if placed onto the alternative weapon using data manipulation or a change to the `enchantable/*` tags)

### Damage Types

-   Llamas now use a new damage type `spit` instead of `mob_projectile`

### Tags

#### Block Tags

-   Added `minecraft:does_not_block_hoppers` for blocks that will never disable a Hopper when placed above one
-   Added `minecraft:blocks_wind_charge_explosions` for blocks not impacted by the explosion when hit by Wind Charge
-   Added `minecraft:incorrect_for_wooden_tool`, `minecraft:incorrect_for_gold_tool`, `minecraft:incorrect_for_stone_tool`, `minecraft:incorrect_for_iron_tool`, `minecraft:incorrect_for_diamond_tool`, `minecraft:incorrect_for_netherite_tool`
    -   These tags combine the existing `needs_diamond_tool`, `needs_iron_tool`, and `needs_stone_tool` tags for each specific tool tier

#### Item Tags

New item tags controlling what enchantments can be added to what gear:

-   `minecraft:enchantable/foot_armor`
-   `minecraft:enchantable/leg_armor`
-   `minecraft:enchantable/chest_armor`
-   `minecraft:enchantable/head_armor`
-   `minecraft:enchantable/armor`
-   `minecraft:enchantable/weapon`
-   `minecraft:enchantable/sword`
-   `minecraft:enchantable/mining`
-   `minecraft:enchantable/mining_loot`
-   `minecraft:enchantable/fishing`
-   `minecraft:enchantable/trident`
-   `minecraft:enchantable/durability`
-   `minecraft:enchantable/bow`
-   `minecraft:enchantable/equippable`
-   `minecraft:enchantable/crossbow`
-   `minecraft:enchantable/vanishing`

New item tags defining food and tempting items for various mobs:

-   `minecraft:armadillo_food`
-   `minecraft:axolotl_food` (renamed from `minecraft:axolotl_tempt_items`)
-   `minecraft:bee_food`
-   `minecraft:camel_food`
-   `minecraft:cat_food`
-   `minecraft:chicken_food`
-   `minecraft:cow_food`
-   `minecraft:fox_food`
-   `minecraft:frog_food`
-   `minecraft:goat_food`
-   `minecraft:hoglin_food`
-   `minecraft:horse_food`
-   `minecraft:horse_tempt_items`
-   `minecraft:llama_food`
-   `minecraft:llama_tempt_items`
-   `minecraft:meat` collection tag: not used by the game directly, but may be included in other tags
-   `minecraft:ocelot_food`
-   `minecraft:panda_food`
-   `minecraft:parrot_food`
-   `minecraft:parrot_poisonous_food`
-   `minecraft:pig_food`
-   `minecraft:piglin_food`
-   `minecraft:rabbit_food`
-   `minecraft:sheep_food`
-   `minecraft:strider_food`
-   `minecraft:strider_tempt_items`
-   `minecraft:turtle_food`
-   `minecraft:wolf_food`

Removed item tags:

-   Removed tag `minecraft:tools` (overlapping with `minecraft:breaks_decorated_pots`)

#### Entity Type Tags

-   Added `minecraft:ignores_poison_and_regen` for entities that cannot be affected by Poison and Regeneration effects
-   Added `minecraft:illager_friends` for entities that Illagers will consider allies (unless on a different team)
-   Added `minecraft:immune_to_infested` for entities that cannot receive the Infested mob effect
-   Added `minecraft:immune_to_oozing` for entities that cannot receive the Oozing mob effect
-   Added `minecraft:inverted_healing_and_harm` for entities that have inverted meanings of the Healing and Harm effects
-   Added `minecraft:not_scary_for_pufferfish` for entities that will not cause Pufferfish to puff
-   Added `minecraft:redirectable_projectile` for projectiles which should be able to be redirected and deflected toward the direction the player is looking
-   Added `minecraft:sensitive_to_bane_of_arthropods` for entities sensitive to Bane of Arthropods
-   Added `minecraft:sensitive_to_impaling` for entities sensitive to Impaling
-   Added `minecraft:sensitive_to_smite` for entities that take extra damage from the Smite Enchantment
-   Added `minecraft:wither_friends` for entities that the Wither will not target and which cannot harm the Wither

#### Damage Type Tags

-   Added `minecraft:bypasses_wolf_armor` for damage sources that cannot be absorbed by Wolf Armor
-   Added `minecraft:is_player_attack` for attacks performed by the player

#### Enchantment Tags

-   Added `minecraft:tooltip_order` controlling which order Enchantments are listed in tooltips

### Banner Patterns

Banner Patterns will now be loaded into a dynamic registry from data packs (`data/<namespace>/banner_pattern/<id>`)

-   These entries have two fields:
    -   `asset_id` (namespaced string) is used to resolve texture locations
        -   e.g. `custom:pattern` resolves to `assets/custom/textures/entity/banner/pattern.png`, `assets/custom/textures/entity/shield/pattern.png`
    -   `translation_key` (string) is a translation key prefix
        -   e.g. `block.minecraft.banner.custom.pattern` resolves to `block.minecraft.banner.custom.pattern.<dye color>`

### Wolf Variants

Wolf variants can be data-driven by adding entries to `data/<namespace>/wolf_variant/<id>.json`.

-   Format: object with fields
    -   `wild_texture` - wild/untamed texture for this variant
        -   `<namespace>:<path>` resolves to `assets/<namespace>/textures/<path>.png`
    -   `tame_texture` - tamed texture for this variant
    -   `angry_texture` - to angry texture for this variant
    -   `biome` - a single entry, list or a tag describing biomes in which this variant naturally spawns

### Worldgen Data Formats

-   Added new terrain adaptation type for structures: `encapsulate`
    -   Density will be added all around every piece of a structure
    -   Ideal for structures that need to be entirely covered underground
-   Int and float providers are no longer wrapped in an extra `value` field next to `type`
    -   For example, `{"type":"minecraft:uniform","value":{"min_inclusive":0.0,"max_inclusive":1.0}}` becomes `{"type":"minecraft:uniform","min_inclusive":0.0,"max_inclusive":1.0}`

## Resource Pack Versions 23 through 32

The Resource Pack version is now 32. These are the changes compared to version 22, used in 1.20.4.

-   Renamed `scute` textures and models to `turtle_scute`
-   Added textures and models for new features
-   Changes to fonts
-   Changes to shaders

### Models and Textures

-   Added textures for Wolf variations
-   Added files for Armadillo and Wolf Armor
-   Added additional textures to support colored layers of Wolf Armor for the Wolf model and Wolf Armor item:
    -   `textures/entity/wolf/wolf_armor_overlay.png`
    -   `textures/item/wolf_armor_overlay.png`
-   Added three semi-transparent textures for the cracks to show on the Wolf Armor layer:
    -   `textures/entity/wolf/wolf_armor_crackiness_low.png`
    -   `textures/entity/wolf/wolf_armor_crackiness_medium.png`
    -   `textures/entity/wolf/wolf_armor_crackiness_high.png`
-   Added `trial_chambers` map decoration icon
-   Added textures and model files for the following experimental blocks and items:
    -   Vault
    -   Ominous Vault
    -   Ominous Trial Spawner
    -   Ominous Bottle
-   Added the following mob effect icon textures:
    -   `bad_omen_121`
    -   `infested`
    -   `oozing`
    -   `raid_omen`
    -   `trial_omen`
    -   `weaving`
    -   `wind_charged`

### GUI

-   The `gui/options_background` and the `gui/light_dirt_background` textures have been removed. Instead;
    -   Added `gui/menu_background` to be used as the background of screens, while `gui/menu_list_background` is used for the background of lists for menus accessed from the Title Screen
    -   Added `gui/inworld_menu_background`, `gui/inworld_menu_list_background`, `gui/inworld_header_separator`, `gui/inworld_footer_separator` textures for menus accessed from the Pause Menu
-   Lists now use the `gui/header_separator` and `gui/footer_separator` textures at the top and bottom, respectively
-   The following textures have been updated: `gui/footer_separator`, `gui/header_separator`
-   The following sprites have been updated: `widget/tab`, `widget/tab_highlighted`, `widget/tab_selected`, `widget/tab_selected_highlighted`
-   The `widget/scroller_background` sprite has been added
-   The following textures in Realms have been removed: `gui/sprites/backup/changes`, `gui/sprites/backup/changes_highlighted`, `gui/sprites/backup/restore`, `gui/sprites/backup/restore_highlighted`, `gui/sprites/player_list/make_operator_highlighted`, `gui/sprites/player_list/remove_operator_highlighted`, `gui/sprites/player_list/remove_player_highlighted`
-   Added `gui/tab_header_background` texture, which is rendered behind the tab buttons in the Create World Screen
-   Added `misc/credits_vignette` texture, which is rendered behind the poem and the credits
-   Split map decoration atlas into separate files

#### Map Decorations

-   Map decoration icons have been split from the former `map_icons.png` to use an atlas loaded from the `textures/map/decorations/` directory
-   The process of upgrading your pack can be assisted by using this automated [Slicer](https://github.com/Mojang/slicer/releases/tag/v1.1.5) tool

### Fonts

-   The `ttf` font provider transforms have been adjusted to have more reasonable defaults
    -   `shift` is no longer applied double, and now directly represents a number of pixels in the game UI
    -   The font EM square is fitted to `size` pixels in the game UI, instead of between the font ascender and font descender
    -   The font baseline is positioned consistently with the default font (7 pixels below line top)
    -   This means that generally, any font with a `size` of 9 and no `shift` should look correct by default
    -   `shift` is now restricted to the range `[-512; 512]`
-   Added font variant filters to font providers

#### Font Variant Filters

-   Every glyph provider can now be enabled or disabled based on certain set of variants
-   Available variants are currently hardcoded and controlled by the font options menu
    -   Current variants:
        -   `uniform` - wired to "Force Uniform" button
        -   `jp` - wired to "Japanese Glyph Variants" button
-   Filters are defined in section called `filter`, available for every glyph provider
    -   Keys in that object are variant names (for example `uniform`)
    -   Glyph provider will be included only when value in filter matches actual value of variant in key

### Shaders

-   The unused attributes array in core shader definitions has been removed
-   The unused `position_color_normal` and `position_tex_lightmap_color` shaders have been removed
-   The `position_tex_color_normal` shader (only used by clouds) has been replaced with `rendertype_clouds`
-   The `IViewRotMat` uniform has been removed, and the `Position` attribute for entities is now in (camera relative) world space
-   Light direction uniforms are no longer premultiplied by the view matrix
-   The `blur` post-processing shader has been renamed to `box_blur`
-   Added optional boolean field `use_linear_filter` to post-processing passes which when set to `true` switches texture sampling mode from nearest-neighbor sampling to linear interpolation for that pass
-   Added `entity_outline_box_blur` post-processing shader

### Particles

Added the following particle types:

-   `infested`
-   `item_cobweb`
-   `ominous_spawning`
-   `raid_omen`
-   `small_gust`
-   `trial_omen`
-   `trial_spawner_detection_ominous`
-   `vault_connection`

### Sound Events

Added the following sound events:

-   `block.cobweb.break`
-   `block.cobweb.fall`
-   `block.cobweb.hit`
-   `block.cobweb.place`
-   `block.cobweb.step`
-   `block.trial_spawner.about_to_spawn_item`
-   `block.trial_spawner.ambient_charged`
-   `block.trial_spawner.charge_activate`
-   `block.trial_spawner.spawn_item_begin`
-   `block.trial_spawner.spawn_item`
-   `event.mob_effect.bad_omen`
-   `event.mob_effect.raid_omen`
-   `event.mob_effect.trial_omen`
-   `item.ominous_bottle.dispose`

## Experimental Features

The following changes only apply when their respective Experiment is turned on, either by activating the corresponding experimental data pack or by turning it on in the Experiments screen while creating the world.

-   Added the Mace
-   Added Breeze Rod item
-   Updates to the Breeze
-   Added Wind Charge Item
-   Added Vault block
-   Redesigned Bad Omen to give access to Ominous Events
-   Added Ominous Bottle
-   Added Ominous Trial Spawner
-   Added Ominous Vault
-   Added Ominous Trial Key
-   Added Bogged mob
-   Added 6 new mob effects

![Noor is attacking a Piglin Brute by jumping from the top of a Bastion Remnant with a Mace. There is a Crimson Forest in the background.](https://launchercontent.mojang.com/v2/images/1.20.5exp3thumbnail.jpg)

### Mace

-   A new heavy weapon to smash your enemies!
-   Can be crafted with a Breeze Rod and a Heavy Core
-   Leverage the weight of this new weapon to deal additional damage the farther you fall before hitting your target
    -   Try it out by jumping down toward your target, and hit them before you hit the ground
    -   Successfully striking a target in this way will reset all vertical momentum and negate any fall-damage accumulated from the fall
    -   Other entities near the struck enemy will be knocked back by the immense force of the Mace
-   Using a Mace will decrease its durability like any other weapon; repair it with Breeze Rods at an anvil
-   Players can use a Mace in combination with Wind Charges to launch up and deliver devastating smash attacks on their enemies
-   The baseline additional damage dealt by the Mace smash attack is 3 (1.5 hearts) per fallen block
-   These existing enchantments can be applied to the Mace:
    -   Mending
    -   Unbreaking
    -   Smite
    -   Bane of Arthropods
    -   Fire Aspect
    -   Curse of Vanishing

![Noor is using a Mace with a Wind Burst enchantment to fight a group of Pillagers next to a Pillager Outpost. One of the Pillagers is dramatically thrown towards the viewer by the Wind Burst explosion, while the others are aiming their Crossbows at Noor.](https://launchercontent.mojang.com/v2/images/1.20.5exp4thumbnail.jpg)

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

### Heavy Core

-   A mysterious, dense block which can be combined with a Breeze Rod to craft a brand-new weapon: the Mace!

### Breeze Rod

-   An item dropped by the Breeze that can be crafted into 4 Wind Charges, or used with the Heavy Core to craft the Mace

### Breeze

-   Now drops 1-2 Breeze Rods when killed by a player
    -   The number of Breeze Rods dropped is affected by looting enchantments
-   Added new sound effects, as well as tweaked existing sounds
-   Breeze now deflects all projectiles
-   Deflected projectiles now deflect in the direction of the shooter
-   Breeze is now aggressive toward Iron Golems
-   Breeze no longer retaliates against attacks from the following mobs: Skeletons, Strays, Zombies, Husks, Spiders, Cave Spiders, Slimes
    -   The above mobs will not retaliate when hurt by the Breeze's Wind Charge Projectile
-   Updated the model, texture, and animation of the Wind Charge projectile to give it a more dynamic look and feel

![Noor is jumping from one tall Jungle tree to another using a Wind Charge to launch themselves high into the air. There is a mountain overgrown with Bamboo Forest in the background.](https://launchercontent.mojang.com/v2/images/1.20.5exp2thumbnail.jpg)

### Wind Charge

-   Become the Breeze! Using a Wind Charge item will fire off a Wind Charge projectile similar to the Breeze's
-   The Wind Charge can be used to launch entities away from the impact of the Wind Burst
-   Players can also use Wind Charges to propel themselves high into the air
-   A Wind Charge fired by a player will grant 10% more knockback than a Breeze's, but have a much smaller area of impact
-   Just like the projectile fired by the Breeze, Wind Charges fired by the player also deal damage if they hit an entity directly
-   There is a half-second cooldown after each use
-   Wind Charges can be fired from a dispenser
-   Players that launch themselves with a Wind Charge only accumulate fall damage below the y-level of where they collided with the Wind Burst
    -   This means, for example, if a player uses a Wind Charge at y64 to launch themselves 9 blocks into the air, and they land back where they started at y64, they will take 0 damage.

### Trial Spawner

-   The Trial Spawner now has the same two default loot tables as they have in the Trial Chamber
-   Trial spawners can now only activate when a player is in line of sight

### Trial Chambers

-   Trial Chambers are now more consistently buried by terrain when found underground
-   Ominous Vaults can now be found inside rooms, intersections and at the end of corridors
-   Decorated Pots in the Trial Chambers now have a chance to display a Flow, Guster, or Scrape Pottery Sherd
-   Redesigned dispenser traps
-   Redesigned specific rooms with new variations and challenges
    -   Redesigned chamber room 9 to Slanted room
    -   Redesigned chamber room 3 to Pedestal room
    -   Redesigned chamber room 5 to Eruption room
    -   Redesigned chamber room 6 to Assembly room
-   Updated layout and placements of Vaults
-   Reduced amount of Trial Spawners in corridors
-   Added an atrium to the corridors
-   Made various layout changes in intersections and corridors

Known issue:

-   Corner quadrants in slanted may still fail to generate correctly

### Trial Key

-   Updated texture to reflect new Vault visuals

### Trial Chamber Explorer Map

-   Struggle no more to locate a Trial Chamber - level up your nearest Cartographer to Journeyman for the opportunity to trade for an Explorer Map pointing to a nearby Trial Chamber

### Vault

-   A block that holds locked treasure and loot - find the right key to eject its rewards
    -   Can be found throughout Trial Chambers, containing the structures' most valuable loot
    -   Vaults in Trial Chambers require a Trial Key to be unlocked
-   Can be unlocked by an unlimited number of players
    -   After a player has unlocked a Vault, they cannot unlock that Vault again
    -   If a player has not unlocked that Vault before, an orange stream of particles will flow from the player to the Vault when nearby
-   Has a keyhole that will be open or closed depending on the players nearby
    -   If any nearby player has not unlocked that Vault, the keyhole will be open
    -   If all nearby players have unlocked that Vault, the keyhole will be closed
-   Within its cage, it will cycle through and display items which are possible to eject from its loot table
-   The loot it ejects is randomized each time it is unlocked
-   Cannot be crafted nor obtained in Survival, and does not drop anything when mined
-   Vaults are explosion resistant and cannot be moved

### Ominous Events

-   Bad Omen has been expanded to give access to an optional experience in Trial Chambers
-   These optional experiences can be accessed through Bad Omen, which are now known as Ominous Events
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

![An infographic explaining the Ominous Event System, as explained above.](https://launchercontent.mojang.com/v2/images/1.20.5ominouseventsystemthumbnail.jpg)

#### Ominous Bottle

-   An item which can be consumed by players to receive the Bad Omen effect for 1 hour and 40 minutes
    -   Comes in 5 variations, one for each Bad Omen level
    -   The bottle breaks when consumed
    -   Can be stacked to 64
-   Ominous Bottles can be found uncommonly in any Vaults that are unlocked with Trial Keys, and are dropped by Raid Captains when defeated outside a Raid

![Noor is fighting in Trial Chambers with Trial Omen effect. The Zombies who are trying to attack Noor are wearing Chainmail Armor with Armor Trims. There are multiple Lingering potion effect clouds present in the chamber with another potion about to burst.](https://launchercontent.mojang.com/v2/images/1.20.5exp5thumbnail.jpg)

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
    -   Very commonly spawn mobs with equipment if they can wear it
        -   The equipment these mobs wear have Armor Trims applied from the Trial Chambers
        -   They also have various high-level enchantments
    -   Periodically spawn potions and projectiles on top of unsuspecting players and mobs
        -   Based on their location, spawners in an area will select a random set of projectiles to spawn
        -   These projectiles will always include a single type of Lingering Potion from a set of possible effects
-   Becoming an Ominous Trial Spawner will despawn any existing mobs it spawned and reset its challenge
    -   It will stay Ominous until it has been defeated and its cooldown has finished
-   When defeated, it will eject a different set of loot compared to normal Trial Spawners

![Noor is standing on an Oxidized Copper stairway in Trial Chambers and looking at an Ominous Trial Key which has appeared on top of a Trial Spawner as a reward after a difficult fight.](https://launchercontent.mojang.com/v2/images/1.20.5exp6thumbnail.jpg)

#### Ominous Trial Key

-   A new variant of the Trial Key which can only be obtained by defeating an Ominous Trial Spawner
-   They can be used to unlock Ominous Vaults

![Noor is about to open an Ominous Vault with an Ominous Trial Key in Trial Chambers.](https://launchercontent.mojang.com/v2/images/1.20.5exp7thumbnail.jpg)

#### Ominous Vault

-   A variant of Vaults that have a different texture and emit soul flames instead of normal flames
-   These can be found throughout the Trial Chambers in harder to find places and require an Ominous Trial Key to unlock
    -   These Vaults hold a more valuable set of rewards than the standard Vaults unlocked by Trial Keys

![A Bogged is aiming its bow at something at night in a Swamp. It is a Skeleton with moss on its bones and Mushrooms growing on its head. The Moon is rising between Mangrove trees in the background.](https://launchercontent.mojang.com/v2/images/1.20.5exp1thumbnail.jpg)

### Bogged

-   A new variant of Skeletons that shoots poisonous arrows
    -   They're faster to take down with 16 health instead of 20 health
    -   They attack at a slower interval of 3.5 seconds instead of 2 seconds
-   Bogged has a chance to drop Arrows of Poison when killed by players
-   These mossy and mushroom covered Skeletons spawn naturally in Swamps and Mangrove Swamps
    -   Can also be found spawning from Trial Spawners in some Trial Chambers
-   The Bogged drops 2 mushrooms (either both red/brown or one of each) when sheared

### Mob Effects

-   The following effects have been added:
    -   Wind Charged
        -   Affected entities will emit a wind burst upon death
        -   Brewed with an Awkward Potion and a Breeze Rod
    -   Weaving
        -   Affected entities will spread Cobweb blocks upon death
        -   Affected entities can move through Cobweb with 50% of their normal speed instead of 25%
        -   Brewed with an Awkward Potion and a Cobweb block
    -   Oozing
        -   Affected entities will spawn two Slimes upon death
        -   Brewed with an Awkward Potion and a Slime Block
    -   Infested
        -   Affected entities have a 10% chance to spawn 1-2 Silverfish when hurt
        -   Brewed with an Awkward Potion and a Stone block
-   These effects can be encountered while taking on an Ominous Trial Spawner
-   Some mobs are immune to these effects
    -   Slimes are immune to Oozing
    -   Silverfish are immune to Infested
-   Whenever a mob with Oozing dies, it will check within a 5x5x5 area how many Slimes there are
    -   If the amount exceeds the max entity cramming cap (24 by default), it will not spawn any Slimes
    -   If it does not exceed it, it will attempt to spawn 2 Slimes up until the max entity cramming cap

### Copper Grates

-   Stonecutting Copper Blocks into Copper Grates outputs 4 Copper Grates

### Pottery Sherds

-   Added Flow, Guster, and Scrape Pottery Sherds
-   These can be obtained by breaking Decorated Pots that display them in Trial Chambers

### Banner Patterns

-   Added Flow and Guster Banner Patterns

### Armor Trims

-   Added Bolt and Flow Armor Trims and Smithing Templates
-   Bolt can be duplicated using a Copper Block or Waxed Copper
-   Flow can be duplicated using a Breeze Rod

### Advancements

-   Added the following advancements:
    -   `Minecraft: Trial(s) Edition` - Step foot in a Trial Chamber
    -   `Under Lock & Key` - Unlock a Vault using a Trial Key
    -   `Blowback` - Kill a Breeze with a deflected Wind Charge (challenge - gives 40 exp)
    -   `Who Needs Rockets?` - Use a Wind Charge to launch yourself upward at least 8 blocks
    -   `Crafters Crafting Crafters` - Be near a Crafter when it crafts a Crafter
    -   `Lighten Up` - Scrape a Copper Bulb with an Axe to make it brighter
    -   `Over-Overkill` - Deal 50 hearts of damage in a single hit using the Mace (challenge - gives 50 exp)
    -   `Revaulting` - Unlock an Ominous Vault with an Ominous Trial Key (goal)

### Trade Rebalance

-   In the Trade Rebalance Experiment, Villagers who buy armor now ignore durability and can buy damaged armor

## Fixed bugs in 1.20.5

-   [MC-19893](https://bugs.mojang.com/browse/MC-19893) options\_background.png is incorrectly displayed upside down in the credits after beating the dragon
-   [MC-71977](https://bugs.mojang.com/browse/MC-71977) Changing generic.attack\_damage of tamed wolf has no effect / taming wolf removes custom generic.attack\_damage
-   [MC-72151](https://bugs.mojang.com/browse/MC-72151) Snow Golem's snowballs damage wolves instead of pushing them
-   [MC-94413](https://bugs.mojang.com/browse/MC-94413) Breaking, placing and walking in tripwire (string) or cobweb play stone sounds
-   [MC-96609](https://bugs.mojang.com/browse/MC-96609) Pick block on player head does not use BlockEntityTag
-   [MC-100016](https://bugs.mojang.com/browse/MC-100016) Singleplayer world selection screen is shown incorrectly when light\_dirt\_background.png and/or options\_background.png are transparent
-   [MC-100994](https://bugs.mojang.com/browse/MC-100994) Items in hot bar appear on top of tab menu
-   [MC-107353](https://bugs.mojang.com/browse/MC-107353) Ghast fireballs move incorrectly when hit with knockback enchantment
-   [MC-108350](https://bugs.mojang.com/browse/MC-108350) Totem of undying animation is rendered above hotbar, but underneath items and xp, hunger and health displays
-   [MC-109286](https://bugs.mojang.com/browse/MC-109286) Default dirt page background not aligned properly
-   [MC-117637](https://bugs.mojang.com/browse/MC-117637) World is visible for short moment after credits before respawn
-   [MC-117955](https://bugs.mojang.com/browse/MC-117955) Player teleports to the top when crushed by a piston head
-   [MC-117977](https://bugs.mojang.com/browse/MC-117977) Advancement GUI doesn't have a close button
-   [MC-118857](https://bugs.mojang.com/browse/MC-118857) Effect amplifier is read/written as byte from NBT despite being stored as an integer
-   [MC-118890](https://bugs.mojang.com/browse/MC-118890) Tipped arrows stuck in the ground never lose their effect
-   [MC-121621](https://bugs.mojang.com/browse/MC-121621) Pick block on shulker boxes doesn't find placed and mined shulker boxes in inventory
-   [MC-122703](https://bugs.mojang.com/browse/MC-122703) You can craft a stack of non-stackable items using data packs
-   [MC-123804](https://bugs.mojang.com/browse/MC-123804) Explorer map and Ominous banner names appear in item frames, draw in italics, and can be removed with an anvil
-   [MC-130244](https://bugs.mojang.com/browse/MC-130244) When opening chat in F1 mode, previous messages aren't visible
-   [MC-131636](https://bugs.mojang.com/browse/MC-131636) One additional character at the end is allowed in JSON text components
-   [MC-132380](https://bugs.mojang.com/browse/MC-132380) The "Joining world..." message shows up when you enter a nether/end portal
-   [MC-140397](https://bugs.mojang.com/browse/MC-140397) When combining two enchanted unbreakable items, the result will be two stacked items
-   [MC-140565](https://bugs.mojang.com/browse/MC-140565) Patrol leaders with banners can drop 2 different types of banners which don't stack
-   [MC-142372](https://bugs.mojang.com/browse/MC-142372) Ctrl + Pick block on a campfire with food cooking updates the nbt during cook time
-   [MC-143614](https://bugs.mojang.com/browse/MC-143614) Campfire item with "cooking" NBT heavily shakes in hand/off-screen, when CTRL+pick-blocked
-   [MC-147710](https://bugs.mojang.com/browse/MC-147710) Some long mob names are occluded by the scroll bar in the Statistics page
-   [MC-148057](https://bugs.mojang.com/browse/MC-148057) Ominous banners generated in outposts show the pattern list
-   [MC-148480](https://bugs.mojang.com/browse/MC-148480) Putting two identical enchanted books in a grindstone will output one book
-   [MC-149457](https://bugs.mojang.com/browse/MC-149457) Updating "Force Unicode" setting resets selected language in the language selection menu
-   [MC-151793](https://bugs.mojang.com/browse/MC-151793) Various Ominous Banner stacking issues
-   [MC-153329](https://bugs.mojang.com/browse/MC-153329) Leashing an iron golem breaks its pathfinding until reloading the world
-   [MC-153643](https://bugs.mojang.com/browse/MC-153643) Debug overlay is rendered behind hotbar items
-   [MC-153879](https://bugs.mojang.com/browse/MC-153879) Raiders ignore ominous banners that was saved in the Saved Toolbars from a different version
-   [MC-155857](https://bugs.mojang.com/browse/MC-155857) Team command doesn't affect illagers and witches' AI
-   [MC-157133](https://bugs.mojang.com/browse/MC-157133) Enchanted books with curses can be stacked using a grindstone
-   [MC-162453](https://bugs.mojang.com/browse/MC-162453) Custom heads do not show skin in hand
-   [MC-164298](https://bugs.mojang.com/browse/MC-164298) Applying the texture to player heads is inconsistent
-   [MC-165435](https://bugs.mojang.com/browse/MC-165435) Can't trigger flying mode in creative while standing in the middle of 2×2 magma block bubble column
-   [MC-165948](https://bugs.mojang.com/browse/MC-165948) Bees can be lured into dangerous blocks
-   [MC-166361](https://bugs.mojang.com/browse/MC-166361) GUI scale does not visually update when the option is changed using the keyboard and without the mouse
-   [MC-167324](https://bugs.mojang.com/browse/MC-167324) Multiple UI buttons can be highlighted at the same time
-   [MC-167375](https://bugs.mojang.com/browse/MC-167375) Baby turtle subtitles are grammatically incorrect
-   [MC-168407](https://bugs.mojang.com/browse/MC-168407) Bees can get stuck in a lantern
-   [MC-169187](https://bugs.mojang.com/browse/MC-169187) Hand animation plays when trying to use a spawn egg 5 blocks away from the player's reach
-   [MC-169389](https://bugs.mojang.com/browse/MC-169389) End portals sometimes teleport the player to overworld coordinates
-   [MC-170000](https://bugs.mojang.com/browse/MC-170000) Hand lighting / lighting of held items changes drastically in first-person mode when looking around
-   [MC-171177](https://bugs.mojang.com/browse/MC-171177) You can enter nether portals in creative mode by running against the frame of the portal
-   [MC-171981](https://bugs.mojang.com/browse/MC-171981) Map of fuel times is created anew every time an item is placed in a furnace, instead of being cached
-   [MC-172047](https://bugs.mojang.com/browse/MC-172047) Wolves try to attack armor stands
-   [MC-172447](https://bugs.mojang.com/browse/MC-172447) Leaving The End shows loading screen with overlapping text
-   [MC-172898](https://bugs.mojang.com/browse/MC-172898) Equiping armor in creative via right click causes it to disappear from the hotbar for a frame
-   [MC-173303](https://bugs.mojang.com/browse/MC-173303) Leashed pets teleport to the player when reloaded
-   [MC-173672](https://bugs.mojang.com/browse/MC-173672) Title text renders in front of player names in player list
-   [MC-174496](https://bugs.mojang.com/browse/MC-174496) Player heads lose their name after being placed
-   [MC-175437](https://bugs.mojang.com/browse/MC-175437) Fullscreen resolution isn't applied when exiting Video Settings with Esc
-   [MC-175622](https://bugs.mojang.com/browse/MC-175622) Wolf's tail will spin 360 degrees if max health is increased
-   [MC-178410](https://bugs.mojang.com/browse/MC-178410) Banners don't support the HideFlags tag when placed down as blocks
-   [MC-179817](https://bugs.mojang.com/browse/MC-179817) Lead drop when modifying it with /data
-   [MC-184066](https://bugs.mojang.com/browse/MC-184066) Respawn anchors don't produce an ambient sound
-   [MC-184622](https://bugs.mojang.com/browse/MC-184622) Sound for exiting a portal/travelling to another dimension does not use its subtitle string despite it existing in en\_us.json
-   [MC-185379](https://bugs.mojang.com/browse/MC-185379) Baby polar bear subtitle does not explicitly mention it comes from a baby polar bear
-   [MC-185955](https://bugs.mojang.com/browse/MC-185955) When your eye level is up to 2 pixels above water, you count as being underwater as if it would be a full block
-   [MC-186626](https://bugs.mojang.com/browse/MC-186626) /weather not working in custom dimensions
-   [MC-187267](https://bugs.mojang.com/browse/MC-187267) Title text renders in front of sidebar
-   [MC-187372](https://bugs.mojang.com/browse/MC-187372) There is no space between fps limit/vsync and graphics level in the debug screen
-   [MC-187616](https://bugs.mojang.com/browse/MC-187616) Totems rendered too dark for a second after being used
-   [MC-187746](https://bugs.mojang.com/browse/MC-187746) Game rule buttons on "Edit game rules" screen are highlighted despite being covered
-   [MC-188497](https://bugs.mojang.com/browse/MC-188497) AngerTime and AngryAt cannot be set on summon
-   [MC-189211](https://bugs.mojang.com/browse/MC-189211) Water Taken from Cauldron statistic is slightly covered by the bottom of the screen's overlay
-   [MC-189484](https://bugs.mojang.com/browse/MC-189484) Statistics screen Tab selection is not centered
-   [MC-193202](https://bugs.mojang.com/browse/MC-193202) Tamed wolf health resets when NBT is loaded (e.g. relog)
-   [MC-193460](https://bugs.mojang.com/browse/MC-193460) Inconsistent layering of sidebar and debug screen (F3) text
-   [MC-193511](https://bugs.mojang.com/browse/MC-193511) Title text renders in front of narrator text
-   [MC-193515](https://bugs.mojang.com/browse/MC-193515) Boss bar text renders in front of narrator text
-   [MC-193517](https://bugs.mojang.com/browse/MC-193517) Boss bar text renders in front of sidebar
-   [MC-193521](https://bugs.mojang.com/browse/MC-193521) Boss bar text renders in front of F3
-   [MC-193524](https://bugs.mojang.com/browse/MC-193524) Boss bar text strikethough/underline renders on tab list
-   [MC-193656](https://bugs.mojang.com/browse/MC-193656) Banners' breaking texture is displaced and/or repeatedly flips horizontally, depending on the banner's rotation
-   [MC-193753](https://bugs.mojang.com/browse/MC-193753) Respawn anchor ambient sound subtitle refers to it as a portal
-   [MC-194948](https://bugs.mojang.com/browse/MC-194948) Block breaking subtitle inconsistent with painting, item frame and lead breaking subtitles
-   [MC-195572](https://bugs.mojang.com/browse/MC-195572) The fog from lava is much denser when having the Fire Resistance effect active compared to Bedrock Edition
-   [MC-198492](https://bugs.mojang.com/browse/MC-198492) Players can be pushed into danger in situations where they wouldn't normally be damaged
-   [MC-198787](https://bugs.mojang.com/browse/MC-198787) Inefficient streams in GoalSelector
-   [MC-198963](https://bugs.mojang.com/browse/MC-198963) Chat text renders in front of player names in player list
-   [MC-199973](https://bugs.mojang.com/browse/MC-199973) Wet wolf is rendered too dark compared to past versions
-   [MC-200947](https://bugs.mojang.com/browse/MC-200947) Large amount of unused space in map\_icons.png texture file
-   [MC-200987](https://bugs.mojang.com/browse/MC-200987) Title in bossbar breaks HUD opacity
-   [MC-201722](https://bugs.mojang.com/browse/MC-201722) Summon command ignores stacking restrictions
-   [MC-204947](https://bugs.mojang.com/browse/MC-204947) Ctrl + Pick Block on placed ominous banners is not the same as Pick Block
-   [MC-206854](https://bugs.mojang.com/browse/MC-206854) Multiplayer warning and Chat Preview warning are off center
-   [MC-207353](https://bugs.mojang.com/browse/MC-207353) Ghast fireballs and wind charges can't be redirected in melee if the attack does 0 damage
-   [MC-208528](https://bugs.mojang.com/browse/MC-208528) Feeding tamed baby wolves and cats causes them to sit down/stand up
-   [MC-209906](https://bugs.mojang.com/browse/MC-209906) Sculk sensors are not activated upon attaching equipment to entities through their inventories
-   [MC-213104](https://bugs.mojang.com/browse/MC-213104) Statistics tab resets when resizing the Minecraft window
-   [MC-216071](https://bugs.mojang.com/browse/MC-216071) Splash text resets if you hit escape on the Multiplayer menu, but not the Singleplayer menu
-   [MC-217084](https://bugs.mojang.com/browse/MC-217084) Player head NBT "ExtraType" is no longer saved but doesn't use DataFixerUpper upgrade path
-   [MC-218811](https://bugs.mojang.com/browse/MC-218811) Big dripleaves tilt when touched from the side
-   [MC-219899](https://bugs.mojang.com/browse/MC-219899) Bone meal used on rooted dirt causes the particles to appear above it, despite the growth being below it
-   [MC-219967](https://bugs.mojang.com/browse/MC-219967) IndexOutOfBoundsException occurs instead of a "Bad packet id" message
-   [MC-221754](https://bugs.mojang.com/browse/MC-221754) Leashed wolves no longer attack when unleashed
-   [MC-224343](https://bugs.mojang.com/browse/MC-224343) Books don't stack after being placed on a lectern
-   [MC-225170](https://bugs.mojang.com/browse/MC-225170) Normal matrix scaling broken in some situations
-   [MC-226775](https://bugs.mojang.com/browse/MC-226775) Extinguishing candle shows inaccurate subtitle
-   [MC-228486](https://bugs.mojang.com/browse/MC-228486) Cannot switch to other windows using Cmd+Tab on macOS
-   [MC-229209](https://bugs.mojang.com/browse/MC-229209) Loot table function set\_count doesn't work with unstackable items anymore
-   [MC-229680](https://bugs.mojang.com/browse/MC-229680) Chest, Trapped Chest, Ender Chest and Barrels stop functioning when moving far away whilst in the GUI
-   [MC-229919](https://bugs.mojang.com/browse/MC-229919) Bees don't recognize beehives or bee nests with a campfire directly below and a block on top
-   [MC-230256](https://bugs.mojang.com/browse/MC-230256) NBT "HideFlags" does not hide "Slot" on minecraft:bundle
-   [MC-231466](https://bugs.mojang.com/browse/MC-231466) Minecraft crashes with message 'Index 335550507 out of bounds for length 8000' / java.lang.ArrayIndexOutOfBoundsException: Index 335550507 out of bounds for length 8000
-   [MC-232104](https://bugs.mojang.com/browse/MC-232104) Minecarts cause chunks to be corrupted/reset when loading worlds from before 1.5 (13w02a)
-   [MC-232489](https://bugs.mojang.com/browse/MC-232489) Retrieving a plant from a flower pot ignores inventory contents
-   [MC-232560](https://bugs.mojang.com/browse/MC-232560) Tamed wolf movement speed decreases when unleashed from a fence
-   [MC-234406](https://bugs.mojang.com/browse/MC-234406) The dirt background changes its position when interacting with the "Players" button in the realms menu
-   [MC-234558](https://bugs.mojang.com/browse/MC-234558) There is no title in the "Invite player" realms menu
-   [MC-234889](https://bugs.mojang.com/browse/MC-234889) Potion effect icons displayed within the HUD can overlap boss bars
-   [MC-238242](https://bugs.mojang.com/browse/MC-238242) There is an unnecessary black pixel in the upper right corner of small potion UI icons in the inventory
-   [MC-239084](https://bugs.mojang.com/browse/MC-239084) Item pickup animation is darker than the actual item model
-   [MC-248076](https://bugs.mojang.com/browse/MC-248076) Specific type of Firework Rockets won't stack with each other after use
-   [MC-248689](https://bugs.mojang.com/browse/MC-248689) Fog on falling blocks happens too early
-   [MC-248961](https://bugs.mojang.com/browse/MC-248961) takenDamage for achievement criteria is calculated wrongly when the player has equipped a helmet
-   [MC-249136](https://bugs.mojang.com/browse/MC-249136) Freeze/server-side lag spike sometimes occurs when attempting to locate a buried treasure or opening/breaking a chest containing a map
-   [MC-249335](https://bugs.mojang.com/browse/MC-249335) Using bone meal on mangrove leaves spawns growth particles at the center of the block instead of below it
-   [MC-250432](https://bugs.mojang.com/browse/MC-250432) Esc key always unpauses the game in Demo mode
-   [MC-251027](https://bugs.mojang.com/browse/MC-251027) Wearing a helmet doesn't reduce the damage of falling anvils or stalactites by 1⁄4
-   [MC-251042](https://bugs.mojang.com/browse/MC-251042) Third-party warning buttons are not positioned well in non-English languages
-   [MC-251303](https://bugs.mojang.com/browse/MC-251303) Transparent boss bars break when more than one is on screen
-   [MC-251509](https://bugs.mojang.com/browse/MC-251509) Patterned banners not stacking properly / banner loses "banner" ID when mined
-   [MC-252409](https://bugs.mojang.com/browse/MC-252409) Memory statistics within the debug menu contain some unnecessary spaces
-   [MC-253881](https://bugs.mojang.com/browse/MC-253881) The screen repetitively flashes for other players when the host of a LAN world changes the render distance
-   [MC-259142](https://bugs.mojang.com/browse/MC-259142) Hoppers with barrel facing downwards on top picking up item
-   [MC-259355](https://bugs.mojang.com/browse/MC-259355) Game crashes because /place sometimes does not check whether position is loaded and out of world
-   [MC-259587](https://bugs.mojang.com/browse/MC-259587) Negative item durability causes the durability bar to render incorrectly
-   [MC-260099](https://bugs.mojang.com/browse/MC-260099) Sniffer's snout shading changes during sniffing
-   [MC-260867](https://bugs.mojang.com/browse/MC-260867) Cannot focus entries on the pack selection screen using the mouse
-   [MC-260889](https://bugs.mojang.com/browse/MC-260889) Players can use water buckets and lava buckets on blocks that are out of reach
-   [MC-260921](https://bugs.mojang.com/browse/MC-260921) Data is focused last on the statistics screen when using keyboard navigation
-   [MC-261577](https://bugs.mojang.com/browse/MC-261577) The nether portal overlay is rendered completely opaque when using spyglasses while standing inside of nether portals
-   [MC-261596](https://bugs.mojang.com/browse/MC-261596) Crafting Table search keyboard shortcut not working
-   [MC-261749](https://bugs.mojang.com/browse/MC-261749) Tamed cats don't emit mob interaction vibrations for entering sitting/standing mode
-   [MC-261846](https://bugs.mojang.com/browse/MC-261846) Japanese language uses a Chinese font
-   [MC-262503](https://bugs.mojang.com/browse/MC-262503) light\_dirt\_background.png and header\_separator.png does not match options\_background.png
-   [MC-263256](https://bugs.mojang.com/browse/MC-263256) Chat renders on top of TAB, blocking information
-   [MC-263315](https://bugs.mojang.com/browse/MC-263315) Attack Target of hoglins/zoglins can't be detected by /execute on target
-   [MC-263641](https://bugs.mojang.com/browse/MC-263641) Boss bar text no longer renders behind potion effect icons
-   [MC-263872](https://bugs.mojang.com/browse/MC-263872) The "Scanning for games on your local network" element in the multiplayer menu cannot be selected via the mouse cursor
-   [MC-263873](https://bugs.mojang.com/browse/MC-263873) Elements within the statistics menu are not selected in order when using the TAB key
-   [MC-263874](https://bugs.mojang.com/browse/MC-263874) Elements in lists within the statistics menu cannot be selected via the mouse cursor
-   [MC-264456](https://bugs.mojang.com/browse/MC-264456) Entity targeted by frogs and axolotls can't be detected by /execute on target
-   [MC-264597](https://bugs.mojang.com/browse/MC-264597) F3 debug menu underlined text renders over subtitles
-   [MC-264637](https://bugs.mojang.com/browse/MC-264637) Text shaders resource packs cause subtitles to flicker
-   [MC-264684](https://bugs.mojang.com/browse/MC-264684) Too long macro silently fails
-   [MC-264821](https://bugs.mojang.com/browse/MC-264821) The fog on armor worn by entities occurs too early
-   [MC-265273](https://bugs.mojang.com/browse/MC-265273) The tab list in create world screen does not indicate it's tab-focused by highlight or rendering borders
-   [MC-265390](https://bugs.mojang.com/browse/MC-265390) Forceload Command provides wrong output
-   [MC-265520](https://bugs.mojang.com/browse/MC-265520) Switching connection protocols sometimes produces errors
-   [MC-265541](https://bugs.mojang.com/browse/MC-265541) player.dat\_old won't be read even if player.dat doesn't exist
-   [MC-265585](https://bugs.mojang.com/browse/MC-265585) Waterlogged barriers do not diffuse sky light
-   [MC-265661](https://bugs.mojang.com/browse/MC-265661) Dirt background appears to overlap back button on experimental feature requirements datapack screen for some window sizes
-   [MC-265669](https://bugs.mojang.com/browse/MC-265669) Hotbar text renders above subtitle background but under subtitle text
-   [MC-265698](https://bugs.mojang.com/browse/MC-265698) Skeleton Horse's head covers player's screen when jumping
-   [MC-265709](https://bugs.mojang.com/browse/MC-265709) Stonecutter outputs are broken past the 32nd row in the GUI (server only)
-   [MC-265741](https://bugs.mojang.com/browse/MC-265741) Waterlogged barriers don't show up on maps
-   [MC-265749](https://bugs.mojang.com/browse/MC-265749) Tooltips flash when the values of buttons or fields are changed
-   [MC-265835](https://bugs.mojang.com/browse/MC-265835) The freezing effect is rendered totally opaque when using a spyglass
-   [MC-266032](https://bugs.mojang.com/browse/MC-266032) Attempting to copy a "Copy of a copy" book in a Crafter behaves incorrectly
-   [MC-266055](https://bugs.mojang.com/browse/MC-266055) Opening or closing a copper door or trapdoor while holding an axe / honeycomb grants wax-related advancement
-   [MC-266135](https://bugs.mojang.com/browse/MC-266135) Cached macro commands ignore permission level, allowing limited permission escalation
-   [MC-266136](https://bugs.mojang.com/browse/MC-266136) Macro commands ignore function-permisson-level server setting, including when lower than default
-   [MC-266144](https://bugs.mojang.com/browse/MC-266144) Copper Doors are not part of the #doors item tag
-   [MC-266145](https://bugs.mojang.com/browse/MC-266145) Copper Trapdoors are not part of the #trapdoors item tag
-   [MC-266308](https://bugs.mojang.com/browse/MC-266308) Copper Bulbs have unused "turn\_off" sound
-   [MC-266334](https://bugs.mojang.com/browse/MC-266334) Shulker bullets destroy armor stands
-   [MC-266389](https://bugs.mojang.com/browse/MC-266389) Glow berry particles are barely visible when bonemealed
-   [MC-266430](https://bugs.mojang.com/browse/MC-266430) Breeze on top of a non-full block produces particles of the block below it
-   [MC-266432](https://bugs.mojang.com/browse/MC-266432) Exposed, weathered and oxidised copper bulbs are unwaxed in trial chambers
-   [MC-266449](https://bugs.mojang.com/browse/MC-266449) Breeze doesn't attack or retaliate against mob on sight
-   [MC-266467](https://bugs.mojang.com/browse/MC-266467) Wind charges stutter when flying through the air
-   [MC-266469](https://bugs.mojang.com/browse/MC-266469) When attacked, breezes sometimes stop pathfinding, jumping, or firing wind charges
-   [MC-266532](https://bugs.mojang.com/browse/MC-266532) Breezes can be hit by some projectiles
-   [MC-266533](https://bugs.mojang.com/browse/MC-266533) Breeze's AI has serious flaws in open terrain
-   [MC-266557](https://bugs.mojang.com/browse/MC-266557) The breeze sometimes moves around while attacking, interrupting its attack animation
-   [MC-266570](https://bugs.mojang.com/browse/MC-266570) Wind charges can't go through non solid blocks
-   [MC-266577](https://bugs.mojang.com/browse/MC-266577) Some trial spawners in trial chambers spawn mobs without persistence
-   [MC-266589](https://bugs.mojang.com/browse/MC-266589) Armor durability is changed when swapping on creative
-   [MC-266628](https://bugs.mojang.com/browse/MC-266628) High polling rate causing stuttering
-   [MC-266680](https://bugs.mojang.com/browse/MC-266680) The glowing outline isn't applied to the eyes or eyebrows of breezes
-   [MC-266685](https://bugs.mojang.com/browse/MC-266685) The entity shadows of breezes are too large in relation to the size of their models
-   [MC-266688](https://bugs.mojang.com/browse/MC-266688) Breeze model's glowing eyes are not resource pack-friendly
-   [MC-266707](https://bugs.mojang.com/browse/MC-266707) Trial spawners ignore custom\_spawn\_rules
-   [MC-266738](https://bugs.mojang.com/browse/MC-266738) Subtitles string "subtitles.block.trial\_spawner.spawn\_mob" is misleading and inconsistent
-   [MC-266879](https://bugs.mojang.com/browse/MC-266879) Clouds, entity hitboxes, block outlines, specially rendered blocks, and enchantment glints, render through the insides of breezes' eyes and eyebrows
-   [MC-266909](https://bugs.mojang.com/browse/MC-266909) Breezes don't have smooth transitions to their idle states when they stop moving
-   [MC-266960](https://bugs.mojang.com/browse/MC-266960) Bossbar text renders in front of player list background and player icons
-   [MC-266990](https://bugs.mojang.com/browse/MC-266990) Maps with the same 'map' tag value, but different 'display' tag data can cause markers to disappear
-   [MC-266997](https://bugs.mojang.com/browse/MC-266997) Sky light doesn't update when breaking a shulker box while its (closing) animation is playing
-   [MC-266999](https://bugs.mojang.com/browse/MC-266999) Crafter's tooltip buttons can still be visible to players on spectator mode
-   [MC-267044](https://bugs.mojang.com/browse/MC-267044) Tick status strings contain inconsistent word usage
-   [MC-267045](https://bugs.mojang.com/browse/MC-267045) Some tick strings are missing articles and are unclear
-   [MC-267086](https://bugs.mojang.com/browse/MC-267086) Compass does not indicate spawn point correctly when game is frozen with /tick
-   [MC-267103](https://bugs.mojang.com/browse/MC-267103) Client crashes when receiving inconsistent network registries
-   [MC-267104](https://bugs.mojang.com/browse/MC-267104) The bottom face textures of breezes' rods are incorrect and don't match with surrounding colors
-   [MC-267133](https://bugs.mojang.com/browse/MC-267133) Breezes can't attack or move when there is no land around them and they are on the same height block as the player
-   [MC-267149](https://bugs.mojang.com/browse/MC-267149) Crafter top face has an inverted UV texture map
-   [MC-267193](https://bugs.mojang.com/browse/MC-267193) A function with /return fail run in chat doesn't indicate failure
-   [MC-267194](https://bugs.mojang.com/browse/MC-267194) /return run function in combination with a fork and a function that doesn't return has inconsistent behavior
-   [MC-267273](https://bugs.mojang.com/browse/MC-267273) Second beacon power for level 4 beacon flickers when player hovers the mouse pointer over it
-   [MC-267352](https://bugs.mojang.com/browse/MC-267352) Singleplayer worlds don't load the player.dat when the "Player" tag is absent from level.dat
-   [MC-267366](https://bugs.mojang.com/browse/MC-267366) You cannot use Spider Eyes on Baby Armadillos to age them up
-   [MC-267367](https://bugs.mojang.com/browse/MC-267367) Wolf armor flashes red when the wolf takes damage
-   [MC-267371](https://bugs.mojang.com/browse/MC-267371) Shulkers hitbox doesn't scale with generic.scale
-   [MC-267377](https://bugs.mojang.com/browse/MC-267377) Applying bone meal to mangrove leaves no longer produces any particles
-   [MC-267378](https://bugs.mojang.com/browse/MC-267378) Armor stand interaction points do not change with scale
-   [MC-267379](https://bugs.mojang.com/browse/MC-267379) Applying bone meal to rooted dirt no longer produces any particles
-   [MC-267380](https://bugs.mojang.com/browse/MC-267380) Cannot open inventories beyond default block reach
-   [MC-267381](https://bugs.mojang.com/browse/MC-267381) Moving while sneaking is impossible with high generic.step\_height attribute
-   [MC-267433](https://bugs.mojang.com/browse/MC-267433) Shift double-clicking while holding the same item on your cursor doesn't transfer items
-   [MC-267451](https://bugs.mojang.com/browse/MC-267451) Items named with an anvil on 1.20.4 don't stack with items named prior
-   [MC-267456](https://bugs.mojang.com/browse/MC-267456) Changes to item\_used\_on\_block advancement criteria breaks previous functionality
-   [MC-267465](https://bugs.mojang.com/browse/MC-267465) Realms world upload error: "Cannot invoke "ctt.c()" because "this.b" is null"
-   [MC-267500](https://bugs.mojang.com/browse/MC-267500) Attribute modifier on an item with the first and/or last 2 integers of the UUID being 0 are non-functional
-   [MC-267732](https://bugs.mojang.com/browse/MC-267732) /place jigsaw still caps max depth at 7
-   [MC-267742](https://bugs.mojang.com/browse/MC-267742) Opening a written book makes it unstackable with identical unopened books
-   [MC-267747](https://bugs.mojang.com/browse/MC-267747) Click and hover events don't work when viewing chat while F1 is enabled
-   [MC-267809](https://bugs.mojang.com/browse/MC-267809) The word "armor" within the Wolf Armor subtitle strings is improperly capitalized
-   [MC-267866](https://bugs.mojang.com/browse/MC-267866) Panda slimeball drop is hardcoded
-   [MC-267975](https://bugs.mojang.com/browse/MC-267975) The realms player list is rendered larger than its visual size
-   [MC-267976](https://bugs.mojang.com/browse/MC-267976) The scroll bar in the realms player list can no longer be dragged using the mouse cursor
-   [MC-268000](https://bugs.mojang.com/browse/MC-268000) The client crashes when using /give to give players a skull
-   [MC-268011](https://bugs.mojang.com/browse/MC-268011) Hoppers leak the last world they sucked item on
-   [MC-268022](https://bugs.mojang.com/browse/MC-268022) Elements within the list in the "Experimental feature requirements" menu cannot be selected via the mouse cursor
-   [MC-268110](https://bugs.mojang.com/browse/MC-268110) Deleting world results in a file directory error
-   [MC-268236](https://bugs.mojang.com/browse/MC-268236) Search field in the social interactions menu not focused by default
-   [MC-268353](https://bugs.mojang.com/browse/MC-268353) Tick Freeze randomizes next AI tick type
-   [MC-268597](https://bugs.mojang.com/browse/MC-268597) Hitting a breeze with a player reflected/dispensed wind charge causes it to become trapped within the breeze until it moves
-   [MC-268624](https://bugs.mojang.com/browse/MC-268624) "Saving world" message is rendered behind pause menu background, instead of on top
-   [MC-269083](https://bugs.mojang.com/browse/MC-269083) Effect background texture in inventory renders translucent pixels as opaque
-   [MC-269085](https://bugs.mojang.com/browse/MC-269085) Experience bar and jump bar render translucent pixels as opaque
-   [MC-269279](https://bugs.mojang.com/browse/MC-269279) The "Normal user" button within the realms player menu is improperly capitalized
-   [MC-269472](https://bugs.mojang.com/browse/MC-269472) Crash when table\_bonus loot condition has empty chances list
-   [MC-269496](https://bugs.mojang.com/browse/MC-269496) You don't get any damage if you fight against the breeze in a minecart or in a boat
-   [MC-269755](https://bugs.mojang.com/browse/MC-269755) Scroller in Report Player screen renders translucent pixels as opaque, unlike elsewhere
-   [MC-269763](https://bugs.mojang.com/browse/MC-269763) Scroller in Realms screen renders translucent pixels as opaque, unlike elsewhere

---

# Minecraft 1.20.4

Minecraft 1.20.4 is a hotfix release for Java Edition which fixes a critical bug that could cause items to vanish after being stored in a Decorated Pot.

Happy Pot Smashing!

## Fixed bugs in 1.20.4

-   [MC-267185](https://bugs.mojang.com/browse/MC-267185): Decorated pots can delete items when reloading the world

---

# Minecraft 1.20.3

We're now releasing 1.20.3 for Minecraft: Java Edition. This release comes with new functionality for Decorated Pots, a new look for the Bat and improvements to Shields.

This release also includes new features for map makers and pack creators like Scoreboard Display Names and extensions for the `execute` and `return` commands and a new administrative tool: the `tick` command.

The optional Update 1.21 Experiment also shows up in this version as a sneak preview of features for the next major version of Minecraft.

## Changes

-   Decorated Pots can now store items, and can be smashed by projectiles
-   When a player is blocking with a shield, the arm with the shield now follows the direction the player is looking at, when viewed from third-person perspective
-   The Bat now has a new look
-   Added an accessibility option that allows to hide the yellow splash texts in the main menu
-   Added a recovery screen for worlds with missing data (for example, if saving failed due to an unexpected shutdown)
-   Other minor tweaks

![Minecraft Java Edition 1.20.3 Image 2 Thumbnail](https://launchercontent.mojang.com/images/1.20.3_image_2_tn.jpg)

### Decorated Pots

-   Decorated Pots now store up to a single stack of items
-   Hoppers, Droppers and Minecarts with Hoppers can now insert and/or extract items from Decorated Pots
-   Comparators can now read the number of items in Decorated Pots
-   Players can interact with Decorated Pots to insert items into them
-   Decorated Pots have no GUI, and need to be broken to retrieve or discover their content by players
-   Player interactions with Decorated Pots cause the Decorated Pot to wobble and trigger the vibration frequency of 11
-   Decorated Pots can be smashed by projectiles which cause them to shatter and drop their content
-   Decorated Pots now stack up to 64

### Bat

-   The Bat has an updated model, animations and texture

![Minecraft Java Edition 1.20.3 Image 1 Thumbnail](https://launchercontent.mojang.com/images/1.20.3_image_1_tn.jpg)

### Minor Tweaks

-   Monster Spawner now renders their inner faces when looking inside
-   Thrown Ender Pearls produce a teleportation sound on impact
-   Small tweaks to the Telemetry Data Collection screen

## Technical Changes

-   The Data Pack version is now 26
-   The Resource Pack version is now 22
-   A few minor changes to chat component serialization
-   The name of non-living entities will now be shown if targeted and a CustomName is set, or always displayed if CustomNameVisible is set, similar to living entities
-   Changes to downloaded/world resource pack handling

### Chat Components

#### Serialization

-   Plain-text chat components (text, no sibilings, no stylings) are now always serialized as strings instead of `{"text': "blah"}`
-   Chat components now serialize to NBT when sent over network
-   Chat components now have an optional `type` value (allowed values: `text`, `translatable`, `score`, `nbt`, `keybind`, `selector`) to speed up parsing and improve error checking
-   Similarily, components of type `nbt` now have a `source` field with allowed values `entity`, `block`, `storage`
-   The `id` field in `show_entity` `hoverEvent` style now also accepts UUIDs as an array of 4 ints
-   Numeric and boolean arguments for `translate` components are no longer converted to strings
-   The following JSON component representations are no longer accepted:
    -   `null`
    -   `[]`
-   Errors in the following style fields are no longer silently ignored:
    -   `color`
    -   `clickEvent`
    -   `hoverEvent`
    -   `hoverEvent[action=show_entity].contents.name`
    -   `hoverEvent[action=show_item].contents.tag`

### World Resource Packs

Changes have been made to world resource packs (`resources.zip`), Realms resource packs and resource packs controlled by dedicated servers.

#### User Interface

-   The download screen has been replaced with a toast
-   World resource pack application now starts together with chunk loading

#### Local Storage

Downloaded packs are now stored in the `downloads` directory (with a different file organization than the old `server-resource-packs`)

-   Only up to 20 files are cached
-   Inside this directory there is also log file (`log.json`) that stores information about downloaded files for debug purposes

#### Server Config

Downloaded packs now have a unique id (GUID/UUID) that can be used to differentiate them

-   For dedicated server packs, this value can be configured with the `resource-pack-id` option in `server.properties`
-   If the value is missing, it will be generated based on the pack URL
-   If the hash of a pack is not set, this pack will be redownloaded before every application
    -   Previously, if the hash was missing, the latest downloaded version of pack was applied

#### Packets

Some additional options have been added for 3rd-party servers software:

-   The client can now accept multiple server resource packs
-   A new packet was added to un-apply server resource packs
-   The client now sends additional updates about packs (like download success)
-   Resource packs are no longer cleaned when entering configuration phase

## Data Pack Version 19

### Tags

-   Added `can_breathe_under_water` entity type tag which disables drowning
-   Added `can_break_armor_stand` damage type tag for damage types that can incrementally knock down armor stands

## Data Pack Version 20

-   Changed `function` command results
-   Adjusted check for gamerule `maxCommandChainLength`
-   Added new gamerule `maxCommandForkCount`
-   Reintroduced form of the `execute` command: `execute if function`
-   Reintroduced form of the `return` command: `return run`
-   Decorated Pots with the `cracked` state set to true will always shatter when broken
-   Added new `dust_plume` particle type

### Commands

#### Functions

(See further changes in Pack Version 23)

-   The `function` command has been changed to better accomodate new `return` command
-   Functions no longer have any result unless they use `return` or there was error during lookup or instantiation
    -   That means the `function` command will no longer return (or even display) the number of commands run during execution
    -   Error conditions:
        -   Calling a non-existent function
        -   Calling an empty function tag
        -   Macro instantiation failures
-   "Result" in this context means values that would be stored with `execute store`
-   The previous behavior where every command in a function would perform a store if a function was called with `execute store ... run function` has been removed
    -   A single call to `function` will now store at most once (zero times if `return` was not called)
    -   For function tags with multiple entries, function results will be accumulated, but partial results will be stored at the end of every function

##### Limits

Existing limits for functions have been refined to accomodate new execution rules and prevent wider range of exploits:

-   Limits now apply even for commands run from the server console or chat input (so it will now always behave as if they were placed in a function)
    -   For example, all functions called by `execute as @e run function` will count towards the same limit
    -   Executions from command blocks still count as separate ones
-   The `maxCommandChainLength` limit for functions will now count "operations" like:
    -   execution of command for a single context
    -   execution of a stage in `execute` (no matter how many contexts were modified)
    -   invocation of function
-   A new limit with game rule called `maxCommandForkCount` now restricts the total amount of contexts that can be created by single state of functions like `execute`
    -   For example: if there are 5 entities in world, `execute as @e` creates 5 contexts, while `execute as @e at @e` creates 5\*5 = 25 contexts

#### `execute if function`

An `execute` sub-command that runs a function or function tag and matches the return value(s). This is a reintroduction of functionality removed in a previous version. If a tag is given, all functions run regardless of the results of prior functions.

Syntax: `execute if|unless function <function> <continuation>`

Parameters:

-   `function`: The function or tag to run

##### Matching

The matching of the result value of the function(s) that run:

-   At least one of the functions must succeed for the match to succeed
-   A succeessful call is defined as a function that:
    -   Uses the `return` command to return a value
    -   The return value is not 0
-   If no functions exited with `return`, neither `if` or `unless` will run

#### `return run`

A form of the `return` command is now available, `return run`. This is a reintroduction of functionality removed in a previous version.

Syntax: `return run <command>`

This takes the `result` value from running the specified `command` and returns that as the return value of the function.

-   If the command did not return any value (like, for example, a call to a `function` without `return`), return will not execute and function will continue execution (changed in Data Pack Version 23)
-   If the given command fails, the return value is `0`
-   In all other aspects, it works like `return` with a specified return value
-   In case of a fork (for example `return run execute as @e run some_command`), the first execution of the command will return
    -   If there are no executions (for example in `return run execute if entity @e[something_impossible] run some_command`), the function will not return and will continue execution (changed in Data Pack Version 23)

## Data Pack Version 21

-   Introduced Jigsaw structure pool aliases, which can be used to rewire pool selection
-   Added field `block_state` to `tnt` entity to allow replacement of rendered block model
-   Renamed field `Fuse` to `fuse` on `tnt` entity
-   Added `playersNetherPortalDefaultDelay` and `playersNetherPortalCreativeDelay` game rules to control time (in ticks) that a player needs to stand in a Nether portal before changing dimensions
-   Added new game rule `projectilesCanBreakBlocks` to control whether impact projectiles will destroy blocks that are destructible by them, i.e. Chorus Flowers, Pointed Dripstone and Decorated Pots
-   Added `white_smoke` particle type

### Jigsaw Pool Aliases

-   Added optional `pool_aliases` list to Jigsaw structures
-   Aliases represent the possibility to rewire Jigsaw pool connections by redirecting pool references on individual structure instances
-   Alias variants are represented in `type` and is one of:
    -   `direct` 1:1 mapping from an alias to a new pool
        -   `alias` pool to replace
        -   `target` pool to replace with
    -   `random` 1:n mapping where a pool from `n` is randomly selected for the structure instance
        -   `alias` pool to replace
        -   `targets` randomized list of candidate pools to replace `alias` with
    -   `random_group`
        -   `groups` each group is a randomized list of above alias types
        -   only one group is selected per structure instance
        -   this enables modelling selections such as "if pool X is replaced with X1, also replace pool Y with Y1"

## Data Pack Version 22

-   Added `tick` command
-   Added two new input fields for Selection Priority and Placement Priority in the Jigsaw block edit screen
-   Added `item` to `minecraft:arrow` and `minecraft:spectral_arrow`, this is the item that will be picked up
-   Renamed `Trident` to `item` in `minecraft:trident`

### `tick` Command

Added a new `tick` command. This is an adminstative and debugging command that allows control of the ticking flow and measuring the performance of the game. The command requires elevated permissions (admins and above) and so it is not by default available in command blocks and datapacks.

Syntax:

`tick query` - outputs the current target ticking rate, with information about the tick times performance.

`tick rate <rate>` - sets a custom target ticking rate to the specified value. The value must be greater than 1.0 and lower than 10000.0. Setting a very low tick rate can cause the game to feel unresponsive and setting too high tick rate for your system can cause the game to crash as the game now assumes it is constantly falling behind the ticking target. Please use `tick query` or `<F3> + 2` (Integrated server only) debug screen to measure the performance of the game and adjust the tick rate accordingly. Setting a tick target lower than the default `20.0` will also cause the players to be simulated at a lower rate (including player movement and input controls), while setting a higher tick rate will cause the players to be simulated at the default rate of `20` ticks per second to maintain the expected responsiveness of the game, but can cause artifacts in entities interpolation.

`tick freeze` - freezes all gameplay elements, except for players and any entity a player is riding. This is useful for debugging and isolating issues with the game allowing the player to move around freely and inspect the world.

`tick step [<time>]` - Only works when the game is frozen. It runs the game for the specified number of ticks and then freezes the game again. This allows to step through the game a set amount of ticks at a time. If no time is given, steps 1 tick.

`tick step stop` - stops the current stepping process, and re-freezes the game.

`tick unfreeze` - unfreezes the game and resumes all gameplay elements.

`tick sprint <time>` - runs the game while ignoring the set ticking target rate (meaning that the game will run as fast as possible) for the specified number of ticks. At the end of the sprint, the game will resume the previous ticking target and display performance information about the tick times while sprinting. This is especially useful for testing gameplay elements that are time-dependent, such as Redstone contraptions, or mob behaviour in isolated environments that allow for much faster simulation.

`tick sprint stop` - stops the current tick sprint, and resumes the previous ticking target.

![Minecraft Java Edition 1.20.3 Image 3 Thumbnail](https://launchercontent.mojang.com/images/1.20.3_image_3_tn.jpg)

### Jigsaw Selection & Placement Priority

-   Selection Priority
    -   When the parent piece is being processed for connections, this controls the order in which this Jigsaw block attempts to connect to its target piece
    -   Jigsaws will be processed in descending priority order and randomly within the same priority
-   Placement Priority
    -   When this Jigsaw block connects to a piece, this is the order in which that piece is processed for connections in the wider structure
    -   Pieces will be processed in descending priority order with the default insertion order breaking ties within the same priority
-   This functionality has been added to support the ability for Jigsaw structures to generate branches in a depth-first order, as well as give finer control over ordering of connections
-   All existing Jigsaw blocks will default their Selection and Placement Priority to 0, resulting in the same behaviour as before these two configurable values were introduced

## Data Pack Version 23

-   Decorated Pots can now utilize loot tables and will read from the `LootTable` tag key
-   Additional changes to command functions

### Commands

#### `return`

-   `return run` will now always return
    -   If there are no valid results from the returned command, the function containing the `return run` will fail (i.e. `success=0` and `result=0`)
-   `return run` will now propagate the success value together with the results value (previously it always set success to `1`)
-   `return run` now also allows storing values - that means `execute store ... run return run some_command` will both store the value and return it outside the function
-   A new subcommand `return fail` has been added to make the whole function fail (i.e. return `success=0` and `result=0`)

#### `function`

-   If `function <function tag>` runs multiple functions in combination with `return run`, execution will stop after first `return` in any of the functions
-   A single call to the `function` command will always return when run with `return run`
    -   For example, `return run execute [split context] run function <some function with conditional return>` will always return after processing the first context

#### `execute if|unless function`

-   `execute if|unless function` no longer always fails if none of the functions had a `return`
    -   If there were no `returns` in called functions, `if` will fail and `unless` will pass
    -   The first `return` in any of called functions will return (for a single context)

## Data Pack Version 24

-   Increased maximum value of Jigsaw structure variable `size` from 7 to 20

## Data Pack Version 25

-   Added individual display names for scoreboard entries
-   Scoreboard sidebar will now render even when if there are no scores in selected objective

### Commands

#### `scoreboard`

##### Display Names

Each entry in a scoreboard can now have a custom display name.

-   These values are kept separate per objective and score holder
-   If the name is not present, the score holder name is used (i.e. the old behavior)
-   If the score is reset or the whole objective is removed, the name is not preserved
-   Team decorations will still be applied to names as normal
-   Subcommands for managing names:
    -   `scoreboard players display name <targets> <objective> <text component>` - set display name
    -   `scoreboard players display name <targets> <objective>` - clear display name

##### Display Name Auto-Update

To make display name management easier, objectives can also be configured to auto-update display names on every score update.

-   This option is disabled by default
-   If a score holder has no display name (because it can't be attributed to any currently loaded entity), the current name is preserved
-   Command to control auto-update for objective:
    -   `scoreboard objectives modify <scoreboard> displayautoupdate [true|false]`

##### Number Formatting

Scores in numeric form can now be formatted.

-   Formats can be set for both objectives and individual scores
-   Scores with set formats will render the same in all context (sidebar, under player name, etc.)
-   Subcommands for managing formats:
    -   `scoreboard objectives modify <objective> numberformat <format>` - set the default format for an objective
    -   `scoreboard objectives modify <objective> numberformat` - clear the default format for an objective
    -   `scoreboard players display numberformat <targets> <score> <format>` - set the format for a specific score holder
    -   `scoreboard players display numberformat <targets> <score>` - clear the format for a specific score holder
-   Formats:
    -   `styled <style>` - the score will be displayed with selected style (like `{"bold":true}`)
    -   `fixed <text component>` - the score will be replaced with the text component
    -   `blank` - the score will not be displayed

## Data Pack Version 26

-   Renamed `minecraft:grass` block and item to `minecraft:short_grass`

## Resource Pack Version 19

-   Added block model, item model and block state definitions for `crafter`
-   Added GUI container texture and sprites for `crafter`
-   Added `white_smoke` particle definition

## Resource Pack Version 20

-   `bat.png` has been updated for the new Bat model with new texture mapping
-   Added block models, items models and block state definitions for the following blocks:
    -   `chiseled_copper`, `exposed_chiseled_copper`, `weathered_chiseled_copper`, `oxidized_chiseled_copper`
    -   `copper_grate`, `expxosed_copper_grate`, `weathered_copper_grate`, `oxidized_copper_grate`
    -   `copper_bulb`, `exposed_copper_bulb`, `weathered_copper_bulb`, `oxidized_copper_bulb`
    -   `copper_door`, `exposed_copper_door`, `weathered_copper_door`, `oxidized_copper_door`
    -   `copper_trapdoor`, `exposed_copper_trapdoor`, `weathered_copper_trapdoor`, `oxidized_copper_trapdoor`
    -   `tuff_stairs`
    -   `tuff_slab`
    -   `tuff_wall`
    -   `chiseled_tuff`
    -   `polished_tuff`
    -   `polished_tuff_stairs`
    -   `polished_tuff_slab`
    -   `polished_tuff_wall`
    -   `tuff_bricks`
    -   `tuff_brick_stairs`
    -   `tuff_brick_slab`
    -   `tuff_brick_wall`
    -   `chiseled_tuff_bricks`
-   Added unique sprites for the following blocks:
    -   `chiseled_copper`, `exposed_chiseled_copper`, `weathered_chiseled_copper`, `oxidized_chiseled_copper`
    -   `copper_grate`, `expxosed_copper_grate`, `weathered_copper_grate`, `oxidized_copper_grate`
    -   `copper_bulb`, `exposed_copper_bulb`, `weathered_copper_bulb`, `oxidized_copper_bulb`
    -   `copper_door`, `exposed_copper_door`, `weathered_copper_door`, `oxidized_copper_door`
    -   `copper_trapdoor`, `exposed_copper_trapdoor`, `weathered_copper_trapdoor`, `oxidized_copper_trapdoor`
    -   `chiseled_tuff`
    -   `polished_tuff`
    -   `tuff_bricks`
    -   `chiseled_tuff_bricks`

## Resource Pack Version 21

-   The `uniform` font has been updated to use Unifont 15.1.04 (from 15.0.06)
-   The only supported texture format is now `.png`

### Breeze Mob

-   Added entity models and textures for experimental Breeze mob:
    -   `breeze`, `wind_charge`
-   Added shader:
    -   `breeze_wind`

## Resource Pack Version 22

-   Renamed `minecraft:grass` block and item to `minecraft:short_grass`

## Experimental Features

### Crafter

-   The Crafter is a new block that enables the crafting of items and blocks via Redstone
-   The Crafter will eject one crafted item at a time when powered by a Redstone pulse
-   Upon receiving a signal, the Crafter will eject the recipe result from the front face
-   If the output result has multiple types of items, all the result items will be ejected together
-   When placed, the front face of the Crafter will face towards the Player

#### Crafter User Interface

-   The Crafter has a 3x3 interactable crafting grid
-   The Crafter’s crafting grid slots are toggleable, meaning that the player can change the behavior of a slot by interacting with it while not holding an item
-   A slot that is ‘toggled’ cannot hold any items
    -   Other blocks such as Hoppers and Droppers also cannot place items into them
-   Unlike the Crafting Table, the Crafter displays a preview of the crafted item which will be crafted and ejected on the next Redstone pulse, but cannot be manually taken out by the player
-   The Crafter User Interface is shared between all players interacting with it, meaning that multiple players can interact with the Crafter at the same time, similar to Chests and Hoppers

#### Crafter Interaction with Other Blocks

-   The signal strength of a Comparator reading a Crafter is 0-9, where each non-empty or toggled slot adds 1 strength
-   Hoppers and Minecarts with Hoppers can be used to both insert and extract items from the Crafter
-   Droppers can be used to insert items into the Crafter
-   Items inserted from another block (ex: Hopper, Dropper) will fill the Crafter's slots based on these rules:
    -   Prioritize the first empty slot (from left-to-right, top-to-bottom)
    -   If there are no empty slots then prioritize the smallest stack of the same item (pick the first if there are multiple)
    -   If there is a toggled slot it will be skipped. The item will then be moved into the container
    -   If the item cannot be moved, it will be ejected into the world
-   Items are removed from Crafters by Hoppers and Minecarts with Hoppers in the same order as from other containers like Chests

![Minecraft Java Edition 1.20.3 Experimental Image 3 Thumbnail](https://launchercontent.mojang.com/images/1.20.3_experimental_3_tn.jpg)

### Copper Family

The Copper family of blocks has been expanded, including:

-   Chiseled Copper
-   Copper Grate
-   Copper Bulb
-   Copper Door
-   Copper Trapdoor
-   Oxidized and waxed variants of all of the above

#### Chiseled Copper

-   Crafted with 2 Cut Copper Slabs of a shared oxidation level
-   Can be crafted in the Stonecutter

#### Copper Grate

-   A new type of decorative block unique to the Copper family
-   Crafted with 4 Copper Blocks of a shared oxidation level
    -   Can be crafted in the Stonecutter
-   Properties:
    -   Transparent and allows light to pass through
    -   Mobs cannot suffocate inside them
    -   Cannot conduct Redstone
    -   Hostile mobs cannot naturally spawn on them
    -   Can hold Water

#### Copper Bulb

-   A light-emitting block that can toggle its light emission through Redstone pulses
-   Oxidizes like other Copper blocks, and emits light based on oxidation level
    -   Copper Bulb: Light level 15
    -   Exposed Copper Bulb: Light level 12
    -   Weathered Copper Bulb: Light level 8
    -   Oxidized Copper Bulb: Light level 4
-   When placed, its light is off by default
    -   While the Copper Bulb is unpowered, it will toggle its light on or off when it receives a Redstone pulse
    -   Copper Bulb light will stay on even when the Redstone source is removed until it receives another Redstone pulse to toggle it off
-   A Redstone crystal will glow in the center of Copper Bulbs while it is powered by a Redstone signal
-   Comparators will read a signal strength of 15 if the Copper Bulb's light is on
-   Copper Bulbs do not conduct Redstone power
-   The crafting recipe for 4 Copper Bulbs is:
    -   3 Copper Blocks of a shared oxidation level
    -   1 Blaze Rod
    -   1 Redstone Dust

#### Copper Doors and Trapdoors

-   Copper variants of Doors and Trapdoors that can oxidize over time and be waxed
-   Works like wooden doors in that they can be opened and closed with interaction, as well as Redstone
-   Crafted with Copper Blocks that have a shared oxidation level

### Tuff Family

Tuff has been expanded to have its own family of blocks, including:

-   Stair, Slab, Wall and Chiseled variants
-   Tuff Bricks with Stair, Slab, Wall and Chiseled variants
-   Polished Tuff with Stair, Slab and Wall variants

All Tuff variants can be crafted in the Stonecutter.

### Added Breeze Mob

-   The Breeze is a cunning hostile mob spawned by the Trial Spawner in some rooms within the Trial Chambers
-   The Breeze moves primarily by leaping around its target
-   An aggressive adversary, the Breeze shoots volatile wind energy in the form of Wind Charge projectiles at its target
-   Wind Charges deal a small amount of damage when colliding directly with an entity
-   After colliding with an entity or a block, Wind Charge projectiles produce a Wind Burst, which knocks back entities in the area
-   Wind Charges break decorated pots and chorus flower blocks upon collision
-   Wind Bursts also have the effect of 'activating' certain blocks:
    -   Non-Iron Doors and Trapdoors are flipped
    -   Fence Gates are flipped
    -   Buttons are pressed
    -   Levers are flipped
    -   Bells are rung and swung
    -   Lit Candles are extinguished
-   Wind Bursts do not have any effect on Iron Doors, Iron Trapdoors, or any block being held in its position by a Redstone signal

![Minecraft Java Edition 1.20.3 Experimental Image 1 Thumbnail](https://launchercontent.mojang.com/images/1.20.3_experimental_1_tn.jpg)

### Trial Spawner

-   The Trial Spawner is a new variant of Monster Spawners that ejects rewards upon completion
-   The challenge level will increase for each new player a Trial Spawner notices nearby
    -   The challenge level will not decrease until it is reset during a Trial Spawner's cooldown
-   Unlike normal Spawners, a Trial Spawner will spawn a limited number of mobs proportional to its current challenge level
    -   It can only spawn a mob at positions that are within line of sight
    -   It can spawn a mob regardless of any light level requirement the mob has
    -   Spawned mobs are persistent
-   Once all mobs are defeated, the Trial Spawner will eject a set of rewards proportional to the current challenge level
    -   After the rewards have been ejected, the Trial Spawner goes into cooldown for 30 minutes, during which it will no longer spawn mobs
-   Trial Spawners cannot be crafted nor obtained by players in Survival - instead, they can be found naturally placed throughout Trial Chambers
-   Trial Spawners are extremely slow to mine and resistant to explosions, and will not drop even with Silk Touch
-   When placed in Creative, Trial Spawners have no mob type set by default
    -   The mob type can be set by interacting with it while holding a Spawn Egg
-   Creative and Spectator players cannot be detected or noticed by Trial Spawners

![Minecraft Java Edition 1.20.3 Experimental Image 2 Thumbnail](https://launchercontent.mojang.com/images/1.20.3_experimental_2_tn.jpg)

### Trial Chambers

-   Trial Chambers are a new structure in the Overworld where players can explore and take on combat challenges
    -   Trial Chambers are made out of a variety of Copper and Tuff blocks, and can be found in different sizes
    -   Trial Chambers are a relatively common find throughout the Deepslate layer of the underground
-   The layout of each Trial Chamber is procedurally generated, and can include traps, Reward Chests and a variety of combat areas
    -   Supply Chests can be found between different rooms, and give you blocks and items which help you navigate your trials
    -   Reward Chests are guarded by challenges in each room, and can be a source of many high level enchanted books and equipment
    -   The loot found in Reward Chests are still being iterated, and are absolutely not final
-   Each Trial Chamber will include Trial Spawners with a melee, small melee, or ranged category:
    -   Melee
        -   Zombie
        -   Husk
        -   Slime
    -   Small Melee
        -   Spider
        -   Cave Spider
        -   Baby Zombie
        -   Silverfish
    -   Ranged
        -   Skeleton
        -   Stray
        -   Skeleton with Poison Tipped Arrows
-   Each Trial Spawner category will only use one mob for the entire structure when generated, and these mobs are randomized for each Trial Chamber
    -   For example, one Trial Chamber might only spawn Zombies, Cave Spiders and Strays, while another might only spawn Slimes, Silverfish and Skeletons
    -   The exceptions to this are some Trial Spawners in unique rooms which always spawn Breezes
-   Natural mob spawning does not occur within Trial Chambers

#### Known Issues

-   The corridors sometimes end with a dead end
-   Aquifers, Lush Caves, and Sculk Veins sometimes intersect with the Trial Chamber

### Trial Key

-   An item that can only be obtained from Trial Spawners
-   Trial Keys do not currently have any functionality

## Fixed bugs in 1.20.3

Around 85 bugs were fixed in this release. View the [list on the issue tracker](https://bugs.mojang.com/issues/?filter=27936).

---

# Minecraft: Java Edition 1.20.2

We're now releasing 1.20.2 for Minecraft: Java Edition. This release comes with more diamond ore in the deep regions of the world and changes to mob attack reach as well as optimizations to the game's networking performance enabling smoother online play even on low-bandwidth connections.

This release also includes new features for map makers and pack creators like macro functions, a random command and pack overlays.

With 1.20.2, we are making some important updates to our Player Reporting Tool to better protect the online safety of our players. You will now be able to report player skins and usernames that violate our Community Standards.

The optional Villager Trade Rebalance Experiment also makes its debut in this version with changes to trades in the making that you can try out.

## New Features

### Player Skin & Name Reporting

We are making some important updates to our Player Reporting Tool to better protect the online safety of our players.

Playing Minecraft should be an inclusive and safe experience for everyone, which is why alongside in-game chat messages, you will now be able to report player skins and usernames that violate our Community Standards in Java Edition.

Just like with chat reports, nothing is automated. Any reported skin or username will be reviewed manually by a team of trained Minecraft moderators, who will use the submitted evidence to decide whether the skin and/or username is in breach of our Community Standards. Skins that are in violation of these standards will be removed from Minecraft and will no longer be accessible for use by any player. Usernames that are in violation of these standards will need to be changed before that player can play online via a shared server or Realm; though single player mode will still be accessible. To find out more about this and other safety policies, including more detail on the suspension procedure, appeals process, and how we handle malicious or repeat reporting, please visit our dedicated [FAQ page](https://help.minecraft.net/hc/en-us/articles/7317376541197).

-   Player Skins and Names can now be reported in the Social Interactions Screen
-   If a skin or name is reported, and found to be violating the [Community Standards](https://www.minecraft.net/community-standards), our team of human moderators can action in a few ways:
    -   Ban the skin from being used by any player
    -   Ban the name from being used by any player
    -   Suspend the player from online play in the case of repeated offences
-   When a skin is banned, players with that skin:
    -   Will have their skin removed
    -   Will be notified when they launch the game
    -   Will be automatically assigned one of the default skins
    -   Can still play multiplayer and singleplayer
    -   Can select a new custom skin at any time
-   When a player's name is banned, that player:
    -   Will need to choose a new name
    -   Will be notified when they launch the game
    -   Will not be able to play online until they change their name
    -   Can still play singleplayer
-   A skin or name that has been banned cannot be used by any player in the future

## Changes

-   The calculations to determine whether a mob can attack a player or other mobs have been changed
-   Diamond Ore is now generated more frequently in the Deepslate layers of the Overworld
-   Optimizations to networked play
-   Curing a Zombie Villager now only gives a big discount the first time
    -   There is no longer a bonus discount for reinfecting and curing the same Villager multiple times
-   Sponges and Wet Sponges now have their own custom sounds
-   Barrier blocks can now be waterlogged by players in Creative mode
    -   Water cannot be placed in them or taken out by non-direct interactions such as Dispensers
-   The positions that all entities ride on other entities have been adjusted to make more sense
-   Added the "Narrator Hotkey" accessibility option (default on)
    -   The narrator can be toggled on and off with `Ctrl+B` when this is on
-   Added "I want to report them" Player Reporting category
-   Removed Herobrine

### Mob attack reach changes

The calculations to determine whether a mob can attack a player or other mobs have been changed. Previously a mob's horizontal width was used to determine their attack reach and their height had no effect. The area where a mob can attack is now their bounding box extended in horizontal directions.

Here are some situations where the new rules will affect the reach of mobs:

-   If a mob is entirely below you, or entirely above you, it will not be able to reach you
-   While riding on a medium-sized mob, like a Horse, you will be protected from small mobs, like Baby Zombies
-   While riding on a tall mob, like a Camel, you will be protected from standard-size mobs, like Zombies
-   Also, Ravagers won't be able to attack you through a few block thick walls anymore
-   However, to escape from an Enderman, you need to be at least 3 blocks above the ground, not 1.5 as before
-   Mobs will be able to attack you with the bottom of their hitbox, assuming your head is in range
-   Builds that trap hostile mobs might need to be adjusted to be safe

This change does not affect the reach of players, and mobs still need to see their target to attack it.

### Networked Play

The Multiplayer mode of the game has been optimized to enable more fluid online play. If you have previously experienced disconnections or slow loading into online servers, this version may significantly improve that experience.

-   The game world will now show earlier instead of the loading screen while loading into a world on a server
-   Clients with extremely low-bandwidth connections will not time out while loading the world
-   Clients with low-bandwidth connections can interact with the world while some chunks are still loading

### Vibrations

-   Vibrations no longer risk being lost on simulation distance limit
-   Using Bone Meal emits an `item_interact_finish` vibration of frequency 3
-   Unequipping items emits a new `unequip` vibration of frequency 4
-   Camels eating Cactus emit an `eat` vibration of frequency 8
-   Carrots being eaten by Rabbits emit a `block_change` vibration of frequency 11
-   Sweet Berries being eaten by Foxes emit a `block_change` vibration of frequency 11
-   Chiseled Bookshelves emit a `block_change` vibration of frequency 11 when receiving books from Hoppers
-   Turtle Eggs cracking emit a `block_change` vibration of frequency 11
-   Turtle Eggs hatching emit a `block_destroy` vibration of frequency 12
-   Fire being doused by Water Potion emits a `block_destroy` vibration of frequency 12
-   Evokers evoking Vexes or Fangs emit an `entity_place` vibration of frequency 14

### Miscellaneous Minor Tweaks

-   Chorus Flower no longer provides support for hanging or standing blocks
-   Updated structure icons on Explorer Maps sold by Cartographers
-   When Villagers unlock new trades, the order of those trades in the UI is now always random instead of sometimes being deterministic
-   The sizes of text fields in the user interface are now consisent with the size of buttons

![1.20.2 Release Image 4](https://launchercontent.mojang.com/images/1_20_2_release_4.jpg)

## Technical Changes

-   The resource pack version is now 18
-   The data pack version is now 18
-   History of used commands is now saved and accessible across worlds
-   Optimized networking to improve the experience on low bandwidth connections
-   Added support for multi-version packs
-   Changed network protocol to allow for more data-driven content in the future
-   Added new `log-ips` option to `server.properties`
-   Added validation for symbolic links in datapacks and resource packs
-   When hitboxes are displayed through F3+B, entities that have a passenger will display the passenger's attachment point
-   The charts on the debug screen can now be toggled with F3+1 (pie chart) and F3+2 (FPS and TPS) instead of holding Shift or Alt while opening the screen
-   Pressing F3+3 will now show charts for ping and received network traffic on the debug screen
-   The `LWJGL` library has been upgraded to version 3.3.2
-   The default Java version shipped with the game has been upgraded to Microsoft OpenJDK 17.0.8

### Command History

-   The last 50 commands that you sent in chat will be remembered across game sessions
-   You can access the command and chat history by pressing up or down arrows in the chat
-   Regular chat is only persisted within the same game session (leaving a server or world clears them)
-   Recent commands are stored in `command_history.txt` in the game folder

### Network optimizations

-   Gameplay packets are now packed into bigger TCP packets to reduce overhead from TCP headers, significantly reducing network usage
-   Chunks are not sent over the network to the client in one big continuous batch anymore
-   Chunks are instead sent in smaller batches depending on the available bandwidth, meaning that:
    -   Clients with extremely low-bandwidth connections will not time out while loading the world
    -   Clients with low-bandwidth connections can interact with the world while some chunks are still loading
-   Only chunks within the client's render distance are now sent

### Multi-version Packs

New features have been added to datapacks and resource packs to allow creation of packs that are compatible with multiple versions of game.

#### Pack Metadata

-   Pack metadata now includes an optional field `supported_formats` which describes a range for pack formats that this pack supports
    -   Examples: `16`, `[16,17]`, `{"min_inclusive": 16, "max_inclusive": 17}`
-   `pack_format` field is still required and its format remains unchanged, to allow older game versions to read pack data
    -   If `supported_formats` is present, it must contain the value declared in `pack_format`
    -   Note: since this new information is ignored by older versions of the game, they will always see a "normal", single-version pack, without any extended compatibility

#### Overlays

-   Packs can now contain overlay directories ("overlays")
-   Overlays are sub-packs applied over the "normal" contents of a pack
    -   These directories have the same layout as the top-level pack, including the `assets` and `data` directories
    -   Overlays can be applied if they support the client's pack format
    -   Overlays can add and replace files, but not remove them
        -   For example, if the overlay `foo` is applied, the file `foo/assets/minecraft/textures/bar.png` will replace the contents of `assets/minecraft/textures/bar.png`
    -   `pack.mcmeta` and `pack.png` are ignored in overlay directories
-   New section called `overlays` have been added to pack metadata
    -   It contains an `entries` field, containing a list of overlays
    -   Every overlay entry has two fields:
        -   `formats` - range of supported formats
        -   `directory` - overlay directory (allowed characters: `a-z`, `0-9`, `_` and `-`)
-   Order of application: overlays are stacked from the bottom to top of the list
    -   For example, if a pack has two overlays: `"entries": [{"directory":"A", ...}, {"directory":"B", ...}]`, the game will first look in `B`, then `A` and then in the top pack directory

### Symbolic Link Validation

To improve safety, the game will now also detect symbolic links used inside data- and resource packs.

-   This feature expands on symbolic link validation in worlds added in the previous release
-   The game will now warn users if a pack added via drag and drop contains disallowed symbolic links
-   Packs containing disallowed symbolic links will not be visible in UI and commands
-   Additionally, directories and files that are not recognized as packs will no longer be copied via drag and drop
-   For a detailed explanation, see this [help article](https://aka.ms/MinecraftSymLinks)

### Network Protocol

As part of ongoing work towards more data-driven features, the network protocol has been changed to include a new configuration phase.

-   Configuration phase automatically starts after login phase (i.e. after client account has been verified) and lasts until the player joins the world (play phase)
-   Clients can stay in configuration phase indefinitely - it's up to the server to release it to the world
-   Servers can also request clients to re-enter the configuration phase after it has entered the play phase
    -   Other players will see such clients as disconnected
-   Users in configuration phase will not be visible on the player list
-   Actions allowed in configuration phase (moved from play phase):
    -   Configuration of data-driven registries
    -   Configuration of enabled features
-   Actions shared between configuration and play phases:
    -   Application of server resource packs
    -   Update of tags
    -   Exchange of custom packets
    -   Ping and keep-alive packets
    -   Sending of client options
-   The server will now negotiate resource packs in the configuration phase
    -   This means that the player will no longer be in the world when answering prompts and reloading resources

#### Secure Chat

-   Clients will no longer disconnect themselves when receiving an invalid chat message
    -   A placeholder message will instead be shown in chat

### `server.properties`

-   New option: `log-ips` (default `true`)
    -   When set to `false`, will prevent player IPs from being included in the log when players join the game

### Telemetry

-   Added a button to the Telemetry Data Collection Screen that links to the Microsoft Privacy Statement

## Resource Pack Version 16

-   The process of upgrading your pack can be assisted by using this automated [Slicer](https://github.com/Mojang/slicer/releases/tag/v1.1.2) tool
-   All textures containing multiple sprites in a sheet for GUI have been split into individual sprites under `textures/gui/sprites` (automated by the Slicer tool)
-   All textures in the `realms` namespace have been moved into the `minecraft` namespace (automated by the Slicer tool)
-   `villager2.png` has been renamed to `villager.png` (automated by the Slicer tool)
-   `icon/trial_available` and `realm_status/expires_soon` GUI sprites are animated with `.mcmeta` declarations instead of individual sprites (automated by the Slicer tool)
-   The Bundle tooltip background is now drawn as a nine-sliced sprite
-   The icons for the Accessibility, Language, Realms News buttons have been split from their underlying button texture
-   The Realms Invite button is now drawn as an overlay on the normal button texture
    -   The highlighted texture state for this button has been removed
-   The highlighted states for Realms invitation number icons have been removed
-   The exclamation marks on the `notification\more.png` have been removed

### GUI Sprite Sheet

-   Sprites used in GUI drawing have been split into individual sprite files instead of larger sprite sheets
    -   For example, `widgets/button.png` and `widgets/button_highlighted.png` have been split from `widgets.png`
-   Each sprite can now be individually overriden by a resource pack instead of replacing the entire sheet
-   Sprites are loaded into the `gui` atlas from the `textures/gui/sprites` directory

#### GUI Sprite .mcmeta

-   Any sprite used in the GUI can now be animated using `.mcmeta` files, similar to other atlases
    -   `icon/trial_available` and `realm_status/expires_soon` are now animated this way
-   Sprites in the `gui` atlas can now configure scaling behavior through a new `gui` section in `.mcmeta` files
    -   For example, button textures must be scaled based on how big the button should be
    -   The `gui` section in `.mcmeta` contains one `scaling` field:
        -   `type`: one of: `stretch` (default), `tile`, or `nine_slice`
        -   When `stretch`, the sprite will be stretched across the desired space
            -   No additional fields need to be defined
        -   When `tile`, the sprite will be repeated across the desired space, starting from the top-left
            -   `width`: number of pixels for this sprite to cover on-screen across its width
            -   `height`: number of pixels for this sprite to cover on-screen across its height
        -   When `nine_slice`, the sprite will be sliced into 4 corners, 4 edges, and 1 center slice, which will be tiled across the desired space
            -   `width`: number of pixels for this sprite to cover on-screen across its width
            -   `height`: number of pixels for this sprite to cover on-screen across its height
            -   `border`: the size in pixels that the border slices should cover on-screen, one of:
                -   Constant integer for uniform border size on all sides
                -   Object containing `left`, `top`, `right`, and `bottom`

## Resource Pack Version 17

-   The text field background is now a nine-sliced sprite at `widget/text_field` and `widget/text_field_highlighted`
-   The scroll bar in lists and text fields is now a nine-sliced sprite at `widget/scroller`

## Resource Pack Version 18

-   The `map_icons.png` texture now contains new icons

## Data Pack Version 16

-   Gamerule `randomTickSpeed` now affects the rate of accumulation of Snow and Ice the same way it affects crops and other blocks affected by random ticking
-   Added a `random` command
-   Added support for function macros
-   Changed Display entities' post-teleport interpolation
-   Added new attribute `generic.max_absorption`
-   Renamed `belowName` value in display slot argument in `scoreboard` command to `below_name`
-   Game event changes
-   New tags

### Commands

#### `random`

A new command for randomizing values and controlling random sequences. The `value` and `roll` forms can be used to draw a random value. In the case of `roll`, the resulting value is also shown in chat for all players.

Syntax:

    random value|roll <range> [<sequenceId>]
    random reset *|<sequenceId> [<seed>] [<includeWorldSeed>] [<includeSequenceId>]
    

Parameters:

-   `range`: A range of values to randomize between, inclusively
    -   For instance, 1..6 is a regular D6 roll
-   `sequenceId`: The name of a random sequence to sample or reset
-   `seed`: A seed to use for the random sequence after reset
-   `includeWorldSeed`: A boolean \[default: `true`\] specifying whether to include the world seed when seeding the sequence
    -   `false` means the sequence will evaluate to the same regardless of which world the command is run in
-   `includeSequenceId`: A boolean \[default: `true`\] specifying whether to include the sequence ID when seeding the sequence
    -   `false` means all sequences will evaluate to the same regardless of which name they have

By default, all sequences are seeded as `0`, `true`, `true`. Using `*` instead of a sequence ID resets all sequences and sets the default parameters.

If no seed is specified, the sequence resets to the default parameters.

Note that `random value|roll <range>` used without a sequence id is available to non-operator players.

### Functions

-   A single backslash `\` as the last non-whitespace character of a line now allows a command to be continued on the next line
    -   Leading and trailing whitespace of the following line are stripped before appending

#### Macros

Functions can now contain macro lines, making them Function Macros.

-   Any line beginning with `$` (as the first non-space character) marks a macro line
-   A macro line also contains one or more substitutions in the form of `$(variable)`
-   When calling a function macro a compound with data for all argument variables must be provided

##### Calling Function Macros

The `function` command has new forms:

`function <id> <compound>` `function <id> with <data source> [<path>]`

New Arguments:

-   `compound`: A data compound, enclosed in `{}`
-   `data source`: A data source specification, like what could already be used for `data get`
-   `path`: An NBT path specification

Notes:

-   The data source and path must specify a compound data entry
-   The compound must contain one entry for each variable used in the macro
-   More data may be present in the compound and if so is ignored
-   Calling a non-macro function with a data compound is silently ignored
-   When a macro is called, the values provided are substituted in place of the variable specifications and the resulting commands are executed
-   Any syntax errors in the lines resulting from variable substitution result in the entire function call being skipped

##### Performance Considerations

Using a macro means commands must be re-evaulated after variable substitution. This has an extra cost compared to running pre-parsed functions.

Regular commands (non-macro lines) are still pre-parsed. Only commands with variable substitutions in them are parsed when a macro is called and the game will attempt to cache the result of a certain parameter set being used in a call.

This makes repeated calls with the same parameter set cheaper than new calls with different parameters, but an overhead still remains compared to regular functions. Note that only the values references by macro as parameters are included in this cache, so any extra data in the provided compound is ignored.

### Display Entity Interpolation

-   Display entities now start updating their client-side position and rotation on the first tick after an update
    -   In previous versions, updates were applied in the same tick, causing uneven motion
    -   The new behavior is similar to Armor Stands, mobs and players
-   On the server, position and rotation are still updated immediately
-   The duration of this interpolation is controlled by the field `teleport_duration`
    -   `0` means that updates are applied immediately
    -   `1` means that the Display Entity will move from current position to the updated one over one tick
    -   Higher values spread the movement over multiple ticks
    -   Please note that this value is clamped to avoid glitches due to periodic position updates
    -   The new value will apply only to position and rotation changes made after it changed
        -   That means any current movement will continue unchanged
-   Note: behavior while riding remains unchanged from previous versions

### Attributes

-   Added new attribute `generic.max_absorption`
    -   `generic.max_absorption` acts similar to `generic.max_health`, but instead of being the upper bound for `Health`, it is the upper bound for `AbsorptionAmount`
    -   The mob effect `absorption` increases `generic.max_absorption` as well as fills the `AbsorptionAmount` to the max when applied

### Game Events

-   `entity_roar` and `entity_shake` game events have been removed and replaced with `entity_action` game event

### Tags

-   Added `no_knockback` damage type tag which causes knockback to not be caused by the damage itself
    -   Used in Vanilla for damage that is caused by events, such as explosions, which apply knockback separately
-   Added `non_controlling_rider` to represent entities that don't override their vehicles movement control
-   Added `concrete_powder` block tag for Concrete Powder blocks
-   Added `camel_sand_step_sound_blocks` block tag for blocks that produce `entity.camel.step_sand` sound

## Data Pack Version 17

-   Changed mob effect storage on items, entities and block entities
-   Added `decal` field to armor trim patterns (default: `false`)
    -   If `true`, the pattern texture will be masked based on the underlying armor

### Mob effect storage changes

-   The game no longer uses numeric values when storing mob effects to a world (so, for example, `4` becomes `minecraft:mining_fatigue`)
-   Various mob effect fields have been renamed for consistency with new structures

#### Mob Effect Instance

This structure is used in many places, so its changes are described separately.

-   `Id` -> `id`, also changed from number to string id
-   `Ambient` -> `ambient`
-   `Amplifier` -> `amplifier`
-   `Duration` -> `duration`
-   `ShowParticles` -> `show_particles`
-   `ShowIcon` -> `show_icon`
-   `HiddenEffect` -> `hidden_effect`, also since it's mob effect instance, changes apply recursively
-   `FactorCalculationData` -> `factor_calculation_data`

#### Items

##### `potion`, `lingering_potion`, `splash_potion`, `tipped_arrow`

-   `CustomPotionEffects` -> `custom_potion_effects`, contents tranformed as a list of mob effect instances

##### `suspicous_stew`

-   `Effects` -> `effects`, for each entry:
    -   `EffectId` -> `id`, also changed from number to string id
    -   `EffectDuration` -> `duration`

#### Entities

##### `mooshroom`

-   Removed `EffectId` and `EffectDuration`
-   Added `stew_effects` with the same format as `suspicious_stew.effects` tag (i.e. list of effect id and duration)

##### `area_effect_cloud`

-   `Effects` -> `effects`, contents tranformed as a list of mob effect instances

##### `arrow`

-   `CustomPotionEffects` -> `custom_potion_effects`, contents tranformed as a list of mob effect instances

##### Players, Armor Stands and mobs

-   `ActiveEffects` -> `active_effects`, contents tranformed as a list of mob effect instances

#### Block Entities

`beacon`

-   `Primary` -> `primary_effect`, also changed from number to string id
-   `Secondary` -> `secondary_effect`, also changed from number to string id

### Loot Tables

-   Added `sequence` loot function
    -   Contains 1 field:
        -   `functions`: an array of sub-functions to run in sequence
    -   Can also be declared as an inline array without a type
        -   This matches the existing behavior where loot function JSON files can be declared as an array of composite functions
-   `all_of` predicates in loot tables can now be declared implicitly as an inline array without a type
    -   This similarly matches the existing behavior where loot predicate JSON files can be declared as an array of sub-predicates
-   Block or fluid state property matchers in loot conditions no longer accept non-string values
    -   Any number or boolean value in a property matcher must be quoted

## Data Pack Version 18

This data pack version removes the `execute if function` and `return run` functionality that existed for a time during the development of this version. Flaws with those commands (see bugs [MC-264595](https://bugs.mojang.com/browse/MC-264595), [MC-264699](https://bugs.mojang.com/browse/MC-264699) and [MC-264710](https://bugs.mojang.com/browse/MC-264710)) require some substantial changes to fix, which we do not want to make close to a release.

These commands will instead be reintroduced early in the next snapshot series when we can take the time to iterate on and test them together with pack makers.

-   Removed `execute if|unless function` command form
-   Removed `return run` command form
-   Numbers used as macro arguments are now always inserted without suffixes, regardless of numeric type
-   Added game rule `enderPearlsVanishOnDeath`, controlling whether thrown Ender Pearls vanish when the player that threw them dies (default `true`, which matches the existing behavior in previous versions)
-   Added damage type tag `always_kills_armor_stands` for damage types that should always fully kill an Armor Stand

![1.20.2 Experimental Image 4](https://launchercontent.mojang.com/images/1_20_2_experimental_4.jpg)

## Experimental Features

### Villager Trade Rebalance

The Experiments screen when creating a world now has an option to enable the Villager Trade Rebalance. When this option is selected, some Villager trades will change.

This experiment has no effect on normal worlds. You can find more information about Feature Toggles [here](https://www.minecraft.net/article/testing-new-minecraft-features/feature-toggles-java-edition).

#### Librarian Changes

-   Librarians from different biomes now sell different Enchanted Books
-   Each village biome has one special enchantment that is only available from Master Librarians with full XP
-   This means that players must visit all seven village biomes to get the full set of villager enchantments
-   There are two secret village biomes where villages do not generate
    -   A player must build these villages to access their trades!
-   Some enchantments have been removed from village trading and must be found in other ways

#### Cartographer Changes

-   Cartographers can now sell seven new Explorer Maps
    -   Five new maps show the way to five different types of village
    -   The other two new maps show the way to a Swamp Hut and a Jungle Temple
-   Cartographers from different biomes now sell a different range of maps

#### Wandering Trader Changes

-   Wandering Traders now have lower prices and have a higher amount of each item in stock
-   Wandering Traders now sell Logs
-   Wandering Traders can now buy many items, instead of only selling

#### Armorer Changes

-   Armorer from different biomes now sell different Armor with different enchantments
-   Buying Diamond Armor now requires a small amount of Diamonds as well as Emeralds
-   Many other Armorer trades have been updated

#### Structure Loot

Certain Enchanted Books now have a high chance of generating in some structures:

-   Ancient Cities: Mending
-   Mineshafts: Efficiency (I to V)
-   Pillager Outposts: Quick Charge (I to III)
-   Desert Temples: Unbreaking (I to III)
-   Jungle Temples: Unbreaking (I to III)

## Fixed bugs in 1.20.2

Around 200 bugs were fixed in this release. View the [list on the issue tracker](https://bugs.mojang.com/issues/?filter=27828).

---

# Minecraft: Java Edition 1.20.1

It's barely been a week, and we're already releasing 1.20.1 for Minecraft: Java Edition. This hotfix update contains fixes for critical issues found in the 1.20 release.

Happy mining!

## Fixed bugs in 1.20.1

-   Fixed a disk permissions-related crash
-   [MC-263244](https://bugs.mojang.com/browse/MC-263244) The realms invitation icon that appears on the realms button in the main menu is displayed incorrectly
-   [MC-263245](https://bugs.mojang.com/browse/MC-263245) Buttons in the "Add Realm" interface within the realms menu no longer render
-   [MC-263296](https://bugs.mojang.com/browse/MC-263296) Game softlocks after cancelling joining a server
-   [MC-263340](https://bugs.mojang.com/browse/MC-263340) Incorrect Protochunk#setStatus call on chunk generate

---

# Minecraft: Java Edition 1.20

What, is there something special happening today? Hold on, let me grab my calendar book from my chiseled bookshelf.

Oh, it's time for Trails & Tales! How could I forget? Time to equip your new brush and ride your camel off to new adventures!

## New Features

-   All features and changes from the "Update 1.20" experimental pack are now part of the game
-   Added Archaeology
-   Added Sniffer mob, Torchflowers and Pitcher Plants
-   Added Camel mob
-   Added Smithing Template items and redesigned the Smithing Table
    -   Added a new armor trimming system to visually customize your armor
    -   Changed how Netherite equipment is crafted
-   Added the Cherry Grove biome and Cherry Wood Set
-   Added the Bamboo Wood Set
-   Added the Chiseled Bookshelf block
-   Added Hanging Signs
-   Improved customization options for Signs
-   Added the Calibrated Sculk Sensor block
-   Vibration resonance functionality has been added to Blocks of Amethyst
-   Added playable mob sounds with Mob Heads on Note Blocks
-   Added Piglin Mob Head
-   New music tracks added to Cherry Groves, Desert, Jungle, Badlands, and Flower Forest biomes
-   New Trails & Tales Advancements
-   Added support for Windows Aarch64/ARM64

### Archaeology

-   Added craftable Brush item
-   Added Suspicious Sand and Suspicious Gravel
    -   Suspicious Sand can be found in Desert Temples, Desert Wells and Warm Ocean Ruins
    -   Suspicious Gravel can be found in Cold Ocean Ruins and Trail Ruins
    -   These fragile blocks are hard to spot and easy to destroy, so be careful!
    -   Brushing Suspicious Sand or Suspicious Gravel with a Brush will extract objects that were buried long ago
-   Added the Trail Ruins, a buried structure from a lost culture
    -   Four types of Armor Trim Templates can be found here
    -   Trail Ruins can be found in Taigas, Snowy Taigas, all Old Growth forest biomes and Jungles
    -   A new music disc can be found by brushing suspicious blocks in this structure
        -   When put in a Jukebox, "Relic" by Aaron Cherof is played
-   Added Pottery Sherds
    -   Pottery Sherds have pictures on them
    -   A total of 20 sherd have been distributed between the 5 Archaeology sites: Desert Wells, Desert Temples, Cold Ocean Ruins, Warm Ocean Ruins, and Trail Ruins
    -   They cannot be crafted, and are only found by brushing Suspicious Sand or Suspicious Gravel

#### Decorated Pots

-   Crafting four Pottery Sherds together will create a Decorated Pot with a picture on each side
-   Brick items can be used instead of Pottery Sherds in the Decorated Pot recipe
    -   The sides that were made from Brick items will not have pictures
-   Smash a Decorated Pot with any block-breaking tool to break it apart and get the Pottery Sherds back
    -   Hitting the pot with bare hands, silk touch tools, or any other item will drop an intact pot instead
-   Crafted Decorated Pots with at least one pattern have a hover tooltip displaying the Sherd & Brick ingredients

### Sniffer

-   The Sniffer is the mob vote winner of Minecraft Live 2022
-   Sniffers are passive, friendly mobs
-   Sniffers sniff the air and occasionally dig for seeds, which produces a Torchflower Seed or a Pitcher Pod item
-   Sniffers can only dig grass and dirt-like blocks
-   Sniffers can be tempted by, and bred with Torchflowers Seeds

#### Sniffer Egg

-   Can be found by brushing the Suspicious Sand of Warm Ocean Ruins
-   When two Sniffers breed they do not immediately spawn a Snifflet; instead, a Sniffer Egg is dropped
-   When placed in the world, the Sniffer Egg will hatch after some time
    -   When placed on Moss, the Egg will hatch in approximately 10 minutes
    -   On all other blocks, it will hatch in approximately 20 minutes

#### Torchflowers

-   The Sniffer can occasionally sniff up a Torchflowers seed, and it can be used to breed two Sniffers
-   The Torchflower seed can be planted on Farmland and grows into a Torchflower
-   The full-grown flower can be harvested and replanted
-   The Torchflower can be crafted into Orange Dye

#### Pitcher Plant

-   The Sniffer can occasionally sniff up a Pitcher Pod item
-   The Pitcher Pod, when planted on Farmland, grows into a Pitcher Crop
-   The Pitcher Crop has five growth stages
-   Once fully grown, the Pitcher Crop can be harvested, yielding a two-block-tall Pitcher Plant
-   The Pitcher Plant can be crafted into Cyan Dye

### Camel

-   Camels can be equipped with a Saddle and ridden by two players
-   Camels spawn naturally when Desert Villages generate
-   Camels can be tempted by holding Cactus
-   Feed Cactus to Camels to breed them
-   Camels are tall
    -   Most hostile mobs will not be able to reach you when you are on a Camel
    -   They can walk over Fences and Walls
-   Camels randomly sit down
    -   While sitting, it is difficult to convince them to move
-   Camels can either walk slowly or sprint quickly
-   They can also dash forward but will lose stamina for a while when doing so

### Smithing

-   Smithing Tables have been redesigned into a workstation for physical equipment upgrades and modifications
-   Alongside slots for combining a piece of equipment and materials, there is now a required slot for an item type called Smithing Template
-   Smithing Templates define what type of upgrade you will be making to a piece of equipment
    -   It specifies both what type of items you can upgrade, and which ingredients are valid to customize the upgrade
    -   There are currently two categories of Smithing Templates: Armor Trim and Netherite Upgrade
-   Smithing Templates are consumed when used to upgrade an item in the Smithing Table
-   You can craft a copy of a Smithing Template in the Crafting Table with 7 diamonds + 1 block of material that the template is made out of + 1 smithing template, which will output 2 of the same Smithing Template

#### Netherite Equipment

-   Netherite equipment crafting now also requires a Netherite Upgrade Smithing Template
-   Netherite Upgrade Smithing Templates can be found randomly in all Bastion Remnant chests
    -   Every Treasure Room Bastion Remnant will contain 2 Smithing Templates
-   This change was made for a variety of reasons:
    -   Increase the time players utilize Diamond equipment before Netherite
    -   Make Netherite equipment more significant achievement in the game's progression
    -   Adapt Netherite more naturally into the new Smithing Table crafting system

#### Armor Trims

-   You can now visually customize your armor with a variety of unique trims at the Smithing Table
-   Armor trims are purely visual with no gameplay benefits
-   Armor trims can be applied to Helmets, Chestplates, Leggings and Boots
    -   All trim patterns are visually the same on an armor's item icon, but the color will still change based on the trim material
    -   To check which trim pattern a piece of armor has, you can hover over it in the inventory
-   Armor Trim Smithing Templates can be found all throughout the world, and each of the following structures contain their own unique Smithing Templates:
    -   Trail Ruins: Wayfinder, Raiser, Shaper, and Host Armor Trims
    -   Pillager Outpost: Sentry Armor Trim
    -   Desert Pyramid: Dune Armor Trim
    -   Shipwreck: Coast Armor Trim
    -   Jungle Temple: Wild Armor Trim
    -   Ocean Monument: Tide Armor Trim
    -   Ancient City: Ward and Silence Armor Trims
    -   Woodland Mansion: Vex Armor Trim
    -   Nether Fortress: Rib Armor Trim
    -   Bastion Remnant: Snout Armor Trim
    -   Stronghold: Eye Armor Trim
    -   End City: Spire Armor Trim
-   Smithing Templates are found in chests in their respective structure
    -   Trail Ruins have no chests, Smithing Templates are instead found by brushing Suspicious Gravel
    -   The Ocean Monument has no chests, Elder Guardians sometimes instead drop a Smithing Template upon death
-   Some Armor Trim Smithing Templates are rarer than others, so be on the lookout for them to impress your friends!
-   An armor trim has two properties: a pattern and a material
    -   The pattern is defined by the Smithing Template used to apply the trim, and represents the visual pattern of the trim
    -   The material is defined by which ingredient you used to apply the trim, and controls the color of the trim
-   The viable ingredients you can use to define the color of your armor trim are the following:
    -   Iron, Copper, Gold, Lapis, Emerald, Diamond, Netherite, Redstone, Amethyst, Quartz

### Cherry Groves

-   Added a new Cherry Grove biome, with pretty cherry blossom trees
    -   The biome can be found in the mountains, in similar places as Meadows
-   Added a new Cherry wood set, with all the corresponding wooden things you can craft from it
-   Pink particles fall from beneath Cherry Leaves
-   Added a new Pink Petals block with lots of pink flowers on the ground
    -   Each Pink Petal block can contain up to 4 petals
    -   Using Bone Meal on it increases the number of petals
    -   Placing a Pink Petal into an already placed block increases the number of petals
    -   Drops the number of petals in the block when mined

### Bamboo Wood Set

-   Added a new Bamboo wood set, with all the corresponding wooden things you can craft from it
-   Block of Bamboo can be crafted from 9 Bamboo and can be stripped like other wood logs
-   Bamboo Planks crafted from Block of Bamboo yield only 2 planks compared to 4 for wood logs
-   Added a new "Mosaic" plank variant that is unique to Bamboo called the Bamboo Mosaic
    -   It can be crafted with 1x2 Bamboo Slabs in a vertical strip
    -   You can craft Stair and Slab variants of Bamboo Mosaic
    -   Bamboo Mosaic blocks cannot be used as a crafting ingredient where other wooden blocks are used, but they can be used as fuel
-   Added a unique Bamboo Raft and Bamboo Chest Raft which can be crafted like normal boats, but with Bamboo Planks
    -   They function the same as ordinary boats, but have a unique look to them

### Chiseled Bookshelf

-   A new, chiseled variation of the Bookshelf
-   Crafted with 6 planks and 3 wooden slabs
-   Can store Books, Book and Quills, Written Books, Enchanted Books, and Knowledge Books
    -   Holds up to 6 books
    -   These can be added or removed from any slot by targeting the specific slot
-   The Comparator signal strength corresponds to the number of the last book that was inserted or removed
    -   The numbering of book slots starts from 1 at the top-left, and increments from left-to-right
-   Works with Hoppers

### Hanging Signs

-   Hanging Signs are a more expensive version of normal Signs
    -   Crafted with 2 chains and 6 stripped logs of your preferred wood type
    -   Crafting results in 6 Hanging Signs
-   Can be hung up in the following ways:
    -   Underneath a block that can provide support in the center, like a full block or a fence
    -   Attached to the solid side of a block
    -   Attached to the side or underneath another Hanging Sign
-   Unlike normal Signs, they cannot be placed directly on the ground without support from the side or above
    -   However, Hanging Signs that have a horizontal bar will not pop when the supporting block is removed

### Signs

The following changes have been made for both Signs and Hanging Signs.

-   Sign text can now be edited after being placed in the world
    -   This can be done by interacting with the Sign
    -   Signs with non-text chat components can not be edited
-   Both sides of the Sign can now have separate text and colors, allowing for further customization options
    -   By default, a Sign will prompt you to input the front side's text when placed
    -   To apply text to the back-side, you must walk to the other side and interact with that face to edit it
-   Signs can now also be waxed with Honeycomb, preventing any further edits to its text
-   Opening the sign edit screen in singleplayer no longer pauses the game

### Calibrated Sculk Sensors

-   A new variant of Sculk Sensors that allows you to filter vibrations based on their frequency level
-   They are not found naturally and can only be crafted with 1 Sculk Sensor and 3 Amethyst Shards in the Crafting Table
-   One side of the Calibrated Sculk Sensor can receive a redstone signal as input
    -   The strength of that redstone signal is the only vibration frequency the Sculk Sensor will listen to
-   They have a combined active and cooldown phase that lasts 20 game ticks
    -   They output their redstone signal for the first 10 game ticks
-   They can detect vibrations up to 16 blocks away

### Vibration Resonance

-   Blocks of Amethyst have a new behavior when placed adjacent to Sculk Sensors
    -   If that Sculk Sensor receives a vibration, the Block of Amethyst will re-emit its frequency as a separate vibration at its location
-   This behavior is called Vibration Resonance, and allows players to move vibration frequencies across long distances without having to recreate the vibration naturally

### Playable Mob Sounds

-   When placing a Mob Head on a Note Block, that Note Block will now play one of the ambient sounds of that mob when played by a player or powered by Redstone
-   Mob Heads can be placed on top of Note Blocks without sneaking

### Piglin Mob Head

-   Piglins will now drop their heads when killed by a charged Creeper
-   Placing the Piglin head on a Note Block will play one of the Piglin's ambient sounds
-   The Piglin head will flap its ears when powered by Redstone, or when worn by a player while walking

### New Music

-   Added the following new music tracks by Aaron Cherof to Cherry Groves, Desert, Jungle, Badlands, and Flower Forest biomes:
    -   A Familiar Room
    -   Bromeliad
    -   Crescent Dunes
    -   Echo in the Wind
-   Added a new music disc with the track "Relic" by Aaron Cherof, found in Trail Ruins

### Windows Aarch64/ARM64 support

-   Minecraft Java Edition is now fully supported on Windows devices using an Aarch64/ARM64 architecture, such as the Windows Surface Pro X

### Advancements

#### New Husbandry Advancements

-   `Smells Interesting` : Obtain a Sniffer Egg
-   `Little Sniffs` : Feed a Snifflet (requires `Smells interesting`)
-   `Planting the Past` : Plant any Sniffer seed (requires `Little sniffs`)

#### New Adventure Advancements

-   `Respecting the Remnants` : Brush a Suspicious block to obtain a Pottery Sherd
-   `Careful Restoration` : Make a Decorated Pot out of 4 Pottery Sherds (requires `Respecting the Remnants`)
-   `Crafting a New Look` : Craft a trimmed armor at a Smithing Table
-   `Smithing with Style` : Apply these Trim Smithing Templates at least once: Spire, Snout, Rib, Ward, Silence, Vex, Tide, Wayfinder (requires `Crafting a New Look`)
-   `The Power of Books` : Read the power signal of a Chiseled Bookshelf using a Comparator

## Changes

-   Changes to Sculk Sensor block behaviors
-   Vibration frequencies of many actions in the game have been tweaked
-   Colored Wool, Carpets and Beds can now be dyed to any other color
-   Replaceable blocks no longer block the connection between enchanting tables and bookshelves
-   Wither effect particle and Potion of Slow Falling color have been adjusted to make them more distinguishable
-   Updated step sounds
-   Updated Advancements
-   The main menu background is now a Trails & Tales panorama
-   Updated the Minecraft Java Edition logo
-   Updated the Minecraft Realms logo
-   The game's application icon has been updated
    -   This will be a Grass Block in release versions, and a Dirt Block in snapshot versions
-   GUI can be scaled on the Video Settings screen by holding `Ctrl` and scrolling the mouse wheel
-   Updated the credits
    -   Added the ability to scroll upwards by pressing the `up arrow` key
-   The game will now display a message box on startup if user enabled text-to-speech functionality, but it is not available
-   Removed Herobrine

### Sculk Changes

-   If a vibration is scheduled to be received by a Sculk Sensor or Sculk Shrieker, they will stay queued until all adjacent chunks are loaded and ticking
    -   Prevents vibration resonance setups from breaking when unloading their chunks from a distance
-   Waterlogging a Sculk Shrieker will now silence their shriek sounds
-   Sculk Sensors' default redstone output has been modified to be more reliable for distance calculations
-   Sculk Sensors and Calibrated Sculk Sensors now strongly power the block they are placed on
-   Both types of Sculk Sensors now stay in their Cooldown phase for 10 ticks, with other phase timings being adjusted to compensate

#### Sculk Sensor Phases

-   Sculk Sensors and Calibrated Sculk Sensors have three phases: Inactive, Active and Cooldown
-   The default phase is Inactive
    -   This phase lasts indefinitely until the block receives a vibration
    -   During this phase, the block is able to listen to nearby vibrations until one has been scheduled
-   When a scheduled vibration is received, the block switches to the Active phase
    -   This phase lasts 30 game ticks for Sculk Sensors, and 10 game ticks for Calibrated Sculk Sensors
    -   During this phase, the block stops listening to nearby vibrations, wiggles its tendrils and emits a redstone signal and light
-   After the Active phase has finished, the block switches to a Cooldown phase
    -   This phase lasts for 10 game ticks
    -   During this phase, the block keeps wiggling its tendrils, but no longer emits a redstone signal nor light
    -   Finally, once this phase is finished, the block will switch back to the Inactive phase
-   Previously, some of these phases had different timing values:
    -   Active: 40 game ticks for Sculk Sensors and 20 game ticks for Calibrated Sculk Sensors
    -   Cooldown: 1 game tick for both types of Sculk Sensors
-   These phase timings were tweaked so that it is less common for activated contraptions to recursively activate the Sculk Sensor that powered them

#### Vibration Frequencies

In preparation for the Calibrated Sculk Sensor, vibration frequencies have been greatly simplified to prevent unwanted interference. The following are category descriptions for each frequency and the expected events that they correspond to:

1.  Movement in any medium (land, water and air)
2.  Landing on any surface (land or water)
3.  Item interactions
4.  Gliding with an elytra or unique mob actions (Ravager roar, Wolf shaking, etc)
5.  Dismounting a mob or equipping gear
6.  Mounting a mob or interacting with a mob
7.  Mobs and players getting damaged
8.  Consuming items (drinking and eating)
9.  Blocks 'deactivating' (door close, chest close, button unpress, etc)
10.  Blocks 'activating' (door open, chest open, button press, etc)
11.  Blocks changing (cauldron water level rising, adding food to campfire, etc.)
12.  Blocks being destroyed
13.  Blocks being placed
14.  Mobs and players teleporting or spawning
15.  Mobs and players dying or an explosion

### Step Sounds

-   Walking on a block will now always play a step sound
    -   It was previously not the case if you were walking along the edge of a block with air or fluid besides it
-   Walking on the ocean floor will produce a step sound for the block you are walking on at a lower volume and pitch
-   When walking on Carpets, Snow, Nether Sprouts, Warped Roots, and Crimson Roots, a combination of step sounds will be played
    -   The top-most block you are walking on is played as normal
    -   The block underneath is played at a lower volume and pitch

### Advancements

-   Breeding Camels and Sniffers now count for "The Parrots and the Bats" and are now required for "Two by Two"
-   Hanging Signs now count for "Glow and Behold"
-   Visiting a Cherry Grove is now required for "Adventuring Time"

## Technical Changes

-   Improved performance of the light engine
-   The data pack version is now 15, accounting for sign data format, item display orientation and advancement changes
-   Removed `update_1_20` feature flag and built-in datapack - features are no longer experimental
-   Added a `return` command
-   Tweaked display entity interpolation
-   Added a `capped` rule structure processor that limits the number of replaced blocks for a structure piece to a configured maximum
-   Configuring block entity fields in a `rule` processor rule is now delegated to a referenced `block_entity_modifier` instead of the previously fixed `output_nbt` configuration
-   Random sequences for loot tables are now deterministic
-   Added a `reference` loot table function
-   Loot table condition/predicate changes:
    -   Renamed `alternative` to `any_of`
    -   Added `all_of`
-   Advancement trigger changes:
    -   Added `recipe_crafted`
    -   Changed format of `placed_block`, `item_used_on_block` and `allay_drop_item_on_block` triggers
-   Ingredients in array form are now also allowed in `smithing_trim` and `smithing_transform` recipes on fields `template`, `base` and `addition`
    -   Those fields also allow empty arrays, which signalize that slot needs to be left empty
-   Added new damage types: `outside_border` and `generic_kill`
-   Game events have changed vibration frequency and some have been removed
-   The resource pack version is now 15, accounting for the font and credits update
    -   Updated the sprite layout of `minecraft.png`
    -   Removed the overriding `minecraft.png` from the Programmer Art resource pack
    -   Updated the sprite layout of `invite_icon.png`
    -   `legacy_unicode` glyph provider has been removed
    -   Bitmaps used by `uniform` font have been removed
    -   `uniform` font has been updated to use Unifont 15.0.06
        -   That changes shape of multiple characters, while also adding support for new ones
        -   Combining characters no longer include circle overlayed over them (so M◌̆ now renders as M ̆)
    -   Added second level of organization of entries in credits.json on top of `titles`, called `disciplines`
-   Font textures are included in debug texture dump (F3 + S)
-   Added new font glyph providers: `unihex` and `reference`, removed `legacy_unicode`
-   Added support for Quick Play
-   Removed the `server` & `port` commandline arguments as their functionality has been replaced by Quick Play
-   Updates to telemetry
-   Changed encoding of `server.properties` to UTF-8
-   Added validation for symbolic links in world saves

### Light Engine

The light engine is responsible for calculating the brightness of each block in the world. Light is calculated during world generation as well as updated when a block is changed in the world. Behavior of the light engine has not been changed.

-   The performance of calculating light has been improved
    -   Reduces one source of lag spikes when crossing chunk borders
    -   Improves FPS in situations when a lot of light updates occur
    -   Improves how quickly chunks can be generated

### Commands

#### `return`

The `return` command can be used to control execution flow inside functions and change their return value. Effects:

-   Remaining separate top-level commands in the currently executing function (if any) are skipped
-   The result value of the `function` command that triggered the function is changed from the number of commands executed to `value`
-   The result value of the `return` command is also `value`

Syntax:

`return <value>`

Parameters:

-   `value`: An integer return value

#### `data`

-   `string` data sources now accept negative boundaries, which are interpreted as index counted from the end of the string

### Display Entity

#### Interpolation Changes

-   Previous values are always discarded if `interpolation_duration` is `0`
-   Made sure that render properties are applied at the same time (so `block_state` is applied at the same time as transformation, i.e. at the next tick after receiving an update)
-   Display entities are not rendered until their initial data is received. That means display entities might not be shown on the first tick.
-   Note: due to how the game handles updates, changes to entities made after summoning might be delivered to clients within a later tick

#### Rendering Changes

-   `item_display` items have been rotated 180 degrees around the Y axis to better match the transformation that is applied when rendering items on an Armor Stand head and in Item Frames
    -   For reference, the order of transformations applied to model (starting from innermost) is `item_transform`, rotate Y 180, `transformation` field, entity orientation (billboard option + `Rotation` field + `Pos` field)

### Structure post-processors

#### Capped post-processor

-   A `capped` post-processor has been added which can limit how many blocks a delegated post-processor randomly transform in a structure
-   This can be used to configure a structure piece to have an exact amount of specific blocks, instead of using random distribution
-   The `capped` post-processor has following required parameters:
    -   `delegate` A post-processor which performs the actual block transformation
    -   `limit` Maximum amount of blocks that the delegated post-processor can transform
        -   The blocks inside a structure are all randomly passed to the delegated post-processor until it has transformed the limited amount
        -   Either constant or random number generator sampled during post-processing

#### Rule post-processor block entity configuration

-   Previously a rule could specify an optional fixed `output_nbt` which would be added to the processed output block entity
-   This field has now been changed to reference a `block_entity_modifier`
-   Existing `block_entity_modifier`'s are:
    -   `passthrough` Retains existing fields on the block entity
        -   This is the default if no `block_entity_modifier` is specified
    -   `append_static` Similar to previous `output_nbt` this provides fixed fields to add to the block entity
        -   A minor change is that this modifier appends configured fields to the processed block instead of replacing existing fields
    -   `clear` Removes any existing fields on the block entity
    -   `append_loot` Appends a loot table and seed to the block entity through required parameter:
        -   `loot_table` Referenced loot table to add to block entity as `LootTable` field
        -   Field `LootTableSeed` is also added to the block entity using random seeded by block position

### Loot Tables

#### Random Sequences

The game now uses named random sequences to deterministically produce loot for loot tables. Each random sequence produces a unique sequence based on the world seed and sequence ID, which means a loot table will produce the same results when ran with the same parameters in the same world.

The ID of the random sequence to use for a loot table is specified in a new optional field called `random_sequence`. If no sequence name is given, loot is drawn using a non-deterministic random source.

#### `reference`

New function `reference` allows functions to call sub-functions (similar to `reference` condition).

Fields:

-   `name` - location of function to call

#### `any_of`/`all_of`

-   Loot condition `alternative` has been renamed to `any_of`
-   Added new loot condition `all_of` that passes only when all sub-conditions pass
    -   Has the same syntax as `any_of`

### Advancements

#### New Triggers

##### `recipe_crafted`

-   Triggered when crafting a recipe
-   Conditions:
    -   `recipe_id` - the resource location of the recipe crafted
    -   `ingredients` - an array of predicates for the item stacks used in the recipe
        -   A single item stack can only be used to fulfill one predicate
        -   Each predicate needs to be fulfilled to trigger the advancement. This allows for separation between recipes that have same identifier but use different ingredients.
        -   This field is optional. When not provided, or left empty, only the `recipe_id` will dictate the success of the trigger

#### Changed Triggers

-   All fields in `placed_block`, `item_used_on_block` and `allay_drop_item_on_block` have been collapsed into a single `location` field
-   The new `location` is similar to the `player` field - it is a list of loot conditions/predicates
-   All conditions in this list must match for a trigger to run
-   Conditions are evaluated in a new loot context called `advancement_location`. It has access to:
    -   Player as `this` entity
    -   Position of the placed block
    -   Block state of the placed/interacted block
    -   Held/used item as "tool"
-   Migration guide:
    -   Contents of old `location` field should be migrated to `location_check` condition
    -   Contents of `item` field should be migrated to `match_tool` condition
    -   Contents of `block` + `state` fields should be migrated to `block_state_property` condition

**Example** (from `make_a_sign_glow` advancement):

Before:

    {
        "conditions": {
            "item": {
                "items": [
                    "minecraft:glow_ink_sac"
                ]
            },
            "location": {
                "block": {
                    "tag": "minecraft:all_signs"
                }
            }
        },
        "trigger": "minecraft:item_used_on_block"
    }
    

After:

    {
        "conditions": {
            "location": [
                {
                    "condition": "minecraft:match_tool",
                    "predicate": {
                        "items": [
                            "minecraft:glow_ink_sac"
                        ]
                    }
                },
                {
                    "condition": "minecraft:location_check",
                    "predicate": {
                        "block": {
                            "tag": "minecraft:all_signs"
                        }
                    }
                }
            ]
        },
        "trigger": "minecraft:item_used_on_block"
    }
    

### Damage Types

-   Players outside the world border are now hurt by the damage type `outside_border` instead of `in_wall`
-   Forcibly removing an entity using the `/kill` command now uses damage type `generic_kill` instead of `out_of_world`

### Tags

#### Block Tags

-   Removed `replaceable_plants` since it was only used as a subset of the blocks for the tag above, and not as universally
-   Added `replaceable_by_trees` to better express blocks that are replaced when the tree grows through them
-   Added `replaceable` with all the blocks that can be replaced
    -   This tag only represents the internal state of the game, changing this tag does not make blocks replaceable
-   Added `sword_efficient` to represent blocks that are broken 50% faster by a sword than normal
-   Added `maintains_farmland` to represent which blocks will not cause farmland to be converted into dirt due to drying out when placed on top of it
-   Added `combination_step_sound_blocks` that controls which blocks produce a combination of step sounds
-   Added `enchantment_power_provider` to control which blocks increase the level of an Enchantment Table
-   Added `enchantment_power_transmitter` to control which blocks are allowed between an Enchantment Table and a Bookshelf (or other Power Transmitter)
-   Added `vibration_resonators` to control which blocks transmit vibration signals when placed next to Sculk Sensors
-   Added `trail_ruins_replaceable` for blocks that Trail Ruins can replace when generating
-   Added `sniffer_diggable_block` to control which blocks Sniffers can dig
-   Added `sniffer_egg_hatch_boost` to that control on which blocks Sniffer Eggs hatch twice as fast
-   Added `ceiling_hanging_signs`
-   Added `wall_hanging_signs`
-   Added `all_hanging_signs`
-   Added `stone_buttons` block tag
-   Added `cherry_logs` block tag
-   Added `bamboo_blocks` block tag

#### Item Tags

-   Added `villager_plantable_seeds` to represent which kind of seeds Villagers can farm
-   Added `noteblock_top_instruments` to control which blocks can be placed on top of Note Blocks without sneaking
-   Added `breaks_decorated_pots` to control which tools can break Decorated Pots
-   Added `decorated_pot_ingredients`
-   Added `decorated_pot_sherds`
-   Added `sniffer_food`
-   Added `trimmable_armor`
-   Added `trim_materials`
-   Added `trim_templates`
-   Added `stone_buttons` item tag
-   Added `cherry_logs` item tag
-   Added `bamboo_blocks` item tag

#### Biome Tags

-   Added `has_structure/trail_ruins`

### Game Events

-   Removed `piston_contract` game event in favor of `block_deactivate`
-   Removed `piston_extend` and `dispense_fail` game events in favor of `block_activate`
-   Many game events have new vibration frequencies:
    -   1: `step`, `swim`, `flap`
    -   2: `projectile_land`, `hit_ground`, `splash`
    -   3: `item_interact_finish`, `projectile_shoot`, `instrument_play`
    -   4: `entity_roar`, `entity_shake`, `elytra_glide`
    -   5: `entity_dismount`, `equip`
    -   6: `entity_mount`, `entity_interact`, `shear`
    -   7: `entity_damage`
    -   8: `drink`, `eat`
    -   9: `container_close`, `block_close`, `block_deactivate`, `block_detach`
    -   10: `container_open`, `block_open`, `block_activate`, `block_attach`, `prime_fuse`, `note_block_play`
    -   11: `block_change`
    -   12: `block_destroy`, `fluid_pickup`
    -   13: `block_place`, `fluid_place`
    -   14: `entity_place`, `lightning_strike`, `teleport`
    -   15: `entity_die`, `explode`

### Fonts

#### New `unihex` Glyph Provider

-   New glyph provider for reading Unifont HEX files
    -   HEX format describes font glyphs using a bitmap
        -   The height of every glyph is 16 pixels
        -   The width of glyph can be 8, 16, 24 or 32 pixels
    -   Every line is made of two hexadecimal numbers separated by `:`
    -   The first value describes a codepoint - it must have 4, 5 or 6 hex digits
    -   The second value describes the glyph as a stream of bits, line by line
-   When rendering, empty columns on left and right side of glyphs are removed
    -   Custom glyph widths can be set with `size_overrides`
-   This provider requires two fields:
    -   `hex_file` - path to ZIP archive containing one or more `*.hex` files (files in archive with different extensions are ignored)
    -   `size_overrides` - list of codepoint ranges that should have width different from auto-detected (based on empty space in glyph). Fields:
        -   `from`, `to` - start and end of codepoint range (inclusive)
        -   `left`, `right` - integers describing the position of the left-most and right-most columns of the glyph in range
            -   Any bits in columns outside of this range will be discarded

#### New `reference` Glyph Provider

-   New glyph provider that can be used to include providers from other fonts
    -   Providers are guaranteed to be loaded only once, no matter how many times they are included
-   Provider has one field `id`, that describes another font to be included in the currently loaded one
    -   Inclusion is performed after all fonts are loaded, so it will include all providers for a given font defined in all datapacks

#### Removed `legacy_unicode` Glyph Provider

-   The `legacy_unicode` glyph provider has been removed
-   This functionality has been replaced by the `unihex` provider

### Quick Play

-   Added support for four new command line arguments that allow the game to be launched directly into a world
-   `quickPlayPath` takes a specified path for logging (relative to the run directory)
    -   If a path is provided the following will be logged upon joining a world:
        -   `type`: is either `singleplayer`, `multiplayer`, or `realms`
        -   `identifier`: represents the world you want to join
            -   For singleplayer, the folder name of the world
            -   For multiplayer, the IP address of the server
            -   For realms, the Realms ID
        -   `port`: represents the server port and is only logged for multiplayer
        -   `name`: The name of the world
        -   `gamemode`: The gamemode of the world
        -   `lastPlayedTime`: The time you joined the world
    -   Example:
        -   `--quickPlayPath "quickPlay/log.json"` will resolve into `.minecraft/quickPlay/log.json`
-   `quickPlaySingleplayer`, `quickPlayMultiplayer` and `quickPlayRealms` all take their respective `identifier`
    -   If one of these arguments is provided, the game will try to launch directly into the given world
    -   Examples:
        -   `--quickPlaySingleplayer "New World"`
        -   `--quickPlayMultiplayer "localhost:25565"`
        -   `--quickPlayRealms "1234"`

### Telemetry

#### All Events

-   Added new property: `launcher_name`
    -   This is set based on the `minecraft.launcher.brand` system property
    -   This will help us troubleshoot game launch related bugs more effectively, as we will be able to see whether the issue originated in the Minecraft launcher or a third-party program

#### Updated Required Events

-   `world_loaded`
    -   Added new property: `realms_map_content`
        -   When loading into a Realms Map Content world (Minigame), the `world_loaded` event will receive the name of that map
        -   This is to help us understand how Java Realms players interact with Java Realms adventure or minimap content

#### New Optional Events

-   `advancement_made`
    -   This event is triggered when a player completes an advancement, and allows us to see the advancement ID and the time when the advancement was completed
    -   This helps us as a studio understand player progress and limits, which informs our game design
-   `game_load_times`
    -   This event is triggered when the game client is loaded
    -   Includes the time it took for the client to load
    -   This is so that we can work on improving and reducing the time it takes to load the game client

### `server.properties`

-   File is now read in UTF-8 initially, with previous encoding (ISO 8859-1/Latin 1) as a fallback
-   File is now written with UTF-8 encoding

### Symbolic Link Validation

To improve safety, the game will now detect symbolic links used inside world directory. For a detailed explanation, check our [help article](https://aka.ms/MinecraftSymLinks).

-   If the target of a symbolic link is not on the user-configured allow-list, the game will not proceed with loading the world
    -   Note: the world directory itself can still be linked
-   The list of allowed symbolic link targets is stored in file `allowed_symlinks.txt` in the client or server top directory
-   The file consists of entries (one per line) with following formats allowed:
    -   Lines starting with `#` are comments and are ignored
    -   `[type]pattern`, where `type` can be `glob`, `regex` or `prefix`
        -   `prefix` matches start of path with given pattern (so for `/test` paths `/test`, `/test/` and `/test/foo.txt` would match)
        -   `regex` matches regular expression against whole path
        -   `glob` uses OS-specific path matching mechanism (for example `*.txt` would usually match files with `txt` extension)
        -   Note: paths will use OS-specific separators
    -   `pattern`, which uses default `prefix` type

## Fixed bugs in 1.20

Around 250 bugs were fixed in this release. View the [list on the issue tracker](https://bugs.mojang.com/issues/?filter=27705).

---

# Minecraft: Java Edition 1.19.4

We're now releasing 1.19.4 for Minecraft: Java Edition. This release comes with improvements to horse breeding and jukeboxes, new visuals for potions, new accessibility features and many new technical capabilities like the damage and ride commands and display and interaction entities.

The update\_1\_20 experiment has also been updated with a first look at the Sniffer, Archaeology, Armor Trims and Cherry Grove features.

## Changes

-   Updated Horse Breeding
-   Jukeboxes have changed to be at parity with Bedrock
-   Interacting with armor or elytra items in-hand will now swap them with equipped gear
-   The camera tilt when hurt is now based on the direction of incoming damage
-   Potions colors have been adjusted to make different types of potions more distinguishable
-   Potions no longer have an enchantment glint due to it obscuring the color of the potion contents
-   Enchantment glint on items and armor is now more subtle
-   Armor Stands now preserve custom names when placed and broken
-   Vexes now use a separate charging animation when empty-handed
-   Tweaks to recipe unlocking to make discovering vital crafting recipes easier for new players
-   Updated the Create New World screen
-   New accessibility options and improvements
-   Updated the Realms screen to be more in line with the Singleplayer and Multiplayer screens
-   Added a notification system for Realms to tell you about important information about your Realm
-   Added "Credits & Attribution" button in the Options menu

### Horses, Donkeys and Llamas

The speed, jump height and health of a baby is now a variation of the average of the parents' attributes, rather than being biased towards the average possible value.

This change makes horse breeding a viable way of getting great horses, if a player starts with good parents and puts in enough time and Golden Carrots.

### Jukebox

-   Emits a note particle above it while playing a music disc
-   While playing a music disc, it will emit a redstone signal of 15
-   Droppers and hoppers can now interact with it

### Creative menu

-   Added painting variants to the creative menu
-   Paintings with a pre-defined variant will now display the author and title in the item description when hovered over

### Recipe unlocking

-   The Crafting Table recipe is unlocked immediately on creating a new world
-   The Crossbow recipe is no longer unlocked by sticks
-   The Soul Campfire recipe is no longer unlocked by sticks

### Updated Create New World Screen

-   The screen is now organized into three tabs
    -   The Game-Tab allows to set the world name, Gamemode, Difficulty and whether to allow cheats
    -   The World-Tab allows to set the World-Type and Seed, and to toggle the generation of structures and the bonus chest
    -   The More-Tab provides access to the Game Rules and DataPack Selection Screen
-   Tabs can be switched with the keyboard by pressing Ctrl+Tab and Ctrl+Shift+Tab
-   Specific tabs can also be navigated to by pressing Ctrl+Tab Number
    -   For example, Ctrl+2 navigates to the second tab
-   Removed the Import Settings button and the corresponding Export Settings button in the Edit World Screen
-   Added a screen to easily enable/disable experimental features
    -   The screen can always be found under the More-tab
    -   In snapshots, a shortcut button can be found under the Game-tab

### Accessibility

-   Added an accessibility onboarding screen for players launching the game for the first time
-   Auto-Jump is now off by default
-   Added arrow key navigation
-   Added high contrast resource pack
-   The resource pack screen is now keyboard-navigatable
-   Changed how tooltips in the menu UI are positioned so buttons are still readable
-   Added a tooltip in the key binds screen that specifies which key binds are conflicting
-   Added a "Damage Tilt" accessibility option that controls the amount the camera shakes when being hurt
-   Added two new options in the accessibility menu for adjusting the speed and transparency of enchantment glints
-   Added a "Notification Time" accessibility option that changes how long notifications such as unlocked recipes, advancements, subtitles and selected item names are visible for

#### Arrow key navigation

-   Menu screens can now be navigated by using the arrow keys
-   When navigating with arrow keys, sliders need to be activated by pressing Enter or Space to start changing the value

#### High contrast resource pack

-   Added a built-in resource pack that enhances the contrast of UI elements
-   Added a new option in the Accessibility menu that enables the high contrast resource pack
-   This only affects the menu UIs for now, but we’ll be looking to bring this to gameplay UIs in the future as well

## Technical Changes

-   The data pack version is now 12
-   The resource pack version is now 13
-   Added a group of entities to display items, blocks and text
-   Added entities to detect interactions and attacks
-   Added data-driven damage types
-   Added a `damage` command for applying damage to entities
-   Added `ride` command to mount and dismount entities
-   The `clone` command now supports cloning to and from different dimensions
-   A new `string` source is now available for the `data modify` command
-   New `execute` sub-commands: `if dimension`, `if loaded`, `on`, `positioned over`, `summon`
-   Added a new type of atlas configuration source: `paletted_permutations`
-   Pressing F3+S will now dump contents of dynamic textures (like atlases, maps, etc.) to `screenshots/debug/`
-   Added `fallback` fields to `translate` text components
-   Out-of-bound arguments in `translate` formats are no longer silently ignored
-   Added the following game events:
    -   `entity_dismount` with a vibration frequency of 6
    -   `entity_mount` with a vibration frequency of 7
-   Changed the following game events:
    -   `item_interact_finish` now has a vibration frequency of 2 instead of 14
-   Removed `heldItemTooltips` option from `options.txt`
-   Added a network protocol feature for forcing bundle of packets to be processed within same client tick
-   Added `--pidFile` argument to dedicated server command line for printing process id to file
-   The vanilla resource pack en\_us language file is now sorted alphanumerically by key
-   Added `show_notification` field to recipes
    -   Accepts a boolean which determines if a notification is shown when unlocking this recipe
    -   defaults to `true` if isn't specified
-   A new recipe type `smithing_transform` has been added for the updated Netherite Upgrade recipe
-   A new recipe type `smithing_trim` has been added for the new Armor Trim recipe
-   A new recipe type `crafting_decorated_pot` has been added for the new Decorated Pot recipe
-   New registries `trim_pattern` and `trim_material` have been added for the armor trim system
-   Smithing table has temporarily two menu types
    -   Old menu without Smithing Template slot has been renamed to `legacy_smithing`
        -   Will be removed when Armor Trim feature stops being an experimental feature
    -   New menu with Smithing Template slot was added called `smithing`
-   Added new flag (value 128) to `HideFlags` NBT field for hiding armor trim item tooltips

### Resource Pack format

-   The enchantment glint now has two separate texture files: `enchanted_glint_entity.png` and `enchanted_glint_item.png`
-   The texture format used to dynamically scale buttons and sliders has been updated to always include fixed 20px borders on the left and right
-   Slider textures are now defined in a separate `slider.png` file
-   The Create New World screen now uses a separate `light_dirt_background.png` for its background, unlike other screens

### Commands

#### `clone`

The clone command now supports specifying the source and target dimensions.

New syntax:

`clone [from <sourceDimension>] <begin> <end> [to <targetDimension>] <destination> ...`

Parameters:

-   `sourceDimension`: id of dimension to clone from
-   `targetDimension`: id of dimension to clone to

#### `damage`

New command to apply damage to entities.

Syntax:

-   `damage <target> <amount> [<damageType>] [at <location>]`
-   `damage <target> <amount> [<damageType>] [by <entity>] [from <cause>]`

Parameters:

-   `target`: The entity to damage
-   `amount`: Amount of damage to inflict
-   `damageType`: The type of damage to inflict
    -   This determines how the damage affects the entity as well as which death message is displayed
-   `entity`: The entity inflicting the damage
-   `cause`: The cause of the damage, in the case of indirect damage
    -   Example: When shot by an Arrow, the `entity` is the Arrow projectile while `cause` might be a Skeleton
-   `location`: The location the damage originated at (when no entity caused the damage)
    -   For instance, `location` might represent the location of a Bed exploding in the Nether

#### `data`

New source available:

-   `string <entity|block|storage> [path] [start] [end]` - reads a value as text, resulting in a string value

New arguments:

-   `start`: Index of first character to include at the start of the string
-   `end`: Index of the first character to exclude at the end of the string

#### `effect`

-   `infinite` is now a valid option for effect durations
    -   Infinite effect durations show up as "∞" in the player inventory view

#### `execute`

##### `execute if|unless`

New conditions available for the `execute if|unless` sub-command:

-   `execute if|unless loaded <pos>` - checks if the position given is fully loaded (in regard to both blocks and entities)
-   `execute if|unless dimension <dimension>` - checks if the execution is in a matching dimension

Parameters:

-   `pos`: Block position to check
-   `dimension`: A dimension id

##### `execute on`

New `execute` sub-command for selecting entities based on relation to the current executing entity:

-   `execute on <relation>`

Relations:

-   `vehicle` - the entity that the executing entity is riding
-   `passengers` - all entities directly riding the executing entity (no sub-passengers)
-   `controller` - the entity that is controlling the executing entity (for example: first passenger in a boat)
-   `owner` - the owner of the executing entity, if it is a tameable animal (like cats, wolves or parrots)
-   `leasher` - the entity leading the executing entity with a leash (might be a leash knot in case of being attached to a fence)
-   `target` - the attack target for the executing entity
-   `attacker` - the last entity that damaged the executing entity in the previous 5 seconds
-   `origin`:
    -   shooter, if the executing entity is a projectile (like Arrow, Fireball, Trident, Firework, Thrown Potion, etc.)
    -   thrower, if the executing entity is an item
    -   source of effect, if the executing entity is an Area Effect Cloud
    -   igniter, if the executing entity is a Primed TNT
    -   summoner, if the executing entity is Evoker Fangs or a Vex

If the relation is not applicable to the executing entity or there are no entities matching it, the selector returns zero elements.

##### `execute positioned over`

New `execute` sub-command for finding positions on top of a heightmap. Changes the height of the execution position to be on top of the given heightmap.

Syntax:

-   `execute positioned over <heightmap>`

###### Heightmaps

A heightmap records the highest position in a column of blocks according to some criteria. Available options:

-   `world_surface`: Any non-air block
-   `motion_blocking`: Any motion blocking material (e.g. ignores flowers and grass)
-   `motion_blocking_no_leaves`: Any non-leaf motion blocking material
-   `ocean_floor`: Any non-fluid motion blocking material

##### `execute summon`

New `execute` sub-command for summoning a new entity and binding the context (`@s`) to it. Meant to simplify entity setup and reduce the need for raw NBT editing.

Syntax:

-   `execute summon <entity id>`

#### `fillbiome`

-   The amount of network data transmitted when using the `fillbiome` command has been optimized

### `title`

-   All time arguments to `title times` are now time durations and work with `t`, `s` and `d` suffixes

#### `weather`

-   The duration of the weather change now matches the game's regular weather cycle if not specified
-   The `duration` parameter is now a time duration in ticks and works with `t`, `s` and `d` suffixes
    -   To retain existing functionality, you need to add an `s` suffix to pre-existing commands

#### `ride`

New command to allow entities to start or stop riding other entities.

Syntax:

-   `ride <target> mount <vehicle>`
    -   Makes a single target mount a single vehicle
    -   The command will fail if:
        -   `vehicle` is a player
        -   `target` is already riding a vehicle
        -   `target` and `vehicle` are the same entity
        -   `vehicle` is already a passenger (direct or indirect) of `target`
-   `ride <target> dismount`
    -   Dismounts `target` from any vehicle it is riding
    -   Fails if `target` is not riding anything

### Damage Types

Damage Types are a new registry that can be extended through data packs. A Damage Type determines how damage is handled by the game. This includes which attributes the damage has as well as which death message is used when an entity dies due to that type of damage.

Example:

    {
      "exhaustion": 0.1,
      "message_id": "arrow",
      "scaling": "when_caused_by_living_non_player"
    }
    

Fields:

-   `message_id`: The message id used for deaths caused by this damage type
    -   Will be combined with other string fragments to form a translation key
-   `exhaustion`: The amount of hunger exhaustion caused by this damage type
-   `scaling`: Whether this damage type scales with difficulty levels. Possible values:
    -   `never`: Damage is always the same
    -   `always`: Damage always scales with difficulty
    -   `when_caused_by_living_non_player`: Damage scales with difficulty if it was caused by a living entity who is not a player
-   `effects`: Optional field controlling how damage manifests when inflicted on players. Possible values:
    -   `hurt` (default): the default hurt sound
    -   `thorns`: Thorns hurt sound
    -   `drowning`: Drowning sound
    -   `burning`: A single tick of burning sound
    -   `poking`: Berry bush poke sound
    -   `freezing`: Freeze tick sound
-   `death_message_type`: Optional field that controls if special death message variants are used. Possible values:
    -   `default` (default): No special death message logic is applied
    -   `fall_variants`: Show a variant of fall damage death instead of a regular death message, e.g. `death.fell.assist.item`
    -   `intentional_game_design`: Show the intentional game design message instead of a regular death message

Damage type tags control many aspects of how damage from different sources are interpreted.

### Predicates

#### Damage Type Predicates

The following fields have been removed from damage type predicates: `is_projectile`, `is_explosion`, `bypasses_armor`, `bypasses_invulnerability`, `bypasses_magic`, `is_fire`, `is_magic`, `is_lightning`.

A new `tags` array has been added, with the predicate matching if all entries match. Each entry has two fields:

-   `id`: The ID of a damage type tag
-   `expected`: Whether the damage is expected to have or not have the tag for the predicate to match

### Game Rules

-   Added `commandModificationBlockLimit`, controlling the maximum number of blocks changed in one execution of `clone`, `fill` and `fillbiome`
-   Added `doVinesSpread` game rule, determining if vines will spread to nearby blocks
    -   Defaults to `true`

### Text components

Added an optional `fallback` field to `translate` text components.

-   The new field is a string that will be used in place of translation if it is missing
-   If `fallback` is missing, the old behavior (i.e. using the key itself as the translation) is preserved

### Display entities

Three new entities have been added for flexible display of items, blocks and text

-   Those entities, similarily to `marker`, don't tick and have no collisions or physics
-   Models render at entity position, with normal rotation around X and Y axis (so it can be controlled by teleport commands), but also with additional arbitrary model transform

#### Common data types

Tag contents for display entities include some new data types with a complex structure. Any form can be used for modifying data, but only one form is used for saving.

##### Transformations

Arbitrary affine transform.

-   Matrix form: array of 16 numbers, describing row-major matrix
-   Decomposed form (used for saving): object with following fields:
    -   `translation` - 3d vector
    -   `left_rotation`, `right_rotation` - `rotation`
    -   `scale` - 3d vector
    -   Transforms are composed in order `translation`, `left_rotation`, `scale`, `right_rotation`

##### Rotations

-   Quaternion form (used for saving): array of 4 numbers, describing components (x, y, z, w)
-   Axis-angle form: object with following fields:
    -   `axis` - unit 3d vector
    -   `angle` - in radians

#### Interpolation

Some properties of display entities can be interpolated. That means that clients will see gradual changes over time instead of instantaneous jumps.

Display entities keep track of current and previous values of interpolated values:

-   All properties marked as "interpolated" are part of a single interpolation set
-   Any update to interpolated property will cause all values of interpolation set to be saved as "current"
    -   Data command executions that do not change value of property (even if it's present in NBT) do not count as updates
    -   Updates are synchronized to clients at most once per tick, so multiple updates within command will still count as a single update
-   The last values generated before an update are saved as "previous"
-   If interpolation is enabled, the entity will transition between "previous" and "current" values over `interpolation_duration` ticks
-   Interpolation can be started by writing to the `start_interpolation` field (this field is not normally present in NBT)
    -   The value in this field is a delay in ticks between client receiving the update and interpolation start
    -   A value of `0` ticks means that interpolation will start in next client tick after receiving the update
    -   Positive values increase this delay further
-   Interpolation will end (entity fully in "current" state) in `start_interpolation` + `interpolation_duration` ticks after receiving the update
-   The interpolation target can be updated without setting `start_interpolation`, but it will still behave as if it was started at the moment of the last update to `start_interpolation`
    -   That means that if the value is updated, but more than `interpolation_duration` ticks have passed since last `start_interpolation` update, the entity will immediately jump to new values

#### Common properties

All display entity types have the following fields:

-   `transformation` - the transformation applied to model (after normal entity orientation). Defaults to identity. Interpolated
-   `billboard` - option to control if entity should pivot to face player when rendered:
    -   `fixed` - no rotation (default)
    -   `vertical` - entity can pivot around its vertical axis
    -   `horizontal` - entity can pivot around its horizontal axis
    -   `center` - entity can pivot around its center point
-   `brightness` - if present, overrides light values used for rendering. Omitted by default (which means rendering uses values from entity position). Object has two fields:
    -   `sky` - value of skylight, 0..15
    -   `block` - value of block light, 0..15
-   `view_range` - maximum view range of this entity. Actual distance depends on client-side render distance and entity distance scalling. Default value 1.0 (roughly the same as fireball)
-   `shadow_radius` - size of shadow. Defaults to 0 (no shadow). Interpolated
-   `shadow_strength` - strength of the shadow. Controls the opacity of the shadow as a function of distance to block below. Defaults to 1. Interpolated
-   `width`, `height` - describe size of culling bounding box
    -   Bounding box spans vertically `y` to `y+height` and horizontally `width/2` in all directions from entity position
    -   If either field is set to `0`, culling is disabled
    -   Both default to `0`
-   `glow_color_override` - override glow border color. Defaults to `-1` (use team color). Alpha component is ignored

#### `item_display`

Displays a single item stack.

-   Stack can be changed with commands by setting slot `container.0`

Fields:

-   `item` - item stack to display. Same format as in inventory (example: `{id: "minecraft:dirt", Count: 1}`)
-   `item_display` - describes item model transform applied to item (as defined in `display` section in model JSON)
    -   Values: `none` (default), `thirdperson_lefthand`, `thirdperson_righthand`, `firstperson_lefthand`, `firstperson_righthand`, `head`, `gui`, `ground`, `fixed`

#### `block_display`

Displays a block state.

-   Does not display all block entities, even if they would normally be created on block placement (like chests)

Fields:

-   `block_state` - block state to display. Same format as item held by endermen (example `{Name:"minecraft:dirt"}`)

#### `text_display`

Displays a text component.

Fields:

-   `text` - text to display. Components are resolved with the context of the display entity
-   `line_width` - line width used to split lines (note: new lines can be also added with `\n` characters). Defaults to 200
-   `text_opacity` - opacity (alpha component) of rendered text. Defaults to 255. Interpolated
-   `background` - color of background. Includes alpha channel. Defaults to 0x40000000. Interpolated
-   `default_background` - if true, rendering uses default text background color (same as in chat). Defaults to false
-   `shadow` - whether the text should be displayed with a shadow. Defaults to false
-   `see_through` - whether the text should be visible through blocks. Defaults to false
-   `alignment` - how the text should be aligned
    -   Values: `center` (default), `left`, `right`

Note: text display backgrounds uses new shader types `rendertype_text_background` and `rendertype_text_background_see_through`.

### Interaction Entities

A new type of entity that records attacks ("left clicks") and interactions ("right clicks"). Interactions are invisible and of a custom size.

Fields:

-   `width`: Width of the entity's bounding box (default `1`)
-   `height`: Height of the entity's bounding box (default `1`)
-   `attack`: Records the last attack action on the entity
-   `interaction`: Records the last interaction action on the entity
-   `response`: Boolean specifying if interacting should trigger a response (arm swing, sound effects, etc - default `false`)

#### Action Format

When an action is stored, it always has two fields:

-   `player`: The UUID (in standard integer array format) of the player performing the action
-   `timestamp`: The timestamp of the game tick when the event happened (stored as a long)

#### Advancement Triggers

-   Interacting with an Interaction entity triggers `player_interacted_with_entity`
-   Attacking an Interaction entity triggers `player_hurt_entity`

#### `execute on` with Interactions

The Interaction entity targets the player who last interacted with it. That makes the following possible:

-   `execute on attacker`: execute as the last player who attacked the entity
-   `execute on target`: execute as the last player who interacted with the entity

### Tags

#### Block Behavior

-   Fire burns out faster in certain biomes, and this is now controlled by the `increased_fire_burnout` biome tag

#### Mob Spawning

-   The `only_allows_snow_and_gold_rabbits` biome tag has been renamed to `spawns_gold_rabbits` to match its behavior
-   White Rabbit variants are now controlled by the `spawns_white_rabbits` biome tag
-   Fox variants are now controlled by the `spawns_snow_foxes` biome tag

#### Mob Behavior

-   Snow Golems melting in warm biomes is now controlled by the `snow_golem_melts` biome tag
-   Only mobs in the `dismounts_underwater` entity tag will now force the rider to dismount when underwater

### Network Protocol

-   Clients now reset their Secure Chat session state when receiving the login packet

#### Packet bundles

-   Added new delimiter packet to clientbound game protocol
-   All packets between two delimiters are guaranteed to be processed within same tick
-   For security reasons this feature is not supported in the serverbound direction

### Paletted Permutations

-   `paletted_permutations` is a new type of atlas configuration source used to dynamically generate new textures in memory based on a set of color palettes
-   Color palettes allow you to swap out the colors of a texture without having to supply all files for the variants of a texture in a resource pack
-   This is useful for things like armor trims, where you want to be able to change the color of parts of the armor without having to create a new texture for each color
-   The `paletted_permutations` source has a set of required parameters:
    -   `textures` A list of namespaced locations of base textures
        -   These textures will be used to generate variants of them that have been modified by color palettes
    -   `palette_key` A namespaced location of a color palette key file
        -   A color palette key is used to define the set of key pixel colors we want to swap out with the color palettes defined below
    -   `permutations` A map of permutations from suffix to a namespaced location of a color palette file
        -   The suffix is appended at the beginning to the resource location of the output variant textures, with a `_` character separating the suffix and the base texture name
        -   The color palette is a texture file with a set of pixels that are used for replacing pixels that match the color palette key in each base texture
        -   The number of pixels in each color palette must be the same as that of the `palette_key` defined for this source
        -   Key matching is done by comparing the RGB values of each pixel in the `palette_key` to the RGB values of each pixel in the color palette
        -   The alpha channel is ignored for key matching, but in the resulting texture the alpha channel is multiplied with the color palette's alpha channel
        -   Pixels that do not match the `palette_key` are copied over to the resulting texture as-is
-   After defining a `paletted_permutations` source, you can then reference those namespaced output textures in other resources in your resource pack

For example, if you have the following `paletted_permutations` source:

    {
        "type": "paletted_permutations",
        "textures": [
            "minecraft:item/leather_helmet",
            "minecraft:item/leather_chestplate",
            "minecraft:item/leather_leggings",
            "minecraft:item/leather_boots"
        ],
        "palette_key": "minecraft:colormap/color_palettes/leather_armor_color_key",
        "permutations": {
            "red": "minecraft:colormap/color_palettes/red",
            "green": "minecraft:colormap/color_palettes/green",
            "blue": "minecraft:colormap/color_palettes/blue"
        }
    }
    

You can then reference the resulting textures in other resources like this:

    {
        "textures": {
            "layer0": "minecraft:item/leather_helmet_red",
            "layer1": "minecraft:item/leather_chestplate_green",
            "layer2": "minecraft:item/leather_boots_blue"
        }
    }
    

### Trim Patterns & Materials

-   Trim patterns and materials for armor are defined by the server through the `trim_pattern` and `trim_material` registry respectively
    -   As a result, new trim patterns and materials can be added via data packs
-   These are synchronized to clients when they join the server
    -   However, clients must have an accompanying resource pack to see those registered trim patterns and materials
    -   The paths to these textures are inferred based on the filename of the pattern json, and will try to find the textures within the same namespace as the trim pattern's `name` field
-   The following data is defined by a trim pattern:
    -   `asset_id` which is a namespaced id used to infer texture locations and localization
    -   `template_item` which is the id of the smithing template item used to apply the trim pattern
    -   `description` which is a text component used for displaying the pattern name of an armor trim when hovering an armor itemstack
-   The following data is defined by a trim material:
    -   `asset_name` which is a string used as a suffix for armor trim texture locations
    -   `ingredient` which is the id of the ingredient item used to apply the trim material
    -   `item_model_index` which is a float which defines the item model override each armor item model should target to change their visuals for this material
    -   `override_armor_materials` which is an optional map of armor material to overridden color palette
        -   Map key is the armor material that this trim material wants to override with a different color palette
        -   Map value is the name of the color palette that will be used when this trim material is applied to an armor piece with the corresponding armor material
    -   `description` which is a text component used for displaying the material name of an armor trim when hovering an armor item stack
        -   The style defined in this description is applied to the armor trim pattern `description` as well

## Experimental Features

The following changes only apply when one or more Experiments is turned on, either by activating the corresponding experimental data pack or by turning it on in the Experiments screen while creating the world.

-   Added Smithing Template items
-   Redesigned the Smithing Table
-   Changed how Netherite equipment is crafted
-   Added a new armor trimming system to visually customize your armor
-   Added Sniffer mob and Torchflowers
-   Added the Cherry Grove biome
-   Added Archaeology
-   Mob Heads can now be placed on top of Note Blocks without sneaking

### Smithing Templates

-   Smithing Tables have been redesigned into a workstation for physical equipment upgrades and modifications
-   Alongside slots for combining a piece of equipment and materials, there is now a required slot for an item type called Smithing Templates
-   Smithing Templates define what type of upgrade you will be making to equipment
    -   It specifies both what type of items you can upgrade, and which ingredients are valid to customize the upgrade
    -   There are currently two categories of Smithing Templates: Armor Trim and Netherite Upgrade
-   Smithing Templates are consumed when used to upgrade an item in the Smithing Table
-   You can craft a copy of a Smithing Template in the Crafting Table with 7 diamonds + 1 block of material that the template is made out of + 1 smithing template, which will output 2 of the same Smithing Template

### Netherite Equipment

-   Netherite equipment crafting now also requires a Netherite Upgrade Smithing Template
-   Netherite Upgrade Smithing Templates can be found randomly in all Bastion Remnant chests, and there is a guarantee of 2 in every Treasure Room Bastion Remnant
-   This change was made for a variety of reasons:
    -   Increase the time players utilize Diamond equipment before Netherite
    -   Make Netherite equipment a more significant achievement in the game's progression
    -   Adapt Netherite more naturally into the new Smithing Table crafting system

### Armor Trims

-   You can now visually customize your armor with a variety of unique trims at the Smithing Table
-   Armor trims are purely visual with no gameplay benefits, and can only be applied to Helmets, Chestplates, Leggings and Boots
    -   All trim patterns are visually the same on an armor's item icon, but the color will still change based on the trim material
    -   To check which trim pattern a piece of armor has, you can hover over it in the inventory
-   Armor Trim Smithing Templates can be found all throughout the world, and each of the following structures contain their own unique Smithing Template:
    -   Pillager Outpost: Sentry Armor Trim
    -   Desert Pyramid: Dune Armor Trim
    -   Shipwreck: Coast Armor Trim
    -   Jungle Temple: Wild Armor Trim
    -   Ocean Monument: Tide Armor Trim
    -   Ancient City: Ward Armor Trim
    -   Woodland Mansion: Vex Armor Trim
    -   Nether Fortress: Rib Armor Trim
    -   Bastion Remnant: Snout Armor Trim
    -   Stronghold: Eye Armor Trim
    -   End City: Spire Armor Trim
-   Smithing Templates are found in chests in their respective structure
    -   The Ocean Monument has no chests, Elder Guardians sometimes instead drop a Smithing Template upon death
-   Some Armor Trim Smithing Templates are rarer than others, so be on the lookout for them to impress your friends!
-   An armor trim has two properties: a pattern and a material
    -   The pattern is defined by the Smithing Template used to apply the trim, and represents the visual pattern of the trim
    -   The material is defined by what ingredient you used to apply the trim, and represents the color of the trim
-   The viable ingredients you can use to define the color of your armor trim are the following:
    -   Iron, Copper, Gold, Lapis, Emerald, Diamond, Netherite, Redstone, Amethyst, Quartz

### Sniffer

-   The Sniffer is the mob vote winner of Minecraft Live 2022
-   Sniffers cannot be tempted or tamed
-   Sniffers are passive, friendly mobs
-   Sniffers sniff the air and occasionally dig for seeds, which produces a Torchflower Seed
-   Sniffers can be bred by feeding them Torchflower Seeds
-   The Sniffer is currently only available as a Spawn Egg in the creative inventory

### Torchflowers

-   The Torchflower seed can be planted on farmland and grows into a flower
-   The seed can be used to breed two Sniffers
-   The full-grown flower can be harvested and replanted but can also be crafted into a dye

### Cherry Groves

-   Added a new Cherry Grove biome, with pretty cherry blossom trees
    -   The biome can be found in the mountains, in similar places as Meadows
-   Added a new Cherry wood set, with all the corresponding wooden things you can make from it
-   Cherry Leaves have pink particles falling underneath
-   Added a new Pink Petals block with lots of pink flowers on the ground
    -   Each pink petal block can contain up to 4 petals
    -   Using bone meal on it increases the number of petals
    -   Placing a petal on a block increases the number of petals
    -   Mining the block gives you the number of petals in the block

### Archaeology

#### The Brush

-   The brush is a craftable item you can use to brush things

#### Suspicious Sand

-   Can be found in Desert Temples and Desert Wells
-   This fragile block is hard to spot and easy to destroy, so be careful!
-   Brushing the Suspicious Sand with a Brush will extract objects that were buried long ago

#### Pottery Shards

-   Pottery Shards have pictures on them
-   They cannot be crafted and are only found by brushing Suspicious Sand

#### Decorated Pots

-   Crafting four Pottery Shards together will create a Decorated Pot with a picture on each side
-   Brick items can be used instead of Pottery Shards in the Decorated Pot recipe
    -   The sides that were made from Brick items will not have pictures
-   Smash a Decorated Pot with any block-breaking tool to break it apart and get the Pottery Shards back
    -   Hitting the pot with bare hands, silk touch tools, or any other item, will drop an intact pot instead

## Fixed bugs in 1.19.4

Around 150 bugs were fixed in this release. View the [list on the issue tracker](https://bugs.mojang.com/issues/?filter=27608).

---

# Minecraft: Java Edition 1.19.3

We're now releasing 1.19.3 for Minecraft: Java Edition. This release gives the Vex a brand new look as well as containing technical improvements and bug fixes.

## New Features in 1.19.3

-   Some experimental features are now available through built-in experimental datapacks
-   Added a new "Panorama Scroll Speed" accessibility option
-   Added new default skins for offline players
-   New wood sounds

### Sounds

-   Various wood types now have unique sounds when placed, broken, or walked on
    -   There are three sets of unique sounds: Overworld wood types, Nether wood types, and Bamboo (when enabled)
-   Step sounds can now be heard when walking on Carpets, Lily Pads and Small Amethyst Buds
-   Step sounds can now be heard when walking through Nether sprouts, Glow lichen, Crimson Roots and Warped Roots

## Changes in 1.19.3

-   Reworked the Creative Inventory tabs
-   Added Operator Items Tab option in the Controls menu which is off by default
-   The Vex now has a new look
-   In the Nether dimension Endermen, Skeletons and Wither Skeletons now only spawn at light level 7 and below (instead of 11 and below)
-   Changes to block support
-   Spawner block changes
-   Changes to chat
-   Added Draft Player Reports
-   Improvements to the Open to LAN screen
-   The Realms News button will now show a confirmation screen before opening the link
-   Stronghold placement code has been changed to be more efficient, causing stronghold positions to shift
    -   They are still placed in concentric rings, but their positions in the rings may change by a few degrees
-   "Teleport to Team Member" option in spectator menu now only shows up for teams with viable target players
-   Changes to tooltips
-   The Wild update music has been tweaked to be slightly less loud

### Creative Inventory

The ordering of tabs and the contents in the Creative Inventory have been tweaked to make the experience of finding relevant blocks and items easier.

-   Blocks and items have been moved into categories that fit them better
-   Blocks are now ordered by their material as much as possible
    -   For example, all Oak blocks and variants are now next to each other
-   Some items can now be found in more than one tab
-   Various tabs have been renamed or collapsed into others
-   The search tab now lists items sequentially grouped by the other tabs
    -   For example, items found in Building Blocks will always appear before items in Redstone Blocks
-   A Colored Blocks tab has been added that contains all blocks with 16 color variants
-   Petrified Oak Slab has been removed from the Creative Inventory
    -   It can still be accessed through commands
-   The following missing items have been added to the Creative Inventory:
    -   Suspicious Stew
        -   The tooltip will show the effect of a stew before it's picked up from the Creative Inventory
        -   Only stews with effects available via crafting or Mooshrooms are listed
    -   Dragon Egg
    -   Ominous Banner
    -   Monster Spawner
    -   All 3 flight durations of Fireworks
    -   Operator-only blocks and items
        -   These only appear in the Operator Utilities tab if you have both:
            -   Operator Items Tab option in Controls menu set to `ON`
            -   The required operator permissions
-   Tooltips for all items in Creative Menu outside single-category tabs will show categories where this item can be found
    -   Previously this only happened on the search tab

### Vex

-   Changes to Vex model and textures
    -   The Vex retains its old, now slightly oversized, hitbox to make it easier to fight

### Block Support

-   Fence Gates no longer provide center support beneath them
-   When opening, Shulker Boxes will pop off blocks which are attached to opened faces (such as Torches)
    -   Blocks that require support cannot be placed on these open faces while the Shulker Box is open

### Spawners

-   No longer has a default mob spawn type when placed by a player (previously was the Pig)
-   Will not emit fire particles when a mob spawn type has not been defined
-   Renamed to Monster Spawner to match Bedrock, and removed purple text color
-   Pick-block now works for Spawner blocks
-   The mob type is now displayed in the hover description of a Spawner item stack
    -   If a mob type has not been defined yet, the hover description will describe how to set it

### Items

-   Added new Spawn Egg items for Ender Dragon, Iron Golem, Snow Golem and Wither mobs to Creative mode
    -   Ender Dragon and Wither Spawn Eggs will only be available through commands to prevent accidental destruction of player builds
-   Polar Bear Spawn Egg colors have changed to distinguish it from the Ghast Spawn Egg

### Chat

-   Removed Chat Preview
-   Chat messages deleted by server moderators will no longer be completely hidden, but rather replaced with text stating "This chat message has been deleted by the server."
-   Deleted chat messages will now be displayed in the chat window for at least 3 total seconds before being hidden
-   The Chat Trust Status indicators have been tweaked:
    -   The 'Modified' tag will no longer display for server-modified messages where only style has been changed
    -   The 'Modified' tag icon and indicator is now dark gray
    -   The 'Not Secure' tag is now light gray and does not have an icon
-   Partially filtered chat messages now show the filtered text as gray hashes with a hover text saying that it was filtered
-   The Chat Reporting screen now shows when the player being reported rejoined chat

### Added Draft Player Reports

Player Reports can now be kept temporarily as a draft while connected to a server.

-   When exiting the Player Reporting screen, the report can be either discarded or kept as a draft
    -   The draft will always be kept if the screen was forcefully closed (e.g. player dying)
-   Draft reports are kept until the player leaves the current server or world
    -   When leaving, the player will be prompted to either discard or finish and send the report

### LAN screen

-   The screen now allows selecting the port on which to host the LAN world
-   The game mode and allow cheats buttons are now initialized with the default values of the world

### Tooltips

-   When tabbing through buttons, tooltips are displayed above or below them
-   Tooltips displayed when hovering are displayed next to the cursor
-   Tooltips from focused buttons (focused by pressing tab) take priority over tooltips from hovered buttons

## Technical Changes in 1.19.3

-   Added Feature Flags - world options to enable or disable some experimental or unfinished features (like blocks, entities and items)
-   Command changes
-   Added new Telemetry Events
-   Added new Game Rules
-   Custom Player Head Note Block sounds
-   New entity sub-predicate types
-   Instances of recipe types that have recipe books now have field `category` to determine placement
-   Changes to texture loading and stitching
-   Network protocol changes
-   Migrated linear algebra types to Java OpenGL Math Library (JOML)
-   Blocks carried by Endermen now use loot tables to generate drops when killed

### Feature flags

#### General notes

-   Feature flags are options that enable or disable certain groups of game elements (like blocks, entities and items), later called "features"
-   Game elements controlled by flags are hardcoded
-   Feature flags are stored in world

#### Configuration and datapack changes

-   Feature flags are enabled by datapacks
    -   New pack metadata section called `features` is added, containing enabled feature flags in list named `enabled`
-   The game now contains built-in datapacks (similar to the "Programmer Art" resource pack) that enable features and provide associated recipes, advancements, loot tables, etc
-   Added new fields to `server.properties` to allow initial selection of packs (works only during world creation)
    -   `initial-enabled-packs` - comma-separated list of packs to be enabled (feature packs need to be explicitly enabled)
    -   `initial-disabled-packs` - comma-separated list of packs to not auto-enable
-   Datapacks discovered after world creation will be disabled if they require features that are not enabled for loaded world
-   Added new entity sub-predicate types: `axolotl`, `boat`, `fox`, `mushroom`, `painting`, `rabbit`, `horse`, `llama`, `villager`, `parrot`, `tropical_fish`

#### Effects of feature flags

##### Blocks

-   Disabled block ids are not recognized by commands that can create new blocks
-   Block items for disabled blocks are disabled
-   Disabled blocks won't spawn in structures
-   Disabled blocks won't be loaded as part of entities (for example as falling sand or blocks carried by Endermen)
-   Players can't interact with disabled blocks

##### Entities

-   Disabled entity ids are not recognized by commands that can summon new entities
-   Disabled entities will not spawn or load
-   Spawn egg items for disabled entities are disabled

##### Items

-   Disabled items are hidden from creative menu
-   Recipes and loot tables are prevented from creating disabled items
-   Disabled item ids are not recognized by commands that can create new items
-   Disabled items can't be used for interactions or attacking

### Commands

-   New command: `fillbiome`
-   New execute sub-command: `execute if|unless biome`
-   Improvements to the `publish` command

#### `fillbiome`

Changes biome entries for an area. Note that biomes are not stored per-block, so affected positions may not match input precisely.

Syntax:

`fillbiome <from> <to> <biome> [replace <filter>]`

Parameters:

-   `from`: One corner of the area to fill
-   `to`: The other corner of the area to fill
-   `biome`: The biome to set
-   `filter`: A biome or biome tag to replace

#### `execute`

Execute commands can now be conditional on biomes.

Syntax:

`execute if|unless biome <pos> <biome>`

#### `publish`

The `publish` command has new arguments to enable commands and set the default gamemode.

Syntax:

`publish [allowCommands] [gamemode] [port]`

### Telemetry

This release includes the WorldUnloaded event, a required event, as well as several opt-in events. Diagnostic tracking is a tool that helps us understand what you like about Minecraft, which allows us to make those things better.

The reason that WorldUnloaded, along with [WorldLoaded](https://www.minecraft.net/en-us/article/minecraft-snapshot-21w38a), is a required event is that the information we’re looking at is, well, required. As a part of Xbox, we all need to follow a standard of practice, you can find a detailed description of it [here](https://privacy.microsoft.com/en-us/privacystatement). The parameters for what data we consider to be critical to our work are set by our team at Mojang Studios in alignment with Xbox.

What we want to find out is how fun you think Minecraft is. There are lots of ways to figure that out, like feedback, playtests, experience, and magic. We want to add data to that mix, which is where WorldLoaded and WorldUnloaded come in. WorldLoaded measures when you boot a session up, and WorldUnloaded measures when you shut it down. Together, they will measure how fun Minecraft is, using metrics such as playtime and the game modes that players choose to play. That’s it. All the data we collect, whether it’s required or opt-in, follows GDPR and CCPA best practices to keep your information safe.

The rest of the current telemetry events are opt-in, which means that you can choose whether or not you want to send us additional data. The only players that can’t opt-in are Microsoft child accounts, but everyone can still send in all of their feedback to [feedback.minecraft.net](http://feedback.minecraft.net/).

Just like all the thoughts and comments we get from you on our feedback site, this is something that greatly helps us improve Minecraft. We want to make a game that you want to play, so we want to know what that game needs. Even if it’s more lava.

#### Transparency

-   Added Telemetry Data Collection Screen
    -   This screen displays information about the type of data that is sent
    -   The level of data sent can be controlled between "Minimal" and "All"
        -   "Minimal" sends only the required data
        -   "All" sends the required data, as well as optional data
    -   The default data level is "Minimal" (only the required data)
-   Every telemetry event sent from the client is now logged to disk
    -   Old log files are removed after 7 days
    -   These can be found under the `logs/telemetry` directory
        -   A shortcut to this directory is available via the "Open My Data" button on the Telemetry Data Collection screen

#### Required events

-   Added WorldUnloaded event
-   Removed client Java version from the WorldLoaded event

##### WorldLoaded & WorldUnloaded

Understanding how Minecraft is played allows us to focus game updates and improvements on the areas that are most relevant to players. The data that tells us this includes game mode, client or server modded status, and game version.

WorldLoaded & WorldUnloaded are two paired events that calculate how long the world session has lasted (in seconds and ticks). Data from WorldLoaded is sent when a world is launched, and data from WorldUnloaded is sent when a world is shut down (quitting to title, disconnecting from a server).

#### Optional events

-   Added PerformanceMetrics and WorldLoadTimes events

##### PerformanceMetrics

Knowing the overall performance profile of Minecraft helps us tune and optimize the game for a wide range of machine specifications and operating systems.

The periodic performance metrics includes data such as frame-rates, rendering performance, memory usage, operating system, and the modded status of the client and server.

Game version is included to help us compare the performance profile for new versions of Minecraft.

##### WorldLoadTimes

It’s important for us to understand how long it takes to join a world, and how that changes over time. For example, when we add new features or do larger technical changes, we need to see what impact that had on load times.

This event includes the total time in milliseconds for the world to load, whether this was a new world, as well as game version and platform details.

### Game Rules

-   Added `blockExplosionDropDecay`, `mobExplosionDropDecay` and `tntExplosionDropDecay` game rules
    -   When set to `false`, all blocks drop loot
    -   When set to `true`, blocks drop loot randomly depending on how far from the explosion center
    -   Defaults to `false` for tnt, true for block and mob
-   Added `snowAccumulationHeight` game rule
    -   When it is snowing, this game rule determines the maximum number of layers can be accumulated in each block
    -   Defaults to `1`
    -   Set to `0` makes no snow form at all
    -   Set to `8` or above lets snow form up to the level of a full block
-   Added `waterSourceConversion` and `lavaSourceConversion` game rules
    -   When set to `true`, allows new sources of that fluid to form
    -   Defaults to `true` for water and `false` for lava
-   Added `globalSoundEvents` game rule, controlling whether certain gameplay moments are heard by all players regardless of location
    -   Defaults to `true`

### Recipes

#### Crafting book categories

-   Crafting book categories/tabs can now be controlled by recipe definitions
-   Categories available for `shaped`/`shapeless` and various special crafting recipes:
    -   `building`
    -   `redstone`
    -   `equipment`
    -   `misc` (default)
-   Categories available for `smelting`, `blasting`, `smoking`, `campfire_cooking`
    -   `food`
    -   `blocks`
    -   `misc` (default)
-   Some crafting books collapse multiple categories into a single tab
-   The exact mappings might change in the future

### Resource Packs

-   The Resource Pack version is now 12
-   Removed "fixers" for resource packs with versions 3 and 4 (pre-flattening)
    -   The game will no longer try to adapt packs with those versions to the current version
-   Game now loads all block models and blockstate definitions in appropriate directories
    -   That means that if a pack has invalid model it will prevent pack from loading, even if this model is unused

#### Texture loading changes

-   Context: When the game loads all textures used by block and item models need to be stitched (merged) into a single image, called the "atlas"
    -   Individual textures that are stitched onto the atlas are called "sprites"
-   To improve loading performance, block and item textures are now loaded before they are processed by block and item models
    -   By default, textures not in the `textures/item` and `textures/block` directories will no longer be automatically recognized and will fail to load
-   Resource packs can now have configuration files, located in `atlases` directory, that control which images are included in the atlases

##### Atlas configuration files

-   New directory `atlases` is now present for resource packs
-   This directory contains JSON entries for configuring atlases:
    -   `blocks` - textures used by block and item models
    -   `banner_patterns`, `beds`, `chests`, `shield_patterns`, `shulker_boxes`, `signs` - used to render some special-case models
    -   `mob_effects` - textures used for effect icons in the UI
    -   `paintings` - textures used for paintings
    -   `particles` - textures used for particles (referenced by the `textures` field in files within the `particles` directory)
-   If multiple packs include those files, they are merged by their order within the pack (same as tags in data packs)
-   Inside these files is a JSON object with a single list called `sources`
    -   Every entry in `sources` runs in during load, in order of definition, adding or removing new files to the texture list; to be later referenced by block models, particles, etc
-   Types of sources:
    -   `directory` - lists all files in a directory and its subdirectories, across all namespaces
        -   `source` - directory in pack to be listed (relative to `textures` directory)
        -   `prefix` - string to be appended to the sprite name when loaded
    -   `single` - adds a single file
        -   `resource` - location of a resource within the pack (relative to `textures` directory, implied `.png` extension)
        -   `sprite` - sprite name (optional, defaults to `resource`)
    -   `filter` - removes sprites matching the given pattern
        -   `namespace`, `path` - patterns (regular expressions, regex) of ids to be removed (only works for entries already in the list)
            -   If omitted, any value will be matched
    -   `unstitch` - copies rectangular regions from other images
        -   `resource` - location of a resource within the pack (relative to `textures` directory, implied `.png` extension)
        -   `divisor_x`, `divisor_y` - used for determining the units used by regions
        -   `regions` - list of regions to copy from the source image
            -   `sprite` - sprite name
            -   `x`, `y` - coordinates of the top-left corner of the region
            -   `width`, `height` - size of the region
        -   Values such as `x` are transformed to real image coordinates via dividing by their divisor, and then multiplying by the real image size
-   Example: if a pack has a file named `assets/test/textures/fancy/iridium.png` and source is `{"type": "directory", "source": "fancy", "prefix": "custom/"}`, the texture will be available in models as `test:custom/iridium`

### Custom Player Head Note Block sounds

-   Player Heads can now contain a `note_block_sound` field
    -   When present, this determines the sound a note block makes when the head is placed on top of it

### New entity sub-predicate types

-   Added new entity sub-predicates for some entity types with variants:
-   `axolotl`
    -   `variant` - values: `lucy`, `wild`, `gold`, `cyan`, `blue`
-   `boat`
    -   Works for boats, chest boats and rafts
    -   `variant` - values: `oak`, `spruce`, `birch`, `jungle`, `acacia`, `dark_oak`, `mangrove`, `bamboo`
-   `fox`
    -   `variant` - values: `red`, `snow`
-   `mooshroom`
    -   `variant` - values: `red`, `brown`
-   `painting`
    -   `variant` - values: see `painting_variant` registry
-   `rabbit`
    -   `variant` - values: `brown`, `white`, `black`, `white_splotched`, `gold`, `salt`, `evil`
-   `horse`
    -   `variant` - values: `white`, `creamy`, `chestnut`, `brown`, `black`, `gray`, `dark_brown`
    -   Markings are separate value and not matched
-   `llama`
    -   `variant` - values: `creamy`, `white`, `brown`, `gray`
-   `villager`
    -   `variant` - values: see `villager_type` registry
    -   Also works for Zombie Villagers
    -   Profession and level are separate values and not matched
-   `parrot`
    -   `variant` - values: `red_blue`, `blue`, `green`, `yellow_blue`, `gray`
-   `tropical_fish`
    -   `variant` - values: `kob`, `sunstreak`, `snooper`, `dasher`, `brinely`, `spotty`, `flopper`, `stripey`, `glitter`, `blockfish`, `betty`, `clayfish`

### Network Protocol

-   The network protocol now supports adding player entities to the world without being added to the 'tab' player list
-   Servers can now lazily distribute players' profile public keys along with their first chat packet
-   Message 'headers' within the Secure Chat protocol no longer need to be distributed when private messages are sent
-   Contextual message references are now deduplicated for efficiency within the Secure Chat network protocol
-   Servers can now lazily distribute players' profile public keys along with their first chat packet
-   Profile public keys will now be refreshed without reconnecting
-   Clients now reset their chat session on receiving a login packet

## Experimental Features in 1.19.3

-   Some experimental features now need to be enabled to appear in worlds
-   Such features are enabled by adding a built-in datapack when creating a world
-   Feature toggles are meant to hide unfinished or experimental features, to make sure your existing worlds remain unaffected
-   Worlds that are using experimental features will be marked as "Experimental" in world selection list
-   Experimental features cannot be toggled for existing worlds

### Bundles

-   Bundles are now available as an experimental feature

### Added Camel

Camels are now available when Update 1.20 experimental features are enabled.

-   Camels can be equipped with a saddle and ridden by two players
-   Camels spawn naturally in Desert Villages
-   Camels are tall
    -   Most hostile mobs will not be able to reach you when you are on a Camel
    -   They can walk over Fences and Walls without a sweat
-   Camels are very graceful, but grumpy mobs
    -   They randomly sit down
    -   While sitting, it is difficult to convince them to move
-   Camels can either walk slowly or sprint quickly
-   They can also dash forward but will lose stamina for a while when doing so

### Bamboo Wood Set

A new set of Bamboo wood blocks are now available when Update 1.20 experimental features are enabled.

-   New wood blocks
    -   Block of Bamboo
    -   Stripped Block of Bamboo
    -   Bamboo Planks
    -   Bamboo Door
    -   Bamboo Trapdoor
    -   Bamboo Sign
    -   Bamboo Stairs
    -   Bamboo Slab
    -   Bamboo Fence
    -   Bamboo Fence Gate
    -   Bamboo Button
    -   Bamboo Pressure Plate
-   Block of Bamboo can be crafted from 9 Bamboo and can be stipped like other wood logs
-   Bamboo Planks crafted from Block of Bamboo yield only 2 planks compared to 4 for wood logs
-   Added a new "Mosaic" plank variant that is unique to Bamboo called Bamboo Mosaic
    -   It can be crafted with 1x2 Bamboo Slabs in a vertical strip
    -   You can craft Stair and Slab variants of Bamboo Mosaic
    -   Bamboo Mosaic blocks cannot be used as a crafting ingredient where other wooden blocks are used, but they can be used as fuel
-   Added a unique Bamboo Raft and Bamboo Chest Raft which can be crafted like normal boats, but with Bamboo Planks
    -   They function the same as ordinary boats, but have a unique look to them

### Chiseled Bookshelf

A new, chiseled variation of the Bookshelf is now available when Update 1.20 experimental features are enabled.

-   Crafted with 6 planks and 3 wooden slabs
-   Can store Books, Book and Quills, Written Books, and Enchanted Books
    -   Holds up to 6 books
    -   Keeps the stories and lore of your world safe
    -   These can be added or removed from any slot by targeting the specific slot
-   Comparators can detect the last book placed/removed
    -   Perfect for hiding secrets in your spooky library
-   Works with Hoppers

### Hanging Signs

Ever wanted to hang up your signs? Fetch a few chains, strip some logs, and now you can! Hanging signs are now available when Update 1.20 experimental features are enabled.

-   Hanging Signs are a more expensive version of normal Signs
    -   Crafted with 2 chains and 6 stripped logs of your preferred wood type
    -   Crafting results in 6 Hanging Signs
-   Can be hung up in the following ways:
    -   Underneath a block that can provide support in the center, like a full block or a fence
    -   Attached to the solid side of a block
    -   Attached to the side or underneath another Hanging Sign
-   Unlike normal Signs, they cannot be placed directly on the ground without support from the side or above
    -   However, Hanging Signs that have a horizontal bar will not pop when the supporting block is removed

### Mob Heads on Note Blocks interaction

-   When placing a Mob Head on a Note Block, that Note Block will now play one of the ambient sounds of that mob when played by a player or powered by Redstone

### Piglin Mob Head

-   Piglins will now drop their heads when killed by a charged Creeper
-   Placing the Piglin head on a Note Block will play one of the Piglin's ambient sounds
-   The Piglin head will flap its ears when powered by Redstone, or when worn by a player while walking

### Advancements

-   Breeding Camels now counts for "The Parrots and the Bats" and is now required for "Two by Two"
-   Hanging Signs now counts for "Glow and Behold"

## Fixed bugs in 1.19.3

Around 200 bugs were fixed in this release. View the [list on the issue tracker](https://bugs.mojang.com/issues/?filter=27487).

---

# Minecraft: Java Edition 1.19.2

We're now releasing 1.19.2 for Minecraft: Java Edition. This release fixes a critical issue related to server connectivity with secure chat.

This update can also be found on [minecraft.net](https://www.minecraft.net/en-us/article/minecraft-java-edition-1-19-2).

If you find any bugs, please report them on the official [Minecraft Issue Tracker](https://aka.ms/snapshotbugs?ref=launcher). You can also leave feedback on the [Feedback site](https://aka.ms/JavaSnapshotFeedback).

## Fixed Bugs in 1.19.2

-   Fixed an issue causing players to get disconnected with secure chat
-   Fixed a crash in the social interactions screen

## Get the Release

To install the release, open up the [Minecraft Launcher](https://www.minecraft.net/download) and click play! Make sure your Launcher is set to the "Latest Release" option.

Cross-platform server jar:

-   [Minecraft server jar](https://piston-data.mojang.com/v1/objects/f69c284232d7c7580bd89a5a4931c3581eae1378/server.jar)

---

# Minecraft: Java Edition 1.19.1

We're now releasing 1.19.1 for Minecraft: Java Edition. This release adds Allay duplication and new Player Safety functionality.

## Features

-   Added Allay Duplication
-   Tweaked Sculk Catalysts
-   Added Chat Trust status
-   New Options for Chat Preview
-   Added Player Reporting

### Allay

-   Allays will dance to a Record playing in a Jukebox
-   If the Allay is handed an Amethyst Shard while dancing it will duplicate
    -   Duplication has a 5-minute cooldown

### Sculk Catalyst

-   Sculk Catalysts will now drop 5 XP instead of 20 XP

### Chat

-   Moved the chat scrollbar to the right
-   When typing a message, the signing status of the displayed chat message is shown with a colored indicator
    -   The indicator will either appear to the left of the chat input field, or to the left of the chat preview if chat preview is being used
    -   The indicator will be blue when the displayed message is signed
    -   The indicator will be orange when Chat Preview is enabled and a preview is waiting to be signed
-   The background of the chat preview will also display slightly faded when a preview is waiting to be signed
-   Added a warning toast when connecting to a server that doesn't enforce secure chat
-   The list of players on the Social Interactions screen now places entries for players with recently seen messages at the top of the list

#### Chat Trust Status

-   Messages that are not signed with the Secure Chat system, or have been tampered with by the server will now be marked
    -   Messages with missing or invalid signatures are marked as "Not Secure"
    -   Messages that are detected as modified are marked as "Modified"
-   The trust status of messages are displayed with both a colored indicator and an icon
    -   The colored indicator is always visible
    -   The icon is only visible when the chat screen is open
-   Hovering over the icon will provide more information about the trust status
    -   For modified messages, the original secure text will also be displayed in the tooltip
-   System messages (non-player chat, such as command output) are displayed with a gray color indicator

#### Chat Preview

-   Added "When Sending" Chat Preview option for updating chat previews only when attempting to send a message
    -   To confirm sending a message, a second hit of the Enter/Return key is required
    -   The previous "ON" setting has been renamed to "While Typing"
-   In "While Typing" mode, the chat preview will no longer display previews if the message has not been modified by the server
-   Chat Preview is now enabled in singleplayer, and will display when using commands that have selector substitution such as `/say`
-   Previewed hover events and click events are highlighted with a solid background

### Player Reporting

It is now possible to report a player for sending abusive messages in the game chat. A reporter is required to select the individual chat messages that contain the objectionable content, as well as the category of the report, this is to provide the best context for our moderation team to take action. This is accessed via the social interactions screen.

-   Multiple chat messages can be selected for reporting
    -   Additional chat messages around this selection will also be used to provide our moderation team with further context
-   The category of the report can be selected from a list of Report Categories
    -   The Report Categories screen has a "Learn About Reporting" button that links to a help article
-   Additional comments can be entered to provide more details and information regarding the report

For more information, see this [article about Player Reporting](https://www.minecraft.net/en-us/article/addressing-player-chat-reporting-tool) and our [Reporting FAQ](https://help.minecraft.net/hc/en-us/articles/7317376541197).

### Suspensions & Bans

-   The game will now show a notice screen on startup if you have been suspended from online play
    -   The reason for the suspension is shown as well as how long it is effective for

### Realms

-   A message that has been filtered by the Java Realms Profanity Filter will now be marked with a yellow marker
-   Players will be notified if a chat message they have sent has been fully filtered for one or more receiving players on the Realm

## Technical

-   The chat input box will no longer apply to custom font glyphs with negative advances, or glyphs with advances greater than 32

### Chat Types

-   Chat types added to the `chat_types` registry are now only used for player chat, and not system messages
    -   The `system` and `game_info` chat types have been removed
-   Chat types have been simplified and are now only required to define `chat` and `narration` decorations
    -   Chat types no longer support overlays
    -   A system message should instead be used to display overlays
-   The `msg_command` chat type has been split apart into `msg_command_incoming` and `msg_command_outgoing`
-   The `team_msg_command` chat type has been split apart into `team_msg_command_incoming` and `team_msg_command_outgoing`
-   The `team_name` chat type parameter has been renamed to `target`
    -   This chat type parameter is now used by `msg_command_outgoing`

### Components

-   The `run_command` click event for text components no longer supports sending chat messages directly
    -   Only commands are supported
    -   This means values now always need to be `/`\-prefixed
    -   Commands such as `/say` that produce a signed player chat message are not allowed
        -   `/tellraw` should be used instead

### Game Events

#### Added Game Events

-   `jukebox_play`
-   `jukebox_stop_play`

### Multiplayer Secure Chat Signing

-   The order of chat messages are now cryptographically verified
    -   This is used for validating the context of chat messages for Player Reports

### Server

-   `enforce-secure-profile` is now defaulted to `true` for dedicated servers
-   Insecure chat messages logged in the server are prefixed with a `[Not Secure]` tag
-   Custom servers can set their own auto-completion options for regular chat via a new network packet
-   Custom servers can hide player chat messages from display via a new network packet
    -   This does not delete player chat messages from chat logs

## Fixed Bugs in 1.19.1

-   More than 50 bugs were fixed in this release. View the [list on the issue tracker](https://bugs.mojang.com/issues/?filter=27220).

---

# Minecraft: Java Edition 1.19

Oh, hello. I didn’t see you there! I was too busy inspecting these mangrove tree roots. They’re all tangled up! What do you mean they’re supposed to be? Hey, that’s pretty neat.

While we’re on the topic – have you had a chance to check out all the other spiffy stuff that we added to Minecraft today? Because The Wild Update has officially launched and now the Overworld is full of frogs, allays, wardens (_shudder_), mud, boats with chests, new music, and much, much more! You can check out the list below for all the details, I’m too busy making heart eyes at these cute propagules to go through them all.

## Features

-   Added Mangrove Swamp biome
-   Added Mangrove Trees
-   Added Mangrove Blocks
-   Added Mud and Mud Brick Blocks
-   Added Clay renewability
-   Added Frogs and Tadpoles
-   Added the Deep Dark biome
-   Added Ancient Cities
-   Added Darkness mob effect
-   Added Disc Fragment and Music Disc 5
-   Added Echo Shard and Recovery Compass
-   Added the Swift Sneak enchantment
-   Added Sculk, Sculk Veins, Sculk Shrieker, and Sculk Catalyst Blocks
-   Added Warden mob
-   Added Allay mob
-   Added Boat with Chest
-   Added Goat Horns
-   Added new music
-   Leaves are now waterloggable
-   The main menu background now shows a Wild Update panorama
-   Minor changes to Minecart with Chest/Furnace/TNT/Hopper
-   Improved the predictability a number of gamplay elements
-   Explosions caused by player-ignited TNT now cause experience to drop from broken blocks (such as ore and sculk blocks)
    -   We will be keeping an eye on feedback for this change, it might change in a future update
-   Added sound option for 3D Directional Audio simulation
    -   This option is best experienced with headphones
-   Replaced Realms subtle selected world highlight with a clear green checkmark

### Mangrove Swamp

Muddy! Murky! Magnificent! Welcome to Minecraft's newest biome - the Mangrove Swamp

-   Located in warmer, more humid places where you'd normally find Swamp biomes in Minecraft
-   Here you can find Bees and Warm Frogs
-   The floor of this biome is coated with a thick layer of Mud
-   Have a nice boat ride under and around the larger-than-life roots of Mangrove trees
-   Mud generates all the way from the surface down to Stone
-   Tall Mangroves are far more common than Short Mangroves

### Mangrove trees

Introducing a new type of water-adapted trees that spawn propped up on roots

-   Have a chance of spawning a Bee Nest
-   Grows from Mangrove Propagules
-   Moss Carpet generates on top of the tree's roots

### Mangrove wood blocks

Added a new type of wood: Mangrove!

-   Mangrove Log and Stripped Mangrove Log
-   Mangrove Wood and Stripped Mangrove Wood
-   Mangrove Roots and Muddy Mangrove Roots
-   Mangrove Boat, Button, Pressure Plate, Door, Trapdoor, Sign, Slab, Fence, Fence Gate, and Stairs

### Mangrove leaves and propagules

-   Mangrove Propagule is a type of sapling that grows from the bottom of Mangrove Leaves
-   Bonemealing Mangrove Leaves will cause a new Propagule to start growing beneath it
-   Propagules grow through 4 stages, and growth can be accelerated by bonemealing
-   You can break off a fully grown Propagule and plant it like a sapling
-   Propagules can be placed and grow on all normal blocks normal saplings support, plus Mud and Clay
-   Propagules can be grown underwater
-   The Wandering Trader will now sometimes offer Propagules for sale

### Mud

-   Mud is a block that will generate in the upcoming Mangrove biome
-   When walking on Mud, entities slightly sink down into it like Soul Sand
    -   Unlike Soul Sand, no slowdown effect will be applied
-   Mud can be created by using a water bottle on dirt, by hand or with a Dispenser
-   Packed Mud can be crafted from Mud

### Mud bricks

-   Mud Bricks are a building block that can be crafted from Packed Mud
-   Mud Bricks can be crafted into Mud Brick Stairs, Walls, and Slabs using a Crafting Table or Stonecutter

### Clay renewability

-   Placing Mud above a block that has pointed Dripstone underneath will eventually turn the Mud Block into Clay

### Frogs

-   Frogs can spawn in Swamps and Mangrove Swamps on Grass, Mud, Mangrove Roots, and Muddy Mangrove Roots
-   Frogs can croak
-   Frogs can walk on land, swim and jump
-   Frogs can eat small Slimes, causing a Slime Ball to drop
-   Frogs can eat small Magma Cubes, causing a Froglight block to drop
-   Each Frog variant drops a specific Froglight Block
-   Added three Froglight blocks, a type of light source blocks

### Tadpoles

-   Tadpoles can swim in water
-   Tadpoles on land "jump around" like fishes on land, and eventually dies
-   Tadpoles that grows up turns into a Frog
-   Tadpoles grow into a different type of frog based on the biome they grow up in (Cold, Temperate, Warm)
-   Tadpoles can be caught in a bucket

![Minecraft 1.19 Frog](https://launchercontent.mojang.com/images/1-19-frog-full.jpg) A Frog in a Mangrove Swamp.

![Minecraft 1.19 Steve & Blocks](https://launchercontent.mojang.com/images/1-19-steve-blocks-full.jpg) Steve next to a house built out of blocks from the Mangrove Swamp.

![Minecraft 1.19 Mangrove Swamp](https://launchercontent.mojang.com/images/1-19-mangrove-full.jpg) A Mangrove Swamp biome in Minecraft.

![Minecraft 1.19 Underwater in a Mangrove Swamp](https://launchercontent.mojang.com/images/1-19-mangrove-underwater-full.jpg) A view from being underwater in a Mangrove Swamp biome.

### Deep Dark biome

Dig into the depths far underground to uncover the darkest biome in Minecraft - the Deep Dark.

-   Dimly lit and eerie, the Deep Dark is sure to strike fear into the hearts of even the most brave player
-   Less flooded than surrounding areas
-   The floor of the Deep Dark is covered in sculk
-   No mobs spawn in the Deep Dark

### Ancient City

Wander the halls of these long-abandoned structures in the Deep Dark depths to uncover some relics long forgotten.

-   Ancient City structures spawn in Deep Dark biomes
-   In chests, guarded by Sculk Sensors and Sculk Shriekers, you can find the new Swift Sneaking enchantment
-   You can also find a new mysterious block called Reinforced Deepslate here, which cannot be obtained in Survival
-   Mobs cannot spawn in Ancient Cities

### Darkness

-   A new mob effect applied to nearby players by the Warden and Sculk Shrieker
-   Lowers the gamma to an equivalent of "Moody" while having this effect
-   In periodic pulses, will lower the overall brightness of the world so that the darkness creeps up towards light sources
-   The icon for the Darkness effect is only shown in the inventory
-   A new Accessibility slider has been added in your Options menu called “Darkness Effect”
    -   Controls strength of the Darkness lighting effect
    -   Does not affect the fog distance

### Music Disc 5

A new music disc has been added to the game

-   Unlike other discs, it can only be obtained by finding and crafting 9 Disc Fragments together
-   These Disc Fragments can be found rarely in Ancient City Chests

### Recovery Compass

A new Recovery Compass can be crafted with Echo Shards, another new item which can only be found in Ancient City Chests

-   Unlike a normal Compass, the Recovery Compass will point to the last place you died
-   If you are not in the dimension you last died, or you haven't died yet in your world, it will spin randomly
-   It can be crafted with 1 Compass surrounded by 8 Echo Shards, which can be found in Ancient Cities

### Swift Sneak

Imbue your leggings with this shiny new enchantment to move as fast while crouching as you would normally walk!

-   When applied, it will increase your movement speed while sneaking
-   Has 3 different levels with different speed increases
-   It is the first enchantment unique to leggings equipment!

### Sculk

The rattling tendrils of the Sculk Sensors had to come from somewhere, right? Introducing sculk, a new family of blocks that dwells in the Deep Dark. they find a valid substrate they can feed off of

-   Added Sculk Catalyst Block, a mysteriously soul-emitting block that blooms with Sculk patches underneath nearby dying mobs
    -   Mobs that perish in the presence of the Sculk Catalyst will not drop their experience
-   Added Sculk Blocks
    -   When a mob dies near a Sculk Catalyst, some unknown process seems to consume blocks beneath and turn them into Sculk Blocks
    -   A Sculk charge that spreads has a chance to consume some of its charge to grow a Sculk Sensor or Sculk Shrieker
    -   Sculk Blocks have very low blast resistance
-   Added Sculk Vein Blocks
    -   These veins are found on the edge of Sculk patches
    -   Similar to Glow Lichen, they can be placed in any orientation
    -   Spreading of veins causes other blocks to be taken over by the sculk
    -   Sculk Vein can spread underwater
-   Added Sculk Shrieker Block
    -   Sculk Shriekers can be found growing rarely from the charge of a Sculk Catalyst
    -   Sculk Shrieker can be waterlogged
    -   Notable for its boney appendages, this block responds to Sculk Sensors detecting vibrations by sending out a warning call to distant Wardens
        -   Watch out when stepping on them, as they will feel that too and send out a call!
    -   Initially it may take some time for a Warden to arrive, but you'll hear it responding in the distance...
    -   Once it's close enough, a call from the Sculk Shrieker will summon the Warden nearby - be prepared!
-   Souls from mobs will spread through Sculk Veins and Sculk Blocks in random directions until
    -   The charge from souls in the Sculk Blocks and Sculk Veins will eventually decay, but it will decay slower within close vicinity of the Sculk Catalyst and faster when further away from its host
    -   If the charge is dropped outside the range of the Catalyst, it has a chance of growing a Sculk Sensor
-   Sculk, Sculk Veins, and Sculk Catalysts require Silk Touch to acquire
    -   If mined without Silk Touch, they will drop experience instead
-   The efficient tool for all Sculk family blocks is the Hoe

### Warden

The horror of the Deep Dark! A creature with no eyes, roughly resembling the Sculk that can be found throughout the Deep Dark, the Warden is an unstoppable force of nature that inhabits this biome. Wardens are powerful creatures, and it is often better to sneak around one that has emerged instead of taking it head on - you have been warned.

-   Just like Sculk Sensors, these terrifying creatures use vibrations as a means to navigate their environment
-   When vibrations aren't enough, they will also use a sense of smell to track down their prey - you can observe them sniffing their surroundings to get closer to unsuspecting players and mobs
-   If something gets too close, it will be noticed
-   In the Deep Dark, Wardens can appear anywhere
    -   When enough Sculk Shriekers have been alerted to your presence, a Warden will appear
-   The more vibrations a Warden detects, the more angry it will get
    -   You can hear and see this from how fast the souls in its chest are beating
-   Once a mob has pushed beyond the Warden's anger threshold, it will face its prey and roar before charging
-   Building up high, hiding behind walls or being out of range of their powerful melee attack will cause Wardens to switch to their ranged attack
    -   Their rib cages will open up to shriek a sonically charged ranged attack that can penetrate walls
    -   This attack bypasses protection for armor and shield
-   If, however, you keep the Warden from noticing you or getting angry for 60 seconds, it will dig back underground and despawn
    -   If the Warden is stuck in a liquid, it will despawn instead of digging
-   They have a special interaction with thrown projectiles
    -   If the Warden receives two projectile vibrations within 5 seconds of one another, it will grow angrier at the shooter
    -   If the Warden receives a projectile vibration more than 5 seconds from the last projectile, it will not grow angrier at the shooter
    -   This allows you to strategically distract the Warden without it getting angry while you take loot from nearby chests
-   Wardens will also disable shields when they hit them with their fists
-   They drop a Sculk Catalyst upon death

### Changes to vibrations

-   Carpets, like Wool Blocks, will now dampen the vibrations caused by their placing, breaking, or dropping as items
-   Carpets now also dampen the vibrations caused by running and jumping over them
-   `item_interact_start` and `item_interact_finish` vibrations are ignored if sneaking

![Minecraft 1.19 Ancient City](https://launchercontent.mojang.com/images/1-19-ancient-city-full.jpg) An Ancient City in the Deep Dark.

![Minecraft 1.19 Warden Sonic Boom Attack](https://launchercontent.mojang.com/images/1-19-warden-sonic-full.jpg) A Warding shooting its Sonic Boom attack.

![Minecraft 1.19 Sneaky Steve](https://launchercontent.mojang.com/images/1-19-sneaky-steve-full.jpg) A Warden in the Deep Dark.

![Minecraft 1.19 Sculk Family](https://launchercontent.mojang.com/images/1-19-sculk-full.jpg) A variety of sculk blocks.

### Allay

-   Allays will collect all the surrounding items that match the item they are holding
-   Allays will like a player who hands them an item and will bring the items they collect to their liked player
-   If the Allay hears a Note Block play, that Note Block becomes the Allay's favorite Note Block for 30 seconds
    -   The Allay will stay near that Note Block for that duration and bring its collected items to Note Block instead of to the player
-   Interacting with an Allay with an empty hand will remove the item the Allay is holding
-   Allays can be found at Pillager Outposts and in Woodland Mansions
-   Allays are immune to damage from their liked player
-   Allays have a natural health regen of 2 health per second

### Boat with Chest

-   Lets you bring more stuff on your boat adventures
-   If you are in the Boat, press the open inventory key to access the Chest contents
-   If you are not in the Boat, sneak and use your interact key to access the Chest contents
-   If you break the Boat the Chest contents will spill out, like with other Chests
-   Also works with Hoppers, Droppers, and other blocks that interact with Chests
-   Like other Chests, opening a Boat with Chest or breaking the Boat will anger Piglins, since they think all Chests belong to them

### Goat Horns

-   A Goat Horn drops when a Goat rams a tree or any other hard block that occurs naturally where Goats spawn (Log, Stone, Packed Ice, Iron Ore, Copper Ore, or Emerald Ore)
    -   Other solid blocks are unfamiliar to the goat, so it won't ram them
-   Use the Goat Horn to play a loud sound that can be heard from afar
-   Each Goat Horn has its own sound based on the Goat it originated from
-   There are 8 Goat Horn variants, 4 of them exclusive to Screaming Goats
-   Goat Horns can sometimes be found in Pillager Outposts

### Advancements

-   Added "It Spreads" for killing a mob near a Sculk Catalyst
-   Added "You've Got a Friend in Me" for having an Allay deliver items to you
-   Added "Birthday Song" for having an Allay drop a Cake at a Note Block
-   Added "With our Powers Combined" for having all Froglights in your inventory
-   Added "Bukkit Bukkit" for catching a Tadpole in a Bucket
-   Added "When the Squad Hops into Town" for getting each Frog variant on a Lead
-   Added "Sneak 100" for sneaking near a Sculk Sensor or Warden to prevent it detecting you
-   Added Darkness effect to the "How Did We Get Here?" advancement

### Predictability of randomized events

Some randomized events are now more predictable and no longer have a possibility of extreme behaviors:

-   Placement and velocity of things dropped from Droppers/Dispensers
-   Placement and velocity of items spawned from containers upon destroy
-   Randomized `follow_range` component attribute for mobs
-   Velocity of Horses spawned from Skeleton Traps
-   Blaze random position and randomized speed of Blaze projectiles
-   Randomized portion of damage and velocity of Arrows
-   Randomized flight pattern of Fireworks
-   Bobbing patterns and time until a Fish appears for Fishing Rods

### Four new music tracks

-   The new music tracks are called Ancestry, Aerie, Firebugs, and Labyrinthine
-   They play in certain biomes

### Minecart variants

-   The recipes for minecart with Chest/Furnace/TNT/Hopper are now shapeless
-   When broken each Minecart variant drops itself as item, instead of splitting into two items (such as Chest and Minecart)

### Monster Spawning

-   Endermen, Skeletons, Wither Skeletons and Piglins now spawn in a wider range of light levels in the Nether (from light level 0 to 11)
    -   This makes it possible for more types of mobs to spawn inside Nether Portals, which causes them to instantly change dimensions after spawning
    -   Our intent for the future is to prevent most mobs from spawning in Nether Portals and the ones that do will not immediately travel through the portal - expect to see these changes in a coming version

![Minecraft 1.19 Boat with Chest](https://launchercontent.mojang.com/images/1-19-boat-chest-full.jpg) Alex in a boat with a chest.

![Minecraft 1.19 Allay](https://launchercontent.mojang.com/images/1-19-allay-full.jpg) An Allay holding a Goat Horn.

![Minecraft 1.19 Alex & Goat Horn](https://launchercontent.mojang.com/images/1-19-goathorn-full.jpg) Alex holding a Goat Horn.

## Technical

-   The data pack format is now 10
-   The resource pack format is now 9
-   Added the ability for data and resource packs to selectively hide files from packs below them
-   Added `kill_mob_near_sculk_catalyst` advancement trigger
-   Added `thrown_item_picked_up_by_player` advancement trigger
-   Added `allay_drop_item_on_block` advancement trigger
-   Added `avoid_vibration` advancement trigger
-   Removed field `location` from triggers `location`, `slept_in_bed`, `hero_of_the_village` and `voluntary_exile` - it was handled exactly the same as `player.location`
-   Some mutually exclusive tests in entity predicate (`player`, `fishing_hook`, `lightning_bolt` and `catType`) have been collapsed to the `type_specific` field
-   Removed the `placefeature` command
-   Added the `place` command
-   The `locate` command is now moved to `locate structure`, `locatebiome` is moved to `locate biome`
-   Added `locate poi <type: point_of_interest_type>`
-   Added the loot table function `set_instrument`
-   The bundled Java runtime has been updated to 17.0.3
-   The M1 ARM64 architecture is now supported
-   `LWJGL` library has been updated to version 3.3.1
-   Banner patterns available in the Loom can now be controlled with tags (`banner_pattern/no_item_required` for no pattern item and `banner_pattern/pattern_item/*` for specific banner pattern items)
-   Added new font glyph provider for spaces
-   Added new game events
-   Renamed some game events
-   `CatType` fields on enitites with type `minecraft:cat` have been replaced with `variant`, with numeric values being replaced with string ids (so, for example, `5` becomes `minecraft:calico`)
-   The type of the field `Id` in the mob effect structure (for example, in the `ActiveEffects` list on entities) has been changed from `byte` to `int`
-   Added `minecraft:darkness` mob effect
-   Added `sonic_explosion` particle
-   World presets/types and flat world presets in the "Create World" screen can now be controlled by datapacks
-   Servers can now enable Chat Preview, which displays a server-controlled preview above the chat edit box
-   Servers can now define different chat style formats for clients
-   Added server property `max-chained-neighbor-updates` to limit the amount of consecutive neighbor updates before skipping additional ones
    -   Negative values remove the limit
-   Servers will now also send an additional icon and MOTD packet after a player has connected
    -   This allows servers with `enable-status=false` to set an icon and MOTD for players that successfully connect

### Advancements

#### New triggers

##### `allay_drop_item_on_block`

-   Triggered when an Allay drops an item on a block
-   Conditions:
    -   `player` - a predicate for the player who gave the Allay the item to collect
    -   `location` - a predicate for the block that the item was dropped on
    -   `item` - a predicate for the item that was dropped

##### `avoid_vibration`

-   Triggered when a vibration event is ignored because the source player is holding the sneak key
-   Conditions:
    -   `player` - a player for which this trigger runs

##### `kill_mob_near_sculk_catalyst`

-   Triggered when a player kills an entity next to a Sculk Catalyst
-   Conditions:
    -   `player` - a predicate for the player killing the entity
    -   `entity` - a predicate for the entity that was killed
    -   `killing_blow` - a predicate for how the entity was killed

##### `thrown_item_picked_up_by_player`

-   Triggered when a player picks up an item that was thrown by an entity
-   Conditions:
    -   `player` - a predicate for the player picking up the item
    -   `entity` - a predicate for the entity that threw the item
    -   `item` - a predicate for the item

### Blending

-   Blending now supports 3D biome blending, which blends the underground biomes as well as the overground biomes
-   Removed `blending_data.old_noise`, now existence of `blending_data` in chunk data determines if a chunk is considered old
-   Added `blending_data.min_section` and `blending_data.max_section` that determines which section data that will be used for blending

### Chat Preview

-   Servers can enable Chat Preview by setting `previews-chat=true` in `server.properties`
-   Custom servers can enable or disable chat preview for certain clients by sending a new network packet
-   When enabled, a server-controlled preview appears above the chat edit box, showing how the message will look when sent
    -   A preview is also shown for chat-related commands, such as `/say` and `/msg`
-   This can be used by servers to preview messages with styling applied, such as emojis or chat coloring
-   Chat Preview sends chat messages to the server as they are typed, even before they're sent
    -   The server then sends back the styled preview in real time
    -   This allows servers to apply dynamic message stylings while still allowing chat to be securely signed
-   A warning screen is shown on the client when joining a server with Chat Preview, and it can be globally disabled in Chat Settings

### Chat Types

-   Different chat style formats can now be controlled by the server through the `chat_type` registry
    -   These are synchronized to clients when they join the server
    -   The translation key or translation format can be defined, like `chat.type.text` or `%s says: "%s"`
        -   Chat can be similarly optionally narrated with a custom translation key or format
    -   The entire message can have formatting applied, such as italics or a specific color (but currently not click or hover events)

### Commands

#### `place`

New command that replaces `placefeature` and can place features, jigsaws, structures, and templates at a given location. Syntax:

    place feature <feature> [pos]
    place jigsaw <pool> <start> <depth> [pos]
    place structure <structure> [pos]
    place template <template> [pos] [rotation] [mirror] [integrity] [seed]
    

Parameters:

-   `place feature` works like `placefeature` used to work
-   `place jigsaw` works like using the generate button in the UI of a Jigsaw Block
-   `place template` works like using the load button in the UI of a Structure Block
-   `place structure` generates a full structure, matching how structures generate during world generation
-   `feature`: The namespaced id of a configured feature to try to place
-   `structure`: The namespaced id of a structure to try to generate
-   `template`: The namespaced id of a template ("structure block file") to load and place
-   `pool`: The namespaced id of a template pool to start generating
-   `start`: The namespaced id name of a jigsaw to use as the starting anchor
-   `depth`: The maximum number of jigsaw connections to traverse during placement
-   `pos`: The position to use as the origin for the generation (if omitted, `~ ~ ~` is used)
-   `rotation`: The rotation to apply (if omitted, `none` is used)
-   `mirror`: The mirroring to apply (if omitted, `none` is used)
-   `integrity`: The structure integrity value between 0 and 1
-   `seed`: The seed to use for the randomized degradation when integrity is less than 1

### Debug

-   Added a heap memory allocation metric to the F3 debug screen
-   Added estimated GPU utilization percentage to performance profiling metrics and the F3 debug screen
    -   This is only available for graphics devices that support GPU timer queries
-   Removed the debug hotkey that cycles the render distance

### Game Events

#### Added Events

-   `teleport` with a vibration frequency of 5
-   `note_block_play` with a vibration frequency of 6
-   `instrument_play` with a vibration frequency of 15

#### Combined Events

The following events have been collapsed into `block_activate` and `block_deactivate`:

-   `block_press`
-   `block_unpress`
-   `block_switch`
-   `block_unswitch`

#### Other Changes

Other miscellaneous changes to game events:

-   `ring_bell` has been removed and replaced with `block_change`
-   Both `shulker_open` and `shulker_close` have been removed in favour of using `container_open` and `container_close`
-   `fishing_rod_cast` and `fishing_rod_reel_in` have been renamed to `item_interact_start` and `item_interact_finish`
-   `item_interact_start` is not detectable as a vibration to allow more specific actions be detected, like `drink` or `eat`, but `item_interact_finish` is
-   `entity_interact` should be dispatched more often when interacting with various mobs
-   Added the `dampens_vibrations` block tag that that includes all Wool and Wool Carpet blocks, to indicate blocks that will not trigger when placed, broken, or stepped on
-   Renamed item tag `occludes_vibration_signals` to `dampens_vibrations` item tag as well

#### Renamed Events

Some game events have been renamed, with some of those changes to make them more gramatically consistent:

-   `drinking_finish` -> `drink`
-   `entity_killed` -> `entity_die`
-   `entity_damaged` -> `entity_damage`
-   `elytra_free_fall` -> `elytra_glide`
-   `mob_interact` -> `entity_interact`
-   `ravager_roar` -> `entity_roar`
-   `wolf_shaking` -> `entity_shake`

### Game Rules

-   Added `doWardenSpawning` game rule

### Loot Tables

#### New functions

##### `set_instrument`

Sets the item tags needed for instrument items to a randomly selected instrument from a tag Parameters:

-   `options` - a tag reference specifying the instrument options to randomly pick from

### Multiplayer Secure Chat Signing

-   Chat messages between players are now cryptographically signed
    -   The message arguments to `/say`, `/msg`, `/teammsg`, and `/me` commands are all also signed
-   Players are given a Mojang provided key-pair on startup
-   Servers can require players to have a Mojang-signed public key by setting `enforce-secure-profile=true` in `server.properties`
    -   Enforcing secure profiles will prevent players without a Mojang-signed public key from connecting
    -   By default this is set to `false`, allowing players to connect without a Mojang-signed public key
-   Static chat styling can now be controlled by the server through the `chat_type` registry, or with server resource packs as before
-   Dynamic chat styling can also be controlled by the server, although this is only signed when Chat Preview is enabled
    -   Clients can prefer to always show the original, signed message by enabling "Only Show Secure Chat" in Chat Settings
-   Chat from players still using Mojang Accounts is not signed
    -   Their messages will not show for players with "Only Show Secure Chat" enabled
    -   They may be unable to join server with the `enforce-secure-profile` option enabled

### Pack filters

-   Data and resource packs can have `filter` section in `pack.mcmeta`
-   This section has mandatory field `block`, which is a list of patterns (regular expressions) for namespaces and paths
-   If any of the files in packs are added before one with `filter`, the section will match any pattern inside `block`, and it will then be filtered out (i.e. treated as if it wasn't present in the first place)
-   `filter` section does not apply to a pack containing it - only to packs loaded before it
-   Both `namespace` and `path` can be omitted
    -   Missing field matches every value
-   For example, adding a pack with this section in `pack.mcmeta` after the vanilla pack will hide all the recipes and advancements defined by the vanilla pack

#### Example

    "filter": {
        "block": [
            {
                "namespace": "minecraft",
                "path": "recipes/.*"
            },
            {
                "namespace": "minecraft",
                "path": "advancements/.*"
            }
        ]
    }
    

### Paintings

-   Paintings that are placeable in survival can now be controlled with the `painting_variant/placeable` tag
-   Added unused paintings from Bedrock edition (`earth`, `wind`, `fire`, `water`)
    -   These paintings are not placeable by default, but can be added through a datapack

### Point of Interest types

-   Removed `unemployed` and `nitwit` `point_of_interest_type`s
-   Added tag `point_of_interest_type/acquirable_job_site` for all job sites seeked by villagers with `none` profession
-   Added tag `point_of_interest_type/village` for PoI that are part of village
-   Added tag `point_of_interest_type/bee_home` for all PoI targeted by bees

### Predicates

-   The `feature` field in location predicates is now called `structure`

#### Entity predicate

-   `player`, `fishing_hook`, `lightning_bolt` and `catType` fields have been replaced with `type_specific`
-   `type_specific` has field `type` (one of `player`, `fishing_hook`, `lightning_bolt` or `cat`) and same fields as removed fields
-   `catType` has been wrapped to match new format and now uses new cat variant names instead of texture names:
-   New `type_specific` options:
    -   `frog` has `variant` field matching Frog variant (`minecraft:warm`, `minecraft:temperate` or `minecraft:cold`)
    -   `slime` applies for Slimes and Magma Cubes, has `size` field matching Slime size (smallest is `1`)

##### `catType` Example

Before:

     "catType": "minecraft:textures/entity/cat/british_shorthair.png"
    

After:

     "type_specific": {
        "type": "cat",
        "variant": "minecraft:british"
     }
    

##### `type_specific` Example

Before:

     "lightning_bolt": {
       "blocks_set_on_fire": 0
     }
    

After:

      "type_specific": {
        "type": "lightning",
        "blocks_set_on_fire": 0
      }
    

### Space glyph provider

-   The new glyph provider type `space` is added to allow creation of space-like glyphs
-   The new provider has a single argument called `advances` which is a map of codepoint to glyph advance (width)
-   The rendering of space glyph is no longer hardcoded (needs to be declared manually in font)

### World presets

-   New registry types `worldgen/world_preset` and `worldgen/flat_level_generator_preset` have been added to configure data-driven presets (like "Amplified" or "Single Biome")
-   Two tags for world presets have been added (`normal` and `alternative`) to control which values show on the "World Type" button in the "Create World" screen
-   One tag has been added (`visible`) for flat world presets to control the order that elements are displayed in the "Configure Flat World" screen
-   World presets can also be used as a value of `level-type` in `server.properties`

## Fixed Bugs in 1.19

-   About 150 bugs were fixed in this release. View the [entire list on the issue tracker](https://bugs.mojang.com/issues/?filter=27034).

---

# Minecraft: Java Edition 1.18.2

We're now releasing 1.18.2 for Minecraft: Java Edition. This release adds universal tags and the placefeature command. It also introduces the possibility for experimental data packs to customize cave generation and to add new custom structures to worlds.

Additionally, this version contains compliance updates for South Korean players.

Enjoy!

## Changes in 1.18.2

-   Users running Minecraft in a 32-bit environment will receive a warning in the main menu about the upcoming end of 32-bit environment support
-   If you’re playing in South Korea, we added gameplay timers and notices in compliance with gaming laws to help remind players to take occasional breaks from gameplay
-   A seed of the number zero is no longer handled as a special case
-   Any spaces before/after an inputted seed will now be trimmed
-   Dolphins will now more accurately pick the closest structure regardless of type
-   Ender chests are no longer gift wrapped around Christmas

## Technical Changes in 1.18.2

-   Added command: `placefeature`
-   The `locate` command now uses a namespaced id parameter
-   The `locate` command parameter is now a configured structure rather than a structure type. For instance, you can now use `/locate village_desert` or `/locate shipwreck_beached`
-   `locate` and `locatebiome` commands now support tags (prefix with `#` to distinguish from normal ids)
-   It is now possible to add custom structures in experimental datapacks
-   A lot of the cave generation is now configurable through experimental datapacks
-   Any type present in registries (blocks, items, biomes, etc.) can now have tags
-   The datapack version is now 9

### `placefeature` Command

New command that places a configured feature at a given location. Syntax: `placefeature <id> [pos]` Parameters:

-   `id`: The namespaced id of a configured feature to place
-   `pos`: The position to use as the origin for the feature placement (if omitted, `~ ~ ~` is used)

### Configurable caves

-   A new registry was added for Density functions (caves are created by combining those together)
-   Noise settings got a new field `noise_router` (and lost a couple of flags), see `worldgen/noise_settings` folder in the worldgen report
-   Noise router wires data-driven parts of the cave generation with the rest of the code

### Configured Structures and Structure Sets

The game now generates and stores data-driven configured structures.

-   Experimental datapacks can add new structure sets
-   The `feature` field in location predicates now references a configured feature
-   The `exploration_map` loot table function `destination` field is now a configured feature tag id
-   The `exploration_map` loot table function no longer automatically sets the display name of the map

### Universal tags

-   Tags can now be defined for any registry (blocks, items, biomes, etc. - see `registries.json` in report)
-   New tags are stored in datapacks under `tags` directory (same as old ones)
    -   Names of new tag directories are the same as registry names (so `/data/[namespace]/tags/potion` and `/data/[namespace]/tags/worldgen/biome`)
    -   Existing tags (`blocks`, `items`, `fluids`, `entity_types`, `game_events` and `functions`) keep their name (for now)
-   Some fields in worldgen structures that previously accepted only lists of element ids now accept tags
    -   Those entries now accept `[id, ...]`, `id` (shortcut for `[id]`) and `#tag`
    -   Changed fields are:
        -   `feature.glow_lichen` configuration: `can_be_placed_on`
        -   `feature.spring_feature` configuration: `valid_blocks`
        -   `feature.simple_random_selector` configuration: `features`
        -   `block_predicate_type.matching_blocks`: `blocks`
        -   `block_predicate_type.matching_fluids`: `fluids`
        -   `biome`: inner list in `features`, map value in `carvers`
        -   `biome_source.checkerboard`: `biomes`
-   Some tag fields now require id to be prepended with `#` (however they are not yet accepting element list)
    -   `dimension_type`: `infiniburn`
    -   `feature.geode` configration: `blocks.cannot_replace`, `blocks.invalid_blocks`
    -   `feature.vegetation_patch`, `feature.waterlogged_vegetation_patch` configuration: `replaceable`
    -   `feature.root_system` configuration: `root_replaceable`
    -   `structure_processor.protected_blocks`: `value`

## Fixed Bugs in 1.18.2

In addition to crashes and other stability improvements, around 100 player-reported bugs were fixed in this release. View the [list on the issue tracker](https://bugs.mojang.com/issues/?filter=26771).

---

# Minecraft: Java Edition 1.18.1

We’re now releasing Minecraft: Java Edition 1.18.1. This release fixes a critical security issue for multiplayer servers, changes how the world fog works to make more of the world visible, and fixes a couple of other bugs.

If you are running a multiplayer server, we highly encourage you to upgrade to this version as soon as possible.

Enjoy!

## Technical Changes in 1.18.1

-   Fixed an issue that would cause players on low-bandwidth connections to get timeout errors when connecting to a server
-   World fog now starts further away from the player, to make distant terrain more visible
-   Instead of applying fog as a spherical volume it is now applied as a cylindrical volume

## Fixed Bugs in 1.18.1

-   [MC-152198](https://bugs.mojang.com/browse/MC-152198) Actual render distance is 2 chunks lower than render distance setting
-   [MC-219507](https://bugs.mojang.com/browse/MC-219507) Beacon's power reverts back to previous one on world reload
-   [MC-229321](https://bugs.mojang.com/browse/MC-229321) Bees inside of bee hives / nests sometimes despawn when the world is reloaded
-   [MC-242729](https://bugs.mojang.com/browse/MC-242729) "Observer activating without any updates nearby, caused by /clone"
-   [MC-243216](https://bugs.mojang.com/browse/MC-243216) Chunk render distance on servers seems shorter than in 1.17.1
-   [MC-243796](https://bugs.mojang.com/browse/MC-243796) Random non fatal exceptions in console: Failed to store chunk ConcurrentModificationException

---

# Minecraft: Java Edition 1.18

It’s been quite the trek, but we’re here. At the summit. The Caves & Cliffs Update: Part II is out today, completing the much anticipated cave update. What better way to celebrate than by climbing to the top of a higher than ever mountain. Let’s take a moment and just take in that view. Wait. What’s that sound. Don’t tell me that goat is back.

AAAAARGH.

Ouff! Ouch! Ow!

Where am I? It’s dark down here! It’s almost as if I fell a greater distance than I would have before today. Figures. While I try to get out of this dripstone cave, I hope you enjoy all of the new features that 1.18 brings. Could you pass me a candle before you leave? It really is dark down here.

## Features

-   Added an "Allow Server Listings" option to opt out of having your name displayed in server listings
-   Added an Online options screen where you can now find the Realms Notifications option
-   Added new Overworld biomes
-   Added noise caves and aquifers
-   Added world autosave indicator for single-player worlds
-   Axolotls now have their own, separate, mob cap
-   Axolotls now only spawn in Lush Caves when in water that is above Clay Blocks
-   Badlands Mineshafts now generate higher up
-   Buried Treasure Chests may contain a Potion of Water Breathing
-   Changed default brightness to 50
-   Cod, Salmon, Pufferfish, Tropical Fish, Squid, and Dolphins now only spawn in water from height 50 to height 64
-   Frozen Peaks biome
-   Glow Squids now only spawn in water blocks under height 30
-   If it is raining, sleeping will stop the rain and reset the weather cycle (in 1.17 sleeping would always reset the weather cycle)
-   Illagers (Vindicator, Pillager, Evoker) no longer attack baby villagers
-   New music has been added to the game
-   New ore distribution and large ore veins
-   Overworld build and generation limits have been expanded
-   Raised the cloud level from 128 to 192
-   Redesigned how effects look in the inventory screen, to allow them to show even with recipe book open
-   Removed world types "Caves" and "Floating islands" from the world creation screen
-   Sprinting is no longer reduced to walking when gently brushing your sleeve against a wall
-   Tropical Fish now also spawn in Lush Caves at any height
-   Villages are slightly more spread out
-   World spawn selection algorithm has been reworked, now spawns player according to climate parameters

### Advancements

-   Added "Caves & Cliffs" for falling from top to bottom of the Overworld
-   Added "Feels like home" for riding strider on lava for 50 blocks in the Overworld
-   Added "Star Trader" for trading with a villager at the build height limit
-   Added "Sound of Music" for playing music with a jukebox in a Meadow biome

### Blocks

-   Enchanting Tables now emit a low amount of light
-   Using Shears on the tip of a Cave Vine, Twisting Vine, Weeping Wine, and Kelp will stop them from further growing
-   Copper Ore now drops 2-5 (from 2-3) Raw Copper items
-   In the Stonecutter, a Block of Copper can be converted to 4 Cut Copper
-   Restricted Big Dripleaf placement to Clay, Grass, Dirt, Farmland, Moss, Rooted Dirt, Podzol, and Mycelium

### Effects

-   Your list of effects are now shown to the right of your inventory, instead of the left side
-   When the inventory effects list is visible, it will be hidden from the game view to reduce screen clutter
-   There's now two modes of seeing the effect list: Compact and Classic
    -   Classic is the pre-existing list of effects, one after another
    -   Compact is a single icon for each effect, suitable for small screen estate
-   The game will automatically switch between the two modes to suit the available screen estate (including having the recipe book open)

### Large ore veins

-   Ore Veins are large, rare, snake-like underground ore formations
-   Copper Ore Veins form between heights 0 and 50 and are mixed with Granite
-   Iron Ore Veins form betweens heights -60 and -8 and are mixed with Tuff

### Mob Spawning

-   Monsters now only spawn in places where the light from blocks is 0 (sky light still prevents spawning like before)

### Music

-   Added new music by Lena Raine and Kumi Tanioka to the Overworld (when playing in Survival Mode) and the main menu
-   Added a new music disc from Lena Raine titled 'Otherside'. This can be found rarely in Stronghold Corridor Chests or much more rarely in Dungeon Chests.

### New Overworld Biomes

#### Dripstone Caves

-   Contains plenty of Pointed Dripstone and Dripstone Block on the floors and ceilings, as well as within small pools of water
-   In some places, you'll find larger stalagmites, stalactites, and columns built from Dripstone Blocks
-   Contains extra Copper Ore
-   Drowned can spawn in aquifers inside Dripstone Caves

#### Frozen Peaks

-   Smooth mountain peaks with ice and snow
-   Spawns Goats and Yeti. Wait, no, actually it's just Goats.

#### Grove

-   Snowy terrain with big Spruce Trees and Powder Snow traps. You might want to wear leather boots!
-   Tends to generate on high-altitude terrain beneath mountain peaks or on hilltops
-   Spawns Wolves, Rabbits, and Foxes

#### Jagged Peaks

-   Dramatic jagged mountain peaks with Snow and Stone blocks
-   Spawns Goats

#### Lush Caves

-   Moss covers the floors and ceilings
-   Spore Blossoms grow from the ceiling and drip particles
-   Contains Clay pools with Dripleaf plants growing out of them
-   Contains Azalea Bushes and Flowering Azalea Bushes
-   The Azalea Tree loves to have its roots in Lush Caves, so if you find an Azalea Tree (either overground or in a cave) you know there is a Lush Cave beneath you
-   Cave Vines with Glow Berries grow from the ceiling and light up the caves

#### Meadow

-   Large grassy and flowery biome that tends to generate high up on plateaus or next to large mountain ranges
-   Sometimes contains a lone, tall Oak or Birch Tree with a Bee Nest
-   Think Sound of Music!
-   Spawns Donkeys, Rabbits, and Sheep

#### Snowy Slopes

-   Very snowy terrain that can hide Powder Snow traps. I hope you kept those leather boots!
-   Tends to generate on high-altitude terrain beneath mountain peaks or on hilltops
-   Spawns Rabbits and Goats

#### Stony Peaks

-   Stony mountain peaks that may be jagged or smooth
-   These sometimes have large strips of Calcite running through them

### New ore distribution

-   Changed ore generation to match the new world height, and to add more strategy to mining. There is no longer a single height level that is best for all ores – you need to make tradeoffs!
-   Iron Ore generates below height 72, with a strong bias towards height 16. Iron Ore also generates above 80, with more Iron Ore as you go higher.
-   Copper Ore generates between height 0 and 96, with a strong bias towards height 48. Copper Ore generates in larger amounts in Dripstone Caves Biome.
-   Lapis Lazuli Ore generates below height 64, with a strong bias towards height 0. However, Lapis Lazuli Ore below height -32 or above height 32 cannot generate exposed to air. It will either be buried or inside water.
-   Coal Ore generates above height 0, with a strong bias towards height 96 and above. Coal Ore has reduced air exposure, so you will find more Coal Ore buried or underwater than exposed to air.
-   Gold Ore generates below height 32, with a strong bias towards height -16. Extra Gold Ore generates below height -48. Extra Gold Ore can be found in Badlands biomes above height 32.
-   Redstone Ore generates below height 16. Redstone Ore generation gradually increases as you go below height -32 and further down.
-   Diamond Ore generates below height 16, with more Diamond Ore the lower you go. Diamond Ore have reduced air exposure, so you will find more Diamond Ore buried or underwater than exposed to air.
-   Emerald Ore generates above height -16 in mountainous biomes, with more Emerald Ore the higher you go. Emerald Ore below height 0 is very rare!

###### Ore Distribution in Minecraft 1.18

![Minecraft 1.18 Ore Distribution](https://launchercontent.mojang.com/images/1-18-ore-distribution.jpg)

### Noise caves and Aquifers

-   Noise caves are a new way of generating caves, providing more natural variety. They can get really huge sometimes! Noise caves come in three flavors:
    -   Cheese caves: Like the holes in swiss cheese. These often form caverns of various size.
    -   Spaghetti caves: Long squiggly tunnels, sometimes wide like tagliatelle
    -   Noodle caves: Thinner, squigglier, and more claustrophobic variant of spaghetti caves
-   No, they aren't loud. The "noise" part of noise caves is a technical term and has nothing to do with sound.
-   The old cave carvers and canyons still generate, combining with the noise caves to form interesting cave systems
-   As with carvers, noise caves form cave entrances where they intersect the surface
-   An aquifer is an area with local water level, independent of sea level
-   Aquifers are used during world generation to generate bodies of water inside noise caves
-   This sometimes results in large underground lakes
-   They can also form inside mountains and on the surface
-   Aquifers below y0 will sometimes be lava aquifers instead of water aquifers
-   Magma Blocks sometimes generates at the bottom of underground bodies of water
-   Underwater cave carvers and underwater canyons have been removed, since aquifers are used to generate water in caves instead

### Sprinting

-   Previously, any collision with a block would reduce sprinting to walking. Now, for very minor angles of collision with a block, players retain their sprint. For larger angles of collision, the old behavior is retained.

### Upgrading of old worlds

-   The transition between new and old terrain is less "cliffy"
    -   Will surface height blend? Yes.
    -   Will biomes blend? Yes.
    -   Will caves blend? Your mileage may vary.
-   In old chunks, if there is any Bedrock at y=0, the sections below non-air blocks will be filled with new generation
-   The old Bedrock between y=0 and y=4 in old chunks gets replaced with Deepslate
-   A new Bedrock layer is placed at y=-64

### World generation

-   Generation range and build limits have been expanded by 64 blocks up and 64 blocks down, to a total range of 384 blocks
-   Underground features, structures, and caves generate all the way down to y-64
-   Exception: Diorite, Granite, Andesite, and Dirt will not generate below y0
-   Tweaked size and positioning of Diorite, Andesite, and Granite generation
-   Dripstone clusters can no longer be found in normal caves, only in Dripstone Caves biomes
-   Starting from y8 and below, Deepslate gradually replaces all Stone
-   Deepslate blobs no longer generate above y0
-   The terrain shape and elevation varies dramatically, indepedently from biomes
    -   For example, forests and deserts could form up on a hill without needing a special biome just for that
-   Less Diorite, Granite, and Andesite generates above y 60
-   Strips of Gravel can generate in stony shores
-   Swamp trees can grow in water 2 blocks deep (instead of just 1 block deep)
-   Removed water lake features, aquifers provide local water levels
-   A bunch of biome variants with simular features but different shapes have been merged into one, since the shape is controlled independently now
-   Renamed some biomes
-   Geodes now only generate up to height 30

## Technical

-   Added an accessibility option to stop the sky from flashing during thunderstorms
-   Added `fall_from_height` and `ride_entity_distance` advancement triggers
-   Changed `nether_travel` to match other similar triggers
-   Added an option to specify the audio device used by the game
-   Replaced `light` and `barrier` particles with `block_marker`
-   Replaced the clientbound chunk update network packet with another one that additionally contains light update data
    -   The separate light update packet still exists and is sent when a light update happens without a chunk update
-   New video setting called "Chunk Builder"
-   Changed the prioritization order of the chunk rendering pipeline
    -   Unrendered chunk holes in the world should not appear anymore while flying fast with high render distance
-   View distance now causes chunks to load cylindrically around players instead of in a square
-   Added "Toggle Sprint" and "Toggle Sneak" to the Controls settings
-   Moved Keybinds out to their own settings screen, accessible from Controls
-   Information about the world generation noise is now displayed on the debug screen
-   Added `illageralt`, rune-like font from Minecraft Dungeons (currently only usable via commands)
-   Added startup option `--jfrProfile` and command `jfr` to start profiling with Java Flight Recorder as well as a few custom events
-   Loot table functions `set_contents` and `set_loot_table` now require a `type` field with a valid block entity type
-   Added new loot table function `set_potion`
-   The maximum amount of background threads are increased
-   Worlds last saved before Minecraft 1.2 (pre "Anvil") can no longer be opened directly
-   Data pack format has been increased to 8
-   Resource pack format has been increased to 8
-   `--report` option in data generator now creates reference files for the entirety of the worldgen, instead of just the biomes
-   Removed length limits for scoreboard, score holder, and team names
-   Standalone `server.jar` now bundles contains individual libraries instead of being flat archive
-   Size limit for server resource packs has been increased to 250 MB
-   Servers can now set property `hide-online-players` to `true` in order to not send a player list on status requests
-   New setting called "Simulation Distance"
-   Mob spawners can now override light checks for spawning
-   Added telemetry for world loading

### Advancements

#### Changed triggers

##### `nether_travel`

-   `entered` condition is renamed to `start_position`
-   `exited` has been removed since it was identical to `player.location`

#### New triggers

##### `fall_from_height`

-   Triggered when a player lands after falling
-   Conditions:
    -   `player` - a player for which this trigger runs
    -   `start_position` - a location predicate for the last position before the falling started
    -   `distance` - a predicate for the distance between `start_position` and the player

##### `ride_entity_in_lava`

-   Triggered for every tick when a player rides in lava
-   Conditions
    -   `player` - a player for which this trigger runs
    -   `start_position` - a position where the riding started (first tick on lava)
    -   `distance` - a predicate for the distance between `start_position` and the player

### Chunk Builder Setting

-   This setting determines if chunk sections are updated immediately during a single frame, or asynchronously using threads
-   "Fully Blocking" corresponds to the previous way chunks were updated, which prevents potential visual gaps when blocks are destroyed
-   "Threaded" will significantly reduce stutters when blocks are placed or destroyed (especially with light sources), however brief visual gaps may rarely occur
-   "Semi Blocking" is the middle-option, and will only immediately update chunks that are deemed important, otherwise updates occur asynchronously using threads

### Java 17

Minecraft now uses Java version 17. If you are using a default setup, the Launcher will download and install the correct version. If you are using a custom Java setup, or a third-party launcher, you will need to ensure that your Java installation is version 17 or above.

### JFR Profiling

#### Custom events

All events are enabled when starting the profiling using either `jfr start` command or `--jfrProfile` startup flag. If profiling is started through any other means for monitoring purposes, only the `ServerTickTime`, `LoadWorld` and `NetworkSummary` are included by default.

-   `minecraft.ServerTickTime`: periodic event (1 second intervals) exposing average server tick times
-   `minecraft.NetworkSummary`: periodic event (10 second intervals) reporting total packet sizes and counts per connection
-   `minecraft.PacketReceived | minecraft.PacketSent`: network traffic
-   `minecraft.ChunkGeneration`: time taken to generate individual chunk stages
-   `minecraft.LoadWorld`: initial world loading duration

#### Overview

[Java Flight Recorder](https://openjdk.java.net/jeps/328) is the internal JVM profiling tool bundled with the Java Runtime to analyze performance and runtime characteristics.  
It's a useful tool for exposing internal JVM performance metrics as well as custom metrics that can be monitored or analyzed using any stock Java profiler or monitoring agents.

#### Profiling lifecycle

A profiling run can be started using any of the following alternatives:  
The run will then be stopped either by:

-   `--jfrProfile` startup flag when starting a Minecraft server or client
-   `jfr start` in-game command
-   Regular Java CLI tools such as `jcmd`
-   shutting down the JVM
-   `jfr stop` in-game command
-   `jcmd` CLI tool

#### Reports

A summary JSON report is written both to the log file and in the debug folder accompanied by a `.jfr` recording ready to be analyzed in i.e [JMC](https://github.com/openjdk/jmc) or any other profiler tool supporting the format.

### Loot tables

#### Changed functions

##### `set_contents`, `set_loot_table`

Added new mandatory field `type`. This type will be written into `BlockEntityTag.id`, to make sure that this tag can be correctly migrated between versions.

#### New functions

##### `set_potion`

-   Sets the `Potion` tag on any item

###### Parameters:

-   `id` - potion id

### Maximum amount of background threads increased

-   Various background tasks including worldgen are executed on a background thread pool
-   The default thread pool size equals the amount of available CPU threads, minus one
-   The upper thread pool limit has been raised from 7 to 255, which should help higher-end machines with improved world-gen performance
-   The upper limit can be overridden via the `max.bg.threads` Java system property, for example when running multiple servers on a single machine

### Mob spawning

-   Monster spawning limits are now per-player, rather than global for each dimension

### Old world conversion

-   Worlds last saved before Minecraft 1.2 (pre "Anvil") now require conversion in a previous version of the game to be able to be opened
-   We recommend that you upgrade your old version, 1.2 (pre "Anvil") or older, to version 1.6.4 - worlds opened for the first time in later versions will have incorrect biome information

### Particles

#### `block_marker`

-   Renders with a texture declared in the `particle` slot for a model assigned to the configured block state
-   Is summoned with same syntax as the `block` particle (i.e. `block_marker wheat[age=2]`)

### Resource Pack format

-   `minecraft/textures/gui/container/inventory.png` now contains an extra sprite for a thin-layout version of the effect list in the inventory

### Server bundling

-   `server.jar` now bundles individual libraries instead of merging all the files into a single archive
-   This change is meant to solve certain problems related to Java modules
-   On startup, `server.jar` will unpack libraries into a directory configured by `bundlerRepoDir` (default: working directory)
-   To run a different main class other than the server, use the `bundlerMainClass` property (for example `java -DbundlerMainClass=net.minecraft.data.Main -jar server.jar --reports`) or unpack the jar manually and use the contents of `META-INF/classpath-joined` for command line
-   If `bundlerMainClass` is empty, the program will just validate and extract files, and will then exit
-   Server classes are now signed

### Simulation Distance Setting

-   A new slider which is available under video settings
-   Entities, blocks, and fluids will not be updated outside of simulation distance
-   Allows higher render distance with less CPU load
-   There's also a new `simulation-distance` property in the dedicated server properties

### Spawner data changes

Example:

    SpawnData: {
        entity: {
            id: "minecraft:cow"
        },
        custom_spawn_rules: {
              sky_light_limit: {min_inclusive: 10, max_inclusive: 15}
        },
    }
    SpawnPotentials: [
      {
        data: {
          custom_spawn_rules: {
              block_light_limit: {min_inclusive: 0, max_inclusive: 15}
          },
          entity: {id: "minecraft:pig"},
        },
        weight: 2
      },
      {
        data: {
          custom_spawn_rules: {
              block_light_limit: {min_inclusive: 5, max_inclusive: 10},
              sky_light_limit: {min_inclusive: 10, max_inclusive: 15}
          },
          entity: {id: "minecraft:panda"}
        },
        weight: 1
      }
    ]
    

-   Spawners now support the `custom_spawn_rules` NBT in the `SpawnData` field and the `SpawnPotentials` list
-   `custom_spawn_rules` currently may contain fields `block_light_limit` and `sky_light_limit` - both are integer ranges with fields `min_inclusive` and `max_inclusive`
-   To make `SpawnPotentials` format similar to other weighted lists, structure was changed to `{weight: <int>, data: <previous contents without 'Weight', 'Entity' renamed to 'entity'>}`
-   To accommodate that change, previous contents of `SpawnData` were moved to `SpawnData.entity` (making format of that field same as elements of `SpawnPotentials.data`)

### Telemetry

In this release, we are re-introducing diagnostic tracking, which was part of Minecraft: Java Edition until 2018. We are bringing it back to better understand our players and to improve their experience. Specifically this information will help us prioritise various aspects of development and identify pain points. All data is treated according to GDPR and CCPA best practices and is used to develop a better-performing and generally more enjoyable Minecraft: Java Edition.

-   At this point, the only implemented event is world load

#### World Load event

-   Sent when loading singleplayer world or connecting to multiplayer server
-   Contains following information:
    -   launcher identifier
    -   user identitifer (XUID)
    -   client session id (changes on restart)
    -   world session id (changes per world load, to be reused for later events)
    -   game version
    -   operating system name and version
    -   Java runtime version
    -   if client or server is modded (same information as on crash logs)
    -   server type (single player, Realms or other)
    -   game mode

### World Data: Chunk Format

-   Removed chunk's `Level` and moved everything it contained up
-   Chunk's `Level.Entities` has moved to `entities`
-   Chunk's `Level.TileEntities` has moved to `block_entities`
-   Chunk's `Level.TileTicks` and `Level.ToBeTicked` have moved to `block_ticks`
-   Chunk's `Level.LiquidTicks` and `Level.LiquidsToBeTicked` have moved to `fluid_ticks`
-   Chunk's `Level.Sections` has moved to `sections`
-   Chunk's `Level.Structures` has moved to `structures`
-   Chunk's `Level.Structures.Starts` has moved to `structures.starts`
-   Chunk's `Level.Sections[].BlockStates` and `Level.Sections[].Palette` have moved to a container structure in `sections[].block_states`
-   Chunk's `Level.Biomes` are now paletted and live in a similar container structure in `sections[].biomes`
-   Chunk's `Level.CarvingMasks[]` is now `long[]` instead of `byte[]`
-   Added `yPos` the minimum section y position in the chunk
-   Added `below_zero_retrogen` containing data to support below zero generation
-   Added `blending_data` containing data to support blending new world generation with existing chunks

### World Generation

-   Bedrock layers now generate dependent on the world seed
-   New random number generator for overworld generation

## Fixed Bugs in 1.18

About 250 bugs were fixed in this release. [View the entire list on the issue tracker](https://bugs.mojang.com/issues/?filter=26552).

---

# Minecraft: Java Edition 1.17.1

We're now releasing Minecraft: Java Edition 1.17.1. This release changes some behaviours of the features added in Caves & Cliffs: Part I, and it also fixes a few bugs and critical issues.

## Changes in 1.17.1

-   Blue axolotls can now only be obtained through breeding
-   Non-screaming goats now have a rare chance to produce a screaming goat when bred
-   Status effects on goats now also apply when the goat is jumping or ramming
-   Raised the drop rate for copper ingots from Drowned to 11% + 2% per level of looting
-   Powder snow now fills cauldrons 2 times faster than before (still pretty slowly, though!)
-   Zombies, Zombie Villagers, Husks and Drowned will no longer pick up glow ink sacs

## Technical Changes in 1.17.1

-   Deaths of named mobs are now logged
-   In case of DNS-based redirection, the client will send the hostname actually used to connect (this restores the pre-1.17 behaviour)

## Fixed bugs in 1.17.1

-   [MC-123654](https://bugs.mojang.com/browse/MC-123654) - "Sun, moon, and/or clouds are not showing if render distance is below 4"
-   [MC-131290](https://bugs.mojang.com/browse/MC-131290) - "Enchantments are saved as shorts, but are loaded as and function with integer values"
-   [MC-156155](https://bugs.mojang.com/browse/MC-156155) - Turkish lira sign (₺) appears as □ in the game
-   [MC-194736](https://bugs.mojang.com/browse/MC-194736) - Duplicate text mapping for U+00B7
-   [MC-196999](https://bugs.mojang.com/browse/MC-196999) - U+1FEC is wrong in Minecraft's font
-   [MC-213986](https://bugs.mojang.com/browse/MC-213986) - Pistons and dispensers can be used to create ghost blocks using powder snow
-   [MC-219018](https://bugs.mojang.com/browse/MC-219018) - Ghost items can be created using /item (server doesn't update client inventory correctly)
-   [MC-219290](https://bugs.mojang.com/browse/MC-219290) - Calcite is too quiet compared to other blocks
-   [MC-221656](https://bugs.mojang.com/browse/MC-221656) - Creative mode obtained Bucket of Axolotl/Tropical Fish only spawns one kind axolotl/tropical fish
-   [MC-222731](https://bugs.mojang.com/browse/MC-222731) - Captured axolotl constantly tries to leave water
-   [MC-223350](https://bugs.mojang.com/browse/MC-223350) - Loaded chunks sometimes don't render until the player moves their head slightly
-   [MC-223368](https://bugs.mojang.com/browse/MC-223368) - Strength and weakness potions / custom attack damage attributes does not change damage from goats
-   [MC-224894](https://bugs.mojang.com/browse/MC-224894) - Light tickets are released too early
-   [MC-225816](https://bugs.mojang.com/browse/MC-225816) - Hanging Roots appear large when an item entity
-   [MC-226461](https://bugs.mojang.com/browse/MC-226461) - Logs can be replaced with stone near lava pools
-   [MC-226505](https://bugs.mojang.com/browse/MC-226505) - Goat's long jump is not affected by the jump boost effect
-   [MC-226512](https://bugs.mojang.com/browse/MC-226512) - Goats do not use the damage of held items when ramming entities
-   [MC-226926](https://bugs.mojang.com/browse/MC-226926) - Emerald ore generates too often
-   [MC-226948](https://bugs.mojang.com/browse/MC-226948) - Withers are now affected by potion effects
-   [MC-227387](https://bugs.mojang.com/browse/MC-227387) - World gen datapacks will likely crash or softlock the game
-   [MC-227435](https://bugs.mojang.com/browse/MC-227435) - Lag when placing heads of non-existent players when on servers
-   [MC-227483](https://bugs.mojang.com/browse/MC-227483) - root\_system feature config's codec uses a wrong field
-   [MC-227520](https://bugs.mojang.com/browse/MC-227520) - Overworld Fossils always generate at bedrock level
-   [MC-227557](https://bugs.mojang.com/browse/MC-227557) - End portal texture appears stretched after world conversion
-   [MC-227618](https://bugs.mojang.com/browse/MC-227618) - Small dripleaf is consumed without being placed when used on tall seagrass
-   [MC-227651](https://bugs.mojang.com/browse/MC-227651) - Group for lapis lazuli ore smelting and blasting recipes is misspelled
-   [MC-227821](https://bugs.mojang.com/browse/MC-227821) - Client crash when trying to create/edit realm immediately after deleting previous one
-   [MC-227891](https://bugs.mojang.com/browse/MC-227891) - Ender pearls despawn when player logs out of a server
-   [MC-228219](https://bugs.mojang.com/browse/MC-228219) - Thrown ender pearls disappear upon entering the exit end portal
-   [MC-228343](https://bugs.mojang.com/browse/MC-228343) - java.lang.NullPointerException when random\_selector default feature isn't found
-   [MC-228430](https://bugs.mojang.com/browse/MC-228430) - "Very long loading pause while booting the game (""Failed to add PDH Counter"", caused by oshi)"
-   [MC-228599](https://bugs.mojang.com/browse/MC-228599) - Attempting to walk through flowing water constantly switches the player from swimming into normal mode
-   [MC-228802](https://bugs.mojang.com/browse/MC-228802) - "Chunks not loading on a server / Cannot invoke ""cmq.a(int, int, int)"" because ""☃"" is null"
-   [MC-228828](https://bugs.mojang.com/browse/MC-228828) - "Specifying the --server parameter when starting the game, causes the game to crash"
-   [MC-228858](https://bugs.mojang.com/browse/MC-228858) - Axolotls despawning though named and on leashes.
-   [MC-229169](https://bugs.mojang.com/browse/MC-229169) - Piglins can no longer hear players breaking protected blocks through walls
-   [MC-229191](https://bugs.mojang.com/browse/MC-229191) - Diamond ore distribution changed between 1.16.5 and 1.17
-   [MC-229246](https://bugs.mojang.com/browse/MC-229246) - Piglins and piglin brutes no longer call other piglins after attacking one of them behind walls
-   [MC-229299](https://bugs.mojang.com/browse/MC-229299) - Blue axolotls can spawn naturally
-   [MC-229441](https://bugs.mojang.com/browse/MC-229441) - You can steal the item a villager is holding for trade by killing it
-   [MC-229614](https://bugs.mojang.com/browse/MC-229614) - Wandering Trader obtained tropical fish are only white kob
-   [MC-230716](https://bugs.mojang.com/browse/MC-230716) - """death.attack.dryout"" and ""death.attack.dryout.player"" display raw translation strings (are untranslated)"

---

# Minecraft: Java Edition 1.17

It’s here. The Cave Update, with a side of cliffs. That’s right, The Caves & Cliffs Update: Part I is launching today!

Now you can finally swim with the glow squid, fight alongside the axolotls, and get rammed off a mountain by a goat. You can also build with new blocks like copper, pointed dripstone, and moss, hang some hanging roots and cave vines, and marvel at the new ore textures. Light up your homes, caves, mineshaft and lives with the glow berry. Build a spyglass and peep your next adventure or just keep track of what that creeper over yonder is doing. Wait, what is it doing? Is it getting closer, or is this spyglass just really good?

Have fun with Part I!

## Features

-   Added Dripstone Blocks and Pointed Dripstone
-   Added Block of Amethyst, Budding Amethyst, Amethyst Cluster, and Amethyst Bud
-   Added Block of Raw Iron, Copper, and Gold
-   Added Candles
-   Added Copper
-   Added Deepslate
-   Added Glow Lichen
-   Added Lava Cauldrons
-   Added Lightning Rod
-   Added Lush Caves blocks
-   Added Powder Snow
-   Added Raw Copper, Raw Iron, and Raw Gold items
-   Added the Axolotl
-   Added the Glow Squid
-   Added the Goat
-   Added Spyglass
-   Added Tinted Glass
-   A Shulker hitting a Shulker with a Shulker Bullet can make a new Shulker
-   Additions to Wandering Trader and Mason trades
-   Bundles and Shulker Box items will drop their contents when destroyed
-   Changed Infested Block destroy times
-   Changes to the Shipwreck and Mineshaft loot
-   Dirt Paths (formerly Grass Path) can now be made by using a Shovel on Dirt, Podzol, Mycelium, or Coarse Dirt (as well as Grass)
-   Drowned now has a chance of dropping a Copper Ingot, and they no longer drop Gold Ingots
-   Experience Orbs now sometimes merge when in large quantities to improve performance. This does not change the rate at which the player can absorb them, it simply limits the amount of separate orbs floating around in the world. Orbs that merge will gain the lifetime of the most recently created one.
-   Holding down the space bar now increases the scroll speed in the credits
-   Minecarts and Rails work in water
-   Particles now appear when Pistons break blocks
-   Reordered some blocks in the Building Blocks Tab in the Creative Menu
-   Reordered the Redstone Tab in the Creative Menu
-   Simple Firework Rockets with one Gunpowder can now be crafted using the recipe book

### Accessibility

-   Added an alternative solid black background color for the Mojang Studios loading screen, toggleable with the "Monochrome Logo" accessibility option

### Advancements

-   Added "Whatever Floats Your Goat!" for floating in a boat with a Goat
-   Added "Wax on" for applying Honeycomb to a Copper block
-   Added "Wax off" for scraping wax off a Copper block
-   Added "The Cutest Predator" for catching an Axolotl in a Bucket
-   Added "The Healing Power of Friendship!" for teaming up with an Axolotl and winning a fight
-   Added "Glow and Behold" for making a Sign glow
-   Added "Light as a Rabbit" for walking on Powder Snow with Leather Boots
-   Added "Surge Protector!" for having a lightning strike a Lightning Rod near a Villager without setting the area on fire
-   Added "Is It a Bird?" for looking at a Parrot through a Spyglass
-   Added "Is It a Balloon?" for looking at a Ghast through a Spyglass
-   Added "Is It a Plane?" for looking at the Ender Dragon through a Spyglass

### Amethyst Blocks

-   Amethyst comes in block form inside the Geodes in two ways: Block of Amethyst and Budding Amethyst
-   All types of Amethyst blocks (Clusters included) create beautiful sounds when you walk on them, break them, place them, or hit them with a projectile – go make some music!

### Amethyst Clusters

-   Amethyst Clusters grow from Budding Amethyst, which can be found inside Amethyst Geodes
-   Clusters have four growth stages: Small Amethyst Bud, Medium Amethyst Bud, Large Amethyst Bud, and Amethyst Cluster
-   Clusters can only grow when they are placed on Budding Amethyst blocks
-   Fully-grown Amethyst Clusters drop four Amethyst Shards (or more with Fortune) when mined with a Pickaxe, and drop two Amethyst Shards when broken by hand, Piston, or other means
-   Clusters can be Silk Touched at any stage

### Amethyst Geodes

-   These huge geodes can be found anywhere underground in the Overworld
-   Amethyst Geodes have an outer layer of a new stone called Smooth Basalt
-   Amethyst Geodes have a second layer of another new block called Calcite
-   Amethyst Geodes have an inner layer of various Amethyst blocks

### Amethyst Shards

-   Amethyst Clusters drop two Amethyst Shards when broken by hand, Piston, or other means" to the
-   Amethyst Clusters drop four Amethyst Shards when mined with a Pickaxe (or more with Fortune)

### Axolotl

-   Amphibious!
-   Axolotls spawn in underground water that is in total darkness with Stone, Granite, Diorite, Andesite, Tuff, or Deepslate below
-   Axolotls love tropical fish! Bucket of Tropical Fish can be used to breed Axolotls
-   Axolotls will swim around with you if you're holding a Bucket of Tropical Fish in either hand
-   When a player kills a mob that the Axolotl was attacking or being attacked by, the Axolotl will show its appreciation by granting the player temporary Regeneration and removing any Mining Fatigue effects
-   If the player has more than two minutes of Regeneration effect left already, the axolotl will not grant additional Regeneration
-   You can pick up your Axolotl in a Water Bucket and carry it around just like a Salmon or a Cod
-   Axolotls will always chase after and attack Squids, Glow Squids, Tropical Fish, Cod, Salmon, Pufferfish, Drowned, Guardians, and Elder Guardians
-   Axolotls do not like being out of water, and will dry up and begin taking damage if they are out of water for longer than five minutes
-   An Axolotl will not dry up as long as they are in water or rain
-   Sometimes when an Axolotl takes damage while inside water, it will pretend to be dead so that it stops being attacked
-   There are four common varieties and one rare variety (blue) of Axolotl
-   Axolotls spawn in underground water sources that are in total darkness and above natural stone blocks
-   Axolotls now have a two-minute cooldown after hunting non-hostile targets: Squids, Glow Squids, Tropical Fish, Cod, Salmon, and Pufferfish
-   They will prioritize targeting hostile mobs over hunting

### Bone Meal

-   A crinkly, crunchy sound plays when Bone Meal is used

### Budding Amethyst

-   On any side of a Budding Amethyst block where there is air or a water source block, a Small Amethyst Bud will eventually grow
-   Amethyst Buds can only grow when attached to Budding Amethyst, and will grow until they become Amethyst Clusters

### Building Blocks Tab

-   All ores have been reordered to be in the same location in the creative inventory
-   Compact forms of raw and refined underground materials have been reordered

### Candles

-   Candles come in all sixteen colors and one uncolored variant
-   Up to four Candles can be placed in one block
-   Waterloggable! (But you cannot light them underwater, silly)
-   Wish anybody a happy birthday with a Cake with a Candle!
-   Candles can only be placed if there is a solid surface below but will remain even if the surface below is removed

### Cauldrons

-   Cauldrons can now be filled with Lava and Powder Snow Buckets!
-   Cauldrons filled with lava give off a Redstone signal with Strength 3 when used with a comparator

### Copper blocks

-   Craft nine Copper Ingots into a Copper Block
-   Craft Cut Copper, Cut Copper Stairs, and Cut Copper Slabs
-   The Stonecutter can be used to craft the different Copper Block variants
-   Use Honeycomb to craft Waxed Copper Blocks
-   Right-click with Honeycomb on Copper Blocks to wax them
-   Use Honeycomb in a Dispenser to wax Copper Blocks

### Copper Ore

-   Copper Ore can be found in ore blobs across the Overworld, similar to Iron and Coal (this is not the final generation for Copper...)
-   Smelt Copper Ore to get a Copper Ingot
-   Copper Ore drops 2-3 Raw Copper

### Deepslate

-   Deepslate can be found in the deepest parts of the underground, and is slightly tougher to mine than normal Stone
-   Deepslate will drop Cobbled Deepslate, similar to how Stone drops Cobblestone
    -   You can still obtain Deepslate with Silk Touch
-   Like Cobblestone, Cobbled Deepslate can be used to craft basic tools, Furnaces, and Brewing Stands
-   You can also craft the following blocks with Deepslate:
    -   Cobbled Deepslate Slab
    -   Cobbled Deepslate Stairs
    -   Cobbled Deepslate Wall
    -   Polished Deepslate
    -   Polished Deepslate Slab
    -   Polished Deepslate Stairs
    -   Polished Deepslate Wall
    -   Deepslate Bricks
    -   Deepslate Brick Slab
    -   Deepslate Brick Stairs
    -   Deepslate Brick Wall
    -   Deepslate Tiles
    -   Deepslate Tile Slab
    -   Deepslate Tile Stairs
    -   Deepslate Tile Wall
    -   Chiseled Deepslate
    -   Cracked Deepslate Bricks
    -   Cracked Deepslate Tiles
-   There is also an Infested variant of Deepslate found in the underground
-   Cobbled Deepslate can be smelted into Deepslate

### Deepslate Ores

-   Added Deepslate versions of Iron, Gold, Lapis, Redstone, and Diamond Ores that generate wherever those ores replace Deepslate
-   Twice as tough to mine as normal ores
-   While they will not generate underground, Deepslate versions of Copper, Emerald and Coal Ores have been added for map makers and data packs

### Dripstone Block

-   Decorative block
-   Can be crafted with four Pointed Dripstone

### Pointed Dripstone

-   Forms a stalactite if placed on the ceiling or a stalagmite if placed on the floor
-   Can be combined to form longer stalactites & stalagmites
-   Stalactites and stalagmites merge if the tips are next to each other, unless you press shift while placing
-   Stalagmites will break if they're not attached to something below
-   Landing or jumping on a stalagmite hurts, and they are sharp!
-   Stalactites fall down if not attached to something above
-   Being hit by a falling stalactite hurts, and they are sharp!
-   Stalactites drip water (or lava if there is lava above the ceiling)
-   A stalactite with a water source above the ceiling will gradually fill a cauldron below with water
-   A stalactite with a lava source above the ceiling will fill a cauldron below with lava after a while
-   Thrown Tridents break Pointed Dripstone

### Dripstone growth

-   If a stalactite is hanging from a Dripstone Block with a water source above, it will slowly grow both the stalactite from above and a stalagmite from below
-   Growth speed is random but very slow, a single growth step can take several Minecraft days
-   A stalactite will only grow up to seven blocks long
-   A stalactite will only cause stalagmite growth if the floor or stalagmite below is within ten blocks
-   If the stalactite tip is inside water it won't drip, and therefore won't trigger any growth
-   If the stalagmite tip is inside water it won't receive drops, and therefore won't be grown by a dripping stalactite. Same thing if there is any fluid between the two tips
-   A stalagmite or stalactite will never grow into a fluid

### Glow Lichen

-   A dim light source that generates in caves
-   Use Shears to pick it up
-   Use Bone Meal to spread it along block surfaces

### Glow Squid

-   Glow Squids are well-lit and can be seen from far distances!
-   When killed, Glow Squids drop Glow Ink Sacs
-   Glow Ink Sacs can be used on Signs to make the text super visible, even at night. Works with colors!
-   Craft a Glow Item Frame by combining a Glow Ink Sac with an Item Frame in a Crafting Table. Any item in a Glow Item Frame is perfectly illuminated, even at night.
-   Use an Ink Sac on a Sign to remove the glow effect
-   Axolotls will attack any Glow Squids they see, so... be careful
-   Glow Squids spawn in underground water that is in total darkness with Stone, Granite, Diorite, Andesite, Tuff, or Deepslate below

### Goat

-   Goats spawns in mountains
-   Goats can scale the sides of mountains with their incredible jumps
-   Goats can be tempted and bred using Wheat
-   Goats are another source of Milk!
-   Goats will ram anything that moves... also Armor Stands
-   Two in every 100 goats have something very loud to tell you!
-   Goats will avoid walking on Powder Snow
-   Screaming Goats will use their ram attack more often than other Goats will
-   Mobs rammed by Goats do not retaliate

### Infested Blocks

-   Infested Blocks are no longer instantly destroyed, and instead, have half the destroy time of their non-infested counterpart

### Lightning Rod

-   A Lightning Rod is crafted from three Copper Ingots
-   Keeps your builds safe (well, as long as the closest area around the Lightning Rod is fireproof) during thunderstorms!
-   The Lightning Rod will protect an area of 8 \* 16 blocks around it from the, sometimes devastating, lightning strikes!
-   Lightning Rods give off a Redstone signal when struck by lightning

### Lush Caves blocks

-   Added Moss
-   Added Dripleaves
-   Added Rooted Dirt and Hanging Roots
-   Added Spore Blossoms (currently only available in the Creative inventory)
-   Added Cave Vines and Glow Berries
-   Added Azalea Bushes

#### Azalea Bushes

-   Added Azalea Bushes as well as Flowering Azaela Bushes
-   Bees see Flowering Azalea (and Flowering Azalea Leaves) as flowers
-   Bonemeal Azalea or Flowering Azalea to get an Azalea Tree

#### Cave Vines and Glow Berries

-   Cave Vines grow down from the ceiling, like Weeping Vines
-   When they grow they have a chance of producing Glow Berries
-   Glow Berries are a natural light source as well as a food source
-   Foxes eat Glow Berries
-   Use Glow Berries to plant new Cave Vines
-   Bonemealing a Cave Vine will create Glow Berries

#### Drip Leaves

-   Small Dripleaf needs moisture, so it grows on Clay or underwater
-   The facing direction of Small Dripleaf blocks is determined by which direction the player is facing when placing it
-   The Wandering Trader will sometimes sell Small Dripleaf plants
-   Small Dripleaf grows into Big Dripleaf when bonemealed
-   Big Dripleaf grows taller when bonemealed
-   If you stand on a Big Dripleaf, it will tilt after a while, and you will fall off
-   A tilted Big Dripleaf will tilt up again after a while
-   A Big Dripleaf will tilt when hit by a projectile
-   A Redstone powered Big Dripleaf will not tilt (except when hit by a projectile)

#### Moss

-   Two new decorative blocks: Moss Block and Moss Carpet
-   Moss Carpet can be crafted from Moss Blocks
-   Moss Blocks can be crafted with Cobblestone or Stone Bricks to make the mossy versions of those blocks

#### Roots

-   Added Rooted Dirt and Hanging Roots – decorative blocks that will appear in the upcoming Lush Caves biome
-   Bonemealing Rooted Dirt grows Hanging Roots underneath
-   Tilling Rooted Dirt with a Hoe will convert it into Dirt, and pop out a Hanging Roots item

#### Spore Blossoms

-   A beautiful large flower placed on ceilings
-   Particles drip from it and will appear in the air around it

### Minecarts and Rails work in water

-   All Rails can be waterlogged (works with a Dispenser & Water Bucket too)
-   Flowing water doesn't break Rails
-   Minecarts can pass through water, but get slowed down more than usual

### Oxidation

-   Copper will oxidize over time
-   There are four stages: Copper, Exposed Copper, Weathered Copper, and Oxidized Copper
-   It takes 50-82 Minecraft days (in loaded chunks) for a Copper Block to oxidize one stage
-   Waxed Copper Blocks will not oxidize
-   You can wax any oxidation stage - keep that pretty Weathered Copper Block in its weathered stage forever!
-   A lightning strike hitting Copper will clean its oxidation
-   Waxed Copper Blocks can be crafted into nine Copper Ingots
-   Axes can scrape off wax and oxidation from Copper Blocks

### Powder Snow

Snowier snow!

-   Powder Snow is a trap block that causes any entity that walks into it to sink in it
-   You can pick up and place Powder Snow with a Bucket
-   Wear Leather Boots to prevent yourself from sinking into Powder Snow blocks
-   Leave a Cauldron outside in falling snow and it will fill with Powder Snow
-   Entities on fire now get extinguished when they collide with Powder Snow. The Powder Snow block is also destroyed
-   Skeletons convert to Strays when frozen
-   Powder Snow is pushable by Pistons and Sticky Pistons
-   Rabbits, Endermites, Silverfish, and Foxes can walk on top of Powder Snow without falling in

#### Freezing

-   Standing in Powder Snow will slowly freeze an entity
-   Once frozen, freeze damage is done every few seconds to the frozen entity
-   Wearing any piece of Leather Armor prevents freezing entirely
-   Added a `freezeDamage` game rule that allows players to toggle whether Powder Snow causes freeze damage or not
-   Strays, Polar Bears, and Snow Golems are immune to freezing
-   Mobs that are fully frozen will shake
-   Mobs that enjoy the heat (Blazes, Magma Cubes, and Striders) take increased freeze damage

### Redstone Tab

-   The Redstone Tab has been reordered to prioritize highly-used blocks
-   Redstone items/blocks have been grouped and ordered in the following way:
    -   Essentials
    -   Unique activators
    -   Miscellaneous
    -   Common activators
    -   Openables
-   Slime Blocks and Honey Blocks have been moved to the Redstone tab

### Smeltable Ore Drops

-   Ores that are smeltable now drop raw item forms of the ore instead of the ore block, and these can be smelted just like before
-   This is to prevent cluttering the inventory and have consistency with Fortune on all ores
-   Just like other ore materials, you can craft a compact version with raw ore items in order to save inventory space

### Smooth Basalt

-   Smelt Basalt to obtain Smooth Basalt

### Spyglass

-   You can use a Spyglass to see faraway things
-   Pretend to be a sea captain, or catch your neighbor in the act as they dye your Sheep lime green!
-   The Spyglass is crafted from two Copper Ingots and one Amethyst Shard

### Tinted Glass

-   Tinted Glass is a type of glass that does not allow light to pass through
-   Tinted Glass is crafted by putting a Glass Block in the middle of four Amethyst Shards
-   Tinted Glass can be obtained without Silk Touch; it does not shatter like normal glass

### Trade & Loot Table Additions

-   Added the following trades to Mason:
    -   Will sell four Dripstone Blocks for one Emerald
-   Added the following trades to Wandering Trader:
    -   Will sell two Pointed Dripstones for one Emerald
    -   Will sell two Rooted Dirt for one Emerald
    -   Will sell two Moss Blocks for one Emerald
-   Moss Blocks can be found in Shipwreck Chests
-   Glow Berries can be found in Mineshaft Chest Minecarts

### Tuff

-   A new type of stone that can be found in blobs between y0 and y16

### Underground structure changes

-   Strongholds are mostly encased in Stone
-   Mineshaft corridors are supported by log pillars below or Chains above when needed
-   Cobwebs don't generate fully floating in the air

### Visuals

-   Sky color now varies smoothly when moving between different biomes
-   Ores without unique shapes have been given new textures for accessibility reasons, so that each ore is distinguishable by shape alone
    -   Emerald Ore and Lapis Ore have had some small touch-ups
-   Being the most iconic ore, Diamond Ore texture is staying the same to keep that classic feel maintained
-   Blackstone, Polished Blackstone Bricks, and Cracked Polished Blackstone Bricks have had some minor touch-ups
-   Clock and Compass textures have been updated

### World generation

-   Dripstone clusters can be found rarely in normal caves
-   Deepslate blobs can be found from Y0 to y16

## Technical

-   Added `/debug function`
-   Added `/item` command
-   Added `lightning_bolt` sub-predicate
-   Added `looking_at` condition to player sub-predicate
-   Added `passenger`, `stepping_on` and `lightning_bolt` properties to entity predicate
-   Added `source` condition to `effects_changed` trigger
-   Added `started_riding`, `lightning_strike` and `using_item` advancement triggers
-   Added a metric cube of light!
-   Added a new NBT tag for entities, named "HasVisualFire", which will cause any entity with this flag to visually appear on fire, even if they are not actually on fire
-   Added F3+L shortcut to generate and persist performance metrics from in-game
    -   F3+L on single-player worlds will also include reports for the integrated server
-   Added gamerule `playersSleepingPercentage` (100 by default), which sets what percentage of players that must sleep in order to skip the night. Setting it to 0 will mean one player is always enough to skip the night. Setting it above 100 will prevent skipping the night.
-   Added item modifiers, which will reuse loot table functions syntax to describe item modification in `/item` command
-   Added loot table function `set_banner_pattern`
-   Added the Marker entity
-   Buttons that change value (like `Difficulty`) can now be controlled with the mouse wheel
-   Clicking on a button that changes the value while holding the shift key changes to the previous value
-   Data pack version is now 7
-   "Debug" world type can now be accessed while holding the alt key (was shift)
-   Entities are now saved separately from terrain chunks
-   Expanded `block` field on block predicate to `blocks`
-   Expanded `item` field on item predicate to `items`
-   GUI narration now includes position and usage of hovered or focused elements
-   Loot tables can now access scoreboard values by UUID
-   OpenGL 3.2 core profile
-   Perf start/stop command on dedicated servers will now generate and persist server performance metrics
-   Removed `/replaceitem`
-   Removed debug report command (use perf start/stop for server performance measurement)
-   `selector` and `nbt` chat components can now configure separators between elements
-   Servers can also display a custom message on resource pack prompt
-   Servers can now require custom resource packs to be accepted
-   The '/give' command can only give up to 100 stacks of items at a time (e.g. 6400 stone or 100 iron swords)
-   The default mode of structure blocks is now `Load`. `Data` is now hidden (but can be accessed by clicking the mode button while holding the alt key)
-   The maximum length of item names in the Anvil UI has been increased from 35 to 50
-   The maximum size that Slimes can be summoned with is now 128
-   The pack format in `version.json` has been split into data and resource versions
-   The Resource pack version is now 7
-   Upgraded to Java 16
-   Values inside random number generators can now be nested

### `/debug function`

-   New debug subcommand executes a command with the same syntax as function
-   Every executed command, message (even if it would be normally invisible), result, or error is stored to file

### Advancements

#### Changed predicates

##### Block predicate

-   `block` field expended to `blocks`, which now accepts an array of block types

##### Entity predicate

-   `passenger` - a new sub-predicate for a passenger that is directly riding this vehicle (if present, must match one or more)
-   `stepping_on` - a location predicate for a block that an entity is currently standing on
-   `lightning_bolt` - a sub-predicate that is valid only for a lightning bolt entity

##### Item predicate

-   `item` field expended to `items`, which now accepts an array of item types

##### Player predicate

-   `looking_at` - an entity that is currently viewed by a player
    -   uses same the line-of-sight rules as attacking mobs
    -   actual detection radius might be changed in future

#### Changed triggers

##### `effects_changed`

-   Added `source` triggers that match an entity that triggered the change
-   Might be empty when:
    -   there is no entity (for example, effect gained from a Beacon)
    -   the effect is self-applied
    -   an effect is removed

#### Lightning Bolt

-   `blocks_set_on_fire` - a range check for blocks set on fire by this entity
-   `entity_struck` - a predicate for entities struck by this lightning bolt (if present, must match one or more)

#### New triggers

##### `lightning_strike`

-   Triggered when a lightning strike finishes (i.e. entity disappears)
-   Triggers for any player within a certain radius of a lightning strike
-   Conditions
    -   `player` - a player for which this trigger runs
    -   `lightning` -a predicate for a lightning entity
    -   `bystander` - a predicate for one of the entities in a certain area around a strike that is not hurt by it

##### `started_riding`

-   Triggered when a player starts riding a vehicle or an entity starts riding a vehicle currently ridden by a player
-   Conditions:
    -   `player` - either a player that has started riding or one of the boat passengers

##### `using_item`

-   Triggered for every tick of using items (like Crossbows and Spyglasses)
-   Conditions
    -   `player` - a player that uses an item
    -   `item` - an item being used

### Chat component separators

-   Added `occludes_vibration_signals` block tag. Anything in this tag will occlude vibrations, and inherits `wool` tag entries by default
-   Components that prints lists of names, like `selector` or `nbt` can now override separator (`,` by default) with `separator` element
-   Examples:
    -   `{"selector": "@e[type=chicken]", "separator": "|"}`
    -   `{"nbt": "CustomName", "entity": "@e[type=chicken]", "interpret": true, "separator": {"text": "*", "color": "red"}}`

### Commands

#### `item`

Modifies the item or block inventory. This command has three forms: Possible sources and targets: For example, `/item replace block ~ ~ ~ container.0 from entity @s enderchest.0` will copy the first item from the player's Ender Chest to the first slot of a container that the player is currently standing on.

-   `/item replace <target> with <item stack> [<count>]` - the same as old `replaceitem`
-   `/item replace <target> from <source> [<modifier>]` - copies an item for source to target(s), optionally applying a modifier
-   `/item modify <target> <modifier>` - modifies an item (without copying)
-   `entity <selector> <slot>`
-   `block <x> <y> <z> <slot>`

### Custom server resource packs

-   A dedicated server can enforce custom resource packs by setting `require-resource-pack` in `server.properties`
    -   When this option is used, players will be prompted for a response and will be disconnected if they decline the required pack
    -   If user has a setting to automatically decline packs, the prompt will still be shown (since the alternative would be automatic disconnection)
-   A dedicated server can also configure an additional message to be shown on the resource pack prompt (`resource-pack-prompt` in `server.properties`, expects chat component syntax, can contain multiple lines)
    -   This message won't be shown if user has already declined pack and it's not required

### Customized worlds

-   World height related values are now exposed for customized worlds

### Data Packs

Changes to data packs for version 7:

-   Removal of `/replaceitem` (replaced with `/item replace`)

### Entity storage

-   Entities have been extracted from main (terrain) chunks and are now stored in a separate `entities` directory (similar to POI storage)
-   Those new files are still region files with NBT

### Item modifiers

-   The function part of loot tables can now be defined as a separate data pack resource in the `item_modifiers` directory
-   This type of file can contain a single function (i.e single JSON object) or an array of functions

### Java 16

Minecraft now uses a more recent version of Java. If you are using a default setup, the Launcher will download and install the correct version. If you are using a custom Java setup, or a third-party launcher, you will need to ensure that your Java installation is version 16 or above.

### Light block

-   Op-only (`/give`), air-like, waterloggable block
-   Emits light at a level that is determined by block state
-   Visible and targetable only when an item is held (similar to Barrier Blocks)
-   Right click cycles the light level

### Loot tables

#### Changed conditions

#### Changed functions

##### `copy_nbt`

-   `source` parameter can now accept an object with type and additional parameters
-   The old syntax of just writing "target" is present and equivalent to `{"type": "context", "target": "<target>"}`
-   New `storage` provider (example: `{"type": "storage", <namespaced id>}`) can be used to access command storage

##### `set_count`

This function now has `add` parameter. If `true`, the change will be relative to the current item count. If `false`, item count will be replaced with current value (default behavior)

##### `set_damage`

This function now has an `add` parameter. If `true`, the change will be relative to the current damage. If `false`, the damage will be replaced with the current value (default behavior)

#### New conditions

##### `value_check`

Checks range of value. Parameters:

-   `value` - see "New value providers" section (currently a combination of random generators and score)
-   `range` - min/max range

#### New functions

##### `set_banner_pattern`

Sets tags needed for banner patterns. Parameters:

-   `patterns` - list of pattern objects:
    -   `pattern` - the name of the pattern (`square_bottom_left`, `bricks`, etc.)
    -   `color` - the name of the color (`light_gray`, etc.)
-   `append` - if `true`, the new elements will be appended to the existing ones instead of replacing them

##### `set_enchantments`

Modifies enchantments on an item.

###### Parameters

-   `enchantments` - map of enchantment id to level value (can be a score or a random number)
-   `add` - if `true`, the change will be relative to the current level. If `false`, the level will be replaced with the current value (default behavior)

#### New value providers

Note: value providers can be used in same places as random number generators.

##### `score`

Returns scaled scoreboard value.

###### Parameters

-   `score` - scoreboard name
-   `target` - see below
-   `scale` - scaling factor (float)

###### Scoreboard provider targets

-   `<target>` or `{"type": "context", "target": <target>}` where `<target>` can be one of `this`, `killer`, `direct_killer`, `killer_player` (not all may be available depending on context)
-   `{"type": "fixed", "name": "<scoreboard name>"}` for fixed scoreboard name (may be fake player)

### Markers

Markers are a new type of entity that is meant for custom use cases like map-making and data packs.

-   Only exist on the server-side, and are never sent to clients
-   They do not do any updates of their own
-   They have a `data` compound field that can contain any data

### OpenGL

Rendering is now using OpenGL 3.2 core profile. All fixed-function rendering has been replaced with shader-based rendering.

#### Shaders

Shaders are now included for all supported render states. Any shader, except for the `blit` shader, can also be replaced in resource packs. For now, replacing these shaders is **not officially supported**, and the way it works may change in the future. The current rendering engine uses a system similar to the post-processing shader pipeline. There are some differences between both systems that cater to the slightly different requirements.

### Particles

-   Added new particle types called `vibration` and `dust_color_transition`

### Performance metrics reporting

These will be saved to a zip file in `debug/profiling/<yyyy-MM-dd_HH.mm.ss-[levelname]-[version]>.zip` and could be used for performance regression analysis if included in bug reports. The exact metrics, output format, and names are susceptible to change between versions. Our plan is to continue iterating on which metrics to capture.

#### Client F3+L shortcut

Pressing F3+L while in the game will start a recording for 10 seconds, which captures metrics such as tick durations, used heap sizes, and other more detailed stats. Pressing F3+L before the 10-second limit will end the recording early. This shortcut is always available to clients, even on multi-player servers where it will record client-side performance.

#### Dedicated Server perf start/stop command

-   `perf start` will start a recording for 10 seconds, which captures metrics such as tick durations, used heap sizes, and other more detailed stats.
-   `perf stop` before the 10-second limit will end the recording early.

### Resource Packs

Changes to resource packs for version 7:

-   Drowned texture mirroring has changed (see [MC-174685](https://bugs.mojang.com/browse/MC-174685))
-   The slots for the Game Mode Selector are now 26 pixels instead of 25

### Server properties

-   Removed `max-build-height`

### Statistics

-   The statistic for play time has been renamed to `play_time`
-   There is now a statistic for "Time with World Open" (`total_world_time`) that also includes time when the game was paused

## Fixed Bugs in 1.17

-   More than 300 bugs were fixed in this release. [View the entire list on the issue tracker](https://bugs.mojang.com/issues/?filter=26014)

---

# Minecraft: Java Edition 1.16.5

Happy Friday! We're now releasing 1.16.5, which fixes two critical stability issues. We are not releasing more information about these issues at this time to protect servers that have not yet updated.

This release is network compatible with 1.16.4 - this means you do not need to upgrade your game right away to play on an upgraded server. However, we highly encourage all server owners to update as soon as possible to apply the stability fixes.

Next week, we aim to release the next snapshot of Caves & Cliffs. Stay tuned!

---

# Minecraft: Java Edition 1.16.4

It's time for the 1.16.4 release! This release adds the new social interactions screen and fixes a few crashes.

If you missed it, we recently announced that Mojang accounts will be migrating into Microsoft accounts. This release prepares for that by having the game understand the settings and block-list of Microsoft accounts. You can read more about it over [here](https://www.minecraft.net/article/java-edition-moving-house), and you can find answers to questions you might have in the [FAQ](https://help.minecraft.net/hc/en-us/articles/360050865492), which will be continuously updated.

## Features in 1.16.4

-   New UI called Social Interactions Screen
-   A button to open a link to the Accessibility Guide can now be found in the Accessibility Options screen

### Social Interactions Screen

A new screen available in Multiplayer which shows a list of all players on a server so you can hide chat from any player.

-   Opens with a configurable key binding, by default P
-   Which players are hidden resets when you disconnect from a server

### Blocked Players

-   When logging in with a Microsoft account, players blocked in your account are now also blocked in the game, and account restrictions are now respected
-   Chat from blocked players is always hidden
-   Realms invites from blocked players are hidden

## Bugs fixed in 1.16.4

-   [MC-192434](https://bugs.mojang.com/browse/MC-192434) Netherite Leggings are textured weirdly
-   [MC-199487](https://bugs.mojang.com/browse/MC-199487) WorldGen Deadlock
-   [MC-201885](https://bugs.mojang.com/browse/MC-201885) Divide by zero error in the Ender dragon entity class can cause a server crash and infinite velocity
-   [MC-202147](https://bugs.mojang.com/browse/MC-202147) Cursor in Social Interactions & Recipe Book & Anvil menu doesn’t blink

---

# Minecraft: Java Edition 1.16.3

The 1.16.3 release is now going live! This release fixes two(!) bugs.

Just in case you missed it, we'll be announcing a bunch of new stuff on October 3rd at [Minecraft Live](https://www.minecraft.net/article/announcing-minecraft-live). Make sure to mark your calendar!

## Fixed bugs in 1.16.3 Release Candidate 1

-   [MC-198678](https://bugs.mojang.com/browse/MC-198678) Giving an item and a gold ingot to a baby piglin and killing it duplicates the item
-   [MC-196449](https://bugs.mojang.com/browse/MC-196449) Piglins, Piglin Brutes, Hoglins and Zoglins have trouble pathfinding to the player when attacking

---

# Minecraft: Java Edition 1.16.2

Ever since the [Nether Update](https://www.minecraft.net/en-us/article/nether-update-java), the Piglins have seen players sneaking in and having a peek in their chests - well no more! With 1.16.2, we’re introducing the Piglin Brute – a Piglin so focused on guarding the Bastion Remnants' chests that even gold can’t distract them.

## Features in 1.16.2

### Accessibility

Two new accessibility settings have been added to help with visual comfort

-   Distortion effects such as nausea and the Nether portal overlay can now be reduced
-   At lower values, the nausea effect is replaced with a green overlay as an alternative visualization
-   Field of view effects, shown after speed modifiers are applied, can now be reduced

#### Chat Delay

-   Chat delay has been added to the Chat Settings screen
-   Pressing F3+D now clears the pending chat messages

### Bastion Remnants

-   Tweaked the Bastion Remnant chest loot
-   Chests in Bastion Remnants are now more likely to be positioned on top of gilded blackstone

### Blocks

-   Brewing stands can now be crafted with blackstone
-   Lanterns and Soul Lanterns can now be waterlogged
-   Crimson and warped fungus can now be placed on mycelium
-   Chains can now be placed in all orientations

### Items

-   Tools are now sorted based on material in the creative inventory
-   Totems of undying now give the fire resistance status affect for 40 seconds when activated

### Mobs

-   Endermen will no longer place their held block onto bedrock blocks
-   Zoglins can now be leashed
-   When a Zombified Piglin is spawned riding a Strider, it will now be holding a Warped Fungi on a Stick
-   Removed Herobrine

### Piglins

-   Added Piglin Brutes!
-   Piglins now become angry with players who open or destroy a Chest Minecart
-   Tweaked bartering loot

#### Piglin Brute

-   Piglin Brutes are stronger versions of Piglins that live in bastions and protect the treasures there
-   Unlike the their cowardly and greedy counterparts, the Piglin Brutes cannot be distracted by gold and aren't afraid of anything
-   Piglin Brutes attack players on sight, no matter how the player is dressed
-   Piglin Brutes wield axes and don't need any armor, because they're just that tough

### Respawn Block Positions

-   Modified how respawn positions are chosen for beds and respawn anchors
-   Respawn anchors will prioritize cardinal directions over corners
-   Beds will prioritize the side of the bed the player entered from and then spaces circling around the foot of the bed up to the head of the bed
-   Respawning players will now face the block that they respawned at
-   Placing players onto dangerous blocks is now avoided when possible

### Villagers

-   Villagers now emit green particles when joining a village, setting a home bed, or acquiring a job site / profession
-   Villagers now lose their job sites when changing dimension

## Technical Changes in 1.16.2

-   Custom worlds now support custom biomes
-   Sign edit screen will now intialize from existing sign text (should have no noticeable impact on vanilla)
-   Small improvements to data and resource pack selection screens
-   Tags can now have optional entries

### Commands

#### Execute

-   `execute in` now respects dimension scaling

#### spawnpoint & setworldspawn

Added an angle parameter for setting the default facing angle of a respawning player Syntax: `spawnpoint [<targets>] [<pos>] [<angle>]`  
Syntax: `setworldspawn [<pos>] [<angle>]` New parameters:

-   `angle` - Floating point angle in degrees. Supports the relative `~` modifier

### Customized world generation

-   Custom world generation and dimension settings now use the same folder pattern in data packs as other resources (`namespace/<type>/resource.json`)
-   There is now experimental support for a `worldgen` folder in data packs
-   `worldgen/biome` can contain biome definitions
-   `worldgen/configured_carver` can contain definitions for world carver settings
-   `worldgen/configured_feature` can contain definitions for feature placements
-   `worldgen/configured_structure_feature` can contain definitions for structure placements
-   `worldgen/configured_surface_builder` can contain definitions for surfaces
-   `worldgen/noise_settings` can now contain noise configurations
-   `worldgen/processor_list` can contain sets of block processors
-   `worldgen/template_pool` can contain pool definitions for jigsaw structures
-   Custom biomes can now be used in the single biome/caves/floating islands world types (add the data pack containing the biome first)
-   Custom biomes can now be used in custom dimension generators

### Dedicated server packet limit

-   Dedicated servers can now kick clients that consistently send too many packets within a second
-   Controlled with the `rate-limit` settings in `server.properties`
-   The default rate limit of 0 means "no limit"

### Pack selection screens

-   While screen is open, it will automatically update when pack directory contents change
-   Both pack selection screen will now display contents of `pack.png` as pack icon

### Pack version

-   Resource pack version raised to 6

### Tags

#### Optional entries

Entries in tags can now be marked as optional. Failure to resolve optional entries does not prevent the whole tag from loading. Example:

    {
      "replace": false,
      "values": [
        "#minecraft:beds", // existing syntax
        { "id":"#missing:tag", "required": false }, // optional sub-tag entry
        "minecraft:anvil", // existing syntax
        { "id":"minecraft:stone_button", "required": true }, // new syntax for required tags
        { "id":"missing:block", "required": false } // optional single-element entry
      ]
    }
    

## Bugs

A total of more than [150 bugs](https://bugs.mojang.com/issues/?filter=25075) have also been fixed in this release!

---

# Minecraft: Java Edition 1.16.1

We're now releasing 1.16.1 for Minecraft: Java Edition. This version fixes stability issues with Realms.

Looking for all the new stuff in the Nether Update release? You can check out [this post](https://www.minecraft.net/en-us/article/nether-update-java) to read about all the new things!

## Get the Release

To install the release, open up the [Minecraft Launcher](https://www.minecraft.net/download) and click play! Make sure your Launcher is set to the "Latest Release" option.

Cross-platform server jar:

-   [Minecraft server jar](https://launcher.mojang.com/v1/objects/a412fd69db1f81db3f511c1463fd304675244077/server.jar)

Report bugs here:

-   [Minecraft issue tracker!](https://bugs.mojang.com/projects/MC/summary)

Want to give feedback?

-   Head over to our [feedback website](https://feedback.minecraft.net/) or come chat with us about it on the [official Minecraft Discord](https://discord.gg/Minecraft).

---

# Minecraft: Java Edition 1.16

One does not simply walk into the Nether, but it seems that's what everyone is about to do anyway...

Today we're releasing the full Nether Update in all its glory! Traverse through familiar, fiery wastes into new unexplored fungal forests, spooky valleys, and deltas brimming with basalt. Dig your way through these biomes and you might be able to find a new curious material, suspiciously titled "ancient debris". What will you make of it (it’s totally not Netherite)?

Fight your way through hordes of Piglins… Or don't! They’re actually pretty cool if you bring some bling. And in case you find yourself in the wrong end of a bargain, make sure that you have access to a functional respawn anchor. I advise you to not use your regular bed unless you’re feeling a bit… “adventurous”.

Enjoy the update!

## Features

-   Added Basalt Deltas biome to the Nether
-   Added Crimson Forest biome to the Nether
-   Added Hoglins
-   Added Netherite
-   Added Piglins
-   Added ruined portals
-   Added Soulsand Valley biome to the Nether
-   Added Striders
-   Added Warped Forest biome to the Nether
-   Added Zoglins
-   Added a new disableChat command line option – when used, receiving and sending online chat is disabled
-   Added a new disableMultiplayer command line option – when used, the Multiplayer button is disabled
-   Added bastion remnants
-   Added new Game Mode Switcher debug menu
-   Added new Nether blocks
-   Added the Soul Speed enchantment
-   Added the lodestone
-   Added the respawn anchor that allows you to set your respawn point in the Nether. Use while holding glowstone to charge to a maximum of four charges – each respawn use one charge
    -   You can charge the respawn anchor using a dispenser
-   Added the target block
-   Basalt is formed when lava flows over soul soil next to blue ice
-   Bell blocks will now ring when hit by any projectile
-   Bells can now be hung from the underside of more blocks
-   Compasses can now be enchanted with Curse of Vanishing
-   Endermen can now pick up some of the new Nether blocks
-   Endermen will no longer pick up Netherrack
-   Entities now get pushed by flowing lava
-   Farmer Villagers can now compost seeds
-   Fish now despawn when further than 64 blocks away from the closest player
-   Huge fungi will now only grow on its matching type of nylium
-   Knockback resistance is now a scale instead of a probability
-   Lily pads are now considered junk fishing loot rather than treasure
-   Patrols no longer spawn when the player is close to a village
-   TNT and campfires will now ignite when hit by any burning projectile
-   The General statistics list is now alphabetically sorted
-   Updated logos for Mojang Studios and Minecraft
-   Villagers can now spawn iron golems regardless of their profession status or latest working time
-   Walls do not have gaps anymore when stacked vertically
-   Walls will now connect to even more things, such as iron bars, panes, pressure plates, banners, and even pickles
-   When a Villager is struck by lightning, the witch it is converted to will no longer despawn
-   When fishing, treasure loot can now only be obtained by fishing in open waters

### Accessibility

-   Added "Line Spacing" chat and accessibility option
-   Added "Chat Delay" accessibility option

### Advancements

-   Piglins and Hoglins are now required for `Monster Hunter` and `Monsters Hunted`
-   `Serious Dedication` is now awarded for obtaining a Netherite hoe
-   Obtaining blackstone now also counts for the `Stone Age` advancement
-   Breeding Striders now counts for `The Parrots and the Bats` and is now required for `Two by Two`

#### New Advancements

-   `Bullseye` unlocks when hitting the bullseye of a target block from at least 30 meters away
-   `Hidden in the Depths` unlocks when obtaining ancient debris
-   `Cover Me in Debris` unlocks when obtaining full Netherite armor
-   `Country Lode, Take Me Home` unlocks when using a compass on a lodestone
-   `Who Is Cutting Onions?` unlocks when obtaining crying obsidian
-   `Not Quite "Nine" Lives` unlocks when setting a respawn anchor to the maximum
-   `This Boat Has Legs` unlocks when riding a Strider with a fungus on a stick
-   `Hot Tourist Destinations` unlocks when visiting all biomes in the Nether
-   `Those Were the Days` unlocks when entering a bastion
-   `War Pigs` unlocks when looting a chest in a bastion
-   `Oh Shiny` unlocks when distracting an angry Piglin with gold

### Basalt Deltas

Basalt Deltas can now be found in the Nether!

-   Remnants of volcanic eruptions, this biome sports a high concentration of basalt columns and lava deltas
-   Walking through it, you will be surrounded by flowing flakes of white ash
-   Magma cubes finally have their own home and spawn very frequently here
-   A new block, blackstone, can be found here in large patches

### Bastion Remnants

What's made of blackstone and full of Piglins and Hoglins? Bastion remnants!

-   Added four separate bastion remnant types: bridge, Hoglin stable, housing units, and treasure room
-   You can find these sizable structures in all Nether biomes, except the treacherous ash-dusted regions of Basalt Deltas
-   Explore, loot, and conquer a bastion remnant to call it your home – but beware! Piglins don't take kindly to intruders stealing their possessions

### Bees

-   Reduced the maximum distance a bee can wander away from its home hive to ~22 blocks

### Block Renames

Some blocks have been renamed. Turns out singular fungus in the Nether attempted to falsely present itself as many fungi – so sneaky!

-   Crimson fungi is now called crimson fungus
-   Warped fungi is now called warped fungus

### Blocks

Many new blocks have been added, and changes have been made to a few existing ones.

-   Added crying obsidian. It's sad and cries purple energy
-   Added basalt. Craft it 2x2 or use a stone cutter to create clean and shiny polished basalt!
-   Added blackstone, along with its variants: regular, polished, and polished brick
    -   Blackstone can be used to craft furnaces and stone tools
-   Added gilded blackstone – blackstone which has been imbued with gold and has a chance of dropping gold nuggets when broken
-   Added chiseled Nether bricks, cracked Nether bricks, and quartz bricks!
-   Added two new non-flammable wood-like blocks: crimson stems and warped stems
-   Added crimson and warped hyphae – all-sided "stem" blocks, including stripped variations
-   Added new ground surface blocks: crimson nylium and warped nylium
-   Added new vegetation: Nether sprouts, crimson roots, and warped roots
-   Added two types of fungi: crimson and warped. Try using bone meal to grow them!
    -   You can place crimson and warped roots and fungi into pots
-   Added warped wart blocks
-   Added weeping vines that grow from the bottom of a block downwards
-   Added twisting vines that grow upwards
-   Added a new natural light source block: Shroomlights
-   Added soul soil. Whenever fire burns on soul soil, it burns with a blue flame
    -   Soul soil and soul sand can be used to craft soul torches, which in turn can be crafted into soul lanterns
    -   The Wither can now be summoned using soul soil as base
-   Added soul campfires. Warm your buns with the heat of one thousand souls!
-   Added chain blocks
-   Nether gold ore can now be found in the Nether – it drops a few gold nuggets and can be mined with any type of pickaxe
-   Bone meal can now be used to grow kelp, weeping vines, and twisting vines
-   Using bone meal on Netherrack can now spread nylium
-   Nether vegetation blocks (sprouts, roots, vines, fungus, wart and wart blocks) are now compostable
-   Nether sprouts can be harvested with shears
-   Food can now be placed on unlit campfires

### Creative Mode

-   You can now milk cows and Mooshrooms in creative mode
-   You can now get stew from Mooshrooms in creative mode
-   When using an empty bucket on water in creative mode, you now get a bucket of water. If you have a bucket of water in your inventory already, no additional water buckets will be added when you use your empty bucket on water

### Crimson Forest

Crimson Forests can now be found in the Nether!

-   Crimson nylium carpets the cave floor with all kinds of strange new vegetation
-   Crimson nylium can be bonemealed to get more of this strange new vegetation
-   Huge crimson fungi make up the "trees" of this forest, with Shroomlights lighting up the forest floor
-   Nether wart blocks can be cleared quickly using a hoe
-   Weeping Vines grow from the cave ceilings and fungi
-   Hoglins wander these forests
-   Crimson spores swirl through the air

### Dispensers

-   Dispensers can now saddle pigs and horses
-   Dispensers can now put horse armor on horses
-   Dispensers can now put carpets on llamas
-   Dispensers can now put chests on llamas, donkeys and mules
-   Dispensers can now shear a Mooshroom
-   Dispensers can now shear snow golems

### F3 + N (Toggle Spectator)

A small change has been made to this debug combination.

-   By default, using this key would return you to Creative after toggling from Spectator. It now will toggle back to the previous game mode you had
-   As an example, if you were in Survival, then toggled to Spectator and back, you would be set back to Survival

### Farmers

-   Farmers can now put excess seeds in the composter to create bone meal
    -   Bone meal is used by the farmers to grow crops
-   Farmers share excess wheat to other farmers, so more farmers can make bread

### Game Mode Switcher

New F3 debug feature which allows you to switch game modes with traditional "tabbing" functionality.

-   Hold F3 and tap F4 to open the menu
-   Tapping F4 will cycle the game mode, or you can use the mouse
-   Release F3 to apply
-   Your last game mode is remembered and will be the first selected option, so you can quickly toggle between two game modes with a single press of F3 + F4!

### Hoe Changes

We've made some changes to hoes to make them more useful in the Nether.

-   Each tier has different speed at which hoes mine blocks they are effective against
-   Hoes can now be enchanted with the following enchantments: Efficiency, Fortune, Silk Touch
-   Those enchantments can now be provided through enchanting table
-   Hoes are now the appropriate tool for mining hay, targets, dried kelp blocks, leaves, Shroomlights, Nether wart blocks, warped wart blocks, sponges, and wet sponges.

### Hoglins

-   Hoglins are big aggressive beasts that live in crimson forests in the Nether
-   They attack players on sight. Be careful – they can easily knock you off a ledge!
-   Hoglins drop pork and sometimes leather, but not willingly
-   You can breed Hoglins by feeding them crimson fungi. Do so at your own risk
-   Hoglins get hunted by Piglins sometimes, but they don't go down without a fight
-   Despite this, Hoglins and Piglins aren't enemies – more like an ecosystem
-   Baby Hoglins like to pretend they are tough – but don't worry, they're more bark than bite
-   Want to keep hoglins off your back? Pro tip: Hoglins hate the smell of warped fungi
-   Hoglins that somehow end up in the Overworld become Zoglins fairly quickly – but who would ever bring a Hoglin to the Overworld?

### Lodestone

A new block that can help you get your bearings!

-   Crafted from a Netherite ingot and chiseled stone bricks
-   Use a compass on a lodestone to create a lodestone compass, which will point to that lodestone

### Mobs

-   Players can no longer mount another entity when the crouch key is held down
-   Added gamerule universalAnger (disabled by default), which makes angered neutral mobs attack any nearby player – not just the player that angered them. Works best if you disable forgiveDeadPlayers
-   Added gamerule forgiveDeadPlayers (enabled by default), which makes angered neutral mobs stop being angry when the targeted player dies nearby

#### Forgive dead players

-   If this gamerule is disabled, then angered mobs will stay angry even if the targeted player dies
-   If both forgiveDeadPlayers and universalAnger are enabled, an angered neutral mob will stop being angry when their target dies. They won't seek any new targets after that
    -   Notable exception: Angered Zombified Piglins continuously spread anger. So even if one Zombified Piglin stops being angry because its target died, other angered Zombified Piglins nearby are likely to make it angry again. The only way to stop the anger is if none of the angered Zombified Piglins see a player for a while

#### Neutral mob anger

Updated anger management for most neutral mobs (polar bear, wolf, bee, Enderman, Piglin, Zombified Piglin).

-   When hurt by a player, the neutral mob will target that player and try to kill it
-   The mob will stay angry until the player is dead or out of sight for a while
-   Anger is persistent, so a player can't escape by temporarily logging out or switching dimension
-   If a targeted player dies near the angered mob, it will stop being angry (unless forgiveDeadPlayers is disabled)
-   Neutral mobs also get angry at other mobs who hurt them. However, that anger is not persistent
-   Angered neutral mobs will only attack the offending player, not innocent bystanders
    -   Notable exception: If a beehive or nest is broken, the bees will be angry at all nearby players
-   Some mobs spread anger (wolf, Zombified Piglin, Piglin, bee). If a player attacks one, all nearby mobs of the same type will get angry at that player

#### Universal anger

Universal anger is basically guilt by association. A neutral mob attacked by players will be angry at players in general, regardless of who attacked them. More specifically:

-   A neutral mob attacked by a player will target the nearest player, even if that player wasn't the attacker
-   Every time the neutral mob is hit by a player it will update its attack target to the nearest player
-   Players can use this to make neutral mobs attack other players. Who would ever do something that devious?
-   Universal anger does not apply when a neutral mob is attacked by another mob - only when it is attacked by a player
-   Universal anger is persistent. The angered mob will stay angry even if the player logs out and logs in, or jumps through a portal and back
-   Mobs that spread anger will also spread universal anger. So if a player attacks a Zombified Piglin, all other Zombified Piglins within sight will be universally angry and attack their nearest player
-   An angered neutral mob will stop being angry if it can't see any eligible target for a while

#### Zombified Piglins

-   Zombie Pigmen are now known as Zombified Piglins, and they now have ears. Well, at least one ear
-   Zombified Piglins no longer attack innocent bystanders (unless you enable gamerule universalAnger)
-   Zombified Piglins stop being angry if the targeted player dies nearby (unless you disable gamerule forgiveDeadPlayers)
-   Zombified Piglins continuously spread to other Zombified Piglins, as long as they see their target

### Nether Biome Fog

-   Biome fog color smoothly blends between biomes. Smooth!

### Netherite

-   A new high level material found in the Nether. Use it to upgrade your diamond gear!

#### How to make Netherite

1.  Mine ancient debris in the lower depths of the Nether. At your own risk though. No insurance coverage for that
2.  Refine it into Netherite scrap in a furnace or blast furnace
3.  Combine four Netherite scrap with four gold ingots in a crafting table to make a Netherite ingot
4.  Use a smithing table to fuse the Netherite ingot with your diamond weapon, tool, or armor

#### Netherite effects

-   Netherite items float in lava – just so you don't lose all your gear after that unplanned lava bath
-   Netherite items have higher enchantment value than diamond (but not as high as gold)
-   Netherite tools work faster and last longer than diamond
-   Netherite weapons do more damage than diamond
-   Netherite armor have higher toughness and durability than diamond
-   Netherite armor gives you knockback resistance, so you barely get knocked back at all when hit by arrows and such
-   Netherite blocks can be used as the base of a beacon and Netherite ingots can be used as the fuel for a beacon. Weird flex but ok
-   ...and it looks cool!

### Parity

-   Changed ambient block lighting in the Nether for parity with Bedrock edition

### Parrot

-   Parrots imitate hostile mobs less often
-   Parrots do not randomly imitate hostile mobs when gamemode is on peaceful

### Piglins

-   Piglins are an aggressive civilization that live in the Nether
-   They mostly hang around in Crimson Forests, but you might find some in the Nether Wastes too
-   They think of players as target practice and will attack on sight
-   However, if you dress appropriately, they will see you as a respectable figure. Or tolerable at least
-   Piglins are suspicious of strangers. If they see you opening a chest or other container, they will assume that you're stealing and will treat you accordingly
-   If Piglins hear you break a chest or a block of gold (or similar), they will also assume you are stealing
-   Piglins LOVE gold and get very distracted by gold items
-   Gold ingots are currency to Piglins. Throw ingots at them, or right-click them with an ingot, to barter for various goods
-   Piglins sometimes get hungry and hunt Hoglins for food. Or they try at least. They results... vary.
-   Piglins prefer to hunt and fight in groups. When a fight is happening, everyone wants in
-   Piglins that somehow end up in the Overworld become zombified fairly quickly
-   Piglins are creeped out by soul fire and Zombified Piglins, and will avoid them if possible
-   Wither skeletons and Withers are a historic enemies of the Piglins and will be attacked on sight
-   Baby Piglins are not as dangerous, but they can be mischievous, so watch your back
    -   ...and they like to play with Baby Hoglins
-   Added a Piglin banner pattern that can be found in bastion remnants

### Redstonewire

The blockstate, rendering, and behavior of redstone wire are more in line with each other. Redstone will provide power to blocks on all sides it shows a visual connection to, and not do so on those sides without a visual connection.

-   A dot of redstone will not power its surrounding blocks
-   A single redstone wire is now represented as a cross
-   A wire on top of a block, which is redirected from below, will now power the sides it is redirected to. E.g. a fence gate above the redirecting wire will be powered
-   Wires that redirect upwards to wires on non-conductive blocks used to only be redirected visually. Now, this redirection applies to their behavior as well
-   A wire that is redirected to go over a block will now always provide power to the block. This is most noticeable when the wire has signal strength 1
-   When right-clicking a single piece of redstone, it will toggle between a the cross and the dot

#### Target block

-   The target block now conducts redstone signals

### Ruined Portals

Shattered remains of ancient Nether portals. Wonder who built them?

-   They can be found in any Overworld or Nether biome
-   Some are hidden underground, under the sea, or buried in sand

### Soul Speed

Never suffer again drudging through Soul Sand Valleys – Soul Speed has you covered!

-   Shine your boots of choice with this soul-sucking enchantment to speed around on soul sand and soul soil
-   However, there's a downside: enchantments will slowly degrade your boots each soul block you walk on
-   Can only be obtained by bartering with those pesky Piglins

### Soulsand Valley

Soulsand Valleys can now be found in the Nether!

-   An open space made mostly of soul sand and soul soil
-   Basalt pillars span from floor to ceiling
-   Fossile remains of unknown creatures from the past litter the valley
-   Ash falls through the air
-   A light blue glow envelopes the valley
-   Beware of skeletons here

### Sounds

-   Ghasts sounds are now heard at shorter range
-   Updated block sounds for bone blocks, Netherrack, soul sand, Nether wart, Nether bricks, and quartz ore
-   New ambient sounds for the Nether biomes
-   New mood detection algorithm for cave sounds
-   Added a new music disc titled "Pigstep" by Lena Raine, which can only be found in bastion remnants

### Strider

A new mob living the lava lakes of the Nether.

-   Strides on top of the surface of lava
-   Can be saddled, but has a will of its own
-   Really likes the smell of warped fungi – might even be convinced to follow it

### Target Block

Because let's face it, your aim could use some practice!

-   The closer you hit to the center, the larger the redstone signal
-   Test your skills with a variety of projectiles, including eggs, snowballs, tridents, and more
-   You will need one hay block and four redstone for this recipe

### Villager Workstation Logic

-   Villagers no longer try to work at the same workstation
-   The most experienced nearby villager for the profession corresponding to the workstation you add will get the workstation
-   Villagers now have to walk to and reach the workstation before they can acquire the profession and/or work there
-   Villagers can no longer claim workstations or professions during raids or night time
-   Villagers will check and make sure their workstation is valid at all times of day as long as they are within 16 blocks of their workstation

### Warped Forest

Warped Forests can now be found in the Nether!

-   Warped nylium carpets the cave floor with all kinds of strange new vegetation
-   Warped nylium can be bonemealed to get more of the strange new vegetation
-   Huge warped fungi make up the "trees" of this forest, with Shroomlights lighting up the forest floor
-   Warped wart blocks can be cleared quickly using a hoe
-   A dark blue fog covers the forest
-   Warped spores swirl through the air
-   The Warped Forests are strange, but also the least hostile place in the Nether

### Weeping Vines

-   Weeping vines are now climbable!

### World Generation

-   The old Nether biome is now called Nether Wastes
-   Shipwrecks and ocean ruins are now a bit less common, so you get more excited when you find one!
-   Patches of blackstone and gravel now generate in all Nether biomes, and patches of soul sand now generate in Soul Sand Valleys

### Zoglins

-   Zoglins are zombified Hoglins – the result of bringing a Hoglin into the Overworld
-   Unlike Hoglins, they can't be bred or fed, and they don't care about warped fungus
-   Beware – these beasts are raving mad and attack just about everything they see!

## Technical

-   Added `target_hit` advancement trigger
-   Added `thrown_item_picked_up_by_entity` advancement trigger
-   Added `player_generates_container_loot` advancement trigger
-   Added `item_used_on_block` advancement trigger
-   Removed `safely_harvest_honey` advancement trigger
-   Added `player` check to every trigger (except `impossible`)
-   Entity checks in triggers can now use loot table condition syntax
-   Attributes are now added to game registry, similar to items, sound events, etc.
-   Chat component style can now select font.
-   Block storage format in chunks slightly changed to speed up various tasks (rendering, pathfinding, world generation, etc).
-   Added a `locatebiome` command
-   Tab completion for resource location will match any part after an `_`
-   The compass now has `LodestonePos`, `LodestoneDimension` and `LodestoneTracked` data fields. If `LodestoneTracked` is zero, the game will skip checking for a Lodestone in the specified position
-   Slightly changed datapack loading to prevent custom datapacks from crashing
-   Data packs can now be selected on world creation
-   Added a `enable-status` option to the server.properties file which if set to `false` will suppress replies to status requests from clients. This makes the server appear offline in the multiplayer screen
-   Full range of Unicode characters is now supported (some may know what that means 😉)
-   Mobs avoid walking on magma blocks and lit campfires
-   Cached repeated block type lookups and collisions during pathfinding for increased performance
-   Minor optimizations in collision detection
-   Top level element in predicate file can now be array (all contents will be ANDed)
-   Smithing recipes can now be added or changed through data packs
-   Added control over how much entity data a server sends to clients
-   Added a JMX MBean to monitor dedicated server tick times
-   Shulkers with "NoAI" can now be summoned with rotation
-   Added `strider_one_cm` custom statistics for riding Striders
-   Expanded the max size per axis of structure blocks from 32 to 48
-   Region files are now opened in synchronous mode to increase reliability
-   Difficulty and game rules can now be changed from "Create World" screen
-   "Singleplayer" button will jump directly to "Create World" screen if there are no worlds to select
-   Temporarily removed structure settings from flat level preset strings (workaround: use import/export settings functionality)

### Advancements

#### Extended entity checks

Entity checks in triggers can now use loot table condition syntax. Old notation:

    {
      "trigger": "minecraft:player_killed_entity",
      "conditions": {
        "entity": {
          "type": "minecraft:blaze"
        }
      }
    }
    

is now equivalent to:

    {
      "trigger": "minecraft:player_killed_entity",
      "conditions": {
        "entity": [
          {
            "condition": "minecraft:entity_properties",
            "predicate": {
              "type": "minecraft:blaze"
            },
            "entity": "this"
          }
        ]
      }
    }
    

**Note 1**: Like in loot tables, all conditions in top level array must be met for whole condition to trigger. **Note 2**: To access new functionality, top level element must be JSON array. JSON object are interpreted as old notation.  
Full list of extended triggers:

-   New field `player` in every trigger
-   `bred_animals` - `parent`, `partner`, `child`
-   `channeled_lightning` - `victims`
-   `cured_zombie_villager` - `zombie`, `villager`
-   `fishing_rod_hooked` - `entity`
-   `killed_by_crossbow` - `victims`
-   `player_killed_entity` - `entity`
-   `entity_killed_player` - `entity`
-   `player_hurt_entity` - `entity`
-   `summoned_entity` - `entity`
-   `tame_animal` - `entity`
-   `target_hit` - `projectile`
-   `villager_trade` - `villager`

#### Miscellaneous trigger changes

-   Due to addition of `player`, existing contents of `location`, `slept_in_bed`, `hero_of_the_village`, `voluntary_exile` can now be placed in `location` field instead of top-level object. Old syntax is still supported, but depreciated.
-   `location` got a new property `smokey` which checks if the location is closely above a campfire
-   `entity_properties` got new properties `vehicle` and `targetedEntity` which match the vehicle or the entity targeted by a mob

#### New trigger

-   `target_hit` trigger type
    -   `signal_strength` matches the signal strength output from the block on hit
    -   `projectile` matches the projectile entity
    -   `shooter` matches the player who shot or threw the projectile
-   `item_used_on_block` trigger type
    -   `item` matches the thrown item which was picked up
    -   `entity` matches the entity which picked up the item
-   `player_generates_container_loot` trigger type
    -   `loot_table` matches the resource location of the generated loot table
-   `item_used_on_block` trigger type
    -   `location` matches the location at the center of the block the item was used on
    -   `item` matches the item used on the block

### Attributes

Attributes have been moved to game registry. That means few changes: Renames:

-   Items and entities will no longer keep unknown attributes
-   Names of some attributes have been renamed to meet resource location requirements
-   `generic.maxHealth` 🡆 `generic.max_health`
-   `zombie.spawnReinforcements` 🡆 `zombie.spawn_reinforcements`
-   `horse.jumpStrength` 🡆 `horse.jump_strength`
-   `generic.followRange` 🡆 `generic.follow_range`
-   `generic.knockbackResistance` 🡆 `generic.knockback_resistance`
-   `generic.movementSpeed` 🡆 `generic.movement_speed`
-   `generic.flyingSpeed` 🡆 `generic.flying_speed`
-   `generic.attackDamage` 🡆 `generic.attack_damage`
-   `generic.attackKnockback` 🡆 `generic.attack_knockback`
-   `generic.attackSpeed` 🡆 `generic.attack_speed`
-   `generic.armorToughness` 🡆 `generic.armor_toughness`

### Block placement

-   Ladders and tripwire hooks can now be placed on observers, redstone blocks, and target blocks
-   Doors, rails, buttons, pressure plates, redstone, and more can now be placed on soulsand and full-block of snow layers
-   Soulsand with a rail on top will no longer slow down minecarts

### Block storage

`BlockStates` in `Sections` elements no longer contain values stretching over multiple 64-bit fields. If number of bits per block is not power of two (i.e. single 64-bit value can't fill whole number of blockstates) some bits will not be used. For example, if single block state takes 5 bits, highest 4 bits of every 64-bit field will be unused. That also means slight increase in storage size (in case of 5 bits, from 320 to 342 64-bit fields).

### Block Tags

-   `minecraft:climbable` is now a block tag that allows datapacks to determine which blocks are, well, climbable
-   `minecraft:soul_speed_blocks` is any block that the soul speed enchantment increases speed on

### Chat components

#### Hover event argument

-   `style.hoverEvent` parameter now has parameter `contents`, with contents depending on type:
    -   For `show_text` - chat component
    -   For `show_item` - either item id or object with fields `id`, `count`, and `tag` (with last one being serialized NBT)
    -   For `show_entity` - object with fields: `id` (UUID), `name` (chat component), and `type` (entity type resource location)
-   Old style `value` argument is now deprecated (but still supported)

### Commands

#### attribute

Adds modifies attribute on single entity. Possible syntax: Parameters:

-   `attribute <target> <attribute> get [<scale>]` - get total value of attribute
-   `attribute <target> <attribute> base set <value>` - sets base valye
-   `attribute <target> <attribute> base get [<scale>]` - get base value
-   `attribute <target> <attribute> modifier add <uuid> <name> <value> add|multiply|multiply_base` - adds modifier (fails if modifier is already present)
-   `attribute <target> <attribute> modifier remove <uuid>` - removes modifier
-   `attribute <target> <attribute> modifier value get <uuid> [<scale>]` - get value of modifier
-   `target` - single entity (note: only players, armor stands and mobs have attributes)
-   `attribute` - name of attribute (like `minecraft:generic.max_health`)
-   `name` - string (in optional quotes) describing human-readable name of modifier
-   `value` - floating point value (note: certain attributes have limits on final value, so your change might not be noticeable)

#### locatebiome

New command that locates a specified biome. Useful in creative mode when you're looking for a specific biome and don't want to fly around randomly searching for it. Syntax: `locatebiome <biome>` Parameters:

-   `biome` - The id of the biome to find

#### spawnpoint

The spawnpoint command now supports being run in any dimension.

#### spreadplayers

Added an optional argument to specify maximum height. New syntax: `spreadplayers <center> <spreadDistance> <maxRange> [under <maxHeight>] <respectTeams> <targets>`

-   `maxHeight` - Specifies the maximum height for resulting positions

#### UUIDs in NBT

UUIDs stored in NBT are now represented as an array of four integers. Example: `{UUID:[I;1498693494,1027158888,1898994005,860320107]}` Along with that a couple of fields have been renamed:

-   `OwnerUUID` of tamed animals, area effect clouds, evoker fangs and projectiles is now simply `Owner`
-   `TrustedUUIDs` of foxes is now `Trusted`
-   `target_uuid` of conduits is now `Target`

### Custom Worlds

-   Added experimental support for new custom worlds
-   Edit world screen now has an option to export world settings to a JSON file
-   During world creation you can import previously exported world settings
-   A bunch of new parameters are exposed, but marked as experimental, meaning you can play with them, but there is no guarantee that any of them will continue working (even in the next snapshot!)
-   Flat level preset string lost structure settings (they are now stored in a common format for all worlds), we will restore some form of this functionality soon
-   Buffet world can no longer be created from server.properties, flat level settings changed a bit; better support for custom world creation on the server is coming soon

### Data pack selection

-   Data packs can now be selected before world is created
-   "Re-Create" option will also copy data packs present in source world

### Datapack loading

-   If datapack reload fails, changes will not be applied and game will continue using previous data
-   If existing datapacks prevent world from loading, game will give option to load world in safe mode, which loads only vanilla datapack
-   Changes to datapack list are stored only after successful reload
-   Added `--safeMode` option to server to load only with vanilla datapack
-   Game will now detect critical datapack issues, like missing required tags and prevent world from being loaded

### Effects

-   Increased view distance in lava slightly while having the fire resistance effect

### Entity Broadcasting

It is now possible to control at what range the server sends data about entities to clients.

-   Added an `entity-broadcast-range-percentage` server property controlling how close entities need to be before being sent to clients. Higher values means entities are visible further away from players but cause more network traffic. Specifies percentage of default value, so for example `50` specifies half of the default range

### Fonts

-   `Force Unicode` option now switches between normal and alternative font (called `uniform.json`) – no reload needed

### IO operations

#### Synchronous writes

Region files are now opened in synchronous mode to prevent data loss and corruption after crash. For performance reasons this feature is disabled by default on non-Windows clients. Status of this feature can be manually controlled by following options:

-   For dedicated servers: `sync-chunk-writes` within `server.properties`
-   For clients: `syncChunkWrites` within `options.txt`

#### World save format

-   Saving `level.dat` now uses randomly-named temporary files (instead of using `level.dat_new` every time)
-   `player/*.dat` are now saved in a way similar to `level.dat` (including leaving `.dat_old` files)

### Item frames

#### New tags

-   `Invisible` - makes item frame invisible (item inside frame remains visible)
-   `Fixed` - prevents item frame from being broken and item inside from being removed

### Jigsaw block

-   Jigsaw now can have one of 12 orientations
-   Added new property `Joint type` to describe if attached piece can be rotated (`rollable`) or not (`aligned`)
-   NBT field `target_pool` has been renamed to `pool`
-   `attachement_type` has been split into `name` (on parent block) and `target` (on child block)
-   Added a button in the GUI that generates a jigsaw structure starting from the jigsaw block, using given generation depth

### JMX Monitoring

It is now possible to monitor the server tick times though JMX. The rationale for this is that JMX is a well known and supported monitoring technology with existing integrations and tools. This enables server admins to hook alerts and graphing tools using ordinary JMX clients and dashboards.

#### Enabling JMX Monitoring

-   A new flag `enable-jmx-monitoring` has been added to the server.properties file which if set to `true` will expose an MBean with the Object name `net.minecraft.server:type=Server` and two attributes `averageTickTime` and `tickTimes` exposing the tick times in milliseconds
-   In order for enabling JMX on the Java runtime you also need to add a couple of JVM flags to the startup as documented [here](https://docs.oracle.com/javase/8/docs/technotes/guides/management/agent.html)

### Loot Tables

#### Entity Predicate

-   Added `fishing_hook` sub-predicate

##### fishing\_hook

Check properties of the fishing hook

###### Parameters

-   `in_open_water` - Matches whether the fishing location is open water fishing or not. A fishing location is considered to be open water if the fishing hook is in water, there are no blocks besides lily pads above water and all water blocks are source blocks with no solid underwater blocks around

### Pack selection screen

-   Packs can now be dropped directly on data and resource pack selection screens
-   Dropped files and directories will be copied to appropriate places

### Particles

-   New particle types: ash, crimson\_spore, soul\_fire\_flame, and warped\_spore
-   New particle types: dripping\_obsidian\_tear, falling\_obsidian\_tear, and landing\_obsidian\_tear
-   New particle type: soul

### Rendering

-   Nailed Entity shadows to the ground
-   Added an Entity Distance scale option ranging from 50% to 500%
-   Added shader support for accessing depth buffer
-   Added new "Fabulous!" graphics option
    -   This uses per-pixel blending layers for some transparent elements

### Smithing recipes

There's now a `smithing` recipe type. Recipes of this type are used in the smithing table to upgrade one item type into another type, maintaining tags.

-   `base` - Ingredient specifying an item to be upgraded
-   `addition` - Ingredient specifying valid items to trigger the upgrade
-   `result` - Item specifying the resulting type of the upgraded item

### Text style

#### Colors

`color` property can now contain RGB value prefixed by `#`. For example `#55ff55` will result in the same color as `green`

#### Custom fonts

Chat component style now supports `font` property, which is resource location for font in resource pack. No entry is equivalent to `minecraft:default`

### Fixed Bugs

[Nearly 500 bugs](https://bugs.mojang.com/issues/?filter=24954) fixed in this release.

---

# Minecraft: Java Edition 1.15.2

## Changes in 1.15.2

-   Bees no longer anger when a nearby nest/hive is destroyed using a silk touch tool
-   Added `doPatrolSpawning` and `doTraderSpawning` game rules that control spawning of patrols and wandering traders, respectively
-   Added `gui_light` option in block models to allow controlling light when rendering model as item in GUI
    -   Controls light when rendering block model inside slot. If set to `side`, model will be rendered like block. If set to `front`, model is shaded like flat item
-   Any birch or oak sapling grown near a flower within 2 blocks distance on the same y-level has a 5% chance of having a bee nest
-   Bee Nests now have a 2% chance of spawning in Flower Forests
-   Bee Nests now have a 0.2% chance of spawning in Forest, Wooded Hills, Birch Forest, Tall Birch Forest, Birch Forest Hills, and Tall Birch Hills biomes
-   Fixed bugs

## Fixed bugs in 1.15.2

-   [MC-169825](https://bugs.mojang.com/browse/MC-169825) - “Multiplayer (3rd party)” shows in window title when disconnecting from a singleplayer world
-   [MC-169839](https://bugs.mojang.com/browse/MC-169839) - Certain potion effects that override lower level effects don’t get removed after their duration ends
-   [MC-169840](https://bugs.mojang.com/browse/MC-169840) - Drinking a level 1 potion under a level 2 beacon and leaving results in the effect being lost
-   [MC-169848](https://bugs.mojang.com/browse/MC-169848) - Crashes when trying to create Beehive From planted tree
-   [MC-169886](https://bugs.mojang.com/browse/MC-169886) - No older world protection in 1.15.2 PR 1
-   [MC-862](https://bugs.mojang.com/browse/MC-862) - Spawn protection doesn’t work for item frames, paintings and armor stands
-   [MC-1541](https://bugs.mojang.com/browse/MC-1541) - Beacon effect removes potion effect of the same type
-   [MC-51053](https://bugs.mojang.com/browse/MC-51053) - Furnace minecarts lose power after navigating corners
-   [MC-150575](https://bugs.mojang.com/browse/MC-150575) - Concrete powder does not turn into concrete when letting it fall beside water
-   [MC-153987](https://bugs.mojang.com/browse/MC-153987) - Falling down ladders while wearing elytra
-   [MC-165695](https://bugs.mojang.com/browse/MC-165695) - Hoppers harvesting honeycomb from bee hives and bee nests only pick up one honeycomb
-   [MC-166312](https://bugs.mojang.com/browse/MC-166312) - Loom UI pattern icons are too dark
-   [MC-166319](https://bugs.mojang.com/browse/MC-166319) - B on “Open in browser” is lowercase in link confirmation GUI
-   [MC-166324](https://bugs.mojang.com/browse/MC-166324) - “Raw input” button has lowercase “i”
-   [MC-166722](https://bugs.mojang.com/browse/MC-166722) - Some custom item models appear dark in the inventory
-   [MC-167018](https://bugs.mojang.com/browse/MC-167018) - Misplaced pixel in critical hit particle texture
-   [MC-167079](https://bugs.mojang.com/browse/MC-167079) - Horse Armor texture is off
-   [MC-167201](https://bugs.mojang.com/browse/MC-167201) - Invisible glowing entities do not respect their team color
-   [MC-167219](https://bugs.mojang.com/browse/MC-167219) - Reloading a resource pack enough times will cause intense lag
-   [MC-167220](https://bugs.mojang.com/browse/MC-167220) - Items on marker armor stands no longer glow
-   [MC-167235](https://bugs.mojang.com/browse/MC-167235) - Distance from where you can enter a bed is off center
-   [MC-167344](https://bugs.mojang.com/browse/MC-167344) - com.mojang.blaze3d.platform.ClipboardManager leaks direct buffers
-   [MC-167416](https://bugs.mojang.com/browse/MC-167416) - Distance from where a monster will stop you from sleeping is off center
-   [MC-167444](https://bugs.mojang.com/browse/MC-167444) - iron\_golem\_crackiness\_\* textures show up on invisible iron golems that are damaged
-   [MC-167709](https://bugs.mojang.com/browse/MC-167709) - Bees that ride a boat, minecart or other entities when entering their hive or nest can’t leave the hive or nest ever again
-   [MC-168091](https://bugs.mojang.com/browse/MC-168091) - Concrete powder doesn’t convert into concrete when dropped into deep water
-   [MC-168230](https://bugs.mojang.com/browse/MC-168230) - End crystal beam is dark / desaturated
-   [MC-168467](https://bugs.mojang.com/browse/MC-168467) - Bees do not remember how many crops they’ve pollinated
-   [MC-169157](https://bugs.mojang.com/browse/MC-169157) - Breaking a hive with obstructed front makes bees vanish

---

# Minecraft: Java Edition 1.15.1

## Changes in 1.15.1

-   Optimized chunk rendering performance, especially for chunks with many different block states
-   Fixed an error spammed to the game's log files caused by custom spawner blocks spawning villagers
-   Improved network handling of invalid Biome ids
-   Fixed a crash in the Realms screen
-   Fixed bugs
-   Removed Herobrine

## Fixed bugs in 1.15.1

-   [MC-135050](https://bugs.mojang.com/browse/MC-135050) - NullPointerException while tesselating block model
-   [MC-167530](https://bugs.mojang.com/browse/MC-167530) - Anvils causing java.lang.StackOverflowError
-   [MC-167482](https://bugs.mojang.com/browse/MC-167482) - Corrupt chunk causes force upgrading a world to fail

---

# Minecraft: Java Edition 1.15

## Features

-   Added advancements for bees and honey!
-   Added bees!
-   Added bee nests and bee hives!
-   Experience orbs now appear in the same location as loot when an entity is killed
-   Added features found in other Minecraft editions
-   Added honey blocks!
-   Added the honey bottle!
-   Added honeycomb!
-   Added honeycomb blocks!

### Accessibility

-   Sneak and sprint inputs can now be switched between hold and toggle mode in the accessibility options
-   Descriptions under buttons on the create world screen are now narrated
-   Changed the button highlight to make it easier to distinguish which button is selected

### Advancements

-   Added "Sticky Situation" for jumping into a honey block to break your fall
-   Added "Bee Our Guest" for safely collecting honey from a beehive using a campfire
-   Added "Total Beelocation" for moving a bee nest with 3 bees inside using silk touch

### Bee

We're buzzing with excitement! Can someone tell Cory to stop making bee puns now?

-   Bees are cute, fuzzy, neutral mobs
-   Don't hurt them, they don't want to hurt you
-   If a bee does sting you, it will leave its stinger in you and eventually die, dropping nothing :(
-   Bees love pretty flowers and spend their lives gathering pollen from them
-   After gathering pollen, bees fly back to their home nest
-   Bees help you by growing crops while carrying pollen back to the nest
-   Bees like sharing the location of their favorite flowers with other bees
-   If a bee doesn't have a home nest, it will wander around until it finds one it can use
-   Bees don't like the rain and they sleep at night. They will go back to the nest in these cases
-   Bees can be bred using flowers
-   If a bee can't find nectar, after a while it will return home for a bit
-   Bees try to avoid water
-   Bees go inside if it's raining at all in the world, not just where the bee is located
-   Bees will search up to 10 blocks away from itself in all directions to find a nest/hive to call home

### Bee Nests / Bee Hives

In real life, bees dance in their nests to show other bees where flowers are!

-   Bee nests spawn naturally in flower forests, plains, and sunflower plains biomes
-   When a bee visits this block and completes its journey undisturbed, the level of honey increases
-   Max of 5 levels of honey
-   Level 5 is quite...sticky
-   Bees use nests and hives to share flower locations with other bees
-   Sometimes bees that already know about a flower will choose not to use this information
-   Bee hives are crafted by players using honeycomb and wood planks
-   Use a silk touch tool to get the block with the bees stored inside
-   Bee nests will be destroyed unless you use silk touch
-   Use shears when at full honey to get honeycomb
-   Use a bottle when at full honey to get a honey bottle
-   Campfire smoke calms bees - place one underneath the nest/hive to keep them in chill mode
-   Redstone-friendly!
-   Bees like bee nests and bee hives the same amount! They don't play favorites :)
-   Bees only exit through the front of the nest/hive

### Dispensers

-   Dispensers can now fill bottles with water and honey
-   Dispensers can now shear honey combs from bee nests and hives
-   Dispensers now eject empty bottles properly when not facing water

### Honey Block

Sticky. Very sticky!

-   Walking and jumping is limited
-   If you stand on a honey block that is pushed by a piston, you come along for the ride
-   Jump into a wall of honey blocks to slide down and slow your fall
-   Landing on a honey block cushions your fall somewhat
-   When a honey block is pushed or pulled by a piston, it sticks to adjacent blocks and tries to move them in the same direction (just like slime blocks do)
-   Honey blocks and slime blocks don't stick to each other, because... um.... because of special Minecraft chemistry
-   Mobs and animals dislike walking on honey blocks unless they really need to as it's too sticky for their comfort
-   Honey blocks are crafted from four honey bottles

### Honey Bottle

Organic, gluten-free, delicious locally-farmed honey!

-   Use an empty glass bottle on a hive or nest that is full of honey to get a bottle of honey!
-   Drink it!
-   ???
-   Profit!
-   Oh yeah, also craft it into sugar!
-   Or craft four bottles into a honey block!
-   Drinking honey also cures poison

### Honeycomb

Disclaimer: Cannot be used to comb your hair

-   Shear a full-honey hive or nest to obtain
-   Craft with wood planks to create a bee hive

### Honeycomb Block

BYOH - Build Your Own Honeycomb

-   Craft 2x2 Honeycomb to get a honeycomb block
-   Purely decorative!

### Iron Golems

-   Iron golems start cracking when badly damaged
-   Repair them with iron ingots!
-   Damage progress is based on ratio of current health to max health

### Parity

Things from other editions of Minecraft have arrived to Java Edition!

-   Trying to sleep in a bed during daytime will now set the player's spawn location to that bed
-   Setting the respawn point by using a bed now shows a message
-   Bells will now ring if powered with a redstone signal
-   The doInsomnia game rule can now be switched off to prevent phantoms from spawning during nighttime
-   The doImmediateRespawn game rule can now be switched on to have players respawn immediately without showing the death screen
-   The drowningDamage, fallDamage and fireDamage game rules can now be used to prevent certain sources of damage
-   Sponges now dry out when placed in the Nether
-   Fireworks dispensed from a dispenser now travel in the direction they were fired
-   Boats as fuel now smelt 6 items in a furnace
-   Campfire can be extinguished with a shovel
-   When breedable mobs in groups spawn naturally they sometimes spawn babies in the groups
-   Parrots can sit on a player's shoulder even when the player is riding
-   Composters are now crafted from wooden slabs
-   All foods are now edible in creative mode
-   Dark prismarine is now crafted from black dye instead of ink sacs
-   Increased scaffolding burn time when used as fuel in a furnace
-   Added stats for anvil and grindstone interaction counts

## Technical

-   Item predicate in advancements now makes distinction between actual enchantments and stored enchantments (like ones stored in enchanted books)
-   Added general-purpose storage for data commands
-   Added a `spectate` command
-   Loot table predicates can now be defined in separate files and used for entity selectors and in `execute if` command
-   Extended advancement and loot table predicates
-   Extended `schedule` command to allow scheduling function multiple times

### Advancements

-   Changes in item predicate:
    -   `enchantments` now only matches enchantments on item itself - it can no longer be used for enchanted books
    -   to match contents enchanted book, use `stored_enchantments`

#### Entity Predicate

##### `player`

Entity predicate now accepts `player` field, which checks player properties. Fails when entity is not player.

###### Fields:

-   `level` - range of allowed player levels
-   `gamemode` - same values as `/gamemode` command
-   `stats` - list of statistics to match. Entry fields: `type` (like `minecraft:custom`), `stat` (like `minecraft:sneak_time`) and `value` (int range)
-   `recipes` - map of recipe ids. Boolean value tells if it should or should not be known to player
-   `advancements` - map of advancement ids. If value is boolean, checks if advancement is done. If value is object, checks completion of critera

##### `team`

Entity predicate now accepts `team` field, which matches team name.

#### Location predicate

##### `block` and `fluid`

Predicate also accepts `block` and `fluid` sub-predicate. Available fields:

-   `block`/`fluid` - exact block/fluid id to match
-   `tag` - block/fluid tag to match
-   `nbt` - matcher for block entity NBT (only for blocks)
-   `state` - map of name-value properties. Value can be integer, boolean or string or object with optional `min` and `max` properties

##### `light`

Predicate now accepts `light` sub-predicate. Object has one integer range - `light` that matches visible light (`max(sky-darkening,block)`).

### Chat components

#### Click action

-   Added `copy_to_clipboard` action to `clickEvent`

#### NBT chat component

-   Added variant for NBT storage: `{"nbt": <path>, "storage":"<resource id>"}`. NBT storage can be manipulated with commands like `/data merge storage <resource id> ...`

### Commands

#### `data`

-   Data commands can now use `storage` as target. This is general-purpose, key-value storage
    -   Storage is shared between all dimensions in level
    -   Data in storage persist between reloads

#### `execute if predicate`

New subcommand evaluates custom predicates (defined in `predicates` directory of datapack).

#### `schedule`

-   Added new syntax `/schedule ... [append|replace]` (`/schedule ...` defaults to `replace`)
-   Added new syntax `/schedule clear <id>` to remove existing schedules (returns number of removed schedules)

#### effect

The `effect clear` command now defaults to `@s` if no target argument is given.

#### Entity selectors

New selector parameter `predicate` allows to apply custom custom predicate (defined in `predicates` directory of datapack).

#### kill

The `kill` command now defaults to `@s` if no target argument is given.

#### Spectate

New command that makes a player in spectator mode spectate an entity. Syntax: `spectate [target] [player]` Parameters:

-   `player` - The player that should spectate the target. Must be in spectator mode. If omitted, `@s` is used
-   `target` - The target to spectate. If omitted, makes the player stop spectating

### Custom predicates

Condition part of loot tables can now be defined as separate data pack resource in `predicates` directory.

### Loot tables

#### `location_check`

New parameters added:

-   `offsetX`, `offsetY`, `offsetZ` - optional offsets to location

#### `time_check` condition

New condition that checks day time.

##### Parameters

-   `value` - range of accepted values
-   `period` - if present, time will be modulo-divided by this value (for example, if set to 24000, `value` will operate on time of day)

#### New conditions

##### `reference`

Includes condition defined in `predicates` directory of datapack, selected with `name` parameter.

#### New functions

##### `copy_state`

Copies state properties from dropped block to `BlockStateTag` in dropped item.

###### Parameters

-   `block` - source of properties (block id)
-   `properties` - list of property names. All must be present on `block`

### Modding

In an effort to help make modding the game easier, we have decided to publish our game obfuscation maps with all future releases of the game. This means that anyone who is interested may deobfuscate the game and find their way around the code without needing to spend a few months figuring out what's what. It is our hope that mod authors and mod framework authors use these files to augment their updating processes that they have today. These mappings will always be available, instantly and immediately as part of every newly released version. This does not, however, change the existing restrictions on what you may or may not do with our game code or assets. The links to the obfuscation mappings are included as part of the version manifest json, and may be automatically pulled for any given version. Prefixed to every obfuscation map is the following legal disclaimer:

> (c) 2019 Microsoft Corporation. All rights reserved. This information is provided "as-is" and you bear the risk of using it. This information does not provide you with any legal rights to any intellectual property in any Microsoft product. You may copy and use this information for your internal, reference purposes. Microsoft makes no warranties, express or implied, with respect to the information provided here.

### Particle Performance

-   Vertically moving particles are performing better when they collide with blocks

### Pistons

#### Bug fix

-   Blocks that can be manually placed on farmland can now also be pushed onto it by a piston without destroying the farmland

### Resource Packs

-   The resource pack version is now 5
-   The game now tries to make out of date resource packs work as much as possible
-   Increased sizelimit for client downloading resource packs from 50MB to 100MB

### State matching

Few advancements and loot table predicates that used block state properties (`location`, `block_state_property`, `enter_block`, `placed_block`) can now match ranges (by replacing single value with `{"min": ..., "max": ...}`). Also, block type is now optional in those predicates - so for example it is not possible to match any crop with `age` property in certain range.

### Textures

-   Changed texture map for all chests
-   Banner and shield patterns are now using alpha channel instead of brightness
-   Ender Dragon does not have separate texture for the bottom of the wing anymore
-   Enchanted item glint texture is now like it looks in the game

#### Command used to change the patterns

-   `for f in *.png; do convert "$f" -alpha copy tmp.png && composite tmp.png -compose copy-opacity ../shield_base.png tmp2.png && convert tmp2.png -fill "rgba(0,1,0,1)" -draw "rectangle 0,0 1,63" -draw "rectangle 2,0 63,1" -draw "rectangle 2,22 64,64" -draw "rectangle 12,2 64,64" -fill none -draw "matte 0,0 floodfill" tmp3.png && mv tmp3.png "$f" && rm tmp.png tmp2.png; done`

---

# Minecraft: Java Edition 1.14

## Features

-   Lots of accessibility improvements!
-   Added Bamboo Blocks into the game
-   Added bamboo jungles in the world
-   Added barrels
-   Added the bell!
-   Added yummy Sweet Berries and pokey Sweet Berry Bushes to the game!
-   Added Blast Furnace
-   Rewrote the book & quill editing to be more intuitive
-   Added campfire
-   Added cartography table
-   Split cats and ocelots to their own creatures and updated cats with new features!
-   Added composter
-   Added Crossbows!
-   Added lots of new decorative blocks!
-   Added Fletching Table
-   Added new dyes and flowers!
-   Added foxes!
-   Added some community suggestions
-   Updated the credits list
-   Added in-game buttons for reporting bugs or giving feedback
-   Improvements to invisibility to allow it to correctly work in many cases where it didn't but you'd expect it to
-   Added grindstone functionality
-   Added 'Hero of the Village' effect
-   Added leather horse armor
-   Added lantern
-   Added lectern
-   Added loom
-   Existing special banner patterns can now be crafted into a new item that is not consumed when used, Banner Patterns
-   Added a new "Globe" banner pattern and item
-   Added lots of new blocks!
-   We're now using the new textures!
-   Added new Noteblock sounds
-   Added pandas!
-   Added illager patrols
-   Added pillagers
-   Added pillager outpost
-   Added raids
-   Added Ravager
-   Added scaffolding
-   Rewrote the sign editing to be more intuitive
-   Added Smithing Table
-   Added smoker
-   Added stonecutter
-   Added suspicious stew - hmmmm!
-   Trading changes
-   Villager changes
-   Biome based architecture for villages
-   Added Wandering Trader

### Accessibility

-   There's a new Accessibility menu which provides a useful place for all of our accessibility features to be toggled
-   When the narrator is turned on, buttons will be narrated on focus
-   Most screens allow tab and shift+tab navigation through buttons, edit boxes and other UI elements
-   Most lists allow up/down arrow keys to navigate through them
-   We've added a new option for turning up the background of all transparent text elements, which should help make them more readable for some people

### Bamboo

They call it exotic. Which is just people talk for awesome. Which it is, which is why we're so happy that we added it to the game.

-   Can be found in Jungles and the two new biomes: bamboo jungle and bamboo jungle hills
-   Can grow to a max height of 12 to 16 blocks
-   When sprinkled with bone meal, bamboo will grow with one or two bamboo blocks on the top
-   When struck with a sword, bamboo will instantly break
-   Two bamboo can be crafted into a single stick
-   Can be used as fuel, with four bamboo required to smelt a single item
-   Bamboo can be placed into flower pots
-   Bamboo can also be found in shipwrecks and jungle temples

### Barrels

_Do a barrel roll!_

-   Store things in them!
-   Rotate them!
-   Find them in villages!

### Bells

_Ding dong, who's there? A RAID? GET INSIDE!!!_

-   Trade with certain villagers to obtain the bell
-   Use the bell to alert villagers of nearby danger
-   A villager will ring the bell to alert other villagers of an impending raid
-   Ringing bells reveals all nearby mobs that can appear in raids

### Berries

-   Delicious!
-   Not very filling!
-   Plant your berries in the ground and look with your special eyes as they grow up into a strong, independent bush!

### Berry Bushes

-   Commonly found in taiga, taiga hills, and taiga mountains
-   Rarely found in snowy taiga and snowy taiga hills and snowy taiga mountains
-   You can stand inside them, but be careful, it will hurt to move
-   Has four stages of growth: sapling, no berries, some berries, full berries
-   Drops one or two berries in younger stage, then two or three in full growth stage
-   Supports bone meal!
-   Doesn't support silk touch!

### Biome based architecture for villages

-   Villages have recieved an updated look, with several new themes
-   The theme depends on the biome the village is in, taking both climate and to available resources into consideration
-   Uses the new mysterious jigsaw block for generation
-   Adds new structure files, quite many actually

### Blast Furnace

-   A new furnace upgrade that allows for smelting ores and melting metals faster than the traditional furnace
-   Can be crafted via three smooth stone, one furnace, and five iron ingots
-   Added to world gen in some villager buildings

### Campfires

Come one, come all, and toast your buns around the campfire!

-   A decorative fireplace without fire spread
-   Cooks up to four foods, but slowly
-   Acts as a smoke signal you can see very (VERY!) far away when a hay bale is below (hint: think note blocks!)
-   Cosy light source
-   Can be lit/unlit

### Cartography Table

-   New functional block that provides an easier and simpler way of cloning, extending, and locking of maps
-   New map functionality with cartography table
    -   Map Locking: allows you to lock maps in the cartography table with a glass pane so that they can no longer be modified
-   Fancy UI to more closely represent what the recipes actually do functionally
-   Crafted with two planks and two paper

### Cat and ocelot split

Anti-fusion!

-   Stray cats can be tamed
-   Tamed cats can give lovely (or less lovely) morning gifts to their owners
-   Ocelots can't be tamed, but might start trusting you if you feed them with fish
-   Phantoms are terribly scared of cats - how convenient!
-   Cat collars can now be dyed
-   Added several new cat skins!

### Community Suggestions

As it turns out, you guys have GREAT suggestions!

-   Leaves now have a small chances to drop sticks
-   Chorus fruit flowers now break when shot by an arrow
-   Dead bushes can now be used as furnace fuel
-   Rabbit stew and beetroot soup have been changed to a shapeless recipe
-   Creepers will now drop records when killed by Stray in addition to skeletons
-   Dispensers with shears in them will now shear sheep that have wool in front of them
-   TNT and TNT minecart explosions now have 100% drop rate

### Composter

-   Instead of eating your veggies you can make fertilizer from it!
-   Crafted with 3 planks and 4 fences

### Crossbows

This is such a fearsome weapon that it makes us quiver!

-   Shoots arrows with base power slightly stronger than the bow, but has less durability
-   Three unique enchantments
-   Fun, challenging advancements
-   New loading mechanics
-   Unique load animation

#### Enchantments

-   Choose between the following three enchantments for your crossbow:

##### Multishot (I)

-   Ever wanted to shoot more than one arrow at once? Look no further! With multishot, your crossbow splits your arrow into three, shooting the usual arrow straight ahead and two more at angles off to the sides!
-   Cannot be combined with piercing

##### Piercing (I, II, III, IV)

-   With this pointy enchantment, arrows shot from your crossbow can travel through mobs, hitting more than one per shot
-   The number of mobs that can be damaged by a single arrow is equal to the level of this enchantment + 1
-   Cannot be combined with multishot

##### Quick Charge (I, II, III)

-   Each level of quick charge decreases the amount of time it takes to fully charge your crossbow by .25 seconds

#### Loading Mechanics

-   To charge the crossbow, hold down the "Use" button
-   Once the crossbow string has been pulled all the way back, let go
-   Boom! Your crossbow is now loaded and ready to shoot with a single click of the "Use" button

### Decorative Blocks

Oh my, a bunch of new blocks!

-   Changed all existing stone slabs to smooth stone slabs (same look, new name!)
-   Changed all existing signs to oak signs (same look, new name!)
-   Made smooth stone slabs craftable from smooth stone
-   Added spruce, birch, jungle, acacia and dark oak signs
-   You can now right click on signs with dyes to change the text colour
-   Added stone stairs and slabs
-   Added granite stairs, slabs and walls
-   Added polished granite stairs and slabs
-   Added diorite stairs, slabs and walls
-   Added polished diorite stairs and slabs
-   Added andesite stairs, slabs and walls
-   Added polished andesite stairs and slabs
-   Added sandstone walls
-   Added smooth red sandstone stairs and slabs
-   Added smooth quartz stairs and slabs
-   Added brick walls
-   Added stone brick walls
-   Added mossy stone brick stairs, slabs and walls
-   Added nether brick walls
-   Added end stone brick stairs, slabs and walls
-   Added prismarine walls
-   Added red sandstone walls
-   Added red nether brick stairs, slabs and walls
-   Added smooth sandstone stairs and slabs
-   Added mossy cobblestone stairs and slabs
-   Made smooth stone obtainable by smelting stone
-   Made smooth sandstone obtainable by smelting sandstone
-   Made smooth red sandstone obtainable by smelting red sandstone
-   Made smooth quartz obtainable by smelting quartz block
-   Changed the recipe of nether brick fence to four brick blocks and two brick items
-   Changed the recipe of signs to require all of the same wood type, not any wood type

### Dyes

We've been dyeing to tell you more about this!

-   Separated bone meal, ink sac, cocoa beans, and lapis lazuli into their own dyes
-   Unified all dye names (red, yellow, and green dyes no longer have special names)
-   Added new recipes to obtain coloured stained glass and coloured carpet

### Fletching Table

-   Crafted with four planks and two flint
-   Villagers use it as a work site

### Flowers

Get your green fingers!

-   To celebrate our new dyes, we added... flowers! Say hello to cornflower, wither rose and lily of the valley
-   Be careful of the wither rose! Don't let its subdued beauty lull you into a false sense of security...

### Fox

What do they say? ...but really, what do they say?

-   Foxes come in two variants: red and snowy
-   Foxes are nocturnal
-   Foxes will hunt rabbits, chickens, and fish
-   Foxes are hunted by wolves and polar bears
-   Foxes are nimble and quick, so sneak up on them carefully!
-   Breed foxes with berries
-   If you breed two foxes, their offspring will trust you forever
-   Trusting foxes will defend you, but will still eat your chickens
-   Foxes like to eat any and every food item they find on the ground
-   You may find a fox exploring a nearby village at night

### Grindstone

-   Moved inventory and crafting table repairing into the grindstone, this will be its new home
-   Has the ability to remove all non-curse enchantments from an item; for each enchant removed some XP is reimbursed

### Hero of the Village

-   Hero of the Village effect causes the cost of trades with villagers to be reduced by a percentage and scales with level of the effect.
-   Hero of the Village additionally causes Villagers to occassionally toss items to you to thank you!

### Horse Leather Armor

-   Added a new armour type for horses
-   Dye it in lots (yes, LOTS!) of different colours

### Illager Patrols

-   Spawn in the world as a pack of five random illagers
-   Spawn in all variations of the Plains, Taiga, Deserts, Savanna
-   Scary-spooky new banner can be found a top the patrol leaders head

### Lantern

Wait, another new block!?

-   The lantern is a new light source
-   The lantern can be placed either hanging under a block or on top of a block
-   It gives slightly more light than the torch

### Lectern

Ermahgerd berks... holder... thingy?

-   Right-click an empty lectern to place book
-   Right-click a lectern with book to open
-   Current page is persistent and shared between all readers
-   Emits redstone pulses when page is changed
-   Use a comparator to get book reading progress

### Loom

Bröther, may I have some lööm?

-   New and easier way of being able to apply patterns to banners, can still only apply six max patterns to a banner
-   Generic patterns now only require one dye in order to create patterns, instead of one to eight (depending on the pattern)
-   Special banner patterns (oxeye daisy, creeper skull, wither skeleton skull, enchanted golden apple) can now be crafted. These patterns don't consume the pattern item when used in the loom
-   Old pattern recipes in the crafting table for apply patterns to banners have been removed

### New blocks

Even more! Can you believe it?!

-   Added barrel
-   Added smoker
-   Added blast furnace
-   Added cartography table
-   Added fletching table
-   Added grindstone
-   Added lectern
-   Added smithing table
-   Added stonecutter
-   Added village bell

### New Textures

The extraordinary Minecraft Texture Update has been available at minecraft.net for quite a while, and now it’s finally available by default in the game

-   We’ve renovated the old textures of Minecraft and polished them for a new beginning
-   If you're feeling nostalgic you can always enable the old "Programmer Art" textures in the resource pack menu

### Noteblock

-   5 new Noteblock sounds have been added: Iron Xylophone, Cow Bell, Didgeridoo, Bit, and Banjo
-   1 previously existing, but unused, sound effect has now been made available: Pling
-   The new Noteblock sounds can be heard by using Iron Blocks, Soul Sand, Pumpkins, Emerald Blocks, Hay Blocks, or Glowstone

### Panda

We bring pandamonium!

-   Pandas come in different types and personalities! There is even a rumour about a brown panda...
-   Pandas love bamboo! They kinda like cake as well
-   Pandas can be bred, and the cubs can inherit traits through a special panda inheritance system
-   Pandas spawn naturally in the new bamboo forest biome
-   Pandas drop bamboo when killed. Don't kill pandas :(
-   Most importantly: pandas are cute and terribly silly!
-   The babies are, in general, even more silly than their parents. Silly panda cubs!

### Pillager

-   A new type of illager that, well, pillages!
-   Pillagers wield a new weapon, the crossbow!

### Pillager Outpost

-   As if finding pillager patrols out in the wild wasn't scary enough, keep an eye out during your explorations and you may just find one of their outposts
-   Can be found in any biome villages generates in
-   Takes advantage of the new mystery block, the jigsaw, for generation

### Raids

-   If you find an illager wearing a banner on its head, be careful not to kill it!
-   If you do kill it, you might find yourself facing a 'Bad Omen'
-   If you find yourself with a bad omen buff, be _especially_ careful not to walk into a village
-   If you do walk into a village with it? Best of luck!

### Ravager

-   A fearsome new foe who packs quite a wallop. Grab your sword and shield and prepare to get knocked around!

### Rewrite of Book & Quill editing

The pen is mightier than the sword. Unless you're fighting a pillager!

-   Movable cursor for free text editing
-   Selection support
-   Copy & paste
-   Keyboard and mouse handling
-   Improved page filling and line wrapping
-   Increased book length (100 pages)

### Rewrite of Sign editing

-   Movable cursor for free text editing
-   Selection support
-   Copy & paste

### Scaffolding

Here to make your life easy! No strings attached.

-   Easily buildable
-   Easily destroyable
-   Easily climbable
-   Easily the best use of your Bamboo

### Smithing Table

-   Crafted with 4 planks + 2 iron ingots
-   Villagers use it as a work site

### Smoker

-   New furnace upgrade that allows for the smelting of foods faster than the traditional furnace
-   Can be crafted via four Logs, and one furnace
-   Added to world gen in some villager buildings

### Stonecutter

-   New functional block that provides a simpler way to craft various stones (stairs, slabs, chiseled, and more)
-   Crafted with three stone + one iron ingot

### Suspicious Stew

Hmmmm...

-   Found in buried ship treasure chests
-   Also craftable!
-   Whoever eats this stew will be imbued with an unknown effect for several seconds!
-   Whoever crafts the stew will know what effect they gave it

### Trading changes

-   Lots of new trades have been added
-   Villagers now level up in a new way
-   The trading UI is updated (WIP)
-   The trading prices now depend on your reputation and on demand
-   The villagers will restock up to two times per day (if they can work at their work station!)
-   Added visual trading; villagers will display the item they want to trade for your in-hand item

### Villager changes

-   Villagers and zombie villagers now have new fancy skins
-   Added mason profession
-   Cured zombie villagers retain their trades
-   Villagers now have a daily schedule. They will for example go to work and meet up at the village bell
-   Each villager will try to find their own bed and work station
-   Each profession has a specific block that works as a work station for them (e.g. lectern for the librarian and cauldron for the leatherworker)
-   Village detection is now based on beds, job sites, and meeting points instead of doors
-   Iron Golems will spawn when enough villagers meet

### Wandering Trader

-   A mysterious trader that can be randomly found around
-   Provides various random trades from a variety of different biomes
-   Is escorted around by a few llama with some sweet new decorations! (Careful! They can be temperamental)

## Technical

-   New optional tag for block items: `BlockStateTag` - contains map of block state properties to be overwritten after block is placed (note: item model is not affected).
-   Creative menu search box now accepts tags (starting with `#`)
-   Tooltip in creative search menu now lists item's tags
-   New item model property `custom_model_data`, backed directly by `CustomModelData` integer NBT field
-   Extended NBT path syntax
-   New sub-commands for NBT manipulation and querying
-   New chat component for displaying values from NBT
-   Textures for potion effects, paintings and particles are now split into individual files. As a side effect, they can now be animated in the same way as blocks and items.
-   Sprites for particles can now be configured in resource packs (though particle still controls how they will be used).
-   Added entity type tags. They work exactly the same as other ones (blocks, items and fluids, etc). Stored in `tags\entity_types\`
-   Added a feature registry
-   Added a registry for decorators
-   Added a registry for carvers
-   Added a registry for surface builders
-   Item lore tag now uses chat component syntax
-   Profiler now lists time spent waiting for next tick (mostly idling or waiting for asynchronous tasks). Previous root is now listed under `tick`
-   Paintings and item frames in item form now support `EntityTag` (same as spawn eggs)
-   Command parser now accepts `'` as string quotes. Inside `'`\-quoted string `"` is handled as normal character and requires no escaping (and vice-versa) - so now it's easier to input text components in NBT
-   New Light engine!
-   `loot` command - evaluates loot commands items in various contexts
-   Block drops are now controlled by loot tables
-   Players, armor stands and wither now have loot tables
-   Performance Improvements
-   Added `schedule` command for delaying execution of functions
-   Time arguments in `time set`, `time add` and `schedule function` can now have units (`t` - ticks, `s` - seconds, `d` - days). Fractions are allowed (for example `0.5d`), but result will be rounded to nearest integer.
-   `teammsg` command - Sends a message to all players on your team.

### Advancements

-   Entity type predicates now accept tags (`#baz`)

#### Damage source predicate

-   Damage source predicate now has option: `is_lightning`

#### Entity equipment predicate

-   Entity predicate now accepts `equipment` field
-   This predicate can contain up to six fields: `head`, `chest`, `legs`, `feet`, `mainhand`, `offhand`
-   If this predicate is non-null, test will fail for entities that have no equipment (i.e. not mobs, players or armor stands)

#### Entity flags predicate

-   Entity predicate now accepts `flags` field
-   Available tests: `is_on_fire`, `is_sneaking`, `is_sprinting`, `is_swimming`, `is_baby`

### Chat components

#### NBT chat component

-   Block variant `{"nbt": <path>, "block":"<coordinates>"}`, where `<coordinates>` field uses same format as `/setblock`
-   Entity variant `{"nbt": <path>, "entity":<selector>}`, where `selector` field uses same format as `/kill`
-   Additionaly, if field `interpret` is present and set to `true`, contents of selected tags will be interpreted as chat components
-   Works same as selector components:
    -   if there are no elements, returns empty string
    -   if there are multiple elements, merges them with `,`

### Commands

-   `type` field in `@` selectors now accepts entity type tags (`type=#foo` and `type=!#bar`)
-   Item frame contents can now be modified with `/replaceitem`

#### `data`

-   `data modify <block or entity> <path> <operation> <source>`
    -   Apply operation to selected fields
    -   Basic operation: `set` - replaces value
    -   List operations: `insert <index> | prepend | append`
    -   Object operations: `merge`
    -   Sources:
        -   `from <block or entity> <path>` - copies value from existing tag
        -   `value <nbt>` - uses NBT literal

#### `execute`

-   `execute if data <block or entity> <path>` (and `execute unless`)
    -   when used as command, return count of matched elements
    -   when used as part of command, continues on non-zero(`if`) or zero(`unless`) count

#### `loot`

General syntax: `loot <target> <source>`

##### Sources

-   `fish <loot table id> <fishing location> [tool <item>|mainhand|offhand]` - uses fishing context
-   `loot <loot table id>` - uses loot chest context (can be also used for advancement awards and cat gifts)
-   `kill <entity selector>` - simulates entity drops
-   `mine <mining location> [tool <item>|mainhand|offhand]` - simulates block drops

##### Targets

-   `spawn <position>` - drops in world
-   `replace` - works similar to `/replaceitem`. If `count` is missing, command will try to place all returned items. If `count` is higher than number of items, remaining slots will be cleared.
    -   `entity <entity selector> <start slot> [<count>]` - replaces range of slots.
    -   `block <position> <start slot> [<count>]` - replaces range of slots.
-   `give <player selector>` - inserts items into player's inventory (similar to `/give`)
-   `insert <position>` - inserts items into container (similar to shift left-click)

#### `schedule`

Schedules function or tag to run in `<time>` gametime ticks. Returns trigger time. Any tag or function can be scheduled only once. Calling this command for already scheduled function or tag will replace older record.

#### `teammsg`

General syntax: `teammsg <message>` Sends `<message>` to all players on the team of the player who runs the command. Available to all players on a team.

##### Alias

-   `tm <message>`

#### NBT paths

-   Can now return multiple values. When used as target, modification will be applied to every element
-   When setting location and no elements are found, new matching element will be created:
    -   For example writing to `Items[{Slot:10b}]` will either found element in `Items` for slot 10 or create new one
-   Add `[{k1:v1,k2:v2}]` to match objects in list that have matching fields
-   Add `{k1:v1,k2:v2}` to match objects (selects 0 or 1 elements, mostly as safeguard against mismatched entries)
    -   _Note:_ this also works with root object: `{}` is valid path for referencing root object
-   Allow negative indices in `[index]` to select element from end (i.e. `[-1]` is last element, `[-2]` second to last, etc)
-   Add `[]` to select all elements from list

### Dedicated server

#### `server.properties`

-   `difficulty` and `gamemode` settings now accept string names (integer values are still allowed as legacy option)
-   Server will exit faster is `eula.txt` is not set

#### Command line

-   Added new option `--help`. Not going to tell you what it does.
-   New command line option `initSettings` initializes `eula.txt` and `server.properties` with defaults, then exits

### Light engine

We are de-lighted to have a new light engine!

-   Moved light storage from chunks to a separate structure
-   Moved light calculation from all over the code to a self-contained place
-   Moved light computation off the main thread (on the server)
-   Added support for directional opacity of blocks (used by slabs, stairs, snow layers, non-full-block dirt-related blocks and extended piston base blocks)
-   Also made enchanting table, end portal frame block and piston base block block light correctly

### Loot tables

**Note:** Some functions and predicates (like `set_name`, `set_lore`, `fill_player_head`, `entity_properties`) accept entity target parameter. Possible values are:

-   Block drops are now controlled by loot tables (stored in `loot_tables/blocks/`)
-   Tables and pools accept functions
-   Added new loot table entry types: `dynamic`, `tag`, `alternatives`, `sequence`, `group`
-   Added new loot table functions: `apply_bonus`, `explosion_decay`, `copy_name`, `limit_count`, `set_contents`, `set_loot_table`, `set_lore`, `fill_player_head`, `copy_nbt`
-   Added new loot table conditions: `survives_explosion`, `block_state_property`, `table_bonus`, `match_tool`, `damage_source_properties`, `location_check`, `weather_check` and two special modifiers: `inverted` and `alternative`
-   Integer values can now specify random number generator (available types: `constant`, `uniform`, `binomial`). If omitted, defaults to uniform
-   Loot tables have optional `type`, used to validate function usage (available types: `empty`, `chest`, `fishing`, `entity`, `advancement_reward`, `block`). Using function that references data not available in given context (for example, block state in fishing table) will cause warning
-   New entity parameter in predicates: `direct_killer` - allows access to projectiles etc.
-   `this` - usually entity performing action
-   `killer_player`
-   `killer` - primary source of damage
-   `direct_killer` - direct source of damage (may be different than `killer` - for example, when killing with bow, `killer` will be bow user, while `direct_killer` will be arrow entity)

#### Modified conditions

##### `entity_properties`

Now uses same predicate syntax as advancements (like `player_killed_entity`). Parameters are now described in `predicate` field. If this field is empty object, any entity is accepted (but still has to be present).

#### Modified functions

##### `set_name`

Added new parameter `entity` (see note about entity target parameter for values). If present, name will be resolved with that entity (allows using selector and score components).

#### New conditions

##### `alternative`

Joins conditions from parameter `terms` with "or" ("disjunction").

##### `block_state_property`

Check properties of block state.

###### Parameters

-   `block` - id of block. Test will fail, if broken block does not match
-   `properties` - map of `property:value` pairs

##### `damage_source_properties`

Checks damage source. Same syntax as `entity_properties`, but uses damage source predicate (see `player_hurt_entity` advancement trigger).

##### `inverted`

Inverts condition from parameter `term`

##### `location_check`

Applies advancement location predicate.

###### Parameters

-   `predicate` - predicate applied to location. Uses same structure as advancements.

##### `match_tool`

Checks tool (available for block breaking and fishing).

###### Parameters

-   `predicate` - predicate applied to item. Uses same structure as advancements.

##### `survives_explosion`

Return true with `1/explosion radius` probability.

##### `table_bonus`

Passes with probability picked from table, indexed by enchantment level.

###### Parameters

-   `enchantment` - id of enchantment
-   `chances` - list of probabilities for enchantment level, indexed from 0

##### `weather_check`

No surprise here.

###### Parameters

-   `raining` - optional boolean
-   `thundering` - optional boolean

#### New entries

##### `alternatives`

Tests conditions of child entries and executes first that can run. Has no weight or quality, but may have conditions.

##### `dynamic`

Gets block specific drops. Currently implemented:

-   `minecraft:contents` - block entity contents, for shulker boxes
-   `minecraft:self` - for banners and player skulls

##### `group`

Executes child entries when own conditions pass. Has no weight or quality.

##### `sequence`

Executes child entries until first one that can't run due to conditions. Has no weight or quality, but may have conditions.

##### `tag`

Adds contents of item tag. Fields:

-   `name` - id of tag
-   `expand` - if false, entry will return all contents of tag, otherwise entry will behave as multiple item entries (all with same weight and quality)

#### New functions

##### `apply_bonus`

Applies one of predefined bonus formulas.

###### Common fields

-   `enchantment` - id for enchantment level used for calculation
-   `formula` - type of used bonus formula
-   `parameters` - values required for formula (depend on type)

###### Formulas (based on existing fortune bonuses):

-   `binomial_with_bonus_count`:
    -   parameters: `extraRounds : int`, `probability : float`
    -   adds random value using binomial distribution with `n <- level + extraRounds` and `p <- probabilty`
-   `uniform_bonus_count`
    -   parameters: `bonusMultiplier`
    -   adds random value using uniform distribution from 0 to `bonusMultiplier * level`
-   `ore_drops`
    -   no parameters
    -   applies formula `count * (max(0, random(0..1) - 1) + 1)`

##### `copy_name`

Copies display name from block entity to item (see enchanting table behaviour)

##### `copy_nbt`

Copies NBT from source to item tags.

###### Parameters

-   `source` - may be `this`, `killer`, `killer_player` or `block_entity`
-   `ops` - list of copy operations:
    -   `source` - source path (same as `/data` commands)
    -   `target` - target path
    -   `op` - `replace`, `append` (for lists), `merge` - for compound tags

##### `explosion_decay`

Applies flat chance (equal to `1/explosion radius`) for every item to be destroyed (items in stack are processed separately)

##### `fill_player_head`

Copies player profile info to player head item.

###### Parameters

-   `entity` - source of profile (see note about entity target parameter for values, will do nothing if it's not player).

##### `limit_count`

Limits count of every item stack to range.

###### Parameters

-   `limit`:
    -   `min` - optional
    -   `max` - optional

##### `set_contents`

Populates `BlockEntityTag.Items` (works for shulker boxes, chests, etc.) with items from entries.

###### Parameters

-   `entries` - list of entries (same as in pool)

##### `set_loot_table`

Sets `BlockEntityTag.LootTable` and `BlockEntityTag.LootPoolSeed` tags.

###### Parameters

-   `name` - id of loot table
-   `seed` - seed (if omitted or 0, `LootPoolSeed` will not be set)

##### `set_lore`

Adds or replaces lore lines.

###### Parameters

-   `lore` - list of lines (in chat component format) to be added
-   `replace` - if true, previous lore is erased
-   `entity` - if present, name will be resolved with selected entity (see note about entity target parameter for values).

### Performance Improvements

-   Improved performance of Redstone Wire when depowering.
-   Improved performance of Fish.
-   Mobs that would spawn and then despawn from being too far away from the player the next tick no longer spawn.

### Refactoring

#### Changes to render options

-   Removed option to turn off VBO in the game settings. VBO are now always used.

### Worldgen

-   Most of the biome related features now have a registry and their configuration can be serialized. I wonder what this is going to be used for...
-   Added "Bamboo Jungle" and "Bamboo Jungle Hills" biomes which behave like a normal jungle, but have bamboo!

---

# Minecraft: Java Edition 1.13 Aquatic

## Aquatic changelog

### General

-   All undead mobs now sink
-   Changed underwater visibility
    -   Your vision will gradually increase the longer you're underwater
-   Overhauled world generation
-   Overhauled command parser
-   Added new world type "Buffet"
    -   Allows you to create worlds with a unique biome
    -   More features will come to the Buffet world type in later updates
-   Added a bunch of new sounds
-   Added three new pieces of music
-   Added underwater ambience sounds
-   Added a swimming animation
    -   Press your sprint key underwater to start swimming
-   Added data packs
    -   Allows you to edit recipes, tags, loot tables, functions, and advancements
-   Added new advancements
-   Some blocks can now be waterlogged
    -   Use a water bucket on a block to surround it with water
-   Added an "Optimize World" button (singleplayer -> edit world -> optimize world), which upgrades an entire world from older version to the latest version in one go

### Blocks

-   Added blue ice
    -   Found in icebergs
-   Added coral blocks
-   Added coral fans
-   Added coral
-   Added conduit
    -   Combine 1 heart of the sea together with 8 nautilus shells to create the conduit
    -   Makes your life underwater a lot easier
-   Added dried kelp block
    -   Combine 9 dried kelp to create a kelp block
-   Added kelp and seagrass
-   Normal pumpkins no longer have a face
-   Added carved pumpkin
    -   Use a shear on a pumpkin to carve it
-   Added sea pickles
-   Added bubble columns
    -   Use either magma blocks or soul sand to create a bubble column
-   Added wood block
    -   Combine 4 logs of any type to create a wood block
-   Added stripped wood
    -   Right click with an axe on either logs or wood to create stripped wood
-   Added prismarine stairs and slabs
-   Added variantes for all 6 types of woods for pressure plates, trapdoors and buttons
-   Added turtle eggs
    -   Be sure to protect them from hostile mobs

### Mobs

-   Added tropical fish
-   Added turtles
    -   A friendly mob that lays eggs on beaches
-   Added dolphins
    -   A neutral mob that will lead you to treasure if you feed it fish
    -   Make sure to not hit them unless you want an entire pod after you
-   Added the Drowned
    -   Hostile mob that can be found naturally in oceans and rivers
    -   Can spawn with tridents
    -   Zombies will convert into Drowned if they're underwater for too long
-   Added Phantoms
    -   Get a good nights sleep if you don't want these coming swooping at you
    -   Drops phantom membrane
-   Added cod, salmon, and pufferfish as mobs
-   Changed the horse model to be more consistent with other mobs
-   Removed Herobrine

### Items

-   Added tridents
    -   The newest weapon in Minecraft
    -   Drops from the Drowned
    -   Works as both a melee and a ranged weapon
-   Added trident enchantments
-   Added the ability to catch fish with buckets
-   Added map markers
    -   Hold a map in your hand and right click on a banner to create a marker
-   Added heart of the sea
    -   Found in buried treasure
-   Added nautilus shells
    -   Drops from Drowned and can be found from fishing
-   Added phantom membrane
    -   Dropped by Phantoms and gives you the ability to repair elytra and used for Potion of Slow Falling
-   Added scutes
    -   Dropped by baby turtles when they grow up
-   Added Potion of the Turtle Master
    -   Gives you Slowness IV and Resistance III
-   Added Potion of Slow Falling
-   Added dried kelp
-   Added spawn eggs for all the new mobs

### Biomes

-   Added multiple ocean biomes
-   Added coral reefs
-   Added underwater caves
-   Added underwater ravines

### Structures

-   Added shipwrecks
-   Added underwater ruins
-   Added icebergs

---

