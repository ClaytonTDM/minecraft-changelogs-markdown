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

