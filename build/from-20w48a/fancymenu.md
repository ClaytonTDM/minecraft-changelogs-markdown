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

#### Freezing

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

#### `item`

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

#### New conditions

##### `value_check`

Checks range of value.

Parameters:

-   `value` - see "New value providers" section (currently combination of random generators and score)
-   `range` - min/max range

#### Changed conditions

##### `score`

`entity` parameter has now been replaced with `target`. It can either contain value from old `entity` field (like `this`) or be an score holder name in form `{"name": "..."}`.

#### Changed functions

##### `set_damage`

This function now has `add` parameter. If `true`, change will be relative to current damage. If `false`, damage will be replaced with current value (default behavior)

##### `set_count`

This function now has `add` parameter. If `true`, change will be relative to current item count. If `false`, item count will be replaced with current value (default behavior)

##### `copy_nbt`

`source` parameter can now be set to `{"storage": <namespaced id>}`, to access command storage.

#### New functions

##### `set_enchantments`

Modifies enchantments on item

###### Parameters

-   `enchantments` - map of enchantment id to level value (can be score or random number)
-   `add` - if `true`, change will be relative to current level. If `false`, level will be replaced with current value (default behavior)

#### New value providers

Note: value providers can be used in same places as random number generators.

##### `score`

Returns scaled scoreboard value.

###### Parameters

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

#### Amethyst Blocks

-   Amethyst comes in block form inside the geodes in two ways: Block of Amethyst and Budding Amethyst
-   All types of Amethyst blocks (clusters included) create beautiful sounds when you walk on them, break them, place them, or hit them with a projectile - go make some music!

#### Amethyst Clusters

-   Amethyst Clusters grow from Budding Amethyst, which can be found inside geodes
-   Clusters have 4 growth stages: Small Amethyst Bud, Medium Amethyst Bud, Large Amethyst Bud, and Amethyst Cluster
-   Clusters can only grow when they are placed on Budding Amethyst blocks
-   Fully-grown Amethyst Clusters drop 4 Amethyst Shards (or more with Fortune) when an Iron Pickaxe or higher is used, and drop nothing otherwise when broken
-   Clusters can be Silk Touched at any stage

#### Amethyst Geodes

-   These huge geodes can be found anywhere underground in the overworld
-   Amethyst geodes have an outer layer of a new stone called Tuff
-   Amethyst geodes have a second layer of another new block called Calcite
-   Amethyst geodes have an inner layer of various Amethyst blocks

#### Amethyst Shards

-   Amethyst Clusters drop 4 Amethyst Shards (or more with Fortune)

#### Budding Amethyst

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

#### Copper blocks

-   Craft 9 copper ingots to a copper block
-   Craft cut copper, cut copper stairs and cut copper slabs
-   Use honeycomb to craft waxed copper blocks

#### Copper ore

-   Copper ore can be found in ore blobs across Overworld, similar to iron and coal (this is not the final generation for copper…)
-   Smelt copper ore to get a copper ingot

#### Lightning Rod

-   The Lightning Rod is crafted from three copper ingots
-   Keep your builds safe (well, as long as the closest area around the lightning rod is fire proof) during thunderstorms!
-   The lightning rod will protect an area of 4 ;;*;; 16 blocks around it from the, sometimes devastating, lightning strikes!
-   Lightning rods give off a redstone signal when struck by lightning

#### Oxidation

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

#### New functions

##### `set_banner_pattern`

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

#### spawnpoint & setworldspawn

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

# Minecraft Snapshot 20w28a

This week's snapshot introduces experimental support for custom biomes in data packs. This work has involved redoing some of the internal plumbing of things behind the scene, so it might be a bit leaky. We hope no important parts drip out, but if they do, pick them back up for us, please.

As always, make sure to make backups if you try a world in a snapshot.

## Changes in 20w28a

​

-   Villagers now emit green particles when joining a village, setting a home bed, or acquiring a job site/profession
-   Brewing stands can now be crafted with blackstone
-   Tweaked bartering loot
-   Totems of undying now give the fire resistance status affect for 40 seconds when activated

​

## Technical Changes in 20w28a

​

-   Custom worlds now support custom biomes
-   Dedicated servers can now rate limit clients

​

### Customized world generation

​

-   There is now experimental support for a `worldgen` folder in data packs
-   `worldgen/biome` can contain biome definitions
-   `worldgen/configured_carver` can contain definitions for world carver settings
-   `worldgen/configured_feature` can contain definitions for feature placements
-   `worldgen/configured_structure_feature` can contain definitions for structure placements
-   `worldgen/configured_surface_builder` can contain definitions for surfaces
-   `worldgen/processor_list` can contain sets of block processors
-   `worldgen/template_pool` can contain pool definitions for jigsaw structures
-   Custom biomes can now be used in the single biome/caves/floating islands world types (add the data pack containing the biome first)
-   Custom biomes can now be used in custom dimension generators

​

### Dedicated server packet limit

​

-   Dedicated servers can now kick clients that consistently send too many packets within a second
-   Controlled with the `rate-limit` settings in `server.properties`
-   The default rate limit of 0 means "no limit"

