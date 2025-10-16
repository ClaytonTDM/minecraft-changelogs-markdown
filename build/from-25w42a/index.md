# Minecraft Snapshot 25w42a

A fresh new snapshot is out with some changes to the features introduced in last week’s snapshot and bug fixes, like that you can now use the lunge and mending enchantments together on the same item. We have also added environment attributes which can be used to control various visual and gameplay effects. Happy mining!

## Changes

-   Underwater biome fog color and fog distance is now blended based on the player's position between biomes, similarly to regular biome fog and sky colors
-   Updated the "Oh Shiny" advancement to include the Golden Spear and Golden Nautilus Armor
-   Zombie Horses can be leashed when its mob jockey is removed
-   The Nautilus and Zombie Nautilus can now be controlled while on land
-   Mending is no longer incompatible with the Lunge enchantment

## Technical Changes

-   The Data Pack version is now 90.0
-   The Resource Pack version is now 70.1

### Minecraft Server Management Protocol Version 1.1.0

-   Enable authentication from web browsers
    -   Authenticate by passing the token in `Sec-WebSocket-Protocol` header when opening the WebSocket connection
        -   Example: `Sec-WebSocket-Protocol: minecraft-v1, <token>`
    -   Requests authenticating this way are subject to Origin header checks. This requires configuration of allowed origins on the server side using `management-server-allowed-origins`. The default value is empty, meaning `Sec-Websocket-Protocol` authentication is effectively disabled

## Data Pack Version 90.0

-   Certain visual and gameplay effects can now be controlled by Environment Attributes

### Commands

-   Resource suggestions now show results in any namespace instead of just within `minecraft`

#### Changed `stopwatch`

-   Switched the order of the id argument
    -   Example: `/stopwatch foo:bar create` is now `/stopwatch create foo:bar`
-   `query` now returns the queried value and takes in a new scale argument
    -   The returned value will be scaled by that argument and truncated
    -   The scale is optional and will default to `1` if omitted
    -   Example: `/stopwatch query foo:bar 20` to get the elapsed time in ticks

### Environment Attributes

Environment Attributes provide a data-driven way to control a variety of visual and gameplay systems.

Each Environment Attribute controls a specific visual or gameplay effect: for example, `minecraft:visual/sky_color` controls the color of the sky, and `minecraft:gameplay/water_evaporates` controls whether water can be placed at a given location.

> **Developer’s Note:** _This system and many of the introduced attributes should be considered very experimental, and may still change significantly in coming snapshots and releases. In the meantime, we would as always love to hear any feedback or suggestions you may have!_

#### Sources

Environment Attribute values can be provided by the following Environment Attribute sources (in order of low to high priority):

-   Dimensions
-   Biomes

The "effective" value of the Environment Attribute (i.e. what will actually show up in game) will be some combination of the values provided by each source according to their priority.

For example, in the following scenario:

-   The `overworld` dimension provides `sky_color = #00ff00` (green)
-   The `plains` biome provides `sky_color = #ff0000` (red)

When the player is in the `plains` biome, they will see the red `sky_color`, while anywhere else in the `overworld` they will see green.

When an Environment Attribute source provides an Environment Attribute, it can:

-   Override the value, such as the `plains` biome overriding the `overworld`'s `sky_color` in the above scenario
-   Apply a modifier to a previous value (see section on Modifiers below)

#### Modifiers

As described in the above example, an Environment Attribute source may simply override the value of a particular attribute. However, it is sometimes also desirable to rather apply a modifier to a value provided by a source with lower priority.

For example, in the following scenario:

-   The `overworld` dimension provides `water_fog_radius = 96.0`
-   The `plains` biome modifies `water_fog_radius` with a `multiply` modifier of `0.85`

When in the `plains` biome, the `water_fog_radius` will be resolved to `96.0*0.85 = 81.6`, while in any other Overworld biome, it will resolve to `96.0`.

The kinds of modifiers available depends on the type of Environment Attribute. The most basic modifier, supported by every Environment Attribute, is the `override` modifier. This behaves purely as an override of the preceding value. If not specified by an Environment Attribute source, the modifier will always be assumed to be `override`.

Full descriptions of the available modifiers and their behaviors can be found in the Common Modifiers section below.

#### Interpolation

While modifiers describe how a value provided by one source is applied on the value from a preceding source, interpolation describes the combination of values within a source. Interpolation is performed on values from a source after modifiers have been applied.

Only some Environment Attributes support interpolation. This allows for the smooth transition between two or more values, such as when moving between two biomes.

##### Biomes

For example, in the following scenario:

-   The `plains` biome provides `sky_color = #ff0000` (red)
-   The `desert` biome provides `sky_color = #ffff00` (yellow)

`sky_color` is one such attribute that will transition smoothly based on position: for example, in the above scenario, as a player moves from a `plains` to a `desert` biome, the sky color will gradually shift from red to yellow. Other attributes, such as `water_evaporates`, represent discrete values and will not be smoothly transitioned - only the biome exactly at a subject position will be considered.

Smooth transitions between biomes are based on the biomes within an 8 block radius of the camera. Biomes that occupy a larger portion of that radius and are closer to the camera will have a stronger influence on the final interpolated value.

#### Environment Attribute Map

Dimension Type and Biome definitions contain a new `attributes` field, enabling them to define Environment Attributes.

This map generally takes the form of an object mapping between Environment Attribute IDs and their corresponding values, for example:

    "attributes": {
        "minecraft:visual/fog_color": "#ffaa00",
        "minecraft:gameplay/water_evaporates": true
    }
    

Values defined as above will always be assumed to use the `override` modifier.

The value object can however be expanded in order to express different modifiers, in the format of an object with the following fields:

-   `modifier`: optional string modifier ID, dependent on the Attribute Type (see the Common Modifiers section below)
    -   Default: `override`
-   `argument`: the modifier argument (format dependent on the chosen modifier)
    -   How the argument is used also depends on the type of modifier

For example, the following definition describes multiplying `water_fog_radius` by 85%:

    "attributes": {
        "minecraft:visual/water_fog_radius": {
            "modifier": "multiply",
            "argument": 0.85
        }
    }
    

#### Common Data Types

The following data types are reused in various parts of the Environment Attributes system and will be referenced in sections below.

##### RGB Color

Format can be one of the following:

-   A hex color RGB string, in the form `#rrggbb`
-   A float array with 3 components, between `0` and `1`, in the form `[r, g, b]`
-   An integer in packed RGB form

##### ARGB Color

Format can be one of the following:

-   A hex color ARGB string, in the form `#aarrggbb`
-   A float array with 4 components, between `0` and `1`, in the form `[a, r, g, b]`
-   An integer in packed ARGB form

##### Particle Options

A full definition of a particle, including any type-specific properties (as in the `/particle` command).

For example:

    {
      "type": "minecraft:block_crumble",
      "block_state": {
        "Name": "minecraft:dirt"
      }
    }
    

#### Common Modifiers

Every Environment Attribute has a specific value type, which describes how values must be defined as well as what modifiers are available and how they are interpolated. Some are very specific, while others are reused across many attributes.

Although this is not an exhaustive list, the following Attribute Types are used commonly across many Environment Attributes:

##### Modifiers on Boolean Values

Argument format: boolean

-   `override`
-   `and`
-   `nand`
-   `or`
-   `nor`
-   `xor`
-   `xnor`

##### Modifiers on Float Values

Argument format: float

-   `override`
-   `add`
-   `subtract`
-   `multiply`
-   `minimum`
-   `maximum`

##### Modifiers on Color Values

Argument format: RGB color (except `alpha_blend`)

-   `override`
-   `add` - component-wise additive color blending
-   `subtract` - component-wise subtractive color blending
-   `multiply` - component-wise multiplicative color blending
-   `alpha_blend` - traditional alpha blending that might be seen in image editing software
    -   Argument format: ARGB Color
    -   When the argument alpha is `1`, it will behave as an override with no blending

#### New Environment Attributes

##### `minecraft:visual/fog_color`

The color of fog (when the camera is not submerged in another substance). Note: the final value is also affected by the time of day, weather, and potion effects.

-   Value type: RGB color
-   Default value: `#000000`
-   Modifiers: Color Modifiers
-   Interpolated: yes
-   Resolved at the camera's position
-   Replaces Biome `effects.fog_color` field

