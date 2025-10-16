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
-   [MC-297893](https://bugs.mojang.com/browse/MC-297893) prevent\_equipment\_drop enchantment effect does not work with armor.body and saddle slots
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

Second time's the charm! We're shipping 1.21.5 Release Candidate 2, fixing some final issues before releasing the Spring To Life drop tomorrow!

## Fixed bugs in 1.21.5 Release Candidate 2

-   [MC-295665](https://bugs.mojang.com/browse/MC-295665) There is no blending in new chunks
-   [MC-295688](https://bugs.mojang.com/browse/MC-295688) Piston movement is not applying block effects to entities

---

With Minecraft Live just around the corner, we are getting closer to the release of the first drop of the year. Today we're shipping the first 1.21.5 Release Candidate with a few bug fixes, which means if no new critical issues surface, this is the version we are planning to release as Minecraft: Java Edition 1.21.5.

## Fixed bugs in 1.21.5 Release Candidate 1

-   [MC-295383](https://bugs.mojang.com/browse/MC-295383) "Received missed or reordered chat message from server" string doesn't make logical sense
-   [MC-295412](https://bugs.mojang.com/browse/MC-295412) Lighting of magma block is incorrect
-   [MC-295416](https://bugs.mojang.com/browse/MC-295416) Beacon receives wrong shading from nearby blocks

---

It's Tuesday, and today we're bringing you a third pre-release for Minecraft 1.21.5, with some fixes to recently introduced issues.

## Fixed bugs in 1.21.5 Pre-Release 3

-   [MC-295387](https://bugs.mojang.com/browse/MC-295387) fireball and small\_fireball can no longer have their Owner, HasBeenShot, or LeftOwner fields modified
-   [MC-297384](https://bugs.mojang.com/browse/MC-297384) The second horn in the cold cow texture is unused by the model
-   [MC-299223](https://bugs.mojang.com/browse/MC-299223) F3 debug crosshair lost its outline
-   [MC-299543](https://bugs.mojang.com/browse/MC-299543) Experience orbs follow players in Spectator mode

---

We're shipping some crash fixes in today's pre-release.

## Technical Changes

-   The Data Pack version is now 71 since this was missed in Pre-Release 1

## Fixed bugs in 1.21.5 Pre-Release 2

-   [MC-280482](https://bugs.mojang.com/browse/MC-280482) Main menu is totally broken when using Mesa 25.0
-   [MC-296644](https://bugs.mojang.com/browse/MC-296644) Game crashes while rendering section / java.lang.NullPointerException: Cannot read field "b" because "$$3" is null
-   Additional crash fixes

---

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

What's better than shipping on a Friday? How about shipping twice on a Friday?!

Here's Release Candidate 3 for Minecraft 1.21.4, fixing some critical issues, including several crashes.

## Fixed bugs in 1.21.4 Release Candidate 3

-   [MC-276962](https://bugs.mojang.com/browse/MC-276962) JVM crash occurs when minimizing maximized window
-   [MC-277889](https://bugs.mojang.com/browse/MC-277889) Villagers' iron golem detection range is increased for villagers upgraded from 1.21.1 or earlier

---

Today we are releasing 1.21.4 Release Candidate 2 to activate Blending around the Pale Garden Biome.

If no further critical issues surface, this is the version we are planning to ship as Minecraft: Java Edition 1.21.4.

Happy Mining!

## Fixed bugs in 1.21.4 Release Candidate 2

-   [MC-278573](https://bugs.mojang.com/browse/MC-278573) Updating can cause straight biome borders with pale garden

---

After yesterday's [announcement](https://www.minecraft.net/en-us/article/the-garden-awakens-drop-date) that the The Garden Awakens drop comes out on December 3rd, today we're releasing the first release candidate!

If no new critical issues surface, this is the version we are planning to ship as Minecraft: Java Edition 1.21.4.

Happy Mining!

## Changes

-   Added language support for Popoloca

## Fixed bugs in 1.21.4 Release Candidate 1

-   [MC-278494](https://bugs.mojang.com/browse/MC-278494) Resin Bricks appears twice in "mineable/pickaxe" block tag
-   [MC-278548](https://bugs.mojang.com/browse/MC-278548) Spyglass is held incorrectly when used from the off hand

---

We are now releasing a third Pre-Release for Minecraft 1.21.4 to fix a crash and a few bugs. Watch your step before jumping!

## Fixed bugs in 1.21.4 Pre-Release 3

-   [MC-277977](https://bugs.mojang.com/browse/MC-277977) Teleporting large distances whilst gliding prevents the world from loading and player model glitchiness
-   [MC-278444](https://bugs.mojang.com/browse/MC-278444) Waterlogged resin clumps do not drop when their supporting block is broken/moved
-   [MC-278518](https://bugs.mojang.com/browse/MC-278518) Player takes damage from jumping down from one block

---

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

