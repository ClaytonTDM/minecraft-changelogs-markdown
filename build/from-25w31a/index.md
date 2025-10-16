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
-   [MC-261387](https://bugs.mojang.com/browse/MC-261387) Redundant block\_predicate\_filter check in mangrove tree placement
-   [MC-262000](https://bugs.mojang.com/browse/MC-262000) Unused texture: misc/white.png
-   [MC-263597](https://bugs.mojang.com/browse/MC-263597) The ender dragon's respawning noise cannot be turned down by the Hostile Mobs volume slider
-   [MC-269838](https://bugs.mojang.com/browse/MC-269838) Pumpkin seeds drop from sheared pumpkins is hardcoded
-   [MC-269839](https://bugs.mojang.com/browse/MC-269839) Honeycomb drop from sheared bee nests and beehives is hardcoded
-   [MC-270918](https://bugs.mojang.com/browse/MC-270918) Loot tables for mob heads are missing copy\_components loot function for custom\_name
-   [MC-275244](https://bugs.mojang.com/browse/MC-275244) Setting "width\_smoothness" in file configured\_carver to 0 causes the game to freeze or crash
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
-   [MC-277770](https://bugs.mojang.com/browse/MC-277770) Processor type block\_age always modifies slabs property "type" to bottom
-   [MC-278965](https://bugs.mojang.com/browse/MC-278965) Cherry Grove is not part of the #stronghold\_biased\_to tag
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
-   [MC-297803](https://bugs.mojang.com/browse/MC-297803) The string "menu.custom\_screen\_info.contents" misspells "personal" as "pesonal"
-   [MC-297806](https://bugs.mojang.com/browse/MC-297806) music.game.swamp.labyrinthine misspells the song's title
-   [MC-297808](https://bugs.mojang.com/browse/MC-297808) music.game.oxygene is missing the grave accent sign
-   [MC-297812](https://bugs.mojang.com/browse/MC-297812) Bold text is rendered differently than in previous versions
-   [MC-297813](https://bugs.mojang.com/browse/MC-297813) Amos Roddy is not listed in the credits
-   [MC-297823](https://bugs.mojang.com/browse/MC-297823) music.game.mice\_on\_venus is using wrong capitalization
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
    -   If characters `U+0009` and `U+000A` are present in any key or value, they will be escaped to `\t` and `\n`

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
-   [MC-296701](https://bugs.mojang.com/browse/MC-296701) Transformed entities do not retain their custom\_data component
-   [MC-296709](https://bugs.mojang.com/browse/MC-296709) All non-default jukebox\_playable components are deleted from existing items when updating past 1.21.4
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

Leads have become a hot commodity in the recent snapshots and this week they are getting an updated recipe, making it much easier to craft leads for all your leashing needs. The dried ghast is also getting a new recipe, based on soul sand and ghast tears. We have updated Unifont to 16.0.03 and this time we included glyphs from Unifont's Private Use Areas. That means creators will now be able to use scripts in the Under-ConScript Unicode Registry like Tengwar or Sitelen Pona.

## Changes

-   Splash Potions effect strength is now based on the distance of the hitboxes
-   The Slime Ball in the Lead recipe has been replaced with a String
-   Piglins can now give Dried Ghast Blocks when bartered with
-   The recipe for the Dried Ghast Block has been updated to now require a Soul Sand Block rather than a Bone Block

### Splash Potions

-   Splash Potions distance to affected entities now depends on the closest distance between the entity hitbox and the splash potion hitbox where it landed
    -   This means that if an entity is hit directly by the splash potion, it will receive the full effect of the potion
    -   If the entities are grouped together, they will receive the same effect strength

## Technical Changes

-   The Data Pack version is now 75
-   The Resource Pack version is now 59
-   All JSON files (in worlds, packs, configuration, etc.) are now parsed in strict mode

## Data Pack Version 75

### Entity Data

-   Added `home_pos` and `home_radius` fields to all mobs
    -   Mobs with set home position will limit their pathfinding to stay within the indicated area
    -   Some mobs, like Bats, Slimes, Magma Cubes, Phantoms and Ender Dragons may ignore it
    -   Interacting with leashes or riding may change the home position of the mob

#### Entity Tags

-   Updated `#followable_friendly_mobs` to include the Happy Ghast

## Resource Pack Version 59

-   Updated Unifont to 16.0.03

### UI Sprites

-   The `hud/locator_bar_arrow_up` and `hud/locator_bar_arrow_down` sprites are now animated with a standard `animation` definition in the corresponding `.mcmeta` files

### Font

#### Unifont

-   Updated Unifont to 16.0.03
-   Added previously omitted Unifont glyphs for Private Use Areas
    -   Those glyphs are loaded as a separate sub-font `minecraft:include/unifont_pua` and are not included in any normally used font
    -   Characters in those areas are managed by Under-CSUR (Under-ConScript Unicode Registry), which adds various scripts not present in official Unicode set, like Tengwar or Sitelen Pona

#### `unihex` Font Provider

-   Field `size_overrides` is now optional (defaults to empty list)

## Fixed bugs in 25w18a

-   [MC-200925](https://bugs.mojang.com/browse/MC-200925) Ghasts are not affected by potions thrown on their head
-   [MC-262268](https://bugs.mojang.com/browse/MC-262268) Keyboard navigation does not work in the book and quill GUI
-   [MC-264431](https://bugs.mojang.com/browse/MC-264431) #minecraft:sand tag has two minecraft:suspicious\_sand
-   [MC-278459](https://bugs.mojang.com/browse/MC-278459) unifont.json contains trailing comma
-   [MC-279284](https://bugs.mojang.com/browse/MC-279284) Experience orbs from thrown bottles o' enchanting are very prone to getting stuck inside blocks
-   [MC-279875](https://bugs.mojang.com/browse/MC-279875) Cannot diagonally climb slab through suspended scaffolding
-   [MC-280281](https://bugs.mojang.com/browse/MC-280281) Fishing bobbers rapidly jitter when attached to entities that are moving
-   [MC-280502](https://bugs.mojang.com/browse/MC-280502) Translation key snbt.parser.undescore\_not\_allowed has a typo
-   [MC-295879](https://bugs.mojang.com/browse/MC-295879) Sprint-hitting boats and then getting in them causes the boat to fall through the block underneath
-   [MC-295914](https://bugs.mojang.com/browse/MC-295914) Loot table files accept invalid JSON
-   [MC-296354](https://bugs.mojang.com/browse/MC-296354) Happy ghasts aren’t affected by potions thrown on their heads
-   [MC-296784](https://bugs.mojang.com/browse/MC-296784) The "Welcome to Minecraft" screen is missing its fade out
-   [MC-296866](https://bugs.mojang.com/browse/MC-296866) Predicates of particular namespaces failed to be accessed on /execute
-   [MC-296898](https://bugs.mojang.com/browse/MC-296898) Happy ghasts' home slightly drift over time
-   [MC-297112](https://bugs.mojang.com/browse/MC-297112) You cannot use CTRL+NUM to navigate to tabs within the configure realms menu
-   [MC-297114](https://bugs.mojang.com/browse/MC-297114) The realms menu incorrectly claims that realms are expiring soon
-   [MC-297115](https://bugs.mojang.com/browse/MC-297115) The “This is a Snapshot Realm…” box no longer renders with a black background
-   [MC-297184](https://bugs.mojang.com/browse/MC-297184) 'Realms' is lowercase in `mco.errorMessage.realmsService.configurationError`.

---

After a long weekend we are back with another snapshot! This week we are moving the locator bar out of experiments, try it out and continue to give us your feedback over at [feedback.minecraft.net](http://feedback.minecraft.net/). We have also made some improvements to the Realms UI including region selection for your world. Happy Mining!

## New Features

-   Added an option to reduce the cloud range
-   Added the Locator Bar, a new HUD element that shows the direction of other Players in multiplayer

### Locator Bar

The Locator Bar is a new default UI element that displays the direction of other players in the world.

If there are no other players in the world the experience bar will display as normal, otherwise if another player is in the world (and that player is not hiding) then the experience bar will appear when experience is gained, otherwise the Locator Bar will display in the same area.

-   Multiplayer servers can toggle the Locator Bar with the `locatorBar` gamerule
-   Players can hide by crouching, wearing a mob head or a Carved Pumpkin, or using a Potion of Invisibility
-   Players in Spectator Mode are not visible on the Locator Bar
    -   However, Spectating player are visible to each other
-   Facing other players within a 120 degrees range will display those players as colored indicators on the Locator Bar
    -   Other players that are above/below the screen will also display an up/down arrow with their indicator
    -   The indicator will change to different sized icons depending on how far away the other Player is
    -   Colored indicators are randomized for each player
        -   Servers can modify the colors of indicators with the `/waypoint` command
            -   eg: `/waypoint modify @s color red` to set an indicator to red
        -   Players on a team will override their default indicator color with their team color

#### Player Changes

-   Crouching will hide the player, preventing them from appearing on the Locator Bar of other players
-   Spectators are only visible to other spectators on the Locator Bar

#### Item Changes

-   The following items will hide players when worn in the head slot:
    -   Carved Pumpkin
    -   Skeleton Skull
    -   Wither Skeleton Skull
    -   Player Head
    -   Zombie Head
    -   Creeper Head
    -   Dragon Head
    -   Piglin Head

#### Potion Changes

-   Using a Potion of Invisibility will also hide players from the Locator Bar

## Changes

-   Improvements to the Realms configuration screen
-   Introduced a Region Preference setting that allows for more granular control over what region a Realm is started

### Realms

-   Changed the layout of the Realms configuration screen to use tabs
    -   A Worlds tab containing changes to any of the world slots, creating new worlds and changing their settings
    -   A Players tab to manage the players that have access and their level of access to the Realm
    -   A Subscription tab to manage the Realms subscription
    -   A Settings tab to change the settings of the Realm
-   Introduced a Region Preference setting that allows for more granular control over what region a Realm is started
-   Changed wording for `Close`/`Open` Realm to `Temporarily close`/`Reopen` Realm

## Technical Changes

-   The Data Pack version is now 74
-   The Resource Pack version is now 58
-   Added a Server-authoritative Waypoint broadcasting system for controlling the Locator Bar behavior for Players

## Data Pack Version 74

### Commands

#### Added `waypoint`

This is a new command for querying and modifying waypoints.

    waypoint list
    
    waypoint modify <entity-selector> color <color>
    waypoint modify <entity-selector> color hex <hex-color>
    waypoint modify <entity-selector> color reset
    waypoint modify <entity-selector> style <waypoint_style/resource>
    waypoint modify <entity-selector> style reset
    

Arguments:

-   `entity-selector`: For selecting entities that are transmitting as waypoints (see `waypoint_transmit_range` attribute)
-   `color`: Overrides the Locator Bar icon color for this waypoint
-   `hex <hex-color>` arguments are in web format (RRGGBB)
    -   Red is either `hex F00` or `hex FF0000`
    -   Cornflower blue is `hex 6495ED`
-   `style`: For changing the icon spriteset and selection distances
    -   `set <waypoint_style/resource>` changes the style to a specific asset under `waypoint_style/`
    -   `reset` will restore the default icon behavior of the Locator Bar

##### Waypoint Styles

These define custom icons to be displayed on the Locator Bar and are within the `waypoint_style/` asset directory.

The default implementation is as such:

    {
      "near_distance": 128,
      "far_distance": 332,
      "sprites": [
        "minecraft:default_0",
        "minecraft:default_1",
        "minecraft:default_2",
        "minecraft:default_3"
      ]
    }
    

-   `near_distance` and `far_distance` are optional and default to the values `128` and `332` respectively.
    -   `far_distance` distance must be greater than `near_distance`
-   Each sprite is searched within the prefix of `hud/locator_bar_dot/` (the directory `textures/gui/sprites/hud/locator_bar_dot`).

### Game Rules

#### Added `locatorBar`

-   Default is `true`: enabling the Locator Bar
-   Changing to `false` will remove all existing Waypoints from all players
-   The Game Rule has been renamed from `useLocatorBar` during the experiment. This may break minor command related features in worlds created in the previous snapshot.

#### Added `waypoint_transmit_range` and `waypoint_receive_range`

-   Default: `0.0`, Minimum: `0.0`, Maximum: `60000000.0`
-   Players have a default transmission and receive range of 60,000,000
-   Mobs with a transmission range above zero will send waypoint packets to nearby receivers that are within that range
-   Similarly, receivers only receive waypoints that are inside their receive range (and receive nothing if that range is zero)

Examples:

-   `/attribute @s minecraft:waypoint_transmit_range base set 0` will prevent a player from transmitting (hiding them)
-   `/attribute @s minecraft:waypoint_transmit_range base set 80` will only let a player transmit up to 80 blocks (hiding them from players further than that)
-   `/attribute @s minecraft:waypoint_receive_range base set 0` will prevent a player from receiving (turns off their Locator Bar)
-   `/attribute @s minecraft:waypoint_receive_range base set 120` will only let a player see Locator Bar dots that are within 120 blocks (hiding all players further than that)

### Waypoint Broadcasting

The Locator Bar works by a server-controlled Waypoint system. Waypoints are received by Players, and connections between Waypoints and Players are managed by the multiplayer server.

-   By default, all Players transmit a Waypoint from themselves, and all Players receive all Waypoints
-   Individual Players can have their transmission and receive ranges controlled by the `waypoint_transmit_range` and `waypoint_receive_range` attributes

### Tags

#### Block Tags

-   Added `happy_ghast_avoids` - blocks that happy ghasts avoid getting close to
-   Added `triggers_ambient_dried_ghast_block_sounds` - blocks that can trigger ambient Dried Ghast sounds to play when a Dried Ghast block is placed on them

## Resource Pack Version 58

### Shaders & Post-process Effects

#### `Fog` Uniform Block

-   `FOG_IS_SKY` has been removed in favour of splitting up the sky shader

## Fixed bugs in 25w17a

-   [MC-240121](https://bugs.mojang.com/browse/MC-240121) "1x1\_b5.nbt" piece does not generate in woodland mansions
-   [MC-296369](https://bugs.mojang.com/browse/MC-296369) Dispensers cannot equip harnesses onto happy ghasts
-   [MC-296421](https://bugs.mojang.com/browse/MC-296421) Right-clicking a happy ghast equipped with a harness while crouching will play hand animation
-   [MC-296438](https://bugs.mojang.com/browse/MC-296438) The "display" field on Attribute Modifiers is not optional, despite the changelog saying it is
-   [MC-296443](https://bugs.mojang.com/browse/MC-296443) Happy ghasts don’t avoid pathfinding into dangerous blocks
-   [MC-296511](https://bugs.mojang.com/browse/MC-296511) Gamemode Switcher icons become invisible when using resource pack with opaque or translucent selection.png
-   [MC-296516](https://bugs.mojang.com/browse/MC-296516) Tooltips are incorrectly rendered below nearby elements when holding your mouse cursor over players that are online on realms
-   [MC-296538](https://bugs.mojang.com/browse/MC-296538) Rarity of Dried Ghast is inconsistent with its crafting ingredients
-   [MC-296542](https://bugs.mojang.com/browse/MC-296542) Waypoints on locator bar do not adjust to 3rd person front camera
-   [MC-296567](https://bugs.mojang.com/browse/MC-296567) Waypoints on locator bar do not respect team colors
-   [MC-296583](https://bugs.mojang.com/browse/MC-296583) Applying the waypoint\_transmit\_range attribute to an entity at the same time it is summoned makes it not show on the locator bar
-   [MC-296750](https://bugs.mojang.com/browse/MC-296750) The game crashes after startup on some systems (predominantly Linux systems) with AMD graphics
-   [MC-296755](https://bugs.mojang.com/browse/MC-296755) Resource Packs: The panorama overlay now renders in front of everything in the title screen
-   [MC-296756](https://bugs.mojang.com/browse/MC-296756) Clouds do not render at render distance 2 & 3
-   [MC-296764](https://bugs.mojang.com/browse/MC-296764) The text cursor renders behind command auto-complete text
-   [MC-296766](https://bugs.mojang.com/browse/MC-296766) GUIs of rideable mobs are missing their slots as of 25w16a
-   [MC-296770](https://bugs.mojang.com/browse/MC-296770) Strikethrough text in the villager interface is rendered behind characters
-   [MC-296774](https://bugs.mojang.com/browse/MC-296774) Player messages within the "Select Chat Messages to Report" menu aren’t rendered while selected
-   [MC-296775](https://bugs.mojang.com/browse/MC-296775) Some elements within the "Select Chat Messages to Report" menu are rendered darker while player messages are selected
-   [MC-296777](https://bugs.mojang.com/browse/MC-296777) Lead shift right-clicking doesn't work on Boats with Chests
-   [MC-296779](https://bugs.mojang.com/browse/MC-296779) The social interactions menu is rendered darker than normal
-   [MC-296782](https://bugs.mojang.com/browse/MC-296782) Player models within the “Report Player Skin” menu are rendered darker and lower than normal
-   [MC-296794](https://bugs.mojang.com/browse/MC-296794) Furnaces, blast furnaces, and smokers sometimes do not show the burn progress and lit progress animations
-   [MC-296805](https://bugs.mojang.com/browse/MC-296805) The game crashes when holding your mouse cursor over players that are online on realms
-   [MC-296806](https://bugs.mojang.com/browse/MC-296806) Cloud rendering has a considerable impact on performance as of 25w16a
-   [MC-296807](https://bugs.mojang.com/browse/MC-296807) The titles of selected tabs within the "Create New World" menu are rendered behind the background
-   [MC-296808](https://bugs.mojang.com/browse/MC-296808) The titles of lists within the resource pack and data pack menus are rendered behind the background
-   [MC-296984](https://bugs.mojang.com/browse/MC-296984) The "No pending invites!" text within the realms invitation menu is rendered behind the background

---

In this week’s snapshot leads are getting new mechanics making it possible to leash mobs together or leash them to entities like boats! Now you can travel the desert with your own camel caravan or airlift your treasures in a boat with chest attached to your happy ghast. Moving villagers have never been easier! As you are soaring through the skies you will see that the clouds render infinitely.

## Changes

-   Changed leash mechanics
-   Changed Elytra so that while gliding, using a firework will only be used as a boost even if placed on a block
-   Clouds now exist all the way to the horizon
-   Reverted the fix for [MC-101556](https://bugs.mojang.com/browse/MC-101556): Nether Portal teleport range is too large (equivalent to a full block)

> **Developer's Note**: _After consideration, we have decided to revert this change as it came in quite late in the snapshot cycle and unintentionally broke some functionality that our community were relying on. We'd like to revisit this at some point when we have time to deal with the issues that showed up due to this change_

### Leash changes

-   Leashes are now rendered twice as thick, to match bedrock
-   Leashes can now be used to leash two mobs together
    -   Sneak-interact on any mob while holding a bunch of leashed mobs will leash these mobs to the interacted entity
    -   You now cannot leash anything to itself
-   If the re-leashing an entity would result in immediate leash snapping due to distance, the re-leashing would not happen
-   Leashes can be snipped from an entity when interacting them with Shears
    -   This applies to its own leash connection as well as all entities attached to it
    -   Dispensers can now snip leashes from entities in front of them when they are equipped with Shears
-   Improved leash mechanics, with reworked leash physics, allowing for more stable leash connection, especially when leashed entities are not on ground
    -   When dragged on the leash, leashed objects will now orient themselves towards the leasher
    -   Using a firework rocket when flying with leashed entities will now break the leash connections
-   When leashing an already leashed mob, the current leash will now snap and a player will re-leash the object to yourself
    -   You cannot steal leashed entities from other players
-   Interactions with a Leash Knot and Fence Blocks have changed:
    -   When interacting with a Leash Knot or a Fence Block, if there are any player-leashed entities in range of the leash knot, they will be re-leashed to the Leash Knot or a Fence Block
    -   In case of attaching of mobs fails due to distance or there is nothing to attach, the player will now transfer all fence leashed entities to itself
    -   If there is nothing left attached to the Leash Knot, it disappears
    -   Sneak-interact can only result in attaching of the player mobs to the fence
    -   Interacting with Shears or punching the Leash Knot will result in all current connections broken
-   Boats and large mobs that can be leashed, but cannot fit in the boat (Horses, Donkey, Mule, Camel and Sniffer) can now be leashed in a special 4-leash configuration to the Happy Ghast
    -   Happy Ghast will also present a custom layer when its leashing something using a quad connection
    -   Leashed in quad connection are now rendered without slack
-   Leash snapping distance has been changed from 10 to 12 blocks
    -   The distance between centers of entities bounding boxes, rather than their feet is used to determine the distance between two leashed entities
    -   Happy Ghast leash is now longer - with free roaming distance of 10 blocks and leash snapping at 16 blocks

## Technical Changes

-   The Data Pack version is now 73
-   The Resource Pack version is now 57

## Data Pack Version 73

### Data Components

#### `painting/variant` Item Component

-   No longer accepts inline variants

## Resource Pack Version 57

-   All core shader uniforms are now uniform blocks
-   The cloud texture (`clouds.png`) can no longer be colored
-   Block Model rotations are no longer limited to multiplies of `22.5`

### Block Models

-   `elements[].rotation.angle` value in block models is no longer limited to multiplies of `22.5` degrees and can now be any angle from `-45` to `+45`

### Shaders & Post-process Effects

> **Developer's Note**: _Although it is possible in Resource Packs, overriding Core Shaders is considered as unsupported and not an intended Resource Pack feature. These shaders exist as part of the internal implementation of the game, and as such, may change at any time as the game's internals evolve. We understand that overriding Core Shaders is used for very cool Resource Pack features, many of which lack supported alternatives. We would like to provide better, supported alternatives in the future._

-   All built-in uniforms are now uniform blocks instead of opaque loose uniforms
-   Custom uniforms provided to post-process shaders are now uniform blocks
-   Uniform definitions inside json files are now per-block

#### Post-process Effect Definitions

-   Entries in the `targets` map have been expanded to support new properties
    -   New optional boolean field: `persistent` (default: `false`)
        -   If `true`, this render target will be persistent across frames
        -   The contents of the target will be cleared when the screen is resized
    -   New optional field: `clear_color` (default: `[0, 0, 0, 0]`)
        -   Format: integer ARGB value, or float array in order `[R, G, B, A]`
        -   When this target is created or cleared, it will be filled with this color
-   The `uniforms` values is now a list-per-block, instead of a global list
    -   e.g. `uniforms: { "UniformBlockName": [ { "type": "vec2", "value": [...] } ] }`
        -   The order of uniforms in a block **must** match the order in the shader
-   `name` as part of a uniform definition is no longer used
    -   We encourage setting it to help keep the json file organised/readable, but the game won't use it
-   `value` as part of a uniform definition replaces the old `values`, and the type depends on the `type` field
    -   This field is required
    -   `"type": "int"` needs `"value": 123` (a single int)
    -   `"type": "float"` needs `"value": 123.4` (a single float)
    -   `"type": "vec2"` needs `"value": [1.2, 3.4]` (two floats)
    -   `"type": "vec3"` needs `"value": [1.2, 3.4, 5.6]` (three floats)
    -   `"type": "ivec3"` needs `"value": [1, 2, 3]` (three ints)
    -   `"type": "vec4"` needs `"value": [1.2, 3.4, 5.6, 7.8]` (four floats)
    -   `"type": "matrix4x4"` needs `"value": [1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0, 13.0, 14.0, 15.0, 16.0]` (four rows of four columns of floats)
-   We do not validate that the uniform block is valid for a given shader, giving incorrect information will cause undefined and funky behavior

#### Post-process Effect Shaders

-   Instead of every uniform being an individual opaque type, they are now grouped in uniform blocks
    -   They will be set according to the pass definition in the json file, and may be shared across both vertex and fragment shaders
-   The list of sizes (all `vec2 *Size` uniforms) are now replaced with a single `SamplerInfo` uniform block
    -   This contains, _in order_, the size of the output texture followed by the size every input texture
    -   The order of textures in the definition file will dictate the order of samplers in this uniform
    -   For most post chains this is just `OutSize` and `InSize` as before
    -   All sizes are `vec2`

##### `post/bits.fsh`

-   Expects a `BitsConfig` of `float Resolution` and `float MosaicSize`

##### `post/blit.fsh`

-   Expects a `BlitConfig` of `vec4 ColorModulate`

##### `post/blur.vsh` and `post/box_blur.fsh`

-   Expects a `BlurConfig` of `vec2 BlurDir` and `float Radius`

##### `post/color_convolve.fsh`

-   Expects a `ColorConfig` of `vec3 RedMatrix`, `vec3 GreenMatrix` and `vec3 BlueMatrix`

##### `post/invert.fsh`

-   Expects a `InvertConfig` of `float InverseAmount`

##### `post/rotscale.vsh`

-   Expects a `RotScaleConfig` of `vec2 InScale`, `vec2 InOffset` and `float InRotation`

##### `post/spiderclip.fsh`

-   Expects a `SpiderConfig` of `vec4 Scissor` and `vec4 Vignette`

#### `Globals` Uniform Block

-   Available through `#moj_import <minecraft:globals.glsl>` for convenience
-   Most shaders are able to receive this uniform block, even if they don't normally use it
-   Contains `ScreenSize`, `GlintAlpha`, `GameTime` and `MenuBlurRadius` (new)
    -   `MenuBlurRadius` is the blur radius of the background when a menu is open

#### `Fog` Uniform Block

-   Available through `#moj_import <minecraft:fog.glsl>` for convenience
-   Most shaders are able to receive this uniform block, even if they don't normally use it
-   Contains `FogColor`, `FogShape`, `FogStart`, `FogEnd`, `FogSkyEnd` (new) and `FogCloudsEnd` (new)
    -   `FogSkyEnd` is new and represents where the fog should end when drawing for the sky
    -   `FogCloudsEnd` is new and represents where the fog should end when drawing the clouds
    -   `FogEnd` is the "normal" fog cutoff as before
-   `FOG_IS_SKY` is now available to the `position.vsh`/`position.fsh` shaders when they are rendering for the sky

#### `Projection` Uniform Block

-   Available through `#moj_import <minecraft:projection.glsl>` for convenience
-   Most shaders are able to receive this uniform block, even if they don't normally use it
-   Contains `ProjMat` with no changes

#### `DynamicTransforms` Uniform Block

-   Available through `#moj_import <minecraft:dynamictransforms.glsl>` for convenience
-   Is no longer available to shaders that do not normally use it
-   Contains `ModelViewMat`, `ColorModulator`, `ModelOffset`, `TextureMat`, `LineWidth`
    -   These are very likely to change in the near future
    -   The values of some of these are often hard coded and may not make sense for a given shader, ie `LineWidth` in any non-line based pipeline

#### `Lighting` Uniform Block

-   Available through `#moj_import <minecraft:light.glsl>` for convenience
-   Most shaders are able to receive this uniform block, even if they don't normally use it
    -   The values may not make sense if the shader wouldn't normally expect it, however
-   Contains `Light0_Direction` and `Light1_Direction`

#### `CloudInfo` Uniform Block

-   Only available to the clouds shaders (`rendertype_clouds.vsh`/`rendertype_clouds.fsh`)
    -   Contains `CloudColor`, `CloudOffset` and `CellSize` (new)
        -   `CellSize` contains the size of an individual cloud cell

#### `LightmapInfo` Uniform Block

-   Only available to the lightmap shader (`lightmap.fsh`)
-   Contains `AmbientLightFactor`, `SkyFactor`, `BlockFactor`, `UseBrightLightmap`, `NightVisionFactor`, `DarknessScale`, `DarkenWorldFactor`, `BrightnessFactor`, `SkyLightColor` with no change in behavior

## Fixed bugs in 25w16a

-   [MC-104231](https://bugs.mojang.com/browse/MC-104231) Loading a custom structure doesn't load rails correctly
-   [MC-277369](https://bugs.mojang.com/browse/MC-277369) The draft report icon isn't initially visible when saving a report as a draft
-   [MC-277370](https://bugs.mojang.com/browse/MC-277370) The draft report icon doesn't initially disappear when a report is discarded
-   [MC-279515](https://bugs.mojang.com/browse/MC-279515) The game stalls when running the "/test clearall" command with large radiuses
-   [MC-280297](https://bugs.mojang.com/browse/MC-280297) The volume level between grass and dirt is inconsistent
-   [MC-293754](https://bugs.mojang.com/browse/MC-293754) Minecraft causes OpenGL errors occasionally
-   [MC-295395](https://bugs.mojang.com/browse/MC-295395) Entities interact differently with nether portals
-   [MC-295677](https://bugs.mojang.com/browse/MC-295677) Title screen fades in from black after closing the "Welcome to Minecraft" screen
-   [MC-295895](https://bugs.mojang.com/browse/MC-295895) 1.21.5 breaks minecart behavior when travelling through nether portals
-   [MC-295944](https://bugs.mojang.com/browse/MC-295944) Reloading a professionless zombie villager causes it to gain random profession clothing
-   [MC-296099](https://bugs.mojang.com/browse/MC-296099) Nether portal collision is or isn't working depending on the cardinal direction
-   [MC-296121](https://bugs.mojang.com/browse/MC-296121) ClientboundLevelChunkPacketData buffer size is too big
-   [MC-296348](https://bugs.mojang.com/browse/MC-296348) NoAI:1b mobs cannot be ridden in 1.21.5+
-   [MC-296353](https://bugs.mojang.com/browse/MC-296353) Potions, tipped arrows, and dyed leather armor render with missing or incorrect colors in the inventory
-   [MC-296355](https://bugs.mojang.com/browse/MC-296355) Characters in front of the cursor render one pixel too far to the left
-   [MC-296356](https://bugs.mojang.com/browse/MC-296356) Hitbox rendering in GUIs is broken
-   [MC-296357](https://bugs.mojang.com/browse/MC-296357) Happy ghasts produce footstep sounds when flying close above blocks
-   [MC-296358](https://bugs.mojang.com/browse/MC-296358) A player in Spectator mode on top of a happy ghast makes it stop moving
-   [MC-296363](https://bugs.mojang.com/browse/MC-296363) Scrolling in the experiments screen does not move the positions where the buttons can be selected
-   [MC-296365](https://bugs.mojang.com/browse/MC-296365) Block placing sounds are played when the block states of completely unhydrated dried ghasts are changed
-   [MC-296366](https://bugs.mojang.com/browse/MC-296366) Kicked for flying while flying happy ghast
-   [MC-296367](https://bugs.mojang.com/browse/MC-296367) The enchantment glint in the inventory appears on all items of the same type
-   [MC-296373](https://bugs.mojang.com/browse/MC-296373) The side faces of dried ghast tentacles aren’t culled when covered by blocks
-   [MC-296376](https://bugs.mojang.com/browse/MC-296376) Sounds produced by ghastlings can be heard from too far away
-   [MC-296381](https://bugs.mojang.com/browse/MC-296381) Dried Ghasts always face north in world generation
-   [MC-296382](https://bugs.mojang.com/browse/MC-296382) Filled maps are blurry
-   [MC-296401](https://bugs.mojang.com/browse/MC-296401) Harnesses are not sorted correctly in the Creative Inventory
-   [MC-296419](https://bugs.mojang.com/browse/MC-296419) Spectators' names in multiplayer tab list render improperly compared to 1.21.5
-   [MC-296426](https://bugs.mojang.com/browse/MC-296426) Text background lacks opacity over hotbar icons
-   [MC-296427](https://bugs.mojang.com/browse/MC-296427) Happy ghasts move/spin erratically when leashed to a fence
-   [MC-296434](https://bugs.mojang.com/browse/MC-296434) Unable to see items when hovering over them inside of a bundle
-   [MC-296437](https://bugs.mojang.com/browse/MC-296437) Items render behind effect icons and recipe book inside of the inventory
-   [MC-296444](https://bugs.mojang.com/browse/MC-296444) Blur is applied to resource pack icons
-   [MC-296465](https://bugs.mojang.com/browse/MC-296465) Highlighting text on a sign causes it to override the sign background
-   [MC-296467](https://bugs.mojang.com/browse/MC-296467) Item tooltips cause items behind it to not render
-   [MC-296470](https://bugs.mojang.com/browse/MC-296470) Items render behind text in anvils
-   [MC-296471](https://bugs.mojang.com/browse/MC-296471) Hud is now hidden while in bed resulting in delayed hud rendering
-   [MC-296517](https://bugs.mojang.com/browse/MC-296517) The menu panorama turns gray when the switching realm worlds interface is open
-   [MC-296518](https://bugs.mojang.com/browse/MC-296518) Text inside the middle of the java realms information box completely disappears when selected
-   [MC-296524](https://bugs.mojang.com/browse/MC-296524) Server and singleplayer world icons are blurry
-   [MC-296638](https://bugs.mojang.com/browse/MC-296638) Clocks, compasses, and lodestone compasses do not render enchantment glint in certain display contexts when using Fabulous! graphics

---

Snapshot on a Tuesday? Yes! From now on we will be moving snapshots to the same weekday as full releases, Tuesdays.

This week we are releasing the first snapshot of the second game drop of 2025, including the happy ghast, ghastling, dried ghast and ghast harness. Experience soaring new gameplay thanks to the happy ghast, and discover how to raise one of your own – from retrieving a dried ghast block from the Nether to submerging it in water in the Overworld to spawn a ghastling. We are also adding the locator bar to Java this week, you can finally easily find your friends when you are out adventuring.

Take your first test flight with the happy ghast, craft your own dried ghast – and send us your [feedback](https://feedback.minecraft.net/hc/en-us/community/topics/35301401438605-Upcoming-Game-Drop-Features?sort_by=votes)!

## New Features

-   Added Dried Ghast block
-   Added Happy Ghast mob
-   Added Harness items
-   Added new advancements

### Dried Ghast block

-   Can be found in the Nether in Nether Fossil structures
-   Is crafted with 1 Bone Block and 8 Ghast Tears
-   When waterlogged it undergoes 3 state changes over about 20 minutes until it spawns a Ghastling mob
-   Makes sounds and shows particles depending on the state
-   If mined during the waterlogging, it will revert to its “dry” state regardless of what state it has reached during waterlogging
-   Will revert states back to its initial “dry” state when it is taken away from being waterlogged, using the same time scale

### Happy Ghast mob

#### Ghastling

-   Ghastling is a young version of the Happy Ghast mob
-   Spawns from a Dried Ghast block that has continuously been waterlogged for about 20 minutes
-   After spawning, the Ghastling will try and follow:
    -   Players within a 16-block radius or
    -   An adult, non-aquatic passive mob (and some neutral mobs) within a 16-block radius
-   If no player or suitable mob is close around the Ghastling will idle around within 32 blocks from its home position (where it spawned or last was interacted with)
    -   It will reset its home position if it is moved more than 16 blocks away from the border of its home area
-   Can be tempted and fed using Snowballs
-   Will grow up into a Happy Ghast after about 20 minutes (or faster if fed Snowballs)

#### Happy Ghast

-   The adult Happy Ghast is a new flying mount that can carry up to four players
-   Grows up from a Ghastling after about 20 minutes (or faster if the Ghastling is fed Snowballs)
-   Can be equipped with a Harness and then be mounted by up to 4 players
-   Tempted by Snowballs and Harness
    -   Harness tempting only works if the Happy Ghast is unharnessed
-   Has no panic behavior when taking damage
-   Cannot be bred
-   Slowly regenerates health, with regeneration speeding up during rain, snow or when flying at the same height as clouds are rendered
-   The first player that mounts the Happy Ghast will control it, sitting in front of the Happy Ghast, just above its face
    -   Pressing the forward key will make the Happy Ghast fly in the direction the player is looking
    -   Pressing the back key will make the Happy Ghast fly in the opposite direction the player is looking
    -   Pressing the left and right keys will strafe the Happy Ghast in the respective direction
    -   Pressing the jump key will make the Happy Ghast fly directly up
    -   Pressing the sneak key will make the player dismount the Happy Ghast
-   When a player mounts, the goggles on the Happy Ghast go down to cover its eyes, indicating that it now can be controlled
-   Players mounted after the first player piloting the Happy Ghast are placed in slots on each side of it, starting clockwise from the first player
-   Pressing crouch button dismounts the player on top of the Happy Ghast
-   If the Happy Ghast detects players on top of it, it then ceases all movement and aligns to the closest cardinal horizontal direction
-   This happens regardless of it having a Harness equipped or not
-   3rd person camera is moved back when player is mounted on the Happy Ghast
-   When there are no players mounted or walking on the Happy Ghast, the goggles go up and the Happy Ghast starts to roam around the home position
-   If players dismount midair, the Happy Ghast will descend towards the ground before it resumes roaming
-   Cannot enter boats
-   Idles around within 64 blocks from its home position in the similar way as the Ghastling
    -   If wearing a Harness, the Happy Ghast idles closer to the home position (within 32 blocks)
-   The Happy Ghast will try to stay close to blocks when roaming on its own

### Ghast

-   Updated Ghast texture

### Harness items

-   Harness is a new item that can be equipped on a Happy Ghast to allow players to ride it
-   It is 16 new items, one for each color
-   Crafted out of 3 Leather, 2 Glass blocks and 1 Wool block, the Harness will have the same color as the Wool block used when crafting
-   Can be re-dyed
-   Can only be equipped on a Happy Ghast
-   Allows up to 4 players to mount the Happy Ghast
-   Can be removed from the Happy Ghast using Shears but only when no players are mounted

### Advancements

-   Added new "Stay Hydrated!" Husbandry Advancemet when a Dried Ghast Block is placed into Water
-   Added "Heart Transplanter" Adventure Advancement that is unlocked when a player places a Creaking Heart with the correct alignment between two Pale Oak Log blocks

## Experimental Features

-   This snapshot introduces a new experimental Feature Toggle that adds a locator bar to find your friends easily. You must turn on this Feature Toggle in the Experiments Menu when creating a new world if you want to test the locator bar. You can find more information about Feature Toggles [here](https://www.minecraft.net/article/testing-new-minecraft-features/feature-toggles-java-edition).

### Locator Bar

The Locator Bar is an experimental new UI element for players that displays the direction of Waypoints.

-   This experiment allows servers to manage Waypoints and their connections with Players
-   By default, all Players transmit a Waypoint from themselves, and all Players receive all Waypoints; allowing players to locate other players in multiplayer
-   The Locator Bar will display colored indicators when the camera is facing within 120 degrees towards a Waypoint. If a Waypoint is above/below the camera's viewport (the screen) an up/down arrow will display
-   Any Waypoint that is determined to be a Player or Mob that belongs to a Team then the color indicator will match the Team color

#### Player Changes

-   Crouching will hide the player, preventing them from appearing on the Locator Bar of other players
-   Spectators are only visible to other spectators on the Locator Bar

#### Item Changes

-   The following items will hide players when worn in the head slot:
    -   Carved Pumpkin
    -   Skeleton Skull
    -   Wither Skeleton Skull
    -   Player Head
    -   Zombie Head
    -   Creeper Head
    -   Dragon Head
    -   Piglin Head

#### Potion Changes

-   Using a Potion of Invisibility will also hide players from the Locator Bar

#### Game Rules

##### Added `useLocatorBar`

-   Default is enabled for servers running the Locator Bar experiment
-   Toggling to off will remove all existing Waypoints from all players

#### Attributes

##### Added `waypoint_transmit_range` and `waypoint_receive_range`

-   Default: `0.0`, Minimum: `0.0`, Maximum: `60000000.0`
-   Players have a default transmission and receive range of 60,000,000
-   Mobs with a transmission range above zero will send waypoint packets to nearby receivers
-   Similarly, receivers only receive with a range above zero, and cannot receive waypoints outside of this range

#### `waypoint` command

This is a new command for querying and modifying waypoints.

    waypoint list
    
    waypoint modify <entity-selector> color <color>
    waypoint modify <entity-selector> color hex <hex-color>
    waypoint modify <entity-selector> color reset
    waypoint modify <entity-selector> fade <fade_start> <alpha_start> <fade_end> <alpha_end>
    waypoint modify <entity-selector> fade reset
    

Parameters:

-   `entity-selector`: For selecting entities that are transmitting as waypoints (see `waypoint_transmit_range` attribute)
-   `color`: Overrides the Locator Bar icon color for this waypoint
-   `hex <hex-color>` arguments are in web format (RRGGBB)
    -   Red is either `hex F00` or `hex FF0000`
    -   Cornflower blue is `hex 6495ED`
-   `fade`: Set the fade out effect for waypoints
    -   The arguments `<fade_start> <alpha_start> <fade_end> <alpha_end>` handle the starting/ending fade distance & alpha opacity
        -   `*_start` is the nearby values (closest to the player)
        -   `*_end` is the far values (furthest from the player)
    -   `reset` will restore the default behavior of distant Locator Bar icons fading out to 0.2 alpha

## Changes

-   Updated the textures for the Ghast
-   Increased the third-person camera distance when spectating or riding Ghasts, Ender Dragons, and Giants
-   Wolves, Sheep and Pigs now have their legs mirrored
-   Spectators will now teleport together with, but stop spectating, entities that move to other dimensions
-   Rules for when ambient desert blocks sounds play have been tweaked

### Ambient Desert Block Sounds Changes

-   Ambient sand sounds no longer require sky access to play
-   Ambient sand sounds now have a slightly decreased chance to play
-   Terracotta blocks no longer trigger ambient sand sounds
-   Sand blocks no longer trigger ambient wind sounds
-   Terracotta blocks no longer trigger ambient wind sounds
-   Short Dry Grass and Tall Dry Grass can now trigger ambient wind sounds when above 2 Sand, Red Sand or Terracotta blocks
-   Dead Bush ambient sounds now have a slightly increased chance of playing

## Technical Changes

-   The Data Pack version is now 72
-   The Resource Pack version is now 56
-   Pressing F3 + V now prints client-side version information

> **Developer's Note**: _The GUI rendering code is undergoing a significant refactoring in this Snapshot series. The version of it released in this Snapshot is not supposed to be final and will be further iterated upon._

## Data Pack Version 72

-   Dimension Type definitions have a new optional field, `cloud_height` that indicates on what y-level the clouds start in the dimension
-   New `version` command has been added
-   New `datapack create` subcommand has been added

### Commands

#### Added `version`

-   No arguments
-   Prints current version information on server side
-   Available in singleplayer or for server operators

#### Added `datapack create`

-   Creates new empty directory data pack for current world
-   Supported pack version is always equal to one supported by game
-   Available only to server owners
-   Syntax: `datapack create <id> <name>`
    -   `id` - new pack name, must be a valid directory name
    -   `name` - text component to be placed in `description` in `pack.mcmeta`

### Attributes

#### Added `camera_distance`

-   Default value: `4.0`
-   Modifies the distance at which the camera is placed away from the player or spectated entity when in a third-person view
-   If the entity being ridden has a larger `camera_distance` attribute, that distance will be used
-   This distance is multiplied by the `scale` attribute to get a final target camera distance

### Data Components

#### `attribute_modifiers` Item Component

-   Added optional `display` field to `attributes_modifiers` entries
    -   There are 3 `display` types:
        -   `default` - Current behavior of showing the calculated attribute modifier values on the tooltip
        -   `hidden` - Does not show the attribute modifier entry
        -   `override` - Replaces the shown attribute modifier text
            -   Contains a single field `value` for the text contents to show for this attribute modifer entry

### Entity Data

#### `area_effect_cloud`

-   The `Particle` field has been renamed to `custom_particle`, and now always functions as an exact override for the default colored `entity_effect` particle
    -   The field will not be written if no override is specified
    -   The color will no longer be inherited from the potion contents when specifying the `entity_effect` or `tinted_leaves` particle types

### Tags

#### Block Tags

-   Added `#triggers_ambient_desert_dry_vegetation_block_sounds` - blocks that can trigger ambient desert dry vegetation sounds to play from blocks above
-   `#plays_ambient_desert_block_sounds` has been renamed to `#triggers_ambient_desert_sand_block_sounds`

#### Item Tags

-   Added `#happy_ghast_food` - items that can be used to feed Happy Ghasts
-   Added `#happy_ghast_tempt_items` - items that can be used to tempt Happy Ghasts

#### Entity Tags

-   Added `#can_equip_harness` - entities that can equip the Harness items
-   Added `#followable_friendly_mobs` - non-baby entities that will be followed by Baby Happy Ghasts

## Resource Pack Version 56

-   The game will now consistently respect `blur` texture parameter in `.png.mcmeta` files

### Sound Events

-   `block.sand.wind` has been renamed to `block.dry_grass.ambient`

### Sounds

-   Changed location on the sounds for glow squid, squid, guardian, horse, rabbit and pufferfish from `entity` folder to the `mob` folder

### Equipment Assets

-   Added new `happy_ghast_body` layer type, rendering in the body slot of the Happy Ghast

## Fixed bugs in 25w15a

-   [MC-147260](https://bugs.mojang.com/browse/MC-147260) Map icons are not displayed in the cartography table
-   [MC-191306](https://bugs.mojang.com/browse/MC-191306) Sounds played using /playsound are played in all dimensions
-   [MC-266318](https://bugs.mojang.com/browse/MC-266318) Trapdoors and doors have inconsistent subtitles for being opened and closed
-   [MC-275374](https://bugs.mojang.com/browse/MC-275374) Drowneds with CanBreakDoors:1b don't break doors
-   [MC-276264](https://bugs.mojang.com/browse/MC-276264) Advancement screen shadow renders below item icons
-   [MC-277992](https://bugs.mojang.com/browse/MC-277992) 1 color in the pale chest boat item is incorrect
-   [MC-278466](https://bugs.mojang.com/browse/MC-278466) Bundle experiment data pack related strings are not in deprecated.json
-   [MC-278873](https://bugs.mojang.com/browse/MC-278873) The data fixer regenerates chunks containing items obtained from flower pots using Ctrl + Pick Block before version 1.13, or it crashes the game if the item is in the player's inventory
-   [MC-280047](https://bugs.mojang.com/browse/MC-280047) Temperate cows use their 1.14 texture with the Programmer Art resource pack enabled
-   [MC-280266](https://bugs.mojang.com/browse/MC-280266) Firefly bushes don't produce as many, or as constant, amounts of particles as on Bedrock Edition
-   [MC-280268](https://bugs.mojang.com/browse/MC-280268) Blazes and breezes use "large" spawn eggs despite mobs of a similar size using "medium"
-   [MC-280471](https://bugs.mojang.com/browse/MC-280471) The Particle.color field in area effect clouds is read-only
-   [MC-293619](https://bugs.mojang.com/browse/MC-293619) The chicken spawn egg texture in Programmer Art is missing pixels that match the inventory slot background color
-   [MC-295681](https://bugs.mojang.com/browse/MC-295681) Leaf litter can generate inside of woodland mansions
-   [MC-295850](https://bugs.mojang.com/browse/MC-295850) Done and Cancel buttons on the world creation Edit Game Rules screen do the same thing
-   [MC-295866](https://bugs.mojang.com/browse/MC-295866) The /setblock and /fill commands no longer update redstone power in some situations
-   [MC-295867](https://bugs.mojang.com/browse/MC-295867) Structures from previous versions fail with DataFixerUpper
-   [MC-296035](https://bugs.mojang.com/browse/MC-296035) Two pixels from "mooshroom\_spawn\_egg" are the same as "cow\_spawn\_egg"
-   [MC-296624](https://bugs.mojang.com/browse/MC-296624) Old Brown Mooshroom texture is missing from Programmer Art
-   [MC-297537](https://bugs.mojang.com/browse/MC-297537) Extra "entity.wolf\_whine.whine" sound event exists in sounds.json

---

It's time for a new Minecraft snapshot! We've got some more under-the-hood updates including a `tntExplodes` game rule previously found in Bedrock edition, new features in SNBT syntax, and allowing all entities to store custom data. We also have some more bug fixes coming your way.

You can now also enjoy a new main menu background, happy mining!

## Changes

-   The Sheep wool texture has been tweaked to remove the stark line at the back
-   Blocks that are broken by a Piston now play their breaking sound
-   Updated the menu panorama for the first Game Drop of the year
-   The textures of Test Blocks and Test Instance Blocks have been updated
-   Cactus Flowers can now be placed on Farmland

## Technical Changes

-   The Data Pack version is now 70
-   The Resource Pack version is now 54

## Data Pack Version 70

-   All entities can now store custom data
-   Unified format and functionality of predicates for components on Entities and Block Entities
-   New operations for SNBT
-   Added new `tntExplodes` Game Rule
-   Added `#flowers` item tag - corresponding item tag for the already existing `#flowers` block tag

### Entity Data

-   Custom data (previously present only on Marker) is now available on all entities
    -   It's exposed as a `minecraft:custom_data` component, so it can be set by spawning items and matched by predicates
    -   The component is currently stored in a field called `data`, which will be changed in the future when more proper storage for entity components is introduced
    -   It's stored only if it's non-empty

### Entity Predicates

-   A new optional field has been added to entity predicates: `predicates`
    -   Its functionality and format is identical to the field `predicates` on item predicates, but they operate on entity components
        -   When present, `predicates` will match partial contents of entity components

### Block Predicates

-   New optional fields have been added to block predicates: `components` and `predicates`
-   Their functionality and format are identical to the fields `components` and `predicates` on item predicates, but they operate on block entity components (when present)
    -   When present, `components` will match exact contents of block entity components
    -   When present, `predicates` will match partial contents of block entity components

### SNBT Format

-   To simplify input of data and macro use, SNBT now also supports following operations:
    -   `bool(arg)` - converts argment to boolean
        -   if argument is a boolean value, returns value directly
        -   if argument is a number value, returns `true` if it is non-zero
    -   `uuid(str)` - converts string representation of UUID to integer array
-   Implicit infinite float values (like `1e1000`) are now rejected

### `tntExplodes` Game Rule

-   When `false`, TNT will not explode and cannot be primed
-   Default value: `true`

## Resource Pack Version 54

-   "Global" uniforms may now be defined in any shader, and the game will attempt to fill it
    -   Currently, these are: `ModelViewMat`, `ProjMat`, `TextureMat`, `ScreenSize`, `ColorModulator`, `Light0_Direction`, `Light1_Direction`, `GlintAlpha`, `FogStart`, `FogEnd`, `FogColor`, `FogShape`, `LineWidth`, `GameTime`, `ModelOffset`
    -   The type of the uniform must match what it would normally be, or it'll be undefined behavior

## Fixed bugs in 25w10a

-   [MC-269386](https://bugs.mojang.com/browse/MC-269386) Flow Pottery Sherd is not in the correct spot in the creative inventory
-   [MC-270043](https://bugs.mojang.com/browse/MC-270043) Reduced armor glint applies to tridents
-   [MC-279920](https://bugs.mojang.com/browse/MC-279920) Beacons play the deactivation sound every game tick while on the death screen
-   [MC-279967](https://bugs.mojang.com/browse/MC-279967) Temperate cows have strange mapping/harsh borders because of the leg texture becoming mirrored
-   [MC-279993](https://bugs.mojang.com/browse/MC-279993) Baby cows' heads are incorrectly positioned
-   [MC-280050](https://bugs.mojang.com/browse/MC-280050) The mule saddle texture is missing in the Programmer Art resource pack
-   [MC-280061](https://bugs.mojang.com/browse/MC-280061) Test instance block has flipped lighting direction
-   [MC-280063](https://bugs.mojang.com/browse/MC-280063) crafting\_transmute recipes don't give an output if the output stack has the same count as the stack in the crafting grid
-   [MC-280106](https://bugs.mojang.com/browse/MC-280106) Cactus flowers cannot be held by endermen
-   [MC-280109](https://bugs.mojang.com/browse/MC-280109) Leash all frog variants advancement is not deterministic in data generation
-   [MC-280113](https://bugs.mojang.com/browse/MC-280113) Shears no longer consume durability when used on insta-mined blocks
-   [MC-280143](https://bugs.mojang.com/browse/MC-280143) Monster spawner and trial spawner tooltip no longer displays the "Interact with Spawn Egg" hint
-   [MC-280159](https://bugs.mojang.com/browse/MC-280159) New cow model does not match Bedrock Edition
-   [MC-280242](https://bugs.mojang.com/browse/MC-280242) Not all ambient sounds have been moved to the "Ambient/Environment" category
-   [MC-280244](https://bugs.mojang.com/browse/MC-280244) Temperate cow model in Java does not have its new horn placement from Bedrock Edition
-   [MC-280285](https://bugs.mojang.com/browse/MC-280285) Some game events can crash the game when attempting to create vibration resonance with an amethyst block
-   [MC-280315](https://bugs.mojang.com/browse/MC-280315) Crash when listing suggestions with invalid Unicode escapes
-   [MC-280325](https://bugs.mojang.com/browse/MC-280325) The player hand flickers in first-person mode
-   [MC-280337](https://bugs.mojang.com/browse/MC-280337) Slimes freeze the game
-   [MC-280360](https://bugs.mojang.com/browse/MC-280360) The game stops updating frames while loading chunks
-   [MC-280379](https://bugs.mojang.com/browse/MC-280379) Frozen screen when entering any UI or after a few minutes of playing
-   [MC-280383](https://bugs.mojang.com/browse/MC-280383) Items in inventories sometimes do not render
-   [MC-280423](https://bugs.mojang.com/browse/MC-280423) Block textures flicker randomly
-   [MC-280439](https://bugs.mojang.com/browse/MC-280439) Values out of bounds for float and double parse successfully in SNBT resulting in storing the value Infinity

---

Back so soon! We're releasing a second snapshot this week, following frequently occurring issues in yesterday's snapshot.

Happy mining!

## Fixed bugs in 25w09b

-   [MC-280302](https://bugs.mojang.com/browse/MC-280302) Text does not render in menus until entering a world
-   [MC-280303](https://bugs.mojang.com/browse/MC-280303) Game crashes when trying to render a warden
-   [MC-280305](https://bugs.mojang.com/browse/MC-280305) GUI elements incorrectly overlap on macOS
-   [MC-280308](https://bugs.mojang.com/browse/MC-280308) Crash from GL error when opening world
-   [MC-280310](https://bugs.mojang.com/browse/MC-280310) The game crashes near a Trial Chamber
-   [MC-280322](https://bugs.mojang.com/browse/MC-280322) Game crashes when trying to render a breeze
-   [MC-280324](https://bugs.mojang.com/browse/MC-280324) Game crashes when entering the end from the nether
-   [MC-280329](https://bugs.mojang.com/browse/MC-280329) Game sometime crashes when saving world
-   [MC-280334](https://bugs.mojang.com/browse/MC-280334) The Report Player screen is broken
-   [MC-280346](https://bugs.mojang.com/browse/MC-280346) The loading screen initially appears black and only changes to red at the end

---

In this week's snapshot, we are bringing a long-awaited feature into parity as fallen trees are making their debut in Java Edition. Additionally, firefly bushes can now generate in mangrove swamps and rarely in badlands.

On the technical side, SNBT syntax in commands has been expanded and improved, including fixing bugs related to SNBT text components preventing escapes from working.

## New Features

-   Added fallen trees to be in parity with Bedrock Edition

### Fallen Trees

-   Fallen trees are a new decorative variant of trees
-   Fallen trees come in four different wood type variants:
    -   Oak
    -   Birch
    -   Jungle
    -   Spruce
-   Birch fallen trees can come in a shorter version or a longer version
-   Some fallen trees can be decorated with mushroom or vines
-   Fallen trees can be found in all biomes where their standing tree variant grow, except the following:
    -   Meadow
    -   Bamboo Jungle
    -   River
    -   Grove
    -   Flower Forest has fallen birch trees but not fallen oak trees

## Changes

### Leaf Litter

-   Leaf Litter is now replaceable by other blocks

### Firefly Bush

-   The Firefly Bush can now generate near water in Mangrove Swamps and Badlands (very rarely), like other biomes with water

## Technical Changes

-   The Data Pack version is now 69
-   New command line argument `--renderDebugLabels` is available for the client
    -   Adds debug labels to relevant OpenGL objects, making debugging rendering easier for developers

## Data Pack Version 69

-   Object notation used in commands for NBT, text components and inline predicates (a.k.a. SNBT) has been extended

### Commands

-   `/data` can now create and modify heterogeneous lists transparently

### Entity Data

-   The `FallFlying` field will no longer be preserved if removed
-   The `Health` and `Air` fields now default to their respective maximum value if not specified

#### `area_effect_cloud`

-   The `Duration` field now defaults to `-1` if not specified
-   If the `Duration` field is `-1`, the Area Effect Cloud will never run out
-   This means that an Area Effect Cloud summoned with no duration specified will no longer immediately disappear

#### `creeper`

-   The `Fuse` field now defaults to `30` if not specified
-   The `ExplosionRadius` field now defaults to `3` if not specified

#### `dolphin`

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

-   The `ItemDropChance` field now defaults to `1.0` if not specified

#### `primed_tnt`

-   The `fuse` field now defaults to `80` if not specified
-   The `explosion_power` field now defaults to `4` if not specified

#### `shulker`

-   The `Color` field now defaults to `16` (no color) if not specified

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

#### `trader_llama`

-   The `DespawnDelay` field now defaults to `47999`

#### `villager`

-   The `FoodLevel` and `Xp` fields now default to `0` if not specified
-   The `ConversionTime` field will no longer be preserved when removed

#### `wandering_trader`

-   The `DespawnDelay` field now defaults to `0` if not specified

#### `zombie`

-   The `DrownedConversionTime` field will no longer be preserved when removed

#### `zombie_villager`

-   The `Xp` field now defaults to `0` if not specified
-   The `ConversionTime` field will no longer be preserved when removed

#### `arrow`, `spectral_arrow`, `trident`

-   The `damage` field now defaults to `2` if not specified

#### `dragon_fireball`, `wind_charge`, `breeze_wind_charge`, `wither_skull`, `small_fireball`, and `large_fireball`

-   The `acceleration_power` field now defaults to `0.1` if not specified

#### `small_fireball` and `large_fireball`

-   The `ExplosionPower` field now defaults to `1` if not specified

#### `block_display`, `item_display`, and `text_display`

-   The `interpolation_duration`, `teleport_duration`, and `start_interpolation` fields now default to `0` if not specified
-   The `view_range` field now defaults to `1` if not specified
-   The `shadow_radius` field now defaults to `0` if not specified
-   The `shadow_strength` field now defaults to `1` if not specified
-   The `width` and `height` fields now default to `0` if not specified

### Block Entity Data

#### `campfire`

-   The `CookingTimes` and `CookingTotalTimes` fields will no longer be preserved when removed

#### `chiseled_bookshelf`

-   The `last_interacted_slot` field now defaults to `-1` if not specified

#### `hopper`

-   The `TransferCooldown` field now default to `-1` if not specified

#### `jigsaw`

-   The `name`, `target`, and `pool` fields now default to `minecraft:empty` if not specified
-   The `final_state` field now defaults to `minecraft:air` if not specified

#### `sculk_shrieker`

-   The `warning_level` field now defaults to `0` if not specified

#### `structure_block`

-   The `ignoreEntities` and `showboundingbox` fields now default to `true` if not specified
-   The `posY` field now defaults to `1` if not specified

### NBT changes

-   Any interface with NBT data within the game (SNBT representation, `/data`) now supports heterogeneous lists, i.e. ones where elements are not of the same type
    -   Inserting or replacing into a list of a different type with `/data` will no longer give an error
    -   Inserting into an array type (e.g. `[I;1,2,3]`) is still type-restricted
    -   This means that the 'wrapper' objects previously used to represent heterogeneous lists will no longer be observable by in-game means
-   `/data` can no longer traverse paths with an empty key (e.g. `/data get ... foo.''.bar`)
-   The NBT file format is unchanged:
    -   Heterogeneous lists are transformed before storage to bypass NBT constraints
    -   Example transform: `['a', {'b':3}]` is stored as `[{'':'a'},{'b':3}]`
    -   Existing external tools will still be able to read NBT files as before, but heterogeneous lists will be displayed in the transformed form
-   No data produced by the game has changed: objects such as Text Components were already producing heterogeneous lists in this form
-   Note: these wrapper objects may never be observed in-game, they are only relevant to developers working with the NBT file or network format directly

### SNBT Changes

-   The text format for describing object-like data in commands (like NBT, text components, predicates, etc.) has been extended

#### Number Format

-   Either whole or fraction parts of a float number can be omitted
    -   Examples: `.1` and `1.` are valid now
-   Float numbers now use E notation
    -   Example: both `1.2e3` and `1.2E3`, `1.2E+3`, `12000e-1` are now a valid way to represent `1200.0`
-   Integer numbers can now be prefixed with `0x` to represent hexadecimal numbers and `0b` to represent binary numbers
    -   Example: `0xbad` (equal to `2989`), `0xCAFE` (equal to `51966`), `0b101` (equal to `5`)
-   Integer numbers now can't start with `0`
    -   Normally it would mean number is in base-8, but we are restricting it to avoid accidental use
-   Numbers can now contain `_` character between sequences of digits (but not at the start or the end of sequence)
    -   Example: `0b10_01`, `0xAB_CD`, `1_2.3_4__5f`, `1_2e3_4`
-   `NaN`, `Inf` or hexadecimal float representation are NOT supported
-   Type suffixes have been extended:
    -   Integer type suffixes (`b` or `B` - byte, `s` or `S` - short, `i` or `I` - integer, `l` or `L`) can now be prefixed with `s` (signed) or `u` unsigned
    -   New suffixes only affect valid range when parsing - values are still stored as signed
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

#### Number arrays

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

## Fixed bugs in 25w09a

-   [MC-168262](https://bugs.mojang.com/browse/MC-168262) Dead bushes cannot be placed on farmland
-   [MC-236100](https://bugs.mojang.com/browse/MC-236100) End crystal beam appears to be black
-   [MC-276861](https://bugs.mojang.com/browse/MC-276861) The player can sometimes teleport through blocked end portals when moving very fast
-   [MC-279229](https://bugs.mojang.com/browse/MC-279229) SNBT text components prevent \\n and \\t from working
-   [MC-279236](https://bugs.mojang.com/browse/MC-279236) Flying into water with an elytra puts the player into an erroneous state
-   [MC-279250](https://bugs.mojang.com/browse/MC-279250) SNBT text components prevent unicode escapes from working
-   [MC-279252](https://bugs.mojang.com/browse/MC-279252) Changing a single line of a sign with /data is no longer possible in some situations
-   [MC-279278](https://bugs.mojang.com/browse/MC-279278) Strafing twice in rapid succession while walking forward causes player to sprint
-   [MC-279928](https://bugs.mojang.com/browse/MC-279928) Beacon beam clips into beacon block when far enough away
-   [MC-279932](https://bugs.mojang.com/browse/MC-279932) Beacon beam disappears and reappears when approaching it
-   [MC-279942](https://bugs.mojang.com/browse/MC-279942) Beacon beam can render over fog when outside render distance
-   [MC-279947](https://bugs.mojang.com/browse/MC-279947) Snout of the new cow model is offset vertically by 0.1 pixels
-   [MC-280022](https://bugs.mojang.com/browse/MC-280022) Players can be lit by lava while stepping onto solid blocks next to it
-   [MC-280033](https://bugs.mojang.com/browse/MC-280033) Beacon beams render beyond client render distance
-   [MC-280121](https://bugs.mojang.com/browse/MC-280121) Leaf litter can be placed on walls and fences
-   [MC-280123](https://bugs.mojang.com/browse/MC-280123) Short dry grass and tall dry grass aren't randomly offset, unlike similar blocks
-   [MC-280155](https://bugs.mojang.com/browse/MC-280155) Random ticks can cause entity build-up in lazy chunks
-   [MC-280170](https://bugs.mojang.com/browse/MC-280170) Goats can no longer ram armor stands unless the game rule mobGriefing is set to false
-   [MC-280211](https://bugs.mojang.com/browse/MC-280211) End crystal beams cause OpenGL errors with glDebugVerbosity set to 3

---

