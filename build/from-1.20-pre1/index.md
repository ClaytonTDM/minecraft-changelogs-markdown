# Minecraft 1.20 Pre-release 1 

It is now time for the first Pre-release for Minecraft 1.20: The Trails and Tales update!

From now on, you should mostly see bugs being fixed. In addition to that, pre-releases don't follow the regular snapshot cadence of releasing on Wednesdays, so keep an eye out for the next pre-release.

As always, a big thank you to the community for your feedback, bugs reported, and awesome ideas throughout the snapshot series. Let the pre-releases commence!

## Changes

-   Colored Wool, Carpets and Beds can now be dyed to any other color

## Technical Changes

-   Added new damage types: `outside_border` and `generic_kill`
-   Random sequences for loot tables are now deterministic
-   Changes in `server.properties` encoding
-   `string` data sources for the `data` command now accept negative boundaries, which are interpreted as index counted from the end of the string

### Damage Types

-   Players outside the world border are now hurt by the damage type `outside_border` instead of `in_wall`
-   Forcibly removing an entity using i.e. the `/kill` command now uses damage type `generic_kill` instead of `out_of_world`

### Loot Table Random Sequences

The game now uses named random sequences to deterministically produce loot for loot tables. Each random sequence produces a unique sequence based on the world seed and sequence ID, which means a loot table will produce the same results when ran with the same parameters in the same world.

The ID of the random sequence to use for a loot table is specified in a new field called `random_sequence`.

### `server.properties`

-   File is now read in UTF-8 initially, with previous encoding (ISO 8859-1/Latin 1) as a fallback
-   File is now written with UTF-8 encoding

## Fixed bugs in 1.20 Pre-release 1

