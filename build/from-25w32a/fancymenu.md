# Minecraft Snapshot 25w32a

Another Tuesday, another Snapshot release! Alongside technical updates and bug fixes, this week we're introducing a copper-y collection of goodies from our third game drop of the year: Build with copper torches, lanterns, chains, and bars – and watch them develop that stunning signature patina. With this week's release, you'll also find that items displayed in shelves have learned the noble art of sitting down.

Happy mining!

## New Features

-   Added Copper Decorations

### Copper Decorations

-   Added Copper Torch
    -   A green variant of the Torch crafted from a Copper Nugget, Coal, and Stick
    -   Functionally identical to the Torch
-   Added Copper Bars
    -   Functions like the existing Iron Bars block
    -   Made from copper and oxidizes over time
-   Added Copper Chain
    -   Functions like the existing Chain block (now renamed to Iron Chain)
    -   Made from copper and oxidizes over time
-   Added Copper Lantern
    -   Crafted similarly to a regular Lantern but uses Copper and a Copper Torch
    -   The lantern itself oxidizes, changing its look as it ages
    -   Functionally identical to the Lantern

## Changes

-   The Chain block has been renamed to "Iron Chain"

### Minor Tweaks to Blocks, Items and Entities

-   Items on the Shelf have been repositioned to sit on the Shelf
-   All Copper Golem Statues now always drop as item when mined
-   All Copper Golem Statues now pop off as an item when pushed by a piston

### Recipes

-   Changed the Copper Trapdoor recipe to use 4 Copper Ingots instead of 6

## Technical Changes

-   The Data Pack version is now 83.0
-   The Resource Pack version is now 65.1
-   Added a way to use GUI and item sprites in text

## Data Pack Version 83.0

### Entity Data

**`copper_golem`**

-   The `weather_state` field now expects a string id instead of integer id
    -   `0` -> `unaffected`
    -   `1` -> `exposed`
    -   `2` -> `weathered`
    -   `3` -> `oxidized`

### Text rendering

**`object` Text Component**

-   New text component with type `object` has been added
-   This component will display a single sprite from sprite atlas as a character
-   Sprites are always rendered as a rectangle, 8x8 pixels in size
-   Format:
    -   `atlas` - namespaced ID of a sprite atlas, default value: `minecraft:blocks`
    -   `sprite` - namespaced ID of a sprite in atlas, for example `item/porkchop`

General note about atlas contents:

-   Sprite Atlases contain textures for items, blocks, mob effects, GUI elements, etc.
-   Contents are controlled by files in `assets/minecraft/atlases/` directory in a resource pack
-   Current contents can be reviewed with the F3+S key combination

### Loot Tables

-   Added `harvest/sweet_berry_bush` loot table for drops when a Sweet Berry Bush with Sweet Berries is harvested by interacting with it

### Tags

**Block Tags**

-   Added `#chains` - all Chain blocks
-   Added `#lanterns` - all Lantern blocks
-   Added `#bars` - all Bar blocks

**Item Tags**

-   Added `#chains` - all Chain block items
-   Added `#lanterns` - all Lantern block items
-   Added `#bars` - all Bar block items

## Resource Pack Version 65.1

### Block Sprites

Added new block sprites:

-   `copper_bars`
-   `copper_chain`
-   `copper_lantern`
-   `copper_torch`
-   `exposed_copper_bars`
-   `exposed_copper_chain`
-   `exposed_copper_lantern`
-   `exposed_copper_torch`
-   `oxidized_copper_bars`
-   `oxidized_copper_chain`
-   `oxidized_copper_lantern`
-   `oxidized_copper_torch`
-   `weathered_copper_bars`
-   `weathered_copper_chain`
-   `weathered_copper_lantern`
-   `weathered_copper_torch`

### Item Sprites

Added new item sprites:

-   `copper_chain`
-   `copper_lantern`
-   `exposed_copper_chain`
-   `exposed_copper_lantern`
-   `oxidized_copper_chain`
-   `oxidized_copper_lantern`
-   `weathered_copper_chain`
-   `weathered_copper_lantern`

### Particles

Added new particle:

-   `copper_fire_flame`

## Fixed bugs in 25w32a

