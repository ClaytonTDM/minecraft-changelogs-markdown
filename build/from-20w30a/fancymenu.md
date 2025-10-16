# Minecraft Snapshot 20w30a

Today we're releasing Snapshot 20w30a for Minecraft Java Edition in which we've tweaked Bastion Remnants, and given you the ability to have lanterns under water.

## Changes in 20w30a

-   Modified how respawn positions are chosen for beds and respawn anchors
-   Lanterns can now be waterlogged
-   Soul Lanterns can now be waterlogged
-   Tweaked the Bastion Remnant chest loot
-   Chests in Bastion Remnants are now more likely to be located on top of gilded blackstone

### Respawn Block Positions

-   Respawn anchors will prioritize cardinal directions over corners
-   Beds will prioritize the side of the bed the player entered from and then spaces circling around the foot of the bed up to the head of the bed
-   Respawning players will now face the block that they respawned at
-   Placing players onto dangerous blocks is now avoided when possible

## Technical Changes in 20w30a

-   The sign edit screen will now intialize from existing sign text (should have no noticeable impact on vanilla)
-   Tags can now have optional entries

### Optional Tag Entries

Entries in tags can now be marked as optional. Failure to resolve optional entries does not prevent the whole tag from loading.

Example:

    {
      "replace": false,
      "values": [
        "#minecraft:beds", // existing syntax
        { "id":"#missing:tag", "required": false }, // optional sub-tag entry
    "minecraft:anvil", // existing syntax
    { "id":"minecraft:stone_button", "required": true }, // new syntax for required tags
    { "id":"missing:block", "required": false } // optional single-element entry
    
    

## Fixed bugs in 20w30a

-   [MC-35765](https://bugs.mojang.com/browse/MC-35765) Viewing text in Right-to-Left language while in another language renders backwards and non-connected
-   [MC-57869](https://bugs.mojang.com/browse/MC-57869) Some item tooltips use § for coloring, rendering them incorrect in right-to-left languages
-   [MC-116857](https://bugs.mojang.com/browse/MC-116857) Advancement descriptions use unnecessary capitalization on generic resource names
-   [MC-148447](https://bugs.mojang.com/browse/MC-148447) Villagers often get stuck while trying to go through a door at the same time
-   [MC-149060](https://bugs.mojang.com/browse/MC-149060) Villagers "spam" doors by opening and closing them really fast
-   [MC-153195](https://bugs.mojang.com/browse/MC-153195) Mobs can drop items with duplicate enchantments
-   [MC-181925](https://bugs.mojang.com/browse/MC-181925) Unarmed vexes raise their arms in an offensive way when attacking
-   [MC-187344](https://bugs.mojang.com/browse/MC-187344) Fast graphics tooltip has incorrect 'tree-leaves' spelling
-   [MC-187379](https://bugs.mojang.com/browse/MC-187379) Text for pack.incompatible.confirm.new makes no sense
-   [MC-187380](https://bugs.mojang.com/browse/MC-187380) Incorrect grammar in en;;_;;us translation of pack.dropConfirm
-   [MC-188389](https://bugs.mojang.com/browse/MC-188389) Several minor errors in datapackFailure.title
-   [MC-188390](https://bugs.mojang.com/browse/MC-188390) Comma splices in four strings
-   [MC-188392](https://bugs.mojang.com/browse/MC-188392) Death message for getting shot by a skull is not grammatically correct in all situations
-   [MC-188621](https://bugs.mojang.com/browse/MC-188621) Mojang "Production Manager" credit is indented further than other credits
-   [MC-188880](https://bugs.mojang.com/browse/MC-188880) Baby zombified piglins riding on chickens aren't positioned properly
-   [MC-189918](https://bugs.mojang.com/browse/MC-189918) Multiplayer warning uses "Mojang" instead of "Mojang Studios"
-   [MC-190102](https://bugs.mojang.com/browse/MC-190102) Some UI strings are not consistently capitalized
-   [MC-190288](https://bugs.mojang.com/browse/MC-190288) Fabulous and Fancy graphics tooltips have missing commas
-   [MC-191441](https://bugs.mojang.com/browse/MC-191441) Right-to-left text is rendered bottom-up in some cases
-   [MC-191562](https://bugs.mojang.com/browse/MC-191562) "Cancel" button overlaps "Done" button when uploading a world to Realms, making users unable to upload world
-   [MC-192296](https://bugs.mojang.com/browse/MC-192296) Spider Jockey from a spawner minecart crashes with"java.lang.IllegalStateException: Entity is already tracked"
-   [MC-193276](https://bugs.mojang.com/browse/MC-193276) Player floats slightly above strider while riding it
-   [MC-193339](https://bugs.mojang.com/browse/MC-193339) NullPointerException during shutdown when rcon enabled with no password
-   [MC-194263](https://bugs.mojang.com/browse/MC-194263) Large End Cities do not generate correctly / get cut off
-   [MC-194273](https://bugs.mojang.com/browse/MC-194273) Save data of new Nether biomes is lost when upgrading a world to 20w28a or above
-   [MC-194350](https://bugs.mojang.com/browse/MC-194350) Some feature configurations don't load in a datapack (java.lang.IllegalArgumentException: value already present: clh@77f95e19)
-   [MC-195052](https://bugs.mojang.com/browse/MC-195052) "angle" argument in spawnpoint command doesn't use "minecraft:rotation" parser
-   [MC-195582](https://bugs.mojang.com/browse/MC-195582) Typing a colon twice or after a slash in chat when specifying a function/item/block/etc. in a command crashes the game

---

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

In this snapshot, we're adding support for custom world settings and custom dimensions. This is an early release to hear your feedback about this feature - do note that this support is considered experimental and unsupported. Any custom world settings may change from one snapshot to the next, and worlds using custom settings will be clearly marked as experimental in your worlds list. ​

## New Features in 20w21a

​

-   Added the ability to toggle redstone wire between a cross and a dot
-   Added import/export world settings functionality
-   Added a new disableMultiplayer command line option - when used, the Multiplayer button is disabled
-   Added a new disableChat command line option - when used, receiving and sending online chat is disabled

​

### Redstone Toggle

​

-   When right clicking a single piece of redstone, it toggles between a the cross and the dot
-   A dot of redstone will not power its surrounding blocks

​

## Changes in 20w21a

​

-   Piglins no longer walk around when admiring gold
-   If you hurt a piglin while it is admiring an ingot, the ingot will now disappear
-   Increased the chance of ores to generate in the Basalt Deltas to balance against the reduced amount of Netherrack in this biome
-   Lily pads are now considered junk fishing loot rather than treasure
-   Updated logos for Mojang Studios and Minecraft
-   Temporarily removed structure settings from flat level preset strings (workaround: use import/export settings functionality)

​

## Technical Changes in 20w21a

​

-   Added the ability to control the height of the `spreadplayers` command
-   Added custom worlds and custom dimensions

​

### Commands

​

#### `spreadplayers`

​ Added an optional argument to specify maximum height. New syntax: `spreadplayers <center> <spreadDistance> <maxRange> [under <maxHeight>] <respectTeams> <targets>` ​

-   `maxHeight` - Specifies the maximum height for resulting positions

​

#### `locate`

​

-   Structure names are now specified as lowercase

​

### Custom Worlds

​

-   Added experimental support for new custom worlds
-   Edit world screen now has an option to export world settings to a JSON file
-   During world creation you can import previously exported world settings
-   A bunch of new parameters are exposed, but marked as experimental, meaning you can play with them, but there is no guarantee that any of them will continue working (even in the next snapshot!)
-   Flat level preset string lost structure settings (they are now stored in a common format for all worlds), we will restore some form of this functionality soon
-   Buffet world can no longer be created from server.properties, flat level settings changed a bit; better support for custom world creation on the server is coming soon

​

## Fixed bugs in 20w21a

-   [MC-97247](https://bugs.mojang.com/browse/MC-97247) Map making sound uses equipment sound subtitle
-   [MC-97507](https://bugs.mojang.com/browse/MC-97507) Using item which modifies the held item shows "Gear equips" subtitle
-   [MC-107103](https://bugs.mojang.com/browse/MC-107103) Trying to interact with entity 3 or more blocks away without seeing its eyes only interacts client-side
-   [MC-113068](https://bugs.mojang.com/browse/MC-113068) Zombie banging on door subtitle is called "Block broken"
-   [MC-123155](https://bugs.mojang.com/browse/MC-123155) When any non-player entity enters an End portal the obsidian platform is not regenerated and the entity can fall into the void
-   [MC-147516](https://bugs.mojang.com/browse/MC-147516) Hostile mobs will sometimes stop attacking/following their target when directly next to it
-   [MC-166292](https://bugs.mojang.com/browse/MC-166292) Subtitle from foxes eating chorus fruit: "Player teleports"
-   [MC-169764](https://bugs.mojang.com/browse/MC-169764) Fish flopping sound shows 'Footsteps' subtitles
-   [MC-170930](https://bugs.mojang.com/browse/MC-170930) Nether Sprouts item not visible when held in the hand in first person
-   [MC-172090](https://bugs.mojang.com/browse/MC-172090) Piglins would rather hold a golden item instead of a crossbow
-   [MC-172207](https://bugs.mojang.com/browse/MC-172207) Parrots don't imitate hoglins, zoglins and piglins
-   [MC-172255](https://bugs.mojang.com/browse/MC-172255) Piglins immediately dismount any entity that they are riding
-   [MC-177075](https://bugs.mojang.com/browse/MC-177075) Taking product out of stonecutter produces no subtitle
-   [MC-177088](https://bugs.mojang.com/browse/MC-177088) Polar bear step sound does not have subtitles
-   [MC-177438](https://bugs.mojang.com/browse/MC-177438) Turtle egg's name inconsistently capitalized across different subtitles
-   [MC-177830](https://bugs.mojang.com/browse/MC-177830) Blackstone and basalt prevent Ancient Debris and other Nether ores from generating
-   [MC-178130](https://bugs.mojang.com/browse/MC-178130) Zombie Villagers are called "Zombie" in some subtitles
-   [MC-178212](https://bugs.mojang.com/browse/MC-178212) Nether planks, their variants, and hyphae are harder than stems
-   [MC-178298](https://bugs.mojang.com/browse/MC-178298) Ancient debris and nether gold ore can't generate in Basalt Deltas
-   [MC-180257](https://bugs.mojang.com/browse/MC-180257) Crash when setting LodestonePos of compass to something other than NBT compound
-   [MC-180852](https://bugs.mojang.com/browse/MC-180852) There is no space on the beacon's secondary power effects in the UI
-   [MC-181270](https://bugs.mojang.com/browse/MC-181270) Trying to open old worlds (in Region format?) without version information in snapshots does not show warning screen
-   [MC-181298](https://bugs.mojang.com/browse/MC-181298) Game crashes when trying to generate a nether biome superflat world with ruined portals
-   [MC-181463](https://bugs.mojang.com/browse/MC-181463) The buttons are not selected in the right order using Tab in the new world creation menus
-   [MC-181499](https://bugs.mojang.com/browse/MC-181499) Buckets cannot be emptied into a source block, but still produce a sound when trying
-   [MC-181511](https://bugs.mojang.com/browse/MC-181511) Chunks with redstone are removed
-   [MC-181522](https://bugs.mojang.com/browse/MC-181522) Chunks that haven't been explored since 1.13 are resetting
-   [MC-181611](https://bugs.mojang.com/browse/MC-181611) Vindicators stop attacking you when they are standing really close to you
-   [MC-182514](https://bugs.mojang.com/browse/MC-182514) 15 Block States per SubChunk Limit during World Upgrade
-   [MC-182743](https://bugs.mojang.com/browse/MC-182743) Wither skeletons don't spawn inside of wither roses
-   [MC-182912](https://bugs.mojang.com/browse/MC-182912) Piglins still do not change their current crossbow for a new enchanted one
-   [MC-183249](https://bugs.mojang.com/browse/MC-183249) Carving Mask BitSets created for lower chunk statuses
-   [MC-183786](https://bugs.mojang.com/browse/MC-183786) Named seeds that are not numbers are not being recognized

---

This week we are releasing a bit of a smaller snapshot. However, if you're into switching game modes and completing advancements, this is right up your alley!

**Edit:** We've now released 20w20b to fix a bug

## Fixed Bug in 20w20b

-   [MC-183769](https://bugs.mojang.com/browse/MC-183769) NPE in server initialization

## New Features in 20w20a

-   Added new Game Mode Switcher debug menu
-   Added new Nether Advancements

​

### Game Mode Switcher

New F3 debug feature which allows you to switch game modes with traditional "tabbing" functionality. ​

-   Hold F3 and tap F4 to open the menu
-   Tapping F4 will cycle the game mode, or you can use the mouse
-   Release F3 to apply
-   Your last game mode is remembered and will be the first selected option, so you can quickly toggle between two game modes with a single press of F3 + F4!

​

#### F3 + N (Toggle Spectator)

A small change has been made to this debug combination. ​

-   By default, using this key would return to Creative after toggling from Spectator. It now will toggle back to the previous game mode you had.
-   As an example, if you were in Survival, then toggled to Spectator and back, you would be set back to Survival.

​

### New Advancements

-   `Hidden in the Depths` unlocks when obtaining Ancient Debris
-   `Cover Me in Debris` unlocks when obtaining full Netherite armor
-   `Country Lode, Take Me Home` unlocks when using a Compass on a Lodestone
-   `Who Is Cutting Onions?` unlocks when obtaining Crying Obsidian
-   `Not Quite "Nine" Lives` unlocks when setting a Respawn Anchor to the maximum
-   `This Boat Has Legs` unlocks when riding a Strider with a Fungus on a Stick
-   `Hot Tourist Destinations` unlocks when visiting all Biomes in the Nether
-   `Those Were the Days` unlocks when entering a Bastion
-   `War Pigs` unlocks when looting a chest in a Bastion
-   `Oh Shiny` unlocks when distracting an angry Piglin with gold

​

## Changes in 20w20a

-   The `Bullseye` advancement now unlocks when hitting the bullseye of a target block from at least 30 meters away
-   The `Serious Dedication` advancement is now awarded for obtaining a Netherite Hoe
-   Obtaining Blackstone now also counts for the `Stone Age` advancement
-   Breeding Striders now counts for `The Parrots and the Bats` and is now required for `Two by Two`

​

## Technical Changes in 20w20a

-   Shulkers with "NoAI" can now be summoned with rotation.
-   Added `thrown_item_picked_up_by_entity` advancement trigger
-   Added `player_generates_container_loot` advancement trigger
-   Added `item_used_on_block` advancement trigger
-   Removed `safely_harvest_honey` advancement trigger

​

### Advancements

#### `item_used_on_block` trigger type

Properties:

-   `item` matches the thrown item which was picked up
-   `entity` matches the entity which picked up the item

​

#### `player_generates_container_loot` trigger type

Properties:

-   `loot_table` matches the resource location of the generated loot table

​

#### `item_used_on_block` trigger type

Properties:

-   `location` matches the location at the center of the block the item was used on
-   `item` matches the item used on the block

​

### Miscellaneous trigger changes

-   `location` got a new property `smokey` which checks if the location is closely above a campfire
-   `entity_properties` got new properties `vehicle` and `targetedEntity` which match the vehicle or the entity targeted by a mob

​

## Fixed bugs in 20w20a

-   [MC-182967](https://bugs.mojang.com/browse/MC-182967) Throwing ender pearl whilst mounted doesn't teleport you
-   [MC-179481](https://bugs.mojang.com/browse/MC-179481) Structure block offset can't be bigger than 32
-   [MC-175992](https://bugs.mojang.com/browse/MC-175992) Striders are not part of the "Two by Two" advancement challenge
-   [MC-173756](https://bugs.mojang.com/browse/MC-173756) Ice Bucket Challenge advancement can be obtained by collecting obsidian from bartering
-   [MC-173207](https://bugs.mojang.com/browse/MC-173207) Bullseye advancement can be made when using a non-arrow projectile, even though the description explicitly mentions arrows
-   [MC-118234](https://bugs.mojang.com/browse/MC-118234) Advancement 'Not Today, Thank You' can be triggered by non-arrow projectiles

---

This snapshot contains another round of tweaks and bugfixes, but also quality of life features such as **strider distancing**. It might not be as important as social distancing, but we hope you'll like it. Stay safe and wash your hands!

## New Features in 20w19a

-   Added "distance by strider" statistic
-   Patches of blackstone and gravel now generate in all Nether biomes, and patches of soul sand now generate in Soul Sand Valleys

​

## Changes in 20w19a

-   Villagers can now spawn iron golems regardless of their profession status or latest working time
-   Bastions are now a bit less common
-   Lowered the amount that Weeping and Twisting vines grow when bonemealed
-   You now need to use shears to get an item when breaking Nether Sprouts
-   Tweaked spawning of mobs to more closely adhere to mob caps
-   Biome distribution in the Nether has been tweaked

## Technical Changes in 20w19a

-   Fish now have their own mob category and mob cap

​

## Fixed bugs in 20w19a

-   [MC-87949](https://bugs.mojang.com/browse/MC-87949) The shield use statistic is not working
-   [MC-89956](https://bugs.mojang.com/browse/MC-89956) Levitation has no effect if gliding with elytra
-   [MC-116293](https://bugs.mojang.com/browse/MC-116293) Functioning clock and compass in recipe book
-   [MC-125613](https://bugs.mojang.com/browse/MC-125613) Datapack tag "stairs" does not use #wooden;;_;;stairs
-   [MC-145862](https://bugs.mojang.com/browse/MC-145862) Villagers try to sleep in occupied beds
-   [MC-152084](https://bugs.mojang.com/browse/MC-152084) Villagers occasionally stand up out of beds at night, then can never sleep in that bed again
-   [MC-152170](https://bugs.mojang.com/browse/MC-152170) When a villager takes the bed of another villager then the bed's previous owner will not look for a new bed
-   [MC-157077](https://bugs.mojang.com/browse/MC-157077) Villagers will not sleep in beds at night
-   [MC-158542](https://bugs.mojang.com/browse/MC-158542) Iron Golems don't stop spawning
-   [MC-160250](https://bugs.mojang.com/browse/MC-160250) Naturally generated villagers are not pathfinding towards their POI; POI detection range is too small
-   [MC-166764](https://bugs.mojang.com/browse/MC-166764) Villagers spawned on world generation have a lower follow range than villagers spawned by other means
-   [MC-170612](https://bugs.mojang.com/browse/MC-170612) Villagers spawned by meeting points have frozen AI and do not move when that chunk is freshly generated
-   [MC-172107](https://bugs.mojang.com/browse/MC-172107) Piglins and Hoglins don't get zombified in the end
-   [MC-172524](https://bugs.mojang.com/browse/MC-172524) Letters of name tag render inconsistently when sneaking (within the same name tag)
-   [MC-172899](https://bugs.mojang.com/browse/MC-172899) Piglins with blocks (pumpkins) equipped on their heads show z-fighting
-   [MC-173015](https://bugs.mojang.com/browse/MC-173015) Crimson roots, Warped roots, and Nether sprouts are not randomly offset
-   [MC-173115](https://bugs.mojang.com/browse/MC-173115) Mobs can spawn inside of wither roses
-   [MC-174568](https://bugs.mojang.com/browse/MC-174568) Rail updates are 3-4x times laggier since 1.13
-   [MC-174909](https://bugs.mojang.com/browse/MC-174909) Endermen don't teleport when on magma blocks
-   [MC-175251](https://bugs.mojang.com/browse/MC-175251) Fish are spawning in with extremely high numbers. Over 200 different entities of cod every five minutes
-   [MC-177839](https://bugs.mojang.com/browse/MC-177839) Blackstone and blackstone walls use the blackstone side face on the bottom, while blackstone stairs and slabs use the blackstone top face on the bottom
-   [MC-178487](https://bugs.mojang.com/browse/MC-178487) Saddles on untamed horses no longer render
-   [MC-179989](https://bugs.mojang.com/browse/MC-179989) Smithing Table and Anvil UI does not have "Inventory" title above player inventory
-   [MC-180064](https://bugs.mojang.com/browse/MC-180064) Piglins would rather use an unenchanted crossbow instead of an enchanted crossbow
-   [MC-180297](https://bugs.mojang.com/browse/MC-180297) Player name color in list appears too dark
-   [MC-180407](https://bugs.mojang.com/browse/MC-180407) Piglin bartering is limited to dropping a single item stack from the loot table
-   [MC-180410](https://bugs.mojang.com/browse/MC-180410) Enderman spawn rate seems very low on upgraded worlds
-   [MC-180575](https://bugs.mojang.com/browse/MC-180575) Dispensers now always plays "dispenser failed" when dispensing glowstone
-   [MC-181353](https://bugs.mojang.com/browse/MC-181353) Warped and Crimson Doors have no hinges
-   [MC-181418](https://bugs.mojang.com/browse/MC-181418) Entity names can no longer be colored
-   [MC-181424](https://bugs.mojang.com/browse/MC-181424) Fish (and other items from fishing) cannot be caught with a fishing rod
-   [MC-181461](https://bugs.mojang.com/browse/MC-181461) Enchantement glint doesn't render on shields, tridents and elytra
-   [MC-181479](https://bugs.mojang.com/browse/MC-181479) Map marker labels do not render properly
-   [MC-181524](https://bugs.mojang.com/browse/MC-181524) Redstone does not visually connect when going up soul sand
-   [MC-181566](https://bugs.mojang.com/browse/MC-181566) Powered redstone dust only generates particles at the center of the block
-   [MC-181944](https://bugs.mojang.com/browse/MC-181944) Font of category/section text in creative mode item selection screen is much thicker than in 1.15.2
-   [MC-182595](https://bugs.mojang.com/browse/MC-182595) Parity issue: Blackstone doesn't generate in ore veins in nether wastes

---

In this snapshot we made some changes to Redstone wire and we fixed a bunch of bugs.

## Changes in 20w18a

-   Redstone wire changes
-   The target block now conducts redstone signals

​

### Redstone wire

The blockstate, rendering and behavior of redstonewire are more in line with each other. Redstone will provide power to blocks on all sides it shows a visual connection to, and not do so on those sides without a visual connection. ​

-   A single redstone wire is now represented as a cross.
-   A wire on top of a block, which is redirected from below, will power the sides it is redirected to now. E.g. a fence gate above the redirecting wire will be powered.
-   Wires that redirect upwards to wires on non-conductive blocks used to only be redirected visually. Now this redirection applies to their behavior as well.
-   A wire that is redirected to go over a block will now always provide power to the block. This is most noticeable when the wire has signal strength 1.

​![Comparison between 1.15.2 and snapshot 20w18a](https://launchercontent.mojang.com/images/RedstoneChanges3_741x421.png)

## Technical Changes in 20w18a

-   Added a `enable-status` option to the server.properties file which if set to `false` will suppress replies to status requests from clients. This makes the server appear offline in the multiplayer screen.
-   Added control over how much entity data a server sends to clients
-   Advancement system changes

​

### Entity Broadcasting

It is now possible to control at what range the server sends data about entities to clients. ​

-   Added an `entity-broadcast-range-percentage` server property controlling how close entities need to be before being sent to clients. Higher values means entities are visible further away from players but cause more network traffic. Specifies percentage of default value, so for example `50` specifies half of the default range.

​

### Advancements

-   Added `player` check to every trigger (except `impossible`)
-   Entity checks in triggers can now use loot table condition syntax

​

#### Extended entity checks

Entity checks in triggers can now use loot table condition syntax. Old notation:

    {
      "trigger": "minecraft:player_killed_entity",
      "conditions": {
        "entity": {
          "type": "minecraft:blaze"
        }
      }
    }
    

is now equivalent to:

    {
      "trigger": "minecraft:player_killed_entity",
      "conditions": {
        "entity": [
          {
            "condition": "minecraft:entity_properties",
            "predicate": {
              "type": "minecraft:blaze"
            },
            "entity": "this"
          }
        ]
      }
    }
    

**Note 1**: Like in loot tables, all conditions in top level array must be met for whole condition to trigger. ​ **Note 2**: To access new functionality, top level element must be JSON array. JSON object are interpreted as old notation.  
​ Full list of extended triggers:

-   New field `player` in every trigger
-   `bred_animals` - `parent`, `partner`, `child`
-   `channeled_lightning` - `victims`
-   `cured_zombie_villager` - `zombie`, `villager`
-   `fishing_rod_hooked` - `entity`
-   `killed_by_crossbow` - `victims`
-   `player_killed_entity` - `entity`
-   `entity_killed_player` - `entity`
-   `player_hurt_entity` - `entity`
-   `summoned_entity` - `entity`
-   `tame_animal` - `entity`
-   `target_hit` - `projectile`
-   `villager_trade` - `villager`

​

#### Miscellaneous trigger changes

-   Due to addition of `player`, existing contents of `location`, `slept_in_bed`, `hero_of_the_village`, `voluntary_exile` can now be placed in `location` field instead of top-level object. Old syntax is still supported, but depreciated.

​

## Fixed bugs in 20w18a

-   [MC-11211](https://bugs.mojang.com/browse/MC-11211) Unable to perform many right click actions when targeting the top face of blocks placed at y=255
-   [MC-111381](https://bugs.mojang.com/browse/MC-111381) Rendering rotations for shulkers are set in onInitialSpawn method
-   [MC-143904](https://bugs.mojang.com/browse/MC-143904) Adding a non-rail block to the "rails" block tag will crash the game when placing a minecart on it
-   [MC-147255](https://bugs.mojang.com/browse/MC-147255) Beds in the overworld will explode if in a nether wastes biome
-   [MC-162385](https://bugs.mojang.com/browse/MC-162385) The background of the title text does not fade with the text
-   [MC-166269](https://bugs.mojang.com/browse/MC-166269) Wet wolves become black for an instant after shaking off water
-   [MC-166296](https://bugs.mojang.com/browse/MC-166296) Mobs picking up and equipping items does not play the equipping sound
-   [MC-170840](https://bugs.mojang.com/browse/MC-170840) Broken spawn rates in soul sand valleys and warped forests
-   [MC-170944](https://bugs.mojang.com/browse/MC-170944) /locatebiome messages do not fit for all biome names
-   [MC-171523](https://bugs.mojang.com/browse/MC-171523) Inconsistent strings for warped and crimson wall signs
-   [MC-172172](https://bugs.mojang.com/browse/MC-172172) Adult piglins spin around while following the player
-   [MC-172253](https://bugs.mojang.com/browse/MC-172253) Equip sound doesn't play when Piglins equip items
-   [MC-173067](https://bugs.mojang.com/browse/MC-173067) NullPointerException when a structure containing a campfire is placed during world generation
-   [MC-173198](https://bugs.mojang.com/browse/MC-173198) Target blocks are transparent and do not transfer redstone signals
-   [MC-173385](https://bugs.mojang.com/browse/MC-173385) New Nether lighting system doesn't affect fluids, entity-like blocks (chests, etc.) and entities
-   [MC-173747](https://bugs.mojang.com/browse/MC-173747) Armor enchantment glint doesn't render
-   [MC-174573](https://bugs.mojang.com/browse/MC-174573) Nether vines can drop multiple copies with fortune (free duplication)
-   [MC-174593](https://bugs.mojang.com/browse/MC-174593) Inconsistent pluralisation in "fell off a scaffolding"
-   [MC-174811](https://bugs.mojang.com/browse/MC-174811) Zombified piglins are able to spawn on top of nether wart blocks
-   [MC-175107](https://bugs.mojang.com/browse/MC-175107) It's possible to get Bad Omen VI in Survival mode
-   [MC-175740](https://bugs.mojang.com/browse/MC-175740) Game crashes when dispenser is used on non-beehive block in #beehives tag
-   [MC-175741](https://bugs.mojang.com/browse/MC-175741) Game crashes when a cat attempts to sleep in a non-bed in the #beds tag
-   [MC-176028](https://bugs.mojang.com/browse/MC-176028) Striders can spawn in stacks of three or more
-   [MC-176032](https://bugs.mojang.com/browse/MC-176032) Striders can float
-   [MC-176135](https://bugs.mojang.com/browse/MC-176135) Striders riding other entities are not cold
-   [MC-176203](https://bugs.mojang.com/browse/MC-176203) Striders with Levitation walking on Lava don't levitate
-   [MC-176459](https://bugs.mojang.com/browse/MC-176459) Baby striders can spawn with saddles
-   [MC-176468](https://bugs.mojang.com/browse/MC-176468) Adult striders can spawn with saddles
-   [MC-177105](https://bugs.mojang.com/browse/MC-177105) Piglins, hoglins, zoglins and villagers look at their target's feet instead of its head
-   [MC-177127](https://bugs.mojang.com/browse/MC-177127) Unnecessary exclamation point in subtitle "End Portal opens!"
-   [MC-177173](https://bugs.mojang.com/browse/MC-177173) Baby Zoglin age status value is not stored in the NBT tag.
-   [MC-177561](https://bugs.mojang.com/browse/MC-177561) Compasses used on the top of lodestone at y=255 do not break when the lodestone is destroyed
-   [MC-177771](https://bugs.mojang.com/browse/MC-177771) "death.attack.fireworks.item" displays raw translation string (is untranslated)
-   [MC-177790](https://bugs.mojang.com/browse/MC-177790) Piglin Banners are named block.minecraft.banner.piglin.;;[;;;;];;
-   [MC-177794](https://bugs.mojang.com/browse/MC-177794) Globe Banner Pattern is not required to add the globe to a banner
-   [MC-177816](https://bugs.mojang.com/browse/MC-177816) Failed to access/delete level should be "world"
-   [MC-177911](https://bugs.mojang.com/browse/MC-177911) Cave generator doesn't cut through blackstone
-   [MC-177951](https://bugs.mojang.com/browse/MC-177951) Game crashes when fire starters are used on a non-campfire in the #campfires tag
-   [MC-177976](https://bugs.mojang.com/browse/MC-177976) Baby piglins can pick up soul campfires
-   [MC-178013](https://bugs.mojang.com/browse/MC-178013) Zombified Piglins riding striders can despawn, leaving saddled striders
-   [MC-178129](https://bugs.mojang.com/browse/MC-178129) Entity conversion subtitles use inconsistent tenses
-   [MC-178336](https://bugs.mojang.com/browse/MC-178336) The message "You have no home bed or respawn anchor, or it was obstructed" doesn't make it clear that your respawn anchor might have been depleted
-   [MC-178817](https://bugs.mojang.com/browse/MC-178817) "Chain Blocks" don't have a "waterlogged" state
-   [MC-178943](https://bugs.mojang.com/browse/MC-178943) Piglins/hoglins spawned in bastion remnants can outrun players
-   [MC-178949](https://bugs.mojang.com/browse/MC-178949) Bastion Remnants cannot be generated in in superflat worlds
-   [MC-179839](https://bugs.mojang.com/browse/MC-179839) Chat text renders behind the armor bar
-   [MC-179841](https://bugs.mojang.com/browse/MC-179841) Game crashes when you optimize your world
-   [MC-179845](https://bugs.mojang.com/browse/MC-179845) Rain falls through any blocks in some spots
-   [MC-179847](https://bugs.mojang.com/browse/MC-179847) Hoglins and Piglins spin around
-   [MC-179850](https://bugs.mojang.com/browse/MC-179850) There is no difference between Entity Distance 100% and 500%
-   [MC-179858](https://bugs.mojang.com/browse/MC-179858) Maps show stone-like pattern despite it not being there
-   [MC-179863](https://bugs.mojang.com/browse/MC-179863) Setting attribute minecraft:generic.max;;_;;health value to 0 or lower causes an infinite death loop after dying
-   [MC-179866](https://bugs.mojang.com/browse/MC-179866) In some spots, it is raining even if it should be snowing
-   [MC-179868](https://bugs.mojang.com/browse/MC-179868) Crash when going to a previous page of writable books
-   [MC-179883](https://bugs.mojang.com/browse/MC-179883) Raw JSON text duplicates components in "extra" in entity names
-   [MC-179886](https://bugs.mojang.com/browse/MC-179886) Play button overlay doesn't appear in worldsave selection GUI
-   [MC-179905](https://bugs.mojang.com/browse/MC-179905) Caption of game rule screen is missing
-   [MC-179952](https://bugs.mojang.com/browse/MC-179952) Height map data doesn't get converted
-   [MC-179954](https://bugs.mojang.com/browse/MC-179954) Keybindings are not correctly inserted into the demo info box text
-   [MC-180030](https://bugs.mojang.com/browse/MC-180030) Adult hoglins zombified into an adult zoglin deals the same damage as a baby
-   [MC-180100](https://bugs.mojang.com/browse/MC-180100) Rain particles appear black under certain conditions
-   [MC-180110](https://bugs.mojang.com/browse/MC-180110) Underline and strikethrough in JSON text don't always render correctly
-   [MC-180125](https://bugs.mojang.com/browse/MC-180125) Incorrect font spacing on non-BMP characters
-   [MC-180135](https://bugs.mojang.com/browse/MC-180135) Empty chat messages are not displayed
-   [MC-180138](https://bugs.mojang.com/browse/MC-180138) Long messages in chat no longer have hanging indention
-   [MC-180246](https://bugs.mojang.com/browse/MC-180246) The "r" in "Game rules" is not capitalized
-   [MC-180248](https://bugs.mojang.com/browse/MC-180248) The "g" in "Upgrade gear" is not capitalized
-   [MC-180299](https://bugs.mojang.com/browse/MC-180299) "Elytra" in "Disable Elytra movement check" is inconsistently capitalized
-   [MC-180353](https://bugs.mojang.com/browse/MC-180353) Chat background renders in front of the Debug Menu but chat text renders behind it
-   [MC-181296](https://bugs.mojang.com/browse/MC-181296) Panorama has wrong overlay when using Programmer Art

---

This week's snapshot brings you some tweaks, bugfixes, and technical changes!

We also have a survey up so that you can tell us what you think about the Nether Update. You can find it by clicking [here](https://www.surveymonkey.com/r/SF65G2F). We would very much appreciate if you could take the time and fill it out.

## New Features in 20w17a

-   Added an Entity Distance scale option ranging from 50% to 500%
-   Difficulty and game rules can now be changed from "Create World" screen

## Changes in 20w17a

-   Improved Smithing Table UI
-   Ruined portals now spawn less frequently
-   Renamed "Soul Fire Torch" and "Soul Fire Lantern" to "Soul Torch" and "Soul Lantern"
-   Tweaked Bastion Remnant loot
-   Walls now create posts under more things, like pressure plates and banners
-   The "Singleplayer" button will jump directly to "Create World" screen if there are no worlds to select

## Technical Changes in 20w17a

-   Block storage format in chunks slightly changed to speed up various tasks (rendering, pathfinding, world generation, etc).
-   Chat component style can now select font.
-   Full range of Unicode characters is supported (some may know what that means 😉)
-   Added the `attribute` command

### World save format

-   Saving `level.dat` now uses randomly-named temporary files (instead of using `level.dat_new` every time)
-   `player/*.dat` are now saved in a way similar to `level.dat` (including leaving `.dat_old` files)

### Block storage

`BlockStates` in `Sections` elements no longer contain values stretching over multiple 64-bit fields. If number of bits per block is not power of two (i.e. single 64-bit value can't fill whole number of blockstates) some bits will not be used. For example, if single block state takes 5 bits, highest 4 bits of every 64-bit field will be unused. That also means slight increase in storage size (in case of 5 bits, from 320 to 342 64-bit fields).

### Commands

#### `attribute`

Adds modifies attribute on single entity. Possible syntax: Parameters:

-   `attribute <target> <attribute> get [<scale>]` - get total value of attribute
-   `attribute <target> <attribute> base set <value>` - sets base valye
-   `attribute <target> <attribute> base get [<scale>]` - get base value
-   `attribute <target> <attribute> modifier add <uuid> <name> <value> add|multiply|multiply_base` - adds modifier (fails if modifier is already present)
-   `attribute <target> <attribute> modifier remove <uuid>` - removes modifier
-   `attribute <target> <attribute> modifier value get <uuid> [<scale>]` - get value of modifier
-   `target` - single entity (note: only players, armor stands and mobs have attributes)
-   `attribute` - name of attribute (like `minecraft:generic.max_health`)
-   `name` - string (in optional quotes) describing human-readable name of modifier
-   `value` - floating point value (note: certain attributes have limits on final value, so your change might not be noticeable)

### Chat components

#### Hover event argument

-   `style.hoverEvent` parameter now has parameter `contents`, with contents depending on type:
    -   For `show_text` - chat component
    -   For `show_item` - either item id or object with fields `id`, `count` and `tag` (with last one being serialized NBT)
    -   For `show_entity` - object with fields: `id` (UUID), `name` (chat component) and `type` (entity type resource location)
-   Old style `value` argument is now deprecated (but still supported)

#### Colors

`color` property can now contain RGB value prefixed by `#`. For example `#55ff55` will result in the same color as `green`.

#### Custom fonts

Chat component style now supports `font` property, which is resource location for font in resource pack. No entry is equivalent to `minecraft:default`.

### Fonts

-   `Force Unicode` option now switches between normal and alternative font (called `uniform.json`) - no reload needed

## Fixed bugs in 20w17a

-   [MC-5410](https://bugs.mojang.com/browse/MC-5410) In creative mode, flying down is stopped when brushing up against ladders or vines.
-   [MC-31032](https://bugs.mojang.com/browse/MC-31032) Using only one empty map doesn't increase minecraft.used:minecraft.map
-   [MC-46417](https://bugs.mojang.com/browse/MC-46417) Sprint particles are generated in spectator mode
-   [MC-56373](https://bugs.mojang.com/browse/MC-56373) Selector and score text components don't work on hoverEvents
-   [MC-94535](https://bugs.mojang.com/browse/MC-94535) Flying and holding CTRL really close to the ground, emits walking particles
-   [MC-96319](https://bugs.mojang.com/browse/MC-96319) Mob pathfinding AI does not regard some blocks as obstructions and is unable to pathfind on top of them
-   [MC-100195](https://bugs.mojang.com/browse/MC-100195) Player retains 1-block hitbox if entering a minecart/boat while swimming or when flying with elytra or a riptide trident
-   [MC-114544](https://bugs.mojang.com/browse/MC-114544) Kicked by "Flying is not enabled on this server" while sleeping
-   [MC-120572](https://bugs.mojang.com/browse/MC-120572) /recipe crashes the game
-   [MC-126244](https://bugs.mojang.com/browse/MC-126244) '/locate', explorer maps, and treasure maps can cause extreme TPS lag, even leading to a complete server freeze if structure generation is turned off
-   [MC-149704](https://bugs.mojang.com/browse/MC-149704) Sneaking / crouching twice makes player sprint
-   [MC-169514](https://bugs.mojang.com/browse/MC-169514) Tamed parrots cannot be renamed unless they are flying
-   [MC-171561](https://bugs.mojang.com/browse/MC-171561) Only one player can access shulker box at a time
-   [MC-174359](https://bugs.mojang.com/browse/MC-174359) Piglins prefer using an unenchanted gold item instead of an enchanted gold item
-   [MC-175113](https://bugs.mojang.com/browse/MC-175113) Rain prevents entities from burning in fire
-   [MC-175186](https://bugs.mojang.com/browse/MC-175186) Respawning doesn't check if the "respawn block" is the correct one for the dimension
-   [MC-175998](https://bugs.mojang.com/browse/MC-175998) Striders are moving very fast between two blocks or when diagonally running into blocks
-   [MC-176029](https://bugs.mojang.com/browse/MC-176029) Right clicking a lodestone with a stack of compasses converts the whole stack
-   [MC-176060](https://bugs.mojang.com/browse/MC-176060) Recipe book doesn't load the entire empty map recipe anymore
-   [MC-176104](https://bugs.mojang.com/browse/MC-176104) Dropped compasses always point up
-   [MC-176116](https://bugs.mojang.com/browse/MC-176116) Saddle texture on Strider is backwards
-   [MC-176521](https://bugs.mojang.com/browse/MC-176521) Pressing space while the recipe book button is highlighted in crafting interfaces doesn't toggle the recipe book
-   [MC-177346](https://bugs.mojang.com/browse/MC-177346) Compass in a mob's hand does not point to correct location if mob turns
-   [MC-177776](https://bugs.mojang.com/browse/MC-177776) Netherite ingots are not sorted properly with other ingots
-   [MC-177780](https://bugs.mojang.com/browse/MC-177780) Shulkers cannot be opened while playing closing animation anymore
-   [MC-177796](https://bugs.mojang.com/browse/MC-177796) Blackstone walls are in the "Building Blocks" category instead of "decoration Blocks" category, unlike all other walls
-   [MC-177862](https://bugs.mojang.com/browse/MC-177862) Polished blackstone button and pressure plate in incorrect area in creative inventory
-   [MC-177885](https://bugs.mojang.com/browse/MC-177885) Invisible Horses show patterns
-   [MC-177997](https://bugs.mojang.com/browse/MC-177997) Baby zoglins still use the same attack damage as an adult
-   [MC-178086](https://bugs.mojang.com/browse/MC-178086) Flying close to the ground with soul speed over soul blocks speeds up player and generates soul particles
-   [MC-178093](https://bugs.mojang.com/browse/MC-178093) Piglins with full inventories won't pick up gold ingots to barter even though you can still right-click to barter with them
-   [MC-178259](https://bugs.mojang.com/browse/MC-178259) Game crashes when an iron golem with the attack damage attribute set to 0.5d
-   [MC-178316](https://bugs.mojang.com/browse/MC-178316) Dispenser plays "dispensed item" sound when attempting to charge a full respawn anchor instead of "dispenser fails"
-   [MC-178630](https://bugs.mojang.com/browse/MC-178630) TNT eyeheight changed
-   [MC-178797](https://bugs.mojang.com/browse/MC-178797) Barrier blocks generate in bastion remnant
-   [MC-178955](https://bugs.mojang.com/browse/MC-178955) Badlands are viewed as a mountainous biome for Ruined Portals
-   [MC-179542](https://bugs.mojang.com/browse/MC-179542) Basalt Delta Blocks Override Nether Bricks in Fortresses

---

Bastion remnants, or "home sweet home" as Piglins would call them, are finally here! This snapshot introduces the home of the Piglins. If you scour the world you might also find ruins of some old portals.

## New Features in 20w16a

-   Added Bastion Remnants!
-   Added Ruined Portals
-   Added chain blocks
-   Added a new music disc titled "Pigstep" by Lena Raine which can only be found in Bastions Remnants

### Bastion Remnants

What's made of Blackstone and full of piglins and hoglins? Bastion Remnants!

-   Added 4 separate Bastion Remnant types: Bridge, Hoglin Stable, Housing Units, and Treasure Room
-   You can find these sizable structures in all biomes in the Nether except the treacherous ash-dusted towers of Basalt Deltas
-   Explore, loot, and conquer a Bastion Remnant to call it your home...but beware, Piglins don't take kindly to intruders stealing their things

### Ruined Portals

Shattered remains of ancient nether portals. Wonder who built them?

-   They can be found in any overworld or nether biome
-   Some are hidden underground, under the sea, or buried in sand

## Changes in 20w16a

-   The piglin banner pattern can now be found in Bastion Remnants
-   Increased the amount of lava pools to make the deltas more "deltary"

## Technical Changes in 20w16a

-   Added a button in the GUI that generates a jigsaw structure starting from the jigsaw block, using given generation depth.
-   Expanded the max size per axis of Structure Blocks from 32 to 48
-   Added a JMX MBean to monitor dedicated server tick times

### JMX Monitoring

It is now possible to monitor the server tick times though JMX. The rationale for this is that JMX is a well known and supported monitoring technology with existing integrations and tools.

This enables server admins to hook alerts and graphing tools using ordinary JMX clients and dashboards.

#### Enabling JMX Monitoring

-   A new flag `enable-jmx-monitoring` has been added to the server.properties file which if set to `true` will expose an MBean with the Object name `net.minecraft.server:type=Server` and two attributes `averageTickTime` and `tickTimes` exposing the tick times in milliseconds.
-   In order for enabling JMX on the Java runtime you also need to add a couple of JVM flags to the startup as documented [here](https://docs.oracle.com/javase/8/docs/technotes/guides/management/agent.html).

## Fixed bugs in 20w16a

-   [MC-37557](https://bugs.mojang.com/browse/MC-37557) Sometimes a minecart sound plays/subtitle shown when loading a world
-   [MC-91163](https://bugs.mojang.com/browse/MC-91163) Certain subtitles show up when the player is too far away to hear the sound
-   [MC-154617](https://bugs.mojang.com/browse/MC-154617) Server hangs on stop due to rcon
-   [MC-171020](https://bugs.mojang.com/browse/MC-171020) New nether biomes don't work properly in buffet worlds
-   [MC-175919](https://bugs.mojang.com/browse/MC-175919) Villagers sometimes stop farming
-   [MC-177136](https://bugs.mojang.com/browse/MC-177136) All compasses and lodestone compasses point to the same target, regardless of what type of compass it is
-   [MC-177238](https://bugs.mojang.com/browse/MC-177238) Windows symbolic link in saves/ is no longer followed as of 20w14a
-   [MC-177253](https://bugs.mojang.com/browse/MC-177253) Running a set;;_;;attributes function throws java.lang.NullPointerException if it contains an undefined attribute
-   [MC-177316](https://bugs.mojang.com/browse/MC-177316) Lodestone compass in item frame does not update after turning
-   [MC-178368](https://bugs.mojang.com/browse/MC-178368) When rotating a lodestone compass is put in the item frame the compass don't work

---

