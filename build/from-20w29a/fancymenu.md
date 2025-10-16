# Minecraft Snapshot 20w29a

Today we're releasing Snapshot 20w29a for Minecraft Java Edition. We found some bugs to squash, but also snuck in a technical change or two!

## Changes in 20w29a

-   Tools are now sorted based on material in the creative inventory

## Technical Changes in 20w29a

### Commands

#### spawnpoint & setworldspawn

Added angle parameter for setting the default facing angle of a respawning player.  
Syntax: `spawnpoint [targets] [pos] [angle]`  
Syntax: `setworldspawn [pos] [angle]` New parameters:

-   `angle`: Floating point angle in degrees. Supports the relative `~` modifier

### Customized world generation

-   `worldgen/noise_settings` can now contain noise configurations

## Fixed bugs in 20w29a

-   [MC-194464](https://bugs.mojang.com/browse/MC-194464) "large;;_;;oak;;_;;foliage;;_;;placer" incorrectly serializes to "blob;;_;;foliage;;_;;placer"
-   [MC-194298](https://bugs.mojang.com/browse/MC-194298) Bone meal can't create flowers
-   [MC-194257](https://bugs.mojang.com/browse/MC-194257) Several instances of "snowy" being spelled as "snovy" in the vanilla;;_;;worldgen configuration
-   [MC-194220](https://bugs.mojang.com/browse/MC-194220) Totems of Undying give you Fire Resistance II instead of the maximum Fire Resistance I
-   [MC-194200](https://bugs.mojang.com/browse/MC-194200) Birch trees are not generated correctly in the Birch Forest and Birch Forest Hills biomes
-   [MC-194173](https://bugs.mojang.com/browse/MC-194173) Hitboxes are rendered offset while picking up items or experience on graphics settings Fast and Fancy
-   [MC-193662](https://bugs.mojang.com/browse/MC-193662) Player flying in creative slightly above blocks while sneaking and jumping are restrained to that block
-   [MC-193560](https://bugs.mojang.com/browse/MC-193560) Enchantment glint doesn't render on elytra in specific circumstances
-   [MC-192021](https://bugs.mojang.com/browse/MC-192021) Enchantment Glint effect on transparent blocks not properly rendered on Fabulous graphic
-   [MC-191623](https://bugs.mojang.com/browse/MC-191623) Ender dragon battle music does not stop after ender dragon has been defeated
-   [MC-191031](https://bugs.mojang.com/browse/MC-191031) Players in spectator mode can interact with boats
-   [MC-190559](https://bugs.mojang.com/browse/MC-190559) Baby striders don't die when it's raining and they are in lava
-   [MC-189788](https://bugs.mojang.com/browse/MC-189788) Certain mobs in boats sometimes take drowning damage while the boat is moving
-   [MC-185019](https://bugs.mojang.com/browse/MC-185019) Worldgen settings with empty structures parameter generates all structures extremely frequent
-   [MC-176836](https://bugs.mojang.com/browse/MC-176836) Unarmed vindicators raise their arm in offensive way when attacking
-   [MC-176778](https://bugs.mojang.com/browse/MC-176778) Camera is reset when a block reappears due to high server latency
-   [MC-166718](https://bugs.mojang.com/browse/MC-166718) Mobs no longer suffocate inside of soul sand, farmland or grass paths
-   [MC-158735](https://bugs.mojang.com/browse/MC-158735) Pillagers without crossbows hold their arm up, in a way that may be offensive to some people
-   [MC-153230](https://bugs.mojang.com/browse/MC-153230) Players in spectator mode can stop minecarts

---

This week's snapshot introduces experimental support for custom biomes in data packs. This work has involved redoing some of the internal plumbing of things behind the scene, so it might be a bit leaky. We hope no important parts drip out, but if they do, pick them back up for us, please.

As always, make sure to make backups if you try a world in a snapshot.

## Changes in 20w28a

​

-   Villagers now emit green particles when joining a village, setting a home bed, or acquiring a job site/profession
-   Brewing stands can now be crafted with blackstone
-   Tweaked bartering loot
-   Totems of undying now give the fire resistance status affect for 40 seconds when activated

​

## Technical Changes in 20w28a

​

-   Custom worlds now support custom biomes
-   Dedicated servers can now rate limit clients

​

### Customized world generation

​

-   There is now experimental support for a `worldgen` folder in data packs
-   `worldgen/biome` can contain biome definitions
-   `worldgen/configured_carver` can contain definitions for world carver settings
-   `worldgen/configured_feature` can contain definitions for feature placements
-   `worldgen/configured_structure_feature` can contain definitions for structure placements
-   `worldgen/configured_surface_builder` can contain definitions for surfaces
-   `worldgen/processor_list` can contain sets of block processors
-   `worldgen/template_pool` can contain pool definitions for jigsaw structures
-   Custom biomes can now be used in the single biome/caves/floating islands world types (add the data pack containing the biome first)
-   Custom biomes can now be used in custom dimension generators

​

### Dedicated server packet limit

​

-   Dedicated servers can now kick clients that consistently send too many packets within a second
-   Controlled with the `rate-limit` settings in `server.properties`
-   The default rate limit of 0 means "no limit"

​

## Fixed bugs in 20w28a

​

-   [MC-34661](https://bugs.mojang.com/browse/MC-34661) Thorns enchantment causes double armor decay
-   [MC-65953](https://bugs.mojang.com/browse/MC-65953) Tags IsBaby and IsVillager can't be changed from true to false with /entitydata
-   [MC-171363](https://bugs.mojang.com/browse/MC-171363) Nether forest biomes: Large fungi and small plants only generate on the topmost layer of nylium, leaving all lower layers devoid of flora
-   [MC-172221](https://bugs.mojang.com/browse/MC-172221) Hoglins, zoglins, ravagers, iron golems, and polar bears won't walk down a block if they are partially walking on air
-   [MC-173526](https://bugs.mojang.com/browse/MC-173526) All Minecarts can survive in lava
-   [MC-174479](https://bugs.mojang.com/browse/MC-174479) Cannot place sea pickles on soul sand
-   [MC-174520](https://bugs.mojang.com/browse/MC-174520) Soul particle texture is incorrect for the first frame
-   [MC-176753](https://bugs.mojang.com/browse/MC-176753) Piglins stand around dropped golden items if their "CanPickUpLoot" tag is set to "0b"
-   [MC-179369](https://bugs.mojang.com/browse/MC-179369) Wandering Traders are always invisible in the Nether and the End
-   [MC-181204](https://bugs.mojang.com/browse/MC-181204) doDaylightCycle button slightly incorrectly labeled
-   [MC-181233](https://bugs.mojang.com/browse/MC-181233) Mobs cannot spawn on wooden trapdoors, but can on iron and nether fungus trapdoors
-   [MC-182430](https://bugs.mojang.com/browse/MC-182430) Piglins continuously try and fail to pick up gold ingots if they can't reach them
-   [MC-182868](https://bugs.mojang.com/browse/MC-182868) Rail updates are 4-5x times laggier since 1.14 if the rail is on top of a non-full cube
-   [MC-185684](https://bugs.mojang.com/browse/MC-185684) Enderman can teleport when hit in cases where they previously would not teleport
-   [MC-185925](https://bugs.mojang.com/browse/MC-185925) Casting issue: Mineral vein generation uses 32-bit floats, leading to precision loss and potential crashes
-   [MC-187112](https://bugs.mojang.com/browse/MC-187112) Extra space in "Keep Jigsaws" button in jigsaw block
-   [MC-187126](https://bugs.mojang.com/browse/MC-187126) Jigsaw block UI is not closed when pressing "Generate"
-   [MC-187129](https://bugs.mojang.com/browse/MC-187129) Jigsaw blocks do not generate the correct structure until "Done" is pressed and the UI is reopened
-   [MC-188459](https://bugs.mojang.com/browse/MC-188459) Potted cactus still missing cullface argument for top
-   [MC-188534](https://bugs.mojang.com/browse/MC-188534) Potted cactus missing bottom face
-   [MC-189769](https://bugs.mojang.com/browse/MC-189769) Fungi grows through fire
-   [MC-190098](https://bugs.mojang.com/browse/MC-190098) Structure size and offset still limited to 32 for dedicated servers
-   [MC-190852](https://bugs.mojang.com/browse/MC-190852) Advancement announcement message has switched brackets for right-to-left languages
-   [MC-190856](https://bugs.mojang.com/browse/MC-190856) '/list uuids' shows parentheses incorrectly for right-to-left languages
-   [MC-190860](https://bugs.mojang.com/browse/MC-190860) '/' (slash) in chat and command block shows legacy formatting symbol for right-to-left languages
-   [MC-190891](https://bugs.mojang.com/browse/MC-190891) Certain redstone circuits causing lag
-   [MC-190892](https://bugs.mojang.com/browse/MC-190892) Brackets in potion effects are reversed in right-to-left languages
-   [MC-191501](https://bugs.mojang.com/browse/MC-191501) Opening a world from earlier 1.14 releases in 1.16 causes villagers to vanish
-   [MC-191571](https://bugs.mojang.com/browse/MC-191571) Switched square brackets for right-to-left languages
-   [MC-191579](https://bugs.mojang.com/browse/MC-191579) Book signing GUI has broken formatting for right-to-left languages
-   [MC-191656](https://bugs.mojang.com/browse/MC-191656) Right-to-left languages don't perform as expected in creative search menu
-   [MC-192306](https://bugs.mojang.com/browse/MC-192306) Crimson and warped slabs use incorrect colors on maps
-   [MC-193073](https://bugs.mojang.com/browse/MC-193073) Game crashes when Piglins or Piglin Brutes convert to Zombified Piglins
-   [MC-193089](https://bugs.mojang.com/browse/MC-193089) Mobs do not get damaged anymore if they're in lava and water at the same time
-   [MC-193125](https://bugs.mojang.com/browse/MC-193125) Cannot use "Inventory" key to write in recipe book, it closes GUI instead (Default: "E")

---

It's time for another snapshot cycle as we make our way towards 1.16.2! This snapshot introduces the Piglin Brutes, and you might have heard about them in a [Bedrock beta](https://feedback.minecraft.net/hc/en-us/articles/360045006632-Minecraft-Beta-1-16-20-50-Xbox-One-Windows-10-Android-) already.

The Piglin Brutes will be the only feature addition of 1.16.2, the rest of these snapshots will be focused on fixing bugs.

## New Features in 20w27a

-   Added Piglin Brutes!

### Piglin Brute

-   Piglin Brutes are stronger versions of Piglins that live in bastions and protect the treasures there
-   Unlike their cowardly and greedy counterparts, the Piglin Brutes cannot be distracted by gold and aren't afraid of anything
-   Piglin Brutes attack players on sight, no matter how the player is dressed
-   Piglin Brutes wield axes and don't need any armor, because they're just that tough

## Changes in 20w27a

-   Zoglins can now be leashed
-   Crimson and warped fungus can now be placed on mycelium

## Technical Changes in 20w27a

-   Small improvements to data and resource pack selection screens

### Pack selection screens

-   While screen is open, it will automatically update when pack directory contents change
-   Both pack selection screen will now display contents of `pack.png` as pack icon

## Fixed bugs in 20w27a

-   [MC-1058](https://bugs.mojang.com/browse/MC-1058) A dragon head is invisible if the entity wearing it is not in view
-   [MC-2404](https://bugs.mojang.com/browse/MC-2404) Stepping down while sneaking allows falling off of blocks
-   [MC-49476](https://bugs.mojang.com/browse/MC-49476) NBT "HideFlags" does not hide "Dyed" on leather armor
-   [MC-68487](https://bugs.mojang.com/browse/MC-68487) Player heads of the same player always have the same skin texture, even if the saved texture data is different
-   [MC-97507](https://bugs.mojang.com/browse/MC-97507) Using item which modifies the held item shows "Gear equips" subtitle
-   [MC-145691](https://bugs.mojang.com/browse/MC-145691) Binding "Open/Close Inventory" to Tab only opens inventory
-   [MC-150417](https://bugs.mojang.com/browse/MC-150417) Some items get stuck in soul sand when there is liquid above the soul sand
-   [MC-167285](https://bugs.mojang.com/browse/MC-167285) Travelling into an end gateway with a platform on the other side while on a boat would instantly teleport you back
-   [MC-171739](https://bugs.mojang.com/browse/MC-171739) Weeping and twisting vines, bamboo, and kelp can be replaced by "saplings" by breaking and placing the block at the same time
-   [MC-173526](https://bugs.mojang.com/browse/MC-173526) All Minecarts can survive in lava
-   [MC-178729](https://bugs.mojang.com/browse/MC-178729) Inconsistency: Red and brown mushrooms can't be grown into huge mushrooms on nylium, while they can on all other "grass" blocks
-   [MC-182652](https://bugs.mojang.com/browse/MC-182652) Ruined portals don't always spawn with chest
-   [MC-183663](https://bugs.mojang.com/browse/MC-183663) Farmer villagers don't compost correctly
-   [MC-183743](https://bugs.mojang.com/browse/MC-183743) Iron golem overpopulation
-   [MC-185274](https://bugs.mojang.com/browse/MC-185274) Subtitles are still showing ''Gear equips'' when eating in snapshot 20w21a or newer.
-   [MC-188473](https://bugs.mojang.com/browse/MC-188473) Resource pack screen no longer updates when adding or removing resource packs
-   [MC-188969](https://bugs.mojang.com/browse/MC-188969) Having a suspicious stew in inventory prevents all types of suspicious stew from going into your inventory when milking brown mooshroom
-   [MC-189909](https://bugs.mojang.com/browse/MC-189909) player;;_;;interacted;;_;;with;;_;;entity does not trigger if there is only one item and the item gets consumed
-   [MC-190021](https://bugs.mojang.com/browse/MC-190021) Trying to mount a pig or strider while sneaking plays hand animation
-   [MC-190266](https://bugs.mojang.com/browse/MC-190266) Players and other entities can catch on fire after logging on while riding a Strider in lava
-   [MC-190274](https://bugs.mojang.com/browse/MC-190274) Collecting liquids in bottles on Creative mode is inconsistent with the new creative bucket mechanics
-   [MC-190849](https://bugs.mojang.com/browse/MC-190849) Slime blocks can only push entities 5 blocks high instead of 6 blocks high as in 1.15.2
-   [MC-191915](https://bugs.mojang.com/browse/MC-191915) While in a boat the elytra does not show as enchanted
-   [MC-192894](https://bugs.mojang.com/browse/MC-192894) Transparency layers lose their auxiliary depth buffer ID when resized

## Get the Snapshot

Snapshots are available for Minecraft Java Edition. To install the snapshot, open up the Minecraft Launcher and enable snapshots in the "Installations" tab.

Testing versions can corrupt your world, please backup and/or run them in a different folder from your main worlds.

Cross-platform server jar:

-   [Minecraft server jar](https://launcher.mojang.com/v1/objects/40efae0a2412154f44a99f158752b8417b384f06/server.jar)

---

It has been a busy week for us but we still wanted to squeeze out a snapshot as we've been busy squashing a bunch of bugs.

## Experimental Rendering Changes

We've included some experimental changes to graphics rendering in this snapshot, which might reveal some issues on a small number of older graphics cards.

If do you find any new graphical bugs then please report them to the bug tracker with the make and model of your graphics card as well as which operating system you are using ​

## New Features in 20w22a

​

-   Piglins now sometimes dance in celebration of a completed hunt

​

## Changes in 20w22a

​

-   Villager workstation logic changes
-   Bells can be hung from the underside of more blocks
-   When a villager that was traded with is struck by lightning, the witch it is converted to will no longer despawn
-   Players can no longer mount another entity when the crouch key is held down

​

### Villager Workstation Logic

​

-   Villagers no longer try to work at the same workstation
-   The most experienced nearby villager for the profession corresponding to the workstation you add will get the workstation
-   Villagers now have to walk to and reach the workstation before they can acquire the profession / work there
-   Villagers can no longer claim workstations / professions during raids or night time.
-   Villagers will check and make sure their workstation is valid at all times of day as long as they are within 16 blocks of their workstation.

​

## Technical Changes in 20w22a

​

-   Slightly changed datapack loading to prevent custom datapacks from crashing
-   Cached repeated block type lookups and collisions during pathfinding for increased performance
-   Minor optimizations in collision detection
-   Top level element in predicate file can now be array (all contents will be ANDed)
-   Added shader support for accessing depth buffer.
-   Renderer now uses per-pixel blending layers for some transparent elements.

​

### Datapack loading

​

-   If datapack reload fails, changes will not be applied and game will continue using previous data
-   If existing datapacks prevent world from loading, game will give option to load world in safe mode, which loads only vanilla datapack
-   Changes to datapack list are stored only after successful reload
-   Added `--safeMode` option to server to load only with vanilla datapack
-   Game will now detect critical datapack issues, like missing required tags and prevent world from being loaded

​

## Fixed bugs in 20w22a

-   [MC-667](https://bugs.mojang.com/browse/MC-667) Lily pads can be placed intersecting entities
-   [MC-4065](https://bugs.mojang.com/browse/MC-4065) Messages/commands sent while in a bed won't be remembered in sent history
-   [MC-112131](https://bugs.mojang.com/browse/MC-112131) Intersecting dungeons: spawner replaced by cobblestone
-   [MC-118594](https://bugs.mojang.com/browse/MC-118594) Removal of Log4J2Plugins.dat causing a slowdown of 3 secs on startup while it has to rescan all classes
-   [MC-120805](https://bugs.mojang.com/browse/MC-120805) Pig rotation is wrong when you see a player riding them with carrot on a stick
-   [MC-124812](https://bugs.mojang.com/browse/MC-124812) Endermen holding a block can despawn
-   [MC-125006](https://bugs.mojang.com/browse/MC-125006) Stronghold and dungeon generate over each other
-   [MC-134755](https://bugs.mojang.com/browse/MC-134755) All short mobs drown just below the surface of water
-   [MC-143443](https://bugs.mojang.com/browse/MC-143443) Redstone dust block states don't update properly if the wire is broken by a piston
-   [MC-148893](https://bugs.mojang.com/browse/MC-148893) Fox spawners do not render the fox inside of the block
-   [MC-150806](https://bugs.mojang.com/browse/MC-150806) Multiple villagers are attached to the same profession block
-   [MC-153787](https://bugs.mojang.com/browse/MC-153787) Zombie Reinforcements can spawn on glass
-   [MC-156161](https://bugs.mojang.com/browse/MC-156161) Some chest loot is randomized across the same seed, unlike before 1.14
-   [MC-156866](https://bugs.mojang.com/browse/MC-156866) Villagers level from Apprentice to Journeyman with less experience than shown by XP bar
-   [MC-157303](https://bugs.mojang.com/browse/MC-157303) Villagers wake up and seek a new "home" (bed) while living in a 2 high house
-   [MC-157436](https://bugs.mojang.com/browse/MC-157436) Player position is constantly reset when clicking with a sword or a trident onto the ground in creative mode
-   [MC-162340](https://bugs.mojang.com/browse/MC-162340) World border is rendered behind transparent blocks
-   [MC-162665](https://bugs.mojang.com/browse/MC-162665) Food does not drop from a campfire when it is put out with a shovel/water bottle
-   [MC-163910](https://bugs.mojang.com/browse/MC-163910) Hand animation sometimes plays for a second time with high ping
-   [MC-164233](https://bugs.mojang.com/browse/MC-164233) "Skilled" villagers without job site do not get precedence over unemployed villagers
-   [MC-165549](https://bugs.mojang.com/browse/MC-165549) Arm swing animation is still played when drinking an item
-   [MC-166135](https://bugs.mojang.com/browse/MC-166135) Bees inside a nest/hive don't grow up or get their breeding timer reset
-   [MC-167039](https://bugs.mojang.com/browse/MC-167039) Right-clicking on a spawner with the same mob spawn egg as in spawner plays hand animation
-   [MC-169891](https://bugs.mojang.com/browse/MC-169891) Zombie Reinforcements can spawn in regardless if light level is higher than 9 in nether (hard difficulty)
-   [MC-171515](https://bugs.mojang.com/browse/MC-171515) Semi-transparent items don't render properly in front of semi-transparent blocks
-   [MC-171553](https://bugs.mojang.com/browse/MC-171553) Basalt can generate inside Nether fortresses
-   [MC-172079](https://bugs.mojang.com/browse/MC-172079) The /clear command output doesn't count items in the inventory crafting grid
-   [MC-172142](https://bugs.mojang.com/browse/MC-172142) Items are invisible while being picked up
-   [MC-172197](https://bugs.mojang.com/browse/MC-172197) Nylium is not dropping netherrack when it is broken by pickaxe
-   [MC-172272](https://bugs.mojang.com/browse/MC-172272) /clear removes all items from crafting grid regardless of item type
-   [MC-172479](https://bugs.mojang.com/browse/MC-172479) Hoglins immediately attack invisible players
-   [MC-172980](https://bugs.mojang.com/browse/MC-172980) Light does not propagate across chunk borders properly
-   [MC-173032](https://bugs.mojang.com/browse/MC-173032) Fossils can overwrite the stronghold end portal
-   [MC-173063](https://bugs.mojang.com/browse/MC-173063) Redstone wire doesn't update connections going up or down when being placed by commands
-   [MC-173197](https://bugs.mojang.com/browse/MC-173197) Zombified Piglin does not hold its arms upwards like a zombie
-   [MC-173404](https://bugs.mojang.com/browse/MC-173404) Desync when mounting an entity while sneaking
-   [MC-173552](https://bugs.mojang.com/browse/MC-173552) Nether Fossil support islands are sometimes cut off at chunk borders
-   [MC-174307](https://bugs.mojang.com/browse/MC-174307) Nether fossil stops basalt pillar
-   [MC-174325](https://bugs.mojang.com/browse/MC-174325) Mushrooms or Nether fungi can replace the stem of large nether fungi (trees)
-   [MC-174692](https://bugs.mojang.com/browse/MC-174692) Shroomlights, wart blocks and vines can overwrite the stem of large Nether fungi
-   [MC-174932](https://bugs.mojang.com/browse/MC-174932) Right-to-left text appears left-to-right after game start until language is changed
-   [MC-175553](https://bugs.mojang.com/browse/MC-175553) Piglins don't drop their inventories when converted to zombified piglins
-   [MC-176020](https://bugs.mojang.com/browse/MC-176020) If a player is riding a strider, other players can not see the animation of the strider
-   [MC-176051](https://bugs.mojang.com/browse/MC-176051) Glowstone in the offhand sets spawn point and charges respawn anchor at the same time
-   [MC-176147](https://bugs.mojang.com/browse/MC-176147) Basalt randomly gets cut off
-   [MC-176628](https://bugs.mojang.com/browse/MC-176628) Frost Walker protects player from fire
-   [MC-177150](https://bugs.mojang.com/browse/MC-177150) Ticking entity java.lang.IllegalStateException: Tag minecraft:fire used before it was bound
-   [MC-177265](https://bugs.mojang.com/browse/MC-177265) Piglin and Zombified Piglin right arm/leg/loincloth textures are identical to the left ones
-   [MC-177626](https://bugs.mojang.com/browse/MC-177626) Spruce generation is broken
-   [MC-177870](https://bugs.mojang.com/browse/MC-177870) Soul campfire doesn’t deal twice the amount of damage as normal campfire
-   [MC-177888](https://bugs.mojang.com/browse/MC-177888) Blackstone can’t be used to repair stone tools and weapons using an anvil
-   [MC-177962](https://bugs.mojang.com/browse/MC-177962) Giant fungi can replace waterlogged blocks when growing
-   [MC-177970](https://bugs.mojang.com/browse/MC-177970) Player can occasionally be forced into crawling in one block tall spaces
-   [MC-178003](https://bugs.mojang.com/browse/MC-178003) Fossils can generate inside of desert temples
-   [MC-178441](https://bugs.mojang.com/browse/MC-178441) Endermen don't avoid the wither's skull projectiles
-   [MC-179020](https://bugs.mojang.com/browse/MC-179020) Jigsaw blocks do not disappear post-gen when structure is spawned using the 'Generate' action from an initial jigsaw
-   [MC-179890](https://bugs.mojang.com/browse/MC-179890) Fire stops ticking forever if gamerule doFireTick is set to false once
-   [MC-179909](https://bugs.mojang.com/browse/MC-179909) 2x2 trees sometimes fail to grow, but if they grow, they always grow on the surface
-   [MC-180098](https://bugs.mojang.com/browse/MC-180098) Farmer villagers' farming behavior is broken
-   [MC-180771](https://bugs.mojang.com/browse/MC-180771) Observer not updating when tree grows leaves in front of it
-   [MC-180877](https://bugs.mojang.com/browse/MC-180877) Fire does not spread from netherack to other blocks
-   [MC-181108](https://bugs.mojang.com/browse/MC-181108) Right-to-left text is displayed left-to-right at all times
-   [MC-181464](https://bugs.mojang.com/browse/MC-181464) When a piglin picks up a shield the gear equip sound is infinitely spammed
-   [MC-181529](https://bugs.mojang.com/browse/MC-181529) Ctrl + Pick Block no longer copies skull / head NBT data properly
-   [MC-181555](https://bugs.mojang.com/browse/MC-181555) When replacing a snow layer with a grass block, podzol or mycelium, the block has the "snowy=true" blockstate
-   [MC-182666](https://bugs.mojang.com/browse/MC-182666) Parity issue: Piglins do not have a dancing animation when celebrating their victory
-   [MC-182888](https://bugs.mojang.com/browse/MC-182888) Compasses and clocks work like normal in villager trading GUI
-   [MC-182919](https://bugs.mojang.com/browse/MC-182919) Horse armour stops rendering if you equip the horse with a saddle by right-clicking
-   [MC-182967](https://bugs.mojang.com/browse/MC-182967) Throwing ender pearl whilst mounted doesn't teleport you
-   [MC-183275](https://bugs.mojang.com/browse/MC-183275) Basalt pillars end above the lava in Java Edition but inside of the lava in Bedrock Edition
-   [MC-183374](https://bugs.mojang.com/browse/MC-183374) Text on signs stops rendering while still in view
-   [MC-183496](https://bugs.mojang.com/browse/MC-183496) Enchantment glint doesn't render in boat interior
-   [MC-183718](https://bugs.mojang.com/browse/MC-183718) Stronghold end portal can be overwritten by ocean ruins
-   [MC-183808](https://bugs.mojang.com/browse/MC-183808) "Bee Our Guest" advancement does not trigger when harvesting honey from bee nests
-   [MC-183860](https://bugs.mojang.com/browse/MC-183860) Zombie villager converted from villager gets PersistenceRequired depending on whether attacking zombie had it
-   [MC-184482](https://bugs.mojang.com/browse/MC-184482) End Gateways don't generate after defeating the ender dragon
-   [MC-184609](https://bugs.mojang.com/browse/MC-184609) Text renders in the wrong order
-   [MC-184619](https://bugs.mojang.com/browse/MC-184619) Piglins riding on other entities float
-   [MC-184629](https://bugs.mojang.com/browse/MC-184629) Piglins riding on hoglins or other piglins automatically dismount them
-   [MC-184730](https://bugs.mojang.com/browse/MC-184730) ;;[;;Crash;;];; "java.lang.NullPointerException: mouseClicked event handler" Some Superflat presets crash immediately when trying to generate them
-   [MC-184740](https://bugs.mojang.com/browse/MC-184740) Structures generated in previous versions are not recognised as valid structures, causing mobs not to spawn
-   [MC-184778](https://bugs.mojang.com/browse/MC-184778) Redstone dust can be toggled between cross and dot in adventure mode
-   [MC-184936](https://bugs.mojang.com/browse/MC-184936) Old Minecraft logo in the end poem/credits
-   [MC-185156](https://bugs.mojang.com/browse/MC-185156) Worldgen settings are not validated and can cause crashes

---

