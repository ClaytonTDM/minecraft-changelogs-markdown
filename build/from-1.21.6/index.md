# Minecraft: Java Edition 1.21.6

Experience the joy of soaring above the Overworld with our Chase the Skies drop! This drop not only brings an exciting flying mount to Minecraft but opens up the skies for exploring, building – and more. Raise your ghastling with care and it'll let you soar with friends above the clouds once fully grown.

With 1.21.6 we are also taking steps towards adding Vibrant Visuals to Java. In this release, there are new fog improvements and clouds will extend all the way to the horizon.

Go out and explore the Overworld, build high into the sky, leash a caravan of camels together, uncover new music, and find wandering friends with the Player Locator bar.

## New Features

-   Added Happy Ghast mob
-   Added Dried Ghast block
-   Added Harness items
-   Added the Locator Bar, a new HUD element that shows the direction of other Players in multiplayer
-   Added a new Music Disc with the track "Tears" by Amos Roddy
-   Added 5 new music tracks by Amos Roddy
-   Added new advancements
-   Added Old Spelling Indonesian (Indonesian pre-reform) and Cantabrian language support

### Happy Ghast

The Happy Ghast is a new mountable flying mob.

#### Dried Ghast Block

-   The Dried Ghast block is found in Nether Fossil structures and is the first stage of the Happy Ghast mob
-   Can be crafted with 1 Soul Sand block and 8 Ghast Tears
-   When waterlogged, it undergoes 3 hydration level changes over approximately 20 minutes until it spawns a Ghastling mob
-   The hydration level decreases when it is no longer waterlogged, using the same timescale
-   The hydration level is not preserved when mined
-   Makes sounds and shows particles depending on its hydration level
-   The Dried Ghast block emits a vibration frequency of 11 when its block state changes

