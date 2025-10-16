# Minecraft Snapshot 23w40a

We are now releasing Snapshot 23w40a, the first snapshot for 1.20.3! This snapshot contains improvements for shields, changes to chat component serialization and bug fixes.

## Changes

-   When a player is blocking with a shield, the arm with the shield now follows the direction the player is looking at, when viewed from third person perspective

## Technical Changes

-   The Data Pack version is now 19
-   A few minor changes to chat component serialization

### Chat components

#### Serialization

-   Plain-text chat components (text, no sibilings, no stylings) are now always serialized as string instead of `{"text': "blah"}`
-   Chat components now serialize to NBT when sent over network
-   Chat components now have an optional `type` value (allowed values: `text`, `translatable`, `score`, `nbt`, `keybind`) to speed up parsing and improve error checking
-   `id` field in `show_entity` `hoverEvent` style now also accepts UUID as an array of 4 ints
-   Numeric and boolean arguments for `translate` component are no longer converted to string
-   The following JSON component representations are no longer accepted:
    -   `null`
    -   `[]`
-   Errors in following style fields are no longer silently ignored:
    -   `color`
    -   `clickEvent`
    -   `hoverEvent`
    -   `hoverEvent[action=show_entity].contents.name`
    -   `hoverEvent[action=show_item].contents.tag`

## Data Pack Version 19

### Tags

-   Added `can_breathe_under_water` entity type tag which disables drowning
-   Added `can_break_armor_stands` damage type tag for damage types that can incrementally knock down armor stands

## Fixed bugs in 23w40a

