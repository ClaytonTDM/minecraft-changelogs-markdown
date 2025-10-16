# Minecraft 1.20.5 Pre-Release 1

It is now time for the first Pre-release of Minecraft 1.20.5, featuring some tweaks to Trial Chambers and Ominous Trials, as well as new advancements, a big set of technical tweaks and changes, and lots of bug fixes.

From now on, you should mostly see bugs being fixed. In addition to that, pre-releases don't follow the regular snapshot cadence of releasing on Wednesdays, so keep an eye out for the next pre-release.

## Experimental Features

### Trial Chambers

-   More consistently buried by terrain when found underground
-   Remade 'Chamber 6' with variations, and renamed it to 'Assembly'
-   Added a new trap dispenser style to chambers
-   Fixed various broken jigsaw connections in the corridors
-   Chamber Eruption:
    -   Stopped Tuff Bricks from spawning in the air
    -   Added more lights to quadrants

### Ominous Trials

-   Mobs that can wear equipment will now often spawn with enchanted weapons and armor
    -   Armor enchantments include Protection IV, Projectile Protection IV and Fire Protection IV
    -   Weapon enchantments include Sharpness I, Knockback I, Power I and Punch I
-   Mobs that wear equipment no longer have a chance to drop their equipment on death
-   Players are now chosen 50% of the time when an Ominous Trial Spawner chooses which entity to drop projectiles on top of
    -   Projectiles now spawn more accurately above chosen entities

### Weaving

-   Now more consistently spawns 2-3 cobwebs on death
-   Players are now affected by the movement buff through Cobwebs
    -   Move through Cobweb with 50% of their normal speed instead of 25%

### Infested

-   Now has a 10% chance to spawn 1-2 Silverfish instead of 5%
-   Silverfish will now spawn at the center of the entity's bounding box and fling out in the direction the entity is facing

### Oozing

-   Will only spawn slimes in a given 5x5x5 area up to the max entity cramming count

### Advancements

-   Added `Revaulting` - Unlock an Ominous Vault with an Ominous Trial Key

## New Features in 1.20.5-pre1

### Advancements

-   Added the following advancements:
    -   `Isn't it Scute?` - Get Armadillo Scutes from an Armadillo using a Brush
    -   `Snip it!` - Remove Wolf Armor from a Wolf using Shears
    -   `Good as New` - Repair a damaged Wolf Armor using Armadillo Scutes
    -   `The Whole Pack` - Tame one of each Wolf variant

## Changes in 1.20.5-pre1

-   Added support for Viossa language

## Technical Changes

-   The Data Pack version is now 39

## Data Pack Version 39

-   Added new item sub-predicates and loot functions
-   Added new terrain adaptation type for structures: `encapsulate`
    -   Density will be added all around every piece of a structure
    -   Ideal for structures that need to be entirely covered underground
-   The page limit in Written Books has been removed
-   The combination of `max_stack_size` and `max_damage` components is no longer allowed in commands and data pack definitions
-   Added a new option `body` in entity `equipment` sub-predicate to match the item in the body armor slot of an entity
-   The `saturation_modifier` field on the `food` component has been replaced with `saturation`
    -   `saturation` is the exact value added to the player's saturation level
    -   In respect to the former `saturation_modifier`, this is defined by `saturation = nutrition * saturation_modifier * 2`
-   Particle representation in commands and area effect clouds has been changed
-   Changed optional `equipment_loot_table` field in the `SpawnPotentials` of Monster Spawners and `spawn_potentials` of Trial Spawner configs
    -   Now named `equipment` instead of `equipment_loot_table`
    -   Format: object with fields
        -   `loot_table` - A loot table used to generate the equipment
        -   `slot_drop_chances` - An optional map of equipment slot to specified drop chance
            -   Can also be a single value instead of a list to apply to all slots: e.g. `slot_drop_chances: 0.0f` will apply a chance of 0% to all slots
    -   e.g. `equipment: {loot_table: "minecraft:equipment/trial_chamber", slot_drop_chances: {"head": 0.0f, "chest": 0.25f, "legs": 1.0f, "feet": 0.25f}}`
    -   If present, rolled items from the specified loot table will be equipped to the mob that spawns
