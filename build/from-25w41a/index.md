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

#### Zombie Nautilus

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

#### Jab Attack

-   Quick-press primary action button to use
-   Low damage attack with knockback
-   Cooldown between attacks
-   Wooden Spears have the fastest cooldown; Netherite the slowest
-   Can hit multiple enemies
-   Does not destroy blocks

#### Charge Attack

-   Press and hold the secondary action button to use
-   Damage is based on Spear material, the player’s view angle, and the velocity of both the player and the target
-   While holding down the button, the attack goes through three stages before returning to idle:
    -   Engaged: The Spear can deal damage, knockback, and dismount mounted enemies if the speed is above the required thresholds
    -   Tired: Indicated by the Spear rotating to a vertical position and shaking. The Spear can deal damage and knockback (but not dismount) if the speed is above the required thresholds
    -   Disengaged: Indicated by the Spear being lowered, pointing downwards. The Spear gives damage but not knockback or dismount if the speed is above the required threshold
-   The Spear's range when used by mobs is half of that when used by players, but they can deal damage, dismount and knockback at lower speeds than the players
-   Zombies, Husks and Zombified Piglins know how to charge with a Spear

#### Lunge Enchantment

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

#### Added `stopwatch`

-   New command that allows the creation of a Stopwatch that keeps track of real time
-   Stopwatches do not depend on game ticks
-   They only run when the server/world is running, even when paused

Syntax:

-   `stopwatch <id> create` - creates a Stopwatch with the given namespaced ID
-   `stopwatch <id> query` - shows the elapsed time in seconds of the given Stopwatch in chat
-   `stopwatch <id> restart` - restarts the given Stopwatch
-   `stopwatch <id> remove` - removes the given Stopwatch

> **Developer's Note**: _This command is added to replace the need of using world borders to keep track of real time. The intent is to change the world border to be dependent on game ticks in a future snapshot. If you've relied on this way of measuring the passage of real time before, please switch to using the new command and let us know if anything doesn't work as intended. Thank you!_

#### `execute`

-   Added new syntax `/execute if|unless stopwatch <id> <range>`
-   Allows to compare the elapsed time of a given Stopwatch with a floating point value range
    -   The Stopwatch value is measured in seconds and has an accuracy of at most a millisecond
    -   Example: `/execute if stopwatch foo:bar ..10 run say Stopwatch foo:bar has not reached 10 seconds yet`

### Item Components

#### Added `minecraft:use_effects`

-   Controls how the player behaves when using an item (right mouse click)
-   Format: object with fields
    -   `can_sprint`: boolean, whether the player can sprint while using this item
        -   Default value: `false`
    -   `speed_multiplier`: float (0 to 1), the speed multiplier applied to the player while using this item
        -   Default value: `0.2`
    -   e.g. `use_effects={can_sprint:true,speed_multiplier:1.0}`

#### Added `minecraft:minimum_attack_charge`

-   Sets the minimum attack charge on the attack indicator required to attack with this item
-   Format: float (0.0 to 1.0)
    -   0.0: no charge required
    -   1.0: full charge required

#### Added `minecraft:damage_type`

-   Specifies the type of damage this item deals
-   Format: string, damage type identifier
    -   e.g. `damage_type='minecraft:spear'`

#### Added `minecraft:kinetic_weapon`

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

#### Added `minecraft:piercing_weapon`

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

#### Added `minecraft:swing_animation`

-   Specifies the swing animation to play when attacking or interacting using this item
-   Format: object with fields
    -   `type`: string, the animation identifier (`none`, `whack`, `stab`)
        -   Default value: `whack`
    -   `duration`: integer, the duration in ticks
        -   Default value: `6`
    -   e.g. `swing_animation={type:'stab',duration:20}`

#### Changed `minecraft:consumable`

-   The `animation` field has been updated:
    -   Renamed `spear` to `trident`
    -   Added new `spear` animation

#### Changed `minecraft:intangible_projectile`

-   Items with this component now show information about it in their tooltip

### Entity Data

-   The `AngryAt` field has been renamed to `angry_at`
-   The `AngerTime` field has been removed
-   An `anger_end_time` (long) field has been added, containing the time anger ends in game ticks

### Damage Types

-   Added a new `minecraft:spear` damage type

### Predicates

#### Component Predicates

-   Component predicates (`predicates` field in block, item and entity predicates) now include predicates for checking existence of every component type
-   Those predicates are written as `{<component_type>: {}}`
-   Such predicate check passes as long as component is present, no matter the actual value
-   Existing predicates for specific components remain unchanged
-   Example:
    -   `{predicates:{written_book_content:{author:"foo"}}` - existing format for matching books
    -   `{predicates:{written_book_content:{}}` - special case of above that accepted any value, as long as component existed
    -   `{predicates:{instrument:{}}` - checks if component `minecraft:instrument` exists (was not allowed before)

#### Entity Predicates

The `flags` predicate now supports new values:

-   `is_in_water`: when an entity is touching water or a bubble column
-   `is_fall_flying`: when an entity is gliding with an elytra

#### Item Predicates

-   Item predicate in command form (`<item>[predicate~{...},component={...}]`) has been extended to accept empty predicates for any component type
-   Similarily to component predicates in data, those empty entries only check for component existence
-   Existing shorter syntax for checking component existence remains unchanged
    -   That means `*[instrument]` and `*[instrument~{}]` are equivalent

### Enchantments

#### Enchantment Effect Components

-   `minecraft:post_piercing_attack`: Effects applying after a piercing attack with an item

#### Enchantment Entity Effects

-   `minecraft:apply_impulse`: applies an impulse to the targeted entity
    -   `direction` - The first step of determining the impules is applying this vector as local coordinates (the same used by `tp @s ^ ^ ^`) onto the entity look vector
    -   `coordinate_scale` - The second step is scaling the resulting vector by this vector on each axis in world space, X, Y and Z
    -   `magnitude` - The third step is scaling the resulting vector by this Level-Based Value
-   `minecraft:play_sound`: can now support a list of sound event identifiers, one for each level of enchantment. If a level is higher than the number of sounds, the last sound in the list is used

##### Added `exponent`

-   Raises the base to the specified power level.
    -   `base` - Level-Based Value indicating the base of the exponent.
    -   `power` - Level-Based Value indicating the power of the exponent.

### Tags

#### Block Tags

-   Added `#can_glide_through` - climbable blocks that can be glided through without stopping

#### Item Tags

-   Added `#nautilus_taming_items` - items that can be used to tame a Nautilus and a Zombie Nautilus
-   Added `#nautilus_bucket_food` - bucketed fish items that can be used to feed a tamed Nautilus and Zombie Nautilus
-   Added `#nautilus_food` - all items that can be used to feed a tamed Nautilus and Zombie Nautilus
-   Added `#spears` - all Spear weapons
-   Added `#enchantable/lunge` - all items that can be enchanted with the `lunge` enchantment
-   Added `#enchantable/melee_weapon` - all primary melee weapons including Swords and Spears
-   Renamed `#enchantable/sword` to `#enchantable/sweeping`

#### Entity Tags

-   Added `#can_wear_nautilus_armor` - entities that can equip Nautilus Armor
-   Added `#nautilus_hostiles` - entities that the Nautilus will be hostile towards when untamed
-   Changed `#not_scary_for_pufferfish` to include Nautilus and Zombie Nautilus
-   Added `#burn_in_daylight` - entities that burn in daylight

