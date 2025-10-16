# Minecraft: Java Edition 1.21.9

Minecraft has entered The Copper Age! Express yourself in every shade of copper as you transform this versatile metal into handy tools, shiny armor, gleaming light sources, oxidizing decor, smart storage, and even lively mechanical companions known as copper golems. In addition to these shiny new features, this drop comes with a bunch of technical news and fixes. The End now has a flashing skylight, you can populate the world with NPCs called mannequins, and item sprites can now be added into text. Whether scraped or oxidized, this is the start of a new clonking era of creativity!

## New Features

-   Added Copper Chest
-   Added Copper Golem
-   Added Copper Golem Statue Block
-   Added Copper Equipment
-   Added Copper Decorations
-   Added Shelf
-   Added light flashes to The End dimension
-   Added Chat Drafts
-   Added sound previews to the Music & Sound Options sliders
-   Added the Minecraft Server Management Protocol
-   Added support for servers to have an in-game Code of Conduct
-   Added Halychian language support

> **Developer’s Note:** _Did you know that Minecraft: Java Edition is available in over a hundred languages? And it's all thanks to you, our community, and your vital contributions keeping the translation project running. If you would like to help translating the game, join us on [Crowdin](https://crowdin.com/project/minecraft). Happy International Translation day!_

### Copper Chest

-   The Copper Chest is a new type of chest that has waxed and oxidized variants
-   Copper Chests oxidize over time and can be waxed like other Copper blocks
-   A Copper Chest can be crafted using a Chest and 8 Copper Ingots

### Copper Golem

-   The Copper Golem is a new mob which can be spawned by placing a Jack o'Lantern or Carved Pumpkin on top of a Copper block
-   Copper Golems oxidize over time and can be waxed like Copper blocks
-   If the Copper Golem is fully oxidized and not waxed it will turn into a Copper Golem Statue
    -   Upon turning into a statue, the Copper Golem will drop any item it may be holding
    -   The statue retains the Copper Golem's name
