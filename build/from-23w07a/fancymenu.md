# Minecraft Snapshot 23w07a

This week we're bringing you the Sniffer, Archaeology, and the Cherry Blossom biome as experimental features for the 1.20 update.

Changes for the 1.19.4 release include Interaction Entities, and updates to jukeboxes and horse breeding.

Happy brushing!

## Changes

-   Jukeboxes have changed to be at parity with Bedrock
-   Horse breeding has been updated
-   Updated the Realms screen to be more in line with the Singleplayer and Multiplayer screens

### Recipe unlocking

-   The Crafting Table recipe is unlocked immediately on creating a new world
-   The Crossbow recipe is no longer unlocked by sticks
-   The Soul Campfire recipe is no longer unlocked by sticks

### Jukebox

-   While playing a music disc, it will emit a redstone signal of 15
-   Droppers and hoppers can now interact with it

### Horses

-   When breeding horses and the like, the babies' speed, jump height and health are no longer biased toward the average
-   This change is intended to make horse breeding a viable way of getting great horses, if a player starts with good parents and puts in enough time and Golden Carrots

## Technical Changes

-   The vanilla resource pack en;;_;;us language file is now sorted alphanumerically by key
-   A new recipe serializer `crafting_decorated_pot` has been added for the new Decorated Pot recipe
-   Added `show_notification` field to recipes
    -   Accepts a boolean which determines if a notification is shown when unlocking this recipe
    -   defaults to `true` if isn't specified

### Interaction Entities

A new type of entity that records attacks ("left clicks") and interactions ("right clicks"). Interactions are invisible and of a custom size.

Fields:

-   `width`: Width of the entity's bounding box (default `1`)
-   `height`: Height of the entity's bounding box (default `1`)
-   `attack`: Records the last attack action on the entity
-   `interaction`: Records the last interaction action on the entity
-   `response`: Boolean specifying if interacting should trigger a response (arm swing, sound effects, etc - default `false`)

#### Action Format

When an action is stored, it always has two fields:

-   `player`: The UUID (in standard integer array format) of the player performing the action
-   `timestamp`: The timestamp of the game tick when the event happened (stored as a long)

#### Advancement Triggers

-   Interacting with an Interaction entity triggers `player_interacted_with_entity`
-   Attacking an Interaction entity triggers `player_hurt_entity`

#### `execute on` with Interactions

The Interaction entity targets the player who last interacted with it. That makes the following possible:

-   `execute on attacker`: execute as the last player who attacked the entity
-   `execute on target`: execute as the last player who interacted with the entity

## Experimental Features

-   Added Sniffer mob
-   Added a Cherry Grove biome
-   Added Archaeology

### Sniffer

-   Sniffer Mob now available as an experimental feature
    -   The Sniffer is the mob vote winner of Minecraft Live 2022 and the first "ancient" mob added to the game
    -   Sniffers cannot be tempted or tamed
    -   Sniffers are passive friendly mobs
    -   Sniffers sniff in the air and occasionally dig for seeds
-   Torchflower now available as an experimental feature
    -   The Torchflower seed can be planted on farmland and grows into a flower
    -   The seed can be used to breed two Sniffers
    -   The full-grown flower can be harvested and replanted but can also be crafted into a dye

### Cherry Grove biome

-   Added a new Cherry Grove biome, with pretty cherry blossom trees
-   You can find it in the mountains, like Meadows

#### Pink Petals block

-   Added a new Pink Petals block with lots of pink flowers on the ground

#### Cherry Wood Set

-   Added a new Cherry wood set, with all the corresponding wooden things you can make from it. You need to have the Update 1.20 experimental features enabled to see it in game.

### Archaeology

#### The brush

-   The brush is a craftable item you can use to brush things

#### Suspicious Sand

-   Desert Temples and Desert Wells now contain Suspicious Sand. This fragile block is hard to spot and easy to destroy, so be careful!
-   Brushing the Suspicious Sand with a Brush will extract objects that were buried long ago

#### Pottery Shards

-   Pottery Shards have pictures on them
-   They cannot be crafted and are only found by brushing Suspicious Sand

#### Decorated Pots

-   Crafting four Pottery Shards together will create a Decorated Pot with a picture on each side
-   You can also use Brick items instead of Pottery Shards in the Decorated Pot recipe
    -   The sides that were made from Brick items will not have pictures
-   Smash a Decorated Pot with any block-breaking tool to break it apart and get the Pottery Shards back
    -   Or hit it with your fist to pick up the pot without breaking it

## Fixed bugs in Snapshot 23w07a

