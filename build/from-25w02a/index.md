# Minecraft Snapshot 25w02a

It's the first snapshot Wednesday of 2025, and we have some fun new features to kick off the new year. This snapshot adds new ambient features to the game, including wildflowers, leaf litter, and falling leaves. Pigs are getting two new variants: you may venture into the colder biomes to find the cold pig, or head for sunnier spots to meet its counterpart – the warm pig! Lodestones are also becoming easier to craft, making them more accessible in the early game. Now you'll only need an iron ingot with your chiseled stone bricks.

## New Features

-   Added new falling leaves particles to Leaf blocks without particles
-   Added cold and warm variants for the Pig
-   Added Wildflowers block
-   Added Leaf Litter block

### Leaves block particles

-   All Leaves blocks now have chance of spawning falling leaf particles
-   These blocks are affected by this change:
    -   Oak Leaves
    -   Jungle Leaves
    -   Acacia Leaves
    -   Dark Oak Leaves
    -   Spruce Leaves
    -   Mangrove Leaves
    -   Birch Leaves
    -   Azalea Leaves
    -   Flowering Azalea Leaves

### Pig Variants

-   New Pig variants have been added, the variant is determined by the biome they spawn in
-   Temperate Pig - The Pig we are all familiar with
    -   Spawns by default where the cold and warm Pig variants do not spawn
-   Cold Pig - A variant that spawns in the following biomes:
    -   Old Growth Pine Taiga
    -   Old Growth Spruce Taiga
    -   Taiga
    -   Snowy Taiga
    -   Windswept Hills
    -   Windswept Gravelly Hills
    -   Windswept Forest
-   Warm Pig - A variant that spawns in the following biomes:
    -   Savanna
    -   Savanna Plateau
    -   Windswept Savanna
    -   Jungle
    -   Sparse Jungle
    -   Bamboo Jungle
    -   Eroded Badlands
    -   Wooded Badlands
    -   Badlands
-   When bred by a player, a baby Pig variant will not be chosen by the current biome, but instead randomly selected from one of the parents' variants

### Wildflowers

-   Wildflowers are a new type of flower which grow in Birch Forests, Old Growth Birch Forests and Meadows
-   Wildflowers can have different amounts of flowers in one block space
    -   Up to four Wildflowers can be placed in the same block space
    -   Placing a Wildflower into an already placed Wildflowers block increases the amount of flowers
    -   Using Bone Meal on Wildflowers will produce more Wildflowers
-   Wildflowers can be placed in four orientations
-   Wildflowers can be crafted into Yellow Dye

### Leaf Litter

-   Leaf Litter is a new type of decorative block which can be found in the Forests, Dark Forests and Wooded Badlands
-   Leaf Litter can have different amounts of leaves in one block space
    -   Up to four Leaf Litter pieces can be placed in the same block space
    -   Placing a Leaf Litter into an already placed Leaf Litter block increases the amount of leaves
-   Leaf Litter can be placed in four orientations
-   Leaf Litter can be created by smelting any type of Leaves block
-   Leaf Litter can be used as fuel for smelting
-   Leaf Litter has unique block sounds

## Changes

-   Lodestones have a new crafting recipe and can now be found in Ruined Portals
-   Added new break, place, step, fall and hit sounds for Iron Blocks, Iron Bars, Iron Trapdoors, Iron Doors and Heavy Weighted Pressure Plates
-   Zombified Piglins now need to be killed by a Player to drop the Player-specific loot
    -   This makes them consistent with all other mobs in the game
-   Chunks loaded by a portal will now be re-loaded again automatically when the world is reopened
-   Farm animals can now spawn in Badlands
-   Short Grass now generates slightly sparser in Meadows
-   The volume of the narrator is now affected by the game's configured volume in the 'Voice' category
-   Uploading a world to Realms will now enable Command Blocks by default
-   It is now possible to upload Hardcore singleplayer worlds to Realms
-   Bubble columns produce less particles and sounds when entities that are unaffected by them are inside them
-   If the game detects that the last startup did not complete normally, the fullscreen option will now be reset

### Garden Awakens Changes

-   Pale Garden biome now occupies more space that was previously taken by Dark Forest
-   Woodland Mansions can now generate in Pale Garden biome
-   Pale Oak Leaves and Pale Oak Saplings have an updated map color
-   Creakings can now be named using Name Tags
    -   Named Creaking will persist through the day
        -   However, it will still be torn down if stuck with a player or if it is too far from its Heart
    -   Named Creakings are still resistant to all damage, and can communicate with their Hearts via particles
-   Creaking Hearts correctly placed between Logs have a new dormant texture during the day
    -   Dormant Creaking Hearts cannot spawn new Creakings and Resin
-   Transition between the awake and dormant states for Creaking Hearts and transition of Eye Blossoms is now based on the fixed day time
    -   All these behaviors are no longer affected by weather or dimension brightness

### Lodestone Changes

-   The Lodestone is now crafted from 1 Iron Ingot surrounded by 8 Chiseled Stone Bricks
-   Lodestones can now be found as loot at Ruined Portals in the Overworld or Nether

## Technical Changes

-   The Data Pack version is now 62
-   The Resource Pack version is now 47

## Data Pack Version 62

-   Changes to commands
-   Updated data format of Text Components
-   `structure_block` in the `load` mode has now a new option: `Strict Placement`
    -   If set to `false`, the blocks in the placed structure will not trigger block updates, block entity side effects, or shape updates
-   The `Owner` field of tamed animals is no longer restricted to referencing Players
-   Updated data format of equipment drop chances in entity data
-   Added data-driven registry for pig variants
-   Added `pig` entity sub-predicate for matching pig variants

### Commands

-   Text Components in commands such as `/tellraw` or `/title` are now specified with SNBT instead of JSON
-   Text Style in the `/scoreboard` command when specifying the `styled` number format is also now specified with SNBT instead of JSON
-   The behavior of `setblock` and `fill` commands have changed in how they handle block entity data:
    -   If the block entity data is not specified, and the existing block has data, the block entity data will be preserved
    -   If the block entity data is specified, the block entity data will be set to the specified value
    -   To clear the block entity data explicitly, you must now specify the block entity data as `{}`
    -   The operation is now successful if either the block state changed or the block entity data changed
-   `fill`, `clone`, `setblock` and `place template` accept a new option: `strict`
    -   If specified, the command will place blocks as-is without triggering block updates and shape updates
-   The `replace` option in the `fill` command is no longer terminal, and can be followed with additional options
-   New syntax for commands to use the new `strict` option, and more flexible use of `replace`:
    -   `fill <from> <to> <block> keep`
    -   `fill <from> <to> <block> [replace <filter>]? [strict|destroy|hollow|outline]?`
    -   `clone [from <sourceDimension>]? <begin> <end> [to <targetDimension>]? <destination> [strict]? [[replace|masked|filtered <filter>] [force|move|normal]?]?`
    -   `setblock <pos> <block> [destroy|keep|replace|strict]?`
    -   `place template <template> [<pos> [<rotation> [<mirror> [<integrity> [<seed> [strict]?]?]?]?]?]?`

### Text Component Data Format

-   Text Components are no longer stored as JSON wrapped by a string
-   The format itself is the same as before, but inlined directly into the outer structure
-   For example, the item component `minecraft:custom_name="{\"text\":\"Renamed item\"}"` will become `minecraft:custom_name={text:'Renamed item'}`
-   This includes Text Components passed as arguments to commands such as `/tellraw` or `/title`
    -   For example, `/tellraw @s "\"text\":\"Hello world\""` may become `/tellraw @s {text:'Hello world'}`
-   Note: in the case where Text Components are embedded in NBT, no distinction exists between boolean and integer types
    -   To pass boolean arguments to translations, you must use the string form
-   For Text Components with the `nbt` type and `interpret` set to `true`, Text Components will be parsed from the given NBT directly rather than converting to string and parsing as JSON
-   The format of hover and click events has been updated

#### Hover Events

-   The `hoverEvent` field has been renamed to `hover_event`
-   The legacy `value` field (which was parsed from a rendered text component) is no longer supported
-   For the `show_text` action:
    -   `contents` field has been renamed to `text`
    -   e.g. `{action:'show_text',contents:'Hello world'}` becomes `{action:'show_text',text:'Hello world'}`
-   For the `show_item` action:
    -   The `contents` field has been inlined
    -   e.g. `{action:'show_item',contents:{id:'minecraft:stick',count:2}}` becomes `{action:'show_item',id:'minecraft:stick',count:2}`
    -   If contents was specified only as an item id, it is replaced with the full format and inlined
    -   e.g. `{action:'show_item',contents:'minecraft:stick'}` becomes `{action:'show_item',id:'minecraft:stick'}`
-   For the `show_entity` action:
    -   The `contents` field has been inlined
    -   The `id` field has been renamed to `uuid`
    -   The `type` field has been renamed to `id`
    -   e.g. `{action:'show_entity',contents:{id:[I;0,0,0,0],type:'minecraft:pig'}}` becomes `{action:'show_entity',uuid:[I;0,0,0,0],id:'minecraft:pig'}`

#### Click Events

-   The `clickEvent` field has been renamed to `click_event`
-   For the `open_url` action:
    -   The `value` field has been renamed to `url`
    -   The click event will no longer parse if not a valid URI with either `https://` or `http://` schemes, instead of simply not working
    -   e.g. `{action:'open_url',value:'https://minecraft.net'}` becomes `{action:'open_url',url:'https://minecraft.net'}`
-   For the `run_command` action:
    -   The `value` field has been renamed to `command`
    -   The click event will no longer parse if the command contains disallowed characters, instead of simply not working
    -   It is no longer required that the specified `command` field has a `/` prefix
    -   e.g. `{action:'run_command',value:'/say Hi'}` becomes `{action:'run_command',command:'/say Hi'}`
-   For the `suggest_command` action:
    -   The `value` field has been renamed to `command`
    -   The click event will no longer parse if the command contains disallowed characters, instead of simply not working
    -   e.g. `{action:'suggest_command',value:'/help'}` becomes `{action:'suggest_command',command:'/help'}`
-   For the `change_page` action:
    -   The `value` field has been renamed to `page`
    -   The `page` value now requires a positive integer instead of a string
    -   e.g. `{action:'change_page',value:'1'}` becomes `{action:'change_page',page:1}`
