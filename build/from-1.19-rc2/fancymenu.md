# Minecraft 1.19 Release Candidate 2

1.19 release candidate 2 is now available which fixes a crash.

---

We're now releasing the first (and hopefully only) release candidate for The Wild Update. If there are no major issues following this release, no further changes will be done before the full release.

Happy mining!

## Fixed Bugs in 1.19 Release Candidate 1

-   [MC-252398](https://bugs.mojang.com/browse/MC-252398) Darkness effect fading in death screen causes subtle flashing

---

The fifth pre-release for 1.19 is now available with more bug fixes.

## Fixed bugs in 1.19 Pre-release 5

-   [MC-249121](https://bugs.mojang.com/browse/MC-249121) Sculk is missing subtitles for some sounds
-   [MC-249323](https://bugs.mojang.com/browse/MC-249323) Modifying a world preset to not include overworld settings will not give a datapack error, but selecting the world type will instantly crash your game
-   [MC-250034](https://bugs.mojang.com/browse/MC-250034) Standing on top of mud as it converts to clay causes the player to fall through or be pushed out of the block
-   [MC-250295](https://bugs.mojang.com/browse/MC-250295) Allay's head does not rotate to where it looks
-   [MC-251030](https://bugs.mojang.com/browse/MC-251030) Standing on top of soul sand or mud that converts to sculk will cause entities to fall through it
-   [MC-251323](https://bugs.mojang.com/browse/MC-251323) Mobs target emerging warden/ warden faces attacking mob while emerging if dealt melee damage
-   [MC-251594](https://bugs.mojang.com/browse/MC-251594) Leads are leashed too high on allays
-   [MC-252038](https://bugs.mojang.com/browse/MC-252038) Warden attacks immediately if hit during emerging animation
-   [MC-252108](https://bugs.mojang.com/browse/MC-252108) Eating a food item no longer opens the piston doors in city;;_;;center;;_;;2
-   [MC-252157](https://bugs.mojang.com/browse/MC-252157) 'CustomName' NBT tag still prevents wardens from digging down
-   [MC-252352](https://bugs.mojang.com/browse/MC-252352) URL in eula.txt (dedicated server) points to the wrong location

---

The fourth pre-release for 1.19 is now available with a few bugfixes.

In case you missed it, we just announced the release date for the Wild Update (June 7th). You can read more about that [here](https://www.minecraft.net/article/the-wild-update-coming?ref=launcher).

## Fixed bugs in 1.19 Pre-release 4

-   [MC-220067](https://bugs.mojang.com/browse/MC-220067) - Chunk corruption with command block full of certain Unicode characters
-   [MC-245504](https://bugs.mojang.com/browse/MC-245504) - Touchscreen mode crash // java.lang.ClassCastException: class eec$a cannot be cast to class eec$c (eec$a and eec$c are in unnamed module of loader 'app')
-   [MC-249831](https://bugs.mojang.com/browse/MC-249831) - Aquifers can cut themselves off at chunk borders
-   [MC-251840](https://bugs.mojang.com/browse/MC-251840) - Game crash whilst getting block state: cwj: Missing Palette entry for index 8
-   [MC-251859](https://bugs.mojang.com/browse/MC-251859) - Gear equipping sound plays every time armor/elytra durability changes while equipped
-   [MC-251989](https://bugs.mojang.com/browse/MC-251989) - Cannot send chats or use commands in multiplayer since 1.19 Pre-release 1

---

It is now time for pre-release 3 for Minecraft 1.19, which will be our last pre-release for this week. In this pre-release we've tweaked the sonic boom attack and fixed more bugs.

Enjoy!

## Changes in 1.19 Pre-release 3

-   Wardens' sonic boom attack now bypasses the damage reduction by armor enchantments such as Protection

## Technical Changes in 1.19 Pre-release 3

-   `item_interact_start` is no longer detectable as a vibration to allow more specific actions be detected, like `drink` or `eat`, but `item_interact_finish` still is

## Fixed Bugs in 1.19 Pre-Release 3

-   [MC-209932](https://bugs.mojang.com/browse/MC-209932) Sculk sensors only detect the last turtle egg being broken when being stepped on
-   [MC-210277](https://bugs.mojang.com/browse/MC-210277) Sculk sensors are not activated upon chickens laying eggs
-   [MC-210278](https://bugs.mojang.com/browse/MC-210278) Sculk sensors are not activated upon bees entering or leaving their hive or nest
-   [MC-214622](https://bugs.mojang.com/browse/MC-214622) Sculk sensors do not detect daylight detector mode switching
-   [MC-249094](https://bugs.mojang.com/browse/MC-249094) Unexpected culling of inner sculk shrieker faces
-   [MC-249230](https://bugs.mojang.com/browse/MC-249230) Frogs prioritize eating entities over panicking when being damaged
-   [MC-250162](https://bugs.mojang.com/browse/MC-250162) Placing a map in an item frame will break any intersecting paintings and item frames with a map inside
-   [MC-250238](https://bugs.mojang.com/browse/MC-250238) Frogs attempt to pathfind to entities outside of their reach causing them to spin and twitch constantly
-   [MC-250983](https://bugs.mojang.com/browse/MC-250983) Allays can get stuck and freeze inside non-full blocks
-   [MC-251220](https://bugs.mojang.com/browse/MC-251220) Block lighting on extended parts are a lot darker in 22w17a compared to 1.18.2
-   [MC-251420](https://bugs.mojang.com/browse/MC-251420) Demo Mode: The "Purchase Now!" link's destination is incorrect
-   [MC-251858](https://bugs.mojang.com/browse/MC-251858) Subtitles are higher than in previous versions
-   [MC-251872](https://bugs.mojang.com/browse/MC-251872) The game output and server console are logged with warnings regarding chat packets with invalid signatures when using entity selectors within commands
-   [MC-251878](https://bugs.mojang.com/browse/MC-251878) Sculk sensors hearing items being dropped on the ground doesn't alert shriekers even if a player drops it
-   [MC-251968](https://bugs.mojang.com/browse/MC-251968) /execute running chat related commands logs "Received chat packet without valid signature" warning
-   [MC-252071](https://bugs.mojang.com/browse/MC-252071) Warden still detects after death if signal is traveling before death
-   [MC-252078](https://bugs.mojang.com/browse/MC-252078) Allays no longer flee or panic when taking damage

---

A recent change made it possible for more types of mobs to spawn inside Nether Portals, which caused them to instantly change dimensions after spawning. We will not be making any further changes to this before the release of 1.19, but our intent for the future is to prevent most mobs from spawning in Nether Portals and the ones that do will not immediately travel through the portal. Expect to see these changes in a coming version.

## Changes in 1.19 Pre-release 2

​

-   If the Warden is stuck in a liquid, it will angrily despawn instead of digging
-   Reverted using `generic equip` sound when equipping blocks in the head slot

## Technical Changes in 1.19 Pre-release 2

-   Added game event `teleport` with a vibration frequency of 5

## Fixed bugs in 1.19 Pre-release 2

-   [MC-186148](https://bugs.mojang.com/browse/MC-186148) "death.attack.witherSkull.item" displays raw translation string (is untranslated)
-   [MC-186851](https://bugs.mojang.com/browse/MC-186851) "death.attack.sting.item" displays raw translation string (is untranslated)
-   [MC-207268](https://bugs.mojang.com/browse/MC-207268) Sculk sensors don't detect stripping logs, tilling dirt, or pathing grass
-   [MC-208759](https://bugs.mojang.com/browse/MC-208759) Sculk Sensor's 'block placed' doesn't trigger with villagers placing crops
-   [MC-208760](https://bugs.mojang.com/browse/MC-208760) Sculk Sensor's 'block placed' doesn't trigger when snow golems place snow layers
-   [MC-208761](https://bugs.mojang.com/browse/MC-208761) Sculk Sensor's 'block destroyed' doesn't trigger when blocks are destroyed by pistons
-   [MC-209701](https://bugs.mojang.com/browse/MC-209701) Sculk sensors are not activated upon placing food onto campfires
-   [MC-209900](https://bugs.mojang.com/browse/MC-209900) Sculk sensors are not activated upon inserting or retrieving music discs from jukeboxes
-   [MC-210330](https://bugs.mojang.com/browse/MC-210330) Sculk sensors are not activated upon throwing eyes of ender
-   [MC-210489](https://bugs.mojang.com/browse/MC-210489) Sculk sensors are not activated upon pointed dripstone filling partially filled cauldrons
-   [MC-210496](https://bugs.mojang.com/browse/MC-210496) Sculk sensors are not activated upon harvesting sweet berry bushes
-   [MC-210801](https://bugs.mojang.com/browse/MC-210801) Wool incorrectly occludes the vibration of item frames being placed
-   [MC-212430](https://bugs.mojang.com/browse/MC-212430) Sculk sensors are not activated upon rain or snow filling partially filled cauldrons
-   [MC-213387](https://bugs.mojang.com/browse/MC-213387) Sculk sensors don't detect endermen/shulkers teleporting from a place to another
-   [MC-220086](https://bugs.mojang.com/browse/MC-220086) Sculk sensors do not detect using an axe to clear the wax/weathering of a copper block
-   [MC-220087](https://bugs.mojang.com/browse/MC-220087) Sculk sensors do not detect using a honeycomb to wax copper
-   [MC-249696](https://bugs.mojang.com/browse/MC-249696) Certain void worlds fail to spawn the player on the stone platform
-   [MC-250259](https://bugs.mojang.com/browse/MC-250259) Warden AI doesn't function properly when it rides on entities
-   [MC-250941](https://bugs.mojang.com/browse/MC-250941) Goats' horns don't snap on copper ore
-   [MC-250956](https://bugs.mojang.com/browse/MC-250956) Baby goats with horns lose their horns when fed
-   [MC-251314](https://bugs.mojang.com/browse/MC-251314) Goats loaded from older worlds lose their horns
-   [MC-251336](https://bugs.mojang.com/browse/MC-251336) Darkness fog flashes at high duration values
-   [MC-251412](https://bugs.mojang.com/browse/MC-251412) Warden afflicting Darkness to players in the same team
-   [MC-251500](https://bugs.mojang.com/browse/MC-251500) Wardens ignore PersistenceRequired and dig away
-   [MC-251601](https://bugs.mojang.com/browse/MC-251601) Darkness rendering incorrectly when reloading the game
-   [MC-251639](https://bugs.mojang.com/browse/MC-251639) Warden emerging particles don't match up with block they emerge on the entire way
-   [MC-251646](https://bugs.mojang.com/browse/MC-251646) "death.attack.sonic;;_;;boom.item" displays raw translation string (is untranslated)
-   [MC-251670](https://bugs.mojang.com/browse/MC-251670) Villager sometimes won't refill their stock
-   [MC-251675](https://bugs.mojang.com/browse/MC-251675) Mesa Mineshafts no longer generate with /place command outside of badlands biomes despite saying the structure has been generated successfully
-   [MC-251736](https://bugs.mojang.com/browse/MC-251736) Reflected ghast fireball cannot hit the ghast
-   [MC-251824](https://bugs.mojang.com/browse/MC-251824) Wardens aren't angered by being hit with damageless projectiles
-   [MC-251854](https://bugs.mojang.com/browse/MC-251854) "It Spreads" advancement can be granted when killing a mob that does not give experience
-   [MC-251859](https://bugs.mojang.com/browse/MC-251859) Gear equipping sound plays every time armor/elytra durability changes while equipped
-   [MC-251860](https://bugs.mojang.com/browse/MC-251860) The minecraft:item.armor.equip;;_;;generic sound is produced when giving items to allays
-   [MC-251862](https://bugs.mojang.com/browse/MC-251862) Shift clicking the destroy item button in the creative inventory creates a vibration when there is nothing in your equipment slots
-   [MC-251864](https://bugs.mojang.com/browse/MC-251864) The minecraft:item.armor.equip;;_;;generic sound is produced when filling water buckets with fish, axolotls, or tadpoles
-   [MC-251871](https://bugs.mojang.com/browse/MC-251871) The minecraft:item.armor.equip;;_;;generic sound is produced and can only be heard by other players when switching items between hands
-   [MC-251876](https://bugs.mojang.com/browse/MC-251876) Villagers produce armor equipping sound when previewing armor
-   [MC-251889](https://bugs.mojang.com/browse/MC-251889) io.netty.handler.codec.EncoderException when evaluating too many entity selectors in chat preview
-   [MC-251890](https://bugs.mojang.com/browse/MC-251890) run;;_;;command click events send value as command instead of chat message
-   [MC-251915](https://bugs.mojang.com/browse/MC-251915) Milking cows, mooshrooms and goats plays gear equipping sound
-   [MC-251916](https://bugs.mojang.com/browse/MC-251916) Eating food items that return empty containers plays gear equipping sound
-   [MC-251919](https://bugs.mojang.com/browse/MC-251919) Equipping a player head, skull or carved pumpkin displays the generic "Gear equips" subtitle
-   [MC-251920](https://bugs.mojang.com/browse/MC-251920) Taking a plant from a pot plays the gear equipping sound and subtitle
-   [MC-251921](https://bugs.mojang.com/browse/MC-251921) Equipping horse armor onto a horse plays the "Gear equips" sound
-   [MC-251922](https://bugs.mojang.com/browse/MC-251922) "Gear equips" sound plays when equipping or removing a saddle from a horse wearing horse armor
-   [MC-251924](https://bugs.mojang.com/browse/MC-251924) Gear equipping sounds and subtitles are played when foxes pick up any item
-   [MC-251925](https://bugs.mojang.com/browse/MC-251925) Gear equipping sounds and subtitles are played when dolphins throw around items
-   [MC-251927](https://bugs.mojang.com/browse/MC-251927) Gear equipping sounds and subtitles are played when CanPickUpLoot mobs pick up items
-   [MC-251928](https://bugs.mojang.com/browse/MC-251928) Gear equips sound plays when filling a single bottle with honey
-   [MC-251929](https://bugs.mojang.com/browse/MC-251929) Gear equips sound plays when filling a single bottle with water from a water source

---

Presenting the first pre-release of 1.19: The Wild Update!

From now on, you should mostly see bugs being fixed. In addition to that, pre-releases don't follow the regular snapshot cadence of releasing on Wednesdays, so keep an eye out for the next pre-release ;)

As always, a big thank you to the community for your feedback, bugs reported, and awesome ideas throughout the snapshot series. Let the pre-releases commence!

## Changes in 1.19 Pre-release 1

-   Slightly reduced the number of Mangrove trees in Mangrove Swamps
-   Endermen, Skeletons, Wither Skeletons and Piglins now spawn in a wider range of light levels in the Nether (from light level 0 to 11)
-   Item interaction vibrations are now emitted when you start or finish "using" an item with a start and finish state (such as Bows, Crossbows, Goat Horns, Shields, Food)
-   Item interaction vibrations are now ignored when sneaking
-   Placing items that aren't armor (such as Pumpkins and Skulls) in your headwear slot now plays a generic equip sound

## Technical Changes in 1.19 Pre-release 1

-   Auto-completion is now available for the template argument to `place template`
-   Custom servers can now enable or disable chat preview for certain clients by sending a new network packet
-   Now, a chat preview is also shown for chat-related commands, such as `/say` and `/msg`
-   `test-rainbow-chat` has been removed from `server.properties`

### Added Game Events

-   `note_block_play` with a vibration frequency of 6
-   `instrument_play` with a vibration frequency of 15

## Fixed bugs in 1.19 Pre-release 1

-   [MC-94060](https://bugs.mojang.com/browse/MC-94060) Equipping armor/elytra through inventory or dispenser doesn't play sounds
-   [MC-134892](https://bugs.mojang.com/browse/MC-134892) PacketBuffer.writeString's max length is in bytes, while readString is in characters
-   [MC-209222](https://bugs.mojang.com/browse/MC-209222) Attempting to open the Minecraft Realms menu claims that the client is outdated, even if the snapshot may be newer than the release
-   [MC-210279](https://bugs.mojang.com/browse/MC-210279) Sculk sensors are not activated upon entities being summoned by a spawner
-   [MC-213915](https://bugs.mojang.com/browse/MC-213915) Equipping armor through the inventory does not count as a vibration
-   [MC-218222](https://bugs.mojang.com/browse/MC-218222) Distance value for Sculk Sensors is limited to integers
-   [MC-225195](https://bugs.mojang.com/browse/MC-225195) Goats don't panic when tempted with their favorite food
-   [MC-230735](https://bugs.mojang.com/browse/MC-230735) "FOV Effects" setting description is innacurate
-   [MC-249141](https://bugs.mojang.com/browse/MC-249141) No subtitles are produced upon frogs stepping
-   [MC-249164](https://bugs.mojang.com/browse/MC-249164) The entity.frog.tounge sound is misspelled
-   [MC-249209](https://bugs.mojang.com/browse/MC-249209) Frogs don't panic when tempted with their favorite food
-   [MC-249260](https://bugs.mojang.com/browse/MC-249260) Tadpoles are not tempted by slime balls
-   [MC-249328](https://bugs.mojang.com/browse/MC-249328) Frogs can jump around while being tempted with slimeballs
-   [MC-249456](https://bugs.mojang.com/browse/MC-249456) Tadpoles drop experience, unlike other baby mobs
-   [MC-249619](https://bugs.mojang.com/browse/MC-249619) The comparator frequency of sculk sensors when you are stepping on it is the last frequency it heard
-   [MC-249711](https://bugs.mojang.com/browse/MC-249711) Items collected off the ground by allays travel too high above their hitboxes
-   [MC-249757](https://bugs.mojang.com/browse/MC-249757) 'It Spreads' advancement is not a child of 'Monster Hunter'
-   [MC-249834](https://bugs.mojang.com/browse/MC-249834) Swapping items to the player's off-hand can generate vibrations
-   [MC-249980](https://bugs.mojang.com/browse/MC-249980) The Birthday Song advancement description doesn't capitalise the word Cake
-   [MC-250006](https://bugs.mojang.com/browse/MC-250006) ID of the british cat doesn't match texture name
-   [MC-250019](https://bugs.mojang.com/browse/MC-250019) Sculk catalyst triggers when a villager converts into zombie villager by a zombie
-   [MC-250317](https://bugs.mojang.com/browse/MC-250317) The subtitle for picking up a Tadpole with a bucket is the generic "Bucket fills" subtitle
-   [MC-250351](https://bugs.mojang.com/browse/MC-250351) /tp "argument" duplicated on the tab options
-   [MC-250919](https://bugs.mojang.com/browse/MC-250919) The server crashes when attempting to load chunks that contain command blocks that consist of large numbers of characters within the previous output field
-   [MC-250932](https://bugs.mojang.com/browse/MC-250932) Goat horn subtitles are improperly capitalized
-   [MC-250940](https://bugs.mojang.com/browse/MC-250940) Goat horn playing isn't detected as a vibration
-   [MC-251132](https://bugs.mojang.com/browse/MC-251132) Server logs "Game test server" messages
-   [MC-251312](https://bugs.mojang.com/browse/MC-251312) Entity selectors in /say commands are no longer evaluated
-   [MC-251355](https://bugs.mojang.com/browse/MC-251355) Potted mangrove propagule model is incorrect
-   [MC-251405](https://bugs.mojang.com/browse/MC-251405) Structure Block messages are formatted as chat
-   [MC-251479](https://bugs.mojang.com/browse/MC-251479) Duplicate object key ;;[;;lang file;;];;
-   [MC-251550](https://bugs.mojang.com/browse/MC-251550) Failed to launch the game on 32-bit operating system
-   [MC-251640](https://bugs.mojang.com/browse/MC-251640) io.netty.handler.codec.EncoderException when using special characters in chat message
-   [MC-251641](https://bugs.mojang.com/browse/MC-251641) Game crash regarding warden anger
-   [MC-251647](https://bugs.mojang.com/browse/MC-251647) Chat closes itself if the control for Open Chat is set to Enter
-   [MC-251649](https://bugs.mojang.com/browse/MC-251649) Clicking "incomplete command" message removes / in chat
-   [MC-251650](https://bugs.mojang.com/browse/MC-251650) Iron golems can spawn on non spawnable blocks such as leaves, glass, sea lanterns, etc
-   [MC-251652](https://bugs.mojang.com/browse/MC-251652) Warden emerge/roar/sonic charge/dig animation (and possibly other similar animations) don't start unless the player looks at the Warden first
-   [MC-251656](https://bugs.mojang.com/browse/MC-251656) /say command fails to apply server message styling when sent from a command block, server console, or RCON, unlike /msg
-   [MC-251690](https://bugs.mojang.com/browse/MC-251690) Wardens can spawn on any non-full block, as long as it's solid
-   [MC-251736](https://bugs.mojang.com/browse/MC-251736) Reflected ghast fireball cannot hit the ghast
-   [MC-251762](https://bugs.mojang.com/browse/MC-251762) You can run commands with double slash prefix
-   [MC-251773](https://bugs.mojang.com/browse/MC-251773) The --dev argument for the data generators no longer converts NBT to SNBT properly

---

We’re now releasing the first (and hopefully only) release candidate for Minecraft 1.18.2. This release candidate fixes two world generation bugs that could cause a server to stop running. If there are no major issues following this release, no further changes will be done before the full release, which is planned for February 28th. ​ Happy mining!

## Fixed Bugs in 1.18.2 Release Candidate 1

-   [MC-244682](https://bugs.mojang.com/browse/MC-244682) Some custom dimensions settings can cause the server to stop running, but not crash
-   [MC-248764](https://bugs.mojang.com/browse/MC-248764) Some worldgen datapacks can kill the internal server (possibly related to density functions)

---

The third pre-release for 1.18.2 is now out, fixing more bugs!

Happy Crafting!

## Fixed bugs in 1.18.2 Pre-release 3

-   [MC-218739](https://bugs.mojang.com/browse/MC-218739) Glow berries and glow lichen generation does not cause light updates across chunk borders
-   [MC-244772](https://bugs.mojang.com/browse/MC-244772) Can't double click to join a realm
-   [MC-248539](https://bugs.mojang.com/browse/MC-248539) /locate command not working properly in Flat Worlds
-   [MC-248636](https://bugs.mojang.com/browse/MC-248636) The game output and server console are logged and spammed with "Creating a MIN function between two non-overlapping inputs" when joining or creating a world
-   [MC-248637](https://bugs.mojang.com/browse/MC-248637) Crash when opening singleplayer screen due to StackOverflowError in net.minecraft.nbt.CompoundTag$1.skip
-   [MC-248680](https://bugs.mojang.com/browse/MC-248680) The world freezes on superflat when using the locate command to find a pillager outpost
-   [MC-248748](https://bugs.mojang.com/browse/MC-248748) Explorer maps leading to custom structures can cause the server to hang

---

The second pre-release for 1.18.2 is now out! This pre-release adds a spline density function and fixes a few bugs.

Enjoy!

## Technical Changes in 1.18.2 Pre-Release 2

-   Added [`spline` density](https://wikipedia.org/wiki/Spline_interpolation) function: general-purpose building block that allows you to express almost any function using a cubic spline

## Fixed bugs in 1.18.2 Pre-Release 2

-   [MC-243766](https://bugs.mojang.com/browse/MC-243766) Unable to put focus on "Copyright Mojang AB. Do not distribute" using Tab key
-   [MC-248638](https://bugs.mojang.com/browse/MC-248638) Strongholds can generate in The Void biome
-   [MC-248681](https://bugs.mojang.com/browse/MC-248681) Superflat worlds cannot be created without using presets
-   [MC-248694](https://bugs.mojang.com/browse/MC-248694) An empty generator-settings string crashes the server when starting up
-   [MC-248717](https://bugs.mojang.com/browse/MC-248717) Fortress mobs can spawn outside of fortresses

---

We're now releasing the first pre-release for Minecraft 1.18.2. This pre-release introduces the possibility for data packs to customize cave generation and to add new custom structures to worlds.

If everything goes as expected, we aim to release this version on February 28th.

Happy mining!

## Changes in 1.18.2 Pre-release 1

-   Users running Minecraft in a 32-bit environment will receive a warning in the main menu about the upcoming end of 32-bit environment support

## Technical Changes in 1.18.2 Pre-release 1

-   The data pack version is now 9
-   It is now possible to add custom structures in experimental datapacks
-   `locate` and `locatebiome` commands now support tags (prefix with `#` to distinguish from normal ids)
-   The `locate` command parameter is now a configured structure rather than a structure type. For instance, you can now use `/locate village_desert` or `/locate shipwreck_beached`
-   A lot of the cave generation is now configurable through data packs

### Configurable caves

-   A new registry was added for Density functions (caves are created by combining those together)
-   Noise settings got a new field `noise_router` (and lost a couple of flags), see `worldgen/noise_settings` folder in the worldgen report
-   Noise router wires data-driven parts of the cave generation with the rest of the code

### Configured Structures and Structure Sets

The game now generates and stores data-driven configured structures.

-   Experimental datapacks can add new structure sets
-   The `feature` field in location predicates now references a configured feature
-   The `exploration_map` loot table function `destination` field is now a configured feature tag id
-   The `exploration_map` loot table function no longer automatically sets the display name of the map

#### Side effects

Some gameplay oddities have been affected by this change.

-   Dolphins will now more accurately pick the closest structure regardless of type
-   Bastion Remnant bounding boxes are now slightly more accurate to the shape of the structure

## Fixed bugs in 1.18.2 Pre-release 1

-   [MC-3524](https://bugs.mojang.com/browse/MC-3524) Structure related mobs do not spawn in flat type world generation
-   [MC-146854](https://bugs.mojang.com/browse/MC-146854) Player movement favors x axis when in a corner
-   [MC-179315](https://bugs.mojang.com/browse/MC-179315) Ruined portals never generate in superflat worlds by default
-   [MC-210612](https://bugs.mojang.com/browse/MC-210612) Strongholds do not generate in certain customized worlds despite /locate saying otherwise
-   [MC-241288](https://bugs.mojang.com/browse/MC-241288) Support for custom structures has been removed
-   [MC-244137](https://bugs.mojang.com/browse/MC-244137) The option "level-seed" is not present in server.properties by default
-   [MC-248532](https://bugs.mojang.com/browse/MC-248532) Elytra firework particle spawns on the wrong hand when dual wielding fireworks

---

