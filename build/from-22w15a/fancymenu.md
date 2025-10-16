# Minecraft Snapshot 22w15a

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

Minecraft: Java Edition is jumping on the Wild Update train! The first snapshot for 1.19 is now available. It contains frogs, the Deep Dark, and a bunch of new blocks. We've also entered the era of 3D directional audio. Keeping up with the times!

Happy mining!

## New Features in 22w11a

-   Added the Deep Dark biome
-   Added Frogs & Tadpoles
-   Added mangrove blocks
-   Added mud and mud brick blocks
-   Added Sculk, Sculk Veins, Sculk Shrieker and Sculk Catalyst blocks
-   Added 3D Directional Audio option

### Deep Dark

Dig into the depths far underground to uncover the darkest biome in Minecraft - the Deep Dark.

-   Dimly lit and eerie, the Deep Dark is sure to strike fear into the hearts of even the most brave player
-   The floor of the Deep Dark is covered in sculk
-   No mobs spawn in the Deep Dark

### Frog

-   Frogs can jump
-   Frogs can swim
-   Frogs can walk on land
-   Frogs can croak
-   Frogs can eat small slimes, causing a slime ball to drop
-   Frogs can eat small Magma Cubes, causing a Froglight block to drop
-   Each Frog variant drops a specific Froglight Block
-   Three Froglight blocks are added, a lightsource block

### Tadpoles

-   Tadpoles can swim in water
-   Tadpoles on land "jump around" like fishes on land, and eventually dies
-   Tadpoles that grows up turns into a Frog
-   Tadpoles grow into a different type of frog based on the biome they are born in (Cold, Temperate, Warm)
-   Tadpoles can be caught in a bucket

### Mangrove wood blocks

Added a new type of wood: Mangrove! Mangrove biome + mangrove trees are coming in a later snapshot.

-   Mangrove log and stripped mangrove log
-   Mangrove wood and stripped mangrove wood
-   Mangrove roots and muddy mangrove roots
-   Mangrove boat, button, pressure plate, door, trapdoor, sign, slab, fence, fence gate, and stairs

### Mangrove leaves and propagules

-   Mangrove propagule is a sapling that grows from the bottom of mangrove leaves
-   Bonemealing mangrove leaves will cause a new propagule to start growing beneath it
-   Propagules grow through 4 stages, and growth can be accelerated by bonemealing
-   You can break off a fully grown propagule and plant it like a sapling. For now it will grow in an oak tree, but will of course grow into a mangrove tree when that is done.

### Mud

-   Mud is a block that will generate in the upcoming Mangrove biome.
-   When walking on mud, entities sink down a bit. Like soul sand, but without the slowdown.
-   Mud can be created by using a water bottle on dirt, by hand or with a dispenser.
-   Packed mud can be crafted from mud

### Mud bricks

-   Mud bricks are a building block that can be crafted from packed mud
-   Mud bricks can be crafted into Mud brick stairs, walls, and slabs using a crafting table or stonecutter.

### Sculk

The rattling tendrils of the Sculk Sensors had to come from somewhere, right? Introducing Sculk, a new family of blocks that dwells in the Deep Dark.

-   Added Sculk Catalyst block, a mysteriously soul-emitting block that blooms with Sculk patches underneath nearby dying mobs
    -   Mobs that perish in the presence of the catalyst will not drop their experience
-   Added Sculk blocks
    -   When a mob dies near a Sculk Catalyst, some unknown process seems to consume blocks beneath and turn them into Sculk blocks
    -   Sculk charge when spreading will have a chance to grow certain blocks, like Sculk Sensors on top of it, consuming its charge.
-   Added Sculk Vein blocks
    -   These veins are found on the edge of Sculk patches
    -   Similar to Glow Lichen, they can be placed in any orientation
    -   Spreading of veins causes other blocks to be taken over by the sculk
    -   Sculk Vein can spread underwater
-   Added Sculk Shrieker block.
    -   Sculk Shriekers can be found growing rarely from the charge of a Sculk Catalyst
    -   Sculk Shrieker can be waterlogged
    -   Sculk Shrieker requires Silk Touch to obtain otherwise drops experience when mined
-   Souls from mobs will spread through Sculk Veins and Sculk Blocks in random directions until

