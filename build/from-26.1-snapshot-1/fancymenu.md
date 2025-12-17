# Minecraft 26.1 Snapshot 1

As the year draws to a close, we gather in the shipping room one more time to press the buttons that make snapshots happen! In this final release of 2025 we're (among other things) upgrading our runtime version of Java, giving villager trades the data-driven treatment, and adding a new swing command that swings the arms of entities. Finally, all our builds will now be unobfuscated moving forward.

Did we miss something? Oh, yeah! This snapshot marks the beginning of our new version numbering system for Minecraft on Java Edition. We'll see you next year for more snapshots and the eventual release of what will be Java Edition 26.1!

Happy mining!

## Changes

-   What trades are unlocked by villager professions are now determined using deterministic random sequences, like loot drops and barter loot
-   The algorithm that maps block and sky light levels to how bright things appear on screen has been fully rewritten
-   A new lightmap debug renderer was introduced, which can be enabled using the `F3 + 4` keybind

### Lightmap Algorithm Changes

-   The new algorithm is supposed to mostly provide the same overall results as before, but:
    -   It is simpler and more straightforward, and fixes multiple issues of the previous one, as listed in the Fixed Bugs section below
    -   The Darkness effect and world darkening effect of the Wither fight now works the same way in all dimensions
    -   The Night Vision effect now simply adds ambient light instead of scaling the resulting colors
        -   It means that fully dark areas no longer look brighter than areas lit by block or sky light
    -   More aspects of the algorithm such as block light tint, ambient light color and night vision color are now data-driven through environment attributes, as described in the Data Pack section below

### Lightmap Debug Renderer

-   A new debug renderer for the lightmap was added, which can be enabled using the `F3 + 4` keybind
-   It is mutually exclusive with FPS/TPS and networking charts
-   It shows the lightmap texture in real-time in the bottom right corner of the screen
-   The vertical axis of the texture represent sky light levels (0-15 from bottom to top)
-   The horizontal axis of the texture represent block light levels (0-15 from left to right)
-   The color of each pixel represents the resulting color that will be applied to blocks and entities lit with the corresponding block and sky light levels

### UI

**Debug Screen**

-   The `looking_at_block` and `looking_at_fluid` debug entries no longer show tags
-   New debug entries have been added:
    -   `looking_at_block_tags`
    -   `looking_at_fluid_tags`
    -   `looking_at_entity_tags`
-   Renamed debug entries:
    -   `looking_at_block` -> `looking_at_block_state`
    -   `looking_at_fluid` -> `looking_at_fluid_state`

## Technical Changes

-   The Data Pack version is now 95
-   If a server's disk space is low, a toast will now be shown to server operators
-   The game now requires Java 25
-   The included Java distribution is now the Microsoft build of OpenJDK 25

## Data Pack Version 95

-   Added data-driven registry for villager trades
-   Piglin inventory slots can now be accessed using `piglin.*` similar to how Villager inventories can be accessed using `villager.*`

### Data-driven Villager Trades

Trades offered by Villagers and Wandering Traders are now data-driven and can be customized by datapack developers

**Villager Trades**

-   Present in the `villager_trade` folder, represents a blueprint for trades which is used by Villagers and Wandering Traders to generate actual trades
-   Entry Format:
    -   `wants`, an object representing an item type and number of them needed to trade
        -   `id`, the id of the item
        -   `count`, an optional number provider representing how many of the item is needed for the trade
            -   Defaults to a constant `1`
        -   `components`, an optional component map representing the expected data components on the item
            -   Defaults to an empty map
    -   `additional_wants`, an optional object representing an additional item required by the merchant, has the same format as `wants`
    -   `gives`, an Item Stack representing the resulting item given by the merchant when trading
        -   Uses the existing format for Item Stacks
    -   `given_item_modifiers`, a optional list of Item Modifiers representing modifiers to apply to the item in `gives` such as enchantments or potions, used to add dynamism to the trade rather than hardcoding certain values
        -   Uses the existing format for Item Modifiers (also known as loot modifiers, item functions, loot functions...)
        -   If any of these returns an empty item the entire trade will be discarded
        -   Item Modifier references are not yet supported
        -   If the final item has a `stored_enchantment` component containing an enchantment in the `#double_trade_price` tag, then the count of `wants` is doubled
    -   `max_uses`, an optional number provider representing the maximum number of times a trade may be used
        -   Is set to `1` if the number provider returns a lower value
        -   Defaults to `4`
    -   `reputation_discount`, an number provider representing how much factors such as demand, discounts or penalties affects the cost represented by `wants`
        -   Is set to `0.0` if the number provider returns a lower value
        -   Defaults to `0.0`
    -   `xp`, an optional number provider representing the amount of xp a merchant gets when the trade is done
        -   Is set to `0` if the number provider returns a lower value
        -   Defaults to `1`
    -   `merchant_predicate`, a Predicate representing conditions on the merchant that need to be met for the trade to be offered
        -   Uses the existing format for Predicates (also known as loot conditions)
        -   Predicate references are not yet supported
    -   `double_trade_price_enchantments`, an optional enchantment id, list of namespaced enchantment IDs, or hash-prefixed enchantment tag representing enchantments that will double the additional cost from `minecraft:enchant_randomly` and `minecraft:enchant_with_levels` if they have `include_additional_cost_component` set to `true` and if the item has one of the provided values in its `minecraft:stored_enchantments` component

