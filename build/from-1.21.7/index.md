# Minecraft: Java Edition 1.21.7

A hot-as-lava hotfix. It's Minecraft 1.21.7, bringing updates to your disco, plus a fresco and some crash and bug fixes. We've added a new 3x3 painting to honor everyone's best friend, as well as refreshed the loot dropped by an iconic mob. The Baby Zombie riding a Chicken (Chicken Jockey) will drop the “Lava Chicken” music disc when defeated.

We will be back with the next snapshot in a few weeks.

Happy Mining!

## New Features

-   Added a painting of a good boy by artist Sarah Boeving
-   Added music disc "Lava Chicken" by Hyper Potions
    -   Drops when defeating a Baby Zombie riding a Chicken (Chicken Jockey)

## Technical Changes

-   The Data Pack version is now 81
-   The Resource Pack version is now 64

## Fixed bugs in 1.21.7

-   [MC-280354](https://bugs.mojang.com/browse/MC-280354) Loading and unloading a resource pack that uses a x32000 atlas breaks the game
-   [MC-297748](https://bugs.mojang.com/browse/MC-297748) The moon is rendered incorrectly on some Qualcomm graphics
-   [MC-298448](https://bugs.mojang.com/browse/MC-298448) Filled maps are rendered incorrectly on some Qualcomm graphics
-   [MC-298681](https://bugs.mojang.com/browse/MC-298681) Text displays with the "shadow" tag enabled and the "see\_through" tag disabled exhibit z-plane fighting at a close distance
-   [MC-298710](https://bugs.mojang.com/browse/MC-298710) TTF glyphs are incorrectly rendered over some elements
-   [MC-298818](https://bugs.mojang.com/browse/MC-298818) Good boy is missing from Java Edition
-   [MC-298832](https://bugs.mojang.com/browse/MC-298832) The breaking particles of droppers and dispensers facing up or down appear incorrect on some Qualcomm graphics
-   [MC-298856](https://bugs.mojang.com/browse/MC-298856) Blindness and darkness fog effects no longer work underwater
-   [MC-298879](https://bugs.mojang.com/browse/MC-298879) The game crashes upon startup on some AMD graphics
-   [MC-298898](https://bugs.mojang.com/browse/MC-298898) TextureAtlas leaks textures after resource reload
-   [MC-298919](https://bugs.mojang.com/browse/MC-298919) Sometimes you pass through the happy ghast when you get off while going forward
-   [MC-298986](https://bugs.mojang.com/browse/MC-298986) Repeatedly reloading a 512x512 resource pack will eventually result in severe graphics corruption
-   [MC-299017](https://bugs.mojang.com/browse/MC-299017) Text on glowing signs is not visible on some graphics
-   [MC-299071](https://bugs.mojang.com/browse/MC-299071) Memory Leak in ItemStackRenderState leads to OutOfMemoryError
-   [MC-299110](https://bugs.mojang.com/browse/MC-299110) Force upgrading does not write new DataVersion to converted data
-   [MC-299126](https://bugs.mojang.com/browse/MC-299126) The server crashes when certain mobs ride a turtle

---

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

Shh! I'm writing this changelog from behind a Pale Oak tree – and I have to be very quiet because the Garden Awakens drop is finally here – and Creakings are spawning in Pale Gardens all across the Overworld! The Garden Awakens brings with it an eerie biome – the Pale Garden – which is carpeted in moss, filled with Pale Oak trees, and home to a unique flower called an Eyeblossom. It also brings a watchful hostile mob, the Creaking, as well as the secret to defeating (and spawning) it – the Creaking Heart! Facing up to a Creaking will also earn you Resin Clumps – another new block you can craft into Resin Bricks, or use to trim your armor. Was that everything? Oh! And we've also made some bug fixes. Now, let me see if I can back away slowly without this Creaking spotting me…

## New Features

-   Added Pale Garden Biome, Pale Oak tree, Pale Moss block, Pale Moss carpet, Pale Hanging Moss and Pale Oak woodset
-   Added the Creaking mob, Creaking Spawn Egg and Creaking Heart block
-   Added the Resin block family
-   Added Eyeblossoms

### Pale Garden

The Pale Garden is a biome variation of Dark Forest.

-   Pale Oaks generate here
-   Creaking Heart blocks can generate in Pale Oaks, causing Creakings to spawn at night
-   Eyeblossoms generate on the ground
-   Pale Moss blocks/carpet generate on the ground here
-   Hanging Pale Moss generate hanging from the foliage of Pale Oaks
-   Animal mobs do not spawn naturally in Pale Gardens
-   New biome specific ambient sounds
-   Pale Garden has no accompanying music
    -   If a player enters the biome while music is playing, the music will fade out
-   Using the seed 3515201313347228787 when creating a new world will spawn the player next to a Pale Garden ![In the moonlit canopy of a Pale Garden, an Enderman can be seen holding a Pale Moss block. A Creeper and a Creaking can also be seen in the distance.](https://launchercontent.mojang.com/v2/images/1.21.4canopy.jpg)

### Pale Oak Tree

Pale Oak trees are a new tree variant similar to Dark Oak trees.

-   Pale Oak Leaves drop Pale Oak Saplings that can be planted in a 2x2 configuration to grow Pale Oak trees
-   Player grown Pale Oak trees grow without any decorations
-   Naturally generated Pale Oak trees have Pale Hanging Moss hanging from the foliage, Pale Moss patches on the ground, and Creaking Heart blocks can generate in them
-   Pale Oak Leaves have a chance to spawn leaf particles if exposed on the bottom side
-   Wandering Traders can sell Pale Oak Saplings
-   Pale Oak Logs can be crafted into the Pale Oak woodset:
    -   Door
    -   Fence
    -   Fence Gate
    -   Plank
    -   Sign
    -   Hanging Sign
    -   Slab
    -   Stairs
    -   Trapdoor
    -   Wood
    -   Stripped Log
    -   Stripped Wood
    -   Button
    -   Pressure Plate
    -   Boat
    -   Boat with Chest ![A player made building constructed out of the Pale Oak woodset and Resin blocks is atop of a mountain near a Pale Garden.](https://launchercontent.mojang.com/v2/images/1.21.4building.jpg)

### Pale Moss

Pale Moss Blocks are new blocks that work similarly to existing Moss Blocks, including a Carpet variant.

-   Pale Moss Blocks generate naturally in the Pale Garden biome
-   Wandering Traders can sell a Pale Moss Block
-   Pale Moss Carpet can be crafted from two Pale Moss Blocks
-   Pale Moss Carpet generates naturally in the Pale Garden biome
    -   When placed, Pale Moss Carpet grows up to two blocks on the solid faces of any block that borders it
    -   Pale Moss Carpet can be Bone Mealed to grow to full on all solid faces of any block that borders it

### Pale Hanging Moss

Pale Hanging Moss is a vine-like block that grows downwards.

-   Pale Hanging Moss generates naturally in the Pale Garden biome under the foliage of Pale Oaks
-   Pale Hanging Moss does not grow randomly, but can be Bone Mealed to grow
-   Pale Hanging Moss breaks instantly when mined
-   Pale Hanging Moss requires shears or silk touch tools to be obtained
-   Wandering Traders can sell Pale Hanging Moss

### Eyeblossoms

Eyeblossoms are new flowers that generate in the Pale Garden biome.

-   They exist in two variants: Closed Eyeblossom and Open Eyeblossom
-   Eyeblossoms transition between the two variants based on the time of day
    -   During the night, Eyeblossoms will become Open
    -   During the day, they will become Closed
    -   In dimensions that do not have a day/night cycle, they will remain as-is
    -   When transitioning, flowers will emit a particle effect and sound
-   Eyeblossoms planted on the ground will communicate with each other, helping nearby flowers to open or close
-   Open Eyeblossoms have glowing eyes during the night
-   Eyeblossoms can be obtained by Bone Mealing grass blocks in the Pale Garden biome
-   Bees get poisoned when they touch Open Eyeblossoms
-   Bees can be tempted with Open Eyeblossoms, but they get poisoned on player interaction instead of typical breeding/growing behaviour
-   Bees do not interact at all with Closed Eyeblossoms
-   Suspicious Stew made from Open Eyeblossoms will cause a Blindness effect
-   Suspicious Stew made from Closed Eyeblossoms will cause a Nausea effect
-   Gray or Orange Dye can be crafted from Closed and Open Eyeblossoms respectively
-   Wandering Traders can sell Open Eyeblossoms

### Creaking Mob

The Creaking mob spawns at night if there is a Creaking Heart block between two Pale Oak logs. This happens naturally in the Pale Garden biome where the Creaking Heart generates inside Pale Oaks.

-   A Creaking will activate if a survival or adventure mode Player is within 12 blocks of it and looks at it
-   A Creaking stays active while there is a survival or adventure mode Player within 32 blocks of it
-   An activated Creaking will not move if a survival or adventure player is looking at it
    -   It will also have full knockback resistance in this state
-   Creaking melee attacks deal 3 points of damage (1.5 hearts)
-   Creakings react to damage caused by mobs and projectiles only by swaying in place
-   Creakings are resistant to fire
-   Creakings ignore Cacti, Sweet Berry Bushes and Powder Snow and can walk through/over them
-   When attacked by Players or their pets, a particle trail is shown between the Creaking and the Creaking Heart block it is connected to
-   When the Creaking Heart block that the Creaking is connected to is destroyed, the Creaking is removed with a custom twitching animation
-   Creaking spawns are based on the day/night cycle and not affected by light levels
-   Creakings cannot enter Boats
-   The Creaking Spawn Egg will spawn a Creaking mob that is not connected to a Creaking Heart which:
    -   Persists through day and night
    -   Takes damage from attacks and other damage sources
    -   Has one point of health (half a heart)
-   Creakings spawned from a Creaking Heart cannot go through portals
-   Creakings spawned from a Creaking Heart cannot be named with a Name Tag
-   Players wearing a Carved Pumpkin on their head can look at a Creaking without it freezing in place
-   Illagers are scared of Creakings and will run away from them ![Sunny is walking through a Pale Garden, unaware that several Creakings are stalking them.](https://launchercontent.mojang.com/v2/images/1.21.4creaking.jpg)

### Creaking Heart

A Creaking Heart is a “living” block generating in Pale Oak trees, covered on all sides by Pale Oak wood logs. It can spawn a Creaking mob during the night when it is placed between two Pale Oak Logs, all aligned along the same axis.

-   Is active during the night and dormant during the day
-   Sends a trail of particles towards the connected Creaking when the Creaking gets hit by a Player or their pet
-   When a Creaking Heart block is destroyed, the connected Creaking is removed
-   The Creaking Heart decides to remove or replace the connected Creaking when:
    -   It turns day
    -   The Creaking is too far away from the Creaking Heart
    -   A Player intersects with the Creaking for a few seconds
-   Comparators attached to the Creaking Heart block will output a signal strength dependent on the distance to the connected Creaking
-   A Creaking Heart can be crafted with a Resin Block and Pale Oak Logs
-   A Creaking Heart block can be obtained by using a Silk Touch enchanted tool
-   Breaking a Creaking Heart without Silk Touch block will drop 1-3 Resin Clumps or more when using a Fortune enchanted tool
-   Naturally placed Creaking Hearts drop 20-24 experience when broken by a Player, with or without Silk Touch ![Sunny stands face-to-face with a Creaking, hitting it to figure out where the connected Creaking Heart block is.](https://launchercontent.mojang.com/v2/images/1.21.4heart.jpg)

### Resin

Added Resin Clump, Block of Resin, Resin Brick, and a family of Resin Bricks blocks.

-   Attacking a Creaking will cause its Creaking Heart to exude 2-3 Resin Clumps
    -   Resin Clumps appear on the sides of Pale Oak Logs that are close and are connected to the Creaking Heart
    -   The Creaking Heart is on cooldown and cannot produce more Resin Clumps for 5 seconds after an attack
-   Resin Clump blocks can be placed on any full face of a neighboring block
-   Resin Clump blocks can be waterlogged
-   Block of Resin is a storage block for Resin Clumps
-   Resin Clumps can be smelted into Resin Brick items
-   Resin Brick items can be used as a material for armor trimming
-   Resin Brick items can be crafted into Resin Bricks
-   Resin Bricks can be crafted into Resin Brick Slabs, Resin Brick Stairs, Resin Brick Walls, and then Chiseled Resin Bricks
    -   The Stonecutter can also be used to craft these items
-   Resin Clump and Resin Block does not require a tool to mine and are mined instantly
-   The proper tool for Resin Bricks family of blocks is a Pickaxe
-   Resin Clumps can be found in some Woodland Mansion loot chests

### New System for Pale Garden Ambient Sounds

Ambient sounds in the Pale Garden biome do not come from the biome itself, but are generated by blocks found in the biome.

-   Pale Hanging Moss emits subtle atmospheric sounds when it is attached to Pale Oak Logs or Pale Oak Leaves
-   Creaking Hearts emit a set of eerie sounds when they are active during the night and surrounded by Logs on all sides
-   Open Eyeblossoms placed on Pale Moss Blocks emit a soft, whispering sound

## Changes

-   Swords are no longer considered efficient tools for mining Moss Carpet
    -   Hoes remain the proper tools for mining Moss Carpets
-   Bees are now withered on player interactions with Wither Roses instead of typical breeding/growing behavior
-   Baby Cats and Wolves now get a collar with the color that is a mix between the parents collar color if possible
-   Added language support for Popoloca
-   The durations of the effects of Suspicious Stews have been aligned with those in Bedrock Edition:
    -   Saturation: 0.35 seconds (unchanged)
    -   Night Vision: 5 seconds (unchanged)
    -   Fire Resistance: 3 seconds
    -   Blindness: 11 seconds
    -   Weakness: 7 seconds
    -   Regeneration: 7 seconds
    -   Jump Boost: 5 seconds
    -   Wither: 7 seconds
    -   Poison: 11 seconds
-   Removed Herobrine

### Required Tools for Drops

> **Developer's Note**: _We made it so any block that drops when its support is broken will also drop when mined with any tool. It seemed unfair that breaking a block directly could destroy it if it was possible to obtain it with any tool just by breaking the block below!_

-   The following blocks that require support now always drop when broken with any tool: Bell, Lantern, Soul Lantern, all Copper Doors, Iron Door, Heavy Weighted Pressure Plate, Light Weighted Pressure Plate, Polished Blackstone Pressure Plate, and Stone Pressure Plate
-   The Brewing Stand now drops when broken with any tool
-   The Ender Chest now drops Obsidian when broken with an incorrect tool, instead of dropping nothing

### Mobs Picking up Items

Some changes have been made to how mobs decide to replace their equipped items with items on the ground

-   If the item belongs in an armor slot, replace the item if any of the following conditions apply
    -   The new item has a higher base armor value
    -   The new item has a higher base armor toughness value
    -   The new item has more enchantments
    -   The new item is less damaged
    -   The new item has a custom name while the old one doesn't
-   If the item belongs in the main hand slot, replace the item if any of the following conditions apply
    -   The new item is a preferred weapon while the old one isn't
        -   If the old item is a preferred weapon while the new item isn't, do not replace the item
    -   The new item has a higher base damage value
    -   The new item has more enchantments
    -   The new item is less damaged
    -   The new item has a custom name while the old one doesn't

#### Preferred Weapons

The following mobs now have a preferred weapon type to pick up:

-   Skeleton-like mobs, except Wither Skeletons, prefer Bows
-   Adult Piglins and Pillagers prefer Crossbows
-   Drowned prefer Tridents

## Technical Changes

-   The Data Pack version is now 61
-   The Resource Pack version is now 46
-   Removed the `winter_drop` feature flag and built-in data pack

### The Data Generator

-   The data generator in the server jar (`net.minecraft.data.Main`) no longer generates the `assets` directory
    -   The `--client` option has been removed from the command line for this entry point
-   A new entry point `net.minecraft.client.data.Main` is now present in the client jar, with a similar command line structure as the data generator in the server jar
    -   Available options:
        -   `--client` - generates the `assets` directory

### Network Protocol

-   Client will now send the `minecraft:player_loaded` packet once the loading terrain screen has closed after initially loading into the world, and after closing the loading screen when respawning

## Data Pack Versions 58 through 61

-   The `minecraft:trail` particle has a new required field: `duration`
    -   Indicates, in ticks, how long the particle will take to fly from the start to the target
-   Spawn eggs with `minecraft:entity_data` and block items with `minecraft:block_entity_data` component will now apply data only if the `id` tag matches the type of placed entity or block entity
    -   Additionally, a warning will be added to item tooltip if using such an item might directly or indirectly lead to command execution with a high permission level
    -   This warning cannot be hidden by any other component
-   The field `item_model_index` in the `minecraft:trim_material` registry has been removed (no longer needed for model rendering)
-   The `minecraft:custom_model_data` component has been expanded, together with the `minecraft:set_custom_model_data` modifier
-   Removed the `minecraft:creaking_transient` entity type

### Commands

-   Suggestions will now be shown for attribute modifier IDs existing on the target in the `attribute` command

#### `attribute` Command

New subcommand: `base reset` for resetting the base value of an attribute to its default value for the target entity. If the attribute does not exist on the entity, the command will fail.

Syntax:

    attribute <target> <attribute> base reset 
    

Parameters:

-   `target`: The entity to update the attribute for
-   `attribute`: The attribute ID to update

### Tags

#### Block Tags

-   Added `#bee_attractive` - denotes all blocks that Bees may pollinate
-   Removed `#tall_flowers`

#### Item Tags

-   Removed `#flowers` and `#tall_flowers`
-   Removed `trim_templates`
-   Added `#skeleton_preferred_weapons`, `#piglin_preferred_weapons`, `#pillager_preferred_weapons` and `#drowned_preferred_weapons` tags for specifying preferred weapons types for these mobs when picking up items
-   Added `#wither_skeleton_disliked_weapons` for weapons that Wither Skeletons don't want to pick up

### Furnace, Smoker and Blast Furnace Data

-   Renamed `CookTime` to `cooking_time_spent`
-   Renamed `CookTimeTotal` to `cooking_total_time`
-   Renamed `BurnTime` to `lit_time_remaining`
-   Added field `lit_total_time` representing the total time the furnace should be lit

### TNT Minecart Data

-   The `TNTFuse` field of TNT Minecarts has been renamed to `fuse`
-   Addeded optional field `explosion_speed_factor` that controls the amount of added damage depending on the speed of the Minecart
    -   Default value: `1.0`

### Text Components

Added optional `shadow_color` style field to Text Components, which overrides the shadow properties of text.

-   Format:
    -   A packed integer ARGB value (e.g. `-1`)
    -   An array of RGBA values (e.g. `[1, 1, 1, 1]`)
-   If specified as `0`, the shadow will never be displayed for this text
-   If specified as a non-zero value, the shadow will always be displayed with this color

### Item Components

#### `minecraft:equippable`

-   The `model` field has been renamed to `asset_id`

#### `minecraft:custom_model_data`

-   Component now has more fields to accommodate new uses by various model property getters (see Resource Pack changes)
-   Fields:
    -   `floats` - list of floats
    -   `flags` - list of booleans
    -   `strings` - list of strings
    -   `colors` - list of RGB color values

### Item Modifiers

#### `minecraft:set_custom_model_data`

Now has more fields to accommodate more complex component structure.

-   New fields:
    -   `floats` - optional list operation of number providers
    -   `flags` - optional list operation of boolean values
    -   `strings` - optional list operation of string values
    -   `colors` - optional list operation of RGB values or number providers
-   The list operations uses same format as `explosions` field in `set_fireworks` modifier:
    -   `value` - list of values to insert
    -   `mode`: enumerated value deciding the function to apply:
        -   `replace_all`: fully replace the list
        -   `replace_section`: replace a section of the list. Arguments:
            -   `offset`: optional non-negative integer:
                -   Start of replaced range
                -   If omitted, `0` is used
            -   `size`: optional non-negative integer:
                -   Size of range to be replaced in the list
                -   If omitted, the size of the `values` field is used
        -   `insert`: insert into the list, moving existing entries to after the inserted section. Arguments:
            -   `offset`: optional non-negative integer:
                -   Index before which the new entries will be inserted
                -   If omitted, `0` (before first value) is used
        -   `append`: append values at the end of the list
-   For example `{function:"set_custom_model_data",floats:{values:[2],mode:replace_all}}` sets replaces `floats` with the single value `2`

### Custom World Generation

-   The `simple_block` feature type has a new optional field: `schedule_tick`
    -   If set to `true`, the block will be scheduled to tick once on the first tick the block is within the simulation distance after generation
    -   Default: `false`
-   Biome effects have a new format for `music` using a weighted list
    -   The list can be empty indicating no music should play in this biome
-   Biome effects have a new optional field: `music_volume`
    -   The game will smoothly transition between the current music volume and the new volume when entering the biome

## Resource Pack Version 43 through 46

-   New Resources for the Garden Awakens content
-   Updates to GUI sprites
-   The UV mapping of the Magma Cube texture has been updated
-   Invalid `minecaft:filled_map` items in an Item Frame (map item without the `map_id` component) no longer change the size of the frame
-   New format for data-driving item models
-   All blocks that previously rendered only a block entity (Banners, Heads, Beds, Chests, Conduits, Decorated Pots, Shulker Boxes and Signs) will now also render a normal block model over it (same as the existing behavior of Bells, Enchantment Tables, etc.)
    -   Note: rendered block entity still can't be removed or data-driven, this change only affects previously ignored block models
-   Unifont has been updated to 16.0.01

### New Resources

-   Added the following new block models and textures:
    -   `chiseled_resin_bricks`
    -   `closed_eyeblossom`
    -   `open_eyeblossom`
        -   Additionally, uses `open_eyeblossom_emissive` texture layer
    -   `resin_block`
    -   `resin_bricks`
    -   `resin_clump`
-   Added the following non-top-level block models:
    -   `cross_emissive`
    -   `flower_pot_cross_emissive`
-   Added the following new item models and textures:
    -   `resin_brick`
    -   `resin_clump`
-   Added new Armor Trim color palette: `trims/color_palettes/resin`

### Renames

-   `equipment` directory has been moved one level up, i.e. `models/equipment/` becomes `equipment/`
-   `broken_elytra` model and texture has been renamed to `elytra_broken`

### GUI Sprites

-   The `toast/system` sprite layout has been updated to use standard nine-slicing functionality
-   The `toast/tutorial` sprite will now be scaled for taller toasts, and as such has nine-slice scaling in the default Resource Pack
-   The `advancements/box_obtained` and `advancements/box_unobtained` GUI sprites are now configured to scale with nine-slicing
-   Empty slot sprites, such as those for the armor slots in the inventory, have been renamed and moved from `items` into the `gui/sprites/container/slot` directory
    -   `empty_armor_slot_helmet` -> `helmet`
    -   `empty_armor_slot_chestplate` -> `chestplate`
    -   `empty_armor_slot_leggings` -> `leggings`
    -   `empty_armor_slot_boots` -> `boots`
    -   `empty_slot_sword` -> `sword`
    -   `empty_slot_pickaxe` -> `pickaxe`
    -   `empty_slot_axe` -> `axe`
    -   `empty_slot_shovel` -> `shovel`
    -   `empty_slot_hoe` -> `hoe`
    -   `empty_slot_smithing_template_armor_trim` -> `smithing_template_armor_trim`
    -   `empty_slot_smithing_template_netherite` -> `smithing_template_netherite`
    -   `empty_slot_amethyst_shard` -> `amethyst_shard`
    -   `empty_slot_diamond` -> `diamond`
    -   `empty_slot_emerald` -> `emerald`
    -   `empty_slot_ingot` -> `ingot`
    -   `empty_slot_lapis_lazuli` -> `lapis_lazuli`
    -   `empty_slot_quartz` -> `quartz`
    -   `empty_slot_redstone_dust` -> `redstone_dust`
-   The empty slot sprites in the Loom have been split from their background and moved:
    -   `container/loom/banner_slot` -> `container/slot/banner`
    -   `container/loom/pattern_slot` -> `container/slot/banner_pattern`
    -   `container/loom/dye_slot` -> `container/slot/dye`
-   The empty slot sprites in the Brewing Stand have been split from the container background:
    -   `container/slot/brewing_fuel`
    -   `container/slot/potion`
-   The empty slot sprites in the Horse/Llama inventories have been split from their background, cropped, and moved:
    -   `container/horse/armor_slot` -> `container/slot/horse_armor`
    -   `container/horse/llama_armor_slot` -> `container/slot/llama_armor`
    -   `container/horse/saddle_slot` -> `container/slot/saddle`

### Item models

-   New format has been introduced for describing item models
-   Item models are selected based on the `minecraft:item_model` component
    -   Information (including model) for item with `item_model=foo:bar` is stored in `/assets/foo/items/bar.json`
-   The `overrides` section has been removed from existing block models
-   There are no longer any hardcoded paths in the `models` directory - models will be now only used if referenced by definitions in `items` or `blockstates` directories
-   Models in `models/item` that only redirect to a block model have been removed
    -   In such cases, the item model will refer to the `models/block` model directly ![Steve blocks an Arrow shot by a Skeleton with a Shield that has been given the item model of an Iron Sword.](https://launchercontent.mojang.com/v2/images/1.21.4blocking.jpg)

#### Top-level Client Item Info

-   Contains information needed to render item
-   Stored in `/assets/[namespace]/items/[path].json`
-   Fields:
    -   `model`: Object with fields:
        -   `type`: Type of item model (see below)
        -   `<type-specific>` - Additional fields depending on item model type
    -   `hand_animation_on_swap` - Boolean field describing if down-and-up animation should be played in first-person view when item stack is changed (either type, count or components), default: `true`
        -   Only the value from the new item is taken into account
        -   Does not control "pop" animation in GUI when item is picked up or changes count

#### `minecraft:model` Item Model Type

-   Renders a plain model from the `models` directory
-   Fields:
    -   `model`: Namespaced ID of a model in `models` (e.g. `minecraft:block/yellow_glazed_terracotta`)
    -   `tints`: A list of tint sources to apply to elements of rendered model (first entry applies to `tintindex` 0, second one - 1, etc.)
        -   Each tint source is expected to return an RGB color
        -   Colors are specified as either packed integer RGB values (e.g. `-1`) or an array of RGB values in range `0.0` to `1.0` (e.g. `[ 1.0, 1.0, 1.0 ]`)
        -   Format:
            -   `type`: Type of tint source (see below)
            -   `<type-specific>` - Additional fields depending on tint source type

##### `minecraft:constant` Tint Source Type

-   Returns a constant RGB color
-   Fields:
    -   `value` - RGB value

##### `minecraft:custom_model_data` Tint Source Type

-   Returns a value from the `colors` list in the `minecraft:custom_model_data` component, if present
-   Fields:
    -   `index` - Index for field in `colors`, default: `0`
    -   `default`: RGB value

##### `minecraft:dye` Tint Source Type

-   Returns the value from the `minecraft:dyed_color` component, or a default value if not present
-   Fields:
    -   `default` - RGB value

##### `minecraft:grass` Tint Source Type

-   Returns a grass color at specific climate parameters, based on `textures/colormap/grass.png`
-   This yields the same colors as ones selected by `downfall` and `temperature` in biome configuration
-   Fields:
    -   `temperature` - Float in `0..1` (inclusive) range
    -   `downfall` - Float in `0..1` (inclusive) range

##### `minecraft:firework` Tint Source Type

-   Returns the average of colors from `minecraft:firework_explosion` component, or a default color if there are none
-   Fields:
    -   `default`: RGB value

##### `minecraft:map_color` Tint Source Type

-   Return the color from the `minecraft:map_color` component, or the default color if the component is not present
-   Fields:
    -   `default`: RGB value

##### `minecraft:potion` Tint Source Type

-   Returns a color based on the `minecraft:potion_contents` component:
    -   If the component is present:
        -   Custom color, if there is one present in the component
        -   Average of the effect colors, if at least one is present
    -   Default color, if the component is not present or doesn't have any effects
-   Fields:
    -   `default`: RGB value

##### `minecraft:team` Tint Source Type

-   Returns the team color of the context entity, if any
-   Fields:
    -   `default` - RGB value to return when there is no context entity, entity is not in a team or the team has no color

#### `minecraft:special` Item Model Type

-   Renders a special (not data-driven) model
-   Fields:
    -   `model`: Special model instance
        -   Format:
            -   `type` - Type of special model (see below)
            -   `<type-specific>` - Additional fields depending on tint source type
    -   `base`: Namespaced ID of a model in `models` to provide transformations, particle texture and GUI light

##### `minecraft:banner` Special Model Type

-   Renders a Banner with patterns from the `minecraft:banner_patterns` component
-   Fields:
    -   `color` - Color of the Banner base, one of 16 predefined colors

##### `minecraft:bed` Special Model Type

-   Renders a whole Bed
-   Fields:
    -   `texture` - Namespaced ID for the texture to use, without `textures/entity/bed/` prefix and `.png` suffix

##### `minecraft:chest` Special Model Type

-   Renders a single Chest
-   Fields:
    -   `texture` - Namespaced ID for the texture to use, without `textures/entity/chest/` prefix and `.png` suffix
    -   `openness` - Float, `0.0` (default) - fully closed, `1.0` - fully open

##### `minecraft:conduit` Special Model Type

-   Renders a Conduit
-   No fields

##### `minecraft:decorated_pot` Special Model Type

-   Renders a Decorated Pot
-   Uses values from `minecraft:pot_decorations` component
-   No fields

##### `minecraft:hanging_sign` Special Model Type

-   Renders a Hanging Sign
-   Fields:
    -   `wood_type` - One of `oak`, `spruce`, `birch`, `acacia`, `cherry`, `jungle`, `dark_oak`, `pale_oak`, `mangrove`, `bamboo`, `crimson` and `warped`
    -   `texture` - Optional namespaced ID for the texture to use, without `textures/entity/signs/hanging/` prefix and `.png` suffix
        -   If not present, it will be derived from `wood_type`

##### `minecraft:head` Special Model Type

-   Renders a Head
-   Uses profile from `minecraft:profile` component when applicable
-   Fields:
    -   `kind` - One of `skeleton`, `wither_skeleton`, `player`, `zombie`, `creeper`, `piglin`, `dragon`
    -   `texture` - Optional namespaced ID for the texture to use, without `textures/entity/` prefix and `.png` suffix
        -   If absent, default texture will be used, depending on `kind` field
        -   Additionally, if present, `minecraft:profile` component is ignored
    -   `animation` - float controlling head animation (like Piglin ears or Ender Dragon jaw), default: `0.0`

##### `minecraft:shield` Special Model Type

-   Renders a Shield
-   Uses patterns from the `minecraft:banner_patterns` component and color from the `minecraft:base_color` component
-   No fields

##### `minecraft:shulker_box` Special Model Type

-   Renders a Shulker Box
-   Fields:
    -   `texture` - Namespaced ID for the texture to use, without `textures/entity/shulker/` prefix and `.png` suffix
    -   `openness` - Float, `0.0` (default) - fully closed, `1.0` - fully open
    -   `orientation` - Orientation for rendering, default: `up`

##### `minecraft:standing_sign` Special Model Type

-   Renders a Standing Sign
-   Fields:
    -   `wood_type` - One of `oak`, `spruce`, `birch`, `acacia`, `cherry`, `jungle`, `dark_oak`, `pale_oak`, `mangrove`, `bamboo`, `crimson` and `warped`
    -   `texture` - Optional namespaced ID for the texture to use, without `textures/entity/signs/` prefix and `.png` suffix
        -   If not present, it will be derived from `wood_type`

##### `minecraft:trident` Special Model Type

-   Renders a Trident
-   No fields

#### `minecraft:composite` Item Model Type

-   Renders multiple sub-models
-   All models are rendered in the same space
-   Fields:
    -   `models`: A list of item models to render

#### `minecraft:condition` Item Model Type

-   Renders an item model depending on boolean property
-   Fields:
    -   `property`: Type of property (see below)
    -   `<property-specific>` - Additional fields depending on property type, added inline
    -   `on_true` - Item model to render when property is `true`
    -   `on_false` - Item model to render when property is `false`

##### `minecraft:broken` Boolean Property

-   Returns `true` if the item is damageable and has only one use remaining before breaking
-   No fields

##### `minecraft:bundle/has_selected_item` Boolean Property

-   Returns `true` if Bundle is "open", i.e. it has selected item visible in GUI
-   No fields

##### `minecraft:carried` Boolean Property

-   Returns `true` if item is carried between slots in GUI
-   No fields

##### `minecraft:custom_model_data` Boolean Property

-   Returns a value from the `flags` list in the `minecraft:custom_model_data` component, if present
-   Returns `false` if the component is not present
-   Fields:
    -   `index` - Index for the entry to use in `flags`, default: `0`

##### `minecraft:damaged` Boolean Property

-   Returns `true` if the item is damageable and has been used at least once
-   No fields

##### `minecraft:extended_view` Boolean Property

-   Returns `true` if the player has requested extended details by holding down the shift key
    -   Note: not a keybind, can't be rebound
-   Only works when item is displayed in UI
-   No fields

##### `minecraft:fishing_rod/cast` Boolean Property

-   Returns `true` if there is a Fishing Bobber attached to currently used Fishing Rod
-   No fields

##### `minecraft:has_component` Boolean Property

-   Returns `true` if the given component is present on the item
-   Fields:
    -   `component` - Component type to check for
    -   `ignore_default` - If the default component value for the item type should be treated as "no component", default: `false`

##### `minecraft:keybind_down` Boolean Property

-   Returns `true` if keybind is currently active
    -   Note: The keybind tested is the local one for the viewer, regardless of the context
-   Fields:
    -   `keybind` - Keybind ID, same as the value in a `keybind` text component
        -   Examples: `key.use`, `key.left`

##### `minecraft:selected` Boolean Property

-   Returns `true` if item is selected on a hotbar
-   No fields

##### `minecraft:using_item` Boolean Property

-   Returns `true` if the Player is currently using this item
-   No fields

##### `minecraft:view_entity` Boolean Property

-   When not spectating, returns `true` if the context entity is the local Player entity, i.e. one controlled by client
-   When spectating, returns `true` if the context entity is the spectated entity
-   If no context entity is present, will return `false`
-   No fields

#### `minecraft:select` Item Model Type

-   Renders an item model based on matching a string property
-   Fields:
    -   `property`: Type of property (see below)
    -   `<property-specific>` - Additional fields depending on property type, added inline
    -   `cases` - List of cases to match in format:
        -   `when` - Value to match against property, type depends on property
            -   Can be a single string or a list of strings
        -   `model` - Item model to render when this case is selected
    -   `fallback` - Item model to render if none of the cases matched the value
        -   If not present, a placeholder "missing" model will be rendered instead

##### `minecraft:block_state` String Property

-   Returns the value of some property from the `minecraft:block_state` component
-   Fields:
    -   `block_state_property` - The string key to select from the component
-   Possible values: Any string

##### `minecraft:charge_type` String Property

-   Returns the charge type stored in the `minecraft:charged_projectiles` component, if present
-   No fields
-   Possible values:
    -   `none` - If there are no projectiles, or the component is not present
    -   `rocket` - If there is at least one firework rocket
    -   `arrow` - Any other case

##### `minecraft:context_dimension` String Property

-   Returns the ID of the dimension in the context, if any
-   No fields
-   Possible values: Namespaced dimension IDs (like `minecraft:overworld`)

##### `minecraft:context_entity_type` String Property

-   Returns the type of entity present in the context, if any
-   No fields
-   Possible values: Namespaced entity type IDs

> **Developer's Note**: _Context entities were initially used only for Compasses and Clocks, which means that type is available only in rendering contexts where those items would show correct reading (see [MC-186797](https://bugs.mojang.com/browse/MC-186797) and related bugs)._

##### `minecraft:custom_model_data` String Property

-   Returns a value from `strings` list in the `minecraft:custom_model_data` component
-   Fields:
    -   `index` - Index for the entry to use in `strings`, default: `0`
-   Possible values: Any string

##### `minecraft:display_context` String Property

-   Returns the context this item is being rendered in
-   No fields
-   Possible values:
    -   `none`
    -   `thirdperson_lefthand`
    -   `thirdperson_righthand`
    -   `firstperson_lefthand`
    -   `firstperson_righthand`
    -   `head`
    -   `gui`
    -   `ground`
    -   `fixed`

##### `minecraft:local_time` String Property

-   Returns the current time, formatted according to a given pattern
-   The value is updated every second
-   For full format documentation for locale, time zone and pattern, see the ICU (International Components for Unicode) documentation
-   Fields:
    -   `locale` - Optional value describing the locale
        -   Examples:
            -   `en_US`: English language (used for things like week names), formatting as in USA
            -   `cs_AU@numbers=thai;calendar=japanese`: Czech language, Australian formatting, Thai numerals and Japanese calendar
        -   The default value is `""`, which means the "root" locale (a set of defaults, including English names)
    -   `time_zone` - Optional value describing the time zone
        -   If not present, defaults to the timezone set on the client computer
        -   Examples:
            -   `Europe/Stockholm`
            -   `GMT+0:45`
    -   `pattern` - Describes format to be used for time formatting
        -   Examples:
            -   `yyyy-MM-dd` - 4-digit year number, then 2-digit month number, then 2-digit day of month number, all zero-padded if needed, separated by `-`
            -   `HH:mm:ss` - Current time (hours, minutes, seconds), 24-hour cycle, all zero-padded to 2 digits of needed, separated by `:`
-   Possible values: Any string

> **Developer's Note**: _There is no "use locale set on client" option to avoid unexpected issues when the user's locale does not match the pack developer's one. Also, time is complicated, be careful._

![Steve is opening up gifts under a custom Christmas tree.](https://launchercontent.mojang.com/v2/images/1.21.4christmas.jpg)

##### `minecraft:main_hand` String Property

-   Returns the main hand of holding player
-   No fields
-   Possible values: `left`, `right`

##### `minecraft:trim_material` String Property

-   Returns the value of the `material` field from the `minecraft:trim` component, if present
-   No fields
-   Possible values: Namespaced IDs

#### `minecraft:range_dispatch` Item Model Type

-   Renders an item model based on a numeric property
-   This is a replacement for the old `overrides` section from block models
-   The last entry with a threshold less than or equal to the property value is selected
-   Fields:
    -   `property`: Type of property (see below)
    -   `<property-specific>` - Additional fields depending on property type
    -   `scale` - Factor to multiply property value with, default: `1.0`
    -   `entries` - List of entries in format:
        -   `threshold` - Float value for when this entry should be selected
        -   `model` - Item model to render when this entry is selected
        -   Note: The order of entries does not matter, the list will be sorted by threshold in ascending order before use
    -   `fallback` - Item model to render if no entries were less than or equal to the property value
        -   If not present, a placeholder "missing" model will be rendered instead

##### `minecraft:bundle/fullness` Numeric Property

-   Returns the weight of the `minecraft:bundle_contents` component, or `0.0` if not present
-   No fields

##### `minecraft:compass` Numeric Property

-   Returns the angle in the X-Z plane between the holder position and the target, scaled to `0..1`
-   If the target is not valid (not present, in another dimension or too close to holder position), a random value will be returned
-   Fields:
    -   `target` - One of:
        -   `none` - Always returns an invalid target
        -   `spawn` - Points at the world spawn
        -   `lodestone` - Points at a location stored in the `minecraft:lodestone_tracker` component
        -   `recovery` - Points at the last death location of the Player in the context
    -   `wobble` - If `true`, the value will oscillate for some time around target before settling, default: `true`

##### `minecraft:cooldown` Numeric Property

-   Returns the remaining cooldown for the item, scaled to `0..1`
-   No fields

##### `minecraft:crossbow/pull` Numeric Property

-   Returns Crossbow-specific use time
-   No fields

##### `minecraft:count` Numeric Property

-   Returns stack size
-   Fields:
    -   `normalize`: Boolean, default: `true`
        -   If `true`, returns the count divided by the value of the `minecraft:max_stack_size` component, clamped to `0..1`
        -   If `false`, returns the count clamped to `0..max_stack_size`

##### `minecraft:custom_model_data` Numeric Property

-   Returns a value from the `floats` list in the `minecraft:custom_model_data` component, if present
-   If the component is not present, returns `0.0`
-   Fields:
    -   `index` - Index for the entry in `floats` to use, default: `0`

##### `minecraft:damage` Numeric Property

-   Returns the value of the `minecraft:damage` component, if present
-   If the component is not present, returns `0.0`
-   Fields:
    -   `normalize`: Boolean, default: `true`
        -   If `true`, returns the damage divided by the value of the `minecraft:max_damage` component, clamped to `0..1`
        -   If `false`, returns the damage, clamped to `0..max_damage`

##### `minecraft:time` Numeric Property

-   Returns an aspect of day time (like used for Clocks), scaled to `0..1`
-   Fields:
    -   `wobble` - If `true`, the value will oscillate for some time around target before settling, default: `true`
    -   `source` - The time source, possible values:
        -   `daytime` - Time of day
        -   `moon_phase` - Moon phase
        -   `random` - Random value

##### `minecraft:use_cycle` Numeric Property

-   Returns the remaining use ticks, modulo `period`
-   Fields:
    -   `period` - Positive float, default `1.0`

##### `minecraft:use_duration` Numeric Property

-   Returns item use ticks
-   Fields:
    -   `remaining` - Boolean value determining if the used or remaining ticks should be returned, default: `false`
        -   If `true`, the returned value is the remaining use ticks
        -   If `false`, the returned value is the ticks so far

#### `minecraft:empty` Item Model Type

-   Does not render anything
-   No fields

#### `minecraft:bundle/selected_item` Item Model Type

-   Renders the selected stack in the `minecraft:bundle_contents` component, if present
-   Renders nothing if the component is missing
-   No fields

## Fixed bugs in 1.21.4

-   [MC-212](https://bugs.mojang.com/browse/MC-212) Fall damage is ignored for a couple of seconds when reloading into LAN or singleplayer worlds
-   [MC-10025](https://bugs.mojang.com/browse/MC-10025) Burn time indicator of a furnace not working correctly after reloading the world
-   [MC-12829](https://bugs.mojang.com/browse/MC-12829) Flying through climbable blocks in creative mode slows you down
-   [MC-16132](https://bugs.mojang.com/browse/MC-16132) Cave carvers don't cut through snow blocks
-   [MC-21650](https://bugs.mojang.com/browse/MC-21650) Player is immune to damage for a few seconds after saving the world and returning
-   [MC-49071](https://bugs.mojang.com/browse/MC-49071) The title of written books is not displayed in item frames unless renamed with anvils
-   [MC-50614](https://bugs.mojang.com/browse/MC-50614) Villager trading window is not closed when villager leaves interaction range
-   [MC-55347](https://bugs.mojang.com/browse/MC-55347) Title with long duration shows in other world
-   [MC-59308](https://bugs.mojang.com/browse/MC-59308) Dark/pale oak leaves sometimes do not generate centered on the tree
-   [MC-65931](https://bugs.mojang.com/browse/MC-65931) The pick block function doesn't work with entities while in survival or adventure mode
-   [MC-71990](https://bugs.mojang.com/browse/MC-71990) The 'Hat' layer of a player skin is not shown in the tab list under certain conditions
-   [MC-72846](https://bugs.mojang.com/browse/MC-72846) Altering the time of day using commands is delayed
-   [MC-73784](https://bugs.mojang.com/browse/MC-73784) Players cannot see through ice when stuck inside of it
-   [MC-74408](https://bugs.mojang.com/browse/MC-74408) The brewing stand GUI does not have container sprites for the fuel and potion output slots
-   [MC-86153](https://bugs.mojang.com/browse/MC-86153) Ctrl Pick Block gives new item even if picked item already exists in inventory
-   [MC-86455](https://bugs.mojang.com/browse/MC-86455) Pick-block creates ghost items in Creative when hotbar is full
-   [MC-99848](https://bugs.mojang.com/browse/MC-99848) Sprinting isn't canceled upon receiving the blindness effect
-   [MC-100830](https://bugs.mojang.com/browse/MC-100830) Horses glitch out and warning is logged in console when climbing up stairs
-   [MC-111516](https://bugs.mojang.com/browse/MC-111516) Player flickers/turns invisible when flying at high speeds
-   [MC-128225](https://bugs.mojang.com/browse/MC-128225) '/data remove' can't remove the NBT "CustomName"
-   [MC-129888](https://bugs.mojang.com/browse/MC-129888) Naturally-generated seagrass and kelp destroys ice
-   [MC-134002](https://bugs.mojang.com/browse/MC-134002) Blocks at y=-64 don't render on a map
-   [MC-138100](https://bugs.mojang.com/browse/MC-138100) /data remove doesn't work for the Jukebox's RecordItem tag
-   [MC-150224](https://bugs.mojang.com/browse/MC-150224) Rabbits can occasionally get stuck on the edges of blocks
-   [MC-158205](https://bugs.mojang.com/browse/MC-158205) Ender Dragon doesn't take damage from melee attacks unless hit a certain way
-   [MC-158872](https://bugs.mojang.com/browse/MC-158872) Models use model of last matched predicate, not closest match
-   [MC-159508](https://bugs.mojang.com/browse/MC-159508) Ctrl + Pick block on beehives and nests does not copy their honey levels
-   [MC-160001](https://bugs.mojang.com/browse/MC-160001) Skulls, signs, hanging signs, banners and decorated pots have no breaking/sprinting particles
-   [MC-160051](https://bugs.mojang.com/browse/MC-160051) Players can prevent fire damage by reloading world/re-joining server
-   [MC-165778](https://bugs.mojang.com/browse/MC-165778) Maps ignore blocks at the lowest block position (y = -64 in the Overworld) with no block above
-   [MC-166072](https://bugs.mojang.com/browse/MC-166072) Custom Trident model ignores "layer0" and "elements" section
-   [MC-166614](https://bugs.mojang.com/browse/MC-166614) Advancements menu doesn't render titles fully when they're longer than roughly 30 characters
-   [MC-177078](https://bugs.mojang.com/browse/MC-177078) Sound event minecraft:entity.minecart.inside does not have an associated subtitle
-   [MC-177082](https://bugs.mojang.com/browse/MC-177082) block.\[block type\].fall sounds have no subtitles
-   [MC-177084](https://bugs.mojang.com/browse/MC-177084) Ambient sounds when flying with elytra have no subtitles
-   [MC-177091](https://bugs.mojang.com/browse/MC-177091) Skeleton horse underwater jump sound has no subtitle
-   [MC-179815](https://bugs.mojang.com/browse/MC-179815) Data command doesn't remove leash from a mob
-   [MC-181438](https://bugs.mojang.com/browse/MC-181438) Elytra visual shuddering when using slow falling
-   [MC-186105](https://bugs.mojang.com/browse/MC-186105) Rain particles look lighter than they should with graphics set to Fabulous!
-   [MC-186341](https://bugs.mojang.com/browse/MC-186341) Command autocomplete doesn't consider parts after a slash
-   [MC-189612](https://bugs.mojang.com/browse/MC-189612) When switching gamemode from survival to spectator using F3 + F4, the player's breathing does not reset.
-   [MC-191096](https://bugs.mojang.com/browse/MC-191096) Fences and walls can no longer be placed in invalid block states by using /setblock or /fill
-   [MC-191698](https://bugs.mojang.com/browse/MC-191698) Cannot set "shape" block state of stairs with /setblock
-   [MC-192498](https://bugs.mojang.com/browse/MC-192498) /fill and /setblock cannot set different directional block states of several blocks, such as glass panes and iron bars
-   [MC-192791](https://bugs.mojang.com/browse/MC-192791) Doors' block states cannot be set if another door half exists
-   [MC-192943](https://bugs.mojang.com/browse/MC-192943) Cannot set the in\_wall block state of fence gates with /setblock or /fill
-   [MC-192956](https://bugs.mojang.com/browse/MC-192956) Cannot setblock chest type other than single without other adjacent chest
-   [MC-192959](https://bugs.mojang.com/browse/MC-192959) Cannot setblock a directional state on redstone wire nor tripwire
-   [MC-193176](https://bugs.mojang.com/browse/MC-193176) Most mobs with CanPickUpLoot prefer swords over axes and will downgrade their weapon
-   [MC-193313](https://bugs.mojang.com/browse/MC-193313) Mob item pick up behavior is not distinct resulting in mobs constantly dropping and picking up items
-   [MC-193315](https://bugs.mojang.com/browse/MC-193315) /setblock and /fill resets the instrument block state of note blocks
-   [MC-193336](https://bugs.mojang.com/browse/MC-193336) Heads/skulls don't render when held by an enderman or as block display entities
-   [MC-197857](https://bugs.mojang.com/browse/MC-197857) Villagers trying to claim claimed beds
-   [MC-200508](https://bugs.mojang.com/browse/MC-200508) No subtitle for fish swim
-   [MC-201940](https://bugs.mojang.com/browse/MC-201940) After dying, Ender Dragon body part hitboxes do not move upwards with the main hitbox
-   [MC-202250](https://bugs.mojang.com/browse/MC-202250) Sprinting particles appear when sprinting inside of boats in shallow water
-   [MC-203146](https://bugs.mojang.com/browse/MC-203146) No subtitle for item.crossbow.loading\_middle
-   [MC-204124](https://bugs.mojang.com/browse/MC-204124) Underwater minecart riding sound does not have a subtitle
-   [MC-205074](https://bugs.mojang.com/browse/MC-205074) Rain and snow are not affected by the fog from powder snow when using the "Fabulous!" graphic setting
-   [MC-206684](https://bugs.mojang.com/browse/MC-206684) Spyglass particles have no associated texture
-   [MC-207605](https://bugs.mojang.com/browse/MC-207605) /data remove entity \[tamed wolf\] Owner does not remove ownership of the wolf
-   [MC-215992](https://bugs.mojang.com/browse/MC-215992) Inconsistency with blackstone and stone pressure plate drops compared to buttons
-   [MC-217515](https://bugs.mojang.com/browse/MC-217515) Particle effects are brighter using Fabulous! graphics setting
-   [MC-218873](https://bugs.mojang.com/browse/MC-218873) Lanterns and soul lanterns require a pickaxe to drop despite being able to break the block on which they are mounted and them drop
-   [MC-222795](https://bugs.mojang.com/browse/MC-222795) Daylight detector can be ctrl + pick-block'ed with NBT data despite being unable to store inverted: true state
-   [MC-224763](https://bugs.mojang.com/browse/MC-224763) Fireworks are not affected by the fog from powder snow or lava when using the "Fabulous!" graphic setting
-   [MC-225367](https://bugs.mojang.com/browse/MC-225367) Magma Cube's layers UV mapping overlaps
-   [MC-229142](https://bugs.mojang.com/browse/MC-229142) Spyglass texture doesn't allow override through resource pack
-   [MC-236295](https://bugs.mojang.com/browse/MC-236295) The game does not report absent particle texture references in models to the output log
-   [MC-248264](https://bugs.mojang.com/browse/MC-248264) /data remove can't remove ArmorItems
-   [MC-249079](https://bugs.mojang.com/browse/MC-249079) Sculk veins are not mirrored correctly from behind
-   [MC-254356](https://bugs.mojang.com/browse/MC-254356) Dying to a minecart with TNT ignited by a blaze fireball doesn't count as the blaze's kill
-   [MC-255254](https://bugs.mojang.com/browse/MC-255254) /setblock can't place snowy grass blocks
-   [MC-256649](https://bugs.mojang.com/browse/MC-256649) Hanging signs aren't rendered when held by endermen or as block display entities
-   [MC-256822](https://bugs.mojang.com/browse/MC-256822) Advancement description text cuts words in weird places if title is too short
-   [MC-260216](https://bugs.mojang.com/browse/MC-260216) Decorated pots aren't rendered when held by endermen or as block display entities
-   [MC-264541](https://bugs.mojang.com/browse/MC-264541) Nine\_sliced sprite glitch
-   [MC-264963](https://bugs.mojang.com/browse/MC-264963) Players jitter and land slightly too high up when landing on powder snow while wearing leather boots
-   [MC-265033](https://bugs.mojang.com/browse/MC-265033) Slots with item outline textures behave inconsistently when items are placed inside of these slots
-   [MC-265305](https://bugs.mojang.com/browse/MC-265305) Unused pixels in magmacube.png UV texture map & Used section removed in previous fix
-   [MC-265637](https://bugs.mojang.com/browse/MC-265637) /execute on origin doesn't work on Area Effect Cloud's owner after rejoining
-   [MC-265788](https://bugs.mojang.com/browse/MC-265788) The "Start free Snapshot Realm" element can be selected or remain selected causing its tooltip to erroneously be visible when other interfaces are open
-   [MC-266019](https://bugs.mojang.com/browse/MC-266019) Large bold text can have gaps in the middle of characters
-   [MC-266572](https://bugs.mojang.com/browse/MC-266572) When the experience orb is hit by a wind charge, the physical collision is much more lagged compared to the item
-   [MC-266991](https://bugs.mojang.com/browse/MC-266991) Exposed Copper Bulb has inconsistent pixels
-   [MC-267095](https://bugs.mojang.com/browse/MC-267095) Nether Brick block texture misalignment
-   [MC-267192](https://bugs.mojang.com/browse/MC-267192) "download.pack.failed" string exceeds the prompt box when the Force Unicode Font is turned off
-   [MC-267343](https://bugs.mojang.com/browse/MC-267343) Sprinting isn't canceled upon riding entities
-   [MC-267730](https://bugs.mojang.com/browse/MC-267730) Text wall when trying to join a server
-   [MC-267878](https://bugs.mojang.com/browse/MC-267878) Tutorial hint for movement may not fit all the required text if controls are changed
-   [MC-268364](https://bugs.mojang.com/browse/MC-268364) Wind Charges don't ignite TNT minecarts
-   [MC-268522](https://bugs.mojang.com/browse/MC-268522) The last language option is not deselected if you reach the bottom of the list and exit the menu
-   [MC-268822](https://bugs.mojang.com/browse/MC-268822) There are no shadows on text displayed within the singleplayer, multiplayer, and realms list menus
-   [MC-269145](https://bugs.mojang.com/browse/MC-269145) Wool item entities created when shearing a sheep stutter while flying
-   [MC-269616](https://bugs.mojang.com/browse/MC-269616) Telemetry Data scroll bar does not have a background
-   [MC-269743](https://bugs.mojang.com/browse/MC-269743) Layer material entry text on the superflat customization screen is not vertically centered
-   [MC-269749](https://bugs.mojang.com/browse/MC-269749) Report Player scroll bar does not have a background
-   [MC-269935](https://bugs.mojang.com/browse/MC-269935) Advancement box textures use nine-slice scaling, but seemingly cannot be configured
-   [MC-270136](https://bugs.mojang.com/browse/MC-270136) Thrown projectiles with custom\_model\_data do not maintain proper particles when breaking
-   [MC-270529](https://bugs.mojang.com/browse/MC-270529) Air's model does not define a particle texture, causing issues
-   [MC-271169](https://bugs.mojang.com/browse/MC-271169) The "Isn't It Scute?" advancement is granted when unleashing an armadillo while holding a brush
-   [MC-271218](https://bugs.mojang.com/browse/MC-271218) Empty Offers:{} NBT doesn't disable trades anymore
-   [MC-271786](https://bugs.mojang.com/browse/MC-271786) Empty block states in noise\_provider does not cause validation to fail, causing crash
-   [MC-272062](https://bugs.mojang.com/browse/MC-272062) Dimension padding doesn't affect the start piece
-   [MC-272105](https://bugs.mojang.com/browse/MC-272105) Decorated Pot is missing the "contents" implicit data component type
-   [MC-272245](https://bugs.mojang.com/browse/MC-272245) You can get the advancement "Shear Brilliance" when you use shears on a leashed wolf
-   [MC-272923](https://bugs.mojang.com/browse/MC-272923) 1.21 main menu panorama missing ladder
-   [MC-272994](https://bugs.mojang.com/browse/MC-272994) Allays assigned to a player can be set on fire with sweeping and fire aspect
-   [MC-273407](https://bugs.mojang.com/browse/MC-273407) Block entity items with custom block states keep them as components when placed
-   [MC-273450](https://bugs.mojang.com/browse/MC-273450) Mobs with CanPickUpLoot:1b behave inconsistently with the mace / trident
-   [MC-273522](https://bugs.mojang.com/browse/MC-273522) Mobs with CanPickUpLoot no longer pick up enchanted items after picking up an unenchanted item
-   [MC-273635](https://bugs.mojang.com/browse/MC-273635) Trial spawners forget their designated mob when placed by player out of creative mode, assigned by spawn eggs
-   [MC-273710](https://bugs.mojang.com/browse/MC-273710) Wild foxes "trust" the player after being leashed to a fence
-   [MC-273861](https://bugs.mojang.com/browse/MC-273861) When a leashed bee enters a hive, the leash disappears
-   [MC-274268](https://bugs.mojang.com/browse/MC-274268) Trial Spawner keeps flashing after cooldown ends
-   [MC-274571](https://bugs.mojang.com/browse/MC-274571) The advancement "Little Sniffs" can be obtained by unleashing the snifflet and not feeding it
-   [MC-275011](https://bugs.mojang.com/browse/MC-275011) Instant mine does not work when standing inside of cobwebs
-   [MC-275274](https://bugs.mojang.com/browse/MC-275274) Missing sound for event: minecraft:block.spawner.fall
-   [MC-275338](https://bugs.mojang.com/browse/MC-275338) Sprint particles can be seen if you mount a minecart (with no rail below it) while running
-   [MC-275339](https://bugs.mojang.com/browse/MC-275339) Bad contrast in bundle interface with dark blocks
-   [MC-275917](https://bugs.mojang.com/browse/MC-275917) Consumable blocking animation is broken in first person
-   [MC-275952](https://bugs.mojang.com/browse/MC-275952) Riding a minecart above the water with Frost Walker boots on will also give the Frost Walker effect
-   [MC-276110](https://bugs.mojang.com/browse/MC-276110) honey\_level model predicate range is 1 for level 5 and 0 for levels 1-4
-   [MC-276115](https://bugs.mojang.com/browse/MC-276115) New Bee Nest and Beehive item models don't use the block parent
-   [MC-276123](https://bugs.mojang.com/browse/MC-276123) Display entity shadow\_radius updates for all display entities
-   [MC-276329](https://bugs.mojang.com/browse/MC-276329) Bundles move up and down slightly when right-clicked
-   [MC-276389](https://bugs.mojang.com/browse/MC-276389) The "Can hold a mixed stack of items" text within bundle tooltips doesn't have a shadow
-   [MC-276412](https://bugs.mojang.com/browse/MC-276412) Custom item models set to a shield and various other items all create invisible items
-   [MC-276529](https://bugs.mojang.com/browse/MC-276529) Converting a villager into a witch does not close the trading GUI
-   [MC-276654](https://bugs.mojang.com/browse/MC-276654) item\_model item component breaks on trident
-   [MC-276697](https://bugs.mojang.com/browse/MC-276697) Neutral mobs don't pathfind correctly to their target after being unleashed
-   [MC-276728](https://bugs.mojang.com/browse/MC-276728) Tridents and spyglasses appear dark in the inventory if given a custom item model for a block
-   [MC-276730](https://bugs.mojang.com/browse/MC-276730) Bundles appear dark in the inventory if given a custom item model for a block and then scrolled through
-   [MC-276731](https://bugs.mojang.com/browse/MC-276731) Items which use entity models will not render another entity model if specified via item model component
-   [MC-276732](https://bugs.mojang.com/browse/MC-276732) Colors will carry over from item ID to target model
-   [MC-276764](https://bugs.mojang.com/browse/MC-276764) Eggs with custom models use the particles from that model, but snowballs do not
-   [MC-276769](https://bugs.mojang.com/browse/MC-276769) Missing texture when throwing eggs with certain template models
-   [MC-276771](https://bugs.mojang.com/browse/MC-276771) Missing texture when a damageable item with one of several template models is destroyed
-   [MC-276794](https://bugs.mojang.com/browse/MC-276794) There are no shadows on text displayed within the social interactions list menu
-   [MC-276799](https://bugs.mojang.com/browse/MC-276799) There are no shadows on text displayed within the superflat customization or preset lists
-   [MC-276828](https://bugs.mojang.com/browse/MC-276828) Minecraft no longer prints an error to the game log when a model fails to define a texture
-   [MC-276847](https://bugs.mojang.com/browse/MC-276847) Bundles given the model of a different bundle will not preserve their color when scrolled through
-   [MC-276962](https://bugs.mojang.com/browse/MC-276962) JVM crash occurs when minimizing maximized window
-   [MC-276969](https://bugs.mojang.com/browse/MC-276969) TNT Minecarts with explosion\_power set to 0 can still break blocks
-   [MC-276986](https://bugs.mojang.com/browse/MC-276986) Missing pixel in open bundle texture
-   [MC-277042](https://bugs.mojang.com/browse/MC-277042) Blue and Red open bundle are inconsistent with the other colors
-   [MC-277066](https://bugs.mojang.com/browse/MC-277066) Creakings do not show particles leading to the creaking heart if Particles are set to Minimal
-   [MC-277071](https://bugs.mojang.com/browse/MC-277071) Middle clicking on a creaking spawned naturally through a creaking heart doesn't give you the spawn egg
-   [MC-277072](https://bugs.mojang.com/browse/MC-277072) You can use bone meal on pale moss carpets in situations where nothing grows
-   [MC-277074](https://bugs.mojang.com/browse/MC-277074) The entity shadows of creakings are slightly too large in relation to the size of their models
-   [MC-277076](https://bugs.mojang.com/browse/MC-277076) Pale hanging moss doesn't have an assigned tool
-   [MC-277082](https://bugs.mojang.com/browse/MC-277082) Creakings take knockback from wind charges
-   [MC-277092](https://bugs.mojang.com/browse/MC-277092) The eyes of creakings aren't visible when creakings have the invisibility effect
-   [MC-277094](https://bugs.mojang.com/browse/MC-277094) Pale oak hanging sign uses a totally different palette to the rest of the wood set
-   [MC-277101](https://bugs.mojang.com/browse/MC-277101) Destroying a creaking heart with player-activated TNT does not grant the Monster Hunter advancement
-   [MC-277113](https://bugs.mojang.com/browse/MC-277113) Pale oak sign item and block texture is inconsistent with the other signs
-   [MC-277115](https://bugs.mojang.com/browse/MC-277115) Creaking mob can spawn inside block
-   [MC-277123](https://bugs.mojang.com/browse/MC-277123) You can get soft locked if a creaking falls in a hole with you
-   [MC-277129](https://bugs.mojang.com/browse/MC-277129) The Creaking "slides" on the ground when not aggro towards the player
-   [MC-277132](https://bugs.mojang.com/browse/MC-277132) Pale oak sign item textures are inconsistent
-   [MC-277134](https://bugs.mojang.com/browse/MC-277134) Pale chest boat item is incorrect
-   [MC-277140](https://bugs.mojang.com/browse/MC-277140) The statistics screen does not visually differentiate the creaking and creaking\_transient entities
-   [MC-277145](https://bugs.mojang.com/browse/MC-277145) The 2 brightest pixel colors on pale oak boat items are wrong
-   [MC-277149](https://bugs.mojang.com/browse/MC-277149) Creakings are affected by knockback from mace smash attacks
-   [MC-277152](https://bugs.mojang.com/browse/MC-277152) The statistic for killing a creaking doesn't increment when breaking a creaking heart
-   [MC-277154](https://bugs.mojang.com/browse/MC-277154) Sculk sensors are not activated upon creakings dying through their creaking hearts being destroyed
-   [MC-277164](https://bugs.mojang.com/browse/MC-277164) Music plays in the pale garden
-   [MC-277169](https://bugs.mojang.com/browse/MC-277169) Creaking moves while a player is looking at it while moving a certain way and looking through pale moss
-   [MC-277202](https://bugs.mojang.com/browse/MC-277202) Differences in the highlight effect of empty slot outlines in the GUI
-   [MC-277213](https://bugs.mojang.com/browse/MC-277213) Subtitles for cave sounds, creaking heart idle sounds, and pale hanging moss idle sounds are identical but are shown separately
-   [MC-277214](https://bugs.mojang.com/browse/MC-277214) The sound event associated with the "Creaking sees player" subtitle doesn't exist
-   [MC-277226](https://bugs.mojang.com/browse/MC-277226) Creakings not linked to any heart display wrong subtitles when attacked with non-damaging projectiles
-   [MC-277243](https://bugs.mojang.com/browse/MC-277243) Creakings take knockback from Punch bows
-   [MC-277264](https://bugs.mojang.com/browse/MC-277264) The Creaking can be knocked back by zoglins
-   [MC-277268](https://bugs.mojang.com/browse/MC-277268) Pufferfish have no hit delay on creakings; they make a loud buzzing noise constantly
-   [MC-277271](https://bugs.mojang.com/browse/MC-277271) Sniffers can't dig into pale moss
-   [MC-277275](https://bugs.mojang.com/browse/MC-277275) Crash upon loading chunks when teleporting
-   [MC-277305](https://bugs.mojang.com/browse/MC-277305) Creakings are able to be pushed around by entities and players when standing on soul sand and mud
-   [MC-277363](https://bugs.mojang.com/browse/MC-277363) Creakings cannot rotate their heads independently from their bodies
-   [MC-277368](https://bugs.mojang.com/browse/MC-277368) The "message(s) selected" text within the "Select Chat Messages to Report" menu is positioned too close to the header separator
-   [MC-277373](https://bugs.mojang.com/browse/MC-277373) There are no shadows on text used to display the names of categories within the key binds menu
-   [MC-277374](https://bugs.mojang.com/browse/MC-277374) There are no shadows on text used to display the names of lists within the resource pack and data pack menus
-   [MC-277387](https://bugs.mojang.com/browse/MC-277387) Evokers run away from creakings faster than other illagers
-   [MC-277399](https://bugs.mojang.com/browse/MC-277399) The hand animation isn't played when constantly emptying items from bundles
-   [MC-277408](https://bugs.mojang.com/browse/MC-277408) There are no shadows on text used to display the description of report categories within the "Select Report Category" menu
-   [MC-277413](https://bugs.mojang.com/browse/MC-277413) The empty state sprite for the oxygen bar takes a little longer to start displaying compared to Bedrock Edition
-   [MC-277440](https://bugs.mojang.com/browse/MC-277440) There are no shadows on text used to display the speed at which a world is being uploaded within the realms menu
-   [MC-277441](https://bugs.mojang.com/browse/MC-277441) There are no shadows on text used to display the start date and time left of your realm subscription within the realms menu
-   [MC-277443](https://bugs.mojang.com/browse/MC-277443) There are no shadows on text displayed when connecting to realms
-   [MC-277444](https://bugs.mojang.com/browse/MC-277444) There are no shadows on text used to display the names of text boxes within the realms settings menu
-   [MC-277477](https://bugs.mojang.com/browse/MC-277477) There are no shadows on text used to display the description of advancements within the advancements menu
-   [MC-277478](https://bugs.mojang.com/browse/MC-277478) The "Layer Material" and "Height" text within the "Superflat Customization" menu is positioned too close to the header separator
-   [MC-277479](https://bugs.mojang.com/browse/MC-277479) There are no shadows on text used to display the names of game rules within the game rules menu
-   [MC-277480](https://bugs.mojang.com/browse/MC-277480) There are no shadows on placeholder text displayed within the "Please describe what happened" box within the reporting menu
-   [MC-277499](https://bugs.mojang.com/browse/MC-277499) Most empty slot icons ignore "scaling" parameter in mcmeta files
-   [MC-277510](https://bugs.mojang.com/browse/MC-277510) When grass or mycelium grows under powder snow the grass is not snowy
-   [MC-277533](https://bugs.mojang.com/browse/MC-277533) Bundles can remain in the open state when taken out from saved hotbars
-   [MC-277549](https://bugs.mojang.com/browse/MC-277549) Arrows summoned with custom motion don't render correctly
-   [MC-277557](https://bugs.mojang.com/browse/MC-277557) Creaking Heart has inconsistent and miscolored pixels
-   [MC-277617](https://bugs.mojang.com/browse/MC-277617) The base damage of the Power enchantment was reduced in 1.21
-   [MC-277651](https://bugs.mojang.com/browse/MC-277651) Arrows and tridents glitch when in an explosion or wind charge burst
-   [MC-277657](https://bugs.mojang.com/browse/MC-277657) Arrows are not correctly affected by rising bubble columns
-   [MC-277658](https://bugs.mojang.com/browse/MC-277658) Tridents glitch up and down in rising bubble columns
-   [MC-277682](https://bugs.mojang.com/browse/MC-277682) Arrows and tridents glitch after shooting/throwing them onto magma/soul sand blocks underwater
-   [MC-277742](https://bugs.mojang.com/browse/MC-277742) Creakings activate for a brief moment when switching from Creative to Spectator mode
-   [MC-277754](https://bugs.mojang.com/browse/MC-277754) Chunks on the corner of the rendering distance are not synchronized between client and server for the terrain
-   [MC-277776](https://bugs.mojang.com/browse/MC-277776) Baby cats and ocelots size is changed
-   [MC-277815](https://bugs.mojang.com/browse/MC-277815) Creakings on a team can still be observed and stopped by teammate players
-   [MC-277833](https://bugs.mojang.com/browse/MC-277833) Creakings can attack players in the same team as them
-   [MC-277871](https://bugs.mojang.com/browse/MC-277871) Creaking Hearts do not have a unique place sound
-   [MC-277889](https://bugs.mojang.com/browse/MC-277889) Villagers' iron golem detection range is increased for villagers upgraded from 1.21.1 or earlier
-   [MC-277892](https://bugs.mojang.com/browse/MC-277892) Clicking on the selected recipe a second time in the stonecutter GUI turns the result item into a ghost item
-   [MC-277916](https://bugs.mojang.com/browse/MC-277916) Containers are locked when upgrading a world from certain versions
-   [MC-277925](https://bugs.mojang.com/browse/MC-277925) Resin Brick Stairs are not part of the #stairs block and item tags
-   [MC-277926](https://bugs.mojang.com/browse/MC-277926) Resin Brick Slab is not part of the #slab block and item tags
-   [MC-277929](https://bugs.mojang.com/browse/MC-277929) The game crashes when attempting to use the void preset
-   [MC-277930](https://bugs.mojang.com/browse/MC-277930) Eyeblossom subtitles are inverted
-   [MC-277931](https://bugs.mojang.com/browse/MC-277931) Incorrect display on the map of the flower Closed and Open Eyeblossom
-   [MC-277932](https://bugs.mojang.com/browse/MC-277932) Resin Clump is not part of the #replaceable block tag
-   [MC-277933](https://bugs.mojang.com/browse/MC-277933) Smithing Table doesn't show a Clump icon for ingredient slot
-   [MC-277939](https://bugs.mojang.com/browse/MC-277939) Programmer Art's empty slot icons may not have been correctly updated for 24w44a
-   [MC-277941](https://bugs.mojang.com/browse/MC-277941) resin\_clump is not mirrored correctly from behind
-   [MC-277945](https://bugs.mojang.com/browse/MC-277945) Incorrect verb form in "Elytra swooshes" subtitle
-   [MC-277948](https://bugs.mojang.com/browse/MC-277948) Suspicious stew gives different durations of Blindness for Eyeblossom and Azure Bluet
-   [MC-277950](https://bugs.mojang.com/browse/MC-277950) Open potted eyeblossom is shaded (flower\_pot\_cross\_emissive)
-   [MC-277951](https://bugs.mojang.com/browse/MC-277951) Eyeblossom is placed in an unexpected position in the Creative inventory
-   [MC-277952](https://bugs.mojang.com/browse/MC-277952) Sprinting isn't canceled upon flying with elytra
-   [MC-277954](https://bugs.mojang.com/browse/MC-277954) Creaking Heart underwater plays spawning sounds in a loop
-   [MC-277955](https://bugs.mojang.com/browse/MC-277955) Using a loom crashes the game
-   [MC-277959](https://bugs.mojang.com/browse/MC-277959) Reloading chunks can break translucency sorting
-   [MC-277961](https://bugs.mojang.com/browse/MC-277961) Experience orbs incorrectly bounce up
-   [MC-277962](https://bugs.mojang.com/browse/MC-277962) Chiseled Resin Bricks have a miscolored pixel
-   [MC-277964](https://bugs.mojang.com/browse/MC-277964) Resin is not generated when a creaking is attacked by a wolf owned by a player
-   [MC-277966](https://bugs.mojang.com/browse/MC-277966) Creaking does not generate resin from player-caused explosions
-   [MC-277967](https://bugs.mojang.com/browse/MC-277967) The game crashes when certain explosions occur near a creaking in its death animation
-   [MC-277970](https://bugs.mojang.com/browse/MC-277970) Hanging signs don't display chains when attached to the side of a block
-   [MC-277972](https://bugs.mojang.com/browse/MC-277972) You can no longer swim when crouched under a slab
-   [MC-277977](https://bugs.mojang.com/browse/MC-277977) Teleporting large distances whilst gliding prevents the world from loading and player model glitchiness
-   [MC-277983](https://bugs.mojang.com/browse/MC-277983) Naturally-spawned creaking hearts drop experience when broken in Creative mode
-   [MC-277994](https://bugs.mojang.com/browse/MC-277994) Picking a decorated pot or a shulker box always keeps its container data
-   [MC-278002](https://bugs.mojang.com/browse/MC-278002) Sculk sensors are not activated upon resin clumps spawning from creaking hearts
-   [MC-278004](https://bugs.mojang.com/browse/MC-278004) Hitting a creaking heart with a wind charge kills the creaking
-   [MC-278028](https://bugs.mojang.com/browse/MC-278028) Using items underwater can force you to exit swimming mode
-   [MC-278058](https://bugs.mojang.com/browse/MC-278058) Breeze entity model rods no longer spin around when it is moving
-   [MC-278071](https://bugs.mojang.com/browse/MC-278071) "minecraft.used:minecraft.trident" doesn't increase when throwing a trident
-   [MC-278102](https://bugs.mojang.com/browse/MC-278102) Recipe book icons no longer visually indicate that an item has multiple recipes
-   [MC-278124](https://bugs.mojang.com/browse/MC-278124) Resin clumps are not waterloggable
-   [MC-278137](https://bugs.mojang.com/browse/MC-278137) Inconsistent behavior occurs when the "Sprint" option is set to "Hold" while riding camels and when players sprint normally
-   [MC-278257](https://bugs.mojang.com/browse/MC-278257) Oxygen bar animation can be interrupted by applying water breathing

---

Coming in hot with a hotfix, here's Minecraft 1.21.3 with a fix for a critical issue affecting Realms with Resource Packs enabled.

This version also fixes an upgrade problem with all Salmon turning small. This version will upgrade any small Salmon from previous versions into medium variants, including any from 1.21.2.

## Fixed bugs in 1.21.3

-   [MC-277791](https://bugs.mojang.com/browse/MC-277791) - Attempting to join a Realm with a Resource Pack enabled fails with an error
-   [MC-277779](https://bugs.mojang.com/browse/MC-277779) - Salmon from 1.21.1 or before shrink when updating to 1.21.2

---

We're now releasing the Bundles of Bravery game drop for Java Edition, featuring space-saving Bundles and the addition of Hardcore Mode to Realms!

This game drop is all about embarking on a new adventure, collecting everything you can along the way, and definitely not dying. Together with these additions, we've also added baby variants of Dolphins and Squids, given Redstone Torches an updated look, optimized the game, and fixed over 300 bugs! To top it off, there's also a heap of technical changes, bringing even more control to creators.

Goodness, that was a lot, wasn't it? Perhaps we should've stuffed it all into a Bundle?

## New Features

-   Added Bundles

![An assortment of differently dyed bundles laying on the grass in a forest.](https://launchercontent.mojang.com/v2/images/1.21.2bundles.jpg)

### Bundles

-   A Bundle is an item that can pack different items together into the same stack
-   A Bundle only fits one stack (usually 64 items) but it can be a mixture of many different item types
-   You can insert items into a Bundle directly in the inventory
-   Bundles have a tooltip that shows the items inside
    -   If a Bundle has less than 12 item types inside, the tooltip will show all of them
    -   Otherwise, the tooltip will show the top three rows of items (at least 8 item types) and the others will be hidden below
-   You can select any of the visible items to pull out of the Bundle
    -   Right-click to take the first item
    -   Use the scroll wheel to select a different item, then right-click to take it
-   When selecting an item to remove, the Bundle icon shows that item poking out of the Bundle
-   When holding a Bundle in hand, you can empty items onto the ground by right-clicking or holding right-click
-   The Bundle is crafted with one String above one Leather
-   The controls have changed from the original prototype:
    -   Use left-click to put an item into a Bundle
    -   Use right-click to remove the top item type from a Bundle
    -   When the Bundle tooltip is visible, use the mouse wheel to select a different item type, then use right-click to remove it

![Alex is standing on the porch of a cobblestone house reaching out their arms with a pink dyed bundle in their hand, offering it to Ari that is standing opposite them on the gravel road outside the house.](https://launchercontent.mojang.com/v2/images/1.21.2bundlegift.jpg)

## Changes

-   Enabled hardcore mode for Realms
-   Updated the world creation screen for Realms
-   Trial Chambers have been updated with new variations
-   Added baby versions of Dolphins, Squids, and Glow Squids
-   Added Salmon variants
-   Sneaking while bouncing on a Slime Block will no longer cause fall damage

![Zuri is sneaking on a line of slime blocks as Efe falls on top of another line of slime blocks a little bit further back, bouncing as they are not sneaking. Under the blocks there is a pool of lava and magma blocks.](https://launchercontent.mojang.com/v2/images/1.21.2slimeblockcrouch.jpg)

-   Tweaks to existing Blocks, Items and Entities
-   Thrown Ender Pearls now load and tick chunks
-   Banner Pattern items have new names and icons
-   Redstone Torches have been given a new look to give them a unique and distinctive identity

![Zuri and Efe are looking at a peculiar machine pushing different coloured concrete powder. In the foreground the new red stone torch model is lit up as the machine is activated.](https://launchercontent.mojang.com/v2/images/1.21.2newredstonetorches.jpg)

-   Added two new Banner Patterns: Field Masoned, and Bordure Indented
-   The distance that Bees fly as well as the cooldowns between Bee behaviors have been tweaked
-   Raider spawn logic has been updated
-   Smithing Template items are now named after their template type instead of the generic "Smithing Template" name
    -   They instead specify that they are a Smithing Template through a subtitle in the hover text
-   Equipping a Carved Pumpkin on your head now removes the player marker from other players' maps
-   Various items and blocks have had their assigned rarities changed
-   Introduced new accessibility features
-   The game will now limit the maximum frame rate when it is minimized or when the player is AFK
    -   A new video setting is introduced to configure this behavior
-   Improvements to the game's performance
-   Added language support for Tzotzil, Belarusian (Latin), and High Norwegian
-   Throwing items out of your inventory very quickly in creative mode is now throttled

### Realms

-   Now uses the normal, fully-featured world creation screen
    -   Enables game rule customization
    -   Enables data pack customization
-   The game mode for the last active world on a Realm will now be visible on the main Realms screen if applicable

#### Hardcore Mode

-   Hardcore mode is now available in Realms
-   It is accessible when creating a new world or recreating an existing one

![The player in a hardcore realm is being attacked by a zombie librarian in front of a plains village. ](https://launchercontent.mojang.com/v2/images/1.21.2hardcore.jpg)

### Tweaks to Blocks, Items and Entities

-   Wolves can now also be fed Cod, Cooked Cod, Salmon, Cooked Salmon, Tropical Fish, Pufferfish and Rabbit Stew
-   Bats can now spawn at any height, not just below sea level, as long as it is dark enough and there is a solid block to spawn on
-   Breeze no longer have a minimum distance required to attack a target
-   The portal cooldowns of vehicles and projectiles have been tweaked
    -   After using a Nether Portal, Minecarts and Boats now only need to leave the portal for 0.5 seconds to use a portal again (down from previous 15 seconds)
    -   After using a Nether Portal, projectiles such as Ender Pearls and Arrows now only need to leave the portal for 2 ticks to use a portal again (down from previous 15 seconds)
-   Projectiles such as Arrows, Tridents and Fishing Bobbers now bounce off the world border if hit
-   Being killed by a Mace smash attack now shows a new death message
-   Added unique block sounds to the Monster Spawner block
-   Enchanted Shields now have the same reduced glint as enchanted armor
-   Items that convert to another item after consumption will no longer do so in creative mode
    -   For example, a Honey Bottle will no longer add a Glass Bottle to your inventory when consumed in creative mode
-   Suspicious Stew recipes are now shown in the Recipe Book
-   Shulker Box coloring recipes are now shown in the Recipe Book
-   Shulker Box and Bundle coloring recipes no longer work when trying to apply a Dye to an item of the same color

### Trial Chambers

-   Added new variations to the hallways, including "Encounters": Short challenges leading to a larger chamber
-   Beds in intersections now have their colors randomized
-   Replaced the empty Chests at the entrance of chamber with a Hopper and Barrel

### New Mob Variation

-   Added baby versions of Dolphins, Squids, and Glow Squids
    -   Squid Spawn Eggs will only spawn adult Squids
    -   There is a 5% chance of Squids spawned in groups in the wild to be a baby
-   Salmon may now spawn as Small, Medium (current size), or Large

![From under the water, looking up towards the sky through a ravine we can see baby glow squids and baby dolphins swimming around.](https://launchercontent.mojang.com/v2/images/1.21.2babysquidsanddolphins.jpg)

### Ender Pearl Chunk Loading

-   Ender Pearls now ensure that the chunk they are in or travel into is always loaded and ticking
    -   They also load chunks when crossing to a new dimension
    -   This ensures that Ender Pearls can always land, and makes cross-dimensional Ender Pearl travelling more predictable
-   Ender Pearls now unload when a player logs out, and reappear whenever that player logs back in, similar to how ridden entities currently behave

![A stream of Ender Pearls flying between two nether portals in a crimson forest in the nether.](https://launchercontent.mojang.com/v2/images/1.21.2pearlsthroughportals.jpg)

### Banner Patterns

-   Each Banner Pattern item now includes their pattern type in their name instead of as a subtitle
    -   Unique item textures have been added to better distinguish each pattern type
-   The following Banner Patterns have been added:
    -   Field Masoned
        -   Crafted with Paper and Bricks
    -   Bordure Indented
        -   Crafted with Paper and Vines
-   The Bricks and Curved Border patterns in the Loom can no longer be accessed without the above Banner Patterns

### Bee Behavior

-   Bees now wander around randomly for less time after exiting a nest/hive
-   A Bee with a known nest or hive will now stay closer to it, reducing the distance it travels and reducing the risk of getting lost
-   Significantly increased the amount of time a Bee can take to return to a known nest/hive before it gives up trying to return home
-   Bees are now a lot less likely to get stuck when on corners or when close to a nest/hive they are trying to return to
-   Bees are also now a lot less likely to try and pathfind to a flower that it cannot reach

### Raider Spawning

-   A triggered raid will no longer start if the Raiders cannot find a place to spawn within a reasonable distance of the village they are trying to raid
-   In order for a Raid to start, Raiders must now find a place to spawn no more than 96 blocks vertically above or below the Village center
-   It is now much less likely for Raiders to not find a valid place to spawn when raiding

### User Interface

-   The Recipe Book now repeats the last selected recipe when a "selected" key is pressed (space or either enter key)
-   Updated slot highlight in the UI so that the item texture has better visibility
    -   The previous textures have been added to Programmer Art resource pack
-   Tweaked air bubbles UI
    -   Added an empty state for air bubbles along with a wobble when the player is drowning
    -   Added a popping sound when the bubbles pop in the UI

### Rarity

-   Rarity is a set of categories which determine the color used to display the name of an item or block
    -   It has no gameplay impact, but is used to signal how difficult something is to obtain
    -   By default, unless specified otherwise, all items and blocks have a rarity of Common which displays their name in the color white
-   We have re-evaluated the rarity of all items and blocks in the game to more accurately reflect the current challenge of obtaining them, given the following guidelines:
    -   Items and blocks become more rare depending on the following factors:
        -   The chance of finding it in a loot table, including mob drops
        -   The amount of travelling required to obtain it
        -   The difficulty of any obstacle which must be overcome to obtain it
        -   The possible amount of that item or block which exists in the world
    -   Any item or block which can be crafted must inherit the highest rarity of its crafting ingredients
        -   For example, a Mace has an Epic rarity because one of its ingredients (the Heavy Core) has an Epic rarity
        -   Likewise, any crafted item which has only Common crafting ingredients must also be Common
-   The lists below detail the items and blocks which have changed to that rarity category

#### Common

-   End Crystal
-   Golden Apple

#### Uncommon

-   Sniffer Egg
-   Chainmail Helmet
-   Chainmail Chestplate
-   Chainmail Leggings
-   Chainmail Boots
-   Recovery Compass
-   Disc Fragment 5
-   Nautilus Shell
-   Echo Shard
-   Goat Horns
-   Pottery Sherds
-   Ominous Bottles
-   Ominous Banner
-   Netherite Upgrade
-   Sentry Armor Trim
-   Dune Armor Trim
-   Coast Armor Trim
-   Wild Armor Trim
-   Tide Armor Trim
-   Snout Armor Trim
-   Rib Armor Trim
-   Wayfinder Armor Trim
-   Shaper Armor Trim
-   Raiser Armor Trim
-   Host Armor Trim
-   Flow Armor Trim
-   Bolt Armor Trim
-   The following Music Discs:
    -   13
    -   Cat
    -   Blocks
    -   Chirp
    -   Creator (Music Box)
    -   Far
    -   Mall
    -   Mellohi
    -   Stal
    -   Strad
    -   Ward
    -   11
    -   Wait
    -   Relic
    -   5
    -   Precipice

#### Rare

-   Enchanted Golden Apple
    -   Enchanted Golden Apples have become more common in recent years due to being accessible in both Ancient Cities and Trial Chambers, warranting a demotion to Rare instead of Epic
-   Trident
    -   We recently increased Trident's rarity up to Epic from Common, but after re-evaluating felt that it was easier to obtain than other items in the Epic category such as Heavy Cores or Elytras
-   Nether Star
-   Ward Armor Trim
-   Eye Armor Trim
-   Vex Armor Trim
-   Spire Armor Trim
-   Wither Skeleton Skull
-   Skull Charge Banner Pattern
    -   Now that Wither Skeleton Skulls are Rare, these banner patterns should be Rare as well
-   Thing Banner Pattern
    -   Now that Enchanted Golden Apples are Rare, these banner patterns should be Rare as well
-   The following Music Discs:
    -   Pigstep
    -   otherside
    -   Creator

#### Epic

-   Elytra
-   Dragon Head
-   Silence Armor Trim

### Accessibility

-   Added an accessibility option to make targeted block's outlines more visible

#### High Contrast Resource Pack

Added the following high contrast textures:

-   Frame and background textures for tooltips
-   Slot background and highlight textures for the Bundle tooltip

### Inactivity FPS Limit

-   The game will now limit the maximum frame rate in certain situations
-   These situations are controlled by a new Video Setting: `Reduce FPS when`
-   Possible options are:
    -   `Mimimized`
        -   Limits frame rate to 10 FPS only when the game window is minimized
    -   `AFK`
        -   Limits frame rate to 30 FPS when the game is not getting any player input for more than a minute
        -   Further limits to 10 FPS after 9 more minutes of no input
        -   Also limits to 10 FPS when the game window is minimized
-   The default is `AFK`

### Performance

-   Frame rate has been improved when using higher render distances
    -   Significantly reduced the performance impact when turning the camera
-   The performance of the server (tick rate) has been improved when using higher render distances
    -   Furthermore, the impact of loading and generating chunks on tick rate has been reduced

### Player Safety

#### Skin Reporting

-   Added reporting reason "Sexually inappropriate"
    -   This is intended for skins that are graphic in nature relating to sexual acts, sexual organs, and sexual violence
-   Removed reason "Defamation" for skins due to lack of relevance
-   Removed reason "Threat of harm to others" due to already being covered by "Harassment or bullying" reporting reason

#### Name Reporting

-   Added a text label above the description box to clarify that only the name of the player is subject to the report

## Technical Changes

-   The Data Pack version is now 57
-   Resource Pack version is now 42
-   Updates to available `server.properties` options
-   Added some information about data pack structure (for example, data-driven registries) to generated reports
-   Removed the `bundle` feature flag and built-in data pack

### `server.properties`

-   New option: `pause-when-empty-seconds` (default: `60`)
    -   When set to a positive value, causes the server to pause when no player has been online for that many seconds
-   Removed options: `spawn-animals` and `spawn-npcs`
-   Extended the `text-filtering-config` option in `server.properties` in order to support an internal migration for Realms Profanity Filtering
    -   Servers currently utilizing the `text-filtering-config` will be able to continue to do so without any changes

### Network Protocol

-   Added `minecraft:client_tick_end` serverbound packet during play phase, sent when the client finishes processing its current tick
-   Added ability for custom servers to override the order that players appear in the "tab list"
    -   This is controlled by a non-negative ordering index that is sorted highest to lowest
-   The client now shares the state of the "Particles" limiter option to be used by custom servers
-   The server will now only send known recipes to the client
-   Temporary option for ignoring connection errors on client side (`strictErrorHandling`) has been removed

## Data Pack Versions 49 through 57

-   Added new Tags
-   Changes to Commands
-   Added new `disablePlayerMovementCheck` Game Rule
-   Changes to Item Components
-   New data-driven registries for Goat Horn instruments and Trial Spawner configurations
-   Added new fields to painting variant definitions
-   Added new functionality to Enchantment Effects
-   The `crafting_special_suspiciousstew` recipe type has been removed
-   Recipe ingredient format has been simplified
-   Added new Loot Tables
-   Added new Advancement Predicates
-   Changes to Advancement Triggers
-   Expanded the functionality of the `Lock` property on Containers
-   Added optional field `explosion_power` to `tnt` and `tnt_minecart` entity types
    -   Defaults to `4`
    -   For TNT Minecarts, the value is added to speed-based explosion power
-   `boat` and `chest_boat` entity types have been split into separate types
-   Changes to Attributes
-   Entities' rotation on the x-axis is now clamped between -90 and 90
-   Added new Particles and updated some Particle formats

### Tags

#### Block Tags

-   `bats_spawnable_on`: Blocks that Bats can spawn on

#### Item Tags

-   `furnace_minecart_fuel`: Items that can be used to refuel a Furnace Minecart
-   `villager_picks_up`: Items that a Villager will try to pick up from the ground
-   Added new tags to control which items can be used to craft and repair various tool sets:
    -   `wooden_tool_materials`
    -   `iron_tool_materials`
    -   `gold_tool_materials`
    -   `diamond_tool_materials`
    -   `netherite_tool_materials`
-   Added new tags to control which items can be used to repair various armor sets:
    -   `repairs_leather_armor`
    -   `repairs_iron_armor`
    -   `repairs_chain_armor`
    -   `repairs_gold_armor`
    -   `repairs_diamond_armor`
    -   `repairs_netherite_armor`
    -   `repairs_turtle_helmet`
    -   `repairs_wolf_armor`
-   `piglin_safe_armor`: Items that, when worn by a player, will cause Piglins to not get angry
-   `duplicates_allays`: Items that can be used to duplicate Allays when dancing
-   `bundles`: All Bundle Items
-   `panda_eats_from_ground`: Items that a Panda will pick up from the ground and eat
-   `brewing_fuel`: Items that can be used as fuel in a Brewing Stand
-   `map_invisibility_equipment`: Items that can be equipped to hide the player marker on other players maps
-   `gaze_disguise_equipment`: Items that can be equipped to disguise the player looking for other mobs

### Commands

-   Invalid `selector` patterns in Chat Components will now cause commands to fail to parse, instead of resolving to an empty string
-   The `loot` command will now return an error when trying to drop from a block without a loot table (such as `air`)
-   You can no longer ride Leash Knots, Lighting Bolts and Fishing Bobbers with the `ride` command
-   Added the `rotate` command

#### `rotate` Command

New command to rotate an entity.

Syntax:

    rotate <target> <rotation>
    rotate <target> facing <facingLocation>
    rotate <target> facing entity <facingTarget> [<facingAnchor>]
    

Parameters:

-   `target`: The entity to rotate
-   `rotation`: Two rotation values in degrees denoting horizontal and vertial rotation
    -   May use relative (`~`) coordinate notation to specify rotation relative to current context rotation
-   `facingLocation`: The coordinates of a location in the world for the rotated entity to face
-   `facingTarget`: An entity for the rotated entity to face
-   `facingAnchor`: Specifies the anchor of the `facingTarget` entity to rotate towards - `feet` or `eyes` (by default `feet`)

Note: parameters have the same meaning as in the `teleport` command.

### Game Rules

#### `disablePlayerMovementCheck`

-   When true, disables player movement speed restriction
    -   Default value: `false`
    -   This behaves the same as the `disableElytraMovementCheck` rule, but applies irrespective of flying with Elytra

### Changed Item Components

#### `minecraft:food`

-   The food component has been changed to become a data container which only holds the food stats applied when the item is consumed
    -   This component no longer gives the item the ability to be consumed, and must be done instead with the new `consumable` component
-   Format: object with fields
    -   `nutrition`: Non-negative integer, the amount of nutrition applied when consumed
    -   `saturation`: Float, the amount of saturation applied when consumed
    -   `can_always_eat`: Boolean, whether it can be consumed even when the user is not hungry
        -   Default value: `false`

#### `minecraft:fire_resistant` -> `minecraft:damage_resistant`

-   Has a new field: `types`, hash-prefixed damage type tag
    -   Items with this component, when in entity form, will be resistant to the damage types included in the tag
    -   This component also affects whether the equipped item will be damaged when the wearer is hurt by a given damage type

#### `minecraft:item_name`

-   This component is now always present on every item
-   Name provided by this component always has the lowest priority
    -   That means it will be overriden by components such as `minecraft:potion_contents` or `minecraft:written_book_content`

#### `minecraft:potion_contents`

-   Added an optional string field: `custom_name`
    -   When present, it will be used to generate containing stack name
    -   For example, if the value is `foo` and the item is `minecraft:lingering_potion`, the name of item will be translation of `item.minecraft.lingering_potion.effect.foo`

### New Item Components

#### `minecraft:consumable`

-   If present, this item can be consumed on use
    -   If `food`, `potion_contents`, `ominous_bottle_amplifier` or `suspicious_stew_contents` are also present on this item, consuming this will apply the stats and effects of those components
-   Format: object with fields
    -   `consume_seconds`: Non-negative float, the amount of seconds it takes for a player to consume the item
        -   Default value: `1.6`
    -   `animation`: The animation used during consumption of the item
        -   Default value: `eat`
        -   Accepted values:
            -   `none`
            -   `eat`
            -   `drink`
            -   `block`
            -   `bow`
            -   `spear`
            -   `crossbow`
            -   `spyglass`
            -   `toot_horn`
            -   `brush`
    -   `sound`: Sound event, the sound used during and on completion of the item's consumption
        -   Default value: `entity.generic.eat`
    -   `has_consume_particles`: Boolean, whether consumption particles are emitted while consuming this item
        -   Default value: `true`
    -   `on_consume_effects`: An optional list of side effects which take place as a result of consuming this item
        -   There are currently 5 valid consume effects, identified by a `type` field
        -   `minecraft:apply_effects`
            -   `effects`: A list of status effect instances applied once consumed
            -   `probability`: Float, the probability the above effects will be applied once consumed
                -   Default value: `1.0`
        -   `minecraft:remove_effects`
            -   `effects`: A set of status effects removed once consumed, as either a Status Effect ID, hash-prefixed tag, or list of IDs
        -   `minecraft:clear_all_effects`
            -   Clears all status effects of the consumer
        -   `minecraft:teleport_randomly`
            -   `diameter`: Positive float, the diameter that the consumer will be teleported within
                -   Default value: `16.0`
        -   `minecraft:play_sound`
            -   `sound`: Sound event, played once consumed
    -   e.g. `consumable={consume_seconds:3.0, animation:'eat', sound:'entity.generic.eat', has_consume_particles:true, on_consume_effects:[{type:'minecraft:clear_all_effects'}]}`

#### `minecraft:use_remainder`

-   If present, will replace the item with a remainder if its stack count has decreased after use
    -   If the item has a stack count higher than 0 after use, the remainder item will be added to the inventory
    -   If the inventory is full when trying to add a remainder item to it, it will be dropped on the ground
-   Format: single value as an item stack
    -   e.g. `use_remainder={id:'minecraft:stick',count:1}`

#### `minecraft:use_cooldown`

-   If present, this item will apply a cooldown to all items of the same type or "cooldown group" once used
-   Format: object with fields
    -   `seconds`: Positive float, the amount of seconds the cooldown will take place for
    -   `cooldown_group`: Optional namespaced id representing the cooldown group
        -   Items with the same cooldown group will share any cooldown applied to another item within that group
        -   If not specified, the cooldown group defaults to the base item type's ID
    -   e.g. `use_cooldown={seconds:1.5,cooldown_group:"minecraft:custom_weapon"}`

#### `minecraft:item_model`

-   Controls item model
-   Present on every item
-   Format: namespaced ID
    -   `namespace:id` will reference model `/assets/<namespace>/models/item/<id>`

#### `minecraft:equippable`

-   If present, this item can be equipped by players in the selected slot
-   Format: object with fields
    -   `slot`: one of `head`, `chest`, `legs`, `feet`, `body`, `mainhand`, or `offhand`
    -   `equip_sound` (optional): Sound event to play when the item is equipped
        -   If not specified, the default armor equip sound will be played
    -   `model` (optional): namespaced ID of the equipment model to use when equipped
        -   These model definitions are loaded from Resource Packs
        -   If not specified, will fall back to rendering as the item itself when in the head slot (or no rendering if not applicable)
    -   `camera_overlay` (optional): namespaced ID of the overlay texture to use when equipped
        -   If not specified, no overlay is used
        -   The ID will address a texture under the `textures/` folder and automatically assumed to be `.png`
            -   For instance, `misc/pumpkinblur` addresses `textures/misc/pumpkinblur.png`
    -   `allowed_entities` (optional): Entity ID, Entity Tag, or list of Entity IDs to limit which entities can equip this item
        -   If not specified, any entity (that can wear this kind of equipment) is allowed to equip this item
    -   `dispensable`: boolean (default: `true`), whether the item can be equipped by using a Dispenser
        -   If the item type has special dispenser behavior, this will have no effect
    -   `swappable`: boolean (default: `true`), whether the item can be equipped into the relevant slot by right-clicking
    -   `damage_on_hurt`: boolean (default: `true`), whether this item will be damaged when the wearing entity is damaged
    -   e.g. `equippable={slot:'chest',equip_sound:'item.armor.equip_chain'}`

![A player is looking at two Creepers through a custom UI overlay in a shape of a Creeper face.](https://launchercontent.mojang.com/v2/images/1.21.2customcreeperoverlay.jpg)

#### `minecraft:glider`

-   If present, this item will allow players to glide (as with Elytra) when equipped
-   Format: empty object
    -   e.g. `glider={}`

![Zuri and Efe flying by some polar bears just above the Ice with fireworks in their hands. Zuri and Eve are both wearing custom items on their heads that enable them to fly, a potato and a feather. ](https://launchercontent.mojang.com/v2/images/1.21.2customglider.jpg)

#### `minecraft:tooltip_style`

-   If present, this item can use custom sprites for its tooltip background and frame
-   Format: namespaced ID for a tooltip style
    -   A tooltip style of `namespace:path` will use sprites with IDs:
        -   `<namespace>:tooltip/<path>_background` and `<namespace>:tooltip/<path>_frame`
    -   e.g. `tooltip_style='minecraft:special_sword'`

#### `minecraft:death_protection`

-   If present, this item will protect the holder from dying by restoring a single health point
-   Format: object with fields
    -   `death_effects`: An optional list of effects that are applied when the item protects the holder
        -   These effects are the same as those specified by the `on_consume_effects` field in the `consumable` component

![With a custom poisonous potato in the offhand and a sword in the main hand, the player is taking fatal damage. The equipped potato saves them with the totem animation playing, but with the totem being replaced by the poisonous potato.](https://launchercontent.mojang.com/v2/images/1.21.2customtotem.jpg)

#### `minecraft:repairable`

-   If present, and this item is damageable, this item can be repaired in an Anvil using the specified ingredient
-   Format: object with fields
    -   `items`: Item, list of Items, or hash-prefixed Item Tag matching what can be used to repair this item
    -   e.g. `repairable={items:'stick'}`

#### `minecraft:enchantable`

-   If present (and any enchantments are applicable), this item can be enchanted in an Enchanting Table
-   Format: object with fields
    -   `value`: Positive integer, a higher value allows enchantments with a higher cost to be picked
    -   e.g. `enchantable={value:15}`

### Instruments

Goat Horn instruments are now defined in a data pack registry folder called `instrument`. Like other registries, changing this content in data packs is considered experimental and requires a full world re-load to take effect.

Fields:

-   `sound_event`: The sound event the instrument plays
-   `range`: The maximum range (in blocks) at which the sound can be heard
-   `use_duration`: The amount of time (in seconds) the instrument is considered in use after triggering, which also serves as its cooldown
-   `description`: A Text Component used as the descrpition of the instrument in item tooltips

### Trial Spawner Configurations

Trial Spawner configurations are now defined in a data pack registry folder called `trial_spawner`. Like other registries, changing this content in data packs is considered experimental and requires a full world re-load to take effect.

-   Has the same format as the `normal_config` and `ominous_config` fields in Trial Spawner blocks
-   Inline configurations inside Trial Spawner blocks are supported in the same format as before
-   These fields may however now instead be replaced with a namespaced ID reference to a Trial Spawner configuration

### Painting Variant

-   Added new optional fields `author` and `title`, holding Text Components to be displayed in the creative menu tooltip
-   This replaces previous mechanism where those values were derived from variant name
-   Author tooltip has been removed for `earth`, `wind`, `fire`, `water` and `wither` variants

### Enchantment Effects

-   Added support for the Enchantment trigger `projectile_spawned` in the following items:
    -   Snowballs
    -   Tridents
    -   Small Fireballs
    -   Thrown Potions
    -   Ender Pearls
    -   Fishing Rod
    -   Firework Rocket
    -   Wind Charge
    -   Eggs
-   Renamed effect type `damage_item` to `change_item_damage`, now also supports negative amounts

### Recipes

The format used for recipe ingredients has been simplified and aligned with other fields that accept item lists (like item predicates):

-   For items: `{ "item": "<item id>" }` now becomes `"<item id>"`
-   For tags: `{ "tag": "<tag id>" }` now becomes `"#<tag id>"`
-   Lists of items are still allowed, but tags can no longer appear in such list
-   Remaining restrictions:
    -   `minecraft:air` can't appear anywhere in an ingredient
    -   Ingredients must have at least one tag or item
-   The fields `template`, `base` and `addition` in `smithing_transform` and `smithing_trim` recipes are now optional instead of accepting empty list

#### `crafting_transmute` Recipe Type

-   New crafting recipe type has been introduced: `crafting_transmute`
-   When matched, the output will copy the input item stack, changing the item type but preserving all stack components
-   This completely replaces `crafting_special_shulkerboxcoloring`
-   Fields:
    -   `category` - crafting book category, one of `building`, `redstone`, `equipment`, `misc`
    -   `group` - optional string
    -   `input` - ingredient for item to copy
    -   `material` - additional ingredient to use
    -   `result` - item type to use for output

### Loot Tables

-   The special loot table `empty` has been removed and is no longer defined in the Vanilla data pack
-   Snow Golem shearing is now controlled by a loot table found at `shearing/snow_golem`
-   Tool value (used for functions like `match_tool`) is now available for some additional loot table types
    -   `archaeology` - used brush
    -   `vault` - inserted key (not available when displaying items)
    -   `shearing` - shears
-   Chickens laying eggs is now controlled by a loot table found at `gameplay/chicken_lay`
-   Armadillos randomly dropping scutes is now controlled by a loot table found at `gameplay/armadillo_shed`

#### Sheep Loot Tables

-   Sheep now always uses a single loot table `entities/sheep`
-   Wool drops are still defined in sub-tables in `entities/sheep/<color>`, but are just dispatched from the main table
    -   Note: Mutton drop is now controlled by the main table, while sub-tables are responsible only for the wool drop
-   Sheep shearing is now controlled by loot table found as `shearing/sheep`
    -   This loot table also has dispatches to sub-tables for specific wool colors, which are found as `shearing/sheep/<color>`

#### Mooshroom shearing Loot Table

-   Mooshroom shearing is now controlled by loot table found as `shearing/mooshroom`
-   Sub-tables for specific variants are found as `shearing/mooshroom/<variant>`

#### Hero of the Village Gift Loot Tables

-   The loot given by Villagers is now controlled by two additional loot tables:
    -   `gameplay/hero_of_the_village/unemployed_gift` - used if the Villager is unemployed
    -   `gameplay/hero_of_the_village/baby_gift` - used if the Villager is a baby

### Predicates

-   `minecraft:boat` entity sub-predicate has been removed, since Boats no longer have variants

#### `sheep` Entity Sub-predicate

-   Added `minecraft:sheep` entity sub-predicate
-   Fields:
    -   `sheared` - optional boolean
    -   `color` - optional wool dye color

#### `salmon` Entity Sub-predicate

-   Added `minecraft:salmon` entity sub-predicate
-   Fields:
    -   `variant`: one of `small`, `medium`, `large`

#### `player` Entity Sub-predicate

-   Added a new field in the `minecraft:player` entity sub-predicate, `input`
    -   Can be used to detect which movement keys the player is pressing
    -   If specified, the predicate matches the corresponding keybinds that the player is pressing
    -   The following fields may be specified to match player inputs:
        -   `forward` : boolean (optional)
        -   `backward` : boolean (optional)
        -   `left` : boolean (optional)
        -   `right` : boolean (optional)
        -   `jump` : boolean (optional)
        -   `sneak` : boolean (optional)
        -   `sprint` : boolean (optional)

### Advancements

#### Triggers

##### `minecraft:killed_by_crossbow` -> `minecraft:killed_by_arrow`

-   Will now trigger whenever an Arrow kills an entity, not just when fired from a Crossbow
-   Has a new optional Item Predicate field, `fired_from_weapon`
    -   Can be used to match the item used to shoot the Arrow

### Container Locks

-   The `Lock` field of containers has been renamed to `lock` and is now an item predicate
    -   Any items which match the predicate can open the container
-   The `lock` data component is now also an item predicate

### Boat Split

-   Variants of Boats and Chest Boats now have separate entity types instead of a `Type` field
-   Removed entites:
    -   `minecraft:boat`
    -   `minecraft:chest_boat`
-   New entities:
    -   Boat without chest:
        -   `Type=oak` -> `minecraft:oak_boat`
        -   `Type=spruce` -> `minecraft:spruce_boat`
        -   `Type=birch` -> `minecraft:birch_boat`
        -   `Type=jungle` -> `minecraft:jungle_boat`
        -   `Type=acacia` -> `minecraft:acacia_boat`
        -   `Type=cherry` -> `minecraft:cherry_boat`
        -   `Type=dark_oak` -> `minecraft:dark_oak_boat`
        -   `Type=mangrove` -> `minecraft:mangrove_boat`
        -   `Type=bamboo` -> `minecraft:bamboo_raft`
    -   Boat with chest:
        -   `Type=oak` -> `minecraft:oak_chest_boat`
        -   `Type=spruce` -> `minecraft:spruce_chest_boat`
        -   `Type=birch` -> `minecraft:birch_chest_boat`
        -   `Type=jungle` -> `minecraft:jungle_chest_boat`
        -   `Type=acacia` -> `minecraft:acacia_chest_boat`
        -   `Type=cherry` -> `minecraft:cherry_chest_boat`
        -   `Type=dark_oak` -> `minecraft:dark_oak_chest_boat`
        -   `Type=mangrove` -> `minecraft:mangrove_chest_boat`
        -   `Type=bamboo` -> `minecraft:bamboo_chest_raft`

### Attributes

-   Attribute IDs no longer have `generic.`, `player.` and `zombie.` prefixes
-   Added `tempt_range` attribute that controls the range, in blocks, at which temptable mobs can be tempted

### Particles

-   Added `block_crumble` particle with the following fields:
    -   `block_state` - the block state of the block to crumble
-   Added `trail` particle with the following fields:
    -   `color` - the color of the trail
    -   `target` - the target position that the particle should move towards
-   The format of color fields in particle options is now more standardized:
    -   RGB fields can always be encoded either as a vector of floats (order: `[R,G,B]`) or as a single packed integer (order: `RGB`)
    -   ARGB fields can always be encoded either as a vector of floats (order: `[R,G,B,A]` or as a single packed integer (order: `ARGB`)
    -   Affected fields:
        -   `minecraft:trail.color`
        -   `minecraft:dust.color` (previously accepted only vector of floats)
        -   `minecraft:dust_color_transition.from_color` (previously accepted only vector of floats)
        -   `minecraft:dust_color_transition.to_color` (previously accepted only vector of floats)

## Resource Pack Versions 35 through 42

-   Added new GUI sprites
-   Added new sounds
-   Added support for emissive layers for block models
-   Added new `broken` item model property
-   Added support for custom equipment texture layers
-   Textures for entity equipment have been moved and renamed
-   Updated the format of post-processing effect definitions
-   The texture map for the Arrow and Bee Stinger models have been updated
-   The model and UV mapping of the Dragon Egg have been updated
-   Updated textures and models for the Bundle item
    -   Bundle icon has new models and textures
    -   Bundle models and textures have 16 colored variants
-   The models and UV mapping related to the Torch and blocks containing Redstone Torch have been updated
-   Removals and renames of some translations is now automatically applied at startup

### GUI Sprites

-   The `nine_slice` GUI sprite scaling mode has a new optional boolean property: `stretch_inner`
    -   If `true`, the inner parts of the texture (i.e. not the corners) will be stretched instead of tiled
    -   If not specified, defaults to `false` as before
-   The tooltip background and frame may now be customized by replacing sprites:
    -   `tooltip/background`: The background of the tooltip
    -   `tooltip/frame`: The frame appearing around the tooltip
    -   Items with a custom `tooltip_style` component will use sprites with IDs:
        -   `<namespace>:tooltip/<path>_background` and `<namespace>:tooltip/<path>_frame`
-   The appearance of a highlighted slot may now be customized by replacing sprites:
    -   `container/slot_highlight_front`: The sprite to render in front of highlighted slots
    -   `container/slot_highlight_back`: The sprite to render behind highlighted slots
-   Likewise, the appearance of a highlighted item within the Bundle can be customized with the following sprites:
    -   `container/bundle/slot_highlight_front`
    -   `container/bundle/slot_highlight_back`
-   Removed `container/bundle/background`, `container/bundle/slot`, and `container/bundle/blocked_slot` sprites
-   Added `container/bundle/slot_background` sprite for bundle slot background
-   Added `container/bundle/bundle_progressbar_fill`, `container/bundle/bundle_progressbar_border`, and `container/bundle/bundle_progressbar_full` sprites
-   Added `hud/air_empty` sprite for consumed bubble slots

### Sounds

-   Added break, fall, hit, place, and step sounds for the Spawner block
-   Added sound `ui.hud.bubble_pop` for when an air bubble in the UI pops
-   Added sound `item.bundle.insert_fail` for when failing to add an item to a Bundle

### Emissive Layers for Block Models

-   Added an optional `light_emission` field to block model elements
-   Integer value between 0 and 15, with 0 being the default value (no light emission)
-   If specified and non-zero, this will behave as the minimum light level that the element can receive

### Item Models

-   All item models can now use the `broken` property in model overrides that was previously limited to just Elytra
    -   This will have a value of 1 if the item has 1 durability left, or 0 otherwise

### Custom Equipment Layers

The appearance of equipment when equipped by players or certain mobs can now be customized by defining 'equipment models' in the Resource Pack.

-   Equipment model definitions are loaded from `assets/<namespace>/models/equipment/<path>.json`
    -   These can then be referenced by the `equippable` component with a model id of `namespace:path`
-   The model definition is an object with fields: `wolf_body`, `horse_body`, `llama_body`, `humanoid`, `humanoid_leggings`, `wings`
    -   All fields are optional, and can be used to specify a list of layers for the given model layer type
    -   Each field contains list of layer objects:
        -   `texture`: namespaced texture location for this layer
            -   `namespace:path` will resolve to `assets/<namespace>/textures/entity/equipment/<layer_type>/<path>.png`
        -   `dyeable`: object with fields (optional), specifying how this layer behaves when dyed (in the `dyeable` item tag, and has `dyed_color` component)
            -   `color_when_undyed`: rgb color int (optional)
            -   If specified, this layer will be tinted by the color contained in the `dyed_color` component
                -   If the item is not dyeable or not dyed, it will be tinted based on the color specified by `color_when_undyed`
                -   If `color_when_undyed` is not specified and the item is not dyed, the layer will be hidden
        -   `use_player_texture`: boolean (default: `false`), true if this layer texture should be overridden by a texture given by the player
            -   Only used for `wings` layers, which will override with the player's custom Elytra texture

A model definition specifying both player and horse armor layers might look like:

    {
      "layers": {
        "horse_body": [
          { "texture": "minecraft:iron" }
        ],
        "humanoid": [
          { "texture": "minecraft:iron" }
        ],
        "humanoid_leggings": [
          { "texture": "minecraft:iron" }
        ]
      }
    }
    

### Trims

-   All equippable items with an equipment model defined support rendering trims, based on the `trim` component
-   Trim textures will be loaded from the appropriate folder in the `textures/trims/entity` directory
    -   For example, armor with `wolf_body` layers will fetch trims from `textures/trims/entity/wolf_body`

### Moved Textures

-   All equipment-related textures have been moved to subfolders of the `textures/entity/equipment` directory
    -   Player armor textures have been moved to `textures/entity/equipment/humanoid` and `textures/entity/equipment/humanoid_leggings`
        -   `<material>_layer_1` textures have been renamed to `<material>`, and moved into the `humanoid` subdirectory
        -   `<material>_layer_2` textures have been renamed to `<material>`, and moved into the `humanoid_leggings` subdirectory
        -   `leather_layer_1_overlay` and `leather_layer_2_overlay` textures have been renamed to `leather_overlay` in their respective subdirectories
    -   `wolf_armor` and `wolf_armor_overlay` textures have moved to `textures/entity/equipment/wolf_body/` and have been renamed to `armadillo_scute` and `armadillo_scute_overlay` respectively
    -   `turtle_layer_1` has been renamed to `turtle_scute`
    -   Llama decor textures have been moved to `textures/entity/equipment/llama_body`
    -   Horse armor textures have been moved to `textures/entity/equipment/horse_body`
    -   The Elytra texture has been moved to `textures/entity/equipment/wings/elytra`
-   Armor trim textures have also been moved to match the folder structure of the regular `equipment` textures
    -   Textures in `textures/trims/models/armor` have been divided between `textures/trims/entity/humanoid` and `textures/trims/entity/humanoid_leggings`
    -   For leggings textures, the `_leggings` suffix is dropped

### Shaders & Post-process Effects

> **Developer's Note**: _Although it is possible in Resource Packs, overriding Core Shaders is considered as unsupported and not an intended Resource Pack feature. These shaders exist as part of the internal implementation of the game, and as such, may change at any time as the game's internals evolve. We understand that overriding Core Shaders is used for very cool Resource Pack features, many of which lack supported alternatives. We would like to provide better, supported alternatives in the future._

-   Shader program configurations can now specify preprocessor define directives to apply to their linked shaders
    -   Many shader implementations have been merged by making use of this
-   The format of core shader and post-processing shader configurations have been consolidated
-   The format of post-processing effect configurations have been updated
-   The `ChunkOffset` uniform in terrain shaders has been renamed to `ModelOffset`
-   The `rendertype_entity_glint_direct` shader has been removed (replaced by `rendertype_entity_glint`)
-   The `rendertype_entity_translucent_cull` shader has been removed (replaced by `rendertype_item_entity_translucent_cull`)

#### Shader Program Definitions

-   Program definitions for post-processing effects (`assets/<namespace>/shaders/program/<name>.json`) have been made consistent with core shader definitions (`assets/<namespace>/shaders/core/<name>.json`)
    -   The `blend` field has been removed, as it had no use
    -   The `attributes` field has been removed, instead the `Position` attribute will always be bound
    -   The provided uniforms have been consolidated with those provided to core shaders
        -   `Time` has been renamed to `GameTime`
-   The `vertex` and `fragment` shader references in program definitions (including post-processing effects) are now namespaced shader ids
    -   A vertex shader `<namespace>:<path>` will resolve to `assets/<namespace>/shaders/<path>.vsh`
    -   A fragment shader `<namespace>:<path>` will resolve to `assets/<namespace>/shaders/<path>.fsh`
-   Shader source files are no longer required to be in the `shaders/core` subdirectory, this only exists for organization
-   Added `defines` field to program definitions (object with fields)
    -   Allows GLSL define directives to be injected into the shader source, which can be referenced in the shader
    -   `values` (map of string to string)
        -   Will be injected as `#define <key> <value>` at the top of the file
    -   `flags` (list of strings)
        -   Will be injected as `#define <key>` at the top of the file

#### Shader Imports

-   The `#moj_import` directive now supports namespaced includes with absolute paths
    -   For example, `#moj_import <minecraft:fog.glsl>` will import `assets/minecraft/shaders/include/fog.glsl`
-   Relative imports are not namespaced and behave as before

#### Post-process Effect Definitions

-   Post-processing effect configuration has been moved out of the `assets/<namespace>/shaders/post` directory to just `assets/<namespace>/post_effect`
-   Vertex and fragment shaders used by these effects have been moved from `assets/<namespace>/shaders/program` to `assets/<namespace>/shaders/post`
-   `name` has been renamed to `program`, and is now a namespaced id of a shader program configuration
    -   `<namespace>:<path>` will resolve to `assets/<namespace>/shaders/<path>.json`
-   `intarget` and `auxtargets` have been merged into a single `inputs` list, as specified by the input format below
-   `outtarget` has been renamed to `output` with the same format
-   `targets` is now a map between target name and target definition, as opposed to a list
    -   Inline target names are replaced with an empty object
        -   For example, `["swap"]` becomes `{"swap": {}}`
    -   Target definitions with a specific size remain the same, with the `name` field moved into the map key
        -   For example, `[{"name": "potato", "width": 16, "height": 16}]` becomes `{"potato": {"width": 16, "height": 16}}`

##### Input Format

For both render target and texture inputs, the following fields may be specified:

-   `sampler_name`: string - prefix to set up both `_Sampler` and `_Size` uniforms
    -   For example, `"sampler_name": "Diffuse"` will link to the `DiffuseSampler` and `DiffuseSize` uniforms
    -   This was previously always `DiffuseSampler` and `InSize` for `intarget`
    -   For `auxtargets`, the `name` defined the sampler uniform, and the size was given as `AuxSize<index>`
-   `bilinear`: boolean (default: `false`) - if true, the input will be sampled with a bilinear filter
    -   This formerly only existed on texture inputs, however now functions for render targets
    -   For render targets, replaces the now removed `use_linear_filter` field on the pass definition

For inputs from a render target, the following fields may be specified:

-   `target`: namespaced id - the render target id
    -   Either a custom target id defined in the same file, or `minecraft:main` to reference the main screen target
    -   This replaces the former `id` field, which was a free-form string
-   `use_depth_buffer`: boolean (default: `false`) - true to sample from the depth texture, false to sample from the color texture
    -   This replaces the former `:depth` suffix applied to the target id

For inputs from a static texture, the following fields may be specified:

-   `location`: namespaced string - the location to a static texture file that can be sampled by the effect
    -   As the `id` field did before, this resolves to a texture at `assets/<namespace>/textures/effect/<path>.png`
-   `width`: positive integer - width in pixels of the texture
-   `height`: positive integer - height in pixels of the texture

##### External Targets

-   The 'Fabulous' graphics transparency post-processing config no longer specifies the sorted framebuffers as custom targets
    -   These are instead imported in the same way as the `minecraft:main` target
    -   `translucent`, `itemEntity`, `particles`, `weather`, `clouds` are now `minecraft:translucent`, `minecraft:item_entity`, `minecraft:particles`, `minecraft:weather`, and `minecraft:clouds` respectively
-   The entity outline processing shader similarly imports the `minecraft:entity_outline` target

### Translation Removals and Renames

-   During load some deprecated translation strings will now be removed and/or renamed
-   Packs that use these translations will need to re-add them manually
-   The full list is available in the `/assets/minecraft/lang/deprecated.json` file inside the game's JAR file

## Experimental Features

The following changes only apply when their respective Experiment is turned on, either by activating the corresponding experimental data pack or by turning it on in the Experiments screen while creating the world.

These experiments have no effect unless enabled. You can find more information about Feature Toggles [here](https://www.minecraft.net/en-us/article/testing-new-minecraft-features/feature-toggles-java-edition).

### Winter Drop

-   Added Pale Garden Biome, Pale Oak tree, Pale Moss block, Pale Moss carpet, Pale Hanging Moss and Pale Oak woodset
-   Added Creaking mob, Creaking Spawn Egg and Creaking Heart block

#### Pale Garden

Pale Garden is a biome variation of Dark Forest. Unique features:

-   Pale Oaks generate here
-   Pale Moss blocks/carpet generate on the ground here
-   Hanging Pale Moss generate hanging from the foliage of Pale Oaks
-   Animal mobs do not spawn naturally in Pale Gardens
-   New biome specific ambient sounds
-   Creaking Heart block can generate in Pale Oaks

#### Pale Oak Tree

-   Pale Oak Leaves drop Pale Oak Saplings that can be planted in a 2x2 configuration to grow Pale Oak trees
-   Pale Oak Logs can be crafted into the Pale Oak woodset:
    -   Door
    -   Fence
    -   Fence Gate
    -   Plank
    -   Sign
    -   Hanging Sign
    -   Slab
    -   Stairs
    -   Trapdoor
    -   Wood
    -   Stripped Log
    -   Stripped Wood
    -   Button
    -   Pressure Plate
    -   Boat
    -   Boat with Chest

#### Pale Moss Block

Pale Moss block generates naturally in the Pale Garden biome

#### Pale Moss Carpet

Pale Moss block generates naturally in the Pale Garden biome. Unique features:

-   When placed, Pale Moss Carpet grows up to two blocks on the solid faces of any block that borders it
-   Pale Moss Carpet can be bone mealed to grow to full on all solid faces of any block that borders it

#### Pale Hanging Moss

Pale Hanging Moss generates naturally in the Pale Garden biome under the foliage of Pale Oaks

-   Pale Hanging Moss does not grow randomly, but can be bone mealed to grow down

#### Creaking mob

The Creaking mob spawns at night in the Pale Garden biome if there is a Creaking Heart block that has been generated in a Pale Oak tree. Gameplay features:

-   Creaking will activate if a surivival or adventure mode player is within 12 blocks of it and looks at it
-   Creaking stays active while there is a survival or adventure mode player within 32 blocks of it
-   An activated Creaking will not move if a survival or adventure player is looking at it
-   Creaking is invulnerable to damage
-   Creaking has fire resistance
-   When hit by players, a particle trail is shown between the Creaking and the Creaking Heart block it is connected to
-   When the Creaking Heart block that the Creaking is connected to is destroyed, the Creaking is removed
-   Is not affected by light levels but spawns and despawns based on the day/night cycle
-   Creaking cannot enter Boats
-   Creaking spawned from a Creaking Heart can not go through portals
-   The Creaking Spawn Egg will spawn a Creaking mob that is not connected to a Creaking Heart. This form of Creaking:
    -   May also be spawned through commands
    -   Will persist through day and night, and loads and saves
    -   Is fire-resistant
    -   Takes damage from attacks and other damage sources
    -   Has one point of health (half a heart)
-   A Creaking summoned from the Creaking Heart cannot be spawned with a spawn egg, nor can it be named with a Name Tag or summoned with commands
    -   It can only exist as a part of the Creaking Heart block
-   Players wearing a Carved Pumpkin on their head can look at Creaking without it freezing in place

![A Creaking standing in the Pale Garden looking at the player.](https://launchercontent.mojang.com/v2/images/1.21.2experimentalcreaking.jpg)

#### Creaking Heart

A Creaking Heart is a “living” block generating in Pale Oak trees, covered on all sides by Pale Oak wood logs. It can spawn a Creaking mob when it is nighttime, and it is placed between two correctly aligned Pale Oak Logs.

-   Is active during the night and dormant during the day
-   Sends a trail of particles towards the connected Creaking when the Creaking gets hit by the player
-   When Creaking Heart block is destroyed, the connected Creaking is removed
-   Comparators attached to the Creaking Heart block will output a signal strength dependent on the distance to the connected Creaking

#### New system for Pale Garden ambient sounds

Ambient sounds in the Pale Garden biome do not come from the biome settings, but are generated by blocks found in the biome.

-   Pale Hanging Moss emits subtle atmospheric sounds when it is attached to Pale Oak Logs and Pale Oak Leaves
-   Creaking Heart block emits a set of eerie sounds when it is active during the night and surrounded by Logs on all sides

### Redstone Experiments

Added a new Experiment containing various Redstone-related changes. This can be enabled by selecting "Redstone Experiments" in the Experiments menu when creating a world.

Please note that the experimental features behind this toggle are not aimed at any future release at this time.  
Instead, this is a place for us to try out changes and gather feedback.  
We are excited to hear what you think about these changes: please share your feedback on the [feedpack page](https://aka.ms/fbredstone).

#### Redstone Wire

-   The performance impact of Redstone wire (connected blocks of Redstone Dust) has been improved
-   Redstone wire now only triggers block updates on blocks that may receive power from the wire
-   Before a line of wire causes block updates, the new signal strength of all connected wires is set
-   The update order around Redstone wire has been changed
    -   The aim is to make wire work the same, independent of position and global orientation
    -   When possible the order is deterministic based on the context the updates are caused in
    -   When there is not enough context to fully determine the order, the rest is picked at random

> **Developer's note:** _We know that randomness in Redstone is usually unwanted.  
> We've used it here because we've made things deterministic whenever it makes sense, and sometimes it just doesn't make sense - and we don't want some hidden state (like location-based hashes!) determining the order and making machines work differently at different coordinates or in different orientations._

##### Order in Which a Line of Wire Changes

-   When a line of wire turns on, the wires closer to the power source will cause block updates first
-   When a line of wire turns off, the wires closer to where the power source was, will cause block updates first
-   When two wires have the same distance to the power source, the one to the left in the direction of travel updates first
    -   If there is not enough context to know the direction of travel (when the wire was powered from above or below), the side to update first is picked at random

![Ari is testing the experimental Redstone changes, standing in the middle of a machine comprised of four sets of two pistons each facing each other. The leftmost piston according to the power source of the two is always extending regardless of orientation.](https://launchercontent.mojang.com/v2/images/1.21.2experimentalredstonepistons.jpg)

##### Block Updates Around a Wire

-   The order in which blocks around the wire update is based on the direction the wire received an update from
-   The order of the updates is: back, front, left, right, down, up
-   When the updates are further distributed through solid blocks, the same order is applied there

#### Known Issues

As this experiment only changes Redstone wire, interactions with other components may not always act as expected, especially when it comes to update orders.

The removal of excessive neighbor updates around wire affects behavior of Quasi-Connectivity based contraptions. We plan to address these issues at a later point.

### Minecart Improvements

Added a new Experiment containing various movement changes to Minecarts. This can be enabled by selecting "Minecart Improvements" in the Experiments menu when creating a world.

Our long term goal is to make vehicle travel, like Minecarts, a viable option for players compared to other late-game options which currently dominate most playstyles. To achieve this, we aim to make riding Minecarts a smooth experience, with consistent and predictable motion and rotation. With this feature toggle we are laying a foundation to build upon in the future. We are aware of that these changes will break some existing contraptions, which is why we want to collaborate with the community to shape the upgrade and future experience of riding Minecarts.

Please note that the experimental features behind this toggle are not aimed at any future release at this time. Instead, this is a place for us to try out changes and gather feedback.

We are excited to hear what you think about these changes: please share your feedback on this [feedback page](https://aka.ms/fbcarts).

![An experimental Minecart with Chest is speeding up on a powered circular railway, ready to be launched onto the distant track across the water.](https://launchercontent.mojang.com/v2/images/1.21.2experimentalminecartlauncher.jpg)

#### Movement Changes

-   Minecarts will articulate their movement better when going fast, riding on the rail all the time
    -   Minecarts will now smoothly turn along with the track and are less likely to halt or derail
-   Minecarts can now jump better
    -   They keep their vertical momentum when the track ends with a slope
    -   Minecarts will tilt to visually articulate while in the air
    -   No rail grinding sound is played when Minecarts are flying through the air
-   Added a new accessibility setting that makes players follow the rotation of Minecarts they ride
    -   Defaults to off
    -   Only has effect when within a world with the experiment enabled
-   Added new gamerule `minecartMaxSpeed` that changes the maximum speed of Minecarts
    -   Defaults to 8 and goes up to 1000 blocks per second.
    -   Setting it to a specific value does not guarantee that a minecart will reach that particular max speed - there are built in air resistances and similar effects that the speed added through slopes or powered rails need to overcome
    -   This gamerule only exists in worlds with the experiment enabled

#### Minecart Changes

-   Minecarts can no longer be placed within another Minecart by the player
    -   Dispensers can still "stack" Minecarts by placing them on the Rail, even if there is another Minecart already there
-   Minecarts can now consistently be placed next to each other along a track
-   Minecarts now pick up mobs more consistently when moving along a track
-   Minecarts will no longer phase through blocks on slopes

#### Known Impact

-   We are aware that these changes will affect certain contraptions such as 'piston bolts', which may now not work at all, or have their behavior changed
-   Very delicate rail networks will have their timings changed due to slight changes in speeds, movement distance, friction etc.
-   Contraptions that rely on Minecarts snapping to rails will no longer work, or have their behavior changed

## Fixed bugs in 1.21.2

-   [MC-379](https://bugs.mojang.com/browse/MC-379) spawn-animals and spawn-npcs=false removes all villagers and prevents summoning new mobs
-   [MC-1673](https://bugs.mojang.com/browse/MC-1673) Several mobs can pop off paintings, item frames and leads and destroy minecarts, armor stands and anything in item form even when mobGriefing is turned off
-   [MC-3266](https://bugs.mojang.com/browse/MC-3266) Your experience level overflows once it exceeds the integer limit
-   [MC-3697](https://bugs.mojang.com/browse/MC-3697) TNT submerged in water can destroy item frames, paintings, armor stands, and other similar entities
-   [MC-4665](https://bugs.mojang.com/browse/MC-4665) Anvil consuming 2 unbroken items of the same kind when renaming them
-   [MC-13246](https://bugs.mojang.com/browse/MC-13246) On certain enchanted items, the Anvil will display a "too expensive" message before attempting to repair, combine, or rename them
-   [MC-14800](https://bugs.mojang.com/browse/MC-14800) When zombie villagers, husks, drowned or zombified piglins are damaged, they spawn regular zombie reinforcements
-   [MC-16829](https://bugs.mojang.com/browse/MC-16829) The horse armor model does not show the enchantment glint effect
-   [MC-38022](https://bugs.mojang.com/browse/MC-38022) Order of rendering translucent block faces fails to update with camera position
-   [MC-39263](https://bugs.mojang.com/browse/MC-39263) Cannot set horizontal Motion for squid on land
-   [MC-49628](https://bugs.mojang.com/browse/MC-49628) When in spectator mode the head overlay shows even if it is set not to show in the skin customisation options
-   [MC-51905](https://bugs.mojang.com/browse/MC-51905) Horse model in inventory doesn't follow mouse cursor correctly if horse is facing south
-   [MC-53602](https://bugs.mojang.com/browse/MC-53602) Projectiles don't collide with the world border
-   [MC-54532](https://bugs.mojang.com/browse/MC-54532) Sneaking while falling on Slime Blocks inflicts fall damage
-   [MC-58294](https://bugs.mojang.com/browse/MC-58294) Squids and glow squids do not collide properly with solid blocks
-   [MC-59471](https://bugs.mojang.com/browse/MC-59471) String can be duplicated using tripwire hooks
-   [MC-64265](https://bugs.mojang.com/browse/MC-64265) Teleporting passengers does not dismount them
-   [MC-72494](https://bugs.mojang.com/browse/MC-72494) In Statistics screen 'm' is the same unit for both minutes and meters
-   [MC-73178](https://bugs.mojang.com/browse/MC-73178) Villagers' "CanPickUpLoot" tag cannot be set to zero
-   [MC-75494](https://bugs.mojang.com/browse/MC-75494) Lead item drop is not affected by doEntityDrops gamerule
-   [MC-86252](https://bugs.mojang.com/browse/MC-86252) Shields can continue to block after entity changes dimensions due to client and server desync
-   [MC-88967](https://bugs.mojang.com/browse/MC-88967) Most NBT tags are not kept when a mob converts to another mob
-   [MC-89883](https://bugs.mojang.com/browse/MC-89883) Squid and glow squid collision error and rubberbanding
-   [MC-92875](https://bugs.mojang.com/browse/MC-92875) Collisionless blocks ignore entities with high velocity
-   [MC-101376](https://bugs.mojang.com/browse/MC-101376) Elytra appearance doesn't update in 1st person mode; only in 3rd person
-   [MC-108323](https://bugs.mojang.com/browse/MC-108323) Underlines in chat and /title command intersect each other, causing an ugly effect when fading
-   [MC-110386](https://bugs.mojang.com/browse/MC-110386) Certain mobs attack themselves when targeted by a mob of the same type
-   [MC-112257](https://bugs.mojang.com/browse/MC-112257) Some NBT tags require the correct suffix
-   [MC-116618](https://bugs.mojang.com/browse/MC-116618) Dropping items rapidly inside the "Survival Inventory" tab in creative mode deletes items
-   [MC-119369](https://bugs.mojang.com/browse/MC-119369) Boats crash/break and can kill their passengers when falling certain distances
-   [MC-120417](https://bugs.mojang.com/browse/MC-120417) Incorrect dragon egg block model
-   [MC-121013](https://bugs.mojang.com/browse/MC-121013) "Followrange" Attribute only targets mobs on (roughly) the same y level.
-   [MC-123739](https://bugs.mojang.com/browse/MC-123739) Recipe book entries are no longer sorted in any meaningful manner
-   [MC-123742](https://bugs.mojang.com/browse/MC-123742) Eyes of Endermen turn white when they are looking up during the day
-   [MC-124331](https://bugs.mojang.com/browse/MC-124331) Redstone lamps do not show on maps
-   [MC-125642](https://bugs.mojang.com/browse/MC-125642) Bone meal is consumed when used on fern, grass and seagrass even if it cannot grow
-   [MC-127995](https://bugs.mojang.com/browse/MC-127995) You can use bone meal on sea pickles in situations where no sea pickles will grow
-   [MC-129055](https://bugs.mojang.com/browse/MC-129055) Issues breaking tripwire with shears
-   [MC-129298](https://bugs.mojang.com/browse/MC-129298) Drowned don't chase you if they are in 1 block deep water
-   [MC-129826](https://bugs.mojang.com/browse/MC-129826) \["shade": false\] is missing from potted cross models, resulting in most potted plants appearing darker than they should
-   [MC-130097](https://bugs.mojang.com/browse/MC-130097) Tropical fish fin UV mapping wrong
-   [MC-131215](https://bugs.mojang.com/browse/MC-131215) Cannot teleport an entity which is in a boat
-   [MC-132804](https://bugs.mojang.com/browse/MC-132804) Low follow range attribute also affects mobs' idle wandering range
-   [MC-133862](https://bugs.mojang.com/browse/MC-133862) Optimize world screen backup button has inaccurate text
-   [MC-134626](https://bugs.mojang.com/browse/MC-134626) Squids/glow squids bounce up and down in bubble columns, teleporting high up in the air
-   [MC-135898](https://bugs.mojang.com/browse/MC-135898) Teams are not retained when a mob converts to another mob
-   [MC-135971](https://bugs.mojang.com/browse/MC-135971) Can't use CTRL+Q in crafting table
-   [MC-137053](https://bugs.mojang.com/browse/MC-137053) You cannot set the "CanBreakDoors" NBT tag of drowned to "1b"
-   [MC-144327](https://bugs.mojang.com/browse/MC-144327) The bottom face texture of a blaze's rods is the same as their top face texture
-   [MC-144761](https://bugs.mojang.com/browse/MC-144761) Animated texture interpolation ignores alpha channel during transition from/to transparent pixels
-   [MC-145656](https://bugs.mojang.com/browse/MC-145656) Attribute "follow\_range" is not working for hostile mobs before they find the target
-   [MC-146805](https://bugs.mojang.com/browse/MC-146805) Trader Llamas don't attack zombies, drowned, husks, zombie villager and illagers
-   [MC-148041](https://bugs.mojang.com/browse/MC-148041) Two separate translation lines for the same thing, "Bells Rung" statistic
-   [MC-148982](https://bugs.mojang.com/browse/MC-148982) Map color for wheat is incorrect
-   [MC-151706](https://bugs.mojang.com/browse/MC-151706) Player jitters when landing on a slime block with the slow falling effect
-   [MC-151828](https://bugs.mojang.com/browse/MC-151828) Woodland mansion structure '1x1\_b3' has dark oak leaf block with persistent tag set to 'false'
-   [MC-154053](https://bugs.mojang.com/browse/MC-154053) Trader llama spitting far distance when attacked
-   [MC-156579](https://bugs.mojang.com/browse/MC-156579) Creative players can fly through portals when going quickly enough using elytra or Riptide trident
-   [MC-156857](https://bugs.mojang.com/browse/MC-156857) Shift-clicking X button in Creative menu can create ghost items
-   [MC-158389](https://bugs.mojang.com/browse/MC-158389) Raid results in victory if it cannot find a valid spawn point
-   [MC-161913](https://bugs.mojang.com/browse/MC-161913) Misalignment on edges/corners of clouds
-   [MC-162551](https://bugs.mojang.com/browse/MC-162551) When shooting an arrow on top of a player in Creative mode, a closed shulker, or an invincible mob, the arrow glitches around on top of the entity
-   [MC-162713](https://bugs.mojang.com/browse/MC-162713) Clouds are generated with offset to east and south
-   [MC-164258](https://bugs.mojang.com/browse/MC-164258) Recipe book search field is not selected when clicking on the search icon
-   [MC-165182](https://bugs.mojang.com/browse/MC-165182) Inventory/GUI textures no longer handle translucent pixels correctly
-   [MC-166880](https://bugs.mojang.com/browse/MC-166880) Pufferfish spikes model seems to be broken
-   [MC-167242](https://bugs.mojang.com/browse/MC-167242) Bed stays occupied after a lightning turns the villager sleeping in it into a witch
-   [MC-167900](https://bugs.mojang.com/browse/MC-167900) Shulker Head texture doesn't support transparency
-   [MC-167906](https://bugs.mojang.com/browse/MC-167906) Beehive items at full honey level do not appear with honey in inventory/as item/in hand
-   [MC-168329](https://bugs.mojang.com/browse/MC-168329) Bees do not leave their hives in the Nether/End in some cases
-   [MC-168546](https://bugs.mojang.com/browse/MC-168546) Bee nest / hive items have no lore
-   [MC-169660](https://bugs.mojang.com/browse/MC-169660) /teleport without can change the entity's rotation
-   [MC-170863](https://bugs.mojang.com/browse/MC-170863) Dropping item stacks from the player's hotbar in any creative inventory tab other than "Survival Inventory" deletes items
-   [MC-170977](https://bugs.mojang.com/browse/MC-170977) F3 text is behind inventory and F3 cake diagram is in front of inventory
-   [MC-172075](https://bugs.mojang.com/browse/MC-172075) Mouth/jaw of a provoked enderman becomes slightly detached when looking up or down
-   [MC-173728](https://bugs.mojang.com/browse/MC-173728) The heads of baby sheep are positioned too low when they're eating grass
-   [MC-174214](https://bugs.mojang.com/browse/MC-174214) Fireworks for crossbow go through an entity if it is close to a player
-   [MC-174732](https://bugs.mojang.com/browse/MC-174732) Semi-transparent status effect textures do not render correctly in the inventory or beacon UI
-   [MC-176937](https://bugs.mojang.com/browse/MC-176937) Deleting items using the drop key while a tab is open in the creative inventory plays hand animation, even if the item isn't dropped
-   [MC-177452](https://bugs.mojang.com/browse/MC-177452) Unneeded faces inside repeater models
-   [MC-177453](https://bugs.mojang.com/browse/MC-177453) Unneeded faces inside comparator models
-   [MC-178660](https://bugs.mojang.com/browse/MC-178660) Player jitters when landing on a bed with the slow falling effect
-   [MC-179629](https://bugs.mojang.com/browse/MC-179629) Faces in between cloud "blocks" can still render from outside of the cloud
-   [MC-180272](https://bugs.mojang.com/browse/MC-180272) en\_us.json contains unused strings
-   [MC-182478](https://bugs.mojang.com/browse/MC-182478) Mob armor generates starting with boots rather than helmet
-   [MC-182814](https://bugs.mojang.com/browse/MC-182814) Drinking honey bottles increases "minecraft.used:minecraft.honey\_bottle" by a value of two and runs the "minecraft:consume\_item" advancement trigger twice
-   [MC-182877](https://bugs.mojang.com/browse/MC-182877) Piglins use one hand to hold a loaded crossbow
-   [MC-183518](https://bugs.mojang.com/browse/MC-183518) High CPU usage on hypervisor host possibly due to excessive syscall usage by Minecraft Server
-   [MC-183636](https://bugs.mojang.com/browse/MC-183636) follow\_range attribute not working for piglins
-   [MC-185144](https://bugs.mojang.com/browse/MC-185144) Item durability bar and all items render incorrectly in the villager trade UI
-   [MC-186362](https://bugs.mojang.com/browse/MC-186362) Casting issue: Translucent block rendering breaks down at high distances
-   [MC-187920](https://bugs.mojang.com/browse/MC-187920) Bees sometimes give up when returning home
-   [MC-188217](https://bugs.mojang.com/browse/MC-188217) Bees circle above flower that is covered by all sides
-   [MC-188485](https://bugs.mojang.com/browse/MC-188485) Inventory can get desynced when shift-clicking the Destroy Item slot
-   [MC-190163](https://bugs.mojang.com/browse/MC-190163) Zoglin spawn eggs don't occasionally spawn baby zoglins on their own accord
-   [MC-190484](https://bugs.mojang.com/browse/MC-190484) Sneaking players' name tags are partly invisible depending on what angle you're facing
-   [MC-191431](https://bugs.mojang.com/browse/MC-191431) Player spectator head is invisible / does not render in the inventory after switching to "Fabulous!"
-   [MC-195754](https://bugs.mojang.com/browse/MC-195754) Illagers in raids continuously try and fail to pick up ominous banners if they can't reach them
-   [MC-196556](https://bugs.mojang.com/browse/MC-196556) When projectiles (such as arrows and tridents) move too fast, they can't be teleported by portals and end gateways
-   [MC-196736](https://bugs.mojang.com/browse/MC-196736) Hoglins break their leash when zombifying, despite zoglins being leashable
-   [MC-196964](https://bugs.mojang.com/browse/MC-196964) Fall damage is reset when an entity converts to another entity
-   [MC-199238](https://bugs.mojang.com/browse/MC-199238) Unneeded faces and missing cullface in dragon egg model
-   [MC-199344](https://bugs.mojang.com/browse/MC-199344) Thrown ender pearls sometimes disappear after player death
-   [MC-203748](https://bugs.mojang.com/browse/MC-203748) Filled lava cauldrons are able to be put under water
-   [MC-204050](https://bugs.mojang.com/browse/MC-204050) Subtitle for shooting amethyst blocks is "Block breaking"
-   [MC-205851](https://bugs.mojang.com/browse/MC-205851) Being partway inside of a cloud can cause the opposite face of that cloud to not render
-   [MC-206074](https://bugs.mojang.com/browse/MC-206074) Survival tab of Creative inventory desyncs if changed manually after an external change
-   [MC-206436](https://bugs.mojang.com/browse/MC-206436) Stonecutter ignores anything over 64 when shift-clicking
-   [MC-207101](https://bugs.mojang.com/browse/MC-207101) When a lingering potion lands on top of a player/mob, the area effect cloud spawns above the player/mob instead of inside it, rendering the lingering potion useless
-   [MC-209947](https://bugs.mojang.com/browse/MC-209947) minecraft:block/scaffolding\_unstable has incorrect cullfaces
-   [MC-212213](https://bugs.mojang.com/browse/MC-212213) Squids unable to be affected by knockback enchantment.
-   [MC-213763](https://bugs.mojang.com/browse/MC-213763) Spore blossom gets darker when next to a block with smooth lighting enabled
-   [MC-214625](https://bugs.mojang.com/browse/MC-214625) Unlit redstone torches are unaffected by block shading / are evenly lit on all sides
-   [MC-214662](https://bugs.mojang.com/browse/MC-214662) Redstone torches on repeaters and comparators are shaded differently from normal redstone torches
-   [MC-215332](https://bugs.mojang.com/browse/MC-215332) Glow squids lack a baby variant
-   [MC-215752](https://bugs.mojang.com/browse/MC-215752) Z-fighting with paintings and item frames in solid blocks
-   [MC-216016](https://bugs.mojang.com/browse/MC-216016) Launching fireworks into a crystal sound block will make the breaking noise
-   [MC-219083](https://bugs.mojang.com/browse/MC-219083) Hunger client/server desync when natural regeneration is off in peaceful mode
-   [MC-220360](https://bugs.mojang.com/browse/MC-220360) Gifts given by baby villagers, nitwits and unemployed villagers when under the Hero of the Village effect are hardcoded
-   [MC-220469](https://bugs.mojang.com/browse/MC-220469) You cannot use items while looking at wolves owned by other players
-   [MC-223032](https://bugs.mojang.com/browse/MC-223032) Z-fighting can be seen on the stingers of bees when they're stuck in players
-   [MC-223375](https://bugs.mojang.com/browse/MC-223375) Pandas' bodies stay tilted after eating
-   [MC-224035](https://bugs.mojang.com/browse/MC-224035) Small Dripleaf's model is inconsistent
-   [MC-224454](https://bugs.mojang.com/browse/MC-224454) Entities don't recognize azaleas or flowering azaleas as obstacles when pathfinding
-   [MC-225060](https://bugs.mojang.com/browse/MC-225060) Burning entity sound repeats every tick
-   [MC-225270](https://bugs.mojang.com/browse/MC-225270) Goats can move armor stands even with mobGriefing turned off
-   [MC-225417](https://bugs.mojang.com/browse/MC-225417) Squids and glow squids can break free from leads when attacked
-   [MC-225422](https://bugs.mojang.com/browse/MC-225422) Squids and glow squids do not move smoothly in the water compared to other aquatic mobs
-   [MC-226038](https://bugs.mojang.com/browse/MC-226038) Scheduled functions are part of weather in profile results
-   [MC-226687](https://bugs.mojang.com/browse/MC-226687) Sea Level is assumed to be Y = 63 in numerous parts of Minecraft
-   [MC-227139](https://bugs.mojang.com/browse/MC-227139) Sky fog stutters
-   [MC-227169](https://bugs.mojang.com/browse/MC-227169) The main hand is positioned incorrectly when holding a loaded crossbow in your offhand
-   [MC-228070](https://bugs.mojang.com/browse/MC-228070) Name tags rendered in blocks have letters brighter depending on your angle
-   [MC-230317](https://bugs.mojang.com/browse/MC-230317) Lead disappears when mooshroom cow is sheared
-   [MC-233603](https://bugs.mojang.com/browse/MC-233603) HUD / Hotbar rendering can heavily impact frame rate performance
-   [MC-233817](https://bugs.mojang.com/browse/MC-233817) Items held by the cursor render behind the white highlight of recipe book previews
-   [MC-234318](https://bugs.mojang.com/browse/MC-234318) Small dripleaf stems intersect its leaves
-   [MC-235953](https://bugs.mojang.com/browse/MC-235953) Entity eyes render type doesn't blend non-black transparent pixels properly
-   [MC-239581](https://bugs.mojang.com/browse/MC-239581) Bees do not become angry at the closest player when hive is exploded
-   [MC-239812](https://bugs.mojang.com/browse/MC-239812) Dead players in LAN environments remain in the world when the host leaves
-   [MC-240001](https://bugs.mojang.com/browse/MC-240001) The white and red highlights from recipe book previews render above potion tooltips
-   [MC-240948](https://bugs.mojang.com/browse/MC-240948) Filled powder snow cauldrons are able to be put under water
-   [MC-241873](https://bugs.mojang.com/browse/MC-241873) Ravagers can move armor stands even with mobGriefing turned off
-   [MC-242882](https://bugs.mojang.com/browse/MC-242882) Cape detaches from body while sneaking and falling
-   [MC-243413](https://bugs.mojang.com/browse/MC-243413) Some Explorer Maps are missing their icon
-   [MC-244720](https://bugs.mojang.com/browse/MC-244720) "Erased cached data" button in Optimize World is not labeled in the right order when using Tab
-   [MC-244739](https://bugs.mojang.com/browse/MC-244739) Goat eating sounds aren't played when feeding them the last item of wheat within a stack
-   [MC-244948](https://bugs.mojang.com/browse/MC-244948) The "minecraft:item.bundle.remove\_one" sound plays even when no items are unpacked from bundles
-   [MC-245510](https://bugs.mojang.com/browse/MC-245510) Piglin Brute's generic.follow\_range attribute functions oddly
-   [MC-245603](https://bugs.mojang.com/browse/MC-245603) Powder snow can not put out the fire on arrows
-   [MC-247238](https://bugs.mojang.com/browse/MC-247238) Sky fog is not cylindrical
-   [MC-249067](https://bugs.mojang.com/browse/MC-249067) Ominous banners lose their rarity color when renamed using anvils
-   [MC-249414](https://bugs.mojang.com/browse/MC-249414) The "Shader rendertype\_entity\_translucent\_emissive could not find sampler named Sampler2 in the specified shader program." warning is logged in the game output console when launching the game
-   [MC-249901](https://bugs.mojang.com/browse/MC-249901) Frogs don't play the frog eating sound when given a slime ball
-   [MC-250924](https://bugs.mojang.com/browse/MC-250924) Goat horns are missing sounds
-   [MC-256422](https://bugs.mojang.com/browse/MC-256422) Some words within some strings use right single quotation marks instead of apostrophes
-   [MC-257309](https://bugs.mojang.com/browse/MC-257309) Monster spawner tries to spawn wardens and zoglins when the difficulty is Peaceful
-   [MC-257318](https://bugs.mojang.com/browse/MC-257318) Non-transparent toasts and some buttons that should be transparent in custom Resource Pack
-   [MC-258971](https://bugs.mojang.com/browse/MC-258971) ClientboundUpdateRecipesPacket breaks after multiple recipes use big tags
-   [MC-259264](https://bugs.mojang.com/browse/MC-259264) Left-handed vexes raise their right hands to attack
-   [MC-259376](https://bugs.mojang.com/browse/MC-259376) ServerboundMovePlayerPacket's xRot can have invalid value
-   [MC-259651](https://bugs.mojang.com/browse/MC-259651) updateSkyBrightness() is not used client-side, causing multiple issues
-   [MC-259687](https://bugs.mojang.com/browse/MC-259687) "Distance by Elytra" statistic is approximately doubled
-   [MC-259798](https://bugs.mojang.com/browse/MC-259798) Block hitboxes cause semi-transparent blocks not to render behind them in lower than "Fabulous" graphics settings
-   [MC-259936](https://bugs.mojang.com/browse/MC-259936) Equipping armor in hand via right-click equips entire stack
-   [MC-260013](https://bugs.mojang.com/browse/MC-260013) Baby Llama's head has incorrect scale method
-   [MC-260537](https://bugs.mojang.com/browse/MC-260537) Tree growth can replace leaves that have the 'persistent' block state set to true
-   [MC-260858](https://bugs.mojang.com/browse/MC-260858) The word "ticks" within a "/schedule" command feedback message is always pluralized
-   [MC-260859](https://bugs.mojang.com/browse/MC-260859) Some words within a tick profiling feedback message are always pluralized
-   [MC-260860](https://bugs.mojang.com/browse/MC-260860) Some words within some chat delay strings are always pluralized
-   [MC-260913](https://bugs.mojang.com/browse/MC-260913) The word "blocks" within some "/spreadplayers" command feedback messages is always pluralized
-   [MC-260914](https://bugs.mojang.com/browse/MC-260914) "/spreadplayers" strings for entities consist of inconsistent noun usage
-   [MC-261666](https://bugs.mojang.com/browse/MC-261666) Armor given to Villagers is lost when they convert to Zombie Villagers
-   [MC-261691](https://bugs.mojang.com/browse/MC-261691) Bees get stuck while trying to pathfind to inaccessible flowers
-   [MC-262112](https://bugs.mojang.com/browse/MC-262112) Wither skull's bounding box is wrongly positioned in the first tick, and cannot be selected with volume checks in commands
-   [MC-262175](https://bugs.mojang.com/browse/MC-262175) The "advancements.adventure.trim\_with\_any\_armor\_pattern.description" text contains incorrect English grammar
-   [MC-262498](https://bugs.mojang.com/browse/MC-262498) Underground seagrass feature files exist despite never generating
-   [MC-262598](https://bugs.mojang.com/browse/MC-262598) Tripwire textures in the tripwire hook "attached: true" state have a wrong black rendering when the tripwire hook is attached to a non-transparent block
-   [MC-262652](https://bugs.mojang.com/browse/MC-262652) Dragon egg's side texture is mapped strangely as of 1.8 (and the model is also unoptimized)
-   [MC-263838](https://bugs.mojang.com/browse/MC-263838) doLimitedCrafting gamerule does not work on suspicious stew
-   [MC-263858](https://bugs.mojang.com/browse/MC-263858) Text Displays are rendered differently compared to name tags
-   [MC-264886](https://bugs.mojang.com/browse/MC-264886) Geode features ignore the invalid\_blocks field
-   [MC-264986](https://bugs.mojang.com/browse/MC-264986) Item count of fuel slot affects the way smelting recipe book moves ingredients
-   [MC-265399](https://bugs.mojang.com/browse/MC-265399) Players' heads are incorrectly positioned while exiting the swimming/crawling state when other players are on screen
-   [MC-265554](https://bugs.mojang.com/browse/MC-265554) Aaron Cherof listed as "Aaron Cherof\\u00a0" in credits.json
-   [MC-265693](https://bugs.mojang.com/browse/MC-265693) Movement does not reset a player's last action time
-   [MC-265695](https://bugs.mojang.com/browse/MC-265695) The feedback for setting the idle timeout to 0 minutes does not reflect the actual behavior
-   [MC-265703](https://bugs.mojang.com/browse/MC-265703) BrushableBlock's codec misspells 'completed' as 'comleted'
-   [MC-265990](https://bugs.mojang.com/browse/MC-265990) Burning arrows can light candles and cakes with candles outside the world border
-   [MC-266441](https://bugs.mojang.com/browse/MC-266441) Multiple trial chamber templates have missing or incorrect blocks
-   [MC-266480](https://bugs.mojang.com/browse/MC-266480) Breeze can jump on top of honey blocks
-   [MC-266494](https://bugs.mojang.com/browse/MC-266494) Jump Boost does not affect the breeze's jump
-   [MC-266949](https://bugs.mojang.com/browse/MC-266949) Monster spawner tries to spawn breezes when the difficulty is Peaceful
-   [MC-267006](https://bugs.mojang.com/browse/MC-267006) The Distance Flown statistics rapidly increases when you are standing in Ender Dragon's hitbox
-   [MC-267107](https://bugs.mojang.com/browse/MC-267107) Spawners unsuccessfully try to summon hostile entities on peaceful difficulty
-   [MC-267308](https://bugs.mojang.com/browse/MC-267308) Profiling with F3+L while game is frozen spams output with errors
-   [MC-267401](https://bugs.mojang.com/browse/MC-267401) All the player skin report's category descriptions use the chat message ones
-   [MC-267838](https://bugs.mojang.com/browse/MC-267838) Projectile yaw rotations have incorrect interpolation, causing flickering
-   [MC-267889](https://bugs.mojang.com/browse/MC-267889) The "blocked\_slot" bundle texture has a miscolored pixel
-   [MC-267957](https://bugs.mojang.com/browse/MC-267957) Eating isn't canceled when feeding untamed wolves raw food
-   [MC-268045](https://bugs.mojang.com/browse/MC-268045) The name of Entity Argument is plural in Query literal node of Experience command
-   [MC-268220](https://bugs.mojang.com/browse/MC-268220) Zoglins ignore monster spawning requirements when spawning naturally
-   [MC-268241](https://bugs.mojang.com/browse/MC-268241) The bottom faces of vaults aren't culled when covered by blocks
-   [MC-268431](https://bugs.mojang.com/browse/MC-268431) External inventory changes except for the hotbar are not registered in a creative mode item selection screen
-   [MC-268518](https://bugs.mojang.com/browse/MC-268518) Attribute generic.luck only affect players
-   [MC-268528](https://bugs.mojang.com/browse/MC-268528) Cave Vines can be pollinated infinitely (instead of limit of 10)
-   [MC-268645](https://bugs.mojang.com/browse/MC-268645) Scheduling a macro function silently fails
-   [MC-268929](https://bugs.mojang.com/browse/MC-268929) pack.png does not support translucent pixels
-   [MC-269083](https://bugs.mojang.com/browse/MC-269083) Effect background texture in inventory renders translucent pixels as opaque
-   [MC-269152](https://bugs.mojang.com/browse/MC-269152) nine\_slice texture scaling will cause ridiculous levels of lag when used on small textures
-   [MC-269352](https://bugs.mojang.com/browse/MC-269352) The breeze rod uses an incorrect model for holding
-   [MC-269375](https://bugs.mojang.com/browse/MC-269375) Breeze's wind charge attack can move or break armor stands when mobGriefing is disabled
-   [MC-269376](https://bugs.mojang.com/browse/MC-269376) Breeze fires wind charge from center of hitbox
-   [MC-269428](https://bugs.mojang.com/browse/MC-269428) Mace fall damage multiplier does not apply to mobs
-   [MC-269440](https://bugs.mojang.com/browse/MC-269440) Text fields render translucent pixels as opaque
-   [MC-269441](https://bugs.mojang.com/browse/MC-269441) Difficulty lock button renders translucent pixels as opaque
-   [MC-269445](https://bugs.mojang.com/browse/MC-269445) Some empty slot icons render translucent pixels as opaque
-   [MC-269447](https://bugs.mojang.com/browse/MC-269447) Hover text background box cannot be retextured
-   [MC-269495](https://bugs.mojang.com/browse/MC-269495) Identifiers for chest boats in a lang file affect both the item tooltip and the container gui
-   [MC-269528](https://bugs.mojang.com/browse/MC-269528) Recipe book tabs are rendered over items held by the mouse cursor
-   [MC-269549](https://bugs.mojang.com/browse/MC-269549) Items held in cursor are rendered behind recipe book UI elements
-   [MC-269622](https://bugs.mojang.com/browse/MC-269622) Previous/Next Page buttons render translucent pixels as opaque
-   [MC-269627](https://bugs.mojang.com/browse/MC-269627) Toasts render translucent pixels as opaque
-   [MC-269656](https://bugs.mojang.com/browse/MC-269656) Feeding parrots poison while holding mace grants Over-Overkill challenge
-   [MC-269715](https://bugs.mojang.com/browse/MC-269715) Food won't be eaten when the component food.eat\_seconds is less than 0.05
-   [MC-269738](https://bugs.mojang.com/browse/MC-269738) Recipe book cannot quick-move oversized item stacks into applicable recipe slots
-   [MC-269751](https://bugs.mojang.com/browse/MC-269751) Advancement frames render translucent pixels as opaque
-   [MC-269814](https://bugs.mojang.com/browse/MC-269814) Can’t feed fish to wolves
-   [MC-269832](https://bugs.mojang.com/browse/MC-269832) Gamemode switcher sprites render translucent pixels as opaque
-   [MC-269834](https://bugs.mojang.com/browse/MC-269834) Statistics screen sprites render translucent pixels as opaque
-   [MC-269851](https://bugs.mojang.com/browse/MC-269851) Breeze idle animations are different than Bedrock Edition
-   [MC-269873](https://bugs.mojang.com/browse/MC-269873) Egg laying drop from chickens is hardcoded
-   [MC-269895](https://bugs.mojang.com/browse/MC-269895) Breezes missing higher fidelity jump animation from Bedrock
-   [MC-269936](https://bugs.mojang.com/browse/MC-269936) Transferable list (resource pack, data pack) screen buttons render translucent pixels as opaque
-   [MC-269937](https://bugs.mojang.com/browse/MC-269937) World list buttons render translucent pixels as opaque
-   [MC-269996](https://bugs.mojang.com/browse/MC-269996) Custom names of Interaction entities render at wrong location
-   [MC-270051](https://bugs.mojang.com/browse/MC-270051) Recipe book button renders translucent pixels as opaque
-   [MC-270113](https://bugs.mojang.com/browse/MC-270113) Trial spawner ominous\_config doesn't save setting values to default
-   [MC-270183](https://bugs.mojang.com/browse/MC-270183) Lingering potions do not give effects when hit on the target's head
-   [MC-270254](https://bugs.mojang.com/browse/MC-270254) Item slot highlight effect cannot be retextured
-   [MC-270299](https://bugs.mojang.com/browse/MC-270299) New data pack component crafting doesn't work with suspicious stews
-   [MC-270306](https://bugs.mojang.com/browse/MC-270306) Disabled item cooldown overlay renders behind effect icons in inventory
-   [MC-270307](https://bugs.mojang.com/browse/MC-270307) Disabled item cooldown renders behind recipe book and its buttons
-   [MC-270314](https://bugs.mojang.com/browse/MC-270314) "Use a Bundle" toast pops up repeatedly if player constantly left-clicks on a bundle while holding an item
-   [MC-270348](https://bugs.mojang.com/browse/MC-270348) Some slime trial spawners in trial chambers won't spawn slimes without player intervention
-   [MC-270510](https://bugs.mojang.com/browse/MC-270510) youJustLostTheGame is not the first item in the mappings
-   [MC-270518](https://bugs.mojang.com/browse/MC-270518) Scrollers in block UIs render translucent pixels as opaque
-   [MC-270519](https://bugs.mojang.com/browse/MC-270519) "Error" textures in block/entity GUIs do not support translucent textures
-   [MC-270527](https://bugs.mojang.com/browse/MC-270527) "tile" texture scaling also causes incredible lag with small textures
-   [MC-270563](https://bugs.mojang.com/browse/MC-270563) Furnace, blast furnace and smoker smelting progress and burn time indicators do not support translucent textures
-   [MC-270564](https://bugs.mojang.com/browse/MC-270564) Brewing stand fuel, bubbles and progress sprites do not support translucent textures
-   [MC-270570](https://bugs.mojang.com/browse/MC-270570) TPS chart uses OS locale specific number formatting
-   [MC-270571](https://bugs.mojang.com/browse/MC-270571) /tick command uses OS locale specific number formatting
-   [MC-270614](https://bugs.mojang.com/browse/MC-270614) A trapdoor in chamber\_8 is rotated the wrong way
-   [MC-270640](https://bugs.mojang.com/browse/MC-270640) Anvil text field does not support translucent textures
-   [MC-270641](https://bugs.mojang.com/browse/MC-270641) Crafter UI sprites do not support translucent pixels
-   [MC-270678](https://bugs.mojang.com/browse/MC-270678) Tabs in recipe book and Creative inventory do not support translucent pixels
-   [MC-270680](https://bugs.mojang.com/browse/MC-270680) Buttons in the beacon GUI do not support translucent pixels
-   [MC-270692](https://bugs.mojang.com/browse/MC-270692) Textures for empty slots do not support translucent pixels
-   [MC-270696](https://bugs.mojang.com/browse/MC-270696) Traps are generated behind walls in Trial Chambers
-   [MC-270697](https://bugs.mojang.com/browse/MC-270697) Stonecutter recipe buttons render translucent pixels as opaque
-   [MC-270698](https://bugs.mojang.com/browse/MC-270698) Loom recipe buttons render translucent pixels as opaque
-   [MC-270726](https://bugs.mojang.com/browse/MC-270726) Advancement backgrounds render translucent pixels as opaque
-   [MC-270741](https://bugs.mojang.com/browse/MC-270741) Realms main menu icons do not render translucent pixels correctly, but accessibility/language icons do
-   [MC-270742](https://bugs.mojang.com/browse/MC-270742) Displays don't rotate properly between 179 and 180
-   [MC-270764](https://bugs.mojang.com/browse/MC-270764) Recipe book buttons and icons do not render translucent pixels correctly
-   [MC-270765](https://bugs.mojang.com/browse/MC-270765) Bundle background does not handle translucent pixels correctly
-   [MC-270775](https://bugs.mojang.com/browse/MC-270775) Ominous vault failed to generate sometimes
-   [MC-270852](https://bugs.mojang.com/browse/MC-270852) Fully charged projectiles that are thrown or fired at a nearby shulker will not deflect properly
-   [MC-271113](https://bugs.mojang.com/browse/MC-271113) Bees occasionally freezing right before they enter the hives
-   [MC-271191](https://bugs.mojang.com/browse/MC-271191) Poor saving performance due to large amount of item frames
-   [MC-271486](https://bugs.mojang.com/browse/MC-271486) The tree in the "entrance\_1" room of trial chambers is not removed
-   [MC-271628](https://bugs.mojang.com/browse/MC-271628) Enchantment effect "projectile\_spawned" doesn't trigger for fishing rods and tridents
-   [MC-271826](https://bugs.mojang.com/browse/MC-271826) Armor default attribute modifier component can't be removed
-   [MC-271961](https://bugs.mojang.com/browse/MC-271961) Parity Issue: No empty bubbles on the oxygen bar and popping sound
-   [MC-272020](https://bugs.mojang.com/browse/MC-272020) Players' capes don't move with the yaw of their bodies when swinging
-   [MC-272207](https://bugs.mojang.com/browse/MC-272207) Trial chambers no longer generate a bed in the secret room nearing the entrance
-   [MC-272327](https://bugs.mojang.com/browse/MC-272327) Attribute effects not properly postfixed with slot name
-   [MC-272345](https://bugs.mojang.com/browse/MC-272345) Some trial spawners don't have an extra breeze out at once when ominous
-   [MC-272409](https://bugs.mojang.com/browse/MC-272409) Item entity's name ignores `item_name` component
-   [MC-272414](https://bugs.mojang.com/browse/MC-272414) Redundant calculation causes 2x lag during explosions
-   [MC-272506](https://bugs.mojang.com/browse/MC-272506) Fast switching between servers causes disconnect
-   [MC-272603](https://bugs.mojang.com/browse/MC-272603) Riding an entity into the end fountain skips the credits
-   [MC-272643](https://bugs.mojang.com/browse/MC-272643) Items containing using\_converts\_to cannot be stacked with the original items after restarting the world.
-   [MC-272649](https://bugs.mojang.com/browse/MC-272649) After a chest with the item component "container\_loot" is opened, it will appear on the subsequent pick Block
-   [MC-272670](https://bugs.mojang.com/browse/MC-272670) Crash while saving entity NBT - Cannot encode empty ItemStack
-   [MC-272766](https://bugs.mojang.com/browse/MC-272766) When riding a minecart through a portal, the direction the player is facing after they go through the portal is not the same as when they entered
-   [MC-272802](https://bugs.mojang.com/browse/MC-272802) Ender pearls deal no damage to their owners after switching dimensions and landing
-   [MC-272804](https://bugs.mojang.com/browse/MC-272804) The mining fatigue animation plays in reverse
-   [MC-272805](https://bugs.mojang.com/browse/MC-272805) Command blocks made from Pick Block still do not activate when placed near sources of power
-   [MC-272821](https://bugs.mojang.com/browse/MC-272821) Wind Charges incorrectly negate fall damage
-   [MC-272920](https://bugs.mojang.com/browse/MC-272920) Bottles get deleted when drinking a potion when there is more than 1 in a slot
-   [MC-272932](https://bugs.mojang.com/browse/MC-272932) Auto-save text in the pause menu is rendered at the wrong position
-   [MC-272946](https://bugs.mojang.com/browse/MC-272946) The block outline is nearly invisible for some blocks
-   [MC-272994](https://bugs.mojang.com/browse/MC-272994) Allays assigned to a player can be set on fire with sweeping and fire aspect
-   [MC-273076](https://bugs.mojang.com/browse/MC-273076) Breeze immediately forgets the player once Line of Sight is lost, even through transparent blocks
-   [MC-273239](https://bugs.mojang.com/browse/MC-273239) Trial Spawners rapidly change block state when switching gamerule "doMobSpawning" from false to true
-   [MC-273263](https://bugs.mojang.com/browse/MC-273263) Attributes are retained even if destroyed by "damage\_item"
-   [MC-273281](https://bugs.mojang.com/browse/MC-273281) "projectile\_spawned" Enchantment Component runs predicates and effects on projectiles before all of their data has been assigned
-   [MC-273288](https://bugs.mojang.com/browse/MC-273288) Dropping a stack of items while in the creative mode inventory deletes them
-   [MC-273300](https://bugs.mojang.com/browse/MC-273300) Horse armor and wolf armor swap from off-hand to main hand upon pressing the Use Item/Place Block key
-   [MC-273311](https://bugs.mojang.com/browse/MC-273311) Taking near Float.MAX\_VALUE damage from mob attack through commands on hard causes NaN Absorption and Health
-   [MC-273328](https://bugs.mojang.com/browse/MC-273328) Stars are smaller than supposed to
-   [MC-273329](https://bugs.mojang.com/browse/MC-273329) Drinking milk buckets in Creative mode gives you empty buckets
-   [MC-273361](https://bugs.mojang.com/browse/MC-273361) Entities teleported to the player from a force loaded chunk are not rendered
-   [MC-273377](https://bugs.mojang.com/browse/MC-273377) No debug stick in hand, but I can still edit blocks
-   [MC-273400](https://bugs.mojang.com/browse/MC-273400) Baby zombified piglin chicken jockeys immediately teleport
-   [MC-273427](https://bugs.mojang.com/browse/MC-273427) Respawn anchor loses charges when returning from the End
-   [MC-273464](https://bugs.mojang.com/browse/MC-273464) Incorrect partial tick during screen render
-   [MC-273489](https://bugs.mojang.com/browse/MC-273489) Sneaking players' name tags are barely visible
-   [MC-273578](https://bugs.mojang.com/browse/MC-273578) Interaction entities position passengers incorrectly
-   [MC-273601](https://bugs.mojang.com/browse/MC-273601) The channeling enchantment no longer functions on tridents without an owner
-   [MC-273629](https://bugs.mojang.com/browse/MC-273629) Adding effects with an effects\_changed advancement causes a packet error (ConcurrentModificationException) if it was triggered by Milk
-   [MC-273632](https://bugs.mojang.com/browse/MC-273632) Opening or updating the creative inventory while holding a food item with the using\_converts\_to tag causes the item to animate up and down
-   [MC-273662](https://bugs.mojang.com/browse/MC-273662) Trial spawners cannot spawn silverfish at all/have unusually long delays between spawns
-   [MC-273672](https://bugs.mojang.com/browse/MC-273672) When spectatorsGenerateChunks is set to false, the player cannot stop spectating an entity without running /spectate
-   [MC-273745](https://bugs.mojang.com/browse/MC-273745) Soul speed momentum resets when jumping on soul sand
-   [MC-273758](https://bugs.mojang.com/browse/MC-273758) Ominous item spawner's animation breaks if the level.dat "Time" value is over a certain number
-   [MC-273771](https://bugs.mojang.com/browse/MC-273771) Passengers can glitch into walls when their mounts are killed
-   [MC-273811](https://bugs.mojang.com/browse/MC-273811) Ender pearls don't teleport the player if he hasn't been in the pearl's dimension after relog
-   [MC-273812](https://bugs.mojang.com/browse/MC-273812) Intersection chests in trial chambers not generating correctly
-   [MC-273822](https://bugs.mojang.com/browse/MC-273822) The words "forwards" and "backwards" within two movement key bind strings aren't spelled in American English
-   [MC-273828](https://bugs.mojang.com/browse/MC-273828) Movement predicate is incorrect for stationary players until either mouse is moved or one second elapses
-   [MC-273848](https://bugs.mojang.com/browse/MC-273848) Players can spawn underwater again in 1.21
-   [MC-273850](https://bugs.mojang.com/browse/MC-273850) Shield enchantment glint is too bright to clearly see banner patterns
-   [MC-273914](https://bugs.mojang.com/browse/MC-273914) Client game options that do not constitute sending a network packet will send one anyway
-   [MC-273939](https://bugs.mojang.com/browse/MC-273939) Capes clip through the player when taking knockback
-   [MC-273960](https://bugs.mojang.com/browse/MC-273960) The NBT data stored in the world affects copying a Decorated Pot in creative mode
-   [MC-274030](https://bugs.mojang.com/browse/MC-274030) Item stacks with a count over 99 cause the player to get kicked from their world in creative mode
-   [MC-274244](https://bugs.mojang.com/browse/MC-274244) minecraft:villager\_plantable\_seeds tag does not allow farmer Villagers to pick up items
-   [MC-274371](https://bugs.mojang.com/browse/MC-274371) Depleting a Respawn Anchor doesn't play any sound
-   [MC-274372](https://bugs.mojang.com/browse/MC-274372) using\_item advancement trigger keeps being activated even after the item stops being used, after teleporting to another dimension
-   [MC-274400](https://bugs.mojang.com/browse/MC-274400) Dispensers firing a wind charge play the crafter crafting world event, showing incorrect particles beneath the block
-   [MC-274519](https://bugs.mojang.com/browse/MC-274519) Minecraft resaves all maps with every autosave
-   [MC-274657](https://bugs.mojang.com/browse/MC-274657) Ominous Banner's orange name is handled as a custom text color, rather than as a rarity
-   [MC-274708](https://bugs.mojang.com/browse/MC-274708) Exiting the end portal first time removes player attribute modifiers
-   [MC-274852](https://bugs.mojang.com/browse/MC-274852) "item\_name" component has priority over signed book title
-   [MC-274911](https://bugs.mojang.com/browse/MC-274911) If the raid begins more than 112 blocks above the ground, all illagers will be summoned and the player wins
-   [MC-274960](https://bugs.mojang.com/browse/MC-274960) Registries allow duplicate entries
-   [MC-275011](https://bugs.mojang.com/browse/MC-275011) Instant mine does not work when standing inside of cobwebs
-   [MC-275203](https://bugs.mojang.com/browse/MC-275203) Minecarts always spawn facing east/west and move upward slightly when being placed on rails
-   [MC-275204](https://bugs.mojang.com/browse/MC-275204) Coast Armor Trim has generic "Smithing Template" name
-   [MC-275205](https://bugs.mojang.com/browse/MC-275205) The hand animation is delayed and doesn't play all the time
-   [MC-275208](https://bugs.mojang.com/browse/MC-275208) You cannot move the bundle into or around the inventory using hotkeys
-   [MC-275209](https://bugs.mojang.com/browse/MC-275209) It's impossible to put water in a cauldron underwater
-   [MC-275210](https://bugs.mojang.com/browse/MC-275210) Minecarts can phase through blocks when travelling diagonally upwards
-   [MC-275211](https://bugs.mojang.com/browse/MC-275211) The enchantment glint isn't visible on dropped items
-   [MC-275213](https://bugs.mojang.com/browse/MC-275213) Hand animation still plays when trying to put lava or powder snow in an underwater cauldron
-   [MC-275216](https://bugs.mojang.com/browse/MC-275216) Bowl is consumed when feeding a rabbit stew to a wolf
-   [MC-275218](https://bugs.mojang.com/browse/MC-275218) "Minecart rolls" sound does not play when on tracks after de-railing then re-railing
-   [MC-275219](https://bugs.mojang.com/browse/MC-275219) Hand animation still plays in creative when trying to use minecarts inside each other on the same rail
-   [MC-275220](https://bugs.mojang.com/browse/MC-275220) Picking up a Salmon in a Bucket doesn't keep its size
-   [MC-275221](https://bugs.mojang.com/browse/MC-275221) Baby polar bear model is messed up in 24w33a
-   [MC-275222](https://bugs.mojang.com/browse/MC-275222) Salmons always have same hitbox regardless of their size
-   [MC-275224](https://bugs.mojang.com/browse/MC-275224) Minecart items desync when using them on a rail with a minecart above it
-   [MC-275226](https://bugs.mojang.com/browse/MC-275226) Enchantment glint is not visible on items held by player and mobs in third person
-   [MC-275228](https://bugs.mojang.com/browse/MC-275228) You can duplicate items in your creative hotbar
-   [MC-275229](https://bugs.mojang.com/browse/MC-275229) Minecarts behave strangely on bubble columns
-   [MC-275230](https://bugs.mojang.com/browse/MC-275230) The game crashes when opening the inventory while in spectator mode
-   [MC-275232](https://bugs.mojang.com/browse/MC-275232) The mining fatigue animation appears too close
-   [MC-275236](https://bugs.mojang.com/browse/MC-275236) Gamerule minecartMaxSpeed doesn't affect downward velocity
-   [MC-275237](https://bugs.mojang.com/browse/MC-275237) Cannot rename written book in an anvil
-   [MC-275239](https://bugs.mojang.com/browse/MC-275239) Item duplication while a screen is opened (Creative Mode)
-   [MC-275241](https://bugs.mojang.com/browse/MC-275241) Minecarts continue to produce sound for a short while after being stopped
-   [MC-275246](https://bugs.mojang.com/browse/MC-275246) Crash after attempting to move item from off-hand in Creative inventory
-   [MC-275248](https://bugs.mojang.com/browse/MC-275248) Torches no longer have bottom faces
-   [MC-275249](https://bugs.mojang.com/browse/MC-275249) "FOV Effects" slider incorrectly modifying zoom values on the spyglass
-   [MC-275252](https://bugs.mojang.com/browse/MC-275252) Player head angle when crawling is now strange
-   [MC-275256](https://bugs.mojang.com/browse/MC-275256) Snow golem shoots to the sky/floor instead of at mobs
-   [MC-275270](https://bugs.mojang.com/browse/MC-275270) Minecart not oriented correctly when placed on a sloped unpowered powered rail
-   [MC-275271](https://bugs.mojang.com/browse/MC-275271) Crash after attempting to move item to hotbar slot in Creative inventory
-   [MC-275273](https://bugs.mojang.com/browse/MC-275273) Baby mooshroom uses wrong scale
-   [MC-275275](https://bugs.mojang.com/browse/MC-275275) Footsteps on Monster Spawners create missing subtitle
-   [MC-275276](https://bugs.mojang.com/browse/MC-275276) Minecarts can phase through blocks at the bottom of a slant
-   [MC-275277](https://bugs.mojang.com/browse/MC-275277) Trial chambers' encounter\_4 trap often does not hit the player
-   [MC-275279](https://bugs.mojang.com/browse/MC-275279) Raiders do not spawn on small islands even though there are close enough places around the village
-   [MC-275289](https://bugs.mojang.com/browse/MC-275289) There are empty chests in some chambers even after 24w33a
-   [MC-275293](https://bugs.mojang.com/browse/MC-275293) Internal exception when picking blocks not in hotbar but in inventory
-   [MC-275296](https://bugs.mojang.com/browse/MC-275296) Emissive textures are not emissive in the player's hand
-   [MC-275297](https://bugs.mojang.com/browse/MC-275297) Failing selectors and fake players in "score" selector result in an unexpected error
-   [MC-275298](https://bugs.mojang.com/browse/MC-275298) Blocks with special collision behavior have a larger detection range than previously
-   [MC-275299](https://bugs.mojang.com/browse/MC-275299) Crafting using Ctrl + Drop key crafts the incorrect amount of items
-   [MC-275300](https://bugs.mojang.com/browse/MC-275300) Mace smash attack damage does not work with mobs, even though particles and sounds happen
-   [MC-275302](https://bugs.mojang.com/browse/MC-275302) The animation speed of end crystals is no longer constant
-   [MC-275307](https://bugs.mojang.com/browse/MC-275307) Hand doesn't show up when switching from Spectator mode
-   [MC-275310](https://bugs.mojang.com/browse/MC-275310) Cannot enchant armor in enchanting table
-   [MC-275319](https://bugs.mojang.com/browse/MC-275319) End crystals in 24w33a appear to be slightly smaller than in previous versions
-   [MC-275322](https://bugs.mojang.com/browse/MC-275322) "Subspace Bubble" is granted when exiting and entering some Nether Portals
-   [MC-275323](https://bugs.mojang.com/browse/MC-275323) Pressing F3 + A to reload chunks crashes the game
-   [MC-275328](https://bugs.mojang.com/browse/MC-275328) Enchantment glint is not visible on items in item frames
-   [MC-275329](https://bugs.mojang.com/browse/MC-275329) As of 24w33a zombie villagers no longer raise their arms to attack
-   [MC-275332](https://bugs.mojang.com/browse/MC-275332) The rotation of a wall/ceiling lever and button does not affect the update order of wire in Redstone Experiment
-   [MC-275343](https://bugs.mojang.com/browse/MC-275343) Projectiles stuck in the world border can float in the air if the border size is changed
-   [MC-275344](https://bugs.mojang.com/browse/MC-275344) Sweet Berry Bushes deal damage inconsistently
-   [MC-275345](https://bugs.mojang.com/browse/MC-275345) Inventory bug that causes items to be constantly shuffled
-   [MC-275347](https://bugs.mojang.com/browse/MC-275347) Minecart with Furnace does not travel correctly over curves
-   [MC-275352](https://bugs.mojang.com/browse/MC-275352) Spectral arrow texture is not updated properly for Programmer Art
-   [MC-275353](https://bugs.mojang.com/browse/MC-275353) Item Frame/Glow Item Frame "Fixed" tag behaving strangely since 24w33a
-   [MC-275358](https://bugs.mojang.com/browse/MC-275358) Renamed bundle's contents are not centered
-   [MC-275361](https://bugs.mojang.com/browse/MC-275361) Baby zombie variant arms disconnect from their body when attacking
-   [MC-275377](https://bugs.mojang.com/browse/MC-275377) Derailed minecarts snap onto nearby rails after falling down
-   [MC-275397](https://bugs.mojang.com/browse/MC-275397) Redstone dust doesn't update properly
-   [MC-275406](https://bugs.mojang.com/browse/MC-275406) Grammatical error in "options.rotateWithMinecart.tooltip"
-   [MC-275409](https://bugs.mojang.com/browse/MC-275409) Stuffing too many items into a bundle through commands will cause the capacity bar to overflow
-   [MC-275410](https://bugs.mojang.com/browse/MC-275410) Flying in Creative Mode no longer resists the thrust of the bubble column
-   [MC-275413](https://bugs.mojang.com/browse/MC-275413) Squids and glow squids are not affected by the thrust of the bubble column
-   [MC-275417](https://bugs.mojang.com/browse/MC-275417) Creepers can destroy vehicles even if mobGriefing is set to false
-   [MC-275418](https://bugs.mojang.com/browse/MC-275418) Feeding baby dolphins won't speed up their growth
-   [MC-275436](https://bugs.mojang.com/browse/MC-275436) Cannot enchant books in enchanting table
-   [MC-275437](https://bugs.mojang.com/browse/MC-275437) Fast moving entities freeze the server which causes watchdog crash
-   [MC-275445](https://bugs.mojang.com/browse/MC-275445) Specifying the size of a target in post effect shaders fails
-   [MC-275450](https://bugs.mojang.com/browse/MC-275450) Player Motion data no longer updates while riding another entity
-   [MC-275451](https://bugs.mojang.com/browse/MC-275451) Bundles do not use data for textures when the item in the bundle is rendered in the inventory
-   [MC-275455](https://bugs.mojang.com/browse/MC-275455) Player motion is no longer retained on relative teleportation
-   [MC-275462](https://bugs.mojang.com/browse/MC-275462) Bats can spawn in unusual places, such as in woodland mansions and beneath trees
-   [MC-275467](https://bugs.mojang.com/browse/MC-275467) Minecarts can launch you hundreds of thousands of blocks upwards if you derail inside cobwebs or powdered snow
-   [MC-275468](https://bugs.mojang.com/browse/MC-275468) Gamerule minecartMaxSpeed can't be set through functions
-   [MC-275473](https://bugs.mojang.com/browse/MC-275473) Slim model's arms are now lower than the torso by 0.5 pixels
-   [MC-275479](https://bugs.mojang.com/browse/MC-275479) Dispensers cannot place minecarts onto rails if there is a minecart one block away
-   [MC-275482](https://bugs.mojang.com/browse/MC-275482) Minecarts do not pick up mobs like they used to
-   [MC-275486](https://bugs.mojang.com/browse/MC-275486) Enchantable data component doesn't work with items that only have enchantments through a data pack
-   [MC-275497](https://bugs.mojang.com/browse/MC-275497) The repairable data component does not exist in armor items by default
-   [MC-275498](https://bugs.mojang.com/browse/MC-275498) Clocks, compasses and recovery compasses don't function in item frames
-   [MC-275504](https://bugs.mojang.com/browse/MC-275504) Custom model data is not applied to open bundle
-   [MC-275505](https://bugs.mojang.com/browse/MC-275505) The /tp command forces a mounted entity to dismount
-   [MC-275521](https://bugs.mojang.com/browse/MC-275521) Tall seagrass can now generate when bone mealing one-high water
-   [MC-275523](https://bugs.mojang.com/browse/MC-275523) Reduced shield glint applies to the shield's item appearance
-   [MC-275537](https://bugs.mojang.com/browse/MC-275537) Sliding down honey blocks is slower than in previous versions
-   [MC-275538](https://bugs.mojang.com/browse/MC-275538) Breeze still do not attack when super close to them
-   [MC-275544](https://bugs.mojang.com/browse/MC-275544) Drowned do not summon reinforcements anymore
-   [MC-275553](https://bugs.mojang.com/browse/MC-275553) Minecarts which exit the end onto no rails are left permamentally tilted
-   [MC-275554](https://bugs.mojang.com/browse/MC-275554) Minecarts between two downward slopes will shake violently and never settle
-   [MC-275566](https://bugs.mojang.com/browse/MC-275566) Game crash when trying to open various GUIs with Fabulous graphics
-   [MC-275569](https://bugs.mojang.com/browse/MC-275569) Outer layer of the skin shows when disabled until you go into third person
-   [MC-275586](https://bugs.mojang.com/browse/MC-275586) Renamed items highlighted in the bundle are not in italics
-   [MC-275612](https://bugs.mojang.com/browse/MC-275612) Items with rarity values highlighted in bundles do not display their rarity colors
-   [MC-275622](https://bugs.mojang.com/browse/MC-275622) Minecarts with TNT are more volatile than in previous releases
-   [MC-275624](https://bugs.mojang.com/browse/MC-275624) Redstone wire with custom model unexpectedly appears green
-   [MC-275628](https://bugs.mojang.com/browse/MC-275628) Minecarts transitioning from even to downward rails, derail above a certain speed
-   [MC-275631](https://bugs.mojang.com/browse/MC-275631) You cannot stop a minecart by standing in the way if it's on an ascending track
-   [MC-275638](https://bugs.mojang.com/browse/MC-275638) It is still possible to go through portals without being teleported when going quickly enough by throwing riptide tridents
-   [MC-275642](https://bugs.mojang.com/browse/MC-275642) Baby dolphins do not spawn naturally
-   [MC-275655](https://bugs.mojang.com/browse/MC-275655) Entity rotation does not visually update when using the teleport command until the world is reloaded
-   [MC-275677](https://bugs.mojang.com/browse/MC-275677) Minecarts sometimes aren't affected by cobwebs when moving upwards
-   [MC-275706](https://bugs.mojang.com/browse/MC-275706) Vanilla clients can't display items with components in recipe book anymore
-   [MC-275745](https://bugs.mojang.com/browse/MC-275745) A scoreboard objective with display mode below\_name renders right behind the player's name
-   [MC-275792](https://bugs.mojang.com/browse/MC-275792) Bottom faces of torches and soul torches are not culled against solid blocks
-   [MC-275834](https://bugs.mojang.com/browse/MC-275834) Jumping when falling onto a slime block no longer cancels the bounce effect
-   [MC-275838](https://bugs.mojang.com/browse/MC-275838) Drowned holds trident upside down
-   [MC-275919](https://bugs.mojang.com/browse/MC-275919) issues with hit detection/registration in PvP since server switch to 1.21
-   [MC-275998](https://bugs.mojang.com/browse/MC-275998) Menu blur turns glowing outlines black
-   [MC-276005](https://bugs.mojang.com/browse/MC-276005) The text of sneaking players' name tags is rendered completely invisible or barely visible when the "Text Background Opacity" accessibility option is set to high values
-   [MC-276007](https://bugs.mojang.com/browse/MC-276007) Players' name tags that are behind blocks or entities are rendered invisible or partly invisible depending on the angle you're facing
-   [MC-276134](https://bugs.mojang.com/browse/MC-276134) Can't scroll in creative inventory while hovered over the bundle
-   [MC-276305](https://bugs.mojang.com/browse/MC-276305) Bundles no longer available without enabling feature flag
-   [MC-276341](https://bugs.mojang.com/browse/MC-276341) The time how long you remain on fire no longer increases while being in the fire
-   [MC-276391](https://bugs.mojang.com/browse/MC-276391) The item durability and bundle fullness bars render incorrectly when held over recipe book elements
-   [MC-276433](https://bugs.mojang.com/browse/MC-276433) set\_enchantments function removes enchantments component from books
-   [MC-276459](https://bugs.mojang.com/browse/MC-276459) Item display rotation wrapping does not interpolate cleanly
-   [MC-276807](https://bugs.mojang.com/browse/MC-276807) All blocks and entities flicker at night or at lower light levels than 15
-   [MC-276852](https://bugs.mojang.com/browse/MC-276852) Shulker boxes can be colored in the same color they are made of
-   [MC-276936](https://bugs.mojang.com/browse/MC-276936) Foxes eat soup won't leave the bowl
-   [MC-277688](https://bugs.mojang.com/browse/MC-277688) Force disconnect when quickly editing then breaking sign

---

