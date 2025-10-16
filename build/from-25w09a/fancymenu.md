# Minecraft Snapshot 25w09a

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

**`area_effect_cloud`**

-   The `Duration` field now defaults to `-1` if not specified
-   If the `Duration` field is `-1`, the Area Effect Cloud will never run out
-   This means that an Area Effect Cloud summoned with no duration specified will no longer immediately disappear

**`creeper`**

-   The `Fuse` field now defaults to `30` if not specified
-   The `ExplosionRadius` field now defaults to `3` if not specified

**`dolphin`**

-   The `Moistness` field now defaults to `2400` if not specified

**`ender_dragon`**

-   The `DragonDeathTime` field now defaults to `0` if not specified

**`falling_block`**

-   The `BlockState` field can now be `air` (will despawn immediately) - if otherwise not specified or invalid, defaults to `sand`
-   The `HurtEntities` field now defaults to `false` if not specified (or `true` if `BlockState` is `anvil`)
-   The `FallHurtAmount` field now defaults to `0` if not specified
-   The `FallHurtMax` field now defaults to `40` if not specified
-   The `DropItem` field now defaults to `true` if not specified
-   The `TileEntityData` field will no longer be preserved if removed

**`firework_rocket`**

-   The `ShotAtAngle` field now defaults to `false` if not specified

**`fox`**

-   The `Trusted` field now defaults to empty if not specified (and will no longer be merged with the previous state if modified by `/data`)

**`ghast`**

-   The `ExplosionPower` field now defaults to `1` if not specified

**`goat`**

-   The `HasLeftHorn` and `HasRightHorn` fields now default to `true` if not specified

**`interaction`**

-   The `width` and `height` fields now default to `1` if not specified

**`item`**

-   The `Health` field now defaults to `5` if not specified
-   The `PickupDelay` field now defaults to `0` if not specified
-   The `Age` field now defaults to `0` if not specified
-   The `Owner` and `Thrower` fields will no longer be preserved when removed

**`item_frame` and `glow_item_frame`**

-   The `ItemDropChance` field now defaults to `1.0` if not specified

**`primed_tnt`**

-   The `fuse` field now defaults to `80` if not specified
-   The `explosion_power` field now defaults to `4` if not specified

**`shulker`**

-   The `Color` field now defaults to `16` (no color) if not specified

**`skeleton`**

-   The `StrayConversionTime` field will no longer be preserved when removed

**`spectral_arrow`**

-   The `Duration` field now defaults to `200` if not specified

**`snow_golem`**

-   The `Pumpkin` field now defaults to `true` if not specified

**`tnt_minecart`**

-   The `fuse` field now defaults to `80` if not specified
-   The `explosion_power` field now defaults to `4` if not specified
-   The `explosion_speed_factor` field now defaults to `1` if not specified

**`trader_llama`**

-   The `DespawnDelay` field now defaults to `47999`

**`villager`**

-   The `FoodLevel` and `Xp` fields now default to `0` if not specified
-   The `ConversionTime` field will no longer be preserved when removed

**`wandering_trader`**

-   The `DespawnDelay` field now defaults to `0` if not specified

**`zombie`**

-   The `DrownedConversionTime` field will no longer be preserved when removed

**`zombie_villager`**

-   The `Xp` field now defaults to `0` if not specified
-   The `ConversionTime` field will no longer be preserved when removed

**`arrow`, `spectral_arrow`, `trident`**

-   The `damage` field now defaults to `2` if not specified

**`dragon_fireball`, `wind_charge`, `breeze_wind_charge`, `wither_skull`, `small_fireball`, and `large_fireball`**

-   The `acceleration_power` field now defaults to `0.1` if not specified

**`small_fireball` and `large_fireball`**

-   The `ExplosionPower` field now defaults to `1` if not specified

**`block_display`, `item_display`, and `text_display`**

-   The `interpolation_duration`, `teleport_duration`, and `start_interpolation` fields now default to `0` if not specified
-   The `view_range` field now defaults to `1` if not specified
-   The `shadow_radius` field now defaults to `0` if not specified
-   The `shadow_strength` field now defaults to `1` if not specified
-   The `width` and `height` fields now default to `0` if not specified

### Block Entity Data

**`campfire`**