-   The `copy_to_clipboard` format is unchanged

### Tags

#### Block Tags

-   Added `#replaceable_by_mushrooms` - exhaustive list of all bocks that can be replaced as a mushroom is placed or grows
-   Added `#sword_instantly_mines` - blocks that are instantly mined by Swords

#### Item Tags

-   Added `#book_cloning_target` - item that can be crafted together with a Written Book to clone it

#### Biome Tags

-   Added `#spawns_cold_variant_farm_animals` - all biomes where cold variant of farm animals spawn
-   Added `#spawns_warm_variant_farm_animals` - all biomes where warm variants of farm animals spawn

### Entity Data

-   The `ArmorDropChances`, `HandDropChances`, and `body_armor_drop_chance` fields have been merged into a `drop_chances` field
    -   Format: map between equipment slot type and chance value
        -   Valid equipment slots: `head`, `chest`, `legs`, `feet`, `mainhand`, `offhand`, `body`
    -   If not specified or removed, chances will be assumed as default (`0.085f`)
    -   e.g. `drop_chances:{chest:0.1,feet:1.0}`
-   Drop chances with a default value will no longer be stored, and the `drop_chances` field is removed entirely if all defaults
-   Area Effect Clouds have a new field: `potion_duration_scale` (float)
    -   If not specified, defaults to `1.0`
    -   The duration of the potion effect applied is scaled by this factor
    -   Area Effect Clouds created by Lingering Potions will have a scale of `0.25`

### Pig Variants

-   Pig variants can be data-driven by adding entries to `data/<namespace>/pig_variant/<id>.json`
-   This feature is experimental
-   Fields in file:
    -   `model` - one of: `normal`, `cold`
    -   `texture` - texture id for this variant, resolves to `assets/<namespace>/textures/<path>.png`
    -   `biome` - single entry, list or a tag describing biomes in which this variant natually spawns
        -   If not specified, this variant will only be selected if no other variant matches the current biome

### Recipes

#### `crafting_transmute` Recipe Type

-   The `result` field now supports specifying a count and a components patch to apply to the result
-   The components patch is applied to the final transmuted item
-   The new format is an object with fields:
    -   `id` - item id
    -   `count` - positive integer (default: `1`)
    -   `components` - a component patch object (default: empty)
    -   e.g. `"result": {"id": "minecraft:stick", "count": 3, "components": {"!minecraft:damage": {}, "minecraft:enchantment_glint_override": {}}}`
-   The field can still be defined as before as an inline item id (e.g. `"result": "minecraft:stick"`)

### Item Components

#### New `weapon` component

-   When present, the 'Item Used' statistic will be incremented for each attack with the item
-   The specified amount of damage can be done to the item with each attack
-   Format: object with fields:
    -   `damage_per_attack` - non-negative integer (default: `1`)
        -   The amount to damage the weapon for each attack performed
    -   `can_disable_blocking` - boolean (default: `false`)
        -   If `true`, will disable a blocking Shield on successful attack
    -   e.g. `weapon={damage_per_attack:2}`

#### New `potion_duration_scale` component

-   When present, for items that have the `potion_contents` component, the duration of the applied effects will be scaled by this factor
-   This also applies to `custom_effects` in the `potion_contents` component, unlike the previous hardcoded scaling factor
-   If not specified, defaults to `1.0`
-   Format: non-negative float
    -   e.g. `potion_duration_scale=0.25`

#### `tool` Component

-   Added new optional field: `can_destroy_blocks_in_creative` (bool)
    -   If `false`, players cannot break blocks while holding this tool in Creative Mode
    -   If not specified, defaults to `true`

## Resource Pack Version 47

-   Added textures for new falling leaves particles
-   New and updated Pig textures
-   Added textures for new Wildflowers block
-   Added break, place, step, fall and hit sounds for Iron Blocks, Iron Bars, Iron Trapdoors, Iron Doors and Heavy Weighted Pressure Plates

### New and updated Pig textures

-   Added new textures for Pig variants:
    -   `cold_pig`
    -   `warm_pig`
-   Changed the size of `pig` texture

## Fixed bugs in 25w02a

