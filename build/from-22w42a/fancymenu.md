# Minecraft Snapshot 22w42a

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

**Added Camel**

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

**Bamboo Wood Set**

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

**Chiseled Bookshelf**

A new, chiseled variation of the Bookshelf is now available when Update 1.20 experimental features are enabled.

-   Crafted with 6 planks and 3 wooden slabs
-   Can store Books, Book and Quills, Written Books, and Enchanted Books
    -   Holds up to 6 books
    -   Keeps the stories and lore of your world safe
-   Comparators can detect the last book placed/removed
    -   Perfect for hiding secrets in your spooky library

**Hanging Signs**

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

**General notes**

-   Feature flags are options that enable or disable certain groups of game elements (like blocks, entities and items), later called "features"
-   Game elements controlled by flags are hardcoded
-   Feature flags are stored in world

**Configuration and datapack changes**

-   Feature flags are enabled by datapacks
    -   New pack metadata section called `features` is added, containing enabled feature flags in list named `enabled`
-   The game now contains built-in datapacks (similar to the "Programmer Art" resource pack) that enable features and provide associated recipes, advancements, loot tables, etc
-   Added new fields to `server.properties` to allow initial selection of packs (works only during world creation)
    -   `initial-enabled-packs` - comma-separated list of packs to be enabled (feature packs need to be explicitly enabled)
    -   `initial-disabled-packs` - comma-separated list of packs to not auto-enable
-   Datapacks discovered after world creation will be disabled if they require features that are not enabled for loaded world

**Effects of feature flags**

**Blocks**

-   Disabled block ids are not recognized by commands that can create new blocks
-   Block items for disabled blocks are disabled
-   Disabled blocks won't spawn in structures
-   Disabled blocks won't be loaded as part of entities (for example as falling sand or blocks carried by Endermen)
-   Players can't interact with disabled blocks

**Entities**

-   Disabled entity ids are not recognized by commands that can summon new entities
-   Disabled entities will not spawn or load
-   Spawn egg items for disabled entities are disabled

**Items**

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

