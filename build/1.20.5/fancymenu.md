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

**Armadillo Scutes**

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

**Transfer Packets**

-   Custom servers can now request that clients connect to another server with a new packet
-   When a client is transferred, it will connect to the target server with a new transfer intent (id 3)
-   By default, servers will not accept incoming transfers and will disconnect the client
-   This can be changed by setting the `accepts-transfers` property to `true` in the `server.properties` file
-   Resource packs are maintained across transfers
-   In the case of a transfer, custom servers can skip authenticating again with a new flag in the clientbound `hello` packet

**Cookie Packets**

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

**Migrated Item Stack Components**

These are item stack components that replace existing functionality that was formerly specified in item NBT. All commands and data definitions will need to be upgraded to use these formats. Items in-world will however be automatically upgraded.

**`minecraft:custom_data`**

-   Can be used for custom data storage on an item
-   When upgrading a world, any non-game data in the item `tag` will be moved into here
-   Format: object with any fields
    -   e.g. `custom_data={some:'data'}`
-   Can be modified with the `set_custom_data` and `copy_custom_data` loot functions

**`minecraft:damage`**

-   The amount of durability removed from an item
-   If removed, the item will not be damageable
-   Replaces `Damage` tag
-   Format: non-negative integer
    -   e.g. `damage=12`
-   For damageable items (with the `max_damage` component), has an implicit default value of: `0`
-   Can be modified with the `set_damage` loot function

**`minecraft:repair_cost`**

-   The additional experience cost required to modify an item in an Anvil
-   Replaces `RepairCost` tag
-   Format: non-negative integer
    -   e.g. `repair_cost=12`
-   If not set, has an implicit default value of: `0`

**`minecraft:unbreakable`**

-   If set, the item will not lose any durability when used
-   Replaces `Unbreakable` boolean tag
-   Format: object with fields
    -   `show_in_tooltip`: boolean (default: `true`)
        -   If `true`, an 'Unbreakable' line will be included in the tooltip
        -   Replaces 3rd bit of `HideFlags` tag
    -   e.g. `unbreakable={}`, `unbreakable={show_in_tooltip:false}`

**`minecraft:enchantments`**

-   Stores a list of enchantments and their levels on an item
-   Replaces `Enchantments` tag
-   Format: object with fields
    -   `levels`: object of enchantment (id string) to level (integer ;;[;;0; 255;;];;)
    -   `show_in_tooltip`: boolean (default: `true`)
        -   If `false`, no enchantments will be shown in the item tooltip
        -   Replaces 1st bit of `HideFlags` tag
    -   e.g. `enchantments={levels:{'minecraft:protection':2},show_in_tooltip:false}`
    -   Alternatively, can be defined as an inline map of enchantment id to level
        -   e.g. `enchantments={sharpness:1}`
-   If not set, has an implicit default value of: `{levels:{}}`
-   Can be modified with the `set_enchantments`, `enchant_randomly`, and `enchant_with_levels` loot functions

**`minecraft:stored_enchantments`**

-   Stores list of enchantments and their levels for an Enchanted Book
-   Unlike `minecraft:enchantments`, the effects provided by enchantments do not apply from this component
-   Replaces `StoredEnchantments` tag on Enchanted Books
-   Format: same as `minecraft:enchantments`
    -   `show_in_tooltip` value replaces 6th bit of `HideFlags` tag
-   On Enchanted Books, has an implicit default value of: `{levels:{}}`

**`minecraft:custom_name`**

-   Custom name override for an item (as set by renaming with an Anvil)
-   Replaces `display.Name` tag
-   Format: JSON chat component string
    -   e.g. `custom_name='{"text": "This item is renamed!", "color": "red"}'`
-   Can be modified with the `set_name` loot function

**`minecraft:lore`**

-   Additional lines to include in an item's tooltip
-   Replaces `display.Lore` tag
-   Format: list of JSON chat component strings (max: 256 entries)
    -   e.g. `lore=['{"text": "The cake is a lie!"}']`
-   If not set, has an implicit default value of: `[]`
-   Can be modified with the `set_lore` loot function

**`minecraft:can_break`**

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

**`minecraft:can_place_on`**

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

**`minecraft:dyed_color`**

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

