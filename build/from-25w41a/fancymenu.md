# Minecraft Snapshot 25w41a

It's Snapshot Tues- I mean Thursday, everyone! Today, we are kicking off a brand-new Snapshot series and with it comes the first set of features from our upcoming game drop, Mounts of Mayhem! Charge into the fray with the spear, a new weapon with a unique enchantment. Explore the oceans atop your nautilus or claim undead mounts – the zombie horse and zombie nautilus – as your new steeds. Galloping side to side with these new features is both a revamped video settings screen that includes nifty new graphical presets, as well as the new stopwatch command which keeps track of real time. Bug fixes and technical changes round off the meal, as is tradition.

Happy mining!

## New Features

-   Added Nautilus and Zombie Nautilus
-   Added Nautilus Armor
-   Added Spear Weapon
-   Updated advancements to include Nautilus, Zombie Nautilus, and the Zombie Horse

### Nautilus

-   Nautilus is a new neutral aquatic mob
-   Spawns in all ocean biomes
-   Attacks using a Dash attack, if provoked
-   Occasionally attacks Pufferfish within range using the Dash attack
-   Has a Dash skill similar to Camels, used by pressing the Jump button
-   Takes suffocation damage on land
-   Adds the "Breath of the Nautilus" effect to mounted players
-   Nautilus can be bred and tamed using Pufferfish or a Bucket of Pufferfish
-   A Tamed Nautilus:
    -   Can be mounted using a Saddle
    -   With a Saddle has a roaming restriction of 16 blocks
    -   Without a Saddle has a roaming restriction of 32 blocks

**Zombie Nautilus**

-   Zombie Nautilus is a new underwater mob that spawns with a Drowned rider wielding a Trident
-   Zombie Nautilus is only hostile if ridden by a hostile mob
-   Zombie Nautilus behaves similar to the Nautilus except that it cannot be bred

### Nautilus Armor

-   Equippable on the Nautilus and Zombie Nautilus
-   Comes in Copper, Golden, Iron, Diamond and Netherite versions

### Spear Weapon

-   New weapon that can be crafted in Wood, Stone, Copper, Iron, Gold, Diamond and Netherite versions
-   Each material has different stats for timing, influencing how fast they are to use
-   Has a minimum reach for damage, being too close to a target will yield no damage
-   Has extended maximum reach compared to other tools and weapons
-   Has two attacks. Jab and Charge
-   Zombies, Husks, Zombified Piglins and Piglins can spawn with the Spear

**Jab Attack**

-   Quick-press primary action button to use
-   Low damage attack with knockback
-   Cooldown between attacks
-   Wooden Spears have the fastest cooldown; Netherite the slowest
-   Can hit multiple enemies
-   Does not destroy blocks

**Charge Attack**

-   Press and hold the secondary action button to use
-   Damage is based on Spear material, the player’s view angle, and the velocity of both the player and the target
-   While holding down the button, the attack goes through three stages before returning to idle:
    -   Engaged: The Spear can deal damage, knockback, and dismount mounted enemies if the speed is above the required thresholds
    -   Tired: Indicated by the Spear rotating to a vertical position and shaking. The Spear can deal damage and knockback (but not dismount) if the speed is above the required thresholds
    -   Disengaged: Indicated by the Spear being lowered, pointing downwards. The Spear gives damage but not knockback or dismount if the speed is above the required threshold
-   The Spear's range when used by mobs is half of that when used by players, but they can deal damage, dismount and knockback at lower speeds than the players
-   Zombies, Husks and Zombified Piglins know how to charge with a Spear

**Lunge Enchantment**

-   Spear exclusive enchantment
-   Only works with the Jab attack
-   When doing a Jab attack with Lunge, it propels the player horizontally in the view direction
-   The view angle needs to be perfectly leveled horizontally to achieve maximum lunge distance
-   Does significant durability damage to the Spear

### Advancements

-   Updated the "How did we get here?" advancement to include the `Breath of the Nautilus` effect
-   Updated the "Best Friends Forever" advancement to include the Nautilus, Zombie Nautilus, and the Zombie Horse
-   Updated the "The Parrots and the Bats" advancement to include the Nautilus
-   Updated the "Two by Two" advancement to include the Nautilus
-   Updated the "Monster Hunter" advancement to include the Zombie Nautilus
-   Updated the "A Throwaway Joke", "Take Aim" and "It Spreads" advancements to include the Nautilus and Zombie Nautilus

## Changes

-   Zombies, Husks, Piglins and Zombified Piglins can now hold Spears
-   Piglins now consider Golden Spears as one of the items they like
-   Items will no longer "bob" whenever their durability changes, such as when losing durability from an attack, or repaired by Mending
-   Some changes were made to debug renderers
-   Graphics modes "Fast", "Fancy", and "Fabulous!" have been replaced with graphics presets with the same names
-   Cloud movement is now the same for all players on a server
-   Netherite Armor points have been increased for the Body slot from 11 to 19
-   All blocks in the world now have mipmaps applied if enabled in video settings
    -   Blocks that did not have mipmaps before, such as different vines, rails, folliage (apart from leaves) and more should look better from higher distances
-   Client FPS is expected to be higher for most players

### Zombie Horse