An example trade of an emerald and a book for an enchanted book offered only by Desert Villagers

    {
      "additional_wants": {
        "id": "minecraft:book"
      },
      "double_trade_price_enchantments": "#minecraft:double_trade_price",
      "given_item_modifiers": [
        {
          "function": "minecraft:enchant_randomly",
          "include_additional_cost_component": true,
          "only_compatible": false,
          "options": "#minecraft:trades/desert_common"
        },
        {
          "function": "minecraft:filtered",
          "item_filter": {
            "items": "minecraft:enchanted_book",
            "predicates": {
              "minecraft:stored_enchantments": [
                {}
              ]
            }
          },
          "on_fail": {
            "function": "minecraft:discard"
          }
        }
      ],
      "gives": {
        "count": 1,
        "id": "minecraft:enchanted_book"
      },
      "max_uses": 12.0,
      "merchant_predicate": {
        "condition": "minecraft:entity_properties",
        "entity": "this",
        "predicate": {
          "predicates": {
            "minecraft:villager/variant": "minecraft:desert"
          }
        }
      },
      "reputation_discount": 0.2,
      "wants": {
        "id": "minecraft:emerald"
      }
    }
    

**Trade Sets**

-   Present in the `trade_set` folder, they're groupings of trades offered by Villagers and Wandering Traders
-   We currently only have hardcoded ones available in `<profession>/level_<level>` for Villagers, as well as `wandering_trader/buying`, `wandering_trader/special`, `wandering_trader/common` for Wandering Traders
-   Entry Format:
    -   `trades`, a villager trade id, list of namespaced villager trade IDs, or hash-prefixed villager trade tag representing the trades that are part of this trade set
    -   `amount`, a number provider representing the amount of trades to be generated from this set when used
        -   If the generated number is greater than the number of available `trades` then it will only generate until all `trades` have been used once, unless `allow_duplicates` is set to `true`
    -   `allow_duplicates`, a boolean representing if the trade set can use the same Villager Trade multiple times to generate trades
        -   Defaults to `false`
    -   `random_sequence`, an optional named random sequence that determines which trades are generated
        -   Defaults to a non-deterministic random sequence

An example trade set offering 2 trades from the `#minecraft:armorer/level_1` tag, allowing duplicates

    {
      "amount": 2.0,
      "trades": "#minecraft:armorer/level_1",
      "random_sequence": "minecraft:trade_set/armorer/level_1",
      "allow_duplicates": true
    }
    

### Commands

**Added `swing`**

-   New command that enables swinging of entities arms
-   Not all entities support swing animation. `swing` will succeed for those entities, but clients will only display it when possible
-   For example, this makes it possible to swing Mannequin arms
-   Returns the amount of entities for which a swing was sent

Syntax: `/swing <entity selector> <mainhand|offhand>`

**`minecraft:visual/block_light_tint`**

Tint of the block light. Block light color start as dark grey at low light levels, becomes tinted by this attribute at medium levels and turns white at high levels. By default, it provides the yellowish tint of torches. Bright colors work best for this attribute, with at least one color component being fully bright. The tint applies globally to all light sources visible on the screen. Individual lights can not be tinted differently.

-   Value type: RGB color
-   Default value: `#FFD88C`
-   Modifiers: RGB Color Modifiers
-   Interpolated: yes
-   Resolved at the camera's position

**`minecraft:visual/ambient_light_color`**

Defines both the ambient light tint and brightness. This light is applied to the world at 0 light level. Block and sky light are added on top of it.

-   Value type: RGB color
-   Default values: `#0A0A0A` for the Overworld, `#302821` for the Nether, `#3f473f` for the End
-   Modifiers: RGB Color Modifiers
-   Interpolated: yes
-   Resolved at the camera's position

**`minecraft:visual/night_vision_color`**