##### `minecraft:visual/extra_fog`

Controls whether dense fog (like that of the Nether) should be used (when the camera is not submerged in another substance).

-   Value type: boolean
-   Default value: `false`
-   Modifiers: Boolean Modifiers
-   Interpolated: no
-   Resolved at the camera's position

##### `minecraft:visual/water_fog_color`

The color of fog when submerged in water. Note: the final value is also affected by the time of day, weather, and potion effects.

-   Value type: RGB color
-   Default value: `#050533`
-   Modifiers: Color Modifiers
-   Interpolated: yes
-   Resolved at the camera's position
-   Replaces Biome `effects.water_fog_color` field

##### `minecraft:visual/water_fog_radius`

The distance in blocks from the camera at which underwater fog reaches its maximum density.  
Note: the final value is also modified by how long the player has been underwater.

-   Value type: non-negative float
-   Default value: `96.0`
-   Modifiers: Float Modifiers
-   Interpolated: yes
-   Resolved at the camera's position
-   Replaces `#has_closer_water_fog` Biome Tag

##### `minecraft:visual/sky_color`

The color of the sky. This color is only visible for the overworld sky. Note: the final value is also affected by the time of day and weather.

-   Value type: RGB color
-   Default value: `#000000`
-   Modifiers: Color Modifiers
-   Interpolated: yes
-   Resolved at the camera's position
-   Replaces Biome `effects.sky_color` field

##### `minecraft:visual/cloud_opacity`

The opacity of clouds. If `0`, clouds are entirely disabled and Happy Ghasts will not regenerate health faster when at cloud height.

-   Value type: float between `0` and `1`
-   Default value: `0.0`
-   Modifiers: Float Modifiers
-   Interpolated: yes
-   Resolved at the camera's position for rendering, or at the position of a Happy Ghast for regeneration

##### `minecraft:visual/cloud_height`

The height at which all clouds appear.

-   Value type: float
-   Default value: `192.33`
-   Modifiers: Float Modifiers
-   Interpolated: yes
-   Resolved at the camera's position for rendering, or at the position of a Happy Ghast for regeneration
-   Replaces Dimension Type `cloud_height` field

##### `minecraft:visual/default_dripstone_particle`

The default particle to be dripped from Dripstone blocks when no fluid is placed above.

-   Value type: Particle Options
-   Default value: `{type:"minecraft:dripping_dripstone_water"}`
-   Modifiers: `override`
-   Interpolated: no
-   Resolved at the position of the Dripstone block
-   Replaces Dimension Type `ultrawarm` field

##### `minecraft:visual/ambient_particles`

Controls ambient particles that randomly spawn around the camera.

-   Value type: list of objects with fields
    -   `particle`: Particle Options to spawn
    -   `probability`: float between `0` and `1`, the probability to spawn the particle in an empty space when randomly ticked
-   Default value: `[]`
-   Modifiers: `override`
-   Interpolated: no
-   Resolved at the camera's position
-   Replaces Biome `effects.particle` field

##### `minecraft:audio/background_music`

Controls how and which background music is played.

-   Value type: object with fields
    -   `default`: optional object with fields:
        -   `sound`: Sound Event to play
        -   `min_delay`: int, minimum delay in ticks between tracks
        -   `max_delay`: int, maximum delay in ticks between tracks
        -   `replace_current_music`: optional boolean, whether this track can replace whatever is currently playing
            -   Default: `false`
        -   If not defined and not overridden, no music will start playing while this attribute is active
    -   `underwater`: optional object with fields in the same format as `default` - if present and the player is underwater, will override `default`
    -   `creative`: optional object with fields in the same format as `default` - if present and the player is in Creative Mode, will override `default`
-   Default value: `{}`
-   Modifiers: `override`
-   Interpolated: no
-   Resolved at the camera's position
-   Replaces Biome `effects.music` field

##### `minecraft:audio/music_volume`

The volume at which music should play. Any music playing will fade over time to this value.

-   Value type: float between `0` and `1`
-   Default value: `1.0`
-   Modifiers: Float Modifiers
-   Interpolated: no
-   Resolved at the camera's position
-   Replaces Biome `effects.music_volume` field

##### `minecraft:audio/ambient_sounds`

Controls which ambient sounds are played around the camera, and when.

-   Value type: object with fields
    -   `loop`: optional Sound Event, sound to be continually looped
    -   `mood`: object with fields, sounds that will be randomly played based on surrounding darkness
        -   `sound`: Sound Event to play
        -   `tick_delay`: int, the number of ticks between mood sounds, assuming a light level of 0
        -   `block_search_extent`: int, the radius in which light levels are sampled
        -   `offset`: double, an additional distance offset to apply to sounds produced
    -   `additions`: list of objects with fields, sounds that will be randomly played
        -   `sound`: Sound Event to play
        -   `tick_chance`: float between `0` and `1`, probability within a tick to play a given sound
-   Default value: `{}`
-   Modifiers: `override`
-   Interpolated: no
-   Resolved at the camera's position
-   Replaces Biome `effects.ambient_sound`, `effects.mood_sound`, and `effects.additions_sound` fields

##### `minecraft:gameplay/can_start_raid`

If `false`, a Raid cannot be started by a player with Raid Omen.

-   Value type: boolean
-   Default value: `true`
-   Modifiers: Boolean Modifiers
-   Interpolated: no
-   Resolved at the position that the Raid would be started
-   Replaces Dimension Type `has_raids` field

##### `minecraft:gameplay/water_evaporates`

If `true`, Water cannot be placed with a Bucket, melting Ice will not produce water, Wet Sponge will dry out when placed, and Dripstone will not produce water from Mud blocks.

-   Value type: boolean
-   Default value: `false`
-   Modifiers: Boolean Modifiers
-   Interpolated: no
-   Resolved at the position of the interaction
-   Replaces Dimension Type `ultrawarm` field

##### `minecraft:gameplay/bed_rule`

Controls whether a Bed can be used to sleep, and whether it can be used to set a respawn point.

-   Value type: object with fields
    -   `can_sleep`: one of:
        -   `always` - the Bed can always be used to sleep (assuming the Bed is not obstructed and there are no monsters nearby)
        -   `when_dark` - the Bed can only be used to be sleep when the global skylight level is less than 4
        -   `never` - the Bed can never be used to sleep
    -   `can_set_spawn` - same as `can_sleep`
    -   `explodes` - optional boolean, if `true` the Bed will explode when interacted with
        -   Default: `false`
    -   `error_message`: optional Text Component, the message to show if the player is unable to sleep or set their spawn
-   Default value: `{type:"can_sleep_when_dark",error_message:{translate:"block.minecraft.bed.no_sleep"}}`
-   Modifiers: `override`
-   Interpolated: no
-   Resolved at the head position of the Bed block
-   Replaces Dimension Type `bed_works` field

##### `minecraft:gameplay/respawn_anchor_works`

Controls whether Respawn Anchors can be used to set spawn (or respawn). If `false`, the Respawn Anchor will explode once charged.

-   Value type: boolean
-   Default value: `false`
-   Modifiers: Boolean Modifiers
-   Interpolated: no
-   Resolved at the position of the Respawn Anchor block
-   Replaces Dimension Type `respawn_anchor_works` field

##### `minecraft:gameplay/nether_portal_spawns_piglin`

Controls whether Nether Portal blocks can spawn Piglins.

-   Value type: boolean
-   Default value: `false`
-   Modifiers: Boolean Modifiers
-   Interpolated: no
-   Resolved at the position of a random Nether Portal block
-   Replaces Dimension Type `natural` field

##### `minecraft:gameplay/fast_lava`

Controls whether Lava should spread faster and further, as well as have a stronger pushing force on entities when flowing.

-   Value type: boolean
-   Default value: `false`
-   Modifiers: Boolean Modifiers
-   Interpolated: no
-   Resolved for a whole dimension (cannot be specified on a Biome)
-   Replaces Dimension Type `ultrawarm` field

##### `minecraft:gameplay/increased_fire_burnout`

Controls whether Fire blocks burn out more rapidly than normal.

-   Value type: boolean
-   Default value: `false`
-   Modifiers: Boolean Modifiers
-   Interpolated: no
-   Resolved at the position of the burning Fire block
-   Replaces `#increased_fire_burnout` Biome Tag

