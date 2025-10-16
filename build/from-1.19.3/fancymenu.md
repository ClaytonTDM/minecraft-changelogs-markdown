# Minecraft: Java Edition 1.19.3

We're now releasing 1.19.3 for Minecraft: Java Edition. This release gives the Vex a brand new look as well as containing technical improvements and bug fixes.

## New Features in 1.19.3

-   Some experimental features are now available through built-in experimental datapacks
-   Added a new "Panorama Scroll Speed" accessibility option
-   Added new default skins for offline players
-   New wood sounds

### Sounds

-   Various wood types now have unique sounds when placed, broken, or walked on
    -   There are three sets of unique sounds: Overworld wood types, Nether wood types, and Bamboo (when enabled)
-   Step sounds can now be heard when walking on Carpets, Lily Pads and Small Amethyst Buds
-   Step sounds can now be heard when walking through Nether sprouts, Glow lichen, Crimson Roots and Warped Roots

## Changes in 1.19.3

-   Reworked the Creative Inventory tabs
-   Added Operator Items Tab option in the Controls menu which is off by default
-   The Vex now has a new look
-   In the Nether dimension Endermen, Skeletons and Wither Skeletons now only spawn at light level 7 and below (instead of 11 and below)
-   Changes to block support
-   Spawner block changes
-   Changes to chat
-   Added Draft Player Reports
-   Improvements to the Open to LAN screen
-   The Realms News button will now show a confirmation screen before opening the link
-   Stronghold placement code has been changed to be more efficient, causing stronghold positions to shift
    -   They are still placed in concentric rings, but their positions in the rings may change by a few degrees
-   "Teleport to Team Member" option in spectator menu now only shows up for teams with viable target players
-   Changes to tooltips
-   The Wild update music has been tweaked to be slightly less loud

### Creative Inventory

The ordering of tabs and the contents in the Creative Inventory have been tweaked to make the experience of finding relevant blocks and items easier.

-   Blocks and items have been moved into categories that fit them better
-   Blocks are now ordered by their material as much as possible
    -   For example, all Oak blocks and variants are now next to each other
-   Some items can now be found in more than one tab
-   Various tabs have been renamed or collapsed into others
-   The search tab now lists items sequentially grouped by the other tabs
    -   For example, items found in Building Blocks will always appear before items in Redstone Blocks
-   A Colored Blocks tab has been added that contains all blocks with 16 color variants
-   Petrified Oak Slab has been removed from the Creative Inventory
    -   It can still be accessed through commands
-   The following missing items have been added to the Creative Inventory:
    -   Suspicious Stew
        -   The tooltip will show the effect of a stew before it's picked up from the Creative Inventory
        -   Only stews with effects available via crafting or Mooshrooms are listed
    -   Dragon Egg
    -   Ominous Banner
    -   Monster Spawner
    -   All 3 flight durations of Fireworks
    -   Operator-only blocks and items
        -   These only appear in the Operator Utilities tab if you have both:
            -   Operator Items Tab option in Controls menu set to `ON`
            -   The required operator permissions
-   Tooltips for all items in Creative Menu outside single-category tabs will show categories where this item can be found
    -   Previously this only happened on the search tab

### Vex

-   Changes to Vex model and textures
    -   The Vex retains its old, now slightly oversized, hitbox to make it easier to fight

### Block Support

-   Fence Gates no longer provide center support beneath them
-   When opening, Shulker Boxes will pop off blocks which are attached to opened faces (such as Torches)
    -   Blocks that require support cannot be placed on these open faces while the Shulker Box is open

### Spawners

-   No longer has a default mob spawn type when placed by a player (previously was the Pig)
-   Will not emit fire particles when a mob spawn type has not been defined
-   Renamed to Monster Spawner to match Bedrock, and removed purple text color
-   Pick-block now works for Spawner blocks
-   The mob type is now displayed in the hover description of a Spawner item stack
    -   If a mob type has not been defined yet, the hover description will describe how to set it

### Items

-   Added new Spawn Egg items for Ender Dragon, Iron Golem, Snow Golem and Wither mobs to Creative mode
    -   Ender Dragon and Wither Spawn Eggs will only be available through commands to prevent accidental destruction of player builds
-   Polar Bear Spawn Egg colors have changed to distinguish it from the Ghast Spawn Egg

### Chat

-   Removed Chat Preview
-   Chat messages deleted by server moderators will no longer be completely hidden, but rather replaced with text stating "This chat message has been deleted by the server."
-   Deleted chat messages will now be displayed in the chat window for at least 3 total seconds before being hidden
-   The Chat Trust Status indicators have been tweaked:
    -   The 'Modified' tag will no longer display for server-modified messages where only style has been changed
    -   The 'Modified' tag icon and indicator is now dark gray
    -   The 'Not Secure' tag is now light gray and does not have an icon
-   Partially filtered chat messages now show the filtered text as gray hashes with a hover text saying that it was filtered
-   The Chat Reporting screen now shows when the player being reported rejoined chat

### Added Draft Player Reports

Player Reports can now be kept temporarily as a draft while connected to a server.

-   When exiting the Player Reporting screen, the report can be either discarded or kept as a draft
    -   The draft will always be kept if the screen was forcefully closed (e.g. player dying)
-   Draft reports are kept until the player leaves the current server or world
    -   When leaving, the player will be prompted to either discard or finish and send the report

### LAN screen

-   The screen now allows selecting the port on which to host the LAN world
-   The game mode and allow cheats buttons are now initialized with the default values of the world

### Tooltips

-   When tabbing through buttons, tooltips are displayed above or below them
-   Tooltips displayed when hovering are displayed next to the cursor
-   Tooltips from focused buttons (focused by pressing tab) take priority over tooltips from hovered buttons

## Technical Changes in 1.19.3

-   Added Feature Flags - world options to enable or disable some experimental or unfinished features (like blocks, entities and items)
-   Command changes
-   Added new Telemetry Events
-   Added new Game Rules
-   Custom Player Head Note Block sounds
-   New entity sub-predicate types
-   Instances of recipe types that have recipe books now have field `category` to determine placement
-   Changes to texture loading and stitching
-   Network protocol changes
-   Migrated linear algebra types to Java OpenGL Math Library (JOML)
-   Blocks carried by Endermen now use loot tables to generate drops when killed

### Feature flags

#### General notes

-   Feature flags are options that enable or disable certain groups of game elements (like blocks, entities and items), later called "features"
-   Game elements controlled by flags are hardcoded
-   Feature flags are stored in world

#### Configuration and datapack changes

-   Feature flags are enabled by datapacks
    -   New pack metadata section called `features` is added, containing enabled feature flags in list named `enabled`
-   The game now contains built-in datapacks (similar to the "Programmer Art" resource pack) that enable features and provide associated recipes, advancements, loot tables, etc
-   Added new fields to `server.properties` to allow initial selection of packs (works only during world creation)
    -   `initial-enabled-packs` - comma-separated list of packs to be enabled (feature packs need to be explicitly enabled)
    -   `initial-disabled-packs` - comma-separated list of packs to not auto-enable
-   Datapacks discovered after world creation will be disabled if they require features that are not enabled for loaded world
-   Added new entity sub-predicate types: `axolotl`, `boat`, `fox`, `mushroom`, `painting`, `rabbit`, `horse`, `llama`, `villager`, `parrot`, `tropical_fish`

#### Effects of feature flags

##### Blocks

-   Disabled block ids are not recognized by commands that can create new blocks
-   Block items for disabled blocks are disabled
-   Disabled blocks won't spawn in structures
-   Disabled blocks won't be loaded as part of entities (for example as falling sand or blocks carried by Endermen)
-   Players can't interact with disabled blocks

##### Entities

-   Disabled entity ids are not recognized by commands that can summon new entities
-   Disabled entities will not spawn or load
-   Spawn egg items for disabled entities are disabled

##### Items

-   Disabled items are hidden from creative menu
-   Recipes and loot tables are prevented from creating disabled items
-   Disabled item ids are not recognized by commands that can create new items
-   Disabled items can't be used for interactions or attacking