-   [MC-163218](https://bugs.mojang.com/browse/MC-163218) Players with the Sneak option set to "Toggle" can sneak while in GUIs
-   [MC-174759](https://bugs.mojang.com/browse/MC-174759) Dragon eggs can be teleported to a height below void
-   [MC-257540](https://bugs.mojang.com/browse/MC-257540) Sheep eat half as often as they did before 21w39a
-   [MC-273943](https://bugs.mojang.com/browse/MC-273943) Sweet berries drop from harvested bushes is hardcoded
-   [MC-276431](https://bugs.mojang.com/browse/MC-276431) Dragon egg teleports above the build height limit and deletes itself
-   [MC-279548](https://bugs.mojang.com/browse/MC-279548) TNT minecart does not remember ignition source when exploding from a fall
-   [MC-295841](https://bugs.mojang.com/browse/MC-295841) Interactive collision check path is broken
-   [MC-296054](https://bugs.mojang.com/browse/MC-296054) Fast non-projectile entity movements may fail to apply block effects from blocks around the starting position when moving in positive directions
-   [MC-296055](https://bugs.mojang.com/browse/MC-296055) Slow non-projectile entity movements may fail to apply block effects from origin block
-   [MC-296057](https://bugs.mojang.com/browse/MC-296057) Sideways non-projectile movements may fail to apply block effects from blocks around start of sideways motion
-   [MC-296372](https://bugs.mojang.com/browse/MC-296372) Teleport duration is unreliable as of 1.21.5
-   [MC-299314](https://bugs.mojang.com/browse/MC-299314) Breaking jukeboxes in certain ways doesn't stop the music
-   [MC-299627](https://bugs.mojang.com/browse/MC-299627) Entity interpolation for high speed projectiles is wildly inaccurate
-   [MC-299770](https://bugs.mojang.com/browse/MC-299770) Chunks loaded by ender pearls permanently unload upon player death even when enderPearlsVanishOnDeath is set to false
-   [MC-299837](https://bugs.mojang.com/browse/MC-299837) Running two or more /rotate commands in the same tick only applies the rotation of the last command
-   [MC-299872](https://bugs.mojang.com/browse/MC-299872) The freezing overlay flashes when a freezing player touches fire
-   [MC-299913](https://bugs.mojang.com/browse/MC-299913) The "You don't seem to have a Realm..." focusable text widget now has a black background
-   [MC-300051](https://bugs.mojang.com/browse/MC-300051) The top part of worn leggings does not render
-   [MC-300092](https://bugs.mojang.com/browse/MC-300092) F3 pie chart particle entries are missing names
-   [MC-300094](https://bugs.mojang.com/browse/MC-300094) Entities' held items no longer follow their arm movements when they have the invisibility effect
-   [MC-300100](https://bugs.mojang.com/browse/MC-300100) The “biome” debug option no longer has a space before its biome name
-   [MC-300105](https://bugs.mojang.com/browse/MC-300105) The player can drown while the game is paused
-   [MC-300108](https://bugs.mojang.com/browse/MC-300108) Villagers' and zombie villagers' clothes are incomplete
-   [MC-300113](https://bugs.mojang.com/browse/MC-300113) pack.mcmeta no longer accepts the longform object syntax in the supported;;_;;formats field
-   [MC-300121](https://bugs.mojang.com/browse/MC-300121) Interacting with a group of more than 3 connected shelves causes the game to crash
-   [MC-300122](https://bugs.mojang.com/browse/MC-300122) Certain parts of horse armor are sometimes invisible
-   [MC-300131](https://bugs.mojang.com/browse/MC-300131) The "debug.entry.currently.inF3" string is improperly capitalized
-   [MC-300136](https://bugs.mojang.com/browse/MC-300136) Held item positions are synchronized between entities of the same model in view
-   [MC-300145](https://bugs.mojang.com/browse/MC-300145) Players can use items while their inventories are open when the “Use Item/Place Block” option is set to “Toggle”
-   [MC-300146](https://bugs.mojang.com/browse/MC-300146) Exiting interfaces is incredibly difficult when the “Use Item/Place Block” option is set to “Toggle”
-   [MC-300153](https://bugs.mojang.com/browse/MC-300153) The inner cubes of slimes are sometimes invisible from the outside
-   [MC-300155](https://bugs.mojang.com/browse/MC-300155) Players can freeze while standing in powder snow despite the game being paused
-   [MC-300164](https://bugs.mojang.com/browse/MC-300164) The value of the "Sprint Window" option is not saved
-   [MC-300165](https://bugs.mojang.com/browse/MC-300165) Players are damaged when blocking attacks with shields that disable shields
-   [MC-300166](https://bugs.mojang.com/browse/MC-300166) When looking;;_;;at;;_;;block or looking;;_;;at;;_;;fluid is enabled in the debug options, FPS is impacted by server tick rate
-   [MC-300168](https://bugs.mojang.com/browse/MC-300168) All shelf variants are in the redstone section of the creative inventory
-   [MC-300180](https://bugs.mojang.com/browse/MC-300180) Debug screen text now stays on the screen in F1
-   [MC-300187](https://bugs.mojang.com/browse/MC-300187) Interacting with items with certain components in the inventory causes a crash
-   [MC-300193](https://bugs.mojang.com/browse/MC-300193) Dying and respawning within the same dimension consistently shows a loading terrain screen
-   [MC-300196](https://bugs.mojang.com/browse/MC-300196) Local Difficulty debug information flickers if it is open while GUI is hidden
-   [MC-300214](https://bugs.mojang.com/browse/MC-300214) The shadows of baby mobs are now of the same size as those of their adult counterparts
-   [MC-300235](https://bugs.mojang.com/browse/MC-300235) First number in E counter is always stuck at 0
-   [MC-300248](https://bugs.mojang.com/browse/MC-300248) Subtitles/closed captions obstruct the inventory UI
-   [MC-300275](https://bugs.mojang.com/browse/MC-300275) Pausing while riding a strider on top of lava sets the player on fire
-   [MC-300305](https://bugs.mojang.com/browse/MC-300305) When multiple people use fishing rods, an additional black line is drawn
-   [MC-300340](https://bugs.mojang.com/browse/MC-300340) Continuously clicking "Continue" on the welcome page resets the button disappearance animation progress
-   [MC-300394](https://bugs.mojang.com/browse/MC-300394) Oxidized/waxed oxidized copper golems, statue and entity versions, have the wrong pixels underneath their feet compared to their other counterparts
-   [MC-300421](https://bugs.mojang.com/browse/MC-300421) Inconsistent capitalization for F3+F5 description in F3+Q debug menu
-   [MC-300440](https://bugs.mojang.com/browse/MC-300440) Elytra consumes durability while the game is paused in singleplayer
-   [MC-300464](https://bugs.mojang.com/browse/MC-300464) The debug crosshair is rendered in third person

---

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

**Copper Golem Item Sorting**

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

**Debug Screen**

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

**Pack Metadata**

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

**`blocks_attacks` Item Component**

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

**Density Functions**

**Added `minecraft:find_top_surface`**

-   Approximates the topmost surface of a given density function
-   It scans from an upper bound to a lower bound to find the point at which the density changes from negative to positive
    -   The upper bound should be as close to the actual surface for best performance
    -   The upper bound should never be lower than the actual surface

Fields:

-   `density` - density function to approximate the surface of
-   `upper_bound` - 2D density function providing the highest possible y-value
-   `lower_bound` - integer, lowest possible y-value
-   `cell_height` - positive integer defining the grid resolution on which to scan

**Added `minecraft:invert`**

-   Resolves to `1/argument`

Fields:

-   `argument` - density function

**Jigsaw Structures**

-   The `max_distance_from_center` field may now specify a different restriction on the vertical axis from horizontal
    -   This can be specified by an object with fields:
        -   `horizontal` - required integer between `1` and `128`
        -   `vertical` - optional integer between `1` and `4096` (default: `4096`)
        -   e.g: `"max_distance_from_center": { "horizontal": 20, "vertical": 500 }`
    -   The previous format of a single inline value specifying both horizontal and vertical distance is still supported

### Tags

**Block Tags**

-   Added `#copper_chests` - all Copper Chest blocks
-   Added `#copper` - all Copper blocks
-   Added `#incorrect_for_copper_tool` - all blocks which will not drop items with a copper tool
-   Added `#copper_golem_statues` - all Copper Golem Statue blocks

**Item Tags**

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

**Sound Events**

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

**Changes to Full Screen Passes**

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

# 1.21.8 Release Candidate 1

Hotfix coming in ho-... very cold? Today we're releasing 1.21.8 Release Candidate 1, addressing various graphical corruption and freeze issues on certain graphics devices.

As always, if you encounter any graphical issues with this Release Candidate, reports on our [Bug Tracker](https://bugs.mojang.com/projects/MC/summary) are very much appreciated!

Happy Crafting!

## Fixed bugs in 1.21.8 Release Candidate 1

-   [MC-295947](https://bugs.mojang.com/browse/MC-295947) The game screen freezes after a while on some Intel integrated graphics
-   [MC-296107](https://bugs.mojang.com/browse/MC-296107) Entities and block entities become visually corrupted after a while on some Intel integrated graphics
-   [MC-296908](https://bugs.mojang.com/browse/MC-296908) Text and texture atlases become visually corrupted after a while on some Intel integrated graphics
-   [MC-297784](https://bugs.mojang.com/browse/MC-297784) Entities are shaded incorrectly after a while on Intel graphics of Gen11 architecture
-   [MC-298903](https://bugs.mojang.com/browse/MC-298903) Items in the inventory can turn into a solid color and then disappear and text can render colored while on some Intel integrated graphics
-   [MC-298908](https://bugs.mojang.com/browse/MC-298908) Items in the inventory are lit as if from the opposite direction on some Intel integrated graphics
-   [MC-299144](https://bugs.mojang.com/browse/MC-299144) Crash with AMD graphics card when loading Resource Pack with invalid shader

---

# Minecraft 1.21.7 Release Candidate 2

Hey! We had to fix some more bugs today! Here is Release Candidate 2 for Minecraft: Java Edition 1.21.7.

## Technical Changes

-   The Data Pack version is now 81
-   The Resource Pack version is now 64

## Fixed bugs in 1.21.7 Release Candidate 2

-   [MC-298879](https://bugs.mojang.com/browse/MC-298879) The game crashes upon startup on some AMD graphics
-   [MC-299110](https://bugs.mojang.com/browse/MC-299110) Force upgrading does not write new DataVersion to converted data
-   [MC-299126](https://bugs.mojang.com/browse/MC-299126) The server crashes when certain mobs ride a turtle
-   [MC-299130](https://bugs.mojang.com/browse/MC-299130) Pack formats were not incremented in 1.21.7 rc1 after breaking changes

---

# Minecraft 1.21.7 Release Candidate 1

Today we are shipping Release Candidate 1 for 1.21.7, a hotfix release that takes care of some critical issues that managed to sneak their way into the Chase the Skies drop (1.21.6). The hotfix also includes a new music disc and a painting of the good boy Dennis. If no other critical issues are found, this will be the version for 1.21.7 that can be expected to be released soon. Happy mining!

## New Features

-   Added a painting of a good boy by artist Sarah Boeving
-   Added music disc "Lava Chicken" by Hyper Potions
    -   Drops when defeating a Baby Zombie riding a Chicken (Chicken Jockey)

## Fixed bugs in 1.21.7 Release Candidate 1

-   [MC-297748](https://bugs.mojang.com/browse/MC-297748) The moon is rendered incorrectly on some Qualcomm graphics
-   [MC-298448](https://bugs.mojang.com/browse/MC-298448) Filled maps are rendered incorrectly on some Qualcomm graphics
-   [MC-298681](https://bugs.mojang.com/browse/MC-298681) Text displays with the "shadow" tag enabled and the "see;;_;;through" tag disabled exhibit z-plane fighting at a close distance
-   [MC-298710](https://bugs.mojang.com/browse/MC-298710) TTF glyphs are incorrectly rendered over some elements
-   [MC-298832](https://bugs.mojang.com/browse/MC-298832) The breaking particles of droppers and dispensers facing up or down appear incorrect on some Qualcomm graphics
-   [MC-298856](https://bugs.mojang.com/browse/MC-298856) Blindness and darkness fog effects no longer work underwater
-   [MC-298898](https://bugs.mojang.com/browse/MC-298898) TextureAtlas leaks textures after resource reload
-   [MC-298919](https://bugs.mojang.com/browse/MC-298919) Sometimes you pass through the happy ghast when you get off while going forward
-   [MC-299017](https://bugs.mojang.com/browse/MC-299017) Text on glowing signs is not visible on some graphics
-   [MC-299071](https://bugs.mojang.com/browse/MC-299071) Memory Leak in ItemStackRenderState leads to OutOfMemoryError

---

