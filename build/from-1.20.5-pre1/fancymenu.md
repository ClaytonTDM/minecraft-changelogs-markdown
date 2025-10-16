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

**`set_contents`**

-   Unused field `type` has been removed
-   Added new mandatory field `component`:
    -   Describes target component to be filled with items
    -   Existing contents will be replaced
    -   Allowed values: `container`, `bundle_contents`, `charged_projectiles`
    -   `bundle_contents` and `charged_projectiles` will ignore empty stacks

**`set_custom_data`**

Field `tag` now accepts both SNBT data written as a string (existing format) and unflattened tags

### New Loot Functions

**`modify_contents`**

-   Apply modifier function to every item inside a component
-   If component does not exist, it will not be added
-   Fields:
    -   `conditions`;;-;; list of conditions to filter this function
    -   `component` - target component
        -   Allowed values: `container`, `bundle_contents`, `charged_projectiles`
    -   `modifier` - function or list of functions to be applied to every item inside container

**`set_item`**

-   Replaces item type of item stack without changing count and components
-   Fields:
    -   `conditions` - list of conditions to filter this function
    -   `item` - new item type

**`filtered`**

-   Applies sub-function only to items that match item predicate
-   Fields:
    -   `conditions` - list of conditions to filter this function
    -   `item_filter` - item predicate used to match items
    -   `modifier` - functions to apply to matching items

**`set_custom_model_data`**

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

**Collection matcher**

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