#### Enchantment Tags

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
-   [MC-147718](https://bugs.mojang.com/browse/MC-147718) F1, F3, F3+\[char\] combos cannot be rebound
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

A new week, and a new snapshot. This one includes another big batch of bug fixes, copper golem polishing and our beloved friend can now open doors.

Happy mining!

## Changes

-   OpenGL 3.3 is now required to play the game, up from 3.2. This does not change our posted Minimum Requirements

> **Developer’s Note:** _We do not expect the update to OpenGL version to affect many people, if any at all. Our posted Minimum Requirements has been OpenGL 4.0 since 2017, and OpenGL 3.3 turned 15 years old recently._

### Minor Tweaks to Blocks, Items and Entities

-   Fixed a bug where breaking a Shelf while another player is interacting with it could lead to visual bugs in the player inventory
-   Copper Golems hitbox has been tweaked
    -   The hitbox is now 0.49 blocks in width to be able to pathfind through narrow spaces
-   Copper Golems can now open doors
-   Test Instance Blocks now preserve error markers between world reloads
-   Ambient lighting on entities has been adjusted to be more visually in line with blocks and other parts of the game
    -   The underside of flat surfaces will now be lit from that direction, instead of the opposite direction
    -   This mainly affects models containing cubes that are either flat or "hollow" such as:
        -   Worn armor
        -   Worn Elytra
        -   The outside layers on player skins
        -   The ribcages of Skeletons or Skeleton Horses
        -   The feet of Chickens or Frogs
        -   The wings of Phantoms or the Ender Dragon
        -   The fins on fish
        -   And more!

### Game Mode Switching

-   Switching from Spectator Mode to Creative Mode no longer causes the player to stop flying
    -   Instead, flight now only gets disabled when switching game modes if the player is near the ground
        -   A player is considered to be near the ground if there is a collidable surface (i.e. blocks, Happy Ghasts, boats...) within 1 block below them
    -   Flight will not get disabled if the player was inside a block or collidable entity
        -   This is to prevent players from suddenly falling through the ground

> **Developer's Note**: _This change is a partial revert of a bugfix from a previous snapshot. Even though the old behavior prior to the fix was unintended, the approach we took to fixing flight didn't quite **land** the way we wanted it to. In response to community feedback, we're trying this new approach as a less disruptive alternative._

### Minecraft Server Management Protocol

-   Clients must authenticate to access the API
    -   Clients should supply an `Authorization` bearer token header with a server specific secret
    -   The secret is configured in the server properties file
        -   `management-server-secret=`
        -   The secret should be exactly 40 alphanumeric characters (A-Z, a-z, 0-9)
        -   The secret will be automatically generated if the server property is empty
        -   Unauthorized requests are rejected with 401 Unauthorized
-   TLS is enabled by default
    -   Can be disabled in the server properties file
        -   `management-server-tls-enabled=false`
    -   Requires a keystore file to be set in the server properties file
        -   `management-server-tls-keystore=path/to/keystore.p12`
    -   The keystore file must be in PKCS12 format
    -   Keystore password can be set in the following ways, in order of priority
        -   Environment variable: `MINECRAFT_MANAGEMENT_TLS_KEYSTORE_PASSWORD`
        -   JVM argument: `-Dmanagement.tls.keystore.password=`
        -   Server property: `management-server-tls-keystore-password=`

### Server Properties

-   Default value of `management-server-port` was changed from `25585` to `0`, assigning an available port each time management server is started
-   Added server property `management-server-tls-enabled` controlling whether the Minecraft Server Management Protocol uses TLS or not
    -   Defaults to `true`
-   Added server property `management-server-tls-keystore` controlling the path to the keystore file used for TLS
    -   Defaults to an empty string
    -   A dedicated server won't start when TLS is enabled and no keystore is provided
-   Added server property `management-server-tls-keystore-password` controlling the password to the keystore file used for TLS
    -   Defaults to an empty string

### Game Rules

-   Added `spawnerBlocksEnabled` game rule controlling if Spawner Blocks should be enabled or not
    -   Defaults to `true`

### Mob Spawning

-   Logic for choosing type of equipment for mobs spawning with equipment has been tweaked to add Copper as a possibility
    -   The initial roll to choose a type now chooses between Leather, Copper and Gold
    -   The chance to increase an armor tier has increased from 9.5% to 10.87%

### Sounds

-   Some sound sliders in the Music & Sound Options now play a preview sound when adjusting the setting outside a world

### UI

-   The Resource Pack and Data Pack selection screens now have a search box

## Technical Changes

-   The Data Pack version is now 87.0
-   The Resource Pack version is now 69.0
-   Some previously hidden debug features have been exposed to players

### Debug features

-   Some debug features that were previously removed during compilation are now preserved and can be used by players
-   Individual values can be enabled with JVM properties:
    -   First, a global debug flag must be enabled with `-DMC_DEBUG_ENABLED` or `-DMC_DEBUG_ENABLED=true`
    -   Then, a specific feature can be enabled, for example `-DMC_DEBUG_BRAIN` or `-DMC_DEBUG_BRAIN=true`
    -   To get the list of all available debug properties, add `-DMC_DEBUG_PRINT_PROPERTIES`
-   Warning: this is debug code. Handle with extreme care!
    -   This is an advanced feature, meant to help modders - it should not be used for normal play
    -   Features not guaranteed to work as intended
    -   It might crash your game or corrupt your worlds
    -   Individual options might be added, changed or removed without a notice

## Data Pack Version 87.0

-   Changed name of game rule `enableCommandBlocks` to `commandBlocksEnabled`

## Resource Pack Version 69.0

### Textures

-   Moved the result slot of `gui/container/villager.png` up by one pixel

### Shaders & Post-process Effects

#### Shaders

-   A new `PER_FACE_LIGHTING` flag has been added to the following shaders:
    -   `core/entity.vsh`
    -   `core/entity.fsh`
-   When set, cardinal lighting will be computed separately for front- and back-faces
-   As we now require OpenGL 3.3, we have bumped the version of all shaders from `150` to `330`

## Fixed bugs in 25w37a

-   [MC-220913](https://bugs.mojang.com/browse/MC-220913) Parity issue: Adjusting slider in the sound settings when not being in a world does not play a sound of that category
-   [MC-254052](https://bugs.mojang.com/browse/MC-254052) /locate doesn't work outside build limit
-   [MC-295841](https://bugs.mojang.com/browse/MC-295841) Interactive collision check path is broken
-   [MC-300076](https://bugs.mojang.com/browse/MC-300076) Copper golems remain completely stationary while searching chests, causing them to float and making them unable to receive knockback or be pushed
-   [MC-300077](https://bugs.mojang.com/browse/MC-300077) Copper golems can interact with chests diagonally through solid blocks
-   [MC-300299](https://bugs.mojang.com/browse/MC-300299) Copper Golems can open chests that are blocked
-   [MC-300723](https://bugs.mojang.com/browse/MC-300723) Second armor layer is still not rendering properly on all pieces
-   [MC-301294](https://bugs.mojang.com/browse/MC-301294) Higher tiers of mob armor are unreasonably less common than they were before 25w31a
-   [MC-301494](https://bugs.mojang.com/browse/MC-301494) Falling particles no longer appear from floating sand or gravel
-   [MC-301510](https://bugs.mojang.com/browse/MC-301510) GUI sprites nine slice performance regression
-   [MC-301531](https://bugs.mojang.com/browse/MC-301531) Server Management Protocol returns wrong response for invalid method IDs
-   [MC-301547](https://bugs.mojang.com/browse/MC-301547) Switching from Spectator mode to Creative mode now makes you fall out of the sky
-   [MC-301554](https://bugs.mojang.com/browse/MC-301554) Management protocol doesn't support batched requests
-   [MC-301558](https://bugs.mojang.com/browse/MC-301558) Copper golems can't pathfind through thin blocks
-   [MC-301563](https://bugs.mojang.com/browse/MC-301563) When you have the darkness potion effect, the chat, letters and words in the pause menu, items, F3 will darken
-   [MC-301564](https://bugs.mojang.com/browse/MC-301564) Management protocol doesn't support string-based request IDs
-   [MC-301574](https://bugs.mojang.com/browse/MC-301574) The spawnMonsters game rule does not take effect when switched
-   [MC-301593](https://bugs.mojang.com/browse/MC-301593) Monsters can spawn from spawners with the "spawnMonsters" game rule set to false
-   [MC-301599](https://bugs.mojang.com/browse/MC-301599) Action key getting stuck on when entering an interface so you are unable to exit without it reopening instantly
-   [MC-301620](https://bugs.mojang.com/browse/MC-301620) Banner animation is not independent when two banners are rendered
-   [MC-301661](https://bugs.mojang.com/browse/MC-301661) Server Management Protocol prints some incorrectly formatted messages in the console
-   [MC-301711](https://bugs.mojang.com/browse/MC-301711) The name of the "enableCommandBlocks" game rule is inconsistent with Bedrock Edition
-   [MC-301748](https://bugs.mojang.com/browse/MC-301748) Striking a Lightning Rod with non-default oxidation level with Lightning keeps nearby redstone components powered
-   [MC-301751](https://bugs.mojang.com/browse/MC-301751) The client crashes when in the vicinity of a mannequin spawner
-   [MC-301752](https://bugs.mojang.com/browse/MC-301752) Mannequins with profile.model set to "wide" render as a Steve skin
-   [MC-301754](https://bugs.mojang.com/browse/MC-301754) The hand animation plays when right-clicking shelves with nothing in your hand
-   [MC-301758](https://bugs.mojang.com/browse/MC-301758) Shield model clips through shelves
-   [MC-301759](https://bugs.mojang.com/browse/MC-301759) Elements within the realms “Worlds” tab are not selected in order when using the TAB key
-   [MC-301766](https://bugs.mojang.com/browse/MC-301766) Heads and skulls appear too high when placed on shelf
-   [MC-301768](https://bugs.mojang.com/browse/MC-301768) Structure blocks frame is not displayed when in spectator mode
-   [MC-301785](https://bugs.mojang.com/browse/MC-301785) Squid ink particles are yellow
-   [MC-301811](https://bugs.mojang.com/browse/MC-301811) Loot from suspicious blocks does not render while brushing
-   [MC-301833](https://bugs.mojang.com/browse/MC-301833) Text of text\_display entities is darker when "see\_through" property is set to true
-   [MC-301869](https://bugs.mojang.com/browse/MC-301869) The specification for the minecraft:ip\_bans server management method says it returns an array of players even though it returns an array of ip\_ban objects
-   [MC-301870](https://bugs.mojang.com/browse/MC-301870) Command feedback for successful /ban and /ban-ip commands with no specified reason can't be sent to the client
-   [MC-301889](https://bugs.mojang.com/browse/MC-301889) Documented return type does not match for clear methods in server managment protocol
-   [MC-301891](https://bugs.mojang.com/browse/MC-301891) Server management method minecraft:bans/clear clears allowlist, not bans
-   [MC-301899](https://bugs.mojang.com/browse/MC-301899) The output slot in the trading GUI is misaligned with other slots
-   [MC-301903](https://bugs.mojang.com/browse/MC-301903) Dropped chests, including variants, are no longer translated upward
-   [MC-301935](https://bugs.mojang.com/browse/MC-301935) Chest placed on bottom of shelf despite the rest of the items arent
-   [MC-301952](https://bugs.mojang.com/browse/MC-301952) Conduit visual bug

---

Here is Snapshot 25w36b to fix some common crashes.

## Fixed bugs in 25w36b

-   [MC-301745](https://bugs.mojang.com/browse/MC-301745) Placing an ender chest in the world crashes the game
-   [MC-301749](https://bugs.mojang.com/browse/MC-301749) Multiplayer Crash.

---

Snapshot 25w36a is out and it includes mannequins, a new technical entity that is spawned with commands and can be used as an NPC. Conflicting key binds will now function together allowing you to bind a key to multiple actions. And as always, this snapshot also includes technical tweaks and bug fixes.

> > **Developer's Note**: _This snapshot brings a large change to how we collect and draw block entities and particles. We don't anticipate any change of behaviors so please keep an eye out and report anything suspicious as a bug, thank you!_

## New Features

-   World Borders can now be set per dimension

### End Light Flashes

-   While the Ender Dragon fog effect is active the flash source in the sky is not visible and the brightness of the light affecting the world is reduced

### Accessibility

-   Multiple key binds that have the same key assigned to them can now work together, while before only one would work
    -   For example, you can now bind `D` to `Jump` and `Strafe Left` to jump and strafe left at the same time
    -   The red warning for assigning the same key to multiple key binds is changed to yellow
-   The spectator hotbar menu key can now be rebound
    -   It is part of a new `Spectator` category in the Key Binds screen, alongside the pre-existing `Highlight Players` key bind

## Changes

-   Formatting codes are now stripped from Code of Conduct files

### World Border

-   The World Border is now dimension-specific
    -   This means that each dimension can have its own World Border size, position, etc.

### Minor Tweaks to Blocks, Items and Entities

-   Copper Torch and Copper Lantern colors are adjusted to make them more discernible to color blind players

### UI

-   Double-clicking a word in edit box now selects it

### Block States

-   Powered Shelves can now only connect to other Powered Shelves facing the exact same direction

### Performance Improvements

-   Particles outside of players view are not rendered anymore, which provides a performance improvement in some cases

## Technical Changes

-   The Data Pack version is now 86.0

## Data Pack Version 86.0

-   Added Mannequin entities
-   The World Border is now dimension-specific

### Mannequins

Added a new type of technical entity called `minecraft:mannequin` which can only be spawned with summon commands.

-   A Mannequin is a Player Avatar without a connected Player
-   Mannequins always show an "NPC" text where a Player's `below_score` score would show
-   Mannequins function as Living Entities - they can hold and wear equipment, have attributes & effects, take damage, etc

Data Fields:

-   `profile` - Which profile to show on the entity. This is either a Player profile (same format as a `minecraft:profile` component) or a Mannequin profile with the following fields:
    -   `texture` - Namespaced ID of the skin texture to use
        -   The skin is specified relative to the `textures` folder and with a `.png` suffix
        -   e.g. `entity/player/wide/steve` will use the default wide Steve skin
    -   `cape` - Optional namespaced ID of the cape texture to use
        -   When specified, uses the same format as the `texture` field
        -   Omitting this field means the Mannequin has no cape
    -   `elytra` - Optional namespaced ID of the elytra texture to use
        -   When specified, uses the same format as the `texture` field
        -   Omitting this field means the Mannequin uses the cape texture, or if that is also omitted, the default Elytra texture when wearing Elytra
    -   `model` - Optional model type, one of `wide` and `slim`
        -   If omitted, `wide` is used
-   `hidden_layers` - List of outer skin layers to hide
    -   Valid entries: `cape`, `jacket`, `left_sleeve`, `right_sleeve`, `left_pants_leg`, `right_pants_leg`, `hat`
-   `main_hand` - Which hand is the main hand of the Mannequn - one of `left` and `right`

### Particles

-   `dragon_breath` now optionally takes a `power` parameter (float, default `1.0`), which is multiplied onto its initial velocity, after all randomness
-   `instant_effect` and `effect` now optionally take `power` (float, default `1.0`) and `color` (rgb, default `0xFFFFFF`) parameters
-   `flash` now requires a `color` parameter (argb)

## Resource Pack Version 68.0

#### Shaders

-   The following unused shaders have been removed:
    -   `core/position_color_lightmap.vsh`
    -   `core/position_color_lightmap.fsh`
    -   `core/position_color_tex_lightmap.vsh`
    -   `core/position_color_tex_lightmap.fsh`

## Fixed bugs in 25w36a

-   [MC-223142](https://bugs.mojang.com/browse/MC-223142) Player can move while spectating a marker
-   [MC-225088](https://bugs.mojang.com/browse/MC-225088) Overworld surface is darker than before on low brightness
-   [MC-234737](https://bugs.mojang.com/browse/MC-234737) Typo in exception message: "EmtyPoolElement"
-   [MC-236508](https://bugs.mojang.com/browse/MC-236508) The title within the "Add Server" menu is displayed as "Edit Server Info"
-   [MC-237590](https://bugs.mojang.com/browse/MC-237590) The word "chunks" is improperly capitalized within the render and simulation distance sliders
-   [MC-238273](https://bugs.mojang.com/browse/MC-238273) "Locked by another running instance of Minecraft" lacks punctuation
-   [MC-249205](https://bugs.mojang.com/browse/MC-249205) "minecraft.used:minecraft.potion" increases by a value of two when using water bottles to create mud in creative mode
-   [MC-250062](https://bugs.mojang.com/browse/MC-250062) Several strings throughout the game contain comma splices
-   [MC-250193](https://bugs.mojang.com/browse/MC-250193) Server log does not use the string representation of a player's GameProfile on a disconnect during encryption
-   [MC-254052](https://bugs.mojang.com/browse/MC-254052) /locate doesn't work outside build limit
-   [MC-254668](https://bugs.mojang.com/browse/MC-254668) Pressing Escape on the death screen's title screen warning respawns the player
-   [MC-257792](https://bugs.mojang.com/browse/MC-257792) Output slot for trading menu is off-center
-   [MC-258191](https://bugs.mojang.com/browse/MC-258191) Root system feature allows hanging root vertical span of 0, causing error
-   [MC-259347](https://bugs.mojang.com/browse/MC-259347) Height limit warning message is shown when right-clicking the top of a block at the build height limit with a bucket
-   [MC-262370](https://bugs.mojang.com/browse/MC-262370) Some multiplayer strings are untranslatable
-   [MC-264962](https://bugs.mojang.com/browse/MC-264962) Strings that contain two inputs for a given action have inconsistent spacing and apostrophes
-   [MC-265807](https://bugs.mojang.com/browse/MC-265807) Mobs don't drown if their Air NBT is less than -19
-   [MC-277975](https://bugs.mojang.com/browse/MC-277975) The first line of the command execution warning in an item's tooltip is missing punctuation
-   [MC-278435](https://bugs.mojang.com/browse/MC-278435) Mushroom Fields biome doesn't generate pumpkin patches despite being specified in vanilla datapack
-   [MC-279123](https://bugs.mojang.com/browse/MC-279123) Some strings that reference Minecraft Realms use inconsistent or missing verb forms
-   [MC-279153](https://bugs.mojang.com/browse/MC-279153) Some strings that mention the base values of attributes are missing articles
-   [MC-279173](https://bugs.mojang.com/browse/MC-279173) The "chat.disabled.invalid\_command\_signature" string is missing an article before the word "Command"
-   [MC-279174](https://bugs.mojang.com/browse/MC-279174) The "gamerule.spawnChunkRadius.description" string is missing an article before the word "Amount"
-   [MC-279175](https://bugs.mojang.com/browse/MC-279175) Some multiplayer disconnection strings are missing articles and demonstratives
-   [MC-279176](https://bugs.mojang.com/browse/MC-279176) The "gamerule.commandModificationBlockLimit.description" string is missing an article before the word "Number"
-   [MC-279212](https://bugs.mojang.com/browse/MC-279212) Some narration strings are missing articles and possessive determiners
-   [MC-295829](https://bugs.mojang.com/browse/MC-295829) Test instance block GUI uses "Batch" instead of "Environment"
-   [MC-298605](https://bugs.mojang.com/browse/MC-298605) When creating a Water World superflat world, the player spawns at the bottom of the sea
-   [MC-299105](https://bugs.mojang.com/browse/MC-299105) Tears and Lava Chicken music disc 'desc' translations are unused
-   [MC-300055](https://bugs.mojang.com/browse/MC-300055) You get the advancement Wax On for changing the pose of a Copper Golem Statue while holding Honeycomb
-   [MC-300088](https://bugs.mojang.com/browse/MC-300088) Items placed by a copper golem in a double chest do not update redstone comparators reading the right side of the double chest
-   [MC-300109](https://bugs.mojang.com/browse/MC-300109) Lightning bolt does not remove oxidation from the lightning rod
-   [MC-300169](https://bugs.mojang.com/browse/MC-300169) The CustomName tag of a copper golem statue is not kept when mined
-   [MC-300192](https://bugs.mojang.com/browse/MC-300192) No darker trim for copper
-   [MC-300201](https://bugs.mojang.com/browse/MC-300201) Breaking a copper golem statue with a pose does not retain its pose
-   [MC-300416](https://bugs.mojang.com/browse/MC-300416) Copper golems' pathfinding to chests is biased to northwest
-   [MC-300558](https://bugs.mojang.com/browse/MC-300558) Copper golems can open locked chests without an appropriate key item
-   [MC-300729](https://bugs.mojang.com/browse/MC-300729) Incorrect or unusually obvious pixels on the weathered and exposed copper bars
-   [MC-300961](https://bugs.mojang.com/browse/MC-300961) The armor layer on husks no longer reflects their larger size compared to other humanoids
-   [MC-301099](https://bugs.mojang.com/browse/MC-301099) Copper chests worn on copper golems' heads are not visible
-   [MC-301250](https://bugs.mojang.com/browse/MC-301250) Upon exiting the gamemode switcher (F3+F4) while viewing the credits, the player still does not resume viewing the credits and instead remains in the end in a phantom state until they relog
-   [MC-301258](https://bugs.mojang.com/browse/MC-301258) Copper golem statues in the walking pose have a bit of their necks poking through their arms
-   [MC-301259](https://bugs.mojang.com/browse/MC-301259) Shelf align\_items\_to\_bottom in block entity data doesn't work
-   [MC-301261](https://bugs.mojang.com/browse/MC-301261) The right arm of the copper golem statue isn't connected to its body
-   [MC-301276](https://bugs.mojang.com/browse/MC-301276) The hand animation no longer plays when shearing copper golems
-   [MC-301277](https://bugs.mojang.com/browse/MC-301277) Item frames with maps and paintings cannot share a corner anymore
-   [MC-301278](https://bugs.mojang.com/browse/MC-301278) The code of conduct screen renders carriage return characters
-   [MC-301283](https://bugs.mojang.com/browse/MC-301283) Sprint and sneak input can get 'stuck' if a screen is opened right as the input is pressed
-   [MC-301310](https://bugs.mojang.com/browse/MC-301310) The “Transfer Now” button in the realms menu renders outside the selection box
-   [MC-301312](https://bugs.mojang.com/browse/MC-301312) You cannot begin to use items while looking at copper golems
-   [MC-301324](https://bugs.mojang.com/browse/MC-301324) Sitting copper golem statue nose is rotated incorrectly
-   [MC-301330](https://bugs.mojang.com/browse/MC-301330) Malicious server can force client to remain stuck on code of conduct screen
-   [MC-301374](https://bugs.mojang.com/browse/MC-301374) Evokers can now spawn in Peaceful difficulty
-   [MC-301519](https://bugs.mojang.com/browse/MC-301519) Trying to use a command block while the "enableCommandBlocks" gamerule is set to false says "Command blocks are not enabled on this server" even if you're not on a server
-   [MC-301523](https://bugs.mojang.com/browse/MC-301523) Some gamerule description strings consist of inconsistent concluding punctuation, redundantly include “or not”, and are grammatically incorrect
-   [MC-301524](https://bugs.mojang.com/browse/MC-301524) The block breaking animation on banners now amplifies with each pattern applied
-   [MC-301546](https://bugs.mojang.com/browse/MC-301546) Bells do not display ringing animation when another bell is nearby
-   [MC-301577](https://bugs.mojang.com/browse/MC-301577) Block light sources produce shadows around themselves under skylight
-   [MC-301619](https://bugs.mojang.com/browse/MC-301619) Game mode translation key is used in the console message sent when a player tries to switch their game mode without permission

---

In this week's snapshot we are adding a Minecraft Server Management Protocol which lets servers query players, tweak game rules, update server settings, and listen for real-time server event notifications. Some server properties have been moved to game rules, allowing them to be updated while the server is running. Additionally, player icons can now be used in chat, the copper golem has received some improvements and we are shipping a bunch of bug fixes.

Happy mining!

## New Features

-   Added Halychian language support

## Changes

### Recipes

-   Hanging Signs can now only be crafted using Iron Chains

### UI

-   When adding a new server to the server list, the name is no longer prefilled. When left empty the default name is used.
-   More text inputs now support selecting text by mouse dragging

#### Mouse cursor

-   Some UI components will now change shape of mouse cursor
    -   Examples: text inputs, numeric sliders, buttons, scroll bars
-   Additionally, clickable parts of text labels (like links) will now change cursor to the "hand" shape
-   This feature can be disabled with "Allow Cursor Changes" option in "Mouse Settings..." menu

### Minor Tweaks to Blocks, Items and Entities

-   Copper Golems hitbox has been tweaked
    -   The hitbox is now 0.98 blocks in height to be able to pathfind in one block high spaces
-   Copper Chests created from spawning a Copper Golem now correctly connect to nearby Copper Chests
-   The Copper Golem now uses the Saddle equipment slot for blocks placed atop of its Lightning Rod
    -   Its Head equipment slot will now function like a regular head slot, akin to its functionality for humanoid mobs

## Technical Changes

-   The Data Pack version is now 85.0
-   The Resource Pack version is now 67.0
-   Added Minecraft Server Management Protocol

### Server Properties

Several server properties were removed in favour of making them into game rules, allowing these settings to be changed while the server is running.

-   Removed server property `allow-nether` in favour of new game rule
-   Removed server property `spawn-monsters` in favour of new game rule
-   Removed server property `enable-command-block` in favour of new game rule
-   Removed server property `pvp` in favour of new game rule
-   Added server property `management-server-enabled` controlling whether the new Minecraft Server Management Protocol is enabled or not
    -   Defaults to `false`
-   Added server property `management-server-port` controlling on what port the Minecraft Server Management Protocol is started
    -   Defaults to `25585`
-   Added server property `management-server-host` controlling with what host the new Minecraft Server Management Protocol is started
    -   Defaults to `localhost`
-   Added server property `status-heartbeat-interval` controlling the interval the management server sends heartbeat notifications to connected clients
    -   Defaults to `0`, meaning it’s disabled

### Minecraft Server Management Protocol

Added a server management API (JSON-RPC over WebSocket) for dedicated servers

-   The API is disabled by default and can be enabled in the server properties file
    -   `management-server-enabled=true`
    -   `management-server-host=localhost`
    -   `management-server-port=25585`
-   The API is accessible at `ws://<management-server-host>:<management-server-port>` when enabled
-   Supports querying and updating of server state (players, allowlist, operators, settings, game rules)
-   Sends notifications on state changes (e.g. player joins, game rule updates)
-   Calling `{"id":1,"method":"rpc.discover"}` returns an API schema containing supported methods and notifications of the currently running server
-   The Data Generator produces an API schema (`json-rpc-api-schema.json`) in the reports output folder mirroring the contents returned by the `rpc.discover` method
-   The API adheres to the [JSON-RPC 2.0 specification](https://www.jsonrpc.org/specification)
-   Uses namespaced methods and the reserved namespaces are `minecraft` (e.g. `minecraft:players`, `minecraft:allowlist/add`) and `notification` (e.g. `notification:players/joined`)
    -   Extensible via custom namespaces for additional methods and events
-   Core method groups: players, allowlist, operators, server (save, stop), server settings, game rules
-   Example method call:
    -   Request: `{"method":"minecraft:allowlist/add","id":1,"params":[[{"name":"jeb_"}]]}`
    -   Response: `{"jsonrpc":"2.0","id":1,"result":[{"id":"853c80ef-3c37-49fd-aa49-938b674adae6","name":"jeb_"}]}`
-   Example notification:
    -   `{"jsonrpc":"2.0","method":"notification:players/joined","params":[{"id":"853c80ef-3c37-49fd-aa49-938b674adae6","name":"jeb_"}]}`
-   Example error:
    -   Request: `{"method": "minecraft:foo/bar","id": 1}`
    -   Response: `{"jsonrpc":"2.0","id":1,"result":{"jsonrpc":"2.0","id":1,"error":{"code":-32601,"message":"Method not found","data":"Method not found: minecraft:foo/bar"}}}`
    -   Errors and error codes follow [JSON-RPC 2.0 error object format](https://www.jsonrpc.org/specification#error_object)

## Data Pack Version 85.0

-   Renamed `chain` to `iron_chain`

### Game Rules

-   Added `pvp` game rule controlling whether players can deal damage to other players
    -   Defaults to `true`
-   Added `allowEnteringNetherUsingPortals` game rule controlling if the Nether can be entered through portals
    -   Defaults to `true`
-   Added `spawnMonsters` game rule controlling if monsters should spawn naturally
    -   Defaults to `true`
-   Added `enableCommandBlocks` game rule controlling if Command Blocks should be enabled or not
    -   Defaults to `true`

### Text rendering

#### `object` Text Component

-   This component has been updated to support displaying other non-character objects as a part of text
-   New format:
    -   `object`: type of object, string, see below for values
    -   `<type-specific>`: additional fields depending on object type
-   Similarly to `nbt` text component `object` field can be omitted
    -   However, it's recommended to provide it for error checking

##### `atlas` Object Type

-   Behaves the same way as the `object` component did previously, but is now a separate object type
-   Uses the same format as before

##### `player` Object Type

-   Renders player head
-   If partial profile is given, skin is resolved in the same way as `minecraft:profile` component on player head
-   Format:
    -   `player`: player profile
        -   `name`: player name, optional string
        -   `id`: player uuid, optional UUID
        -   `properties`: profile properties, optional map
    -   `hat`: controls rendering of a hat layer, boolean, default `false`

## Resource Pack Version 67.0

### Block Sprites

Renamed the following block sprites:

-   `chain` to `iron_chain`

### Item Sprites

Renamed the following item sprites:

-   `chain` to `iron_chain`

## Fixed bugs in 25w35a

-   [MC-278550](https://bugs.mojang.com/browse/MC-278550) While flying in creative or spectator mode, the surface of water can prevent you from sprinting
-   [MC-297126](https://bugs.mojang.com/browse/MC-297126) "Failed to read field..." error spam when upgrading a 25w15a or 25w16a world
-   [MC-300044](https://bugs.mojang.com/browse/MC-300044) Z-fighting occurs when the heads of copper golems intersect their bodies
-   [MC-300049](https://bugs.mojang.com/browse/MC-300049) The debug text is rendered on top of the debug options
-   [MC-300054](https://bugs.mojang.com/browse/MC-300054) Double oxidized copper chest texture UV is missing pixels
-   [MC-300067](https://bugs.mojang.com/browse/MC-300067) Copper golems continue their chest searching animations while dying
-   [MC-300074](https://bugs.mojang.com/browse/MC-300074) No particles are produced when scraping oxidation off copper golems
-   [MC-300077](https://bugs.mojang.com/browse/MC-300077) Copper golems can interact with chests diagonally through solid blocks
-   [MC-300089](https://bugs.mojang.com/browse/MC-300089) Chests sometimes get stuck in inverted states after being interacted with by copper golems
-   [MC-300102](https://bugs.mojang.com/browse/MC-300102) Shelves float when held in the player's hand in third person
-   [MC-300103](https://bugs.mojang.com/browse/MC-300103) Removing items from a shelf uses the "Item placed" caption
-   [MC-300119](https://bugs.mojang.com/browse/MC-300119) Copper golems don’t always avoid dangerous blocks when pathfinding to chests
-   [MC-300124](https://bugs.mojang.com/browse/MC-300124) All the oxidation states of the lightning rod are listed in the redstone tab of the creative inventory
-   [MC-300129](https://bugs.mojang.com/browse/MC-300129) Copper golems can't put items into chests above them
-   [MC-300173](https://bugs.mojang.com/browse/MC-300173) The Copper Chest textures' diagonal glint direction doesn't match the large chest variants' on some sides
-   [MC-300229](https://bugs.mojang.com/browse/MC-300229) Z-fighting on antenna when putting certain blocks above a copper golem statue
-   [MC-300267](https://bugs.mojang.com/browse/MC-300267) The miniature mobs inside spawners and trial spawners are sometimes lit incorrectly
-   [MC-300301](https://bugs.mojang.com/browse/MC-300301) Shelves produce unusually high-resolution particles due to having a 32x32 texture
-   [MC-300304](https://bugs.mojang.com/browse/MC-300304) Comparators can stay active when measuring the pose of a copper golem statue block which is revived
-   [MC-300462](https://bugs.mojang.com/browse/MC-300462) Copper golems attached to leads still attempt to pathfind toward chests
-   [MC-300501](https://bugs.mojang.com/browse/MC-300501) Variants of copper chests are not included in the "Redstone Blocks" tab in the creative inventory whereas normal chests are
-   [MC-300568](https://bugs.mojang.com/browse/MC-300568) Copper golems don't open chests if given room to walk about
-   [MC-300688](https://bugs.mojang.com/browse/MC-300688) The iron chain's block/item ID is still "chain"
-   [MC-300703](https://bugs.mojang.com/browse/MC-300703) The underside of double copper chests does not use a merged texture
-   [MC-300744](https://bugs.mojang.com/browse/MC-300744) The copper and iron nuggets are inverted and arranged incorrectly in the Creative mode inventory
-   [MC-300762](https://bugs.mojang.com/browse/MC-300762) Copper golems require at least 3 blocks of space above a chest to place anything
-   [MC-300797](https://bugs.mojang.com/browse/MC-300797) The glowing effect causes entities to render incorrectly inside of inventories
-   [MC-300827](https://bugs.mojang.com/browse/MC-300827) Pressing F3+Q in certain screens does not show help, despite F3 suggesting it
-   [MC-300977](https://bugs.mojang.com/browse/MC-300977) Clocks function in the recipe book/villager/crafter UI
-   [MC-301023](https://bugs.mojang.com/browse/MC-301023) When a warden applies the darkness effect to you, the chat interface, item bar, and items become dark
-   [MC-301025](https://bugs.mojang.com/browse/MC-301025) End flash purplish light saturation is affected by brightness values
-   [MC-301026](https://bugs.mojang.com/browse/MC-301026) End flash purplish light becomes extremely saturated when the player is affected by darkness
-   [MC-301048](https://bugs.mojang.com/browse/MC-301048) In the "sitting" pose, the copper statue’s rod becomes shorter
-   [MC-301101](https://bugs.mojang.com/browse/MC-301101) Certain similar blocks are positioned differently on copper golems' heads
-   [MC-301224](https://bugs.mojang.com/browse/MC-301224) The first few stages of block cracks are not rendered on chests
-   [MC-301225](https://bugs.mojang.com/browse/MC-301225) Game crashes when quitting creating new world menu without other worlds created before
-   [MC-301226](https://bugs.mojang.com/browse/MC-301226) Block cracks no longer render on banners
-   [MC-301228](https://bugs.mojang.com/browse/MC-301228) Block cracks no longer render on heads and skulls
-   [MC-301230](https://bugs.mojang.com/browse/MC-301230) The word "resolve" is misspelled as "resolved" within the "commands.profile\_fetch.id.failure" string
-   [MC-301231](https://bugs.mojang.com/browse/MC-301231) Enchanting table book animations are not independent
-   [MC-301236](https://bugs.mojang.com/browse/MC-301236) Enchantment glint is no longer visible on held tridents
-   [MC-301242](https://bugs.mojang.com/browse/MC-301242) Enchantment glint is no longer visible on shields
-   [MC-301273](https://bugs.mojang.com/browse/MC-301273) Clicking on the join server hover button now selects the server, unless any server is already selected
-   [MC-301290](https://bugs.mojang.com/browse/MC-301290) Game crashes when trying to render a glowing enchanted item
-   [MC-301295](https://bugs.mojang.com/browse/MC-301295) TTF font provider oversample increases width of characters
-   [MC-301328](https://bugs.mojang.com/browse/MC-301328) Glowing item entities briefly turn white upon pickup
-   [MC-301339](https://bugs.mojang.com/browse/MC-301339) Miniature mobs inside spawners always render fully lit

---

Here is snapshot 25w34b to fix a connectivity error with Realms that snuck into 25w34a.

## Fixed bugs in 25w34b

-   [MC-300911](https://bugs.mojang.com/browse/MC-300911) Glowing item & block displays no longer glow

---

This week it's time for a smaller snapshot with a new main menu panorama, code of conducts for servers and much tinkering and fixing with our new friends, the Copper Golems. Happy mining!

> **Developer's Note**: _The rendering changes introduced in 25w31a for entities are now expanded to affect block entities and items. Please report any issues you encounter in these areas._

## New Features

-   Servers can now have an in-game Code of Conduct

### Server Code of Conduct

When connecting to a server, a Code of Conduct screen can now be shown.

-   Accepting the Code of Conduct is required to play on the server
-   A checkbox is available for not showing the same Code of Conduct in the future
    -   If the Code of Conduct changes, it will be shown again

#### Server Setup

-   A new boolean field has been added to `server.properties` called `enable-code-of-conduct`
    -   Setting it to `true` will make the server look for code of conduct files in the `codeofconduct` subfolder in the same folder as `server.properties`
    -   Each file in the folder should have the form `<language_code>.txt`
        -   The language shown will attempt to match the player's language
        -   If it doesn't exist, the `en_us` code of conduct will be used
        -   If that also doesn't exist, an arbitrary available entry is used

## Changes

-   The main menu now has an updated background panorama showing Copper Golems in a Village

### The End Light Flashes

-   The sound effect produced by a flash now has a higher delay
-   The "Hide Lightning Flashes" accessibility setting has been renamed to "Hide Sky Flashes" and now also disables the End Flashes
    -   When the flash is disabled by the setting the world will not be lit by the flash, but the flash source will still be visible in the sky and the sound effect will still play

### Minor Tweaks to Blocks, Items and Entities

-   The eyes of the Copper Golem are now invisible as well when splashed with Potion of Invisibility
-   Copper Golems hitbox has been tweaked
    -   The hitbox is now 0.6 blocks in width to be able to pathfind through open doors
    -   The hitbox is now 1.01 blocks in height to not get stuck in certain blocks

### Sounds

-   Copper Golem & Copper Chests are now audible from up to 12 blocks away
-   The copper sorting sounds have been tweaked to be quieter

## Technical Changes

-   The Data Pack version is now 84.0
-   The Resource Pack version is now 66.0

## Data Pack Version 84.0

-   Player profiles in data components and block entities no longer resolve automatically
-   Added `fetchprofile` command for downloading player profiles

### Block States

-   Removed `align_items_to_bottom` block state property from Shelf block
    -   It has been replaced with an equally named boolean field on the Shelf block entity
    -   Shelves created with this property set in the last snapshot will reset back to the default value (`false`)

### Commands

#### Added `fetchprofile`

-   New command that has been added to fetch the contents of a player profile from Minecraft servers
-   Since the operation might take some time, it works asynchronously
    -   Results will be printed only when operation finishes, but the game will keep running unpaused
-   After successful completion, a message will be printed that lets users copy the contents of a fully resolved `minecraft:profile` component or `/give @s minecraft:player_head` with said component
-   Since the result is not known at the time of execution, this command always returns `1`

Syntax:

-   `fetchprofile name <player name>` - resolves profile by name (case-insensitive)
-   `fetchprofile id <uuid>` - resolves profile by id

### Data Components

#### Modified `minecraft:profile`

-   Previously contents of this component would permanently change when profile was resolved, i.e. downloaded from Minecraft service
-   To avoid issues with this unexpected change, the resolved value is no longer stored and contents of the profile will always remain unchanged
-   That means this component has now two behaviors:
    -   Static: when it has `properties` field or when both `name` and `id` are present or when both are missing
        -   In this state, profile will always render as-is
        -   If `properties` field is missing, a default skin will be used (selected based on `id`, same as in offline mode)
        -   That means skin will be frozen at the moment of component creation
        -   This option is preferred for decorational uses
    -   Dynamic: when it has either `name` or `id` (but not both)
        -   When an item containing this profile is rendered on the client side, the profile will be resolved to most recent value
        -   This means that this item will always render with current skin of targeted player
            -   Note: if a player changes skin while game is running, change will not be visible unless clients restart
        -   Resolution might happen with a delay, during which item will render with a default skin
        -   Profile name will replace item name only when it's present
            -   Items with just `id` will show default name
        -   Items will dynamic profiles be distinguished from static ones with label in tooltip
-   Items stack based on exact contents, so even if a dynamic component is eventually resolved to the same profile as a static one, they won't stack together
-   Player heads in older maps that have not been loaded in never versions yet will usually be converted to dynamic contents

### Block Entity Data

#### Modified `minecraft:skull`

-   `profile` field has been changed to match `minecraft:profile` component
    -   That means that it also becomes immutable and is resolved only when necessary

### Text components

-   Bold and italics styles are ignored when drawing sprites

## Resource Pack Version 66.0

-   Removed block state `align_items_to_bottom` from the Shelf block
    -   See above for details

## Fixed bugs in 25w34a

-   [MC-383](https://bugs.mojang.com/browse/MC-383) In the world selection screen, world names/versions/timestamps can overflow the list to the right
-   [MC-36783](https://bugs.mojang.com/browse/MC-36783) Item frames/Glow item frames don't change their hitbox if they contain a map
-   [MC-59413](https://bugs.mojang.com/browse/MC-59413) Water and lava can drip from barriers
-   [MC-147784](https://bugs.mojang.com/browse/MC-147784) Fletching table flashes crafting table's GUI for about a second upon right-clicking it in spectator mode
-   [MC-259673](https://bugs.mojang.com/browse/MC-259673) Tab selection works differently in world creation and statistics screens
-   [MC-260591](https://bugs.mojang.com/browse/MC-260591) 'execute on origin' and 'execute on owner' fail to find the targeted entity when it is in a separate dimension
-   [MC-260920](https://bugs.mojang.com/browse/MC-260920) Statistics screen columns are not accessible through keyboard navigation
-   [MC-265290](https://bugs.mojang.com/browse/MC-265290) Elements within the command block interface are not selected in order when using the TAB key
-   [MC-270190](https://bugs.mojang.com/browse/MC-270190) Hovering over banner patterns in the loom UI does not display tooltips
-   [MC-270669](https://bugs.mojang.com/browse/MC-270669) Incorrect argument order in translation key argument.block.property.novalue
-   [MC-272584](https://bugs.mojang.com/browse/MC-272584) Fireballs redirected by explosions caused by player owned entities no longer carry player ownership
-   [MC-276931](https://bugs.mojang.com/browse/MC-276931) Enchanted books have the wrong rarity
-   [MC-296789](https://bugs.mojang.com/browse/MC-296789) The color of text within the test instance block interface is inconsistent with other similar interfaces
-   [MC-297496](https://bugs.mojang.com/browse/MC-297496) Text inside the middle of the java realms information box completely disappears when selected
-   [MC-298605](https://bugs.mojang.com/browse/MC-298605) When creating a Water World superflat world, the player spawns at the bottom of the sea
-   [MC-299067](https://bugs.mojang.com/browse/MC-299067) Arrows can lose ownership on disconnection in multiplayer
-   [MC-299115](https://bugs.mojang.com/browse/MC-299115) Arrows lose their owner tag when deflected while the owner is offline
-   [MC-300045](https://bugs.mojang.com/browse/MC-300045) The hand animation plays when right-clicking copper golems
-   [MC-300046](https://bugs.mojang.com/browse/MC-300046) The copper golem statue models in the inventory are partly cut off at the top
-   [MC-300048](https://bugs.mojang.com/browse/MC-300048) Copper golem statue item entities are rendered too large
-   [MC-300066](https://bugs.mojang.com/browse/MC-300066) The Ender Dragon Spawn Egg has the "Disabled in Peaceful" note despite being able to spawn in Peaceful mode
-   [MC-300082](https://bugs.mojang.com/browse/MC-300082) Copper golems with the “NoAI” tag can adjust their rotation and spin
-   [MC-300083](https://bugs.mojang.com/browse/MC-300083) Copper golems with the “Silent” tag can still produce some sounds
-   [MC-300085](https://bugs.mojang.com/browse/MC-300085) Copper golem statues' poses are off-centered
-   [MC-300130](https://bugs.mojang.com/browse/MC-300130) The "commands.summon.failed.peaceful" string doesn’t pluralize the word "Monster"
-   [MC-300134](https://bugs.mojang.com/browse/MC-300134) Copper Golem Spawn Egg isn't alphabetized in the creative inventory
-   [MC-300213](https://bugs.mojang.com/browse/MC-300213) Copper golems' hitbox is too large to fit through open single doors
-   [MC-300222](https://bugs.mojang.com/browse/MC-300222) Upon exiting the gamemode switcher (F3+F4) or debug options menu (F3+F5) while viewing the credits, the player does not resume viewing the credits and instead remains in the end in a phantom state until they relog
-   [MC-300245](https://bugs.mojang.com/browse/MC-300245) Any double chests variant doesnt play any sound when a copper golem interacts with the right part of the chest specifically
-   [MC-300249](https://bugs.mojang.com/browse/MC-300249) Copper golem statue block outline is above the top of the block below
-   [MC-300365](https://bugs.mojang.com/browse/MC-300365) Copper golems inconsistently activate trapped chests
-   [MC-300406](https://bugs.mojang.com/browse/MC-300406) Updating open copper chests causes the chests to remain open
-   [MC-300441](https://bugs.mojang.com/browse/MC-300441) Nether ambient sounds continue playing after leaving the Nether
-   [MC-300475](https://bugs.mojang.com/browse/MC-300475) The Glowing outline now appears black on the fur model parts of invisible sheep
-   [MC-300480](https://bugs.mojang.com/browse/MC-300480) Worn copper golem statues are incorrectly rotated
-   [MC-300695](https://bugs.mojang.com/browse/MC-300695) The sprint toggle state is now reset when viewing any screen
-   [MC-300718](https://bugs.mojang.com/browse/MC-300718) Player doesn't re-sneak automatically if they were sneaking before opening a GUI with Sneak Toggle set
-   [MC-300796](https://bugs.mojang.com/browse/MC-300796) Harvesting from sweet berry bushes can drop more sweet berries than before
-   [MC-300804](https://bugs.mojang.com/browse/MC-300804) The Glowing outline is now always white on invisible entities that aren't the player, unless the player is in the same team
-   [MC-300825](https://bugs.mojang.com/browse/MC-300825) Entities with NaN motion cause clients to be kicked and softlocked
-   [MC-300839](https://bugs.mojang.com/browse/MC-300839) Disc sounds can be heard in another dimension
-   [MC-300846](https://bugs.mojang.com/browse/MC-300846) The /rotate command doubles the target entity's motion each time it is run
-   [MC-300856](https://bugs.mojang.com/browse/MC-300856) I-beam cursor in book signing screen has wrong color
-   [MC-300888](https://bugs.mojang.com/browse/MC-300888) pack.mcmeta no longer supports versions below 16 in the supported\_formats field
-   [MC-300968](https://bugs.mojang.com/browse/MC-300968) Flying state is not saved when reloading world
-   [MC-300970](https://bugs.mojang.com/browse/MC-300970) Missing sound for event: minecraft:entity.copper\_golem.shear
-   [MC-300972](https://bugs.mojang.com/browse/MC-300972) End light flashes sound can be heard while looking at the credits
-   [MC-300975](https://bugs.mojang.com/browse/MC-300975) Copper golems wear banners backwards
-   [MC-300983](https://bugs.mojang.com/browse/MC-300983) The speed field in ExplosionParticleInfo codec is misspelled as "speec"
-   [MC-300995](https://bugs.mojang.com/browse/MC-300995) Game crashes when changing the F3 menu during world disconnection
-   [MC-301004](https://bugs.mojang.com/browse/MC-301004) Normal guardians are no longer able to enter boats
-   [MC-301030](https://bugs.mojang.com/browse/MC-301030) Frosted ice now melts in the End
-   [MC-301032](https://bugs.mojang.com/browse/MC-301032) Bees in the End now hide in their hive when it's raining in the Overworld

---

In this week's snapshot we've got a nice quality of life improvement for all the chatters out there. Now your unsent messages will be saved as drafts, check out the details below. Items on shelves will now be positioned in the middle of the shelf as default. Before we move our focus onto technical tweaks and bug fixes for this drop, we have one final feature to announce – and it involves a very cute interaction between the copper golem and the iron golem! With this, all features for our third game drop of 2025 are now in testing, and we'll start working our next game drop, which we are excited to tell you about soon!

## New Features

-   Added light flashes to The End dimension as part of the ongoing Vibrant Visuals work
-   Iron Golems will sometimes plant a decorative flower onto a nearby Copper Golem
-   Unsent chat messages now get saved as chat drafts

### The End Light Flashes

-   The End dimension now has skylight
-   Normally the skylight does not affect how the dimension looks
-   From time to time flashes in the sky happen
-   When they happen skylight intensity increases flooding the dimension with purple light

### Copper Golem

-   Iron Golems will sometimes plant a decorative flower onto a nearby Copper Golem
    -   The flower can be removed with Shears
    -   This flower is dropped when the Copper Golem turns into a Copper Golem Statue Block

### Chat Drafts

-   Unsent chat messages now get saved as chat drafts if the chat was forcibly closed
    -   This includes it being closed by external sources such as dying or a dialog opening, but not the player intentionally closing their chat
-   Any existing chat draft will get pre-filled into the message box the next time the chat is opened
-   Draft text has a grayed-out appearance until fully restored
    -   Draft text can be restored as regular text by interacting with it:
        -   Typing additional text
        -   Moving the text cursor using the arrow keys
        -   Clicking it
        -   Highlighting it
    -   Pressing enter on a chat draft prior to it being restored sends it like a normal chat message
    -   Pressing backspace on a chat draft prior to it being restored deletes it
-   Added an option to the Chat Settings menu that enables saving unsent chat messages by default
    -   With this option enabled, unsent messages will _always_ get saved as chat drafts, even if the player intentionally closed their chat

## Changes

-   Players seen in the game world of the current server are now always shown in the Social Interactions screen even if they are offline

### Blocks

#### Shelf

-   Items in the Shelf will render in the middle of the Shelf
-   Updated the sizes of many items in the Shelf to better fit the Shelf

> **Developer's Note:** _Thank you for all your valuable feedback on the shelf! Seeing the many creative ways you've been using this new block, we've decided to revert the change from last week that positioned items at the bottom of the shelf, as we agree that having the items centered provides more creative opportunities when building._

### UI

#### Chat

-   It is now possible to start chatting while standing inside a Nether Portal
-   The chat will now remain open and unchanged if the player was chatting before being transferred to another dimension

## Technical Changes

-   The Data Pack version is now 83.1
-   The Resource Pack version is now 65.2
-   Added new display transform "on\_shelf"
    -   Used for displaying items on the Shelf

## Data Pack Version 83.1

### Block States

-   Added `align_items_to_bottom` block state property to the Shelf block
    -   If `false` the items on the Shelf will ignore the vertical translation of the `on_shelf` item display transform and will be rendered vertically aligned to the middle of the Shelf
    -   If `true` the items on the Shelf will be rendered upward from the bottom of the Shelf and will respect the vertical translation of the `on_shelf` item display transform
    -   Default is `false` (items are aligned to the middle of the Shelf)

### Attributes

#### `run_command` Click Event

-   Previously, if the `command` field contained a command that required a signed message (`/say`, `/me`, `/msg`, `/tell`, `/w`, `/teammsg`, `/tm`), it would be silently discarded
-   Instead, a screen will be shown that lets the user insert the command into the chat window or copy the command to their clipboard if the chat window can't be opened

### Enchantments

#### `explode` Effects

New field: `block_effects` - specifies per-block particles. Each block particle is randomly chosen according to weights. A set limit of block particles is spawned each tick from all explosions that tick.

Format: List of entries:

-   `weight`: Non-negative integer representing the random weight for this entry being chosen
-   `particle`: The particle to spawn
-   `scaling`: Optional scaling to apply between explosion center and block position, or `1.0` if not specified
-   `speed`: Optional scaling to apply to the speed of the particle, or `1.0` if not specified

### Tags

#### Item Tags

-   Added `#shearable_from_copper_golem` - all items that can be removed from the Copper Golem's head slot via Shears

## Resource Pack Version 65.2

### Textures

-   Added a new texture:
    -   `environment/end_flash.png`

### Sounds

#### Sound Events

-   Added new sound event:
    -   `weather.end_flash`

## Fixed bugs in 25w33a

-   [MC-26334](https://bugs.mojang.com/browse/MC-26334) Chat UI is forcibly cleared when killed
-   [MC-46503](https://bugs.mojang.com/browse/MC-46503) You can retain entities' shaders by running the "/kill" command while in spectator mode
-   [MC-69216](https://bugs.mojang.com/browse/MC-69216) Switching to spectator mode while fishing keeps rod cast
-   [MC-98322](https://bugs.mojang.com/browse/MC-98322) Flying after shifting between Creative/Spectator
-   [MC-99785](https://bugs.mojang.com/browse/MC-99785) You can leash entities in spectator mode
-   [MC-119417](https://bugs.mojang.com/browse/MC-119417) A spectator can occupy a bed if they enter it and then are switched to spectator mode
-   [MC-165991](https://bugs.mojang.com/browse/MC-165991) TNT explosion no longer shows additional smoke particles since 1.15 Pre-release 1
-   [MC-173730](https://bugs.mojang.com/browse/MC-173730) Shift-clicking water buckets against a waterloggable block doesn't place the water beside the waterloggable block
-   [MC-183784](https://bugs.mojang.com/browse/MC-183784) Visual bug to the Game Mode Switcher debug menu after resizing the window
-   [MC-187850](https://bugs.mojang.com/browse/MC-187850) "run\_command" click\_event doesn't work in written books if chat is hidden
-   [MC-191669](https://bugs.mojang.com/browse/MC-191669) Sprinting is disabled when switching your gamemode to spectator while sprinting into a block or general obstruction
-   [MC-232968](https://bugs.mojang.com/browse/MC-232968) Spectators can prevent the closing animation of a chest/barrel when viewing it at the same time as a non-spectator
-   [MC-238146](https://bugs.mojang.com/browse/MC-238146) When you switch to Spectator mode while sleeping, the night never skips
-   [MC-259571](https://bugs.mojang.com/browse/MC-259571) Last player game mode not saved after player dies or the game is reloaded
-   [MC-270172](https://bugs.mojang.com/browse/MC-270172) Client and server desync for hooked players when changing gamemode to spectator
-   [MC-297898](https://bugs.mojang.com/browse/MC-297898) Entering a dialog temporarily closes the chat and clears anything the player was currently typing
-   [MC-299548](https://bugs.mojang.com/browse/MC-299548) "run\_command" dialog actions don't work if chat is hidden
-   [MC-299823](https://bugs.mojang.com/browse/MC-299823) Minecraft shaders cause C7050 warnings
-   [MC-299873](https://bugs.mojang.com/browse/MC-299873) Selection boxes of plain messages within dialogs can get cut off
-   [MC-300034](https://bugs.mojang.com/browse/MC-300034) Dolphins can ride boats
-   [MC-300057](https://bugs.mojang.com/browse/MC-300057) Monsters still spawn for a tick when spawning them with a Spawn Egg in Peaceful
-   [MC-300417](https://bugs.mojang.com/browse/MC-300417) The copper pickaxe is not part of the #cluster\_max\_harvestables item tag
-   [MC-300457](https://bugs.mojang.com/browse/MC-300457) Dialog is unescapable when action or exit\_action is set to run\_command with a command that would produce a signed chat message
-   [MC-300722](https://bugs.mojang.com/browse/MC-300722) Hoppers appear to randomly stop draining items through shelves
-   [MC-300732](https://bugs.mojang.com/browse/MC-300732) Loaded ender pearls are deleted when viewing the end credits for the first time when enderPearlsVanishOnDeath is true
-   [MC-300739](https://bugs.mojang.com/browse/MC-300739) Server crash when generating custom structures containing shelf blocks
-   [MC-300746](https://bugs.mojang.com/browse/MC-300746) Missing translation for copper wall torch
-   [MC-300747](https://bugs.mojang.com/browse/MC-300747) Cannot see villager's profession layer behind slime

---

Another Tuesday, another Snapshot release! Alongside technical updates and bug fixes, this week we're introducing a copper-y collection of goodies from our third game drop of the year: Build with copper torches, lanterns, chains, and bars – and watch them develop that stunning signature patina. With this week's release, you'll also find that items displayed in shelves have learned the noble art of sitting down.

Happy mining!

## New Features

-   Added Copper Decorations

### Copper Decorations

-   Added Copper Torch
    -   A green variant of the Torch crafted from a Copper Nugget, Coal, and Stick
    -   Functionally identical to the Torch
-   Added Copper Bars
    -   Functions like the existing Iron Bars block
    -   Made from copper and oxidizes over time
-   Added Copper Chain
    -   Functions like the existing Chain block (now renamed to Iron Chain)
    -   Made from copper and oxidizes over time
-   Added Copper Lantern
    -   Crafted similarly to a regular Lantern but uses Copper and a Copper Torch
    -   The lantern itself oxidizes, changing its look as it ages
    -   Functionally identical to the Lantern

## Changes

-   The Chain block has been renamed to "Iron Chain"

### Minor Tweaks to Blocks, Items and Entities

-   Items on the Shelf have been repositioned to sit on the Shelf
-   All Copper Golem Statues now always drop as item when mined
-   All Copper Golem Statues now pop off as an item when pushed by a piston

### Recipes

-   Changed the Copper Trapdoor recipe to use 4 Copper Ingots instead of 6

## Technical Changes

-   The Data Pack version is now 83.0
-   The Resource Pack version is now 65.1
-   Added a way to use GUI and item sprites in text

## Data Pack Version 83.0

### Entity Data

#### `copper_golem`

-   The `weather_state` field now expects a string id instead of integer id
    -   `0` -> `unaffected`
    -   `1` -> `exposed`
    -   `2` -> `weathered`
    -   `3` -> `oxidized`

### Text rendering

#### `object` Text Component

-   New text component with type `object` has been added
-   This component will display a single sprite from sprite atlas as a character
-   Sprites are always rendered as a rectangle, 8x8 pixels in size
-   Format:
    -   `atlas` - namespaced ID of a sprite atlas, default value: `minecraft:blocks`
    -   `sprite` - namespaced ID of a sprite in atlas, for example `item/porkchop`

General note about atlas contents:

-   Sprite Atlases contain textures for items, blocks, mob effects, GUI elements, etc.
-   Contents are controlled by files in `assets/minecraft/atlases/` directory in a resource pack
-   Current contents can be reviewed with the F3+S key combination

### Loot Tables

-   Added `harvest/sweet_berry_bush` loot table for drops when a Sweet Berry Bush with Sweet Berries is harvested by interacting with it

### Tags

#### Block Tags

-   Added `#chains` - all Chain blocks
-   Added `#lanterns` - all Lantern blocks
-   Added `#bars` - all Bar blocks

#### Item Tags

-   Added `#chains` - all Chain block items
-   Added `#lanterns` - all Lantern block items
-   Added `#bars` - all Bar block items

## Resource Pack Version 65.1

### Block Sprites

Added new block sprites:

-   `copper_bars`
-   `copper_chain`
-   `copper_lantern`
-   `copper_torch`
-   `exposed_copper_bars`
-   `exposed_copper_chain`
-   `exposed_copper_lantern`
-   `exposed_copper_torch`
-   `oxidized_copper_bars`
-   `oxidized_copper_chain`
-   `oxidized_copper_lantern`
-   `oxidized_copper_torch`
-   `weathered_copper_bars`
-   `weathered_copper_chain`
-   `weathered_copper_lantern`
-   `weathered_copper_torch`

### Item Sprites

Added new item sprites:

-   `copper_chain`
-   `copper_lantern`
-   `exposed_copper_chain`
-   `exposed_copper_lantern`
-   `oxidized_copper_chain`
-   `oxidized_copper_lantern`
-   `weathered_copper_chain`
-   `weathered_copper_lantern`

### Particles

Added new particle:

-   `copper_fire_flame`

## Fixed bugs in 25w32a

-   [MC-163218](https://bugs.mojang.com/browse/MC-163218) Players with the Sneak option set to "Toggle" can sneak while in GUIs
-   [MC-174759](https://bugs.mojang.com/browse/MC-174759) Dragon eggs can be teleported to a height below void
-   [MC-257540](https://bugs.mojang.com/browse/MC-257540) Sheep eat half as often as they did before 21w39a
-   [MC-273943](https://bugs.mojang.com/browse/MC-273943) Sweet berries drop from harvested bushes is hardcoded
-   [MC-276431](https://bugs.mojang.com/browse/MC-276431) Dragon egg teleports above the build height limit and deletes itself
-   [MC-279548](https://bugs.mojang.com/browse/MC-279548) TNT minecart does not remember ignition source when exploding from a fall
-   [MC-295841](https://bugs.mojang.com/browse/MC-295841) Interactive collision check path is broken
-   [MC-296054](https://bugs.mojang.com/browse/MC-296054) Fast non-projectile entity movements may fail to apply block effects from blocks around the starting position when moving in positive directions
-   [MC-296055](https://bugs.mojang.com/browse/MC-296055) Slow non-projectile entity movements may fail to apply block effects from origin block
-   [MC-296057](https://bugs.mojang.com/browse/MC-296057) Sideways non-projectile movements may fail to apply block effects from blocks around start of sideways motion
-   [MC-296372](https://bugs.mojang.com/browse/MC-296372) Teleport duration is unreliable as of 1.21.5
-   [MC-299314](https://bugs.mojang.com/browse/MC-299314) Breaking jukeboxes in certain ways doesn't stop the music
-   [MC-299627](https://bugs.mojang.com/browse/MC-299627) Entity interpolation for high speed projectiles is wildly inaccurate
-   [MC-299770](https://bugs.mojang.com/browse/MC-299770) Chunks loaded by ender pearls permanently unload upon player death even when enderPearlsVanishOnDeath is set to false
-   [MC-299837](https://bugs.mojang.com/browse/MC-299837) Running two or more /rotate commands in the same tick only applies the rotation of the last command
-   [MC-299872](https://bugs.mojang.com/browse/MC-299872) The freezing overlay flashes when a freezing player touches fire
-   [MC-299913](https://bugs.mojang.com/browse/MC-299913) The "You don't seem to have a Realm..." focusable text widget now has a black background
-   [MC-300051](https://bugs.mojang.com/browse/MC-300051) The top part of worn leggings does not render
-   [MC-300092](https://bugs.mojang.com/browse/MC-300092) F3 pie chart particle entries are missing names
-   [MC-300094](https://bugs.mojang.com/browse/MC-300094) Entities' held items no longer follow their arm movements when they have the invisibility effect
-   [MC-300100](https://bugs.mojang.com/browse/MC-300100) The “biome” debug option no longer has a space before its biome name
-   [MC-300105](https://bugs.mojang.com/browse/MC-300105) The player can drown while the game is paused
-   [MC-300108](https://bugs.mojang.com/browse/MC-300108) Villagers' and zombie villagers' clothes are incomplete
-   [MC-300113](https://bugs.mojang.com/browse/MC-300113) pack.mcmeta no longer accepts the longform object syntax in the supported\_formats field
-   [MC-300121](https://bugs.mojang.com/browse/MC-300121) Interacting with a group of more than 3 connected shelves causes the game to crash
-   [MC-300122](https://bugs.mojang.com/browse/MC-300122) Certain parts of horse armor are sometimes invisible
-   [MC-300131](https://bugs.mojang.com/browse/MC-300131) The "debug.entry.currently.inF3" string is improperly capitalized
-   [MC-300136](https://bugs.mojang.com/browse/MC-300136) Held item positions are synchronized between entities of the same model in view
-   [MC-300145](https://bugs.mojang.com/browse/MC-300145) Players can use items while their inventories are open when the “Use Item/Place Block” option is set to “Toggle”
-   [MC-300146](https://bugs.mojang.com/browse/MC-300146) Exiting interfaces is incredibly difficult when the “Use Item/Place Block” option is set to “Toggle”
-   [MC-300153](https://bugs.mojang.com/browse/MC-300153) The inner cubes of slimes are sometimes invisible from the outside
-   [MC-300155](https://bugs.mojang.com/browse/MC-300155) Players can freeze while standing in powder snow despite the game being paused
-   [MC-300164](https://bugs.mojang.com/browse/MC-300164) The value of the "Sprint Window" option is not saved
-   [MC-300165](https://bugs.mojang.com/browse/MC-300165) Players are damaged when blocking attacks with shields that disable shields
-   [MC-300166](https://bugs.mojang.com/browse/MC-300166) When looking\_at\_block or looking\_at\_fluid is enabled in the debug options, FPS is impacted by server tick rate
-   [MC-300168](https://bugs.mojang.com/browse/MC-300168) All shelf variants are in the redstone section of the creative inventory
-   [MC-300180](https://bugs.mojang.com/browse/MC-300180) Debug screen text now stays on the screen in F1
-   [MC-300187](https://bugs.mojang.com/browse/MC-300187) Interacting with items with certain components in the inventory causes a crash
-   [MC-300193](https://bugs.mojang.com/browse/MC-300193) Dying and respawning within the same dimension consistently shows a loading terrain screen
-   [MC-300196](https://bugs.mojang.com/browse/MC-300196) Local Difficulty debug information flickers if it is open while GUI is hidden
-   [MC-300214](https://bugs.mojang.com/browse/MC-300214) The shadows of baby mobs are now of the same size as those of their adult counterparts
-   [MC-300235](https://bugs.mojang.com/browse/MC-300235) First number in E counter is always stuck at 0
-   [MC-300248](https://bugs.mojang.com/browse/MC-300248) Subtitles/closed captions obstruct the inventory UI
-   [MC-300275](https://bugs.mojang.com/browse/MC-300275) Pausing while riding a strider on top of lava sets the player on fire
-   [MC-300305](https://bugs.mojang.com/browse/MC-300305) When multiple people use fishing rods, an additional black line is drawn
-   [MC-300340](https://bugs.mojang.com/browse/MC-300340) Continuously clicking "Continue" on the welcome page resets the button disappearance animation progress
-   [MC-300394](https://bugs.mojang.com/browse/MC-300394) Oxidized/waxed oxidized copper golems, statue and entity versions, have the wrong pixels underneath their feet compared to their other counterparts
-   [MC-300421](https://bugs.mojang.com/browse/MC-300421) Inconsistent capitalization for F3+F5 description in F3+Q debug menu
-   [MC-300440](https://bugs.mojang.com/browse/MC-300440) Elytra consumes durability while the game is paused in singleplayer
-   [MC-300464](https://bugs.mojang.com/browse/MC-300464) The debug crosshair is rendered in third person

---

Oh, how we have yearned for the shipping room! We're back with our first snapshot release of the season, bringing you a big bundle of features from our third game drop of the year. Test the copper golem and copper chest for a tidier, livelier base, and watch your helper oxidize and turn into a statue, complete with adorable, redstone signal-emitting poses. Build functional decor using the brand-new shelves and try out copper weapons, tools and armor. To top it off, this release also includes copper horse armor and oxidizing lightning rods, in addition to a slew of bug fixes and technical changes.

Happy mining!

## New Features

-   Added Copper Chest
-   Added Copper Golem
-   Added Copper Golem Statue Block
-   Added Copper Equipment
-   Added Shelf

### Copper Chest

-   Copper Chests is a new type of chest that has waxed and oxidized variants
-   Copper Chests oxidizes over time and can be waxed like other Copper blocks
-   Copper Chests can be crafted using a Chest and Copper Ingots

### Copper Golem

-   Copper Golem is a new mob which can be spawned by placing a Jack o'Lantern or Carved Pumpkin on top of a Copper block
-   Copper Golem oxidize over time and can be waxed like Copper blocks
-   If the Copper Golem has fully oxidized and is not waxed it will turn into a Copper Golem Statue Block
    -   When turned into a Copper Golem Statue the Copper Golem will drop any item it may be holding
    -   A Copper Golem turned into a Copper Golem Statue will keep its name if named with a Name Tag
-   Copper Golem can help with sorting items into Chests
-   Interacting with the Copper Golem with an empty hand will make it drop its carried item

#### Copper Golem Item Sorting

-   If the Copper Golem is not holding an item, it will look for nearby Copper Chests to try to pick up an item
    -   The Copper Golem will look in any oxidized and waxed Copper Chest variant to pick up items
    -   It can pick up at most 16 items in a stack at a time
    -   Any item in a Copper Chest can be picked up
-   If the Copper Golem is holding an item, it will look for nearby Chests to try to place the item in
    -   The Copper Golem will look in Chests and Trapped Chests to try to place items
    -   It can place an item in a Chest if it's empty, or if it contains the same type of item that it is holding in its hand
-   The Copper Golem will visit at most 10 Chests or Copper Chests in sequence to try to pick up or place an item
-   If no matching chest is found the Copper Golem will idle for 7 seconds before trying again
-   The search area for chests from the Copper Golem's position is horizontally 32 blocks and vertically 8 blocks

### Copper Golem Statue Block

-   The Copper Golem Statue Block is a new type of decorative block which has waxed and oxidized variants
-   The Copper Golem Statue Block oxidizes over time and can be waxed like Copper blocks
-   The pose of the block can be changed by interacting with it
-   If the Copper Golem Statue Block has no oxidation when interacted with using an Axe the block will turn into a Copper Golem
-   Each pose emits a Redstone comparator signal

### Lightning Rod

-   Lightning Rods now oxidize like other Copper Blocks and the Lightning Rod on the Copper Golem

### Copper Equipment

-   Added Copper Nugget
-   Added Copper armor
    -   Added Copper Helmet, Copper Chestplate, Copper Leggings and Copper Boots
    -   Copper armor has higher durability than leather and gold
    -   Copper armor has slightly less enchantability than iron
-   Added Copper tools and weapons
    -   Added Copper Axe, Copper Hoe, Copper Pickaxe, Copper Shovel and Copper Sword
    -   Copper tools and weapons do the same amount of damage as stone, but have higher durability
    -   Copper tools work faster and last longer than stone
    -   Copper tools have higher enchantability than diamond, but slightly less than iron
-   Copper equipment can be crafted using Copper Ingots
-   Copper equipment can be repaired with Copper Ingots
-   Copper equipment turns into a Copper Nugget when smelted
-   Added Copper Horse Armor
    -   Has the same loot table and chance of generating as Iron Horse Armor
    -   Armor toughness: 4

### Shelf

-   The Shelf is a new type of decorative block which comes in the following variants:
    -   Oak
    -   Spruce
    -   Birch
    -   Jungle
    -   Acacia
    -   Dark Oak
    -   Mangrove
    -   Cherry
    -   Pale Oak
    -   Bamboo
    -   Crimson
    -   Warped
-   The Shelf can be crafted from six matching blocks of any Stripped Log, Stripped Stem or Block of Stripped Bamboo, filling the top and bottom row
    -   This recipe produces 6 Shelves
-   The Shelf can store up to 3 item stacks:
    -   Interacting with any of the 3 slots on its front swaps the player's main hand item with the content of that slot
    -   The Shelf displays all items it contains in front of it, similar to an Item Frame
-   While a Shelf is powered by Redstone, its front texture changes to reflect that it's powered; when placed next to each other, up to 3 powered Shelves will connect
    -   Interacting with a single powered Shelf swaps all its contents with the 3 rightmost items in the player's hotbar
    -   Interacting with two connected Shelves swaps their contents with the 6 rightmost items in the player's hotbar
    -   Interacting with three connected Shelves swaps their contents with all items in the player's hotbar
    -   It does not matter which of the connected Shelves the player interacts with

### Accessibility

-   The "Attack/Destroy" and "Use Item/Place Block" keybinds are now toggleable, meaning they can be set to either "Hold" or "Toggle" in the Controls screen
-   Added "Invert Mouse X" option to the Mouse Settings screen, which inverts the mouse x-axis
-   Added "Sprint Window" option to the Controls screen, which represents the time window in ticks where double-tapping the forward key activates sprint

## Changes

-   Monster Spawn Eggs now have a tooltip warning when the difficulty is set to Peaceful
    -   The mob no longer spawns for one tick when an attempt is made to use the Spawn Egg
-   The debug screen was reworked to be less cluttered and more configurable
-   Changes to world loading and the "Spawn Chunks"
-   A dimension that has any player activity, forceloaded chunks, active portals, or Ender Pearls in flight will be considered "active" and will keep processing chunks and entities
    -   Previously, this would only apply if a player was in the dimension or a chunk was forceloaded

### World Loading and Spawn Chunks

-   The concept of fixed "Spawn Chunks" has been removed
-   The game will ensure that the following chunks are fully loaded before the player joins or the server starts, in the same way as spawn chunks formerly were:
    -   Chunks loaded by the `forceload` command
    -   Chunks active due to portal activity
    -   Ender Pearls thrown in Singleplayer (Singleplayer only)
    -   The small area of chunks around the player (Singleplayer only)
    -   Chunks required to assign the global world spawn (World creation only)
-   The world loading screen now shows the chunks that the player is about to be placed into, rather than chunks loaded around world spawn
-   The loading screen additionally now includes a progress bar
    -   This progress bar accounts for all kinds of chunk loading as mentioned above

> **Developer’s Note:** _Spawn chunks incur a memory and performance cost for all players and have outlived their initial technical purpose of keeping the spawn area ready for players to quickly join into._

> _However, we also want to recognise that spawn chunks have enabled a multitude of clever contraptions and farms throughout the years, so simply removing them without having other mechanics in the game enable these designs was never an option._

> _We believe that the niche held by spawn chunks has now been filled by alternative methods of chunk loading, such as using portals or ender pearls, particularly with the changes in this snapshot to how the game loads these chunks before the world starts ticking._

### Sounds

-   Happy ghast is now audible from 64 blocks
-   Sounds for chests now plays at a lower volume
-   The volume at which a sound is played at now respects the sound source volume value
-   The "Voice/Speech" sound source has been rephrased to "Narrator/Voice"

### UI

#### Debug Screen

-   The debug screen is accessible by pressing F3, as before
-   It can now be accessed from everywhere in the game, not only when in a game world
-   It now displays less information by default
-   Added a new Debug Options screen which can be opened by pressing F3 + F5
    -   It can be used to configure which debug information should be displayed
    -   For each item you can choose if it should be turned off, visible when the debug screen (F3) is open, or it should always be visible, even when the debug screen is closed
    -   Some debug features that were previously available, like chunk border rendering or entity hitbox rendering, can now be toggled through this debug options screen
    -   Some debug features that were not previously available to the community, like Octree visualization, are now accessible through the debug options screen
    -   The state of the debug options screen is saved between the launches of the game
    -   The debug options screen has the following preset profiles:
        -   `Default` resets everything to the default state
        -   `Performance` shows simple performance metrics, including the FPS meter always visible on screen

> **Developer's Note**: _Previously the information gathering every frame to render the F3 screen had a significant performance cost. So opening the screen to check you FPS noticably dropped the FPS. Now checking your FPS in `Performance` profile should not affect game performance._

### Accessibility

-   A button leading to the Controls screen has been added to the Accessibility Settings screen
    
    -   The "Auto-Jump" option, as well as the "Sneak" and "Sprint" toggles have been removed from the Accessibility Settings screen
-   The "Show Subtitles" option has been rephrased to "Closed Captions" to more accurately describe what it does
    
-   Dye Colors now have updated icons
    
    -   The goal with these is to enhance visual cohesion across the dye set while maintaining distinct shapes to support colorblind accessibility

### Performance Improvements

-   Entity rendering order was improved for significantly better performance
    -   You’ll notice much smoother gameplay in areas with lots of mobs, like mob farms
    -   FPS won’t improve much if most of your lag comes from things other than entities, like playing with high render distance while not being near many mobs

> **Developer's Note**: _This change is quite big, and we would not be surprised if we introduced some ordering issues with this. For example, some part of some mob rendering too early or too late and is not visible or is visually broken. Please play around with this and report the bugs you encounter!_

## Technical Changes

-   Pack versions now have minor versions
-   The Data Pack version is now 82.0
-   The Resource Pack version is now 65.0

### Pack Formats

-   The pack versions for data packs and resource packs now have minor versions
    -   A minor version increment of the game's pack version is backwards-compatible, meaning all packs made for previous iterations of the same major version will keep working
-   Packs can set compatibility requirements on minor versions in case they rely on resources introduced in a minor version

#### Pack Metadata

The pack.mcmeta format has been updated:

-   The `supported_formats` field has been removed
    -   If your pack declares support for a pack version with the previous format (data pack < 82, resource pack < 65), it is still required
    -   Otherwise, it is not allowed and must be removed
-   The `pack_format` field is now optional
    -   If your pack declares support for a pack version with the previous format (data pack < 82, resource pack < 65), it is still required
-   Added required field `min_format` - specifies the minimum version supported
    -   A full version is specified as a list of two integers, e.g `[74, 1]`
    -   Specifying a single integer is interpreted as that major version, e.g. `74` is the same thing as `[74, 0]`
    -   Specifying a list of a single integer is interpreted the same as specifying that integer alone
-   Added required field `max_format` - specified the maximum version supported
    -   A full version is specified as a list of two integers, e.g `[74, 1]`
    -   Specifying a single integer is interpreted as any minor version, i.e. the minor version is `0x7fffffff`
    -   Specifying a list of a single integer is interpreted the same as specifying that integer alone
-   For overlay entries:
    -   The `formats` field has been removed
        -   If your pack includes any overlay range that includes a pack version with the previous format (data pack < 82, resource pack < 65), it is still required for all overlay definitions
        -   Otherwise, it is not allowed and must be removed
    -   Added required field `min_format` and `max_format` with the same formats the fields above with the same name for the `pack` section

## Data Pack Version 82.0

### Commands

-   The `summon` command now fails when trying to summon monsters while the difficulty is set to Peaceful

### Game Rules

-   Removed `spawnChunkRadius` game rule

### Data Components

#### `blocks_attacks` Item Component

-   If the damage reduced in an attack is `0`, for example by `angle` threshold not matching, the item can no longer get disabled in the attack, nor cause knockback due to blocking

### Loot Tables

-   Added `minecraft:entity_interact` loot table type which takes the following parameters:
    -   `target_entity`, the entity being interacted with
    -   `interacting_entity`, the optional entity that is interacting with the `target_entity`
    -   `tool`, the tool used to interact with `target_entity`
-   Added `minecraft:block_interact` loot table type which takes the following parameters:
    -   `block_state`, the block state of the block entity being interacted with
    -   `block_entity`, the optional block entity being interacted with
    -   `interacting_entity`, the optional entity that is interacting with the `block_state`
    -   `tool`, the optional tool used to interact with `block_state`
-   Fields that specify a target entity in a loot table, such as `entity_properties.entity`, can additionally target the `target_entity` and `interacting_entity` parameter types
-   Added `charged_creeper/root` loot table for drops when an entity is killed by a Charged Creeper
    -   This loot table dispatches on the mob that was killed, to the following loot tables:
        -   `charged_creeper/piglin`
        -   `charged_creeper/creeper`
        -   `charged_creeper/skeleton`
        -   `charged_creeper/wither_skeleton`
        -   `charged_creeper/zombie`
    -   Once any mob killed drops an item from this loot table, other mobs killed by the same Creeper will not drop from this loot table
-   Added `brush/armadillo` loot table for drops when an Armadillo is brushed
-   Added `gameplay/turtle_grow` loot table for drops when a Turtle grows into an adult
-   Added `harvest/beehive` loot table for drops when a Beehive or Bee Nest is harvested using Shears
-   Added `harvest/cave_vine` loot table for drops when a Cave Vine with Glowberries is harvested by interacting with it
-   Added `carve/pumpkin` loot table for drops when a Pumpkin is carved using Shears

### World Generation

-   The `initial_density_without_jaggedness` field in `noise_settings` definitions has been replaced with a `preliminary_surface_level` field
    -   `initial_density_without_jaggedness` was a 3D density function that was used to determine an approximate surface level by scanning for the first point with a density greater than `0.390625`
    -   `preliminary_surface_level` is a 2D density function that should produce the y-level of the approximate surface
    -   The `minecraft:find_top_surface` density function can be used to replicate the previous scanning

#### Density Functions

##### Added `minecraft:find_top_surface`

-   Approximates the topmost surface of a given density function
-   It scans from an upper bound to a lower bound to find the point at which the density changes from negative to positive
    -   The upper bound should be as close to the actual surface for best performance
    -   The upper bound should never be lower than the actual surface

Fields:

-   `density` - density function to approximate the surface of
-   `upper_bound` - 2D density function providing the highest possible y-value
-   `lower_bound` - integer, lowest possible y-value
-   `cell_height` - positive integer defining the grid resolution on which to scan

##### Added `minecraft:invert`

-   Resolves to `1/argument`

Fields:

-   `argument` - density function

#### Jigsaw Structures

-   The `max_distance_from_center` field may now specify a different restriction on the vertical axis from horizontal
    -   This can be specified by an object with fields:
        -   `horizontal` - required integer between `1` and `128`
        -   `vertical` - optional integer between `1` and `4096` (default: `4096`)
        -   e.g: `"max_distance_from_center": { "horizontal": 20, "vertical": 500 }`
    -   The previous format of a single inline value specifying both horizontal and vertical distance is still supported

### Tags

#### Block Tags

-   Added `#copper_chests` - all Copper Chest blocks
-   Added `#copper` - all Copper blocks
-   Added `#incorrect_for_copper_tool` - all blocks which will not drop items with a copper tool
-   Added `#copper_golem_statues` - all Copper Golem Statue blocks

#### Item Tags

-   Added `#copper_chests` - all Copper Chest block items
-   Added `#copper` - all Copper block items
-   Added `#copper_tool_materials` - all copper tool materials
-   Added `#repairs_copper_armor` - all items which repair copper armor
-   Added `#copper_golem_statues` - all Copper Golem Statue block items

## Resource Pack Version 65.0

### Block Sprites

-   Added new block sprites:
    -   `copper`
    -   `copper_left`
    -   `copper_right`
    -   `exposed_copper`
    -   `exposed_copper_left`
    -   `exposed_copper_right`
    -   `weathered_copper`
    -   `weathered_copper_left`
    -   `weathered_copper_right`
    -   `oxidized_copper`
    -   `oxidized_copper_left`
    -   `oxidized_copper_right`
    -   `acacia_shelf`
    -   `bamboo_shelf`
    -   `birch_shelf`
    -   `cherry_shelf`
    -   `crimson_shelf`
    -   `dark_oak_shelf`
    -   `jungle_shelf`
    -   `mangrove_shelf`
    -   `oak_shelf`
    -   `pale_oak_shelf`
    -   `spruce_shelf`
    -   `warped_shelf`

### Entity Sprites

-   Added new entity sprites:
    -   `copper_golem`
    -   `exposed_copper_golem`
    -   `weathered_copper_golem`
    -   `oxidized_copper_golem`
    -   `copper_golem_eyes`
    -   `exposed_copper_golem_eyes`
    -   `weathered_copper_golem_eyes`
    -   `oxidized_copper_golem_eyes`

### Item Sprites

-   Added new item sprites:
    -   `copper_axe`
    -   `copper_boots`
    -   `copper_chestplate`
    -   `copper_golem_spawn_egg`
    -   `copper_helmet`
    -   `copper_hoe`
    -   `copper_leggings`
    -   `copper_nugget`
    -   `copper_pickaxe`
    -   `copper_shovel`
    -   `copper_sword`

#### Sound Events

-   Added new sound events:
    -   `block.copper_chest.open`
    -   `block.copper_chest.close`
    -   `block.copper_chest_weathered.open`
    -   `block.copper_chest_weathered.close`
    -   `block.copper_chest_oxidized.open`
    -   `block.copper_chest_oxidized.close`
    -   `entity.copper_golem.step`
    -   `entity.copper_golem.hurt`
    -   `entity.copper_golem.death`
    -   `entity.copper_golem.spin`
    -   `entity.copper_golem_weathered.step`
    -   `entity.copper_golem_weathered.hurt`
    -   `entity.copper_golem_weathered.death`
    -   `entity.copper_golem_weathered.spin`
    -   `entity.copper_golem_oxidized.step`
    -   `entity.copper_golem_oxidized.hurt`
    -   `entity.copper_golem_oxidized.death`
    -   `entity.copper_golem_oxidized.spin`
    -   `item.armor.equip_copper`
    -   `entity.copper_golem.spawn`
    -   `entity.copper_golem.no_item_get`
    -   `entity.copper_golem.no_item_not_get`
    -   `entity.copper_golem.item_drop`
    -   `entity.copper_golem.item_no_drop`
    -   `entity.copper_golem_become_statue`
    -   `block.copper_golem_statue.break`
    -   `block.copper_golem_statue.place`
    -   `block.copper_golem_statue.hit`
    -   `block.copper_golem_statue.fall`
    -   `block.copper_golem_statue.step`
    -   `block.shelf.activate`
    -   `block.shelf.deactivate`
    -   `block.shelf.multi_swap`
    -   `block.shelf.place_item`
    -   `block.shelf.single_swap`

### Shaders & Post-process Effects

> **Developer's Note**: _Although it is possible in Resource Packs, overriding Core Shaders is considered as unsupported and not an intended Resource Pack feature. These shaders exist as part of the internal implementation of the game, and as such, may change at any time as the game's internals evolve. We understand that overriding Core Shaders is used for very cool Resource Pack features, many of which lack supported alternatives. We would like to provide better, supported alternatives in the future._

#### Changes to Full Screen Passes

-   The following vertex shaders have been removed, and replaced by `core/screenquad.vsh`:
    -   `core/blit_screen.vsh`
    -   `post/blit.vsh`
    -   `post/blur.vsh`
    -   `post/invert.vsh`
    -   `post/sobel.vsh`
    -   `post/screenquad.vsh`
-   Vertex shaders for post-processing effects, as well as lightmap generation and full screen blits are no longer are passed the `Position` attribute, and instead must assign vertex coordinates by `gl_VertexID`
-   These passes furthermore are only executed with 3 vertices, instead of a full quad

## Fixed bugs in 25w31a

-   [MC-46634](https://bugs.mojang.com/browse/MC-46634) Thunder volume is not affected by weather volume settings
-   [MC-73881](https://bugs.mojang.com/browse/MC-73881) Summoning monsters in peaceful difficulty spawns monster for 1 tick
-   [MC-89142](https://bugs.mojang.com/browse/MC-89142) Changing jump key to "Enter" let player jump after completing chat line
-   [MC-94610](https://bugs.mojang.com/browse/MC-94610) Missing loot table entries for mob heads from charged creepers
-   [MC-98200](https://bugs.mojang.com/browse/MC-98200) All sound sliders except master are ignored by high-volume /playsound
-   [MC-183776](https://bugs.mojang.com/browse/MC-183776) After switching game modes using F3+F4, you need to press F3 twice to toggle the debug screen
-   [MC-192907](https://bugs.mojang.com/browse/MC-192907) The F3 debug menu cannot be toggled while chat is open
-   [MC-196443](https://bugs.mojang.com/browse/MC-196443) When reducedDebugInfo is true, hitting F3+B and F3+G would still tell the player in chat that they are being toggled, despite nothing happening
-   [MC-197247](https://bugs.mojang.com/browse/MC-197247) Using F3+D to clear pending lines keeps the previous delay for a new message
-   [MC-203401](https://bugs.mojang.com/browse/MC-203401) Double-tapping forward button to sprint cannot be disabled/reconfigured
-   [MC-220842](https://bugs.mojang.com/browse/MC-220842) Opening game mode switcher while spectating a mob with shader effect toggles the effect
-   [MC-234479](https://bugs.mojang.com/browse/MC-234479) You can invite the same player multiple times to your realm even if they've already received an invitation or have already joined it
-   [MC-235780](https://bugs.mojang.com/browse/MC-235780) The beacon GUI incorrectly displays the "Beacon" tooltip when the mouse cursor is held over the "Done" or "Cancel" buttons
-   [MC-237016](https://bugs.mojang.com/browse/MC-237016) The chat delay function continues to print messages despite the game being paused
-   [MC-237843](https://bugs.mojang.com/browse/MC-237843) Players can be idle kicked whilst viewing the end credits
-   [MC-259692](https://bugs.mojang.com/browse/MC-259692) Sneaking and sprinting states are activated or toggled unexpectedly when releasing their input keys while an interface was just previously closed
-   [MC-259935](https://bugs.mojang.com/browse/MC-259935) It can snow even when biome precipitation is set to NONE
-   [MC-260822](https://bugs.mojang.com/browse/MC-260822) The "Done" and "Cancel" buttons within the beacon GUI no longer display tooltips when the mouse cursor is held over them
-   [MC-261387](https://bugs.mojang.com/browse/MC-261387) Redundant block\_predicate\_filter check in mangrove tree placement
-   [MC-262000](https://bugs.mojang.com/browse/MC-262000) Unused texture: misc/white.png
-   [MC-263597](https://bugs.mojang.com/browse/MC-263597) The ender dragon's respawning noise cannot be turned down by the Hostile Mobs volume slider
-   [MC-269838](https://bugs.mojang.com/browse/MC-269838) Pumpkin seeds drop from sheared pumpkins is hardcoded
-   [MC-269839](https://bugs.mojang.com/browse/MC-269839) Honeycomb drop from sheared bee nests and beehives is hardcoded
-   [MC-270918](https://bugs.mojang.com/browse/MC-270918) Loot tables for mob heads are missing copy\_components loot function for custom\_name
-   [MC-275244](https://bugs.mojang.com/browse/MC-275244) Setting "width\_smoothness" in file configured\_carver to 0 causes the game to freeze or crash
-   [MC-275432](https://bugs.mojang.com/browse/MC-275432) Subtitles are difficult to see within screens
-   [MC-276568](https://bugs.mojang.com/browse/MC-276568) Mipmapped versions of the armor trims atlas are generated
-   [MC-276629](https://bugs.mojang.com/browse/MC-276629) Glow berries drop from cave vines appears to be hardcoded
-   [MC-276759](https://bugs.mojang.com/browse/MC-276759) Scute drop from brushing armadillos is hardcoded
-   [MC-277447](https://bugs.mojang.com/browse/MC-277447) Minecraft generates mipmapped textures for chests, but does not use them
-   [MC-277450](https://bugs.mojang.com/browse/MC-277450) Minecraft generates mipmapped textures for shulker boxes, but does not use them
-   [MC-277470](https://bugs.mojang.com/browse/MC-277470) Minecraft generates mipmapped textures for beds, but does not use them
-   [MC-277471](https://bugs.mojang.com/browse/MC-277471) Minecraft generates mipmapped textures for signs, but does not use them
-   [MC-277473](https://bugs.mojang.com/browse/MC-277473) Minecraft generates mipmapped textures for decorated pots, but does not use them
-   [MC-277481](https://bugs.mojang.com/browse/MC-277481) Minecraft generates mipmapped textures for banners, but does not use them
-   [MC-277483](https://bugs.mojang.com/browse/MC-277483) Minecraft generates mipmapped textures for shields, but does not use them
-   [MC-277770](https://bugs.mojang.com/browse/MC-277770) Processor type block\_age always modifies slabs property "type" to bottom
-   [MC-278965](https://bugs.mojang.com/browse/MC-278965) Cherry Grove is not part of the #stronghold\_biased\_to tag
-   [MC-279793](https://bugs.mojang.com/browse/MC-279793) Mounting horses, donkeys, mules, zombie horses, skeleton horses, and camels no longer forces you to face forward
-   [MC-289348](https://bugs.mojang.com/browse/MC-289348) Ender pearls stop loading chunks in The End after relog, if there are no players in that dimension
-   [MC-297593](https://bugs.mojang.com/browse/MC-297593) Cauldrons now apply the effect of the substance they're filled with when contacted from the underside
-   [MC-298274](https://bugs.mojang.com/browse/MC-298274) Certain invalid commands give "see below for error" with no additional information
-   [MC-298732](https://bugs.mojang.com/browse/MC-298732) The cursor is no longer shown at the end of lines that aren't the final one
-   [MC-298805](https://bugs.mojang.com/browse/MC-298805) Axes disable shields even when the shield does not block the attack
-   [MC-298883](https://bugs.mojang.com/browse/MC-298883) The active world slot is not highlighted when selected via TAB navigation in Realms
-   [MC-299450](https://bugs.mojang.com/browse/MC-299450) You can no longer double-click to select characters in the book and quill interface
-   [MC-299451](https://bugs.mojang.com/browse/MC-299451) Pages in book and quills are no longer automatically focused when switching pages
-   [MC-299566](https://bugs.mojang.com/browse/MC-299566) The cursor in the book and quill interface is positioned too far to the left
-   [MC-299628](https://bugs.mojang.com/browse/MC-299628) Mounted players/mobs trigger sculk sensors on world load
-   [MC-299782](https://bugs.mojang.com/browse/MC-299782) Zombie villagers saved in jigsaw structures forget their biome variant and profession upon world generation
-   [MC-299896](https://bugs.mojang.com/browse/MC-299896) You can switch the worlds of expired realms to empty slots, which misleadingly prompts world creation despite no active realms subscription
-   [MC-300021](https://bugs.mojang.com/browse/MC-300021) Some elements of the villager interface are now rendered above the cursor item

---

Summer is finally here in Stockholm on this fine Snapshot Tuesday - but it seems some of our developers missed those beautiful, gray, rainy skies far too much and absolutely insisted on giving the clouds in Minecraft a new look. What a de-light!

## New Features

-   Updated the pattern of clouds in the sky
-   Horses, Donkeys, and Mules can now be fed carrots to heal, grow, and improve their temper

### Music and Sound

-   Added a new sound for when a Lead snaps
-   Added new custom sounds for shearing Saddles, Horse Armor, and Carpets from Llamas

## Technical Changes

-   The Data Pack version is now 78
-   The Resource Pack version is now 62

## Data Pack Version 78

### Dialogs

-   `run_command` click actions will now correctly close dialogs and book screens even if the command does not require elevated permissions
-   Dialogs should now correctly return to the previous non-dialog screen on close in all cases
-   If a new dialog is received by the client while warning screen is visible, it will not replace it, but when user clicks the "Back" button, the new dialog will be restored instead
-   The sizes of elements in dialogs are now restricted:
    -   buttons - between `1` and `1024` (inclusive)
    -   `minecraft:plain_message` dialog body - between `1` and `1024` (inclusive)
    -   `minecraft:item` dialog body
        -   `width` of `description` - between `1` and `1024` (inclusive)
        -   `width` - between `1` and `256` (inclusive)
        -   `height` - between `1` and `256` (inclusive)
    -   `minecraft:text` input control - between `1` and `1024` (inclusive)
    -   `minecraft:single_option` input control - between `1` and `1024` (inclusive)
    -   `minecraft:number_range` input control - between `1` and `1024` (inclusive)

#### `minecraft:text` Input Control

-   `max_length` - maximum length of input, positive integer with default of 32
-   `multiline` - if present, allows users to input multiple lines, optional object with fields:
    -   `max_lines` - if present, limits maximum lines, optional positive integer
    -   `height` - height of input, optional integer in range `1` to `512`
        -   If this field is omitted, but `max_lines` is present, the height will be chosen to fit the maximum number of lines
        -   If this and `max_lines` are both omitted, it will default to a height that fits 4 lines

#### `minecraft:number_range` Input Control

-   The `steps` field has been replaced with a new field:
    -   `step` - step size, optional positive float
        -   If present, only values of `initial + <any integer> * step` will be allowed
        -   If absent, any value from range the is allowed
-   `initial` - if not specified, now defaults to the middle of the range

#### `minecraft:multi_action_input_form` Dialog Type

-   Added new field `columns` - positive integer describing number of columns, default: `2`

## Resource Pack Version 62

### Sounds

-   Added `entity/leashknot/break` for when a Lead snaps
-   The following sounds have been renamed:
    -   `entity/leashknot/break1` -> `entity/leashknot/unleash1`
    -   `entity/leashknot/break2` -> `entity/leashknot/unleash2`
    -   `entity/leashknot/break3` -> `entity/leashknot/unleash3`
    -   `entity/leashknot/place1` -> `entity/leashknot/leash1`
    -   `entity/leashknot/place2` -> `entity/leashknot/leash2`
    -   `entity/leashknot/place3` -> `entity/leashknot/leash3`
-   The following sounds have been added for shearing Saddles, Horse Armor, and Carpets from Llamas
    -   `mob/horse/armor_unequip`
    -   `mob/horse/saddle_unequip`
    -   `mob/llama/unequip`

## Fixed bugs in 25w21a

-   [MC-36696](https://bugs.mojang.com/browse/MC-36696) Clicking on the statistics button on the menu screen advances the game by 1 tick
-   [MC-112730](https://bugs.mojang.com/browse/MC-112730) Beacon beam and structure block render twice per frame
-   [MC-236464](https://bugs.mojang.com/browse/MC-236464) Beacon beams emitted from below the player are invisible after reloading chunks
-   [MC-258336](https://bugs.mojang.com/browse/MC-258336) Frost Walker causes frequent visual corruption near chunk borders on Threaded and Semi-Blocking Chunk Builder
-   [MC-296337](https://bugs.mojang.com/browse/MC-296337) Minecarts cause memory usage increases and crashes
-   [MC-297264](https://bugs.mojang.com/browse/MC-297264) Cat breeds are not seed based anymore
-   [MC-297336](https://bugs.mojang.com/browse/MC-297336) Experience orbs from thrown bottles o' enchanting are very prone to getting stuck inside blocks when thrown against a corner
-   [MC-297615](https://bugs.mojang.com/browse/MC-297615) Untranslatable error message when trying to join a closed Realm
-   [MC-297803](https://bugs.mojang.com/browse/MC-297803) The string "menu.custom\_screen\_info.contents" misspells "personal" as "pesonal"
-   [MC-297806](https://bugs.mojang.com/browse/MC-297806) music.game.swamp.labyrinthine misspells the song's title
-   [MC-297808](https://bugs.mojang.com/browse/MC-297808) music.game.oxygene is missing the grave accent sign
-   [MC-297812](https://bugs.mojang.com/browse/MC-297812) Bold text is rendered differently than in previous versions
-   [MC-297813](https://bugs.mojang.com/browse/MC-297813) Amos Roddy is not listed in the credits
-   [MC-297823](https://bugs.mojang.com/browse/MC-297823) music.game.mice\_on\_venus is using wrong capitalization
-   [MC-297845](https://bugs.mojang.com/browse/MC-297845) Clicking the Statistics button in Singleplayer does not play the button click sound until you resume playing
-   [MC-297846](https://bugs.mojang.com/browse/MC-297846) The music toast flashes in the pause menu when the Music slider is set to zero
-   [MC-297875](https://bugs.mojang.com/browse/MC-297875) Text shadow from underlined text overlaps the text below it in chat messages
-   [MC-297888](https://bugs.mojang.com/browse/MC-297888) Text no longer renders in a consistent order across different fonts
-   [MC-297917](https://bugs.mojang.com/browse/MC-297917) The client stops responding when showing a dialog with an extremely wide button
-   [MC-297977](https://bugs.mojang.com/browse/MC-297977) Dialog columns layout has extra spacing between the grid and the overflow linear layout

---

