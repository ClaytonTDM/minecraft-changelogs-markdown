# Minecraft Snapshot 25w46a

Is it Tuesday already? Must be, because the lights are on in the snapshot shipping room!

With today's release we're putting some additional polish on the upcoming features for our Mounts of Mayhem game drop, and changing the order of spawn eggs in the creative inventory for some better thematic flair. On the technical side, resource pack creators now have more freedom when creating their block models. For the full list of changes, browse the changelog below!

Happy mining!

## Changes

### Mobs

-   Parched are now immune to Weakness effect
-   Horses, Mules, Donkeys, Camels, Zombie Horses and Camel Husks will not panic if controlled by Mobs
-   Nautiluses and Zombie Nautiluses now play a dash sound when they perform their dash attack

### Items

-   Spears no longer cause item interact vibrations
-   Spawn Eggs are now sorted thematically in the Creative Inventory, according to the following categories:
    -   Overworld
        -   Farm Animals
        -   Mounts
        -   Pets
        -   Wild Animals
        -   Aquatic
        -   Miscellaneous
        -   Golems
        -   Villagers
        -   Undead
        -   Spiders
        -   Monsters
        -   Illagers
    -   Nether
    -   The End

### UI

-   Added an inventory UI for the Nautilus and Zombie Nautilus
-   Renamed the "Show Music Toast" option to "Music Toast"
    -   Added a third state to the "Music Toast" option, allowing it to only be shown in the pause menu
-   Added splash text "One does not simply walk to the Far Lands"

> **Developer’s Note:** _This statement was proven false on October 4, 2025_

## Technical Changes

-   The Data Pack version is now 93.1
-   The Resource Pack version is now 74.0

## Data Pack Version 93.1

### Item Components

**Default Item Components**

Added food properties to the following fish bucket items:

-   `minecraft:cod_bucket`
-   `minecraft:salmon_bucket`
-   `minecraft:pufferfish_bucket`
-   `minecraft:tropical_fish_bucket`

**`minecraft:use_effects`**

Added field `interact_vibrations`: boolean, whether using this item emits `minecraft:item_interact_start` and `minecraft:item_interact_finish` game events - Default value: `true`

### Loot Tables

Reverted removal of `contents` as a supported value for the `minecraft:dynamic` loot pool entry

> **Developer's Note**: _Support for this value was removed in a previous snapshot with the introduction of slot sources, which replace its functionality. Community response however indicated that certain use cases aren't yet fully covered by slot sources, so we are reverting this removal until proper alternatives are ready._

## Resource Pack Version 74.0

-   Textures used for still water and lava are now hardcoded to `minecraft:block/water_still` and `minecraft:block/lava_still`
-   To prepare for future work, the game will now print a warning if any defined sprites in any atlases share a name
-   Block model and state format has been expanded to allow more rotations

### Textures

-   Beacons no longer support translucent textures
-   Added `gui/container/nautilus` used for the Nautilus inventory UI

### UI Sprites

-   Added `container/slot/nautilus_armor_inventory` - Nautilus icon used in Nautilus inventory UI

### Sound Events

-   Added `entity.zombie_horse.eat`

### Block Models

-   Block model elements can now be rotated around multiple axes
    -   Model is first rotated around X, then Y, then Z
    -   New fields:
        -   `x` - rotation around axis X in degrees, float, defaults to `0.0`
        -   `y` - rotation around axis Y in degrees, float, defaults to `0.0`
        -   `z` - rotation around axis Z in degrees, float, defaults to `0.0`
    -   Existing fields `axis` and `angle` can still be used
        -   If both field sets are present, older notation takes presence
-   Existing restriction for angle value limiting them to `[-45, 45]` has been removed
    -   Note: Names of faces are not influenced by rotation. Features that depend on them, like culling, will always use original directions

### Block State Model Dispatch