-   Zombie Horses now spawn naturally
-   Zombie Horses spawn in darkness, and burn in sunlight like other undead mobs
-   Zombie Horses count towards the hostile mob cap and spawn with other hostile mobs
-   Zombie Horses do not display any hostile behavior towards players. Their hostility resides solely in their Zombie rider
-   Untamed Zombie Horses despawn like other hostile mobs
-   Tamed Zombie Horses are persistent and do not despawn
-   Zombie Horses can be tamed in the same fashion as regular Horses, and can then be mounted and controlled by a player
-   Zombie Horses can be healed and tempted using Red Mushrooms
-   Tamed Zombie Horses can be equipped with a Saddle and Horse Armor
-   Horse Armor protects Zombie Horses from sunlight damage
-   Zombie Horses have 25 health points (12.5 hearts) of health
-   Zombie Horses have variable movement speed and jump strength, determined when they spawn
-   Zombie Horses drops 2-3 Rotten Flesh when killed, with extra 0-1 for each level of Looting
-   Zombies riding Zombie Horses now have a chance of dropping a Red Mushroom on death

### Mob Spawning

-   Zombie Horses now has a chance to spawn in plains and savanna biome types, with a zombie rider holding an iron spear

### World Generation

-   Added various spears to various loot chests around the world
    -   Iron Spears can be found in Buried Treasure chests
    -   Copper and Iron Spears can be found in Weaponsmith chests in villages
    -   Stone Spears can be found in Ocean Ruin chests
    -   Diamond Spears can be found in Bastion Remnant and End City chests
-   Copper, Iron, Golden, and Diamond Nautilus Armor now have a chance to be found in the Chests for the following Structures:
    -   Buried Treasure
    -   Ocean Ruins
    -   Shipwreck

### Status Effects

-   Added `Breath of the Nautilus` effect
    -   Effect that affects mounted players
    -   Pauses player oxygen consumption (but does not replenish oxygen)

### Sounds

-   Anvil destroy, land, place and use sounds now play at a slightly lower volume

### Accessibility

-   Keys used to access debug features can now be rebound
    -   It is part of a new `Debug` category in the Key Binds screen
-   The debug modifier key can be bound separately from the debug overlay key
-   The key to toggle GUI can now be rebound
-   The key to toggle spectator shader effects, such as when spectating an enderman, can now be rebound

### Input

Several uses of the `cmd` key on Mac have been rebound to `ctrl`:

-   The input modfier to drop all items
-   The input modfier to include all the data when picking a block
-   The input modfier to change GUI scale in the Video Settings screen
-   Stopping the recipe book from cycling through variations of items

### Debug Renderer Changes

-   Same as before, do not treat debug renderers as supported features, they are there only to aid with development
-   More debug renderers are now available through the Debug Settings screen
-   Some existing renderers were improved
-   The performance of debug renderers has been significantly improved

### Graphics Presets

-   Settings on the Video Settings screen have been reordered and split into 3 sections: "Display", "Quality & Performance", and "Interface"
-   The following settings that were duplicating accessibility settings have been removed from the Video Settings screen:
    -   "View Bobbing"
    -   "Glint Speed"
    -   "Glint Strength"
    -   "FOV Effects"
    -   "Distortion Effects"
-   Tweaks that were previously hidden behind the "Graphics" setting have been split out to be configurable independently:
    -   "See-Through Leaves"
    -   "Show Vignette"
    -   "Weather Effect Radius" configures the distance in blocks within which rain and snow are visible
    -   "Improved Transparency" resolves some of the transparent geometry rendering issues at a significant GPU cost, previously was hidden behind "Fabulous!"
-   A new "Preset" slider was added to the top of the "Quality & Performance" section
    -   Presets, as you would expect based on gaming industry standard, control most of the "Quality & Performance" settings at once, not only the ones that were previously hidden behind the "Graphics" setting
    -   Available presets are "Fast", "Fancy", "Fabulous!" and "Custom"
    -   The default preset is "Fancy" for new players
    -   But for players who are upgrading to this version the preset will be set to "Custom" to preserve your current configuration

### UI

-   Menu sliders will now "stick" to the closest available value when you release them after dragging with a mouse
-   When using keyboard to change slider values, arrow keys will now move the slider to the next available value, not by one pixel as before
-   The `inF3` button in the Debug Option screen has been renamed to `inOverlay`

## Technical Changes

-   The Data Pack version is now 89.0
-   The Resource Pack version is now 70.0
-   The Minecraft Server Management Protocol version is now 1.1.0
-   Added ClientFps JFR event
-   Experience packets that do not change the player's experience progress or level are no longer sent by the server

### Minecraft Server Management Protocol Version 1.1.0

-   Added a new notification `server/activity`
    -   Indicates that a network connection to the server has been initiated
    -   Rate limited to 1 notification per 30 seconds

## Data Pack Version 89.0

-   Added `stopwatch` command for keeping track of real time

### Commands

**Added `stopwatch`**

-   New command that allows the creation of a Stopwatch that keeps track of real time
-   Stopwatches do not depend on game ticks
-   They only run when the server/world is running, even when paused

Syntax:

-   `stopwatch <id> create` - creates a Stopwatch with the given namespaced ID
-   `stopwatch <id> query` - shows the elapsed time in seconds of the given Stopwatch in chat
-   `stopwatch <id> restart` - restarts the given Stopwatch
-   `stopwatch <id> remove` - removes the given Stopwatch

> **Developer's Note**: _This command is added to replace the need of using world borders to keep track of real time. The intent is to change the world border to be dependent on game ticks in a future snapshot. If you've relied on this way of measuring the passage of real time before, please switch to using the new command and let us know if anything doesn't work as intended. Thank you!_

