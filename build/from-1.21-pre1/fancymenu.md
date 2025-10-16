# Minecraft 1.21 Pre-Release 1

We're bringing you the first Pre-Release of 1.21 with leashable boats, portal-able Ender Pearls and bug fixes!

With this snapshot, we are temporarily removing the functionality of lighting blocks on fire using the Fire Aspect enchantment, as we want to refine it further. This functionality will be reintroduced in a later release.

Happy portaling! ;)

## New Features

### Ominous Trial Spawner

-   Mobs removed by a Trial Spawner converting to Ominous state now drop any items they previously picked up from the ground

## Changes

-   Mace attack speed has been changed to 0.6
-   Doors of different materials can now form a double door
-   Ender Pearls that are thrown through portals can now teleport players to a different dimension than the one they are currently in
-   It is now possible to ride entities such as Horses or Minecarts through portals
    -   When riding entities through portals, the delay before teleporting is not applied

## Technical Changes

-   Data Pack version is now 46
-   Removed the `entitiesWithPassengersCanUsePortals` gamerule that was introduced last snapshot. Entity with passengers being able to use portals is now the default behavior.
-   Report data generator now includes information about network packets
-   The game will now store reports from failed chunks' loads and saves in the `debug` directory

### Server links

-   There are some generic-use link names, like "Support" or "Website", without any special functionality

## Data Pack Versions 42 through 46

-   Added new configurable fields to jigsaw structures and `single_pool_element` types

### Enchantments

**Level-Based Values**

**`lookup`**

A Level-Based Value type that maps a list of values to specific levels, and applies a fallback if the level is greater than the number of values supplied. Fields:

-   `values` - A list of values indexed by `level - 1` to apply, if present
-   `fallback` - A fallback Level-Based Value to apply if the level is greater than the size of `values`

**Effect Conditions**

Unlike with loot tables, all effect conditions need to be inline objects and cannot be references.

### Tags

**Block Tags**

-   `fire_aspect_lightable` has been removed
    -   With this snapshot, we are temporarily removing the functionality of lighting blocks on fire using the Fire Aspect enchantment, as we want to refine it further. This functionality will be reintroduced in a later release.

### Loot tables

**Conditions**

**`random_chance_with_enchanted_bonus`**

-   `chance`: field has been removed
-   `unenchanted_chance`: new field for the chance for an unenchanted item
-   `enchanted_chance`: new field for the chance for an enchanted item - a Level-Based Value

### Structures

-   Added `liquid_settings` field to structures of type `minecraft:jigsaw`. Possible values:
    -   `apply_waterlogging`: If any waterloggable block overlaps with existing water, it will become waterlogged
    -   `ignore_waterlogging`: Will not waterlog any waterloggable blocks that overlap existing water
    -   Default value is `apply_waterlogging`
-   Added optional field `override_liquid_settings` to `single_pool_element` element type
    -   Same possible values as the `liquid_settings` in jigsaw structures
    -   Overrides the inherited liquid settings from the parent jigsaw structure while generating this pool element

## Fixed bugs in 1.21 Pre-Release 1