-   [MC-7697](https://bugs.mojang.com/browse/MC-7697) Tridents or arrows shot through lava sometimes don't catch fire
-   [MC-55800](https://bugs.mojang.com/browse/MC-55800) Successful "/fill air destroy" commands give error message and return 0 for result/success
-   [MC-56653](https://bugs.mojang.com/browse/MC-56653) Zombified Piglins drop XP and rare drops if killed by anything while in angered state
-   [MC-90212](https://bugs.mojang.com/browse/MC-90212) You cannot hang on to climbable blocks while gliding with elytra
-   [MC-93185](https://bugs.mojang.com/browse/MC-93185) The exit portal in the end generates at highest block at 0 0 which can make it generate incomplete
-   [MC-97244](https://bugs.mojang.com/browse/MC-97244) The "minecraft:enchant.thorns.hit" sound event doesn't play when non-player entities are damaged by the thorns enchantment
-   [MC-113878](https://bugs.mojang.com/browse/MC-113878) Attribute modifiers description for chest is misleading / "When on body" instead of "When on chest"
-   [MC-118053](https://bugs.mojang.com/browse/MC-118053) Wolves with the Owner of a non-player are spawned sitting
-   [MC-118092](https://bugs.mojang.com/browse/MC-118092) Crafting recipe unlock toast says "New Recipes Unlocked!" even when only one recipe was unlocked
-   [MC-118470](https://bugs.mojang.com/browse/MC-118470) Narrator plays at full volume when volume is off
-   [MC-128079](https://bugs.mojang.com/browse/MC-128079) Statistic for using shears doesn't increase when mining certain blocks
-   [MC-135192](https://bugs.mojang.com/browse/MC-135192) Boats are immediately sunken if there is a string on the surface of the water
-   [MC-141297](https://bugs.mojang.com/browse/MC-141297) You cannot set lit state of redstone torches using setblock, debug stick and BlockStateTag, to be to opposite of the situation it would be in
-   [MC-165421](https://bugs.mojang.com/browse/MC-165421) Bubble columns have the opposite effect on tridents and wind charges
-   [MC-167125](https://bugs.mojang.com/browse/MC-167125) Rounding error on fall damage
-   [MC-183329](https://bugs.mojang.com/browse/MC-183329) Nether portal teleport overlay does not show up if the player has the nausea effect
-   [MC-183623](https://bugs.mojang.com/browse/MC-183623) Hardcore worlds in the world menu have a comma after the red exclamation mark
-   [MC-184681](https://bugs.mojang.com/browse/MC-184681) Customized worlds still say "Buffet world customization" since 20w21a
-   [MC-202226](https://bugs.mojang.com/browse/MC-202226) /recipe give or take for one recipe says "recipes"
-   [MC-220672](https://bugs.mojang.com/browse/MC-220672) Inconsistent pluralization in customize world preset heading source string
-   [MC-222876](https://bugs.mojang.com/browse/MC-222876) "Buffet world customization" is incorrectly capitalized
-   [MC-226772](https://bugs.mojang.com/browse/MC-226772) Shulker box opening / closing subtitle shows "Shulker"
-   [MC-241951](https://bugs.mojang.com/browse/MC-241951) Player momentum on X and Z axis are cancelled separately at low values
-   [MC-248099](https://bugs.mojang.com/browse/MC-248099) Mob pathfinding breaks after falling into water accidentally while walking
-   [MC-253721](https://bugs.mojang.com/browse/MC-253721) Wrong logs when running /op @a
-   [MC-260440](https://bugs.mojang.com/browse/MC-260440) Players can no longer activate swimming mode in water while flying with elytra
-   [MC-261385](https://bugs.mojang.com/browse/MC-261385) Bubble columns act differently at the surface depending on non-air blocks
-   [MC-262928](https://bugs.mojang.com/browse/MC-262928) The "minecraft:entity.player.hurt" sound is no longer played when players receive thorns damage from guardians or elder guardians
-   [MC-262939](https://bugs.mojang.com/browse/MC-262939) Changing dimensions or respawning with nausea effect active displays nether portal overlay
-   [MC-265514](https://bugs.mojang.com/browse/MC-265514) HRTF stuck on even when directional audio is set to off in update 1.20.2
-   [MC-267221](https://bugs.mojang.com/browse/MC-267221) "value" within "change\_page" clickEvent json looks for a string instead of an integer
-   [MC-267323](https://bugs.mojang.com/browse/MC-267323) Items fields with old boolean JSON formatting are cleared upon world update
-   [MC-270220](https://bugs.mojang.com/browse/MC-270220) Granting all advancements results in prolonged, disruptive and loud audio spam
-   [MC-271065](https://bugs.mojang.com/browse/MC-271065) Diagonal movement is not normalized when crouching or using certain items
-   [MC-272790](https://bugs.mojang.com/browse/MC-272790) Shulker boxes and other blocks in the end exit portal when it changes state are not dropped as items
-   [MC-273338](https://bugs.mojang.com/browse/MC-273338) Flying boat glitch using string and rising bubble columns
-   [MC-274187](https://bugs.mojang.com/browse/MC-274187) The sweeping attack from a sword enchanted with Fire Aspect can ignite other players with PVP disabled
-   [MC-275994](https://bugs.mojang.com/browse/MC-275994) Having the pie chart open while the window is unfocused spams the logs
-   [MC-277403](https://bugs.mojang.com/browse/MC-277403) Flaming arrows and tridents still don't extinguish when water is placed in their location
-   [MC-277537](https://bugs.mojang.com/browse/MC-277537) Pale moss carpets sometimes generate disjointed
-   [MC-277780](https://bugs.mojang.com/browse/MC-277780) Minecraft resaves all maps with every autosave even after the 1st patch
-   [MC-277807](https://bugs.mojang.com/browse/MC-277807) Teleporting the player's mount causes rotation de-sync, previously did not
-   [MC-277865](https://bugs.mojang.com/browse/MC-277865) The animation of boats in bubble columns breaks when over a certain "Time" in level.dat
-   [MC-277922](https://bugs.mojang.com/browse/MC-277922) Boats in 1 block high downward bubble column will continue to rock back and forth
-   [MC-278040](https://bugs.mojang.com/browse/MC-278040) Creaking swim pathfinding breaks after being submerged
-   [MC-278096](https://bugs.mojang.com/browse/MC-278096) "Fabulous!" graphics and clouds disabled causes all particles to linger in frame buffer for one frame
-   [MC-278164](https://bugs.mojang.com/browse/MC-278164) Click sound is played twice when you click a setting button and there's a slider under the mouse in the next screen
-   [MC-278204](https://bugs.mojang.com/browse/MC-278204) Blaze fireballs now cause TNT minecarts to explode instantly
-   [MC-278249](https://bugs.mojang.com/browse/MC-278249) Experience orb positions desync severely and abruptly correct themselves
-   [MC-278375](https://bugs.mojang.com/browse/MC-278375) Feeding wheat or hay bale to llama or trader llama with maximum Temper causes item stack to be desynced
-   [MC-278376](https://bugs.mojang.com/browse/MC-278376) Arrows and tridents act weirdly in one block deep bubble columns
-   [MC-278422](https://bugs.mojang.com/browse/MC-278422) Reloading the world after removing Owner tag from a sitting tamed wolf with /data remove makes the wolf moving and sitting at the same time
-   [MC-278493](https://bugs.mojang.com/browse/MC-278493) Tamed wolves which are angry at creakings remain angry when said creakings despawn
-   [MC-278502](https://bugs.mojang.com/browse/MC-278502) Weeping and twisting vines disconnect
-   [MC-278552](https://bugs.mojang.com/browse/MC-278552) minecraft:entity.player.big\_fall no longer plays the sound when falling from great height
-   [MC-278585](https://bugs.mojang.com/browse/MC-278585) Players can get stuck when landing on the edge of powder snow
-   [MC-278591](https://bugs.mojang.com/browse/MC-278591) Ender dragon spawn egg is no longer given when using pick block on the ender dragon entity
-   [MC-278615](https://bugs.mojang.com/browse/MC-278615) Reinforcement zombified piglins are angry at you even if you killed the "caller" in one hit
-   [MC-278621](https://bugs.mojang.com/browse/MC-278621) Client/server desync when placing powder snow while landing in it
-   [MC-278627](https://bugs.mojang.com/browse/MC-278627) Players wearing leather boots will take fall damage when landing on the edge of powder snow
-   [MC-278634](https://bugs.mojang.com/browse/MC-278634) Trying to /setblock a 'waterlogged=true' state on (glow\_lichen, resin\_clump, sculk\_vein, etc.) produces an error
-   [MC-278659](https://bugs.mojang.com/browse/MC-278659) Attacking a natural stationary creaking does not trigger sculk sensors
-   [MC-278683](https://bugs.mojang.com/browse/MC-278683) Mobs spawned from spawners or /summon never drop their equipment
-   [MC-278708](https://bugs.mojang.com/browse/MC-278708) Throwing ender pearls while mounted only dismounts you, without teleporting
-   [MC-278728](https://bugs.mojang.com/browse/MC-278728) smithing\_transform recipes can't set an item's components back to default
-   [MC-278733](https://bugs.mojang.com/browse/MC-278733) Breaking a double resin brick slab block only returns a single slab
-   [MC-278734](https://bugs.mojang.com/browse/MC-278734) Sheep's heads stutter when they look up or down
-   [MC-278755](https://bugs.mojang.com/browse/MC-278755) Teleporting far away while riding an entity softlocks the game
-   [MC-278801](https://bugs.mojang.com/browse/MC-278801) The closed eyeblossom to gray dye recipe is not grouped with the other gray dye recipe
-   [MC-278841](https://bugs.mojang.com/browse/MC-278841) Powder snow no longer slows down the player falling from a high place
-   [MC-279145](https://bugs.mojang.com/browse/MC-279145) Shulker bullets are no longer affected by bubble columns
-   [MC-279152](https://bugs.mojang.com/browse/MC-279152) Shulker bullets can't teleport through nether or end portals, end gateways

---

Sharpen your pickaxes, another snapshot is here! In today's snapshot we have a bunch of component improvements coming your way, Resin Clumps can be waterlogged now, and Rabbits can finally roam free again. Furthermore, there's a whole swarm of other bug fixes.

## Changes

-   Wither Skeletons no longer have Bows as their preferred weapon
-   Creakings will now persist when a world is reloaded
-   Mining speed and blast resistance of creaking hearts is doubled
-   Resin sounds have been adjusted to be softer
-   Resin Clump block can be placed on any full face of a neighboring block
-   Resin Clump block can now be waterlogged, and can therefore be placed underwater

## Technical Changes

-   The Data Pack version is now 60
-   The Resource Pack version is now 45

## Data Pack Version 60

-   Removed `creaking_transient` entity type

### Item tags

-   Removed `trim_templates`
-   Added `#wither_skeleton_disliked_weapons` for weapons that Wither Skeletons don't want to pick up

## Resource Pack Version 45

-   All blocks that previously rendered only block entity (banners, heads, beds, chests, conduits, decorated pots, shulker boxes and signs) will now also render normal block model over it (same as existing behavior of bells, enchantment tables, etc.)
    -   Note: rendered block entity still can't be removed or data-driven, this change only affects previously ignored block models

### Item models

#### `minecraft:special` item model type

##### Changed `minecraft:head` special model type

-   Added field `texture` - optional namespaced ID for texture, without `textures/entity/` prefix and `.png` suffix
    -   If absent, default texture will be used, depending on `kind` field
    -   Additionally, if present, `minecraft:profile` component is ignored

##### Added `minecraft:standing_sign` special model type

-   Renders a standing sign
-   Fields:
    -   `wood_type` - one of `oak`, `spruce`, `birch`, `acacia`, `cherry`, `jungle`, `dark_oak`, `pale_oak`, `mangrove`, `bamboo`, `crimson`, `warped`
    -   `texture` - optional namespaced ID for texture, without `textures/entity/signs/` prefix and `.png` suffix
        -   if not present, it will be derived from `wood_type`

##### Added `minecraft:hanging_sign` special model type

-   Renders a hanging sign
-   Fields:
    -   `wood_type` - one of `oak`, `spruce`, `birch`, `acacia`, `cherry`, `jungle`, `dark_oak`, `pale_oak`, `mangrove`, `bamboo`, `crimson`, `warped`
    -   `texture` - optional namespaced ID for texture, without `textures/entity/signs/hanging/` prefix and `.png` suffix
        -   if not present, it will be derived from `wood_type`

#### `minecraft:condition` item model type

-   Removed `minecraft:xmas` boolean property, replaced by `minecraft:local_time`
-   Removed `minecraft:shift_down` boolean property, replaced by `minecraft:extended_view`

##### Changed `minecraft:has_component` boolean property

-   Added field: `ignore_default` - if default component value should be handled as "no component", default: `false`

##### Added `minecraft:extended_view` boolean property

-   Returns true if player has requested extended details by holding shift key down
    -   Note: not a keybind, can't be rebound
-   Only works when item is displayed in UI
-   No fields

##### Added `minecraft:keybind_down` boolean property

-   Returns true if keybind is currently active
-   Fields:
    -   `keybind` - keybind ID, same as value in `keybind` text component
        -   Examples: `key.use`, `key.left`

##### Added `minecraft:local_time` property

-   Returns the current time formatted according to a given pattern
-   The value is updated every second
-   For full format documentation for locale, time zone and pattern, see ICU (International Components for Unicode) documentation
-   Fields:
    -   `locale` - optional value describing locale
        -   Examples:
            -   `en_US`: English language (used for things like week names), formating as in USA
            -   `cs_AU@numbers=thai;calendar=japanese`: Czech language, Australian formatting, Thai numerals and Japanese calendar
        -   default value is `""`, which means "root" locale (a set of defaults, including English names)
    -   `time_zone` - optional value describing time zone
        -   If not present, defaults to timezone set on client
        -   Examples:
            -   `Europe/Stockholm`
            -   `GMT+0:45`
    -   `pattern` - describes format to be used for time formatting
        -   Examples:
            -   `yyyy-MM-dd` - 4-digit year number, then 2-digit month number, then 2-digit day of month number, all zero-padded if needed, separated by `-`
            -   `HH:mm:ss` - current time (hours, minutes, seconds), 24-hour cycle, all zero-padded to 2 digits of needed, separated by `:`
-   Values: any string

> **Developer's Note**: _There is no "use locale set on client" option to avoid unexpected issues when the user's locale does not match the pack developer's one. Also, time is complicated, be careful._

##### Added `minecraft:holder_type` property

-   Returns holding entity type, if present
-   No fields
-   Values: namespaced entity type ID

## Fixed bugs in 24w46a

-   [MC-150224](https://bugs.mojang.com/browse/MC-150224) Rabbits can occasionally get stuck on the edges of blocks
-   [MC-160001](https://bugs.mojang.com/browse/MC-160001) Skulls, signs, hanging signs, banners and decorated pots have no breaking/sprinting particles
-   [MC-256649](https://bugs.mojang.com/browse/MC-256649) Hanging signs aren't rendered when held by endermen or as block display entities
-   [MC-266991](https://bugs.mojang.com/browse/MC-266991) Exposed Copper Bulb has inconsistent pixels
-   [MC-271169](https://bugs.mojang.com/browse/MC-271169) The "Isn't It Scute?" advancement is granted when unleashing an armadillo while holding a brush
-   [MC-272245](https://bugs.mojang.com/browse/MC-272245) You can get the advancement "Shear Brilliance" when you use shears on a leashed wolf
-   [MC-273861](https://bugs.mojang.com/browse/MC-273861) When a leashed bee enters a hive, the leash disappears
-   [MC-274571](https://bugs.mojang.com/browse/MC-274571) The advancement "Little Sniffs" can be obtained by unleashing the snifflet and not feeding it
-   [MC-275339](https://bugs.mojang.com/browse/MC-275339) Bad contrast in bundle interface with dark blocks
-   [MC-276697](https://bugs.mojang.com/browse/MC-276697) Neutral mobs don't pathfind correctly to their target after being unleashed
-   [MC-276986](https://bugs.mojang.com/browse/MC-276986) Missing pixel in open bundle texture
-   [MC-277042](https://bugs.mojang.com/browse/MC-277042) Blue and Red open bundle are inconsistent with the other colors
-   [MC-277071](https://bugs.mojang.com/browse/MC-277071) Middle clicking on a creaking spawned naturally through a creaking heart doesn't give you the spawn egg
-   [MC-277074](https://bugs.mojang.com/browse/MC-277074) The entity shadows of creakings are slightly too large in relation to the size of their models
-   [MC-277140](https://bugs.mojang.com/browse/MC-277140) The statistics screen does not visually differentiate the creaking and creaking\_transient entities
-   [MC-277152](https://bugs.mojang.com/browse/MC-277152) The statistic for killing a creaking doesn't increment when breaking a creaking heart
-   [MC-277226](https://bugs.mojang.com/browse/MC-277226) Creakings not linked to any heart display wrong subtitles when attacked with non-damaging projectiles
-   [MC-277399](https://bugs.mojang.com/browse/MC-277399) The hand animation isn't played when constantly emptying items from bundles
-   [MC-277413](https://bugs.mojang.com/browse/MC-277413) The empty state sprite for the oxygen bar takes a little longer to start displaying compared to Bedrock Edition
-   [MC-277533](https://bugs.mojang.com/browse/MC-277533) Bundles can remain in the open state when taken out from saved hotbars
-   [MC-277892](https://bugs.mojang.com/browse/MC-277892) Clicking on the selected recipe a second time in the stonecutter GUI turns the result item into a ghost item
-   [MC-277915](https://bugs.mojang.com/browse/MC-277915) Translucency sorting seems incorrect in some cases in water
-   [MC-277948](https://bugs.mojang.com/browse/MC-277948) Suspicious stew gives different durations of Blindness for Eyeblossom and Azure Bluet
-   [MC-277962](https://bugs.mojang.com/browse/MC-277962) Chiseled Resin Bricks have a miscolored pixel
-   [MC-278028](https://bugs.mojang.com/browse/MC-278028) Using items underwater can force you to exit swimming mode
-   [MC-278058](https://bugs.mojang.com/browse/MC-278058) Breeze entity model rods no longer spin around when it is moving
-   [MC-278102](https://bugs.mojang.com/browse/MC-278102) Recipe book icons no longer visually indicate that an item has multiple recipes
-   [MC-278124](https://bugs.mojang.com/browse/MC-278124) Resin clumps are not waterloggable
-   [MC-278130](https://bugs.mojang.com/browse/MC-278130) Resin bricks cannot be placed or used inside smithing tables
-   [MC-278131](https://bugs.mojang.com/browse/MC-278131) Resin clumps can be placed inside smithing tables
-   [MC-278132](https://bugs.mojang.com/browse/MC-278132) Using items while riding camels that are sprinting slows the camel down
-   [MC-278136](https://bugs.mojang.com/browse/MC-278136) Bees still get poisoned when touching closed eyeblossoms
-   [MC-278149](https://bugs.mojang.com/browse/MC-278149) Strays, bogged, and wither skeletons hold their bows incorrectly when charging and shooting
-   [MC-278158](https://bugs.mojang.com/browse/MC-278158) Block/item models can no longer override parent model texture references by referencing the textures in the parent model of the first parent model
-   [MC-278184](https://bugs.mojang.com/browse/MC-278184) Eyeblossoms can generate replacing Pale Oak logs
-   [MC-278191](https://bugs.mojang.com/browse/MC-278191) Wandering Traders can sell Pale Oak Saplings in multiple offers at once
-   [MC-278212](https://bugs.mojang.com/browse/MC-278212) Resin clump is placed in an unexpected position in the creative inventory

---

With the spooky season behind us, we are entering November with the release of Snapshot 24w45a. This update comes with a bunch of bug fixes, changes to how mobs interact with equipable items on the ground, improvements to item models by adding more functionality and much more. It's a hefty update for resource packs! Enjoy!

## Changes

-   Baby Cats and Wolves now get a collar with the color that is a mix between the parents collar color if possible
-   Aligned durations of the Suspicious Stew effects with Bedrock Edition:
    -   Saturation: 0.35 seconds (unchanged)
    -   Night Vision: 5 seconds (unchanged)
    -   Fire Resistance: 3 seconds
    -   Blindness: 11 seconds
    -   Weakness: 7 seconds
    -   Regeneration: 7 seconds
    -   Jump Boost: 5 seconds
    -   Wither: 7 seconds
    -   Poison: 11 seconds

> **Developer's Note**: _Yay! They are all now prime numbers!_ (not really)

### Mobs picking up items

Some changes have been made to how mobs decide to replace their equipped items with items on the ground

-   If the item belongs in an armor slot, replace the item if any of the following conditions apply
    -   The new item has a higher base armor value
    -   The new item has a higher base armor toughness value
    -   The new item has more enchantments
    -   The new item is less damaged
    -   The new item has a custom name while the old one doesn't
-   If the item belongs in the main hand slot, replace the item if any of the following conditions apply
    -   The new item is a preferred weapon while the old one isn't
        -   If the old item is a preferred weapon while the new item isn't, do not replace the item
    -   The new item has a higher base damage value
    -   The new item has more enchantments
    -   The new item is less damaged
    -   The new item has a custom name while the old one doesn't

#### Preferred weapons

The following mobs now have a preferred weapon type to pick up:

-   Skeleton variants all prefer Bows
-   Piglins and Pillagers prefer Crossbows
-   Drowned prefer Tridents

### Eyeblossoms

-   Bees don't interact at all with Closed Eyeblossoms
-   Bees don't get poisoned when they touch Closed Eyeblossoms
-   Bees will not be tempted by Closed Eyeblossoms

### Creaking mob

-   An activated Creaking will not move if a survival or adventure player is looking at it
    -   Creaking will also have full knockback resistance in that state

### Resin Brick

-   Resin Brick is now used as the material for armor trimming instead of Resin Clump

## Technical Changes

-   The Data Pack Version is now 59
-   The Resource Pack version is now 44
-   Data generator in server jar (`net.minecraft.data.Main`) no longer generates `assets` directory
    -   `--client` option has been removed from command line for this entry point
-   New entry point `net.minecraft.client.data.Main` is present in client jar, with similar command line structure as data generator in server jar
    -   Available options: `--client` - generates `assets` directory

### Network Protocol

-   Client will now send the `minecraft:player_loaded` packet once the loading terrain screen has closed after initially loading into the world, and after closing the loading screen when respawning

## Data Pack Version 59

-   The tooltip warning on item blocks with the `minecraft:block_entity_data` component can no longer be hidden by any other component
-   Field `model` in `minecraft:equippable` component has been renamed to `asset_id`
-   Field `item_model_index` in `trim_material` registry has been removed (no longer needed for model rendering)
-   Component `minecraft:custom_model_data` has been expanded, together with `minecraft:set_custom_model_data` modifier

### Tags

#### Block Tags

-   Added `#bee_attractive` - denotes all blocks that Bees may pollinate
-   Removed `#tall_flowers`

#### Item Tags

-   Removed `#flowers` and `#tall_flowers`
-   Added `skeleton_preferred_weapon`, `piglin_preferred_weapon`, `pillager_preferred_weapon` and `drowned_preferred_weapon` tags for specifying preferred weapons types for these mobs when picking up items

### Components

#### `minecraft:custom_model_data`

-   Component has now more fields to accomodate new uses by various model property getters
-   Fields:
    -   `floats` - list of floats
    -   `flags` - list of booleans
    -   `strings` - list of strings
    -   `colors` - list of RGB color values

### Item Modifiers

#### `minecraft:set_custom_model_data`

-   Component has now more fields to accomodate more complex component structure
-   Fields:
    -   `floats` - optional list operation of number providers
    -   `flags` - optional list operation of boolean values
    -   `strings` - optional list operation of string values
    -   `colors` - optional list operation of RGB values or number providers
-   List operation uses same format as `explosions` field in `set_fireworks` modifier
-   For example `{function:"set_custom_model_data",floats:{values:[2],mode:replace_all}}` sets replaces `floats` with value `2`

## Resource Pack Version 44

-   Invalid `minecaft:filled_map` items in an Item Frame (map item without the `map_id` component) no longer change the size of the frame
-   New format for data-driving item models

### Renames

-   `equipment` directory has been moved one level up, i.e. `models/equipment/` becomes `equipment/`
-   `broken_elytra` model and texture has been renamed to `elytra_broken`

### Item models

-   New format has been introduced for describing item models
-   Item models are selected based on `minecraft:item_model` component
    -   Model for item with `item_model=foo:bar` is stored in `/assets/foo/items/bar.json`
-   Format of file is `{ "model": {"type": <item model type>, <item model type specific fields> } }` (see below for exact types)
-   `overrides` section has been removed from existing block models
-   There are no longer any hardcoded paths in `models` directory - models will be now only used if referenced by definitions in `items` or `blockstates` directories
-   Models in `models/item` that only redirect to a block model have been removed
    -   In such cases, the item model will refer to the `models/block` model directly

#### `minecraft:model` item model type

-   Renders a plain model from `models` directory
-   Fields:
    -   `model`: namespaced ID of model in `models` (like `minecraft:block/yellow_glazed_terracotta`)
    -   `tints`: a list of tint sources to apply to elements of rendered model (first entry applies to `tintindex` 0, second one - 1, etc.)
        -   Format:
            -   `type`: type of tint source (see below)
            -   `<type-specific>` - additional fields depending on tint source type

##### `minecraft:constant` tint source type

-   Returns a constant RGB color
-   Fields:
    -   `value` - A packed integer RGB value (e.g. `-1`) or an array of RGB values (e.g. `[ 1, 1, 1 ]`)

##### `minecraft:dye` tint source type

-   Returns value from `minecraft:dyed_color` component or default if not present
-   Fields:
    -   `default` - RGB value

##### `minecraft:grass` tint source type

-   Returns grass color at specific climate parameters, based on `textures/colormap/grass.png`
-   Same colors as ones selected by `downfall` and `temperature` in biome configuration
-   Fields:
    -   `temperature` - float in `0..1` (inclusive) range
    -   `downfall` - float in `0..1` (inclusive) range

##### `minecraft:firework` tint source type

-   Returns average of colors from `minecraft:firework_explosion` component or default color if there are none
-   Fields:
    -   `default`: RGB value

##### `minecraft:potion` tint source type

-   Returns color from `minecraft:potion_contents` component:
    -   if component is present:
        -   custom color, if there is one present in component
        -   default color, if effect list is empty
        -   average of effect colors, otherwise
    -   default color, otherwise
-   Fields:
    -   `default`: RGB value

##### `minecraft:map_color` tint source type

-   Return value from `minecraft:map_color` component or default color if component is not present
-   Fields:
    -   `default`: RGB value

##### `minecraft:custom_model_data` tint source type

-   Returns value from `colors` list in `minecraft:custom_model_data` component
-   Fields:
    -   `index` - index for field in `colors`, default: 0

#### `minecraft:special` item model type

-   Renders a special (not data-driven) model
-   Fields:
    -   `model`: special model instance
        -   Format:
            -   `type` - type of special model (see below)
            -   `<type-specific>` - additional fields depending on tint source type
    -   `base`: namespaced ID of model in `models`, providing transformations, particle texture and GUI light

##### `minecraft:bed` special model type

-   Renders a whole bed
-   Fields:
    -   `texture` - namespaced ID for texture, without `textures/entity/bed/` prefix and `.png` suffix

##### `minecraft:banner` special model type

-   Renders a banner with patterns from `minecraft:banner_patterns` component
-   Fields:
    -   `color` - color of banner base, one of 16 predefined colors

##### `minecraft:conduit` special model type

-   Renders conduit
-   No fields

##### `minecraft:chest` special model type

-   Renders a single chest
-   Fields:
    -   `texture` - namespaced ID for texture, without `textures/entity/chest/` prefix and `.png` suffix
    -   `openness` - float, `0.0` (default) - fully closed, `1.0` - fully open

##### `minecraft:head` special model type

-   Renders a head
-   Uses profile from `minecraft:profile` component when applicable
-   Fields:
    -   `kind` - one of `skeleton`, `wither_skeleton`, `player`, `zombie`, `creeper`, `piglin`, `dragon`

##### `minecraft:shulker_box` special model type

-   Renders a shulker box
-   Fields:
    -   `texture` - namespaced ID for texture, without `textures/entity/shulker/` prefix and `.png` suffix
    -   `openness` - float, `0.0` (default) - fully closed, `1.0` - fully open
    -   `orientation` - orientation for rendering, default: `up`

##### `minecraft:shield` special model type

-   Renders a shield
-   Uses patterns from `minecraft:banner_patterns` component and color from `minecraft:base_color` component
-   No fields

##### `minecraft:trident` special model type

-   Renders a trident
-   No fields

##### `minecraft:decorated_pot` special model type

-   Renders a decorated pot
-   Uses values from `minecraft:pot_decorations` component
-   No fields

#### `minecraft:composite` item model type

-   Renders multiple sub-models
-   All models are rendered in the same space
-   Fields:
    -   `models`: a list of item models to render

#### `minecraft:condition` item model type

-   Renders an item model depending on boolean property
-   Fields:
    -   `property`: type of property (see below)
    -   `<property-specific>` - additional fields depending on property type, added inline
    -   `on_true` - item model to render when property is true
    -   `on_false` - item model to render when property is false

##### `minecraft:using_item` boolean property

-   Returns true if player is currently using this item
-   No fields

##### `minecraft:broken` boolean property

-   Returns true if the item is damageable and has only one use remaining before breaking
-   No fields

##### `minecraft:damaged` boolean property

-   Returns true if the item is damageable and has been used at least once
-   No fields

##### `minecraft:has_component` boolean property

-   Returns true if the given component is present on the item
-   Fields:
    -   `component` - component type

##### `minecraft:fishing_rod/cast` boolean property

-   Returns true if there is a fishing bobber attached to currently used fishing rod
-   No fields

##### `minecraft:bundle/has_selected_item` boolean property

-   Returns true if bundle is "open", i.e. it has selected item visible in GUI
-   No fields

##### `minecraft:xmas` boolean property

-   Returns true if current date is between December 24th and December 26th (inclusive)
-   No fields

##### `minecraft:selected` boolean property

-   Returns true if item is selected on a hotbar
-   No fields

##### `minecraft:carried` boolean property

-   Returns true if item is carried between slots in GUI
-   No fields

##### `minecraft:shift_down` boolean property

-   Returns true if player currently holding shift key down
-   No fields

##### `minecraft:custom_model_data` boolean property

-   Returns value from `flags` list in `minecraft:custom_model_data` component
-   Fields:
    -   `index` - index for field in `flags`, default: 0

#### `minecraft:select` item model type

-   Renders an item model based on discrete property
-   Fields:
    -   `property`: type of property (see below)
    -   `<property-specific>` - additional fields depending on property type, added inline
    -   `cases` - list of cases to match in format:
        -   `when` - value to match against property, type depends on property
            -   could be a single value or a list of values
        -   `model` - item model to render when case is selected
    -   `fallback` - item model to render if none of the cases matched the value
        -   if not present, placeholder "missing" model will be rendered instead

##### `minecraft:main_hand` property

-   Returns main hand of holding player
-   No fields
-   Values: `left`, `right`

##### `minecraft:charge_type` property

-   Returns charge type stored in `minecraft:charged_projectiles` component
-   No fields
-   Values:
    -   `none` - if there are no projectiles or component is not present
    -   `rocket` - if there is at least one firework rocket
    -   `arrow` - any other case

##### `minecraft:trim_material` property

-   Returns value of `material` field from `minecraft:trim` component, if present
-   No fields
-   Values: namespaced ID

##### `minecraft:block_state` property

-   Returns value for some property from `minecraft:block_state` component
-   Fields:
    -   `block_state_property` - string key to select from component
-   Values: any string

##### `minecraft:display_context` property

-   Returns context this item is rendered in
-   No fields
-   Values:
    -   `none`
    -   `thirdperson_lefthand`
    -   `thirdperson_righthand`
    -   `firstperson_lefthand`
    -   `firstperson_righthand`
    -   `head`
    -   `gui`
    -   `ground`
    -   `fixed`

##### `minecraft:custom_model_data` property

-   Returns value from `strings` list in `minecraft:custom_model_data` component
-   Fields:
    -   `index` - index for field in `strings`, default: 0
-   Values: any string

#### `minecraft:range_dispatch` item model type

-   Renders an item model based on numeric property
-   Replacement for old `overrides` section from block models
-   Will select last entry with threshold less or equal to property value
-   Fields:
    -   `property`: type of property (see below)
    -   `<property-specific>` - additional fields depending on property type
    -   `scale` - factor to multiply property value with, default: `1.0`
    -   `entries` - list of entries in format:
        -   `threshold` - float value
        -   `model` - item model to render when entry is selected
        -   Note: order of fields does not matter, list will be sorted by threshold in ascending order before use
    -   `fallback` - item model to render if no entries were less or equal to property value
        -   if not present, placeholder "missing" model will be rendered instead

##### `minecraft:custom_model_data` numeric property

-   Returns value from `floats` list in `minecraft:custom_model_data` component
-   Fields:
    -   `index` - index for field in `floats`, default: 0

##### `minecraft:bundle/fullness` numeric property

-   Returns weight of `bundle_contents` component or 0 if not present
-   No fields

##### `minecraft:damage` numeric property

-   Returns value for `damage` component
-   Fields:
    -   `normalize`: boolean, default: `true`
        -   if true, returns value of damage divided by `max_damage` component, clamped to `0..1`
        -   if false, returns value of damage, clamped to `0..max_damage`

##### `minecraft:count` numeric property

-   Returns stack size
-   Fields:
    -   `normalize`: boolean, default: `true`
        -   if true, returns count divided by `max_stack_size` component, clamped to `0..1`
        -   if false, returns count clamped to `0..max_stack_size`

##### `minecraft:cooldown` numeric property

-   Returns remaining cooldown for item, scaled to `0..1`
-   No fields

##### `minecraft:time` numeric property

-   Returns value of day time (used for clock), scaled to `0..1`
-   Fields:
    -   `wobble` - if true, value will oscillate for some time around target before settling, default: `true`
    -   `natural_only` - if true, value will be random in dimensions with `natural=false`, default: `true`

##### `minecraft:compass` numeric property

-   Returns angle, scaled to `0..1` in x-z plane between holder position and target
-   If target is not valid (not present, in other dimension or to close to holder position) random value will be returned
-   Fields:
    -   `target` - one of:
        -   `spawn` - points at world spawn
        -   `lodestone` - points at location stored in `lodestone_tracker` component
        -   `recovery` - points at last player death location
    -   `wobble` - if true, value will oscillate for some time around target before settling, default: `true`

##### `crossbow/pull` numeric property

-   Returns crossbow-specific use time
-   No fields

##### `use_duration` numeric property

-   Returns item use ticks
-   Fields:
    -   `remaining` - if `true`, returned value will be remaining use ticks, if `false` - ticks so far, default: `false`

##### `use_cycle` numeric property

-   Returns remaining use ticks modulo `period`
-   Fields:
    -   `period` - positive float, default `1.0`

#### `minecraft:bundle/selected_item` item model type

-   Renders selected stack in `minecraft:bundle_contents` component, if present, otherwise does nothing

## Fixed bugs in 24w45a

-   [MC-212](https://bugs.mojang.com/browse/MC-212) Fall damage is ignored for a couple of seconds when reloading into LAN or singleplayer worlds
-   [MC-99848](https://bugs.mojang.com/browse/MC-99848) Sprinting isn't canceled upon receiving the blindness effect
-   [MC-158872](https://bugs.mojang.com/browse/MC-158872) Models use model of last matched predicate, not closest match
-   [MC-159508](https://bugs.mojang.com/browse/MC-159508) Ctrl + Pick block on beehives and nests does not copy their honey levels
-   [MC-166072](https://bugs.mojang.com/browse/MC-166072) Custom Trident model ignores "layer0" and "elements" section
-   [MC-186341](https://bugs.mojang.com/browse/MC-186341) Command autocomplete doesn't consider parts after a slash
-   [MC-193176](https://bugs.mojang.com/browse/MC-193176) Most mobs with CanPickUpLoot prefer swords over axes and will downgrade their weapon
-   [MC-193336](https://bugs.mojang.com/browse/MC-193336) Heads/skulls don't render when held by an enderman or as block display entities
-   [MC-201940](https://bugs.mojang.com/browse/MC-201940) After dying, Ender Dragon body part hitboxes do not move upwards with the main hitbox
-   [MC-206684](https://bugs.mojang.com/browse/MC-206684) Spyglass particles have no associated texture
-   [MC-229142](https://bugs.mojang.com/browse/MC-229142) Spyglass texture doesn't allow override through resource pack
-   [MC-249079](https://bugs.mojang.com/browse/MC-249079) Sculk veins are not mirrored correctly from behind
-   [MC-260216](https://bugs.mojang.com/browse/MC-260216) Decorated pots aren't rendered when held by endermen or as block display entities
-   [MC-267343](https://bugs.mojang.com/browse/MC-267343) Sprinting isn't canceled upon riding entities
-   [MC-269616](https://bugs.mojang.com/browse/MC-269616) Telemetry Data scroll bar does not have a background
-   [MC-270136](https://bugs.mojang.com/browse/MC-270136) Thrown projectiles with custom\_model\_data do not maintain proper particles when breaking
-   [MC-271786](https://bugs.mojang.com/browse/MC-271786) Empty block states in noise\_provider does not cause validation to fail, causing crash
-   [MC-272994](https://bugs.mojang.com/browse/MC-272994) Allays assigned to a player can be set on fire with sweeping and fire aspect
-   [MC-273450](https://bugs.mojang.com/browse/MC-273450) Mobs with CanPickUpLoot:1b behave inconsistently with the mace / trident
-   [MC-273522](https://bugs.mojang.com/browse/MC-273522) Mobs with CanPickUpLoot no longer pick up enchanted items after picking up an unenchanted item
-   [MC-273635](https://bugs.mojang.com/browse/MC-273635) Trial spawners forget their designated mob when placed by player out of creative mode, assigned by spawn eggs
-   [MC-274268](https://bugs.mojang.com/browse/MC-274268) Trial Spawner keeps flashing after cooldown ends
-   [MC-275011](https://bugs.mojang.com/browse/MC-275011) Instant mine does not work when standing inside of cobwebs
-   [MC-275215](https://bugs.mojang.com/browse/MC-275215) Experiments warning goes off the screen if viewed at low window size
-   [MC-276110](https://bugs.mojang.com/browse/MC-276110) honey\_level model predicate range is 1 for level 5 and 0 for levels 1-4
-   [MC-276115](https://bugs.mojang.com/browse/MC-276115) New Bee Nest and Beehive item models don't use the block parent
-   [MC-276412](https://bugs.mojang.com/browse/MC-276412) Custom item models set to a shield and various other items all create invisible items
-   [MC-276654](https://bugs.mojang.com/browse/MC-276654) item\_model item component breaks on trident
-   [MC-276728](https://bugs.mojang.com/browse/MC-276728) Tridents and spyglasses appear dark in the inventory if given a custom item model for a block
-   [MC-276730](https://bugs.mojang.com/browse/MC-276730) Bundles appear dark in the inventory if given a custom item model for a block and then scrolled through
-   [MC-276731](https://bugs.mojang.com/browse/MC-276731) Items which use entity models will not render another entity model if specified via item model component
-   [MC-276732](https://bugs.mojang.com/browse/MC-276732) Colors will carry over from item ID to target model
-   [MC-276771](https://bugs.mojang.com/browse/MC-276771) Missing texture when a damageable item with one of several template models is destroyed
-   [MC-276828](https://bugs.mojang.com/browse/MC-276828) Minecraft no longer prints an error to the game log when a model fails to define a texture
-   [MC-276847](https://bugs.mojang.com/browse/MC-276847) Bundles given the model of a different bundle will not preserve their color when scrolled through
-   [MC-277082](https://bugs.mojang.com/browse/MC-277082) Creakings take knockback from wind charges
-   [MC-277092](https://bugs.mojang.com/browse/MC-277092) The eyes of creakings aren't visible when creakings have the invisibility effect
-   [MC-277149](https://bugs.mojang.com/browse/MC-277149) Creakings are affected by knockback from mace smash attacks
-   [MC-277243](https://bugs.mojang.com/browse/MC-277243) Creakings take knockback from Punch bows
-   [MC-277264](https://bugs.mojang.com/browse/MC-277264) The Creaking can be knocked back by zoglins
-   [MC-277916](https://bugs.mojang.com/browse/MC-277916) Containers are locked when upgrading a world from certain versions
-   [MC-277925](https://bugs.mojang.com/browse/MC-277925) Resin Brick Stairs are not part of the #stairs block and item tags
-   [MC-277926](https://bugs.mojang.com/browse/MC-277926) Resin Brick Slab is not part of the #slab block and item tags
-   [MC-277929](https://bugs.mojang.com/browse/MC-277929) The game crashes when attempting to use the void preset
-   [MC-277930](https://bugs.mojang.com/browse/MC-277930) Eyeblossom subtitles are inverted
-   [MC-277931](https://bugs.mojang.com/browse/MC-277931) Incorrect display on the map of the flower Closed and Open Eyeblossom
-   [MC-277932](https://bugs.mojang.com/browse/MC-277932) Resin Clump is not part of the #replaceable block tag
-   [MC-277933](https://bugs.mojang.com/browse/MC-277933) Smithing Table doesn't show a Clump icon for ingredient slot
-   [MC-277939](https://bugs.mojang.com/browse/MC-277939) Programmer Art's empty slot icons may not have been correctly updated for 24w44a
-   [MC-277941](https://bugs.mojang.com/browse/MC-277941) resin\_clump is not mirrored correctly from behind
-   [MC-277945](https://bugs.mojang.com/browse/MC-277945) Incorrect verb form in "Elytra swooshes" subtitle
-   [MC-277948](https://bugs.mojang.com/browse/MC-277948) Suspicious stew gives different durations of Blindness for Eyeblossom and Azure Bluet
-   [MC-277950](https://bugs.mojang.com/browse/MC-277950) Open potted eyeblossom is shaded (flower\_pot\_cross\_emissive)
-   [MC-277951](https://bugs.mojang.com/browse/MC-277951) Eyeblossom is placed in an unexpected position in the Creative inventory
-   [MC-277952](https://bugs.mojang.com/browse/MC-277952) Sprinting isn't canceled upon flying with elytra
-   [MC-277954](https://bugs.mojang.com/browse/MC-277954) Creaking Heart underwater plays spawning sounds in a loop
-   [MC-277955](https://bugs.mojang.com/browse/MC-277955) Using a loom crashes the game
-   [MC-277961](https://bugs.mojang.com/browse/MC-277961) Experience orbs incorrectly bounce up
-   [MC-277964](https://bugs.mojang.com/browse/MC-277964) Resin is not generated when a creaking is attacked by a wolf owned by a player
-   [MC-277966](https://bugs.mojang.com/browse/MC-277966) Creaking does not generate resin from player-caused explosions
-   [MC-277967](https://bugs.mojang.com/browse/MC-277967) The game crashes when certain explosions occur near a creaking in its death animation
-   [MC-277970](https://bugs.mojang.com/browse/MC-277970) Hanging signs don't display chains when attached to the side of a block
-   [MC-277972](https://bugs.mojang.com/browse/MC-277972) You can no longer swim when crouched under a slab
-   [MC-277983](https://bugs.mojang.com/browse/MC-277983) Naturally-spawned creaking hearts drop experience when broken in Creative mode
-   [MC-277994](https://bugs.mojang.com/browse/MC-277994) Picking a decorated pot or a shulker box always keeps its container data
-   [MC-278002](https://bugs.mojang.com/browse/MC-278002) Sculk sensors are not activated upon resin clumps spawning from creaking hearts
-   [MC-278004](https://bugs.mojang.com/browse/MC-278004) Hitting a creaking heart with a wind charge kills the creaking
-   [MC-278028](https://bugs.mojang.com/browse/MC-278028) Using items underwater can force you to exit swimming mode
-   [MC-278071](https://bugs.mojang.com/browse/MC-278071) "minecraft.used:minecraft.trident" doesn't increase when throwing a trident

---

We're back in the shipping room to serve you the first snapshot release for Minecraft: Java Edition 1.21.4! It's coming in hot with some new pale goodies in the form of Eyeblossoms and Resin, two new additions to the Pale Garden biome. You'll also find that leaves will now fall from the Pale Oak trees in said biome, something we hope will crank up the eerie atmosphere even further. In addition to that, this release is also bringing a collection of technical updates and bug fixes.

Happy mining!

## New Features

The `winter_drop` is no longer an experiment.

### Added Eyeblossoms

Eyeblossoms are new flowers that generate in the Pale Garden biome. Unique features:

-   They exist in two variants: Closed and Open Eyeblossom
-   Eyeblossoms transition between the two variants based on the time of day
    -   During the night, Eyeblossoms will become Open
    -   During the day, they will become Closed
    -   In dimensions that do not have a day/night cycle, they will remain as-is
    -   When transitioning, flowers will emit a particle effect
-   Eyeblossoms planted on the ground will communicate with each other, helping each other to open or close
-   Open Eyeblossoms have glowing eyes during the night
-   Eyeblossoms can be obtained by bonemealing the grass in the Pale Garden biome
-   Bees get poisoned when they touch Eyeblossoms
-   Bees can be tempted by Eyeblossoms, but they get poisoned on player interaction instead of typical breeding/growing behaviour
-   Suspicious Stew made from Eyeblossom will have Blindness or Nausea effect depending on the variant
-   Gray or Orange Dye can be crafted from Closed and Open Eyeblossoms respectively
-   Wandering Trader can sell Open Eyeblossoms

### Added Resin Clump, Block of Resin, Resin Brick, and a family of Resin Bricks blocks

-   Attacking a Creaking will cause its Creaking Heart to exude 2 to 3 Resin Clumps
-   Resin Clump spawns on the sides of Pale Oak Logs that are close, and are connected to the Creaking Heart
-   Creaking Heart is on cooldown and cannot produce more Resin Clumps for 5 seconds after an attack
-   Resin Clump can be used as a material for armor trimming
-   Block of Resin is a storage block for Resin Clumps
-   Resin Clumps can be smelted into Resin Brick items
-   Resin Brick items can be crafted into Resin Bricks, Resin Brick Slabs, Resin Brick Stairs, Resin Brick Walls, and then Chiseled Resin Bricks
-   Resin Clump and Resin Block does not require a tool and are mined instantly
-   The proper tool for Resin Bricks family of blocks is a pickaxe
-   Resin Clumps can be found in the Woodland Mansion chest loot

## Changes

-   The panorama has been updated
-   Sword is no longer efficient to break Moss Carpet. The proper tool for Moss Carpet remains the Hoe
-   Bees are now withered on player interactions with Wither Roses instead of typical breeding/growing behavior

### Required tools for drops

> **Developer's Note**: _We made it so any block that drops when its support is broken will also drop when mined with any tool. It seemed unfair that breaking a block directly could destroy it if it was possible to obtain it with any tool just by breaking the block below!_

-   The following blocks that require support now always drop when broken with any tool: Bell, Lantern, Soul Lantern, all Copper Doors, Iron Door, Heavy Weighted Pressure Plate, Light Weighted Pressure Plate, Polished Blackstone Pressure Plate, and Stone Pressure Plate
-   The Brewing Stand now drops when broken with any tool
-   The Ender Chest now drops Obsidian when broken with an incorrect tool, instead of dropping nothing

### Pale Garden

-   Pale Garden has no music and if a player enters the biome while music is playing, the music will fade out

### Creaking Heart

-   Creaking Heart can be obtained by using a Silk Touch enchanted tool
-   Creaking Heart can be crafted with a Resin Block and Pale Oak Logs
-   Naturally placed Creaking Hearts drop 20-24 experience when broken by a player, with or without silk touch
-   Breaking a Creaking Heart block will drop a 1-3 Resin Clumps, and it is affected by Fortune enchantment

### Pale Oak Tree

-   Pale Oak Leaves have a chance to spawn leaf particles if exposed on the bottom side
-   Player grown Pale Oak trees grow without any decorations
-   Naturally generated Pale Oak trees have Pale Hanging Moss hanging from the foliage, Pale Moss patches on the ground, and Creaking Heart blocks can generate in them
-   Wandering Trader can sell Pale Oak Saplings

### Pale Moss Block

-   Wandering Trader can sell a Pale Moss Block

### Pale Hanging Moss

-   Pale Hanging Moss breaks instantly when mined
-   Pale Hanging Moss requires shears or silk touch tools to be obtained
-   Wandering Trader can sell Pale Hanging Moss

### Creaking mob

-   Creaking melee attacks deal 3 points of damage (1.5 hearts)
-   Illagers are scared of Creaking and will run away from them

The following changes apply for naturally spawning Creaking:

-   Creaking reacts only to damage caused by mobs and projectiles, by swaying in place
-   Creaking ignores Cactus, Sweet Berry Bushes and Powder Snow damage and can now walk through/over them
-   Creaking has a twitching animation
-   Is fire-resistant
-   Creaking Heart decides to remove or replace the connected Creaking when:
    -   It turns day
    -   The Creaking is too far away from the Creaking Heart
    -   A player intersects with the Creaking for a few seconds

## Technical Changes

-   The Data Pack version is now 58
-   The Resource Pack version is now 43
-   Removed the `winter_drop` feature flag and built-in data pack

## Data Pack Version 58

-   `trail` particle has a new required field: `duration`
    -   Indicates, in ticks, how long the particle will take to fly from the start to the target
-   `simple_block` feature type has a new optional field: `schedule_tick`
    -   If set to `true`, the block will be scheduled to tick
-   biome effects have a new format for `music` using a weighted list
    -   The list can be empty indicating no music should play in this biome
-   biome effects have a new optional field: `music_volume`
    -   The game will smoothly transition between the current music volume and the new volume when entering the biome

      "music": [
        {
          "data": {
            "max_delay": 24000,
            "min_delay": 12000,
            "replace_current_music": false,
            "sound": "minecraft:music.overworld.forest"
          },
          "weight": 1
        }
      ],
      "music_volume": 1.0,
    

-   Item blocks with `minecraft:block_entity_data` component will now set block entity data only if `id` tag matches type of placed block entity
    -   Additionally, a warning will be added to item tooltip if placing such item might directly or indirectly lead to command execution with high permission level

### Commands

-   Suggestions will now be shown for attribute modifier IDs existing on the target in the `attribute` command

#### `attribute` Command

New subcommand to reset the base value of an attribute to its default value for the target entity. If the attribute does not exist on the entity, the command will fail.

Syntax:

    attribute <target> <attribute> base reset 
    

Parameters:

-   `target`: The entity to update the attribute for
-   `attribute`: The attribute ID to update

### TNT Minecart Data

-   The `TNTFuse` field of TNT Minecarts has been renamed to `fuse`
-   Addeded optional field `explosion_speed_factor` that controls the amount of added damage depending on the speed of the Minecart
    -   Default value: `1.0`

### Text Components

Added optional `shadow_color` style field to Text Components, which overrides the shadow properties of text.

-   Format:
    -   A packed integer ARGB value (e.g. `-1`)
    -   An array of RGBA values (e.g. `[1, 1, 1, 1]`)
-   If specified as `0`, the shadow will never be displayed for this text
-   If specified as a non-zero value, the shadow will always be displayed with this color

## Resource Pack Version 43

-   Added the following new block models and textures:
    -   `chiseled_resin_bricks`
    -   `closed_eyeblossom`
    -   `open_eyeblossom`
        -   Additionally uses `open_eyeblossom_emissive` texture layer
    -   `resin_block`
    -   `resin_bricks`
    -   `resin_clump`
-   Added the following non-top-level block models:
    -   `cross_emissive`
    -   `flower_pot_cross_emissive`
-   Added the following new item models and textures:
    -   `resin_brick`
    -   `resin_clump`
-   Added new Armor Trim color palette: `trims/color_palettes/resin`
-   Updates to GUI sprites
-   The UV mapping of the Magma Cube texture has been updated

### GUI Sprites

-   The `toast/system` sprite layout has been updated to use standard nine-slicing functionality
-   The `toast/tutorial` sprite will now be scaled for taller toasts, and as such has nine-slice scaling in the default Resource Pack
-   The `advancements/box_obtained` and `advancements/box_unobtained` GUI sprites are now configured to scale with nine-slicing
-   Empty slot sprites, such as those for the armor slots in the inventory, have been renamed and moved from `items` into the `gui/sprites/container/slot` directory
    -   `empty_armor_slot_helmet` -> `helmet`
    -   `empty_armor_slot_chestplate` -> `chestplate`
    -   `empty_armor_slot_leggings` -> `leggings`
    -   `empty_armor_slot_boots` -> `boots`
    -   `empty_slot_sword` -> `sword`
    -   `empty_slot_pickaxe` -> `pickaxe`
    -   `empty_slot_axe` -> `axe`
    -   `empty_slot_shovel` -> `shovel`
    -   `empty_slot_hoe` -> `hoe`
    -   `empty_slot_smithing_template_armor_trim` -> `smithing_template_armor_trim`
    -   `empty_slot_smithing_template_netherite` -> `smithing_template_netherite`
    -   `empty_slot_amethyst_shard` -> `amethyst_shard`
    -   `empty_slot_diamond` -> `diamond`
    -   `empty_slot_emerald` -> `emerald`
    -   `empty_slot_ingot` -> `ingot`
    -   `empty_slot_lapis_lazuli` -> `lapis_lazuli`
    -   `empty_slot_quartz` -> `quartz`
    -   `empty_slot_redstone_dust` -> `redstone_dust`
-   The empty slot sprites in the Loom have been split from their background and moved:
    -   `container/loom/banner_slot` -> `container/slot/banner`
    -   `container/loom/pattern_slot` -> `container/slot/banner_pattern`
    -   `container/loom/dye_slot` -> `container/slot/dye`
-   The empty slot sprites in the Brewing Stand have been split from the container background:
    -   `container/slot/brewing_fuel`
    -   `container/slot/potion`
-   The empty slot sprites in the Horse/Llama inventories have been split from their background, cropped, and moved:
    -   `container/horse/armor_slot` -> `container/slot/horse_armor`
    -   `container/horse/llama_armor_slot` -> `container/slot/llama_armor`
    -   `container/horse/saddle_slot` -> `container/slot/saddle`

## Fixed bugs in 24w44a

-   [MC-12829](https://bugs.mojang.com/browse/MC-12829) Flying through climbable blocks in creative mode slows you down
-   [MC-16132](https://bugs.mojang.com/browse/MC-16132) Cave carvers don't cut through snow blocks
-   [MC-49071](https://bugs.mojang.com/browse/MC-49071) The title of written books is not displayed in item frames unless renamed with anvils
-   [MC-50614](https://bugs.mojang.com/browse/MC-50614) Villager trading window is not closed when villager leaves interaction range
-   [MC-55347](https://bugs.mojang.com/browse/MC-55347) Title with long duration shows in other world
-   [MC-59308](https://bugs.mojang.com/browse/MC-59308) Dark/pale oak leaves sometimes do not generate centered on the tree
-   [MC-71990](https://bugs.mojang.com/browse/MC-71990) The 'Hat' layer of a player skin is not shown in the tab list under certain conditions
-   [MC-72846](https://bugs.mojang.com/browse/MC-72846) Altering the time of day using commands is delayed
-   [MC-74408](https://bugs.mojang.com/browse/MC-74408) The brewing stand GUI does not have container sprites for the fuel and potion output slots
-   [MC-86153](https://bugs.mojang.com/browse/MC-86153) Ctrl Pick Block gives new item even if picked item already exists in inventory
-   [MC-111516](https://bugs.mojang.com/browse/MC-111516) Player flickers/turns invisible when flying at high speeds
-   [MC-134002](https://bugs.mojang.com/browse/MC-134002) Blocks at y=-64 don't render on a map
-   [MC-152728](https://bugs.mojang.com/browse/MC-152728) The player continues sprinting when performing actions that slow them down
-   [MC-158205](https://bugs.mojang.com/browse/MC-158205) Ender Dragon doesn't take damage from melee attacks unless hit a certain way
-   [MC-166614](https://bugs.mojang.com/browse/MC-166614) Advancements menu doesn't render titles fully when they're longer than roughly 30 characters
-   [MC-191096](https://bugs.mojang.com/browse/MC-191096) Fences and walls can no longer be placed in invalid block states by using /setblock or /fill
-   [MC-191698](https://bugs.mojang.com/browse/MC-191698) Cannot set "shape" block state of stairs with /setblock
-   [MC-192498](https://bugs.mojang.com/browse/MC-192498) /fill and /setblock cannot set different directional block states of several blocks, such as glass panes and iron bars
-   [MC-192791](https://bugs.mojang.com/browse/MC-192791) Doors' block states cannot be set if another door half exists
-   [MC-192956](https://bugs.mojang.com/browse/MC-192956) Cannot setblock chest type other than single without other adjacent chest
-   [MC-192959](https://bugs.mojang.com/browse/MC-192959) Cannot setblock a directional state on redstone wire nor tripwire
-   [MC-203146](https://bugs.mojang.com/browse/MC-203146) No subtitle for item.crossbow.loading\_middle
-   [MC-225367](https://bugs.mojang.com/browse/MC-225367) Magma Cube's layers UV mapping overlaps
-   [MC-255254](https://bugs.mojang.com/browse/MC-255254) Use /setblock can't place snowy grass block
-   [MC-256822](https://bugs.mojang.com/browse/MC-256822) Advancement description text cuts words in weird places if title is too short
-   [MC-264541](https://bugs.mojang.com/browse/MC-264541) Nine\_sliced sprite glitch
-   [MC-265033](https://bugs.mojang.com/browse/MC-265033) Slots with item outline textures behave inconsistently when items are placed inside of these slots
-   [MC-265637](https://bugs.mojang.com/browse/MC-265637) /execute on origin doesn't work on Area Effect Cloud's owner after rejoining
-   [MC-266019](https://bugs.mojang.com/browse/MC-266019) Large bold text can have gaps in the middle of characters
-   [MC-267095](https://bugs.mojang.com/browse/MC-267095) Nether Brick block texture misalignment
-   [MC-267730](https://bugs.mojang.com/browse/MC-267730) Text wall when trying to join a server
-   [MC-267878](https://bugs.mojang.com/browse/MC-267878) Tutorial hint for movement may not fit all the required text if controls are changed
-   [MC-268364](https://bugs.mojang.com/browse/MC-268364) Wind Charges don't ignite TNT minecarts
-   [MC-268522](https://bugs.mojang.com/browse/MC-268522) The last language option is not deselected if you reach the bottom of the list and exit the menu
-   [MC-268822](https://bugs.mojang.com/browse/MC-268822) There are no shadows on text displayed within the singleplayer, multiplayer, and realms list menus
-   [MC-271218](https://bugs.mojang.com/browse/MC-271218) Empty Offers:{} NBT doesn't disable trades anymore
-   [MC-272062](https://bugs.mojang.com/browse/MC-272062) Dimension padding doesn't affect the start piece
-   [MC-272105](https://bugs.mojang.com/browse/MC-272105) Decorated Pot is missing the "contents" implicit data component type
-   [MC-275917](https://bugs.mojang.com/browse/MC-275917) Consumable blocking animation is broken in first person
-   [MC-276123](https://bugs.mojang.com/browse/MC-276123) Display entity shadow\_radius updates for all display entities
-   [MC-276389](https://bugs.mojang.com/browse/MC-276389) The "Can hold a mixed stack of items" text within bundle tooltips doesn't have a shadow
-   [MC-276794](https://bugs.mojang.com/browse/MC-276794) There are no shadows on text displayed within the social interactions list menu
-   [MC-276799](https://bugs.mojang.com/browse/MC-276799) There are no shadows on text displayed within the superflat customization or preset lists
-   [MC-276969](https://bugs.mojang.com/browse/MC-276969) TNT Minecarts with explosion\_power set to 0 can still break blocks
-   [MC-277066](https://bugs.mojang.com/browse/MC-277066) Creakings do not show particles leading to the creaking heart if Particles are set to Minimal
-   [MC-277072](https://bugs.mojang.com/browse/MC-277072) You can use bone meal on pale moss carpets in situations where nothing grows
-   [MC-277076](https://bugs.mojang.com/browse/MC-277076) Pale hanging moss doesn't have an assigned tool
-   [MC-277094](https://bugs.mojang.com/browse/MC-277094) Pale oak hanging sign uses a totally different palette to the rest of the wood set
-   [MC-277101](https://bugs.mojang.com/browse/MC-277101) Destroying a creaking heart with player-activated TNT does not grant the Monster Hunter advancement
-   [MC-277113](https://bugs.mojang.com/browse/MC-277113) Pale oak sign item and block texture is inconsistent with the other signs
-   [MC-277115](https://bugs.mojang.com/browse/MC-277115) Creaking mob can spawn inside block
-   [MC-277123](https://bugs.mojang.com/browse/MC-277123) You can get soft locked if a creaking falls in a hole with you
-   [MC-277129](https://bugs.mojang.com/browse/MC-277129) The Creaking "slides" on the ground when not aggro towards the player
-   [MC-277134](https://bugs.mojang.com/browse/MC-277134) Pale chest boat item is incorrect
-   [MC-277145](https://bugs.mojang.com/browse/MC-277145) The 2 brightest pixel colors on pale oak boat items are wrong
-   [MC-277164](https://bugs.mojang.com/browse/MC-277164) Music plays in the pale garden
-   [MC-277202](https://bugs.mojang.com/browse/MC-277202) Differences in the highlight effect of empty slot outlines in the GUI
-   [MC-277213](https://bugs.mojang.com/browse/MC-277213) Subtitles for cave sounds, creaking heart idle sounds, and pale hanging moss idle sounds are identical but are shown separately
-   [MC-277214](https://bugs.mojang.com/browse/MC-277214) The sound event associated with the "Creaking sees player" subtitle doesn't exist
-   [MC-277268](https://bugs.mojang.com/browse/MC-277268) Pufferfish have no hit delay on creakings; they make a loud buzzing noise constantly
-   [MC-277271](https://bugs.mojang.com/browse/MC-277271) Sniffers can't dig into pale moss
-   [MC-277275](https://bugs.mojang.com/browse/MC-277275) Crash upon loading chunks when teleporting
-   [MC-277305](https://bugs.mojang.com/browse/MC-277305) Creakings are able to be pushed around by entities and players when standing on soul sand and mud
-   [MC-277363](https://bugs.mojang.com/browse/MC-277363) Creakings cannot rotate their heads independently from their bodies
-   [MC-277368](https://bugs.mojang.com/browse/MC-277368) The "message(s) selected" text within the "Select Chat Messages to Report" menu is positioned too close to the header separator
-   [MC-277373](https://bugs.mojang.com/browse/MC-277373) There are no shadows on text used to display the names of categories within the key binds menu
-   [MC-277374](https://bugs.mojang.com/browse/MC-277374) There are no shadows on text used to display the names of lists within the resource pack and data pack menus
-   [MC-277387](https://bugs.mojang.com/browse/MC-277387) Evokers run away from creakings faster than other illagers
-   [MC-277408](https://bugs.mojang.com/browse/MC-277408) There are no shadows on text used to display the description of report categories within the "Select Report Category" menu
-   [MC-277440](https://bugs.mojang.com/browse/MC-277440) There are no shadows on text used to display the speed at which a world is being uploaded within the realms menu
-   [MC-277441](https://bugs.mojang.com/browse/MC-277441) There are no shadows on text used to display the start date and time left of your realm subscription within the realms menu
-   [MC-277443](https://bugs.mojang.com/browse/MC-277443) There are no shadows on text displayed when connecting to realms
-   [MC-277444](https://bugs.mojang.com/browse/MC-277444) There are no shadows on text used to display the names of text boxes within the realms settings menu
-   [MC-277477](https://bugs.mojang.com/browse/MC-277477) There are no shadows on text used to display the description of advancements within the advancements menu
-   [MC-277478](https://bugs.mojang.com/browse/MC-277478) The "Layer Material" and "Height" text within the "Superflat Customization" menu is positioned too close to the header separator
-   [MC-277479](https://bugs.mojang.com/browse/MC-277479) There are no shadows on text used to display the names of game rules within the game rules menu
-   [MC-277480](https://bugs.mojang.com/browse/MC-277480) There are no shadows on placeholder text displayed within the "Please describe what happened" box within the reporting menu
-   [MC-277510](https://bugs.mojang.com/browse/MC-277510) When grass or mycelium grows under powder snow the grass is not snowy
-   [MC-277549](https://bugs.mojang.com/browse/MC-277549) Arrows summoned with custom motion don't render correctly
-   [MC-277557](https://bugs.mojang.com/browse/MC-277557) Creaking Heart has inconsistent and miscolored pixels
-   [MC-277617](https://bugs.mojang.com/browse/MC-277617) The base damage of the Power enchantment was reduced in 1.21
-   [MC-277651](https://bugs.mojang.com/browse/MC-277651) Arrows and tridents glitch when in an explosion or wind charge burst
-   [MC-277657](https://bugs.mojang.com/browse/MC-277657) Arrows are not correctly affected by rising bubble columns
-   [MC-277658](https://bugs.mojang.com/browse/MC-277658) Tridents glitch up and down in rising bubble columns
-   [MC-277682](https://bugs.mojang.com/browse/MC-277682) Arrows and tridents glitch after shooting/throwing them onto magma/soul sand blocks underwater
-   [MC-277742](https://bugs.mojang.com/browse/MC-277742) Creakings activate for a brief moment when switching from Creative to Spectator mode
-   [MC-277754](https://bugs.mojang.com/browse/MC-277754) Chunks on the corner of the rendering distance are not synchronized between client and server for the terrain
-   [MC-277776](https://bugs.mojang.com/browse/MC-277776) Baby cats and ocelots size is changed
-   [MC-277815](https://bugs.mojang.com/browse/MC-277815) Creakings on a team can still be observed and stopped by teammate players
-   [MC-277833](https://bugs.mojang.com/browse/MC-277833) Creakings can attack players in the same team as them
-   [MC-277871](https://bugs.mojang.com/browse/MC-277871) Creaking Hearts do not have a unique place sound

---

