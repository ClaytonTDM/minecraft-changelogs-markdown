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

#### Added Camel

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

#### Bamboo Wood Set

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

#### Chiseled Bookshelf

A new, chiseled variation of the Bookshelf is now available when Update 1.20 experimental features are enabled.

-   Crafted with 6 planks and 3 wooden slabs
-   Can store Books, Book and Quills, Written Books, and Enchanted Books
    -   Holds up to 6 books
    -   Keeps the stories and lore of your world safe
-   Comparators can detect the last book placed/removed
    -   Perfect for hiding secrets in your spooky library

#### Hanging Signs

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

#### General notes

-   Feature flags are options that enable or disable certain groups of game elements (like blocks, entities and items), later called "features"
-   Game elements controlled by flags are hardcoded
-   Feature flags are stored in world

#### Configuration and datapack changes

-   Feature flags are enabled by datapacks
    -   New pack metadata section called `features` is added, containing enabled feature flags in list named `enabled`
-   The game now contains built-in datapacks (similar to the "Programmer Art" resource pack) that enable features and provide associated recipes, advancements, loot tables, etc
-   Added new fields to `server.properties` to allow initial selection of packs (works only during world creation)
    -   `initial-enabled-packs` - comma-separated list of packs to be enabled (feature packs need to be explicitly enabled)
    -   `initial-disabled-packs` - comma-separated list of packs to not auto-enable
-   Datapacks discovered after world creation will be disabled if they require features that are not enabled for loaded world

#### Effects of feature flags

##### Blocks

-   Disabled block ids are not recognized by commands that can create new blocks
-   Block items for disabled blocks are disabled
-   Disabled blocks won't spawn in structures
-   Disabled blocks won't be loaded as part of entities (for example as falling sand or blocks carried by Endermen)
-   Players can't interact with disabled blocks

##### Entities

-   Disabled entity ids are not recognized by commands that can summon new entities
-   Disabled entities will not spawn or load
-   Spawn egg items for disabled entities are disabled

##### Items

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

#### Crafting book categories

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

New snapshot! We're now heading towards 1.19.1, which will add Allay duplication, the ability to report chat, and, of course, fix a few bugs.

