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

#### `minecraft:text` Input Control

-   `max_length` - maximum length of input, positive integer with default of 32
-   `multiline` - if present, allows users to input multiple lines, optional object with fields:
    -   `max_lines` - if present, limits maximum lines, optional positive integer
    -   `height` - height of input, optional integer in range `1` to `512`
        -   If this field is omitted, but `max_lines` is present, the height will be chosen to fit the maximum number of lines
        -   If this and `max_lines` are both omitted, it will default to a height that fits 4 lines

#### `minecraft:number_range` Input Control

-   The `steps` field has been replaced with a new field:
    -   `step` - step size, optional positive float
        -   If present, only values of `initial + <any integer> * step` will be allowed
        -   If absent, any value from range the is allowed
-   `initial` - if not specified, now defaults to the middle of the range

#### `minecraft:multi_action_input_form` Dialog Type

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
-   [MC-297803](https://bugs.mojang.com/browse/MC-297803) The string "menu.custom\_screen\_info.contents" misspells "personal" as "pesonal"
-   [MC-297806](https://bugs.mojang.com/browse/MC-297806) music.game.swamp.labyrinthine misspells the song's title
-   [MC-297808](https://bugs.mojang.com/browse/MC-297808) music.game.oxygene is missing the grave accent sign
-   [MC-297812](https://bugs.mojang.com/browse/MC-297812) Bold text is rendered differently than in previous versions
-   [MC-297813](https://bugs.mojang.com/browse/MC-297813) Amos Roddy is not listed in the credits
-   [MC-297823](https://bugs.mojang.com/browse/MC-297823) music.game.mice\_on\_venus is using wrong capitalization
-   [MC-297845](https://bugs.mojang.com/browse/MC-297845) Clicking the Statistics button in Singleplayer does not play the button click sound until you resume playing
-   [MC-297846](https://bugs.mojang.com/browse/MC-297846) The music toast flashes in the pause menu when the Music slider is set to zero
-   [MC-297875](https://bugs.mojang.com/browse/MC-297875) Text shadow from underlined text overlaps the text below it in chat messages
-   [MC-297888](https://bugs.mojang.com/browse/MC-297888) Text no longer renders in a consistent order across different fonts
-   [MC-297917](https://bugs.mojang.com/browse/MC-297917) The client stops responding when showing a dialog with an extremely wide button
-   [MC-297977](https://bugs.mojang.com/browse/MC-297977) Dialog columns layout has extra spacing between the grid and the overflow linear layout

---

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

#### Crafting Saddles

-   Saddles can now be crafted with 3 Leather and 1 Iron Ingot
-   Recipe unlocks when a player picks up their first Leather

#### Removing Saddles and Equipment

-   Saddles, Horse Armor, Harnesses and Carpets can now be removed from the mobs they can be equipped on by using Shears
-   Saddles, Horse Armor, Harnesses and Carpets cannot be removed by using Shears while the mob has a rider
-   Saddles, Horse Armor, Harnesses and Carpets cannot be removed by using Shears while the player is crouching
-   Saddles cannot be removed from Ravagers using Shears
-   Dispensers with Shears cannot remove Saddles, Horse Armor, Harnesses or Carpets equipped on mobs

#### Loot Table Changes

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

#### Dialog Description Format

-   Dialogs are stored in `minecraft:dialog` registry that can be provided by a datapack

Fields:

-   `type` - one of dialog types from `minecraft:dialog_type` registry
-   `<type-specific>` - see below

##### Common Dialog Fields

-   Most dialog types share some fields. To avoid duplication, they are listed in this section

Fields:

-   `title` - screen title, text component
    -   Should be always visible on screen, no matter the specific type
-   `external_title` - name to be used for a button leading to this dialog (for example from Pause screen), optional text component
    -   If not present, `title` will be used instead
-   `body` - optional list of body elements or a single element, see below
-   `can_close_with_escape` - can dialog be dismissed with Escape key, default `true`

##### Common Button Data

-   Most actions in dialog types share following fields that describe apperance of a button associated with that action:
-   `label` - text component
-   `tooltip` - optional text component to display when button is highlighted or hovered over
-   `width` - width of the button, positive integer with default `150`

#### Click Action

-   Common object used in dialogs to represent clickable action on a dialog
-   Fields:
    -   Common button data (see above)
    -   `on_click` - optional click event (same format as `click_event` on text components)
        -   If not present, clicking button will simply close screen without any action

##### Dialog Types

###### `minecraft:notice`

-   A simple screen with one action in footer
-   Exit action: same as `action`

Fields:

-   Common dialog fields (see above)
-   `action` - click action (see above), defaults to button with `gui.ok` label and no action or tooltip

###### `minecraft:confirmation`

-   A simple screen with two actions in footer
-   Exit action: same as `no` action

Fields:

-   Common dialog fields (see above)
-   `yes` - click action (see above) for positive outcome
-   `no` - click action (see above) for negative outcome

###### `minecraft:multi_action`

-   A scrollable list of actions arranged in columns
-   Screen also has button in footer that runs exit action and closes the screen
    -   Label will be `gui.cancel` if dialog has defined exit action and `gui.back` if it has no side effects
-   Exit action: defined in `on_cancel` field

Fields:

-   Common dialog fields (see above)
-   `actions` - non-empty list of click actions (see above)
-   `on_cancel` - optional click event (same format as `click_event` on text components)
-   `columns` - positive integer describing number of columns, default: `2`

###### `minecraft:server_links`

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

###### `minecraft:dialog_list`

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

###### `minecraft:simple_input_form`

-   A screen that accepts user inputs
-   Has a single submit action with in a footer
-   Exit action: none (submitting data closes screen, but does not run any action outside of sending data to server)

Fields:

-   Common dialog fields (see above)
-   `inputs` - non-empty list of inputs controls, see below
-   `action` - submit action, see below

###### `minecraft:multi_action_input_form`

-   A screen that accepts user inputs
-   Can have multiple submit actions
-   Has no footer, submit actions are appended to a body
-   Exit action: none (submitting data closes screen, but does not run any action outside of sending data to server)

Fields:

-   Common dialog fields (see above)
-   `inputs` - non-empty list of inputs controls, see below
-   `actions` - non-empty list of submit actions, see below

##### Dialog Body Types

-   All dialogs have a list of body elements describing contents between title and actions or inputs

Fields:

-   `type` - one of dialog body types from `minecraft:dialog_body_type` registry
-   `<type-specific>` - see below

###### `minecraft:plain_message`

-   A multiline label

Fields:

-   `contents` - text component
-   `width` - maximum width of message, positive integer with default `200`

###### `minecraft:item`

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

##### Input Control Types

-   Input dialog uses a set of controls to accept user input
-   When submitted, current value of input will be converted to a string and sent to the server as described by Submit Action section below

Fields:

-   `type` - one of input control types from `minecraft:input_control_type` registry
-   `key` - string identifier of value used when submitting data, must be a valid template argument (letters, digits and `_`)
-   `<type-specific>` - see below

###### `minecraft:text`

-   Simple text input
-   Sends current contents without modification

Fields:

-   `width` - width of input, positive integer with default: `200`
-   `label` - a text component to be displayed to the left of control
-   `label_visible` - controls label visibility, default: `true`
-   `initial` - initial contents, default: `""` (empty)

###### `minecraft:boolean`

-   A plain checkbox with a label

Fields:

-   `label` - a text component to be displayed to the right of control
-   `initial` - an initial value, default: `false` (i.e. unchecked)
-   `on_true` - a string value to send when control is checked, default: 'true'
-   `on_false` - a string value to send when control is unchecked, default: 'false'

###### `minecraft:single_option`

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

###### `minecraft:number_range`

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

##### Submit Actions

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

##### Submit Method Types

###### `minecraft:command_template`

-   This method will build a command using a provided macro template and request the server to run it (same as `minecraft:run_command` click event)
-   If the command requires permission higher than `0` (when any operator permissions are required), a confirmation dialog will be shown
-   Macro will be expanded with values from input
    -   For example, if macro is `some_command $(action)`, `action` parameter will be expanded to `id` field of a submit action
    -   Inputs not used in macro will be ignored, while macro parameters not matching any inputs will be replaced with an empty string

Fields:

-   `template` - a string with a macro template to be interpreted as a command

###### `minecraft:custom_template`

-   This method will build a custom server click action using a provided macro template and send it to the server (same as `minecraft:custom` click event)
-   Macro will be expanded with values from input
    -   Inputs not used in macro will be ignored, while macro parameters not matching any inputs will be replaced with an empty string

Fields:

-   `template` - a string with a macro template to be used as a payload
-   `id` - namespaced ID

###### `minecraft:custom_form`

-   This method will build a custom server click action from all values and request the server to run it (same as `minecraft:custom` click event)
-   Format:
    -   keys are separated from values with horizontal tabulation (`U+0009`) character
    -   key-value entries are separated with line feed (`U+000A`) character
    -   If characters `U+0009` and `U+000A` are present in any key or value, they will be escaped to `\t` and `\n`

Fields:

-   `id` - namespaced ID

##### Built-in dialogs

The built-in datapack contains some custom dialogs to provide customization of specific screens used by client

###### `minecraft:server_links`

-   Replacement for previously existing "Server Links" screen
-   Meant to simplify migration for servers that used this feature previously

###### `minecraft:custom_options`

-   Shows contents of `minecraft:pause_screen_additions` tag (see below)
-   Lets user select a specific dialog if this tag contains multiple entries
-   Note: Since this tag is meant for interoperability, any content that replaces this dialog should be careful to not hide other dialog providers

#### Dialog Command

-   New command has been added to show dialog to clients

Syntax:

-   `dialog show <targets> <dialog>` - show dialog to player(s)
    -   `<targets>` - player name, UUID or a player selector
    -   `<dialog>` - a namespaced ID from `minecraft:dialog` registry or inline dialog value as described above
    -   Returns number of players in `targets` argument
-   `dialog clear <targets>` - clean dialog for player(s), if they have any visible
    -   `<targets>` - player name, UUID or a player selector
    -   Returns number of players in `targets` argument

#### Pause Screen Configuration

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

#### Click Events

-   New click action `minecraft:custom` has been added
    -   When user clicks a component with this click action, client will send a dedicated packet `minecraft:custom_click_action` to a server
    -   The intended use is as an alternative for `run_command` to be used by modded servers without worrying about having to add custom commands
    -   This packet has no functionality on vanilla servers
    -   Fields:
        -   `id` - namespaced ID
        -   `payload` - optional string field

#### Dialog Click Event

-   New action `show_dialog` has been added
    -   When user clicks this component, a dialog will be opened for them
    -   Fields:
        -   `dialog` - a namespaced ID from `minecraft:dialog` registry or inline dialog value as described above

### Attributes

#### Ghasts `flying_speed` attribute

-   Ghasts now have a `flying_speed` attribute that affects their flying speed

### Data Components

#### `equippable` Item Component

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

Take aim for this snapshot! It's a bit smaller this week, and you might want to train a bit more to learn the new projectile mechanics! And while you are here, why not enjoy some misty peaks at a distance!

## Changes

-   Projectiles target tolerance margin now changes over time
-   Fog was tweaked for improved atmospheric perspective
-   It now becomes foggier when it rains
-   The test framework will no longer try to restart running tests after a server restart

### Projectile Targeting

-   Projectiles now have a target tolerance margin that changes over time
    -   Previously, all projectiles had a fixed 0.3 blocks target tolerance margin
    -   Now, all projectiles start with no margin for the first two ticks of their flight
    -   After that, the target margin will expand by 0.05 blocks per tick until it reaches the previous 0.3 blocks margin
    -   This allows for better precision close to the shooting player or entity, while still allowing for some collision leeway when the projectile is further away

## Technical Changes

-   The Data Pack version is now 76
-   `--quickPlaySingleplayer` command line argument can now be used without an identifier to launch into the last played world

## Data Pack Version 76

-   The scale attribute for the Happy Ghast now has a limit of `1.0`

### Entity Data

#### `tnt`

-   The entity that primed the TNT is now stored in an optional `owner` field (UUID of Living entity)

#### `vex`

-   The owner of a Vex is now stored in an optional `owner` field (UUID of Mob)

## Resource Pack Version 60

-   Panorama textures must now all be the same size, and square
-   Sounds for the Dried Ghast Block have been changed

### UI Sprites

-   The Mob Effect atlas has been removed, and sprites in the `textures/mob_effect/` folder are now included within the GUI atlas
    -   This means Mob Effect sprites now support GUI sprite scaling properties

### Shaders & Post-process Effects

#### Shader fog changes

-   The fog is now split into environmental and render-distance-based
-   Previously both those concepts were mixed in the same uniforms
-   Environmental fog is supposed to represent the "fogginess" of the environment the player is in: lava, water, and now also atmosphere
-   Render distance fog is supposed to obscure the border of visible terrain
-   Environmental fog uses spherical distance to determine its intensity, render distance fog uses cylindrical distance
-   The resulting fog value for any given vertex is the maximum of both

#### `Fog` Uniform Block

-   `FogStart` was renamed to `FogRenderDistanceStart` and now represents the render distance fog start
-   `FogEnd` was renamed to `FogRenderDistanceEnd` and now represents the render distance fog end
-   `FogEnvironmentalStart` is new and represents the start of environment-based fog
-   `FogEnvironmentalEnd` is new and represents the end of environment-based fog
-   `FogShape` was removed. Render distance fog is now cylindrical and environmental for is spherical

### Sound Events

-   `block.dried_ghast.hit` has been removed

## Fixed bugs in 25w19a

-   [MC-69821](https://bugs.mojang.com/browse/MC-69821) TNT "forgets" the player that ignited it when the world is reloaded
-   [MC-118430](https://bugs.mojang.com/browse/MC-118430) Vex summoner is not stored in NBT despite being used for AI task
-   [MC-118432](https://bugs.mojang.com/browse/MC-118432) Vex summoner is not reset once it is dead
-   [MC-277486](https://bugs.mojang.com/browse/MC-277486) Mob effect icons ignore "scaling" parameter in mcmeta files
-   [MC-277903](https://bugs.mojang.com/browse/MC-277903) Creative inventory tab icons can display item cooldown overlay
-   [MC-295690](https://bugs.mojang.com/browse/MC-295690) Players stay on fire for a while after barely touching fire
-   [MC-296432](https://bugs.mojang.com/browse/MC-296432) The ability to stand on top of happy ghasts which have a larger scale attribute becomes unreliable or even impossible
-   [MC-296460](https://bugs.mojang.com/browse/MC-296460) Debug crosshair renders incorrectly
-   [MC-296494](https://bugs.mojang.com/browse/MC-296494) The player sometimes falls from a happy ghast when reconnecting to a world
-   [MC-296701](https://bugs.mojang.com/browse/MC-296701) Transformed entities do not retain their custom\_data component
-   [MC-296709](https://bugs.mojang.com/browse/MC-296709) All non-default jukebox\_playable components are deleted from existing items when updating past 1.21.4
-   [MC-296797](https://bugs.mojang.com/browse/MC-296797) The movement of happy ghasts for non-controlling passengers is jittery
-   [MC-296813](https://bugs.mojang.com/browse/MC-296813) The panorama isn't slightly blurred anymore which causes some "flickering" effects
-   [MC-296970](https://bugs.mojang.com/browse/MC-296970) The dried ghast block has a hit sound event
-   [MC-297142](https://bugs.mojang.com/browse/MC-297142) The "Leave Bed" button is invisible
-   [MC-297235](https://bugs.mojang.com/browse/MC-297235) Clouds not fully rendered depending on angle when very high above the world
-   [MC-297271](https://bugs.mojang.com/browse/MC-297271) Waypoint packet is handled by network thread instead of render thread, causing crash
-   [MC-297339](https://bugs.mojang.com/browse/MC-297339) Sign text is non-functional
-   [MC-297347](https://bugs.mojang.com/browse/MC-297347) Tamed animals no longer sit when their owner changes dimension
-   [MC-297461](https://bugs.mojang.com/browse/MC-297461) Equipment and sleeping pos data cannot be loaded in 1.21.4, but can be loaded in 1.21.5 to bees spawned from bee nest and bee hive

---

Leads have become a hot commodity in the recent snapshots and this week they are getting an updated recipe, making it much easier to craft leads for all your leashing needs. The dried ghast is also getting a new recipe, based on soul sand and ghast tears. We have updated Unifont to 16.0.03 and this time we included glyphs from Unifont's Private Use Areas. That means creators will now be able to use scripts in the Under-ConScript Unicode Registry like Tengwar or Sitelen Pona.

## Changes

-   Splash Potions effect strength is now based on the distance of the hitboxes
-   The Slime Ball in the Lead recipe has been replaced with a String
-   Piglins can now give Dried Ghast Blocks when bartered with
-   The recipe for the Dried Ghast Block has been updated to now require a Soul Sand Block rather than a Bone Block

### Splash Potions

-   Splash Potions distance to affected entities now depends on the closest distance between the entity hitbox and the splash potion hitbox where it landed
    -   This means that if an entity is hit directly by the splash potion, it will receive the full effect of the potion
    -   If the entities are grouped together, they will receive the same effect strength

## Technical Changes

-   The Data Pack version is now 75
-   The Resource Pack version is now 59
-   All JSON files (in worlds, packs, configuration, etc.) are now parsed in strict mode

## Data Pack Version 75

### Entity Data

-   Added `home_pos` and `home_radius` fields to all mobs
    -   Mobs with set home position will limit their pathfinding to stay within the indicated area
    -   Some mobs, like Bats, Slimes, Magma Cubes, Phantoms and Ender Dragons may ignore it
    -   Interacting with leashes or riding may change the home position of the mob

#### Entity Tags

-   Updated `#followable_friendly_mobs` to include the Happy Ghast

## Resource Pack Version 59

-   Updated Unifont to 16.0.03

### UI Sprites

-   The `hud/locator_bar_arrow_up` and `hud/locator_bar_arrow_down` sprites are now animated with a standard `animation` definition in the corresponding `.mcmeta` files

### Font

#### Unifont

-   Updated Unifont to 16.0.03
-   Added previously omitted Unifont glyphs for Private Use Areas
    -   Those glyphs are loaded as a separate sub-font `minecraft:include/unifont_pua` and are not included in any normally used font
    -   Characters in those areas are managed by Under-CSUR (Under-ConScript Unicode Registry), which adds various scripts not present in official Unicode set, like Tengwar or Sitelen Pona

#### `unihex` Font Provider

-   Field `size_overrides` is now optional (defaults to empty list)

## Fixed bugs in 25w18a

-   [MC-200925](https://bugs.mojang.com/browse/MC-200925) Ghasts are not affected by potions thrown on their head
-   [MC-262268](https://bugs.mojang.com/browse/MC-262268) Keyboard navigation does not work in the book and quill GUI
-   [MC-264431](https://bugs.mojang.com/browse/MC-264431) #minecraft:sand tag has two minecraft:suspicious\_sand
-   [MC-278459](https://bugs.mojang.com/browse/MC-278459) unifont.json contains trailing comma
-   [MC-279284](https://bugs.mojang.com/browse/MC-279284) Experience orbs from thrown bottles o' enchanting are very prone to getting stuck inside blocks
-   [MC-279875](https://bugs.mojang.com/browse/MC-279875) Cannot diagonally climb slab through suspended scaffolding
-   [MC-280281](https://bugs.mojang.com/browse/MC-280281) Fishing bobbers rapidly jitter when attached to entities that are moving
-   [MC-280502](https://bugs.mojang.com/browse/MC-280502) Translation key snbt.parser.undescore\_not\_allowed has a typo
-   [MC-295879](https://bugs.mojang.com/browse/MC-295879) Sprint-hitting boats and then getting in them causes the boat to fall through the block underneath
-   [MC-295914](https://bugs.mojang.com/browse/MC-295914) Loot table files accept invalid JSON
-   [MC-296354](https://bugs.mojang.com/browse/MC-296354) Happy ghasts aren’t affected by potions thrown on their heads
-   [MC-296784](https://bugs.mojang.com/browse/MC-296784) The "Welcome to Minecraft" screen is missing its fade out
-   [MC-296866](https://bugs.mojang.com/browse/MC-296866) Predicates of particular namespaces failed to be accessed on /execute
-   [MC-296898](https://bugs.mojang.com/browse/MC-296898) Happy ghasts' home slightly drift over time
-   [MC-297112](https://bugs.mojang.com/browse/MC-297112) You cannot use CTRL+NUM to navigate to tabs within the configure realms menu
-   [MC-297114](https://bugs.mojang.com/browse/MC-297114) The realms menu incorrectly claims that realms are expiring soon
-   [MC-297115](https://bugs.mojang.com/browse/MC-297115) The “This is a Snapshot Realm…” box no longer renders with a black background
-   [MC-297184](https://bugs.mojang.com/browse/MC-297184) 'Realms' is lowercase in `mco.errorMessage.realmsService.configurationError`.

---

