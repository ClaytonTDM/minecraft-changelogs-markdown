# Minecraft 1.21 Pre-Release 3

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
-   [MC-272224](https://bugs.mojang.com/browse/MC-272224) 'in\_bounding\_box' vertical position for 'spawn\_particles' effect is anchored incorrectly
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
-   [MC-272639](https://bugs.mojang.com/browse/MC-272639) trial\_spawner\_bottom texture is different from Bedrock
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
-   [MC-271870](https://bugs.mojang.com/browse/MC-271870) random\_chance\_with\_looting function base value is for enchantment level 1
-   [MC-271897](https://bugs.mojang.com/browse/MC-271897) End Portal makes items disappear
-   [MC-271929](https://bugs.mojang.com/browse/MC-271929) Applying multiple layers of "using\_converts\_to" will produce ghost items
-   [MC-271971](https://bugs.mojang.com/browse/MC-271971) Wind Charges sometimes don't prevent fall damage
-   [MC-272014](https://bugs.mojang.com/browse/MC-272014) Ender Dragon death animation is broken since 20w22a (and broken again in 20w45a)
-   [MC-272038](https://bugs.mojang.com/browse/MC-272038) The error "Can't access registry ResourceKey\[minecraft:root / minecraft:game\_event\]" is sometimes in the log file
-   [MC-272053](https://bugs.mojang.com/browse/MC-272053) The "armor\_effectiveness" effect does not work with projectiles or indirect damage
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
-   [MC-272342](https://bugs.mojang.com/browse/MC-272342) Typo in mining fatigue attribute ID 'minecraft:effect.minining\_fatigue'
-   [MC-272343](https://bugs.mojang.com/browse/MC-272343) Ender pearls don't work when riding an entity
-   [MC-272344](https://bugs.mojang.com/browse/MC-272344) When teleported by an ender pearl, the "portal noise fades" sound is played
-   [MC-272347](https://bugs.mojang.com/browse/MC-272347) Upgrading from before 24w21a doesn't update structures saved by structure blocks
-   [MC-272355](https://bugs.mojang.com/browse/MC-272355) Ellipsis text is stringified within NBT text formatter list truncation
-   [MC-272361](https://bugs.mojang.com/browse/MC-272361) Minecarts and Passengers offset from block when riding through portals
-   [MC-272364](https://bugs.mojang.com/browse/MC-272364) Players spawn one block above the obsidian platform when entering an end portal
-   [MC-272365](https://bugs.mojang.com/browse/MC-272365) Inventory Images of All Banners are Completely White
-   [MC-272369](https://bugs.mojang.com/browse/MC-272369) Can respawn in a solid block with default spawnpoint
-   [MC-272374](https://bugs.mojang.com/browse/MC-272374) 24w21b will not upgrade attribute\_modifiers from previous versions
-   [MC-272399](https://bugs.mojang.com/browse/MC-272399) Primed TNT entities can't go through an End portal anymore
-   [MC-272400](https://bugs.mojang.com/browse/MC-272400) Shield in Inventory with Banner Shows as White
-   [MC-272403](https://bugs.mojang.com/browse/MC-272403) Portal linking chunk loading changes
-   [MC-272406](https://bugs.mojang.com/browse/MC-272406) Crash when zombie tries to spawn second reinforcement
-   [MC-272408](https://bugs.mojang.com/browse/MC-272408) set\_attributes item modifier can add the same attribute modifier twice
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

-   [MC-270964](https://bugs.mojang.com/browse/MC-270964) Race condition in can\_break/can\_place\_on item stack components

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

And back again! Here comes the fourth Pre-Release of 1.20.5. Similar story this time around, fixing some important issues.

Happy crafting!

## Technical Changes

-   The Resource Pack version is now 32

## Resource Pack Version 32

-   The `shift` in TTF glyph providers is now restricted to the range `[-512; 512]`

## Fixed bugs in 1.20.5 Pre-Release 4

-   [MC-270666](https://bugs.mojang.com/browse/MC-270666) The game tries to spawn bogged without experimental feature "update 1.21" active (but failed)
-   [MC-270825](https://bugs.mojang.com/browse/MC-270825) Certain simulation distance values cannot be saved visually
-   [MC-270838](https://bugs.mojang.com/browse/MC-270838) Stationary fireballs can no longer be redirected
-   [MC-270845](https://bugs.mojang.com/browse/MC-270845) Summoned wind charges can no longer be redirected

---

Back-to-back! Releasing yesterday was so much fun that we decided to ship another Pre-Release for Minecraft: Java Edition 1.20.5 today as well. This one is coming in hot with important bug & crash fixes.

Happy mining!

## Technical Changes

-   The Data Pack version is now 41

## Data Pack Version 41

-   Replaced Entity Type tag `minecraft:punchable_projectiles` with tag `minecraft:redirectable_projectile` for projectiles which can be redirected by player attacks and projectiles

## Fixed bugs in 1.20.5 Pre-Release 3

-   [MC-269384](https://bugs.mojang.com/browse/MC-269384) Panorama sometimes spins quickly when exiting world
-   [MC-270097](https://bugs.mojang.com/browse/MC-270097) Crash when set\_ominous\_bottle\_amplifier item modifier sets out-of-range amplifier
-   [MC-270375](https://bugs.mojang.com/browse/MC-270375) The screen repetitively flashes when changing the render distance and biome blend settings
-   [MC-270608](https://bugs.mojang.com/browse/MC-270608) Projectiles can no longer deflect ghast fireballs
-   [MC-270609](https://bugs.mojang.com/browse/MC-270609) Client requires a tick between StoreCookiePacket and TransferPacket for cookie to be stored
-   [MC-270634](https://bugs.mojang.com/browse/MC-270634) Fireworks shot from Dispensers go much higher than before
-   [MC-270668](https://bugs.mojang.com/browse/MC-270668) Item data serialization is significantly slower than before
-   [MC-270799](https://bugs.mojang.com/browse/MC-270799) Player can no longer sprint/walk across one block gaps since 1.20.5 Pre-Release 2

---

It's the start of a new week and we're coming right out of the gate with another pre-release for Minecraft: Java Edition 1.20.5! Apart from upping our pun-game in the Advancements department, this pre-release also fixes a slew of bugs and crashes.

Happy mining!

## New Features

### Advancements

-   `Snip it!` advancement is renamed to `Shear Brilliance`

## Changes

-   Using ctrl+pick block no longer lists "(+NBT)" in the item tooltip

### UI

-   The animated Nether Portal texture is displayed when changing dimension to or from The Nether
-   The animated End Portal effect is displayed when changing dimension to or from The End

## Technical Changes

-   The Data Pack version is now 40
-   Invalid data in packets sent from a server will now cause the game client to disconnect

## Data Pack Version 40

### Modified loot functions

#### `set_fireworks`

Fields `explosions` and `mode` have been grouped together as a sub-object

-   `{ "explosions": <list>, "mode": <mode>, <mode-dependent fields>}` becomes `{"explosions": {"values": <list>, "mode": <mode>, <mode-dependent fields>}}`
-   New `explosions` field is now optional, while `values` field inside it is now mandatory

## Fixed bugs in 1.20.5 Pre-Release 2

-   [MC-199973](https://bugs.mojang.com/browse/MC-199973) Wet wolf is rendered too dark compared to past versions
-   [MC-259355](https://bugs.mojang.com/browse/MC-259355) Game crashes because /place sometimes does not check whether position is loaded and out of world
-   [MC-265585](https://bugs.mojang.com/browse/MC-265585) Waterlogged barriers do not diffuse sky light
-   [MC-265709](https://bugs.mojang.com/browse/MC-265709) Stonecutter outputs are broken past the 32nd row in the GUI (server only)
-   [MC-265741](https://bugs.mojang.com/browse/MC-265741) Waterlogged barriers don't show up on maps
-   [MC-266997](https://bugs.mojang.com/browse/MC-266997) Sky light doesn't update when breaking a shulker box while its (closing) animation is playing
-   [MC-267352](https://bugs.mojang.com/browse/MC-267352) Singleplayer worlds don't load the player.dat when the "Player" tag is absent from level.dat
-   [MC-267381](https://bugs.mojang.com/browse/MC-267381) Moving while sneaking is impossible with high generic.step\_height attribute
-   [MC-267414](https://bugs.mojang.com/browse/MC-267414) Scale attribute causes extreme TPS loss with the ender dragon
-   [MC-267441](https://bugs.mojang.com/browse/MC-267441) When a player's generic.step\_height attribute is set to more than two, attempting to step atop of more than two blocks may fail if there are blocks higher up
-   [MC-268015](https://bugs.mojang.com/browse/MC-268015) Shulker bullets shot from shulkers don't account for the scale attribute
-   [MC-268035](https://bugs.mojang.com/browse/MC-268035) True Type Font when changing Language causes error with Rendering overlay
-   [MC-268064](https://bugs.mojang.com/browse/MC-268064) Armadillos that aren't rolled up can roll up during their death animation
-   [MC-268257](https://bugs.mojang.com/browse/MC-268257) Equipping a carpet on a Llama doesn't play a sound
-   [MC-268347](https://bugs.mojang.com/browse/MC-268347) Setting gravity higher than 0.84 allows you to jump up a block
-   [MC-268804](https://bugs.mojang.com/browse/MC-268804) Wolves attacked while wearing wolf armor resets eating timer despite being at full health
-   [MC-268810](https://bugs.mojang.com/browse/MC-268810) Ctrl+Picking chests still says (+NBT) even though NBT is replaced by components
-   [MC-268854](https://bugs.mojang.com/browse/MC-268854) Firework explosions in items without a `Type` field are not correctly upgraded
-   [MC-268858](https://bugs.mojang.com/browse/MC-268858) Buttons to enchant become enabled when placing wolf armor in an enchanting table
-   [MC-268984](https://bugs.mojang.com/browse/MC-268984) Running /give command throws EncoderException
-   [MC-269123](https://bugs.mojang.com/browse/MC-269123) Enabling or disabling a resource pack that changes a shader will not affect that shader until the resource pack is reloaded
-   [MC-269161](https://bugs.mojang.com/browse/MC-269161) Stonecutter does not support multiple recipes with the same result item type
-   [MC-269171](https://bugs.mojang.com/browse/MC-269171) The client is disconnected when receiving the system\_chat packet containing deeply nested NBT data
-   [MC-269173](https://bugs.mojang.com/browse/MC-269173) The server cannot send the client the system\_chat packet containing deeply nested NBT data
-   [MC-269300](https://bugs.mojang.com/browse/MC-269300) The "Alternatively, here's some we made earlier!" text is positioned too close to the header separator
-   [MC-269304](https://bugs.mojang.com/browse/MC-269304) Horse armor renders incorrectly when worn by wolves
-   [MC-269415](https://bugs.mojang.com/browse/MC-269415) set\_fireworks "mode" is required even when "explosions" is optional
-   [MC-269472](https://bugs.mojang.com/browse/MC-269472) Crash when table\_bonus loot condition has empty chances list
-   [MC-269619](https://bugs.mojang.com/browse/MC-269619) Scroller in Telemetry Data screen renders translucent pixels as opaque, unlike elsewhere
-   [MC-269660](https://bugs.mojang.com/browse/MC-269660) arguments.item.predicate.unknown quotes are different
-   [MC-269802](https://bugs.mojang.com/browse/MC-269802) Selecting a villager trade merges items with different components
-   [MC-269932](https://bugs.mojang.com/browse/MC-269932) Item disappears when trying to trade using items with lower max stack count
-   [MC-270003](https://bugs.mojang.com/browse/MC-270003) Ominous banners are not "pick block"-ed properly
-   [MC-270049](https://bugs.mojang.com/browse/MC-270049) Enchanting table buttons and level icons render translucent pixels as opaque
-   [MC-270116](https://bugs.mojang.com/browse/MC-270116) The minecraft:generic.fall\_damage\_multiplier attribute does not function for many mobs with nonstandard fall damage behaviour
-   [MC-270117](https://bugs.mojang.com/browse/MC-270117) The calculation of fall damage for horses, donkeys, mules, zombie horses, skeleton horses, camels, llamas, trader llamas, and foxes disregards the minecraft:generic.safe\_fall\_distance
-   [MC-270262](https://bugs.mojang.com/browse/MC-270262) You can see the world loading while in the process of entering it
-   [MC-270265](https://bugs.mojang.com/browse/MC-270265) Blur slider does not say "OFF" when set to 0%
-   [MC-270413](https://bugs.mojang.com/browse/MC-270413) A nbt copy of a block is ABSOLUTELY the same as the first nbt copy of the original and n (+nbt) display for tooltip of (a copy of)×n a block have an "Items" block data
-   [MC-270559](https://bugs.mojang.com/browse/MC-270559) FreeType error: Unrecognized error: 0x62 (Loading glyph)
-   [MC-270590](https://bugs.mojang.com/browse/MC-270590) Dropped items from creative mode get deleted when inventory is open
-   [MC-270603](https://bugs.mojang.com/browse/MC-270603) Crash updating world: ClassCastException: RegularImmutableList cannot be cast to class com.mojang.datafixers.util.Pair
-   [MC-270610](https://bugs.mojang.com/browse/MC-270610) Some new advancement titles are incorrectly capitalized
-   [MC-270648](https://bugs.mojang.com/browse/MC-270648) Wolf armor with the curse of binding enchantment cannot be removed from wolves using shears in creative mode
-   [MC-270679](https://bugs.mojang.com/browse/MC-270679) Clicking on text with run\_command can cause EncoderException and will exit to multiplayer menu
-   [MC-270712](https://bugs.mojang.com/browse/MC-270712) Cannot move while sneaking if attribute generic.step\_height is set to 0
-   [MC-270767](https://bugs.mojang.com/browse/MC-270767) Leather horse armor no longer prevents horses from freezing in powder snow

---

It is now time for the first Pre-release of Minecraft 1.20.5, featuring some tweaks to Trial Chambers and Ominous Trials, as well as new advancements, a big set of technical tweaks and changes, and lots of bug fixes.

From now on, you should mostly see bugs being fixed. In addition to that, pre-releases don't follow the regular snapshot cadence of releasing on Wednesdays, so keep an eye out for the next pre-release.

## Experimental Features

### Trial Chambers

-   More consistently buried by terrain when found underground
-   Remade 'Chamber 6' with variations, and renamed it to 'Assembly'
-   Added a new trap dispenser style to chambers
-   Fixed various broken jigsaw connections in the corridors
-   Chamber Eruption:
    -   Stopped Tuff Bricks from spawning in the air
    -   Added more lights to quadrants

### Ominous Trials

-   Mobs that can wear equipment will now often spawn with enchanted weapons and armor
    -   Armor enchantments include Protection IV, Projectile Protection IV and Fire Protection IV
    -   Weapon enchantments include Sharpness I, Knockback I, Power I and Punch I
-   Mobs that wear equipment no longer have a chance to drop their equipment on death
-   Players are now chosen 50% of the time when an Ominous Trial Spawner chooses which entity to drop projectiles on top of
    -   Projectiles now spawn more accurately above chosen entities

### Weaving

-   Now more consistently spawns 2-3 cobwebs on death
-   Players are now affected by the movement buff through Cobwebs
    -   Move through Cobweb with 50% of their normal speed instead of 25%

### Infested

-   Now has a 10% chance to spawn 1-2 Silverfish instead of 5%
-   Silverfish will now spawn at the center of the entity's bounding box and fling out in the direction the entity is facing

### Oozing

-   Will only spawn slimes in a given 5x5x5 area up to the max entity cramming count

### Advancements

-   Added `Revaulting` - Unlock an Ominous Vault with an Ominous Trial Key

## New Features in 1.20.5-pre1

### Advancements

-   Added the following advancements:
    -   `Isn't it Scute?` - Get Armadillo Scutes from an Armadillo using a Brush
    -   `Snip it!` - Remove Wolf Armor from a Wolf using Shears
    -   `Good as New` - Repair a damaged Wolf Armor using Armadillo Scutes
    -   `The Whole Pack` - Tame one of each Wolf variant

## Changes in 1.20.5-pre1

-   Added support for Viossa language

## Technical Changes

-   The Data Pack version is now 39

## Data Pack Version 39

-   Added new item sub-predicates and loot functions
-   Added new terrain adaptation type for structures: `encapsulate`
    -   Density will be added all around every piece of a structure
    -   Ideal for structures that need to be entirely covered underground
-   The page limit in Written Books has been removed
-   The combination of `max_stack_size` and `max_damage` components is no longer allowed in commands and data pack definitions
-   Added a new option `body` in entity `equipment` sub-predicate to match the item in the body armor slot of an entity
-   The `saturation_modifier` field on the `food` component has been replaced with `saturation`
    -   `saturation` is the exact value added to the player's saturation level
    -   In respect to the former `saturation_modifier`, this is defined by `saturation = nutrition * saturation_modifier * 2`
-   Particle representation in commands and area effect clouds has been changed
-   Changed optional `equipment_loot_table` field in the `SpawnPotentials` of Monster Spawners and `spawn_potentials` of Trial Spawner configs
    -   Now named `equipment` instead of `equipment_loot_table`
    -   Format: object with fields
        -   `loot_table` - A loot table used to generate the equipment
        -   `slot_drop_chances` - An optional map of equipment slot to specified drop chance
            -   Can also be a single value instead of a list to apply to all slots: e.g. `slot_drop_chances: 0.0f` will apply a chance of 0% to all slots
    -   e.g. `equipment: {loot_table: "minecraft:equipment/trial_chamber", slot_drop_chances: {"head": 0.0f, "chest": 0.25f, "legs": 1.0f, "feet": 0.25f}}`
    -   If present, rolled items from the specified loot table will be equipped to the mob that spawns
-   Removed Item tag `minecraft:tools` (overlapping with `minecraft:breaks_decorated_pots`)
-   Added Entity Type tag `minecraft:punchable_projectiles` for projectiles which should be able to be punched and deflected toward the direction the player is looking
-   Added Enchantment tag `minecraft:tooltip_order` controlling which order Enchantments are listed in tooltips

### Modified loot functions

#### `set_contents`

-   Unused field `type` has been removed
-   Added new mandatory field `component`:
    -   Describes target component to be filled with items
    -   Existing contents will be replaced
    -   Allowed values: `container`, `bundle_contents`, `charged_projectiles`
    -   `bundle_contents` and `charged_projectiles` will ignore empty stacks

#### `set_custom_data`

Field `tag` now accepts both SNBT data written as a string (existing format) and unflattened tags

### New Loot Functions

#### `modify_contents`

-   Apply modifier function to every item inside a component
-   If component does not exist, it will not be added
-   Fields:
    -   `conditions`\- list of conditions to filter this function
    -   `component` - target component
        -   Allowed values: `container`, `bundle_contents`, `charged_projectiles`
    -   `modifier` - function or list of functions to be applied to every item inside container

#### `set_item`

-   Replaces item type of item stack without changing count and components
-   Fields:
    -   `conditions` - list of conditions to filter this function
    -   `item` - new item type

#### `filtered`

-   Applies sub-function only to items that match item predicate
-   Fields:
    -   `conditions` - list of conditions to filter this function
    -   `item_filter` - item predicate used to match items
    -   `modifier` - functions to apply to matching items

#### `set_custom_model_data`

-   Sets `custom_model_data` component
-   Fields:
    -   `conditions` - list of conditions to filter this function
    -   `value` - integer number provider

### New Item Sub-predicates

General rules of component predicates:

-   Unless otherwise specified, a field in predicate with the same name as a field in component that matches (i.e. has the same name as predicate) will match that field value
-   Those fields will usually have the same type as in the components, but will be optional.
-   Exceptions:
    -   List fields will be replaced with collection matchers (see below)
    -   Integer and float fields will be replaced with ranges
    -   Registry ids will be replaced with a type that accepts id, list of ids or a tag

#### Collection matcher

Collection matcher is a shared part of predicate used for matching collections. Every instance of this matcher will have same fields with same functionality, with only difference being type of matched element Fields:

-   `size` - integer range to match against collection size
-   `contains` - a list of element predicates
    -   All conditions must match for predicate to pass
    -   Not all elements in tested container have to be matched
    -   Elements can be in any order
    -   Single element can match multiple predicates
    -   Examples (when matching item stacks):
        -   `{contents:[{item:diamond}]}` - will match when there is at least one diamond item
        -   `{contents:[{item:diamond}, {item:dirt}]}` - will match when there is at least one diamond item and at least one dirt item
-   `count` - a list of matchers on element counts
    -   Entry fields:
        -   `test` - element matcher
        -   `count` - optional integer range to check against number of elements passing `test`
    -   Examples (when matching item stacks):
        -   `{count:[{count:3,test:{items:diamond}}]}}` will match only when there are exactly 3 stacks of diamonds (no matter the stack size)

#### `container`

-   Matcher for `container` component (like shulker box)
-   Fields:
    -   `items` - optional collection matcher
        -   Note: empty items are ignored. That means `container~{items:{size:3}}` will only pass if there are exactly 3 non-empty stacks in container

### `bundle_contents`

-   Matcher for `bundle_contents` component
-   Fields:
    -   `items` - optional collection matcher

### `firework_explosion`

-   Matcher for `firework_explosion` component
-   Fields
    -   `shape` - optional matcher for shape, same values as `shape` field in `minecraft:firework_explosion` component
    -   `has_trail` - optional boolean
    -   `has_twinkle` - optional boolean

### `fireworks`

-   Matcher for `fireworks` component
-   Fields:
    -   `explosions` - optional collection matcher for `firework_explosion` predicates
    -   `flight_duration` - optional integer range check for flight duration
-   Example: `minecraft:fireworks~{explosions:{contains:[{shape:small_ball}]}}]` - matches if firework has at least one explosion with `small_ball` shape

### `writable_book_content`

-   Matcher for `writable_book_content` component
-   Fields
    -   `pages` - optional collection matcher for strings (matching only unfiltered contents of page)

### `fireworks`

-   Matcher for `written_book_content` component
-   Fields
    -   `pages` - optional collection matcher for chat components (matching only unfiltered contents of page)
    -   `author` - optional string value
    -   `title` - optional string value (matching only value)
    -   `generation` - optional integer range check for generation
    -   `resolved` - optional boolean

### `attribute_modifiers`

-   Matcher for `attribute_modifiers` component
-   Fields:
    -   `modifiers` - optional collection matcher for following entries with following fields:
        -   `attribute` - optional id, list of ids or tag for attribute to be matched
        -   `id` - optional UUID
        -   `name` - optional string
        -   `amount` - optional double range check
        -   `operation` - optional operation type (same values as `operation` field from `attribute_modifiers` component)
        -   `slot` - optional applicable slot type (same values as `slot` field from `attribute_modifiers` component)

### `trim`

-   Matcher for `trim` component
-   Fields:
    -   `material` - optional id, list of ids or tag for material to be matched
    -   `pattern` - optional id, list of ids or tag for pattern to be matched

### Particle representation

-   Particle options in commands and in fields like `Particles` in Area Effect clouds now use the same representation as worldgen files (like existing biomes' ambient particle settings)
-   For example, command `/particle minecraft:dust 1.0 0.0 0.0 2.0 ...` becomes `/particle minecraft:dust{color:[1.0, 0.0, 0.0], scale:2.0} ...`
-   The syntax for particles without extra options (like `minecraft:villager`) remains unchanged
-   Changes to block particles (`minecraft:block`, `minecraft:block_marker`, `minecraft:falling_dust`, `minecraft:dust_pillar`) options:
    -   Field `value` has been renamed to `block_state`
    -   Field `block_state` now also accepts plain block name to represent default block state
    -   Example transformations:
        -   `minecraft:block minecraft:redstone_lamp[lit=true]` -> `minecraft:block{block_state: {Name: "minecraft:redstone_lamp", Properties: {lit: "true"}}}`
        -   `minecraft:block minecraft:diamond_block` -> `minecraft:block{block_state: "minecraft:diamond_block"}`
-   Changes to `minecraft:item` options:
    -   Field `value` has been renamed to `item`
    -   Field `item` now also accepts plain item name to represent item stack with default components
    -   `count` field is now ignored
    -   Example transformations:
        -   `minecraft:item minecraft:dirt` -> `minecraft:item{item: {id: "minecraft:dirt"}}`
        -   `minecraft:item minecraft:dirt` -> `minecraft:item{item: "minecraft:dirt"}`
-   Changes to `dust_color_transition` options:
    -   Field `fromColor` has been renamed to `from_color`
    -   Field `toColor` has been renamed to `to_color`
    -   Example transformation: `dust_color_transition 1.0 0.0 0.0 0.5 0.0 1.0 0.5` -> `dust_color_transition{from_color: [1.0f, 0.0f, 0.0f], scale: 0.5f, to_color: [0.0f, 1.0f, 0.5f]}`
-   Changes to `entity_effect` options:
    -   Field `value` has been renamed to `color`
    -   Field `color` now also accepts list of floats representing RGBA color

## Fixed bugs in 1.20.5 Pre-Release 1

-   [MC-165435](https://bugs.mojang.com/browse/MC-165435) Can't trigger flying mode in creative while standing in the middle of 2×2 magma block bubble column
-   [MC-188497](https://bugs.mojang.com/browse/MC-188497) AngerTime and AngryAt cannot be set on summon
-   [MC-207353](https://bugs.mojang.com/browse/MC-207353) Ghast fireballs and wind charges can't be redirected in melee if the attack does 0 damage
-   [MC-263315](https://bugs.mojang.com/browse/MC-263315) Attack Target of hoglins/zoglins can't be detected by /execute on target
-   [MC-264456](https://bugs.mojang.com/browse/MC-264456) Entity targeted by frogs and axolotls can't be detected by /execute on target
-   [MC-265390](https://bugs.mojang.com/browse/MC-265390) Forceload Command provides wrong output
-   [MC-267934](https://bugs.mojang.com/browse/MC-267934) Sending ClientboundTransferPacket followed by disconnect just kicks the player
-   [MC-268000](https://bugs.mojang.com/browse/MC-268000) The client crashes when using /give to give players a skull
-   [MC-268346](https://bugs.mojang.com/browse/MC-268346) Jump can be used with generic.jump\_strength set to 0 resulting in a speed boost
-   [MC-268947](https://bugs.mojang.com/browse/MC-268947) Flying cannot be initiated reliably when the minecraft:generic.gravity attribute is increased
-   [MC-269191](https://bugs.mojang.com/browse/MC-269191) Old villagers can't trade
-   [MC-269192](https://bugs.mojang.com/browse/MC-269192) Breeze is not affected by the 'execute on target' command
-   [MC-269266](https://bugs.mojang.com/browse/MC-269266) Area effect cloud particles from creeper explosions are incorrectly tinted
-   [MC-269320](https://bugs.mojang.com/browse/MC-269320) Books with more than 100 pages get cut off when upgraded
-   [MC-269357](https://bugs.mojang.com/browse/MC-269357) Flow and guster banner pattern descriptions display as raw translation strings
-   [MC-269366](https://bugs.mojang.com/browse/MC-269366) Mace doesn't break Decorated Pots unlike other tools
-   [MC-269496](https://bugs.mojang.com/browse/MC-269496) You don't get any damage if you fight against the breeze in a minecart or in a boat
-   [MC-269501](https://bugs.mojang.com/browse/MC-269501) The text above the hotbar has no background, even when the "Text Background" setting is "Everywhere" in spectator mode
-   [MC-269508](https://bugs.mojang.com/browse/MC-269508) Player keeps vertical momentum when jumping when landing on the ground from sonic boom
-   [MC-269609](https://bugs.mojang.com/browse/MC-269609) Wind charges can harm the ender dragon while it perches atop the end portal, unlike arrows and tridents.
-   [MC-269610](https://bugs.mojang.com/browse/MC-269610) Wind charges have the capability to harm the wither when it has reached half health or less
-   [MC-269680](https://bugs.mojang.com/browse/MC-269680) Game crashes when trying to save after modifying item stack to have a max\_stack\_size below its current stack size
-   [MC-269707](https://bugs.mojang.com/browse/MC-269707) Brewing stand slots have artificial maximum stack size of 64
-   [MC-269765](https://bugs.mojang.com/browse/MC-269765) Mace damage does not reset after a hit while still falling
-   [MC-269933](https://bugs.mojang.com/browse/MC-269933) limit\_count item modifier can create overstacked items
-   [MC-269947](https://bugs.mojang.com/browse/MC-269947) Clicking spam with Mace causes very high damage
-   [MC-269948](https://bugs.mojang.com/browse/MC-269948) The subtitle for the "minecraft:event.mob\_effect.raid\_omen" sound event displays as a raw translation string
-   [MC-269949](https://bugs.mojang.com/browse/MC-269949) New "Raid Omen" effect texture is using Programmer Art Evoker as base
-   [MC-269954](https://bugs.mojang.com/browse/MC-269954) Striking non-living entities with a mace enchanted with Wind Burst propels the player upward, even when they are flying
-   [MC-269955](https://bugs.mojang.com/browse/MC-269955) When flying in creative mode, hitting ender dragons with a mace enchanted with Wind Burst pushes the player upward, unlike when attacking other mobs
-   [MC-269959](https://bugs.mojang.com/browse/MC-269959) "Not a list" printed to console when loading into a world
-   [MC-269961](https://bugs.mojang.com/browse/MC-269961) Non-player entities with the Weaving effect can't walk through Cobweb at normal speeds
-   [MC-269963](https://bugs.mojang.com/browse/MC-269963) Bad Omen is not removed when experimental features are disabled
-   [MC-269974](https://bugs.mojang.com/browse/MC-269974) Mobs with the weaving effect, when dying, are unable to replace replaceable blocks with cobwebs
-   [MC-269976](https://bugs.mojang.com/browse/MC-269976) Wind Burst book available from villager trading
-   [MC-269977](https://bugs.mojang.com/browse/MC-269977) Wind Burst enchantment is obtainable in Enchanting Table
-   [MC-269980](https://bugs.mojang.com/browse/MC-269980) Wind Burst enchantment triggers from normal attacks rather than smash attacks
-   [MC-269993](https://bugs.mojang.com/browse/MC-269993) Hitting wind charges using mace with Wind Burst creates very high upwards momentum
-   [MC-269999](https://bugs.mojang.com/browse/MC-269999) Potions of Infestation, Oozing and Weaving can be obtained without experimental features enabled
-   [MC-270001](https://bugs.mojang.com/browse/MC-270001) The particle 'minecraft:item minecraft:air' crashes the client
-   [MC-270004](https://bugs.mojang.com/browse/MC-270004) Giving yourself an item with a Wind Burst enchantment level higher than 3, then hitting certain entities crashes the game
-   [MC-270005](https://bugs.mojang.com/browse/MC-270005) Mace smash attack can be done multiple times from a single fall
-   [MC-270009](https://bugs.mojang.com/browse/MC-270009) Entities with the infested effect can spawn silverfish without actually being hurt
-   [MC-270048](https://bugs.mojang.com/browse/MC-270048) Vault textures are inconsistent
-   [MC-270060](https://bugs.mojang.com/browse/MC-270060) The glowing parts of trial spawner textures are inconsistent
-   [MC-270094](https://bugs.mojang.com/browse/MC-270094) Fletcher sells new tipped arrows without experimental features enabled
-   [MC-270099](https://bugs.mojang.com/browse/MC-270099) Killing a mob with Weaving effect places cobwebs even if mobGriefing is disabled
-   [MC-270119](https://bugs.mojang.com/browse/MC-270119) The contents slot for the /item command does not function with shot arrows, tridents, and fireballs
-   [MC-270125](https://bugs.mojang.com/browse/MC-270125) Wind Burst can be obtained from chest and fishing loot
-   [MC-270158](https://bugs.mojang.com/browse/MC-270158) Wind Burst activates while mace is on cooldown
-   [MC-270161](https://bugs.mojang.com/browse/MC-270161) Wind burst enchantment is significantly stronger on vehicle entities
-   [MC-270201](https://bugs.mojang.com/browse/MC-270201) Fishing rod line does not account for the scale attribute in third-person
-   [MC-270236](https://bugs.mojang.com/browse/MC-270236) area\_effect\_cloud and lingering potions causing potion\_contents.custom\_color to be slightly transparent
-   [MC-270412](https://bugs.mojang.com/browse/MC-270412) Wind charge item crash on non-experimental worlds.
-   [MC-270475](https://bugs.mojang.com/browse/MC-270475) Container component slot -1 crash

---