This color is used similarly to ambient light color. When the Night Vision effect is active, per-component maximum of `minecraft:visual/night_vision_color` and `minecraft:visual/ambient_light_color` is used as ambient color. Night Vision is not tinted by default.

-   Value type: RGB color
-   Default value: `#999999`
-   Modifiers: RGB Color Modifiers
-   Interpolated: yes
-   Resolved at the camera's position

### Data Components

**Added `minecraft:additional_trade_cost`**

-   Transient component used to modify `count` needed of the `gives` item in a villager trade, is removed after a trade has been generated
-   Format: integer

### Loot Functions

-   Added `minecraft:villager_trade` loot table type which takes the following parameters:
    -   `this`, the entity offering the trade
    -   `origin`, the block position of the entity at its feet

**Added `minecraft:set_random_dyes`**

-   Additively adds dyes to an item's `minecraft:dyed_color` data component if the item is in the `#dyeable` tag Fields:
-   `conditions` - conditions for the function to apply
-   `number_of_dyes` - number provider representing the number of random dyes out of sixteen to apply to the item
    -   The same dye might be selected repeatedly

**Added `minecraft:set_random_potion`**

-   Randomly sets the `minecraft:potion_contents` data component on an item Fields:
-   `conditions` - conditions for the function to apply
-   `options` - optional potion id, list of namespaced potion IDs, or hash-prefixed potion tag, representing the possible potions to select from
    -   Defaults to any potion in the `potions` registry

**Changed `minecraft:enchant_with_levels`**

Now also takes the following field:

-   `include_additional_cost_component` - optional boolean representing if an `minecraft:additional_cost_component` should be added to the item based on the cost of the enchantment
    -   Defaults to `false`
    -   The value is determined by the `levels` number provider and is the same that is used to determine what enchantment level is used for enchanting

**Changed `minecraft:enchant_randomly`**

Now also takes the following field:

-   `include_additional_cost_component` - optional boolean representing if an `minecraft:additional_cost_component` should be added to the item based on the cost of the enchantment
    -   Defaults to `false`
    -   The value is determined by the value selected by `levels` or its default value using the following formula: `2 + random(0, 5 + level * 10) + 3 * level`

### Predicates

**Entity Predicates**

**`player` Sub-Predicate**

-   New optional field: `food` - A Food predicate
-   Format: Object with fields:
    -   `level` - optional integer min/max range specifying the required food level
    -   `saturation` - optional float min/max range specifying the required saturation level

**Added `minecraft:sum`**

-   Returns the sum of a list of number providers
-   Fields:
    -   `summands`, a list of number providers

### Enchantments

-   The `post_piercing_attack` component no longer only works for a player if that player has a certain food level

### Tags

-   Added several tags representing groups of villager trades from which Villagers and Wandering Traders derive their trading pools
    -   Villagers have the following tags representing each profession and level of trade in the format: `#<profession>/level_<level>`, up to level 5
        -   Smiths have the `#common_smith/level_<level>` tags representing common trades among armorers, weaponsmiths and toolsmiths, up to level 5
    -   Wandering Traders have the following tags: `#wandering_trader/buying`, `#wandering_trader/special`, `#wandering_trader/common`

**Enchantment Tags**

-   Removed the following tags:
    -   `trades/desert_special`
    -   `trades/jungle_special`
    -   `trades/plains_special`
    -   `trades/savanna_special`
    -   `trades/snow_special`
    -   `trades/swamp_special`
    -   `trades/taiga_special`

**Potion Tags**

-   Added `#tradeable` - all potion effects that can appear in villager trades

## Resource Pack Version 76

### Lightmap Shader Changes

-   The `lightmap.fsh` shader was significantly modified.
    -   The `LightmapInfo` uniform now has two new fields:
        -   `BlockLightTint`
        -   `NightVisionColor`
    -   The `AmbientLightFactor` field was removed, its value is now premultiplied into `AmbientColor`
    -   The `DarkenWorldFactor` was renamed to `BossOverlayWorldDarkeningFactor`
-   Text and items rendered in UI now use a separate 1x1 white lightmap texture, so the lightmap shader does not always have to keep the 15, 15 pixel purely white

## Fixed bugs in 26.1 Snapshot 1

