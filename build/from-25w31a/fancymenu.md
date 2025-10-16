# Minecraft Snapshot 25w31a

Oh, how we have yearned for the shipping room! We're back with our first snapshot release of the season, bringing you a big bundle of features from our third game drop of the year. Test the copper golem and copper chest for a tidier, livelier base, and watch your helper oxidize and turn into a statue, complete with adorable, redstone signal-emitting poses. Build functional decor using the brand-new shelves and try out copper weapons, tools and armor. To top it off, this release also includes copper horse armor and oxidizing lightning rods, in addition to a slew of bug fixes and technical changes.

Happy mining!

## New Features

-   Added Copper Chest
-   Added Copper Golem
-   Added Copper Golem Statue Block
-   Added Copper Equipment
-   Added Shelf

### Copper Chest

-   Copper Chests is a new type of chest that has waxed and oxidized variants
-   Copper Chests oxidizes over time and can be waxed like other Copper blocks
-   Copper Chests can be crafted using a Chest and Copper Ingots

### Copper Golem

-   Copper Golem is a new mob which can be spawned by placing a Jack o'Lantern or Carved Pumpkin on top of a Copper block
-   Copper Golem oxidize over time and can be waxed like Copper blocks
-   If the Copper Golem has fully oxidized and is not waxed it will turn into a Copper Golem Statue Block
    -   When turned into a Copper Golem Statue the Copper Golem will drop any item it may be holding
    -   A Copper Golem turned into a Copper Golem Statue will keep its name if named with a Name Tag
-   Copper Golem can help with sorting items into Chests
-   Interacting with the Copper Golem with an empty hand will make it drop its carried item

#### Copper Golem Item Sorting

-   If the Copper Golem is not holding an item, it will look for nearby Copper Chests to try to pick up an item
    -   The Copper Golem will look in any oxidized and waxed Copper Chest variant to pick up items
    -   It can pick up at most 16 items in a stack at a time
    -   Any item in a Copper Chest can be picked up
-   If the Copper Golem is holding an item, it will look for nearby Chests to try to place the item in
    -   The Copper Golem will look in Chests and Trapped Chests to try to place items
    -   It can place an item in a Chest if it's empty, or if it contains the same type of item that it is holding in its hand
-   The Copper Golem will visit at most 10 Chests or Copper Chests in sequence to try to pick up or place an item
-   If no matching chest is found the Copper Golem will idle for 7 seconds before trying again
-   The search area for chests from the Copper Golem's position is horizontally 32 blocks and vertically 8 blocks

### Copper Golem Statue Block

-   The Copper Golem Statue Block is a new type of decorative block which has waxed and oxidized variants
-   The Copper Golem Statue Block oxidizes over time and can be waxed like Copper blocks
-   The pose of the block can be changed by interacting with it
-   If the Copper Golem Statue Block has no oxidation when interacted with using an Axe the block will turn into a Copper Golem
-   Each pose emits a Redstone comparator signal

### Lightning Rod

-   Lightning Rods now oxidize like other Copper Blocks and the Lightning Rod on the Copper Golem

### Copper Equipment

-   Added Copper Nugget
-   Added Copper armor
    -   Added Copper Helmet, Copper Chestplate, Copper Leggings and Copper Boots
    -   Copper armor has higher durability than leather and gold
    -   Copper armor has slightly less enchantability than iron
-   Added Copper tools and weapons
    -   Added Copper Axe, Copper Hoe, Copper Pickaxe, Copper Shovel and Copper Sword
    -   Copper tools and weapons do the same amount of damage as stone, but have higher durability
    -   Copper tools work faster and last longer than stone
    -   Copper tools have higher enchantability than diamond, but slightly less than iron
-   Copper equipment can be crafted using Copper Ingots
-   Copper equipment can be repaired with Copper Ingots
-   Copper equipment turns into a Copper Nugget when smelted
-   Added Copper Horse Armor
    -   Has the same loot table and chance of generating as Iron Horse Armor
    -   Armor toughness: 4

### Shelf

-   The Shelf is a new type of decorative block which comes in the following variants:
    -   Oak
    -   Spruce
    -   Birch
    -   Jungle
    -   Acacia
    -   Dark Oak
    -   Mangrove
    -   Cherry
    -   Pale Oak
    -   Bamboo
    -   Crimson
    -   Warped
-   The Shelf can be crafted from six matching blocks of any Stripped Log, Stripped Stem or Block of Stripped Bamboo, filling the top and bottom row
    -   This recipe produces 6 Shelves
-   The Shelf can store up to 3 item stacks:
    -   Interacting with any of the 3 slots on its front swaps the player's main hand item with the content of that slot
    -   The Shelf displays all items it contains in front of it, similar to an Item Frame
-   While a Shelf is powered by Redstone, its front texture changes to reflect that it's powered; when placed next to each other, up to 3 powered Shelves will connect
    -   Interacting with a single powered Shelf swaps all its contents with the 3 rightmost items in the player's hotbar
    -   Interacting with two connected Shelves swaps their contents with the 6 rightmost items in the player's hotbar
    -   Interacting with three connected Shelves swaps their contents with all items in the player's hotbar
    -   It does not matter which of the connected Shelves the player interacts with

### Accessibility

-   The "Attack/Destroy" and "Use Item/Place Block" keybinds are now toggleable, meaning they can be set to either "Hold" or "Toggle" in the Controls screen
-   Added "Invert Mouse X" option to the Mouse Settings screen, which inverts the mouse x-axis
-   Added "Sprint Window" option to the Controls screen, which represents the time window in ticks where double-tapping the forward key activates sprint

## Changes

-   Monster Spawn Eggs now have a tooltip warning when the difficulty is set to Peaceful
    -   The mob no longer spawns for one tick when an attempt is made to use the Spawn Egg
-   The debug screen was reworked to be less cluttered and more configurable
-   Changes to world loading and the "Spawn Chunks"
-   A dimension that has any player activity, forceloaded chunks, active portals, or Ender Pearls in flight will be considered "active" and will keep processing chunks and entities
    -   Previously, this would only apply if a player was in the dimension or a chunk was forceloaded

### World Loading and Spawn Chunks

-   The concept of fixed "Spawn Chunks" has been removed
-   The game will ensure that the following chunks are fully loaded before the player joins or the server starts, in the same way as spawn chunks formerly were:
    -   Chunks loaded by the `forceload` command
    -   Chunks active due to portal activity
    -   Ender Pearls thrown in Singleplayer (Singleplayer only)
    -   The small area of chunks around the player (Singleplayer only)
    -   Chunks required to assign the global world spawn (World creation only)
-   The world loading screen now shows the chunks that the player is about to be placed into, rather than chunks loaded around world spawn
-   The loading screen additionally now includes a progress bar
    -   This progress bar accounts for all kinds of chunk loading as mentioned above

> **Developer’s Note:** _Spawn chunks incur a memory and performance cost for all players and have outlived their initial technical purpose of keeping the spawn area ready for players to quickly join into._

> _However, we also want to recognise that spawn chunks have enabled a multitude of clever contraptions and farms throughout the years, so simply removing them without having other mechanics in the game enable these designs was never an option._

> _We believe that the niche held by spawn chunks has now been filled by alternative methods of chunk loading, such as using portals or ender pearls, particularly with the changes in this snapshot to how the game loads these chunks before the world starts ticking._

### Sounds

