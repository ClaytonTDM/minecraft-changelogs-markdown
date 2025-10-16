# Minecraft 1.16.4 Pre-Release 1

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

# Minecraft 1.16.3 Release Candidate 1

What better way to start the week than with a new release candidate that fixes two bugs? 1.16.3 addresses a duplication exploit, along with a pathfinding issue.

## Fixed bugs in 1.16.3 Release Candidate 1

-   [MC-198678](https://bugs.mojang.com/browse/MC-198678) Giving an item and a gold ingot to a baby piglin and killing it duplicates the item
-   [MC-196449](https://bugs.mojang.com/browse/MC-196449) Piglins, Piglin Brutes, Hoglins and Zoglins have trouble pathfinding to the player when attacking

---

# Minecraft 1.16.2 Release Candidate 2

We have now released 1.16.2 Release Candidate 2, fixing a few critical issues. If no further critical issues are found, we expect this version to be the full release of 1.16.2 tomorrow.

## Fixed bugs in 1.16.2 Release Candidate 2

-   [MC-197512](https://bugs.mojang.com/browse/MC-197512) Incompatible resource packs don't display their name and description anymore
-   [MC-197362](https://bugs.mojang.com/browse/MC-197362) Cannot load 2 or more resource packs if the second one is incompatible
-   [MC-197354](https://bugs.mojang.com/browse/MC-197354) Block event lag in 1.16.2-rc1 is still higher than in 1.15.2
-   [MC-197348](https://bugs.mojang.com/browse/MC-197348) Piston heads occasionally appear twice in certain piston setups

---

# Minecraft 1.16.2 Release Candidate 1

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

# Minecraft 1.16.2 Pre-Release 3

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

# Minecraft 1.16.2 Pre-Release 2

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

# Minecraft 1.16.2 Pre-Release 1

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

# Minecraft 1.16 Release Candidate

Out with the old, and in with the new! Today we're introducing a new naming convention (well, it's been a while) for Minecraft Java Edition. Previously, the last pre-release was, in fact, the release candidate, but we're now making that more clear by changing the name to be "release candidate". This means that if there are no major issues following this release, no further changes will be done before the full release.

Speaking of the full release: In case you've been living under a rock (it's Minecraft, so that's OK), [we're releasing the Nether Update on Tuesday, June 23](https://www.minecraft.net/article/the-nether-update-has-date-). That's next week!

## Fixed Bugs in 1.16 Release Candidate 1

-   Fixed issues with the Nether surface generation, causing issues like floating lava and crimson forests without nylium
-   [MC-150543](https://bugs.mojang.com/browse/MC-150543) Using a stonecutter can sometimes crash the game in certain circumstances
-   [MC-174790](https://bugs.mojang.com/browse/MC-174790) Mob on turtle eggs causes the game to crash
-   [MC-181833](https://bugs.mojang.com/browse/MC-181833) Crash on world startup after playing world in 20w18a

---

# Minecraft 1.16 Pre-Release 8

Squish, squash is the sound bugs make when you squish them. Or was it squash them? Anyway, here's pre-release 8 with more bug fixes.

## Fixed Bugs in 1.16 Pre-Release 8

-   [MC-114030](https://bugs.mojang.com/browse/MC-114030) Structure blocks take and apply NBT data of entities and tile entities directly instead of a copy when loading and saving structures
-   [MC-127971](https://bugs.mojang.com/browse/MC-127971) Trying to throw a trident while having a shield or bow equipped will make the trident appear backwards in your hand
-   [MC-153483](https://bugs.mojang.com/browse/MC-153483) When Swapping Tridents between hands the trident being held doesnt swap visually, it just flips backwards
-   [MC-159820](https://bugs.mojang.com/browse/MC-159820) 3rd person reverse trident bug
-   [MC-179309](https://bugs.mojang.com/browse/MC-179309) Trident animates backwards while eating
-   [MC-187953](https://bugs.mojang.com/browse/MC-187953) Adding items to #minecraft:small\_flowers item tag and feeding them to brown mooshrooms crashes the game
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

# Minecraft 1.16 Pre-Release 7

We've now released pre-release 7 to fix a few more bugs.

## Fixed Bugs in 1.16 Pre-Release 7

-   [MC-176447](https://bugs.mojang.com/browse/MC-176447) Striders left/right leg uses the same texture
-   [MC-180467](https://bugs.mojang.com/browse/MC-180467) World Border is no longer fully solid
-   [MC-183673](https://bugs.mojang.com/browse/MC-183673) Skeletons not spawning frequently in Soul Sand Valley
-   [MC-185126](https://bugs.mojang.com/browse/MC-185126) Unable to jump one block high from flowing lava that has level 3 or lower
-   [MC-186228](https://bugs.mojang.com/browse/MC-186228) Zombified piglins' sleeve layers are not held upwards like their arms
-   [MC-188552](https://bugs.mojang.com/browse/MC-188552) Zombified Piglins drop less XP than before
-   [MC-188838](https://bugs.mojang.com/browse/MC-188838) Heads and skulls on a wall cause z-fighting
-   [MC-189824](https://bugs.mojang.com/browse/MC-189824) Overworld/general gameplay music can play in the nether in creative mode
-   [MC-189846](https://bugs.mojang.com/browse/MC-189846) Turtle eggs hatching broken, game checking for sand one block too deep
-   [MC-189856](https://bugs.mojang.com/browse/MC-189856) Unable to set nether portal block with /setblock or /fill
-   [MC-189867](https://bugs.mojang.com/browse/MC-189867) Cannot use /setblock and /fill to place blocks in positions they cannot normally be in
-   [MC-189868](https://bugs.mojang.com/browse/MC-189868) Player gets set on fire and extinguished continuously when standing in fire in Creative mode
-   [MC-189895](https://bugs.mojang.com/browse/MC-189895) Redstone in jungle temple / pyramid no longer connects to blocks and redstone components properly
-   [MC-189905](https://bugs.mojang.com/browse/MC-189905) The player can get stuck inside of the world border
-   [MC-189971](https://bugs.mojang.com/browse/MC-189971) Clicking the "Take me back" button causes translucent blocks to stop rendering

---

# Minecraft 1.16 Pre-Release 6

Start your new week by not slipping and sliding on blocks that should not be slippy or slidey - we've now released pre-release 6 for Minecraft Java Edition 1.16.

## Changes in 1.16 Pre-Release 6

-   Tweaked map colours of crimson and warped materials
-   There is now a text that says "Search..." in the recipe book that higlights that you can... search...
-   Opening the game mode switcher now has a default selection if you have not entered a different game mode before in that world.
    -   In this scenario, by default, you will now select Creative if currently in any other game mode, and Survival if currently in Creative

## Technical Changes in 1.16 Pre-release 6

​ Added `player_interacted_with_entity` advancement trigger

-   `item` matches the item which was in the player's hand during interaction
-   `entity` matches the entity which was interacted with

## Fixed Bugs in 1.16 Pre-Release 6

-   [MC-45749](https://bugs.mojang.com/browse/MC-45749) Potion particles spread always from the north-west corner of a block, regardless of impact
-   [MC-163333](https://bugs.mojang.com/browse/MC-163333) Plains houses and decorations can generate in taiga villages
-   [MC-166593](https://bugs.mojang.com/browse/MC-166593) Zombie villagers in zombie villages aren't persistent
-   [MC-167386](https://bugs.mojang.com/browse/MC-167386) binding hotbar hotkeys to mouse thumb button won't interact the way it should
-   [MC-167554](https://bugs.mojang.com/browse/MC-167554) Enchantment glint on shields is rendered incorrectly
-   [MC-171543](https://bugs.mojang.com/browse/MC-171543) Ravagers can easily be knocked back with the knockback enchantment
-   [MC-172027](https://bugs.mojang.com/browse/MC-172027) Datafixer for minecraft:recipes/misc/composter advancement is missing
-   [MC-172442](https://bugs.mojang.com/browse/MC-172442) Piglins don't spawn with enchanted gear
-   [MC-172592](https://bugs.mojang.com/browse/MC-172592) Breaking a larger than normally possible Nether portal makes the game crash with a java.lang.StackOverflowError
-   [MC-174279](https://bugs.mojang.com/browse/MC-174279) Baby piglins don't run from wither skeletons
-   [MC-175993](https://bugs.mojang.com/browse/MC-175993) Enchantment glint of lodestone compass or enchanted compass/clock jumps when compass/clock rotates
-   [MC-177929](https://bugs.mojang.com/browse/MC-177929) End gateways don't always teleport the player when throwing an ender pearl into it
-   [MC-178573](https://bugs.mojang.com/browse/MC-178573) Piglins are afraid of extinguished soul campfires
-   [MC-178947](https://bugs.mojang.com/browse/MC-178947) Explosion damage can be blocked by fire
-   [MC-181465](https://bugs.mojang.com/browse/MC-181465) Bartering with a piglin with an equipped shield using right click deletes the shield instead of dropping it on the ground
-   [MC-182309](https://bugs.mojang.com/browse/MC-182309) Command autocomplete doesn't sort strings that start with the given word to the top
-   [MC-182325](https://bugs.mojang.com/browse/MC-182325) Iron golem causes lag when it can't attack its enemies
-   [MC-183759](https://bugs.mojang.com/browse/MC-183759) Oh Shiny advancement doesn't activate when right clicking
-   [MC-184277](https://bugs.mojang.com/browse/MC-184277) Last game mode for game mode switcher and F3 + N is always survival after relogging
-   [MC-184813](https://bugs.mojang.com/browse/MC-184813) Superflat world corruption when converting the world
-   [MC-186614](https://bugs.mojang.com/browse/MC-186614) New Nether mobs make too many noises under certain circumstances
-   [MC-186617](https://bugs.mojang.com/browse/MC-186617) Zombified piglins sound angry too many times when hit constantly
-   [MC-187031](https://bugs.mojang.com/browse/MC-187031) Piglin swinging animation does not match attacking or targeting animation
-   [MC-187420](https://bugs.mojang.com/browse/MC-187420) Zombified piglins make angry sounds too frequently
-   [MC-187490](https://bugs.mojang.com/browse/MC-187490) Piglins that pick up gold while pathfinding will continue pathfinding
-   [MC-187522](https://bugs.mojang.com/browse/MC-187522) Server doesn't generate amplified / large biome worlds
-   [MC-187622](https://bugs.mojang.com/browse/MC-187622) Piglins can still remove curse of binding enchanted helmets / carved pumpkins after they've inspected a golden helmet
-   [MC-187853](https://bugs.mojang.com/browse/MC-187853) Water / Lava doesnt move entities unless they move first
-   [MC-188581](https://bugs.mojang.com/browse/MC-188581) Glass placed in item frame isn't rendered properly
-   [MC-188659](https://bugs.mojang.com/browse/MC-188659) New "swap items with offhand" feature doesn't work if the control is bound to the 4th or 5th mouse button
-   [MC-188702](https://bugs.mojang.com/browse/MC-188702) When loading in a redstone dot via a structure block, the dot gets set to a redstone cross
-   [MC-188987](https://bugs.mojang.com/browse/MC-188987) When standing on certain non-full blocks, the player gets pushed off if there is a lower area next to the block
-   [MC-189081](https://bugs.mojang.com/browse/MC-189081) Chains create water sources
-   [MC-189256](https://bugs.mojang.com/browse/MC-189256) Hoglin and zoglin tusks textures are not separate
-   [MC-189326](https://bugs.mojang.com/browse/MC-189326) Lecterns don't stack with other lecterns after being placed down and broken

---

# Minecraft 1.16 Pre-Release 5

Spend your weekend with this brand new fifth pre-release for Minecraft Java Edition 1.16 - it has a check to warn you not to try to run with too high graphics settings for your system and a bunch of bug fixes.

## Changes in 1.16 Pre-Release 5

-   Added a GPU warn list for graphics drivers that are known to have rendering issues with Fabulous graphics
-   If your GPU driver is detected as problematic then a warning message will be displayed with details of the detected problem
-   This warning message can be ignored, but support cannot be provided for graphics drivers on the warn list running Fabulous

## Fixed Bugs in 1.16 Pre-Release 5

-   [MC-141934](https://bugs.mojang.com/browse/MC-141934) Ctrl + Pick block on a lectern does not display its book despite being saved to NBT
-   [MC-148955](https://bugs.mojang.com/browse/MC-148955) Iron golems can spawn inside of non-full blocks
-   [MC-149308](https://bugs.mojang.com/browse/MC-149308) Thrown items appear right in front of head for a frame
-   [MC-166276](https://bugs.mojang.com/browse/MC-166276) Thrown items and blocks sometimes appear black for an instant
-   [MC-166413](https://bugs.mojang.com/browse/MC-166413) Item frame turns black for an instant when being placed
-   [MC-166718](https://bugs.mojang.com/browse/MC-166718) Mobs no longer suffocate inside of soul sand, farmland or grass paths
-   [MC-167359](https://bugs.mojang.com/browse/MC-167359) Items are bright for a brief moment after being broken
-   [MC-167362](https://bugs.mojang.com/browse/MC-167362) Item frames are bright for a brief moment when placed
-   [MC-177361](https://bugs.mojang.com/browse/MC-177361) Villagers/wandering traders don't flee away from zoglins
-   [MC-180867](https://bugs.mojang.com/browse/MC-180867) Jukeboxes grabbed with an NBT+ picker do not release discs on right click.
-   [MC-181605](https://bugs.mojang.com/browse/MC-181605) Right-clicking a Respawn Anchor with an item in off-hand uses that item
-   [MC-182119](https://bugs.mojang.com/browse/MC-182119) Game mode description text is no longer centered and now extends off the screen in some languages
-   [MC-183469](https://bugs.mojang.com/browse/MC-183469) Mobs do not pathfind around holes or lava
-   [MC-185777](https://bugs.mojang.com/browse/MC-185777) Shift-clicking a netherite ingot in a smithing table moves the ingot to gear slot
-   [MC-186206](https://bugs.mojang.com/browse/MC-186206) Water tinted rendered differently behind glass top versus sides
-   [MC-188468](https://bugs.mojang.com/browse/MC-188468) User Control for "Swap Item with Offhand" gets reset when upgrading from 1.16pre-2 to 3
-   [MC-188489](https://bugs.mojang.com/browse/MC-188489) "Switch item with offhand" inventory keyboard shortcut still works in Search Items creative tab, overriding text input
-   [MC-188505](https://bugs.mojang.com/browse/MC-188505) Attacking an entity while sneaking cancels sneaking for a moment, then desyncs client and server about player's height
-   [MC-188509](https://bugs.mojang.com/browse/MC-188509) Zombified Piglins drop experience but not gold ingots when they die while aggressive
-   [MC-188542](https://bugs.mojang.com/browse/MC-188542) Custom world gen settings causes minecraft to crash upon import
-   [MC-188633](https://bugs.mojang.com/browse/MC-188633) Small mobs drown while in boat
-   [MC-188652](https://bugs.mojang.com/browse/MC-188652) Gamerules doMobLoot and doTileDrops have the same description in gamerule menu
-   [MC-188655](https://bugs.mojang.com/browse/MC-188655) Number keys in Creative search override typing in the search bar, resulting in unintentional hotbar item switching
-   [MC-188675](https://bugs.mojang.com/browse/MC-188675) Bed heads, tall flowers and bottom doors drop two items
-   [MC-188678](https://bugs.mojang.com/browse/MC-188678) Milking a cow/mooshroom for milk or mushroom stew consumes the item without giving anything back
-   [MC-188691](https://bugs.mojang.com/browse/MC-188691) Can no longer light Nether Portal using Fire Charge on the side of Obsidian

---

# Minecraft 1.16 Pre-Release 4

We've now released Minecraft 1.16 Pre-release 4, with tweaked spawn rates and another round of bug fixes.

## Changes in 1.16 Pre-Release 4

-   Tweaked hostile spawn rates in Warped Forests and Soulsand Valleys

## Fixed Bugs in 1.16 Pre-Release 4

-   [MC-136085](https://bugs.mojang.com/browse/MC-136085) Blocks attached to multi-block blocks are deleted when breaking the other half of the block
-   [MC-177463](https://bugs.mojang.com/browse/MC-177463) Crash report "Connection:" field contains unuseful value (Object.toString())
-   [MC-179851](https://bugs.mojang.com/browse/MC-179851) Attribute generic.movement\_speed does not work in /attribute
-   [MC-180967](https://bugs.mojang.com/browse/MC-180967) Advancement description JSON can ignore the first specified color
-   [MC-181498](https://bugs.mojang.com/browse/MC-181498) Using a fire charge on top of fire briefly creates another fire on top of it
-   [MC-181556](https://bugs.mojang.com/browse/MC-181556) Baby Zombified Piglins float while riding striders
-   [MC-181576](https://bugs.mojang.com/browse/MC-181576) Worlds which are already open in another instance of Minecraft can be selected with arrow keys and tab
-   [MC-184613](https://bugs.mojang.com/browse/MC-184613) End Stone generates in Floating Islands setting
-   [MC-184644](https://bugs.mojang.com/browse/MC-184644) Cave buffet generator generates with netherrack, even if using a non-nether biome
-   [MC-186468](https://bugs.mojang.com/browse/MC-186468) Although reload failed, the game will also tell you "Disabled data pack \[XXX\]"
-   [MC-187419](https://bugs.mojang.com/browse/MC-187419) Hand animation is not played when feeding horses or donkeys with golden carrots
-   [MC-188352](https://bugs.mojang.com/browse/MC-188352) Creative mode cow milking / mushroom stewing inconsistent with picking up placed fluids
-   [MC-188451](https://bugs.mojang.com/browse/MC-188451) Game crashes when dispensing a shulker box from a dispenser "java.lang.NullPointerException: Exception while ticking"
-   [MC-188463](https://bugs.mojang.com/browse/MC-188463) Transparent dropped items render in wrong order when behind entities when graphics setting is set to fabulous
-   [MC-188467](https://bugs.mojang.com/browse/MC-188467) "Sound Director" in credits is too light compared to the rest of the text, and is missing an "S"
-   [MC-188517](https://bugs.mojang.com/browse/MC-188517) Cannot create multiple empty tags in a datapack
-   [MC-188519](https://bugs.mojang.com/browse/MC-188519) Clouds render on top of blocks
-   [MC-188528](https://bugs.mojang.com/browse/MC-188528) Particles render on top of stained glass

---

# Minecraft 1.16 Pre-Release 3

Another pre-release is now available for Minecraft: Java Edition! This pre-release fixes a bunch of bugs, but we also made a few minor tweaks. The Nether Update is closing in and we aim to release the update within a couple of weeks.

## Changes in 1.16 Pre-release 3

​

-   Food can now be placed on unlit campfires
-   Made Nether Fortresses slightly more common
-   Visibility under lava is now slightly better when under the effect of fire resistance
-   Piglins now hear you break a chest or block of gold (or similar) even if your are our of line of sight, and will assume you are stealing
-   Game rule descriptions now span multiple lines if needed on the game rules screen
-   A loading screen is now displayed while the game is reading world data for loading, creating or re-creating a world
-   The game will now attempt to recover worlds broken in 1.16 Pre-release 1

​

## Technical changes in 1.16 Pre-release 3

​ Region files are now only opened in synchronous mode on Windows, not on other operating systems. Status of this feature can be manually controlled by following options:

-   For dedicated servers: `sync-chunk-writes` within `server.properties`
-   For clients: `syncChunkWrites` within `options.txt`

## Fixed Bugs in 1.16 Pre-Release 3

-   [MC-13823](https://bugs.mojang.com/browse/MC-13823) Leads are incorrectly positioned on certain entities
-   [MC-14680](https://bugs.mojang.com/browse/MC-14680) Lead is shifted upwards or downwards based on leashed entity height
-   [MC-27535](https://bugs.mojang.com/browse/MC-27535) Mobs can sometimes still despawn, even if named with a name tag
-   [MC-84610](https://bugs.mojang.com/browse/MC-84610) Off-hand hotkey doesn't work in inventories
-   [MC-131286](https://bugs.mojang.com/browse/MC-131286) Attack will use right hand instead of left hand when swimming (main hand: left)
-   [MC-134608](https://bugs.mojang.com/browse/MC-134608) Certain Spawner Tag Conditions Induce Game Crash
-   [MC-143473](https://bugs.mojang.com/browse/MC-143473) Teleporting a mob while it is pathfinding will make it navigate back to where it was originally going
-   [MC-152157](https://bugs.mojang.com/browse/MC-152157) "Marie Stålkrantz" is not the right color in game credits
-   [MC-159371](https://bugs.mojang.com/browse/MC-159371) Leads are incorrectly positioned on bees
-   [MC-159502](https://bugs.mojang.com/browse/MC-159502) Bees don't avoid water; killing themselves
-   [MC-160520](https://bugs.mojang.com/browse/MC-160520) Bee's wandering AI tries to go through three-way corners
-   [MC-163921](https://bugs.mojang.com/browse/MC-163921) Placing a block while looking at redstone ore plays no sound
-   [MC-166346](https://bugs.mojang.com/browse/MC-166346) Transparent blocks do not render properly with tripwire above
-   [MC-166880](https://bugs.mojang.com/browse/MC-166880) Pufferfish spikes model seems to be broken
-   [MC-167043](https://bugs.mojang.com/browse/MC-167043) Enchantment glint does only apply to the handle of shields with banners
-   [MC-169008](https://bugs.mojang.com/browse/MC-169008) Using End portal in the Nether teleports the player to the End, but at the same coordinates the player was in the Nether
-   [MC-171618](https://bugs.mojang.com/browse/MC-171618) Players wearing armor take less damage from burning when standing in fire under certain conditions
-   [MC-171810](https://bugs.mojang.com/browse/MC-171810) Some Mojang employees are not mentioned in the credits
-   [MC-171969](https://bugs.mojang.com/browse/MC-171969) Fall damage is negated when stepping up after falling
-   [MC-172053](https://bugs.mojang.com/browse/MC-172053) Nether particles get stuck on the bottom of blocks
-   [MC-172105](https://bugs.mojang.com/browse/MC-172105) When a piglin is dancing, targeting or looking at an item, the chestplate the piglin is wearing does not adjust to the piglin's pose
-   [MC-172110](https://bugs.mojang.com/browse/MC-172110) Texture of turtle shells is missing when worn by a piglin or zombified piglin
-   [MC-172871](https://bugs.mojang.com/browse/MC-172871) Unable to spawn wither in horizontal arrangement below y level 2
-   [MC-173310](https://bugs.mojang.com/browse/MC-173310) Observer powered texture doesn't match unpowered
-   [MC-173404](https://bugs.mojang.com/browse/MC-173404) Desync when mounting an entity while sneaking
-   [MC-173825](https://bugs.mojang.com/browse/MC-173825) Bats break turtle eggs
-   [MC-176094](https://bugs.mojang.com/browse/MC-176094) Baby zombified piglin chicken jockeys can spawn riding striders
-   [MC-177336](https://bugs.mojang.com/browse/MC-177336) 'Failed to access level' when opening a world from a CIFS mount on Ubuntu
-   [MC-177530](https://bugs.mojang.com/browse/MC-177530) The new minecraft:attributes registry is plural, while all the others are singular
-   [MC-177542](https://bugs.mojang.com/browse/MC-177542) Chunk loading and saving is extremely slow when sync-chunk-writes=true
-   [MC-177626](https://bugs.mojang.com/browse/MC-177626) Spruce generation is broken
-   [MC-177694](https://bugs.mojang.com/browse/MC-177694) Zombified Piglin Spawn Egg is placed before Zombie Villager Spawn Egg in the creative inventory
-   [MC-177712](https://bugs.mojang.com/browse/MC-177712) Nether portal blocks do not have loot tables
-   [MC-177795](https://bugs.mojang.com/browse/MC-177795) Overworld music can start playing in the Nether
-   [MC-177863](https://bugs.mojang.com/browse/MC-177863) Shroomlights cannot be composted
-   [MC-177876](https://bugs.mojang.com/browse/MC-177876) Striders are now much rarer
-   [MC-178010](https://bugs.mojang.com/browse/MC-178010) Lena Raine does not appear in credits
-   [MC-178338](https://bugs.mojang.com/browse/MC-178338) Striders only get warm when lava touches their legs
-   [MC-179140](https://bugs.mojang.com/browse/MC-179140) Sea guardians have an odd swimming behavior
-   [MC-180603](https://bugs.mojang.com/browse/MC-180603) Wrong structures are generated in superflat worlds
-   [MC-181630](https://bugs.mojang.com/browse/MC-181630) Advancement trigger "minecraft:tick" does not support standard "player" predicate
-   [MC-181813](https://bugs.mojang.com/browse/MC-181813) Edit "g"ame "r"ules are not capitalized in the Game Rules menu title
-   [MC-181884](https://bugs.mojang.com/browse/MC-181884) Falling quickly/Flying with Elytra/Swimming with Riptide Trident and throwing a projectile will cause it to hit the player
-   [MC-182076](https://bugs.mojang.com/browse/MC-182076) Horse jumping sound is unused
-   [MC-182249](https://bugs.mojang.com/browse/MC-182249) Problems with potted\_cactus.json block model file
-   [MC-182766](https://bugs.mojang.com/browse/MC-182766) Recipe book search function does not work if recipe book was not open before
-   [MC-182909](https://bugs.mojang.com/browse/MC-182909) Esc from Customised World's Biome selection screen kicks us back to main menu
-   [MC-183018](https://bugs.mojang.com/browse/MC-183018) When sneaking while flying underwater in Creative, the player exits flying mode after a few seconds
-   [MC-183402](https://bugs.mojang.com/browse/MC-183402) Tutorial doesn't advance when breaking nether tree
-   [MC-183554](https://bugs.mojang.com/browse/MC-183554) Ruined portals generated in lava lakes unnaturally displace lava, resulting in weird borders
-   [MC-183588](https://bugs.mojang.com/browse/MC-183588) Stray emerald block in structure bastion/treasure/big\_air\_full
-   [MC-183594](https://bugs.mojang.com/browse/MC-183594) The 5th large inner and outer hoglin stables do not generate in bastions
-   [MC-183599](https://bugs.mojang.com/browse/MC-183599) Some hoglin stable stair structures do not generate
-   [MC-183762](https://bugs.mojang.com/browse/MC-183762) Description of F3+N in help menu still describes the old functionality
-   [MC-183809](https://bugs.mojang.com/browse/MC-183809) Large Oak Trees replace blocks
-   [MC-183880](https://bugs.mojang.com/browse/MC-183880) Distracting baby piglins with gold grants the 'Oh Shiny' advancement
-   [MC-183915](https://bugs.mojang.com/browse/MC-183915) Wall Heads & Skulls are slightly offset from block selection outline
-   [MC-183931](https://bugs.mojang.com/browse/MC-183931) nether fortress mobs no longer spawn in extended bounding box
-   [MC-183933](https://bugs.mojang.com/browse/MC-183933) show\_text tellraw hover events don't work for components that need resolving (nbt, score, selector)
-   [MC-184093](https://bugs.mojang.com/browse/MC-184093) Using an end gateway teleports the player half a block too high
-   [MC-184250](https://bugs.mojang.com/browse/MC-184250) Font of the enchantments displayed in the enchanting table is italic
-   [MC-184608](https://bugs.mojang.com/browse/MC-184608) "Unknown biome, defaulting to plains" error upon launching the game
-   [MC-184612](https://bugs.mojang.com/browse/MC-184612) Import Settings "s" isn't capitalized
-   [MC-184613](https://bugs.mojang.com/browse/MC-184613) End Stone generates in Floating Islands setting
-   [MC-184644](https://bugs.mojang.com/browse/MC-184644) Cave buffet generator generates with netherrack, even if using a non-nether biome
-   [MC-184653](https://bugs.mojang.com/browse/MC-184653) \[Crash\] "java.lang.IllegalArgumentException: value already present:" Game crashes when worldgen dimension type presets are not unique
-   [MC-184675](https://bugs.mojang.com/browse/MC-184675) Superflat void preset doesn't have a starting platform again
-   [MC-184699](https://bugs.mojang.com/browse/MC-184699) '/spreadplayers under' does not prevent invalid values
-   [MC-184723](https://bugs.mojang.com/browse/MC-184723) The "i" in "World Type: Floating islands" is not capitalized
-   [MC-184757](https://bugs.mojang.com/browse/MC-184757) \[Crash\] "java.lang.NullPointerException: Ticking memory connection" on loading a dimension with debug chunk generator
-   [MC-184887](https://bugs.mojang.com/browse/MC-184887) You can spawn in the bedrock ceiling of a Caves world
-   [MC-184900](https://bugs.mojang.com/browse/MC-184900) Newline in tellraw adds a space at the beginning of the new line
-   [MC-184984](https://bugs.mojang.com/browse/MC-184984) Game crashes after generating multiple worlds in succession
-   [MC-185004](https://bugs.mojang.com/browse/MC-185004) \[Crash\] java.lang.NullPointerException Crash on entering end/nether portal when dimension is removed in worldgen settings
-   [MC-185164](https://bugs.mojang.com/browse/MC-185164) Bottom half of icebergs always generate at y=62 regardless of sea\_level
-   [MC-185285](https://bugs.mojang.com/browse/MC-185285) Entering the End or the Nether after creating and reentering a debug world crashes the game
-   [MC-185299](https://bugs.mojang.com/browse/MC-185299) Villagers cannot be summoned with a specific type unless you also specify a profession
-   [MC-185363](https://bugs.mojang.com/browse/MC-185363) sync-chunk-writes often takes over a minute to close a world
-   [MC-185417](https://bugs.mojang.com/browse/MC-185417) Maps reset on upgrade
-   [MC-185616](https://bugs.mojang.com/browse/MC-185616) Turtle eggs can't hatch on red sand
-   [MC-185949](https://bugs.mojang.com/browse/MC-185949) Copy "C" in Click to Copy to Clipboard isn't capitalized
-   [MC-186078](https://bugs.mojang.com/browse/MC-186078) Transparent items render in front of transparent blocks on some graphics cards when graphics setting is set to fabulous
-   [MC-186084](https://bugs.mojang.com/browse/MC-186084) Piglin head and torso floats and detaches during celebration dance
-   [MC-186085](https://bugs.mojang.com/browse/MC-186085) Player is unable to interact with the world after dismounting a boat while it's moving
-   [MC-186091](https://bugs.mojang.com/browse/MC-186091) When you stop swimming, "diving underwater" sound occurs and vision flashes
-   [MC-186092](https://bugs.mojang.com/browse/MC-186092) The head of a piglin becomes offset after performing their celebration dance
-   [MC-186097](https://bugs.mojang.com/browse/MC-186097) Pigs are moving very slowly
-   [MC-186248](https://bugs.mojang.com/browse/MC-186248) "m" in Safe Mode button isn't capitalized
-   [MC-186263](https://bugs.mojang.com/browse/MC-186263) "b" & "l" in Create Backup & Load isn't capitalized
-   [MC-186337](https://bugs.mojang.com/browse/MC-186337) The lighting of the "Client" doesn't correspond to that of the "Server"
-   [MC-186353](https://bugs.mojang.com/browse/MC-186353) The "s" and "m" in "Edit sign message" are uncapitalized
-   [MC-186403](https://bugs.mojang.com/browse/MC-186403) Swimming up on the side of flowing water no longer prevents the player from drowning
-   [MC-186492](https://bugs.mojang.com/browse/MC-186492) Lily pad placement in creative mode causes item on hotbar to flicker/vanish
-   [MC-186905](https://bugs.mojang.com/browse/MC-186905) "Superflat Customization" screen resets every time you open it and does not show previously saved settings
-   [MC-187363](https://bugs.mojang.com/browse/MC-187363) Charged respawn anchors no longer light up blocks around them
-   [MC-187367](https://bugs.mojang.com/browse/MC-187367) Netherite recipes show up in crafting table despite requiring a smithing table to use
-   [MC-187371](https://bugs.mojang.com/browse/MC-187371) Game crashes when attempting to change cloud settings on some graphics cards
-   [MC-187392](https://bugs.mojang.com/browse/MC-187392) Items in waterlogged stairs don't float up high enough to be caught by a water stream above the stair
-   [MC-187394](https://bugs.mojang.com/browse/MC-187394) Dying Ender dragons are rendered completely white when using Fabulous graphics
-   [MC-187402](https://bugs.mojang.com/browse/MC-187402) Lighting in the End dimension is much darker when on a server
-   [MC-187405](https://bugs.mojang.com/browse/MC-187405) /seed is no longer available without cheats enabled
-   [MC-187411](https://bugs.mojang.com/browse/MC-187411) Particles and clouds not rendering properly behind stained glass and solid blocks
-   [MC-187437](https://bugs.mojang.com/browse/MC-187437) Held item is invisible in inventory menu
-   [MC-187449](https://bugs.mojang.com/browse/MC-187449) Zombie Pigmen/Zombified Piglins do not drop XP and rare drops anymore if killed by anything other than the player while in angered state
-   [MC-187466](https://bugs.mojang.com/browse/MC-187466) Mobs killed in creative mode don't drop experience
-   [MC-187468](https://bugs.mojang.com/browse/MC-187468) Enchantment glint does not render for certain things on "Fabulous" setting
-   [MC-187483](https://bugs.mojang.com/browse/MC-187483) The advancement "Two by Two" can be achieved by just breeding turtles
-   [MC-187504](https://bugs.mojang.com/browse/MC-187504) Mobs do not drop rare drop items when killed by a player in Creative Mode
-   [MC-187552](https://bugs.mojang.com/browse/MC-187552) Piglins and Hoglins shake in the nether on servers
-   [MC-187585](https://bugs.mojang.com/browse/MC-187585) Dolphins with NoAI:1b can drown
-   [MC-187592](https://bugs.mojang.com/browse/MC-187592) Piglins constantly picking up gold nuggets and dropping them
-   [MC-187611](https://bugs.mojang.com/browse/MC-187611) White squares when in first person with fabulous video settings and F1
-   [MC-187618](https://bugs.mojang.com/browse/MC-187618) Demo world not saving after saving and quitting then quiting out of minecraft
-   [MC-187673](https://bugs.mojang.com/browse/MC-187673) \[Crash\] "java.lang.IllegalStateException: Unregistered dimension type"
-   [MC-187676](https://bugs.mojang.com/browse/MC-187676) "d" in Reset to default isn't capitalized
-   [MC-187677](https://bugs.mojang.com/browse/MC-187677) "b" in Go back isn't capitalized
-   [MC-187679](https://bugs.mojang.com/browse/MC-187679) Bees stay angry far longer
-   [MC-187730](https://bugs.mojang.com/browse/MC-187730) Newly spawned Zombified Piglins do not pick up the aggro of older spawned aggravated Zombified Piglins
-   [MC-187739](https://bugs.mojang.com/browse/MC-187739) NeutralMob.playerDied(Player) does not return if forgiveDeadPlayers = false
-   [MC-187796](https://bugs.mojang.com/browse/MC-187796) Wolves only use their hostile appearance after being attacked
-   [MC-187811](https://bugs.mojang.com/browse/MC-187811) Ender dragon death animation suddenly flashes right after it has ended
-   [MC-187978](https://bugs.mojang.com/browse/MC-187978) /seed availiable to all players on multiplayer server
-   [MC-188070](https://bugs.mojang.com/browse/MC-188070) Glitched skin while swimming (left hand)
-   [MC-188088](https://bugs.mojang.com/browse/MC-188088) Overworld superflat preset no longer generates with terrain decorations
-   [MC-188216](https://bugs.mojang.com/browse/MC-188216) Superflat biome selection overrides block selection on "Create New World" screen
-   [MC-188393](https://bugs.mojang.com/browse/MC-188393) K in "4k" should be capitalized

---

# Minecraft 1.16 Pre-Release 2

We've now released 1.16 pre-release 2, fixing some crashes. Note that worlds opened in 1.16 pre-release 1 are corrupt and will not work in any way in 1.16 pre-release 2 (this includes using the re-create world button). Please restore an older backup or create a brand new world to play in this pre-release.

## Fixed bugs in 1.16 Pre-Release 2

-   [MC-187350](https://bugs.mojang.com/browse/MC-187350) Game randomly crashes / IllegalStateException: POI never registered
-   [MC-187352](https://bugs.mojang.com/browse/MC-187352) Loading a world created in 1.16-pre1 always ask for confirmation
-   [MC-187353](https://bugs.mojang.com/browse/MC-187353) Crash when loading some worlds: IllegalStateException: Lock is no longer valid
-   [MC-187358](https://bugs.mojang.com/browse/MC-187358) Worlds generated in 1.16-pre1 do not have their world generation settings saved correctly, causing chunk errors
-   [MC-187364](https://bugs.mojang.com/browse/MC-187364) Disabling and enabling dimension datapack disables nether and end
-   [MC-187408](https://bugs.mojang.com/browse/MC-187408) Game crashing with Nether portals - java.lang.NullPointerException: Ticking player

---

# Minecraft 1.16 Pre-Release 1

It's time for 1.16 pre-releases!

Going forward you should mostly see bugs being fixed. Additionally, pre-releases doesn't necessarily tend to our usual cadence of releasing on Wednesdays, so keep an eye out!

## New Features in 1.16 Pre-release 1

-   Added new "Fabulous" graphics option - uses per-pixel blending layers for some transparent elements

## Changes in 1.16 Pre-release 1

-   You can now milk Cows and Mooshrooms in creative mode
-   You can now get stew from Mooshrooms in creative mode
-   When you use an empty bucket on water in creative mode, you now get a bucket of water. If you have a bucket of water in your inventory already, no additional water buckets will be added when you use your empty bucket on water.
-   When any villager is struck by lightning, the witch it is converted to will no longer despawn
-   Added gamerule universalAnger (disabled by default), which makes angered neutral mobs attack any nearby player, not just the player that angered them. Works best if you disable forgiveDeadPlayers.
-   Added gamerule forgiveDeadPlayers (enabled by default), which makes angered neutral mobs stop being angry when the targeted player dies nearby.
-   Zombified piglins no longer attack innocent bystanders (unless you enable gamerule universalAnger)
-   Zombified piglins stop being angry if the targeted player dies nearby (unless you disable gamerule forgiveDeadPlayers)

## Technical Changes in 1.16 Pre-release 1

-   Smithing recipes can now be added or changed through data packs
-   Game will now detect critical datapack issues, like missing required tags and prevent world from being loaded

### Data Pack Selection

-   Data packs can now be selected before world is created
-   "Copy world" option will also copy data packs present in source world

### Pack Selection Screen

-   Packs can now be dropped directly on data and resource pack selection screens
-   Dropped files and directories will be copied to appropriate places

### Smithing Recipes

There's now a `smithing` recipe type. Recipes of this type are used in the smithing table to upgrade one item type into another type, maintaining tags.

-   `base` - Ingredient specifying an item to be upgraded.
-   `addition` - Ingredient specifying valid items to trigger the upgrade.
-   `result` - Item specifying the resulting type of the upgraded item.

## Fixed Bugs in 1.16 Pre-release 1

-   [MC-4520](https://bugs.mojang.com/browse/MC-4520) Aggressive neutral mobs become neutral when the world is reloaded
-   [MC-9856](https://bugs.mojang.com/browse/MC-9856) you cannot pick up buckets of water/lava in creative mode
-   [MC-36322](https://bugs.mojang.com/browse/MC-36322) Unable to milk cows in creative
-   [MC-64623](https://bugs.mojang.com/browse/MC-64623) Lightning bolts cannot be targeted by selectors
-   [MC-69032](https://bugs.mojang.com/browse/MC-69032) When a mob hits a zombified piglin, and that mob dies, the zombified piglins attack you
-   [MC-90969](https://bugs.mojang.com/browse/MC-90969) Cannot get mushroom stew from mooshrooms / milk from cows in creative mode
-   [MC-106968](https://bugs.mojang.com/browse/MC-106968) Snow golems aren't damaged by splash or lingering water bottles
-   [MC-127004](https://bugs.mojang.com/browse/MC-127004) Waterlogged blocks cause z-fighting when looking at them from a distance
-   [MC-138675](https://bugs.mojang.com/browse/MC-138675) Wither skulls inflict the Wither effect on players in Creative mode
-   [MC-138713](https://bugs.mojang.com/browse/MC-138713) "Two by Two" advancement does not require donkeys or mules
-   [MC-158906](https://bugs.mojang.com/browse/MC-158906) After sleeping in a bed, players aren't positioned in the center of a block
-   [MC-159500](https://bugs.mojang.com/browse/MC-159500) Hostile mobs attacking bees also cause the bees to attack players
-   [MC-161969](https://bugs.mojang.com/browse/MC-161969) Casting issue: Adding ender eyes to end portal frames at high distances causes particles to lose precision
-   [MC-163950](https://bugs.mojang.com/browse/MC-163950) Ice bordering water causes z-fighting issues from a distance
-   [MC-164692](https://bugs.mojang.com/browse/MC-164692) Entering a boat does not play the hand animation
-   [MC-165669](https://bugs.mojang.com/browse/MC-165669) Hand animation is playing when you're aiming at a block through the mob and use the spawn egg
-   [MC-165734](https://bugs.mojang.com/browse/MC-165734) Minecarts with furnace still display a hand animation with incompatible items when not on a rail
-   [MC-166188](https://bugs.mojang.com/browse/MC-166188) Bees still hitting player after death
-   [MC-166524](https://bugs.mojang.com/browse/MC-166524) Trying to dye a sheep with the same color as sheep displays hand animation
-   [MC-167042](https://bugs.mojang.com/browse/MC-167042) Casting issue: Campfire embers are generated at a point that loses precision at high coordinates
-   [MC-167044](https://bugs.mojang.com/browse/MC-167044) Casting issue: Enchanting table book does not open for the player at high distances in some cases
-   [MC-167046](https://bugs.mojang.com/browse/MC-167046) Casting issue: Lava ember particles and lava popping sounds lose precision on creation at high coordinates
-   [MC-167047](https://bugs.mojang.com/browse/MC-167047) Casting issue: TNT blocks ignited by other explosions lose precision at high coordinates
-   [MC-167091](https://bugs.mojang.com/browse/MC-167091) Casting issue: Water particles dripping from leaves lose precision at high coordinates
-   [MC-167195](https://bugs.mojang.com/browse/MC-167195) Bees anger towards players in survival when killed in one hit
-   [MC-167971](https://bugs.mojang.com/browse/MC-167971) Casting issue: Particles emitted by redstone repeaters lose precision at high coordinates
-   [MC-168675](https://bugs.mojang.com/browse/MC-168675) Settings that update after closing the video settings menu don't if you change the fullscreen setting
-   [MC-170872](https://bugs.mojang.com/browse/MC-170872) Casting issue: Nether biome particles suffer from precision loss
-   [MC-170944](https://bugs.mojang.com/browse/MC-170944) /locatebiome messages do not fit for all biome names
-   [MC-171035](https://bugs.mojang.com/browse/MC-171035) Casting issue: Particles from falling rain lose precision at high coordinates
-   [MC-171037](https://bugs.mojang.com/browse/MC-171037) Casting issue: smoke produced by lava during rain loses precision at high coordinates
-   [MC-171663](https://bugs.mojang.com/browse/MC-171663) Right-clicking on unemployed villagers sometimes cause hand animation to stop after a villager has a profession
-   [MC-171683](https://bugs.mojang.com/browse/MC-171683) Crimson and warped doors can't have transparent textures
-   [MC-172259](https://bugs.mojang.com/browse/MC-172259) Baby Hoglin/Zoglin have their head slightly above their neck, it seems that their head is partly floating
-   [MC-172531](https://bugs.mojang.com/browse/MC-172531) Small mobs get stuck in fence corners
-   [MC-172610](https://bugs.mojang.com/browse/MC-172610) When not aiming at a block through a ridable mob while using a spawn egg on it, the player starts riding the mob and a baby mob is spawned
-   [MC-174815](https://bugs.mojang.com/browse/MC-174815) Piglins don't automatically attack withers
-   [MC-175028](https://bugs.mojang.com/browse/MC-175028) Sometimes hoglins don't avoid warped fungus
-   [MC-175215](https://bugs.mojang.com/browse/MC-175215) Respawn anchors destroy blocks when detonated underwater
-   [MC-175409](https://bugs.mojang.com/browse/MC-175409) Soul speed "effect" stays when you levitate/fly off of soul sand or soul soil
-   [MC-175476](https://bugs.mojang.com/browse/MC-175476) Respawn anchor doesn't cull block faces
-   [MC-175911](https://bugs.mojang.com/browse/MC-175911) Soul Speed lasts after leaving soul blocks
-   [MC-176041](https://bugs.mojang.com/browse/MC-176041) Using a spawn egg on a strider while aiming at lava spawns both a baby and an adult strider
-   [MC-176188](https://bugs.mojang.com/browse/MC-176188) Striders are not damaged by splash or lingering water bottles
-   [MC-176225](https://bugs.mojang.com/browse/MC-176225) Accelerating a baby strider's growth does not display hand animation
-   [MC-176470](https://bugs.mojang.com/browse/MC-176470) Respawning in the nether does not de-aggro zombified piglins
-   [MC-176637](https://bugs.mojang.com/browse/MC-176637) Closing game during Mojang load screen causes NullPointerException
-   [MC-176640](https://bugs.mojang.com/browse/MC-176640) You can set your spawn point inside dangerous blocks
-   [MC-178567](https://bugs.mojang.com/browse/MC-178567) Shearing sheep does not display hand animation again
-   [MC-178618](https://bugs.mojang.com/browse/MC-178618) Feeding a flower to a brown mooshroom does not perform hand animation
-   [MC-178961](https://bugs.mojang.com/browse/MC-178961) /loot ... fish ... command no longer has any functionality
-   [MC-179561](https://bugs.mojang.com/browse/MC-179561) Retreating baby hoglins sometimes won't pathfind to the opposite direction of the player
-   [MC-180111](https://bugs.mojang.com/browse/MC-180111) Hoglins angered for reasons other than being attacked by the player ignore placed repellents.
-   [MC-180922](https://bugs.mojang.com/browse/MC-180922) Right clicking a mob with a spawn egg to spawn the baby variant doesn’t play the hand swing animation when not aiming at a block through the mob
-   [MC-182308](https://bugs.mojang.com/browse/MC-182308) Chicken jockeys cannot despawn
-   [MC-182748](https://bugs.mojang.com/browse/MC-182748) Casting issue: Redstone dust particles are generated at the wrong positions at high coordinates
-   [MC-182883](https://bugs.mojang.com/browse/MC-182883) Parity issue: Baby hoglins don't follow adult hoglins
-   [MC-183766](https://bugs.mojang.com/browse/MC-183766) Who Is Cutting Onions Improperly Capitalized
-   [MC-183767](https://bugs.mojang.com/browse/MC-183767) Incorrect filename for "Serious Dedication" advancement in vanilla data pack
-   [MC-183792](https://bugs.mojang.com/browse/MC-183792) piglin\_loved item tag has unnecessary items
-   [MC-183821](https://bugs.mojang.com/browse/MC-183821) "Game Mode Switcher" bottom hint text isn't centered
-   [MC-183825](https://bugs.mojang.com/browse/MC-183825) New nether challenges don't grant experience points
-   [MC-183893](https://bugs.mojang.com/browse/MC-183893) Gold nugget isn't under #piglin\_loved
-   [MC-184679](https://bugs.mojang.com/browse/MC-184679) Using custom world generation, temperature is written wrong
-   [MC-184947](https://bugs.mojang.com/browse/MC-184947) Carriage return symbol can be seen when importing or exporting world generation settings to or from certain worlds
-   [MC-185095](https://bugs.mojang.com/browse/MC-185095) "thrown\_item\_picked\_up\_by\_entity" advancement trigger does not work for players
-   [MC-185377](https://bugs.mojang.com/browse/MC-185377) Bone mealing kelp creates a large field of particles, rather than only within the kelp's block space
-   [MC-185480](https://bugs.mojang.com/browse/MC-185480) Casting issue: Smoke particles emitted by campfires during rain form at the wrong positions at high coordinates
-   [MC-186062](https://bugs.mojang.com/browse/MC-186062) Warning "Could not find uniform named InSize in the specified shader program." when loading resources
-   [MC-186064](https://bugs.mojang.com/browse/MC-186064) Clouds render in front of everything for some users
-   [MC-186067](https://bugs.mojang.com/browse/MC-186067) Some structures' loot chests do not contain any items
-   [MC-186071](https://bugs.mojang.com/browse/MC-186071) Clouds are visible and don't render correctly when they are turned off
-   [MC-186074](https://bugs.mojang.com/browse/MC-186074) Particles render in the wrong order with transparent blocks when using certain graphics cards
-   [MC-186075](https://bugs.mojang.com/browse/MC-186075) GPU usage in latest snapshot significantly higher than before, causing lag or crash for some users
-   [MC-186080](https://bugs.mojang.com/browse/MC-186080) Entities, block entities, and items are rendered black on some graphics cards
-   [MC-186088](https://bugs.mojang.com/browse/MC-186088) Block hitboxes once again cause semi-transparent blocks not to render behind them
-   [MC-186089](https://bugs.mojang.com/browse/MC-186089) Functions load before entity tags do, causing loading errors.
-   [MC-186101](https://bugs.mojang.com/browse/MC-186101) Some commands in functions cause a NullPointerException
-   [MC-186108](https://bugs.mojang.com/browse/MC-186108) Enchantment glint does not render on dropped/thrown items
-   [MC-186109](https://bugs.mojang.com/browse/MC-186109) You can use multiplayer commands on a singleplayer world
-   [MC-186124](https://bugs.mojang.com/browse/MC-186124) Lightning bolt doesn't render
-   [MC-186204](https://bugs.mojang.com/browse/MC-186204) Items render in front of other entities, transparent blocks, and blocks with special renderers
-   [MC-186253](https://bugs.mojang.com/browse/MC-186253) Held translucent blocks make the water, clouds, particles, and placed translucent blocks behind them invisible in third person mode.
-   [MC-186274](https://bugs.mojang.com/browse/MC-186274) Purple light from Ender Dragon's Death doesn't appear
-   [MC-186284](https://bugs.mojang.com/browse/MC-186284) Player's point of view is upside down in 20w22a
-   [MC-186314](https://bugs.mojang.com/browse/MC-186314) Villagers become fixated on potential job site
-   [MC-186335](https://bugs.mojang.com/browse/MC-186335) Bees age calculation inside hive/nest is broken
-   [MC-186455](https://bugs.mojang.com/browse/MC-186455) Persistent villagers without experience can despawn after converting to a witch
-   [MC-186464](https://bugs.mojang.com/browse/MC-186464) Enabled data packs still show up in the "/datapack enable" list
-   [MC-186478](https://bugs.mojang.com/browse/MC-186478) Tag minecraft:tick doesn't work when joining a world
-   [MC-186480](https://bugs.mojang.com/browse/MC-186480) Inner parts of slime blocks and honey blocks disappear again while the block is moved by a piston
-   [MC-186600](https://bugs.mojang.com/browse/MC-186600) Nether gold ore is gray on a map
-   [MC-186696](https://bugs.mojang.com/browse/MC-186696) Totem of Undying causes red or blue tint in the screen when in F5 mode

---

# Minecraft: Java Edition 1.15.2 Pre-release 2

## CHANGES IN 1.15.2 PRE-RELEASE 2

-   Fixed bugs

## FIXED BUGS IN 1.15.2 PRE-RELEASE 2

-   [MC-169825](https://bugs.mojang.com/browse/MC-169825) - “Multiplayer (3rd party)” shows in window title when disconnecting from a singleplayer world
-   [MC-169839](https://bugs.mojang.com/browse/MC-169839) - Certain potion effects that override lower level effects don’t get removed after their duration ends
-   [MC-169840](https://bugs.mojang.com/browse/MC-169840) - Drinking a level 1 potion under a level 2 beacon and leaving results in the effect being lost
-   [MC-169848](https://bugs.mojang.com/browse/MC-169848) - Crashes when trying to create Beehive From planted tree
-   [MC-169886](https://bugs.mojang.com/browse/MC-169886) - No older world protection in 1.15.2 PR 1

---

# Minecraft: Java Edition 1.15.2 Pre-release 1

## CHANGES IN 1.15.2 PRE-RELEASE 1

-   Bees no longer anger when a nearby nest/hive is destroyed using a silk touch tool
-   Added `doPatrolSpawning` and `doTraderSpawning` game rules that control spawning of patrols and wandering traders, respectively
-   Added `gui_light` option in block models to allow controlling light when rendering model as item in GUI
-   Controls light when rendering block model inside slot. If set to `side`, model will be rendered like block. If set to `front`, model is shaded like flat item
-   Any birch or oak sapling grown near a flower within 2 blocks distance on the same y-level has a 5% chance of having a bee nest
-   Bee Nests now have a 2% chance of spawning in Flower Forests
-   Bee Nests now have a 0.2% chance of spawning in Forest, Wooded Hills, Birch Forest, Tall Birch Forest, Birch Forest Hills, and Tall Birch Hills biomes
-   Fixed bugs

## FIXED BUGS IN 1.15.2 PRE-RELEASE 1

-   [MC-862](https://bugs.mojang.com/browse/MC-862) - Spawn protection doesn’t work for item frames, paintings and armor stands
-   [MC-1541](https://bugs.mojang.com/browse/MC-1541) - Beacon effect removes potion effect of the same type
-   [MC-51053](https://bugs.mojang.com/browse/MC-51053) - Furnace minecarts lose power after navigating corners
-   [MC-150575](https://bugs.mojang.com/browse/MC-150575) - Concrete powder does not turn into concrete when letting it fall beside water
-   [MC-153987](https://bugs.mojang.com/browse/MC-153987) - Falling down ladders while wearing elytra
-   [MC-165695](https://bugs.mojang.com/browse/MC-165695) - Hoppers harvesting honeycomb from bee hives and bee nests only pick up one honeycomb
-   [MC-166312](https://bugs.mojang.com/browse/MC-166312) - Loom UI pattern icons are too dark
-   [MC-166319](https://bugs.mojang.com/browse/MC-166319) - B on “Open in browser” is lowercase in link confirmation GUI
-   [MC-166324](https://bugs.mojang.com/browse/MC-166324) - “Raw input” button has lowercase “i”
-   [MC-166722](https://bugs.mojang.com/browse/MC-166722) - Some custom item models appear dark in the inventory
-   [MC-167018](https://bugs.mojang.com/browse/MC-167018) - Misplaced pixel in critical hit particle texture
-   [MC-167079](https://bugs.mojang.com/browse/MC-167079) - Horse Armor texture is off
-   [MC-167201](https://bugs.mojang.com/browse/MC-167201) - Invisible glowing entities do not respect their team color
-   [MC-167219](https://bugs.mojang.com/browse/MC-167219) - Reloading a resource pack enough times will cause intense lag
-   [MC-167220](https://bugs.mojang.com/browse/MC-167220) - Items on marker armor stands no longer glow
-   [MC-167235](https://bugs.mojang.com/browse/MC-167235) - Distance from where you can enter a bed is off center
-   [MC-167344](https://bugs.mojang.com/browse/MC-167344) - com.mojang.blaze3d.platform.ClipboardManager leaks direct buffers
-   [MC-167416](https://bugs.mojang.com/browse/MC-167416) - Distance from where a monster will stop you from sleeping is off center
-   [MC-167444](https://bugs.mojang.com/browse/MC-167444) - iron\_golem\_crackiness\_\* textures show up on invisible iron golems that are damaged
-   [MC-167709](https://bugs.mojang.com/browse/MC-167709) - Bees that ride a boat, minecart or other entities when entering their hive or nest can’t leave the hive or nest ever again
-   [MC-168091](https://bugs.mojang.com/browse/MC-168091) - Concrete powder doesn’t convert into concrete when dropped into deep water
-   [MC-168230](https://bugs.mojang.com/browse/MC-168230) - End crystal beam is dark / desaturated
-   [MC-168467](https://bugs.mojang.com/browse/MC-168467) - Bees do not remember how many crops they’ve pollinated
-   [MC-169157](https://bugs.mojang.com/browse/MC-169157) - Breaking a hive with obstructed front makes bees vanish

---