-   [MC-64087](https://bugs.mojang.com/browse/MC-64087) Revengeful zombies / Zombie reinforcements will try to attack you in Creative mode
-   [MC-179949](https://bugs.mojang.com/browse/MC-179949) You cannot edit the inventories of piglins by using '/item replace'
-   [MC-197497](https://bugs.mojang.com/browse/MC-197497) Smooth lighting transition from level 1 to 0 is not smooth
-   [MC-199589](https://bugs.mojang.com/browse/MC-199589) Hitting mobs in Creative mode then switching into Survival causes the mob to target you
-   [MC-219981](https://bugs.mojang.com/browse/MC-219981) Leader zombie-type mobs spawn with 20 health despite having an increased maximum health
-   [MC-300465](https://bugs.mojang.com/browse/MC-300465) Maps with the maximum number of markers cannot be placed in item frames
-   [MC-302186](https://bugs.mojang.com/browse/MC-302186) Ambient lighting in the Nether appears discolored compared to previous versions
-   [MC-302408](https://bugs.mojang.com/browse/MC-302408) Inconsistent underwater lighting with the Conduit Power effect applied
-   [MC-302528](https://bugs.mojang.com/browse/MC-302528) Low sky & block light look outright broken when cast on the same area
-   [MC-303119](https://bugs.mojang.com/browse/MC-303119) Feeding a cat or wolf in Survival mode with only one item in the selected item slot does not restore as much health as it should
-   [MC-303125](https://bugs.mojang.com/browse/MC-303125) Creepers can blow up after the player dies
-   [MC-303389](https://bugs.mojang.com/browse/MC-303389) The ender dragon's velocity can be affected by attacks while perched
-   [MC-303692](https://bugs.mojang.com/browse/MC-303692) Debug overlay text has an indent when improved transparency is disabled
-   [MC-304023](https://bugs.mojang.com/browse/MC-304023) Redundant level data fixer files are saved in worlds' "data" folder
-   [MC-304217](https://bugs.mojang.com/browse/MC-304217) Lunge's hunger requirement applies to post;;_;;piercing;;_;;attack effects of custom enchantments
-   [MC-304599](https://bugs.mojang.com/browse/MC-304599) Dolphins don't follow players riding nautiluses like in Bedrock Edition
-   [MC-304631](https://bugs.mojang.com/browse/MC-304631) Anisotropic filtering set to 8x causes opaque translucent textures to become transparent in the distance when there are odd-sized block textures
-   [MC-304725](https://bugs.mojang.com/browse/MC-304725) Zombie villagers summoned with default spawn eggs always spawn as their plains variant
-   [MC-304991](https://bugs.mojang.com/browse/MC-304991) Clicking on a chest with loot that hasn't been generated in Spectator mode makes the "block.chest.locked" sound
-   [MC-305012](https://bugs.mojang.com/browse/MC-305012) The description of the "Universal anger" game rule still uses the old ID of the "Forgive dead players" game rule

---

# Minecraft 1.21.11 Release Candidate 3

Today we are shipping Release Candidate 3 for 1.21.11, addressing three issues discovered after the recent update.

Happy mining!

## Fixed bugs in 1.21.11 Release Candidate 3

-   [MC-304790](https://bugs.mojang.com/browse/MC-304790) Transparent item models are rendered incorrectly
-   [MC-304797](https://bugs.mojang.com/browse/MC-304797) Zombie nautiluses generated in ocean ruins are not persistent
-   [MC-304810](https://bugs.mojang.com/browse/MC-304810) Zombies, skeletons and zombie horses can catch fire from light sources when exposed to the sky in an arid biome

---

# Minecraft 1.21.11 Release Candidate 2

Today we are shipping Release Candidate 2, fixing a crash issue affecting some players.

Happy mining!

### Stability

-   Fixed a crash

---

# Minecraft 1.21.11 Release Candidate 1

As we are getting ready for the release of the Mounts of Mayhem drop on December 9th, today we are shipping the first Release Candidate. If there are no critical issues, this will be the version that we release on Tuesday.

## Changes

### Spear Weapon

-   Increased the duration during which the Spear can deal knockback while charging
    -   The Charge Attack animations now better correspond to the different phases of the Spear

---

# Minecraft 1.21.11 Pre-Release 5

The Mayhem is Mounting with our fifth Pre-Release for Minecraft 1.21.11, bringing you another round of fixes. Happy mining!

## Fixed bugs in 1.21.11 Pre-Release 5

-   [MC-304409](https://bugs.mojang.com/browse/MC-304409) The enchantment glint is extremely bright on items with animated textures
-   [MC-304593](https://bugs.mojang.com/browse/MC-304593) Charge attacks from spears held in the off hand can disable shields when holding an axe in the main hand
-   [MC-304603](https://bugs.mojang.com/browse/MC-304603) Dolphins no longer follow players in boats
-   [MC-304703](https://bugs.mojang.com/browse/MC-304703) Zombified piglins stop sprinting after some time while chasing

---

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

