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

#### `minecraft:model` item model type

##### Added `minecraft:team` tint source type

-   Returns team color of context entity, if any
-   Fields:
    -   `default` - RGB value to return when there is no context entity, entity is not in a team or team has no color

##### Changed `minecraft:head` special model type

-   Added field `animation` - float controlling head animation (like Piglin ears or Ender Dragon jaw), default: `0.0`

##### Added `minecraft:view_entity` boolean property

-   When not spectating, returns `true` if context entity is the local player entity, i.e. one controlled by client
-   When spectating, returns `true` if context entity is the spectated entity
-   If context entity is not present, will return `false`
-   No fields

##### Renamed property `minecraft:holder_type` to `minecraft:context_entity_type`

**Developer's Note**: _Context entities were initially used only for compasses and clocks, which means that type is available only in rendering contexts where those items would show correct reading (see MC-186797 and related bugs). The name change has been made to better reflect that._

##### Added `minecraft:context_dimension` property

-   Returns the ID of the dimension in context, if any
-   No fields
-   Values: namespaced dimension ID (like `minecraft:overworld`)

##### Changed `minecraft:time` numeric property

-   Removed field `natural_only`
-   Added field `source` - time source, possible values:
    -   `daytime` - time of day
    -   `moon_phase` - moon phase
    -   `random` - random value

##### Changed `minecraft:compass` numeric property

-   Added value `none` to field `target` which always returns an invalid target

#### Added `minecraft:empty` item model type

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

We were so worried that you had forgotten all about us over the weekend, so we're kicking this week off with a surprise second Release Candidate for 1.21.2! Let's hope this is (fingers crossed) the last one before the full release of Bundles of Bravery.

If no other critical issues are found, this will be the version for 1.21.2 that can be expected to be released later this week.

Happy mining!

## Fixed bugs in 1.21.2 Release Candidate 2

-   [MC-277625](https://bugs.mojang.com/browse/MC-277625) Player's OnGround tag doesn't update when riding a vehicle
-   [MC-277708](https://bugs.mojang.com/browse/MC-277708) The sound of breaking leaves on a riding mob is not played In survival
-   [MC-277718](https://bugs.mojang.com/browse/MC-277718) Minecart behaviour altered even with experiments disabled
-   [MC-277732](https://bugs.mojang.com/browse/MC-277732) Block break block updates can stop working in a chunk

---

We missed you so much since the previous pre-release so today we're releasing Release Candidate 1. If no critical issues surface, this is the version we are planning to ship as Minecraft: Java Edition 1.21.2, the Bundles of Bravery drop.

## Fixed bugs in 1.21.2-rc1

-   [MC-273812](https://bugs.mojang.com/browse/MC-273812) Intersection chests in trial chambers not generating correctly
-   [MC-277636](https://bugs.mojang.com/browse/MC-277636) Projectiles visually fall when relogging
-   [MC-277638](https://bugs.mojang.com/browse/MC-277638) Client sometimes rejects a set passengers packet

---

Did we have a Pre-Release yesterday? We don't remember. But here is one anyway, fixing more bugs.

Happy mining!

## Fixed bugs in 1.21.2 Pre-Release 5

-   [MC-277630](https://bugs.mojang.com/browse/MC-277630) Recipe book is not updated when one of the available recipes is used
-   [MC-277634](https://bugs.mojang.com/browse/MC-277634) Arrows shot at walls when facing south sometimes end up vertical instead of horizontal

---

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

Here is the first Release Candidate for 1.21, addressing some critical issues. Apart from that we decided to revert the changes made in Pre-Release 4 to armor enchantments based on your feedback.

Happy mining!

## Changes

-   The changes to Burn Time reduction from Fire Protection and Knockback reduction from Blast Protection from pre-release 4 have been reverted
    -   We have heard your feedback, and we expect to rebalance these two enchantments in the future to find a better place for them
    -   Values are now the same as in 1.20.6
    -   These effects still stack from wearing multiple pieces (changed from 1.20.6)

## Fixed bugs in 1.21 Release Candidate 1

-   [MC-272888](https://bugs.mojang.com/browse/MC-272888) Zooming with riptide still applies mace wind burst if held in main hand
-   [MC-273007](https://bugs.mojang.com/browse/MC-273007) Projectiles have incorrect motion when shot from a vehicle which was entered with player velocity
-   [MC-273158](https://bugs.mojang.com/browse/MC-273158) Animals stay floating after getting on a boat

---

