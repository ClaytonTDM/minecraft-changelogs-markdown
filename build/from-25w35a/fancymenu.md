# Minecraft Snapshot 25w35a

In this week's snapshot we are adding a Minecraft Server Management Protocol which lets servers query players, tweak game rules, update server settings, and listen for real-time server event notifications. Some server properties have been moved to game rules, allowing them to be updated while the server is running. Additionally, player icons can now be used in chat, the copper golem has received some improvements and we are shipping a bunch of bug fixes.

Happy mining!

## New Features

-   Added Halychian language support

## Changes

### Recipes

-   Hanging Signs can now only be crafted using Iron Chains

### UI

-   When adding a new server to the server list, the name is no longer prefilled. When left empty the default name is used.
-   More text inputs now support selecting text by mouse dragging

#### Mouse cursor

-   Some UI components will now change shape of mouse cursor
    -   Examples: text inputs, numeric sliders, buttons, scroll bars
-   Additionally, clickable parts of text labels (like links) will now change cursor to the "hand" shape
-   This feature can be disabled with "Allow Cursor Changes" option in "Mouse Settings..." menu

### Minor Tweaks to Blocks, Items and Entities

-   Copper Golems hitbox has been tweaked
    -   The hitbox is now 0.98 blocks in height to be able to pathfind in one block high spaces
-   Copper Chests created from spawning a Copper Golem now correctly connect to nearby Copper Chests
-   The Copper Golem now uses the Saddle equipment slot for blocks placed atop of its Lightning Rod
    -   Its Head equipment slot will now function like a regular head slot, akin to its functionality for humanoid mobs

## Technical Changes

-   The Data Pack version is now 85.0
-   The Resource Pack version is now 67.0
-   Added Minecraft Server Management Protocol

### Server Properties

Several server properties were removed in favour of making them into game rules, allowing these settings to be changed while the server is running.

-   Removed server property `allow-nether` in favour of new game rule
-   Removed server property `spawn-monsters` in favour of new game rule
-   Removed server property `enable-command-block` in favour of new game rule
-   Removed server property `pvp` in favour of new game rule
-   Added server property `management-server-enabled` controlling whether the new Minecraft Server Management Protocol is enabled or not
    -   Defaults to `false`
-   Added server property `management-server-port` controlling on what port the Minecraft Server Management Protocol is started
    -   Defaults to `25585`
-   Added server property `management-server-host` controlling with what host the new Minecraft Server Management Protocol is started
    -   Defaults to `localhost`
-   Added server property `status-heartbeat-interval` controlling the interval the management server sends heartbeat notifications to connected clients
    -   Defaults to `0`, meaning it’s disabled

### Minecraft Server Management Protocol

Added a server management API (JSON-RPC over WebSocket) for dedicated servers

-   The API is disabled by default and can be enabled in the server properties file
    -   `management-server-enabled=true`
    -   `management-server-host=localhost`
    -   `management-server-port=25585`