**`minecraft:attribute_modifiers`**

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
            -   `add_multiplied_base` (was `1`): Adds `amount` ;;*;; base value to the attribute
            -   `add_multiplied_total` (was `2`): Adds `amount` ;;*;; total value (from all previous modifiers) to the attribute
            -   Replaces `Operation` with integer ids
    -   `show_in_tooltip`: boolean (default: `true`)
        -   Replaces 2nd bit of `HideFlags` tag
    -   e.g. `attribute_modifiers={modifiers:[{type:'minecraft:generic.scale',uuid:[1,2,3,4],name:'Big!',amount:1.0,operation:'add_multiplied_base'}]}`
    -   Alternatively, can be defined as a direct list of modifiers
        -   e.g. `attribute_modifiers=[{type:'generic.scale',uuid:[1,2,3,4],name:'Big!',amount:1.0,operation:'add_multiplied_base'}]`
-   If not set, has an implicit default value based on the item type's default attributes (e.g. attack damage for weapons)
-   Can be modified with the `set_attributes` loot function

**`minecraft:charged_projectiles`**

-   Holds all projectiles that have been loaded into a Crossbow
-   If not present, the Crossbow is not charged
-   Replaces `Charged` and `ChargedProjectiles` tags
-   Format: list of item stacks
    -   Cannot store empty/air items
    -   e.g. `charged_projectiles=[{id:'minecraft:arrow'}]`
    -   No longer restricted to 3 entries
-   Can be modified with the `modify_contents` and `set_contents` loot functions

**`minecraft:intangible_projectile`**

-   Marks that a projectile item would be intangible when fired (i.e. can only be picked up by a creative mode player)
-   Only set when items are inside a Crossbow's `charged_projectiles` component
-   Format: empty object
    -   e.g. `intangible_projectile={}`

**`minecraft:bundle_contents`**

-   Holds all items stored inside of a Bundle
-   If removed, items cannot be added to the Bundle
-   Replaces `Items` tag
-   Format: list of item stacks
    -   Cannot store empty/air items
    -   e.g. `bundle_contents=[{id:'minecraft:poisonous_potato'}]`
-   On Bundles, has an implicit default value of: `[]`
-   Can be modified with the `modify_contents` and `set_contents` loot functions

**`minecraft:map_color`**

-   Represents the tint of the decorations on the Filled Map item
-   Replaces `display.MapColor` tag
-   Format: integer, RGB value
    -   e.g. `map_color=16711680`
-   On Filled Maps, has an implicit default value of: `4603950`

**`minecraft:map_decorations`**

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

**`minecraft:map_id`**

-   References the shared map state holding map contents and markers for a Filled Map
-   Replaces `map` tag
-   Format: integer id
    -   e.g. `map_id=1`

**`minecraft:custom_model_data`**

-   Can be used to replace the models of items by selecting for the `minecraft:custom_model_data` property in the item model
-   Replaces `CustomModelData` tag
-   Format: integer value
    -   e.g. `custom_model_data=43`
-   Can be modified with the `set_custom_model_data` loot function

**`minecraft:potion_contents`**

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

**`minecraft:writable_book_content`**

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

**`minecraft:written_book_content`**

-   Holds the contents and metadata of a Written Book
-   Replaces `pages`, `filtered_pages`, `title`, `filtered_title`, `author`, `generation`, and `resolved` tags
-   Format: object with fields
    -   `pages`: list of filtered chat components
        -   Same format as `writable_book_contents` pages, except uses JSON chat component strings which can be formatted
    -   `title`: filtered string (same format as pages)
    -   `author`: string, player name
    -   `generation`: integer ;;[;;0; 3;;];;
        -   The number of times this book has been copied (`0` = original)
    -   `resolved`: boolean
        -   `true` if the chat components in this book have already been resolved (entity selectors, scores substituted)
        -   If `false`, it will be resolved when opened by a player
    -   e.g. `written_book_content={pages:['"Hello world!"'],title:{raw:'"A delightful read"'},author:'Herobrine',generation:1,resolved:true}`
-   Can be modified with the `set_written_book_pages` and `set_book_cover` loot functions

**`minecraft:trim`**

-   Holds the trims applied to an item
    -   Presence of the component is no longer restricted by the `#minecraft:trimmable_armor` item tag (although, this tag is still used for recipes)
-   Replaces `Trim` tag of the same format
-   Format: object with fields
    -   `pattern`: pattern id (or inline pattern)
    -   `material`: material id (or inline material)
    -   `show_in_tooltip`: boolean (default: `true`)
        -   Replaces 8th bit of `HideFlags` tag
    -   e.g. `trim={pattern:'minecraft:silence',material:'minecraft:redstone'}`

**`minecraft:suspicious_stew`**

