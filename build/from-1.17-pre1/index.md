# Minecraft 1.17 Pre-Release 1

The first 1.17 pre-release is here!

From now on, you should mostly see bugs being fixed. In addition to that, pre-releases doesn't follow the regular snapshot cadence of releasing on Wednesdays, so keep an eye out!

Addtionally, based on feedback from the community, we have decided to include candles in part 1 of Caves & Cliffs again. Candles will become available in Bedrock shortly after the release of part 1.

## New Features in 1.17 Pre-release 1

-   Added new advancements

### Advancements

-   Added "Whatever Floats Your Goat!" for floating in a boat with a goat
-   Added "Wax on" for applying wax to a Copper block!
-   Added "Wax off" for scraping wax off a Copper block!
-   Added "The Cutest Predator" for catching an axolotl in a bucket!
-   Added "The Healing Power of Friendship!" for teaming up with an axolotl and winning a fight
-   Added "Glow and Behold" for making a sign glow
-   Added "Light as a Rabbit" for walking on powder snow with leather boots
-   Added "Surge Protector!" for having a lightning strike a lightning rod near a villager without setting the area on fire
-   Added "Is it a Bird?" for looking at a parrot through a spyglass
-   Added "Is it a Balloon?" for looking at a ghast through a spyglass
-   Added "Is it a Plane?" for looking at a dragon through a spyglass

## Changes in 1.17 Pre-release 1

-   Candles have been added back to the creative inventory
-   Recipes for crafting and dying candles are once again available
-   Candles now have a different texture when lit
-   Glowing text on signs now has an outer glow, making text in dark colors more visible in the dark
-   Holding down the space bar now increases the scroll speed in the credits

## The Caves & Cliffs Preview

