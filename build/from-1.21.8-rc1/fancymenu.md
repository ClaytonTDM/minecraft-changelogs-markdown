# 1.21.8 Release Candidate 1

Hotfix coming in ho-... very cold? Today we're releasing 1.21.8 Release Candidate 1, addressing various graphical corruption and freeze issues on certain graphics devices.

As always, if you encounter any graphical issues with this Release Candidate, reports on our [Bug Tracker](https://bugs.mojang.com/projects/MC/summary) are very much appreciated!

Happy Crafting!

## Fixed bugs in 1.21.8 Release Candidate 1

-   [MC-295947](https://bugs.mojang.com/browse/MC-295947) The game screen freezes after a while on some Intel integrated graphics
-   [MC-296107](https://bugs.mojang.com/browse/MC-296107) Entities and block entities become visually corrupted after a while on some Intel integrated graphics
-   [MC-296908](https://bugs.mojang.com/browse/MC-296908) Text and texture atlases become visually corrupted after a while on some Intel integrated graphics
-   [MC-297784](https://bugs.mojang.com/browse/MC-297784) Entities are shaded incorrectly after a while on Intel graphics of Gen11 architecture
-   [MC-298903](https://bugs.mojang.com/browse/MC-298903) Items in the inventory can turn into a solid color and then disappear and text can render colored while on some Intel integrated graphics
-   [MC-298908](https://bugs.mojang.com/browse/MC-298908) Items in the inventory are lit as if from the opposite direction on some Intel integrated graphics
-   [MC-299144](https://bugs.mojang.com/browse/MC-299144) Crash with AMD graphics card when loading Resource Pack with invalid shader

---

# Minecraft 1.21.7 Release Candidate 2

Hey! We had to fix some more bugs today! Here is Release Candidate 2 for Minecraft: Java Edition 1.21.7.

## Technical Changes

-   The Data Pack version is now 81
-   The Resource Pack version is now 64

## Fixed bugs in 1.21.7 Release Candidate 2

-   [MC-298879](https://bugs.mojang.com/browse/MC-298879) The game crashes upon startup on some AMD graphics
-   [MC-299110](https://bugs.mojang.com/browse/MC-299110) Force upgrading does not write new DataVersion to converted data
-   [MC-299126](https://bugs.mojang.com/browse/MC-299126) The server crashes when certain mobs ride a turtle
-   [MC-299130](https://bugs.mojang.com/browse/MC-299130) Pack formats were not incremented in 1.21.7 rc1 after breaking changes

---

# Minecraft 1.21.7 Release Candidate 1

Today we are shipping Release Candidate 1 for 1.21.7, a hotfix release that takes care of some critical issues that managed to sneak their way into the Chase the Skies drop (1.21.6). The hotfix also includes a new music disc and a painting of the good boy Dennis. If no other critical issues are found, this will be the version for 1.21.7 that can be expected to be released soon. Happy mining!

## New Features

-   Added a painting of a good boy by artist Sarah Boeving
-   Added music disc "Lava Chicken" by Hyper Potions
    -   Drops when defeating a Baby Zombie riding a Chicken (Chicken Jockey)

## Fixed bugs in 1.21.7 Release Candidate 1

-   [MC-297748](https://bugs.mojang.com/browse/MC-297748) The moon is rendered incorrectly on some Qualcomm graphics
-   [MC-298448](https://bugs.mojang.com/browse/MC-298448) Filled maps are rendered incorrectly on some Qualcomm graphics
-   [MC-298681](https://bugs.mojang.com/browse/MC-298681) Text displays with the "shadow" tag enabled and the "see;;_;;through" tag disabled exhibit z-plane fighting at a close distance
-   [MC-298710](https://bugs.mojang.com/browse/MC-298710) TTF glyphs are incorrectly rendered over some elements
-   [MC-298832](https://bugs.mojang.com/browse/MC-298832) The breaking particles of droppers and dispensers facing up or down appear incorrect on some Qualcomm graphics
-   [MC-298856](https://bugs.mojang.com/browse/MC-298856) Blindness and darkness fog effects no longer work underwater
-   [MC-298898](https://bugs.mojang.com/browse/MC-298898) TextureAtlas leaks textures after resource reload
-   [MC-298919](https://bugs.mojang.com/browse/MC-298919) Sometimes you pass through the happy ghast when you get off while going forward
-   [MC-299017](https://bugs.mojang.com/browse/MC-299017) Text on glowing signs is not visible on some graphics
-   [MC-299071](https://bugs.mojang.com/browse/MC-299071) Memory Leak in ItemStackRenderState leads to OutOfMemoryError

---

# Minecraft 1.21.6 Release Candidate 1

As we get ready to Chase the Skies, here comes the first test flight of 1.21.6 - Release Candidate 1!

Happy Ghast(-ing)!

## Fixed bugs in 1.21.6 Release Candidate 1

-   [MC-298022](https://bugs.mojang.com/browse/MC-298022) Not signed Books and Quills with an overflowing new line at the bottom do not depict the pages' contents
-   [MC-298633](https://bugs.mojang.com/browse/MC-298633) Happy Ghast gets you stuck in blocks while riding and gets stuck in blocks upon dismount
-   [MC-298658](https://bugs.mojang.com/browse/MC-298658) Locator Bar shows inaccurate positions after respawn

---

# Minecraft 1.21.6 Pre-Release 4

We are now releasing Pre-Release 4 for Minecraft 1.21.6, with a few minor bug fixes.

Happy crafting!

## Fixed bugs in 1.21.6 Pre-Release 4

-   [MC-279417](https://bugs.mojang.com/browse/MC-279417) Luring mobs onto blocks at Y=-64 will instead make them pathfind to the highest elevation
-   [MC-298446](https://bugs.mojang.com/browse/MC-298446) The "Thunder roars" sound is no longer affected by the master volume
-   [MC-298510](https://bugs.mojang.com/browse/MC-298510) Happy ghasts stay still for a few seconds when you get off them
-   [MC-298653](https://bugs.mojang.com/browse/MC-298653) Master volume slider no longer affects /playsoud sounds with high volume

---

# Minecraft 1.21.6 Pre-Release 3

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

# Minecraft 1.21.6 Pre-Release 2

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

# Minecraft 1.21.5 Release Candidate 2

Second time's the charm! We're shipping 1.21.5 Release Candidate 2, fixing some final issues before releasing the Spring To Life drop tomorrow!

## Fixed bugs in 1.21.5 Release Candidate 2

-   [MC-295665](https://bugs.mojang.com/browse/MC-295665) There is no blending in new chunks
-   [MC-295688](https://bugs.mojang.com/browse/MC-295688) Piston movement is not applying block effects to entities

---

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

# Minecraft 1.21.4 Release Candidate 3

What's better than shipping on a Friday? How about shipping twice on a Friday?!

Here's Release Candidate 3 for Minecraft 1.21.4, fixing some critical issues, including several crashes.

## Fixed bugs in 1.21.4 Release Candidate 3

-   [MC-276962](https://bugs.mojang.com/browse/MC-276962) JVM crash occurs when minimizing maximized window
-   [MC-277889](https://bugs.mojang.com/browse/MC-277889) Villagers' iron golem detection range is increased for villagers upgraded from 1.21.1 or earlier

---

# 1.21.4 Release Candidate 2

Today we are releasing 1.21.4 Release Candidate 2 to activate Blending around the Pale Garden Biome.

If no further critical issues surface, this is the version we are planning to ship as Minecraft: Java Edition 1.21.4.

Happy Mining!

## Fixed bugs in 1.21.4 Release Candidate 2

-   [MC-278573](https://bugs.mojang.com/browse/MC-278573) Updating can cause straight biome borders with pale garden

---

# Minecraft 1.21.4 Release Candidate 1

After yesterday's [announcement](https://www.minecraft.net/en-us/article/the-garden-awakens-drop-date) that the The Garden Awakens drop comes out on December 3rd, today we're releasing the first release candidate!

If no new critical issues surface, this is the version we are planning to ship as Minecraft: Java Edition 1.21.4.

Happy Mining!

## Changes

-   Added language support for Popoloca

## Fixed bugs in 1.21.4 Release Candidate 1

-   [MC-278494](https://bugs.mojang.com/browse/MC-278494) Resin Bricks appears twice in "mineable/pickaxe" block tag
-   [MC-278548](https://bugs.mojang.com/browse/MC-278548) Spyglass is held incorrectly when used from the off hand

---

# 1.21.4 Pre-Release 3

We are now releasing a third Pre-Release for Minecraft 1.21.4 to fix a crash and a few bugs. Watch your step before jumping!

## Fixed bugs in 1.21.4 Pre-Release 3

-   [MC-277977](https://bugs.mojang.com/browse/MC-277977) Teleporting large distances whilst gliding prevents the world from loading and player model glitchiness
-   [MC-278444](https://bugs.mojang.com/browse/MC-278444) Waterlogged resin clumps do not drop when their supporting block is broken/moved
-   [MC-278518](https://bugs.mojang.com/browse/MC-278518) Player takes damage from jumping down from one block

---

# 1.21.4 Pre-Release 2

We are starting off this week with the second 1.21.4 Pre-Release, including even more bug fixes!

Happy mining!

## Technical Changes

-   The Data Pack version is now 61

## Data Pack Version 61

### Furnace, Smoker and Blast Furnace Data

-   Renamed `CookTime` to `cooking_time_spent`
-   Renamed `CookTimeTotal` to `cooking_total_time`
-   Renamed `BurnTime` to `lit_time_remaining`
-   Added field `lit_total_time` representing the total time the furnace should be lit

## Fixed bugs in 1.21.4 Pre-Release 2

-   [MC-10025](https://bugs.mojang.com/browse/MC-10025) Burn time indicator of a furnace not working correctly after reloading the world
-   [MC-197857](https://bugs.mojang.com/browse/MC-197857) Villagers trying to claim claimed beds
-   [MC-275952](https://bugs.mojang.com/browse/MC-275952) Riding a minecart above the water with Frost Walker boots on will also give the Frost Walker effect
-   [MC-277169](https://bugs.mojang.com/browse/MC-277169) Creaking moves while a player is looking at it while moving a certain way and looking through pale moss
-   [MC-278256](https://bugs.mojang.com/browse/MC-278256) Horses jumping multiple times in a row take fall damage
-   [MC-278282](https://bugs.mojang.com/browse/MC-278282) "Tried to load a DUMMY block entity"/"Tried to load a block entity" errors at specific coordinates
-   [MC-278370](https://bugs.mojang.com/browse/MC-278370) Winter drop feature flag is not added to the removed features list
-   [MC-278430](https://bugs.mojang.com/browse/MC-278430) Trim materials item tag is not deterministic in data generation
-   [MC-278497](https://bugs.mojang.com/browse/MC-278497) Using items while sneaking slows down the player way less than in previous versions

---

# Minecraft 1.21.4 Pre-Release 1

The first pre-release of Minecraft 1.21.4 is now available. Today's update and for the remainder of the 1.21.4 cycle, you will mostly see bug fixes and tweaks. In addition to that, pre-releases don't follow the regular snapshot cadence of releasing only on Wednesdays, so keep an eye out for the next pre-release.

As always, a big thank you to the community for your feedback, bugs reported, and awesome ideas throughout the snapshot series. Let the pre-releases commence!

## Technical Changes

-   The Resource Pack version is now 46
-   Similarly to block items, Spawn Eggs for entities that could execute operator-only commands now have a warning in tooltip

## Resource Pack Version 46

-   Added a way of suppressing first-person hand animation on item change for specific models
-   Unifont has been updated to 16.0.01

### Item models

-   A new field has been added to the client-side item info format (i.e. files in `/assets/*/items/*.json`)
    -   `hand_animation_on_swap` - boolean field describing if down-and-up animation should be played in first-person view when item stack is changed (either type, count or components), default: `true`
        -   only value from new item is taken into account
        -   does not control "pop" animation in GUI when item is picked or changes count

#### `minecraft:model` item model type

##### Added `minecraft:team` tint source type

-   Returns team color of context entity, if any
-   Fields:
    -   `default` - RGB value to return when there is no context entity, entity is not in a team or team has no color

##### Changed `minecraft:head` special model type

-   Added field `animation` - float controlling head animation (like Piglin ears or Ender Dragon jaw), default: `0.0`

##### Added `minecraft:view_entity` boolean property

-   When not spectating, returns `true` if context entity is the local player entity, i.e. one controlled by client
-   When spectating, returns `true` if context entity is the spectated entity
-   If context entity is not present, will return `false`
-   No fields

##### Renamed property `minecraft:holder_type` to `minecraft:context_entity_type`

**Developer's Note**: _Context entities were initially used only for compasses and clocks, which means that type is available only in rendering contexts where those items would show correct reading (see MC-186797 and related bugs). The name change has been made to better reflect that._

##### Added `minecraft:context_dimension` property

-   Returns the ID of the dimension in context, if any
-   No fields
-   Values: namespaced dimension ID (like `minecraft:overworld`)

##### Changed `minecraft:time` numeric property

-   Removed field `natural_only`
-   Added field `source` - time source, possible values:
    -   `daytime` - time of day
    -   `moon_phase` - moon phase
    -   `random` - random value

##### Changed `minecraft:compass` numeric property

-   Added value `none` to field `target` which always returns an invalid target

#### Added `minecraft:empty` item model type

-   Does not render anything
-   No fields

## Fixed bugs in 1.21.4 Pre-Release 1

-   [MC-128225](https://bugs.mojang.com/browse/MC-128225) '/data remove' can't remove the NBT "CustomName"
-   [MC-138100](https://bugs.mojang.com/browse/MC-138100) /data remove doesn't work for the Jukebox's RecordItem tag
-   [MC-179815](https://bugs.mojang.com/browse/MC-179815) Data command doesn't remove leash from a mob
-   [MC-207605](https://bugs.mojang.com/browse/MC-207605) /data remove entity ;;[;;tamed wolf;;];; Owner does not remove ownership of the wolf
-   [MC-265788](https://bugs.mojang.com/browse/MC-265788) The "Start free Snapshot Realm" element can be selected or remain selected causing its tooltip to erroneously be visible when other interfaces are open
-   [MC-278134](https://bugs.mojang.com/browse/MC-278134) The TAB key cannot be used to select messages to report after clicking the "X message(s) hidden" element
-   [MC-278193](https://bugs.mojang.com/browse/MC-278193) Baby piglins can't decide between crossbows and golden items
-   [MC-278257](https://bugs.mojang.com/browse/MC-278257) Oxygen bar animation can be interrupted by applying water breathing
-   [MC-278290](https://bugs.mojang.com/browse/MC-278290) Using items while swimming or walking underwater doesn't slow the player down
-   [MC-278300](https://bugs.mojang.com/browse/MC-278300) Creakings struck by lightning show visual fire
-   [MC-278302](https://bugs.mojang.com/browse/MC-278302) Bundle always takes out first item and ignores selected item
-   [MC-278311](https://bugs.mojang.com/browse/MC-278311) Respawned creakings from creaking hearts don't persist when the world is reloaded
-   [MC-278312](https://bugs.mojang.com/browse/MC-278312) Creakings spawned from a creaking heart can be name-tagged once again
-   [MC-278387](https://bugs.mojang.com/browse/MC-278387) Creaking respawns when going to the nether and back
-   [MC-278390](https://bugs.mojang.com/browse/MC-278390) Opening shulkers no longer trigger tripwire or pressure plates

---

# Minecraft 1.21.2 Release Candidate 2

We were so worried that you had forgotten all about us over the weekend, so we're kicking this week off with a surprise second Release Candidate for 1.21.2! Let's hope this is (fingers crossed) the last one before the full release of Bundles of Bravery.

If no other critical issues are found, this will be the version for 1.21.2 that can be expected to be released later this week.

Happy mining!

## Fixed bugs in 1.21.2 Release Candidate 2

-   [MC-277625](https://bugs.mojang.com/browse/MC-277625) Player's OnGround tag doesn't update when riding a vehicle
-   [MC-277708](https://bugs.mojang.com/browse/MC-277708) The sound of breaking leaves on a riding mob is not played In survival
-   [MC-277718](https://bugs.mojang.com/browse/MC-277718) Minecart behaviour altered even with experiments disabled
-   [MC-277732](https://bugs.mojang.com/browse/MC-277732) Block break block updates can stop working in a chunk

---

# Minecraft 1.21.2 Release Candidate 1

We missed you so much since the previous pre-release so today we're releasing Release Candidate 1. If no critical issues surface, this is the version we are planning to ship as Minecraft: Java Edition 1.21.2, the Bundles of Bravery drop.

## Fixed bugs in 1.21.2-rc1

-   [MC-273812](https://bugs.mojang.com/browse/MC-273812) Intersection chests in trial chambers not generating correctly
-   [MC-277636](https://bugs.mojang.com/browse/MC-277636) Projectiles visually fall when relogging
-   [MC-277638](https://bugs.mojang.com/browse/MC-277638) Client sometimes rejects a set passengers packet

---

# Minecraft 1.21.2 Pre-Release 5

Did we have a Pre-Release yesterday? We don't remember. But here is one anyway, fixing more bugs.

Happy mining!

## Fixed bugs in 1.21.2 Pre-Release 5

-   [MC-277630](https://bugs.mojang.com/browse/MC-277630) Recipe book is not updated when one of the available recipes is used
-   [MC-277634](https://bugs.mojang.com/browse/MC-277634) Arrows shot at walls when facing south sometimes end up vertical instead of horizontal

---

# 1.21.2 Pre-Release 4

Hello! Another day, another Pre-Release. We're releasing the fourth Pre-Release of 1.21.2, further stabilizing this version.

Happy mining!

## Fixed bugs in 1.21.2 Pre-Release 4

-   [MC-277496](https://bugs.mojang.com/browse/MC-277496) Text on maps that are in item frames render through blocks
-   [MC-277502](https://bugs.mojang.com/browse/MC-277502) Compasses do not point in correct direction when in left hand
-   [MC-277505](https://bugs.mojang.com/browse/MC-277505) Clocks are mirrored and spin in the wrong direction when in left hand
-   [MC-277513](https://bugs.mojang.com/browse/MC-277513) Item cooldowns of item stacks greater than 1 render in front of item tooltips
-   [MC-277517](https://bugs.mojang.com/browse/MC-277517) Arrows' landing points are lower than in previous versions
-   [MC-277518](https://bugs.mojang.com/browse/MC-277518) Crafting an item that has not yet been crafted removes all tabs in the recipe book other than the topmost one
-   [MC-277548](https://bugs.mojang.com/browse/MC-277548) Invisible block entities and items disappearing
-   [MC-277552](https://bugs.mojang.com/browse/MC-277552) Wandering traders look smaller than in previous versions
-   [MC-277559](https://bugs.mojang.com/browse/MC-277559) Sliding down honey blocks is still different from previous versions

---

# 1.21.2 Pre-Release 3

We are rounding off this week with the third 1.21.2 Pre-Release, including even more bug fixes!

Happy mining and have a nice weekend!

## Changes

### High Contrast Resource Pack

Added the following high contrast textures:

-   Frame and background textures for tooltips
-   Slot background and highlight textures for the Bundle tooltip

## Technical Changes

-   Resource Pack version is now 42

## Resource Pack Version 42

-   Added `container/bundle/slot_background` texture for bundle slot background

## Fixed bugs in 1.21.2 Pre-Release 3

-   [MC-277316](https://bugs.mojang.com/browse/MC-277316) Passengers dismount minecarts/boats when converting
-   [MC-277453](https://bugs.mojang.com/browse/MC-277453) Projectiles visually fall when shot in a wall with high tick rate
-   [MC-277488](https://bugs.mojang.com/browse/MC-277488) Mobs in their death animations produce the fire extinguishing sound every tick while being in lava while it's raining
-   [MC-277491](https://bugs.mojang.com/browse/MC-277491) Mobs in their death animations that are inside both water and lava produce the fire extinguishing sound every tick

---