**`execute`**

-   Added new syntax `/execute if|unless stopwatch <id> <range>`
-   Allows to compare the elapsed time of a given Stopwatch with a floating point value range
    -   The Stopwatch value is measured in seconds and has an accuracy of at most a millisecond
    -   Example: `/execute if stopwatch foo:bar ..10 run say Stopwatch foo:bar has not reached 10 seconds yet`

### Item Components

**Added `minecraft:use_effects`**

-   Controls how the player behaves when using an item (right mouse click)
-   Format: object with fields
    -   `can_sprint`: boolean, whether the player can sprint while using this item
        -   Default value: `false`
    -   `speed_multiplier`: float (0 to 1), the speed multiplier applied to the player while using this item
        -   Default value: `0.2`
    -   e.g. `use_effects={can_sprint:true,speed_multiplier:1.0}`

**Added `minecraft:minimum_attack_charge`**

-   Sets the minimum attack charge on the attack indicator required to attack with this item
-   Format: float (0.0 to 1.0)
    -   0.0: no charge required
    -   1.0: full charge required

**Added `minecraft:damage_type`**

-   Specifies the type of damage this item deals
-   Format: string, damage type identifier
    -   e.g. `damage_type='minecraft:spear'`

**Added `minecraft:kinetic_weapon`**

-   Enables a charge-type attack when using the item (primarily for Spears), where, while being used, the damage is dealt along a ray every tick based on the relative speed of the entities
-   Format: object with fields
    -   `min_reach`: float, the minimum distance in blocks from the attacker to the target to be considered valid
        -   Default value: `0.0`
    -   `max_reach`: float, the maximum distance in blocks from the attacker to the target to be considered valid
        -   Default value: `3.0`
    -   `hitbox_margin`: float, the margin applied to the target bounding box when checking for valid hitbox collision
        -   Default value: `0.3`
    -   `delay_ticks`: integer, the time in ticks required before weapon is effective
        -   Default value: `0`
    -   `dismount_conditions`, `knockback_conditions`, `damage_conditions`: indicating the condition to apply dismount, knockback and damage effects respectively. Objects with fields:
        -   `max_duration_ticks`: integer, the ticks after which the condition is no longer checked. This starts after `delay` has elapsed
        -   `min_speed`: float, the minimum speed of the attacker, in blocks per second, along the direction that the attacker is looking
            -   Optional, default value: `0.0`
        -   `min_relative_speed`: float, the minimum relative speed between the attacker and target, in blocks per second, along the direction that the attacker is looking
            -   Optional, default value: `0.0`
    -   `forward_movement`: float, the distance the item moves out of hand during animation
        -   Default value: `0.0`
    -   `damage_multiplier`: float, the multiplier for the final damage from the relative speed
        -   Default value: `1.0`
    -   `sound`: Optional Sound Event to play when the weapon is engaged
    -   `hit_sound`: Optional Sound Event to play when the weapon hits an entity
    -   e.g. `kinetic_weapon={max_reach:5.0,forward_movement:1.0,delay:20,damage_conditions:{max_duration:60},knockback_conditions:{max_duration:40},dismount_conditions:{max_duration:20}}`
-   The damage dealt is calculated as `floor(relative_speed * velocity_multiplier)` where `relative_speed` is the difference of speed vectors of the attacker and the target as projected onto the axis of the attacker's view vector
    -   Any additional damage from enchantments or attribute modifiers is added after this calculation

**Added `minecraft:piercing_weapon`**

-   Enables a quick attack that damages multiple entities along a ray (primarily for Spears)
-   Format: object with fields
    -   `min_reach`, `max_reach`, `hitbox_margin`: as in `kinetic_weapon`
    -   `deals_knockback`: boolean, whether the attack deals knockback
        -   Default value: `true`
    -   `dismounts`: boolean, whether the attack dismounts the target
        -   Default value: `false`
    -   `sound`: Optional Sound Event to play when a player attacks with the weapon
    -   `hit_sound`: Optional Sound Event to play when the weapon hits an entity
    -   e.g. `piercing_weapon={min_reach:0,max_reach:4,dismounts:true}`

**Added `minecraft:swing_animation`**

-   Specifies the swing animation to play when attacking or interacting using this item
-   Format: object with fields
    -   `type`: string, the animation identifier (`none`, `whack`, `stab`)
        -   Default value: `whack`
    -   `duration`: integer, the duration in ticks
        -   Default value: `6`
    -   e.g. `swing_animation={type:'stab',duration:20}`

**Changed `minecraft:consumable`**

-   The `animation` field has been updated:
    -   Renamed `spear` to `trident`
    -   Added new `spear` animation

**Changed `minecraft:intangible_projectile`**

-   Items with this component now show information about it in their tooltip

### Entity Data

-   The `AngryAt` field has been renamed to `angry_at`
-   The `AngerTime` field has been removed
-   An `anger_end_time` (long) field has been added, containing the time anger ends in game ticks

### Damage Types

-   Added a new `minecraft:spear` damage type

### Predicates

**Component Predicates**

-   Component predicates (`predicates` field in block, item and entity predicates) now include predicates for checking existence of every component type
-   Those predicates are written as `{<component_type>: {}}`
-   Such predicate check passes as long as component is present, no matter the actual value
-   Existing predicates for specific components remain unchanged
-   Example:
    -   `{predicates:{written_book_content:{author:"foo"}}` - existing format for matching books
    -   `{predicates:{written_book_content:{}}` - special case of above that accepted any value, as long as component existed
    -   `{predicates:{instrument:{}}` - checks if component `minecraft:instrument` exists (was not allowed before)