-   Happy ghast is now audible from 64 blocks
-   Sounds for chests now plays at a lower volume
-   The volume at which a sound is played at now respects the sound source volume value
-   The "Voice/Speech" sound source has been rephrased to "Narrator/Voice"

### UI

#### Debug Screen

-   The debug screen is accessible by pressing F3, as before
-   It can now be accessed from everywhere in the game, not only when in a game world
-   It now displays less information by default
-   Added a new Debug Options screen which can be opened by pressing F3 + F5
    -   It can be used to configure which debug information should be displayed
    -   For each item you can choose if it should be turned off, visible when the debug screen (F3) is open, or it should always be visible, even when the debug screen is closed
    -   Some debug features that were previously available, like chunk border rendering or entity hitbox rendering, can now be toggled through this debug options screen
    -   Some debug features that were not previously available to the community, like Octree visualization, are now accessible through the debug options screen
    -   The state of the debug options screen is saved between the launches of the game
    -   The debug options screen has the following preset profiles:
        -   `Default` resets everything to the default state
        -   `Performance` shows simple performance metrics, including the FPS meter always visible on screen

> **Developer's Note**: _Previously the information gathering every frame to render the F3 screen had a significant performance cost. So opening the screen to check you FPS noticably dropped the FPS. Now checking your FPS in `Performance` profile should not affect game performance._

### Accessibility

-   A button leading to the Controls screen has been added to the Accessibility Settings screen
    
    -   The "Auto-Jump" option, as well as the "Sneak" and "Sprint" toggles have been removed from the Accessibility Settings screen
-   The "Show Subtitles" option has been rephrased to "Closed Captions" to more accurately describe what it does
    
-   Dye Colors now have updated icons
    
    -   The goal with these is to enhance visual cohesion across the dye set while maintaining distinct shapes to support colorblind accessibility

### Performance Improvements

-   Entity rendering order was improved for significantly better performance
    -   You’ll notice much smoother gameplay in areas with lots of mobs, like mob farms
    -   FPS won’t improve much if most of your lag comes from things other than entities, like playing with high render distance while not being near many mobs

> **Developer's Note**: _This change is quite big, and we would not be surprised if we introduced some ordering issues with this. For example, some part of some mob rendering too early or too late and is not visible or is visually broken. Please play around with this and report the bugs you encounter!_

## Technical Changes

-   Pack versions now have minor versions
-   The Data Pack version is now 82.0
-   The Resource Pack version is now 65.0

### Pack Formats

-   The pack versions for data packs and resource packs now have minor versions
    -   A minor version increment of the game's pack version is backwards-compatible, meaning all packs made for previous iterations of the same major version will keep working
-   Packs can set compatibility requirements on minor versions in case they rely on resources introduced in a minor version

#### Pack Metadata

The pack.mcmeta format has been updated:

-   The `supported_formats` field has been removed
    -   If your pack declares support for a pack version with the previous format (data pack < 82, resource pack < 65), it is still required
    -   Otherwise, it is not allowed and must be removed
-   The `pack_format` field is now optional
    -   If your pack declares support for a pack version with the previous format (data pack < 82, resource pack < 65), it is still required
-   Added required field `min_format` - specifies the minimum version supported
    -   A full version is specified as a list of two integers, e.g `[74, 1]`
    -   Specifying a single integer is interpreted as that major version, e.g. `74` is the same thing as `[74, 0]`
    -   Specifying a list of a single integer is interpreted the same as specifying that integer alone
-   Added required field `max_format` - specified the maximum version supported
    -   A full version is specified as a list of two integers, e.g `[74, 1]`
    -   Specifying a single integer is interpreted as any minor version, i.e. the minor version is `0x7fffffff`
    -   Specifying a list of a single integer is interpreted the same as specifying that integer alone
-   For overlay entries:
    -   The `formats` field has been removed
        -   If your pack includes any overlay range that includes a pack version with the previous format (data pack < 82, resource pack < 65), it is still required for all overlay definitions
        -   Otherwise, it is not allowed and must be removed
    -   Added required field `min_format` and `max_format` with the same formats the fields above with the same name for the `pack` section

## Data Pack Version 82.0

### Commands

-   The `summon` command now fails when trying to summon monsters while the difficulty is set to Peaceful

### Game Rules

-   Removed `spawnChunkRadius` game rule

### Data Components

#### `blocks_attacks` Item Component

-   If the damage reduced in an attack is `0`, for example by `angle` threshold not matching, the item can no longer get disabled in the attack, nor cause knockback due to blocking

### Loot Tables

-   Added `minecraft:entity_interact` loot table type which takes the following parameters:
    -   `target_entity`, the entity being interacted with
    -   `interacting_entity`, the optional entity that is interacting with the `target_entity`
    -   `tool`, the tool used to interact with `target_entity`
-   Added `minecraft:block_interact` loot table type which takes the following parameters:
    -   `block_state`, the block state of the block entity being interacted with
    -   `block_entity`, the optional block entity being interacted with
    -   `interacting_entity`, the optional entity that is interacting with the `block_state`
    -   `tool`, the optional tool used to interact with `block_state`
-   Fields that specify a target entity in a loot table, such as `entity_properties.entity`, can additionally target the `target_entity` and `interacting_entity` parameter types
-   Added `charged_creeper/root` loot table for drops when an entity is killed by a Charged Creeper
    -   This loot table dispatches on the mob that was killed, to the following loot tables:
        -   `charged_creeper/piglin`
        -   `charged_creeper/creeper`
        -   `charged_creeper/skeleton`
        -   `charged_creeper/wither_skeleton`
        -   `charged_creeper/zombie`
    -   Once any mob killed drops an item from this loot table, other mobs killed by the same Creeper will not drop from this loot table
-   Added `brush/armadillo` loot table for drops when an Armadillo is brushed
-   Added `gameplay/turtle_grow` loot table for drops when a Turtle grows into an adult
-   Added `harvest/beehive` loot table for drops when a Beehive or Bee Nest is harvested using Shears
-   Added `harvest/cave_vine` loot table for drops when a Cave Vine with Glowberries is harvested by interacting with it
-   Added `carve/pumpkin` loot table for drops when a Pumpkin is carved using Shears

### World Generation

-   The `initial_density_without_jaggedness` field in `noise_settings` definitions has been replaced with a `preliminary_surface_level` field
    -   `initial_density_without_jaggedness` was a 3D density function that was used to determine an approximate surface level by scanning for the first point with a density greater than `0.390625`
    -   `preliminary_surface_level` is a 2D density function that should produce the y-level of the approximate surface
    -   The `minecraft:find_top_surface` density function can be used to replicate the previous scanning

#### Density Functions

##### Added `minecraft:find_top_surface`

-   Approximates the topmost surface of a given density function
-   It scans from an upper bound to a lower bound to find the point at which the density changes from negative to positive
    -   The upper bound should be as close to the actual surface for best performance
    -   The upper bound should never be lower than the actual surface

Fields:

-   `density` - density function to approximate the surface of
-   `upper_bound` - 2D density function providing the highest possible y-value
-   `lower_bound` - integer, lowest possible y-value
-   `cell_height` - positive integer defining the grid resolution on which to scan

##### Added `minecraft:invert`

-   Resolves to `1/argument`

Fields:

-   `argument` - density function

#### Jigsaw Structures

