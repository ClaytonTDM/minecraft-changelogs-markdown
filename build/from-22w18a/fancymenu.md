# Minecraft Snapshot 22w18a

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

