# Minecraft Snapshot 24w39a

Happy Wednesday miners! With this snapshot we're now bundling Bundles into the game for real - Bundles are no longer experimental!

Happy mining!

## New Features

-   Bundles are no longer experimental

## Changes

-   Updated slot highlight in the UI so Item texture has better visibility
    -   The previous textures have been added to Programmer Art resource pack
-   Equipping a Carved Pumpkin on your head now removes the player marker from other players' maps

## Technical Changes

-   The Data Pack version is now 55
-   Removed the `bundle` feature flag and built-in datapack

## Data Pack Version 55

-   `boat` and `chest_boat` entity types have been split into separate types, one per existing variant

### Boat split

-   Variants of boats and chest boats now have separate entity type instead of `Type` field
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

### Container Locks

-   The `Lock` field of containers has been renamed to `lock` and is now an item predicate
    -   Any items which match the predicate can open the container
-   The `lock` data component is now also an item predicate

### Tags

#### Item Tags

-   `map_invisibility_equipment`: Items that can be equipped to hide the player marker on other players maps

### Predicates

-   `minecraft:boat` entity sub-predicate has been removed, since boats no longer have variants

## Fixed bugs in 24w39a

-   [MC-219083](https://bugs.mojang.com/browse/MC-219083) Hunger client/server desync when natural regeneration is off in peaceful mode
-   [MC-275216](https://bugs.mojang.com/browse/MC-275216) Bowl is consumed when feeding a rabbit stew to a wolf
-   [MC-275544](https://bugs.mojang.com/browse/MC-275544) Drowned do not summon reinforcements anymore
-   [MC-276341](https://bugs.mojang.com/browse/MC-276341) The time how long you remain on fire no longer increases while being in the fire
-   [MC-276426](https://bugs.mojang.com/browse/MC-276426) Slimes or magma cubes spawned by splitting synchronize inherited status effects
-   [MC-276588](https://bugs.mojang.com/browse/MC-276588) Boat with chest inventory names no longer are suffixed with 'with Chest'
-   [MC-276598](https://bugs.mojang.com/browse/MC-276598) The slot;;_;;highlight;;_;;front texture renders incorrectly behind with missing recipe items
-   [MC-276610](https://bugs.mojang.com/browse/MC-276610) Ender pearl interaction with bubble columns is broken
-   [MC-276611](https://bugs.mojang.com/browse/MC-276611) Converted mobs do not keep CanBreakDoors tag
-   [MC-276615](https://bugs.mojang.com/browse/MC-276615) Cured Zombie Villagers keep CanPickUpLoot:0b
-   [MC-276638](https://bugs.mojang.com/browse/MC-276638) The server console or LAN game output spammed with "PLAYER moved too quickly!" after a player dies and respawns
-   [MC-276646](https://bugs.mojang.com/browse/MC-276646) Unique Horse Armor sound event is no longer used
-   [MC-276674](https://bugs.mojang.com/browse/MC-276674) Entities with emissive eyes aren't properly affected by fog of any kind
-   [MC-276707](https://bugs.mojang.com/browse/MC-276707) Underwater fireballs constantly play fire extinguishing sound
-   [MC-276724](https://bugs.mojang.com/browse/MC-276724) Arrows and potions resist upward flowing bubble columns
-   [MC-276727](https://bugs.mojang.com/browse/MC-276727) Projectiles are choppy while moving after hitting blocks or entities
-   [MC-276807](https://bugs.mojang.com/browse/MC-276807) All blocks and entities flicker at night or at lower light levels than 15
-   [MC-276817](https://bugs.mojang.com/browse/MC-276817) Teleport command offsets are applied incorrectly
-   [MC-276843](https://bugs.mojang.com/browse/MC-276843) Touching an end portal while in spectator mode teleports the player when they exit spectator mode
-   [MC-276919](https://bugs.mojang.com/browse/MC-276919) /tp teleports twice the relative distance if there's a block on the teleport point

---

# Minecraft Snapshot 24w38a

Hey! This snapshot brings you dyable Bundles in the Bundles experiment and fully-featured world creation for Realms, including Hardcore mode.

Happy dyeing!

## Experimental Features

### Bundles

-   The Bundle can be dyed 16 different colors using Dyes

## Changes

-   Shulker Box coloring recipes are now shown in the recipe book
-   Updated the world creation screen for Realms
-   Enabled hardcore mode for Realms
-   Throwing items out of your inventory very quickly in creative mode is now throttled

### Realms

-   Now uses the normal, fully featured world creation screen
    -   Enables game rule customization
    -   Enables datapack customization

#### Hardcore mode

Hardcore mode is now available in Realms and is accessible by creating a new world or recreating an existing one

## Technical Changes

-   The Data Pack version is now 54
-   Resource Pack version is now 39
-   Temporary option for ignoring connection errors on client side (`strictErrorHandling`) has been removed

## Data Pack Versions 54

-   Introduced new Item tag `bundles` which includes all Bundle Items

### New Recipe Type

#### `crafting_transmute` recipe type

-   New crafting recipe type has been introduced: `crafting_transmute`
-   When matched, output will copy the input item stack, changing the item type but preserving all stack components
-   This completely replaces `crafting_special_shulkerboxcoloring`
-   Fields:
    -   `category` - crafting book category, one of `building`, `redstone`, `equipment`, `misc`
    -   `group` - optional string
    -   `input` - ingredient for item to copy
    -   `material` - additional ingredient to use
    -   `result` - item type to use for output

## Resource Pack Versions 39

-   Bundle models and textures have 16 colored variants
-   The models and UV mapping related to the Torch and blocks containing Redstone Torch have been updated
    -   The "inverted" model now uses 6 separate faces creating the same effect as a model with a negative size
    -   Updated the UV layout for the inverted model

## Fixed bugs in 24w38a

-   [MC-13246](https://bugs.mojang.com/browse/MC-13246) On certain enchanted items, the Anvil will display a "too expensive" message before attempting to repair, combine, or rename them
-   [MC-134626](https://bugs.mojang.com/browse/MC-134626) Squids/glow squids bounce up and down in bubble columns, teleporting high up in the air
-   [MC-164258](https://bugs.mojang.com/browse/MC-164258) Recipe book search field is not selected when clicking on the search icon
-   [MC-169660](https://bugs.mojang.com/browse/MC-169660) /teleport without can change the entity's rotation
-   [MC-204050](https://bugs.mojang.com/browse/MC-204050) Subtitle for shooting amethyst blocks is "Block breaking"
-   [MC-216016](https://bugs.mojang.com/browse/MC-216016) Launching fireworks into a crystal sound block will make the breaking noise
-   [MC-225060](https://bugs.mojang.com/browse/MC-225060) Burning entity sound repeats every tick
-   [MC-228070](https://bugs.mojang.com/browse/MC-228070) Name tags rendered in blocks have letters brighter depending on your angle
-   [MC-275347](https://bugs.mojang.com/browse/MC-275347) Minecart with Furnace does not travel correctly over curves
-   [MC-275413](https://bugs.mojang.com/browse/MC-275413) Squids and glow squids are not affected by the thrust of the bubble column
-   [MC-276292](https://bugs.mojang.com/browse/MC-276292) Shift-clicking the "Destroy Item" slot in the creative inventory deletes the items server-side but not client-side, causing a desync
-   [MC-276372](https://bugs.mojang.com/browse/MC-276372) Player drops 2 items from the hotbar at once when the Survival Inventory tab is not selected
-   [MC-276373](https://bugs.mojang.com/browse/MC-276373) Items dropped from the hotbar are sometimes lost when the Survival Inventory tab is not selected
-   [MC-276428](https://bugs.mojang.com/browse/MC-276428) Player cannot drink honey bottles when they're not hungry
-   [MC-276459](https://bugs.mojang.com/browse/MC-276459) Item display rotation wrapping does not interpolate cleanly
-   [MC-276539](https://bugs.mojang.com/browse/MC-276539) Name tags and text displays render brighter in dark areas when behind blocks or entities
-   [MC-276573](https://bugs.mojang.com/browse/MC-276573) Spruce boat item translation key misspells "minecaft"
-   [MC-276603](https://bugs.mojang.com/browse/MC-276603) No High Norwegian language option
-   [MC-276621](https://bugs.mojang.com/browse/MC-276621) Game crashes when opening inventory that renders entity with both Invisibility and Glowing effects
-   [MC-276640](https://bugs.mojang.com/browse/MC-276640) Riding an entity constantly teleported with relative coordinates produces jittery camera movement
-   [MC-276704](https://bugs.mojang.com/browse/MC-276704) Not using a selector in a tp command breaks rotation from a completely different tp command
-   [MC-276722](https://bugs.mojang.com/browse/MC-276722) Teleporting to your current position every tick sometimes doesn't let you move properly

---

# Minecraft Snapshot 24w37a

Hi everyone! In this snapshot we have fixed the bug with Ender Pearls not teleporting the player to the point of impact. Ender Pearls will now also load chunks when thrown. Happy mining!

## New Features

## Changes

-   Thrown Ender Pearls now load and tick chunks
-   Added language support for High Norwegian

### Ender Pearl Chunk Loading

-   Ender Pearls now ensure that the chunk they are in or travel into is always loaded and ticking
-   They also load chunks when crossing to a new dimension, so that they can always continue to travel
-   This ensures that Ender Pearls can always land, and makes cross dimensional Ender Pearl travelling more predictable
-   Ender Pearls now unload when a player logs out, and reappear whenever that player logs back in, similar to how mounts currently behave

### Mob Conversion Details

In last week's snapshot, we fixed a bug related to which data gets transferred between mobs when converted from one type to another (ex: zombie to drowned). This week, we have reverted a few of those changes (health, attributes, and loot tables are no longer transferred).

-   Here is a full list of tags, data, and other properties which get transferred when a mob is converted (only relevant for mobs that can have these properties):
    
    -   `AbsorptionAmount`
    -   `active_effects`
    -   `Age`
    -   `AngerTime`
    -   `AngryAt`
    -   `ArmorDropChances`
    -   `ArmorItems`
    -   `Brain.memories.minecraft:angry_at.ttl`
    -   `Brain.memories.minecraft:angry_at.value`
    -   `CanBreakDoors`
    -   `CanPickUpLoot`
    -   `CustomNameVisible`
    -   `CustomName`
    -   `fall_distance`
    -   `FallFlying`
    -   `Fire`
    -   `ForcedAge`
    -   `HandDropChances`
    -   `HandItems`
    -   `HurtByTimestamp`
    -   `HurtTime`
    -   `Invulnerable`
    -   `IsBaby`
    -   `Leash`
    -   `LeftHanded`
    -   `Motion`
    -   `NoAI`
    -   `NoGravity`
    -   `OnGround`
    -   `Passengers`
    -   `PersistenceRequired`
    -   `PortalCooldown`
    -   `Position`
    -   `RootVehicle`
    -   `Rotation`
    -   `Silent`
    -   `SleepingX`
    -   `SleepingY`
    -   `SleepingZ`
    -   `Tags`
    -   `Team`
-   Mobs that split into several mobs rather than converting from one type into another do not transfer the following properties:
    
    -   `ArmorDropChances`
    -   `ArmorItems`
    -   `fall_distance`
    -   `FallFlying`
    -   `HandDropChances`
    -   `HandItems`
    -   `HurtByTimestamp`
    -   `HurtTime`
    -   `Leash`
    -   `Motion`
    -   `OnGround`
    -   `Passengers`
    -   `Position`
    -   `Rotation`
    -   `SleepingX`
    -   `SleepingY`
    -   `SleepingZ`
-   Some properties mentioned in MC-88967 are intentionally not transferred in any conversion:
    
    -   Attributes
    -   Gossips
    -   Health
    -   Loot tables
    -   VillagerData
    -   Xp

## Technical Changes

-   The Data Pack version is now 53
-   Resource Pack version is now 38

## Data Pack Version 53

### Loot tables

-   Tool value (used for functions like `match_tool`) is now available for some additional loot table types
    -   `archaeology` - used brush
    -   `vault` - inserted key (not available when displaying items)
    -   `shearing` - shears
-   Chickens laying eggs is now controlled by a loot table found at `gameplay/chicken_lay`
-   Armadillos randomly dropping scutes is now controlled by a loot table found at `gameplay/armadillo_shed`

#### Hero of the Village Gift Loot Tables

-   The loot given by Villagers is now controlled by two additional loot tables:
    -   `gameplay/hero_of_the_village/unemployed_gift` - used if the Villager is unemployed
    -   `gameplay/hero_of_the_village/baby_gift` - used if the Villager is a baby

### Tags

#### Item Tags

-   `duplicates_allays`: Items that can be used to duplicate Allays when dancing
-   `panda_eats_from_ground`: Items that a Panda will pick up from the ground and eat
-   `brewing_fuel`: Items that can be used as fuel in a Brewing Stand

### Item Component Changes

#### `minecraft:fire_resistant` -> `minecraft:damage_resistant`

-   Has a new field: `types`, hash-prefixed damage type tag
    -   Items with this component, when in entity form, will be resistant to the damage types included in the tag
    -   This component also affects whether the equipped item will be damaged when the wearer is hurt by a given damage type

#### `minecraft:item_name`

-   Name provided by this component always has the lowest priority
    -   That means it will be overriden by components like `minecraft:potion_contents`

#### `minecraft:potion_contents`

-   Added optional string field `custom_name`
    -   When present, it will be used to generate containing stack name
    -   For example, if value is `foo` and item is `minecraft:lingering_potion`, the name of item will be translation of `item.minecraft.lingering_potion.effect.foo`

#### `minecraft:equippable`

-   Added the following fields
    -   `swappable`: boolean (default: `true`), whether the item can be equipped into the relevant slot by right-clicking
    -   `damage_on_hurt`: boolean (default: `true`), whether this item will be damaged when the wearing entity is damaged

#### Added `minecraft:death_protection`

-   If present, this item will protect the holder from dying by restoring a single health point
-   Format: object with fields
    -   `death_effects`: An optional list of effects that are applied when the item protects the holder
        -   These effects are the same as those specified by the `on_consume_effects` field in the `consumable` component

### Predicates

#### `salmon` entity sub-predicate

-   Added `minecraft:salmon` entity sub-predicate
-   Fields:
    -   `variant`: one of `small`, `medium`, `large`

### Advancements

#### Triggers

##### `minecraft:killed_by_crossbow` -> `minecraft:killed_by_arrow`

-   Will now trigger whenever an Arrow kills an entity, not just when fired from a Crossbow
-   Has a new optional Item Predicate field, `fired_from_weapon`
    -   Can be used to match the item used to shoot the arrow

## Resource Pack Version 38

### GUI Sprites

-   The appearance of a highlighted slot may now be customized by replacing sprites:
    -   `container/slot_highlight_front`: The sprite to render in front of highlighted slots
    -   `container/slot_highlight_back`: The sprite to render behind highlighted slots
-   Likewise, the appearance of a highlighted item within the Bundle can be customized with the following sprites:
    -   `container/bundle/slot_highlight_front`
    -   `container/bundle/slot_highlight_back`

## Fixed bugs in

-   [MC-119369](https://bugs.mojang.com/browse/MC-119369) Boats crash/break and can kill their passengers when falling certain distances
-   [MC-206436](https://bugs.mojang.com/browse/MC-206436) Stonecutter ignores anything over 64 when shift-clicking
-   [MC-260537](https://bugs.mojang.com/browse/MC-260537) Tree growth can replace leaves that have the 'persistent' block state set to true
-   [MC-265399](https://bugs.mojang.com/browse/MC-265399) Players' heads are incorrectly positioned while exiting the swimming/crawling state when other players are on screen
-   [MC-275205](https://bugs.mojang.com/browse/MC-275205) The hand animation is delayed and doesn't play all the time
-   [MC-275300](https://bugs.mojang.com/browse/MC-275300) Mace smash attack damage does not work with mobs, even though particles and sounds happen
-   [MC-275302](https://bugs.mojang.com/browse/MC-275302) The animation speed of end crystals is no longer constant
-   [MC-275352](https://bugs.mojang.com/browse/MC-275352) Spectral arrow texture is not updated properly for Programmer Art
-   [MC-275406](https://bugs.mojang.com/browse/MC-275406) Grammatical error in "options.rotateWithMinecart.tooltip"
-   [MC-275468](https://bugs.mojang.com/browse/MC-275468) Gamerule minecartMaxSpeed can't be set through functions
-   [MC-275504](https://bugs.mojang.com/browse/MC-275504) Custom model data is not applied to open bundle
-   [MC-275538](https://bugs.mojang.com/browse/MC-275538) Breeze still do not attack when super close to them
-   [MC-275751](https://bugs.mojang.com/browse/MC-275751) Head snaps when coming out of crawling
-   [MC-275765](https://bugs.mojang.com/browse/MC-275765) Missing full stop in string gamerule.minecartMaxSpeed.description
-   [MC-275792](https://bugs.mojang.com/browse/MC-275792) Bottom faces of torches and soul torches are not culled against solid blocks
-   [MC-275833](https://bugs.mojang.com/browse/MC-275833) Hand animation plays higher than before
-   [MC-275883](https://bugs.mojang.com/browse/MC-275883) Riding a minecart cluster into a wall freezes the game
-   [MC-275909](https://bugs.mojang.com/browse/MC-275909) Wrong death message is displayed when being killed by a mob's smash attack
-   [MC-275964](https://bugs.mojang.com/browse/MC-275964) Bundles can remain in the open state when held by the mouse cursor via swapping items
-   [MC-275990](https://bugs.mojang.com/browse/MC-275990) Bundles can remain in the open state through the crafting table
-   [MC-276025](https://bugs.mojang.com/browse/MC-276025) Model overrides are not applied to items shown in an open bundle
-   [MC-276111](https://bugs.mojang.com/browse/MC-276111) Salmon spawned from a bucket are the wrong size for one tick
-   [MC-276127](https://bugs.mojang.com/browse/MC-276127) Fractions in bee nest tooltip are not padded with whitespace
-   [MC-276134](https://bugs.mojang.com/browse/MC-276134) Can't scroll in creative inventory while hovered over the bundle
-   [MC-276263](https://bugs.mojang.com/browse/MC-276263) explosion;;_;;power nbt does not work for minecarts with tnt
-   [MC-276293](https://bugs.mojang.com/browse/MC-276293) Mobs no longer get damaged by sweet berry bushes
-   [MC-276295](https://bugs.mojang.com/browse/MC-276295) Zombies always kill villagers
-   [MC-276296](https://bugs.mojang.com/browse/MC-276296) Worn chainmail armor has a missing texture
-   [MC-276297](https://bugs.mojang.com/browse/MC-276297) Worn netherite armor appears as diamond armor
-   [MC-276299](https://bugs.mojang.com/browse/MC-276299) Horse armor doesn't render properly in horse inventory
-   [MC-276301](https://bugs.mojang.com/browse/MC-276301) Item tooltip padding is gone
-   [MC-276304](https://bugs.mojang.com/browse/MC-276304) Carved pumpkins and skulls can be equipped through right-clicking
-   [MC-276310](https://bugs.mojang.com/browse/MC-276310) Players' capes detach from their bodies when wearing non-chestplate items in the chest slot
-   [MC-276311](https://bugs.mojang.com/browse/MC-276311) Players' capes illogically point upward when flying with non-elytra items
-   [MC-276314](https://bugs.mojang.com/browse/MC-276314) Wind charges cause entities to be launched extremely high when directly hit by them
-   [MC-276315](https://bugs.mojang.com/browse/MC-276315) Teleport command runs at the entity's position and ignores location from execution context
-   [MC-276316](https://bugs.mojang.com/browse/MC-276316) Ender pearls no longer teleport entities to the point of impact
-   [MC-276317](https://bugs.mojang.com/browse/MC-276317) Projectiles visually update slowly when their motion is changed
-   [MC-276320](https://bugs.mojang.com/browse/MC-276320) Shields no longer block incoming projectiles
-   [MC-276321](https://bugs.mojang.com/browse/MC-276321) Elytra loses durability when taking damage
-   [MC-276322](https://bugs.mojang.com/browse/MC-276322) Boats don't drop as items when destroyed
-   [MC-276326](https://bugs.mojang.com/browse/MC-276326) "Air" item lost its name
-   [MC-276327](https://bugs.mojang.com/browse/MC-276327) The item;;_;;name component no longer overrides potion names
-   [MC-276335](https://bugs.mojang.com/browse/MC-276335) Cured villagers have the wrong movement speed
-   [MC-276338](https://bugs.mojang.com/browse/MC-276338) Converted mob keeps the same loot table of the first mob
-   [MC-276339](https://bugs.mojang.com/browse/MC-276339) Witches converted from villagers move very fast
-   [MC-276344](https://bugs.mojang.com/browse/MC-276344) Hovered items in bundles do not reflect any tooltip;;_;;style component
-   [MC-276364](https://bugs.mojang.com/browse/MC-276364) Non-armor items with equippable tag cannot be given to wolves
-   [MC-276365](https://bugs.mojang.com/browse/MC-276365) Armor sleeves do not follow arms when switching to and from items and on item use animations
-   [MC-276370](https://bugs.mojang.com/browse/MC-276370) Golden armor pieces have wrong max durabilities
-   [MC-276376](https://bugs.mojang.com/browse/MC-276376) /tp command cannot teleport to the correct facing angles
-   [MC-276378](https://bugs.mojang.com/browse/MC-276378) Converted witches lose their armor yet are still protected by it
-   [MC-276383](https://bugs.mojang.com/browse/MC-276383) Using Pick Block on boats crashes the game
-   [MC-276384](https://bugs.mojang.com/browse/MC-276384) Players' capes detach from their bodies when moving
-   [MC-276394](https://bugs.mojang.com/browse/MC-276394) Some specially rendered elements are no longer affected by fog of any type
-   [MC-276415](https://bugs.mojang.com/browse/MC-276415) Turtle helmet does not give water breathing effect when equipped on any slot other than the head
-   [MC-276429](https://bugs.mojang.com/browse/MC-276429) Projectiles move after hitting a block
-   [MC-276433](https://bugs.mojang.com/browse/MC-276433) set;;_;;enchantments function removes enchantments component from books
-   [MC-276463](https://bugs.mojang.com/browse/MC-276463) Armor on piglins detach from their bodies while bartering
-   [MC-276476](https://bugs.mojang.com/browse/MC-276476) Crash when a boat is destroyed by a hazard
-   [MC-276480](https://bugs.mojang.com/browse/MC-276480) Projectile no longer moves correctly when it is deflected
-   [MC-276484](https://bugs.mojang.com/browse/MC-276484) Fireballs and wither skulls do too much damage
-   [MC-276495](https://bugs.mojang.com/browse/MC-276495) Creative player can go through nether portal without being teleported when throwing riptide trident
-   [MC-276501](https://bugs.mojang.com/browse/MC-276501) Returning tridents get stuck on blocks and spam sounds
-   [MC-276527](https://bugs.mojang.com/browse/MC-276527) Duplicate UUID error causes player to teleport to origin when riding on a pig after it is converted by lightning
-   [MC-276533](https://bugs.mojang.com/browse/MC-276533) Game crashes when three or more skeletons are about to release their arrows

---

# Minecraft Snapshot 24w36a

Hi everyone! In the most exciting Minecraft-related news of the day, we have a new movi- I mean snapshot coming your way! This week we are adding support for custom equipment with Data Packs and Resource Packs. We have also tweaked the Bundle so that you can empty a group of items when it's used in the hotbar. And as usual, we have included a bunch of bug fixes!

Happy mining!

## Known Issues

-   Ender Pearls will not teleport you to the right location

## Experimental Features

### Bundles

-   When a Bundle is used in the hotbar, one group of items is emptied at a time instead of everything being emptied at once

## Changes

-   Squid Spawn Eggs now only spawn adult Squids
    -   There is a 5% chance of Squids spawned in groups in the wild to be a baby
-   When a mob converts from one type to another (ex: Piglin to Zombified Piglin), the health of the converted mob is set to the same percentage of max health as the original mob had before conversion

## Technical Changes

-   The Data Pack version is now 52
-   Resource Pack version is now 37

## Data Pack Version 52

### Tags

#### Block Tags

-   `bats_spawnable_on`: Blocks that bats can spawn on

#### Item Tags

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

### Changed Item Components

#### `minecraft:item_name`

This component is now always present on every item

### New Item Components

#### `minecraft:item_model`

-   Controls item model
-   Present on every item
-   Format: namespaced id
    -   `namespace:id` will reference model `/assets/<namespace>/models/item/<id>`

#### `minecraft:equippable`

-   If present, this item can be equipped by players in the selected slot
-   When right-clicking with an item with this component, it will be swapped into the appropriate slot
-   Format: object with fields
    -   `slot`: one of `head`, `chest`, `legs`, `feet`, `body`, `mainhand`, or `offhand`
    -   `equip_sound` (optional): Sound event to play when the item is equipped
        -   If not specified, the default armor equip sound will be played
    -   `model` (optional): namespaced ID of the equipment model to use when equipped
        -   These model definitions are loaded from Resource Packs
        -   If not specified, will fall back to rendering as the item itself when in the head slot (or no rendering if not applicable)
    -   `allowed_entities` (optional): Entity ID, Entity Tag, or list of Entity IDs to limit which entities can equip this item
        -   If not specified, any entity (that can wear this kind of equipment) is allowed to equip this item
    -   `dispensable`: boolean (default: `true`), whether the item can be equipped by using a Dispenser
        -   If the item type has special dispenser behavior, this will have no effect
    -   e.g. `equippable={slot:'chest',equip_sound:'item.armor.equip_chain'}`

#### `minecraft:glider`

-   If present, this item will allow players to glide (as with Elytra) when equipped
-   Format: empty object
    -   e.g. `glider={}`

#### `minecraft:tooltip_style`

-   If present, this item can use custom sprites for its tooltip background and frame
-   Format: namespaced ID for a tooltip style
    -   A tooltip style of `namespace:path` will use sprites with IDs:
        -   `<namespace>:tooltip/<path>_background` and `<namespace>:tooltip/<path>_frame`
    -   e.g. `tooltip_style='minecraft:special_sword'`

### Predicates

-   Added a new field in the Player sub-predicate, `input`, that can be used to detect which movement keys the player is pressing
-   If specified the predicate matches with the corresponding keybind that the player is pressing; it supports detecting the following input:
    -   `forward` : boolean (optional)
    -   `backward` : boolean (optional)
    -   `left` : boolean (optional)
    -   `right` : boolean (optional)
    -   `jump` : boolean (optional)
    -   `sneak` : boolean (optional)
    -   `sprint` : boolean (optional)

## Resource Pack Version 37

-   Introduced equipment models
-   Textures for entity equipment have been moved and renamed
-   The tooltip background and frame may now be customized by replacing sprites:
    -   `tooltip/background`: The background of the tooltip
    -   `tooltip/frame`: The frame appearing around the tooltip
    -   Items with a custom `tooltip_style` component will use sprites with IDs:
        -   `<namespace>:tooltip/<path>_background` and `<namespace>:tooltip/<path>_frame`
-   The `nine_slice` GUI sprite scaling mode has a new optional boolean property: `stretch_inner`
    -   If `true`, the inner parts of the texture (i.e. not the corners) will be stretched instead of tiled
    -   If not specified, defaults to `false` as before

### Item Models

-   All item models can now use the `broken` property in model overrides that was previously limited to just Elytra
    -   This will have a value of 1 if the item has 1 durability left, or 0 otherwise

### Custom Equipment Models

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

## Fixed bugs in 24w36a

-   [MC-16829](https://bugs.mojang.com/browse/MC-16829) The horse armor model does not show the enchantment glint effect
-   [MC-38022](https://bugs.mojang.com/browse/MC-38022) Order of rendering translucent block faces fails to update with camera position
-   [MC-88967](https://bugs.mojang.com/browse/MC-88967) Most NBT tags are not kept when a mob converts to another mob
-   [MC-92875](https://bugs.mojang.com/browse/MC-92875) Collisionless blocks ignore entities with high velocity
-   [MC-135898](https://bugs.mojang.com/browse/MC-135898) Teams are not retained when a mob converts to another mob
-   [MC-196556](https://bugs.mojang.com/browse/MC-196556) When projectiles (such as arrows and tridents) move too fast, they can't be teleported by portals and end gateways
-   [MC-196964](https://bugs.mojang.com/browse/MC-196964) Fall damage is reset when an entity converts to another entity
-   [MC-230317](https://bugs.mojang.com/browse/MC-230317) Lead disappears when mooshroom cow is sheared
-   [MC-250924](https://bugs.mojang.com/browse/MC-250924) Goat horns are missing sounds
-   [MC-259936](https://bugs.mojang.com/browse/MC-259936) Equipping armor in hand via right-click equips entire stack
-   [MC-261666](https://bugs.mojang.com/browse/MC-261666) Armor given to Villagers is lost when they convert to Zombie Villagers
-   [MC-270842](https://bugs.mojang.com/browse/MC-270842) Scores are not kept when a mob converts to another mob
-   [MC-271826](https://bugs.mojang.com/browse/MC-271826) Armor default attribute modifier component can't be removed
-   [MC-275011](https://bugs.mojang.com/browse/MC-275011) Instant mine does not work when standing inside of cobwebs
-   [MC-275228](https://bugs.mojang.com/browse/MC-275228) You can duplicate items in your creative hotbar
-   [MC-275239](https://bugs.mojang.com/browse/MC-275239) Item duplication while a screen is opened (Creative Mode)
-   [MC-275298](https://bugs.mojang.com/browse/MC-275298) Blocks with special collision behavior have a larger detection range than previously
-   [MC-275299](https://bugs.mojang.com/browse/MC-275299) Crafting using Ctrl + Drop key crafts the incorrect amount of items
-   [MC-275344](https://bugs.mojang.com/browse/MC-275344) Sweet Berry Bushes deal damage inconsistently
-   [MC-275345](https://bugs.mojang.com/browse/MC-275345) Inventory bug that causes items to be constantly shuffled
-   [MC-275416](https://bugs.mojang.com/browse/MC-275416) Baby squid or baby glow squid produces ink particles that are too far away from itself
-   [MC-275418](https://bugs.mojang.com/browse/MC-275418) Feeding baby dolphins won't speed up their growth
-   [MC-275437](https://bugs.mojang.com/browse/MC-275437) Fast moving entities freeze the server which causes watchdog crash
-   [MC-275445](https://bugs.mojang.com/browse/MC-275445) Specifying the size of a target in post effect shaders fails
-   [MC-275450](https://bugs.mojang.com/browse/MC-275450) Player Motion data no longer updates while riding another entity
-   [MC-275455](https://bugs.mojang.com/browse/MC-275455) Player motion is no longer retained on relative teleportation
-   [MC-275462](https://bugs.mojang.com/browse/MC-275462) Bats can spawn in unusual places, such as in woodland mansions and beneath trees
-   [MC-275497](https://bugs.mojang.com/browse/MC-275497) The repairable data component does not exist in armor items by default
-   [MC-275537](https://bugs.mojang.com/browse/MC-275537) Sliding down honey blocks is slower than in previous versions
-   [MC-275622](https://bugs.mojang.com/browse/MC-275622) Minecarts with TNT are more volatile than in previous releases
-   [MC-275624](https://bugs.mojang.com/browse/MC-275624) Redstone wire with custom model unexpectedly appears green
-   [MC-275638](https://bugs.mojang.com/browse/MC-275638) It is still possible to go through portals without being teleported when going quickly enough by throwing riptide tridents
-   [MC-275642](https://bugs.mojang.com/browse/MC-275642) Baby dolphins do not spawn naturally
-   [MC-275655](https://bugs.mojang.com/browse/MC-275655) Entity rotation does not visually update when using the teleport command until the world is reloaded
-   [MC-275745](https://bugs.mojang.com/browse/MC-275745) A scoreboard objective with display mode below;;_;;name renders right behind the player's name
-   [MC-275767](https://bugs.mojang.com/browse/MC-275767) Camera is shaky when riding an entity that is being constantly teleported
-   [MC-275770](https://bugs.mojang.com/browse/MC-275770) Guardian beam attacks stay yellow and do not shift colors anymore
-   [MC-276027](https://bugs.mojang.com/browse/MC-276027) Chestplates and Boots on Armor Stands render the helmet overlay texture
-   [MC-276030](https://bugs.mojang.com/browse/MC-276030) The blue highlighted text background for signs is gone
-   [MC-276064](https://bugs.mojang.com/browse/MC-276064) Tall grass generated from bone mealing a grass block will delete the 2nd block above it
-   [MC-276122](https://bugs.mojang.com/browse/MC-276122) Soul sand and magma block bubble columns don't move the player vertically in creative mode when not flying
-   [MC-276132](https://bugs.mojang.com/browse/MC-276132) Translucency sorting seems to be slightly broken
-   [MC-276179](https://bugs.mojang.com/browse/MC-276179) Zombie villagers don't raise their arms to attack again
-   [MC-276204](https://bugs.mojang.com/browse/MC-276204) Dolphins and axolotls keep trying to swim into the seabed

---

