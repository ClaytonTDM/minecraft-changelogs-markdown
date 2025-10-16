# Minecraft Snapshot 25w34b

Here is snapshot 25w34b to fix a connectivity error with Realms that snuck into 25w34a.

## Fixed bugs in 25w34b

-   [MC-300911](https://bugs.mojang.com/browse/MC-300911) Glowing item & block displays no longer glow

---

This week it's time for a smaller snapshot with a new main menu panorama, code of conducts for servers and much tinkering and fixing with our new friends, the Copper Golems. Happy mining!

> **Developer's Note**: _The rendering changes introduced in 25w31a for entities are now expanded to affect block entities and items. Please report any issues you encounter in these areas._

## New Features

-   Servers can now have an in-game Code of Conduct

### Server Code of Conduct

When connecting to a server, a Code of Conduct screen can now be shown.

-   Accepting the Code of Conduct is required to play on the server
-   A checkbox is available for not showing the same Code of Conduct in the future
    -   If the Code of Conduct changes, it will be shown again

#### Server Setup

-   A new boolean field has been added to `server.properties` called `enable-code-of-conduct`
    -   Setting it to `true` will make the server look for code of conduct files in the `codeofconduct` subfolder in the same folder as `server.properties`
    -   Each file in the folder should have the form `<language_code>.txt`
        -   The language shown will attempt to match the player's language
        -   If it doesn't exist, the `en_us` code of conduct will be used
        -   If that also doesn't exist, an arbitrary available entry is used

## Changes

-   The main menu now has an updated background panorama showing Copper Golems in a Village

### The End Light Flashes

-   The sound effect produced by a flash now has a higher delay
-   The "Hide Lightning Flashes" accessibility setting has been renamed to "Hide Sky Flashes" and now also disables the End Flashes
    -   When the flash is disabled by the setting the world will not be lit by the flash, but the flash source will still be visible in the sky and the sound effect will still play

### Minor Tweaks to Blocks, Items and Entities

-   The eyes of the Copper Golem are now invisible as well when splashed with Potion of Invisibility
-   Copper Golems hitbox has been tweaked
    -   The hitbox is now 0.6 blocks in width to be able to pathfind through open doors
    -   The hitbox is now 1.01 blocks in height to not get stuck in certain blocks

### Sounds

-   Copper Golem & Copper Chests are now audible from up to 12 blocks away
-   The copper sorting sounds have been tweaked to be quieter

## Technical Changes

-   The Data Pack version is now 84.0
-   The Resource Pack version is now 66.0

## Data Pack Version 84.0

-   Player profiles in data components and block entities no longer resolve automatically
-   Added `fetchprofile` command for downloading player profiles

### Block States

-   Removed `align_items_to_bottom` block state property from Shelf block
    -   It has been replaced with an equally named boolean field on the Shelf block entity
    -   Shelves created with this property set in the last snapshot will reset back to the default value (`false`)

### Commands

#### Added `fetchprofile`

-   New command that has been added to fetch the contents of a player profile from Minecraft servers
-   Since the operation might take some time, it works asynchronously
    -   Results will be printed only when operation finishes, but the game will keep running unpaused
-   After successful completion, a message will be printed that lets users copy the contents of a fully resolved `minecraft:profile` component or `/give @s minecraft:player_head` with said component
-   Since the result is not known at the time of execution, this command always returns `1`

Syntax:

-   `fetchprofile name <player name>` - resolves profile by name (case-insensitive)
-   `fetchprofile id <uuid>` - resolves profile by id

### Data Components

#### Modified `minecraft:profile`

-   Previously contents of this component would permanently change when profile was resolved, i.e. downloaded from Minecraft service
-   To avoid issues with this unexpected change, the resolved value is no longer stored and contents of the profile will always remain unchanged
-   That means this component has now two behaviors:
    -   Static: when it has `properties` field or when both `name` and `id` are present or when both are missing
        -   In this state, profile will always render as-is
        -   If `properties` field is missing, a default skin will be used (selected based on `id`, same as in offline mode)
        -   That means skin will be frozen at the moment of component creation
        -   This option is preferred for decorational uses
    -   Dynamic: when it has either `name` or `id` (but not both)
        -   When an item containing this profile is rendered on the client side, the profile will be resolved to most recent value
        -   This means that this item will always render with current skin of targeted player
            -   Note: if a player changes skin while game is running, change will not be visible unless clients restart
        -   Resolution might happen with a delay, during which item will render with a default skin
        -   Profile name will replace item name only when it's present
            -   Items with just `id` will show default name
        -   Items will dynamic profiles be distinguished from static ones with label in tooltip
-   Items stack based on exact contents, so even if a dynamic component is eventually resolved to the same profile as a static one, they won't stack together
-   Player heads in older maps that have not been loaded in never versions yet will usually be converted to dynamic contents

### Block Entity Data

#### Modified `minecraft:skull`

-   `profile` field has been changed to match `minecraft:profile` component
    -   That means that it also becomes immutable and is resolved only when necessary

### Text components

-   Bold and italics styles are ignored when drawing sprites

## Resource Pack Version 66.0

-   Removed block state `align_items_to_bottom` from the Shelf block
    -   See above for details

## Fixed bugs in 25w34a

-   [MC-383](https://bugs.mojang.com/browse/MC-383) In the world selection screen, world names/versions/timestamps can overflow the list to the right
-   [MC-36783](https://bugs.mojang.com/browse/MC-36783) Item frames/Glow item frames don't change their hitbox if they contain a map
-   [MC-59413](https://bugs.mojang.com/browse/MC-59413) Water and lava can drip from barriers
-   [MC-147784](https://bugs.mojang.com/browse/MC-147784) Fletching table flashes crafting table's GUI for about a second upon right-clicking it in spectator mode
-   [MC-259673](https://bugs.mojang.com/browse/MC-259673) Tab selection works differently in world creation and statistics screens
-   [MC-260591](https://bugs.mojang.com/browse/MC-260591) 'execute on origin' and 'execute on owner' fail to find the targeted entity when it is in a separate dimension
-   [MC-260920](https://bugs.mojang.com/browse/MC-260920) Statistics screen columns are not accessible through keyboard navigation
-   [MC-265290](https://bugs.mojang.com/browse/MC-265290) Elements within the command block interface are not selected in order when using the TAB key
-   [MC-270190](https://bugs.mojang.com/browse/MC-270190) Hovering over banner patterns in the loom UI does not display tooltips
-   [MC-270669](https://bugs.mojang.com/browse/MC-270669) Incorrect argument order in translation key argument.block.property.novalue
-   [MC-272584](https://bugs.mojang.com/browse/MC-272584) Fireballs redirected by explosions caused by player owned entities no longer carry player ownership
-   [MC-276931](https://bugs.mojang.com/browse/MC-276931) Enchanted books have the wrong rarity
-   [MC-296789](https://bugs.mojang.com/browse/MC-296789) The color of text within the test instance block interface is inconsistent with other similar interfaces
-   [MC-297496](https://bugs.mojang.com/browse/MC-297496) Text inside the middle of the java realms information box completely disappears when selected
-   [MC-298605](https://bugs.mojang.com/browse/MC-298605) When creating a Water World superflat world, the player spawns at the bottom of the sea
-   [MC-299067](https://bugs.mojang.com/browse/MC-299067) Arrows can lose ownership on disconnection in multiplayer
-   [MC-299115](https://bugs.mojang.com/browse/MC-299115) Arrows lose their owner tag when deflected while the owner is offline
-   [MC-300045](https://bugs.mojang.com/browse/MC-300045) The hand animation plays when right-clicking copper golems
-   [MC-300046](https://bugs.mojang.com/browse/MC-300046) The copper golem statue models in the inventory are partly cut off at the top
-   [MC-300048](https://bugs.mojang.com/browse/MC-300048) Copper golem statue item entities are rendered too large
-   [MC-300066](https://bugs.mojang.com/browse/MC-300066) The Ender Dragon Spawn Egg has the "Disabled in Peaceful" note despite being able to spawn in Peaceful mode
-   [MC-300082](https://bugs.mojang.com/browse/MC-300082) Copper golems with the “NoAI” tag can adjust their rotation and spin
-   [MC-300083](https://bugs.mojang.com/browse/MC-300083) Copper golems with the “Silent” tag can still produce some sounds
-   [MC-300085](https://bugs.mojang.com/browse/MC-300085) Copper golem statues' poses are off-centered
-   [MC-300130](https://bugs.mojang.com/browse/MC-300130) The "commands.summon.failed.peaceful" string doesn’t pluralize the word "Monster"
-   [MC-300134](https://bugs.mojang.com/browse/MC-300134) Copper Golem Spawn Egg isn't alphabetized in the creative inventory
-   [MC-300213](https://bugs.mojang.com/browse/MC-300213) Copper golems' hitbox is too large to fit through open single doors
-   [MC-300222](https://bugs.mojang.com/browse/MC-300222) Upon exiting the gamemode switcher (F3+F4) or debug options menu (F3+F5) while viewing the credits, the player does not resume viewing the credits and instead remains in the end in a phantom state until they relog
-   [MC-300245](https://bugs.mojang.com/browse/MC-300245) Any double chests variant doesnt play any sound when a copper golem interacts with the right part of the chest specifically
-   [MC-300249](https://bugs.mojang.com/browse/MC-300249) Copper golem statue block outline is above the top of the block below
-   [MC-300365](https://bugs.mojang.com/browse/MC-300365) Copper golems inconsistently activate trapped chests
-   [MC-300406](https://bugs.mojang.com/browse/MC-300406) Updating open copper chests causes the chests to remain open
-   [MC-300441](https://bugs.mojang.com/browse/MC-300441) Nether ambient sounds continue playing after leaving the Nether
-   [MC-300475](https://bugs.mojang.com/browse/MC-300475) The Glowing outline now appears black on the fur model parts of invisible sheep
-   [MC-300480](https://bugs.mojang.com/browse/MC-300480) Worn copper golem statues are incorrectly rotated
-   [MC-300695](https://bugs.mojang.com/browse/MC-300695) The sprint toggle state is now reset when viewing any screen
-   [MC-300718](https://bugs.mojang.com/browse/MC-300718) Player doesn't re-sneak automatically if they were sneaking before opening a GUI with Sneak Toggle set
-   [MC-300796](https://bugs.mojang.com/browse/MC-300796) Harvesting from sweet berry bushes can drop more sweet berries than before
-   [MC-300804](https://bugs.mojang.com/browse/MC-300804) The Glowing outline is now always white on invisible entities that aren't the player, unless the player is in the same team
-   [MC-300825](https://bugs.mojang.com/browse/MC-300825) Entities with NaN motion cause clients to be kicked and softlocked
-   [MC-300839](https://bugs.mojang.com/browse/MC-300839) Disc sounds can be heard in another dimension
-   [MC-300846](https://bugs.mojang.com/browse/MC-300846) The /rotate command doubles the target entity's motion each time it is run
-   [MC-300856](https://bugs.mojang.com/browse/MC-300856) I-beam cursor in book signing screen has wrong color
-   [MC-300888](https://bugs.mojang.com/browse/MC-300888) pack.mcmeta no longer supports versions below 16 in the supported;;_;;formats field
-   [MC-300968](https://bugs.mojang.com/browse/MC-300968) Flying state is not saved when reloading world
-   [MC-300970](https://bugs.mojang.com/browse/MC-300970) Missing sound for event: minecraft:entity.copper;;_;;golem.shear
-   [MC-300972](https://bugs.mojang.com/browse/MC-300972) End light flashes sound can be heard while looking at the credits
-   [MC-300975](https://bugs.mojang.com/browse/MC-300975) Copper golems wear banners backwards
-   [MC-300983](https://bugs.mojang.com/browse/MC-300983) The speed field in ExplosionParticleInfo codec is misspelled as "speec"
-   [MC-300995](https://bugs.mojang.com/browse/MC-300995) Game crashes when changing the F3 menu during world disconnection
-   [MC-301004](https://bugs.mojang.com/browse/MC-301004) Normal guardians are no longer able to enter boats
-   [MC-301030](https://bugs.mojang.com/browse/MC-301030) Frosted ice now melts in the End
-   [MC-301032](https://bugs.mojang.com/browse/MC-301032) Bees in the End now hide in their hive when it's raining in the Overworld

---

In this week's snapshot we've got a nice quality of life improvement for all the chatters out there. Now your unsent messages will be saved as drafts, check out the details below. Items on shelves will now be positioned in the middle of the shelf as default. Before we move our focus onto technical tweaks and bug fixes for this drop, we have one final feature to announce – and it involves a very cute interaction between the copper golem and the iron golem! With this, all features for our third game drop of 2025 are now in testing, and we'll start working our next game drop, which we are excited to tell you about soon!

## New Features

-   Added light flashes to The End dimension as part of the ongoing Vibrant Visuals work
-   Iron Golems will sometimes plant a decorative flower onto a nearby Copper Golem
-   Unsent chat messages now get saved as chat drafts

### The End Light Flashes

-   The End dimension now has skylight
-   Normally the skylight does not affect how the dimension looks
-   From time to time flashes in the sky happen
-   When they happen skylight intensity increases flooding the dimension with purple light

### Copper Golem

-   Iron Golems will sometimes plant a decorative flower onto a nearby Copper Golem
    -   The flower can be removed with Shears
    -   This flower is dropped when the Copper Golem turns into a Copper Golem Statue Block

### Chat Drafts

-   Unsent chat messages now get saved as chat drafts if the chat was forcibly closed
    -   This includes it being closed by external sources such as dying or a dialog opening, but not the player intentionally closing their chat
-   Any existing chat draft will get pre-filled into the message box the next time the chat is opened
-   Draft text has a grayed-out appearance until fully restored
    -   Draft text can be restored as regular text by interacting with it:
        -   Typing additional text
        -   Moving the text cursor using the arrow keys
        -   Clicking it
        -   Highlighting it
    -   Pressing enter on a chat draft prior to it being restored sends it like a normal chat message
    -   Pressing backspace on a chat draft prior to it being restored deletes it
-   Added an option to the Chat Settings menu that enables saving unsent chat messages by default
    -   With this option enabled, unsent messages will _always_ get saved as chat drafts, even if the player intentionally closed their chat

## Changes

-   Players seen in the game world of the current server are now always shown in the Social Interactions screen even if they are offline

### Blocks

#### Shelf

-   Items in the Shelf will render in the middle of the Shelf
-   Updated the sizes of many items in the Shelf to better fit the Shelf

> **Developer's Note:** _Thank you for all your valuable feedback on the shelf! Seeing the many creative ways you've been using this new block, we've decided to revert the change from last week that positioned items at the bottom of the shelf, as we agree that having the items centered provides more creative opportunities when building._

### UI

#### Chat

-   It is now possible to start chatting while standing inside a Nether Portal
-   The chat will now remain open and unchanged if the player was chatting before being transferred to another dimension

## Technical Changes

-   The Data Pack version is now 83.1
-   The Resource Pack version is now 65.2
-   Added new display transform "on;;_;;shelf"
    -   Used for displaying items on the Shelf

## Data Pack Version 83.1

### Block States

-   Added `align_items_to_bottom` block state property to the Shelf block
    -   If `false` the items on the Shelf will ignore the vertical translation of the `on_shelf` item display transform and will be rendered vertically aligned to the middle of the Shelf
    -   If `true` the items on the Shelf will be rendered upward from the bottom of the Shelf and will respect the vertical translation of the `on_shelf` item display transform
    -   Default is `false` (items are aligned to the middle of the Shelf)

### Attributes

#### `run_command` Click Event

-   Previously, if the `command` field contained a command that required a signed message (`/say`, `/me`, `/msg`, `/tell`, `/w`, `/teammsg`, `/tm`), it would be silently discarded
-   Instead, a screen will be shown that lets the user insert the command into the chat window or copy the command to their clipboard if the chat window can't be opened

### Enchantments

#### `explode` Effects

New field: `block_effects` - specifies per-block particles. Each block particle is randomly chosen according to weights. A set limit of block particles is spawned each tick from all explosions that tick.

Format: List of entries:

-   `weight`: Non-negative integer representing the random weight for this entry being chosen
-   `particle`: The particle to spawn
-   `scaling`: Optional scaling to apply between explosion center and block position, or `1.0` if not specified
-   `speed`: Optional scaling to apply to the speed of the particle, or `1.0` if not specified

### Tags

#### Item Tags

-   Added `#shearable_from_copper_golem` - all items that can be removed from the Copper Golem's head slot via Shears

## Resource Pack Version 65.2

### Textures

-   Added a new texture:
    -   `environment/end_flash.png`

### Sounds

#### Sound Events

-   Added new sound event:
    -   `weather.end_flash`

## Fixed bugs in 25w33a

-   [MC-26334](https://bugs.mojang.com/browse/MC-26334) Chat UI is forcibly cleared when killed
-   [MC-46503](https://bugs.mojang.com/browse/MC-46503) You can retain entities' shaders by running the "/kill" command while in spectator mode
-   [MC-69216](https://bugs.mojang.com/browse/MC-69216) Switching to spectator mode while fishing keeps rod cast
-   [MC-98322](https://bugs.mojang.com/browse/MC-98322) Flying after shifting between Creative/Spectator
-   [MC-99785](https://bugs.mojang.com/browse/MC-99785) You can leash entities in spectator mode
-   [MC-119417](https://bugs.mojang.com/browse/MC-119417) A spectator can occupy a bed if they enter it and then are switched to spectator mode
-   [MC-165991](https://bugs.mojang.com/browse/MC-165991) TNT explosion no longer shows additional smoke particles since 1.15 Pre-release 1
-   [MC-173730](https://bugs.mojang.com/browse/MC-173730) Shift-clicking water buckets against a waterloggable block doesn't place the water beside the waterloggable block
-   [MC-183784](https://bugs.mojang.com/browse/MC-183784) Visual bug to the Game Mode Switcher debug menu after resizing the window
-   [MC-187850](https://bugs.mojang.com/browse/MC-187850) "run;;_;;command" click;;_;;event doesn't work in written books if chat is hidden
-   [MC-191669](https://bugs.mojang.com/browse/MC-191669) Sprinting is disabled when switching your gamemode to spectator while sprinting into a block or general obstruction
-   [MC-232968](https://bugs.mojang.com/browse/MC-232968) Spectators can prevent the closing animation of a chest/barrel when viewing it at the same time as a non-spectator
-   [MC-238146](https://bugs.mojang.com/browse/MC-238146) When you switch to Spectator mode while sleeping, the night never skips
-   [MC-259571](https://bugs.mojang.com/browse/MC-259571) Last player game mode not saved after player dies or the game is reloaded
-   [MC-270172](https://bugs.mojang.com/browse/MC-270172) Client and server desync for hooked players when changing gamemode to spectator
-   [MC-297898](https://bugs.mojang.com/browse/MC-297898) Entering a dialog temporarily closes the chat and clears anything the player was currently typing
-   [MC-299548](https://bugs.mojang.com/browse/MC-299548) "run;;_;;command" dialog actions don't work if chat is hidden
-   [MC-299823](https://bugs.mojang.com/browse/MC-299823) Minecraft shaders cause C7050 warnings
-   [MC-299873](https://bugs.mojang.com/browse/MC-299873) Selection boxes of plain messages within dialogs can get cut off
-   [MC-300034](https://bugs.mojang.com/browse/MC-300034) Dolphins can ride boats
-   [MC-300057](https://bugs.mojang.com/browse/MC-300057) Monsters still spawn for a tick when spawning them with a Spawn Egg in Peaceful
-   [MC-300417](https://bugs.mojang.com/browse/MC-300417) The copper pickaxe is not part of the #cluster;;_;;max;;_;;harvestables item tag
-   [MC-300457](https://bugs.mojang.com/browse/MC-300457) Dialog is unescapable when action or exit;;_;;action is set to run;;_;;command with a command that would produce a signed chat message
-   [MC-300722](https://bugs.mojang.com/browse/MC-300722) Hoppers appear to randomly stop draining items through shelves
-   [MC-300732](https://bugs.mojang.com/browse/MC-300732) Loaded ender pearls are deleted when viewing the end credits for the first time when enderPearlsVanishOnDeath is true
-   [MC-300739](https://bugs.mojang.com/browse/MC-300739) Server crash when generating custom structures containing shelf blocks
-   [MC-300746](https://bugs.mojang.com/browse/MC-300746) Missing translation for copper wall torch
-   [MC-300747](https://bugs.mojang.com/browse/MC-300747) Cannot see villager's profession layer behind slime

---

Another Tuesday, another Snapshot release! Alongside technical updates and bug fixes, this week we're introducing a copper-y collection of goodies from our third game drop of the year: Build with copper torches, lanterns, chains, and bars – and watch them develop that stunning signature patina. With this week's release, you'll also find that items displayed in shelves have learned the noble art of sitting down.

Happy mining!

## New Features

-   Added Copper Decorations

### Copper Decorations

-   Added Copper Torch
    -   A green variant of the Torch crafted from a Copper Nugget, Coal, and Stick
    -   Functionally identical to the Torch
-   Added Copper Bars
    -   Functions like the existing Iron Bars block
    -   Made from copper and oxidizes over time
-   Added Copper Chain
    -   Functions like the existing Chain block (now renamed to Iron Chain)
    -   Made from copper and oxidizes over time
-   Added Copper Lantern
    -   Crafted similarly to a regular Lantern but uses Copper and a Copper Torch
    -   The lantern itself oxidizes, changing its look as it ages
    -   Functionally identical to the Lantern

## Changes

-   The Chain block has been renamed to "Iron Chain"

### Minor Tweaks to Blocks, Items and Entities

-   Items on the Shelf have been repositioned to sit on the Shelf
-   All Copper Golem Statues now always drop as item when mined
-   All Copper Golem Statues now pop off as an item when pushed by a piston

### Recipes

-   Changed the Copper Trapdoor recipe to use 4 Copper Ingots instead of 6

## Technical Changes

-   The Data Pack version is now 83.0
-   The Resource Pack version is now 65.1
-   Added a way to use GUI and item sprites in text

## Data Pack Version 83.0

### Entity Data

#### `copper_golem`

-   The `weather_state` field now expects a string id instead of integer id
    -   `0` -> `unaffected`
    -   `1` -> `exposed`
    -   `2` -> `weathered`
    -   `3` -> `oxidized`

### Text rendering

#### `object` Text Component

-   New text component with type `object` has been added
-   This component will display a single sprite from sprite atlas as a character
-   Sprites are always rendered as a rectangle, 8x8 pixels in size
-   Format:
    -   `atlas` - namespaced ID of a sprite atlas, default value: `minecraft:blocks`
    -   `sprite` - namespaced ID of a sprite in atlas, for example `item/porkchop`

General note about atlas contents:

-   Sprite Atlases contain textures for items, blocks, mob effects, GUI elements, etc.
-   Contents are controlled by files in `assets/minecraft/atlases/` directory in a resource pack
-   Current contents can be reviewed with the F3+S key combination

### Loot Tables

-   Added `harvest/sweet_berry_bush` loot table for drops when a Sweet Berry Bush with Sweet Berries is harvested by interacting with it

### Tags

#### Block Tags

-   Added `#chains` - all Chain blocks
-   Added `#lanterns` - all Lantern blocks
-   Added `#bars` - all Bar blocks

#### Item Tags

-   Added `#chains` - all Chain block items
-   Added `#lanterns` - all Lantern block items
-   Added `#bars` - all Bar block items

## Resource Pack Version 65.1

### Block Sprites

Added new block sprites:

-   `copper_bars`
-   `copper_chain`
-   `copper_lantern`
-   `copper_torch`
-   `exposed_copper_bars`
-   `exposed_copper_chain`
-   `exposed_copper_lantern`
-   `exposed_copper_torch`
-   `oxidized_copper_bars`
-   `oxidized_copper_chain`
-   `oxidized_copper_lantern`
-   `oxidized_copper_torch`
-   `weathered_copper_bars`
-   `weathered_copper_chain`
-   `weathered_copper_lantern`
-   `weathered_copper_torch`

### Item Sprites

Added new item sprites:

-   `copper_chain`
-   `copper_lantern`
-   `exposed_copper_chain`
-   `exposed_copper_lantern`
-   `oxidized_copper_chain`
-   `oxidized_copper_lantern`
-   `weathered_copper_chain`
-   `weathered_copper_lantern`

### Particles

Added new particle:

-   `copper_fire_flame`

## Fixed bugs in 25w32a

-   [MC-163218](https://bugs.mojang.com/browse/MC-163218) Players with the Sneak option set to "Toggle" can sneak while in GUIs
-   [MC-174759](https://bugs.mojang.com/browse/MC-174759) Dragon eggs can be teleported to a height below void
-   [MC-257540](https://bugs.mojang.com/browse/MC-257540) Sheep eat half as often as they did before 21w39a
-   [MC-273943](https://bugs.mojang.com/browse/MC-273943) Sweet berries drop from harvested bushes is hardcoded
-   [MC-276431](https://bugs.mojang.com/browse/MC-276431) Dragon egg teleports above the build height limit and deletes itself
-   [MC-279548](https://bugs.mojang.com/browse/MC-279548) TNT minecart does not remember ignition source when exploding from a fall
-   [MC-295841](https://bugs.mojang.com/browse/MC-295841) Interactive collision check path is broken
-   [MC-296054](https://bugs.mojang.com/browse/MC-296054) Fast non-projectile entity movements may fail to apply block effects from blocks around the starting position when moving in positive directions
-   [MC-296055](https://bugs.mojang.com/browse/MC-296055) Slow non-projectile entity movements may fail to apply block effects from origin block
-   [MC-296057](https://bugs.mojang.com/browse/MC-296057) Sideways non-projectile movements may fail to apply block effects from blocks around start of sideways motion
-   [MC-296372](https://bugs.mojang.com/browse/MC-296372) Teleport duration is unreliable as of 1.21.5
-   [MC-299314](https://bugs.mojang.com/browse/MC-299314) Breaking jukeboxes in certain ways doesn't stop the music
-   [MC-299627](https://bugs.mojang.com/browse/MC-299627) Entity interpolation for high speed projectiles is wildly inaccurate
-   [MC-299770](https://bugs.mojang.com/browse/MC-299770) Chunks loaded by ender pearls permanently unload upon player death even when enderPearlsVanishOnDeath is set to false
-   [MC-299837](https://bugs.mojang.com/browse/MC-299837) Running two or more /rotate commands in the same tick only applies the rotation of the last command
-   [MC-299872](https://bugs.mojang.com/browse/MC-299872) The freezing overlay flashes when a freezing player touches fire
-   [MC-299913](https://bugs.mojang.com/browse/MC-299913) The "You don't seem to have a Realm..." focusable text widget now has a black background
-   [MC-300051](https://bugs.mojang.com/browse/MC-300051) The top part of worn leggings does not render
-   [MC-300092](https://bugs.mojang.com/browse/MC-300092) F3 pie chart particle entries are missing names
-   [MC-300094](https://bugs.mojang.com/browse/MC-300094) Entities' held items no longer follow their arm movements when they have the invisibility effect
-   [MC-300100](https://bugs.mojang.com/browse/MC-300100) The “biome” debug option no longer has a space before its biome name
-   [MC-300105](https://bugs.mojang.com/browse/MC-300105) The player can drown while the game is paused
-   [MC-300108](https://bugs.mojang.com/browse/MC-300108) Villagers' and zombie villagers' clothes are incomplete
-   [MC-300113](https://bugs.mojang.com/browse/MC-300113) pack.mcmeta no longer accepts the longform object syntax in the supported;;_;;formats field
-   [MC-300121](https://bugs.mojang.com/browse/MC-300121) Interacting with a group of more than 3 connected shelves causes the game to crash
-   [MC-300122](https://bugs.mojang.com/browse/MC-300122) Certain parts of horse armor are sometimes invisible
-   [MC-300131](https://bugs.mojang.com/browse/MC-300131) The "debug.entry.currently.inF3" string is improperly capitalized
-   [MC-300136](https://bugs.mojang.com/browse/MC-300136) Held item positions are synchronized between entities of the same model in view
-   [MC-300145](https://bugs.mojang.com/browse/MC-300145) Players can use items while their inventories are open when the “Use Item/Place Block” option is set to “Toggle”
-   [MC-300146](https://bugs.mojang.com/browse/MC-300146) Exiting interfaces is incredibly difficult when the “Use Item/Place Block” option is set to “Toggle”
-   [MC-300153](https://bugs.mojang.com/browse/MC-300153) The inner cubes of slimes are sometimes invisible from the outside
-   [MC-300155](https://bugs.mojang.com/browse/MC-300155) Players can freeze while standing in powder snow despite the game being paused
-   [MC-300164](https://bugs.mojang.com/browse/MC-300164) The value of the "Sprint Window" option is not saved
-   [MC-300165](https://bugs.mojang.com/browse/MC-300165) Players are damaged when blocking attacks with shields that disable shields
-   [MC-300166](https://bugs.mojang.com/browse/MC-300166) When looking;;_;;at;;_;;block or looking;;_;;at;;_;;fluid is enabled in the debug options, FPS is impacted by server tick rate
-   [MC-300168](https://bugs.mojang.com/browse/MC-300168) All shelf variants are in the redstone section of the creative inventory
-   [MC-300180](https://bugs.mojang.com/browse/MC-300180) Debug screen text now stays on the screen in F1
-   [MC-300187](https://bugs.mojang.com/browse/MC-300187) Interacting with items with certain components in the inventory causes a crash
-   [MC-300193](https://bugs.mojang.com/browse/MC-300193) Dying and respawning within the same dimension consistently shows a loading terrain screen
-   [MC-300196](https://bugs.mojang.com/browse/MC-300196) Local Difficulty debug information flickers if it is open while GUI is hidden
-   [MC-300214](https://bugs.mojang.com/browse/MC-300214) The shadows of baby mobs are now of the same size as those of their adult counterparts
-   [MC-300235](https://bugs.mojang.com/browse/MC-300235) First number in E counter is always stuck at 0
-   [MC-300248](https://bugs.mojang.com/browse/MC-300248) Subtitles/closed captions obstruct the inventory UI
-   [MC-300275](https://bugs.mojang.com/browse/MC-300275) Pausing while riding a strider on top of lava sets the player on fire
-   [MC-300305](https://bugs.mojang.com/browse/MC-300305) When multiple people use fishing rods, an additional black line is drawn
-   [MC-300340](https://bugs.mojang.com/browse/MC-300340) Continuously clicking "Continue" on the welcome page resets the button disappearance animation progress
-   [MC-300394](https://bugs.mojang.com/browse/MC-300394) Oxidized/waxed oxidized copper golems, statue and entity versions, have the wrong pixels underneath their feet compared to their other counterparts
-   [MC-300421](https://bugs.mojang.com/browse/MC-300421) Inconsistent capitalization for F3+F5 description in F3+Q debug menu
-   [MC-300440](https://bugs.mojang.com/browse/MC-300440) Elytra consumes durability while the game is paused in singleplayer
-   [MC-300464](https://bugs.mojang.com/browse/MC-300464) The debug crosshair is rendered in third person

---

Oh, how we have yearned for the shipping room! We're back with our first snapshot release of the season, bringing you a big bundle of features from our third game drop of the year. Test the copper golem and copper chest for a tidier, livelier base, and watch your helper oxidize and turn into a statue, complete with adorable, redstone signal-emitting poses. Build functional decor using the brand-new shelves and try out copper weapons, tools and armor. To top it off, this release also includes copper horse armor and oxidizing lightning rods, in addition to a slew of bug fixes and technical changes.

Happy mining!

## New Features

-   Added Copper Chest
-   Added Copper Golem
-   Added Copper Golem Statue Block
-   Added Copper Equipment
-   Added Shelf

### Copper Chest

-   Copper Chests is a new type of chest that has waxed and oxidized variants
-   Copper Chests oxidizes over time and can be waxed like other Copper blocks
-   Copper Chests can be crafted using a Chest and Copper Ingots

### Copper Golem

-   Copper Golem is a new mob which can be spawned by placing a Jack o'Lantern or Carved Pumpkin on top of a Copper block
-   Copper Golem oxidize over time and can be waxed like Copper blocks
-   If the Copper Golem has fully oxidized and is not waxed it will turn into a Copper Golem Statue Block
    -   When turned into a Copper Golem Statue the Copper Golem will drop any item it may be holding
    -   A Copper Golem turned into a Copper Golem Statue will keep its name if named with a Name Tag
-   Copper Golem can help with sorting items into Chests
-   Interacting with the Copper Golem with an empty hand will make it drop its carried item

#### Copper Golem Item Sorting

-   If the Copper Golem is not holding an item, it will look for nearby Copper Chests to try to pick up an item
    -   The Copper Golem will look in any oxidized and waxed Copper Chest variant to pick up items
    -   It can pick up at most 16 items in a stack at a time
    -   Any item in a Copper Chest can be picked up
-   If the Copper Golem is holding an item, it will look for nearby Chests to try to place the item in
    -   The Copper Golem will look in Chests and Trapped Chests to try to place items
    -   It can place an item in a Chest if it's empty, or if it contains the same type of item that it is holding in its hand
-   The Copper Golem will visit at most 10 Chests or Copper Chests in sequence to try to pick up or place an item
-   If no matching chest is found the Copper Golem will idle for 7 seconds before trying again
-   The search area for chests from the Copper Golem's position is horizontally 32 blocks and vertically 8 blocks

### Copper Golem Statue Block

-   The Copper Golem Statue Block is a new type of decorative block which has waxed and oxidized variants
-   The Copper Golem Statue Block oxidizes over time and can be waxed like Copper blocks
-   The pose of the block can be changed by interacting with it
-   If the Copper Golem Statue Block has no oxidation when interacted with using an Axe the block will turn into a Copper Golem
-   Each pose emits a Redstone comparator signal

### Lightning Rod

-   Lightning Rods now oxidize like other Copper Blocks and the Lightning Rod on the Copper Golem

### Copper Equipment

-   Added Copper Nugget
-   Added Copper armor
    -   Added Copper Helmet, Copper Chestplate, Copper Leggings and Copper Boots
    -   Copper armor has higher durability than leather and gold
    -   Copper armor has slightly less enchantability than iron
-   Added Copper tools and weapons
    -   Added Copper Axe, Copper Hoe, Copper Pickaxe, Copper Shovel and Copper Sword
    -   Copper tools and weapons do the same amount of damage as stone, but have higher durability
    -   Copper tools work faster and last longer than stone
    -   Copper tools have higher enchantability than diamond, but slightly less than iron
-   Copper equipment can be crafted using Copper Ingots
-   Copper equipment can be repaired with Copper Ingots
-   Copper equipment turns into a Copper Nugget when smelted
-   Added Copper Horse Armor
    -   Has the same loot table and chance of generating as Iron Horse Armor
    -   Armor toughness: 4

### Shelf

-   The Shelf is a new type of decorative block which comes in the following variants:
    -   Oak
    -   Spruce
    -   Birch
    -   Jungle
    -   Acacia
    -   Dark Oak
    -   Mangrove
    -   Cherry
    -   Pale Oak
    -   Bamboo
    -   Crimson
    -   Warped
-   The Shelf can be crafted from six matching blocks of any Stripped Log, Stripped Stem or Block of Stripped Bamboo, filling the top and bottom row
    -   This recipe produces 6 Shelves
-   The Shelf can store up to 3 item stacks:
    -   Interacting with any of the 3 slots on its front swaps the player's main hand item with the content of that slot
    -   The Shelf displays all items it contains in front of it, similar to an Item Frame
-   While a Shelf is powered by Redstone, its front texture changes to reflect that it's powered; when placed next to each other, up to 3 powered Shelves will connect
    -   Interacting with a single powered Shelf swaps all its contents with the 3 rightmost items in the player's hotbar
    -   Interacting with two connected Shelves swaps their contents with the 6 rightmost items in the player's hotbar
    -   Interacting with three connected Shelves swaps their contents with all items in the player's hotbar
    -   It does not matter which of the connected Shelves the player interacts with

### Accessibility

-   The "Attack/Destroy" and "Use Item/Place Block" keybinds are now toggleable, meaning they can be set to either "Hold" or "Toggle" in the Controls screen
-   Added "Invert Mouse X" option to the Mouse Settings screen, which inverts the mouse x-axis
-   Added "Sprint Window" option to the Controls screen, which represents the time window in ticks where double-tapping the forward key activates sprint

## Changes

-   Monster Spawn Eggs now have a tooltip warning when the difficulty is set to Peaceful
    -   The mob no longer spawns for one tick when an attempt is made to use the Spawn Egg
-   The debug screen was reworked to be less cluttered and more configurable
-   Changes to world loading and the "Spawn Chunks"
-   A dimension that has any player activity, forceloaded chunks, active portals, or Ender Pearls in flight will be considered "active" and will keep processing chunks and entities
    -   Previously, this would only apply if a player was in the dimension or a chunk was forceloaded

### World Loading and Spawn Chunks

-   The concept of fixed "Spawn Chunks" has been removed
-   The game will ensure that the following chunks are fully loaded before the player joins or the server starts, in the same way as spawn chunks formerly were:
    -   Chunks loaded by the `forceload` command
    -   Chunks active due to portal activity
    -   Ender Pearls thrown in Singleplayer (Singleplayer only)
    -   The small area of chunks around the player (Singleplayer only)
    -   Chunks required to assign the global world spawn (World creation only)
-   The world loading screen now shows the chunks that the player is about to be placed into, rather than chunks loaded around world spawn
-   The loading screen additionally now includes a progress bar
    -   This progress bar accounts for all kinds of chunk loading as mentioned above

> **Developer’s Note:** _Spawn chunks incur a memory and performance cost for all players and have outlived their initial technical purpose of keeping the spawn area ready for players to quickly join into._

> _However, we also want to recognise that spawn chunks have enabled a multitude of clever contraptions and farms throughout the years, so simply removing them without having other mechanics in the game enable these designs was never an option._

> _We believe that the niche held by spawn chunks has now been filled by alternative methods of chunk loading, such as using portals or ender pearls, particularly with the changes in this snapshot to how the game loads these chunks before the world starts ticking._

### Sounds

-   Happy ghast is now audible from 64 blocks
-   Sounds for chests now plays at a lower volume
-   The volume at which a sound is played at now respects the sound source volume value
-   The "Voice/Speech" sound source has been rephrased to "Narrator/Voice"

### UI

#### Debug Screen

-   The debug screen is accessible by pressing F3, as before
-   It can now be accessed from everywhere in the game, not only when in a game world
-   It now displays less information by default
-   Added a new Debug Options screen which can be opened by pressing F3 + F5
    -   It can be used to configure which debug information should be displayed
    -   For each item you can choose if it should be turned off, visible when the debug screen (F3) is open, or it should always be visible, even when the debug screen is closed
    -   Some debug features that were previously available, like chunk border rendering or entity hitbox rendering, can now be toggled through this debug options screen
    -   Some debug features that were not previously available to the community, like Octree visualization, are now accessible through the debug options screen
    -   The state of the debug options screen is saved between the launches of the game
    -   The debug options screen has the following preset profiles:
        -   `Default` resets everything to the default state
        -   `Performance` shows simple performance metrics, including the FPS meter always visible on screen

> **Developer's Note**: _Previously the information gathering every frame to render the F3 screen had a significant performance cost. So opening the screen to check you FPS noticably dropped the FPS. Now checking your FPS in `Performance` profile should not affect game performance._

### Accessibility

-   A button leading to the Controls screen has been added to the Accessibility Settings screen
    
    -   The "Auto-Jump" option, as well as the "Sneak" and "Sprint" toggles have been removed from the Accessibility Settings screen
-   The "Show Subtitles" option has been rephrased to "Closed Captions" to more accurately describe what it does
    
-   Dye Colors now have updated icons
    
    -   The goal with these is to enhance visual cohesion across the dye set while maintaining distinct shapes to support colorblind accessibility

### Performance Improvements

-   Entity rendering order was improved for significantly better performance
    -   You’ll notice much smoother gameplay in areas with lots of mobs, like mob farms
    -   FPS won’t improve much if most of your lag comes from things other than entities, like playing with high render distance while not being near many mobs

> **Developer's Note**: _This change is quite big, and we would not be surprised if we introduced some ordering issues with this. For example, some part of some mob rendering too early or too late and is not visible or is visually broken. Please play around with this and report the bugs you encounter!_

## Technical Changes

-   Pack versions now have minor versions
-   The Data Pack version is now 82.0
-   The Resource Pack version is now 65.0

### Pack Formats

-   The pack versions for data packs and resource packs now have minor versions
    -   A minor version increment of the game's pack version is backwards-compatible, meaning all packs made for previous iterations of the same major version will keep working
-   Packs can set compatibility requirements on minor versions in case they rely on resources introduced in a minor version

#### Pack Metadata

The pack.mcmeta format has been updated:

-   The `supported_formats` field has been removed
    -   If your pack declares support for a pack version with the previous format (data pack < 82, resource pack < 65), it is still required
    -   Otherwise, it is not allowed and must be removed
-   The `pack_format` field is now optional
    -   If your pack declares support for a pack version with the previous format (data pack < 82, resource pack < 65), it is still required
-   Added required field `min_format` - specifies the minimum version supported
    -   A full version is specified as a list of two integers, e.g `[74, 1]`
    -   Specifying a single integer is interpreted as that major version, e.g. `74` is the same thing as `[74, 0]`
    -   Specifying a list of a single integer is interpreted the same as specifying that integer alone
-   Added required field `max_format` - specified the maximum version supported
    -   A full version is specified as a list of two integers, e.g `[74, 1]`
    -   Specifying a single integer is interpreted as any minor version, i.e. the minor version is `0x7fffffff`
    -   Specifying a list of a single integer is interpreted the same as specifying that integer alone
-   For overlay entries:
    -   The `formats` field has been removed
        -   If your pack includes any overlay range that includes a pack version with the previous format (data pack < 82, resource pack < 65), it is still required for all overlay definitions
        -   Otherwise, it is not allowed and must be removed
    -   Added required field `min_format` and `max_format` with the same formats the fields above with the same name for the `pack` section

## Data Pack Version 82.0

### Commands

-   The `summon` command now fails when trying to summon monsters while the difficulty is set to Peaceful

### Game Rules

-   Removed `spawnChunkRadius` game rule

### Data Components

#### `blocks_attacks` Item Component

-   If the damage reduced in an attack is `0`, for example by `angle` threshold not matching, the item can no longer get disabled in the attack, nor cause knockback due to blocking

### Loot Tables

-   Added `minecraft:entity_interact` loot table type which takes the following parameters:
    -   `target_entity`, the entity being interacted with
    -   `interacting_entity`, the optional entity that is interacting with the `target_entity`
    -   `tool`, the tool used to interact with `target_entity`
-   Added `minecraft:block_interact` loot table type which takes the following parameters:
    -   `block_state`, the block state of the block entity being interacted with
    -   `block_entity`, the optional block entity being interacted with
    -   `interacting_entity`, the optional entity that is interacting with the `block_state`
    -   `tool`, the optional tool used to interact with `block_state`
-   Fields that specify a target entity in a loot table, such as `entity_properties.entity`, can additionally target the `target_entity` and `interacting_entity` parameter types
-   Added `charged_creeper/root` loot table for drops when an entity is killed by a Charged Creeper
    -   This loot table dispatches on the mob that was killed, to the following loot tables:
        -   `charged_creeper/piglin`
        -   `charged_creeper/creeper`
        -   `charged_creeper/skeleton`
        -   `charged_creeper/wither_skeleton`
        -   `charged_creeper/zombie`
    -   Once any mob killed drops an item from this loot table, other mobs killed by the same Creeper will not drop from this loot table
-   Added `brush/armadillo` loot table for drops when an Armadillo is brushed
-   Added `gameplay/turtle_grow` loot table for drops when a Turtle grows into an adult
-   Added `harvest/beehive` loot table for drops when a Beehive or Bee Nest is harvested using Shears
-   Added `harvest/cave_vine` loot table for drops when a Cave Vine with Glowberries is harvested by interacting with it
-   Added `carve/pumpkin` loot table for drops when a Pumpkin is carved using Shears

### World Generation

-   The `initial_density_without_jaggedness` field in `noise_settings` definitions has been replaced with a `preliminary_surface_level` field
    -   `initial_density_without_jaggedness` was a 3D density function that was used to determine an approximate surface level by scanning for the first point with a density greater than `0.390625`
    -   `preliminary_surface_level` is a 2D density function that should produce the y-level of the approximate surface
    -   The `minecraft:find_top_surface` density function can be used to replicate the previous scanning

#### Density Functions

##### Added `minecraft:find_top_surface`

-   Approximates the topmost surface of a given density function
-   It scans from an upper bound to a lower bound to find the point at which the density changes from negative to positive
    -   The upper bound should be as close to the actual surface for best performance
    -   The upper bound should never be lower than the actual surface

Fields:

-   `density` - density function to approximate the surface of
-   `upper_bound` - 2D density function providing the highest possible y-value
-   `lower_bound` - integer, lowest possible y-value
-   `cell_height` - positive integer defining the grid resolution on which to scan

##### Added `minecraft:invert`

-   Resolves to `1/argument`

Fields:

-   `argument` - density function

#### Jigsaw Structures

-   The `max_distance_from_center` field may now specify a different restriction on the vertical axis from horizontal
    -   This can be specified by an object with fields:
        -   `horizontal` - required integer between `1` and `128`
        -   `vertical` - optional integer between `1` and `4096` (default: `4096`)
        -   e.g: `"max_distance_from_center": { "horizontal": 20, "vertical": 500 }`
    -   The previous format of a single inline value specifying both horizontal and vertical distance is still supported

### Tags

#### Block Tags

-   Added `#copper_chests` - all Copper Chest blocks
-   Added `#copper` - all Copper blocks
-   Added `#incorrect_for_copper_tool` - all blocks which will not drop items with a copper tool
-   Added `#copper_golem_statues` - all Copper Golem Statue blocks

#### Item Tags

-   Added `#copper_chests` - all Copper Chest block items
-   Added `#copper` - all Copper block items
-   Added `#copper_tool_materials` - all copper tool materials
-   Added `#repairs_copper_armor` - all items which repair copper armor
-   Added `#copper_golem_statues` - all Copper Golem Statue block items

## Resource Pack Version 65.0

### Block Sprites

-   Added new block sprites:
    -   `copper`
    -   `copper_left`
    -   `copper_right`
    -   `exposed_copper`
    -   `exposed_copper_left`
    -   `exposed_copper_right`
    -   `weathered_copper`
    -   `weathered_copper_left`
    -   `weathered_copper_right`
    -   `oxidized_copper`
    -   `oxidized_copper_left`
    -   `oxidized_copper_right`
    -   `acacia_shelf`
    -   `bamboo_shelf`
    -   `birch_shelf`
    -   `cherry_shelf`
    -   `crimson_shelf`
    -   `dark_oak_shelf`
    -   `jungle_shelf`
    -   `mangrove_shelf`
    -   `oak_shelf`
    -   `pale_oak_shelf`
    -   `spruce_shelf`
    -   `warped_shelf`

### Entity Sprites

-   Added new entity sprites:
    -   `copper_golem`
    -   `exposed_copper_golem`
    -   `weathered_copper_golem`
    -   `oxidized_copper_golem`
    -   `copper_golem_eyes`
    -   `exposed_copper_golem_eyes`
    -   `weathered_copper_golem_eyes`
    -   `oxidized_copper_golem_eyes`

### Item Sprites

-   Added new item sprites:
    -   `copper_axe`
    -   `copper_boots`
    -   `copper_chestplate`
    -   `copper_golem_spawn_egg`
    -   `copper_helmet`
    -   `copper_hoe`
    -   `copper_leggings`
    -   `copper_nugget`
    -   `copper_pickaxe`
    -   `copper_shovel`
    -   `copper_sword`

#### Sound Events

-   Added new sound events:
    -   `block.copper_chest.open`
    -   `block.copper_chest.close`
    -   `block.copper_chest_weathered.open`
    -   `block.copper_chest_weathered.close`
    -   `block.copper_chest_oxidized.open`
    -   `block.copper_chest_oxidized.close`
    -   `entity.copper_golem.step`
    -   `entity.copper_golem.hurt`
    -   `entity.copper_golem.death`
    -   `entity.copper_golem.spin`
    -   `entity.copper_golem_weathered.step`
    -   `entity.copper_golem_weathered.hurt`
    -   `entity.copper_golem_weathered.death`
    -   `entity.copper_golem_weathered.spin`
    -   `entity.copper_golem_oxidized.step`
    -   `entity.copper_golem_oxidized.hurt`
    -   `entity.copper_golem_oxidized.death`
    -   `entity.copper_golem_oxidized.spin`
    -   `item.armor.equip_copper`
    -   `entity.copper_golem.spawn`
    -   `entity.copper_golem.no_item_get`
    -   `entity.copper_golem.no_item_not_get`
    -   `entity.copper_golem.item_drop`
    -   `entity.copper_golem.item_no_drop`
    -   `entity.copper_golem_become_statue`
    -   `block.copper_golem_statue.break`
    -   `block.copper_golem_statue.place`
    -   `block.copper_golem_statue.hit`
    -   `block.copper_golem_statue.fall`
    -   `block.copper_golem_statue.step`
    -   `block.shelf.activate`
    -   `block.shelf.deactivate`
    -   `block.shelf.multi_swap`
    -   `block.shelf.place_item`
    -   `block.shelf.single_swap`

### Shaders & Post-process Effects

> **Developer's Note**: _Although it is possible in Resource Packs, overriding Core Shaders is considered as unsupported and not an intended Resource Pack feature. These shaders exist as part of the internal implementation of the game, and as such, may change at any time as the game's internals evolve. We understand that overriding Core Shaders is used for very cool Resource Pack features, many of which lack supported alternatives. We would like to provide better, supported alternatives in the future._

#### Changes to Full Screen Passes

-   The following vertex shaders have been removed, and replaced by `core/screenquad.vsh`:
    -   `core/blit_screen.vsh`
    -   `post/blit.vsh`
    -   `post/blur.vsh`
    -   `post/invert.vsh`
    -   `post/sobel.vsh`
    -   `post/screenquad.vsh`
-   Vertex shaders for post-processing effects, as well as lightmap generation and full screen blits are no longer are passed the `Position` attribute, and instead must assign vertex coordinates by `gl_VertexID`
-   These passes furthermore are only executed with 3 vertices, instead of a full quad

## Fixed bugs in 25w31a

-   [MC-46634](https://bugs.mojang.com/browse/MC-46634) Thunder volume is not affected by weather volume settings
-   [MC-73881](https://bugs.mojang.com/browse/MC-73881) Summoning monsters in peaceful difficulty spawns monster for 1 tick
-   [MC-89142](https://bugs.mojang.com/browse/MC-89142) Changing jump key to "Enter" let player jump after completing chat line
-   [MC-94610](https://bugs.mojang.com/browse/MC-94610) Missing loot table entries for mob heads from charged creepers
-   [MC-98200](https://bugs.mojang.com/browse/MC-98200) All sound sliders except master are ignored by high-volume /playsound
-   [MC-183776](https://bugs.mojang.com/browse/MC-183776) After switching game modes using F3+F4, you need to press F3 twice to toggle the debug screen
-   [MC-192907](https://bugs.mojang.com/browse/MC-192907) The F3 debug menu cannot be toggled while chat is open
-   [MC-196443](https://bugs.mojang.com/browse/MC-196443) When reducedDebugInfo is true, hitting F3+B and F3+G would still tell the player in chat that they are being toggled, despite nothing happening
-   [MC-197247](https://bugs.mojang.com/browse/MC-197247) Using F3+D to clear pending lines keeps the previous delay for a new message
-   [MC-203401](https://bugs.mojang.com/browse/MC-203401) Double-tapping forward button to sprint cannot be disabled/reconfigured
-   [MC-220842](https://bugs.mojang.com/browse/MC-220842) Opening game mode switcher while spectating a mob with shader effect toggles the effect
-   [MC-234479](https://bugs.mojang.com/browse/MC-234479) You can invite the same player multiple times to your realm even if they've already received an invitation or have already joined it
-   [MC-235780](https://bugs.mojang.com/browse/MC-235780) The beacon GUI incorrectly displays the "Beacon" tooltip when the mouse cursor is held over the "Done" or "Cancel" buttons
-   [MC-237016](https://bugs.mojang.com/browse/MC-237016) The chat delay function continues to print messages despite the game being paused
-   [MC-237843](https://bugs.mojang.com/browse/MC-237843) Players can be idle kicked whilst viewing the end credits
-   [MC-259692](https://bugs.mojang.com/browse/MC-259692) Sneaking and sprinting states are activated or toggled unexpectedly when releasing their input keys while an interface was just previously closed
-   [MC-259935](https://bugs.mojang.com/browse/MC-259935) It can snow even when biome precipitation is set to NONE
-   [MC-260822](https://bugs.mojang.com/browse/MC-260822) The "Done" and "Cancel" buttons within the beacon GUI no longer display tooltips when the mouse cursor is held over them
-   [MC-261387](https://bugs.mojang.com/browse/MC-261387) Redundant block;;_;;predicate;;_;;filter check in mangrove tree placement
-   [MC-262000](https://bugs.mojang.com/browse/MC-262000) Unused texture: misc/white.png
-   [MC-263597](https://bugs.mojang.com/browse/MC-263597) The ender dragon's respawning noise cannot be turned down by the Hostile Mobs volume slider
-   [MC-269838](https://bugs.mojang.com/browse/MC-269838) Pumpkin seeds drop from sheared pumpkins is hardcoded
-   [MC-269839](https://bugs.mojang.com/browse/MC-269839) Honeycomb drop from sheared bee nests and beehives is hardcoded
-   [MC-270918](https://bugs.mojang.com/browse/MC-270918) Loot tables for mob heads are missing copy;;_;;components loot function for custom;;_;;name
-   [MC-275244](https://bugs.mojang.com/browse/MC-275244) Setting "width;;_;;smoothness" in file configured;;_;;carver to 0 causes the game to freeze or crash
-   [MC-275432](https://bugs.mojang.com/browse/MC-275432) Subtitles are difficult to see within screens
-   [MC-276568](https://bugs.mojang.com/browse/MC-276568) Mipmapped versions of the armor trims atlas are generated
-   [MC-276629](https://bugs.mojang.com/browse/MC-276629) Glow berries drop from cave vines appears to be hardcoded
-   [MC-276759](https://bugs.mojang.com/browse/MC-276759) Scute drop from brushing armadillos is hardcoded
-   [MC-277447](https://bugs.mojang.com/browse/MC-277447) Minecraft generates mipmapped textures for chests, but does not use them
-   [MC-277450](https://bugs.mojang.com/browse/MC-277450) Minecraft generates mipmapped textures for shulker boxes, but does not use them
-   [MC-277470](https://bugs.mojang.com/browse/MC-277470) Minecraft generates mipmapped textures for beds, but does not use them
-   [MC-277471](https://bugs.mojang.com/browse/MC-277471) Minecraft generates mipmapped textures for signs, but does not use them
-   [MC-277473](https://bugs.mojang.com/browse/MC-277473) Minecraft generates mipmapped textures for decorated pots, but does not use them
-   [MC-277481](https://bugs.mojang.com/browse/MC-277481) Minecraft generates mipmapped textures for banners, but does not use them
-   [MC-277483](https://bugs.mojang.com/browse/MC-277483) Minecraft generates mipmapped textures for shields, but does not use them
-   [MC-277770](https://bugs.mojang.com/browse/MC-277770) Processor type block;;_;;age always modifies slabs property "type" to bottom
-   [MC-278965](https://bugs.mojang.com/browse/MC-278965) Cherry Grove is not part of the #stronghold;;_;;biased;;_;;to tag
-   [MC-279793](https://bugs.mojang.com/browse/MC-279793) Mounting horses, donkeys, mules, zombie horses, skeleton horses, and camels no longer forces you to face forward
-   [MC-289348](https://bugs.mojang.com/browse/MC-289348) Ender pearls stop loading chunks in The End after relog, if there are no players in that dimension
-   [MC-297593](https://bugs.mojang.com/browse/MC-297593) Cauldrons now apply the effect of the substance they're filled with when contacted from the underside
-   [MC-298274](https://bugs.mojang.com/browse/MC-298274) Certain invalid commands give "see below for error" with no additional information
-   [MC-298732](https://bugs.mojang.com/browse/MC-298732) The cursor is no longer shown at the end of lines that aren't the final one
-   [MC-298805](https://bugs.mojang.com/browse/MC-298805) Axes disable shields even when the shield does not block the attack
-   [MC-298883](https://bugs.mojang.com/browse/MC-298883) The active world slot is not highlighted when selected via TAB navigation in Realms
-   [MC-299450](https://bugs.mojang.com/browse/MC-299450) You can no longer double-click to select characters in the book and quill interface
-   [MC-299451](https://bugs.mojang.com/browse/MC-299451) Pages in book and quills are no longer automatically focused when switching pages
-   [MC-299566](https://bugs.mojang.com/browse/MC-299566) The cursor in the book and quill interface is positioned too far to the left
-   [MC-299628](https://bugs.mojang.com/browse/MC-299628) Mounted players/mobs trigger sculk sensors on world load
-   [MC-299782](https://bugs.mojang.com/browse/MC-299782) Zombie villagers saved in jigsaw structures forget their biome variant and profession upon world generation
-   [MC-299896](https://bugs.mojang.com/browse/MC-299896) You can switch the worlds of expired realms to empty slots, which misleadingly prompts world creation despite no active realms subscription
-   [MC-300021](https://bugs.mojang.com/browse/MC-300021) Some elements of the villager interface are now rendered above the cursor item

---

Summer is finally here in Stockholm on this fine Snapshot Tuesday - but it seems some of our developers missed those beautiful, gray, rainy skies far too much and absolutely insisted on giving the clouds in Minecraft a new look. What a de-light!

## New Features

-   Updated the pattern of clouds in the sky
-   Horses, Donkeys, and Mules can now be fed carrots to heal, grow, and improve their temper

### Music and Sound

-   Added a new sound for when a Lead snaps
-   Added new custom sounds for shearing Saddles, Horse Armor, and Carpets from Llamas

## Technical Changes

-   The Data Pack version is now 78
-   The Resource Pack version is now 62

## Data Pack Version 78

### Dialogs

-   `run_command` click actions will now correctly close dialogs and book screens even if the command does not require elevated permissions
-   Dialogs should now correctly return to the previous non-dialog screen on close in all cases
-   If a new dialog is received by the client while warning screen is visible, it will not replace it, but when user clicks the "Back" button, the new dialog will be restored instead
-   The sizes of elements in dialogs are now restricted:
    -   buttons - between `1` and `1024` (inclusive)
    -   `minecraft:plain_message` dialog body - between `1` and `1024` (inclusive)
    -   `minecraft:item` dialog body
        -   `width` of `description` - between `1` and `1024` (inclusive)
        -   `width` - between `1` and `256` (inclusive)
        -   `height` - between `1` and `256` (inclusive)
    -   `minecraft:text` input control - between `1` and `1024` (inclusive)
    -   `minecraft:single_option` input control - between `1` and `1024` (inclusive)
    -   `minecraft:number_range` input control - between `1` and `1024` (inclusive)

#### `minecraft:text` Input Control

-   `max_length` - maximum length of input, positive integer with default of 32
-   `multiline` - if present, allows users to input multiple lines, optional object with fields:
    -   `max_lines` - if present, limits maximum lines, optional positive integer
    -   `height` - height of input, optional integer in range `1` to `512`
        -   If this field is omitted, but `max_lines` is present, the height will be chosen to fit the maximum number of lines
        -   If this and `max_lines` are both omitted, it will default to a height that fits 4 lines

#### `minecraft:number_range` Input Control

-   The `steps` field has been replaced with a new field:
    -   `step` - step size, optional positive float
        -   If present, only values of `initial + <any integer> * step` will be allowed
        -   If absent, any value from range the is allowed
-   `initial` - if not specified, now defaults to the middle of the range

#### `minecraft:multi_action_input_form` Dialog Type

-   Added new field `columns` - positive integer describing number of columns, default: `2`

## Resource Pack Version 62

### Sounds

-   Added `entity/leashknot/break` for when a Lead snaps
-   The following sounds have been renamed:
    -   `entity/leashknot/break1` -> `entity/leashknot/unleash1`
    -   `entity/leashknot/break2` -> `entity/leashknot/unleash2`
    -   `entity/leashknot/break3` -> `entity/leashknot/unleash3`
    -   `entity/leashknot/place1` -> `entity/leashknot/leash1`
    -   `entity/leashknot/place2` -> `entity/leashknot/leash2`
    -   `entity/leashknot/place3` -> `entity/leashknot/leash3`
-   The following sounds have been added for shearing Saddles, Horse Armor, and Carpets from Llamas
    -   `mob/horse/armor_unequip`
    -   `mob/horse/saddle_unequip`
    -   `mob/llama/unequip`

## Fixed bugs in 25w21a

-   [MC-36696](https://bugs.mojang.com/browse/MC-36696) Clicking on the statistics button on the menu screen advances the game by 1 tick
-   [MC-112730](https://bugs.mojang.com/browse/MC-112730) Beacon beam and structure block render twice per frame
-   [MC-236464](https://bugs.mojang.com/browse/MC-236464) Beacon beams emitted from below the player are invisible after reloading chunks
-   [MC-258336](https://bugs.mojang.com/browse/MC-258336) Frost Walker causes frequent visual corruption near chunk borders on Threaded and Semi-Blocking Chunk Builder
-   [MC-296337](https://bugs.mojang.com/browse/MC-296337) Minecarts cause memory usage increases and crashes
-   [MC-297264](https://bugs.mojang.com/browse/MC-297264) Cat breeds are not seed based anymore
-   [MC-297336](https://bugs.mojang.com/browse/MC-297336) Experience orbs from thrown bottles o' enchanting are very prone to getting stuck inside blocks when thrown against a corner
-   [MC-297615](https://bugs.mojang.com/browse/MC-297615) Untranslatable error message when trying to join a closed Realm
-   [MC-297803](https://bugs.mojang.com/browse/MC-297803) The string "menu.custom;;_;;screen;;_;;info.contents" misspells "personal" as "pesonal"
-   [MC-297806](https://bugs.mojang.com/browse/MC-297806) music.game.swamp.labyrinthine misspells the song's title
-   [MC-297808](https://bugs.mojang.com/browse/MC-297808) music.game.oxygene is missing the grave accent sign
-   [MC-297812](https://bugs.mojang.com/browse/MC-297812) Bold text is rendered differently than in previous versions
-   [MC-297813](https://bugs.mojang.com/browse/MC-297813) Amos Roddy is not listed in the credits
-   [MC-297823](https://bugs.mojang.com/browse/MC-297823) music.game.mice;;_;;on;;_;;venus is using wrong capitalization
-   [MC-297845](https://bugs.mojang.com/browse/MC-297845) Clicking the Statistics button in Singleplayer does not play the button click sound until you resume playing
-   [MC-297846](https://bugs.mojang.com/browse/MC-297846) The music toast flashes in the pause menu when the Music slider is set to zero
-   [MC-297875](https://bugs.mojang.com/browse/MC-297875) Text shadow from underlined text overlaps the text below it in chat messages
-   [MC-297888](https://bugs.mojang.com/browse/MC-297888) Text no longer renders in a consistent order across different fonts
-   [MC-297917](https://bugs.mojang.com/browse/MC-297917) The client stops responding when showing a dialog with an extremely wide button
-   [MC-297977](https://bugs.mojang.com/browse/MC-297977) Dialog columns layout has extra spacing between the grid and the overflow linear layout

---

This week we’re releasing the final features from this year’s second drop. Today’s snapshot brings craftable saddles as well as some stunning tracks, courtesy of Amos Roddy. We have also added an option to show which song is currently playing in the in-game pause menu.

## New Features

-   Added a new Music Disc with the track "Tears" by Amos Roddy
-   Made Saddles craftable and shearable
-   Updated the main screen panorama

### Music

-   Added the following new music tracks by Amos Roddy to Cherry Groves, Forest, Desert, Grove, and Lush Cave Biomes:
    -   Below and Above
    -   Broken Clocks
    -   Fireflies
    -   Lilypad
    -   O's Piano
-   The same songs have been added to the menu music rotation

### Saddles Updates

#### Crafting Saddles

-   Saddles can now be crafted with 3 Leather and 1 Iron Ingot
-   Recipe unlocks when a player picks up their first Leather

#### Removing Saddles and Equipment

-   Saddles, Horse Armor, Harnesses and Carpets can now be removed from the mobs they can be equipped on by using Shears
-   Saddles, Horse Armor, Harnesses and Carpets cannot be removed by using Shears while the mob has a rider
-   Saddles, Horse Armor, Harnesses and Carpets cannot be removed by using Shears while the player is crouching
-   Saddles cannot be removed from Ravagers using Shears
-   Dispensers with Shears cannot remove Saddles, Horse Armor, Harnesses or Carpets equipped on mobs

#### Loot Table Changes

Some loot tables have had saddles removed from them and replaced with 1-5 Leather:

-   Monster Room chests
-   Ancient City chests
-   Desert Pyramid chests
-   Jungle Pyramid chests
-   Stronghold altar chests

## Changes

-   Fog is now applied to 3d hud elements such as first person player hands and items in hands
-   The Ghast now drops the "Tears" Music Disc when killed by a Fireball deflected by a Player
-   The fix to [MC-3697](https://bugs.mojang.com/browse/MC-3697) has been partially reverted. Decorative hanging entities such as paintings and item frames are now immune to explosions from submerged TNT while items and armor stands are once again vulnerable to them
-   Updates to music and sound
-   Rain and thunder weather is somewhat less foggy now
-   Rain fog affects interiors less
-   Saddles are now craftable and can be crafted with 3 Leather and 1 Iron Ingot
-   Saddles, Horse Armor, and Carpets can now be removed from the mobs they can be equipped on by using Shears
-   Some loot tables have been modified to give Leather instead of Saddles
-   The Dried Ghast Block no longer breaks if water flows into it

### Music and Sound

-   Music now plays even when the game is paused
-   Added an option to the Music & Sound settings that allows players to change how frequently music plays while in a game world
-   Added an option to the Music & Sound settings that enables a music toast to be shown whenever a song starts playing
    -   With this option enabled, the song that is currently playing will be seen at all times in the top left corner of the in-game Pause Menu

### Realms

-   Added the Realms logo to the Realms loading screens
-   Added region information when connecting to a Realm

## Technical Changes

-   The Data Pack version is now 77
-   The Resource Pack version is now 61
-   "Command Syntax" report now contains information about required permission level

## Data Pack Version 77

-   New optional fields `can_be_sheared` and `shearing_sound` have been added to the `equippable` item component
-   Added a way to display very simple dialogs to users
-   Added `custom` - a new `click_event` action type for text components
-   Users will now be prompted for confirmation before executing a command from the `run_command` click action in books and chat if the command can't be parsed or requires elevated permissions (i.e. higher than 0)

### Dialogs

-   Added a way to display simple modal dialogs to a user
-   Dialogs are stored in a `minecraft:dialog` registry, but can also be defined inline
-   Dialogs are an experimental feature
-   To avoid user confusion, dialog screens are marked with a warning sign next to the title
    -   Clicking on this warning leads to a dialog that explains to user that this screen is provided by custom content
    -   It also gives user an option to leave current world to avoid them being locked in infinite loop of dialogs
-   Dialogs can be displayed by server in `play` and `configuration` connection phases
    -   However, only inline registries are allowed in `configuration`, since registries are not yet available in that phase
-   Dialogs always close after user selects any action
-   Dialogs by default will also close after Escape key is pressed
    -   When this happens, dialog will run action specific to dialog type described as "exit action" below
    -   This behavior is configurable
-   When dialog screen is closed, game goes back to previously displayed non-dialog screen or back to gameplay
    -   That means that new dialogs always replace already opened ones, if any
-   Dialogs screens will pause the game in singleplayer mode
-   Dialogs can be configured to be accessible from Pause menu
    -   This replaces and expands "Server Links" button added in previous versions
-   Most dialogs follow a common layout, however exact contents depend on type:
    -   Header with title and warning button
    -   Body elements (labels, inputs, buttons and submit actions), scrollable if needed
    -   Optional footer, contains main buttons and submit actions

> **Developer's Note**: _Dialogs are not supposed to fully describe any in-game UI, but just to allow custom content to display simple messages and get input from users. This feature is intentionally limited to match that use case._

#### Dialog Description Format

-   Dialogs are stored in `minecraft:dialog` registry that can be provided by a datapack

Fields:

-   `type` - one of dialog types from `minecraft:dialog_type` registry
-   `<type-specific>` - see below

##### Common Dialog Fields

-   Most dialog types share some fields. To avoid duplication, they are listed in this section

Fields:

-   `title` - screen title, text component
    -   Should be always visible on screen, no matter the specific type
-   `external_title` - name to be used for a button leading to this dialog (for example from Pause screen), optional text component
    -   If not present, `title` will be used instead
-   `body` - optional list of body elements or a single element, see below
-   `can_close_with_escape` - can dialog be dismissed with Escape key, default `true`

##### Common Button Data

-   Most actions in dialog types share following fields that describe apperance of a button associated with that action:
-   `label` - text component
-   `tooltip` - optional text component to display when button is highlighted or hovered over
-   `width` - width of the button, positive integer with default `150`

#### Click Action

-   Common object used in dialogs to represent clickable action on a dialog
-   Fields:
    -   Common button data (see above)
    -   `on_click` - optional click event (same format as `click_event` on text components)
        -   If not present, clicking button will simply close screen without any action

##### Dialog Types

###### `minecraft:notice`

-   A simple screen with one action in footer
-   Exit action: same as `action`

Fields:

-   Common dialog fields (see above)
-   `action` - click action (see above), defaults to button with `gui.ok` label and no action or tooltip

###### `minecraft:confirmation`

-   A simple screen with two actions in footer
-   Exit action: same as `no` action

Fields:

-   Common dialog fields (see above)
-   `yes` - click action (see above) for positive outcome
-   `no` - click action (see above) for negative outcome

###### `minecraft:multi_action`

-   A scrollable list of actions arranged in columns
-   Screen also has button in footer that runs exit action and closes the screen
    -   Label will be `gui.cancel` if dialog has defined exit action and `gui.back` if it has no side effects
-   Exit action: defined in `on_cancel` field

Fields:

-   Common dialog fields (see above)
-   `actions` - non-empty list of click actions (see above)
-   `on_cancel` - optional click event (same format as `click_event` on text components)
-   `columns` - positive integer describing number of columns, default: `2`

###### `minecraft:server_links`

-   A scrollable list of links received from server in `minecraft:server_links` packet, arranged in columns
-   Screen also has button in footer that runs exit action and closes the screen
    -   Label will be `gui.cancel` if dialog has defined exit action and `gui.back` if it has no side effects
-   Note: this is a replacement for previous Server Links screen, but now with an additional body
-   Exit action: defined in `on_cancel` field

Fields:

-   Common dialog fields (see above)
-   `on_cancel` - optional click event (same format as `click_event` on text components)
-   `columns` - positive integer describing number of columns, default: `2`
-   `button_width` - width of buttons in the list, positive integer with default `150`

###### `minecraft:dialog_list`

-   A scrollable list of buttons leading directly to other dialogs, arranged in columns
    -   Titles of those buttons will be taken from `external_title` fields of targeted dialogs
-   Screen also has button in footer that runs exit action and closes the screen
    -   Label will be `gui.cancel` if dialog has defined exit action and `gui.back` if it has no side effects
-   Exit action: defined in `on_cancel` field

Fields:

-   Common dialog fields (see above)
-   `dialogs` - dialog, a list of dialogs or a dialog tag
-   `on_cancel` - optional click event (same format as `click_event` on text components)
-   `columns` - positive integer describing number of columns, default: `2`
-   `button_width` - width of buttons in the list, positive integer with default `150`

###### `minecraft:simple_input_form`

-   A screen that accepts user inputs
-   Has a single submit action with in a footer
-   Exit action: none (submitting data closes screen, but does not run any action outside of sending data to server)

Fields:

-   Common dialog fields (see above)
-   `inputs` - non-empty list of inputs controls, see below
-   `action` - submit action, see below

###### `minecraft:multi_action_input_form`

-   A screen that accepts user inputs
-   Can have multiple submit actions
-   Has no footer, submit actions are appended to a body
-   Exit action: none (submitting data closes screen, but does not run any action outside of sending data to server)

Fields:

-   Common dialog fields (see above)
-   `inputs` - non-empty list of inputs controls, see below
-   `actions` - non-empty list of submit actions, see below

##### Dialog Body Types

-   All dialogs have a list of body elements describing contents between title and actions or inputs

Fields:

-   `type` - one of dialog body types from `minecraft:dialog_body_type` registry
-   `<type-specific>` - see below

###### `minecraft:plain_message`

-   A multiline label

Fields:

-   `contents` - text component
-   `width` - maximum width of message, positive integer with default `200`

###### `minecraft:item`

-   Item with optional description
    -   If description is present, it will be rendered to the right of item
-   Item will be rendered as if it was in inventory slot
-   Item is not scaled even if `width` and `height` are set to values other than default

Fields:

-   `item` - item stack with count
-   `description` - optional object with fields:
    -   `contents` - text component
    -   `width` - maximum width of contents, positive integer with default `200`
    -   Can also be just be text component
-   `show_decorations` - if `true`, count and damage bar will be rendered over the item, default: `true`
-   `show_tooltip` - if `true`, item tooltip will show up when item is hovered, default: `true`
-   `width` - horizontal size of element, default: `16`
-   `height` - vertical size of element, default: `16`

##### Input Control Types

-   Input dialog uses a set of controls to accept user input
-   When submitted, current value of input will be converted to a string and sent to the server as described by Submit Action section below

Fields:

-   `type` - one of input control types from `minecraft:input_control_type` registry
-   `key` - string identifier of value used when submitting data, must be a valid template argument (letters, digits and `_`)
-   `<type-specific>` - see below

###### `minecraft:text`

-   Simple text input
-   Sends current contents without modification

Fields:

-   `width` - width of input, positive integer with default: `200`
-   `label` - a text component to be displayed to the left of control
-   `label_visible` - controls label visibility, default: `true`
-   `initial` - initial contents, default: `""` (empty)

###### `minecraft:boolean`

-   A plain checkbox with a label

Fields:

-   `label` - a text component to be displayed to the right of control
-   `initial` - an initial value, default: `false` (i.e. unchecked)
-   `on_true` - a string value to send when control is checked, default: 'true'
-   `on_false` - a string value to send when control is unchecked, default: 'false'

###### `minecraft:single_option`

-   A button that cycles between a set of options when clicked
-   Sends value associated with currently selected preset

Fields:

-   `label` - a text component to be displayed on the button
-   `label_visible` - if `true`, label will be incorporated into button text, default: `true`
-   `width` - width of button, positive integer with default: `200`
-   `options` - a list of objects with fields:
    -   `id` - a string value to send on submit
    -   `display` - a text component to display on button, optional (if not present, `id` is used)
    -   `initial` - an optional boolean flag that selects initial option (only one option can have it set to `true`)
    -   Additionaly list might also contain plain string - in that case it's equivalent to a single entry with field `id` set to that string and other fields set to default

###### `minecraft:number_range`

-   A slider for picking a numeric value out of some range
-   Sends currently selected value
    -   Whole numbers will be sent without decimal point

Fields:

-   `label` - a text component to be used as a slider label
-   `label_format` - a translation key to be used for building label (first argument is contents of `label` field, second argument is current value), default: `options.generic_value`
-   `width` - width of input, positive integer with default: `200`
-   `start` - start value (when slider is in leftmost position) (inclusive), float
-   `end` - end value (when slider is in rightmost position) (inclusive), float
-   `steps` - number of increments, positive integer
    -   Note: value of `1` means that slider will have two positions (start and end)
-   `initial` - initial value of slider, rounded down nearest step, must be within range, defaults to `min`

##### Submit Actions

-   Every submit action on input dialog has a button associated with it
-   When one of those buttons is clicked, values of all inputs will be collected and sent to a server using one of methods described below
-   `id` field of a submit action will be included as an input with key `action`
-   Submit action fields:
    -   Common button data (see above)
    -   `id` - string identifier of an action
    -   `on_submit` - submit method to run when button is clicked, object with following fields:
        -   `type` - one of submit method types from `minecraft:submit_method_type` registry
        -   `<type-specific>` - see below
-   Note: server does not validate individual values as they arrive as filled commands or custom payloads

##### Submit Method Types

###### `minecraft:command_template`

-   This method will build a command using a provided macro template and request the server to run it (same as `minecraft:run_command` click event)
-   If the command requires permission higher than `0` (when any operator permissions are required), a confirmation dialog will be shown
-   Macro will be expanded with values from input
    -   For example, if macro is `some_command $(action)`, `action` parameter will be expanded to `id` field of a submit action
    -   Inputs not used in macro will be ignored, while macro parameters not matching any inputs will be replaced with an empty string

Fields:

-   `template` - a string with a macro template to be interpreted as a command

###### `minecraft:custom_template`

-   This method will build a custom server click action using a provided macro template and send it to the server (same as `minecraft:custom` click event)
-   Macro will be expanded with values from input
    -   Inputs not used in macro will be ignored, while macro parameters not matching any inputs will be replaced with an empty string

Fields:

-   `template` - a string with a macro template to be used as a payload
-   `id` - namespaced ID

###### `minecraft:custom_form`

-   This method will build a custom server click action from all values and request the server to run it (same as `minecraft:custom` click event)
-   Format:
    -   keys are separated from values with horizontal tabulation (`U+0009`) character
    -   key-value entries are separated with line feed (`U+000A`) character
    -   If characters `U+0009` and `U+000A` are present in any key or value, they will be escaped to `;;t;;` and `;;n;;`

Fields:

-   `id` - namespaced ID

##### Built-in dialogs

The built-in datapack contains some custom dialogs to provide customization of specific screens used by client

###### `minecraft:server_links`

-   Replacement for previously existing "Server Links" screen
-   Meant to simplify migration for servers that used this feature previously

###### `minecraft:custom_options`

-   Shows contents of `minecraft:pause_screen_additions` tag (see below)
-   Lets user select a specific dialog if this tag contains multiple entries
-   Note: Since this tag is meant for interoperability, any content that replaces this dialog should be careful to not hide other dialog providers

#### Dialog Command

-   New command has been added to show dialog to clients

Syntax:

-   `dialog show <targets> <dialog>` - show dialog to player(s)
    -   `<targets>` - player name, UUID or a player selector
    -   `<dialog>` - a namespaced ID from `minecraft:dialog` registry or inline dialog value as described above
    -   Returns number of players in `targets` argument
-   `dialog clear <targets>` - clean dialog for player(s), if they have any visible
    -   `<targets>` - player name, UUID or a player selector
    -   Returns number of players in `targets` argument

#### Pause Screen Configuration

-   A data pack can request some of the available dialogs to be accessible from Pause screen
-   This feature replaces "Server Links" button and is placed on Pause screen according to the same rules
-   Buttons leading to dialogs exposed in this way will use label described in `external_title` field
-   This feature is configured by `minecraft:pause_screen_additions` dialog tag:
    -   If this tag is not specified or is empty but the server has sent `server_links` packet, tag will be handled as if it contained `minecraft:server_links` dialog
        -   Note: this matches previous Server Links feature behavior
        -   If this dialog is removed, the tag remains empty
    -   If this tag is still empty, button is not visible ("Send Feedback" and "Report Bugs" buttons are visible instead)
    -   If this tag has a single element, Pause screen button will lead directly to this dialog
    -   If this tag has multiple elements, Pause screen button will lead to `minecraft:custom_options` which (by default) lets user select one of the tag elements
        -   If this dialog is removed, button is not visible

### Text Components

#### Click Events

-   New click action `minecraft:custom` has been added
    -   When user clicks a component with this click action, client will send a dedicated packet `minecraft:custom_click_action` to a server
    -   The intended use is as an alternative for `run_command` to be used by modded servers without worrying about having to add custom commands
    -   This packet has no functionality on vanilla servers
    -   Fields:
        -   `id` - namespaced ID
        -   `payload` - optional string field

#### Dialog Click Event

-   New action `show_dialog` has been added
    -   When user clicks this component, a dialog will be opened for them
    -   Fields:
        -   `dialog` - a namespaced ID from `minecraft:dialog` registry or inline dialog value as described above

### Attributes

#### Ghasts `flying_speed` attribute

-   Ghasts now have a `flying_speed` attribute that affects their flying speed

### Data Components

#### `equippable` Item Component

-   Added new optional field: `can_be_sheared` (boolean)
    -   If `true`, players can use Shears to remove this equippable item from a target mob by right-clicking, provided all other shearing conditions are satisfied
    -   If not specified, it defaults to `false`
-   Added new optional field: `shearing_sound` (sound event)
    -   It's a sound event that plays when the equippable item is sheared
    -   If not specified, it defaults to the `item.shears.snip` sound event

## Resource Pack Version 61

### UI Sprites

-   Added `icon/music_notes` and `toast/now_playing` sprites

## Fixed bugs in 25w20a

-   [MC-97423](https://bugs.mojang.com/browse/MC-97423) Horse temporarily stuck in jump animation if dismounted
-   [MC-103511](https://bugs.mojang.com/browse/MC-103511) Sound/Song stops playing after adjusting the volume
-   [MC-118081](https://bugs.mojang.com/browse/MC-118081) Sounds don't pause when game is paused on some UI screens
-   [MC-248682](https://bugs.mojang.com/browse/MC-248682) Translucent blocks moved by pistons aren't affected by fog correctly
-   [MC-248688](https://bugs.mojang.com/browse/MC-248688) Falling translucent blocks aren't affected by fog correctly
-   [MC-269744](https://bugs.mojang.com/browse/MC-269744) Out of memory crash when using a preset with a large layer
-   [MC-276665](https://bugs.mojang.com/browse/MC-276665) Music is never turning on when it's toggled in the menu
-   [MC-277991](https://bugs.mojang.com/browse/MC-277991) The 2 brightest pixel colors on pale oak boat items are still switched
-   [MC-296311](https://bugs.mojang.com/browse/MC-296311) TNT touching water will destroy blocks and damage entities but will ignore decorative entities
-   [MC-296836](https://bugs.mojang.com/browse/MC-296836) Happy ghast saddle model doesn't change when lead is broken by exceeding max range.
-   [MC-296843](https://bugs.mojang.com/browse/MC-296843) Clouds are rendered incorrectly on some Mac systems
-   [MC-297524](https://bugs.mojang.com/browse/MC-297524) Connection with realm gives weird HTML text
-   [MC-297535](https://bugs.mojang.com/browse/MC-297535) The enchantment glint doesn't render in first person or the inventory
-   [MC-297544](https://bugs.mojang.com/browse/MC-297544) Rain fog does not affect 1st person hand or items
-   [MC-297570](https://bugs.mojang.com/browse/MC-297570) Block breaking overlay not affected by environmental fog

---

Take aim for this snapshot! It's a bit smaller this week, and you might want to train a bit more to learn the new projectile mechanics! And while you are here, why not enjoy some misty peaks at a distance!

## Changes

-   Projectiles target tolerance margin now changes over time
-   Fog was tweaked for improved atmospheric perspective
-   It now becomes foggier when it rains
-   The test framework will no longer try to restart running tests after a server restart

### Projectile Targeting

-   Projectiles now have a target tolerance margin that changes over time
    -   Previously, all projectiles had a fixed 0.3 blocks target tolerance margin
    -   Now, all projectiles start with no margin for the first two ticks of their flight
    -   After that, the target margin will expand by 0.05 blocks per tick until it reaches the previous 0.3 blocks margin
    -   This allows for better precision close to the shooting player or entity, while still allowing for some collision leeway when the projectile is further away

## Technical Changes

-   The Data Pack version is now 76
-   `--quickPlaySingleplayer` command line argument can now be used without an identifier to launch into the last played world

## Data Pack Version 76

-   The scale attribute for the Happy Ghast now has a limit of `1.0`

### Entity Data

#### `tnt`

-   The entity that primed the TNT is now stored in an optional `owner` field (UUID of Living entity)

#### `vex`

-   The owner of a Vex is now stored in an optional `owner` field (UUID of Mob)

## Resource Pack Version 60

-   Panorama textures must now all be the same size, and square
-   Sounds for the Dried Ghast Block have been changed

### UI Sprites

-   The Mob Effect atlas has been removed, and sprites in the `textures/mob_effect/` folder are now included within the GUI atlas
    -   This means Mob Effect sprites now support GUI sprite scaling properties

### Shaders & Post-process Effects

#### Shader fog changes

-   The fog is now split into environmental and render-distance-based
-   Previously both those concepts were mixed in the same uniforms
-   Environmental fog is supposed to represent the "fogginess" of the environment the player is in: lava, water, and now also atmosphere
-   Render distance fog is supposed to obscure the border of visible terrain
-   Environmental fog uses spherical distance to determine its intensity, render distance fog uses cylindrical distance
-   The resulting fog value for any given vertex is the maximum of both

#### `Fog` Uniform Block

-   `FogStart` was renamed to `FogRenderDistanceStart` and now represents the render distance fog start
-   `FogEnd` was renamed to `FogRenderDistanceEnd` and now represents the render distance fog end
-   `FogEnvironmentalStart` is new and represents the start of environment-based fog
-   `FogEnvironmentalEnd` is new and represents the end of environment-based fog
-   `FogShape` was removed. Render distance fog is now cylindrical and environmental for is spherical

### Sound Events

-   `block.dried_ghast.hit` has been removed

## Fixed bugs in 25w19a

-   [MC-69821](https://bugs.mojang.com/browse/MC-69821) TNT "forgets" the player that ignited it when the world is reloaded
-   [MC-118430](https://bugs.mojang.com/browse/MC-118430) Vex summoner is not stored in NBT despite being used for AI task
-   [MC-118432](https://bugs.mojang.com/browse/MC-118432) Vex summoner is not reset once it is dead
-   [MC-277486](https://bugs.mojang.com/browse/MC-277486) Mob effect icons ignore "scaling" parameter in mcmeta files
-   [MC-277903](https://bugs.mojang.com/browse/MC-277903) Creative inventory tab icons can display item cooldown overlay
-   [MC-295690](https://bugs.mojang.com/browse/MC-295690) Players stay on fire for a while after barely touching fire
-   [MC-296432](https://bugs.mojang.com/browse/MC-296432) The ability to stand on top of happy ghasts which have a larger scale attribute becomes unreliable or even impossible
-   [MC-296460](https://bugs.mojang.com/browse/MC-296460) Debug crosshair renders incorrectly
-   [MC-296494](https://bugs.mojang.com/browse/MC-296494) The player sometimes falls from a happy ghast when reconnecting to a world
-   [MC-296701](https://bugs.mojang.com/browse/MC-296701) Transformed entities do not retain their custom;;_;;data component
-   [MC-296709](https://bugs.mojang.com/browse/MC-296709) All non-default jukebox;;_;;playable components are deleted from existing items when updating past 1.21.4
-   [MC-296797](https://bugs.mojang.com/browse/MC-296797) The movement of happy ghasts for non-controlling passengers is jittery
-   [MC-296813](https://bugs.mojang.com/browse/MC-296813) The panorama isn't slightly blurred anymore which causes some "flickering" effects
-   [MC-296970](https://bugs.mojang.com/browse/MC-296970) The dried ghast block has a hit sound event
-   [MC-297142](https://bugs.mojang.com/browse/MC-297142) The "Leave Bed" button is invisible
-   [MC-297235](https://bugs.mojang.com/browse/MC-297235) Clouds not fully rendered depending on angle when very high above the world
-   [MC-297271](https://bugs.mojang.com/browse/MC-297271) Waypoint packet is handled by network thread instead of render thread, causing crash
-   [MC-297339](https://bugs.mojang.com/browse/MC-297339) Sign text is non-functional
-   [MC-297347](https://bugs.mojang.com/browse/MC-297347) Tamed animals no longer sit when their owner changes dimension
-   [MC-297461](https://bugs.mojang.com/browse/MC-297461) Equipment and sleeping pos data cannot be loaded in 1.21.4, but can be loaded in 1.21.5 to bees spawned from bee nest and bee hive

---

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

#### Entity Tags

-   Updated `#followable_friendly_mobs` to include the Happy Ghast

## Resource Pack Version 59

-   Updated Unifont to 16.0.03

### UI Sprites

-   The `hud/locator_bar_arrow_up` and `hud/locator_bar_arrow_down` sprites are now animated with a standard `animation` definition in the corresponding `.mcmeta` files

### Font

#### Unifont

-   Updated Unifont to 16.0.03
-   Added previously omitted Unifont glyphs for Private Use Areas
    -   Those glyphs are loaded as a separate sub-font `minecraft:include/unifont_pua` and are not included in any normally used font
    -   Characters in those areas are managed by Under-CSUR (Under-ConScript Unicode Registry), which adds various scripts not present in official Unicode set, like Tengwar or Sitelen Pona

#### `unihex` Font Provider

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

#### Player Changes

-   Crouching will hide the player, preventing them from appearing on the Locator Bar of other players
-   Spectators are only visible to other spectators on the Locator Bar

#### Item Changes

-   The following items will hide players when worn in the head slot:
    -   Carved Pumpkin
    -   Skeleton Skull
    -   Wither Skeleton Skull
    -   Player Head
    -   Zombie Head
    -   Creeper Head
    -   Dragon Head
    -   Piglin Head

#### Potion Changes

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

#### Added `waypoint`

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

##### Waypoint Styles

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

#### Added `locatorBar`

-   Default is `true`: enabling the Locator Bar
-   Changing to `false` will remove all existing Waypoints from all players
-   The Game Rule has been renamed from `useLocatorBar` during the experiment. This may break minor command related features in worlds created in the previous snapshot.

#### Added `waypoint_transmit_range` and `waypoint_receive_range`

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

#### Block Tags

-   Added `happy_ghast_avoids` - blocks that happy ghasts avoid getting close to
-   Added `triggers_ambient_dried_ghast_block_sounds` - blocks that can trigger ambient Dried Ghast sounds to play when a Dried Ghast block is placed on them

## Resource Pack Version 58

### Shaders & Post-process Effects

#### `Fog` Uniform Block

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

#### `painting/variant` Item Component

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

#### Post-process Effect Definitions

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

#### Post-process Effect Shaders

-   Instead of every uniform being an individual opaque type, they are now grouped in uniform blocks
    -   They will be set according to the pass definition in the json file, and may be shared across both vertex and fragment shaders
-   The list of sizes (all `vec2 *Size` uniforms) are now replaced with a single `SamplerInfo` uniform block
    -   This contains, _in order_, the size of the output texture followed by the size every input texture
    -   The order of textures in the definition file will dictate the order of samplers in this uniform
    -   For most post chains this is just `OutSize` and `InSize` as before
    -   All sizes are `vec2`

##### `post/bits.fsh`

-   Expects a `BitsConfig` of `float Resolution` and `float MosaicSize`

##### `post/blit.fsh`

-   Expects a `BlitConfig` of `vec4 ColorModulate`

##### `post/blur.vsh` and `post/box_blur.fsh`

-   Expects a `BlurConfig` of `vec2 BlurDir` and `float Radius`

##### `post/color_convolve.fsh`

-   Expects a `ColorConfig` of `vec3 RedMatrix`, `vec3 GreenMatrix` and `vec3 BlueMatrix`

##### `post/invert.fsh`

-   Expects a `InvertConfig` of `float InverseAmount`

##### `post/rotscale.vsh`

-   Expects a `RotScaleConfig` of `vec2 InScale`, `vec2 InOffset` and `float InRotation`

##### `post/spiderclip.fsh`

-   Expects a `SpiderConfig` of `vec4 Scissor` and `vec4 Vignette`

#### `Globals` Uniform Block

-   Available through `#moj_import <minecraft:globals.glsl>` for convenience
-   Most shaders are able to receive this uniform block, even if they don't normally use it
-   Contains `ScreenSize`, `GlintAlpha`, `GameTime` and `MenuBlurRadius` (new)
    -   `MenuBlurRadius` is the blur radius of the background when a menu is open

#### `Fog` Uniform Block

-   Available through `#moj_import <minecraft:fog.glsl>` for convenience
-   Most shaders are able to receive this uniform block, even if they don't normally use it
-   Contains `FogColor`, `FogShape`, `FogStart`, `FogEnd`, `FogSkyEnd` (new) and `FogCloudsEnd` (new)
    -   `FogSkyEnd` is new and represents where the fog should end when drawing for the sky
    -   `FogCloudsEnd` is new and represents where the fog should end when drawing the clouds
    -   `FogEnd` is the "normal" fog cutoff as before
-   `FOG_IS_SKY` is now available to the `position.vsh`/`position.fsh` shaders when they are rendering for the sky

#### `Projection` Uniform Block

-   Available through `#moj_import <minecraft:projection.glsl>` for convenience
-   Most shaders are able to receive this uniform block, even if they don't normally use it
-   Contains `ProjMat` with no changes

#### `DynamicTransforms` Uniform Block

-   Available through `#moj_import <minecraft:dynamictransforms.glsl>` for convenience
-   Is no longer available to shaders that do not normally use it
-   Contains `ModelViewMat`, `ColorModulator`, `ModelOffset`, `TextureMat`, `LineWidth`
    -   These are very likely to change in the near future
    -   The values of some of these are often hard coded and may not make sense for a given shader, ie `LineWidth` in any non-line based pipeline

#### `Lighting` Uniform Block

-   Available through `#moj_import <minecraft:light.glsl>` for convenience
-   Most shaders are able to receive this uniform block, even if they don't normally use it
    -   The values may not make sense if the shader wouldn't normally expect it, however
-   Contains `Light0_Direction` and `Light1_Direction`

#### `CloudInfo` Uniform Block

-   Only available to the clouds shaders (`rendertype_clouds.vsh`/`rendertype_clouds.fsh`)
    -   Contains `CloudColor`, `CloudOffset` and `CellSize` (new)
        -   `CellSize` contains the size of an individual cloud cell

#### `LightmapInfo` Uniform Block

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

