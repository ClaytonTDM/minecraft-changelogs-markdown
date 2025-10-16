# 1.21.6 Pre-Release 1

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

**Changed `minecraft:multi_action`, `minecraft:server_links`, `minecraft:dialog_list`**

-   Replaced field `on_cancel` with `exit_action`, holding an optional action
    -   If `exit_action` is present, a button for it will appear in footer, otherwise the footer is not present
    -   `exit_action` is also used for the Escape action

**Removed `minecraft:simple_input_form`**

-   Since any dialog can now have inputs, this dialog can be replaced by `minecraft:notice`

**Removed `minecraft:multi_action_input_form`**

-   Since any dialog can now have inputs, this dialog can be replaced by `minecraft:multi_action` (without any specified `exit_action`)

### Input Control Types

-   To accomodate the new `minecraft:custom` click event, all inputs will now return either a string or an NBT tag, depending on context

**`minecraft:text`**

-   Output values:
    -   As template substitution: contents without modification
    -   As tag: a string tag with contents without modification

**`minecraft:boolean`**

-   Output values:
    -   As template substitution: `on_true` when checked, `on_false` when unchecked
    -   As tag: `1b` when checked, `0b` when unchecked

**`minecraft:number_range`**

-   Output values:
    -   As template substitution: text representation of current value
        -   Whole numbers will be sent without decimal point
    -   As tag: a float tag with current value

**Dialog Body Types**

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

**Static Dialog Action Types**

All existing `click_event` actions (except for `open_file`) are included as dialog action types.

Uses same format as `click_event` on text components (but with `action` replaced with `type`) For example, when using `show_dialog`, entry for action button will look like:

    {
        "label": "some label",
        "action": {
            "type": "show_dialog",
            "dialog": "some:id"
        }
    }
    

**`minecraft:dynamic/run_command` Action Type**

-   This action will build a `run_command` event using a provided macro template
-   The macro will be expanded with string values from all inputs
    -   For example, if the macro template is `some_command $(some_input)`, the string value from the input with `key` of `some_input` will be used for the template expansion
    -   Inputs not used in macro will be ignored, while macro parameters not matching any inputs will be replaced with an empty string

Fields:

-   `template` - a string with a macro template to be interpreted as a command

**`minecraft:dynamic/custom` Action Type**

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

**`minecraft:player_head` special model type**

-   Renders a player head
-   Uses profile from the `minecraft:profile` component to load a texture. Renders a default texture until the profile texture is fully loaded
-   No fields

**`minecraft:head` special model type**

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

# Minecraft Snapshot 25w21a

Summer is finally here in Stockholm on this fine Snapshot Tuesday - but it seems some of our developers missed those beautiful, gray, rainy skies far too much and absolutely insisted on giving the clouds in Minecraft a new look. What a de-light!

## New Features

-   Updated the pattern of clouds in the sky
-   Horses, Donkeys, and Mules can now be fed carrots to heal, grow, and improve their temper

### Music and Sound

-   Added a new sound for when a Lead snaps
-   Added new custom sounds for shearing Saddles, Horse Armor, and Carpets from Llamas

## Technical Changes

-   The Data Pack version is now 78
-   The Resource Pack version is now 62

## Data Pack Version 78

### Dialogs

-   `run_command` click actions will now correctly close dialogs and book screens even if the command does not require elevated permissions
-   Dialogs should now correctly return to the previous non-dialog screen on close in all cases
-   If a new dialog is received by the client while warning screen is visible, it will not replace it, but when user clicks the "Back" button, the new dialog will be restored instead
-   The sizes of elements in dialogs are now restricted:
    -   buttons - between `1` and `1024` (inclusive)
    -   `minecraft:plain_message` dialog body - between `1` and `1024` (inclusive)
    -   `minecraft:item` dialog body
        -   `width` of `description` - between `1` and `1024` (inclusive)
        -   `width` - between `1` and `256` (inclusive)
        -   `height` - between `1` and `256` (inclusive)
    -   `minecraft:text` input control - between `1` and `1024` (inclusive)
    -   `minecraft:single_option` input control - between `1` and `1024` (inclusive)
    -   `minecraft:number_range` input control - between `1` and `1024` (inclusive)