Download the [updated datapack](https://launcher.mojang.com/v1/objects/233aa01c6db99ffcf95594e384e72671ae279ced/CavesAndCliffsPreview.zip).

## Technical changes in 1.17 Pre-release 1

-   Added `started_riding`, `lightning_strike` and `using_item` advancement triggers
-   Added `source` condition to `effects_changed` trigger
-   Added `lightning_bolt` sub-predicate
-   Added `passenger`, `stepping_on` and `lightning_bolt` properties to entity predicate
-   Added `looking_at` condition to player sub-predicate
-   Expanded `item` field on item predicate to `items`
-   Expanded `block` field on block predicate to `blocks`
-   Added F3+L shortcut to generate and persist performance metrics from in-game
    -   F3+L on single-player worlds will also include reports for the integrated server
-   Removed debug report command (use perf start/stop for server performance measurement)
-   perf start/stop command on dedicated servers will now generate and persist server performance metrics

### Advancements

#### New triggers

##### `started_riding`

-   Triggered when player starts riding a vehicle or entity starts riding vehicle currently ridden by player
-   Conditions:
    -   `player` - either a player that started riding or one of boat passengers

##### `lightning_strike`

-   Triggered when lighting finishes (i.e. entity disappears)
-   Triggers for any player on server
-   Conditions
    -   `player` - player for which this trigger runs
    -   `lightning` - predicate for lightning entity
    -   `bystander` - predicate for one of the entities in certain area around strike not hurt by it

##### `using_item`

-   Triggered for every tick of using items (like crossbows, spyglass, fishing rods, etc)
-   Conditions
    -   `player` - players that uses item
    -   `item` - item being used

#### Changed triggers

##### `effects_changed`

-   Added `source` triggers that matches entity that triggered the change
-   Might be empty when:
    -   there is no entity (for example, effect gained from beacon)
    -   the effect is self-applied
    -   effect is removed

#### Changed predicates

##### Item predicate

-   `item` field expended to `items`, now accepting array of item types

##### Block predicate

-   `block` field expended to `blocks`, now accepting array of block types

##### Entity predicate

-   `passenger` - new sub-predicate for passenger directly riding this vehicle (if present, must match one or more)
-   `stepping_on` - location predicate for block entity is currently standing on
-   `lightning_bolt` - sub-predicate valid only for lightning bolt entity

##### Player predicate

-   `looking_at` - entity currently viewed by player
    -   uses same line-of-sight rules as attacking mobs
    -   actual detection radius might be changed in future

#### Lightning bolt

-   `blocks_set_on_fire` - range check for of blocks set on fire by this entity
-   `entity_struck` - predicate for entities struck by this lightning (if present, must match one or more)

### Performance metrics reporting

These will be saved to a zip file in `debug/profiling/<yyyy-MM-dd_HH.mm.ss-[levelname]-[version]>.zip` and could be used for performance regression analysis if included in bug reports.

The exact metrics, output format, and names are susceptible to change between versions. Our plan is to continue iterating on which metrics to capture.

#### Client F3+L shortcut

Pressing F3+L while in the game will start a recording for 10 seconds capturing metrics such as tick durations, used heap sizes and other more detailed stats.

Pressing F3+L before the 10-second limit will end the recording early.

This shortcut is always available to clients, even on multi-player servers where it will record client-side performance.

#### Dedicated Server perf start/stop command

`perf start` will start a recording for 10 seconds capturing metrics such as tick durations, used heap sizes and other more detailed stats.

`perf stop` before the 10-second limit will end the recording early.

## Bugs fixed in 1.17 Pre-release 1

-   [MC-19690](https://bugs.mojang.com/browse/MC-19690) Reducing maxHealth / max\_health can cause fake death
-   [MC-65587](https://bugs.mojang.com/browse/MC-65587) Lag spike while loading player head textures/player skins
-   [MC-104897](https://bugs.mojang.com/browse/MC-104897) End crystals placed on exit portals generated before 1.9 do not respawn the ender dragon
-   [MC-117708](https://bugs.mojang.com/browse/MC-117708) Credits background jitters
-   [MC-118757](https://bugs.mojang.com/browse/MC-118757) Increasing Game State Rain Level values make the game increasingly laggier and distorts UI
-   [MC-148809](https://bugs.mojang.com/browse/MC-148809) Structure block data length limited to 12
-   [MC-163945](https://bugs.mojang.com/browse/MC-163945) Intersecting structures can create corrupted block entities (spawner / chest)
-   [MC-189336](https://bugs.mojang.com/browse/MC-189336) Shifting around servers in the server list crashes the game (ArrayIndexOutOfBoundsException)
-   [MC-192889](https://bugs.mojang.com/browse/MC-192889) When placing certain heads or putting them in entities' head slot the game stutters
-   [MC-197942](https://bugs.mojang.com/browse/MC-197942) Leaves change to stone near Lava Pool (Recurrence of MC-48340)
-   [MC-198957](https://bugs.mojang.com/browse/MC-198957) End Portal Frames change to Stone near Lava Pool
-   [MC-202249](https://bugs.mojang.com/browse/MC-202249) Angering passive mobs in new nether chunks very far away from previously generated chunks, then entering a nether portal causes server to completely freeze
-   [MC-203131](https://bugs.mojang.com/browse/MC-203131) Setting the weight in Template Pool to high values will lag world and can cause out of memory error.
-   [MC-203558](https://bugs.mojang.com/browse/MC-203558) Lighting a candle is sometimes delayed
-   [MC-203661](https://bugs.mojang.com/browse/MC-203661) Flowing liquids look very dark through tinted glass
-   [MC-203704](https://bugs.mojang.com/browse/MC-203704) Candles don't show flame animations when particles are set to "Minimal"
-   [MC-204649](https://bugs.mojang.com/browse/MC-204649) Amethyst blocks don't make chime sounds when walked on by certain mobs
-   [MC-205035](https://bugs.mojang.com/browse/MC-205035) Powder Snow Bucket is not grouped with Snowball or buckets in creative inventory
-   [MC-208604](https://bugs.mojang.com/browse/MC-208604) While the mainhand is empty and there's a loaded crossbow in the offhand, the mainhand will appear invisible
-   [MC-209819](https://bugs.mojang.com/browse/MC-209819) Server crash when pathfinding to player that is teleporting away
-   [MC-211601](https://bugs.mojang.com/browse/MC-211601) Entities are loaded after scheduled ticks are processed causing detector rails, pressure plates, etc. to turn off
-   [MC-212142](https://bugs.mojang.com/browse/MC-212142) Applying glow ink on signs doesn't render the text bright without also having applied a custom color
-   [MC-212146](https://bugs.mojang.com/browse/MC-212146) Glow lichen can generate floating inside underground structures
-   [MC-212207](https://bugs.mojang.com/browse/MC-212207) Geodes generating inside icebergs
-   [MC-213062](https://bugs.mojang.com/browse/MC-213062) A ruined portal generated in an end portal
-   [MC-213799](https://bugs.mojang.com/browse/MC-213799) Dripleaf isn't properly held in the player's hand
-   [MC-214057](https://bugs.mojang.com/browse/MC-214057) Entities no longer showing flame animation when in water/lava at the same time
-   [MC-214636](https://bugs.mojang.com/browse/MC-214636) Small dripleaf leafs can overlap each other and cause z-fighting
-   [MC-214684](https://bugs.mojang.com/browse/MC-214684) Azaleas cannot be placed in flower pots
-   [MC-216276](https://bugs.mojang.com/browse/MC-216276) Lava pools break bedrock with custom world generation
-   [MC-218112](https://bugs.mojang.com/browse/MC-218112) SynchedEntityData is using locks incorrectly
-   [MC-218831](https://bugs.mojang.com/browse/MC-218831) Lots of missing shaders in the game assets
-   [MC-218972](https://bugs.mojang.com/browse/MC-218972) The glowing effect outline omits parts of entities if the entity is invisible
-   [MC-219762](https://bugs.mojang.com/browse/MC-219762) More performant noise blending algorithm in BlendedNoise
-   [MC-221554](https://bugs.mojang.com/browse/MC-221554) When searching, the goat spawn egg appears in the middle of the different boat types
-   [MC-221820](https://bugs.mojang.com/browse/MC-221820) Inconsistency: Enderman is able to pick up flowering azalea, while unable to hold normal azalea bush.
-   [MC-223021](https://bugs.mojang.com/browse/MC-223021) glShaderSource fails on some AMD drivers resulting in a crash on 1.17
-   [MC-223843](https://bugs.mojang.com/browse/MC-223843) Mycelium inside enderman\_holdable.json twice
-   [MC-224159](https://bugs.mojang.com/browse/MC-224159) Absorbtion hearts don't have the wither heart effect
-   [MC-224445](https://bugs.mojang.com/browse/MC-224445) Reloading resource packs with fabulous graphics causes screen to become black, after a few times causes crash for AMD drivers
-   [MC-224778](https://bugs.mojang.com/browse/MC-224778) Game crashes when there is a block with no facing block state in #wall\_corals and a warm ocean tries to generate
-   [MC-224861](https://bugs.mojang.com/browse/MC-224861) Falling blocks disappear for a moment when landing
-   [MC-224862](https://bugs.mojang.com/browse/MC-224862) Azalea and Flowering Azaleas can take bone meal despite being on clay
-   [MC-225010](https://bugs.mojang.com/browse/MC-225010) Closing the inventory in creative mode while having an item on the cursor turns it into a ghost item
-   [MC-225129](https://bugs.mojang.com/browse/MC-225129) Players do not despawn until they respawn
-   [MC-225193](https://bugs.mojang.com/browse/MC-225193) Goats will attempt to ram entities that are outside of the world border
-   [MC-225315](https://bugs.mojang.com/browse/MC-225315) Selected text on signs blinks
-   [MC-225404](https://bugs.mojang.com/browse/MC-225404) The axe is still an appropriate tool for moss carpets
-   [MC-225722](https://bugs.mojang.com/browse/MC-225722) java.lang.IllegalArgumentException: bound must be positive
-   [MC-225773](https://bugs.mojang.com/browse/MC-225773) Axolotls can make ambient noises when they're playing dead
-   [MC-225843](https://bugs.mojang.com/browse/MC-225843) Snow layers can still generate floating over lakes
-   [MC-225850](https://bugs.mojang.com/browse/MC-225850) Grass, tall grass, flower, double flower, fern, large fern and tree can generate on sand or gravel
-   [MC-225853](https://bugs.mojang.com/browse/MC-225853) Minecraft sometimes crashes when trying to start 21w20a for the first time
-   [MC-225895](https://bugs.mojang.com/browse/MC-225895) Floating grass can still generate above lava lakes
-   [MC-225916](https://bugs.mojang.com/browse/MC-225916) Non-waxed oxidized copper blocks don't require at least stone tier to be mined
-   [MC-225919](https://bugs.mojang.com/browse/MC-225919) Coal Ore from fossils can generate through bedrock
-   [MC-225929](https://bugs.mojang.com/browse/MC-225929) Item statistic sorting not functioning
-   [MC-225978](https://bugs.mojang.com/browse/MC-225978) Non-waxed weathered copper blocks appear twice in needs\_stone\_tool.json
-   [MC-226192](https://bugs.mojang.com/browse/MC-226192) Crash upon attempting to create a new scoreboard objective: java.lang.NullPointerException: Cannot invoke "String.toLowerCase(java.util.Locale)" because "â˜ƒ" is null

---

We're now releasing 1.16.5 Release Candidate 1, which addresses two critical stability issues. If no further critical issues are found, we plan to release 1.16.5 on Friday. We hope to release another Caves & Cliffs snapshot next week.

Happy mining!

---

We have now released 1.16.4 Release Candidate 1. If no further critical issues are found, we expect this version to be the full release of 1.16.4 on Thursday.

## Changes in 1.16.4 Release Candidate 1

-   Added an option to hide matched names

### Hide matched names

-   Some servers send chat messages in non-standard formats. With this option on, the game will attempt to apply chat hiding anyway by matching the text in messages

## Fixed bugs in 1.16.4 Release Candidate 1

-   [MC-202614](https://bugs.mojang.com/browse/MC-202614) Search function in social interactions screen only finds names that begin with the letters that you typed in

---

Time for another pre-release! This time around we've fixed some issues with the new social interactions screen and we've also fixed some crashes.

In case you haven't heard, yesterday we announced that Mojang accounts will be migrating into Microsoft accounts. With this pre-release, we are preparing for that by having the game understand the settings and block-list of Microsoft accounts. You can read more about that over [here](https://www.minecraft.net/article/java-edition-moving-house), and you can find answers to questions you might have in the [FAQ](https://help.minecraft.net/hc/articles/360050865492). The FAQ will be continuously updated.

We aim to release 1.16.4 sometime during next week.

## Changes in 1.16.4 Pre-release 2

-   Players blocked in your Microsoft account are now also blocked in the game
-   A button to open a link to the Accessibility Guide can now be found in the Accessibility Options screen

### Social Interactions

-   The status of a player is now listed below their name on the Social Interactions screen
-   A new tab is available to filter by Blocked players in the Social Interactions screen
-   Chat from blocked players is always hidden
-   Realms invites from blocked players are hidden

## Fixed bugs in 1.16.4 Pre-release 2

-   [MC-202150](https://bugs.mojang.com/browse/MC-202150) Slider bar on social menu appears broken
-   [MC-202147](https://bugs.mojang.com/browse/MC-202147) Cursor in Social Interactions & Recipe Book & Anvil menu doesn’t blink
-   [MC-202137](https://bugs.mojang.com/browse/MC-202137) Social Interaction Screen says players for 1 player
-   [MC-202143](https://bugs.mojang.com/browse/MC-202143) Social Interactions search bar does not stay selected when switching tabs, although the cursor remains
-   [MC-202145](https://bugs.mojang.com/browse/MC-202145) Opening the Social Interactions menu in a singleplayer world open to LAN after attempting to join an outdated multiplayer server displays the name of the outdated server instead of the name of the current world
-   [MC-202156](https://bugs.mojang.com/browse/MC-202156) Social Interactions search box entries can go out of the box
-   [MC-202155](https://bugs.mojang.com/browse/MC-202155) Outdated server warn text doesn't actually exist
-   [MC-202136](https://bugs.mojang.com/browse/MC-202136) Social Interaction Toast icon doesn't render properly with Programmer Art resource pack
-   [MC-201885](https://bugs.mojang.com/browse/MC-201885) Divide by zero error in the Ender dragon entity class can cause a server crash and infinite velocity

---

The first pre-release for 1.16.4 is officially out! ​ If you’ve been on the Internet for some time, you’ve probably noticed that you occasionally run into other players that you don’t get along with. To alleviate some of that frustration, we’re introducing a UI element called the “social interactions screen”, which will let you disable chatting with certain players, thus hiding any messages you receive from them. Additionally, the 1.16.4 update will contain some fixes for critical bugs, but other than that, this will be it for this dot-release. ​ Please help us out by testing the new UI and reporting any bugs you find on the [Minecraft Issue Tracker](https://aka.ms/snapshotbugs?ref=launcher). ​

## New Features in 1.16.4 Pre-release 1

​

-   New UI called Social Interactions Screen

​

### Social Interactions Screen

A new screen available in Multiplayer which shows a list of all players on a server so you can can hide chat from any player. ​

-   Opens with a configurable key binding, by default P
-   Whether a player is hidden resets when re-joining a server

​

## Technical Changes in 1.16.4 Pre-release 1

​

-   New network protocol scheme, with a high bit (bit 30) set for snapshots. The protocol version will increase by 1 for each snapshot, but full releases may keep the same protocol version as the previous full release in cases where the network protocols are compatible
-   More information is now added to the crash log in cases where poor performance causes the server to crash

​

## Fixed bugs in 1.16.4 Pre-release 1

​

-   [MC-192434](https://bugs.mojang.com/browse/MC-192434) Netherite Leggings are textured weirdly
-   [MC-199487](https://bugs.mojang.com/browse/MC-199487) WorldGen Deadlock

---

What better way to start the week than with a new release candidate that fixes two bugs? 1.16.3 addresses a duplication exploit, along with a pathfinding issue.

## Fixed bugs in 1.16.3 Release Candidate 1

-   [MC-198678](https://bugs.mojang.com/browse/MC-198678) Giving an item and a gold ingot to a baby piglin and killing it duplicates the item
-   [MC-196449](https://bugs.mojang.com/browse/MC-196449) Piglins, Piglin Brutes, Hoglins and Zoglins have trouble pathfinding to the player when attacking

---

We have now released 1.16.2 Release Candidate 2, fixing a few critical issues. If no further critical issues are found, we expect this version to be the full release of 1.16.2 tomorrow.

## Fixed bugs in 1.16.2 Release Candidate 2

-   [MC-197512](https://bugs.mojang.com/browse/MC-197512) Incompatible resource packs don't display their name and description anymore
-   [MC-197362](https://bugs.mojang.com/browse/MC-197362) Cannot load 2 or more resource packs if the second one is incompatible
-   [MC-197354](https://bugs.mojang.com/browse/MC-197354) Block event lag in 1.16.2-rc1 is still higher than in 1.15.2
-   [MC-197348](https://bugs.mojang.com/browse/MC-197348) Piston heads occasionally appear twice in certain piston setups

---

We have now released 1.16.2 Release Candidate 1, fixing even more stability issues. If no further critical issues are found, we expect this version to be the full release of 1.16.2 on Tuesday next week.

## Technical Changes in 1.16.2 Release Candidate 1

-   The Resource and Data pack version has been raised to 6

## Fixed bugs in 1.16.2 Release Candidate 1

-   [MC-197275](https://bugs.mojang.com/browse/MC-197275) Due to changes to walls, "pack\_format: 5" is not cross-compatible between 1.15 and 1.16
-   [MC-197263](https://bugs.mojang.com/browse/MC-197263) End sky and nether fog don't work on servers
-   [MC-197258](https://bugs.mojang.com/browse/MC-197258) Certain dimensions can cause a game crash
-   [MC-197225](https://bugs.mojang.com/browse/MC-197225) Crash: java.util.concurrent.CompletionException: u: Exception generating new chunk
-   [MC-197197](https://bugs.mojang.com/browse/MC-197197) Game crashes/freezes after creating/entering a Superflat world without presets
-   [MC-194933](https://bugs.mojang.com/browse/MC-194933) Game crashes when loading a custom biome / java.lang.UnsupportedOperationException: Trying to add tag of type 8 to list of 10
-   [MC-190103](https://bugs.mojang.com/browse/MC-190103) Crash when using a nether portal: java.lang.IndexOutOfBoundsException: fromIndex < 0: -2368549

---

We have now released 1.16.2 Pre-release 3, fixing some stability issues.

## Fixed bugs in 1.16.2 Pre-release 3

-   [MC-105248](https://bugs.mojang.com/browse/MC-105248) Wet wolves become nearly black in dark areas
-   [MC-107529](https://bugs.mojang.com/browse/MC-107529) Marker:1 Armor Stands render themself and their equipment dark if inside solid blocks
-   [MC-167756](https://bugs.mojang.com/browse/MC-167756) Wolf is rendered too dark when not directly affected by skylight
-   [MC-191388](https://bugs.mojang.com/browse/MC-191388) "No key position\_predicate in MapLike" console spam
-   [MC-197053](https://bugs.mojang.com/browse/MC-197053) Pressing F3+D clears the pending lines message, but doesn't clear the pending messages
-   [MC-197152](https://bugs.mojang.com/browse/MC-197152) Ghost Blocks can be generated in some piston setups
-   [MC-197218](https://bugs.mojang.com/browse/MC-197218) Piston arm appears twice during retraction in some mechanisms

---

We have now released the second pre-release for Minecraft 1.16.2, in which another round of bugs have been squished!

## Changes in 1.16.2 Pre-release 2

-   Crimson and Warped Roots no longer require shears when mined

## Technical Changes in 1.16.2 Pre-release 2

### Execute Command

-   `execute in` now respects dimension scaling

## Fixed bugs in 1.16.2 Pre-release 2

-   [MC-69876](https://bugs.mojang.com/browse/MC-69876) Pistons at Y=1 do not push downwards / at Y=254 do not push upwards
-   [MC-124320](https://bugs.mojang.com/browse/MC-124320) Endermen can pick up and place snowless snowy grass blocks
-   [MC-130558](https://bugs.mojang.com/browse/MC-130558) Item frames cannot be emptied if gamerule doEntityDrops is set to false
-   [MC-134084](https://bugs.mojang.com/browse/MC-134084) If gamerule sendCommandFeedback is disabled, /msg or /tell don't display the message to the sender
-   [MC-136553](https://bugs.mojang.com/browse/MC-136553) Dyes in creative inventory are in reverse order
-   [MC-152037](https://bugs.mojang.com/browse/MC-152037) Powered, activator and detector rails are deleted when pushed/pulled onto a block they cannot be placed on
-   [MC-187357](https://bugs.mojang.com/browse/MC-187357) Strongholds will not generate in floating\_islands or caves preset
-   [MC-189736](https://bugs.mojang.com/browse/MC-189736) "distance" within predicate no longer works
-   [MC-190552](https://bugs.mojang.com/browse/MC-190552) Demo mode resets position and inventory upon launch
-   [MC-190859](https://bugs.mojang.com/browse/MC-190859) floating\_islands or caves buffet worlds no longer generate strongholds and ender eyes do not locate previously generated strongholds after upgrading to 1.16
-   [MC-192136](https://bugs.mojang.com/browse/MC-192136) Lava damage works differently than in previous versions
-   [MC-192236](https://bugs.mojang.com/browse/MC-192236) Endermen can place blocks on top of item frames on the floor
-   [MC-192371](https://bugs.mojang.com/browse/MC-192371) Paintings in the same block space pop off when chunk loads
-   [MC-192845](https://bugs.mojang.com/browse/MC-192845) Block Event Lag in 1.16 is excessive
-   [MC-194217](https://bugs.mojang.com/browse/MC-194217) Lava sets nether vegetation on fire despite it being fire resistant
-   [MC-194867](https://bugs.mojang.com/browse/MC-194867) Minecarts come out the wrong side of a nether portal and lose momentum when coming back to overworld
-   [MC-194953](https://bugs.mojang.com/browse/MC-194953) Custom Biomes are not useable in Predicates
-   [MC-195803](https://bugs.mojang.com/browse/MC-195803) Mob kill statistics are formatted in reverse: "N killed you times"
-   [MC-195851](https://bugs.mojang.com/browse/MC-195851) "Hat" layer on helmets detaches from Piglins' heads while bartering
-   [MC-196245](https://bugs.mojang.com/browse/MC-196245) Charged creeper does not always drop skull if zombie variants are nearby
-   [MC-196441](https://bugs.mojang.com/browse/MC-196441) Stonecutter/Smithing Table recipes are not given after crafting a stack of more than one
-   [MC-196469](https://bugs.mojang.com/browse/MC-196469) F1 hides the nausea green tint
-   [MC-196473](https://bugs.mojang.com/browse/MC-196473) Pufferfish gives Nausea II instead of the maximum of Nausea I
-   [MC-196653](https://bugs.mojang.com/browse/MC-196653) Creating multiple datapack dimensions which reference the same dimension\_type string causes "unregistered dimension" crash
-   [MC-196743](https://bugs.mojang.com/browse/MC-196743) Custom/modified biomes don't work in the overworld

---

It's time for pre-releases for Minecraft Java Edition 1.16.2!

From now on you should mostly see bug fixes leading up to the full release of 1.16.2 which we expect to happen in a few weeks.

## New Features in 1.16.2 Pre-release 1

-   New accessibility settings have been added to help with visual comfort

### Accessibility

-   Distortion effects such as nausea and the Nether portal overlay can now be reduced
-   At lower values, the nausea effect is replaced with a green overlay as an alternative visualization
-   Field of view effects shown after speed modifiers are applied can now be reduced

## Changes in 1.16.2 Pre-release 1

-   Chains can now be placed in all orientations
-   Endermen will no longer place their held blocks onto bedrock blocks
-   Piglins now become angry with players who open or destroy a Chest Minecart
-   Villagers now lose their job sites when changing dimension
-   Chat delay has been added to the Chat Settings screen

## Technical Changes in 1.16.2 Pre-release 1

-   Custom world generation and dimension settings now use the same folder pattern in data packs as other resources (`namespace/<type>/resource.json`)

## Fixed bugs in 1.16.2 Pre-release 1

-   [MC-73884](https://bugs.mojang.com/browse/MC-73884) Throwable projectiles get destroyed at contact with non solid blocks
-   [MC-125758](https://bugs.mojang.com/browse/MC-125758) Bubble column does not affect egg, snowball, ender pearl, splash potion, lingering potion, fireball and shulker bullet
-   [MC-158987](https://bugs.mojang.com/browse/MC-158987) Raid still continues after a villager turns into a witch
-   [MC-163767](https://bugs.mojang.com/browse/MC-163767) Villagers get ejected from a minecart when converted to a zombie villager
-   [MC-167045](https://bugs.mojang.com/browse/MC-167045) Banners are rendered too dark in the inventory
-   [MC-170900](https://bugs.mojang.com/browse/MC-170900) New Nether plants can be picked up without shears/silk touch
-   [MC-174574](https://bugs.mojang.com/browse/MC-174574) Soul speed doesn't work when slabs and blocks of similar height are placed above the soul sand block
-   [MC-176015](https://bugs.mojang.com/browse/MC-176015) Strider suffocates when player is saddled on and looking up with Warped Fungus on a Stick
-   [MC-176034](https://bugs.mojang.com/browse/MC-176034) You can walk on striders
-   [MC-177651](https://bugs.mojang.com/browse/MC-177651) Despite being cold outside of lava, striders don't care about staying in lava
-   [MC-178061](https://bugs.mojang.com/browse/MC-178061) Chat Delay option doesn't exist in Chat settings
-   [MC-182330](https://bugs.mojang.com/browse/MC-182330) Crossbow-wielding piglins behave weirdly when they try to pursue invisible players
-   [MC-185490](https://bugs.mojang.com/browse/MC-185490) Separated Trader Lamas On Leads Cause TPS Hit
-   [MC-187398](https://bugs.mojang.com/browse/MC-187398) Smithing table and stonecutter recipes are not unlocked when used
-   [MC-187904](https://bugs.mojang.com/browse/MC-187904) Data packs cannot replace settings of vanilla dimensions during world creation
-   [MC-189414](https://bugs.mojang.com/browse/MC-189414) Smithing table doesn't calculate amount of output items correctly
-   [MC-189797](https://bugs.mojang.com/browse/MC-189797) Hoglins, Zoglins, melee Piglins, and Piglin Brutes do not properly attack invisible entities within normal range
-   [MC-191168](https://bugs.mojang.com/browse/MC-191168) Piglins that convert into Zombified Piglins while sitting on a minecart sometimes sink into blocks
-   [MC-192032](https://bugs.mojang.com/browse/MC-192032) Villagers don't always try to claim the closest workstation and are sometimes focussed on a non-existent one or one out of their reach
-   [MC-193213](https://bugs.mojang.com/browse/MC-193213) Leads are positioned incorrectly on players and Wandering Traders
-   [MC-194263](https://bugs.mojang.com/browse/MC-194263) Large End Cities do not generate correctly / get cut off
-   [MC-194299](https://bugs.mojang.com/browse/MC-194299) Template pools fail to load via datapack
-   [MC-194845](https://bugs.mojang.com/browse/MC-194845) Subspace Bubble advancement cannot be completed with 7 km distance
-   [MC-195062](https://bugs.mojang.com/browse/MC-195062) Raids often will not end in defeat when all villagers are dead if there are job sites in the village
-   [MC-195544](https://bugs.mojang.com/browse/MC-195544) Game crashes after killing a mob that is being ridden by a guardian while it is being ridden by a wither skeleton

---