-   The `CookingTimes` and `CookingTotalTimes` fields will no longer be preserved when removed

**`chiseled_bookshelf`**

-   The `last_interacted_slot` field now defaults to `-1` if not specified

**`hopper`**

-   The `TransferCooldown` field now default to `-1` if not specified

**`jigsaw`**

-   The `name`, `target`, and `pool` fields now default to `minecraft:empty` if not specified
-   The `final_state` field now defaults to `minecraft:air` if not specified

**`sculk_shrieker`**

-   The `warning_level` field now defaults to `0` if not specified

**`structure_block`**

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

**Number Format**

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
-   Unquoted strings now can't start with `0-9`, `.`, `+`, `-` to avoid accidental collision with numbers

**Number arrays**

-   Values in arrays (`[B;]`, `[I;]`, `[L;]`) without a suffix are now assumed to have suffix matching the type of the array
    -   Example: `[B;1,2]` is equivalent to `[B; 1b, 2b]`
-   Arrays can now also accept types smaller than the array type
    -   Example: `[I;1b,2s,3]` is valid and equivalent to `[I;1i,2i,3i]`

**Lists**

-   Lists now accept trailing commas
    -   Example: `[1,2,]` is valid and equivalent to `[1,2]`
    -   Only one trailing comma is allowed, and it must come after a valid element - both `[,]` and `[1,,]` are invalid

**Compounds**

-   Compounds (maps) now accept trailing commas
    -   Example: `{a:b,}`
    -   Only one trailing comma is allowed, and it must come after a valid key-value pair - both `{,}` and `{a:b,,}` are invalid

## Fixed bugs in 25w09a