-   Holds the effects that will be applied when consuming Suspicious Stew
-   Replaces `effects` tag of the same format
-   Format: list of effect objects with fields
    -   `id`: effect id
    -   `duration`: integer, tick count (default: `160`)
    -   e.g. `suspicious_stew=[{id:'minecraft:poison'}]`
-   On Suspicious Stew, has an implicit default value of: `[]`
-   Can be modified with the `set_stew_effect` loot function

**`minecraft:hide_additional_tooltip`**

-   If present, disables 'additional' tooltip part which comes from the item type
-   Replaces 6th bit of `HideFlags` tag
-   Format: empty object
    -   e.g. `hide_additional_tooltip={}`

**`minecraft:debug_stick_state`**

-   Stores the selected block state properties used by a Debug Stick
-   Replaces `DebugProperty` tag
-   Format: map of block id to block property name
    -   e.g. `debug_stick_state={'minecraft:turtle_egg':'eggs','minecraft:furnace':'facing'}`
-   On Debug Stick, has an implicit default value of: `{}`

**`minecraft:entity_data`**

-   Stores unstructured NBT data to apply to an entity when using an item that spawns an entity, such as a Spawn Egg or Armor Stand
-   Replaces previous `EntityTag` tag, with same behavior
-   Format: object with fields
    -   Must contain an `id` field with the entity type
    -   Any additional fields will be merged into the entity when spawned
    -   e.g. `entity_data={id:'minecraft:pig',Health:1.0f}`

**`minecraft:bucket_entity_data`**

-   Stores unstructured NBT data to apply to an entity when placed from a bucket
-   Replaces `NoAI`, `Silent`, `NoGravity`, `Glowing`, `Invulnerable`, `Health`, `Age`, `Variant`, `HuntingCooldown`, and `BucketVariantTag` tags
-   Format: object with fields
    -   Can contain any of the above listed fields, which will be applied to the entity when placed
    -   e.g. `bucket_entity_data={NoAI:1,Age:43}`
-   On bucketed mob items, has an implicit default value of: `{}`

**`minecraft:instrument`**

-   Holds the instrument type used by a Goat Horn
-   Replaces `instrument` tag of same format
-   Format: instrument id
    -   e.g. `instrument='minecraft:ponder_goat_horn'`
-   Can be modified with the `set_instrument` loot function

**`minecraft:recipes`**

-   List of recipes that should be unlocked when using the Knowledge Book item
-   Replaces `Recipes` tag of same format
-   Format: list of recipe ids
    -   e.g. `recipes=['minecraft:acacia_boat','minecraft:anvil']`
-   On Knowledge Book, has an implicit default value of: `[]`

**`minecraft:lodestone_tracker`**

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

**`minecraft:firework_explosion`**

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

**`minecraft:fireworks`**

-   Stores all explosions crafted into a Firework Rocket, as well as flight duration
-   Replaces `Fireworks.Explosions` and `Fireworks.Flight` tags
-   Format: object with fields
    -   `explosions`: list of explosions (max: 256 entries)
        -   Same format as `minecraft:firework_explosion` component
    -   `flight_duration`: unsigned byte, number of gunpowder in this rocket
    -   e.g. `fireworks={explosions:[{shape:'large_ball',colors:[16711680],has_trail:true}],flight_duration:2}`
-   On Firework Rocket, has an implicit default value of: `{explosions:[],flight_duration:1}`
-   Can be modified with the `set_fireworks` loot function

**`minecraft:profile`**

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

**`minecraft:note_block_sound`**

-   Controls the sound played by a Player Head when placed on a Note Block
-   Copied to Player Head block when placed
-   Replaces `BlockEntityTag.note_block_sound` tag
-   Format: sound event id
    -   e.g. `note_block_sound='minecraft:ambient.cave'`

**`minecraft:base_color`**

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

**`minecraft:banner_patterns`**

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

**`minecraft:pot_decorations`**

-   Stores the Sherds applied to each side of a Decorated Pot
-   Copied to Decorated Pot block when placed
-   Replaces `BlockEntityTag.sherds` tag of same format
-   Format: list of sherd item ids
    -   e.g. `['arms_up_pottery_sherd','angler_pottery_sherd','danger_pottery_sherd','shelter_pottery_sherd']`
-   On Decorated Pots, has an implicit default value of: `['minecraft:brick','minecraft:brick','minecraft:brick','minecraft:brick']`

**`minecraft:container`**

-   Holds the contents of container blocks (Chests, Shulker Boxes) in item form
-   Copied into container block when placed
-   Replaces `BlockEn