**Entity Predicates**

The `flags` predicate now supports new values:

-   `is_in_water`: when an entity is touching water or a bubble column
-   `is_fall_flying`: when an entity is gliding with an elytra

**Item Predicates**

-   Item predicate in command form (`<item>[predicate~{...},component={...}]`) has been extended to accept empty predicates for any component type
-   Similarily to component predicates in data, those empty entries only check for component existence
-   Existing shorter syntax for checking component existence remains unchanged
    -   That means `*[instrument]` and `*[instrument~{}]` are equivalent

### Enchantments

**Enchantment Effect Components**

-   `minecraft:post_piercing_attack`: Effects applying after a piercing attack with an item

**Enchantment Entity Effects**

-   `minecraft:apply_impulse`: applies an impulse to the targeted entity
    -   `direction` - The first step of determining the impules is applying this vector as local coordinates (the same used by `tp @s ^ ^ ^`) onto the entity look vector
    -   `coordinate_scale` - The second step is scaling the resulting vector by this vector on each axis in world space, X, Y and Z
    -   `magnitude` - The third step is scaling the resulting vector by this Level-Based Value
-   `minecraft:play_sound`: can now support a list of sound event identifiers, one for each level of enchantment. If a level is higher than the number of sounds, the last sound in the list is used

**Added `exponent`**

-   Raises the base to the specified power level.
    -   `base` - Level-Based Value indicating the base of the exponent.
    -   `power` - Level-Based Value indicating the power of the exponent.

### Tags

**Block Tags**

-   Added `#can_glide_through` - climbable blocks that can be glided through without stopping

**Item Tags**

-   Added `#nautilus_taming_items` - items that can be used to tame a Nautilus and a Zombie Nautilus
-   Added `#nautilus_bucket_food` - bucketed fish items that can be used to feed a tamed Nautilus and Zombie Nautilus
-   Added `#nautilus_food` - all items that can be used to feed a tamed Nautilus and Zombie Nautilus
-   Added `#spears` - all Spear weapons
-   Added `#enchantable/lunge` - all items that can be enchanted with the `lunge` enchantment
-   Added `#enchantable/melee_weapon` - all primary melee weapons including Swords and Spears
-   Renamed `#enchantable/sword` to `#enchantable/sweeping`

**Entity Tags**

-   Added `#can_wear_nautilus_armor` - entities that can equip Nautilus Armor
-   Added `#nautilus_hostiles` - entities that the Nautilus will be hostile towards when untamed
-   Changed `#not_scary_for_pufferfish` to include Nautilus and Zombie Nautilus
-   Added `#burn_in_daylight` - entities that burn in daylight

**Enchantment Tags**

-   Added `#lunge_exclusive` - all enchantments incompatible with the `lunge` enchantment

## Resource Pack Version 70.0

-   Unifont has been updated to 17.0.01

## Textures

-   `texture` section of `*.mcmeta` files has a new boolean field `darkened_cutout_mipmap`
    -   The default value is `false`
    -   It is set to true for the block textures that had mipmaps before this version: all Leave types and Mangrove Roots
    -   If the field is set to `true` and the texture is cutout the mipmaps will be darkened to emulate the darker interior of the block, this was the behavior for cutout mipmapped blocks before this version
    -   Leaving the field unset or setting it to `false` will generate mipmaps without darkening, and it fits well for other types of cutout blocks that do not have dark interior such as flowers, grasses, vines, rails, etc
-   Only mipmaps of level 0 and 1 are now animated for block animated textures
-   Glass and Glass Pane now support translucent textures

### Item Sprites

-   Added new item sprites:
    -   `item/nautilus_spawn_egg`
    -   `item/zombie_nautilus_spawn_egg`
    -   `item/copper_nautilus_armor`
    -   `item/iron_nautilus_armor`
    -   `item/golden_nautilus_armor`
    -   `item/diamond_nautilus_armor`
    -   `item/netherite_nautilus_armor`
-   Added the following item sprites for the Spear weapon:
    -   When in inventory: `item/wooden_spear`, `item/stone_spear`, `item/copper_spear`, `item/iron_spear`, `item/golden_spear`, `item/diamond_spear`, `item/netherite_spear`
    -   When in hand: `item/wooden_spear_in_hand`, `item/stone_spear_in_hand`, `item/copper_spear_in_hand`, `item/iron_spear_in_hand`, `item/golden_spear_in_hand`, `item/diamond_spear_in_hand`, `item/netherite_spear_in_hand`

### UI Sprites

-   Added new UI sprite:
    -   `container/slot/nautilus_armor`
    -   `container/slot/spear` - Spear icon used in the Smithing Table screen
-   Added new nine-sliced sprites:
    -   `container/inventory/effect_background`
    -   `container/inventory/effect_background_ambient`
-   Removed the following sprites:
    -   `container/inventory/effect_background_large`
    -   `container/inventory/effect_background_small`

### Celestials Atlas

