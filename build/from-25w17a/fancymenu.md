# Minecraft Snapshot 25w17a

After a long weekend we are back with another snapshot! This week we are moving the locator bar out of experiments, try it out and continue to give us your feedback over at [feedback.minecraft.net](http://feedback.minecraft.net/). We have also made some improvements to the Realms UI including region selection for your world. Happy Mining!

## New Features

-   Added an option to reduce the cloud range
-   Added the Locator Bar, a new HUD element that shows the direction of other Players in multiplayer

### Locator Bar

The Locator Bar is a new default UI element that displays the direction of other players in the world.

If there are no other players in the world the experience bar will display as normal, otherwise if another player is in the world (and that player is not hiding) then the experience bar will appear when experience is gained, otherwise the Locator Bar will display in the same area.

-   Multiplayer servers can toggle the Locator Bar with the `locatorBar` gamerule
-   Players can hide by crouching, wearing a mob head or a Carved Pumpkin, or using a Potion of Invisibility
-   Players in Spectator Mode are not visible on the Locator Bar
    -   However, Spectating player are visible to each other
-   Facing other players within a 120 degrees range will display those players as colored indicators on the Locator Bar
    -   Other players that are above/below the screen will also display an up/down arrow with their indicator
    -   The indicator will change to different sized icons depending on how far away the other Player is
    -   Colored indicators are randomized for each player
        -   Servers can modify the colors of indicators with the `/waypoint` command
            -   eg: `/waypoint modify @s color red` to set an indicator to red
        -   Players on a team will override their default indicator color with their team color

**Player Changes**

-   Crouching will hide the player, preventing them from appearing on the Locator Bar of other players
-   Spectators are only visible to other spectators on the Locator Bar

**Item Changes**

-   The following items will hide players when worn in the head slot:
    -   Carved Pumpkin
    -   Skeleton Skull
    -   Wither Skeleton Skull
    -   Player Head
    -   Zombie Head
    -   Creeper Head
    -   Dragon Head
    -   Piglin Head

**Potion Changes**

-   Using a Potion of Invisibility will also hide players from the Locator Bar

## Changes

-   Improvements to the Realms configuration screen
-   Introduced a Region Preference setting that allows for more granular control over what region a Realm is started

### Realms

-   Changed the layout of the Realms configuration screen to use tabs
    -   A Worlds tab containing changes to any of the world slots, creating new worlds and changing their settings
    -   A Players tab to manage the players that have access and their level of access to the Realm
    -   A Subscription tab to manage the Realms subscription
    -   A Settings tab to change the settings of the Realm
-   Introduced a Region Preference setting that allows for more granular control over what region a Realm is started
-   Changed wording for `Close`/`Open` Realm to `Temporarily close`/`Reopen` Realm

## Technical Changes

-   The Data Pack version is now 74
-   The Resource Pack version is now 58
-   Added a Server-authoritative Waypoint broadcasting system for controlling the Locator Bar behavior for Players

## Data Pack Version 74

### Commands

**Added `waypoint`**

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
    -   `set <waypoint_style/resource>` changes the style to a specific asset under `waypoint_style/`
    -   `reset` will restore the default icon behavior of the Locator Bar

**Waypoint Styles**

These define custom icons to be displayed on the Locator Bar and are within the `waypoint_style/` asset directory.

The default implementation is as such:

    {
      "near_distance": 128,
      "far_distance": 332,
      "sprites": [
        "minecraft:default_0",
        "minecraft:default_1",
        "minecraft:default_2",
        "minecraft:default_3"
      ]
    }
    

-   `near_distance` and `far_distance` are optional and default to the values `128` and `332` respectively.
    -   `far_distance` distance must be greater than `near_distance`
-   Each sprite is searched within the prefix of `hud/locator_bar_dot/` (the directory `textures/gui/sprites/hud/locator_bar_dot`).

### Game Rules

**Added `locatorBar`**

-   Default is `true`: enabling the Locator Bar
-   Changing to `false` will remove all existing Waypoints from all players
-   The Game Rule has been renamed from `useLocatorBar` during the experiment. This may break minor command related features in worlds created in the previous snapshot.

**Added `waypoint_transmit_range` and `waypoint_receive_range`**

-   Default: `0.0`, Minimum: `0.0`, Maximum: `60000000.0`
-   Players have a default transmission and receive range of 60,000,000
-   Mobs with a transmission range above zero will send waypoint packets to nearby receivers that are within that range
-   Similarly, receivers only receive waypoints that are inside their receive range (and receive nothing if that range is zero)

Examples:

-   `/attribute @s minecraft:waypoint_transmit_range base set 0` will prevent a player from transmitting (hiding them)
-   `/attribute @s minecraft:waypoint_transmit_range base set 80` will only let a player transmit up to 80 blocks (hiding them from players further than that)
-   `/attribute @s minecraft:waypoint_receive_range base set 0` will prevent a player from receiving (turns off their Locator Bar)
-   `/attribute @s minecraft:waypoint_receive_range base set 120` will only let a player see Locator Bar dots that are within 120 blocks (hiding all players further than that)

### Waypoint Broadcasting

The Locator Bar works by a server-controlled Waypoint system. Waypoints are received by Players, and connections between Waypoints and Players are managed by the multiplayer server.

-   By default, all Players transmit a Waypoint from themselves, and all Players receive all Waypoints
-   Individual Players can have their transmission and receive ranges controlled by the `waypoint_transmit_range` and `waypoint_receive_range` attributes

### Tags

**Block Tags**

-   Added `happy_ghast_avoids` - blocks that happy ghasts avoid getting close to
-   Added `triggers_ambient_dried_ghast_block_sounds` - blocks that can trigger ambient Dried Ghast sounds to play when a Dried Ghast block is placed on them

## Resource Pack Version 58

### Shaders & Post-process Effects

**`Fog` Uniform Block**

-   `FOG_IS_SKY` has been removed in favour of splitting up the sky shader

## Fixed bugs in 25w17a

-   [MC-240121](https://bugs.mojang.com/browse/MC-240121) "1x1;;_;;b5.nbt" piece does not generate in woodland mansions
-   [MC-296369](https://bugs.mojang.com/browse/MC-296369) Dispensers cannot equip harnesses onto happy ghasts
-   [MC-296421](https://bugs.mojang.com/browse/MC-296421) Right-clicking a happy ghast equipped with a harness while crouching will play hand animation
-   [MC-296438](https://bugs.mojang.com/browse/MC-296438) The "display" field on Attribute Modifiers is not optional, despite the changelog saying it is
-   [MC-296443](https://bugs.mojang.com/browse/MC-296443) Happy ghasts don’t avoid pathfinding into dangerous blocks
-   [MC-296511](https://bugs.mojang.com/browse/MC-296511) Gamemode Switcher icons become invisible when using resource pack with opaque or translucent selection.png
-   [MC-296516](https://bugs.mojang.com/browse/MC-296516) Tooltips are incorrectly rendered below nearby elements when holding your mouse cursor over players that are online on realms
-   [MC-296538](https://bugs.mojang.com/browse/MC-296538) Rarity of Dried Ghast is inconsistent with its crafting ingredients
-   [MC-296542](https://bugs.mojang.com/browse/MC-296542) Waypoints on locator bar do not adjust to 3rd person front camera
-   [MC-296567](https://bugs.mojang.com/browse/MC-296567) Waypoints on locator bar do not respect team colors
-   [MC-296583](https://bugs.mojang.com/browse/MC-296583) Applying the waypoint;;_;;transmit;;_;;range attribute to an entity at the same time it is summoned makes it not show on the locator bar
-   [MC-296750](https://bugs.mojang.com/browse/MC-296750) The game crashes after startup on some systems (predominantly Linux systems) with AMD graphics
-   [MC-296755](https://bugs.mojang.com/browse/MC-296755) Resource Packs: The panorama overlay now renders in front of everything in the title screen
-   [MC-296756](https://bugs.mojang.com/browse/MC-296756) Clouds do not render at render distance 2 & 3
-   [MC-296764](https://bugs.mojang.com/browse/MC-296764) The text cursor renders behind command auto-complete text
-   [MC-296766](https://bugs.mojang.com/browse/MC-296766) GUIs of rideable mobs are missing their slots as of 25w16a
-   [MC-296770](https://bugs.mojang.com/browse/MC-296770) Strikethrough text in the villager interface is rendered behind characters
-   [MC-296774](https://bugs.mojang.com/browse/MC-296774) Player messages within the "Select Chat Messages to Report" menu aren’t rendered while selected
-   [MC-296775](https://bugs.mojang.com/browse/MC-296775) Some elements within the "Select Chat Messages to Report" menu are rendered darker while player messages are selected
-   [MC-296777](https://bugs.mojang.com/browse/MC-296777) Lead shift right-clicking doesn't work on Boats with Chests
-   [MC-296779](https://bugs.mojang.com/browse/MC-296779) The social interactions menu is rendered darker than normal
-   [MC-296782](https://bugs.mojang.com/browse/MC-296782) Player models within the “Report Player Skin” menu are rendered darker and lower than normal
-   [MC-296794](https://bugs.mojang.com/browse/MC-296794) Furnaces, blast furnaces, and smokers sometimes do not show the burn progress and lit progress animations
-   [MC-296805](https://bugs.mojang.com/browse/MC-296805) The game crashes when holding your mouse cursor over players that are online on realms
-   [MC-296806](https://bugs.mojang.com/browse/MC-296806) Cloud rendering has a considerable impact on performance as of 25w16a
-   [MC-296807](https://bugs.mojang.com/browse/MC-296807) The titles of selected tabs within the "Create New World" menu are rendered behind the background
-   [MC-296808](https://bugs.mojang.com/browse/MC-296808) The titles of lists within the resource pack and data pack menus are rendered behind the background
-   [MC-296984](https://bugs.mojang.com/browse/MC-296984) The "No pending invites!" text within the realms invitation menu is rendered behind the background

---

# Minecraft Snapshot 25w16a

In this week’s snapshot leads are getting new mechanics making it possible to leash mobs together or leash them to entities like boats! Now you can travel the desert with your own camel caravan or airlift your treasures in a boat with chest attached to your happy ghast. Moving villagers have never been easier! As you are soaring through the skies you will see that the clouds render infinitely.

## Changes

-   Changed leash mechanics
-   Changed Elytra so that while gliding, using a firework will only be used as a boost even if placed on a block
-   Clouds now exist all the way to the horizon
-   Reverted the fix for [MC-101556](https://bugs.mojang.com/browse/MC-101556): Nether Portal teleport range is too large (equivalent to a full block)

> **Developer's Note**: _After consideration, we have decided to revert this change as it came in quite late in the snapshot cycle and unintentionally broke some functionality that our community were relying on. We'd like to revisit this at some point when we have time to deal with the issues that showed up due to this change_

### Leash changes

-   Leashes are now rendered twice as thick, to match bedrock
-   Leashes can now be used to leash two mobs together
    -   Sneak-interact on any mob while holding a bunch of leashed mobs will leash these mobs to the interacted entity
    -   You now cannot leash anything to itself
-   If the re-leashing an entity would result in immediate leash snapping due to distance, the re-leashing would not happen
-   Leashes can be snipped from an entity when interacting them with Shears
    -   This applies to its own leash connection as well as all entities attached to it
    -   Dispensers can now snip leashes from entities in front of them when they are equipped with Shears
-   Improved leash mechanics, with reworked leash physics, allowing for more stable leash connection, especially when leashed entities are not on ground
    -   When dragged on the leash, leashed objects will now orient themselves towards the leasher
    -   Using a firework rocket when flying with leashed entities will now break the leash connections
-   When leashing an already leashed mob, the current leash will now snap and a player will re-leash the object to yourself
    -   You cannot steal leashed entities from other players
-   Interactions with a Leash Knot and Fence Blocks have changed:
    -   When interacting with a Leash Knot or a Fence Block, if there are any player-leashed entities in range of the leash knot, they will be re-leashed to the Leash Knot or a Fence Block
    -   In case of attaching of mobs fails due to distance or there is nothing to attach, the player will now transfer all fence leashed entities to itself
    -   If there is nothing left attached to the Leash Knot, it disappears
    -   Sneak-interact can only result in attaching of the player mobs to the fence
    -   Interacting with Shears or punching the Leash Knot will result in all current connections broken
-   Boats and large mobs that can be leashed, but cannot fit in the boat (Horses, Donkey, Mule, Camel and Sniffer) can now be leashed in a special 4-leash configuration to the Happy Ghast
    -   Happy Ghast will also present a custom layer when its leashing something using a quad connection
    -   Leashed in quad connection are now rendered without slack
-   Leash snapping distance has been changed from 10 to 12 blocks
    -   The distance between centers of entities bounding boxes, rather than their feet is used to determine the distance between two leashed entities
    -   Happy Ghast leash is now longer - with free roaming distance of 10 blocks and leash snapping at 16 blocks

## Technical Changes

-   The Data Pack version is now 73
-   The Resource Pack version is now 57

## Data Pack Version 73

### Data Components

**`painting/variant` Item Component**

-   No longer accepts inline variants

## Resource Pack Version 57

-   All core shader uniforms are now uniform blocks
-   The cloud texture (`clouds.png`) can no longer be colored
-   Block Model rotations are no longer limited to multiplies of `22.5`

### Block Models

-   `elements[].rotation.angle` value in block models is no longer limited to multiplies of `22.5` degrees and can now be any angle from `-45` to `+45`

### Shaders & Post-process Effects

> **Developer's Note**: _Although it is possible in Resource Packs, overriding Core Shaders is considered as unsupported and not an intended Resource Pack feature. These shaders exist as part of the internal implementation of the game, and as such, may change at any time as the game's internals evolve. We understand that overriding Core Shaders is used for very cool Resource Pack features, many of which lack supported alternatives. We would like to provide better, supported alternatives in the future._

-   All built-in uniforms are now uniform blocks instead of opaque loose uniforms
-   Custom uniforms provided to post-process shaders are now uniform blocks
-   Uniform definitions inside json files are now per-block

**Post-process Effect Definitions**

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
    -   We encourage setting it to help keep the json file organised/readable, but the game won't use it
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

**Post-process Effect Shaders**

-   Instead of every uniform being an individual opaque type, they are now grouped in uniform blocks
    -   They will be set according to the pass definition in the json file, and may be shared across both vertex and fragment shaders
-   The list of sizes (all `vec2 *Size` uniforms) are now replaced with a single `SamplerInfo` uniform block
    -   This contains, _in order_, the size of the output texture followed by the size every input texture
    -   The order of textures in the definition file will dictate the order of samplers in this uniform
    -   For most post chains this is just `OutSize` and `InSize` as before
    -   All sizes are `vec2`

**`post/bits.fsh`**

-   Expects a `BitsConfig` of `float Resolution` and `float MosaicSize`

**`post/blit.fsh`**

-   Expects a `BlitConfig` of `vec4 ColorModulate`

**`post/blur.vsh` and `post/box_blur.fsh`**

-   Expects a `BlurConfig` of `vec2 BlurDir` and `float Radius`

**`post/color_convolve.fsh`**

-   Expects a `ColorConfig` of `vec3 RedMatrix`, `vec3 GreenMatrix` and `vec3 BlueMatrix`

**`post/invert.fsh`**

-   Expects a `InvertConfig` of `float InverseAmount`

**`post/rotscale.vsh`**

-   Expects a `RotScaleConfig` of `vec2 InScale`, `vec2 InOffset` and `float InRotation`

**`post/spiderclip.fsh`**

-   Expects a `SpiderConfig` of `vec4 Scissor` and `vec4 Vignette`

**`Globals` Uniform Block**

-   Available through `#moj_import <minecraft:globals.glsl>` for convenience
-   Most shaders are able to receive this uniform block, even if they don't normally use it
-   Contains `ScreenSize`, `GlintAlpha`, `GameTime` and `MenuBlurRadius` (new)
    -   `MenuBlurRadius` is the blur radius of the background when a menu is open

**`Fog` Uniform Block**

-   Available through `#moj_import <minecraft:fog.glsl>` for convenience
-   Most shaders are able to receive this uniform block, even if they don't normally use it
-   Contains `FogColor`, `FogShape`, `FogStart`, `FogEnd`, `FogSkyEnd` (new) and `FogCloudsEnd` (new)
    -   `FogSkyEnd` is new and represents where the fog should end when drawing for the sky
    -   `FogCloudsEnd` is new and represents where the fog should end when drawing the clouds
    -   `FogEnd` is the "normal" fog cutoff as before
-   `FOG_IS_SKY` is now available to the `position.vsh`/`position.fsh` shaders when they are rendering for the sky

**`Projection` Uniform Block**

-   Available through `#moj_import <minecraft:projection.glsl>` for convenience
-   Most shaders are able to receive this uniform block, even if they don't normally use it
-   Contains `ProjMat` with no changes

**`DynamicTransforms` Uniform Block**

-   Available through `#moj_import <minecraft:dynamictransforms.glsl>` for convenience
-   Is no longer available to shaders that do not normally use it
-   Contains `ModelViewMat`, `ColorModulator`, `ModelOffset`, `TextureMat`, `LineWidth`
    -   These are very likely to change in the near future
    -   The values of some of these are often hard coded and may not make sense for a given shader, ie `LineWidth` in any non-line based pipeline

**`Lighting` Uniform Block**

-   Available through `#moj_import <minecraft:light.glsl>` for convenience
-   Most shaders are able to receive this uniform block, even if they don't normally use it
    -   The values may not make sense if the shader wouldn't normally expect it, however
-   Contains `Light0_Direction` and `Light1_Direction`

**`CloudInfo` Uniform Block**

-   Only available to the clouds shaders (`rendertype_clouds.vsh`/`rendertype_clouds.fsh`)
    -   Contains `CloudColor`, `CloudOffset` and `CellSize` (new)
        -   `CellSize` contains the size of an individual cloud cell

**`LightmapInfo` Uniform Block**

-   Only available to the lightmap shader (`lightmap.fsh`)
-   Contains `AmbientLightFactor`, `SkyFactor`, `BlockFactor`, `UseBrightLightmap`, `NightVisionFactor`, `DarknessScale`, `DarkenWorldFactor`, `BrightnessFactor`, `SkyLightColor` with no change in behavior

## Fixed bugs in 25w16a

-   [MC-104231](https://bugs.mojang.com/browse/MC-104231) Loading a custom structure doesn't load rails correctly
-   [MC-277369](https://bugs.mojang.com/browse/MC-277369) The draft report icon isn't initially visible when saving a report as a draft
-   [MC-277370](https://bugs.mojang.com/browse/MC-277370) The draft report icon doesn't initially disappear when a report is discarded
-   [MC-279515](https://bugs.mojang.com/browse/MC-279515) The game stalls when running the "/test clearall" command with large radiuses
-   [MC-280297](https://bugs.mojang.com/browse/MC-280297) The volume level between grass and dirt is inconsistent
-   [MC-293754](https://bugs.mojang.com/browse/MC-293754) Minecraft causes OpenGL errors occasionally
-   [MC-295395](https://bugs.mojang.com/browse/MC-295395) Entities interact differently with nether portals
-   [MC-295677](https://bugs.mojang.com/browse/MC-295677) Title screen fades in from black after closing the "Welcome to Minecraft" screen
-   [MC-295895](https://bugs.mojang.com/browse/MC-295895) 1.21.5 breaks minecart behavior when travelling through nether portals
-   [MC-295944](https://bugs.mojang.com/browse/MC-295944) Reloading a professionless zombie villager causes it to gain random profession clothing
-   [MC-296099](https://bugs.mojang.com/browse/MC-296099) Nether portal collision is or isn't working depending on the cardinal direction
-   [MC-296121](https://bugs.mojang.com/browse/MC-296121) ClientboundLevelChunkPacketData buffer size is too big
-   [MC-296348](https://bugs.mojang.com/browse/MC-296348) NoAI:1b mobs cannot be ridden in 1.21.5+
-   [MC-296353](https://bugs.mojang.com/browse/MC-296353) Potions, tipped arrows, and dyed leather armor render with missing or incorrect colors in the inventory
-   [MC-296355](https://bugs.mojang.com/browse/MC-296355) Characters in front of the cursor render one pixel too far to the left
-   [MC-296356](https://bugs.mojang.com/browse/MC-296356) Hitbox rendering in GUIs is broken
-   [MC-296357](https://bugs.mojang.com/browse/MC-296357) Happy ghasts produce footstep sounds when flying close above blocks
-   [MC-296358](https://bugs.mojang.com/browse/MC-296358) A player in Spectator mode on top of a happy ghast makes it stop moving
-   [MC-296363](https://bugs.mojang.com/browse/MC-296363) Scrolling in the experiments screen does not move the positions where the buttons can be selected
-   [MC-296365](https://bugs.mojang.com/browse/MC-296365) Block placing sounds are played when the block states of completely unhydrated dried ghasts are changed
-   [MC-296366](https://bugs.mojang.com/browse/MC-296366) Kicked for flying while flying happy ghast
-   [MC-296367](https://bugs.mojang.com/browse/MC-296367) The enchantment glint in the inventory appears on all items of the same type
-   [MC-296373](https://bugs.mojang.com/browse/MC-296373) The side faces of dried ghast tentacles aren’t culled when covered by blocks
-   [MC-296376](https://bugs.mojang.com/browse/MC-296376) Sounds produced by ghastlings can be heard from too far away
-   [MC-296381](https://bugs.mojang.com/browse/MC-296381) Dried Ghasts always face north in world generation
-   [MC-296382](https://bugs.mojang.com/browse/MC-296382) Filled maps are blurry
-   [MC-296401](https://bugs.mojang.com/browse/MC-296401) Harnesses are not sorted correctly in the Creative Inventory
-   [MC-296419](https://bugs.mojang.com/browse/MC-296419) Spectators' names in multiplayer tab list render improperly compared to 1.21.5
-   [MC-296426](https://bugs.mojang.com/browse/MC-296426) Text background lacks opacity over hotbar icons
-   [MC-296427](https://bugs.mojang.com/browse/MC-296427) Happy ghasts move/spin erratically when leashed to a fence
-   [MC-296434](https://bugs.mojang.com/browse/MC-296434) Unable to see items when hovering over them inside of a bundle
-   [MC-296437](https://bugs.mojang.com/browse/MC-296437) Items render behind effect icons and recipe book inside of the inventory
-   [MC-296444](https://bugs.mojang.com/browse/MC-296444) Blur is applied to resource pack icons
-   [MC-296465](https://bugs.mojang.com/browse/MC-296465) Highlighting text on a sign causes it to override the sign background
-   [MC-296467](https://bugs.mojang.com/browse/MC-296467) Item tooltips cause items behind it to not render
-   [MC-296470](https://bugs.mojang.com/browse/MC-296470) Items render behind text in anvils
-   [MC-296471](https://bugs.mojang.com/browse/MC-296471) Hud is now hidden while in bed resulting in delayed hud rendering
-   [MC-296517](https://bugs.mojang.com/browse/MC-296517) The menu panorama turns gray when the switching realm worlds interface is open
-   [MC-296518](https://bugs.mojang.com/browse/MC-296518) Text inside the middle of the java realms information box completely disappears when selected
-   [MC-296524](https://bugs.mojang.com/browse/MC-296524) Server and singleplayer world icons are blurry
-   [MC-296638](https://bugs.mojang.com/browse/MC-296638) Clocks, compasses, and lodestone compasses do not render enchantment glint in certain display contexts when using Fabulous! graphics

---

# Minecraft Snapshot 25w15a

Snapshot on a Tuesday? Yes! From now on we will be moving snapshots to the same weekday as full releases, Tuesdays.

This week we are releasing the first snapshot of the second game drop of 2025, including the happy ghast, ghastling, dried ghast and ghast harness. Experience soaring new gameplay thanks to the happy ghast, and discover how to raise one of your own – from retrieving a dried ghast block from the Nether to submerging it in water in the Overworld to spawn a ghastling. We are also adding the locator bar to Java this week, you can finally easily find your friends when you are out adventuring.

Take your first test flight with the happy ghast, craft your own dried ghast – and send us your [feedback](https://feedback.minecraft.net/hc/en-us/community/topics/35301401438605-Upcoming-Game-Drop-Features?sort_by=votes)!

## New Features

-   Added Dried Ghast block
-   Added Happy Ghast mob
-   Added Harness items
-   Added new advancements

### Dried Ghast block

-   Can be found in the Nether in Nether Fossil structures
-   Is crafted with 1 Bone Block and 8 Ghast Tears
-   When waterlogged it undergoes 3 state changes over about 20 minutes until it spawns a Ghastling mob
-   Makes sounds and shows particles depending on the state
-   If mined during the waterlogging, it will revert to its “dry” state regardless of what state it has reached during waterlogging
-   Will revert states back to its initial “dry” state when it is taken away from being waterlogged, using the same time scale

### Happy Ghast mob

**Ghastling**

-   Ghastling is a young version of the Happy Ghast mob
-   Spawns from a Dried Ghast block that has continuously been waterlogged for about 20 minutes
-   After spawning, the Ghastling will try and follow:
    -   Players within a 16-block radius or
    -   An adult, non-aquatic passive mob (and some neutral mobs) within a 16-block radius
-   If no player or suitable mob is close around the Ghastling will idle around within 32 blocks from its home position (where it spawned or last was interacted with)
    -   It will reset its home position if it is moved more than 16 blocks away from the border of its home area
-   Can be tempted and fed using Snowballs
-   Will grow up into a Happy Ghast after about 20 minutes (or faster if fed Snowballs)

**Happy Ghast**

-   The adult Happy Ghast is a new flying mount that can carry up to four players
-   Grows up from a Ghastling after about 20 minutes (or faster if the Ghastling is fed Snowballs)
-   Can be equipped with a Harness and then be mounted by up to 4 players
-   Tempted by Snowballs and Harness
    -   Harness tempting only works if the Happy Ghast is unharnessed
-   Has no panic behavior when taking damage
-   Cannot be bred
-   Slowly regenerates health, with regeneration speeding up during rain, snow or when flying at the same height as clouds are rendered
-   The first player that mounts the Happy Ghast will control it, sitting in front of the Happy Ghast, just above its face
    -   Pressing the forward key will make the Happy Ghast fly in the direction the player is looking
    -   Pressing the back key will make the Happy Ghast fly in the opposite direction the player is looking
    -   Pressing the left and right keys will strafe the Happy Ghast in the respective direction
    -   Pressing the jump key will make the Happy Ghast fly directly up
    -   Pressing the sneak key will make the player dismount the Happy Ghast
-   When a player mounts, the goggles on the Happy Ghast go down to cover its eyes, indicating that it now can be controlled
-   Players mounted after the first player piloting the Happy Ghast are placed in slots on each side of it, starting clockwise from the first player
-   Pressing crouch button dismounts the player on top of the Happy Ghast
-   If the Happy Ghast detects players on top of it, it then ceases all movement and aligns to the closest cardinal horizontal direction
-   This happens regardless of it having a Harness equipped or not
-   3rd person camera is moved back when player is mounted on the Happy Ghast
-   When there are no players mounted or walking on the Happy Ghast, the goggles go up and the Happy Ghast starts to roam around the home position
-   If players dismount midair, the Happy Ghast will descend towards the ground before it resumes roaming
-   Cannot enter boats
-   Idles around within 64 blocks from its home position in the similar way as the Ghastling
    -   If wearing a Harness, the Happy Ghast idles closer to the home position (within 32 blocks)
-   The Happy Ghast will try to stay close to blocks when roaming on its own

### Ghast

-   Updated Ghast texture

### Harness items

-   Harness is a new item that can be equipped on a Happy Ghast to allow players to ride it
-   It is 16 new items, one for each color
-   Crafted out of 3 Leather, 2 Glass blocks and 1 Wool block, the Harness will have the same color as the Wool block used when crafting
-   Can be re-dyed
-   Can only be equipped on a Happy Ghast
-   Allows up to 4 players to mount the Happy Ghast
-   Can be removed from the Happy Ghast using Shears but only when no players are mounted

### Advancements

-   Added new "Stay Hydrated!" Husbandry Advancemet when a Dried Ghast Block is placed into Water
-   Added "Heart Transplanter" Adventure Advancement that is unlocked when a player places a Creaking Heart with the correct alignment between two Pale Oak Log blocks

## Experimental Features

-   This snapshot introduces a new experimental Feature Toggle that adds a locator bar to find your friends easily. You must turn on this Feature Toggle in the Experiments Menu when creating a new world if you want to test the locator bar. You can find more information about Feature Toggles [here](https://www.minecraft.net/article/testing-new-minecraft-features/feature-toggles-java-edition).

### Locator Bar

The Locator Bar is an experimental new UI element for players that displays the direction of Waypoints.

-   This experiment allows servers to manage Waypoints and their connections with Players
-   By default, all Players transmit a Waypoint from themselves, and all Players receive all Waypoints; allowing players to locate other players in multiplayer
-   The Locator Bar will display colored indicators when the camera is facing within 120 degrees towards a Waypoint. If a Waypoint is above/below the camera's viewport (the screen) an up/down arrow will display
-   Any Waypoint that is determined to be a Player or Mob that belongs to a Team then the color indicator will match the Team color

**Player Changes**

-   Crouching will hide the player, preventing them from appearing on the Locator Bar of other players
-   Spectators are only visible to other spectators on the Locator Bar

**Item Changes**

-   The following items will hide players when worn in the head slot:
    -   Carved Pumpkin
    -   Skeleton Skull
    -   Wither Skeleton Skull
    -   Player Head
    -   Zombie Head
    -   Creeper Head
    -   Dragon Head
    -   Piglin Head

**Potion Changes**

-   Using a Potion of Invisibility will also hide players from the Locator Bar

**Game Rules**

**Added `useLocatorBar`**

-   Default is enabled for servers running the Locator Bar experiment
-   Toggling to off will remove all existing Waypoints from all players

**Attributes**

**Added `waypoint_transmit_range` and `waypoint_receive_range`**

-   Default: `0.0`, Minimum: `0.0`, Maximum: `60000000.0`
-   Players have a default transmission and receive range of 60,000,000
-   Mobs with a transmission range above zero will send waypoint packets to nearby receivers
-   Similarly, receivers only receive with a range above zero, and cannot receive waypoints outside of this range

**`waypoint` command**

This is a new command for querying and modifying waypoints.

    waypoint list
    
    waypoint modify <entity-selector> color <color>
    waypoint modify <entity-selector> color hex <hex-color>
    waypoint modify <entity-selector> color reset
    waypoint modify <entity-selector> fade <fade_start> <alpha_start> <fade_end> <alpha_end>
    waypoint modify <entity-selector> fade reset
    

Parameters:

-   `entity-selector`: For selecting entities that are transmitting as waypoints (see `waypoint_transmit_range` attribute)
-   `color`: Overrides the Locator Bar icon color for this waypoint
-   `hex <hex-color>` arguments are in web format (RRGGBB)
    -   Red is either `hex F00` or `hex FF0000`
    -   Cornflower blue is `hex 6495ED`
-   `fade`: Set the fade out effect for waypoints
    -   The arguments `<fade_start> <alpha_start> <fade_end> <alpha_end>` handle the starting/ending fade distance & alpha opacity
        -   `*_start` is the nearby values (closest to the player)
        -   `*_end` is the far values (furthest from the player)
    -   `reset` will restore the default behavior of distant Locator Bar icons fading out to 0.2 alpha

## Changes

-   Updated the textures for the Ghast
-   Increased the third-person camera distance when spectating or riding Ghasts, Ender Dragons, and Giants
-   Wolves, Sheep and Pigs now have their legs mirrored
-   Spectators will now teleport together with, but stop spectating, entities that move to other dimensions
-   Rules for when ambient desert blocks sounds play have been tweaked

### Ambient Desert Block Sounds Changes

-   Ambient sand sounds no longer require sky access to play
-   Ambient sand sounds now have a slightly decreased chance to play
-   Terracotta blocks no longer trigger ambient sand sounds
-   Sand blocks no longer trigger ambient wind sounds
-   Terracotta blocks no longer trigger ambient wind sounds
-   Short Dry Grass and Tall Dry Grass can now trigger ambient wind sounds when above 2 Sand, Red Sand or Terracotta blocks
-   Dead Bush ambient sounds now have a slightly increased chance of playing

## Technical Changes

-   The Data Pack version is now 72
-   The Resource Pack version is now 56
-   Pressing F3 + V now prints client-side version information

> **Developer's Note**: _The GUI rendering code is undergoing a significant refactoring in this Snapshot series. The version of it released in this Snapshot is not supposed to be final and will be further iterated upon._

## Data Pack Version 72

-   Dimension Type definitions have a new optional field, `cloud_height` that indicates on what y-level the clouds start in the dimension
-   New `version` command has been added
-   New `datapack create` subcommand has been added

### Commands

**Added `version`**

-   No arguments
-   Prints current version information on server side
-   Available in singleplayer or for server operators

**Added `datapack create`**

-   Creates new empty directory data pack for current world
-   Supported pack version is always equal to one supported by game
-   Available only to server owners
-   Syntax: `datapack create <id> <name>`
    -   `id` - new pack name, must be a valid directory name
    -   `name` - text component to be placed in `description` in `pack.mcmeta`

### Attributes

**Added `camera_distance`**

-   Default value: `4.0`
-   Modifies the distance at which the camera is placed away from the player or spectated entity when in a third-person view
-   If the entity being ridden has a larger `camera_distance` attribute, that distance will be used
-   This distance is multiplied by the `scale` attribute to get a final target camera distance

### Data Components

**`attribute_modifiers` Item Component**

-   Added optional `display` field to `attributes_modifiers` entries
    -   There are 3 `display` types:
        -   `default` - Current behavior of showing the calculated attribute modifier values on the tooltip
        -   `hidden` - Does not show the attribute modifier entry
        -   `override` - Replaces the shown attribute modifier text
            -   Contains a single field `value` for the text contents to show for this attribute modifer entry

### Entity Data

**`area_effect_cloud`**

-   The `Particle` field has been renamed to `custom_particle`, and now always functions as an exact override for the default colored `entity_effect` particle
    -   The field will not be written if no override is specified
    -   The color will no longer be inherited from the potion contents when specifying the `entity_effect` or `tinted_leaves` particle types

### Tags

**Block Tags**

-   Added `#triggers_ambient_desert_dry_vegetation_block_sounds` - blocks that can trigger ambient desert dry vegetation sounds to play from blocks above
-   `#plays_ambient_desert_block_sounds` has been renamed to `#triggers_ambient_desert_sand_block_sounds`

**Item Tags**

-   Added `#happy_ghast_food` - items that can be used to feed Happy Ghasts
-   Added `#happy_ghast_tempt_items` - items that can be used to tempt Happy Ghasts

**Entity Tags**

-   Added `#can_equip_harness` - entities that can equip the Harness items
-   Added `#followable_friendly_mobs` - non-baby entities that will be followed by Baby Happy Ghasts

## Resource Pack Version 56

-   The game will now consistently respect `blur` texture parameter in `.png.mcmeta` files

### Sound Events

-   `block.sand.wind` has been renamed to `block.dry_grass.ambient`

### Sounds

-   Changed location on the sounds for glow squid, squid, guardian, horse, rabbit and pufferfish from `entity` folder to the `mob` folder

### Equipment Assets

-   Added new `happy_ghast_body` layer type, rendering in the body slot of the Happy Ghast

## Fixed bugs in 25w15a

-   [MC-147260](https://bugs.mojang.com/browse/MC-147260) Map icons are not displayed in the cartography table
-   [MC-191306](https://bugs.mojang.com/browse/MC-191306) Sounds played using /playsound are played in all dimensions
-   [MC-266318](https://bugs.mojang.com/browse/MC-266318) Trapdoors and doors have inconsistent subtitles for being opened and closed
-   [MC-275374](https://bugs.mojang.com/browse/MC-275374) Drowneds with CanBreakDoors:1b don't break doors
-   [MC-276264](https://bugs.mojang.com/browse/MC-276264) Advancement screen shadow renders below item icons
-   [MC-277992](https://bugs.mojang.com/browse/MC-277992) 1 color in the pale chest boat item is incorrect
-   [MC-278466](https://bugs.mojang.com/browse/MC-278466) Bundle experiment data pack related strings are not in deprecated.json
-   [MC-278873](https://bugs.mojang.com/browse/MC-278873) The data fixer regenerates chunks containing items obtained from flower pots using Ctrl + Pick Block before version 1.13, or it crashes the game if the item is in the player's inventory
-   [MC-280047](https://bugs.mojang.com/browse/MC-280047) Temperate cows use their 1.14 texture with the Programmer Art resource pack enabled
-   [MC-280266](https://bugs.mojang.com/browse/MC-280266) Firefly bushes don't produce as many, or as constant, amounts of particles as on Bedrock Edition
-   [MC-280268](https://bugs.mojang.com/browse/MC-280268) Blazes and breezes use "large" spawn eggs despite mobs of a similar size using "medium"
-   [MC-280471](https://bugs.mojang.com/browse/MC-280471) The Particle.color field in area effect clouds is read-only
-   [MC-293619](https://bugs.mojang.com/browse/MC-293619) The chicken spawn egg texture in Programmer Art is missing pixels that match the inventory slot background color
-   [MC-295681](https://bugs.mojang.com/browse/MC-295681) Leaf litter can generate inside of woodland mansions
-   [MC-295850](https://bugs.mojang.com/browse/MC-295850) Done and Cancel buttons on the world creation Edit Game Rules screen do the same thing
-   [MC-295866](https://bugs.mojang.com/browse/MC-295866) The /setblock and /fill commands no longer update redstone power in some situations
-   [MC-295867](https://bugs.mojang.com/browse/MC-295867) Structures from previous versions fail with DataFixerUpper
-   [MC-296035](https://bugs.mojang.com/browse/MC-296035) Two pixels from "mooshroom;;_;;spawn;;_;;egg" are the same as "cow;;_;;spawn;;_;;egg"
-   [MC-296624](https://bugs.mojang.com/browse/MC-296624) Old Brown Mooshroom texture is missing from Programmer Art
-   [MC-297537](https://bugs.mojang.com/browse/MC-297537) Extra "entity.wolf;;_;;whine.whine" sound event exists in sounds.json

---

