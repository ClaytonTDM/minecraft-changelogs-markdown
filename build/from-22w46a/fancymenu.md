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

# Minecraft Snapshot 22w45a

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

# Minecraft Snapshot 22w44a

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

# Minecraft Snapshot 22w43a

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