-   A new `celestials` atlas has been introduced, including sprites for objects rendered in the sky such as the Sun and Moon
-   Includes sprites from `<namespace>:textures/environment/celestial/<path>.png`
-   The following textures have been moved or split:
    -   `textures/environment/sun.png` -> `sun`
    -   `textures/environment/end_flash.png` -> `end_flash`
    -   `textures/environment/moon_phases` -> `moon/full_moon`, `moon/waning_gibbous`, `moon/third_quarter`, `moon/waning_crescent`, `moon/new_moon`, `moon/waxing_crescent`, `moon/first_quarter`, `moon/waxing_gibbous`

### Mob Effect Sprites

-   Added new mob effect sprite:
    -   `breath_of_the_nautilus`

### Entity Textures

-   Added new entity textures:
    -   `entity/nautilus/nautilus.png`
    -   `entity/nautilus/nautilus_baby.png`
    -   `entity/nautilus/zombie_nautilus.png`
    -   `entity/equipment/nautilus_body/copper.png`
    -   `entity/equipment/nautilus_body/iron.png`
    -   `entity/equipment/nautilus_body/gold.png`
    -   `entity/equipment/nautilus_body/diamond.png`
    -   `entity/equipment/nautilus_body/netherite.png`
    -   `entity/equipment/nautilus_saddle/saddle.png`

### Sounds

-   Added new sounds for Spears:
    -   `item.spear.hit`
    -   `item.spear.use`
    -   `item.spear.attack`
-   Added special sounds for the Wooden Spear:
    -   `item.spear_wood.hit`
    -   `item.spear_wood.use`
    -   `item.spear_wood.attack`
-   Added new sound events for the Lunge Enchantment:
    -   `item.spear.lunge_1`
    -   `item.spear.lunge_2`
    -   `item.spear.lunge_3`
-   Added new sound events for the Nautilus:
    -   `entity.baby_nautilus.ambient`
    -   `entity.baby_nautilus.death`
    -   `entity.baby_nautilus.eat`
    -   `entity.baby_nautilus.hurt`
    -   `entity.baby_nautilus.swim`
    -   `entity.nautilus.ambient`
    -   `entity.nautilus.death`
    -   `entity.nautilus.dash`
    -   `entity.nautilus.dash_ready`
    -   `entity.nautilus.eat`
    -   `entity.nautilus.hurt`
    -   `entity.nautilus.swim`
    -   `entity.zombie_nautilus.ambient`
    -   `entity.zombie_nautilus.death`
    -   `entity.zombie_nautilus.dash`
    -   `entity.zombie_nautilus.dash_ready`
    -   `entity.zombie_nautilus.eat`
    -   `entity.zombie_nautilus.hurt`
    -   `entity.zombie_nautilus.swim`
    -   `item.nautilus_armor.equip`
    -   `item.nautilus_armor.unequip`
-   Added new sound event for the Zombie Horse:
    -   `entity.zombie_horse.angry`

### Item Models

-   Added new option for all item models: `swap_animation_scale`
    -   Defaults to `1.0`
    -   Indicates how fast the item moves up and down when swapping items in hotbar
    -   Large speeds can allow items that take more of the screen space to fully duck before swapped into the next item

Added new item model:

-   `spear_in_hand` - model for the Spear when in hand.

## Fixed bugs in 25w41a