**`container`**

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
-   [MC-268346](https://bugs.mojang.com/browse/MC-268346) Jump can be used with generic.jump;;_;;strength set to 0 resulting in a speed boost
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
-   [MC-269680](https://bugs.mojang.com/browse/MC-269680) Game crashes when trying to save after modifying item stack to have a max;;_;;stack;;_;;size below its current stack size
-   [MC-269707](https://bugs.mojang.com/browse/MC-269707) Brewing stand slots have artificial maximum stack size of 64
-   [MC-269765](https://bugs.mojang.com/browse/MC-269765) Mace damage does not reset after a hit while still falling
-   [MC-269933](https://bugs.mojang.com/browse/MC-269933) limit;;_;;count item modifier can create overstacked items
-   [MC-269947](https://bugs.mojang.com/browse/MC-269947) Clicking spam with Mace causes very high damage
-   [MC-269948](https://bugs.mojang.com/browse/MC-269948) The subtitle for the "minecraft:event.mob;;_;;effect.raid;;_;;omen" sound event displays as a raw translation string
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
-   [MC-270236](https://bugs.mojang.com/browse/MC-270236) area;;_;;effect;;_;;cloud and lingering potions causing potion;;_;;contents.custom;;_;;color to be slightly transparent
-   [MC-270412](https://bugs.mojang.com/browse/MC-270412) Wind charge item crash on non-experimental worlds.
-   [MC-270475](https://bugs.mojang.com/browse/MC-270475) Container component slot -1 crash

---

# Minecraft Snapshot 24w14a

Hello Minecraft players! Today we have a Snapshot with some technical changes and bug fixes for you.

## Technical Changes

-   The Data Pack version is now 38
-   The game now requires Java 21
-   The game now requires a 64-bit Operating System
-   The included Java distribution is now the Microsoft build of OpenJDK 21.0.2

## Data Pack Version 38

-   Added `replace` field to the `set_attributes` loot function (default: `true`)
    -   When `false`, attributes will be appended
-   The `text` field within filterable entries in book components has been renamed to `raw` to avoid ambiguity
-   The `profile` component and fields on player head items and blocks respectively now support resolving from a UUID
    -   By specifying the `id` field without a `name`, the `name` and textures will be looked up

## Fixed bugs in Snapshot 24w14a

-   [MC-80142](https://bugs.mojang.com/browse/MC-80142) Power tag for wither skulls, small/dragon fireballs and wind charges is not synced correctly, leading to stuttering during flight
-   [MC-266467](https://bugs.mojang.com/browse/MC-266467) Wind charges stutter when flying through the air
-   [MC-268563](https://bugs.mojang.com/browse/MC-268563) Snowballs, eggs, experience bottles, and ender pearls are destroyed instead of being deflected when hitting breezes
-   [MC-268597](https://bugs.mojang.com/browse/MC-268597) Hitting a breeze with a player reflected/dispensed wind charge causes it to become trapped within the breeze until it moves
-   [MC-268727](https://bugs.mojang.com/browse/MC-268727) Server disconnects the client when sending a keepalive packet while transitioning out of configuration phase
-   [MC-268877](https://bugs.mojang.com/browse/MC-268877) Beehives/bee nests in inventory lose honey level after converting to newer world version
-   [MC-268945](https://bugs.mojang.com/browse/MC-268945) Some interfaces instantly close when opened from long distances when players have their "minecraft:player.block;;_;;interaction;;_;;range" attribute set to high values
-   [MC-269355](https://bugs.mojang.com/browse/MC-269355) Heavy Core has no required tool
-   [MC-269446](https://bugs.mojang.com/browse/MC-269446) "Are you sure you want to quit?" screen uses background blur
-   [MC-269482](https://bugs.mojang.com/browse/MC-269482) The set;;_;;attributes function in loot tables no longer replaces default attribute modifiers
-   [MC-269503](https://bugs.mojang.com/browse/MC-269503) Goat horn default instrument is missing when using /give
-   [MC-269553](https://bugs.mojang.com/browse/MC-269553) Items with empty enchantments NBT tag do not upgrade as expected
-   [MC-269596](https://bugs.mojang.com/browse/MC-269596) EntityTag of existing items is not upgraded to entity;;_;;data component
-   [MC-269677](https://bugs.mojang.com/browse/MC-269677) Filterable "text" field conflicts with text components
-   [MC-269684](https://bugs.mojang.com/browse/MC-269684) Commands accepting stack sizes are restricted to a maximum of 64
-   [MC-269700](https://bugs.mojang.com/browse/MC-269700) Item count in "/item replace" is restricted to the default stack size
-   [MC-269716](https://bugs.mojang.com/browse/MC-269716) Unable to craft the maximum possible allowed items using shift-click in the recipe book
-   [MC-269960](https://bugs.mojang.com/browse/MC-269960) Ctrl + Pick block is not copying container data correctly
-   [MC-269983](https://bugs.mojang.com/browse/MC-269983) Player Head Data is not evaluated when id is present
-   [MC-269991](https://bugs.mojang.com/browse/MC-269991) Dragon breath particles look wrong
-   [MC-270003](https://bugs.mojang.com/browse/MC-270003) Ominous banners are not "pick block"-ed properly
-   [MC-270061](https://bugs.mojang.com/browse/MC-270061) Ctrl + Pick Block does not copy Trial Spawner data correctly
-   [MC-270162](https://bugs.mojang.com/browse/MC-270162) The game crashes when attempting to upgrade a world from version 1.12.2 and below
-   [MC-270187](https://bugs.mojang.com/browse/MC-270187) Command block's nbt cannot copy before second save

---

# Minecraft Snapshot 24w13a

This fine Wednesday brings 24w13a, a snapshot containing changes to the Mace, Trial Chambers, and introduces the new Ominous Trials!

You might just be inclined to try out the ominous new features of this snapshot. ...or else? Did I do that right?

Happy mining!

Note: some of the features below will only work in freshly generated Trial Chambers.

## Experimental Features

-   Changes to the Mace
-   Tweaks to the Breeze and Wind Charges
-   Redesigned Bad Omen
-   Added Ominous Bottle
-   Added 6 new mob effects
-   Added Ominous Trial Spawner
-   Added Ominous Vault
-   Added Ominous Trial Key

### Mace

-   Added a new explosive particle effect when executing a smash attack with the Mace to really show the player's power
-   Increased the power and range of the knockback effect from a smash attack
-   Introduced an even stronger knockback when falling for more than 5 blocks before attacking
-   When successfully striking a target, all vertical momentum will be reset in addition to negating any accumulated fall distance
-   The baseline additional damage dealt by the Mace smash attack has been slightly reduced to 3 (1.5 hearts) per fallen block
-   These existing enchantments can now be applied to the Mace:
    -   Mending
    -   Unbreaking
    -   Smite
    -   Bane of Arthropods
    -   Fire Aspect
    -   Curse of Vanishing
-   Three new enchantments have been introduced that are unique to the Mace:
    -   Density:
        -   Common Enchantment, accessible in the Enchanting Table and on Enchanted Books in loot
        -   Has 5 levels
        -   Maces enchanted with Density do more damage per fallen block per Density level
            -   Damage dealt per fallen block is increased by 1 per level of Density
    -   Breach:
        -   Rare Enchantment, accessible in the Enchanting Table and on Enchanted Books in loot
        -   Has 4 levels
        -   Maces enchanted with Breach reduce the effectiveness of armor on the target
            -   The effectiveness of the armor is reduced by 15% per Breach level
    -   Wind Burst:
        -   Unique enchantment which can only be found in Ominous Vaults
        -   Has 3 levels
        -   Maces enchanted with Wind Burst will emit a Wind Burst upon hitting an enemy, launching the attacker upward and enabling the linking of smash attacks one after the other
        -   Each level will bounce the attacker higher up in the air

### Breeze & Wind Charges

-   The Breeze now avoids jumping into dangerous blocks or air
-   Wind Charges no longer collide with End Crystals

### Ominous Events

-   Bad Omen has been expanded to give access to an optional experience in Trial Chambers
-   These optional experiences accessed through Bad Omen are now known as Ominous Events
    -   They are more challenging than usual, and are designed to shake up the experience in unique ways
    -   Illager Raids are an example of an existing Ominous Event
-   Bad Omen is getting some changes with this redesign:
    -   It has a new, shadowy icon and a sound for being applied to the player
    -   It no longer triggers a Raid directly when entering a village
        -   Instead, it will transform into a Raid Omen variant with a duration of 30 seconds
        -   Once the Raid Omen expires, a Raid will start at the location the player gained the Raid Omen
        -   Like any other effect, players can drink a Bucket of Milk to clear the Raid Omen to prevent the Raid from starting
    -   It is no longer given to players that defeat a Raid Captain outside a Raid
        -   Instead, players can gain access to Bad Omen by consuming a new Ominous Bottle

**Ominous Bottle**

-   An item which can be consumed by players to receive the Bad Omen effect for 1 hour and 40 minutes
    -   Comes in 5 variations, one for each Bad Omen level
    -   The bottle breaks when consumed
    -   Can be stacked to 64
-   Can be found uncommonly in any Vaults that are unlocked with Trial Keys, and is dropped by Raid Captains when defeated outside a Raid

### Ominous Trials

-   A new Ominous Event that can be accessed by exploring a Trial Chamber with Bad Omen
-   This event will have players facing more powerful Trial Spawners if they dare!

**Trial Omen**

-   A variant that Bad Omen can transform into
    -   This occurs when the player is within detection range of a Trial Spawner that is not Ominous
    -   The Trial Omen has a duration of 15 minutes multiplied by the transformed Bad Omen's level
-   Players that have Trial Omen are surrounded by ominous particles

**Ominous Trial Spawner**

-   A more powerful active phase of the Trial Spawner with unique challenges and rewards
    -   Provides a more challenging experience that advanced players can opt into for better rewards
-   If a Trial Spawner detects a player that has the Trial Omen effect, the spawner will become Ominous if:
    -   It is not in cooldown
    -   Or, it is in cooldown but was not Ominous during its last activation
        -   Making it Ominous this way will bypass the cooldown
-   While active, it will:
    -   Glow blue instead of orange
    -   Emit soul flames instead of normal flames
    -   Very commonly spawns mobs with equipment if they can wear it
        -   The equipment these mobs wear have armor trims applied from the Trial Chambers
        -   Known issue: these mobs can currently drop their equipment on death, but they will not in the future
    -   Periodically spawn potions and projectiles on top of unsuspecting players and mobs
        -   Based on their location, spawners in an area will select a random set of projectiles to spawn
        -   These projectiles will always include a single type of Lingering Potion from a set of possible effects
-   Becoming Ominous will despawn any existing mobs it spawned and reset its challenge
    -   It will stay Ominous until it has been defeated and its cooldown has finished
-   When defeated, it will eject a different set of loot to normal Trial Spawners

**Ominous Trial Key**

-   A new variant of the Trial Key which can only be obtained by defeating an Ominous Trial Spawner
-   They can be used to unlock Ominous Vaults

**Ominous Vault**

-   A variant of Vaults that have a different texture and emit soul flames instead of normal flames
-   These can be found throughout the Trial Chambers in harder to find places and require an Ominous Trial Key to unlock
    -   These Vaults hold a more valuable set of rewards than the standard Vaults unlocked by Trial Keys

### Mob Effects

-   The following effects have been added:
    -   Wind Charged
        -   Affected entities will emit a wind burst upon death
        -   Brewed with an Awkward Potion and a Breeze Rod
    -   Weaving
        -   Affected entities will spread Cobweb blocks upon death
        -   Non-player entities with this effect can walk through Cobweb at normal speeds
        -   Brewed with an Awkward Potion and a Cobweb block
    -   Oozing
        -   Affected entities will spawn two Slimes upon death
        -   Brewed with an Awkward Potion and a Slime Block
    -   Infested
        -   Affected entities have a 5% chance to spawn 1-2 Silverfish when hurt
        -   Brewed with an Awkward Potion and a Stone block
-   These effects can be encountered while taking on an Ominous Trial Spawner
-   Some mobs are immune to these effects
    -   Slimes are immune to Oozing
    -   Silverfish are immune to Infested

### Trial Chambers Loot

-   The loot found within Trial Chamber Vaults has been adjusted
-   Standard Vaults will give slightly less items of high quality, but also include the following changes:
    -   Ominous Bottle I - II can be found
    -   Flow Banner Pattern, Flow Armor Trim Smithing Template, and Heavy Core can no longer be obtained
        -   Guster Banner Pattern and Bolt Armor Trim Smithing Template remain exclusive to standard Vaults
        -   In Heavy Core's place, standard Vaults will instead have a very rare chance of providing a Trident
-   Ominous Vaults can provide some particularly valuable items, to mention a few:
    -   Ominous Bottle III - V
    -   Enchanted Golden Apple
    -   Flow Banner Pattern and Flow Armor Trim Smithing Template
    -   Wind Burst, Breach and Density Enchantments for the Mace
    -   Heavy Core
-   The loot ejected from Trial Spawners have been adjusted
    -   It now has a focus on providing higher quality food more often to make replenishing between fights more safe
-   Ominous Trial Keys have a 30% chance of ejecting from a defeated Ominous Trial Spawner, replacing the usual 50% chance to eject Trial Keys

### Trial Spawner

-   All spawners now increase the amount of mobs present at once by 0.5 for each additional player, down from 2
-   Baby Zombie spawners now only have 2 mobs present at once for its baseline, down from 3 mobs
-   Can now only activate when a player is in line of sight

### Trial Chambers

-   Remade `chamber_5` with variations, and renamed it to `eruption`
-   Reduced amount of Trial Spawners in corridors
-   Updated layout and placements of Vaults
-   Placed Ominous Vaults in chambers, intersections, at the ends of corridors
-   Corridors will no longer generate endlessly
-   Added an atrium to the corridors
-   Made various layout changes in intersections and corridors

Known issues:

-   Corner quadrants in slanted may still fail to generate correctly

## Changes in 24w13a

-   Added unique sounds for Cobwebs

## Technical Changes in 24w13a

-   The Data Pack version is now 37
-   The Resource Pack version is now 31
-   Client chat state is now preserved by default when entering configuration phase
-   Changes to chat network protocol

### Chat

-   Client chat state (on-screen messages and chat input history) is now preserved by client when entering and exiting configuration phase
-   Message signature chain handling remains unchanged - going into configuration phase starts new session
-   If client has message delay configured, pending messages will be delivered immediately before leaving world
-   Server can clear chat state by sending `reset_chat` packet in configuration phase

### Network Protocol

-   The `minecraft:chat_command_signed` packet has been split from `minecraft:chat_command`
    -   Commands that do not accept any signed arguments will use the unsigned packet, and will not pass any 'last seen' chat updates

## Data Pack Version 37

-   Added new loot table type `minecraft:equipment`
    -   Has required parameters of `this_entity` and `origin`
        -   `this_entity` : the mob that is about to be given equipment
        -   `origin` : the position of the mob
-   Added optional `equipment_loot_table` to the spawn data present in the `SpawnPotentials` of Monster Spawners and `spawn_potentials` of Trial Spawner configs
    -   If present, rolled items from the specified loot table will be equipped to the mob that spawns
-   Modified `copy_components` and `set_name` loot function arguments
-   Added new `set_ominous_bottle_amplifier` loot function
-   Added new item components
-   Non-default components on item stacks are now stored when block entity is placed
-   Int and float providers used in worldgen definitions are no longer wrapped in an extra `value` field next to `type`
    -   For example, `{"type":"minecraft:uniform","value":{"min_inclusive":0.0,"max_inclusive":1.0}}` becomes `{"type":"minecraft:uniform","min_inclusive":0.0,"max_inclusive":1.0}`
-   New Damage Type Tag: `minecraft:is_player_attack` for attacks performed by the player
-   New Entity Type Tags:
    -   `immune_to_oozing` For entities that cannot receive the Oozing mob effect
    -   `immune_to_infested` For entities that cannot receive the Infested mob effect
-   Added `raider` sub entity predicate

### Block entities

Non-default components on item stacks containing block items are now stored on block entities when placed

-   Component removals from defaults are currently not preserved
-   Placing and breaking non-block entity blocks remains unchanged - nothing is preserved
-   Does not automatically cause preserved components to be restored on drops - this requires addition of `copy_components` function to loot table
-   Components are stored in field called `components`
    -   Some components (like `custom_name`) are still handled by legacy serialization, which means they might not be present in there
    -   Contains map of component id to component value

### New Item Stack Components

**`minecraft:item_name`**

-   When present, replaces default item name with contained chat component
-   Differences from `custom_name`:
    -   `item_name` can't be changed or removed in anvil
    -   `item_name` is not styled with italics when displayed to player
    -   `item_name` does not show labels where applicable (for example: banner markers, names in item frames)

**`minecraft:ominous_bottle_amplifier`**

-   Controls the amplifier amount for an Ominous Bottle's bad omen effect
-   Format: integer between 0 and 4
    -   e.g. `ominous_bottle_amplifier=3`

### Loot Functions

**`copy_components`**

Removed field `components` and replaced it with:

-   `include` - optional list of data components to be copied from source
    -   if omitted, all components present are included
-   `exclude` - optional list of data components to be excluded from copying
    -   if omitted, defaults to empty
-   Only components that are included (explicitly or implicitly) but not excluded will be copied

**`set_name`**

Added optional field `target` to specify which name should be set

-   Values:
    -   `custom_name` - sets `custom_name` component (default)
    -   `item_name` - sets `item_name` component

**Added `set_ominous_bottle_amplifier`**

Sets the `ominous_bottle_amplifier` component on the target item according to a number provider.

-   `conditions`: list of conditions to filter this function
-   `amplifier`: a number provider used to generate the `ominous_bottle_amplifier` component

**Entity sub-predicates**

**`raider`**

New `raider` sub-predicate has been added to match raiders Fields:

-   `has_raid` - Match whether the raider is in an active raid
-   `is_captain` - Match whether the raider is a captain

## Resource Pack Version 31

-   Added the following particle types:
    -   `infested`
    -   `item_cobweb`
    -   `small_gust`
    -   `raid_omen`
    -   `trial_omen`
    -   `trial_spawner_detection_ominous`
    -   `ominous_spawning`
-   Added the following sound events:
    -   `block.cobweb.break`
    -   `block.cobweb.step`
    -   `block.cobweb.place`
    -   `block.cobweb.hit`
    -   `block.cobweb.fall`
    -   `block.trial_spawner.about_to_spawn_item`
    -   `block.trial_spawner.spawn_item`
    -   `block.trial_spawner.spawn_item_begin`
    -   `block.trial_spawner.charge_activate`
    -   `block.trial_spawner.ambient_charged`
    -   `item.ominous_bottle.dispose`
    -   `event.mob_effect.bad_omen`
    -   `event.mob_effect.trial_omen`
    -   `event.mob_effect.raid_omen`
-   Added textures for the following blocks and items:
    -   Ominous Vault
    -   Ominous Trial Spawner
    -   Ominous Bottle
-   Updated textures for normal Vault block
-   Added the following mob effect icon textures:
    -   `infested`
    -   `oozing`
    -   `weaving`
    -   `wind_charged`
    -   `raid_omen`
    -   `trial_omen`
    -   `bad_omen_121`
-   Added new models for Ominous state of Vault block

## Fixed bugs in 24w13a

-   [MC-123804](https://bugs.mojang.com/browse/MC-123804) Explorer map and Ominous banner names appear in item frames, draw in italics, and can be removed with an anvil
-   [MC-148057](https://bugs.mojang.com/browse/MC-148057) Ominous banners generated in outposts show the pattern list
-   [MC-166361](https://bugs.mojang.com/browse/MC-166361) GUI scale does not visually update when the option is changed using the keyboard and without the mouse
-   [MC-178410](https://bugs.mojang.com/browse/MC-178410) Banners don't support the HideFlags tag when placed down as blocks
-   [MC-268578](https://bugs.mojang.com/browse/MC-268578) Bogged mob sits wrong in boats
-   [MC-268627](https://bugs.mojang.com/browse/MC-268627) Slime spawns are incorrect
-   [MC-268716](https://bugs.mojang.com/browse/MC-268716) Magma Cubes spawn even if there's only 2 blocks in height
-   [MC-268882](https://bugs.mojang.com/browse/MC-268882) Same Enchantments in an item components crashes the game
-   [MC-268893](https://bugs.mojang.com/browse/MC-268893) Comparators require a block update to function properly, and droppers/observers receive false state changes
-   [MC-269015](https://bugs.mojang.com/browse/MC-269015) Wind charges can destroy end crystals
-   [MC-269143](https://bugs.mojang.com/browse/MC-269143) Attribute modifiers cannot exclusively target the "body" slot
-   [MC-269342](https://bugs.mojang.com/browse/MC-269342) The experimental features details menu is rendered incorrectly after resizing the game window
-   [MC-269371](https://bugs.mojang.com/browse/MC-269371) If the 'GUI Scale' option is on 'Auto', and if you try to scale it down using CTRL + mouse wheel, it shows as '-1'
-   [MC-269387](https://bugs.mojang.com/browse/MC-269387) Mace sounds use the neutral sound category
-   [MC-269388](https://bugs.mojang.com/browse/MC-269388) Mace falling damage increase is applied while using an elytra
-   [MC-269427](https://bugs.mojang.com/browse/MC-269427) Lingering potion particles are tinted black instead of the potion's color
-   [MC-269628](https://bugs.mojang.com/browse/MC-269628) Heavy cores delete water when placed into it
-   [MC-269635](https://bugs.mojang.com/browse/MC-269635) The game crashes when attempting to eat lily pads or frogspawn
-   [MC-269643](https://bugs.mojang.com/browse/MC-269643) Waterlogged heavy core does not update water flow correctly
-   [MC-269649](https://bugs.mojang.com/browse/MC-269649) Who Needs Rockets advancement is granted after launching yourself up 8 blocks instead of 7 blocks
-   [MC-269656](https://bugs.mojang.com/browse/MC-269656) Feeding parrots poison while holding mace grants Over-Overkill challenge
-   [MC-269659](https://bugs.mojang.com/browse/MC-269659) Parrots can now be fed carrots to kill them instead of cookies
-   [MC-269670](https://bugs.mojang.com/browse/MC-269670) Game crash when giving bundle with hide tooltip

---

