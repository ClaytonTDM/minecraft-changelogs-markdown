# Minecraft Snapshot 23w18a

In this snapshot we're bringing you an additional advancement, updates to telemetry, as well as a fix for an 11 year old bug!

Happy stepping!

## New Features

### New advancements

#### Adventure advancements

-   `The Power of Books` : Read the power signal of a Chiseled Bookshelf using a Comparator

## Changes

-   For ease of use, the Smithing Table no longer requires a Smithing Template to be in the template slot before placing an itemstack into the other slots
-   Jukebox has been added to the Redstone Blocks creative tab

### Step Sounds

-   Walking on a block will now always play a step sound
    -   It was previously not the case if you were walking along the edge of a block with air or fluid besides it
-   Walking on the ocean floor will produce a step sound for the block you are walking on at a lower volume and pitch

## Technical Changes

-   The data pack version is now 15, accounting for sign data format, item display orientation and advancement changes
-   Advancement trigger changes:
    -   Added `recipe_crafted`
    -   Changed format of `placed_block`, `item_used_on_block` and `allay_drop_item_on_block` triggers
-   Loot table condition/predicate changes:
    -   Renamed `alternative` to `any_of`
    -   Added `all_of`
-   Updates to telemetry
    -   A new property has been added to every event: `launcher_name`
    -   The `world_loaded` event now has a new property: `realms_map_content`
    -   Added two new opt-in telemetry events: `game_load_times` and `advancement_made`

### Advancements

#### Changed triggers

-   All fields in `placed_block`, `item_used_on_block` and `allay_drop_item_on_block` have been collapsed to a single `location` field
-   New `location` is similar to `player` field - it's a list of loot conditions/predicates
-   All conditions in this list must match for a trigger to run
-   Conditions are evaluated in a new loot context called `advancement_location`. It has access to:
    -   Player as `this` entity
    -   Position of placed block
    -   Block state of placed/interacted block
    -   Held/used item as "tool"
-   Migration guide:
    -   Contents of old `location` field should be migrated to `location_check` condition
    -   Contents of `item` field should be migrated to `match_tool` condition
    -   Contents of `block` + `state` fields should be migrated to `block_state_property` condition

**Example** (from `make_a_sign_glow` advancement):

Before:

    {
        "conditions": {
            "item": {
                "items": [
                    "minecraft:glow_ink_sac"
                ]
            },
            "location": {
                "block": {
                    "tag": "minecraft:all_signs"
                }
            }
        },
        "trigger": "minecraft:item_used_on_block"
    }
    

After:

    {
        "conditions": {
            "location": [
                {
                    "condition": "minecraft:match_tool",
                    "predicate": {
                        "items": [
                            "minecraft:glow_ink_sac"
                        ]
                    }
                },
                {
                    "condition": "minecraft:location_check",
                    "predicate": {
                        "block": {
                            "tag": "minecraft:all_signs"
                        }
                    }
                }
            ]
        },
        "trigger": "minecraft:item_used_on_block"
    }
    

### Loot tables

#### `any_of`/`all_of`

-   Loot condition `alternative` has been renamed to `any_of`
-   Added new loot condition `all_of` that passes only when all sub-conditions pass. It has the same syntax as `any_of`

### Telemetry

This release includes a new global property sent with every event, a new property in the required WorldLoaded event, as well as two new opt-in events. The updated required events will help us troubleshoot launcher bugs more efficiently, and understand how Java Realms content is interacted with. The updated optional events will help inform game design decisions, and allow us to track and improve game load speeds.

#### All events

-   Added new property: `launcher_name`
    -   This is set based on the `minecraft.launcher.brand` system property. This will help us troubleshoot game launch related bugs more effectively, as we will be able to see whether the issue originated in the Minecraft launcher or a third-party program.

#### Updated required events

-   `world_loaded`
    -   Added new property: `realms_map_content`
        -   When loading into a Realms Map Content world (Minigame), the `world_loaded` event will receive the name of that map. This is to help us understand how Java Realms users interact with Java Realms adventure or minimap content.

#### New optional events

-   `advancement_made`
    -   This event is triggered when a player completes an advancement, and allows us to see the advancement ID and the time when the advancement was completed. This helps us as a studio understand player progress and limits, which informs our game design.
-   `game_load_times`
    -   An event that is triggered when the game client is loaded and includes the time it took for the client to load. This is so that we can work on improving and reducing the time it takes to load the game client.

## Fixed bugs in Snapshot 23w18a