-   [MC-47607](https://bugs.mojang.com/browse/MC-47607) Barrier particles aren't shown if particles are set to minimal
-   [MC-50647](https://bugs.mojang.com/browse/MC-50647) Slime mob spawners spawn slimes only in slime chunks
-   [MC-78314](https://bugs.mojang.com/browse/MC-78314) (Marker) Armor stands create bubbles in water
-   [MC-109101](https://bugs.mojang.com/browse/MC-109101) Shields do not block damage while the player faces straight up
-   [MC-114761](https://bugs.mojang.com/browse/MC-114761) Area effect cloud applies effect to dying mob
-   [MC-172398](https://bugs.mojang.com/browse/MC-172398) Fire texture renders according to the player's rotation in the player inventory
-   [MC-221558](https://bugs.mojang.com/browse/MC-221558) Light particles aren't shown if particles are set to minimal
-   [MC-227255](https://bugs.mojang.com/browse/MC-227255) Beehives and bee nests do not rotate/mirror correctly in structure blocks
-   [MC-236946](https://bugs.mojang.com/browse/MC-236946) Shield attack vector is normalized incorrectly
-   [MC-253819](https://bugs.mojang.com/browse/MC-253819) Bells don't rotate correctly when loaded by structure/jigsaw blocks
-   [MC-254850](https://bugs.mojang.com/browse/MC-254850) An operator can kick a host of a LAN world
-   [MC-255173](https://bugs.mojang.com/browse/MC-255173) Nether portal teleportation is inaccurate at large coordinate values
-   [MC-261303](https://bugs.mojang.com/browse/MC-261303) Decorated pots have an unused "cracked" block state
-   [MC-263123](https://bugs.mojang.com/browse/MC-263123) Mending incorrectly calculates overflow after full repair
-   [MC-264748](https://bugs.mojang.com/browse/MC-264748) GLX.;;_;;initGlfw Treats Pointer as a String
-   [MC-265353](https://bugs.mojang.com/browse/MC-265353) Clocks and Compasses in Item Display Entities don't show correct time/direction
-   [MC-265462](https://bugs.mojang.com/browse/MC-265462) Sending resource pack during play phase shows loading terrain screen for a long time
-   [MC-265519](https://bugs.mojang.com/browse/MC-265519) Game minimizes when certain areas of the screen are clicked on Mac in fullscreen mode

---

We are releasing a new snapshot that contains updates to support libraries, and a whole bundle of bug fixes!

## Technical Changes

-   The `LWJGL` library has been upgraded to version 3.3.2
-   The default Java version shipped with the game has been upgraded to Microsoft OpenJDK 17.0.8

## Fixed bugs in 23w35a

-   [MC-229121](https://bugs.mojang.com/browse/MC-229121) JVM crash in jdk.internal.loader.NativeLibraries.load
-   [MC-242385](https://bugs.mojang.com/browse/MC-242385) Inconsistency on the buffer size calculation in the chunk packet data
-   [MC-256549](https://bugs.mojang.com/browse/MC-256549) Baby camels that aren't moving face in the direction of their adults when pathfinding to players that are tempting them
-   [MC-256737](https://bugs.mojang.com/browse/MC-256737) Sniffers, frogs, goats, and camels prioritize pathfinding to their lover when fed over panicking when being damaged
-   [MC-259475](https://bugs.mojang.com/browse/MC-259475) The rotation of controlling passengers on sitting camels is sometimes restricted while adjusting your rotation slowly
-   [MC-259860](https://bugs.mojang.com/browse/MC-259860) Sitting camels that have passengers continuously look up and down for other players
-   [MC-261951](https://bugs.mojang.com/browse/MC-261951) Dragon/piglin head does not move when placed on a jukebox that is playing a record
-   [MC-264092](https://bugs.mojang.com/browse/MC-264092) Functions execute commands out of order when containing /say
-   [MC-264558](https://bugs.mojang.com/browse/MC-264558) The word "reconfiguring" is spelled as "reconfiging" within the "connect.reconfiging" translation key
-   [MC-264559](https://bugs.mojang.com/browse/MC-264559) Grammar error in "Added pack(s) contain symbolic links"
-   [MC-264561](https://bugs.mojang.com/browse/MC-264561) Some new strings introduced in 23w31a are missing articles
-   [MC-264566](https://bugs.mojang.com/browse/MC-264566) Force loaded chunks reset when changing versions
-   [MC-264619](https://bugs.mojang.com/browse/MC-264619) Strings for returning to menus and loading lists are inconsistently spelled and capitalized
-   [MC-264686](https://bugs.mojang.com/browse/MC-264686) Z-fighting occurs on the backs of bamboo chest rafts
-   [MC-264698](https://bugs.mojang.com/browse/MC-264698) The absorption effect is lost when reloading the world
-   [MC-264750](https://bugs.mojang.com/browse/MC-264750) Effects are lost when updating to 23w32a
-   [MC-264897](https://bugs.mojang.com/browse/MC-264897) Shift-clicking to unequip armor bypasses vibrations in survival
-   [MC-264899](https://bugs.mojang.com/browse/MC-264899) Narrator is not capitalized in the Narrator Hotkey tooltip
-   [MC-264915](https://bugs.mojang.com/browse/MC-264915) Some mobs can still attack you through blocks
-   [MC-264917](https://bugs.mojang.com/browse/MC-264917) Entry list gradients render below content
-   [MC-264920](https://bugs.mojang.com/browse/MC-264920) Some buttons within the "Report Player" menu are improperly capitalized
-   [MC-264947](https://bugs.mojang.com/browse/MC-264947) Torches generated on end fountain don't emit light

---

We are making some important updates to our Player Reporting Tool in this Snapshot to better protect the online safety of our players.

Playing Minecraft should be an inclusive and safe experience for everyone, which is why alongside in-game chat messages, you will now be able to report player skins and usernames that violate our Community Standards in Java Edition.

Just like with chat reports, nothing is automated. Any reported skin or username will be reviewed manually by a team of trained Minecraft moderators, who will use the submitted evidence to decide whether the skin and/or username is in breach of our Community Standards. Skins that are in violation of these standards will be removed from Minecraft and will no longer be accessible for use by any player. Usernames that are in violation of these standards will need to be changed before that player can play online via a shared server or Realm; though single player mode will still be accessible. To find out more about this and other safety policies, including more detail on the suspension procedure, appeals process, and how we handle malicious or repeat reporting, please visit our dedicated FAQ page.

## New Features

### Player Skin & Name Reporting

-   Player Skins and Names can now be reported in the Social Interactions Screen
-   If a skin or name is reported, and found to be violating the [Community Standards](https://www.minecraft.net/community-standards), our team of human moderators can action in a few ways:
    -   Ban the skin from being used by any player
    -   Ban the name from being used by any player
    -   Suspend the player from online play in the case of repeated offences
-   When a skin is banned, players with that skin:
    -   Will have their skin removed
    -   Will be notified when they launch the game
    -   Will be automatically assigned one of the default skins
    -   Can still play multiplayer and singleplayer
    -   Can select a new custom skin at any time
-   When a player's name is banned, that player:
    -   Will need to choose a new name
    -   Will be notified when they launch the game
    -   Will not be able to play online until they change their name
    -   Can still play singleplayer
-   A skin or name that has been banned cannot be used by any player in the future

## Changes

-   Sponges and Wet Sponges now have their own custom sounds
-   The calculations to determine whether a mob can attack a player or other mobs have been changed
-   Added the "Narrator Hotkey" accessibility option
    -   Allows the narrator to be toggled on and off with `Ctrl+B`
-   Added "I want to report them" Player Reporting category
-   A change has been reverted where armor trim patterns would be masked by the underlying armor texture

### Mob attack reach changes

The calculations to determine whether a mob can attack a player or other mobs have been changed. Previously a mob's horizontal width was used to determine their attack reach and their height had no effect. The area where a mob can attack is now their bounding box extended in horizontal directions.

Here are some situations where the new rules will affect the reach of mobs:

-   If a mob is entirely below you, or entirely above you, it will not be able to reach you
-   While riding on a medium-sized mob, like a Horse, you will be protected from small mobs, like Baby Zombies
-   While riding on a tall mob, like a Camel, you will be protected from standard-size mobs, like Zombies
-   Also, Ravagers won't be able to attack you through a few block thick walls anymore
-   However, to escape from an Enderman, you need to be at least 3 blocks above the ground, not 1.5 as before
-   Mobs will be able to attack you with the bottom of their hitbox, assuming your head is in range
-   Builds that trap hostile mobs might need to be adjusted to be safe

This change does not affect the reach of players, and mobs still need to see their target to attack it. We believe this new system will be more intuitive and will result in a more consistent behavior, and we welcome all feedback on this change.

## Technical Changes

-   The charts on the debug screen can now be toggled with F3+1 (pie chart), F3+2 (FPS and TPS) and F3+3 (bandwidth and ping) instead of holding Shift, Alt or Ctrl while opening the screen

### Data Pack Changes

-   Added `decal` field to armor trim patterns (default: `false`)
    -   If `true`, the pattern texture will be masked based on the underlying armor

## Fixed bugs in 23w33a

-   [MC-2310](https://bugs.mojang.com/browse/MC-2310) Wrong attack radius calculation damages/kills entities through blocks and corners
-   [MC-112133](https://bugs.mojang.com/browse/MC-112133) Eating chorus fruit does not reset fall distance
-   [MC-118616](https://bugs.mojang.com/browse/MC-118616) The sounds of magma cubes and slimes aren't controlled by the "Hostile Creatures" sound slider
-   [MC-122645](https://bugs.mojang.com/browse/MC-122645) Narrator hotkey cannot be customized or disabled
-   [MC-125046](https://bugs.mojang.com/browse/MC-125046) "RepairCost" NBT tag is created on any renamed item using anvils which can cause items to not stack properly
-   [MC-181109](https://bugs.mojang.com/browse/MC-181109) Grindstone adds RepairCost: 0
-   [MC-182820](https://bugs.mojang.com/browse/MC-182820) Repeaters and comparators use wood sounds for placing/breaking despite being made mostly of stone
-   [MC-197473](https://bugs.mojang.com/browse/MC-197473) Renamed block entities don't stack properly
-   [MC-200484](https://bugs.mojang.com/browse/MC-200484) Jukeboxes use stone sounds despite being composed predominantly of wood
-   [MC-214126](https://bugs.mojang.com/browse/MC-214126) Bees don't pollinate themselves with spore blossoms or chorus flowers
-   [MC-217628](https://bugs.mojang.com/browse/MC-217628) Levers use wood sounds rather than stone
-   [MC-217629](https://bugs.mojang.com/browse/MC-217629) Tripwire hooks use stone sounds, rather than wood
-   [MC-257909](https://bugs.mojang.com/browse/MC-257909) Zoglins, hoglins, and pandas can still attack players riding camels
-   [MC-264741](https://bugs.mojang.com/browse/MC-264741) Unequip vibration only works in creative mode
-   [MC-264743](https://bugs.mojang.com/browse/MC-264743) The "Debug" line on the debug screen that shows which debug graphs are enabled doesn't mention the ping and network traffic chart
-   [MC-264746](https://bugs.mojang.com/browse/MC-264746) Armor trims no longer render their second layer
-   [MC-264753](https://bugs.mojang.com/browse/MC-264753) Eye armor trim on chainmail helmets now has absolutely no effect
-   [MC-264773](https://bugs.mojang.com/browse/MC-264773) There's a misplaced label in the network traffic graph, overlapping minimum B/s rate text

---

Hello! This very technical snapshot contains vibration changes, data pack and resource pack changes, some network optimizations, new debug tools, and a some bug fixes. Enjoy!

## Changes

-   Changes to vibration mechanic

### Vibrations

-   Vibrations no longer risk being lost on simulation distance limit
-   Unequipping items emits a new `unequip` vibration of frequency 4
-   Chiseled Bookshelves emit a `block_change` vibration of frequency 11 when receiving books from Hoppers
-   Turtle Eggs cracking emit a `block_change` vibration of frequency 11
-   Turtle Eggs hatching emit a `block_destroy` vibration of frequency 12
-   Using Bone Meal emits an `item_interact_finish` vibration of frequency 3
-   Fire being doused by Water Potion emits a `block_destroy` vibration of frequency 12
-   Evokers evoking Vexes or Fangs emit an `entity_place` vibration of frequency 14
-   Carrots being eaten by Rabbits emit a `block_change` vibration of frequency 11
-   Sweet Berries being eaten by Foxes emit a `block_change` vibration of frequency 11
-   Camels eating Cactus emit an `eat` vibration of frequency 8

## Technical Changes

-   The resource pack version is now 17
-   A bug involving hunger icons was fixed in the slicer tool released with last snapshot. Here is [the new version](https://github.com/Mojang/slicer/releases/tag/v1.1.1)
-   The data pack version is now 17
-   Optimized networking to improve the experience on low bandwidth connections

### Resource Pack Version 17

-   The text field background is now a nine-sliced sprite at `widget/text_field` and `widget/text_field_highlighted`
-   The scroll bar in lists and text fields is now a nine-sliced sprite at `widget/scroller`

### Data Pack Version 17

-   Changed mob effect storage on items, entities and block entities

#### Mob effect storage changes

-   Game no longer uses numeric values when storing mob effects to world (so, for example, `4` becomes `minecraft:mining_fatigue`)
-   Various mob effect fields have been renamed for consistency with new structures

##### Mob Effect Instance

This structure is used in many places, so changes are described separately.

-   `Id` -> `id`, also changed from number to string id
-   `Ambient` -> `ambient`
-   `Amplifier` -> `amplifier`
-   `Duration` -> `duration`
-   `ShowParticles` -> `show_particles`
-   `ShowIcon` -> `show_icon`
-   `HiddenEffect` -> `hidden_effect`, also since it's mob effect instance, changes apply recursively
-   `FactorCalculationData` -> `factor_calculation_data`

##### Items

###### `potion`, `lingering_potion`, `splash_potion`, `tipped_arrow`

-   `CustomPotionEffects` -> `custom_potion_effects`, contents tranformed as a list of mob effect instances

###### `suspicous_stew`

-   `Effects` -> `effects`, for each entry:
    -   `EffectId` -> `id`, also changed from number to string id
    -   `EffectDuration` -> `duration`

##### Entities

###### `mooshroom`

-   Removed `EffectId` and `EffectDuration`
-   Added `stew_effects` with the same format as `suspicious_stew.effects` tag (i.e. list of effect id and duration)

###### `area_effect_cloud`

-   `Effects` -> `effects`, contents tranformed as a list of mob effect instances

###### `arrow`

-   `CustomPotionEffects` -> `custom_potion_effects`, contents tranformed as a list of mob effect instances

###### Players, Armor Stands and mobs

-   `ActiveEffects` -> `active_effects`, contents tranformed as a list of mob effect instances

##### Block Entities

###### `beacon`

-   `Primary` -> `primary_effect`, also changed from number to string id
-   `Secondary` -> `secondary_effect`, also changed from number to string id

#### Loot Tables

-   Added `sequence` loot function
    -   Contains 1 field:
        -   `functions`: an array of sub-functions to run in sequence
    -   Can also be declared as an inline array with out a type
        -   This matches the existing behavior where loot function JSON files can be declared as an array of composite functions
-   `all_of` predicates in loot tables can now be declared implicitly as an inline array without a type
    -   This similarly matches the existing behavior where loot predicate JSON files can be declared as an array of sub-predicates

### Network optimizations

-   Gameplay packets are now packed into bigger TCP-packets to reduce overhead from TCP-headers, significantly reducing network usage
-   Opening the debug screen with CTRL + F3 will now show charts for ping and received network traffic

### Secure Chat

-   Clients will no longer disconnect themselves when receiving an invalid chat message
    -   A placeholder message will instead be shown in chat

---

I was personally quite convinced that the game was already perfect, but it seems that our developers disagree. We are now releasing the first snapshot for Minecraft 1.20.2!

This snapshot brings changes to Diamond Ore generation, the ability to waterlog Barriers, and a change to Villager curing. It also brings a new Experimental Toggle that updates Villager trading, which we are eager to hear your feedback on. As well as a big batch of bug fixes, you will find a whole lot of technical features and changes in this snapshot, including new commands, function macros, persistent command history, network performance improvements, and much more.

Happy mining!

## New Experimental Features in 23w31a

### Villager Trade Rebalance

This snapshot introduces a new experimental Feature Toggle that updates the Wandering Trader and Librarian trades. You must turn on this Feature Toggle in the Experiments Menu when creating a new world if you want to test the new trades. You can find more information about Feature Toggles [here](https://www.minecraft.net/article/testing-new-minecraft-features/feature-toggles-java-edition).

As this is an experiment, we would really appreciate your feedback as work continues and to help us decide on the future direction for Villager trades. Visit [this link](https://aka.ms/VillagerTradingFeedback) to share your thoughts!

#### Librarian Changes

Before these changes, players could get any village enchantment from any Librarian. A novice Librarian could sell the best enchantment in the game! For some players, this felt too random and made trading feel overpowered when compared to using the Enchanting Table or searching for Enchanted Books in structures.

With the new rules, Librarians from different biomes sell different enchantments, and each village biome has one enchantment that is only sold by master Librarians.

Players will have to work towards getting the best trades instead of relying on random chance. We hope this makes Librarian trading more interesting and skillful, while also revealing some clues about their history of each village type through the enchantments that are sold there.

-   Librarians from different biomes now sell different Enchanted Books
-   Each village biome has one special enchantment that is only available from Master Librarians with full XP
-   This means that players must visit all seven village biomes to get the full set of villager enchantments
-   There are two secret village biomes where villages do not generate
    -   A player must build these villages to access their trades!
-   Some enchantments have been removed from village trading and must be found in other ways

#### Wandering Trader Changes

Some players felt that the Wandering Trader had unfair prices and didn't sell many useful items. We have lowered their prices, added more trades and increased the amounts available. The Wandering Trader will also now buy useful items from players, so it's possible to help them on their journey by giving them supplies even if you don't feel like buying anything.

-   Wandering Traders now have lower prices and have a higher amount of each item in stock
-   Wandering Traders now sell Logs
-   Wandering Traders can now buy many items, instead of only selling

## Changes

-   Diamond Ore is now generated more frequently in the Deepslate layers of the Overworld
-   Curing a Zombie Villager now only gives a big discount the first time
    -   There is no longer a bonus discount for reinfecting and curing the same Villager multiple times
-   Barrier blocks can now be waterlogged by players in Creative mode
    -   Water cannot be placed in them or taken out by non-direct interactions such as Dispensers
-   Players will no longer be able to crouch while riding vehicles
-   Chorus Flower no longer provides support for hanging or standing blocks

### Diamond Ore Distribution

In this snapshot, we have increased the amount of Diamond Ore found in the deepest parts of the world. Our goal is to make it more rewarding to mine for Diamonds in the Deepslate layers. We want your feedback on this! Please try out your favorite mining technique and let us know how it feels on [this feedback site](https://aka.ms/OreDistributionFeedback).

## Technical Changes

-   The resource pack version is now 16
-   The data pack version is now 16
-   History of used commands is now saved and accessible across worlds
-   Optimized the way chunks are sent to clients to allow players with low-bandwidth internet connections to play on multiplayer servers
-   Added support for multi-version packs
-   Changed network protocol to allow for more data-driven content in the future
-   Added new `log-ips` option to `server.properties`
-   Added validation for symbolic links in datapacks and resource packs
-   When hitboxes are displayed through F3+B, entities that have a passenger will display the passenger's attachment point

### Command History

-   The last 50 commands that you sent in chat will be remembered across game sessions
-   You can access the command and chat history by pressing up or down arrows in the chat
-   Regular chat is only persisted within the same game session (leaving a server or world clears them)
-   Recent commands are stored in `command_history.txt` in the game folder

### Chunk Sending Optimization

-   Chunks are no longer sent over the network to the client in one big continuous batch
-   They are instead sent in smaller batches depending on the available bandwidth. This means that:
    -   Clients with extremely low-bandwidth connections will not time out while loading the world
    -   Clients with low-bandwidth connections can interact with the world while some chunks are still loading
-   Only chunks within the client's render distance are now sent

### Multi-version Packs

New features have been added to datapacks and resource packs to allow creation of packs that are compatible with multiple versions of game.

#### Pack Metadata

-   Pack metadata now includes an optional field `supported_formats` which describes a range for pack formats that this pack supports
    -   Examples: `16`, `[16,17]`, `{"min_inclusive": 16, "max_inclusive": 17}`
-   `pack_format` field is still required and its format remains unchanged, to allow older game versions to read pack data
    -   If `supported_formats` is present, it must contain the value declared in `pack_format`
    -   Note: since this new information is ignored by older versions of the game, they will always see a "normal", single-version pack, without any extended compatibility

#### Overlays

-   Packs can now contain overlay directories ("overlays")
-   Overlays are sub-packs applied over the "normal" contents of a pack
    -   These directories have the same layout as the top-level pack, including the `assets` and `data` directories
    -   Overlays can be applied if they support the client's pack format
    -   Overlays can add and replace files, but not remove them
        -   For example, if the overlay `foo` is applied, the file `foo/assets/minecraft/textures/bar.png` will replace contents of `assets/minecraft/textures/bar.png`
    -   `pack.mcmeta` and `pack.png` are ignored in overlay directories
-   New section called `overlays` have been added to pack metadata
    -   It contains an `entries` field, containing a list of overlays
    -   Every overlay entry has two fields:
        -   `formats` - range of supported formats
        -   `directory` - overlay directory (allowed characters: `a-z`, `0-9`, `_` and `-`)
-   Order of application: overlays are stacked from the bottom to top of the list
    -   For example, if a pack has two overlays: `"entries": [{"directory":"A", ...}, {"directory":"B", ...}]`, the game will first look in `B`, then `A` and then in the top pack directory

### Network Protocol

As part of ongoing work towards more data-driven features, the network protocol has been changed to include a new configuration phase.

-   Configuration phase automatically starts after login phase (i.e. after client account has been verified) and lasts until the player joins the world (play phase)
-   Clients can stay in configuration phase indefinitely - it's up to server to release it to the world
-   Servers can also request clients to re-enter the configuration phase after it has entered the play phase
    -   Other players will see such clients as disconnected
-   Users in configuration phase will not be visible on the player list
-   Actions allowed in configuration phase (moved from play phase)
    -   Configuration of data-driven registries
    -   Configuration of enabled features
-   Actions shared between configuration and play phases:
    -   Application of server resource packs
    -   Update of tags
    -   Exchange of custom packets
    -   Ping and keep-alive packets
-   The server will now negotiate resource pack in the configuration phase
    -   This means that the player will no longer be in world when answering prompts and reloading resources

### `server.properties`

-   New option: `log-ips` (default true)
    -   When set to `false`, will prevent player IPs from being included in the log when players join the game

### Symbolic Link Validation

To improve safety, the game will now also detect symbolic links used inside data- and resource packs.

-   This feature expands on symbolic link validation in worlds added in the previous release
-   The game will now warn users if a pack added via drag and drop contains disallowed symbolic links
-   Packs containing disallowed symbolic links will not be visible in UI and commands
-   Additionally, directories and files that are not recognized as packs will no longer be copied via drag and drop
-   For a detailed explanation, see this [help article](https://aka.ms/MinecraftSymLinks)

### Telemetry

-   Added a button to the Telemetry Data Collection Screen that links to the Microsoft Privacy Statement

### Resource Pack Version 16

-   The process of upgrading your pack can be assisted by using this automated [Slicer](https://github.com/Mojang/slicer/releases/tag/v1.1) tool
-   All textures containing multiple sprites in a sheet for GUI have been split into individual sprites under `textures/gui/sprites` (automated by Slicer tool)
-   All textures in the `realms` namespace have been moved into the `minecraft` namespace (automated by Slicer tool)
-   `villager2.png` has been renamed to `villager.png` (automated by Slicer tool)
-   `icon/trial_available` and `realm_status/expires_soon` GUI sprites are animated with `.mcmeta` declarations instead of individual sprites (automated by Slicer tool)
-   The bundle tooltip background is now drawn as a nine-sliced sprite
-   The icons for the Accessibility, Language, Realms News buttons have been split from their underlying button texture
-   The Realms Invite button is now drawn as an overlay on the normal button texture
    -   The highlighted texture state for this button has been removed
-   The highlighted states for Realms invitation number icons have been removed
-   The exclamation marks on the `notification;;m;;ore.png` have been removed

#### GUI Sprite Sheet

-   Sprites used in GUI drawing have been split into individual sprite files instead of larger sprite sheets
    -   For example, `widgets/button.png` and `widgets/button_highlighted.png` have been split from `widgets.png`
-   Each sprite can now be individually overriden by a resource pack instead of replacing the entire sheet
-   Sprites are loaded into the `gui` atlas from the `textures/gui/sprites` directory

##### GUI Sprite .mcmeta

-   Any sprite can now be animated using `.mcmeta` files, similar to other atlases
    -   `icon/trial_available` and `realm_status/expires_soon` are now animated this way
-   Sprites in the `gui` atlas can now configure scaling behavior through a new `gui` section in `.mcmeta` files
    -   For example, button textures must be scaled based on how big the button should be
    -   The `gui` section in `.mcmeta` contains one `scaling` field:
        -   `type`: one of: `stretch` (default), `tile`, or `nine_slice`
        -   When `stretch`, the sprite will be stretched across the desired space
            -   No additional fields need to be defined
        -   When `tile`, the sprite will be repeated across the desired space, starting from the top-left
            -   `width`: number of pixels for this sprite to cover on-screen across its width
            -   `height`: number of pixels for this sprite to cover on-screen across its height
        -   When `nine_slice`, the sprite will be sliced into 4 corners, 4 edges, and 1 center slice, which will be tiled across the desired space
            -   `width`: number of pixels for this sprite to cover on-screen across its width
            -   `height`: number of pixels for this sprite to cover on-screen across its height
            -   `border`: the size in pixels that the border slices should cover on-screen, one of:
                -   Constant integer for uniform border size on all sides
                -   Object containing `left`, `top`, `right`, and `bottom`

### Data Pack Version 16

-   Gamerule `randomTickSpeed` now affects the rate of accumulation of snow and ice the same way it affects crops and other blocks affected by random ticking
-   Added a `random` command
-   New form of the `execute` command: `execute if function`
-   New form of the `return` command: `return run`
-   Added support for function macros
-   Changed Display entities post-teleport interpolation
-   Added new attribute `generic.max_absorption`
-   Renamed `belowName` value in display slot argument in `scoreboard` command to `below_name`
-   Game event changes
-   New tags

#### Commands

##### `random`

A new command for randomizing values and controlling random sequences. The `value` and `roll` forms can be used to draw a random value. In the case of `roll`, the resulting value is also shown in chat for all players.

Syntax:

    random value|roll <range> [<sequenceId>]
    random reset *|<sequenceId> [<seed>] [<includeWorldSeed>] [<includeSequenceId>]
    

Parameters:

-   `range`: A range of values to randomize between, inclusively
    -   For instance, 1..6 is a regular D6 roll
-   `sequenceId`: The name of a random sequence to sample or reset
-   `seed`: A seed to use for the random sequence after reset
-   `includeWorldSeed`: A boolean ;;[;;default: `true`;;];; specifying whether to include the world seed when seeding the sequence
    -   `false` means the sequence will evaluate to the same regardless of which world the command is run in
-   `includeSequenceId`: A boolean ;;[;;default: `true`;;];; specifying whether to include the sequence ID when seeding the sequence
    -   `false` means all sequences will evaluate to the same regardless of which name they have

By default, all sequences are seeded as `0`, `true`, `true`. Using `*` instead of a sequence ID resets all sequences and sets the default parameters.

If no seed is specified, the sequence resets to the default parameters.

Note that `random value|roll <range>` used without a sequence id is available to non-operator players.

##### `execute if function`

A new execute sub-command that runs a function or function tag and matches the return value(s). If a tag is given, all functions run regardless of the results of prior functions. Syntax:

`execute if|unless function <function> <continuation>`

Parameters:

-   `function`: The function or tag to run

###### Matching

The matching of the result value of the function(s) that run:

-   At least one of the functions must succeeed for the match to succeed
-   A succeessful call is defined as a function that:
    -   Uses the `return` command to return a value
    -   The return value is not 0

##### `return run`

A new form of the `return` command is now available, `return run`. Syntax:

`return run <command>`

This takes the `result` value from running the specified `command` and returns that as the return value of the function. In all other aspects, it works like `return` with a specified return value. If the given command fails, the return value is `0`.

#### Functions

-   A single backslash `;;`;; as the last non-whitespace character of a line now allows a command to be continued on the next line
    -   Leading and trailing whitespace of the following line are stripped before appending

##### Macros

Functions can now contain macro lines, making them Function Macros.

-   Any line beginning with `$` (as the first non-space character) marks a macro line
-   A macro line also contains one or more substitutions in the form of `$(variable)`
-   When calling a function macro a compound with data for all argument variables must be provided

###### Calling Function Macros

The `function` command has new forms:

`function <id> <compound>` `function <id> with <data source> [<path>]`

New Arguments:

-   `compound`: A data compound, enclosed in `{}`
-   `data source`: A data source specification, like what could already be used for `data get`
-   `path`: An NBT path specification

Notes:

-   The data source and path must specify a compound data entry
-   The compound must contain one entry for each variable used in the macro
-   More data may be present in the compound and if so is ignored
-   Calling a non-macro function with a data compound is silently ignored
-   When a macro is called, the values provided are substituted in place of the variable specifications and the resulting commands are executed
-   Any syntax errors in the lines resulting from variable substitution result in the entire function call being skipped

###### Performance Considerations

Using a macro means commands must be re-evaulated after variable substitution. This has an extra cost compared to running pre-parsed functions.

Regular commands (non-macro lines) are still pre-parsed. Only commands with variable substitutions in them are parsed when a macro is called and the game will attempt to cache the result of a certain parameter set being used in a call.

This makes repeated calls with the same parameter set cheaper than new calls with different parameters, but an overhead still remains compared to regular functions. Note that only the values references by macro as parameters are included in this cache, so any extra data in the provided compound is ignored.

#### Display Entity Interpolation

-   Display entities now start updating their client-side position and rotation on the first tick after an update
    -   In previous versions, updates were applied in the same tick, causing uneven motion
    -   New behavior is now similar to armor stands, mobs and players
-   On the server, position and rotation are still updated immediately
-   Duration of this interpolation is controlled by the field `teleport_duration`
    -   `0` means that updates are applied immediately
    -   `1` means that the display entity will move from current position to the updated one over one tick
    -   Higher values spread the movement over multiple ticks
    -   Please note that this value is clamped to avoid glitches due to periodic position updates
    -   The new value will apply only to position and rotation changes made after it changed
        -   That means any current movement will continue unchanged
-   Note: behavior while riding remains unchanged from previous versions

#### Attributes

-   Added new attribute `generic.max_absorption`
    -   `generic.max_absorption` acts similar to `generic.max_health`, but instead of being the upper bound for `Health`, it is the upper bound for `AbsorptionAmount`
    -   The mob effect `absorption` increases `generic.max_absorption` as well as fills the `AbsorptionAmount` to the max when applied

#### Game Events

-   `entity_roar` and `entity_shake` game events have been removed and replaced with `entity_action` game event

#### Tags

-   Added `no_knockback` damage type tag which causes knockback to not be caused by the damage itself
    -   Used in Vanilla for damage that is caused by events, such as explosions, which apply knockback separately
-   Added `non_controlling_rider` to represent entities that don't override their vehicles movement control
-   Added `concrete_powder` block tag for Concrete Powder blocks
-   Added `camel_sand_step_sound_blocks` block tag for blocks that produce `entity.camel.step_sand` sound

## Fixed bugs in Snapshot 23w31a

-   [MC-29371](https://bugs.mojang.com/browse/MC-29371) Several buttons and icons use the old tooltip design upon being hovered over
-   [MC-67532](https://bugs.mojang.com/browse/MC-67532) Bottom 2 rows of pixels in selected hotbar slot texture don't appear in game
-   [MC-69387](https://bugs.mojang.com/browse/MC-69387) The "/item" command cannot replace items within jukeboxes
-   [MC-80876](https://bugs.mojang.com/browse/MC-80876) Entity riding vehicle has always same offset
-   [MC-85582](https://bugs.mojang.com/browse/MC-85582) Entity models in the inventory can render outside the boundaries of the black box
-   [MC-93320](https://bugs.mojang.com/browse/MC-93320) Water freezes even if randomTickSpeed is 0
-   [MC-121772](https://bugs.mojang.com/browse/MC-121772) Can't scroll while holding SHIFT on macOS
-   [MC-122296](https://bugs.mojang.com/browse/MC-122296) Horizontal scrolling does not work on Mac ;;[;;Magic Mouse;;];;
-   [MC-122547](https://bugs.mojang.com/browse/MC-122547) Barriers can produce fall particles
-   [MC-140646](https://bugs.mojang.com/browse/MC-140646) Text fields don't scroll while selecting text with Shift
-   [MC-147766](https://bugs.mojang.com/browse/MC-147766) Shift key stays pressed until press any other key
-   [MC-164080](https://bugs.mojang.com/browse/MC-164080) Entities riding on Ghast are partially or fully inside it
-   [MC-181190](https://bugs.mojang.com/browse/MC-181190) The discount for curing a villager is multiplied if the villager is reinfected and cured again
-   [MC-190815](https://bugs.mojang.com/browse/MC-190815) Shulker boxes don't conduct redstone when open, but don't trigger redstone updates when opened
-   [MC-215768](https://bugs.mojang.com/browse/MC-215768) Sculk sensors do not detect turtles clearing away sand
-   [MC-228420](https://bugs.mojang.com/browse/MC-228420) World not loading / falling through the world when joining a server / travelling between dimensions / respawning
-   [MC-230732](https://bugs.mojang.com/browse/MC-230732) Minecraft local difficulty setting is calculated/displayed wrongly when running a world in a server
-   [MC-232840](https://bugs.mojang.com/browse/MC-232840) Baby zombie legs clip through heads of mobs they are riding
-   [MC-242076](https://bugs.mojang.com/browse/MC-242076) The skeleton of a spider jockey sits "inside" of spider model rather than on top of the spider
-   [MC-242092](https://bugs.mojang.com/browse/MC-242092) Texture map for magma cube (magmacube.png) has unused pixels
-   [MC-242395](https://bugs.mojang.com/browse/MC-242395) Texture map for the blaze (blaze.png) contains unused pixels
-   [MC-242396](https://bugs.mojang.com/browse/MC-242396) Texture map for armor stand (wood.png) contains unused pixels
-   [MC-242397](https://bugs.mojang.com/browse/MC-242397) Texture maps for cow, red & brown mooshroom (red/brown;;_;;mooshroom.png & cow.png) contain unused pixels
-   [MC-242398](https://bugs.mojang.com/browse/MC-242398) Texture maps for the sheep and sheep fur (sheep.png & sheep;;_;;fur.png) contain unused pixels
-   [MC-242591](https://bugs.mojang.com/browse/MC-242591) Texture maps for the Llama and Trader Llama (white/gray/creamy/brown.png) contain unused pixels
-   [MC-242592](https://bugs.mojang.com/browse/MC-242592) Texture map for the polar bear (polarbear.png) contain unused pixels
-   [MC-249109](https://bugs.mojang.com/browse/MC-249109) Sniffers, frogs, goats, and camels don't panic when attached to leads
-   [MC-252231](https://bugs.mojang.com/browse/MC-252231) Warm Frog texture has inconsistent pixels
-   [MC-254100](https://bugs.mojang.com/browse/MC-254100) Iron golem spawn rate decreased
-   [MC-255967](https://bugs.mojang.com/browse/MC-255967) Old chunks that would have Deep Dark biomes below Y=0 if generated newly doesn't completely generate; only Ancient Cities are spawned
-   [MC-256466](https://bugs.mojang.com/browse/MC-256466) Raft entities are named boats
-   [MC-256482](https://bugs.mojang.com/browse/MC-256482) Sculk sensors are not activated upon camels standing up or sitting down
-   [MC-256485](https://bugs.mojang.com/browse/MC-256485) Camels that spawn within villages can spawn inside blocks
-   [MC-256641](https://bugs.mojang.com/browse/MC-256641) Bamboo fence and fence gate aren't grouped with the other fences and fence gates in the crafting table
-   [MC-256675](https://bugs.mojang.com/browse/MC-256675) Z-fighting occurs between the legs of the camel and the texture of the saddle when it is sitting
-   [MC-256690](https://bugs.mojang.com/browse/MC-256690) Camels attempt to stand up when blocks are placed over them, causing them to take suffocation damage if blocks are at eye level
-   [MC-257342](https://bugs.mojang.com/browse/MC-257342) You get slowed down when riding a camel in a 3 block tall area
-   [MC-257431](https://bugs.mojang.com/browse/MC-257431) Bamboo fence gates utilize the wrong textures
-   [MC-257628](https://bugs.mojang.com/browse/MC-257628) Sculk sensors are not activated upon camels dashing
-   [MC-258379](https://bugs.mojang.com/browse/MC-258379) Parity issue: The locations of camels' ears differ across platforms
-   [MC-258620](https://bugs.mojang.com/browse/MC-258620) Piglins barter every 121 game ticks instead of every 120 game ticks
-   [MC-259152](https://bugs.mojang.com/browse/MC-259152) Player's model displayed in inventory while sneaking differs between the versions
-   [MC-259382](https://bugs.mojang.com/browse/MC-259382) Message "Failed to get element" is logged repeatedly when giving yourself armor with invalid trimming pattern or material
-   [MC-259401](https://bugs.mojang.com/browse/MC-259401) Lapis lazuli icons in enchanting table and smithing table are inconsistent
-   [MC-259452](https://bugs.mojang.com/browse/MC-259452) Baby Camel's laying down/getting up sounds are not sped up
-   [MC-259769](https://bugs.mojang.com/browse/MC-259769) Firework explosions no longer deal knockback to entities
-   [MC-259794](https://bugs.mojang.com/browse/MC-259794) Armor enchanted with curse of binding cannot be swapped via right-clicking in creative mode
-   [MC-260054](https://bugs.mojang.com/browse/MC-260054) Pink Petals hitbox does not adjust to contents
-   [MC-260058](https://bugs.mojang.com/browse/MC-260058) Pick Block does not work properly for blank decorated pots
-   [MC-260085](https://bugs.mojang.com/browse/MC-260085) Particles are created when using a brush on a barrier
-   [MC-260096](https://bugs.mojang.com/browse/MC-260096) Decorated pots don't have creative mode tooltips
-   [MC-260485](https://bugs.mojang.com/browse/MC-260485) The "/item" command cannot remove items within chiseled bookshelves
-   [MC-260490](https://bugs.mojang.com/browse/MC-260490) Passenger's riding position is too low for non-default-sized mobs
-   [MC-260604](https://bugs.mojang.com/browse/MC-260604) Terrible loudness following consecutive use of /fill
-   [MC-260675](https://bugs.mojang.com/browse/MC-260675) Decorated pots render blank on the first frame after being placed
-   [MC-260968](https://bugs.mojang.com/browse/MC-260968) The narrator does not narrate the word "Experimental" in the world selection screen
-   [MC-261123](https://bugs.mojang.com/browse/MC-261123) item;;_;;display entity breaks certain mobs' AI when being used as a passenger
-   [MC-261182](https://bugs.mojang.com/browse/MC-261182) Sign color looks different in world and in editing screen
-   [MC-261369](https://bugs.mojang.com/browse/MC-261369) Washed banner does not stack with blank banner
-   [MC-261411](https://bugs.mojang.com/browse/MC-261411) All Smithing Templates share the same translation key
-   [MC-261420](https://bugs.mojang.com/browse/MC-261420) Sculk sensor and calibrated sculk sensor don't detect a witch drinking a potion
-   [MC-261427](https://bugs.mojang.com/browse/MC-261427) Sculk sensors and calibrated sculk sensors don't detect totem of undying activating
-   [MC-261440](https://bugs.mojang.com/browse/MC-261440) Resizing the window makes it so you can't change names in anvils
-   [MC-261611](https://bugs.mojang.com/browse/MC-261611) Placing blocks against a waxed sign does not play the block's placement sound
-   [MC-261657](https://bugs.mojang.com/browse/MC-261657) Sculk sensor range is still spherical, creating different outputs from within a given block
-   [MC-261739](https://bugs.mojang.com/browse/MC-261739) Bamboo raft next to visually half blocks z-fights
-   [MC-261965](https://bugs.mojang.com/browse/MC-261965) The "Glow and Behold!" advancement is granted when interacting with empty signs while holding glow ink sacs, despite no glow ink sacs being consumed
-   [MC-262108](https://bugs.mojang.com/browse/MC-262108) Smithing table GUI issue with custom recipes
-   [MC-262132](https://bugs.mojang.com/browse/MC-262132) Pigstep music disc is in wrong location in the creative menu
-   [MC-262295](https://bugs.mojang.com/browse/MC-262295) Warped and Crimson hanging signs uses their respective plank sounds, despite their stripped stems having unique sounds
-   [MC-262436](https://bugs.mojang.com/browse/MC-262436) Copying a pot in creative does not save NBT data
-   [MC-262442](https://bugs.mojang.com/browse/MC-262442) Camels stand a bit too close to players that are tempting them
-   [MC-262613](https://bugs.mojang.com/browse/MC-262613) Mobs can't control some rideable mobs
-   [MC-262615](https://bugs.mojang.com/browse/MC-262615) Ridden camels need to be equipped with a saddle before they can be moved by mob control which is inconsistent with other rideable mobs
-   [MC-262620](https://bugs.mojang.com/browse/MC-262620) Llamas and trader llamas need to be tamed in order to be ridden by the mob which is inconsistent with other rideable mobs
-   [MC-262636](https://bugs.mojang.com/browse/MC-262636) Mobs with passengers that are slimes or magma cubes can't move and don't function correctly
-   [MC-262638](https://bugs.mojang.com/browse/MC-262638) When a "Size:0" slime and magma cube rides on some mobs the rendering position is too low
-   [MC-262720](https://bugs.mojang.com/browse/MC-262720) One of the pink petals' stems has an incomplete model
-   [MC-262751](https://bugs.mojang.com/browse/MC-262751) Blank decorated pot's NBT depends on method used to obtain it
-   [MC-262766](https://bugs.mojang.com/browse/MC-262766) NBSP is a valid invisible character that can be added into Book titles so that they have blank names
-   [MC-262804](https://bugs.mojang.com/browse/MC-262804) Players' swimming animations are jittery for other players
-   [MC-262947](https://bugs.mojang.com/browse/MC-262947) The "Smithing with Style" advancement doesn't grant experience upon completion
-   [MC-263011](https://bugs.mojang.com/browse/MC-263011) Sniffers can sniff out and follow players from incredibly large distances
-   [MC-263049](https://bugs.mojang.com/browse/MC-263049) Camels indefinitely dash while in lava
-   [MC-263126](https://bugs.mojang.com/browse/MC-263126) Sponges no longer make a sound when absorbing water
-   [MC-263200](https://bugs.mojang.com/browse/MC-263200) Entities riding baby sniffers render too high
-   [MC-263283](https://bugs.mojang.com/browse/MC-263283) Loading a 1.12.2 structure block with signs on 1.20 removes the text
-   [MC-263313](https://bugs.mojang.com/browse/MC-263313) You cannot use the TAB key to initially create a realm
-   [MC-263322](https://bugs.mojang.com/browse/MC-263322) When a camel walks on suspicious sand, the sound produced is "camel steps" instead of "camel sands"
-   [MC-263387](https://bugs.mojang.com/browse/MC-263387) The chat scroll bar no longer renders
-   [MC-263430](https://bugs.mojang.com/browse/MC-263430) Memory leak in TickingTracker
-   [MC-263833](https://bugs.mojang.com/browse/MC-263833) Minecraft is incorrectly assuming it is able to set the window icon on Wayland
-   [MC-263879](https://bugs.mojang.com/browse/MC-263879) Open shulker boxes transmit redstone power
-   [MC-264356](https://bugs.mojang.com/browse/MC-264356) Sniffers attached to a lead will dig in the same spot forever, ignoring "explored positions"
-   [MC-264467](https://bugs.mojang.com/browse/MC-264467) GUI texture "villager2.png" contains unused sections
-   [MC-264468](https://bugs.mojang.com/browse/MC-264468) GUI texture "legacy;;_;;smithing.png" still present in game files despite not being used anymore

---

In this snapshot we're bringing you an additional advancement, updates to telemetry, as well as a fix for an 11 year old bug!

Happy stepping!

## New Features

### New advancements

#### Adventure advancements

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

#### Changed triggers

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

#### `any_of`/`all_of`

-   Loot condition `alternative` has been renamed to `any_of`
-   Added new loot condition `all_of` that passes only when all sub-conditions pass. It has the same syntax as `any_of`

### Telemetry

This release includes a new global property sent with every event, a new property in the required WorldLoaded event, as well as two new opt-in events. The updated required events will help us troubleshoot launcher bugs more efficiently, and understand how Java Realms content is interacted with. The updated optional events will help inform game design decisions, and allow us to track and improve game load speeds.

#### All events

-   Added new property: `launcher_name`
    -   This is set based on the `minecraft.launcher.brand` system property. This will help us troubleshoot game launch related bugs more effectively, as we will be able to see whether the issue originated in the Minecraft launcher or a third-party program.

#### Updated required events

-   `world_loaded`
    -   Added new property: `realms_map_content`
        -   When loading into a Realms Map Content world (Minigame), the `world_loaded` event will receive the name of that map. This is to help us understand how Java Realms users interact with Java Realms adventure or minimap content.

#### New optional events

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

Hello! Here is a new snapshot with tweaks to the new features, new advancements, new music and some long-awaited technical changes. For some time we've been working on a new faster light engine, and we are finally ready to share the result. Special thank you to the community for not only pointing out the issues with the game's light engine, but also to community members that have developed mods and plugins which have highlighted these performance challenges and served as an inspiration for our new implementation.

Please break it in all possible ways and report bugs!

## New Features

-   Added new advancements for Trails & Tales
-   Added new Trails & Tales ambient music
-   Added a new music disc obtainable through archaeology

### New advancements

#### Husbandry advancements

-   `Smells interesting` : Obtain a Sniffer Egg
-   `Little sniffs` : Feed a Snifflet (requires `Smells interesting`)
-   `Planting the past` : Plant any Sniffer seed (requires `Little sniffs`)

#### Adventure advancements

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

#### New `unihex` glyph provider

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

#### New `reference` glyph provider

-   New glyph provider can be used to include providers from other fonts
    -   Providers are guaranteed to be loaded only once, no matter how many times they are included
-   Provider has one field `id`, that describes other font to be included in currently loaded one
    -   Inclusion is performed after all fonts are loaded, so it will include all providers for a given font defined in all datapacks

#### Removed `legacy_unicode` glyph provider

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

#### `return`

The `return` command can be used to control execution flow inside functions and change their return value. Effects:

-   Remaining separate top-level commands in the currently executing function (if any) are skipped
-   The result value of the `function` command that triggered the function is changed from the number of commands executed to `value`
-   The result value of the `return` command is also `value`

Syntax:

`return <value>`

Parameters:

-   `value`: An integer return value

### Advancements

#### New triggers

##### `recipe_crafted`

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

#### Rendering changes

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

We are now releasing Snapshot 23w14a, containing changes to Sculk blocks and Enchanting Tables, a new Quick Play functionality, an updated logo for Java Edition, a new main menu panorama, and lots of bug fixes!

Happy mining!

## Changes

-   Changes to Sculk blocks
-   Replaceable blocks no longer block the connection between Enchanting Tables and Bookshelves
-   In the Desert Temple, the new room has more of its roof collapsed and one block of Suspicious Sand is always visible in the top layer
-   Updated the Minecraft: Java Edition logo
-   The main menu background is now a Trails & Tales panorama

### Sculk Shrieker

-   Waterlogging them will now silence their shriek sounds
-   Added to the Redstone Blocks tab in the creative menu

### Sculk Sensor

-   For both normal and calibrated Sculk Sensors, the following changes have been made:
    -   Default redstone output has been modified to be more reliable for distance calculations
    -   Now strongly powers the block they are placed on

### Calibrated Sculk Sensor

-   Has an active cooldown of 1 second instead of 2 seconds
-   Detects vibrations up to 16 blocks away instead of 8 blocks
-   Accepts signals into the calibration input side more consistently with other Redstone components
    -   For example, signals can now be received through a block

## Technical Changes

-   Signs with click commands can now be interacted with even if the Sign is not waxed
    -   Signs with non-`text` chat components can no longer be edited
-   Added new loot table function called `reference`
-   Added support for Quick Play
-   Removed the `server` & `port` arguments as their functionality has been replaced by Quick Play
-   Changes to tags
-   The resource pack version is now 14
    -   Updated the sprite layout of `minecraft.png`
    -   Removed the overriding `minecraft.png` from the Programmer Art resource pack
    -   Updated the sprite layout of `invite_icon.png`

### Loot tables

#### `reference`

New function `reference` allows functions to call sub-functions (similar to `reference` condition). Fields:

-   `name` - location of function to call

### Quick Play

-   Added support for four new command line arguments that allow the game to be launched directly into a world
-   `quickPlayPath` takes a specified path for logging (relative to the run directory)
    -   If a path is provided the following will be logged upon joining a world:
        -   `type`: is either `singleplayer`, `multiplayer`, or `realms`
        -   `identifier`: represents the world you want to join
            -   For singleplayer, the folder name of the world
            -   For multiplayer, the IP address of the server
            -   For realms, the Realms ID
        -   `port`: represents the server port and is only logged for multiplayer
        -   `name`: The name of the world
        -   `gamemode`: The gamemode of the world
        -   `lastPlayedTime`: The time you joined the world
    -   Example:
        -   `--quickPlayPath "quickPlay/log.json"` will resolve into `.minecraft/quickPlay/log.json`
-   `quickPlaySingleplayer`, `quickPlayMultiplayer` and `quickPlayRealms` all take their respective `identifier`
    -   If one of these arguments is provided, the game will try to launch directly into the given world
    -   Examples:
        -   `--quickPlaySingleplayer "New World"`
        -   `--quickPlayMultiplayer "localhost:25565"`
        -   `--quickPlayRealms "1234"`

### Tags

-   Added `replaceable_by_trees`, to better express blocks that are replaced when the tree grows through them
-   Removed `replaceable_plants` since it was only used as a subset of the blocks for the tag above, and not as universally
-   Added `sword_efficient`, to represent blocks that are broken slightly faster by a sword than normal

## Fixed bugs in 23w14a

-   [MC-2474](https://bugs.mojang.com/browse/MC-2474) Transparent blocks placed between bookshelves and enchanting tables negate bonuses received from bookshelves
-   [MC-138358](https://bugs.mojang.com/browse/MC-138358) Levers on top of item frames Z-fighting with blocks in item frames
-   [MC-155084](https://bugs.mojang.com/browse/MC-155084) Horses' armor, reins, and bridles experience z-fighting
-   [MC-165773](https://bugs.mojang.com/browse/MC-165773) /execute run does not cause syntax error when arguments are missing
-   [MC-176309](https://bugs.mojang.com/browse/MC-176309) Illusioner has a few misplaced pixels left in their texture
-   [MC-203399](https://bugs.mojang.com/browse/MC-203399) Hoppers use the side texture on the bottom
-   [MC-203406](https://bugs.mojang.com/browse/MC-203406) Kelp and seagrass models appear to reference biome tints despite not using any
-   [MC-212271](https://bugs.mojang.com/browse/MC-212271) Glow squid and squid show Z-fighting
-   [MC-224433](https://bugs.mojang.com/browse/MC-224433) Clouds texture contains semi-transparent background
-   [MC-230792](https://bugs.mojang.com/browse/MC-230792) Cat's tail shows Z-Fighting
-   [MC-237556](https://bugs.mojang.com/browse/MC-237556) Legs of black cat model are white at the top
-   [MC-241314](https://bugs.mojang.com/browse/MC-241314) Filled cauldrons' bottom faces are still culled when they should not be
-   [MC-246459](https://bugs.mojang.com/browse/MC-246459) Drowned have some transparent pixels within their inner body texture
-   [MC-249514](https://bugs.mojang.com/browse/MC-249514) Button UV appears to be upside-down
-   [MC-251536](https://bugs.mojang.com/browse/MC-251536) Desert zombie villager feet still mismatch the sides of the feet
-   [MC-251537](https://bugs.mojang.com/browse/MC-251537) Desert (zombie) villager has solid-color on inner of arm, unlike other villagers
-   [MC-251538](https://bugs.mojang.com/browse/MC-251538) Desert villager missing some pixels for the sandals
-   [MC-252099](https://bugs.mojang.com/browse/MC-252099) Incorrect texture mapping in potted mangrove propagule (mirror effect)
-   [MC-254588](https://bugs.mojang.com/browse/MC-254588) Miscolored pixel on slowness effect icon
-   [MC-256419](https://bugs.mojang.com/browse/MC-256419) Incomplete commands run through aliases don't produce errors
-   [MC-256540](https://bugs.mojang.com/browse/MC-256540) The top texture of the camel's front left leg contains some redundant gray pixels
-   [MC-258939](https://bugs.mojang.com/browse/MC-258939) Non-atomic cached state can cause multithreaded crashes
-   [MC-259873](https://bugs.mojang.com/browse/MC-259873) Skeleton/Zombie Horse's chests are outdated
-   [MC-260036](https://bugs.mojang.com/browse/MC-260036) Can't plant cactus and sugar cane on suspicious sand
-   [MC-260042](https://bugs.mojang.com/browse/MC-260042) Cannot waterlog a decorated pot by using a water bucket or dispenser
-   [MC-260105](https://bugs.mojang.com/browse/MC-260105) The name tags of sniffers are partly inside their models
-   [MC-260152](https://bugs.mojang.com/browse/MC-260152) Sculk sensors are not activated by sniffers digging
-   [MC-260202](https://bugs.mojang.com/browse/MC-260202) The sound of using the brush isn't affected by blocks
-   [MC-260237](https://bugs.mojang.com/browse/MC-260237) Sniffers can sniff while panicking
-   [MC-260240](https://bugs.mojang.com/browse/MC-260240) Sniffers that are in love sometimes don't attempt to approach one another to breed
-   [MC-260347](https://bugs.mojang.com/browse/MC-260347) Falling suspicious sand does not break when reopening the world
-   [MC-260348](https://bugs.mojang.com/browse/MC-260348) Sniffers will never dig in normal mud despite being a "sniffer;;_;;diggable" block
-   [MC-260401](https://bugs.mojang.com/browse/MC-260401) When Brush is broken in offhand, the broken Particle is the Item in mainhand
-   [MC-260459](https://bugs.mojang.com/browse/MC-260459) Baby sniffers don't sound high pitched when sniffing
-   [MC-260467](https://bugs.mojang.com/browse/MC-260467) Torchflower is not grouped with other small flowers in the creative inventory
-   [MC-260478](https://bugs.mojang.com/browse/MC-260478) Torchflower crop hitboxes don't change in size according to their age
-   [MC-260527](https://bugs.mojang.com/browse/MC-260527) The coordinates of the sniffer "minecraft:sniffer;;_;;explored;;_;;positions" tag do not check the dimension
-   [MC-260778](https://bugs.mojang.com/browse/MC-260778) Sniffer tries to sniff out blocks outside the world border
-   [MC-260779](https://bugs.mojang.com/browse/MC-260779) Sniffers can dig into blocks outside the world border
-   [MC-260810](https://bugs.mojang.com/browse/MC-260810) Villagers can't pick up torchflower seeds, despite being able to farm torchflowers
-   [MC-261167](https://bugs.mojang.com/browse/MC-261167) Suspicious gravel does not have an assigned tool
-   [MC-261171](https://bugs.mojang.com/browse/MC-261171) You can't plant bamboo on suspicious gravel
-   [MC-261172](https://bugs.mojang.com/browse/MC-261172) Pitcher crop hitboxes don't change in size according to their age
-   [MC-261174](https://bugs.mojang.com/browse/MC-261174) Suspicious gravel is not part of the #overworld;;_;;carver;;_;;replaceables tag, causing carvers to not cut through it
-   [MC-261176](https://bugs.mojang.com/browse/MC-261176) Pitchers don't maintain the farmland used to grow it
-   [MC-261179](https://bugs.mojang.com/browse/MC-261179) Attempting to interact with a waxed sign plays a sound but displays no subtitle
-   [MC-261183](https://bugs.mojang.com/browse/MC-261183) Sniffer egg sound events are listed under "entity" instead of "block"
-   [MC-261186](https://bugs.mojang.com/browse/MC-261186) Entities don't recognize sniffer eggs as obstacles when pathfinding
-   [MC-261187](https://bugs.mojang.com/browse/MC-261187) Entities will often spin while pathfinding on top of sniffer eggs
-   [MC-261189](https://bugs.mojang.com/browse/MC-261189) Inconsistent naming of block states for sniffer and turtle eggs

---

In this week's snapshot 23w13a we're following up on all the new things in last week's snapshot with a big round of bug fixes. Happy mining!

## Changes

-   GUI can be scaled on the Video Settings screen by holding `Ctrl` and scrolling the mouse wheel

## Fixed bugs in Snapshot 23w13a

-   [MC-159637](https://bugs.mojang.com/browse/MC-159637) Mobs with passengers have broken movements
-   [MC-230916](https://bugs.mojang.com/browse/MC-230916) "Potted Flowering Azalea Bush Plant" uses the wrong texture
-   [MC-256503](https://bugs.mojang.com/browse/MC-256503) Camel can swim sitting down
-   [MC-256506](https://bugs.mojang.com/browse/MC-256506) Camels riding entities get permanently stuck in dash mode
-   [MC-257246](https://bugs.mojang.com/browse/MC-257246) Horses do not make step;;_;;wood sounds when walking on Nether wood, cherry wood, bamboo wood, or stems
-   [MC-257268](https://bugs.mojang.com/browse/MC-257268) The dashing animations of camels sometimes aren't displayed for other players
-   [MC-259364](https://bugs.mojang.com/browse/MC-259364) The "item.minecraft.smithing;;_;;template.netherite;;_;;upgrade.base;;_;;slot;;_;;description" string is missing a serial comma
-   [MC-260075](https://bugs.mojang.com/browse/MC-260075) Player holds brush by ferrule in third person
-   [MC-260086](https://bugs.mojang.com/browse/MC-260086) Entities riding sniffers are positioned too low down
-   [MC-260090](https://bugs.mojang.com/browse/MC-260090) Sniffers ignore the "minecraft:generic.movement;;_;;speed" attribute
-   [MC-260093](https://bugs.mojang.com/browse/MC-260093) Particles spawned by brushes in the left hand move in the wrong direction
-   [MC-260146](https://bugs.mojang.com/browse/MC-260146) Pink petals are not next to other flowers in the creative inventory
-   [MC-260238](https://bugs.mojang.com/browse/MC-260238) Sniffer digging particles are produced slightly too high up
-   [MC-260252](https://bugs.mojang.com/browse/MC-260252) Sniffer walking animation is broken when walking on ice
-   [MC-260320](https://bugs.mojang.com/browse/MC-260320) Parity Issue: Snifflets (Baby Sniffers) have an inconsistent model with Bedrock
-   [MC-260435](https://bugs.mojang.com/browse/MC-260435) Sniffers don't play their walking animation when moving through cobwebs
-   [MC-260454](https://bugs.mojang.com/browse/MC-260454) Decorated pots are translated off-center when displayed on head
-   [MC-260465](https://bugs.mojang.com/browse/MC-260465) The torchflower crop still has an age 2 blockstate that looks like the regular torchflower
-   [MC-260693](https://bugs.mojang.com/browse/MC-260693) potted;;_;;torchflower is still not part of the #flower;;_;;pots block tag
-   [MC-260834](https://bugs.mojang.com/browse/MC-260834) "Alpha" can play during gameplay
-   [MC-260898](https://bugs.mojang.com/browse/MC-260898) Brushes can be used through entities
-   [MC-260974](https://bugs.mojang.com/browse/MC-260974) Aggressive mobs can't control "vehicle" mobs
-   [MC-261170](https://bugs.mojang.com/browse/MC-261170) Sniffer egg faces aren't culled when covered by blocks
-   [MC-261181](https://bugs.mojang.com/browse/MC-261181) The "Glow and Behold!" advancement is granted when interacting with waxed signs while holding glow ink sacs
-   [MC-261190](https://bugs.mojang.com/browse/MC-261190) Signs no longer resolve JSON text components
-   [MC-261191](https://bugs.mojang.com/browse/MC-261191) Pitcher plants aren't part of the #minecraft:flowers or #minecraft:tall;;_;;flowers block tags
-   [MC-261193](https://bugs.mojang.com/browse/MC-261193) Calibrated sculk sensor placed by commands is waterlogged by default
-   [MC-261201](https://bugs.mojang.com/browse/MC-261201) Pitcher plant can be replaced by the use of placed blocks, which is not consistent with other tall flowers
-   [MC-261204](https://bugs.mojang.com/browse/MC-261204) When is farmland broken under a pitcher crop, the crop doesn't get broken
-   [MC-261205](https://bugs.mojang.com/browse/MC-261205) Using bone meal on pitcher pod (crop) advances several growth stages at once
-   [MC-261206](https://bugs.mojang.com/browse/MC-261206) "A Seedy Place" advancement not granted when planting Pitcher Pods
-   [MC-261213](https://bugs.mojang.com/browse/MC-261213) Sniffer eggs can be destroyed by fluids which is different from turtle eggs
-   [MC-261223](https://bugs.mojang.com/browse/MC-261223) Editing a hanging sign with a right click doesn't work while holding a placeable object
-   [MC-261224](https://bugs.mojang.com/browse/MC-261224) Editing sign from an angle (or the side) will edit the back instead of the front
-   [MC-261229](https://bugs.mojang.com/browse/MC-261229) Crashes and Chunk Resetting involving Suspicious Sand with Loot Tables updating from 1.19.4
-   [MC-261232](https://bugs.mojang.com/browse/MC-261232) Texture minecraft:block/sniffer;;_;;egg;;_;;slightly;;_;;cracked with size 40x32 limits mip level from 4 to 3
-   [MC-261237](https://bugs.mojang.com/browse/MC-261237) Using bone meal on upper pitcher crop doesn't advance the age of the lower half
-   [MC-261241](https://bugs.mojang.com/browse/MC-261241) Saddle equips sound plays twice when equipping a saddle on a camel
-   [MC-261243](https://bugs.mojang.com/browse/MC-261243) Pitcher Crop isn't part of the #crops tag
-   [MC-261262](https://bugs.mojang.com/browse/MC-261262) Raiser and Wayfinder smithing templates are offset by one pixel
-   [MC-261264](https://bugs.mojang.com/browse/MC-261264) The advancement "Two by Two" is no longer obtainable due to the change to sniffer's breeding
-   [MC-261275](https://bugs.mojang.com/browse/MC-261275) Sniffers drop moss blocks when killed

---

Well hello fellow Minecraft lovers! It is time for the first snapshot for 1.20. We know we promised no more major features, so how did we end up with such a big snapshot? You thought the trails were over? NO! In snapshot 23w12a we have even more tales to tell! Our devs apparently could not resist throwing in a few extra additions. Enjoy!

## New Features

-   All features and changes from the "Update 1.20" experimental pack are now part of the game
-   Vibration resonance functionality has been added to Blocks of Amethyst
-   Added the Calibrated Sculk Sensor block
-   Added Suspicious Gravel, more Archaeology sites, and new Pottery Shards
-   Added 5 new armor trims
-   Signs have improved customization options
-   Added Sniffer Egg
-   Added Pitcher Plant

### Vibration Resonance

-   Blocks of Amethyst have a new behavior when placed adjacent to Sculk Sensors
    -   If that Sculk Sensor receives a vibration, the Block of Amethyst will re-emit its frequency as a separate vibration at its location
-   This behaviour is called Vibration Resonance, and allows players to move vibration frequencies across long distances without having to recreate the vibration naturally

### Calibrated Sculk Sensors

-   A new variant of Sculk Sensors which allows you to filter vibrations based on their frequency level
-   They are not found naturally and can only be crafted with 1 Sculk Sensor and 3 Amethyst Shards in the Crafting Table
-   One side of the Calibrated Sculk Sensor can receive a redstone signal as input
    -   The strength of that redstone signal is the only vibration frequency the Sculk Sensor will listen to

### Archaeology

-   Added Suspicious Gravel block
    -   It has the same characteristics as Suspicious Sand
-   Added Suspicious Gravel to Cold Ocean Ruins
-   Added Suspicious Sand to Warm Ocean Ruins
    -   Sniffer Eggs can be found here
-   Added the Trail Ruins, a buried structure from a lost culture
    -   Four Armor trims can be found here
-   Added 16 Pottery Shards (so there are now 20 Pottery Shards in total)
    -   These have been distributed between the 5 Archaeology sites: Desert Wells, Desert Temples, Cold Ocean Ruins, Warm Ocean Ruins, and Trail Ruins

### Armor Trims

New armor trim Smithing Templates have been added to the following structures:

-   Trail Ruins
    -   Wayfinder Armor Trim
    -   Raiser Armor Trim
    -   Shaper Armor Trim
    -   Host Armor Trim
-   Ancient City
    -   Silence Armor Trim

### Signs

-   Sign text can now be edited after being placed in the world
    -   This can be done by interacting with the Sign
-   Both sides of the Sign can now have separate text and colors, allowing for further customization options
    -   By default, a Sign will prompt you to input the front side's text when placed
    -   To apply text to the back-side, you must walk to the other side and interact with that face to edit it
-   Signs can now also be waxed with Honeycomb, preventing any further edits to its text
    -   Click commands on Signs can only be invoked when the Sign is waxed
    -   If a Sign with a click command is not waxed, interacting with it will not invoke the command and instead open up the edit screen as usual

### Sniffer Egg

-   Can be found in the Suspicious Sand of Warm Ocean Ruins
-   When two Sniffers breed they do not immediately spawn a Snifflet; instead, a Sniffer Egg is dropped
-   Hatching
    -   When placed on Moss, the Egg will hatch after approximately 10 minutes
    -   On all other blocks, it will hatch in approximately 20 minutes

### Pitcher Plant

-   The Sniffer can now occasionally Sniff up a Pitcher Pod item
    -   This Pod, when planted in Farmland, grows into a Pitcher Crop, which has five growth stages
    -   Once fully grown, the Pitcher Crop can be harvested, yielding a two-block-tall Pitcher Plant

## Changes

-   Vibration frequencies of many actions in the game have been tweaked
-   Wither effect particle color has been adjusted to make it more distinguishable
-   Potion of Slow Falling color has been adjusted to make it more distinguishable
-   Step sounds can now combine for blocks walked through and stepped on

### Vibration Frequencies

In preparation for the Calibrated Sculk Sensor, vibration frequencies have been greatly simplified to prevent unwanted interference. The following are category descriptions for each frequency and the expected events that they correspond to:

1.  Movement in any medium (land, water and air)
2.  Landing on any surface (land or water)
3.  Item interactions
4.  Gliding with an elytra or unique mob actions (Ravager roar, Wolf shaking, etc)
5.  Dismounting a mob or equipping gear
6.  Mounting a mob or interacting with a mob
7.  Mobs and players getting damaged
8.  Consuming items (drinking and eating)
9.  Blocks 'deactivating' (door close, chest close, button unpress, etc)
10.  Blocks 'activating' (door open, chest open, button press, etc)
11.  Blocks changing (cauldron water level rising, adding food to campfire, etc)
12.  Blocks being destroyed
13.  Blocks being placed
14.  Mobs and players teleporting or spawning
15.  Mobs and players dying or an explosion

### Combination Step Sounds

-   Combines two different step sounds
-   Occurs for carpets, snow, nether sprouts, as well as warped and crimson roots
    -   The top-most block you are walking on is played as normal
    -   The block underneath is played at a lower volume and pitch

### Armor Trims

-   The Dune Armor Trim now has a brand-new pattern and Smithing Template icon
-   The Dune Armor Trim's old pattern is now used by the Sentry Armor Trim
    -   A new icon has been made for the Sentry Armor Trim Smithing Template to fit this pattern
-   The Sentry Armor Trim's old pattern is now used by the new Shaper Armor Trim

## Technical Changes

-   The data pack version is now 13, accounting for sign data format changes
-   Added a `capped` rule structure processor that limits the number of replaced blocks for a structure piece to a configured maximum
-   Configuring block entity fields in a `rule` processor rule is now delegated to a referenced `block_entity_modifier` instead of the previously fixed `output_nbt` configuration
-   Game events have changed vibration frequency and some have been removed
-   Tweaked display entity interpolation
-   Removed `update_1_20` feature flag and built-in datapack - features are no longer experimental

### Structure post-processors

#### Capped post-processor

-   A `capped` post-processor has been added which can limit how many blocks a delegated post-processor randomly transform in a structure
-   This can be used to configure a structure piece to have an exact amount of specific blocks, instead of using random distribution
-   The `capped` post-processor has following required parameters:
    -   `delegate` A post-processor which performs the actual block transformation
    -   `limit` Maximum amount of blocks that the delegated post-processor can transform
        -   The blocks inside a structure are all randomly passed to the delegated post-processor until it has transformed the limited amount
        -   Either constant or random number generator sampled during post-processing

#### Rule post-processor block entity configuration

-   Previously a rule could specify an optional fixed `output_nbt` which would be added to the processed output block entity
-   This field has now been changed to reference a `block_entity_modifier`
-   Existing `block_entity_modifier`'s are:
    -   `passthrough` Retains existing fields on the block entity
        -   This is the default if no `block_entity_modifier` is specified
    -   `append_static` Similar to previous `output_nbt` this provides fixed fields to add to the block entity
        -   A minor change is that this modifier appends configured fields to the processed block instead of replacing existing fields
    -   `clear` Removes any existing fields on the block entity
    -   `append_loot` Appends a loot table and seed to the block entity through required parameter:
        -   `loot_table` Referenced loot table to add to block entity as `LootTable` field
        -   Field `LootTableSeed` is also added to the block entity using random seeded by block position

### Game Events

-   `piston_contract` game event has been removed in favor of `block_deactivate`
-   `piston_extend` and `dispense_fail` game events have been removed in favor of `block_activate`
-   Many game events have new vibration frequencies:
    -   1: `step`, `swim`, `flap`
    -   2: `projectile_land`, `hit_ground`, `splash`
    -   3: `item_interact_finish`, `projectile_shoot`, `instrument_play`
    -   4: `entity_roar`, `entity_shake`, `elytra_glide`
    -   5: `entity_dismount`, `equip`
    -   6: `entity_mount`, `entity_interact`, `shear`
    -   7: `entity_damage`
    -   8: `drink`, `eat`
    -   9: `container_close`, `block_close`, `block_deactivate`, `block_detach`
    -   10: `container_open`, `block_open`, `block_activate`, `block_attach`, `prime_fuse`, `note_block_play`
    -   11: `block_change`
    -   12: `block_destroy`, `fluid_pickup`
    -   13: `block_place`, `fluid_place`
    -   14: `entity_place`, `lightning_strike`, `teleport`
    -   15: `entity_die`, `explode`

### Tags

#### Step Sounds

-   The blocks that can produce a combination of step sounds is controlled by `combination_step_sound_blocks`

### Display entity

#### Interpolation changes

-   Previous values are always discarded if `interpolation_duration` is `0`
-   Made sure that render properties are applied at the same time (so `block_state` is applied at the same time as transformation, i.e. at next tick after receiving update)
-   Entities are not rendered unless initial data is received. That means display entities might not show on the first tick.
-   Note: due to how game handles updates, changes to entities made after summoning might be delivered to clients with later tick

## Fixed bugs in Snapshot 23w12a

-   [MC-157727](https://bugs.mojang.com/browse/MC-157727) The small cube in honey/slime blocks isn't displayed in inventory
-   [MC-165221](https://bugs.mojang.com/browse/MC-165221) 3D Modeled Potions are not rendered correctly in the "GUI Display"
-   [MC-197241](https://bugs.mojang.com/browse/MC-197241) Players can change the color of a wolf's collar even if they're not its owner
-   [MC-201647](https://bugs.mojang.com/browse/MC-201647) Entity riding an entity can cause location/coordinate desync
-   [MC-256488](https://bugs.mojang.com/browse/MC-256488) Bamboo Raft and Raft with Chest models float above ground
-   [MC-256551](https://bugs.mojang.com/browse/MC-256551) Baby camels have a visible inventory
-   [MC-256585](https://bugs.mojang.com/browse/MC-256585) Z-fighting occurs on the text of hanging signs
-   [MC-259201](https://bugs.mojang.com/browse/MC-259201) The tops and bottoms of donkeys' ears are miscolored
-   [MC-259879](https://bugs.mojang.com/browse/MC-259879) Display entities with a rather large shadow;;_;;radius value can cause performance issues
-   [MC-260020](https://bugs.mojang.com/browse/MC-260020) Reloading the world resets the Brown Mooshroom's given flower
-   [MC-260043](https://bugs.mojang.com/browse/MC-260043) Decorated Pots don't play breaking sound in creative mode
-   [MC-260047](https://bugs.mojang.com/browse/MC-260047) Decorated pots from the creative inventory and new blank decorated pots with no NBT will match their texture to the last decorated pot you crafted
-   [MC-260053](https://bugs.mojang.com/browse/MC-260053) When rotating a decorated pot with the debug stick, it will spawn a decorated pot item
-   [MC-260061](https://bugs.mojang.com/browse/MC-260061) Sniffer's ears and head z-fight
-   [MC-260069](https://bugs.mojang.com/browse/MC-260069) Growing cherry trees inside each other causes their leaves to decay
-   [MC-260240](https://bugs.mojang.com/browse/MC-260240) Sniffers that are in love sometimes don't attempt to approach one another to breed
-   [MC-260251](https://bugs.mojang.com/browse/MC-260251) The walking animations of sniffers don't change in relation to their movement speed
-   [MC-260282](https://bugs.mojang.com/browse/MC-260282) Sniffers can sniff out and follow players in spectator mode
-   [MC-260296](https://bugs.mojang.com/browse/MC-260296) Pink petal block models are not optimized
-   [MC-260317](https://bugs.mojang.com/browse/MC-260317) Sniffers try to sniff out obstructed blocks they can't reach
-   [MC-260320](https://bugs.mojang.com/browse/MC-260320) Parity Issue: Snifflets (Baby Sniffers) have an inconsistent model with Bedrock
-   [MC-260326](https://bugs.mojang.com/browse/MC-260326) Dying sniffers continue to dig
-   [MC-260409](https://bugs.mojang.com/browse/MC-260409) Cherry Grove biome is not in the #is;;_;;overworld biome tag
-   [MC-260503](https://bugs.mojang.com/browse/MC-260503) Sniffers refuse to dig into soil with a non-solid block on top
-   [MC-260632](https://bugs.mojang.com/browse/MC-260632) Riding an entity that is far away causes client/server desync
-   [MC-260678](https://bugs.mojang.com/browse/MC-260678) Potion of Invisibility looks too similar to the Potion of Slow Falling
-   [MC-260750](https://bugs.mojang.com/browse/MC-260750) Magma blocks use unnecessary random ticking for an outdated feature, causing performance issues
-   [MC-260757](https://bugs.mojang.com/browse/MC-260757) Updating a large amount of Iron Bars causes the game to hang in-game or during the Saving world screen
-   [MC-260777](https://bugs.mojang.com/browse/MC-260777) Sniffers ignore some dangerous blocks while sniffing and pathfinding resulting in them being damaged
-   [MC-260778](https://bugs.mojang.com/browse/MC-260778) Sniffer tries to sniff out blocks outside the world border
-   [MC-260779](https://bugs.mojang.com/browse/MC-260779) Sniffers can dig into blocks outside the world border
-   [MC-260839](https://bugs.mojang.com/browse/MC-260839) Mobs can replace weapons held in their main hand with armor
-   [MC-260885](https://bugs.mojang.com/browse/MC-260885) Display entities summoned with initial transformation interpolate incorrectly from default transformation during next transformation
-   [MC-260897](https://bugs.mojang.com/browse/MC-260897) Display entity's previous state of interpolation doesn't work as expected

---

