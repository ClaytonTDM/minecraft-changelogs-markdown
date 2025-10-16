# Minecraft Snapshot 22w46a

We are now releasing snapshot 22w46a for Minecraft 1.19.3 with [playable mob sounds](https://www.minecraft.net/article/playable-mob-sounds-coming-minecraft-1-20) added as an experimental feature, improvements for telemetry data and several technical improvements.

Happy mining!

## New Experimental Features in 22w46a

-   Books in Chiseled Bookshelf can be added or removed from any slot by targeting the specific slot

### Mob Heads on Note Blocks interaction

-   When placing a Mob Head on a Note Block, that Note Block will now play one of the ambient sounds of that mob when played by a player or powered by Redstone

### Piglin Mob Head

-   Piglins will now drop their heads when killed by a charged Creeper
-   Placing the Piglin head on a Note Block will play one of the Piglin's ambient sounds
-   The Piglin head will flap its ears when powered by Redstone, or when worn by a player while walking

## Changes in 22w46a

-   In the Nether dimension Endermen, Skeletons and Wither Skeletons now only spawn at light level 7 and below (instead of 11 and below)
    -   This is intended to nerf certain portal-based mob farms
    -   We welcome feedback on this
-   Added new top textures for Block of Bamboo and Block of Stripped Bamboo
-   Bamboo Plank texture has been tweaked to match the same tiling pattern as other plank variants

### Creative Inventory changes

-   Reordered Redstone tab based on feedback
-   Added Rails to the Tools & Utilities tab next to Minecarts

## Technical Changes in 22w46a

-   Blocks carried by Endermen now use loot tables to generate drops when killed
-   Changes to texture loading and stitching
-   Translation files and `pack.mcmeta` are now including non-ASCII characters (encoded as UTF-8) directly instead of using escape sequences
-   Added new Telemetry Events

### Telemetry

This release includes the WorldUnloaded event, a required event, as well as several opt-in events. Diagnostic tracking is a tool that helps us understand what you like about Minecraft, which allows us to make those things better.

The reason that WorldUnloaded, along with [WorldLoaded](https://www.minecraft.net/en-us/article/minecraft-snapshot-21w38a), is a required event is that the information we’re looking at is, well, required. As a part of Xbox, we all need to follow a standard of practice, you can find a detailed description of it [here](https://privacy.microsoft.com/en-us/privacystatement). The parameters for what data we consider to be critical to our work are set by our team at Mojang Studios in alignment with Xbox.

What we want to find out is how fun you think Minecraft is. There are lots of ways to figure that out, like feedback, playtests, experience, and magic. We want to add data to that mix, which is where WorldLoaded and WorldUnloaded come in. WorldLoaded measures when you boot a session up, and WorldUnloaded measures when you shut it down. Together, they will measure how fun Minecraft is, using metrics such as playtime and the game modes that players choose to play. That’s it. All the data we collect, whether it’s required or opt-in, follows GDPR and CCPA best practices to keep your information safe.

The rest of the current telemetry events are opt-in, which means that you can choose whether or not you want to send us additional data. The only players that can’t opt-in are Microsoft child accounts, but everyone can still send in all of their feedback to [feedback.minecraft.net](http://feedback.minecraft.net/).

Just like all the thoughts and comments we get from you on our feedback site, this is something that greatly helps us improve Minecraft. We want to make a game that you want to play, so we want to know what that game needs. Even if it’s more lava.

#### Telemetry transparency

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

#### Required telemetry events

-   Added WorldUnloaded event
-   Removed client Java version from the WorldLoaded event

##### WorldLoaded & WorldUnloaded

Understanding how Minecraft is played allows us to focus game updates and improvements on the areas that are most relevant to players. The data that tells us this includes game mode, client or server modded status, and game version.

WorldLoaded & WorldUnloaded are two paired events that calculate how long the world session has lasted (in seconds and ticks). Data from WorldLoaded is sent when a world is launched, and data from WorldUnloaded is sent when a world is shut down (quitting to title, disconnecting from a server).

#### Optional telemetry events

-   Added PerformanceMetrics and WorldLoadTimes events

##### PerformanceMetrics

Knowing the overall performance profile of Minecraft helps us tune and optimize the game for a wide range of machine specifications and operating systems.

The periodic performance metrics includes data such as frame-rates, rendering performance, memory usage, operating system, and the modded status of the client and server.

Game version is included to help us compare the performance profile for new versions of Minecraft.

##### WorldLoadTimes

It’s important for us to understand how long it takes to join a world, and how that changes over time. For example, when we add new features or do larger technical changes, we need to see what impact that had on load times.

This event includes the total time in milliseconds for the world to load, whether this was a new world, as well as game version and platform details.

### Texture loading changes

-   Context: When the game loads all textures used by block and item models need to be stitched (merged) into a single image, called the "atlas"
    -   Individual textures that are stitched onto the atlas are called "sprites"
-   To improve loading performance, block and item textures are now loaded before they are processed by block and item models
    -   By default, textures not in the `textures/item` and `textures/block` directories will no longer be automatically recognized and will fail to load
-   Resource packs can now have configuration files, located in `atlases` directory, that control which images are included in the atlases

#### Atlas configuration files

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

### Commands

-   New command: `fillbiome`
-   New execute sub-command: `execute if|unless biome`

#### `fillbiome`

Changes biome entries for an area. Note that biomes are not stored per-block, so affected positions may not match input precisely.

Syntax:

`fillbiome <from> <to> <biome>`

Parameters:

-   `from`: One corner of the area to fill
-   `to`: The other corner of the area to fill
-   `biome`: The biome to set

#### `execute`

Execute commands can now be conditional on biomes.

Syntax:

`execute if|unless biome <pos> <biome>`

## Fixed bugs in 22w46a

-   [MC-121865](https://bugs.mojang.com/browse/MC-121865) High potion effect durations being displayed as **:** is misleading
-   [MC-147605](https://bugs.mojang.com/browse/MC-147605) Text cursors can exist in multiple fields
-   [MC-151412](https://bugs.mojang.com/browse/MC-151412) "Edit Server Info" window does not focus "Server Name" text field automatically
-   [MC-187539](https://bugs.mojang.com/browse/MC-187539) "tick" function tag runs before "load" instead of the other way around
-   [MC-205563](https://bugs.mojang.com/browse/MC-205563) Endermen holding powder snow drop a powder snow bucket when killed
-   [MC-209621](https://bugs.mojang.com/browse/MC-209621) Endermen holding potted plants do not drop the pot nor the plant
-   [MC-221722](https://bugs.mojang.com/browse/MC-221722) Squids use the new texture when using Programmer Art
-   [MC-222099](https://bugs.mojang.com/browse/MC-222099) Endermen holding candle cakes do not drop the candle or the cake upon being killed
-   [MC-233042](https://bugs.mojang.com/browse/MC-233042) Server Address field isn't focused when Direct Connection menu is opened
-   [MC-234029](https://bugs.mojang.com/browse/MC-234029) You cannot hold any key to rapidly navigate between elements quickly after opening the inventory
-   [MC-234161](https://bugs.mojang.com/browse/MC-234161) You cannot hold the TAB key to navigate between buttons quickly in the "Optimize World" menu
-   [MC-234240](https://bugs.mojang.com/browse/MC-234240) You cannot hold the TAB key to navigate between buttons quickly in the "Superflat Customization" menu
-   [MC-234408](https://bugs.mojang.com/browse/MC-234408) You cannot hold the TAB key to navigate between buttons quickly in the "Reset world" realms menu
-   [MC-234409](https://bugs.mojang.com/browse/MC-234409) You cannot hold any key to rapidly execute the same function in the "World options" realms menu
-   [MC-234572](https://bugs.mojang.com/browse/MC-234572) You cannot hold the TAB key to navigate between buttons quickly in the "Delete Server" menu
-   [MC-234621](https://bugs.mojang.com/browse/MC-234621) You cannot hold the TAB key to navigate between buttons quickly in the "remove player" realms menu
-   [MC-234782](https://bugs.mojang.com/browse/MC-234782) You cannot hold the TAB key to navigate between buttons quickly in the "Close realm" realms menu
-   [MC-234846](https://bugs.mojang.com/browse/MC-234846) You cannot hold the TAB key to navigate between buttons quickly in the "switch world" realms menu
-   [MC-234904](https://bugs.mojang.com/browse/MC-234904) You cannot hold the TAB key to navigate between buttons quickly in the "Data Packs" menu
-   [MC-248926](https://bugs.mojang.com/browse/MC-248926) Setting "spectatorsGenerateChunks" to false and relogging freezes the game on the Loading Terrain screen
-   [MC-249059](https://bugs.mojang.com/browse/MC-249059) Loading terrain screen cannot close before 2 seconds have passed
-   [MC-250262](https://bugs.mojang.com/browse/MC-250262) Players sometimes get stuck on the "Loading terrain..." screen after switching dimensions whilst dead
-   [MC-256308](https://bugs.mojang.com/browse/MC-256308) "limit" selector parameter with "arbitrary" sorting does not stop searching early
-   [MC-256472](https://bugs.mojang.com/browse/MC-256472) Camels aren't required for the "Two by Two" advancement
-   [MC-256509](https://bugs.mojang.com/browse/MC-256509) Heads and Skulls are placed backwards
-   [MC-256510](https://bugs.mojang.com/browse/MC-256510) Using a glow ink sac on a hanging sign does not grant the advancement "Glow and Behold!"
-   [MC-256669](https://bugs.mojang.com/browse/MC-256669) Crafting recipe for bamboo hanging signs is unlocked by having any stripped log
-   [MC-256878](https://bugs.mojang.com/browse/MC-256878) You cannot hold the TAB key to navigate between buttons quickly in the "Edit draft chat report" menu
-   [MC-256882](https://bugs.mojang.com/browse/MC-256882) Bats fly in the perched position and vertical movement is not smooth
-   [MC-256935](https://bugs.mojang.com/browse/MC-256935) Long player names within the "Select Chat Messages to Report" menu can extend past the scroll bar
-   [MC-256993](https://bugs.mojang.com/browse/MC-256993) End crystal knockback bug
-   [MC-257073](https://bugs.mojang.com/browse/MC-257073) You cannot hold the TAB key to navigate between buttons quickly in the "Experimental Features Warning" menu
-   [MC-257105](https://bugs.mojang.com/browse/MC-257105) The walking animation of frogs and camels doesn't play when they are moving slowly
-   [MC-257113](https://bugs.mojang.com/browse/MC-257113) Ender dragon, wither, snow golem and iron golem spawn eggs from before 1.13 do not convert properly
-   [MC-257114](https://bugs.mojang.com/browse/MC-257114) Incoherency: A random seed is already generated on the "Create New World" seed text field screen despite the "Leave blank for a random seed" label
-   [MC-257188](https://bugs.mojang.com/browse/MC-257188) You aren't prompted that your draft reports will be discarded upon disconnecting from worlds by using the "Title Screen" button within the death screen
-   [MC-257266](https://bugs.mojang.com/browse/MC-257266) Entities sink or fall through snow when it accumulates while the "snowAccumulationHeight" gamerule is set to any value greater than 1
-   [MC-257329](https://bugs.mojang.com/browse/MC-257329) Right-hand side tabs in the creative inventory are misaligned
-   [MC-257334](https://bugs.mojang.com/browse/MC-257334) Stacked items do not show creative inventory tab label
-   [MC-257354](https://bugs.mojang.com/browse/MC-257354) Messages sent by the hosts of LAN worlds are now considered unverified and cannot be reported
-   [MC-257355](https://bugs.mojang.com/browse/MC-257355) The "Social Interactions" menu now falsely claims that there are no reportable messages for given players
-   [MC-257378](https://bugs.mojang.com/browse/MC-257378) Villagers and piglins can't open or close doors
-   [MC-257386](https://bugs.mojang.com/browse/MC-257386) Inventory menu has broken textures with Programmer Art enabled
-   [MC-257401](https://bugs.mojang.com/browse/MC-257401) Frog walk animation speeds up greatly when tempted by food or chasing slimes
-   [MC-257410](https://bugs.mojang.com/browse/MC-257410) "Game Menu" on the pause menu is clickable

---

Minecraft Snapshot 22w45a is now out and about. This snapshot introduces the [new default skins](https://www.minecraft.net/article/introducing-new-default-skins) for offline players, bamboo blocks, and a visual refresh for the Vex. On top of that, there’s some additional creative inventory tweaks.

Happy mining!

## New Features in 22w45a

-   Added new default skins for offline players
-   Added Block of Bamboo and Stripped Block of Bamboo
    -   Block of Bamboo can be crafted from 9 Bamboo and can be stripped like other wood logs
    -   Bamboo Planks crafted from Block of Bamboo yield only 2 planks compared to 4 for wood logs

## Changes in 22w45a

-   The Vex now has a new look
-   The Wild update music has been tweaked to be slightly less loud
-   When opening, Shulker Boxes will pop off blocks which are attached to opened faces (such as Torches)
    -   Blocks that require support cannot be placed on these open faces while the Shulker Box is open
-   "Teleport to Team Member" option in spectator menu now only shows up for teams with viable target players
-   Added Operator Items Tab option in the Controls menu which is off by default
-   Creative Inventory changes

### Vex

-   Changes to Vex model and textures
    -   The Vex retains a slightly oversized hitbox to make it easier to fight

### Creative Inventory changes

-   Operator-only items now appear in a new Operator Utilities tab if you have both:
    -   Operator Items Tab option in Controls menu set to `ON`
    -   The required operator permissions
    -   The tab is hidden if operator permissions are lost while inventory is open
    -   Now also includes Structure Blocks and all light levels of Light Blocks
-   Added a Colored Blocks tab
    -   Contains all blocks with 16 color variants
    -   Moved all colored blocks from Building Blocks tab to this tab instead to make that tab less sizeable
-   Consumables tab has been renamed to Food & Drinks tab to have a more straightforward name
-   Crafting tab has been renamed to Ingredients tab since not all items are used in crafting
-   Reordered
    -   Natural Blocks
        -   More consistency between types for the top section
        -   Moved eggs to be between seeds and single-block plants
        -   Placed climbable plants above double-block plants
    -   Food & Drinks
        -   Cooked versions of raw food are now right next to each other
    -   Redstone Blocks
        -   Less cluttered
        -   Higher importance items up the top
        -   Removed variants of Doors, Trapdoors, Buttons and Boats that don't have any functional difference
    -   Ingredients
        -   Placed Lapis in the same order as ore blocks
-   Moved
    -   Bottle o' Experience from the Tools & Utilities tab to the Ingredients tab next to enchanting books
-   Added
    -   All axes to the Combat tab (they still remain in the Tools & Utilities tab as well)
    -   All possible Suspicious Stews to the Consumables tab
        -   The tooltip will show the effect of a stew before it's picked up from the Creative Inventory
        -   Only stews with effects available via crafting or Mooshrooms are listed
    -   Pressure Plates and Buttons of each type to the Building Blocks tab
    -   Almost all lighting blocks to the top of the Functional Blocks tab
    -   All 3 flight durations of Fireworks to Tools & Utilities tab, and the Combat tab next to Crossbow
    -   Eye of Ender next to End Portal Frame block in Functional tab for better ease of use
-   Tooltips for all items in Creative Menu outside single-category tabs will show categories where this item can be found
    -   Previously this only happened on the search tab

## Technical Changes in 22w45a

-   The `/publish` command has new arguments to enable commands and set the default gamemode
    -   New syntax: `/publish [allowCommands] [gamemode] [port]`
-   Changes to the Open to LAN screen
    -   The screen now allows selecting the port on which to host the LAN world
    -   The game mode and allow cheats buttons are now initialized with the default values of the world
-   The Resource Pack version is now 12

## Fixed bugs in 22w45a

-   [MC-80032](https://bugs.mojang.com/browse/MC-80032) Horses can suffocate when going through nether portals
-   [MC-118140](https://bugs.mojang.com/browse/MC-118140) Result map tooltip when zooming out a map shows previous zoom value instead of new one
-   [MC-127110](https://bugs.mojang.com/browse/MC-127110) You can't empty water buckets into waterlogged blocks
-   [MC-177523](https://bugs.mojang.com/browse/MC-177523) Enderman angry/screaming sound event subtitled identically to idle sound
-   [MC-193360](https://bugs.mojang.com/browse/MC-193360) Inconsistent eye level between piglins or zombified piglins and piglin brutes
-   [MC-200000](https://bugs.mojang.com/browse/MC-200000) Merchant trade select packet (C2S) does not check for negative indices
-   [MC-235414](https://bugs.mojang.com/browse/MC-235414) Player desynchronization with Nether Portals
-   [MC-244550](https://bugs.mojang.com/browse/MC-244550) Empty Tags match Empty Slots in Shaped Recipes
-   [MC-255370](https://bugs.mojang.com/browse/MC-255370) Chat hover & click events are offset if "Line Spacing" chat setting is used
-   [MC-255743](https://bugs.mojang.com/browse/MC-255743) Bees' path finding system may cause performance issues
-   [MC-256461](https://bugs.mojang.com/browse/MC-256461) Camel's back of neck is visible during the sit down animation
-   [MC-256511](https://bugs.mojang.com/browse/MC-256511) Non-controlling passengers can make camels dash
-   [MC-256516](https://bugs.mojang.com/browse/MC-256516) Inconsistent textures with jungle hanging signs
-   [MC-256532](https://bugs.mojang.com/browse/MC-256532) Sounds for Bamboo, Crimson and Warped hanging signs use the generic wood sound
-   [MC-256616](https://bugs.mojang.com/browse/MC-256616) Weighted pressure plates make incorrect sounds
-   [MC-256674](https://bugs.mojang.com/browse/MC-256674) FileAlreadyExistsException if the resourcepacks directory is a symbolic link
-   [MC-256765](https://bugs.mojang.com/browse/MC-256765) References to chat reporting in singleplayer
-   [MC-256854](https://bugs.mojang.com/browse/MC-256854) Error in any model file causes resource reload fail now
-   [MC-256884](https://bugs.mojang.com/browse/MC-256884) Mobs don't shoot correctly from crossbows
-   [MC-256885](https://bugs.mojang.com/browse/MC-256885) The word "messages" within the "gui.chatSelection.fold" string is always pluralized
-   [MC-256888](https://bugs.mojang.com/browse/MC-256888) New network protocols prevent logging into offline servers
-   [MC-256903](https://bugs.mojang.com/browse/MC-256903) Lodestone compass's enchantment glint is scaled incorrectly
-   [MC-256917](https://bugs.mojang.com/browse/MC-256917) Death message from explosions by TNT and TNT minecarts that are not the cause of a player or another mob has changed
-   [MC-256951](https://bugs.mojang.com/browse/MC-256951) TNT Minecarts don't record what caused its explosion
-   [MC-256961](https://bugs.mojang.com/browse/MC-256961) Multishot shoots projectiles backwards
-   [MC-256990](https://bugs.mojang.com/browse/MC-256990) Superflat Worlds can use Disabled Blocks as part of their layers
-   [MC-257102](https://bugs.mojang.com/browse/MC-257102) Missing Structure Block in creative tab
-   [MC-257104](https://bugs.mojang.com/browse/MC-257104) "Lava" in gamerule.lavaSourceConversion is misspelled as "Lave"
-   [MC-257118](https://bugs.mojang.com/browse/MC-257118) Buttons are placed different than pressure plates in Creative Inventory
-   [MC-257234](https://bugs.mojang.com/browse/MC-257234) Applying bone meal to warped or crimson fungus crashes client on multiplayer

---

Another Wednesday, another snapshot. This week's snapshot introduces a few new game rules and a few gameplay changes which include another round of inventory tweaks. As usual, there are a few bugfixes as well.

Happy Mining!

## Changes in 22w44a

-   Bamboo Mosaic can now be used as fuel
-   Chiseled Bookshelves now works with Hoppers
-   More changes to the Creative Inventory
-   Monster Spawner changes
-   Spawn Egg changes
-   Step sound changes

### Creative Inventory changes

A (hopefully) final round of changes have been made to the Creative Tab orderings to address feedback:

-   Operator-only blocks and items can now be found in the Redstone Blocks tab if you have the required permissions
-   Functional Blocks
    -   Added:
        -   Tinted Glass
        -   Bee Nest
    -   Moved Respawn Anchor before Beds
    -   Reordered Pressure Plates by functionality
    -   Moved End Portal Frame & Infested blocks into this tab from Natural Blocks tab
-   Redstone Blocks
    -   Added:
        -   Chest
        -   Barrel
        -   Cauldron
        -   Furnace
        -   Composter
-   Building Blocks
    -   Added:
        -   Chain
        -   Block of Amethyst
    -   Moved Block of Redstone and Block of Coal into this tab from Natural Blocks tab
-   Crafting
    -   Added:
        -   Ancient Debris
-   Reordered the following tabs for better consistency
    -   Building Blocks
    -   Natural Blocks
    -   Consumables
-   Reordered ore materials and blocks to be more consistent across tabs

### Monster Spawners

-   Spawners no longer have a default mob spawn type when placed by a player (previously was the Pig)
-   Will not emit fire particles when a mob spawn type has not been defined
-   Renamed to Monster Spawner to match Bedrock, and removed purple text color
-   Pick-block now works for Spawner blocks
-   The mob type is now displayed in the hover description of a Spawner item stack
    -   If a mob type has not been defined yet, the hover description will describe how to set it

### Spawn Eggs

-   Added new Spawn Egg items for Ender Dragon, Iron Golem, Snow Golem and Wither mobs to Creative mode
    -   Ender Dragon and Wither Spawn Eggs will only be available through commands to prevent accidental destruction of player builds
-   Polar Bear Spawn Egg colors have changed to distinguish it from the Ghast Spawn Egg

### Sounds

-   Step sounds can now be heard when walking on:
    -   Carpets
    -   Lily Pads
    -   Small Amethyst Buds
-   Step sounds can now be heard when walking through:
    -   Nether Sprouts
    -   Glow Lichen
    -   Crimson Roots
    -   Warped Roots

## Technical Changes in 22w44a

-   Added new game rules

### Game Rules

-   Added `blockExplosionDropDecay`, `mobExplosionDropDecay` and `tntExplosionDropDecay` game rules
    -   When set to `false`, all blocks drop loot
    -   When set to `true`, blocks drop loot randomly depending on how far from the explosion center
    -   Defaults to `false` for TNT, `true` for block and mob
-   Added `snowAccumulationHeight` game rule
    -   When it is snowing, this game rule determines the maximum number of Sniow Layers that can be accumulated in each block
    -   Defaults to `1`
    -   Set to `0` makes no Snow form at all
    -   Set to `8` or above lets Snow form up to the level of a full block
-   Added `waterSourceConversion` and `lavaSourceConversion` game rules
    -   When set to `true`, allows new sources of that fluid to form
    -   Defaults to `true` for Water and `false` for lava
-   Added `globalSoundEvents` game rule, controlling whether certain gameplay moments are heard by all players regardless of location
    -   Defaults to `true`

## Fixed bugs in 22w44

-   [MC-30403](https://bugs.mojang.com/browse/MC-30403) Sprinting isn't canceled when dismounting rideable entities while sprinting
-   [MC-137136](https://bugs.mojang.com/browse/MC-137136) Lily Pads use incorrect sound
-   [MC-137306](https://bugs.mojang.com/browse/MC-137306) Turtles don't have breeding delay
-   [MC-191790](https://bugs.mojang.com/browse/MC-191790) Re-creating a world doesn't allow a blank seed and uses recreated world's seed instead of random
-   [MC-195780](https://bugs.mojang.com/browse/MC-195780) "Data mode" and "Load mode" aren't capitalized while "Save Mode" and "Corner Mode" are
-   [MC-244721](https://bugs.mojang.com/browse/MC-244721) "Erase cached data" is not capitalized
-   [MC-253387](https://bugs.mojang.com/browse/MC-253387) Frog walking animation is slowed down when applied with slow falling
-   [MC-254435](https://bugs.mojang.com/browse/MC-254435) Neither the secure chat warning toast nor the chat preview warning screen is presented to the player when joining a server using the --server argument
-   [MC-255115](https://bugs.mojang.com/browse/MC-255115) Lily pads do not produce sounds when walking on them
-   [MC-256463](https://bugs.mojang.com/browse/MC-256463) Camels will not pathfind over 1.5 high blocks
-   [MC-256480](https://bugs.mojang.com/browse/MC-256480) Non Flammable Wood Item tag contains 1.20 content even when disabled
-   [MC-256526](https://bugs.mojang.com/browse/MC-256526) Bamboo Fence Gate has missing textures / culling issues
-   [MC-256606](https://bugs.mojang.com/browse/MC-256606) Camel walking animation is slowed down when applied with slow falling
-   [MC-256623](https://bugs.mojang.com/browse/MC-256623) Bamboo mosaic slabs aren't flammable
-   [MC-256637](https://bugs.mojang.com/browse/MC-256637) Some bamboo blocks can't be used as furnace fuel
-   [MC-256647](https://bugs.mojang.com/browse/MC-256647) Mobs face south even with a given rotation value
-   [MC-256768](https://bugs.mojang.com/browse/MC-256768) Entities no longer have random rotations upon being summoned from spawn eggs
-   [MC-256879](https://bugs.mojang.com/browse/MC-256879) Weighted pressure plates are placed wrong in creative inventory
-   [MC-256881](https://bugs.mojang.com/browse/MC-256881) The game crashes when pressing the ESC key while having draft chat reports saved
-   [MC-256887](https://bugs.mojang.com/browse/MC-256887) Tinted glass is not considered a 'Functional Block'
-   [MC-256934](https://bugs.mojang.com/browse/MC-256934) You aren't prompted to save your chat reports as drafts while only having report categories inputted
-   [MC-257058](https://bugs.mojang.com/browse/MC-257058) Cactus is not grouped with sugar cane in Creative inventory
-   [MC-257059](https://bugs.mojang.com/browse/MC-257059) Mushroom stem comes after nether fungus stems in Creative inventory, but mushroom blocks come before wart blocks
-   [MC-257060](https://bugs.mojang.com/browse/MC-257060) Bee nest is absent from Functional Blocks

---

Did you know that Camels walk by lifting both legs on one side at the same time? Yes, in snapshot 22w43a, Minecraft knows too! This snapshot also contains another round of tweaks to the Creative Inventory.

Happy Mining!

## Changes in 22w43a

-   Changed the colours of the Camel Spawn Egg
-   Tweaked Camel walk cycle animation
-   Fence Gates no longer provide center support beneath them
-   The Chat Reporting screen now shows when the player being reported rejoined chat
-   More Changes to the Creative Inventory
-   Added Draft Player Reports

### More Changes to the Creative Inventory

A lot of feedback has come pouring in as a result of the creative inventory ordering changes.

#### Changes

-   Change the icons of creative tabs for better color coding as well as show most iconic visuals
-   Nature Blocks tab has been renamed to Natural Blocks
-   Moved dirts and stones to top of Natural Blocks tab which was a big ask from many people (saying they use many of those blocks more than flowers etc)
-   Fixed Water Bottles not populating in the Consumables tab
-   Reordered Quartz so Smooth Quartz is a separate section of blocks
-   Climbable plant blocks are now together in the Natural Blocks tab
-   Fixed order of Waxed Copper blocks
-   Fixed order of Coral Blocks to be consistent
-   Made sure Netherrack was next to Nylium in Natural Blocks tab
-   Reordered equipment so golden tools and weapons were in a logical order
-   Moved normal Rails to be before special Rails
-   Order colored blocks by their gradient (Wool, Terracotta, Candles, Banners, Stained Glass, etc)
-   Moved Signs up higher in the Functional Blocks tab as it is used quite often by players
-   Basalt blocks are now found after Nether Brick blocks in the Building Blocks tab, next to Blackstone
-   Generally reordered the plants of the Natural Blocks tab

#### Additions

-   Added to Redstone Blocks tab
    -   Boat with Chests
    -   Bell
    -   Big Dripleaf
    -   White Wool next to Sculk Sensor
    -   String next to Tripwire Hook
    -   Redstone Ores
    -   Chiselled Bookshelf
-   Added to Consumables tab
    -   Milk Buckets
-   Added to Functional Blocks tab
    -   Ominous Banner
    -   Dragon Egg
    -   Lectern
    -   Lightning Rod
    -   Note Block
-   Added to Crafting tab
    -   Snowball
-   Added to Spawn Eggs tab
    -   Spawner
-   Added to Combat tab
    -   TNT
    -   End Crystal
-   Added to Tools & Utilities tab
    -   Bone Meal

### Added Draft Player Reports

Player Reports can now be kept temporarily as a draft while connected to a server.

-   When exiting the Player Reporting screen, the report can be either discarded or kept as a draft
    -   The draft will always be kept if the screen was forcefully closed (e.g. player dying)
-   Draft reports are kept until the player leaves the current server or world
    -   When leaving, the player will be prompted to either discard or finish and send the report

## Technical Changes in 22w43a

-   Migrated linear algebra types to Java OpenGL Math Library (JOML)

### Network Protocol

-   Servers can now lazily distribute players' profile public keys along with their first chat packet
-   Profile public keys will now be refreshed without reconnecting
-   Clients now reset their chat session on receiving a login packet

## Fixed Bugs in 22w43a

-   [MC-84873](https://bugs.mojang.com/browse/MC-84873) DeathTime values 20+ cause corrupted mobs
-   [MC-92017](https://bugs.mojang.com/browse/MC-92017) Shield damage direction is incorrect
-   [MC-128003](https://bugs.mojang.com/browse/MC-128003) When destroying one block of tall seagrass, the other block becomes air when destroyed, rather than water
-   [MC-188247](https://bugs.mojang.com/browse/MC-188247) Explosions from end crystals can't be blocked by shields
-   [MC-188506](https://bugs.mojang.com/browse/MC-188506) AngryAt cannot be manually applied to endermen
-   [MC-189911](https://bugs.mojang.com/browse/MC-189911) Splash water bottles don't extinguish mobs and player
-   [MC-191948](https://bugs.mojang.com/browse/MC-191948) Ghast fireballs explosions still inflict damage when blocked by a shield
-   [MC-198493](https://bugs.mojang.com/browse/MC-198493) Villagers lose their discounts when relogging while it is a zombie villager
-   [MC-200006](https://bugs.mojang.com/browse/MC-200006) Explosions from beds and respawn anchors can't be blocked by shields
-   [MC-202513](https://bugs.mojang.com/browse/MC-202513) Weeping vines and twisting vines are not grouped with regular vines in creative inventory
-   [MC-222407](https://bugs.mojang.com/browse/MC-222407) Endermen holding big dripleaf stems don't drop big dripleaves upon being killed
-   [MC-244694](https://bugs.mojang.com/browse/MC-244694) The sounds of goats stomping and ramming aren't controlled by the "Friendly Creatures" sound slider
-   [MC-249691](https://bugs.mojang.com/browse/MC-249691) Nylium is not grouped with netherrack in the Creative inventory
-   [MC-252214](https://bugs.mojang.com/browse/MC-252214) Going into water does not extinguish the fire on you if you're in a boat
-   [MC-253542](https://bugs.mojang.com/browse/MC-253542) Spawner blocks with SpawnPotential and no SpawnData will crash during worldgen
-   [MC-254597](https://bugs.mojang.com/browse/MC-254597) Mobs hurt by water don't take water damage when they are on a boat
-   [MC-254634](https://bugs.mojang.com/browse/MC-254634) POIs are not created properly when upgrading worlds
-   [MC-256462](https://bugs.mojang.com/browse/MC-256462) If camel is sitting while exiting and reloading the world, it will play the sitting animation again
-   [MC-256476](https://bugs.mojang.com/browse/MC-256476) Panorama Scroll Speed isn't saved
-   [MC-256483](https://bugs.mojang.com/browse/MC-256483) Acacia hanging signs cannot be crafted
-   [MC-256494](https://bugs.mojang.com/browse/MC-256494) Birch hanging signs cannot be crafted
-   [MC-256495](https://bugs.mojang.com/browse/MC-256495) Z-fighting occurs when the legs of camels intersect one another
-   [MC-256502](https://bugs.mojang.com/browse/MC-256502) Crash when pressing certain buttons while on spectator mode
-   [MC-256515](https://bugs.mojang.com/browse/MC-256515) Hanging signs connect weirdly on the bottom of a fence gate.
-   [MC-256522](https://bugs.mojang.com/browse/MC-256522) Coral Blocks are sorted different than Corals and Coral Fans
-   [MC-256534](https://bugs.mojang.com/browse/MC-256534) Saved hotbars can import disabled items
-   [MC-256573](https://bugs.mojang.com/browse/MC-256573) Water bottles, awkward/mundane/thick potions and tipped arrows don't appear in the Creative Inventory
-   [MC-256575](https://bugs.mojang.com/browse/MC-256575) Some of the translation keys were merged, resulting in some language translation errors
-   [MC-256581](https://bugs.mojang.com/browse/MC-256581) Lightning Rod isn't in Functional Blocks tab in creative inventory
-   [MC-256582](https://bugs.mojang.com/browse/MC-256582) Lectern isn't in Functional Blocks tab in creative inventory
-   [MC-256612](https://bugs.mojang.com/browse/MC-256612) Waxed Exposed Copper blocks are out of order in Building Blocks creative tab
-   [MC-256639](https://bugs.mojang.com/browse/MC-256639) Allays, Piglins, and Villagers lose inventory if unloaded and reloaded
-   [MC-256661](https://bugs.mojang.com/browse/MC-256661) Line spacing on Hanging Signs is too small, causing certain characters to overlap
-   [MC-256705](https://bugs.mojang.com/browse/MC-256705) Discrepancy exists between identifier-allowed characters and path segment-allowed characters
-   [MC-256734](https://bugs.mojang.com/browse/MC-256734) Entities will often spin while pathfinding on top of wall hanging signs
-   [MC-256843](https://bugs.mojang.com/browse/MC-256843) Milk Bucket isn't in the Consumable Tab in the creative inventory
-   [MC-256845](https://bugs.mojang.com/browse/MC-256845) Nether Wart isn't in the Nature Blocks tab in the creative inventory
-   [MC-256846](https://bugs.mojang.com/browse/MC-256846) Chiseled Bookshelf isn't in the Redstone Blocks Tab in the creative inventory
-   [MC-256847](https://bugs.mojang.com/browse/MC-256847) Bone Meal isn't in the Tools & Utilities Tab in the creative inventory
-   [MC-256848](https://bugs.mojang.com/browse/MC-256848) String isn't in the Redstone Blocks Tab in the creative inventory

---

Hello there! We are now releasing the first snapshot for 1.19.3! You might have been thinking that this snapshot would be for 1.20, but times are changing. Going forward, we are taking a bit of a different approach to how we release minor and major versions for Minecraft: Java Edition. Essentially, we will be releasing minor versions more often. You can find out more details about this in a post over [here](https://help.minecraft.net/hc/articles/9971900758413).

In this snapshot we’re introducing feature toggle, which you might have seen in [a post we released yesterday](https://www.minecraft.net/en-us/article/testing-new-minecraft-features/feature-toggles-java-edition). This means we can add a toggle for Update 1.20 with features such as the Camel, without committing to releasing them in version 1.19.3. This lets us have experimental features available for testing, while still being able to release updates with new functionality, changes, and improvements, without having to remove those features from the game first.

In this snapshot you’ll be seeing [the features that we talked about during Minecraft Live](https://www.minecraft.net/article/minecraft-live-2022-the-recap) as experimental features, a few changes to chat, some technical changes and many bug fixes.

## New Features in 22w42a

-   Some experimental features are now available through built-in experimental datapacks
-   Bundles are now available as an experimental feature
-   Added a new "Panorama Scroll Speed" accessibility option

### Experimental Features

-   Some experimental features now need to be enabled to appear in worlds
-   Such features are enabled by adding a built-in datapack when creating a world
-   Feature toggles are meant to hide unfinished or experimental features, to make sure your existing worlds remain unaffected
-   Worlds that are using experimental features will be marked as "Experimental" in world selection list
-   Experimental features cannot be toggled for existing worlds

#### Added Camel

Camels are now available when Update 1.20 experimental features are enabled.

-   Camels can be equipped with a saddle and ridden by two players
-   Camels spawn naturally in Desert Villages
-   Camels are tall
    -   Most hostile mobs will not be able to reach you when you are on a Camel
    -   They can walk over fences without a sweat
-   Camels are very graceful, but grumpy mobs
    -   They randomly sit down
    -   While sitting, it is difficult to convince them to move
-   Camels can either walk slowly or sprint quickly
-   They can also dash forward but will lose stamina for a while when doing so

#### Bamboo Wood Set

A new set of Bamboo wood blocks are now available when Update 1.20 experimental features are enabled.

-   New wood blocks
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
-   Bamboo Planks can be crafted with 2x2 Bamboo items
-   Added a new "Mosaic" plank variant that is unique to Bamboo called Bamboo Mosaic
    -   It can be crafted with 1x2 Bamboo Slabs in a vertical strip
    -   You can craft Stair and Slab variants of Bamboo Mosaic
-   Added a unique Bamboo Raft and Bamboo Chest Raft which can be crafted like normal boats, but with Bamboo Planks
    -   They function the same as ordinary boats, but have a unique look to them

#### Chiseled Bookshelf

A new, chiseled variation of the Bookshelf is now available when Update 1.20 experimental features are enabled.

-   Crafted with 6 planks and 3 wooden slabs
-   Can store Books, Book and Quills, Written Books, and Enchanted Books
    -   Holds up to 6 books
    -   Keeps the stories and lore of your world safe
-   Comparators can detect the last book placed/removed
    -   Perfect for hiding secrets in your spooky library

#### Hanging Signs

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

### Sounds

-   Various wood types now have unique sounds when placed, broken, or walked on
    -   There are three sets of unique sounds: Overworld wood types, Nether wood types, and Bamboo

## Changes in 22w42a

-   Reworked the Creative Inventory tabs
-   Changes to chat
-   The Realms News button will now show a confirmation screen before opening the link
-   Stronghold placement code has been changed to be more efficient, causing stronghold positions to shift
    -   They are still placed in concentric rings, but their positions in the rings may change by a few degrees

### Creative Inventory

The ordering of tabs and the contents in the Creative Inventory have been tweaked to make the experience of finding relevant blocks and items easier.

-   Blocks and items have been moved into categories that fit them better
-   Blocks are now ordered by their material as much as possible
    -   For example, all Oak blocks and variants are now next to each other
-   Some items can now be found in more than one tab
-   Various tabs have been renamed or collapsed into others
-   The search tab now lists items sequentially grouped by the other tabs
    -   For example, items found in Building Blocks will always appear before items in Redstone Blocks
-   Petrified Oak Slab has been removed from the Creative Inventory
    -   It can still be accessed through commands
-   This is a first iteration to bring a better experience to the Creative Inventory, and we will look closely at the feedback for these changes to iterate as needed

### Chat

-   Removed Chat Preview
-   Chat messages deleted by server moderators will no longer be completely hidden, but rather replaced with text stating "This chat message has been deleted by the server."
-   Deleted chat messages will now be displayed in the chat window for at least 3 total seconds before being hidden
-   The Chat Trust Status indicators have been tweaked:
    -   The 'Modified' tag will no longer display for server-modified messages where only style has been changed
    -   The 'Modified' tag icon and indicator is now dark gray
    -   The 'Not Secure' tag is now light gray and does not have an icon
-   Partially filtered chat messages now show the filtered text as gray hashes with a hover text saying that it was filtered

## Technical Changes in 22w42a

-   Added Feature Flags - world options to enable or disable some experimental or unfinished features (like blocks, entities and items)
-   Network protocol changes
-   Instances of recipe types that have recipe books now have field `category` to determine placement

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

### Network Protocol

-   The network protocol now supports adding player entities to the world without being added to the 'tab' player list
-   Servers can now lazily distribute players' profile public keys along with their first chat packet
-   Message 'headers' within the Secure Chat protocol no longer need to be distributed when private messages are sent
-   Contextual message references are now deduplicated for efficiency within the Secure Chat network protocol

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

-   The Resource Pack version is now 11
-   Removed "fixers" for resource packs with versions 3 and 4 (pre-flattening)
    -   The game will no longer try to adapt packs with those versions to the current version

## Fixed bugs in 22w42a

-   [MC-14167](https://bugs.mojang.com/browse/MC-14167) Mobs build up fall damage when dangling on a lead
-   [MC-96449](https://bugs.mojang.com/browse/MC-96449) Rabbits sometimes don't drop any raw rabbit upon being killed
-   [MC-130754](https://bugs.mojang.com/browse/MC-130754) Jumping on farmland pushes the player a bit
-   [MC-135973](https://bugs.mojang.com/browse/MC-135973) Can't hold Q to drop items rapidly from container inventories
-   [MC-145748](https://bugs.mojang.com/browse/MC-145748) Clicking a settings button when there's a slider under the mouse in the next screen plays the click sound twice
-   [MC-146930](https://bugs.mojang.com/browse/MC-146930) The "Programmer Art" resource pack is internally called "programer\_art"
-   [MC-150488](https://bugs.mojang.com/browse/MC-150488) Mobs can spawn on scaffolding
-   [MC-152752](https://bugs.mojang.com/browse/MC-152752) Jukebox music sound originates from north-west edge of the block
-   [MC-160610](https://bugs.mojang.com/browse/MC-160610) Mobs are able to spawn on Chorus Flowers
-   [MC-170457](https://bugs.mojang.com/browse/MC-170457) Chest latch doesn't rotate properly
-   [MC-170817](https://bugs.mojang.com/browse/MC-170817) Click sound of sliders in the video settings noticeably louder than anywhere else
-   [MC-175313](https://bugs.mojang.com/browse/MC-175313) Composter filling sounds originate from the bottom northwest corner of the block
-   [MC-177738](https://bugs.mojang.com/browse/MC-177738) Spawnpoint set on respawn anchor using /spawnpoint depletes glowstone charge, and doesn't stay on respawn anchor if its charge is depleted
-   [MC-182708](https://bugs.mojang.com/browse/MC-182708) Nether and warped wart blocks do not come after leaves in the Creative inventory
-   [MC-183069](https://bugs.mojang.com/browse/MC-183069) Donkeys, mules and undead horses cannot be saddled by right-clicking
-   [MC-183502](https://bugs.mojang.com/browse/MC-183502) The sounds for collecting honey in a bottle and collecting honeycomb with shears is categorised under friendly creatures
-   [MC-183831](https://bugs.mojang.com/browse/MC-183831) Villagers breed when not standing up
-   [MC-183899](https://bugs.mojang.com/browse/MC-183899) You can set your spawn point inside an end portal, causing the player to become stuck in the End
-   [MC-197150](https://bugs.mojang.com/browse/MC-197150) Horse armor and carpets cannot be equipped onto horses or llamas by right-clicking them whilst having these items held in your hand
-   [MC-199162](https://bugs.mojang.com/browse/MC-199162) One farmland block in plains\_large\_farm\_1 has moisture level 0
-   [MC-201684](https://bugs.mojang.com/browse/MC-201684) Torches and soul torches aren't grouped together in the creative inventory
-   [MC-201759](https://bugs.mojang.com/browse/MC-201759) Obsidians aren't grouped together in Creative
-   [MC-202607](https://bugs.mojang.com/browse/MC-202607) Cat can get off lead by teleporting when it gives a gift after sleeping
-   [MC-206854](https://bugs.mojang.com/browse/MC-206854) Multiplayer warning and Chat Preview warning are off center
-   [MC-216733](https://bugs.mojang.com/browse/MC-216733) Basalt and blackstone are not grouped together with other "polishable" stone types in the Creative inventory
-   [MC-217644](https://bugs.mojang.com/browse/MC-217644) Wart blocks and shroomlights are in different Creative tabs
-   [MC-218534](https://bugs.mojang.com/browse/MC-218534) Blackstone stairs & slabs are not grouped with the other stone type stairs & slabs
-   [MC-220489](https://bugs.mojang.com/browse/MC-220489) Beds and respawn anchors are not grouped in the Creative inventory
-   [MC-221568](https://bugs.mojang.com/browse/MC-221568) Inconsistency: Barriers and structure voids produce particles when broken, but light blocks do not
-   [MC-222879](https://bugs.mojang.com/browse/MC-222879) Netherite scrap comes after netherite ingot in the creative inventory
-   [MC-224921](https://bugs.mojang.com/browse/MC-224921) Mob pathfinding fails under certain circumstances / mobs fall on closed turns
-   [MC-226184](https://bugs.mojang.com/browse/MC-226184) Axolotls pathfinding to water can sometimes fall in wide holes
-   [MC-226566](https://bugs.mojang.com/browse/MC-226566) Inconsistency: Blocks are not placed correctly in Creative inventory
-   [MC-228475](https://bugs.mojang.com/browse/MC-228475) Pointed dripstone is not grouped with dripstone blocks in the creative inventory
-   [MC-234446](https://bugs.mojang.com/browse/MC-234446) Moss Block appears in the wrong creative inventory tab
-   [MC-239465](https://bugs.mojang.com/browse/MC-239465) Emerald block in creative inventory looks out of place
-   [MC-242663](https://bugs.mojang.com/browse/MC-242663) Melons can generate underwater
-   [MC-243458](https://bugs.mojang.com/browse/MC-243458) Worldgen data packs don't work on servers at first launch
-   [MC-248753](https://bugs.mojang.com/browse/MC-248753) Pressure plates don't activate even though visually they should
-   [MC-249106](https://bugs.mojang.com/browse/MC-249106) Water rendering incorrectly through frogspawn hitbox/model
-   [MC-249232](https://bugs.mojang.com/browse/MC-249232) Frogs can sometimes fall into deep holes when pathfinding to entities
-   [MC-249257](https://bugs.mojang.com/browse/MC-249257) The sounds of splashing when creating mud aren't controlled by the "Blocks" sound slider
-   [MC-249294](https://bugs.mojang.com/browse/MC-249294) Rabbits ignore the "MoreCarrotTicks" value, causing them to always try to eat carrots
-   [MC-249419](https://bugs.mojang.com/browse/MC-249419) Map color for mud brick slab is no longer consistent with map color for other mud brick blocks
-   [MC-249463](https://bugs.mojang.com/browse/MC-249463) Shulkers in boats with chests are lowered
-   [MC-249513](https://bugs.mojang.com/browse/MC-249513) Frogspawn is not grouped with turtle eggs in the Creative inventory
-   [MC-249720](https://bugs.mojang.com/browse/MC-249720) Allay's wings are not attached to its body
-   [MC-249765](https://bugs.mojang.com/browse/MC-249765) Allays don't render semi-transparent when invisible where appropriate
-   [MC-249806](https://bugs.mojang.com/browse/MC-249806) Allay renders too low in boat, boat with chest, minecart and entities
-   [MC-249842](https://bugs.mojang.com/browse/MC-249842) Allays attempt to pathfind to items that are outside of the world border
-   [MC-249875](https://bugs.mojang.com/browse/MC-249875) Parity Issue: Allays hesitate for a few seconds before following, throwing items, or doing other actions in Java
-   [MC-249935](https://bugs.mojang.com/browse/MC-249935) New advancement "Birthday Song" grants no experience
-   [MC-250249](https://bugs.mojang.com/browse/MC-250249) Parity Issue: Allays pick up arrow/potion items with other effects than the ones they're holding
-   [MC-250311](https://bugs.mojang.com/browse/MC-250311) The minecraft:entity.tadpole.grow\_up sound event doesn't have a translation key
-   [MC-250423](https://bugs.mojang.com/browse/MC-250423) Frog frequently fails to long jump to small blocks
-   [MC-250943](https://bugs.mojang.com/browse/MC-250943) minecraft.used:minecraft.goat\_horn doesn't increase when using goat horns
-   [MC-251296](https://bugs.mojang.com/browse/MC-251296) Allay has a transparent texture but it is not transparent in game
-   [MC-251518](https://bugs.mojang.com/browse/MC-251518) Allay's poses, flying animations, and dancing animations for duping differ from Bedrock's, causing intense clipping, inconsistencies, choppy movements, and strange item positioning
-   [MC-251688](https://bugs.mojang.com/browse/MC-251688) Chat preview can overlap chat contents if the message is long enough
-   [MC-252089](https://bugs.mojang.com/browse/MC-252089) The chat preview warning menu is forcibly closed when the player dies or changes dimensions
-   [MC-252415](https://bugs.mojang.com/browse/MC-252415) Bedrock Edition's new 1.19.10 splash text is not available on Java 1.19
-   [MC-253076](https://bugs.mojang.com/browse/MC-253076) Allay duplicates Items when its NBT data is updated every tick
-   [MC-253125](https://bugs.mojang.com/browse/MC-253125) Allays can dance while panicking
-   [MC-253189](https://bugs.mojang.com/browse/MC-253189) Allays with NoAI can dance
-   [MC-253367](https://bugs.mojang.com/browse/MC-253367) The screen is sometimes flashed with the "Loading terrain..." screen after proceeding with the chat preview warning when all nearby chunks are loaded
-   [MC-253738](https://bugs.mojang.com/browse/MC-253738) Vibration particle faces at a constant pitch of about 60 degrees, not pointing towards the target
-   [MC-254119](https://bugs.mojang.com/browse/MC-254119) Breeding a Screaming Goat and a Regular Goat never results in a screaming goat
-   [MC-254395](https://bugs.mojang.com/browse/MC-254395) Command suggestions can overlap the chat preview field when the chat preview option is set to "When Sending"
-   [MC-254427](https://bugs.mojang.com/browse/MC-254427) Secure chat warning toast can appear on singleplayer worlds
-   [MC-254535](https://bugs.mojang.com/browse/MC-254535) Nether portals cannot replace snow layers
-   [MC-254695](https://bugs.mojang.com/browse/MC-254695) "Narrator Disabled" pop-up doesn't render fully
-   [MC-254774](https://bugs.mojang.com/browse/MC-254774) Crash when a villager with a gossip of value 0 shares gossips
-   [MC-255151](https://bugs.mojang.com/browse/MC-255151) net.minecraft.client.Camera#getMaxZoom(double) issue
-   [MC-255164](https://bugs.mojang.com/browse/MC-255164) Sculk Shrieker warning level resets to 0 after player's death
-   [MC-255715](https://bugs.mojang.com/browse/MC-255715) Menu panorama stops spinning after several days
-   [MC-256217](https://bugs.mojang.com/browse/MC-256217) Explosions create ghost blocks on servers at high coordinates

---

New snapshot! We're now heading towards 1.19.1, which will add Allay duplication, the ability to report chat, and, of course, fix a few bugs.

On the topic of chat reporting, we want everyone to feel safe and welcome in Minecraft, which is why we have community guidelines in place. If you feel unsafe, uncomfortable, or concerned that someone is breaking our [Community Guidelines](https://www.minecraft.net/community-standards) or the [Xbox Community Standards](https://www.xbox.com/legal/community-standards), you can soon report this in-game. Of course, it will also be possible to report incidents over at the [Report a Concern](https://help.minecraft.net/hc/requests/new?ticket_form_id=4416074743565) page.

We are looking for feedback regarding the Chat Reporting feature. For now, any reports made during the testing period may not be actioned on.

Enjoy!

## New Features in 22w24a

-   Added Allay duplication
-   Added Player Chat Reporting

### Allay

-   Allays will dance to a Record playing in a Jukebox
-   If the Allay is handed an Amethyst Shard while dancing it will duplicate
    -   Duplication has a 2.5 minute cooldown

### Player Chat Reporting

It is now possible to report a player for sending abusive messages in the game chat.

A reporter is required to select the individual chat messages that contain the objectionable content, as well as the category of the report, this is to provide the best context for our moderation team to take action.

Accessed via the social interactions screen (default keybind is P).

-   The social interactions screen is now available via the Pause screen when in a multiplayer game
-   Multiple chat messages can be selected for reporting
-   The category of the chat report can be selected from a list of Chat Report Categories
-   Additional comments can be entered to provide more details and information regarding the report

## Fixed bugs in 22w24a

-   [MC-144043](https://bugs.mojang.com/browse/MC-144043) Trader llamas continue to spit after their target died
-   [MC-146891](https://bugs.mojang.com/browse/MC-146891) Nitwit villager can have a profession
-   [MC-177505](https://bugs.mojang.com/browse/MC-177505) Cured Villager can work at wrong workstation
-   [MC-249523](https://bugs.mojang.com/browse/MC-249523) Sky color is visible for a brief moment after applying Night Vision under Darkness effect
-   [MC-250261](https://bugs.mojang.com/browse/MC-250261) Frogs can lay spawn on flowing water
-   [MC-250267](https://bugs.mojang.com/browse/MC-250267) Frogs don't lay their spawn on waterlogged blocks
-   [MC-252082](https://bugs.mojang.com/browse/MC-252082) Loading server resource packs reloads twice when one is already loaded
-   [MC-252363](https://bugs.mojang.com/browse/MC-252363) Mobs that naturally spawn in with equipment will play the respective equipping noise
-   [MC-252439](https://bugs.mojang.com/browse/MC-252439) Cured Villager trades are not refreshing
-   [MC-252539](https://bugs.mojang.com/browse/MC-252539) Commands sending messages use formatting of regular chat in server logs
-   [MC-252683](https://bugs.mojang.com/browse/MC-252683) Unexpected exception in the selector loop causing server lag

---

Thursday snapshot! Apart from some bugfixes and some changes to fancy tags and commands, we're introducing "chat preview" as a way to cryptographically sign chat messages that have been dynamically styled by servers. And for this snapshot only, we've left in our testing option `test-rainbow-chat` in `server.properties`, which can be set to true together with the new `previews-chat` option for testing. If this is something that interests you, and especially if you run a server, we would love your feedback on it.

Enjoy!

## Changes in 22w19a

-   Warden and Iron Golems now make sure to spawn above something solid

## Technical Changes in 22w19a

-   Servers can now enable Chat Preview, which displays a server-controlled preview above the chat edit box
-   Changes to the locate and place commands
-   Point of Interest tags

### Chat Preview

-   Servers can enable Chat Preview by setting `previews-chat=true` in `server.properties`
-   When enabled, a server-controlled preview appears above the chat edit box, showing how the message will look when sent
-   This can be used by servers to preview messages with styling applied, such as emojis or chat coloring
-   Chat Preview sends chat messages to the server as they are typed, even before they're sent
    -   The server then sends back the styled preview in real time
    -   This allows servers to apply dynamic message stylings while still allowing chat to be securely signed
-   A warning screen is shown on the client when joining a server with Chat Preview, and it can be globally disabled in Chat Settings
-   Dynamic chat styling can also be controlled by the server, although this is only signed when Chat Preview is enabled
    -   Clients can prefer to always show the original, signed message by enabling "Only Show Signed Chat" in Chat Settings

### Commands

-   Added template sub-command to `place`\-command
-   `locate` command moved to `locate structure`, `locatebiome` moved to `locate biome`
-   Added `locate poi <type: point_of_interest_type>`
-   Servers will now also send an additional icon and MOTD packet after a player has connected
    -   This allows servers with `enable-status=false` to set an icon and MOTD for players that successfully connect

#### Place template

The `place`\-command can now also place templates at a given location. Syntax: `place template <template> [pos] [rotation] [mirror] [integrity] [seed]`

-   `place template` works like using the load button in the UI for a structure block

Parameters:

-   `template`: The namespaced id of a template ("structure block file") to load and place
-   `rotation`: The rotation to apply (if omitted, `none` is used)
-   `mirror`: The mirroring to apply (if omitted, `none` is used)
-   `integrity`: The structure integrity value between 0 and 1
-   `seed`: The seed to use for the randomized degradation when integrity is less than 1

### Point of Interest types

-   Removed `unemployed` and `nitwit` `point_of_interest_type`s
-   Added tag `point_of_interest_type/acquirable_job_site` for all job sites seeked by Villagers with `none` profession
-   Added tag `point_of_interest_type/village` for PoI that are part of Village
-   Added tag `point_of_interest_type/bee_home` for all PoI targeted by Bees

## Fixed bugs in 22w19a

-   [MC-197647](https://bugs.mojang.com/browse/MC-197647) Players cannot jump off the edge of blocks when sneaking if they have a block above
-   [MC-231600](https://bugs.mojang.com/browse/MC-231600) Sculk sensor continuously receives vibrations when next to a powered big dripleaf
-   [MC-249130](https://bugs.mojang.com/browse/MC-249130) Tadpoles hatch inside of adjacent blocks, causing them to suffocate and die
-   [MC-249161](https://bugs.mojang.com/browse/MC-249161) Frogs frequently get stuck below lily pads
-   [MC-249634](https://bugs.mojang.com/browse/MC-249634) Warden's sniffing behavior continues after being distracted
-   [MC-249664](https://bugs.mojang.com/browse/MC-249664) Warden despawns when far away
-   [MC-249801](https://bugs.mojang.com/browse/MC-249801) Mineshafts can intersect ancient cities
-   [MC-249888](https://bugs.mojang.com/browse/MC-249888) Warden is not angered when hit by a blaze fireball
-   [MC-249910](https://bugs.mojang.com/browse/MC-249910) Warden "Nearby Closest" sound is unused
-   [MC-249966](https://bugs.mojang.com/browse/MC-249966) Warden can stop chasing a target it just roared at
-   [MC-250172](https://bugs.mojang.com/browse/MC-250172) Warden doesn't turn towards the direction it is firing the Sonic Boom attack
-   [MC-250233](https://bugs.mojang.com/browse/MC-250233) A warden summoned from a spawn egg suddenly losing its AI
-   [MC-250255](https://bugs.mojang.com/browse/MC-250255) Warden's Sonic Boom cannot hurt Ender Dragon, it only pushes it back
-   [MC-250272](https://bugs.mojang.com/browse/MC-250272) Warden spawns in blocks that have no collision
-   [MC-250353](https://bugs.mojang.com/browse/MC-250353) Warden cannot spawn on a single snow layer like other mobs
-   [MC-250357](https://bugs.mojang.com/browse/MC-250357) Sculk sensors and Wardens detect when a player holds up a shield
-   [MC-250948](https://bugs.mojang.com/browse/MC-250948) Warden's ranged attack is no longer affected by the game's difficulty
-   [MC-250966](https://bugs.mojang.com/browse/MC-250966) Dying to the warden's sonic boom doesn't count as the warden's kill
-   [MC-251029](https://bugs.mojang.com/browse/MC-251029) Warden froze and stopped being hostile towards the player
-   [MC-251263](https://bugs.mojang.com/browse/MC-251263) "Invalid signature for profile public key" when trying to open a singleplayer world
-   [MC-251316](https://bugs.mojang.com/browse/MC-251316) The game crashes when loading chunks that consist of jigsaw blocks
-   [MC-251321](https://bugs.mojang.com/browse/MC-251321) Warden can be pushed by explosions while emerging
-   [MC-251350](https://bugs.mojang.com/browse/MC-251350) /give @s goat\_horn gives an unregistered goat horn
-   [MC-251396](https://bugs.mojang.com/browse/MC-251396) java.lang.IllegalArgumentException: Name and ID cannot both be blank
-   [MC-251464](https://bugs.mojang.com/browse/MC-251464) When passive mobs take damage from warden's sonic boom, they won't flee in panic

---

Another snapshot is now available for Minecraft: Java Edition. This snapshot brings a few gameplay changes and some technical tidbits, such as the place command and cryptographically signed chat commands.

Enjoy!

## Changes in 22w18a

-   Allays now follow their liked player even if they can't see them
-   Allays will only lose track of a player if they are more than 64 blocks away
-   The texture of the sonic boom particle has been updated
-   Vibration listeners such as Sculk Sensors, Sculk Shriekers and Wardens now listen to the closest vibration instead of the first vibration in the tick

## Technical Changes in 22w18a

-   Banner patterns available in the Loom can now be controlled with tags (`banner_pattern/no_item_required` for no pattern item and `banner_pattern/pattern_item/*` for specific banner pattern items)
-   Servers can now define different chat style formats for clients
-   Removed the `placefeature` command
-   Added the `place` command
-   The bundled Java runtime has been upgraded to 17.0.3
-   Removed loot table function `set_goat_horn_sound`
-   Added loot table function `set_instrument`
-   Chat from the `/say`, `/msg`, `/teammsg`, and `/me` commands are now all also cryptographically signed

### Chat Types

-   Different chat style formats can now be controlled by the server through the `chat_type` registry
    -   These are synchronized to clients when they join the server
    -   The translation key or translation format can be defined, like `chat.type.text` or `%s says: "%s"`
        -   Chat can be similarly optionally narrated with a custom translation key or format
    -   The entire message can have formatting applied, such as italics or a specific color (but currently not click or hover events)

### Place Command

New command that replaces `placefeature` and can place features, jigsaws and structures at a given location. Syntax:

    place feature <feature> [pos]
    place jigsaw <pool> <start> <depth> [pos]
    place structure <structure> [pos]
    

Parameters:

-   `feature`: The namespaced id of a feature to try to place
-   `structure`: The namespaced id of a structure to try to generate
-   `pool`: The namespaced id of a template pool to start generating
-   `start`: The namespaced id name of a jigsaw to use as the starting anchor
-   `depth`: The maximum number of jigsaw connections to traverse during placement
-   `pos`: The position to use as the origin for the generation (if omitted, `~ ~ ~` is used)

### Loot Tables

#### New functions

##### `set_instrument`

Sets item tags needed for instrument items to a random value selected from a tag.

Parameters:

-   `options` - a tag reference specifying the instrument options to randomly pick from

## Fixed bugs in 22w18a

-   [MC-207935](https://bugs.mojang.com/browse/MC-207935) - Simultaneous vibrations don't trigger as expected
-   [MC-232009](https://bugs.mojang.com/browse/MC-232009) - Minecraft does not resolve SRV records correctly
-   [MC-249021](https://bugs.mojang.com/browse/MC-249021) - The invitation and news buttons aren't consistently displayed within the realms menu
-   [MC-249129](https://bugs.mojang.com/browse/MC-249129) - The walking animation of frogs doesn't change in relation to their movement speed
-   [MC-249175](https://bugs.mojang.com/browse/MC-249175) - Only one sculk vein drops when using a Silk Touch hoe on multiple in a single block space
-   [MC-249454](https://bugs.mojang.com/browse/MC-249454) - Sculk Catalysts will spread sculk if a baby mob that does not drop experience dies around it
-   [MC-249732](https://bugs.mojang.com/browse/MC-249732) - Allays lose picked up items on world restart
-   [MC-249740](https://bugs.mojang.com/browse/MC-249740) - Allays leashed to a fence do not move and refuse to pick up items
-   [MC-249784](https://bugs.mojang.com/browse/MC-249784) - Ancient Cities can be submerged in aquifers
-   [MC-249857](https://bugs.mojang.com/browse/MC-249857) - Parity Issue: Allays don't follow the player / note blocks as closely on Java
-   [MC-250139](https://bugs.mojang.com/browse/MC-250139) - Snow layers cannot be placed on top of mud
-   [MC-250143](https://bugs.mojang.com/browse/MC-250143) - Improper advancement description for "Sneak 100"
-   [MC-250144](https://bugs.mojang.com/browse/MC-250144) - "Sneak 100" advancement includes sculk shriekers as a block that can "hear" the player
-   [MC-250145](https://bugs.mojang.com/browse/MC-250145) - Warden/frogs continue animations when the game is paused
-   [MC-250163](https://bugs.mojang.com/browse/MC-250163) - Warden can still detect things after it dies
-   [MC-250183](https://bugs.mojang.com/browse/MC-250183) - Warden continues to roar when angered by an ignited creeper
-   [MC-250198](https://bugs.mojang.com/browse/MC-250198) - Warden continues to roar when the target of the enraged warden suffers an unnatural death
-   [MC-250207](https://bugs.mojang.com/browse/MC-250207) - Warden continues to roar at disconnected players
-   [MC-250216](https://bugs.mojang.com/browse/MC-250216) - Warden continues to roar at targets in unloaded chunks
-   [MC-250218](https://bugs.mojang.com/browse/MC-250218) - Warden continues to roar at despawned target
-   [MC-250244](https://bugs.mojang.com/browse/MC-250244) - Warden continues to roar when the target enters the nether portal, end portal or end gateway
-   [MC-250245](https://bugs.mojang.com/browse/MC-250245) - Warden sonic boom attacks can hit player even if the player has entered another dimension
-   [MC-250292](https://bugs.mojang.com/browse/MC-250292) - Wardens can sometimes freeze when overwhelmed with enemies/attacks/sounds
-   [MC-250506](https://bugs.mojang.com/browse/MC-250506) - Mangrove leaves can appear at a higher altitude when grown below y = 0
-   [MC-250557](https://bugs.mojang.com/browse/MC-250557) - Allay permanently stuck trying to pick up item stack if its slots contain stack of the same type with differing NBT (and vice versa)
-   [MC-250864](https://bugs.mojang.com/browse/MC-250864) - Game fails to load worldgen settings when .DS\_Store files are present in datapack
-   [MC-250926](https://bugs.mojang.com/browse/MC-250926) - There is a goat horn in the creative Destroy Item slot / all tabs within the creative inventory contain goat horns
-   [MC-250937](https://bugs.mojang.com/browse/MC-250937) - User skins don't load in singleplayer
-   [MC-250939](https://bugs.mojang.com/browse/MC-250939) - Game crashes when a goat horn with an invalid sound variant is used / java.lang.ArrayIndexOutOfBoundsException: Index out of bounds for length 8
    
    -   [MC-250954](https://bugs.mojang.com/browse/MC-250954) - Player is assigned a new UUID in singleplayer
    
-   [MC-250974](https://bugs.mojang.com/browse/MC-250974) - MinecraftClientHttpException when opening/creating a world

---

Prepare to drop some sick bleats in the latest Minecraft: Java Edition snapshot! We're bringing in the sweet sounds of the goat horn. There are also some changes to the warden and the allay.

If the technical aspects of chatting is where it's at for you, make sure to check out the changes to chat signing.

Enjoy!

## New Features in 22w17a

-   Added Goat Horn!

### Goat Horn

-   A Goat Horn drops when a Goat rams a tree or any other hard block that occurs naturally where Goats spawn (Logs, Stone, Packed Ice, Iron Ore, copper Ore, or Emerald Ore)
    -   Other solid blocks are unfamiliar to the Goat, so it won't ram them
-   Use the horn to play a loud sound that can be heard from afar
-   Each horn has its own sound based on the Goat it originated from
-   There are 8 Goat Horn variants, 4 of them exclusive to screaming Goats
-   Goat Horns can sometimes be found in Pillager Outposts

## Changes in 22w17a

-   The Allay connecting with Note Blocks is now better visualized by the vibration particle
-   The Allay connecting with Note Blocks can now be blocked by Wool Blocks again
-   Replaced realms subtle selected world highlight with a clear green checkmark
-   Updated the Brewing Stand's base UVs and texture to match a graphical fix in Bedrock Edition
-   Explosions caused by player-ignited TNT now cause experience to drop from broken blocks (such as ore blocks and sculk)
    -   We will be keeping an eye on feedback for this change, it might change in a future update
-   Sculk blocks now have very low blast resistance
-   Warden balancing

### Warden

-   Their ranged attack will now:
    -   Bypass shields and armor
    -   Deal 10 damage instead of 30 damage, and the cooldown has been reduced from 5 seconds to 2 seconds
    -   Display a custom death message
-   Wardens now drop a single Sculk Catalyst upon death

## Technical Changes in 22w17a

-   Signed Chat
-   Removed `dampenable_vibrations` game event tag

### Multiplayer Secure Chat Signing

This is the first step in a process to provide more security and player safety features for in-game chat. We'd love to hear your thoughts, but keep in mind that many features such as server-driven styling of chat messages are still missing.

-   Chat messages between players are now cryptographically signed
-   Players are given a Mojang provided key-pair on startup
-   Servers can require players to have a Mojang-signed public key by setting `enforce-secure-profile=true` in `server.properties`
    -   Enforcing secure profiles will prevent players without a Mojang-signed public key from connecting
    -   By default this is set to `false`, allowing players to connect without a Mojang-signed public key
-   Chat styling is now handled via server resource packs with the translation key `chat.type.text`

## Fixed bugs in 22w17a

-   [MC-13103](https://bugs.mojang.com/browse/MC-13103) Texture Z-Fighting at Wolf/Dog/Cat snout
-   [MC-53312](https://bugs.mojang.com/browse/MC-53312) Illager/(zombie) villager/witch robes don't render the last two rows of pixels
-   [MC-106627](https://bugs.mojang.com/browse/MC-106627) Leather cap texture overlay doesn't align correctly
-   [MC-141064](https://bugs.mojang.com/browse/MC-141064) Cleric collar z-fighting
-   [MC-176840](https://bugs.mojang.com/browse/MC-176840) Ores no longer drop experience when blown up
-   [MC-207309](https://bugs.mojang.com/browse/MC-207309) Landing entities such as minecarts and armor stands trigger sculk sensors but boats do not
-   [MC-208597](https://bugs.mojang.com/browse/MC-208597) Boats ridden over wool are detected by sculk sensor
-   [MC-208771](https://bugs.mojang.com/browse/MC-208771) Projectiles landing on wool trigger sculk sensors
-   [MC-210712](https://bugs.mojang.com/browse/MC-210712) Sculk sensors are not activated upon backwards movement in a boat
-   [MC-210901](https://bugs.mojang.com/browse/MC-210901) Sculk sensors are not activated upon entities sliding on ice
-   [MC-248161](https://bugs.mojang.com/browse/MC-248161) Weaponsmith zombie villager texture has leftover pixels from the regular weaponsmith texture
-   [MC-248292](https://bugs.mojang.com/browse/MC-248292) Llama uses pre-1.14 chest texture
-   [MC-248555](https://bugs.mojang.com/browse/MC-248555) Mismatches within (zombie) villager textures
-   [MC-248556](https://bugs.mojang.com/browse/MC-248556) Savanna Zombie Villager missing a body texture
-   [MC-248557](https://bugs.mojang.com/browse/MC-248557) Savanna villager body defines pixels identical to base villager texture
-   [MC-248561](https://bugs.mojang.com/browse/MC-248561) Vindicator's crossed arms element has miscolored pixels on the faces touching the other arm elements
-   [MC-248562](https://bugs.mojang.com/browse/MC-248562) Iron golem has unused pixels in the texture
-   [MC-249032](https://bugs.mojang.com/browse/MC-249032) Fence item model's bars inconsistent with placed block
-   [MC-249039](https://bugs.mojang.com/browse/MC-249039) "Half" armor bar icon texture is incorrect
-   [MC-249190](https://bugs.mojang.com/browse/MC-249190) Sculk blocks don't drop experience orbs when blown up
-   [MC-249262](https://bugs.mojang.com/browse/MC-249262) Sculk cannot replace soul sand or mud when mobs die on top of them
-   [MC-249669](https://bugs.mojang.com/browse/MC-249669) tadpole.png has unused frog egg texture
-   [MC-249745](https://bugs.mojang.com/browse/MC-249745) If allay is holding an item, it can be equipped with armor using a dispenser
-   [MC-249780](https://bugs.mojang.com/browse/MC-249780) Blocks that require support can generate floating in ancient cities
-   [MC-249919](https://bugs.mojang.com/browse/MC-249919) Pillar in Ancient City can generate with waterlogged stairs
-   [MC-250000](https://bugs.mojang.com/browse/MC-250000) Allays and villagers create ghost items when they take items from a stack and cannot fit the whole stack in their inventory
-   [MC-250027](https://bugs.mojang.com/browse/MC-250027) Allays ignore the dimension when checking for liked note blocks
-   [MC-250075](https://bugs.mojang.com/browse/MC-250075) The inner two planes in mangrove roots are smaller than they should be
-   [MC-250076](https://bugs.mojang.com/browse/MC-250076) Shading is disabled for the two inner planes in mangrove roots, even though it isn't for all the other planes
-   [MC-250165](https://bugs.mojang.com/browse/MC-250165) Doing /locate stronghold in some single biomes causes an unexpected error
-   [MC-250240](https://bugs.mojang.com/browse/MC-250240) Z-fighting can be seen around the backs of frogs when they open their mouths
-   [MC-250288](https://bugs.mojang.com/browse/MC-250288) Some blocks in Ancient City structures can only be covered by sculk veins and can't be converted into a sculk block
-   [MC-250321](https://bugs.mojang.com/browse/MC-250321) Flying and aquatic mobs pathfinding in certain blocks cause crash || The game crashed whilst ticking entity Error: java.lang.NullPointerException: Cannot invoke "dnm.a()" because "$$1" is null
-   [MC-250331](https://bugs.mojang.com/browse/MC-250331) Chunk rendering is glitchy / incorrect when redrawing
-   [MC-250339](https://bugs.mojang.com/browse/MC-250339) Paintings are off-centered in multiplayer servers
-   [MC-250379](https://bugs.mojang.com/browse/MC-250379) Teleporting armor stands results in visual desync and abnormal behavior
-   [MC-250400](https://bugs.mojang.com/browse/MC-250400) Blocks and items can cause the world to render invisibly
-   [MC-250411](https://bugs.mojang.com/browse/MC-250411) Sculk can spread in ancient city structures and replace soul sand with fire on top, extinguishing fires
-   [MC-250429](https://bugs.mojang.com/browse/MC-250429) Narrator improperly narrates chat
-   [MC-250460](https://bugs.mojang.com/browse/MC-250460) The rendering of players is delayed for others

---

We've now released snapshot 22w16b to fix a crash.

## Fixed Bugs in 22w16b

-   [MC-250312](https://bugs.mojang.com/browse/MC-250312) - Game crashing when clicking singleplayer || java.lang.NullPointerException: Cannot invoke "java.lang.Comparable.compareTo(Object)" because "pivot" is null

---

A chance to re-live the good old times appears in snapshot 22w16a with the ability to de-fragment a Disc - a new Music Disc, to be precise! This snapshot also comes with even more new music, tweaks to the Allay and to top it off it makes some random gameplay events slightly more predictable.

Enjoy!

## New Features in 22w16a

-   Added new music
-   Added Disc Fragment 5 and Music Disc 5

### Four new music tracks

-   The new music tracks are called Ancestry, Aerie, Firebugs and Labyrinthine
-   They play in certain biomes and in the main menu

### Music Disc 5

A new music disc has been added to the game.

-   Unlike other discs, it can only be obtained by finding and crafting 9 Disc Fragments together
-   These Disc Fragments can be found rarely in Ancient City chests

## Changes in 22w16a

-   Allay tweaks
-   Improved the predictability a number of gameplay elements
-   Frogs can now spawn on Grass, Mud, Moss Carpet, Mangrove Roots and Muddy Mangrove Roots
-   Froglights are now movable by pistons

### Allay tweaks

-   Allay health raised from 10 to 20
-   Delay after item throw lowered from 5 secs to 3 secs
-   Item search range raised from 9 to 32
-   Movement speed changes:
    -   Allay is now slower when just wandering
    -   Allay is now faster when collecting items, going to the player or going to a noteblock
-   Throw arc has changed following community feedback

### Predictability of randomized events

Some randomized events are now more predictable and no longer have a possibility of extreme behaviors.

-   Placement and velocity of things dropped from Droppers/Dispensers
-   Placement and velocity of items spawned from containers upon destroy
-   Randomized `follow_range` component attribute for mobs
-   Velocity of Horses spawned from skeleton traps
-   Blaze random position and randomized speed of Blaze projectiles
-   Randomized portion of damage and velocity of Arrows
-   Randomized flight pattern of Fireworks
-   Bobbing patterns and time until a fish for Fishing Rods

## Technical Changes in 22w16a

-   `LWJGL` library has been updated to version 3.3.1
-   Added a heap memory allocation metric to the F3 debug screen
-   Added doWardenSpawning game rule
-   Updates to paintings

### Painting

-   Paintings that are placeable in survival can now be controlled with the `painting_variant/placeable` tag
-   Added unused paintings from Bedrock edition (`earth`, `wind`, `fire`, `water`)
    -   These paintings are not placeable by default, but can be added through a datapack

## Fixed bugs in 22w16a

-   [MC-81870](https://bugs.mojang.com/browse/MC-81870) Editing entitydata of Painting does not reflect ingame until chunk reload
-   [MC-111809](https://bugs.mojang.com/browse/MC-111809) Paintings unrender when entity data is updated rapidly
-   [MC-187188](https://bugs.mojang.com/browse/MC-187188) Painting NBT and registry contain a typo: "Motive" instead of "Motif"
-   [MC-226184](https://bugs.mojang.com/browse/MC-226184) Axolotls pathfinding to water can sometimes fall in wide holes
-   [MC-228049](https://bugs.mojang.com/browse/MC-228049) Axolotl can't pathfind through open doors
-   [MC-228174](https://bugs.mojang.com/browse/MC-228174) Axolotls try to pathfind through 2 tall walls
-   [MC-244957](https://bugs.mojang.com/browse/MC-244957) "Search" Option in Social Interactions Screen is not labeled in the right order when using Tab
-   [MC-245001](https://bugs.mojang.com/browse/MC-245001) "Manage with Microsoft account" button in Social Interactions menu is not centered
-   [MC-249084](https://bugs.mojang.com/browse/MC-249084) No sound is present for placing a Bucket of Tadpole
-   [MC-249092](https://bugs.mojang.com/browse/MC-249092) Mangrove Stripped Log, Stripped Wood and Wood are in the incorrect order in the creative inventory
-   [MC-249176](https://bugs.mojang.com/browse/MC-249176) Froglights are not visible on maps
-   [MC-249193](https://bugs.mojang.com/browse/MC-249193) Frog can't pathfind through open doors
-   [MC-249217](https://bugs.mojang.com/browse/MC-249217) Fluid level next to froglights is too low
-   [MC-249245](https://bugs.mojang.com/browse/MC-249245) Turtle can't pathfind through open doors
-   [MC-249246](https://bugs.mojang.com/browse/MC-249246) Strider can't pathfind through open doors
-   [MC-249265](https://bugs.mojang.com/browse/MC-249265) Some blocks cannot be placed on froglights
-   [MC-249459](https://bugs.mojang.com/browse/MC-249459) Cactus is not destroyed by froglights
-   [MC-249663](https://bugs.mojang.com/browse/MC-249663) The subtitles of some parrot imitation sounds are inconsistent with the original sounds' subtitles
-   [MC-249679](https://bugs.mojang.com/browse/MC-249679) Incorrect activation of warden's sniffing animations and behavior
-   [MC-249715](https://bugs.mojang.com/browse/MC-249715) Allays don't drop their held items upon death
-   [MC-249766](https://bugs.mojang.com/browse/MC-249766) Allays can despawn after being given an item if they haven't picked up any items yet
-   [MC-249790](https://bugs.mojang.com/browse/MC-249790) Allay follows and drops items for players in spectator mode
-   [MC-249838](https://bugs.mojang.com/browse/MC-249838) Allays lose their idle animation once they start moving
-   [MC-249855](https://bugs.mojang.com/browse/MC-249855) Parity Issue: Allays don't have a flying animation in Java
-   [MC-249912](https://bugs.mojang.com/browse/MC-249912) minecraft:ancient\_city/city\_center\_3 is one block shorter compared than the other ancient city centers
-   [MC-249928](https://bugs.mojang.com/browse/MC-249928) Mangrove tree roots do not update blocks around them when generating
-   [MC-250039](https://bugs.mojang.com/browse/MC-250039) Wardens can get angry at mobs outside world border
-   [MC-250040](https://bugs.mojang.com/browse/MC-250040) Wardens can hear mobs beyond the world border
-   [MC-250041](https://bugs.mojang.com/browse/MC-250041) Wardens can spawn outside of world border
-   [MC-250044](https://bugs.mojang.com/browse/MC-250044) Observers don't detect mangrove roots when tree grows
-   [MC-250094](https://bugs.mojang.com/browse/MC-250094) Wardens ignore /kill execution whilst they're emerging or digging
-   [MC-250095](https://bugs.mojang.com/browse/MC-250095) Wardens can spawn in very narrow places, causing them to suffocate
-   [MC-250293](https://bugs.mojang.com/browse/MC-250293) The "allay\_dust" particle is unused
-   [MC-250294](https://bugs.mojang.com/browse/MC-250294) Parity Issue: Allays item detection range is significantly smaller than in Bedrock

---

