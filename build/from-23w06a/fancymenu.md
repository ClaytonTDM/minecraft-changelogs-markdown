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

---

In this snapshot we've tweaked the armor trim feature and redefined the Create New World user experience flow.

Happy world creating!

## Changes

-   Updated the Create New World screen
-   Interacting with armor or elytra items in-hand will now swap them with equipped gear
-   The enchantment glint has been further tweaked to be slower and less visible, but also have more contrast in some intervals

### Accessibility

-   Changed how tooltips in the menu UI are positioned so buttons are still readable
-   Added two new options in the Accessibility menu for adjusting the speed and transparency of enchantment glints

### Updated Create New World Screen

-   The screen is now organized into three tabs
    -   The Game-Tab allows to set the world name, Gamemode, Difficultly and whether to allow cheats
    -   The World-Tab allows to set the World-Type and Seed, and to toggle the generation of structures and the bonus chest
    -   The More-Tab provides access to the Game Rules and DataPack Selection Screen
-   Removed the Import Settings button and the corresponding Export Settings button in the Edit World Screen

## Technical Changes

### Trim Patterns & Materials

-   The following data is now also defined by a trim material:
    -   `override_armor_materials` which is an optional map of armor material to overriden color palette
        -   Map key is the armor material that this trim material wants to override with a different color palette
        -   Map value is the name of the color palette that will be used when this trim material is applied to an armor piece with the corresponding armor material
-   The following data is no longer defined by a trim material:
    -   `incompatible_armor_material`

### Commands

#### `effect`

-   `infinite` is now a valid option for effect durations
    -   Infinite effect durations show up as "∞" in the player inventory view

## Experimental Features

-   Armor trims can now be applied to leather armor
-   Armor can now have trims of the same material it is made out of
    -   For example, a Golden Chestplate with a Golden Armor Trim is now possible
-   The texture of the Dune armor trim has been tweaked so that the symbol on the chestplate is moved up a few pixels
-   Loot tables for smithing templates have been adjusted

### Loot tables for smithing templates

-   The following common armor trims now always generate 2 templates in a chest when found:
    -   Dune
    -   Coast
    -   Wild
    -   Sentry
-   This is to give new players a chance to understand that smithing templates are consumed when used
-   Netherite Upgrade smithing templates have been made twice as common
    -   While we do want Netherite upgrading to be more challenging, we felt the previous rates did not encourage further exploration after finding the first Netherite Upgrade template
-   1 Eye Armor Trim is now guaranteed in every Stronghold library chest
    -   This is so even in the most unlucky worlds, this armor trim can still be found
-   Woodland Mansions now have a greatly increased chance of generating the Vex Armor Trim smithing template
    -   Woodland Mansions already have very few chests that utilize loot tables - in unlucky generations, none at all. It was too rare to find one of these trims, and we want the challenge of getting the Vex Armor Trim to be more about finding a Woodland Mansion to begin with
-   Across the board, smithing templates have been made slightly more common
    -   Due to the method of crafting copies of templates, we want the process of discovering another template in a structure to feel like the player has just saved 7 diamonds. If the templates are too rare, this situation does not happen as much, meaning players will not be encouraged to explore more structures

## Fixed bugs in Snapshot 23w05a