​

## Fixed bugs in 20w28a

​

-   [MC-34661](https://bugs.mojang.com/browse/MC-34661) Thorns enchantment causes double armor decay
-   [MC-65953](https://bugs.mojang.com/browse/MC-65953) Tags IsBaby and IsVillager can't be changed from true to false with /entitydata
-   [MC-171363](https://bugs.mojang.com/browse/MC-171363) Nether forest biomes: Large fungi and small plants only generate on the topmost layer of nylium, leaving all lower layers devoid of flora
-   [MC-172221](https://bugs.mojang.com/browse/MC-172221) Hoglins, zoglins, ravagers, iron golems, and polar bears won't walk down a block if they are partially walking on air
-   [MC-173526](https://bugs.mojang.com/browse/MC-173526) All Minecarts can survive in lava
-   [MC-174479](https://bugs.mojang.com/browse/MC-174479) Cannot place sea pickles on soul sand
-   [MC-174520](https://bugs.mojang.com/browse/MC-174520) Soul particle texture is incorrect for the first frame
-   [MC-176753](https://bugs.mojang.com/browse/MC-176753) Piglins stand around dropped golden items if their "CanPickUpLoot" tag is set to "0b"
-   [MC-179369](https://bugs.mojang.com/browse/MC-179369) Wandering Traders are always invisible in the Nether and the End
-   [MC-181204](https://bugs.mojang.com/browse/MC-181204) doDaylightCycle button slightly incorrectly labeled
-   [MC-181233](https://bugs.mojang.com/browse/MC-181233) Mobs cannot spawn on wooden trapdoors, but can on iron and nether fungus trapdoors
-   [MC-182430](https://bugs.mojang.com/browse/MC-182430) Piglins continuously try and fail to pick up gold ingots if they can't reach them
-   [MC-182868](https://bugs.mojang.com/browse/MC-182868) Rail updates are 4-5x times laggier since 1.14 if the rail is on top of a non-full cube
-   [MC-185684](https://bugs.mojang.com/browse/MC-185684) Enderman can teleport when hit in cases where they previously would not teleport
-   [MC-185925](https://bugs.mojang.com/browse/MC-185925) Casting issue: Mineral vein generation uses 32-bit floats, leading to precision loss and potential crashes
-   [MC-187112](https://bugs.mojang.com/browse/MC-187112) Extra space in "Keep Jigsaws" button in jigsaw block
-   [MC-187126](https://bugs.mojang.com/browse/MC-187126) Jigsaw block UI is not closed when pressing "Generate"
-   [MC-187129](https://bugs.mojang.com/browse/MC-187129) Jigsaw blocks do not generate the correct structure until "Done" is pressed and the UI is reopened
-   [MC-188459](https://bugs.mojang.com/browse/MC-188459) Potted cactus still missing cullface argument for top
-   [MC-188534](https://bugs.mojang.com/browse/MC-188534) Potted cactus missing bottom face
-   [MC-189769](https://bugs.mojang.com/browse/MC-189769) Fungi grows through fire
-   [MC-190098](https://bugs.mojang.com/browse/MC-190098) Structure size and offset still limited to 32 for dedicated servers
-   [MC-190852](https://bugs.mojang.com/browse/MC-190852) Advancement announcement message has switched brackets for right-to-left languages
-   [MC-190856](https://bugs.mojang.com/browse/MC-190856) '/list uuids' shows parentheses incorrectly for right-to-left languages
-   [MC-190860](https://bugs.mojang.com/browse/MC-190860) '/' (slash) in chat and command block shows legacy formatting symbol for right-to-left languages
-   [MC-190891](https://bugs.mojang.com/browse/MC-190891) Certain redstone circuits causing lag
-   [MC-190892](https://bugs.mojang.com/browse/MC-190892) Brackets in potion effects are reversed in right-to-left languages
-   [MC-191501](https://bugs.mojang.com/browse/MC-191501) Opening a world from earlier 1.14 releases in 1.16 causes villagers to vanish
-   [MC-191571](https://bugs.mojang.com/browse/MC-191571) Switched square brackets for right-to-left languages
-   [MC-191579](https://bugs.mojang.com/browse/MC-191579) Book signing GUI has broken formatting for right-to-left languages
-   [MC-191656](https://bugs.mojang.com/browse/MC-191656) Right-to-left languages don't perform as expected in creative search menu
-   [MC-192306](https://bugs.mojang.com/browse/MC-192306) Crimson and warped slabs use incorrect colors on maps
-   [MC-193073](https://bugs.mojang.com/browse/MC-193073) Game crashes when Piglins or Piglin Brutes convert to Zombified Piglins
-   [MC-193089](https://bugs.mojang.com/browse/MC-193089) Mobs do not get damaged anymore if they're in lava and water at the same time
-   [MC-193125](https://bugs.mojang.com/browse/MC-193125) Cannot use "Inventory" key to write in recipe book, it closes GUI instead (Default: "E")

---