-   Removed Item tag `minecraft:tools` (overlapping with `minecraft:breaks_decorated_pots`)
-   Added Entity Type tag `minecraft:punchable_projectiles` for projectiles which should be able to be punched and deflected toward the direction the player is looking
-   Added Enchantment tag `minecraft:tooltip_order` controlling which order Enchantments are listed in tooltips

### Modified loot functions

#### `set_contents`

-   Unused field `type` has been removed
-   Added new mandatory field `component`:
    -   Describes target component to be filled with items
    -   Existing contents will be replaced
    -   Allowed values: `container`, `bundle_contents`, `charged_projectiles`
    -   `bundle_contents` and `charged_projectiles` will ignore empty stacks

#### `set_custom_data`

Field `tag` now accepts both SNBT data written as a string (existing format) and unflattened tags

### New Loot Functions

#### `modify_contents`

-   Apply modifier function to every item inside a component
-   If component does not exist, it will not be added
-   Fields:
    -   `conditions`\- list of conditions to filter this function
    -   `component` - target component
        -   Allowed values: `container`, `bundle_contents`, `charged_projectiles`
    -   `modifier` - function or list of functions to be applied to every item inside container

#### `set_item`

-   Replaces item type of item stack without changing count and components
-   Fields:
    -   `conditions` - list of conditions to filter this function
    -   `item` - new item type

#### `filtered`

-   Applies sub-function only to items that match item predicate
-   Fields:
    -   `conditions` - list of conditions to filter this function
    -   `item_filter` - item predicate used to match items
    -   `modifier` - functions to apply to matching items

#### `set_custom_model_data`

-   Sets `custom_model_data` component
-   Fields:
    -   `conditions` - list of conditions to filter this function
    -   `value` - integer number provider

### New Item Sub-predicates

General rules of component predicates:

-   Unless otherwise specified, a field in predicate with the same name as a field in component that matches (i.e. has the same name as predicate) will match that field value
-   Those fields will usually have the same type as in the components, but will be optional.
-   Exceptions:
    -   List fields will be replaced with collection matchers (see below)
    -   Integer and float fields will be replaced with ranges
    -   Registry ids will be replaced with a type that accepts id, list of ids or a tag

#### Collection matcher

Collection matcher is a shared part of predicate used for matching collections. Every instance of this matcher will have same fields with same functionality, with only difference being type of matched element Fields:

-   `size` - integer range to match against collection size
-   `contains` - a list of element predicates
    -   All conditions must match for predicate to pass
    -   Not all elements in tested container have to be matched
    -   Elements can be in any order
    -   Single element can match multiple predicates
    -   Examples (when matching item stacks):
        -   `{contents:[{item:diamond}]}` - will match when there is at least one diamond item
        -   `{contents:[{item:diamond}, {item:dirt}]}` - will match when there is at least one diamond item and at least one dirt item
-   `count` - a list of matchers on element counts
    -   Entry fields:
        -   `test` - element matcher
        -   `count` - optional integer range to check against number of elements passing `test`
    -   Examples (when matching item stacks):
        -   `{count:[{count:3,test:{items:diamond}}]}}` will match only when there are exactly 3 stacks of diamonds (no matter the stack size)

#### `container`

-   Matcher for `container` component (like shulker box)
-   Fields:
    -   `items` - optional collection matcher
        -   Note: empty items are ignored. That means `container~{items:{size:3}}` will only pass if there are exactly 3 non-empty stacks in container

### `bundle_contents`

-   Matcher for `bundle_contents` component
-   Fields:
    -   `items` - optional collection matcher

### `firework_explosion`

-   Matcher for `firework_explosion` component
-   Fields
    -   `shape` - optional matcher for shape, same values as `shape` field in `minecraft:firework_explosion` component
    -   `has_trail` - optional boolean
    -   `has_twinkle` - optional boolean

### `fireworks`

-   Matcher for `fireworks` component
-   Fields:
    -   `explosions` - optional collection matcher for `firework_explosion` predicates
    -   `flight_duration` - optional integer range check for flight duration