-   Copper Golems can help with sorting items into Chests
-   Interacting with the Copper Golem with an empty hand will make it drop its carried item
-   Iron Golems will occasionally plant a decorative flower onto a nearby Copper Golem
    -   The flower can be removed with Shears
    -   This flower is dropped when the Copper Golem turns into a Copper Golem Statue ![A trio of Copper Golems hanging out in a Taiga Village.](https://launchercontent.mojang.com/v2/images/1.21.9golempumpkin.jpg)

**Copper Golem Item Sorting**

-   If the Copper Golem is not holding an item, it will look for nearby Copper Chests to try to pick up an item
    -   The Copper Golem will look in any oxidized and waxed Copper Chest variant to pick up items
    -   It can pick up at most 16 items in a stack at a time
    -   Any item in a Copper Chest can be picked up
-   If the Copper Golem is holding an item, it will look for nearby Chests to try to place the item in
    -   The Copper Golem will look in Chests and Trapped Chests to try to place items
    -   It can place an item in a Chest if it's empty, or if it contains the same type of item that it is holding in its hand
-   The Copper Golem will visit at most 10 Chests or Copper Chests in sequence to try to pick up or place an item
-   If no matching chest is found the Copper Golem will idle for 7 seconds before trying again
-   The search area for chests from the Copper Golem's position is horizontally 32 blocks and vertically 8 blocks ![Three Copper Golems are crossing a bridge built out of copper. Two of the golems are transporting items.](https://launchercontent.mojang.com/v2/images/1.21.9bridge2.jpg)

### Copper Golem Statue Block

![A Copper Statue, doing its signature "star" pose, can be seen on top of a copper pedestal.](https://launchercontent.mojang.com/v2/images/1.21.9praisethesun.jpg)

-   The Copper Golem Statue is a new type of decorative block which has waxed and oxidized variants
-   The Copper Golem Statue oxidizes over time and can be waxed like Copper blocks
-   If the Copper Golem Statue has no oxidation when interacted with using an Axe, the statue will turn into a Copper Golem
-   The Copper Golem Statue can be in one out of four poses: standing, sitting, running, and star
    -   The pose of the statue can be changed by interacting with it
    -   Each pose emits a Redstone Comparator signal ![A house made out of various Copper blocks, with some Copper Golem Statues in various poses](https://launchercontent.mojang.com/v2/images/1.21.9copperbuilding.jpg)

### Copper Equipment

-   Added Copper Nugget
-   Added Copper armor
    -   Added Copper Helmet, Copper Chestplate, Copper Leggings and Copper Boots
    -   Copper armor has higher durability than Leather and Gold
    -   Copper armor has slightly less enchantability than Iron
-   Added Copper tools and weapons
    -   Added Copper Axe, Copper Hoe, Copper Pickaxe, Copper Shovel and Copper Sword
    -   Copper tools and weapons do the same amount of damage as Stone, but have higher durability
    -   Copper tools work faster and last longer than Stone
    -   Copper tools have higher enchantability than Diamond, but slightly less than Iron
-   Copper equipment can be crafted using Copper Ingots
-   Copper equipment can be repaired with Copper Ingots
-   Copper equipment turns into a Copper Nugget when smelted
-   Added Copper Horse Armor
    -   Has the same loot table and chance of generating as Iron Horse Armor
    -   Armor toughness: 4 ![Two horses, wearing Copper Horse Armor, can be seen tied to fence posts in a Village. Two Armor Stands can also be seen, fully kitted with sets of Copper Armor.](https://launchercontent.mojang.com/v2/images/1.21.9armor2.jpg)

### Copper Decorations

![Sunny can be seen running across a mineshaft bridge, placing down Copper Torches along their way.](https://launchercontent.mojang.com/v2/images/1.21.9coppertorch.jpg)

-   Added Copper Torch
    -   A green variant of the Torch crafted from a Copper Nugget, Coal, and Stick
    -   Functionally identical to the Torch
-   Added Copper Bars
    -   Functionally identical to the existing Iron Bars block
    -   Made from copper and oxidizes over time
-   Added Copper Chain
    -   Functionally identical to the existing Chain block (now renamed to Iron Chain)
    -   Made from copper and oxidizes over time
-   Added Copper Lantern
    -   Crafted similarly to a regular Lantern but uses Copper and a Copper Torch
    -   The lantern itself oxidizes, changing its look as it ages
    -   Functionally identical to the Lantern ![An entrance to a village, made out of Copper Bars and Lanterns.](https://launchercontent.mojang.com/v2/images/1.21.9copperbars.jpg)

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
-   While a Shelf is powered by Redstone, its front texture changes to reflect that it's powered
    -   When powered, up to 3 Shelves will connect to each other
    -   Interacting with a single powered Shelf swaps all its contents with the 3 rightmost items in the player's hotbar
    -   Interacting with two connected Shelves swaps their contents with the 6 rightmost items in the player's hotbar
    -   Interacting with three connected Shelves swaps their contents with all items in the player's hotbar
    -   It does not matter which of the connected Shelves the player interacts with ![Sunny in Copper armor standing in front of some Redstone-powered Shelves](https://launchercontent.mojang.com/v2/images/1.21.9shelf.jpg)

### Lightning Rod

-   Lightning Rods now oxidize like other Copper blocks

### The End Light Flashes

-   The End dimension now has skylight
    -   Normally the skylight does not affect how the dimension looks
    -   From time to time flashes in the sky happen and produce a rumbling sound
    -   When they happen skylight intensity increases, flooding the dimension with purple light
-   While the Ender Dragon fog effect is active the flash source in the sky is not visible and the brightness of the light affecting the world is reduced
-   The "Hide Sky Flashes" accessibility option disables the End flashes
    -   When the flash is disabled by the setting the world is not lit by the flash but the flash source is still visible in the sky and the sound effect still plays ![A purple flash of light can be seen in the sky of The End.](https://launchercontent.mojang.com/v2/images/1.21.9endskyflash.jpg)

### Minecraft Server Management Protocol

Added a server management API (JSON-RPC over WebSocket) for dedicated servers

-   The API is disabled by default and can be enabled in `server.properties`
    -   `management-server-enabled=true`
    -   `management-server-host=localhost`
    -   `management-server-port=0`
-   The API is accessible at `ws://<management-server-host>:<management-server-port>` when enabled
-   Supports querying and updating of server state (players, allowlist, operators, settings, game rules)
-   Sends notifications on state changes (e.g. player joins, game rule updates)
-   Calling `{"id":1,"method":"rpc.discover"}` returns an API schema containing supported methods and notifications of the currently running server
-   The Data Generator produces an API schema (`json-rpc-api-schema.json`) in the reports output folder mirroring the contents returned by the `rpc.discover` method
-   The API adheres to the [JSON-RPC 2.0 specification](https://www.jsonrpc.org/specification)
-   Uses namespaced methods and the reserved namespaces are `minecraft` (e.g. `minecraft:players`, `minecraft:allowlist/add`)
    -   Extensible via custom namespaces for additional methods and events
-   Core method groups: players, allowlist, operators, server (save, stop), server settings, game rules
-   Example method call:
    -   Request: `{"method":"minecraft:allowlist/add","id":1,"params":[[{"name":"jeb_"}]]}`
    -   Response: `{"jsonrpc":"2.0","id":1,"result":[{"id":"853c80ef-3c37-49fd-aa49-938b674adae6","name":"jeb_"}]}`
-   Example notification:
    -   `{"jsonrpc":"2.0","method":"minecraft:notification/players/joined","params":[{"id":"853c80ef-3c37-49fd-aa49-938b674adae6","name":"jeb_"}]}`
-   Example error:
    -   Request: `{"method": "minecraft:foo/bar","id": 1}`
    -   Response: `{"jsonrpc":"2.0","id":1,"result":{"jsonrpc":"2.0","id":1,"error":{"code":-32601,"message":"Method not found","data":"Method not found: minecraft:foo/bar"}}}`
    -   Errors and error codes follow [JSON-RPC 2.0 error object format](https://www.jsonrpc.org/specification#error_object)
-   Clients must authenticate to access the API
    -   Clients should supply an `Authorization` bearer token header with a server-specific secret
    -   The secret is configured in `server.properties`
        -   `management-server-secret=`
        -   The secret should be exactly 40 alphanumeric characters (A-Z, a-z, 0-9)
        -   The secret will be automatically generated if the server property is empty
        -   Unauthorized requests are rejected with 401 Unauthorized
-   TLS is enabled by default
    -   Can be disabled in `server.properties`
        -   `management-server-tls-enabled=false`
    -   Requires a keystore file to be set in `server.properties`
        -   `management-server-tls-keystore=path/to/keystore.p12`
    -   The keystore file must be in PKCS12 format
    -   Keystore password can be set in the following ways, in order of priority
        -   Environment variable: `MINECRAFT_MANAGEMENT_TLS_KEYSTORE_PASSWORD`
        -   JVM argument: `-Dmanagement.tls.keystore.password=`
        -   Server property: `management-server-tls-keystore-password=`

### Chat Drafts

-   Unsent chat messages now get saved as Chat Drafts if the chat was forcibly closed
    -   This includes it being closed by external sources such as dying or a dialog opening, but not the player intentionally closing their chat
-   Any existing Chat Draft will get pre-filled into the message box the next time the chat is opened
-   Draft text has a grayed-out appearance until fully restored
    -   Draft text can be restored as regular text by interacting with it:
        -   Typing additional text
        -   Moving the text cursor using the arrow keys
        -   Clicking it
        -   Highlighting it
    -   Pressing enter on a Chat Draft prior to it being restored sends it like a normal chat message
    -   Pressing backspace on a Chat Draft prior to it being restored deletes it
-   Added an option to the Chat Settings screen that enables saving unsent chat messages by default
    -   With this option enabled, unsent messages will _always_ get saved as Chat Drafts, even if the player intentionally closed their chat

### Server Code of Conduct

When connecting to a server, a Code of Conduct screen can now be shown.

-   Accepting the Code of Conduct is required to play on the server
-   A checkbox is available for not showing the same Code of Conduct in the future
    -   If the Code of Conduct changes, it will be shown again

**Server Setup**

-   A new boolean field has been added to `server.properties` called `enable-code-of-conduct`
    -   Setting it to `true` will make the server look for Code of Conduct files in the `codeofconduct` subfolder in the same folder as `server.properties`
    -   Each file in the folder should have the form `<language_code>.txt` and be UTF-8 encoded
        -   The language shown will attempt to match the player's language
        -   If it doesn't exist, the `en_us` Code of Conduct will be used
        -   If that also doesn't exist, an arbitrary available entry is used

### Sounds

-   Some sound sliders in the Music & Sound Options now play a preview sound when adjusting the setting outside a world

### Accessibility

-   The "Attack/Destroy" and "Use Item/Place Block" key binds are now toggleable, meaning they can be set to either "Hold" or "Toggle" in the Controls screen
-   Added "Invert Mouse X" option to the Mouse Settings screen, which inverts the mouse x-axis
-   Added "Sprint Window" option to the Controls screen, which represents the time window in ticks where double-tapping the forward key activates sprint
-   Multiple key binds that have the same key assigned to them can now work together, while before only one would work
    -   For example, you can now bind `D` to `Jump` and `Strafe Left` to jump and strafe left at the same time
    -   The red warning for assigning the same key to multiple key binds is changed to yellow
-   The spectator hotbar menu key can now be rebound
    -   It is part of a new `Spectator` category in the Key Binds screen, alongside the pre-existing `Highlight Players` key bind

## Changes

-   Performance improvements
-   The Chain block has been renamed to "Iron Chain"
-   Monster Spawn Eggs now have a tooltip warning when the difficulty is set to Peaceful
    -   The mob no longer spawns for one tick when an attempt is made to use the Spawn Egg
-   Changes to world loading and the "Spawn Chunks"
-   A dimension that has any player activity, forceloaded chunks, active portals, or Ender Pearls in flight will be considered "active" and will keep processing chunks and entities
    -   Previously, this would only apply if a player was in the dimension or a chunk was forceloaded
-   Reworked the debug overlay to be less cluttered and more configurable
-   Players seen in the game world of the current server are now always shown in the Social Interactions screen even if they are offline
-   Players now stop flying when switching from Spectator Mode to Creative Mode if they are near the ground
    -   A player is considered to be near the ground if there is a collidable surface (i.e. blocks, Happy Ghasts, boats...) within 1 block below them
    -   Flight will not get disabled if the player was inside a block or collidable entity
        -   This is to prevent players from suddenly falling through the ground
-   Migrated several server properties into game rules
-   OpenGL 3.3 is now required to play the game, up from 3.2. This does not change our posted Minimum Requirements

> **Developer’s Note:** _We do not expect the update to OpenGL version to affect many people, if any at all. Our posted Minimum Requirement has been OpenGL 4.0 since 2017, and OpenGL 3.3 turned 15 years old recently._

### Performance Improvements

-   Entity rendering order was improved for significantly better performance
    -   You’ll notice much smoother gameplay in areas with lots of mobs, like mob farms
    -   FPS won’t improve much if most of your lag comes from things other than entities, like playing with high render distance while not being near many mobs
-   Particles outside the player's view are not rendered anymore, which provides a performance improvement in some cases

### World Loading and Spawn Chunks

-   The concept of fixed "Spawn Chunks" has been removed
-   The game will ensure that the following chunks are fully loaded before the player joins or the server starts, in the same way as spawn chunks formerly were:
    -   Chunks loaded by the `forceload` command
    -   Chunks active due to portal activity
    -   Thrown Ender Pearls (Singleplayer only)
    -   A small area of chunks around the player (Singleplayer only)
    -   Chunks required to assign the global world spawn (World creation only)
-   The world loading screen now shows the chunks that the player is about to be placed into, rather than chunks loaded around world spawn
-   The loading screen now has a progress bar
    -   This progress bar accounts for all kinds of chunk loading mentioned above

> **Developer’s Note:** _Spawn chunks incur a memory and performance cost for all players and have outlived their initial technical purpose of keeping the spawn area ready for players to quickly join into._

> _However, we also want to recognize that spawn chunks have enabled a multitude of clever contraptions and farms throughout the years, so simply removing them without having other mechanics in the game enable these designs was never an option._

> _We believe that the niche held by spawn chunks has now been filled by alternative methods of chunk loading, such as using portals or ender pearls, particularly with the changes in this release to how the game loads these chunks before the world starts ticking._

### Server Properties

Several server properties were removed in favor of making them into game rules, allowing these settings to be changed while the server is running.

-   Removed server property `allow-nether` in favor of the new game rule `allowEnteringNetherUsingPortals`
-   Removed server property `spawn-monsters` in favor of the new game rule `spawnMonsters`
-   Removed server property `enable-command-block` in favor of the new game rule `commandBlocksEnabled`
-   Removed server property `pvp` in favor of the new game rule `pvp`
-   Added server property `management-server-enabled` controlling whether the new Minecraft Server Management Protocol is enabled or not
    -   Defaults to `false`
-   Added server property `management-server-port` controlling on what port the Minecraft Server Management Protocol is started
    -   Defaults to `0`, assigning an available port each time management server is started
-   Added server property `management-server-host` controlling with what host the new Minecraft Server Management Protocol is started
    -   Defaults to `localhost`
-   Added server property `management-server-tls-enabled` controlling whether the Minecraft Server Management Protocol uses TLS or not
    -   Defaults to `true`
-   Added server property `management-server-tls-keystore` controlling the path to the keystore file used for TLS
    -   Defaults to an empty string
    -   A dedicated server won't start when TLS is enabled and no keystore is provided
-   Added server property `management-server-tls-keystore-password` controlling the password to the keystore file used for TLS
    -   Defaults to an empty string
-   Added server property `status-heartbeat-interval` controlling the interval the management server sends heartbeat notifications to connected clients
    -   Defaults to `0`, meaning it’s disabled
-   Added server property `enable-code-of-conduct`
    -   Details on this property can be found in the "Server Setup" header

### Game Rules

-   Removed `spawnChunkRadius` game rule
-   Added `pvp` game rule controlling whether players can deal damage to other players
    -   Defaults to `true`
-   Added `allowEnteringNetherUsingPortals` game rule controlling if the Nether can be entered through portals
    -   Defaults to `true`
-   Added `spawnMonsters` game rule controlling if monsters should spawn naturally
    -   Defaults to `true`
-   Added `commandBlocksEnabled` game rule controlling if Command Blocks should be enabled or not
    -   Defaults to `true`
-   Added `spawnerBlocksEnabled` game rule controlling if Spawner Blocks should be enabled or not
    -   Defaults to `true`

### Mob Spawning

-   The logic for choosing a type of equipment for mobs spawning with equipment has been tweaked to add Copper as a possibility
    -   The initial roll to choose a type now chooses between Leather, Copper and Gold
    -   The chance to increase an armor tier has increased from 9.5% to 10.87%

### Minor Tweaks to Blocks, Items and Entities

-   Test Instance Blocks now preserve error markers between world reloads
-   Ambient lighting on entities has been adjusted to be more visually in line with blocks and other parts of the game
    -   The underside of flat surfaces will now be lit from that direction, instead of the opposite direction
    -   This mainly affects models containing cubes that are either flat or "hollow" such as:
        -   Worn armor
        -   Worn Elytra
        -   The outside layers on player skins
        -   The ribcages of Skeletons or Skeleton Horses
        -   The feet of Chickens or Frogs
        -   The wings of Phantoms or the Ender Dragon
        -   The fins on fish
        -   And more!

### Recipes

-   Changed the Copper Trapdoor recipe to use 4 Copper Ingots instead of 6 and now yields one Copper Trapdoor instead of two

### Sounds

-   The Happy Ghast is now audible from 64 blocks
-   Sounds for Chests now play at a lower volume
-   The volume at which a sound is played at now respects the sound source volume value
-   The "Voice/Speech" sound source has been rephrased to "Narrator/Voice"

### UI

-   The Resource Pack and Data Pack selection screens now have a search box
-   More text inputs now support selecting text by mouse dragging
-   Double-clicking a word in an edit box now selects it
-   When adding a new server to the server list, the server name is no longer prefilled
    -   When omitted, the default name "Minecraft Server" is used

**Mouse cursor**

-   Some UI components will now change the shape of the mouse cursor
    -   Examples: text inputs, numeric sliders, buttons, scroll bars
-   Additionally, clickable parts of text labels (like links) will now change the cursor to the "hand" shape
-   This feature can be disabled with the "Allow Cursor Changes" option in the Mouse Settings screen

**Debug Overlay**

-   The debug overlay is accessible by pressing F3, as before
-   The debug overlay can now be accessed from everywhere in the game, not only when in a game world
-   It is now less cluttered, displaying less information by default
-   Added a new Debug Options screen, available by pressing F3 + F6, which can be used to configure what debug information should be displayed
    -   For each element, you can configure whether it should be visible in the debug overlay or not, and can even set it to always be visible regardless of the debug overlay being active
    -   Some debug features that were previously available, like chunk border rendering or entity hitbox rendering, can now be toggled through this Debug Options screen
    -   Some debug features that were not previously available to the community, like Octree visualization, are now accessible through the Debug Options screen
    -   The state of the Debug Options screen is saved between launches of the game
    -   The Debug Options screen has the following preset profiles:
        -   `Default` resets everything to the default state
        -   `Performance` shows simple performance metrics, including the FPS meter always visible

> **Developer's Note**: _Previously, gathering the information every frame to render the F3 screen had a significant performance cost. So opening the screen to check your FPS noticeably dropped the FPS. Now checking your FPS in the `Performance` profile should not affect game performance._

**Chat**

-   It is now possible to start chatting while standing inside a Nether Portal
-   The chat will now remain open and unchanged if the player was chatting before being transferred to another dimension

### Accessibility

-   Dye Colors now have updated icons
    -   The goal with these is to enhance visual cohesion across the dye set while maintaining distinct shapes to support colorblind accessibility
-   A button leading to the Controls screen has been added to the Accessibility Settings screen
    -   The "Auto-Jump" option, as well as the "Sneak" and "Sprint" toggles have been removed from the Accessibility Settings screen
-   The "Show Subtitles" option has been rephrased to "Closed Captions" to more accurately describe what it does
-   The "Hide Lightning Flashes" accessibility setting has been renamed to "Hide Sky Flashes" as it includes the End light flashes

## Technical Changes

-   Pack versions now have minor versions
-   The Data Pack version is now 88.0
-   The Resource Pack version is now 69.0
-   Some previously hidden debug features have been exposed to players

### Pack Formats

-   The pack versions for data packs and resource packs now have minor versions
    -   A minor version increment of the game's pack version is backwards-compatible, meaning all packs made for previous iterations of the same major version will keep working
-   Packs can set compatibility requirements on minor versions in case they rely on resources introduced in a minor version

**Pack Metadata**

The pack.mcmeta format has been updated:

-   The `supported_formats` field has been removed
    -   If your pack declares support for a pack version with the previous format (data pack < 82, resource pack < 65), it is still required
    -   Otherwise, it is not allowed and must be removed
-   The `pack_format` field is now optional
    -   If your pack declares support for a pack version with the previous format (data pack < 82, resource pack < 65), it is still required
-   Added required field `min_format` - specifies the minimum version supported
    -   A full version is specified as a list of two integers, e.g. `[74, 1]`
    -   Specifying a single integer is interpreted as that major version, e.g. `74` is the same thing as `[74, 0]`
    -   Specifying a list of a single integer is interpreted the same as specifying that integer alone
-   Added required field `max_format` - specifies the maximum version supported
    -   A full version is specified as a list of two integers, e.g. `[74, 1]`
    -   Specifying a single integer is interpreted as any minor version, i.e. the minor version is `0x7fffffff`
    -   Specifying a list of a single integer is interpreted the same as specifying that integer alone
-   For overlay entries:
    -   The `formats` field has been removed
        -   If your pack includes any overlay range that includes a pack version with the previous format (data pack < 82, resource pack < 65), it is still required for all overlay definitions
        -   Otherwise, it is not allowed and must be removed
    -   Added required fields `min_format` and `max_format` with the same formats as the fields above with the same name for the `pack` section

### Debug Features

-   Some debug features that were previously removed during compilation are now preserved and can be used by players
-   Individual values can be enabled with JVM properties:
    -   First, a global debug flag must be enabled with `-DMC_DEBUG_ENABLED` or `-DMC_DEBUG_ENABLED=true`
    -   Then, a specific feature can be enabled, for example `-DMC_DEBUG_BRAIN` or `-DMC_DEBUG_BRAIN=true`
    -   To get the list of all available debug properties, add `-DMC_DEBUG_PRINT_PROPERTIES`
-   Warning: this is debug code, and the primary intention is to help modders - not for normal play. Handle with extreme care!
    -   Features can crash your game or corrupt your worlds
    -   Features are not guaranteed to work as intended
    -   Features might be added, changed or removed without a notice

## Data Pack Versions 82.0 Through 88.0

-   Added Mannequin entities
-   World Borders can now be set per dimension
-   Added a way to use GUI and item sprites in text
-   Player profiles in data components and block entities no longer resolve automatically
-   Added `fetchprofile` command for downloading player profiles
-   Renamed `chain` to `iron_chain`

### Mannequins

Added a new type of technical entity called `minecraft:mannequin` which can only be spawned with summon commands.

-   A Mannequin is a Player Avatar without a connected Player
-   Mannequins show a description text (by default `entity.minecraft.mannequin.label`) where a Player's `below_score` score would show
-   Mannequins function as Living Entities - they can hold and wear equipment, have attributes & effects, take damage, etc.
-   Mannequins accept the `minecraft:profile` component from spawner items

Data Fields:

-   `profile` - Which Player profile to show on the entity (same format as a `minecraft:profile` component), defaults to `{}` (i.e. static profile with both `id` and `name` missing)
-   `hidden_layers` - List of outer skin layers to hide
    -   Valid entries: `cape`, `jacket`, `left_sleeve`, `right_sleeve`, `left_pants_leg`, `right_pants_leg`, `hat`
-   `pose` - The pose of the mannequin
    -   Valid entries: `standing`, `crouching`, `swimming`, `fall_flying`, `sleeping`
-   `main_hand` - Which hand is the main hand of the Mannequin - one of `left` and `right`
-   `immovable` - Optional boolean specifying that the Mannequin cannot be moved (defaults to `false`)
-   `description` - Optional Text Component shown where a Player's `below_score` score would show
    -   The default `entity.minecraft.mannequin.label` text is shown if omitted
-   `hide_description` - Optional boolean specifying that no description should be shown at all
    -   A Mannequin with the description hidden displays as if a Player had no `below_score` display ![Mannequins of Alex and Sunny, swimming and standing up respectively, can be seen inside a Lush Cave.](https://launchercontent.mojang.com/v2/images/1.21.9mannequins.jpg)

### World Border

-   The World Border is now dimension-specific
    -   This means that each dimension can have its own World Border size, position, etc.

### Text Rendering

**`object` Text Component**

-   New text component with type `object` has been added
-   This component will display a non-character object as a part of text
-   Sprites are always rendered as a rectangle, 8x8 pixels in size
    -   Bold and italics styles are ignored
-   Format:
    -   `object`: type of object, string, see below for values
    -   `<type-specific>`: additional fields depending on object type
-   Similarly to the `nbt` text component, the `object` field can be omitted
    -   However, it's recommended to provide it for error checking

**`atlas` Object Type**

-   Renders a single sprite from a sprite atlas as a character
-   Format:
    -   `atlas`: namespaced ID of a sprite atlas, default value: `minecraft:blocks`
    -   `sprite`: namespaced ID of a sprite in the atlas, for example `item/porkchop`

General note about atlas contents:

-   Sprite Atlases contain textures for items, blocks, mob effects, GUI elements, etc.
-   The contents are controlled by files in the `assets/minecraft/atlases/` directory in a resource pack
-   The current contents can be reviewed with the F3+S key combination

**`player` Object Type**

-   Renders a player head
-   If a partial profile is given, the skin is resolved in the same way as the `minecraft:profile` component on a player head
-   Format:
    -   `player`: player profile
        -   `name`: player name, optional string
        -   `id`: player uuid, optional UUID
        -   `properties`: profile properties, optional map
    -   `hat`: controls rendering of a hat layer, boolean, default `true`

**`run_command` Click Event**

-   Previously, if the `command` field contained a command that required a signed message (`/say`, `/me`, `/msg`, `/tell`, `/w`, `/teammsg`, `/tm`), it would be silently discarded
-   Instead, a screen will be shown that lets the user insert the command into the chat window or copy the command to their clipboard if the chat window can't be opened

### Commands

-   The `summon` command now fails when trying to summon monsters while the difficulty is set to Peaceful
-   The `spawnpoint` and `setworldspawn` commands now have control over the full player look direction
    -   The `angle` argument has been removed
    -   Added an optional `rotation` argument which requires both yaw and pitch to be specified
-   The `setworldspawn` command is no longer limited to the Overworld
    -   This means players can respawn e.g. in the Nether when they have no Bed or Respawn Anchor
-   Server commands now run from the respawn dimension by default instead of always running in the Overworld

**Added `fetchprofile`**

-   A new command that has been added to fetch the contents of a player profile from Minecraft servers
-   Since the operation might take some time, it works asynchronously while the game keeps running
-   After successful completion, a message will be printed that lets the user perform various actions:
    -   Copy the contents of a fully resolved `minecraft:profile` component
    -   Get a Player Head with the resolved profile
    -   Summon a Mannequin with the resolved profile
    -   Copy a text component to display the player head in text
-   Since the result is not known at the time of execution, this command always returns `1`

Syntax:

-   `fetchprofile name <player name>` - resolves profile by name (case-insensitive)
-   `fetchprofile id <uuid>` - resolves profile by id

### Data Components

**Modified `minecraft:profile`**

**New Resolution Behavior**

-   Previously the contents of this component would permanently change when the profile was resolved, i.e. downloaded from Minecraft services
-   To avoid issues with this unexpected change, the resolved value is no longer stored and contents of the profile will always remain unchanged
-   That means this component now has two behaviors:
    -   Static: when it has the `properties` field or when both `name` and `id` are present or when both are missing
        -   In this state, the profile will always render as-is
        -   If the `properties` field is missing, a default skin will be used (selected based on `id`, same as in offline mode)
        -   That means the skin will be frozen at the moment of component creation
        -   This option is preferred for decorative uses
    -   Dynamic: when it has either `name` or `id` set (but not both)
        -   When an item containing this profile is rendered on the client side, the profile will be resolved to most recent value
        -   This means that this item will always render with the current skin of the targeted player
            -   Note: if a player changes their skin while the game is running, the change will not be visible until the client restarts
        -   The resolution might happen with a delay, during which the item will render with a default skin
        -   The profile name will replace the item name only when it is present
            -   Items with just `id` will show the default name
        -   Items with dynamic profiles are distinguished from static ones with a label in their tooltip
-   Items stack based on exact contents, so even if a dynamic component is eventually resolved to the same profile as a static one, they won't stack together
-   Player heads in older maps that have not been loaded in newer versions yet will usually be converted to dynamic contents

**Player Skin Overrides**

-   Profiles can now also have additional fields that can replace various values used for rendering
-   If any of the fields are omitted, the value from the resolved profile is used, even if the profile resolves to the default skin
-   New fields
    -   `texture` - Optional namespaced ID of the skin texture to use for rendering
        -   The skin is specified relative to the `textures` folder and with a `.png` suffix
        -   e.g. `entity/player/wide/steve` will use the default wide Steve skin
    -   `cape` - Optional namespaced ID of the cape texture to use for rendering
        -   When specified, uses the same format as the `texture` field
    -   `elytra` - Optional namespaced ID of the elytra texture to use for rendering
        -   When specified, uses the same format as the `texture` field
        -   If this value is not present either as an override or in a player profile, Mannequins using this profile will use the cape texture, or if that is also not present, the default Elytra texture when wearing an Elytra
    -   `model` - Optional model type, one of `wide` and `slim`

**`blocks_attacks` Item Component**

-   If the damage reduced in an attack is `0`, for example by the `angle` threshold not matching, the item can no longer get disabled in the attack, nor cause knockback due to blocking

### Entity Data

**Modified `minecraft:player`**

-   Changes to the `respawn` object
    -   `angle` has been renamed to `yaw` and is now a required field
    -   `pitch` has been added as a required field
    -   `dimension` is now a required field

### Block Entity Data

**Modified `minecraft:skull`**

-   `profile` field has been changed to match `minecraft:profile` component
    -   That means that it also becomes immutable and is resolved only when necessary

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
    -   Once any killed mob drops an item from this loot table, other mobs killed by the same Creeper will not drop from this loot table
-   Added `brush/armadillo` loot table for drops when an Armadillo is brushed
-   Added `gameplay/turtle_grow` loot table for drops when a Turtle grows into an adult
-   Added `harvest/beehive` loot table for drops when a Beehive or Bee Nest is harvested using Shears
-   Added `harvest/cave_vine` loot table for drops when a Cave Vine with Glowberries is harvested by interacting with it
-   Added `harvest/sweet_berry_bush` loot table for drops when a Sweet Berry Bush with Sweet Berries is harvested by interacting with it
-   Added `carve/pumpkin` loot table for drops when a Pumpkin is carved using Shears

### Loot Functions

**`minecraft:fill_player_head`**

-   The `entity` field now accepts new entity context values:
    -   `target_entity`
    -   `interacting_entity`

**`minecraft:set_lore`**

-   The `entity` field now accepts new context values:
    -   `target_entity`
    -   `interacting_entity`

**`minecraft:copy_custom_data`**

-   The `source` field now accepts new context values:
    -   `target_entity`
    -   `interacting_entity`

**`minecraft:copy_name`**

-   The `source` field now accepts new context values:
    -   `direct_attacker`
    -   `target_entity`
    -   `interacting_entity`

**`minecraft:copy_components`**

-   The `source` field now accepts new context values:
    -   `this`
    -   `attacker`
    -   `direct_attacker`
    -   `attacking_player`
    -   `target_entity`
    -   `interacting_entity`
    -   `tool`

### Predicates

**`minecraft:entity_scores`**

-   The `entity` field now accepts new entity context values:
    -   `target_entity`
    -   `interacting_entity`

**`minecraft:entity_properties`**

-   The `entity` field now accepts new entity context values:
    -   `target_entity`
    -   `interacting_entity`

### Enchantments

**`explode` Effects**

New field: `block_particles` - specifies per-block particles. Each block particle is randomly chosen according to weights. A set limit of block particles is spawned each tick from all explosions that tick.

Format: List of entries:

-   `weight`: Non-negative integer representing the random weight for this entry being chosen
-   `particle`: The particle to spawn
-   `scaling`: Optional scaling to apply between explosion center and block position, or `1.0` if not specified
-   `speed`: Optional scaling to apply to the speed of the particle, or `1.0` if not specified

### World Generation

-   The `initial_density_without_jaggedness` field in `noise_settings` definitions has been replaced with a `preliminary_surface_level` field
    -   `initial_density_without_jaggedness` was a 3D density function that was used to determine an approximate surface level by scanning for the first point with a density greater than `0.390625`
    -   `preliminary_surface_level` is a 2D density function that should produce the y-level of the approximate surface
    -   The `minecraft:find_top_surface` density function can be used to replicate the previous scanning

**Density Functions**

**Added `minecraft:find_top_surface`**

-   Approximates the topmost surface of a given density function
-   It scans from an upper bound to a lower bound to find the point at which the density changes from negative to positive
    -   The upper bound should be as close to the actual surface as possible for best performance
    -   The upper bound should never be lower than the actual surface

Fields:

-   `density` - density function to approximate the surface of
-   `upper_bound` - 2D density function providing the highest possible y-value
-   `lower_bound` - integer, lowest possible y-value
-   `cell_height` - positive integer defining the grid resolution on which to scan

**Added `minecraft:invert`**

-   Resolves to `1/argument`

Fields:

-   `argument` - density function

**Jigsaw Structures**

-   The `max_distance_from_center` field may now specify a different restriction on the vertical axis from horizontal
    -   This can be specified by an object with fields:
        -   `horizontal` - required integer between `1` and `128`
        -   `vertical` - optional integer between `1` and `4096` (default: `4096`)
        -   e.g.: `"max_distance_from_center": { "horizontal": 20, "vertical": 500 }`
    -   The previous format of a single inline value specifying both horizontal and vertical distance is still supported

### Tags

**Block Tags**

-   Added `#copper_chests` - all Copper Chest blocks
-   Added `#copper` - all Copper blocks
-   Added `#incorrect_for_copper_tool` - all blocks which will not drop items with a 