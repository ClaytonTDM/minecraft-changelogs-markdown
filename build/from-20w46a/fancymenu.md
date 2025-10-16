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

# Minecraft 1.16.4 Release Candidate 1

We have now released 1.16.4 Release Candidate 1. If no further critical issues are found, we expect this version to be the full release of 1.16.4 on Thursday.

## Changes in 1.16.4 Release Candidate 1

-   Added an option to hide matched names

### Hide matched names

-   Some servers send chat messages in non-standard formats. With this option on, the game will attempt to apply chat hiding anyway by matching the text in messages

## Fixed bugs in 1.16.4 Release Candidate 1

-   [MC-202614](https://bugs.mojang.com/browse/MC-202614) Search function in social interactions screen only finds names that begin with the letters that you typed in

---

# Minecraft 1.16.4 Pre-Release 2

Time for another pre-release! This time around we've fixed some issues with the new social interactions screen and we've also fixed some crashes.

In case you haven't heard, yesterday we announced that Mojang accounts will be migrating into Microsoft accounts. With this pre-release, we are preparing for that by having the game understand the settings and block-list of Microsoft accounts. You can read more about that over [here](https://www.minecraft.net/article/java-edition-moving-house), and you can find answers to questions you might have in the [FAQ](https://help.minecraft.net/hc/articles/360050865492). The FAQ will be continuously updated.

We aim to release 1.16.4 sometime during next week.

## Changes in 1.16.4 Pre-release 2

-   Players blocked in your Microsoft account are now also blocked in the game
-   A button to open a link to the Accessibility Guide can now be found in the Accessibility Options screen

### Social Interactions

-   The status of a player is now listed below their name on the Social Interactions screen
-   A new tab is available to filter by Blocked players in the Social Interactions screen
-   Chat from blocked players is always hidden
-   Realms invites from blocked players are hidden

## Fixed bugs in 1.16.4 Pre-release 2

-   [MC-202150](https://bugs.mojang.com/browse/MC-202150) Slider bar on social menu appears broken
-   [MC-202147](https://bugs.mojang.com/browse/MC-202147) Cursor in Social Interactions & Recipe Book & Anvil menu doesn’t blink
-   [MC-202137](https://bugs.mojang.com/browse/MC-202137) Social Interaction Screen says players for 1 player
-   [MC-202143](https://bugs.mojang.com/browse/MC-202143) Social Interactions search bar does not stay selected when switching tabs, although the cursor remains
-   [MC-202145](https://bugs.mojang.com/browse/MC-202145) Opening the Social Interactions menu in a singleplayer world open to LAN after attempting to join an outdated multiplayer server displays the name of the outdated server instead of the name of the current world
-   [MC-202156](https://bugs.mojang.com/browse/MC-202156) Social Interactions search box entries can go out of the box
-   [MC-202155](https://bugs.mojang.com/browse/MC-202155) Outdated server warn text doesn't actually exist
-   [MC-202136](https://bugs.mojang.com/browse/MC-202136) Social Interaction Toast icon doesn't render properly with Programmer Art resource pack
-   [MC-201885](https://bugs.mojang.com/browse/MC-201885) Divide by zero error in the Ender dragon entity class can cause a server crash and infinite velocity

---

# Minecraft 1.16.4 Pre-Release 1

The first pre-release for 1.16.4 is officially out! ​ If you’ve been on the Internet for some time, you’ve probably noticed that you occasionally run into other players that you don’t get along with. To alleviate some of that frustration, we’re introducing a UI element called the “social interactions screen”, which will let you disable chatting with certain players, thus hiding any messages you receive from them. Additionally, the 1.16.4 update will contain some fixes for critical bugs, but other than that, this will be it for this dot-release. ​ Please help us out by testing the new UI and reporting any bugs you find on the [Minecraft Issue Tracker](https://aka.ms/snapshotbugs?ref=launcher). ​

## New Features in 1.16.4 Pre-release 1

​

-   New UI called Social Interactions Screen

​

### Social Interactions Screen

A new screen available in Multiplayer which shows a list of all players on a server so you can can hide chat from any player. ​

-   Opens with a configurable key binding, by default P
-   Whether a player is hidden resets when re-joining a server

​

## Technical Changes in 1.16.4 Pre-release 1

​

-   New network protocol scheme, with a high bit (bit 30) set for snapshots. The protocol version will increase by 1 for each snapshot, but full releases may keep the same protocol version as the previous full release in cases where the network protocols are compatible
-   More information is now added to the crash log in cases where poor performance causes the server to crash

​

## Fixed bugs in 1.16.4 Pre-release 1

​

-   [MC-192434](https://bugs.mojang.com/browse/MC-192434) Netherite Leggings are textured weirdly
-   [MC-199487](https://bugs.mojang.com/browse/MC-199487) WorldGen Deadlock

---

# Minecraft 1.16.3 Release Candidate 1

What better way to start the week than with a new release candidate that fixes two bugs? 1.16.3 addresses a duplication exploit, along with a pathfinding issue.

## Fixed bugs in 1.16.3 Release Candidate 1

-   [MC-198678](https://bugs.mojang.com/browse/MC-198678) Giving an item and a gold ingot to a baby piglin and killing it duplicates the item
-   [MC-196449](https://bugs.mojang.com/browse/MC-196449) Piglins, Piglin Brutes, Hoglins and Zoglins have trouble pathfinding to the player when attacking

---

# Minecraft 1.16.2 Release Candidate 2

We have now released 1.16.2 Release Candidate 2, fixing a few critical issues. If no further critical issues are found, we expect this version to be the full release of 1.16.2 tomorrow.

## Fixed bugs in 1.16.2 Release Candidate 2

-   [MC-197512](https://bugs.mojang.com/browse/MC-197512) Incompatible resource packs don't display their name and description anymore
-   [MC-197362](https://bugs.mojang.com/browse/MC-197362) Cannot load 2 or more resource packs if the second one is incompatible
-   [MC-197354](https://bugs.mojang.com/browse/MC-197354) Block event lag in 1.16.2-rc1 is still higher than in 1.15.2
-   [MC-197348](https://bugs.mojang.com/browse/MC-197348) Piston heads occasionally appear twice in certain piston setups

---

# Minecraft 1.16.2 Release Candidate 1

We have now released 1.16.2 Release Candidate 1, fixing even more stability issues. If no further critical issues are found, we expect this version to be the full release of 1.16.2 on Tuesday next week.

## Technical Changes in 1.16.2 Release Candidate 1

-   The Resource and Data pack version has been raised to 6

## Fixed bugs in 1.16.2 Release Candidate 1

-   [MC-197275](https://bugs.mojang.com/browse/MC-197275) Due to changes to walls, "pack;;_;;format: 5" is not cross-compatible between 1.15 and 1.16
-   [MC-197263](https://bugs.mojang.com/browse/MC-197263) End sky and nether fog don't work on servers
-   [MC-197258](https://bugs.mojang.com/browse/MC-197258) Certain dimensions can cause a game crash
-   [MC-197225](https://bugs.mojang.com/browse/MC-197225) Crash: java.util.concurrent.CompletionException: u: Exception generating new chunk
-   [MC-197197](https://bugs.mojang.com/browse/MC-197197) Game crashes/freezes after creating/entering a Superflat world without presets
-   [MC-194933](https://bugs.mojang.com/browse/MC-194933) Game crashes when loading a custom biome / java.lang.UnsupportedOperationException: Trying to add tag of type 8 to list of 10
-   [MC-190103](https://bugs.mojang.com/browse/MC-190103) Crash when using a nether portal: java.lang.IndexOutOfBoundsException: fromIndex < 0: -2368549

---

# Minecraft 1.16.2 Pre-Release 3

We have now released 1.16.2 Pre-release 3, fixing some stability issues.

## Fixed bugs in 1.16.2 Pre-release 3

-   [MC-105248](https://bugs.mojang.com/browse/MC-105248) Wet wolves become nearly black in dark areas
-   [MC-107529](https://bugs.mojang.com/browse/MC-107529) Marker:1 Armor Stands render themself and their equipment dark if inside solid blocks
-   [MC-167756](https://bugs.mojang.com/browse/MC-167756) Wolf is rendered too dark when not directly affected by skylight
-   [MC-191388](https://bugs.mojang.com/browse/MC-191388) "No key position;;_;;predicate in MapLike" console spam
-   [MC-197053](https://bugs.mojang.com/browse/MC-197053) Pressing F3+D clears the pending lines message, but doesn't clear the pending messages
-   [MC-197152](https://bugs.mojang.com/browse/MC-197152) Ghost Blocks can be generated in some piston setups
-   [MC-197218](https://bugs.mojang.com/browse/MC-197218) Piston arm appears twice during retraction in some mechanisms

---

# Minecraft 1.16.2 Pre-Release 2

We have now released the second pre-release for Minecraft 1.16.2, in which another round of bugs have been squished!

## Changes in 1.16.2 Pre-release 2

-   Crimson and Warped Roots no longer require shears when mined

## Technical Changes in 1.16.2 Pre-release 2

### Execute Command

-   `execute in` now respects dimension scaling

## Fixed bugs in 1.16.2 Pre-release 2

-   [MC-69876](https://bugs.mojang.com/browse/MC-69876) Pistons at Y=1 do not push downwards / at Y=254 do not push upwards
-   [MC-124320](https://bugs.mojang.com/browse/MC-124320) Endermen can pick up and place snowless snowy grass blocks
-   [MC-130558](https://bugs.mojang.com/browse/MC-130558) Item frames cannot be emptied if gamerule doEntityDrops is set to false
-   [MC-134084](https://bugs.mojang.com/browse/MC-134084) If gamerule sendCommandFeedback is disabled, /msg or /tell don't display the message to the sender
-   [MC-136553](https://bugs.mojang.com/browse/MC-136553) Dyes in creative inventory are in reverse order
-   [MC-152037](https://bugs.mojang.com/browse/MC-152037) Powered, activator and detector rails are deleted when pushed/pulled onto a block they cannot be placed on
-   [MC-187357](https://bugs.mojang.com/browse/MC-187357) Strongholds will not generate in floating;;_;;islands or caves preset
-   [MC-189736](https://bugs.mojang.com/browse/MC-189736) "distance" within predicate no longer works
-   [MC-190552](https://bugs.mojang.com/browse/MC-190552) Demo mode resets position and inventory upon launch
-   [MC-190859](https://bugs.mojang.com/browse/MC-190859) floating;;_;;islands or caves buffet worlds no longer generate strongholds and ender eyes do not locate previously generated strongholds after upgrading to 1.16
-   [MC-192136](https://bugs.mojang.com/browse/MC-192136) Lava damage works differently than in previous versions
-   [MC-192236](https://bugs.mojang.com/browse/MC-192236) Endermen can place blocks on top of item frames on the floor
-   [MC-192371](https://bugs.mojang.com/browse/MC-192371) Paintings in the same block space pop off when chunk loads
-   [MC-192845](https://bugs.mojang.com/browse/MC-192845) Block Event Lag in 1.16 is excessive
-   [MC-194217](https://bugs.mojang.com/browse/MC-194217) Lava sets nether vegetation on fire despite it being fire resistant
-   [MC-194867](https://bugs.mojang.com/browse/MC-194867) Minecarts come out the wrong side of a nether portal and lose momentum when coming back to overworld
-   [MC-194953](https://bugs.mojang.com/browse/MC-194953) Custom Biomes are not useable in Predicates
-   [MC-195803](https://bugs.mojang.com/browse/MC-195803) Mob kill statistics are formatted in reverse: "N killed you times"
-   [MC-195851](https://bugs.mojang.com/browse/MC-195851) "Hat" layer on helmets detaches from Piglins' heads while bartering
-   [MC-196245](https://bugs.mojang.com/browse/MC-196245) Charged creeper does not always drop skull if zombie variants are nearby
-   [MC-196441](https://bugs.mojang.com/browse/MC-196441) Stonecutter/Smithing Table recipes are not given after crafting a stack of more than one
-   [MC-196469](https://bugs.mojang.com/browse/MC-196469) F1 hides the nausea green tint
-   [MC-196473](https://bugs.mojang.com/browse/MC-196473) Pufferfish gives Nausea II instead of the maximum of Nausea I
-   [MC-196653](https://bugs.mojang.com/browse/MC-196653) Creating multiple datapack dimensions which reference the same dimension;;_;;type string causes "unregistered dimension" crash
-   [MC-196743](https://bugs.mojang.com/browse/MC-196743) Custom/modified biomes don't work in the overworld

---

# Minecraft 1.16.2 Pre-Release 1

It's time for pre-releases for Minecraft Java Edition 1.16.2!

From now on you should mostly see bug fixes leading up to the full release of 1.16.2 which we expect to happen in a few weeks.

## New Features in 1.16.2 Pre-release 1

-   New accessibility settings have been added to help with visual comfort

### Accessibility

-   Distortion effects such as nausea and the Nether portal overlay can now be reduced
-   At lower values, the nausea effect is replaced with a green overlay as an alternative visualization
-   Field of view effects shown after speed modifiers are applied can now be reduced

## Changes in 1.16.2 Pre-release 1

-   Chains can now be placed in all orientations
-   Endermen will no longer place their held blocks onto bedrock blocks
-   Piglins now become angry with players who open or destroy a Chest Minecart
-   Villagers now lose their job sites when changing dimension
-   Chat delay has been added to the Chat Settings screen

## Technical Changes in 1.16.2 Pre-release 1

-   Custom world generation and dimension settings now use the same folder pattern in data packs as other resources (`namespace/<type>/resource.json`)

## Fixed bugs in 1.16.2 Pre-release 1

-   [MC-73884](https://bugs.mojang.com/browse/MC-73884) Throwable projectiles get destroyed at contact with non solid blocks
-   [MC-125758](https://bugs.mojang.com/browse/MC-125758) Bubble column does not affect egg, snowball, ender pearl, splash potion, lingering potion, fireball and shulker bullet
-   [MC-158987](https://bugs.mojang.com/browse/MC-158987) Raid still continues after a villager turns into a witch
-   [MC-163767](https://bugs.mojang.com/browse/MC-163767) Villagers get ejected from a minecart when converted to a zombie villager
-   [MC-167045](https://bugs.mojang.com/browse/MC-167045) Banners are rendered too dark in the inventory
-   [MC-170900](https://bugs.mojang.com/browse/MC-170900) New Nether plants can be picked up without shears/silk touch
-   [MC-174574](https://bugs.mojang.com/browse/MC-174574) Soul speed doesn't work when slabs and blocks of similar height are placed above the soul sand block
-   [MC-176015](https://bugs.mojang.com/browse/MC-176015) Strider suffocates when player is saddled on and looking up with Warped Fungus on a Stick
-   [MC-176034](https://bugs.mojang.com/browse/MC-176034) You can walk on striders
-   [MC-177651](https://bugs.mojang.com/browse/MC-177651) Despite being cold outside of lava, striders don't care about staying in lava
-   [MC-178061](https://bugs.mojang.com/browse/MC-178061) Chat Delay option doesn't exist in Chat settings
-   [MC-182330](https://bugs.mojang.com/browse/MC-182330) Crossbow-wielding piglins behave weirdly when they try to pursue invisible players
-   [MC-185490](https://bugs.mojang.com/browse/MC-185490) Separated Trader Lamas On Leads Cause TPS Hit
-   [MC-187398](https://bugs.mojang.com/browse/MC-187398) Smithing table and stonecutter recipes are not unlocked when used
-   [MC-187904](https://bugs.mojang.com/browse/MC-187904) Data packs cannot replace settings of vanilla dimensions during world creation
-   [MC-189414](https://bugs.mojang.com/browse/MC-189414) Smithing table doesn't calculate amount of output items correctly
-   [MC-189797](https://bugs.mojang.com/browse/MC-189797) Hoglins, Zoglins, melee Piglins, and Piglin Brutes do not properly attack invisible entities within normal range
-   [MC-191168](https://bugs.mojang.com/browse/MC-191168) Piglins that convert into Zombified Piglins while sitting on a minecart sometimes sink into blocks
-   [MC-192032](https://bugs.mojang.com/browse/MC-192032) Villagers don't always try to claim the closest workstation and are sometimes focussed on a non-existent one or one out of their reach
-   [MC-193213](https://bugs.mojang.com/browse/MC-193213) Leads are positioned incorrectly on players and Wandering Traders
-   [MC-194263](https://bugs.mojang.com/browse/MC-194263) Large End Cities do not generate correctly / get cut off
-   [MC-194299](https://bugs.mojang.com/browse/MC-194299) Template pools fail to load via datapack
-   [MC-194845](https://bugs.mojang.com/browse/MC-194845) Subspace Bubble advancement cannot be completed with 7 km distance
-   [MC-195062](https://bugs.mojang.com/browse/MC-195062) Raids often will not end in defeat when all villagers are dead if there are job sites in the village
-   [MC-195544](https://bugs.mojang.com/browse/MC-195544) Game crashes after killing a mob that is being ridden by a guardian while it is being ridden by a wither skeleton

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

