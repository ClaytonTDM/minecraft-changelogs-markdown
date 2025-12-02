# Minecraft 1.21.11 Pre-Release 4

We're starting the week with Pre-Release 4 for Mounts of Mayhem! With this one, Dispensers can now be part of the Mayhem with the new Mounts, along with other fixes!

Happy Mining!

## Changes

-   The attack range extension for players in Creative Mode is once again set to 2 blocks
    -   This reverts an accidental change that increased the range to 4 or 6 blocks in certain cases

### Nautilus

-   Dispensers can now equip Saddles and Nautilus Armor on tamed Nautiluses and Zombie Nautiluses
-   Dismounting a Nautilus or Zombie Nautilus while on land no longer places the player inside the Nautilus
    -   This works given that there is a valid block to place the player on
    -   If there is no valid block, the player will be placed inside the Nautilus as before

## Technical Changes

-   The Data Pack version is now 94.1

## Data Pack Version 94.1

### Item Components

**Changes to `minecraft:attack_range`**

-   Added fields:
    -   `min_creative_reach`: float, the minimum distance in blocks from the Creative Mode attacker to the target to be considered valid
        -   Default value: `0.0`, valid from `0.0` to `64.0`
    -   `max_creative_reach`: float, the maximum distance in blocks from the Creative Mode attacker to the target to be considered valid
        -   Default value: `5.0`, valid from `0.0` to `64.0`

## Fixed bugs in 1.21.11 Pre-Release 4

