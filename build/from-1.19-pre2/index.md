# Minecraft 1.19 Pre-Release 2

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
-   [MC-251646](https://bugs.mojang.com/browse/MC-251646) "death.attack.sonic\_boom.item" displays raw translation string (is untranslated)
-   [MC-251670](https://bugs.mojang.com/browse/MC-251670) Villager sometimes won't refill their stock
-   [MC-251675](https://bugs.mojang.com/browse/MC-251675) Mesa Mineshafts no longer generate with /place command outside of badlands biomes despite saying the structure has been generated successfully
-   [MC-251736](https://bugs.mojang.com/browse/MC-251736) Reflected ghast fireball cannot hit the ghast
-   [MC-251824](https://bugs.mojang.com/browse/MC-251824) Wardens aren't angered by being hit with damageless projectiles
-   [MC-251854](https://bugs.mojang.com/browse/MC-251854) "It Spreads" advancement can be granted when killing a mob that does not give experience
-   [MC-251859](https://bugs.mojang.com/browse/MC-251859) Gear equipping sound plays every time armor/elytra durability changes while equipped
-   [MC-251860](https://bugs.mojang.com/browse/MC-251860) The minecraft:item.armor.equip\_generic sound is produced when giving items to allays
-   [MC-251862](https://bugs.mojang.com/browse/MC-251862) Shift clicking the destroy item button in the creative inventory creates a vibration when there is nothing in your equipment slots
-   [MC-251864](https://bugs.mojang.com/browse/MC-251864) The minecraft:item.armor.equip\_generic sound is produced when filling water buckets with fish, axolotls, or tadpoles
-   [MC-251871](https://bugs.mojang.com/browse/MC-251871) The minecraft:item.armor.equip\_generic sound is produced and can only be heard by other players when switching items between hands
-   [MC-251876](https://bugs.mojang.com/browse/MC-251876) Villagers produce armor equipping sound when previewing armor
-   [MC-251889](https://bugs.mojang.com/browse/MC-251889) io.netty.handler.codec.EncoderException when evaluating too many entity selectors in chat preview
-   [MC-251890](https://bugs.mojang.com/browse/MC-251890) run\_command click events send value as command instead of chat message
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
-   [MC-251479](https://bugs.mojang.com/browse/MC-251479) Duplicate object key \[lang file\]
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