On the topic of chat reporting, we want everyone to feel safe and welcome in Minecraft, which is why we have community guidelines in place. If you feel unsafe, uncomfortable, or concerned that someone is breaking our [Community Guidelines](https://www.minecraft.net/community-standards) or the [Xbox Community Standards](https://www.xbox.com/legal/community-standards), you can soon report this in-game. Of course, it will also be possible to report incidents over at the [Report a Concern](https://help.minecraft.net/hc/requests/new?ticket_form_id=4416074743565) page.

We are looking for feedback regarding the Chat Reporting feature. For now, any reports made during the testing period may not be actioned on.

Enjoy!

## New Features in 22w24a

-   Added Allay duplication
-   Added Player Chat Reporting

### Allay

-   Allays will dance to a Record playing in a Jukebox
-   If the Allay is handed an Amethyst Shard while dancing it will duplicate
    -   Duplication has a 2.5 minute cooldown

### Player Chat Reporting

It is now possible to report a player for sending abusive messages in the game chat.

A reporter is required to select the individual chat messages that contain the objectionable content, as well as the category of the report, this is to provide the best context for our moderation team to take action.

Accessed via the social interactions screen (default keybind is P).

-   The social interactions screen is now available via the Pause screen when in a multiplayer game
-   Multiple chat messages can be selected for reporting
-   The category of the chat report can be selected from a list of Chat Report Categories
-   Additional comments can be entered to provide more details and information regarding the report

## Fixed bugs in 22w24a

-   [MC-144043](https://bugs.mojang.com/browse/MC-144043) Trader llamas continue to spit after their target died
-   [MC-146891](https://bugs.mojang.com/browse/MC-146891) Nitwit villager can have a profession
-   [MC-177505](https://bugs.mojang.com/browse/MC-177505) Cured Villager can work at wrong workstation
-   [MC-249523](https://bugs.mojang.com/browse/MC-249523) Sky color is visible for a brief moment after applying Night Vision under Darkness effect
-   [MC-250261](https://bugs.mojang.com/browse/MC-250261) Frogs can lay spawn on flowing water
-   [MC-250267](https://bugs.mojang.com/browse/MC-250267) Frogs don't lay their spawn on waterlogged blocks
-   [MC-252082](https://bugs.mojang.com/browse/MC-252082) Loading server resource packs reloads twice when one is already loaded
-   [MC-252363](https://bugs.mojang.com/browse/MC-252363) Mobs that naturally spawn in with equipment will play the respective equipping noise
-   [MC-252439](https://bugs.mojang.com/browse/MC-252439) Cured Villager trades are not refreshing
-   [MC-252539](https://bugs.mojang.com/browse/MC-252539) Commands sending messages use formatting of regular chat in server logs
-   [MC-252683](https://bugs.mojang.com/browse/MC-252683) Unexpected exception in the selector loop causing server lag

---

Thursday snapshot! Apart from some bugfixes and some changes to fancy tags and commands, we're introducing "chat preview" as a way to cryptographically sign chat messages that have been dynamically styled by servers. And for this snapshot only, we've left in our testing option `test-rainbow-chat` in `server.properties`, which can be set to true together with the new `previews-chat` option for testing. If this is something that interests you, and especially if you run a server, we would love your feedback on it.

Enjoy!

## Changes in 22w19a

-   Warden and Iron Golems now make sure to spawn above something solid

## Technical Changes in 22w19a

-   Servers can now enable Chat Preview, which displays a server-controlled preview above the chat edit box
-   Changes to the locate and place commands
-   Point of Interest tags

### Chat Preview

-   Servers can enable Chat Preview by setting `previews-chat=true` in `server.properties`
-   When enabled, a server-controlled preview appears above the chat edit box, showing how the message will look when sent
-   This can be used by servers to preview messages with styling applied, such as emojis or chat coloring
-   Chat Preview sends chat messages to the server as they are typed, even before they're sent
    -   The server then sends back the styled preview in real time
    -   This allows servers to apply dynamic message stylings while still allowing chat to be securely signed
-   A warning screen is shown on the client when joining a server with Chat Preview, and it can be globally disabled in Chat Settings
-   Dynamic chat styling can also be controlled by the server, although this is only signed when Chat Preview is enabled
    -   Clients can prefer to always show the original, signed message by enabling "Only Show Signed Chat" in Chat Settings

### Commands

-   Added template sub-command to `place`;;-;;command
-   `locate` command moved to `locate structure`, `locatebiome` moved to `locate biome`
-   Added `locate poi <type: point_of_interest_type>`
-   Servers will now also send an additional icon and MOTD packet after a player has connected
    -   This allows servers with `enable-status=false` to set an icon and MOTD for players that successfully connect

#### Place template

The `place`;;-;;command can now also place templates at a given location. Syntax: `place template <template> [pos] [rotation] [mirror] [integrity] [seed]`

-   `place template` works like using the load button in the UI for a structure block

Parameters:

-   `template`: The namespaced id of a template ("structure block file") to load and place
-   `rotation`: The rotation to apply (if omitted, `none` is used)
-   `mirror`: The mirroring to apply (if omitted, `none` is used)
-   `integrity`: The structure integrity value between 0 and 1
-   `seed`: The seed to use for the randomized degradation when integrity is less than 1

### Point of Interest types

-   Removed `unemployed` and `nitwit` `point_of_interest_type`s
-   Added tag `point_of_interest_type/acquirable_job_site` for all job sites seeked by Villagers with `none` profession
-   Added tag `point_of_interest_type/village` for PoI that are part of Village
-   Added tag `point_of_interest_type/bee_home` for all PoI targeted by Bees

## Fixed bugs in 22w19a

-   [MC-197647](https://bugs.mojang.com/browse/MC-197647) Players cannot jump off the edge of blocks when sneaking if they have a block above
-   [MC-231600](https://bugs.mojang.com/browse/MC-231600) Sculk sensor continuously receives vibrations when next to a powered big dripleaf
-   [MC-249130](https://bugs.mojang.com/browse/MC-249130) Tadpoles hatch inside of adjacent blocks, causing them to suffocate and die
-   [MC-249161](https://bugs.mojang.com/browse/MC-249161) Frogs frequently get stuck below lily pads
-   [MC-249634](https://bugs.mojang.com/browse/MC-249634) Warden's sniffing behavior continues after being distracted
-   [MC-249664](https://bugs.mojang.com/browse/MC-249664) Warden despawns when far away
-   [MC-249801](https://bugs.mojang.com/browse/MC-249801) Mineshafts can intersect ancient cities
-   [MC-249888](https://bugs.mojang.com/browse/MC-249888) Warden is not angered when hit by a blaze fireball
-   [MC-249910](https://bugs.mojang.com/browse/MC-249910) Warden "Nearby Closest" sound is unused
-   [MC-249966](https://bugs.mojang.com/browse/MC-249966) Warden can stop chasing a target it just roared at
-   [MC-250172](https://bugs.mojang.com/browse/MC-250172) Warden doesn't turn towards the direction it is firing the Sonic Boom attack
-   [MC-250233](https://bugs.mojang.com/browse/MC-250233) A warden summoned from a spawn egg suddenly losing its AI
-   [MC-250255](https://bugs.mojang.com/browse/MC-250255) Warden's Sonic Boom cannot hurt Ender Dragon, it only pushes it back
-   [MC-250272](https://bugs.mojang.com/browse/MC-250272) Warden spawns in blocks that have no collision
-   [MC-250353](https://bugs.mojang.com/browse/MC-250353) Warden cannot spawn on a single snow layer like other mobs
-   [MC-250357](https://bugs.mojang.com/browse/MC-250357) Sculk sensors and Wardens detect when a player holds up a shield
-   [MC-250948](https://bugs.mojang.com/browse/MC-250948) Warden's ranged attack is no longer affected by the game's difficulty
-   [MC-250966](https://bugs.mojang.com/browse/MC-250966) Dying to the warden's sonic boom doesn't count as the warden's kill
-   [MC-251029](https://bugs.mojang.com/browse/MC-251029) Warden froze and stopped being hostile towards the player
-   [MC-251263](https://bugs.mojang.com/browse/MC-251263) "Invalid signature for profile public key" when trying to open a singleplayer world
-   [MC-251316](https://bugs.mojang.com/browse/MC-251316) The game crashes when loading chunks that consist of jigsaw blocks
-   [MC-251321](https://bugs.mojang.com/browse/MC-251321) Warden can be pushed by explosions while emerging
-   [MC-251350](https://bugs.mojang.com/browse/MC-251350) /give @s goat;;_;;horn gives an unregistered goat horn
-   [MC-251396](https://bugs.mojang.com/browse/MC-251396) java.lang.IllegalArgumentException: Name and ID cannot both be blank
-   [MC-251464](https://bugs.mojang.com/browse/MC-251464) When passive mobs take damage from warden's sonic boom, they won't flee in panic

---

Another snapshot is now available for Minecraft: Java Edition. This snapshot brings a few gameplay changes and some technical tidbits, such as the place command and cryptographically signed chat commands.

Enjoy!

## Changes in 22w18a

-   Allays now follow their liked player even if they can't see them
-   Allays will only lose track of a player if they are more than 64 blocks away
-   The texture of the sonic boom particle has been updated
-   Vibration listeners such as Sculk Sensors, Sculk Shriekers and Wardens now listen to the closest vibration instead of the first vibration in the tick

## Technical Changes in 22w18a

-   Banner patterns available in the Loom can now be controlled with tags (`banner_pattern/no_item_required` for no pattern item and `banner_pattern/pattern_item/*` for specific banner pattern items)
-   Servers can now define different chat style formats for clients
-   Removed the `placefeature` command
-   Added the `place` command
-   The bundled Java runtime has been upgraded to 17.0.3
-   Removed loot table function `set_goat_horn_sound`
-   Added loot table function `set_instrument`
-   Chat from the `/say`, `/msg`, `/teammsg`, and `/me` commands are now all also cryptographically signed

### Chat Types

-   Different chat style formats can now be controlled by the server through the `chat_type` registry
    -   These are synchronized to clients when they join the server
    -   The translation key or translation format can be defined, like `chat.type.text` or `%s says: "%s"`
        -   Chat can be similarly optionally narrated with a custom translation key or format
    -   The entire message can have formatting applied, such as italics or a specific color (but currently not click or hover events)

### Place Command

New command that replaces `placefeature` and can place features, jigsaws and structures at a given location. Syntax:

    place feature <feature> [pos]
    place jigsaw <pool> <start> <depth> [pos]
    place structure <structure> [pos]
    

Parameters:

-   `feature`: The namespaced id of a feature to try to place
-   `structure`: The namespaced id of a structure to try to generate
-   `pool`: The namespaced id of a template pool to start generating
-   `start`: The namespaced id name of a jigsaw to use as the starting anchor
-   `depth`: The maximum number of jigsaw connections to traverse during placement
-   `pos`: The position to use as the origin for the generation (if omitted, `~ ~ ~` is used)

### Loot Tables

#### New functions

##### `set_instrument`

Sets item tags needed for instrument items to a random value selected from a tag.

Parameters:

-   `options` - a tag reference specifying the instrument options to randomly pick from

## Fixed bugs in 22w18a

-   [MC-207935](https://bugs.mojang.com/browse/MC-207935) - Simultaneous vibrations don't trigger as expected
-   [MC-232009](https://bugs.mojang.com/browse/MC-232009) - Minecraft does not resolve SRV records correctly
-   [MC-249021](https://bugs.mojang.com/browse/MC-249021) - The invitation and news buttons aren't consistently displayed within the realms menu
-   [MC-249129](https://bugs.mojang.com/browse/MC-249129) - The walking animation of frogs doesn't change in relation to their movement speed
-   [MC-249175](https://bugs.mojang.com/browse/MC-249175) - Only one sculk vein drops when using a Silk Touch hoe on multiple in a single block space
-   [MC-249454](https://bugs.mojang.com/browse/MC-249454) - Sculk Catalysts will spread sculk if a baby mob that does not drop experience dies around it
-   [MC-249732](https://bugs.mojang.com/browse/MC-249732) - Allays lose picked up items on world restart
-   [MC-249740](https://bugs.mojang.com/browse/MC-249740) - Allays leashed to a fence do not move and refuse to pick up items
-   [MC-249784](https://bugs.mojang.com/browse/MC-249784) - Ancient Cities can be submerged in aquifers
-   [MC-249857](https://bugs.mojang.com/browse/MC-249857) - Parity Issue: Allays don't follow the player / note blocks as closely on Java
-   [MC-250139](https://bugs.mojang.com/browse/MC-250139) - Snow layers cannot be placed on top of mud
-   [MC-250143](https://bugs.mojang.com/browse/MC-250143) - Improper advancement description for "Sneak 100"
-   [MC-250144](https://bugs.mojang.com/browse/MC-250144) - "Sneak 100" advancement includes sculk shriekers as a block that can "hear" the player
-   [MC-250145](https://bugs.mojang.com/browse/MC-250145) - Warden/frogs continue animations when the game is paused
-   [MC-250163](https://bugs.mojang.com/browse/MC-250163) - Warden can still detect things after it dies
-   [MC-250183](https://bugs.mojang.com/browse/MC-250183) - Warden continues to roar when angered by an ignited creeper
-   [MC-250198](https://bugs.mojang.com/browse/MC-250198) - Warden continues to roar when the target of the enraged warden suffers an unnatural death
-   [MC-250207](https://bugs.mojang.com/browse/MC-250207) - Warden continues to roar at disconnected players
-   [MC-250216](https://bugs.mojang.com/browse/MC-250216) - Warden continues to roar at targets in unloaded chunks
-   [MC-250218](https://bugs.mojang.com/browse/MC-250218) - Warden continues to roar at despawned target
-   [MC-250244](https://bugs.mojang.com/browse/MC-250244) - Warden continues to roar when the target enters the nether portal, end portal or end gateway
-   [MC-250245](https://bugs.mojang.com/browse/MC-250245) - Warden sonic boom attacks can hit player even if the player has entered another dimension
-   [MC-250292](https://bugs.mojang.com/browse/MC-250292) - Wardens can sometimes freeze when overwhelmed with enemies/attacks/sounds
-   [MC-250506](https://bugs.mojang.com/browse/MC-250506) - Mangrove leaves can appear at a higher altitude when grown below y = 0
-   [MC-250557](https://bugs.mojang.com/browse/MC-250557) - Allay permanently stuck trying to pick up item stack if its slots contain stack of the same type with differing NBT (and vice versa)
-   [MC-250864](https://bugs.mojang.com/browse/MC-250864) - Game fails to load worldgen settings when .DS;;_;;Store files are present in datapack
-   [MC-250926](https://bugs.mojang.com/browse/MC-250926) - There is a goat horn in the creative Destroy Item slot / all tabs within the creative inventory contain goat horns
-   [MC-250937](https://bugs.mojang.com/browse/MC-250937) - User skins don't load in singleplayer
-   [MC-250939](https://bugs.mojang.com/browse/MC-250939) - Game crashes when a goat horn with an invalid sound variant is used / java.lang.ArrayIndexOutOfBoundsException: Index out of bounds for length 8
    
    -   [MC-250954](https://bugs.mojang.com/browse/MC-250954) - Player is assigned a new UUID in singleplayer
    
-   [MC-250974](https://bugs.mojang.com/browse/MC-250974) - MinecraftClientHttpException when opening/creating a world

---

Prepare to drop some sick bleats in the latest Minecraft: Java Edition snapshot! We're bringing in the sweet sounds of the goat horn. There are also some changes to the warden and the allay.

If the technical aspects of chatting is where it's at for you, make sure to check out the changes to chat signing.

Enjoy!

## New Features in 22w17a

-   Added Goat Horn!

### Goat Horn

-   A Goat Horn drops when a Goat rams a tree or any other hard block that occurs naturally where Goats spawn (Logs, Stone, Packed Ice, Iron Ore, copper Ore, or Emerald Ore)
    -   Other solid blocks are unfamiliar to the Goat, so it won't ram them
-   Use the horn to play a loud sound that can be heard from afar
-   Each horn has its own sound based on the Goat it originated from
-   There are 8 Goat Horn variants, 4 of them exclusive to screaming Goats
-   Goat Horns can sometimes be found in Pillager Outposts

## Changes in 22w17a

-   The Allay connecting with Note Blocks is now better visualized by the vibration particle
-   The Allay connecting with Note Blocks can now be blocked by Wool Blocks again
-   Replaced realms subtle selected world highlight with a clear green checkmark
-   Updated the Brewing Stand's base UVs and texture to match a graphical fix in Bedrock Edition
-   Explosions caused by player-ignited TNT now cause experience to drop from broken blocks (such as ore blocks and sculk)
    -   We will be keeping an eye on feedback for this change, it might change in a future update
-   Sculk blocks now have very low blast resistance
-   Warden balancing

### Warden

-   Their ranged attack will now:
    -   Bypass shields and armor
    -   Deal 10 damage instead of 30 damage, and the cooldown has been reduced from 5 seconds to 2 seconds
    -   Display a custom death message
-   Wardens now drop a single Sculk Catalyst upon death

## Technical Changes in 22w17a

-   Signed Chat
-   Removed `dampenable_vibrations` game event tag

### Multiplayer Secure Chat Signing

This is the first step in a process to provide more security and player safety features for in-game chat. We'd love to hear your thoughts, but keep in mind that many features such as server-driven styling of chat messages are still missing.

-   Chat messages between players are now cryptographically signed
-   Players are given a Mojang provided key-pair on startup
-   Servers can require players to have a Mojang-signed public key by setting `enforce-secure-profile=true` in `server.properties`
    -   Enforcing secure profiles will prevent players without a Mojang-signed public key from connecting
    -   By default this is set to `false`, allowing players to connect without a Mojang-signed public key
-   Chat styling is now handled via server resource packs with the translation key `chat.type.text`

## Fixed bugs in 22w17a

-   [MC-13103](https://bugs.mojang.com/browse/MC-13103) Texture Z-Fighting at Wolf/Dog/Cat snout
-   [MC-53312](https://bugs.mojang.com/browse/MC-53312) Illager/(zombie) villager/witch robes don't render the last two rows of pixels
-   [MC-106627](https://bugs.mojang.com/browse/MC-106627) Leather cap texture overlay doesn't align correctly
-   [MC-141064](https://bugs.mojang.com/browse/MC-141064) Cleric collar z-fighting
-   [MC-176840](https://bugs.mojang.com/browse/MC-176840) Ores no longer drop experience when blown up
-   [MC-207309](https://bugs.mojang.com/browse/MC-207309) Landing entities such as minecarts and armor stands trigger sculk sensors but boats do not
-   [MC-208597](https://bugs.mojang.com/browse/MC-208597) Boats ridden over wool are detected by sculk sensor
-   [MC-208771](https://bugs.mojang.com/browse/MC-208771) Projectiles landing on wool trigger sculk sensors
-   [MC-210712](https://bugs.mojang.com/browse/MC-210712) Sculk sensors are not activated upon backwards movement in a boat
-   [MC-210901](https://bugs.mojang.com/browse/MC-210901) Sculk sensors are not activated upon entities sliding on ice
-   [MC-248161](https://bugs.mojang.com/browse/MC-248161) Weaponsmith zombie villager texture has leftover pixels from the regular weaponsmith texture
-   [MC-248292](https://bugs.mojang.com/browse/MC-248292) Llama uses pre-1.14 chest texture
-   [MC-248555](https://bugs.mojang.com/browse/MC-248555) Mismatches within (zombie) villager textures
-   [MC-248556](https://bugs.mojang.com/browse/MC-248556) Savanna Zombie Villager missing a body texture
-   [MC-248557](https://bugs.mojang.com/browse/MC-248557) Savanna villager body defines pixels identical to base villager texture
-   [MC-248561](https://bugs.mojang.com/browse/MC-248561) Vindicator's crossed arms element has miscolored pixels on the faces touching the other arm elements
-   [MC-248562](https://bugs.mojang.com/browse/MC-248562) Iron golem has unused pixels in the texture
-   [MC-249032](https://bugs.mojang.com/browse/MC-249032) Fence item model's bars inconsistent with placed block
-   [MC-249039](https://bugs.mojang.com/browse/MC-249039) "Half" armor bar icon texture is incorrect
-   [MC-249190](https://bugs.mojang.com/browse/MC-249190) Sculk blocks don't drop experience orbs when blown up
-   [MC-249262](https://bugs.mojang.com/browse/MC-249262) Sculk cannot replace soul sand or mud when mobs die on top of them
-   [MC-249669](https://bugs.mojang.com/browse/MC-249669) tadpole.png has unused frog egg texture
-   [MC-249745](https://bugs.mojang.com/browse/MC-249745) If allay is holding an item, it can be equipped with armor using a dispenser
-   [MC-249780](https://bugs.mojang.com/browse/MC-249780) Blocks that require support can generate floating in ancient cities
-   [MC-249919](https://bugs.mojang.com/browse/MC-249919) Pillar in Ancient City can generate with waterlogged stairs
-   [MC-250000](https://bugs.mojang.com/browse/MC-250000) Allays and villagers create ghost items when they take items from a stack and cannot fit the whole stack in their inventory
-   [MC-250027](https://bugs.mojang.com/browse/MC-250027) Allays ignore the dimension when checking for liked note blocks
-   [MC-250075](https://bugs.mojang.com/browse/MC-250075) The inner two planes in mangrove roots are smaller than they should be
-   [MC-250076](https://bugs.mojang.com/browse/MC-250076) Shading is disabled for the two inner planes in mangrove roots, even though it isn't for all the other planes
-   [MC-250165](https://bugs.mojang.com/browse/MC-250165) Doing /locate stronghold in some single biomes causes an unexpected error
-   [MC-250240](https://bugs.mojang.com/browse/MC-250240) Z-fighting can be seen around the backs of frogs when they open their mouths
-   [MC-250288](https://bugs.mojang.com/browse/MC-250288) Some blocks in Ancient City structures can only be covered by sculk veins and can't be converted into a sculk block
-   [MC-250321](https://bugs.mojang.com/browse/MC-250321) Flying and aquatic mobs pathfinding in certain blocks cause crash || The game crashed whilst ticking entity Error: java.lang.NullPointerException: Cannot invoke "dnm.a()" because "$$1" is null
-   [MC-250331](https://bugs.mojang.com/browse/MC-250331) Chunk rendering is glitchy / incorrect when redrawing
-   [MC-250339](https://bugs.mojang.com/browse/MC-250339) Paintings are off-centered in multiplayer servers
-   [MC-250379](https://bugs.mojang.com/browse/MC-250379) Teleporting armor stands results in visual desync and abnormal behavior
-   [MC-250400](https://bugs.mojang.com/browse/MC-250400) Blocks and items can cause the world to render invisibly
-   [MC-250411](https://bugs.mojang.com/browse/MC-250411) Sculk can spread in ancient city structures and replace soul sand with fire on top, extinguishing fires
-   [MC-250429](https://bugs.mojang.com/browse/MC-250429) Narrator improperly narrates chat
-   [MC-250460](https://bugs.mojang.com/browse/MC-250460) The rendering of players is delayed for others

---

We've now released snapshot 22w16b to fix a crash.

## Fixed Bugs in 22w16b

-   [MC-250312](https://bugs.mojang.com/browse/MC-250312) - Game crashing when clicking singleplayer || java.lang.NullPointerException: Cannot invoke "java.lang.Comparable.compareTo(Object)" because "pivot" is null

---

A chance to re-live the good old times appears in snapshot 22w16a with the ability to de-fragment a Disc - a new Music Disc, to be precise! This snapshot also comes with even more new music, tweaks to the Allay and to top it off it makes some random gameplay events slightly more predictable.

Enjoy!

## New Features in 22w16a

-   Added new music
-   Added Disc Fragment 5 and Music Disc 5

### Four new music tracks

-   The new music tracks are called Ancestry, Aerie, Firebugs and Labyrinthine
-   They play in certain biomes and in the main menu

### Music Disc 5

A new music disc has been added to the game.

-   Unlike other discs, it can only be obtained by finding and crafting 9 Disc Fragments together
-   These Disc Fragments can be found rarely in Ancient City chests

## Changes in 22w16a

-   Allay tweaks
-   Improved the predictability a number of gameplay elements
-   Frogs can now spawn on Grass, Mud, Moss Carpet, Mangrove Roots and Muddy Mangrove Roots
-   Froglights are now movable by pistons

### Allay tweaks

-   Allay health raised from 10 to 20
-   Delay after item throw lowered from 5 secs to 3 secs
-   Item search range raised from 9 to 32
-   Movement speed changes:
    -   Allay is now slower when just wandering
    -   Allay is now faster when collecting items, going to the player or going to a noteblock
-   Throw arc has changed following community feedback

### Predictability of randomized events

Some randomized events are now more predictable and no longer have a possibility of extreme behaviors.

-   Placement and velocity of things dropped from Droppers/Dispensers
-   Placement and velocity of items spawned from containers upon destroy
-   Randomized `follow_range` component attribute for mobs
-   Velocity of Horses spawned from skeleton traps
-   Blaze random position and randomized speed of Blaze projectiles
-   Randomized portion of damage and velocity of Arrows
-   Randomized flight pattern of Fireworks
-   Bobbing patterns and time until a fish for Fishing Rods

## Technical Changes in 22w16a

-   `LWJGL` library has been updated to version 3.3.1
-   Added a heap memory allocation metric to the F3 debug screen
-   Added doWardenSpawning game rule
-   Updates to paintings

### Painting

-   Paintings that are placeable in survival can now be controlled with the `painting_variant/placeable` tag
-   Added unused paintings from Bedrock edition (`earth`, `wind`, `fire`, `water`)
    -   These paintings are not placeable by default, but can be added through a datapack

## Fixed bugs in 22w16a

-   [MC-81870](https://bugs.mojang.com/browse/MC-81870) Editing entitydata of Painting does not reflect ingame until chunk reload
-   [MC-111809](https://bugs.mojang.com/browse/MC-111809) Paintings unrender when entity data is updated rapidly
-   [MC-187188](https://bugs.mojang.com/browse/MC-187188) Painting NBT and registry contain a typo: "Motive" instead of "Motif"
-   [MC-226184](https://bugs.mojang.com/browse/MC-226184) Axolotls pathfinding to water can sometimes fall in wide holes
-   [MC-228049](https://bugs.mojang.com/browse/MC-228049) Axolotl can't pathfind through open doors
-   [MC-228174](https://bugs.mojang.com/browse/MC-228174) Axolotls try to pathfind through 2 tall walls
-   [MC-244957](https://bugs.mojang.com/browse/MC-244957) "Search" Option in Social Interactions Screen is not labeled in the right order when using Tab
-   [MC-245001](https://bugs.mojang.com/browse/MC-245001) "Manage with Microsoft account" button in Social Interactions menu is not centered
-   [MC-249084](https://bugs.mojang.com/browse/MC-249084) No sound is present for placing a Bucket of Tadpole
-   [MC-249092](https://bugs.mojang.com/browse/MC-249092) Mangrove Stripped Log, Stripped Wood and Wood are in the incorrect order in the creative inventory
-   [MC-249176](https://bugs.mojang.com/browse/MC-249176) Froglights are not visible on maps
-   [MC-249193](https://bugs.mojang.com/browse/MC-249193) Frog can't pathfind through open doors
-   [MC-249217](https://bugs.mojang.com/browse/MC-249217) Fluid level next to froglights is too low
-   [MC-249245](https://bugs.mojang.com/browse/MC-249245) Turtle can't pathfind through open doors
-   [MC-249246](https://bugs.mojang.com/browse/MC-249246) Strider can't pathfind through open doors
-   [MC-249265](https://bugs.mojang.com/browse/MC-249265) Some blocks cannot be placed on froglights
-   [MC-249459](https://bugs.mojang.com/browse/MC-249459) Cactus is not destroyed by froglights
-   [MC-249663](https://bugs.mojang.com/browse/MC-249663) The subtitles of some parrot imitation sounds are inconsistent with the original sounds' subtitles
-   [MC-249679](https://bugs.mojang.com/browse/MC-249679) Incorrect activation of warden's sniffing animations and behavior
-   [MC-249715](https://bugs.mojang.com/browse/MC-249715) Allays don't drop their held items upon death
-   [MC-249766](https://bugs.mojang.com/browse/MC-249766) Allays can despawn after being given an item if they haven't picked up any items yet
-   [MC-249790](https://bugs.mojang.com/browse/MC-249790) Allay follows and drops items for players in spectator mode
-   [MC-249838](https://bugs.mojang.com/browse/MC-249838) Allays lose their idle animation once they start moving
-   [MC-249855](https://bugs.mojang.com/browse/MC-249855) Parity Issue: Allays don't have a flying animation in Java
-   [MC-249912](https://bugs.mojang.com/browse/MC-249912) minecraft:ancient;;_;;city/city;;_;;center;;_;;3 is one block shorter compared than the other ancient city centers
-   [MC-249928](https://bugs.mojang.com/browse/MC-249928) Mangrove tree roots do not update blocks around them when generating
-   [MC-250039](https://bugs.mojang.com/browse/MC-250039) Wardens can get angry at mobs outside world border
-   [MC-250040](https://bugs.mojang.com/browse/MC-250040) Wardens can hear mobs beyond the world border
-   [MC-250041](https://bugs.mojang.com/browse/MC-250041) Wardens can spawn outside of world border
-   [MC-250044](https://bugs.mojang.com/browse/MC-250044) Observers don't detect mangrove roots when tree grows
-   [MC-250094](https://bugs.mojang.com/browse/MC-250094) Wardens ignore /kill execution whilst they're emerging or digging
-   [MC-250095](https://bugs.mojang.com/browse/MC-250095) Wardens can spawn in very narrow places, causing them to suffocate
-   [MC-250293](https://bugs.mojang.com/browse/MC-250293) The "allay;;_;;dust" particle is unused
-   [MC-250294](https://bugs.mojang.com/browse/MC-250294) Parity Issue: Allays item detection range is significantly smaller than in Bedrock

---

Let me tell you a little story about hubris. Well, not so much a story as a lament. Because some of you have been thinking that the warden was a little too easy. I won’t name names, but I know you’re out there. Why else would we be adding ranged attacks for this already terrifying mob? Was the sniffing not enough? When will it end? Not today, apparently. Enjoy a new terrifying warden along with more advancements and technical changes.

## New Features in 22w15a

-   Added advancement "When the Squad Hops into Town" for getting each Frog variant on a Lead
-   Added advancement "Sneak 100" for sneaking near a Sculk Sensor or Warden to prevent it hearing you
-   Added a new ranged attack to the Warden.

### Warden Ranged Attack

-   Building up high, hiding behind walls or being out of range of their powerful melee attack will cause Wardens to switch to their ranged attack
    -   Their rib cages will open up to shriek a sonically charged ranged attack that can penetrate walls

## Changes in 22w15a

-   Added Darkness effect to "How Did We Get Here?" advancement
-   Allays have a natural health regen of 2 health per second
-   The main menu background now shows a Wild Update panorama
-   Mud generates all the way from the surface down to stone in Mangrove Swamps
-   Tall Mangroves are far more common than Short Mangroves in Mangrove Swamps
-   Moss Carpet generates on top of Mangrove Tree's roots
-   The Wandering Trader will now sometimes offer Propagules for sale
-   A previous change to Noteblocks that only Wool and Wool Carpets would block the sounds has been reverted
-   Wardens can now sniff you from further away
-   The vertical range Wardens get angry at a target while sniffing is now 20 blocks instead of 6 blocks

### Changes to vibrations

-   Carpets, like Wool blocks, will now dampen the vibrations caused by their placing, breaking or dropping as items
-   Carpets now also dampen the vibrations caused by running and jumping over them

## Technical Changes in 22w15a

-   Removed `item_delivered_to_player` advancement trigger
-   Added `thrown_item_picked_up_by_player` advancement trigger

​- Added `avoid_vibration` advancement trigger

-   Added `sonic_explosion` particle

### Advancements

#### New triggers

##### `thrown_item_picked_up_by_player`

-   Triggered when a player picks up an item that was thrown by an entity
-   Conditions:
    -   `player` - a predicate for the player picking up the item
    -   `entity` - a predicate for the entity that threw the item
    -   `item` - a predicate for the item

##### `avoid_vibration`

-   Triggered when a vibration event is ignored because the source player is holding the sneak key
-   Conditions:
    -   `player` - a player for which this trigger runs

### Game Events

-   Renamed game event tag `ignore_vibrations_on_occluding_block` to `dampenable_vibrations`
-   Added block tag `dampens_vibrations` to indicate blocks which will not trigger vibrations when placed, broken or stepped on
-   Renamed item tag `occludes_vibration_signals` to `dampens_vibrations` item tag as well

## Fixed bugs in 22w15a

-   [MC-36783](https://bugs.mojang.com/browse/MC-36783) Item frames/Glow item frames don't change their hitbox if they contain a map
-   [MC-147686](https://bugs.mojang.com/browse/MC-147686) Joining a world that uses custom resources shows default resources until fully loaded
-   [MC-183520](https://bugs.mojang.com/browse/MC-183520) Phantoms with NoAI can go through blocks
-   [MC-212610](https://bugs.mojang.com/browse/MC-212610) Glow lichens cannot be put on soul sand
-   [MC-212629](https://bugs.mojang.com/browse/MC-212629) Leashes from two or more invisible entities connect to each other
-   [MC-216567](https://bugs.mojang.com/browse/MC-216567) Vines cannot be placed on the sides of 8 layers of snow
-   [MC-216569](https://bugs.mojang.com/browse/MC-216569) Glow lichen cannot be placed on the side of 8 layers of snow
-   [MC-219642](https://bugs.mojang.com/browse/MC-219642) Vines cannot be placed on the sides of soul sand
-   [MC-231458](https://bugs.mojang.com/browse/MC-231458) The word "ingot" within the "Serious Dedication" advancement description is improperly capitalized
-   [MC-235035](https://bugs.mojang.com/browse/MC-235035) Sleeping in a custom dimension with "natural" set to false causes crash
-   [MC-237924](https://bugs.mojang.com/browse/MC-237924) The word "villager" within the "Star Trader" advancement description is improperly capitalized
-   [MC-249072](https://bugs.mojang.com/browse/MC-249072) Sculk shriekers replace water blocks
-   [MC-249087](https://bugs.mojang.com/browse/MC-249087) The inside texture of mangrove roots darkens when solid blocks are placed adjacent to them
-   [MC-249094](https://bugs.mojang.com/browse/MC-249094) Unexpected culling of inner sculk shrieker faces
-   [MC-249111](https://bugs.mojang.com/browse/MC-249111) sculk;;_;;charge cannot be used in /particle command
-   [MC-249208](https://bugs.mojang.com/browse/MC-249208) Vines, glow lichens, and sculk veins cannot be placed on the side or top faces of mud
-   [MC-249315](https://bugs.mojang.com/browse/MC-249315) Mangrove Roots cannot be composted
-   [MC-249347](https://bugs.mojang.com/browse/MC-249347) Map color for mangrove sign and mangrove wall sign is incorrect
-   [MC-249423](https://bugs.mojang.com/browse/MC-249423) You can't open the boat with chests without a shift, even when you can't get into the boat
-   [MC-249445](https://bugs.mojang.com/browse/MC-249445) Activated sculk shriekers fail to summon the warden when broken
-   [MC-249488](https://bugs.mojang.com/browse/MC-249488) Darkness pulsing option is not saved
-   [MC-249495](https://bugs.mojang.com/browse/MC-249495) Inconsistent shading in boat item sprites
-   [MC-249664](https://bugs.mojang.com/browse/MC-249664) Warden despawns when far away
-   [MC-249688](https://bugs.mojang.com/browse/MC-249688) Mangrove stairs come after nether wood stairs in the Building Blocks tab
-   [MC-249737](https://bugs.mojang.com/browse/MC-249737) Allay can be pushed around with {NoAI:1b}
-   [MC-249741](https://bugs.mojang.com/browse/MC-249741) New advancement names are not properly capitalized
-   [MC-249785](https://bugs.mojang.com/browse/MC-249785) Warden can be pushed when emerging and digging
-   [MC-249917](https://bugs.mojang.com/browse/MC-249917) Mangrove trees don't replace certain blocks with roots
-   [MC-249923](https://bugs.mojang.com/browse/MC-249923) Recovery compass isn't sorted with regular compass in creative inventory
-   [MC-249927](https://bugs.mojang.com/browse/MC-249927) You can use a Recovery Compass on a Lodestone
-   [MC-249931](https://bugs.mojang.com/browse/MC-249931) Growing a Mangrove Tree with bone meal creates a ghost block
-   [MC-249933](https://bugs.mojang.com/browse/MC-249933) Game crash related to the frog occurred (Accessing LegacyRandomSource from multiple threads)
-   [MC-249934](https://bugs.mojang.com/browse/MC-249934) Mangrove roots sometimes don't generate waterlogged when generating within water
-   [MC-249936](https://bugs.mojang.com/browse/MC-249936) Cave carvers don't cut through mud
-   [MC-249938](https://bugs.mojang.com/browse/MC-249938) Mangrove Leaves do not drop from Silk Touch tools
-   [MC-249942](https://bugs.mojang.com/browse/MC-249942) Water got removed after waterlogged Mangrove Propagule grows
-   [MC-249947](https://bugs.mojang.com/browse/MC-249947) Top of Sculk Shrieker model is vertically squished
-   [MC-249966](https://bugs.mojang.com/browse/MC-249966) Warden can forget a target it just roared at
-   [MC-249968](https://bugs.mojang.com/browse/MC-249968) Powering a beacon disconnects player from server
-   [MC-249977](https://bugs.mojang.com/browse/MC-249977) Harsh chunk borders appear when upgrading a 1.18.2 world
-   [MC-249979](https://bugs.mojang.com/browse/MC-249979) Chance to have mangrove roots not waterlogged when growing from a sapling while underwater
-   [MC-249980](https://bugs.mojang.com/browse/MC-249980) The Birthday Song advancement description is incorrectly capitalized
-   [MC-249984](https://bugs.mojang.com/browse/MC-249984) note;;_;;block is inconsistently spelled as noteblock in the allay;;_;;deliver;;_;;cake;;_;;to;;_;;noteblock advancement
-   [MC-250017](https://bugs.mojang.com/browse/MC-250017) UUID launch argument required
-   [MC-250025](https://bugs.mojang.com/browse/MC-250025) The "You Got a Friend in Me" advancement is incorrectly presented in the past tense
-   [MC-250099](https://bugs.mojang.com/browse/MC-250099) Mangrove Log and Mangrove Planks don't spawn in bonus chest
-   [MC-250101](https://bugs.mojang.com/browse/MC-250101) Can't plant sugar cane on mud
-   [MC-250103](https://bugs.mojang.com/browse/MC-250103) Can't plant bamboo on mud
-   [MC-250104](https://bugs.mojang.com/browse/MC-250104) Can't plant big dripleaf on mud
-   [MC-250106](https://bugs.mojang.com/browse/MC-250106) Overworld vegetation cannot be placed on muddy mangrove roots

---

Mangrove trees! Warm frogs! Mud blocks! More mangrove trees! Today, we’re happy to bring you the most mud-tastic Java snapshot to date!

Sure, it might be our only mud-tastic snapshot to date – but the important thing is that our new biome, mangrove swamp, now is available for testing, along with nitty-gritty features like the recovery compass and other, more technical tidbits.

Enjoy!

## New Features in 22w14a

-   Added Clay renewability
-   Added Mangrove Trees
-   Added Mangrove Swamp biome
-   Added Echo Shard and Recovery Compass

### Clay renewability

-   Placing Mud above a block that has Pointed Dripstone underneath will eventually turn the mud block into Clay

### Mangrove trees

Introducing a new type of water-adapted tree that spawns propped up on roots

-   Have a chance of spawning a Bee Nest
-   Grows from Mangrove Propagules

### Mangrove Swamp

Muddy! Murky! Magnificent! Welcome to the newest biome - the Mangrove Swamp

-   Located in warmer, more humid places where you'd normally find the Swamp biome in Minecraft
-   Here you can find Bees and Warm Frogs
-   The floor of this biome is coated with a thick layer of Mud, so be sure to pack your best boots
-   Have a nice boat ride under and around the larger-than-life roots of mangrove trees

### Recovery Compass

A new Recovery Compass can be crafted with Echo Shards which can only be found and are unique to Ancient City chests

-   Unlike a normal Compass, the Recovery Compass will point to the last place you died
-   If you are not in the dimension you last died, or you haven't died yet in your world, it will randomly spin
-   It can be crafted with 1 Compass surrounded by 8 Echo Shards, which can be found in Ancient Cities

## Changes in 22w14a

-   The Warden will now get angry at ALL living mobs that bump into it, not just players

## Technical Changes in 22w14a

-   `CatType` fields on enitites with type `minecraft:cat` have been replaced with `variant`, with numeric values being replaced with string ids (so, for example, `5` becomes `minecraft:calico`)
-   Some mutually exclusive tests in entity predicate (`player`, `fishing_hook`, `lightning_bolt` and `catType`) have been collapsed to `type_specific` field
-   Added `item_delivered_to_player` advancement trigger
-   Added `allay_drop_item_on_block` advancement trigger

### Predicates

#### Entity predicate

-   `player`, `fishing_hook`, `lightning_bolt` and `catType` fields have been replaced with `type_specific`
-   `type_specific` has field `type` (one of `player`, `fishing_hook`, `lightning_bolt` or `cat`) and same fields as removed fields
-   Example:
    
    -   Before:
    
         "lightning_bolt": {
           "blocks_set_on_fire": 0
         }
        
    
    -   After
    
          "type_specific": {
            "type": "lightning",
            "blocks_set_on_fire": 0
          }
        
    
-   `catType` has been wrapped to match new format and now uses new cat variant names instead of texture names:
    
    -   Before
    
         "catType": "minecraft:textures/entity/cat/british_shorthair.png"
        
    
    -   After
    
         "type_specific": {
            "type": "cat",
            "variant": "minecraft:british"
         }
        
    
-   New `type_specific` options:
    -   `frog` has `variant` field matching frog variant (`minecraft:warm`, `minecraft:temperate` or `minecraft:cold`)
    -   `slime` applies for slimes and magma creams, has `size` field matching slime size (smallest is `1`)

### Advancements

-   Removed field `location` from triggers `location`, `slept_in_bed`, `hero_of_the_village` and `voluntary_exile` - it was handled exactly the same as `player.location`

#### New triggers

##### `item_delivered_to_player`

-   Triggered when an allay delivers an item to a player
-   Conditions:
    -   `player` - a player for which this trigger runs

##### `allay_drop_item_on_block`

-   Triggered when an allay drops an item on a block
-   Conditions:
    -   `player` - a player for which this trigger runs
    -   `location` - a predicate for the block that the item was dropped on
    -   `item` - a predicate for the item that was dropped

## Fixed bugs in 22w14a

-   [MC-207289](https://bugs.mojang.com/browse/MC-207289) Sculk sensor wool occlusion has directional bias
-   [MC-207635](https://bugs.mojang.com/browse/MC-207635) Sculk sensors react differently to wool occlusion depending on the global direction.
-   [MC-249075](https://bugs.mojang.com/browse/MC-249075) Sculk shrieker isn't grouped with other sculk related blocks in the decorations tab of creative inventory
-   [MC-249122](https://bugs.mojang.com/browse/MC-249122) block.sculk;;_;;catalyst.bloom has no subtitle
-   [MC-249254](https://bugs.mojang.com/browse/MC-249254) Frogs eating named slimes or magma cubes isn't logged in console
-   [MC-249384](https://bugs.mojang.com/browse/MC-249384) Warden can create Light, barriers or structure voids particles when digging
-   [MC-249386](https://bugs.mojang.com/browse/MC-249386) The entity shadows of wardens are too small in relation to the size of their models
-   [MC-249387](https://bugs.mojang.com/browse/MC-249387) Warden's digging sound is the same as its emerging sound
-   [MC-249400](https://bugs.mojang.com/browse/MC-249400) The vertical movement of wardens when they're in liquids is too sensitive
-   [MC-249401](https://bugs.mojang.com/browse/MC-249401) Warden spawn egg isn't alphabetized correctly
-   [MC-249415](https://bugs.mojang.com/browse/MC-249415) Wardens won't pathfind through lava even though they're immune to it
-   [MC-249422](https://bugs.mojang.com/browse/MC-249422) Some subtitles relating to the warden don't contain possessive apostrophes where appropriate
-   [MC-249426](https://bugs.mojang.com/browse/MC-249426) Angered wardens play the "warden takes notice angrily" sound when hit in survival on top of their hurt sound
-   [MC-249430](https://bugs.mojang.com/browse/MC-249430) Wardens remember players in creative mode
-   [MC-249434](https://bugs.mojang.com/browse/MC-249434) The warden indefinitely roars when attacked by multiple entities
-   [MC-249445](https://bugs.mojang.com/browse/MC-249445) Activated sculk shriekers fail to summon the warden when broken
-   [MC-249447](https://bugs.mojang.com/browse/MC-249447) Activated sculk shriekers fail to summon the warden if you run away
-   [MC-249451](https://bugs.mojang.com/browse/MC-249451) Warden doesn't appear in spawner
-   [MC-249455](https://bugs.mojang.com/browse/MC-249455) "Not a string" appears in log when serializing angered Warden
-   [MC-249473](https://bugs.mojang.com/browse/MC-249473) Some Warden sounds play in Peaceful difficulty
-   [MC-249476](https://bugs.mojang.com/browse/MC-249476) Warden can spawn in water
-   [MC-249479](https://bugs.mojang.com/browse/MC-249479) Wardens will attack their teammates
-   [MC-249499](https://bugs.mojang.com/browse/MC-249499) Warden summoned with 'Silent' tag still plays heartbeat sounds
-   [MC-249504](https://bugs.mojang.com/browse/MC-249504) The sounds of wardens groaning angrily aren't controlled by the "Hostile Creatures" sound slider
-   [MC-249509](https://bugs.mojang.com/browse/MC-249509) Warden is invisible for a split second when spawned in by spawner or spawn egg
-   [MC-249517](https://bugs.mojang.com/browse/MC-249517) Warden doesn't detect non-player mobs colliding with them
-   [MC-249526](https://bugs.mojang.com/browse/MC-249526) Sculk shriekers are not activated when the player is riding something
-   [MC-249530](https://bugs.mojang.com/browse/MC-249530) Warden's hitbox shows up in peaceful difficulty
-   [MC-249531](https://bugs.mojang.com/browse/MC-249531) Warden indefinitely roars when the attack target is invulnerable
-   [MC-249646](https://bugs.mojang.com/browse/MC-249646) The warden sniffs excessively after killing a mob
-   [MC-249659](https://bugs.mojang.com/browse/MC-249659) Sculk Catalyst and Sculk Veins only drop when broken by Silk Touch hoe
-   [MC-249664](https://bugs.mojang.com/browse/MC-249664) Warden despawns when far away
-   [MC-249674](https://bugs.mojang.com/browse/MC-249674) Wardens forget their targets on world reload
-   [MC-249712](https://bugs.mojang.com/browse/MC-249712) Server hangs and game stops responding when loading a chunk containing a structure with an allay
-   [MC-249714](https://bugs.mojang.com/browse/MC-249714) Z-fighting can be seen on the wings of allays during their death animation
-   [MC-249720](https://bugs.mojang.com/browse/MC-249720) Allay's wings are not attached to its body
-   [MC-249727](https://bugs.mojang.com/browse/MC-249727) Wardens stop sensing vibrations after world reload
-   [MC-249728](https://bugs.mojang.com/browse/MC-249728) Lava can generate in ancient cities and burn wool/make structures fly
-   [MC-249729](https://bugs.mojang.com/browse/MC-249729) Z-fighting can be seen on the underside of allays' heads
-   [MC-249751](https://bugs.mojang.com/browse/MC-249751) Warden UV overlapping
-   [MC-249758](https://bugs.mojang.com/browse/MC-249758) Z-fighting can be seen when the arms of allays intersect their bodies
-   [MC-249761](https://bugs.mojang.com/browse/MC-249761) Trapdoor of Ice Box in Ancient Cities is by default open
-   [MC-249764](https://bugs.mojang.com/browse/MC-249764) Second lamp in the centres of ancient cities is missing its sculk sensor
-   [MC-249768](https://bugs.mojang.com/browse/MC-249768) entrance;;_;;path;;_;;5 can never generate
-   [MC-249769](https://bugs.mojang.com/browse/MC-249769) Unused structures in ancient cities
-   [MC-249780](https://bugs.mojang.com/browse/MC-249780) Blocks that require support can generate floating in ancient cities
-   [MC-249785](https://bugs.mojang.com/browse/MC-249785) Warden can be pushed when emerging and digging
-   [MC-249800](https://bugs.mojang.com/browse/MC-249800) Eating doesn't activate redstone door in the Ancient City center
-   [MC-249816](https://bugs.mojang.com/browse/MC-249816) Wardens hitbox doesn't adjust when emerging and digging

---

**Allay**, the mob that nobody is really sure how to pronounce, is now entering the latest Minecraft: Java Edition snapshot. Along with our new shiny blue friend, we've added the **ancient** **cities**, which have seen some pretty drastic changes since the experimental snapshot a few weeks ago, so make sure you check them out.

Happy mining!

## New Features in 22w13a

-   Added Allay mob
-   Added Ancient Cities

### Allay

-   Allays will collect all the surrounding items that match the item they are holding
-   Allays will like a player who hands them an item and will bring the items they collect to their liked player
-   If the Allay hears a noteblock play, that noteblock becomes the Allay's favorite noteblock for 30 seconds. The Allay will stay near that noteblock for that duration and bring its collected items to the noteblock instead of to the player
-   Interacting with an Allay with an empty hand will remove the item the Allay is holding
-   Allays can be found in Pillager Outposts and Woodland Mansions

### Ancient City

Wander the halls of these long-abandoned structures in the Deep Dark depths to uncover some relics long forgotten.

-   Ancient City structures spawn in the Deep Dark biome
-   In chests, guarded by sculk sensors and shriekers, you can find the new Swift Sneaking enchantment
-   You can also find a new mysterious block called Reinforced Deepslate here, which cannot be obtained in Survival
-   Mobs cannot spawn in Ancient Cities

#### Differences compared to the Experimental Deep Dark snapshot

-   Many adjustments have been made to Ancient Cities, with new and tweaked structures
-   Loot tables have been adjusted for Ancient Cities, including a separate loot table for the "ice box" structures

## Changes in 22w13a

-   The recipes for minecart with chest/furnace/tnt/hopper are now shapeless
-   When broken each minecart variant drops itself as item, instead of splitting into two items (such as chest and minecart)
-   Only wool and wool carpets now block the sounds coming from noteblocks

## Technical Changes in 22w13a

-   Added `kill_mob_near_sculk_catalyst` advancement trigger
-   Sculk shrieker block state changes
-   Renamed some game events

### Advancements

#### New triggers

##### `kill_mob_near_sculk_catalyst`

-   Triggered when a player kills an entity next to Sculk Catalyst
-   Conditions:
    -   `player` - a player for which this trigger runs
    -   `entity` - a predicate for the entity that was killed
    -   `killing_blow` - a predicate for how the entity was killed

### Sculk Shrieker

-   Added `can_summon` blockstate to the Sculk Shrieker that determines whether a Shrieker can summon a Warden or not
-   Shriekers placed via worldgen will have `can_summon` set to true
-   When a Shrieker is placed or generated via Sculk spread, `can_summon` is set to false

### Game Events

Some game events have been renamed, with some of those changes to make them more gramatically consistent:

-   `drinking_finish` -> `drink`
-   `entity_killed` -> `entity_die`
-   `entity_damaged` -> `entity_damage`
-   `elytra_free_fall` -> `elytra_glide`
-   `mob_interact` -> `entity_interact`
-   `ravager_roar` -> `entity_roar`
-   `wolf_shaking` -> `entity_shake`

The following events have been collapsed into `block_activate` and `block_deactivate`:

-   `block_press`
-   `block_unpress`
-   `block_switch`
-   `block_unswitch`

Other miscellaneous changes to game events:

-   `ring_bell` has been removed and replaced with `block_change`
-   Both `shulker_open` and `shulker_close` have been removed in favour of using `container_open` and `container_close`
-   `fishing_rod_cast` and `fishing_rod_reel_in` have been renamed to `item_interact_start` and `item_interact_finish`
-   Added `ignore_vibrations_on_occluding_block` game event tag with subsequent logic
-   `entity_interact` should be dispatched more often when interacting with various mobs

## Fixed bugs in 22w13a

-   [MC-249103](https://bugs.mojang.com/browse/MC-249103) Z-fighting can be seen on the underside of frogs' feet
-   [MC-249110](https://bugs.mojang.com/browse/MC-249110) Z-fighting textures inside the frog's mouth
-   [MC-249115](https://bugs.mojang.com/browse/MC-249115) Frogs spawn with wrong color in some biomes
-   [MC-249132](https://bugs.mojang.com/browse/MC-249132) Frogs are not required to be bred for the Two by Two advancement
-   [MC-249349](https://bugs.mojang.com/browse/MC-249349) Dispensing a Bucket of Tadpole dispenses the item, instead of water with a tadpole
-   [MC-249380](https://bugs.mojang.com/browse/MC-249380) The locks of chests within chest boats are positioned slightly too high
-   [MC-249382](https://bugs.mojang.com/browse/MC-249382) Boats with chest do not drop items contained in chest when destroyed in Creative
-   [MC-249389](https://bugs.mojang.com/browse/MC-249389) GUI Scale is a slider instead of a button
-   [MC-249392](https://bugs.mojang.com/browse/MC-249392) Options have missing or untranslated names
-   [MC-249397](https://bugs.mojang.com/browse/MC-249397) Bottom face of Warden's right arm missing in 'warden;;_;;bioluminescent;;_;;layer' texture
-   [MC-249398](https://bugs.mojang.com/browse/MC-249398) Game crash regarding warden
-   [MC-249404](https://bugs.mojang.com/browse/MC-249404) Boats with Chest aren't grouped in the recipe book
-   [MC-249405](https://bugs.mojang.com/browse/MC-249405) chatScale option defaults to 0.0 instead of 1.0, causing chat to disappear
-   [MC-249409](https://bugs.mojang.com/browse/MC-249409) Furnaces, blast furnaces and smokers don't cook without fuel in the bottom slot, even if they are already fired up
-   [MC-249474](https://bugs.mojang.com/browse/MC-249474) Four-legged mobs do not sit correctly in a boat with a chest
-   [MC-249642](https://bugs.mojang.com/browse/MC-249642) Wardens can't pass over rails

---

Waaaaaaaaaaah! It's Wal... wait that's not it. It's the warden! The spooky, unfriendly (maybe it just wants a hug?) mob is making its way into our latest snapshot.

Additionally, you'll be seeing some functionality for the sculk shriekers and some fancy new boats (they have chests).

Enjoy!

## New Features in 22w12a

-   Added Darkness mob effect
-   Added Sculk Shrieker functionality
-   Added the Warden mob
-   Added boat with chest
-   Added the Swift Sneak enchantment

### Sculk Shrieker

-   Added functionality to the Sculk Shrieker: Notable for its boney appendages, this block responds to Sculk Sensors detecting vibrations by sending out a warning call to distant Wardens
    -   Watch out when stepping on them, as they will feel that too and send out a call!
-   Initially it may take some time for a Warden to arrive, but you'll hear it responding in the distance...
-   Once it's close enough, a call from the Sculk Shrieker will summon the Warden nearby - be prepared!

Added Warden mob

### Warden

The horror of the Deep Dark! A creature with no eyes, roughly resembling the Sculk that can be found throughout the Deep Dark, the Warden is an unstoppable force of nature that inhabits this biome

-   Just like Sculk Sensors, these terrifying creatures use vibrations as a means to navigate their environment
-   When vibrations aren't enough, they will also use a sense of smell to track down their prey - you can observe them sniffing their surroundings to get closer to unsuspecting players and mobs
-   To add to their myriad of ways to detect you, try not to get too close! If you collide with a Warden, it will notice you
-   In the Deep Dark, Wardens are everywhere - you just can't see them. They slumber beneath your feet, and only dig out when enough Sculk Shriekers have alerted them of your presence
-   Watch your step: the more vibrations a Warden detects, the more angry it will get. You can hear and see this from how fast the souls in its chest are beating
-   Once a mob has pushed beyond the Warden's anger threshold, it will face its prey and roar before charging
-   If, however, you keep the Warden from noticing you or getting angry for 60 seconds, it will dig back underground and despawn
-   They have a special interaction with thrown projectiles
    -   If the Warden receives two projectile vibrations within 5 seconds of one another, it will grow angrier at the shooter
    -   If the Warden receives a projectile vibration more than 5 seconds from the last projectile, it will not grow angrier at the shooter
    -   This allows you to strategically distract the Warden without it getting angry while you take loot from nearby chests
-   Unfortunately for all players, Wardens will also disable shields when they hit them with their fists
-   They do not drop any loot
-   Wardens are powerful creatures, and it is often better to sneak around one that has emerged instead of taking it head on - you've been warned

### Darkness

-   A new mob effect unique to the Warden and Sculk Shrieker, which will afflict you with it when nearby
-   Lowers the gamma down at an equivalent of "Moody" while having this effect
-   In periodic pulses, will lower the overall brightness of the world so that the darkness creeps up against light sources
-   When the Warden is around, torches will be more important than ever!
-   A new Accessibility slider has been added in your Options menu called “Darkness Pulsing”
    -   Controls how dark the Darkness effect gets when a Warden or Sculk Shrieker gives it to you, but will not affect the fog distance

### Boat with chest

-   Lets you bring more stuff on your boat adventures
-   If you are in the boat, press the open inventory key to access the chest contents
-   If you are not in the boat, shift-right click to access the chest contents
-   If you break the boat the chest contents will spill out, like with other chests
-   Also works with hoppers, droppers, and other blocks that interact with chests
-   Like other chests, opening a boat chest or breaking the boat will anger piglins, since they think all chests belong to them

### Swift Sneak

Imbue your leggings with this shiny new enchantment to move as fast while crouching as you would normally walk!

-   When applied, it will increase your movement speed while sneaking
-   Has 3 different levels with different speed increases
-   It is the first enchantment unique to leggings equipment!

## Changes in 22w12a

-   The Deep Dark biome is now less flooded than surrounding areas
-   Leaves are now waterloggable
-   Removed debug hotkey cycling render distance

## Fixed bugs in 22w12a

-   [MC-149805](https://bugs.mojang.com/browse/MC-149805) While editing a book, you cannot use Ctrl+Home or Ctrl+End to jump to the beginning or end of the text
-   [MC-165503](https://bugs.mojang.com/browse/MC-165503) Fence gates (between walls) aren't affected by ambient occlusion/smooth lighting
-   [MC-176081](https://bugs.mojang.com/browse/MC-176081) Striders with NoAI still get cold
-   [MC-177321](https://bugs.mojang.com/browse/MC-177321) Soul sand doesn't have smooth lighting / ambient occlusion
-   [MC-179916](https://bugs.mojang.com/browse/MC-179916) Foxes path towards origin (0,0) during a thunderstorm
-   [MC-190661](https://bugs.mojang.com/browse/MC-190661) Pressing Esc or using the Cancel button in the "Experimental Settings" warning returns to main menu
-   [MC-197854](https://bugs.mojang.com/browse/MC-197854) Cannot use Ctrl+Backspace to delete entire words in Edit sign GUI
-   [MC-236149](https://bugs.mojang.com/browse/MC-236149) You cannot use CTRL+BACKSPACE to delete words in the book and quill GUI
-   [MC-236212](https://bugs.mojang.com/browse/MC-236212) You cannot use CTRL+ARROW KEY to navigate the cursor between words in the book and quill GUI
-   [MC-238009](https://bugs.mojang.com/browse/MC-238009) Some end cities can generate floating above the ground
-   [MC-239019](https://bugs.mojang.com/browse/MC-239019) /locatebiome command doesn't consistently locate the nearest cave biome
-   [MC-248621](https://bugs.mojang.com/browse/MC-248621) TagKey creation leads to memory leak
-   [MC-249073](https://bugs.mojang.com/browse/MC-249073) Mangrove Fence Gate & Mangrove Fence are in the wrong tab in the creative inventory
-   [MC-249081](https://bugs.mojang.com/browse/MC-249081) Placing water inside the mangrove propagule breaks it
-   [MC-249098](https://bugs.mojang.com/browse/MC-249098) Mud brick slabs use generic stone sound
-   [MC-249112](https://bugs.mojang.com/browse/MC-249112) Ender dragon fight is not triggered upon entering the End
-   [MC-249134](https://bugs.mojang.com/browse/MC-249134) Subtitle "Frog hatches" should be "Tadpole hatches"
-   [MC-249143](https://bugs.mojang.com/browse/MC-249143) Mud, Mangrove Roots, and their variants are too loud in comparison with other blocks
-   [MC-249171](https://bugs.mojang.com/browse/MC-249171) Map color for mangrove log is incorrect
-   [MC-249172](https://bugs.mojang.com/browse/MC-249172) Map color for mangrove slab is incorrect
-   [MC-249173](https://bugs.mojang.com/browse/MC-249173) Map color for mangrove trapdoor is incorrect
-   [MC-249174](https://bugs.mojang.com/browse/MC-249174) Map color for mud bricks, mud brick stairs, and mud brick walls is incorrect
-   [MC-249181](https://bugs.mojang.com/browse/MC-249181) Powered rail / activator rail update order is reversed
-   [MC-249184](https://bugs.mojang.com/browse/MC-249184) The mangrove fence recipe is not grouped with the fence recipes of other wood types
-   [MC-249195](https://bugs.mojang.com/browse/MC-249195) Some Mangrove Propagules float after leaves decayed
-   [MC-249253](https://bugs.mojang.com/browse/MC-249253) Bee tries to pollinate a waterlogged mangrove propagule and dies
-   [MC-249270](https://bugs.mojang.com/browse/MC-249270) Mangrove leaves do not have a hoe as their preferred tool
-   [MC-249303](https://bugs.mojang.com/browse/MC-249303) Mangrove Leaves cannot be composted
-   [MC-249312](https://bugs.mojang.com/browse/MC-249312) Mud Brick Slab has a slower mining speed then other mud bricks
-   [MC-249316](https://bugs.mojang.com/browse/MC-249316) Mangrove fence, fence gate and boat cannot be used for fuel

---

