# Minecraft Snapshot 23w14a

We are now releasing Snapshot 23w14a, containing changes to Sculk blocks and Enchanting Tables, a new Quick Play functionality, an updated logo for Java Edition, a new main menu panorama, and lots of bug fixes!

Happy mining!

## Changes

-   Changes to Sculk blocks
-   Replaceable blocks no longer block the connection between Enchanting Tables and Bookshelves
-   In the Desert Temple, the new room has more of its roof collapsed and one block of Suspicious Sand is always visible in the top layer
-   Updated the Minecraft: Java Edition logo
-   The main menu background is now a Trails & Tales panorama

### Sculk Shrieker

-   Waterlogging them will now silence their shriek sounds
-   Added to the Redstone Blocks tab in the creative menu

### Sculk Sensor

-   For both normal and calibrated Sculk Sensors, the following changes have been made:
    -   Default redstone output has been modified to be more reliable for distance calculations
    -   Now strongly powers the block they are placed on

### Calibrated Sculk Sensor

-   Has an active cooldown of 1 second instead of 2 seconds
-   Detects vibrations up to 16 blocks away instead of 8 blocks
-   Accepts signals into the calibration input side more consistently with other Redstone components
    -   For example, signals can now be received through a block

## Technical Changes

-   Signs with click commands can now be interacted with even if the Sign is not waxed
    -   Signs with non-`text` chat components can no longer be edited
-   Added new loot table function called `reference`
-   Added support for Quick Play
-   Removed the `server` & `port` arguments as their functionality has been replaced by Quick Play
-   Changes to tags
-   The resource pack version is now 14
    -   Updated the sprite layout of `minecraft.png`
    -   Removed the overriding `minecraft.png` from the Programmer Art resource pack
    -   Updated the sprite layout of `invite_icon.png`

### Loot tables

**`reference`**

New function `reference` allows functions to call sub-functions (similar to `reference` condition). Fields:

-   `name` - location of function to call

### Quick Play

-   Added support for four new command line arguments that allow the game to be launched directly into a world
-   `quickPlayPath` takes a specified path for logging (relative to the run directory)
    -   If a path is provided the following will be logged upon joining a world:
        -   `type`: is either `singleplayer`, `multiplayer`, or `realms`
        -   `identifier`: represents the world you want to join
            -   For singleplayer, the folder name of the world
            -   For multiplayer, the IP address of the server
            -   For realms, the Realms ID
        -   `port`: represents the server port and is only logged for multiplayer
        -   `name`: The name of the world
        -   `gamemode`: The gamemode of the world
        -   `lastPlayedTime`: The time you joined the world
    -   Example:
        -   `--quickPlayPath "quickPlay/log.json"` will resolve into `.minecraft/quickPlay/log.json`
-   `quickPlaySingleplayer`, `quickPlayMultiplayer` and `quickPlayRealms` all take their respective `identifier`
    -   If one of these arguments is provided, the game will try to launch directly into the given world
    -   Examples:
        -   `--quickPlaySingleplayer "New World"`
        -   `--quickPlayMultiplayer "localhost:25565"`
        -   `--quickPlayRealms "1234"`

### Tags

-   Added `replaceable_by_trees`, to better express blocks that are replaced when the tree grows through them
-   Removed `replaceable_plants` since it was only used as a subset of the blocks for the tag above, and not as universally
-   Added `sword_efficient`, to represent blocks that are broken slightly faster by a sword than normal

## Fixed bugs in 23w14a

