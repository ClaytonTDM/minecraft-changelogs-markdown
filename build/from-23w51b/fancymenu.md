# Minecraft Snapshot 23w51b

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
-   [MC-266289](https://bugs.mojang.com/browse/MC-266289) Could not save data raids.dat and random;;_;;sequences.dat

---