-   [MC-127749](https://bugs.mojang.com/browse/MC-127749) Cape is jittering; movement way sharper than in snapshot 18w03b
-   [MC-147711](https://bugs.mojang.com/browse/MC-147711) Drowned no longer have a different swimming animation
-   [MC-216270](https://bugs.mojang.com/browse/MC-216270) It's not possible to replace armor by right clicking while holding the armor item
-   [MC-252625](https://bugs.mojang.com/browse/MC-252625) Frogs play a running animation after the NoAI NBT is applied
-   [MC-254074](https://bugs.mojang.com/browse/MC-254074) Frogs don't play their walking animation when they take damage
-   [MC-256479](https://bugs.mojang.com/browse/MC-256479) Camels don't play their walking animations when they are damaged
-   [MC-256493](https://bugs.mojang.com/browse/MC-256493) Camels don't have smooth transitions to their idle states when they stop moving
-   [MC-256650](https://bugs.mojang.com/browse/MC-256650) Frogs don't have smooth transitions to their idle states when they stop moving
-   [MC-256664](https://bugs.mojang.com/browse/MC-256664) Camels play their walking animations after the "NoAI" NBT tag is applied to them
-   [MC-257464](https://bugs.mojang.com/browse/MC-257464) Axolotl walking animation stutters when moving slowly
-   [MC-259206](https://bugs.mojang.com/browse/MC-259206) The accessibility onboarding screen can not display any language other than English (US)
-   [MC-259357](https://bugs.mojang.com/browse/MC-259357) Text inside the smithing table GUI renders behind the armor stand model in some languages
-   [MC-259362](https://bugs.mojang.com/browse/MC-259362) The "item.minecraft.smithing;;_;;template.netherite;;_;;upgrade.additions;;_;;slot;;_;;description" string is missing an article before the word "Netherite"
-   [MC-259370](https://bugs.mojang.com/browse/MC-259370) Stronghold library loot table has been replaced by stronghold altar loot table
-   [MC-259389](https://bugs.mojang.com/browse/MC-259389) Incompatible crafting arrow overlay in the new smithing GUI uses the position of the legacy smithing GUI
-   [MC-259399](https://bugs.mojang.com/browse/MC-259399) The armor stand model within the smithing table GUI doesn't render the output item after resizing the game window
-   [MC-259418](https://bugs.mojang.com/browse/MC-259418) Camels with large "LastPoseTick" NBT values still behave strangely and cause a variety of issues
-   [MC-259420](https://bugs.mojang.com/browse/MC-259420) Pixels not present in the palettes get erased, not kept

---

Tuesday is the new Wednesday, did you know? Here is snapshot 23w04a with a new experimental Armor Trim Smithing feature in the Update;;_;;1;;_;;20 experimental pack.

Happy trimming!

## Changes

-   Enchantment glint on items and armor is now more subtle

## Experimental Features

-   Added a new armor trimming system to visually customize your armor
-   Added Smithing Template items
-   Redesigned the Smithing Table
-   Changed how Netherite equipment is crafted

### Smithing Templates

-   Smithing Tables have been redesigned into a workstation for physical equipment upgrades and modifications
-   Alongside slots for combining a piece of equipment and materials, there is now a required slot for an item type called Smithing Templates
-   Smithing Templates define what type of upgrade you will be making to equipment
    -   It specifies both what type of items you can upgrade, and which ingredients are valid to customize the upgrade
    -   There are currently two categories of Smithing Templates: Armor Trim and Netherite Upgrade
-   Smithing Templates are consumed when used to upgrade an item in the Smithing Table
-   You can craft a copy of a Smithing Template in the Crafting Table with 7 diamonds + 1 block of material that the template is made out of + 1 smithing template, which will output 2 of the same Smithing Template

### Netherite Equipment

-   Netherite equipment crafting now also requires a Netherite Upgrade Smithing Template
-   Netherite Upgrade Smithing Templates can be found randomly in all Bastion Remnant chests, and there is a guarantee of 2 in every Treasure Room Bastion Remnant
-   This change was made for a variety of reasons:
    -   Increase the time players utilize Diamond equipment before Netherite
    -   Make Netherite equipment a more significant achievement in the game's progression
    -   Adapt Netherite more naturally into the new Smithing Table crafting system

### Armor Trims

-   You can now visually customize your armor with a variety of unique trims at the Smithing Table
    -   All armor is viable for trims except for leather armor
-   Armor trims are purely visual with no gameplay benefits, and can only be applied to Helmets, Chestplates, Leggings and Boots
    -   All trim patterns are visually the same on an armor's item icon, but the color will still change based on the trim material
    -   To check which trim pattern a piece of armor has, you can hover over it in the inventory
-   Armor Trim Smithing Templates can be found all throughout the world, and each of the following structures contain their own unique Smithing Template:
    -   Pillager Outpost
        -   Sentry Armor Trim
    -   Desert Pyramid
        -   Dune Armor Trim
    -   Shipwreck
        -   Coast Armor Trim
    -   Jungle Temple
        -   Wild Armor Trim
    -   Ocean Monument
        -   Tide Armor Trim
    -   Ancient City
        -   Ward Armor Trim
    -   Woodland Mansion
        -   Vex Armor Trim
    -   Nether Fortress
        -   Rib Armor Trim
    -   Bastion Remnant
        -   Snout Armor Trim
    -   Stronghold
        -   Eye Armor Trim
    -   End City
        -   Spire Armor Trim
-   Smithing Templates are found in chests in their respective structure, except for the Ocean Monument. Instead of finding it in chests, Elder Guardians sometimes drop a Smithing Template upon death
-   Some Armor Trim Smithing Templates are rarer than others, so be on the lookout for them to impress your friends!
-   An armor trim has two properties: a pattern and a material
    -   The pattern is defined by the Smithing Template used to apply the trim, and represents the visual pattern of the trim
    -   The material is defined by what ingredient you used to apply the trim, and represents the color of the trim
-   The viable ingredients you can use to define the color of your armor trim are the following:
    -   Iron
    -   Copper
    -   Gold
    -   Lapis
    -   Emerald
    -   Diamond
    -   Netherite
    -   Redstone
    -   Amethyst
    -   Quartz
-   Armor cannot have the same material it is made of applied to it as a trim
    -   For example, a Golden Chestplate cannot have a Golden Armor Trim

## Technical Changes

-   Added a new type of atlas configuration source: `paletted_permutations`
    
-   Armor Stands now preserve custom names when placed and broken
    
-   A new registry `trim_pattern` has been added for the armor trim system
    
-   A new recipe serializer `smithing_transform` has been added for the updated Netherite Upgrade recipe
    
-   A new recipe serializer `smithing_trim` has been added for the new Armor Trim recipe
    
-   Smithing table has temporarily two menu types
    
    -   Old menu without Smithing Template slot has been renamed to `legacy_smithing`
        -   Will be removed when Armor Trim feature stops being an experimental feature
    -   New menu with Smithing Template slot was added called `smithing`
-   Added new flag (value 128) to `HideFlags` NBT field for hiding armor trim item tooltips
    

### Paletted Permutations

-   `paletted_permutations` is a new type of atlas configuration source used to dynamically generate new textures in memory based on a set of color palettes
-   Color palettes allow you to swap out the colors of a texture without having to supply all files for the variants of a texture in a resource pack
-   This is useful for things like armor trims, where you want to be able to change the color of parts of the armor without having to create a new texture for each color
-   The `paletted_permutations` source has a set of required parameters:
    -   `textures` A list of namespaced locations of base textures
        -   These textures will be used to generate variants of them that have been modified by color palettes
    -   `palette_key` A namespaced location of a color palette key file
        -   A color palette key is used to define the set of key pixel colors we want to swap out with the color palettes defined below
    -   `permutations` A map of permutations from suffix to a namespaced location of a color palette file
        -   The suffix is appended at the beginning to the resource location of the output variant textures, with a `_` character separating the suffix and the base texture name
        -   The color palette is a texture file with a set of pixels that are used for replacing pixels that match the color palette key in each base texture
        -   The number of pixels in each color palette must be the same as that of the `palette_key` defined for this source
        -   Key matching is done by comparing the RGB values of each pixel in the `palette_key` to the RGB values of each pixel in the color palette
        -   Alpha channel is ignored for key matching, but in the resulting texture the alpha channel is multiplied with the color palette's alpha channel
        -   Pixels that do not match the `palette_key` are copied over to the resulting texture as-is
-   After defining a `paletted_permutations` source, you can then reference those namespaced output textures in other resources in your resource pack
    -   For example, if you have the following `paletted_permutations` source:
        
            {
                "type": "paletted_permutations",
                "textures": [
                    "minecraft:item/leather_helmet",
                    "minecraft:item/leather_chestplate",
                    "minecraft:item/leather_leggings",
                    "minecraft:item/leather_boots"
                ],
                "palette_key": "minecraft:colormap/color_palettes/leather_armor_color_key",
                "permutations": {
                    "red": "minecraft:colormap/color_palettes/red",
                    "green": "minecraft:colormap/color_palettes/green",
                    "blue": "minecraft:colormap/color_palettes/blue"
                }
            }
            
        
    -   You can then reference the resulting textures in other resources like this:
        
            {
                "textures": {
                    "layer0": "minecraft:item/leather_helmet_red",
                    "layer1": "minecraft:item/leather_chestplate_green",
                    "layer2": "minecraft:item/leather_boots_blue"
                }
            }
            
        

### Trim Patterns & Materials

-   Trim patterns and materials for armor are defined by the server through the `trim_pattern` and `trim_material` registry respectively
    -   As a result, new trim patterns and materials can be added via data packs
-   These are synchronized to clients when they join the server
    -   However, clients must have an accompanying resource pack to see those registered trim patterns and materials
    -   The paths to these textures are inferred based on the filename of the pattern json, and will try to find the textures within the same namespace as the trim pattern's `name` field
-   The following data is defined by a trim pattern:
    -   `asset_id` which is a namespaced id used to infer texture locations and localization
    -   `template_item` which is the id of the smithing template item used to apply the trim pattern
    -   `description` which is a text component used for displaying the pattern name of an armor trim when hovering an armor itemstack
-   The following data is defined by a trim material:
    -   `asset_name` which is a string used as a suffix for armor trim texture locations
    -   `ingredient` which is the id of the ingredient item used to apply the trim material
    -   `item_model_index` which is a float which defines the item model override each armor item model should target to change their visuals for this material
    -   `incompatible_armor_material` which is an optional id of the armor material this trim material cannot be applied to
    -   `description` which is a text component used for displaying the material name of an armor trim when hovering an armor itemstack
        -   The style defined in this description is applied to the armor trim pattern `description` as well

### Commands

-   New relation available for `execute on`: `origin`:
    -   shooter, if the executing entity is a projectile (like arrow, fireball, trident, firework, thrown potion, etc.)
    -   thrower, if the executing entity is an item
    -   source of effect, if the executing entity is an area effect cloud
    -   igniter, if the executing entity is a primed tnt
    -   summoner, if the executing entity is evoker fangs or a vex

## Fixed bugs in 23w04a

-   [MC-198809](https://bugs.mojang.com/browse/MC-198809) Blast Protection does not reduce explosion knockback except at very high levels
-   [MC-259189](https://bugs.mojang.com/browse/MC-259189) "Narrator: Not Available" isn't grayed out on accessibility splash
-   [MC-259204](https://bugs.mojang.com/browse/MC-259204) All goat horns display as Ponder goat horns and play the Ponder instrument
-   [MC-259211](https://bugs.mojang.com/browse/MC-259211) You cannot select incompatible resource packs within the resource packs menu via keyboard navigation

---

We're now releasing the first snapshot for Minecraft 1.19.4. This release contains new accessibility functionality, new commands and plenty of bug fixes!

Happy mining!

## Changes

-   Vexes now use a separate charging animation when empty-handed
-   Armor Stands now preserve custom names when placed and broken

### Accessibility

-   Added an accessibility onboarding screen for players launching the game for the first time
-   Added arrow key navigation
-   The Resource Pack screen is now keyboard-navigatable
-   Auto-Jump is now off by default
-   Added a new "Notification Display Time" accessibility option
    -   Changes how long notifications such as unlocked recipes, advancements, subtitles and selected item names are visible for

#### Arrow key navigation

-   Menu screens can now be navigated by using the arrow keys
-   When navigating with arrow keys, sliders need to be activated by pressing Enter or Space to start changing the value

## Technical Changes

-   The data pack version is now 11
-   Added a network protocol feature for forcing bundle of packets to be processed within same client tick
-   Added `fallback` fields to `translate` chat components
-   Out-of-bound arguments in `translate` formats are no longer silently ignored
-   The `clone` command now supports cloning to and from different dimensions
-   A new `string` source is now available for the `data modify` command
-   New `execute` sub-commands

### Network Protocol

-   Clients now reset their Secure Chat session state when receiving the login packet

#### Packet bundles

-   Added new delimiter packet to clientbound game protocol
-   All packets between two delimiters are guaranteed to be processed within same tick
-   For security reasons this feature is not supported in serverbound direction

### Block Behavior

-   Fire burns out faster in certain biomes, and this is now controlled by the `increased_fire_burnout` biome tag

### Mob Spawning

-   The `only_allows_snow_and_gold_rabbits` biome tag has been renamed to `spawns_gold_rabbits` to match its behavior
-   White Rabbit variants are now controlled by the `spawns_white_rabbits` biome tag
-   Fox variants are now controlled by the `spawns_snow_foxes` biome tag

### Mob Behavior

-   Snow Golems melting in warm biomes is now controlled by the `snow_golem_melts` biome tag

### Commands

#### `clone`

The clone command now supports specifying the source and target dimensions. New syntax:

`clone [from <sourceDimension>] <begin> <end> [to <targetDimension>] <destination> ...`

Parameters:

-   `sourceDimension`: id of dimension to clone from
-   `targetDimension`: id of dimension to clone to

#### `data`

New source available:

-   `string <entity|block|storage> [path] [start] [end]` - reads a value as text, resulting in a string value

New arguments:

-   `start`: Index of first character to include at the start of the string
-   `end`: Index of the first character to exclude at the end of the string

#### `execute`

##### `execute if|unless`

New conditions available for the `execute if|unless` sub-command:

-   `execute if|unless loaded <pos>` - checks if the position given is fully loaded (in regard to both blocks and entities)
-   `execute if|unless dimension <dimension>` - checks if the execution is in a matching dimension

Parameters:

-   `pos`: Block position to check
-   `dimension`: A dimension id

##### `execute on`

New `execute` sub-command for selecting entities based on relation to the current executing entity:

-   `execute on <relation>`

Relations:

-   `vehicle` - entity that the executing entity is riding
-   `passengers` - all entities directly riding the executing entity (no sub-passengers)
-   `controller` - entity that is controlling the executing entity (for example: first passenger in a boat)
-   `owner` - owner of the executing entity, if it is a tameable animal (like cats, wolves or parrots)
-   `leasher` - entity leading the executing entity with a leash (might be a leash knot in case of being attached to a fence)
-   `target` - attack target for the executing entity
-   `attacker` - last entity that damaged the executing entity in the previous 5 seconds

If the relation is not applicable to the executing entity or there are no entities matching it, selector returns zero elements.

#### `title`

-   All time arguments to `title times` are now time durations and work with `t`, `s` and `d` suffixes

#### `weather`

-   The duration of the weather change now matches the game's regular weather cycle if not specified
-   The `duration` parameter is now a time duration in ticks and works with `t`, `s` and `d` suffixes
    -   To retain existing functionality, you need to add an `s` suffix to pre-existing commands

#### `ride`

New command to allow entities to start or stop riding other entities

Syntax:

-   `ride <target> mount <vehicle>`
    -   Makes a single target mount a single vehicle
    -   The command will fail if:
        -   `vehicle` is a player
        -   `target` is already riding a vehicle
        -   `target` and `vehicle` are the same entity
        -   `vehicle` is already a passenger (direct or indirect) of `target`
-   `ride <target> dismount`
    -   Dismounts `target` from any vehicle it is riding
    -   Fails if `target` is not riding anything

### Game Rules

-   Added `commandModificationBlockLimit`, controlling the maximum number of blocks changed in one execution of `clone`, `fill` and `fillbiome`

### Chat components

#### Translation fallback

Added an optional `fallback` field to `translate` text components.

-   The new field is a string that will be used in place of translation if it is missing
-   If `fallback` is missing, the old behavior (i.e. using the key itself as the translation) is preserved

## Experimental Features

### Note block interaction

-   Mob heads can now be placed on top of note blocks without sneaking

## Fixed bugs in 23w03a

-   [MC-26678](https://bugs.mojang.com/browse/MC-26678) Damage wobble no longer shows direction of incoming damage
-   [MC-30403](https://bugs.mojang.com/browse/MC-30403) Sprinting isn't canceled when dismounting rideable entities while sprinting
-   [MC-121048](https://bugs.mojang.com/browse/MC-121048) When an entity dies, the combat tracker only records the killing blow
-   [MC-122595](https://bugs.mojang.com/browse/MC-122595) /weather command with duration 0 has the same weather for longer time
-   [MC-136534](https://bugs.mojang.com/browse/MC-136534) All command blocks think they're facing south with caret notation
-   [MC-149144](https://bugs.mojang.com/browse/MC-149144) Multiple buttons can be selected by pressing another button and Tab
-   [MC-155433](https://bugs.mojang.com/browse/MC-155433) Minecart with hopper not picking matching items from a mixed pile
-   [MC-165595](https://bugs.mojang.com/browse/MC-165595) Guardian beam does not render when over a certain "Time" in level.dat
-   [MC-181832](https://bugs.mojang.com/browse/MC-181832) The "/spreadplayers" command doesn't spread entities in the specified dimension
-   [MC-191942](https://bugs.mojang.com/browse/MC-191942) The buttons in the multiplayer menu are not evenly spaced
-   [MC-222518](https://bugs.mojang.com/browse/MC-222518) Skeleton/Zombie Horse's & Donkey/Mule's saddles and chests are outdated/have errors
-   [MC-224960](https://bugs.mojang.com/browse/MC-224960) The spectate command does not work between dimensions
-   [MC-230678](https://bugs.mojang.com/browse/MC-230678) Cauldron fills with powder snow in frozen ocean biome while it's visually raining
-   [MC-233893](https://bugs.mojang.com/browse/MC-233893) Burning mobs won't get extinguished by rain in warm patches of Frozen Ocean biome
-   [MC-235260](https://bugs.mojang.com/browse/MC-235260) Hopper minecart at (0, 0, 0) transfers items slower than normal
-   [MC-247836](https://bugs.mojang.com/browse/MC-247836) Riptide doesn't work in rain within a frozen ocean biome
-   [MC-252773](https://bugs.mojang.com/browse/MC-252773) Goat Horn without instrument NBT and with other NBT data (such as text) does not play
-   [MC-255545](https://bugs.mojang.com/browse/MC-255545) Magma Cube shadows do not change with size
-   [MC-255811](https://bugs.mojang.com/browse/MC-255811) Level#isRainingAt(BlockPos) always returns false for snowy and frozen biomes, even when it is raining
-   [MC-256292](https://bugs.mojang.com/browse/MC-256292) Goats don't spawn on grass after initial world generation
-   [MC-256555](https://bugs.mojang.com/browse/MC-256555) Camel sits down for a split second when spawned
-   [MC-256576](https://bugs.mojang.com/browse/MC-256576) Players become the controlling passengers of unsaddled camels when mounting them while other players are already riding them
-   [MC-256838](https://bugs.mojang.com/browse/MC-256838) The facing direction of the camel doesn't match
-   [MC-257082](https://bugs.mojang.com/browse/MC-257082) Sprinting whilst riding an entity or flying with elytra changes your field of view
-   [MC-257346](https://bugs.mojang.com/browse/MC-257346) Vexes with empty hand make obscene gesture
-   [MC-257418](https://bugs.mojang.com/browse/MC-257418) Camels sometimes sit down for a split second when receiving damage
-   [MC-257755](https://bugs.mojang.com/browse/MC-257755) Elements within the realms menu are not selected in order when using the TAB key if you're not currently a member of any realm
-   [MC-257875](https://bugs.mojang.com/browse/MC-257875) Fire charges aren't consumed when igniting creepers using them in survival or adventure mode
-   [MC-258163](https://bugs.mojang.com/browse/MC-258163) ClientboundSectionBlocksUpdatePacket serialization breaks after 2^19 block states
-   [MC-258173](https://bugs.mojang.com/browse/MC-258173) Entering an End Portal whilst sleeping causes the bed to be occupied permanently
-   [MC-258246](https://bugs.mojang.com/browse/MC-258246) "Telemetry Data" button is missing an ellipsis
-   [MC-258295](https://bugs.mojang.com/browse/MC-258295) Villager AI broken when workstation is nearby
-   [MC-258430](https://bugs.mojang.com/browse/MC-258430) Camels with large LastPoseTime values offset the player view model strangely
-   [MC-258953](https://bugs.mojang.com/browse/MC-258953) Out of memory screen has raw message in the title

---