-   [MC-2474](https://bugs.mojang.com/browse/MC-2474) Transparent blocks placed between bookshelves and enchanting tables negate bonuses received from bookshelves
-   [MC-138358](https://bugs.mojang.com/browse/MC-138358) Levers on top of item frames Z-fighting with blocks in item frames
-   [MC-155084](https://bugs.mojang.com/browse/MC-155084) Horses' armor, reins, and bridles experience z-fighting
-   [MC-165773](https://bugs.mojang.com/browse/MC-165773) /execute run does not cause syntax error when arguments are missing
-   [MC-176309](https://bugs.mojang.com/browse/MC-176309) Illusioner has a few misplaced pixels left in their texture
-   [MC-203399](https://bugs.mojang.com/browse/MC-203399) Hoppers use the side texture on the bottom
-   [MC-203406](https://bugs.mojang.com/browse/MC-203406) Kelp and seagrass models appear to reference biome tints despite not using any
-   [MC-212271](https://bugs.mojang.com/browse/MC-212271) Glow squid and squid show Z-fighting
-   [MC-224433](https://bugs.mojang.com/browse/MC-224433) Clouds texture contains semi-transparent background
-   [MC-230792](https://bugs.mojang.com/browse/MC-230792) Cat's tail shows Z-Fighting
-   [MC-237556](https://bugs.mojang.com/browse/MC-237556) Legs of black cat model are white at the top
-   [MC-241314](https://bugs.mojang.com/browse/MC-241314) Filled cauldrons' bottom faces are still culled when they should not be
-   [MC-246459](https://bugs.mojang.com/browse/MC-246459) Drowned have some transparent pixels within their inner body texture
-   [MC-249514](https://bugs.mojang.com/browse/MC-249514) Button UV appears to be upside-down
-   [MC-251536](https://bugs.mojang.com/browse/MC-251536) Desert zombie villager feet still mismatch the sides of the feet
-   [MC-251537](https://bugs.mojang.com/browse/MC-251537) Desert (zombie) villager has solid-color on inner of arm, unlike other villagers
-   [MC-251538](https://bugs.mojang.com/browse/MC-251538) Desert villager missing some pixels for the sandals
-   [MC-252099](https://bugs.mojang.com/browse/MC-252099) Incorrect texture mapping in potted mangrove propagule (mirror effect)
-   [MC-254588](https://bugs.mojang.com/browse/MC-254588) Miscolored pixel on slowness effect icon
-   [MC-256419](https://bugs.mojang.com/browse/MC-256419) Incomplete commands run through aliases don't produce errors
-   [MC-256540](https://bugs.mojang.com/browse/MC-256540) The top texture of the camel's front left leg contains some redundant gray pixels
-   [MC-258939](https://bugs.mojang.com/browse/MC-258939) Non-atomic cached state can cause multithreaded crashes
-   [MC-259873](https://bugs.mojang.com/browse/MC-259873) Skeleton/Zombie Horse's chests are outdated
-   [MC-260036](https://bugs.mojang.com/browse/MC-260036) Can't plant cactus and sugar cane on suspicious sand
-   [MC-260042](https://bugs.mojang.com/browse/MC-260042) Cannot waterlog a decorated pot by using a water bucket or dispenser
-   [MC-260105](https://bugs.mojang.com/browse/MC-260105) The name tags of sniffers are partly inside their models
-   [MC-260152](https://bugs.mojang.com/browse/MC-260152) Sculk sensors are not activated by sniffers digging
-   [MC-260202](https://bugs.mojang.com/browse/MC-260202) The sound of using the brush isn't affected by blocks
-   [MC-260237](https://bugs.mojang.com/browse/MC-260237) Sniffers can sniff while panicking
-   [MC-260240](https://bugs.mojang.com/browse/MC-260240) Sniffers that are in love sometimes don't attempt to approach one another to breed
-   [MC-260347](https://bugs.mojang.com/browse/MC-260347) Falling suspicious sand does not break when reopening the world
-   [MC-260348](https://bugs.mojang.com/browse/MC-260348) Sniffers will never dig in normal mud despite being a "sniffer;;_;;diggable" block
-   [MC-260401](https://bugs.mojang.com/browse/MC-260401) When Brush is broken in offhand, the broken Particle is the Item in mainhand
-   [MC-260459](https://bugs.mojang.com/browse/MC-260459) Baby sniffers don't sound high pitched when sniffing
-   [MC-260467](https://bugs.mojang.com/browse/MC-260467) Torchflower is not grouped with other small flowers in the creative inventory
-   [MC-260478](https://bugs.mojang.com/browse/MC-260478) Torchflower crop hitboxes don't change in size according to their age
-   [MC-260527](https://bugs.mojang.com/browse/MC-260527) The coordinates of the sniffer "minecraft:sniffer;;_;;explored;;_;;positions" tag do not check the dimension
-   [MC-260778](https://bugs.mojang.com/browse/MC-260778) Sniffer tries to sniff out blocks outside the world border
-   [MC-260779](https://bugs.mojang.com/browse/MC-260779) Sniffers can dig into blocks outside the world border
-   [MC-260810](https://bugs.mojang.com/browse/MC-260810) Villagers can't pick up torchflower seeds, despite being able to farm torchflowers
-   [MC-261167](https://bugs.mojang.com/browse/MC-261167) Suspicious gravel does not have an assigned tool
-   [MC-261171](https://bugs.mojang.com/browse/MC-261171) You can't plant bamboo on suspicious gravel
-   [MC-261172](https://bugs.mojang.com/browse/MC-261172) Pitcher crop hitboxes don't change in size according to their age
-   [MC-261174](https://bugs.mojang.com/browse/MC-261174) Suspicious gravel is not part of the #overworld;;_;;carver;;_;;replaceables tag, causing carvers to not cut through it
-   [MC-261176](https://bugs.mojang.com/browse/MC-261176) Pitchers don't maintain the farmland used to grow it
-   [MC-261179](https://bugs.mojang.com/browse/MC-261179) Attempting to interact with a waxed sign plays a sound but displays no subtitle
-   [MC-261183](https://bugs.mojang.com/browse/MC-261183) Sniffer egg sound events are listed under "entity" instead of "block"
-   [MC-261186](https://bugs.mojang.com/browse/MC-261186) Entities don't recognize sniffer eggs as obstacles when pathfinding
-   [MC-261187](https://bugs.mojang.com/browse/MC-261187) Entities will often spin while pathfinding on top of sniffer eggs
-   [MC-261189](https://bugs.mojang.com/browse/MC-261189) Inconsistent naming of block states for sniffer and turtle eggs

---

# Minecraft Snapshot 23w13a

In this week's snapshot 23w13a we're following up on all the new things in last week's snapshot with a big round of bug fixes. Happy mining!

## Changes

-   GUI can be scaled on the Video Settings screen by holding `Ctrl` and scrolling the mouse wheel

## Fixed bugs in Snapshot 23w13a

-   [MC-159637](https://bugs.mojang.com/browse/MC-159637) Mobs with passengers have broken movements
-   [MC-230916](https://bugs.mojang.com/browse/MC-230916) "Potted Flowering Azalea Bush Plant" uses the wrong texture
-   [MC-256503](https://bugs.mojang.com/browse/MC-256503) Camel can swim sitting down
-   [MC-256506](https://bugs.mojang.com/browse/MC-256506) Camels riding entities get permanently stuck in dash mode
-   [MC-257246](https://bugs.mojang.com/browse/MC-257246) Horses do not make step;;_;;wood sounds when walking on Nether wood, cherry wood, bamboo wood, or stems
-   [MC-257268](https://bugs.mojang.com/browse/MC-257268) The dashing animations of camels sometimes aren't displayed for other players
-   [MC-259364](https://bugs.mojang.com/browse/MC-259364) The "item.minecraft.smithing;;_;;template.netherite;;_;;upgrade.base;;_;;slot;;_;;description" string is missing a serial comma
-   [MC-260075](https://bugs.mojang.com/browse/MC-260075) Player holds brush by ferrule in third person
-   [MC-260086](https://bugs.mojang.com/browse/MC-260086) Entities riding sniffers are positioned too low down
-   [MC-260090](https://bugs.mojang.com/browse/MC-260090) Sniffers ignore the "minecraft:generic.movement;;_;;speed" attribute
-   [MC-260093](https://bugs.mojang.com/browse/MC-260093) Particles spawned by brushes in the left hand move in the wrong direction
-   [MC-260146](https://bugs.mojang.com/browse/MC-260146) Pink petals are not next to other flowers in the creative inventory
-   [MC-260238](https://bugs.mojang.com/browse/MC-260238) Sniffer digging particles are produced slightly too high up
-   [MC-260252](https://bugs.mojang.com/browse/MC-260252) Sniffer walking animation is broken when walking on ice
-   [MC-260320](https://bugs.mojang.com/browse/MC-260320) Parity Issue: Snifflets (Baby Sniffers) have an inconsistent model with Bedrock
-   [MC-260435](https://bugs.mojang.com/browse/MC-260435) Sniffers don't play their walking animation when moving through cobwebs
-   [MC-260454](https://bugs.mojang.com/browse/MC-260454) Decorated pots are translated off-center when displayed on head
-   [MC-260465](https://bugs.mojang.com/browse/MC-260465) The torchflower crop still has an age 2 blockstate that looks like the regular torchflower
-   [MC-260693](https://bugs.mojang.com/browse/MC-260693) potted;;_;;torchflower is still not part of the #flower;;_;;pots block tag
-   [MC-260834](https://bugs.mojang.com/browse/MC-260834) "Alpha" can play during gameplay
-   [MC-260898](https://bugs.mojang.com/browse/MC-260898) Brushes can be used through entities
-   [MC-260974](https://bugs.mojang.com/browse/MC-260974) Aggressive mobs can't control "vehicle" mobs
-   [MC-261170](https://bugs.mojang.com/browse/MC-261170) Sniffer egg faces aren't culled when covered by blocks
-   [MC-261181](https://bugs.mojang.com/browse/MC-261181) The "Glow and Behold!" advancement is granted when interacting with waxed signs while holding glow ink sacs
-   [MC-261190](https://bugs.mojang.com/browse/MC-261190) Signs no longer resolve JSON text components
-   [MC-261191](https://bugs.mojang.com/browse/MC-261191) Pitcher plants aren't part of the #minecraft:flowers or #minecraft:tall;;_;;flowers block tags
-   [MC-261193](https://bugs.mojang.com/browse/MC-261193) Calibrated sculk sensor placed by commands is waterlogged by default
-   [MC-261201](https://bugs.mojang.com/browse/MC-261201) Pitcher plant can be replaced by the use of placed blocks, which is not consistent with other tall flowers
-   [MC-261204](https://bugs.mojang.com/browse/MC-261204) When is farmland broken under a pitcher crop, the crop doesn't get broken
-   [MC-261205](https://bugs.mojang.com/browse/MC-261205) Using bone meal on pitcher pod (crop) advances several growth stages at once
-   [MC-261206](https://bugs.mojang.com/browse/MC-261206) "A Seedy Place" advancement not granted when planting Pitcher Pods
-   [MC-261213](https://bugs.mojang.com/browse/MC-261213) Sniffer eggs can be destroyed by fluids which is different from turtle eggs
-   [MC-261223](https://bugs.mojang.com/browse/MC-261223) Editing a hanging sign with a right click doesn't work while holding a placeable object
-   [MC-261224](https://bugs.mojang.com/browse/MC-261224) Editing sign from an angle (or the side) will edit the back instead of the front
-   [MC-261229](https://bugs.mojang.com/browse/MC-261229) Crashes and Chunk Resetting involving Suspicious Sand with Loot Tables updating from 1.19.4
-   [MC-261232](https://bugs.mojang.com/browse/MC-261232) Texture minecraft:block/sniffer;;_;;egg;;_;;slightly;;_;;cracked with size 40x32 limits mip level from 4 to 3
-   [MC-261237](https://bugs.mojang.com/browse/MC-261237) Using bone meal on upper pitcher crop doesn't advance the age of the lower half
-   [MC-261241](https://bugs.mojang.com/browse/MC-261241) Saddle equips sound plays twice when equipping a saddle on a camel
-   [MC-261243](https://bugs.mojang.com/browse/MC-261243) Pitcher Crop isn't part of the #crops tag
-   [MC-261262](https://bugs.mojang.com/browse/MC-261262) Raiser and Wayfinder smithing templates are offset by one pixel
-   [MC-261264](https://bugs.mojang.com/browse/MC-261264) The advancement "Two by Two" is no longer obtainable due to the change to sniffer's breeding
-   [MC-261275](https://bugs.mojang.com/browse/MC-261275) Sniffers drop moss blocks when killed

---

# Minecraft Snapshot 23w12a

Well hello fellow Minecraft lovers! It is time for the first snapshot for 1.20. We know we promised no more major features, so how did we end up with such a big snapshot? You thought the trails were over? NO! In snapshot 23w12a we have even more tales to tell! Our devs apparently could not resist throwing in a few extra additions. Enjoy!

## New Features

-   All features and changes from the "Update 1.20" experimental pack are now part of the game
-   Vibration resonance functionality has been added to Blocks of Amethyst
-   Added the Calibrated Sculk Sensor block
-   Added Suspicious Gravel, more Archaeology sites, and new Pottery Shards
-   Added 5 new armor trims
-   Signs have improved customization options
-   Added Sniffer Egg
-   Added Pitcher Plant

### Vibration Resonance

-   Blocks of Amethyst have a new behavior when placed adjacent to Sculk Sensors
    -   If that Sculk Sensor receives a vibration, the Block of Amethyst will re-emit its frequency as a separate vibration at its location
-   This behaviour is called Vibration Resonance, and allows players to move vibration frequencies across long distances without having to recreate the vibration naturally

### Calibrated Sculk Sensors

-   A new variant of Sculk Sensors which allows you to filter vibrations based on their frequency level
-   They are not found naturally and can only be crafted with 1 Sculk Sensor and 3 Amethyst Shards in the Crafting Table
-   One side of the Calibrated Sculk Sensor can receive a redstone signal as input
    -   The strength of that redstone signal is the only vibration frequency the Sculk Sensor will listen to

### Archaeology

-   Added Suspicious Gravel block
    -   It has the same characteristics as Suspicious Sand
-   Added Suspicious Gravel to Cold Ocean Ruins
-   Added Suspicious Sand to Warm Ocean Ruins
    -   Sniffer Eggs can be found here
-   Added the Trail Ruins, a buried structure from a lost culture
    -   Four Armor trims can be found here
-   Added 16 Pottery Shards (so there are now 20 Pottery Shards in total)
    -   These have been distributed between the 5 Archaeology sites: Desert Wells, Desert Temples, Cold Ocean Ruins, Warm Ocean Ruins, and Trail Ruins

### Armor Trims

New armor trim Smithing Templates have been added to the following structures:

-   Trail Ruins
    -   Wayfinder Armor Trim
    -   Raiser Armor Trim
    -   Shaper Armor Trim
    -   Host Armor Trim
-   Ancient City
    -   Silence Armor Trim

### Signs

-   Sign text can now be edited after being placed in the world
    -   This can be done by interacting with the Sign
-   Both sides of the Sign can now have separate text and colors, allowing for further customization options
    -   By default, a Sign will prompt you to input the front side's text when placed
    -   To apply text to the back-side, you must walk to the other side and interact with that face to edit it
-   Signs can now also be waxed with Honeycomb, preventing any further edits to its text
    -   Click commands on Signs can only be invoked when the Sign is waxed
    -   If a Sign with a click command is not waxed, interacting with it will not invoke the command and instead open up the edit screen as usual

### Sniffer Egg

-   Can be found in the Suspicious Sand of Warm Ocean Ruins
-   When two Sniffers breed they do not immediately spawn a Snifflet; instead, a Sniffer Egg is dropped
-   Hatching
    -   When placed on Moss, the Egg will hatch after approximately 10 minutes
    -   On all other blocks, it will hatch in approximately 20 minutes

### Pitcher Plant

-   The Sniffer can now occasionally Sniff up a Pitcher Pod item
    -   This Pod, when planted in Farmland, grows into a Pitcher Crop, which has five growth stages
    -   Once fully grown, the Pitcher Crop can be harvested, yielding a two-block-tall Pitcher Plant

## Changes

-   Vibration frequencies of many actions in the game have been tweaked
-   Wither effect particle color has been adjusted to make it more distinguishable
-   Potion of Slow Falling color has been adjusted to make it more distinguishable
-   Step sounds can now combine for blocks walked through and stepped on

### Vibration Frequencies

In preparation for the Calibrated Sculk Sensor, vibration frequencies have been greatly simplified to prevent unwanted interference. The following are category descriptions for each frequency and the expected events that they correspond to:

1.  Movement in any medium (land, water and air)
2.  Landing on any surface (land or water)
3.  Item interactions
4.  Gliding with an elytra or unique mob actions (Ravager roar, Wolf shaking, etc)
5.  Dismounting a mob or equipping gear
6.  Mounting a mob or interacting with a mob
7.  Mobs and players getting damaged
8.  Consuming items (drinking and eating)
9.  Blocks 'deactivating' (door close, chest close, button unpress, etc)
10.  Blocks 'activating' (door open, chest open, button press, etc)
11.  Blocks changing (cauldron water level rising, adding food to campfire, etc)
12.  Blocks being destroyed
13.  Blocks being placed
14.  Mobs and players teleporting or spawning
15.  Mobs and players dying or an explosion

### Combination Step Sounds

-   Combines two different step sounds
-   Occurs for carpets, snow, nether sprouts, as well as warped and crimson roots
    -   The top-most block you are walking on is played as normal
    -   The block underneath is played at a lower volume and pitch

### Armor Trims

-   The Dune Armor Trim now has a brand-new pattern and Smithing Template icon
-   The Dune Armor Trim's old pattern is now used by the Sentry Armor Trim
    -   A new icon has been made for the Sentry Armor Trim Smithing Template to fit this pattern
-   The Sentry Armor Trim's old pattern is now used by the new Shaper Armor Trim

## Technical Changes

-   The data pack version is now 13, accounting for sign data format changes
-   Added a `capped` rule structure processor that limits the number of replaced blocks for a structure piece to a configured maximum
-   Configuring block entity fields in a `rule` processor rule is now delegated to a referenced `block_entity_modifier` instead of the previously fixed `output_nbt` configuration
-   Game events have changed vibration frequency and some have been removed
-   Tweaked display entity interpolation
-   Removed `update_1_20` feature flag and built-in datapack - features are no longer experimental

### Structure post-processors

**Capped post-processor**

-   A `capped` post-processor has been added which can limit how many blocks a delegated post-processor randomly transform in a structure
-   This can be used to configure a structure piece to have an exact amount of specific blocks, instead of using random distribution
-   The `capped` post-processor has following required parameters:
    -   `delegate` A post-processor which performs the actual block transformation
    -   `limit` Maximum amount of blocks that the delegated post-processor can transform
        -   The blocks inside a structure are all randomly passed to the delegated post-processor until it has transformed the limited amount
        -   Either constant or random number generator sampled during post-processing

**Rule post-processor block entity configuration**

-   Previously a rule could specify an optional fixed `output_nbt` which would be added to the processed output block entity
-   This field has now been changed to reference a `block_entity_modifier`
-   Existing `block_entity_modifier`'s are:
    -   `passthrough` Retains existing fields on the block entity
        -   This is the default if no `block_entity_modifier` is specified
    -   `append_static` Similar to previous `output_nbt` this provides fixed fields to add to the block entity
        -   A minor change is that this modifier appends configured fields to the processed block instead of replacing existing fields
    -   `clear` Removes any existing fields on the block entity
    -   `append_loot` Appends a loot table and seed to the block entity through required parameter:
        -   `loot_table` Referenced loot table to add to block entity as `LootTable` field
        -   Field `LootTableSeed` is also added to the block entity using random seeded by block position

### Game Events

-   `piston_contract` game event has been removed in favor of `block_deactivate`
-   `piston_extend` and `dispense_fail` game events have been removed in favor of `block_activate`
-   Many game events have new vibration frequencies:
    -   1: `step`, `swim`, `flap`
    -   2: `projectile_land`, `hit_ground`, `splash`
    -   3: `item_interact_finish`, `projectile_shoot`, `instrument_play`
    -   4: `entity_roar`, `entity_shake`, `elytra_glide`
    -   5: `entity_dismount`, `equip`
    -   6: `entity_mount`, `entity_interact`, `shear`
    -   7: `entity_damage`
    -   8: `drink`, `eat`
    -   9: `container_close`, `block_close`, `block_deactivate`, `block_detach`
    -   10: `container_open`, `block_open`, `block_activate`, `block_attach`, `prime_fuse`, `note_block_play`
    -   11: `block_change`
    -   12: `block_destroy`, `fluid_pickup`
    -   13: `block_place`, `fluid_place`
    -   14: `entity_place`, `lightning_strike`, `teleport`
    -   15: `entity_die`, `explode`

### Tags

**Step Sounds**

-   The blocks that can produce a combination of step sounds is controlled by `combination_step_sound_blocks`

### Display entity

**Interpolation changes**

-   Previous values are always discarded if `interpolation_duration` is `0`
-   Made sure that render properties are applied at the same time (so `block_state` is applied at the same time as transformation, i.e. at next tick after receiving update)
-   Entities are not rendered unless initial data is received. That means display entities might not show on the first tick.
-   Note: due to how game handles updates, changes to entities made after summoning might be delivered to clients with later tick

## Fixed bugs in Snapshot 23w12a

-   [MC-157727](https://bugs.mojang.com/browse/MC-157727) The small cube in honey/slime blocks isn't displayed in inventory
-   [MC-165221](https://bugs.mojang.com/browse/MC-165221) 3D Modeled Potions are not rendered correctly in the "GUI Display"
-   [MC-197241](https://bugs.mojang.com/browse/MC-197241) Players can change the color of a wolf's collar even if they're not its owner
-   [MC-201647](https://bugs.mojang.com/browse/MC-201647) Entity riding an entity can cause location/coordinate desync
-   [MC-256488](https://bugs.mojang.com/browse/MC-256488) Bamboo Raft and Raft with Chest models float above ground
-   [MC-256551](https://bugs.mojang.com/browse/MC-256551) Baby camels have a visible inventory
-   [MC-256585](https://bugs.mojang.com/browse/MC-256585) Z-fighting occurs on the text of hanging signs
-   [MC-259201](https://bugs.mojang.com/browse/MC-259201) The tops and bottoms of donkeys' ears are miscolored
-   [MC-259879](https://bugs.mojang.com/browse/MC-259879) Display entities with a rather large shadow;;_;;radius value can cause performance issues
-   [MC-260020](https://bugs.mojang.com/browse/MC-260020) Reloading the world resets the Brown Mooshroom's given flower
-   [MC-260043](https://bugs.mojang.com/browse/MC-260043) Decorated Pots don't play breaking sound in creative mode
-   [MC-260047](https://bugs.mojang.com/browse/MC-260047) Decorated pots from the creative inventory and new blank decorated pots with no NBT will match their texture to the last decorated pot you crafted
-   [MC-260053](https://bugs.mojang.com/browse/MC-260053) When rotating a decorated pot with the debug stick, it will spawn a decorated pot item
-   [MC-260061](https://bugs.mojang.com/browse/MC-260061) Sniffer's ears and head z-fight
-   [MC-260069](https://bugs.mojang.com/browse/MC-260069) Growing cherry trees inside each other causes their leaves to decay
-   [MC-260240](https://bugs.mojang.com/browse/MC-260240) Sniffers that are in love sometimes don't attempt to approach one another to breed
-   [MC-260251](https://bugs.mojang.com/browse/MC-260251) The walking animations of sniffers don't change in relation to their movement speed
-   [MC-260282](https://bugs.mojang.com/browse/MC-260282) Sniffers can sniff out and follow players in spectator mode
-   [MC-260296](https://bugs.mojang.com/browse/MC-260296) Pink petal block models are not optimized
-   [MC-260317](https://bugs.mojang.com/browse/MC-260317) Sniffers try to sniff out obstructed blocks they can't reach
-   [MC-260320](https://bugs.mojang.com/browse/MC-260320) Parity Issue: Snifflets (Baby Sniffers) have an inconsistent model with Bedrock
-   [MC-260326](https://bugs.mojang.com/browse/MC-260326) Dying sniffers continue to dig
-   [MC-260409](https://bugs.mojang.com/browse/MC-260409) Cherry Grove biome is not in the #is;;_;;overworld biome tag
-   [MC-260503](https://bugs.mojang.com/browse/MC-260503) Sniffers refuse to dig into soil with a non-solid block on top
-   [MC-260632](https://bugs.mojang.com/browse/MC-260632) Riding an entity that is far away causes client/server desync
-   [MC-260678](https://bugs.mojang.com/browse/MC-260678) Potion of Invisibility looks too similar to the Potion of Slow Falling
-   [MC-260750](https://bugs.mojang.com/browse/MC-260750) Magma blocks use unnecessary random ticking for an outdated feature, causing performance issues
-   [MC-260757](https://bugs.mojang.com/browse/MC-260757) Updating a large amount of Iron Bars causes the game to hang in-game or during the Saving world screen
-   [MC-260777](https://bugs.mojang.com/browse/MC-260777) Sniffers ignore some dangerous blocks while sniffing and pathfinding resulting in them being damaged
-   [MC-260778](https://bugs.mojang.com/browse/MC-260778) Sniffer tries to sniff out blocks outside the world border
-   [MC-260779](https://bugs.mojang.com/browse/MC-260779) Sniffers can dig into blocks outside the world border
-   [MC-260839](https://bugs.mojang.com/browse/MC-260839) Mobs can replace weapons held in their main hand with armor
-   [MC-260885](https://bugs.mojang.com/browse/MC-260885) Display entities summoned with initial transformation interpolate incorrectly from default transformation during next transformation
-   [MC-260897](https://bugs.mojang.com/browse/MC-260897) Display entity's previous state of interpolation doesn't work as expected

---

# Minecraft 1.19.4 Release Candidate 3

A third Release Candidate is now available for Minecraft 1.19.4, fixing one issue in preparation for the full release of Minecraft 1.19.4 tomorrow.

Happy Crafting!

## Fixed bug in 1.19.4 Release Candidate 3

-   [MC-260901](https://bugs.mojang.com/browse/MC-260901) Guardians deal thorns damage even while their spikes are retracted

---

# Minecraft 1.19.4 Release Candidate 2

We are releasing a second Release Candidate for 1.19.4 to fix a few critical issues.

## Fixed bugs in 1.19.4 Release Candidate 2

-   [MC-260677](https://bugs.mojang.com/browse/MC-260677) Advancement icons handle translucent textures wrong
-   [MC-260878](https://bugs.mojang.com/browse/MC-260878) Guardians apply Thorns damage when hit by projectiles
-   [MC-260881](https://bugs.mojang.com/browse/MC-260881) Transparent 3D models dont render properly in the GUI/Hotbar

---

# Minecraft 1.19.4 Release Candidate 1

Here is the first (and hopefully last) release candidate for 1.19.4. Unless something critical pops up, no further changes will be made for the full release, which is planned for next week.

Happy mining!

## Technical Changes

Changes to display entity interpolation:

-   interpolation always starts at the beginning on client tick
-   field `interpolation_start` is replaced with `start_interpolation`, with a different meaning
-   `start_interpolation` describes amount of ticks from the start of next client tick after receiving an update to start of interpolation
    -   for example value `0` means that interpolation will start at the beginning of next client tick after receiving the update
-   `start_interpolation` is not stored in entity data
    -   when using data commands, if interpolated value is updated, but `start_interpolation` is not present in modified tag, interpolation will continue from the time of previous update, but with new values

## Fixed bugs in 1.19.4-rc1

-   [MC-260857](https://bugs.mojang.com/browse/MC-260857) Display entities summoned with initial transformation interpolate incorrectly from default transformation during next transformation

---

# Minecraft 1.19.4 Pre-Release 4

We are now releasing the fourth pre-release for Minecraft 1.19.4. This pre-release contains bug fixes, some cherry texture tweaks, and a button in the options menu to view the game credits.

Happy mining!

## Changes

-   Added "Credits & Attribution" button in the Options menu

## Technical Changes

### Display entities

-   When a new interpolation is started, it now starts from the current state instead of the final state

## Changes to Experimental Features

-   The textures for the Cherry Tree Leaves and Cherry Sign have been updated

## Fixed bugs in 1.19.4 Pre-release 4

-   [MC-172305](https://bugs.mojang.com/browse/MC-172305) Some words within "/clear" command feedback messages are always pluralized
-   [MC-193497](https://bugs.mojang.com/browse/MC-193497) Tall Grass & Large Fern are rendered incorrectly when an Enderman is holding them
-   [MC-210816](https://bugs.mojang.com/browse/MC-210816) Sculk sensors are not activated upon breaking shulker bullets
-   [MC-211071](https://bugs.mojang.com/browse/MC-211071) Some words within "/spreadplayers" command feedback messages are always pluralized
-   [MC-255060](https://bugs.mojang.com/browse/MC-255060) Some words within "/function" and "/schedule" command feedback messages are always pluralized
-   [MC-255087](https://bugs.mojang.com/browse/MC-255087) Some words within "/worldborder" command feedback messages are always pluralized
-   [MC-256270](https://bugs.mojang.com/browse/MC-256270) Some words within some multiplayer command feedback messages are always pluralized
-   [MC-257784](https://bugs.mojang.com/browse/MC-257784) Some words within some realms strings are always pluralized
-   [MC-259259](https://bugs.mojang.com/browse/MC-259259) Hostile mobs can't replace armor they're wearing with better armor
-   [MC-259603](https://bugs.mojang.com/browse/MC-259603) The "selectWorld.gameMode.hardcore.info" string displayed within the create new world GUI is improperly capitalized
-   [MC-259610](https://bugs.mojang.com/browse/MC-259610) Gamemode information strings consist of inconsistent concluding punctuation
-   [MC-259637](https://bugs.mojang.com/browse/MC-259637) Natural spider potion effects still last max int instead of infinity
-   [MC-259702](https://bugs.mojang.com/browse/MC-259702) The "death.attack.hotFloor.player" string is missing an article before the word "danger"
-   [MC-259714](https://bugs.mojang.com/browse/MC-259714) Death messages relating to dragons' breath aren't possessive
-   [MC-259715](https://bugs.mojang.com/browse/MC-259715) The "death.attack.message;;_;;too;;_;;long" string is missing an article before the word "message"
-   [MC-259792](https://bugs.mojang.com/browse/MC-259792) The "selectWorld.experimental.message" string is missing a serial comma
-   [MC-259853](https://bugs.mojang.com/browse/MC-259853) block;;_;;display transform breaks when shearing
-   [MC-259896](https://bugs.mojang.com/browse/MC-259896) item;;_;;display has a wrong default value
-   [MC-260068](https://bugs.mojang.com/browse/MC-260068) The sounds of using brushes don't show any subtitles
-   [MC-260196](https://bugs.mojang.com/browse/MC-260196) Entities don't recognize decorated pots as obstacles when pathfinding
-   [MC-260214](https://bugs.mojang.com/browse/MC-260214) Entities will often spin while pathfinding on top of decorated pots
-   [MC-260215](https://bugs.mojang.com/browse/MC-260215) Water within waterlogged decorated pots doesn't flow
-   [MC-260265](https://bugs.mojang.com/browse/MC-260265) Lighting does not transform with display entities
-   [MC-260285](https://bugs.mojang.com/browse/MC-260285) Applying an identical transformation will result in the previous interpolation repeating instead of having no effect
-   [MC-260321](https://bugs.mojang.com/browse/MC-260321) Sniffers in the distance have lots of Z-fighting on their body
-   [MC-260429](https://bugs.mojang.com/browse/MC-260429) The texture of the Cherry Sign post has an inconsistency with the other Signs
-   [MC-260497](https://bugs.mojang.com/browse/MC-260497) Villager trade button interferes with the slider
-   [MC-260642](https://bugs.mojang.com/browse/MC-260642) tall;;_;;grass and large;;_;;fern display gray as block;;_;;display entities
-   [MC-260681](https://bugs.mojang.com/browse/MC-260681) UI click sounds in Create New World menu tabs are louder than they should be
-   [MC-260735](https://bugs.mojang.com/browse/MC-260735) You can block falling anvils and dripstone with a shield
-   [MC-260764](https://bugs.mojang.com/browse/MC-260764) Right-clicking will focus text fields
-   [MC-260765](https://bugs.mojang.com/browse/MC-260765) Right-clicking will move packs in the pack edit screen
-   [MC-260774](https://bugs.mojang.com/browse/MC-260774) Players are kicked from server environments due to chat message validation failures when attempting to type in chat after having previously altered chat settings

---

# Minecraft 1.19.4 Pre-Release 3

We're back again with the third pre-release for Minecraft 1.19.4. This pre-release contains more bug fixes, as well as color adjustments for potions. The archer pottery shard texture has also been updated. ​ Happy mining! ​

## Changes

-   Potions have had their colors adjusted to make them more distinguishable from each other

​

## Technical Changes

-   Pressing F3+S will now dump contents of dynamic textures (like atlases, maps, etc.) to `screenshots/debug/`

​

## Experimental Feature Changes

### Pottery Shards

-   Updated the textures of the Archer Pottery Shard based on community feedback

​

## Fixed bugs in 1.19.4-pre3

-   [MC-148458](https://bugs.mojang.com/browse/MC-148458) Ridable mobs aren't knocked back upon death
-   [MC-250486](https://bugs.mojang.com/browse/MC-250486) Error saving GUI scale option when toggling fullscreen while fullscreen resolution is changed
-   [MC-258561](https://bugs.mojang.com/browse/MC-258561) Endermen teleport away instead of taking damage from end crystal, TNT and wither skull explosions
-   [MC-259666](https://bugs.mojang.com/browse/MC-259666) Reloading a resource pack that has a custom texture atlas for a second time causes severe FPS lag on the client
-   [MC-260277](https://bugs.mojang.com/browse/MC-260277) potted;;_;;cherry;;_;;sapling and potted;;_;;torchflower not part of #flower;;_;;pots block tag
-   [MC-260451](https://bugs.mojang.com/browse/MC-260451) Inventory character with semi-transparent outer skin layer not rendered correctly when looking right
-   [MC-260456](https://bugs.mojang.com/browse/MC-260456) Certain potions are still indistinguishable by color
-   [MC-260470](https://bugs.mojang.com/browse/MC-260470) Endermen can't dodge arrows fired from a dispenser
-   [MC-260474](https://bugs.mojang.com/browse/MC-260474) Players and mobs are no longer affected by knockback upon death
-   [MC-260501](https://bugs.mojang.com/browse/MC-260501) Cannot delete previous snapshot world in launcher
-   [MC-260579](https://bugs.mojang.com/browse/MC-260579) Crash when a guardian deals damage to itself after removing thorns from avoids;;_;;guardian;;_;;thorns
-   [MC-260605](https://bugs.mojang.com/browse/MC-260605) Repeating command block summoning piglins/villagers causes memory usage to constantly increase
-   [MC-260627](https://bugs.mojang.com/browse/MC-260627) Dolphins with passengers either accelerate to ludicrous speed or are immobilized completely

---

# Minecraft 1.19.4 Pre-Release 2

We are now releasing the second pre-release for Minecraft 1.19.4. This pre-release contains bug fixes, as well as an updated model for the decorated pot.

As a reminder, the pre-release cycle for 1.19.4 will continue to contain mostly bug fixes.

Happy mining!

## Technical Changes

### Mob Behavior

-   Only mobs in the `dismounts_underwater` entity tag will now force the rider to dismount when underwater

## Changes for Experimental Features

### Cherry Biome and Wood Set

-   Updated the texture for Pink Petals
-   Updated textures for the Cherry Door, Cherry Sapling, and Cherry Boat with Chest

### Decorated Pot

-   Updated the neck of the Decorated Pot model
    -   With the former pot we decided to make the pot's neck clip with blocks, so it would be extra flexible to build with
    -   However, this had some Z-fighting issues where 2 objects are in the same exact position and cause flickering
    -   This is prevented with the new and more complex block model

## Fixed bugs in 1.19.4 Pre-release 2

-   [MC-137552](https://bugs.mojang.com/browse/MC-137552) Loaded crossbows look unloaded in item frames and when dropped on the ground
-   [MC-229293](https://bugs.mojang.com/browse/MC-229293) Casting issue: Broken blocks drop items in the wrong position at high distances
-   [MC-259208](https://bugs.mojang.com/browse/MC-259208) Zombie riding chicken or skeleton riding spider not considered controllers by /execute on controller command
-   [MC-259609](https://bugs.mojang.com/browse/MC-259609) Tooltips from selected buttons and sliders don't disappear when expected
-   [MC-259831](https://bugs.mojang.com/browse/MC-259831) UI Buttons break certain resource packs as of 23w06a
-   [MC-259839](https://bugs.mojang.com/browse/MC-259839) Duplicated "minecraft:freeze" in damage;;_;;type tag "bypasses;;_;;armor"
-   [MC-259885](https://bugs.mojang.com/browse/MC-259885) Upon entering the credits screen while in F1 mode, the Minecraft: Java Edition logo does not display correctly
-   [MC-259961](https://bugs.mojang.com/browse/MC-259961) item;;_;;display does not take some nbt tags into account
-   [MC-259979](https://bugs.mojang.com/browse/MC-259979) Striders and blazes do not take five times the damage when using /damage with freeze type
-   [MC-260208](https://bugs.mojang.com/browse/MC-260208) Display entities in spawn chunks with interpolation;;_;;duration greater than 0 visually reset to default transformation on rejoin
-   [MC-260268](https://bugs.mojang.com/browse/MC-260268) Can't scroll using arrows in "Telemetry Data Collection" screen
-   [MC-260324](https://bugs.mojang.com/browse/MC-260324) Cherry Boat with Chest item texture has a misplaced pixel
-   [MC-260335](https://bugs.mojang.com/browse/MC-260335) Clicking with an item that is out of stock in the villager trading menu with sufficient payment will allow purchase of the item regardless
-   [MC-260364](https://bugs.mojang.com/browse/MC-260364) Cherry Door inconsistent item texture
-   [MC-260427](https://bugs.mojang.com/browse/MC-260427) Button text is visible outside menus
-   [MC-260434](https://bugs.mojang.com/browse/MC-260434) There is no "Will be saved in..." text in the new world creation menu
-   [MC-260436](https://bugs.mojang.com/browse/MC-260436) Item Tags in 1.19.4-pre1 have extra entries
-   [MC-260438](https://bugs.mojang.com/browse/MC-260438) Items are not rendered in the bundle UI
-   [MC-260443](https://bugs.mojang.com/browse/MC-260443) Loading a snapshot 23w07a experimental world says it can be opened in "safe mode" and clicking "safe mode" does nothing
-   [MC-260445](https://bugs.mojang.com/browse/MC-260445) Player can climb up one block while riding a boat or raft
-   [MC-260461](https://bugs.mojang.com/browse/MC-260461) Water mobs cannot be ridden in water

---

