# Minecraft: Java Edition 1.19.2

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
    -   This means values now always need to be `/`\-prefixed
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

It’s been quite the trek, but we’re here. At the summit. The Caves & Cliffs Update: Part II is out today, completing the much anticipated cave update. What better way to celebrate than by climbing to the top of a higher than ever mountain. Let’s take a moment and just take in that view. Wait. What’s that sound. Don’t tell me that goat is back.

AAAAARGH.

Ouff! Ouch! Ow!

Where am I? It’s dark down here! It’s almost as if I fell a greater distance than I would have before today. Figures. While I try to get out of this dripstone cave, I hope you enjoy all of the new features that 1.18 brings. Could you pass me a candle before you leave? It really is dark down here.

## Features

-   Added an "Allow Server Listings" option to opt out of having your name displayed in server listings
-   Added an Online options screen where you can now find the Realms Notifications option
-   Added new Overworld biomes
-   Added noise caves and aquifers
-   Added world autosave indicator for single-player worlds
-   Axolotls now have their own, separate, mob cap
-   Axolotls now only spawn in Lush Caves when in water that is above Clay Blocks
-   Badlands Mineshafts now generate higher up
-   Buried Treasure Chests may contain a Potion of Water Breathing
-   Changed default brightness to 50
-   Cod, Salmon, Pufferfish, Tropical Fish, Squid, and Dolphins now only spawn in water from height 50 to height 64
-   Frozen Peaks biome
-   Glow Squids now only spawn in water blocks under height 30
-   If it is raining, sleeping will stop the rain and reset the weather cycle (in 1.17 sleeping would always reset the weather cycle)
-   Illagers (Vindicator, Pillager, Evoker) no longer attack baby villagers
-   New music has been added to the game
-   New ore distribution and large ore veins
-   Overworld build and generation limits have been expanded
-   Raised the cloud level from 128 to 192
-   Redesigned how effects look in the inventory screen, to allow them to show even with recipe book open
-   Removed world types "Caves" and "Floating islands" from the world creation screen
-   Sprinting is no longer reduced to walking when gently brushing your sleeve against a wall
-   Tropical Fish now also spawn in Lush Caves at any height
-   Villages are slightly more spread out
-   World spawn selection algorithm has been reworked, now spawns player according to climate parameters

### Advancements

-   Added "Caves & Cliffs" for falling from top to bottom of the Overworld
-   Added "Feels like home" for riding strider on lava for 50 blocks in the Overworld
-   Added "Star Trader" for trading with a villager at the build height limit
-   Added "Sound of Music" for playing music with a jukebox in a Meadow biome

### Blocks

-   Enchanting Tables now emit a low amount of light
-   Using Shears on the tip of a Cave Vine, Twisting Vine, Weeping Wine, and Kelp will stop them from further growing
-   Copper Ore now drops 2-5 (from 2-3) Raw Copper items
-   In the Stonecutter, a Block of Copper can be converted to 4 Cut Copper
-   Restricted Big Dripleaf placement to Clay, Grass, Dirt, Farmland, Moss, Rooted Dirt, Podzol, and Mycelium

### Effects

-   Your list of effects are now shown to the right of your inventory, instead of the left side
-   When the inventory effects list is visible, it will be hidden from the game view to reduce screen clutter
-   There's now two modes of seeing the effect list: Compact and Classic
    -   Classic is the pre-existing list of effects, one after another
    -   Compact is a single icon for each effect, suitable for small screen estate
-   The game will automatically switch between the two modes to suit the available screen estate (including having the recipe book open)

### Large ore veins

-   Ore Veins are large, rare, snake-like underground ore formations
-   Copper Ore Veins form between heights 0 and 50 and are mixed with Granite
-   Iron Ore Veins form betweens heights -60 and -8 and are mixed with Tuff

### Mob Spawning

-   Monsters now only spawn in places where the light from blocks is 0 (sky light still prevents spawning like before)

### Music

-   Added new music by Lena Raine and Kumi Tanioka to the Overworld (when playing in Survival Mode) and the main menu
-   Added a new music disc from Lena Raine titled 'Otherside'. This can be found rarely in Stronghold Corridor Chests or much more rarely in Dungeon Chests.

### New Overworld Biomes

#### Dripstone Caves