-   The `max_distance_from_center` field may now specify a different restriction on the vertical axis from horizontal
    -   This can be specified by an object with fields:
        -   `horizontal` - required integer between `1` and `128`
        -   `vertical` - optional integer between `1` and `4096` (default: `4096`)
        -   e.g: `"max_distance_from_center": { "horizontal": 20, "vertical": 500 }`
    -   The previous format of a single inline value specifying both horizontal and vertical distance is still supported

### Tags

#### Block Tags

-   Added `#copper_chests` - all Copper Chest blocks
-   Added `#copper` - all Copper blocks
-   Added `#incorrect_for_copper_tool` - all blocks which will not drop items with a copper tool
-   Added `#copper_golem_statues` - all Copper Golem Statue blocks

#### Item Tags

-   Added `#copper_chests` - all Copper Chest block items
-   Added `#copper` - all Copper block items
-   Added `#copper_tool_materials` - all copper tool materials
-   Added `#repairs_copper_armor` - all items which repair copper armor
-   Added `#copper_golem_statues` - all Copper Golem Statue block items

## Resource Pack Version 65.0

### Block Sprites

-   Added new block sprites:
    -   `copper`
    -   `copper_left`
    -   `copper_right`
    -   `exposed_copper`
    -   `exposed_copper_left`
    -   `exposed_copper_right`
    -   `weathered_copper`
    -   `weathered_copper_left`
    -   `weathered_copper_right`
    -   `oxidized_copper`
    -   `oxidized_copper_left`
    -   `oxidized_copper_right`
    -   `acacia_shelf`
    -   `bamboo_shelf`
    -   `birch_shelf`
    -   `cherry_shelf`
    -   `crimson_shelf`
    -   `dark_oak_shelf`
    -   `jungle_shelf`
    -   `mangrove_shelf`
    -   `oak_shelf`
    -   `pale_oak_shelf`
    -   `spruce_shelf`
    -   `warped_shelf`

### Entity Sprites

-   Added new entity sprites:
    -   `copper_golem`
    -   `exposed_copper_golem`
    -   `weathered_copper_golem`
    -   `oxidized_copper_golem`
    -   `copper_golem_eyes`
    -   `exposed_copper_golem_eyes`
    -   `weathered_copper_golem_eyes`
    -   `oxidized_copper_golem_eyes`

### Item Sprites

-   Added new item sprites:
    -   `copper_axe`
    -   `copper_boots`
    -   `copper_chestplate`
    -   `copper_golem_spawn_egg`
    -   `copper_helmet`
    -   `copper_hoe`
    -   `copper_leggings`
    -   `copper_nugget`
    -   `copper_pickaxe`
    -   `copper_shovel`
    -   `copper_sword`

#### Sound Events

-   Added new sound events:
    -   `block.copper_chest.open`
    -   `block.copper_chest.close`
    -   `block.copper_chest_weathered.open`
    -   `block.copper_chest_weathered.close`
    -   `block.copper_chest_oxidized.open`
    -   `block.copper_chest_oxidized.close`
    -   `entity.copper_golem.step`
    -   `entity.copper_golem.hurt`
    -   `entity.copper_golem.death`
    -   `entity.copper_golem.spin`
    -   `entity.copper_golem_weathered.step`
    -   `entity.copper_golem_weathered.hurt`
    -   `entity.copper_golem_weathered.death`
    -   `entity.copper_golem_weathered.spin`
    -   `entity.copper_golem_oxidized.step`
    -   `entity.copper_golem_oxidized.hurt`
    -   `entity.copper_golem_oxidized.death`
    -   `entity.copper_golem_oxidized.spin`
    -   `item.armor.equip_copper`
    -   `entity.copper_golem.spawn`
    -   `entity.copper_golem.no_item_get`
    -   `entity.copper_golem.no_item_not_get`
    -   `entity.copper_golem.item_drop`
    -   `entity.copper_golem.item_no_drop`
    -   `entity.copper_golem_become_statue`
    -   `block.copper_golem_statue.break`
    -   `block.copper_golem_statue.place`
    -   `block.copper_golem_statue.hit`
    -   `block.copper_golem_statue.fall`
    -   `block.copper_golem_statue.step`
    -   `block.shelf.activate`
    -   `block.shelf.deactivate`
    -   `block.shelf.multi_swap`
    -   `block.shelf.place_item`
    -   `block.shelf.single_swap`

### Shaders & Post-process Effects

> **Developer's Note**: _Although it is possible in Resource Packs, overriding Core Shaders is considered as unsupported and not an intended Resource Pack feature. These shaders exist as part of the internal implementation of the game, and as such, may change at any time as the game's internals evolve. We understand that overriding Core Shaders is used for very cool Resource Pack features, many of which lack supported alternatives. We would like to provide better, supported alternatives in the future._

#### Changes to Full Screen Passes

-   The following vertex shaders have been removed, and replaced by `core/screenquad.vsh`:
    -   `core/blit_screen.vsh`
    -   `post/blit.vsh`
    -   `post/blur.vsh`
    -   `post/invert.vsh`
    -   `post/sobel.vsh`
    -   `post/screenquad.vsh`
-   Vertex shaders for post-processing effects, as well as lightmap generation and full screen blits are no longer are passed the `Position` attribute, and instead must assign vertex coordinates by `gl_VertexID`
-   These passes furthermore are only executed with 3 vertices, instead of a full quad

## Fixed bugs in 25w31a

