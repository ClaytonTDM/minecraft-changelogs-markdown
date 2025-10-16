# Minecraft Snapshot 23w06a

Today we are bringing you the `damage` command and new display entities.

Damage safely!

## Changes

-   Jukeboxes now emit a note particle above them while playing a music disc to match Bedrock

### Accessibility

-   Added a new option in the Accessibility menu called Damage Tilt for controlling the amount of camera shake when being hurt
-   Added a tooltip in the Key Binds screen that specifies which keybinds are conflicting
-   "Notification Display Time" accessibility option was renamed to "Notification Time"

### Updated Create New World Screen

-   Tabs can be switched with the keyboard by pressing Ctrl+Tab and Ctrl+Shift+Tab
-   Specific tabs can also be navigated to by pressing Ctrl+Tab Number
    -   For example, Ctrl+2 navigates to the second tab
-   Added a screen to easily enable/disable experimental features
    -   The screen can always be found under the More-tab
    -   In snapshots a shortcut button can be found under the Game-tab

### Creative menu

-   Added painting variants to creative menu
-   Paintings with pre-defined variant will now display author and title in description when hovered over

## Technical Changes

-   Added display entities for flexible display of items, blocks and text
-   Added a `damage` command for applying damage to entities
-   Added `--pidFile` argument to dedicated server command line for printing process id to file
-   Added the following game events:
    -   `entity_dismount` with a vibration frequency of 6
    -   `entity_mount` with a vibration frequency of 7
-   Added a group of entities to display items, blocks and text
-   Added `execute summon` to allow customization of a newly spawned entity

### Display entities

Three new entities have been added for flexible display of items, blocks and text

-   Those entities, similarily to `marker`, don't tick and have no collisions or physics
-   Models render at entity position, with normal rotation around X and Y axis (so it can be controlled by teleport commands), but also with additional arbitrary model transform

#### Common data types

Tag contents for those entities include some new data types with complex structure. Any form can be used for modifying data, but only one form is used for saving.

##### `rotation`

-   Quaternion form (used for saving): array of 4 numbers, describing components (x, y, z, w)
-   Axis-angle form: object with following fields:
    -   `axis` - 3d vector
    -   `angle` - in radians

#### `transformation`

Arbitrary affine transform

-   Matrix form: array of 16 numbers, describing row-major matrix
-   Decomposed form (used for saving): object with following fields:
    -   `translation` - 3d vector
    -   `left_rotation`, `right_rotation` - `rotation`
    -   `scale` - 3d vector
    -   Transforms are composed in order `translation`, `left_rotation`, `scale`, `right_rotation`

#### Interpolation

Some properties of display entites can be interpolated. That means that clients will see gradual changes over time instead of instantenous jumps.

Display entities keep track of current and previous values of interpolated values:

-   All properties marked as "interpolated" are part of a single interpolation set
-   Any update to interpolated property will cause all values of interpolation set to be saved as "current"
    -   Data command executions that do not change value of property (even if it's present in NBT) do not count as updates
    -   Updates are synchronized to clients at most once per tick, so multiple updates within command will still count as single update
-   Previous current values are saved as "previous"
-   If interpolation is enabled, entity will transition between "previous" and "current" values over time
-   Start of interpolation (entity fully in "previous" state) is defined by field `interpolation_start` (game time, in ticks)
    -   Set to `-1` to load current game time instead)
-   End of interpolation (entity fully in "current" state) is defined as `interpolation_start` + `interpolation_duration` (in ticks)

#### Common properties

Every entity in family has the following fields:

-   `transformation` - `transformation` applied to model (after normal entity orientation). Defaults to identity. Interpolated
-   `billboard` - option to control if entity should pivot to face player when rendered:
    -   `fixed` - no rotation (default)
    -   `vertical` - entity can pivot around vertical axis
    -   `horizontal` - entity can pivot around horizontal axis
    -   `center` - entity can pivot around center point