**Crafting book categories**

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
-   [MC-146930](https://bugs.mojang.com/browse/MC-146930) The "Programmer Art" resource pack is internally called "programer;;_;;art"
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
-   [MC-199162](https://bugs.mojang.com/browse/MC-199162) One farmland block in plains;;_;;large;;_;;farm;;_;;1 has moisture level 0
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
-   [MC-250311](https://bugs.mojang.com/browse/MC-250311) The minecraft:entity.tadpole.grow;;_;;up sound event doesn't have a translation key
-   [MC-250423](https://bugs.mojang.com/browse/MC-250423) Frog frequently fails to long jump to small blocks
-   [MC-250943](https://bugs.mojang.com/browse/MC-250943) minecraft.used:minecraft.goat;;_;;horn doesn't increase when using goat horns
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

# Minecraft 1.19.2 Release Candidate 2

We're now releasing the first (and hopefully only) release candidate for Minecraft 1.19.2. This release candidate fixes a critical issue related to server connectivity with secure chat. If there are no major issues following this release, no further changes will be done before the full release.

Edit: We've now released 1.19.2 release candidate 2

## FIXED BUGS IN 1.19.2 RELEASE CANDIDATE 2

-   We're now releasing Release Candidate 2 for Minecraft 1.19.2 to fix a crash.

## FIXED BUGS IN 1.19.2 RELEASE CANDIDATE 1

-   This release candidate fixes a critical issue related to server connectivity with secure chat.

## Feedback

Report bugs here: [Minecraft issue tracker!](https://bugs.mojang.com/)

Want to give feedback?

-   Head over to our [feedback website](https://aka.ms/snapshotfeedback) or come chat with us about it on the [official Minecraft Discord](https://discordapp.com/invite/minecraft).

---

# Minecraft 1.19.2 Release Candidate 1

We're now releasing the first (and hopefully only) release candidate for Minecraft 1.19.2. This release candidate fixes a critical issue related to server connectivity with secure chat. If there are no major issues following this release, no further changes will be done before the full release.

## Feedback

Report bugs here: [Minecraft issue tracker!](https://bugs.mojang.com/)

Want to give feedback?

-   Head over to our [feedback website](https://aka.ms/snapshotfeedback) or come chat with us about it on the [official Minecraft Discord](https://discordapp.com/invite/minecraft).

---

# Minecraft 1.19.1 Release Candidate 3

We are now releasing Release Candidate 3 for Minecraft 1.19.1. We still expect to release the full version of 1.19.1 this week.

## Technical Changes in 1.19.1 Release Candidate 3

-   The chat input box will no longer apply custom font glyphs with negative advances, or glyphs with advances greater than 32

## Bugs fixed in 1.19.1 Release Candidate 3

-   [MC-254529](https://bugs.mojang.com/browse/MC-254529) Warning and information toasts can overlap one another

---

# Minecraft 1.19.1 Release Candidate 2

We are now releasing Release Candidate 2 for Minecraft 1.19.1. If no critical issues are found, we expect to release the full version next week.

## Changes in 1.19.1 Release Candidate 2

-   Tweaked the names of the chat preview options
-   Added a warning toast when connecting to a server that doesn't enforce secure chat

## Bugs fixed in 1.19.1 Release Candidate 2

-   [MC-254355](https://bugs.mojang.com/browse/MC-254355) Key binds set to mouse buttons of number greater than 8 switch over by 1 when the game starts
-   [MC-254405](https://bugs.mojang.com/browse/MC-254405) Debug messages aren't prefixed with gray color indicators

---

# Minecraft 1.19.1 Pre-Release 6

We are now releasing pre-release 6 for Minecraft 1.19.1 with some small tweaks to sculk sensors and catalysts as well as bug fixes and improvements to the chat signing system.

## Changes in 1.19.1 Pre-release 6

-   Sculk Catalysts will now drop 5 XP instead of 20 XP
-   Colors of the signing indicators for sending a message have been adjusted for improved accessiblity

## Technical Changes in 1.19.1 Pre-release 6

-   The `run_command` click event for text components no longer supports any commands that send chat messages
    -   `/tellraw` should be used instead

## Bugs fixed in 1.19.1 Pre-release 6

-   [MC-148149](https://bugs.mojang.com/browse/MC-148149) Linux game crash when opening links
-   [MC-207077](https://bugs.mojang.com/browse/MC-207077) Crash on loading pre-1.13 world with noteblock + note NBT in inventory
-   [MC-235614](https://bugs.mojang.com/browse/MC-235614) Reference to unexisting predicate in a datapack causes java.lang.NullPointerException
-   [MC-252190](https://bugs.mojang.com/browse/MC-252190) Player-dropped items creating vibrations depends on you sneaking at the moment the item hits the ground, instead of when you threw the item
-   [MC-252258](https://bugs.mojang.com/browse/MC-252258) Wool block / carpet items generate vibrations, unless thrown by crouching players
-   [MC-252265](https://bugs.mojang.com/browse/MC-252265) --server argument causes java.lang.NullPointerException crash on some servers
-   [MC-253402](https://bugs.mojang.com/browse/MC-253402) Game crash when you shift right click on item in your hotbar to the chest at the same time as you die
-   [MC-254255](https://bugs.mojang.com/browse/MC-254255) Unable to text in chat with Chat Preview On send while sleeping
-   [MC-254261](https://bugs.mojang.com/browse/MC-254261) "The background opacity box of the chat preview field renders behind the ""Leave Bed"" button when sleeping in beds"
-   [MC-254284](https://bugs.mojang.com/browse/MC-254284) Sending chat packets with invalid message type id crashes the game
-   [MC-254349](https://bugs.mojang.com/browse/MC-254349) Crash when putting dye into a loom on a modded server

---

# Minecraft 1.19.1 Pre-release 5

We are now releasing pre-release 5 for Minecraft 1.19.1. This pre-release includes the remaining fixes for a known exploit regarding player report context. It also fixes some other crashes and bugs.

## Changes in 1.19.1 Pre-release 5

### Chat

-   When writing chat messages, the signing status of the displayed chat messages is shown with a colored indicator
    -   The indicator will either appear to the left of the chat input field, or to the left of the chat preview if chat preview is being used
    -   The indicator will be green when the displayed message is signed
    -   The indicator will be orange when Chat Preview is enabled and a preview is waiting to be signed
-   The background of the chat preview will also display slightly faded when a preview is waiting to be signed

### Chat Preview

-   Added "On Send" Chat Preview option for updating chat previews only when attempting to send a message
    -   To confirm sending a message, a second hit of the Enter/Return key is required
    -   The previous "ON" setting has been renamed to "On Modified"
-   The "On Modified" mode no longer displays previews if the message has not been modified by the server
-   Chat Preview is now enabled in singleplayer, and will display when using commands that have selector substitution such as `/say`
-   Previewed hover events and click events are now highlighted with a solid background

## Technical Changes in 1.19.1 Pre-release 5

-   The `team_msg_command` chat type has been split apart into `team_msg_command_incoming` and `team_msg_command_outgoing`

## Bugs fixed in 1.19.1 Pre-release 5

-   [MC-130243](https://bugs.mojang.com/browse/MC-130243) /debug stop message uses OS locale specific number formatting
-   [MC-149047](https://bugs.mojang.com/browse/MC-149047) Scroll Sensitivity slider label uses OS locale for number formatting
-   [MC-252546](https://bugs.mojang.com/browse/MC-252546) Poor audio quality compared to 1.18.2
-   [MC-252702](https://bugs.mojang.com/browse/MC-252702) Game crashes when trying to launch 1.19 when system is in Arabic, Persian, or adjacent formats
-   [MC-253223](https://bugs.mojang.com/browse/MC-253223) "A preposition is incorrectly used within the ""gui.abuseReport.reason.terrorism;;_;;or;;_;;violent;;_;;extremism.description"" string"
-   [MC-253888](https://bugs.mojang.com/browse/MC-253888) Messages that servers have tampered with through chat reporting are signed and reportable
-   [MC-253950](https://bugs.mojang.com/browse/MC-253950) Sending a chat message too fast after typing it fails to sign the eventual proper chat preview
-   [MC-253997](https://bugs.mojang.com/browse/MC-253997) "The current description of ""Imminent harm - Threat to harm others"" report category seems not matching its title"
-   [MC-254089](https://bugs.mojang.com/browse/MC-254089) "Chat Preview components allow server to ""hide"" content"

---

# Minecraft 1.19.1 Pre-Release 4

This pre-release fixes an exploit found regarding contextual chat evidence when creating a Player Report.

## Technical changes in 1.19.1 Pre-Release 4

-   Custom servers can hide player chat messages from display via a new network packet
    -   This does not delete player chat messages from chat logs
-   Insecure chat messages logged in the server are prefixed with a `[Not Secure]` tag
-   The order of chat messages are now cryptographically verified
    -   This will be used for validating the context of chat messages for Player Reports

## Fixed bugs in 1.19.1 Pre-Release 4

-   [MC-253743](https://bugs.mojang.com/browse/MC-253743) The server console doesn't state if chat messages aren't secure or have been modified
-   [MC-253813](https://bugs.mojang.com/browse/MC-253813) Chat commands with entity selectors often reported as "This message is not secure"

---

# Minecraft 1.19.1 Pre-Release 3

Hi everyone,

Before we jump into today's pre-release, we would like to take a moment and dedicate some thoughts to a person who over the years has made an incredible impact on the Minecraft community and touched the lives of many. **Technoblade** became synonymous with a source of good – a positive force that time and time again made many, many people happy and someone we are proud to have as part of our giant family.

Minecraft is its community, which is why it should come as no surprise that so many of us mourn the loss of him, with tributes and love pouring in from across the world.

On behalf of the Java Team – thank you Technoblade for the memories, for all the fun and the laughter. You will be dearly missed. Our thoughts are with your family and friends.

* * *

Regarding 1.19.1: We still have a number of fixes in the pipeline, set for another pre-release in the near future. After that, once everything is tested and verified, we'll be aiming for a release candidate.

## Changes in 1.19.1 Pre-Release 3

-   Moved the chat scrollbar to the right of the chat window
-   System messages (non-player chat, such as those outputted by commands) are displayed with a gray color indicator

## Technical changes in 1.19.1 Pre-Release 3

-   Custom servers can set their own auto-completion options for regular chat via a new network packet
-   The list of players on the Social Interactions screen now places entries for players with recently seen messages at the top of the list
-   The `msg_command` chat type has been split apart into `msg_command_incoming` and `msg_command_outgoing`
-   The `team_name` chat type parameter has been renamed to `target`
    -   This chat type parameter is now used by `msg_command_outgoing`

## Fixed bugs in 1.19.1 Pre-Release 3

-   [MC-253182](https://bugs.mojang.com/browse/MC-253182) The second instance of a reflexive pronoun is used incorrectly within the "gui.abuseReport.reason.self;;_;;harm;;_;;or;;_;;suicide.description" string
-   [MC-253214](https://bugs.mojang.com/browse/MC-253214) Tooltips will become offset in certain cases
-   [MC-253223](https://bugs.mojang.com/browse/MC-253223) A preposition is incorrectly used within the "gui.abuseReport.reason.terrorism;;_;;or;;_;;violent;;_;;extremism.description" string
-   [MC-253496](https://bugs.mojang.com/browse/MC-253496) /execute as {player} run say counts to the report system
-   [MC-253742](https://bugs.mojang.com/browse/MC-253742) The chat scroll bar overlaps the colored indicators used to show the trust status of messages
-   [MC-253773](https://bugs.mojang.com/browse/MC-253773) Whispers appear as modified by the server

---

# Minecraft 1.19.1 Pre-Release 2

Hey everyone! As a few of you might have noticed, we’ve made the decision to postpone the release of 1.19.1 and we're now going back into pre-release mode. This is in order to address a few of our more noticeable issues. We've yet to fully decide on a new release date, but it won't be too far in the future.

We’ve received a lot of feedback regarding the Player Chat Report feature, which is something we address specifically in a newly released post [here](https://www.minecraft.net/article/addressing-player-chat-reporting-tool), as well as in our [FAQ](https://aka.ms/chatreportingfaq) which hopefully answers all your questions!

## Changes in 1.19.1 Pre-Release 2

We've added the ability to see the signing status of chat messages – this is so you can easily tell when a server is tampering with, or removing the signing security of, their players' messages.

### Chat Trust Status

-   Messages that are not signed with the Secure Chat system, or have been tampered with by the server will now be marked
    -   Messages with missing or invalid signatures are marked as "Not Secure"
    -   Messages that are detected as modified are marked as "Modified"
-   The trust status of messages are displayed with both a colored indicator and an icon
    -   The colored indicator is always visible
    -   The icon is only visible when the chat screen is open
-   Hovering over the icon will provide more information about the trust status
    -   For modified messages, the original secure text will also be displayed in the tooltip

## Technical changes in 1.19.1 Pre-Release 2

### Chat Types

-   Chat types added to the `chat_types` registry are now only used for player chat, and not system messages
    -   The `system` and `game_info` chat types have been removed
-   Chat types have been simplified and are now only required to define `chat` and `narration` decorations
    -   Chat types no longer support overlays
    -   A system message should instead be used to display overlays

### server.properties

-   `enforce-secure-profile` is now defaulted to `true` for dedicated servers

## Fixed Bugs in 1.19.1 Pre-Release 2

-   [MC-253112](https://bugs.mojang.com/browse/MC-253112) The game output console is logged with warnings regarding chat packets with invalid signatures when using entity selectors within commands
-   [MC-253121](https://bugs.mojang.com/browse/MC-253121) Entities and other non-player chat message sources appear as players on the Select Chat Messages to Report screen
-   [MC-253493](https://bugs.mojang.com/browse/MC-253493) The descriptions of report categories can once again overlap the "Description:" subtitle
-   [MC-253495](https://bugs.mojang.com/browse/MC-253495) Selection boxes of fields within the "Select Report Category" menu list don't contain white outlines when selected using the TAB key
-   [MC-253497](https://bugs.mojang.com/browse/MC-253497) Entities and other non-player chat message sources appear in the Social Interactions menu
-   [MC-253501](https://bugs.mojang.com/browse/MC-253501) Long messages within the "Select Chat Messages to Report" menu can extend beyond selection boxes and past the scroll bar
-   [MC-253517](https://bugs.mojang.com/browse/MC-253517) Online players cannot connect to offline server because "invalid profile public key signature"

---

# Minecraft 1.19.1 Release Candidate 1

We're now releasing the first (and hopefully only) release candidate for Minecraft 1.19.1. We have also now created a help article on chat reporting, available [here](https://help.minecraft.net/hc/articles/7149823936781).

If there are no major issues following this release, no further changes will be done before the full release on Tuesday.

Happy mining!

## Changes in 1.19.1 Release Candidate 1

-   Updated the categories for chat reporting
    -   The "Profanity", "Nudity or pornography" and "Extreme violence or gore" categories have been removed
    -   The description for the "Drugs and alcohol" category has been updated to "Someone is encouraging others to partake in illegal drug related activities or encouraging underage drinking"
    -   The description of the "Harassment and bullying" category has been extended with the following: or posting private personal information about you or someone else without consent ("doxing").

## Technical changes in 1.19.1 Release Candidate 1

-   The `run_command` click event for text components no longer supports sending chat messages directly
    -   Only commands are supported, so a command such as `/say` should be used instead
    -   This means values now always need to be '/'-prefixed
-   Increased the amount of chat context sent with each chat report

## Fixed bugs in 1.19 Release Candidate 1

-   [MC-250020](https://bugs.mojang.com/browse/MC-250020) Allay doesn't ignore items when mobGriefing is set to false
-   [MC-252511](https://bugs.mojang.com/browse/MC-252511) Bedrock not generating on the new blending border between old and new blending
-   [MC-252987](https://bugs.mojang.com/browse/MC-252987) Illegal character ';;\;;n' in text component clickEvent
-   [MC-253114](https://bugs.mojang.com/browse/MC-253114) Selection boxes within the "Select Chat Messages to Report" menu don't disappear when deselecting fields after reentering the menu
-   [MC-253188](https://bugs.mojang.com/browse/MC-253188) Selection boxes within the "Select Chat Messages to Report" menu differ in size ever so slightly depending on how they're selected
-   [MC-253225](https://bugs.mojang.com/browse/MC-253225) Selection boxes of fields within player reporting menu lists don't contain white outlines when selected using the TAB key
-   [MC-253227](https://bugs.mojang.com/browse/MC-253227) Players can only be reported using the reporting system if they're present within the world
-   [MC-253336](https://bugs.mojang.com/browse/MC-253336) Using the eye of ender "crashes" game in the seed: -3721742095548798177
-   [MC-253422](https://bugs.mojang.com/browse/MC-253422) The selection of the "Please report breaches of our Community Standards" text within the "Select Report Category" menu is slightly confusing due to the words "Community Standards" being underlined by default

---

# Minecraft 1.19.1 Pre-Release 1

The first pre-release for 1.19.1 is now available. This release contains a few bugfixes, an increased cooldown for Allay duplication, and it also contains a new UI if you have been banned for violating the Minecraft [Community Standards](https://www.minecraft.net/community-standards). ​ On the topic of community standards and the recent introduction of the chat reporting feature, we’re working on creating a help article that aims to add some context surrounding the functionality. ​ All of this said, if everything goes as planned, we plan to release the update next Tuesday on June 28th.

## Changes in 1.19.1 Pre-release 1

​

-   Allay duplication now has a 5-minute cooldown
-   Along with the support for reporting chat, reported players can now be banned from online play and Realms after moderator review
-   The game will show a notice screen on startup if you have been banned from online play
    -   The reason for the ban is shown as well as how long the ban is valid for

## Fixed Bugs in 1.19.1 Pre-Release 1

-   [MC-249973](https://bugs.mojang.com/browse/MC-249973) Loading resource packs is significantly slower in 1.19
-   [MC-252327](https://bugs.mojang.com/browse/MC-252327) World list fails to load after restarting game and deleting a world
-   [MC-252508](https://bugs.mojang.com/browse/MC-252508) Realms worldgen type missing language string
-   [MC-253055](https://bugs.mojang.com/browse/MC-253055) Resource packs causing each WeighedSoundEvents to duplicate Sounds
-   [MC-253102](https://bugs.mojang.com/browse/MC-253102) Chat reporting uses "Messages" for one message
-   [MC-253105](https://bugs.mojang.com/browse/MC-253105) Chat report category scroll bar intersects the selected option outline
-   [MC-253108](https://bugs.mojang.com/browse/MC-253108) Selection boxes within the "Select Report Category" menu aren't vertically centered with the text inside them
-   [MC-253109](https://bugs.mojang.com/browse/MC-253109) The descriptions of report categories can overlap the "Description:" subtitle
-   [MC-253110](https://bugs.mojang.com/browse/MC-253110) Text within the "Discard report and comments?" menu isn't horizontally centered
-   [MC-253111](https://bugs.mojang.com/browse/MC-253111) You cannot use CTRL+HOME or CTRL+END to navigate to the beginning or end of text within the "Report Chat" menu
-   [MC-253113](https://bugs.mojang.com/browse/MC-253113) Chat message content can extend past the outline of a button and past the scroll bar
-   [MC-253123](https://bugs.mojang.com/browse/MC-253123) The button within the "Sending your report" menu changes upon resizing the game window
-   [MC-253126](https://bugs.mojang.com/browse/MC-253126) The scroll bar within the "Select Chat Messages to Report" menu sometimes resets its position to the bottom of the list after scrolling upwards
-   [MC-253127](https://bugs.mojang.com/browse/MC-253127) Reason is not provided when chat report creation is not able to be started
-   [MC-253134](https://bugs.mojang.com/browse/MC-253134) Allays from older worlds don't duplicate
-   [MC-253176](https://bugs.mojang.com/browse/MC-253176) The character indicator symbol within the "Report Chat" menu is untranslatable
-   [MC-253178](https://bugs.mojang.com/browse/MC-253178) The word "Non-consensual" is spelled as "Non-consentual" within the "gui.abuseReport.reason.non;;_;;consensual;;_;;intimate;;_;;imagery" string
-   [MC-253183](https://bugs.mojang.com/browse/MC-253183) The word "Unrelated" within the "gui.chatSelection.fold" string is incorrectly capitalized
-   [MC-253185](https://bugs.mojang.com/browse/MC-253185) The ESC key cannot be used to exit the "Sending your report" menu
-   [MC-253191](https://bugs.mojang.com/browse/MC-253191) Particles produced from allays duplicating cannot be seen by other players

---

