# Minecraft Snapshot 25w36b

Here is Snapshot 25w36b to fix some common crashes.

## Fixed bugs in 25w36b

-   [MC-301745](https://bugs.mojang.com/browse/MC-301745) Placing an ender chest in the world crashes the game
-   [MC-301749](https://bugs.mojang.com/browse/MC-301749) Multiplayer Crash.

---

Snapshot 25w36a is out and it includes mannequins, a new technical entity that is spawned with commands and can be used as an NPC. Conflicting key binds will now function together allowing you to bind a key to multiple actions. And as always, this snapshot also includes technical tweaks and bug fixes.

> > **Developer's Note**: _This snapshot brings a large change to how we collect and draw block entities and particles. We don't anticipate any change of behaviors so please keep an eye out and report anything suspicious as a bug, thank you!_

## New Features

-   World Borders can now be set per dimension

### End Light Flashes

-   While the Ender Dragon fog effect is active the flash source in the sky is not visible and the brightness of the light affecting the world is reduced

### Accessibility

-   Multiple key binds that have the same key assigned to them can now work together, while before only one would work
    -   For example, you can now bind `D` to `Jump` and `Strafe Left` to jump and strafe left at the same time
    -   The red warning for assigning the same key to multiple key binds is changed to yellow
-   The spectator hotbar menu key can now be rebound
    -   It is part of a new `Spectator` category in the Key Binds screen, alongside the pre-existing `Highlight Players` key bind

## Changes

-   Formatting codes are now stripped from Code of Conduct files

### World Border

-   The World Border is now dimension-specific
    -   This means that each dimension can have its own World Border size, position, etc.

### Minor Tweaks to Blocks, Items and Entities

-   Copper Torch and Copper Lantern colors are adjusted to make them more discernible to color blind players

### UI

-   Double-clicking a word in edit box now selects it

### Block States

-   Powered Shelves can now only connect to other Powered Shelves facing the exact same direction

### Performance Improvements

-   Particles outside of players view are not rendered anymore, which provides a performance improvement in some cases

## Technical Changes

-   The Data Pack version is now 86.0

## Data Pack Version 86.0

-   Added Mannequin entities
-   The World Border is now dimension-specific

### Mannequins

Added a new type of technical entity called `minecraft:mannequin` which can only be spawned with summon commands.

-   A Mannequin is a Player Avatar without a connected Player
-   Mannequins always show an "NPC" text where a Player's `below_score` score would show
-   Mannequins function as Living Entities - they can hold and wear equipment, have attributes & effects, take damage, etc

Data Fields:

-   `profile` - Which profile to show on the entity. This is either a Player profile (same format as a `minecraft:profile` component) or a Mannequin profile with the following fields:
    -   `texture` - Namespaced ID of the skin texture to use
        -   The skin is specified relative to the `textures` folder and with a `.png` suffix
        -   e.g. `entity/player/wide/steve` will use the default wide Steve skin
    -   `cape` - Optional namespaced ID of the cape texture to use
        -   When specified, uses the same format as the `texture` field
        -   Omitting this field means the Mannequin has no cape
    -   `elytra` - Optional namespaced ID of the elytra texture to use
        -   When specified, uses the same format as the `texture` field
        -   Omitting this field means the Mannequin uses the cape texture, or if that is also omitted, the default Elytra texture when wearing Elytra
    -   `model` - Optional model type, one of `wide` and `slim`
        -   If omitted, `wide` is used
-   `hidden_layers` - List of outer skin layers to hide
    -   Valid entries: `cape`, `jacket`, `left_sleeve`, `right_sleeve`, `left_pants_leg`, `right_pants_leg`, `hat`
-   `main_hand` - Which hand is the main hand of the Mannequn - one of `left` and `right`

### Particles

-   `dragon_breath` now optionally takes a `power` parameter (float, default `1.0`), which is multiplied onto its initial velocity, after all randomness
-   `instant_effect` and `effect` now optionally take `power` (float, default `1.0`) and `color` (rgb, default `0xFFFFFF`) parameters
-   `flash` now requires a `color` parameter (argb)

## Resource Pack Version 68.0

#### Shaders

-   The following unused shaders have been removed:
    -   `core/position_color_lightmap.vsh`
    -   `core/position_color_lightmap.fsh`
    -   `core/position_color_tex_lightmap.vsh`
    -   `core/position_color_tex_lightmap.fsh`

## Fixed bugs in 25w36a

-   [MC-223142](https://bugs.mojang.com/browse/MC-223142) Player can move while spectating a marker
-   [MC-225088](https://bugs.mojang.com/browse/MC-225088) Overworld surface is darker than before on low brightness
-   [MC-234737](https://bugs.mojang.com/browse/MC-234737) Typo in exception message: "EmtyPoolElement"
-   [MC-236508](https://bugs.mojang.com/browse/MC-236508) The title within the "Add Server" menu is displayed as "Edit Server Info"
-   [MC-237590](https://bugs.mojang.com/browse/MC-237590) The word "chunks" is improperly capitalized within the render and simulation distance sliders
-   [MC-238273](https://bugs.mojang.com/browse/MC-238273) "Locked by another running instance of Minecraft" lacks punctuation
-   [MC-249205](https://bugs.mojang.com/browse/MC-249205) "minecraft.used:minecraft.potion" increases by a value of two when using water bottles to create mud in creative mode
-   [MC-250062](https://bugs.mojang.com/browse/MC-250062) Several strings throughout the game contain comma splices
-   [MC-250193](https://bugs.mojang.com/browse/MC-250193) Server log does not use the string representation of a player's GameProfile on a disconnect during encryption
-   [MC-254052](https://bugs.mojang.com/browse/MC-254052) /locate doesn't work outside build limit
-   [MC-254668](https://bugs.mojang.com/browse/MC-254668) Pressing Escape on the death screen's title screen warning respawns the player
-   [MC-257792](https://bugs.mojang.com/browse/MC-257792) Output slot for trading menu is off-center
-   [MC-258191](https://bugs.mojang.com/browse/MC-258191) Root system feature allows hanging root vertical span of 0, causing error
-   [MC-259347](https://bugs.mojang.com/browse/MC-259347) Height limit warning message is shown when right-clicking the top of a block at the build height limit with a bucket
-   [MC-262370](https://bugs.mojang.com/browse/MC-262370) Some multiplayer strings are untranslatable
-   [MC-264962](https://bugs.mojang.com/browse/MC-264962) Strings that contain two inputs for a given action have inconsistent spacing and apostrophes
-   [MC-265807](https://bugs.mojang.com/browse/MC-265807) Mobs don't drown if their Air NBT is less than -19
-   [MC-277975](https://bugs.mojang.com/browse/MC-277975) The first line of the command execution warning in an item's tooltip is missing punctuation
-   [MC-278435](https://bugs.mojang.com/browse/MC-278435) Mushroom Fields biome doesn't generate pumpkin patches despite being specified in vanilla datapack
-   [MC-279123](https://bugs.mojang.com/browse/MC-279123) Some strings that reference Minecraft Realms use inconsistent or missing verb forms
-   [MC-279153](https://bugs.mojang.com/browse/MC-279153) Some strings that mention the base values of attributes are missing articles
-   [MC-279173](https://bugs.mojang.com/browse/MC-279173) The "chat.disabled.invalid\_command\_signature" string is missing an article before the word "Command"
-   [MC-279174](https://bugs.mojang.com/browse/MC-279174) The "gamerule.spawnChunkRadius.description" string is missing an article before the word "Amount"
-   [MC-279175](https://bugs.mojang.com/browse/MC-279175) Some multiplayer disconnection strings are missing articles and demonstratives
-   [MC-279176](https://bugs.mojang.com/browse/MC-279176) The "gamerule.commandModificationBlockLimit.description" string is missing an article before the word "Number"
-   [MC-279212](https://bugs.mojang.com/browse/MC-279212) Some narration strings are missing articles and possessive determiners
-   [MC-295829](https://bugs.mojang.com/browse/MC-295829) Test instance block GUI uses "Batch" instead of "Environment"
-   [MC-298605](https://bugs.mojang.com/browse/MC-298605) When creating a Water World superflat world, the player spawns at the bottom of the sea
-   [MC-299105](https://bugs.mojang.com/browse/MC-299105) Tears and Lava Chicken music disc 'desc' translations are unused
-   [MC-300055](https://bugs.mojang.com/browse/MC-300055) You get the advancement Wax On for changing the pose of a Copper Golem Statue while holding Honeycomb
-   [MC-300088](https://bugs.mojang.com/browse/MC-300088) Items placed by a copper golem in a double chest do not update redstone comparators reading the right side of the double chest
-   [MC-300109](https://bugs.mojang.com/browse/MC-300109) Lightning bolt does not remove oxidation from the lightning rod
-   [MC-300169](https://bugs.mojang.com/browse/MC-300169) The CustomName tag of a copper golem statue is not kept when mined
-   [MC-300192](https://bugs.mojang.com/browse/MC-300192) No darker trim for copper
-   [MC-300201](https://bugs.mojang.com/browse/MC-300201) Breaking a copper golem statue with a pose does not retain its pose
-   [MC-300416](https://bugs.mojang.com/browse/MC-300416) Copper golems' pathfinding to chests is biased to northwest
-   [MC-300558](https://bugs.mojang.com/browse/MC-300558) Copper golems can open locked chests without an appropriate key item
-   [MC-300729](https://bugs.mojang.com/browse/MC-300729) Incorrect or unusually obvious pixels on the weathered and exposed copper bars
-   [MC-300961](https://bugs.mojang.com/browse/MC-300961) The armor layer on husks no longer reflects their larger size compared to other humanoids
-   [MC-301099](https://bugs.mojang.com/browse/MC-301099) Copper chests worn on copper golems' heads are not visible
-   [MC-301250](https://bugs.mojang.com/browse/MC-301250) Upon exiting the gamemode switcher (F3+F4) while viewing the credits, the player still does not resume viewing the credits and instead remains in the end in a phantom state until they relog
-   [MC-301258](https://bugs.mojang.com/browse/MC-301258) Copper golem statues in the walking pose have a bit of their necks poking through their arms
-   [MC-301259](https://bugs.mojang.com/browse/MC-301259) Shelf align\_items\_to\_bottom in block entity data doesn't work
-   [MC-301261](https://bugs.mojang.com/browse/MC-301261) The right arm of the copper golem statue isn't connected to its body
-   [MC-301276](https://bugs.mojang.com/browse/MC-301276) The hand animation no longer plays when shearing copper golems
-   [MC-301277](https://bugs.mojang.com/browse/MC-301277) Item frames with maps and paintings cannot share a corner anymore
-   [MC-301278](https://bugs.mojang.com/browse/MC-301278) The code of conduct screen renders carriage return characters
-   [MC-301283](https://bugs.mojang.com/browse/MC-301283) Sprint and sneak input can get 'stuck' if a screen is opened right as the input is pressed
-   [MC-301310](https://bugs.mojang.com/browse/MC-301310) The “Transfer Now” button in the realms menu renders outside the selection box
-   [MC-301312](https://bugs.mojang.com/browse/MC-301312) You cannot begin to use items while looking at copper golems
-   [MC-301324](https://bugs.mojang.com/browse/MC-301324) Sitting copper golem statue nose is rotated incorrectly
-   [MC-301330](https://bugs.mojang.com/browse/MC-301330) Malicious server can force client to remain stuck on code of conduct screen
-   [MC-301374](https://bugs.mojang.com/browse/MC-301374) Evokers can now spawn in Peaceful difficulty
-   [MC-301519](https://bugs.mojang.com/browse/MC-301519) Trying to use a command block while the "enableCommandBlocks" gamerule is set to false says "Command blocks are not enabled on this server" even if you're not on a server
-   [MC-301523](https://bugs.mojang.com/browse/MC-301523) Some gamerule description strings consist of inconsistent concluding punctuation, redundantly include “or not”, and are grammatically incorrect
-   [MC-301524](https://bugs.mojang.com/browse/MC-301524) The block breaking animation on banners now amplifies with each pattern applied
-   [MC-301546](https://bugs.mojang.com/browse/MC-301546) Bells do not display ringing animation when another bell is nearby
-   [MC-301577](https://bugs.mojang.com/browse/MC-301577) Block light sources produce shadows around themselves under skylight
-   [MC-301619](https://bugs.mojang.com/browse/MC-301619) Game mode translation key is used in the console message sent when a player tries to switch their game mode without permission

---

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
-   [MC-301230](https://bugs.mojang.com/browse/MC-301230) The word "resolve" is misspelled as "resolved" within the "commands.profile\_fetch.id.failure" string
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