-   Contains plenty of Pointed Dripstone and Dripstone Block on the floors and ceilings, as well as within small pools of water
-   In some places, you'll find larger stalagmites, stalactites, and columns built from Dripstone Blocks
-   Contains extra Copper Ore
-   Drowned can spawn in aquifers inside Dripstone Caves

#### Frozen Peaks

-   Smooth mountain peaks with ice and snow
-   Spawns Goats and Yeti. Wait, no, actually it's just Goats.

#### Grove

-   Snowy terrain with big Spruce Trees and Powder Snow traps. You might want to wear leather boots!
-   Tends to generate on high-altitude terrain beneath mountain peaks or on hilltops
-   Spawns Wolves, Rabbits, and Foxes

#### Jagged Peaks

-   Dramatic jagged mountain peaks with Snow and Stone blocks
-   Spawns Goats

#### Lush Caves

-   Moss covers the floors and ceilings
-   Spore Blossoms grow from the ceiling and drip particles
-   Contains Clay pools with Dripleaf plants growing out of them
-   Contains Azalea Bushes and Flowering Azalea Bushes
-   The Azalea Tree loves to have its roots in Lush Caves, so if you find an Azalea Tree (either overground or in a cave) you know there is a Lush Cave beneath you
-   Cave Vines with Glow Berries grow from the ceiling and light up the caves

#### Meadow

-   Large grassy and flowery biome that tends to generate high up on plateaus or next to large mountain ranges
-   Sometimes contains a lone, tall Oak or Birch Tree with a Bee Nest
-   Think Sound of Music!
-   Spawns Donkeys, Rabbits, and Sheep

#### Snowy Slopes

-   Very snowy terrain that can hide Powder Snow traps. I hope you kept those leather boots!
-   Tends to generate on high-altitude terrain beneath mountain peaks or on hilltops
-   Spawns Rabbits and Goats

#### Stony Peaks

-   Stony mountain peaks that may be jagged or smooth
-   These sometimes have large strips of Calcite running through them

### New ore distribution

-   Changed ore generation to match the new world height, and to add more strategy to mining. There is no longer a single height level that is best for all ores – you need to make tradeoffs!
-   Iron Ore generates below height 72, with a strong bias towards height 16. Iron Ore also generates above 80, with more Iron Ore as you go higher.
-   Copper Ore generates between height 0 and 96, with a strong bias towards height 48. Copper Ore generates in larger amounts in Dripstone Caves Biome.
-   Lapis Lazuli Ore generates below height 64, with a strong bias towards height 0. However, Lapis Lazuli Ore below height -32 or above height 32 cannot generate exposed to air. It will either be buried or inside water.
-   Coal Ore generates above height 0, with a strong bias towards height 96 and above. Coal Ore has reduced air exposure, so you will find more Coal Ore buried or underwater than exposed to air.
-   Gold Ore generates below height 32, with a strong bias towards height -16. Extra Gold Ore generates below height -48. Extra Gold Ore can be found in Badlands biomes above height 32.
-   Redstone Ore generates below height 16. Redstone Ore generation gradually increases as you go below height -32 and further down.
-   Diamond Ore generates below height 16, with more Diamond Ore the lower you go. Diamond Ore have reduced air exposure, so you will find more Diamond Ore buried or underwater than exposed to air.
-   Emerald Ore generates above height -16 in mountainous biomes, with more Emerald Ore the higher you go. Emerald Ore below height 0 is very rare!

###### Ore Distribution in Minecraft 1.18

