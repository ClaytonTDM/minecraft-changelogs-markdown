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

# Minecraft Snapshot 20w29a

Today we're releasing Snapshot 20w29a for Minecraft Java Edition. We found some bugs to squash, but also snuck in a technical change or two!

## Changes in 20w29a

-   Tools are now sorted based on material in the creative inventory

## Technical Changes in 20w29a

### Commands

**spawnpoint & setworldspawn**

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

# Minecraft Snapshot 20w28a

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

# Minecraft Snapshot 20w27a

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
-   [MC-179851](https://bugs.mojang.com/browse/MC-179851) Attribute generic.movement;;_;;speed does not work in /attribute
-   [MC-180967](https://bugs.mojang.com/browse/MC-180967) Advancement description JSON can ignore the first specified color
-   [MC-181498](https://bugs.mojang.com/browse/MC-181498) Using a fire charge on top of fire briefly creates another fire on top of it
-   [MC-181556](https://bugs.mojang.com/browse/MC-181556) Baby Zombified Piglins float while riding striders
-   [MC-181576](https://bugs.mojang.com/browse/MC-181576) Worlds which are already open in another instance of Minecraft can be selected with arrow keys and tab
-   [MC-184613](https://bugs.mojang.com/browse/MC-184613) End Stone generates in Floating Islands setting
-   [MC-184644](https://bugs.mojang.com/browse/MC-184644) Cave buffet generator generates with netherrack, even if using a non-nether biome
-   [MC-186468](https://bugs.mojang.com/browse/MC-186468) Although reload failed, the game will also tell you "Disabled data pack ;;[;;XXX;;];;"
-   [MC-187419](https://bugs.mojang.com/browse/MC-187419) Hand animation is not played when feeding horses or donkeys with golden carrots
-   [MC-188352](https://bugs.mojang.com/browse/MC-188352) Creative mode cow milking / mushroom stewing inconsistent with picking up placed fluids
-   [MC-188451](https://bugs.mojang.com/browse/MC-188451) Game crashes when dispensing a shulker box from a dispenser "java.lang.NullPointerException: Exception while ticking"
-   [MC-188463](https://bugs.mojang.com/browse/MC-188463) Transparent dropped items render in wrong order when behind entities when graphics setting is set to fabulous
-   [MC-188467](https://bugs.mojang.com/browse/MC-188467) "Sound Director" in credits is too light compared to the rest of the text, and is missing an "S"
-   [MC-188517](https://bugs.mojang.com/browse/MC-188517) Cannot create multiple empty tags in a datapack
-   [MC-188519](https://bugs.mojang.com/browse/MC-188519) Clouds render on top of blocks
-   [MC-188528](https://bugs.mojang.com/browse/MC-188528) Particles render on top of stained glass

---

