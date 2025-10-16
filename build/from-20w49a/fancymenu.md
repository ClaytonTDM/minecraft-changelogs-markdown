# Minecraft Snapshot 20w49a

Another snapshot is going out, and this one introduces the Sculk. They're a bit creepy, but don't let that put you off. Pick up some good vibrations!

## New Features in 20w49a

-   Added Dripstone Caves biome
-   Added Sculk Sensors

### Dripstone Caves biome

This biome doesn't generate naturally yet, since it is designed for the upcoming larger caves. However, if you want to see the biome in the current caves you can create a single-biome world with dripstone caves.

-   Contains plenty of Pointed Dripstone on the floors and ceilings, and small pools of water
-   In some places you'll find larger stalagmites, stalactites, and columns built from Dripstone Blocks.

### Sculk Sensors

-   Introducing the bizarre, tendril-filled world of Sculk - prepare for Sculk Sensors to creep you out with their unique ability to detect vibrations nearby.
-   A vibration is anything that causes physical motion; if you are careful, there are some motions that are undetectable to sensors by sneaking.
    -   These sneak-friendly vibrations currently include walking, falling to the ground or throwing/shooting projectiles.
-   Sculk Sensors will not listen to vibrations that are directly created by other Sculk sources.
-   When a vibration is detected, a signal is sent from the source location to the sensor at a speed of 1 game tick per block.
    -   Other vibrations cannot be detected by a sensor when a signal is already travelling to it.
    -   When the signal has arrived, the sensor will be activated for 40 game ticks (approximately 2 seconds).
    -   While activated, the sensor cannot detect other vibrations.
-   Sculk Sensors can detect vibrations in an 8 block radius around it.
-   The efficient tool to mine Sculk Sensors is the Hoe.
-   They can be waterlogged.

**Redstone Emission**

-   Sculk Sensors emit a redstone signal when they are activated.
-   The strength of the redstone signal is inversely proportional to the distance the vibration signal travelled.
    -   This means that the closer the vibration is, the stronger the redstone signal is.
    -   The output is also scaled based on the Sculk Sensor's radius, so it can reach the max redstone signal strength when the vibration is 0 distance away (directly on top of the sensor).

**Vibration Frequencies**

-   Sculk Sensors have a unique interaction with comparators.
-   Each vibration in the game falls under a certain frequency value, and this value can be measured with a comparator.
-   With the right contraption, this allows you to detect when a certain action has occured nearby.

Vibration Type

Frequency Value

Step

1

Flap

2

Swim

3

Elytra Free Fall

4

Hit Ground

5

Splash

6

Wolf Shaking

6

Projectile Shoot

7

Projectile Land

8

Start Eating

7

Finish Eating

8

Hit Entity

9

Add Item To Armor Stand

9

Open Block

11

Close Block

10

Switch Block

11

Unswitch Block

10

Press Block

11

Unpress Block

10

Attach Block

11

Detach Block

10

Open Container

11

Close Container

10

Dispense Failed

10

Use Flint And Steel

12

Place Block

12

Destroy Block

13

Place Fluid

12

Pickup Fluid

13

Cast Fishing Rod

15

Reel-In Fishing Rod

14

Extend Piston

15

Contract Piston

14

Explosion

15

Lightning Strike

15

**Wool Occlusion**

-   Wool has a special interaction with Sculk Sensors.
-   If a wool block is in the way of a vibration source, the sensor will not be able to detect it.

**Technical Tidbits**

-   Sculk Sensors have a cooldown period of 1 tick after being placed or after deactivating.
-   During this short cooldown period, it cannot detect vibrations. This is to prevent it from activating itself when a contraption it is powering is being unpowered. Feedback is welcome on this point!

## Changes in 20w49a

-   The Fullness of a bundle now shows up regardless of whether Advanced Tooltips are on or off
-   Stalactites and stalagmites merge if the tips are next to each other, unless you press shift while placing

## Technical Changes in 20w49a

-   A new game event system has been implemented to support Sculk Sensors detecting vibrations.
-   World height related values are now exposed for customized worlds
-   Removed the `max-build-height` server setting
-   Added `occludes_vibration_signals` block tag. Anything in this tag will occlude vibrations, and inherits `wool` tag entries by default
-   New particle types: `vibration` and `dust_color_transition`
-   A new game event system has been implemented to support Sculk Sensors detecting vibrations.

### Game Events

This system has been developed to identify when certain in-world actions are happening in nearby chunks, particularly so the new Sculk Sensor can detect these events as vibrations.

The following is a list of the initial game events:

-   `minecraft:step`
-   `minecraft:swim`
-   `minecraft:flap`
-   `minecraft:elytra_free_fall`
-   `minecraft:hit_ground`
-   `minecraft:splash`
-   `minecraft:projectile_shoot`
-   `minecraft:projectile_land`
-   `minecraft:entity_hit`
-   `minecraft:block_place`
-   `minecraft:block_destroy`
-   `minecraft:fluid_place`
-   `minecraft:fluid_pickup`
-   `minecraft:block_open`
-   `minecraft:block_close`
-   `minecraft:block_switch`
-   `minecraft:block_unswitch`
-   `minecraft:block_attach`
-   `minecraft:block_detach`
-   `minecraft:block_press`
-   `minecraft:block_unpress`
-   `minecraft:container_open`
-   `minecraft:container_close`
-   `minecraft:explode`
-   `minecraft:armor_stand_add_item`
-   `minecraft:wolf_shaking`
-   `minecraft:dispense_fail`
-   `minecraft:fishing_rod_cast`
-   `minecraft:fishing_rod_reel_in`
-   `minecraft:piston_extend`
-   `minecraft:piston_contract`
-   `minecraft:flint_and_steel_use`
-   `minecraft:eating_start`
-   `minecraft:eating_finish`
-   `minecraft:lightning_strike`