![Minecraft 1.18 Ore Distribution](https://launchercontent.mojang.com/images/1-18-ore-distribution.jpg)

### Noise caves and Aquifers

-   Noise caves are a new way of generating caves, providing more natural variety. They can get really huge sometimes! Noise caves come in three flavors:
    -   Cheese caves: Like the holes in swiss cheese. These often form caverns of various size.
    -   Spaghetti caves: Long squiggly tunnels, sometimes wide like tagliatelle
    -   Noodle caves: Thinner, squigglier, and more claustrophobic variant of spaghetti caves
-   No, they aren't loud. The "noise" part of noise caves is a technical term and has nothing to do with sound.
-   The old cave carvers and canyons still generate, combining with the noise caves to form interesting cave systems
-   As with carvers, noise caves form cave entrances where they intersect the surface
-   An aquifer is an area with local water level, independent of sea level
-   Aquifers are used during world generation to generate bodies of water inside noise caves
-   This sometimes results in large underground lakes
-   They can also form inside mountains and on the surface
-   Aquifers below y0 will sometimes be lava aquifers instead of water aquifers
-   Magma Blocks sometimes generates at the bottom of underground bodies of water
-   Underwater cave carvers and underwater canyons have been removed, since aquifers are used to generate water in caves instead

### Sprinting

-   Previously, any collision with a block would reduce sprinting to walking. Now, for very minor angles of collision with a block, players retain their sprint. For larger angles of collision, the old behavior is retained.

### Upgrading of old worlds

-   The transition between new and old terrain is less "cliffy"
    -   Will surface height blend? Yes.
    -   Will biomes blend? Yes.
    -   Will caves blend? Your mileage may vary.
-   In old chunks, if there is any Bedrock at y=0, the sections below non-air blocks will be filled with new generation
-   The old Bedrock between y=0 and y=4 in old chunks gets replaced with Deepslate
-   A new Bedrock layer is placed at y=-64

### World generation

-   Generation range and build limits have been expanded by 64 blocks up and 64 blocks down, to a total range of 384 blocks
-   Underground features, structures, and caves generate all the way down to y-64
-   Exception: Diorite, Granite, Andesite, and Dirt will not generate below y0
-   Tweaked size and positioning of Diorite, Andesite, and Granite generation
-   Dripstone clusters can no longer be found in normal caves, only in Dripstone Caves biomes
-   Starting from y8 and below, Deepslate gradually replaces all Stone
-   Deepslate blobs no longer generate above y0
-   The terrain shape and elevation varies dramatically, indepedently from biomes
    -   For example, forests and deserts could form up on a hill without needing a special biome just for that
-   Less Diorite, Granite, and Andesite generates above y 60
-   Strips of Gravel can generate in stony shores
-   Swamp trees can grow in water 2 blocks deep (instead of just 1 block deep)
-   Removed water lake features, aquifers provide local water levels
-   A bunch of biome variants with simular features but different shapes have been merged into one, since the shape is controlled independently now
-   Renamed some biomes
-   Geodes now only generate up to height 30

## Technical

-   Added an accessibility option to stop the sky from flashing during thunderstorms
-   Added `fall_from_height` and `ride_entity_distance` advancement triggers
-   Changed `nether_travel` to match other similar triggers
-   Added an option to specify the audio device used by the game
-   Replaced `light` and `barrier` particles with `block_marker`
-   Replaced the clientbound chunk update network packet with another one that additionally contains light update data
    -   The separate light update packet still exists and is sent when a light update happens without a chunk update
-   New video setting called "Chunk Builder"
-   Changed the prioritization order of the chunk rendering pipeline
    -   Unrendered chunk holes in the world should not appear anymore while flying fast with high render distance
-   View distance now causes chunks to load cylindrically around players instead of in a square
-   Added "Toggle Sprint" and "Toggle Sneak" to the Controls settings
-   Moved Keybinds out to their own settings screen, accessible from Controls
-   Information about the world generation noise is now displayed on the debug screen
-   Added `illageralt`, rune-like font from Minecraft Dungeons (currently only usable via commands)
-   Added startup option `--jfrProfile` and command `jfr` to start profiling with Java Flight Recorder as well as a few custom events
-   Loot table functions `set_contents` and `set_loot_table` now require a `type` field with a valid block entity type
-   Added new loot table function `set_potion`
-   The maximum amount of background threads are increased
-   Worlds last saved before Minecraft 1.2 (pre "Anvil") can no longer be opened directly
-   Data pack format has been increased to 8
-   Resource pack format has been increased to 8
-   `--report` option in data generator now creates reference files for the entirety of the worldgen, instead of just the biomes
-   Removed length limits for scoreboard, score holder, and team names
-   Standalone `server.jar` now bundles contains individual libraries instead of being flat archive
-   Size limit for server resource packs has been increased to 250 MB
-   Servers can now set property `hide-online-players` to `true` in order to not send a player list on status requests
-   New setting called "Simulation Distance"
-   Mob spawners can now override light checks for spawning
-   Added telemetry for world loading

### Advancements

#### Changed triggers

##### `nether_travel`

-   `entered` condition is renamed to `start_position`
-   `exited` has been removed since it was identical to `player.location`

#### New triggers

##### `fall_from_height`

-   Triggered when a player lands after falling
-   Conditions:
    -   `player` - a player for which this trigger runs
    -   `start_position` - a location predicate for the last position before the falling started
    -   `distance` - a predicate for the distance between `start_position` and the player

##### `ride_entity_in_lava`

-   Triggered for every tick when a player rides in lava
-   Conditions
    -   `player` - a player for which this trigger runs
    -   `start_position` - a position where the riding started (first tick on lava)
    -   `distance` - a predicate for the distance between `start_position` and the player

### Chunk Builder Setting

-   This setting determines if chunk sections are updated immediately during a single frame, or asynchronously using threads
-   "Fully Blocking" corresponds to the previous way chunks were updated, which prevents potential visual gaps when blocks are destroyed
-   "Threaded" will significantly reduce stutters when blocks are placed or destroyed (especially with light sources), however brief visual gaps may rarely occur
-   "Semi Blocking" is the middle-option, and will only immediately update chunks that are deemed important, otherwise updates occur asynchronously using threads

### Java 17

Minecraft now uses Java version 17. If you are using a default setup, the Launcher will download and install the correct version. If you are using a custom Java setup, or a third-party launcher, you will need to ensure that your Java installation is version 17 or above.

### JFR Profiling

#### Custom events

All events are enabled when starting the profiling using either `jfr start` command or `--jfrProfile` startup flag. If profiling is started through any other means for monitoring purposes, only the `ServerTickTime`, `LoadWorld` and `NetworkSummary` are included by default.

-   `minecraft.ServerTickTime`: periodic event (1 second intervals) exposing average server tick times
-   `minecraft.NetworkSummary`: periodic event (10 second intervals) reporting total packet sizes and counts per connection
-   `minecraft.PacketReceived | minecraft.PacketSent`: network traffic
-   `minecraft.ChunkGeneration`: time taken to generate individual chunk stages
-   `minecraft.LoadWorld`: initial world loading duration

#### Overview

[Java Flight Recorder](https://openjdk.java.net/jeps/328) is the internal JVM profiling tool bundled with the Java Runtime to analyze performance and runtime characteristics.  
It's a useful tool for exposing internal JVM performance metrics as well as custom metrics that can be monitored or analyzed using any stock Java profiler or monitoring agents.

#### Profiling lifecycle

A profiling run can be started using any of the following alternatives:  
The run will then be stopped either by:

-   `--jfrProfile` startup flag when starting a Minecraft server or client
-   `jfr start` in-game command
-   Regular Java CLI tools such as `jcmd`
-   shutting down the JVM
-   `jfr stop` in-game command
-   `jcmd` CLI tool

#### Reports

A summary JSON report is written both to the log file and in the debug folder accompanied by a `.jfr` recording ready to be analyzed in i.e [JMC](https://github.com/openjdk/jmc) or any other profiler tool supporting the format.

### Loot tables

#### Changed functions

##### `set_contents`, `set_loot_table`

Added new mandatory field `type`. This type will be written into `BlockEntityTag.id`, to make sure that this tag can be correctly migrated between versions.

#### New functions

##### `set_potion`

-   Sets the `Potion` tag on any item

###### Parameters:

-   `id` - potion id

### Maximum amount of background threads increased

-   Various background tasks including worldgen are executed on a background thread pool
-   The default thread pool size equals the amount of available CPU threads, minus one
-   The upper thread pool limit has been raised from 7 to 255, which should help higher-end machines with improved world-gen performance
-   The upper limit can be overridden via the `max.bg.threads` Java system property, for example when running multiple servers on a single machine

### Mob spawning

-   Monster spawning limits are now per-player, rather than global for each dimension

### Old world conversion

-   Worlds last saved before Minecraft 1.2 (pre "Anvil") now require conversion in a previous version of the game to be able to be opened
-   We recommend that you upgrade your old version, 1.2 (pre "Anvil") or older, to version 1.6.4 - worlds opened for the first time in later versions will have incorrect biome information

### Particles

#### `block_marker`

-   Renders with a texture declared in the `particle` slot for a model assigned to the configured block state
-   Is summoned with same syntax as the `block` particle (i.e. `block_marker wheat[age=2]`)

### Resource Pack format

-   `minecraft/textures/gui/container/inventory.png` now contains an extra sprite for a thin-layout version of the effect list in the inventory

### Server bundling

-   `server.jar` now bundles individual libraries instead of merging all the files into a single archive
-   This change is meant to solve certain problems related to Java modules
-   On startup, `server.jar` will unpack libraries into a directory configured by `bundlerRepoDir` (default: working directory)
-   To run a different main class other than the server, use the `bundlerMainClass` property (for example `java -DbundlerMainClass=net.minecraft.data.Main -jar server.jar --reports`) or unpack the jar manually and use the contents of `META-INF/classpath-joined` for command line
-   If `bundlerMainClass` is empty, the program will just validate and extract files, and will then exit
-   Server classes are now signed

### Simulation Distance Setting

-   A new slider which is available under video settings
-   Entities, blocks, and fluids will not be updated outside of simulation distance
-   Allows higher render distance with less CPU load
-   There's also a new `simulation-distance` property in the dedicated server properties

### Spawner data changes

Example:

    SpawnData: {
        entity: {
            id: "minecraft:cow"
        },
        custom_spawn_rules: {
              sky_light_limit: {min_inclusive: 10, max_inclusive: 15}
        },
    }
    SpawnPotentials: [
      {
        data: {
          custom_spawn_rules: {
              block_light_limit: {min_inclusive: 0, max_inclusive: 15}
          },
          entity: {id: "minecraft:pig"},
        },
        weight: 2
      },
      {
        data: {
          custom_spawn_rules: {
              block_light_limit: {min_inclusive: 5, max_inclusive: 10},
              sky_light_limit: {min_inclusive: 10, max_inclusive: 15}
          },
          entity: {id: "minecraft:panda"}
        },
        weight: 1
      }
    ]
    

-   Spawners now support the `custom_spawn_rules` NBT in the `SpawnData` field and the `SpawnPotentials` list
-   `custom_spawn_rules` currently may contain fields `block_light_limit` and `sky_light_limit` - both are integer ranges with fields `min_inclusive` and `max_inclusive`
-   To make `SpawnPotentials` format similar to other weighted lists, structure was changed to `{weight: <int>, data: <previous contents without 'Weight', 'Entity' renamed to 'entity'>}`
-   To accommodate that change, previous contents of `SpawnData` were moved to `SpawnData.entity` (making format of that field same as elements of `SpawnPotentials.data`)

### Telemetry

In this release, we are re-introducing diagnostic tracking, which was part of Minecraft: Java Edition until 2018. We are bringing it back to better understand our players and to improve their experience. Specifically this information will help us prioritise various aspects of development and identify pain points. All data is treated according to GDPR and CCPA best practices and is used to develop a better-performing and generally more enjoyable Minecraft: Java Edition.

-   At this point, the only implemented event is world load

#### World Load event

-   Sent when loading singleplayer world or connecting to multiplayer server
-   Contains following information:
    -   launcher identifier
    -   user identitifer (XUID)
    -   client session id (changes on restart)
    -   world session id (changes per world load, to be reused for later events)
    -   game version
    -   operating system name and version
    -   Java runtime version
    -   if client or server is modded (same information as on crash logs)
    -   server type (single player, Realms or other)
    -   game mode

### World Data: Chunk Format

-   Removed chunk's `Level` and moved everything it contained up
-   Chunk's `Level.Entities` has moved to `entities`
-   Chunk's `Level.TileEntities` has moved to `block_entities`
-   Chunk's `Level.TileTicks` and `Level.ToBeTicked` have moved to `block_ticks`
-   Chunk's `Level.LiquidTicks` and `Level.LiquidsToBeTicked` have moved to `fluid_ticks`
-   Chunk's `Level.Sections` has moved to `sections`
-   Chunk's `Level.Structures` has moved to `structures`
-   Chunk's `Level.Structures.Starts` has moved to `structures.starts`
-   Chunk's `Level.Sections[].BlockStates` and `Level.Sections[].Palette` have moved to a container structure in `sections[].block_states`
-   Chunk's `Level.Biomes` are now paletted and live in a similar container structure in `sections[].biomes`
-   Chunk's `Level.CarvingMasks[]` is now `long[]` instead of `byte[]`
-   Added `yPos` the minimum section y position in the chunk
-   Added `below_zero_retrogen` containing data to support below zero generation
-   Added `blending_data` containing data to support blending new world generation with existing chunks

### World Generation

-   Bedrock layers now generate dependent on the world seed
-   New random number generator for overworld generation

## Fixed Bugs in 1.18

About 250 bugs were fixed in this release. [View the entire list on the issue tracker](https://bugs.mojang.com/issues/?filter=26552).

---

