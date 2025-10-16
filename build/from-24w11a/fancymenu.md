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

Woah, another snapshot day of the Wednesday variant! Today we are releasing 24w10a, featuring new Wolf Variants, some new Data Pack features, and lots of bug fixes.

Happy mining!

## New Features

-   Added variants of Wolves

### Wolf variants

-   New Wolf variants have been added
-   The variant is determined by the biome they spawn in
    -   Pale Wolf - The familiar Wolf variant that now spawns in the Taiga biome, with a default pack size of 4
    -   Woods Wolf - A variant that spawns in the Forest biome. This will be the dominant Wolf variant that you will be able to find in the Overworld, since the Forest biome is very common
    -   Ashen Wolf - A variant that spawns in the Snowy Taiga biome
    -   Black Wolf - A variant that spawns in the Old Growth Pine Taiga biome, in smaller packs of 2 to 4
    -   Chestnut Wolf - A variant that spawns in the Old Growth Spruce Taiga biome, in smaller packs of 2 to 4
    -   Rusty Wolf - A variant that spawns in a new location for wolves - the Sparse Jungle biome, in smaller packs of 2 to 4
    -   Spotted Wolf - A variant that spawns in a new location for wolves - the Savanna Plateau biome, in larger packs of 4 to 8
    -   Striped Wolf - A variant that spawns in a new location for wolves, the Wooded Badlands biome, in larger packs of 4 to 8
    -   Snowy Wolf - A variant that spawns in the Grove biome. A rare type, that always walks alone
-   Adjusted spawning conditions for Wolves, allowing them to spawn on Coarse Dirt and Podzol blocks

## Changes

-   Adjusted passive mobs spawning in Grove biome to only include Rabbits, Foxes and Wolves
-   Button tooltips will no longer appear when hovering outside the containing element

## Technical Changes

-   The Data Pack version is now 34

## Data Pack Version 34

-   Recipe results can now specify component data
-   Added new entity predicate field `slots`, for matching item slots
-   Added slot names for ranges, like `container.*`
-   Added `execute if|unless items` to check and count items
-   Banner Patterns are now data-driven
-   Changes to Item Stack Component formats
-   Player Head blocks now store a `custom_name` tag, which will be copied to and from the item form when broken or placed
-   The `SkullOwner` and `ExtraType` fields in Player Head blocks have been replaced with a `profile` field, with the same format as the item component
-   For now, the `count` field on Item Stacks is always stored again, even if `1`
    -   If the field is missing in data, will still fall back to `1`

### Recipes

-   Recipe types `crafting_shaped`, `crafting_shapeless`, `stonecutting` and `smithing_transform` now accept `components` for the `result` item stack
-   The `result` field for recipe types `smelting`, `blasting`, `smoking` and `campfire_cooking` is now an item stack format without a count, which means you'll need to specify an object with an `id` field
    -   This `result` now also accepts `components` data

### Predicates

#### `slots` entity sub-predicate

-   New entity field `slots` allows to check single or multiple slots on any entity
-   The field contains a map of slot names (same as ones used in `item` commands) to item predicate
-   For slot ranges, only one slot needs to match for whole entry to pass

Example:

    {
        "condition": "minecraft:entity_properties",
        "entity": "this",
        "predicate": {
            "slots": {
                "container.*": {
                    "items": "dirt"
                }
            }
        }
    }
    

### Slot names

-   Slot names (used in `item` commands and `slots` entity predicates) now include slot ranges
-   Unless specified, existing commands can still only work on single slots
-   New slot names:
    -   `container.*` - contains `container.0` to `container.53`
    -   `hotbar.*` - contains `hotbar.0` to `hotbar.8`
    -   `inventory.*` - contains `inventory.0` to `inventory.26`
    -   `enderchest.*` - contains `enderchest.0` to `enderchest.26`
    -   `villager.*` - contains `villager.0` to `villager.7`
    -   `horse.*` - contains `horse.0` to `horse.14`
    -   `weapon.*` - contains `weapon.mainhand` and `weapon.offhand`
    -   `armor.*` - contains `armor.head`, `armor.chest`, `armor.legs`, `armor.feed`, `armor.body`
    -   `player.cursor` - item held by player on screen
        -   Note: this information is not available in creative mode
    -   `player.crafting.0` - `player.crafting.3`, `player.crafting.*` - player's crafting slots
        -   Note: this includes only player's inventory crafting slots. Crafting table (or any other slots on other screens) are not included

#### `execute if|unless items`

-   `execute if|unless items <source> <slots> <item_predicate>` command can be used to count items
    -   `<source>` is the same as one used in `item` command, i.e.
        -   `block <x> <y> <z>`
        -   `entity <target>` (selector can return multiple entities)
    -   `<slots>` can accept single slot (like `container.0`) or a range (like `container.*`)
    -   `<item_predicate>` is the same as item predicate in `clear` command
-   If used alone, it will return total number of items in stacks that match predicates

### Banner Patterns

-   Banner Patterns will now be loaded into a dynamic registry from data packs (`data/<namespace>/banner_pattern/<id>`)
    -   These entries have two fields:
        -   `asset_id` (namespaced string) is used to resolve texture locations
            -   e.g. `custom:pattern` resolves to `assets/custom/textures/entity/banner/pattern.png`, `assets/custom/textures/entity/shield/pattern.png`
        -   `translation_key` (string) is a translation key prefix
            -   e.g. `block.minecraft.banner.custom.pattern` resolves to `block.minecraft.banner.custom.pattern.<dye color>`

### Item Stack Components

-   The `minecraft:profile` component no longer requires the `name` field to be present
-   Some additional Item Stack Components now support alternative, simple definitions:
    -   `minecraft:profile` can be defined as string player name (e.g. `profile="jeb_"`)
    -   `minecraft:dyed_color` can be defined as an integer rgb color (e.g. `dyed_color=16711680`)
    -   `minecraft:attribute_modifiers` can be defined as a direct list of modifiers (e.g. `attribute_modifiers=[{type:'generic.scale',uuid:[1,2,3,4],name:'Big!',amount:1.0,operation:'add_multiplied_base'}]`)
    -   `minecraft:potion_contents` can be defined as a single potion id (e.g. `potion_contents="invisibility"`)
    -   `minecraft:enchantments` and `minecraft:stored_enchantments` can be defined as an inline map of enchantment id to level (e.g. `enchantments={sharpness:1}`)
    -   These are only an alternative for defining the values, they will always be stored in their full formats
-   All container blocks now use the `minecraft:container` component when in item form, not just Shulker Boxes
-   The `minecraft:lodestone_target` component has been renamed to `minecraft:lodestone_tracker`
    -   The `pos` and `dimension` fields have been moved into a `target` object
    -   The `target` field is optional, and if not present, the compass will spin
-   The maximum number of lore and fireworks entries has been raised to 256

## Fixed bugs in 24w10a

