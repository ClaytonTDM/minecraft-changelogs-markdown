# Minecraft Snapshot 25w33a

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

# Minecraft Snapshot 25w32a

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

