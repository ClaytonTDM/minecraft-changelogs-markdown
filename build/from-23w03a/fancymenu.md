# Minecraft Snapshot 23w03a

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

**Arrow key navigation**

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

**Packet bundles**

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

**`clone`**

The clone command now supports specifying the source and target dimensions. New syntax:

`clone [from <sourceDimension>] <begin> <end> [to <targetDimension>] <destination> ...`

Parameters:

-   `sourceDimension`: id of dimension to clone from
-   `targetDimension`: id of dimension to clone to

**`data`**

New source available:

-   `string <entity|block|storage> [path] [start] [end]` - reads a value as text, resulting in a string value

New arguments:

-   `start`: Index of first character to include at the start of the string
-   `end`: Index of the first character to exclude at the end of the string

**`execute`**

**`execute if|unless`**

New conditions available for the `execute if|unless` sub-command:

-   `execute if|unless loaded <pos>` - checks if the position given is fully loaded (in regard to both blocks and entities)
-   `execute if|unless dimension <dimension>` - checks if the execution is in a matching dimension

Parameters:

-   `pos`: Block position to check
-   `dimension`: A dimension id

**`execute on`**

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

**`title`**

-   All time arguments to `title times` are now time durations and work with `t`, `s` and `d` suffixes

**`weather`**

-   The duration of the weather change now matches the game's regular weather cycle if not specified
-   The `duration` parameter is now a time duration in ticks and works with `t`, `s` and `d` suffixes
    -   To retain existing functionality, you need to add an `s` suffix to pre-existing commands

**`ride`**

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

**Translation fallback**

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

# Minecraft 1.19.3 Release Candidate 3

In order to secure the quality of the Minecraft 1.19.3 release, we have decided to fix a few more critical issues and to delay the release until tomorrow. To that end we are now releasing Minecraft 1.19.3 Release Candidate 3.

Happy mining!

## Fixed bugs in 1.19.3 Release Candidate 3