-   [MC-140397](https://bugs.mojang.com/browse/MC-140397) When combining two enchanted unbreakable items, the result will be two stacked items
-   [MC-157133](https://bugs.mojang.com/browse/MC-157133) Enchanted books with curses can be stacked using a grindstone
-   [MC-174496](https://bugs.mojang.com/browse/MC-174496) Player heads lose their name after being placed
-   [MC-217084](https://bugs.mojang.com/browse/MC-217084) Player head NBT "ExtraType" is no longer saved but doesn't use DataFixerUpper upgrade path
-   [MC-268392](https://bugs.mojang.com/browse/MC-268392) Setting gravity attribute to 0.0 kicks player for flying
-   [MC-268462](https://bugs.mojang.com/browse/MC-268462) Saturation suspicious stew now grants 7 seconds of effect instead of 7 ticks
-   [MC-268800](https://bugs.mojang.com/browse/MC-268800) All tools have 4 attack damage, and 1.6 attack speed
-   [MC-268801](https://bugs.mojang.com/browse/MC-268801) Shulker boxes in saved hotbars inconsistently update to item components
-   [MC-268813](https://bugs.mojang.com/browse/MC-268813) Crash when spawning item with can;;_;;break/can;;_;;place;;_;;on component containing unknown/invalid tag
-   [MC-268824](https://bugs.mojang.com/browse/MC-268824) Disenchanted books from grindstone don't stack with books that were in the inventory
-   [MC-268830](https://bugs.mojang.com/browse/MC-268830) Effect Particles appear when specifying no particles using /effect command
-   [MC-268834](https://bugs.mojang.com/browse/MC-268834) Vault texture is inconsistent
-   [MC-268842](https://bugs.mojang.com/browse/MC-268842) Crash when saving world with painting
-   [MC-268845](https://bugs.mojang.com/browse/MC-268845) Items with can;;_;;break/can;;_;;place;;_;;on components update every time the inventory is changed in creative mode
-   [MC-268850](https://bugs.mojang.com/browse/MC-268850) Attribute Modifier: Not updated when switching items in hotbar
-   [MC-268851](https://bugs.mojang.com/browse/MC-268851) Crossbows don't make a firing sound
-   [MC-268853](https://bugs.mojang.com/browse/MC-268853) Unable to load paintings for any variants
-   [MC-268856](https://bugs.mojang.com/browse/MC-268856) Loading shulker box/bundle with a single 'invalid' item in it renders the whole component invalid
-   [MC-268864](https://bugs.mojang.com/browse/MC-268864) An item modifier with a duplicate item stack component prevents the entire data pack from (re)loading, rather than ignoring that one specific item modifier
-   [MC-268877](https://bugs.mojang.com/browse/MC-268877) Beehives/bee nests in inventory lose honey level after converting to 24w09a
-   [MC-268879](https://bugs.mojang.com/browse/MC-268879) Having a high damage value breaks and crashes the game
-   [MC-268897](https://bugs.mojang.com/browse/MC-268897) Cannot select entities who have any itemstack with the count being 1.
-   [MC-268904](https://bugs.mojang.com/browse/MC-268904) Suspicious stew not giving effects
-   [MC-268921](https://bugs.mojang.com/browse/MC-268921) Arrows lose particles after unloading world
-   [MC-268971](https://bugs.mojang.com/browse/MC-268971) Lodestone compass stops being a lodestone compass after breaking its tracked lodestone
-   [MC-269005](https://bugs.mojang.com/browse/MC-269005) Player heads from previous versions cause game crash and/or are converted incorrectly
-   [MC-269062](https://bugs.mojang.com/browse/MC-269062) Bundles with "Bundle Contents" component removed return after right clicking
-   [MC-269066](https://bugs.mojang.com/browse/MC-269066) Item modifier cannot remove `custom_name`
-   [MC-269091](https://bugs.mojang.com/browse/MC-269091) AttributeModifiers NBT with missing fields is not upgraded correctly to components

---

Hello! Here is a slightly bigger than usual snapshot with a lot of technical changes, refreshed UI, another iteration of Wolf Armor, and tweaks to new features.

Since the initial release of the Wolf Armor, we have been working on improving it to increase its protection, usability and add customization. For protection there is a new approach to armor, which considers the player's need to quickly see the state of the armor without using UI elements, and the ability to act quickly to help their pet wolf if needed. Please try it out and let us know what you think over at the feedback site: [Let's talk about Wolf Armor!](https://aka.ms/wolfarmorfeedback)

## Experimental Features

### Bogged

-   The Bogged drops 2 mushrooms (either both red/brown or one of each) when sheared
-   Updated Bogged texture and model

### Wind Charge

-   Removed randomness from the radius of both Breeze- and player-shot Wind Charges

### Vault

-   Additional changes to the Vault texture to even further distinguish from Trial Spawners

## Changes

-   Changes to Wolf Armor
-   The game's UI has been updated with a fresher look
-   Ctrl+Picking a renamed block (such as a Chest) in Creative Mode will now give a renamed item

### Wolf Armor

-   The Wolf Armor will protect the wolf from most damage sources until the armor loses all durability and breaks
-   Wolf Armor shows signs of increased breakage as durability goes down
-   Players can repair the Wolf Armor with Armadillo Scutes while it is equipped on the Wolf
-   Wolf armor can be dyed in similar fashion to Leather Armor
-   The Wolf's owner can now repair Wolf Armor on a Wolf

### UI

The UI has been updated to sport a fresher look and to be more consistent when it comes to the layout of different UI elements, all while retaining the essence and feel of the old screens.

As always, we're eager to hear your thoughts and opinions on further improvements or changes. Let us know what you think over at the [dedicated feedback site](https://aka.ms/JavaUIFeedback).

-   The menu background dirt texture has been replaced by a darkened background
    -   The dirt texture has been moved to the build-in Programmer Art Resource Pack
    -   Outside the game, the menu Panorama is displayed across all screen
    -   In the game, the world will be visible across all screens
    -   Paired with the darkened background is a blur
        -   The strength of the blur can be configured in Accessibility Settings
        -   In-game screens such as containers and books are not affected by these changes
-   Screen elements such as titles and buttons are positioned more consistently across different screens
-   The Player and World Backups screens in Realms have been updated
-   Lists now have clearer borders at the top and bottom
-   After defeating the Ender Dragon and entering the End Portal, the End Poem and credits are now displayed with a background based on the animated End Portal effect

## Technical Changes

-   The Data Pack version is now 33
-   The Resource Pack version is now 28
-   `playsound` command can now be used without specifying the player (assuming `@s`) and without specifying the mixer (assuming `master`)
-   In single player, when errors occur during loading or saving of chunks a warning will be shown in a toast
-   Trying join a single player world with less than 64 MB free disk space will show a warning screen
    -   Additionally, a warning toast will be shown periodically while in game

## Data Pack Version 33

-   Added `minecraft:bypasses_wolf_armor` for damage sources that can not be absorbed by Wolf Armor
-   Loot table entry with id `loot_table` now also accepts inline loot tables
-   Unstructured NBT data attached to stacks of items (`tag` field) has been replaced with structured 'components'

### Loot Tables

Loot table entry `loot_table` (which returns all items from provided nested loot table) now has the following syntax:

-   `value` - can be either:
    -   namespaced id - reference to another named loot table
    -   full loot table (same format as in standalone file)

### Item Stack Components

We are making some large changes to how Item Stack-specific properties are stored and represented in this snapshot, replacing the current NBT 'tag' with structured components.

This change has been made in order to:

-   Improve performance in cases where the game needs to frequently look up some property of an item (e.g. Armor Trims rendering every frame)
-   Validate item properties at load time, enabling easier identification of invalid data in commands and data packs
    -   This should avoid any 'silent' breakages in commands specifying custom item data for any potential future format changes
-   Continue to evolve the game to enable the creation of dynamic content

We understand that this is a significant breaking change for many datapacks and custom maps which will require significant effort to upgrade.

We do however believe that this builds critical foundations for future extensibility. We have taken care to ship these changes all at once, with the hope that this avoids future incremental changes requiring many small updates to packs.

The current NBT 'tag' has existed for quite some time, and we are aware that a lot of clever techniques have been developed with this for commands and data packs.

Although we have made our best effort to identify these cases, some of these techniques rely on undocumented or undefined behavior with certain tag configurations.

We want to ensure that no functionality is lost without a suitable alternative, but due to the undocumented nature of these techniques, we have very likely not caught everything!

We hope to address any regressions over the remaining course of this snapshot cycle.

With such a large change, we deeply value your feedback! You can share your thoughts on these changes over at the feedback site: [Let's talk about Item Stack Components!](https://aka.ms/ItemStackComponentsFeedback).

-   Unstructured NBT data attached to stacks of items (`tag` field) has been replaced with structured 'components'
    -   This data is parsed and validated when the item is loaded
    -   This should improve performance in certain scenarios (e.g. Armor Trim rendering) when item data was frequently compared or requested and parsed
    -   Custom data can still be stored in the `minecraft:custom_data` component
-   Item types (e.g. `minecraft:stick`) hold a set of default components on an item that individual item stacks can override
-   The format of serialized items and items in data packs has been updated for consistency and to support components
-   Item syntax in commands has been updated to support components
-   When advanced tooltips are enabled (F3+H), the number of components will be displayed instead of number of tags
-   Default component values for items are now listed in `items.json` generated in `reports` directory
-   The `ignoreTags` field on villager trades has been removed and replaced by a component predicate on damage
-   Block definitions are now added to `blocks.json` report (note: those definitions are not used yet and present only for informational purposes)
-   If the `key_item` field of Vault block is not present, the Vault cannot be unlocked

#### `minecraft:custom_data`

-   Can be used for custom data storage on an item
-   Can be accessed with pre-existing tag syntax (`{...}`) in commands
    -   In predicates (e.g. `/clear`), will be partially matched as currently
-   When upgrading a world, any non-game data in the item `tag` will be moved into here
-   Format: object with any fields
    -   e.g. `custom_data={some:'data'}`

#### `minecraft:damage`

-   The amount of durability removed from an item
-   If removed, the item will not be damageable
-   Replaces `Damage` tag
-   Format: non-negative integer
    -   e.g. `damage=12`
-   For damageable items, has an implicit default value of: `0`

#### `minecraft:repair_cost`

-   The additional experience cost required to modify an item in an Anvil
-   Replaces `RepairCost` tag
-   Format: non-negative integer
    -   e.g. `repair_cost=12`
-   If not set, has an implicit default value of: `0`

#### `minecraft:unbreakable`

-   If set, the item will not lose any durability when used
-   Replaces `Unbreakable` boolean tag
-   Format: object with fields
    -   `show_in_tooltip`: boolean (default: `true`)
        -   If `true`, an 'Unbreakable' line will be included in the tooltip
        -   Replaces 3rd bit of `HideFlags` tag
    -   e.g. `unbreakable={}`, `unbreakable={show_in_tooltip:false}`

#### `minecraft:enchantments`

-   Stores a list of enchantments and their levels on an item
-   Replaces `Enchantments` tag
-   Format: object with fields
    -   `levels`: object of enchantment (id string) to level (integer ;;[;;0; 255;;];;)
    -   `show_in_tooltip`: boolean (default: `true`)
        -   If `false`, no enchantments will be shown in the item tooltip
        -   Replaces 1st bit of `HideFlags` tag
    -   e.g. `enchantments={levels:{'minecraft:protection':2},show_in_tooltip:false}`
-   If not set, has an implicit default value of: `{levels:{}}`

#### `minecraft:stored_enchantments`

-   Stores list of enchantments and their levels for an Enchanted Book
-   The effects provided by enchantments do not apply from this component
-   Replaces `StoredEnchantments` tag on Enchanted Books
-   Format: same as `minecraft:enchantments`
    -   `show_in_tooltip` value replaces 6th bit of `HideFlags` tag
-   On Enchanted Books, has an implicit default value of: `{levels:{}}`

#### `minecraft:custom_name`

-   Custom name override for an item
-   Replaces `display.Name` tag
-   Format: JSON chat component string
    -   e.g. `custom_name='{"text": "This item is renamed!", "color": "red"}'`

#### `minecraft:lore`

-   Additional lines to include in an item's tooltip
-   Replaces `display.Lore` tag
-   Format: list of JSON chat component strings (max: 64 entries)
    -   e.g. `lore=['{"text": "The cake is a lie!"}']`
-   If not set, has an implicit default value of: `[]`

#### `minecraft:can_break`

-   Controls which blocks a player in Adventure mode can break with this item
-   Replaces `CanDestroy` tag
    -   These were previously stored as flat strings, but now use the more flexible block predicate format already used in loot tables and advancements
-   Format: object with fields
    -   `predicates`: list of block predicates
        -   `blocks`: block, list of blocks, or hash-prefixed block tag
        -   `nbt`: block entity NBT to match
        -   `state`: map of state property key to values to match
    -   `show_in_tooltip`: boolean (default: `true`)
        -   Replaces 4th bit of `HideFlags` tag
    -   e.g. `can_break={predicates:{blocks:'minecraft:furnace',state:{facing:'north'}}`
    -   Alternatively, can be represented by a single block predicate
        -   e.g. `can_break={blocks:'minecraft:stone'}`

#### `minecraft:can_place_on`

-   Controls which blocks a player in Adventure mode can place on with this item
-   Replaces `CanPlaceOn` tag
-   Format: object with fields
    -   `predicates`: list of block predicates
        -   Same as `can_break.predicates`
    -   `show_in_tooltip`: boolean (default: `true`)
        -   Replaces 5th bit of `HideFlags` tag
    -   e.g. `can_place_on={predicates:{blocks:'minecraft:furnace',state:{facing:'north'}}`
    -   Alternatively, can be represented by a single block predicate
        -   e.g. `can_place_on={blocks:'minecraft:stone'}`

#### `minecraft:dyed_color`

-   Represents a color applied to a dyeable item (`#minecraft:dyeable` tag)
-   Replaces `display.color` tag
-   Format: object with fields
    -   `rgb`: integer, RGB value
    -   `show_in_tooltip`: boolean (default: `true`)
        -   Replaces 7th bit of `HideFlags` tag
    -   e.g. `dyed_color={rgb:16711680}`

#### `minecraft:attribute_modifiers`

-   Holds attribute modifiers applied to any item
-   Replaces `AttributeModifiers` tag
-   Format: object with fields (default: `{modifiers:[]}`)
    -   `modifiers`: list of attribute modifiers
        -   `type`: attribute id
            -   Replaces `AttributeName`
        -   `slot`: one of:
            -   `any` (default)
            -   `hand`: either in main or offhand (new)
            -   `armor`: any armor slot (new)
            -   `mainhand`
            -   `offhand`
            -   `head`
            -   `chest`
            -   `legs`
            -   `feet`
            -   Modifiers will only apply when the item is equipped in the specified slot
            -   Replaces `Slot`
        -   `uuid`: uuid, uniquely represents this modifier
            -   Only one modifier can exist with the same id
            -   Replaces `UUID`
        -   `name`: string, human-readable name
            -   Replaces `Name`
        -   `amount`: double, number of units to modify this attribute (controlled by `operation`)
            -   Replaces `Amount`
        -   `operation`: one of:
            -   `add_value` (was `0`): Adds `amount` to the attribute
            -   `add_multiplied_base` (was `1`): Adds `amount` ;;*;; base value to the attribute
            -   `add_multiplied_total` (was `2`): Adds `amount` ;;*;; total value (from all previous modifiers) to the attribute
            -   Replaces `Operation` with integer ids
    -   `show_in_tooltip`: boolean (default: `true`)
        -   Replaces 2nd bit of `HideFlags` tag
    -   e.g. `attribute_modifiers={modifiers:[type:'minecraft:generic.scale',uuid:[1,2,3,4],name:'Big!',amount:1.0,operation:'add_multiplied_base']}`
-   If not set, has an implicit default value based on the item type's default attributes (e.g. attack damage for weapons)

#### `minecraft:charged_projectiles`

-   Holds all projectiles that have been loaded into a Crossbow
-   If not present, the Crossbow is not charged
-   Replaces `Charged` and `ChargedProjectiles` tags
-   Format: list of item stacks
    -   e.g. `charged_projectiles=[{id:'minecraft:arrow'}]`
    -   No longer restricted to 3 entries

#### `minecraft:intangible_projectile`

-   Marks that a projectile item would be intangible when fired (i.e. can only be picked up by a creative mode player)
-   Only set when items are inside a Crossbow's `charged_projectiles` component
-   Format: empty object
    -   e.g. `intangible_projectile={}`

#### `minecraft:bundle_contents`

-   Holds all items stored inside of a Bundle
-   If removed, items cannot be added to the Bundle
-   Replaces `Items` tag
-   Format: list of item stacks
    -   e.g. `bundle_contents=[{id:'minecraft:poisonous_potato'}]`
-   On Bundles, has an implicit default value of: `[]`

#### `minecraft:map_color`

-   Represents the tint of the decorations on the Filled Map item
-   Replaces `display.MapColor` tag
-   Format: integer, RGB value
    -   e.g. `map_color=16711680`
-   On Filled Maps, has an implicit default value of: `4603950`

#### `minecraft:map_decorations`

-   Holds a list of markers to be placed on a Filled Map (used for Explorer Maps)
-   Replaces `Decorations` tag
-   Format: map of unique decoration id to decorations
    -   `type`: one of:
        -   `player` (was `0`)
        -   `frame` (was `1`)
        -   `red_marker` (was `2`)
        -   `blue_marker` (was `3`)
        -   `target_x` (was `4`)
        -   `target_point` (was `5`)
        -   `player_off_map` (was `6`)
        -   `player_off_limits` (was `7`)
        -   `mansion` (was `8`)
        -   `monument` (was `9`)
        -   `banner_white` (was `10`)
        -   `banner_orange` (was `11`)
        -   `banner_magenta` (was `12`)
        -   `banner_light_blue` (was `13`)
        -   `banner_yellow` (was `14`)
        -   `banner_lime` (was `15`)
        -   `banner_pink` (was `16`)
        -   `banner_gray` (was `17`)
        -   `banner_light_gray` (was `18`)
        -   `banner_cyan` (was `19`)
        -   `banner_purple` (was `20`)
        -   `banner_blue` (was `21`)
        -   `banner_brown` (was `22`)
        -   `banner_green` (was `23`)
        -   `banner_red` (was `24`)
        -   `banner_black` (was `25`)
        -   `red_x` (was `26`)
        -   `village_desert` (was `27`)
        -   `village_plains` (was `28`)
        -   `village_savanna` (was `29`)
        -   `village_snowy` (was `30`)
        -   `village_taiga` (was `31`)
        -   `jungle_temple` (was `32`)
        -   `swamp_hut` (was `33`)
        -   Replaces `type` byte with numeric ids
    -   `x`: double, world coordinate
    -   `z`: double, world coordinate
    -   `rotation`: float, clockwise rotation from north in degrees
        -   Replaces `rot` double
    -   e.g. `map_decorations={'Some marker':{type:'target_x',x:123.0,z:-45.0,rotation:0.0f}}`
-   On Filled Maps, has an implicit default value of: `{}`

#### `minecraft:map_id`

-   References the shared map state holding map contents and markers for a Filled Map
-   Replaces `map` tag
-   Format: integer id
    -   e.g. `map_id=1`

#### `minecraft:custom_model_data`

-   Can be used to replace the models of items by selecting for the `minecraft:custom_model_data` property in the item model
-   Replaces `CustomModelData` tag
-   Format: integer value
    -   e.g. `custom_model_data=43`

#### `minecraft:potion_contents`

-   Holds the contents of a potion (Potion, Splash Potion, Lingering Potion), or potion applied to an item (Tipped Arrow)
-   Replaces `Potion`, `CustomPotionColor`, and `custom_potion_effects` tags
-   Format: object with fields
    -   `potion`: potion id (optional)
        -   The potion type in this item: the item will inherit all effects from this
    -   `custom_color`: integer, RGB value (optional)
        -   Overrides the visual color of the potion
    -   `custom_effects`: list of effect instances (default: `[]`)
        -   Additional list of custom effects that this item should apply, that may not be representable by an existing potion
    -   e.g. `potion_contents={potion:'minecraft:invisibility',custom_color:16711680}`
-   On Potion or Tipped Arrow items, has an implicit default value of: `{}`

#### `minecraft:writable_book_contents`

-   Holds the contents in a Book and Quill
-   Replaces `pages` and `filtered_pages` tags
    -   The pages list maps directly, with `{text:'...'}` wrapping
    -   `filtered_pages` are pulled by index keys into the relevant page entry under the `filtered` field
-   Format: object with fields
    -   `pages`: list of either:
        -   object with fields
            -   `text`: string, page plain text contents
            -   `filtered`: string, filtered page contents (optional)
                -   If specified, players with chat filter enabled will see this page instead of `text`
        -   or: string, page plain text contents
    -   e.g. `writable_book_contents={pages:[{text:'Hello world!'}]}`
-   On Book and Quill, has an implicit default value of: `{pages:[]}`

#### `minecraft:written_book_contents`

-   Holds the contents and metadata of a Written Book
-   Replaces `pages`, `filtered_pages`, `title`, `filtered_title`, `author`, `generation`, and `resolved` tags
-   Format: object with fields
    -   `pages`: list
        -   Same format as `writable_book_contents` pages, except uses JSON chat component strings which can be formatted
    -   `title`: filtered string (same format as pages)
    -   `author`: string, player name
    -   `generation`: integer ;;[;;0; 2;;];;
        -   The number of times this book has been copied (`0` = original)
    -   `resolved`: boolean
        -   `true` if the chat components in this book have already been resolved (entity selectors, scores substituted)
        -   If `false`, will be resolved when opened by a player
    -   e.g. `written_book_contents={pages:[{text:'Hello world!'}],title:{text:'A delightful read'},author:'Herobrine',generation:1,resolved:true}`

#### `minecraft:trim`

-   Holds the trims applied to an item
    -   Presence of the component is no longer restricted by the `#minecraft:trimmable_armor` tag (although, this tag is still used for recipes)
-   Replaces `Trim` tag of the same format
-   Format: object with fields
    -   `pattern`: pattern id (or inline pattern)
    -   `material`: material id (or inline material)
    -   `show_in_tooltip`: boolean (default: `true`)
        -   Replaces 8th bit of `HideFlags` tag
    -   e.g. `trim={pattern:'minecraft:silence',material:'minecraft:redstone'}`

#### `minecraft:suspicious_stew`

-   Holds the effects that will be applied when consuming Suspicious Stew
-   Replaces `effects` tag of the same format
-   Format: list of effect objects with fields
    -   `id`: effect id
    -   `duration`: integer, tick count (default: `160`)
    -   e.g. `suspicious_stew=[{id:'minecraft:poison'}]`
-   On Suspicious Stew, has an implicit default value of: `[]`

#### `minecraft:hide_additional_tooltip`

-   If present, disables 'additional' tooltip part which comes from the item type
-   Replaces 6th bit of `HideFlags` tag
-   Format: empty object
    -   e.g. `hide_additional_tooltip={}`

#### `minecraft:debug_stick_state`

-   Stores the selected block state properties used by a Debug Stick
-   Replaces `DebugProperty` tag
-   Format: map of block id to block property name
    -   e.g. `debug_stick_state={'minecraft:turtle_egg':'eggs','minecraft:furnace':'facing'}`
-   On Debug Stick, has an implicit default value of: `{}`

#### `minecraft:entity_data`

-   Stores unstructured NBT data to apply to an entity when using an item that spawns an entity, such as a Spawn Egg or Armor Stand
-   Replaces previous `EntityTag` tag, with same behavior
-   Format: object with fields
    -   Must contain an `id` field with the entity type
    -   Any additional fields will be merged into the entity when spawned
    -   e.g. `entity_data={id:'minecraft:pig',Health:1.0f}`

#### `minecraft:bucket_entity_data`

-   Stores unstructured NBT data to apply to an entity when placed from a bucket
-   Replaces `NoAI`, `Silent`, `NoGravity`, `Glowing`, `Invulnerable`, `Health`, `Age`, `Variant`, `HuntingCooldown`, and `BucketVariantTag` tags
-   Format: object with fields
    -   Can contain any of the above listed fields, which will be applied to the entity when placed
    -   e.g. `bucket_entity_data={NoAI:1,Age:43}`
-   On bucketed mob items, has an implicit default value of: `{}`

#### `minecraft:instrument`

-   Holds the instrument type used by a Goat Horn
-   Replaces `instrument` tag of same format
-   Format: instrument id
    -   e.g. `instrument='minecraft:ponder_goat_horn'`

#### `minecraft:recipes`

-   List of recipes that should be unlocked when using the Knowledge Book item
-   Replaces `Recipes` tag of same format
-   Format: list of recipe ids
    -   e.g. `recipes=['minecraft:acacia_boat','minecraft:anvil']`
-   On Knowledge Book, has an implicit default value of: `[]`

#### `minecraft:lodestone_target`

-   If present, specifies the target Lodestone that a Compass should point towards
-   Replaces `LodestonePos`, `LodestoneDimension`, and `LodestoneTracked` tags
-   Format: object with fields
    -   `pos`: integer array of x, y, and z
    -   `dimension`: dimension id
    -   `tracked`: boolean (default: `true`)
        -   If `true`, when the Lodestone at the target position is removed, the component will be removed
    -   e.g. `lodestone_target={pos:[13,64,-43],dimension:'minecraft:the_nether'}`

#### `minecraft:firework_explosion`

-   Stores the explosion crafted in a Firework Star
-   Replaces `Explosion.Type`, `Explosion.Colors`, `Explosion.FadeColors`, `Explosion.Trail`, and `Explosion.Flicker` tags
-   Format: object with fields
    -   `shape`: one of
        -   `small_ball` (was `0`)
        -   `large_ball` (was `1`)
        -   `star` (was `2`)
        -   `creeper` (was `3`)
        -   `burst` (was `4`)
        -   Replaces `Type` numeric ids
    -   `colors`: integer array, RGB values (default: `[]`)
        -   List of initial particle colors, randomly selected from
    -   `fade_colors`: integer array, RGB values (default: `[]`)
        -   List of particle colors to fade to, randomly selected from
    -   `has_trail`: boolean (default: `false`)
    -   `has_twinkle`: boolean (default: `false`)
        -   Renamed from `Flicker` tag
    -   e.g. `firework_explosion={shape:'large_ball',colors:[16711680],has_trail:true}`

#### `minecraft:fireworks`

-   Stores all explosions crafted into a Firework Rocket, as well as flight duration
-   Replaces `Fireworks.Explosions` and `Fireworks.Flight` tags
-   Format: object with fields
    -   `explosions`: list of explosions
        -   Same format as `minecraft:firework_explosion` component
    -   `flight_duration`: byte, number of gunpowder in this rocket
    -   e.g. `fireworks={explosions:[{shape:'large_ball',colors:[16711680],has_trail:true}],flight_duration:2}`
-   On Firework Rocket, has an implicit default value of: `{explosions:[],flight_duration:1}`

#### `minecraft:profile`

-   Controls the skin displayed on a Player Head
-   Copied to Player Head block when placed
-   Replaces `SkullOwner` tag
-   If only a `name` is specified, will be resolved into the corresponding player ID and skin data
-   Format: object with fields
    -   `name`: string, player profile name
    -   `id`: uuid, player profile id (optional)
    -   `properties`: list of properties (optional)
        -   `name`: string, property name (e.g. `textures`)
        -   `value`: string (base64 encoded texture data)
        -   `signature`: string (optional)
    -   e.g. `profile={name:'MHF_Sheep'}`

#### `minecraft:note_block_sound`

-   Controls the sound played by a Player Head when placed on a Note Block
-   Copied to Player Head block when placed
-   Replaces `BlockEntityTag.note_block_sound` tag
-   Format: sound event id
    -   e.g. `note_block_sound='minecraft:ambient.cave'`

#### `minecraft:base_color`

-   Stores the base color for a Shield
-   Replaces `BlockEntityTag.Base` tag
-   Format: one of
    -   `white` (was `0`)
    -   `orange` (was `1`)
    -   `magenta` (was `2`)
    -   `light_blue` (was `3`)
    -   `yellow` (was `4`)
    -   `lime` (was `5`)
    -   `pink` (was `6`)
    -   `gray` (was `7`)
    -   `light_gray` (was `8`)
    -   `cyan` (was `9`)
    -   `purple` (was `10`)
    -   `blue` (was `11`)
    -   `brown` (was `12`)
    -   `green` (was `13`)
    -   `red` (was `14`)
    -   `black` (was `15`)
    -   e.g. `base_color='magenta'`

#### `minecraft:banner_patterns`

-   Stores the additional patterns applied to a Banner or Shield
-   Copied to Banner block when placed
-   Replaces `BlockEntityTag.Patterns` tag
-   Format: list of banner patterns
    -   `pattern`: banner pattern registry id
        -   Replaces short banner pattern code in `Patterns[].Pattern`
    -   `color`: dye color name
        -   Replaces integer dye color id in `Patterns[].Color`
    -   e.g. `banner_patterns=[{pattern:'minecraft:stripe_top',color:'red'}]`
-   On Banners and Shields, has an implicit default value of: `[]`

#### `minecraft:pot_decorations`

-   Stores the Sherds applied to each side of a Decorated Pot
-   Copied to Decorated Pot block when placed
-   Replaces `BlockEntityTag.sherds` tag of same format
-   Format: list of sherd item ids
    -   e.g. `['arms_up_pottery_sherd','angler_pottery_sherd','danger_pottery_sherd','shelter_pottery_sherd']`
-   On Decorated Pots, has an implicit default value of: `['minecraft:brick','minecraft:brick','minecraft:brick','minecraft:brick']`

#### `minecraft:container`

-   Holds the contents of Shulker Boxes in item form
-   Copied to Shulker Box block when placed
-   Replaces `BlockEntityTag.Items` tag
-   Format: list of slots
    -   `slot`: integer ;;[;;0; 255;;];;, representing a slot in the container
    -   `item`: item stack
    -   e.g. `container=[{slot:7,item:{id:'diamond_pickaxe',components:{'minecraft:unbreakable':{}}}}]`
-   On Shulker Boxes, has an implicit default value of: `[]`

#### `minecraft:bees`

-   Holds the bees inside a Beehive or Bee Nest
-   Copied to Beehive or Bee Nest block when placed
-   Replaces `BlockEntityTag.Bees` tag
-   Format: list of bees
    -   `entity_data`: map of string to string
        -   `id`: entity id
        -   The remainder tags merged into the Bee when spawned
    -   `ticks_in_hive`: integer
    -   `min_ticks_in_hive`: integer
    -   e.g: `bees=[{entity_data:{id='minecraft:bee'},ticks_in_hive:3,min_ticks_in_hive:10}]`
-   On Beehive and Bee Nest, has an implicit default value of: `[]`

#### `minecraft:lock`

-   Holds the lock state of a container-like block
    -   An item with a custom name of the same value must be used to open this container
-   Copied to container block when placed
-   Replaces `BlockEntityTag.Lock` tag
-   Format: string value, representing the key
    -   e.g: `lock='hunter2'`

#### `minecraft:container_loot`

-   Holds the unresolved loot table and seed of a container-like block
-   Copied to container block when placed
-   Replaces `BlockEntityTag.LootTable` and `BlockEntityTag.LootTableSeed` tags
-   Format: object with fields
    -   `loot_table`: loot table id
    -   `seed`: long, pseudorandom seed to resolve the loot table with (optional)
        -   If not specified, or `0`, the seed will be picked randomly when the loot table is evaluated
    -   e.g. `container_loot={loot_table:'minecraft:chests/buried_treasure',seed:123}`

#### `minecraft:block_entity_data`

-   Stores unstructured NBT data to apply to a block entity when placing a block such as a Chest or Furnace
-   Replaces previous `BlockEntityTag` tag, with same behavior
-   Any block entity data moved into a dedicated item component is removed from this tag
-   This tag only works for Command Blocks, Lecterns, Signs, and Spawners if the player is an operator
-   Format: object with fields
    -   Must contain an `id` field with the block entity type
    -   Any additional fields will be merged into the block entity when placed
    -   e.g. `block_entity_data={id:'minecraft:chest',Items:[{Slot:1,item:'minecraft:diamond'}]}`

#### `minecraft:block_state`

-   Holds block state properties to apply when placing a block
-   Replaces `BlockStateTag` tag
-   Format: map of property key to property value
    -   e.g: `block_state={eggs:'10'}`

#### `minecraft:enchantment_glint_override`

-   Overrides the enchantment glint effect on an item
-   Can be used in the same way that an invalid `Enchantments` tag would previously behave to add a glint
-   Format: boolean
    -   If `true`, an item without an enchantment glint will display a glint
    -   If `false`, an item with a glint will not display this glint (either from enchantments or intrinsic properties of the item)
    -   e.g: `enchantment_glint_override=true`

### Commands

-   Commands such as `/give`, `/item`, `/loot`, and `/clear` have updated item syntax
-   Components can now be specified after the item name in square brackets
    -   Components are assigned with an `=` (e.g. `wooden_pickaxe[damage=23]`)
    -   Components are comma-separated (e.g. `netherite_hoe[damage=5,repair_cost=2]`)
-   Component types will be autocompleted, but values themselves will not
-   Values will however be validated, and the command will fail to parse if the component is improperly specified
    -   e.g. `/give @s wooden_pickaxe[damage=-34]` is not valid
-   The pre-existing NBT syntax (`{...}`) is rewired to set or match the `minecraft:custom_data` component
    -   e.g. `/give @s stick{foo:'bar'}` is equivalent to `/give @s stick[custom_data={foo:'bar'}]`
    -   If both `[...]` and `{...}` are specified, `[...]` must be ordered before `{...}`
-   Item predicate arguments (in `/clear`) have new semantics with respect to matching components and custom data
    -   Every specified component must be present on the target item, and have an exactly equal parsed value
    -   Components with defaults (e.g. `damage=0` by default) will be assumed to exist on the target item if not specified
        -   As such, `/clear @s diamond_pickaxe[damage=0]` will match only undamaged Diamond Pickaxes
        -   On the other hand, `/clear @s diamond_pickaxe` will match any Diamond Pickaxe, irrespective of damage
    -   Exact matching of component values applies even for the `minecraft:custom_data` component
    -   However, using the `{...}` custom data syntax will use pre-existing NBT partial match behaviour
        -   This requires that all tags specified in the predicate are present on the target item, but additional ones may be ignored
        -   Lists in the target must contain all items specified in the predicate, but additional may be present and order is ignored
-   Modifier operations in the `/attribute` command have been renamed:
    -   `add` -> `add_value`
    -   `multiply_base` -> `add_multiplied_base`
    -   `multiply` -> `add_multiplied_total`

### Item Stack Format

-   Along with format changes due to components, the structures of item stacks on disk and in data packs have been updated for consistency
-   Previous `id` (string) and `Count` (byte) fields have been replaced with `id` (namespaced string) and `count` (integer) fields
    -   This format is additionally applied to the `icon` field in advancements, items in chat component hover events, and the `result` field in smelting recipes (`result` and `count` are no longer inlined)
-   The `count` field is optional (defaults to `1`), and no longer stored if default
    -   Stack size is now limited to the maximum stack size of the item
-   The `tag` field has been removed, and any remaining contents will end up in the `minecraft:custom_data` component when upgrading
-   A new `components` field stores all components attached to an item
    -   Format: map of component id to component value (varies by component id)
        -   e.g. `{..., components: {'minecraft:damage': 12}}`
        -   Components with a `!` prefix (e.g. `"!minecraft:damage": {}`) will cause this component to be removed
    -   Components equal to their default value will not be stored
-   The item stack format no longer represents empty stacks (`air` item, or `count` 0)
    -   Instead, in places that support it, the field should be ommitted
    -   In some cases, such as lists of stacks (e.g. `HandItems` in living entities), an empty map (`{}`) is used to represent empty stacks

### Other Format Changes

-   Tipped Arrows no longer store their applied potion effects
    -   This is instead fetched from their held `item`
-   Area Effect Clouds now store potions in the same format as the `minecraft:potion_contents` component in a `potion_contents` field:
    -   `Potion` -> `potion_contents.potion`
    -   `Color` -> `potion_contents.custom_color`
    -   `effects` -> `potion_contents.custom_effects`
-   Banners now store applied patterns in the same format as the `minecraft:banner_patterns` component in a `patterns` field:
    -   `Patterns[].Pattern` (string short id) -> `patterns[].pattern` (string pattern registry id)
    -   `Patterns[].Color` (integer dye id) -> `patterns[].color` (string dye name)
-   Beehive format has also been updated:
    -   `Bees[].EntityData` -> `bees[].entity_data`
    -   `Bees[].TicksInHive` -> `bees[].ticks_in_hive`
    -   `Bees[].MinOccupationTicks` -> `bees[].min_ticks_in_hive`
    -   `FlowerPos` -> `flower_pos`
-   Villager Trades can be configured to accept only undamaged items by selecting for `'minecraft:damage': 0`
    -   By default, if no components are specified, any item will be accepted (similar to `components` field in item predicates)

### Loot Item Functions

-   Added `minecraft:set_components` function
    -   Adds or replaces the given component on the input item
    -   `conditions`: list of conditions (default: `[]`):
        -   Conditions to check before applying the function
    -   `components`: map of component id to component value (format varied by id)
        -   Components with a `!` prefix (e.g. `"!minecraft:damage": {}`) will cause this component to be removed
-   Added `minecraft:copy_components` function
    -   Copies components from a specified source onto an item
    -   This is now used in the Vanilla pack in place of the `minecraft:copy_name` and `minecraft:copy_nbt` functions
    -   `conditions`: list of conditions (default: `[]`):
        -   Conditions to check before applying the function
    -   `source`: source type to pull from
        -   Currently, can only and must be `"block_entity"`
    -   `components`: list of component ids to copy
-   `minecraft:set_nbt` and `minecraft:copy_nbt` functions have been renamed to `minecraft:set_custom_data` and `minecraft:copy_custom_data` respectively
    -   These now apply to the `minecraft:custom_data` component of the target item
-   `minecraft:set_attributes` function has been updated
    -   The modifier `slot` field now supports `any`, `armor`, and `hand` values
    -   The modifier `operation` values have been renamed:
        -   `addition` -> `add_value`
        -   `multiply_base` -> `add_multiplied_base`
        -   `multiply_total` -> `add_multiplied_total`

### Predicate Formats in Loot Tables & Advancements

-   Item predicate format has been updated:
    -   `tag` field has been removed
    -   `items` field now supports a single entry, hash-prefixed item tag, or list of items
    -   `potion` -> `potions`, and supports a single entry, hash-prefixed potion tag, or list of potions
    -   `nbt` predicate has been renamed to `custom_data` and now matches `minecraft:custom_data` component
    -   A new optional `components` field matches exact components
        -   All specified components must be present an exactly equal on the target item, but additional components may be ignored
        -   Components with defaults will be assumed to exist on the target item if not specified
        -   Format: map of component id to component value (varies by component id)
            -   e.g. `"components": { "minecraft:damage": 0 }` will match only undamaged items
-   Block predicate format has been updated:
    -   `tag` field has been removed
    -   `blocks` field now supports a single entry, hash-prefixed block tag, or list of blocks
-   Fluid predicate format has been updated:
    -   `tag` field has been removed
    -   `fluid` -> `fluids`, and supports a single entry, hash-prefixed fluid tag, or list of fluids
-   Entity predicate format has been updated:
    -   `type` field now supports a single entry, hash-prefixed entity type tag, or list of entity types
-   Location predicate format has been updated:
    -   `biome` -> `biomes`, and supports a single entry, hash-prefixed biome tag, or list of biomes
    -   `structure` -> `structures`, and supports a single entry, hash-prefixed structure tag, or list of structures

### Enchantments

-   Projectile weapon Enchantments like `infinity`, `multishot` and `piercing` now work on both Crossbows and Bows, if placed onto the alternative weapon using data manipulation or a change to the `enchantable/*` tags)

## Resource Pack Version 27

-   Added additional textures to support colored layers of Wolf Armor for the wolf model and Wolf Armor item:
    -   `textures/entity/wolf/wolf_armor_overlay.png`
    -   `textures/item/wolf_armor_overlay.png`
-   Wolf Armor item texture, `textures/item/wolf_armor.png`, has been raise by 2px to create space for the durability bar
-   Added three semi-transparent textures for the cracks to show on the Wolf Armor layer:
    -   `textures/entity/wolf/wolf_armor_crackiness_low.png`
    -   `textures/entity/wolf/wolf_armor_crackiness_medium.png`
    -   `textures/entity/wolf/wolf_armor_crackiness_high.png`

## Resource Pack Version 28

-   The `options_background` and the `light_dirt_background` textures have been removed
    -   Instead, `menu_background` is used as the background of screens, while `menu_list_background` is used for the background of lists
-   Lists now use the `header_separator` and `footer_separator` textures at the top and bottom, respectively
-   The following textures have been updated: `footer_separator`, `header_separator`
-   The following sprites have been updated: `widget;;t;;ab`, `widget;;t;;ab_highlighted`, `widget;;t;;ab_selected`, `widget;;t;;ab_selected_highlighted`
-   The `widget;;s;;croller_background` sprite has been added
-   The following textures in Realms have been removed: `changes`, `changes_highlighted`, `restore`, `restore_highlighted`, `make_operator_highlighted`, `remove_operator_highlighted`, `remove_player_highlighted`

## Fixed bugs in Snapshot 24w09a

-   [MC-118890](https://bugs.mojang.com/browse/MC-118890) Tipped arrows stuck in the ground never lose their effect
-   [MC-195572](https://bugs.mojang.com/browse/MC-195572) The fog from lava is much denser when having the Fire Resistance effect active compared to Bedrock Edition
-   [MC-226775](https://bugs.mojang.com/browse/MC-226775) Extinguishing candle shows inaccurate subtitle
-   [MC-251042](https://bugs.mojang.com/browse/MC-251042) Third-party warning buttons are not positioned well in non-English languages
-   [MC-257119](https://bugs.mojang.com/browse/MC-257119) Lodestone Compass does not stack after dropping and destroying the Lodestone
-   [MC-259284](https://bugs.mojang.com/browse/MC-259284) Severe performance issues with inventories with lots of data
-   [MC-267451](https://bugs.mojang.com/browse/MC-267451) Items named with an anvil on 1.20.4 don't stack with items named prior
-   [MC-267500](https://bugs.mojang.com/browse/MC-267500) Attribute modifier on an item with the first and/or last 2 integers of the UUID being 0 are non-functional
-   [MC-267975](https://bugs.mojang.com/browse/MC-267975) The realms player list is rendered larger than its visual size
-   [MC-267976](https://bugs.mojang.com/browse/MC-267976) The scroll bar in the realms player list can no longer be dragged using the mouse cursor
-   [MC-268011](https://bugs.mojang.com/browse/MC-268011) Hoppers leak the last world they sucked item on
-   [MC-268022](https://bugs.mojang.com/browse/MC-268022) Elements within the list in the "Experimental feature requirements" menu cannot be selected via the mouse cursor
-   [MC-268236](https://bugs.mojang.com/browse/MC-268236) Search field in the social interactions menu not focused by default
-   [MC-268350](https://bugs.mojang.com/browse/MC-268350) Wind Charges never despawn
-   [MC-268580](https://bugs.mojang.com/browse/MC-268580) Chiseled bookshelf model is not deterministic in data generation
-   [MC-268710](https://bugs.mojang.com/browse/MC-268710) The fall damage reduction for the Wind Charge is not working
-   [MC-268778](https://bugs.mojang.com/browse/MC-268778) Baby armadillos shouldn't drop scutes when brushed

---

We are now releasing 24w07a, containing bug fixes and a new skeleton variant called Bogged.

Good luck dodging poisonous arrows!

## Known Issues

-   The fall damage reduction for the Wind Charge is not working

## Experimental Features

### Bogged

-   A new variant of Skeletons that shoot poisonous arrows
    -   They're faster to take down with 16 health instead of 20 health
    -   They attack at a slower interval of 3.5 seconds instead of 2 seconds
-   Has a chance to drop Arrows of Poison when killed by players
-   These mossy and mushroom covered Skeletons spawn naturally in Swamps and Mangrove Swamps
    -   Can also be found spawning from Trial Spawners in some Trial Chambers

## Changes

-   Hoppers can once again pick up items from beehives and beenests, but other full blocks still block them

## Technical Changes

-   The Data Pack version is now 32

## Data Pack Version 32

-   Added `#minecraft:does_not_block_hoppers` for blocks that will never disable a Hopper when placed above one
-   Added `gameplay/panda_sneeze` loot table for drops when Pandas sneeze

## Fixed bugs in 24w07a

-   [MC-266570](https://bugs.mojang.com/browse/MC-266570) Wind charges can't go through non solid blocks
-   [MC-267732](https://bugs.mojang.com/browse/MC-267732) /place jigsaw still caps max depth at 7
-   [MC-267866](https://bugs.mojang.com/browse/MC-267866) Panda slimeball drop is hardcoded
-   [MC-268080](https://bugs.mojang.com/browse/MC-268080) When the projectiles are reflected from the breeze, the projectiles will deflect in the opposite direction in Bedrock, but in Java they will always deflect downward
-   [MC-268339](https://bugs.mojang.com/browse/MC-268339) "Japanese" is misspelled as "Japanse" in options.japaneseGlyphVariants.tooltip
-   [MC-268342](https://bugs.mojang.com/browse/MC-268342) Breeze can be damaged by wind charge
-   [MC-268344](https://bugs.mojang.com/browse/MC-268344) Breezes are not affected by the looting enchantment
-   [MC-268349](https://bugs.mojang.com/browse/MC-268349) Hopper minecarts with a full block above them no longer search for item entities to pick up
-   [MC-268353](https://bugs.mojang.com/browse/MC-268353) Tick Freeze randomizes next AI tick type
-   [MC-268355](https://bugs.mojang.com/browse/MC-268355) Tick freeze lets chunk tickets expire
-   [MC-268362](https://bugs.mojang.com/browse/MC-268362) Blocks which typically negate fall damage fail to do so from falls after using wind charges
-   [MC-268368](https://bugs.mojang.com/browse/MC-268368) Wind charge bounces cause fall damage after exiting water
-   [MC-268383](https://bugs.mojang.com/browse/MC-268383) Wind Charges negate all fall damage that does not occur below the hit point, regardless of whether the fall was caused by the charge or not
-   [MC-268389](https://bugs.mojang.com/browse/MC-268389) Fall damage is conserved between game modes with Wind Charge
-   [MC-268418](https://bugs.mojang.com/browse/MC-268418) Pre-1.9 chunks get regenerated seemingly randomly when upgrading
-   [MC-268426](https://bugs.mojang.com/browse/MC-268426) Wind charges shot from breezes no longer explode and instead are deleted upon hitting breezes after being deflected
-   [MC-268451](https://bugs.mojang.com/browse/MC-268451) Hoppers can't pull honey bottles from bee hives or bee nests

---

Poof! Here's snapshot 24w06a with the new experimental Wind Charge item and optimizations for Hoppers... among other changes!

We'd love to get your feedback on the new Wind Charge feature over at the official feedback site: [Let's talk about Wind Charges!](https://aka.ms/mcwindchargefeedback)

We've also made a change so that a hopper will no longer try to pick up item entities if there is a full block placed above it. This will improve performance for many redstone builds, but will break some machines that relied on glitching items into a block above a hopper.

Happy parkouring!

## Experimental Features

### Wind Charge

-   Become the Breeze! Using a Wind Charge will fire off a wind charge projectile similar to the Breeze's
-   A Wind Charge fired by a player will grant 10% more knockback than a Breeze's, but have a much smaller area of impact
-   Just like the projectile fired by the Breeze, Wind Charges fired by the player also deal damage if they hit an entity directly
-   The Breeze drops between 4-6 Wind Charges when killed
-   There is a half-second cooldown after each use
-   Wind Charges can be fired from a dispenser
-   Players that launch themselves with a wind charge only accumulate fall damage below the y-level of where they collided with the wind burst

### Vault

-   Tweaked the texture of Vaults to make them easier to distinguish from Trial Spawners

## Changes

-   Final tweaks to Armadillo
-   Updates to Tamed Wolves health and damage
-   Added option to use Japanese variants of CJK characters
-   Hoppers will no longer try to pick up item entities if there is a full block placed above it

### Armadillo

-   Armadillos do not panic when damaged but roll up instead, and hide their head and feet
-   Armadillos peek out to see if “the coast is clear” before unrolling
-   New animations and sounds for rolling up and unrolling + the peek out animation

With these changes the Armadillo work is done for now, and we are switching our attention to the Wolf Armor instead.

### Tamed Wolves health and damage

-   Tamed Wolves now have 40 health points (20 hearts) instead of 20 health points (10 hearts)
-   They no longer take half of the damage from most environmental sources like they used to do
    -   In most cases this change will make no difference given the health boost, but now they can withstand more damage from players and arrows
-   Feeding a Wolf now heals twice as many health points

### Japanese font variants

-   New option has been added to select Japanese variants for some CJK characters
-   Replacement glyphs come from Japanese version of Unifont font
-   New option is included in new "Font Settings" menu, accessible from "Language" menu
-   Default value of this option is based on system locale language setting
-   "Force Unicode" button has been moved to "Font Settings"

## Technical Changes

-   The Data Pack version is now 31
-   The Resource Pack version is now 26
-   Improved hopper performance
-   Added JFR (Java Flight Recorder) events for individual chunk reads (`minecraft.ChunkRegionRead`) and writes (`minecraft.ChunkRegionWrite`)
-   Maximum length of a command in a function (including macro expansions) can no longer exceed 2,000,000 characters
-   Reduced amount of data sent by the server during login by reusing parts of the vanilla datapack

## Data Pack Version 31

-   Potion effect amplifiers are restricted between 0 and 255 again
    -   The former behavior of effects such as Jump Boost, Levitation, and Mining Fatigue over 127 has been replaced with new attributes
-   Added `generic.gravity` attribute that controls blocks/tick^2 acceleration downward
-   Added `generic.safe_fall_distance` attribute to control the fall distance after which the entity will take fall damage
-   Added `generic.fall_damage_multiplier` attribute to multiply overall fall damage amount
-   Renamed `horse.jump_strength` to `generic.jump_strength`, and now applies to all entities
    -   This controls the base impulse from a jump (before jump boost or modifier on block)
-   Added `player.block_break_speed` attribute that acts as a multiplier over block breaking speed for players
-   All block positions are now stored as an array of 3 integers instead of a map of `X`, `Y`, and `Z`
-   `FlowerPos` and `HivePos` in Bees have been renamed to `flower_pos` and `hive_pos`
-   `FlowerPos` in Beehives has been renamed to `flower_pos`
-   `BeamTarget` in End Crystals has been renamed to `beam_target`
-   `Leash` in all leashable entities has been renamed to `leash`
-   `PatrolTarget` in patrolling mobs has been renamed to `patrol_target`
-   `ExitPortal` in End Gateways has been renamed to `exit_portal`
-   `WanderTarget` in Wandering Traders has been renamed to `wander_target`

### Tags

#### Block Tags:

-   Added 'minecraft:blocks;;_;;wind;;_;;charge;;_;;explosions' for blocks not impacted by the explosion when hit by Wind Charge.

## Resource Pack Version 26

-   Added font variant filters to font providers

### Font variant filters

-   Every glyph provider can now be enabled or disabled based on certain set of variants
-   Available variants are currently hardcoded and controlled by font options menu
    -   Current variants:
        -   `uniform` - wired to "Force Uniform" button
        -   `jp` - wired to "Japanese Glyph Variants" button
-   Filters are defined in section called `filter`, available for every glyph provider
    -   Keys in that object are variant names (for example `uniform`)
    -   Glyph provider will be included only when value in filter matches actual value of variant in key

## Fixed bugs in 24w06a

-   [MC-72151](https://bugs.mojang.com/browse/MC-72151) Snow Golem's snowballs damage wolves instead of pushing them
-   [MC-193202](https://bugs.mojang.com/browse/MC-193202) Tamed wolf health resets when NBT is loaded (e.g. relog)
-   [MC-259142](https://bugs.mojang.com/browse/MC-259142) Hoppers with barrel facing downwards on top picking up item
-   [MC-261846](https://bugs.mojang.com/browse/MC-261846) Japanese language uses a Chinese font
-   [MC-264684](https://bugs.mojang.com/browse/MC-264684) Too long macro silently fails
-   [MC-267512](https://bugs.mojang.com/browse/MC-267512) Invulnerable ghasts can be killed with reflected fireballs
-   [MC-267917](https://bugs.mojang.com/browse/MC-267917) Baby armadillos don't make an eating sound when feeding them spider eyes
-   [MC-267940](https://bugs.mojang.com/browse/MC-267940) Armadillo's scute drop timer is not saved to data
-   [MC-268065](https://bugs.mojang.com/browse/MC-268065) Armadillos with no AI roll up after being attacked
-   [MC-268091](https://bugs.mojang.com/browse/MC-268091) "Shuniji", "Dragon Fish" and "Axolotl" no longer play underwater
-   [MC-268096](https://bugs.mojang.com/browse/MC-268096) Singleplayer client discards synced biome tags
-   [MC-268179](https://bugs.mojang.com/browse/MC-268179) Horse armor and wolf armor disappear when right-clicking in the air
-   [MC-268189](https://bugs.mojang.com/browse/MC-268189) "block.vault.fall" uses placeholder sounds

---

We are now releasing 24w05b to address a crash and bug introduced in yesterday's snapshot.

Happy mining!

## Technical Changes

-   Potion effect amplifiers are now restricted between 0 and 127

## Fixed bugs in 24w05b

-   [MC-118857](https://bugs.mojang.com/browse/MC-118857) Effect amplifier is read/written as byte from NBT despite being stored as an integer
-   [MC-268168](https://bugs.mojang.com/browse/MC-268168) Chainmail armor texture broken due to armor material renaming
-   [MC-268172](https://bugs.mojang.com/browse/MC-268172) Game crashes when saving an entity's effect above 127

---

Hi everyone! We're back with yet another snapshot for 1.20.5, which includes a collection of technical changes, bug fixes and a new experimental feature for Trial Chambers, the Vault Block!

We're very interested in hearing your feedback on this new feature over at the feedback site: [Let's talk about Vaults!](https://aka.ms/mcvaultsfeedback)

Happy looting!

## Technical Changes

-   The Data Pack version is now 30
-   The Resource Pack version is now 25
-   Added a reserved region file compression id for third-party servers to use for custom compression implementations
-   Added an option to not compress region files
-   Allowed server operators to view dedicated server TPS debug chart

### Region file compression algorithm

-   Added a third value to the dedicated server configuration property `region-file-compression`:
    -   `none` does not compress the data. Consumes significantly more space and requires significant time to read and write, even though CPU is used less. Might make sense together with filesystem level compression

### Reserved compression id for third-party servers

-   Compression id `127` can now be used for custom implementations of region file compression
-   When used, the version id must be followed by a namespaced string representing the custom algorithm used

## Data Pack Version 30

-   Potion effects stored in items or entities will no longer encode their default values
    -   `amplifier`: `0`
    -   `duration`: `0`
    -   `ambient`: `false`
    -   `show_particles`: `true`
-   Added `body_armor_item` and `body_armor_drop_chance` to all entities that currently have `HandItems` and `ArmorItems`, and handle the same way as `HandItems` and `ArmorItems`
-   Handling of Horses `ArmorItem`, Llamas `DecorItem`, and Wolf's `armor` has been changed to use `body_armod_item` and `body_armor_drop_chance` instead
-   In commands, removed `horse.armor` slot argument, and added instead `armor.body` slot argument, applicable now to all mobs
-   Added `vault_connection` particle
-   Added Vault block with a variety of NBT elements which can be configured for custom content
    -   `config`
        -   `loot_table` The loot table that will be ejected upon being unlocked
            -   Default value: `"minecraft:chests/trial_chambers/reward"`
        -   `activation_range` The range any player who hasn't unlocked the Vault must be within for it to open its keyhole
            -   Default value: `4`
        -   `deactivation_range` The range all viable players must be outside of for the Vault to close its keyhole
            -   Default value: `4.5`
        -   `key_item` An itemstack that is required to unlock the Vault
            -   NBT and stack count is used for comparison
            -   Default value: `"minecraft:trial_key"`
        -   `override_loot_table_to_display` An optional loot table which will be used for displaying items inside the cage instead of results from the config's `loot_table`
            -   Default value: No value
    -   `shared_data`
        -   `connected_particles_range` The range players who have not unlocked the Vault must be within before particles will flow from them
            -   Default value: `4.5`

## Resource Pack Version 25

-   The unused attributes array in core shader definitions has been removed
-   The unused `position_color_normal` and `position_tex_lightmap_color` shaders have been removed
-   The `position_tex_color_normal` shader (only used by clouds) has been replaced by `rendertype_clouds`
-   The `IViewRotMat` uniform has been removed, and the `Position` attribute for entities is now in (camera relative) world space
-   Light direction uniforms are no longer premultiplied by the view matrix
-   Added texture and model files for Vault block
-   Changed texture for the Trial Key item
-   Added texture and particle file for `vault_connection` particle

## Experimental Features

-   Added Vault block

### Vault

-   A block that holds locked treasure and loot - find the right key to eject its rewards
    -   Found throughout Trial Chambers, containing the structures' most valuable loot
    -   Vaults in Trial Chambers require a Trial Key to be unlocked
-   Can be unlocked by an unlimited amount of players
    -   After a player has unlocked a Vault, they cannot unlock that Vault again
    -   If a player has not unlocked that Vault before, an orange stream of particles will flow from the player to the Vault when nearby
-   Has a keyhole that will be open or closed depending on the players nearby
    -   If any nearby player has not unlocked that Vault, the keyhole will be open
    -   If all nearby players have unlocked that Vault, the keyhole will be closed
-   Within its cage, it will cycle through and display items which are possible to eject from its loot table
-   The rewards it ejects are randomized from its loot table each time it is unlocked
-   Cannot be crafted or obtained in Survival, and does not drop anything when mined
-   Explosion-resistant and cannot be moved
-   Vaults currently reuse the same loot table that reward chests previously used in the Trial Chambers
    -   This loot table is temporary and will be completely revised as development continues

### Trial Key

-   Updated texture to reflect new Vault visuals

## Fixed bugs in Snapshot 24w05a

-   [MC-225170](https://bugs.mojang.com/browse/MC-225170) Normal matrix scaling broken in some situations
-   [MC-260099](https://bugs.mojang.com/browse/MC-260099) Sniffer's snout shading changes during sniffing
-   [MC-264821](https://bugs.mojang.com/browse/MC-264821) The fog on armor worn by entities occurs too early
-   [MC-267922](https://bugs.mojang.com/browse/MC-267922) Wolf armor loses custom display name and other NBT when equipped

---

Hello again! Here is another snapshot bringing you some Armadillo changes, experimental feature changes, and a bunch of technical changes. We have some server-side performance improvements and improved debug tools along with a new `transfer` command. Enjoy!

## Changes

-   Armadillo now also rolls up when it detects a mob, or a player that has attacked it recently
-   When an Armadillo is in rolled up state, its shell will protect it, and reduce the damage dealt to it, even allowing it to fully resist weak attacks
-   Renamed "Allow cheats" to "Allow commands"

## Technical Changes

-   The Data Pack version is now 29
-   Added an option to use a faster region file compression algorithm on dedicated servers
-   Introduced changes to optimizing worlds
-   Improved server TPS debug chart
-   Reduced time needed to generate explorer maps to buried treasures

### Region file compression algorithm

-   Added a dedicated server configuration property `region-file-compression` with 2 possible values:
    -   `deflate`, the default option. Uses the old algorithm
    -   `lz4` uses LZ4 algorithm, which requires less CPU time to compress and decompress but uses more disk space
-   Changing the compression algorithm will not automatically recompress the world
    -   New or updated chunks will use the newly configured algorithm, but the old ones will stay in the previous format

### World optimizing changes

-   Optimizing singleplayer worlds and running dedicated server with `forceUpgrade` now also upgrades contents of `entities` and `poi` directories of the world
-   New `recreateRegionFiles` dedicated server startup parameter
    -   It will trigger world optimization similar to `forceUpgrade`, but will also rewrite all the chunks independently of whether they have been upgraded
    -   This will create fresh and defragmented region files
    -   Using this parameter after changing the `region-file-compression` server property will recompress all region files in the new format

### Improved the server TPS debug chart

-   As before, it is accessible by pressing `F3 + 2` in a Singleplayer world
-   The bottom dark red section of the chart displays the time spent during the main logic of the server tick. It is equivalent to the value diplayed in the old chart
-   The light brown section displays time spent on running scheduled tasks
-   The purple section displays time spent executing all other code during the tick
-   The top light green (or yellow or red depending on lag) section displays time spent idling, waiting for next tick
-   The `min`, `avg`, `max` aggregate values are based on the sum of the first 3 sections

## Data Pack Version 29

-   Added the `transfer` command

### `transfer` Command

New command that triggers a transfer of a player to another server. Only exists on dedicated servers.

Syntax:

`transfer <hostname> [<port>] [<players>]`

Parameters:

-   `hostname`: String describing the hostname of the server to connect to
-   `port`: Integer denoting the port number of the server to connect to - if omitted, 25565 is used
-   `players`: The players to transfer - if omitted, `@s` is used

## Experimental Features

### Breeze

-   Breeze is now aggressive toward Iron Golems in addition to players
-   Breeze no longer retaliates against attacks from the following mobs: Skeletons, Strays, Zombies, Husks, Spiders, Cave Spiders, Slimes
-   The above mobs will not retaliate when hurt by the Breeze's Wind Charge Projectile

### Copper Grates

-   Stonecutting Copper Blocks into Copper Grates outputs 4 Copper Grates

## Fixed bugs in Snapshot 24w04a

-   [MC-232489](https://bugs.mojang.com/browse/MC-232489) Retrieving a plant from a flower pot ignores inventory contents
-   [MC-266449](https://bugs.mojang.com/browse/MC-266449) Breeze doesn't attack or retaliate against mob on sight
-   [MC-266707](https://bugs.mojang.com/browse/MC-266707) Trial spawners ignore custom;;_;;spawn;;_;;rules
-   [MC-267925](https://bugs.mojang.com/browse/MC-267925) Retrieving an item from a flower pot while holding something causes the item to end up in your off hand
-   [MC-267937](https://bugs.mojang.com/browse/MC-267937) Shooting a breeze with a piercing crossbow makes the game crash
-   [MC-267938](https://bugs.mojang.com/browse/MC-267938) The world loading percentage value can get covered by the spawn chunk loading animation when the "spawnChunkRadius" gamerule is set to large values
-   [MC-267941](https://bugs.mojang.com/browse/MC-267941) The end portal kills mobs at spawnChunkRadius 0
-   [MC-267953](https://bugs.mojang.com/browse/MC-267953) No element is focused when opening the realms world backups menu using keyboard navigation

---

We are releasing Snapshot 24w03b to fix a crash, along with some bug fixes and minor changes.

Happy Mining!

## Experimental Features

### Breeze

-   Updated the model, texture, and animation of the Wind Charge projectile to give it a more dynamic look and feel

## Fixed bugs in Snapshot 24w03b

-   [MC-266032](https://bugs.mojang.com/browse/MC-266032) Attempting to copy a "Copy of a copy" book in a Crafter behaves incorrectly
-   [MC-266577](https://bugs.mojang.com/browse/MC-266577) Some trial spawners in trial chambers spawn mobs without persistence
-   [MC-267918](https://bugs.mojang.com/browse/MC-267918) The game crashes when opening the configure realms menu
-   [MC-267927](https://bugs.mojang.com/browse/MC-267927) The hitboxes of magma cubes are too large
-   [MC-267935](https://bugs.mojang.com/browse/MC-267935) Items on top of soul sand or mud will be rendered black

---

New year, new Snapshot - we're now releasing the third Snapshot of Minecraft 1.20.5. This time around, we're bringing some updates to the Armadillo, the Breeze, as well as accessibility improvements.

In addition to a big bundle of bug fixes, we're bringing some changes to how spawn chunks are handled.

The spawn chunks are an area of the Overworld located at the world spawn which are always loaded in memory. These are useful for some players but use more of your computer’s resources and make the game load and run more slowly. (You can read more about spawn chunks at the [community wiki](https://minecraft.wiki/w/Spawn_chunk)!)

In this snapshot we made the size of the spawn chunks configurable by adding a new gamerule: `spawnChunkRadius`. The new default setting is 2 (which creates a 48x48 block area). This is 98% smaller than the previous area and will result in a noticeable performance improvement for most players.

If you would like to keep your spawn chunks working like they did before, you can use the game rule to change the spawn chunk radius value to 10. This will make your spawn chunks work the same as they did before, but you will miss out on the performance gains.

We're interested in hearing your feedback on this change and how the new default setting affects you.

[Let's talk about spawn chunks!](https://aka.ms/spawnchunksfeedback)

## New Features

### Armadillo

Armadillo visual update! We gathered feedback from the first Armadillo snapshot, and the next step in the look of the Armadillo, the Armadillo Scutes and the Wolf Armor are now here.

-   Armadillos now also spawn in Badlands

#### Armadillo Rolling Up Behavior

-   Spiders and Cave Spiders will run away from Armadillos not in a rolled up state

## Changes

-   Adjusted the texture of the Wolf Collar layer to be more consistent with the new Wolf Armor

### Accessibility

-   The default focus is now always set when entering or exiting any menu while navigating using tab or arrow keys

## Technical Changes

-   The Data Pack version is now 28
-   The Resource Pack version is now 24
-   Custom Villager trades can be configured to accept items that have different tags from the expected item by adding `ignoreTags: true` in the trade's NBT
-   When entities leave or enter the end the area they arrive in will now stay loaded for 15 seconds, matching the behavior of nether portals
-   Added transfer packets
-   Added cookie packets
-   Decreased the default size of the spawn chunks and made the value configurable

### Transfer Packets

-   Custom servers can now request that clients connect to another server with a new packet
-   When a client is transferred it will connect to the target server with a new transfer intent (id 3)
-   By default servers will not accept incoming transfers and will disconnect the client
-   This can be changed by setting the `accepts-transfers` property to `true` in the `server.properties` file
-   Resource packs are maintained across transfers
-   In the case of a transfer custom servers can skip authentication with a new flag

### Cookie Packets

-   Cookie packets allow custom servers to request and store data on a client
    -   Each cookie may be up to 5 KiB in size
    -   Cookies may be requested during login, configuration and play phases — but only stored during the configuration and play phases
-   Cookies are persisted across server transfers but are not persisted when the player disconnects
    -   This allows servers to pass along information such as authentication or custom game data to the new server

### Spawn Chunk Changes

-   The size of the spawn chunks changed from radius 10 (19x19 entity ticking chunks) to radius 2 (3x3 entity ticking chunks)
    -   This was done to reduce memory usage, loading times and CPU usage
    -   We opted to not fully remove spawn chunks to allow players who currently utilize this functionality to continue to do so
-   Added a new gamerule `spawnChunkRadius` to set the size of the spawn chunks
    -   Possible values are 0 to 32, where 0 completely disables the spawn chunks and 10 is equivalent to the functionality before this change
    -   Default value is 2, equivalent to 3x3 entity ticking chunks

## Data Pack Version 28

-   The `minecraft:sweeping` enchantment has been renamed to `minecraft:sweeping_edge`
-   Added Advancement Criteria trigger `default_block_use` which triggers due to the default interaction of a block by a player, such as opening a door
-   Added Advancement Criteria trigger `any_block_use` which triggers due to any type of interaction with a block by a player, such as using an item on the block or its default usage

### Tags

#### Item Tags

New item tags controlling what enchantments can be added to what gear:

-   `minecraft:enchantable/foot_armor`
-   `minecraft:enchantable/leg_armor`
-   `minecraft:enchantable/chest_armor`
-   `minecraft:enchantable/head_armor`
-   `minecraft:enchantable/armor`
-   `minecraft:enchantable/weapon`
-   `minecraft:enchantable/sword`
-   `minecraft:enchantable/mining`
-   `minecraft:enchantable/mining_loot`
-   `minecraft:enchantable/fishing`
-   `minecraft:enchantable/trident`
-   `minecraft:enchantable/durability`
-   `minecraft:enchantable/bow`
-   `minecraft:enchantable/equippable`
-   `minecraft:enchantable/crossbow`
-   `minecraft:enchantable/vanishing`

#### Entity Type Tags:

-   Added `minecraft:ignores_poison_and_regen` for entities that cannot be affected by Poison and Regeneration effects
-   Added `minecraft:illager_friends` for entities that Illagers will consider allies (unless on a different team)
-   Added `minecraft:inverted_healing_and_harm` for entities that have inverted meanings of the Healing and Harm effects
-   Added `minecraft:not_scary_for_pufferfish` for entities that will not cause Pufferfish to puff
-   Added `minecraft:sensitive_to_bane_of_arthropods` for entities sensitive to Bane of Arthropods
-   Added `minecraft:sensitive_to_impaling` for entities sensitive to Impaling
-   Added `minecraft:wither_friends` for entities that the Wither will not target and which cannot harm the Wither

## Resource Pack 24

-   The `ttf` font provider transforms have been adjusted to have more reasonable defaults
    -   `shift` is no longer applied double, and now directly represents a number of pixels in the game UI
    -   The font EM square is fitted to `size` pixels in the game UI, instead of between the font ascender and font descender
    -   The font baseline is positioned consistently with the default font (7 pixels below line top)
    -   This means that generally, any font with a `size` of 9 and no `shift` should look correct by default

## Experimental Features

### Breeze

-   Breeze now deflects all projectiles
-   Deflected projectiles now deflect in the direction of the shooter

### Trade Rebalance

-   In the Trade Rebalance Experiment, Villagers who buy armor now ignore durability and can buy damaged armor

## Fixed bugs in Snapshot 24w03a

-   [MC-153160](https://bugs.mojang.com/browse/MC-153160) Villagers don't auto-fill items if NBT data doesn't match
-   [MC-155857](https://bugs.mojang.com/browse/MC-155857) Team command doesn't affect illagers and witches' AI
-   [MC-171981](https://bugs.mojang.com/browse/MC-171981) Map of fuel times is created anew every time an item is placed in a furnace, instead of being cached
-   [MC-187372](https://bugs.mojang.com/browse/MC-187372) There is no space between fps limit/vsync and graphics level in the debug screen
-   [MC-260889](https://bugs.mojang.com/browse/MC-260889) Players can use water buckets and lava buckets on blocks that are out of reach
-   [MC-261596](https://bugs.mojang.com/browse/MC-261596) Crafting Table search keyboard shortcut not working
-   [MC-265273](https://bugs.mojang.com/browse/MC-265273) The tab list in create world screen does not indicate it's tab-focused by highlight or rendering borders
-   [MC-265520](https://bugs.mojang.com/browse/MC-265520) Switching connection protocols sometimes produces errors
-   [MC-265749](https://bugs.mojang.com/browse/MC-265749) Tooltips flash when the values of buttons or fields are changed
-   [MC-266078](https://bugs.mojang.com/browse/MC-266078) The output of Crafting and Stonecutting Copper Grates is inconsistent with each other
-   [MC-267044](https://bugs.mojang.com/browse/MC-267044) Tick status strings contain inconsistent word usage
-   [MC-267045](https://bugs.mojang.com/browse/MC-267045) Some tick strings are missing articles and are unclear
-   [MC-267086](https://bugs.mojang.com/browse/MC-267086) Compass does not indicate spawn point correctly when game is frozen with /tick
-   [MC-267104](https://bugs.mojang.com/browse/MC-267104) The bottom face textures of breezes' rods are incorrect and don't match with surrounding colors
-   [MC-267149](https://bugs.mojang.com/browse/MC-267149) Crafter top face has an inverted UV texture map
-   [MC-267366](https://bugs.mojang.com/browse/MC-267366) You cannot use Spider Eyes on Baby Armadillos to age them up
-   [MC-267367](https://bugs.mojang.com/browse/MC-267367) Wolf armor flashes red when the wolf takes damage
-   [MC-267371](https://bugs.mojang.com/browse/MC-267371) Shulkers hitbox doesn't scale with generic.scale
-   [MC-267377](https://bugs.mojang.com/browse/MC-267377) Applying bone meal to mangrove leaves no longer produces any particles
-   [MC-267378](https://bugs.mojang.com/browse/MC-267378) Armor stand interaction points do not change with scale
-   [MC-267379](https://bugs.mojang.com/browse/MC-267379) Applying bone meal to rooted dirt no longer produces any particles
-   [MC-267380](https://bugs.mojang.com/browse/MC-267380) Cannot open inventories beyond default block reach
-   [MC-267383](https://bugs.mojang.com/browse/MC-267383) Can't place water and lava with extended attribute "block;;_;;interaction;;_;;range"
-   [MC-267384](https://bugs.mojang.com/browse/MC-267384) Unused duplicate wolf armor sound events
-   [MC-267385](https://bugs.mojang.com/browse/MC-267385) Attribute entity;;_;;interaction;;_;;range is capped by block;;_;;interaction;;_;;range
-   [MC-267388](https://bugs.mojang.com/browse/MC-267388) The subtitle for brushing armadillos is inconsistent with other item usage subtitles
-   [MC-267389](https://bugs.mojang.com/browse/MC-267389) Armadillos don't always stand in close proximity to one another when breeding
-   [MC-267392](https://bugs.mojang.com/browse/MC-267392) Armadillos are scared of players in spectator mode
-   [MC-267395](https://bugs.mojang.com/browse/MC-267395) Armadillos panic when receiving fall damage
-   [MC-267397](https://bugs.mojang.com/browse/MC-267397) Armadillos and baby armadillos stand a bit too far away from players that are tempting them
-   [MC-267398](https://bugs.mojang.com/browse/MC-267398) Armadillos don't play a roll out sound after finishing hiding
-   [MC-267402](https://bugs.mojang.com/browse/MC-267402) Head of armadillo in boat is twitching when turning the boat
-   [MC-267404](https://bugs.mojang.com/browse/MC-267404) Scared armadillo pushed into boat is scared of player riding the boat
-   [MC-267405](https://bugs.mojang.com/browse/MC-267405) Scared armadillo can move when having a passenger
-   [MC-267406](https://bugs.mojang.com/browse/MC-267406) Armadillos with their "Silent" NBT tag set to "1b" still play their landing and rolling up sounds
-   [MC-267413](https://bugs.mojang.com/browse/MC-267413) Feeding an armadillo a spider eye doesn't cancel eating it
-   [MC-267416](https://bugs.mojang.com/browse/MC-267416) Particles created from Slimes do not account for the scale attribute
-   [MC-267417](https://bugs.mojang.com/browse/MC-267417) Suffocation overlay shown when on solid almost-full blocks at scale < .06
-   [MC-267418](https://bugs.mojang.com/browse/MC-267418) Warden sonic boom attack doesn't account for the scale attribute
-   [MC-267420](https://bugs.mojang.com/browse/MC-267420) Boat placement ignores custom "block;;_;;interaction;;_;;range" attribute
-   [MC-267422](https://bugs.mojang.com/browse/MC-267422) Attribute entity;;_;;interaction;;_;;range is classified as 'generic', but has no effect on mobs
-   [MC-267427](https://bugs.mojang.com/browse/MC-267427) Rendering offset of sleeping entities does not account for scale attribute
-   [MC-267428](https://bugs.mojang.com/browse/MC-267428) Phantom wing particles do not account for scale attribute
-   [MC-267434](https://bugs.mojang.com/browse/MC-267434) Upside-down mobs with big scale attribute are displayed above hitbox
-   [MC-267435](https://bugs.mojang.com/browse/MC-267435) Baby armadillos do not follow parents consistently or closely
-   [MC-267454](https://bugs.mojang.com/browse/MC-267454) Baby striders are visually the same size as normal striders
-   [MC-267456](https://bugs.mojang.com/browse/MC-267456) Changes to item;;_;;used;;_;;on;;_;;block advancement criteria breaks previous functionality
-   [MC-267465](https://bugs.mojang.com/browse/MC-267465) 1.20.3 upload error: "Cannot invoke "ctt.c()" because "this.b" is null"
-   [MC-267470](https://bugs.mojang.com/browse/MC-267470) The regeneration effect granted from beacons is no longer applied to players
-   [MC-267479](https://bugs.mojang.com/browse/MC-267479) Inventory view model scales with generic.scale
-   [MC-267497](https://bugs.mojang.com/browse/MC-267497) Baby armadillos do not sound high pitched when curling up
-   [MC-267538](https://bugs.mojang.com/browse/MC-267538) Putting placeable blocks inside decorated pots also places them
-   [MC-267565](https://bugs.mojang.com/browse/MC-267565) Low scale attribute lets you breathe underwater
-   [MC-267588](https://bugs.mojang.com/browse/MC-267588) The hand animation is no longer played when putting items inside decorated pots
-   [MC-267706](https://bugs.mojang.com/browse/MC-267706) Evoker and illusioner summon particles do not account for scale attribute
-   [MC-267707](https://bugs.mojang.com/browse/MC-267707) Wither particles do not account for scale attribute
-   [MC-267708](https://bugs.mojang.com/browse/MC-267708) The wither's skull projectile attacks do not account for the scale attribute
-   [MC-267725](https://bugs.mojang.com/browse/MC-267725) Players' experience levels no longer render above the health and hunger bars
-   [MC-267726](https://bugs.mojang.com/browse/MC-267726) Applying bone meal to blocks underwater no longer produces any particles

---

Coming in hot, here is Snapshot 23w51b, fixing a crash in 23w51a.

## Fixed bugs in 23w51b

-   Fixed a crash that would occur when the nametag of a player was visible during sleeping, swimming or dying

---

