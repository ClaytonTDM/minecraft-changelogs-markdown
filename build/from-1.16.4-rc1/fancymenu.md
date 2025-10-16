# Minecraft 1.16.4 Release Candidate 1

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

-   [MC-197275](https://bugs.mojang.com/browse/MC-197275) Due to changes to walls, "pack;;_;;format: 5" is not cross-compatible between 1.15 and 1.16
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
-   [MC-191388](https://bugs.mojang.com/browse/MC-191388) "No key position;;_;;predicate in MapLike" console spam
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
-   [MC-187357](https://bugs.mojang.com/browse/MC-187357) Strongholds will not generate in floating;;_;;islands or caves preset
-   [MC-189736](https://bugs.mojang.com/browse/MC-189736) "distance" within predicate no longer works
-   [MC-190552](https://bugs.mojang.com/browse/MC-190552) Demo mode resets position and inventory upon launch
-   [MC-190859](https://bugs.mojang.com/browse/MC-190859) floating;;_;;islands or caves buffet worlds no longer generate strongholds and ender eyes do not locate previously generated strongholds after upgrading to 1.16
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
-   [MC-196653](https://bugs.mojang.com/browse/MC-196653) Creating multiple datapack dimensions which reference the same dimension;;_;;type string causes "unregistered dimension" crash
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

Out with the old, and in with the new! Today we're introducing a new naming convention (well, it's been a while) for Minecraft Java Edition. Previously, the last pre-release was, in fact, the release candidate, but we're now making that more clear by changing the name to be "release candidate". This means that if there are no major issues following this release, no further changes will be done before the full release.

Speaking of the full release: In case you've been living under a rock (it's Minecraft, so that's OK), [we're releasing the Nether Update on Tuesday, June 23](https://www.minecraft.net/article/the-nether-update-has-date-). That's next week!

## Fixed Bugs in 1.16 Release Candidate 1

-   Fixed issues with the Nether surface generation, causing issues like floating lava and crimson forests without nylium
-   [MC-150543](https://bugs.mojang.com/browse/MC-150543) Using a stonecutter can sometimes crash the game in certain circumstances
-   [MC-174790](https://bugs.mojang.com/browse/MC-174790) Mob on turtle eggs causes the game to crash
-   [MC-181833](https://bugs.mojang.com/browse/MC-181833) Crash on world startup after playing world in 20w18a

---

Squish, squash is the sound bugs make when you squish them. Or was it squash them? Anyway, here's pre-release 8 with more bug fixes.

## Fixed Bugs in 1.16 Pre-Release 8

-   [MC-114030](https://bugs.mojang.com/browse/MC-114030) Structure blocks take and apply NBT data of entities and tile entities directly instead of a copy when loading and saving structures
-   [MC-127971](https://bugs.mojang.com/browse/MC-127971) Trying to throw a trident while having a shield or bow equipped will make the trident appear backwards in your hand
-   [MC-153483](https://bugs.mojang.com/browse/MC-153483) When Swapping Tridents between hands the trident being held doesnt swap visually, it just flips backwards
-   [MC-159820](https://bugs.mojang.com/browse/MC-159820) 3rd person reverse trident bug
-   [MC-179309](https://bugs.mojang.com/browse/MC-179309) Trident animates backwards while eating
-   [MC-187953](https://bugs.mojang.com/browse/MC-187953) Adding items to #minecraft:small;;_;;flowers item tag and feeding them to brown mooshrooms crashes the game
-   [MC-188746](https://bugs.mojang.com/browse/MC-188746) Not selecting a biome for "Floating Islands" world type spawns an empty world
-   [MC-188859](https://bugs.mojang.com/browse/MC-188859) Incorrect throwing animation for tridents
-   [MC-189007](https://bugs.mojang.com/browse/MC-189007) When entering or leaving swimming mode both arms now move parallel instead of symmetrical
-   [MC-189782](https://bugs.mojang.com/browse/MC-189782) Large ferns only drop one small fern when harvested
-   [MC-189858](https://bugs.mojang.com/browse/MC-189858) Leads can disappear when transporting a mob through a nether portal
-   [MC-189937](https://bugs.mojang.com/browse/MC-189937) Saddled pigs accumulate speed when ridden in water
-   [MC-189970](https://bugs.mojang.com/browse/MC-189970) Selected worlds using keyboard nav does not enable world-specific options such as Play, Edit, Delete, and Re-Create
-   [MC-189973](https://bugs.mojang.com/browse/MC-189973) ClassCastException when bee with passenger flies through village at night
-   [MC-190005](https://bugs.mojang.com/browse/MC-190005) Piglins can spawn with gear with too many enchantments, including multiple enchantments of the same type
-   [MC-190036](https://bugs.mojang.com/browse/MC-190036) Passive mobs do not spawn in floating island world type
-   [MC-190124](https://bugs.mojang.com/browse/MC-190124) Grass decays too quickly when covered in water
-   [MC-190166](https://bugs.mojang.com/browse/MC-190166) Game crashes when burning a tree in a custom dimension: java.lang.NullPointerException: Exception while ticking

---

