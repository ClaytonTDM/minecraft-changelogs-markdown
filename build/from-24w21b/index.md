# Minecraft Snapshot 24w21b

We are now releasing snapshot 24w21b to fix a frequent crash which happened when Zombies spawned in areas of high local difficulty.

## Fixed bugs in 24w21b

-   [MC-272321](https://bugs.mojang.com/browse/MC-272321) Crash after upgrading snapshot world to 24w21a

---

This week we're bringing a Snapshot you can vibe out to! This time around we're bringing data-driven jukeboxes, a new gamerule, and a bunch of fixes.

Happy vibing!

## Changes

-   It seems we cooked a bit too hard with the new Piston sounds last week, which is why we're reverting back to the old sounds again
-   Lowered volume of original sounds to address initial feedback of Pistons being too loud
-   Pause menu now can include a list of links provided by server
-   Improvements to the disconnection screen
-   Any member of a Realm can now upgrade a world
-   In the Realms main screen, all online players of a Realm are displayed
    -   When hovered, a tooltip is shown with each player's head and name

### Vault

-   Added sound effect to help players understand they've already looted a vault

### Trial Chambers

-   Trial Chambers are less likely to generate in the Deep Dark

### Animal Panic

-   Animals now panic based on the damage caused by predefined Damage Source Types
-   The panic lasts for 2 seconds after the damage is dealt. The following damage type tags are used by vanilla animals:
    -   `panic_environmental_causes`: Used by Wolves, Polar Bears (adults) and Pandas
    -   `panic_causes`: Used by all other animals and baby Polar Bears

### Server links

-   Servers can now provide a list of links to clients
-   If client has received any links, a new button called "Server Links..." will show up in pause game screen
    -   To make space for that button, "Report Bugs" and "Give Feedback" buttons might be moved into a sub-screen if necessary

### Disconnection screen improvements

-   In some cases client will now store detailed information about disconnection (similar to crash reports)
-   When that happens, new "Open Disconnection Report Directory" button will be added to the disconnection screen
-   When server provides link for bug reporting, it will be also be added as a button to the disconnection screen

## Technical Changes

-   Resource Pack version is now 34
-   Data Pack version is now 45
-   Server can now provide list of links to client
-   Servers can add custom details to crash and disconnection reports

### Gamerules

-   Added new `entitiesWithPassengersCanUsePortals` gamerule
    -   When `true`, entities with passengers can use Nether Portals, End Portals and End Gateways
    -   Defaults to `false`

### Server links

-   New clientbound packet `server_links` is available in `configuration` and `game` protocols
-   On receival, client will make links available from pause menu
-   Link labels can be built-in or custom (i.e. any text)
-   Some built-ins also have special fuctionality:
    -   `report_bug`:
        -   link will be displayed on disconnection screen, if disconnection was caused by packet handling error
        -   link will be included as a comment in disconnection report
-   Added `bug-report-link` to `server.properties` to allow vanilla server to configure `report_bug` links
    -   If this field is non-empty, server will send that link to clients
    -   This field should contain well-formed URL

### Custom server crash report details

-   New clientbound packet `custom_report_details` is available in `configuration` and `game` protocols
-   This packet contains a list of key-value text entries
-   If received, contents of this packet will be added in a separate section to any crash or disconnection report generated during connection to this server

## Data Pack Version 45

-   Jukebox songs are now data-driven
-   Added new command syntax

### Jukebox Songs

-   Added a jukebox song registry which is loaded from data packs
-   Path to jukebox song definition is `data/<namespace>/jukebox_song/<id>.json`
-   Fields in definition:
    -   `sound_event` - sound event that is streamed when played by a Jukebox
    -   `description` - the name of the song that will be displayed in the hover tooltip represented as a Text Component
    -   `length_in_seconds` - length of the song in seconds as a positive float
    -   `comparator_output` - the redstone signal output by a comparator when played in a Jukebox, between 0 and 15
-   Added `minecraft:jukebox_playable` item stack component

#### `jukebox_playable` item component

-   If set, the item can be inserted into Jukeboxes to play a song
-   Format: object with fields
    -   `song`: jukebox song id
        -   The song that will be played by the Jukebox when this item stack is inserted
    -   `show_in_tooltip`: boolean (default: true)
        -   If false, the name of the song will not be shown in the tooltip
        -   This was formerly controlled by the `hide_additional_tooltip` component on Music Discs
    -   e.g. `jukebox_playable={song:'minecraft:precipice'}`, `jukebox_playable={song:'minecraft:precipice', show_in_tooltip:false}`

### Attributes

-   Attribute modifiers no longer have a UUID and name combination
-   Instead, attribute modifiers are now uniquely identified by a namespaced ID, similar to other resources
-   The ID of a modifier uniquely identifies it in the set of modifiers for a single attribute
    -   Using the same ID for different modifiers is allowed as long as the modifiers are for different attributes
-   Existing built-in modifiers will be upgraded to new IDs
-   Existing custom modifiers will be upgraded to the GUID as an ID in the `minecraft` namespace

#### `attribute` command

-   The `uuid` and `name` arguments have been replaced with a singular `id` argument

#### Item Stack Attribute Modifiers

-   The `uuid` and `name` fields have been removed.
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

#### Attribute Effects

Fields:

-   `name` & `uuid` have been removed, replaced by `id`
-   `id`: The namespaced ID of the Attribute Modifier to add
    -   This will be postfixed with the slot name when the enchanted item is equipped in a slot
    -   Must be unique to avoid different Enchantments (or other systems) interfering with each others

#### Entity Effect Types

##### `damage_item`

The damage is not applied to items held by players in creative mode.

##### Hit Block Parameters

-   Entities: `this`
-   Enchantment Level
-   Origin
-   Block State

#### Effect Components

-   `minecraft:hit_block`:
    -   Condition Context: changed to take a Hit Block Parameter - `this` is the entity hitting the Block

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

#### Item Tags

-   Removed `music_discs` item tag

#### Block Tags

-   `air`: All blocks that resemble air

#### Damage Type Tags

-   Removed `breeze_immune_to` damage type tag
-   Added `panic_environmental_causes`: Damage types that cause panic in aggressive animals that can panic, i.e. mobs that retaliate when attacked
-   Added `panic_causes`: Damage types that cause panic in passive animals, i.e. mobs that run away when attacked

### Predicates

#### Jukebox Playable Predicate

New item sub-predicate available as `jukebox_playable`.

-   Matcher for `jukebox_playable` component (like Music Discs)
-   Fields:
    -   `song` - optional id, list of ids or tag for jukebox song to be matched

#### Player Predicate

-   The `gamemode` field has been changed to accept a list of gamemodes

### Commands

-   Added `@n` entity selector, selecting the nearest entity
    -   This functions as `@e[sort=nearest,limit=1]`
    -   Additional requirements may still be provided; for example: `@n[type=pig]` will select the closest Pig

## Resource Pack Version 34

-   Added the `block.vault.reject_rewarded_player` sound event
-   Changes to Shaders

### Shaders

-   The `blend` block in core shader definitions has been removed, as it was not used
-   The `position_color_tex` shader has been removed, replaced with the pre-existing `position_tex_color`
-   The `glint_direct` shader has been removed, replaced with the pre-existing `glint` shader
-   The `armor_glint` shader has been removed, as it was unused

## Fixed bugs in 24w21a

-   [MC-67](https://bugs.mojang.com/browse/MC-67) Entities with passengers cannot travel through portals
-   [MC-31819](https://bugs.mojang.com/browse/MC-31819) Hunger saturation depletes on peaceful difficulty
-   [MC-116279](https://bugs.mojang.com/browse/MC-116279) Non-player entities going through Nether portal do not generate portal in Nether if none exists
-   [MC-151648](https://bugs.mojang.com/browse/MC-151648) Non-player entities cannot travel through unlinked nether portals
-   [MC-170103](https://bugs.mojang.com/browse/MC-170103) Untamed wolves only beg for food while being angry and jumping
-   [MC-260346](https://bugs.mojang.com/browse/MC-260346) Custom music discs cut off when vanilla disc would normally end
-   [MC-266290](https://bugs.mojang.com/browse/MC-266290) Double doors do not automatically form between waxed and unwaxed copper doors, even of the same variant
-   [MC-266586](https://bugs.mojang.com/browse/MC-266586) Trial chambers can spawn directly inside the deep dark biome
-   [MC-266626](https://bugs.mojang.com/browse/MC-266626) Breeze doesn't stop attacking the player when it enters on the same team
-   [MC-267967](https://bugs.mojang.com/browse/MC-267967) Breezes ignore the deflects\_projectiles entity type tag
-   [MC-268438](https://bugs.mojang.com/browse/MC-268438) Baby armadillos can still eat while rolled up
-   [MC-269034](https://bugs.mojang.com/browse/MC-269034) Wolves no longer teleport while trying to pathfind out of Lava
-   [MC-269351](https://bugs.mojang.com/browse/MC-269351) The Bolt Armor Trim cannot be duplicated with Waxed Copper Block
-   [MC-269370](https://bugs.mojang.com/browse/MC-269370) Sharp lag spike caused by incorrect upper limit on particles created by mace smash attack
-   [MC-269460](https://bugs.mojang.com/browse/MC-269460) Thorns enchantment doesn't work when entities are hit by wind charges
-   [MC-269964](https://bugs.mojang.com/browse/MC-269964) Ominous item spawners are missing an NBT load for spawn\_item\_after\_ticks
-   [MC-269988](https://bugs.mojang.com/browse/MC-269988) New potion effects don't apply their respective behaviors when creeper explodes
-   [MC-270024](https://bugs.mojang.com/browse/MC-270024) When drinking ominous bottles, bad omen of higher levels can be overriden by lower amplifiers
-   [MC-270377](https://bugs.mojang.com/browse/MC-270377) Wind charges can be hit and redirected the moment they are thrown
-   [MC-270573](https://bugs.mojang.com/browse/MC-270573) Mounted entities are immune to wind charge damage
-   [MC-270808](https://bugs.mojang.com/browse/MC-270808) Any item in the armor.body slot protects wolves from taking damage
-   [MC-271458](https://bugs.mojang.com/browse/MC-271458) Channeling tridents no longer summon lightning bolt every time hitting lightning rod under thunderstorm
-   [MC-271573](https://bugs.mojang.com/browse/MC-271573) Attribute Enchantments Don't Behave Properly on Armor
-   [MC-271634](https://bugs.mojang.com/browse/MC-271634) Custom enchantments don't appear in the creative menu
-   [MC-271718](https://bugs.mojang.com/browse/MC-271718) Crash when randomized\_int\_state\_provider is applied to blocks lacking the property
-   [MC-271753](https://bugs.mojang.com/browse/MC-271753) Crash due to overflow inside cost calculation in by\_cost\_with\_difficulty
-   [MC-271856](https://bugs.mojang.com/browse/MC-271856) Crossbows enchanted with Quick Charge do not benefit from its effects when used in the offhand
-   [MC-271868](https://bugs.mojang.com/browse/MC-271868) Frost walker replaces flowing water now
-   [MC-271901](https://bugs.mojang.com/browse/MC-271901) Entity effect "play\_sound" Field "pitch" value upper limit is 1.0 instead of 2.0
-   [MC-271911](https://bugs.mojang.com/browse/MC-271911) Frost walker no longer works with void or cave air
-   [MC-271914](https://bugs.mojang.com/browse/MC-271914) Soul speed enchantment doesn't emit particles when the entity is controlled by a player
-   [MC-272039](https://bugs.mojang.com/browse/MC-272039) Soul Speed uses durability in creative mode
-   [MC-272042](https://bugs.mojang.com/browse/MC-272042) If players have max health over 20 and die, when they respawn they will have 20 health instead of their max health
-   [MC-272043](https://bugs.mojang.com/browse/MC-272043) The game crashes when entities die while having the oozing effect
-   [MC-272075](https://bugs.mojang.com/browse/MC-272075) Attempting to step up while controlling entity and moving fast often glitches
-   [MC-272084](https://bugs.mojang.com/browse/MC-272084) Creepers with potion effects no longer create area effect clouds upon exploding
-   [MC-272182](https://bugs.mojang.com/browse/MC-272182) Knowledge Books no longer function properly with a stack size of 1 in survival/adventure mode

---

After some recent irregularities in our Snapshot schedule (public holidays, we're looking at you!) we're back to shipping on a Wednesday! Among other things, 24w20a includes a buff to the amount of Redstone Dust dropped by Witches, as well as a long requested change to make Piston sounds a tad more pleasing to the ear. We're also throwing 41 new bug fixes into the mix, because we like squashing bugs.

Happy mining!

## Changes

-   Witches now always drop 4-8 redstone dust on death
    -   This is to improve the viability of farms that utilize Witch Huts to obtain Redstone Dust
-   Improved player attribute and effect handling
    -   Custom set base attributes are now kept when respawning
    -   Active effects and modifiers are kept when changing dimension or winning the game
-   Updated credits

### Sounds

-   Updated Piston sounds to lower volume and attenuation
    -   This was done to address the long-received feedback on the old sounds being too harsh and loud, creating very noisy redstone builds

## Technical Changes

-   Data Pack version is now 44

## Data Pack Version 44

-   `dimension_padding` jigsaw structure NBT tag was changed
    -   Now it is an object with fields:
        -   `bottom` the vertical padding at the bottom of the dimension, non-negative integer
        -   `top` the vertical padding at the top of the dimension, non-negative integer
    -   Can be written as a single non-negative integer instead to be applied to both top and bottom fields
        -   e.g. both `dimension_padding: 10` or `dimension_padding: { bottom: 10, top: 5 }` are valid
-   Data-driven enchantment field `weight` now has an upper bound of 1024
-   Data-driven enchantment field `max_level` now has an upper bound of 255

### Predicates

#### Entity Predicate

-   New option: `movement_affected_by` - optional Location Predicate
    -   When present, adds requirements on a block at most 0.5 blocks below the entity which can affect its movement

## Fixed bugs in 24w20a

-   [MC-6431](https://bugs.mojang.com/browse/MC-6431) Status effects are lost when returning to the overworld from the exit end portal
-   [MC-83590](https://bugs.mojang.com/browse/MC-83590) Armor attributes list can be too long
-   [MC-137719](https://bugs.mojang.com/browse/MC-137719) The player's horizontal motion doesn't affect fired projectiles in certain situations
-   [MC-179940](https://bugs.mojang.com/browse/MC-179940) Player's attributes reset back to default values upon respawning
-   [MC-181604](https://bugs.mojang.com/browse/MC-181604) Exiting the end portal resets player attributes to their default values
-   [MC-267230](https://bugs.mojang.com/browse/MC-267230) Hangul fonts are rendered with missing pixels
-   [MC-268113](https://bugs.mojang.com/browse/MC-268113) the minecraft:generic.scale attribute is desynchronized when the player leaves the End dimension via an End portal
-   [MC-268370](https://bugs.mojang.com/browse/MC-268370) Japanese CJK variants use the same diacritic
-   [MC-268598](https://bugs.mojang.com/browse/MC-268598) The "weight" of skeletons in swamp biomes is too high causing less bogged spawns
-   [MC-269036](https://bugs.mojang.com/browse/MC-269036) Bogged do not drop mushrooms when sheared with doMobLoot false
-   [MC-269147](https://bugs.mojang.com/browse/MC-269147) Shearing a bogged spawns mushrooms at the bogged's feet
-   [MC-269951](https://bugs.mojang.com/browse/MC-269951) When the gamerule "doImmediateRespawn" is set to true, the Wind Charged, Oozing or Weaving effects don't function for players
-   [MC-270052](https://bugs.mojang.com/browse/MC-270052) Blur levels below 10% do not appear to actually work
-   [MC-270301](https://bugs.mojang.com/browse/MC-270301) The fire protection enchantment applied to horse armor no longer decreases the duration of time the horse remains ablaze
-   [MC-270539](https://bugs.mojang.com/browse/MC-270539) The blast protection enchantment, when applied to horse armor, no longer diminishes the knockback effect from explosions on horse
-   [MC-270637](https://bugs.mojang.com/browse/MC-270637) maxentityCramming set to 0 prevents slime spawning from oozing effect
-   [MC-271034](https://bugs.mojang.com/browse/MC-271034) List entries in the Social interaction menu are rendered over the background
-   [MC-271168](https://bugs.mojang.com/browse/MC-271168) Demo timer does not respect "Text Background" setting
-   [MC-271244](https://bugs.mojang.com/browse/MC-271244) Auto-save text does not respect "Text Background" setting in accessibility settings
-   [MC-271360](https://bugs.mojang.com/browse/MC-271360) Horse armor and wolf armor are deleted when used on an armor stand
-   [MC-271414](https://bugs.mojang.com/browse/MC-271414) Damage command at position applies knockback in random direction
-   [MC-271462](https://bugs.mojang.com/browse/MC-271462) Buttons make the deactivation sound when pressed
-   [MC-271468](https://bugs.mojang.com/browse/MC-271468) Game crashes with custom enchantment's "rotated\_block\_provider"
-   [MC-271532](https://bugs.mojang.com/browse/MC-271532) Mace only loses durability during smash attacks
-   [MC-271547](https://bugs.mojang.com/browse/MC-271547) Can't immediately sprint jump into a 2 block ceiling when standing next to it since 24w18a
-   [MC-271566](https://bugs.mojang.com/browse/MC-271566) Game crash on insufficient "ammo\_use" amount
-   [MC-271574](https://bugs.mojang.com/browse/MC-271574) Inlining a painting variant causes players to disconnect when receiving entity data
-   [MC-271583](https://bugs.mojang.com/browse/MC-271583) Soul speed no longer works through partial blocks
-   [MC-271629](https://bugs.mojang.com/browse/MC-271629) Channeling doesn't work / "post\_attack" effect requires enchanted item to be in the mainhand
-   [MC-271636](https://bugs.mojang.com/browse/MC-271636) Attempting to modify NBT of killer rabbit throws unexpected error
-   [MC-271678](https://bugs.mojang.com/browse/MC-271678) damage\_item enchantment entity effect doesn't break items
-   [MC-271715](https://bugs.mojang.com/browse/MC-271715) Crash when the sum of enchantments' weights overflow
-   [MC-271716](https://bugs.mojang.com/browse/MC-271716) Fraction value provider allows division by zero
-   [MC-271803](https://bugs.mojang.com/browse/MC-271803) Custom enchantment with very large max level causes game to hang after opening Creative inventory
-   [MC-271853](https://bugs.mojang.com/browse/MC-271853) Random "Failed to store chunk" error
-   [MC-271854](https://bugs.mojang.com/browse/MC-271854) Trying to generate new chunks crashes the server
-   [MC-271863](https://bugs.mojang.com/browse/MC-271863) Crafter recipe gets stuck on an item with a similar recipe
-   [MC-271881](https://bugs.mojang.com/browse/MC-271881) Soul speed doesn't soul make particles.
-   [MC-271896](https://bugs.mojang.com/browse/MC-271896) Using Shift+F3+I on a villager crashes the game
-   [MC-271937](https://bugs.mojang.com/browse/MC-271937) Strike a villager with channeling trident in thunder doesn't obtain the advancement "Very Very Frightening"
-   [MC-271948](https://bugs.mojang.com/browse/MC-271948) Entering the Nether breaks the game

---

Oh wow, we never could have guessed you all were so violent! Here's a 24w19b, fixing a crash when a Villager died.

## Fixed bugs in 24w19b

-   [MC-271843](https://bugs.mojang.com/browse/MC-271843) Crash when a villager dies

---

The weekend is right around the corner, and what better way to celebrate that fact than by bringing you a serving of Snapshot Friday? This one rounds off the week by introducing performance improvements to chunk loading, alongside the usual assortment of technical improvements and bug fixes.

On another note, last week's Snapshot introduced some changes to the Mace that went undocumented in the 24w18a changelog. That was a whoopsie on our end, and to clear up any confusion we've decided to add those changes to this changelog in addition to updating the previous one. We're sorry about that!

Happy mining!

## Mace changes from 24w18a

-   Raised Mace durability from 250 to 500
-   Reduced Mace base damage to 5
-   Lower the Mace attack speed from -2.4 to -3.5
-   Reduced Density damage per level per block to 0.5
-   Mace Smash attack damage now has a fall off:
    -   First 3 blocks fallen give 4 damage per block
    -   Next 5 blocks fallen give 2 damage per block
    -   Any block fallen after that give 1 damage per block
-   Density and Breach are now incompatible with each other and the other damage enchantments (Smite and Bane of Arthropods)

## Changes

-   Blocks frozen by Frost Walker now emit "Block Placed" vibrations (frequency 13)
-   Changes to sounds
-   Improved chunk loading performance

### Sounds

-   Added 4 new cave ambient sounds
-   Replaced turn off and turn on sounds for Copper Bulb with one toggle sound

### Chunk loading improvements

-   When reading an already generated chunk from disk, surrounding chunks are no longer unnecessarily loaded
    -   This is also visible on the singleplayer world loading screen
-   The new system has less memory and CPU overhead

## Technical Changes

-   Data Pack version is now 43

## Data Pack Version 43

-   The `custom_data` component can now be specified as an SNBT string to preserve type information in JSON
    -   This is the same as is used in the `set_custom_data` loot function and `custom_data` predicate
-   The `food` item component has new fields:
    -   `using_converts_to`: item with components (optional)
        -   Once consumed, the food item will be replaced with the specified item
        -   e.g. `food={nutrition:1,saturation:0,using_converts_to:{id:"poisonous_potato",components:{"minecraft:custom_name":'"Wait what?"'}}}`
-   Registry `decorated_pot_patterns` has been renamed to `decorated_pot_pattern`
-   Removed legacy tag directory names
-   Removed `power` NBT tag and replaced with `acceleration_power` tag with a number value that contol the projectiles acceleration (and maximum speed)
    -   This change affects the following projectiles; `dragon_fireball`, `large_fireball`, `small_fireball`, `fireball`, `breeze_wind_charge`, `wind_charge`, `wither_skull`
-   New NBT tag `dimension_padding` for structures
    -   ensures that a structure is not generating through the edges of a dimension by adding vertical padding to its bounding box
    -   default is 0
    -   Trial Chambers have a padding of 10 since they are generated deep underground and sometimes would intersect with Bedrock layer

### Enchantments

#### Entity Effect Types

-   Added field `trigger_game_event` for effect types `replace_block`, `replace_disc` and `set_block_properties`
    -   Format: Optional Game Event ID for a game event to trigger when a block has been replaced

### Tags

#### Directory renames

-   Some types that used legacy directory names (based on plural name of element) have been renamed to match registry name
-   Affected directories:
    -   `tags/items` -> `tags/item`
    -   `tags/blocks` -> `tags/block`
    -   `tags/entity_types` -> `tags/entity_type`
    -   `tags/fluids` -> `tags/fluid`
    -   `tags/game_events` -> `tags/game_event`

#### Block Tags

-   `fire_aspect_lightable`: All blocks that should be possible to light by hitting with Fire Aspect enchanted tools

#### Damage Type Predicate

-   New option: `is_direct` - optional boolean
    -   When present, requires the damage to be direct (`true`) or indirect (`false`)
    -   Damage is direct when its direct and source entities are the same

## Fixed bugs in 24w19a

-   [MC-9568](https://bugs.mojang.com/browse/MC-9568) Mobs suffocate / go through blocks when growing up near a solid block
-   [MC-9644](https://bugs.mojang.com/browse/MC-9644) Launched falling\_block entities do not travel through portals
-   [MC-14923](https://bugs.mojang.com/browse/MC-14923) Players can be kicked for spamming in a singleplayer world with cheats disabled
-   [MC-16345](https://bugs.mojang.com/browse/MC-16345) Reducing the player's base max health using /attribute does not always reduce their current health
-   [MC-26304](https://bugs.mojang.com/browse/MC-26304) Brewing stands reset brew cycle when unloaded
-   [MC-96198](https://bugs.mojang.com/browse/MC-96198) Boats / rafts move into blocks when landing in less than one block deep water
-   [MC-175619](https://bugs.mojang.com/browse/MC-175619) Dispenser drops honey bottle unless empty slot is available
-   [MC-252846](https://bugs.mojang.com/browse/MC-252846) Mobs can pass through fences with carpets on top when growing up
-   [MC-253791](https://bugs.mojang.com/browse/MC-253791) Frogs suffocating when growing
-   [MC-267947](https://bugs.mojang.com/browse/MC-267947) Ender pearls can teleport players in spectator mode
-   [MC-267951](https://bugs.mojang.com/browse/MC-267951) The game freezes and eventually crashes when creating a world with the "spawnChunkRadius" gamerule set to high values
-   [MC-267981](https://bugs.mojang.com/browse/MC-267981) The "Trial Spawner crackles" subtitle is only displayed for a split second upon the "minecraft:block.trial\_spawner.ambient" sound being played
-   [MC-268772](https://bugs.mojang.com/browse/MC-268772) Fall damage multiplier attribute has unintuitive coloring
-   [MC-269318](https://bugs.mojang.com/browse/MC-269318) Books placed on a lectern in creative mode are consumed
-   [MC-269601](https://bugs.mojang.com/browse/MC-269601) Mace smash attack does not knock back other players when they are not the attacked entity
-   [MC-269633](https://bugs.mojang.com/browse/MC-269633) Placing an oversized filled bucket resets the stack size to 1
-   [MC-269642](https://bugs.mojang.com/browse/MC-269642) Eating an oversized Soup / Stew resets the stack size to 1
-   [MC-269674](https://bugs.mojang.com/browse/MC-269674) Oversized book and quill stacks reset count when signed
-   [MC-269685](https://bugs.mojang.com/browse/MC-269685) Buckets are lost when consuming oversized milk buckets
-   [MC-269686](https://bugs.mojang.com/browse/MC-269686) Oversized music disc stacks can be duplicated with jukeboxes
-   [MC-269708](https://bugs.mojang.com/browse/MC-269708) Dispensers using an oversized stack of Water Bottles resets the stack size to 1
-   [MC-269717](https://bugs.mojang.com/browse/MC-269717) Cauldron deletes overstacked tinted shulker boxes
-   [MC-269809](https://bugs.mojang.com/browse/MC-269809) Feeding an axolotl an oversized tropical fish bucket resets the stack size to 1
-   [MC-270296](https://bugs.mojang.com/browse/MC-270296) Ominous Item Spawner spawns unstackable arrows with potion effects
-   [MC-270635](https://bugs.mojang.com/browse/MC-270635) Trial spawners textures are inconsistent
-   [MC-270684](https://bugs.mojang.com/browse/MC-270684) set\_attributes loot function doesn't accept an empty list
-   [MC-270687](https://bugs.mojang.com/browse/MC-270687) Maces enchanted with wind burst don't reliably protect players from fall damage
-   [MC-270779](https://bugs.mojang.com/browse/MC-270779) Getting data with /data command from a block/chest with a large amount of data can cause the game to crash
-   [MC-270818](https://bugs.mojang.com/browse/MC-270818) Data generator items report is not deterministic
-   [MC-270926](https://bugs.mojang.com/browse/MC-270926) "foodSaturationLevel" can be negative
-   [MC-270965](https://bugs.mojang.com/browse/MC-270965) The data type of the "minecraft:custom\_data" component of the recipe result will be forcibly modified
-   [MC-271001](https://bugs.mojang.com/browse/MC-271001) Items in a container can be given a count above 99 (to max integer), and can crash the world
-   [MC-271005](https://bugs.mojang.com/browse/MC-271005) Knowledge books with a max stack size over 1 consume all items in the stack when used
-   [MC-271026](https://bugs.mojang.com/browse/MC-271026) Components that set a status effect sometimes lose parts of the data
-   [MC-271094](https://bugs.mojang.com/browse/MC-271094) Entity ID inside EntityTag is ignored when updating a world to 1.20.5
-   [MC-271159](https://bugs.mojang.com/browse/MC-271159) Banner pattern entries without colors are invalidated when upgrading to 1.20.5
-   [MC-271170](https://bugs.mojang.com/browse/MC-271170) Unexpected error when modifying skull's custom name to an invalid value
-   [MC-271398](https://bugs.mojang.com/browse/MC-271398) Crafting ingredients remain in the grid after crafting certain items, causing item duplication
-   [MC-271400](https://bugs.mojang.com/browse/MC-271400) The quick charge enchantment on crossbows no longer increases the crossbow loading speed
-   [MC-271402](https://bugs.mojang.com/browse/MC-271402) Sharpness and mob-specific damage enchantments reduce attack damage instead of increasing it
-   [MC-271404](https://bugs.mojang.com/browse/MC-271404) Breach and Density enchantments aren't mutually exclusive
-   [MC-271406](https://bugs.mojang.com/browse/MC-271406) Blocks reappear when mined instantly
-   [MC-271422](https://bugs.mojang.com/browse/MC-271422) Soul Speed causes your FOV to change whenever you jump
-   [MC-271423](https://bugs.mojang.com/browse/MC-271423) Riptide enchantment does not work properly
-   [MC-271427](https://bugs.mojang.com/browse/MC-271427) Sweep attacks no longer trigger consistently
-   [MC-271434](https://bugs.mojang.com/browse/MC-271434) Campfires knockback the player
-   [MC-271435](https://bugs.mojang.com/browse/MC-271435) Moving while being attacked no longer deals knockback correctly
-   [MC-271436](https://bugs.mojang.com/browse/MC-271436) Mace can no longer be enchanted with Fire Aspect
-   [MC-271441](https://bugs.mojang.com/browse/MC-271441) Fire Protection tooltip is displayed in red text despite being a positive effect
-   [MC-271442](https://bugs.mojang.com/browse/MC-271442) The fire aspect enchantment can change the "lit" states of redstone lamps, redstone torches, copper bulbs, furnaces, smokers, and blast furnaces
-   [MC-271444](https://bugs.mojang.com/browse/MC-271444) The fire aspect enchantment can turn on campfires and candles while underwater
-   [MC-271455](https://bugs.mojang.com/browse/MC-271455) When holding a fire aspect weapon in the mainhand, thrown tridents in the offhand will set mobs on fire
-   [MC-271459](https://bugs.mojang.com/browse/MC-271459) Frost walker deletes waterlogged blocks
-   [MC-271461](https://bugs.mojang.com/browse/MC-271461) Interacting with certain villagers with the villager trade rebalance enabled causes client crash
-   [MC-271477](https://bugs.mojang.com/browse/MC-271477) "projectile\_spawned" enchantment effect always activates at 0, 0, 0
-   [MC-271484](https://bugs.mojang.com/browse/MC-271484) Lighting candles and campfires with fire aspect doesn't send vibration to sculk sensors
-   [MC-271556](https://bugs.mojang.com/browse/MC-271556) The drop rate of wither skeleton skulls is lowered by 0.01
-   [MC-271565](https://bugs.mojang.com/browse/MC-271565) The game can crash when upgrading worlds with zombie villagers from before 1.9
-   [MC-271632](https://bugs.mojang.com/browse/MC-271632) Weapon with Bane of Arthropods can only give the target slowness I instead of slowness IV
-   [MC-271637](https://bugs.mojang.com/browse/MC-271637) The enchantment entity effect type "run\_command" always runs the command in the overworld
-   [MC-271652](https://bugs.mojang.com/browse/MC-271652) Holding items enchanted with thorns in your hand no longer works as if you were wearing them
-   [MC-271710](https://bugs.mojang.com/browse/MC-271710) Key Binds background is darker than the rest of UI
-   [MC-271725](https://bugs.mojang.com/browse/MC-271725) Enchantment entity effect "apply\_mob\_effect" never applies an amplifier even if one is defined.
-   [MC-271726](https://bugs.mojang.com/browse/MC-271726) The item.trident.thunder sound can no longer be heard by the player who was struck by a lightning

---

Because it's the month of May, may we tempt you with the first Snapshot for Java Edition 1.21? This one looks as excellent as it sounds, thanks to the 20 new paintings and 3 new music discs it adds to the game. And we're not stopping there, data-driven enchantments are also being thrown into the fray with this Snapshot (hence the 900+ line changelog). We also included a batch of new bug fixes for good measure.

Happy mining!

## New Features

-   All Features from the experimental 1.21 pack have been moved to vanilla
-   Added 5 new paintings by artist Sarah Boeving
-   Added 15 new paintings by artist Kristoffer Zetterstrand
-   Added 9 new music tracks
-   Added 3 new music discs

### Music

-   Added 9 new background music tracks which will all play in the main menu
-   Some of these new songs play in specific biomes in-game:
    -   `featherfall`
        -   Plays in Badlands, Cherry Grove, Flower Forest, and Lush Caves
    -   `deeper`
        -   Plays in Deep Dark and Dripstone Caves
    -   `eld_unknown`
        -   Plays in Dripstone Caves, Grove, Jagged Peaks, and Stony Peaks
    -   `endless`
        -   Plays in Dripstone Caves, Grove, Jagged Peaks, and Stony Peaks
    -   `pokopoko`
        -   Plays in Dripstone Caves, Grove, Jagged Peaks, and Snow Slopes
-   The following have been added to the pool of songs which play in Overworld biomes that do not have biome-specific music:
    -   `featherfall`
    -   `komorebi`
    -   `puzzlebox`
    -   `watcher`
    -   `yakusoku`

### Music Discs

-   Added 3 new music discs
-   Aaron Cherof - Precipice can be found rarely in standard Vaults
    -   Has a comparator output of 13 when played in a Jukebox
-   Lena Raine - Creator can be found rarely in Ominous Vaults
    -   Has a comparator output of 12 when played in a Jukebox
-   Lena Raine - Creator (Music Box) can be found rarely in Decorated Pots broken in Trial Chambers
    -   Has a comparator output of 11 when played in a Jukebox

### Paintings

-   Added five new paintings by artist Sarah Boeving:
    -   `baroque`
    -   `humble`
    -   `meditative`
    -   `prairie_ride`
    -   `unpacked`
-   Added fifteen new paintings by artist Kristoffer Zetterstrand:
    -   `backyard`
    -   `bouquet`
    -   `cavebird`
    -   `changing`
    -   `cotan`
    -   `fern`
    -   `endboss`
    -   `finding`
    -   `lowmist`
    -   `orb`
    -   `owlemons`
    -   `passage`
    -   `pond`
    -   `sunflowers`
    -   `tides`

## Changes

-   Rotten flesh has been removed as a possible item for Trial Spawners to eject
-   Mace enchantments are slightly more common in Ominous Vaults
-   Projectile knockback is no longer dependent on the shooters position
    -   Projectiles such as Arrows and Fireballs knock back in the direction they travel
    -   Projectiles such as Splash Potions and Fireworks knock back away from themselves
    -   Projectiles shot by a Dispenser will also knock back
-   Updated the confirmation-screens in Realms to show as popups
-   Changes to the Mace

### Mace

-   Raised Mace durability from 250 to 500
-   Reduced Mace base damage to 5
-   Lower the Mace attack speed from -2.4 to -3.5
-   Reduced Density damage per level per block to 0.5
-   Mace Smash attack damage now has a fall off:
    -   First 3 blocks fallen give 4 damage per block
    -   Next 5 blocks fallen give 2 damage per block
    -   Any block fallen after that give 1 damage per block
-   Density and Breach are now incompatible with each other and the other damage enchantments (Smite and Bane of Arthropods)

### Trial Chambers

-   Spider spawners have been moved to the "melee" category
-   Slime spawners have been moved to the "small melee" category
-   Made various layout changes in intersections and corridors
-   Added new trap dispenser style to chambers
-   Fixed various broken jigsaw connections in the corridors
-   Made seams match in corridors
-   Added new entrance variations
-   Fixed various broken or incorrect jigsaw data
-   Added empty Chests to chamber entrances

### Ominous Trial Spawner

-   Ominous Trial Spawners with mobs that are unable to wear equipment now spawn double the total mob count over the course of the challenge
    -   These spawners will also have an additional mob out at once during its challenge
-   Bottle o' Enchanting is no longer a possible projectile for Ominous Trial Spawners

### Copper Doors and Trapdoors

-   Copper Doors and Trapdoors are now crafted from Copper Ingots instead of Copper Blocks
-   Oxidized variants of Copper Doors and Copper Trapdoors can no longer be crafted
    -   Waxed variants can still be crafted with Honeycomb

## Technical Changes

-   Resource Pack version is now 33
-   Data Pack version is now 42
-   Removed the `update_1_21` feature flag and built-in datapack

## Data Pack Version 42

-   Added new Music Disc items and loot table entries for the Music Discs
-   Painting variants are now data-driven
-   The item argument in the `/give`, `/item`, and `/loot` commands now supports removal of default components with `!` prefix
    -   e.g. `/give @s diamond_pickaxe[!tool]` will give a Diamond Pickaxe without the `tool` component
-   Enchantments are now data-driven
-   Enchantments that show up in the game are now controlled by Enchantment Providers
-   Enchantment exclusivity is now controlled through tags
-   Changes to predicates and loot table functions

### Painting variants

-   Painting variants registry are now loaded from packs
-   Path to painting definition is `data/<namespace>/painting_variant/<id>.json`
-   Fields in definition:
    -   `width` - width of painting in blocks, between 1 and 16
    -   `height` - height of painting in blocks, between 1 and 16
    -   `asset_id` - id of sprite in `paintings` atlas

### Enchantments

Enchantments are now set through data. An Enchantment is a set of core properties like level ranges and cost together with some effects. Most effect types also support a set of conditions, making it possible to apply them only when certain criteria are met.

Enchantments can be added in the registry `enchantment`. All Vanilla Enchantments can be found in the vanilla datapack in the client and server jar files.

Fields:

-   `description`: The name of the Enchantment when displayed in text represented as a Text Component
-   `exclusive_set`: The Enchantment(s) this Enchantment is exclusive with
    -   Two Enchantments can never co-exist on an item if either is in the other's exclusive set
    -   Specified as an Enchantment ID, a list of Enchantment IDs or an Enchantment Tag prefixed with `#`
    -   Optional - if omitted, the exclusive set is empty
-   `supported_items`: The item types that can have this Enchantment
    -   Item ID, list of item IDs or tag prefixed with `#`
-   `primary_items`: The item types for which this Enchantment shows up in Enchanting Tables and on traded equipment
    -   Item ID, list of item IDs or tag prefixed with `#`
    -   Must be a subset of `supported_items`
-   `weight`: How commonly the Enchantment appears, compared to the total combined `weight` of all available Enchantments
    -   Positive integer - higher values mean more common
-   `max_level`: The maximum level of the Enchantment
    -   All Enchantments range from level 1 to their maximum level
    -   Positive integer
-   `min_cost`, `max_cost`: describe the range of costs for this Enchantment in the Enchanting Table (and how much it returns when disenchanted)
    -   Both min and max cost are described using a linear formula:
    -   `base`: Base cost at level 1
    -   `per_level_above_first`: Added for each level over 1
-   `anvil_cost`: The fee taken for the Enchantment in the anvil
    -   Non-negative integer
    -   This value is halved when an Enchantment is added to a book
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

-   `name`: The name of the Attribute Modifier to add
-   `attribute`: The ID of the attribute to modify
-   `operation`: The operation of the Attribute Modifier
    -   One of `add_value`, `add_multiplied_base` and `add_multiplied_total`
-   `amount`: A Level-Based Value describing the amount
-   `uuid`: A string containing a UUID for the Attribute Modifier to use
    -   Must be unique to avoid different Enchantments (or other systems) interfering with each others

#### Entity Effect Types

Entity Effects are Enchantment effects that generally do something to an Entity involved in an event. Which Entity is affected depends on the specific component being configured.

##### `all_of`

An Entity Effect that runs a list of other Entity Effects. This can be useful when a set of conditions should apply to more than one Entity Effect.

Fields:

-   `effects`: List of Entity Effects to run

##### `apply_mob_effect`

An Entity Effect that applies a random Mob Effect to the affected Entity, chosen from a set of options. The duration and amplifier are randomized within a given span. The effect of specifying larger maximum values than the minimum value is undefined.

Fields:

-   `to_apply`: Options for the Effect to apply
    -   One of an Effect ID, a list of Effect IDs or an Effect Tag prefixed by `#`
-   `min_duration`, `max_duration`: Level-Based Values representing the minimum and maximum duration of the effect in seconds
-   `min_amplifier`, `max_amplifier`: Level-Based Values representing the minimum and maximum amplifier

##### `damage_entity`

An Entity Effect that applies damage to the affected Entity. The amount of damage is randomized within a given span. The effect of specifying a larger maximum value than the minimum value is undefined.

Fields:

-   `damage_type`: The ID of the Damage Type to use
-   `min_damage`, `max_damage`: Level-Based Values representing the minimum and maximum amount of damage

##### `damage_item`

An Entity Effect that applies damage to the Enchanted Item.

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

An Entity Effect that ignites the affected Entity for a given number of seconds.

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

##### `replace_disc`

An Entity Effect that replaces blocks in a disc / cylinder in the world.

Fields:

-   `block_state`: A block state provider giving the block state to set
-   `radius`: A Level-Based Value describing the radius of the cylinder
-   `height`: A Level-Based Value describing the height of the cylinder
-   `offset`: A positional offset from the position of the event to the center of the cylinder
    -   Format: list of 3 integers representing X, Y and Z offset
    -   Optional, if omitted \[0, 0, 0\] is used
-   `predicate`: A World-generation style Block Predicate to used to determine if the block should be replaced
    -   Optional, if omitted all block types are replaced

##### `run_function`

An Entity Effect that runs a Command Function. The execution entity the effect is executing for is represented as `@s` and `~ ~ ~` is the position of the event.

Fields:

-   `function`: Namespaced ID of the Command Function to run

##### `set_block_properties`

An Entity Effect that sets properties on a block

Fields:

-   `properties`: map of property key to property value (same format as a `minecraft:block_state` item component)
-   `offset`: A positional offset from the position of the event to the center of the cylinder
    -   Format: list of 3 integers representing X, Y and Z offset
    -   Optional, if omitted \[0, 0, 0\] is used

##### `spawn_particles`

An Entity Effect that spawns particles around the affected Entity.

Fields:

-   `particle`: A particle type definition
-   `horizontal_position`, `vertical_position`: Decides where the particle spawns horizontally and vertically. Objects with fields:
    -   `type`: Specifies the position selectiont type. One of:
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
    -   `movement_scale`: A floating point scale factor applied to the Entity speed along the given axis
        -   Optional, interpreted as `0` if omitted
        -   Example: a `movement_scale` of `1` adds the velocity of the Entity to the spawned particles

##### `summon_entity`

An Entity Effect that summons a new Entity, randomly chosen from a set of Entity Types, at the site of the event.

Fields:

-   `entity`: The options for the Entity Type to summon
    -   Either an Entity Type ID, a list of Entity Type IDs or an Entity Type Tag prefixed with `#`
-   `join_team`: Boolean that specifies whether the summoned Entity should join the team of the owner of the Enchanted Item

#### Location-Based Effect Types

Location-Based Effects are special effects that activate and deactivate depending on where the owner of the Enchanted Item moves. Location-Based Effect only trigger when such items are initially equipped and subsequently when the owning Entity moves to a new space in the Block grid - i.e. when their coordinates change to a new integer value.

All Entity Effect types can also be used as Location-Based Effects, and in addition `attribute` can be used to specify an Attribute Effect as a location-based effect.

#### Effect Conditions

Most Enchantment effects are filtered using Conditions (same types as in loot tables). This enables effects to be specific for different situations. Each Effect Component defines which parameters are available for the condition to evaluate - some parameters are available for all of these parameter sets, while some are specific to a certain set.

Each effect component specifies which parameters are available in the [Effect Components](#effect-components) list below.

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

#### Effect Components

The `effects` field in an Enchantment is a map of Effect Component type the Effect List data. Most Effect Components are lists, so any number of Effects can be added of any Component Type. The data for each effect generally involves having a specified condition context and Effect Type, but some Effects also deviate from this format.

In cases where the documentation specifies a Condition Context and Effect, the Component is a list. Each entry in the list has a field named `effect` with the effect of the type used by the list. Entries can also optionally include a field named `requirements` specifying the condition parameters, which are then evaluated with the documented context.

-   `minecraft:armor_effectiveness`: Effects for changing the armor effectiveness of the target of an attack
    -   Condition Context: Damage Parameters
    -   Effect: Value Effect on the armor effectiveness: 0 for completely ineffective, 1 for fully effective
-   `minecraft:attributes`: Unfiltered list of Attribute Effects.
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
    -   Condition Context: Item Parameters - Tool is the Crossbow
    -   Effect: Value Effect on the charge time of the Crossbow in seconds
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
    -   Condition Context: Entity Parameters - `this` is the entity hitting the Block
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
    -   Condition Context: Entity Parameters - `this` is the Entity using the Weapon
    -   Effect: Value effect on the maximum spread of projectiles measured in degrees from the aim line
-   `minecraft:projectile_spawned`: Effects applying after a projectile entity has been spawned when firing a projectile weapon
    -   Condition Context: Entity Parameters - `this` is the projectile Entity
    -   Effect: Entity Effect on the projectile Entity
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
    -   Condition Context: Entity Parameters - `this` is the Player holding the Trident
    -   Effect: Value Effect on the attack strength
    -   Any resulting value greater than 0 converts the Trident to be a spin attack weapon instead of a thrown attack
-   `minecraft:trident_sound`: Effect for changing the charging sounds of a Trident attack
    -   Note: Only one of these effects can ever be active - the highest level is picked
    -   Format: A list of sound events
    -   Each entry in the list represents the sound at one level of the Enchantment, so the first entry represents the sound used by a level 1 Enchantment

### Enchantment Providers

Enchantment Providers are new ways for the game to source Enchantments to use in various situations where Enchantments show up.

#### Spawn Equipment Enchantment Providers

-   `mob_spawn_equipment`: Enchantment provider for mobs that spawn with randomly Enchanted equipment
-   `pillager_spawn_crossbow`: Enchantment provider for Pillagers that spawn with Enchanted Crossbows
-   `raid/pillager_post_wave_3`: Enchantment provider applied as a buff on the Crossbow of Pillagers spawning as waves 4 and 5
-   `raid/pillager_post_wave_5`: Enchantment provider applied as a buff on the Crossbow of Pillagers spawning as waves above 5
-   `raid/vindicator`: Enchantment provider applied as a buff on the Axe of a Vindicator spawning as wave 1-5
-   `raid/vindicator_post_wave_5`: Enchantment provider applied as a buff on the Axe of a Vindicator spawning as waves above 5

#### Enderman Loot Enchantment Provider

-   `enderman_loot_drop`: An Enchantment provided used for the "fake tool" applied to the carried block of a killed Enderman

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

#### Enchantment Tags

##### Enchantment Functionality Tags

-   `curse`: Enchantments that get listed in red in tooltips and cannot be removed by disenchanting
-   `prevents_bee_spawns_when_mining`: Enchantments that allow a tool to mine bee nests and hives with the bees still inside
-   `prevents_decorated_pot_shattering`: Enchantments that make a tool not shatter decorated pots
-   `prevents_ice_melting`: Enchantments that cause a tool to not break Ice into Water
-   `prevents_infested_spawns`: Enchantments that allow a tool to break Infested blocks without causing the mob inside to spawn
-   `smelts_loot`: Enchantments that cause loot drops to be smelted

##### Enchantment Availability Tags

-   `tradeable`: Enchantments that show up on Books in Villager trades
-   `on_traded_equipment`: Enchantments that show up on enchanted equipment in Villager trades
-   `double_trade_price`: Enchantments that double the Emerald cost when traded
-   `in_enchanting_table`: Enchantments that can show up in the Enchanting Table
-   `on_mob_spawn_equipment`: Enchantments that can show up on equipment worn by randomly spawned Mobs
-   `on_random_loot`: Enchantments that can show up on loot in loot chests found in the world

##### Enchantment Exclusivitity Tags

New tags used by the Vanilla Enchantments to control which ones are mutually exclusive, all of which are found under the `exclusive_set/` path.

-   `armor`: Enchantments that cannot co-exist on Armor pieces
-   `boots`: Enchantments that cannot co-exist on Boots
-   `bow`: Enchantments that cannot co-exist on Bows
-   `crossbow`: Enchantments that cannot co-exist on Crossbows
-   `damage`: Damage-increasing Enchantments that cannot co-exist
-   `mining`: Mining-related Enchantments that cannot co-exit
-   `riptide`: Enchantments that cannot co-exist with Riptide

##### Trade Rebalance Enchantment Tags

In the experimental `trade_rebalance` pack, each biome type has two tags:

-   `trades/<biome>_common`: Contains Enchantments traded on the lower profession levels
-   `trades/<biome>_special`: Contains Enchantments traded on the highest profession level

#### Damage Type Tags

-   `burn_from_stepping`: Damage types that represent burning damage from stepping on something - in particular, damage types counterd by the `frost_walker` Enchantment

### Loot tables

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
-   `chance`: this is now a Level-Based Values
-   `enchantment`: new field containing the namespaced ID of the Enchantment which grants the bonus chance

#### Functions

##### `enchanted_count_increase`

Renamed from `looting_enchant`. Now has a new field:

-   `enchantment`: Namespaced ID of the Enchantment that increases yields

##### `enchant_randomly`

-   Changed format - the `enchantments` field is now called `options`
-   `options` is now specified as one of an Enchantment, a list of Enchantments or an Enchantment Tag (prefixed with `#`)
-   `only_compatible`: New optional boolean field - if `true`, only allows enchantments that are compatible with the item
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

-   `amount`: A [Level-Based Value](#level-based-values) giving a value based on the level of the Enchantment

### Predicates

#### Enchantment Predicate

-   The `enchantment` field has been removed
-   Added an `enchantments` field, one of an Enchantment, a list of Enchantments or an Enchantment Tag (prefixed with `#`)
    -   If multiple Enchantments are specified through a list or a tag, the Predicate matches if any Enchantment matches
-   If no `enchantments` field is specified, any enchantment matching `levels` will succeed the test
    -   If neither the `levels` nor `enchantments` fields are defined, the predicate will match an item that has any enchantment

#### Entity Flags Predicate

New possible fields:

-   `is_on_ground`: Optional boolean - if provided, matches the "on ground" state of the entity
-   `is_flying`: Optional boolean - if provided, matches whether the entity is flying, including:
    -   Gliding with Elytra
    -   Flying in Creative Mode

#### Location Predicate

New possible fields:

-   `can_see_sky`: Optional boolean - if provided, matches exactly when the location has the maximum possible level of sky light
-   `weather`: Optional enumerated value, matching the weather in the location's dimension. One of:
    -   `clear`
    -   `raining`
    -   `thunder`

#### Movement Predicate

New sub-predicate available as `movement` in Entity Predicates. Possible fields:

-   `x`, `y`, `z`: `min`/`max` limits for movement speed along a certain axis in blocks / second
-   `speed`: `min`/`max` limits for overall movement speed in blocks / second
-   `horizontal_speed`: `min`/`max` limits for the horizontal speed component of the Entity's movement in blocks / second
-   `vertical_speed`: `min`/`max` limits for the vertical speed component of the Entity's movement in blocks / second
-   `fall_distance`: `min`/`max` limits for the fall distance of the Entity in blocks

#### Periodic Ticks

New Entity sub-predicate available as `periodic_ticks` in Entity Predicates. Format: a positive integer.

This sub-predicate is true every _n_ ticks of an Entity's lifetime.

### Attributes

#### `generic.attack_knockback`

Now also works on Players.

#### `generic.burning_time`

A factor to how long an Entity remains on fire after being ignited. A factor of `0` removes the entire burn time, a factor of `1` lets the Entity burn the default fire time - larger values increase the amount of time the entity remains on fire.

-   Default: `1`
-   Minimum: `0`
-   Maximum: `1024`

#### `generic.explosion_knockback_resistance`

A factor to how much knockback an Entity takes from an Explosion. A factor of `1` removes the entire knockback, a factor of `0` means no knockback reduction.

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

How much of the base attack damage that gets transfered transfer to secondary targets in a sweep attack. This is additive to the base attack of the sweep damage itself of `1`. A value of `0` means none of the base attack damage is transferred (sweep damage is `1`). A value of `1` means all of the base attack damage is transferred (sweep damage is `attack_damage + 1`)

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

New block predicate type that passes if the selected block is unobstructed (no Entities are in the space of the block).

Fields:

-   `offset`: List of 3 int offset coordinates, specifying the offset from the origin position to test
    -   Optional, defaults to `[0, 0, 0]` if unspecified

### Entity Data

#### Projectiles

Arrow-like projectile data now contains a `weapon` field containing an Item Stack representing the weapon the projectile was fired from. The following fields have been removed:

-   `ShotFromCrossbow`

## Resource Pack Version 33

-   Added new textures and music assets for Music Discs
-   Renamed sound events for Ominous Trial Spawner becoming active and ambient sound

## Fixed bugs in Snapshot 24w18a

-   [MC-44280](https://bugs.mojang.com/browse/MC-44280) Entities don't receive knockback from projectiles fired from dispensers
-   [MC-59626](https://bugs.mojang.com/browse/MC-59626) Arrows lose their Punch enchantment property when unloaded
-   [MC-76104](https://bugs.mojang.com/browse/MC-76104) Guardians are unaffected by Thorns enchantment
-   [MC-93669](https://bugs.mojang.com/browse/MC-93669) The sweeping attack doesn't ignite other mobs when using the fire aspect enchantment
-   [MC-99411](https://bugs.mojang.com/browse/MC-99411) Frost Walker ice only semi-affected by randomTickSpeed gamerule
-   [MC-116643](https://bugs.mojang.com/browse/MC-116643) Silk Touch cannot be combined with Looting or Luck of the Sea
-   [MC-117361](https://bugs.mojang.com/browse/MC-117361) Mob type specific damage enchantment (Smite, Bane of Arthropods) affects all nearby entities when hitting affected mob with Sweeping Edge
-   [MC-131637](https://bugs.mojang.com/browse/MC-131637) The slowness effect is applied to entities when the bane of arthropods enchantment is held in the off hand
-   [MC-158245](https://bugs.mojang.com/browse/MC-158245) Fire Aspect enchantment from mobs can set you on fire even when blocking with a shield
-   [MC-177965](https://bugs.mojang.com/browse/MC-177965) Putting on/taking off soul speed boots while standing on soul sand/soil does not properly give speed
-   [MC-182606](https://bugs.mojang.com/browse/MC-182606) When sneak-walking with Soul Speed on a Soul Sand or Soul Soil block (most noticeably) adjacent to lava, too many soul particles spawn
-   [MC-188693](https://bugs.mojang.com/browse/MC-188693) FOV doesn't change back when riding a mob after staying on Soul Sand with Soul Speed
-   [MC-189365](https://bugs.mojang.com/browse/MC-189365) Player can retain Soul Speed effect by bridging
-   [MC-200899](https://bugs.mojang.com/browse/MC-200899) Players don't receive thorns damage when attacking entities wearing thorns armor with indirect sweeping attacks
-   [MC-200991](https://bugs.mojang.com/browse/MC-200991) Soul Speed in minecart uses durability
-   [MC-213349](https://bugs.mojang.com/browse/MC-213349) Certain mobs that can melee can't use the Fire Aspect enchantment
-   [MC-215144](https://bugs.mojang.com/browse/MC-215144) A re-created "Default" world has world type of "Custom"
-   [MC-223301](https://bugs.mojang.com/browse/MC-223301) Goats not taking damage when attacking with Thorns armor equipped
-   [MC-224743](https://bugs.mojang.com/browse/MC-224743) Jumping on soul sand uses durability of Soul Speed boots
-   [MC-225312](https://bugs.mojang.com/browse/MC-225312) Evokers using evoker fangs are not affected by the Thorns enchantment
-   [MC-232770](https://bugs.mojang.com/browse/MC-232770) Entities receive knockback from incorrect directions when being damaged by firework explosions
-   [MC-234880](https://bugs.mojang.com/browse/MC-234880) Llama's unaffected by Thorns
-   [MC-237057](https://bugs.mojang.com/browse/MC-237057) The "minecraft:particle.soul\_escape" sound is very rarely heard by other players when using boots enchanted with soul speed
-   [MC-237063](https://bugs.mojang.com/browse/MC-237063) Particles produced from using boots enchanted with soul speed are inconsistently displayed for other players
-   [MC-248272](https://bugs.mojang.com/browse/MC-248272) Enchantment::doPostHurt and Enchantment::doPostAttack are called twice for players
-   [MC-253457](https://bugs.mojang.com/browse/MC-253457) Cats and Ocelots are immune to Thorns damage
-   [MC-258497](https://bugs.mojang.com/browse/MC-258497) Parity issue: Fire Aspect enchant does not set fire to candles
-   [MC-258967](https://bugs.mojang.com/browse/MC-258967) Entities receive knockback from splash potions based on the direction that the said entity was facing when throwing the potion
-   [MC-261701](https://bugs.mojang.com/browse/MC-261701) Lag spike when opening creative inventory for first time in world
-   [MC-266556](https://bugs.mojang.com/browse/MC-266556) Trial spawner cannot be activated in peaceful difficulty
-   [MC-267154](https://bugs.mojang.com/browse/MC-267154) Using an Eye of Ender plays the minecraft:entity.ender\_eye.launch sound event twice
-   [MC-267441](https://bugs.mojang.com/browse/MC-267441) When a player's generic.step\_height attribute is set to more than two, attempting to step atop of more than two blocks may fail if there are blocks higher up
-   [MC-268347](https://bugs.mojang.com/browse/MC-268347) Setting gravity higher than 0.84 allows you to jump up a block
-   [MC-268367](https://bugs.mojang.com/browse/MC-268367) Arrows repeatedly bouncing off a breeze spam sound
-   [MC-268551](https://bugs.mojang.com/browse/MC-268551) When a wind charge is fired from a dispenser, it makes a "dispensed item" sound instead of a "Wind Charge flies" sound
-   [MC-268564](https://bugs.mojang.com/browse/MC-268564) Entities receive knockback from incorrect directions when being hit by projectiles deflected by breezes
-   [MC-269881](https://bugs.mojang.com/browse/MC-269881) Flow and Bolt Armor Trims don't grant "Crafting a New Look" advancement
-   [MC-269958](https://bugs.mojang.com/browse/MC-269958) New effects are not required for the "How Did We Get Here?" advancement
-   [MC-269966](https://bugs.mojang.com/browse/MC-269966) "A Furious Cocktail" Advancement does not require the new potion effects
-   [MC-269969](https://bugs.mojang.com/browse/MC-269969) Using a normal trial key on the ominous vault grants Under Lock and Key advancement
-   [MC-270021](https://bugs.mojang.com/browse/MC-270021) Drinking a single ominous bottle in survival doesn't grant bad omen with the correct amplifier
-   [MC-270031](https://bugs.mojang.com/browse/MC-270031) Arrows spawned from ominous trial spawner can be picked up
-   [MC-270047](https://bugs.mojang.com/browse/MC-270047) Axe Prioritizes Scraping Copper over Shield
-   [MC-270216](https://bugs.mojang.com/browse/MC-270216) Mace smash attack particles cannot be reduced with the Particles setting
-   [MC-270278](https://bugs.mojang.com/browse/MC-270278) "Who needs rockets?" is granted at heights lower than 8 blocks when using slow falling
-   [MC-270379](https://bugs.mojang.com/browse/MC-270379) Buttons and Levers don't make sounds when toggled by Wind Charges
-   [MC-270499](https://bugs.mojang.com/browse/MC-270499) Riptide trident in off-hand applies mace effects in main hand
-   [MC-270588](https://bugs.mojang.com/browse/MC-270588) Hitting Wind Charges and Fireballs makes no sound
-   [MC-270682](https://bugs.mojang.com/browse/MC-270682) modify\_contents item modifier can create overstacked items
-   [MC-270791](https://bugs.mojang.com/browse/MC-270791) Mace smash attack can knockback tamed mobs
-   [MC-270849](https://bugs.mojang.com/browse/MC-270849) Breeze can extinguish lit candles when mobGriefing is false
-   [MC-270934](https://bugs.mojang.com/browse/MC-270934) Missing trial chamber structure minecraft:trial\_chambers/chamber/addon/c6
-   [MC-270974](https://bugs.mojang.com/browse/MC-270974) Breeze wind charges can change activation blockstates of redstone components when mobGriefing is disabled
-   [MC-270977](https://bugs.mojang.com/browse/MC-270977) Breezes don't make deflection sounds
-   [MC-271039](https://bugs.mojang.com/browse/MC-271039) Upgrading to 1.20.5 leads to the removal of all enchantments if item had the "sweeping" enchantment without namespace
-   [MC-271157](https://bugs.mojang.com/browse/MC-271157) "Telemetry is disabled" tooltip does not get updated when the client locale changes

---

Hello Minecraft players! Today we have a Snapshot with some technical changes and bug fixes for you.

## Technical Changes

-   The Data Pack version is now 38
-   The game now requires Java 21
-   The game now requires a 64-bit Operating System
-   The included Java distribution is now the Microsoft build of OpenJDK 21.0.2

## Data Pack Version 38

-   Added `replace` field to the `set_attributes` loot function (default: `true`)
    -   When `false`, attributes will be appended
-   The `text` field within filterable entries in book components has been renamed to `raw` to avoid ambiguity
-   The `profile` component and fields on player head items and blocks respectively now support resolving from a UUID
    -   By specifying the `id` field without a `name`, the `name` and textures will be looked up

## Fixed bugs in Snapshot 24w14a

-   [MC-80142](https://bugs.mojang.com/browse/MC-80142) Power tag for wither skulls, small/dragon fireballs and wind charges is not synced correctly, leading to stuttering during flight
-   [MC-266467](https://bugs.mojang.com/browse/MC-266467) Wind charges stutter when flying through the air
-   [MC-268563](https://bugs.mojang.com/browse/MC-268563) Snowballs, eggs, experience bottles, and ender pearls are destroyed instead of being deflected when hitting breezes
-   [MC-268597](https://bugs.mojang.com/browse/MC-268597) Hitting a breeze with a player reflected/dispensed wind charge causes it to become trapped within the breeze until it moves
-   [MC-268727](https://bugs.mojang.com/browse/MC-268727) Server disconnects the client when sending a keepalive packet while transitioning out of configuration phase
-   [MC-268877](https://bugs.mojang.com/browse/MC-268877) Beehives/bee nests in inventory lose honey level after converting to newer world version
-   [MC-268945](https://bugs.mojang.com/browse/MC-268945) Some interfaces instantly close when opened from long distances when players have their "minecraft:player.block\_interaction\_range" attribute set to high values
-   [MC-269355](https://bugs.mojang.com/browse/MC-269355) Heavy Core has no required tool
-   [MC-269446](https://bugs.mojang.com/browse/MC-269446) "Are you sure you want to quit?" screen uses background blur
-   [MC-269482](https://bugs.mojang.com/browse/MC-269482) The set\_attributes function in loot tables no longer replaces default attribute modifiers
-   [MC-269503](https://bugs.mojang.com/browse/MC-269503) Goat horn default instrument is missing when using /give
-   [MC-269553](https://bugs.mojang.com/browse/MC-269553) Items with empty enchantments NBT tag do not upgrade as expected
-   [MC-269596](https://bugs.mojang.com/browse/MC-269596) EntityTag of existing items is not upgraded to entity\_data component
-   [MC-269677](https://bugs.mojang.com/browse/MC-269677) Filterable "text" field conflicts with text components
-   [MC-269684](https://bugs.mojang.com/browse/MC-269684) Commands accepting stack sizes are restricted to a maximum of 64
-   [MC-269700](https://bugs.mojang.com/browse/MC-269700) Item count in "/item replace" is restricted to the default stack size
-   [MC-269716](https://bugs.mojang.com/browse/MC-269716) Unable to craft the maximum possible allowed items using shift-click in the recipe book
-   [MC-269960](https://bugs.mojang.com/browse/MC-269960) Ctrl + Pick block is not copying container data correctly
-   [MC-269983](https://bugs.mojang.com/browse/MC-269983) Player Head Data is not evaluated when id is present
-   [MC-269991](https://bugs.mojang.com/browse/MC-269991) Dragon breath particles look wrong
-   [MC-270003](https://bugs.mojang.com/browse/MC-270003) Ominous banners are not "pick block"-ed properly
-   [MC-270061](https://bugs.mojang.com/browse/MC-270061) Ctrl + Pick Block does not copy Trial Spawner data correctly
-   [MC-270162](https://bugs.mojang.com/browse/MC-270162) The game crashes when attempting to upgrade a world from version 1.12.2 and below
-   [MC-270187](https://bugs.mojang.com/browse/MC-270187) Command block's nbt cannot copy before second save

---

This fine Wednesday brings 24w13a, a snapshot containing changes to the Mace, Trial Chambers, and introduces the new Ominous Trials!

You might just be inclined to try out the ominous new features of this snapshot. ...or else? Did I do that right?

Happy mining!

Note: some of the features below will only work in freshly generated Trial Chambers.

## Experimental Features

-   Changes to the Mace
-   Tweaks to the Breeze and Wind Charges
-   Redesigned Bad Omen
-   Added Ominous Bottle
-   Added 6 new mob effects
-   Added Ominous Trial Spawner
-   Added Ominous Vault
-   Added Ominous Trial Key

### Mace

-   Added a new explosive particle effect when executing a smash attack with the Mace to really show the player's power
-   Increased the power and range of the knockback effect from a smash attack
-   Introduced an even stronger knockback when falling for more than 5 blocks before attacking
-   When successfully striking a target, all vertical momentum will be reset in addition to negating any accumulated fall distance
-   The baseline additional damage dealt by the Mace smash attack has been slightly reduced to 3 (1.5 hearts) per fallen block
-   These existing enchantments can now be applied to the Mace:
    -   Mending
    -   Unbreaking
    -   Smite
    -   Bane of Arthropods
    -   Fire Aspect
    -   Curse of Vanishing
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

### Breeze & Wind Charges

-   The Breeze now avoids jumping into dangerous blocks or air
-   Wind Charges no longer collide with End Crystals

### Ominous Events

-   Bad Omen has been expanded to give access to an optional experience in Trial Chambers
-   These optional experiences accessed through Bad Omen are now known as Ominous Events
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

#### Ominous Bottle

-   An item which can be consumed by players to receive the Bad Omen effect for 1 hour and 40 minutes
    -   Comes in 5 variations, one for each Bad Omen level
    -   The bottle breaks when consumed
    -   Can be stacked to 64
-   Can be found uncommonly in any Vaults that are unlocked with Trial Keys, and is dropped by Raid Captains when defeated outside a Raid

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
    -   Very commonly spawns mobs with equipment if they can wear it
        -   The equipment these mobs wear have armor trims applied from the Trial Chambers
        -   Known issue: these mobs can currently drop their equipment on death, but they will not in the future
    -   Periodically spawn potions and projectiles on top of unsuspecting players and mobs
        -   Based on their location, spawners in an area will select a random set of projectiles to spawn
        -   These projectiles will always include a single type of Lingering Potion from a set of possible effects
-   Becoming Ominous will despawn any existing mobs it spawned and reset its challenge
    -   It will stay Ominous until it has been defeated and its cooldown has finished
-   When defeated, it will eject a different set of loot to normal Trial Spawners

#### Ominous Trial Key

-   A new variant of the Trial Key which can only be obtained by defeating an Ominous Trial Spawner
-   They can be used to unlock Ominous Vaults

#### Ominous Vault

-   A variant of Vaults that have a different texture and emit soul flames instead of normal flames
-   These can be found throughout the Trial Chambers in harder to find places and require an Ominous Trial Key to unlock
    -   These Vaults hold a more valuable set of rewards than the standard Vaults unlocked by Trial Keys

### Mob Effects

-   The following effects have been added:
    -   Wind Charged
        -   Affected entities will emit a wind burst upon death
        -   Brewed with an Awkward Potion and a Breeze Rod
    -   Weaving
        -   Affected entities will spread Cobweb blocks upon death
        -   Non-player entities with this effect can walk through Cobweb at normal speeds
        -   Brewed with an Awkward Potion and a Cobweb block
    -   Oozing
        -   Affected entities will spawn two Slimes upon death
        -   Brewed with an Awkward Potion and a Slime Block
    -   Infested
        -   Affected entities have a 5% chance to spawn 1-2 Silverfish when hurt
        -   Brewed with an Awkward Potion and a Stone block
-   These effects can be encountered while taking on an Ominous Trial Spawner
-   Some mobs are immune to these effects
    -   Slimes are immune to Oozing
    -   Silverfish are immune to Infested

### Trial Chambers Loot

-   The loot found within Trial Chamber Vaults has been adjusted
-   Standard Vaults will give slightly less items of high quality, but also include the following changes:
    -   Ominous Bottle I - II can be found
    -   Flow Banner Pattern, Flow Armor Trim Smithing Template, and Heavy Core can no longer be obtained
        -   Guster Banner Pattern and Bolt Armor Trim Smithing Template remain exclusive to standard Vaults
        -   In Heavy Core's place, standard Vaults will instead have a very rare chance of providing a Trident
-   Ominous Vaults can provide some particularly valuable items, to mention a few:
    -   Ominous Bottle III - V
    -   Enchanted Golden Apple
    -   Flow Banner Pattern and Flow Armor Trim Smithing Template
    -   Wind Burst, Breach and Density Enchantments for the Mace
    -   Heavy Core
-   The loot ejected from Trial Spawners have been adjusted
    -   It now has a focus on providing higher quality food more often to make replenishing between fights more safe
-   Ominous Trial Keys have a 30% chance of ejecting from a defeated Ominous Trial Spawner, replacing the usual 50% chance to eject Trial Keys

### Trial Spawner

-   All spawners now increase the amount of mobs present at once by 0.5 for each additional player, down from 2
-   Baby Zombie spawners now only have 2 mobs present at once for its baseline, down from 3 mobs
-   Can now only activate when a player is in line of sight

### Trial Chambers

-   Remade `chamber_5` with variations, and renamed it to `eruption`
-   Reduced amount of Trial Spawners in corridors
-   Updated layout and placements of Vaults
-   Placed Ominous Vaults in chambers, intersections, at the ends of corridors
-   Corridors will no longer generate endlessly
-   Added an atrium to the corridors
-   Made various layout changes in intersections and corridors

Known issues:

-   Corner quadrants in slanted may still fail to generate correctly

## Changes in 24w13a

-   Added unique sounds for Cobwebs

## Technical Changes in 24w13a

-   The Data Pack version is now 37
-   The Resource Pack version is now 31
-   Client chat state is now preserved by default when entering configuration phase
-   Changes to chat network protocol

### Chat

-   Client chat state (on-screen messages and chat input history) is now preserved by client when entering and exiting configuration phase
-   Message signature chain handling remains unchanged - going into configuration phase starts new session
-   If client has message delay configured, pending messages will be delivered immediately before leaving world
-   Server can clear chat state by sending `reset_chat` packet in configuration phase

### Network Protocol

-   The `minecraft:chat_command_signed` packet has been split from `minecraft:chat_command`
    -   Commands that do not accept any signed arguments will use the unsigned packet, and will not pass any 'last seen' chat updates

## Data Pack Version 37

-   Added new loot table type `minecraft:equipment`
    -   Has required parameters of `this_entity` and `origin`
        -   `this_entity` : the mob that is about to be given equipment
        -   `origin` : the position of the mob
-   Added optional `equipment_loot_table` to the spawn data present in the `SpawnPotentials` of Monster Spawners and `spawn_potentials` of Trial Spawner configs
    -   If present, rolled items from the specified loot table will be equipped to the mob that spawns
-   Modified `copy_components` and `set_name` loot function arguments
-   Added new `set_ominous_bottle_amplifier` loot function
-   Added new item components
-   Non-default components on item stacks are now stored when block entity is placed
-   Int and float providers used in worldgen definitions are no longer wrapped in an extra `value` field next to `type`
    -   For example, `{"type":"minecraft:uniform","value":{"min_inclusive":0.0,"max_inclusive":1.0}}` becomes `{"type":"minecraft:uniform","min_inclusive":0.0,"max_inclusive":1.0}`
-   New Damage Type Tag: `minecraft:is_player_attack` for attacks performed by the player
-   New Entity Type Tags:
    -   `immune_to_oozing` For entities that cannot receive the Oozing mob effect
    -   `immune_to_infested` For entities that cannot receive the Infested mob effect
-   Added `raider` sub entity predicate

### Block entities

Non-default components on item stacks containing block items are now stored on block entities when placed

-   Component removals from defaults are currently not preserved
-   Placing and breaking non-block entity blocks remains unchanged - nothing is preserved
-   Does not automatically cause preserved components to be restored on drops - this requires addition of `copy_components` function to loot table
-   Components are stored in field called `components`
    -   Some components (like `custom_name`) are still handled by legacy serialization, which means they might not be present in there
    -   Contains map of component id to component value

### New Item Stack Components

#### `minecraft:item_name`

-   When present, replaces default item name with contained chat component
-   Differences from `custom_name`:
    -   `item_name` can't be changed or removed in anvil
    -   `item_name` is not styled with italics when displayed to player
    -   `item_name` does not show labels where applicable (for example: banner markers, names in item frames)

#### `minecraft:ominous_bottle_amplifier`

-   Controls the amplifier amount for an Ominous Bottle's bad omen effect
-   Format: integer between 0 and 4
    -   e.g. `ominous_bottle_amplifier=3`

### Loot Functions

#### `copy_components`

Removed field `components` and replaced it with:

-   `include` - optional list of data components to be copied from source
    -   if omitted, all components present are included
-   `exclude` - optional list of data components to be excluded from copying
    -   if omitted, defaults to empty
-   Only components that are included (explicitly or implicitly) but not excluded will be copied

#### `set_name`

Added optional field `target` to specify which name should be set

-   Values:
    -   `custom_name` - sets `custom_name` component (default)
    -   `item_name` - sets `item_name` component

#### Added `set_ominous_bottle_amplifier`

Sets the `ominous_bottle_amplifier` component on the target item according to a number provider.

-   `conditions`: list of conditions to filter this function
-   `amplifier`: a number provider used to generate the `ominous_bottle_amplifier` component

#### Entity sub-predicates

##### `raider`

New `raider` sub-predicate has been added to match raiders Fields:

-   `has_raid` - Match whether the raider is in an active raid
-   `is_captain` - Match whether the raider is a captain

## Resource Pack Version 31

-   Added the following particle types:
    -   `infested`
    -   `item_cobweb`
    -   `small_gust`
    -   `raid_omen`
    -   `trial_omen`
    -   `trial_spawner_detection_ominous`
    -   `ominous_spawning`
-   Added the following sound events:
    -   `block.cobweb.break`
    -   `block.cobweb.step`
    -   `block.cobweb.place`
    -   `block.cobweb.hit`
    -   `block.cobweb.fall`
    -   `block.trial_spawner.about_to_spawn_item`
    -   `block.trial_spawner.spawn_item`
    -   `block.trial_spawner.spawn_item_begin`
    -   `block.trial_spawner.charge_activate`
    -   `block.trial_spawner.ambient_charged`
    -   `item.ominous_bottle.dispose`
    -   `event.mob_effect.bad_omen`
    -   `event.mob_effect.trial_omen`
    -   `event.mob_effect.raid_omen`
-   Added textures for the following blocks and items:
    -   Ominous Vault
    -   Ominous Trial Spawner
    -   Ominous Bottle
-   Updated textures for normal Vault block
-   Added the following mob effect icon textures:
    -   `infested`
    -   `oozing`
    -   `weaving`
    -   `wind_charged`
    -   `raid_omen`
    -   `trial_omen`
    -   `bad_omen_121`
-   Added new models for Ominous state of Vault block

## Fixed bugs in 24w13a

-   [MC-123804](https://bugs.mojang.com/browse/MC-123804) Explorer map and Ominous banner names appear in item frames, draw in italics, and can be removed with an anvil
-   [MC-148057](https://bugs.mojang.com/browse/MC-148057) Ominous banners generated in outposts show the pattern list
-   [MC-166361](https://bugs.mojang.com/browse/MC-166361) GUI scale does not visually update when the option is changed using the keyboard and without the mouse
-   [MC-178410](https://bugs.mojang.com/browse/MC-178410) Banners don't support the HideFlags tag when placed down as blocks
-   [MC-268578](https://bugs.mojang.com/browse/MC-268578) Bogged mob sits wrong in boats
-   [MC-268627](https://bugs.mojang.com/browse/MC-268627) Slime spawns are incorrect
-   [MC-268716](https://bugs.mojang.com/browse/MC-268716) Magma Cubes spawn even if there's only 2 blocks in height
-   [MC-268882](https://bugs.mojang.com/browse/MC-268882) Same Enchantments in an item components crashes the game
-   [MC-268893](https://bugs.mojang.com/browse/MC-268893) Comparators require a block update to function properly, and droppers/observers receive false state changes
-   [MC-269015](https://bugs.mojang.com/browse/MC-269015) Wind charges can destroy end crystals
-   [MC-269143](https://bugs.mojang.com/browse/MC-269143) Attribute modifiers cannot exclusively target the "body" slot
-   [MC-269342](https://bugs.mojang.com/browse/MC-269342) The experimental features details menu is rendered incorrectly after resizing the game window
-   [MC-269371](https://bugs.mojang.com/browse/MC-269371) If the 'GUI Scale' option is on 'Auto', and if you try to scale it down using CTRL + mouse wheel, it shows as '-1'
-   [MC-269387](https://bugs.mojang.com/browse/MC-269387) Mace sounds use the neutral sound category
-   [MC-269388](https://bugs.mojang.com/browse/MC-269388) Mace falling damage increase is applied while using an elytra
-   [MC-269427](https://bugs.mojang.com/browse/MC-269427) Lingering potion particles are tinted black instead of the potion's color
-   [MC-269628](https://bugs.mojang.com/browse/MC-269628) Heavy cores delete water when placed into it
-   [MC-269635](https://bugs.mojang.com/browse/MC-269635) The game crashes when attempting to eat lily pads or frogspawn
-   [MC-269643](https://bugs.mojang.com/browse/MC-269643) Waterlogged heavy core does not update water flow correctly
-   [MC-269649](https://bugs.mojang.com/browse/MC-269649) Who Needs Rockets advancement is granted after launching yourself up 8 blocks instead of 7 blocks
-   [MC-269656](https://bugs.mojang.com/browse/MC-269656) Feeding parrots poison while holding mace grants Over-Overkill challenge
-   [MC-269659](https://bugs.mojang.com/browse/MC-269659) Parrots can now be fed carrots to kill them instead of cookies
-   [MC-269670](https://bugs.mojang.com/browse/MC-269670) Game crash when giving bundle with hide tooltip

---

Here's snapshot 24w12a with new advancements and several tweaks.

Happy Mining!

## Experimental Features

### Trial Chambers

Trial Chambers now generate slightly more rarely and a bit more spaced out from each other

### Trial Chambers Explorer Map

-   Struggle no more to locate a Trial Chamber - level up your nearest Cartographer to Journeyman for the opportunity to trade for an Explorer Map pointing to a nearby Trial Chamber

### Heavy Core

-   Can now be waterlogged
-   Survives lava flows
-   Most efficient tool is now the pickaxe
-   Adjusted destroy time and explosion resistance

### Advancements

-   Added the following advancements:
    -   `Minecraft: Trial(s) Edition` - Step foot in a Trial Chamber
    -   `Under Lock & Key` - Unlock a Vault using a Trial Key
    -   `[Challenge - 40 exp] Blowback` - Kill a Breeze with a deflected Wind Charge
    -   `Who Needs Rockets?` - Use a Wind Charge to launch yourself upward at least 8 blocks
    -   `Crafters Crafting Crafters` - Be near a Crafter when it crafts a Crafter
    -   `Lighten Up` - Scrape a Copper Bulb with an Axe to make it brighter
    -   `Over-Overkill` - Deal 50 hearts of damage in a single hit using the Mace

## Technical Changes

-   The Data Pack version is now 36
-   The Resource Pack version is now 30
-   -   Particle `entity_effect` takes color argument when spawned from command
    -   `/particle entity_effect <r> <g> <b> <a>`
    -   4 float values ranging from 0.0 to 1.0 representing RGBA

## Data Pack Version 36

-   Added a `crafter_recipe_crafted` trigger which is triggered when a Crafter ejects a successfully crafted item into the world.
    -   `<player>` an entity predicate matching the player who is nearby
    -   `<recipe_id>` is the ID of the recipe being crafted
    -   `<ingredients>` is a list of item predicates matching the ingredients that form the recipe being crafted
-   Added a `fall_after_explosion` trigger which is triggered when a player begins falling after being knocked upwards by an explosion or wind burst
    -   `<player>` an entity predicate matching the player who is falling
    -   `<start_position>` a location predicate matching the position the player was at when they were hit by the explosion or burst
    -   `<distance>` a distance predicate matching how far the player must be from `start_position` to cause the trigger to activate
    -   `<cause>` an entity predicate matching the entity which caused the explosion or burst to happen
-   Added `storage` loot number provider to access values from command storage
-   New Entity Type Tag: `sensitive_to_smite` - for Entity Types that take extra damage from the Smite Enchantment
-   Expanded item predicate syntax used in `execute if|unless items` and `clear` commands
-   Removed redundant custom data section (`{...}`) from item arguments (it's fully replaced by `[custom_data={...}]`)
    -   To make this transition easier, `custom_data` item sub-predicate has been changed to allow unquoted SNBT
-   Added `wolf` entity sub-predicate for matching wolf variants
-   `wolf`, `cat`, `frog` and `painting` entity sub-predicates now accept tags and plain lists instead of just single elements
-   Changed texture asset paths in `wolf_variant` to better match other formats
-   Command arguments that previously accepted namespaced ids of loot tables, modifiers and predicates can now also accept inline definitions
-   Added new item stack components
-   Added new loot functions

### `wolf_variant` definitions

-   Field `texture` has been renamed to `wild_texture`
-   `wild_texture`, `tame_texture` and `angry_texture` no longer require values to be prefixed with `textures/` and suffixed with `.png`

### Commands

#### Inline loot values

Arguments in following commands that previously accepted namespaced ids of loot tables, modifiers and predicates can now also accept inline definitions:

-   `loot`
-   `item`
-   `execute if predicate` Values have same structure as matching JSON files, though they are encoded as SNBT. Example: `execute if predicate {condition:weather_check, raining:true}`

### Loot tables

#### `storage` number provider

-   This number provider is able to access numeric values from command storage directly
-   If selected storage does not exist or tag selected by path is not numeric or does not exist, provider returns 0
-   Fields:
    -   `storage` - namespaced id of command storage
    -   `path` - NBT path to field

#### `set_lore` function

-   The `replace` field has been removed
-   Now has `mode` like `set_fireworks` and `set_written_book_pages`

#### `set_written_book_pages` function

-   `pages` is now a JSON Object rather than a string containing JSON

#### `toggle_tooltips` loot function

-   This function can be used to modify item component tooltip visiblity
-   It works by setting fields like `show_in_tooltip` without changing other values
-   Format:
    -   `toggles` - a map of supported item component type to boolean value
-   Supported components: `trim`, `dyed_color`, `enchantments`, `stored_enchantments`, `unbreakable`, `can_break`, `can_place_on`, `attribute_modifiers`
-   Example:
    -   `{function:"toggle_tooltips","toggles":{"enchantments":false}}` will hide enchantments tooltip

#### Functions

-   Nested lists are no longer supported in function lists

### Item predicate argument

The item predicate syntax (used in `execute if|unless items` and `clear` commands) has been significantly expanded.

-   The general syntax is: `<type> [comma-separated list of <test>]`
-   `<type>` can be one of:
    -   item id
    -   item tag id prefixed with `#`
    -   `*` to match any item
-   `<test>` can have one of 3 forms:
    -   `<component_id>=<value>` - match exact value of component (same as in previous format)
        -   `<value>` is a representation of component value in SNBT format (same as in `item give` argument)
    -   `<component_id>` - check if component exists
    -   `<predicate_id>~<value>` - check item sub-predicate
        -   `<value>` is a representation of item sub-predicate in SNBT format (but otherwise same as one used for advancement and loot table JSON files)
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
-   The syntax for custom data partial matching (`{}`) has been removed in favor of using `custom_data` predicates
    -   So `stick{a:2}` becomes `stick[custom_data~{a:2}]`

### Predicates

#### Item sub-predicates

-   Predicate `minecraft:custom_data` now accepts both SNBT data written as a string (existing format) and unflattened tags
    -   That means that `*[custom_data~{a:1}]` and `*[custom_data~"{a:1}"]` are equivalent
    -   Flattened string format has been kept since NBT type information can't be expressed in JSON

#### Entity sub-predicates

##### `wolf`

New `wolf` sub-predicate has been added to match wolf variants Fields:

-   `variant` - wolf variant to match (single entry, list of entries or tag)

##### `cat`, `frog`, `painting`

-   Field `variant` now accepts single entries, list of entries or tags

### New Item Stack Components

#### `minecraft:food`

-   When present, this item will behave as if a food (can be eaten)
-   Format: object with fields
    -   `nutrition`: non-negative integer, number of food points to restore when eaten
    -   `saturation_modifier`: float, amount of saturation to restore when eaten
    -   `is_meat`: boolean (default: `false`)
        -   If `true`, can be fed to Wolves
    -   `can_always_eat`: boolean (default: `false`)
        -   If `true`, this food can be eaten even if not hungry
    -   `eat_seconds`: float (default: `1.6`)
        -   The number of seconds that it takes to eat this food item
    -   `effects`: list of effects to apply when eaten (default: `[]`)
        -   `effect`: effect instance (same format as `custom_effects` in `minecraft:potion_contents` component)
        -   `probability`: float between 0 and 1, chance for the effect to be applied (default: `1`)
    -   e.g: `food={nutrition:4,saturation_modifier:0.1}`
-   On food items, has an implicit default value for that food type

#### `minecraft:max_stack_size`

-   Controls the maximum stacking size of this item
-   Format: integer between 1 and 99
    -   e.g. `max_stack_size=4`
-   Has an implicit default value according to the item type (usually `64`)

#### `minecraft:max_damage`

-   Controls the maximum amount of damage than an item can take
-   If not present, the item cannot be damaged
-   Format: positive integer
    -   e.g. `max_damage=123`
-   Has an implicit default value for damageable items

#### `minecraft:fire_resistant`

-   If present, this item will not burn in fire
-   Format: empty object
    -   e.g. `fire_resistant={}`
-   Has an implicit default value for fire-resistant items such as Netherite

#### `minecraft:rarity`

-   Controls the color of the item name
-   Format: enumerated value, one of:
    -   `common` (default): white name, or aqua when enchanted
    -   `uncommon`: yellow name, or aqua when enchanted
    -   `rare`: aqua name, or light purple when enchanted
    -   `epic`: light purple name
    -   e.g. `rarity=rare`
-   Special items such as Golden Apples have an implicit default value

#### `minecraft:tool`

-   Controls the behavior of the item as a tool
-   Format: object with fields
    -   `rules`: list of rule entries
        -   `blocks`: single block, list of blocks, or `#`\-prefixed block tag to match
        -   `speed` (optional): float, overrides the mining speed if present and matched
        -   `correct_for_drops` (optional): boolean, overrides whether this tool is considered 'correct' if present and matched
            -   `true` will cause the block to mine at its most efficient speed, and drop items if the targeted block requires that
    -   `default_mining_speed`: float, mining speed to use if no rules match and override mining speed (default: `1.0`)
    -   `damage_per_block`: non-negative int, amount of durability to remove each time a block is mined with this tool
    -   e.g. `tool={rules:[{blocks:"#mineable/pickaxe",speed:4.0,correct_for_drops:true}]}`
-   Vanilla tool items will have an implicit default value based on their tier and tool type

#### `hide_tooltip`

-   If present, it will completely hide whole item tooltip (that includes item name)
-   Tooltip will be still visible and searchable in creative mode
-   Format: empty object

### New Tags

-   Added `incorrect_for_wooden_tool`, `incorrect_for_gold_tool`, `incorrect_for_stone_tool`, `incorrect_for_iron_tool`, `incorrect_for_diamond_tool`, `incorrect_for_netherite_tool` block tags
    -   These tags combine the existing `needs_diamond_tool`, `needs_iron_tool`, and `needs_stone_tool` tags for each specific tool tier
-   Added `meat` collection item tag
    -   This is not used by the game directly, but may be included by other tags
-   Added `piglin_food`, `fox_food`, `cow_food`, `goat_food`, `sheep_food`, `wolf_food`, `cat_food`, `horse_food`, `horse_tempt_items`, `camel_food`, `armadillo_food`, `bee_food`, `chicken_food`, `frog_food`, `hoglin_food`, `llama_food`, `llama_tempt_items`, `ocelot_food`, `panda_food`, `pig_food`, `rabbit_food`, `strider_food`, `strider_tempt_items`, `turtle_food`, `parrot_food`, `parrot_poisonous_food` item tags to control which items can be fed to or tempt the corresponding mobs
-   `axolotl_tempt_items` has been renamed to `axolotl_food`

## Resource Pack Version 30

-   Map decoration icons have been split from the former `map_icons.png` to use an atlas loaded from the `textures/map/decorations/` directory
-   The process of upgrading your pack can be assisted by using this automated [Slicer](https://github.com/Mojang/slicer/releases/tag/v1.1.4) tool
-   Added `trial_chambers` map decoration icon

## Fixed bugs in 24w12a

-   [MC-266467](https://bugs.mojang.com/browse/MC-266467) Wind charges stutter when flying through the air
-   [MC-267747](https://bugs.mojang.com/browse/MC-267747) Click and hover events don't work when viewing chat while F1 is enabled
-   [MC-267933](https://bugs.mojang.com/browse/MC-267933) Silk Touch and Fortune enchanted books cannot be found in Creative inventory
-   [MC-267943](https://bugs.mojang.com/browse/MC-267943) Anvil exclusive enchantments can be obtained from enchanting tables
-   [MC-268068](https://bugs.mojang.com/browse/MC-268068) Pieces of text in the "Reset World" realm menu can intersect when using some resolutions
-   [MC-268171](https://bugs.mojang.com/browse/MC-268171) Some GUI textures can no longer be transparent in Minecraft
-   [MC-268311](https://bugs.mojang.com/browse/MC-268311) Bane of arthropods enchantment uses #arthropods tag instead of #sensitive\_to\_bane\_of\_arthropods
-   [MC-268312](https://bugs.mojang.com/browse/MC-268312) Impaling enchantment uses #aquatic tag instead of #sensitive\_to\_impaling
-   [MC-268343](https://bugs.mojang.com/browse/MC-268343) Breeze charge has laggy unnatural flightpaths when punched
-   [MC-268510](https://bugs.mojang.com/browse/MC-268510) Items with "Unbreakable:1b" NBT can no longer have the unbreaking enchant applied
-   [MC-268556](https://bugs.mojang.com/browse/MC-268556) Wind charges go through non-full blocks instead of colliding
-   [MC-269083](https://bugs.mojang.com/browse/MC-269083) Effect background texture in inventory renders translucent pixels as opaque
-   [MC-269085](https://bugs.mojang.com/browse/MC-269085) Experience bar and jump bar render translucent pixels as opaque
-   [MC-269169](https://bugs.mojang.com/browse/MC-269169) Wolf variant not present in advancement criteria
-   [MC-269268](https://bugs.mojang.com/browse/MC-269268) components don't work on the smithing table
-   [MC-269280](https://bugs.mojang.com/browse/MC-269280) The right side of incompatible resource or data packs isn't rendered correctly when the scroll bar is present
-   [MC-269299](https://bugs.mojang.com/browse/MC-269299) The red text within the "Experiments" menu cannot be narrated or selected
-   [MC-269336](https://bugs.mojang.com/browse/MC-269336) Crash with set\_enchantments item modifier above level 255
-   [MC-269354](https://bugs.mojang.com/browse/MC-269354) The subtitle for the "minecraft:item.mace.smash\_air" sound event displays as a raw translation string
-   [MC-269355](https://bugs.mojang.com/browse/MC-269355) Heavy Core has no required tool
-   [MC-269356](https://bugs.mojang.com/browse/MC-269356) Heavy Core cannot be oriented despite its blockstates suggesting otherwise
-   [MC-269361](https://bugs.mojang.com/browse/MC-269361) Weird Wind Charge behavior when deflecting
-   [MC-269373](https://bugs.mojang.com/browse/MC-269373) /datapack disable doesn't work
-   [MC-269393](https://bugs.mojang.com/browse/MC-269393) Game crashes when wind charge hits entity
-   [MC-269401](https://bugs.mojang.com/browse/MC-269401) The minecraft:set\_written\_book\_pages item modifier is inconsistent with minecraft:set\_name and minecraft:set\_lore
-   [MC-269409](https://bugs.mojang.com/browse/MC-269409) Unable to execute /particle entity\_effect
-   [MC-269419](https://bugs.mojang.com/browse/MC-269419) Heavy Core cannot be waterlogged
-   [MC-269422](https://bugs.mojang.com/browse/MC-269422) Carpet on powder snow no longer negates fall damage
-   [MC-269452](https://bugs.mojang.com/browse/MC-269452) Crash when using item modifier with replace\_section mode and very large size field
-   [MC-269457](https://bugs.mojang.com/browse/MC-269457) Crash with set\_lore item modifier setting more than 256 lores
-   [MC-269513](https://bugs.mojang.com/browse/MC-269513) Maces can break cobwebs

---

Oh look, it's a rare case of snapshot Thursday! This week we're expanding your arsenal with a smashing new weapon, the Mace! Use this weapon's special smash attack while leaping from a high place and watch your enemies get knocked back. The longer you fall, the harder you hit – but make sure you time it right! Your fall damage is only negated if you land the blow. Craft this new weapon by combining a Breeze Rod with the Heavy Core, a new item you can find by unlocking Trial Chamber Vaults.

As usual, we invite you to share your thoughts about this new feature over at the feedback site: [Let's talk about the Mace!](https://aka.ms/mcmacefeedback)

Alongside this hefty new mob swatter, we're also bringing you new chambers and variations to Trial Chambers, updated loot tables for Vaults, new Pottery Sherds, Armor Trims and Banner Patterns—as well as the usual slew of bug fixes and polish.

Happy mace-ing!

## Experimental Features

-   Added the Mace
-   Added Breeze Rod
-   Added Heavy Core
-   Added 2 new Armor Trims
-   Added 3 new Pottery Sherds
-   Added 2 new Banner Patterns
-   Updated Vault loot table
-   Updated Trial Chambers

## Blocks

### Heavy Core

-   A mysterious, dense block which can be combined with a Breeze Rod to craft a brand-new weapon: the Mace!

## Items

### Breeze Rod

-   An item dropped by the Breeze that can be crafted into 4 Wind Charges, or used with the Heavy Core to craft the Mace

### Mace

-   A new heavy weapon to smash your enemies!
-   Leverage the weight of this new weapon to deal additional damage the farther you fall before hitting your target
    -   Try it out by jumping down toward your target, and hit them before you hit the ground
    -   Successfully striking a target in this way will negate any damage accumulated from the fall, similar to how a Wind Charge works
    -   Other entities near the struck enemy will be knocked back by the immense force of the Mace
-   Using a Mace will decrease its durability like any other weapon; repair it with Breeze Rods at an anvil
-   Players can use a Mace in combination with Wind Charges to launch up and deliver devastating smash attacks on their enemies

## Mobs

### Breeze

-   Drops 1-2 Breeze Rods when killed by a player
    -   The number of Breeze Rods dropped is affected by looting enchantments

### Pottery Sherds

-   Added Flow, Guster, and Scrape Pottery Sherds

### Banner Patterns

-   Added Flow and Guster Banner Patterns

### Armor Trims

-   Added Bolt and Flow Armor Trims and Smithing Templates
-   Bolt can be duplicated using a Copper Block or Waxed Copper
-   Flow can be duplicated using a Breeze Rod

### Trial Chambers

-   Added new chambers and variations, with new challenges
    -   Remade chamber\_9, and renamed it to "slanted"
    -   Remade chamber\_3, and renamed it to "pedestal"
-   Added Flow, Guster, and Scrape Pottery Sherds to the Decorated Pots in the decor structure pool
-   Trial Spawners will now appear more frequently in the corridors
-   Changed the layout of the blocks around the Vaults
-   The loot tables of Vaults in Trial Chambers have been updated to address some inventory management issues
    -   You will now get no more than 1 unstackable item per Vault
    -   You will more often get rewards which can stack together
    -   Horse Armor and Saddles have been removed from the loot table
-   Vaults in Trial Chambers can now eject:
    -   Wind Charges
    -   Bolt Armor Trim Smithing Template
    -   Flow Armor Trim Smithing Template
    -   Flow Banner Pattern
    -   Guster Banner Pattern
    -   Heavy Core

## Changes

-   Adjusted flying behaviour for Bees and Parrot to keep them from overshooting their position when flying up and down
-   Status effect particle colors are no longer blended into one particle color
    -   All active visible status effect particles are now rendered separately
    -   The frequency of emitting status effect particles has been lowered to clutter the screen less
-   Updated the wolf armor crack textures
-   Menu background blur has been updated to look better and be more performant

### Wolf variants

When summon in other ways (e.g. using the Spawn Egg or using the `summon` command), the variant selection follows the natural spawning biome rules with the following extensions:

-   Rusty Wolf: will be selected in all Jungle biomes, including Jungle and Bamboo Jungle Biomes
-   Spotted Wolf: will be selected in all Savanna biomes, including Savanna and Windswept Savanna Biomes
-   Striped Wolf: will be selected in all Badlands biomes, including Badlands and Eroded Badlands Biomes

## Technical Changes

-   The Data Pack version is now 35
-   The Resource Pack version is now 29

## Data Pack Version 35

-   Removed `any` entity sub-predicate
-   Component-specific item predicate properties have been moved to separate field `predicates`
-   Added slot name `contents` for single-slot entities like item frames and item displays
-   Contents of `item` entity can now be accessed through `contents` slot name
-   Added new loot functions

### Predicates

#### Item sub-predicate

-   Some fields from item predicate have been moved to a map in an optional field `predicates`
-   The new field is similar to the `components` field on item stacks
-   This was done to simplify addition for future predicates and to allow sub-predicates to more closely resemble names of components they match
-   The following fields have been moved:
    -   `enchantments` - field moved to sub-predicate `minecraft:enchantments`
    -   `stored_enchantments` - field moved to sub-predicate `minecraft:stored_enchantments`
    -   `potions` - field moved to sub-predicate `minecraft:potion_contents`
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
    

### Loot Functions

#### `set_fireworks`

New function for setting the details of the `minecraft:fireworks` component.

Fields:

-   `conditions`: list of conditions (default: `[]`):
    -   Conditions to check before applying the function
-   `flight_duration`: Optional integer, 0-255:
    -   The flight duration measured in number of gunpowder
    -   If omitted, the flight duration of the item is left untouched - or set to 0 if the component did not exist before
-   `explosions`: List of `firework_explosion` data - same format as the `explosion` field in the `minecraft:fireworks` component:
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

#### `set_firework_explosion`

New function for setting the details of the `minecraft:firework_explosion` component.

Fields:

-   `conditions`: list of conditions (default: `[]`):
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

#### `set_book_cover`

New function for setting the cover details of the `minecraft:written_book_content` component. If present, any pages in the book are left untouched.

Fields:

-   `conditions`: list of conditions (default: `[]`):
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

#### `set_writable_book_pages`

New function for manipulating the pages of the `minecraft:writable_book_content` component.

Fields:

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

#### `set_written_book_pages`

New function for manipulating the pages of the `minecraft:written_book_content` component. Same format as `set_writable_book_content` but the `pages` field contains filterable Components instead of Strings (same format as `pages` on the `minecraft:writable_book_content` component).

Any cover data is left untouched, and the page content components are set to resolve next time a player opens the book.

## Resource Pack Version 29

-   Added `gui/inworld_menu_background`, `gui/inworld_menu_list_background`, `gui/inworld_header_separator`, `gui/inworld_footer_separator` textures to allow menus accessed from the Pause Menu to look different from menus accessed from the Title Screen
-   Added `gui/tab_header_background` texture, which is rendered behind the tab buttons in the Create World Screen
-   Added `misc/credits_vignette` texture, which is rendered behind the poem and the credits
-   The `blur` post-processing shader has been renamed to `box_blur`
-   Added optional boolean field `use_linear_filter` to post-processing passes which when set to `true` switches texture sampling mode from nearest-neighbor sampling to linear interpolation for that pass
-   Added `entity_outline_box_blur` post-processing shader

## Fixed bugs in Snapshot 24w11a

-   [MC-153329](https://bugs.mojang.com/browse/MC-153329) Leashing an iron golem breaks its pathfinding until reloading the world
-   [MC-165948](https://bugs.mojang.com/browse/MC-165948) Bees can be lured into dangerous blocks
-   [MC-168407](https://bugs.mojang.com/browse/MC-168407) Bees can get stuck in a lantern
-   [MC-170000](https://bugs.mojang.com/browse/MC-170000) Hand lighting / lighting of held items changes drastically in first-person mode when looking around
-   [MC-172047](https://bugs.mojang.com/browse/MC-172047) Wolves try to attack armor stands
-   [MC-173303](https://bugs.mojang.com/browse/MC-173303) Leashed pets teleport to the player when reloaded
-   [MC-186626](https://bugs.mojang.com/browse/MC-186626) /weather not working in custom dimensions
-   [MC-208528](https://bugs.mojang.com/browse/MC-208528) Feeding tamed baby wolves and cats causes them to sit down/stand up
-   [MC-221754](https://bugs.mojang.com/browse/MC-221754) Leashed wolves no longer attack when unleashed
-   [MC-229919](https://bugs.mojang.com/browse/MC-229919) Bees don't recognize beehives or bee nests with a campfire directly below and a block on top
-   [MC-232560](https://bugs.mojang.com/browse/MC-232560) Tamed wolf movement speed decreases when unleashed from a fence
-   [MC-260921](https://bugs.mojang.com/browse/MC-260921) Data is focused last on the statistics screen when using keyboard navigation
-   [MC-267923](https://bugs.mojang.com/browse/MC-267923) The "Done" button doesn't always deselect when you close out of a Sign UI, making typing spaces difficult
-   [MC-267930](https://bugs.mojang.com/browse/MC-267930) No element is focused when opening the statistics screen using keyboard navigation
-   [MC-268110](https://bugs.mojang.com/browse/MC-268110) Deleting world results in a file directory error
-   [MC-268282](https://bugs.mojang.com/browse/MC-268282) Picking up lava, powder snow or water using a bucket can be desynced
-   [MC-268405](https://bugs.mojang.com/browse/MC-268405) Wind charges can move in unusual ways
-   [MC-268408](https://bugs.mojang.com/browse/MC-268408) Game crashes when a wind charge hits an entity after disabling update\_1\_21 data pack
-   [MC-268582](https://bugs.mojang.com/browse/MC-268582) Facing direction no longer affects shading of the first person arm
-   [MC-268796](https://bugs.mojang.com/browse/MC-268796) "Saving world" text is blurred when pausing
-   [MC-268805](https://bugs.mojang.com/browse/MC-268805) panorama\_overlay.png no longer works
-   [MC-268811](https://bugs.mojang.com/browse/MC-268811) Clicking 'Done' for language settings is ineffective; changes apply after double-clicking the language option
-   [MC-268812](https://bugs.mojang.com/browse/MC-268812) Dirt background is used in the pause menu and some other menus in Programmer Art; black background used in High Contrast resource pack
-   [MC-268816](https://bugs.mojang.com/browse/MC-268816) Credits background texture no longer scrolls in Programmer Art and other such resource packs
-   [MC-268819](https://bugs.mojang.com/browse/MC-268819) Programmer Art, High Contrast, other resource packs: top of "Create New World" screen is transparent/not black
-   [MC-268855](https://bugs.mojang.com/browse/MC-268855) Typing /function then space closes the internal server
-   [MC-268862](https://bugs.mojang.com/browse/MC-268862) Areas with no sky light are incredibly dark when using the "High Contrast" resource pack
-   [MC-268902](https://bugs.mojang.com/browse/MC-268902) Low FPS when blurred menu background is visible
-   [MC-268908](https://bugs.mojang.com/browse/MC-268908) Trying to navigate to the Font Settings menu using the Tab key exits the language menu
-   [MC-268953](https://bugs.mojang.com/browse/MC-268953) Layout of gamerules screen breaks when toggling fullscreen mode or changing resolution
-   [MC-268956](https://bugs.mojang.com/browse/MC-268956) Command blocks, structure blocks and jigsaw blocks use menu\_background.png
-   [MC-268967](https://bugs.mojang.com/browse/MC-268967) Night vision does not work properly in high constrast mode
-   [MC-269032](https://bugs.mojang.com/browse/MC-269032) Blur shader runs when menu blurriness is 0%
-   [MC-269077](https://bugs.mojang.com/browse/MC-269077) Sign editing screen uses menu\_background.png
-   [MC-269081](https://bugs.mojang.com/browse/MC-269081) Some Realms icons are rendered behind the button in the main menu, instead of not being rendered at all
-   [MC-269122](https://bugs.mojang.com/browse/MC-269122) Editing signs causes background blur
-   [MC-269136](https://bugs.mojang.com/browse/MC-269136) Incorrect weapon.\* command suggestions
-   [MC-269279](https://bugs.mojang.com/browse/MC-269279) The "Normal user" button within the realms player menu is improperly capitalized

---

Woah, another snapshot day of the Wednesday variant! Today we are releasing 24w10a, featuring new Wolf Variants, some new Data Pack features, and lots of bug fixes.

Happy mining!

## New Features

-   Added variants of Wolves

### Wolf variants

-   New Wolf variants have been added
-   The variant is determined by the biome they spawn in
    -   Pale Wolf - The familiar Wolf variant that now spawns in the Taiga biome, with a default pack size of 4
    -   Woods Wolf - A variant that spawns in the Forest biome. This will be the dominant Wolf variant that you will be able to find in the Overworld, since the Forest biome is very common
    -   Ashen Wolf - A variant that spawns in the Snowy Taiga biome
    -   Black Wolf - A variant that spawns in the Old Growth Pine Taiga biome, in smaller packs of 2 to 4
    -   Chestnut Wolf - A variant that spawns in the Old Growth Spruce Taiga biome, in smaller packs of 2 to 4
    -   Rusty Wolf - A variant that spawns in a new location for wolves - the Sparse Jungle biome, in smaller packs of 2 to 4
    -   Spotted Wolf - A variant that spawns in a new location for wolves - the Savanna Plateau biome, in larger packs of 4 to 8
    -   Striped Wolf - A variant that spawns in a new location for wolves, the Wooded Badlands biome, in larger packs of 4 to 8
    -   Snowy Wolf - A variant that spawns in the Grove biome. A rare type, that always walks alone
-   Adjusted spawning conditions for Wolves, allowing them to spawn on Coarse Dirt and Podzol blocks

## Changes

-   Adjusted passive mobs spawning in Grove biome to only include Rabbits, Foxes and Wolves
-   Button tooltips will no longer appear when hovering outside the containing element

## Technical Changes

-   The Data Pack version is now 34

## Data Pack Version 34

-   Recipe results can now specify component data
-   Added new entity predicate field `slots`, for matching item slots
-   Added slot names for ranges, like `container.*`
-   Added `execute if|unless items` to check and count items
-   Banner Patterns are now data-driven
-   Changes to Item Stack Component formats
-   Player Head blocks now store a `custom_name` tag, which will be copied to and from the item form when broken or placed
-   The `SkullOwner` and `ExtraType` fields in Player Head blocks have been replaced with a `profile` field, with the same format as the item component
-   For now, the `count` field on Item Stacks is always stored again, even if `1`
    -   If the field is missing in data, will still fall back to `1`

### Recipes

-   Recipe types `crafting_shaped`, `crafting_shapeless`, `stonecutting` and `smithing_transform` now accept `components` for the `result` item stack
-   The `result` field for recipe types `smelting`, `blasting`, `smoking` and `campfire_cooking` is now an item stack format without a count, which means you'll need to specify an object with an `id` field
    -   This `result` now also accepts `components` data

### Predicates

#### `slots` entity sub-predicate

-   New entity field `slots` allows to check single or multiple slots on any entity
-   The field contains a map of slot names (same as ones used in `item` commands) to item predicate
-   For slot ranges, only one slot needs to match for whole entry to pass

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
    

### Slot names

-   Slot names (used in `item` commands and `slots` entity predicates) now include slot ranges
-   Unless specified, existing commands can still only work on single slots
-   New slot names:
    -   `container.*` - contains `container.0` to `container.53`
    -   `hotbar.*` - contains `hotbar.0` to `hotbar.8`
    -   `inventory.*` - contains `inventory.0` to `inventory.26`
    -   `enderchest.*` - contains `enderchest.0` to `enderchest.26`
    -   `villager.*` - contains `villager.0` to `villager.7`
    -   `horse.*` - contains `horse.0` to `horse.14`
    -   `weapon.*` - contains `weapon.mainhand` and `weapon.offhand`
    -   `armor.*` - contains `armor.head`, `armor.chest`, `armor.legs`, `armor.feed`, `armor.body`
    -   `player.cursor` - item held by player on screen
        -   Note: this information is not available in creative mode
    -   `player.crafting.0` - `player.crafting.3`, `player.crafting.*` - player's crafting slots
        -   Note: this includes only player's inventory crafting slots. Crafting table (or any other slots on other screens) are not included

#### `execute if|unless items`

-   `execute if|unless items <source> <slots> <item_predicate>` command can be used to count items
    -   `<source>` is the same as one used in `item` command, i.e.
        -   `block <x> <y> <z>`
        -   `entity <target>` (selector can return multiple entities)
    -   `<slots>` can accept single slot (like `container.0`) or a range (like `container.*`)
    -   `<item_predicate>` is the same as item predicate in `clear` command
-   If used alone, it will return total number of items in stacks that match predicates

### Banner Patterns

-   Banner Patterns will now be loaded into a dynamic registry from data packs (`data/<namespace>/banner_pattern/<id>`)
    -   These entries have two fields:
        -   `asset_id` (namespaced string) is used to resolve texture locations
            -   e.g. `custom:pattern` resolves to `assets/custom/textures/entity/banner/pattern.png`, `assets/custom/textures/entity/shield/pattern.png`
        -   `translation_key` (string) is a translation key prefix
            -   e.g. `block.minecraft.banner.custom.pattern` resolves to `block.minecraft.banner.custom.pattern.<dye color>`

### Item Stack Components

-   The `minecraft:profile` component no longer requires the `name` field to be present
-   Some additional Item Stack Components now support alternative, simple definitions:
    -   `minecraft:profile` can be defined as string player name (e.g. `profile="jeb_"`)
    -   `minecraft:dyed_color` can be defined as an integer rgb color (e.g. `dyed_color=16711680`)
    -   `minecraft:attribute_modifiers` can be defined as a direct list of modifiers (e.g. `attribute_modifiers=[{type:'generic.scale',uuid:[1,2,3,4],name:'Big!',amount:1.0,operation:'add_multiplied_base'}]`)
    -   `minecraft:potion_contents` can be defined as a single potion id (e.g. `potion_contents="invisibility"`)
    -   `minecraft:enchantments` and `minecraft:stored_enchantments` can be defined as an inline map of enchantment id to level (e.g. `enchantments={sharpness:1}`)
    -   These are only an alternative for defining the values, they will always be stored in their full formats
-   All container blocks now use the `minecraft:container` component when in item form, not just Shulker Boxes
-   The `minecraft:lodestone_target` component has been renamed to `minecraft:lodestone_tracker`
    -   The `pos` and `dimension` fields have been moved into a `target` object
    -   The `target` field is optional, and if not present, the compass will spin
-   The maximum number of lore and fireworks entries has been raised to 256

## Fixed bugs in 24w10a

-   [MC-140397](https://bugs.mojang.com/browse/MC-140397) When combining two enchanted unbreakable items, the result will be two stacked items
-   [MC-157133](https://bugs.mojang.com/browse/MC-157133) Enchanted books with curses can be stacked using a grindstone
-   [MC-174496](https://bugs.mojang.com/browse/MC-174496) Player heads lose their name after being placed
-   [MC-217084](https://bugs.mojang.com/browse/MC-217084) Player head NBT "ExtraType" is no longer saved but doesn't use DataFixerUpper upgrade path
-   [MC-268392](https://bugs.mojang.com/browse/MC-268392) Setting gravity attribute to 0.0 kicks player for flying
-   [MC-268462](https://bugs.mojang.com/browse/MC-268462) Saturation suspicious stew now grants 7 seconds of effect instead of 7 ticks
-   [MC-268800](https://bugs.mojang.com/browse/MC-268800) All tools have 4 attack damage, and 1.6 attack speed
-   [MC-268801](https://bugs.mojang.com/browse/MC-268801) Shulker boxes in saved hotbars inconsistently update to item components
-   [MC-268813](https://bugs.mojang.com/browse/MC-268813) Crash when spawning item with can\_break/can\_place\_on component containing unknown/invalid tag
-   [MC-268824](https://bugs.mojang.com/browse/MC-268824) Disenchanted books from grindstone don't stack with books that were in the inventory
-   [MC-268830](https://bugs.mojang.com/browse/MC-268830) Effect Particles appear when specifying no particles using /effect command
-   [MC-268834](https://bugs.mojang.com/browse/MC-268834) Vault texture is inconsistent
-   [MC-268842](https://bugs.mojang.com/browse/MC-268842) Crash when saving world with painting
-   [MC-268845](https://bugs.mojang.com/browse/MC-268845) Items with can\_break/can\_place\_on components update every time the inventory is changed in creative mode
-   [MC-268850](https://bugs.mojang.com/browse/MC-268850) Attribute Modifier: Not updated when switching items in hotbar
-   [MC-268851](https://bugs.mojang.com/browse/MC-268851) Crossbows don't make a firing sound
-   [MC-268853](https://bugs.mojang.com/browse/MC-268853) Unable to load paintings for any variants
-   [MC-268856](https://bugs.mojang.com/browse/MC-268856) Loading shulker box/bundle with a single 'invalid' item in it renders the whole component invalid
-   [MC-268864](https://bugs.mojang.com/browse/MC-268864) An item modifier with a duplicate item stack component prevents the entire data pack from (re)loading, rather than ignoring that one specific item modifier
-   [MC-268877](https://bugs.mojang.com/browse/MC-268877) Beehives/bee nests in inventory lose honey level after converting to 24w09a
-   [MC-268879](https://bugs.mojang.com/browse/MC-268879) Having a high damage value breaks and crashes the game
-   [MC-268897](https://bugs.mojang.com/browse/MC-268897) Cannot select entities who have any itemstack with the count being 1.
-   [MC-268904](https://bugs.mojang.com/browse/MC-268904) Suspicious stew not giving effects
-   [MC-268921](https://bugs.mojang.com/browse/MC-268921) Arrows lose particles after unloading world
-   [MC-268971](https://bugs.mojang.com/browse/MC-268971) Lodestone compass stops being a lodestone compass after breaking its tracked lodestone
-   [MC-269005](https://bugs.mojang.com/browse/MC-269005) Player heads from previous versions cause game crash and/or are converted incorrectly
-   [MC-269062](https://bugs.mojang.com/browse/MC-269062) Bundles with "Bundle Contents" component removed return after right clicking
-   [MC-269066](https://bugs.mojang.com/browse/MC-269066) Item modifier cannot remove `custom_name`
-   [MC-269091](https://bugs.mojang.com/browse/MC-269091) AttributeModifiers NBT with missing fields is not upgraded correctly to components

---