-   [MC-168262](https://bugs.mojang.com/browse/MC-168262) Dead bushes cannot be placed on farmland
-   [MC-236100](https://bugs.mojang.com/browse/MC-236100) End crystal beam appears to be black
-   [MC-276861](https://bugs.mojang.com/browse/MC-276861) The player can sometimes teleport through blocked end portals when moving very fast
-   [MC-279229](https://bugs.mojang.com/browse/MC-279229) SNBT text components prevent ;;\;;n and ;;\;;t from working
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

# Minecraft Snapshot 25w08a

We're adding some new, fun and cute features in this week's snapshot. Spawn eggs just got cuter with new textures looking more like the mobs they spawn. Wolves are becoming even more unique with their own individual sounds. When a wolf spawns, it will get one of seven personalities, unrelated to their variant or biome. From cute to grumpy, each wolf will bark, growl, pant, whine, and express themselves in their own unique way. To top it all off, leaf litter will now look even better with new colors and we have made some tweaks to what color of sheep spawns in different biomes.

Have fun exploring!

## New Features

-   Added new sound variants for Wolves
-   Overhauled the visuals of each Spawn Egg to improve readability and accessibility

### Farm Animal variants

**Sheep wool color in warm and cold biomes**

-   Reverted the change from last week that allowed Blue, Light Blue, Cyan, Yellow, Orange and Red Sheep to spawn naturally in different biomes
-   Black Sheep will still be the most common type to spawn in cold biomes, and Brown Sheep will be the most common type in warm biomes
-   Pink Sheep will still be very rare and able to spawn anywhere where Sheep can spawn
-   Uncommon Sheep colors in Cold Biomes are gray, light gray, white and brown
-   Uncommon Sheep colors in Warm Biomes are gray, light gray, white and black

### Leaf Litter

-   Leaf Litter is tinted based on which biome it's in

### Spawn Egg visuals overhaul

-   Each Spawn Egg now has their own unique visual which captures the personality and character of the mob it spawns
-   Each egg visual varies in shape to reflect the in-world size of the mob it spawns
    -   For example, smaller mobs tend to have a smaller Spawn Egg

### Wolf Sounds Variants

-   Added 6 new Wolf sound variants with unique ambient, hurt, death, growl, whine, and pant sounds
    -   The new sounds are part of variants that are called `big`, `cute`, `puglin`, `angry`, `grumpy` and `sad`
    -   The original Wolf sounds now are used for the variant called `classic`
    -   Every Wolf will have a random sound variant assigned to it from the 6 new variants and the original one
    -   The sound variant is not related to the texture variant

## Changes

-   Sheep's wool undercoat is now also colored when dyed, matching existing behaviour in Bedrock Edition
-   Sheep can now eat Fern blocks to match Bedrock Edition

## Technical Changes

-   The Data Pack version is now 68
-   The Resource Pack version is now 53

## Data Pack Version 68

-   Added data driven sound variants for Wolves
-   Biome effects has a new field `dry_foliage_color` that defines the color used for tinting blocks using dry foliage tinting

### Wolf Sound Variants

-   Wolf sound variants can be data-driven by adding entries to `data/<namespace>/wolf_sound_variant/<id>.json`
-   The file contains the following fields which correspond to sound events to use for the specific behaviour:
    -   `ambient_sound`
    -   `death_sound`
    -   `growl_sound`
    -   `hurt_sound`
    -   `pant_sound`
    -   `whine_sound`

### Item Components

**`blocks_attacks` component**

-   If the blocked damage has no position, the compared angle will be assumed to be the maximum `180` for `horizontal_blocking_angle` field of `damage_reductions`

**Entity components**

-   New component
    -   `wolf/sound_variant` - namespaced id from `wolf_sound_variant` registry

## Resource Pack Version 53

-   Added possibility to tint blocks based on a dry foliage color map
-   Updated textures for Spawn Eggs
-   New and updated sounds for Wolf sound variants
-   Added colormap texture for tinting dry foliage tinted blocks
-   Name of `sheep_fur` texture has been renamed to `sheep_wool`
-   Sheep now has a separate texture for its wool undercoat, which is dynamically recolored in-game
    -   The name of this undercoat texture is `sheep_wool_undercoat`

### Updated textures for Spawn Eggs

-   New textures have been added for all Spawn Eggs
-   Removed `spawn_egg.png` and `spawn_egg_overlay.png`

### Equipment Assets

-   Equipment layers configured to be dyeable will now show if the `dyed_color` component is present on the item, even if the item is not in the `#dyeable` tag

### New and updated Wolf sound variants

-   Sound files for the classic Wolf sounds have been moved into `classic` folder for the Wolf sound files
-   Removed unused `howl` sound
-   Added sounds for the new Wolf sound variants: `big`, `cute`, `puglin`, `angry`, `grumpy` and `sad`

## Fixed bugs in 25w08a

-   [MC-177522](https://bugs.mojang.com/browse/MC-177522) Wolf barking and whining sounds are subtitled as "Wolf pants"
-   [MC-280182](https://bugs.mojang.com/browse/MC-280182) Shields can block some environmental damage sources
-   [MC-280230](https://bugs.mojang.com/browse/MC-280230) DeathLootTable field is incorrectly named DeathLoothTable

---

# Minecraft Snapshot 25w07a

Frogday on a Thursday, who thinks of that?! In this week's snapshot we are updating trades for wandering traders and cartographers. We have also introduced new, biome-based spawn rules for sheep. It's time to go out and explore the world! Mojang's bug-tracker Mojira is migrating to the cloud and during the process bug reporting is unavailable. The new platform will soon be up and running, ready for players to log in, create accounts, and most importantly – report bugs! During the downtime, try to keep the bug alive and report it once Mojira is back!

## New Features

-   Sheep have different rules for which wool color to have based on biome they spawn in

### Farm Animal variants

**Sheep wool color in warm and cold biomes**

-   Sheep have updated rules for which color of wool they have based on which biome they spawn in:
    -   Temperate Biomes: (these colors are unchanged from current behavior)
        -   Common sheep color is white
        -   Uncommon sheep colors are black, gray, light gray and brown
        -   There is a rare chance for a pink Sheep to spawn
    -   Cold biomes:
        -   Common Sheep color is black
        -   Uncommon Sheep colors are light gray, light blue, blue and cyan
        -   There is a rare chance for a pink Sheep to spawn
    -   Warm Biomes:
        -   Common Sheep color is brown
        -   Uncommon Sheep colors are gray, yellow, orange and red
        -   There is a rare chance for a pink Sheep to spawn

## Changes

-   A Bush only drops when broken with Shears or a Silk Touch tool and is replaceable when building
-   The look of both Mooshroom variants have been slightly updated to have an extruded snout
-   Ambient block sounds in Desert, Badlands and Pale Garden which are only used for ambience have been moved from "Blocks" to "Ambient/Environment" category
-   Cartographer and Wandering Trader has tweaks to their trades
-   Camels now spawn in Deserts
-   Bundles can now be found in some of the chests in villages
-   The breaking sound for grass sound type has been lowered affecting all blocks using this sound

### Cartographer and Wandering Trader Trade Rebalance

## Cartographer Trades

-   Cartographers now sell 7 new maps each pointing to a different village or other structures in a different biome. These maps can help players who want to quickly find a specific location
-   Cartographers from different village types will sell a different range of maps and colored banners
-   Some prices and quantities have also been adjusted

![Cartographers now sell maps to structures in different biomes (villages in Desert, Plains, Savanna, Snowy Plains or Taiga, the Swamp Hut in a Swamp or the Jungle Temple in a Jungle). Cartographers in different biomes will have a different selection of these maps, available at Apprentice level. The previously existing maps to Trial Chambers and Ocean Monuments are available at Journeyman level. Colored banners are sold at Expert level and the range is different in different biomes. A Woodland Mansion map is guaranteed at Master level along with the globe banner pattern.](https://launchercontent.mojang.com/v2/images/25w07acartographertrades.jpg)

[Click here](https://minecraftnetassets.z13.web.core.windows.net/minecraft-net-assets-container/25w07a_cartographer_trades.png) for a link to the high-resolution image

## Wandering Trader Trades

-   The Wandering Trader now has better prices, more trades and a larger amount of stock for many items
-   They will also now buy basic supplies from players, so it's possible to get some emeralds by helping them prepare for their next journey even if you don't feel like buying anything
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

![Each Wandering Trader has two buying trades (buying Water Bottle, Water Bucket, Milk Bucket, Spider Eye, 4 Baked Potatoes or a Hay Bale) which give emeralds in return. They also have two 'special offers' where they sell Ice, Gunpowder, an Enchanted Pickaxe or any type of Logs, and five normal offers which are similar to the trades they had before this update.](https://launchercontent.mojang.com/v2/images/25w07awanderingtradertrades.jpg)

[Click here](https://minecraftnetassets.z13.web.core.windows.net/minecraft-net-assets-container/25w07a_wandering_trader_trades.png) for a link to the high-resolution image

### Sound for Leaf Litter and Grass

-   Lowered volume in sound files for Leaf Litter (break, step, place)
-   Lowered volume in sound files for grass sound type, affecting all blocks using this (dig)

## Technical Changes

-   The Data Pack version is now 67
-   The Resource Pack version is now 52

## Data Pack Version 67

-   Changed so that `stepping_on` entity predicate can only evaluate to true if the entity is on ground

## Tags

**Block Tags**

-   Added `#camels_spawnable_on` - blocks that Camels can spawn on

**Structure Tags**

-   Added `#on_savanna_village_maps` - structures that can appear on Savanna Village Maps
-   Added `#on_desert_village_maps` - structures that can appear on Desert Village Maps
-   Added `#on_plains_village_maps` - structures that can appear on Plains Village Maps
-   Added `#on_taiga_village_maps` - structures that can appear on Taiga Village Maps
-   Added `#on_snowy_village_maps` - structures that can appear on Snowy Village Maps
-   Added `#on_swamp_explorer_maps` - structures that can appear on Swamp Explorer Maps
-   Added `#on_jungle_explorer_maps` - structures that can appear on Jungle Explorer Maps

### Entity Data

-   `Pos`, `Motion`, and `Rotation` values without the correct number of components (3, 3, and 2 respectively) will now be fully discarded, instead of only selecting the specified components
-   The `SleepingX`, `SleepingY`, and `SleepingZ` fields have been collected into a single `sleeping_pos` field
    -   e.g. `sleeping_pos: [I;1,2,3]`
-   Block States in the entity data of Arrows, Minecarts, Block Displays, Endermen, Falling Blocks, Primed TNT, or Piston Moving Blocks are no longer allowed to be specified as an empty object
-   The `Tags` field will no longer be preserved if removed

**`allay`**

-   Removed redundant `CanDuplicate` field (controlled by `DuplicationCooldown`)

**`cat`**

-   The `CollarColor` field now defaults to `14` (red) if not specified

**`dolphin`**

-   Removed `TreasurePosX`, `TreasurePosY`, `TreasurePosZ` fields

**`falling_block`**

-   The `BlockState` field can now be `air` (will despawn immediately) - if otherwise not specified or invalid, defaults to `sand`

**`fox`**

-   The `Trusted` field now defaults to empty if not specified (and will no longer be merged with the previous state if modified by `/data`)

**`item`**

-   The `Owner` and `Thrower` fields will no longer be preserved when removed

**`phantom`**

-   The `Size` field has been renamed to `size`
-   The `AX`, `AY`, and `AZ` fields have been collected into a single `anchor_pos` field

**`player`**

-   The `SpawnX`, `SpawnY`, `SpawnZ`, `SpawnAngle`, `SpawnDimension`, and `SpawnForced` fields have been collected into a single `respawn` field
    -   Format: object with fields
        -   `pos` - block position to spawn at
        -   `angle` - float, angle to spawn with (default: `0.0`)
        -   `dimension` - dimension id to spawn in (default `minecraft:overworld`)
        -   `forced` - boolean, true if this spawn was set through commands (default: `false`)
-   The `enteredNetherPosition` field has been renamed to `entered_nether_pos`, and is now formatted as a list of doubles
    -   e.g. `entered_nether_pos: [1.0, 2.0, 3.0]`

**`primed_tnt`**

-   The `block_state` field now defaults to `tnt` if not specified

**`shulker_bullet`**

-   The `Dir` and `Target` fields will no longer be preserved when removed

**`turtle`**

-   The `HomePosX`, `HomePosY`, and `HomePosZ` fields have been collected into a single `home_pos` field
-   Removed `TravelPosX`, `TravelPosY`, and `TravelPosZ` fields
-   The `HasEgg` field has been renamed to `has_egg`

**`vex`**

-   The `LifeTicks` field has been renamed to `life_ticks`
-   The `BoundX`, `BoundY`, and `BoundZ` fields have been collected into a single `bound_pos` field

**`villager`**

-   The `Gossips` field will no longer be preserved when removed

**`wandering_trader`**

-   The `wander_target` field will no longer be preserved when removed

**`wolf`**

-   The `CollarColor` field now defaults to `14` (red) if not specified

**`zombie_villager`**

-   The `Gossips` field will no longer be preserved when removed

**`evoker_fangs`, `area_effect_cloud`, and all projectiles**

-   The `Owner` field will no longer be preserved when removed

**`item_frame`, `glow_item_frame`, `painting`, and `leash_knot`**

-   The `TileX`, `TileY`, and `TileZ` fields have been collected into a single `block_pos` field

**`arrow`, `spectral_arrow`, `trident`**

-   The `inBlockState` and `SoundEvent` fields will no longer be preserved when removed

**`minecart`, `*_minecart`**

-   The `CustomDisplayTile` field has been removed
-   `DisplayState` will now always override the default displayed block state if specified
-   `DisplayOffset` may now be specified to override the default offset even without a custom display block state set

**`block_display`, `item_display`, and `text_display`**

-   The `glow_color_override` field will no longer be preserved when removed

**`witch`, `ravager`, `pillager`, `illusioner`, `evoker`, and `vindicator`**

-   The `patrol_target` field will no longer be preserved when removed

### Block Entity Data

-   The `CustomName` field will no longer be preserved when removed
-   The `LootTable` field will no longer be preserved when removed

**`end_gateway`**

-   The `exit_portal` field will no longer be preserved when removed

**`furnace`, `smoker`, `blast_furnace`**

-   The `RecipesUsed` field will no longer be preserved when removed

**`skull`**

-   The `note_block_sound` field will no longer be preserved when removed

## Resource Pack Version 52

-   Small changes in rendering of items in world

### Updated Mooshroom texture and model

-   The Mooshroom have updated model and texture
    -   Model now has a snout
    -   Model now has its legs mirrored

### Shaders & Post-process Effects

> **Developer's Note**: _Although it is possible in Resource Packs, overriding Core Shaders is considered as unsupported and not an intended Resource Pack feature. These shaders exist as part of the internal implementation of the game, and as such, may change at any time as the game's internals evolve. We understand that overriding Core Shaders is used for very cool Resource Pack features, many of which lack supported alternatives. We would like to provide better, supported alternatives in the future._

-   Shader program definitions for core shaders and post-processing effects as JSON files have been removed
-   The shader programs themselves are still available and can be overridden
-   The post-processing effects are still configurable as JSON

**Post-process Effect Definitions**

-   The field `program` was replaced with `vertex_shader` and `fragment_shader`
    -   `<namespace>:<path>` will resolve to `assets/<namespace>/shaders/<path>.<vsh|fsh>`
-   `type` is now a required field for each `uniform`
    -   Possible values are currently `int`, `ivec3`, `float`, `vec2`, `vec3`, `vec4`, `matrix4`
-   `values` in each `uniform` is now optional
    -   Leaving it unset is not recommended and is used for runtime configuration of the blur effect
-   Leaving a uniform unspecified results in undefined behavior, you must specify each one that will be used by the shaders

### Item rendering

**Item Display**

-   `firstperson_lefthand` and `thirdperson_lefthand` transforms are now rendered the same as when held in hand

**Item Entity**

-   When on ground, model size is now taken into account when determining hovering motion
    -   That means that models should never clip into the block below, no matter what size they are
-   Positioning of items in an item stack on ground now depends on model size and model type
    -   If model depth (Z coordinate) is below 1/16th of a block, item is rendered as flat stack of items
    -   Otherwise model is rendered as a cluster of items offset in all directions around center
    -   Previously, flat stack rendering happened only for models with `builtin/generated` parent

## Fixed bugs in 25w07a

> **Developer's Note**: _Since our bugtracker is currently down due to the migration at the time of publishing this article, the links to bugs will not work temporarily._

-   [MC-122840](https://bugs.mojang.com/browse/MC-122840) "/data remove" cannot delete beam;;_;;target tag in End Crystals
-   [MC-152382](https://bugs.mojang.com/browse/MC-152382) End gateways and end portals don't fade away with render distance fog
-   [MC-153392](https://bugs.mojang.com/browse/MC-153392) Unable to remove villager gossips using /data remove
-   [MC-220091](https://bugs.mojang.com/browse/MC-220091) Summoning falling;;_;;block entities with BlockState NBT set to any air block (air, cave;;_;;air, void;;_;;air) default to sand
-   [MC-230445](https://bugs.mojang.com/browse/MC-230445) End portals and end gateways are not rendered properly with the Blindness or Darkness effects
-   [MC-279196](https://bugs.mojang.com/browse/MC-279196) Block loot tables cannot be removed with /data remove
-   [MC-279364](https://bugs.mojang.com/browse/MC-279364) CustomName cannot be removed from block entities
-   [MC-279434](https://bugs.mojang.com/browse/MC-279434) Standing on powder snow and fire at the same time spams the fire extinguish sound
-   [MC-279472](https://bugs.mojang.com/browse/MC-279472) Void appears lower & more faded than before
-   [MC-279572](https://bugs.mojang.com/browse/MC-279572) End portals and end gateways aren't affected by water, lava or powder snow fog
-   [MC-279598](https://bugs.mojang.com/browse/MC-279598) Parts of test structures sometimes remain after running /test clearall
-   [MC-279637](https://bugs.mojang.com/browse/MC-279637) Game crashes when /test verify-ing a test instance with max;;_;;attempts greater than 1
-   [MC-279711](https://bugs.mojang.com/browse/MC-279711) Test instance block "Entities" flips when closing UI
-   [MC-279913](https://bugs.mojang.com/browse/MC-279913) Mooshroom snout no longer matches cows
-   [MC-279921](https://bugs.mojang.com/browse/MC-279921) The "Light as a Rabbit" advancement is granted even when the player sinks in powder snow
-   [MC-279934](https://bugs.mojang.com/browse/MC-279934) block.sand.idle and block.sand.wind are not in the Ambient/Environment sound category
-   [MC-279936](https://bugs.mojang.com/browse/MC-279936) The "commands.test.success" raw translation key is displayed when using "/test create..." command
-   [MC-279948](https://bugs.mojang.com/browse/MC-279948) Cold cow variant's horns are not mirrored
-   [MC-279992](https://bugs.mojang.com/browse/MC-279992) Jumping when wearing leather boots and landing on powder snow from some specific heights can cause the player to get stuck in the powder snow
-   [MC-280067](https://bugs.mojang.com/browse/MC-280067) Scaffolding can no longer be placed if the player is intersecting it
-   [MC-280132](https://bugs.mojang.com/browse/MC-280132) Leaf litter generation is inconsistently interrupted by non-grass blocks
-   [MC-280133](https://bugs.mojang.com/browse/MC-280133) The world border produces graphical glitches when moving near it
-   [MC-280134](https://bugs.mojang.com/browse/MC-280134) Sneaking with a Sneaking Speed attribute of 0 causes the game to freeze
-   [MC-280167](https://bugs.mojang.com/browse/MC-280167) Profiling with F3+L outputs many errors to log

---

# Minecraft Snapshot 25w06a

This week we have been contemplating existential questions like "What came first; the cold chicken or the blue egg?". It's time for the cold chicken and the warm chicken to make their way into snapshot 25w06a together with their respective colorful egg. In addition, pink cactus flowers and dry grass will now decorate deserts and badlands.

## New Features

-   Added Warm and Cold Chicken variants
-   Added Short Dry Grass and Tall Dry Grass
-   Added Cactus Flower block which can grow on Cactus blocks

### Farm Animal variants

-   Warm and cold variants have been added for Chicken
-   Existing Chicken variant has been renamed to temperate
-   The variant is determined by the biome they spawn in
-   Warm and cold biomes are the same for all animals with variants (i.e. Chicken, Pig, Cow)
-   Two new Egg items have been added for the warm and cold Chicken variants
    -   Blue Egg - The Egg that is laid by and can hatch cold Chicken variant
    -   Brown Egg - The Egg that is laid by and can hatch warm Chicken variant
-   Already existing Egg is laid by and can hatch temperate Chicken variant

### Short and Tall Dry Grass

-   Added two new types of grass: Short Dry Grass and Tall Dry Grass
-   Both are one block high, which makes Tall Dry Grass differ from Tall Grass which is two blocks high
-   Both generate in the Desert and Badlands
-   Both can be placed on types of Sand, Terracotta and Dirt blocks like the Dead Bush
-   Both can be bone mealed
    -   Using Bone Meal on Short Dry Grass grows it into a Tall Dry Grass
    -   Using Bone Meal on Tall Dry Grass places a neighbouring Short Dry Grass next to the block if possible
-   Both can be used in the Composter
-   Sheep can eat both to regrow its wool
-   Both can be used as fuel for smelting

### Cactus Flower

-   Cactus Flower is a new type of flower which has a chance of generating on cactuses in Deserts and Badlands
-   Cactus Flower can be placed on Cactus blocks or any block which has center support at the top of the block
-   Cactus Flowers have a chance of growing on Cactus blocks
    -   If a Cactus is one or two blocks high the Cactus Flower has a 10% chance to grow instead of the Cactus getting higher
    -   If a Cactus is three blocks or higher the Cactus Flower has a 25% chance to grow
    -   Cactus Flowers will only grow if they have space on all four sides
-   Cactus Flowers can be used in the Composter
-   A Cactus Flower can be used to craft 1 Pink Dye

## Changes

-   Any block in the simulation distance of a player or loaded by another source of chunk loading (such as Ender Pearls) may now receive random ticks, instead of just 8 chunks around players
    -   For example: if a chunk is loaded by an Ender Pearl or is in the spawn chunks, crops are able to grow, Ice can melt, Snow can fall, and a Cauldron can be filled by rain
    -   Mob spawning, Lava spreading fire, and Lightning strikes still occur in the previous radius of 8 chunks around players
-   Fire will no longer burn or spread if no player is within 8 chunks
-   Tooltips for Fireworks and Crossbows now show a compact form of multiple repeated stars or projectiles that are identical

### Firefly Bush

Conditions for The Firefly Bush playing ambient sounds have changed. It now plays when all of the following conditions are met:

-   it's night
-   Firefly Bush not blocked from above by any collidable block (except Leaves)

## Technical Changes

-   The Data Pack version is now 66
-   The Resource Pack version is now 51

## Data Pack Version 66

-   Added new `allowFireTicksAwayFromPlayer` Game Rule

### Game Rule

**`allowFireTicksAwayFromPlayer`**

-   When true, Fire and Lava ticks can occur ouside of an 8 chunk range of a player
-   Default value: `false`

### Block Tags

-   `#dead_bush_may_place_on` has been renamed to `#dry_vegetation_may_place_on`
-   Added `#edible_for_sheep` - blocks that can be eaten by Sheep to regrow their Wool

### Item Tags

-   Added `#eggs` - all variants of the Egg item

### Entity Data

-   The armor and off-hand equipment of Players is now also stored in the `equipment` field (although items written into the Inventory using armor and off-hand slot numbers still work)

### Chicken Variants

-   Chicken variants can be data-driven by adding entries to `data/<namespace>/chicken_variant/<id>.json`
-   This feature is experimental
-   Fields in file:
    -   `model` - one of: `normal`, `cold`
    -   `asset_id` - namespaced id for this variant asset, resolves to `assets/<namespace>/textures/<path>.png`
    -   `spawn_conditions` - field described in uniform variant selection above

## Resource Pack Version 51

-   New and updated Chicken textures
-   Added textures for new Blue Egg and Brown Egg items
-   Added textures for new Cactus Flower block
-   Added textures for new Short Dry Grass and Tall Dry Grass blocks

### New and updated Chicken textures

-   Added new textures for Chicken variants:
    -   `cold_chicken`
    -   `warm_chicken`
-   Texture `chicken` has been renamed to `temperate_chicken`
-   The `temperate_chicken` texture has been moved to a new folder:
    -   `entity/chicken.png` -> `entity/chicken/temperate_chicken.png`

## Fixed bugs in 25w06a

-   [MC-157196](https://bugs.mojang.com/browse/MC-157196) Tamed animals cannot be added to a team
-   [MC-186241](https://bugs.mojang.com/browse/MC-186241) World border faces are rendered incorrectly with "Fabulous!" graphics
-   [MC-279205](https://bugs.mojang.com/browse/MC-279205) Leaf litter map color is incorrect
-   [MC-279207](https://bugs.mojang.com/browse/MC-279207) Leaf Litter can only be placed on dirt-like blocks
-   [MC-279223](https://bugs.mojang.com/browse/MC-279223) Country Lode Take Me Home Advancement can be completed in the overworld but is still listed as a Nether advancement
-   [MC-279235](https://bugs.mojang.com/browse/MC-279235) Certain farm animals are not spawned as their cold variant in some cold biomes due to an incomplete tag
-   [MC-279242](https://bugs.mojang.com/browse/MC-279242) Kelp, twisting vines, weeping vines, and cave vines can no longer be stacked above or below one another by placing
-   [MC-279261](https://bugs.mojang.com/browse/MC-279261) Making a mob its own owner causes persistent crashes
-   [MC-279279](https://bugs.mojang.com/browse/MC-279279) Dismounting places player in same space as mount
-   [MC-279292](https://bugs.mojang.com/browse/MC-279292) Pigs spawn as temperate in desert villages
-   [MC-279309](https://bugs.mojang.com/browse/MC-279309) Wildflowers item has a misplaced transparent pixel
-   [MC-279464](https://bugs.mojang.com/browse/MC-279464) Fire placed with /setblock doesn't tick/burn out
-   [MC-279719](https://bugs.mojang.com/browse/MC-279719) Tooltip description for saddle attribute modifier slot is not translated
-   [MC-279912](https://bugs.mojang.com/browse/MC-279912) You can use bone meal on bushes in situations where nothing grows
-   [MC-279914](https://bugs.mojang.com/browse/MC-279914) The hitboxes of bushes don't reach the ground and are too wide compared to other similar blocks
-   [MC-279924](https://bugs.mojang.com/browse/MC-279924) Bushes cannot be replaced by trees or mushrooms
-   [MC-279933](https://bugs.mojang.com/browse/MC-279933) Firefly bushes cannot be replaced by trees or mushrooms
-   [MC-279950](https://bugs.mojang.com/browse/MC-279950) Modifying command data storage throws an error
-   [MC-279972](https://bugs.mojang.com/browse/MC-279972) Using /setblock & /fill with fluids of levels at a non-full-block no longer updates the fluid

---