-   [MC-22882](https://bugs.mojang.com/browse/MC-22882) Ctrl + Q doesn't work on Mac
-   [MC-54989](https://bugs.mojang.com/browse/MC-54989) Sliders can be moved to positions between available values
-   [MC-80476](https://bugs.mojang.com/browse/MC-80476) On macOS, the "drop item stack" shortcut conflicts with the "quit Minecraft" shortcut
-   [MC-114265](https://bugs.mojang.com/browse/MC-114265) Mipmaps are too dark around transparent edges in textures (e.g. side of grass)
-   [MC-146862](https://bugs.mojang.com/browse/MC-146862) Long effect names cause text to appear outside the effect box
-   [MC-147718](https://bugs.mojang.com/browse/MC-147718) F1, F3, F3+;;[;;char;;];; combos cannot be rebound
-   [MC-159275](https://bugs.mojang.com/browse/MC-159275) Map player markers on maps of the nether don't rotate when doDaylightCycle is disabled
-   [MC-162573](https://bugs.mojang.com/browse/MC-162573) A white outline is rendered on composters' edges when viewed from far away
-   [MC-171688](https://bugs.mojang.com/browse/MC-171688) Invisibility status of LivingEntity is not updated when ActiveEffects are modified directly
-   [MC-195505](https://bugs.mojang.com/browse/MC-195505) Short grass is unaffected by mipmap levels
-   [MC-234358](https://bugs.mojang.com/browse/MC-234358) Moiré patterns / aliasing on certain objects when viewed from a distance
-   [MC-241862](https://bugs.mojang.com/browse/MC-241862) It sometimes requires multiple keyboard inputs to change values on sliders
-   [MC-248499](https://bugs.mojang.com/browse/MC-248499) Potion UIs displayed within the inventory don't have cyan outlines if the effects are granted by beacons or conduits
-   [MC-264151](https://bugs.mojang.com/browse/MC-264151) Glass blocks do not use mipmapping, but glass panes do
-   [MC-267364](https://bugs.mojang.com/browse/MC-267364) Teleporting in the air is considered flying by server
-   [MC-271941](https://bugs.mojang.com/browse/MC-271941) Music discs can sometimes spawn inside jukeboxes when ejected from them
-   [MC-276445](https://bugs.mojang.com/browse/MC-276445) Highlighted text within the anvil and creative inventory interfaces renders blue making it difficult to read
-   [MC-278742](https://bugs.mojang.com/browse/MC-278742) Creakings cannot be ridden by any entities using commands
-   [MC-279076](https://bugs.mojang.com/browse/MC-279076) Certain mobs will always retarget the player upon reloading the chunks, regardless of distance or gamemode
-   [MC-295949](https://bugs.mojang.com/browse/MC-295949) Flying through vines with an elytra cancels the flight
-   [MC-296952](https://bugs.mojang.com/browse/MC-296952) F4 key to toggle shaders cannot be rebound
-   [MC-297328](https://bugs.mojang.com/browse/MC-297328) Unloading and reloading an area causes invisible entities to be visible until you get close enough.
-   [MC-297367](https://bugs.mojang.com/browse/MC-297367) Checkbox filled status isn't narrated
-   [MC-298767](https://bugs.mojang.com/browse/MC-298767) Piercing arrows phase through mobs that are in the same block
-   [MC-298915](https://bugs.mojang.com/browse/MC-298915) Multishot crossbows loaded in survival or adventure mode show their secondary charged projectiles on a separate line in the tooltip
-   [MC-299196](https://bugs.mojang.com/browse/MC-299196) Waypoints fade out when an advancement is granted
-   [MC-300979](https://bugs.mojang.com/browse/MC-300979) The movement and duration messages in the demo introduction screen now have a text shadow
-   [MC-301595](https://bugs.mojang.com/browse/MC-301595) Music toasts briefly appear in the pause menu after a song has finished
-   [MC-301632](https://bugs.mojang.com/browse/MC-301632) Comparators measuring jukeboxes do not update when a music disc is taken out of a jukebox if the music disc has already finished its song
-   [MC-301754](https://bugs.mojang.com/browse/MC-301754) The hand animation plays when right-clicking shelves with nothing in your hand
-   [MC-301763](https://bugs.mojang.com/browse/MC-301763) The outline of the “Invited” element within the realms “Players” tab renders above other tabs when selected and when a scroll bar is present
-   [MC-301805](https://bugs.mojang.com/browse/MC-301805) Selected item outline on statistics screen renders outside of scissor area
-   [MC-302030](https://bugs.mojang.com/browse/MC-302030) Setting commandBlocksEnabled to false prevents command blocks from being edited
-   [MC-302254](https://bugs.mojang.com/browse/MC-302254) Cursor changes do not work for command suggestions
-   [MC-302288](https://bugs.mojang.com/browse/MC-302288) All shelves have the oak tan map color
-   [MC-302549](https://bugs.mojang.com/browse/MC-302549) Server main thread deadlock during respawn position resolution when the entire world spawn radius is filled with fluids
-   [MC-302601](https://bugs.mojang.com/browse/MC-302601) A white outline is rendered on anvils' top texture when viewed from far away

---

# Minecraft 1.21.10 Release Candidate 1

Today we are shipping Release Candidate 1 for 1.21.10, a hotfix release fixing a couple of issues that have bubbled up to the surface following the release of The Copper Age drop.

Happy mining!

## Fixed bugs in 1.21.10 Release Candidate 1

-   [MC-211096](https://bugs.mojang.com/browse/MC-211096) Entities in cobwebs clip though pistons
-   [MC-278182](https://bugs.mojang.com/browse/MC-278182) Items glitch inside the piston head when pushed through powder snow or cobwebs
-   [MC-301916](https://bugs.mojang.com/browse/MC-301916) The behavior of wind charges when colliding with certain blocks is different
-   [MC-302321](https://bugs.mojang.com/browse/MC-302321) Chunks don't load while the player is being teleported
-   [MC-302383](https://bugs.mojang.com/browse/MC-302383) Rooms with carpet on the floor cannot have maps in item frames placed on walls touching the floor
-   [MC-302405](https://bugs.mojang.com/browse/MC-302405) Repeating(or chain) command block with any form of /tp ;;[;;player;;];; doesn't constantly tp player to one spot
-   Fixed an issue that caused entities on bubble columns to fly high up into the air

---

# Minecraft 1.21.9 Release Candidate 1

We are now releasing the first, and hopefully only, release-candidate for 1.21.9. If all goes well, no further changes will be made before the full release. Happy mining!

## Fixed bugs in 1.21.9 Release Candidate 1

-   [MC-302243](https://bugs.mojang.com/browse/MC-302243) Creakings can spawn with the "spawnMonsters" game rule set to false
-   [MC-302278](https://bugs.mojang.com/browse/MC-302278) The texture in the middle of conduits is upside down

---

# Minecraft 1.21.9 Pre-Release 4

Here is another Pre-Release for 1.21.9 with more bugfixes!

## Changes

### UI

-   Debug Options screen is now accessible using F3 + F6, instead of the previous F3 + F5

## Fixed bugs in 1.21.9 Pre-Release 4

-   [MC-300216](https://bugs.mojang.com/browse/MC-300216) The new F3 + F5 debug settings menu does not open on Mac keyboards
-   [MC-301735](https://bugs.mojang.com/browse/MC-301735) Server Management Protocol Kick command parameter mis match
-   [MC-302039](https://bugs.mojang.com/browse/MC-302039) Conduits don't have the block-breaking animation.
-   [MC-302119](https://bugs.mojang.com/browse/MC-302119) Shield with patterns has no enchantment glint when enchanted
-   [MC-302130](https://bugs.mojang.com/browse/MC-302130) Mobs have visual glitches all over them
-   [MC-302170](https://bugs.mojang.com/browse/MC-302170) Player Heads do not Glow
-   [MC-302240](https://bugs.mojang.com/browse/MC-302240) Bugs on ranged weapons

---

# Minecraft 1.21.9 Pre-Release 3

We'll kick the week off with a third pre-release for the Copper Age Drop. This pre-release includes a performance update and bug fix for the copper golem.

## Fixed bugs in 1.21.9 Pre-Release 3

-   [MC-301963](https://bugs.mojang.com/browse/MC-301963) Copper golems cause huge lag spikes when checking chests
-   [MC-301990](https://bugs.mojang.com/browse/MC-301990) Copper golem statues cause culling issues when placed above certain blocks

---

# Minecraft 1.21.9 Pre-Release 2

We heard Friday would be a Pre-tty cool day to release the second Pre-Release for Minecraft: Java Edition 1.21.9, so here we are! This pre-release contains fixes to various issues introduced in previous snapshots, as well as a missed bump to the Data Pack major version.

Happy Crafting!

## Changes

-   Copper Golems will now oxidize even when the game rule `doDaylightCycle` is disabled
-   The Copper Golem's behavior for turning into a statue has been tweaked to match Bedrock
    -   Copper Golems no longer need to be close to the center of an empty block position in order to turn into a statue
    -   Copper Golems now have the possibility to turn into a statue as soon as they become fully oxidized

## Technical Changes

-   The Data Pack version is now 88.0, to match the breaking change to `/setworldspawn` and `/spawnpoint` in the 1.21.9-pre1

## Fixed bugs in 1.21.9 Pre-Release 2

-   [MC-300362](https://bugs.mojang.com/browse/MC-300362) Copper golems do not oxidize when doDaylightCycle is disabled
-   [MC-301566](https://bugs.mojang.com/browse/MC-301566) Occasional sound crash on resource pack reload
-   [MC-301706](https://bugs.mojang.com/browse/MC-301706) Server Management Protocol does not support parameters as object (by-name)
-   [MC-301770](https://bugs.mojang.com/browse/MC-301770) The `below_name` plate is not displayed higher for players and mannequins named “deadmau5”
-   [MC-301963](https://bugs.mojang.com/browse/MC-301963) Copper golems cause huge lag spikes when checking chests
-   [MC-302088](https://bugs.mojang.com/browse/MC-302088) Oxidized Copper Golems take an extremely long time to turn into a statue
-   [MC-302112](https://bugs.mojang.com/browse/MC-302112) Posed mannequins don't use the correct hitbox
-   [MC-302117](https://bugs.mojang.com/browse/MC-302117) Text display billboarding is broken
-   [MC-302120](https://bugs.mojang.com/browse/MC-302120) Dimension-specific world spawn point causes mob spawning in other dimensions to fail
-   [MC-302148](https://bugs.mojang.com/browse/MC-302148) Copper Golem does not get close enough to search the chest, getting permanently stuck
-   [MC-302164](https://bugs.mojang.com/browse/MC-302164) Breaking change to /setworldspawn and /spawnpoint in minor datapack version

---

# Minecraft 1.21.9 Pre-Release 1

The copper age is approaching and it's time for this drop's first pre-release. Today's release includes more copper golem improvements, some changes to the mannequins and several bug fixes. Pre-releases don't follow the regular Tuesday release schedule, so keep an eye out for the next one.

## Changes

### Minor Tweaks to Blocks, Items and Entities

-   Copper Golem now only tries to open Chests that are neighboring blocks when it's a passenger

### Minecraft Server Management Protocol

-   Notifications now use `minecraft:notification/` prefix instead of `notification:`

## Technical Changes

-   The Data Pack version is now 87.1

## Data Pack Version 87.1

### Mannequins

-   Mannequins description text can now be configured
-   Mannequins now accept `minecraft:profile` component from spawner items

**Modified Data Fields**

-   `profile` - now has the same format as a `minecraft:profile` component (which has been extended to allow overrides), defaults to `{}` (i.e. static profile with both `id` and `name` missing)

**New Data Fields**

-   `pose` - The pose of the Mannequin
    -   Valid entries: `standing`, `crouching`, `swimming`, `fall_flying`, `sleeping`
-   `immovable` - Optional boolean specifying that the Mannequin cannot be moved (defaults to `false`)
-   `description` - Optional Text Component shown where a Player's `below_score` score would show
    -   The default "NPC" (`entity.minecraft.mannequin.label`) text is shown if omitted
-   `hide_description` - Optional boolean specifying that no description should be shown at all
    -   A Mannequin with the description hidden displays as if a Player had no `below_score` display

### Commands

-   The `spawnpoint` command now optionally takes in a `pitch` argument
-   The `setworldspawn` command is no longer limited to the overworld
    -   This means players can respawn e.g. in the Nether when they have no bed or respawn anchor
    -   It now also takes in an optional `pitch` argument
-   Server commands now run from the respawn dimension by default instead of always the overworld
-   The `fetchprofile` command now also prints a clickable text to summon a Mannequin with the resolved profile

### Data Components

**Modified `minecraft:profile`**

-   Profiles can now also have additional fields that can replace various values used for rendering
-   If any of the fields are omitted, the value from the resolved profile is used, even if the profile resolved to the default skin
-   New fields
    -   `texture` - Optional namespaced ID of the skin texture to use for rendering
        -   The skin is specified relative to the `textures` folder and with a `.png` suffix
        -   e.g. `entity/player/wide/steve` will use the default wide Steve skin
    -   `cape` - Optional namespaced ID of the cape texture to use for rendering
        -   When specified, uses the same format as the `texture` field
    -   `elytra` - Optional namespaced ID of the elytra texture to use for rendering
        -   When specified, uses the same format as the `texture` field
        -   If this value is not present either as override or in player profile, Mannequins using this profile will use the cape texture, or if that is also not present, the default Elytra texture when wearing Elytra
    -   `model` - Optional model type, one of `wide` and `slim`

### Entity Data

**Modified `minecraft:player`**

-   Changes to the `respawn` object
    -   `angle` has been renamed to `yaw` and is now a required field
    -   `pitch` has been added as a required field
    -   `dimension` is now a required field

### Loot Functions

**`minecraft:copy_name`**

-   The `source` field now accepts new context values:
    -   `direct_attacker`
    -   `target_entity`
    -   `interacting_entity`

**`minecraft:copy_components`**

-   The `source` field now accepts new context values:
    -   `this`
    -   `attacker`
    -   `direct_attacker`
    -   `attacking_player`
    -   `target_entity`
    -   `interacting_entity`
    -   `tool`

## Fixed bugs in 1.21.9 Pre-Release 1

-   [MC-160528](https://bugs.mojang.com/browse/MC-160528) End portals do not negate fall damage
-   [MC-243759](https://bugs.mojang.com/browse/MC-243759) Explosions won't damage an entity if the distance to its eyes is 0
-   [MC-300257](https://bugs.mojang.com/browse/MC-300257) Lightning does not reset copper golem oxidation
-   [MC-300294](https://bugs.mojang.com/browse/MC-300294) Copper golems pathfind to chests incorrectly
-   [MC-300687](https://bugs.mojang.com/browse/MC-300687) The copper chains and bars aren't organized correctly in the Creative inventory
-   [MC-300881](https://bugs.mojang.com/browse/MC-300881) The skin preview in the skin reporting screen is no longer interactive
-   [MC-301409](https://bugs.mojang.com/browse/MC-301409) Acceleration power of fireballs and wind charges gets halved when they are redirected by explosions
-   [MC-301414](https://bugs.mojang.com/browse/MC-301414) Scraping oxidation off double chests doesn't produce particles on the half of the chest that wasn’t directly interacted with
-   [MC-301424](https://bugs.mojang.com/browse/MC-301424) entity;;_;;data item component detection is broken in resource packs
-   [MC-301541](https://bugs.mojang.com/browse/MC-301541) Copper golems no longer sort items when in minecarts
-   [MC-301569](https://bugs.mojang.com/browse/MC-301569) Sounds of copper chests and all variants are too quiet and sound low-quality compared to before
-   [MC-301573](https://bugs.mojang.com/browse/MC-301573) Relative teleportation across dimensions is inconsistent
-   [MC-301798](https://bugs.mojang.com/browse/MC-301798) Copper golems do not open chests with specific transparent/non-full blocks above them
-   [MC-301814](https://bugs.mojang.com/browse/MC-301814) CustomNameVisible does not work for mannequins (for the name, not the NPC annotation)
-   [MC-301815](https://bugs.mojang.com/browse/MC-301815) Mannequin data is sometimes lost when using spawn eggs
-   [MC-301819](https://bugs.mojang.com/browse/MC-301819) Mannequins' name tags are visible when on a team and ridden
-   [MC-301862](https://bugs.mojang.com/browse/MC-301862) When clicking a command suggestion in chat, it occasionally selects half of the new word
-   [MC-301883](https://bugs.mojang.com/browse/MC-301883) Entities going through portals with their Motion set to more than 10 on an axis have their Motion tag reset
-   [MC-301893](https://bugs.mojang.com/browse/MC-301893) When a copper golem is leashed by a player and then oxidizes into a statue, it will not drop the lead
-   [MC-301951](https://bugs.mojang.com/browse/MC-301951) Misleading description for operator;;_;;user;;_;;permission;;_;;level in server management protocol documentation
-   [MC-301979](https://bugs.mojang.com/browse/MC-301979) Copper golems no longer properly check chests
-   [MC-301984](https://bugs.mojang.com/browse/MC-301984) Teleporting a player to their own position is now jittery/frozen
-   [MC-301991](https://bugs.mojang.com/browse/MC-301991) deprecated.json has some renamed keys pointing to text values instead of the new keys
-   [MC-302032](https://bugs.mojang.com/browse/MC-302032) Static profiles no longer resolve texture data unless an id or name is provided
-   [MC-302089](https://bugs.mojang.com/browse/MC-302089) Game crashes when flying mobs start pathfinding in debug mode
-   [MC-302092](https://bugs.mojang.com/browse/MC-302092) Crash when placing iron bars next to stairs, when stairs are added to #bars tag
-   [MC-302094](https://bugs.mojang.com/browse/MC-302094) Crash when adding blocks to #copper;;_;;chests then placing it next to actual copper chests
-   [MC-302095](https://bugs.mojang.com/browse/MC-302095) Crash when adding blocks to #lightning;;_;;rods and summoning a lightning over it
-   [MC-302096](https://bugs.mojang.com/browse/MC-302096) Crash when adding blocks to #wooden;;_;;shelves, placing it next to wooden shelf, then powering the shelf

---

