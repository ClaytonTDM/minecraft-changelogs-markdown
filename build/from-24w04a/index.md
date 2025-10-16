# Minecraft Snapshot 24w04a

Hello again! Here is another snapshot bringing you some Armadillo changes, experimental feature changes, and a bunch of technical changes. We have some server-side performance improvements and improved debug tools along with a new `transfer` command. Enjoy!

## Changes

-   Armadillo now also rolls up when it detects a mob, or a player that has attacked it recently
-   When an Armadillo is in rolled up state, its shell will protect it, and reduce the damage dealt to it, even allowing it to fully resist weak attacks
-   Renamed "Allow cheats" to "Allow commands"

## Technical Changes

-   The Data Pack version is now 29
-   Added an option to use a faster region file compression algorithm on dedicated servers
-   Introduced changes to optimizing worlds
-   Improved server TPS debug chart
-   Reduced time needed to generate explorer maps to buried treasures

### Region file compression algorithm

-   Added a dedicated server configuration property `region-file-compression` with 2 possible values:
    -   `deflate`, the default option. Uses the old algorithm
    -   `lz4` uses LZ4 algorithm, which requires less CPU time to compress and decompress but uses more disk space
-   Changing the compression algorithm will not automatically recompress the world
    -   New or updated chunks will use the newly configured algorithm, but the old ones will stay in the previous format

### World optimizing changes

-   Optimizing singleplayer worlds and running dedicated server with `forceUpgrade` now also upgrades contents of `entities` and `poi` directories of the world
-   New `recreateRegionFiles` dedicated server startup parameter
    -   It will trigger world optimization similar to `forceUpgrade`, but will also rewrite all the chunks independently of whether they have been upgraded
    -   This will create fresh and defragmented region files
    -   Using this parameter after changing the `region-file-compression` server property will recompress all region files in the new format

### Improved the server TPS debug chart

-   As before, it is accessible by pressing `F3 + 2` in a Singleplayer world
-   The bottom dark red section of the chart displays the time spent during the main logic of the server tick. It is equivalent to the value diplayed in the old chart
-   The light brown section displays time spent on running scheduled tasks
-   The purple section displays time spent executing all other code during the tick
-   The top light green (or yellow or red depending on lag) section displays time spent idling, waiting for next tick
-   The `min`, `avg`, `max` aggregate values are based on the sum of the first 3 sections

## Data Pack Version 29

-   Added the `transfer` command

### `transfer` Command

New command that triggers a transfer of a player to another server. Only exists on dedicated servers.

Syntax:

`transfer <hostname> [<port>] [<players>]`

Parameters:

-   `hostname`: String describing the hostname of the server to connect to
-   `port`: Integer denoting the port number of the server to connect to - if omitted, 25565 is used
-   `players`: The players to transfer - if omitted, `@s` is used

## Experimental Features

### Breeze

-   Breeze is now aggressive toward Iron Golems in addition to players
-   Breeze no longer retaliates against attacks from the following mobs: Skeletons, Strays, Zombies, Husks, Spiders, Cave Spiders, Slimes
-   The above mobs will not retaliate when hurt by the Breeze's Wind Charge Projectile

### Copper Grates

-   Stonecutting Copper Blocks into Copper Grates outputs 4 Copper Grates

## Fixed bugs in Snapshot 24w04a

