# Minecraft Snapshot 24w03b

We are releasing Snapshot 24w03b to fix a crash, along with some bug fixes and minor changes.

Happy Mining!

## Experimental Features

### Breeze

-   Updated the model, texture, and animation of the Wind Charge projectile to give it a more dynamic look and feel

## Fixed bugs in Snapshot 24w03b

-   [MC-266032](https://bugs.mojang.com/browse/MC-266032) Attempting to copy a "Copy of a copy" book in a Crafter behaves incorrectly
-   [MC-266577](https://bugs.mojang.com/browse/MC-266577) Some trial spawners in trial chambers spawn mobs without persistence
-   [MC-267918](https://bugs.mojang.com/browse/MC-267918) The game crashes when opening the configure realms menu
-   [MC-267927](https://bugs.mojang.com/browse/MC-267927) The hitboxes of magma cubes are too large
-   [MC-267935](https://bugs.mojang.com/browse/MC-267935) Items on top of soul sand or mud will be rendered black

---

New year, new Snapshot - we're now releasing the third Snapshot of Minecraft 1.20.5. This time around, we're bringing some updates to the Armadillo, the Breeze, as well as accessibility improvements.

In addition to a big bundle of bug fixes, we're bringing some changes to how spawn chunks are handled.

The spawn chunks are an area of the Overworld located at the world spawn which are always loaded in memory. These are useful for some players but use more of your computer’s resources and make the game load and run more slowly. (You can read more about spawn chunks at the [community wiki](https://minecraft.wiki/w/Spawn_chunk)!)

In this snapshot we made the size of the spawn chunks configurable by adding a new gamerule: `spawnChunkRadius`. The new default setting is 2 (which creates a 48x48 block area). This is 98% smaller than the previous area and will result in a noticeable performance improvement for most players.

If you would like to keep your spawn chunks working like they did before, you can use the game rule to change the spawn chunk radius value to 10. This will make your spawn chunks work the same as they did before, but you will miss out on the performance gains.

We're interested in hearing your feedback on this change and how the new default setting affects you.

[Let's talk about spawn chunks!](https://aka.ms/spawnchunksfeedback)

## New Features

### Armadillo

Armadillo visual update! We gathered feedback from the first Armadillo snapshot, and the next step in the look of the Armadillo, the Armadillo Scutes and the Wolf Armor are now here.

-   Armadillos now also spawn in Badlands

#### Armadillo Rolling Up Behavior

-   Spiders and Cave Spiders will run away from Armadillos not in a rolled up state

## Changes

-   Adjusted the texture of the Wolf Collar layer to be more consistent with the new Wolf Armor

### Accessibility

-   The default focus is now always set when entering or exiting any menu while navigating using tab or arrow keys

## Technical Changes

-   The Data Pack version is now 28
-   The Resource Pack version is now 24
-   Custom Villager trades can be configured to accept items that have different tags from the expected item by adding `ignoreTags: true` in the trade's NBT
-   When entities leave or enter the end the area they arrive in will now stay loaded for 15 seconds, matching the behavior of nether portals
-   Added transfer packets
-   Added cookie packets
-   Decreased the default size of the spawn chunks and made the value configurable

### Transfer Packets

-   Custom servers can now request that clients connect to another server with a new packet
-   When a client is transferred it will connect to the target server with a new transfer intent (id 3)
-   By default servers will not accept incoming transfers and will disconnect the client
-   This can be changed by setting the `accepts-transfers` property to `true` in the `server.properties` file
-   Resource packs are maintained across transfers
-   In the case of a transfer custom servers can skip authentication with a new flag

### Cookie Packets

-   Cookie packets allow custom servers to request and store data on a client
    -   Each cookie may be up to 5 KiB in size
    -   Cookies may be requested during login, configuration and play phases — but only stored during the configuration and play phases
-   Cookies are persisted across server transfers but are not persisted when the player disconnects
    -   This allows servers to pass along information such as authentication or custom game data to the new server

### Spawn Chunk Changes

-   The size of the spawn chunks changed from radius 10 (19x19 entity ticking chunks) to radius 2 (3x3 entity ticking chunks)
    -   This was done to reduce memory usage, loading times and CPU usage
    -   We opted to not fully remove spawn chunks to allow players who currently utilize this functionality to continue to do so
-   Added a new gamerule `spawnChunkRadius` to set the size of the spawn chunks
    -   Possible values are 0 to 32, where 0 completely disables the spawn chunks and 10 is equivalent to the functionality before this change
    -   Default value is 2, equivalent to 3x3 entity ticking chunks

## Data Pack Version 28

-   The `minecraft:sweeping` enchantment has been renamed to `minecraft:sweeping_edge`
-   Added Advancement Criteria trigger `default_block_use` which triggers due to the default interaction of a block by a player, such as opening a door
-   Added Advancement Criteria trigger `any_block_use` which triggers due to any type of interaction with a block by a player, such as using an item on the block or its default usage

### Tags

#### Item Tags

New item tags controlling what enchantments can be added to what gear:

-   `minecraft:enchantable/foot_armor`
-   `minecraft:enchantable/leg_armor`
-   `minecraft:enchantable/chest_armor`
-   `minecraft:enchantable/head_armor`
-   `minecraft:enchantable/armor`
-   `minecraft:enchantable/weapon`
-   `minecraft:enchantable/sword`
-   `minecraft:enchantable/mining`
-   `minecraft:enchantable/mining_loot`
-   `minecraft:enchantable/fishing`
-   `minecraft:enchantable/trident`
-   `minecraft:enchantable/durability`
-   `minecraft:enchantable/bow`
-   `minecraft:enchantable/equippable`
-   `minecraft:enchantable/crossbow`
-   `minecraft:enchantable/vanishing`

#### Entity Type Tags:

-   Added `minecraft:ignores_poison_and_regen` for entities that cannot be affected by Poison and Regeneration effects
-   Added `minecraft:illager_friends` for entities that Illagers will consider allies (unless on a different team)
-   Added `minecraft:inverted_healing_and_harm` for entities that have inverted meanings of the Healing and Harm effects
-   Added `minecraft:not_scary_for_pufferfish` for entities that will not cause Pufferfish to puff
-   Added `minecraft:sensitive_to_bane_of_arthropods` for entities sensitive to Bane of Arthropods
-   Added `minecraft:sensitive_to_impaling` for entities sensitive to Impaling
-   Added `minecraft:wither_friends` for entities that the Wither will not target and which cannot harm the Wither

## Resource Pack 24

-   The `ttf` font provider transforms have been adjusted to have more reasonable defaults
    -   `shift` is no longer applied double, and now directly represents a number of pixels in the game UI
    -   The font EM square is fitted to `size` pixels in the game UI, instead of between the font ascender and font descender
    -   The font baseline is positioned consistently with the default font (7 pixels below line top)
    -   This means that generally, any font with a `size` of 9 and no `shift` should look correct by default

## Experimental Features

### Breeze

-   Breeze now deflects all projectiles
-   Deflected projectiles now deflect in the direction of the shooter

### Trade Rebalance

-   In the Trade Rebalance Experiment, Villagers who buy armor now ignore durability and can buy damaged armor

## Fixed bugs in Snapshot 24w03a

-   [MC-153160](https://bugs.mojang.com/browse/MC-153160) Villagers don't auto-fill items if NBT data doesn't match
-   [MC-155857](https://bugs.mojang.com/browse/MC-155857) Team command doesn't affect illagers and witches' AI
-   [MC-171981](https://bugs.mojang.com/browse/MC-171981) Map of fuel times is created anew every time an item is placed in a furnace, instead of being cached
-   [MC-187372](https://bugs.mojang.com/browse/MC-187372) There is no space between fps limit/vsync and graphics level in the debug screen
-   [MC-260889](https://bugs.mojang.com/browse/MC-260889) Players can use water buckets and lava buckets on blocks that are out of reach
-   [MC-261596](https://bugs.mojang.com/browse/MC-261596) Crafting Table search keyboard shortcut not working
-   [MC-265273](https://bugs.mojang.com/browse/MC-265273) The tab list in create world screen does not indicate it's tab-focused by highlight or rendering borders
-   [MC-265520](https://bugs.mojang.com/browse/MC-265520) Switching connection protocols sometimes produces errors
-   [MC-265749](https://bugs.mojang.com/browse/MC-265749) Tooltips flash when the values of buttons or fields are changed
-   [MC-266078](https://bugs.mojang.com/browse/MC-266078) The output of Crafting and Stonecutting Copper Grates is inconsistent with each other
-   [MC-267044](https://bugs.mojang.com/browse/MC-267044) Tick status strings contain inconsistent word usage
-   [MC-267045](https://bugs.mojang.com/browse/MC-267045) Some tick strings are missing articles and are unclear
-   [MC-267086](https://bugs.mojang.com/browse/MC-267086) Compass does not indicate spawn point correctly when game is frozen with /tick
-   [MC-267104](https://bugs.mojang.com/browse/MC-267104) The bottom face textures of breezes' rods are incorrect and don't match with surrounding colors
-   [MC-267149](https://bugs.mojang.com/browse/MC-267149) Crafter top face has an inverted UV texture map
-   [MC-267366](https://bugs.mojang.com/browse/MC-267366) You cannot use Spider Eyes on Baby Armadillos to age them up
-   [MC-267367](https://bugs.mojang.com/browse/MC-267367) Wolf armor flashes red when the wolf takes damage
-   [MC-267371](https://bugs.mojang.com/browse/MC-267371) Shulkers hitbox doesn't scale with generic.scale
-   [MC-267377](https://bugs.mojang.com/browse/MC-267377) Applying bone meal to mangrove leaves no longer produces any particles
-   [MC-267378](https://bugs.mojang.com/browse/MC-267378) Armor stand interaction points do not change with scale
-   [MC-267379](https://bugs.mojang.com/browse/MC-267379) Applying bone meal to rooted dirt no longer produces any particles
-   [MC-267380](https://bugs.mojang.com/browse/MC-267380) Cannot open inventories beyond default block reach
-   [MC-267383](https://bugs.mojang.com/browse/MC-267383) Can't place water and lava with extended attribute "block;;_;;interaction;;_;;range"
-   [MC-267384](https://bugs.mojang.com/browse/MC-267384) Unused duplicate wolf armor sound events
-   [MC-267385](https://bugs.mojang.com/browse/MC-267385) Attribute entity;;_;;interaction;;_;;range is capped by block;;_;;interaction;;_;;range
-   [MC-267388](https://bugs.mojang.com/browse/MC-267388) The subtitle for brushing armadillos is inconsistent with other item usage subtitles
-   [MC-267389](https://bugs.mojang.com/browse/MC-267389) Armadillos don't always stand in close proximity to one another when breeding
-   [MC-267392](https://bugs.mojang.com/browse/MC-267392) Armadillos are scared of players in spectator mode
-   [MC-267395](https://bugs.mojang.com/browse/MC-267395) Armadillos panic when receiving fall damage
-   [MC-267397](https://bugs.mojang.com/browse/MC-267397) Armadillos and baby armadillos stand a bit too far away from players that are tempting them
-   [MC-267398](https://bugs.mojang.com/browse/MC-267398) Armadillos don't play a roll out sound after finishing hiding
-   [MC-267402](https://bugs.mojang.com/browse/MC-267402) Head of armadillo in boat is twitching when turning the boat
-   [MC-267404](https://bugs.mojang.com/browse/MC-267404) Scared armadillo pushed into boat is scared of player riding the boat
-   [MC-267405](https://bugs.mojang.com/browse/MC-267405) Scared armadillo can move when having a passenger
-   [MC-267406](https://bugs.mojang.com/browse/MC-267406) Armadillos with their "Silent" NBT tag set to "1b" still play their landing and rolling up sounds
-   [MC-267413](https://bugs.mojang.com/browse/MC-267413) Feeding an armadillo a spider eye doesn't cancel eating it
-   [MC-267416](https://bugs.mojang.com/browse/MC-267416) Particles created from Slimes do not account for the scale attribute
-   [MC-267417](https://bugs.mojang.com/browse/MC-267417) Suffocation overlay shown when on solid almost-full blocks at scale < .06
-   [MC-267418](https://bugs.mojang.com/browse/MC-267418) Warden sonic boom attack doesn't account for the scale attribute
-   [MC-267420](https://bugs.mojang.com/browse/MC-267420) Boat placement ignores custom "block;;_;;interaction;;_;;range" attribute
-   [MC-267422](https://bugs.mojang.com/browse/MC-267422) Attribute entity;;_;;interaction;;_;;range is classified as 'generic', but has no effect on mobs
-   [MC-267427](https://bugs.mojang.com/browse/MC-267427) Rendering offset of sleeping entities does not account for scale attribute
-   [MC-267428](https://bugs.mojang.com/browse/MC-267428) Phantom wing particles do not account for scale attribute
-   [MC-267434](https://bugs.mojang.com/browse/MC-267434) Upside-down mobs with big scale attribute are displayed above hitbox
-   [MC-267435](https://bugs.mojang.com/browse/MC-267435) Baby armadillos do not follow parents consistently or closely
-   [MC-267454](https://bugs.mojang.com/browse/MC-267454) Baby striders are visually the same size as normal striders
-   [MC-267456](https://bugs.mojang.com/browse/MC-267456) Changes to item;;_;;used;;_;;on;;_;;block advancement criteria breaks previous functionality
-   [MC-267465](https://bugs.mojang.com/browse/MC-267465) 1.20.3 upload error: "Cannot invoke "ctt.c()" because "this.b" is null"
-   [MC-267470](https://bugs.mojang.com/browse/MC-267470) The regeneration effect granted from beacons is no longer applied to players
-   [MC-267479](https://bugs.mojang.com/browse/MC-267479) Inventory view model scales with generic.scale
-   [MC-267497](https://bugs.mojang.com/browse/MC-267497) Baby armadillos do not sound high pitched when curling up
-   [MC-267538](https://bugs.mojang.com/browse/MC-267538) Putting placeable blocks inside decorated pots also places them
-   [MC-267565](https://bugs.mojang.com/browse/MC-267565) Low scale attribute lets you breathe underwater
-   [MC-267588](https://bugs.mojang.com/browse/MC-267588) The hand animation is no longer played when putting items inside decorated pots
-   [MC-267706](https://bugs.mojang.com/browse/MC-267706) Evoker and illusioner summon particles do not account for scale attribute
-   [MC-267707](https://bugs.mojang.com/browse/MC-267707) Wither particles do not account for scale attribute
-   [MC-267708](https://bugs.mojang.com/browse/MC-267708) The wither's skull projectile attacks do not account for the scale attribute
-   [MC-267725](https://bugs.mojang.com/browse/MC-267725) Players' experience levels no longer render above the health and hunger bars
-   [MC-267726](https://bugs.mojang.com/browse/MC-267726) Applying bone meal to blocks underwater no longer produces any particles

---

Coming in hot, here is Snapshot 23w51b, fixing a crash in 23w51a.

## Fixed bugs in 23w51b

-   Fixed a crash that would occur when the nametag of a player was visible during sleeping, swimming or dying

---

We're now releasing Snapshot 23w51a, the first snapshot for Minecraft 1.20.5. This one comes with a present for your pet Wolf in time for the holidays - and the Armadillo.

Happy brushing!

## New Features

-   Added Armadillo, Armadillo Scutes and Wolf Armor

### Armadillo

-   The Armadillo is a new passive mob that:
    -   drops Armadillo Scutes periodically
    -   drops Armadillo Scutes when brushed
    -   spawns in Savannas
    -   its favorite food is Spider Eye

#### Armadillo Rolling Up Behavior

-   Armadillo rolls up when it detects a threat such as:
    -   a sprinting player
    -   a player in a vehicle or mounted
    -   undead mobs
-   It does not roll up when:
    -   it is fleeing
    -   in water
    -   in the air or
    -   on a leash
-   When an Armadillo is rolled up it does not walk, cannot eat, and will not be tempted by food
    -   It will continue to scan for threats: if none are detected for 3 seconds, it will unroll

#### Armadillo Scutes

-   Armadillo Scutes can be used to craft Wolf Armor
-   They are dropped by Armadillos
-   Dispensers can be used to brush Armadillo Scutes off Armadillos

### Wolf Armor

-   Using Wolf Armor on an adult tamed Wolf will equip the armor on the wolf.
-   Only a Wolf's owner can put a Wolf Armor on their tamed Wolf, and with this in mind; Dispensers cannot put Wolf Armor on wolves.
-   Wolf Armor gives the same protection as Diamond Horse Armor.
-   Using Shears on a Wolf that is wearing armor will make it drop the armor
-   Only a Wolf's owner can shear a Wolf Armor from it, and with this in mind; Dispensers cannot remove Wolf Armor from wolves.
-   If a Wolf dies while wearing armor, it will drop the armor.

## Changes

-   Renamed scutes that come from Turtles to Turtle Scutes
-   Llamas and Shulkers are no longer able to destroy armor stands

## Technical Changes

-   The Data Pack version is now 27

## Data Pack 27

-   Llamas now use a new damage type `spit` instead of `mob_projectile`
-   `FactorCalculationData` has been removed from mob effect instance tags
-   Added `generic.scale` attribute that can be used to rescale any living entity
-   Player reach distance can now be controlled with the `generic.block_interaction_range` and `generic.entity_interaction_range` attributes
-   The maximum number of blocks that an entity can step up without jumping is now controlled by the `generic.step_height` attribute

## Experimental Features

### Breeze

-   Added a new 'whirl' idle sound
-   Added a 'charging up attack' sound
-   Added a sound that plays while the Breeze is in the air
-   Added a projectile deflection sound
-   Tweaked existing sounds

### Trial Spawner

-   The Trial Spawner now has the same two default loot tables as they have in the Trial Chamber

## Fixed bugs in 23w51a

-   [MC-130244](https://bugs.mojang.com/browse/MC-130244) When opening chat in F1 mode, previous messages aren't visible
-   [MC-153643](https://bugs.mojang.com/browse/MC-153643) Debug overlay is rendered behind hotbar items
-   [MC-167375](https://bugs.mojang.com/browse/MC-167375) Baby turtle subtitles are grammatically incorrect
-   [MC-173672](https://bugs.mojang.com/browse/MC-173672) Title text renders in front of player names in player list
-   [MC-184066](https://bugs.mojang.com/browse/MC-184066) Respawn anchors don't produce an ambient sound
-   [MC-184622](https://bugs.mojang.com/browse/MC-184622) Sound for exiting a portal/travelling to another dimension does not use its subtitle string despite it existing in en;;_;;us.json
-   [MC-185379](https://bugs.mojang.com/browse/MC-185379) Baby polar bear subtitle does not explicitly mention it comes from a baby polar bear
-   [MC-187267](https://bugs.mojang.com/browse/MC-187267) Title text renders in front of sidebar
-   [MC-187372](https://bugs.mojang.com/browse/MC-187372) There is no space between fps limit/vsync and graphics level in the debug screen
-   [MC-193511](https://bugs.mojang.com/browse/MC-193511) Title text renders in front of narrator text
-   [MC-193515](https://bugs.mojang.com/browse/MC-193515) Boss bar text renders in front of narrator text
-   [MC-193517](https://bugs.mojang.com/browse/MC-193517) Boss bar text renders in front of sidebar
-   [MC-193521](https://bugs.mojang.com/browse/MC-193521) Boss bar text renders in front of F3
-   [MC-193524](https://bugs.mojang.com/browse/MC-193524) Boss bar text strikethough/underline renders on tab list
-   [MC-193753](https://bugs.mojang.com/browse/MC-193753) Respawn anchor ambient sound subtitle refers to it as a portal
-   [MC-194948](https://bugs.mojang.com/browse/MC-194948) Block breaking subtitle inconsistent with painting, item frame and lead breaking subtitles
-   [MC-198787](https://bugs.mojang.com/browse/MC-198787) Inefficient streams in GoalSelector
-   [MC-198963](https://bugs.mojang.com/browse/MC-198963) Chat text renders in front of player names in player list
-   [MC-219899](https://bugs.mojang.com/browse/MC-219899) Bone meal used on rooted dirt causes the particles to appear above it, despite the growth being below it
-   [MC-238242](https://bugs.mojang.com/browse/MC-238242) There is an unnecessary black pixel in the upper right corner of small potion UI icons in the inventory
-   [MC-248961](https://bugs.mojang.com/browse/MC-248961) takenDamage for achievement criteria is calculated wrongly when the player has equipped a helmet
-   [MC-249335](https://bugs.mojang.com/browse/MC-249335) Using bone meal on mangrove leaves spawns growth particles at the center of the block instead of below it
-   [MC-251027](https://bugs.mojang.com/browse/MC-251027) Wearing a helmet doesn't reduce the damage of falling anvils or stalactites by 1⁄4
-   [MC-252409](https://bugs.mojang.com/browse/MC-252409) Memory statistics within the debug menu contain some unnecessary spaces
-   [MC-259587](https://bugs.mojang.com/browse/MC-259587) Negative item durability causes the durability bar to render incorrectly
-   [MC-261577](https://bugs.mojang.com/browse/MC-261577) The nether portal overlay is rendered completely opaque when using spyglasses while standing inside of nether portals
-   [MC-263256](https://bugs.mojang.com/browse/MC-263256) Chat renders on top of TAB, blocking information
-   [MC-265541](https://bugs.mojang.com/browse/MC-265541) player.dat;;_;;old won't be read even if player.dat doesn't exist
-   [MC-265669](https://bugs.mojang.com/browse/MC-265669) Hotbar text renders above subtitle background but under subtitle text
-   [MC-265835](https://bugs.mojang.com/browse/MC-265835) The freezing effect is rendered totally opaque when using a spyglass
-   [MC-266055](https://bugs.mojang.com/browse/MC-266055) Opening or closing a copper door or trapdoor while holding an axe / honeycomb grants wax-related advancement
-   [MC-266135](https://bugs.mojang.com/browse/MC-266135) Cached macro commands ignore permission level, allowing limited permission escalation
-   [MC-266136](https://bugs.mojang.com/browse/MC-266136) Macro commands ignore function-permisson-level server setting, including when lower than default
-   [MC-266144](https://bugs.mojang.com/browse/MC-266144) Copper Doors are not part of the #doors item tag
-   [MC-266145](https://bugs.mojang.com/browse/MC-266145) Copper Trapdoors are not part of the #trapdoors item tag
-   [MC-266308](https://bugs.mojang.com/browse/MC-266308) Copper Bulbs have unused "turn;;_;;off" sound
-   [MC-266334](https://bugs.mojang.com/browse/MC-266334) Shulker bullets destroy armor stands
-   [MC-266389](https://bugs.mojang.com/browse/MC-266389) Glow berry particles are barely visible when bonemealed
-   [MC-266430](https://bugs.mojang.com/browse/MC-266430) Breeze on top of a non-full block produces particles of the block below it
-   [MC-266432](https://bugs.mojang.com/browse/MC-266432) Exposed, weathered and oxidised copper bulbs are unwaxed in trial chambers
-   [MC-266469](https://bugs.mojang.com/browse/MC-266469) When attacked, breezes sometimes stop pathfinding, jumping, or firing wind charges
-   [MC-266524](https://bugs.mojang.com/browse/MC-266524) Breezes sometimes get the zoomies after jumping
-   [MC-266533](https://bugs.mojang.com/browse/MC-266533) Breeze's AI has serious flaws in open terrain
-   [MC-266589](https://bugs.mojang.com/browse/MC-266589) Armor durability is changed when swapping on creative
-   [MC-266628](https://bugs.mojang.com/browse/MC-266628) High polling rate causing stuttering
-   [MC-266680](https://bugs.mojang.com/browse/MC-266680) The glowing outline isn't applied to the eyes or eyebrows of breezes
-   [MC-266685](https://bugs.mojang.com/browse/MC-266685) The entity shadows of breezes are too large in relation to the size of their models
-   [MC-266688](https://bugs.mojang.com/browse/MC-266688) Breeze model's glowing eyes are not resource pack-friendly
-   [MC-266738](https://bugs.mojang.com/browse/MC-266738) Subtitles string "subtitles.block.trial;;_;;spawner.spawn;;_;;mob" is misleading and inconsistent
-   [MC-266879](https://bugs.mojang.com/browse/MC-266879) Clouds, entity hitboxes, block outlines, specially rendered blocks, and enchantment glints, render through the insides of breezes' eyes and eyebrows
-   [MC-266960](https://bugs.mojang.com/browse/MC-266960) Bossbar text renders in front of player list background and player icons
-   [MC-266990](https://bugs.mojang.com/browse/MC-266990) Maps with the same 'map' tag value, but different 'display' tag data can cause markers to disappear
-   [MC-266999](https://bugs.mojang.com/browse/MC-266999) Crafter's tooltip buttons can still be visible to players on spectator mode
-   [MC-267193](https://bugs.mojang.com/browse/MC-267193) A function with /return fail run in chat doesn't indicate failure
-   [MC-267194](https://bugs.mojang.com/browse/MC-267194) /return run function in combination with a fork and a function that doesn't return has inconsistent behavior

---

