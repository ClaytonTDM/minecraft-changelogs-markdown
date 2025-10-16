# 1.21.5 Release Candidate 1

With Minecraft Live just around the corner, we are getting closer to the release of the first drop of the year. Today we're shipping the first 1.21.5 Release Candidate with a few bug fixes, which means if no new critical issues surface, this is the version we are planning to release as Minecraft: Java Edition 1.21.5.

## Fixed bugs in 1.21.5 Release Candidate 1

-   [MC-295383](https://bugs.mojang.com/browse/MC-295383) "Received missed or reordered chat message from server" string doesn't make logical sense
-   [MC-295412](https://bugs.mojang.com/browse/MC-295412) Lighting of magma block is incorrect
-   [MC-295416](https://bugs.mojang.com/browse/MC-295416) Beacon receives wrong shading from nearby blocks

---

# Minecraft 1.21.5 Pre Release 3

It's Tuesday, and today we're bringing you a third pre-release for Minecraft 1.21.5, with some fixes to recently introduced issues.

## Fixed bugs in 1.21.5 Pre-Release 3

-   [MC-295387](https://bugs.mojang.com/browse/MC-295387) fireball and small;;_;;fireball can no longer have their Owner, HasBeenShot, or LeftOwner fields modified
-   [MC-297384](https://bugs.mojang.com/browse/MC-297384) The second horn in the cold cow texture is unused by the model
-   [MC-299223](https://bugs.mojang.com/browse/MC-299223) F3 debug crosshair lost its outline
-   [MC-299543](https://bugs.mojang.com/browse/MC-299543) Experience orbs follow players in Spectator mode

---

# Minecraft 1.21.5 Pre Release 2

We're shipping some crash fixes in today's pre-release.

## Technical Changes

-   The Data Pack version is now 71 since this was missed in Pre-Release 1

## Fixed bugs in 1.21.5 Pre-Release 2

-   [MC-280482](https://bugs.mojang.com/browse/MC-280482) Main menu is totally broken when using Mesa 25.0
-   [MC-296644](https://bugs.mojang.com/browse/MC-296644) Game crashes while rendering section / java.lang.NullPointerException: Cannot read field "b" because "$$3" is null
-   Additional crash fixes

---

# Minecraft 1.21.5 Pre-Release 1

Today we're shipping the first pre-release of Minecraft 1.21.5. From now on you will mostly see bug fixes and technical tweaks until the start of the next snapshot cycle. As we enter the pre-release phase we will be releasing more frequently than our regular cadence on Wednesdays, so keep an eye out for the next pre-release!

## Changes

-   Added Spawn Eggs textures for programmer art texture pack

## Technical Changes

-   The Resource Pack version is now 55
-   Arguments in commands that accept inline values like loot tables, predicates, modifiers, data components, formatted text (`/loot`, `/give`, `/tellraw`, `/execute if predicate`, data components in `/execute if items`, etc.) have been reverted to accept numbers in place of booleans

> **Developer's Note**: The original change happened because we moved away from using NBT as an intermediate format for parsing those values, which meant that booleans were separated from numbers (similar to handling in JSON). We've decided to temporarily revert that, since some functionality can't be achieved yet without using storage and macro functions. However, once that missing functionality is added (and data can be transferred without being converted to and from text), legacy boolean handling will be removed once again.

### Network Protocol

-   The clientbound `player_chat` packet now contains an index increasing for every message sent to the client
    -   The index starts at 0 when logging in (or is reset by configuration phase and the `login` packet)
    -   For every message, the server should increment this value by 1
    -   If this value updates in an unexpected way, the client will disconnect
    -   As the protocol requires that every chat packet reaches the client in produced order, the goal is to enable faster detection of missed/reordered chat messages for custom server developers
-   The serverbound `chat` and `chat_command_signed` packets now contain a checksum byte along with the 'last seen' update
    -   This is a simple hash of the 'last seen' signatures which should be reconstructed by the server, allowing quicker detection of desynchronized state
    -   This can be passed as `0` to disable the check, for compatibility with protocol translation

## Resource Pack Version 55

-   Tweaked Leaf Litter block models

## Fixed bugs in 1.21.5 Pre-Release 1

-   [MC-170134](https://bugs.mojang.com/browse/MC-170134) Minecraft uses several times more VRAM than needed after exploring terrain for a while
-   [MC-279350](https://bugs.mojang.com/browse/MC-279350) Leaf litter multipart model system is unoptimized, causing render lag
-   [MC-280141](https://bugs.mojang.com/browse/MC-280141) Baby farm animals from spawn eggs with a variant differing from the parent flash the wrong variant initially
-   [MC-280241](https://bugs.mojang.com/browse/MC-280241) Cold Cows have improperly mirrored and incorrectly aligned ear textures
-   [MC-280249](https://bugs.mojang.com/browse/MC-280249) Spawn eggs don't use their old textures with the Programmer Art resource pack enabled
-   [MC-280278](https://bugs.mojang.com/browse/MC-280278) Sheep wool uses 1.14 texture with Programmer Art resource pack enabled
-   [MC-280326](https://bugs.mojang.com/browse/MC-280326) When teleporting across dimensions an error is often thrown
-   [MC-280361](https://bugs.mojang.com/browse/MC-280361) When a fallen tree replaces the bottom half of tall vegetation, the top part of the vegetation still generates
-   [MC-280474](https://bugs.mojang.com/browse/MC-280474) TNT minecarts explode regardless of tntExplodes gamerule
-   [MC-280477](https://bugs.mojang.com/browse/MC-280477) TNT still explodes when summoned or dispensed while tntExplodes gamerule is false
-   [MC-280479](https://bugs.mojang.com/browse/MC-280479) TNT is completely deleted when attempting to ignite it using redstone pulses when the “tntExplodes” gamerule is disabled
-   [MC-280480](https://bugs.mojang.com/browse/MC-280480) No flint and steel clicking sound when attempting to ignite TNT with a flint and steel when the "tntExplodes" gamerule is disabled
-   [MC-280493](https://bugs.mojang.com/browse/MC-280493) If the tntExplodes game rule is changed to false while primed TNT already exists in the world, the primed TNT explodes as normal
-   [MC-280501](https://bugs.mojang.com/browse/MC-280501) The "Fire extinguishes" sound plays every game tick while on fire in rain
-   [MC-280520](https://bugs.mojang.com/browse/MC-280520) ItemDropChance on an item frame is not serialized when there is no item anymore, leading to inconsistencies

---

# Minecraft Snapshot 25w10a

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
-   [MC-280063](https://bugs.mojang.com/browse/MC-280063) crafting;;_;;transmute recipes don't give an output if the output stack has the same count as the stack in the crafting grid
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

# Minecraft Snapshot 25w09b

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