-   [MC-232489](https://bugs.mojang.com/browse/MC-232489) Retrieving a plant from a flower pot ignores inventory contents
-   [MC-266449](https://bugs.mojang.com/browse/MC-266449) Breeze doesn't attack or retaliate against mob on sight
-   [MC-266707](https://bugs.mojang.com/browse/MC-266707) Trial spawners ignore custom\_spawn\_rules
-   [MC-267925](https://bugs.mojang.com/browse/MC-267925) Retrieving an item from a flower pot while holding something causes the item to end up in your off hand
-   [MC-267937](https://bugs.mojang.com/browse/MC-267937) Shooting a breeze with a piercing crossbow makes the game crash
-   [MC-267938](https://bugs.mojang.com/browse/MC-267938) The world loading percentage value can get covered by the spawn chunk loading animation when the "spawnChunkRadius" gamerule is set to large values
-   [MC-267941](https://bugs.mojang.com/browse/MC-267941) The end portal kills mobs at spawnChunkRadius 0
-   [MC-267953](https://bugs.mojang.com/browse/MC-267953) No element is focused when opening the realms world backups menu using keyboard navigation

---

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
-   [MC-267383](https://bugs.mojang.com/browse/MC-267383) Can't place water and lava with extended attribute "block\_interaction\_range"
-   [MC-267384](https://bugs.mojang.com/browse/MC-267384) Unused duplicate wolf armor sound events
-   [MC-267385](https://bugs.mojang.com/browse/MC-267385) Attribute entity\_interaction\_range is capped by block\_interaction\_range
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
-   [MC-267420](https://bugs.mojang.com/browse/MC-267420) Boat placement ignores custom "block\_interaction\_range" attribute
-   [MC-267422](https://bugs.mojang.com/browse/MC-267422) Attribute entity\_interaction\_range is classified as 'generic', but has no effect on mobs
-   [MC-267427](https://bugs.mojang.com/browse/MC-267427) Rendering offset of sleeping entities does not account for scale attribute
-   [MC-267428](https://bugs.mojang.com/browse/MC-267428) Phantom wing particles do not account for scale attribute
-   [MC-267434](https://bugs.mojang.com/browse/MC-267434) Upside-down mobs with big scale attribute are displayed above hitbox
-   [MC-267435](https://bugs.mojang.com/browse/MC-267435) Baby armadillos do not follow parents consistently or closely
-   [MC-267454](https://bugs.mojang.com/browse/MC-267454) Baby striders are visually the same size as normal striders
-   [MC-267456](https://bugs.mojang.com/browse/MC-267456) Changes to item\_used\_on\_block advancement criteria breaks previous functionality
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
-   [MC-184622](https://bugs.mojang.com/browse/MC-184622) Sound for exiting a portal/travelling to another dimension does not use its subtitle string despite it existing in en\_us.json
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
-   [MC-265541](https://bugs.mojang.com/browse/MC-265541) player.dat\_old won't be read even if player.dat doesn't exist
-   [MC-265669](https://bugs.mojang.com/browse/MC-265669) Hotbar text renders above subtitle background but under subtitle text
-   [MC-265835](https://bugs.mojang.com/browse/MC-265835) The freezing effect is rendered totally opaque when using a spyglass
-   [MC-266055](https://bugs.mojang.com/browse/MC-266055) Opening or closing a copper door or trapdoor while holding an axe / honeycomb grants wax-related advancement
-   [MC-266135](https://bugs.mojang.com/browse/MC-266135) Cached macro commands ignore permission level, allowing limited permission escalation
-   [MC-266136](https://bugs.mojang.com/browse/MC-266136) Macro commands ignore function-permisson-level server setting, including when lower than default
-   [MC-266144](https://bugs.mojang.com/browse/MC-266144) Copper Doors are not part of the #doors item tag
-   [MC-266145](https://bugs.mojang.com/browse/MC-266145) Copper Trapdoors are not part of the #trapdoors item tag
-   [MC-266308](https://bugs.mojang.com/browse/MC-266308) Copper Bulbs have unused "turn\_off" sound
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
-   [MC-266738](https://bugs.mojang.com/browse/MC-266738) Subtitles string "subtitles.block.trial\_spawner.spawn\_mob" is misleading and inconsistent
-   [MC-266879](https://bugs.mojang.com/browse/MC-266879) Clouds, entity hitboxes, block outlines, specially rendered blocks, and enchantment glints, render through the insides of breezes' eyes and eyebrows
-   [MC-266960](https://bugs.mojang.com/browse/MC-266960) Bossbar text renders in front of player list background and player icons
-   [MC-266990](https://bugs.mojang.com/browse/MC-266990) Maps with the same 'map' tag value, but different 'display' tag data can cause markers to disappear
-   [MC-266999](https://bugs.mojang.com/browse/MC-266999) Crafter's tooltip buttons can still be visible to players on spectator mode
-   [MC-267193](https://bugs.mojang.com/browse/MC-267193) A function with /return fail run in chat doesn't indicate failure
-   [MC-267194](https://bugs.mojang.com/browse/MC-267194) /return run function in combination with a fork and a function that doesn't return has inconsistent behavior

---

This snapshot brings about a few redstone-focused changes. Notably, we’re tweaking the tick delay behavior of the crafter and the copper bulb while they’re still in experimental development.

With these changes, we aim to make the crafter more consistent with other blocks that drop or eject items, and the copper bulb with other blocks that react or change state when a connected redstone signal changes. As a result of this, some contraptions built during the last few snapshots may no longer work properly.

We're really excited about the tinkering opportunities both these new redstone blocks bring to the world. Please keep sending all your thoughts about them to Minecraft Feedback so we can keep building Minecraft together!

Enjoy!

## Changes

-   Updated Crafter textures

## Technical Changes

-   The Data Pack version is now 25

## Data Pack Version 25

-   Added individual display names for scoreboard entries

### Commands

#### `scoreboard`

##### Display names

-   Each entry in a scoreboard can now have a custom display name
-   Those values are kept separate per objective and score holder
-   If the name is not present, the score holder name is used (i.e. the old behavior)
-   If the score is reset or the whole objective is removed, the name is not preserved
-   Team decorations will still be applied to names as normal
-   Subcommands for managing names:
    -   `scoreboard players display name <targets> <objective> <text component>` - set display name
    -   `scoreboard players display name <targets> <objective>` - clear display name

##### Display name auto-update

-   To make display name management easier, objectives can also be configured to auto-update display names on every score update
-   This option is disabled by default
-   If a score holder has no display name (because it can't be attributed to any currently loaded entity), the current name is preserved
-   Command to control auto-update for objective:
    -   `scoreboard objectives modify <scoreboard> displayautoupdate [true|false]`

##### Number formatting

-   Scores in numeric form can now be formatted
-   Formats can be set for both objectives and individual scores
-   Scores with set formats will render the same in all context (sidebar, under player name, etc.)
-   Subcommands for managing formats:
    -   `scoreboard objectives modify <objective> numberformat <format>` - for setting default format for an objective
    -   `scoreboard objectives modify <objective> numberformat` - for clearing default format for an objective
    -   `scoreboard players display numberformat <targets> <score> <format>` - for setting format for a specific score holder
    -   `scoreboard players display numberformat <targets> <score>` - for clearing format for a specific score holder

Formats:

-   `styled <style>` - score will be displayed with selected style (like `{"bold":true}`)
-   `fixed <text component>` - score will be replaced with text
-   `blank` - score will not be displayed

## Fixed bugs in Snapshot 23w46a

-   [MC-259321](https://bugs.mojang.com/browse/MC-259321) Spawner counts related entities against MaxNearbyEntities
-   [MC-265662](https://bugs.mojang.com/browse/MC-265662) "Cannot kick server owner in LAN game" message when trying to kick yourself from non-LAN singleplayer world
-   [MC-265873](https://bugs.mojang.com/browse/MC-265873) Narrator Hotkey description mentions the wrong modifier key on macOS
-   [MC-265910](https://bugs.mojang.com/browse/MC-265910) Crafter block has a one game tick cooldown
-   [MC-265950](https://bugs.mojang.com/browse/MC-265950) Crafters will stack items when outputting into chiseled bookshelf
-   [MC-266076](https://bugs.mojang.com/browse/MC-266076) Copper Grates can't be waterlogged
-   [MC-266099](https://bugs.mojang.com/browse/MC-266099) Spectating an entity that takes damage makes the camera shake
-   [MC-266120](https://bugs.mojang.com/browse/MC-266120) Some advancements for 1.21 block recipes are in the regular datapack
-   [MC-266148](https://bugs.mojang.com/browse/MC-266148) Some Crafting recipes for the new copper blocks appear when Experiment is disabled
-   [MC-266190](https://bugs.mojang.com/browse/MC-266190) Tuff blockset color palette is inconsistent with itself
-   [MC-266437](https://bugs.mojang.com/browse/MC-266437) Wind charge subtitles are improperly capitalized
-   [MC-266445](https://bugs.mojang.com/browse/MC-266445) Breeze mob doesn't count to Monster Hunter
-   [MC-266455](https://bugs.mojang.com/browse/MC-266455) Breeze spawn eggs are in the incorrect place in the creative inventory
-   [MC-266459](https://bugs.mojang.com/browse/MC-266459) The hitboxes and models of wind charges are misaligned
-   [MC-266538](https://bugs.mojang.com/browse/MC-266538) Trial spawners can be replaced by lava pools and other features
-   [MC-266622](https://bugs.mojang.com/browse/MC-266622) Wind Charges can't switch levers off

---

We're happy to share another snapshot, this time offering an early look at some exciting new adventures waiting for you underground in the form of Trial Chambers!

Trial Chambers are designed to be challenging moments of combat and exploration hidden medium-deep below the surface of the Overworld. Trial Chambers bring new decorative and lighting blocks, new Trial Spawners to deliver a different style of multi-mob fights, and the bushy-browed Breeze, a new mob specific to Trial Chambers which will add quite a bit of chaos to your combats.

Happy Mining!

## Changes

-   Monster Spawner now renders their inner faces when looking inside

## Technical Changes

-   The Data Pack version is now 24
-   The Resource Pack version is now 21

## Data Pack Version 24

-   Added experimental Breeze mob
-   Added experimental Trial Spawner block
-   Increased maximum value of Jigsaw structure variable `size` from 7 to 20
-   Added `trial_chambers_copper_bulb_degradation` structure processor list

## Resource Pack Version 21

-   `uniform` font has been updated to use Unifont 15.1.04 (from 15.0.06)
-   The only supported texture format is now .png

### Breeze Mob

-   Added entity models and textures for experimental Breeze mob:
    -   `breeze`, `wind_charge`
-   Added shader:
    -   `breeze_wind`

## Experimental Features

### Added Breeze mob

-   The Breeze is a cunning, hostile mob that can spawn via Trial Spawner in some rooms within the Trial Chambers
-   The Breeze moves primarily by leaping around the target, sometimes jumping quite long distances
-   An aggressive adversary, the Breeze shoots volatile wind energy in the form of wind charge projectiles at its target
-   Wind charges deal a small amount of damage when colliding directly with an entity
-   After colliding with an entity or a block, wind charge projectiles produce a wind burst, which knocks back entities in the area by several blocks
-   Wind bursts also have the effect of 'activating' certain blocks:
    -   Non-Iron Doors and Trapdoors are flipped
    -   Fence Gates are flipped
    -   Buttons are pressed
    -   Levers are flipped
    -   Bells are rung and swung
    -   Lit Candles (both standalone and on cake) are extinguished
-   Wind bursts do not have any effect on Iron Doors, Iron Trapdoors, or any block being held in its position by a Redstone signal

### Trial Spawner

-   Trial Spawner is a new variant of Monster Spawners that ejects rewards upon completion and can have variable levels of challenge in multiplayer
-   The challenge level will increase for each new player a Trial Spawner notices nearby
    -   Challenge level will not decrease until it is reset during a Trial Spawner's cooldown
-   Unlike normal spawners, a Trial Spawner will spawn a limited number of mobs proportional to its current challenge level
    -   It can only spawn a mob at positions that are within line of sight
    -   It can spawn a mob regardless of any light level requirement the mob has
    -   Spawned mobs are persistent
-   Once all mobs are defeated, the Trial Spawner will eject a set of rewards proportional to the current challenge level
    -   After the rewards have been ejected, the Trial Spawner goes into cooldown for 30 minutes during which it will no longer spawn mobs
-   Trial Spawners cannot be crafted nor obtained by players in Survival - instead, they can be found naturally placed throughout Trial Chambers
-   Trial Spawners are extremely slow to mine and resistant to explosions, and will not drop even with Silk Touch
-   When placed in Creative, Trial Spawners have no mob type set by default
    -   The mob type can be set by interacting with it while holding a Spawn Egg
-   Creative and Spectator players cannot be detected or noticed by Trial Spawners

### Trial Chambers

-   Trial Chambers are a new structure in the Overworld where players can explore and take on combat challenges during the mid-game
    -   Trial Chambers are made out of a variety of Copper and Tuff blocks and can be found in different sizes from large to small
    -   Trial Chambers are a relatively common find throughout the Deepslate layer of the underground
-   The layout of each Trial Chamber is procedurally generated, and can include traps, reward chests and a variety of combat spaces
    -   Supply chests can be found between different rooms, and give you blocks and items which help you navigate your trials
    -   Reward chests are guarded by challenges in each room, and can be a source of many high level enchanted books and equipment
    -   The loot found in reward chests are still being iterated, and are absolutely not final
-   Each Trial Chamber will include Trial Spawners with a melee, small melee, or ranged category:
    -   Melee
        -   Zombie
        -   Husk
        -   Slime
    -   Small Melee
        -   Spider
        -   Cave Spider
        -   Baby Zombie
        -   Silverfish
    -   Ranged
        -   Skeleton
        -   Stray
        -   Skeleton with Poison Tipped Arrows
-   Each Trial Spawner category will only use one mob for the entire structure when generated, and these mobs are randomized for each Trial Chamber
    -   For example, one Trial Chamber might only spawn Zombies, Cave Spiders and Strays, while another might only spawn Slimes, Silverfish and Skeletons
    -   The exceptions to this are some Trial Spawners in unique rooms which always spawn Breezes

#### Known issues

-   The corridors sometimes end with a dead end
-   Aquifers, Lush Caves, and Sculk Veins sometimes intersect with the Trial Chamber

### Trial Key

-   An item that can only be obtained from Trial Spawners
-   Trial Keys do not currently have any functionality

## Fixed bugs in Snapshot 23w45a

-   [MC-131646](https://bugs.mojang.com/browse/MC-131646) Drowned spawners only work in biomes where drowned spawn
-   [MC-177446](https://bugs.mojang.com/browse/MC-177446) "RootVehicle" tag in playerdata entry is not upgraded
-   [MC-186797](https://bugs.mojang.com/browse/MC-186797) Functioning clock and compasses in crafting output slot
-   [MC-255244](https://bugs.mojang.com/browse/MC-255244) NBT link/reference when using /fill
-   [MC-265702](https://bugs.mojang.com/browse/MC-265702) Text components in commands accept malformed JSON
-   [MC-265747](https://bugs.mojang.com/browse/MC-265747) Punching a TNT Minecart in creative mode drops the minecart
-   [MC-265875](https://bugs.mojang.com/browse/MC-265875) Compasses, Clocks and Recovery Compasses work normally within the output slot of the crafter
-   [MC-266054](https://bugs.mojang.com/browse/MC-266054) Side Water texture on Copper bulbs
-   [MC-266056](https://bugs.mojang.com/browse/MC-266056) Mobs suffocate inside most copper grate block variants
-   [MC-266063](https://bugs.mojang.com/browse/MC-266063) Copper Doors and Trapdoors make generic metal sounds when placing
-   [MC-266090](https://bugs.mojang.com/browse/MC-266090) Light can pass through copper bulbs
-   [MC-266091](https://bugs.mojang.com/browse/MC-266091) Copper Bulbs do not cull faces correctly
-   [MC-266096](https://bugs.mojang.com/browse/MC-266096) Mobs can spawn on oxidized or waxed copper grates
-   [MC-266248](https://bugs.mojang.com/browse/MC-266248) No error message when granting/revoking an advancement that is already granted/revoked
-   [MC-266256](https://bugs.mojang.com/browse/MC-266256) Accessibility button in the Welcome screen still needs its own string
-   [MC-266287](https://bugs.mojang.com/browse/MC-266287) Can't load .dat and .nbt files (server list & saved hotbar)
-   [MC-266289](https://bugs.mojang.com/browse/MC-266289) Could not save data raids.dat and random\_sequences.dat

---

In this week's Snapshot we're taking a break from new features to improve ones we've already added, including fixes to Commands and the ability to use Loot Tables with Decorated Pots.

## Changes

-   Copper Doors & Copper Trapdoors has updated textures

## Technical Changes

-   The Data Pack version is now 23

## Data Pack Version 23

-   Decorated Pots can now utilize loot tables and will read from the `LootTable` tag key
-   Additional changes to command functions

### Commands

#### `tick`

-   The `<time>` parameter in the `tick step` command is now optional. The default value is 1

#### `return`

-   `return run` will now always return
    -   If there are no valid results from returned command, function containing `return run` will fail (i.e. `success=0` and `result=0`)
-   `return run` will now propagate success value together with results value (previously it always set success to `1`)
-   `return run` now also allows storing values - that means `execute store ... run return run some_command` will both store value and return it outside function
-   New subcommand `return fail` is added to make whole function fail (i.e. return `success=0` and `result=0`)

#### `function`

-   If `function <function tag>` runs multiple functions in combination with `return run`, execution will stop after first `return` in any of the functions
-   A single call to the `function` command will always have return when run with `return run`
    -   For example, `return run execute [split context] run function <some function with conditional return>` will always return after processing the first context

#### `execute if|unless function`

-   `execute if|unless function` will no longer always fail if all functions had no return
    -   If there were no `returns` in called functions, `if` will fail and `unless` will pass
    -   First `return` in any of called functions will return (for a single context)

## Fixed bugs in Snapshot 23w44a

-   [MC-219293](https://bugs.mojang.com/browse/MC-219293) When teleporting via Chorus Fruit, the burping and teleporting sounds play at the wrong location
-   [MC-265805](https://bugs.mojang.com/browse/MC-265805) Executing a tail-recursive function consumes memory resources linearly with recursion depth
-   [MC-266052](https://bugs.mojang.com/browse/MC-266052) Subtitles for turning copper bulb on or off display raw translation string
-   [MC-266053](https://bugs.mojang.com/browse/MC-266053) Subtitles for opening or closing a copper trapdoor display raw translation string
-   [MC-266064](https://bugs.mojang.com/browse/MC-266064) Footsteps on Polished Tuff create missing subtitle
-   [MC-266084](https://bugs.mojang.com/browse/MC-266084) Top of copper doors include an open part of the window
-   [MC-266086](https://bugs.mojang.com/browse/MC-266086) Tuff bricks do not properly align with other bricks
-   [MC-266105](https://bugs.mojang.com/browse/MC-266105) Bat head upside down when spawned while ticks are frozen
-   [MC-266112](https://bugs.mojang.com/browse/MC-266112) New Bat's ears are lower than the official render and Bedrock's
-   [MC-266117](https://bugs.mojang.com/browse/MC-266117) Chiseled copper cannot be stonecut from cut copper blocks
-   [MC-266147](https://bugs.mojang.com/browse/MC-266147) Copper Door item texture is inconsistent with the block
-   [MC-266197](https://bugs.mojang.com/browse/MC-266197) The "Transfer Now" button in the realms menu cannot be selected via keyboard navigation
-   [MC-266215](https://bugs.mojang.com/browse/MC-266215) The pivot point of the head of the new bats is different from that of Bedrock's

---

We're now releasing a second snapshot for the week to fix some crashes.

## Bug Fixes

-   Fixed a crash on server startup
-   Fixed a crash when leaving the "Configure Realm" screen

---

In this week's snapshot we're extending the Update 1.21 experiment with ALL the new blocks! And how about a bat makeover just in time for spooky fall? Happy crafting!

## Experimental Features

### Copper Family

-   The Copper family of blocks has been expanded, including:
    -   Chiseled Copper
    -   Copper Grate
    -   Copper Bulb
    -   Copper Door
    -   Copper Trapdoor
    -   Oxidized and waxed variants of all of the above

#### Chiseled Copper

-   Crafted with 2 Cut Copper Slabs of a shared oxidation level
-   Can be crafted in the Stonecutter

#### Copper Grate

-   A new type of decorative block unique to the Copper family
-   Crafted with 4 Copper Blocks of a shared oxidation level
    -   Can be crafted in the Stonecutter
-   Properties:
    -   Transparent and allows light to pass through
    -   Mobs cannot suffocate inside them
    -   Cannot conduct redstone
    -   Hostile mobs cannot naturally spawn on them

#### Copper Bulb

-   A light-emitting block that can toggle its light emission through redstone pulses
-   Oxidizes like other Copper blocks, and emits less light the more oxidized they are
    -   Copper Bulb: Light level 15
    -   Exposed Copper Bulb: Light level 12
    -   Weathered Copper Bulb: Light level 8
    -   Oxidized Copper Bulb: Light level 4
-   When placed, its light is off by default
    -   While the Copper Bulb is unpowered, it will toggle its light on or off when it receives a redstone pulse
    -   Copper Bulb light will stay on even when the redstone source is removed until it receives another redstone pulse to toggle it off
-   A redstone crystal will glow in the center of Copper Bulbs while it is powered by a redstone signal
-   Comparators will read a signal strength of 15 if the Copper Bulb's light is on
-   Does not conduct redstone power
-   Can craft 4 Copper Bulbs with:
    -   3 Copper Blocks of a shared oxidation level
    -   1 Blaze Rod
    -   1 Redstone Dust

#### Copper Doors and Trapdoors

-   Copper variants of Doors and Trapdoors that can oxidize over time and be waxed
-   Works like wooden doors in that they can be opened and closed with interaction as well as redstone
-   Crafted with Copper Blocks of a shared oxidation level

### Tuff Family

-   Tuff has been expanded to have its own family of blocks, including:
    -   Stair, Slab, Wall and Chiseled variants
    -   Tuff Bricks with Stair, Slab, Wall and Chiseled variants
    -   Polished Tuff with Stair, Slab and Wall variants
-   All Tuff variants can be crafted in the Stonecutter

## Changes

-   The Bat now has a new look
-   Thrown Ender Pearls produce a teleportation sound on impact
-   Small tweaks to the Telemetry Data Collection screen

### Bat

-   The Bat has an updated model, animations and texture

## Technical Changes

-   The Data Pack version is now 22
-   The Resource Pack version is now 20

## Data Pack Version 22

-   Added `tick` command
-   Added two new input fields for Selection Priority and Placement Priority in the Jigsaw block edit screen
-   Added `item` to `minecraft:arrow` and `minecraft:spectral_arrow`, this is the item that will be picked up
-   Renamed `Trident` to `item` in `minecraft:trident`

### `tick` command

Added a new `tick` command. This is an adminstative and debugging command that allows to control the ticking flow and measure the performance of the game. The command requires elevated permissions (admins and above) and so it is not by default available in command blocks and datapacks.

Syntax:

`tick query` - outputs the current target ticking rate, with information about the tick times performance.

`tick rate <rate>` - sets a custom target ticking rate to the specified value. The value must be greater than 1.0 and lower than 10000.0. Setting a very low tick rate can cause the game to feel unresponsive and setting too high tick rate for your system can cause the game to crash as the game now assumes, it is constantly falling behind the ticking target. Please use `tick query` or `<F3> + 2` (Integrated server only) debug screen to measure the performance of the game and adjust the tick rate accordingly. Setting a tick target lower than the default `20.0` will also cause the players to be simulated at a lower rate (including player movement and input controls), while setting a higher tick rate will cause the players to be simulated at the default rate of `20` ticks per second to maintain the expected responsiveness of the game, but can cause artifacts in entities interpolation.

`tick freeze` - freezes all gameplay elements, except for players and any entity a player is riding. This is useful for debugging and isolating issues with the game allowing the player to move around freely and inspect the world.

`tick step <time>` - Only works when the game is frozen. It runs the game for the specified number of ticks and then freezes the game again. This allows to step through the game a set amount of ticks at a time.

`tick step stop` - stops the current stepping process, and re-freezes the game.

`tick unfreeze` - unfreezes the game and resumes all gameplay elements.

`tick sprint <time>` - runs the game while ignoring the set ticking target rate (meaning that the game will run as fast as possible) for the specified number of ticks. At the end of the sprint, the game will resume the previous ticking target and display performance information about the tick times while sprinting. This is especially useful for testing gameplay elements that are time dependent, such as redstone contraptions, or mob behaviour in isolated environments that allow for much faster simulation.

`tick sprint stop` - stops the current tick sprint, and resumes the previous ticking target.

### Jigsaw Selection & Placement Priority

-   Selection Priority
    -   When the parent piece is being processed for connections, this controls the order in which this Jigsaw block attempts to connect to its target piece
    -   Jigsaws will be processed in descending priority order and randomly within the same priority
-   Placement Priority
    -   When this Jigsaw block connects to a piece, this is the order in which that piece is processed for connections in the wider structure
    -   Pieces will be processed in descending priority order with the default insertion order breaking ties within the same priority
-   This functionality has been added to support the ability for Jigsaw structures to generate branches in a depth-first order, as well as give finer control over ordering of connections
-   All existing Jigsaw blocks will default their Selection and Placement Priority to 0, resulting in the same behaviour as before these two configurable values were introduced

## Resource Pack Version 20

-   `bat.png` has been updated for the new Bat model
-   Added block models, items models and block state definitions for the following blocks:
    -   `chiseled_copper`, `exposed_chiseled_copper`, `weathered_chiseled_copper`, `oxidized_chiseled_copper`
    -   `copper_grate`, `expxosed_copper_grate`, `weathered_copper_grate`, `oxidized_copper_grate`
    -   `copper_bulb`, `exposed_copper_bulb`, `weathered_copper_bulb`, `oxidized_copper_bulb`
    -   `copper_door`, `exposed_copper_door`, `weathered_copper_door`, `oxidized_copper_door`
    -   `copper_trapdoor`, `exposed_copper_trapdoor`, `weathered_copper_trapdoor`, `oxidized_copper_trapdoor`
    -   `tuff_stairs`
    -   `tuff_slab`
    -   `tuff_wall`
    -   `chiseled_tuff`
    -   `polished_tuff`
    -   `polished_tuff_stairs`
    -   `polished_tuff_slab`
    -   `polished_tuff_wall`
    -   `tuff_bricks`
    -   `tuff_brick_stairs`
    -   `tuff_brick_slab`
    -   `tuff_brick_wall`
    -   `chiseled_tuff_bricks`
-   Added unique sprites for the following blocks:
    -   `chiseled_copper`, `exposed_chiseled_copper`, `weathered_chiseled_copper`, `oxidized_chiseled_copper`
    -   `copper_grate`, `expxosed_copper_grate`, `weathered_copper_grate`, `oxidized_copper_grate`
    -   `copper_bulb`, `exposed_copper_bulb`, `weathered_copper_bulb`, `oxidized_copper_bulb`
    -   `copper_door`, `exposed_copper_door`, `weathered_copper_door`, `oxidized_copper_door`
    -   `copper_trapdoor`, `exposed_copper_trapdoor`, `weathered_copper_trapdoor`, `oxidized_copper_trapdoor`
    -   `chiseled_tuff`
    -   `polished_tuff`
    -   `tuff_bricks`
    -   `chiseled_tuff_bricks`

## Fixed bugs in Snapshot 23w43a

-   [MC-1981](https://bugs.mojang.com/browse/MC-1981) All arrow types lose their name/NBT data when shot and picked up
-   [MC-257786](https://bugs.mojang.com/browse/MC-257786) The game takes a long time to process players leaving realms groups or accepting or declining realms invitations
-   [MC-263263](https://bugs.mojang.com/browse/MC-263263) The operator buttons intersect the scroll bar within the realms player menu
-   [MC-263272](https://bugs.mojang.com/browse/MC-263272) You cannot click on an area to set a value within the spawn protection slider in the realms world options menu
-   [MC-263309](https://bugs.mojang.com/browse/MC-263309) You can configure your realm before it has been created by using the TAB key
-   [MC-265872](https://bugs.mojang.com/browse/MC-265872) The word "available" is misspelled as "availible" within the "recover\_world.no\_fallback" string
-   [MC-265874](https://bugs.mojang.com/browse/MC-265874) Right-clicking and keyboard input can disable or enable slots in the crafter
-   [MC-265880](https://bugs.mojang.com/browse/MC-265880) The subtitle for Crafters crafting something uses inconsistent tense
-   [MC-265884](https://bugs.mojang.com/browse/MC-265884) The word "occurred" is misspelled as "occured" within the "recover\_world.message" string
-   [MC-265885](https://bugs.mojang.com/browse/MC-265885) Extra space in the word "cannot" in selectWorld.incompatible.description
-   [MC-265886](https://bugs.mojang.com/browse/MC-265886) The built-in update\_1\_21 pack contains duplicate files from the vanilla pack
-   [MC-265891](https://bugs.mojang.com/browse/MC-265891) Placing items into the crafter output slot deletes them
-   [MC-265896](https://bugs.mojang.com/browse/MC-265896) Additional lines appear on the crafter's face when it crafts
-   [MC-265899](https://bugs.mojang.com/browse/MC-265899) The translation for "gamerule.commandModificationBlockLimit" is in title case instead of sentence case
-   [MC-265901](https://bugs.mojang.com/browse/MC-265901) Comparator sometimes doesn't update when crafting with the Crafter
-   [MC-265938](https://bugs.mojang.com/browse/MC-265938) Elements within the list in the "Changes From Last Backup" realms menu cannot be selected via the mouse cursor
-   [MC-265939](https://bugs.mojang.com/browse/MC-265939) The "No pending invites!" text within the realms invitation menu cannot be narrated or selected
-   [MC-265961](https://bugs.mojang.com/browse/MC-265961) Inconsistent pixels near light on the crafter's side

---

Hey! Today we bring you the first of the features we've shown you during Minecraft Live last weekend: the Crafter!

## Experimental Features

### Crafter

-   The Crafter is a new block that enables the crafting of items and blocks via Redstone
-   The Crafter will eject one crafted item at a time when powered by a new Redstone signal / pulse (not a continuous signal)
-   Upon receiving this new signal, the Crafter will eject the recipe result from the front face
-   If the output result has multiple type of items all the result items will be ejected together
-   The Crafter can be oriented in any direction when placed

#### Crafter UI

-   The Crafter has a 3x3 interactable crafting grid
-   The Crafter’s crafting grid slots are toggleable, meaning that the player can change the behavior of a slot by clicking or pressing on a slot with an empty hand
-   A slot that is ‘toggled’ cannot hold any items, and therefore cannot have items placed into it by other blocks, such as Hoppers and Droppers
-   Unlike the Crafting Table, the Crafter displays a preview of the crafted item which will be crafted and ejected on the next Redstone pulse but cannot be manually taken out by the player
-   The Crafter UI is shared between all players interacting with the Crafter, meaning that multiple players can interact with the Crafter at the same time, similar to Chests and Hoppers

#### Crafter interaction with other blocks

-   The Comparator signal strength is 0-9, where each non-empty or toggled slot adds 1 strength
-   Hoppers can be used to both insert and pull out items from the Crafter
-   Droppers can be used to insert items into the Crafter
-   Moving items in from another block (ex: Hopper, Dropper) prioritizes filling items into slots following these rules:
    -   Prioritize the first empty slot (from left-to-right, top-to-bottom)
    -   If there are no empty slots then prioritize the smallest stack of the same item (pick the first if there are multiple)
    -   If there is a toggled slot it will be skipped. The item will then be moved into the container
    -   If the item cannot be moved, it will be ejected into the world

We want to hear your feedback on the Crafter, so please let us know what you think the over in our dedicated [feedback thread](https://feedback.minecraft.net/hc/en-us/community/posts/20459106029709-Let-s-talk-about-the-Crafter-).

## Changes

-   Added an accessibility option that allows to hide the yellow splash texts in the main menu
-   Added a recovery screen for worlds with missing data (for example, if saving failed due to an unexpected shutdown)

## Technical Changes

-   The Data Pack version is now 21
-   The Resource Pack version is now 19
-   Minor changes to chat component serialization

### Chat components

#### Serialization

-   The optional `type` field has a new allowed value: `selector`
-   Components of type `nbt` now have `source` field with allowed values `entity`, `block`, `storage`

## Data Pack Version 21

-   Introduced Jigsaw structure pool aliases, which can be used to rewire pool selection
-   Added field `block_state` to `tnt` entity to allow replacement of rendered block model
-   Renamed field `Fuse` to `fuse` on `tnt` entity
-   Added `playersNetherPortalDefaultDelay` and `playersNetherPortalCreativeDelay` gamerules to control time (in ticks) that a player needs to stand in a Nether portal before changing dimensions
-   Added new gamerule `projectilesCanBreakBlocks` to control whether impact projectiles will destroy blocks that are destructible by them, i.e. Chorus Flowers, Pointed Dripstone and Decorated Pots
-   Added `white_smoke` particle type

### Jigsaw pool aliases

-   Added optional `pool_aliases` list to Jigsaw structures
-   Aliases represent the possibility to rewire Jigsaw pool connections by redirecting pool references on individual structure instances
-   Alias variants are represented in `type` and is one of:
    -   `direct` 1:1 mapping from an alias to a new pool
        -   `alias` pool to replace
        -   `target` pool to replace with
    -   `random` 1:n mapping where a pool from `n` is randomly selected for the structure instance
        -   `alias` pool to replace
        -   `targets` randomized list of candidate pools to replace `alias` with
    -   `random_group`
        -   `groups` each group is a randomized list of above alias types
        -   only one group is selected per structure instance
        -   this enables modelling selections such as "if pool X is replaced with X1, also replace pool Y with Y1"

## Resource Pack Version 19

-   Added block model, item model and block state definitions for `crafter`
-   Added GUI container texture and sprites for `crafter`
-   Added `white_smoke` particle definition

## Fixed bugs in Snapshot 23w34a

-   [MC-189261](https://bugs.mojang.com/browse/MC-189261) Various Realms buttons and texts are incorrectly capitalized
-   [MC-223774](https://bugs.mojang.com/browse/MC-223774) Firework Rockets can't be used to break Chorus Flowers
-   [MC-232719](https://bugs.mojang.com/browse/MC-232719) The scroll bar within the singleplayer menu doesn't reset its position to the top of the list when searching for worlds
-   [MC-234483](https://bugs.mojang.com/browse/MC-234483) Some strange pixels can be seen on the left side of world slot frames within several realms menus
-   [MC-262888](https://bugs.mojang.com/browse/MC-262888) Clicking "I know what I'm doing!" on the world loading screen when loading a world in a new snapshot is way too loud
-   [MC-264966](https://bugs.mojang.com/browse/MC-264966) "Signature is missing from Property textures" appears in the logs of some Minecraft worlds due to player heads
-   [MC-265515](https://bugs.mojang.com/browse/MC-265515) The "You don't seem to have a Realm" element in the realms menu cannot be selected via the mouse cursor
-   [MC-265517](https://bugs.mojang.com/browse/MC-265517) The "Buy a realm!" button is automatically selected when opening the "Add Realm" interface
-   [MC-265551](https://bugs.mojang.com/browse/MC-265551) "No pending invites!" tooltip in Realms is now untranslatable
-   [MC-265744](https://bugs.mojang.com/browse/MC-265744) Kick during login causes client error
-   [MC-265745](https://bugs.mojang.com/browse/MC-265745) You can’t break decorated pots with fireworks launched from crossbow
-   [MC-265751](https://bugs.mojang.com/browse/MC-265751) Decorated pot subtitles are inconsistent
-   [MC-265758](https://bugs.mojang.com/browse/MC-265758) Decorated pots can be destroyed by projectiles in adventure mode
-   [MC-265761](https://bugs.mojang.com/browse/MC-265761) Decorated pots are missing from the creative inventory's redstone blocks tab
-   [MC-265767](https://bugs.mojang.com/browse/MC-265767) Commands don't show error messages in chat
-   [MC-265773](https://bugs.mojang.com/browse/MC-265773) Functions executed as advancement rewards are executed at the top level
-   [MC-265778](https://bugs.mojang.com/browse/MC-265778) "gamerule maxCommandChainLength 0" prevents subsequent command execution in the world
-   [MC-265789](https://bugs.mojang.com/browse/MC-265789) Realms popup strings consist of inconsistent concluding punctuation

---