they find a valid substrate they can feed of off - The charge from souls in the Sculk Blocks and Sculk Veins will eventually decay, but it will decay much, much slower in the close vicinity of the Sculk Catalyst, and much faster away from its host - If the charge is dropped outside the range of the Catalyst, it has a chance of growing a Sculk Sensor

-   Sculk, Sculk Veins and Sculk Catalysts require Silk Touch to acquire. Otherwise, they drop experience when mined
-   The efficient tool for all Sculk family blocks is the Hoe

### 3D Directional Audio

-   Added sound option for 3D Directional Audio simulation
-   This option is best experienced with headphones

## Technical Changes in 22w11a

-   The data pack format is now 10
-   The resource pack format is now 9
-   Added 3D Blending
-   Added new font glyph provider for spaces
-   Added estimated GPU utilization percentage to performance profiling metrics and F3 debug screen
    -   This is only available for graphics devices that support GPU timer queries
-   Added ability for data and resource packs to selectively hide files from packs below them
-   World presets/types and flat world presets in "Create World" screen can now be controlled by datapacks
-   Added server property `max-chained-neighbor-updates` to limit the amount of consecutive neighbor updates before skipping additional ones. Negative values remove the limit.

### Blending

-   Blending now support 3d biome blending, so it will blend the underground biomes as well.
-   Removed `blending_data.old_noise`, now existence of `blending_data` in chunk data determines if a chunk is considered old
-   Added `blending_data.min_section` and `blending_data.max_section` that determines which sections will be used for data for blending

### Space glyph provider

-   New glyph provider type `space` is added to allow creation of space-like glyphs
-   New provider has single argument called `advances` which is map of codepoint to glyph advance (width)
-   Rendering of space glyph is not longer hardcoded (needs to be declared manually in font)

### Pack filters