**Tags**

There are also game event tags that come with this, and can be modified by data packs. They can be found under `data/minecraft/tags/game_events`.

-   `vibrations` Determines which game events are considered vibrations by the Sculk Sensor. Currently, all added game events are in this tag by default.
-   `ignore_vibrations_stepping_carefully` Which game events should be ignored by the Sculk Sensor when the source of the event is sneaking.

The following game events are in `ignore_vibrations_stepping_carefully` by default:

-   `minecraft:step`
-   `minecraft:hit_ground`
-   `minecraft:projectile_shoot`

## Fixed bugs in 20w49a

-   [MC-18880](https://bugs.mojang.com/browse/MC-18880) The Absorption effect has no texture for poison/wither hearts (appears empty instead)
-   [MC-201840](https://bugs.mojang.com/browse/MC-201840) Optional function tags sometimes don't run even when the tag exists
-   [MC-203797](https://bugs.mojang.com/browse/MC-203797) Placing or removing a block over the void causes a DecoderException on servers
-   [MC-204314](https://bugs.mojang.com/browse/MC-204314) Double copper slabs only drop a single slab when mined
-   [MC-205043](https://bugs.mojang.com/browse/MC-205043) Absorption hearts appear broken when taking freezing damage
-   [MC-205096](https://bugs.mojang.com/browse/MC-205096) Hardcore hearts lose all color when player is taking freeze damage
-   [MC-205391](https://bugs.mojang.com/browse/MC-205391) Waxing cut copper doesn’t prevent it from oxidising
-   [MC-205629](https://bugs.mojang.com/browse/MC-205629) Unused sign cache when rendering signs
-   [MC-206553](https://bugs.mojang.com/browse/MC-206553) Pointed Dripstone creates water particles in the Nether
-   [MC-206563](https://bugs.mojang.com/browse/MC-206563) Pointed dripstone is not connected to the player's hand
-   [MC-206578](https://bugs.mojang.com/browse/MC-206578) Large pillars of stalactites don't fall when the block above is removed
-   [MC-206583](https://bugs.mojang.com/browse/MC-206583) Cauldrons below stalactites at least 2 blocks tall won't fill up
-   [MC-206591](https://bugs.mojang.com/browse/MC-206591) Setting any floating block to a pointed dripstone, causes the replaced block to drop as an item
-   [MC-206594](https://bugs.mojang.com/browse/MC-206594) Large stalactites falling occasionally don't drop all of their pointed dripstone items
-   [MC-206599](https://bugs.mojang.com/browse/MC-206599) Pointed dripstone can be placed atop each other, even if a player would be inside the hitbox of the lower dripstone
-   [MC-206606](https://bugs.mojang.com/browse/MC-206606) Frustum stage of stalactites negates fall damage
-   [MC-206613](https://bugs.mojang.com/browse/MC-206613) Pointed Dripstone duplicates when the block it was attached to is removed
-   [MC-206615](https://bugs.mojang.com/browse/MC-206615) Pointed dripstone's hitbox can extend further than a block, causing nearby stalactites to not be able to fall
-   [MC-206642](https://bugs.mojang.com/browse/MC-206642) Stalactites destroy items they fall on, however stalagmites don't
-   [MC-206643](https://bugs.mojang.com/browse/MC-206643) When a dripstone's hitbox extends into the space of another block, the area that extends into said block cannot be targeted
-   [MC-206669](https://bugs.mojang.com/browse/MC-206669) Inconsistency between dripstone and non-mob entities
-   [MC-206682](https://bugs.mojang.com/browse/MC-206682) Floating dripstone tips are sometimes left behind from large dripstone pillars
-   [MC-206691](https://bugs.mojang.com/browse/MC-206691) Pointed dripstone replaces items with pointed dripstone items
-   [MC-206711](https://bugs.mojang.com/browse/MC-206711) Coding error at net.minecraft.world.entity.Entity.resetPos()
-   [MC-206790](https://bugs.mojang.com/browse/MC-206790) Waterlogged dripstone does not update
-   [MC-206878](https://bugs.mojang.com/browse/MC-206878) Pointed dripstone attached to a piston is not removed as the piston extends

---

# Minecraft Snapshot 20w48a

Did someone ask for a snapshot full of tasty Caves & Cliffs features? Then you came to the right place! This particular snapshot adds blocks for dripstone – stalagmites and stalactites. Or is it stalactites and stalagmites? Anyway, you can’t find them in the world just yet… but try out the functionality of the new blocks!

## New Features in 20w48a

-   Added Dripstone Blocks and Pointed Dripstone

### Pointed Dripstone

-   Forms a stalactite if placed on the ceiling or a stalagmite if placed on the floor
-   Can be combined to form longer stalactites & stalagmites
-   Stalagmites break if not attached to something below
-   Landing or jumping on a stalagmite hurts! They are sharp
-   Stalactites fall down if not attached to something above
-   Being hit by a falling stalactite hurts! They are sharp
-   Stalactites drip water (or lava if there is lava above the ceiling)
-   A stalactite with a water source above the ceiling will gradually fill a cauldron below with water
-   A stalactite with a lava source above the ceiling will fill a cauldron below with lava after a while
-   Thrown tridents break pointed dripstone

## Changes in 20w48a

-   Right-clicking a bundle in the inventory now empties one item from the bundle
-   Using a bundle now throws out its entire content into the world
-   Advanced tooltips now show how full a bundle is
-   Candles can now only be placed if there is a solid surface below
-   Wearing any piece of leather armor now prevents freezing entirely
-   Changed textures for amethysts, candles, clocks and compasses

## Technical Changes in 20w48a

-   Added a freezeDamage game rule that allows players to toggle whether powder snow causes freeze damage or not

## Fixed bugs in 20w48a

-   [MC-3615](https://bugs.mojang.com/browse/MC-3615) Lava and water are completely transparent at certain height levels
-   [MC-176614](https://bugs.mojang.com/browse/MC-176614) Swimming and doing certain actions make the player look very odd/does not have animations for swimming + doing certain actions
-   [MC-198864](https://bugs.mojang.com/browse/MC-198864) World border does not render below y=0 / above y=255
-   [MC-203602](https://bugs.mojang.com/browse/MC-203602) Spyglass animation is wrong when swimming
-   [MC-203645](https://bugs.mojang.com/browse/MC-203645) Spyglass wobbles when walking while in use
-   [MC-203824](https://bugs.mojang.com/browse/MC-203824) Weird Hand animation when attacking and using spyglass at the same time
-   [MC-203925](https://bugs.mojang.com/browse/MC-203925) Items inside of a bundle disappear if you empty the bundle in the inventory when in Creative mode while the inventory is full
-   [MC-203951](https://bugs.mojang.com/browse/MC-203951) The elder guardian particle moves when an elder guardian moves
-   [MC-204323](https://bugs.mojang.com/browse/MC-204323) Inconsistency: Crafting copper blocks into slabs only yields 4 slabs instead of 6
-   [MC-204424](https://bugs.mojang.com/browse/MC-204424) Using a spyglass while gliding with an elytra points the spyglass down in third person view
-   [MC-205041](https://bugs.mojang.com/browse/MC-205041) Full leather armour does not prevent freezing damage
-   [MC-205069](https://bugs.mojang.com/browse/MC-205069) Powdered snow doesn't give you frozen effect in creative mode
-   [MC-205072](https://bugs.mojang.com/browse/MC-205072) Snow Ambient Effect sometimes don't show correctly on the edge of a Powder Snow Block
-   [MC-205145](https://bugs.mojang.com/browse/MC-205145) Compass with nothing to point to will spin very rapidly when in bundle.
-   [MC-205197](https://bugs.mojang.com/browse/MC-205197) Creating a map from an empty map no longer plays a sound
-   [MC-205220](https://bugs.mojang.com/browse/MC-205220) Cannot manipulate horse.saddle using /item command
-   [MC-205269](https://bugs.mojang.com/browse/MC-205269) Chest closing sounds desynced with closing animations
-   [MC-205321](https://bugs.mojang.com/browse/MC-205321) Item modifiers that change the item type don't work on entities
-   [MC-205445](https://bugs.mojang.com/browse/MC-205445) The Fabulous graphics warning is shown at the wrong time
-   [MC-205492](https://bugs.mojang.com/browse/MC-205492) The 'Include entities' option in the structure block UI is the opposite of the actual behavior
-   [MC-205567](https://bugs.mojang.com/browse/MC-205567) TNT flashes are translucent once again
-   [MC-205627](https://bugs.mojang.com/browse/MC-205627) Item modifiers that change the count to 0 don't completely remove the item
-   [MC-206058](https://bugs.mojang.com/browse/MC-206058) /item modify doesn't visually update the model of an item in an item frame

---

# Minecraft Snapshot 20w46a

The snow is snowier than before.

For today’s snapshot, we’ve changed most of the textures introduced in the previous snapshot. This is simply to test if these textures give a better experience in exploring and building. We’re interested to hear what you think. Keep in mind, that some textures might be reverted or changed again in the future

## New Features in 20w46a

-   Added Powder Snow!

### Powder Snow

Snowier snow!

-   Powder Snow is a trap block that causes any entity that walks into it to sink in it
-   You can pick up and place Powder Snow with a bucket
-   Wear leather boots to prevent yourself from sinking into Powder Snow blocks
-   Leave a Cauldron outside in falling snow and it will fill with Powder Snow

**Freezing**

-   Standing in Powder Snow will slowly freeze an entity
-   Once frozen, freeze damage is done every few seconds to the frozen entity
-   Each piece of leather armor warn causes an entity to freeze more slowly
-   Wearing a full set of leather armor prevents freezing entirely

## Changes in 20w46a

-   The range in which a lightning rod attracts lightning has been doubled
-   Copper blocks are now crafted from 4 copper ingots
-   Sky color now varies smoothly when moving between different biomes
-   Buttons that change value (like `Difficulty`) can now be controlled with mouse wheel
-   Clicking on button that changes value while holding shift key changes to previous value
-   "Debug" world type can now be accessed while holding alt key (was shift)

### Textures

Changed a number of the textures for blocks and items introduced in the previous snapshot:

-   Cut Copper
-   Lightning Rod
-   Calcite
-   Amethyst Block
-   Budding Amethyst Block
-   Tinted Glass
-   Candle Item Icons
-   Copper Ingot Item Icon
-   Amethyst Shard Item Icon
-   Bundle Item Icon

## Technical Changes in 20w46a

-   Removed `/replaceitem` command
-   Added `/item` command
-   Added item modifiers, which reuse loot table functions syntax to describe item modification in `/item` command.
-   Data pack version is now 7
-   Loot tables can now access scoreboard values by UUID.
-   Loot table values inside random number generators can now be nested.
-   Default mode of structure blocks is now `Load`. `Data` is now hidden (but can be accessed by clicking mode button while holding alt key)

### Item modifiers

The function part of loot tables can now be defined as separate data pack resource in `item_modifiers` directory. Such files can contain a single function (i.e single JSON object) or an array of functions.

### Commands

**`item`**

Modifies item or block inventory.

This command has three forms:

-   `/item <target> replace <item stack> [<count>]` - same as old `replaceitem`
-   `/item <target> modify <modifier>` - modifies item (without copying).
-   `/item <target> copy <source> [<modifier>]` - copies item for source to target(s), optionally applying modifier

Possible sources and targets:

-   `entity <selector> <slot>`
-   `block <x> <y> <z> <slot>`

For example, `/item block ~ ~ ~ container.0 copy entity @s enderchest.0` will copy first item from player's enderchest to first slot of container player is currently standing on.

### Loot tables

**New conditions**

**`value_check`**

Checks range of value.

Parameters:

-   `value` - see "New value providers" section (currently combination of random generators and score)
-   `range` - min/max range

**Changed conditions**

**`score`**

`entity` parameter has now been replaced with `target`. It can either contain value from old `entity` field (like `this`) or be an score holder name in form `{"name": "..."}`.

**Changed functions**

**`set_damage`**

This function now has `add` parameter. If `true`, change will be relative to current damage. If `false`, damage will be replaced with current value (default behavior)

**`set_count`**

This function now has `add` parameter. If `true`, change will be relative to current item count. If `false`, item count will be replaced with current value (default behavior)

**`copy_nbt`**

`source` parameter can now be set to `{"storage": <namespaced id>}`, to access command storage.

**New functions**

**`set_enchantments`**

Modifies enchantments on item

**Parameters**

-   `enchantments` - map of enchantment id to level value (can be score or random number)
-   `add` - if `true`, change will be relative to current level. If `false`, level will be replaced with current value (default behavior)

**New value providers**

Note: value providers can be used in same places as random number generators.

**`score`**

Returns scaled scoreboard value.

**Parameters**

-   `score` - scoreboard name
-   `target` - same as `target` in `score` predicate
-   `scale` - scaling factor (float)

### Data Packs

Changes to data packs for version 7:

-   Removal of `/replaceitem` (replaced with `/item replace`)
-   `score` loot table condition: `entity` parameter has been replaced with `target`

## Resource Packs

Changes to resource packs for version 7:

-   Drowned texture mirroring has changed (see MC-174685)
-   slots for the game mode selector are now 26 pixels instead of 25

## Fixed bugs in 20w46a

-   [MC-2490](https://bugs.mojang.com/browse/MC-2490) TNT animation ends at 80 ticks, ignores fuse length changes
-   [MC-53518](https://bugs.mojang.com/browse/MC-53518) Endermen don't attack endermites spawned using spawn eggs or /summon
-   [MC-80468](https://bugs.mojang.com/browse/MC-80468) Inconsistency between block names
-   [MC-99259](https://bugs.mojang.com/browse/MC-99259) As of 1.9, the wither health bar doesn't go up during spawn
-   [MC-110903](https://bugs.mojang.com/browse/MC-110903) Cannot remove horse saddle using /replaceitem
-   [MC-143821](https://bugs.mojang.com/browse/MC-143821) Using empty map in creative mode can create additional map with ID 0
-   [MC-147729](https://bugs.mojang.com/browse/MC-147729) Crafting via the recipe book can delete items if picking up items while crafting
-   [MC-162910](https://bugs.mojang.com/browse/MC-162910) Additional map is created when using an empty map in Creative in a newly created world
-   [MC-182954](https://bugs.mojang.com/browse/MC-182954) "block.minecraft.banner.base." displays raw translation string (is untranslated)
-   [MC-183771](https://bugs.mojang.com/browse/MC-183771) Gamemode switcher icons in the F3+F4 menu are not centered
-   [MC-183917](https://bugs.mojang.com/browse/MC-183917) Min and max are both required in entity;;_;;scores condition
-   [MC-185605](https://bugs.mojang.com/browse/MC-185605) Kelp generates on top of Magma Blocks
-   [MC-188448](https://bugs.mojang.com/browse/MC-188448) Food pops off of campfire when extinguished
-   [MC-189482](https://bugs.mojang.com/browse/MC-189482) LAN World screen buttons are selected in the wrong order when using Tab
-   [MC-196425](https://bugs.mojang.com/browse/MC-196425) "Off" is not completely capitalized for the Distortion Effects and FOV Effects sliders, which is inconsistent with other sliders
-   [MC-197276](https://bugs.mojang.com/browse/MC-197276) Pufferfish gives poison IV instead of II
-   [MC-198514](https://bugs.mojang.com/browse/MC-198514) Creating a superflat world with nothing but air crashes the game
-   [MC-198725](https://bugs.mojang.com/browse/MC-198725) Crash when clicking "Presets" after setting the superflat preset with a non-existent biome
-   [MC-203562](https://bugs.mojang.com/browse/MC-203562) Shulker boxes animate when shulkers do
-   [MC-203574](https://bugs.mojang.com/browse/MC-203574) Decorations don't generate in the Nether
-   [MC-203621](https://bugs.mojang.com/browse/MC-203621) Unable to pick up experience orbs
-   [MC-203622](https://bugs.mojang.com/browse/MC-203622) Arm when using Spyglass aligned wrong on Multiplayer
-   [MC-203631](https://bugs.mojang.com/browse/MC-203631) Amethyst buds do not drop themselves with silk touch
-   [MC-203643](https://bugs.mojang.com/browse/MC-203643) Command modified bundle has a bigger progress bar than a slot
-   [MC-203644](https://bugs.mojang.com/browse/MC-203644) Cats & Ocelots are missing one of their legs
-   [MC-203646](https://bugs.mojang.com/browse/MC-203646) Some mobs won't despawn when switched to peaceful
-   [MC-203648](https://bugs.mojang.com/browse/MC-203648) The armour stand model floats above its base
-   [MC-203746](https://bugs.mojang.com/browse/MC-203746) Levitation particles go on forever when killed by a levitating creeper
-   [MC-203880](https://bugs.mojang.com/browse/MC-203880) Floating creepers / creeper with no AI

---

# Minecraft Snapshot 20w45a

Good things come to those who wait, and we've believe you've waited long enough. The first Caves & Cliffs snapshot is finally here and ready to enter the Java Edition of Minecraft! We hope that you're as excited about this as we are, because this snapshot brings you a variety of features, some changes to existing features, and a few technical changes. All of it is listed in this blog post, and we can't wait to see you experiment with it all.

Happy mining!

## New Features in 20w45a

-   Added bundles!
-   Added candles!
-   Added lava cauldrons!
-   Added Copper!
-   Added Amethyst!
-   Added Lightning Rod!
-   Added the Spyglass!
-   Added Tinted Glass!
-   A Shulker hitting a Shulker with a Shulker Bullet can make a new Shulker.

### Amethysts

**Amethyst Blocks**

-   Amethyst comes in block form inside the geodes in two ways: Block of Amethyst and Budding Amethyst
-   All types of Amethyst blocks (clusters included) create beautiful sounds when you walk on them, break them, place them, or hit them with a projectile - go make some music!

**Amethyst Clusters**

-   Amethyst Clusters grow from Budding Amethyst, which can be found inside geodes
-   Clusters have 4 growth stages: Small Amethyst Bud, Medium Amethyst Bud, Large Amethyst Bud, and Amethyst Cluster
-   Clusters can only grow when they are placed on Budding Amethyst blocks
-   Fully-grown Amethyst Clusters drop 4 Amethyst Shards (or more with Fortune) when an Iron Pickaxe or higher is used, and drop nothing otherwise when broken
-   Clusters can be Silk Touched at any stage

**Amethyst Geodes**

-   These huge geodes can be found anywhere underground in the overworld
-   Amethyst geodes have an outer layer of a new stone called Tuff
-   Amethyst geodes have a second layer of another new block called Calcite
-   Amethyst geodes have an inner layer of various Amethyst blocks

**Amethyst Shards**

-   Amethyst Clusters drop 4 Amethyst Shards (or more with Fortune)

**Budding Amethyst**

-   On any side of a Budding Amethyst block where there is air, or a water source block, a Small Amethyst Bud will eventually grow
-   Amethyst Buds can only grow when attached to Budding Amethyst, and will grow until they become Amethyst Clusters

### Bundles

-   Bundles are items that hold other items.
-   A bundle can hold a mixture of items, but only one stack’s worth. For example, a bundle could fit:
    -   64 dirt
    -   32 dirt + 32 stone
    -   32 dirt + 8 ender pearls
    -   1 of every color of wool, concrete, carpet and terracotta (64 blocks in total)
    -   Or 1 diamond helmet
-   Use right click to put an item into a bundle.
-   Right-click a bundle to empty it.
-   Wrap a present in a bundle and give it to your friend!

### Candles

-   Candles come in all 16 colors + 1 uncolored variant
-   Up to 4 can be placed in one block
-   Candles allow you to properly wish someone a happy birthday
-   Waterloggable! (But you cannot light them underwater, silly)
-   Wish anybody a happy birthday with a candle cake!

### Cauldrons

-   Cauldrons can now be filled with buckets of lava!
-   Filled lava cauldrons give off a redstone signal of strength 1

### Copper

**Copper blocks**

-   Craft 9 copper ingots to a copper block
-   Craft cut copper, cut copper stairs and cut copper slabs
-   Use honeycomb to craft waxed copper blocks

**Copper ore**

-   Copper ore can be found in ore blobs across Overworld, similar to iron and coal (this is not the final generation for copper…)
-   Smelt copper ore to get a copper ingot

**Lightning Rod**

-   The Lightning Rod is crafted from three copper ingots
-   Keep your builds safe (well, as long as the closest area around the lightning rod is fire proof) during thunderstorms!
-   The lightning rod will protect an area of 4 ;;*;; 16 blocks around it from the, sometimes devastating, lightning strikes!
-   Lightning rods give off a redstone signal when struck by lightning

**Oxidation**

-   Copper will oxidize over time
-   There are for stages: copper, lightly weathered copper, semi-weathered copper and weathered copper
-   It takes 50 - 82 Minecraft days (in loaded chunks) for a copper block to oxidize one stage
-   Waxed copper blocks will not oxidize
-   You can wax any oxidation stage - how lovely that means you can keep that pretty lightly weathered copper block in it’s lightly weathered stage forever!

### Spyglass

-   You can use your spyglass to see faraway things
-   Pretend to be a sea captain, or catch your neighbor in the act as they dye your sheep lime green
-   The spyglass is crafted from two copper ingots and one amethyst shard

### Tinted Glass

-   Tinted Glass is a type of glass that does not allow light to pass through
-   Tinted Glass is crafted by putting a Glass block in the middle of 4 Amethyst Shards
-   Tinted Glass can be obtained without silk touch; it does not shatter like normal glass

## Changes in 20w45a

-   Experience orbs now sometimes merge when in large quantities to improve performance. This does not change the rate at which the player can absorb them, it simply limits the amount of separate orbs floating around in the world. Orbs that merge will gain the lifetime of the most recently created one.
-   Simple firework rockets with 1 gunpowder can now be crafted using the recipe book
-   Dirt paths (formerly grass path) can now be made by using a shovel on dirt, podzol, mycelium or course dirt (as well as grass)
-   Minecarts and rails work in water
-   Particles now appear when pistons break blocks

### Minecarts

Minecarts and rails now work in water

-   All rails can be waterlogged (works with a dispenser & water bucket too)
-   Flowing water doesn’t break rails
-   Minecarts can pass through water, but get slowed down more than usual

## Technical Changes in 20w45a

-   Entities are now saved separately from terrain chunks.
-   Added loot table function set;;_;;banner;;_;;pattern
-   Pack format in version.json has been split into data and resource versions
-   Servers can now require custom resource packs to be accepted

### Custom server resource packs

A dedicated server can enforce custom resource packs by setting `require-resource-pack` in `server.properties`. When this option is used, players will be prompted for a response and will be disconnected if they decline the required pack.

### Entity storage

Entities have been extracted from main (terrain) chunks and are now stored in separate `entities` directory (similar to POI storage). Those new files are still region files with NBT.

### Loot tables

**New functions**

**`set_banner_pattern`**

Sets tags needed for banner patterns. Parameters:

-   `patterns` - list of pattern objects:
    -   `pattern` - name of pattern (`square_bottom_left`, `bricks`, etc.)
    -   `color` - name of color (`light_gray`, etc.)
-   `append` - if `true`, new elements will be appended to existing ones instead of replacing

## Fixed bugs in 20w45a

-   [MC-98219](https://bugs.mojang.com/browse/MC-98219) Experience orbs follow dead players
-   [MC-108469](https://bugs.mojang.com/browse/MC-108469) Chunk-wise entity lists often don't get updated correctly (Entities disappear)
-   [MC-112147](https://bugs.mojang.com/browse/MC-112147) Lava burning items or XP orbs sound muted when "Friendly Creatures" slider is turned off
-   [MC-127201](https://bugs.mojang.com/browse/MC-127201) /replaceitem makes quite an obnoxious sound, which is not heard by the person whose items are being replaced.
-   [MC-127692](https://bugs.mojang.com/browse/MC-127692) Experience build up in furnace when using a hopper which can cause severe lag
-   [MC-130449](https://bugs.mojang.com/browse/MC-130449) Cartographer villager freezes or crashes the game when unlocking explorer maps
-   [MC-130584](https://bugs.mojang.com/browse/MC-130584) When a structure loads, water sources in the structure spread into waterloggable blocks
-   [MC-133691](https://bugs.mojang.com/browse/MC-133691) Blocks can't be placed normally on a full cauldron
-   [MC-135552](https://bugs.mojang.com/browse/MC-135552) Dead Entities are saved to chunk
-   [MC-136497](https://bugs.mojang.com/browse/MC-136497) XP orbs causing severe lag
-   [MC-141034](https://bugs.mojang.com/browse/MC-141034) taiga;;_;;fisher;;_;;cottage;;_;;1 is filled with water
-   [MC-169900](https://bugs.mojang.com/browse/MC-169900) Incorrect jigsaw setting in snowy;;_;;small;;_;;house;;_;;8
-   [MC-169945](https://bugs.mojang.com/browse/MC-169945) Skeletons don't burn in minecarts while being exposed to daylight
-   [MC-171852](https://bugs.mojang.com/browse/MC-171852) Putting item in a spectator's hand plays sound "Gear equips" for other players
-   [MC-174685](https://bugs.mojang.com/browse/MC-174685) Drowned arm texture is reversed by the model
-   [MC-175959](https://bugs.mojang.com/browse/MC-175959) One door is open in taiga;;_;;shepherds;;_;;house;;_;;1
-   [MC-177622](https://bugs.mojang.com/browse/MC-177622) One log in taiga;;_;;butcher;;_;;shop;;_;;1 seems to be misrotated causing the side roof to look asymmetrical
-   [MC-177624](https://bugs.mojang.com/browse/MC-177624) Entrance in snowy;;_;;medium;;_;;house;;_;;2 is asymmetrical
-   [MC-181889](https://bugs.mojang.com/browse/MC-181889) Equipping sound plays when mobs picking up non-armor items
-   [MC-185357](https://bugs.mojang.com/browse/MC-185357) Removing a plant from a flower pot still plays generic armor equipping sound/shows Gear equips in subtitles
-   [MC-185359](https://bugs.mojang.com/browse/MC-185359) Using a bucket in Survival mode still plays generic armor equipping sound/shows Gear equips in subtitles
-   [MC-185360](https://bugs.mojang.com/browse/MC-185360) Milking a mooshroom for stew still plays armor equip sound/shows Gear equips subtitle
-   [MC-189565](https://bugs.mojang.com/browse/MC-189565) Some entities do not render inside of spawners and producing error log spam in console, potentially causing lag
-   [MC-190896](https://bugs.mojang.com/browse/MC-190896) Lag when opening a shipwreck chest containing buried treasure map
-   [MC-192594](https://bugs.mojang.com/browse/MC-192594) plains;;_;;stable;;_;;1 misplaced blocks
-   [MC-192629](https://bugs.mojang.com/browse/MC-192629) plains;;_;;stable;;_;;2 misplaced blocks
-   [MC-192876](https://bugs.mojang.com/browse/MC-192876) Misplaced trapdoor on taiga;;_;;decoration;;_;;6
-   [MC-192879](https://bugs.mojang.com/browse/MC-192879) Wall incorrectly placed on certain taiga houses
-   [MC-192930](https://bugs.mojang.com/browse/MC-192930) Zombies picking up items play the gear equipping sound and subtitle
-   [MC-193071](https://bugs.mojang.com/browse/MC-193071) Eating food items that return empty containers still play gear equipping sound
-   [MC-195125](https://bugs.mojang.com/browse/MC-195125) plains;;_;;animal;;_;;pen;;_;;1 misplaced block
-   [MC-195126](https://bugs.mojang.com/browse/MC-195126) plains;;_;;animal;;_;;pen;;_;;3 misplaced blocks
-   [MC-195351](https://bugs.mojang.com/browse/MC-195351) Comparator in compare mode can schedule unneeded tileticks
-   [MC-196542](https://bugs.mojang.com/browse/MC-196542) Small cleanup for skylight propagation code
-   [MC-197009](https://bugs.mojang.com/browse/MC-197009) Referencing empty item tag in recipe can crash client
-   [MC-197140](https://bugs.mojang.com/browse/MC-197140) Jack o'Lantern doesn't come after Carved Pumpkin in Creative Inventory
-   [MC-197179](https://bugs.mojang.com/browse/MC-197179) Baby piglins that pick up leather don't despawn, cluttering the Nether with unnecessary baby piglins
-   [MC-197524](https://bugs.mojang.com/browse/MC-197524) Border chunks do not enforce neighbors to be loaded, causing light updates to get stuck
-   [MC-198129](https://bugs.mojang.com/browse/MC-198129) ReplaceBlobsFeature changed from 1.16.1 to 1.16.2, affecting Basalt Delta generation
-   [MC-198414](https://bugs.mojang.com/browse/MC-198414) if the angle in /spawnpoint is set to +-infinity, and the player dies, it will kick the player, and upon rejoin will crash the game
-   [MC-198807](https://bugs.mojang.com/browse/MC-198807) Making piglins and piglin brutes angry at certain entities (like dropped items) crashes the game
-   [MC-202246](https://bugs.mojang.com/browse/MC-202246) Drowned navigation causes memory leak/performance degredation

---

# Minecraft Snapshot 20w30a

Today we're releasing Snapshot 20w30a for Minecraft Java Edition in which we've tweaked Bastion Remnants, and given you the ability to have lanterns under water.

## Changes in 20w30a

-   Modified how respawn positions are chosen for beds and respawn anchors
-   Lanterns can now be waterlogged
-   Soul Lanterns can now be waterlogged
-   Tweaked the Bastion Remnant chest loot
-   Chests in Bastion Remnants are now more likely to be located on top of gilded blackstone

### Respawn Block Positions

-   Respawn anchors will prioritize cardinal directions over corners
-   Beds will prioritize the side of the bed the player entered from and then spaces circling around the foot of the bed up to the head of the bed
-   Respawning players will now face the block that they respawned at
-   Placing players onto dangerous blocks is now avoided when possible

## Technical Changes in 20w30a

-   The sign edit screen will now intialize from existing sign text (should have no noticeable impact on vanilla)
-   Tags can now have optional entries

### Optional Tag Entries

Entries in tags can now be marked as optional. Failure to resolve optional entries does not prevent the whole tag from loading.

Example:

    {
      "replace": false,
      "values": [
        "#minecraft:beds", // existing syntax
        { "id":"#missing:tag", "required": false }, // optional sub-tag entry
    "minecraft:anvil", // existing syntax
    { "id":"minecraft:stone_button", "required": true }, // new syntax for required tags
    { "id":"missing:block", "required": false } // optional single-element entry
    
    

## Fixed bugs in 20w30a

-   [MC-35765](https://bugs.mojang.com/browse/MC-35765) Viewing text in Right-to-Left language while in another language renders backwards and non-connected
-   [MC-57869](https://bugs.mojang.com/browse/MC-57869) Some item tooltips use § for coloring, rendering them incorrect in right-to-left languages
-   [MC-116857](https://bugs.mojang.com/browse/MC-116857) Advancement descriptions use unnecessary capitalization on generic resource names
-   [MC-148447](https://bugs.mojang.com/browse/MC-148447) Villagers often get stuck while trying to go through a door at the same time
-   [MC-149060](https://bugs.mojang.com/browse/MC-149060) Villagers "spam" doors by opening and closing them really fast
-   [MC-153195](https://bugs.mojang.com/browse/MC-153195) Mobs can drop items with duplicate enchantments
-   [MC-181925](https://bugs.mojang.com/browse/MC-181925) Unarmed vexes raise their arms in an offensive way when attacking
-   [MC-187344](https://bugs.mojang.com/browse/MC-187344) Fast graphics tooltip has incorrect 'tree-leaves' spelling
-   [MC-187379](https://bugs.mojang.com/browse/MC-187379) Text for pack.incompatible.confirm.new makes no sense
-   [MC-187380](https://bugs.mojang.com/browse/MC-187380) Incorrect grammar in en;;_;;us translation of pack.dropConfirm
-   [MC-188389](https://bugs.mojang.com/browse/MC-188389) Several minor errors in datapackFailure.title
-   [MC-188390](https://bugs.mojang.com/browse/MC-188390) Comma splices in four strings
-   [MC-188392](https://bugs.mojang.com/browse/MC-188392) Death message for getting shot by a skull is not grammatically correct in all situations
-   [MC-188621](https://bugs.mojang.com/browse/MC-188621) Mojang "Production Manager" credit is indented further than other credits
-   [MC-188880](https://bugs.mojang.com/browse/MC-188880) Baby zombified piglins riding on chickens aren't positioned properly
-   [MC-189918](https://bugs.mojang.com/browse/MC-189918) Multiplayer warning uses "Mojang" instead of "Mojang Studios"
-   [MC-190102](https://bugs.mojang.com/browse/MC-190102) Some UI strings are not consistently capitalized
-   [MC-190288](https://bugs.mojang.com/browse/MC-190288) Fabulous and Fancy graphics tooltips have missing commas
-   [MC-191441](https://bugs.mojang.com/browse/MC-191441) Right-to-left text is rendered bottom-up in some cases
-   [MC-191562](https://bugs.mojang.com/browse/MC-191562) "Cancel" button overlaps "Done" button when uploading a world to Realms, making users unable to upload world
-   [MC-192296](https://bugs.mojang.com/browse/MC-192296) Spider Jockey from a spawner minecart crashes with"java.lang.IllegalStateException: Entity is already tracked"
-   [MC-193276](https://bugs.mojang.com/browse/MC-193276) Player floats slightly above strider while riding it
-   [MC-193339](https://bugs.mojang.com/browse/MC-193339) NullPointerException during shutdown when rcon enabled with no password
-   [MC-194263](https://bugs.mojang.com/browse/MC-194263) Large End Cities do not generate correctly / get cut off
-   [MC-194273](https://bugs.mojang.com/browse/MC-194273) Save data of new Nether biomes is lost when upgrading a world to 20w28a or above
-   [MC-194350](https://bugs.mojang.com/browse/MC-194350) Some feature configurations don't load in a datapack (java.lang.IllegalArgumentException: value already present: clh@77f95e19)
-   [MC-195052](https://bugs.mojang.com/browse/MC-195052) "angle" argument in spawnpoint command doesn't use "minecraft:rotation" parser
-   [MC-195582](https://bugs.mojang.com/browse/MC-195582) Typing a colon twice or after a slash in chat when specifying a function/item/block/etc. in a command crashes the game

---

# Minecraft Snapshot 20w29a

Today we're releasing Snapshot 20w29a for Minecraft Java Edition. We found some bugs to squash, but also snuck in a technical change or two!

## Changes in 20w29a

-   Tools are now sorted based on material in the creative inventory

## Technical Changes in 20w29a

### Commands

**spawnpoint & setworldspawn**

Added angle parameter for setting the default facing angle of a respawning player.  
Syntax: `spawnpoint [targets] [pos] [angle]`  
Syntax: `setworldspawn [pos] [angle]` New parameters:

-   `angle`: Floating point angle in degrees. Supports the relative `~` modifier

### Customized world generation

-   `worldgen/noise_settings` can now contain noise configurations

## Fixed bugs in 20w29a

-   [MC-194464](https://bugs.mojang.com/browse/MC-194464) "large;;_;;oak;;_;;foliage;;_;;placer" incorrectly serializes to "blob;;_;;foliage;;_;;placer"
-   [MC-194298](https://bugs.mojang.com/browse/MC-194298) Bone meal can't create flowers
-   [MC-194257](https://bugs.mojang.com/browse/MC-194257) Several instances of "snowy" being spelled as "snovy" in the vanilla;;_;;worldgen configuration
-   [MC-194220](https://bugs.mojang.com/browse/MC-194220) Totems of Undying give you Fire Resistance II instead of the maximum Fire Resistance I
-   [MC-194200](https://bugs.mojang.com/browse/MC-194200) Birch trees are not generated correctly in the Birch Forest and Birch Forest Hills biomes
-   [MC-194173](https://bugs.mojang.com/browse/MC-194173) Hitboxes are rendered offset while picking up items or experience on graphics settings Fast and Fancy
-   [MC-193662](https://bugs.mojang.com/browse/MC-193662) Player flying in creative slightly above blocks while sneaking and jumping are restrained to that block
-   [MC-193560](https://bugs.mojang.com/browse/MC-193560) Enchantment glint doesn't render on elytra in specific circumstances
-   [MC-192021](https://bugs.mojang.com/browse/MC-192021) Enchantment Glint effect on transparent blocks not properly rendered on Fabulous graphic
-   [MC-191623](https://bugs.mojang.com/browse/MC-191623) Ender dragon battle music does not stop after ender dragon has been defeated
-   [MC-191031](https://bugs.mojang.com/browse/MC-191031) Players in spectator mode can interact with boats
-   [MC-190559](https://bugs.mojang.com/browse/MC-190559) Baby striders don't die when it's raining and they are in lava
-   [MC-189788](https://bugs.mojang.com/browse/MC-189788) Certain mobs in boats sometimes take drowning damage while the boat is moving
-   [MC-185019](https://bugs.mojang.com/browse/MC-185019) Worldgen settings with empty structures parameter generates all structures extremely frequent
-   [MC-176836](https://bugs.mojang.com/browse/MC-176836) Unarmed vindicators raise their arm in offensive way when attacking
-   [MC-176778](https://bugs.mojang.com/browse/MC-176778) Camera is reset when a block reappears due to high server latency
-   [MC-166718](https://bugs.mojang.com/browse/MC-166718) Mobs no longer suffocate inside of soul sand, farmland or grass paths
-   [MC-158735](https://bugs.mojang.com/browse/MC-158735) Pillagers without crossbows hold their arm up, in a way that may be offensive to some people
-   [MC-153230](https://bugs.mojang.com/browse/MC-153230) Players in spectator mode can stop minecarts

---

