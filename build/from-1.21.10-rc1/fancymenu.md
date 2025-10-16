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

Frog day on a Friday? What could go wrong? We're back with 1.21 Pre-Release 4 today, with a couple more bug fixes, and some tweaks to the Blast Resistance and Fire Protection enchantments.

## Changes

-   The "Burning Time" reduction effect of Fire Protection and "Knockback Resistance" effect of Blast Protection now stack from wearing several pieces
    -   To get the maximum benefit of these effects, you now need to wear a full set of enchanted armor
    -   Wearing a fully enchanted armor set still grants the same effect as in 1.20.6
    -   Wearing only a single piece of enchanted armor now has reduced effect compared to before
-   After a Primed TNT has gone through a Nether Portal, it will no longer be able to destroy Nether Portal blocks

## Fixed bugs in 1.21 Pre-Release 4

-   [MC-270540](https://bugs.mojang.com/browse/MC-270540) The prevention of fall damage from wind charges is not retained upon reloading the world
-   [MC-271971](https://bugs.mojang.com/browse/MC-271971) Wind Charges sometimes don't prevent fall damage
-   [MC-272933](https://bugs.mojang.com/browse/MC-272933) Fire protection burning time reduction now stacks for every piece of armor
-   [MC-272935](https://bugs.mojang.com/browse/MC-272935) Blast protection explosion knockback resistance now stacks for every piece of armor
-   [MC-272947](https://bugs.mojang.com/browse/MC-272947) Boat clutching after using a wind charge results in the player taking fall damage
-   [MC-272948](https://bugs.mojang.com/browse/MC-272948) Wind Burst damages the player twice on one use, even when using Wind Charges
-   [MC-272981](https://bugs.mojang.com/browse/MC-272981) Using a wind charge to stop the fall damage after using the wind burst enchantment doesn't correctly cancel the damage
-   [MC-272982](https://bugs.mojang.com/browse/MC-272982) Mace can have sharpness

---

The third pre-release for 1.21 is now available and it comes with even more bugfixes!

Additionally, we introduced some intentional but undocumented changes to the Wind Burst Enchantment in Pre-Release 1 last week. To remedy this, we're including those changes in this changelog instead.

Happy mining!

## Changes

### Wind Burst

-   Following changes were introduced in Pre-Release 1; The Wind Burst enchantment now bounces the player 7 blocks up per enchantment level
    -   With great power comes great responsibility - and risk! At level 3, the enchantment will bounce the player 21 blocks up which _doing some quick maths_ will hurt quite a bit when hitting the ground again
    -   In other words, make sure you have a target locked in (or other means of mitigating the fall damage) before making contact with the ground again

## Technical Changes

-   Data Pack version is now 48

## Data Pack Version 48

-   `replace_disc` entity effect type is renamed to `replace_disk`

## Fixed bugs in 1.21 Pre-Release 3

-   [MC-252817](https://bugs.mojang.com/browse/MC-252817) Placing a map into an item frame and removing it does not remove the green player marker
-   [MC-267988](https://bugs.mojang.com/browse/MC-267988) Tamed entities ignore their "LookAtPlayerGoal" distance and look in the direction of their owners from any distance when being stood up
-   [MC-272194](https://bugs.mojang.com/browse/MC-272194) Empty Attribute Modifiers lost during upgrade
-   [MC-272565](https://bugs.mojang.com/browse/MC-272565) Hanging leashed boats gain excessive upward momentum
-   [MC-272577](https://bugs.mojang.com/browse/MC-272577) Summoning any entity with rotation causes it to be rotated incorrectly
-   [MC-272582](https://bugs.mojang.com/browse/MC-272582) Mip-mapping not properly applied to moss carpet
-   [MC-272661](https://bugs.mojang.com/browse/MC-272661) Entities have incorrect rotations after loading or reloading a world
-   [MC-272670](https://bugs.mojang.com/browse/MC-272670) Crash while saving entity NBT - Cannot encode empty ItemStack
-   [MC-272772](https://bugs.mojang.com/browse/MC-272772) Leashed Boats' leashes disappear upon rejoining world
-   [MC-272789](https://bugs.mojang.com/browse/MC-272789) Leashing a boat to a fence which already has a lead attached to it removes the existing lead rather than attaching the new one
-   [MC-272798](https://bugs.mojang.com/browse/MC-272798) Teleporting a leashed boat (with chest) or raft (with chest) to another dimension makes a ghost lead
-   [MC-272809](https://bugs.mojang.com/browse/MC-272809) Placed boats/rafts no longer face the same direction as the player
-   [MC-272814](https://bugs.mojang.com/browse/MC-272814) Entering an end gateway does not consistently grant the Remote Getaway advancement
-   [MC-272827](https://bugs.mojang.com/browse/MC-272827) Unleashing boats leashed to fences via Use Item/Place Block drops the lead in Creative mode
-   [MC-272843](https://bugs.mojang.com/browse/MC-272843) Stepping up blocks while falling on the side of them can sometimes allow players to climb to normally unreachable heights
-   [MC-272854](https://bugs.mojang.com/browse/MC-272854) Crash when entity is leashed by non-LivingEntity
-   [MC-272870](https://bugs.mojang.com/browse/MC-272870) /execute on leasher does not work for leashed boats
-   [MC-272879](https://bugs.mojang.com/browse/MC-272879) Entering an End portal makes you face the entering direction rather than always facing west
-   [MC-272886](https://bugs.mojang.com/browse/MC-272886) Maces incorrectly cause damage to the player
-   [MC-272901](https://bugs.mojang.com/browse/MC-272901) Boats & Rafts with Chests cannot be leashed if they have a passenger

---

We're rounding out the week with the second Pre-Release of 1.21, with a lot of bug fixes. In case you did not catch the news, the full release of 1.21 is planned for the 13th of June!

Happy mining!

## Changes

-   End Crystals are now immune to fire damage
-   Added an attestation checkbox when submitting a player report
-   Heavy Core, Trident and Mace are now considered of Epic rarity, giving their hover text a purple color

## Technical Changes

-   Data Pack version is now 47

## Data Pack Version 47

-   Added new placement modifier type `fixed_placement` to place features in a set of fixed positions
-   Added new feature type `end_platform` for the obsidian platform in the end

## Fixed bugs in 1.21 Pre-Release 2

-   [MC-223165](https://bugs.mojang.com/browse/MC-223165) The Snout Banner Pattern is treated as common in the game.
-   [MC-269359](https://bugs.mojang.com/browse/MC-269359) "Field Masoned", "Skull Charge", "Flow", and "Guster" banner patterns are not mirrored on the backside
-   [MC-269389](https://bugs.mojang.com/browse/MC-269389) Flow banner pattern is treated as common loot
-   [MC-269390](https://bugs.mojang.com/browse/MC-269390) Guster banner pattern is treated as common loot
-   [MC-270033](https://bugs.mojang.com/browse/MC-270033) Infested or Oozing effect cloud shrinks when silverfish or slime enters it
-   [MC-271199](https://bugs.mojang.com/browse/MC-271199) Advancement 'Local Brewery' not granted on shift-clicking
-   [MC-271754](https://bugs.mojang.com/browse/MC-271754) Copper doors can be used as furnace fuel
-   [MC-271887](https://bugs.mojang.com/browse/MC-271887) Your FOV doesn't change back to normal after jumping off from soul sand/soul soil while wearing soul speed boots
-   [MC-271892](https://bugs.mojang.com/browse/MC-271892) Your FOV doesn't immediately change when jumping onto soul sand/soul soil while having the slow falling effect and wearing soul speed boots
-   [MC-272224](https://bugs.mojang.com/browse/MC-272224) 'in;;_;;bounding;;_;;box' vertical position for 'spawn;;_;;particles' effect is anchored incorrectly
-   [MC-272241](https://bugs.mojang.com/browse/MC-272241) Error when traveling through nether portal outside world border
-   [MC-272333](https://bugs.mojang.com/browse/MC-272333) The gamerule spawnRadius doesn't work anymore on respawn (always respawn at the same place)
-   [MC-272547](https://bugs.mojang.com/browse/MC-272547) block.portal.travel sound no longer plays when entering End portal
-   [MC-272550](https://bugs.mojang.com/browse/MC-272550) End crystals now receive fire damage causing them to explode instantly
-   [MC-272553](https://bugs.mojang.com/browse/MC-272553) Naturally generated End Stone drops in cases where the Obsidian platform generates inside the island
-   [MC-272556](https://bugs.mojang.com/browse/MC-272556) Ender pearls don't work correctly when riding entities and cause players to be teleported for a split second
-   [MC-272559](https://bugs.mojang.com/browse/MC-272559) Players cannot traverse dimensions when throwing ender pearls into portals while riding entities
-   [MC-272563](https://bugs.mojang.com/browse/MC-272563) The ender dragon death animation is rendered behind blocks when using "Fabulous!" graphic settings
-   [MC-272571](https://bugs.mojang.com/browse/MC-272571) Server crashes upon updating from 24w21b to 1.21 Pre-release 1.
-   [MC-272583](https://bugs.mojang.com/browse/MC-272583) Each time you pass through an end gateway with an ender pearl from the main island, a new portal is created
-   [MC-272585](https://bugs.mojang.com/browse/MC-272585) Crash when bow or crossbow enchanted with multishot runs out of durability
-   [MC-272588](https://bugs.mojang.com/browse/MC-272588) Wind Charges can trigger Wind Burst
-   [MC-272595](https://bugs.mojang.com/browse/MC-272595) Breaking a Carrot/Warped Fungus on a Stick no longer gives a Fishing Rod
-   [MC-272596](https://bugs.mojang.com/browse/MC-272596) Throwing an ender pearl into the end fountain skips the credits
-   [MC-272625](https://bugs.mojang.com/browse/MC-272625) Game crashes when saving after teleporting a leashed entity to another dimension
-   [MC-272638](https://bugs.mojang.com/browse/MC-272638) Leads attached to a boat are deleted when breaking the boat
-   [MC-272639](https://bugs.mojang.com/browse/MC-272639) trial;;_;;spawner;;_;;bottom texture is different from Bedrock
-   [MC-272650](https://bugs.mojang.com/browse/MC-272650) Can respawn mid-air with default spawnpoint

---

We're bringing you the first Pre-Release of 1.21 with leashable boats, portal-able Ender Pearls and bug fixes!

With this snapshot, we are temporarily removing the functionality of lighting blocks on fire using the Fire Aspect enchantment, as we want to refine it further. This functionality will be reintroduced in a later release.

Happy portaling! ;)

## New Features

### Ominous Trial Spawner

-   Mobs removed by a Trial Spawner converting to Ominous state now drop any items they previously picked up from the ground

## Changes

-   Mace attack speed has been changed to 0.6
-   Doors of different materials can now form a double door
-   Ender Pearls that are thrown through portals can now teleport players to a different dimension than the one they are currently in
-   It is now possible to ride entities such as Horses or Minecarts through portals
    -   When riding entities through portals, the delay before teleporting is not applied

## Technical Changes

-   Data Pack version is now 46
-   Removed the `entitiesWithPassengersCanUsePortals` gamerule that was introduced last snapshot. Entity with passengers being able to use portals is now the default behavior.
-   Report data generator now includes information about network packets
-   The game will now store reports from failed chunks' loads and saves in the `debug` directory

### Server links

-   There are some generic-use link names, like "Support" or "Website", without any special functionality

## Data Pack Versions 42 through 46

-   Added new configurable fields to jigsaw structures and `single_pool_element` types

### Enchantments

#### Level-Based Values

##### `lookup`

A Level-Based Value type that maps a list of values to specific levels, and applies a fallback if the level is greater than the number of values supplied. Fields:

-   `values` - A list of values indexed by `level - 1` to apply, if present
-   `fallback` - A fallback Level-Based Value to apply if the level is greater than the size of `values`

#### Effect Conditions

Unlike with loot tables, all effect conditions need to be inline objects and cannot be references.

### Tags

#### Block Tags

-   `fire_aspect_lightable` has been removed
    -   With this snapshot, we are temporarily removing the functionality of lighting blocks on fire using the Fire Aspect enchantment, as we want to refine it further. This functionality will be reintroduced in a later release.

### Loot tables

#### Conditions

##### `random_chance_with_enchanted_bonus`

-   `chance`: field has been removed
-   `unenchanted_chance`: new field for the chance for an unenchanted item
-   `enchanted_chance`: new field for the chance for an enchanted item - a Level-Based Value

### Structures

-   Added `liquid_settings` field to structures of type `minecraft:jigsaw`. Possible values:
    -   `apply_waterlogging`: If any waterloggable block overlaps with existing water, it will become waterlogged
    -   `ignore_waterlogging`: Will not waterlog any waterloggable blocks that overlap existing water
    -   Default value is `apply_waterlogging`
-   Added optional field `override_liquid_settings` to `single_pool_element` element type
    -   Same possible values as the `liquid_settings` in jigsaw structures
    -   Overrides the inherited liquid settings from the parent jigsaw structure while generating this pool element

## Fixed bugs in 1.21 Pre-Release 1

-   [MC-902](https://bugs.mojang.com/browse/MC-902) The end obsidian platform resets every time entities go through the end portal, which can cause blocks to be deleted
-   [MC-50612](https://bugs.mojang.com/browse/MC-50612) Command blocks do not update when you place them near any source of power
-   [MC-97087](https://bugs.mojang.com/browse/MC-97087) Attributes won't work in main hand if they were in offhand
-   [MC-114566](https://bugs.mojang.com/browse/MC-114566) Can't teleport back to the central island with End Gateway Portal on outer End islands
-   [MC-148741](https://bugs.mojang.com/browse/MC-148741) Selection boxes in some screens are misaligned in comparison with their text
-   [MC-160140](https://bugs.mojang.com/browse/MC-160140) Shulker boxes on the obsidian platform are destroyed and do not drop when a player enters the End
-   [MC-169698](https://bugs.mojang.com/browse/MC-169698) Blocks within igloo basements can generate waterlogged when generating in close proximity to water
-   [MC-170907](https://bugs.mojang.com/browse/MC-170907) Network position deltas are processed relative to a wrong point
-   [MC-172031](https://bugs.mojang.com/browse/MC-172031) Throwing an ender pearl into a Nether or End portal often has no effect
-   [MC-191591](https://bugs.mojang.com/browse/MC-191591) Saddles lose their NBT data when equipped on horses, zombie horses, skeleton horses, mules or donkeys via right-clicking
-   [MC-265583](https://bugs.mojang.com/browse/MC-265583) Incorrect pluralization for skin customization strings for pants
-   [MC-265818](https://bugs.mojang.com/browse/MC-265818) The "gamerule.doVinesSpread.description" string consists of grammatically incorrect word usage
-   [MC-266140](https://bugs.mojang.com/browse/MC-266140) The "Open link" button within the realms menu is improperly capitalized
-   [MC-266471](https://bugs.mojang.com/browse/MC-266471) Trial chambers can intersect aquifers, causing some blocks inside the structure to be waterlogged
-   [MC-267050](https://bugs.mojang.com/browse/MC-267050) Chat disabled strings are missing verbs
-   [MC-267071](https://bugs.mojang.com/browse/MC-267071) The word "packs" within the "download.pack.failed" string is always pluralized
-   [MC-267474](https://bugs.mojang.com/browse/MC-267474) Strings referencing the player's off hand are inconsistently spelled
-   [MC-267954](https://bugs.mojang.com/browse/MC-267954) World upgrade and downgrade realms strings are improperly capitalized
-   [MC-268023](https://bugs.mojang.com/browse/MC-268023) The "selectWorld.experimental.details.title" string displayed within the experimental features details menu is improperly capitalized
-   [MC-268185](https://bugs.mojang.com/browse/MC-268185) Copper grates in trial chambers are waterlogged
-   [MC-269921](https://bugs.mojang.com/browse/MC-269921) Wind charges can be thrown though corners
-   [MC-270181](https://bugs.mojang.com/browse/MC-270181) Wind charges go through an entity if it is close to a player
-   [MC-270572](https://bugs.mojang.com/browse/MC-270572) Programmer Art resource pack duplicates some GUI texture files
-   [MC-270649](https://bugs.mojang.com/browse/MC-270649) The width of challenge advancements header is calculated in relation to the slash formatting of progress counter, causing overlap in some languages
-   [MC-270795](https://bugs.mojang.com/browse/MC-270795) Mobs despawned by Ominous Trial Spawners can delete picked up items
-   [MC-270821](https://bugs.mojang.com/browse/MC-270821) Regular Trial Spawners spawn the first mob with Ominous Trial equipment if they were last active as Ominous
-   [MC-270981](https://bugs.mojang.com/browse/MC-270981) View Bobbing toggle is not available in Accessibility Settings
-   [MC-271870](https://bugs.mojang.com/browse/MC-271870) random;;_;;chance;;_;;with;;_;;looting function base value is for enchantment level 1
-   [MC-271897](https://bugs.mojang.com/browse/MC-271897) End Portal makes items disappear
-   [MC-271929](https://bugs.mojang.com/browse/MC-271929) Applying multiple layers of "using;;_;;converts;;_;;to" will produce ghost items
-   [MC-271971](https://bugs.mojang.com/browse/MC-271971) Wind Charges sometimes don't prevent fall damage
-   [MC-272014](https://bugs.mojang.com/browse/MC-272014) Ender Dragon death animation is broken since 20w22a (and broken again in 20w45a)
-   [MC-272038](https://bugs.mojang.com/browse/MC-272038) The error "Can't access registry ResourceKey;;[;;minecraft:root / minecraft:game;;_;;event;;];;" is sometimes in the log file
-   [MC-272053](https://bugs.mojang.com/browse/MC-272053) The "armor;;_;;effectiveness" effect does not work with projectiles or indirect damage
-   [MC-272073](https://bugs.mojang.com/browse/MC-272073) Item displays with billboard and rotation values create major visual bug
-   [MC-272079](https://bugs.mojang.com/browse/MC-272079) Medium/small Slimes and magma cube's attack reach is too short
-   [MC-272198](https://bugs.mojang.com/browse/MC-272198) Shulkers' models sometimes appear offset upon end city generation
-   [MC-272253](https://bugs.mojang.com/browse/MC-272253) The strength of the riptide enchantment is increased when holding tridents enchanted with riptide in both hands
-   [MC-272258](https://bugs.mojang.com/browse/MC-272258) block.portal.travel sound now plays when teleporting to a different dimension using commands
-   [MC-272264](https://bugs.mojang.com/browse/MC-272264) Narrator button in Accessibility Settings doesn't update upon pressing Ctrl+B
-   [MC-272267](https://bugs.mojang.com/browse/MC-272267) "Changes the blurriness of menu background" lacks punctuation
-   [MC-272279](https://bugs.mojang.com/browse/MC-272279) Resource packs containing TrueType fonts fail to load on x64 macOS systems
-   [MC-272308](https://bugs.mojang.com/browse/MC-272308) Axolots can be attached to new leads when being already leashed
-   [MC-272311](https://bugs.mojang.com/browse/MC-272311) The enchantment glint sometimes doesn't render in interfaces and first person
-   [MC-272313](https://bugs.mojang.com/browse/MC-272313) The game crashes when attempting to open the realms menu
-   [MC-272315](https://bugs.mojang.com/browse/MC-272315) Serial comma is missing from the entitiesWithPassengersCanUsePortals game rule description
-   [MC-272322](https://bugs.mojang.com/browse/MC-272322) When you are riding an entity through portals, you and the entity may teleport to the wrong place
-   [MC-272328](https://bugs.mojang.com/browse/MC-272328) entitiesWithPassengersCanUsePortals game rule description is missing the proper term capitalization
-   [MC-272329](https://bugs.mojang.com/browse/MC-272329) Riding an entity into portals may cause the game to softlock
-   [MC-272333](https://bugs.mojang.com/browse/MC-272333) The gamerule spawnRadius doesn't work anymore on respawn (always respawn at the same place)
-   [MC-272339](https://bugs.mojang.com/browse/MC-272339) Holding crossbows in both hands stacks quick charge
-   [MC-272342](https://bugs.mojang.com/browse/MC-272342) Typo in mining fatigue attribute ID 'minecraft:effect.minining;;_;;fatigue'
-   [MC-272343](https://bugs.mojang.com/browse/MC-272343) Ender pearls don't work when riding an entity
-   [MC-272344](https://bugs.mojang.com/browse/MC-272344) When teleported by an ender pearl, the "portal noise fades" sound is played
-   [MC-272347](https://bugs.mojang.com/browse/MC-272347) Upgrading from before 24w21a doesn't update structures saved by structure blocks
-   [MC-272355](https://bugs.mojang.com/browse/MC-272355) Ellipsis text is stringified within NBT text formatter list truncation
-   [MC-272361](https://bugs.mojang.com/browse/MC-272361) Minecarts and Passengers offset from block when riding through portals
-   [MC-272364](https://bugs.mojang.com/browse/MC-272364) Players spawn one block above the obsidian platform when entering an end portal
-   [MC-272365](https://bugs.mojang.com/browse/MC-272365) Inventory Images of All Banners are Completely White
-   [MC-272369](https://bugs.mojang.com/browse/MC-272369) Can respawn in a solid block with default spawnpoint
-   [MC-272374](https://bugs.mojang.com/browse/MC-272374) 24w21b will not upgrade attribute;;_;;modifiers from previous versions
-   [MC-272399](https://bugs.mojang.com/browse/MC-272399) Primed TNT entities can't go through an End portal anymore
-   [MC-272400](https://bugs.mojang.com/browse/MC-272400) Shield in Inventory with Banner Shows as White
-   [MC-272403](https://bugs.mojang.com/browse/MC-272403) Portal linking chunk loading changes
-   [MC-272406](https://bugs.mojang.com/browse/MC-272406) Crash when zombie tries to spawn second reinforcement
-   [MC-272408](https://bugs.mojang.com/browse/MC-272408) set;;_;;attributes item modifier can add the same attribute modifier twice
-   [MC-272424](https://bugs.mojang.com/browse/MC-272424) Chunks occasionally have large dark areas in the sky
-   [MC-272427](https://bugs.mojang.com/browse/MC-272427) Flame, power, punch, and piercing enchantments no longer work on the last use of the item
-   [MC-272430](https://bugs.mojang.com/browse/MC-272430) Breaking a Carrot/Warped Fungus on a Stick gives a damaged Fishing Rod
-   [MC-272438](https://bugs.mojang.com/browse/MC-272438) End crystal entities can't go through an End portal anymore
-   [MC-272442](https://bugs.mojang.com/browse/MC-272442) Comparator output of jukebox no longer persists on music disc finish
-   [MC-272445](https://bugs.mojang.com/browse/MC-272445) Command blocks made from Ctrl + Pick Block do not activate on first try
-   [MC-272469](https://bugs.mojang.com/browse/MC-272469) When the wind charge, fireball or shulker bullet is in the lava, it will continue to make a high-loudness noise
-   [MC-272490](https://bugs.mojang.com/browse/MC-272490) @n can select dying entities, unlike @e
-   [MC-272515](https://bugs.mojang.com/browse/MC-272515) Component-Modified Saddles get their components wiped when dispensed onto a horse, mule, or camel.

---

We missed release day so much, we made Friday a release day! Here is Release Candidate 1 for 1.20.6, a hotfix release intended to fix a few critical issues. If nothing further critical is found, we expect to release this hotfix early next week. Happy mining!

## Fixed bugs in 1.20.6 Release Candidate 1

-   [MC-271109](https://bugs.mojang.com/browse/MC-271109) Trader llama inventory shifted, partially lost during upgrade

---

Oh look, it's finally Monday! Since we haven't shipped something for several hours, we thought we'd kick the week off with a third and (fingers crossed!) final Release Candidate for Minecraft: Java Edition 1.20.5.

Happy mining!

## Fixed bugs in 1.20.5 Release Candidate 3

-   [MC-270964](https://bugs.mojang.com/browse/MC-270964) Race condition in can;;_;;break/can;;_;;place;;_;;on item stack components

---

We're honestly starting to lose count at this point. Anyways! Here's 1.20.5 Release Candidate 2 coming in clutch with some bona fide bug fixes to round off the week.

Happy weekend mining!

## Fixed bugs in 1.20.5 Release Candidate 2

-   [MC-270862](https://bugs.mojang.com/browse/MC-270862) Firework Star item displays have inconsistent color updates
-   [MC-270902](https://bugs.mojang.com/browse/MC-270902) Game unpauses when credits are played via pause menu
-   [MC-270916](https://bugs.mojang.com/browse/MC-270916) Villagers can sell experimental enchantments without the 1.21 experiment enabled

---

This week's shipping frenzy continues with our very first Release Candidate for 1.20.5! Barring any significant or critical issues found within it, this is the version we are planning to ship as Minecraft: Java Edition 1.20.5 next week.

## Technical Changes

-   Changed the approach to game client disconnecting on invalid data in packets sent from a server
    -   To ease the transition period, modded servers can opt out by setting the appropriate field in the `handshake/game_profile` packet
    -   This option will be removed in the next release

## Fixed bugs in 1.20.5 Release Candidate 1

-   [MC-270867](https://bugs.mojang.com/browse/MC-270867) Severe lag when upgrading 1.20.4 worlds
-   [MC-270871](https://bugs.mojang.com/browse/MC-270871) Upgrading a world with horses wearing leather horse armor makes the horse immune to freezing forever

---

