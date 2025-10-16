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
-   [MC-301833](https://bugs.mojang.com/browse/MC-301833) Text of text;;_;;display entities is darker when "see;;_;;through" property is set to true
-   [MC-301869](https://bugs.mojang.com/browse/MC-301869) The specification for the minecraft:ip;;_;;bans server management method says it returns an array of players even though it returns an array of ip;;_;;ban objects
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
-   [MC-279173](https://bugs.mojang.com/browse/MC-279173) The "chat.disabled.invalid;;_;;command;;_;;signature" string is missing an article before the word "Command"
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
-   [MC-301259](https://bugs.mojang.com/browse/MC-301259) Shelf align;;_;;items;;_;;to;;_;;bottom in block entity data doesn't work
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

