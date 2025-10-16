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

# Minecraft Snapshot 20w22a

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

# Minecraft Snapshot 20w21a

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

# Minecraft Snapshot 20w20b

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

# Minecraft Snapshot 20w19a

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

