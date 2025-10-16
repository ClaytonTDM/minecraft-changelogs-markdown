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
-   [MC-86455](https://bugs.mojang.com/browse/MC-86455) Pick-block creates ghost