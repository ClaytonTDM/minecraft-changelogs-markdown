# Minecraft 1.21.6 Pre-Release 4

We are now releasing Pre-Release 4 for Minecraft 1.21.6, with a few minor bug fixes.

Happy crafting!

## Fixed bugs in 1.21.6 Pre-Release 4

-   [MC-279417](https://bugs.mojang.com/browse/MC-279417) Luring mobs onto blocks at Y=-64 will instead make them pathfind to the highest elevation
-   [MC-298446](https://bugs.mojang.com/browse/MC-298446) The "Thunder roars" sound is no longer affected by the master volume
-   [MC-298510](https://bugs.mojang.com/browse/MC-298510) Happy ghasts stay still for a few seconds when you get off them
-   [MC-298653](https://bugs.mojang.com/browse/MC-298653) Master volume slider no longer affects /playsoud sounds with high volume

---

We've got another pre-release coming in hot! This time with a new advancement trigger and sound category but most importantly some much needed bug fixes.

## New Features

### Music and Sound

-   Added new sound volume category called "UI" for sounds played by UI elements, like button clicks

## Technical Changes

-   The Data Pack version is now 80

## Data Pack Version 80

-   Added `player_sheared_equipment` trigger

### New Triggers

Added `minecraft:player_sheared_equipment`

-   Can Trigger when a player shears off a shearable equipment from an Entity
-   Conditions:
    -   `item` - Item that is sheared
    -   `entity` - The entity that was sheared

### Commands

#### Modified `playsound`

-   Added new category `ui`
    -   Sounds in this category will continue playing when paused, similarly to `music`

## Fixed bugs in 1.21.6 Pre-Release 3

-   [MC-296371](https://bugs.mojang.com/browse/MC-296371) The entity shadows of happy ghasts are too small in relation to the size of their models
-   [MC-296374](https://bugs.mojang.com/browse/MC-296374) The entity shadows of ghastlings are too small in relation to the size of their models
-   [MC-296853](https://bugs.mojang.com/browse/MC-296853) The "Shear Brilliance" advancement is incorrectly given by shearing a lead off a wolf
-   [MC-297113](https://bugs.mojang.com/browse/MC-297113) Hotbar shown in loading terrain screen
-   [MC-297497](https://bugs.mojang.com/browse/MC-297497) The “Connection Lost” title isn’t displayed when being kicked from realms due to idle timeout
-   [MC-297972](https://bugs.mojang.com/browse/MC-297972) Dialog body content is misaligned
-   [MC-298353](https://bugs.mojang.com/browse/MC-298353) Ridden entities won't make the lead breaking sound when attached to a fence
-   [MC-298412](https://bugs.mojang.com/browse/MC-298412) Subtitles are no longer shown when the master volume is set to zero
-   [MC-298466](https://bugs.mojang.com/browse/MC-298466) When clicking the "yes" button to confirm command execution in a dialog, if the player is put into another dialog, the click sound from the "yes" button will not be played until it is closed
-   [MC-298492](https://bugs.mojang.com/browse/MC-298492) Disconnecting through dialog in configuration phase causes the client to crash.
-   [MC-298516](https://bugs.mojang.com/browse/MC-298516) While running /dialog clear and /dialog show every tick, pressing the warning button just after joining the world can crash the game
-   [MC-298520](https://bugs.mojang.com/browse/MC-298520) Items in slots now render behind the container title, mismatching 1.21.5 behavior

---

We're kicking the week off with another pre-release, including some music and happy ghast bug fixes. The Chase the Skies drop is getting closer and the pre-release schedule might include more than one pre-release per week.

## Changes

### Music and Sound

-   The following sound categories have been renamed:
    -   Friendly Creatures -> Friendly Mobs
    -   Hostile Creatures -> Hostile Mobs

## Technical Changes

### Dialogs

#### Dialog Description Format

##### Input Control Types

###### `minecraft:text`

-   Output values:
    
    -   As template substitution: contents with special characters escaped to fit in a SNBT literal (note: both `'` and `"` are escaped)
-   For `multiline` field:
    
    -   If `height` field is omitted, but `max_lines` is present, the height that will be chosen to fit the maximum number of lines can't exceed `512`

## Fixed bugs in 1.21.6 Pre-Release 2

-   [MC-217887](https://bugs.mojang.com/browse/MC-217887) Unsigned books written in 1.9-pre1 or earlier don't upgrade properly
-   [MC-297575](https://bugs.mojang.com/browse/MC-297575) Happy Ghast with nbt NoAI set to true can't be controlled by player
-   [MC-297591](https://bugs.mojang.com/browse/MC-297591) Ender pearls can unexpectedly come to a halt
-   [MC-298104](https://bugs.mojang.com/browse/MC-298104) The max;;_;;lines field of multiline text input control is unrestricted, lagging the game
-   [MC-298144](https://bugs.mojang.com/browse/MC-298144) The initial value of minecraft:text input type is limited to 32 characters, regardless of max;;_;;length field
-   [MC-298155](https://bugs.mojang.com/browse/MC-298155) Dialog command;;_;;template using a multiline text input causes player to be kicked out of the server due to illegal characters in chat (which is ;;\;;n)
-   [MC-298209](https://bugs.mojang.com/browse/MC-298209) Player cannot move while touching a happy ghast's body
-   [MC-298301](https://bugs.mojang.com/browse/MC-298301) Blinking the cursor shifts all characters to the right of a multilines text field input in Dialogs
-   [MC-298307](https://bugs.mojang.com/browse/MC-298307) Entering and exiting a pale garden while in Creative mode causes the current music track to remain silent
-   [MC-298358](https://bugs.mojang.com/browse/MC-298358) Riding a mob into powder snow no longer affects the player properly
-   [MC-298361](https://bugs.mojang.com/browse/MC-298361) Happy ghast with player riding, teleports back and forth when exiting nether portal
-   [MC-298368](https://bugs.mojang.com/browse/MC-298368) "music;;_;;notes.png.mcmeta" has an extra index that does not exist, causing a warning
-   [MC-298394](https://bugs.mojang.com/browse/MC-298394) Freezing in Powdered Snow is very inconsistent and jittery
-   [MC-298422](https://bugs.mojang.com/browse/MC-298422) Ghasts and happy ghasts do not take damage from harmful blocks under some circumstances

---

Hey! This is the first pre-release of 1.21.6. From now on, you will mostly see us fixing bugs and the release schedule might include more than one pre-release per week. We are on the finish line for the second drop of the year!

## Changes

-   The Dried Ghast Block now emits a vibration frequency of 11 when its block state changes
-   Shearing Saddles, Horse Armor, and Carpets now emits a vibration frequency of 6, along with the Unequip frequency of 4
-   The Ambient Dried Ghast sounds are now adjusted under the Blocks sound option instead of the Ambient/Environment option
-   A player riding a Happy Ghast can no longer completely fly through a Happy Ghast ridden by another player

## Technical Changes

-   The Data Pack version is now 79
-   The Resource Pack version is now 63

## Data Pack Version 79

-   Dialogs can now configure if they pause the game and if they close after an action is taken
-   Every dialog can now have inputs and can submit information
    -   The definition of actions has been changed to accommodate that
    -   The dedicated input dialog types have been removed, since they are redundant now
    -   The order of elements is:
        -   Body
        -   Inputs
        -   Actions
-   The `minecraft:custom` click event has been expanded to carry full a NBT tag
-   A new keybind called "Quick Actions" has been added to allow accessing content-configured dialogs

### Quick Actions Keybind

-   A new keybind has been addded that allows users to access a set of dialogs
-   Default key: `G`
-   This feature is configured by `minecraft:quick_actions` dialog tag
    -   If this tag is empty, the keybind does nothing
    -   If this tag has a single element, the keybind will open this dialog
    -   If this tag has multiple elements, the keybind will lead to `minecraft:quick_actions` dialog which (by default) lets user select one of the tag elements
        -   If this dialog is removed, the keybind does nothing
-   This option is intended to be used in custom content and by servers, so this tag is empty by default

### Common Dialog fields

New fields:

-   `pause` - if the dialog screen should pause the game in single-player mode, default: `true`
-   `after_action` - an additional operation performed on the dialog after click or submit actions, default: `close`
    -   `close` - closes the dialog and returns to the previous non-dialog screen (if any)
    -   `none` - does nothing, i.e. keeps the current dialog screen open
        -   only available if `pause` is `false` to avoid locking the game in single-player mode
    -   `wait_for_response` - replace the current dialog with a "Waiting for Response" screen
        -   this option is intended to prevent users from sending multiple actions on slow connections
            -   servers are expected to eventually replace this screen with a new dialog
        -   to avoid accidental locking, a "Back" button will become active after 5 seconds
            -   clicking this button will continue as if the dialog was closed (i.e. the game returns to the previous non-dialog screen, if any)
        -   The "Waiting for Response" screen will unpause the game in single-player mode to avoid locking the game

### Dialog Types

#### Changed `minecraft:multi_action`, `minecraft:server_links`, `minecraft:dialog_list`

-   Replaced field `on_cancel` with `exit_action`, holding an optional action
    -   If `exit_action` is present, a button for it will appear in footer, otherwise the footer is not present
    -   `exit_action` is also used for the Escape action

#### Removed `minecraft:simple_input_form`

-   Since any dialog can now have inputs, this dialog can be replaced by `minecraft:notice`

#### Removed `minecraft:multi_action_input_form`

-   Since any dialog can now have inputs, this dialog can be replaced by `minecraft:multi_action` (without any specified `exit_action`)

### Input Control Types

-   To accomodate the new `minecraft:custom` click event, all inputs will now return either a string or an NBT tag, depending on context

#### `minecraft:text`

-   Output values:
    -   As template substitution: contents without modification
    -   As tag: a string tag with contents without modification

#### `minecraft:boolean`

-   Output values:
    -   As template substitution: `on_true` when checked, `on_false` when unchecked
    -   As tag: `1b` when checked, `0b` when unchecked

#### `minecraft:number_range`

-   Output values:
    -   As template substitution: text representation of current value
        -   Whole numbers will be sent without decimal point
    -   As tag: a float tag with current value

#### Dialog Body Types

Hover and click events on text components within bodies now work as expected

-   Click events are handled by the dialog screen like any other action - that means it will also run the `after_action`

### Actions

-   The format of actions has been changed due to the merging of plain and input dialogs
-   After every action the dialog will always evaluate the contents of the `after_action` field (see above)

Fields:

-   Kept fields: `label`, `tooltip`, `width`
-   New field: `action` (replaces `on_click` and `on_submit`) - an action to perform when button is clicked, optional object with fields:
    -   `type` - value from `minecraft:dialog_action_type` registry
    -   `<type-specific>` - see below, depends on `type`

##### Static Dialog Action Types

All existing `click_event` actions (except for `open_file`) are included as dialog action types.

Uses same format as `click_event` on text components (but with `action` replaced with `type`) For example, when using `show_dialog`, entry for action button will look like:

    {
        "label": "some label",
        "action": {
            "type": "show_dialog",
            "dialog": "some:id"
        }
    }
    

##### `minecraft:dynamic/run_command` Action Type

-   This action will build a `run_command` event using a provided macro template
-   The macro will be expanded with string values from all inputs
    -   For example, if the macro template is `some_command $(some_input)`, the string value from the input with `key` of `some_input` will be used for the template expansion
    -   Inputs not used in macro will be ignored, while macro parameters not matching any inputs will be replaced with an empty string

Fields:

-   `template` - a string with a macro template to be interpreted as a command

###### `minecraft:dynamic/custom` Action Type

-   This method will build a `minecraft:custom` event using all input values
-   All input contents will be sent together inside a compound tag, with tag value of each input put under id from `key` field of that input
-   Additional static fields can be added to payload

Fields:

-   `additions` - fields to be added to payload, optional compound tag
-   `id` - namespaced ID

## Resource Pack version 63

-   Added `oversized_in_gui` item model field
-   Introduced new player head special model type

### Item Models

-   Item model definitions now have a boolean field `oversized_in_gui` which is `false` by default
    -   If `true`, the item model will be allowed to be bigger than its item slot
    -   If `false`, the item model will be clipped to the item slot size when being rendered in gui
    -   This ability of items being rendered outside their slots should not be considered officially supported, it was temporarily restored as an exception since many servers are relying on it
    -   At some point in the future we hope to replace it with an officially supported way of achieving similar functionality
-   Introduced new item model `minecraft:player_head` to handle player profile texture loading and rendering
-   Removed support for `minecraft:profile` from `minecraft:head`

##### `minecraft:player_head` special model type

-   Renders a player head
-   Uses profile from the `minecraft:profile` component to load a texture. Renders a default texture until the profile texture is fully loaded
-   No fields

##### `minecraft:head` special model type

-   No longer supports profile from `minecraft:profile` component to load a player texture
-   Renders a default player texture when `kind` is `player` and no texture override is supplied
-   Fields remain unchanged

## Fixed bugs in 1.21.6 Pre-Release 1

-   [MC-94800](https://bugs.mojang.com/browse/MC-94800) URL shown in open URL dialog is not shortened
-   [MC-140819](https://bugs.mojang.com/browse/MC-140819) Lectern model extends past inventory slot
-   [MC-200092](https://bugs.mojang.com/browse/MC-200092) /setworldspawn seems to ignore the 'angle' parameter
-   [MC-272825](https://bugs.mojang.com/browse/MC-272825) Custom filled maps from 23w31a and earlier do not upgrade properly in later versions
-   [MC-280276](https://bugs.mojang.com/browse/MC-280276) Some item models can still clip into the block below when hovering on the ground
-   [MC-296420](https://bugs.mojang.com/browse/MC-296420) '/datapack create' can create directories with illegal names
-   [MC-296431](https://bugs.mojang.com/browse/MC-296431) Clipping item sprites to stay in slot makes it impossible to hide the slot for resource packs
-   [MC-296458](https://bugs.mojang.com/browse/MC-296458) Player heads in the inventory don't show the right skin
-   [MC-297275](https://bugs.mojang.com/browse/MC-297275) Players can desync from their mounts when jumping on a happy ghast
-   [MC-297550](https://bugs.mojang.com/browse/MC-297550) Happy ghasts don’t remain stationary correctly when players dismount them while other players are still controlling them
-   [MC-297807](https://bugs.mojang.com/browse/MC-297807) Clicking "Save and Quit to Title" in the dialog warning menu takes you to the server list even if the world is singleplayer or locally-hosted LAN
-   [MC-297817](https://bugs.mojang.com/browse/MC-297817) Newly placed paintings sometimes appear at a different position
-   [MC-297848](https://bugs.mojang.com/browse/MC-297848) The menu background is not shown for a short amount of time when leaving a world from a dialog
-   [MC-297868](https://bugs.mojang.com/browse/MC-297868) Items in the armor.body and saddle slots are not kept when dying while the game rule keepInventory is set to true
-   [MC-297893](https://bugs.mojang.com/browse/MC-297893) prevent;;_;;equipment;;_;;drop enchantment effect does not work with armor.body and saddle slots
-   [MC-297894](https://bugs.mojang.com/browse/MC-297894) /clear command does not clear armor.body and saddle slots
-   [MC-297897](https://bugs.mojang.com/browse/MC-297897) Players can fall through happy ghasts
-   [MC-297899](https://bugs.mojang.com/browse/MC-297899) FPS drops due to clouds
-   [MC-297906](https://bugs.mojang.com/browse/MC-297906) Running a command with a large output whilst on a dedicated server causes a kick and no logged output
-   [MC-297915](https://bugs.mojang.com/browse/MC-297915) The name plates of entities with an empty custom name are now rendered incorrectly
-   [MC-298071](https://bugs.mojang.com/browse/MC-298071) All naturally spawned zombie villagers are professionless since 25w16a
-   [MC-298101](https://bugs.mojang.com/browse/MC-298101) Sniffers now show the digging animation instead of the walking animation
-   [MC-298116](https://bugs.mojang.com/browse/MC-298116) The warning text in the confirm link screen is no longer visible
-   [MC-298117](https://bugs.mojang.com/browse/MC-298117) All buttons at the bottom of the Realms screen are clickable when no realm is selected
-   [MC-298139](https://bugs.mojang.com/browse/MC-298139) Items bigger than the size of a slot incorrectly bleed over onto other items
-   [MC-298146](https://bugs.mojang.com/browse/MC-298146) GUI items disappear at high screen resolutions

---