##### `minecraft:gameplay/piglins_zombify`

Controls whether Piglins and Hoglins should zombify.

-   Value type: boolean
-   Default value: `true`
-   Modifiers: Boolean Modifiers
-   Interpolated: no
-   Resolved at the position of the zombifying entity
-   Replaces Dimension Type `piglin_safe` field

##### `minecraft:gameplay/snow_golem_melts`

Controls whether a Snow Golem should be damaged.

-   Value type: boolean
-   Default value: `false`
-   Modifiers: Boolean Modifiers
-   Interpolated: no
-   Resolved at the position of the Snow Golem
-   Replaces `#snow_golem_melts` Biome Tag

#### Dimension Types

-   Added new `attributes` field for dimensions to specify Environment Attributes
    -   Refer to the Environment Attributes section for information about the format of this field
-   Many fields have been migrated to Environment Attributes:
    -   Note: the form of these attributes may not be identical to the original fields
    -   `ultrawarm` -> `minecraft:gameplay/water_evaporates`, `minecraft:gameplay/fast_lava`, `visual/default_dripstone_particle`
    -   `bed_works` -> `minecraft:gameplay/bed_rule`
    -   `respawn_anchor_works` -> `minecraft:gameplay/respawn_anchor_works`
    -   `cloud_height` -> `minecraft:visual/cloud_height`
    -   `piglin_safe` -> `minecraft:gameplay/piglins_zombify`
    -   `has_raids` -> `minecraft:gameplay/can_start_raid`
    -   `natural` (note: not removed) -> `minecraft:gameplay/nether_portal_spawns_piglin`

#### Biomes

-   Added new `attributes` field for biomes to specify Environment Attributes
    -   Refer to the Environment Attributes section for information about the format of this field
    -   Note: certain attributes, such as `gameplay/fast_lava` are not evaluated positionally and thus cannot be set on a Biome
-   Many subfields under `effects` have been migrated to Environment Attributes:
    -   Note: the form of these attributes may not be identical to the original fields
    -   `fog_color` -> `minecraft:visual/fog_color`
    -   `water_fog_color` -> `minecraft:visual/water_fog_color`
    -   `sky_color` -> `minecraft:visual/sky_color`
    -   `particle` -> `minecraft:visual/ambient_particles`
    -   `ambient_sound`, `mood_sound`, `additions_sound` -> `minecraft:audio/ambient_sounds`
    -   `music` -> `minecraft:audio/background_music`
    -   `music_volume` -> `minecraft:audio/music_volume`

### Item Components

#### `minecraft:kinetic_weapon`

-   Added new field:
    -   `contact_cooldown_ticks`: integer, the cooldown in ticks after hitting, and loosing contact with an entity before being able to hit it again
        -   Default value: `10`

#### Biome Tags

-   Removed `#snow_golem_melts` and `#increased_fire_burnout` - replaced by `gameplay/snow_golem_melts` and `gameplay/increased_fire_burnout` Environment Attributes
-   Removed `#plays_underwater_music` - replaced by `only_underwater` field in the `audio/background_music` Environment Attribute
-   Removed `#has_closer_water_fog` - replaced by `visual/water_fog_radius` Environment Attribute

## Resource Pack Version 70.1

### Sounds

-   Added new sound events for the Nautilus:
    -   `entity.nautilus.riding`

## Fixed bugs in 25w42a