![A Dried Ghast block underneath a Nether Fossil in a Soul Sand Valley. In the background two players are battling angry Ghasts.](https://launchercontent.mojang.com/v2/images/1.21.6hydrationscaled.jpg)

#### Ghastling Mob

-   The Ghastling is a young version of the Happy Ghast mob
-   Spawns from a Dried Ghast block that has continuously been waterlogged for about 20 minutes
-   After spawning, the Ghastling will try and follow:
    -   Players within a 16-block radius or
    -   An adult, non-aquatic passive mob or some of the neutral mobs within a 16-block radius
-   If no player or suitable mob is close around, the Ghastling will idle around within 32 blocks from its home position where it spawned or was last interacted with
    -   It will reset its home position if it is moved more than 16 blocks away from the border of its home position
-   Can be tempted and fed using Snowballs
-   Will grow up into a Happy Ghast after about 20 minutes, or faster if fed Snowballs

![In a Savanna village, a baby Happy Ghast is being lured with a Snowball by Efe. A stay cat is also quite curious of what Efe is holding in their hands.](https://launchercontent.mojang.com/v2/images/1.21.6ghastlingscaled.jpg)

#### Happy Ghast Mob

-   Can be equipped with a Harness and then be mounted by up to four players
-   Tempted by Snowballs and Harness
    -   The Happy Ghast can only be tempted with a Harness when it has no harness equipped
-   Slowly regenerates health, with regeneration speeding up during rain, snow or when flying at the same height as clouds
-   The first player that mounts the Happy Ghast will control it, sitting above it in the front seat
    -   When controlled, the goggles of the Happy Ghast flip down to cover its eyes
-   Players mounting after the first player are placed in slots on each side of it, starting clockwise from the first player
-   Pressing the sneak key dismounts the player on top of the Happy Ghast
-   If the Happy Ghast detects players standing on top of it, it ceases all movement and rotates to the closest cardinal direction
    -   This happens regardless of whether it has a Harness equipped or not
-   When mounted on the Happy Ghast, the third-person camera is further away from the player
-   When there are no players mounted or walking on the Happy Ghast, it starts its roaming behavior
    -   If players dismount midair, the Happy Ghast will descend towards the ground before it starts roaming
    -   The roaming behavior is similar to the Ghastling, except for the radius being 64 blocks
    -   When wearing a Harness, the Happy Ghast roams closer to the home position, within a 32 block radius
    -   When leashed, the Happy Ghast has a roaming distance of 10 blocks
    -   The Happy Ghast will try to stay close to blocks when roaming
-   Cannot be bred
-   Cannot enter boats
-   Has no panic behavior when taking damage

![Ari and Efe building a castle. Ari is standing on a Happy Ghast, using it to place blocks under the balcony.](https://launchercontent.mojang.com/v2/images/1.21.6buildfromhappyghastscaled.jpg)

#### Harness Item

-   The Harness is a new item that can be equipped on a Happy Ghast to allow players to ride it
-   The Harness comes in 16 different colors
-   Can be crafted out of 3 Leather, 2 Glass blocks and 1 Wool block
    -   The Harness will have the same color as the Wool block used when crafting
-   Can be re-dyed in the crafting grid
-   Can only be equipped on a Happy Ghast
-   Allows up to 4 players to mount the Happy Ghast
-   Can be removed from the Happy Ghast using Shears when no players are mounted

### Locator Bar

The Locator Bar is a new UI element that displays the direction of other players in the world.

-   If another player is in the world (and that player is not hiding) the Locator Bar will display in the same area as experience bar
    -   When experience is gained the experience bar will appear
    -   If there are no other players in the world the experience bar will display as normal
-   Facing other players within a 120 degree range will display those players as colored indicators on the Locator Bar
    -   Other players that are above/below the screen will also display an up/down arrow together with their indicator
    -   The indicator will change to different sized icons depending on how far away the other Player is
    -   Colored indicators are randomized for each player
        -   Operators can modify the colors of indicators with the `/waypoint` command
            -   e.g.: `/waypoint modify @s color red` to set an indicator to red
        -   Players on a team will override their default indicator color with their team color
-   Players can hide by crouching, wearing a mob head or a Carved Pumpkin, or using a Potion of Invisibility
-   Players in Spectator Mode are not visible on the Locator Bar
    -   However, spectators are visible to each other
-   The Locator Bar can be toggled off by setting the `locatorBar` game rule to `false`

![Player using the locator bar to find their friends in a large cave with skeletons onlooking.](https://launchercontent.mojang.com/v2/images/1.21.6locatorbarscaled.jpg)

### Music and Sound

-   Added a new music disc:
    -   "Tears" by Amos Roddy
        -   Can be obtained by killing a Ghast with a Fireball deflected by a Player
        -   Has a comparator output of 10 when played in a Jukebox
-   Added 5 new background music tracks by Amos Roddy:
    -   "Below and Above"
    -   "Broken Clocks"
    -   "Fireflies"
    -   "Lilypad"
    -   "O's Piano"
-   Added a new sound for when a Lead snaps
-   Added new custom sounds for shearing Saddles, Horse Armor, and Carpets from Llamas
-   Added new sound volume category called "UI" for sounds played by UI elements, like button clicks
-   Music now plays even when the game is paused
-   Added an option to the Music & Sound settings that allows players to change how frequently music plays while in a game world
-   Added an option to the Music & Sound settings that enables a music toast to be shown whenever a song starts playing
    -   With this option enabled, the song that is currently playing will always be seen in the top left corner of the in-game Pause Menu

![Player harmoniously fishing in the open ocean. A Music Toast shows them listening to "Amos Roddy - Lilypad".](https://launchercontent.mojang.com/v2/images/1.21.6musictoastscaled.jpg)

### Advancements

-   Added new "Stay Hydrated!" Husbandry Advancement when a Dried Ghast block is placed into Water
-   Added "Heart Transplanter" Adventure Advancement that is unlocked when a player places a Creaking Heart with the correct alignment between two Pale Oak Log blocks

## Changes

-   Changed leash mechanics and updated recipe for Lead
-   Saddles are now craftable and shearable
-   Updated Ghast texture
-   Improvements to fog
-   Updates to music and sound
-   Improvements to the Realms configuration screen and introduced a region preference setting
-   Piglins can now give Dried Ghast blocks when bartered with
-   Splash Potions effect strength is now based on the distance of the hitboxes
-   The target tolerance margin of projectiles now changes over time
-   Changed Elytra so that while gliding, using a Firework Rocket will only be used as a boost even if it could be placed on a block
-   Spectators will now teleport together with entities that move to other dimensions, but will stop spectating them
-   Increased the third-person camera distance when spectating or riding Ghasts or Ender Dragons
-   The fix to [MC-3697](https://bugs.mojang.com/browse/MC-3697) has been partially reverted
    -   Decorative hanging entities such as paintings and item frames are now immune to explosions from submerged TNT while items and armor stands are once again vulnerable to them
-   Wolves, Sheep and Pigs now have their legs mirrored
-   The test framework will no longer try to restart running tests after a server restart
-   Clouds now exist all the way to the horizon, with an option to reduce them
-   Updated the pattern of clouds in the sky
-   Horses, Donkeys, and Mules can now be fed Carrots to heal, grow, and improve their temper
-   Updated the main screen panorama
-   Removed Herobrine

![A tamed Wolf is leading a small heard of Sheep with leads. They are being led into a small Cherry Blossom pen.](https://launchercontent.mojang.com/v2/images/1.21.6sheepleashedtowolfscaled.jpg)

### Leash Changes

-   The Slime Ball in the Lead recipe has been replaced with a String
-   Improved leash mechanics, with reworked leash physics, allowing for more stable leash connection, especially when leashed entities are not on ground
    -   When dragged on the leash, leashed objects will now orient themselves towards the entity holding the leash
    -   Using a Firework Rocket when flying with leashed entities will now break the leash connections
-   Leashes are now rendered twice as thick, matching Minecraft: Bedrock Edition
-   Leashes can now be used to leash two mobs together
    -   Sneak-interact on any mob while holding leashed mobs will leash these mobs to the entity interacted with
    -   Re-leashing an entity is prevented if the re-leashing would result in immediate leash snapping due to distance
-   Leashes can be snipped from an entity when interacting with them using Shears
    -   This applies to its own leash connection as well as all entities attached to it
    -   Dispensers can now snip leashes from entities in front of them when they are equipped with Shears
-   When leashing an already leashed mob, their previous leash snaps
-   You cannot steal leashed entities from other players
-   Interactions with a Leash Knot/Fences:
    -   Fails for entities that are not in range of the Leash Knot/Fence
    -   All entities leashed to the player will be leashed to the Leash Knot/Fence
    -   Transfers all its leashed entities to the player if the player has no entities leashed
    -   Sneak-interact only ever attaches leashes
    -   Shearing or punching the Leash Knot will result in all current connections to be broken
-   A Leash Knot requires at least one connection to exist
-   Boats and large mobs that can be leashed but cannot fit in a Boat (Horses, Donkey, Mule, Camel and Sniffer) can be leashed in a special quad connection to the Happy Ghast
    -   Happy Ghast will also show a custom layer when it's leashing something using a quad connection
    -   Entities leashed in quad connection are now rendered without slack
-   Leash snapping distance has been changed from 10 to 12 blocks
    -   Happy Ghast has a leash snapping distance of 16 blocks
    -   The distance between two leashed entities is determined based on the center of their bounding boxes, rather than their feet

![Player crafting two Leads using the new changed recipe using only five Strings.](https://launchercontent.mojang.com/v2/images/1.21.6leashcraftscaled.jpg)

### Saddle Changes

#### Crafting Saddles

-   Saddles can now be crafted with 3 Leather and 1 Iron Ingot
-   The recipe is unlocked when a player picks up their first Leather

![Player crafting a Saddle using the new recipe using three Leather and one Iron Ingot.](https://launchercontent.mojang.com/v2/images/1.21.6saddlecraftscaled.jpg)

#### Removing Saddles and Equipment

-   Saddles, Horse Armor, Harnesses and Carpets can now be removed from the mobs by using Shears
    -   This does not work in case the mob has a rider, or if the player is crouching
    -   Saddles cannot be removed from Ravagers using Shears
-   Dispensers with Shears cannot remove Saddles, Horse Armor, Harnesses or Carpets equipped on mobs
-   Shearing Saddles, Horse Armor, and Carpets will emit a vibration frequency of 6, along with the Unequip frequency of 4

#### Loot Table Changes

The following loot tables have had Saddles removed from them and replaced with 1-5 Leather:

-   Monster Room chests
-   Ancient City chests
-   Desert Pyramid chests
-   Jungle Pyramid chests
-   Stronghold altar chests

### Fog

-   Fog was tweaked for improved atmospheric perspective
-   It now becomes foggier when it rains
-   Fog is now applied to 3D HUD elements such as first-person player hands and items in hands

![Standing in a rainy Forest with a Jungle far in the distance. Clouds stretching as far as the eye can see.](https://launchercontent.mojang.com/v2/images/1.21.6rainfogscaled.jpg)

### Ambient Desert Block Sounds Changes

-   Ambient sand sounds no longer require sky access to play
-   Ambient sand sounds now have a slightly decreased chance to play
-   Terracotta blocks no longer trigger ambient sand sounds
-   Sand blocks no longer trigger ambient wind sounds
-   Terracotta blocks no longer trigger ambient wind sounds
-   Short Dry Grass and Tall Dry Grass can now trigger ambient wind sounds when above 2 Sand, Red Sand or Terracotta blocks
-   Dead Bush ambient sounds now have a slightly increased chance of playing

### Music and Sound

-   The following sound categories have been renamed:
    -   Friendly Creatures -> Friendly Mobs
    -   Hostile Creatures -> Hostile Mobs
-   Rules for when ambient desert blocks sounds play have been tweaked

### Realms

-   Changed the layout of the Realms configuration screen to use tabs
    -   The Worlds tab allows changes to any of the world slots, creating new worlds and changing their settings
    -   The Players tab allows management of the players that have access and their level of access to the Realm
    -   The Subscription tab allows management of the Realms subscription
    -   The Settings tab allows changing the settings of the Realm
-   Introduced a Region Preference setting that allows for more granular control over what region a Realm is hosted in
-   Changed wording for `Close`/`Open` Realm to `Temporarily close`/`Reopen` Realm
-   Added the Realms logo to the Realms loading screens
-   Added region information when connecting to a Realm

![A new user interface for configuring your Realm.](https://launchercontent.mojang.com/v2/images/1.21.6realmsscaled.jpg)

### Projectile Targeting

-   The target tolerance margin of projectiles now changes over time
    -   Previously, all projectiles had a target tolerance margin of 0.3 blocks
    -   Now, all projectiles start with no margin for the first two ticks of their flight
    -   After that, the target margin will expand by 0.05 blocks per tick until it reaches the previous 0.3 blocks margin
    -   This allows for better precision close to the shooting player or entity, while still allowing for some collision leeway when the projectile is further away

### Splash Potions

-   Splash Potions distance to affected entities now depends on the closest distance between the entity hitbox and the splash potion hitbox where it landed
    -   This means that if an entity is hit directly by the splash potion, it will receive the full effect of the potion
    -   If the entities are grouped together, they will receive the same effect strength

## Technical Changes

-   The Data Pack version is now 80
-   The Resource Pack version is now 63
-   All JSON files (in worlds, packs, configuration, etc.) are now parsed in strict mode
-   Pressing F3 + V now prints client-side version information
-   "Command Syntax" report now contains information about required permission level
-   `--quickPlaySingleplayer` command line argument can now be used without an identifier to launch into the last played world

## Data Pack Versions 72 Through 80

-   Dimension Type definitions have a new optional field, `cloud_height` that indicates on what y-level the clouds start in the dimension
-   New `version` command has been added
-   New `datapack create` subcommand has been added
-   Added a way to display very simple dialogs to users
-   Added a Server-authoritative Waypoint broadcasting system for controlling the Locator Bar behavior for Players
-   Added `custom` - a new `click_event` action type for text components
-   New optional fields `can_be_sheared` and `shearing_sound` have been added to the `equippable` item component
-   Added `player_sheared_equipment` advancement trigger

### Commands

#### Added `version`

Prints the current version information on the server side.

-   Takes no arguments
-   Available in singleplayer or for server operators

#### Added `datapack create`

Creates a new empty directory data pack for the current world.

-   The supported pack version is always equal to one supported by the game
-   Available only to server owners
-   Syntax: `datapack create <id> <name>`
    -   `id` - new pack name, must be a valid directory name
    -   `name` - text component to be placed in `description` in `pack.mcmeta`

#### Modified `playsound`

-   Added new category `ui`
    -   Sounds in this category will continue playing when paused, similarly to `music`

#### Added `waypoint`

This is a new command for querying and modifying waypoints.

    waypoint list
    
    waypoint modify <entity-selector> color <color>
    waypoint modify <entity-selector> color hex <hex-color>
    waypoint modify <entity-selector> color reset
    waypoint modify <entity-selector> style <waypoint_style/resource>
    waypoint modify <entity-selector> style reset
    

Arguments:

-   `entity-selector`: For selecting entities that are transmitting as waypoints (see `waypoint_transmit_range` attribute)
-   `color`: Overrides the Locator Bar icon color for this waypoint
-   `hex <hex-color>` arguments are in web format (RRGGBB)
    -   Red is either `hex F00` or `hex FF0000`
    -   Cornflower blue is `hex 6495ED`
-   `style`: For changing the icon spriteset and selection distances
    -   `set <waypoint_style/resource>` changes the style to a specific asset under `waypoint_style/` (see Waypoint Styles section below)
    -   `reset` will restore the default icon behavior of the Locator Bar

### Waypoint Broadcasting

The Locator Bar works through a server-controlled Waypoint system. Waypoints are received by Players, and connections between Waypoints and Players are managed by the multiplayer server.

-   By default, all Players transmit a Waypoint from themselves, and all Players receive all Waypoints
-   Individual Players can have their transmission and receive ranges controlled by the `waypoint_transmit_range` and `waypoint_receive_range` attributes

### Dialogs

-   Added a way to display simple modal dialogs to a user
-   Dialogs are stored in a `minecraft:dialog` registry, but can also be defined inline
-   Dialogs are an experimental feature
-   To avoid user confusion, dialog screens are marked with a warning sign next to the title
    -   Clicking on this warning leads to a screen that explains to user that this screen is provided by custom content
    -   It also gives the user an option to leave the current world to avoid them being locked in an infinite loop of dialogs
    -   If a new dialog is received by the client while warning screen is visible, it will not replace it, but when user clicks the "Back" button, the new dialog will be restored instead
-   Dialogs can be displayed by server in `play` and `configuration` connection phases
    -   However, only inline registries are allowed in `configuration`, since registries are not yet available in that phase
    -   Additionally, `run_command` click event is not available in `configuration` phase
-   Dialogs by default will close after the Escape key is pressed
    -   When this happens, dialog will run action specific to dialog type described as "exit action" below
    -   This behavior is configurable
-   When the dialog screen is closed, the game goes back to previously displayed non-dialog screen or back to gameplay
    -   That means that new dialogs always replace already opened ones, if any
-   Dialogs can be configured to be accessible from Pause menu
    -   This replaces and expands the "Server Links" button added in previous versions
-   New key bind called "Quick Actions" has been added to allow accessing content-configured dialogs
-   Most dialogs follow a common layout, however exact contents depend on type:
    -   Header with title and warning button
    -   Body elements, scrollable if needed:
        -   messages and items
        -   inputs
        -   actions buttons
    -   Optional footer, contains main buttons and submit actions

> **Developer's Note**: _Dialogs are not supposed to fully describe any in-game UI, but just to allow custom content to display simple messages and get input from users. This feature is intentionally limited to match that use case._

![An example of a custom Dialog screen.](https://launchercontent.mojang.com/v2/images/1.21.6customdialogscaled.jpg)

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
-   `inputs` - optional list of inputs, see below
-   `can_close_with_escape` - can dialog be dismissed with Escape key, default `true`
-   `pause` - should the dialog screen pause the game in single-player mode, default: `true`
-   `after_action` - additional operation performed on dialog after click or submit actions, default: `close`
    -   `close` - closes dialog and returns to previous non-dialog screen (if any)
    -   `none` - do nothing, i.e., keep the current screen open
        -   only available if `pause` is `false` to avoid locking the game in single-player mode
    -   `wait_for_response` - replace the current dialog with a "Waiting for Response" screen
        -   this option is intended to prevent users from sending multiple actions on laggy connections
            -   servers are expected to eventually replace this screen with a new dialog
        -   to avoid accidental locking, a "Back" button will become active after 5 seconds
            -   clicking this button will continue as if the dialog was closed (i.e., game returns to the previous non-dialog screen, if any)
        -   "Waiting for Response" screen will unpause the game in single-player mode to avoid locking the game

##### Dialog Types

###### `minecraft:notice`

-   A simple screen with one action in footer
-   Exit action: same as `action`

Fields:

-   Common dialog fields (see above)
-   `action` - main action (see below), defaults to a button with `gui.ok` label and no action or tooltip

###### `minecraft:confirmation`

-   A simple screen with two actions in footer
-   Exit action: same as `no` action

Fields:

-   Common dialog fields (see above)
-   `yes` - action (see below) for positive outcome
-   `no` - action (see below) for negative outcome

###### `minecraft:multi_action`

-   A scrollable list of actions arranged in columns
-   Screen can have optional exit action that will appear in footer
-   Exit action: same as `exit_action`, if present

Fields:

-   Common dialog fields (see above)
-   `actions` - non-empty list of actions (see below)
-   `exit_action` - optional action (see below) in footer
-   `columns` - positive integer describing number of columns, default: `2`

###### `minecraft:server_links`

-   A scrollable list of links received from server in `minecraft:server_links` packet, arranged in columns
-   Note: this is a replacement for the previous Server Links screen, but now with an additional body
-   Exit action: same as `exit_action`, if present

Fields:

-   Common dialog fields (see above)
-   `exit_action` - optional action (see below) in footer
-   `columns` - positive integer describing number of columns, default: `2`
-   `button_width` - width of buttons in the list, integer from `1` to `1024` (inclusive) with default `150`

###### `minecraft:dialog_list`

-   A scrollable list of buttons leading directly to other dialogs, arranged in columns
    -   Titles of those buttons will be taken from `external_title` fields of targeted dialogs
-   Exit action: same as `exit_action`, if present

Fields:

-   Common dialog fields (see above)
-   `dialogs` - dialog, a list of dialogs or a dialog tag
-   `exit_action` - optional action (see below) in footer
-   `columns` - positive integer describing number of columns, default: `2`
-   `button_width` - width of buttons in the list, integer from `1` to `1024` (inclusive) with default `150`

##### Dialog Body Types

-   All dialogs have a list of body elements describing contents between title and actions or inputs
-   Hover and click events on text components within bodies function as expected
    -   Click events are handled by dialog screen like any other action - that means it will also run `after_action`

Fields:

-   `type` - one of dialog body types from `minecraft:dialog_body_type` registry
-   `<type-specific>` - see below

###### `minecraft:plain_message`

-   A multiline label

Fields:

-   `contents` - text component
-   `width` - maximum width of message, integer from `1` to `1024` (inclusive) with default `200`

###### `minecraft:item`

-   Item with optional description
    -   If a description is present, it will be rendered to the right of item
-   The Item will be rendered as if it was in inventory slot
-   The Item is not scaled even if `width` and `height` are set to values other than default

Fields:

-   `item` - item stack with count
-   `description` - optional object with fields:
    -   `contents` - text component
    -   `width` - maximum width of contents, integer from `1` to `1024` with default `200`
    -   Can also just be text component
-   `show_decorations` - if `true`, count and damage bar will be rendered over the item, default: `true`
-   `show_tooltip` - if `true`, item tooltip will show up when item is hovered, default: `true`
-   `width` - horizontal size of element, integer from `1` to `256` (inclusive) with default: `16`
-   `height` - vertical size of element, integer from `1` to `256` (inclusive) with default: `16`

##### Input Control Types

-   Dialog can contain a set of controls that accept user input
-   When submitted, the current value of the input will be used to build response to the server according to action selected by user (see below)
    -   When a value is inserted into a macro, template substitution form is used
    -   When a value is sent as a tag, tag form is used

Fields:

-   `type` - one of input control types from `minecraft:input_control_type` registry
-   `key` - string identifier of value used when submitting data, must be a valid template argument (letters, digits and `_`)
-   `<type-specific>` - see below

###### `minecraft:text`

-   A simple text input
-   Output values:
    -   As template substitution: contents with special characters escaped to fit in a SNBT literal (note: both `'` and `"` are escaped)
    -   As tag: a string tag with contents without modification

Fields:

-   `width` - width of the text input, integer from `1` to `1024` (inclusive) with default: `200`
-   `label` - a text component to be displayed to the left of control
-   `label_visible` - controls label visibility, default: `true`
-   `initial` - initial contents, default: `""` (empty)
-   `max_length` - maximum length of the text input, positive integer with default of 32
-   `multiline` - if present, allows users to input multiple lines, optional object with fields:
    -   `max_lines` - if present, limits maximum lines, optional positive integer
    -   `height` - height of input, optional integer in range `1` to `512`
        -   If this field is omitted, but `max_lines` is present, the height will be chosen to fit the maximum number of lines (but can't exceed `512`)
        -   If this and `max_lines` are both omitted, it will default to a height that fits 4 lines

###### `minecraft:boolean`

-   A plain checkbox with a label
-   Output values:
    -   As template substitution: `on_true` when checked, `on_false` when unchecked
    -   As tag: `1b` when checked, `0b` when unchecked

Fields:

-   `label` - a text component to be displayed to the right of control
-   `initial` - an initial value, default: `false` (i.e., unchecked)
-   `on_true` - a string value to send when control is checked, default: `true`
-   `on_false` - a string value to send when control is unchecked, default: `false`

###### `minecraft:single_option`

-   A button that cycles between a set of options when clicked
-   Output values:
    -   As template substitution: contents of `id` field of currently selected option
    -   As tag: a string tag with contents of `id` field of currently selected option

Fields:

-   `label` - a text component to be displayed on the button
-   `label_visible` - if `true`, label will be incorporated into button text, default: `true`
-   `width` - width of the button, integer from `1` to `1024` (inclusive) with default: `200`
-   `options` - a list of objects with fields:
    -   `id` - a string value to send on submit
    -   `display` - a text component to display on button, optional (if not present, `id` is used)
    -   `initial` - an optional boolean flag that selects initial option (only one option can have this be set to `true`)
    -   Additionally, the list might also contain a plain string - in that case it's equivalent to a single entry with field `id` set to that string and other fields set to default

###### `minecraft:number_range`

-   A slider for picking a numeric value out of some range
-   Sends currently selected value
-   Output values:
    -   As template substitution: text representation of current value
        -   Whole numbers will be sent without decimal point
    -   As tag: a float tag with current value

Fields:

-   `label` - a text component to be used as a slider label
-   `label_format` - a translation key to be used for building label (first argument is contents of `label` field, second argument is current value), default: `options.generic_value`
-   `width` - width of input, integer from `1` to `1024` (inclusive) with default: `200`
-   `start` - start value (when slider is in leftmost position) (inclusive), float
-   `end` - end value (when slider is in rightmost position) (inclusive), float
-   `initial` - initial value of the slider, float, defaults to the middle of slider range
-   `step` - step size, optional positive float
    -   If present, only values of `initial + <any integer> * step` will be allowed
    -   If absent, any value from range the is allowed

#### Actions

Dialogs have at least one action, presented to the user as a button. After every action dialog will always evaluate contents of `after_action` field (see above).

Fields:

-   `label` - a button label, text component
-   `tooltip` - an optional text component to display when the button is hovered or focused
-   `width` - the width of the button, integer from `1` to `1024` (inclusive) with default `150`
-   `action` - an action to perform when the button is clicked, optional object with fields:
    -   `type` - value from `minecraft:dialog_action_type` registry
    -   `<type-specific>` - see below, depends on `type`

##### Static Dialog Action Types

All existing `click_event` actions (except for `open_file`) are included as dialog action types.

Uses same format as `click_event` on text components (but with `action` replaced with `type`) For example, when using `show_dialog`, the entry for action button will look like this:

    {
        "label": "some label",
        "action": {
            "type": "show_dialog",
            "dialog": "some:id"
        }
    }
    

##### `minecraft:dynamic/run_command` Action Type

-   This action will build a `run_command` event using a provided macro template
-   The macro will be expanded with string values from inputs
    -   For example, if the macro template is `some_command $(some_input)`, the string value from input with `key` of `some_input` parameter will be used for the template expansion
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

##### Built-in Dialogs

The built-in datapack contains some custom dialogs to provide customization of specific screens used by the client.

###### `minecraft:server_links`

-   Replacement for the previously existing "Server Links" screen
-   Meant to simplify migration for servers that previously used this feature

###### `minecraft:custom_options`

-   Shows contents of `minecraft:pause_screen_additions` tag (see below)
-   Allows the user to select a specific dialog if this tag contains multiple entries
-   Note: Since this tag is meant for interoperability, any content that replaces this dialog should be careful not to hide other dialog providers

#### Dialog Command

-   New command has been added to show dialog to clients

Syntax:

-   `dialog show <targets> <dialog>` - show dialog to player(s)
    -   `<targets>` - player name, UUID or a player selector
    -   `<dialog>` - a namespaced ID from `minecraft:dialog` registry or inline dialog value as described above
    -   Returns the number of players in `targets` argument
-   `dialog clear <targets>` - clean dialog for player(s), if they have any visible
    -   `<targets>` - player name, UUID or a player selector
    -   Returns the number of players in `targets` argument

#### Pause Screen Configuration

-   A data pack can request some of the available dialogs to be accessible from Pause screen
-   This feature replaces the "Server Links" button and is placed on Pause screen according to the same rules
-   Buttons leading to dialogs exposed in this way will use label described in `external_title` field
-   This feature is configured by `minecraft:pause_screen_additions` dialog tag:
    -   If this tag is not specified or is empty but the server has sent `server_links` packet, the tag will be handled as if it contained `minecraft:server_links` dialog
        -   Note: this matches previous Server Links feature behavior
        -   If this dialog is removed, the tag remains empty
    -   If this tag is still empty, the button will not be visible ("Send Feedback" and "Report Bugs" buttons are visible instead)
    -   If this tag has a single element, the pause screen button will lead directly to that dialog
    -   If this tag has multiple elements, the pause screen button will lead to a `minecraft:custom_options` dialog which (by default) lets user select one of the tag elements
        -   If this dialog is removed, the button is will not be visible

#### Quick Actions Key Bind

-   A new key bind has been added that allows users to access a set of dialogs
-   Default key: `G`
-   This feature is configured by `minecraft:quick_actions` dialog tag
    -   If this tag is empty, the key bind will do nothing
    -   If this tag has a single element, the key bind will open that dialog
    -   If this tag has multiple elements, the key bind will lead to `minecraft:quick_actions` dialog which (by default) lets user select one of the tag elements
        -   If this dialog is removed, the key bind will do nothing
-   This option is intended for use in custom content and by servers, so this tag is empty in the Vanilla pack

### Text Components

#### Click Events

-   Users will now be prompted for confirmation before executing a command from the `run_command` click action in books and chat if the command can't be parsed or requires elevated permissions (i.e., higher than 0)

##### Added `minecraft:custom`

-   A new click action called `minecraft:custom` has been added
    -   When user clicks a component with this click action, the client will send a dedicated packet `minecraft:custom_click_action` to a server
    -   The intended use is as an alternative for `run_command` to be used by modded servers without worrying about having to add custom commands
    -   This packet has no functionality on Vanilla servers
    -   Fields:
        -   `id` - namespaced ID
        -   `payload` - optional tag field

##### Added `minecraft:show_dialog`

-   A new action called `show_dialog` has been added
    -   When user clicks this component, a dialog will be opened for them
    -   Fields:
        -   `dialog` - a namespaced ID from `minecraft:dialog` registry or inline dialog value as described above

### Game Rules

#### Added `locatorBar`

-   Default is `true`: enabling the Locator Bar
-   Changing to `false` will remove all existing Waypoints from all players

### Attributes

#### Added `camera_distance`

-   Default value: `4.0`
-   Modifies the distance at which the camera is placed away from the player or spectated entity when in a third-person view
-   If the entity being ridden has a larger `camera_distance` attribute, that distance will be used
-   This distance is multiplied by the `scale` attribute to get a final target camera distance

#### Added `waypoint_transmit_range` and `waypoint_receive_range`

-   Default: `0.0`, Minimum: `0.0`, Maximum: `60000000.0`
    
-   Players have a default transmission and reception range of 60,000,000
    
-   Mobs with a transmission range above zero will send waypoint packets to nearby receivers that are within that range
    
-   Similarly, receivers only receive waypoints that are inside their reception range (and receive nothing if that range is zero) Examples:
    
-   `/attribute @s minecraft:waypoint_transmit_range base set 0` will prevent a player from transmitting (hiding them)
    
-   `/attribute @s minecraft:waypoint_transmit_range base set 80` will only let a player transmit up to 80 blocks (hiding them from players further than that)
    
-   `/attribute @s minecraft:waypoint_receive_range base set 0` will prevent a player from receiving (turns off their Locator Bar)
    
-   `/attribute @s minecraft:waypoint_receive_range base set 120` will only let a player see Locator Bar dots that are within 120 blocks (hiding all players further than that)
    

#### Changed `flying_speed`

-   The `flying_speed` attribute now also applies to Ghasts and Happy Ghasts

### Data Components

#### `equippable` Item Component

-   Added a new optional field: `can_be_sheared` (boolean)
    -   If `true`, players can use Shears to remove this equippable item from a target mob by right-clicking, provided all other shearing conditions are satisfied
    -   If not specified, it defaults to `false`
-   Added a new optional field: `shearing_sound` (sound event)
    -   It's a sound event that plays when the equippable item is sheared
    -   If not specified, it defaults to the `item.shears.snip` sound event

#### `attribute_modifiers` Item Component

-   Added an optional `display` field to `attribute_modifiers` entries
    -   There are 3 `display` types:
        -   `default` - Current behavior of showing the calculated attribute modifier values on the tooltip
        -   `hidden` - Does not show the attribute modifier entry
        -   `override` - Replaces the shown attribute modifier text
            -   Contains a single field `value` for the text contents to show for this attribute modifier entry

#### `painting/variant` Item Component

-   No longer accepts inline variants

### Entity Data

-   Added the `home_pos` and `home_radius` fields to all mobs
    -   Mobs with set home position will limit their pathfinding to stay within the indicated area
    -   Some mobs, such as Bats, Slimes, Magma Cubes, Phantoms and Ender Dragons may ignore it
    -   Interacting with leashes or riding may change the home position of the mob

#### `area_effect_cloud`

-   The `Particle` field has been renamed to `custom_particle`, and now always functions as an exact override for the default colored `entity_effect` particle
    -   The field will not be written if no override is specified
    -   The color will no longer be inherited from the potion contents when specifying the `entity_effect` or `tinted_leaves` particle types

#### `tnt`

-   The entity that primed the TNT is now stored in an optional `owner` field (UUID of Living entity)

#### `vex`

-   The owner of a Vex is now stored in an optional `owner` field (UUID of mob)

### Advancements

Added `minecraft:player_sheared_equipment` trigger

-   Can Trigger when a player shears off a shearable equipment from an Entity
-   Conditions:
    -   `item` - Item that is sheared
    -   `entity` - The entity that was sheared

### Tags

#### Block Tags

-   Added `#triggers_ambient_desert_dry_vegetation_block_sounds` - blocks that can trigger ambient desert dry vegetation sounds to play from blocks above
-   Added `#happy_ghast_avoids` - blocks that Happy Ghasts avoid getting close to
-   `#plays_ambient_desert_block_sounds` has been renamed to `#triggers_ambient_desert_sand_block_sounds`
-   Added `triggers_ambient_dried_ghast_block_sounds` - blocks that can trigger ambient Dried Ghast sounds to play when a Dried Ghast block is placed on them

#### Item Tags

-   Added `#happy_ghast_food` - items that can be used to feed Happy Ghasts
-   Added `#happy_ghast_tempt_items` - items that can be used to tempt Happy Ghasts

#### Entity Tags

-   Added `#can_equip_harness` - entities that can equip the Harness items
-   Added `#followable_friendly_mobs` - non-baby entities that will be followed by Baby Happy Ghasts

## Resource Pack Versions 56 Through 63

-   The game will now consistently respect the `blur` texture parameter in `.png.mcmeta` files
-   All core shader uniforms are now uniform blocks
-   The cloud texture (`clouds.png`) can no longer be colored
-   Cube rotations in block models are no longer limited to multiples of 22.5 degrees
-   Updated Unifont to 16.0.03
-   Panorama textures must now all be the same size, and square
-   Added `oversized_in_gui` item model field
-   Added new player head special model type

### Waypoint Styles

These define custom icons to be displayed on the Locator Bar and are within the `waypoint_style/` asset directory.

-   `near_distance` and `far_distance` are optional and default to the values `128` and `332` respectively
    -   `far_distance` distance must be greater than `near_distance`
-   `sprites` is a list of at least one sprite IDs within the prefix of `hud/locator_bar_dot/` (the directory `textures/gui/sprites/hud/locator_bar_dot`)
-   An example "bowtie" waypoint style is provided and accessible via the command:
    -   `/waypoint modify <entity-selector> style set bowtie`
-   When the distance to the waypoint is less than `near_distance`, the first sprite in the list will be selected
-   When the distance to the waypoint is greater than `far_distance`, the last sprite in the list will be selected
-   Between this range, sprites will be selected based on the linear progress between the near and far distances

### Sounds

-   Changed location on the sounds for Glow Squid, Squid, Guardian, Horse, Rabbit and Pufferfish from `entity` folder to the `mob` folder
-   Added `entity/leashknot/break` for when a Lead snaps
-   The following sounds have been renamed:
    -   `entity/leashknot/break1` -> `entity/leashknot/unleash1`
    -   `entity/leashknot/break2` -> `entity/leashknot/unleash2`
    -   `entity/leashknot/break3` -> `entity/leashknot/unleash3`
    -   `entity/leashknot/place1` -> `entity/leashknot/leash1`
    -   `entity/leashknot/place2` -> `entity/leashknot/leash2`
    -   `entity/leashknot/place3` -> `entity/leashknot/leash3`
-   The following sounds have been added for shearing Saddles, Horse Armor, and Carpets
    -   `mob/horse/armor_unequip`
    -   `mob/horse/saddle_unequip`
    -   `mob/llama/unequip`

#### Sound Events

-   `block.sand.wind` has been renamed to `block.dry_grass.ambient`
-   `entity.leash_knot.break` had been replaced with `item.lead.break` and `item.lead.untied`
-   `entity.leash_knot.place` has been renamed to `item.lead.tied`
-   The following sound events have been added:
    -   `block.dried_ghast.break`
    -   `block.dried_ghast.step`
    -   `block.dried_ghast.fall`
    -   `block.dried_ghast.ambient`
    -   `block.dried_ghast.ambient_water`
    -   `block.dried_ghast.place`
    -   `block.dried_ghast.place_in_water`
    -   `block.dried_ghast.transition`
    -   `entity.ghastling.ambient`
    -   `entity.ghastling.death`
    -   `entity.ghastling.hurt`
    -   `entity.ghastling.spawn`
    -   `entity.happy_ghast.ambient`
    -   `entity.happy_ghast.death`
    -   `entity.happy_ghast.hurt`
    -   `entity.happy_ghast.riding`
    -   `entity.happy_ghast.equip`
    -   `entity.happy_ghast.unequip`
    -   `entity.happy_ghast.harness_goggles_up`
    -   `entity.happy_ghast.harness_goggles_down`
    -   `item.horse_armor.unequip`
    -   `item.llama_carpet.unequip`
    -   `item.shears.snip`
    -   `item.saddle.unequip`

### UI Sprites

-   The mob effect atlas has been removed, and sprites in the `textures/mob_effect/` folder are now included within the GUI atlas
    -   This means mob effect sprites now support GUI sprite scaling properties
-   Added `icon/music_notes` and `toast/now_playing` sprites

### Font

#### Unifont

-   Updated Unifont to 16.0.03
-   Added previously omitted Unifont glyphs for Private Use Areas
    -   Those glyphs are loaded as a separate sub-font `minecraft:include/unifont_pua` and are not included in any normally used font
    -   Characters in those areas are managed by Under-CSUR (Under-ConScript Unicode Registry), which adds various scripts not present in official Unicode set, like Tengwar or Sitelen Pona

#### `unihex` Font Provider

-   The `size_overrides` field is now optional (defaults to empty list)

### Equipment Assets

-   Added new `happy_ghast_body` layer type, rendering in the body slot of the Happy Ghast

### Item Models

-   Item model definitions now have a boolean field `oversized_in_gui` which is `false` by default
    -   If `true`, the item model will be allowed to be bigger than its item slot
    -   If `false`, the item model will be clipped to the item slot size when being rendered in gui
    -   This ability of items being rendered outside their slots should not be considered officially supported, it was temporarily restored as an exception since many servers are relying on it
    -   At some point in the future we hope to replace it with an officially supported way of achieving similar functionality
-   Introduced new item model `minecraft:player_head` to handle player profile texture loading and rendering
-   Removed support for `minecraft:profile` from `minecraft:head`

#### `minecraft:player_head` Special Model Type

-   Renders a player head
-   Uses profile from `minecraft:profile` component to load a texture. Renders a default texture until the profile texture is fully loaded
-   No fields

#### `minecraft:head` Special Model Type

-   No longer supports profile from `minecraft:profile` component to load a player texture
-   Renders a default player texture when `kind` is `player` and no texture override is supplied
-   Fields remain unchanged

### Block Models

-   `elements[].rotation.angle` value in block models is no longer limited to multiplies of `22.5` degrees and can now be any angle from `-45` to `+45`

### Shaders & Post-process Effects

> **Developer's Note**: _Although it is possible in Resource Packs, overriding Core Shaders is considered as unsupported and not an intended Resource Pack feature. These shaders exist as part of the internal implementation of the game, and as such, may change at any time as the game's internals evolve. We understand that overriding Core Shaders is used for very cool Resource Pack features, many of which lack supported alternatives. We would like to provide better, supported alternatives in the future._

-   All built-in uniforms are now uniform blocks instead of opaque loose uniforms
-   Custom uniforms provided to post-process shaders are now uniform blocks
-   Uniform definitions inside json files are now per-block

#### Post-process Effect Definitions

-   Entries in the `targets` map have been expanded to support new properties
    -   New optional boolean field: `persistent` (default: `false`)
        -   If `true`, this render target will be persistent across frames
        -   The contents of the target will be cleared when the screen is resized
    -   New optional field: `clear_color` (default: `[0, 0, 0, 0]`)
        -   Format: integer ARGB value, or float array in order `[R, G, B, A]`
        -   When this target is created or cleared, it will be filled with this color
-   The `uniforms` values is now a list-per-block, instead of a global list
    -   e.g. `uniforms: { "UniformBlockName": [ { "type": "vec2", "value": [...] } ] }`
        -   The order of uniforms in a block **must** match the order in the shader
-   `name` as part of a uniform definition is no longer used
    -   We encourage setting it to help keep the json file organized/readable, but the game won't use it
-   `value` as part of a uniform definition replaces the old `values`, and the type depends on the `type` field
    -   This field is required
    -   `"type": "int"` needs `"value": 123` (a single int)
    -   `"type": "float"` needs `"value": 123.4` (a single float)
    -   `"type": "vec2"` needs `"value": [1.2, 3.4]` (two floats)
    -   `"type": "vec3"` needs `"value": [1.2, 3.4, 5.6]` (three floats)
    -   `"type": "ivec3"` needs `"value": [1, 2, 3]` (three ints)
    -   `"type": "vec4"` needs `"value": [1.2, 3.4, 5.6, 7.8]` (four floats)
    -   `"type": "matrix4x4"` needs `"value": [1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0, 13.0, 14.0, 15.0, 16.0]` (four rows of four columns of floats)
-   We do not validate that the uniform block is valid for a given shader, giving incorrect information will cause undefined and funky behavior

#### Post-process Effect Shaders

-   Instead of every uniform being an individual opaque type, they are now grouped in uniform blocks
    -   They will be set according to the pass definition in the json file, and may be shared across both vertex and fragment shaders
-   The list of sizes (all `vec2 *Size` uniforms) are now replaced with a single `SamplerInfo` uniform block
    -   This contains, _in order_, the size of the output texture followed by the size of every input texture
    -   The order of textures in the definition file will dictate the order of samplers in this uniform
    -   For most post chains this is just `OutSize` and `InSize` as before
    -   All sizes are `vec2`

##### `post/bits.fsh`

-   Expects a `BitsConfig` of `float Resolution` and `float MosaicSize`

##### `post/blit.fsh`

-   Expects a `BlitConfig` of `vec4 ColorModulate`

##### `post/blur.vsh` and `post/box_blur.fsh`

-   Expects a `BlurConfig` of `vec2 BlurDir` and `float Radius`

##### `post/color_convolve.fsh`

-   Expects a `ColorConfig` of `vec3 RedMatrix`, `vec3 GreenMatrix` and `vec3 BlueMatrix`

##### `post/invert.fsh`

-   Expects a `InvertConfig` of `float InverseAmount`

##### `post/rotscale.vsh`

-   Expects a `RotScaleConfig` of `vec2 InScale`, `vec2 InOffset` and `float InRotation`

##### `post/spiderclip.fsh`

-   Expects a `SpiderConfig` of `vec4 Scissor` and `vec4 Vignette`

#### Shader Fog Changes

-   The fog is now split into environmental and render-distance-based fog
-   Previously both those concepts were mixed in the same uniforms
-   Environmental fog is supposed to represent the "fogginess" of the environment the player is in
    -   e.g. lava, water, and now also atmosphere
-   Render distance fog is supposed to obscure the border of visible terrain
-   Environmental fog uses spherical distance to determine its intensity, render distance fog uses cylindrical distance
-   The resulting fog value for any given vertex is the maximum of both

#### `Globals` Uniform Block

-   Available through `#moj_import <minecraft:globals.glsl>` for convenience
-   Most shaders are able to receive this uniform block, even if they don't normally use it
-   Contains `ScreenSize`, `GlintAlpha`, `GameTime` and `MenuBlurRadius` (new)
    -   `MenuBlurRadius` is the blur radius of the background when a menu is open

#### `Fog` Uniform Block

-   Available through `#moj_import <minecraft:fog.glsl>` for convenience
-   Most shaders are able to receive this uniform block, even if they don't normally use it
-   Contains `FogColor`, `FogEnvironmentalStart` (new), `FogEnvironmentalEnd` (new), `FogRenderDistanceStart` (renamed from `FogStart`), `FogRenderDistanceEnd` (renamed from `FogEnd`), `FogSkyEnd` (new) and `FogCloudsEnd` (new)
    -   `FogSkyEnd` is new and represents where the fog should end when drawing for the sky
    -   `FogCloudsEnd` is new and represents where the fog should end when drawing the clouds
    -   `FogRenderDistanceStart` is the render distance fog start
    -   `FogRenderDistanceEnd` is the render distance fog end
    -   `FogEnvironmentalStart` is new and represents the start of environment-based fog
    -   `FogEnvironmentalEnd` is new and represents the end of environment-based fog
    -   `FogShape` was removed. Render distance fog is now cylindrical and environmental fog is spherical

#### `Projection` Uniform Block

-   Available through `#moj_import <minecraft:projection.glsl>` for convenience
-   Most shaders are able to receive this uniform block, even if they don't normally use it
-   Contains `ProjMat` with no changes

#### `DynamicTransforms` Uniform Block

-   Available through `#moj_import <minecraft:dynamictransforms.glsl>` for convenience
-   Is no longer available to shaders that do not normally use it
-   Contains `ModelViewMat`, `ColorModulator`, `ModelOffset`, `TextureMat`, `LineWidth`
    -   These are very likely to change in the near future
    -   The values of some of these are often hard coded and may not make sense for a given shader, i.e., `LineWidth` in any non-line based pipeline

#### `Lighting` Uniform Block

-   Available through `#moj_import <minecraft:light.glsl>` for convenience
-   Most shaders are able to receive this uniform block, even if they don't normally use it
    -   The values may not make sense if the shader wouldn't normally expect it, however
-   Contains `Light0_Direction` and `Light1_Direction`

#### `CloudInfo` Uniform Block

-   Only available to the cloud shaders (`rendertype_clouds.vsh`/`rendertype_clouds.fsh`)
    -   Contains `CloudColor`, `CloudOffset` and `CellSize` (new)
        -   `CellSize` contains the size of an individual cloud cell

#### `LightmapInfo` Uniform Block

-   Only available to the lightmap shader (`lightmap.fsh`)
-   Contains `AmbientLightFactor`, `SkyFactor`, `BlockFactor`, `UseBrightLightmap`, `NightVisionFactor`, `DarknessScale`, `DarkenWorldFactor`, `BrightnessFactor`, `SkyLightColor` with no change in behavior

## Fixed bugs in 1.21.6

-   [MC-36696](https://bugs.mojang.com/browse/MC-36696) Clicking on the statistics button on the menu screen advances the game by 1 tick
-   [MC-69821](https://bugs.mojang.com/browse/MC-69821) TNT "forgets" the player that ignited it when the world is reloaded
-   [MC-94800](https://bugs.mojang.com/browse/MC-94800) URL shown in open URL dialog is not shortened
-   [MC-97423](https://bugs.mojang.com/browse/MC-97423) Horse temporarily stuck in jump animation if dismounted
-   [MC-103511](https://bugs.mojang.com/browse/MC-103511) Sound/Song stops playing after adjusting the volume
-   [MC-104231](https://bugs.mojang.com/browse/MC-104231) Loading a custom structure doesn't load rails correctly
-   [MC-112730](https://bugs.mojang.com/browse/MC-112730) Beacon beam and structure block render twice per frame
-   [MC-118081](https://bugs.mojang.com/browse/MC-118081) Sounds don't pause when game is paused on some UI screens
-   [MC-118430](https://bugs.mojang.com/browse/MC-118430) Vex summoner is not stored in NBT despite being used for AI task
-   [MC-118432](https://bugs.mojang.com/browse/MC-118432) Vex summoner is not reset once it is dead
-   [MC-140819](https://bugs.mojang.com/browse/MC-140819) Lectern model extends past inventory slot
-   [MC-147260](https://bugs.mojang.com/browse/MC-147260) Map icons are not displayed in the cartography table
-   [MC-148278](https://bugs.mojang.com/browse/MC-148278) You can select multiple buttons at once in the book editing GUI by repeatedly pressing Tab
-   [MC-189246](https://bugs.mojang.com/browse/MC-189246) Unable to copy and paste on title page of a Book & Quill
-   [MC-191306](https://bugs.mojang.com/browse/MC-191306) Sounds played using /playsound are played in all dimensions
-   [MC-200092](https://bugs.mojang.com/browse/MC-200092) /setworldspawn seems to ignore the 'angle' parameter
-   [MC-200925](https://bugs.mojang.com/browse/MC-200925) Ghasts are not affected by potions thrown on their head
-   [MC-217887](https://bugs.mojang.com/browse/MC-217887) Unsigned books written in 1.9-pre1 or earlier don't upgrade properly
-   [MC-224704](https://bugs.mojang.com/browse/MC-224704) Block cracks are not affected by the fog from powder snow or lava
-   [MC-228451](https://bugs.mojang.com/browse/MC-228451) You cannot move the cursor around on the title page of a book and quill
-   [MC-229483](https://bugs.mojang.com/browse/MC-229483) Withers are not affected by instant harming and healing splash potions thrown above their heads
-   [MC-230902](https://bugs.mojang.com/browse/MC-230902) Black shapes sometimes appear in the end sky at low render distance
-   [MC-236464](https://bugs.mojang.com/browse/MC-236464) Beacon beams emitted from below the player are invisible after reloading chunks
-   [MC-237015](https://bugs.mojang.com/browse/MC-237015) The cursor in the book signing GUI doesn't turn fully invisible when blinking
-   [MC-238931](https://bugs.mojang.com/browse/MC-238931) Clouds stop rendering before they are hidden by fog
-   [MC-239701](https://bugs.mojang.com/browse/MC-239701) Rendering issue when breaking ice and flying with "Chunk Builder" set to Threaded
-   [MC-240121](https://bugs.mojang.com/browse/MC-240121) "1x1\_b5.nbt" piece does not generate in woodland mansions
-   [MC-248682](https://bugs.mojang.com/browse/MC-248682) Translucent blocks moved by pistons aren't affected by fog correctly
-   [MC-248688](https://bugs.mojang.com/browse/MC-248688) Falling translucent blocks aren't affected by fog correctly
-   [MC-256411](https://bugs.mojang.com/browse/MC-256411) Clouds not fully rendered depending on angle
-   [MC-257532](https://bugs.mojang.com/browse/MC-257532) Clouds don't fill the sky after 1.18 height change
-   [MC-258336](https://bugs.mojang.com/browse/MC-258336) Frost Walker causes frequent visual corruption near chunk borders on Threaded and Semi-Blocking Chunk Builder
-   [MC-262268](https://bugs.mojang.com/browse/MC-262268) Keyboard navigation does not work in the book and quill GUI
-   [MC-264431](https://bugs.mojang.com/browse/MC-264431) #minecraft:sand tag has two minecraft:suspicious\_sand
-   [MC-266318](https://bugs.mojang.com/browse/MC-266318) Trapdoors and doors have inconsistent subtitles for being opened and closed
-   [MC-269744](https://bugs.mojang.com/browse/MC-269744) Out of memory crash when using a preset with a large layer
-   [MC-270279](https://bugs.mojang.com/browse/MC-270279) Disabled item cooldown overlay renders incorrectly over stack size number
-   [MC-272825](https://bugs.mojang.com/browse/MC-272825) Custom filled maps from 23w31a and earlier do not upgrade properly in later versions
-   [MC-275374](https://bugs.mojang.com/browse/MC-275374) Drowneds with CanBreakDoors:1b don't break doors
-   [MC-276264](https://bugs.mojang.com/browse/MC-276264) Advancement screen shadow renders below item icons
-   [MC-276665](https://bugs.mojang.com/browse/MC-276665) Music is never turning on when it's toggled in the menu
-   [MC-277369](https://bugs.mojang.com/browse/MC-277369) The draft report icon isn't initially visible when saving a report as a draft
-   [MC-277370](https://bugs.mojang.com/browse/MC-277370) The draft report icon doesn't initially disappear when a report is discarded
-   [MC-277486](https://bugs.mojang.com/browse/MC-277486) Mob effect icons ignore "scaling" parameter in mcmeta files
-   [MC-277903](https://bugs.mojang.com/browse/MC-277903) Creative inventory tab icons can display item cooldown overlay
-   [MC-277991](https://bugs.mojang.com/browse/MC-277991) The 2 brightest pixel colors on pale oak boat items are still switched
-   [MC-277992](https://bugs.mojang.com/browse/MC-277992) 1 color in the pale chest boat item is incorrect
-   [MC-278231](https://bugs.mojang.com/browse/MC-278231) Space characters at the end of a line in book and quill are invisible even if given a texture
-   [MC-278459](https://bugs.mojang.com/browse/MC-278459) unifont.json contains trailing comma
-   [MC-278466](https://bugs.mojang.com/browse/MC-278466) Bundle experiment data pack related strings are not in deprecated.json
-   [MC-278873](https://bugs.mojang.com/browse/MC-278873) The data fixer regenerates chunks containing items obtained from flower pots using Ctrl + Pick Block before version 1.13, or it crashes the game if the item is in the player's inventory
-   [MC-279284](https://bugs.mojang.com/browse/MC-279284) Experience orbs from thrown bottles o' enchanting are very prone to getting stuck inside blocks
-   [MC-279417](https://bugs.mojang.com/browse/MC-279417) Luring mobs onto blocks at Y=-64 will instead make them pathfind to the highest elevation
-   [MC-279515](https://bugs.mojang.com/browse/MC-279515) The game stalls when running the "/test clearall" command with large radiuses
-   [MC-279875](https://bugs.mojang.com/browse/MC-279875) Cannot diagonally climb slab through suspended scaffolding
-   [MC-280047](https://bugs.mojang.com/browse/MC-280047) Temperate cows use their 1.14 texture with the Programmer Art resource pack enabled
-   [MC-280266](https://bugs.mojang.com/browse/MC-280266) Firefly bushes don't produce as many, or as constant, amounts of particles as on Bedrock Edition
-   [MC-280268](https://bugs.mojang.com/browse/MC-280268) Blazes and breezes use "large" spawn eggs despite mobs of a similar size using "medium"
-   [MC-280276](https://bugs.mojang.com/browse/MC-280276) Some item models can still clip into the block below when hovering on the ground
-   [MC-280281](https://bugs.mojang.com/browse/MC-280281) Fishing bobbers rapidly jitter when attached to entities that are moving
-   [MC-280297](https://bugs.mojang.com/browse/MC-280297) The volume level between grass and dirt is inconsistent
-   [MC-280471](https://bugs.mojang.com/browse/MC-280471) The Particle.color field in area effect clouds is read-only
-   [MC-280502](https://bugs.mojang.com/browse/MC-280502) Translation key snbt.parser.undescore\_not\_allowed has a typo
-   [MC-293619](https://bugs.mojang.com/browse/MC-293619) The chicken spawn egg texture in Programmer Art is missing pixels that match the inventory slot background color
-   [MC-293754](https://bugs.mojang.com/browse/MC-293754) Minecraft causes OpenGL errors occasionally
-   [MC-295395](https://bugs.mojang.com/browse/MC-295395) Entities interact differently with nether portals
-   [MC-295677](https://bugs.mojang.com/browse/MC-295677) Title screen fades in from black after closing the "Welcome to Minecraft" screen
-   [MC-295681](https://bugs.mojang.com/browse/MC-295681) Leaf litter can generate inside of woodland mansions
-   [MC-295690](https://bugs.mojang.com/browse/MC-295690) Players stay on fire for a while after barely touching fire
-   [MC-295850](https://bugs.mojang.com/browse/MC-295850) Done and Cancel buttons on the world creation Edit Game Rules screen do the same thing
-   [MC-295866](https://bugs.mojang.com/browse/MC-295866) The /setblock and /fill commands no longer update redstone power in some situations
-   [MC-295867](https://bugs.mojang.com/browse/MC-295867) Structures from previous versions fail with DataFixerUpper
-   [MC-295879](https://bugs.mojang.com/browse/MC-295879) Sprint-hitting boats and then getting in them causes the boat to fall through the block underneath
-   [MC-295895](https://bugs.mojang.com/browse/MC-295895) 1.21.5 breaks minecart behavior when travelling through nether portals
-   [MC-295914](https://bugs.mojang.com/browse/MC-295914) Loot table files accept invalid JSON
-   [MC-295944](https://bugs.mojang.com/browse/MC-295944) Reloading a professionless zombie villager causes it to gain random profession clothing
-   [MC-296035](https://bugs.mojang.com/browse/MC-296035) Two pixels from "mooshroom\_spawn\_egg" are the same as "cow\_spawn\_egg"
-   [MC-296099](https://bugs.mojang.com/browse/MC-296099) Nether portal collision is or isn't working depending on the cardinal direction
-   [MC-296121](https://bugs.mojang.com/browse/MC-296121) ClientboundLevelChunkPacketData buffer size is too big
-   [MC-296311](https://bugs.mojang.com/browse/MC-296311) TNT touching water will destroy blocks and damage entities but will ignore decorative entities
-   [MC-296337](https://bugs.mojang.com/browse/MC-296337) Minecarts cause memory usage increases and crashes
-   [MC-296348](https://bugs.mojang.com/browse/MC-296348) NoAI:1b mobs cannot be ridden in 1.21.5+
-   [MC-296624](https://bugs.mojang.com/browse/MC-296624) Old Brown Mooshroom texture is missing from Programmer Art
-   [MC-296638](https://bugs.mojang.com/browse/MC-296638) Clocks, compasses, and lodestone compasses do not render enchantment glint in certain display contexts when using Fabulous! graphics
-   [MC-296701](https://bugs.mojang.com/browse/MC-296701) Transformed entities do not retain their custom\_data component
-   [MC-296709](https://bugs.mojang.com/browse/MC-296709) All non-default jukebox\_playable components are deleted from existing items when updating past 1.21.4
-   [MC-296784](https://bugs.mojang.com/browse/MC-296784) The "Welcome to Minecraft" screen is missing its fade out
-   [MC-296866](https://bugs.mojang.com/browse/MC-296866) Predicates of particular namespaces failed to be accessed on /execute
-   [MC-297264](https://bugs.mojang.com/browse/MC-297264) Cat breeds are not seed based anymore
-   [MC-297347](https://bugs.mojang.com/browse/MC-297347) Tamed animals no longer sit when their owner changes dimension
-   [MC-297461](https://bugs.mojang.com/browse/MC-297461) Equipment and sleeping pos data cannot be loaded in 1.21.4, but can be loaded in 1.21.5 to bees spawned from bee nest and bee hive
-   [MC-297524](https://bugs.mojang.com/browse/MC-297524) Connection with realm gives weird HTML text
-   [MC-297537](https://bugs.mojang.com/browse/MC-297537) Extra "entity.wolf\_whine.whine" sound event exists in sounds.json
-   [MC-297591](https://bugs.mojang.com/browse/MC-297591) Ender pearls can unexpectedly come to a halt
-   [MC-297614](https://bugs.mojang.com/browse/MC-297614) Area effect clouds with duration greater than or equal to 2147483628 disappear after a tick
-   [MC-297868](https://bugs.mojang.com/browse/MC-297868) Items in the armor.body and saddle slots are not kept when dying while the game rule keepInventory is set to true
-   [MC-297893](https://bugs.mojang.com/browse/MC-297893) prevent\_equipment\_drop enchantment effect does not work with armor.body and saddle slots
-   [MC-297894](https://bugs.mojang.com/browse/MC-297894) /clear command does not clear armor.body and saddle slots

---

It's time to experience new wonders of the Overworld as we release the Spring to Life drop, the first Minecraft game drop of 2025.

The Spring to Life drop brings more reasons to explore both near and far! Warm winds have swept across biomes, bringing new mob variants, ambient sounds, and lush plants for you to discover. Befriend fluffy pigs, marvel at glittering firefly bushes, listen out for whispers of sand, and delight in a blooming Overworld humming with new beginnings.

In this release we are also making the game tests system accessible through data packs with the new test command. And as usual, we continue to rebuild our engine to improve the experience for players and content creators. We are sure all those spare parts left on our floor can't be that important, right?

## New Features

-   Added cold and warm variants for the Pig, Cow and Chicken
-   Sheep now spawn with wool color dependent on the biome in which they spawn
-   Added new sound variants for Wolves
-   Overhauled the visuals of each Spawn Egg to improve readability and accessibility
-   Added fallen tree generation
-   Added Firefly Bush block
-   Added Leaf Litter block
-   Added Wildflowers block
-   Added Bush block
-   Added Short Dry Grass and Tall Dry Grass blocks
-   Added Cactus Flower block which can grow on Cactus blocks
-   Added new falling leaf particles to all Leaves blocks that did not already have them
-   Added new ambient block sounds in the Desert and Badlands biomes
-   Added language support for Kyrgyz

### Farm Animal Variants

![The cow, the chicken, and the pig are joined by their new variations high up on a mountain.](https://launchercontent.mojang.com/v2/images/1.21.5animalvariations.jpg)

-   Warm and cold variants have been added for the following animals:
    -   Pig
    -   Cow
    -   Chicken

![Warm pigs are amongst cactus flowers in a desert.](https://launchercontent.mojang.com/v2/images/1.21.5pigdesert.jpg)

-   The variant is determined by the biome they spawn in
-   Temperate variant - The variants we are all familiar with, spawns by default where the other variants do not
-   Cold variant - A variant that will be selected if spawned (naturally or by player) in these biomes:
    -   Cold Ocean
    -   Deep Cold Ocean
    -   Deep Dark
    -   Deep Frozen Ocean
    -   End Barrens
    -   End Highlands
    -   End Midlands
    -   Frozen Ocean
    -   Frozen Peaks
    -   Frozen River
    -   Grove
    -   Ice Spikes
    -   Jagged Peaks
    -   Old Growth Pine Taiga
    -   Old Growth Spruce Taiga
    -   Small End Islands
    -   Snowy Beach
    -   Snowy Plains
    -   Snowy Slopes
    -   Snowy Taiga
    -   Stony Peaks
    -   Taiga
    -   The End
    -   Windswept Forest
    -   Windswept Gravelly Hills
    -   Windswept Hills

![A cold chicken can be seen in the forefront, with a creeper peaking out from behind a tree.](https://launchercontent.mojang.com/v2/images/1.21.5coldchickencreeper.jpg)

-   Warm variant - A variant that will be selected if spawned (naturally or by player) in these biomes:
    -   Badlands
    -   Bamboo Jungle
    -   Basalt Deltas
    -   Crimson Forest
    -   Deep Lukewarm Ocean
    -   Desert
    -   Eroded Badlands
    -   Jungle
    -   Lukewarm Ocean
    -   Mangrove Swamp
    -   Nether Wastes
    -   Savanna
    -   Savanna Plateau
    -   Soul Sand Valley
    -   Sparse Jungle
    -   Warm Ocean
    -   Warped Forest
    -   Windswept Savanna
    -   Wooded Badlands

![A warm chicken in a desert village. A cat can be seen sitting on top of a villager's house.](https://launchercontent.mojang.com/v2/images/1.21.5desertvillagechicken.jpg)

-   When bred by a player, a baby variant will not be chosen by the current biome, but instead randomly selected from one of the parents' variants
-   Two new Egg items have been added for the warm and cold Chicken variants
    -   Blue Egg - The Egg that is laid by and can hatch cold Chicken variants
    -   Brown Egg - The Egg that is laid by and can hatch warm Chicken variants

#### Sheep Wool Color in Warm and Cold Biomes

-   Sheep now spawn with wool color dependent on the biome in which they spawn:
    -   Temperate biomes: (these colors are unchanged from previous behavior)
        -   Common Sheep color is white
        -   Uncommon Sheep colors are black, gray, light gray and brown
        -   There is a rare chance for a pink Sheep to spawn
    -   Cold biomes:
        -   Common Sheep color is black
        -   Uncommon Sheep colors are gray, light gray, white and brown
        -   There is a rare chance for a pink Sheep to spawn
    -   Warm biomes:
        -   Common Sheep color is brown
        -   Uncommon Sheep colors are gray, light gray, white and black
        -   There is a rare chance for a pink Sheep to spawn

### Wolf Sounds Variants

![A wolf walking on top of a fallen oak tree.](https://launchercontent.mojang.com/v2/images/1.21.5fallentreewolf.jpg)

-   Added 6 new Wolf sound variants with unique ambient, hurt, death, growl, whine, and pant sounds
    -   The new sounds are part of variants that are called "Big", "Cute", "Puglin", "Angry", "Grumpy", and "Sad"
    -   The original Wolf sounds now are used for the variant called "Classic"
    -   Every Wolf will have a sound variant randomly assigned to it from these 7 variants
    -   The sound variant is not related to the texture variant

### Spawn Egg Visuals Overhaul

![Sunny and Noor are inspecting a collection of spawn eggs. A cartographer villager can also been seen peaking in through the window.](https://launchercontent.mojang.com/v2/images/1.21.5spawneggs.jpg)

-   Each Spawn Egg now has their own unique visual which captures the personality and character of the mob it spawns
-   Each egg visual varies in shape to reflect the in-world size of the mob it spawns
    -   For example, smaller mobs tend to have a smaller Spawn Egg

### Fallen Trees

![A fallen birch tree with a brown mushroom growing on top of it.](https://launchercontent.mojang.com/v2/images/1.21.5fallentree.jpg)

-   Fallen trees are a new decorative variant of trees
-   Fallen trees come in four different wood type variants:
    -   Oak
    -   Birch
    -   Jungle
    -   Spruce
-   Birch fallen trees come in a shorter and a longer version
-   Some fallen trees can be decorated with Mushrooms or Vines
-   Fallen trees can be found in all biomes where their standing tree variant grows, except the following:
    -   Bamboo Jungle
    -   Flower Forest (has fallen Birch trees but not fallen Oak trees)
    -   Grove
    -   Meadow
    -   River

### Firefly Bush

![In the moonlit swamp, firefly bushes can be seen emitting particles. Meanwhile, a frog seems to be leaping towards the moon.](https://launchercontent.mojang.com/v2/images/1.21.5frogfireflybush.jpg)

-   The Firefly Bush is found adjacent to water in Swamps, Mangrove Swamps, Badlands, and near Rivers
-   When it is dark, glowing firefly particles appear around the Firefly Bush
-   Using Bone Meal on a Firefly Bush grows a Firefly Bush in a random adjacent space if possible
-   The Firefly Bush emits a light level of 2
-   The Firefly Bush has a chance of playing ambient sounds when these conditions are met:
    -   it is night
    -   it is not blocked from above by any collidable block except leaves

### Leaf Litter

-   Leaf Litter is a new type of decorative block which can be found in the Forests, Dark Forests and Wooded Badlands
    -   Note: Leaf Litter is only spawned as part of world generation, and does not regenerate during gameplay
-   Leaf Litter can have different amounts of leaves in one block space
    -   Up to four Leaf Litter pieces can be placed in the same block space
    -   Placing a Leaf Litter into an existing Leaf Litter block increases the amount of leaves
-   Leaf Litter can be placed in four orientations
-   Leaf Litter can be placed on any block with a full top face
-   Leaf Litter can be created by smelting any type of Leaves block
-   Leaf Litter can be used as fuel for smelting
-   Leaf Litter can be used in the Composter
-   Leaf Litter has unique block sounds
-   Leaf Litter is tinted based on which biome it is in
-   Leaf Litter is replaceable when building

### Wildflowers

-   Wildflowers are a new type of flower which grow in Birch Forests, Old Growth Birch Forests and Meadows
-   Wildflowers can have different amounts of flowers in one block space
    -   Up to four Wildflowers can be placed in the same block space
    -   Placing a Wildflower into an existing Wildflowers block increases the amount of flowers
    -   Using Bone Meal on Wildflowers will produce more Wildflowers
-   Wildflowers can be placed in four orientations
-   Wildflowers can be crafted into Yellow Dye

### Bush

-   The Bush is a new type of decorative block that can be found in small patches in the following biomes:
    -   Birch Forest
    -   Forest
    -   Frozen River
    -   Old Growth Birch Forest
    -   Plains
    -   River
    -   Windswept Forest
    -   Windswept Gravelly Hills
    -   Windswept Hills
-   The Bush can be used in the Composter
-   Using Bone Meal on a Bush grows a Bush in a random adjacent space if possible
-   A Bush only drops when broken with Shears or a Silk Touch tool
-   The Bush is replaceable when building

### Short and Tall Dry Grass

-   Added two new types of grass: Short Dry Grass and Tall Dry Grass
-   Both are 1 block high, which means Tall Dry Grass differs from regular Tall Grass which is 2 blocks high
-   Both generate in the Desert and Badlands biomes
-   Both can be placed on types of Sand, Terracotta, Dirt blocks, and Farmland like the Dead Bush
-   Both can be bonemealed
    -   Using Bone Meal on Short Dry Grass grows it into a Tall Dry Grass
    -   Using Bone Meal on Tall Dry Grass grows a Short Dry Grass in a random adjacent space if possible
-   Both can be used in the Composter
-   Sheep can eat both to regrow their wool
-   Both can be used as fuel for smelting
-   Both are replaceable when building

### Cactus Flower

-   Cactus Flower is a new type of flower that has a chance of generating on Cactuses in Deserts and Badlands
-   Cactus Flower can be placed on Cactus blocks, Farmland, or any block which has center support at the top of the block
-   Cactus Flowers have a chance of growing on Cactus blocks instead of the Cactus growing taller
    -   If a Cactus is 1-2 blocks tall, the Cactus Flower has a 10% chance to grow
    -   If a Cactus is 3 blocks or taller the Cactus Flower has a 25% chance to grow
    -   Cactus Flowers will only grow if they have space on all four sides
-   Cactus Flowers can be used in the Composter
-   A Cactus Flower can be used to craft 1 Pink Dye

### Falling Leaf Particles

-   All Leaves blocks now have chance of spawning falling leaf particles
-   The following blocks are affected by this change:
    -   Acacia Leaves
    -   Azalea Leaves
    -   Birch Leaves
    -   Dark Oak Leaves
    -   Flowering Azalea Leaves
    -   Jungle Leaves
    -   Mangrove Leaves
    -   Oak Leaves
    -   Spruce Leaves

### New Ambient Sounds for Desert and Badlands

-   Sand, Red Sand and Terracotta of any color have a chance of playing ambient sounds when surrounded by another block in the same group on at least 3 sides, at a distance of 8 blocks
    -   `block.sand.idle` can be played in any biome
    -   `block.sand.wind` only plays when in Desert or Badlands biomes
-   Dead Bush blocks have a chance of playing ambient sounds when placed on top of two blocks that are any color of Terracotta, Sand or Red Sand blocks in any biome

## Changes

-   The main menu panorama has been updated for the "Spring to Life" drop
-   Beacons and their beams now render beyond 16 chunks, up to the client render distance
    -   To keep it easily visible at large distances, the beam is rendered thicker the further away you are
    -   The beam now renders up to 2048 blocks high, up from 1024

![Three differently colored beacon beams are seen in the sky of a sunset scenery.](https://launchercontent.mojang.com/v2/images/1.21.5beacons.jpg)

-   Lodestones have a new crafting recipe and can now be found in Ruined Portals
-   The trades of the Cartographer and Wandering Trader have been updated
-   Bundles can now be found in some of the Chests in Villages
-   Updates to Camel, Chicken, Cow, Pig, and Sheep spawning
-   Zombified Piglins now need to be killed by a Player to drop the Player-specific loot such as experience
    -   This makes them consistent with all other mobs in the game
-   Changes to world generation of the Pale Garden and Meadow biomes
-   Chunks loaded by a portal will now be re-loaded again automatically when the world is reopened
-   Improved how simulation distance affects block ticks
-   Tweaks to the Creaking and Creaking Heart
-   Textures and models for temperate Cow, Mooshrooms and Sheep have been updated
-   Minor tweaks to existing Blocks, Items and Entities
-   Various changes and tweaks to sounds
-   Minor improvements to world uploads in Realms
-   Reverted fix [MC-152728](https://bugs.mojang.com/browse/MC-152728) - "_The player continues sprinting when performing actions that slow them down_"
    
    > **Developer's Note**: _After consideration, we have decided to revert this fix. While we do want to revisit these mechanics in the future, it's clear that these recent fixes alone didn't quite hit the mark and caused too many negative side effects for parkour, speedbridging, and movement in general_
    
-   If the game detects that the last startup did not complete normally, the fullscreen option will now be reset
-   Removed Herobrine

### Lodestone Changes

-   The Lodestone is now crafted from 1 Iron Ingot surrounded by 8 Chiseled Stone Bricks
-   Lodestones can now be found as loot at Ruined Portals in the Overworld or Nether
-   Advancement "Country Lode, Take me Home" has been moved from the "Nether" category to the "Adventure" category

### Cartographer and Wandering Trader Trade Rebalance

#### Cartographer Trades

-   Cartographers now sell 7 new maps each pointing to a different village or other structures in a different biome
-   Cartographers from different village types will sell a different range of maps and colored banners
-   Some prices and quantities have also been adjusted

#### Wandering Trader Trades

-   The Wandering Trader now has better prices, more trades and a larger amount of stock for many items
-   They will also now buy basic supplies from players, so it is possible to get some Emeralds by helping them prepare for their next journey - even if you don't feel like buying anything
-   The Wandering Trader will offer to buy two items from this list:
    -   Water Bottle
    -   Water Bucket
    -   Milk Bucket
    -   Fermented Spider Eye
    -   Baked Potato
    -   Hay Bale
-   Wandering Traders now have a chance of selling these items (in addition to their previous trades):
    -   Logs (Acacia, Birch, Dark Oak, Jungle, Oak, Spruce, Pale Oak or Cherry)
    -   Enchanted Iron Pickaxe
    -   Potion of Invisibility

### Mob Spawning Changes

-   Camels now spawn in Deserts
-   Chickens, Cows, Pigs, and Sheep can now spawn in Badlands

### World Generation Changes

-   The Pale Garden biome now occupies more space that was previously taken by Dark Forest
-   Woodland Mansions can now generate in the Pale Garden biome
-   Short Grass now generates slightly sparser in Meadows

### Simulation Distance

-   Any block in simulation distance of a player, or loaded by another source of chunk loading such as Ender Pearls, may now receive random ticks instead of 8 chunks just around players
    -   For example: if a chunk is loaded by an Ender Pearl or is in the spawn chunks, crops are able to grow, Ice can melt, Snow can fall, and a Cauldron can be filled by rain
    -   Mob spawning, Lava spreading fire, and Lightning strikes still occur in the previous radius of 8 chunks around players
-   Fire will no longer burn or spread if no player is within 8 chunks

### Creaking and Creaking Heart

-   Creakings can now be named using Name Tags
    -   Named Creakings will persist through the day
        -   However, they will still be torn down if stuck with a player or if too far from their Heart
    -   Named Creakings are still resistant to all damage, and can communicate with their Hearts via particles
-   Creaking Hearts correctly placed between Logs have a new dormant texture during the day
    -   Dormant Creaking Hearts cannot spawn new Creakings or Resin
-   The transition between the awake and dormant states for Creaking Hearts, as well as the transition of Eye Blossoms is now based on the fixed day time
    -   All these behaviors are no longer affected by weather or dimension brightness

### Mob Texture and Model Changes

-   The look of the temperate Cow has been slightly updated to have an extruded snout
-   The look of both Mooshroom variants have been slightly updated to have an extruded snout
-   Sheep's wool undercoat is now also colored when dyed
-   The Sheep wool texture has been tweaked to remove the stark line at the back

### Minor Tweaks to Blocks, Items and Entities

-   Sheep can now eat Fern blocks
-   Landing on Powdered Snow with Leather Boots equipped after falling further than 2.5 blocks will now make entities fall through the snow
    -   Jumping or falling less than 2.5 blocks allows the entity to land on top of the snow like before
-   Saddles equipped onto Pigs or Striders will now maintain properties such as custom name when dropped
-   Bubble columns produce less particles and sounds when entities are unaffected by them are inside them
-   Pale Oak Leaves and Pale Oak Saplings have an updated map color
-   Improved tooltips for the Crossbow and all container items

#### Item Tooltips

-   Crossbows will now show all charged projectiles in their tooltip instead of just the first
    -   All charged projectiles will also add their entire tooltip as a subsection, instead of only Fireworks
-   All container items with stored contents, such as a Chest picked with Ctrl+Pick Block, will now list the first 4 items in their tooltip just like Shulker Boxes

### Sound Changes

-   The volume of the narrator is now affected by the game's configured volume in the "Voice" category
-   Added new break, place, step, fall and hit sounds for Iron Blocks, Iron Bars, Iron Trapdoors, Iron Doors and Heavy Weighted Pressure Plates
-   The breaking sound for the "grass" sound type has been lowered
-   Blocks that are broken by a Piston now play their breaking sound
-   Ambient block sounds in Desert, Badlands and Pale Garden which are only used for ambience have been moved from the "Blocks" to the 'Ambient/Environment' category

### Realms World Uploads

-   Uploading a world to Realms will now enable Command Blocks by default
-   It is now possible to upload Hardcore singleplayer worlds to Realms

## Technical Changes

-   The Data Pack version is now 71
-   The Resource Pack version is now 55
-   A new entry point is present in the server jar: `net.minecraft.gametest.Main`
    -   Automatically starts a server and runs all available game tests
-   A new command line argument is available for the client: `--renderDebugLabels`
    -   Adds debug labels to relevant OpenGL objects, making debugging rendering easier for developers
-   Minor changes to chat network protocol

### Game Test Entry Point

This new entry point automatically starts a server, runs all available game test, and then exits.

Options:

-   `--help` - Shows usage information
-   `--packs <path>` - Set a folder of data packs to include in the world
    -   Any zip file or folder containing a `pack.mcmeta` file is included
-   `--report <path>` - Exports results in a JUnit-like XML report at the given path
-   `--tests <selection>` - Specify which tests to run with a selection - a wildcard expression matching namespace test instance IDs
    -   If omitted, or used with an empty ID, all tests will be run
-   `--universe <path>` - The path in which the test server world will be created
    -   Any existing folder will be replaced
    -   Default: `gametestserver`
-   `--verify <boolean>` - Enables test verification
    -   Runs the tests specified with `test` or `testNamespace` 100 times for each 90-degree rotation step
    -   Default: `false`

Example usage: `java -DbundlerMainClass="net.minecraft.gametest.Main" -jar server.jar --packs mytestpacks`

### Network Protocol

-   The clientbound `player_chat` packet now contains an index increasing for every message sent to the client
    -   The index starts at 0 when logging in (or is reset by configuration phase and the `login` packet)
    -   For every message, the server should increment this value by 1
    -   If this value updates in an unexpected way, the client will disconnect
    -   As the protocol requires that every chat packet reaches the client in produced order, the goal is to enable faster detection of missed/reordered chat messages for custom server developers
-   The serverbound `chat` and `chat_command_signed` packets now contain a checksum byte along with the "last seen" update
    -   This is a simple hash of the "last seen" signatures which should be reconstructed by the server, allowing quicker detection of desynchronized state
    -   This can be passed as `0` to disable the check, for compatibility with protocol translation

## Data Pack Versions 62 through 71

-   The Game Tests system is now accessible through data packs and for mods
-   Added new `allowFireTicksAwayFromPlayer` and `tntExplodes` Game Rules
-   All entities can now store custom data
-   Added a uniform way to define variant selection rules
-   Wolf Sound, Pig, Cat, Chicken, Cow, and Frog variants are now data-driven
-   Changes to commands
-   Structure Blocks in the "Load" mode have a new option: "Strict Placement"
    -   If set to `false`, the blocks in the placed structure will not trigger block updates, block entity side effects, or shape updates
-   The game's handling of NBT has been updated to allow "heterogeneous" lists with elements of different types
-   The object notation used in commands for NBT, text components and inline predicates (a.k.a. SNBT) has been extended
-   Updated data format of Text Components
-   Updated many data formats within entities and block entities
-   Added new item components, and updates to existing components
    -   The control of tooltip behavior has been reworked into a `tooltip_display` component
-   Entity variants are now set and queried with components
-   Updated Entity Predicates to support entity components
-   Updated Block Predicates to support block entity components
-   Updated `toggle_tooltips` loot function to support new `tooltip_display` component
-   The `potion` entity type has been split into `splash_potion` and `lingering_potion`
-   Added `saddle` equipment slot for entities, driven by the `equippable` component
    -   Only mobs that normally support saddles will support riding and rendering of the saddle
    -   Items in the `saddle` slot can apply attribute modifiers as with other equipment
-   Changes to `crafting_transmute`, `smithing_transform`, and `smithing_trim` recipe types
-   Trim pattern and trim material items are no longer specified in the trim registries, but instead in the recipes and items respectively
-   Added `fallen_tree` feature type and `attached_to_logs` tree decorator type
-   The `background` field in Advancement definitions no longer contains a `textures/` prefix and `.png` suffix
-   The `effects` field in Biome definitions has a new subfield, `dry_foliage_color`, that defines the color used for tinting blocks using dry foliage tinting (Leaf Litter)
-   Changes to tags
-   Added `firefly` and `tinted_leaves` particles

### Game Tests

![Kai is seen testing curious behaviors with the new test blocks.](https://launchercontent.mojang.com/v2/images/1.21.5qctest.jpg)

The Game Tests system is a new integrated system for testing aspects of the game. Each test is an asset defining some parameters for how the test gets executed, combined with a saved structure file containing a base setup.

Generally, the test framework expects to run tests in a separate superflat world.

#### Test Instances

![A game test is running, where a villagers is seen running through a maze to get to their bed.](https://launchercontent.mojang.com/v2/images/1.21.5villagertest.jpg)

Test instances are defined in the registry `test_instance`. They're small assets defining a test to run.

Fields:

-   `environment`: Namespaced ID of the test environment to run this test as part of
-   `structure`: The namespaced ID of the structure to use for the test
-   `max_ticks`: A positive integer representing the maximum number of ticks allowed to pass before the test is considered timed out
-   `setup_ticks`: Optional non-negative integer (default: `0`) representing a number of ticks to wait after placing the structure before starting the test
-   `required`: Optional boolean (default `true`) - whether the test is considered required to pass for the full test suite to pass
-   `rotation`: Optional rotation to apply to the test structure
    -   One of `none` (default), `clockwise_90`, `180` and `counterclockwise_90`
-   `manual_only`: Optional boolean (default `false`), set to `true` for tests that are not included as part of automated test runs
-   `sky_access`: Whether the test needs clear access to the sky
    -   By default (`false`), tests are enclosed in barrier blocks - if set to `true`, the top is left open
-   `max_attempts`: Number of attempts to run the test (default `1`)
-   `required_successes`: Number of attempts that must succeed for the test to be considered successful (default `1`)
-   `type`: The type of test - one of `block_based` and `function`

##### Function Tests

Function tests rely on built-in functions to run a test and indicate success or failure. They have one additional field:

-   `function`: The namespaced ID of the Test Function to run

See the "Using the Game Test Framework from Code" changelog section for more information.

##### Block Based Tests

Block based tests use Test Blocks in the test structure to run the test and indicate success or failure.

#### Test Environments

Test Environments are a way to group up tests and give them the right preconditions to run. A Test Environment is an asset in the `test_environment` registry. Each Test Environment definition has a `type` field that determines its setup:

-   `all_of` definitions apply the setup from several sub-definitions in the `definitions` field
-   `function` definitions use mcfunction files as setup and teardown
    -   `setup`: Optional namespaced ID of the mcfunction to use for setup, if any
    -   `teardown`: Optional namespaced ID of the mcfunction to use for teardown, if any
-   `game_rules`: definitions set any number of game rules
    -   `bool_rules`: A list of boolean game rules to set and the value to set
    -   `int_rules`: A list of integer game rules to set and the value to set
    -   Each rule is an object with two fields:
        -   `rule`: The exact name of the rule to set
        -   `value`: The value to set
    -   Game rules are reset to their default values after the test environment has completed
-   `weather` definitions sets the weather state
    -   `weather`: The weather to set - one of `clear`, `rain` and `thunder`
-   `time_of_day` definitions set a given time of day
    -   `time`: The time of day to set in number of ticks, as a non-negative integer

The game provides a single, empty Test Environment by default: `minecraft:default`.

#### Test Blocks

The Test Block is a block used for implementing a block-based tests. It has four modes:

-   `start`: Triggers a redstone pulse when the test starts
-   `log`: Logs a message to the log file when powered by redstone
-   `fail`: Fails the test when powered by redstone
-   `accept`: Completes the test when powered by redstone

Block-based tests are required to have at least one `start` block and one `accept` block in the structure.

#### The `test` Command

The `test` command is a new command used to create and run tests.

Syntax:

    test clearall [<radius>]
    test clearthat
    test clearthese
    
    test create <test> [<width>] [<height> <depth>]
    
    test locate <selector>
    
    test resetclosest
    test reseetthese
    test resetthat
    
    test pos [<variable>]
    
    test run <selector> [<numberOfTimes>] [<untilFailed>] [<rotationSteps>] [<testsPerRow>]
    test runclosest [<numberOfTimes>] [<untilFailed>]
    test runfailed [<numberOfTimes>] [<untilFailed>] [<rotationSteps>] [<testsPerRow>]
    test runmultiple <selector> [<amount>]
    test runthat [<numberOfTimes>] [<untilFailed>]
    test runthese [<numberOfTimes>] [<untilFailed>]
    
    test stop
    
    test verify <tests>
    

Parameters:

-   `radius`: The radius to clear tests within
-   `test`: The namespaced ID of a test
-   `selector`: A wildcard-enabled selector for test IDs
    -   Supports `*` and `?` for matching namespaced IDs
    -   If namespace is not supplied, defaults to `minecraft`
    -   Examples:
        -   `*:*` - matches all IDs
        -   `*` - matches everything in the `minecraft` namespace
        -   `custom:folder/*_test_?` - matches IDs in the `folder` folder of the `custom` namespace, with a prefix followed by `_test_` followed by a single valid character
-   `width`: The width of the test structure - if omitted, `5` is used
-   `height`: The height of the test structure - if omitted, the width is used
-   `depth`: The depth of the test structure - if omitted, the width is used
-   `variable`: The variable name to include in the copied code snippet
-   `numberOfTimes`: The number of times to repeat each test - if omitted, `1` is ued
-   `untilFailed`: Boolean (default `false`) noting that the test should be stopped as soon as one iteration fails
-   `rotationSteps`: Number of extra 90 degree steps to apply to the test - if omitted, `0` is used
-   `testsPerRow`: Number of tests to place per row in a grid layout - if omitted, `8` is used

##### `test clear*`

These subcommands clear the structures and blocks associated with the selected tests.

##### `test create`

This subcommand creates a test setup in the current location for the given test, preparing for a structure of the given size. This gives a starting point for creating the structure for the test.

##### `test locate`

Attempts to locate the given test. Note that only loaded chunks are searched.

##### `test reset*`

These subcommands reset the structures for the selected tests, removing any surrounding barriers and placing the structure in from scratch.

##### `test pos`

Shows the local coordinates to the block pointed at in the test. If the optional variable name is specified, this variable name is used in a code fragment obtained by clicking on the coordinates in the output message.

##### `test run*`

Runs one or more tests. If multiple tests are run at once, they are placed in a grid and run in parallel, although only up to a certain limit. Beyond that limit, tests are run in rounds where each round completes before any tests from the next round are started.

For each test, loads the given structure and runs the associated test. Each test location will have a beacon beam showcasing the test status.

-   Gray beacon = in progress
-   Red = fail (required test)
-   Orange = fail (optional test)
-   Green = success

If a test fails, the error is shown on a lectern book and an overlay.

Note that Game Tests are designed to run on standard superflat worlds. The area around each test is replaced with stone when it runs, and the running test is encased in barrier blocks.

##### `test stop`

This stops all running tests. Note that gameplay events triggered by tests may still remain.

##### `test verify*`

Verifies one or more tests by running multiple instances of the same test.

#### Test Instance Blocks

To run a test in a world, a Test Instance Block is used. This type of block represents the test as placed in the world and is used to interact with that test, to save the structure, reset or run the test.

Using the `test` command to run or create a test will also place a Test Instance Block to control that test.

#### Using the Game Test Framework from Code

The Game Test Framework can also be used from code in a more versatile manner than block-based tests. For this to work, you need to mod the game to add your test functions to the `test_function` registry (`Registries.TEST_FUNCTION`).

Hook into some startup method (pre-registry bootstrap) to add your loader - call `TestFunctionLoader.registerLoader()` with an implementation of `TestFunctionLoader`. Your implementation can then use the provided `register` consumer to register test functions with their namespaced IDs. This namespaced ID can then be referenced in a `function` type Test Instance.

A test function is a `Consumer<GameTestHelper>`, using that `GameTestHelper` instance to manipulate the world and make assertions about the state of the resulting world.

The helper can be used to summon mobs, set blocks, query for blocks and entities and assert the state of the test. Most `GameTestHelper` methods take test-local coordinates, which you can also find using `/test pos`.

Example code that might go along with a test structure with a locked hopper containing a Cod, pointed into a Furnace:

    public void furnaceSmeltsItem(final GameTestHelper helper) {
        helper.setBlock(0, 4, 0, Blocks.AIR);
        helper.succeedWhen(() -> helper.assertContainerContainsSingle(new BlockPos(0, 0, 0), Items.COOKED_COD));
    }
    

More complicated setups will often use `helper.startSequence()` to model sequences of events that must happen.

As opposed to block-based tests, function tests failing will often produce more helpful error messages including the location of whatever failed and what was expected at that location.

### Game Rules

#### `allowFireTicksAwayFromPlayer`

-   When `true`, fire and lava can spread fire outside the 8 chunk range of a player
-   Note: the fire and lava blocks must still be in simulation distance to spread
-   Default value: `false`

#### `tntExplodes`

-   When `false`, TNT will not explode and cannot be ignited
-   Default value: `true`

### Uniform Variant Selection

-   Variants that have spawn rules now use a uniform approach for selection
-   Selection process:
    -   Every variant has a field `spawn_conditions` that contains a list of entries
    -   Every entry has a condition and an integer priority
    -   Conditions for all variants for given entity type are evaluated for the position that entity is being spawned
    -   Entries with a priority lower than the maximum priority of remaining entries are removed
    -   The game randomly picks one entry out of the remaining ones
    -   If no conditions are remaining, the variant remains unchanged from default for that entity
-   Entry format:
    -   `priority` - integer
    -   `condition` - optional structure
        -   Fields:
            -   `type` - see below for values
            -   Additional fields are dependent on `type`
        -   If this field is not present, the condition is always true

#### Spawn Conditions

##### `minecraft:biome`

-   Checks if entity is spawning in specific biomes
-   Fields:
    -   `biomes` - single entry, list or a tag describing biomes

##### `minecraft:moon_brightness`

-   Checks if the current moon brightness is within a certain range
-   Fields:
    -   `range` - floating point range (a single number or an object like `{"min": 1, "max": 2}`)

##### `minecraft:structures`

-   Checks if the entity is spawning in specific structures
-   Fields:
    -   `structures` - single entry, list or a tag describing structures

### Data-driven Mob Variants

#### Wolf Variants

-   The fields `angry_texture`, `tame_texture` and `wild_texture` have been grouped in an `assets` field, and renamed to `angry`, `tame`, and `wild`
-   Added field `spawn_conditions` described in uniform variant selection above

#### Pig Variants

-   Pig variants can be data-driven by adding entries to `data/<namespace>/pig_variant/<id>.json`
-   This feature is experimental
-   Fields in file:
    -   `model` - one of: `normal`, `cold`
    -   `asset_id` - namespaced id for this variant asset, resolves to `assets/<namespace>/textures/<path>.png`
    -   `spawn_conditions` - field described in uniform variant selection above

#### Cat Variants

-   Cat variants can be data-driven by adding entries to `data/<namespace>/cat_variant/<id>.json`
-   This feature is experimental
-   Fields in file:
    -   `asset_id` - namespaced id for this variant asset, resolves to `assets/<namespace>/textures/<path>.png`
    -   `spawn_conditions` - field described in uniform variant selection above

#### Frog Variants

-   Frog variants can be data-driven by adding entries to `data/<namespace>/frog_variant/<id>.json`
-   This feature is experimental
-   Fields in file:
    -   `asset_id` - namespaced id for this variant asset, resolves to `assets/<namespace>/textures/<path>.png`
    -   `spawn_conditions` - field described in uniform variant selection above

#### Cow Variants

-   Cow variants can be data-driven by adding entries to `data/<namespace>/cow_variant/<id>.json`
-   This feature is experimental
-   Fields in file:
    -   `model` - one of: `normal`, `cold`, `warm`
    -   `asset_id` - namespaced id for this variant asset, resolves to `assets/<namespace>/textures/<path>.png`
    -   `spawn_conditions` - field described in uniform variant selection above

#### Chicken Variants

-   Chicken variants can be data-driven by adding entries to `data/<namespace>/chicken_variant/<id>.json`
-   This feature is experimental
-   Fields in file:
    -   `model` - one of: `normal`, `cold`
    -   `asset_id` - namespaced id for this variant asset, resolves to `assets/<namespace>/textures/<path>.png`
    -   `spawn_conditions` - field described in uniform variant selection above

#### Wolf Sound Variants

-   Wolf sound variants can be data-driven by adding entries to `data/<namespace>/wolf_sound_variant/<id>.json`
-   The file contains the following fields which correspond to sound events to use for the specific behaviour:
    -   `ambient_sound`
    -   `death_sound`
    -   `growl_sound`
    -   `hurt_sound`
    -   `pant_sound`
    -   `whine_sound`

### Commands

-   SNBT literals now accept heterogeneous lists
-   `/data` can now create and modify heterogeneous lists transparently
-   The `/setblock`, `/fill`, `/clone`, and `/place` commands now support a "strict" placement mode
-   `/setblock` and `/fill` have updated handling of block entities
-   The `horse.saddle` item slot has been renamed to `saddle`, and now supports any entity that can equip a Saddle
-   Text Components in commands such as `/tellraw` or `/title` are now specified with SNBT instead of JSON
-   Text Style in the `/scoreboard` command when specifying the `styled` number format is also now specified with SNBT instead of JSON
-   Text Component arguments in `/bossbar`, `/scoreboard` and `/team` commands are now resolved before use (in the context of entity the held in `@s`)

#### Changes to `/setblock`, `/fill`, `/clone`, and `/place`

-   The behavior of `setblock` and `fill` commands have changed in how they handle block entity data:
    -   If the block entity data is not specified, and the existing block has data, the block entity data will be preserved
    -   If the block entity data is specified, the block entity data will be set to that specified value
    -   To clear block entity data explicitly, you must now specify the block entity data as `{}`
    -   The operation is now successful if either the block state changed or the block entity data changed
-   `fill`, `clone`, `setblock` and `place template` accept a new option: `strict`
    -   If specified, the command will place blocks as-is without triggering block updates or shape updates
-   The `replace` option in the `fill` command is no longer terminal, and can be followed with additional options
-   New syntax for commands to use the new `strict` option, and more flexible use of `replace`:
    -   `fill <from> <to> <block> keep`
    -   `fill <from> <to> <block> [replace <filter>]? [strict|destroy|hollow|outline]?`
    -   `clone [from <sourceDimension>]? <begin> <end> [to <targetDimension>]? <destination> [strict]? [[replace|masked|filtered <filter>] [force|move|normal]?]?`
    -   `setblock <pos> <block> [destroy|keep|replace|strict]?`
    -   `place template <template> [<pos> [<rotation> [<mirror> [<integrity> [<seed> [strict]?]?]?]?]?]?`

### NBT Changes

-   Any interface with NBT data within the game (SNBT representation, `/data`) now supports heterogeneous lists, i.e. ones where elements are not of the same type
    -   Inserting or replacing into a list of a different type with `/data` will no longer give an error
    -   Inserting into an array type (e.g. `[I;1,2,3]`) is still type-restricted
    -   This means that the "wrapper" objects previously used to represent heterogeneous lists will no longer be observable by in-game means
-   `/data` can no longer traverse paths with an empty key (e.g. `/data get ... foo.''.bar`)
-   The NBT file format is unchanged:
    -   Heterogeneous lists are transformed before storage to bypass NBT constraints
    -   Example transform: `['a', {'b':3}]` is stored as `[{'':'a'},{'b':3}]`
    -   Existing external tools will still be able to read NBT files as before, but heterogeneous lists will be displayed in the transformed form
-   No data produced by the game has changed: objects such as Text Components were already producing heterogeneous lists in this form
-   Note: these wrapper objects may never be observed in-game, they are only relevant to developers working with the NBT file or network format directly

### SNBT Changes

-   The text format for describing object-like data in commands (like NBT, text components, predicates, etc.) has been extended
-   To simplify input of data and macro use, SNBT now also supports following operations:
    -   `bool(arg)` - converts argument to boolean
        -   if argument is a boolean value, returns value directly
        -   if argument is a number value, returns `true` if it is non-zero
    -   `uuid(str)` - converts string representation of UUID to integer array

#### Number Format

-   Either whole or fraction parts of a float number can be omitted
    -   Examples: `.1` and `1.` are valid now
-   Float numbers now use E notation
    -   Example: both `1.2e3` and `1.2E3`, `1.2E+3`, `12000e-1` are now a valid way to represent `1200.0`
-   Integer numbers can now be prefixed with `0x` to represent hexadecimal numbers and `0b` to represent binary numbers
    -   Example: `0xbad` (equal to `2989`), `0xCAFE` (equal to `51966`), `0b101` (equal to `5`)
-   Non-zero integer numbers now can't start with `0`
    -   Normally it would mean number is in base-8, but we are restricting it to avoid accidental use
-   Numbers can now contain `_` character between sequences of digits (but not at the start or the end of sequence)
    -   Example: `0b10_01`, `0xAB_CD`, `1_2.3_4__5f`, `1_2e3_4`
-   `NaN`, `Inf` or hexadecimal float representation are NOT supported
-   Implicit infinite float values (like `1e1000`) are rejected
-   Type suffixes have been extended:
    -   Integer type suffixes (`b` or `B` - byte, `s` or `S` - short, `i` or `I` - integer, `l` or `L` - long) can now be prefixed with `s` (signed) or `u` unsigned
    -   New suffixes only affect the valid range when parsing - values are still stored as signed
        -   Example: `240ub` is equal to `-16sb`, while `240sb` does not parse
    -   When a suffix is used without `u` or `s`, it defaults to signed for decimal numbers and unsigned for binary and hexadecimal numbers
    -   Note: since `b` is also a valid hexadecimal digit, byte sized hexadecimal values can only be written with a signed suffix, like `0x11ub` or `0x11sb`

#### Strings

-   Quoted strings can now use escape sequences beyond `\'`, `\"` and `\\`:
    -   Unicode escapes:
        -   `\x` - two digit escape, like `\x42`
        -   `\u` - four digit escape, like `\u2603`
        -   `\U` - eight digit escape, like `\U00002603`
        -   `\N{<name>}` - named Unicode character, like `\N{Snowman}`
    -   Built-in escape sequences:
        -   `\b` - backspace, Unicode `\x08`
        -   `\s` - space, Unicode `\x20`
        -   `\t` - horizontal tab, Unicode `\x09`
        -   `\n` - linefeed, Unicode `\u0a`
        -   `\f` - form feed, Unicode `\u0c`
        -   `\r` - carriage return, Unicode `\u0d`
-   Unquoted strings now can't start with `0-9`, `.`, `+`, `-` to avoid accidental collision with numbers

#### Number Arrays

-   Values in arrays (`[B;]`, `[I;]`, `[L;]`) without a suffix are now assumed to have suffix matching the type of the array
    
    -   Example: `[B;1,2]` is equivalent to `[B; 1b, 2b]`
-   Arrays can now also accept types smaller than the array type
    
    -   Example: `[I;1b,2s,3]` is valid and equivalent to `[I;1i,2i,3i]`

#### Lists

-   Lists now accept trailing commas
    -   Example: `[1,2,]` is valid and equivalent to `[1,2]`
    -   Only one trailing comma is allowed, and it must come after a valid element - both `[,]` and `[1,,]` are invalid

#### Compounds

-   Compounds (maps) now accept trailing commas
    -   Example: `{a:b,}`
    -   Only one trailing comma is allowed, and it must come after a valid key-value pair - both `{,}` and `{a:b,,}` are invalid

### Text Component Data Format

-   Text Components are no longer stored as JSON wrapped by a string
-   The format itself is the same as before, but inlined directly into the outer structure
    -   For example, the item component `minecraft:custom_name="{\"text\":\"Renamed item\"}"` will become `minecraft:custom_name={text:'Renamed item'}`
-   This includes Text Components passed as arguments to commands such as `/tellraw` or `/title`
    -   For example, `/tellraw @s {"text":"Hello world"}` may become `/tellraw @s {text:'Hello world'}`
-   Note: in the case where Text Components are embedded in NBT, no distinction exists between boolean and integer types
    -   To pass boolean arguments to translations, you must use the string form
-   For Text Components with the `nbt` type and `interpret` set to `true`, Text Components will be parsed from the given NBT directly rather than converting to a string and parsing as JSON
-   The format of hover and click events has been updated

#### Hover Events

-   The `hoverEvent` field has been renamed to `hover_event`
-   The legacy `value` field (which was parsed from a rendered text component) is no longer supported
-   For the `show_text` action:
    -   The `contents` field has been renamed to `value`
    -   e.g. `{action:'show_text',contents:'Hello world'}` becomes `{action:'show_text',value:'Hello world'}`
-   For the `show_item` action:
    -   The `contents` field has been inlined
    -   e.g. `{action:'show_item',contents:{id:'minecraft:stick',count:2}}` becomes `{action:'show_item',id:'minecraft:stick',count:2}`
    -   If contents was specified only as an item id, it is replaced with the full format and inlined
    -   e.g. `{action:'show_item',contents:'minecraft:stick'}` becomes `{action:'show_item',id:'minecraft:stick'}`
-   For the `show_entity` action:
    -   The `contents` field has been inlined
    -   The `id` field has been renamed to `uuid`
    -   The `type` field has been renamed to `id`
    -   e.g. `{action:'show_entity',contents:{id:[I;0,0,0,0],type:'minecraft:pig'}}` becomes `{action:'show_entity',uuid:[I;0,0,0,0],id:'minecraft:pig'}`

#### Click Events

-   The `clickEvent` field has been renamed to `click_event`
-   For the `open_url` action:
    -   The `value` field has been renamed to `url`
    -   The click event will no longer parse if not a valid URI with either `https://` or `http://` schemes, instead of simply not working
    -   e.g. `{action:'open_url',value:'https://minecraft.net'}` becomes `{action:'open_url',url:'https://minecraft.net'}`
-   For the `run_command` action:
    -   The `value` field has been renamed to `command`
    -   The click event will no longer parse if the command contains disallowed characters, instead of simply not working
    -   It is no longer required that the specified `command` field has a `/` prefix
    -   e.g. `{action:'run_command',value:'/tp @e @s'}` becomes `{action:'run_command',command:'/tp @e @s'}`
-   For the `suggest_command` action:
    -   The `value` field has been renamed to `command`
    -   The click event will no longer parse if the command contains disallowed characters, instead of simply not working
    -   e.g. `{action:'suggest_command',value:'/help'}` becomes `{action:'suggest_command',command:'/help'}`
-   For the `change_page` action:
    -   The `value` field has been renamed to `page`
    -   The `page` value now requires a positive integer instead of a string
    -   e.g. `{action:'change_page',value:'1'}` becomes `{action:'change_page',page:1}`
-   The `copy_to_clipboard` format is unchanged

### Entity Data

-   Custom data (previously present only on Marker) is now available on all entities
    -   It's exposed as a `minecraft:custom_data` component, so it can be set by spawning items and matched by predicates
    -   The component is currently stored in a field called `data`, which will be changed in the future when more proper storage for entity components is introduced
    -   It's stored only if it's non-empty
-   Updated and unified formats for storing equipment-related data on entities
-   The `Owner` field of tamed animals is no longer restricted to referencing Players
-   The `Health` and `Air` fields now default to their respective maximum value if not specified
-   The `Tags` and `FallFlying` fields will no longer be preserved if removed
-   The `FallDistance` field has been changed from float to double and is now called `fall_distance`
-   The `SleepingX`, `SleepingY`, and `SleepingZ` fields have been collected into a single `sleeping_pos` field
-   `Pos`, `Motion`, and `Rotation` values without the correct number of components (3, 3, and 2 respectively) will now be fully discarded, instead of only selecting the specified components
    -   e.g. `sleeping_pos: [I;1,2,3]`
-   Block States in the entity data of Arrows, Minecarts, Block Displays, Endermen, Falling Blocks, Primed TNT, or Piston Moving Blocks are no longer allowed to be specified as an empty object
-   Many tweaks to entity data formats of specific entities

#### Equipment Data

-   The `ArmorItems`, `HandItems`, and `body_armor_item` fields have been merged into an `equipment` field
    -   Format: map between equipment slot type and item stack
        -   Valid equipment slots: `head`, `chest`, `legs`, `feet`, `mainhand`, `offhand`, `body`, `saddle`
    -   If not specified or removed, the entity will have no equipment
    -   e.g. `equipment:{chest:{id:'minecraft:diamond_chestplate'}}`
    -   This affects all mobs and Armor Stands
    -   The armor and off-hand equipment of Players is now also stored in the `equipment` field (although items written into the Inventory using armor and off-hand slot numbers still work)
-   The data format of saddles has been unified between mobs such as Horses and Pigs, becoming a new kind of equipment slot (and stored in the `equipment.saddle` field)
    -   This is a pure rename from the previous `SaddleItem` in Horse-like mobs
    -   This also replaces the boolean `Saddle` flag from Pigs and Striders
    -   The Saddle dropping on death is now affected by the `drop_chances` field, as with other equipment slots
-   The `ArmorDropChances`, `HandDropChances`, and `body_armor_drop_chance` fields have been merged into a `drop_chances` field
    -   Format: map between equipment slot type and chance value
    -   If not specified or removed, chances will be assumed as default (`0.085f`)
    -   e.g. `drop_chances:{chest:0.1,feet:1.0}`
-   Drop chances with a default value will no longer be stored, and the `drop_chances` field is removed entirely if all defaults

#### `allay`

-   Removed redundant `CanDuplicate` field (controlled by `DuplicationCooldown`)

#### `area_effect_cloud`

-   Area Effect Clouds have a new field: `potion_duration_scale` (float)
    -   If not specified, defaults to `1.0`
    -   The duration of the potion effect applied is scaled by this factor
    -   Area Effect Clouds created by Lingering Potions will have a scale of `0.25`
-   The `Duration` field now defaults to `-1` if not specified
-   If the `Duration` field is `-1`, the Area Effect Cloud will never run out
-   This means that an Area Effect Cloud summoned with no duration specified will no longer immediately disappear

#### `cat`

-   The `CollarColor` field now defaults to `14` (red) if not specified

#### `creeper`

-   The `Fuse` field now defaults to `30` if not specified
-   The `ExplosionRadius` field now defaults to `3` if not specified

#### `dolphin`

-   Removed `TreasurePosX`, `TreasurePosY`, `TreasurePosZ` fields
-   The `Moistness` field now defaults to `2400` if not specified

#### `ender_dragon`

-   The `DragonDeathTime` field now defaults to `0` if not specified

#### `falling_block`

-   The `BlockState` field can now be `air` (will despawn immediately) - if otherwise not specified or invalid, defaults to `sand`
-   The `HurtEntities` field now defaults to `false` if not specified (or `true` if `BlockState` is `anvil`)
-   The `FallHurtAmount` field now defaults to `0` if not specified
-   The `FallHurtMax` field now defaults to `40` if not specified
-   The `DropItem` field now defaults to `true` if not specified
-   The `TileEntityData` field will no longer be preserved if removed

#### `firework_rocket`

-   The `ShotAtAngle` field now defaults to `false` if not specified

#### `fox`

-   The `Trusted` field now defaults to empty if not specified (and will no longer be merged with the previous state if modified by `/data`)

#### `ghast`

-   The `ExplosionPower` field now defaults to `1` if not specified

#### `goat`

-   The `HasLeftHorn` and `HasRightHorn` fields now default to `true` if not specified

#### `interaction`

-   The `width` and `height` fields now default to `1` if not specified

#### `item`

-   The `Health` field now defaults to `5` if not specified
-   The `PickupDelay` field now defaults to `0` if not specified
-   The `Age` field now defaults to `0` if not specified
-   The `Owner` and `Thrower` fields will no longer be preserved when removed

#### `item_frame` and `glow_item_frame`

-   The `TileX`, `TileY`, and `TileZ` fields have been collected into a single `block_pos` field
-   The `ItemDropChance` field now defaults to `1.0` if not specified

#### `item`

-   The `Owner` and `Thrower` fields will no longer be preserved when removed

#### `phantom`

-   The `Size` field has been renamed to `size`
-   The `AX`, `AY`, and `AZ` fields have been collected into a single `anchor_pos` field

#### `player`

-   The `SpawnX`, `SpawnY`, `SpawnZ`, `SpawnAngle`, `SpawnDimension`, and `SpawnForced` fields have been collected into a single `respawn` field
    -   Format: object with fields
        -   `pos` - block position to spawn at
        -   `angle` - float, angle to spawn with (default: `0.0`)
        -   `dimension` - dimension id to spawn in (default `minecraft:overworld`)
        -   `forced` - boolean, true if this spawn was set through commands (default: `false`)
-   The `enteredNetherPosition` field has been renamed to `entered_nether_pos`, and is now formatted as a list of doubles
    -   e.g. `entered_nether_pos: [1.0, 2.0, 3.0]`

#### `primed_tnt`

-   The `fuse` field now defaults to `80` if not specified
-   The `block_state` field now defaults to `tnt` if not specified
-   The `explosion_power` field now defaults to `4` if not specified

#### `shulker`

-   The `Color` field now defaults to `16` (no color) if not specified

#### `shulker_bullet`

-   The `Dir` and `Target` fields will no longer be preserved when removed

#### `skeleton`

-   The `StrayConversionTime` field will no longer be preserved when removed

#### `spectral_arrow`

-   The `Duration` field now defaults to `200` if not specified

#### `snow_golem`

-   The `Pumpkin` field now defaults to `true` if not specified

#### `tnt_minecart`

-   The `fuse` field now defaults to `80` if not specified
-   The `explosion_power` field now defaults to `4` if not specified
-   The `explosion_speed_factor` field now defaults to `1` if not specified

#### `turtle`

-   The `HomePosX`, `HomePosY`, and `HomePosZ` fields have been collected into a single `home_pos` field
-   Removed `TravelPosX`, `TravelPosY`, and `TravelPosZ` fields
-   The `HasEgg` field has been renamed to `has_egg`

#### `trader_llama`

-   The `DespawnDelay` field now defaults to `47999`

#### `vex`

-   The `LifeTicks` field has been renamed to `life_ticks`
-   The `BoundX`, `BoundY`, and `BoundZ` fields have been collected into a single `bound_pos` field

#### `villager`

-   The `FoodLevel` and `Xp` fields now default to `0` if not specified
-   The `Gossips` and `ConversionTime` fields will no longer be preserved when removed

#### `wandering_trader`

-   The `DespawnDelay` field now defaults to `0` if not specified
-   The `wander_target` field will no longer be preserved when removed

#### `wolf`

-   The `CollarColor` field now defaults to `14` (red) if not specified

#### `zombie`

-   The `DrownedConversionTime` field will no longer be preserved when removed

#### `zombie_villager`

-   The `Xp` field now defaults to `0` if not specified
-   The `Gossips` and `ConversionTime` fields will no longer be preserved when removed

#### `evoker_fangs`, `area_effect_cloud`, and all projectiles

-   The `Owner` field will no longer be preserved when removed

#### `painting` and `leash_knot`

-   The `TileX`, `TileY`, and `TileZ` fields have been collected into a single `block_pos` field

#### `arrow`, `spectral_arrow`, `trident`

-   The `inBlockState` and `SoundEvent` fields will no longer be preserved when removed
-   The `damage` field now defaults to `2` if not specified

#### `dragon_fireball`, `wind_charge`, `breeze_wind_charge`, `wither_skull`, `small_fireball`, and `large_fireball`

-   The `acceleration_power` field now defaults to `0.1` if not specified

#### `small_fireball` and `large_fireball`

-   The `ExplosionPower` field now defaults to `1` if not specified

#### `minecart`, `*_minecart`

-   The `CustomDisplayTile` field has been removed
-   `DisplayState` will now always override the default displayed block state if specified
-   `DisplayOffset` may now be specified to override the default offset even without a custom display block state set

#### `block_display`, `item_display`, and `text_display`

-   The `interpolation_duration`, `teleport_duration`, and `start_interpolation` fields now default to `0` if not specified
-   The `view_range` field now defaults to `1` if not specified
-   The `shadow_radius` field now defaults to `0` if not specified
-   The `shadow_strength` field now defaults to `1` if not specified
-   The `width` and `height` fields now default to `0` if not specified
-   The `glow_color_override` field will no longer be preserved when removed

#### `witch`, `ravager`, `pillager`, `illusioner`, `evoker`, and `vindicator`

-   The `patrol_target` field will no longer be preserved when removed

### Block Entity Data

-   The `CustomName` field will no longer be preserved when removed
-   The `LootTable` field will no longer be preserved when removed

#### `campfire`

-   The `CookingTimes` and `CookingTotalTimes` fields will no longer be preserved when removed

#### `chiseled_bookshelf`

-   The `last_interacted_slot` field now defaults to `-1` if not specified

#### `end_gateway`

-   The `exit_portal` field will no longer be preserved when removed

#### `furnace`, `smoker`, `blast_furnace`

-   The `RecipesUsed` field will no longer be preserved when removed

#### `hopper`

-   The `TransferCooldown` field now default to `-1` if not specified

#### `jigsaw`

-   The `name`, `target`, and `pool` fields now default to `minecraft:empty` if not specified
-   The `final_state` field now defaults to `minecraft:air` if not specified

#### `sculk_shrieker`

-   The `warning_level` field now defaults to `0` if not specified

#### `skull`

-   The `note_block_sound` field will no longer be preserved when removed

#### `structure_block`

-   The `ignoreEntities` and `showboundingbox` fields now default to `true` if not specified
-   The `posY` field now defaults to `1` if not specified

### Data Components

#### New `weapon` Item Component

-   When present, the "Item Used" statistic will be incremented for each attack with the item
-   The specified amount of damage will be subtracted from the item's durability with each attack
-   Format: object with fields:
    -   `item_damage_per_attack` - non-negative integer (default: `1`)
        -   The amount of damage to subtract from the weapon item's durability for each attack performed
    -   `disable_blocking_for_seconds` - non-negative float (default: `0`)
        -   If non-zero, will disable a blocking Shield on successful attack for the specified amount of seconds
    -   e.g. `weapon={item_damage_per_attack:2}`

#### New `blocks_attacks` Item Component

-   When present, this item can be used like a Shield to block attacks to the holding player
-   Format: object with fields:
    -   `block_delay_seconds` - non-negative float (default: `0`)
        -   The number of seconds that right-click must be held before successfully blocking attacks
    -   `disable_cooldown_scale` - non-negative float (default: `1`)
        -   Multiplier applied to the number of seconds that the item will be on cooldown when attacked by a disabling attack (`disable_blocking_for_seconds` on the `weapon` component)
        -   If 0, this item can never be disabled by attacks
    -   `damage_reductions` - list of objects with fields (optional)
        -   Controls how much damage should be blocked in a given attack
        -   If not specified, all damage is blocked
        -   Each entry in the list contributes an amount of damage to be blocked, optionally filtered by damage type
        -   Each entry adds to blocked damage, determined by `clamp(base + factor * dealt_damage, 0, dealt_damage)`
        -   The final damage applied in the attack to the entity is determined by `dealt_damage - clamp(blocked_damage, 0, dealt_damage)`
        -   Entry format:
            -   `horizontal_blocking_angle` - angle in degrees as a positive float (default: `90`)
                -   The maximum angle between the user's facing and the incoming attack for the block to be effective
                -   If the damage has no position, the compared angle will be assumed to be the maximum `180`
            -   `type` - damage type id, list of damage type ids, or hash-prefixed damage type tag (optional)
                -   This entry will only contribute to the blocked damage if the dealt damage type matches this field
                -   If not specified, any damage type will be accepted
            -   `base` - float
                -   Constant amount of damage to be blocked
            -   `factor` - float
                -   Fraction of the dealt damage that should be blocked
    -   `item_damage` - object with fields (optional)
        -   Controls how much damage should be applied to the item from a given attack
        -   If not specified, a point of durability is removed for every point of damage blocked
        -   The final damage applied to the item is determined by: `floor(base + factor * damage_blocked)`
        -   The final value may be negative, causing the item to be repaired
        -   Format:
            -   `threshold` - non-negative float
                -   The minimum amount of damage blocked in the attack before item damage is applied to the item
            -   `base` - float
                -   Constant amount of damage applied to the item, if `threshold` is passed
            -   `factor` - float
                -   Fraction of the blocked damage that should be applied to the item, if `threshold` is passed
    -   `bypassed_by` - hash-prefixed damage type tag (optional)
        -   If specified, blocking is bypassed by these damage types
    -   `block_sound` - sound event (optional)
        -   If specified, this sound will be played when an attack is successfully blocked
    -   `disabled_sound` - sound event (optional)
        -   If specified, this sound will be played when the item goes on its disabled cooldown due to an attack

#### New `potion_duration_scale` Item Component

-   When present, for items that have the `potion_contents` component, the duration of the applied effects will be scaled by this factor
-   This also applies to `custom_effects` in the `potion_contents` component, unlike the previous hardcoded scaling factor
-   If not specified, defaults to `1.0`
-   Format: non-negative float
    -   e.g. `potion_duration_scale=0.25`

#### New `break_sound` Item Component

-   When present, this sound will be played when the item runs out of durability and breaks
-   If not present, no sound will be played on break
-   This component is present by default on every item type
-   Format: sound event
    -   e.g. `break_sound='item.wolf_armor.break'`

#### New `provides_banner_patterns` Item Component

-   When present, this item can be placed in the pattern slot of a Loom
-   Format: hash-prefixed banner pattern tag
    -   e.g. `provides_banner_patterns='#minecraft:pattern_item/globe'`

#### New `provides_trim_material` Item Component

-   When present, this item will provide the specified trim material when used in a trimming recipe
-   Note that to be used in the built-in smithing recipes, the item must also be in the `#trim_materials` tag
-   As such, the trim material registry definition no longer specifies an item
-   Format: trim material id
    -   e.g. `provides_trim_material='minecraft:iron'`

#### `tool` Item Component

-   Added new optional field: `can_destroy_blocks_in_creative` (boolean)
    -   If `false`, players cannot break blocks while holding this tool in Creative Mode
    -   If not specified, defaults to `true`

#### `equippable` Item Component

-   Can now apply to `saddle` slot
-   Any mob can now have equipment added in the `body` slot as long as the component allows it (`allowed_entities`)
-   Added new optional field: `equip_on_interact` (boolean)
    -   If `true`, players can equip this item onto a target mob by right-clicking it (as long as this item can be equipped on the target at all)
    -   The item will not be equipped if the target already has an item in the relevant slot
    -   If not specified, defaults to `false`

#### Updated Tooltip Components

-   The way in which tooltips are controlled by components has been reworked
-   Individual `show_in_tooltip` fields, as well as the `hide_additional_tooltip` and `hide_tooltip` components have been replaced by a general `tooltip_display` component
-   Filled Maps without any `map_id` component no longer show an "Unknown Map" tooltip (invalid IDs will still produce this tooltip)

#### New `tooltip_display` Item Component

-   This component allows the tooltips provided specifically by any given item component to be suppressed
-   This replaces the previous `show_in_tooltip` fields, `hide_additional_tooltip` and `hide_tooltip` components
-   Format: object with fields:
    -   `hide_tooltip` - boolean (default: `false`)
        -   If true, the item will have no tooltip when hovered
    -   `hidden_components` - list of item component ids (default: `[]`)
        -   The tooltips provided by any component in this list will be hidden
        -   If that component provides no tooltip, it will have no effect

##### Removed `hide_additional_tooltip` Item Component

-   Replaced by use of the `tooltip_display` component and `hidden_components` field
-   The following components previously covered by the `hide_additional_tooltip` component may need to be hidden:
    -   `minecraft:banner_patterns`
    -   `minecraft:bees`
    -   `minecraft:block_entity_data`
        -   Specifically, Mob Spawner and Trial Spawner block entity data will display the configured mob
    -   `minecraft:block_state`
        -   Specifically, the `honey_level` property will be displayed in the tooltip for any item with this specified
    -   `minecraft:bundle_contents`
    -   `minecraft:charged_projectiles`
    -   `minecraft:container`
    -   `minecraft:container_loot`
    -   `minecraft:firework_explosion`
    -   `minecraft:fireworks`
    -   `minecraft:instrument`
    -   `minecraft:map_id`
    -   `minecraft:painting/variant`
    -   `minecraft:pot_decorations`
    -   `minecraft:potion_contents`
    -   `minecraft:tropical_fish/pattern`
    -   `minecraft:written_book_content`
-   This additionally means that tooltips from the above listed components are no longer restricted to specific item types
-   Note: for existing items in a world with the `hide_additional_tooltip` component, any of the above listed components also present on the same item will be added to the list to hide in `tooltip_display`

##### Removed `hide_tooltip` Item Component

-   Replaced by use of the `tooltip_display` component and `hide_tooltip` field

##### `attribute_modifiers` Item Component

-   Removed `show_in_tooltip` field, replaced by `tooltip_display` component
-   This component now always uses its simplified form, with the `modifiers` field inlined to top-level
    -   e.g. `attribute_modifiers={modifiers:[...]}` -> `attributes_modifiers=[...]`

##### `dyed_color` Item Component

-   Removed `show_in_tooltip` field, replaced by `tooltip_display` component
-   This component now always uses its simplified form, with the `rgb` field inlined to top-level
    -   e.g. `dyed_color={rgb:12345}` -> `dyed_color=12345`
-   The specified color now supports the RGB array format
    -   e.g. `dyed_color=[0.5, 1.0, 0.2]`

##### `can_place_on` and `can_break` Item Components

-   Removed `show_in_tooltip` field, replaced by `tooltip_display` component
-   The `predicates` field has been inlined to top-level, and supports either a single element or list
    -   e.g. `can_place_on={predicates:[{blocks:'stone'},{blocks:'dirt'}]}` -> `can_place_on=[{blocks:'stone'},{blocks:'dirt'}]`
    -   or: `can_place_on={predicates:[{blocks:'stone'}]}` -> `can_place_on={blocks:'stone'}`

##### `enchantments` and `stored_enchantments` Item Components

-   Removed `show_in_tooltip` field, replaced by `tooltip_display` component
-   These components now always use their simplified form, with the `levels` field inlined to top-level
    -   e.g. `enchantments={levels:{sharpness:2}}` -> `enchantments={sharpness:2}`

##### `jukebox_playable` Item Component

-   Removed `show_in_tooltip` field, replaced by `tooltip_display` component

##### `trim` Item Component

-   Removed `show_in_tooltip` field, replaced by `tooltip_display` component

##### `unbreakable` Item Component

-   Removed `show_in_tooltip` field, replaced by `tooltip_display` component

#### Entity Components

-   Entities now have a set of components for configuring variants and other aspects of appearance
-   If those components are present on spawning item, they will be applied to the new entity
    -   Spawning items include Spawn Eggs, Mob Buckets, Arrows, Lingering Potions, Armor Stands, Paintings, Item Frames, Minecarts, and Boats
-   Components are currently not restored when a Spawn Egg is picked from an existing entity
-   New components:
    -   `villager/variant` - one of `desert`, `jungle`, `plains`, `savanna`, `snow`, `swamp`, `taiga`
    -   `wolf/variant` - namespaced id from `wolf_variant` registry
    -   `wolf/sound_variant` - namespaced id from `wolf_sound_variant` registry
    -   `wolf/collar` - one of 16 dye colors
    -   `fox/variant` - one of `red`, `snow`
    -   `salmon/size` - one of `small`, `medium`, `large`
    -   `parrot/variant` - one of `red_blue`, `blue`, `green`, `yellow_blue`, `gray`
    -   `tropical_fish/pattern` - one of `kob`, `sunstreak`, `snooper`, `dasher`, `brinely`, `spotty`, `flopper`, `stripey`, `glitter`, `blockfish`, `betty`, `clayfish`
    -   `tropical_fish/base_color` - one of 16 dye colors
    -   `tropical_fish/pattern_color` - one of 16 dye colors
    -   `mooshroom/variant` - one of `red`, `brown`
    -   `rabbit/variant` - one of `brown`, `white`, `black`, `white_splotched`, `gold`, `salt`, `evil`
    -   `pig/variant` - namespaced id from `wolf_variant` registry
    -   `frog/variant` - namespaced id from `frog_variant` registry
    -   `horse/variant` - one of `white`, `creamy`, `chestnut`, `brown`, `black`, `gray`, `dark_brown`
    -   `painting/variant` - namespaced id from `painting_variant` registry
    -   `llama/variant` - one of `creamy`, `white`, `brown`, `gray`
    -   `axolotl/variant` - one of `lucy`, `wild`, `gold`, `cyan`, `blue`
    -   `cat/variant` - namespaced id from `cat_variant` registry
    -   `cat/collar` - one of 16 dye colors
    -   `sheep/color` - one of 16 dye colors
    -   `shulker/color` - one of 16 dye colors
-   Mob buckets and paintings available in the creative menu will now use the new variants instead of `minecraft:entity_data` component
-   Custom tooltips for Bucket of Tropical Fish and Painting items are now based on new components instead of `minecraft:bucket_entity_data` and `minecraft:entity_data`
-   Some existing components are now also transferred from the spawning item to the spawned entity:
    -   `minecraft:custom_name` - any entity
    -   `minecraft:potion_contents` - Lingering Potion to Area Effect Cloud
    -   `minecraft:potion_duration_scale` - Lingering Potion to Area Effect Cloud

### Predicates

#### Entity Predicates

-   New optional fields have been added to entity predicates: `components` and `predicates`
    -   Their functionality and format are identical to the fields `components` and `predicates` on item predicates, but they operate on entity components
        -   When present, `components` will match exact contents of entity components
        -   When present, `predicates` will match partial contents of entity components
    -   In general, any component that is transferred from a spawning item to an entity should be available to this predicate
-   The following entity sub-predicates have been removed and replaced with a combination of the `components` predicate and entity variant components:
    -   `minecraft:axolotl`
    -   `minecraft:cat`
    -   `minecraft:fox`
    -   `minecraft:frog`
    -   `minecraft:horse`
    -   `minecraft:llama`
    -   `minecraft:mooshroom`
    -   `minecraft:painting`
    -   `minecraft:parrot`
    -   `minecraft:pig`
    -   `minecraft:rabbit`
    -   `minecraft:salmon`
    -   `minecraft:tropical_fish`
    -   `minecraft:villager`
    -   `minecraft:wolf`
-   The `color` field has been removed from the `minecraft:sheep` sub-predicate
-   The `stepping_on` field will now only match the specified location if the entity is on the ground

#### Block Predicates

-   New optional fields have been added to block predicates: `components` and `predicates`
-   Their functionality and format are identical to the fields `components` and `predicates` on item predicates, but they operate on block entity components (when present)
    -   When present, `components` will match exact contents of block entity components
    -   When present, `predicates` will match partial contents of block entity components

### Loot Functions

#### `toggle_tooltips`

-   Now supports any component id in the `toggles` map
-   Any component specified will be toggled in the `tooltip_display` component

### Recipes

#### `crafting_transmute` Recipe Type

-   The `result` field now supports specifying a count and a components patch to apply to the result
-   The components patch is applied to the final transmuted item
-   The new format is an object with fields:
    -   `id` - item id
    -   `count` - positive integer (default: `1`)
    -   `components` - a component patch object (default: empty)
    -   e.g. `"result": {"id": "minecraft:stick", "count": 3, "components": {"!minecraft:damage": {}, "minecraft:enchantment_glint_override": {}}}`
-   The field can still be defined as before as an inline item id (e.g. `"result": "minecraft:stick"`)

#### `smithing_transform` Recipe Type

-   The `base` ingredient field is no longer optional
    -   Previously, if no base ingredient was given, the recipe would parse but never be usable

#### `smithing_trim` Recipe Type

-   The `base`, `template`, and `addition` ingredient fields are no longer optional
    -   Previously, if these ingredients were not given, the recipe would parse but never be usable
-   Added new `pattern` field, controlling which trim pattern will be applied in the recipe
    -   As such, the trim pattern registry definition no longer specifies the item
    -   Format: trim pattern id
    -   e.g. `"pattern": "minecraft:bolt"`

### Trim Patterns and Trim Materials

-   The registry definitions for trim patterns and trim materials no longer include an `item` field
-   Instead, this mapping in patterns and materials is defined by the recipe and item components respectively

### World Generation

#### Added `fallen_tree` Feature Type

-   Places a stump block (given by `trunk_provider`), and a number of logs to the side placed in a random direction (given by `trunk_provider`, rotated by direction)
-   Format:
    -   `trunk_provider` - Block State Provider, the log block to be placed
    -   `log_length` - Int Provider (between 0 and 16), the number of blocks from the origin to generate (including the stump and free space)
    -   `stump_decorators` - List of Tree Decorators to apply to the stump block
    -   `log_decorators` - List of Tree Decorators to apply to the log blocks

#### Added `attached_to_logs` Tree Decorator Type

-   Places blocks adjacent to logs in random directions, with a specified probability
-   Format:
    -   `probability` - float (between 0 and 1), the probability for a block to be attached in a given direction
    -   `block_provider` - Block State Provider, selects the adjacent block to place
    -   `directions` - list of directions, the cardinal directions in which blocks can be placed

### Tags

#### Block Tags

-   Added `#replaceable_by_mushrooms` - exhaustive list of all bocks that can be replaced as a mushroom is placed or grows
-   Added `#sword_instantly_mines` - blocks that are instantly mined by Swords
-   Added `#plays_ambient_desert_block_sounds` - blocks that will play ambient desert block sounds
-   Added `#edible_for_sheep` - blocks that can be eaten by Sheep to regrow their Wool
-   Added `#camels_spawnable_on` - blocks that Camels can spawn on
-   `#dead_bush_may_place_on` has been renamed to `#dry_vegetation_may_place_on`

#### Item Tags

-   Added `#book_cloning_target` - item that can be crafted together with a Written Book to clone it
-   Added `#eggs` - all variants of the Egg item
-   Added `#flowers` - corresponding item tag for the already existing `#flowers` block tag

#### Biome Tags

-   Added `#spawns_cold_variant_farm_animals` - all biomes where cold variant of farm animals spawn
-   Added `#spawns_warm_variant_farm_animals` - all biomes where warm variants of farm animals spawn

#### Entity Tags

-   Added `#can_equip_saddle` - entities that can be equipped with a Saddle
    -   Note: this does not mean that the Saddle will function, just that it can be equipped into the saddle slot
-   Added `#can_wear_horse_armor` - entity that can hold horse armor in their body slot

#### Structure Tags

-   Added `#on_savanna_village_maps` - structures that can appear on Savanna Village Maps
-   Added `#on_desert_village_maps` - structures that can appear on Desert Village Maps
-   Added `#on_plains_village_maps` - structures that can appear on Plains Village Maps
-   Added `#on_taiga_village_maps` - structures that can appear on Taiga Village Maps
-   Added `#on_snowy_village_maps` - structures that can appear on Snowy Village Maps
-   Added `#on_swamp_explorer_maps` - structures that can appear on Swamp Explorer Maps
-   Added `#on_jungle_explorer_maps` - structures that can appear on Jungle Explorer Maps

#### Cat Variant Tags

-   Removed `#default_spawns` and `#full_moon_spawns`

### Particles

#### `tinted_leaves`

-   This particle is spawned below most Leaves blocks
-   Fields:
    -   `color`: Tint color, specified either as packed int or list of 4 floats

#### `firefly`

-   This particle spawns around Firefly Bushes
-   Has no fields

## Resource Pack Version 47 through 55

-   Added new block sprites for new content
-   The Creaking Heart "active" state has been renamed to "awake"
-   Added new item sprites for new content
-   Added new item sprites for each Spawn Egg
-   Added new sound events for new content
-   Added new particle definitions and sprites for Falling Leaves and Fireflies
-   New and updated textures for the Pig, Cow, Chicken and Sheep
-   Added new equipment asset layer type for Pigs and Striders, and moved saddle textures
-   Renamed `textures/misc/enchanted_glint_entity.png` to `textures/misc/enchanted_glint_armor.png`
-   Added colormap texture for tinting dry foliage tinted blocks (`textures/colormap/dry_foliage.png`)
-   Item model definitions can now dispatch on item component contents
-   Changes to shaders and post-processing effect definitions
-   Expanded `paletted_permutations` atlas sprite source to support custom separators
-   Small changes in rendering of items in world

### Block Sprites

-   Added new block sprites:
    -   `bush`
    -   `cactus_flower`
    -   `creaking_heart_dormant`
    -   `creaking_heart_top_dormant`
    -   `firefly_bush_emissive`
    -   `firefly_bush`
    -   `leaf_litter`
    -   `short_dry_grass`
    -   `tall_dry_grass`
    -   `test_block_accept`
    -   `test_block_fail`
    -   `test_block_log`
    -   `test_block_start`
    -   `test_instance_block`
    -   `wildflowers_stem`
    -   `wildflowers`
-   Renamed block sprites:
    -   `creaking_heart_active` -> `creaking_heart_awake`
    -   `creaking_heart_top_active` -> `creaking_heart_top_awake`

### Item Sprites

-   Added new item sprites:
    -   `blue_egg`
    -   `brown_egg`
    -   `firefly_bush`
    -   `leaf_litter`
    -   `wildflowers`
    -   `<mob>_spawn_egg` for every mob, replacing the previous `spawn_egg` and `spawn_egg_overlay` sprites

### Sound Events

-   Added new sound events:
    -   `block.cactus_flower.break`
    -   `block.cactus_flower.place`
    -   `block.deadbush.idle`
    -   `block.firefly_bush.idle`
    -   `block.iron.break`
    -   `block.iron.step`
    -   `block.iron.place`
    -   `block.iron.hit`
    -   `block.iron.fall`
    -   `block.leaf_litter.break`
    -   `block.leaf_litter.step`
    -   `block.leaf_litter.place`
    -   `block.leaf_litter.hit`
    -   `block.leaf_litter.fall`
    -   `block.sand.idle`
    -   `block.sand.wind`
    -   For each of: `puglin`, `sad`, `angry`, `grumpy`, `big`, `cute`:
        -   `entity.wolf_<variant>.ambient`
        -   `entity.wolf_<variant>.death`
        -   `entity.wolf_<variant>.growl`
        -   `entity.wolf_<variant>.hurt`
        -   `entity.wolf_<variant>.pant`
        -   `entity.wolf_<variant>.whine`
-   Removed sound event: `entity.wolf.howl`

### Particles

-   Added new particle sprites:
    -   `firefly`
    -   `leaf_<frame>` with frame ranging between 0 and 11

### New and Updated Pig Textures

-   Added new textures for Pig variants:
    -   `cold_pig`
    -   `warm_pig`
-   Texture `pig` has been renamed to `temperate_pig`
-   Changed the size of `temperate_pig` and `pig_saddle` texture

### New and Updated Cow Textures and Model

-   Added new textures for Cow variants:
    -   `cold_cow`
    -   `warm_cow`
-   Texture `cow` has been renamed to `temperate_cow`
-   Changed the size of `temperate_cow` texture
-   Changed the size of `red_mooshroom` and `brown_mooshroom` textures
-   The temperate Cow and Mooshroom have updated models and textures
    -   Models now have a snout
    -   Models now have their legs mirrored

### New and Updated Chicken Textures

-   Added new textures for Chicken variants:
    -   `cold_chicken`
    -   `warm_chicken`
-   Texture `chicken` has been renamed to `temperate_chicken`
-   The `temperate_chicken` texture has been moved to a new folder:
    -   `entity/chicken.png` -> `entity/chicken/temperate_chicken.png`

### Updated Sheep Textures

-   Name of `sheep_fur` texture has been renamed to `sheep_wool`
-   Sheep now has a separate texture for its wool undercoat, which is dynamically recolored in-game
    -   The name of this undercoat texture is `sheep_wool_undercoat`

### Equipment Assets

-   Equipment assets may now define new layer types:
    -   `pig_saddle` - equipment layer for Pig saddles
    -   `strider_saddle` - equipment layer for Strider saddles
    -   `camel_saddle` - equipment layer for Camel saddles
    -   `horse_saddle` - equipment layer for Horse saddles
    -   `donkey_saddle` - equipment layer for Donkey saddles
    -   `mule_saddle` - equipment layer for Mule saddles
    -   `skeleton_horse_saddle` - equipment layer for Skeleton Horse saddles
    -   `zombie_horse_saddle` - equipment layer for Zombie Horse saddles
-   The following textures have been moved to support the use of equipment assets for saddles:
    -   `entity/pig/pig_saddle.png` -> `entity/equipment/pig_saddle/saddle.png`
    -   `entity/strider/strider_saddle.png` -> `entity/equipment/strider_saddle/saddle.png`
-   The following textures have been split from their base entity texture to support the use of equipment assets for saddles:
    -   `entity/camel/camel.png` -> `entity/equipment/camel_saddle/saddle.png`
    -   `entity/horse/horse_<variant>.png` -> `entity/equipment/horse_saddle/saddle.png`
    -   `entity/horse/donkey.png` -> `entity/equipment/donkey_saddle/saddle.png`
    -   `entity/horse/mule.png` -> `entity/equipment/mule_saddle/saddle.png`
    -   `entity/horse/horse_skeleton.png` -> `entity/equipment/skeleton_horse_saddle/saddle.png`
    -   `entity/horse/horse_zombie.png` -> `entity/equipment/zombie_horse_saddle/saddle.png`
-   Equipment layers configured to be dyeable will now show if the `dyed_color` component is present on the item, even if the item is not in the `#dyeable` tag

### Item Models

#### `minecraft:component` Select Property

-   New data source has been added to `select` item model: `component`
-   Returns value of component on item, if any
-   Fields:
    -   `component` - namespaced ID of component type
-   Possible values: depends on component type
    -   Example: if `component` is set to `minecraft:wolf/collar`, list of cases will accept dye colors, like `lime`
    -   If value comes from registry and current datapack does not provide it, entry will be silently ignored

#### `minecraft:component` Boolean Property

-   New conditional model property has been added to `condition` item model: `component`
-   Uses component predicates (like ones used in item predicates) to match item components
    -   However, instead of encoding them as a map of `<predicate type>:<predicate value>`, a single predicate is encoded in two fields
-   Fields:
    -   `predicate` - type of component predicate (member of `minecraft:data_component_predicate_type` registry)
    -   `value` - predicate-specific value

### Atlas

#### `minecraft:paletted_permutations` Sprite Source

-   New field:
    -   `separator` - optional string (default: `_`) - value to be used when joining texture and permutation names to produce sprite name

### Shaders & Post-process Effects

> **Developer's Note**: _Although it is possible in Resource Packs, overriding Core Shaders is considered as unsupported and not an intended Resource Pack feature. These shaders exist as part of the internal implementation of the game, and as such, may change at any time as the game's internals evolve. We understand that overriding Core Shaders is used for very cool Resource Pack features, many of which lack supported alternatives. We would like to provide better, supported alternatives in the future._

-   Shader program definitions for core shaders and post-processing effects as JSON files have been removed
-   The shader programs themselves are still available and can be overridden
-   The post-processing effects are still configurable as JSON
-   "Global" uniforms may be defined in any shader, and the game will attempt to fill it
    -   Currently, these are: `ModelViewMat`, `ProjMat`, `TextureMat`, `ScreenSize`, `ColorModulator`, `Light0_Direction`, `Light1_Direction`, `GlintAlpha`, `FogStart`, `FogEnd`, `FogColor`, `FogShape`, `LineWidth`, `GameTime`, `ModelOffset`
    -   The type of the uniform must match what it would normally be, or it'll be undefined behavior

#### Post-process Effect Definitions

-   The field `program` was replaced with `vertex_shader` and `fragment_shader`
    -   `<namespace>:<path>` will resolve to `assets/<namespace>/shaders/<path>.<vsh|fsh>`
-   `type` is now a required field for each `uniform`
    -   Possible values are currently `int`, `ivec3`, `float`, `vec2`, `vec3`, `vec4`, `matrix4`
-   `values` in each `uniform` is now optional
    -   Leaving it unset is not recommended and is used for runtime configuration of the blur effect
-   Leaving a uniform unspecified results in undefined behavior, you must specify each one that will be used by the shaders

### Item Rendering

#### Item Display

-   `firstperson_lefthand` and `thirdperson_lefthand` transforms are now rendered the same as when held in hand

#### Item Entity

-   When on ground, model size is now taken into account when determining hovering motion
    -   That means that models should never clip into the block below, no matter what size they are
-   Positioning of items in an item stack on ground now depends on model size and model type
    -   If model depth (Z coordinate) is below 1/16th of a block, item is rendered as flat stack of items
    -   Otherwise, the model is rendered as a cluster of items offset in all directions around center
    -   Previously, flat stack rendering happened only for models with `builtin/generated` parent

## Fixed bugs in 1.21.5

-   [MC-7697](https://bugs.mojang.com/browse/MC-7697) Tridents or arrows shot through lava sometimes don't catch fire
-   [MC-13738](https://bugs.mojang.com/browse/MC-13738) Invisible saddle when using invisibility potion on a horse, donkey or mule
-   [MC-55800](https://bugs.mojang.com/browse/MC-55800) Successful "/fill air destroy" commands give error message and return 0 for result/success
-   [MC-56653](https://bugs.mojang.com/browse/MC-56653) Zombified Piglins drop XP and rare drops if killed by anything while in angered state
-   [MC-80243](https://bugs.mojang.com/browse/MC-80243) Saddles don't apply attribute modifiers when worn by entities
-   [MC-90212](https://bugs.mojang.com/browse/MC-90212) You cannot hang on to climbable blocks while gliding with elytra
-   [MC-93185](https://bugs.mojang.com/browse/MC-93185) The exit portal in the end generates at highest block at 0 0 which can make it generate incomplete
-   [MC-97244](https://bugs.mojang.com/browse/MC-97244) The "minecraft:enchant.thorns.hit" sound event doesn't play when non-player entities are damaged by the thorns enchantment
-   [MC-98271](https://bugs.mojang.com/browse/MC-98271) The sound of blocking with a shield is only hearable by other players (not the person blocking)
-   [MC-101556](https://bugs.mojang.com/browse/MC-101556) Nether Portal teleport range is too large (equivalent to a full block)
-   [MC-108495](https://bugs.mojang.com/browse/MC-108495) Non-LivingBase entities can be on a team (and show color) but can't be targeted using team=
-   [MC-113878](https://bugs.mojang.com/browse/MC-113878) Attribute modifiers description for chest is misleading / "When on body" instead of "When on chest"
-   [MC-117574](https://bugs.mojang.com/browse/MC-117574) Using /setblock or /fill to re-place a block entity keeps old NBT (if no NBT specified) but clears inventories, even when the command fails
-   [MC-118092](https://bugs.mojang.com/browse/MC-118092) Crafting recipe unlock toast says "New Recipes Unlocked!" even when only one recipe was unlocked
-   [MC-118470](https://bugs.mojang.com/browse/MC-118470) Narrator plays at full volume when volume is off
-   [MC-122840](https://bugs.mojang.com/browse/MC-122840) "/data remove" cannot delete beam\_target tag in End Crystals
-   [MC-128079](https://bugs.mojang.com/browse/MC-128079) Statistic for using shears doesn't increase when mining certain blocks
-   [MC-135192](https://bugs.mojang.com/browse/MC-135192) Boats are immediately sunken if there is a string on the surface of the water
-   [MC-141297](https://bugs.mojang.com/browse/MC-141297) You cannot set lit state of redstone torches using setblock, debug stick and BlockStateTag, to be to opposite of the situation it would be in
-   [MC-152382](https://bugs.mojang.com/browse/MC-152382) End gateways and end portals don't fade away with render distance fog
-   [MC-153392](https://bugs.mojang.com/browse/MC-153392) Unable to remove villager gossips using /data remove
-   [MC-157196](https://bugs.mojang.com/browse/MC-157196) Tamed animals cannot be added to a team
-   [MC-160304](https://bugs.mojang.com/browse/MC-160304) Sneaking on ice can change direction of movement to lines along axis
-   [MC-165421](https://bugs.mojang.com/browse/MC-165421) Bubble columns have the opposite effect on wind charges
-   [MC-165461](https://bugs.mojang.com/browse/MC-165461) Crossbow loading animation stops after loading, even when still holding down right click
-   [MC-165711](https://bugs.mojang.com/browse/MC-165711) Eye of ender hitbox always lags behind the animation
-   [MC-167125](https://bugs.mojang.com/browse/MC-167125) Rounding error on fall damage
-   [MC-168262](https://bugs.mojang.com/browse/MC-168262) Dead bushes cannot be placed on farmland
-   [MC-170134](https://bugs.mojang.com/browse/MC-170134) Minecraft uses several times more VRAM than needed after exploring terrain for a while
-   [MC-176233](https://bugs.mojang.com/browse/MC-176233) Crossbows no longer have a transition after loading
-   [MC-177522](https://bugs.mojang.com/browse/MC-177522) Wolf barking and whining sounds are subtitled as "Wolf pants"
-   [MC-183329](https://bugs.mojang.com/browse/MC-183329) Nether portal teleport overlay does not show up if the player has the nausea effect
-   [MC-183623](https://bugs.mojang.com/browse/MC-183623) Hardcore worlds in the world menu have a comma after the red exclamation mark
-   [MC-184530](https://bugs.mojang.com/browse/MC-184530) Player movement at low speeds is biased towards cardinal directions
-   [MC-184681](https://bugs.mojang.com/browse/MC-184681) Customized worlds still say "Buffet world customization" since 20w21a
-   [MC-186241](https://bugs.mojang.com/browse/MC-186241) World border faces are rendered incorrectly with "Fabulous!" graphics
-   [MC-189525](https://bugs.mojang.com/browse/MC-189525) Armored entities from pre-1.9 worlds upgrade to dual wielding armor
-   [MC-190000](https://bugs.mojang.com/browse/MC-190000) Saddles equipped on horses cannot be replaced without removing them first
-   [MC-193404](https://bugs.mojang.com/browse/MC-193404) Changing a powered or activator rail to powered using a debug stick or /setblock does not work
-   [MC-200311](https://bugs.mojang.com/browse/MC-200311) Advancement background texture referencing is inconsistent with models
-   [MC-202226](https://bugs.mojang.com/browse/MC-202226) /recipe give or take for one recipe says "recipes"
-   [MC-203550](https://bugs.mojang.com/browse/MC-203550) Blocks broken by pistons do not play breaking sounds
-   [MC-220091](https://bugs.mojang.com/browse/MC-220091) Summoning falling\_block entities with BlockState NBT set to any air block (air, cave\_air, void\_air) default to sand
-   [MC-220672](https://bugs.mojang.com/browse/MC-220672) Inconsistent pluralization in customize world preset heading source string
-   [MC-222876](https://bugs.mojang.com/browse/MC-222876) "Buffet world customization" is incorrectly capitalized
-   [MC-226772](https://bugs.mojang.com/browse/MC-226772) Shulker box opening / closing subtitle shows "Shulker"
-   [MC-227097](https://bugs.mojang.com/browse/MC-227097) End portals delete blocks that are inside of the portal
-   [MC-230445](https://bugs.mojang.com/browse/MC-230445) End portals and end gateways are not rendered properly with the Blindness or Darkness effects
-   [MC-231331](https://bugs.mojang.com/browse/MC-231331) Advancement toasts continue to appear despite the said advancements being revoked shortly after
-   [MC-236100](https://bugs.mojang.com/browse/MC-236100) End crystal beam appears to be black
-   [MC-239705](https://bugs.mojang.com/browse/MC-239705) Sprinting forward while facing a certain angle pushes the player either to the left or to the right
-   [MC-241951](https://bugs.mojang.com/browse/MC-241951) Player momentum on X and Z axis are cancelled separately at low values
-   [MC-248099](https://bugs.mojang.com/browse/MC-248099) Mob pathfinding breaks after falling into water accidentally while walking
-   [MC-253721](https://bugs.mojang.com/browse/MC-253721) Wrong logs when running /op @a
-   [MC-255756](https://bugs.mojang.com/browse/MC-255756) When the shield is broken between players, the attacking side has no shield breaking sound
-   [MC-256469](https://bugs.mojang.com/browse/MC-256469) Invisible camels don't show their saddles
-   [MC-257133](https://bugs.mojang.com/browse/MC-257133) Desync when placing large paintings with NBT on a small space
-   [MC-258253](https://bugs.mojang.com/browse/MC-258253) Spawn egg particles use an uncolored spawn egg overlay
-   [MC-260440](https://bugs.mojang.com/browse/MC-260440) Players can no longer activate swimming mode in water while flying with elytra
-   [MC-261385](https://bugs.mojang.com/browse/MC-261385) Bubble columns act differently at the surface depending on non-air blocks
-   [MC-262928](https://bugs.mojang.com/browse/MC-262928) The "minecraft:entity.player.hurt" sound is no longer played when players receive thorns damage from guardians or elder guardians
-   [MC-262939](https://bugs.mojang.com/browse/MC-262939) Changing dimensions or respawning with nausea effect active displays nether portal overlay
-   [MC-265514](https://bugs.mojang.com/browse/MC-265514) HRTF stuck on even when directional audio is set to off in update 1.20.2
-   [MC-266912](https://bugs.mojang.com/browse/MC-266912) Saddle equipping sounds aren't played when saddles are equipped on horses, donkeys, mules, or camels shortly after the said entity is summoned
-   [MC-267221](https://bugs.mojang.com/browse/MC-267221) "value" within "change\_page" clickEvent json looks for a string instead of an integer
-   [MC-267323](https://bugs.mojang.com/browse/MC-267323) Items fields with old boolean JSON formatting are cleared upon world update
-   [MC-268942](https://bugs.mojang.com/browse/MC-268942) The swimming animation no longer displays when gliding with an elytra and swimming at the same time
-   [MC-269386](https://bugs.mojang.com/browse/MC-269386) Flow Pottery Sherd is not in the correct spot in the creative inventory
-   [MC-269637](https://bugs.mojang.com/browse/MC-269637) Horses can wear multiple saddles but not multiple horse armor
-   [MC-270043](https://bugs.mojang.com/browse/MC-270043) Reduced armor glint applies to tridents
-   [MC-270192](https://bugs.mojang.com/browse/MC-270192) The saddles of some entities stay visible through their death animation
-   [MC-270197](https://bugs.mojang.com/browse/MC-270197) The saddle on pigs and striders stays visible through their death animation
-   [MC-270220](https://bugs.mojang.com/browse/MC-270220) Granting all advancements results in prolonged, disruptive and loud audio spam
-   [MC-272100](https://bugs.mojang.com/browse/MC-272100) Unused palette pixels in horse textures (horse\_\[brown/chestnut/creamy/white\].png)
-   [MC-272790](https://bugs.mojang.com/browse/MC-272790) Shulker boxes and other blocks in the end exit portal when it changes state are not dropped as items
-   [MC-273338](https://bugs.mojang.com/browse/MC-273338) Flying boat glitch using string and rising bubble columns
-   [MC-274187](https://bugs.mojang.com/browse/MC-274187) The sweeping attack from a sword enchanted with Fire Aspect can ignite other players with PVP disabled
-   [MC-274258](https://bugs.mojang.com/browse/MC-274258) All horse textures contain an unused chest bag texture
-   [MC-275994](https://bugs.mojang.com/browse/MC-275994) Having the pie chart open while the window is unfocused spams the logs
-   [MC-276061](https://bugs.mojang.com/browse/MC-276061) Decorated pot sherds don't visually update until relog when replacing with blank pot
-   [MC-276861](https://bugs.mojang.com/browse/MC-276861) The player can sometimes teleport through blocked end portals when moving very fast
-   [MC-277403](https://bugs.mojang.com/browse/MC-277403) Flaming arrows and tridents still don't extinguish when water is placed in their location
-   [MC-277537](https://bugs.mojang.com/browse/MC-277537) Pale moss carpets sometimes generate disjointed
-   [MC-277780](https://bugs.mojang.com/browse/MC-277780) Minecraft resaves all maps with every autosave even after the 1st patch
-   [MC-277807](https://bugs.mojang.com/browse/MC-277807) Teleporting the player's mount causes rotation de-sync, previously did not
-   [MC-277865](https://bugs.mojang.com/browse/MC-277865) The animation of boats in bubble columns breaks when over a certain "Time" in level.dat
-   [MC-277922](https://bugs.mojang.com/browse/MC-277922) Boats in 1 block high downward bubble column will continue to rock back and forth
-   [MC-278040](https://bugs.mojang.com/browse/MC-278040) Creaking swim pathfinding breaks after being submerged
-   [MC-278096](https://bugs.mojang.com/browse/MC-278096) "Fabulous!" graphics and clouds disabled causes all particles to linger in frame buffer for one frame
-   [MC-278140](https://bugs.mojang.com/browse/MC-278140) The "/fill" command doesn't work properly with the directional states of several blocks placed adjacent to one another
-   [MC-278164](https://bugs.mojang.com/browse/MC-278164) Click sound is played twice when you click a setting button and there's a slider under the mouse in the next screen
-   [MC-278204](https://bugs.mojang.com/browse/MC-278204) Blaze fireballs now cause TNT minecarts to explode instantly
-   [MC-278249](https://bugs.mojang.com/browse/MC-278249) Experience orb positions desync severely and abruptly correct themselves
-   [MC-278375](https://bugs.mojang.com/browse/MC-278375) Feeding wheat or hay bale to llama or trader llama with maximum Temper causes item stack to be desynced
-   [MC-278376](https://bugs.mojang.com/browse/MC-278376) Arrows and tridents act weirdly in one block deep bubble columns
-   [MC-278400](https://bugs.mojang.com/browse/MC-278400) Arrows and tridents move after hitting a block in flowing lava
-   [MC-278417](https://bugs.mojang.com/browse/MC-278417) Arrows and tridents on fire and stuck in the ground cannot be extinguished by rain
-   [MC-278422](https://bugs.mojang.com/browse/MC-278422) Reloading the world after removing Owner tag from a sitting tamed wolf with /data remove makes the wolf moving and sitting at the same time
-   [MC-278455](https://bugs.mojang.com/browse/MC-278455) Slow sideways movement in spectator mode is wrong at angles which aren't (close to) a multiple of 45°
-   [MC-278493](https://bugs.mojang.com/browse/MC-278493) Tamed wolves which are angry at creakings remain angry when said creakings despawn
-   [MC-278502](https://bugs.mojang.com/browse/MC-278502) Weeping and twisting vines disconnect
-   [MC-278552](https://bugs.mojang.com/browse/MC-278552) minecraft:entity.player.big\_fall no longer plays the sound when falling from great height
-   [MC-278585](https://bugs.mojang.com/browse/MC-278585) Players can get stuck when landing on the edge of powder snow
-   [MC-278591](https://bugs.mojang.com/browse/MC-278591) Ender dragon spawn egg is no longer given when using pick block on the ender dragon entity
-   [MC-278615](https://bugs.mojang.com/browse/MC-278615) Reinforcement zombified piglins are angry at you even if you killed the "caller" in one hit
-   [MC-278621](https://bugs.mojang.com/browse/MC-278621) Client/server desync when placing powder snow while landing in it
-   [MC-278627](https://bugs.mojang.com/browse/MC-278627) Players wearing leather boots will take fall damage when landing on the edge of powder snow
-   [MC-278634](https://bugs.mojang.com/browse/MC-278634) Trying to /setblock a 'waterlogged=true' state on (glow\_lichen, resin\_clump, sculk\_vein, etc.) produces an error
-   [MC-278639](https://bugs.mojang.com/browse/MC-278639) Tripwire hooks are not activated by shulker bullets
-   [MC-278659](https://bugs.mojang.com/browse/MC-278659) Attacking a natural stationary creaking does not trigger sculk sensors
-   [MC-278673](https://bugs.mojang.com/browse/MC-278673) The x-rotation of /teleport is limited to ±90 degrees relative to the entity's original angle
-   [MC-278683](https://bugs.mojang.com/browse/MC-278683) Mobs spawned from spawners or /summon never drop their equipment
-   [MC-278708](https://bugs.mojang.com/browse/MC-278708) Throwing ender pearls while mounted only dismounts you, without teleporting
-   [MC-278728](https://bugs.mojang.com/browse/MC-278728) smithing\_transform recipes can't set an item's components back to default
-   [MC-278733](https://bugs.mojang.com/browse/MC-278733) Breaking a double resin brick slab block only returns a single slab
-   [MC-278734](https://bugs.mojang.com/browse/MC-278734) Sheep's heads stutter when they look up or down
-   [MC-278755](https://bugs.mojang.com/browse/MC-278755) Teleporting far away while riding an entity softlocks the game
-   [MC-278801](https://bugs.mojang.com/browse/MC-278801) The closed eyeblossom to gray dye recipe is not grouped with the other gray dye recipe
-   [MC-278841](https://bugs.mojang.com/browse/MC-278841) Powder snow no longer slows down the player falling from a high place
-   [MC-279145](https://bugs.mojang.com/browse/MC-279145) Shulker bullets are no longer affected by bubble columns
-   [MC-279152](https://bugs.mojang.com/browse/MC-279152) Shulker bullets can't teleport through nether or end portals, end gateways
-   [MC-279196](https://bugs.mojang.com/browse/MC-279196) Block loot tables cannot be removed with /data remove
-   [MC-279340](https://bugs.mojang.com/browse/MC-279340) Baby polar bears are too small
-   [MC-279364](https://bugs.mojang.com/browse/MC-279364) CustomName cannot be removed from block entities
-   [MC-279390](https://bugs.mojang.com/browse/MC-279390) Baby zombified piglin helmet clipping
-   [MC-279472](https://bugs.mojang.com/browse/MC-279472) Void appears lower & more faded than before
-   [MC-279572](https://bugs.mojang.com/browse/MC-279572) End portals and end gateways aren't affected by water, lava or powder snow fog
-   [MC-279646](https://bugs.mojang.com/browse/MC-279646) Toggling fullscreen with F11 does not visually update the fullscreen option in the video settings menu
-   [MC-279653](https://bugs.mojang.com/browse/MC-279653) Block Entity Data desynchronizes after subsequent setblock commands
-   [MC-279857](https://bugs.mojang.com/browse/MC-279857) Piglins summoned by the /summon command do not pick up gold items
-   [MC-280170](https://bugs.mojang.com/browse/MC-280170) Goats can no longer ram armor stands unless the game rule mobGriefing is set to false
-   [MC-280211](https://bugs.mojang.com/browse/MC-280211) End crystal beams cause OpenGL errors with glDebugVerbosity set to 3

---