-   [MC-902](https://bugs.mojang.com/browse/MC-902) The end obsidian platform resets every time entities go through the end portal, which can cause blocks to be deleted
-   [MC-50612](https://bugs.mojang.com/browse/MC-50612) Command blocks do not update when you place them near any source of power
-   [MC-97087](https://bugs.mojang.com/browse/MC-97087) Attributes won't work in main hand if they were in offhand
-   [MC-114566](https://bugs.mojang.com/browse/MC-114566) Can't teleport back to the central island with End Gateway Portal on outer End islands
-   [MC-148741](https://bugs.mojang.com/browse/MC-148741) Selection boxes in some screens are misaligned in comparison with their text
-   [MC-160140](https://bugs.mojang.com/browse/MC-160140) Shulker boxes on the obsidian platform are destroyed and do not drop when a player enters the End
-   [MC-169698](https://bugs.mojang.com/browse/MC-169698) Blocks within igloo basements can generate waterlogged when generating in close proximity to water
-   [MC-170907](https://bugs.mojang.com/browse/MC-170907) Network position deltas are processed relative to a wrong point
-   [MC-172031](https://bugs.mojang.com/browse/MC-172031) Throwing an ender pearl into a Nether or End portal often has no effect
-   [MC-191591](https://bugs.mojang.com/browse/MC-191591) Saddles lose their NBT data when equipped on horses, zombie horses, skeleton horses, mules or donkeys via right-clicking
-   [MC-265583](https://bugs.mojang.com/browse/MC-265583) Incorrect pluralization for skin customization strings for pants
-   [MC-265818](https://bugs.mojang.com/browse/MC-265818) The "gamerule.doVinesSpread.description" string consists of grammatically incorrect word usage
-   [MC-266140](https://bugs.mojang.com/browse/MC-266140) The "Open link" button within the realms menu is improperly capitalized
-   [MC-266471](https://bugs.mojang.com/browse/MC-266471) Trial chambers can intersect aquifers, causing some blocks inside the structure to be waterlogged
-   [MC-267050](https://bugs.mojang.com/browse/MC-267050) Chat disabled strings are missing verbs
-   [MC-267071](https://bugs.mojang.com/browse/MC-267071) The word "packs" within the "download.pack.failed" string is always pluralized
-   [MC-267474](https://bugs.mojang.com/browse/MC-267474) Strings referencing the player's off hand are inconsistently spelled
-   [MC-267954](https://bugs.mojang.com/browse/MC-267954) World upgrade and downgrade realms strings are improperly capitalized
-   [MC-268023](https://bugs.mojang.com/browse/MC-268023) The "selectWorld.experimental.details.title" string displayed within the experimental features details menu is improperly capitalized
-   [MC-268185](https://bugs.mojang.com/browse/MC-268185) Copper grates in trial chambers are waterlogged
-   [MC-269921](https://bugs.mojang.com/browse/MC-269921) Wind charges can be thrown though corners
-   [MC-270181](https://bugs.mojang.com/browse/MC-270181) Wind charges go through an entity if it is close to a player
-   [MC-270572](https://bugs.mojang.com/browse/MC-270572) Programmer Art resource pack duplicates some GUI texture files
-   [MC-270649](https://bugs.mojang.com/browse/MC-270649) The width of challenge advancements header is calculated in relation to the slash formatting of progress counter, causing overlap in some languages
-   [MC-270795](https://bugs.mojang.com/browse/MC-270795) Mobs despawned by Ominous Trial Spawners can delete picked up items
-   [MC-270821](https://bugs.mojang.com/browse/MC-270821) Regular Trial Spawners spawn the first mob with Ominous Trial equipment if they were last active as Ominous
-   [MC-270981](https://bugs.mojang.com/browse/MC-270981) View Bobbing toggle is not available in Accessibility Settings
-   [MC-271870](https://bugs.mojang.com/browse/MC-271870) random;;_;;chance;;_;;with;;_;;looting function base value is for enchantment level 1
-   [MC-271897](https://bugs.mojang.com/browse/MC-271897) End Portal makes items disappear
-   [MC-271929](https://bugs.mojang.com/browse/MC-271929) Applying multiple layers of "using;;_;;converts;;_;;to" will produce ghost items
-   [MC-271971](https://bugs.mojang.com/browse/MC-271971) Wind Charges sometimes don't prevent fall damage
-   [MC-272014](https://bugs.mojang.com/browse/MC-272014) Ender Dragon death animation is broken since 20w22a (and broken again in 20w45a)
-   [MC-272038](https://bugs.mojang.com/browse/MC-272038) The error "Can't access registry ResourceKey;;[;;minecraft:root / minecraft:game;;_;;event;;];;" is sometimes in the log file
-   [MC-272053](https://bugs.mojang.com/browse/MC-272053) The "armor;;_;;effectiveness" effect does not work with projectiles or indirect damage
-   [MC-272073](https://bugs.mojang.com/browse/MC-272073) Item displays with billboard and rotation values create major visual bug
-   [MC-272079](https://bugs.mojang.com/browse/MC-272079) Medium/small Slimes and magma cube's attack reach is too short
-   [MC-272198](https://bugs.mojang.com/browse/MC-272198) Shulkers' models sometimes appear offset upon end city generation
-   [MC-272253](https://bugs.mojang.com/browse/MC-272253) The strength of the riptide enchantment is increased when holding tridents enchanted with riptide in both hands
-   [MC-272258](https://bugs.mojang.com/browse/MC-272258) block.portal.travel sound now plays when teleporting to a different dimension using commands
-   [MC-272264](https://bugs.mojang.com/browse/MC-272264) Narrator button in Accessibility Settings doesn't update upon pressing Ctrl+B
-   [MC-272267](https://bugs.mojang.com/browse/MC-272267) "Changes the blurriness of menu background" lacks punctuation
-   [MC-272279](https://bugs.mojang.com/browse/MC-272279) Resource packs containing TrueType fonts fail to load on x64 macOS systems
-   [MC-272308](https://bugs.mojang.com/browse/MC-272308) Axolots can be attached to new leads when being already leashed
-   [MC-272311](https://bugs.mojang.com/browse/MC-272311) The enchantment glint sometimes doesn't render in interfaces and first person
-   [MC-272313](https://bugs.mojang.com/browse/MC-272313) The game crashes when attempting to open the realms menu
-   [MC-272315](https://bugs.mojang.com/browse/MC-272315) Serial comma is missing from the entitiesWithPassengersCanUsePortals game rule description
-   [MC-272322](https://bugs.mojang.com/browse/MC-272322) When you are riding an entity through portals, you and the entity may teleport to the wrong place
-   [MC-272328](https://bugs.mojang.com/browse/MC-272328) entitiesWithPassengersCanUsePortals game rule description is missing the proper term capitalization
-   [MC-272329](https://bugs.mojang.com/browse/MC-272329) Riding an entity into portals may cause the game to softlock
-   [MC-272333](https://bugs.mojang.com/browse/MC-272333) The gamerule spawnRadius doesn't work anymore on respawn (always respawn at the same place)
-   [MC-272339](https://bugs.mojang.com/browse/MC-272339) Holding crossbows in both hands stacks quick charge
-   [MC-272342](https://bugs.mojang.com/browse/MC-272342) Typo in mining fatigue attribute ID 'minecraft:effect.minining;;_;;fatigue'
-   [MC-272343](https://bugs.mojang.com/browse/MC-272343) Ender pearls don't work when riding an entity
-   [MC-272344](https://bugs.mojang.com/browse/MC-272344) When teleported by an ender pearl, the "portal noise fades" sound is played
-   [MC-272347](https://bugs.mojang.com/browse/MC-272347) Upgrading from before 24w21a doesn't update structures saved by structure blocks
-   [MC-272355](https://bugs.mojang.com/browse/MC-272355) Ellipsis text is stringified within NBT text formatter list truncation
-   [MC-272361](https://bugs.mojang.com/browse/MC-272361) Minecarts and Passengers offset from block when riding through portals
-   [MC-272364](https://bugs.mojang.com/browse/MC-272364) Players spawn one block above the obsidian platform when entering an end portal
-   [MC-272365](https://bugs.mojang.com/browse/MC-272365) Inventory Images of All Banners are Completely White
-   [MC-272369](https://bugs.mojang.com/browse/MC-272369) Can respawn in a solid block with default spawnpoint
-   [MC-272374](https://bugs.mojang.com/browse/MC-272374) 24w21b will not upgrade attribute;;_;;modifiers from previous versions
-   [MC-272399](https://bugs.mojang.com/browse/MC-272399) Primed TNT entities can't go through an End portal anymore
-   [MC-272400](https://bugs.mojang.com/browse/MC-272400) Shield in Inventory with Banner Shows as White
-   [MC-272403](https://bugs.mojang.com/browse/MC-272403) Portal linking chunk loading changes
-   [MC-272406](https://bugs.mojang.com/browse/MC-272406) Crash when zombie tries to spawn second reinforcement
-   [MC-272408](https://bugs.mojang.com/browse/MC-272408) set;;_;;attributes item modifier can add the same attribute modifier twice
-   [MC-272424](https://bugs.mojang.com/browse/MC-272424) Chunks occasionally have large dark areas in the sky
-   [MC-272427](https://bugs.mojang.com/browse/MC-272427) Flame, power, punch, and piercing enchantments no longer work on the last use of the item
-   [MC-272430](https://bugs.mojang.com/browse/MC-272430) Breaking a Carrot/Warped Fungus on a Stick gives a damaged Fishing Rod
-   [MC-272438](https://bugs.mojang.com/browse/MC-272438) End crystal entities can't go through an End portal anymore
-   [MC-272442](https://bugs.mojang.com/browse/MC-272442) Comparator output of jukebox no longer persists on music disc finish
-   [MC-272445](https://bugs.mojang.com/browse/MC-272445) Command blocks made from Ctrl + Pick Block do not activate on first try
-   [MC-272469](https://bugs.mojang.com/browse/MC-272469) When the wind charge, fireball or shulker bullet is in the lava, it will continue to make a high-loudness noise
-   [MC-272490](https://bugs.mojang.com/browse/MC-272490) @n can select dying entities, unlike @e
-   [MC-272515](https://bugs.mojang.com/browse/MC-272515) Component-Modified Saddles get their components wiped when dispensed onto a horse, mule, or camel.

---

# Minecraft Snapshot 24w21b

We are now releasing snapshot 24w21b to fix a frequent crash which happened when Zombies spawned in areas of high local difficulty.

## Fixed bugs in 24w21b

-   [MC-272321](https://bugs.mojang.com/browse/MC-272321) Crash after upgrading snapshot world to 24w21a

---

# Minecraft Snapshot 24w21a

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

**`jukebox_playable` item component**

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

**`attribute` command**

-   The `uuid` and `name` arguments have been replaced with a singular `id` argument

**Item Stack Attribute Modifiers**

-   The `uuid` and `name` fields have been removed.
-   Attribute Modifiers now have an `id` (namespaced ID) field
    -   This is a unique identifier per attribute for the modifier

**Entity Attributes**

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

**Attribute Effects**

Fields:

-   `name` & `uuid` have been removed, replaced by `id`
-   `id`: The namespaced ID of the Attribute Modifier to add
    -   This will be postfixed with the slot name when the enchanted item is equipped in a slot
    -   Must be unique to avoid different Enchantments (or other systems) interfering with each others

**Entity Effect Types**

**`damage_item`**

The damage is not applied to items held by players in creative mode.

**Hit Block Parameters**

-   Entities: `this`
-   Enchantment Level
-   Origin
-   Block State

**Effect Components**

-   `minecraft:hit_block`:
    -   Condition Context: changed to take a Hit Block Parameter - `this` is the entity hitting the Block

### Tags

**Directory renames**

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

**Item Tags**

-   Removed `music_discs` item tag

**Block Tags**

-   `air`: All blocks that resemble air

**Damage Type Tags**

-   Removed `breeze_immune_to` damage type tag
-   Added `panic_environmental_causes`: Damage types that cause panic in aggressive animals that can panic, i.e. mobs that retaliate when attacked
-   Added `panic_causes`: Damage types that cause panic in passive animals, i.e. mobs that run away when attacked

### Predicates

**Jukebox Playable Predicate**

New item sub-predicate available as `jukebox_playable`.

-   Matcher for `jukebox_playable` component (like Music Discs)
-   Fields:
    -   `song` - optional id, list of ids or tag for jukebox song to be matched

**Player Predicate**

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
-   [MC-267967](https://bugs.mojang.com/browse/MC-267967) Breezes ignore the deflects;;_;;projectiles entity type tag
-   [MC-268438](https://bugs.mojang.com/browse/MC-268438) Baby armadillos can still eat while rolled up
-   [MC-269034](https://bugs.mojang.com/browse/MC-269034) Wolves no longer teleport while trying to pathfind out of Lava
-   [MC-269351](https://bugs.mojang.com/browse/MC-269351) The Bolt Armor Trim cannot be duplicated with Waxed Copper Block
-   [MC-269370](https://bugs.mojang.com/browse/MC-269370) Sharp lag spike caused by incorrect upper limit on particles created by mace smash attack
-   [MC-269460](https://bugs.mojang.com/browse/MC-269460) Thorns enchantment doesn't work when entities are hit by wind charges
-   [MC-269964](https://bugs.mojang.com/browse/MC-269964) Ominous item spawners are missing an NBT load for spawn;;_;;item;;_;;after;;_;;ticks
-   [MC-269988](https://bugs.mojang.com/browse/MC-269988) New potion effects don't apply their respective behaviors when creeper explodes
-   [MC-270024](https://bugs.mojang.com/browse/MC-270024) When drinking ominous bottles, bad omen of higher levels can be overriden by lower amplifiers
-   [MC-270377](https://bugs.mojang.com/browse/MC-270377) Wind charges can be hit and redirected the moment they are thrown
-   [MC-270573](https://bugs.mojang.com/browse/MC-270573) Mounted entities are immune to wind charge damage
-   [MC-270808](https://bugs.mojang.com/browse/MC-270808) Any item in the armor.body slot protects wolves from taking damage
-   [MC-271458](https://bugs.mojang.com/browse/MC-271458) Channeling tridents no longer summon lightning bolt every time hitting lightning rod under thunderstorm
-   [MC-271573](https://bugs.mojang.com/browse/MC-271573) Attribute Enchantments Don't Behave Properly on Armor
-   [MC-271634](https://bugs.mojang.com/browse/MC-271634) Custom enchantments don't appear in the creative menu
-   [MC-271718](https://bugs.mojang.com/browse/MC-271718) Crash when randomized;;_;;int;;_;;state;;_;;provider is applied to blocks lacking the property
-   [MC-271753](https://bugs.mojang.com/browse/MC-271753) Crash due to overflow inside cost calculation in by;;_;;cost;;_;;with;;_;;difficulty
-   [MC-271856](https://bugs.mojang.com/browse/MC-271856) Crossbows enchanted with Quick Charge do not benefit from its effects when used in the offhand
-   [MC-271868](https://bugs.mojang.com/browse/MC-271868) Frost walker replaces flowing water now
-   [MC-271901](https://bugs.mojang.com/browse/MC-271901) Entity effect "play;;_;;sound" Field "pitch" value upper limit is 1.0 instead of 2.0
-   [MC-271911](https://bugs.mojang.com/browse/MC-271911) Frost walker no longer works with void or cave air
-   [MC-271914](https://bugs.mojang.com/browse/MC-271914) Soul speed enchantment doesn't emit particles when the entity is controlled by a player
-   [MC-272039](https://bugs.mojang.com/browse/MC-272039) Soul Speed uses durability in creative mode
-   [MC-272042](https://bugs.mojang.com/browse/MC-272042) If players have max health over 20 and die, when they respawn they will have 20 health instead of their max health
-   [MC-272043](https://bugs.mojang.com/browse/MC-272043) The game crashes when entities die while having the oozing effect
-   [MC-272075](https://bugs.mojang.com/browse/MC-272075) Attempting to step up while controlling entity and moving fast often glitches
-   [MC-272084](https://bugs.mojang.com/browse/MC-272084) Creepers with potion effects no longer create area effect clouds upon exploding
-   [MC-272182](https://bugs.mojang.com/browse/MC-272182) Knowledge Books no longer function properly with a stack size of 1 in survival/adventure mode

---

# Minecraft Snapshot 24w20a

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

**Entity Predicate**

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
-   [MC-271468](https://bugs.mojang.com/browse/MC-271468) Game crashes with custom enchantment's "rotated;;_;;block;;_;;provider"
-   [MC-271532](https://bugs.mojang.com/browse/MC-271532) Mace only loses durability during smash attacks
-   [MC-271547](https://bugs.mojang.com/browse/MC-271547) Can't immediately sprint jump into a 2 block ceiling when standing next to it since 24w18a
-   [MC-271566](https://bugs.mojang.com/browse/MC-271566) Game crash on insufficient "ammo;;_;;use" amount
-   [MC-271574](https://bugs.mojang.com/browse/MC-271574) Inlining a painting variant causes players to disconnect when receiving entity data
-   [MC-271583](https://bugs.mojang.com/browse/MC-271583) Soul speed no longer works through partial blocks
-   [MC-271629](https://bugs.mojang.com/browse/MC-271629) Channeling doesn't work / "post;;_;;attack" effect requires enchanted item to be in the mainhand
-   [MC-271636](https://bugs.mojang.com/browse/MC-271636) Attempting to modify NBT of killer rabbit throws unexpected error
-   [MC-271678](https://bugs.mojang.com/browse/MC-271678) damage;;_;;item enchantment entity effect doesn't break items
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

# Minecraft Snapshot 24w19b

Oh wow, we never could have guessed you all were so violent! Here's a 24w19b, fixing a crash when a Villager died.

## Fixed bugs in 24w19b

-   [MC-271843](https://bugs.mojang.com/browse/MC-271843) Crash when a villager dies

---

