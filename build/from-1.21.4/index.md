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

Coming in hot with a hotfix, here's Minecraft 1.21.3 with a fix for a critical issue affecting Realms with Resource Packs enabled.

This version also fixes an upgrade problem with all Salmon turning small. This version will upgrade any small Salmon from previous versions into medium variants, including any from 1.21.2.

## Fixed bugs in 1.21.3

-   [MC-277791](https://bugs.mojang.com/browse/MC-277791) - Attempting to join a Realm with a Resource Pack enabled fails with an error
-   [MC-277779](https://bugs.mojang.com/browse/MC-277779) - Salmon from 1.21.1 or before shrink when updating to 1.21.2

---

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

It will soon be time for new snapshots, but before that: we are now releasing Minecraft 1.21.1. This is a hotfix version that addresses some critical exploits.

We highly recommend that server owners upgrade to this version. Players on Minecraft 1.21 will be able to join servers running on 1.21.1.

## Changes

-   Fixed critical exploits that could be used to crash servers
-   Added language support for Tzotzil and Belarusian (Latin)

---

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