-   [MC-16533](https://bugs.mojang.com/browse/MC-16533) Horse Breeding never exceeds egg/spawn horse attributes
-   [MC-64522](https://bugs.mojang.com/browse/MC-64522) Server shows as "Old" in server list while starting
-   [MC-84633](https://bugs.mojang.com/browse/MC-84633) Resource packs: ambientocclusion flag only respects topmost parent
-   [MC-134448](https://bugs.mojang.com/browse/MC-134448) Drowned animation glitch
-   [MC-181412](https://bugs.mojang.com/browse/MC-181412) Removing a jukebox with a command while it's playing a music disc won't stop playing the music disc
-   [MC-194080](https://bugs.mojang.com/browse/MC-194080) Elytra model stutters by flying and turning
-   [MC-209409](https://bugs.mojang.com/browse/MC-209409) Sitting cats sink in water
-   [MC-226729](https://bugs.mojang.com/browse/MC-226729) Memory leakage problem in native operations
-   [MC-248249](https://bugs.mojang.com/browse/MC-248249) minecraft:forest;;_;;rock feature does not work correctly when used with /place
-   [MC-256465](https://bugs.mojang.com/browse/MC-256465) Baby camels can enter boats despite adult camels not being able to
-   [MC-257282](https://bugs.mojang.com/browse/MC-257282) Allays sometimes have a several-second delay before deciding to follow the player
-   [MC-258457](https://bugs.mojang.com/browse/MC-258457) Resource Pack won't load if it contains reference to non-existing particles
-   [MC-258459](https://bugs.mojang.com/browse/MC-258459) Invalid forced resource pack can cause infinite reload loop on client
-   [MC-258580](https://bugs.mojang.com/browse/MC-258580) Player is kicked from a server for flying in death screen when dying on a Horse or Camel
-   [MC-258624](https://bugs.mojang.com/browse/MC-258624) The Title Screen Warning menu doesn't disappear after the player respawns
-   [MC-258697](https://bugs.mojang.com/browse/MC-258697) Invalid translation of "translationKey=narration.suggestion" in command block GUI
-   [MC-258902](https://bugs.mojang.com/browse/MC-258902) Opening a lectern on Adventure mode and closing it causes inventory desyncs
-   [MC-258907](https://bugs.mojang.com/browse/MC-258907) Advancement trigger "player;;_;;interacted;;_;;with;;_;;entity" doesn't work with "area;;_;;effect;;_;;cloud" entity when used "glass;;_;;bottle" item on it
-   [MC-259107](https://bugs.mojang.com/browse/MC-259107) Opening the crafting recipe book selects the recipe that appears under the mouse cursor
-   [MC-259218](https://bugs.mojang.com/browse/MC-259218) Onboarding isn't resumed after restarting Minecraft
-   [MC-259240](https://bugs.mojang.com/browse/MC-259240) The game crashes when navigating with arrow keys after changing key binds
-   [MC-259241](https://bugs.mojang.com/browse/MC-259241) Turtles can spawn inside each other causing them to get stuck and play constant sounds
-   [MC-259489](https://bugs.mojang.com/browse/MC-259489) Experimental "disabled items" can still be suggested as fuel by the recipe book
-   [MC-259573](https://bugs.mojang.com/browse/MC-259573) Blast Protection does not reduce explosion knockback in creative game mode
-   [MC-259675](https://bugs.mojang.com/browse/MC-259675) Capes occasionally jitter when moving and adjusting your rotation
-   [MC-259691](https://bugs.mojang.com/browse/MC-259691) Drowned that are swimming render outside of their hitboxes when looking up or down
-   [MC-259729](https://bugs.mojang.com/browse/MC-259729) "Falling Block" can appear in death messages
-   [MC-259796](https://bugs.mojang.com/browse/MC-259796) Creeper does not flash white and expand before exploding
-   [MC-259797](https://bugs.mojang.com/browse/MC-259797) Z-fighting occurs on the bottom of boots
-   [MC-259805](https://bugs.mojang.com/browse/MC-259805) Players cannot dismount when riding item;;_;;display, block;;_;;display and text;;_;;display using the ride command
-   [MC-259808](https://bugs.mojang.com/browse/MC-259808) Allay wing animation skips frames/loops incorrectly as of 23w06a
-   [MC-259816](https://bugs.mojang.com/browse/MC-259816) Odd behavior when an item;;_;;display, block;;_;;display, or text;;_;;display entity mounts another entity
-   [MC-259819](https://bugs.mojang.com/browse/MC-259819) Z-fighting on the text of text displays
-   [MC-259999](https://bugs.mojang.com/browse/MC-259999) Entities mounted on display entities do not visually update until after resync

---

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

We are now releasing snapshot 22w46a for Minecraft 1.19.3 with [playable mob sounds](https://www.minecraft.net/article/playable-mob-sounds-coming-minecraft-1-20) added as an experimental feature, improvements for telemetry data and several technical improvements.

Happy mining!

## New Experimental Features in 22w46a

-   Books in Chiseled Bookshelf can be added or removed from any slot by targeting the specific slot

### Mob Heads on Note Blocks interaction

-   When placing a Mob Head on a Note Block, that Note Block will now play one of the ambient sounds of that mob when played by a player or powered by Redstone

### Piglin Mob Head

-   Piglins will now drop their heads when killed by a charged Creeper
-   Placing the Piglin head on a Note Block will play one of the Piglin's ambient sounds
-   The Piglin head will flap its ears when powered by Redstone, or when worn by a player while walking

## Changes in 22w46a

-   In the Nether dimension Endermen, Skeletons and Wither Skeletons now only spawn at light level 7 and below (instead of 11 and below)
    -   This is intended to nerf certain portal-based mob farms
    -   We welcome feedback on this
-   Added new top textures for Block of Bamboo and Block of Stripped Bamboo
-   Bamboo Plank texture has been tweaked to match the same tiling pattern as other plank variants

### Creative Inventory changes

-   Reordered Redstone tab based on feedback
-   Added Rails to the Tools & Utilities tab next to Minecarts

## Technical Changes in 22w46a

-   Blocks carried by Endermen now use loot tables to generate drops when killed
-   Changes to texture loading and stitching
-   Translation files and `pack.mcmeta` are now including non-ASCII characters (encoded as UTF-8) directly instead of using escape sequences
-   Added new Telemetry Events

### Telemetry

This release includes the WorldUnloaded event, a required event, as well as several opt-in events. Diagnostic tracking is a tool that helps us understand what you like about Minecraft, which allows us to make those things better.

The reason that WorldUnloaded, along with [WorldLoaded](https://www.minecraft.net/en-us/article/minecraft-snapshot-21w38a), is a required event is that the information we’re looking at is, well, required. As a part of Xbox, we all need to follow a standard of practice, you can find a detailed description of it [here](https://privacy.microsoft.com/en-us/privacystatement). The parameters for what data we consider to be critical to our work are set by our team at Mojang Studios in alignment with Xbox.

What we want to find out is how fun you think Minecraft is. There are lots of ways to figure that out, like feedback, playtests, experience, and magic. We want to add data to that mix, which is where WorldLoaded and WorldUnloaded come in. WorldLoaded measures when you boot a session up, and WorldUnloaded measures when you shut it down. Together, they will measure how fun Minecraft is, using metrics such as playtime and the game modes that players choose to play. That’s it. All the data we collect, whether it’s required or opt-in, follows GDPR and CCPA best practices to keep your information safe.

The rest of the current telemetry events are opt-in, which means that you can choose whether or not you want to send us additional data. The only players that can’t opt-in are Microsoft child accounts, but everyone can still send in all of their feedback to [feedback.minecraft.net](http://feedback.minecraft.net/).

Just like all the thoughts and comments we get from you on our feedback site, this is something that greatly helps us improve Minecraft. We want to make a game that you want to play, so we want to know what that game needs. Even if it’s more lava.

#### Telemetry transparency

-   Added Telemetry Data Collection Screen
    -   This screen displays information about the type of data that is sent
    -   The level of data sent can be controlled between "Minimal" and "All"
        -   "Minimal" sends only the required data
        -   "All" sends the required data, as well as optional data
    -   The default data level is "Minimal" (only the required data)
-   Every telemetry event sent from the client is now logged to disk
    -   Old log files are removed after 7 days
    -   These can be found under the `logs/telemetry` directory
        -   A shortcut to this directory is available via the "Open My Data" button on the Telemetry Data Collection screen

#### Required telemetry events

-   Added WorldUnloaded event
-   Removed client Java version from the WorldLoaded event

##### WorldLoaded & WorldUnloaded

Understanding how Minecraft is played allows us to focus game updates and improvements on the areas that are most relevant to players. The data that tells us this includes game mode, client or server modded status, and game version.

WorldLoaded & WorldUnloaded are two paired events that calculate how long the world session has lasted (in seconds and ticks). Data from WorldLoaded is sent when a world is launched, and data from WorldUnloaded is sent when a world is shut down (quitting to title, disconnecting from a server).

#### Optional telemetry events

-   Added PerformanceMetrics and WorldLoadTimes events

##### PerformanceMetrics

Knowing the overall performance profile of Minecraft helps us tune and optimize the game for a wide range of machine specifications and operating systems.

The periodic performance metrics includes data such as frame-rates, rendering performance, memory usage, operating system, and the modded status of the client and server.

Game version is included to help us compare the performance profile for new versions of Minecraft.

##### WorldLoadTimes

It’s important for us to understand how long it takes to join a world, and how that changes over time. For example, when we add new features or do larger technical changes, we need to see what impact that had on load times.

This event includes the total time in milliseconds for the world to load, whether this was a new world, as well as game version and platform details.

### Texture loading changes

-   Context: When the game loads all textures used by block and item models need to be stitched (merged) into a single image, called the "atlas"
    -   Individual textures that are stitched onto the atlas are called "sprites"
-   To improve loading performance, block and item textures are now loaded before they are processed by block and item models
    -   By default, textures not in the `textures/item` and `textures/block` directories will no longer be automatically recognized and will fail to load
-   Resource packs can now have configuration files, located in `atlases` directory, that control which images are included in the atlases

#### Atlas configuration files

-   New directory `atlases` is now present for resource packs
-   This directory contains JSON entries for configuring atlases:
    -   `blocks` - textures used by block and item models
    -   `banner_patterns`, `beds`, `chests`, `shield_patterns`, `shulker_boxes`, `signs` - used to render some special-case models
    -   `mob_effects` - textures used for effect icons in the UI
    -   `paintings` - textures used for paintings
    -   `particles` - textures used for particles (referenced by the `textures` field in files within the `particles` directory)
-   If multiple packs include those files, they are merged by their order within the pack (same as tags in data packs)
-   Inside these files is a JSON object with a single list called `sources`
    -   Every entry in `sources` runs in during load, in order of definition, adding or removing new files to the texture list; to be later referenced by block models, particles, etc
-   Types of sources:
    -   `directory` - lists all files in a directory and its subdirectories, across all namespaces
        -   `source` - directory in pack to be listed (relative to `textures` directory)
        -   `prefix` - string to be appended to the sprite name when loaded
    -   `single` - adds a single file
        -   `resource` - location of a resource within the pack (relative to `textures` directory, implied `.png` extension)
        -   `sprite` - sprite name (optional, defaults to `resource`)
    -   `filter` - removes sprites matching the given pattern
        -   `namespace`, `path` - patterns (regular expressions, regex) of ids to be removed (only works for entries already in the list)
            -   If omitted, any value will be matched
    -   `unstitch` - copies rectangular regions from other images
        -   `resource` - location of a resource within the pack (relative to `textures` directory, implied `.png` extension)
        -   `divisor_x`, `divisor_y` - used for determining the units used by regions
        -   `regions` - list of regions to copy from the source image
            -   `sprite` - sprite name
            -   `x`, `y` - coordinates of the top-left corner of the region
            -   `width`, `height` - size of the region
        -   Values such as `x` are transformed to real image coordinates via dividing by their divisor, and then multiplying by the real image size
-   Example: if a pack has a file named `assets/test/textures/fancy/iridium.png` and source is `{"type": "directory", "source": "fancy", "prefix": "custom/"}`, the texture will be available in models as `test:custom/iridium`

### Commands

-   New command: `fillbiome`
-   New execute sub-command: `execute if|unless biome`

#### `fillbiome`

Changes biome entries for an area. Note that biomes are not stored per-block, so affected positions may not match input precisely.

Syntax:

`fillbiome <from> <to> <biome>`

Parameters:

-   `from`: One corner of the area to fill
-   `to`: The other corner of the area to fill
-   `biome`: The biome to set

#### `execute`

Execute commands can now be conditional on biomes.

Syntax:

`execute if|unless biome <pos> <biome>`

## Fixed bugs in 22w46a

-   [MC-121865](https://bugs.mojang.com/browse/MC-121865) High potion effect durations being displayed as **:** is misleading
-   [MC-147605](https://bugs.mojang.com/browse/MC-147605) Text cursors can exist in multiple fields
-   [MC-151412](https://bugs.mojang.com/browse/MC-151412) "Edit Server Info" window does not focus "Server Name" text field automatically
-   [MC-187539](https://bugs.mojang.com/browse/MC-187539) "tick" function tag runs before "load" instead of the other way around
-   [MC-205563](https://bugs.mojang.com/browse/MC-205563) Endermen holding powder snow drop a powder snow bucket when killed
-   [MC-209621](https://bugs.mojang.com/browse/MC-209621) Endermen holding potted plants do not drop the pot nor the plant
-   [MC-221722](https://bugs.mojang.com/browse/MC-221722) Squids use the new texture when using Programmer Art
-   [MC-222099](https://bugs.mojang.com/browse/MC-222099) Endermen holding candle cakes do not drop the candle or the cake upon being killed
-   [MC-233042](https://bugs.mojang.com/browse/MC-233042) Server Address field isn't focused when Direct Connection menu is opened
-   [MC-234029](https://bugs.mojang.com/browse/MC-234029) You cannot hold any key to rapidly navigate between elements quickly after opening the inventory
-   [MC-234161](https://bugs.mojang.com/browse/MC-234161) You cannot hold the TAB key to navigate between buttons quickly in the "Optimize World" menu
-   [MC-234240](https://bugs.mojang.com/browse/MC-234240) You cannot hold the TAB key to navigate between buttons quickly in the "Superflat Customization" menu
-   [MC-234408](https://bugs.mojang.com/browse/MC-234408) You cannot hold the TAB key to navigate between buttons quickly in the "Reset world" realms menu
-   [MC-234409](https://bugs.mojang.com/browse/MC-234409) You cannot hold any key to rapidly execute the same function in the "World options" realms menu
-   [MC-234572](https://bugs.mojang.com/browse/MC-234572) You cannot hold the TAB key to navigate between buttons quickly in the "Delete Server" menu
-   [MC-234621](https://bugs.mojang.com/browse/MC-234621) You cannot hold the TAB key to navigate between buttons quickly in the "remove player" realms menu
-   [MC-234782](https://bugs.mojang.com/browse/MC-234782) You cannot hold the TAB key to navigate between buttons quickly in the "Close realm" realms menu
-   [MC-234846](https://bugs.mojang.com/browse/MC-234846) You cannot hold the TAB key to navigate between buttons quickly in the "switch world" realms menu
-   [MC-234904](https://bugs.mojang.com/browse/MC-234904) You cannot hold the TAB key to navigate between buttons quickly in the "Data Packs" menu
-   [MC-248926](https://bugs.mojang.com/browse/MC-248926) Setting "spectatorsGenerateChunks" to false and relogging freezes the game on the Loading Terrain screen
-   [MC-249059](https://bugs.mojang.com/browse/MC-249059) Loading terrain screen cannot close before 2 seconds have passed
-   [MC-250262](https://bugs.mojang.com/browse/MC-250262) Players sometimes get stuck on the "Loading terrain..." screen after switching dimensions whilst dead
-   [MC-256308](https://bugs.mojang.com/browse/MC-256308) "limit" selector parameter with "arbitrary" sorting does not stop searching early
-   [MC-256472](https://bugs.mojang.com/browse/MC-256472) Camels aren't required for the "Two by Two" advancement
-   [MC-256509](https://bugs.mojang.com/browse/MC-256509) Heads and Skulls are placed backwards
-   [MC-256510](https://bugs.mojang.com/browse/MC-256510) Using a glow ink sac on a hanging sign does not grant the advancement "Glow and Behold!"
-   [MC-256669](https://bugs.mojang.com/browse/MC-256669) Crafting recipe for bamboo hanging signs is unlocked by having any stripped log
-   [MC-256878](https://bugs.mojang.com/browse/MC-256878) You cannot hold the TAB key to navigate between buttons quickly in the "Edit draft chat report" menu
-   [MC-256882](https://bugs.mojang.com/browse/MC-256882) Bats fly in the perched position and vertical movement is not smooth
-   [MC-256935](https://bugs.mojang.com/browse/MC-256935) Long player names within the "Select Chat Messages to Report" menu can extend past the scroll bar
-   [MC-256993](https://bugs.mojang.com/browse/MC-256993) End crystal knockback bug
-   [MC-257073](https://bugs.mojang.com/browse/MC-257073) You cannot hold the TAB key to navigate between buttons quickly in the "Experimental Features Warning" menu
-   [MC-257105](https://bugs.mojang.com/browse/MC-257105) The walking animation of frogs and camels doesn't play when they are moving slowly
-   [MC-257113](https://bugs.mojang.com/browse/MC-257113) Ender dragon, wither, snow golem and iron golem spawn eggs from before 1.13 do not convert properly
-   [MC-257114](https://bugs.mojang.com/browse/MC-257114) Incoherency: A random seed is already generated on the "Create New World" seed text field screen despite the "Leave blank for a random seed" label
-   [MC-257188](https://bugs.mojang.com/browse/MC-257188) You aren't prompted that your draft reports will be discarded upon disconnecting from worlds by using the "Title Screen" button within the death screen
-   [MC-257266](https://bugs.mojang.com/browse/MC-257266) Entities sink or fall through snow when it accumulates while the "snowAccumulationHeight" gamerule is set to any value greater than 1
-   [MC-257329](https://bugs.mojang.com/browse/MC-257329) Right-hand side tabs in the creative inventory are misaligned
-   [MC-257334](https://bugs.mojang.com/browse/MC-257334) Stacked items do not show creative inventory tab label
-   [MC-257354](https://bugs.mojang.com/browse/MC-257354) Messages sent by the hosts of LAN worlds are now considered unverified and cannot be reported
-   [MC-257355](https://bugs.mojang.com/browse/MC-257355) The "Social Interactions" menu now falsely claims that there are no reportable messages for given players
-   [MC-257378](https://bugs.mojang.com/browse/MC-257378) Villagers and piglins can't open or close doors
-   [MC-257386](https://bugs.mojang.com/browse/MC-257386) Inventory menu has broken textures with Programmer Art enabled
-   [MC-257401](https://bugs.mojang.com/browse/MC-257401) Frog walk animation speeds up greatly when tempted by food or chasing slimes
-   [MC-257410](https://bugs.mojang.com/browse/MC-257410) "Game Menu" on the pause menu is clickable

---

Minecraft Snapshot 22w45a is now out and about. This snapshot introduces the [new default skins](https://www.minecraft.net/article/introducing-new-default-skins) for offline players, bamboo blocks, and a visual refresh for the Vex. On top of that, there’s some additional creative inventory tweaks.

Happy mining!

## New Features in 22w45a

-   Added new default skins for offline players
-   Added Block of Bamboo and Stripped Block of Bamboo
    -   Block of Bamboo can be crafted from 9 Bamboo and can be stripped like other wood logs
    -   Bamboo Planks crafted from Block of Bamboo yield only 2 planks compared to 4 for wood logs

## Changes in 22w45a

-   The Vex now has a new look
-   The Wild update music has been tweaked to be slightly less loud
-   When opening, Shulker Boxes will pop off blocks which are attached to opened faces (such as Torches)
    -   Blocks that require support cannot be placed on these open faces while the Shulker Box is open
-   "Teleport to Team Member" option in spectator menu now only shows up for teams with viable target players
-   Added Operator Items Tab option in the Controls menu which is off by default
-   Creative Inventory changes

### Vex

-   Changes to Vex model and textures
    -   The Vex retains a slightly oversized hitbox to make it easier to fight

### Creative Inventory changes

-   Operator-only items now appear in a new Operator Utilities tab if you have both:
    -   Operator Items Tab option in Controls menu set to `ON`
    -   The required operator permissions
    -   The tab is hidden if operator permissions are lost while inventory is open
    -   Now also includes Structure Blocks and all light levels of Light Blocks
-   Added a Colored Blocks tab
    -   Contains all blocks with 16 color variants
    -   Moved all colored blocks from Building Blocks tab to this tab instead to make that tab less sizeable
-   Consumables tab has been renamed to Food & Drinks tab to have a more straightforward name
-   Crafting tab has been renamed to Ingredients tab since not all items are used in crafting
-   Reordered
    -   Natural Blocks
        -   More consistency between types for the top section
        -   Moved eggs to be between seeds and single-block plants
        -   Placed climbable plants above double-block plants
    -   Food & Drinks
        -   Cooked versions of raw food are now right next to each other
    -   Redstone Blocks
        -   Less cluttered
        -   Higher importance items up the top
        -   Removed variants of Doors, Trapdoors, Buttons and Boats that don't have any functional difference
    -   Ingredients
        -   Placed Lapis in the same order as ore blocks
-   Moved
    -   Bottle o' Experience from the Tools & Utilities tab to the Ingredients tab next to enchanting books
-   Added
    -   All axes to the Combat tab (they still remain in the Tools & Utilities tab as well)
    -   All possible Suspicious Stews to the Consumables tab
        -   The tooltip will show the effect of a stew before it's picked up from the Creative Inventory
        -   Only stews with effects available via crafting or Mooshrooms are listed
    -   Pressure Plates and Buttons of each type to the Building Blocks tab
    -   Almost all lighting blocks to the top of the Functional Blocks tab
    -   All 3 flight durations of Fireworks to Tools & Utilities tab, and the Combat tab next to Crossbow
    -   Eye of Ender next to End Portal Frame block in Functional tab for better ease of use
-   Tooltips for all items in Creative Menu outside single-category tabs will show categories where this item can be found
    -   Previously this only happened on the search tab

## Technical Changes in 22w45a

-   The `/publish` command has new arguments to enable commands and set the default gamemode
    -   New syntax: `/publish [allowCommands] [gamemode] [port]`
-   Changes to the Open to LAN screen
    -   The screen now allows selecting the port on which to host the LAN world
    -   The game mode and allow cheats buttons are now initialized with the default values of the world
-   The Resource Pack version is now 12

## Fixed bugs in 22w45a

-   [MC-80032](https://bugs.mojang.com/browse/MC-80032) Horses can suffocate when going through nether portals
-   [MC-118140](https://bugs.mojang.com/browse/MC-118140) Result map tooltip when zooming out a map shows previous zoom value instead of new one
-   [MC-127110](https://bugs.mojang.com/browse/MC-127110) You can't empty water buckets into waterlogged blocks
-   [MC-177523](https://bugs.mojang.com/browse/MC-177523) Enderman angry/screaming sound event subtitled identically to idle sound
-   [MC-193360](https://bugs.mojang.com/browse/MC-193360) Inconsistent eye level between piglins or zombified piglins and piglin brutes
-   [MC-200000](https://bugs.mojang.com/browse/MC-200000) Merchant trade select packet (C2S) does not check for negative indices
-   [MC-235414](https://bugs.mojang.com/browse/MC-235414) Player desynchronization with Nether Portals
-   [MC-244550](https://bugs.mojang.com/browse/MC-244550) Empty Tags match Empty Slots in Shaped Recipes
-   [MC-255370](https://bugs.mojang.com/browse/MC-255370) Chat hover & click events are offset if "Line Spacing" chat setting is used
-   [MC-255743](https://bugs.mojang.com/browse/MC-255743) Bees' path finding system may cause performance issues
-   [MC-256461](https://bugs.mojang.com/browse/MC-256461) Camel's back of neck is visible during the sit down animation
-   [MC-256511](https://bugs.mojang.com/browse/MC-256511) Non-controlling passengers can make camels dash
-   [MC-256516](https://bugs.mojang.com/browse/MC-256516) Inconsistent textures with jungle hanging signs
-   [MC-256532](https://bugs.mojang.com/browse/MC-256532) Sounds for Bamboo, Crimson and Warped hanging signs use the generic wood sound
-   [MC-256616](https://bugs.mojang.com/browse/MC-256616) Weighted pressure plates make incorrect sounds
-   [MC-256674](https://bugs.mojang.com/browse/MC-256674) FileAlreadyExistsException if the resourcepacks directory is a symbolic link
-   [MC-256765](https://bugs.mojang.com/browse/MC-256765) References to chat reporting in singleplayer
-   [MC-256854](https://bugs.mojang.com/browse/MC-256854) Error in any model file causes resource reload fail now
-   [MC-256884](https://bugs.mojang.com/browse/MC-256884) Mobs don't shoot correctly from crossbows
-   [MC-256885](https://bugs.mojang.com/browse/MC-256885) The word "messages" within the "gui.chatSelection.fold" string is always pluralized
-   [MC-256888](https://bugs.mojang.com/browse/MC-256888) New network protocols prevent logging into offline servers
-   [MC-256903](https://bugs.mojang.com/browse/MC-256903) Lodestone compass's enchantment glint is scaled incorrectly
-   [MC-256917](https://bugs.mojang.com/browse/MC-256917) Death message from explosions by TNT and TNT minecarts that are not the cause of a player or another mob has changed
-   [MC-256951](https://bugs.mojang.com/browse/MC-256951) TNT Minecarts don't record what caused its explosion
-   [MC-256961](https://bugs.mojang.com/browse/MC-256961) Multishot shoots projectiles backwards
-   [MC-256990](https://bugs.mojang.com/browse/MC-256990) Superflat Worlds can use Disabled Blocks as part of their layers
-   [MC-257102](https://bugs.mojang.com/browse/MC-257102) Missing Structure Block in creative tab
-   [MC-257104](https://bugs.mojang.com/browse/MC-257104) "Lava" in gamerule.lavaSourceConversion is misspelled as "Lave"
-   [MC-257118](https://bugs.mojang.com/browse/MC-257118) Buttons are placed different than pressure plates in Creative Inventory
-   [MC-257234](https://bugs.mojang.com/browse/MC-257234) Applying bone meal to warped or crimson fungus crashes client on multiplayer

---

Another Wednesday, another snapshot. This week's snapshot introduces a few new game rules and a few gameplay changes which include another round of inventory tweaks. As usual, there are a few bugfixes as well.

Happy Mining!

## Changes in 22w44a

-   Bamboo Mosaic can now be used as fuel
-   Chiseled Bookshelves now works with Hoppers
-   More changes to the Creative Inventory
-   Monster Spawner changes
-   Spawn Egg changes
-   Step sound changes

### Creative Inventory changes

A (hopefully) final round of changes have been made to the Creative Tab orderings to address feedback:

-   Operator-only blocks and items can now be found in the Redstone Blocks tab if you have the required permissions
-   Functional Blocks
    -   Added:
        -   Tinted Glass
        -   Bee Nest
    -   Moved Respawn Anchor before Beds
    -   Reordered Pressure Plates by functionality
    -   Moved End Portal Frame & Infested blocks into this tab from Natural Blocks tab
-   Redstone Blocks
    -   Added:
        -   Chest
        -   Barrel
        -   Cauldron
        -   Furnace
        -   Composter
-   Building Blocks
    -   Added:
        -   Chain
        -   Block of Amethyst
    -   Moved Block of Redstone and Block of Coal into this tab from Natural Blocks tab
-   Crafting
    -   Added:
        -   Ancient Debris
-   Reordered the following tabs for better consistency
    -   Building Blocks
    -   Natural Blocks
    -   Consumables
-   Reordered ore materials and blocks to be more consistent across tabs

### Monster Spawners

-   Spawners no longer have a default mob spawn type when placed by a player (previously was the Pig)
-   Will not emit fire particles when a mob spawn type has not been defined
-   Renamed to Monster Spawner to match Bedrock, and removed purple text color
-   Pick-block now works for Spawner blocks
-   The mob type is now displayed in the hover description of a Spawner item stack
    -   If a mob type has not been defined yet, the hover description will describe how to set it

### Spawn Eggs

-   Added new Spawn Egg items for Ender Dragon, Iron Golem, Snow Golem and Wither mobs to Creative mode
    -   Ender Dragon and Wither Spawn Eggs will only be available through commands to prevent accidental destruction of player builds
-   Polar Bear Spawn Egg colors have changed to distinguish it from the Ghast Spawn Egg

### Sounds

-   Step sounds can now be heard when walking on:
    -   Carpets
    -   Lily Pads
    -   Small Amethyst Buds
-   Step sounds can now be heard when walking through:
    -   Nether Sprouts
    -   Glow Lichen
    -   Crimson Roots
    -   Warped Roots

## Technical Changes in 22w44a

-   Added new game rules

### Game Rules

-   Added `blockExplosionDropDecay`, `mobExplosionDropDecay` and `tntExplosionDropDecay` game rules
    -   When set to `false`, all blocks drop loot
    -   When set to `true`, blocks drop loot randomly depending on how far from the explosion center
    -   Defaults to `false` for TNT, `true` for block and mob
-   Added `snowAccumulationHeight` game rule
    -   When it is snowing, this game rule determines the maximum number of Sniow Layers that can be accumulated in each block
    -   Defaults to `1`
    -   Set to `0` makes no Snow form at all
    -   Set to `8` or above lets Snow form up to the level of a full block
-   Added `waterSourceConversion` and `lavaSourceConversion` game rules
    -   When set to `true`, allows new sources of that fluid to form
    -   Defaults to `true` for Water and `false` for lava
-   Added `globalSoundEvents` game rule, controlling whether certain gameplay moments are heard by all players regardless of location
    -   Defaults to `true`

## Fixed bugs in 22w44

-   [MC-30403](https://bugs.mojang.com/browse/MC-30403) Sprinting isn't canceled when dismounting rideable entities while sprinting
-   [MC-137136](https://bugs.mojang.com/browse/MC-137136) Lily Pads use incorrect sound
-   [MC-137306](https://bugs.mojang.com/browse/MC-137306) Turtles don't have breeding delay
-   [MC-191790](https://bugs.mojang.com/browse/MC-191790) Re-creating a world doesn't allow a blank seed and uses recreated world's seed instead of random
-   [MC-195780](https://bugs.mojang.com/browse/MC-195780) "Data mode" and "Load mode" aren't capitalized while "Save Mode" and "Corner Mode" are
-   [MC-244721](https://bugs.mojang.com/browse/MC-244721) "Erase cached data" is not capitalized
-   [MC-253387](https://bugs.mojang.com/browse/MC-253387) Frog walking animation is slowed down when applied with slow falling
-   [MC-254435](https://bugs.mojang.com/browse/MC-254435) Neither the secure chat warning toast nor the chat preview warning screen is presented to the player when joining a server using the --server argument
-   [MC-255115](https://bugs.mojang.com/browse/MC-255115) Lily pads do not produce sounds when walking on them
-   [MC-256463](https://bugs.mojang.com/browse/MC-256463) Camels will not pathfind over 1.5 high blocks
-   [MC-256480](https://bugs.mojang.com/browse/MC-256480) Non Flammable Wood Item tag contains 1.20 content even when disabled
-   [MC-256526](https://bugs.mojang.com/browse/MC-256526) Bamboo Fence Gate has missing textures / culling issues
-   [MC-256606](https://bugs.mojang.com/browse/MC-256606) Camel walking animation is slowed down when applied with slow falling
-   [MC-256623](https://bugs.mojang.com/browse/MC-256623) Bamboo mosaic slabs aren't flammable
-   [MC-256637](https://bugs.mojang.com/browse/MC-256637) Some bamboo blocks can't be used as furnace fuel
-   [MC-256647](https://bugs.mojang.com/browse/MC-256647) Mobs face south even with a given rotation value
-   [MC-256768](https://bugs.mojang.com/browse/MC-256768) Entities no longer have random rotations upon being summoned from spawn eggs
-   [MC-256879](https://bugs.mojang.com/browse/MC-256879) Weighted pressure plates are placed wrong in creative inventory
-   [MC-256881](https://bugs.mojang.com/browse/MC-256881) The game crashes when pressing the ESC key while having draft chat reports saved
-   [MC-256887](https://bugs.mojang.com/browse/MC-256887) Tinted glass is not considered a 'Functional Block'
-   [MC-256934](https://bugs.mojang.com/browse/MC-256934) You aren't prompted to save your chat reports as drafts while only having report categories inputted
-   [MC-257058](https://bugs.mojang.com/browse/MC-257058) Cactus is not grouped with sugar cane in Creative inventory
-   [MC-257059](https://bugs.mojang.com/browse/MC-257059) Mushroom stem comes after nether fungus stems in Creative inventory, but mushroom blocks come before wart blocks
-   [MC-257060](https://bugs.mojang.com/browse/MC-257060) Bee nest is absent from Functional Blocks

---

Did you know that Camels walk by lifting both legs on one side at the same time? Yes, in snapshot 22w43a, Minecraft knows too! This snapshot also contains another round of tweaks to the Creative Inventory.

Happy Mining!

## Changes in 22w43a

-   Changed the colours of the Camel Spawn Egg
-   Tweaked Camel walk cycle animation
-   Fence Gates no longer provide center support beneath them
-   The Chat Reporting screen now shows when the player being reported rejoined chat
-   More Changes to the Creative Inventory
-   Added Draft Player Reports

### More Changes to the Creative Inventory

A lot of feedback has come pouring in as a result of the creative inventory ordering changes.

#### Changes

-   Change the icons of creative tabs for better color coding as well as show most iconic visuals
-   Nature Blocks tab has been renamed to Natural Blocks
-   Moved dirts and stones to top of Natural Blocks tab which was a big ask from many people (saying they use many of those blocks more than flowers etc)
-   Fixed Water Bottles not populating in the Consumables tab
-   Reordered Quartz so Smooth Quartz is a separate section of blocks
-   Climbable plant blocks are now together in the Natural Blocks tab
-   Fixed order of Waxed Copper blocks
-   Fixed order of Coral Blocks to be consistent
-   Made sure Netherrack was next to Nylium in Natural Blocks tab
-   Reordered equipment so golden tools and weapons were in a logical order
-   Moved normal Rails to be before special Rails
-   Order colored blocks by their gradient (Wool, Terracotta, Candles, Banners, Stained Glass, etc)
-   Moved Signs up higher in the Functional Blocks tab as it is used quite often by players
-   Basalt blocks are now found after Nether Brick blocks in the Building Blocks tab, next to Blackstone
-   Generally reordered the plants of the Natural Blocks tab

#### Additions

-   Added to Redstone Blocks tab
    -   Boat with Chests
    -   Bell
    -   Big Dripleaf
    -   White Wool next to Sculk Sensor
    -   String next to Tripwire Hook
    -   Redstone Ores
    -   Chiselled Bookshelf
-   Added to Consumables tab
    -   Milk Buckets
-   Added to Functional Blocks tab
    -   Ominous Banner
    -   Dragon Egg
    -   Lectern
    -   Lightning Rod
    -   Note Block
-   Added to Crafting tab
    -   Snowball
-   Added to Spawn Eggs tab
    -   Spawner
-   Added to Combat tab
    -   TNT
    -   End Crystal
-   Added to Tools & Utilities tab
    -   Bone Meal

### Added Draft Player Reports

Player Reports can now be kept temporarily as a draft while connected to a server.

-   When exiting the Player Reporting screen, the report can be either discarded or kept as a draft
    -   The draft will always be kept if the screen was forcefully closed (e.g. player dying)
-   Draft reports are kept until the player leaves the current server or world
    -   When leaving, the player will be prompted to either discard or finish and send the report

## Technical Changes in 22w43a

-   Migrated linear algebra types to Java OpenGL Math Library (JOML)

### Network Protocol

-   Servers can now lazily distribute players' profile public keys along with their first chat packet
-   Profile public keys will now be refreshed without reconnecting
-   Clients now reset their chat session on receiving a login packet

## Fixed Bugs in 22w43a

-   [MC-84873](https://bugs.mojang.com/browse/MC-84873) DeathTime values 20+ cause corrupted mobs
-   [MC-92017](https://bugs.mojang.com/browse/MC-92017) Shield damage direction is incorrect
-   [MC-128003](https://bugs.mojang.com/browse/MC-128003) When destroying one block of tall seagrass, the other block becomes air when destroyed, rather than water
-   [MC-188247](https://bugs.mojang.com/browse/MC-188247) Explosions from end crystals can't be blocked by shields
-   [MC-188506](https://bugs.mojang.com/browse/MC-188506) AngryAt cannot be manually applied to endermen
-   [MC-189911](https://bugs.mojang.com/browse/MC-189911) Splash water bottles don't extinguish mobs and player
-   [MC-191948](https://bugs.mojang.com/browse/MC-191948) Ghast fireballs explosions still inflict damage when blocked by a shield
-   [MC-198493](https://bugs.mojang.com/browse/MC-198493) Villagers lose their discounts when relogging while it is a zombie villager
-   [MC-200006](https://bugs.mojang.com/browse/MC-200006) Explosions from beds and respawn anchors can't be blocked by shields
-   [MC-202513](https://bugs.mojang.com/browse/MC-202513) Weeping vines and twisting vines are not grouped with regular vines in creative inventory
-   [MC-222407](https://bugs.mojang.com/browse/MC-222407) Endermen holding big dripleaf stems don't drop big dripleaves upon being killed
-   [MC-244694](https://bugs.mojang.com/browse/MC-244694) The sounds of goats stomping and ramming aren't controlled by the "Friendly Creatures" sound slider
-   [MC-249691](https://bugs.mojang.com/browse/MC-249691) Nylium is not grouped with netherrack in the Creative inventory
-   [MC-252214](https://bugs.mojang.com/browse/MC-252214) Going into water does not extinguish the fire on you if you're in a boat
-   [MC-253542](https://bugs.mojang.com/browse/MC-253542) Spawner blocks with SpawnPotential and no SpawnData will crash during worldgen
-   [MC-254597](https://bugs.mojang.com/browse/MC-254597) Mobs hurt by water don't take water damage when they are on a boat
-   [MC-254634](https://bugs.mojang.com/browse/MC-254634) POIs are not created properly when upgrading worlds
-   [MC-256462](https://bugs.mojang.com/browse/MC-256462) If camel is sitting while exiting and reloading the world, it will play the sitting animation again
-   [MC-256476](https://bugs.mojang.com/browse/MC-256476) Panorama Scroll Speed isn't saved
-   [MC-256483](https://bugs.mojang.com/browse/MC-256483) Acacia hanging signs cannot be crafted
-   [MC-256494](https://bugs.mojang.com/browse/MC-256494) Birch hanging signs cannot be crafted
-   [MC-256495](https://bugs.mojang.com/browse/MC-256495) Z-fighting occurs when the legs of camels intersect one another
-   [MC-256502](https://bugs.mojang.com/browse/MC-256502) Crash when pressing certain buttons while on spectator mode
-   [MC-256515](https://bugs.mojang.com/browse/MC-256515) Hanging signs connect weirdly on the bottom of a fence gate.
-   [MC-256522](https://bugs.mojang.com/browse/MC-256522) Coral Blocks are sorted different than Corals and Coral Fans
-   [MC-256534](https://bugs.mojang.com/browse/MC-256534) Saved hotbars can import disabled items
-   [MC-256573](https://bugs.mojang.com/browse/MC-256573) Water bottles, awkward/mundane/thick potions and tipped arrows don't appear in the Creative Inventory
-   [MC-256575](https://bugs.mojang.com/browse/MC-256575) Some of the translation keys were merged, resulting in some language translation errors
-   [MC-256581](https://bugs.mojang.com/browse/MC-256581) Lightning Rod isn't in Functional Blocks tab in creative inventory
-   [MC-256582](https://bugs.mojang.com/browse/MC-256582) Lectern isn't in Functional Blocks tab in creative inventory
-   [MC-256612](https://bugs.mojang.com/browse/MC-256612) Waxed Exposed Copper blocks are out of order in Building Blocks creative tab
-   [MC-256639](https://bugs.mojang.com/browse/MC-256639) Allays, Piglins, and Villagers lose inventory if unloaded and reloaded
-   [MC-256661](https://bugs.mojang.com/browse/MC-256661) Line spacing on Hanging Signs is too small, causing certain characters to overlap
-   [MC-256705](https://bugs.mojang.com/browse/MC-256705) Discrepancy exists between identifier-allowed characters and path segment-allowed characters
-   [MC-256734](https://bugs.mojang.com/browse/MC-256734) Entities will often spin while pathfinding on top of wall hanging signs
-   [MC-256843](https://bugs.mojang.com/browse/MC-256843) Milk Bucket isn't in the Consumable Tab in the creative inventory
-   [MC-256845](https://bugs.mojang.com/browse/MC-256845) Nether Wart isn't in the Nature Blocks tab in the creative inventory
-   [MC-256846](https://bugs.mojang.com/browse/MC-256846) Chiseled Bookshelf isn't in the Redstone Blocks Tab in the creative inventory
-   [MC-256847](https://bugs.mojang.com/browse/MC-256847) Bone Meal isn't in the Tools & Utilities Tab in the creative inventory
-   [MC-256848](https://bugs.mojang.com/browse/MC-256848) String isn't in the Redstone Blocks Tab in the creative inventory

---

Hello there! We are now releasing the first snapshot for 1.19.3! You might have been thinking that this snapshot would be for 1.20, but times are changing. Going forward, we are taking a bit of a different approach to how we release minor and major versions for Minecraft: Java Edition. Essentially, we will be releasing minor versions more often. You can find out more details about this in a post over [here](https://help.minecraft.net/hc/articles/9971900758413).

In this snapshot we’re introducing feature toggle, which you might have seen in [a post we released yesterday](https://www.minecraft.net/en-us/article/testing-new-minecraft-features/feature-toggles-java-edition). This means we can add a toggle for Update 1.20 with features such as the Camel, without committing to releasing them in version 1.19.3. This lets us have experimental features available for testing, while still being able to release updates with new functionality, changes, and improvements, without having to remove those features from the game first.

In this snapshot you’ll be seeing [the features that we talked about during Minecraft Live](https://www.minecraft.net/article/minecraft-live-2022-the-recap) as experimental features, a few changes to chat, some technical changes and many bug fixes.

## New Features in 22w42a

-   Some experimental features are now available through built-in experimental datapacks
-   Bundles are now available as an experimental feature
-   Added a new "Panorama Scroll Speed" accessibility option

### Experimental Features

-   Some experimental features now need to be enabled to appear in worlds
-   Such features are enabled by adding a built-in datapack when creating a world
-   Feature toggles are meant to hide unfinished or experimental features, to make sure your existing worlds remain unaffected
-   Worlds that are using experimental features will be marked as "Experimental" in world selection list
-   Experimental features cannot be toggled for existing worlds

#### Added Camel

Camels are now available when Update 1.20 experimental features are enabled.

-   Camels can be equipped with a saddle and ridden by two players
-   Camels spawn naturally in Desert Villages
-   Camels are tall
    -   Most hostile mobs will not be able to reach you when you are on a Camel
    -   They can walk over fences without a sweat
-   Camels are very graceful, but grumpy mobs
    -   They randomly sit down
    -   While sitting, it is difficult to convince them to move
-   Camels can either walk slowly or sprint quickly
-   They can also dash forward but will lose stamina for a while when doing so

#### Bamboo Wood Set

A new set of Bamboo wood blocks are now available when Update 1.20 experimental features are enabled.

-   New wood blocks
    -   Bamboo Planks
    -   Bamboo Door
    -   Bamboo Trapdoor
    -   Bamboo Sign
    -   Bamboo Stairs
    -   Bamboo Slab
    -   Bamboo Fence
    -   Bamboo Fence Gate
    -   Bamboo Button
    -   Bamboo Pressure Plate
-   Bamboo Planks can be crafted with 2x2 Bamboo items
-   Added a new "Mosaic" plank variant that is unique to Bamboo called Bamboo Mosaic
    -   It can be crafted with 1x2 Bamboo Slabs in a vertical strip
    -   You can craft Stair and Slab variants of Bamboo Mosaic
-   Added a unique Bamboo Raft and Bamboo Chest Raft which can be crafted like normal boats, but with Bamboo Planks
    -   They function the same as ordinary boats, but have a unique look to them

#### Chiseled Bookshelf

A new, chiseled variation of the Bookshelf is now available when Update 1.20 experimental features are enabled.

-   Crafted with 6 planks and 3 wooden slabs
-   Can store Books, Book and Quills, Written Books, and Enchanted Books
    -   Holds up to 6 books
    -   Keeps the stories and lore of your world safe
-   Comparators can detect the last book placed/removed
    -   Perfect for hiding secrets in your spooky library

#### Hanging Signs

Ever wanted to hang up your signs? Fetch a few chains, strip some logs, and now you can! Hanging signs are now available when Update 1.20 experimental features are enabled.

-   Hanging Signs are a more expensive version of normal Signs
    -   Crafted with 2 chains and 6 stripped logs of your preferred wood type
    -   Crafting results in 6 Hanging Signs
-   Can be hung up in the following ways:
    -   Underneath a block that can provide support in the center, like a full block or a fence
    -   Attached to the solid side of a block
    -   Attached to the side or underneath another Hanging Sign
-   Unlike normal Signs, they cannot be placed directly on the ground without support from the side or above
    -   However, Hanging Signs that have a horizontal bar will not pop when the supporting block is removed

### Sounds

-   Various wood types now have unique sounds when placed, broken, or walked on
    -   There are three sets of unique sounds: Overworld wood types, Nether wood types, and Bamboo

## Changes in 22w42a

-   Reworked the Creative Inventory tabs
-   Changes to chat
-   The Realms News button will now show a confirmation screen before opening the link
-   Stronghold placement code has been changed to be more efficient, causing stronghold positions to shift
    -   They are still placed in concentric rings, but their positions in the rings may change by a few degrees

### Creative Inventory

The ordering of tabs and the contents in the Creative Inventory have been tweaked to make the experience of finding relevant blocks and items easier.

-   Blocks and items have been moved into categories that fit them better
-   Blocks are now ordered by their material as much as possible
    -   For example, all Oak blocks and variants are now next to each other
-   Some items can now be found in more than one tab
-   Various tabs have been renamed or collapsed into others
-   The search tab now lists items sequentially grouped by the other tabs
    -   For example, items found in Building Blocks will always appear before items in Redstone Blocks
-   Petrified Oak Slab has been removed from the Creative Inventory
    -   It can still be accessed through commands
-   This is a first iteration to bring a better experience to the Creative Inventory, and we will look closely at the feedback for these changes to iterate as needed

### Chat

-   Removed Chat Preview
-   Chat messages deleted by server moderators will no longer be completely hidden, but rather replaced with text stating "This chat message has been deleted by the server."
-   Deleted chat messages will now be displayed in the chat window for at least 3 total seconds before being hidden
-   The Chat Trust Status indicators have been tweaked:
    -   The 'Modified' tag will no longer display for server-modified messages where only style has been changed
    -   The 'Modified' tag icon and indicator is now dark gray
    -   The 'Not Secure' tag is now light gray and does not have an icon
-   Partially filtered chat messages now show the filtered text as gray hashes with a hover text saying that it was filtered

## Technical Changes in 22w42a

-   Added Feature Flags - world options to enable or disable some experimental or unfinished features (like blocks, entities and items)
-   Network protocol changes
-   Instances of recipe types that have recipe books now have field `category` to determine placement

### Feature flags

#### General notes

-   Feature flags are options that enable or disable certain groups of game elements (like blocks, entities and items), later called "features"
-   Game elements controlled by flags are hardcoded
-   Feature flags are stored in world

#### Configuration and datapack changes

-   Feature flags are enabled by datapacks
    -   New pack metadata section called `features` is added, containing enabled feature flags in list named `enabled`
-   The game now contains built-in datapacks (similar to the "Programmer Art" resource pack) that enable features and provide associated recipes, advancements, loot tables, etc
-   Added new fields to `server.properties` to allow initial selection of packs (works only during world creation)
    -   `initial-enabled-packs` - comma-separated list of packs to be enabled (feature packs need to be explicitly enabled)
    -   `initial-disabled-packs` - comma-separated list of packs to not auto-enable
-   Datapacks discovered after world creation will be disabled if they require features that are not enabled for loaded world

#### Effects of feature flags

##### Blocks

-   Disabled block ids are not recognized by commands that can create new blocks
-   Block items for disabled blocks are disabled
-   Disabled blocks won't spawn in structures
-   Disabled blocks won't be loaded as part of entities (for example as falling sand or blocks carried by Endermen)
-   Players can't interact with disabled blocks

##### Entities

-   Disabled entity ids are not recognized by commands that can summon new entities
-   Disabled entities will not spawn or load
-   Spawn egg items for disabled entities are disabled

##### Items

-   Disabled items are hidden from creative menu
-   Recipes and loot tables are prevented from creating disabled items
-   Disabled item ids are not recognized by commands that can create new items
-   Disabled items can't be used for interactions or attacking

### Network Protocol

-   The network protocol now supports adding player entities to the world without being added to the 'tab' player list
-   Servers can now lazily distribute players' profile public keys along with their first chat packet
-   Message 'headers' within the Secure Chat protocol no longer need to be distributed when private messages are sent
-   Contextual message references are now deduplicated for efficiency within the Secure Chat network protocol

### Recipes

#### Crafting book categories

-   Crafting book categories/tabs can now be controlled by recipe definitions
-   Categories available for `shaped`/`shapeless` and various special crafting recipes:
    -   `building`
    -   `redstone`
    -   `equipment`
    -   `misc` (default)
-   Categories available for `smelting`, `blasting`, `smoking`, `campfire_cooking`
    -   `food`
    -   `blocks`
    -   `misc` (default)
-   Some crafting books collapse multiple categories into a single tab
-   The exact mappings might change in the future

### Resource Packs

-   The Resource Pack version is now 11
-   Removed "fixers" for resource packs with versions 3 and 4 (pre-flattening)
    -   The game will no longer try to adapt packs with those versions to the current version

## Fixed bugs in 22w42a

-   [MC-14167](https://bugs.mojang.com/browse/MC-14167) Mobs build up fall damage when dangling on a lead
-   [MC-96449](https://bugs.mojang.com/browse/MC-96449) Rabbits sometimes don't drop any raw rabbit upon being killed
-   [MC-130754](https://bugs.mojang.com/browse/MC-130754) Jumping on farmland pushes the player a bit
-   [MC-135973](https://bugs.mojang.com/browse/MC-135973) Can't hold Q to drop items rapidly from container inventories
-   [MC-145748](https://bugs.mojang.com/browse/MC-145748) Clicking a settings button when there's a slider under the mouse in the next screen plays the click sound twice
-   [MC-146930](https://bugs.mojang.com/browse/MC-146930) The "Programmer Art" resource pack is internally called "programer;;_;;art"
-   [MC-150488](https://bugs.mojang.com/browse/MC-150488) Mobs can spawn on scaffolding
-   [MC-152752](https://bugs.mojang.com/browse/MC-152752) Jukebox music sound originates from north-west edge of the block
-   [MC-160610](https://bugs.mojang.com/browse/MC-160610) Mobs are able to spawn on Chorus Flowers
-   [MC-170457](https://bugs.mojang.com/browse/MC-170457) Chest latch doesn't rotate properly
-   [MC-170817](https://bugs.mojang.com/browse/MC-170817) Click sound of sliders in the video settings noticeably louder than anywhere else
-   [MC-175313](https://bugs.mojang.com/browse/MC-175313) Composter filling sounds originate from the bottom northwest corner of the block
-   [MC-177738](https://bugs.mojang.com/browse/MC-177738) Spawnpoint set on respawn anchor using /spawnpoint depletes glowstone charge, and doesn't stay on respawn anchor if its charge is depleted
-   [MC-182708](https://bugs.mojang.com/browse/MC-182708) Nether and warped wart blocks do not come after leaves in the Creative inventory
-   [MC-183069](https://bugs.mojang.com/browse/MC-183069) Donkeys, mules and undead horses cannot be saddled by right-clicking
-   [MC-183502](https://bugs.mojang.com/browse/MC-183502) The sounds for collecting honey in a bottle and collecting honeycomb with shears is categorised under friendly creatures
-   [MC-183831](https://bugs.mojang.com/browse/MC-183831) Villagers breed when not standing up
-   [MC-183899](https://bugs.mojang.com/browse/MC-183899) You can set your spawn point inside an end portal, causing the player to become stuck in the End
-   [MC-197150](https://bugs.mojang.com/browse/MC-197150) Horse armor and carpets cannot be equipped onto horses or llamas by right-clicking them whilst having these items held in your hand
-   [MC-199162](https://bugs.mojang.com/browse/MC-199162) One farmland block in plains;;_;;large;;_;;farm;;_;;1 has moisture level 0
-   [MC-201684](https://bugs.mojang.com/browse/MC-201684) Torches and soul torches aren't grouped together in the creative inventory
-   [MC-201759](https://bugs.mojang.com/browse/MC-201759) Obsidians aren't grouped together in Creative
-   [MC-202607](https://bugs.mojang.com/browse/MC-202607) Cat can get off lead by teleporting when it gives a gift after sleeping
-   [MC-206854](https://bugs.mojang.com/browse/MC-206854) Multiplayer warning and Chat Preview warning are off center
-   [MC-216733](https://bugs.mojang.com/browse/MC-216733) Basalt and blackstone are not grouped together with other "polishable" stone types in the Creative inventory
-   [MC-217644](https://bugs.mojang.com/browse/MC-217644) Wart blocks and shroomlights are in different Creative tabs
-   [MC-218534](https://bugs.mojang.com/browse/MC-218534) Blackstone stairs & slabs are not grouped with the other stone type stairs & slabs
-   [MC-220489](https://bugs.mojang.com/browse/MC-220489) Beds and respawn anchors are not grouped in the Creative inventory
-   [MC-221568](https://bugs.mojang.com/browse/MC-221568) Inconsistency: Barriers and structure voids produce particles when broken, but light blocks do not
-   [MC-222879](https://bugs.mojang.com/browse/MC-222879) Netherite scrap comes after netherite ingot in the creative inventory
-   [MC-224921](https://bugs.mojang.com/browse/MC-224921) Mob pathfinding fails under certain circumstances / mobs fall on closed turns
-   [MC-226184](https://bugs.mojang.com/browse/MC-226184) Axolotls pathfinding to water can sometimes fall in wide holes
-   [MC-226566](https://bugs.mojang.com/browse/MC-226566) Inconsistency: Blocks are not placed correctly in Creative inventory
-   [MC-228475](https://bugs.mojang.com/browse/MC-228475) Pointed dripstone is not grouped with dripstone blocks in the creative inventory
-   [MC-234446](https://bugs.mojang.com/browse/MC-234446) Moss Block appears in the wrong creative inventory tab
-   [MC-239465](https://bugs.mojang.com/browse/MC-239465) Emerald block in creative inventory looks out of place
-   [MC-242663](https://bugs.mojang.com/browse/MC-242663) Melons can generate underwater
-   [MC-243458](https://bugs.mojang.com/browse/MC-243458) Worldgen data packs don't work on servers at first launch
-   [MC-248753](https://bugs.mojang.com/browse/MC-248753) Pressure plates don't activate even though visually they should
-   [MC-249106](https://bugs.mojang.com/browse/MC-249106) Water rendering incorrectly through frogspawn hitbox/model
-   [MC-249232](https://bugs.mojang.com/browse/MC-249232) Frogs can sometimes fall into deep holes when pathfinding to entities
-   [MC-249257](https://bugs.mojang.com/browse/MC-249257) The sounds of splashing when creating mud aren't controlled by the "Blocks" sound slider
-   [MC-249294](https://bugs.mojang.com/browse/MC-249294) Rabbits ignore the "MoreCarrotTicks" value, causing them to always try to eat carrots
-   [MC-249419](https://bugs.mojang.com/browse/MC-249419) Map color for mud brick slab is no longer consistent with map color for other mud brick blocks
-   [MC-249463](https://bugs.mojang.com/browse/MC-249463) Shulkers in boats with chests are lowered
-   [MC-249513](https://bugs.mojang.com/browse/MC-249513) Frogspawn is not grouped with turtle eggs in the Creative inventory
-   [MC-249720](https://bugs.mojang.com/browse/MC-249720) Allay's wings are not attached to its body
-   [MC-249765](https://bugs.mojang.com/browse/MC-249765) Allays don't render semi-transparent when invisible where appropriate
-   [MC-249806](https://bugs.mojang.com/browse/MC-249806) Allay renders too low in boat, boat with chest, minecart and entities
-   [MC-249842](https://bugs.mojang.com/browse/MC-249842) Allays attempt to pathfind to items that are outside of the world border
-   [MC-249875](https://bugs.mojang.com/browse/MC-249875) Parity Issue: Allays hesitate for a few seconds before following, throwing items, or doing other actions in Java
-   [MC-249935](https://bugs.mojang.com/browse/MC-249935) New advancement "Birthday Song" grants no experience
-   [MC-250249](https://bugs.mojang.com/browse/MC-250249) Parity Issue: Allays pick up arrow/potion items with other effects than the ones they're holding
-   [MC-250311](https://bugs.mojang.com/browse/MC-250311) The minecraft:entity.tadpole.grow;;_;;up sound event doesn't have a translation key
-   [MC-250423](https://bugs.mojang.com/browse/MC-250423) Frog frequently fails to long jump to small blocks
-   [MC-250943](https://bugs.mojang.com/browse/MC-250943) minecraft.used:minecraft.goat;;_;;horn doesn't increase when using goat horns
-   [MC-251296](https://bugs.mojang.com/browse/MC-251296) Allay has a transparent texture but it is not transparent in game
-   [MC-251518](https://bugs.mojang.com/browse/MC-251518) Allay's poses, flying animations, and dancing animations for duping differ from Bedrock's, causing intense clipping, inconsistencies, choppy movements, and strange item positioning
-   [MC-251688](https://bugs.mojang.com/browse/MC-251688) Chat preview can overlap chat contents if the message is long enough
-   [MC-252089](https://bugs.mojang.com/browse/MC-252089) The chat preview warning menu is forcibly closed when the player dies or changes dimensions
-   [MC-252415](https://bugs.mojang.com/browse/MC-252415) Bedrock Edition's new 1.19.10 splash text is not available on Java 1.19
-   [MC-253076](https://bugs.mojang.com/browse/MC-253076) Allay duplicates Items when its NBT data is updated every tick
-   [MC-253125](https://bugs.mojang.com/browse/MC-253125) Allays can dance while panicking
-   [MC-253189](https://bugs.mojang.com/browse/MC-253189) Allays with NoAI can dance
-   [MC-253367](https://bugs.mojang.com/browse/MC-253367) The screen is sometimes flashed with the "Loading terrain..." screen after proceeding with the chat preview warning when all nearby chunks are loaded
-   [MC-253738](https://bugs.mojang.com/browse/MC-253738) Vibration particle faces at a constant pitch of about 60 degrees, not pointing towards the target
-   [MC-254119](https://bugs.mojang.com/browse/MC-254119) Breeding a Screaming Goat and a Regular Goat never results in a screaming goat
-   [MC-254395](https://bugs.mojang.com/browse/MC-254395) Command suggestions can overlap the chat preview field when the chat preview option is set to "When Sending"
-   [MC-254427](https://bugs.mojang.com/browse/MC-254427) Secure chat warning toast can appear on singleplayer worlds
-   [MC-254535](https://bugs.mojang.com/browse/MC-254535) Nether portals cannot replace snow layers
-   [MC-254695](https://bugs.mojang.com/browse/MC-254695) "Narrator Disabled" pop-up doesn't render fully
-   [MC-254774](https://bugs.mojang.com/browse/MC-254774) Crash when a villager with a gossip of value 0 shares gossips
-   [MC-255151](https://bugs.mojang.com/browse/MC-255151) net.minecraft.client.Camera#getMaxZoom(double) issue
-   [MC-255164](https://bugs.mojang.com/browse/MC-255164) Sculk Shrieker warning level resets to 0 after player's death
-   [MC-255715](https://bugs.mojang.com/browse/MC-255715) Menu panorama stops spinning after several days
-   [MC-256217](https://bugs.mojang.com/browse/MC-256217) Explosions create ghost blocks on servers at high coordinates

---

New snapshot! We're now heading towards 1.19.1, which will add Allay duplication, the ability to report chat, and, of course, fix a few bugs.

On the topic of chat reporting, we want everyone to feel safe and welcome in Minecraft, which is why we have community guidelines in place. If you feel unsafe, uncomfortable, or concerned that someone is breaking our [Community Guidelines](https://www.minecraft.net/community-standards) or the [Xbox Community Standards](https://www.xbox.com/legal/community-standards), you can soon report this in-game. Of course, it will also be possible to report incidents over at the [Report a Concern](https://help.minecraft.net/hc/requests/new?ticket_form_id=4416074743565) page.

We are looking for feedback regarding the Chat Reporting feature. For now, any reports made during the testing period may not be actioned on.

Enjoy!

## New Features in 22w24a

-   Added Allay duplication
-   Added Player Chat Reporting

### Allay

-   Allays will dance to a Record playing in a Jukebox
-   If the Allay is handed an Amethyst Shard while dancing it will duplicate
    -   Duplication has a 2.5 minute cooldown

### Player Chat Reporting

It is now possible to report a player for sending abusive messages in the game chat.

A reporter is required to select the individual chat messages that contain the objectionable content, as well as the category of the report, this is to provide the best context for our moderation team to take action.

Accessed via the social interactions screen (default keybind is P).

-   The social interactions screen is now available via the Pause screen when in a multiplayer game
-   Multiple chat messages can be selected for reporting
-   The category of the chat report can be selected from a list of Chat Report Categories
-   Additional comments can be entered to provide more details and information regarding the report

## Fixed bugs in 22w24a

-   [MC-144043](https://bugs.mojang.com/browse/MC-144043) Trader llamas continue to spit after their target died
-   [MC-146891](https://bugs.mojang.com/browse/MC-146891) Nitwit villager can have a profession
-   [MC-177505](https://bugs.mojang.com/browse/MC-177505) Cured Villager can work at wrong workstation
-   [MC-249523](https://bugs.mojang.com/browse/MC-249523) Sky color is visible for a brief moment after applying Night Vision under Darkness effect
-   [MC-250261](https://bugs.mojang.com/browse/MC-250261) Frogs can lay spawn on flowing water
-   [MC-250267](https://bugs.mojang.com/browse/MC-250267) Frogs don't lay their spawn on waterlogged blocks
-   [MC-252082](https://bugs.mojang.com/browse/MC-252082) Loading server resource packs reloads twice when one is already loaded
-   [MC-252363](https://bugs.mojang.com/browse/MC-252363) Mobs that naturally spawn in with equipment will play the respective equipping noise
-   [MC-252439](https://bugs.mojang.com/browse/MC-252439) Cured Villager trades are not refreshing
-   [MC-252539](https://bugs.mojang.com/browse/MC-252539) Commands sending messages use formatting of regular chat in server logs
-   [MC-252683](https://bugs.mojang.com/browse/MC-252683) Unexpected exception in the selector loop causing server lag

---