-   Example: `minecraft:fireworks~{explosions:{contains:[{shape:small_ball}]}}]` - matches if firework has at least one explosion with `small_ball` shape

### `writable_book_content`

-   Matcher for `writable_book_content` component
-   Fields
    -   `pages` - optional collection matcher for strings (matching only unfiltered contents of page)

### `fireworks`

-   Matcher for `written_book_content` component
-   Fields
    -   `pages` - optional collection matcher for chat components (matching only unfiltered contents of page)
    -   `author` - optional string value
    -   `title` - optional string value (matching only value)
    -   `generation` - optional integer range check for generation
    -   `resolved` - optional boolean

### `attribute_modifiers`

-   Matcher for `attribute_modifiers` component
-   Fields:
    -   `modifiers` - optional collection matcher for following entries with following fields:
        -   `attribute` - optional id, list of ids or tag for attribute to be matched
        -   `id` - optional UUID
        -   `name` - optional string
        -   `amount` - optional double range check
        -   `operation` - optional operation type (same values as `operation` field from `attribute_modifiers` component)
        -   `slot` - optional applicable slot type (same values as `slot` field from `attribute_modifiers` component)

### `trim`

-   Matcher for `trim` component
-   Fields:
    -   `material` - optional id, list of ids or tag for material to be matched
    -   `pattern` - optional id, list of ids or tag for pattern to be matched

### Particle representation

