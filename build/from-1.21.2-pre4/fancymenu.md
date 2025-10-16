# 1.21.2 Pre-Release 4

Hello! Another day, another Pre-Release. We're releasing the fourth Pre-Release of 1.21.2, further stabilizing this version.

Happy mining!

## Fixed bugs in 1.21.2 Pre-Release 4

-   [MC-277496](https://bugs.mojang.com/browse/MC-277496) Text on maps that are in item frames render through blocks
-   [MC-277502](https://bugs.mojang.com/browse/MC-277502) Compasses do not point in correct direction when in left hand
-   [MC-277505](https://bugs.mojang.com/browse/MC-277505) Clocks are mirrored and spin in the wrong direction when in left hand
-   [MC-277513](https://bugs.mojang.com/browse/MC-277513) Item cooldowns of item stacks greater than 1 render in front of item tooltips
-   [MC-277517](https://bugs.mojang.com/browse/MC-277517) Arrows' landing points are lower than in previous versions
-   [MC-277518](https://bugs.mojang.com/browse/MC-277518) Crafting an item that has not yet been crafted removes all tabs in the recipe book other than the topmost one
-   [MC-277548](https://bugs.mojang.com/browse/MC-277548) Invisible block entities and items disappearing
-   [MC-277552](https://bugs.mojang.com/browse/MC-277552) Wandering traders look smaller than in previous versions
-   [MC-277559](https://bugs.mojang.com/browse/MC-277559) Sliding down honey blocks is still different from previous versions

---

# 1.21.2 Pre-Release 3

We are rounding off this week with the third 1.21.2 Pre-Release, including even more bug fixes!

Happy mining and have a nice weekend!

## Changes

### High Contrast Resource Pack

Added the following high contrast textures:

-   Frame and background textures for tooltips
-   Slot background and highlight textures for the Bundle tooltip

## Technical Changes

-   Resource Pack version is now 42

## Resource Pack Version 42

-   Added `container/bundle/slot_background` texture for bundle slot background

## Fixed bugs in 1.21.2 Pre-Release 3

-   [MC-277316](https://bugs.mojang.com/browse/MC-277316) Passengers dismount minecarts/boats when converting
-   [MC-277453](https://bugs.mojang.com/browse/MC-277453) Projectiles visually fall when shot in a wall with high tick rate
-   [MC-277488](https://bugs.mojang.com/browse/MC-277488) Mobs in their death animations produce the fire extinguishing sound every tick while being in lava while it's raining
-   [MC-277491](https://bugs.mojang.com/browse/MC-277491) Mobs in their death animations that are inside both water and lava produce the fire extinguishing sound every tick

---

# Minecraft 1.21.2 Pre-Release 2

Today we are shipping the second Pre-Release for 1.21.2 with some more bug fixes and Pale Hanging Moss changes. During this stabilization phase before the full release of Minecraft Java Edition 1.21.2 we are focusing on fixing bugs and don't follow the regular snapshot cadence of releasing on Wednesdays, so keep an eye out for the next pre-release.

## Experimental Features

### Winter Drop

**Pale Moss**

-   Pale Hanging Moss now only drops when cut with Shears or destroyed using tool with Silk Touch
-   Pale Moss Carpet is now more efficient to destroy with Sword
-   Pale Moss Carpet now plays the correct step sound when walking over it

## Fixed bugs in 1.21.2 Pre-Release 2

-   [MC-54532](https://bugs.mojang.com/browse/MC-54532) Sneaking while falling on Slime Blocks inflicts fall damage
-   [MC-160810](https://bugs.mojang.com/browse/MC-160810) Some items are held sideways in left hand
-   [MC-266480](https://bugs.mojang.com/browse/MC-266480) Breeze can jump on top of honey blocks
-   [MC-266494](https://bugs.mojang.com/browse/MC-266494) Jump Boost does not affect the breeze's jump
-   [MC-269851](https://bugs.mojang.com/browse/MC-269851) Breeze idle animations are different than Bedrock Edition
-   [MC-275834](https://bugs.mojang.com/browse/MC-275834) Jumping when falling onto a slime block no longer cancels the bounce effect
-   [MC-275941](https://bugs.mojang.com/browse/MC-275941) Consumable item components with inlined sound event definitions cause undefined behavior
-   [MC-276072](https://bugs.mojang.com/browse/MC-276072) Tridents enchanted with Loyalty fly around drowned upon returning to them
-   [MC-276605](https://bugs.mojang.com/browse/MC-276605) Throwing an ender pearl through a portal or gateway often results in the player being placed slightly too low
-   [MC-276624](https://bugs.mojang.com/browse/MC-276624) Nether portal can send you back when your ender pearl land in the portal
-   [MC-276716](https://bugs.mojang.com/browse/MC-276716) Thrown ender pearl teleport position is inconsistent
-   [MC-276813](https://bugs.mojang.com/browse/MC-276813) Minecraft no longer prints an error to the game log when trying to render a character without a defined glyph in the loaded fonts
-   [MC-276825](https://bugs.mojang.com/browse/MC-276825) Transmute recipes allow air as output
-   [MC-276906](https://bugs.mojang.com/browse/MC-276906) Specifying a block tag in an item's can;;_;;place;;_;;on or can;;_;;break component in a recipe or loot table causes validation error
-   [MC-276954](https://bugs.mojang.com/browse/MC-276954) Ender pearl interaction with bubble columns is still broken
-   [MC-276963](https://bugs.mojang.com/browse/MC-276963) Mobs standing inside both lava and water produce the fire extinguishing sound every tick
-   [MC-276978](https://bugs.mojang.com/browse/MC-276978) Mobs produce the fire extinguishing sound every tick while standing in lava in rain
-   [MC-277000](https://bugs.mojang.com/browse/MC-277000) Entities can be damaged by fire without being ignited
-   [MC-277073](https://bugs.mojang.com/browse/MC-277073) Pale moss and pale moss carpets cannot be broken faster using hoes
-   [MC-277091](https://bugs.mojang.com/browse/MC-277091) Pale oak boats are in the chest boats tag in place of pale oak chest boats
-   [MC-277096](https://bugs.mojang.com/browse/MC-277096) When selecting a biome in the single biome world type, there is no translation for the pale garden
-   [MC-277135](https://bugs.mojang.com/browse/MC-277135) Entity collision order is now locational
-   [MC-277165](https://bugs.mojang.com/browse/MC-277165) Particles produced upon creakings spawning are spawned one block too far to the east
-   [MC-277175](https://bugs.mojang.com/browse/MC-277175) #overworld;;_;;natural;;_;;logs block tag contains #pale;;_;;oak;;_;;logs instead of pale;;_;;oak;;_;;log
-   [MC-277212](https://bugs.mojang.com/browse/MC-277212) The "options.accessibility.high;;_;;contrast;;_;;block;;_;;outline.tooltip" string is missing an article before the word "targeted"
-   [MC-277309](https://bugs.mojang.com/browse/MC-277309) Missing translations for Pale Oak Wall (Hanging) Signs
-   [MC-277376](https://bugs.mojang.com/browse/MC-277376) Consumable block animation inherits shield behaviors
-   [MC-277389](https://bugs.mojang.com/browse/MC-277389) Armor stand in the smithing table interface no longer render armor when appropriate
-   [MC-277392](https://bugs.mojang.com/browse/MC-277392) The realms description text and the game mode text within the realms menu can intersect one another
-   [MC-277398](https://bugs.mojang.com/browse/MC-277398) The horse armor equipping sound is unusually loud
-   [MC-277402](https://bugs.mojang.com/browse/MC-277402) Horse armor doesn't render properly in horse inventory again
-   [MC-277404](https://bugs.mojang.com/browse/MC-277404) Entities' limbs are incorrectly positioned for a brief second when entities are damaged while riding entities
-   [MC-277405](https://bugs.mojang.com/browse/MC-277405) Mounts no longer receive damage when riding them through sweet berry bushes
-   [MC-277409](https://bugs.mojang.com/browse/MC-277409) Text on glowing signs no longer looks different to text on normal signs
-   [MC-277417](https://bugs.mojang.com/browse/MC-277417) /tp no longer works when run from a command block without context from "execute as"
-   [MC-277424](https://bugs.mojang.com/browse/MC-277424) The pale garden can prevent trial chambers from spawning
-   [MC-277438](https://bugs.mojang.com/browse/MC-277438) Wolf Armor no longer shows cracks when damaged
-   [MC-277452](https://bugs.mojang.com/browse/MC-277452) Player idle timeout does not kick players

---

# Minecraft 1.21.2 Pre-Release 1

## Experimental Features

### Winter Drop

**Creaking mob**

-   Creaking will not activate or freeze around players in Creative mode
-   Creaking summoned from the Creaking Heart cannot be named with a Nametag

**Creaking Heart**

-   Comparators attached to the Creaking Heart block will output a signal strength dependent on the distance to the connected Creaking

## Changes

-   Tweaked air bubbles UI
    -   Added an empty state for air bubbles along with a wobble when the player is drowning
    -   Added a popping sound when the bubbles pop in the UI

## Technical Changes

-   The Data Pack version is now 57
-   Resource Pack version is now 41

## Data Pack Version 57

-   Added `disablePlayerMovementCheck` game rule (default: false) that disables player movement speed restriction
    -   This behaves the same as the `disableElytraMovementCheck` rule, but applies irrespective of flying with Elytra

### Item Components

**`minecraft:equippable`**

-   Added field `camera_overlay` (optional): namespaced ID of the overlay texture to use when equipped
    -   If not specified, no overlay is used
    -   The ID will address a texture under the `textures/` folder and automatically assumed to be `.png`
        -   For instance, `misc/pumpkinblur` addresses `textures/misc/pumpkinblur.png`

### Particles

-   Format of color fields in particle options is now more standardized:
    -   RGB fields can always be encoded either as a vector of floats (order: `[R,G,B]`) or as a single packed integer (order: `RGB`)
    -   ARGB fields can always be encoded either as a vector of floats (order: `[R,G,B,A]` or as a single packed integer (order: `ARGB`)
    -   Changed fields:
        -   `minecraft:trail.color` (previously accepted only integer)
        -   `minecraft:dust.color` (previously accepted only vector of floats)
        -   `minecraft:dust_color_transition.from_color` (previously accepted only vector of floats)
        -   `minecraft:dust_color_transition.to_color` (previously accepted only vector of floats)

## Resource Pack Version 41

-   Added texture and sound for tweaked air bubble UI
    -   New texture added for empty air bubble
    -   Sound added for when air bubble pops

## Fixed bugs in 1.21.2 Pre-Release 1

-   [MC-276360](https://bugs.mojang.com/browse/MC-276360) Repeating command block data is often lost when moving it around in inventory
-   [MC-276604](https://bugs.mojang.com/browse/MC-276604) Horse Armor no longer has enchantment glint
-   [MC-276815](https://bugs.mojang.com/browse/MC-276815) Dyed bundles are missing the "filled" predicate
-   [MC-276965](https://bugs.mojang.com/browse/MC-276965) Post shader ColorModulate uniform not reset properly after spectating spiders
-   [MC-276979](https://bugs.mojang.com/browse/MC-276979) Lock field on containers and minecraft:lock data component do not get datafixed correctly when a ;;\;; is present
-   [MC-277017](https://bugs.mojang.com/browse/MC-277017) Flaming arrows no longer extinguish when water or powder snow is placed in its location
-   [MC-277019](https://bugs.mojang.com/browse/MC-277019) Execute command teleporting across dimensions does not use correct relative coordinates
-   [MC-277027](https://bugs.mojang.com/browse/MC-277027) Shapeless recipes accept anything if one of their ingredients is an empty tag
-   [MC-277028](https://bugs.mojang.com/browse/MC-277028) Bundles do not empty smoothly
-   [MC-277067](https://bugs.mojang.com/browse/MC-277067) The high contrast and programmer art resource packs are displayed as being incompatible
-   [MC-277078](https://bugs.mojang.com/browse/MC-277078) Trim advancements use recipe registry key
-   [MC-277108](https://bugs.mojang.com/browse/MC-277108) The "below;;_;;name" scoreboard display mode renders with dark parts when custom colors are set
-   [MC-277111](https://bugs.mojang.com/browse/MC-277111) Wandering traders can sell pale oak saplings even when they're disabled
-   [MC-277118](https://bugs.mojang.com/browse/MC-277118) Creakings can spawn with doMobSpawning set to false
-   [MC-277131](https://bugs.mojang.com/browse/MC-277131) Pale garden missing from #minecraft:is;;_;;overworld biome tag
-   [MC-277141](https://bugs.mojang.com/browse/MC-277141) /rotate command is not restricted to permission level 2
-   [MC-277143](https://bugs.mojang.com/browse/MC-277143) Horse armor has damage-related components
-   [MC-277144](https://bugs.mojang.com/browse/MC-277144) Furnaces, blast furnaces, and smokers delete all of their contents inside them once reloaded after smelting items
-   [MC-277148](https://bugs.mojang.com/browse/MC-277148) Pack filters removing recipes that the player has unlocked causes data pack loading to fail
-   [MC-277160](https://bugs.mojang.com/browse/MC-277160) Pale hanging moss is often immediately destroyed when placed using the "/fill" command
-   [MC-277163](https://bugs.mojang.com/browse/MC-277163) Map color for pale oak saplings is incorrect
-   [MC-277176](https://bugs.mojang.com/browse/MC-277176) Team affixes have dark lines between them and the username in player name tags
-   [MC-277215](https://bugs.mojang.com/browse/MC-277215) The game crashes when attempting to accept or reject already accepted or rejected realm invitations
-   [MC-277301](https://bugs.mojang.com/browse/MC-277301) The enchantment glint isn't visible on thrown tridents that are enchanted or held in the hand in third person when using Fabulous graphics
-   [MC-277302](https://bugs.mojang.com/browse/MC-277302) The enchantment glint isn't visible on shields that are enchanted in third person when using Fabulous graphics

---

# Minecraft Snapshot 24w40a

Hello!

In this week's snapshot we are adding a new experiment which will allow you to experience the Pale Garden, a new eerie biome filled with Pale Oak Trees and Hanging Moss. Beware of its sole inhabitant, the Creaking, and don't blink!

Happy Exploring!

## Experimental Features

The experimental feature with the Pale Garden biome can be enabled by turning the "Winter Drop" experiment on. You can do this in the Experiments screen while creating the world. These experiments have no effect unless enabled. You can find more information about Feature Toggles [here](https://www.minecraft.net/en-us/article/testing-new-minecraft-features/feature-toggles-java-edition).

We would love to hear your feedback on the new Pale Garden biome and the hostile mob the Creaking.

Creaking feedback thread: [https://aka.ms/mccreakingfeedback](https://aka.ms/mccreakingfeedback)

Pale garden feedback thread: [https://aka.ms/mcpalegardenfeedback](https://aka.ms/mcpalegardenfeedback)

### Winter Drop

-   Added Pale Garden Biome, Pale Oak tree, Pale Moss block, Pale Moss carpet, Pale Hanging Moss and Pale Oak woodset
-   Added Creaking mob, Creaking Spawn Egg and Creaking Heart block

**Pale Garden**

Pale Garden is a biome variation of Dark Forest. Unique features:

-   Pale Oaks generate here
-   Pale Moss blocks/carpet generate on the ground here
-   Hanging Pale Moss generate hanging from the foliage of Pale Oaks
-   Animal mobs do not spawn naturally in Pale Gardens
-   New biome specific ambient sounds
-   Creaking Heart block can generate in Pale Oaks

**Pale Oak Tree**

-   Pale Oak Leaves drop Pale Oak Saplings that can be planted in a 2x2 configuration to grow Pale Oak trees
-   Pale Oaks logs can be crafted into the Pale Oak woodset:
    -   Door
    -   Fence
    -   Fence Gate
    -   Plank
    -   Sign
    -   Hanging Sign
    -   Slab
    -   Stairs
    -   Trapdoor
    -   Wood
    -   Stripped Log
    -   Stripped Wood
    -   Button
    -   Pressure Plate
    -   Boat
    -   Boat with Chest

**Pale Moss Block**

Pale Moss block generates naturally in the Pale Garden biome

**Pale Moss Carpet**

Pale Moss block generates naturally in the Pale Garden biome. Unique features:

-   When placed, Pale Moss Carpet grows up to two blocks on the solid faces of any block that borders it
-   Pale Moss Carpet can be bonemealed to grow to full on all solid faces of any block that borders it

**Pale Hanging Moss**

Pale Hanging Moss generates naturally in the Pale Garden biome under the foliage of Pale Oaks

-   Pale Hanging Moss does not grow randomly, but can be bonemealed to grow down

**Creaking mob**

The Creaking mob spawns at night in the Pale Garden biome if there is a Creaking Heart block that has been generated in a Pale Oak tree. Gameplay features:

-   An activated Creaking will not move if a player is looking at it
-   Creaking is invulnerable to damage
-   Creaking has Fire Resistance
-   When hit, a particle trail is shown between the Creaking and the Creaking Heart block it is connected to
-   When the Creaking Heart block the Creaking is connected to is destroyed, the Creaking is removed
-   Is not affected by light levels but spawns and despawns based on day/night cycle
-   Creaking cannot enter Boats
-   Creaking spawned from a Creaking Heart can not go through portals
-   The Creaking Spawn Egg will spawn a Creaking mob that is not connected to a Creaking Heart
    -   Creaking summoned from a Creaking Spawn Egg or commands will persist through day and night, and, loads and saves
    -   Is Fire Resistant
    -   Takes damage from attacks and other damage sources
    -   Has one point of health (half a heart)
-   Creaking summoned from the Creaking Heart cannot be spawned with a spawn egg, nor can it be summoned with commands. It can only exist as a part of the Creaking Heart block
-   Player wearing a carved pumpkin on their head can look at Creaking without it freezing in place

**Creaking Heart**

A Creaking Heart is a “living” block generating in Pale Oak trees, covered on all sides by Pale Oak wood logs. It can spawn a Creaking mob when it is nighttime, and it is placed between two correctly aligned Pale Oak log blocks.

-   Is active during night and dormant during day
-   Sends a trail of particles towards the connected Creaking when the Creaking gets hit by the player
-   When Creaking Heart block is destroyed, the connected Creaking is removed

**New system for Pale Garden ambient sounds**

Ambient sounds in the Pale Garden biome do not come from the biome settings but are generated by blocks found in the biome

-   Pale Hanging Moss emits subtle atmospheric sounds when it is attached to Pale Oak Logs and Pale Oak Leaves
-   Creaking Heart block emits a set of eerie sounds when it is active during night and surrounded by Logs on all sides

## Changes

-   Bundle coloring recipes are now unlocked by Dye rather than uncolored Bundle item
-   Shulker Box and Bundle coloring recipes no longer work when trying to apply a Dye to an item of the same color
-   Added an accessibility option to make targeted block's outlines more visible

### Realms

-   The game mode for the last active world on a Realm will now be visible on the main Realms screen if applicable

## Technical Changes

-   The Data Pack version is now 56
-   Resource Pack version is now 40

## Data Pack Version 56

-   Added new particles: `block_crumble` and `trail`

### Commands

-   You cannot ride Leash Knots, Lighting Bolts and Fishing Bobbers anymore with `ride` command
-   Added the `rotate` command

**`rotate` Command**

New command to rotate entities.

Syntax:

    rotate <target> <rotation>
    rotate <target> facing <facingLocation>
    rotate <target> facing entity <facingTarget> [<facingAnchor>]
    

Parameters:

-   `target`: The entity to rotate
-   `rotation`: Two rotation values in degrees denoting horizontal and vertial rotation
    -   May use relative (`~`) coordinate notation to specify rotation relative to current context rotation
-   `facingLocation`: The coordinates of a location in the world for the rotated entity to face
-   `facingTarget`: An entity for the rotated entity to face
-   `facingAnchor`: Specifies the anchor of the `facingTarget` entity to rotate towards - `feet` or `eyes` (by default `feet`)

Note: parameters have the same meaning as in the `teleport` command.

### Enchantment Effects

-   Renamed effect type `damage_item` to `change_item_damage`, now also supports negative amounts

### Tags

**Item Tags**

-   `gaze_disguise_equipment`: Items that can be equipped to disguise the player looking for other mobs

### Particles

-   added `block_crumble` particle with the following options:
    -   `block_state` - the block state of the block to crumble
-   added `trail` particle with the following options:
    -   `color` - the color of the trail
    -   `target` - the position of the target for particle to reach

## Resource Pack Version 40

Increased to support the new experimental changes

## Fixed bugs in 24w40a

-   [MC-64265](https://bugs.mojang.com/browse/MC-64265) Teleporting passengers does not dismount them
-   [MC-108323](https://bugs.mojang.com/browse/MC-108323) Underlines in chat and /title command intersect each other, causing an ugly effect when fading
-   [MC-185144](https://bugs.mojang.com/browse/MC-185144) Item durability bar and all items render incorrectly in the villager trade UI
-   [MC-272946](https://bugs.mojang.com/browse/MC-272946) The block outline is nearly invisible for some blocks
-   [MC-273848](https://bugs.mojang.com/browse/MC-273848) Players can spawn underwater again in 1.21
-   [MC-275505](https://bugs.mojang.com/browse/MC-275505) The /tp command forces a mounted entity to dismount
-   [MC-275706](https://bugs.mojang.com/browse/MC-275706) Vanilla clients can't display items with components in recipe book anymore
-   [MC-275790](https://bugs.mojang.com/browse/MC-275790) Non-existent entries in certain tags that are not required causes validation error
-   [MC-276005](https://bugs.mojang.com/browse/MC-276005) The text of sneaking players' name tags is rendered completely invisible or barely visible when the "Text Background Opacity" accessibility option is set to high values
-   [MC-276330](https://bugs.mojang.com/browse/MC-276330) Bundles no longer play a sound when being emptied
-   [MC-276387](https://bugs.mojang.com/browse/MC-276387) Bundles can remain in the open state when using hotkeys to move them into different slots
-   [MC-276391](https://bugs.mojang.com/browse/MC-276391) The item durability and bundle fullness bars render incorrectly when held over recipe book elements
-   [MC-276440](https://bugs.mojang.com/browse/MC-276440) Items within bundle tooltips can be unselected by scrolling despite only one item being present
-   [MC-276596](https://bugs.mojang.com/browse/MC-276596) Damageable horse armor with "damage;;_;;on;;_;;hurt" enabled doesn't take damage when the horse wearing it is hurt
-   [MC-276640](https://bugs.mojang.com/browse/MC-276640) Riding an entity constantly teleported with relative coordinates produces jittery camera movement
-   [MC-276651](https://bugs.mojang.com/browse/MC-276651) damage;;_;;item does not repair items when the value is negative
-   [MC-276669](https://bugs.mojang.com/browse/MC-276669) Pausing the game spams "Trying to save removed ender pearl, skipping" to log if ender pearls have landed
-   [MC-276806](https://bugs.mojang.com/browse/MC-276806) The text of name tags behind blocks or entities is rendered completely invisible or barely visible when the "Text Background Opacity" accessibility option is set to high values
-   [MC-276876](https://bugs.mojang.com/browse/MC-276876) Lava cauldrons deal less damage to boats and minecarts than before
-   [MC-276947](https://bugs.mojang.com/browse/MC-276947) Command server output in singleplayer is printed into chat
-   [MC-276948](https://bugs.mojang.com/browse/MC-276948) Split boat entity types have capitalized 'With'
-   [MC-276949](https://bugs.mojang.com/browse/MC-276949) Old boat entity type translation keys are not deprecated
-   [MC-276956](https://bugs.mojang.com/browse/MC-276956) Cannot access registries in container block entity "lock" field
-   [MC-276980](https://bugs.mojang.com/browse/MC-276980) Projectiles on the wall in the water will continue to produce bubble trails

---

# Minecraft Snapshot 24w39a

Happy Wednesday miners! With this snapshot we're now bundling Bundles into the game for real - Bundles are no longer experimental!

Happy mining!

## New Features

-   Bundles are no longer experimental

## Changes

-   Updated slot highlight in the UI so Item texture has better visibility
    -   The previous textures have been added to Programmer Art resource pack
-   Equipping a Carved Pumpkin on your head now removes the player marker from other players' maps

## Technical Changes

-   The Data Pack version is now 55
-   Removed the `bundle` feature flag and built-in datapack

## Data Pack Version 55

-   `boat` and `chest_boat` entity types have been split into separate types, one per existing variant

### Boat split

-   Variants of boats and chest boats now have separate entity type instead of `Type` field
-   Removed entites:
    -   `minecraft:boat`
    -   `minecraft:chest_boat`
-   New entities:
    -   Boat without chest:
        -   `Type=oak` -> `minecraft:oak_boat`
        -   `Type=spruce` -> `minecraft:spruce_boat`
        -   `Type=birch` -> `minecraft:birch_boat`
        -   `Type=jungle` -> `minecraft:jungle_boat`
        -   `Type=acacia` -> `minecraft:acacia_boat`
        -   `Type=cherry` -> `minecraft:cherry_boat`
        -   `Type=dark_oak` -> `minecraft:dark_oak_boat`
        -   `Type=mangrove` -> `minecraft:mangrove_boat`
        -   `Type=bamboo` -> `minecraft:bamboo_raft`
    -   Boat with chest:
        -   `Type=oak` -> `minecraft:oak_chest_boat`
        -   `Type=spruce` -> `minecraft:spruce_chest_boat`
        -   `Type=birch` -> `minecraft:birch_chest_boat`
        -   `Type=jungle` -> `minecraft:jungle_chest_boat`
        -   `Type=acacia` -> `minecraft:acacia_chest_boat`
        -   `Type=cherry` -> `minecraft:cherry_chest_boat`
        -   `Type=dark_oak` -> `minecraft:dark_oak_chest_boat`
        -   `Type=mangrove` -> `minecraft:mangrove_chest_boat`
        -   `Type=bamboo` -> `minecraft:bamboo_chest_raft`

### Container Locks

-   The `Lock` field of containers has been renamed to `lock` and is now an item predicate
    -   Any items which match the predicate can open the container
-   The `lock` data component is now also an item predicate

### Tags

**Item Tags**

-   `map_invisibility_equipment`: Items that can be equipped to hide the player marker on other players maps

### Predicates

-   `minecraft:boat` entity sub-predicate has been removed, since boats no longer have variants

## Fixed bugs in 24w39a

-   [MC-219083](https://bugs.mojang.com/browse/MC-219083) Hunger client/server desync when natural regeneration is off in peaceful mode
-   [MC-275216](https://bugs.mojang.com/browse/MC-275216) Bowl is consumed when feeding a rabbit stew to a wolf
-   [MC-275544](https://bugs.mojang.com/browse/MC-275544) Drowned do not summon reinforcements anymore
-   [MC-276341](https://bugs.mojang.com/browse/MC-276341) The time how long you remain on fire no longer increases while being in the fire
-   [MC-276426](https://bugs.mojang.com/browse/MC-276426) Slimes or magma cubes spawned by splitting synchronize inherited status effects
-   [MC-276588](https://bugs.mojang.com/browse/MC-276588) Boat with chest inventory names no longer are suffixed with 'with Chest'
-   [MC-276598](https://bugs.mojang.com/browse/MC-276598) The slot;;_;;highlight;;_;;front texture renders incorrectly behind with missing recipe items
-   [MC-276610](https://bugs.mojang.com/browse/MC-276610) Ender pearl interaction with bubble columns is broken
-   [MC-276611](https://bugs.mojang.com/browse/MC-276611) Converted mobs do not keep CanBreakDoors tag
-   [MC-276615](https://bugs.mojang.com/browse/MC-276615) Cured Zombie Villagers keep CanPickUpLoot:0b
-   [MC-276638](https://bugs.mojang.com/browse/MC-276638) The server console or LAN game output spammed with "PLAYER moved too quickly!" after a player dies and respawns
-   [MC-276646](https://bugs.mojang.com/browse/MC-276646) Unique Horse Armor sound event is no longer used
-   [MC-276674](https://bugs.mojang.com/browse/MC-276674) Entities with emissive eyes aren't properly affected by fog of any kind
-   [MC-276707](https://bugs.mojang.com/browse/MC-276707) Underwater fireballs constantly play fire extinguishing sound
-   [MC-276724](https://bugs.mojang.com/browse/MC-276724) Arrows and potions resist upward flowing bubble columns
-   [MC-276727](https://bugs.mojang.com/browse/MC-276727) Projectiles are choppy while moving after hitting blocks or entities
-   [MC-276807](https://bugs.mojang.com/browse/MC-276807) All blocks and entities flicker at night or at lower light levels than 15
-   [MC-276817](https://bugs.mojang.com/browse/MC-276817) Teleport command offsets are applied incorrectly
-   [MC-276843](https://bugs.mojang.com/browse/MC-276843) Touching an end portal while in spectator mode teleports the player when they exit spectator mode
-   [MC-276919](https://bugs.mojang.com/browse/MC-276919) /tp teleports twice the relative distance if there's a block on the teleport point

---

# Minecraft Snapshot 24w38a

Hey! This snapshot brings you dyable Bundles in the Bundles experiment and fully-featured world creation for Realms, including Hardcore mode.

Happy dyeing!

## Experimental Features

### Bundles

-   The Bundle can be dyed 16 different colors using Dyes

## Changes

-   Shulker Box coloring recipes are now shown in the recipe book
-   Updated the world creation screen for Realms
-   Enabled hardcore mode for Realms
-   Throwing items out of your inventory very quickly in creative mode is now throttled

### Realms

-   Now uses the normal, fully featured world creation screen
    -   Enables game rule customization
    -   Enables datapack customization

**Hardcore mode**

Hardcore mode is now available in Realms and is accessible by creating a new world or recreating an existing one

## Technical Changes

-   The Data Pack version is now 54
-   Resource Pack version is now 39
-   Temporary option for ignoring connection errors on client side (`strictErrorHandling`) has been removed

## Data Pack Versions 54

-   Introduced new Item tag `bundles` which includes all Bundle Items

### New Recipe Type

**`crafting_transmute` recipe type**

-   New crafting recipe type has been introduced: `crafting_transmute`
-   When matched, output will copy the input item stack, changing the item type but preserving all stack components
-   This completely replaces `crafting_special_shulkerboxcoloring`
-   Fields:
    -   `category` - crafting book category, one of `building`, `redstone`, `equipment`, `misc`
    -   `group` - optional string
    -   `input` - ingredient for item to copy
    -   `material` - additional ingredient to use
    -   `result` - item type to use for output

## Resource Pack Versions 39

-   Bundle models and textures have 16 colored variants
-   The models and UV mapping related to the Torch and blocks containing Redstone Torch have been updated
    -   The "inverted" model now uses 6 separate faces creating the same effect as a model with a negative size
    -   Updated the UV layout for the inverted model

## Fixed bugs in 24w38a

-   [MC-13246](https://bugs.mojang.com/browse/MC-13246) On certain enchanted items, the Anvil will display a "too expensive" message before attempting to repair, combine, or rename them
-   [MC-134626](https://bugs.mojang.com/browse/MC-134626) Squids/glow squids bounce up and down in bubble columns, teleporting high up in the air
-   [MC-164258](https://bugs.mojang.com/browse/MC-164258) Recipe book search field is not selected when clicking on the search icon
-   [MC-169660](https://bugs.mojang.com/browse/MC-169660) /teleport without can change the entity's rotation
-   [MC-204050](https://bugs.mojang.com/browse/MC-204050) Subtitle for shooting amethyst blocks is "Block breaking"
-   [MC-216016](https://bugs.mojang.com/browse/MC-216016) Launching fireworks into a crystal sound block will make the breaking noise
-   [MC-225060](https://bugs.mojang.com/browse/MC-225060) Burning entity sound repeats every tick
-   [MC-228070](https://bugs.mojang.com/browse/MC-228070) Name tags rendered in blocks have letters brighter depending on your angle
-   [MC-275347](https://bugs.mojang.com/browse/MC-275347) Minecart with Furnace does not travel correctly over curves
-   [MC-275413](https://bugs.mojang.com/browse/MC-275413) Squids and glow squids are not affected by the thrust of the bubble column
-   [MC-276292](https://bugs.mojang.com/browse/MC-276292) Shift-clicking the "Destroy Item" slot in the creative inventory deletes the items server-side but not client-side, causing a desync
-   [MC-276372](https://bugs.mojang.com/browse/MC-276372) Player drops 2 items from the hotbar at once when the Survival Inventory tab is not selected
-   [MC-276373](https://bugs.mojang.com/browse/MC-276373) Items dropped from the hotbar are sometimes lost when the Survival Inventory tab is not selected
-   [MC-276428](https://bugs.mojang.com/browse/MC-276428) Player cannot drink honey bottles when they're not hungry
-   [MC-276459](https://bugs.mojang.com/browse/MC-276459) Item display rotation wrapping does not interpolate cleanly
-   [MC-276539](https://bugs.mojang.com/browse/MC-276539) Name tags and text displays render brighter in dark areas when behind blocks or entities
-   [MC-276573](https://bugs.mojang.com/browse/MC-276573) Spruce boat item translation key misspells "minecaft"
-   [MC-276603](https://bugs.mojang.com/browse/MC-276603) No High Norwegian language option
-   [MC-276621](https://bugs.mojang.com/browse/MC-276621) Game crashes when opening inventory that renders entity with both Invisibility and Glowing effects
-   [MC-276640](https://bugs.mojang.com/browse/MC-276640) Riding an entity constantly teleported with relative coordinates produces jittery camera movement
-   [MC-276704](https://bugs.mojang.com/browse/MC-276704) Not using a selector in a tp command breaks rotation from a completely different tp command
-   [MC-276722](https://bugs.mojang.com/browse/MC-276722) Teleporting to your current position every tick sometimes doesn't let you move properly

---

