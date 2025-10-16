# Minecraft Snapshot 22w17a

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