-   Data and resource packs can have `filter` section in `pack.mcmeta`.
-   This section has mandatory field `block`, which is a list of patterns (regular expressions) for namespaces and paths.
-   If any of files in packs added before one with `filter` section matches any pattern inside `block`, it will be filtered out (i.e. treated as if it wasn't present in the first place).
-   `filter` section does not apply to a pack containing it - only to packs loaded before it.
-   Both `namespace` and `path` can be omited. Missing field matches every value.
-   For example, adding pack with this section in `pack.mcmeta` after vanilla pack will hide all recipes and advancements defined by vanilla pack

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
    

### World presets

-   New registry types `worldgen/world_preset` and `worldgen/flat_level_generator_preset` were added to data-drive presents (like "Amplified" or "Single Biome")
-   Two tags for world presets added (`normal` and `alternative`) to control values show on "World Type" button in "Create World" screen
-   One tag added for flat world presents (`visible`) to control order of elements displayed in "Configure Flat World" screen
-   World presets can also be used as a value of `level-type` in `server.properties`

### Predicates

-   The `feature` field in location predicates is now called `structure`

## Fixed bugs in 22w11a

-   [MC-67308](https://bugs.mojang.com/browse/MC-67308) Door top and side textures flip illogically when opened and closed
-   [MC-95103](https://bugs.mojang.com/browse/MC-95103) Shield item rendering not adjusted to the center
-   [MC-99930](https://bugs.mojang.com/browse/MC-99930) Brewing stand extends arms and inverts its texture when bottles are placed
-   [MC-106510](https://bugs.mojang.com/browse/MC-106510) Long structure names (over 64 characters) do not fit in the Structure Block GUI
-   [MC-109055](https://bugs.mojang.com/browse/MC-109055) Large Cocoa Pod texture is inconsistent
-   [MC-127885](https://bugs.mojang.com/browse/MC-127885) The textures on the spider models aren't mirrored properly
-   [MC-158668](https://bugs.mojang.com/browse/MC-158668) Vex continue to attack their target after it has been killed
-   [MC-165036](https://bugs.mojang.com/browse/MC-165036) Boss bars with the notched style are rendered incorrectly if more than one boss bar is active
-   [MC-165990](https://bugs.mojang.com/browse/MC-165990) Crafting bamboo into scaffolding gives you 8 times the furnace fuel for free
-   [MC-183309](https://bugs.mojang.com/browse/MC-183309) Player reach is different for client and server when crawling
-   [MC-195717](https://bugs.mojang.com/browse/MC-195717) Custom Dimensions JSON Requires Seed
-   [MC-201150](https://bugs.mojang.com/browse/MC-201150) Unused pixels in end rod texture
-   [MC-202580](https://bugs.mojang.com/browse/MC-202580) Transition between end stone texture and end portal frame is not as seamless as it previously was
-   [MC-219843](https://bugs.mojang.com/browse/MC-219843) Mycelium's side texture differs from other dirt-based blocks
-   [MC-219852](https://bugs.mojang.com/browse/MC-219852) Corner in smoker;;_;;bottom texture is still rotated incorrectly
-   [MC-219875](https://bugs.mojang.com/browse/MC-219875) You can cause a desync when repeatably picking up liquids
-   [MC-221639](https://bugs.mojang.com/browse/MC-221639) Light Block isn't Dragon or Wither Immune
-   [MC-225837](https://bugs.mojang.com/browse/MC-225837) The word "Recipe" is spelled as "Reciple" within the "narration.recipe" string
-   [MC-230603](https://bugs.mojang.com/browse/MC-230603) Wolf ears and legs aren't mirrored
-   [MC-235964](https://bugs.mojang.com/browse/MC-235964) Crash on "Saving world" when F3+L profiling is active - java.lang.NullPointerException: Cannot read field "f" because "this.D" is null
-   [MC-238070](https://bugs.mojang.com/browse/MC-238070) Brewing stand arms do not connect with their bases
-   [MC-238807](https://bugs.mojang.com/browse/MC-238807) "Out of memory!" message is untranslatable
-   [MC-248936](https://bugs.mojang.com/browse/MC-248936) Minecraft icon on MacOS is not showing correct icon

---

Another snapshot is now available for Minecraft: Java Edition. If you're into custom worlds, you might want to try out biome tags.

Enjoy!

## Technical Changes in 22w07a

-   Biome tags are now used to determine which biomes a structure can generate in

## Fixed bugs in 22w07a

-   [MC-237110](https://bugs.mojang.com/browse/MC-237110) Grass blocks can generate underwater
-   [MC-238977](https://bugs.mojang.com/browse/MC-238977) Glow squids spawn in villager farms and wells in superflat worlds
-   [MC-243190](https://bugs.mojang.com/browse/MC-243190) Rooted dirt can replace cave vines
-   [MC-244683](https://bugs.mojang.com/browse/MC-244683) Tropical Fish in lush caves spawn in bubble columns
-   [MC-245857](https://bugs.mojang.com/browse/MC-245857) Enchanting table registers block diagonally above the bookshelves as blocking said bookshelf
-   [MC-245925](https://bugs.mojang.com/browse/MC-245925) Falling block visual glitch when dying with doImmediateRespawn
-   [MC-246465](https://bugs.mojang.com/browse/MC-246465) Lava can burn, damage, and destroy entities client-side and lead to de-sync
-   [MC-248095](https://bugs.mojang.com/browse/MC-248095) Active repeating command blocks stop running after world conversion to 1.18
-   [MC-248523](https://bugs.mojang.com/browse/MC-248523) The game crashes when attempting to open the beacon GUI

---

Today we're happy to share snapshot 22w06a with you. It contains compliance updates for South Korean players and is Totally Teeming with Technical Tag Tastiness.

Happy Mining (in moderation)!

## Changes in 22w06a

If you’re playing in South Korea, we added gameplay timers and notices in compliance with gaming laws to help remind players to take occasional breaks from gameplay. For more information, please see [the FAQ](https://help.minecraft.net/hc/articles/360052763631).

## Technical Changes in 22w06a

-   Any type present in registries (blocks, items, biomes, etc.) can now have tags

### Universal tags

-   Tags can now be defined for any registry (blocks, items, biomes, etc. - see `registries.json` in report)
-   New tags are stored in datapacks under `tags` directory (same as old ones)
    -   Names of new tag directories are the same as registry names (so `/data/[namespace]/tags/potion` and `/data/[namespace]/tags/worldgen/biome`)
    -   Existing tags (`blocks`, `items`, `fluids`, `entity_types`, `game_events` and `functions`) keep their name (for now)
-   Some fields in worldgen structures that previously only lists of element ids now accept tags
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

## Fixed bugs in 22w06a

-   [MC-105317](https://bugs.mojang.com/browse/MC-105317) Structure blocks do not rotate entities correctly when loading
-   [MC-239708](https://bugs.mojang.com/browse/MC-239708) Superflat world "Water World" preset settings are obsolete for the 1.18 update
-   [MC-245937](https://bugs.mojang.com/browse/MC-245937) Flashing particles when boosting upwards with firework rockets
-   [MC-248106](https://bugs.mojang.com/browse/MC-248106) Parrot dying while using Riptide enchantment

---

While we work on some larger changes that aren't quite ready yet, here's snapshot 22w05a which contains a small squishing (that's a word, right?) of bugs.

Happy mining!

## Changes in 22w05a

-   A change in 22w03a that re-arranged Badlands biome layouts has been reverted to avoid causing generation changes and chunk borders. This change will be re-introduced later.

## Fixed bugs in 22w05a

-   [MC-4533](https://bugs.mojang.com/browse/MC-4533) Water graphical glitch when connecting diagonally
-   [MC-70848](https://bugs.mojang.com/browse/MC-70848) Water looks like it flows up
-   [MC-105317](https://bugs.mojang.com/browse/MC-105317) Structure blocks do not rotate entities correctly when loading
-   [MC-214289](https://bugs.mojang.com/browse/MC-214289) Pointed dripstone can replace blocks when generating
-   [MC-216004](https://bugs.mojang.com/browse/MC-216004) Wood pillars from mineshafts are generating on pointed dripstones
-   [MC-216589](https://bugs.mojang.com/browse/MC-216589) Abandoned Mineshafts don't delete dripstone in certain situations
-   [MC-232290](https://bugs.mojang.com/browse/MC-232290) Foxes will lay down in powder snow and not try to escape even when taking damage
-   [MC-236775](https://bugs.mojang.com/browse/MC-236775) Biome Selector is disordered in other languages
-   [MC-243152](https://bugs.mojang.com/browse/MC-243152) Slimes spawn in "Redstone Ready" superflat worlds
-   [MC-245772](https://bugs.mojang.com/browse/MC-245772) Outdated chests' loot tables get deleted when updating to 1.18.1
-   [MC-245910](https://bugs.mojang.com/browse/MC-245910) Campfires and hoppers cause constant chunk saving
-   [MC-247636](https://bugs.mojang.com/browse/MC-247636) Deleting a world no longer logs that a world is being deleted
-   [MC-248181](https://bugs.mojang.com/browse/MC-248181) The player disappears at certain heights
-   [MC-248189](https://bugs.mojang.com/browse/MC-248189) Teleporting below level 0 from the overworld to another dimension freezes the game on the loading screen until player dies
-   [MC-248195](https://bugs.mojang.com/browse/MC-248195) Typing /placefeature crashes client when connected to a server
-   [MC-248210](https://bugs.mojang.com/browse/MC-248210) Harsh chunk borders appear when upgrading to 22w03a
-   [MC-248225](https://bugs.mojang.com/browse/MC-248225) Incorrect BlockPos getSquaredDistance() calculation
-   [MC-248230](https://bugs.mojang.com/browse/MC-248230) Players get stuck on the "Loading terrain..." screen after rejoining the world whilst above or below the build limit

---

Happy New Year! It's time for the first snapshot of 2022 to hit the shelves. This snapshot series will be leading up to the release of 1.18.2. With this release we aim to address a few issues before moving on and starting with the Wild Update snapshots.

This snapshot contains tweaks to the world seed input and adds a new `placefeature` command. On top of that, it also fixes a bunch of bugs.

Happy mining!

## Changes in 22w03a

-   A seed of the number zero is no longer handled as a special case
-   Any spaces before/after an inputted seed will now be trimmed
-   Ender chests are no longer gift wrapped around Christmas

## Technical Changes in 22w03a

-   The `locate` command now uses a namespaced id parameter
-   Added command: `placefeature`

### `placefeature`

New command that places a configured feature at a given location. Syntax: `placefeature <id> [pos]`

Parameters:

-   `id`: The namespaced id of a configured feature to place
-   `pos`: The position to use as the origin for the feature placement (if omitted, `~ ~ ~` is used)

## Fixed bugs in 22w03a

-   [MC-83938](https://bugs.mojang.com/browse/MC-83938) Standing on entities with solid collision boxes (shulkers, boats) kicks you for flying
-   [MC-98727](https://bugs.mojang.com/browse/MC-98727) Server: Entering a boat/minecart/horse while going upwards from jumping causes a kick for flying
-   [MC-111082](https://bugs.mojang.com/browse/MC-111082) Riding a boat with NoGravity on a server without flight enabled causes kick for flying
-   [MC-126772](https://bugs.mojang.com/browse/MC-126772) Underwater fog doesn't hide edge of chunks correctly at low render distances
-   [MC-135989](https://bugs.mojang.com/browse/MC-135989) Kicked for flying using trident with Riptide enchantment
-   [MC-167763](https://bugs.mojang.com/browse/MC-167763) Blindness does not work underwater for certain graphics cards
-   [MC-185545](https://bugs.mojang.com/browse/MC-185545) Knockback Resistance on players is still affected by chance
-   [MC-185695](https://bugs.mojang.com/browse/MC-185695) Twisting vines don't reliably protect the player from fall damage
-   [MC-205232](https://bugs.mojang.com/browse/MC-205232) Player can see farther in powder snow with blindness effect
-   [MC-223834](https://bugs.mojang.com/browse/MC-223834) Pointed dripstone can form below some non-full (non-solid) blocks
-   [MC-226359](https://bugs.mojang.com/browse/MC-226359) The Zero-Width Non-Joiner shows as a "ZWNJ" box
-   [MC-229313](https://bugs.mojang.com/browse/MC-229313) Some blocks that negate fall damage don't reliably protect mobs at certain heights
-   [MC-230905](https://bugs.mojang.com/browse/MC-230905) Sky background is visible on certain reduced fog situations
-   [MC-233599](https://bugs.mojang.com/browse/MC-233599) /spreadplayers command does not allow for negative "under" values
-   [MC-235574](https://bugs.mojang.com/browse/MC-235574) Game crashes when replacing a block with a wall with blockstate up:false
-   [MC-236693](https://bugs.mojang.com/browse/MC-236693) "Done" button in controls submenu is very low
-   [MC-237262](https://bugs.mojang.com/browse/MC-237262) Crash report and tick profiling causes "Failed to find module info for ;;_;;" spam to log
-   [MC-238114](https://bugs.mojang.com/browse/MC-238114) Meadow trees can spawn without bee nests
-   [MC-238866](https://bugs.mojang.com/browse/MC-238866) Snow / powder snow can generate underwater
-   [MC-239031](https://bugs.mojang.com/browse/MC-239031) Glitchy chunk rendering persists since 21w41a
-   [MC-239436](https://bugs.mojang.com/browse/MC-239436) Broken culling in very long caves
-   [MC-240559](https://bugs.mojang.com/browse/MC-240559) JFR JSON report's bytesPerSecond is incorrectly calculated
-   [MC-241152](https://bugs.mojang.com/browse/MC-241152) Powder snow is part of #goat;;_;;spawnable;;_;;on block tag / Goats can spawn on powder snow
-   [MC-241205](https://bugs.mojang.com/browse/MC-241205) Sandstone generates 2-5 layers instead of 3-8 layers
-   [MC-242010](https://bugs.mojang.com/browse/MC-242010) Snow Blocks, Powder Snow aren't a part of #azalea;;_;;root;;_;;replaceable / Rooted dirt can't replace Snow Blocks & Powder Snow
-   [MC-242331](https://bugs.mojang.com/browse/MC-242331) Entities are displayed faster than chunks
-   [MC-242543](https://bugs.mojang.com/browse/MC-242543) Suffocation always uses the entity head center position for predicate and collision box
-   [MC-242709](https://bugs.mojang.com/browse/MC-242709) Pointed dripstone clusters create holes in the ground when generating in aquifers
-   [MC-243015](https://bugs.mojang.com/browse/MC-243015) Falling blocks at chunk generation cause tons of entities and (client-side) lag
-   [MC-243196](https://bugs.mojang.com/browse/MC-243196) Driver view angle resets when another player enters or exits boat
-   [MC-243245](https://bugs.mojang.com/browse/MC-243245) Unable to select "What is Realms?" button using Tab
-   [MC-243489](https://bugs.mojang.com/browse/MC-243489) Console spam: Skipping update for removed player
-   [MC-243619](https://bugs.mojang.com/browse/MC-243619) Raid waves can spawn outside of simulation distance
-   [MC-244164](https://bugs.mojang.com/browse/MC-244164) Upgrade to 1.18 makes chests invisible and empty
-   [MC-244174](https://bugs.mojang.com/browse/MC-244174) Fog effect for void, blindness, water, lava & powder snow is cylindrical
-   [MC-245345](https://bugs.mojang.com/browse/MC-245345) Crash when reloading chunks
-   [MC-245347](https://bugs.mojang.com/browse/MC-245347) Flying with an elytra and colliding with floating flowing water sometimes doesn't reset fall damage
-   [MC-245406](https://bugs.mojang.com/browse/MC-245406) Memory leak leading to crashes when loading pre-1.18 chunks
-   [MC-245416](https://bugs.mojang.com/browse/MC-245416) Baby turtles suffocate on soul sand
-   [MC-246445](https://bugs.mojang.com/browse/MC-246445) Game crashes when dispenser with shears is used on non-beehive block in #beehives tag
-   [MC-246449](https://bugs.mojang.com/browse/MC-246449) Game crashes when villager tries to open non-door in #wooden;;_;;doors tag
-   [MC-246464](https://bugs.mojang.com/browse/MC-246464) Game crashes when dispensing a bone meal in a warm ocean and there is a block with no facing block state in #wall;;_;;corals
-   [MC-247415](https://bugs.mojang.com/browse/MC-247415) Game crashes if coral related block tags are empty during coral reef generation

---

Another snapshot is now available. We've added new world generation below existing chunks, and blocks and fluids are now also part of the simulation distance setting. We also fixed a few bugs.

Keep in mind that we're still working on the world upgrades, so making a backup before upgrading is still a good idea.

Enjoy!

## New Features in 21w44a

-   New world generation is now inserted under existing chunks when upgrading a world to the new world height
-   Added an Online options screen where you can now find the Realms Notifications option and Difficulty when on a server
-   Added an "Allow Server Listings" option to opt-out of having your name displayed in server listings

## Changes in 21w44a

-   Sleeping now only resets the weather cycle if it was raining
-   Blocks and fluids are now also affected by simulation distance. It might be a good idea to test that the behavior of your Redstone contraptions remained the same
-   Optimized entity collisions

## Technical Changes in 21w44a

-   Servers can now set property `hide-online-players` to `true` in order to not send a player list on status requests
-   When JFR profiling is started from an external source, the JFR events for network packets are now aggregated instead of one event per packet

## Bugs fixed in 21w44a

-   [MC-63340](https://bugs.mojang.com/browse/MC-63340) Sleeping always resets time until rain
-   [MC-170551](https://bugs.mojang.com/browse/MC-170551) Foxes can't spawn on podzol or coarse dirt
-   [MC-200494](https://bugs.mojang.com/browse/MC-200494) In mineshafts, torches can generate attached to blocks other than the wooden supports
-   [MC-216432](https://bugs.mojang.com/browse/MC-216432) Mineshafts can generate with light but without any torches
-   [MC-216561](https://bugs.mojang.com/browse/MC-216561) Torches not spawning in abandoned mineshafts under y=0
-   [MC-217038](https://bugs.mojang.com/browse/MC-217038) Large dripstone structures can be generated outside the caves
-   [MC-236701](https://bugs.mojang.com/browse/MC-236701) New mountain biomes don't count towards "Adventuring Time" advancement
-   [MC-236938](https://bugs.mojang.com/browse/MC-236938) /jfr stop output does not have a link
-   [MC-237986](https://bugs.mojang.com/browse/MC-237986) Mobs specific to structures aren't spawning in their structures
-   [MC-238062](https://bugs.mojang.com/browse/MC-238062) Foxes & Wolves don't spawn in Groves
-   [MC-238761](https://bugs.mojang.com/browse/MC-238761) Adventuring Time does not account for the new cave biomes
-   [MC-238877](https://bugs.mojang.com/browse/MC-238877) Deep Ocean & Ocean is not needed for the "Adventure Time" advancement
-   [MC-238900](https://bugs.mojang.com/browse/MC-238900) Values of 'Infinity' in noise settings in default worldgen
-   [MC-238912](https://bugs.mojang.com/browse/MC-238912) Powder snow strips can't generate exposed to the surface
-   [MC-238962](https://bugs.mojang.com/browse/MC-238962) Icebergs go all the way to ocean floor.
-   [MC-238966](https://bugs.mojang.com/browse/MC-238966) Old Growth Spruce Taiga and Old Growth Birch Forest aren't part of the "Adventuring Time" advancement
-   [MC-238968](https://bugs.mojang.com/browse/MC-238968) Windswept Gravelly Hills & Windswept Savanna aren't apart of the "Adventuring Time" advancement
-   [MC-239280](https://bugs.mojang.com/browse/MC-239280) Withers do not move down to follow the player when the wither's health is half or lower
-   [MC-239344](https://bugs.mojang.com/browse/MC-239344) All torches in mineshafts are facing the wrong way
-   [MC-239359](https://bugs.mojang.com/browse/MC-239359) Wither Skeletons can only spawn on Nether Bricks
-   [MC-239689](https://bugs.mojang.com/browse/MC-239689) The "amplified" boolean in noise settings does nothing
-   [MC-239854](https://bugs.mojang.com/browse/MC-239854) Nether and caves world is missing bedrock
-   [MC-239858](https://bugs.mojang.com/browse/MC-239858) Nether decorations can be generated on the original bedrock layer
-   [MC-239866](https://bugs.mojang.com/browse/MC-239866) Terrain shaper in noise;;_;;settings is not used

---

Here's a snapshot from the blender! In this snapshot, world generation around the edges of an old world will now be adjusted for a smoother transition! This is the first iteration of this system which we expect to keep improving. Keep in mind that if you try it out now, the result will be saved to your world forever - which, as we know, is quite a long time. Better be safe than sorry. Make a backup before you try it!

Also - the space underneath existing chunks is now filled in, but only with deepslate. We will later be adding full cave generation in this place, so if you want that in your world, make a backup before you try it!

Due to some updates to terrain generation in this snapshot, seeds have shuffled once again so worlds will not look like they did in the previous snapshot. We expect world seeds to be stable after this snapshot.

Oh yeah, did we mention that it's a good idea to make a backup?

## New Features in 21w43a

-   The edge between old and new world generation is now adjusted when you upgrade a world

### Upgrading of old worlds

-   When generating close to old chunks hew terrain is adjusted to better match the existing terrain at the borders
-   In old chunks, if there is Bedrock at y=0, the column below will be filled with Deepslate
    -   Worlds upgraded in this snapshot will permanently have this deepslate, so if you want new caves under height 0 later, make sure to keep a backup before upgrading
-   The old Bedrock between y=0 and y=4 in old chunks gets replaced with Deepslate
-   A new Bedrock layer is placed at y=-64

## Changes in 21w43a

-   The Priority Updates video setting has been renamed to Chunk Builder
-   Reduced the amount of flooded caves near river and ocean coastlines
-   Aquifer water levels change less often, so you'll more often have larger areas with the same water level. This means slightly fewer underground waterfalls and slightly easier underground boat travel
-   Lava aquifers are slightly less common
-   Restricted Big Dripleaf placement to Clay, Grass, Dirt, Farmland, Moss, Rooted Dirt, Podzol and Mycelium

## Technical Changes in 21w43a

-   Some internal details of block and fluid ticking have been changed to improve save times. While it should behave exactly as it was, it might be a good time to test your redstone contraptions (on a copy of a world or with a backup, of course)
-   The Chunk format has been updated

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
-   Added `yPos` the minimum section y position in the chunk
-   Added `below_zero_retrogen` containing data to support below zero generation
-   Added `blending_data` containing data to support blending new world generation with existing chunks

## Fixed bugs in 21w43a

-   [MC-131930](https://bugs.mojang.com/browse/MC-131930) Deep warm ocean generates without coral and sea pickles
-   [MC-156616](https://bugs.mojang.com/browse/MC-156616) Badlands layers not generating properly
-   [MC-217379](https://bugs.mojang.com/browse/MC-217379) Pufferfish don't spawn in deep warm ocean
-   [MC-236624](https://bugs.mojang.com/browse/MC-236624) Deep Warm Oceans don't count towards the "Adventuring Time" advancement
-   [MC-236970](https://bugs.mojang.com/browse/MC-236970) Badlands strata is covered by orange terracotta at Y=160 and above
-   [MC-238073](https://bugs.mojang.com/browse/MC-238073) Decorators are independent of world seed
-   [MC-238939](https://bugs.mojang.com/browse/MC-238939) Stone can generate in the Nether
-   [MC-239397](https://bugs.mojang.com/browse/MC-239397) Lava pockets generate in icebergs

---