-   [MC-46634](https://bugs.mojang.com/browse/MC-46634) Thunder volume is not affected by weather volume settings
-   [MC-73881](https://bugs.mojang.com/browse/MC-73881) Summoning monsters in peaceful difficulty spawns monster for 1 tick
-   [MC-89142](https://bugs.mojang.com/browse/MC-89142) Changing jump key to "Enter" let player jump after completing chat line
-   [MC-94610](https://bugs.mojang.com/browse/MC-94610) Missing loot table entries for mob heads from charged creepers
-   [MC-98200](https://bugs.mojang.com/browse/MC-98200) All sound sliders except master are ignored by high-volume /playsound
-   [MC-183776](https://bugs.mojang.com/browse/MC-183776) After switching game modes using F3+F4, you need to press F3 twice to toggle the debug screen
-   [MC-192907](https://bugs.mojang.com/browse/MC-192907) The F3 debug menu cannot be toggled while chat is open
-   [MC-196443](https://bugs.mojang.com/browse/MC-196443) When reducedDebugInfo is true, hitting F3+B and F3+G would still tell the player in chat that they are being toggled, despite nothing happening
-   [MC-197247](https://bugs.mojang.com/browse/MC-197247) Using F3+D to clear pending lines keeps the previous delay for a new message
-   [MC-203401](https://bugs.mojang.com/browse/MC-203401) Double-tapping forward button to sprint cannot be disabled/reconfigured
-   [MC-220842](https://bugs.mojang.com/browse/MC-220842) Opening game mode switcher while spectating a mob with shader effect toggles the effect
-   [MC-234479](https://bugs.mojang.com/browse/MC-234479) You can invite the same player multiple times to your realm even if they've already received an invitation or have already joined it
-   [MC-235780](https://bugs.mojang.com/browse/MC-235780) The beacon GUI incorrectly displays the "Beacon" tooltip when the mouse cursor is held over the "Done" or "Cancel" buttons
-   [MC-237016](https://bugs.mojang.com/browse/MC-237016) The chat delay function continues to print messages despite the game being paused
-   [MC-237843](https://bugs.mojang.com/browse/MC-237843) Players can be idle kicked whilst viewing the end credits
-   [MC-259692](https://bugs.mojang.com/browse/MC-259692) Sneaking and sprinting states are activated or toggled unexpectedly when releasing their input keys while an interface was just previously closed
-   [MC-259935](https://bugs.mojang.com/browse/MC-259935) It can snow even when biome precipitation is set to NONE
-   [MC-260822](https://bugs.mojang.com/browse/MC-260822) The "Done" and "Cancel" buttons within the beacon GUI no longer display tooltips when the mouse cursor is held over them
-   [MC-261387](https://bugs.mojang.com/browse/MC-261387) Redundant block;;_;;predicate;;_;;filter check in mangrove tree placement
-   [MC-262000](https://bugs.mojang.com/browse/MC-262000) Unused texture: misc/white.png
-   [MC-263597](https://bugs.mojang.com/browse/MC-263597) The ender dragon's respawning noise cannot be turned down by the Hostile Mobs volume slider
-   [MC-269838](https://bugs.mojang.com/browse/MC-269838) Pumpkin seeds drop from sheared pumpkins is hardcoded
-   [MC-269839](https://bugs.mojang.com/browse/MC-269839) Honeycomb drop from sheared bee nests and beehives is hardcoded
-   [MC-270918](https://bugs.mojang.com/browse/MC-270918) Loot tables for mob heads are missing copy;;_;;components loot function for custom;;_;;name
-   [MC-275244](https://bugs.mojang.com/browse/MC-275244) Setting "width;;_;;smoothness" in file configured;;_;;carver to 0 causes the game to freeze or crash
-   [MC-275432](https://bugs.mojang.com/browse/MC-275432) Subtitles are difficult to see within screens
-   [MC-276568](https://bugs.mojang.com/browse/MC-276568) Mipmapped versions of the armor trims atlas are generated
-   [MC-276629](https://bugs.mojang.com/browse/MC-276629) Glow berries drop from cave vines appears to be hardcoded
-   [MC-276759](https://bugs.mojang.com/browse/MC-276759) Scute drop from brushing armadillos is hardcoded
-   [MC-277447](https://bugs.mojang.com/browse/MC-277447) Minecraft generates mipmapped textures for chests, but does not use them
-   [MC-277450](https://bugs.mojang.com/browse/MC-277450) Minecraft generates mipmapped textures for shulker boxes, but does not use them
-   [MC-277470](https://bugs.mojang.com/browse/MC-277470) Minecraft generates mipmapped textures for beds, but does not use them
-   [MC-277471](https://bugs.mojang.com/browse/MC-277471) Minecraft generates mipmapped textures for signs, but does not use them
-   [MC-277473](https://bugs.mojang.com/browse/MC-277473) Minecraft generates mipmapped textures for decorated pots, but does not use them
-   [MC-277481](https://bugs.mojang.com/browse/MC-277481) Minecraft generates mipmapped textures for banners, but does not use them
-   [MC-277483](https://bugs.mojang.com/browse/MC-277483) Minecraft generates mipmapped textures for shields, but does not use them
-   [MC-277770](https://bugs.mojang.com/browse/MC-277770) Processor type block;;_;;age always modifies slabs property "type" to bottom
-   [MC-278965](https://bugs.mojang.com/browse/MC-278965) Cherry Grove is not part of the #stronghold;;_;;biased;;_;;to tag
-   [MC-279793](https://bugs.mojang.com/browse/MC-279793) Mounting horses, donkeys, mules, zombie horses, skeleton horses, and camels no longer forces you to face forward
-   [MC-289348](https://bugs.mojang.com/browse/MC-289348) Ender pearls stop loading chunks in The End after relog, if there are no players in that dimension
-   [MC-297593](https://bugs.mojang.com/browse/MC-297593) Cauldrons now apply the effect of the substance they're filled with when contacted from the underside
-   [MC-298274](https://bugs.mojang.com/browse/MC-298274) Certain invalid commands give "see below for error" with no additional information
-   [MC-298732](https://bugs.mojang.com/browse/MC-298732) The cursor is no longer shown at the end of lines that aren't the final one
-   [MC-298805](https://bugs.mojang.com/browse/MC-298805) Axes disable shields even when the shield does not block the attack
-   [MC-298883](https://bugs.mojang.com/browse/MC-298883) The active world slot is not highlighted when selected via TAB navigation in Realms
-   [MC-299450](https://bugs.mojang.com/browse/MC-299450) You can no longer double-click to select characters in the book and quill interface
-   [MC-299451](https://bugs.mojang.com/browse/MC-299451) Pages in book and quills are no longer automatically focused when switching pages
-   [MC-299566](https://bugs.mojang.com/browse/MC-299566) The cursor in the book and quill interface is positioned too far to the left
-   [MC-299628](https://bugs.mojang.com/browse/MC-299628) Mounted players/mobs trigger sculk sensors on world load
-   [MC-299782](https://bugs.mojang.com/browse/MC-299782) Zombie villagers saved in jigsaw structures forget their biome variant and profession upon world generation
-   [MC-299896](https://bugs.mojang.com/browse/MC-299896) You can switch the worlds of expired realms to empty slots, which misleadingly prompts world creation despite no active realms subscription
-   [MC-300021](https://bugs.mojang.com/browse/MC-300021) Some elements of the villager interface are now rendered above the cursor item

---

Summer is finally here in Stockholm on this fine Snapshot Tuesday - but it seems some of our developers missed those beautiful, gray, rainy skies far too much and absolutely insisted on giving the clouds in Minecraft a new look. What a de-light!

## New Features

-   Updated the pattern of clouds in the sky
-   Horses, Donkeys, and Mules can now be fed carrots to heal, grow, and improve their temper

### Music and Sound

-   Added a new sound for when a Lead snaps
-   Added new custom sounds for shearing Saddles, Horse Armor, and Carpets from Llamas

## Technical Changes

-   The Data Pack version is now 78
-   The Resource Pack version is now 62

## Data Pack Version 78

### Dialogs

-   `run_command` click actions will now correctly close dialogs and book screens even if the command does not require elevated permissions
-   Dialogs should now correctly return to the previous non-dialog screen on close in all cases
-   If a new dialog is received by the client while warning screen is visible, it will not replace it, but when user clicks the "Back" button, the new dialog will be restored instead
-   The sizes of elements in dialogs are now restricted:
    -   buttons - between `1` and `1024` (inclusive)
    -   `minecraft:plain_message` dialog body - between `1` and `1024` (inclusive)
    -   `minecraft:item` dialog body
        -   `width` of `description` - between `1` and `1024` (inclusive)
        -   `width` - between `1` and `256` (inclusive)
        -   `height` - between `1` and `256` (inclusive)
    -   `minecraft:text` input control - between `1` and `1024` (inclusive)
    -   `minecraft:single_option` input control - between `1` and `1024` (inclusive)
    -   `minecraft:number_range` input control - between `1` and `1024` (inclusive)

#### `minecraft:text` Input Control

-   `max_length` - maximum length of input, positive integer with default of 32
-   `multiline` - if present, allows users to input multiple lines, optional object with fields:
    -   `max_lines` - if present, limits maximum lines, optional positive integer
    -   `height` - height of input, optional integer in range `1` to `512`
        -   If this field is omitted, but `max_lines` is present, the height will be chosen to fit the maximum number of lines
        -   If this and `max_lines` are both omitted, it will default to a height that fits 4 lines

#### `minecraft:number_range` Input Control

-   The `steps` field has been replaced with a new field:
    -   `step` - step size, optional positive float
        -   If present, only values of `initial + <any integer> * step` will be allowed
        -   If absent, any value from range the is allowed
-   `initial` - if not specified, now defaults to the middle of the range

#### `minecraft:multi_action_input_form` Dialog Type

-   Added new field `columns` - positive integer describing number of columns, default: `2`

## Resource Pack Version 62

### Sounds

-   Added `entity/leashknot/break` for when a Lead snaps
-   The following sounds have been renamed:
    -   `entity/leashknot/break1` -> `entity/leashknot/unleash1`
    -   `entity/leashknot/break2` -> `entity/leashknot/unleash2`
    -   `entity/leashknot/break3` -> `entity/leashknot/unleash3`
    -   `entity/leashknot/place1` -> `entity/leashknot/leash1`
    -   `entity/leashknot/place2` -> `entity/leashknot/leash2`
    -   `entity/leashknot/place3` -> `entity/leashknot/leash3`
-   The following sounds have been added for shearing Saddles, Horse Armor, and Carpets from Llamas
    -   `mob/horse/armor_unequip`
    -   `mob/horse/saddle_unequip`
    -   `mob/llama/unequip`

## Fixed bugs in 25w21a

-   [MC-36696](https://bugs.mojang.com/browse/MC-36696) Clicking on the statistics button on the menu screen advances the game by 1 tick
-   [MC-112730](https://bugs.mojang.com/browse/MC-112730) Beacon beam and structure block render twice per frame
-   [MC-236464](https://bugs.mojang.com/browse/MC-236464) Beacon beams emitted from below the player are invisible after reloading chunks
-   [MC-258336](https://bugs.mojang.com/browse/MC-258336) Frost Walker causes frequent visual corruption near chunk borders on Threaded and Semi-Blocking Chunk Builder
-   [MC-296337](https://bugs.mojang.com/browse/MC-296337) Minecarts cause memory usage increases and crashes
-   [MC-297264](https://bugs.mojang.com/browse/MC-297264) Cat breeds are not seed based anymore
-   [MC-297336](https://bugs.mojang.com/browse/MC-297336) Experience orbs from thrown bottles o' enchanting are very prone to getting stuck inside blocks when thrown against a corner
-   [MC-297615](https://bugs.mojang.com/browse/MC-297615) Untranslatable error message when trying to join a closed Realm
-   [MC-297803](https://bugs.mojang.com/browse/MC-297803) The string "menu.custom;;_;;screen;;_;;info.contents" misspells "personal" as "pesonal"
-   [MC-297806](https://bugs.mojang.com/browse/MC-297806) music.game.swamp.labyrinthine misspells the song's title
-   [MC-297808](https://bugs.mojang.com/browse/MC-297808) music.game.oxygene is missing the grave accent sign
-   [MC-297812](https://bugs.mojang.com/browse/MC-297812) Bold text is rendered differently than in previous versions
-   [MC-297813](https://bugs.mojang.com/browse/MC-297813) Amos Roddy is not listed in the credits
-   [MC-297823](https://bugs.mojang.com/browse/MC-297823) music.game.mice;;_;;on;;_;;venus is using wrong capitalization
-   [MC-297845](https://bugs.mojang.com/browse/MC-297845) Clicking the Statistics button in Singleplayer does not play the button click sound until you resume playing
-   [MC-297846](https://bugs.mojang.com/browse/MC-297846) The music toast flashes in the pause menu when the Music slider is set to zero
-   [MC-297875](https://bugs.mojang.com/browse/MC-297875) Text shadow from underlined text overlaps the text below it in chat messages
-   [MC-297888](https://bugs.mojang.com/browse/MC-297888) Text no longer renders in a consistent order across different fonts
-   [MC-297917](https://bugs.mojang.com/browse/MC-297917) The client stops responding when showing a dialog with an extremely wide button
-   [MC-297977](https://bugs.mojang.com/browse/MC-297977) Dialog columns layout has extra spacing between the grid and the overflow linear layout

---

This week we’re releasing the final features from this year’s second drop. Today’s snapshot brings craftable saddles as well as some stunning tracks, courtesy of Amos Roddy. We have also added an option to show which song is currently playing in the in-game pause menu.

## New Features

-   Added a new Music Disc with the track "Tears" by Amos Roddy
-   Made Saddles craftable and shearable
-   Updated the main screen panorama

### Music

-   Added the following new music tracks by Amos Roddy to Cherry Groves, Forest, Desert, Grove, and Lush Cave Biomes:
    -   Below and Above
    -   Broken Clocks
    -   Fireflies
    -   Lilypad
    -   O's Piano
-   The same songs have been added to the menu music rotation

### Saddles Updates

#### Crafting Saddles

-   Saddles can now be crafted with 3 Leather and 1 Iron Ingot
-   Recipe unlocks when a player picks up their first Leather

#### Removing Saddles and Equipment

-   Saddles, Horse Armor, Harnesses and Carpets can now be removed from the mobs they can be equipped on by using Shears
-   Saddles, Horse Armor, Harnesses and Carpets cannot be removed by using Shears while the mob has a rider
-   Saddles, Horse Armor, Harnesses and Carpets cannot be removed by using Shears while the player is crouching
-   Saddles cannot be removed from Ravagers using Shears
-   Dispensers with Shears cannot remove Saddles, Horse Armor, Harnesses or Carpets equipped on mobs

#### Loot Table Changes

Some loot tables have had saddles removed from them and replaced with 1-5 Leather:

-   Monster Room chests
-   Ancient City chests
-   Desert Pyramid chests
-   Jungle Pyramid chests
-   Stronghold altar chests

## Changes

-   Fog is now applied to 3d hud elements such as first person player hands and items in hands
-   The Ghast now drops the "Tears" Music Disc when killed by a Fireball deflected by a Player
-   The fix to [MC-3697](https://bugs.mojang.com/browse/MC-3697) has been partially reverted. Decorative hanging entities such as paintings and item frames are now immune to explosions from submerged TNT while items and armor stands are once again vulnerable to them
-   Updates to music and sound
-   Rain and thunder weather is somewhat less foggy now
-   Rain fog affects interiors less
-   Saddles are now craftable and can be crafted with 3 Leather and 1 Iron Ingot
-   Saddles, Horse Armor, and Carpets can now be removed from the mobs they can be equipped on by using Shears
-   Some loot tables have been modified to give Leather instead of Saddles
-   The Dried Ghast Block no longer breaks if water flows into it

### Music and Sound

-   Music now plays even when the game is paused
-   Added an option to the Music & Sound settings that allows players to change how frequently music plays while in a game world
-   Added an option to the Music & Sound settings that enables a music toast to be shown whenever a song starts playing
    -   With this option enabled, the song that is currently playing will be seen at all times in the top left corner of the in-game Pause Menu

### Realms

-   Added the Realms logo to the Realms loading screens
-   Added region information when connecting to a Realm

## Technical Changes

-   The Data Pack version is now 77
-   The Resource Pack version is now 61
-   "Command Syntax" report now contains information about required permission level

## Data Pack Version 77

-   New optional fields `can_be_sheared` and `shearing_sound` have been added to the `equippable` item component
-   Added a way to display very simple dialogs to users
-   Added `custom` - a new `click_event` action type for text components
-   Users will now be prompted for confirmation before executing a command from the `run_command` click action in books and chat if the command can't be parsed or requires elevated permissions (i.e. higher than 0)

### Dialogs

-   Added a way to display simple modal dialogs to a user
-   Dialogs are stored in a `minecraft:dialog` registry, but can also be defined inline
-   Dialogs are an experimental feature
-   To avoid user confusion, dialog screens are marked with a warning sign next to the title
    -   Clicking on this warning leads to a dialog that explains to user that this screen is provided by custom content
    -   It also gives user an option to leave current world to avoid them being locked in infinite loop of dialogs
-   Dialogs can be displayed by server in `play` and `configuration` connection phases
    -   However, only inline registries are allowed in `configuration`, since registries are not yet available in that phase
-   Dialogs always close after user selects any action
-   Dialogs by default will also close after Escape key is pressed
    -   When this happens, dialog will run action specific to dialog type described as "exit action" below
    -   This behavior is configurable
-   When dialog screen is closed, game goes back to previously displayed non-dialog screen or back to gameplay
    -   That means that new dialogs always replace already opened ones, if any
-   Dialogs screens will pause the game in singleplayer mode
-   Dialogs can be configured to be accessible from Pause menu
    -   This replaces and expands "Server Links" button added in previous versions
-   Most dialogs follow a common layout, however exact contents depend on type:
    -   Header with title and warning button
    -   Body elements (labels, inputs, buttons and submit actions), scrollable if needed
    -   Optional footer, contains main buttons and submit actions

> **Developer's Note**: _Dialogs are not supposed to fully describe any in-game UI, but just to allow custom content to display simple messages and get input from users. This feature is intentionally limited to match that use case._

#### Dialog Description Format

-   Dialogs are stored in `minecraft:dialog` registry that can be provided by a datapack

Fields:

-   `type` - one of dialog types from `minecraft:dialog_type` registry
-   `<type-specific>` - see below

##### Common Dialog Fields

-   Most dialog types share some fields. To avoid duplication, they are listed in this section

Fields:

-   `title` - screen title, text component
    -   Should be always visible on screen, no matter the specific type
-   `external_title` - name to be used for a button leading to this dialog (for example from Pause screen), optional text component
    -   If not present, `title` will be used instead
-   `body` - optional list of body elements or a single element, see below
-   `can_close_with_escape` - can dialog be dismissed with Escape key, default `true`

##### Common Button Data

-   Most actions in dialog types share following fields that describe apperance of a button associated with that action:
-   `label` - text component
-   `tooltip` - optional text component to display when button is highlighted or hovered over
-   `width` - width of the button, positive integer with default `150`

#### Click Action

-   Common object used in dialogs to represent clickable action on a dialog
-   Fields:
    -   Common button data (see above)
    -   `on_click` - optional click event (same format as `click_event` on text components)
        -   If not present, clicking button will simply close screen without any action

##### Dialog Types

###### `minecraft:notice`

-   A simple screen with one action in footer
-   Exit action: same as `action`

Fields:

-   Common dialog fields (see above)
-   `action` - click action (see above), defaults to button with `gui.ok` label and no action or tooltip

###### `minecraft:confirmation`

-   A simple screen with two actions in footer
-   Exit action: same as `no` action

Fields:

-   Common dialog fields (see above)
-   `yes` - click action (see above) for positive outcome
-   `no` - click action (see above) for negative outcome

###### `minecraft:multi_action`

-   A scrollable list of actions arranged in columns
-   Screen also has button in footer that runs exit action and closes the screen
    -   Label will be `gui.cancel` if dialog has defined exit action and `gui.back` if it has no side effects
-   Exit action: defined in `on_cancel` field

Fields:

-   Common dialog fields (see above)
-   `actions` - non-empty list of click actions (see above)
-   `on_cancel` - optional click event (same format as `click_event` on text components)
-   `columns` - positive integer describing number of columns, default: `2`

###### `minecraft:server_links`

-   A scrollable list of links received from server in `minecraft:server_links` packet, arranged in columns
-   Screen also has button in footer that runs exit action and closes the screen
    -   Label will be `gui.cancel` if dialog has defined exit action and `gui.back` if it has no side effects
-   Note: this is a replacement for previous Server Links screen, but now with an additional body
-   Exit action: defined in `on_cancel` field

Fields:

-   Common dialog fields (see above)
-   `on_cancel` - optional click event (same format as `click_event` on text components)
-   `columns` - positive integer describing number of columns, default: `2`
-   `button_width` - width of buttons in the list, positive integer with default `150`

###### `minecraft:dialog_list`

-   A scrollable list of buttons leading directly to other dialogs, arranged in columns
    -   Titles of those buttons will be taken from `external_title` fields of targeted dialogs
-   Screen also has button in footer that runs exit action and closes the screen
    -   Label will be `gui.cancel` if dialog has defined exit action and `gui.back` if it has no side effects
-   Exit action: defined in `on_cancel` field

Fields:

-   Common dialog fields (see above)
-   `dialogs` - dialog, a list of dialogs or a dialog tag
-   `on_cancel` - optional click event (same format as `click_event` on text components)
-   `columns` - positive integer describing number of columns, default: `2`
-   `button_width` - width of buttons in the list, positive integer with default `150`

###### `minecraft:simple_input_form`

-   A screen that accepts user inputs
-   Has a single submit action with in a footer
-   Exit action: none (submitting data closes screen, but does not run any action outside of sending data to server)

Fields:

-   Common dialog fields (see above)
-   `inputs` - non-empty list of inputs controls, see below
-   `action` - submit action, see below

###### `minecraft:multi_action_input_form`

-   A screen that accepts user inputs
-   Can have multiple submit actions
-   Has no footer, submit actions are appended to a body
-   Exit action: none (submitting data closes screen, but does not run any action outside of sending data to server)

Fields:

-   Common dialog fields (see above)
-   `inputs` - non-empty list of inputs controls, see below
-   `actions` - non-empty list of submit actions, see below

##### Dialog Body Types

-   All dialogs have a list of body elements describing contents between title and actions or inputs

Fields:

-   `type` - one of dialog body types from `minecraft:dialog_body_type` registry
-   `<type-specific>` - see below

###### `minecraft:plain_message`

-   A multiline label

Fields:

-   `contents` - text component
-   `width` - maximum width of message, positive integer with default `200`

###### `minecraft:item`

-   Item with optional description
    -   If description is present, it will be rendered to the right of item
-   Item will be rendered as if it was in inventory slot
-   Item is not scaled even if `width` and `height` are set to values other than default

Fields:

-   `item` - item stack with count
-   `description` - optional object with fields:
    -   `contents` - text component
    -   `width` - maximum width of contents, positive integer with default `200`
    -   Can also be just be text component
-   `show_decorations` - if `true`, count and damage bar will be rendered over the item, default: `true`
-   `show_tooltip` - if `true`, item tooltip will show up when item is hovered, default: `true`
-   `width` - horizontal size of element, default: `16`
-   `height` - vertical size of element, default: `16`

##### Input Control Types

-   Input dialog uses a set of controls to accept user input
-   When submitted, current value of input will be converted to a string and sent to the server as described by Submit Action section below

Fields:

-   `type` - one of input control types from `minecraft:input_control_type` registry
-   `key` - string identifier of value used when submitting data, must be a valid template argument (letters, digits and `_`)
-   `<type-specific>` - see below

###### `minecraft:text`

-   Simple text input
-   Sends current contents without modification

Fields:

-   `width` - width of input, positive integer with default: `200`
-   `label` - a text component to be displayed to the left of control
-   `label_visible` - controls label visibility, default: `true`
-   `initial` - initial contents, default: `""` (empty)

###### `minecraft:boolean`

-   A plain checkbox with a label

Fields:

-   `label` - a text component to be displayed to the right of control
-   `initial` - an initial value, default: `false` (i.e. unchecked)
-   `on_true` - a string value to send when control is checked, default: 'true'
-   `on_false` - a string value to send when control is unchecked, default: 'false'

###### `minecraft:single_option`

-   A button that cycles between a set of options when clicked
-   Sends value associated with currently selected preset

Fields:

-   `label` - a text component to be displayed on the button
-   `label_visible` - if `true`, label will be incorporated into button text, default: `true`
-   `width` - width of button, positive integer with default: `200`
-   `options` - a list of objects with fields:
    -   `id` - a string value to send on submit
    -   `display` - a text component to display on button, optional (if not present, `id` is used)
    -   `initial` - an optional boolean flag that selects initial option (only one option can have it set to `true`)
    -   Additionaly list might also contain plain string - in that case it's equivalent to a single entry with field `id` set to that string and other fields set to default

###### `minecraft:number_range`

-   A slider for picking a numeric value out of some range
-   Sends currently selected value
    -   Whole numbers will be sent without decimal point

Fields:

-   `label` - a text component to be used as a slider label
-   `label_format` - a translation key to be used for building label (first argument is contents of `label` field, second argument is current value), default: `options.generic_value`
-   `width` - width of input, positive integer with default: `200`
-   `start` - start value (when slider is in leftmost position) (inclusive), float
-   `end` - end value (when slider is in rightmost position) (inclusive), float
-   `steps` - number of increments, positive integer
    -   Note: value of `1` means that slider will have two positions (start and end)
-   `initial` - initial value of slider, rounded down nearest step, must be within range, defaults to `min`

##### Submit Actions

-   Every submit action on input dialog has a button associated with it
-   When one of those buttons is clicked, values of all inputs will be collected and sent to a server using one of methods described below
-   `id` field of a submit action will be included as an input with key `action`
-   Submit action fields:
    -   Common button data (see above)
    -   `id` - string identifier of an action
    -   `on_submit` - submit method to run when button is clicked, object with following fields:
        -   `type` - one of submit method types from `minecraft:submit_method_type` registry
        -   `<type-specific>` - see below
-   Note: server does not validate individual values as they arrive as filled commands or custom payloads

##### Submit Method Types

###### `minecraft:command_template`

-   This method will build a command using a provided macro template and request the server to run it (same as `minecraft:run_command` click event)
-   If the command requires permission higher than `0` (when any operator permissions are required), a confirmation dialog will be shown
-   Macro will be expanded with values from input
    -   For example, if macro is `some_command $(action)`, `action` parameter will be expanded to `id` field of a submit action
    -   Inputs not used in macro will be ignored, while macro parameters not matching any inputs will be replaced with an empty string

Fields:

-   `template` - a string with a macro template to be interpreted as a command

###### `minecraft:custom_template`

-   This method will build a custom server click action using a provided macro template and send it to the server (same as `minecraft:custom` click event)
-   Macro will be expanded with values from input
    -   Inputs not used in macro will be ignored, while macro parameters not matching any inputs will be replaced with an empty string

Fields:

-   `template` - a string with a macro template to be used as a payload
-   `id` - namespaced ID

###### `minecraft:custom_form`

-   This method will build a custom server click action from all values and request the server to run it (same as `minecraft:custom` click event)
-   Format:
    -   keys are separated from values with horizontal tabulation (`U+0009`) character
    -   key-value entries are separated with line feed (`U+000A`) character
    -   If characters `U+0009` and `U+000A` are present in any key or value, they will be escaped to `;;t;;` and `;;n;;`

Fields:

-   `id` - namespaced ID

##### Built-in dialogs

The built-in datapack contains some custom dialogs to provide customization of specific screens used by client

###### `minecraft:server_links`

-   Replacement for previously existing "Server Links" screen
-   Meant to simplify migration for servers that used this feature previously

###### `minecraft:custom_options`

-   Shows contents of `minecraft:pause_screen_additions` tag (see below)
-   Lets user select a specific dialog if this tag contains multiple entries
-   Note: Since this tag is meant for interoperability, any content that replaces this dialog should be careful to not hide other dialog providers

#### Dialog Command

-   New command has been added to show dialog to clients

Syntax:

-   `dialog show <targets> <dialog>` - show dialog to player(s)
    -   `<targets>` - player name, UUID or a player selector
    -   `<dialog>` - a namespaced ID from `minecraft:dialog` registry or inline dialog value as described above
    -   Returns number of players in `targets` argument
-   `dialog clear <targets>` - clean dialog for player(s), if they have any visible
    -   `<targets>` - player name, UUID or a player selector
    -   Returns number of players in `targets` argument

#### Pause Screen Configuration

-   A data pack can request some of the available dialogs to be accessible from Pause screen
-   This feature replaces "Server Links" button and is placed on Pause screen according to the same rules
-   Buttons leading to dialogs exposed in this way will use label described in `external_title` field
-   This feature is configured by `minecraft:pause_screen_additions` dialog tag:
    -   If this tag is not specified or is empty but the server has sent `server_links` packet, tag will be handled as if it contained `minecraft:server_links` dialog
        -   Note: this matches previous Server Links feature behavior
        -   If this dialog is removed, the tag remains empty
    -   If this tag is still empty, button is not visible ("Send Feedback" and "Report Bugs" buttons are visible instead)
    -   If this tag has a single element, Pause screen button will lead directly to this dialog
    -   If this tag has multiple elements, Pause screen button will lead to `minecraft:custom_options` which (by default) lets user select one of the tag elements
        -   If this dialog is removed, button is not visible

### Text Components

#### Click Events

-   New click action `minecraft:custom` has been added
    -   When user clicks a component with this click action, client will send a dedicated packet `minecraft:custom_click_action` to a server
    -   The intended use is as an alternative for `run_command` to be used by modded servers without worrying about having to add custom commands
    -   This packet has no functionality on vanilla servers
    -   Fields:
        -   `id` - namespaced ID
        -   `payload` - optional string field

#### Dialog Click Event

-   New action `show_dialog` has been added
    -   When user clicks this component, a dialog will be opened for them
    -   Fields:
        -   `dialog` - a namespaced ID from `minecraft:dialog` registry or inline dialog value as described above

### Attributes

#### Ghasts `flying_speed` attribute

-   Ghasts now have a `flying_speed` attribute that affects their flying speed

### Data Components

#### `equippable` Item Component

-   Added new optional field: `can_be_sheared` (boolean)
    -   If `true`, players can use Shears to remove this equippable item from a target mob by right-clicking, provided all other shearing conditions are satisfied
    -   If not specified, it defaults to `false`
-   Added new optional field: `shearing_sound` (sound event)
    -   It's a sound event that plays when the equippable item is sheared
    -   If not specified, it defaults to the `item.shears.snip` sound event

## Resource Pack Version 61

### UI Sprites

-   Added `icon/music_notes` and `toast/now_playing` sprites

## Fixed bugs in 25w20a

-   [MC-97423](https://bugs.mojang.com/browse/MC-97423) Horse temporarily stuck in jump animation if dismounted
-   [MC-103511](https://bugs.mojang.com/browse/MC-103511) Sound/Song stops playing after adjusting the volume
-   [MC-118081](https://bugs.mojang.com/browse/MC-118081) Sounds don't pause when game is paused on some UI screens
-   [MC-248682](https://bugs.mojang.com/browse/MC-248682) Translucent blocks moved by pistons aren't affected by fog correctly
-   [MC-248688](https://bugs.mojang.com/browse/MC-248688) Falling translucent blocks aren't affected by fog correctly
-   [MC-269744](https://bugs.mojang.com/browse/MC-269744) Out of memory crash when using a preset with a large layer
-   [MC-276665](https://bugs.mojang.com/browse/MC-276665) Music is never turning on when it's toggled in the menu
-   [MC-277991](https://bugs.mojang.com/browse/MC-277991) The 2 brightest pixel colors on pale oak boat items are still switched
-   [MC-296311](https://bugs.mojang.com/browse/MC-296311) TNT touching water will destroy blocks and damage entities but will ignore decorative entities
-   [MC-296836](https://bugs.mojang.com/browse/MC-296836) Happy ghast saddle model doesn't change when lead is broken by exceeding max range.
-   [MC-296843](https://bugs.mojang.com/browse/MC-296843) Clouds are rendered incorrectly on some Mac systems
-   [MC-297524](https://bugs.mojang.com/browse/MC-297524) Connection with realm gives weird HTML text
-   [MC-297535](https://bugs.mojang.com/browse/MC-297535) The enchantment glint doesn't render in first person or the inventory
-   [MC-297544](https://bugs.mojang.com/browse/MC-297544) Rain fog does not affect 1st person hand or items
-   [MC-297570](https://bugs.mojang.com/browse/MC-297570) Block breaking overlay not affected by environmental fog

---

Take aim for this snapshot! It's a bit smaller this week, and you might want to train a bit more to learn the new projectile mechanics! And while you are here, why not enjoy some misty peaks at a distance!

## Changes

-   Projectiles target tolerance margin now changes over time
-   Fog was tweaked for improved atmospheric perspective
-   It now becomes foggier when it rains
-   The test framework will no longer try to restart running tests after a server restart

### Projectile Targeting

-   Projectiles now have a target tolerance margin that changes over time
    -   Previously, all projectiles had a fixed 0.3 blocks target tolerance margin
    -   Now, all projectiles start with no margin for the first two ticks of their flight
    -   After that, the target margin will expand by 0.05 blocks per tick until it reaches the previous 0.3 blocks margin
    -   This allows for better precision close to the shooting player or entity, while still allowing for some collision leeway when the projectile is further away

## Technical Changes

-   The Data Pack version is now 76
-   `--quickPlaySingleplayer` command line argument can now be used without an identifier to launch into the last played world

## Data Pack Version 76

-   The scale attribute for the Happy Ghast now has a limit of `1.0`

### Entity Data

#### `tnt`

-   The entity that primed the TNT is now stored in an optional `owner` field (UUID of Living entity)

#### `vex`

-   The owner of a Vex is now stored in an optional `owner` field (UUID of Mob)

## Resource Pack Version 60

-   Panorama textures must now all be the same size, and square
-   Sounds for the Dried Ghast Block have been changed

### UI Sprites

-   The Mob Effect atlas has been removed, and sprites in the `textures/mob_effect/` folder are now included within the GUI atlas
    -   This means Mob Effect sprites now support GUI sprite scaling properties

### Shaders & Post-process Effects

#### Shader fog changes

-   The fog is now split into environmental and render-distance-based
-   Previously both those concepts were mixed in the same uniforms
-   Environmental fog is supposed to represent the "fogginess" of the environment the player is in: lava, water, and now also atmosphere
-   Render distance fog is supposed to obscure the border of visible terrain
-   Environmental fog uses spherical distance to determine its intensity, render distance fog uses cylindrical distance
-   The resulting fog value for any given vertex is the maximum of both

#### `Fog` Uniform Block

-   `FogStart` was renamed to `FogRenderDistanceStart` and now represents the render distance fog start
-   `FogEnd` was renamed to `FogRenderDistanceEnd` and now represents the render distance fog end
-   `FogEnvironmentalStart` is new and represents the start of environment-based fog
-   `FogEnvironmentalEnd` is new and represents the end of environment-based fog
-   `FogShape` was removed. Render distance fog is now cylindrical and environmental for is spherical

### Sound Events

-   `block.dried_ghast.hit` has been removed

## Fixed bugs in 25w19a

-   [MC-69821](https://bugs.mojang.com/browse/MC-69821) TNT "forgets" the player that ignited it when the world is reloaded
-   [MC-118430](https://bugs.mojang.com/browse/MC-118430) Vex summoner is not stored in NBT despite being used for AI task
-   [MC-118432](https://bugs.mojang.com/browse/MC-118432) Vex summoner is not reset once it is dead
-   [MC-277486](https://bugs.mojang.com/browse/MC-277486) Mob effect icons ignore "scaling" parameter in mcmeta files
-   [MC-277903](https://bugs.mojang.com/browse/MC-277903) Creative inventory tab icons can display item cooldown overlay
-   [MC-295690](https://bugs.mojang.com/browse/MC-295690) Players stay on fire for a while after barely touching fire
-   [MC-296432](https://bugs.mojang.com/browse/MC-296432) The ability to stand on top of happy ghasts which have a larger scale attribute becomes unreliable or even impossible
-   [MC-296460](https://bugs.mojang.com/browse/MC-296460) Debug crosshair renders incorrectly
-   [MC-296494](https://bugs.mojang.com/browse/MC-296494) The player sometimes falls from a happy ghast when reconnecting to a world
-   [MC-296701](https://bugs.mojang.com/browse/MC-296701) Transformed entities do not retain their custom;;_;;data component
-   [MC-296709](https://bugs.mojang.com/browse/MC-296709) All non-default jukebox;;_;;playable components are deleted from existing items when updating past 1.21.4
-   [MC-296797](https://bugs.mojang.com/browse/MC-296797) The movement of happy ghasts for non-controlling passengers is jittery
-   [MC-296813](https://bugs.mojang.com/browse/MC-296813) The panorama isn't slightly blurred anymore which causes some "flickering" effects
-   [MC-296970](https://bugs.mojang.com/browse/MC-296970) The dried ghast block has a hit sound event
-   [MC-297142](https://bugs.mojang.com/browse/MC-297142) The "Leave Bed" button is invisible
-   [MC-297235](https://bugs.mojang.com/browse/MC-297235) Clouds not fully rendered depending on angle when very high above the world
-   [MC-297271](https://bugs.mojang.com/browse/MC-297271) Waypoint packet is handled by network thread instead of render thread, causing crash
-   [MC-297339](https://bugs.mojang.com/browse/MC-297339) Sign text is non-functional
-   [MC-297347](https://bugs.mojang.com/browse/MC-297347) Tamed animals no longer sit when their owner changes dimension
-   [MC-297461](https://bugs.mojang.com/browse/MC-297461) Equipment and sleeping pos data cannot be loaded in 1.21.4, but can be loaded in 1.21.5 to bees spawned from bee nest and bee hive

---

