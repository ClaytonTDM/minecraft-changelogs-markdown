# Minecraft Snapshot 22w13a

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
-   [MC-219852](https://bugs.mojang.com/browse/MC-219852) Corner in smoker\_bottom texture is still rotated incorrectly
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