-   [MC-1133](https://bugs.mojang.com/browse/MC-1133) Whether or not a player experiences some effect is calculated based on the block under the center of the player
-   [MC-48923](https://bugs.mojang.com/browse/MC-48923) Slime/magma cubes not affected by jump boost potion effect
-   [MC-257269](https://bugs.mojang.com/browse/MC-257269) Sculk sensor detects player walking between carpet and wool
-   [MC-261417](https://bugs.mojang.com/browse/MC-261417) The hitboxes of sniffers are not adjusted when they lay down
-   [MC-261952](https://bugs.mojang.com/browse/MC-261952) Clocks flicker rapidly when enchanted and in an unnatural dimension
-   [MC-262003](https://bugs.mojang.com/browse/MC-262003) Bundle tooltip does not show its interface
-   [MC-262067](https://bugs.mojang.com/browse/MC-262067) The type of sniffer digging particles that are produced is determined by the block that sniffers are located on instead of the block that sniffers are digging
-   [MC-262069](https://bugs.mojang.com/browse/MC-262069) Sniffers continue digging after their target block is destroyed
-   [MC-262104](https://bugs.mojang.com/browse/MC-262104) Rendering of FPS graph seems to be performing worse than before
-   [MC-262123](https://bugs.mojang.com/browse/MC-262123) Advancement titles of new advancements introduced in 23w17a are improperly capitalized
-   [MC-262133](https://bugs.mojang.com/browse/MC-262133) Strong lag spikes when moving above a cleared area with exposed void
-   [MC-262218](https://bugs.mojang.com/browse/MC-262218) Block light updates don't cross chunk borders properly in 23w17a

---

Hello! Here is a new snapshot with tweaks to the new features, new advancements, new music and some long-awaited technical changes. For some time we've been working on a new faster light engine, and we are finally ready to share the result. Special thank you to the community for not only pointing out the issues with the game's light engine, but also to community members that have developed mods and plugins which have highlighted these performance challenges and served as an inspiration for our new implementation.

Please break it in all possible ways and report bugs!

## New Features

-   Added new advancements for Trails & Tales
-   Added new Trails & Tales ambient music
-   Added a new music disc obtainable through archaeology

### New advancements

#### Husbandry advancements

-   `Smells interesting` : Obtain a Sniffer Egg
-   `Little sniffs` : Feed a Snifflet (requires `Smells interesting`)
-   `Planting the past` : Plant any Sniffer seed (requires `Little sniffs`)

#### Adventure advancements

-   `Respecting the remnants` : Brush a Suspicious block to obtain a Pottery Sherd
-   `Careful restoration` : Make a Decorated Pot out of 4 Pottery Sherds (requires `Respecting the remnants`)
-   `Crafting a new look` : Craft a trimmed armor at a Smithing Table
-   `Smithing with style` : Apply these smithing templates at least once: Spire, Snout, Rib, Ward, Silence, Vex, Tide, Wayfinder (requires `Crafting a new look`)

### New ambient music

-   Added the following new music tracks by Aaron Cherof to Cherry Groves, Desert, Jungle, Badlands, and Flower Forest biomes
    -   A Familiar Room
    -   Bromeliad
    -   Crescent Dunes
    -   Echo in the Wind

### New music disc

-   Added a new music disc which can be found by brushing suspicious blocks in Trail Ruins
    -   When put in a Jukebox, Relic by Aaron Cherof is played

## Changes

-   Both types of Sculk Sensors now stay in their Cooldown phase for 10 ticks, with other phase timings being adjusted to compensate
-   Crafted Decorated Pots with at least one pattern now have a hover tooltip displaying the Sherd & Brick ingredients
-   Updated the credits
    -   Added the ability to scroll upwards by pressing the `up arrow` key

### Sculk Sensor Phases

-   Sculk Sensors and Calibrated Sculk Sensors have three phases: Inactive, Active and Cooldown
-   The default phase is Inactive
    -   This phase lasts indefinitely until the block receives a vibration
    -   During this phase, the block is able to listen to nearby vibrations until one has been scheduled
-   When a scheduled vibration is received, the block switches to the Active phase
    -   This phase lasts 30 game ticks for Sculk Sensors, and 10 game ticks for Calibrated Sculk Sensors
    -   During this phase, the block stops listening to nearby vibrations, wiggles its tendrils and emits a redstone signal and light
-   After the Active phase has finished, the block switches to a Cooldown phase
    -   This phase lasts for 10 game ticks
    -   During this phase, the block keeps wiggling its tendrils, but no longer emits a redstone signal nor light
    -   Finally, once this phase is finished, the block will switch back to the Inactive phase
-   Previously, some of these phases had different timing values:
    -   Active: 40 game ticks for Sculk Sensors and 20 game ticks for Calibrated Sculk Sensors
    -   Cooldown: 1 game tick for both types of Sculk Sensors
-   These phase timings were tweaked so that it is less common for activated contraptions to recursively activate the Sculk Sensor that powered them

## Technical Changes

-   The resource pack version is now 15, accounting for the font and credits update
    -   `legacy_unicode` glyph provider has been removed
    -   Bitmaps used by `uniform` font have been removed
    -   `uniform` font has been updated to use Unifont 15.0.01
        -   That changes shape of multiple characters, while also adding support for new ones
        -   Combining characters no longer include circle overlayed over them (so M◌̆ now renders as M ̆)
    -   Added second level of organization of entries in credits.json on top of `titles`, called `disciplines`
-   Font textures are included in debug texture dump (F3 + S)
-   Added new font glyph providers: `unihex` and `reference`, removed `legacy_unicode`
-   Improved performance of the light engine

### Fonts

#### New `unihex` glyph provider

-   New glyph provider for reading Unifont HEX files
    -   HEX format describes bitmap font glyphs
        -   height of every glyph is 16 pixels
        -   width of glyph can be 8, 16, 24 or 32 pixels
    -   every line is made of two hexadecimal numbers separated by `:`
    -   first value describes codepoint - it must have 4, 5 or 6 hex digits
    -   second value describes glyph as a stream of bits, line by line
-   When rendering, empty columns on left and right side of glyph are removed
    -   Custom glyph widths can be set with `size_overrides`
-   Provider requires two fields:
    -   `hex_file` - path to ZIP archive containing one or more `*.hex` files (files in archive with different extensions are ignored)
    -   `size_overrides` - list of codepoint ranges that should have width different that auto-detected (based on empty space in glyph). Fields:
        -   `from`, `to` - start and end of codepoint range (inclusive)
        -   `left`, `right` - integers describing position of left-most and right-most columns of glyph in range
            -   any bits in columns outside this range will be discarded

#### New `reference` glyph provider

-   New glyph provider can be used to include providers from other fonts
    -   Providers are guaranteed to be loaded only once, no matter how many times they are included
-   Provider has one field `id`, that describes other font to be included in currently loaded one
    -   Inclusion is performed after all fonts are loaded, so it will include all providers for a given font defined in all datapacks

#### Removed `legacy_unicode` glyph provider

-   `legacy_unicode` glyph provider has been removed
-   This functionality has been replaced by `unihex` provider

## Fixed bugs in Snapshot 23w17a

-   [MC-108045](https://bugs.mojang.com/browse/MC-108045) Minecraft not using latest unifont unicode chart; characters are missing
-   [MC-127394](https://bugs.mojang.com/browse/MC-127394) Minecraft does not render characters in Unicode mb4 range
-   [MC-172980](https://bugs.mojang.com/browse/MC-172980) Block light updates don't cross chunk borders properly when updated
-   [MC-197772](https://bugs.mojang.com/browse/MC-197772) Missing textures in minecraft:uniform font
-   [MC-225742](https://bugs.mojang.com/browse/MC-225742) When light emitting blocks generate as ores, they do not emit light
-   [MC-241725](https://bugs.mojang.com/browse/MC-241725) In the credits, an opening parenthesis is missing for Riley Manns
-   [MC-241730](https://bugs.mojang.com/browse/MC-241730) In the credits, a closing parenthesis is missing for Konrad Jówko
-   [MC-241732](https://bugs.mojang.com/browse/MC-241732) In the credits, "Lionbridge" is misspelt in one place
-   [MC-241733](https://bugs.mojang.com/browse/MC-241733) In the credits, "Insight" is misspelt in one place
-   [MC-241741](https://bugs.mojang.com/browse/MC-241741) Certain names are listed twice in the credits
-   [MC-241803](https://bugs.mojang.com/browse/MC-241803) credits.json: Line 2632 has typo in (C instead of O)
-   [MC-245819](https://bugs.mojang.com/browse/MC-245819) Lighting can still occasionally lag behind world generation
-   [MC-249341](https://bugs.mojang.com/browse/MC-249341) Some Mojang employees are not mentioned in the credits
-   [MC-249508](https://bugs.mojang.com/browse/MC-249508) Light emitted from cave vines and glow lichens upon world generation still sometimes doesn't propagate across chunk borders
-   [MC-254506](https://bugs.mojang.com/browse/MC-254506) Font file of some Korean completed font area is wrong
-   [MC-258926](https://bugs.mojang.com/browse/MC-258926) Space is no longer treated as padding in fonts
-   [MC-261413](https://bugs.mojang.com/browse/MC-261413) Particles spawned by brushes held by left-handed players move in the wrong direction
-   [MC-261626](https://bugs.mojang.com/browse/MC-261626) Reversed Comma doesn't render properly when using the Unicode font
-   [MC-261900](https://bugs.mojang.com/browse/MC-261900) Sniffers cannot properly pathfind into water while burning
-   [MC-261938](https://bugs.mojang.com/browse/MC-261938) Sniffer animation is not smooth on slime blocks
-   [MC-261997](https://bugs.mojang.com/browse/MC-261997) Game crashes when generating new chunk / java.lang.IllegalStateException: Asking for biomes before we have biomes
-   [MC-262012](https://bugs.mojang.com/browse/MC-262012) Telemetry Tooltip out of screen
-   [MC-262022](https://bugs.mojang.com/browse/MC-262022) Tooltips get cut off at the bottom of the screen
-   [MC-262024](https://bugs.mojang.com/browse/MC-262024) Sniffer eggs are sometimes spawned in the ground when sniffers breed
-   [MC-262030](https://bugs.mojang.com/browse/MC-262030) Sniffers stand a bit too close to players that are tempting them

---

In this weeks Snapshot we're bringing you tweaks to the Trail Ruins, new command functionality, a new advancement trigger, and more!

Happy mining!

Edit: We have published a fix for a crash issue in this Snapshot. If you are experiencing crashes, please try closing all instances of the game and restarting the Launcher.

## Changes

-   All Pottery Shards has been renamed to Pottery Sherds
-   If a vibration is scheduled to be received by a Sculk Sensor or Sculk Shrieker, they will stay queued until all adjacent chunks are loaded and ticking
    -   Prevents vibration resonance setups from breaking when unloading their chunks from a distance
-   The game's application icon has been updated
    -   This will be a Grass Block in release versions, and a Dirt Block in snapshot versions
-   Added native support for ARM64 machine architecture on Windows
    -   To try this out, you need to manually specify a native Java Executable in the launcher

### Sniffer

-   Sniffers can now be tempted by Torchflower seeds

### Trail Ruins

-   Reworked structures based on community feedback
-   Added more structure variants
-   Sand no longer generates within the structures
-   Tweaked the amount of gravel and dirt
-   Tweaked the amount of Suspicious Gravel
-   Split the loot tables for the Suspicious Gravel within the structure. There is now a dedicated loot table for Rare loot items (e.g. Pottery Sherds, Smithing Templates), and a dedicated loot table for more common loot drops (e.g. Stained Glass Pane, Tools, Candles, etc.)
-   Due to these changes you might see errors like `Failed to get element ResourceKey[minecraft:worldgen/processor_list / minecraft:trail_ruins_suspicious_sand]` in an old snapshot world. These are harmless, but existing Trail Ruin structures that was not previously fully loaded might be missing parts of the structure.

## Technical Changes

-   The data pack version is now 14, accounting for item display orientation changes
-   Added a `return` command
-   Added `recipe_crafted` advancement trigger

### Commands

#### `return`

The `return` command can be used to control execution flow inside functions and change their return value. Effects:

-   Remaining separate top-level commands in the currently executing function (if any) are skipped
-   The result value of the `function` command that triggered the function is changed from the number of commands executed to `value`
-   The result value of the `return` command is also `value`

Syntax:

`return <value>`

Parameters:

-   `value`: An integer return value

### Advancements

#### New triggers

##### `recipe_crafted`

-   Triggered when crafting a recipe
-   Conditions:
    -   `recipe_id` - the resource location of the recipe crafted
    -   `ingredients` - an array of predicates for the item stacks used in the recipe
        -   A single item stack can only be used to fulfill one predicate
        -   Each predicate needs to be fulfilled to trigger the advancement. This allows for seperation between recipes that have same identifier but use different ingredients.
        -   This field is optional. When not provided, or left empty, only the `recipe_id` will dictate the success of the trigger

### Tags

-   Added `villager_plantable_seeds` to represent which kind of seeds Villagers can farm
-   Added `maintains_farmland` to represent which blocks will not cause farmland to be converted into dirt when placed on top of it

### Display entity

#### Rendering changes

-   `item_display` items have been rotated 180 degrees around Y axis to better match transformation applied when rendering items on armor stand head and in item frames
    -   For reference, order of transformations applied to model (starting from innermost) is `item_transform`, rotate Y 180, `transformation` field, entity orientation (billboard option + `Rotation` field + `Pos` field)

## Fixed bugs in 23w16a

-   [MC-162253](https://bugs.mojang.com/browse/MC-162253) Lag spike when crossing certain chunk borders
-   [MC-169498](https://bugs.mojang.com/browse/MC-169498) Empty top subchunks don't update skylight in some cases
-   [MC-170010](https://bugs.mojang.com/browse/MC-170010) Sky-lightmaps not properly initialized
-   [MC-170012](https://bugs.mojang.com/browse/MC-170012) Lightmaps are missing for initial skylight
-   [MC-199752](https://bugs.mojang.com/browse/MC-199752) Polished Blackstone Button takes longer to break than other buttons
-   [MC-207251](https://bugs.mojang.com/browse/MC-207251) Sculk sensors and shriekers do not work correctly when cloned, generated on superflat worlds or placed with custom structures
-   [MC-249450](https://bugs.mojang.com/browse/MC-249450) Sculk shriekers placed with NBT don't receive signals from nearby sculk sensors
-   [MC-252786](https://bugs.mojang.com/browse/MC-252786) SculkSensorBlockEntity and SculkShriekerBlockEntity leak VibrationListeners on update
-   [MC-254410](https://bugs.mojang.com/browse/MC-254410) /setidletimeout set to a timer longer than 35791 disconnects idle player immediately
-   [MC-257178](https://bugs.mojang.com/browse/MC-257178) Chiseled Bookshelf redstone behavior is inconsistent
-   [MC-260038](https://bugs.mojang.com/browse/MC-260038) Sniffer does not have smooth animation transitions for some of its animations, like sniffing
-   [MC-260219](https://bugs.mojang.com/browse/MC-260219) Sniffer eating sounds aren't played when feeding them the last item of torchflower seeds within a stack
-   [MC-260221](https://bugs.mojang.com/browse/MC-260221) Sniffers can still dig when floated by levitation status effect
-   [MC-260237](https://bugs.mojang.com/browse/MC-260237) Sniffers can sniff while panicking
-   [MC-260466](https://bugs.mojang.com/browse/MC-260466) Torchflower doesn't maintain farmland used to grow it
-   [MC-260849](https://bugs.mojang.com/browse/MC-260849) Sniffer can't get into minecart
-   [MC-261214](https://bugs.mojang.com/browse/MC-261214) Amethyst in calibrated sculk sensor is shaded and not stretched
-   [MC-261286](https://bugs.mojang.com/browse/MC-261286) Walking near liquids causes stone footstep sounds to play
-   [MC-261515](https://bugs.mojang.com/browse/MC-261515) You can't brush blocks if a dropped item is between you and the block
-   [MC-261605](https://bugs.mojang.com/browse/MC-261605) Splash text sometimes covers several letters of "Java Edition"
-   [MC-261608](https://bugs.mojang.com/browse/MC-261608) Sculk sensors and calibrated sculk sensors lack a cooldown state
-   [MC-261620](https://bugs.mojang.com/browse/MC-261620) Crash when modifying age property of a pitcher crop
-   [MC-261625](https://bugs.mojang.com/browse/MC-261625) "Programmer Art" and "High contrast" built-in Resource Packs are incompatible
-   [MC-261643](https://bugs.mojang.com/browse/MC-261643) Villagers can't plant torchflower seeds or pitcher plant pods, despite picking them up
-   [MC-261646](https://bugs.mojang.com/browse/MC-261646) Subtitle for Sniffers laying eggs is "Chicken plops"
-   [MC-261740](https://bugs.mojang.com/browse/MC-261740) Feeding a Sniffer while it is digging causes it to lay motionless for a while then dig again with no animation
-   [MC-261746](https://bugs.mojang.com/browse/MC-261746) Incorrect sound event ID spelling for "block.sniffer.egg\_crack" and "block.sniffer.egg\_hatch"
-   [MC-261804](https://bugs.mojang.com/browse/MC-261804) Expired Key preventing players from logging in on servers
-   [MC-261857](https://bugs.mojang.com/browse/MC-261857) Using the "/setblock", "/fill", or "/clone" commands to create little amounts of blocks in completely isolated areas causes large client-side stutters

---

We are now releasing Snapshot 23w14a, containing changes to Sculk blocks and Enchanting Tables, a new Quick Play functionality, an updated logo for Java Edition, a new main menu panorama, and lots of bug fixes!

Happy mining!

## Changes

-   Changes to Sculk blocks
-   Replaceable blocks no longer block the connection between Enchanting Tables and Bookshelves
-   In the Desert Temple, the new room has more of its roof collapsed and one block of Suspicious Sand is always visible in the top layer
-   Updated the Minecraft: Java Edition logo
-   The main menu background is now a Trails & Tales panorama

### Sculk Shrieker

-   Waterlogging them will now silence their shriek sounds
-   Added to the Redstone Blocks tab in the creative menu

### Sculk Sensor

-   For both normal and calibrated Sculk Sensors, the following changes have been made:
    -   Default redstone output has been modified to be more reliable for distance calculations
    -   Now strongly powers the block they are placed on

### Calibrated Sculk Sensor

-   Has an active cooldown of 1 second instead of 2 seconds
-   Detects vibrations up to 16 blocks away instead of 8 blocks
-   Accepts signals into the calibration input side more consistently with other Redstone components
    -   For example, signals can now be received through a block

## Technical Changes

-   Signs with click commands can now be interacted with even if the Sign is not waxed
    -   Signs with non-`text` chat components can no longer be edited
-   Added new loot table function called `reference`
-   Added support for Quick Play
-   Removed the `server` & `port` arguments as their functionality has been replaced by Quick Play
-   Changes to tags
-   The resource pack version is now 14
    -   Updated the sprite layout of `minecraft.png`
    -   Removed the overriding `minecraft.png` from the Programmer Art resource pack
    -   Updated the sprite layout of `invite_icon.png`

### Loot tables

#### `reference`

New function `reference` allows functions to call sub-functions (similar to `reference` condition). Fields:

-   `name` - location of function to call

### Quick Play

-   Added support for four new command line arguments that allow the game to be launched directly into a world
-   `quickPlayPath` takes a specified path for logging (relative to the run directory)
    -   If a path is provided the following will be logged upon joining a world:
        -   `type`: is either `singleplayer`, `multiplayer`, or `realms`
        -   `identifier`: represents the world you want to join
            -   For singleplayer, the folder name of the world
            -   For multiplayer, the IP address of the server
            -   For realms, the Realms ID
        -   `port`: represents the server port and is only logged for multiplayer
        -   `name`: The name of the world
        -   `gamemode`: The gamemode of the world
        -   `lastPlayedTime`: The time you joined the world
    -   Example:
        -   `--quickPlayPath "quickPlay/log.json"` will resolve into `.minecraft/quickPlay/log.json`
-   `quickPlaySingleplayer`, `quickPlayMultiplayer` and `quickPlayRealms` all take their respective `identifier`
    -   If one of these arguments is provided, the game will try to launch directly into the given world
    -   Examples:
        -   `--quickPlaySingleplayer "New World"`
        -   `--quickPlayMultiplayer "localhost:25565"`
        -   `--quickPlayRealms "1234"`

### Tags

-   Added `replaceable_by_trees`, to better express blocks that are replaced when the tree grows through them
-   Removed `replaceable_plants` since it was only used as a subset of the blocks for the tag above, and not as universally
-   Added `sword_efficient`, to represent blocks that are broken slightly faster by a sword than normal

## Fixed bugs in 23w14a

-   [MC-2474](https://bugs.mojang.com/browse/MC-2474) Transparent blocks placed between bookshelves and enchanting tables negate bonuses received from bookshelves
-   [MC-138358](https://bugs.mojang.com/browse/MC-138358) Levers on top of item frames Z-fighting with blocks in item frames
-   [MC-155084](https://bugs.mojang.com/browse/MC-155084) Horses' armor, reins, and bridles experience z-fighting
-   [MC-165773](https://bugs.mojang.com/browse/MC-165773) /execute run does not cause syntax error when arguments are missing
-   [MC-176309](https://bugs.mojang.com/browse/MC-176309) Illusioner has a few misplaced pixels left in their texture
-   [MC-203399](https://bugs.mojang.com/browse/MC-203399) Hoppers use the side texture on the bottom
-   [MC-203406](https://bugs.mojang.com/browse/MC-203406) Kelp and seagrass models appear to reference biome tints despite not using any
-   [MC-212271](https://bugs.mojang.com/browse/MC-212271) Glow squid and squid show Z-fighting
-   [MC-224433](https://bugs.mojang.com/browse/MC-224433) Clouds texture contains semi-transparent background
-   [MC-230792](https://bugs.mojang.com/browse/MC-230792) Cat's tail shows Z-Fighting
-   [MC-237556](https://bugs.mojang.com/browse/MC-237556) Legs of black cat model are white at the top
-   [MC-241314](https://bugs.mojang.com/browse/MC-241314) Filled cauldrons' bottom faces are still culled when they should not be
-   [MC-246459](https://bugs.mojang.com/browse/MC-246459) Drowned have some transparent pixels within their inner body texture
-   [MC-249514](https://bugs.mojang.com/browse/MC-249514) Button UV appears to be upside-down
-   [MC-251536](https://bugs.mojang.com/browse/MC-251536) Desert zombie villager feet still mismatch the sides of the feet
-   [MC-251537](https://bugs.mojang.com/browse/MC-251537) Desert (zombie) villager has solid-color on inner of arm, unlike other villagers
-   [MC-251538](https://bugs.mojang.com/browse/MC-251538) Desert villager missing some pixels for the sandals
-   [MC-252099](https://bugs.mojang.com/browse/MC-252099) Incorrect texture mapping in potted mangrove propagule (mirror effect)
-   [MC-254588](https://bugs.mojang.com/browse/MC-254588) Miscolored pixel on slowness effect icon
-   [MC-256419](https://bugs.mojang.com/browse/MC-256419) Incomplete commands run through aliases don't produce errors
-   [MC-256540](https://bugs.mojang.com/browse/MC-256540) The top texture of the camel's front left leg contains some redundant gray pixels
-   [MC-258939](https://bugs.mojang.com/browse/MC-258939) Non-atomic cached state can cause multithreaded crashes
-   [MC-259873](https://bugs.mojang.com/browse/MC-259873) Skeleton/Zombie Horse's chests are outdated
-   [MC-260036](https://bugs.mojang.com/browse/MC-260036) Can't plant cactus and sugar cane on suspicious sand
-   [MC-260042](https://bugs.mojang.com/browse/MC-260042) Cannot waterlog a decorated pot by using a water bucket or dispenser
-   [MC-260105](https://bugs.mojang.com/browse/MC-260105) The name tags of sniffers are partly inside their models
-   [MC-260152](https://bugs.mojang.com/browse/MC-260152) Sculk sensors are not activated by sniffers digging
-   [MC-260202](https://bugs.mojang.com/browse/MC-260202) The sound of using the brush isn't affected by blocks
-   [MC-260237](https://bugs.mojang.com/browse/MC-260237) Sniffers can sniff while panicking
-   [MC-260240](https://bugs.mojang.com/browse/MC-260240) Sniffers that are in love sometimes don't attempt to approach one another to breed
-   [MC-260347](https://bugs.mojang.com/browse/MC-260347) Falling suspicious sand does not break when reopening the world
-   [MC-260348](https://bugs.mojang.com/browse/MC-260348) Sniffers will never dig in normal mud despite being a "sniffer\_diggable" block
-   [MC-260401](https://bugs.mojang.com/browse/MC-260401) When Brush is broken in offhand, the broken Particle is the Item in mainhand
-   [MC-260459](https://bugs.mojang.com/browse/MC-260459) Baby sniffers don't sound high pitched when sniffing
-   [MC-260467](https://bugs.mojang.com/browse/MC-260467) Torchflower is not grouped with other small flowers in the creative inventory
-   [MC-260478](https://bugs.mojang.com/browse/MC-260478) Torchflower crop hitboxes don't change in size according to their age
-   [MC-260527](https://bugs.mojang.com/browse/MC-260527) The coordinates of the sniffer "minecraft:sniffer\_explored\_positions" tag do not check the dimension
-   [MC-260778](https://bugs.mojang.com/browse/MC-260778) Sniffer tries to sniff out blocks outside the world border
-   [MC-260779](https://bugs.mojang.com/browse/MC-260779) Sniffers can dig into blocks outside the world border
-   [MC-260810](https://bugs.mojang.com/browse/MC-260810) Villagers can't pick up torchflower seeds, despite being able to farm torchflowers
-   [MC-261167](https://bugs.mojang.com/browse/MC-261167) Suspicious gravel does not have an assigned tool
-   [MC-261171](https://bugs.mojang.com/browse/MC-261171) You can't plant bamboo on suspicious gravel
-   [MC-261172](https://bugs.mojang.com/browse/MC-261172) Pitcher crop hitboxes don't change in size according to their age
-   [MC-261174](https://bugs.mojang.com/browse/MC-261174) Suspicious gravel is not part of the #overworld\_carver\_replaceables tag, causing carvers to not cut through it
-   [MC-261176](https://bugs.mojang.com/browse/MC-261176) Pitchers don't maintain the farmland used to grow it
-   [MC-261179](https://bugs.mojang.com/browse/MC-261179) Attempting to interact with a waxed sign plays a sound but displays no subtitle
-   [MC-261183](https://bugs.mojang.com/browse/MC-261183) Sniffer egg sound events are listed under "entity" instead of "block"
-   [MC-261186](https://bugs.mojang.com/browse/MC-261186) Entities don't recognize sniffer eggs as obstacles when pathfinding
-   [MC-261187](https://bugs.mojang.com/browse/MC-261187) Entities will often spin while pathfinding on top of sniffer eggs
-   [MC-261189](https://bugs.mojang.com/browse/MC-261189) Inconsistent naming of block states for sniffer and turtle eggs

---

In this week's snapshot 23w13a we're following up on all the new things in last week's snapshot with a big round of bug fixes. Happy mining!

## Changes

-   GUI can be scaled on the Video Settings screen by holding `Ctrl` and scrolling the mouse wheel

## Fixed bugs in Snapshot 23w13a

-   [MC-159637](https://bugs.mojang.com/browse/MC-159637) Mobs with passengers have broken movements
-   [MC-230916](https://bugs.mojang.com/browse/MC-230916) "Potted Flowering Azalea Bush Plant" uses the wrong texture
-   [MC-256503](https://bugs.mojang.com/browse/MC-256503) Camel can swim sitting down
-   [MC-256506](https://bugs.mojang.com/browse/MC-256506) Camels riding entities get permanently stuck in dash mode
-   [MC-257246](https://bugs.mojang.com/browse/MC-257246) Horses do not make step\_wood sounds when walking on Nether wood, cherry wood, bamboo wood, or stems
-   [MC-257268](https://bugs.mojang.com/browse/MC-257268) The dashing animations of camels sometimes aren't displayed for other players
-   [MC-259364](https://bugs.mojang.com/browse/MC-259364) The "item.minecraft.smithing\_template.netherite\_upgrade.base\_slot\_description" string is missing a serial comma
-   [MC-260075](https://bugs.mojang.com/browse/MC-260075) Player holds brush by ferrule in third person
-   [MC-260086](https://bugs.mojang.com/browse/MC-260086) Entities riding sniffers are positioned too low down
-   [MC-260090](https://bugs.mojang.com/browse/MC-260090) Sniffers ignore the "minecraft:generic.movement\_speed" attribute
-   [MC-260093](https://bugs.mojang.com/browse/MC-260093) Particles spawned by brushes in the left hand move in the wrong direction
-   [MC-260146](https://bugs.mojang.com/browse/MC-260146) Pink petals are not next to other flowers in the creative inventory
-   [MC-260238](https://bugs.mojang.com/browse/MC-260238) Sniffer digging particles are produced slightly too high up
-   [MC-260252](https://bugs.mojang.com/browse/MC-260252) Sniffer walking animation is broken when walking on ice
-   [MC-260320](https://bugs.mojang.com/browse/MC-260320) Parity Issue: Snifflets (Baby Sniffers) have an inconsistent model with Bedrock
-   [MC-260435](https://bugs.mojang.com/browse/MC-260435) Sniffers don't play their walking animation when moving through cobwebs
-   [MC-260454](https://bugs.mojang.com/browse/MC-260454) Decorated pots are translated off-center when displayed on head
-   [MC-260465](https://bugs.mojang.com/browse/MC-260465) The torchflower crop still has an age 2 blockstate that looks like the regular torchflower
-   [MC-260693](https://bugs.mojang.com/browse/MC-260693) potted\_torchflower is still not part of the #flower\_pots block tag
-   [MC-260834](https://bugs.mojang.com/browse/MC-260834) "Alpha" can play during gameplay
-   [MC-260898](https://bugs.mojang.com/browse/MC-260898) Brushes can be used through entities
-   [MC-260974](https://bugs.mojang.com/browse/MC-260974) Aggressive mobs can't control "vehicle" mobs
-   [MC-261170](https://bugs.mojang.com/browse/MC-261170) Sniffer egg faces aren't culled when covered by blocks
-   [MC-261181](https://bugs.mojang.com/browse/MC-261181) The "Glow and Behold!" advancement is granted when interacting with waxed signs while holding glow ink sacs
-   [MC-261190](https://bugs.mojang.com/browse/MC-261190) Signs no longer resolve JSON text components
-   [MC-261191](https://bugs.mojang.com/browse/MC-261191) Pitcher plants aren't part of the #minecraft:flowers or #minecraft:tall\_flowers block tags
-   [MC-261193](https://bugs.mojang.com/browse/MC-261193) Calibrated sculk sensor placed by commands is waterlogged by default
-   [MC-261201](https://bugs.mojang.com/browse/MC-261201) Pitcher plant can be replaced by the use of placed blocks, which is not consistent with other tall flowers
-   [MC-261204](https://bugs.mojang.com/browse/MC-261204) When is farmland broken under a pitcher crop, the crop doesn't get broken
-   [MC-261205](https://bugs.mojang.com/browse/MC-261205) Using bone meal on pitcher pod (crop) advances several growth stages at once
-   [MC-261206](https://bugs.mojang.com/browse/MC-261206) "A Seedy Place" advancement not granted when planting Pitcher Pods
-   [MC-261213](https://bugs.mojang.com/browse/MC-261213) Sniffer eggs can be destroyed by fluids which is different from turtle eggs
-   [MC-261223](https://bugs.mojang.com/browse/MC-261223) Editing a hanging sign with a right click doesn't work while holding a placeable object
-   [MC-261224](https://bugs.mojang.com/browse/MC-261224) Editing sign from an angle (or the side) will edit the back instead of the front
-   [MC-261229](https://bugs.mojang.com/browse/MC-261229) Crashes and Chunk Resetting involving Suspicious Sand with Loot Tables updating from 1.19.4
-   [MC-261232](https://bugs.mojang.com/browse/MC-261232) Texture minecraft:block/sniffer\_egg\_slightly\_cracked with size 40x32 limits mip level from 4 to 3
-   [MC-261237](https://bugs.mojang.com/browse/MC-261237) Using bone meal on upper pitcher crop doesn't advance the age of the lower half
-   [MC-261241](https://bugs.mojang.com/browse/MC-261241) Saddle equips sound plays twice when equipping a saddle on a camel
-   [MC-261243](https://bugs.mojang.com/browse/MC-261243) Pitcher Crop isn't part of the #crops tag
-   [MC-261262](https://bugs.mojang.com/browse/MC-261262) Raiser and Wayfinder smithing templates are offset by one pixel
-   [MC-261264](https://bugs.mojang.com/browse/MC-261264) The advancement "Two by Two" is no longer obtainable due to the change to sniffer's breeding
-   [MC-261275](https://bugs.mojang.com/browse/MC-261275) Sniffers drop moss blocks when killed

---

Well hello fellow Minecraft lovers! It is time for the first snapshot for 1.20. We know we promised no more major features, so how did we end up with such a big snapshot? You thought the trails were over? NO! In snapshot 23w12a we have even more tales to tell! Our devs apparently could not resist throwing in a few extra additions. Enjoy!

## New Features

-   All features and changes from the "Update 1.20" experimental pack are now part of the game
-   Vibration resonance functionality has been added to Blocks of Amethyst
-   Added the Calibrated Sculk Sensor block
-   Added Suspicious Gravel, more Archaeology sites, and new Pottery Shards
-   Added 5 new armor trims
-   Signs have improved customization options
-   Added Sniffer Egg
-   Added Pitcher Plant

### Vibration Resonance

-   Blocks of Amethyst have a new behavior when placed adjacent to Sculk Sensors
    -   If that Sculk Sensor receives a vibration, the Block of Amethyst will re-emit its frequency as a separate vibration at its location
-   This behaviour is called Vibration Resonance, and allows players to move vibration frequencies across long distances without having to recreate the vibration naturally

### Calibrated Sculk Sensors

-   A new variant of Sculk Sensors which allows you to filter vibrations based on their frequency level
-   They are not found naturally and can only be crafted with 1 Sculk Sensor and 3 Amethyst Shards in the Crafting Table
-   One side of the Calibrated Sculk Sensor can receive a redstone signal as input
    -   The strength of that redstone signal is the only vibration frequency the Sculk Sensor will listen to

### Archaeology

-   Added Suspicious Gravel block
    -   It has the same characteristics as Suspicious Sand
-   Added Suspicious Gravel to Cold Ocean Ruins
-   Added Suspicious Sand to Warm Ocean Ruins
    -   Sniffer Eggs can be found here
-   Added the Trail Ruins, a buried structure from a lost culture
    -   Four Armor trims can be found here
-   Added 16 Pottery Shards (so there are now 20 Pottery Shards in total)
    -   These have been distributed between the 5 Archaeology sites: Desert Wells, Desert Temples, Cold Ocean Ruins, Warm Ocean Ruins, and Trail Ruins

### Armor Trims

New armor trim Smithing Templates have been added to the following structures:

-   Trail Ruins
    -   Wayfinder Armor Trim
    -   Raiser Armor Trim
    -   Shaper Armor Trim
    -   Host Armor Trim
-   Ancient City
    -   Silence Armor Trim

### Signs

-   Sign text can now be edited after being placed in the world
    -   This can be done by interacting with the Sign
-   Both sides of the Sign can now have separate text and colors, allowing for further customization options
    -   By default, a Sign will prompt you to input the front side's text when placed
    -   To apply text to the back-side, you must walk to the other side and interact with that face to edit it
-   Signs can now also be waxed with Honeycomb, preventing any further edits to its text
    -   Click commands on Signs can only be invoked when the Sign is waxed
    -   If a Sign with a click command is not waxed, interacting with it will not invoke the command and instead open up the edit screen as usual

### Sniffer Egg

-   Can be found in the Suspicious Sand of Warm Ocean Ruins
-   When two Sniffers breed they do not immediately spawn a Snifflet; instead, a Sniffer Egg is dropped
-   Hatching
    -   When placed on Moss, the Egg will hatch after approximately 10 minutes
    -   On all other blocks, it will hatch in approximately 20 minutes

### Pitcher Plant

-   The Sniffer can now occasionally Sniff up a Pitcher Pod item
    -   This Pod, when planted in Farmland, grows into a Pitcher Crop, which has five growth stages
    -   Once fully grown, the Pitcher Crop can be harvested, yielding a two-block-tall Pitcher Plant

## Changes

-   Vibration frequencies of many actions in the game have been tweaked
-   Wither effect particle color has been adjusted to make it more distinguishable
-   Potion of Slow Falling color has been adjusted to make it more distinguishable
-   Step sounds can now combine for blocks walked through and stepped on

### Vibration Frequencies

In preparation for the Calibrated Sculk Sensor, vibration frequencies have been greatly simplified to prevent unwanted interference. The following are category descriptions for each frequency and the expected events that they correspond to:

1.  Movement in any medium (land, water and air)
2.  Landing on any surface (land or water)
3.  Item interactions
4.  Gliding with an elytra or unique mob actions (Ravager roar, Wolf shaking, etc)
5.  Dismounting a mob or equipping gear
6.  Mounting a mob or interacting with a mob
7.  Mobs and players getting damaged
8.  Consuming items (drinking and eating)
9.  Blocks 'deactivating' (door close, chest close, button unpress, etc)
10.  Blocks 'activating' (door open, chest open, button press, etc)
11.  Blocks changing (cauldron water level rising, adding food to campfire, etc)
12.  Blocks being destroyed
13.  Blocks being placed
14.  Mobs and players teleporting or spawning
15.  Mobs and players dying or an explosion

### Combination Step Sounds

-   Combines two different step sounds
-   Occurs for carpets, snow, nether sprouts, as well as warped and crimson roots
    -   The top-most block you are walking on is played as normal
    -   The block underneath is played at a lower volume and pitch

### Armor Trims

-   The Dune Armor Trim now has a brand-new pattern and Smithing Template icon
-   The Dune Armor Trim's old pattern is now used by the Sentry Armor Trim
    -   A new icon has been made for the Sentry Armor Trim Smithing Template to fit this pattern
-   The Sentry Armor Trim's old pattern is now used by the new Shaper Armor Trim

## Technical Changes

-   The data pack version is now 13, accounting for sign data format changes
-   Added a `capped` rule structure processor that limits the number of replaced blocks for a structure piece to a configured maximum
-   Configuring block entity fields in a `rule` processor rule is now delegated to a referenced `block_entity_modifier` instead of the previously fixed `output_nbt` configuration
-   Game events have changed vibration frequency and some have been removed
-   Tweaked display entity interpolation
-   Removed `update_1_20` feature flag and built-in datapack - features are no longer experimental

### Structure post-processors

#### Capped post-processor

-   A `capped` post-processor has been added which can limit how many blocks a delegated post-processor randomly transform in a structure
-   This can be used to configure a structure piece to have an exact amount of specific blocks, instead of using random distribution
-   The `capped` post-processor has following required parameters:
    -   `delegate` A post-processor which performs the actual block transformation
    -   `limit` Maximum amount of blocks that the delegated post-processor can transform
        -   The blocks inside a structure are all randomly passed to the delegated post-processor until it has transformed the limited amount
        -   Either constant or random number generator sampled during post-processing

#### Rule post-processor block entity configuration

-   Previously a rule could specify an optional fixed `output_nbt` which would be added to the processed output block entity
-   This field has now been changed to reference a `block_entity_modifier`
-   Existing `block_entity_modifier`'s are:
    -   `passthrough` Retains existing fields on the block entity
        -   This is the default if no `block_entity_modifier` is specified
    -   `append_static` Similar to previous `output_nbt` this provides fixed fields to add to the block entity
        -   A minor change is that this modifier appends configured fields to the processed block instead of replacing existing fields
    -   `clear` Removes any existing fields on the block entity
    -   `append_loot` Appends a loot table and seed to the block entity through required parameter:
        -   `loot_table` Referenced loot table to add to block entity as `LootTable` field
        -   Field `LootTableSeed` is also added to the block entity using random seeded by block position

### Game Events

-   `piston_contract` game event has been removed in favor of `block_deactivate`
-   `piston_extend` and `dispense_fail` game events have been removed in favor of `block_activate`
-   Many game events have new vibration frequencies:
    -   1: `step`, `swim`, `flap`
    -   2: `projectile_land`, `hit_ground`, `splash`
    -   3: `item_interact_finish`, `projectile_shoot`, `instrument_play`
    -   4: `entity_roar`, `entity_shake`, `elytra_glide`
    -   5: `entity_dismount`, `equip`
    -   6: `entity_mount`, `entity_interact`, `shear`
    -   7: `entity_damage`
    -   8: `drink`, `eat`
    -   9: `container_close`, `block_close`, `block_deactivate`, `block_detach`
    -   10: `container_open`, `block_open`, `block_activate`, `block_attach`, `prime_fuse`, `note_block_play`
    -   11: `block_change`
    -   12: `block_destroy`, `fluid_pickup`
    -   13: `block_place`, `fluid_place`
    -   14: `entity_place`, `lightning_strike`, `teleport`
    -   15: `entity_die`, `explode`

### Tags

#### Step Sounds

-   The blocks that can produce a combination of step sounds is controlled by `combination_step_sound_blocks`

### Display entity

#### Interpolation changes

-   Previous values are always discarded if `interpolation_duration` is `0`
-   Made sure that render properties are applied at the same time (so `block_state` is applied at the same time as transformation, i.e. at next tick after receiving update)
-   Entities are not rendered unless initial data is received. That means display entities might not show on the first tick.
-   Note: due to how game handles updates, changes to entities made after summoning might be delivered to clients with later tick

## Fixed bugs in Snapshot 23w12a

-   [MC-157727](https://bugs.mojang.com/browse/MC-157727) The small cube in honey/slime blocks isn't displayed in inventory
-   [MC-165221](https://bugs.mojang.com/browse/MC-165221) 3D Modeled Potions are not rendered correctly in the "GUI Display"
-   [MC-197241](https://bugs.mojang.com/browse/MC-197241) Players can change the color of a wolf's collar even if they're not its owner
-   [MC-201647](https://bugs.mojang.com/browse/MC-201647) Entity riding an entity can cause location/coordinate desync
-   [MC-256488](https://bugs.mojang.com/browse/MC-256488) Bamboo Raft and Raft with Chest models float above ground
-   [MC-256551](https://bugs.mojang.com/browse/MC-256551) Baby camels have a visible inventory
-   [MC-256585](https://bugs.mojang.com/browse/MC-256585) Z-fighting occurs on the text of hanging signs
-   [MC-259201](https://bugs.mojang.com/browse/MC-259201) The tops and bottoms of donkeys' ears are miscolored
-   [MC-259879](https://bugs.mojang.com/browse/MC-259879) Display entities with a rather large shadow\_radius value can cause performance issues
-   [MC-260020](https://bugs.mojang.com/browse/MC-260020) Reloading the world resets the Brown Mooshroom's given flower
-   [MC-260043](https://bugs.mojang.com/browse/MC-260043) Decorated Pots don't play breaking sound in creative mode
-   [MC-260047](https://bugs.mojang.com/browse/MC-260047) Decorated pots from the creative inventory and new blank decorated pots with no NBT will match their texture to the last decorated pot you crafted
-   [MC-260053](https://bugs.mojang.com/browse/MC-260053) When rotating a decorated pot with the debug stick, it will spawn a decorated pot item
-   [MC-260061](https://bugs.mojang.com/browse/MC-260061) Sniffer's ears and head z-fight
-   [MC-260069](https://bugs.mojang.com/browse/MC-260069) Growing cherry trees inside each other causes their leaves to decay
-   [MC-260240](https://bugs.mojang.com/browse/MC-260240) Sniffers that are in love sometimes don't attempt to approach one another to breed
-   [MC-260251](https://bugs.mojang.com/browse/MC-260251) The walking animations of sniffers don't change in relation to their movement speed
-   [MC-260282](https://bugs.mojang.com/browse/MC-260282) Sniffers can sniff out and follow players in spectator mode
-   [MC-260296](https://bugs.mojang.com/browse/MC-260296) Pink petal block models are not optimized
-   [MC-260317](https://bugs.mojang.com/browse/MC-260317) Sniffers try to sniff out obstructed blocks they can't reach
-   [MC-260320](https://bugs.mojang.com/browse/MC-260320) Parity Issue: Snifflets (Baby Sniffers) have an inconsistent model with Bedrock
-   [MC-260326](https://bugs.mojang.com/browse/MC-260326) Dying sniffers continue to dig
-   [MC-260409](https://bugs.mojang.com/browse/MC-260409) Cherry Grove biome is not in the #is\_overworld biome tag
-   [MC-260503](https://bugs.mojang.com/browse/MC-260503) Sniffers refuse to dig into soil with a non-solid block on top
-   [MC-260632](https://bugs.mojang.com/browse/MC-260632) Riding an entity that is far away causes client/server desync
-   [MC-260678](https://bugs.mojang.com/browse/MC-260678) Potion of Invisibility looks too similar to the Potion of Slow Falling
-   [MC-260750](https://bugs.mojang.com/browse/MC-260750) Magma blocks use unnecessary random ticking for an outdated feature, causing performance issues
-   [MC-260757](https://bugs.mojang.com/browse/MC-260757) Updating a large amount of Iron Bars causes the game to hang in-game or during the Saving world screen
-   [MC-260777](https://bugs.mojang.com/browse/MC-260777) Sniffers ignore some dangerous blocks while sniffing and pathfinding resulting in them being damaged
-   [MC-260778](https://bugs.mojang.com/browse/MC-260778) Sniffer tries to sniff out blocks outside the world border
-   [MC-260779](https://bugs.mojang.com/browse/MC-260779) Sniffers can dig into blocks outside the world border
-   [MC-260839](https://bugs.mojang.com/browse/MC-260839) Mobs can replace weapons held in their main hand with armor
-   [MC-260885](https://bugs.mojang.com/browse/MC-260885) Display entities summoned with initial transformation interpolate incorrectly from default transformation during next transformation
-   [MC-260897](https://bugs.mojang.com/browse/MC-260897) Display entity's previous state of interpolation doesn't work as expected

---

This week we're bringing you the Sniffer, Archaeology, and the Cherry Blossom biome as experimental features for the 1.20 update.

Changes for the 1.19.4 release include Interaction Entities, and updates to jukeboxes and horse breeding.

Happy brushing!

## Changes

-   Jukeboxes have changed to be at parity with Bedrock
-   Horse breeding has been updated
-   Updated the Realms screen to be more in line with the Singleplayer and Multiplayer screens

### Recipe unlocking

-   The Crafting Table recipe is unlocked immediately on creating a new world
-   The Crossbow recipe is no longer unlocked by sticks
-   The Soul Campfire recipe is no longer unlocked by sticks

### Jukebox

-   While playing a music disc, it will emit a redstone signal of 15
-   Droppers and hoppers can now interact with it

### Horses

-   When breeding horses and the like, the babies' speed, jump height and health are no longer biased toward the average
-   This change is intended to make horse breeding a viable way of getting great horses, if a player starts with good parents and puts in enough time and Golden Carrots

## Technical Changes

-   The vanilla resource pack en\_us language file is now sorted alphanumerically by key
-   A new recipe serializer `crafting_decorated_pot` has been added for the new Decorated Pot recipe
-   Added `show_notification` field to recipes
    -   Accepts a boolean which determines if a notification is shown when unlocking this recipe
    -   defaults to `true` if isn't specified

### Interaction Entities

A new type of entity that records attacks ("left clicks") and interactions ("right clicks"). Interactions are invisible and of a custom size.

Fields:

-   `width`: Width of the entity's bounding box (default `1`)
-   `height`: Height of the entity's bounding box (default `1`)
-   `attack`: Records the last attack action on the entity
-   `interaction`: Records the last interaction action on the entity
-   `response`: Boolean specifying if interacting should trigger a response (arm swing, sound effects, etc - default `false`)

#### Action Format

When an action is stored, it always has two fields:

-   `player`: The UUID (in standard integer array format) of the player performing the action
-   `timestamp`: The timestamp of the game tick when the event happened (stored as a long)

#### Advancement Triggers

-   Interacting with an Interaction entity triggers `player_interacted_with_entity`
-   Attacking an Interaction entity triggers `player_hurt_entity`

#### `execute on` with Interactions

The Interaction entity targets the player who last interacted with it. That makes the following possible:

-   `execute on attacker`: execute as the last player who attacked the entity
-   `execute on target`: execute as the last player who interacted with the entity

## Experimental Features

-   Added Sniffer mob
-   Added a Cherry Grove biome
-   Added Archaeology

### Sniffer

-   Sniffer Mob now available as an experimental feature
    -   The Sniffer is the mob vote winner of Minecraft Live 2022 and the first "ancient" mob added to the game
    -   Sniffers cannot be tempted or tamed
    -   Sniffers are passive friendly mobs
    -   Sniffers sniff in the air and occasionally dig for seeds
-   Torchflower now available as an experimental feature
    -   The Torchflower seed can be planted on farmland and grows into a flower
    -   The seed can be used to breed two Sniffers
    -   The full-grown flower can be harvested and replanted but can also be crafted into a dye

### Cherry Grove biome

-   Added a new Cherry Grove biome, with pretty cherry blossom trees
-   You can find it in the mountains, like Meadows

#### Pink Petals block

-   Added a new Pink Petals block with lots of pink flowers on the ground

#### Cherry Wood Set

-   Added a new Cherry wood set, with all the corresponding wooden things you can make from it. You need to have the Update 1.20 experimental features enabled to see it in game.

### Archaeology

#### The brush

-   The brush is a craftable item you can use to brush things

#### Suspicious Sand

-   Desert Temples and Desert Wells now contain Suspicious Sand. This fragile block is hard to spot and easy to destroy, so be careful!
-   Brushing the Suspicious Sand with a Brush will extract objects that were buried long ago

#### Pottery Shards

-   Pottery Shards have pictures on them
-   They cannot be crafted and are only found by brushing Suspicious Sand

#### Decorated Pots

-   Crafting four Pottery Shards together will create a Decorated Pot with a picture on each side
-   You can also use Brick items instead of Pottery Shards in the Decorated Pot recipe
    -   The sides that were made from Brick items will not have pictures
-   Smash a Decorated Pot with any block-breaking tool to break it apart and get the Pottery Shards back
    -   Or hit it with your fist to pick up the pot without breaking it

## Fixed bugs in Snapshot 23w07a

-   [MC-16533](https://bugs.mojang.com/browse/MC-16533) Horse Breeding never exceeds egg/spawn horse attributes
-   [MC-64522](https://bugs.mojang.com/browse/MC-64522) Server shows as "Old" in server list while starting
-   [MC-84633](https://bugs.mojang.com/browse/MC-84633) Resource packs: ambientocclusion flag only respects topmost parent
-   [MC-134448](https://bugs.mojang.com/browse/MC-134448) Drowned animation glitch
-   [MC-181412](https://bugs.mojang.com/browse/MC-181412) Removing a jukebox with a command while it's playing a music disc won't stop playing the music disc
-   [MC-194080](https://bugs.mojang.com/browse/MC-194080) Elytra model stutters by flying and turning
-   [MC-209409](https://bugs.mojang.com/browse/MC-209409) Sitting cats sink in water
-   [MC-226729](https://bugs.mojang.com/browse/MC-226729) Memory leakage problem in native operations
-   [MC-248249](https://bugs.mojang.com/browse/MC-248249) minecraft:forest\_rock feature does not work correctly when used with /place
-   [MC-256465](https://bugs.mojang.com/browse/MC-256465) Baby camels can enter boats despite adult camels not being able to
-   [MC-257282](https://bugs.mojang.com/browse/MC-257282) Allays sometimes have a several-second delay before deciding to follow the player
-   [MC-258457](https://bugs.mojang.com/browse/MC-258457) Resource Pack won't load if it contains reference to non-existing particles
-   [MC-258459](https://bugs.mojang.com/browse/MC-258459) Invalid forced resource pack can cause infinite reload loop on client
-   [MC-258580](https://bugs.mojang.com/browse/MC-258580) Player is kicked from a server for flying in death screen when dying on a Horse or Camel
-   [MC-258624](https://bugs.mojang.com/browse/MC-258624) The Title Screen Warning menu doesn't disappear after the player respawns
-   [MC-258697](https://bugs.mojang.com/browse/MC-258697) Invalid translation of "translationKey=narration.suggestion" in command block GUI
-   [MC-258902](https://bugs.mojang.com/browse/MC-258902) Opening a lectern on Adventure mode and closing it causes inventory desyncs
-   [MC-258907](https://bugs.mojang.com/browse/MC-258907) Advancement trigger "player\_interacted\_with\_entity" doesn't work with "area\_effect\_cloud" entity when used "glass\_bottle" item on it
-   [MC-259107](https://bugs.mojang.com/browse/MC-259107) Opening the crafting recipe book selects the recipe that appears under the mouse cursor
-   [MC-259218](https://bugs.mojang.com/browse/MC-259218) Onboarding isn't resumed after restarting Minecraft
-   [MC-259240](https://bugs.mojang.com/browse/MC-259240) The game crashes when navigating with arrow keys after changing key binds
-   [MC-259241](https://bugs.mojang.com/browse/MC-259241) Turtles can spawn inside each other causing them to get stuck and play constant sounds
-   [MC-259489](https://bugs.mojang.com/browse/MC-259489) Experimental "disabled items" can still be suggested as fuel by the recipe book
-   [MC-259573](https://bugs.mojang.com/browse/MC-259573) Blast Protection does not reduce explosion knockback in creative game mode
-   [MC-259675](https://bugs.mojang.com/browse/MC-259675) Capes occasionally jitter when moving and adjusting your rotation
-   [MC-259691](https://bugs.mojang.com/browse/MC-259691) Drowned that are swimming render outside of their hitboxes when looking up or down
-   [MC-259729](https://bugs.mojang.com/browse/MC-259729) "Falling Block" can appear in death messages
-   [MC-259796](https://bugs.mojang.com/browse/MC-259796) Creeper does not flash white and expand before exploding
-   [MC-259797](https://bugs.mojang.com/browse/MC-259797) Z-fighting occurs on the bottom of boots
-   [MC-259805](https://bugs.mojang.com/browse/MC-259805) Players cannot dismount when riding item\_display, block\_display and text\_display using the ride command
-   [MC-259808](https://bugs.mojang.com/browse/MC-259808) Allay wing animation skips frames/loops incorrectly as of 23w06a
-   [MC-259816](https://bugs.mojang.com/browse/MC-259816) Odd behavior when an item\_display, block\_display, or text\_display entity mounts another entity
-   [MC-259819](https://bugs.mojang.com/browse/MC-259819) Z-fighting on the text of text displays
-   [MC-259999](https://bugs.mojang.com/browse/MC-259999) Entities mounted on display entities do not visually update until after resync

---

Today we are bringing you the `damage` command and new display entities.

Damage safely!

## Changes

-   Jukeboxes now emit a note particle above them while playing a music disc to match Bedrock

### Accessibility

-   Added a new option in the Accessibility menu called Damage Tilt for controlling the amount of camera shake when being hurt
-   Added a tooltip in the Key Binds screen that specifies which keybinds are conflicting
-   "Notification Display Time" accessibility option was renamed to "Notification Time"

### Updated Create New World Screen

-   Tabs can be switched with the keyboard by pressing Ctrl+Tab and Ctrl+Shift+Tab
-   Specific tabs can also be navigated to by pressing Ctrl+Tab Number
    -   For example, Ctrl+2 navigates to the second tab
-   Added a screen to easily enable/disable experimental features
    -   The screen can always be found under the More-tab
    -   In snapshots a shortcut button can be found under the Game-tab

### Creative menu

-   Added painting variants to creative menu
-   Paintings with pre-defined variant will now display author and title in description when hovered over

## Technical Changes

-   Added display entities for flexible display of items, blocks and text
-   Added a `damage` command for applying damage to entities
-   Added `--pidFile` argument to dedicated server command line for printing process id to file
-   Added the following game events:
    -   `entity_dismount` with a vibration frequency of 6
    -   `entity_mount` with a vibration frequency of 7
-   Added a group of entities to display items, blocks and text
-   Added `execute summon` to allow customization of a newly spawned entity

### Display entities

Three new entities have been added for flexible display of items, blocks and text

-   Those entities, similarily to `marker`, don't tick and have no collisions or physics
-   Models render at entity position, with normal rotation around X and Y axis (so it can be controlled by teleport commands), but also with additional arbitrary model transform

#### Common data types

Tag contents for those entities include some new data types with complex structure. Any form can be used for modifying data, but only one form is used for saving.

##### `rotation`

-   Quaternion form (used for saving): array of 4 numbers, describing components (x, y, z, w)
-   Axis-angle form: object with following fields:
    -   `axis` - 3d vector
    -   `angle` - in radians

#### `transformation`

Arbitrary affine transform

-   Matrix form: array of 16 numbers, describing row-major matrix
-   Decomposed form (used for saving): object with following fields:
    -   `translation` - 3d vector
    -   `left_rotation`, `right_rotation` - `rotation`
    -   `scale` - 3d vector
    -   Transforms are composed in order `translation`, `left_rotation`, `scale`, `right_rotation`

#### Interpolation

Some properties of display entites can be interpolated. That means that clients will see gradual changes over time instead of instantenous jumps.

Display entities keep track of current and previous values of interpolated values:

-   All properties marked as "interpolated" are part of a single interpolation set
-   Any update to interpolated property will cause all values of interpolation set to be saved as "current"
    -   Data command executions that do not change value of property (even if it's present in NBT) do not count as updates
    -   Updates are synchronized to clients at most once per tick, so multiple updates within command will still count as single update
-   Previous current values are saved as "previous"
-   If interpolation is enabled, entity will transition between "previous" and "current" values over time
-   Start of interpolation (entity fully in "previous" state) is defined by field `interpolation_start` (game time, in ticks)
    -   Set to `-1` to load current game time instead)
-   End of interpolation (entity fully in "current" state) is defined as `interpolation_start` + `interpolation_duration` (in ticks)

#### Common properties

Every entity in family has the following fields:

-   `transformation` - `transformation` applied to model (after normal entity orientation). Defaults to identity. Interpolated
-   `billboard` - option to control if entity should pivot to face player when rendered:
    -   `fixed` - no rotation (default)
    -   `vertical` - entity can pivot around vertical axis
    -   `horizontal` - entity can pivot around horizontal axis
    -   `center` - entity can pivot around center point
-   `brightness` - if present, overrides light values used for rendering. Omited by default (which means rendering uses values from entity position). Object has two fields:
    -   `sky` - value of skylight, 0..15
    -   `block` - value of block light, 0..15
-   `view_range` - maximum view range of this entity. Actual distance depends on client-side render distance and entity distance scalling. Default value 1.0 (roughly the same as fireball)
-   `shadow_radius` - size of shadow. Defaults to 0 (no shadow). Interpolated
-   `shadow_strength` - strength of the shadow. Controls the opacity of the shadow as a function of distance to block below. Defaults to 1. Interpolated
-   `width`, `height` - describe size of culling bounding box. Bounding box spans vertically `y` to `y+height` and horizontally `width/2` in all directions from entity position. If either field is set to 0, culling is disabled. Both default to 0
-   `glow_color_override` - override glow border color. Defaults to 0 (use team color)

#### `item_display`

Displays a single item stack.

-   Stack can be changed with commands by setting slot `inventory.0`

Fields:

-   `item` - item stack to display. Same format as in inventory (example: `{id: "minecraft:dirt", Count: 1}`)
-   `item_display` - describes item model transform applied to item (as defined in `display` section in model JSON)
    -   Values: `none` (default), `thirdperson_lefthand`, `thirdperson_righthand`, `firstperson_lefthand`, `firstperson_righthand`, `head`, `gui`, `ground`, `fixed`

#### `block_display`

Displays a block state.

-   Does not display block entities, even if they would normally be created on block placement (like chest)

Fields:

-   `block_state` - block state to display. Same format as item held by endermen (example `{Name:"minecraft:dirt"}`)

#### `text_display`

Displays a text component.

Fields:

-   `text` - text to display. Components are resolved with the context of the display entity
-   `line_width` - line width used to split lines (note: new line can be also addded with `\n` characters). Defaults to 200
-   `text_opacity` - opacity (alpha component) of rendered text. Defaults to 255. Interpolated
-   `background` - color of background. Includes alpha channel. Defaults to 0x40000000. Interpolated
-   `default_background` - if true, rendering uses default text background color (same as in chat). Defaults to false
-   `shadow` - should text be displayed with shadow. Defaults to false
-   `see_through` - should text be visible through blocks. Defaults to false
-   `alignment` - how text should be aligned
    -   Values: `center` (default), `left`, `right`

Note: text display backgrounds uses new shader types `rendertype_text_background` and `rendertype_text_background_see_through`

### Damage Types

Damage Types are a new registry that can be extended through data packs. A Damage Type determines how damage is handled by the game. This includes which attributes the damage has as well as which death message is used when an entity dies due to that type of damage.

Example:

    {
      "exhaustion": 0.1,
      "message_id": "arrow",
      "scaling": "when_caused_by_living_non_player"
    }
    

Fields:

-   `message_id`: The message id used for deaths caused by this damage type
    -   Will be combined with other string fragments to form a translation key
-   `exhaustion`: The amount of hunger exhaustion caused by this damage type
-   `scaling`: Whether this damage type scales with difficulty levels. Possible values:
    -   `never`: Damage is always the same
    -   `always`: Damage always scales with difficulty
    -   `when_caused_by_living_non_player`: Damage scales with difficulty if it was caused by a living entity who is not a player
-   `effects`: Optional field controlling how damage manifests when inflicted on players. Possible values:
    -   `hurt` (default): the default hurt sound
    -   `thorns`: Thorns hurt sound
    -   `drowning`: Drowning sound
    -   `burning`: A single tick of burning sound
    -   `poking`: Berry bush poke sound
    -   `freezing`: Freeze tick sound
-   `death_message_type`: Optional field that controls if special death message variants are used. Possible values:
    -   `default` (default): No special death message logic is applied
    -   `fall_variants`: Show a variant of fall damage death instead of a regular death message, e.g. `death.fell.assist.item`
    -   `intentional_game_design`: Show the intentional game design message instead of a regular death message

Damage type tags control many aspects of how damage from different sources are interpreted.

### Commands

#### `damage`

New command to apply damage to entities.

Syntax:

-   `damage <target> <amount> [<damageType>] [at <location>]`
-   `damage <target> <amount> [<damageType>] [by <entity>] [from <cause>]`

Parameters:

-   `target`: The entity to damage
-   `amount`: Amount of damage to inflict
-   `damageType`: The type of damage to inflict
    -   This determines how the damage affects the entity as well as which death message is displayed
-   `entity`: The entity inflicting the damage
-   `cause`: The cause of the damage, in the case of indirect damage
    -   Example: When shot by an arrow, the `entity` is the Arrow projectile while `cause` might be a Skeleton
-   `location`: The location the damage originated at (when no entity caused the damage)
    -   For instance, `location` might represent the location of a Bed exploding in the Nether

#### `execute summon`

New `execute` sub-command for summoning new entity and binding context (`@s`) to it. Meant to simplify entity setup and reduce need for raw NBT editing.

-   `execute summon <entity id>`

### Predicates

#### Damage Type Predicates

The following fields have been removed from damage type predicates: `is_projectile`, `is_explosion`, `bypasses_armor`, `bypasses_invulnerability`, `bypasses_magic`, `is_fire`, `is_magic`, `is_lightning`.

A new `tags` array has been added. Each entry has two fields:

-   `id`: The ID of a damage type tag
-   `expected`: Whether the damage is expected to have or not have the tag for the predicate to match

### Game Rules

-   Added `doVinesSpread` game rule, determining if vines will spread to nearby blocks
    -   Defaults to `true`

## Fixed bugs in Snapshot 23w06a

-   [MC-12729](https://bugs.mojang.com/browse/MC-12729) Z-fighting can be seen on leggings and boots worn by entities
-   [MC-145765](https://bugs.mojang.com/browse/MC-145765) Both "Text Background" settings strings are overflowing the buttons
-   [MC-156443](https://bugs.mojang.com/browse/MC-156443) In some languages, text is too long and escapes buttons
-   [MC-198874](https://bugs.mojang.com/browse/MC-198874) Opening a Minecart with Hopper provokes Piglins, even though opening a Hopper doesn't provoke them
-   [MC-209622](https://bugs.mojang.com/browse/MC-209622) Sculk sensors do not detect item frame / glow item frame interactions
-   [MC-209896](https://bugs.mojang.com/browse/MC-209896) Sculk sensors are not activated upon placing glowstone into respawn anchors
-   [MC-209929](https://bugs.mojang.com/browse/MC-209929) Sculk sensors are not activated upon filling composters
-   [MC-210276](https://bugs.mojang.com/browse/MC-210276) Sculk sensors are not activated upon trampling farmland
-   [MC-210294](https://bugs.mojang.com/browse/MC-210294) Sculk sensors are not activated upon mounting or dismounting any non-biological entities
-   [MC-210334](https://bugs.mojang.com/browse/MC-210334) Sculk sensors are not activated upon sheep being dyed
-   [MC-210707](https://bugs.mojang.com/browse/MC-210707) Sculk sensors are not activated upon closing chest boats, chest rafts, or chest minecarts
-   [MC-210715](https://bugs.mojang.com/browse/MC-210715) Sculk sensors are not activated upon attaching or removing leads from entities
-   [MC-212501](https://bugs.mojang.com/browse/MC-212501) Sculk sensors are not activated upon collecting books from lecterns
-   [MC-213803](https://bugs.mojang.com/browse/MC-213803) Sculk sensors are not activated upon harvesting glow berries from cave vines
-   [MC-215767](https://bugs.mojang.com/browse/MC-215767) Sculk sensors do not detect turtles laying an egg
-   [MC-233972](https://bugs.mojang.com/browse/MC-233972) Text can appear outside of buttons in the key binds menu when assigning keys to functions or when multiple functions are assigned to the same key
-   [MC-236988](https://bugs.mojang.com/browse/MC-236988) Sculk sensors are not activated upon using shears on cave/twisting/weeping vines or kelp
-   [MC-237450](https://bugs.mojang.com/browse/MC-237450) The "Simulation Distance" text can appear outside of its slider
-   [MC-237879](https://bugs.mojang.com/browse/MC-237879) Sculk sensors are not activated upon villagers working with composters
-   [MC-249878](https://bugs.mojang.com/browse/MC-249878) Text can appear outside of the "Device" button within the music and sound options menu
-   [MC-251917](https://bugs.mojang.com/browse/MC-251917) No gear equipping sound or subtitle when a shield is placed into the offhand slot
-   [MC-251934](https://bugs.mojang.com/browse/MC-251934) Sculk sensors are not activated upon frogs laying frogspawn
-   [MC-252434](https://bugs.mojang.com/browse/MC-252434) Sculk sensors are activated when interacting with fences while holding leads
-   [MC-257873](https://bugs.mojang.com/browse/MC-257873) Swapping an armor piece with an armor piece of the same type doesn't play its equipping sound
-   [MC-258156](https://bugs.mojang.com/browse/MC-258156) The Warden does not deal the same amount of damage to the player and entities in difficult mode
-   [MC-258622](https://bugs.mojang.com/browse/MC-258622) Fire charge isn't in the Ingredients tab in creative inventory
-   [MC-259193](https://bugs.mojang.com/browse/MC-259193) The "Notification Display Time" text can appear outside of its slider
-   [MC-259195](https://bugs.mojang.com/browse/MC-259195) Using /ride on an entity in another dimension causes client/server desync
-   [MC-259197](https://bugs.mojang.com/browse/MC-259197) The damage tilt effect isn't accessible-friendly
-   [MC-259221](https://bugs.mojang.com/browse/MC-259221) Using the "/ride" command on invalid entities teleports players to their position
-   [MC-259224](https://bugs.mojang.com/browse/MC-259224) Blocking attacks with shields causes the damage tilt to play and red damage tint to show
-   [MC-259227](https://bugs.mojang.com/browse/MC-259227) /execute if loaded alone always fails
-   [MC-259233](https://bugs.mojang.com/browse/MC-259233) Argument error messages for low values are inconsistently spelled
-   [MC-259245](https://bugs.mojang.com/browse/MC-259245) An enderman ridden with /ride constantly teleports if the player looks at the enderman's eyes
-   [MC-259247](https://bugs.mojang.com/browse/MC-259247) The execute on owner sub-command does not select the owner of a horse, donkey, llama, or mule
-   [MC-259360](https://bugs.mojang.com/browse/MC-259360) The "selectWorld.mapFeatures.info" string is missing a comma after the word "Shipwrecks"
-   [MC-259432](https://bugs.mojang.com/browse/MC-259432) Single missing pixel in 'chestplate\_trim' item texture
-   [MC-259442](https://bugs.mojang.com/browse/MC-259442) Can't shift click items into second anvil slot
-   [MC-259454](https://bugs.mojang.com/browse/MC-259454) Loot table for hoglin stable chests uses the loot table for bridge chests instead
-   [MC-259468](https://bugs.mojang.com/browse/MC-259468) empty\_slot\_amethyst\_shard does not show in Smithing Table slot
-   [MC-259599](https://bugs.mojang.com/browse/MC-259599) Curse of Binding armor can be removed by swapping armor with right click in hotbar
-   [MC-259635](https://bugs.mojang.com/browse/MC-259635) The color palettes for "iron" and "iron\_darker" trims are flipped
-   [MC-259640](https://bugs.mojang.com/browse/MC-259640) The lightest three colors of "iron" and "iron\_darker" color palettes are identical

---

In this snapshot we've tweaked the armor trim feature and redefined the Create New World user experience flow.

Happy world creating!

## Changes

-   Updated the Create New World screen
-   Interacting with armor or elytra items in-hand will now swap them with equipped gear
-   The enchantment glint has been further tweaked to be slower and less visible, but also have more contrast in some intervals

### Accessibility

-   Changed how tooltips in the menu UI are positioned so buttons are still readable
-   Added two new options in the Accessibility menu for adjusting the speed and transparency of enchantment glints

### Updated Create New World Screen

-   The screen is now organized into three tabs
    -   The Game-Tab allows to set the world name, Gamemode, Difficultly and whether to allow cheats
    -   The World-Tab allows to set the World-Type and Seed, and to toggle the generation of structures and the bonus chest
    -   The More-Tab provides access to the Game Rules and DataPack Selection Screen
-   Removed the Import Settings button and the corresponding Export Settings button in the Edit World Screen

## Technical Changes

### Trim Patterns & Materials

-   The following data is now also defined by a trim material:
    -   `override_armor_materials` which is an optional map of armor material to overriden color palette
        -   Map key is the armor material that this trim material wants to override with a different color palette
        -   Map value is the name of the color palette that will be used when this trim material is applied to an armor piece with the corresponding armor material
-   The following data is no longer defined by a trim material:
    -   `incompatible_armor_material`

### Commands

#### `effect`

-   `infinite` is now a valid option for effect durations
    -   Infinite effect durations show up as "∞" in the player inventory view

## Experimental Features

-   Armor trims can now be applied to leather armor
-   Armor can now have trims of the same material it is made out of
    -   For example, a Golden Chestplate with a Golden Armor Trim is now possible
-   The texture of the Dune armor trim has been tweaked so that the symbol on the chestplate is moved up a few pixels
-   Loot tables for smithing templates have been adjusted

### Loot tables for smithing templates

-   The following common armor trims now always generate 2 templates in a chest when found:
    -   Dune
    -   Coast
    -   Wild
    -   Sentry
-   This is to give new players a chance to understand that smithing templates are consumed when used
-   Netherite Upgrade smithing templates have been made twice as common
    -   While we do want Netherite upgrading to be more challenging, we felt the previous rates did not encourage further exploration after finding the first Netherite Upgrade template
-   1 Eye Armor Trim is now guaranteed in every Stronghold library chest
    -   This is so even in the most unlucky worlds, this armor trim can still be found
-   Woodland Mansions now have a greatly increased chance of generating the Vex Armor Trim smithing template
    -   Woodland Mansions already have very few chests that utilize loot tables - in unlucky generations, none at all. It was too rare to find one of these trims, and we want the challenge of getting the Vex Armor Trim to be more about finding a Woodland Mansion to begin with
-   Across the board, smithing templates have been made slightly more common
    -   Due to the method of crafting copies of templates, we want the process of discovering another template in a structure to feel like the player has just saved 7 diamonds. If the templates are too rare, this situation does not happen as much, meaning players will not be encouraged to explore more structures

## Fixed bugs in Snapshot 23w05a

-   [MC-127749](https://bugs.mojang.com/browse/MC-127749) Cape is jittering; movement way sharper than in snapshot 18w03b
-   [MC-147711](https://bugs.mojang.com/browse/MC-147711) Drowned no longer have a different swimming animation
-   [MC-216270](https://bugs.mojang.com/browse/MC-216270) It's not possible to replace armor by right clicking while holding the armor item
-   [MC-252625](https://bugs.mojang.com/browse/MC-252625) Frogs play a running animation after the NoAI NBT is applied
-   [MC-254074](https://bugs.mojang.com/browse/MC-254074) Frogs don't play their walking animation when they take damage
-   [MC-256479](https://bugs.mojang.com/browse/MC-256479) Camels don't play their walking animations when they are damaged
-   [MC-256493](https://bugs.mojang.com/browse/MC-256493) Camels don't have smooth transitions to their idle states when they stop moving
-   [MC-256650](https://bugs.mojang.com/browse/MC-256650) Frogs don't have smooth transitions to their idle states when they stop moving
-   [MC-256664](https://bugs.mojang.com/browse/MC-256664) Camels play their walking animations after the "NoAI" NBT tag is applied to them
-   [MC-257464](https://bugs.mojang.com/browse/MC-257464) Axolotl walking animation stutters when moving slowly
-   [MC-259206](https://bugs.mojang.com/browse/MC-259206) The accessibility onboarding screen can not display any language other than English (US)
-   [MC-259357](https://bugs.mojang.com/browse/MC-259357) Text inside the smithing table GUI renders behind the armor stand model in some languages
-   [MC-259362](https://bugs.mojang.com/browse/MC-259362) The "item.minecraft.smithing\_template.netherite\_upgrade.additions\_slot\_description" string is missing an article before the word "Netherite"
-   [MC-259370](https://bugs.mojang.com/browse/MC-259370) Stronghold library loot table has been replaced by stronghold altar loot table
-   [MC-259389](https://bugs.mojang.com/browse/MC-259389) Incompatible crafting arrow overlay in the new smithing GUI uses the position of the legacy smithing GUI
-   [MC-259399](https://bugs.mojang.com/browse/MC-259399) The armor stand model within the smithing table GUI doesn't render the output item after resizing the game window
-   [MC-259418](https://bugs.mojang.com/browse/MC-259418) Camels with large "LastPoseTick" NBT values still behave strangely and cause a variety of issues
-   [MC-259420](https://bugs.mojang.com/browse/MC-259420) Pixels not present in the palettes get erased, not kept

---

Tuesday is the new Wednesday, did you know? Here is snapshot 23w04a with a new experimental Armor Trim Smithing feature in the Update\_1\_20 experimental pack.

Happy trimming!

## Changes

-   Enchantment glint on items and armor is now more subtle

## Experimental Features

-   Added a new armor trimming system to visually customize your armor
-   Added Smithing Template items
-   Redesigned the Smithing Table
-   Changed how Netherite equipment is crafted

### Smithing Templates

-   Smithing Tables have been redesigned into a workstation for physical equipment upgrades and modifications
-   Alongside slots for combining a piece of equipment and materials, there is now a required slot for an item type called Smithing Templates
-   Smithing Templates define what type of upgrade you will be making to equipment
    -   It specifies both what type of items you can upgrade, and which ingredients are valid to customize the upgrade
    -   There are currently two categories of Smithing Templates: Armor Trim and Netherite Upgrade
-   Smithing Templates are consumed when used to upgrade an item in the Smithing Table
-   You can craft a copy of a Smithing Template in the Crafting Table with 7 diamonds + 1 block of material that the template is made out of + 1 smithing template, which will output 2 of the same Smithing Template

### Netherite Equipment

-   Netherite equipment crafting now also requires a Netherite Upgrade Smithing Template
-   Netherite Upgrade Smithing Templates can be found randomly in all Bastion Remnant chests, and there is a guarantee of 2 in every Treasure Room Bastion Remnant
-   This change was made for a variety of reasons:
    -   Increase the time players utilize Diamond equipment before Netherite
    -   Make Netherite equipment a more significant achievement in the game's progression
    -   Adapt Netherite more naturally into the new Smithing Table crafting system

### Armor Trims

-   You can now visually customize your armor with a variety of unique trims at the Smithing Table
    -   All armor is viable for trims except for leather armor
-   Armor trims are purely visual with no gameplay benefits, and can only be applied to Helmets, Chestplates, Leggings and Boots
    -   All trim patterns are visually the same on an armor's item icon, but the color will still change based on the trim material
    -   To check which trim pattern a piece of armor has, you can hover over it in the inventory
-   Armor Trim Smithing Templates can be found all throughout the world, and each of the following structures contain their own unique Smithing Template:
    -   Pillager Outpost
        -   Sentry Armor Trim
    -   Desert Pyramid
        -   Dune Armor Trim
    -   Shipwreck
        -   Coast Armor Trim
    -   Jungle Temple
        -   Wild Armor Trim
    -   Ocean Monument
        -   Tide Armor Trim
    -   Ancient City
        -   Ward Armor Trim
    -   Woodland Mansion
        -   Vex Armor Trim
    -   Nether Fortress
        -   Rib Armor Trim
    -   Bastion Remnant
        -   Snout Armor Trim
    -   Stronghold
        -   Eye Armor Trim
    -   End City
        -   Spire Armor Trim
-   Smithing Templates are found in chests in their respective structure, except for the Ocean Monument. Instead of finding it in chests, Elder Guardians sometimes drop a Smithing Template upon death
-   Some Armor Trim Smithing Templates are rarer than others, so be on the lookout for them to impress your friends!
-   An armor trim has two properties: a pattern and a material
    -   The pattern is defined by the Smithing Template used to apply the trim, and represents the visual pattern of the trim
    -   The material is defined by what ingredient you used to apply the trim, and represents the color of the trim
-   The viable ingredients you can use to define the color of your armor trim are the following:
    -   Iron
    -   Copper
    -   Gold
    -   Lapis
    -   Emerald
    -   Diamond
    -   Netherite
    -   Redstone
    -   Amethyst
    -   Quartz
-   Armor cannot have the same material it is made of applied to it as a trim
    -   For example, a Golden Chestplate cannot have a Golden Armor Trim

## Technical Changes

-   Added a new type of atlas configuration source: `paletted_permutations`
    
-   Armor Stands now preserve custom names when placed and broken
    
-   A new registry `trim_pattern` has been added for the armor trim system
    
-   A new recipe serializer `smithing_transform` has been added for the updated Netherite Upgrade recipe
    
-   A new recipe serializer `smithing_trim` has been added for the new Armor Trim recipe
    
-   Smithing table has temporarily two menu types
    
    -   Old menu without Smithing Template slot has been renamed to `legacy_smithing`
        -   Will be removed when Armor Trim feature stops being an experimental feature
    -   New menu with Smithing Template slot was added called `smithing`
-   Added new flag (value 128) to `HideFlags` NBT field for hiding armor trim item tooltips
    

### Paletted Permutations

-   `paletted_permutations` is a new type of atlas configuration source used to dynamically generate new textures in memory based on a set of color palettes
-   Color palettes allow you to swap out the colors of a texture without having to supply all files for the variants of a texture in a resource pack
-   This is useful for things like armor trims, where you want to be able to change the color of parts of the armor without having to create a new texture for each color
-   The `paletted_permutations` source has a set of required parameters:
    -   `textures` A list of namespaced locations of base textures
        -   These textures will be used to generate variants of them that have been modified by color palettes
    -   `palette_key` A namespaced location of a color palette key file
        -   A color palette key is used to define the set of key pixel colors we want to swap out with the color palettes defined below
    -   `permutations` A map of permutations from suffix to a namespaced location of a color palette file
        -   The suffix is appended at the beginning to the resource location of the output variant textures, with a `_` character separating the suffix and the base texture name
        -   The color palette is a texture file with a set of pixels that are used for replacing pixels that match the color palette key in each base texture
        -   The number of pixels in each color palette must be the same as that of the `palette_key` defined for this source
        -   Key matching is done by comparing the RGB values of each pixel in the `palette_key` to the RGB values of each pixel in the color palette
        -   Alpha channel is ignored for key matching, but in the resulting texture the alpha channel is multiplied with the color palette's alpha channel
        -   Pixels that do not match the `palette_key` are copied over to the resulting texture as-is
-   After defining a `paletted_permutations` source, you can then reference those namespaced output textures in other resources in your resource pack
    -   For example, if you have the following `paletted_permutations` source:
        
            {
                "type": "paletted_permutations",
                "textures": [
                    "minecraft:item/leather_helmet",
                    "minecraft:item/leather_chestplate",
                    "minecraft:item/leather_leggings",
                    "minecraft:item/leather_boots"
                ],
                "palette_key": "minecraft:colormap/color_palettes/leather_armor_color_key",
                "permutations": {
                    "red": "minecraft:colormap/color_palettes/red",
                    "green": "minecraft:colormap/color_palettes/green",
                    "blue": "minecraft:colormap/color_palettes/blue"
                }
            }
            
        
    -   You can then reference the resulting textures in other resources like this:
        
            {
                "textures": {
                    "layer0": "minecraft:item/leather_helmet_red",
                    "layer1": "minecraft:item/leather_chestplate_green",
                    "layer2": "minecraft:item/leather_boots_blue"
                }
            }
            
        

### Trim Patterns & Materials

-   Trim patterns and materials for armor are defined by the server through the `trim_pattern` and `trim_material` registry respectively
    -   As a result, new trim patterns and materials can be added via data packs
-   These are synchronized to clients when they join the server
    -   However, clients must have an accompanying resource pack to see those registered trim patterns and materials
    -   The paths to these textures are inferred based on the filename of the pattern json, and will try to find the textures within the same namespace as the trim pattern's `name` field
-   The following data is defined by a trim pattern:
    -   `asset_id` which is a namespaced id used to infer texture locations and localization
    -   `template_item` which is the id of the smithing template item used to apply the trim pattern
    -   `description` which is a text component used for displaying the pattern name of an armor trim when hovering an armor itemstack
-   The following data is defined by a trim material:
    -   `asset_name` which is a string used as a suffix for armor trim texture locations
    -   `ingredient` which is the id of the ingredient item used to apply the trim material
    -   `item_model_index` which is a float which defines the item model override each armor item model should target to change their visuals for this material
    -   `incompatible_armor_material` which is an optional id of the armor material this trim material cannot be applied to
    -   `description` which is a text component used for displaying the material name of an armor trim when hovering an armor itemstack
        -   The style defined in this description is applied to the armor trim pattern `description` as well

### Commands

-   New relation available for `execute on`: `origin`:
    -   shooter, if the executing entity is a projectile (like arrow, fireball, trident, firework, thrown potion, etc.)
    -   thrower, if the executing entity is an item
    -   source of effect, if the executing entity is an area effect cloud
    -   igniter, if the executing entity is a primed tnt
    -   summoner, if the executing entity is evoker fangs or a vex

## Fixed bugs in 23w04a

-   [MC-198809](https://bugs.mojang.com/browse/MC-198809) Blast Protection does not reduce explosion knockback except at very high levels
-   [MC-259189](https://bugs.mojang.com/browse/MC-259189) "Narrator: Not Available" isn't grayed out on accessibility splash
-   [MC-259204](https://bugs.mojang.com/browse/MC-259204) All goat horns display as Ponder goat horns and play the Ponder instrument
-   [MC-259211](https://bugs.mojang.com/browse/MC-259211) You cannot select incompatible resource packs within the resource packs menu via keyboard navigation

---

We're now releasing the first snapshot for Minecraft 1.19.4. This release contains new accessibility functionality, new commands and plenty of bug fixes!

Happy mining!

## Changes

-   Vexes now use a separate charging animation when empty-handed
-   Armor Stands now preserve custom names when placed and broken

### Accessibility

-   Added an accessibility onboarding screen for players launching the game for the first time
-   Added arrow key navigation
-   The Resource Pack screen is now keyboard-navigatable
-   Auto-Jump is now off by default
-   Added a new "Notification Display Time" accessibility option
    -   Changes how long notifications such as unlocked recipes, advancements, subtitles and selected item names are visible for

#### Arrow key navigation

-   Menu screens can now be navigated by using the arrow keys
-   When navigating with arrow keys, sliders need to be activated by pressing Enter or Space to start changing the value

## Technical Changes

-   The data pack version is now 11
-   Added a network protocol feature for forcing bundle of packets to be processed within same client tick
-   Added `fallback` fields to `translate` chat components
-   Out-of-bound arguments in `translate` formats are no longer silently ignored
-   The `clone` command now supports cloning to and from different dimensions
-   A new `string` source is now available for the `data modify` command
-   New `execute` sub-commands

### Network Protocol

-   Clients now reset their Secure Chat session state when receiving the login packet

#### Packet bundles

-   Added new delimiter packet to clientbound game protocol
-   All packets between two delimiters are guaranteed to be processed within same tick
-   For security reasons this feature is not supported in serverbound direction

### Block Behavior

-   Fire burns out faster in certain biomes, and this is now controlled by the `increased_fire_burnout` biome tag

### Mob Spawning

-   The `only_allows_snow_and_gold_rabbits` biome tag has been renamed to `spawns_gold_rabbits` to match its behavior
-   White Rabbit variants are now controlled by the `spawns_white_rabbits` biome tag
-   Fox variants are now controlled by the `spawns_snow_foxes` biome tag

### Mob Behavior

-   Snow Golems melting in warm biomes is now controlled by the `snow_golem_melts` biome tag

### Commands

#### `clone`

The clone command now supports specifying the source and target dimensions. New syntax:

`clone [from <sourceDimension>] <begin> <end> [to <targetDimension>] <destination> ...`

Parameters:

-   `sourceDimension`: id of dimension to clone from
-   `targetDimension`: id of dimension to clone to

#### `data`

New source available:

-   `string <entity|block|storage> [path] [start] [end]` - reads a value as text, resulting in a string value

New arguments:

-   `start`: Index of first character to include at the start of the string
-   `end`: Index of the first character to exclude at the end of the string

#### `execute`

##### `execute if|unless`

New conditions available for the `execute if|unless` sub-command:

-   `execute if|unless loaded <pos>` - checks if the position given is fully loaded (in regard to both blocks and entities)
-   `execute if|unless dimension <dimension>` - checks if the execution is in a matching dimension

Parameters:

-   `pos`: Block position to check
-   `dimension`: A dimension id

##### `execute on`

New `execute` sub-command for selecting entities based on relation to the current executing entity:

-   `execute on <relation>`

Relations:

-   `vehicle` - entity that the executing entity is riding
-   `passengers` - all entities directly riding the executing entity (no sub-passengers)
-   `controller` - entity that is controlling the executing entity (for example: first passenger in a boat)
-   `owner` - owner of the executing entity, if it is a tameable animal (like cats, wolves or parrots)
-   `leasher` - entity leading the executing entity with a leash (might be a leash knot in case of being attached to a fence)
-   `target` - attack target for the executing entity
-   `attacker` - last entity that damaged the executing entity in the previous 5 seconds

If the relation is not applicable to the executing entity or there are no entities matching it, selector returns zero elements.

#### `title`

-   All time arguments to `title times` are now time durations and work with `t`, `s` and `d` suffixes

#### `weather`

-   The duration of the weather change now matches the game's regular weather cycle if not specified
-   The `duration` parameter is now a time duration in ticks and works with `t`, `s` and `d` suffixes
    -   To retain existing functionality, you need to add an `s` suffix to pre-existing commands

#### `ride`

New command to allow entities to start or stop riding other entities

Syntax:

-   `ride <target> mount <vehicle>`
    -   Makes a single target mount a single vehicle
    -   The command will fail if:
        -   `vehicle` is a player
        -   `target` is already riding a vehicle
        -   `target` and `vehicle` are the same entity
        -   `vehicle` is already a passenger (direct or indirect) of `target`
-   `ride <target> dismount`
    -   Dismounts `target` from any vehicle it is riding
    -   Fails if `target` is not riding anything

### Game Rules

-   Added `commandModificationBlockLimit`, controlling the maximum number of blocks changed in one execution of `clone`, `fill` and `fillbiome`

### Chat components

#### Translation fallback

Added an optional `fallback` field to `translate` text components.

-   The new field is a string that will be used in place of translation if it is missing
-   If `fallback` is missing, the old behavior (i.e. using the key itself as the translation) is preserved

## Experimental Features

### Note block interaction

-   Mob heads can now be placed on top of note blocks without sneaking

## Fixed bugs in 23w03a

-   [MC-26678](https://bugs.mojang.com/browse/MC-26678) Damage wobble no longer shows direction of incoming damage
-   [MC-30403](https://bugs.mojang.com/browse/MC-30403) Sprinting isn't canceled when dismounting rideable entities while sprinting
-   [MC-121048](https://bugs.mojang.com/browse/MC-121048) When an entity dies, the combat tracker only records the killing blow
-   [MC-122595](https://bugs.mojang.com/browse/MC-122595) /weather command with duration 0 has the same weather for longer time
-   [MC-136534](https://bugs.mojang.com/browse/MC-136534) All command blocks think they're facing south with caret notation
-   [MC-149144](https://bugs.mojang.com/browse/MC-149144) Multiple buttons can be selected by pressing another button and Tab
-   [MC-155433](https://bugs.mojang.com/browse/MC-155433) Minecart with hopper not picking matching items from a mixed pile
-   [MC-165595](https://bugs.mojang.com/browse/MC-165595) Guardian beam does not render when over a certain "Time" in level.dat
-   [MC-181832](https://bugs.mojang.com/browse/MC-181832) The "/spreadplayers" command doesn't spread entities in the specified dimension
-   [MC-191942](https://bugs.mojang.com/browse/MC-191942) The buttons in the multiplayer menu are not evenly spaced
-   [MC-222518](https://bugs.mojang.com/browse/MC-222518) Skeleton/Zombie Horse's & Donkey/Mule's saddles and chests are outdated/have errors
-   [MC-224960](https://bugs.mojang.com/browse/MC-224960) The spectate command does not work between dimensions
-   [MC-230678](https://bugs.mojang.com/browse/MC-230678) Cauldron fills with powder snow in frozen ocean biome while it's visually raining
-   [MC-233893](https://bugs.mojang.com/browse/MC-233893) Burning mobs won't get extinguished by rain in warm patches of Frozen Ocean biome
-   [MC-235260](https://bugs.mojang.com/browse/MC-235260) Hopper minecart at (0, 0, 0) transfers items slower than normal
-   [MC-247836](https://bugs.mojang.com/browse/MC-247836) Riptide doesn't work in rain within a frozen ocean biome
-   [MC-252773](https://bugs.mojang.com/browse/MC-252773) Goat Horn without instrument NBT and with other NBT data (such as text) does not play
-   [MC-255545](https://bugs.mojang.com/browse/MC-255545) Magma Cube shadows do not change with size
-   [MC-255811](https://bugs.mojang.com/browse/MC-255811) Level#isRainingAt(BlockPos) always returns false for snowy and frozen biomes, even when it is raining
-   [MC-256292](https://bugs.mojang.com/browse/MC-256292) Goats don't spawn on grass after initial world generation
-   [MC-256555](https://bugs.mojang.com/browse/MC-256555) Camel sits down for a split second when spawned
-   [MC-256576](https://bugs.mojang.com/browse/MC-256576) Players become the controlling passengers of unsaddled camels when mounting them while other players are already riding them
-   [MC-256838](https://bugs.mojang.com/browse/MC-256838) The facing direction of the camel doesn't match
-   [MC-257082](https://bugs.mojang.com/browse/MC-257082) Sprinting whilst riding an entity or flying with elytra changes your field of view
-   [MC-257346](https://bugs.mojang.com/browse/MC-257346) Vexes with empty hand make obscene gesture
-   [MC-257418](https://bugs.mojang.com/browse/MC-257418) Camels sometimes sit down for a split second when receiving damage
-   [MC-257755](https://bugs.mojang.com/browse/MC-257755) Elements within the realms menu are not selected in order when using the TAB key if you're not currently a member of any realm
-   [MC-257875](https://bugs.mojang.com/browse/MC-257875) Fire charges aren't consumed when igniting creepers using them in survival or adventure mode
-   [MC-258163](https://bugs.mojang.com/browse/MC-258163) ClientboundSectionBlocksUpdatePacket serialization breaks after 2^19 block states
-   [MC-258173](https://bugs.mojang.com/browse/MC-258173) Entering an End Portal whilst sleeping causes the bed to be occupied permanently
-   [MC-258246](https://bugs.mojang.com/browse/MC-258246) "Telemetry Data" button is missing an ellipsis
-   [MC-258295](https://bugs.mojang.com/browse/MC-258295) Villager AI broken when workstation is nearby
-   [MC-258430](https://bugs.mojang.com/browse/MC-258430) Camels with large LastPoseTime values offset the player view model strangely
-   [MC-258953](https://bugs.mojang.com/browse/MC-258953) Out of memory screen has raw message in the title

---