**`minecraft:text` Input Control**

-   `max_length` - maximum length of input, positive integer with default of 32
-   `multiline` - if present, allows users to input multiple lines, optional object with fields:
    -   `max_lines` - if present, limits maximum lines, optional positive integer
    -   `height` - height of input, optional integer in range `1` to `512`
        -   If this field is omitted, but `max_lines` is present, the height will be chosen to fit the maximum number of lines
        -   If this and `max_lines` are both omitted, it will default to a height that fits 4 lines

**`minecraft:number_range` Input Control**

-   The `steps` field has been replaced with a new field:
    -   `step` - step size, optional positive float
        -   If present, only values of `initial + <any integer> * step` will be allowed
        -   If absent, any value from range the is allowed
-   `initial` - if not specified, now defaults to the middle of the range

**`minecraft:multi_action_input_form` Dialog Type**

-   Added new field `columns` - positive integer describing number of columns, default: `2`

## Resource Pack Version 62

### Sounds

-   Added `entity/leashknot/break` for when a Lead snaps
-   The following sounds have been renamed:
    -   `entity/leashknot/break1` -> `entity/leashknot/unleash1`
    -   `entity/leashknot/break2` -> `entity/leashknot/unleash2`
    -   `entity/leashknot/break3` -> `entity/leashknot/unleash3`
    -   `entity/leashknot/place1` -> `entity/leashknot/leash1`
    -   `entity/leashknot/place2` -> `entity/leashknot/leash2`
    -   `entity/leashknot/place3` -> `entity/leashknot/leash3`
-   The following sounds have been added for shearing Saddles, Horse Armor, and Carpets from Llamas
    -   `mob/horse/armor_unequip`
    -   `mob/horse/saddle_unequip`
    -   `mob/llama/unequip`

## Fixed bugs in 25w21a