-   [MC-263562](https://bugs.mojang.com/browse/MC-263562) World types in Realms backup info screen are untranslatable
-   [MC-298405](https://bugs.mojang.com/browse/MC-298405) Text components in the "label" of input controls in dialogs don't support "hover\_event"
-   [MC-299876](https://bugs.mojang.com/browse/MC-299876) Labels for booleans within dialogs are rendered in a slightly different shade of white than normal
-   [MC-301271](https://bugs.mojang.com/browse/MC-301271) Object text components do not render in some places unless there are text glyphs on the same line
-   [MC-301518](https://bugs.mojang.com/browse/MC-301518) The mouse cursor doesn’t change to the hand shape when hovering over checkboxes
-   [MC-301520](https://bugs.mojang.com/browse/MC-301520) The mouse cursor doesn’t change to the hand shape when hovering over the difficulty lock button
-   [MC-301557](https://bugs.mojang.com/browse/MC-301557) The shading direction of the bolts on single and large copper chests does not match
-   [MC-301879](https://bugs.mojang.com/browse/MC-301879) Double weathered and waxed weathered copper chests' bottom texture looks off compared to the other variants
-   [MC-302071](https://bugs.mojang.com/browse/MC-302071) Single and double copper chests have inconsistent side textures
-   [MC-302246](https://bugs.mojang.com/browse/MC-302246) Sprite object component does not render in server list depending on component tree
-   [MC-302409](https://bugs.mojang.com/browse/MC-302409) Lightning that strikes waxed lightning rods do not deoxidize nearby unwaxed copper blocks
-   [MC-302656](https://bugs.mojang.com/browse/MC-302656) Skeleton horses burn in the sunlight
-   [MC-302657](https://bugs.mojang.com/browse/MC-302657) The "subtitles.entity.nautilus.eat" string misspells the word “Nautilus” as “Nauilus”
-   [MC-302664](https://bugs.mojang.com/browse/MC-302664) Piglins aren't attracted to golden nautilus armor
-   [MC-302672](https://bugs.mojang.com/browse/MC-302672) "Invalid player data" error when loading a world in which you have an effect applied
-   [MC-302680](https://bugs.mojang.com/browse/MC-302680) Zombie horses and zombie nautiluses cannot be spawned in Peaceful difficulty
-   [MC-302683](https://bugs.mojang.com/browse/MC-302683) The "Confirm Command Execution" dialog is popped up for commands with a permission level of 0
-   [MC-302729](https://bugs.mojang.com/browse/MC-302729) Blast furnaces do not smelt nautilus armor
-   [MC-302732](https://bugs.mojang.com/browse/MC-302732) Performing a charge attack with a spear in your off hand applies the effects from the enchantments present on the item held in the main hand
-   [MC-302743](https://bugs.mojang.com/browse/MC-302743) Repeatedly using a spear keeps performing charge attacks every 10 ticks
-   [MC-302767](https://bugs.mojang.com/browse/MC-302767) Holding a spear in Spectator mode and performing a jab attack plays the jab sound
-   [MC-302783](https://bugs.mojang.com/browse/MC-302783) Baby nautiluses use #minecraft:nautilus\_taming\_items instead of #minecraft:nautilus\_food for growing up
-   [MC-302802](https://bugs.mojang.com/browse/MC-302802) Spear charge attack breaks item frames when still
-   [MC-302813](https://bugs.mojang.com/browse/MC-302813) Zombified piglins no longer appear to sprint or make any angry noises when angry
-   [MC-302816](https://bugs.mojang.com/browse/MC-302816) When running NBT to SNBT conversion, the program waits for 1 minute after completion
-   [MC-302817](https://bugs.mojang.com/browse/MC-302817) Spears with Fire Aspect can ignite victims even when the attacks are blocked
-   [MC-302818](https://bugs.mojang.com/browse/MC-302818) Zombie horsemen can occasionally spawn holding something other than an iron spear
-   [MC-302827](https://bugs.mojang.com/browse/MC-302827) Spears can jab through walls
-   [MC-302834](https://bugs.mojang.com/browse/MC-302834) Wolves' eyes don't turn red when angry
-   [MC-302838](https://bugs.mojang.com/browse/MC-302838) Extreme TPS lag when using high Lunge levels with Unbreaking
-   [MC-302842](https://bugs.mojang.com/browse/MC-302842) Nautiluses and zombie nautiluses never despawn
-   [MC-302920](https://bugs.mojang.com/browse/MC-302920) "scoreboard players display" settings sometimes reset on world load
-   [MC-302924](https://bugs.mojang.com/browse/MC-302924) Players can no longer be invited to realms
-   [MC-302984](https://bugs.mojang.com/browse/MC-302984) Holding a spear in the off hand and attacking an entity adds the spear's attack damage to the attack
-   [MC-302988](https://bugs.mojang.com/browse/MC-302988) Bees no longer get angry at players or mobs
-   [MC-303083](https://bugs.mojang.com/browse/MC-303083) Searching in the resource/data pack selection screens doesn't properly scroll to the results
-   [MC-303089](https://bugs.mojang.com/browse/MC-303089) Level 3 operators cannot use client-side operator features

---

It's Snapshot Tues- I mean Thursday, everyone! Today, we are kicking off a brand-new Snapshot series and with it comes the first set of features from our upcoming game drop, Mounts of Mayhem! Charge into the fray with the spear, a new weapon with a unique enchantment. Explore the oceans atop your nautilus or claim undead mounts – the zombie horse and zombie nautilus – as your new steeds. Galloping side to side with these new features is both a revamped video settings screen that includes nifty new graphical presets, as well as the new stopwatch command which keeps track of real time. Bug fixes and technical changes round off the meal, as is tradition.

Happy mining!

## New Features

-   Added Nautilus and Zombie Nautilus
-   Added Nautilus Armor
-   Added Spear Weapon
-   Updated advancements to include Nautilus, Zombie Nautilus, and the Zombie Horse

### Nautilus

-   Nautilus is a new neutral aquatic mob
-   Spawns in all ocean biomes
-   Attacks using a Dash attack, if provoked
-   Occasionally attacks Pufferfish within range using the Dash attack
-   Has a Dash skill similar to Camels, used by pressing the Jump button
-   Takes suffocation damage on land
-   Adds the "Breath of the Nautilus" effect to mounted players
-   Nautilus can be bred and tamed using Pufferfish or a Bucket of Pufferfish
-   A Tamed Nautilus:
    -   Can be mounted using a Saddle
    -   With a Saddle has a roaming restriction of 16 blocks
    -   Without a Saddle has a roaming restriction of 32 blocks

#### Zombie Nautilus

-   Zombie Nautilus is a new underwater mob that spawns with a Drowned rider wielding a Trident
-   Zombie Nautilus is only hostile if ridden by a hostile mob
-   Zombie Nautilus behaves similar to the Nautilus except that it cannot be bred

### Nautilus Armor

-   Equippable on the Nautilus and Zombie Nautilus
-   Comes in Copper, Golden, Iron, Diamond and Netherite versions

### Spear Weapon

-   New weapon that can be crafted in Wood, Stone, Copper, Iron, Gold, Diamond and Netherite versions
-   Each material has different stats for timing, influencing how fast they are to use
-   Has a minimum reach for damage, being too close to a target will yield no damage
-   Has extended maximum reach compared to other tools and weapons
-   Has two attacks. Jab and Charge
-   Zombies, Husks, Zombified Piglins and Piglins can spawn with the Spear

#### Jab Attack

-   Quick-press primary action button to use
-   Low damage attack with knockback
-   Cooldown between attacks
-   Wooden Spears have the fastest cooldown; Netherite the slowest
-   Can hit multiple enemies
-   Does not destroy blocks

#### Charge Attack

-   Press and hold the secondary action button to use
-   Damage is based on Spear material, the player’s view angle, and the velocity of both the player and the target
-   While holding down the button, the attack goes through three stages before returning to idle:
    -   Engaged: The Spear can deal damage, knockback, and dismount mounted enemies if the speed is above the required thresholds
    -   Tired: Indicated by the Spear rotating to a vertical position and shaking. The Spear can deal damage and knockback (but not dismount) if the speed is above the required thresholds
    -   Disengaged: Indicated by the Spear being lowered, pointing downwards. The Spear gives damage but not knockback or dismount if the speed is above the required threshold
-   The Spear's range when used by mobs is half of that when used by players, but they can deal damage, dismount and knockback at lower speeds than the players
-   Zombies, Husks and Zombified Piglins know how to charge with a Spear

#### Lunge Enchantment

-   Spear exclusive enchantment
-   Only works with the Jab attack
-   When doing a Jab attack with Lunge, it propels the player horizontally in the view direction
-   The view angle needs to be perfectly leveled horizontally to achieve maximum lunge distance
-   Does significant durability damage to the Spear

### Advancements

-   Updated the "How did we get here?" advancement to include the `Breath of the Nautilus` effect
-   Updated the "Best Friends Forever" advancement to include the Nautilus, Zombie Nautilus, and the Zombie Horse
-   Updated the "The Parrots and the Bats" advancement to include the Nautilus
-   Updated the "Two by Two" advancement to include the Nautilus
-   Updated the "Monster Hunter" advancement to include the Zombie Nautilus
-   Updated the "A Throwaway Joke", "Take Aim" and "It Spreads" advancements to include the Nautilus and Zombie Nautilus

## Changes

-   Zombies, Husks, Piglins and Zombified Piglins can now hold Spears
-   Piglins now consider Golden Spears as one of the items they like
-   Items will no longer "bob" whenever their durability changes, such as when losing durability from an attack, or repaired by Mending
-   Some changes were made to debug renderers
-   Graphics modes "Fast", "Fancy", and "Fabulous!" have been replaced with graphics presets with the same names
-   Cloud movement is now the same for all players on a server
-   Netherite Armor points have been increased for the Body slot from 11 to 19
-   All blocks in the world now have mipmaps applied if enabled in video settings
    -   Blocks that did not have mipmaps before, such as different vines, rails, folliage (apart from leaves) and more should look better from higher distances
-   Client FPS is expected to be higher for most players

### Zombie Horse

-   Zombie Horses now spawn naturally
-   Zombie Horses spawn in darkness, and burn in sunlight like other undead mobs
-   Zombie Horses count towards the hostile mob cap and spawn with other hostile mobs
-   Zombie Horses do not display any hostile behavior towards players. Their hostility resides solely in their Zombie rider
-   Untamed Zombie Horses despawn like other hostile mobs
-   Tamed Zombie Horses are persistent and do not despawn
-   Zombie Horses can be tamed in the same fashion as regular Horses, and can then be mounted and controlled by a player
-   Zombie Horses can be healed and tempted using Red Mushrooms
-   Tamed Zombie Horses can be equipped with a Saddle and Horse Armor
-   Horse Armor protects Zombie Horses from sunlight damage
-   Zombie Horses have 25 health points (12.5 hearts) of health
-   Zombie Horses have variable movement speed and jump strength, determined when they spawn
-   Zombie Horses drops 2-3 Rotten Flesh when killed, with extra 0-1 for each level of Looting
-   Zombies riding Zombie Horses now have a chance of dropping a Red Mushroom on death

### Mob Spawning

-   Zombie Horses now has a chance to spawn in plains and savanna biome types, with a zombie rider holding an iron spear

### World Generation

-   Added various spears to various loot chests around the world
    -   Iron Spears can be found in Buried Treasure chests
    -   Copper and Iron Spears can be found in Weaponsmith chests in villages
    -   Stone Spears can be found in Ocean Ruin chests
    -   Diamond Spears can be found in Bastion Remnant and End City chests
-   Copper, Iron, Golden, and Diamond Nautilus Armor now have a chance to be found in the Chests for the following Structures:
    -   Buried Treasure
    -   Ocean Ruins
    -   Shipwreck

### Status Effects

-   Added `Breath of the Nautilus` effect
    -   Effect that affects mounted players
    -   Pauses player oxygen consumption (but does not replenish oxygen)

### Sounds

-   Anvil destroy, land, place and use sounds now play at a slightly lower volume

### Accessibility

-   Keys used to access debug features can now be rebound
    -   It is part of a new `Debug` category in the Key Binds screen
-   The debug modifier key can be bound separately from the debug overlay key
-   The key to toggle GUI can now be rebound
-   The key to toggle spectator shader effects, such as when spectating an enderman, can now be rebound

### Input

Several uses of the `cmd` key on Mac have been rebound to `ctrl`:

-   The input modfier to drop all items
-   The input modfier to include all the data when picking a block
-   The input modfier to change GUI scale in the Video Settings screen
-   Stopping the recipe book from cycling through variations of items

### Debug Renderer Changes

-   Same as before, do not treat debug renderers as supported features, they are there only to aid with development
-   More debug renderers are now available through the Debug Settings screen
-   Some existing renderers were improved
-   The performance of debug renderers has been significantly improved

### Graphics Presets

-   Settings on the Video Settings screen have been reordered and split into 3 sections: "Display", "Quality & Performance", and "Interface"
-   The following settings that were duplicating accessibility settings have been removed from the Video Settings screen:
    -   "View Bobbing"
    -   "Glint Speed"
    -   "Glint Strength"
    -   "FOV Effects"
    -   "Distortion Effects"
-   Tweaks that were previously hidden behind the "Graphics" setting have been split out to be configurable independently:
    -   "See-Through Leaves"
    -   "Show Vignette"
    -   "Weather Effect Radius" configures the distance in blocks within which rain and snow are visible
    -   "Improved Transparency" resolves some of the transparent geometry rendering issues at a significant GPU cost, previously was hidden behind "Fabulous!"
-   A new "Preset" slider was added to the top of the "Quality & Performance" section
    -   Presets, as you would expect based on gaming industry standard, control most of the "Quality & Performance" settings at once, not only the ones that were previously hidden behind the "Graphics" setting
    -   Available presets are "Fast", "Fancy", "Fabulous!" and "Custom"
    -   The default preset is "Fancy" for new players
    -   But for players who are upgrading to this version the preset will be set to "Custom" to preserve your current configuration

### UI

-   Menu sliders will now "stick" to the closest available value when you release them after dragging with a mouse
-   When using keyboard to change slider values, arrow keys will now move the slider to the next available value, not by one pixel as before
-   The `inF3` button in the Debug Option screen has been renamed to `inOverlay`

## Technical Changes

-   The Data Pack version is now 89.0
-   The Resource Pack version is now 70.0
-   The Minecraft Server Management Protocol version is now 1.1.0
-   Added ClientFps JFR event
-   Experience packets that do not change the player's experience progress or level are no longer sent by the server

### Minecraft Server Management Protocol Version 1.1.0

-   Added a new notification `server/activity`
    -   Indicates that a network connection to the server has been initiated
    -   Rate limited to 1 notification per 30 seconds

## Data Pack Version 89.0

-   Added `stopwatch` command for keeping track of real time

### Commands

#### Added `stopwatch`

-   New command that allows the creation of a Stopwatch that keeps track of real time
-   Stopwatches do not depend on game ticks
-   They only run when the server/world is running, even when paused

Syntax:

-   `stopwatch <id> create` - creates a Stopwatch with the given namespaced ID
-   `stopwatch <id> query` - shows the elapsed time in seconds of the given Stopwatch in chat
-   `stopwatch <id> restart` - restarts the given Stopwatch
-   `stopwatch <id> remove` - removes the given Stopwatch

> **Developer's Note**: _This command is added to replace the need of using world borders to keep track of real time. The intent is to change the world border to be dependent on game ticks in a future snapshot. If you've relied on this way of measuring the passage of real time before, please switch to using the new command and let us know if anything doesn't work as intended. Thank you!_

#### `execute`

-   Added new syntax `/execute if|unless stopwatch <id> <range>`
-   Allows to compare the elapsed time of a given Stopwatch with a floating point value range
    -   The Stopwatch value is measured in seconds and has an accuracy of at most a millisecond
    -   Example: `/execute if stopwatch foo:bar ..10 run say Stopwatch foo:bar has not reached 10 seconds yet`

### Item Components

#### Added `minecraft:use_effects`

-   Controls how the player behaves when using an item (right mouse click)
-   Format: object with fields
    -   `can_sprint`: boolean, whether the player can sprint while using this item
        -   Default value: `false`
    -   `speed_multiplier`: float (0 to 1), the speed multiplier applied to the player while using this item
        -   Default value: `0.2`
    -   e.g. `use_effects={can_sprint:true,speed_multiplier:1.0}`

#### Added `minecraft:minimum_attack_charge`

-   Sets the minimum attack charge on the attack indicator required to attack with this item
-   Format: float (0.0 to 1.0)
    -   0.0: no charge required
    -   1.0: full charge required

#### Added `minecraft:damage_type`

-   Specifies the type of damage this item deals
-   Format: string, damage type identifier
    -   e.g. `damage_type='minecraft:spear'`

#### Added `minecraft:kinetic_weapon`

-   Enables a charge-type attack when using the item (primarily for Spears), where, while being used, the damage is dealt along a ray every tick based on the relative speed of the entities
-   Format: object with fields
    -   `min_reach`: float, the minimum distance in blocks from the attacker to the target to be considered valid
        -   Default value: `0.0`
    -   `max_reach`: float, the maximum distance in blocks from the attacker to the target to be considered valid
        -   Default value: `3.0`
    -   `hitbox_margin`: float, the margin applied to the target bounding box when checking for valid hitbox collision
        -   Default value: `0.3`
    -   `delay_ticks`: integer, the time in ticks required before weapon is effective
        -   Default value: `0`
    -   `dismount_conditions`, `knockback_conditions`, `damage_conditions`: indicating the condition to apply dismount, knockback and damage effects respectively. Objects with fields:
        -   `max_duration_ticks`: integer, the ticks after which the condition is no longer checked. This starts after `delay` has elapsed
        -   `min_speed`: float, the minimum speed of the attacker, in blocks per second, along the direction that the attacker is looking
            -   Optional, default value: `0.0`
        -   `min_relative_speed`: float, the minimum relative speed between the attacker and target, in blocks per second, along the direction that the attacker is looking
            -   Optional, default value: `0.0`
    -   `forward_movement`: float, the distance the item moves out of hand during animation
        -   Default value: `0.0`
    -   `damage_multiplier`: float, the multiplier for the final damage from the relative speed
        -   Default value: `1.0`
    -   `sound`: Optional Sound Event to play when the weapon is engaged
    -   `hit_sound`: Optional Sound Event to play when the weapon hits an entity
    -   e.g. `kinetic_weapon={max_reach:5.0,forward_movement:1.0,delay:20,damage_conditions:{max_duration:60},knockback_conditions:{max_duration:40},dismount_conditions:{max_duration:20}}`
-   The damage dealt is calculated as `floor(relative_speed * velocity_multiplier)` where `relative_speed` is the difference of speed vectors of the attacker and the target as projected onto the axis of the attacker's view vector
    -   Any additional damage from enchantments or attribute modifiers is added after this calculation

#### Added `minecraft:piercing_weapon`

-   Enables a quick attack that damages multiple entities along a ray (primarily for Spears)
-   Format: object with fields
    -   `min_reach`, `max_reach`, `hitbox_margin`: as in `kinetic_weapon`
    -   `deals_knockback`: boolean, whether the attack deals knockback
        -   Default value: `true`
    -   `dismounts`: boolean, whether the attack dismounts the target
        -   Default value: `false`
    -   `sound`: Optional Sound Event to play when a player attacks with the weapon
    -   `hit_sound`: Optional Sound Event to play when the weapon hits an entity
    -   e.g. `piercing_weapon={min_reach:0,max_reach:4,dismounts:true}`

#### Added `minecraft:swing_animation`

-   Specifies the swing animation to play when attacking or interacting using this item
-   Format: object with fields
    -   `type`: string, the animation identifier (`none`, `whack`, `stab`)
        -   Default value: `whack`
    -   `duration`: integer, the duration in ticks
        -   Default value: `6`
    -   e.g. `swing_animation={type:'stab',duration:20}`

#### Changed `minecraft:consumable`

-   The `animation` field has been updated:
    -   Renamed `spear` to `trident`
    -   Added new `spear` animation

#### Changed `minecraft:intangible_projectile`

-   Items with this component now show information about it in their tooltip

### Entity Data

-   The `AngryAt` field has been renamed to `angry_at`
-   The `AngerTime` field has been removed
-   An `anger_end_time` (long) field has been added, containing the time anger ends in game ticks

### Damage Types

-   Added a new `minecraft:spear` damage type

### Predicates

#### Component Predicates

-   Component predicates (`predicates` field in block, item and entity predicates) now include predicates for checking existence of every component type
-   Those predicates are written as `{<component_type>: {}}`
-   Such predicate check passes as long as component is present, no matter the actual value
-   Existing predicates for specific components remain unchanged
-   Example:
    -   `{predicates:{written_book_content:{author:"foo"}}` - existing format for matching books
    -   `{predicates:{written_book_content:{}}` - special case of above that accepted any value, as long as component existed
    -   `{predicates:{instrument:{}}` - checks if component `minecraft:instrument` exists (was not allowed before)

#### Entity Predicates

The `flags` predicate now supports new values:

-   `is_in_water`: when an entity is touching water or a bubble column
-   `is_fall_flying`: when an entity is gliding with an elytra

#### Item Predicates

-   Item predicate in command form (`<item>[predicate~{...},component={...}]`) has been extended to accept empty predicates for any component type
-   Similarily to component predicates in data, those empty entries only check for component existence
-   Existing shorter syntax for checking component existence remains unchanged
    -   That means `*[instrument]` and `*[instrument~{}]` are equivalent

### Enchantments

#### Enchantment Effect Components

-   `minecraft:post_piercing_attack`: Effects applying after a piercing attack with an item

#### Enchantment Entity Effects

-   `minecraft:apply_impulse`: applies an impulse to the targeted entity
    -   `direction` - The first step of determining the impules is applying this vector as local coordinates (the same used by `tp @s ^ ^ ^`) onto the entity look vector
    -   `coordinate_scale` - The second step is scaling the resulting vector by this vector on each axis in world space, X, Y and Z
    -   `magnitude` - The third step is scaling the resulting vector by this Level-Based Value
-   `minecraft:play_sound`: can now support a list of sound event identifiers, one for each level of enchantment. If a level is higher than the number of sounds, the last sound in the list is used

##### Added `exponent`

-   Raises the base to the specified power level.
    -   `base` - Level-Based Value indicating the base of the exponent.
    -   `power` - Level-Based Value indicating the power of the exponent.

### Tags

#### Block Tags

-   Added `#can_glide_through` - climbable blocks that can be glided through without stopping

#### Item Tags

-   Added `#nautilus_taming_items` - items that can be used to tame a Nautilus and a Zombie Nautilus
-   Added `#nautilus_bucket_food` - bucketed fish items that can be used to feed a tamed Nautilus and Zombie Nautilus
-   Added `#nautilus_food` - all items that can be used to feed a tamed Nautilus and Zombie Nautilus
-   Added `#spears` - all Spear weapons
-   Added `#enchantable/lunge` - all items that can be enchanted with the `lunge` enchantment
-   Added `#enchantable/melee_weapon` - all primary melee weapons including Swords and Spears
-   Renamed `#enchantable/sword` to `#enchantable/sweeping`

#### Entity Tags

-   Added `#can_wear_nautilus_armor` - entities that can equip Nautilus Armor
-   Added `#nautilus_hostiles` - entities that the Nautilus will be hostile towards when untamed
-   Changed `#not_scary_for_pufferfish` to include Nautilus and Zombie Nautilus
-   Added `#burn_in_daylight` - entities that burn in daylight

#### Enchantment Tags

-   Added `#lunge_exclusive` - all enchantments incompatible with the `lunge` enchantment

## Resource Pack Version 70.0

-   Unifont has been updated to 17.0.01

## Textures

-   `texture` section of `*.mcmeta` files has a new boolean field `darkened_cutout_mipmap`
    -   The default value is `false`
    -   It is set to true for the block textures that had mipmaps before this version: all Leave types and Mangrove Roots
    -   If the field is set to `true` and the texture is cutout the mipmaps will be darkened to emulate the darker interior of the block, this was the behavior for cutout mipmapped blocks before this version
    -   Leaving the field unset or setting it to `false` will generate mipmaps without darkening, and it fits well for other types of cutout blocks that do not have dark interior such as flowers, grasses, vines, rails, etc
-   Only mipmaps of level 0 and 1 are now animated for block animated textures
-   Glass and Glass Pane now support translucent textures

### Item Sprites

-   Added new item sprites:
    -   `item/nautilus_spawn_egg`
    -   `item/zombie_nautilus_spawn_egg`
    -   `item/copper_nautilus_armor`
    -   `item/iron_nautilus_armor`
    -   `item/golden_nautilus_armor`
    -   `item/diamond_nautilus_armor`
    -   `item/netherite_nautilus_armor`
-   Added the following item sprites for the Spear weapon:
    -   When in inventory: `item/wooden_spear`, `item/stone_spear`, `item/copper_spear`, `item/iron_spear`, `item/golden_spear`, `item/diamond_spear`, `item/netherite_spear`
    -   When in hand: `item/wooden_spear_in_hand`, `item/stone_spear_in_hand`, `item/copper_spear_in_hand`, `item/iron_spear_in_hand`, `item/golden_spear_in_hand`, `item/diamond_spear_in_hand`, `item/netherite_spear_in_hand`

### UI Sprites

-   Added new UI sprite:
    -   `container/slot/nautilus_armor`
    -   `container/slot/spear` - Spear icon used in the Smithing Table screen
-   Added new nine-sliced sprites:
    -   `container/inventory/effect_background`
    -   `container/inventory/effect_background_ambient`
-   Removed the following sprites:
    -   `container/inventory/effect_background_large`
    -   `container/inventory/effect_background_small`

### Celestials Atlas

-   A new `celestials` atlas has been introduced, including sprites for objects rendered in the sky such as the Sun and Moon
-   Includes sprites from `<namespace>:textures/environment/celestial/<path>.png`
-   The following textures have been moved or split:
    -   `textures/environment/sun.png` -> `sun`
    -   `textures/environment/end_flash.png` -> `end_flash`
    -   `textures/environment/moon_phases` -> `moon/full_moon`, `moon/waning_gibbous`, `moon/third_quarter`, `moon/waning_crescent`, `moon/new_moon`, `moon/waxing_crescent`, `moon/first_quarter`, `moon/waxing_gibbous`

### Mob Effect Sprites

-   Added new mob effect sprite:
    -   `breath_of_the_nautilus`

### Entity Textures

-   Added new entity textures:
    -   `entity/nautilus/nautilus.png`
    -   `entity/nautilus/nautilus_baby.png`
    -   `entity/nautilus/zombie_nautilus.png`
    -   `entity/equipment/nautilus_body/copper.png`
    -   `entity/equipment/nautilus_body/iron.png`
    -   `entity/equipment/nautilus_body/gold.png`
    -   `entity/equipment/nautilus_body/diamond.png`
    -   `entity/equipment/nautilus_body/netherite.png`
    -   `entity/equipment/nautilus_saddle/saddle.png`

### Sounds

-   Added new sounds for Spears:
    -   `item.spear.hit`
    -   `item.spear.use`
    -   `item.spear.attack`
-   Added special sounds for the Wooden Spear:
    -   `item.spear_wood.hit`
    -   `item.spear_wood.use`
    -   `item.spear_wood.attack`
-   Added new sound events for the Lunge Enchantment:
    -   `item.spear.lunge_1`
    -   `item.spear.lunge_2`
    -   `item.spear.lunge_3`
-   Added new sound events for the Nautilus:
    -   `entity.baby_nautilus.ambient`
    -   `entity.baby_nautilus.death`
    -   `entity.baby_nautilus.eat`
    -   `entity.baby_nautilus.hurt`
    -   `entity.baby_nautilus.swim`
    -   `entity.nautilus.ambient`
    -   `entity.nautilus.death`
    -   `entity.nautilus.dash`
    -   `entity.nautilus.dash_ready`
    -   `entity.nautilus.eat`
    -   `entity.nautilus.hurt`
    -   `entity.nautilus.swim`
    -   `entity.zombie_nautilus.ambient`
    -   `entity.zombie_nautilus.death`
    -   `entity.zombie_nautilus.dash`
    -   `entity.zombie_nautilus.dash_ready`
    -   `entity.zombie_nautilus.eat`
    -   `entity.zombie_nautilus.hurt`
    -   `entity.zombie_nautilus.swim`
    -   `item.nautilus_armor.equip`
    -   `item.nautilus_armor.unequip`
-   Added new sound event for the Zombie Horse:
    -   `entity.zombie_horse.angry`

### Item Models

-   Added new option for all item models: `swap_animation_scale`
    -   Defaults to `1.0`
    -   Indicates how fast the item moves up and down when swapping items in hotbar
    -   Large speeds can allow items that take more of the screen space to fully duck before swapped into the next item

Added new item model:

-   `spear_in_hand` - model for the Spear when in hand.

## Fixed bugs in 25w41a

-   [MC-22882](https://bugs.mojang.com/browse/MC-22882) Ctrl + Q doesn't work on Mac
-   [MC-54989](https://bugs.mojang.com/browse/MC-54989) Sliders can be moved to positions between available values
-   [MC-80476](https://bugs.mojang.com/browse/MC-80476) On macOS, the "drop item stack" shortcut conflicts with the "quit Minecraft" shortcut
-   [MC-114265](https://bugs.mojang.com/browse/MC-114265) Mipmaps are too dark around transparent edges in textures (e.g. side of grass)
-   [MC-146862](https://bugs.mojang.com/browse/MC-146862) Long effect names cause text to appear outside the effect box
-   [MC-147718](https://bugs.mojang.com/browse/MC-147718) F1, F3, F3+\[char\] combos cannot be rebound
-   [MC-159275](https://bugs.mojang.com/browse/MC-159275) Map player markers on maps of the nether don't rotate when doDaylightCycle is disabled
-   [MC-162573](https://bugs.mojang.com/browse/MC-162573) A white outline is rendered on composters' edges when viewed from far away
-   [MC-171688](https://bugs.mojang.com/browse/MC-171688) Invisibility status of LivingEntity is not updated when ActiveEffects are modified directly
-   [MC-195505](https://bugs.mojang.com/browse/MC-195505) Short grass is unaffected by mipmap levels
-   [MC-234358](https://bugs.mojang.com/browse/MC-234358) Moiré patterns / aliasing on certain objects when viewed from a distance
-   [MC-241862](https://bugs.mojang.com/browse/MC-241862) It sometimes requires multiple keyboard inputs to change values on sliders
-   [MC-248499](https://bugs.mojang.com/browse/MC-248499) Potion UIs displayed within the inventory don't have cyan outlines if the effects are granted by beacons or conduits
-   [MC-264151](https://bugs.mojang.com/browse/MC-264151) Glass blocks do not use mipmapping, but glass panes do
-   [MC-267364](https://bugs.mojang.com/browse/MC-267364) Teleporting in the air is considered flying by server
-   [MC-271941](https://bugs.mojang.com/browse/MC-271941) Music discs can sometimes spawn inside jukeboxes when ejected from them
-   [MC-276445](https://bugs.mojang.com/browse/MC-276445) Highlighted text within the anvil and creative inventory interfaces renders blue making it difficult to read
-   [MC-278742](https://bugs.mojang.com/browse/MC-278742) Creakings cannot be ridden by any entities using commands
-   [MC-279076](https://bugs.mojang.com/browse/MC-279076) Certain mobs will always retarget the player upon reloading the chunks, regardless of distance or gamemode
-   [MC-295949](https://bugs.mojang.com/browse/MC-295949) Flying through vines with an elytra cancels the flight
-   [MC-296952](https://bugs.mojang.com/browse/MC-296952) F4 key to toggle shaders cannot be rebound
-   [MC-297328](https://bugs.mojang.com/browse/MC-297328) Unloading and reloading an area causes invisible entities to be visible until you get close enough.
-   [MC-297367](https://bugs.mojang.com/browse/MC-297367) Checkbox filled status isn't narrated
-   [MC-298767](https://bugs.mojang.com/browse/MC-298767) Piercing arrows phase through mobs that are in the same block
-   [MC-298915](https://bugs.mojang.com/browse/MC-298915) Multishot crossbows loaded in survival or adventure mode show their secondary charged projectiles on a separate line in the tooltip
-   [MC-299196](https://bugs.mojang.com/browse/MC-299196) Waypoints fade out when an advancement is granted
-   [MC-300979](https://bugs.mojang.com/browse/MC-300979) The movement and duration messages in the demo introduction screen now have a text shadow
-   [MC-301595](https://bugs.mojang.com/browse/MC-301595) Music toasts briefly appear in the pause menu after a song has finished
-   [MC-301632](https://bugs.mojang.com/browse/MC-301632) Comparators measuring jukeboxes do not update when a music disc is taken out of a jukebox if the music disc has already finished its song
-   [MC-301754](https://bugs.mojang.com/browse/MC-301754) The hand animation plays when right-clicking shelves with nothing in your hand
-   [MC-301763](https://bugs.mojang.com/browse/MC-301763) The outline of the “Invited” element within the realms “Players” tab renders above other tabs when selected and when a scroll bar is present
-   [MC-301805](https://bugs.mojang.com/browse/MC-301805) Selected item outline on statistics screen renders outside of scissor area
-   [MC-302030](https://bugs.mojang.com/browse/MC-302030) Setting commandBlocksEnabled to false prevents command blocks from being edited
-   [MC-302254](https://bugs.mojang.com/browse/MC-302254) Cursor changes do not work for command suggestions
-   [MC-302288](https://bugs.mojang.com/browse/MC-302288) All shelves have the oak tan map color
-   [MC-302549](https://bugs.mojang.com/browse/MC-302549) Server main thread deadlock during respawn position resolution when the entire world spawn radius is filled with fluids
-   [MC-302601](https://bugs.mojang.com/browse/MC-302601) A white outline is rendered on anvils' top texture when viewed from far away

---

A new week, and a new snapshot. This one includes another big batch of bug fixes, copper golem polishing and our beloved friend can now open doors.

Happy mining!

## Changes

-   OpenGL 3.3 is now required to play the game, up from 3.2. This does not change our posted Minimum Requirements

> **Developer’s Note:** _We do not expect the update to OpenGL version to affect many people, if any at all. Our posted Minimum Requirements has been OpenGL 4.0 since 2017, and OpenGL 3.3 turned 15 years old recently._

### Minor Tweaks to Blocks, Items and Entities

-   Fixed a bug where breaking a Shelf while another player is interacting with it could lead to visual bugs in the player inventory
-   Copper Golems hitbox has been tweaked
    -   The hitbox is now 0.49 blocks in width to be able to pathfind through narrow spaces
-   Copper Golems can now open doors
-   Test Instance Blocks now preserve error markers between world reloads
-   Ambient lighting on entities has been adjusted to be more visually in line with blocks and other parts of the game
    -   The underside of flat surfaces will now be lit from that direction, instead of the opposite direction
    -   This mainly affects models containing cubes that are either flat or "hollow" such as:
        -   Worn armor
        -   Worn Elytra
        -   The outside layers on player skins
        -   The ribcages of Skeletons or Skeleton Horses
        -   The feet of Chickens or Frogs
        -   The wings of Phantoms or the Ender Dragon
        -   The fins on fish
        -   And more!

### Game Mode Switching

-   Switching from Spectator Mode to Creative Mode no longer causes the player to stop flying
    -   Instead, flight now only gets disabled when switching game modes if the player is near the ground
        -   A player is considered to be near the ground if there is a collidable surface (i.e. blocks, Happy Ghasts, boats...) within 1 block below them
    -   Flight will not get disabled if the player was inside a block or collidable entity
        -   This is to prevent players from suddenly falling through the ground

> **Developer's Note**: _This change is a partial revert of a bugfix from a previous snapshot. Even though the old behavior prior to the fix was unintended, the approach we took to fixing flight didn't quite **land** the way we wanted it to. In response to community feedback, we're trying this new approach as a less disruptive alternative._

### Minecraft Server Management Protocol

-   Clients must authenticate to access the API
    -   Clients should supply an `Authorization` bearer token header with a server specific secret
    -   The secret is configured in the server properties file
        -   `management-server-secret=`
        -   The secret should be exactly 40 alphanumeric characters (A-Z, a-z, 0-9)
        -   The secret will be automatically generated if the server property is empty
        -   Unauthorized requests are rejected with 401 Unauthorized
-   TLS is enabled by default
    -   Can be disabled in the server properties file
        -   `management-server-tls-enabled=false`
    -   Requires a keystore file to be set in the server properties file
        -   `management-server-tls-keystore=path/to/keystore.p12`
    -   The keystore file must be in PKCS12 format
    -   Keystore password can be set in the following ways, in order of priority
        -   Environment variable: `MINECRAFT_MANAGEMENT_TLS_KEYSTORE_PASSWORD`
        -   JVM argument: `-Dmanagement.tls.keystore.password=`
        -   Server property: `management-server-tls-keystore-password=`

### Server Properties

-   Default value of `management-server-port` was changed from `25585` to `0`, assigning an available port each time management server is started
-   Added server property `management-server-tls-enabled` controlling whether the Minecraft Server Management Protocol uses TLS or not
    -   Defaults to `true`
-   Added server property `management-server-tls-keystore` controlling the path to the keystore file used for TLS
    -   Defaults to an empty string
    -   A dedicated server won't start when TLS is enabled and no keystore is provided
-   Added server property `management-server-tls-keystore-password` controlling the password to the keystore file used for TLS
    -   Defaults to an empty string

### Game Rules

-   Added `spawnerBlocksEnabled` game rule controlling if Spawner Blocks should be enabled or not
    -   Defaults to `true`

### Mob Spawning

-   Logic for choosing type of equipment for mobs spawning with equipment has been tweaked to add Copper as a possibility
    -   The initial roll to choose a type now chooses between Leather, Copper and Gold
    -   The chance to increase an armor tier has increased from 9.5% to 10.87%

### Sounds

-   Some sound sliders in the Music & Sound Options now play a preview sound when adjusting the setting outside a world

### UI

-   The Resource Pack and Data Pack selection screens now have a search box

## Technical Changes

-   The Data Pack version is now 87.0
-   The Resource Pack version is now 69.0
-   Some previously hidden debug features have been exposed to players

### Debug features

-   Some debug features that were previously removed during compilation are now preserved and can be used by players
-   Individual values can be enabled with JVM properties:
    -   First, a global debug flag must be enabled with `-DMC_DEBUG_ENABLED` or `-DMC_DEBUG_ENABLED=true`
    -   Then, a specific feature can be enabled, for example `-DMC_DEBUG_BRAIN` or `-DMC_DEBUG_BRAIN=true`
    -   To get the list of all available debug properties, add `-DMC_DEBUG_PRINT_PROPERTIES`
-   Warning: this is debug code. Handle with extreme care!
    -   This is an advanced feature, meant to help modders - it should not be used for normal play
    -   Features not guaranteed to work as intended
    -   It might crash your game or corrupt your worlds
    -   Individual options might be added, changed or removed without a notice

## Data Pack Version 87.0

-   Changed name of game rule `enableCommandBlocks` to `commandBlocksEnabled`

## Resource Pack Version 69.0

### Textures

-   Moved the result slot of `gui/container/villager.png` up by one pixel

### Shaders & Post-process Effects

#### Shaders

-   A new `PER_FACE_LIGHTING` flag has been added to the following shaders:
    -   `core/entity.vsh`
    -   `core/entity.fsh`
-   When set, cardinal lighting will be computed separately for front- and back-faces
-   As we now require OpenGL 3.3, we have bumped the version of all shaders from `150` to `330`

## Fixed bugs in 25w37a

-   [MC-220913](https://bugs.mojang.com/browse/MC-220913) Parity issue: Adjusting slider in the sound settings when not being in a world does not play a sound of that category
-   [MC-254052](https://bugs.mojang.com/browse/MC-254052) /locate doesn't work outside build limit
-   [MC-295841](https://bugs.mojang.com/browse/MC-295841) Interactive collision check path is broken
-   [MC-300076](https://bugs.mojang.com/browse/MC-300076) Copper golems remain completely stationary while searching chests, causing them to float and making them unable to receive knockback or be pushed
-   [MC-300077](https://bugs.mojang.com/browse/MC-300077) Copper golems can interact with chests diagonally through solid blocks
-   [MC-300299](https://bugs.mojang.com/browse/MC-300299) Copper Golems can open chests that are blocked
-   [MC-300723](https://bugs.mojang.com/browse/MC-300723) Second armor layer is still not rendering properly on all pieces
-   [MC-301294](https://bugs.mojang.com/browse/MC-301294) Higher tiers of mob armor are unreasonably less common than they were before 25w31a
-   [MC-301494](https://bugs.mojang.com/browse/MC-301494) Falling particles no longer appear from floating sand or gravel
-   [MC-301510](https://bugs.mojang.com/browse/MC-301510) GUI sprites nine slice performance regression
-   [MC-301531](https://bugs.mojang.com/browse/MC-301531) Server Management Protocol returns wrong response for invalid method IDs
-   [MC-301547](https://bugs.mojang.com/browse/MC-301547) Switching from Spectator mode to Creative mode now makes you fall out of the sky
-   [MC-301554](https://bugs.mojang.com/browse/MC-301554) Management protocol doesn't support batched requests
-   [MC-301558](https://bugs.mojang.com/browse/MC-301558) Copper golems can't pathfind through thin blocks
-   [MC-301563](https://bugs.mojang.com/browse/MC-301563) When you have the darkness potion effect, the chat, letters and words in the pause menu, items, F3 will darken
-   [MC-301564](https://bugs.mojang.com/browse/MC-301564) Management protocol doesn't support string-based request IDs
-   [MC-301574](https://bugs.mojang.com/browse/MC-301574) The spawnMonsters game rule does not take effect when switched
-   [MC-301593](https://bugs.mojang.com/browse/MC-301593) Monsters can spawn from spawners with the "spawnMonsters" game rule set to false
-   [MC-301599](https://bugs.mojang.com/browse/MC-301599) Action key getting stuck on when entering an interface so you are unable to exit without it reopening instantly
-   [MC-301620](https://bugs.mojang.com/browse/MC-301620) Banner animation is not independent when two banners are rendered
-   [MC-301661](https://bugs.mojang.com/browse/MC-301661) Server Management Protocol prints some incorrectly formatted messages in the console
-   [MC-301711](https://bugs.mojang.com/browse/MC-301711) The name of the "enableCommandBlocks" game rule is inconsistent with Bedrock Edition
-   [MC-301748](https://bugs.mojang.com/browse/MC-301748) Striking a Lightning Rod with non-default oxidation level with Lightning keeps nearby redstone components powered
-   [MC-301751](https://bugs.mojang.com/browse/MC-301751) The client crashes when in the vicinity of a mannequin spawner
-   [MC-301752](https://bugs.mojang.com/browse/MC-301752) Mannequins with profile.model set to "wide" render as a Steve skin
-   [MC-301754](https://bugs.mojang.com/browse/MC-301754) The hand animation plays when right-clicking shelves with nothing in your hand
-   [MC-301758](https://bugs.mojang.com/browse/MC-301758) Shield model clips through shelves
-   [MC-301759](https://bugs.mojang.com/browse/MC-301759) Elements within the realms “Worlds” tab are not selected in order when using the TAB key
-   [MC-301766](https://bugs.mojang.com/browse/MC-301766) Heads and skulls appear too high when placed on shelf
-   [MC-301768](https://bugs.mojang.com/browse/MC-301768) Structure blocks frame is not displayed when in spectator mode
-   [MC-301785](https://bugs.mojang.com/browse/MC-301785) Squid ink particles are yellow
-   [MC-301811](https://bugs.mojang.com/browse/MC-301811) Loot from suspicious blocks does not render while brushing
-   [MC-301833](https://bugs.mojang.com/browse/MC-301833) Text of text\_display entities is darker when "see\_through" property is set to true
-   [MC-301869](https://bugs.mojang.com/browse/MC-301869) The specification for the minecraft:ip\_bans server management method says it returns an array of players even though it returns an array of ip\_ban objects
-   [MC-301870](https://bugs.mojang.com/browse/MC-301870) Command feedback for successful /ban and /ban-ip commands with no specified reason can't be sent to the client
-   [MC-301889](https://bugs.mojang.com/browse/MC-301889) Documented return type does not match for clear methods in server managment protocol
-   [MC-301891](https://bugs.mojang.com/browse/MC-301891) Server management method minecraft:bans/clear clears allowlist, not bans
-   [MC-301899](https://bugs.mojang.com/browse/MC-301899) The output slot in the trading GUI is misaligned with other slots
-   [MC-301903](https://bugs.mojang.com/browse/MC-301903) Dropped chests, including variants, are no longer translated upward
-   [MC-301935](https://bugs.mojang.com/browse/MC-301935) Chest placed on bottom of shelf despite the rest of the items arent
-   [MC-301952](https://bugs.mojang.com/browse/MC-301952) Conduit visual bug

---

Here is Snapshot 25w36b to fix some common crashes.

## Fixed bugs in 25w36b

-   [MC-301745](https://bugs.mojang.com/browse/MC-301745) Placing an ender chest in the world crashes the game
-   [MC-301749](https://bugs.mojang.com/browse/MC-301749) Multiplayer Crash.

---