-   [MC-108707](https://bugs.mojang.com/browse/MC-108707) Potion effects, particles, and fire animations persist client-side after death in server environments
-   [MC-258258](https://bugs.mojang.com/browse/MC-258258) The "EntityTag" NBT data on armor stands is no longer applied upon placement
-   [MC-258279](https://bugs.mojang.com/browse/MC-258279) Particle groups aren't cleared on resource reload

---

# Minecraft 1.19.3 Release Candidate 2

We're now releasing the second (and hopefully last) release candidate for Minecraft 1.19.3, fixing a few critical bugs. If there are no major issues following this release candidate, no further changes will be done before the full release.

With this release candidate, we are reverting a behavior change for translation strings due to a prevalent but unsupported use case. Expect this behavior to be changed in the future to provide a supported alternative.

Happy mining!

## Fixed bugs in 1.19.3 Release Candidate 2

-   [MC-258256](https://bugs.mojang.com/browse/MC-258256) Cannot join a LAN world while offline
-   [MC-258251](https://bugs.mojang.com/browse/MC-258251) Slots (like %s) in translations no longer ignore missing elements in "with"

---

# Minecraft 1.19.3 Release Candidate 1

We're now releasing the first (and hopefully only) release candidate for Minecraft 1.19.3. If there are no major issues following this release candidate, no further changes will be done before the full release.

Happy mining!

## Fixed bugs in 1.19.3 Release Candidate 1

-   [MC-58668](https://bugs.mojang.com/browse/MC-58668): Smooth Lighting Minimum and Maximum levels no longer differ
-   [MC-185279](https://bugs.mojang.com/browse/MC-185279): "Done" and "Cancel" buttons in the game rules screen are not selected in the right order when navigating using Tab
-   [MC-187812](https://bugs.mojang.com/browse/MC-187812): The buttons are not selected in the right order using Tab in the new datapacks and resource packs menus
-   [MC-187816](https://bugs.mojang.com/browse/MC-187816): Using Tab multiple times to select a datapack / resource pack from the list does not deselect it
-   [MC-227250](https://bugs.mojang.com/browse/MC-227250): Mobs continue converting after the conversion process starts and the block causing the conversion is removed
-   [MC-240724](https://bugs.mojang.com/browse/MC-240724): There are no shadows on text displayed within the subtitles overlay
-   [MC-248589](https://bugs.mojang.com/browse/MC-248589): World border texture jumps back and forth between two positions as the player's y level changes
-   [MC-254809](https://bugs.mojang.com/browse/MC-254809): You cannot get water bottles from water in creative mode if there's a potion in your inventory
-   [MC-258159](https://bugs.mojang.com/browse/MC-258159): Pick block doesn't work on Ender Dragon
-   [MC-258190](https://bugs.mojang.com/browse/MC-258190): Bubble columns let skylight through
-   [MC-258195](https://bugs.mojang.com/browse/MC-258195): Performance degradation of NBT modification
-   [MC-258196](https://bugs.mojang.com/browse/MC-258196): Stray pixel in gui/toasts.png
-   [MC-258203](https://bugs.mojang.com/browse/MC-258203): /data modify thinks NBT is too large, but /data merge doesn't
-   [MC-258209](https://bugs.mojang.com/browse/MC-258209): Storage data is broken

---

# Minecraft 1.19.3 Pre-release 3

We're now releasing pre-release 3 for Minecraft 1.19.3 with more bug fixes. Happy mining!

## Fixed bugs in 1.19.3 Pre-release 3

-   [MC-108597](https://bugs.mojang.com/browse/MC-108597): Shulker box still plays the close sound, even if it is destroyed or replaced
-   [MC-165686](https://bugs.mojang.com/browse/MC-165686): Knowledge book texture in the crafting UI hasn't been updated
-   [MC-177141](https://bugs.mojang.com/browse/MC-177141): Cleric working subtitle is "Brewing Stand bubbles" instead of "Cleric works"
-   [MC-194501](https://bugs.mojang.com/browse/MC-194501): IllegalArgumentException (Cannot set property) when using a block without the "axis" property in fancy;;_;;tree;;_;;placer
-   [MC-201769](https://bugs.mojang.com/browse/MC-201769): Copying deeply nested NBT causes StackOverflowError
-   [MC-208051](https://bugs.mojang.com/browse/MC-208051): Chests/trapped chests/barrels do not 'open' after respawning
-   [MC-228976](https://bugs.mojang.com/browse/MC-228976): Entity collision is run on render thread
-   [MC-233051](https://bugs.mojang.com/browse/MC-233051): Server crashes as player logs in
-   [MC-250428](https://bugs.mojang.com/browse/MC-250428): Narrator does not narrate the death screen
-   [MC-256706](https://bugs.mojang.com/browse/MC-256706): Carpet texture is cut off in the recipe book
-   [MC-257121](https://bugs.mojang.com/browse/MC-257121): Players' capes and outer skin layers don't render client-side in server environments when joining worlds while dead
-   [MC-257340](https://bugs.mojang.com/browse/MC-257340): Vexes' hitboxes aren't vertically centered with their models
-   [MC-257350](https://bugs.mojang.com/browse/MC-257350): Top and bottom texture of block of bamboo rotated incorrectly
-   [MC-257392](https://bugs.mojang.com/browse/MC-257392): Vex's new model's head does not rotate to where it looks
-   [MC-257411](https://bugs.mojang.com/browse/MC-257411): Vex Renders Offhand Items Incorrectly
-   [MC-257495](https://bugs.mojang.com/browse/MC-257495): Dying whilst in the Shulker Box GUI will spam "Shulker Closes" sound
-   [MC-257530](https://bugs.mojang.com/browse/MC-257530): When Chat is set to Hidden, the Chat Hidden Warning appears in chat instead of the actionbar when attempting to send a message whilst sleeping or switching gamemode
-   [MC-257817](https://bugs.mojang.com/browse/MC-257817): Player heads with a custom skin lose their noteblock sound data when using Ctrl+Pick block
-   [MC-257839](https://bugs.mojang.com/browse/MC-257839): NullPointerException when attempting to render a tooltip in the Game Rules menu
-   [MC-257843](https://bugs.mojang.com/browse/MC-257843): note;;_;;block;;_;;sound data is lost when breaking a player head
-   [MC-257861](https://bugs.mojang.com/browse/MC-257861): Villagers and Piglin no longer seek out Items

---

# Minecraft 1.19.3 Pre-Release 2

We're now releasing 1.19.3 pre-release 2 which fixes a few bugs.

## Changes in 1.19.3 Pre-release 2

​

-   When tabbing through buttons, tooltips are displayed above or below them
-   Tooltips displayed when hovering are displayed next to the cursor
-   Tooltips from focused buttons (focused by pressing tab) take priority over tooltips from hovered buttons
-   Optimized some exceptionally slow cases of structure lookup

​

## Fixed bugs in 1.19.3 Pre-release 2

​

-   [MC-185618](https://bugs.mojang.com/browse/MC-185618) Creepers can't be ignited with a fire charge
-   [MC-187744](https://bugs.mojang.com/browse/MC-187744) "Place pack files here" hover text on pack selection screen shows everywhere when "Open pack folder" button has focus
-   [MC-189111](https://bugs.mojang.com/browse/MC-189111) Bees get stuck on non-full blocks
-   [MC-256655](https://bugs.mojang.com/browse/MC-256655) Some shorter mobs can attack Players on a Camel
-   [MC-257616](https://bugs.mojang.com/browse/MC-257616) The "Data Collection" button in the telemetry menu displays its hover text regardless of the position of the cursor
-   [MC-257636](https://bugs.mojang.com/browse/MC-257636) Villagers rarely close doors after going through them
-   [MC-257664](https://bugs.mojang.com/browse/MC-257664) Buttons within the list in the social interactions menu display their hover text regardless of the position of the cursor
-   [MC-257668](https://bugs.mojang.com/browse/MC-257668) The draft report icon isn't present on any of the "Title Screen" buttons within the death screen when attempting to disconnect from worlds while having saved draft reports

---

# Minecraft 1.19.3 Pre-Release 1

We’re now releasing the first pre-release for Minecraft 1.19.3. This pre-release fixes a few bugs, contains a few tweaks, and it has some technical changes.

If everything goes as expected, we aim to release this version on December 6th.

Happy mining!

## Technical Changes in 1.19.3 Pre-release 1

-   Added new entity sub-predicate types: `axolotl`, `boat`, `fox`, `mushroom`, `painting`, `rabbit`, `horse`, `llama`, `villager`, `parrot`, `tropical_fish`
-   `fillbiome` command now supports a filtered mode
-   Player Heads can now contain a `note_block_sound` field
    -   When present, this determines the sound a note block makes when the head is placed on top of it

### Loot tables and Advancements

**New entity sub-predicate types**

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

### `fillbiome` command

Now supports a filtered form. New syntax:

`fillbiome <from> <to> <biome> [replace <filter>]`

New parameter:

-   `filter`: A biome or biome tag to replace

## Fixed bugs in 1.19.3 Pre-release 1

-   [MC-156663](https://bugs.mojang.com/browse/MC-156663) Villager pathfinding broken in water
-   [MC-177596](https://bugs.mojang.com/browse/MC-177596) Weaponsmith working subtitle is "Grindstone used" instead of "Weaponsmith works"
-   [MC-177676](https://bugs.mojang.com/browse/MC-177676) Armorer working subtitle is "Blast Furnace crackles" instead of "Armorer works"
-   [MC-245697](https://bugs.mojang.com/browse/MC-245697) Certain mobs can't get out of water that is at least two blocks deep
-   [MC-255133](https://bugs.mojang.com/browse/MC-255133) Extra copper ore generates in deep dark
-   [MC-256481](https://bugs.mojang.com/browse/MC-256481) minecraft.used:minecraft.BOOK;;_;;TYPE doesn't increase when placing books onto chiseled bookshelves
-   [MC-256679](https://bugs.mojang.com/browse/MC-256679) Axolotls commonly hesitate when avoiding danger and occasionally start pathfinding in dangerous directions
-   [MC-256883](https://bugs.mojang.com/browse/MC-256883) Elements within the game menu are now positioned slightly lower than they were in previous versions
-   [MC-257341](https://bugs.mojang.com/browse/MC-257341) Vex texture does not utilize translucency
-   [MC-257349](https://bugs.mojang.com/browse/MC-257349) Vex does not sit in boats and minecarts properly anymore
-   [MC-257368](https://bugs.mojang.com/browse/MC-257368) Not a valid port error in Open to LAN doesn't show if port is <1024
-   [MC-257373](https://bugs.mojang.com/browse/MC-257373) The cursor in the port number text box doesn't blink
-   [MC-257374](https://bugs.mojang.com/browse/MC-257374) The word "number" isn't capitalized in "Port number"
-   [MC-257386](https://bugs.mojang.com/browse/MC-257386) Inventory menu has broken textures with Programmer Art enabled
-   [MC-257506](https://bugs.mojang.com/browse/MC-257506) Top and bottom texture of chiseled bookshelf rotates depending on placement
-   [MC-257525](https://bugs.mojang.com/browse/MC-257525) Allay movement AI is broken in 22w42a+ causing them to sometimes spin mid-air
-   [MC-257617](https://bugs.mojang.com/browse/MC-257617) You cannot scroll with the mouse wheel on the telemetry screen after clicking the "Open my data" or "Data collection" button
-   [MC-257618](https://bugs.mojang.com/browse/MC-257618) The word "pair" uses the incorrect verb form within the "telemetry.event.world;;_;;loaded.description" string
-   [MC-257619](https://bugs.mojang.com/browse/MC-257619) Baby piglins and zombified piglins take damage when they hit their head on a block
-   [MC-257625](https://bugs.mojang.com/browse/MC-257625) Piglin Head placed on noteblock play the piglin angry sound instead of the piglin ambient sound
-   [MC-257648](https://bugs.mojang.com/browse/MC-257648) The fillbiome command can result in flickering biome colors
-   [MC-257658](https://bugs.mojang.com/browse/MC-257658) Sculk sensors are not activated upon taking books from chiseled bookshelves
-   [MC-257663](https://bugs.mojang.com/browse/MC-257663) The "Hide messages" button in the social interactions menu can now no longer be toggled due to it being executed twice upon being pressed

---

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

**Telemetry transparency**

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

**Required telemetry events**

-   Added WorldUnloaded event
-   Removed client Java version from the WorldLoaded event

**WorldLoaded & WorldUnloaded**

Understanding how Minecraft is played allows us to focus game updates and improvements on the areas that are most relevant to players. The data that tells us this includes game mode, client or server modded status, and game version.

WorldLoaded & WorldUnloaded are two paired events that calculate how long the world session has lasted (in seconds and ticks). Data from WorldLoaded is sent when a world is launched, and data from WorldUnloaded is sent when a world is shut down (quitting to title, disconnecting from a server).

**Optional telemetry events**

-   Added PerformanceMetrics and WorldLoadTimes events

**PerformanceMetrics**

Knowing the overall performance profile of Minecraft helps us tune and optimize the game for a wide range of machine specifications and operating systems.

The periodic performance metrics includes data such as frame-rates, rendering performance, memory usage, operating system, and the modded status of the client and server.

Game version is included to help us compare the performance profile for new versions of Minecraft.

**WorldLoadTimes**

It’s important for us to understand how long it takes to join a world, and how that changes over time. For example, when we add new features or do larger technical changes, we need to see what impact that had on load times.

This event includes the total time in milliseconds for the world to load, whether this was a new world, as well as game version and platform details.

### Texture loading changes

-   Context: When the game loads all textures used by block and item models need to be stitched (merged) into a single image, called the "atlas"
    -   Individual textures that are stitched onto the atlas are called "sprites"
-   To improve loading performance, block and item textures are now loaded before they are processed by block and item models
    -   By default, textures not in the `textures/item` and `textures/block` directories will no longer be automatically recognized and will fail to load
-   Resource packs can now have configuration files, located in `atlases` directory, that control which images are included in the atlases

**Atlas configuration files**

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

**`fillbiome`**

Changes biome entries for an area. Note that biomes are not stored per-block, so affected positions may not match input precisely.

Syntax:

`fillbiome <from> <to> <biome>`

Parameters:

-   `from`: One corner of the area to fill
-   `to`: The other corner of the area to fill
-   `biome`: The biome to set

**`execute`**

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

