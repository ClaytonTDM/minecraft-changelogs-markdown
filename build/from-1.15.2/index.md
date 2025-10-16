# Minecraft: Java Edition 1.15.2

## Changes in 1.15.2

-   Bees no longer anger when a nearby nest/hive is destroyed using a silk touch tool
-   Added `doPatrolSpawning` and `doTraderSpawning` game rules that control spawning of patrols and wandering traders, respectively
-   Added `gui_light` option in block models to allow controlling light when rendering model as item in GUI
    -   Controls light when rendering block model inside slot. If set to `side`, model will be rendered like block. If set to `front`, model is shaded like flat item
-   Any birch or oak sapling grown near a flower within 2 blocks distance on the same y-level has a 5% chance of having a bee nest
-   Bee Nests now have a 2% chance of spawning in Flower Forests
-   Bee Nests now have a 0.2% chance of spawning in Forest, Wooded Hills, Birch Forest, Tall Birch Forest, Birch Forest Hills, and Tall Birch Hills biomes
-   Fixed bugs

## Fixed bugs in 1.15.2

-   [MC-169825](https://bugs.mojang.com/browse/MC-169825) - “Multiplayer (3rd party)” shows in window title when disconnecting from a singleplayer world
-   [MC-169839](https://bugs.mojang.com/browse/MC-169839) - Certain potion effects that override lower level effects don’t get removed after their duration ends
-   [MC-169840](https://bugs.mojang.com/browse/MC-169840) - Drinking a level 1 potion under a level 2 beacon and leaving results in the effect being lost
-   [MC-169848](https://bugs.mojang.com/browse/MC-169848) - Crashes when trying to create Beehive From planted tree
-   [MC-169886](https://bugs.mojang.com/browse/MC-169886) - No older world protection in 1.15.2 PR 1
-   [MC-862](https://bugs.mojang.com/browse/MC-862) - Spawn protection doesn’t work for item frames, paintings and armor stands
-   [MC-1541](https://bugs.mojang.com/browse/MC-1541) - Beacon effect removes potion effect of the same type
-   [MC-51053](https://bugs.mojang.com/browse/MC-51053) - Furnace minecarts lose power after navigating corners
-   [MC-150575](https://bugs.mojang.com/browse/MC-150575) - Concrete powder does not turn into concrete when letting it fall beside water
-   [MC-153987](https://bugs.mojang.com/browse/MC-153987) - Falling down ladders while wearing elytra
-   [MC-165695](https://bugs.mojang.com/browse/MC-165695) - Hoppers harvesting honeycomb from bee hives and bee nests only pick up one honeycomb
-   [MC-166312](https://bugs.mojang.com/browse/MC-166312) - Loom UI pattern icons are too dark
-   [MC-166319](https://bugs.mojang.com/browse/MC-166319) - B on “Open in browser” is lowercase in link confirmation GUI
-   [MC-166324](https://bugs.mojang.com/browse/MC-166324) - “Raw input” button has lowercase “i”
-   [MC-166722](https://bugs.mojang.com/browse/MC-166722) - Some custom item models appear dark in the inventory
-   [MC-167018](https://bugs.mojang.com/browse/MC-167018) - Misplaced pixel in critical hit particle texture
-   [MC-167079](https://bugs.mojang.com/browse/MC-167079) - Horse Armor texture is off
-   [MC-167201](https://bugs.mojang.com/browse/MC-167201) - Invisible glowing entities do not respect their team color
-   [MC-167219](https://bugs.mojang.com/browse/MC-167219) - Reloading a resource pack enough times will cause intense lag
-   [MC-167220](https://bugs.mojang.com/browse/MC-167220) - Items on marker armor stands no longer glow
-   [MC-167235](https://bugs.mojang.com/browse/MC-167235) - Distance from where you can enter a bed is off center
-   [MC-167344](https://bugs.mojang.com/browse/MC-167344) - com.mojang.blaze3d.platform.ClipboardManager leaks direct buffers
-   [MC-167416](https://bugs.mojang.com/browse/MC-167416) - Distance from where a monster will stop you from sleeping is off center
-   [MC-167444](https://bugs.mojang.com/browse/MC-167444) - iron\_golem\_crackiness\_\* textures show up on invisible iron golems that are damaged
-   [MC-167709](https://bugs.mojang.com/browse/MC-167709) - Bees that ride a boat, minecart or other entities when entering their hive or nest can’t leave the hive or nest ever again
-   [MC-168091](https://bugs.mojang.com/browse/MC-168091) - Concrete powder doesn’t convert into concrete when dropped into deep water
-   [MC-168230](https://bugs.mojang.com/browse/MC-168230) - End crystal beam is dark / desaturated
-   [MC-168467](https://bugs.mojang.com/browse/MC-168467) - Bees do not remember how many crops they’ve pollinated
-   [MC-169157](https://bugs.mojang.com/browse/MC-169157) - Breaking a hive with obstructed front makes bees vanish

---

# Minecraft: Java Edition 1.15.1

## Changes in 1.15.1

-   Optimized chunk rendering performance, especially for chunks with many different block states
-   Fixed an error spammed to the game's log files caused by custom spawner blocks spawning villagers
-   Improved network handling of invalid Biome ids
-   Fixed a crash in the Realms screen
-   Fixed bugs
-   Removed Herobrine

## Fixed bugs in 1.15.1

-   [MC-135050](https://bugs.mojang.com/browse/MC-135050) - NullPointerException while tesselating block model
-   [MC-167530](https://bugs.mojang.com/browse/MC-167530) - Anvils causing java.lang.StackOverflowError
-   [MC-167482](https://bugs.mojang.com/browse/MC-167482) - Corrupt chunk causes force upgrading a world to fail

---

# Minecraft: Java Edition 1.15

## Features

-   Added advancements for bees and honey!
-   Added bees!
-   Added bee nests and bee hives!
-   Experience orbs now appear in the same location as loot when an entity is killed
-   Added features found in other Minecraft editions
-   Added honey blocks!
-   Added the honey bottle!
-   Added honeycomb!
-   Added honeycomb blocks!

### Accessibility

-   Sneak and sprint inputs can now be switched between hold and toggle mode in the accessibility options
-   Descriptions under buttons on the create world screen are now narrated
-   Changed the button highlight to make it easier to distinguish which button is selected

### Advancements

-   Added "Sticky Situation" for jumping into a honey block to break your fall
-   Added "Bee Our Guest" for safely collecting honey from a beehive using a campfire
-   Added "Total Beelocation" for moving a bee nest with 3 bees inside using silk touch

### Bee

We're buzzing with excitement! Can someone tell Cory to stop making bee puns now?

-   Bees are cute, fuzzy, neutral mobs
-   Don't hurt them, they don't want to hurt you
-   If a bee does sting you, it will leave its stinger in you and eventually die, dropping nothing :(
-   Bees love pretty flowers and spend their lives gathering pollen from them
-   After gathering pollen, bees fly back to their home nest
-   Bees help you by growing crops while carrying pollen back to the nest
-   Bees like sharing the location of their favorite flowers with other bees
-   If a bee doesn't have a home nest, it will wander around until it finds one it can use
-   Bees don't like the rain and they sleep at night. They will go back to the nest in these cases
-   Bees can be bred using flowers
-   If a bee can't find nectar, after a while it will return home for a bit
-   Bees try to avoid water
-   Bees go inside if it's raining at all in the world, not just where the bee is located
-   Bees will search up to 10 blocks away from itself in all directions to find a nest/hive to call home

### Bee Nests / Bee Hives

In real life, bees dance in their nests to show other bees where flowers are!

-   Bee nests spawn naturally in flower forests, plains, and sunflower plains biomes
-   When a bee visits this block and completes its journey undisturbed, the level of honey increases
-   Max of 5 levels of honey
-   Level 5 is quite...sticky
-   Bees use nests and hives to share flower locations with other bees
-   Sometimes bees that already know about a flower will choose not to use this information
-   Bee hives are crafted by players using honeycomb and wood planks
-   Use a silk touch tool to get the block with the bees stored inside
-   Bee nests will be destroyed unless you use silk touch
-   Use shears when at full honey to get honeycomb
-   Use a bottle when at full honey to get a honey bottle
-   Campfire smoke calms bees - place one underneath the nest/hive to keep them in chill mode
-   Redstone-friendly!
-   Bees like bee nests and bee hives the same amount! They don't play favorites :)
-   Bees only exit through the front of the nest/hive

### Dispensers

-   Dispensers can now fill bottles with water and honey
-   Dispensers can now shear honey combs from bee nests and hives
-   Dispensers now eject empty bottles properly when not facing water

### Honey Block

Sticky. Very sticky!

-   Walking and jumping is limited
-   If you stand on a honey block that is pushed by a piston, you come along for the ride
-   Jump into a wall of honey blocks to slide down and slow your fall
-   Landing on a honey block cushions your fall somewhat
-   When a honey block is pushed or pulled by a piston, it sticks to adjacent blocks and tries to move them in the same direction (just like slime blocks do)
-   Honey blocks and slime blocks don't stick to each other, because... um.... because of special Minecraft chemistry
-   Mobs and animals dislike walking on honey blocks unless they really need to as it's too sticky for their comfort
-   Honey blocks are crafted from four honey bottles

### Honey Bottle

Organic, gluten-free, delicious locally-farmed honey!

-   Use an empty glass bottle on a hive or nest that is full of honey to get a bottle of honey!
-   Drink it!
-   ???
-   Profit!
-   Oh yeah, also craft it into sugar!
-   Or craft four bottles into a honey block!
-   Drinking honey also cures poison

### Honeycomb

Disclaimer: Cannot be used to comb your hair

-   Shear a full-honey hive or nest to obtain
-   Craft with wood planks to create a bee hive

### Honeycomb Block

BYOH - Build Your Own Honeycomb

-   Craft 2x2 Honeycomb to get a honeycomb block
-   Purely decorative!

### Iron Golems

-   Iron golems start cracking when badly damaged
-   Repair them with iron ingots!
-   Damage progress is based on ratio of current health to max health

### Parity

Things from other editions of Minecraft have arrived to Java Edition!

-   Trying to sleep in a bed during daytime will now set the player's spawn location to that bed
-   Setting the respawn point by using a bed now shows a message
-   Bells will now ring if powered with a redstone signal
-   The doInsomnia game rule can now be switched off to prevent phantoms from spawning during nighttime
-   The doImmediateRespawn game rule can now be switched on to have players respawn immediately without showing the death screen
-   The drowningDamage, fallDamage and fireDamage game rules can now be used to prevent certain sources of damage
-   Sponges now dry out when placed in the Nether
-   Fireworks dispensed from a dispenser now travel in the direction they were fired
-   Boats as fuel now smelt 6 items in a furnace
-   Campfire can be extinguished with a shovel
-   When breedable mobs in groups spawn naturally they sometimes spawn babies in the groups
-   Parrots can sit on a player's shoulder even when the player is riding
-   Composters are now crafted from wooden slabs
-   All foods are now edible in creative mode
-   Dark prismarine is now crafted from black dye instead of ink sacs
-   Increased scaffolding burn time when used as fuel in a furnace
-   Added stats for anvil and grindstone interaction counts

## Technical

-   Item predicate in advancements now makes distinction between actual enchantments and stored enchantments (like ones stored in enchanted books)
-   Added general-purpose storage for data commands
-   Added a `spectate` command
-   Loot table predicates can now be defined in separate files and used for entity selectors and in `execute if` command
-   Extended advancement and loot table predicates
-   Extended `schedule` command to allow scheduling function multiple times

### Advancements

-   Changes in item predicate:
    -   `enchantments` now only matches enchantments on item itself - it can no longer be used for enchanted books
    -   to match contents enchanted book, use `stored_enchantments`

#### Entity Predicate

##### `player`

Entity predicate now accepts `player` field, which checks player properties. Fails when entity is not player.

###### Fields:

-   `level` - range of allowed player levels
-   `gamemode` - same values as `/gamemode` command
-   `stats` - list of statistics to match. Entry fields: `type` (like `minecraft:custom`), `stat` (like `minecraft:sneak_time`) and `value` (int range)
-   `recipes` - map of recipe ids. Boolean value tells if it should or should not be known to player
-   `advancements` - map of advancement ids. If value is boolean, checks if advancement is done. If value is object, checks completion of critera

##### `team`

Entity predicate now accepts `team` field, which matches team name.

#### Location predicate

##### `block` and `fluid`

Predicate also accepts `block` and `fluid` sub-predicate. Available fields:

-   `block`/`fluid` - exact block/fluid id to match
-   `tag` - block/fluid tag to match
-   `nbt` - matcher for block entity NBT (only for blocks)
-   `state` - map of name-value properties. Value can be integer, boolean or string or object with optional `min` and `max` properties

##### `light`

Predicate now accepts `light` sub-predicate. Object has one integer range - `light` that matches visible light (`max(sky-darkening,block)`).

### Chat components

#### Click action

-   Added `copy_to_clipboard` action to `clickEvent`

#### NBT chat component

-   Added variant for NBT storage: `{"nbt": <path>, "storage":"<resource id>"}`. NBT storage can be manipulated with commands like `/data merge storage <resource id> ...`

### Commands

#### `data`

-   Data commands can now use `storage` as target. This is general-purpose, key-value storage
    -   Storage is shared between all dimensions in level
    -   Data in storage persist between reloads

#### `execute if predicate`

New subcommand evaluates custom predicates (defined in `predicates` directory of datapack).

#### `schedule`

-   Added new syntax `/schedule ... [append|replace]` (`/schedule ...` defaults to `replace`)
-   Added new syntax `/schedule clear <id>` to remove existing schedules (returns number of removed schedules)

#### effect

The `effect clear` command now defaults to `@s` if no target argument is given.

#### Entity selectors

New selector parameter `predicate` allows to apply custom custom predicate (defined in `predicates` directory of datapack).

#### kill

The `kill` command now defaults to `@s` if no target argument is given.

#### Spectate

New command that makes a player in spectator mode spectate an entity. Syntax: `spectate [target] [player]` Parameters:

-   `player` - The player that should spectate the target. Must be in spectator mode. If omitted, `@s` is used
-   `target` - The target to spectate. If omitted, makes the player stop spectating

### Custom predicates

Condition part of loot tables can now be defined as separate data pack resource in `predicates` directory.

### Loot tables

#### `location_check`

New parameters added:

-   `offsetX`, `offsetY`, `offsetZ` - optional offsets to location

#### `time_check` condition

New condition that checks day time.

##### Parameters

-   `value` - range of accepted values
-   `period` - if present, time will be modulo-divided by this value (for example, if set to 24000, `value` will operate on time of day)

#### New conditions

##### `reference`

Includes condition defined in `predicates` directory of datapack, selected with `name` parameter.

#### New functions

##### `copy_state`

Copies state properties from dropped block to `BlockStateTag` in dropped item.

###### Parameters

-   `block` - source of properties (block id)
-   `properties` - list of property names. All must be present on `block`

### Modding

In an effort to help make modding the game easier, we have decided to publish our game obfuscation maps with all future releases of the game. This means that anyone who is interested may deobfuscate the game and find their way around the code without needing to spend a few months figuring out what's what. It is our hope that mod authors and mod framework authors use these files to augment their updating processes that they have today. These mappings will always be available, instantly and immediately as part of every newly released version. This does not, however, change the existing restrictions on what you may or may not do with our game code or assets. The links to the obfuscation mappings are included as part of the version manifest json, and may be automatically pulled for any given version. Prefixed to every obfuscation map is the following legal disclaimer:

> (c) 2019 Microsoft Corporation. All rights reserved. This information is provided "as-is" and you bear the risk of using it. This information does not provide you with any legal rights to any intellectual property in any Microsoft product. You may copy and use this information for your internal, reference purposes. Microsoft makes no warranties, express or implied, with respect to the information provided here.

### Particle Performance

-   Vertically moving particles are performing better when they collide with blocks

### Pistons

#### Bug fix

-   Blocks that can be manually placed on farmland can now also be pushed onto it by a piston without destroying the farmland

### Resource Packs

-   The resource pack version is now 5
-   The game now tries to make out of date resource packs work as much as possible
-   Increased sizelimit for client downloading resource packs from 50MB to 100MB

### State matching

Few advancements and loot table predicates that used block state properties (`location`, `block_state_property`, `enter_block`, `placed_block`) can now match ranges (by replacing single value with `{"min": ..., "max": ...}`). Also, block type is now optional in those predicates - so for example it is not possible to match any crop with `age` property in certain range.

### Textures

-   Changed texture map for all chests
-   Banner and shield patterns are now using alpha channel instead of brightness
-   Ender Dragon does not have separate texture for the bottom of the wing anymore
-   Enchanted item glint texture is now like it looks in the game

#### Command used to change the patterns

-   `for f in *.png; do convert "$f" -alpha copy tmp.png && composite tmp.png -compose copy-opacity ../shield_base.png tmp2.png && convert tmp2.png -fill "rgba(0,1,0,1)" -draw "rectangle 0,0 1,63" -draw "rectangle 2,0 63,1" -draw "rectangle 2,22 64,64" -draw "rectangle 12,2 64,64" -fill none -draw "matte 0,0 floodfill" tmp3.png && mv tmp3.png "$f" && rm tmp.png tmp2.png; done`

---

# Minecraft: Java Edition 1.14

## Features

-   Lots of accessibility improvements!
-   Added Bamboo Blocks into the game
-   Added bamboo jungles in the world
-   Added barrels
-   Added the bell!
-   Added yummy Sweet Berries and pokey Sweet Berry Bushes to the game!
-   Added Blast Furnace
-   Rewrote the book & quill editing to be more intuitive
-   Added campfire
-   Added cartography table
-   Split cats and ocelots to their own creatures and updated cats with new features!
-   Added composter
-   Added Crossbows!
-   Added lots of new decorative blocks!
-   Added Fletching Table
-   Added new dyes and flowers!
-   Added foxes!
-   Added some community suggestions
-   Updated the credits list
-   Added in-game buttons for reporting bugs or giving feedback
-   Improvements to invisibility to allow it to correctly work in many cases where it didn't but you'd expect it to
-   Added grindstone functionality
-   Added 'Hero of the Village' effect
-   Added leather horse armor
-   Added lantern
-   Added lectern
-   Added loom
-   Existing special banner patterns can now be crafted into a new item that is not consumed when used, Banner Patterns
-   Added a new "Globe" banner pattern and item
-   Added lots of new blocks!
-   We're now using the new textures!
-   Added new Noteblock sounds
-   Added pandas!
-   Added illager patrols
-   Added pillagers
-   Added pillager outpost
-   Added raids
-   Added Ravager
-   Added scaffolding
-   Rewrote the sign editing to be more intuitive
-   Added Smithing Table
-   Added smoker
-   Added stonecutter
-   Added suspicious stew - hmmmm!
-   Trading changes
-   Villager changes
-   Biome based architecture for villages
-   Added Wandering Trader

### Accessibility

-   There's a new Accessibility menu which provides a useful place for all of our accessibility features to be toggled
-   When the narrator is turned on, buttons will be narrated on focus
-   Most screens allow tab and shift+tab navigation through buttons, edit boxes and other UI elements
-   Most lists allow up/down arrow keys to navigate through them
-   We've added a new option for turning up the background of all transparent text elements, which should help make them more readable for some people

### Bamboo

They call it exotic. Which is just people talk for awesome. Which it is, which is why we're so happy that we added it to the game.

-   Can be found in Jungles and the two new biomes: bamboo jungle and bamboo jungle hills
-   Can grow to a max height of 12 to 16 blocks
-   When sprinkled with bone meal, bamboo will grow with one or two bamboo blocks on the top
-   When struck with a sword, bamboo will instantly break
-   Two bamboo can be crafted into a single stick
-   Can be used as fuel, with four bamboo required to smelt a single item
-   Bamboo can be placed into flower pots
-   Bamboo can also be found in shipwrecks and jungle temples

### Barrels

_Do a barrel roll!_

-   Store things in them!
-   Rotate them!
-   Find them in villages!

### Bells

_Ding dong, who's there? A RAID? GET INSIDE!!!_

-   Trade with certain villagers to obtain the bell
-   Use the bell to alert villagers of nearby danger
-   A villager will ring the bell to alert other villagers of an impending raid
-   Ringing bells reveals all nearby mobs that can appear in raids

### Berries

-   Delicious!
-   Not very filling!
-   Plant your berries in the ground and look with your special eyes as they grow up into a strong, independent bush!

### Berry Bushes

-   Commonly found in taiga, taiga hills, and taiga mountains
-   Rarely found in snowy taiga and snowy taiga hills and snowy taiga mountains
-   You can stand inside them, but be careful, it will hurt to move
-   Has four stages of growth: sapling, no berries, some berries, full berries
-   Drops one or two berries in younger stage, then two or three in full growth stage
-   Supports bone meal!
-   Doesn't support silk touch!

### Biome based architecture for villages

-   Villages have recieved an updated look, with several new themes
-   The theme depends on the biome the village is in, taking both climate and to available resources into consideration
-   Uses the new mysterious jigsaw block for generation
-   Adds new structure files, quite many actually

### Blast Furnace

-   A new furnace upgrade that allows for smelting ores and melting metals faster than the traditional furnace
-   Can be crafted via three smooth stone, one furnace, and five iron ingots
-   Added to world gen in some villager buildings

### Campfires

Come one, come all, and toast your buns around the campfire!

-   A decorative fireplace without fire spread
-   Cooks up to four foods, but slowly
-   Acts as a smoke signal you can see very (VERY!) far away when a hay bale is below (hint: think note blocks!)
-   Cosy light source
-   Can be lit/unlit

### Cartography Table

-   New functional block that provides an easier and simpler way of cloning, extending, and locking of maps
-   New map functionality with cartography table
    -   Map Locking: allows you to lock maps in the cartography table with a glass pane so that they can no longer be modified
-   Fancy UI to more closely represent what the recipes actually do functionally
-   Crafted with two planks and two paper

### Cat and ocelot split

Anti-fusion!

-   Stray cats can be tamed
-   Tamed cats can give lovely (or less lovely) morning gifts to their owners
-   Ocelots can't be tamed, but might start trusting you if you feed them with fish
-   Phantoms are terribly scared of cats - how convenient!
-   Cat collars can now be dyed
-   Added several new cat skins!

### Community Suggestions

As it turns out, you guys have GREAT suggestions!

-   Leaves now have a small chances to drop sticks
-   Chorus fruit flowers now break when shot by an arrow
-   Dead bushes can now be used as furnace fuel
-   Rabbit stew and beetroot soup have been changed to a shapeless recipe
-   Creepers will now drop records when killed by Stray in addition to skeletons
-   Dispensers with shears in them will now shear sheep that have wool in front of them
-   TNT and TNT minecart explosions now have 100% drop rate

### Composter

-   Instead of eating your veggies you can make fertilizer from it!
-   Crafted with 3 planks and 4 fences

### Crossbows

This is such a fearsome weapon that it makes us quiver!

-   Shoots arrows with base power slightly stronger than the bow, but has less durability
-   Three unique enchantments
-   Fun, challenging advancements
-   New loading mechanics
-   Unique load animation

#### Enchantments

-   Choose between the following three enchantments for your crossbow:

##### Multishot (I)

-   Ever wanted to shoot more than one arrow at once? Look no further! With multishot, your crossbow splits your arrow into three, shooting the usual arrow straight ahead and two more at angles off to the sides!
-   Cannot be combined with piercing

##### Piercing (I, II, III, IV)

-   With this pointy enchantment, arrows shot from your crossbow can travel through mobs, hitting more than one per shot
-   The number of mobs that can be damaged by a single arrow is equal to the level of this enchantment + 1
-   Cannot be combined with multishot

##### Quick Charge (I, II, III)

-   Each level of quick charge decreases the amount of time it takes to fully charge your crossbow by .25 seconds

#### Loading Mechanics

-   To charge the crossbow, hold down the "Use" button
-   Once the crossbow string has been pulled all the way back, let go
-   Boom! Your crossbow is now loaded and ready to shoot with a single click of the "Use" button

### Decorative Blocks

Oh my, a bunch of new blocks!

-   Changed all existing stone slabs to smooth stone slabs (same look, new name!)
-   Changed all existing signs to oak signs (same look, new name!)
-   Made smooth stone slabs craftable from smooth stone
-   Added spruce, birch, jungle, acacia and dark oak signs
-   You can now right click on signs with dyes to change the text colour
-   Added stone stairs and slabs
-   Added granite stairs, slabs and walls
-   Added polished granite stairs and slabs
-   Added diorite stairs, slabs and walls
-   Added polished diorite stairs and slabs
-   Added andesite stairs, slabs and walls
-   Added polished andesite stairs and slabs
-   Added sandstone walls
-   Added smooth red sandstone stairs and slabs
-   Added smooth quartz stairs and slabs
-   Added brick walls
-   Added stone brick walls
-   Added mossy stone brick stairs, slabs and walls
-   Added nether brick walls
-   Added end stone brick stairs, slabs and walls
-   Added prismarine walls
-   Added red sandstone walls
-   Added red nether brick stairs, slabs and walls
-   Added smooth sandstone stairs and slabs
-   Added mossy cobblestone stairs and slabs
-   Made smooth stone obtainable by smelting stone
-   Made smooth sandstone obtainable by smelting sandstone
-   Made smooth red sandstone obtainable by smelting red sandstone
-   Made smooth quartz obtainable by smelting quartz block
-   Changed the recipe of nether brick fence to four brick blocks and two brick items
-   Changed the recipe of signs to require all of the same wood type, not any wood type

### Dyes

We've been dyeing to tell you more about this!

-   Separated bone meal, ink sac, cocoa beans, and lapis lazuli into their own dyes
-   Unified all dye names (red, yellow, and green dyes no longer have special names)
-   Added new recipes to obtain coloured stained glass and coloured carpet

### Fletching Table

-   Crafted with four planks and two flint
-   Villagers use it as a work site

### Flowers

Get your green fingers!

-   To celebrate our new dyes, we added... flowers! Say hello to cornflower, wither rose and lily of the valley
-   Be careful of the wither rose! Don't let its subdued beauty lull you into a false sense of security...

### Fox

What do they say? ...but really, what do they say?

-   Foxes come in two variants: red and snowy
-   Foxes are nocturnal
-   Foxes will hunt rabbits, chickens, and fish
-   Foxes are hunted by wolves and polar bears
-   Foxes are nimble and quick, so sneak up on them carefully!
-   Breed foxes with berries
-   If you breed two foxes, their offspring will trust you forever
-   Trusting foxes will defend you, but will still eat your chickens
-   Foxes like to eat any and every food item they find on the ground
-   You may find a fox exploring a nearby village at night

### Grindstone

-   Moved inventory and crafting table repairing into the grindstone, this will be its new home
-   Has the ability to remove all non-curse enchantments from an item; for each enchant removed some XP is reimbursed

### Hero of the Village

-   Hero of the Village effect causes the cost of trades with villagers to be reduced by a percentage and scales with level of the effect.
-   Hero of the Village additionally causes Villagers to occassionally toss items to you to thank you!

### Horse Leather Armor

-   Added a new armour type for horses
-   Dye it in lots (yes, LOTS!) of different colours

### Illager Patrols

-   Spawn in the world as a pack of five random illagers
-   Spawn in all variations of the Plains, Taiga, Deserts, Savanna
-   Scary-spooky new banner can be found a top the patrol leaders head

### Lantern

Wait, another new block!?

-   The lantern is a new light source
-   The lantern can be placed either hanging under a block or on top of a block
-   It gives slightly more light than the torch

### Lectern

Ermahgerd berks... holder... thingy?

-   Right-click an empty lectern to place book
-   Right-click a lectern with book to open
-   Current page is persistent and shared between all readers
-   Emits redstone pulses when page is changed
-   Use a comparator to get book reading progress

### Loom

Bröther, may I have some lööm?

-   New and easier way of being able to apply patterns to banners, can still only apply six max patterns to a banner
-   Generic patterns now only require one dye in order to create patterns, instead of one to eight (depending on the pattern)
-   Special banner patterns (oxeye daisy, creeper skull, wither skeleton skull, enchanted golden apple) can now be crafted. These patterns don't consume the pattern item when used in the loom
-   Old pattern recipes in the crafting table for apply patterns to banners have been removed

### New blocks

Even more! Can you believe it?!

-   Added barrel
-   Added smoker
-   Added blast furnace
-   Added cartography table
-   Added fletching table
-   Added grindstone
-   Added lectern
-   Added smithing table
-   Added stonecutter
-   Added village bell

### New Textures

The extraordinary Minecraft Texture Update has been available at minecraft.net for quite a while, and now it’s finally available by default in the game

-   We’ve renovated the old textures of Minecraft and polished them for a new beginning
-   If you're feeling nostalgic you can always enable the old "Programmer Art" textures in the resource pack menu

### Noteblock

-   5 new Noteblock sounds have been added: Iron Xylophone, Cow Bell, Didgeridoo, Bit, and Banjo
-   1 previously existing, but unused, sound effect has now been made available: Pling
-   The new Noteblock sounds can be heard by using Iron Blocks, Soul Sand, Pumpkins, Emerald Blocks, Hay Blocks, or Glowstone

### Panda

We bring pandamonium!

-   Pandas come in different types and personalities! There is even a rumour about a brown panda...
-   Pandas love bamboo! They kinda like cake as well
-   Pandas can be bred, and the cubs can inherit traits through a special panda inheritance system
-   Pandas spawn naturally in the new bamboo forest biome
-   Pandas drop bamboo when killed. Don't kill pandas :(
-   Most importantly: pandas are cute and terribly silly!
-   The babies are, in general, even more silly than their parents. Silly panda cubs!

### Pillager

-   A new type of illager that, well, pillages!
-   Pillagers wield a new weapon, the crossbow!

### Pillager Outpost

-   As if finding pillager patrols out in the wild wasn't scary enough, keep an eye out during your explorations and you may just find one of their outposts
-   Can be found in any biome villages generates in
-   Takes advantage of the new mystery block, the jigsaw, for generation

### Raids

-   If you find an illager wearing a banner on its head, be careful not to kill it!
-   If you do kill it, you might find yourself facing a 'Bad Omen'
-   If you find yourself with a bad omen buff, be _especially_ careful not to walk into a village
-   If you do walk into a village with it? Best of luck!

### Ravager

-   A fearsome new foe who packs quite a wallop. Grab your sword and shield and prepare to get knocked around!

### Rewrite of Book & Quill editing

The pen is mightier than the sword. Unless you're fighting a pillager!

-   Movable cursor for free text editing
-   Selection support
-   Copy & paste
-   Keyboard and mouse handling
-   Improved page filling and line wrapping
-   Increased book length (100 pages)

### Rewrite of Sign editing

-   Movable cursor for free text editing
-   Selection support
-   Copy & paste

### Scaffolding

Here to make your life easy! No strings attached.

-   Easily buildable
-   Easily destroyable
-   Easily climbable
-   Easily the best use of your Bamboo

### Smithing Table

-   Crafted with 4 planks + 2 iron ingots
-   Villagers use it as a work site

### Smoker

-   New furnace upgrade that allows for the smelting of foods faster than the traditional furnace
-   Can be crafted via four Logs, and one furnace
-   Added to world gen in some villager buildings

### Stonecutter

-   New functional block that provides a simpler way to craft various stones (stairs, slabs, chiseled, and more)
-   Crafted with three stone + one iron ingot

### Suspicious Stew

Hmmmm...

-   Found in buried ship treasure chests
-   Also craftable!
-   Whoever eats this stew will be imbued with an unknown effect for several seconds!
-   Whoever crafts the stew will know what effect they gave it

### Trading changes

-   Lots of new trades have been added
-   Villagers now level up in a new way
-   The trading UI is updated (WIP)
-   The trading prices now depend on your reputation and on demand
-   The villagers will restock up to two times per day (if they can work at their work station!)
-   Added visual trading; villagers will display the item they want to trade for your in-hand item

### Villager changes

-   Villagers and zombie villagers now have new fancy skins
-   Added mason profession
-   Cured zombie villagers retain their trades
-   Villagers now have a daily schedule. They will for example go to work and meet up at the village bell
-   Each villager will try to find their own bed and work station
-   Each profession has a specific block that works as a work station for them (e.g. lectern for the librarian and cauldron for the leatherworker)
-   Village detection is now based on beds, job sites, and meeting points instead of doors
-   Iron Golems will spawn when enough villagers meet

### Wandering Trader

-   A mysterious trader that can be randomly found around
-   Provides various random trades from a variety of different biomes
-   Is escorted around by a few llama with some sweet new decorations! (Careful! They can be temperamental)

## Technical

-   New optional tag for block items: `BlockStateTag` - contains map of block state properties to be overwritten after block is placed (note: item model is not affected).
-   Creative menu search box now accepts tags (starting with `#`)
-   Tooltip in creative search menu now lists item's tags
-   New item model property `custom_model_data`, backed directly by `CustomModelData` integer NBT field
-   Extended NBT path syntax
-   New sub-commands for NBT manipulation and querying
-   New chat component for displaying values from NBT
-   Textures for potion effects, paintings and particles are now split into individual files. As a side effect, they can now be animated in the same way as blocks and items.
-   Sprites for particles can now be configured in resource packs (though particle still controls how they will be used).
-   Added entity type tags. They work exactly the same as other ones (blocks, items and fluids, etc). Stored in `tags\entity_types\`
-   Added a feature registry
-   Added a registry for decorators
-   Added a registry for carvers
-   Added a registry for surface builders
-   Item lore tag now uses chat component syntax
-   Profiler now lists time spent waiting for next tick (mostly idling or waiting for asynchronous tasks). Previous root is now listed under `tick`
-   Paintings and item frames in item form now support `EntityTag` (same as spawn eggs)
-   Command parser now accepts `'` as string quotes. Inside `'`\-quoted string `"` is handled as normal character and requires no escaping (and vice-versa) - so now it's easier to input text components in NBT
-   New Light engine!
-   `loot` command - evaluates loot commands items in various contexts
-   Block drops are now controlled by loot tables
-   Players, armor stands and wither now have loot tables
-   Performance Improvements
-   Added `schedule` command for delaying execution of functions
-   Time arguments in `time set`, `time add` and `schedule function` can now have units (`t` - ticks, `s` - seconds, `d` - days). Fractions are allowed (for example `0.5d`), but result will be rounded to nearest integer.
-   `teammsg` command - Sends a message to all players on your team.

### Advancements

-   Entity type predicates now accept tags (`#baz`)

#### Damage source predicate

-   Damage source predicate now has option: `is_lightning`

#### Entity equipment predicate

-   Entity predicate now accepts `equipment` field
-   This predicate can contain up to six fields: `head`, `chest`, `legs`, `feet`, `mainhand`, `offhand`
-   If this predicate is non-null, test will fail for entities that have no equipment (i.e. not mobs, players or armor stands)

#### Entity flags predicate

-   Entity predicate now accepts `flags` field
-   Available tests: `is_on_fire`, `is_sneaking`, `is_sprinting`, `is_swimming`, `is_baby`

### Chat components

#### NBT chat component

-   Block variant `{"nbt": <path>, "block":"<coordinates>"}`, where `<coordinates>` field uses same format as `/setblock`
-   Entity variant `{"nbt": <path>, "entity":<selector>}`, where `selector` field uses same format as `/kill`
-   Additionaly, if field `interpret` is present and set to `true`, contents of selected tags will be interpreted as chat components
-   Works same as selector components:
    -   if there are no elements, returns empty string
    -   if there are multiple elements, merges them with `,`

### Commands

-   `type` field in `@` selectors now accepts entity type tags (`type=#foo` and `type=!#bar`)
-   Item frame contents can now be modified with `/replaceitem`

#### `data`

-   `data modify <block or entity> <path> <operation> <source>`
    -   Apply operation to selected fields
    -   Basic operation: `set` - replaces value
    -   List operations: `insert <index> | prepend | append`
    -   Object operations: `merge`
    -   Sources:
        -   `from <block or entity> <path>` - copies value from existing tag
        -   `value <nbt>` - uses NBT literal

#### `execute`

-   `execute if data <block or entity> <path>` (and `execute unless`)
    -   when used as command, return count of matched elements
    -   when used as part of command, continues on non-zero(`if`) or zero(`unless`) count

#### `loot`

General syntax: `loot <target> <source>`

##### Sources

-   `fish <loot table id> <fishing location> [tool <item>|mainhand|offhand]` - uses fishing context
-   `loot <loot table id>` - uses loot chest context (can be also used for advancement awards and cat gifts)
-   `kill <entity selector>` - simulates entity drops
-   `mine <mining location> [tool <item>|mainhand|offhand]` - simulates block drops

##### Targets

-   `spawn <position>` - drops in world
-   `replace` - works similar to `/replaceitem`. If `count` is missing, command will try to place all returned items. If `count` is higher than number of items, remaining slots will be cleared.
    -   `entity <entity selector> <start slot> [<count>]` - replaces range of slots.
    -   `block <position> <start slot> [<count>]` - replaces range of slots.
-   `give <player selector>` - inserts items into player's inventory (similar to `/give`)
-   `insert <position>` - inserts items into container (similar to shift left-click)

#### `schedule`

Schedules function or tag to run in `<time>` gametime ticks. Returns trigger time. Any tag or function can be scheduled only once. Calling this command for already scheduled function or tag will replace older record.

#### `teammsg`

General syntax: `teammsg <message>` Sends `<message>` to all players on the team of the player who runs the command. Available to all players on a team.

##### Alias

-   `tm <message>`

#### NBT paths

-   Can now return multiple values. When used as target, modification will be applied to every element
-   When setting location and no elements are found, new matching element will be created:
    -   For example writing to `Items[{Slot:10b}]` will either found element in `Items` for slot 10 or create new one
-   Add `[{k1:v1,k2:v2}]` to match objects in list that have matching fields
-   Add `{k1:v1,k2:v2}` to match objects (selects 0 or 1 elements, mostly as safeguard against mismatched entries)
    -   _Note:_ this also works with root object: `{}` is valid path for referencing root object
-   Allow negative indices in `[index]` to select element from end (i.e. `[-1]` is last element, `[-2]` second to last, etc)
-   Add `[]` to select all elements from list

### Dedicated server

#### `server.properties`

-   `difficulty` and `gamemode` settings now accept string names (integer values are still allowed as legacy option)
-   Server will exit faster is `eula.txt` is not set

#### Command line

-   Added new option `--help`. Not going to tell you what it does.
-   New command line option `initSettings` initializes `eula.txt` and `server.properties` with defaults, then exits

### Light engine

We are de-lighted to have a new light engine!

-   Moved light storage from chunks to a separate structure
-   Moved light calculation from all over the code to a self-contained place
-   Moved light computation off the main thread (on the server)
-   Added support for directional opacity of blocks (used by slabs, stairs, snow layers, non-full-block dirt-related blocks and extended piston base blocks)
-   Also made enchanting table, end portal frame block and piston base block block light correctly

### Loot tables

**Note:** Some functions and predicates (like `set_name`, `set_lore`, `fill_player_head`, `entity_properties`) accept entity target parameter. Possible values are:

-   Block drops are now controlled by loot tables (stored in `loot_tables/blocks/`)
-   Tables and pools accept functions
-   Added new loot table entry types: `dynamic`, `tag`, `alternatives`, `sequence`, `group`
-   Added new loot table functions: `apply_bonus`, `explosion_decay`, `copy_name`, `limit_count`, `set_contents`, `set_loot_table`, `set_lore`, `fill_player_head`, `copy_nbt`
-   Added new loot table conditions: `survives_explosion`, `block_state_property`, `table_bonus`, `match_tool`, `damage_source_properties`, `location_check`, `weather_check` and two special modifiers: `inverted` and `alternative`
-   Integer values can now specify random number generator (available types: `constant`, `uniform`, `binomial`). If omitted, defaults to uniform
-   Loot tables have optional `type`, used to validate function usage (available types: `empty`, `chest`, `fishing`, `entity`, `advancement_reward`, `block`). Using function that references data not available in given context (for example, block state in fishing table) will cause warning
-   New entity parameter in predicates: `direct_killer` - allows access to projectiles etc.
-   `this` - usually entity performing action
-   `killer_player`
-   `killer` - primary source of damage
-   `direct_killer` - direct source of damage (may be different than `killer` - for example, when killing with bow, `killer` will be bow user, while `direct_killer` will be arrow entity)

#### Modified conditions

##### `entity_properties`

Now uses same predicate syntax as advancements (like `player_killed_entity`). Parameters are now described in `predicate` field. If this field is empty object, any entity is accepted (but still has to be present).

#### Modified functions

##### `set_name`

Added new parameter `entity` (see note about entity target parameter for values). If present, name will be resolved with that entity (allows using selector and score components).

#### New conditions

##### `alternative`

Joins conditions from parameter `terms` with "or" ("disjunction").

##### `block_state_property`

Check properties of block state.

###### Parameters

-   `block` - id of block. Test will fail, if broken block does not match
-   `properties` - map of `property:value` pairs

##### `damage_source_properties`

Checks damage source. Same syntax as `entity_properties`, but uses damage source predicate (see `player_hurt_entity` advancement trigger).

##### `inverted`

Inverts condition from parameter `term`

##### `location_check`

Applies advancement location predicate.

###### Parameters

-   `predicate` - predicate applied to location. Uses same structure as advancements.

##### `match_tool`

Checks tool (available for block breaking and fishing).

###### Parameters

-   `predicate` - predicate applied to item. Uses same structure as advancements.

##### `survives_explosion`

Return true with `1/explosion radius` probability.

##### `table_bonus`

Passes with probability picked from table, indexed by enchantment level.

###### Parameters

-   `enchantment` - id of enchantment
-   `chances` - list of probabilities for enchantment level, indexed from 0

##### `weather_check`

No surprise here.

###### Parameters

-   `raining` - optional boolean
-   `thundering` - optional boolean

#### New entries

##### `alternatives`

Tests conditions of child entries and executes first that can run. Has no weight or quality, but may have conditions.

##### `dynamic`

Gets block specific drops. Currently implemented:

-   `minecraft:contents` - block entity contents, for shulker boxes
-   `minecraft:self` - for banners and player skulls

##### `group`

Executes child entries when own conditions pass. Has no weight or quality.

##### `sequence`

Executes child entries until first one that can't run due to conditions. Has no weight or quality, but may have conditions.

##### `tag`

Adds contents of item tag. Fields:

-   `name` - id of tag
-   `expand` - if false, entry will return all contents of tag, otherwise entry will behave as multiple item entries (all with same weight and quality)

#### New functions

##### `apply_bonus`

Applies one of predefined bonus formulas.

###### Common fields

-   `enchantment` - id for enchantment level used for calculation
-   `formula` - type of used bonus formula
-   `parameters` - values required for formula (depend on type)

###### Formulas (based on existing fortune bonuses):

-   `binomial_with_bonus_count`:
    -   parameters: `extraRounds : int`, `probability : float`
    -   adds random value using binomial distribution with `n <- level + extraRounds` and `p <- probabilty`
-   `uniform_bonus_count`
    -   parameters: `bonusMultiplier`
    -   adds random value using uniform distribution from 0 to `bonusMultiplier * level`
-   `ore_drops`
    -   no parameters
    -   applies formula `count * (max(0, random(0..1) - 1) + 1)`

##### `copy_name`

Copies display name from block entity to item (see enchanting table behaviour)

##### `copy_nbt`

Copies NBT from source to item tags.

###### Parameters

-   `source` - may be `this`, `killer`, `killer_player` or `block_entity`
-   `ops` - list of copy operations:
    -   `source` - source path (same as `/data` commands)
    -   `target` - target path
    -   `op` - `replace`, `append` (for lists), `merge` - for compound tags

##### `explosion_decay`

Applies flat chance (equal to `1/explosion radius`) for every item to be destroyed (items in stack are processed separately)

##### `fill_player_head`

Copies player profile info to player head item.

###### Parameters

-   `entity` - source of profile (see note about entity target parameter for values, will do nothing if it's not player).

##### `limit_count`

Limits count of every item stack to range.

###### Parameters

-   `limit`:
    -   `min` - optional
    -   `max` - optional

##### `set_contents`

Populates `BlockEntityTag.Items` (works for shulker boxes, chests, etc.) with items from entries.

###### Parameters

-   `entries` - list of entries (same as in pool)

##### `set_loot_table`

Sets `BlockEntityTag.LootTable` and `BlockEntityTag.LootPoolSeed` tags.

###### Parameters

-   `name` - id of loot table
-   `seed` - seed (if omitted or 0, `LootPoolSeed` will not be set)

##### `set_lore`

Adds or replaces lore lines.

###### Parameters

-   `lore` - list of lines (in chat component format) to be added
-   `replace` - if true, previous lore is erased
-   `entity` - if present, name will be resolved with selected entity (see note about entity target parameter for values).

### Performance Improvements

-   Improved performance of Redstone Wire when depowering.
-   Improved performance of Fish.
-   Mobs that would spawn and then despawn from being too far away from the player the next tick no longer spawn.

### Refactoring

#### Changes to render options

-   Removed option to turn off VBO in the game settings. VBO are now always used.

### Worldgen

-   Most of the biome related features now have a registry and their configuration can be serialized. I wonder what this is going to be used for...
-   Added "Bamboo Jungle" and "Bamboo Jungle Hills" biomes which behave like a normal jungle, but have bamboo!

---

# Minecraft: Java Edition 1.13 Aquatic

## Aquatic changelog

### General

-   All undead mobs now sink
-   Changed underwater visibility
    -   Your vision will gradually increase the longer you're underwater
-   Overhauled world generation
-   Overhauled command parser
-   Added new world type "Buffet"
    -   Allows you to create worlds with a unique biome
    -   More features will come to the Buffet world type in later updates
-   Added a bunch of new sounds
-   Added three new pieces of music
-   Added underwater ambience sounds
-   Added a swimming animation
    -   Press your sprint key underwater to start swimming
-   Added data packs
    -   Allows you to edit recipes, tags, loot tables, functions, and advancements
-   Added new advancements
-   Some blocks can now be waterlogged
    -   Use a water bucket on a block to surround it with water
-   Added an "Optimize World" button (singleplayer -> edit world -> optimize world), which upgrades an entire world from older version to the latest version in one go

### Blocks

-   Added blue ice
    -   Found in icebergs
-   Added coral blocks
-   Added coral fans
-   Added coral
-   Added conduit
    -   Combine 1 heart of the sea together with 8 nautilus shells to create the conduit
    -   Makes your life underwater a lot easier
-   Added dried kelp block
    -   Combine 9 dried kelp to create a kelp block
-   Added kelp and seagrass
-   Normal pumpkins no longer have a face
-   Added carved pumpkin
    -   Use a shear on a pumpkin to carve it
-   Added sea pickles
-   Added bubble columns
    -   Use either magma blocks or soul sand to create a bubble column
-   Added wood block
    -   Combine 4 logs of any type to create a wood block
-   Added stripped wood
    -   Right click with an axe on either logs or wood to create stripped wood
-   Added prismarine stairs and slabs
-   Added variantes for all 6 types of woods for pressure plates, trapdoors and buttons
-   Added turtle eggs
    -   Be sure to protect them from hostile mobs

### Mobs

-   Added tropical fish
-   Added turtles
    -   A friendly mob that lays eggs on beaches
-   Added dolphins
    -   A neutral mob that will lead you to treasure if you feed it fish
    -   Make sure to not hit them unless you want an entire pod after you
-   Added the Drowned
    -   Hostile mob that can be found naturally in oceans and rivers
    -   Can spawn with tridents
    -   Zombies will convert into Drowned if they're underwater for too long
-   Added Phantoms
    -   Get a good nights sleep if you don't want these coming swooping at you
    -   Drops phantom membrane
-   Added cod, salmon, and pufferfish as mobs
-   Changed the horse model to be more consistent with other mobs
-   Removed Herobrine

### Items

-   Added tridents
    -   The newest weapon in Minecraft
    -   Drops from the Drowned
    -   Works as both a melee and a ranged weapon
-   Added trident enchantments
-   Added the ability to catch fish with buckets
-   Added map markers
    -   Hold a map in your hand and right click on a banner to create a marker
-   Added heart of the sea
    -   Found in buried treasure
-   Added nautilus shells
    -   Drops from Drowned and can be found from fishing
-   Added phantom membrane
    -   Dropped by Phantoms and gives you the ability to repair elytra and used for Potion of Slow Falling
-   Added scutes
    -   Dropped by baby turtles when they grow up
-   Added Potion of the Turtle Master
    -   Gives you Slowness IV and Resistance III
-   Added Potion of Slow Falling
-   Added dried kelp
-   Added spawn eggs for all the new mobs

### Biomes

-   Added multiple ocean biomes
-   Added coral reefs
-   Added underwater caves
-   Added underwater ravines

### Structures

-   Added shipwrecks
-   Added underwater ruins
-   Added icebergs

---