-   [MC-36696](https://bugs.mojang.com/browse/MC-36696) Clicking on the statistics button on the menu screen advances the game by 1 tick
-   [MC-112730](https://bugs.mojang.com/browse/MC-112730) Beacon beam and structure block render twice per frame
-   [MC-236464](https://bugs.mojang.com/browse/MC-236464) Beacon beams emitted from below the player are invisible after reloading chunks
-   [MC-258336](https://bugs.mojang.com/browse/MC-258336) Frost Walker causes frequent visual corruption near chunk borders on Threaded and Semi-Blocking Chunk Builder
-   [MC-296337](https://bugs.mojang.com/browse/MC-296337) Minecarts cause memory usage increases and crashes
-   [MC-297264](https://bugs.mojang.com/browse/MC-297264) Cat breeds are not seed based anymore
-   [MC-297336](https://bugs.mojang.com/browse/MC-297336) Experience orbs from thrown bottles o' enchanting are very prone to getting stuck inside blocks when thrown against a corner
-   [MC-297615](https://bugs.mojang.com/browse/MC-297615) Untranslatable error message when trying to join a closed Realm
-   [MC-297803](https://bugs.mojang.com/browse/MC-297803) The string "menu.custom;;_;;screen;;_;;info.contents" misspells "personal" as "pesonal"
-   [MC-297806](https://bugs.mojang.com/browse/MC-297806) music.game.swamp.labyrinthine misspells the song's title
-   [MC-297808](https://bugs.mojang.com/browse/MC-297808) music.game.oxygene is missing the grave accent sign
-   [MC-297812](https://bugs.mojang.com/browse/MC-297812) Bold text is rendered differently than in previous versions
-   [MC-297813](https://bugs.mojang.com/browse/MC-297813) Amos Roddy is not listed in the credits
-   [MC-297823](https://bugs.mojang.com/browse/MC-297823) music.game.mice;;_;;on;;_;;venus is using wrong capitalization
-   [MC-297845](https://bugs.mojang.com/browse/MC-297845) Clicking the Statistics button in Singleplayer does not play the button click sound until you resume playing
-   [MC-297846](https://bugs.mojang.com/browse/MC-297846) The music toast flashes in the pause menu when the Music slider is set to zero
-   [MC-297875](https://bugs.mojang.com/browse/MC-297875) Text shadow from underlined text overlaps the text below it in chat messages
-   [MC-297888](https://bugs.mojang.com/browse/MC-297888) Text no longer renders in a consistent order across different fonts
-   [MC-297917](https://bugs.mojang.com/browse/MC-297917) The client stops responding when showing a dialog with an extremely wide button
-   [MC-297977](https://bugs.mojang.com/browse/MC-297977) Dialog columns layout has extra spacing between the grid and the overflow linear layout

---

# Minecraft Snapshot 25w20a

This week we’re releasing the final features from this year’s second drop. Today’s snapshot brings craftable saddles as well as some stunning tracks, courtesy of Amos Roddy. We have also added an option to show which song is currently playing in the in-game pause menu.

## New Features

-   Added a new Music Disc with the track "Tears" by Amos Roddy
-   Made Saddles craftable and shearable
-   Updated the main screen panorama

### Music

-   Added the following new music tracks by Amos Roddy to Cherry Groves, Forest, Desert, Grove, and Lush Cave Biomes:
    -   Below and Above
    -   Broken Clocks
    -   Fireflies
    -   Lilypad
    -   O's Piano
-   The same songs have been added to the menu music rotation

### Saddles Updates

**Crafting Saddles**

-   Saddles can now be crafted with 3 Leather and 1 Iron Ingot
-   Recipe unlocks when a player picks up their first Leather

**Removing Saddles and Equipment**

-   Saddles, Horse Armor, Harnesses and Carpets can now be removed from the mobs they can be equipped on by using Shears
-   Saddles, Horse Armor, Harnesses and Carpets cannot be removed by using Shears while the mob has a rider
-   Saddles, Horse Armor, Harnesses and Carpets cannot be removed by using Shears while the player is crouching
-   Saddles cannot be removed from Ravagers using Shears
-   Dispensers with Shears cannot remove Saddles, Horse Armor, Harnesses or Carpets equipped on mobs

**Loot Table Changes**

Some loot tables have had saddles removed from them and replaced with 1-5 Leather:

-   Monster Room chests
-   Ancient City chests
-   Desert Pyramid chests
-   Jungle Pyramid chests
-   Stronghold altar chests

## Changes

-   Fog is now applied to 3d hud elements such as first person player hands and items in hands
-   The Ghast now drops the "Tears" Music Disc when killed by a Fireball deflected by a Player
-   The fix to [MC-3697](https://bugs.mojang.com/browse/MC-3697) has been partially reverted. Decorative hanging entities such as paintings and item frames are now immune to explosions from submerged TNT while items and armor stands are once again vulnerable to them
-   Updates to music and sound
-   Rain and thunder weather is somewhat less foggy now
-   Rain fog affects interiors less
-   Saddles are now craftable and can be crafted with 3 Leather and 1 Iron Ingot
-   Saddles, Horse Armor, and Carpets can now be removed from the mobs they can be equipped on by using Shears
-   Some loot tables have been modified to give Leather instead of Saddles
-   The Dried Ghast Block no longer breaks if water flows into it

### Music and Sound

-   Music now plays even when the game is paused
-   Added an option to the Music & Sound settings that allows players to change how frequently music plays while in a game world
-   Added an option to the Music & Sound settings that enables a music toast to be shown whenever a song starts playing
    -   With this option enabled, the song that is currently playing will be seen at all times in the top left corner of the in-game Pause Menu

### Realms

-   Added the Realms logo to the Realms loading screens
-   Added region information when connecting to a Realm

## Technical Changes

-   The Data Pack version is now 77
-   The Resource Pack version is now 61
-   "Command Syntax" report now contains information about required permission level

## Data Pack Version 77

-   New optional fields `can_be_sheared` and `shearing_sound` have been added to the `equippable` item component
-   Added a way to display very simple dialogs to users
-   Added `custom` - a new `click_event` action type for text components
-   Users will now be prompted for confirmation before executing a command from the `run_command` click action in books and chat if the command can't be parsed or requires elevated permissions (i.e. higher than 0)

### Dialogs

-   Added a way to display simple modal dialogs to a user
-   Dialogs are stored in a `minecraft:dialog` registry, but can also be defined inline
-   Dialogs are an experimental feature
-   To avoid user confusion, dialog screens are marked with a warning sign next to the title
    -   Clicking on this warning leads to a dialog that explains to user that this screen is provided by custom content
    -   It also gives user an option to leave current world to avoid them being locked in infinite loop of dialogs
-   Dialogs can be displayed by server in `play` and `configuration` connection phases
    -   However, only inline registries are allowed in `configuration`, since registries are not yet available in that phase
-   Dialogs always close after user selects any action
-   Dialogs by default will also close after Escape key is pressed
    -   When this happens, dialog will run action specific to dialog type described as "exit action" below
    -   This behavior is configurable
-   When dialog screen is closed, game goes back to previously displayed non-dialog screen or back to gameplay
    -   That means that new dialogs always replace already opened ones, if any
-   Dialogs screens will pause the game in singleplayer mode
-   Dialogs can be configured to be accessible from Pause menu
    -   This replaces and expands "Server Links" button added in previous versions
-   Most dialogs follow a common layout, however exact contents depend on type:
    -   Header with title and warning button
    -   Body elements (labels, inputs, buttons and submit actions), scrollable if needed
    -   Optional footer, contains main buttons and submit actions

> **Developer's Note**: _Dialogs are not supposed to fully describe any in-game UI, but just to allow custom content to display simple messages and get input from users. This feature is intentionally limited to match that use case._

**Dialog Description Format**

-   Dialogs are stored in `minecraft:dialog` registry that can be provided by a datapack

Fields:

-   `type` - one of dialog types from `minecraft:dialog_type` registry
-   `<type-specific>` - see below

**Common Dialog Fields**

-   Most dialog types share some fields. To avoid duplication, they are listed in this section

Fields:

-   `title` - screen title, text component
    -   Should be always visible on screen, no matter the specific type
-   `external_title` - name to be used for a button leading to this dialog (for example from Pause screen), optional text component
    -   If not present, `title` will be used instead
-   `body` - optional list of body elements or a single element, see below
-   `can_close_with_escape` - can dialog be dismissed with Escape key, default `true`

**Common Button Data**

-   Most actions in dialog types share following fields that describe apperance of a button associated with that action:
-   `label` - text component
-   `tooltip` - optional text component to display when button is highlighted or hovered over
-   `width` - width of the button, positive integer with default `150`

**Click Action**

-   Common object used in dialogs to represent clickable action on a dialog
-   Fields:
    -   Common button data (see above)
    -   `on_click` - optional click event (same format as `click_event` on text components)
        -   If not present, clicking button will simply close screen without any action

**Dialog Types**

**`minecraft:notice`**

-   A simple screen with one action in footer
-   Exit action: same as `action`

Fields:

-   Common dialog fields (see above)
-   `action` - click action (see above), defaults to button with `gui.ok` label and no action or tooltip

**`minecraft:confirmation`**

-   A simple screen with two actions in footer
-   Exit action: same as `no` action

Fields:

-   Common dialog fields (see above)
-   `yes` - click action (see above) for positive outcome
-   `no` - click action (see above) for negative outcome

**`minecraft:multi_action`**

-   A scrollable list of actions arranged in columns
-   Screen also has button in footer that runs exit action and closes the screen
    -   Label will be `gui.cancel` if dialog has defined exit action and `gui.back` if it has no side effects
-   Exit action: defined in `on_cancel` field

Fields:

-   Common dialog fields (see above)
-   `actions` - non-empty list of click actions (see above)
-   `on_cancel` - optional click event (same format as `click_event` on text components)
-   `columns` - positive integer describing number of columns, default: `2`

**`minecraft:server_links`**

-   A scrollable list of links received from server in `minecraft:server_links` packet, arranged in columns
-   Screen also has button in footer that runs exit action and closes the screen
    -   Label will be `gui.cancel` if dialog has defined exit action and `gui.back` if it has no side effects
-   Note: this is a replacement for previous Server Links screen, but now with an additional body
-   Exit action: defined in `on_cancel` field

Fields:

-   Common dialog fields (see above)
-   `on_cancel` - optional click event (same format as `click_event` on text components)
-   `columns` - positive integer describing number of columns, default: `2`
-   `button_width` - width of buttons in the list, positive integer with default `150`

**`minecraft:dialog_list`**

-   A scrollable list of buttons leading directly to other dialogs, arranged in columns
    -   Titles of those buttons will be taken from `external_title` fields of targeted dialogs
-   Screen also has button in footer that runs exit action and closes the screen
    -   Label will be `gui.cancel` if dialog has defined exit action and `gui.back` if it has no side effects
-   Exit action: defined in `on_cancel` field

Fields:

-   Common dialog fields (see above)
-   `dialogs` - dialog, a list of dialogs or a dialog tag
-   `on_cancel` - optional click event (same format as `click_event` on text components)
-   `columns` - positive integer describing number of columns, default: `2`
-   `button_width` - width of buttons in the list, positive integer with default `150`

**`minecraft:simple_input_form`**

-   A screen that accepts user inputs
-   Has a single submit action with in a footer
-   Exit action: none (submitting data closes screen, but does not run any action outside of sending data to server)

Fields:

-   Common dialog fields (see above)
-   `inputs` - non-empty list of inputs controls, see below
-   `action` - submit action, see below

**`minecraft:multi_action_input_form`**

-   A screen that accepts user inputs
-   Can have multiple submit actions
-   Has no footer, submit actions are appended to a body
-   Exit action: none (submitting data closes screen, but does not run any action outside of sending data to server)

Fields:

-   Common dialog fields (see above)
-   `inputs` - non-empty list of inputs controls, see below
-   `actions` - non-empty list of submit actions, see below

**Dialog Body Types**

-   All dialogs have a list of body elements describing contents between title and actions or inputs

Fields:

-   `type` - one of dialog body types from `minecraft:dialog_body_type` registry
-   `<type-specific>` - see below

**`minecraft:plain_message`**

-   A multiline label

Fields:

-   `contents` - text component
-   `width` - maximum width of message, positive integer with default `200`

**`minecraft:item`**

-   Item with optional description
    -   If description is present, it will be rendered to the right of item
-   Item will be rendered as if it was in inventory slot
-   Item is not scaled even if `width` and `height` are set to values other than default

Fields:

-   `item` - item stack with count
-   `description` - optional object with fields:
    -   `contents` - text component
    -   `width` - maximum width of contents, positive integer with default `200`
    -   Can also be just be text component
-   `show_decorations` - if `true`, count and damage bar will be rendered over the item, default: `true`
-   `show_tooltip` - if `true`, item tooltip will show up when item is hovered, default: `true`
-   `width` - horizontal size of element, default: `16`
-   `height` - vertical size of element, default: `16`

**Input Control Types**

-   Input dialog uses a set of controls to accept user input
-   When submitted, current value of input will be converted to a string and sent to the server as described by Submit Action section below

Fields:

-   `type` - one of input control types from `minecraft:input_control_type` registry
-   `key` - string identifier of value used when submitting data, must be a valid template argument (letters, digits and `_`)
-   `<type-specific>` - see below

**`minecraft:text`**

-   Simple text input
-   Sends current contents without modification

Fields:

-   `width` - width of input, positive integer with default: `200`
-   `label` - a text component to be displayed to the left of control
-   `label_visible` - controls label visibility, default: `true`
-   `initial` - initial contents, default: `""` (empty)

**`minecraft:boolean`**

-   A plain checkbox with a label

Fields:

-   `label` - a text component to be displayed to the right of control
-   `initial` - an initial value, default: `false` (i.e. unchecked)
-   `on_true` - a string value to send when control is checked, default: 'true'
-   `on_false` - a string value to send when control is unchecked, default: 'false'

**`minecraft:single_option`**

-   A button that cycles between a set of options when clicked
-   Sends value associated with currently selected preset

Fields:

-   `label` - a text component to be displayed on the button
-   `label_visible` - if `true`, label will be incorporated into button text, default: `true`
-   `width` - width of button, positive integer with default: `200`
-   `options` - a list of objects with fields:
    -   `id` - a string value to send on submit
    -   `display` - a text component to display on button, optional (if not present, `id` is used)
    -   `initial` - an optional boolean flag that selects initial option (only one option can have it set to `true`)
    -   Additionaly list might also contain plain string - in that case it's equivalent to a single entry with field `id` set to that string and other fields set to default

**`minecraft:number_range`**

-   A slider for picking a numeric value out of some range
-   Sends currently selected value
    -   Whole numbers will be sent without decimal point

Fields:

-   `label` - a text component to be used as a slider label
-   `label_format` - a translation key to be used for building label (first argument is contents of `label` field, second argument is current value), default: `options.generic_value`
-   `width` - width of input, positive integer with default: `200`
-   `start` - start value (when slider is in leftmost position) (inclusive), float
-   `end` - end value (when slider is in rightmost position) (inclusive), float
-   `steps` - number of increments, positive integer
    -   Note: value of `1` means that slider will have two positions (start and end)
-   `initial` - initial value of slider, rounded down nearest step, must be within range, defaults to `min`

**Submit Actions**

-   Every submit action on input dialog has a button associated with it
-   When one of those buttons is clicked, values of all inputs will be collected and sent to a server using one of methods described below
-   `id` field of a submit action will be included as an input with key `action`
-   Submit action fields:
    -   Common button data (see above)
    -   `id` - string identifier of an action
    -   `on_submit` - submit method to run when button is clicked, object with following fields:
        -   `type` - one of submit method types from `minecraft:submit_method_type` registry
        -   `<type-specific>` - see below
-   Note: server does not validate individual values as they arrive as filled commands or custom payloads

**Submit Method Types**

**`minecraft:command_template`**

-   This method will build a command using a provided macro template and request the server to run it (same as `minecraft:run_command` click event)
-   If the command requires permission higher than `0` (when any operator permissions are required), a confirmation dialog will be shown
-   Macro will be expanded with values from input
    -   For example, if macro is `some_command $(action)`, `action` parameter will be expanded to `id` field of a submit action
    -   Inputs not used in macro will be ignored, while macro parameters not matching any inputs will be replaced with an empty string

Fields:

-   `template` - a string with a macro template to be interpreted as a command

**`minecraft:custom_template`**

-   This method will build a custom server click action using a provided macro template and send it to the server (same as `minecraft:custom` click event)
-   Macro will be expanded with values from input
    -   Inputs not used in macro will be ignored, while macro parameters not matching any inputs will be replaced with an empty string

Fields:

-   `template` - a string with a macro template to be used as a payload
-   `id` - namespaced ID

**`minecraft:custom_form`**

-   This method will build a custom server click action from all values and request the server to run it (same as `minecraft:custom` click event)
-   Format:
    -   keys are separated from values with horizontal tabulation (`U+0009`) character
    -   key-value entries are separated with line feed (`U+000A`) character
    -   If characters `U+0009` and `U+000A` are present in any key or value, they will be escaped to `;;t;;` and `;;n;;`

Fields:

-   `id` - namespaced ID

**Built-in dialogs**

The built-in datapack contains some custom dialogs to provide customization of specific screens used by client

**`minecraft:server_links`**

-   Replacement for previously existing "Server Links" screen
-   Meant to simplify migration for servers that used this feature previously

**`minecraft:custom_options`**

-   Shows contents of `minecraft:pause_screen_additions` tag (see below)
-   Lets user select a specific dialog if this tag contains multiple entries
-   Note: Since this tag is meant for interoperability, any content that replaces this dialog should be careful to not hide other dialog providers

**Dialog Command**

-   New command has been added to show dialog to clients

Syntax:

-   `dialog show <targets> <dialog>` - show dialog to player(s)
    -   `<targets>` - player name, UUID or a player selector
    -   `<dialog>` - a namespaced ID from `minecraft:dialog` registry or inline dialog value as described above
    -   Returns number of players in `targets` argument
-   `dialog clear <targets>` - clean dialog for player(s), if they have any visible
    -   `<targets>` - player name, UUID or a player selector
    -   Returns number of players in `targets` argument

**Pause Screen Configuration**

-   A data pack can request some of the available dialogs to be accessible from Pause screen
-   This feature replaces "Server Links" button and is placed on Pause screen according to the same rules
-   Buttons leading to dialogs exposed in this way will use label described in `external_title` field
-   This feature is configured by `minecraft:pause_screen_additions` dialog tag:
    -   If this tag is not specified or is empty but the server has sent `server_links` packet, tag will be handled as if it contained `minecraft:server_links` dialog
        -   Note: this matches previous Server Links feature behavior
        -   If this dialog is removed, the tag remains empty
    -   If this tag is still empty, button is not visible ("Send Feedback" and "Report Bugs" buttons are visible instead)
    -   If this tag has a single element, Pause screen button will lead directly to this dialog
    -   If this tag has multiple elements, Pause screen button will lead to `minecraft:custom_options` which (by default) lets user select one of the tag elements
        -   If this dialog is removed, button is not visible

### Text Components

**Click Events**

-   New click action `minecraft:custom` has been added
    -   When user clicks a component with this click action, client will send a dedicated packet `minecraft:custom_click_action` to a server
    -   The intended use is as an alternative for `run_command` to be used by modded servers without worrying about having to add custom commands
    -   This packet has no functionality on vanilla servers
    -   Fields:
        -   `id` - namespaced ID
        -   `payload` - optional string field

**Dialog Click Event**

-   New action `show_dialog` has been added
    -   When user clicks this component, a dialog will be opened for them
    -   Fields:
        -   `dialog` - a namespaced ID from `minecraft:dialog` registry or inline dialog value as described above

### Attributes

**Ghasts `flying_speed` attribute**

-   Ghasts now have a `flying_speed` attribute that affects their flying speed

### Data Components

**`equippable` Item Component**

-   Added new optional field: `can_be_sheared` (boolean)
    -   If `true`, players can use Shears to remove this equippable item from a target mob by right-clicking, provided all other shearing conditions are satisfied
    -   If not specified, it defaults to `false`
-   Added new optional field: `shearing_sound` (sound event)
    -   It's a sound event that plays when the equippable item is sheared
    -   If not specified, it defaults to the `item.shears.snip` sound event

## Resource Pack Version 61

### UI Sprites

-   Added `icon/music_notes` and `toast/now_playing` sprites

## Fixed bugs in 25w20a

-   [MC-97423](https://bugs.mojang.com/browse/MC-97423) Horse temporarily stuck in jump animation if dismounted
-   [MC-103511](https://bugs.mojang.com/browse/MC-103511) Sound/Song stops playing after adjusting the volume
-   [MC-118081](https://bugs.mojang.com/browse/MC-118081) Sounds don't pause when game is paused on some UI screens
-   [MC-248682](https://bugs.mojang.com/browse/MC-248682) Translucent blocks moved by pistons aren't affected by fog correctly
-   [MC-248688](https://bugs.mojang.com/browse/MC-248688) Falling translucent blocks aren't affected by fog correctly
-   [MC-269744](https://bugs.mojang.com/browse/MC-269744) Out of memory crash when using a preset with a large layer
-   [MC-276665](https://bugs.mojang.com/browse/MC-276665) Music is never turning on when it's toggled in the menu
-   [MC-277991](https://bugs.mojang.com/browse/MC-277991) The 2 brightest pixel colors on pale oak boat items are still switched
-   [MC-296311](https://bugs.mojang.com/browse/MC-296311) TNT touching water will destroy blocks and damage entities but will ignore decorative entities
-   [MC-296836](https://bugs.mojang.com/browse/MC-296836) Happy ghast saddle model doesn't change when lead is broken by exceeding max range.
-   [MC-296843](https://bugs.mojang.com/browse/MC-296843) Clouds are rendered incorrectly on some Mac systems
-   [MC-297524](https://bugs.mojang.com/browse/MC-297524) Connection with realm gives weird HTML text
-   [MC-297535](https://bugs.mojang.com/browse/MC-297535) The enchantment glint doesn't render in first person or the inventory
-   [MC-297544](https://bugs.mojang.com/browse/MC-297544) Rain fog does not affect 1st person hand or items
-   [MC-297570](https://bugs.mojang.com/browse/MC-297570) Block breaking overlay not affected by environmental fog

---

