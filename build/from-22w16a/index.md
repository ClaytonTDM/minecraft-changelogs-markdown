# Minecraft Snapshot 22w16a

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
-   [MC-249912](https://bugs.mojang.com/browse/MC-249912) minecraft:ancient\_city/city\_center\_3 is one block shorter compared than the other ancient city centers
-   [MC-249928](https://bugs.mojang.com/browse/MC-249928) Mangrove tree roots do not update blocks around them when generating
-   [MC-250039](https://bugs.mojang.com/browse/MC-250039) Wardens can get angry at mobs outside world border
-   [MC-250040](https://bugs.mojang.com/browse/MC-250040) Wardens can hear mobs beyond the world border
-   [MC-250041](https://bugs.mojang.com/browse/MC-250041) Wardens can spawn outside of world border
-   [MC-250044](https://bugs.mojang.com/browse/MC-250044) Observers don't detect mangrove roots when tree grows
-   [MC-250094](https://bugs.mojang.com/browse/MC-250094) Wardens ignore /kill execution whilst they're emerging or digging
-   [MC-250095](https://bugs.mojang.com/browse/MC-250095) Wardens can spawn in very narrow places, causing them to suffocate
-   [MC-250293](https://bugs.mojang.com/browse/MC-250293) The "allay\_dust" particle is unused
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
-   [MC-249111](https://bugs.mojang.com/browse/MC-249111) sculk\_charge cannot be used in /particle command
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
-   [MC-249984](https://bugs.mojang.com/browse/MC-249984) note\_block is inconsistently spelled as noteblock in the allay\_deliver\_cake\_to\_noteblock advancement
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
-   [MC-249122](https://bugs.mojang.com/browse/MC-249122) block.sculk\_catalyst.bloom has no subtitle
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
-   [MC-249768](https://bugs.mojang.com/browse/MC-249768) entrance\_path\_5 can never generate
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
-   [MC-249397](https://bugs.mojang.com/browse/MC-249397) Bottom face of Warden's right arm missing in 'warden\_bioluminescent\_layer' texture
-   [MC-249398](https://bugs.mojang.com/browse/MC-249398) Game crash regarding warden
-   [MC-249404](https://bugs.mojang.com/browse/MC-249404) Boats with Chest aren't grouped in the recipe book
-   [MC-249405](https://bugs.mojang.com/browse/MC-249405) chatScale option defaults to 0.0 instead of 1.0, causing chat to disappear
-   [MC-249409](https://bugs.mojang.com/browse/MC-249409) Furnaces, blast furnaces and smokers don't cook without fuel in the bottom slot, even if they are already fired up
-   [MC-249474](https://bugs.mojang.com/browse/MC-249474) Four-legged mobs do not sit correctly in a boat with a chest
-   [MC-249642](https://bugs.mojang.com/browse/MC-249642) Wardens can't pass over rails

---

