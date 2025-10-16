# Minecraft 1.20 Pre-Release 5

Summer is around the corner here at the office, and what better time to stay inside and try out the new pre-release?!

Happy crafting, you wonderful people!

## Library version updates

-   `uniform` font has been updated to use Unifont 15.0.03 (was 15.0.01 last pre-release)

## Fixed bugs in 1.20 Pre-release 5

-   [MC-120158](https://bugs.mojang.com/browse/MC-120158) Anvils and other falling;;_;;blocks with HurtEntities set to true kill items and xp orbs
-   [MC-261294](https://bugs.mojang.com/browse/MC-261294) Jack o'lantern can be placed on the player or armor stand head without commands and without appearing the blur
-   [MC-262334](https://bugs.mojang.com/browse/MC-262334) Item display entities have wrong lighting when they're rotated
-   [MC-262504](https://bugs.mojang.com/browse/MC-262504) Recipes for colored wool, carpets, and beds in the recipe book are not grouped
-   [MC-262513](https://bugs.mojang.com/browse/MC-262513) Blocks placed in the spot of a previously broken block will display the first frame of the breaking animation until updated
-   [MC-262514](https://bugs.mojang.com/browse/MC-262514) Unbreakable blocks display the first breaking animation frame when attempting to mine them
-   [MC-262690](https://bugs.mojang.com/browse/MC-262690) The player can still jump from the edge of the honey block
-   [MC-262730](https://bugs.mojang.com/browse/MC-262730) Biomes being partially overwritten / regenerated in 1.20pre2 inside old world
-   [MC-262773](https://bugs.mojang.com/browse/MC-262773) Markers, interaction, and display entities prevent weighted pressure plates from deactivating
-   [MC-262778](https://bugs.mojang.com/browse/MC-262778) Losing control of a ridden mob with levitation and then re-gaining control causes levitation to persist indefinitely
-   [MC-262797](https://bugs.mojang.com/browse/MC-262797) Book model not rendering in Enchanting Table GUI
-   [MC-262801](https://bugs.mojang.com/browse/MC-262801) Z-fighting occurs on trimmed enchanted armor in the inventory

---

# Minecraft 1.20 Pre-Release 4

We've now released 1.20 Pre-release 4, resolving a crash in the Multiplayer screen introduced in the last pre-release.

---

# Minecraft 1.20 Pre-Release 3

We are now releasing 1.20 Pre-release 3, containing even more bug fixes.

Happy crafting!

## Fixed bugs in 1.20 Pre-release 3

-   [MC-121788](https://bugs.mojang.com/browse/MC-121788) Jump boost, slow falling and levitation don't apply to ridden horses, pigs or striders until after a relog
-   [MC-152258](https://bugs.mojang.com/browse/MC-152258) Riding an entity with slow falling will not stop fall damage
-   [MC-181280](https://bugs.mojang.com/browse/MC-181280) Incorrect textures can sometimes be displayed
-   [MC-259912](https://bugs.mojang.com/browse/MC-259912) Saddled horses can infinitely retain Levitation effect
-   [MC-260653](https://bugs.mojang.com/browse/MC-260653) Markers, interaction, and display entities can prevent pressure plates from deactivating
-   [MC-260903](https://bugs.mojang.com/browse/MC-260903) Less recent attacker can be credited for kill
-   [MC-261202](https://bugs.mojang.com/browse/MC-261202) Teleporting a display entity jitters the player riding on the stack
-   [MC-262324](https://bugs.mojang.com/browse/MC-262324) Teleporting a mob while riding it doesn't work well
-   [MC-262505](https://bugs.mojang.com/browse/MC-262505) Iron golems can produce particles for blocks they're not colliding with
-   [MC-262593](https://bugs.mojang.com/browse/MC-262593) The word "occurred" is misspelled as "occured" within two realms strings
-   [MC-262684](https://bugs.mojang.com/browse/MC-262684) Game icon has low resolution
-   [MC-262709](https://bugs.mojang.com/browse/MC-262709) Dispensers do not dispense boats at the correct height
-   [MC-262712](https://bugs.mojang.com/browse/MC-262712) Alternative recipes in recipe book do not appear on right-click
-   [MC-262714](https://bugs.mojang.com/browse/MC-262714) The "key.keyboard.unknown" string displayed within the key binds menu is improperly capitalized

---

# Minecraft 1.20 Pre-Release 2

We are now releasing the second pre-release for Minecraft 1.20. This pre-release contains bug fixes.

Happy Mining!

## Technical Changes

-   Game will now display message box on startup if user enabled text-to-speech functionality, but it is not available
-   `"item": "minecraft:air"` can now be used in datapack recipes to denote an ingredient that will match an empty slot.
    -   The following recipe types, however, do not allow for an empty ingredient:
        -   `minecraft:crafting_shaped`
        -   `minecraft:crafting_shapeless`
        -   `minecraft:smelting`
        -   `minecraft:blasting`
        -   `minecraft:smoking`
        -   `minecraft:campfire_cooking`
        -   `minecraft:stonecutting`

## Fixed bugs in 1.20 Pre-release 2

-   [MC-1310](https://bugs.mojang.com/browse/MC-1310) Dispensed boats and rafts get stuck inside of dispensers used to place them
-   [MC-124327](https://bugs.mojang.com/browse/MC-124327) Changing the name of an item and then emptying the text field in an anvil doesn't make the rename unavailable, keeps last non-empty name on output item
-   [MC-132076](https://bugs.mojang.com/browse/MC-132076) Lowercase Letters in controls menu + "Not Bound" is missing
-   [MC-159633](https://bugs.mojang.com/browse/MC-159633) Command feedback messages are unnecessarily created during function execution
-   [MC-165562](https://bugs.mojang.com/browse/MC-165562) Command suggestion report "incorrect argument" when cursor is at the start of a node without suggestions
-   [MC-175504](https://bugs.mojang.com/browse/MC-175504) Single quotation marks are not supported in NBT paths
-   [MC-220096](https://bugs.mojang.com/browse/MC-220096) Graphics warning button(s) improperly capitalized
-   [MC-224976](https://bugs.mojang.com/browse/MC-224976) NativeImage.setPixelRGBA throws exception with message getPixelRGBA
-   [MC-226344](https://bugs.mojang.com/browse/MC-226344) Changing the "Owner" tag of a projectile doesn't affect the outcome of the projectile unless the world is reloaded
-   [MC-237960](https://bugs.mojang.com/browse/MC-237960) New potion effect GUI doesn't work when using Programmer Art
-   [MC-250197](https://bugs.mojang.com/browse/MC-250197) Glass bottles are inconsistently referred to throughout some advancement description strings
-   [MC-252216](https://bugs.mojang.com/browse/MC-252216) 65540: Invalid scancode -1 logged in key bind menu when an option is unbound
-   [MC-252408](https://bugs.mojang.com/browse/MC-252408) Chat restriction strings consist of inconsistent concluding punctuation
-   [MC-256833](https://bugs.mojang.com/browse/MC-256833) Ridable entities that can be steered build up fall damage when on climbable blocks
-   [MC-257052](https://bugs.mojang.com/browse/MC-257052) You cannot double-click on languages within the "Language" menu to select them
-   [MC-257370](https://bugs.mojang.com/browse/MC-257370) Buckets of fish are not sorted in the same order as the fish items
-   [MC-257512](https://bugs.mojang.com/browse/MC-257512) Dead tube coral in creative inventory is in wrong order
-   [MC-258360](https://bugs.mojang.com/browse/MC-258360) Horse armor loses its NBT data when equipped on horses via right-clicking
-   [MC-258461](https://bugs.mojang.com/browse/MC-258461) The "Detect structure size and position:" string displayed within the structure block GUI is improperly capitalized
-   [MC-260468](https://bugs.mojang.com/browse/MC-260468) Wither rose is not grouped with other small flowers in the creative inventory
-   [MC-260602](https://bugs.mojang.com/browse/MC-260602) 'data modify from string' index failure does not return 0 for 'execute store success'
-   [MC-260711](https://bugs.mojang.com/browse/MC-260711) Some words within "/datapack list" command feedback messages are always pluralized
-   [MC-260712](https://bugs.mojang.com/browse/MC-260712) Some words within "/scoreboard" command feedback messages are always pluralized
-   [MC-260713](https://bugs.mojang.com/browse/MC-260713) Some words within "/team" command feedback messages are always pluralized
-   [MC-260715](https://bugs.mojang.com/browse/MC-260715) Some words within "/bossbar" command feedback messages are always pluralized
-   [MC-260716](https://bugs.mojang.com/browse/MC-260716) Some words within "/fill", "/fillbiome", and "/clone" command feedback messages are always pluralized
-   [MC-261024](https://bugs.mojang.com/browse/MC-261024) /execute if loaded does not guarantee entities are loaded
-   [MC-261080](https://bugs.mojang.com/browse/MC-261080) Player can fall through scaffolding when loading a world
-   [MC-261233](https://bugs.mojang.com/browse/MC-261233) Minecart movement is not reliably detected by sculk sensors
-   [MC-261349](https://bugs.mojang.com/browse/MC-261349) Chiseled Bookshelf won't rotate when placed as part of a structure
-   [MC-261433](https://bugs.mojang.com/browse/MC-261433) Shield doesn't block TNT explosion
-   [MC-261816](https://bugs.mojang.com/browse/MC-261816) Most two block tall flowers do not block enchanting tables / are part of #minecraft:replaceable
-   [MC-261988](https://bugs.mojang.com/browse/MC-261988) Inconsistency with Mangrove Roots and Leaves in the Creative Tab
-   [MC-262033](https://bugs.mojang.com/browse/MC-262033) The command block GUI remains open when the said command block is destroyed
-   [MC-262106](https://bugs.mojang.com/browse/MC-262106) Smithing recipe must have template to work
-   [MC-262135](https://bugs.mojang.com/browse/MC-262135) Recipe book GUI is positioned incorrectly
-   [MC-262181](https://bugs.mojang.com/browse/MC-262181) NBSP is a valid invisible character that can be used to rename items to have blank names
-   [MC-262213](https://bugs.mojang.com/browse/MC-262213) Baby sniffer's head is smaller on the first frame of existing
-   [MC-262310](https://bugs.mojang.com/browse/MC-262310) Telemetry description strings consist of inconsistent concluding punctuation
-   [MC-262311](https://bugs.mojang.com/browse/MC-262311) The "telemetry.event.game;;_;;load;;_;;times.description" string is missing an article before the word "execution"
-   [MC-262355](https://bugs.mojang.com/browse/MC-262355) Death messages for falling from climbable blocks do not work
-   [MC-262440](https://bugs.mojang.com/browse/MC-262440) Sniffers can sniff while in love and pathfinding to their lover
-   [MC-262441](https://bugs.mojang.com/browse/MC-262441) Baby sniffers stand a bit too far away from players that are tempting them
-   [MC-262445](https://bugs.mojang.com/browse/MC-262445) The text cursor no longer renders above text
-   [MC-262446](https://bugs.mojang.com/browse/MC-262446) Text within buttons renders above the semi-transparent black lines at the edges of menus
-   [MC-262471](https://bugs.mojang.com/browse/MC-262471) Random skylight underwater where it shouldn't be, that cuts off at the chunk border
-   [MC-262506](https://bugs.mojang.com/browse/MC-262506) Parts of beds render through the alternative recipe GUI in the recipe book
-   [MC-262508](https://bugs.mojang.com/browse/MC-262508) Torchflower;;_;;crop causes the game to crash and locks the world when pollinated by bees
-   [MC-262518](https://bugs.mojang.com/browse/MC-262518) The "mco.configure.world.uninvite.player" string contains an unnecessary space before the question mark
-   [MC-262531](https://bugs.mojang.com/browse/MC-262531) "death.attack.genericKill.player" displays raw translation string (is untranslated)

---

# Minecraft 1.20 Pre-release 1 

It is now time for the first Pre-release for Minecraft 1.20: The Trails and Tales update!

From now on, you should mostly see bugs being fixed. In addition to that, pre-releases don't follow the regular snapshot cadence of releasing on Wednesdays, so keep an eye out for the next pre-release.

As always, a big thank you to the community for your feedback, bugs reported, and awesome ideas throughout the snapshot series. Let the pre-releases commence!

## Changes

-   Colored Wool, Carpets and Beds can now be dyed to any other color

## Technical Changes

-   Added new damage types: `outside_border` and `generic_kill`
-   Random sequences for loot tables are now deterministic
-   Changes in `server.properties` encoding
-   `string` data sources for the `data` command now accept negative boundaries, which are interpreted as index counted from the end of the string

### Damage Types

-   Players outside the world border are now hurt by the damage type `outside_border` instead of `in_wall`
-   Forcibly removing an entity using i.e. the `/kill` command now uses damage type `generic_kill` instead of `out_of_world`

### Loot Table Random Sequences

The game now uses named random sequences to deterministically produce loot for loot tables. Each random sequence produces a unique sequence based on the world seed and sequence ID, which means a loot table will produce the same results when ran with the same parameters in the same world.

The ID of the random sequence to use for a loot table is specified in a new field called `random_sequence`.

### `server.properties`

-   File is now read in UTF-8 initially, with previous encoding (ISO 8859-1/Latin 1) as a fallback
-   File is now written with UTF-8 encoding

## Fixed bugs in 1.20 Pre-release 1

-   [MC-180](https://bugs.mojang.com/browse/MC-180) When reaching the other side of a nether portal the animation plays forever until stepped out of
-   [MC-2215](https://bugs.mojang.com/browse/MC-2215) Encoding errors in server.properties
-   [MC-18060](https://bugs.mojang.com/browse/MC-18060) Several realms strings are untranslatable
-   [MC-35078](https://bugs.mojang.com/browse/MC-35078) Breaking animation is one frame off
-   [MC-123081](https://bugs.mojang.com/browse/MC-123081) Placing an end crystal when entering The End prevents Ender Dragon from spawning
-   [MC-146582](https://bugs.mojang.com/browse/MC-146582) When entering spectator mode while standing on the ground, the player moves down by 0.19051 blocks, which makes you fall down
-   [MC-195781](https://bugs.mojang.com/browse/MC-195781) The "Include entities:" string displayed within the structure block GUI is improperly capitalized
-   [MC-195825](https://bugs.mojang.com/browse/MC-195825) "datapacks" string is inconsistent with "data pack" string in "datapackFailure.title" text
-   [MC-198202](https://bugs.mojang.com/browse/MC-198202) Options background texture does not match dirt texture
-   [MC-203039](https://bugs.mojang.com/browse/MC-203039) Incorrect use of colon in options.hideMatchedNames.tooltip
-   [MC-206548](https://bugs.mojang.com/browse/MC-206548) Leash knot subtitles are not properly capitalized
-   [MC-226454](https://bugs.mojang.com/browse/MC-226454) The "Light as a Rabbit" advancement description has no space after the ellipsis
-   [MC-236606](https://bugs.mojang.com/browse/MC-236606) Lightning bolt related string lacks capitalization
-   [MC-241736](https://bugs.mojang.com/browse/MC-241736) Company names are still inconsistent and partly misspelled in the credits
-   [MC-250571](https://bugs.mojang.com/browse/MC-250571) Gamerule description strings within the world creation menu consist of inconsistent concluding punctuation
-   [MC-256424](https://bugs.mojang.com/browse/MC-256424) Game mode is sometimes referred to as "gamemode"
-   [MC-257336](https://bugs.mojang.com/browse/MC-257336) Some chiseled bookshelf interaction subtitles are improperly capitalized
-   [MC-262006](https://bugs.mojang.com/browse/MC-262006) Melon and Pumpkin are in the default '#maintains;;_;;farmland' tag despite not maintain farmland
-   [MC-262208](https://bugs.mojang.com/browse/MC-262208) In the credits, "Lionbridge" is misspelt in one place (no "g")
-   [MC-262253](https://bugs.mojang.com/browse/MC-262253) Music composers not listed in credits
-   [MC-262265](https://bugs.mojang.com/browse/MC-262265) Changing resource pack that overrides a font crashes JVM
-   [MC-262296](https://bugs.mojang.com/browse/MC-262296) Rabbits are no longer affected by jump boost
-   [MC-262300](https://bugs.mojang.com/browse/MC-262300) Menu text is now rendered in front of the Mojang Studios loading screen fade animation
-   [MC-262304](https://bugs.mojang.com/browse/MC-262304) The stepping;;_;;on predicate condition does not correctly succeed on trapdoors
-   [MC-262308](https://bugs.mojang.com/browse/MC-262308) Entities do not stick to honey blocks pushed by pistons if their center isn't over the honey block
-   [MC-262313](https://bugs.mojang.com/browse/MC-262313) Nether won't load in upgraded worlds
-   [MC-262317](https://bugs.mojang.com/browse/MC-262317) Items don't respect properties of the block they are supported on
-   [MC-262351](https://bugs.mojang.com/browse/MC-262351) Worldgen deadlock caused by supporting block checks
-   [MC-262363](https://bugs.mojang.com/browse/MC-262363) Player can still gain a normal jump off of a honey block with precise timing
-   [MC-262424](https://bugs.mojang.com/browse/MC-262424) Sprinting particles on the edges of blocks are still incorrect

---

# Minecraft Snapshot 23w18a

In this snapshot we're bringing you an additional advancement, updates to telemetry, as well as a fix for an 11 year old bug!

Happy stepping!

## New Features

### New advancements

**Adventure advancements**

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

**Changed triggers**

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

**`any_of`/`all_of`**

-   Loot condition `alternative` has been renamed to `any_of`
-   Added new loot condition `all_of` that passes only when all sub-conditions pass. It has the same syntax as `any_of`

### Telemetry

This release includes a new global property sent with every event, a new property in the required WorldLoaded event, as well as two new opt-in events. The updated required events will help us troubleshoot launcher bugs more efficiently, and understand how Java Realms content is interacted with. The updated optional events will help inform game design decisions, and allow us to track and improve game load speeds.

**All events**

-   Added new property: `launcher_name`
    -   This is set based on the `minecraft.launcher.brand` system property. This will help us troubleshoot game launch related bugs more effectively, as we will be able to see whether the issue originated in the Minecraft launcher or a third-party program.

**Updated required events**

-   `world_loaded`
    -   Added new property: `realms_map_content`
        -   When loading into a Realms Map Content world (Minigame), the `world_loaded` event will receive the name of that map. This is to help us understand how Java Realms users interact with Java Realms adventure or minimap content.

**New optional events**

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

# Minecraft Snapshot 23w17a

Hello! Here is a new snapshot with tweaks to the new features, new advancements, new music and some long-awaited technical changes. For some time we've been working on a new faster light engine, and we are finally ready to share the result. Special thank you to the community for not only pointing out the issues with the game's light engine, but also to community members that have developed mods and plugins which have highlighted these performance challenges and served as an inspiration for our new implementation.

Please break it in all possible ways and report bugs!

## New Features

-   Added new advancements for Trails & Tales
-   Added new Trails & Tales ambient music
-   Added a new music disc obtainable through archaeology

### New advancements

**Husbandry advancements**

-   `Smells interesting` : Obtain a Sniffer Egg
-   `Little sniffs` : Feed a Snifflet (requires `Smells interesting`)
-   `Planting the past` : Plant any Sniffer seed (requires `Little sniffs`)

**Adventure advancements**

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

**New `unihex` glyph provider**

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

**New `reference` glyph provider**

-   New glyph provider can be used to include providers from other fonts
    -   Providers are guaranteed to be loaded only once, no matter how many times they are included
-   Provider has one field `id`, that describes other font to be included in currently loaded one
    -   Inclusion is performed after all fonts are loaded, so it will include all providers for a given font defined in all datapacks

**Removed `legacy_unicode` glyph provider**

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

# Minecraft Snapshot 23w16a

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

**`return`**

The `return` command can be used to control execution flow inside functions and change their return value. Effects:

-   Remaining separate top-level commands in the currently executing function (if any) are skipped
-   The result value of the `function` command that triggered the function is changed from the number of commands executed to `value`
-   The result value of the `return` command is also `value`

Syntax:

`return <value>`

Parameters:

-   `value`: An integer return value

### Advancements

**New triggers**

**`recipe_crafted`**

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

**Rendering changes**

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
-   [MC-261746](https://bugs.mojang.com/browse/MC-261746) Incorrect sound event ID spelling for "block.sniffer.egg;;_;;crack" and "block.sniffer.egg;;_;;hatch"
-   [MC-261804](https://bugs.mojang.com/browse/MC-261804) Expired Key preventing players from logging in on servers
-   [MC-261857](https://bugs.mojang.com/browse/MC-261857) Using the "/setblock", "/fill", or "/clone" commands to create little amounts of blocks in completely isolated areas causes large client-side stutters

---