-   The API is accessible at `ws://<management-server-host>:<management-server-port>` when enabled
-   Supports querying and updating of server state (players, allowlist, operators, settings, game rules)
-   Sends notifications on state changes (e.g. player joins, game rule updates)
-   Calling `{"id":1,"method":"rpc.discover"}` returns an API schema containing supported methods and notifications of the currently running server
-   The Data Generator produces an API schema (`json-rpc-api-schema.json`) in the reports output folder mirroring the contents returned by the `rpc.discover` method
-   The API adheres to the [JSON-RPC 2.0 specification](https://www.jsonrpc.org/specification)
-   Uses namespaced methods and the reserved namespaces are `minecraft` (e.g. `minecraft:players`, `minecraft:allowlist/add`) and `notification` (e.g. `notification:players/joined`)
    -   Extensible via custom namespaces for additional methods and events
-   Core method groups: players, allowlist, operators, server (save, stop), server settings, game rules
-   Example method call:
    -   Request: `{"method":"minecraft:allowlist/add","id":1,"params":[[{"name":"jeb_"}]]}`
    -   Response: `{"jsonrpc":"2.0","id":1,"result":[{"id":"853c80ef-3c37-49fd-aa49-938b674adae6","name":"jeb_"}]}`
-   Example notification:
    -   `{"jsonrpc":"2.0","method":"notification:players/joined","params":[{"id":"853c80ef-3c37-49fd-aa49-938b674adae6","name":"jeb_"}]}`
-   Example error:
    -   Request: `{"method": "minecraft:foo/bar","id": 1}`
    -   Response: `{"jsonrpc":"2.0","id":1,"result":{"jsonrpc":"2.0","id":1,"error":{"code":-32601,"message":"Method not found","data":"Method not found: minecraft:foo/bar"}}}`
    -   Errors and error codes follow [JSON-RPC 2.0 error object format](https://www.jsonrpc.org/specification#error_object)

## Data Pack Version 85.0

-   Renamed `chain` to `iron_chain`

### Game Rules

-   Added `pvp` game rule controlling whether players can deal damage to other players
    -   Defaults to `true`
-   Added `allowEnteringNetherUsingPortals` game rule controlling if the Nether can be entered through portals
    -   Defaults to `true`
-   Added `spawnMonsters` game rule controlling if monsters should spawn naturally
    -   Defaults to `true`
-   Added `enableCommandBlocks` game rule controlling if Command Blocks should be enabled or not
    -   Defaults to `true`

### Text rendering

#### `object` Text Component

-   This component has been updated to support displaying other non-character objects as a part of text
-   New format:
    -   `object`: type of object, string, see below for values
    -   `<type-specific>`: additional fields depending on object type
-   Similarly to `nbt` text component `object` field can be omitted
    -   However, it's recommended to provide it for error checking

##### `atlas` Object Type

-   Behaves the same way as the `object` component did previously, but is now a separate object type
-   Uses the same format as before

##### `player` Object Type

-   Renders player head
-   If partial profile is given, skin is resolved in the same way as `minecraft:profile` component on player head
-   Format:
    -   `player`: player profile
        -   `name`: player name, optional string
        -   `id`: player uuid, optional UUID
        -   `properties`: profile properties, optional map
    -   `hat`: controls rendering of a hat layer, boolean, default `false`

## Resource Pack Version 67.0

### Block Sprites

Renamed the following block sprites:

-   `chain` to `iron_chain`

### Item Sprites

Renamed the following item sprites:

-   `chain` to `iron_chain`

## Fixed bugs in 25w35a

-   [MC-278550](https://bugs.mojang.com/browse/MC-278550) While flying in creative or spectator mode, the surface of water can prevent you from sprinting
-   [MC-297126](https://bugs.mojang.com/browse/MC-297126) "Failed to read field..." error spam when upgrading a 25w15a or 25w16a world
-   [MC-300044](https://bugs.mojang.com/browse/MC-300044) Z-fighting occurs when the heads of copper golems intersect their bodies
-   [MC-300049](https://bugs.mojang.com/browse/MC-300049) The debug text is rendered on top of the debug options
-   [MC-300054](https://bugs.mojang.com/browse/MC-300054) Double oxidized copper chest texture UV is missing pixels
-   [MC-300067](https://bugs.mojang.com/browse/MC-300067) Copper golems continue their chest searching animations while dying
-   [MC-300074](https://bugs.mojang.com/browse/MC-300074) No particles are produced when scraping oxidation off copper golems
-   [MC-300077](https://bugs.mojang.com/browse/MC-300077) Copper golems can interact with chests diagonally through solid blocks
-   [MC-300089](https://bugs.mojang.com/browse/MC-300089) Chests sometimes get stuck in inverted states after being interacted with by copper golems
-   [MC-300102](https://bugs.mojang.com/browse/MC-300102) Shelves float when held in the player's hand in third person
-   [MC-300103](https://bugs.mojang.com/browse/MC-300103) Removing items from a shelf uses the "Item placed" caption
-   [MC-300119](https://bugs.mojang.com/browse/MC-300119) Copper golems don’t always avoid dangerous blocks when pathfinding to chests
-   [MC-300124](https://bugs.mojang.com/browse/MC-300124) All the oxidation states of the lightning rod are listed in the redstone tab of the creative inventory
-   [MC-300129](https://bugs.mojang.com/browse/MC-300129) Copper golems can't put items into chests above them
-   [MC-300173](https://bugs.mojang.com/browse/MC-300173) The Copper Chest textures' diagonal glint direction doesn't match the large chest variants' on some sides
-   [MC-300229](https://bugs.mojang.com/browse/MC-300229) Z-fighting on antenna when putting certain blocks above a copper golem statue
-   [MC-300267](https://bugs.mojang.com/browse/MC-300267) The miniature mobs inside spawners and trial spawners are sometimes lit incorrectly
-   [MC-300301](https://bugs.mojang.com/browse/MC-300301) Shelves produce unusually high-resolution particles due to having a 32x32 texture
-   [MC-300304](https://bugs.mojang.com/browse/MC-300304) Comparators can stay active when measuring the pose of a copper golem statue block which is revived
-   [MC-300462](https://bugs.mojang.com/browse/MC-300462) Copper golems attached to leads still attempt to pathfind toward chests
-   [MC-300501](https://bugs.mojang.com/browse/MC-300501) Variants of copper chests are not included in the "Redstone Blocks" tab in the creative inventory whereas normal chests are
-   [MC-300568](https://bugs.mojang.com/browse/MC-300568) Copper golems don't open chests if given room to walk about
-   [MC-300688](https://bugs.mojang.com/browse/MC-300688) The iron chain's block/item ID is still "chain"
-   [MC-300703](https://bugs.mojang.com/browse/MC-300703) The underside of double copper chests does not use a merged texture
-   [MC-300744](https://bugs.mojang.com/browse/MC-300744) The copper and iron nuggets are inverted and arranged incorrectly in the Creative mode inventory
-   [MC-300762](https://bugs.mojang.com/browse/MC-300762) Copper golems require at least 3 blocks of space above a chest to place anything
-   [MC-300797](https://bugs.mojang.com/browse/MC-300797) The glowing effect causes entities to render incorrectly inside of inventories
-   [MC-300827](https://bugs.mojang.com/browse/MC-300827) Pressing F3+Q in certain screens does not show help, despite F3 suggesting it
-   [MC-300977](https://bugs.mojang.com/browse/MC-300977) Clocks function in the recipe book/villager/crafter UI
-   [MC-301023](https://bugs.mojang.com/browse/MC-301023) When a warden applies the darkness effect to you, the chat interface, item bar, and items become dark
-   [MC-301025](https://bugs.mojang.com/browse/MC-301025) End flash purplish light saturation is affected by brightness values
-   [MC-301026](https://bugs.mojang.com/browse/MC-301026) End flash purplish light becomes extremely saturated when the player is affected by darkness
-   [MC-301048](https://bugs.mojang.com/browse/MC-301048) In the "sitting" pose, the copper statue’s rod becomes shorter
-   [MC-301101](https://bugs.mojang.com/browse/MC-301101) Certain similar blocks are positioned differently on copper golems' heads
-   [MC-301224](https://bugs.mojang.com/browse/MC-301224) The first few stages of block cracks are not rendered on chests
-   [MC-301225](https://bugs.mojang.com/browse/MC-301225) Game crashes when quitting creating new world menu without other worlds created before
-   [MC-301226](https://bugs.mojang.com/browse/MC-301226) Block cracks no longer render on banners
-   [MC-301228](https://bugs.mojang.com/browse/MC-301228) Block cracks no longer render on heads and skulls
-   [MC-301230](https://bugs.mojang.com/browse/MC-301230) The word "resolve" is misspelled as "resolved" within the "commands.profile;;_;;fetch.id.failure" string
-   [MC-301231](https://bugs.mojang.com/browse/MC-301231) Enchanting table book animations are not independent
-   [MC-301236](https://bugs.mojang.com/browse/MC-301236) Enchantment glint is no longer visible on held tridents
-   [MC-301242](https://bugs.mojang.com/browse/MC-301242) Enchantment glint is no longer visible on shields
-   [MC-301273](https://bugs.mojang.com/browse/MC-301273) Clicking on the join server hover button now selects the server, unless any server is already selected
-   [MC-301290](https://bugs.mojang.com/browse/MC-301290) Game crashes when trying to render a glowing enchanted item
-   [MC-301295](https://bugs.mojang.com/browse/MC-301295) TTF font provider oversample increases width of characters
-   [MC-301328](https://bugs.mojang.com/browse/MC-301328) Glowing item entities briefly turn white upon pickup
-   [MC-301339](https://bugs.mojang.com/browse/MC-301339) Miniature mobs inside spawners always render fully lit

---

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