-   [MC-180](https://bugs.mojang.com/browse/MC-180) When reaching the other side of a nether portal the animation plays forever until stepped out of
-   [MC-2215](https://bugs.mojang.com/browse/MC-2215) Encoding errors in server.properties
-   [MC-18060](https://bugs.mojang.com/browse/MC-18060) Several realms strings are untranslatable
-   [MC-35078](https://bugs.mojang.com/browse/MC-35078) Breaking animation is one frame off
-   [MC-123081](https://bugs.mojang.com/browse/MC-123081) Placing an end crystal when entering The End prevents Ender Dragon from spawning
-   [MC-146582](https://bugs.mojang.com/browse/MC-146582) When entering spectator mode while standing on the ground, the player moves down by 0.19051 blocks, which makes you fall down
-   [MC-195781](https://bugs.mojang.com/browse/MC-195781) The "Include entities:" string displayed within the structure block GUI is improperly capitalized
-   [MC-195825](https://bugs.mojang.com/browse/MC-195825) "datapacks" string is inconsistent with "data pack" string in "datapackFailure.title" text
-   [MC-198202](https://bugs.mojang.com/browse/MC-198202) Options background texture does not match dirt texture
-   [MC-203039](https://bugs.mojang.com/browse/MC-203039) Incorrect use of colon in options.hideMatchedNames.tooltip
-   [MC-206548](https://bugs.mojang.com/browse/MC-206548) Leash knot subtitles are not properly capitalized
-   [MC-226454](https://bugs.mojang.com/browse/MC-226454) The "Light as a Rabbit" advancement description has no space after the ellipsis
-   [MC-236606](https://bugs.mojang.com/browse/MC-236606) Lightning bolt related string lacks capitalization
-   [MC-241736](https://bugs.mojang.com/browse/MC-241736) Company names are still inconsistent and partly misspelled in the credits
-   [MC-250571](https://bugs.mojang.com/browse/MC-250571) Gamerule description strings within the world creation menu consist of inconsistent concluding punctuation
-   [MC-256424](https://bugs.mojang.com/browse/MC-256424) Game mode is sometimes referred to as "gamemode"
-   [MC-257336](https://bugs.mojang.com/browse/MC-257336) Some chiseled bookshelf interaction subtitles are improperly capitalized
-   [MC-262006](https://bugs.mojang.com/browse/MC-262006) Melon and Pumpkin are in the default '#maintains\_farmland' tag despite not maintain farmland
-   [MC-262208](https://bugs.mojang.com/browse/MC-262208) In the credits, "Lionbridge" is misspelt in one place (no "g")
-   [MC-262253](https://bugs.mojang.com/browse/MC-262253) Music composers not listed in credits
-   [MC-262265](https://bugs.mojang.com/browse/MC-262265) Changing resource pack that overrides a font crashes JVM
-   [MC-262296](https://bugs.mojang.com/browse/MC-262296) Rabbits are no longer affected by jump boost
-   [MC-262300](https://bugs.mojang.com/browse/MC-262300) Menu text is now rendered in front of the Mojang Studios loading screen fade animation
-   [MC-262304](https://bugs.mojang.com/browse/MC-262304) The stepping\_on predicate condition does not correctly succeed on trapdoors
-   [MC-262308](https://bugs.mojang.com/browse/MC-262308) Entities do not stick to honey blocks pushed by pistons if their center isn't over the honey block
-   [MC-262313](https://bugs.mojang.com/browse/MC-262313) Nether won't load in upgraded worlds
-   [MC-262317](https://bugs.mojang.com/browse/MC-262317) Items don't respect properties of the block they are supported on
-   [MC-262351](https://bugs.mojang.com/browse/MC-262351) Worldgen deadlock caused by supporting block checks
-   [MC-262363](https://bugs.mojang.com/browse/MC-262363) Player can still gain a normal jump off of a honey block with precise timing
-   [MC-262424](https://bugs.mojang.com/browse/MC-262424) Sprinting particles on the edges of blocks are still incorrect

---

A third Release Candidate is now available for Minecraft 1.19.4, fixing one issue in preparation for the full release of Minecraft 1.19.4 tomorrow.

Happy Crafting!

## Fixed bug in 1.19.4 Release Candidate 3

-   [MC-260901](https://bugs.mojang.com/browse/MC-260901) Guardians deal thorns damage even while their spikes are retracted

---

We are releasing a second Release Candidate for 1.19.4 to fix a few critical issues.

## Fixed bugs in 1.19.4 Release Candidate 2

-   [MC-260677](https://bugs.mojang.com/browse/MC-260677) Advancement icons handle translucent textures wrong
-   [MC-260878](https://bugs.mojang.com/browse/MC-260878) Guardians apply Thorns damage when hit by projectiles
-   [MC-260881](https://bugs.mojang.com/browse/MC-260881) Transparent 3D models dont render properly in the GUI/Hotbar

---

Here is the first (and hopefully last) release candidate for 1.19.4. Unless something critical pops up, no further changes will be made for the full release, which is planned for next week.

Happy mining!

## Technical Changes

Changes to display entity interpolation:

-   interpolation always starts at the beginning on client tick
-   field `interpolation_start` is replaced with `start_interpolation`, with a different meaning
-   `start_interpolation` describes amount of ticks from the start of next client tick after receiving an update to start of interpolation
    -   for example value `0` means that interpolation will start at the beginning of next client tick after receiving the update
-   `start_interpolation` is not stored in entity data
    -   when using data commands, if interpolated value is updated, but `start_interpolation` is not present in modified tag, interpolation will continue from the time of previous update, but with new values

## Fixed bugs in 1.19.4-rc1

-   [MC-260857](https://bugs.mojang.com/browse/MC-260857) Display entities summoned with initial transformation interpolate incorrectly from default transformation during next transformation

---

We are now releasing the fourth pre-release for Minecraft 1.19.4. This pre-release contains bug fixes, some cherry texture tweaks, and a button in the options menu to view the game credits.

Happy mining!

## Changes

-   Added "Credits & Attribution" button in the Options menu

## Technical Changes

### Display entities

-   When a new interpolation is started, it now starts from the current state instead of the final state

## Changes to Experimental Features

-   The textures for the Cherry Tree Leaves and Cherry Sign have been updated

## Fixed bugs in 1.19.4 Pre-release 4

-   [MC-172305](https://bugs.mojang.com/browse/MC-172305) Some words within "/clear" command feedback messages are always pluralized
-   [MC-193497](https://bugs.mojang.com/browse/MC-193497) Tall Grass & Large Fern are rendered incorrectly when an Enderman is holding them
-   [MC-210816](https://bugs.mojang.com/browse/MC-210816) Sculk sensors are not activated upon breaking shulker bullets
-   [MC-211071](https://bugs.mojang.com/browse/MC-211071) Some words within "/spreadplayers" command feedback messages are always pluralized
-   [MC-255060](https://bugs.mojang.com/browse/MC-255060) Some words within "/function" and "/schedule" command feedback messages are always pluralized
-   [MC-255087](https://bugs.mojang.com/browse/MC-255087) Some words within "/worldborder" command feedback messages are always pluralized
-   [MC-256270](https://bugs.mojang.com/browse/MC-256270) Some words within some multiplayer command feedback messages are always pluralized
-   [MC-257784](https://bugs.mojang.com/browse/MC-257784) Some words within some realms strings are always pluralized
-   [MC-259259](https://bugs.mojang.com/browse/MC-259259) Hostile mobs can't replace armor they're wearing with better armor
-   [MC-259603](https://bugs.mojang.com/browse/MC-259603) The "selectWorld.gameMode.hardcore.info" string displayed within the create new world GUI is improperly capitalized
-   [MC-259610](https://bugs.mojang.com/browse/MC-259610) Gamemode information strings consist of inconsistent concluding punctuation
-   [MC-259637](https://bugs.mojang.com/browse/MC-259637) Natural spider potion effects still last max int instead of infinity
-   [MC-259702](https://bugs.mojang.com/browse/MC-259702) The "death.attack.hotFloor.player" string is missing an article before the word "danger"
-   [MC-259714](https://bugs.mojang.com/browse/MC-259714) Death messages relating to dragons' breath aren't possessive
-   [MC-259715](https://bugs.mojang.com/browse/MC-259715) The "death.attack.message\_too\_long" string is missing an article before the word "message"
-   [MC-259792](https://bugs.mojang.com/browse/MC-259792) The "selectWorld.experimental.message" string is missing a serial comma
-   [MC-259853](https://bugs.mojang.com/browse/MC-259853) block\_display transform breaks when shearing
-   [MC-259896](https://bugs.mojang.com/browse/MC-259896) item\_display has a wrong default value
-   [MC-260068](https://bugs.mojang.com/browse/MC-260068) The sounds of using brushes don't show any subtitles
-   [MC-260196](https://bugs.mojang.com/browse/MC-260196) Entities don't recognize decorated pots as obstacles when pathfinding
-   [MC-260214](https://bugs.mojang.com/browse/MC-260214) Entities will often spin while pathfinding on top of decorated pots
-   [MC-260215](https://bugs.mojang.com/browse/MC-260215) Water within waterlogged decorated pots doesn't flow
-   [MC-260265](https://bugs.mojang.com/browse/MC-260265) Lighting does not transform with display entities
-   [MC-260285](https://bugs.mojang.com/browse/MC-260285) Applying an identical transformation will result in the previous interpolation repeating instead of having no effect
-   [MC-260321](https://bugs.mojang.com/browse/MC-260321) Sniffers in the distance have lots of Z-fighting on their body
-   [MC-260429](https://bugs.mojang.com/browse/MC-260429) The texture of the Cherry Sign post has an inconsistency with the other Signs
-   [MC-260497](https://bugs.mojang.com/browse/MC-260497) Villager trade button interferes with the slider
-   [MC-260642](https://bugs.mojang.com/browse/MC-260642) tall\_grass and large\_fern display gray as block\_display entities
-   [MC-260681](https://bugs.mojang.com/browse/MC-260681) UI click sounds in Create New World menu tabs are louder than they should be
-   [MC-260735](https://bugs.mojang.com/browse/MC-260735) You can block falling anvils and dripstone with a shield
-   [MC-260764](https://bugs.mojang.com/browse/MC-260764) Right-clicking will focus text fields
-   [MC-260765](https://bugs.mojang.com/browse/MC-260765) Right-clicking will move packs in the pack edit screen
-   [MC-260774](https://bugs.mojang.com/browse/MC-260774) Players are kicked from server environments due to chat message validation failures when attempting to type in chat after having previously altered chat settings

---

We're back again with the third pre-release for Minecraft 1.19.4. This pre-release contains more bug fixes, as well as color adjustments for potions. The archer pottery shard texture has also been updated. ​ Happy mining! ​

## Changes

-   Potions have had their colors adjusted to make them more distinguishable from each other

​

## Technical Changes

-   Pressing F3+S will now dump contents of dynamic textures (like atlases, maps, etc.) to `screenshots/debug/`

​

## Experimental Feature Changes

### Pottery Shards

-   Updated the textures of the Archer Pottery Shard based on community feedback

​

## Fixed bugs in 1.19.4-pre3

-   [MC-148458](https://bugs.mojang.com/browse/MC-148458) Ridable mobs aren't knocked back upon death
-   [MC-250486](https://bugs.mojang.com/browse/MC-250486) Error saving GUI scale option when toggling fullscreen while fullscreen resolution is changed
-   [MC-258561](https://bugs.mojang.com/browse/MC-258561) Endermen teleport away instead of taking damage from end crystal, TNT and wither skull explosions
-   [MC-259666](https://bugs.mojang.com/browse/MC-259666) Reloading a resource pack that has a custom texture atlas for a second time causes severe FPS lag on the client
-   [MC-260277](https://bugs.mojang.com/browse/MC-260277) potted\_cherry\_sapling and potted\_torchflower not part of #flower\_pots block tag
-   [MC-260451](https://bugs.mojang.com/browse/MC-260451) Inventory character with semi-transparent outer skin layer not rendered correctly when looking right
-   [MC-260456](https://bugs.mojang.com/browse/MC-260456) Certain potions are still indistinguishable by color
-   [MC-260470](https://bugs.mojang.com/browse/MC-260470) Endermen can't dodge arrows fired from a dispenser
-   [MC-260474](https://bugs.mojang.com/browse/MC-260474) Players and mobs are no longer affected by knockback upon death
-   [MC-260501](https://bugs.mojang.com/browse/MC-260501) Cannot delete previous snapshot world in launcher
-   [MC-260579](https://bugs.mojang.com/browse/MC-260579) Crash when a guardian deals damage to itself after removing thorns from avoids\_guardian\_thorns
-   [MC-260605](https://bugs.mojang.com/browse/MC-260605) Repeating command block summoning piglins/villagers causes memory usage to constantly increase
-   [MC-260627](https://bugs.mojang.com/browse/MC-260627) Dolphins with passengers either accelerate to ludicrous speed or are immobilized completely

---

We are now releasing the second pre-release for Minecraft 1.19.4. This pre-release contains bug fixes, as well as an updated model for the decorated pot.

As a reminder, the pre-release cycle for 1.19.4 will continue to contain mostly bug fixes.

Happy mining!

## Technical Changes

### Mob Behavior

-   Only mobs in the `dismounts_underwater` entity tag will now force the rider to dismount when underwater

## Changes for Experimental Features

### Cherry Biome and Wood Set

-   Updated the texture for Pink Petals
-   Updated textures for the Cherry Door, Cherry Sapling, and Cherry Boat with Chest

### Decorated Pot

-   Updated the neck of the Decorated Pot model
    -   With the former pot we decided to make the pot's neck clip with blocks, so it would be extra flexible to build with
    -   However, this had some Z-fighting issues where 2 objects are in the same exact position and cause flickering
    -   This is prevented with the new and more complex block model

## Fixed bugs in 1.19.4 Pre-release 2

-   [MC-137552](https://bugs.mojang.com/browse/MC-137552) Loaded crossbows look unloaded in item frames and when dropped on the ground
-   [MC-229293](https://bugs.mojang.com/browse/MC-229293) Casting issue: Broken blocks drop items in the wrong position at high distances
-   [MC-259208](https://bugs.mojang.com/browse/MC-259208) Zombie riding chicken or skeleton riding spider not considered controllers by /execute on controller command
-   [MC-259609](https://bugs.mojang.com/browse/MC-259609) Tooltips from selected buttons and sliders don't disappear when expected
-   [MC-259831](https://bugs.mojang.com/browse/MC-259831) UI Buttons break certain resource packs as of 23w06a
-   [MC-259839](https://bugs.mojang.com/browse/MC-259839) Duplicated "minecraft:freeze" in damage\_type tag "bypasses\_armor"
-   [MC-259885](https://bugs.mojang.com/browse/MC-259885) Upon entering the credits screen while in F1 mode, the Minecraft: Java Edition logo does not display correctly
-   [MC-259961](https://bugs.mojang.com/browse/MC-259961) item\_display does not take some nbt tags into account
-   [MC-259979](https://bugs.mojang.com/browse/MC-259979) Striders and blazes do not take five times the damage when using /damage with freeze type
-   [MC-260208](https://bugs.mojang.com/browse/MC-260208) Display entities in spawn chunks with interpolation\_duration greater than 0 visually reset to default transformation on rejoin
-   [MC-260268](https://bugs.mojang.com/browse/MC-260268) Can't scroll using arrows in "Telemetry Data Collection" screen
-   [MC-260324](https://bugs.mojang.com/browse/MC-260324) Cherry Boat with Chest item texture has a misplaced pixel
-   [MC-260335](https://bugs.mojang.com/browse/MC-260335) Clicking with an item that is out of stock in the villager trading menu with sufficient payment will allow purchase of the item regardless
-   [MC-260364](https://bugs.mojang.com/browse/MC-260364) Cherry Door inconsistent item texture
-   [MC-260427](https://bugs.mojang.com/browse/MC-260427) Button text is visible outside menus
-   [MC-260434](https://bugs.mojang.com/browse/MC-260434) There is no "Will be saved in..." text in the new world creation menu
-   [MC-260436](https://bugs.mojang.com/browse/MC-260436) Item Tags in 1.19.4-pre1 have extra entries
-   [MC-260438](https://bugs.mojang.com/browse/MC-260438) Items are not rendered in the bundle UI
-   [MC-260443](https://bugs.mojang.com/browse/MC-260443) Loading a snapshot 23w07a experimental world says it can be opened in "safe mode" and clicking "safe mode" does nothing
-   [MC-260445](https://bugs.mojang.com/browse/MC-260445) Player can climb up one block while riding a boat or raft
-   [MC-260461](https://bugs.mojang.com/browse/MC-260461) Water mobs cannot be ridden in water

---

We are now releasing the first pre-release for Minecraft 1.19.4. This pre-release contains a new high contrast accessibility setting, some updates to the Create World tab visuals, a new execute subcommand, improvements to startup performance, and lots of bug fixes!

For the remainder of the 1.19.4 cycle, you should mostly see bugs being fixed. In addition to that, pre-releases don't follow the regular snapshot cadence of releasing on Wednesdays, so keep an eye out for the next pre-release.

Happy mining!

## Important Note

-   Experimental 1.20 worlds created in the previous snapshot (23w07a) can no longer be opened in this version

## Changes

-   The enchantment glint for items in the inventory has been made more visible
-   The default value of the "Glint Strength" setting has been reduced to 75%
-   Potions no longer have an enchantment glint due to it obscuring the color of the potion contents
-   Added a notification system for Realms to tell you about important information about your Realm

### Accessibility

-   Added a built-in resource pack that enhances the contrast of UI elements
    -   The resource pack can be enabled in the Accessibility Options screen or manually in the Resource Pack screen
    -   This is only available in the menus for now, but we’ll be looking to bring this to gameplay UIs in the future as well

### Updated Create New World Screen

-   The appearance of the tab bar in the Create New World screen has been updated
    -   Tabs now have unique visuals instead of being traditional buttons
    -   The tabs now align to the center of the screen
    -   The content has been aligned to the top of the screen

## Technical Changes

-   The resource pack version is now 13
-   Changed the following game events:
    -   `item_interact_finish` now has a vibration frequency of 2 instead of 14
-   New Damage Type Tag: `bypasses_cooldown` - damage types with this tag bypass the regular invincibility time after taking damage
-   New Entity Type Tag: `fall_damage_immune` - entity types with this tag do not take fall damage

### Resource Pack format

-   The enchantment glint now has two separate texture files: `enchanted_glint_entity.png` and `enchanted_glint_item.png`

### Commands

##### `execute positioned over`

New `execute` sub-command for finding positions on top of a heightmap. Changes the height of the execution position to be on top of the given heightmap. Syntax:

-   `execute positioned over <heightmap>`

###### Heightmaps

A heightmap records the highest position in a column of blocks according to some criteria. Available options:

-   `world_surface`: Any non-air block
-   `motion_blocking`: Any motion blocking material (e.g. ignores flowers and grass)
-   `motion_blocking_no_leaves`: Any non-leaf motion blocking material
-   `ocean_floor`: Any non-fluid motion blocking material

## Changes for Experimental Features

-   The Brush crafting recipe now uses a Feather, Copper Ingot and Stick in a vertical line
-   The Sniffer Spawn Egg colors have been updated
-   The recipe for the Decorated Pot made of all Bricks can now be found in the Recipe Book

## Fixed bugs in 1.19.4 Pre-release 1

-   [MC-106484](https://bugs.mojang.com/browse/MC-106484) Some potions are indistinguishable by color
-   [MC-132200](https://bugs.mojang.com/browse/MC-132200) Ghost block hoppers appear if summoned by command to powered location
-   [MC-253210](https://bugs.mojang.com/browse/MC-253210) Goats will panic when receiving fall damage
-   [MC-253211](https://bugs.mojang.com/browse/MC-253211) Frogs will panic when receiving fall damage
-   [MC-256484](https://bugs.mojang.com/browse/MC-256484) Sitting camels don't stand up and begin following players that are tempting them with their favorite food
-   [MC-256489](https://bugs.mojang.com/browse/MC-256489) Sitting camels that are in love don't attempt to stand up and approach one another to breed
-   [MC-256731](https://bugs.mojang.com/browse/MC-256731) The sounds of camels recovering aren't controlled by the "Friendly Creatures" sound slider
-   [MC-256861](https://bugs.mojang.com/browse/MC-256861) Camels panic when receiving fall damage
-   [MC-259192](https://bugs.mojang.com/browse/MC-259192) Server/client position desync when running /ride too fast and manually dismounting
-   [MC-259246](https://bugs.mojang.com/browse/MC-259246) Passengers on an ender dragon ride too high
-   [MC-259576](https://bugs.mojang.com/browse/MC-259576) Passenger's riding position is too high on a phantom
-   [MC-259613](https://bugs.mojang.com/browse/MC-259613) Enchantment glint is hardly noticeable on some items, even when the Glint Strength is set to 100%
-   [MC-259630](https://bugs.mojang.com/browse/MC-259630) Camels, horses and mules bounce high into the air when being ridden across water
-   [MC-259882](https://bugs.mojang.com/browse/MC-259882) Axolotls no longer give the Regeneration effect to nearby players after they kill a mob, and do not grant "The Healing Power of Friendship!" advancement
-   [MC-259893](https://bugs.mojang.com/browse/MC-259893) Long texts on buttons scroll too fast
-   [MC-259917](https://bugs.mojang.com/browse/MC-259917) Entities immune to fall damage are damaged when using minecraft:fall damage type in /damage
-   [MC-259918](https://bugs.mojang.com/browse/MC-259918) Text scrolling speed isn't accessible-friendly
-   [MC-259920](https://bugs.mojang.com/browse/MC-259920) The "ITEM\_INTERACT\_FINISH" game event overrides other game events causing several actions to not produce their intended vibration frequency
-   [MC-260030](https://bugs.mojang.com/browse/MC-260030) Starting data.Main for data generation crashes
-   [MC-260033](https://bugs.mojang.com/browse/MC-260033) Torchflowers cannot be used to craft suspicious stew
-   [MC-260035](https://bugs.mojang.com/browse/MC-260035) Chickens and parrots are not tempted by torchflower seeds
-   [MC-260051](https://bugs.mojang.com/browse/MC-260051) Bees are not tempted by or attempt to pollinate Pink Petals and Torchflowers
-   [MC-260059](https://bugs.mojang.com/browse/MC-260059) Pigs do not seem to spawn in Cherry Grove biome
-   [MC-260071](https://bugs.mojang.com/browse/MC-260071) Sniffer Digging Sounds can be heard from way too far
-   [MC-260089](https://bugs.mojang.com/browse/MC-260089) Sniffers panic when receiving fall damage
-   [MC-260092](https://bugs.mojang.com/browse/MC-260092) Sniffers' hitboxes are too small resulting in sniffers not being rendered from certain angles despite being visible on the screen
-   [MC-260098](https://bugs.mojang.com/browse/MC-260098) Sniffers aren't required for the "Two by Two" advancement
-   [MC-260102](https://bugs.mojang.com/browse/MC-260102) Torchflower seeds don't contribute to the "A Seedy Place" advancement
-   [MC-260107](https://bugs.mojang.com/browse/MC-260107) Sniffers don't swim properly and their walking animations freeze when in water
-   [MC-260109](https://bugs.mojang.com/browse/MC-260109) Sniffers do not rotate their head to look at the player
-   [MC-260118](https://bugs.mojang.com/browse/MC-260118) Disabling experimental features on the world creation screen causes pack validation to fail
-   [MC-260121](https://bugs.mojang.com/browse/MC-260121) Hoppers are ghost blocks for other players when placed on jukeboxes that are playing music
-   [MC-260125](https://bugs.mojang.com/browse/MC-260125) Sniffer's head occasionally disappears
-   [MC-260126](https://bugs.mojang.com/browse/MC-260126) Using pick block function on grown torchflower crop gives torchflower seeds instead of the plant item
-   [MC-260149](https://bugs.mojang.com/browse/MC-260149) Cherry logs can't be used to craft campfires
-   [MC-260156](https://bugs.mojang.com/browse/MC-260156) The sound of the torchflower being broken after growing is different than the sound of it breaking after being placed
-   [MC-260157](https://bugs.mojang.com/browse/MC-260157) On existing snapshot servers, cherry grove biomes cannot be found with "/locate", nor do they generate
-   [MC-260168](https://bugs.mojang.com/browse/MC-260168) Torchflower crop aren't part of the #crops block tag
-   [MC-260171](https://bugs.mojang.com/browse/MC-260171) Cherry Leaves and Pink Petals aren't part of the #flower block tag
-   [MC-260172](https://bugs.mojang.com/browse/MC-260172) Torchflower isn't part of the #flowers block or item tags
-   [MC-260181](https://bugs.mojang.com/browse/MC-260181) Torchflower seeds are not grouped with other seeds in the creative inventory
-   [MC-260185](https://bugs.mojang.com/browse/MC-260185) Pink Petals aren't insta-mined
-   [MC-260189](https://bugs.mojang.com/browse/MC-260189) Cherry Sapling is not part of the #saplings item tag
-   [MC-260191](https://bugs.mojang.com/browse/MC-260191) Cherry Leaves aren't part of the #leaves and #complete\_find\_tree\_tutorial item tags
-   [MC-260192](https://bugs.mojang.com/browse/MC-260192) You can't make Charcoal with Cherry Logs or Wood
-   [MC-260193](https://bugs.mojang.com/browse/MC-260193) Cherry Logs and Wood can't be used as fuel in furnaces
-   [MC-260194](https://bugs.mojang.com/browse/MC-260194) Create new world screen appears even when world is created; clicking on button causes freeze or crash
-   [MC-260195](https://bugs.mojang.com/browse/MC-260195) Cherry Logs and Wood are missing from the #log, #logs\_that\_burn and #complete\_find\_tree\_tutorial item tags
-   [MC-260209](https://bugs.mojang.com/browse/MC-260209) breaks\_decorated\_pots Item Tag is in the Vanilla datapack, not 1.20
-   [MC-260210](https://bugs.mojang.com/browse/MC-260210) Brush Recipe is in the Vanilla datapack, not 1.20

---

In order to secure the quality of the Minecraft 1.19.3 release, we have decided to fix a few more critical issues and to delay the release until tomorrow. To that end we are now releasing Minecraft 1.19.3 Release Candidate 3.

Happy mining!

## Fixed bugs in 1.19.3 Release Candidate 3

-   [MC-108707](https://bugs.mojang.com/browse/MC-108707) Potion effects, particles, and fire animations persist client-side after death in server environments
-   [MC-258258](https://bugs.mojang.com/browse/MC-258258) The "EntityTag" NBT data on armor stands is no longer applied upon placement
-   [MC-258279](https://bugs.mojang.com/browse/MC-258279) Particle groups aren't cleared on resource reload

---

We're now releasing the second (and hopefully last) release candidate for Minecraft 1.19.3, fixing a few critical bugs. If there are no major issues following this release candidate, no further changes will be done before the full release.

With this release candidate, we are reverting a behavior change for translation strings due to a prevalent but unsupported use case. Expect this behavior to be changed in the future to provide a supported alternative.

Happy mining!

## Fixed bugs in 1.19.3 Release Candidate 2

-   [MC-258256](https://bugs.mojang.com/browse/MC-258256) Cannot join a LAN world while offline
-   [MC-258251](https://bugs.mojang.com/browse/MC-258251) Slots (like %s) in translations no longer ignore missing elements in "with"

---

We're now releasing the first (and hopefully only) release candidate for Minecraft 1.19.3. If there are no major issues following this release candidate, no further changes will be done before the full release.

Happy mining!

## Fixed bugs in 1.19.3 Release Candidate 1

-   [MC-58668](https://bugs.mojang.com/browse/MC-58668): Smooth Lighting Minimum and Maximum levels no longer differ
-   [MC-185279](https://bugs.mojang.com/browse/MC-185279): "Done" and "Cancel" buttons in the game rules screen are not selected in the right order when navigating using Tab
-   [MC-187812](https://bugs.mojang.com/browse/MC-187812): The buttons are not selected in the right order using Tab in the new datapacks and resource packs menus
-   [MC-187816](https://bugs.mojang.com/browse/MC-187816): Using Tab multiple times to select a datapack / resource pack from the list does not deselect it
-   [MC-227250](https://bugs.mojang.com/browse/MC-227250): Mobs continue converting after the conversion process starts and the block causing the conversion is removed
-   [MC-240724](https://bugs.mojang.com/browse/MC-240724): There are no shadows on text displayed within the subtitles overlay
-   [MC-248589](https://bugs.mojang.com/browse/MC-248589): World border texture jumps back and forth between two positions as the player's y level changes
-   [MC-254809](https://bugs.mojang.com/browse/MC-254809): You cannot get water bottles from water in creative mode if there's a potion in your inventory
-   [MC-258159](https://bugs.mojang.com/browse/MC-258159): Pick block doesn't work on Ender Dragon
-   [MC-258190](https://bugs.mojang.com/browse/MC-258190): Bubble columns let skylight through
-   [MC-258195](https://bugs.mojang.com/browse/MC-258195): Performance degradation of NBT modification
-   [MC-258196](https://bugs.mojang.com/browse/MC-258196): Stray pixel in gui/toasts.png
-   [MC-258203](https://bugs.mojang.com/browse/MC-258203): /data modify thinks NBT is too large, but /data merge doesn't
-   [MC-258209](https://bugs.mojang.com/browse/MC-258209): Storage data is broken

---