-   [MC-154651](https://bugs.mojang.com/browse/MC-154651) Boats and rafts can break off paintings and item frames
-   [MC-300588](https://bugs.mojang.com/browse/MC-300588) Waypoint modifications reset upon death
-   [MC-301127](https://bugs.mojang.com/browse/MC-301127) Music stops and restarts when trying to connect to a server when the music frequency is set to constant
-   [MC-302516](https://bugs.mojang.com/browse/MC-302516) Zombie villagers spawn as the variant matching the biome at 0, 0, 0
-   [MC-302662](https://bugs.mojang.com/browse/MC-302662) Dismounting a nautilus always places you inside the nautilus
-   [MC-302895](https://bugs.mojang.com/browse/MC-302895) Spears held in the off hand play the charging animation when using items in the main hand
-   [MC-304374](https://bugs.mojang.com/browse/MC-304374) Zombie nautilus drops are not affected by Looting
-   [MC-304385](https://bugs.mojang.com/browse/MC-304385) Item frames and paintings pop out when in the same space as a stationary happy ghast
-   [MC-304547](https://bugs.mojang.com/browse/MC-304547) Items in the crafter's slots aren't visible

---

# Minecraft 1.21.11 Pre-Release 3

We'll kick the week off with a third pre-release for the Mounts of Mayhem drop. This pre-release includes bug fixes and spear weapon tweaks.

Happy mining!

## New Features

### Spear Weapon

-   While charging, the Spear hit animation and sound now play only after the previous hit animation has fully completed
-   While charging in first person, the Spear head now gradually rotates to a fully vertical position over time, matching the behavior in third person

## Changes

-   The "See-Through Leaves" video setting is now turned off on the "Fast" graphics preset
-   Tamed horses no longer run into cacti or sweet berry bushes

## Fixed bugs in 1.21.11 Pre-Release 3

-   [MC-302900](https://bugs.mojang.com/browse/MC-302900) Spears' reach overrides the player's entity interaction range
-   [MC-303036](https://bugs.mojang.com/browse/MC-303036) Zombie nautiluses with a negative age possess a hitbox the size of a baby nautilus
-   [MC-303709](https://bugs.mojang.com/browse/MC-303709) Dumping dynamic textures with large textures makes the game crash
-   [MC-304045](https://bugs.mojang.com/browse/MC-304045) Spear hit sounds play the normal hit sounds
-   [MC-304362](https://bugs.mojang.com/browse/MC-304362) RGSS breaks permanently when toggling hardware anisotropic filtering
-   [MC-304363](https://bugs.mojang.com/browse/MC-304363) Copper golem statues render at the wrong position in shelves when reloading resource packs
-   [MC-304407](https://bugs.mojang.com/browse/MC-304407) Charge attacks are impossible when looking at a mob that's between 3 and 4.5 blocks away
-   [MC-304440](https://bugs.mojang.com/browse/MC-304440) The mouse cursor changes to the pointing hand shape when hovering over inventory slots in the crafter UI
-   [MC-304441](https://bugs.mojang.com/browse/MC-304441) The mouse cursor changes to the pointing hand shape when hovering over the creative inventory scroll bar's bounds even if it's invisible or inactive
-   [MC-304452](https://bugs.mojang.com/browse/MC-304452) Non-see-through leaves in Programmer Art still look abnormal

---

# Minecraft 1.21.11 Pre-Release 2

Today we're celebrating Friday with a second Pre-Release for 1.21.11! This one has some improvements when See-Through Leaves is turned off along with bug fixes.

Happy mining!

## Changes

-   When the "See-Through Leaves" video setting is disabled, the gaps between leaves are now dark green instead of black
-   Turning the "See-Through Leaves" video setting off now gives a bigger performance boost than before

## Fixed bugs in 1.21.11 Pre-Release 2

-   [MC-238715](https://bugs.mojang.com/browse/MC-238715) The "minecraft:block.chest.locked" sound cannot be heard by other players when attempting to open locked blocks
-   [MC-302660](https://bugs.mojang.com/browse/MC-302660) The "options.cutoutLeaves.tooltip" string is missing the word “you” making it grammatically incorrect
-   [MC-303061](https://bugs.mojang.com/browse/MC-303061) The "minecraft:block.chest.locked" sound plays at the player position, not the chest's
-   [MC-304023](https://bugs.mojang.com/browse/MC-304023) Redundant level data fixer files are saved in worlds' "data" folder
-   [MC-304369](https://bugs.mojang.com/browse/MC-304369) Crash when loading the game without an existing options.txt file
-   [MC-304401](https://bugs.mojang.com/browse/MC-304401) Non see-through leaves look different compared to the previous snapshot
-   [MC-304421](https://bugs.mojang.com/browse/MC-304421) "attack;;_;;range" component breaks hit result

---

# Minecraft 1.21.11 Pre-Release 1

Today we are shipping the first pre-release of 1.21.11, the Mounts of Mayhem drop. From now on, you should mostly see bugs being fixed. In addition to that, pre-releases don't follow the regular snapshot cadence of releasing on Tuesdays, so keep an eye out for the next pre-release.

## Changes

-   Added a new graphical option "Texture Filtering"
    -   This now controls whether or not Anisotropic Filtering is used
-   The heads of the Nautilus and Zombie Nautilus now clip less through their shells

### Texture Filtering

-   New option in Video Settings
-   Controls the method used to sample textures when they are viewed at an angle or from a distance
-   Available values are "None", "RGSS", and "Anisotropic"
-   The default depends on your graphics preset and hardware
-   "RGSS" (Rotated Grid Super Sampling) is a shader-based filtering method that improves texture clarity at a moderate performance cost
    -   This is available on all hardware
-   "Anisotropic" is a hardware-based filtering method that provides the best texture clarity
    -   The maximum anisotropy may be "2x", "4x", and "8x", controllable by a separate slider
    -   If your hardware does not support it, Anisotropic Filtering will do nothing
    -   This significantly impacts video memory usage (especially combined with a high mipmap count)

### Spear Weapon

-   Golden Spear is considered a preferred weapon by Piglins
-   You can now continue to deal damage to the target if you keep charging at it after the initial hit, and mobs can do the same
-   Skeleton variants and Drowned can no longer pick up Spears
-   Zombified Piglins now also know how to charge with a Spear
-   Spears are now placed after Swords in the creative inventory

### Advancements

-   The "Mob Kabob" advancement is no longer a challenge advancement

## Technical Changes

-   The Data Pack version is now 94.0
-   The Resource Pack version is now 75.0

## Data Pack Versions 94.0

### Item Components

-   `min_reach`, `max_reach` and `hitbox_margin` have been moved from `minecraft:piercing_weapon` and `minecraft:kinetic_weapon` into a new component `minecraft:attack_range` to allow all melee weapon types to use them

**Added `minecraft:attack_range`**

-   Enables a custom attack range when using the item.
-   Overrides the normal entity interaction range for Player.
-   Regular melee attack range is computed for Mobs based on the distance of the target hitbox to their hitbox. This component modifies that distance check by adjusting minimum and maximum padding for the attack hitbox.
-   Mobs using `minecraft:kinetic_weapon` will have their attack range applied in the same way it applies to players
-   Format: object with fields
    -   `min_range`: float, the minimum distance in blocks from the attacker to the target to be considered valid
        -   Default value: `0.0`, valid from `0.0` to `64.0`
    -   `max_range`: float, the maximum distance in blocks from the attacker to the target to be considered valid
        -   Default value: `3.0`, valid from `0.0` to `64.0`
    -   `hitbox_margin`: float, the margin applied to the target bounding box when checking for valid hitbox collision
        -   Default value: `0.3`, valid from `0.0` to `1.0`
    -   `mob_factor`: float, the multiplier applied to the `min_range` and `max_range` when checking for valid distance when item is used by a mob
        -   Default value: `1.0`, valid from `0.0` to `2.0`

### Tags

**Item Tags**

-   Updated `#piglin_preferred_weapons` to include Golden Spears

## Resource Pack Versions 75.0

-   Textures for the Leather Horse Armor item and equipment asset have been split into a tinted base layer and an overlay layer

### Item Sprites

-   Added new item sprites:
    -   `item/leather_horse_armor_overlay`

### Textures

-   `texture` section of `*.mcmeta` files has a new `alpha_cutoff_bias` field that controls alpha bias for cutout textures
    -   Technically there is no limit for this value, it can be negative as well, but it does not make sense to set this higher than `1.0` or lower than `-1.0` since the texture will become either fully opaque or fully transparent
    -   Default value for this field is `0.0`, and it can be increased for textures that can become too transparent/thin at distance, or decreased if it's too "opaque"
    -   It's recommended to increment or decrease this value in fine granuality for finding the sweet spot. As an example, `0.1` is used for `kelp` textures in order to prevent them being fully trasparent at distance
    -   Only used for lower mips of cutout textures, does not change the alpha of first mip level, and has no effect on other textures

### Entity Textures

-   Added new entity textures:
    -   `entity/equipment/horse_body/leather_overlay.png`

### Sounds

-   Updated Swim Sounds for Nautilus, Baby Nautilus, and Zombie Nautilus
-   Removed sound event that is no longer used:
    -   `item.underwater_saddle.equip`
-   Added new sound events for the Nautilus:
    -   `entity.baby_nautilus.ambient_land`
    -   `entity.baby_nautilus.death_land`
    -   `entity.baby_nautilus.hurt_land`
    -   `entity.nautilus.ambient_land`
    -   `entity.nautilus.dash_land`
    -   `entity.nautilus.dash_ready_land`
    -   `entity.nautilus.death_land`
    -   `entity.nautilus.hurt_land`
    -   `entity.zombie_nautilus.ambient_land`
    -   `entity.zombie_nautilus.dash_land`
    -   `entity.zombie_nautilus.dash_ready_land`
    -   `entity.zombie_nautilus.death_land`
    -   `entity.zombie_nautilus.hurt_land`

## Fixed bugs in 1.21.11 Pre-Release 1

-   [MC-276382](https://bugs.mojang.com/browse/MC-276382) Leather horse armor leggings & helmet parts are untextured
-   [MC-299136](https://bugs.mojang.com/browse/MC-299136) Hyper Potions (Ian Tsuchiura) is not mentioned in the credits and splash texts
-   [MC-302209](https://bugs.mojang.com/browse/MC-302209) Debug renderers stop working when changing dimensions
-   [MC-302677](https://bugs.mojang.com/browse/MC-302677) The attack indicator does not respect spears' reach
-   [MC-302836](https://bugs.mojang.com/browse/MC-302836) The texture of zombie horses' heads is not symmetrical
-   [MC-302840](https://bugs.mojang.com/browse/MC-302840) The saddle texture on zombie horses is missing some parts
-   [MC-302882](https://bugs.mojang.com/browse/MC-302882) Piglins do not perform charge attacks when holding spears, unlike in Bedrock Edition
-   [MC-302900](https://bugs.mojang.com/browse/MC-302900) Spears' reach overrides the player's entity interaction range
-   [MC-303052](https://bugs.mojang.com/browse/MC-303052) Cobwebs and sweet berry bushes prevent players from lunging using spears
-   [MC-303174](https://bugs.mojang.com/browse/MC-303174) Nautilus shell drop chance from nautiluses is unaffected by Looting
-   [MC-303467](https://bugs.mojang.com/browse/MC-303467) Zombified piglins that spawn holding golden spears and can pick up loot swap their spear for any other item
-   [MC-303476](https://bugs.mojang.com/browse/MC-303476) Dashing on a nautilus plays an underwater sound even on land
-   [MC-303524](https://bugs.mojang.com/browse/MC-303524) Piglins that spawn holding a golden spear swap their spear with any golden item
-   [MC-303657](https://bugs.mojang.com/browse/MC-303657) Camel husks only sink when ridden
-   [MC-303664](https://bugs.mojang.com/browse/MC-303664) Black outlines render on flat-textured blocks when mipmap levels are disabled
-   [MC-303812](https://bugs.mojang.com/browse/MC-303812) Zombies that spawn holding spears and can pick up loot swap their spear for any other item
-   [MC-303838](https://bugs.mojang.com/browse/MC-303838) The rain overlay renders in the end while the ender dragon fog is present
-   [MC-303846](https://bugs.mojang.com/browse/MC-303846) /gamerule does not accept full resource locations of game rules
-   [MC-303919](https://bugs.mojang.com/browse/MC-303919) Lunge wastes durability and hunger by using it while on a ladder
-   [MC-303942](https://bugs.mojang.com/browse/MC-303942) The Mob Kabob advancement doesn't reward the player with experience
-   [MC-303950](https://bugs.mojang.com/browse/MC-303950) Velocity no longer properly increases spear damage
-   [MC-304029](https://bugs.mojang.com/browse/MC-304029) Undead mobs no longer burn in sunlight in biomes without rain while it's raining
-   [MC-304042](https://bugs.mojang.com/browse/MC-304042) You can get the Mob Kabob advancement by hitting an ender dragon five times in a row with the same charge attack
-   [MC-304058](https://bugs.mojang.com/browse/MC-304058) Lower fog;;_;;end;;_;;distance environment attribute values cause rain to drastically increase fog effect
-   [MC-304095](https://bugs.mojang.com/browse/MC-304095) Holding a spear prevents attack interactions with interaction entities
-   [MC-304116](https://bugs.mojang.com/browse/MC-304116) Entities and block entities do not fade correctly when the chunk fade setting is active
-   [MC-304127](https://bugs.mojang.com/browse/MC-304127) The float ranges of Cubic Bézier curve arguments don't match the changelog
-   [MC-304163](https://bugs.mojang.com/browse/MC-304163) Shift-left-clicking an entity's name with advanced tooltips enabled no longer inserts the entity's UUID in the chat
-   [MC-304170](https://bugs.mojang.com/browse/MC-304170) Setting the "Music Toast" option to "Pause Menu and Toast" while music is disabled shows a music toast
-   [MC-304190](https://bugs.mojang.com/browse/MC-304190) Fish buckets have a dysfunctional consumable component now
-   [MC-304191](https://bugs.mojang.com/browse/MC-304191) Foxes can now eat fish buckets, deleting the bucket and skipping special effects
-   [MC-304196](https://bugs.mojang.com/browse/MC-304196) The recipe for waxed chiseled copper made from waxed copper slabs now yields two items instead of one
-   [MC-304212](https://bugs.mojang.com/browse/MC-304212) Zombie nautiluses being ridden by mobs can still be leashed, unlike zombie horses and camel husks

---

# Minecraft Snapshot 25w46a

Is it Tuesday already? Must be, because the lights are on in the snapshot shipping room!

With today's release we're putting some additional polish on the upcoming features for our Mounts of Mayhem game drop, and changing the order of spawn eggs in the creative inventory for some better thematic flair. On the technical side, resource pack creators now have more freedom when creating their block models. For the full list of changes, browse the changelog below!

Happy mining!

## Changes

### Mobs

-   Parched are now immune to Weakness effect
-   Horses, Mules, Donkeys, Camels, Zombie Horses and Camel Husks will not panic if controlled by Mobs
-   Nautiluses and Zombie Nautiluses now play a dash sound when they perform their dash attack

### Items

-   Spears no longer cause item interact vibrations
-   Spawn Eggs are now sorted thematically in the Creative Inventory, according to the following categories:
    -   Overworld
        -   Farm Animals
        -   Mounts
        -   Pets
        -   Wild Animals
        -   Aquatic
        -   Miscellaneous
        -   Golems
        -   Villagers
        -   Undead
        -   Spiders
        -   Monsters
        -   Illagers
    -   Nether
    -   The End

### UI

-   Added an inventory UI for the Nautilus and Zombie Nautilus
-   Renamed the "Show Music Toast" option to "Music Toast"
    -   Added a third state to the "Music Toast" option, allowing it to only be shown in the pause menu
-   Added splash text "One does not simply walk to the Far Lands"

> **Developer’s Note:** _This statement was proven false on October 4, 2025_

## Technical Changes

-   The Data Pack version is now 93.1
-   The Resource Pack version is now 74.0

## Data Pack Version 93.1

### Item Components

**Default Item Components**

Added food properties to the following fish bucket items:

-   `minecraft:cod_bucket`
-   `minecraft:salmon_bucket`
-   `minecraft:pufferfish_bucket`
-   `minecraft:tropical_fish_bucket`

**`minecraft:use_effects`**

Added field `interact_vibrations`: boolean, whether using this item emits `minecraft:item_interact_start` and `minecraft:item_interact_finish` game events - Default value: `true`

### Loot Tables

Reverted removal of `contents` as a supported value for the `minecraft:dynamic` loot pool entry

> **Developer's Note**: _Support for this value was removed in a previous snapshot with the introduction of slot sources, which replace its functionality. Community response however indicated that certain use cases aren't yet fully covered by slot sources, so we are reverting this removal until proper alternatives are ready._

## Resource Pack Version 74.0

-   Textures used for still water and lava are now hardcoded to `minecraft:block/water_still` and `minecraft:block/lava_still`
-   To prepare for future work, the game will now print a warning if any defined sprites in any atlases share a name
-   Block model and state format has been expanded to allow more rotations

### Textures

-   Beacons no longer support translucent textures
-   Added `gui/container/nautilus` used for the Nautilus inventory UI

### UI Sprites

-   Added `container/slot/nautilus_armor_inventory` - Nautilus icon used in Nautilus inventory UI

### Sound Events

-   Added `entity.zombie_horse.eat`

### Block Models

-   Block model elements can now be rotated around multiple axes
    -   Model is first rotated around X, then Y, then Z
    -   New fields:
        -   `x` - rotation around axis X in degrees, float, defaults to `0.0`
        -   `y` - rotation around axis Y in degrees, float, defaults to `0.0`
        -   `z` - rotation around axis Z in degrees, float, defaults to `0.0`
    -   Existing fields `axis` and `angle` can still be used
        -   If both field sets are present, older notation takes presence
-   Existing restriction for angle value limiting them to `[-45, 45]` has been removed
    -   Note: Names of faces are not influenced by rotation. Features that depend on them, like culling, will always use original directions

### Block State Model Dispatch

-   Variants in block state dispatch files (defined in `assets/.../blockstates/` can now be also rotated around Z axis
    -   New optional field `z` has the same format as existing `x` and `y` fields: an integer with allowed values of `0` (default), `90`, `180` and `270`
    -   Rotation around Z axis is applied after X and Y

## Fixed bugs in 25w46a

-   [MC-266425](https://bugs.mojang.com/browse/MC-266425) Recipes for new waxed copper blocks are not grouped
-   [MC-302815](https://bugs.mojang.com/browse/MC-302815) Zombified piglins spawned from lightning striking a pig do not have a chance to hold a golden spear
-   [MC-302825](https://bugs.mojang.com/browse/MC-302825) The charging animations of some items are incorrect
-   [MC-302851](https://bugs.mojang.com/browse/MC-302851) Buckets of fish heal nautiluses much less than fish items
-   [MC-302890](https://bugs.mojang.com/browse/MC-302890) You can perform spear jabbing and charging attacks simultaneously
-   [MC-302892](https://bugs.mojang.com/browse/MC-302892) Players' arms visually intersect with their bodies and heads when holding spears while riding boats
-   [MC-302893](https://bugs.mojang.com/browse/MC-302893) Hitboxes of submerged entities don't render when the player is looking at them from the surface
-   [MC-302935](https://bugs.mojang.com/browse/MC-302935) Skeletons incorrectly position their arms before shooting
-   [MC-302958](https://bugs.mojang.com/browse/MC-302958) Nautiluses' mouth texture is misaligned
-   [MC-302998](https://bugs.mojang.com/browse/MC-302998) Mobs' arms can visually intersect their bodies and heads when they rotate while holding spears
-   [MC-303149](https://bugs.mojang.com/browse/MC-303149) Commands with specific arguments can crash the game in a deep function recursion
-   [MC-303331](https://bugs.mojang.com/browse/MC-303331) There is no sound for feeding zombie horses red mushrooms
-   [MC-303395](https://bugs.mojang.com/browse/MC-303395) You cannot double-click on server regions within the realms select region menu to select them
-   [MC-303396](https://bugs.mojang.com/browse/MC-303396) The search fields in the resource and data pack menus aren’t automatically selected when opening the menus via keyboard navigation
-   [MC-303404](https://bugs.mojang.com/browse/MC-303404) You can damage entities while charging with spears in spectator mode
-   [MC-303431](https://bugs.mojang.com/browse/MC-303431) Setting the debug modifier key to a mouse button doesn't allow for switching to the selected gamemode in the gamemode switcher
-   [MC-303443](https://bugs.mojang.com/browse/MC-303443) Transparent and translucent blocks render in front of the fishing line
-   [MC-303625](https://bugs.mojang.com/browse/MC-303625) Entities, particles, clouds, water, semi-transparent blocks and special rendering blocks render in front of block hitboxes with improved transparency enabled
-   [MC-303653](https://bugs.mojang.com/browse/MC-303653) Camel husks show breeding hearts when fed
-   [MC-303695](https://bugs.mojang.com/browse/MC-303695) Reloading textures while the game is tick frozen causes animated textures to render incorrectly
-   [MC-303751](https://bugs.mojang.com/browse/MC-303751) The model of parched has UV issues
-   [MC-303755](https://bugs.mojang.com/browse/MC-303755) The mouse cursor doesn’t change to the resize shape when hovering over the scroll bar in the villager and wandering trader trade UI
-   [MC-303757](https://bugs.mojang.com/browse/MC-303757) The mouse cursor doesn’t change to the proper shape when hovering over enchantments in the enchanting table UI
-   [MC-303758](https://bugs.mojang.com/browse/MC-303758) The mouse cursor doesn’t change to the hand shape when hovering over various elements in the recipe book
-   [MC-303761](https://bugs.mojang.com/browse/MC-303761) The mouse cursor doesn’t change to the proper shape when hovering over the output buttons or the scroll bar in the stonecutter UI
-   [MC-303762](https://bugs.mojang.com/browse/MC-303762) The mouse cursor doesn’t change to the proper shape when hovering over the output buttons or the scroll bar in the loom UI
-   [MC-303763](https://bugs.mojang.com/browse/MC-303763) The mouse cursor doesn’t change to the hand shape when hovering over the crafting slots in the crafter UI
-   [MC-303764](https://bugs.mojang.com/browse/MC-303764) The mouse cursor doesn’t change to the proper shape when hovering over the tabs or the scroll bar in the Creative mode inventory
-   [MC-303765](https://bugs.mojang.com/browse/MC-303765) The mouse cursor doesn’t change to the hand shape when hovering over the tabs in the advancements menu
-   [MC-303790](https://bugs.mojang.com/browse/MC-303790) The block breaking particles and block outlines render behind glass blocks and beacons
-   [MC-303882](https://bugs.mojang.com/browse/MC-303882) Charging with a spear with a loaded crossbow in the off hand looks visually off in third person
-   [MC-303940](https://bugs.mojang.com/browse/MC-303940) Netherite horse armor burns in lava/fire
-   [MC-303943](https://bugs.mojang.com/browse/MC-303943) Drowned are no longer slowed down by water
-   [MC-303944](https://bugs.mojang.com/browse/MC-303944) Knockback attacks produce double sounds while the player is in the false sprinting state
-   [MC-303945](https://bugs.mojang.com/browse/MC-303945) The closed caption for the parrot imitating parched does not match the original caption for parched
-   [MC-303947](https://bugs.mojang.com/browse/MC-303947) Clicking on any item with the "unbreakable", "glider", or "intangible;;_;;projectile" data component causes the game to crash
-   [MC-303948](https://bugs.mojang.com/browse/MC-303948) The texture of netherite horse armor is different than in Bedrock Edition
-   [MC-303956](https://bugs.mojang.com/browse/MC-303956) Charge attacks now have reduced damage when used after a jab attack
-   [MC-303961](https://bugs.mojang.com/browse/MC-303961) Sprint-crit state now plays both the sprint-knockback sound and the critical hit sound, despite only critical hits being performed
-   [MC-303974](https://bugs.mojang.com/browse/MC-303974) The day counter in the debug overlay is no longer displayed
-   [MC-304061](https://bugs.mojang.com/browse/MC-304061) The warning time for world borders in new worlds is less than expected

---

