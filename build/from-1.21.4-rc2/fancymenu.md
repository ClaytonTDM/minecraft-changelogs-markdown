# 1.21.4 Release Candidate 2

Today we are releasing 1.21.4 Release Candidate 2 to activate Blending around the Pale Garden Biome.

If no further critical issues surface, this is the version we are planning to ship as Minecraft: Java Edition 1.21.4.

Happy Mining!

## Fixed bugs in 1.21.4 Release Candidate 2

-   [MC-278573](https://bugs.mojang.com/browse/MC-278573) Updating can cause straight biome borders with pale garden

---

After yesterday's [announcement](https://www.minecraft.net/en-us/article/the-garden-awakens-drop-date) that the The Garden Awakens drop comes out on December 3rd, today we're releasing the first release candidate!

If no new critical issues surface, this is the version we are planning to ship as Minecraft: Java Edition 1.21.4.

Happy Mining!

## Changes

-   Added language support for Popoloca

## Fixed bugs in 1.21.4 Release Candidate 1

-   [MC-278494](https://bugs.mojang.com/browse/MC-278494) Resin Bricks appears twice in "mineable/pickaxe" block tag
-   [MC-278548](https://bugs.mojang.com/browse/MC-278548) Spyglass is held incorrectly when used from the off hand

---

We are now releasing a third Pre-Release for Minecraft 1.21.4 to fix a crash and a few bugs. Watch your step before jumping!

## Fixed bugs in 1.21.4 Pre-Release 3

-   [MC-277977](https://bugs.mojang.com/browse/MC-277977) Teleporting large distances whilst gliding prevents the world from loading and player model glitchiness
-   [MC-278444](https://bugs.mojang.com/browse/MC-278444) Waterlogged resin clumps do not drop when their supporting block is broken/moved
-   [MC-278518](https://bugs.mojang.com/browse/MC-278518) Player takes damage from jumping down from one block

---

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

