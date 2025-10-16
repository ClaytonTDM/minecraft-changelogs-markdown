# Minecraft 1.19.4 Release Candidate 1

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

# Minecraft 1.19.4 Pre-Release 4

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
-   [MC-259715](https://bugs.mojang.com/browse/MC-259715) The "death.attack.message;;_;;too;;_;;long" string is missing an article before the word "message"
-   [MC-259792](https://bugs.mojang.com/browse/MC-259792) The "selectWorld.experimental.message" string is missing a serial comma
-   [MC-259853](https://bugs.mojang.com/browse/MC-259853) block;;_;;display transform breaks when shearing
-   [MC-259896](https://bugs.mojang.com/browse/MC-259896) item;;_;;display has a wrong default value
-   [MC-260068](https://bugs.mojang.com/browse/MC-260068) The sounds of using brushes don't show any subtitles
-   [MC-260196](https://bugs.mojang.com/browse/MC-260196) Entities don't recognize decorated pots as obstacles when pathfinding
-   [MC-260214](https://bugs.mojang.com/browse/MC-260214) Entities will often spin while pathfinding on top of decorated pots
-   [MC-260215](https://bugs.mojang.com/browse/MC-260215) Water within waterlogged decorated pots doesn't flow
-   [MC-260265](https://bugs.mojang.com/browse/MC-260265) Lighting does not transform with display entities
-   [MC-260285](https://bugs.mojang.com/browse/MC-260285) Applying an identical transformation will result in the previous interpolation repeating instead of having no effect
-   [MC-260321](https://bugs.mojang.com/browse/MC-260321) Sniffers in the distance have lots of Z-fighting on their body
-   [MC-260429](https://bugs.mojang.com/browse/MC-260429) The texture of the Cherry Sign post has an inconsistency with the other Signs
-   [MC-260497](https://bugs.mojang.com/browse/MC-260497) Villager trade button interferes with the slider
-   [MC-260642](https://bugs.mojang.com/browse/MC-260642) tall;;_;;grass and large;;_;;fern display gray as block;;_;;display entities
-   [MC-260681](https://bugs.mojang.com/browse/MC-260681) UI click sounds in Create New World menu tabs are louder than they should be
-   [MC-260735](https://bugs.mojang.com/browse/MC-260735) You can block falling anvils and dripstone with a shield
-   [MC-260764](https://bugs.mojang.com/browse/MC-260764) Right-clicking will focus text fields
-   [MC-260765](https://bugs.mojang.com/browse/MC-260765) Right-clicking will move packs in the pack edit screen
-   [MC-260774](https://bugs.mojang.com/browse/MC-260774) Players are kicked from server environments due to chat message validation failures when attempting to type in chat after having previously altered chat settings

---

# Minecraft 1.19.4 Pre-Release 3

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
-   [MC-260277](https://bugs.mojang.com/browse/MC-260277) potted;;_;;cherry;;_;;sapling and potted;;_;;torchflower not part of #flower;;_;;pots block tag
-   [MC-260451](https://bugs.mojang.com/browse/MC-260451) Inventory character with semi-transparent outer skin layer not rendered correctly when looking right
-   [MC-260456](https://bugs.mojang.com/browse/MC-260456) Certain potions are still indistinguishable by color
-   [MC-260470](https://bugs.mojang.com/browse/MC-260470) Endermen can't dodge arrows fired from a dispenser
-   [MC-260474](https://bugs.mojang.com/browse/MC-260474) Players and mobs are no longer affected by knockback upon death
-   [MC-260501](https://bugs.mojang.com/browse/MC-260501) Cannot delete previous snapshot world in launcher
-   [MC-260579](https://bugs.mojang.com/browse/MC-260579) Crash when a guardian deals damage to itself after removing thorns from avoids;;_;;guardian;;_;;thorns
-   [MC-260605](https://bugs.mojang.com/browse/MC-260605) Repeating command block summoning piglins/villagers causes memory usage to constantly increase
-   [MC-260627](https://bugs.mojang.com/browse/MC-260627) Dolphins with passengers either accelerate to ludicrous speed or are immobilized completely

---

# Minecraft 1.19.4 Pre-Release 2

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
-   [MC-259839](https://bugs.mojang.com/browse/MC-259839) Duplicated "minecraft:freeze" in damage;;_;;type tag "bypasses;;_;;armor"
-   [MC-259885](https://bugs.mojang.com/browse/MC-259885) Upon entering the credits screen while in F1 mode, the Minecraft: Java Edition logo does not display correctly
-   [MC-259961](https://bugs.mojang.com/browse/MC-259961) item;;_;;display does not take some nbt tags into account
-   [MC-259979](https://bugs.mojang.com/browse/MC-259979) Striders and blazes do not take five times the damage when using /damage with freeze type
-   [MC-260208](https://bugs.mojang.com/browse/MC-260208) Display entities in spawn chunks with interpolation;;_;;duration greater than 0 visually reset to default transformation on rejoin
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

# Minecraft 1.19.4 Pre-Release 1

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

**`execute positioned over`**

New `execute` sub-command for finding positions on top of a heightmap. Changes the height of the execution position to be on top of the given heightmap. Syntax:

-   `execute positioned over <heightmap>`

**Heightmaps**

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
-   [MC-259920](https://bugs.mojang.com/browse/MC-259920) The "ITEM;;_;;INTERACT;;_;;FINISH" game event overrides other game events causing several actions to not produce their intended vibration frequency
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
-   [MC-260191](https://bugs.mojang.com/browse/MC-260191) Cherry Leaves aren't part of the #leaves and #complete;;_;;find;;_;;tree;;_;;tutorial item tags
-   [MC-260192](https://bugs.mojang.com/browse/MC-260192) You can't make Charcoal with Cherry Logs or Wood
-   [MC-260193](https://bugs.mojang.com/browse/MC-260193) Cherry Logs and Wood can't be used as fuel in furnaces
-   [MC-260194](https://bugs.mojang.com/browse/MC-260194) Create new world screen appears even when world is created; clicking on button causes freeze or crash
-   [MC-260195](https://bugs.mojang.com/browse/MC-260195) Cherry Logs and Wood are missing from the #log, #logs;;_;;that;;_;;burn and #complete;;_;;find;;_;;tree;;_;;tutorial item tags
-   [MC-260209](https://bugs.mojang.com/browse/MC-260209) breaks;;_;;decorated;;_;;pots Item Tag is in the Vanilla datapack, not 1.20
-   [MC-260210](https://bugs.mojang.com/browse/MC-260210) Brush Recipe is in the Vanilla datapack, not 1.20

---

# Minecraft Snapshot 23w07a

This week we're bringing you the Sniffer, Archaeology, and the Cherry Blossom biome as experimental features for the 1.20 update.

Changes for the 1.19.4 release include Interaction Entities, and updates to jukeboxes and horse breeding.

Happy brushing!

## Changes

-   Jukeboxes have changed to be at parity with Bedrock
-   Horse breeding has been updated
-   Updated the Realms screen to be more in line with the Singleplayer and Multiplayer screens

### Recipe unlocking

-   The Crafting Table recipe is unlocked immediately on creating a new world
-   The Crossbow recipe is no longer unlocked by sticks
-   The Soul Campfire recipe is no longer unlocked by sticks

### Jukebox

-   While playing a music disc, it will emit a redstone signal of 15
-   Droppers and hoppers can now interact with it

### Horses

-   When breeding horses and the like, the babies' speed, jump height and health are no longer biased toward the average
-   This change is intended to make horse breeding a viable way of getting great horses, if a player starts with good parents and puts in enough time and Golden Carrots

## Technical Changes

-   The vanilla resource pack en;;_;;us language file is now sorted alphanumerically by key
-   A new recipe serializer `crafting_decorated_pot` has been added for the new Decorated Pot recipe
-   Added `show_notification` field to recipes
    -   Accepts a boolean which determines if a notification is shown when unlocking this recipe
    -   defaults to `true` if isn't specified

### Interaction Entities

A new type of entity that records attacks ("left clicks") and interactions ("right clicks"). Interactions are invisible and of a custom size.

Fields:

-   `width`: Width of the entity's bounding box (default `1`)
-   `height`: Height of the entity's bounding box (default `1`)
-   `attack`: Records the last attack action on the entity
-   `interaction`: Records the last interaction action on the entity
-   `response`: Boolean specifying if interacting should trigger a response (arm swing, sound effects, etc - default `false`)

**Action Format**

When an action is stored, it always has two fields:

-   `player`: The UUID (in standard integer array format) of the player performing the action
-   `timestamp`: The timestamp of the game tick when the event happened (stored as a long)

**Advancement Triggers**

-   Interacting with an Interaction entity triggers `player_interacted_with_entity`
-   Attacking an Interaction entity triggers `player_hurt_entity`

**`execute on` with Interactions**

The Interaction entity targets the player who last interacted with it. That makes the following possible:

-   `execute on attacker`: execute as the last player who attacked the entity
-   `execute on target`: execute as the last player who interacted with the entity

## Experimental Features

-   Added Sniffer mob
-   Added a Cherry Grove biome
-   Added Archaeology

### Sniffer

-   Sniffer Mob now available as an experimental feature
    -   The Sniffer is the mob vote winner of Minecraft Live 2022 and the first "ancient" mob added to the game
    -   Sniffers cannot be tempted or tamed
    -   Sniffers are passive friendly mobs
    -   Sniffers sniff in the air and occasionally dig for seeds
-   Torchflower now available as an experimental feature
    -   The Torchflower seed can be planted on farmland and grows into a flower
    -   The seed can be used to breed two Sniffers
    -   The full-grown flower can be harvested and replanted but can also be crafted into a dye

### Cherry Grove biome

-   Added a new Cherry Grove biome, with pretty cherry blossom trees
-   You can find it in the mountains, like Meadows

**Pink Petals block**

-   Added a new Pink Petals block with lots of pink flowers on the ground

**Cherry Wood Set**

-   Added a new Cherry wood set, with all the corresponding wooden things you can make from it. You need to have the Update 1.20 experimental features enabled to see it in game.

### Archaeology

**The brush**

-   The brush is a craftable item you can use to brush things

**Suspicious Sand**

-   Desert Temples and Desert Wells now contain Suspicious Sand. This fragile block is hard to spot and easy to destroy, so be careful!
-   Brushing the Suspicious Sand with a Brush will extract objects that were buried long ago

**Pottery Shards**

-   Pottery Shards have pictures on them
-   They cannot be crafted and are only found by brushing Suspicious Sand

**Decorated Pots**

-   Crafting four Pottery Shards together will create a Decorated Pot with a picture on each side
-   You can also use Brick items instead of Pottery Shards in the Decorated Pot recipe
    -   The sides that were made from Brick items will not have pictures
-   Smash a Decorated Pot with any block-breaking tool to break it apart and get the Pottery Shards back
    -   Or hit it with your fist to pick up the pot without breaking it

## Fixed bugs in Snapshot 23w07a

-   [MC-16533](https://bugs.mojang.com/browse/MC-16533) Horse Breeding never exceeds egg/spawn horse attributes
-   [MC-64522](https://bugs.mojang.com/browse/MC-64522) Server shows as "Old" in server list while starting
-   [MC-84633](https://bugs.mojang.com/browse/MC-84633) Resource packs: ambientocclusion flag only respects topmost parent
-   [MC-134448](https://bugs.mojang.com/browse/MC-134448) Drowned animation glitch
-   [MC-181412](https://bugs.mojang.com/browse/MC-181412) Removing a jukebox with a command while it's playing a music disc won't stop playing the music disc
-   [MC-194080](https://bugs.mojang.com/browse/MC-194080) Elytra model stutters by flying and turning
-   [MC-209409](https://bugs.mojang.com/browse/MC-209409) Sitting cats sink in water
-   [MC-226729](https://bugs.mojang.com/browse/MC-226729) Memory leakage problem in native operations
-   [MC-248249](https://bugs.mojang.com/browse/MC-248249) minecraft:forest;;_;;rock feature does not work correctly when used with /place
-   [MC-256465](https://bugs.mojang.com/browse/MC-256465) Baby camels can enter boats despite adult camels not being able to
-   [MC-257282](https://bugs.mojang.com/browse/MC-257282) Allays sometimes have a several-second delay before deciding to follow the player
-   [MC-258457](https://bugs.mojang.com/browse/MC-258457) Resource Pack won't load if it contains reference to non-existing particles
-   [MC-258459](https://bugs.mojang.com/browse/MC-258459) Invalid forced resource pack can cause infinite reload loop on client
-   [MC-258580](https://bugs.mojang.com/browse/MC-258580) Player is kicked from a server for flying in death screen when dying on a Horse or Camel
-   [MC-258624](https://bugs.mojang.com/browse/MC-258624) The Title Screen Warning menu doesn't disappear after the player respawns
-   [MC-258697](https://bugs.mojang.com/browse/MC-258697) Invalid translation of "translationKey=narration.suggestion" in command block GUI
-   [MC-258902](https://bugs.mojang.com/browse/MC-258902) Opening a lectern on Adventure mode and closing it causes inventory desyncs
-   [MC-258907](https://bugs.mojang.com/browse/MC-258907) Advancement trigger "player;;_;;interacted;;_;;with;;_;;entity" doesn't work with "area;;_;;effect;;_;;cloud" entity when used "glass;;_;;bottle" item on it
-   [MC-259107](https://bugs.mojang.com/browse/MC-259107) Opening the crafting recipe book selects the recipe that appears under the mouse cursor
-   [MC-259218](https://bugs.mojang.com/browse/MC-259218) Onboarding isn't resumed after restarting Minecraft
-   [MC-259240](https://bugs.mojang.com/browse/MC-259240) The game crashes when navigating with arrow keys after changing key binds
-   [MC-259241](https://bugs.mojang.com/browse/MC-259241) Turtles can spawn inside each other causing them to get stuck and play constant sounds
-   [MC-259489](https://bugs.mojang.com/browse/MC-259489) Experimental "disabled items" can still be suggested as fuel by the recipe book
-   [MC-259573](https://bugs.mojang.com/browse/MC-259573) Blast Protection does not reduce explosion knockback in creative game mode
-   [MC-259675](https://bugs.mojang.com/browse/MC-259675) Capes occasionally jitter when moving and adjusting your rotation
-   [MC-259691](https://bugs.mojang.com/browse/MC-259691) Drowned that are swimming render outside of their hitboxes when looking up or down
-   [MC-259729](https://bugs.mojang.com/browse/MC-259729) "Falling Block" can appear in death messages
-   [MC-259796](https://bugs.mojang.com/browse/MC-259796) Creeper does not flash white and expand before exploding
-   [MC-259797](https://bugs.mojang.com/browse/MC-259797) Z-fighting occurs on the bottom of boots
-   [MC-259805](https://bugs.mojang.com/browse/MC-259805) Players cannot dismount when riding item;;_;;display, block;;_;;display and text;;_;;display using the ride command
-   [MC-259808](https://bugs.mojang.com/browse/MC-259808) Allay wing animation skips frames/loops incorrectly as of 23w06a
-   [MC-259816](https://bugs.mojang.com/browse/MC-259816) Odd behavior when an item;;_;;display, block;;_;;display, or text;;_;;display entity mounts another entity
-   [MC-259819](https://bugs.mojang.com/browse/MC-259819) Z-fighting on the text of text displays
-   [MC-259999](https://bugs.mojang.com/browse/MC-259999) Entities mounted on display entities do not visually update until after resync

---