-   Variants in block state dispatch files (defined in `assets/.../blockstates/` can now be also rotated around Z axis
    -   New optional field `z` has the same format as existing `x` and `y` fields: an integer with allowed values of `0` (default), `90`, `180` and `270`
    -   Rotation around Z axis is applied after X and Y

## Fixed bugs in 25w46a

-   [MC-266425](https://bugs.mojang.com/browse/MC-266425) Recipes for new waxed copper blocks are not grouped
-   [MC-302815](https://bugs.mojang.com/browse/MC-302815) Zombified piglins spawned from lightning striking a pig do not have a chance to hold a golden spear
-   [MC-302825](https://bugs.mojang.com/browse/MC-302825) The charging animations of some items are incorrect
-   [MC-302851](https://bugs.mojang.com/browse/MC-302851) Buckets of fish heal nautiluses much less than fish items
-   [MC-302890](https://bugs.mojang.com/browse/MC-302890) You can perform spear jabbing and charging attacks simultaneously
-   [MC-302892](https://bugs.mojang.com/browse/MC-302892) Players' arms visually intersect with their bodies and heads when holding spears while riding boats
-   [MC-302893](https://bugs.mojang.com/browse/MC-302893) Hitboxes of submerged entities don't render when the player is looking at them from the surface
-   [MC-302935](https://bugs.mojang.com/browse/MC-302935) Skeletons incorrectly position their arms before shooting
-   [MC-302958](https://bugs.mojang.com/browse/MC-302958) Nautiluses' mouth texture is misaligned
-   [MC-302998](https://bugs.mojang.com/browse/MC-302998) Mobs' arms can visually intersect their bodies and heads when they rotate while holding spears
-   [MC-303149](https://bugs.mojang.com/browse/MC-303149) Commands with specific arguments can crash the game in a deep function recursion
-   [MC-303331](https://bugs.mojang.com/browse/MC-303331) There is no sound for feeding zombie horses red mushrooms
-   [MC-303395](https://bugs.mojang.com/browse/MC-303395) You cannot double-click on server regions within the realms select region menu to select them
-   [MC-303396](https://bugs.mojang.com/browse/MC-303396) The search fields in the resource and data pack menus aren’t automatically selected when opening the menus via keyboard navigation
-   [MC-303404](https://bugs.mojang.com/browse/MC-303404) You can damage entities while charging with spears in spectator mode
-   [MC-303431](https://bugs.mojang.com/browse/MC-303431) Setting the debug modifier key to a mouse button doesn't allow for switching to the selected gamemode in the gamemode switcher
-   [MC-303443](https://bugs.mojang.com/browse/MC-303443) Transparent and translucent blocks render in front of the fishing line
-   [MC-303625](https://bugs.mojang.com/browse/MC-303625) Entities, particles, clouds, water, semi-transparent blocks and special rendering blocks render in front of block hitboxes with improved transparency enabled
-   [MC-303653](https://bugs.mojang.com/browse/MC-303653) Camel husks show breeding hearts when fed
-   [MC-303695](https://bugs.mojang.com/browse/MC-303695) Reloading textures while the game is tick frozen causes animated textures to render incorrectly
-   [MC-303751](https://bugs.mojang.com/browse/MC-303751) The model of parched has UV issues
-   [MC-303755](https://bugs.mojang.com/browse/MC-303755) The mouse cursor doesn’t change to the resize shape when hovering over the scroll bar in the villager and wandering trader trade UI
-   [MC-303757](https://bugs.mojang.com/browse/MC-303757) The mouse cursor doesn’t change to the proper shape when hovering over enchantments in the enchanting table UI
-   [MC-303758](https://bugs.mojang.com/browse/MC-303758) The mouse cursor doesn’t change to the hand shape when hovering over various elements in the recipe book
-   [MC-303761](https://bugs.mojang.com/browse/MC-303761) The mouse cursor doesn’t change to the proper shape when hovering over the output buttons or the scroll bar in the stonecutter UI
-   [MC-303762](https://bugs.mojang.com/browse/MC-303762) The mouse cursor doesn’t change to the proper shape when hovering over the output buttons or the scroll bar in the loom UI
-   [MC-303763](https://bugs.mojang.com/browse/MC-303763) The mouse cursor doesn’t change to the hand shape when hovering over the crafting slots in the crafter UI
-   [MC-303764](https://bugs.mojang.com/browse/MC-303764) The mouse cursor doesn’t change to the proper shape when hovering over the tabs or the scroll bar in the Creative mode inventory
-   [MC-303765](https://bugs.mojang.com/browse/MC-303765) The mouse cursor doesn’t change to the hand shape when hovering over the tabs in the advancements menu
-   [MC-303790](https://bugs.mojang.com/browse/MC-303790) The block breaking particles and block outlines render behind glass blocks and beacons
-   [MC-303882](https://bugs.mojang.com/browse/MC-303882) Charging with a spear with a loaded crossbow in the off hand looks visually off in third person
-   [MC-303940](https://bugs.mojang.com/browse/MC-303940) Netherite horse armor burns in lava/fire
-   [MC-303943](https://bugs.mojang.com/browse/MC-303943) Drowned are no longer slowed down by water
-   [MC-303944](https://bugs.mojang.com/browse/MC-303944) Knockback attacks produce double sounds while the player is in the false sprinting state
-   [MC-303945](https://bugs.mojang.com/browse/MC-303945) The closed caption for the parrot imitating parched does not match the original caption for parched
-   [MC-303947](https://bugs.mojang.com/browse/MC-303947) Clicking on any item with the "unbreakable", "glider", or "intangible;;_;;projectile" data component causes the game to crash
-   [MC-303948](https://bugs.mojang.com/browse/MC-303948) The texture of netherite horse armor is different than in Bedrock Edition
-   [MC-303956](https://bugs.mojang.com/browse/MC-303956) Charge attacks now have reduced damage when used after a jab attack
-   [MC-303961](https://bugs.mojang.com/browse/MC-303961) Sprint-crit state now plays both the sprint-knockback sound and the critical hit sound, despite only critical hits being performed
-   [MC-303974](https://bugs.mojang.com/browse/MC-303974) The day counter in the debug overlay is no longer displayed
-   [MC-304061](https://bugs.mojang.com/browse/MC-304061) The warning time for world borders in new worlds is less than expected

---

# Minecraft Snapshot 25w45a

Greetings from the Tuesday snapshot shipping room! Our final set of features for Mounts of Mayhem brings the game's strongest armor tier to your favorite mount – with Netherite horse armor! As well as making your steed more stylish, Netherite horse armor will also make them sturdier, perfect for all those mounted challenges. On the submerged side of things, explorers of warmer waters can now swim-ble upon a rare variant of the zombie nautilus..

With this week's snapshot, we're also introducing a new concept for data packs called timelines, that can modify game behavior based on the in-game day time – more about that in the full changelog below.

Happy mining!

## New Features

-   Updated the panorama for the Mounts of Mayhem drop
-   Added Netherite Horse Armor that can be obtained by upgrading Diamond Horse Armor with a Smithing Table

### Spear Weapon

-   Spears are now less forgiving if you miss a charge attack

### Coral Zombie Nautilus

-   Added a new variant of the Zombie Nautilus mob: the Coral Zombie Nautilus
-   It Spawns in Warm Oceans, replacing the normal Zombie Nautilus

### Camel Husk

-   Drops 2-3 Rotten Flesh when killed, with extra 0-1 for each level of Looting

### Advancements

-   Added the "Mob Kabob" advancement for spearing 5 enemies with a Charge attack

## Changes

-   Zombie Horses, Camel Husks and Nautili become persistent with any interaction from a player, not just riding them
-   Video memory impact of anisotropic filtering was reduced, but still remains quite high
-   The color of the sky during sunrises and sunsets is now affected by rain and thunder

## Technical Changes

-   The Data Pack version is now 93.0
-   The Resource Pack version is now 73.0

## Data Pack Version 93.0

-   Added new Coral Zombie Nautilus mob variant
    -   The Zombie Nautilus variants can be data-driven
-   Item textures were split out of the `blocks` atlas into a separate new `items` atlas
    -   It means that the commands that were referencing the `blocks` atlas for item textures now need to reference the `items` atlas instead

### Zombie Nautilus Variants

-   Zombie Nautilus variants can be data-driven by adding entries to `data/<namespace>/zombie_nautilus_variant/<id>.json`
-   This feature is experimental
-   Fields in file:
    -   `model` - one of: `normal`, `warm`
    -   `asset_id` - namespaced id for this variant asset, resolves to `assets/<namespace>/textures/<path>.png`
    -   `spawn_conditions` - a uniform variant selection rule explained below

**Spawn conditions**

**`minecraft:biome`**

-   Checks if entity is spawning in specific biomes
-   Fields:
    -   `biomes` - single entry, list or a tag describing biomes

**`minecraft:moon_brightness`**

-   Checks if current moon brightness is within certain range
-   Fields:
    -   `range` - floating point range (a single number or an object like `{"min": 1, "max": 2}`)

**`minecraft:structures`**

-   Checks if entity is spawning in specific structures
-   Fields:
    -   `structures` - single entry, list or a tag describing structures

### Game Rules

-   The limit for the `minecraft:max_entity_cramming` game rule has been changed to a minimum of `0`

### Data Components

-   `minecraft:piercing_weapon` and `minecraft:kinetic_weapon` data components now have bounds on their reach parameters:
    -   `min_reach`: is now valid from `0.0` to `128.0`
    -   `max_reach`: is now valid from `0.0` to `128.0`
    -   `hitbox_margin`: is now valid from `0.0` to `1.0`

### Timelines

Timelines are a new experimental concept defined in data packs under the `timeline` registry (i.e. found under `data/<namespace>/timeline/<id>.json`).

Timelines specify game behavior based on the absolute day time (that which is set by `/time set`). Timelines optionally can specify a period over which they will be repeated.

Primarily, Timelines are able to modify game behavior or visuals by acting as an Environment Attribute source to apply Environment Attribute modifiers.

Format: object with fields

-   `period_ticks`: optional integer, defines the duration in ticks over which the timeline will repeat
    -   If not specified, the timeline will not repeat
-   `tracks`: optional map between Environment Attribute IDs and a corresponding Environment Attribute Track object
    -   See the section on Environment Attributes below for details

Timelines by default have no effect unless they are included by a dimension - see the Dimension Types section below.

With the inclusion of Timelines, Environment Attribute sources are processed in the following order (from low to high priority):

-   Dimensions
-   Biomes
-   Timelines
-   Weather (not data-driven)

**Interpolation**

Timelines can define Attribute Tracks - these specify how a modifier for a particular Environment Attribute changes over time by defining keyframes. Depending on the attribute, interpolation may be used between each keyframe. If interpolation is not used, the previous keyframe value will always be selected.

For example, a Timeline with a period of `24000` might be set up as following:

-   At time = `0`, the timeline provides `sky_color = #ff0000` (red)
-   At time = `1000`, the timeline provides `sky_color = #ff0000` (red)
-   At time = `6000`, the timeline provides `sky_color = #ff00ff` (magenta)

Between time = `0` and time = `1000`, the sky color will be red. Between `1000` and `6000`, it will shift from red to magenta. Then, from `6000` all the way until the timeline repeats and reaches time = `0` again, the color will slowly shift back to `red`.

Note: unlike biomes, if a Timeline uses a modifier instead of an override, interpolation is applied to the modifier arguments rather than the final modified values.

**Attribute Tracks**

An Attribute Track specified within a Timeline takes the format of an object with the following fields:

-   `ease` - optional Easing Type (see below), used to ease the interpolaton of the value between keyframes
    -   Default: `linear`
    -   If the target attribute does not support interpolation, the easing mode will have no effect
-   `keyframes` - list of keyframe objects, must be ordered by the `ticks` field:
    -   `ticks` - integer between `0` and `period_ticks` (if specified), defines the tick (within the period) at which this keyframe's value will be active
    -   `value` - the modifier argument (format dependent on the chosen modifier)
        -   If no `modifier` is specified (or `override` is used), the type of this field is the same as the Environment Attribute itself
        -   How this value is used depends on the type of modifier
    -   Note: at most two keyframes can be placed on the same tick, creating an immediate transition
-   `modifier` - optional string modifier ID, dependent on the Attribute Type (see the Common Modifiers section below)
    -   Default: `override`

For example, the following Timeline has a period of `24000`, and has an attribute track that modifies only `minecraft:gameplay/cat_waking_up_gift_chance`. Because the easing is `constant`, between tick `362` and `23667` the value is `0.0`, while between tick `23667` and `362` it is `0.7`.

Like other Environment Attribute sources, the specified value is used as the argument to the specified `modifier`. This is then applied on top of sources with a lower priority. In this case the modifier is `maximum`, so this timeline will only ever increase the value of `cat_waking_up_gift_chance` to the value specified in the track.

    {
        "period_ticks": 24000,
        "tracks": {
            "minecraft:gameplay/cat_waking_up_gift_chance": {
                "ease": "constant",
                "modifier": "maximum",
                "keyframes": [
                    { "ticks": 362,   "value": 0.0 },
                    { "ticks": 23667, "value": 0.7 }
                ]
            }
        }
    }
    

**Easing Types**

Easing Types control the interpolation between two keyframes by applying a curve. The following built-in Easing Types are provided:

-   `constant` - always selects the previous keyframe
-   `linear`
-   `in_back`
-   `in_bounce`
-   `in_circ`
-   `in_cubic`
-   `in_elastic`
-   `in_expo`
-   `in_quad`
-   `in_quart`
-   `in_quint`
-   `in_sine`
-   `in_out_back`
-   `in_out_bounce`
-   `in_out_circ`
-   `in_out_cubic`
-   `in_out_elastic`
-   `in_out_expo`
-   `in_out_quad`
-   `in_out_quart`
-   `in_out_quint`
-   `in_out_sine`
-   `out_back`
-   `out_bounce`
-   `out_circ`
-   `out_cubic`
-   `out_elastic`
-   `out_expo`
-   `out_quad`
-   `out_quart`
-   `out_quint`
-   `out_sine`

An Easing Type may also be specified with a Cubic Bézier in the format: `{ "cubic_bezier": [ x1, y1, x2, y2 ] }`

-   `x1`: float between `0` and `1`, x-coordinate of the first control point
-   `y1`: float, y-coordinate of the first control point
-   `x2`: float between `0` and `1`, x-coordinate of the second control point
-   `y2`: float, y-coordinate of the second control point

> **Developer's Note**: _To play around with and visualize easings, [easings.net](https://easings.net) and [cubic-bezier.com](https://cubic-bezier.com) are great references!_

**Common Data Types**

**Mob Activity**

A string ID from the `minecraft:activity` built-in registry. One of:

-   `minecraft:core`
-   `minecraft:idle`
-   `minecraft:work`
-   `minecraft:play`
-   `minecraft:rest`
-   `minecraft:meet`
-   `minecraft:panic`
-   `minecraft:raid`
-   `minecraft:pre_raid`
-   `minecraft:hide`
-   `minecraft:fight`
-   `minecraft:celebrate`
-   `minecraft:admire_item`
-   `minecraft:avoid`
-   `minecraft:ride`
-   `minecraft:play_dead`
-   `minecraft:long_jump`
-   `minecraft:ram`
-   `minecraft:tongue`
-   `minecraft:swim`
-   `minecraft:lay_spawn`
-   `minecraft:sniff`
-   `minecraft:investigate`
-   `minecraft:roar`
-   `minecraft:emerge`
-   `minecraft:dig`

**Modifiers**

-   Added `blend_to_gray` RGB/ARGB modifier - modifies a color by taking its grayscale form, applying a brightness modifier, and mixing with this using some factor
    -   Where `gray = brightness * (0.3 * red + 0.59 * green + 0.11 * blue)`, `result = lerp(factor, subject, [gray, gray, gray])`
    -   Argument format: object with fields:
        -   `brightness`: float between `0` and `1`, a multiplier to apply to the grayscale value
        -   `factor`: float between `0` and `1`, the factor to mix with

**New Environment Attributes**

**`minecraft:visual/sunrise_sunset_color`**

Controls the color and intensity of the sunrise and sunset effect. If fully transparent, no sunrise or sunset will be rendered. Only visible with the `overworld` skybox type.

-   Value type: ARGB Color
-   Default value: `"#00000000"`
-   Modifiers: ARGB Color Modifiers
-   Interpolated: yes
-   Resolved at the camera's position

**`minecraft:visual/sun_angle`**

The angle in degrees of the sun, clockwise from east to west, with `0` being directly up.  
Only visible with the `overworld` skybox type.

-   Value type: float, angle in degrees
-   Default value: `0.0`
-   Modifiers: Float Modifiers
-   Interpolated: yes
-   Resolved at the camera's position

**`minecraft:visual/moon_angle`**

The angle in degrees of the moon, clockwise from east to west, with `0` being directly up. Only visible with the `overworld` skybox type.

-   Value type: float, angle in degrees
-   Default value: `0.0`
-   Modifiers: Float Modifiers
-   Interpolated: yes
-   Resolved at the camera's position

**`minecraft:visual/star_angle`**

The angle in degrees of the stars, clockwise from east to west, with `0` being directly up. Only visible with the `overworld` skybox type.

-   Value type: float, angle in degrees
-   Default value: `0.0`
-   Modifiers: Float Modifiers
-   Interpolated: yes
-   Resolved at the camera's position

**`minecraft:visual/moon_phase`**

The phase of the moon. Only visible with the `overworld` skybox type.

-   Value type: string id, one of:
    -   `full_moon`
    -   `waning_gibbous`
    -   `third_quarter`
    -   `waning_crescent`
    -   `new_moon`
    -   `waxing_crescent`
    -   `first_quarter`
    -   `waxing_gibbous`
-   Default value: `"full_moon"`
-   Modifiers: `override`
-   Interpolated: no
-   Resolved at the camera's position

**`minecraft:visual/star_brightness`**

The brightness of the stars in the sky, where `0.5` is the normal brightness during the night and `0` is fully hidden. Only visible with the `overworld` skybox type.

-   Value type: float between `0` and `1`
-   Default value: `0.0`
-   Modifiers: Float Modifiers
-   Interpolated: yes
-   Resolved at the camera's position

**`minecraft:visual/sky_light_color`**

The visual color of sky light. For blocks with a sky light level of 0 (or `minecraft:visual/sky_light_factor` is `0`), this will have no effect. This is the value passed to the `lightmap.fsh` shader as `SkyLightColor`.

-   Value type: RGB Color
-   Default value: `"#ffffff"`
-   Modifiers: RGB Color Modifiers
-   Interpolated: yes
-   Resolved at the camera's position

**`minecraft:visual/sky_light_factor`**

The visual brightness of sky light. `minecraft:visual/sky_light_color` is multiplied by this value. This is the value passed to the `lightmap.fsh` shader as `SkyFactor`.

The corresponding gameplay effect is controlled entirely by `minecraft:gameplay/sky_light_level`.

-   Value type: float
-   Default value: `1.0`
-   Modifiers: Float Modifiers
-   Interpolated: yes
-   Resolved at the camera's position

**`minecraft:audio/firefly_bush_sounds`**

If `true` and not below an opaque block, Firefly Bushes will produce idle sounds.

-   Value type: boolean
-   Default value: `false`
-   Modifiers: Boolean Modifiers
-   Interpolated: no
-   Resolved at the position of a Firefly Bush

**`minecraft:gameplay/sky_light_level`**

The effective light level of the sky used by mechanics such as mob spawning or Daylight Detectors. For example, a block fully exposed to the sky will be considered to have a light level of exactly this value, while a block deep in a cave will not be affected at all.

The corresponding visual effect is controlled entirely by `minecraft:visual/sky_light_factor`.

-   Value type: float
-   Default value: `15.0`
-   Modifiers: Float Modifiers
-   Interpolated: yes
-   Resolved for a whole dimension (cannot be specified on a Biome)

**`minecraft:gameplay/eyeblossom_open`**

If `true`, Closed Eyeblossoms will eventually open by random block ticks. If `false`, Open Eyeblossoms will do the opposite. If `"default"`, Open or Closed Eyeblossoms will remain in their current state.

-   Value type: one of:
    -   `true`
    -   `false`
    -   `"default"`
-   Default value: `"default"`
-   Modifiers: `override`
-   Interpolated: no
-   Resolved at the Eyeblossom block's position

**`minecraft:gameplay/turtle_egg_hatch_chance`**

The chance that a Turtle Egg block will switch to its next hatching state when randomly ticked.

-   Value type: float between `0` and `1`
-   Default value: `0.0`
-   Modifiers: Float Modifiers
-   Interpolated: yes
-   Resolved at the Turtle Egg block's position

**`minecraft:gameplay/creaking_active`**

While `true`, Creaking Heart blocks (and their corresponding Creaking) will become active. On the other hand, when `false`, it will enter its dormant state.

-   Value type: boolean
-   Default value: `false`
-   Modifiers: Boolean Modifiers
-   Interpolated: no
-   Resolved at the Creaking Heart block's position

**`minecraft:gameplay/surface_slime_spawn_chance`**

An additional chance rolled when a natural Slime spawn attempt occurs in a biome with the `#allows_surface_slime_spawns` tag.

-   Value type: float between `0` and `1`
-   Default value: `0.0`
-   Modifiers: Float Modifiers
-   Interpolated: yes
-   Resolved at the position of the Slime spawn attempt

**`minecraft:gameplay/cat_waking_up_gift_chance`**

The chance that a Cat lying on its owner's Bed will drop a gift (from the `gameplay/cat_morning_gift` loot table) when the player wakes up.

-   Value type: float
-   Default value: `0.0`
-   Modifiers: Float Modifiers
-   Interpolated: yes
-   Resolved at the Cat's position

**`minecraft:gameplay/bees_stay_in_hive`**

When `true`, Bees will try to navigate to their Hives and will not exit unless the Hive is broken or next to a Fire.

-   Value type: boolean
-   Default value: `false`
-   Modifiers: Boolean Modifiers
-   Interpolated: no
-   Resolved at a Bee or Bee Hive block's position

**`minecraft:gameplay/monsters_burn`**

When `true`, monsters will burn while exposed to the sky.

-   Value type: boolean
-   Default value: `false`
-   Modifiers: Boolean Modifiers
-   Interpolated: no
-   Resolved at the monster's position

**`minecraft:gameplay/can_pillager_patrol_spawn`**

When `true`, Pillager Patrols are able to spawn.

Note: the global skylight level must also be greater than 11.

-   Value type: boolean
-   Default value: `true`
-   Modifiers: Boolean Modifiers
-   Interpolated: no
-   Resolved at the position of the patrol spawn attempt
-   Replaces the `#without_patrol_spawns` biome tag

**`minecraft:gameplay/villager_activity`**

Controls the default AI activity for adult Villagers.

Not all activities are supported by Villager AI - if an unsupported one is chosen, the Villager will do nothing. The following activities are supported:

-   `core`
    
-   `hide`
    
-   `idle`
    
-   `meet`
    
-   `panic`
    
-   `pre_raid`
    
-   `raid`
    
-   `rest`
    
-   `work`
    
-   Value type: Mob Activity
    
-   Default value: `"minecraft:idle"`
    
-   Modifiers: `override`
    
-   Interpolated: no
    
-   Resolved at the Villager's position
    

**`minecraft:gameplay/baby_villager_activity`**

Controls the default AI activity for baby Villagers.

Not all activities are supported by Villager AI - if an unsupported one is chosen, the Villager will do nothing. The following activities are supported:

-   `core`
    
-   `hide`
    
-   `idle`
    
-   `meet`
    
-   `panic`
    
-   `play`
    
-   `pre_raid`
    
-   `raid`
    
-   `rest`
    
-   Value type: Mob Activity
    
-   Default value: `"minecraft:idle"`
    
-   Modifiers: `override`
    
-   Interpolated: no
    
-   Resolved at the Villager's position
    

### World Generation

**Dimension Types**

-   Added a new optional `timelines` field that specifies which Timelines are active in this dimension
    -   Format: a Timeline ID, a list of Timeline IDs, or a Timeline Tag
-   The `natural` field has been fully replaced by the `minecraft:gameplay/eyeblossom_open` and `minecraft:gameplay/creaking_active` Environment Attributes
-   The `effects` field has been removed and replaced with the following new fields:
    -   `skybox` - the skybox rendering type to use, one of:
        -   `none` (was `minecraft:nether` effect ID)
        -   `overworld` (was `minecraft:overworld` effect ID)
            -   Following environment attribues are applied only when the `skybox` is `overworld`:
                -   `minecraft:visual/sky_color`, `minecraft:visual/sun_angle`,`minecraft:visual/sunrise_sunset_color`, `minecraft:visual/moon_phase`, `minecraft:visual/moon_angle`, `minecraft:visual/star_angle`, `minecraft:visual/star_brightness`
        -   `end` (was `minecraft:end` effect ID)
        -   Default: `overworld`
    -   `cardinal_light` - the direction of cardinal lighting that affects blocks, one of:
        -   `default` (was `minecraft:overworld` and `minecraft:end` effect ID)
        -   `nether` (was `minecraft:nether` effect ID)
        -   Default: `default`
-   The `fixed_time` field has been replaced by a `has_fixed_time` boolean (default: `false`)
    -   Time-based effects such as the angle of the sun are now specified instead by Environment Attributes
    -   However, the remainder of behaviors formerly affected by `fixed_time` being present will now instead use the `has_fixed_time` boolean

### Tags

**Biome Tags**

-   Removed `#without_patrol_spawns` - replaced by `gameplay/can_pillager_patrol_spawn` Environment Attribute
-   Added `#spawns_coral_variant_zombie_nautilus` - biomes where the Coral Variant of the Zombie Nautilus can spawn

**Timeline Tags**

-   Added `#universal` - Timelines that are active in every dimension
-   Added `#in_overworld` - Timelines that are active in the Overworld
-   Added `#in_nether` - Timelines that are active in the Nether
-   Added `#in_end` - Timelines that are active in the End

### Advancements

-   Added new `spear_mobs` trigger with fields:
    -   `player`: optional entity predicate, the player using the kinetic weapon
    -   `count`: optional integer, the number of mobs hit in a single use of the kinetic weapon

## Resource Pack Versions 73.0

-   Item textures were split out of the `blocks` atlas into a separate new `items` atlas that does not have mipmaps
    -   All textures used in an item model have to come from the same (`items` or `blocks`) atlas
    -   All textures used in a block model have to come from the `blocks` atlas

### Item Sprites

-   Added new item sprites:
    -   `item/netherite_horse_armor`

### Entity Textures

-   Added new entity textures:
    -   `entity/equipment/zombie_nautilus_coral.png`
    -   `entity/equipment/horse_body/netherite.png`

### Sounds

-   Added new sound events for the Parrot:
    -   `entity.parrot.imitate.parched`
    -   `entity.parrot.imitate.zombie_horse`
    -   `entity.parrot.imitate.zombie_nautilus`

## Fixed bugs in 25w45a

-   [MC-199467](https://bugs.mojang.com/browse/MC-199467) Certain entity animations stop after they've existed in world for too long
-   [MC-245895](https://bugs.mojang.com/browse/MC-245895) View Bobbing stops working after long elytra flight
-   [MC-269295](https://bugs.mojang.com/browse/MC-269295) Jump bar progress renders unused pixels from dynamic texture atlas
-   [MC-271729](https://bugs.mojang.com/browse/MC-271729) Armadillo scute drops are not affected by the mob;;_;;drops game rule
-   [MC-271938](https://bugs.mojang.com/browse/MC-271938) Mace smash attack can push players in creative mode that are flying
-   [MC-301424](https://bugs.mojang.com/browse/MC-301424) entity;;_;;data item component detection is broken in resource packs
-   [MC-302184](https://bugs.mojang.com/browse/MC-302184) Copper golems in cave/void air never turn into statues
-   [MC-302469](https://bugs.mojang.com/browse/MC-302469) Creepers at the player's exact position with an explosion radius of 0 set the player's velocity to NaN
-   [MC-302477](https://bugs.mojang.com/browse/MC-302477) Loot tables stopped supporting SNBT as entity data
-   [MC-302659](https://bugs.mojang.com/browse/MC-302659) Items such as grass blocks and cacti have incorrect textures in inventories when mipmap levels are enabled
-   [MC-302663](https://bugs.mojang.com/browse/MC-302663) Any form of attacking non-player entities always produces the “weak attack” sound instead of the appropriate sound
-   [MC-302703](https://bugs.mojang.com/browse/MC-302703) Spear can dismount invulnerable, non-living, and otherwise inanimate passengers from any vehicle
-   [MC-302887](https://bugs.mojang.com/browse/MC-302887) Spear charging animation in first person isn’t perfectly mirrored between the main hand and off hand
-   [MC-302911](https://bugs.mojang.com/browse/MC-302911) If the sun texture cannot be loaded, the moon texture is reused instead
-   [MC-303067](https://bugs.mojang.com/browse/MC-303067) Players can charge with the spear and deal damage while dying
-   [MC-303108](https://bugs.mojang.com/browse/MC-303108) Inventory items are now mipmapped, making them look very blurry
-   [MC-303109](https://bugs.mojang.com/browse/MC-303109) Tick freeze and memory spikes with long piercing;;_;;weapon ray reach
-   [MC-303226](https://bugs.mojang.com/browse/MC-303226) Music doesn't restart after exiting a pale garden
-   [MC-303292](https://bugs.mojang.com/browse/MC-303292) Cloud movement is jittery when the world's gametime value is large
-   [MC-303402](https://bugs.mojang.com/browse/MC-303402) Hover events on text posted in the chat take effect even when in a GUI
-   [MC-303405](https://bugs.mojang.com/browse/MC-303405) You can attack entities diagonally through solid blocks using spears
-   [MC-303413](https://bugs.mojang.com/browse/MC-303413) Scrolling text does not get clipped properly in UI elements
-   [MC-303427](https://bugs.mojang.com/browse/MC-303427) The lunge enchantment doesn’t work in creative mode if you have 6 or less hunger points
-   [MC-303510](https://bugs.mojang.com/browse/MC-303510) Dropping a spear while charging slows down the player
-   [MC-303554](https://bugs.mojang.com/browse/MC-303554) minecraft:piercing;;_;;weapon component causes attack cooldown damage penalty to be ignored
-   [MC-303654](https://bugs.mojang.com/browse/MC-303654) Closed captions of parched show as strays
-   [MC-303656](https://bugs.mojang.com/browse/MC-303656) Placing blocks in empty chunk sections inside loaded chunks shows the chunk fade animation
-   [MC-303658](https://bugs.mojang.com/browse/MC-303658) Block textures are blurry on some systems, depending on mipmap and anisotropic filtering settings
-   [MC-303659](https://bugs.mojang.com/browse/MC-303659) Elements within the language menu are not selected in order when using the TAB key
-   [MC-303671](https://bugs.mojang.com/browse/MC-303671) Camel husks can despawn when wearing a saddle
-   [MC-303674](https://bugs.mojang.com/browse/MC-303674) The hand animation plays when right clicking on a camel husk or zombie horse ridden by another mob with a lead
-   [MC-303677](https://bugs.mojang.com/browse/MC-303677) Camel husks can despawn when attached to a lead
-   [MC-303680](https://bugs.mojang.com/browse/MC-303680) Untamed zombie horses can despawn when attached to a lead
-   [MC-303681](https://bugs.mojang.com/browse/MC-303681) Untamed zombie nautiluses can despawn when attached to a lead
-   [MC-303703](https://bugs.mojang.com/browse/MC-303703) Entities and block entities are not affected by the chunk fade-in effect
-   [MC-303704](https://bugs.mojang.com/browse/MC-303704) Statistics are no longer saved if the folder they would save into doesn't exist yet
-   [MC-303705](https://bugs.mojang.com/browse/MC-303705) Entity cramming can no longer be disabled
-   [MC-303714](https://bugs.mojang.com/browse/MC-303714) The jump bar's progress sprite is improperly scaled
-   [MC-303727](https://bugs.mojang.com/browse/MC-303727) Short effect names can cause the effect duration to appear outside the effect box
-   [MC-303734](https://bugs.mojang.com/browse/MC-303734) deprecated.json renames translation keys to nonexistent keys
-   [MC-303744](https://bugs.mojang.com/browse/MC-303744) Ender pearls can launch players in the direction they are thrown
-   [MC-303746](https://bugs.mojang.com/browse/MC-303746) Spear attacks can hurt entities through doors
-   [MC-303799](https://bugs.mojang.com/browse/MC-303799) There is no 'Search...' text in the search field in the world selection screen
-   [MC-303802](https://bugs.mojang.com/browse/MC-303802) Spamming right click and shift when getting into boat gives a speed boost
-   [MC-303891](https://bugs.mojang.com/browse/MC-303891) Untamed zombie horses and skeleton horses cannot have saddles placed on their saddle slot using /item

---