### Commands

-   New command: `fillbiome`
-   New execute sub-command: `execute if|unless biome`
-   Improvements to the `publish` command

#### `fillbiome`

Changes biome entries for an area. Note that biomes are not stored per-block, so affected positions may not match input precisely.

Syntax:

`fillbiome <from> <to> <biome> [replace <filter>]`

Parameters:

-   `from`: One corner of the area to fill
-   `to`: The other corner of the area to fill
-   `biome`: The biome to set
-   `filter`: A biome or biome tag to replace

#### `execute`

Execute commands can now be conditional on biomes.

Syntax:

`execute if|unless biome <pos> <biome>`

#### `publish`

The `publish` command has new arguments to enable commands and set the default gamemode.

Syntax:

`publish [allowCommands] [gamemode] [port]`

### Telemetry

This release includes the WorldUnloaded event, a required event, as well as several opt-in events. Diagnostic tracking is a tool that helps us understand what you like about Minecraft, which allows us to make those things better.

The reason that WorldUnloaded, along with [WorldLoaded](https://www.minecraft.net/en-us/article/minecraft-snapshot-21w38a), is a required event is that the information we’re looking at is, well, required. As a part of Xbox, we all need to follow a standard of practice, you can find a detailed description of it [here](https://privacy.microsoft.com/en-us/privacystatement). The parameters for what data we consider to be critical to our work are set by our team at Mojang Studios in alignment with Xbox.

What we want to find out is how fun you think Minecraft is. There are lots of ways to figure that out, like feedback, playtests, experience, and magic. We want to add data to that mix, which is where WorldLoaded and WorldUnloaded come in. WorldLoaded measures when you boot a session up, and WorldUnloaded measures when you shut it down. Together, they will measure how fun Minecraft is, using metrics such as playtime and the game modes that players choose to play. That’s it. All the data we collect, whether it’s required or opt-in, follows GDPR and CCPA best practices to keep your information safe.

The rest of the current telemetry events are opt-in, which means that you can choose whether or not you want to send us additional data. The only players that can’t opt-in are Microsoft child accounts, but everyone can still send in all of their feedback to [feedback.minecraft.net](http://feedback.minecraft.net/).

Just like all the thoughts and comments we get from you on our feedback site, this is something that greatly helps us improve Minecraft. We want to make a game that you want to play, so we want to know what that game needs. Even if it’s more lava.

#### Transparency

-   Added Telemetry Data Collection Screen
    -   This screen displays information about the type of data that is sent
    -   The level of data sent can be controlled between "Minimal" and "All"
        -   "Minimal" sends only the required data
        -   "All" sends the required data, as well as optional data
    -   The default data level is "Minimal" (only the required data)
-   Every telemetry event sent from the client is now logged to disk
    -   Old log files are removed after 7 days
    -   These can be found under the `logs/telemetry` directory
        -   A shortcut to this directory is available via the "Open My Data" button on the Telemetry Data Collection screen

#### Required events

-   Added WorldUnloaded event
-   Removed client Java version from the WorldLoaded event

##### WorldLoaded & WorldUnloaded

Understanding how Minecraft is played allows us to focus game updates and improvements on the areas that are most relevant to players. The data that tells us this includes game mode, client or server modded status, and game version.

WorldLoaded & WorldUnloaded are two paired events that calculate how long the world session has lasted (in seconds and ticks). Data from WorldLoaded is sent when a world is launched, and data from WorldUnloaded is sent when a world is shut down (quitting to title, disconnecting from a server).

#### Optional events

-   Added PerformanceMetrics and WorldLoadTimes events

##### PerformanceMetrics

Knowing the overall performance profile of Minecraft helps us tune and optimize the game for a wide range of machine specifications and operating systems.

The periodic performance metrics includes data such as frame-rates, rendering performance, memory usage, operating system, and the modded status of the client and server.

Game version is included to help us compare the performance profile for new versions of Minecraft.

##### WorldLoadTimes

It’s important for us to understand how long it takes to join a world, and how that changes over time. For example, when we add new features or do larger technical changes, we need to see what impact that had on load times.

This event includes the total time in milliseconds for the world to load, whether this was a new world, as well as game version and platform details.

### Game Rules

-   Added `blockExplosionDropDecay`, `mobExplosionDropDecay` and `tntExplosionDropDecay` game rules
    -   When set to `false`, all blocks drop loot
    -   When set to `true`, blocks drop loot randomly depending on how far from the explosion center
    -   Defaults to `false` for tnt, true for block and mob
-   Added `snowAccumulationHeight` game rule
    -   When it is snowing, this game rule determines the maximum number of layers can be accumulated in each block
    -   Defaults to `1`
    -   Set to `0` makes no snow form at all
    -   Set to `8` or above lets snow form up to the level of a full block
-   Added `waterSourceConversion` and `lavaSourceConversion` game rules
    -   When set to `true`, allows new sources of that fluid to form
    -   Defaults to `true` for water and `false` for lava
-   Added `globalSoundEvents` game rule, controlling whether certain gameplay moments are heard by all players regardless of location
    -   Defaults to `true`

### Recipes

#### Crafting book categories

-   Crafting book categories/tabs can now be controlled by recipe definitions
-   Categories available for `shaped`/`shapeless` and various special crafting recipes:
    -   `building`
    -   `redstone`
    -   `equipment`
    -   `misc` (default)
-   Categories available for `smelting`, `blasting`, `smoking`, `campfire_cooking`
    -   `food`
    -   `blocks`
    -   `misc` (default)
-   Some crafting books collapse multiple categories into a single tab
-   The exact mappings might change in the future

### Resource Packs

-   The Resource Pack version is now 12
-   Removed "fixers" for resource packs with versions 3 and 4 (pre-flattening)
    -   The game will no longer try to adapt packs with those versions to the current version
-   Game now loads all block models and blockstate definitions in appropriate directories
    -   That means that if a pack has invalid model it will prevent pack from loading, even if this model is unused

#### Texture loading changes

-   Context: When the game loads all textures used by block and item models need to be stitched (merged) into a single image, called the "atlas"
    -   Individual textures that are stitched onto the atlas are called "sprites"
-   To improve loading performance, block and item textures are now loaded before they are processed by block and item models
    -   By default, textures not in the `textures/item` and `textures/block` directories will no longer be automatically recognized and will fail to load
-   Resource packs can now have configuration files, located in `atlases` directory, that control which images are included in the atlases

##### Atlas configuration files

-   New directory `atlases` is now present for resource packs
-   This directory contains JSON entries for configuring atlases:
    -   `blocks` - textures used by block and item models
    -   `banner_patterns`, `beds`, `chests`, `shield_patterns`, `shulker_boxes`, `signs` - used to render some special-case models
    -   `mob_effects` - textures used for effect icons in the UI
    -   `paintings` - textures used for paintings
    -   `particles` - textures used for particles (referenced by the `textures` field in files within the `particles` directory)
-   If multiple packs include those files, they are merged by their order within the pack (same as tags in data packs)
-   Inside these files is a JSON object with a single list called `sources`
    -   Every entry in `sources` runs in during load, in order of definition, adding or removing new files to the texture list; to be later referenced by block models, particles, etc
-   Types of sources:
    -   `directory` - lists all files in a directory and its subdirectories, across all namespaces
        -   `source` - directory in pack to be listed (relative to `textures` directory)
        -   `prefix` - string to be appended to the sprite name when loaded
    -   `single` - adds a single file
        -   `resource` - location of a resource within the pack (relative to `textures` directory, implied `.png` extension)
        -   `sprite` - sprite name (optional, defaults to `resource`)
    -   `filter` - removes sprites matching the given pattern
        -   `namespace`, `path` - patterns (regular expressions, regex) of ids to be removed (only works for entries already in the list)
            -   If omitted, any value will be matched
    -   `unstitch` - copies rectangular regions from other images
        -   `resource` - location of a resource within the pack (relative to `textures` directory, implied `.png` extension)
        -   `divisor_x`, `divisor_y` - used for determining the units used by regions
        -   `regions` - list of regions to copy from the source image
            -   `sprite` - sprite name
            -   `x`, `y` - coordinates of the top-left corner of the region
            -   `width`, `height` - size of the region
        -   Values such as `x` are transformed to real image coordinates via dividing by their divisor, and then multiplying by the real image size
-   Example: if a pack has a file named `assets/test/textures/fancy/iridium.png` and source is `{"type": "directory", "source": "fancy", "prefix": "custom/"}`, the texture will be available in models as `test:custom/iridium`

### Custom Player Head Note Block sounds

-   Player Heads can now contain a `note_block_sound` field
    -   When present, this determines the sound a note block makes when the head is placed on top of it

### New entity sub-predicate types

-   Added new entity sub-predicates for some entity types with variants:
-   `axolotl`
    -   `variant` - values: `lucy`, `wild`, `gold`, `cyan`, `blue`
-   `boat`
    -   Works for boats, chest boats and rafts
    -   `variant` - values: `oak`, `spruce`, `birch`, `jungle`, `acacia`, `dark_oak`, `mangrove`, `bamboo`
-   `fox`
    -   `variant` - values: `red`, `snow`
-   `mooshroom`
    -   `variant` - values: `red`, `brown`
-   `painting`
    -   `variant` - values: see `painting_variant` registry
-   `rabbit`
    -   `variant` - values: `brown`, `white`, `black`, `white_splotched`, `gold`, `salt`, `evil`
-   `horse`
    -   `variant` - values: `white`, `creamy`, `chestnut`, `brown`, `black`, `gray`, `dark_brown`
    -   Markings are separate value and not matched
-   `llama`
    -   `variant` - values: `creamy`, `white`, `brown`, `gray`
-   `villager`
    -   `variant` - values: see `villager_type` registry
    -   Also works for Zombie Villagers
    -   Profession and level are separate values and not matched
-   `parrot`
    -   `variant` - values: `red_blue`, `blue`, `green`, `yellow_blue`, `gray`
-   `tropical_fish`
    -   `variant` - values: `kob`, `sunstreak`, `snooper`, `dasher`, `brinely`, `spotty`, `flopper`, `stripey`, `glitter`, `blockfish`, `betty`, `clayfish`

### Network Protocol

-   The network protocol now supports adding player entities to the world without being added to the 'tab' player list
-   Servers can now lazily distribute players' profile public keys along with their first chat packet
-   Message 'headers' within the Secure Chat protocol no longer need to be distributed when private messages are sent
-   Contextual message references are now deduplicated for efficiency within the Secure Chat network protocol
-   Servers can now lazily distribute players' profile public keys along with their first chat packet
-   Profile public keys will now be refreshed without reconnecting
-   Clients now reset their chat session on receiving a login packet

## Experimental Features in 1.19.3

-   Some experimental features now need to be enabled to appear in worlds
-   Such features are enabled by adding a built-in datapack when creating a world
-   Feature toggles are meant to hide unfinished or experimental features, to make sure your existing worlds remain unaffected
-   Worlds that are using experimental features will be marked as "Experimental" in world selection list
-   Experimental features cannot be toggled for existing worlds

### Bundles

-   Bundles are now available as an experimental feature

### Added Camel

Camels are now available when Update 1.20 experimental features are enabled.

-   Camels can be equipped with a saddle and ridden by two players
-   Camels spawn naturally in Desert Villages
-   Camels are tall
    -   Most hostile mobs will not be able to reach you when you are on a Camel
    -   They can walk over Fences and Walls without a sweat
-   Camels are very graceful, but grumpy mobs
    -   They randomly sit down
    -   While sitting, it is difficult to convince them to move
-   Camels can either walk slowly or sprint quickly
-   They can also dash forward but will lose stamina for a while when doing so

### Bamboo Wood Set

A new set of Bamboo wood blocks are now available when Update 1.20 experimental features are enabled.

-   New wood blocks
    -   Block of Bamboo
    -   Stripped Block of Bamboo
    -   Bamboo Planks
    -   Bamboo Door
    -   Bamboo Trapdoor
    -   Bamboo Sign
    -   Bamboo Stairs
    -   Bamboo Slab
    -   Bamboo Fence
    -   Bamboo Fence Gate
    -   Bamboo Button
    -   Bamboo Pressure Plate
-   Block of Bamboo can be crafted from 9 Bamboo and can be stipped like other wood logs
-   Bamboo Planks crafted from Block of Bamboo yield only 2 planks compared to 4 for wood logs
-   Added a new "Mosaic" plank variant that is unique to Bamboo called Bamboo Mosaic
    -   It can be crafted with 1x2 Bamboo Slabs in a vertical strip
    -   You can craft Stair and Slab variants of Bamboo Mosaic
    -   Bamboo Mosaic blocks cannot be used as a crafting ingredient where other wooden blocks are used, but they can be used as fuel
-   Added a unique Bamboo Raft and Bamboo Chest Raft which can be crafted like normal boats, but with Bamboo Planks
    -   They function the same as ordinary boats, but have a unique look to them

### Chiseled Bookshelf

A new, chiseled variation of the Bookshelf is now available when Update 1.20 experimental features are enabled.

-   Crafted with 6 planks and 3 wooden slabs
-   Can store Books, Book and Quills, Written Books, and Enchanted Books
    -   Holds up to 6 books
    -   Keeps the stories and lore of your world safe
    -   These can be added or removed from any slot by targeting the specific slot
-   Comparators can detect the last book placed/removed
    -   Perfect for hiding secrets in your spooky library
-   Works with Hoppers

### Hanging Signs

Ever wanted to hang up your signs? Fetch a few chains, strip some logs, and now you can! Hanging signs are now available when Update 1.20 experimental features are enabled.

-   Hanging Signs are a more expensive version of normal Signs
    -   Crafted with 2 chains and 6 stripped logs of your preferred wood type
    -   Crafting results in 6 Hanging Signs
-   Can be hung up in the following ways:
    -   Underneath a block that can provide support in the center, like a full block or a fence
    -   Attached to the solid side of a block
    -   Attached to the side or underneath another Hanging Sign
-   Unlike normal Signs, they cannot be placed directly on the ground without support from the side or above
    -   However, Hanging Signs that have a horizontal bar will not pop when the supporting block is removed

### Mob Heads on Note Blocks interaction

-   When placing a Mob Head on a Note Block, that Note Block will now play one of the ambient sounds of that mob when played by a player or powered by Redstone

### Piglin Mob Head

-   Piglins will now drop their heads when killed by a charged Creeper
-   Placing the Piglin head on a Note Block will play one of the Piglin's ambient sounds
-   The Piglin head will flap its ears when powered by Redstone, or when worn by a player while walking

### Advancements

-   Breeding Camels now counts for "The Parrots and the Bats" and is now required for "Two by Two"
-   Hanging Signs now counts for "Glow and Behold"

## Fixed bugs in 1.19.3

Around 200 bugs were fixed in this release. View the [list on the issue tracker](https://bugs.mojang.com/issues/?filter=27487).

---

We're now releasing 1.19.2 for Minecraft: Java Edition. This release fixes a critical issue related to server connectivity with secure chat.

This update can also be found on [minecraft.net](https://www.minecraft.net/en-us/article/minecraft-java-edition-1-19-2).

If you find any bugs, please report them on the official [Minecraft Issue Tracker](https://aka.ms/snapshotbugs?ref=launcher). You can also leave feedback on the [Feedback site](https://aka.ms/JavaSnapshotFeedback).

## Fixed Bugs in 1.19.2

-   Fixed an issue causing players to get disconnected with secure chat
-   Fixed a crash in the social interactions screen

## Get the Release

To install the release, open up the [Minecraft Launcher](https://www.minecraft.net/download) and click play! Make sure your Launcher is set to the "Latest Release" option.

Cross-platform server jar:

-   [Minecraft server jar](https://piston-data.mojang.com/v1/objects/f69c284232d7c7580bd89a5a4931c3581eae1378/server.jar)

---

We're now releasing 1.19.1 for Minecraft: Java Edition. This release adds Allay duplication and new Player Safety functionality.

## Features

-   Added Allay Duplication
-   Tweaked Sculk Catalysts
-   Added Chat Trust status
-   New Options for Chat Preview
-   Added Player Reporting

### Allay

-   Allays will dance to a Record playing in a Jukebox
-   If the Allay is handed an Amethyst Shard while dancing it will duplicate
    -   Duplication has a 5-minute cooldown

### Sculk Catalyst

-   Sculk Catalysts will now drop 5 XP instead of 20 XP

### Chat

-   Moved the chat scrollbar to the right
-   When typing a message, the signing status of the displayed chat message is shown with a colored indicator
    -   The indicator will either appear to the left of the chat input field, or to the left of the chat preview if chat preview is being used
    -   The indicator will be blue when the displayed message is signed
    -   The indicator will be orange when Chat Preview is enabled and a preview is waiting to be signed
-   The background of the chat preview will also display slightly faded when a preview is waiting to be signed
-   Added a warning toast when connecting to a server that doesn't enforce secure chat
-   The list of players on the Social Interactions screen now places entries for players with recently seen messages at the top of the list

#### Chat Trust Status

-   Messages that are not signed with the Secure Chat system, or have been tampered with by the server will now be marked
    -   Messages with missing or invalid signatures are marked as "Not Secure"
    -   Messages that are detected as modified are marked as "Modified"
-   The trust status of messages are displayed with both a colored indicator and an icon
    -   The colored indicator is always visible
    -   The icon is only visible when the chat screen is open
-   Hovering over the icon will provide more information about the trust status
    -   For modified messages, the original secure text will also be displayed in the tooltip
-   System messages (non-player chat, such as command output) are displayed with a gray color indicator

#### Chat Preview

-   Added "When Sending" Chat Preview option for updating chat previews only when attempting to send a message
    -   To confirm sending a message, a second hit of the Enter/Return key is required
    -   The previous "ON" setting has been renamed to "While Typing"
-   In "While Typing" mode, the chat preview will no longer display previews if the message has not been modified by the server
-   Chat Preview is now enabled in singleplayer, and will display when using commands that have selector substitution such as `/say`
-   Previewed hover events and click events are highlighted with a solid background

### Player Reporting

It is now possible to report a player for sending abusive messages in the game chat. A reporter is required to select the individual chat messages that contain the objectionable content, as well as the category of the report, this is to provide the best context for our moderation team to take action. This is accessed via the social interactions screen.

-   Multiple chat messages can be selected for reporting
    -   Additional chat messages around this selection will also be used to provide our moderation team with further context
-   The category of the report can be selected from a list of Report Categories
    -   The Report Categories screen has a "Learn About Reporting" button that links to a help article
-   Additional comments can be entered to provide more details and information regarding the report

For more information, see this [article about Player Reporting](https://www.minecraft.net/en-us/article/addressing-player-chat-reporting-tool) and our [Reporting FAQ](https://help.minecraft.net/hc/en-us/articles/7317376541197).

### Suspensions & Bans

-   The game will now show a notice screen on startup if you have been suspended from online play
    -   The reason for the suspension is shown as well as how long it is effective for

### Realms

-   A message that has been filtered by the Java Realms Profanity Filter will now be marked with a yellow marker
-   Players will be notified if a chat message they have sent has been fully filtered for one or more receiving players on the Realm

## Technical

-   The chat input box will no longer apply to custom font glyphs with negative advances, or glyphs with advances greater than 32

### Chat Types

-   Chat types added to the `chat_types` registry are now only used for player chat, and not system messages
    -   The `system` and `game_info` chat types have been removed
-   Chat types have been simplified and are now only required to define `chat` and `narration` decorations
    -   Chat types no longer support overlays
    -   A system message should instead be used to display overlays
-   The `msg_command` chat type has been split apart into `msg_command_incoming` and `msg_command_outgoing`
-   The `team_msg_command` chat type has been split apart into `team_msg_command_incoming` and `team_msg_command_outgoing`
-   The `team_name` chat type parameter has been renamed to `target`
    -   This chat type parameter is now used by `msg_command_outgoing`

### Components

-   The `run_command` click event for text components no longer supports sending chat messages directly
    -   Only commands are supported
    -   This means values now always need to be `/`;;-;;prefixed
    -   Commands such as `/say` that produce a signed player chat message are not allowed
        -   `/tellraw` should be used instead

### Game Events

#### Added Game Events

-   `jukebox_play`
-   `jukebox_stop_play`

### Multiplayer Secure Chat Signing

-   The order of chat messages are now cryptographically verified
    -   This is used for validating the context of chat messages for Player Reports

### Server

-   `enforce-secure-profile` is now defaulted to `true` for dedicated servers
-   Insecure chat messages logged in the server are prefixed with a `[Not Secure]` tag
-   Custom servers can set their own auto-completion options for regular chat via a new network packet
-   Custom servers can hide player chat messages from display via a new network packet
    -   This does not delete player chat messages from chat logs

## Fixed Bugs in 1.19.1

-   More than 50 bugs were fixed in this release. View the [list on the issue tracker](https://bugs.mojang.com/issues/?filter=27220).

---

Oh, hello. I didn’t see you there! I was too busy inspecting these mangrove tree roots. They’re all tangled up! What do you mean they’re supposed to be? Hey, that’s pretty neat.

While we’re on the topic – have you had a chance to check out all the other spiffy stuff that we added to Minecraft today? Because The Wild Update has officially launched and now the Overworld is full of frogs, allays, wardens (_shudder_), mud, boats with chests, new music, and much, much more! You can check out the list below for all the details, I’m too busy making heart eyes at these cute propagules to go through them all.

## Features

-   Added Mangrove Swamp biome
-   Added Mangrove Trees
-   Added Mangrove Blocks
-   Added Mud and Mud Brick Blocks
-   Added Clay renewability
-   Added Frogs and Tadpoles
-   Added the Deep Dark biome
-   Added Ancient Cities
-   Added Darkness mob effect
-   Added Disc Fragment and Music Disc 5
-   Added Echo Shard and Recovery Compass
-   Added the Swift Sneak enchantment
-   Added Sculk, Sculk Veins, Sculk Shrieker, and Sculk Catalyst Blocks
-   Added Warden mob
-   Added Allay mob
-   Added Boat with Chest
-   Added Goat Horns
-   Added new music
-   Leaves are now waterloggable
-   The main menu background now shows a Wild Update panorama
-   Minor changes to Minecart with Chest/Furnace/TNT/Hopper
-   Improved the predictability a number of gamplay elements
-   Explosions caused by player-ignited TNT now cause experience to drop from broken blocks (such as ore and sculk blocks)
    -   We will be keeping an eye on feedback for this change, it might change in a future update
-   Added sound option for 3D Directional Audio simulation
    -   This option is best experienced with headphones
-   Replaced Realms subtle selected world highlight with a clear green checkmark

### Mangrove Swamp

Muddy! Murky! Magnificent! Welcome to Minecraft's newest biome - the Mangrove Swamp

-   Located in warmer, more humid places where you'd normally find Swamp biomes in Minecraft
-   Here you can find Bees and Warm Frogs
-   The floor of this biome is coated with a thick layer of Mud
-   Have a nice boat ride under and around the larger-than-life roots of Mangrove trees
-   Mud generates all the way from the surface down to Stone
-   Tall Mangroves are far more common than Short Mangroves

### Mangrove trees

Introducing a new type of water-adapted trees that spawn propped up on roots

-   Have a chance of spawning a Bee Nest
-   Grows from Mangrove Propagules
-   Moss Carpet generates on top of the tree's roots

### Mangrove wood blocks

Added a new type of wood: Mangrove!

-   Mangrove Log and Stripped Mangrove Log
-   Mangrove Wood and Stripped Mangrove Wood
-   Mangrove Roots and Muddy Mangrove Roots
-   Mangrove Boat, Button, Pressure Plate, Door, Trapdoor, Sign, Slab, Fence, Fence Gate, and Stairs

### Mangrove leaves and propagules

-   Mangrove Propagule is a type of sapling that grows from the bottom of Mangrove Leaves
-   Bonemealing Mangrove Leaves will cause a new Propagule to start growing beneath it
-   Propagules grow through 4 stages, and growth can be accelerated by bonemealing
-   You can break off a fully grown Propagule and plant it like a sapling
-   Propagules can be placed and grow on all normal blocks normal saplings support, plus Mud and Clay
-   Propagules can be grown underwater
-   The Wandering Trader will now sometimes offer Propagules for sale

### Mud

-   Mud is a block that will generate in the upcoming Mangrove biome
-   When walking on Mud, entities slightly sink down into it like Soul Sand
    -   Unlike Soul Sand, no slowdown effect will be applied
-   Mud can be created by using a water bottle on dirt, by hand or with a Dispenser
-   Packed Mud can be crafted from Mud

### Mud bricks

-   Mud Bricks are a building block that can be crafted from Packed Mud
-   Mud Bricks can be crafted into Mud Brick Stairs, Walls, and Slabs using a Crafting Table or Stonecutter

### Clay renewability

-   Placing Mud above a block that has pointed Dripstone underneath will eventually turn the Mud Block into Clay

### Frogs

-   Frogs can spawn in Swamps and Mangrove Swamps on Grass, Mud, Mangrove Roots, and Muddy Mangrove Roots
-   Frogs can croak
-   Frogs can walk on land, swim and jump
-   Frogs can eat small Slimes, causing a Slime Ball to drop
-   Frogs can eat small Magma Cubes, causing a Froglight block to drop
-   Each Frog variant drops a specific Froglight Block
-   Added three Froglight blocks, a type of light source blocks

### Tadpoles

-   Tadpoles can swim in water
-   Tadpoles on land "jump around" like fishes on land, and eventually dies
-   Tadpoles that grows up turns into a Frog
-   Tadpoles grow into a different type of frog based on the biome they grow up in (Cold, Temperate, Warm)
-   Tadpoles can be caught in a bucket

![Minecraft 1.19 Frog](https://launchercontent.mojang.com/images/1-19-frog-full.jpg) A Frog in a Mangrove Swamp.

![Minecraft 1.19 Steve & Blocks](https://launchercontent.mojang.com/images/1-19-steve-blocks-full.jpg) Steve next to a house built out of blocks from the Mangrove Swamp.

![Minecraft 1.19 Mangrove Swamp](https://launchercontent.mojang.com/images/1-19-mangrove-full.jpg) A Mangrove Swamp biome in Minecraft.

![Minecraft 1.19 Underwater in a Mangrove Swamp](https://launchercontent.mojang.com/images/1-19-mangrove-underwater-full.jpg) A view from being underwater in a Mangrove Swamp biome.

### Deep Dark biome

Dig into the depths far underground to uncover the darkest biome in Minecraft - the Deep Dark.

-   Dimly lit and eerie, the Deep Dark is sure to strike fear into the hearts of even the most brave player
-   Less flooded than surrounding areas
-   The floor of the Deep Dark is covered in sculk
-   No mobs spawn in the Deep Dark

### Ancient City

Wander the halls of these long-abandoned structures in the Deep Dark depths to uncover some relics long forgotten.

-   Ancient City structures spawn in Deep Dark biomes
-   In chests, guarded by Sculk Sensors and Sculk Shriekers, you can find the new Swift Sneaking enchantment
-   You can also find a new mysterious block called Reinforced Deepslate here, which cannot be obtained in Survival
-   Mobs cannot spawn in Ancient Cities

### Darkness

-   A new mob effect applied to nearby players by the Warden and Sculk Shrieker
-   Lowers the gamma to an equivalent of "Moody" while having this effect
-   In periodic pulses, will lower the overall brightness of the world so that the darkness creeps up towards light sources
-   The icon for the Darkness effect is only shown in the inventory
-   A new Accessibility slider has been added in your Options menu called “Darkness Effect”
    -   Controls strength of the Darkness lighting effect
    -   Does not affect the fog distance

### Music Disc 5

A new music disc has been added to the game

-   Unlike other discs, it can only be obtained by finding and crafting 9 Disc Fragments together
-   These Disc Fragments can be found rarely in Ancient City Chests

### Recovery Compass

A new Recovery Compass can be crafted with Echo Shards, another new item which can only be found in Ancient City Chests

-   Unlike a normal Compass, the Recovery Compass will point to the last place you died
-   If you are not in the dimension you last died, or you haven't died yet in your world, it will spin randomly
-   It can be crafted with 1 Compass surrounded by 8 Echo Shards, which can be found in Ancient Cities

### Swift Sneak

Imbue your leggings with this shiny new enchantment to move as fast while crouching as you would normally walk!

-   When applied, it will increase your movement speed while sneaking
-   Has 3 different levels with different speed increases
-   It is the first enchantment unique to leggings equipment!

### Sculk

The rattling tendrils of the Sculk Sensors had to come from somewhere, right? Introducing sculk, a new family of blocks that dwells in the Deep Dark. they find a valid substrate they can feed off of

-   Added Sculk Catalyst Block, a mysteriously soul-emitting block that blooms with Sculk patches underneath nearby dying mobs
    -   Mobs that perish in the presence of the Sculk Catalyst will not drop their experience
-   Added Sculk Blocks
    -   When a mob dies near a Sculk Catalyst, some unknown process seems to consume blocks beneath and turn them into Sculk Blocks
    -   A Sculk charge that spreads has a chance to consume some of its charge to grow a Sculk Sensor or Sculk Shrieker
    -   Sculk Blocks have very low blast resistance
-   Added Sculk Vein Blocks
    -   These veins are found on the edge of Sculk patches
    -   Similar to Glow Lichen, they can be placed in any orientation
    -   Spreading of veins causes other blocks to be taken over by the sculk
    -   Sculk Vein can spread underwater
-   Added Sculk Shrieker Block
    -   Sculk Shriekers can be found growing rarely from the charge of a Sculk Catalyst
    -   Sculk Shrieker can be waterlogged
    -   Notable for its boney appendages, this block responds to Sculk Sensors detecting vibrations by sending out a warning call to distant Wardens
        -   Watch out when stepping on them, as they will feel that too and send out a call!
    -   Initially it may take some time for a Warden to arrive, but you'll hear it responding in the distance...
    -   Once it's close enough, a call from the Sculk Shrieker will summon the Warden nearby - be prepared!
-   Souls from mobs will spread through Sculk Veins and Sculk Blocks in random directions until
    -   The charge from souls in the Sculk Blocks and Sculk Veins will eventually decay, but it will decay slower within close vicinity of the Sculk Catalyst and faster when further away from its host
    -   If the charge is dropped outside the range of the Catalyst, it has a chance of growing a Sculk Sensor
-   Sculk, Sculk Veins, and Sculk Catalysts require Silk Touch to acquire
    -   If mined without Silk Touch, they will drop experience instead
-   The efficient tool for all Sculk family blocks is the Hoe

### Warden

The horror of the Deep Dark! A creature with no eyes, roughly resembling the Sculk that can be found throughout the Deep Dark, the Warden is an unstoppable force of nature that inhabits this biome. Wardens are powerful creatures, and it is often better to sneak around one that has emerged instead of taking it head on - you have been warned.

-   Just like Sculk Sensors, these terrifying creatures use vibrations as a means to navigate their environment
-   When vibrations aren't enough, they will also use a sense of smell to track down their prey - you can observe them sniffing their surroundings to get closer to unsuspecting players and mobs
-   If something gets too close, it will be noticed
-   In the Deep Dark, Wardens can appear anywhere
    -   When enough Sculk Shriekers have been alerted to your presence, a Warden will appear
-   The more vibrations a Warden detects, the more angry it will get
    -   You can hear and see this from how fast the souls in its chest are beating
-   Once a mob has pushed beyond the Warden's anger threshold, it will face its prey and roar before charging
-   Building up high, hiding behind walls or being out of range of their powerful melee attack will cause Wardens to switch to their ranged attack
    -   Their rib cages will open up to shriek a sonically charged ranged attack that can penetrate walls
    -   This attack bypasses protection for armor and shield
-   If, however, you keep the Warden from noticing you or getting angry for 60 seconds, it will dig back underground and despawn
    -   If the Warden is stuck in a liquid, it will despawn instead of digging
-   They have a special interaction with thrown projectiles
    -   If the Warden receives two projectile vibrations within 5 seconds of one another, it will grow angrier at the shooter
    -   If the Warden receives a projectile vibration more than 5 seconds from the last projectile, it will not grow angrier at the shooter
    -   This allows you to strategically distract the Warden without it getting angry while you take loot from nearby chests
-   Wardens will also disable shields when they hit them with their fists
-   They drop a Sculk Catalyst upon death

### Changes to vibrations

-   Carpets, like Wool Blocks, will now dampen the vibrations caused by their placing, breaking, or dropping as items
-   Carpets now also dampen the vibrations caused by running and jumping over them
-   `item_interact_start` and `item_interact_finish` vibrations are ignored if sneaking

![Minecraft 1.19 Ancient City](https://launchercontent.mojang.com/images/1-19-ancient-city-full.jpg) An Ancient City in the Deep Dark.

![Minecraft 1.19 Warden Sonic Boom Attack](https://launchercontent.mojang.com/images/1-19-warden-sonic-full.jpg) A Warding shooting its Sonic Boom attack.

![Minecraft 1.19 Sneaky Steve](https://launchercontent.mojang.com/images/1-19-sneaky-steve-full.jpg) A Warden in the Deep Dark.

![Minecraft 1.19 Sculk Family](https://launchercontent.mojang.com/images/1-19-sculk-full.jpg) A variety of sculk blocks.

### Allay

-   Allays will collect all the surrounding items that match the item they are holding
-   Allays will like a player who hands them an item and will bring the items they collect to their liked player
-   If the Allay hears a Note Block play, that Note Block becomes the Allay's favorite Note Block for 30 seconds
    -   The Allay will stay near that Note Block for that duration and bring its collected items to Note Block instead of to the player
-   Interacting with an Allay with an empty hand will remove the item the Allay is holding
-   Allays can be found at Pillager Outposts and in Woodland Mansions
-   Allays are immune to damage from their liked player
-   Allays have a natural health regen of 2 health per second

### Boat with Chest

-   Lets you bring more stuff on your boat adventures
-   If you are in the Boat, press the open inventory key to access the Chest contents
-   If you are not in the Boat, sneak and use your interact key to access the Chest contents
-   If you break the Boat the Chest contents will spill out, like with other Chests
-   Also works with Hoppers, Droppers, and other blocks that interact with Chests
-   Like other Chests, opening a Boat with Chest or breaking the Boat will anger Piglins, since they think all Chests belong to them

### Goat Horns

-   A Goat Horn drops when a Goat rams a tree or any other hard block that occurs naturally where Goats spawn (Log, Stone, Packed Ice, Iron Ore, Copper Ore, or Emerald Ore)
    -   Other solid blocks are unfamiliar to the goat, so it won't ram them
-   Use the Goat Horn to play a loud sound that can be heard from afar
-   Each Goat Horn has its own sound based on the Goat it originated from
-   There are 8 Goat Horn variants, 4 of them exclusive to Screaming Goats
-   Goat Horns can sometimes be found in Pillager Outposts

### Advancements

-   Added "It Spreads" for killing a mob near a Sculk Catalyst
-   Added "You've Got a Friend in Me" for having an Allay deliver items to you
-   Added "Birthday Song" for having an Allay drop a Cake at a Note Block
-   Added "With our Powers Combined" for having all Froglights in your inventory
-   Added "Bukkit Bukkit" for catching a Tadpole in a Bucket
-   Added "When the Squad Hops into Town" for getting each Frog variant on a Lead
-   Added "Sneak 100" for sneaking near a Sculk Sensor or Warden to prevent it detecting you
-   Added Darkness effect to the "How Did We Get Here?" advancement

### Predictability of randomized events

Some randomized events are now more predictable and no longer have a possibility of extreme behaviors:

-   Placement and velocity of things dropped from Droppers/Dispensers
-   Placement and velocity of items spawned from containers upon destroy
-   Randomized `follow_range` component attribute for mobs
-   Velocity of Horses spawned from Skeleton Traps
-   Blaze random position and randomized speed of Blaze projectiles
-   Randomized portion of damage and velocity of Arrows
-   Randomized flight pattern of Fireworks
-   Bobbing patterns and time until a Fish appears for Fishing Rods

### Four new music tracks

-   The new music tracks are called Ancestry, Aerie, Firebugs, and Labyrinthine
-   They play in certain biomes

### Minecart variants

-   The recipes for minecart with Chest/Furnace/TNT/Hopper are now shapeless
-   When broken each Minecart variant drops itself as item, instead of splitting into two items (such as Chest and Minecart)

### Monster Spawning

-   Endermen, Skeletons, Wither Skeletons and Piglins now spawn in a wider range of light levels in the Nether (from light level 0 to 11)
    -   This makes it possible for more types of mobs to spawn inside Nether Portals, which causes them to instantly change dimensions after spawning
    -   Our intent for the future is to prevent most mobs from spawning in Nether Portals and the ones that do will not immediately travel through the portal - expect to see these changes in a coming version

![Minecraft 1.19 Boat with Chest](https://launchercontent.mojang.com/images/1-19-boat-chest-full.jpg) Alex in a boat with a chest.

![Minecraft 1.19 Allay](https://launchercontent.mojang.com/images/1-19-allay-full.jpg) An Allay holding a Goat Horn.

![Minecraft 1.19 Alex & Goat Horn](https://launchercontent.mojang.com/images/1-19-goathorn-full.jpg) Alex holding a Goat Horn.

## Technical

-   The data pack format is now 10
-   The resource pack format is now 9
-   Added the ability for data and resource packs to selectively hide files from packs below them
-   Added `kill_mob_near_sculk_catalyst` advancement trigger
-   Added `thrown_item_picked_up_by_player` advancement trigger
-   Added `allay_drop_item_on_block` advancement trigger
-   Added `avoid_vibration` advancement trigger
-   Removed field `location` from triggers `location`, `slept_in_bed`, `hero_of_the_village` and `voluntary_exile` - it was handled exactly the same as `player.location`
-   Some mutually exclusive tests in entity predicate (`player`, `fishing_hook`, `lightning_bolt` and `catType`) have been collapsed to the `type_specific` field
-   Removed the `placefeature` command
-   Added the `place` command
-   The `locate` command is now moved to `locate structure`, `locatebiome` is moved to `locate biome`
-   Added `locate poi <type: point_of_interest_type>`
-   Added the loot table function `set_instrument`
-   The bundled Java runtime has been updated to 17.0.3
-   The M1 ARM64 architecture is now supported
-   `LWJGL` library has been updated to version 3.3.1
-   Banner patterns available in the Loom can now be controlled with tags (`banner_pattern/no_item_required` for no pattern item and `banner_pattern/pattern_item/*` for specific banner pattern items)
-   Added new font glyph provider for spaces
-   Added new game events
-   Renamed some game events
-   `CatType` fields on enitites with type `minecraft:cat` have been replaced with `variant`, with numeric values being replaced with string ids (so, for example, `5` becomes `minecraft:calico`)
-   The type of the field `Id` in the mob effect structure (for example, in the `ActiveEffects` list on entities) has been changed from `byte` to `int`
-   Added `minecraft:darkness` mob effect
-   Added `sonic_explosion` particle
-   World presets/types and flat world presets in the "Create World" screen can now be controlled by datapacks
-   Servers can now enable Chat Preview, which displays a server-controlled preview above the chat edit box
-   Servers can now define different chat style formats for clients
-   Added server property `max-chained-neighbor-updates` to limit the amount of consecutive neighbor updates before skipping additional ones
    -   Negative values remove the limit
-   Servers will now also send an additional icon and MOTD packet after a player has connected
    -   This allows servers with `enable-status=false` to set an icon and MOTD for players that successfully connect

### Advancements

#### New triggers

##### `allay_drop_item_on_block`

-   Triggered when an Allay drops an item on a block
-   Conditions:
    -   `player` - a predicate for the player who gave the Allay the item to collect
    -   `location` - a predicate for the block that the item was dropped on
    -   `item` - a predicate for the item that was dropped

##### `avoid_vibration`

-   Triggered when a vibration event is ignored because the source player is holding the sneak key
-   Conditions:
    -   `player` - a player for which this trigger runs

##### `kill_mob_near_sculk_catalyst`

-   Triggered when a player kills an entity next to a Sculk Catalyst
-   Conditions:
    -   `player` - a predicate for the player killing the entity
    -   `entity` - a predicate for the entity that was killed
    -   `killing_blow` - a predicate for how the entity was killed

##### `thrown_item_picked_up_by_player`

-   Triggered when a player picks up an item that was thrown by an entity
-   Conditions:
    -   `player` - a predicate for the player picking up the item
    -   `entity` - a predicate for the entity that threw the item
    -   `item` - a predicate for the item

### Blending

-   Blending now supports 3D biome blending, which blends the underground biomes as well as the overground biomes
-   Removed `blending_data.old_noise`, now existence of `blending_data` in chunk data determines if a chunk is considered old
-   Added `blending_data.min_section` and `blending_data.max_section` that determines which section data that will be used for blending

### Chat Preview

-   Servers can enable Chat Preview by setting `previews-chat=true` in `server.properties`
-   Custom servers can enable or disable chat preview for certain clients by sending a new network packet
-   When enabled, a server-controlled preview appears above the chat edit box, showing how the message will look when sent
    -   A preview is also shown for chat-related commands, such as `/say` and `/msg`
-   This can be used by servers to preview messages with styling applied, such as emojis or chat coloring
-   Chat Preview sends chat messages to the server as they are typed, even before they're sent
    -   The server then sends back the styled preview in real time
    -   This allows servers to apply dynamic message stylings while still allowing chat to be securely signed
-   A warning screen is shown on the client when joining a server with Chat Preview, and it can be globally disabled in Chat Settings

### Chat Types

-   Different chat style formats can now be controlled by the server through the `chat_type` registry
    -   These are synchronized to clients when they join the server
    -   The translation key or translation format can be defined, like `chat.type.text` or `%s says: "%s"`
        -   Chat can be similarly optionally narrated with a custom translation key or format
    -   The entire message can have formatting applied, such as italics or a specific color (but currently not click or hover events)

### Commands

#### `place`

New command that replaces `placefeature` and can place features, jigsaws, structures, and templates at a given location. Syntax:

    place feature <feature> [pos]
    place jigsaw <pool> <start> <depth> [pos]
    place structure <structure> [pos]
    place template <template> [pos] [rotation] [mirror] [integrity] [seed]
    

Parameters:

-   `place feature` works like `placefeature` used to work
-   `place jigsaw` works like using the generate button in the UI of a Jigsaw Block
-   `place template` works like using the load button in the UI of a Structure Block
-   `place structure` generates a full structure, matching how structures generate during world generation
-   `feature`: The namespaced id of a configured feature to try to place
-   `structure`: The namespaced id of a structure to try to generate
-   `template`: The namespaced id of a template ("structure block file") to load and place
-   `pool`: The namespaced id of a template pool to start generating
-   `start`: The namespaced id name of a jigsaw to use as the starting anchor
-   `depth`: The maximum number of jigsaw connections to traverse during placement
-   `pos`: The position to use as the origin for the generation (if omitted, `~ ~ ~` is used)
-   `rotation`: The rotation to apply (if omitted, `none` is used)
-   `mirror`: The mirroring to apply (if omitted, `none` is used)
-   `integrity`: The structure integrity value between 0 and 1
-   `seed`: The seed to use for the randomized degradation when integrity is less than 1

### Debug

-   Added a heap memory allocation metric to the F3 debug screen
-   Added estimated GPU utilization percentage to performance profiling metrics and the F3 debug screen
    -   This is only available for graphics devices that support GPU timer queries
-   Removed the debug hotkey that cycles the render distance

### Game Events

#### Added Events

-   `teleport` with a vibration frequency of 5
-   `note_block_play` with a vibration frequency of 6
-   `instrument_play` with a vibration frequency of 15

#### Combined Events

The following events have been collapsed into `block_activate` and `block_deactivate`:

-   `block_press`
-   `block_unpress`
-   `block_switch`
-   `block_unswitch`

#### Other Changes

Other miscellaneous changes to game events:

-   `ring_bell` has been removed and replaced with `block_change`
-   Both `shulker_open` and `shulker_close` have been removed in favour of using `container_open` and `container_close`
-   `fishing_rod_cast` and `fishing_rod_reel_in` have been renamed to `item_interact_start` and `item_interact_finish`
-   `item_interact_start` is not detectable as a vibration to allow more specific actions be detected, like `drink` or `eat`, but `item_interact_finish` is
-   `entity_interact` should be dispatched more often when interacting with various mobs
-   Added the `dampens_vibrations` block tag that that includes all Wool and Wool Carpet blocks, to indicate blocks that will not trigger when placed, broken, or stepped on
-   Renamed item tag `occludes_vibration_signals` to `dampens_vibrations` item tag as well

#### Renamed Events

Some game events have been renamed, with some of those changes to make them more gramatically consistent:

-   `drinking_finish` -> `drink`
-   `entity_killed` -> `entity_die`
-   `entity_damaged` -> `entity_damage`
-   `elytra_free_fall` -> `elytra_glide`
-   `mob_interact` -> `entity_interact`
-   `ravager_roar` -> `entity_roar`
-   `wolf_shaking` -> `entity_shake`

### Game Rules

-   Added `doWardenSpawning` game rule

### Loot Tables

#### New functions

##### `set_instrument`

Sets the item tags needed for instrument items to a randomly selected instrument from a tag Parameters:

-   `options` - a tag reference specifying the instrument options to randomly pick from

### Multiplayer Secure Chat Signing

-   Chat messages between players are now cryptographically signed
    -   The message arguments to `/say`, `/msg`, `/teammsg`, and `/me` commands are all also signed
-   Players are given a Mojang provided key-pair on startup
-   Servers can require players to have a Mojang-signed public key by setting `enforce-secure-profile=true` in `server.properties`
    -   Enforcing secure profiles will prevent players without a Mojang-signed public key from connecting
    -   By default this is set to `false`, allowing players to connect without a Mojang-signed public key
-   Static chat styling can now be controlled by the server through the `chat_type` registry, or with server resource packs as before
-   Dynamic chat styling can also be controlled by the server, although this is only signed when Chat Preview is enabled
    -   Clients can prefer to always show the original, signed message by enabling "Only Show Secure Chat" in Chat Settings
-   Chat from players still using Mojang Accounts is not signed
    -   Their messages will not show for players with "Only Show Secure Chat" enabled
    -   They may be unable to join server with the `enforce-secure-profile` option enabled

### Pack filters

-   Data and resource packs can have `filter` section in `pack.mcmeta`
-   This section has mandatory field `block`, which is a list of patterns (regular expressions) for namespaces and paths
-   If any of the files in packs are added before one with `filter`, the section will match any pattern inside `block`, and it will then be filtered out (i.e. treated as if it wasn't present in the first place)
-   `filter` section does not apply to a pack containing it - only to packs loaded before it
-   Both `namespace` and `path` can be omitted
    -   Missing field matches every value
-   For example, adding a pack with this section in `pack.mcmeta` after the vanilla pack will hide all the recipes and advancements defined by the vanilla pack

#### Example

    "filter": {
        "block": [
            {
                "namespace": "minecraft",
                "path": "recipes/.*"
            },
            {
                "namespace": "minecraft",
                "path": "advancements/.*"
            }
        ]
    }
    

### Paintings

-   Paintings that are placeable in survival can now be controlled with the `painting_variant/placeable` tag
-   Added unused paintings from Bedrock edition (`earth`, `wind`, `fire`, `water`)
    -   These paintings are not placeable by default, but can be added through a datapack

### Point of Interest types

-   Removed `unemployed` and `nitwit` `point_of_interest_type`s
-   Added tag `point_of_interest_type/acquirable_job_site` for all job sites seeked by villagers with `none` profession
-   Added tag `point_of_interest_type/village` for PoI that are part of village
-   Added tag `point_of_interest_type/bee_home` for all PoI targeted by bees

### Predicates

-   The `feature` field in location predicates is now called `structure`

#### Entity predicate

-   `player`, `fishing_hook`, `lightning_bolt` and `catType` fields have been replaced with `type_specific`
-   `type_specific` has field `type` (one of `player`, `fishing_hook`, `lightning_bolt` or `cat`) and same fields as removed fields
-   `catType` has been wrapped to match new format and now uses new cat variant names instead of texture names:
-   New `type_specific` options:
    -   `frog` has `variant` field matching Frog variant (`minecraft:warm`, `minecraft:temperate` or `minecraft:cold`)
    -   `slime` applies for Slimes and Magma Cubes, has `size` field matching Slime size (smallest is `1`)

##### `catType` Example

Before:

     "catType": "minecraft:textures/entity/cat/british_shorthair.png"
    

After:

     "type_specific": {
        "type": "cat",
        "variant": "minecraft:british"
     }
    

##### `type_specific` Example

Before:

     "lightning_bolt": {
       "blocks_set_on_fire": 0
     }
    

After:

      "type_specific": {
        "type": "lightning",
        "blocks_set_on_fire": 0
      }
    

### Space glyph provider

-   The new glyph provider type `space` is added to allow creation of space-like glyphs
-   The new provider has a single argument called `advances` which is a map of codepoint to glyph advance (width)
-   The rendering of space glyph is no longer hardcoded (needs to be declared manually in font)

### World presets

-   New registry types `worldgen/world_preset` and `worldgen/flat_level_generator_preset` have been added to configure data-driven presets (like "Amplified" or "Single Biome")
-   Two tags for world presets have been added (`normal` and `alternative`) to control which values show on the "World Type" button in the "Create World" screen
-   One tag has been added (`visible`) for flat world presets to control the order that elements are displayed in the "Configure Flat World" screen
-   World presets can also be used as a value of `level-type` in `server.properties`

## Fixed Bugs in 1.19

-   About 150 bugs were fixed in this release. View the [entire list on the issue tracker](https://bugs.mojang.com/issues/?filter=27034).

---

We're now releasing 1.18.2 for Minecraft: Java Edition. This release adds universal tags and the placefeature command. It also introduces the possibility for experimental data packs to customize cave generation and to add new custom structures to worlds.

Additionally, this version contains compliance updates for South Korean players.

Enjoy!

## Changes in 1.18.2

-   Users running Minecraft in a 32-bit environment will receive a warning in the main menu about the upcoming end of 32-bit environment support
-   If you’re playing in South Korea, we added gameplay timers and notices in compliance with gaming laws to help remind players to take occasional breaks from gameplay
-   A seed of the number zero is no longer handled as a special case
-   Any spaces before/after an inputted seed will now be trimmed
-   Dolphins will now more accurately pick the closest structure regardless of type
-   Ender chests are no longer gift wrapped around Christmas

## Technical Changes in 1.18.2

-   Added command: `placefeature`
-   The `locate` command now uses a namespaced id parameter
-   The `locate` command parameter is now a configured structure rather than a structure type. For instance, you can now use `/locate village_desert` or `/locate shipwreck_beached`
-   `locate` and `locatebiome` commands now support tags (prefix with `#` to distinguish from normal ids)
-   It is now possible to add custom structures in experimental datapacks
-   A lot of the cave generation is now configurable through experimental datapacks
-   Any type present in registries (blocks, items, biomes, etc.) can now have tags
-   The datapack version is now 9

### `placefeature` Command

New command that places a configured feature at a given location. Syntax: `placefeature <id> [pos]` Parameters:

-   `id`: The namespaced id of a configured feature to place
-   `pos`: The position to use as the origin for the feature placement (if omitted, `~ ~ ~` is used)

### Configurable caves

-   A new registry was added for Density functions (caves are created by combining those together)
-   Noise settings got a new field `noise_router` (and lost a couple of flags), see `worldgen/noise_settings` folder in the worldgen report
-   Noise router wires data-driven parts of the cave generation with the rest of the code

### Configured Structures and Structure Sets

The game now generates and stores data-driven configured structures.

-   Experimental datapacks can add new structure sets
-   The `feature` field in location predicates now references a configured feature
-   The `exploration_map` loot table function `destination` field is now a configured feature tag id
-   The `exploration_map` loot table function no longer automatically sets the display name of the map

### Universal tags

-   Tags can now be defined for any registry (blocks, items, biomes, etc. - see `registries.json` in report)
-   New tags are stored in datapacks under `tags` directory (same as old ones)
    -   Names of new tag directories are the same as registry names (so `/data/[namespace]/tags/potion` and `/data/[namespace]/tags/worldgen/biome`)
    -   Existing tags (`blocks`, `items`, `fluids`, `entity_types`, `game_events` and `functions`) keep their name (for now)
-   Some fields in worldgen structures that previously accepted only lists of element ids now accept tags
    -   Those entries now accept `[id, ...]`, `id` (shortcut for `[id]`) and `#tag`
    -   Changed fields are:
        -   `feature.glow_lichen` configuration: `can_be_placed_on`
        -   `feature.spring_feature` configuration: `valid_blocks`
        -   `feature.simple_random_selector` configuration: `features`
        -   `block_predicate_type.matching_blocks`: `blocks`
        -   `block_predicate_type.matching_fluids`: `fluids`
        -   `biome`: inner list in `features`, map value in `carvers`
        -   `biome_source.checkerboard`: `biomes`
-   Some tag fields now require id to be prepended with `#` (however they are not yet accepting element list)
    -   `dimension_type`: `infiniburn`
    -   `feature.geode` configration: `blocks.cannot_replace`, `blocks.invalid_blocks`
    -   `feature.vegetation_patch`, `feature.waterlogged_vegetation_patch` configuration: `replaceable`
    -   `feature.root_system` configuration: `root_replaceable`
    -   `structure_processor.protected_blocks`: `value`

## Fixed Bugs in 1.18.2

In addition to crashes and other stability improvements, around 100 player-reported bugs were fixed in this release. View the [list on the issue tracker](https://bugs.mojang.com/issues/?filter=26771).

---

We’re now releasing Minecraft: Java Edition 1.18.1. This release fixes a critical security issue for multiplayer servers, changes how the world fog works to make more of the world visible, and fixes a couple of other bugs.

If you are running a multiplayer server, we highly encourage you to upgrade to this version as soon as possible.

Enjoy!

## Technical Changes in 1.18.1

-   Fixed an issue that would cause players on low-bandwidth connections to get timeout errors when connecting to a server
-   World fog now starts further away from the player, to make distant terrain more visible
-   Instead of applying fog as a spherical volume it is now applied as a cylindrical volume

## Fixed Bugs in 1.18.1

-   [MC-152198](https://bugs.mojang.com/browse/MC-152198) Actual render distance is 2 chunks lower than render distance setting
-   [MC-219507](https://bugs.mojang.com/browse/MC-219507) Beacon's power reverts back to previous one on world reload
-   [MC-229321](https://bugs.mojang.com/browse/MC-229321) Bees inside of bee hives / nests sometimes despawn when the world is reloaded
-   [MC-242729](https://bugs.mojang.com/browse/MC-242729) "Observer activating without any updates nearby, caused by /clone"
-   [MC-243216](https://bugs.mojang.com/browse/MC-243216) Chunk render distance on servers seems shorter than in 1.17.1
-   [MC-243796](https://bugs.mojang.com/browse/MC-243796) Random non fatal exceptions in console: Failed to store chunk ConcurrentModificationException

---

