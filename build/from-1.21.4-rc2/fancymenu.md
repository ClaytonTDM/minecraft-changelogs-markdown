# 1.21.4 Release Candidate 2

Today we are releasing 1.21.4 Release Candidate 2 to activate Blending around the Pale Garden Biome.

If no further critical issues surface, this is the version we are planning to ship as Minecraft: Java Edition 1.21.4.

Happy Mining!

## Fixed bugs in 1.21.4 Release Candidate 2

-   [MC-278573](https://bugs.mojang.com/browse/MC-278573) Updating can cause straight biome borders with pale garden

---

# Minecraft 1.21.4 Release Candidate 1

After yesterday's [announcement](https://www.minecraft.net/en-us/article/the-garden-awakens-drop-date) that the The Garden Awakens drop comes out on December 3rd, today we're releasing the first release candidate!

If no new critical issues surface, this is the version we are planning to ship as Minecraft: Java Edition 1.21.4.

Happy Mining!

## Changes

-   Added language support for Popoloca

## Fixed bugs in 1.21.4 Release Candidate 1

-   [MC-278494](https://bugs.mojang.com/browse/MC-278494) Resin Bricks appears twice in "mineable/pickaxe" block tag
-   [MC-278548](https://bugs.mojang.com/browse/MC-278548) Spyglass is held incorrectly when used from the off hand

---

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

