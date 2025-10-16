# Minecraft 1.19 Pre-release 1

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

We're now releasing a third release candidate for Minecraft 1.18.1 to fix a critical security issue. If there are no major issues following this release, no further changes will be done before the full release.

Happy mining!

---

We're now releasing the second (uh... something something hopefully) release candidate for Minecraft 1.18.1. This release candidate fixes a chunk rendering issue. If there are no major issues following this release, no further changes will be done before the full release. ​ Happy mining!

## Fixed Bugs in 1.18.1 Release Candidate 2

-   [MC-245010](https://bugs.mojang.com/browse/MC-245010) Sometimes certain chunks will never load

---

We're now releasing the first (and hopefully only) release candidate for Minecraft 1.18.1. This release candidate fixes crashes and bugs. If there are no major issues following this release, no further changes will be done before the full release. ​ Happy mining! ​

## Fixed Bugs in 1.18 Release Candidate 1

​

-   [MC-229321](https://bugs.mojang.com/browse/MC-229321) Bees inside of bee hives / nests sometimes despawn when the world is reloaded
-   [MC-243796](https://bugs.mojang.com/browse/MC-243796) Random non fatal exceptions in console: Failed to store chunk ConcurrentModificationException
-   [MC-244190](https://bugs.mojang.com/browse/MC-244190) Entity fog doesn't match the fog of blocks around them

---

We're now releasing the first pre-release for Minecraft 1.18.1. This will be a fairly small release that will fix a few stability issues and a few bugs. We aim to release this version at the end of next week.

Happy mining!

## Technical Changes in 1.18.1 Pre-Release 1

-   Fixed an issue that would cause players on low-bandwidth connections to get timeout errors when connecting to a server
-   World fog now starts further away from the player, to make distant terrain more visible
-   Instead of applying fog as a spherical volume it is now applied as a cylindrical volume

## Fixed Bugs in 1.18.1 Pre-Release 1

-   [MC-219507](https://bugs.mojang.com/browse/MC-219507) - Beacon's power reverts back to previous one on world reload
-   [MC-242729](https://bugs.mojang.com/browse/MC-242729) - Observer activating without any updates nearby, caused by /clone
-   [MC-243216](https://bugs.mojang.com/browse/MC-243216) - Chunk render distance on servers seems shorter than in 1.17.1

---

We're now releasing the fourth (and totally last) release candidate for Caves & Cliffs: Part II. If there are no major issues following this release, no further changes will be done before the full release.

## Changes in 1.18 Release Candidate 4

​

-   Fixed an issue with the lower distribution of coal ore

---

We're now releasing the third (and almost certainly last) release candidate for Caves & Cliffs: Part II. If there are no major issues following this release, no further changes will be done before the full release. ​ Happy crafting!

## Fixed bugs in 1.18 Release Candidate 3

​

-   [MC-242859](https://bugs.mojang.com/browse/MC-242859) Blocks losing the loot inside them after dying

​

---

