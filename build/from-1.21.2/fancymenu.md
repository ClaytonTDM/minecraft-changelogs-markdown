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
    -   `wolf_armor` and `wolf_armor_overlay` textures have moved to `textures/entity/equipment/wolf_body/` and have been renamed to `armad