-   `brightness` - if present, overrides light values used for rendering. Omited by default (which means rendering uses values from entity position). Object has two fields:
    -   `sky` - value of skylight, 0..15
    -   `block` - value of block light, 0..15
-   `view_range` - maximum view range of this entity. Actual distance depends on client-side render distance and entity distance scalling. Default value 1.0 (roughly the same as fireball)
-   `shadow_radius` - size of shadow. Defaults to 0 (no shadow). Interpolated
-   `shadow_strength` - strength of the shadow. Controls the opacity of the shadow as a function of distance to block below. Defaults to 1. Interpolated
-   `width`, `height` - describe size of culling bounding box. Bounding box spans vertically `y` to `y+height` and horizontally `width/2` in all directions from entity position. If either field is set to 0, culling is disabled. Both default to 0
-   `glow_color_override` - override glow border color. Defaults to 0 (use team color)

#### `item_display`

Displays a single item stack.

-   Stack can be changed with commands by setting slot `inventory.0`

Fields:

-   `item` - item stack to display. Same format as in inventory (example: `{id: "minecraft:dirt", Count: 1}`)
-   `item_display` - describes item model transform applied to item (as defined in `display` section in model JSON)
    -   Values: `none` (default), `thirdperson_lefthand`, `thirdperson_righthand`, `firstperson_lefthand`, `firstperson_righthand`, `head`, `gui`, `ground`, `fixed`

#### `block_display`

Displays a block state.

-   Does not display block entities, even if they would normally be created on block placement (like chest)

Fields:

-   `block_state` - block state to display. Same format as item held by endermen (example `{Name:"minecraft:dirt"}`)

#### `text_display`

Displays a text component.

Fields:

-   `text` - text to display. Components are resolved with the context of the display entity
-   `line_width` - line width used to split lines (note: new line can be also addded with `;;n;;` characters). Defaults to 200
-   `text_opacity` - opacity (alpha component) of rendered text. Defaults to 255. Interpolated
-   `background` - color of background. Includes alpha channel. Defaults to 0x40000000. Interpolated
-   `default_background` - if true, rendering uses default text background color (same as in chat). Defaults to false
-   `shadow` - should text be displayed with shadow. Defaults to false
-   `see_through` - should text be visible through blocks. Defaults to false
-   `alignment` - how text should be aligned
    -   Values: `center` (default), `left`, `right`

Note: text display backgrounds uses new shader types `rendertype_text_background` and `rendertype_text_background_see_through`

### Damage Types

Damage Types are a new registry that can be extended through data packs. A Damage Type determines how damage is handled by the game. This includes which attributes the damage has as well as which death message is used when an entity dies due to that type of damage.

Example:

    {
      "exhaustion": 0.1,
      "message_id": "arrow",
      "scaling": "when_caused_by_living_non_player"
    }
    

Fields:

-   `message_id`: The message id used for deaths caused by this damage type
    -   Will be combined with other string fragments to form a translation key
-   `exhaustion`: The amount of hunger exhaustion caused by this damage type
-   `scaling`: Whether this damage type scales with difficulty levels. Possible values:
    -   `never`: Damage is always the same
    -   `always`: Damage always scales with difficulty
    -   `when_caused_by_living_non_player`: Damage scales with difficulty if it was caused by a living entity who is not a player
-   `effects`: Optional field controlling how damage manifests when inflicted on players. Possible values:
    -   `hurt` (default): the default hurt sound
    -   `thorns`: Thorns hurt sound
    -   `drowning`: Drowning sound
    -   `burning`: A single tick of burning sound
    -   `poking`: Berry bush poke sound
    -   `freezing`: Freeze tick sound
-   `death_message_type`: Optional field that controls if special death message variants are used. Possible values:
    -   `default` (default): No special death message logic is applied
    -   `fall_variants`: Show a variant of fall damage death instead of a regular death message, e.g. `death.fell.assist.item`
    -   `intentional_game_design`: Show the intentional game design message instead of a regular death message

