# Minecraft 1.21.2 Pre-Release 2

Today we are shipping the second Pre-Release for 1.21.2 with some more bug fixes and Pale Hanging Moss changes. During this stabilization phase before the full release of Minecraft Java Edition 1.21.2 we are focusing on fixing bugs and don't follow the regular snapshot cadence of releasing on Wednesdays, so keep an eye out for the next pre-release.

## Experimental Features

### Winter Drop

#### Pale Moss

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

## Experimental Features

### Winter Drop

#### Creaking mob

-   Creaking will not activate or freeze around players in Creative mode
-   Creaking summoned from the Creaking Heart cannot be named with a Nametag

#### Creaking Heart

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

#### `minecraft:equippable`

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

Before we get to new snapshots, today we are delivering Release Candidate 1 for Minecraft 1.21.1. This is a hotfix version fixing critical exploits. If no other critical issues are found, 1.21.1 can be expected to be released later this week.

## Changes

-   Fixed critical exploits
-   Added language support for Tzotzil and Belarusian (Latin)

---

