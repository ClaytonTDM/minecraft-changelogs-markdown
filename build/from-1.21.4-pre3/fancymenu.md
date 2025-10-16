# 1.21.4 Pre-Release 3

We are now releasing a third Pre-Release for Minecraft 1.21.4 to fix a crash and a few bugs. Watch your step before jumping!

## Fixed bugs in 1.21.4 Pre-Release 3

-   [MC-277977](https://bugs.mojang.com/browse/MC-277977) Teleporting large distances whilst gliding prevents the world from loading and player model glitchiness
-   [MC-278444](https://bugs.mojang.com/browse/MC-278444) Waterlogged resin clumps do not drop when their supporting block is broken/moved
-   [MC-278518](https://bugs.mojang.com/browse/MC-278518) Player takes damage from jumping down from one block

---

# 1.21.4 Pre-Release 2

We are starting off this week with the second 1.21.4 Pre-Release, including even more bug fixes!

Happy mining!

## Technical Changes

-   The Data Pack version is now 61

## Data Pack Version 61

### Furnace, Smoker and Blast Furnace Data

-   Renamed `CookTime` to `cooking_time_spent`
-   Renamed `CookTimeTotal` to `cooking_total_time`
-   Renamed `BurnTime` to `lit_time_remaining`
-   Added field `lit_total_time` representing the total time the furnace should be lit

## Fixed bugs in 1.21.4 Pre-Release 2

-   [MC-10025](https://bugs.mojang.com/browse/MC-10025) Burn time indicator of a furnace not working correctly after reloading the world
-   [MC-197857](https://bugs.mojang.com/browse/MC-197857) Villagers trying to claim claimed beds
-   [MC-275952](https://bugs.mojang.com/browse/MC-275952) Riding a minecart above the water with Frost Walker boots on will also give the Frost Walker effect
-   [MC-277169](https://bugs.mojang.com/browse/MC-277169) Creaking moves while a player is looking at it while moving a certain way and looking through pale moss
-   [MC-278256](https://bugs.mojang.com/browse/MC-278256) Horses jumping multiple times in a row take fall damage
-   [MC-278282](https://bugs.mojang.com/browse/MC-278282) "Tried to load a DUMMY block entity"/"Tried to load a block entity" errors at specific coordinates
-   [MC-278370](https://bugs.mojang.com/browse/MC-278370) Winter drop feature flag is not added to the removed features list
-   [MC-278430](https://bugs.mojang.com/browse/MC-278430) Trim materials item tag is not deterministic in data generation
-   [MC-278497](https://bugs.mojang.com/browse/MC-278497) Using items while sneaking slows down the player way less than in previous versions

---

# Minecraft 1.21.4 Pre-Release 1

The first pre-release of Minecraft 1.21.4 is now available. Today's update and for the remainder of the 1.21.4 cycle, you will mostly see bug fixes and tweaks. In addition to that, pre-releases don't follow the regular snapshot cadence of releasing only on Wednesdays, so keep an eye out for the next pre-release.

As always, a big thank you to the community for your feedback, bugs reported, and awesome ideas throughout the snapshot series. Let the pre-releases commence!

## Technical Changes

-   The Resource Pack version is now 46
-   Similarly to block items, Spawn Eggs for entities that could execute operator-only commands now have a warning in tooltip

## Resource Pack Version 46

-   Added a way of suppressing first-person hand animation on item change for specific models
-   Unifont has been updated to 16.0.01

### Item models

-   A new field has been added to the client-side item info format (i.e. files in `/assets/*/items/*.json`)
    -   `hand_animation_on_swap` - boolean field describing if down-and-up animation should be played in first-person view when item stack is changed (either type, count or components), default: `true`
        -   only value from new item is taken into account
        -   does not control "pop" animation in GUI when item is picked or changes count

**`minecraft:model` item model type**

**Added `minecraft:team` tint source type**

-   Returns team color of context entity, if any
-   Fields:
    -   `default` - RGB value to return when there is no context entity, entity is not in a team or team has no color

**Changed `minecraft:head` special model type**

-   Added field `animation` - float controlling head animation (like Piglin ears or Ender Dragon jaw), default: `0.0`

**Added `minecraft:view_entity` boolean property**

-   When not spectating, returns `true` if context entity is the local player entity, i.e. one controlled by client
-   When spectating, returns `true` if context entity is the spectated entity
-   If context entity is not present, will return `false`
-   No fields

**Renamed property `minecraft:holder_type` to `minecraft:context_entity_type`**

**Developer's Note**: _Context entities were initially used only for compasses and clocks, which means that type is available only in rendering contexts where those items would show correct reading (see MC-186797 and related bugs). The name change has been made to better reflect that._

**Added `minecraft:context_dimension` property**

-   Returns the ID of the dimension in context, if any
-   No fields
-   Values: namespaced dimension ID (like `minecraft:overworld`)

**Changed `minecraft:time` numeric property**

-   Removed field `natural_only`
-   Added field `source` - time source, possible values:
    -   `daytime` - time of day
    -   `moon_phase` - moon phase
    -   `random` - random value

**Changed `minecraft:compass` numeric property**

-   Added value `none` to field `target` which always returns an invalid target

**Added `minecraft:empty` item model type**

-   Does not render anything
-   No fields

## Fixed bugs in 1.21.4 Pre-Release 1

-   [MC-128225](https://bugs.mojang.com/browse/MC-128225) '/data remove' can't remove the NBT "CustomName"
-   [MC-138100](https://bugs.mojang.com/browse/MC-138100) /data remove doesn't work for the Jukebox's RecordItem tag
-   [MC-179815](https://bugs.mojang.com/browse/MC-179815) Data command doesn't remove leash from a mob
-   [MC-207605](https://bugs.mojang.com/browse/MC-207605) /data remove entity ;;[;;tamed wolf;;];; Owner does not remove ownership of the wolf
-   [MC-265788](https://bugs.mojang.com/browse/MC-265788) The "Start free Snapshot Realm" element can be selected or remain selected causing its tooltip to erroneously be visible when other interfaces are open
-   [MC-278134](https://bugs.mojang.com/browse/MC-278134) The TAB key cannot be used to select messages to report after clicking the "X message(s) hidden" element
-   [MC-278193](https://bugs.mojang.com/browse/MC-278193) Baby piglins can't decide between crossbows and golden items
-   [MC-278257](https://bugs.mojang.com/browse/MC-278257) Oxygen bar animation can be interrupted by applying water breathing
-   [MC-278290](https://bugs.mojang.com/browse/MC-278290) Using items while swimming or walking underwater doesn't slow the player down
-   [MC-278300](https://bugs.mojang.com/browse/MC-278300) Creakings struck by lightning show visual fire
-   [MC-278302](https://bugs.mojang.com/browse/MC-278302) Bundle always takes out first item and ignores selected item
-   [MC-278311](https://bugs.mojang.com/browse/MC-278311) Respawned creakings from creaking hearts don't persist when the world is reloaded
-   [MC-278312](https://bugs.mojang.com/browse/MC-278312) Creakings spawned from a creaking heart can be name-tagged once again
-   [MC-278387](https://bugs.mojang.com/browse/MC-278387) Creaking respawns when going to the nether and back
-   [MC-278390](https://bugs.mojang.com/browse/MC-278390) Opening shulkers no longer trigger tripwire or pressure plates

---

# Minecraft Snapshot 24w46a

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

**`minecraft:special` item model type**

**Changed `minecraft:head` special model type**

-   Added field `texture` - optional namespaced ID for texture, without `textures/entity/` prefix and `.png` suffix
    -   If absent, default texture will be used, depending on `kind` field
    -   Additionally, if present, `minecraft:profile` component is ignored

**Added `minecraft:standing_sign` special model type**

-   Renders a standing sign
-   Fields:
    -   `wood_type` - one of `oak`, `spruce`, `birch`, `acacia`, `cherry`, `jungle`, `dark_oak`, `pale_oak`, `mangrove`, `bamboo`, `crimson`, `warped`
    -   `texture` - optional namespaced ID for texture, without `textures/entity/signs/` prefix and `.png` suffix
        -   if not present, it will be derived from `wood_type`

**Added `minecraft:hanging_sign` special model type**

-   Renders a hanging sign
-   Fields:
    -   `wood_type` - one of `oak`, `spruce`, `birch`, `acacia`, `cherry`, `jungle`, `dark_oak`, `pale_oak`, `mangrove`, `bamboo`, `crimson`, `warped`
    -   `texture` - optional namespaced ID for texture, without `textures/entity/signs/hanging/` prefix and `.png` suffix
        -   if not present, it will be derived from `wood_type`

**`minecraft:condition` item model type**

-   Removed `minecraft:xmas` boolean property, replaced by `minecraft:local_time`
-   Removed `minecraft:shift_down` boolean property, replaced by `minecraft:extended_view`

**Changed `minecraft:has_component` boolean property**

-   Added field: `ignore_default` - if default component value should be handled as "no component", default: `false`

**Added `minecraft:extended_view` boolean property**

-   Returns true if player has requested extended details by holding shift key down
    -   Note: not a keybind, can't be rebound
-   Only works when item is displayed in UI
-   No fields

**Added `minecraft:keybind_down` boolean property**

-   Returns true if keybind is currently active
-   Fields:
    -   `keybind` - keybind ID, same as value in `keybind` text component
        -   Examples: `key.use`, `key.left`

**Added `minecraft:local_time` property**

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

**Added `minecraft:holder_type` property**

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
-   [MC-277140](https://bugs.mojang.com/browse/MC-277140) The statistics screen does not visually differentiate the creaking and creaking;;_;;transient entities
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

# Minecraft Snapshot 24w45a

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

**Preferred weapons**

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

**Block Tags**

-   Added `#bee_attractive` - denotes all blocks that Bees may pollinate
-   Removed `#tall_flowers`

**Item Tags**

-   Removed `#flowers` and `#tall_flowers`
-   Added `skeleton_preferred_weapon`, `piglin_preferred_weapon`, `pillager_preferred_weapon` and `drowned_preferred_weapon` tags for specifying preferred weapons types for these mobs when picking up items

### Components

**`minecraft:custom_model_data`**

-   Component has now more fields to accomodate new uses by various model property getters
-   Fields:
    -   `floats` - list of floats
    -   `flags` - list of booleans
    -   `strings` - list of strings
    -   `colors` - list of RGB color values

### Item Modifiers

**`minecraft:set_custom_model_data`**

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

**`minecraft:model` item model type**

-   Renders a plain model from `models` directory
-   Fields:
    -   `model`: namespaced ID of model in `models` (like `minecraft:block/yellow_glazed_terracotta`)
    -   `tints`: a list of tint sources to apply to elements of rendered model (first entry applies to `tintindex` 0, second one - 1, etc.)
        -   Format:
            -   `type`: type of tint source (see below)
            -   `<type-specific>` - additional fields depending on tint source type

**`minecraft:constant` tint source type**

-   Returns a constant RGB color
-   Fields:
    -   `value` - A packed integer RGB value (e.g. `-1`) or an array of RGB values (e.g. `[ 1, 1, 1 ]`)

**`minecraft:dye` tint source type**

-   Returns value from `minecraft:dyed_color` component or default if not present
-   Fields:
    -   `default` - RGB value

**`minecraft:grass` tint source type**

-   Returns grass color at specific climate parameters, based on `textures/colormap/grass.png`
-   Same colors as ones selected by `downfall` and `temperature` in biome configuration
-   Fields:
    -   `temperature` - float in `0..1` (inclusive) range
    -   `downfall` - float in `0..1` (inclusive) range

**`minecraft:firework` tint source type**

-   Returns average of colors from `minecraft:firework_explosion` component or default color if there are none
-   Fields:
    -   `default`: RGB value

**`minecraft:potion` tint source type**

-   Returns color from `minecraft:potion_contents` component:
    -   if component is present:
        -   custom color, if there is one present in component
        -   default color, if effect list is empty
        -   average of effect colors, otherwise
    -   default color, otherwise
-   Fields:
    -   `default`: RGB value

**`minecraft:map_color` tint source type**

-   Return value from `minecraft:map_color` component or default color if component is not present
-   Fields:
    -   `default`: RGB value

**`minecraft:custom_model_data` tint source type**

-   Returns value from `colors` list in `minecraft:custom_model_data` component
-   Fields:
    -   `index` - index for field in `colors`, default: 0

**`minecraft:special` item model type**

-   Renders a special (not data-driven) model
-   Fields:
    -   `model`: special model instance
        -   Format:
            -   `type` - type of special model (see below)
            -   `<type-specific>` - additional fields depending on tint source type
    -   `base`: namespaced ID of model in `models`, providing transformations, particle texture and GUI light

**`minecraft:bed` special model type**

-   Renders a whole bed
-   Fields:
    -   `texture` - namespaced ID for texture, without `textures/entity/bed/` prefix and `.png` suffix

**`minecraft:banner` special model type**

-   Renders a banner with patterns from `minecraft:banner_patterns` component
-   Fields:
    -   `color` - color of banner base, one of 16 predefined colors

**`minecraft:conduit` special model type**

-   Renders conduit
-   No fields

**`minecraft:chest` special model type**

-   Renders a single chest
-   Fields:
    -   `texture` - namespaced ID for texture, without `textures/entity/chest/` prefix and `.png` suffix
    -   `openness` - float, `0.0` (default) - fully closed, `1.0` - fully open

**`minecraft:head` special model type**

-   Renders a head
-   Uses profile from `minecraft:profile` component when applicable
-   Fields:
    -   `kind` - one of `skeleton`, `wither_skeleton`, `player`, `zombie`, `creeper`, `piglin`, `dragon`

**`minecraft:shulker_box` special model type**

-   Renders a shulker box
-   Fields:
    -   `texture` - namespaced ID for texture, without `textures/entity/shulker/` prefix and `.png` suffix
    -   `openness` - float, `0.0` (default) - fully closed, `1.0` - fully open
    -   `orientation` - orientation for rendering, default: `up`

**`minecraft:shield` special model type**

-   Renders a shield
-   Uses patterns from `minecraft:banner_patterns` component and color from `minecraft:base_color` component
-   No fields

**`minecraft:trident` special model type**

-   Renders a trident
-   No fields

**`minecraft:decorated_pot` special model type**

-   Renders a decorated pot
-   Uses values from `minecraft:pot_decorations` component
-   No fields

**`minecraft:composite` item model type**

-   Renders multiple sub-models
-   All models are rendered in the same space
-   Fields:
    -   `models`: a list of item models to render

**`minecraft:condition` item model type**

-   Renders an item model depending on boolean property
-   Fields:
    -   `property`: type of property (see below)
    -   `<property-specific>` - additional fields depending on property type, added inline
    -   `on_true` - item model to render when property is true
    -   `on_false` - item model to render when property is false

**`minecraft:using_item` boolean property**

-   Returns true if player is currently using this item
-   No fields

**`minecraft:broken` boolean property**

-   Returns true if the item is damageable and has only one use remaining before breaking
-   No fields

**`minecraft:damaged` boolean property**

-   Returns true if the item is damageable and has been used at least once
-   No fields

**`minecraft:has_component` boolean property**

-   Returns true if the given component is present on the item
-   Fields:
    -   `component` - component type

**`minecraft:fishing_rod/cast` boolean property**

-   Returns true if there is a fishing bobber attached to currently used fishing rod
-   No fields

**`minecraft:bundle/has_selected_item` boolean property**

-   Returns true if bundle is "open", i.e. it has selected item visible in GUI
-   No fields

**`minecraft:xmas` boolean property**

-   Returns true if current date is between December 24th and December 26th (inclusive)
-   No fields

**`minecraft:selected` boolean property**

-   Returns true if item is selected on a hotbar
-   No fields

**`minecraft:carried` boolean property**

-   Returns true if item is carried between slots in GUI
-   No fields

**`minecraft:shift_down` boolean property**

-   Returns true if player currently holding shift key down
-   No fields

**`minecraft:custom_model_data` boolean property**

-   Returns value from `flags` list in `minecraft:custom_model_data` component
-   Fields:
    -   `index` - index for field in `flags`, default: 0

**`minecraft:select` item model type**

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

**`minecraft:main_hand` property**

-   Returns main hand of holding player
-   No fields
-   Values: `left`, `right`

**`minecraft:charge_type` property**

-   Returns charge type stored in `minecraft:charged_projectiles` component
-   No fields
-   Values:
    -   `none` - if there are no projectiles or component is not present
    -   `rocket` - if there is at least one firework rocket
    -   `arrow` - any other case

**`minecraft:trim_material` property**

-   Returns value of `material` field from `minecraft:trim` component, if present
-   No fields
-   Values: namespaced ID

**`minecraft:block_state` property**

-   Returns value for some property from `minecraft:block_state` component
-   Fields:
    -   `block_state_property` - string key to select from component
-   Values: any string

**`minecraft:display_context` property**

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

**`minecraft:custom_model_data` property**

-   Returns value from `strings` list in `minecraft:custom_model_data` component
-   Fields:
    -   `index` - index for field in `strings`, default: 0
-   Values: any string

**`minecraft:range_dispatch` item model type**

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

**`minecraft:custom_model_data` numeric property**

-   Returns value from `floats` list in `minecraft:custom_model_data` component
-   Fields:
    -   `index` - index for field in `floats`, default: 0

**`minecraft:bundle/fullness` numeric property**

-   Returns weight of `bundle_contents` component or 0 if not present
-   No fields

**`minecraft:damage` numeric property**

-   Returns value for `damage` component
-   Fields:
    -   `normalize`: boolean, default: `true`
        -   if true, returns value of damage divided by `max_damage` component, clamped to `0..1`
        -   if false, returns value of damage, clamped to `0..max_damage`

**`minecraft:count` numeric property**

-   Returns stack size
-   Fields:
    -   `normalize`: boolean, default: `true`
        -   if true, returns count divided by `max_stack_size` component, clamped to `0..1`
        -   if false, returns count clamped to `0..max_stack_size`

**`minecraft:cooldown` numeric property**

-   Returns remaining cooldown for item, scaled to `0..1`
-   No fields

**`minecraft:time` numeric property**

-   Returns value of day time (used for clock), scaled to `0..1`
-   Fields:
    -   `wobble` - if true, value will oscillate for some time around target before settling, default: `true`
    -   `natural_only` - if true, value will be random in dimensions with `natural=false`, default: `true`

**`minecraft:compass` numeric property**

-   Returns angle, scaled to `0..1` in x-z plane between holder position and target
-   If target is not valid (not present, in other dimension or to close to holder position) random value will be returned
-   Fields:
    -   `target` - one of:
        -   `spawn` - points at world spawn
        -   `lodestone` - points at location stored in `lodestone_tracker` component
        -   `recovery` - points at last player death location
    -   `wobble` - if true, value will oscillate for some time around target before settling, default: `true`

**`crossbow/pull` numeric property**

-   Returns crossbow-specific use time
-   No fields

**`use_duration` numeric property**

-   Returns item use ticks
-   Fields:
    -   `remaining` - if `true`, returned value will be remaining use ticks, if `false` - ticks so far, default: `false`

**`use_cycle` numeric property**

-   Returns remaining use ticks modulo `period`
-   Fields:
    -   `period` - positive float, default `1.0`

**`minecraft:bundle/selected_item` item model type**

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
-   [MC-270136](https://bugs.mojang.com/browse/MC-270136) Thrown projectiles with custom;;_;;model;;_;;data do not maintain proper particles when breaking
-   [MC-271786](https://bugs.mojang.com/browse/MC-271786) Empty block states in noise;;_;;provider does not cause validation to fail, causing crash
-   [MC-272994](https://bugs.mojang.com/browse/MC-272994) Allays assigned to a player can be set on fire with sweeping and fire aspect
-   [MC-273450](https://bugs.mojang.com/browse/MC-273450) Mobs with CanPickUpLoot:1b behave inconsistently with the mace / trident
-   [MC-273522](https://bugs.mojang.com/browse/MC-273522) Mobs with CanPickUpLoot no longer pick up enchanted items after picking up an unenchanted item
-   [MC-273635](https://bugs.mojang.com/browse/MC-273635) Trial spawners forget their designated mob when placed by player out of creative mode, assigned by spawn eggs
-   [MC-274268](https://bugs.mojang.com/browse/MC-274268) Trial Spawner keeps flashing after cooldown ends
-   [MC-275011](https://bugs.mojang.com/browse/MC-275011) Instant mine does not work when standing inside of cobwebs
-   [MC-275215](https://bugs.mojang.com/browse/MC-275215) Experiments warning goes off the screen if viewed at low window size
-   [MC-276110](https://bugs.mojang.com/browse/MC-276110) honey;;_;;level model predicate range is 1 for level 5 and 0 for levels 1-4
-   [MC-276115](https://bugs.mojang.com/browse/MC-276115) New Bee Nest and Beehive item models don't use the block parent
-   [MC-276412](https://bugs.mojang.com/browse/MC-276412) Custom item models set to a shield and various other items all create invisible items
-   [MC-276654](https://bugs.mojang.com/browse/MC-276654) item;;_;;model item component breaks on trident
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
-   [MC-277941](https://bugs.mojang.com/browse/MC-277941) resin;;_;;clump is not mirrored correctly from behind
-   [MC-277945](https://bugs.mojang.com/browse/MC-277945) Incorrect verb form in "Elytra swooshes" subtitle
-   [MC-277948](https://bugs.mojang.com/browse/MC-277948) Suspicious stew gives different durations of Blindness for Eyeblossom and Azure Bluet
-   [MC-277950](https://bugs.mojang.com/browse/MC-277950) Open potted eyeblossom is shaded (flower;;_;;pot;;_;;cross;;_;;emissive)
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