-   Particle options in commands and in fields like `Particles` in Area Effect clouds now use the same representation as worldgen files (like existing biomes' ambient particle settings)
-   For example, command `/particle minecraft:dust 1.0 0.0 0.0 2.0 ...` becomes `/particle minecraft:dust{color:[1.0, 0.0, 0.0], scale:2.0} ...`
-   The syntax for particles without extra options (like `minecraft:villager`) remains unchanged
-   Changes to block particles (`minecraft:block`, `minecraft:block_marker`, `minecraft:falling_dust`, `minecraft:dust_pillar`) options:
    -   Field `value` has been renamed to `block_state`
    -   Field `block_state` now also accepts plain block name to represent default block state
    -   Example transformations:
        -   `minecraft:block minecraft:redstone_lamp[lit=true]` -> `minecraft:block{block_state: {Name: "minecraft:redstone_lamp", Properties: {lit: "true"}}}`
        -   `minecraft:block minecraft:diamond_block` -> `minecraft:block{block_state: "minecraft:diamond_block"}`
-   Changes to `minecraft:item` options:
    -   Field `value` has been renamed to `item`
    -   Field `item` now also accepts plain item name to represent item stack with default components
    -   `count` field is now ignored
    -   Example transformations:
        -   `minecraft:item minecraft:dirt` -> `minecraft:item{item: {id: "minecraft:dirt"}}`
        -   `minecraft:item minecraft:dirt` -> `minecraft:item{item: "minecraft:dirt"}`
-   Changes to `dust_color_transition` options:
    -   Field `fromColor` has been renamed to `from_color`
    -   Field `toColor` has been renamed to `to_color`
    -   Example transformation: `dust_color_transition 1.0 0.0 0.0 0.5 0.0 1.0 0.5` -> `dust_color_transition{from_color: [1.0f, 0.0f, 0.0f], scale: 0.5f, to_color: [0.0f, 1.0f, 0.5f]}`
-   Changes to `entity_effect` options:
    -   Field `value` has been renamed to `color`
    -   Field `color` now also accepts list of floats representing RGBA color

## Fixed bugs in 1.20.5 Pre-Release 1

-   [MC-165435](https://bugs.mojang.com/browse/MC-165435) Can't trigger flying mode in creative while standing in the middle of 2×2 magma block bubble column
-   [MC-188497](https://bugs.mojang.com/browse/MC-188497) AngerTime and AngryAt cannot be set on summon
-   [MC-207353](https://bugs.mojang.com/browse/MC-207353) Ghast fireballs and wind charges can't be redirected in melee if the attack does 0 damage
-   [MC-263315](https://bugs.mojang.com/browse/MC-263315) Attack Target of hoglins/zoglins can't be detected by /execute on target
-   [MC-264456](https://bugs.mojang.com/browse/MC-264456) Entity targeted by frogs and axolotls can't be detected by /execute on target
-   [MC-265390](https://bugs.mojang.com/browse/MC-265390) Forceload Command provides wrong output
-   [MC-267934](https://bugs.mojang.com/browse/MC-267934) Sending ClientboundTransferPacket followed by disconnect just kicks the player
-   [MC-268000](https://bugs.mojang.com/browse/MC-268000) The client crashes when using /give to give players a skull
-   [MC-268346](https://bugs.mojang.com/browse/MC-268346) Jump can be used with generic.jump\_strength set to 0 resulting in a speed boost
-   [MC-268947](https://bugs.mojang.com/browse/MC-268947) Flying cannot be initiated reliably when the minecraft:generic.gravity attribute is increased
-   [MC-269191](https://bugs.mojang.com/browse/MC-269191) Old villagers can't trade
-   [MC-269192](https://bugs.mojang.com/browse/MC-269192) Breeze is not affected by the 'execute on target' command
-   [MC-269266](https://bugs.mojang.com/browse/MC-269266) Area effect cloud particles from creeper explosions are incorrectly tinted
-   [MC-269320](https://bugs.mojang.com/browse/MC-269320) Books with more than 100 pages get cut off when upgraded
-   [MC-269357](https://bugs.mojang.com/browse/MC-269357) Flow and guster banner pattern descriptions display as raw translation strings
-   [MC-269366](https://bugs.mojang.com/browse/MC-269366) Mace doesn't break Decorated Pots unlike other tools
-   [MC-269496](https://bugs.mojang.com/browse/MC-269496) You don't get any damage if you fight against the breeze in a minecart or in a boat
-   [MC-269501](https://bugs.mojang.com/browse/MC-269501) The text above the hotbar has no background, even when the "Text Background" setting is "Everywhere" in spectator mode
-   [MC-269508](https://bugs.mojang.com/browse/MC-269508) Player keeps vertical momentum when jumping when landing on the ground from sonic boom
-   [MC-269609](https://bugs.mojang.com/browse/MC-269609) Wind charges can harm the ender dragon while it perches atop the end portal, unlike arrows and tridents.
-   [MC-269610](https://bugs.mojang.com/browse/MC-269610) Wind charges have the capability to harm the wither when it has reached half health or less
-   [MC-269680](https://bugs.mojang.com/browse/MC-269680) Game crashes when trying to save after modifying item stack to have a max\_stack\_size below its current stack size
-   [MC-269707](https://bugs.mojang.com/browse/MC-269707) Brewing stand slots have artificial maximum stack size of 64
-   [MC-269765](https://bugs.mojang.com/browse/MC-269765) Mace damage does not reset after a hit while still falling
-   [MC-269933](https://bugs.mojang.com/browse/MC-269933) limit\_count item modifier can create overstacked items
-   [MC-269947](https://bugs.mojang.com/browse/MC-269947) Clicking spam with Mace causes very high damage
-   [MC-269948](https://bugs.mojang.com/browse/MC-269948) The subtitle for the "minecraft:event.mob\_effect.raid\_omen" sound event displays as a raw translation string
-   [MC-269949](https://bugs.mojang.com/browse/MC-269949) New "Raid Omen" effect texture is using Programmer Art Evoker as base
-   [MC-269954](https://bugs.mojang.com/browse/MC-269954) Striking non-living entities with a mace enchanted with Wind Burst propels the player upward, even when they are flying
-   [MC-269955](https://bugs.mojang.com/browse/MC-269955) When flying in creative mode, hitting ender dragons with a mace enchanted with Wind Burst pushes the player upward, unlike when attacking other mobs
-   [MC-269959](https://bugs.mojang.com/browse/MC-269959) "Not a list" printed to console when loading into a world
-   [MC-269961](https://bugs.mojang.com/browse/MC-269961) Non-player entities with the Weaving effect can't walk through Cobweb at normal speeds
-   [MC-269963](https://bugs.mojang.com/browse/MC-269963) Bad Omen is not removed when experimental features are disabled
-   [MC-269974](https://bugs.mojang.com/browse/MC-269974) Mobs with the weaving effect, when dying, are unable to replace replaceable blocks with cobwebs
-   [MC-269976](https://bugs.mojang.com/browse/MC-269976) Wind Burst book available from villager trading
-   [MC-269977](https://bugs.mojang.com/browse/MC-269977) Wind Burst enchantment is obtainable in Enchanting Table
-   [MC-269980](https://bugs.mojang.com/browse/MC-269980) Wind Burst enchantment triggers from normal attacks rather than smash attacks
-   [MC-269993](https://bugs.mojang.com/browse/MC-269993) Hitting wind charges using mace with Wind Burst creates very high upwards momentum
-   [MC-269999](https://bugs.mojang.com/browse/MC-269999) Potions of Infestation, Oozing and Weaving can be obtained without experimental features enabled
-   [MC-270001](https://bugs.mojang.com/browse/MC-270001) The particle 'minecraft:item minecraft:air' crashes the client
-   [MC-270004](https://bugs.mojang.com/browse/MC-270004) Giving yourself an item with a Wind Burst enchantment level higher than 3, then hitting certain entities crashes the game
-   [MC-270005](https://bugs.mojang.com/browse/MC-270005) Mace smash attack can be done multiple times from a single fall
-   [MC-270009](https://bugs.mojang.com/browse/MC-270009) Entities with the infested effect can spawn silverfish without actually being hurt
-   [MC-270048](https://bugs.mojang.com/browse/MC-270048) Vault textures are inconsistent
-   [MC-270060](https://bugs.mojang.com/browse/MC-270060) The glowing parts of trial spawner textures are inconsistent
-   [MC-270094](https://bugs.mojang.com/browse/MC-270094) Fletcher sells new tipped arrows without experimental features enabled
-   [MC-270099](https://bugs.mojang.com/browse/MC-270099) Killing a mob with Weaving effect places cobwebs even if mobGriefing is disabled
-   [MC-270119](https://bugs.mojang.com/browse/MC-270119) The contents slot for the /item command does not function with shot arrows, tridents, and fireballs
-   [MC-270125](https://bugs.mojang.com/browse/MC-270125) Wind Burst can be obtained from chest and fishing loot
-   [MC-270158](https://bugs.mojang.com/browse/MC-270158) Wind Burst activates while mace is on cooldown
-   [MC-270161](https://bugs.mojang.com/browse/MC-270161) Wind burst enchantment is significantly stronger on vehicle entities
-   [MC-270201](https://bugs.mojang.com/browse/MC-270201) Fishing rod line does not account for the scale attribute in third-person
-   [MC-270236](https://bugs.mojang.com/browse/MC-270236) area\_effect\_cloud and lingering potions causing potion\_contents.custom\_color to be slightly transparent
-   [MC-270412](https://bugs.mojang.com/browse/MC-270412) Wind charge item crash on non-experimental worlds.
-   [MC-270475](https://bugs.mojang.com/browse/MC-270475) Container component slot -1 crash

---

We're releasing a Release Candidate for Minecraft 1.20.4. This Release Candidate fixes a critical issue found after the release of Minecraft 1.20.3

## Fixed bugs in 1.20.4 Release Candidate 1

-   [MC-267185](https://bugs.mojang.com/browse/MC-267185) Decorated pots can delete items when reloading the world

---

We're now releasing the first (and hopefully last) release candidate for 1.20.3. Unless something critical pops up, no further changes will be made for the full release, which is planned for next week.

Happy Mining!

## Fixed bugs in 1.20.3 Release Candidate 1

-   [MC-266537](https://bugs.mojang.com/browse/MC-266537) Disparity between the read/write logic of the explosion packet

---

We're now releasing Pre-release 4 for 1.20.3 with a few more bug fixes.

Happy mining!

## Fixed bugs in 1.20.3 Pre-Release 4

-   [MC-266968](https://bugs.mojang.com/browse/MC-266968) /return executed within an advancement reward function globally discards all subsequent commands
-   [MC-267062](https://bugs.mojang.com/browse/MC-267062) Server list ping icon doesn't display tooltip

---