Damage type tags control many aspects of how damage from different sources are interpreted.

### Commands

#### `damage`

New command to apply damage to entities.

Syntax:

-   `damage <target> <amount> [<damageType>] [at <location>]`
-   `damage <target> <amount> [<damageType>] [by <entity>] [from <cause>]`

Parameters:

-   `target`: The entity to damage
-   `amount`: Amount of damage to inflict
-   `damageType`: The type of damage to inflict
    -   This determines how the damage affects the entity as well as which death message is displayed
-   `entity`: The entity inflicting the damage
-   `cause`: The cause of the damage, in the case of indirect damage
    -   Example: When shot by an arrow, the `entity` is the Arrow projectile while `cause` might be a Skeleton
-   `location`: The location the damage originated at (when no entity caused the damage)
    -   For instance, `location` might represent the location of a Bed exploding in the Nether

#### `execute summon`

New `execute` sub-command for summoning new entity and binding context (`@s`) to it. Meant to simplify entity setup and reduce need for raw NBT editing.

-   `execute summon <entity id>`

### Predicates

#### Damage Type Predicates

The following fields have been removed from damage type predicates: `is_projectile`, `is_explosion`, `bypasses_armor`, `bypasses_invulnerability`, `bypasses_magic`, `is_fire`, `is_magic`, `is_lightning`.

A new `tags` array has been added. Each entry has two fields:

-   `id`: The ID of a damage type tag
-   `expected`: Whether the damage is expected to have or not have the tag for the predicate to match

### Game Rules

-   Added `doVinesSpread` game rule, determining if vines will spread to nearby blocks
    -   Defaults to `true`

## Fixed bugs in Snapshot 23w06a

