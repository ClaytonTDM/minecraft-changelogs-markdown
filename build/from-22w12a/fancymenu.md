# Minecraft Snapshot 22w12a

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

# Minecraft Snapshot 22w11a

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

# Minecraft Snapshot 22w07a

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

# Minecraft Snapshot 22w06a

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

# Minecraft Snapshot 22w05a

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

# Minecraft Snapshot 22w03a

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

# Minecraft Snapshot 21w44a

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

# Minecraft Snapshot 21w43a

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

# Minecraft Snapshot 21w42a

It's time for a musical snapshot! We're now introducing new music for Caves & Cliffs: Part II. This time around we have a bunch of new tracks composed by the talented Lena Raine and Kumi Tanioka. These tracks are also available on [Spotify](https://open.spotify.com/album/7yQIrNTf3pBu0FdyAJqTqb?si=CC31NZyIQrOl-MNVCNYYkQ) for you to listen to, and they will soon be available on other services such as Apple Music and YouTube as well.

This snapshot also includes a few additional tweaks, bug fixes, and performance improvements.

**We still highly recommend backing up your world before loading it in this snapshot.**

## New Features in 21w42a

-   New music has been added to the game
-   Added world autosave indicator for single-player worlds

### Music

-   Added new music by Lena Raine and Kumi Tanioka to the Overworld (when playing in survival mode) and the main menu
-   Added a new music disc from Lena Raine titled 'otherside'. This can be found rarely in Stronghold corridor chests or much more rarely in Dungeon chests.

## Changes in 21w42a

-   World spawn selection algorithm has been reworked, now spawns player according to climate parameters
-   World generation tweaks

### World Generation

-   Lava springs can generate in mountains and snowy terrain
-   Water springs don't generate higher than y 192, and are slightly less common
-   Badlands gold generates higher up

## Technical Changes in 21w42a

-   Replaced `light` and `barrier` particles with `block_marker`

### Particles

**`block_marker`**

-   Renders with texture declared in `particle` slot for model assigned to configured block state
-   Summoned with same syntax as `block` particle (i.e. `block_marker wheat[age=2]`)

## Bugs fixed in 21w42a

-   [MC-129912](https://bugs.mojang.com/browse/MC-129912) Player no longer spawned at highest level at world spawn
-   [MC-132347](https://bugs.mojang.com/browse/MC-132347) Spawning inside icebergs
-   [MC-214288](https://bugs.mojang.com/browse/MC-214288) Player does not spawn on the surface of the world when min;;_;;y is greater than 0
-   [MC-233771](https://bugs.mojang.com/browse/MC-233771) Parity issue: Light blocks do not display their light level when shown via a held light block item
-   [MC-236837](https://bugs.mojang.com/browse/MC-236837) The player can occasionally spawn underground when loading into a new world
-   [MC-238582](https://bugs.mojang.com/browse/MC-238582) Beaches generate between desert and ocean
-   [MC-238900](https://bugs.mojang.com/browse/MC-238900) Values of 'Infinity' in noise settings in default worldgen

---

