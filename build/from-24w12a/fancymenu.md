# Minecraft Snapshot 24w12a

Here's snapshot 24w12a with new advancements and several tweaks.

Happy Mining!

## Experimental Features

### Trial Chambers

Trial Chambers now generate slightly more rarely and a bit more spaced out from each other

### Trial Chambers Explorer Map

-   Struggle no more to locate a Trial Chamber - level up your nearest Cartographer to Journeyman for the opportunity to trade for an Explorer Map pointing to a nearby Trial Chamber

### Heavy Core

-   Can now be waterlogged
-   Survives lava flows
-   Most efficient tool is now the pickaxe
-   Adjusted destroy time and explosion resistance

### Advancements

-   Added the following advancements:
    -   `Minecraft: Trial(s) Edition` - Step foot in a Trial Chamber
    -   `Under Lock & Key` - Unlock a Vault using a Trial Key
    -   `[Challenge - 40 exp] Blowback` - Kill a Breeze with a deflected Wind Charge
    -   `Who Needs Rockets?` - Use a Wind Charge to launch yourself upward at least 8 blocks
    -   `Crafters Crafting Crafters` - Be near a Crafter when it crafts a Crafter
    -   `Lighten Up` - Scrape a Copper Bulb with an Axe to make it brighter
    -   `Over-Overkill` - Deal 50 hearts of damage in a single hit using the Mace

## Technical Changes

-   The Data Pack version is now 36
-   The Resource Pack version is now 30
-   -   Particle `entity_effect` takes color argument when spawned from command
    -   `/particle entity_effect <r> <g> <b> <a>`
    -   4 float values ranging from 0.0 to 1.0 representing RGBA

## Data Pack Version 36

-   Added a `crafter_recipe_crafted` trigger which is triggered when a Crafter ejects a successfully crafted item into the world.
    -   `<player>` an entity predicate matching the player who is nearby
    -   `<recipe_id>` is the ID of the recipe being crafted
    -   `<ingredients>` is a list of item predicates matching the ingredients that form the recipe being crafted
-   Added a `fall_after_explosion` trigger which is triggered when a player begins falling after being knocked upwards by an explosion or wind burst
    -   `<player>` an entity predicate matching the player who is falling
    -   `<start_position>` a location predicate matching the position the player was at when they were hit by the explosion or burst
    -   `<distance>` a distance predicate matching how far the player must be from `start_position` to cause the trigger to activate
    -   `<cause>` an entity predicate matching the entity which caused the explosion or burst to happen
