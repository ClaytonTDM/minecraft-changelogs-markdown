# Minecraft Snapshot 25w18a

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

**Entity Tags**

-   Updated `#followable_friendly_mobs` to include the Happy Ghast

## Resource Pack Version 59

-   Updated Unifont to 16.0.03

### UI Sprites

-   The `hud/locator_bar_arrow_up` and `hud/locator_bar_arrow_down` sprites are now animated with a standard `animation` definition in the corresponding `.mcmeta` files

### Font

**Unifont**

-   Updated Unifont to 16.0.03
-   Added previously omitted Unifont glyphs for Private Use Areas
    -   Those glyphs are loaded as a separate sub-font `minecraft:include/unifont_pua` and are not included in any normally used font
    -   Characters in those areas are managed by Under-CSUR (Under-ConScript Unicode Registry), which adds various scripts not present in official Unicode set, like Tengwar or Sitelen Pona

**`unihex` Font Provider**

-   Field `size_overrides` is now optional (defaults to empty list)

## Fixed bugs in 25w18a

-   [MC-200925](https://bugs.mojang.com/browse/MC-200925) Ghasts are not affected by potions thrown on their head
-   [MC-262268](https://bugs.mojang.com/browse/MC-262268) Keyboard navigation does not work in the book and quill GUI
-   [MC-264431](https://bugs.mojang.com/browse/MC-264431) #minecraft:sand tag has two minecraft:suspicious;;_;;sand
-   [MC-278459](https://bugs.mojang.com/browse/MC-278459) unifont.json contains trailing comma
-   [MC-279284](https://bugs.mojang.com/browse/MC-279284) Experience orbs from thrown bottles o' enchanting are very prone to getting stuck inside blocks
-   [MC-279875](https://bugs.mojang.com/browse/MC-279875) Cannot diagonally climb slab through suspended scaffolding
-   [MC-280281](https://bugs.mojang.com/browse/MC-280281) Fishing bobbers rapidly jitter when attached to entities that are moving
-   [MC-280502](https://bugs.mojang.com/browse/MC-280502) Translation key snbt.parser.undescore;;_;;not;;_;;allowed has a typo
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