-   [MC-12729](https://bugs.mojang.com/browse/MC-12729) Z-fighting can be seen on leggings and boots worn by entities
-   [MC-145765](https://bugs.mojang.com/browse/MC-145765) Both "Text Background" settings strings are overflowing the buttons
-   [MC-156443](https://bugs.mojang.com/browse/MC-156443) In some languages, text is too long and escapes buttons
-   [MC-198874](https://bugs.mojang.com/browse/MC-198874) Opening a Minecart with Hopper provokes Piglins, even though opening a Hopper doesn't provoke them
-   [MC-209622](https://bugs.mojang.com/browse/MC-209622) Sculk sensors do not detect item frame / glow item frame interactions
-   [MC-209896](https://bugs.mojang.com/browse/MC-209896) Sculk sensors are not activated upon placing glowstone into respawn anchors
-   [MC-209929](https://bugs.mojang.com/browse/MC-209929) Sculk sensors are not activated upon filling composters
-   [MC-210276](https://bugs.mojang.com/browse/MC-210276) Sculk sensors are not activated upon trampling farmland
-   [MC-210294](https://bugs.mojang.com/browse/MC-210294) Sculk sensors are not activated upon mounting or dismounting any non-biological entities
-   [MC-210334](https://bugs.mojang.com/browse/MC-210334) Sculk sensors are not activated upon sheep being dyed
-   [MC-210707](https://bugs.mojang.com/browse/MC-210707) Sculk sensors are not activated upon closing chest boats, chest rafts, or chest minecarts
-   [MC-210715](https://bugs.mojang.com/browse/MC-210715) Sculk sensors are not activated upon attaching or removing leads from entities
-   [MC-212501](https://bugs.mojang.com/browse/MC-212501) Sculk sensors are not activated upon collecting books from lecterns
-   [MC-213803](https://bugs.mojang.com/browse/MC-213803) Sculk sensors are not activated upon harvesting glow berries from cave vines
-   [MC-215767](https://bugs.mojang.com/browse/MC-215767) Sculk sensors do not detect turtles laying an egg
-   [MC-233972](https://bugs.mojang.com/browse/MC-233972) Text can appear outside of buttons in the key binds menu when assigning keys to functions or when multiple functions are assigned to the same key
-   [MC-236988](https://bugs.mojang.com/browse/MC-236988) Sculk sensors are not activated upon using shears on cave/twisting/weeping vines or kelp
-   [MC-237450](https://bugs.mojang.com/browse/MC-237450) The "Simulation Distance" text can appear outside of its slider
-   [MC-237879](https://bugs.mojang.com/browse/MC-237879) Sculk sensors are not activated upon villagers working with composters
-   [MC-249878](https://bugs.mojang.com/browse/MC-249878) Text can appear outside of the "Device" button within the music and sound options menu
-   [MC-251917](https://bugs.mojang.com/browse/MC-251917) No gear equipping sound or subtitle when a shield is placed into the offhand slot
-   [MC-251934](https://bugs.mojang.com/browse/MC-251934) Sculk sensors are not activated upon frogs laying frogspawn
-   [MC-252434](https://bugs.mojang.com/browse/MC-252434) Sculk sensors are activated when interacting with fences while holding leads
-   [MC-257873](https://bugs.mojang.com/browse/MC-257873) Swapping an armor piece with an armor piece of the same type doesn't play its equipping sound
-   [MC-258156](https://bugs.mojang.com/browse/MC-258156) The Warden does not deal the same amount of damage to the player and entities in difficult mode
-   [MC-258622](https://bugs.mojang.com/browse/MC-258622) Fire charge isn't in the Ingredients tab in creative inventory
-   [MC-259193](https://bugs.mojang.com/browse/MC-259193) The "Notification Display Time" text can appear outside of its slider
-   [MC-259195](https://bugs.mojang.com/browse/MC-259195) Using /ride on an entity in another dimension causes client/server desync
-   [MC-259197](https://bugs.mojang.com/browse/MC-259197) The damage tilt effect isn't accessible-friendly
-   [MC-259221](https://bugs.mojang.com/browse/MC-259221) Using the "/ride" command on invalid entities teleports players to their position
-   [MC-259224](https://bugs.mojang.com/browse/MC-259224) Blocking attacks with shields causes the damage tilt to play and red damage tint to show
-   [MC-259227](https://bugs.mojang.com/browse/MC-259227) /execute if loaded alone always fails
-   [MC-259233](https://bugs.mojang.com/browse/MC-259233) Argument error messages for low values are inconsistently spelled
-   [MC-259245](https://bugs.mojang.com/browse/MC-259245) An enderman ridden with /ride constantly teleports if the player looks at the enderman's eyes
-   [MC-259247](https://bugs.mojang.com/browse/MC-259247) The execute on owner sub-command does not select the owner of a horse, donkey, llama, or mule
-   [MC-259360](https://bugs.mojang.com/browse/MC-259360) The "selectWorld.mapFeatures.info" string is missing a comma after the word "Shipwrecks"
-   [MC-259432](https://bugs.mojang.com/browse/MC-259432) Single missing pixel in 'chestplate;;_;;trim' item texture
-   [MC-259442](https://bugs.mojang.com/browse/MC-259442) Can't shift click items into second anvil slot
-   [MC-259454](https://bugs.mojang.com/browse/MC-259454) Loot table for hoglin stable chests uses the loot table for bridge chests instead
-   [MC-259468](https://bugs.mojang.com/browse/MC-259468) empty;;_;;slot;;_;;amethyst;;_;;shard does not show in Smithing Table slot
-   [MC-259599](https://bugs.mojang.com/browse/MC-259599) Curse of Binding armor can be removed by swapping armor with right click in hotbar
-   [MC-259635](https://bugs.mojang.com/browse/MC-259635) The color palettes for "iron" and "iron;;_;;darker" trims are flipped
-   [MC-259640](https://bugs.mojang.com/browse/MC-259640) The lightest three colors of "iron" and "iron;;_;;darker" color palettes are identical