-   Added `storage` loot number provider to access values from command storage
-   New Entity Type Tag: `sensitive_to_smite` - for Entity Types that take extra damage from the Smite Enchantment
-   Expanded item predicate syntax used in `execute if|unless items` and `clear` commands
-   Removed redundant custom data section (`{...}`) from item arguments (it's fully replaced by `[custom_data={...}]`)
    -   To make this transition easier, `custom_data` item sub-predicate has been changed to allow unquoted SNBT
-   Added `wolf` entity sub-predicate for matching wolf variants
-   `wolf`, `cat`, `frog` and `painting` entity sub-predicates now accept tags and plain lists instead of just single elements
-   Changed texture asset paths in `wolf_variant` to better match other formats
-   Command arguments that previously accepted namespaced ids of loot tables, modifiers and predicates can now also accept inline definitions
-   Added new item stack components
-   Added new loot functions

### `wolf_variant` definitions

-   Field `texture` has been renamed to `wild_texture`
-   `wild_texture`, `tame_texture` and `angry_texture` no longer require values to be prefixed with `textures/` and suffixed with `.png`

### Commands

#### Inline loot values

Arguments in following commands that previously accepted namespaced ids of loot tables, modifiers and predicates can now also accept inline definitions:

-   `loot`
-   `item`
-   `execute if predicate` Values have same structure as matching JSON files, though they are encoded as SNBT. Example: `execute if predicate {condition:weather_check, raining:true}`

### Loot tables

#### `storage` number provider

-   This number provider is able to access numeric values from command storage directly
-   If selected storage does not exist or tag selected by path is not numeric or does not exist, provider returns 0
-   Fields:
    -   `storage` - namespaced id of command storage
    -   `path` - NBT path to field

#### `set_lore` function

-   The `replace` field has been removed
-   Now has `mode` like `set_fireworks` and `set_written_book_pages`

#### `set_written_book_pages` function

-   `pages` is now a JSON Object rather than a string containing JSON

#### `toggle_tooltips` loot function

-   This function can be used to modify item component tooltip visiblity
-   It works by setting fields like `show_in_tooltip` without changing other values
-   Format:
    -   `toggles` - a map of supported item component type to boolean value
-   Supported components: `trim`, `dyed_color`, `enchantments`, `stored_enchantments`, `unbreakable`, `can_break`, `can_place_on`, `attribute_modifiers`
-   Example:
    -   `{function:"toggle_tooltips","toggles":{"enchantments":false}}` will hide enchantments tooltip

#### Functions

-   Nested lists are no longer supported in function lists

### Item predicate argument

The item predicate syntax (used in `execute if|unless items` and `clear` commands) has been significantly expanded.

-   The general syntax is: `<type> [comma-separated list of <test>]`
-   `<type>` can be one of:
    -   item id
    -   item tag id prefixed with `#`
    -   `*` to match any item
-   `<test>` can have one of 3 forms:
    -   `<component_id>=<value>` - match exact value of component (same as in previous format)
        -   `<value>` is a representation of component value in SNBT format (same as in `item give` argument)
    -   `<component_id>` - check if component exists
    -   `<predicate_id>~<value>` - check item sub-predicate
        -   `<value>` is a representation of item sub-predicate in SNBT format (but otherwise same as one used for advancement and loot table JSON files)
        -   Example: `*[damage~{durability:{min:3}}]` will match any stack with at least 3 uses left
-   The special name `minecraft:count` can be used for matching the stack size
    -   `count=<positive int>` will pass only when the stack size equals the given value
    -   `count~<int range>` will pass when the stack size is in the specified range
        -   Example: `*[count~{max:2}]` will match any stack with count <= 2
    -   `count` will always pass
-   Any `<test>` entry can be negated by prefixing with `!`
    -   Example: `*[!count=1]` will match any stack that has count other than 1
-   `<test>` elements can be also joined with `|` to check multiple alternatives
    -   Example: `*[!damage|damage=0]` will look for items without damage component or with `0` damage
-   The syntax for custom data partial matching (`{}`) has been removed in favor of using `custom_data` predicates
    -   So `stick{a:2}` becomes `stick[custom_data~{a:2}]`

### Predicates

#### Item sub-predicates

-   Predicate `minecraft:custom_data` now accepts both SNBT data written as a string (existing format) and unflattened tags
    -   That means that `*[custom_data~{a:1}]` and `*[custom_data~"{a:1}"]` are equivalent
    -   Flattened string format has been kept since NBT type information can't be expressed in JSON

#### Entity sub-predicates

##### `wolf`

New `wolf` sub-predicate has been added to match wolf variants Fields:

-   `variant` - wolf variant to match (single entry, list of entries or tag)

##### `cat`, `frog`, `painting`

-   Field `variant` now accepts single entries, list of entries or tags

### New Item Stack Components

#### `minecraft:food`

-   When present, this item will behave as if a food (can be eaten)
-   Format: object with fields
    -   `nutrition`: non-negative integer, number of food points to restore when eaten
    -   `saturation_modifier`: float, amount of saturation to restore when eaten
    -   `is_meat`: boolean (default: `false`)
        -   If `true`, can be fed to Wolves
    -   `can_always_eat`: boolean (default: `false`)
        -   If `true`, this food can be eaten even if not hungry
    -   `eat_seconds`: float (default: `1.6`)
        -   The number of seconds that it takes to eat this food item
    -   `effects`: list of effects to apply when eaten (default: `[]`)
        -   `effect`: effect instance (same format as `custom_effects` in `minecraft:potion_contents` component)
        -   `probability`: float between 0 and 1, chance for the effect to be applied (default: `1`)
    -   e.g: `food={nutrition:4,saturation_modifier:0.1}`
-   On food items, has an implicit default value for that food type

#### `minecraft:max_stack_size`

-   Controls the maximum stacking size of this item
-   Format: integer between 1 and 99
    -   e.g. `max_stack_size=4`
-   Has an implicit default value according to the item type (usually `64`)

#### `minecraft:max_damage`

-   Controls the maximum amount of damage than an item can take
-   If not present, the item cannot be damaged
-   Format: positive integer
    -   e.g. `max_damage=123`
-   Has an implicit default value for damageable items

#### `minecraft:fire_resistant`

-   If present, this item will not burn in fire
-   Format: empty object
    -   e.g. `fire_resistant={}`
-   Has an implicit default value for fire-resistant items such as Netherite

#### `minecraft:rarity`

-   Controls the color of the item name
-   Format: enumerated value, one of:
    -   `common` (default): white name, or aqua when enchanted
    -   `uncommon`: yellow name, or aqua when enchanted
    -   `rare`: aqua name, or light purple when enchanted
    -   `epic`: light purple name
    -   e.g. `rarity=rare`
-   Special items such as Golden Apples have an implicit default value

#### `minecraft:tool`

-   Controls the behavior of the item as a tool
-   Format: object with fields
    -   `rules`: list of rule entries
        -   `blocks`: single block, list of blocks, or `#`;;-;;prefixed block tag to match
        -   `speed` (optional): float, overrides the mining speed if present and matched
        -   `correct_for_drops` (optional): boolean, overrides whether this tool is considered 'correct' if present and matched
            -   `true` will cause the block to mine at its most efficient speed, and drop items if the targeted block requires that
    -   `default_mining_speed`: float, mining speed to use if no rules match and override mining speed (default: `1.0`)
    -   `damage_per_block`: non-negative int, amount of durability to remove each time a block is mined with this tool
    -   e.g. `tool={rules:[{blocks:"#mineable/pickaxe",speed:4.0,correct_for_drops:true}]}`
-   Vanilla tool items will have an implicit default value based on their tier and tool type

#### `hide_tooltip`

-   If present, it will completely hide whole item tooltip (that includes item name)
-   Tooltip will be still visible and searchable in creative mode
-   Format: empty object

### New Tags

-   Added `incorrect_for_wooden_tool`, `incorrect_for_gold_tool`, `incorrect_for_stone_tool`, `incorrect_for_iron_tool`, `incorrect_for_diamond_tool`, `incorrect_for_netherite_tool` block tags
    -   These tags combine the existing `needs_diamond_tool`, `needs_iron_tool`, and `needs_stone_tool` tags for each specific tool tier
-   Added `meat` collection item tag
    -   This is not used by the game directly, but may be included by other tags
-   Added `piglin_food`, `fox_food`, `cow_food`, `goat_food`, `sheep_food`, `wolf_food`, `cat_food`, `horse_food`, `horse_tempt_items`, `camel_food`, `armadillo_food`, `bee_food`, `chicken_food`, `frog_food`, `hoglin_food`, `llama_food`, `llama_tempt_items`, `ocelot_food`, `panda_food`, `pig_food`, `rabbit_food`, `strider_food`, `strider_tempt_items`, `turtle_food`, `parrot_food`, `parrot_poisonous_food` item tags to control which items can be fed to or tempt the corresponding mobs
-   `axolotl_tempt_items` has been renamed to `axolotl_food`

## Resource Pack Version 30

-   Map decoration icons have been split from the former `map_icons.png` to use an atlas loaded from the `textures/map/decorations/` directory
-   The process of upgrading your pack can be assisted by using this automated [Slicer](https://github.com/Mojang/slicer/releases/tag/v1.1.4) tool
-   Added `trial_chambers` map decoration icon

## Fixed bugs in 24w12a

-   [MC-266467](https://bugs.mojang.com/browse/MC-266467) Wind charges stutter when flying through the air
-   [MC-267747](https://bugs.mojang.com/browse/MC-267747) Click and hover events don't work when viewing chat while F1 is enabled
-   [MC-267933](https://bugs.mojang.com/browse/MC-267933) Silk Touch and Fortune enchanted books cannot be found in Creative inventory
-   [MC-267943](https://bugs.mojang.com/browse/MC-267943) Anvil exclusive enchantments can be obtained from enchanting tables
-   [MC-268068](https://bugs.mojang.com/browse/MC-268068) Pieces of text in the "Reset World" realm menu can intersect when using some resolutions
-   [MC-268171](https://bugs.mojang.com/browse/MC-268171) Some GUI textures can no longer be transparent in Minecraft
-   [MC-268311](https://bugs.mojang.com/browse/MC-268311) Bane of arthropods enchantment uses #arthropods tag instead of #sensitive;;_;;to;;_;;bane;;_;;of;;_;;arthropods
-   [MC-268312](https://bugs.mojang.com/browse/MC-268312) Impaling enchantment uses #aquatic tag instead of #sensitive;;_;;to;;_;;impaling
-   [MC-268343](https://bugs.mojang.com/browse/MC-268343) Breeze charge has laggy unnatural flightpaths when punched
-   [MC-268510](https://bugs.mojang.com/browse/MC-268510) Items with "Unbreakable:1b" NBT can no longer have the unbreaking enchant applied
-   [MC-268556](https://bugs.mojang.com/browse/MC-268556) Wind charges go through non-full blocks instead of colliding
-   [MC-269083](https://bugs.mojang.com/browse/MC-269083) Effect background texture in inventory renders translucent pixels as opaque
-   [MC-269085](https://bugs.mojang.com/browse/MC-269085) Experience bar and jump bar render translucent pixels as opaque
-   [MC-269169](https://bugs.mojang.com/browse/MC-269169) Wolf variant not present in advancement criteria
-   [MC-269268](https://bugs.mojang.com/browse/MC-269268) components don't work on the smithing table
-   [MC-269280](https://bugs.mojang.com/browse/MC-269280) The right side of incompatible resource or data packs isn't rendered correctly when the scroll bar is present
-   [MC-269299](https://bugs.mojang.com/browse/MC-269299) The red text within the "Experiments" menu cannot be narrated or selected
-   [MC-269336](https://bugs.mojang.com/browse/MC-269336) Crash with set;;_;;enchantments item modifier above level 255
-   [MC-269354](https://bugs.mojang.com/browse/MC-269354) The subtitle for the "minecraft:item.mace.smash;;_;;air" sound event displays as a raw translation string
-   [MC-269355](https://bugs.mojang.com/browse/MC-269355) Heavy Core has no required tool
-   [MC-269356](https://bugs.mojang.com/browse/MC-269356) Heavy Core cannot be oriented despite its blockstates suggesting otherwise
-   [MC-269361](https://bugs.mojang.com/browse/MC-269361) Weird Wind Charge behavior when deflecting
-   [MC-269373](https://bugs.mojang.com/browse/MC-269373) /datapack disable doesn't work
-   [MC-269393](https://bugs.mojang.com/browse/MC-269393) Game crashes when wind charge hits entity
-   [MC-269401](https://bugs.mojang.com/browse/MC-269401) The minecraft:set;;_;;written;;_;;book;;_;;pages item modifier is inconsistent with minecraft:set;;_;;name and minecraft:set;;_;;lore
-   [MC-269409](https://bugs.mojang.com/browse/MC-269409) Unable to execute /particle entity;;_;;effect
-   [MC-269419](https://bugs.mojang.com/browse/MC-269419) Heavy Core cannot be waterlogged
-   [MC-269422](https://bugs.mojang.com/browse/MC-269422) Carpet on powder snow no longer negates fall damage
-   [MC-269452](https://bugs.mojang.com/browse/MC-269452) Crash when using item modifier with replace;;_;;section mode and very large size field
-   [MC-269457](https://bugs.mojang.com/browse/MC-269457) Crash with set;;_;;lore item modifier setting more than 256 lores
-   [MC-269513](https://bugs.mojang.com/browse/MC-269513) Maces can break cobwebs

---

# Minecraft Snapshot 24w11a

Oh look, it's a rare case of snapshot Thursday! This week we're expanding your arsenal with a smashing new weapon, the Mace! Use this weapon's special smash attack while leaping from a high place and watch your enemies get knocked back. The longer you fall, the harder you hit – but make sure you time it right! Your fall damage is only negated if you land the blow. Craft this new weapon by combining a Breeze Rod with the Heavy Core, a new item you can find by unlocking Trial Chamber Vaults.

As usual, we invite you to share your thoughts about this new feature over at the feedback site: [Let's talk about the Mace!](https://aka.ms/mcmacefeedback)

Alongside this hefty new mob swatter, we're also bringing you new chambers and variations to Trial Chambers, updated loot tables for Vaults, new Pottery Sherds, Armor Trims and Banner Patterns—as well as the usual slew of bug fixes and polish.

Happy mace-ing!

## Experimental Features

-   Added the Mace
-   Added Breeze Rod
-   Added Heavy Core
-   Added 2 new Armor Trims
-   Added 3 new Pottery Sherds
-   Added 2 new Banner Patterns
-   Updated Vault loot table
-   Updated Trial Chambers

## Blocks

### Heavy Core

-   A mysterious, dense block which can be combined with a Breeze Rod to craft a brand-new weapon: the Mace!

## Items

### Breeze Rod

-   An item dropped by the Breeze that can be crafted into 4 Wind Charges, or used with the Heavy Core to craft the Mace

### Mace

-   A new heavy weapon to smash your enemies!
-   Leverage the weight of this new weapon to deal additional damage the farther you fall before hitting your target
    -   Try it out by jumping down toward your target, and hit them before you hit the ground
    -   Successfully striking a target in this way will negate any damage accumulated from the fall, similar to how a Wind Charge works
    -   Other entities near the struck enemy will be knocked back by the immense force of the Mace
-   Using a Mace will decrease its durability like any other weapon; repair it with Breeze Rods at an anvil
-   Players can use a Mace in combination with Wind Charges to launch up and deliver devastating smash attacks on their enemies

## Mobs

### Breeze

-   Drops 1-2 Breeze Rods when killed by a player
    -   The number of Breeze Rods dropped is affected by looting enchantments

### Pottery Sherds

-   Added Flow, Guster, and Scrape Pottery Sherds

### Banner Patterns

-   Added Flow and Guster Banner Patterns

### Armor Trims

-   Added Bolt and Flow Armor Trims and Smithing Templates
-   Bolt can be duplicated using a Copper Block or Waxed Copper
-   Flow can be duplicated using a Breeze Rod

### Trial Chambers

-   Added new chambers and variations, with new challenges
    -   Remade chamber;;_;;9, and renamed it to "slanted"
    -   Remade chamber;;_;;3, and renamed it to "pedestal"
-   Added Flow, Guster, and Scrape Pottery Sherds to the Decorated Pots in the decor structure pool
-   Trial Spawners will now appear more frequently in the corridors
-   Changed the layout of the blocks around the Vaults
-   The loot tables of Vaults in Trial Chambers have been updated to address some inventory management issues
    -   You will now get no more than 1 unstackable item per Vault
    -   You will more often get rewards which can stack together
    -   Horse Armor and Saddles have been removed from the loot table
-   Vaults in Trial Chambers can now eject:
    -   Wind Charges
    -   Bolt Armor Trim Smithing Template
    -   Flow Armor Trim Smithing Template
    -   Flow Banner Pattern
    -   Guster Banner Pattern
    -   Heavy Core

## Changes

-   Adjusted flying behaviour for Bees and Parrot to keep them from overshooting their position when flying up and down
-   Status effect particle colors are no longer blended into one particle color
    -   All active visible status effect particles are now rendered separately
    -   The frequency of emitting status effect particles has been lowered to clutter the screen less
-   Updated the wolf armor crack textures
-   Menu background blur has been updated to look better and be more performant

### Wolf variants

When summon in other ways (e.g. using the Spawn Egg or using the `summon` command), the variant selection follows the natural spawning biome rules with the following extensions:

-   Rusty Wolf: will be selected in all Jungle biomes, including Jungle and Bamboo Jungle Biomes
-   Spotted Wolf: will be selected in all Savanna biomes, including Savanna and Windswept Savanna Biomes
-   Striped Wolf: will be selected in all Badlands biomes, including Badlands and Eroded Badlands Biomes

## Technical Changes

-   The Data Pack version is now 35
-   The Resource Pack version is now 29

## Data Pack Version 35

-   Removed `any` entity sub-predicate
-   Component-specific item predicate properties have been moved to separate field `predicates`
-   Added slot name `contents` for single-slot entities like item frames and item displays
-   Contents of `item` entity can now be accessed through `contents` slot name
-   Added new loot functions

### Predicates

#### Item sub-predicate

-   Some fields from item predicate have been moved to a map in an optional field `predicates`
-   The new field is similar to the `components` field on item stacks
-   This was done to simplify addition for future predicates and to allow sub-predicates to more closely resemble names of components they match
-   The following fields have been moved:
    -   `enchantments` - field moved to sub-predicate `minecraft:enchantments`
    -   `stored_enchantments` - field moved to sub-predicate `minecraft:stored_enchantments`
    -   `potions` - field moved to sub-predicate `minecraft:potion_contents`
    -   `custom_data` - field moved to sub-predicate `minecraft:custom_data`
-   `durability` field has been expanded to `minecraft:damage` predicate:
    -   This check now works for any item that has `minecraft:damage` component
    -   An item that does not have a `minecraft:damage` component can never match
    -   To check for unbreakable items, query value of `minecraft:unbreakable` component
    -   Fields:
        -   `damage` - optional bounds for value of `minecraft:damage` component
        -   `durability` - optional bounds for durability (max damage minus value of `minecraft:damage`)
-   Predicates `minecraft:enchantments`, `minecraft:stored_enchantments`, `minecraft:potion_contents` and `minecraft:damage` require matching component to exist on item
    -   That means that, for example, matching for empty enchantment list will not pass on items without `minecraft:damage` component
    -   Note: some components, like `minecraft:enchantments` have default values, so they will always match

##### Example:

Before:

    "item": {
      "enchantments": [
        {
          "enchantment": "minecraft:silk_touch",
          "levels": {
            "min": 1
          }
        }
      ]
    }
    

After:

    "item": {
      "predicates": {
        "minecraft:enchantments": [
            {
              "enchantment": "minecraft:silk_touch",
              "levels": {
                "min": 1
              }
            }
          ]
      }
    }
    

### Loot Functions

#### `set_fireworks`

New function for setting the details of the `minecraft:fireworks` component.

Fields:

-   `conditions`: list of conditions (default: `[]`):
    -   Conditions to check before applying the function
-   `flight_duration`: Optional integer, 0-255:
    -   The flight duration measured in number of gunpowder
    -   If omitted, the flight duration of the item is left untouched - or set to 0 if the component did not exist before
-   `explosions`: List of `firework_explosion` data - same format as the `explosion` field in the `minecraft:fireworks` component:
    -   The explosion data to set
-   `mode`: enumerated value deciding function for explosions:
    -   `replace_all`: fully replace the explosions list
    -   `replace_section`: replace a section of the explosions. Arguments:
        -   `offset`: optional non-negative integer:
            -   Start of replaced range
            -   If omitted, `0` is used
        -   `size`: optional non-negative integer:
            -   Size of range to be replaced in explosions
            -   If omitted, the size of `explosions` field is used
    -   `insert`: insert explosions, moving existing explosions to after the inserted section. Arguments:
        -   `offset`: optional non-negative integer:
            -   Index before which explosions will be inserted
            -   If omitted, `0` (before first explosion) is used
    -   `append`: append explosions at the end of the list

#### `set_firework_explosion`

New function for setting the details of the `minecraft:firework_explosion` component.

Fields:

-   `conditions`: list of conditions (default: `[]`):
    -   Conditions to check before applying the function
-   `shape`: optional Explosion Shape:
    -   The explosion shape to set
    -   If omitted, the original shape is kept (or `small_ball` is used if there was no component)
-   `colors`: optional integer array, RGB values:
    -   List of initial particle colors to replace the ones on the existing explosion with
    -   If omitted, the original colors are kept (or `[]` is used if there was no component)
-   `fade_colors`: optional integer array, RGB values:
    -   List of fade-to particle colors to replace the ones on the existing explosion with
    -   If omitted, the original colors are kept (or `[]` is used if there was no component)
-   `trail`: optional boolean:
    -   Set whether the explosion should have a trail or not
    -   If omitted, the original `has_trail` value is kept (or `false` is used if there was no component)
-   `twinkle`: optional boolean:
    -   Set whether the explosion should have a twinkle or not
    -   If omitted, the original `has_twinkle` value is kept (or `false` is used if there was no component)

#### `set_book_cover`

New function for setting the cover details of the `minecraft:written_book_content` component. If present, any pages in the book are left untouched.

Fields:

-   `conditions`: list of conditions (default: `[]`):
    -   Conditions to check before applying the function
-   `title`: optional Filterable text (same format as `title` on the `minecraft:written_book_content` component):
    -   The title to set
    -   If omitted, the original title is kept (or an empty string is used if there was no component)
-   `author`: optional string:
    -   The author to set
    -   If omitted, the original author is kept (or an empty string is used if there was no component)
-   `generation`: optional integer ;;[;;0; 3;;];;:
    -   The generation value to set
    -   If omitted, the original generation is kept (or `0` is used if there was no component)

#### `set_writable_book_pages`

New function for manipulating the pages of the `minecraft:writable_book_content` component.

Fields:

-   `conditions`: list of conditions (default: `[]`):
    -   Conditions to check before applying the function
-   `pages`: list of Filterable strings (same format as `pages` on the `minecraft:writable_book_content` component):
    -   The pages to apply
-   `mode`: enumerated value deciding function:
    -   `replace_all`: fully replace the book contents
    -   `replace_section`: replace a section of the book. Arguments:
        -   `offset`: optional non-negative integer:
            -   Start of replaced range
            -   If omitted, `0` is used
        -   `size`: optional non-negative integer:
            -   Size of range to be replaced in book
            -   If omitted, the size of `pages` field is used
    -   `insert`: insert pages, moving existing pages to after the inserted section. Arguments:
        -   `offset`: optional non-negative integer:
            -   Index before which pages will be inserted
            -   If omitted, `0` (before first page) is used
    -   `append`: append pages at the end of the book

#### `set_written_book_pages`

New function for manipulating the pages of the `minecraft:written_book_content` component. Same format as `set_writable_book_content` but the `pages` field contains filterable Components instead of Strings (same format as `pages` on the `minecraft:writable_book_content` component).

Any cover data is left untouched, and the page content components are set to resolve next time a player opens the book.

## Resource Pack Version 29

-   Added `gui/inworld_menu_background`, `gui/inworld_menu_list_background`, `gui/inworld_header_separator`, `gui/inworld_footer_separator` textures to allow menus accessed from the Pause Menu to look different from menus accessed from the Title Screen
-   Added `gui/tab_header_background` texture, which is rendered behind the tab buttons in the Create World Screen
-   Added `misc/credits_vignette` texture, which is rendered behind the poem and the credits
-   The `blur` post-processing shader has been renamed to `box_blur`
-   Added optional boolean field `use_linear_filter` to post-processing passes which when set to `true` switches texture sampling mode from nearest-neighbor sampling to linear interpolation for that pass
-   Added `entity_outline_box_blur` post-processing shader

## Fixed bugs in Snapshot 24w11a

-   [MC-153329](https://bugs.mojang.com/browse/MC-153329) Leashing an iron golem breaks its pathfinding until reloading the world
-   [MC-165948](https://bugs.mojang.com/browse/MC-165948) Bees can be lured into dangerous blocks
-   [MC-168407](https://bugs.mojang.com/browse/MC-168407) Bees can get stuck in a lantern
-   [MC-170000](https://bugs.mojang.com/browse/MC-170000) Hand lighting / lighting of held items changes drastically in first-person mode when looking around
-   [MC-172047](https://bugs.mojang.com/browse/MC-172047) Wolves try to attack armor stands
-   [MC-173303](https://bugs.mojang.com/browse/MC-173303) Leashed pets teleport to the player when reloaded
-   [MC-186626](https://bugs.mojang.com/browse/MC-186626) /weather not working in custom dimensions
-   [MC-208528](https://bugs.mojang.com/browse/MC-208528) Feeding tamed baby wolves and cats causes them to sit down/stand up
-   [MC-221754](https://bugs.mojang.com/browse/MC-221754) Leashed wolves no longer attack when unleashed
-   [MC-229919](https://bugs.mojang.com/browse/MC-229919) Bees don't recognize beehives or bee nests with a campfire directly below and a block on top
-   [MC-232560](https://bugs.mojang.com/browse/MC-232560) Tamed wolf movement speed decreases when unleashed from a fence
-   [MC-260921](https://bugs.mojang.com/browse/MC-260921) Data is focused last on the statistics screen when using keyboard navigation
-   [MC-267923](https://bugs.mojang.com/browse/MC-267923) The "Done" button doesn't always deselect when you close out of a Sign UI, making typing spaces difficult
-   [MC-267930](https://bugs.mojang.com/browse/MC-267930) No element is focused when opening the statistics screen using keyboard navigation
-   [MC-268110](https://bugs.mojang.com/browse/MC-268110) Deleting world results in a file directory error
-   [MC-268282](https://bugs.mojang.com/browse/MC-268282) Picking up lava, powder snow or water using a bucket can be desynced
-   [MC-268405](https://bugs.mojang.com/browse/MC-268405) Wind charges can move in unusual ways
-   [MC-268408](https://bugs.mojang.com/browse/MC-268408) Game crashes when a wind charge hits an entity after disabling update;;_;;1;;_;;21 data pack
-   [MC-268582](https://bugs.mojang.com/browse/MC-268582) Facing direction no longer affects shading of the first person arm
-   [MC-268796](https://bugs.mojang.com/browse/MC-268796) "Saving world" text is blurred when pausing
-   [MC-268805](https://bugs.mojang.com/browse/MC-268805) panorama;;_;;overlay.png no longer works
-   [MC-268811](https://bugs.mojang.com/browse/MC-268811) Clicking 'Done' for language settings is ineffective; changes apply after double-clicking the language option
-   [MC-268812](https://bugs.mojang.com/browse/MC-268812) Dirt background is used in the pause menu and some other menus in Programmer Art; black background used in High Contrast resource pack
-   [MC-268816](https://bugs.mojang.com/browse/MC-268816) Credits background texture no longer scrolls in Programmer Art and other such resource packs
-   [MC-268819](https://bugs.mojang.com/browse/MC-268819) Programmer Art, High Contrast, other resource packs: top of "Create New World" screen is transparent/not black
-   [MC-268855](https://bugs.mojang.com/browse/MC-268855) Typing /function then space closes the internal server
-   [MC-268862](https://bugs.mojang.com/browse/MC-268862) Areas with no sky light are incredibly dark when using the "High Contrast" resource pack
-   [MC-268902](https://bugs.mojang.com/browse/MC-268902) Low FPS when blurred menu background is visible
-   [MC-268908](https://bugs.mojang.com/browse/MC-268908) Trying to navigate to the Font Settings menu using the Tab key exits the language menu
-   [MC-268953](https://bugs.mojang.com/browse/MC-268953) Layout of gamerules screen breaks when toggling fullscreen mode or changing resolution
-   [MC-268956](https://bugs.mojang.com/browse/MC-268956) Command blocks, structure blocks and jigsaw blocks use menu;;_;;background.png
-   [MC-268967](https://bugs.mojang.com/browse/MC-268967) Night vision does not work properly in high constrast mode
-   [MC-269032](https://bugs.mojang.com/browse/MC-269032) Blur shader runs when menu blurriness is 0%
-   [MC-269077](https://bugs.mojang.com/browse/MC-269077) Sign editing screen uses menu;;_;;background.png
-   [MC-269081](https://bugs.mojang.com/browse/MC-269081) Some Realms icons are rendered behind the button in the main menu, instead of not being rendered at all
-   [MC-269122](https://bugs.mojang.com/browse/MC-269122) Editing signs causes background blur
-   [MC-269136](https://bugs.mojang.com/browse/MC-269136) Incorrect weapon.;;*;; command suggestions
-   [MC-269279](https://bugs.mojang.com/browse/MC-269279) The "Normal user" button within the realms player menu is improperly capitalized

---

