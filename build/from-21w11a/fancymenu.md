# Minecraft Snapshot 21w11a

An absolutely shocking snapshot arrives! This snapshot adds some new functionality to Copper, some general tweaks, a fancy new way of getting performance metrics, and a bunch of bugfixes.

Happy mining!

## New Features in 21w11a

-   Lightning rods can now, for the very first time ever, be waterlogged
-   New functionality for applying and removing wax from copper
-   Bonemealing rooted dirt now grows hanging roots underneath

### Waxing Copper and Oxidization

-   Right click with honeycomb on copper blocks to wax them
-   Use honeycomb in a dispenser to wax copper blocks
-   Axes can scrape off wax and oxidation of copper blocks
-   Lightning strike hitting copper will clean its oxidation

## Changes in 21w11a

-   Waxed copper blocks can be crafted into 4 copper ingots
-   Tweaked the cave sizes
-   Slightly increased the frequency of diamond ore blobs
-   Hanging roots block now renders randomly offset
-   Breaking a Big Dripleaf stem now drops a Big Dripleaf block
-   Moss blocks can be crafted with cobblestone or stone bricks to make the mossy versions of those blocks
-   The facing direction of Small Dripleaf blocks is now determined by which direction the player is facing when placing it
-   Fully-grown Amethyst Clusters now drop 4 Amethyst Shards (or more with Fortune) when mined with a pickaxe, and drop 2 Amethyst Shards when broken by hand, piston, or other means

## Technical Changes in 21w11a

-   Added F3+L shortcut to generate and persist performance metrics from in-game

### In-game client metrics reporting

Pressing F3+L while in the game will start a recording for 10 seconds capturing metrics such as tick durations, used heap sizes and other more detailed stats. These will be saved to a zip file in `debug/profiling/<yyyy-MM-dd_HH.mm.ss>.zip` and could be used for performance regression analysis if included in bug reports.

The exact metrics, output format and names are susceptible to change between versions, and our plan is to continue iterating on which metrics to capture.

## Fixed Bugs in 21w11a

-   [MC-1483](https://bugs.mojang.com/browse/MC-1483) Snow covered grass/podzol/mycelium block side texture does not match original block
-   [MC-12363](https://bugs.mojang.com/browse/MC-12363) Lava / water / powder snow bucket desync when using it while rapidly turning
-   [MC-70850](https://bugs.mojang.com/browse/MC-70850) False negatives during occlusion culling
-   [MC-71530](https://bugs.mojang.com/browse/MC-71530) Spectators can't see through lava
-   [MC-145501](https://bugs.mojang.com/browse/MC-145501) Librarian and zombie librarian torso top texture is incorrect
-   [MC-150054](https://bugs.mojang.com/browse/MC-150054) Spectral arrow texture on item and entity aren't consistent
-   [MC-150784](https://bugs.mojang.com/browse/MC-150784) Brewing Stand bottle outline incorrect
-   [MC-154006](https://bugs.mojang.com/browse/MC-154006) Overworld wood signs use the outdated wood texture on all sides
-   [MC-160195](https://bugs.mojang.com/browse/MC-160195) Jungle door inventory texture is outdated
-   [MC-160388](https://bugs.mojang.com/browse/MC-160388) Painting back texture has not been updated with the texture update
-   [MC-195806](https://bugs.mojang.com/browse/MC-195806) Smoker's top and bottom textures have inconsistently colored pixels
-   [MC-197561](https://bugs.mojang.com/browse/MC-197561) Carved pumpkins and jack o'lanterns create swastikas
-   [MC-197883](https://bugs.mojang.com/browse/MC-197883) Jigsaw Structures causing DataFixer spam
-   [MC-198805](https://bugs.mojang.com/browse/MC-198805) Floating pixel in the tailfin of a guardian/elder guardian
-   [MC-202760](https://bugs.mojang.com/browse/MC-202760) Area effect cloud does not enforce a maximum radius
-   [MC-203554](https://bugs.mojang.com/browse/MC-203554) block.amethyst;;_;;block.chime has no subtitle
-   [MC-203561](https://bugs.mojang.com/browse/MC-203561) Amethyst crystal cluster drops items when block is moved directly by a piston without actually breaking the block
-   [MC-203623](https://bugs.mojang.com/browse/MC-203623) Inconsistency: Breaking amethyst crystals with hands doesn't drop the item, but breaking the block they are placed on drops them
-   [MC-203676](https://bugs.mojang.com/browse/MC-203676) Tinted Glass suffocates entities inside of it
-   [MC-203753](https://bugs.mojang.com/browse/MC-203753) Spyglass use statistic never increases
-   [MC-203918](https://bugs.mojang.com/browse/MC-203918) Mobs can spawn on tinted glass
-   [MC-204016](https://bugs.mojang.com/browse/MC-204016) When filling a lava cauldron with lava, the lava is placed on the ground, not in the cauldron. This also affects powder snow.
-   [MC-204862](https://bugs.mojang.com/browse/MC-204862) Tinted glass is not included in the impermeable tag
-   [MC-205913](https://bugs.mojang.com/browse/MC-205913) Lightning rod can spawn skeleton horses with skeletons
-   [MC-206787](https://bugs.mojang.com/browse/MC-206787) World Border is rendered upside down
-   [MC-207557](https://bugs.mojang.com/browse/MC-207557) Frozen hearts in hardcore mode look identical to frozen hearts in survival mode
-   [MC-211513](https://bugs.mojang.com/browse/MC-211513) Trident returning to owner not in the same world can cause permanent player kick
-   [MC-212123](https://bugs.mojang.com/browse/MC-212123) Player lighting is inconsistent in the inventory and appears darker on the front
-   [MC-212226](https://bugs.mojang.com/browse/MC-212226) Bone Meal can still be used on a Glow Lichen when it is unable to grow
-   [MC-212410](https://bugs.mojang.com/browse/MC-212410) Cannot compost glow lichen
-   [MC-213743](https://bugs.mojang.com/browse/MC-213743) Spectators can't see through powder snow
-   [MC-213764](https://bugs.mojang.com/browse/MC-213764) Removing the block supporting a spore blossom allows the spore blossom to float
-   [MC-213765](https://bugs.mojang.com/browse/MC-213765) Cave vine blocks are inconsistent in ID from other similar blocks
-   [MC-213768](https://bugs.mojang.com/browse/MC-213768) Removing the support block for hanging roots allows it to float
-   [MC-213778](https://bugs.mojang.com/browse/MC-213778) Cave vines cannot be climbed
-   [MC-213782](https://bugs.mojang.com/browse/MC-213782) Cave vines do not slow you down like other vines
-   [MC-213798](https://bugs.mojang.com/browse/MC-213798) Cave vines head and body emit different light levels
-   [MC-213886](https://bugs.mojang.com/browse/MC-213886) Bone meal cannot be used on dripleaf stems
-   [MC-213911](https://bugs.mojang.com/browse/MC-213911) Cave vines body and cave vines head share the same name
-   [MC-213980](https://bugs.mojang.com/browse/MC-213980) Moss appropriate tool is axe rather than hoe
-   [MC-214568](https://bugs.mojang.com/browse/MC-214568) Setting a lectern on fire causes z-fighting
-   [MC-215036](https://bugs.mojang.com/browse/MC-215036) Snow layers in "Snowy Kingdom" superflat preset generate 64 blocks above the ground
-   [MC-215384](https://bugs.mojang.com/browse/MC-215384) Azaleas cannot be used as a fuel
-   [MC-216134](https://bugs.mojang.com/browse/MC-216134) Gilded blackstone texture does not match the new side texture of blackstone
-   [MC-216184](https://bugs.mojang.com/browse/MC-216184) Player takes no fall damage on blocks above y=316
-   [MC-216227](https://bugs.mojang.com/browse/MC-216227) Sugar cane item texture is no longer accurate from 13w36a forward
-   [MC-216737](https://bugs.mojang.com/browse/MC-216737) When replacing tuff, ores still generate with a "stone" background below y=0
-   [MC-216945](https://bugs.mojang.com/browse/MC-216945) Teams become dysfunctional when any entity leaves the team
-   [MC-216965](https://bugs.mojang.com/browse/MC-216965) Flat "slices" of terrain generating in cracks
-   [MC-217303](https://bugs.mojang.com/browse/MC-217303) Potential optimization target in DepthBasedReplacingBaseStoneSource
-   [MC-217546](https://bugs.mojang.com/browse/MC-217546) stat.fallOneCm is not updated when falling onto a block above y=316
-   [MC-217802](https://bugs.mojang.com/browse/MC-217802) Some blocks generate at wrong Y height in a superflat world
-   [MC-218587](https://bugs.mojang.com/browse/MC-218587) Lightning rod still can't be waterlogged
-   [MC-218594](https://bugs.mojang.com/browse/MC-218594) Debug chunk borders don't render properly
-   [MC-218596](https://bugs.mojang.com/browse/MC-218596) Debug pie is blacked out
-   [MC-218597](https://bugs.mojang.com/browse/MC-218597) Water has no fog anymore
-   [MC-218603](https://bugs.mojang.com/browse/MC-218603) Screen turns dark grey when switching dimension
-   [MC-218604](https://bugs.mojang.com/browse/MC-218604) Hanging roots can generate hanging on other hanging roots, making them float
-   [MC-218609](https://bugs.mojang.com/browse/MC-218609) Mipmapping causes some block faces to become too dark
-   [MC-218610](https://bugs.mojang.com/browse/MC-218610) Banners are unimpacted by light levels
-   [MC-218626](https://bugs.mojang.com/browse/MC-218626) Cannot enchant items
-   [MC-218635](https://bugs.mojang.com/browse/MC-218635) With fast graphics, the freezing overlay renders black, and covers the whole screen black in first person
-   [MC-218640](https://bugs.mojang.com/browse/MC-218640) Broken spyglass overlay on fast graphics
-   [MC-218641](https://bugs.mojang.com/browse/MC-218641) Red vignette shown when outside the world border is too intense
-   [MC-218645](https://bugs.mojang.com/browse/MC-218645) The carved pumpkin overlay turns the screen completely black when using fast graphics
-   [MC-218652](https://bugs.mojang.com/browse/MC-218652) The green nausea overlay no longer renders
-   [MC-218653](https://bugs.mojang.com/browse/MC-218653) Glowing effect no longer changes to team color
-   [MC-218655](https://bugs.mojang.com/browse/MC-218655) Floating water generates excessively in lush caves
-   [MC-218660](https://bugs.mojang.com/browse/MC-218660) The nether portal overlay no longer renders, whilst using fast graphics
-   [MC-218695](https://bugs.mojang.com/browse/MC-218695) Shulkers do not flash red when hurt or killed
-   [MC-218712](https://bugs.mojang.com/browse/MC-218712) Debug pie has purple box when moving an enchanted item
-   [MC-218713](https://bugs.mojang.com/browse/MC-218713) Right clicking to open alternate recipes does not show the recipes
-   [MC-218729](https://bugs.mojang.com/browse/MC-218729) Noise cave entrances cause unnatural, smooth edges in terrain
-   [MC-218734](https://bugs.mojang.com/browse/MC-218734) Caves generate with very blocky areas
-   [MC-218748](https://bugs.mojang.com/browse/MC-218748) At sunset, a blue line appears in the northern and southern skies
-   [MC-218753](https://bugs.mojang.com/browse/MC-218753) Ambient occlusion of the player seen in the survival inventory has changed
-   [MC-218765](https://bugs.mojang.com/browse/MC-218765) Glowing effect no longer renders around translucent pixels
-   [MC-218793](https://bugs.mojang.com/browse/MC-218793) Two white lines appear on the Mojang loading screen
-   [MC-218817](https://bugs.mojang.com/browse/MC-218817) Cave Vines can generate without supporting blocks
-   [MC-218825](https://bugs.mojang.com/browse/MC-218825) M1 ARM Macs crash when using Fabulous Graphics mode as was the case in older versions, but no lack of support warning is shown
-   [MC-218830](https://bugs.mojang.com/browse/MC-218830) World border is white
-   [MC-218834](https://bugs.mojang.com/browse/MC-218834) You can see block hitboxes very clearly whilst in powder snow/lava
-   [MC-218845](https://bugs.mojang.com/browse/MC-218845) Mojang logo screen flashes blue before changing to red
-   [MC-218852](https://bugs.mojang.com/browse/MC-218852) World border is occasionally shown as a solid color upon being loaded
-   [MC-218877](https://bugs.mojang.com/browse/MC-218877) The red flash when a mob is hurt/killed appears to be slightly dimmed
-   [MC-218881](https://bugs.mojang.com/browse/MC-218881) When selecting text in the end, the sky gets highlighted
-   [MC-218911](https://bugs.mojang.com/browse/MC-218911) The background of hover-event text becomes blue when text is selected in an anvil or chat
-   [MC-218945](https://bugs.mojang.com/browse/MC-218945) Spyglass has a gradient effect while freezing
-   [MC-218979](https://bugs.mojang.com/browse/MC-218979) Cave ceilings and floors sometimes too flat or blocky
-   [MC-218988](https://bugs.mojang.com/browse/MC-218988) Fire is rendered dark in the player/horse/llama UI
-   [MC-218990](https://bugs.mojang.com/browse/MC-218990) Transparency buffers start with blue background instead of empty background
-   [MC-219002](https://bugs.mojang.com/browse/MC-219002) The wither's wither armor has a blue aura around it
-   [MC-219006](https://bugs.mojang.com/browse/MC-219006) The background opacity of subtitles and chat, are affected by a potion effect UI fading out
-   [MC-219014](https://bugs.mojang.com/browse/MC-219014) Charged creeper layer makes clouds and entities invisible
-   [MC-219036](https://bugs.mojang.com/browse/MC-219036) World border is shown as a solid color when picking up items or experience orbs
-   [MC-219039](https://bugs.mojang.com/browse/MC-219039) World border does not render when below the world
-   [MC-219049](https://bugs.mojang.com/browse/MC-219049) Reloading resource packs no longer shows the progress bar while the transparent background is shown
-   [MC-219105](https://bugs.mojang.com/browse/MC-219105) Entity hitboxes can be seen whilst inside of powder snow/lava
-   [MC-219108](https://bugs.mojang.com/browse/MC-219108) Chat scroll bar is offset
-   [MC-219111](https://bugs.mojang.com/browse/MC-219111) Social interactions scroll bar appears broken
-   [MC-219126](https://bugs.mojang.com/browse/MC-219126) Xray with spyglass
-   [MC-219155](https://bugs.mojang.com/browse/MC-219155) Cast fishing line is disconnected from the rod
-   [MC-219180](https://bugs.mojang.com/browse/MC-219180) Slime blocks, honey blocks, stained glass, and ice are fully lit when moved by pistons
-   [MC-219208](https://bugs.mojang.com/browse/MC-219208) Xray using enchanted items
-   [MC-219212](https://bugs.mojang.com/browse/MC-219212) Entity shadows can be seen whilst inside of powder snow/lava
-   [MC-219224](https://bugs.mojang.com/browse/MC-219224) The background opacity of command syntax help is affected when highlighting text
-   [MC-219278](https://bugs.mojang.com/browse/MC-219278) Being inside of a block no longer shows the block texture
-   [MC-219281](https://bugs.mojang.com/browse/MC-219281) Dying ender dragon is rendered too bright
-   [MC-219392](https://bugs.mojang.com/browse/MC-219392) Lead/fishing line is no longer affected by the fog from powder snow/lava
-   [MC-219597](https://bugs.mojang.com/browse/MC-219597) End portal and end gateway textures expand as the player travels further from the block

---

A truly fabulous snapshot enters the arena! This snapshot brings fundamental changes to our rendering pipeline with the introduction of the brand new tech that is OpenGL Core 3.2. On top of that, we're finally introducing the Lush Caves biome. However, as with the Dripstone Caves, this is only available through creating a custom world.

There's an important note about this snapshot for those of you with older computers: With the introduction of OpenGL Core 3.2 there is a chance Minecraft Java will no longer run on computers that do not meet the [minimum system requirements](https://help.minecraft.net/hc/en-us/articles/360035131371-Minecraft-Java-Edition-system-requirements-). Computers that meet the [minimum system requirements](https://help.minecraft.net/hc/en-us/articles/360035131371-Minecraft-Java-Edition-system-requirements-) should not be affected.

## New Features in 21w10a

-   Added Lush Caves underground biome!
-   Added Cracked Deepslate Bricks and Cracked Deepslate Tiles
-   There is now an Infested variant of Deepslate found in the underground
-   While they will not generate in the world by default, Deepslate versions of copper, emerald and coal ores have been added for use by creators of maps and data packs

### Lush caves biome

The Lush Caves underground biome now exists for use in single-biome worlds. It does not yet generate in other world types.

-   Moss covers the floors and ceilings
-   Spore Blossoms grow from the ceiling and drip particles
-   Contains clay pools with dripleaf plants grow out of them
-   Contains azalea bushes and flowering azalea bushes
-   The azalea tree loves to have its roots in lush caves, so if you find an azalea tree (either overground or in a cave) you know there is a lush cave beneath you
-   Cave vines with glow berries grow from the ceiling and light up the caves

## Changes in 21w10a

-   Cobbled Deepslate can now be smelted into Deepslate.
-   Deepslate can now be placed along any axis
-   Lightning rods can now be waterlogged
-   Fossils in the deepest part of the underground generate with deepslate diamond ore instead of coal ore
-   Some ore textures have been updated

![Minecraft Snapshot 21w10a texture comparison (cropped)](https://launchercontent.mojang.com/images/snapshot-21w10a-texture-comparison.jpg)

Ore texture changes in snapshot 21w10a. [Click here](https://launchercontent.mojang.com/v2/images/snapshot21w10atexturecomparisonfullresolution.jpg) for a link to the full resolution image.

![Minecraft Snapshot 21w10a texture comparison 2 (cropped)](https://launchercontent.mojang.com/images/snapshot-21w10a-texture-comparison2.jpg)

New textures for emerald, coal, and copper in Deepslate. [Click here](https://launchercontent.mojang.com/v2/images/snapshot21w10atexturecomparison2fullresolution.jpg) for a link to the full resolution image.

### Ore distribution

Overworld ore generation has been tweaked.

-   More emeralds in mountains
-   More lapis
-   Less copper, gold, and redstone
-   Smaller diamond blobs, but slightly more frequent. Less diamond ore overall though
-   Less iron, and it generates lower down
-   Reduced air exposure for coal

![Minecraft Snapshot 21w10a ores distribution (cropped)](https://launchercontent.mojang.com/images/snapshot-21w10a-ores-distribution-cropped.jpg)

Ore distribution in snapshot 21w10a. [Click here](https://launchercontent.mojang.com/v2/images/snapshot21w10aoredistributionfull.jpg) for a link to the full resolution image.

## Technical Changes in 21w10a

-   The game now runs using OpenGL 3.2 core profile
-   The maximum size that slimes can be summoned with is now 128
-   The `give` command can only give up to 100 stacks of items at a time (e.g. 6400 stone or 100 iron swords)

### OpenGL

Rendering is now using OpenGL 3.2 core profile. All fixed function rendering has been replaced with shader based rendering.

#### Shaders

Shaders are now included for all supported render states. Any shader except for the `blit` shader can also be replaced in resource packs. For now replacing these shaders is **not officially supported** and the way it works may change in the future.

The current rendering engine uses a system similar to the post processing shader pipeline. There are some differences between both system that cater to the slightly different requirements.

## Bugs fixed in 21w10a

-   [MC-29318](https://bugs.mojang.com/browse/MC-29318) Client misses inventory updates while player is manipulating items causes invisible items
-   [MC-84121](https://bugs.mojang.com/browse/MC-84121) Shape of glow effect is based on mob's base layer
-   [MC-87019](https://bugs.mojang.com/browse/MC-87019) Only visible slots are updated clientside when you are inside an inventory
-   [MC-154094](https://bugs.mojang.com/browse/MC-154094) Lectern running /clear turns items into ghost items
-   [MC-175964](https://bugs.mojang.com/browse/MC-175964) Setblock command run by book in lectern to clear inventory run in command block causes ghost items
-   [MC-201316](https://bugs.mojang.com/browse/MC-201316) The /give command can create so many items that the game will freeze
-   [MC-207818](https://bugs.mojang.com/browse/MC-207818) Placing a sign from the offhand closes the sign UI immediately
-   [MC-208301](https://bugs.mojang.com/browse/MC-208301) /clear does not properly affect the item on the mouse pointer after crafting it
-   [MC-210408](https://bugs.mojang.com/browse/MC-210408) /spawnpoint allows players to set their spawnpoint to out-of-bounds coordinates, which crashes the game when trying to respawn
-   [MC-211666](https://bugs.mojang.com/browse/MC-211666) Guardians attack invisible axolotls
-   [MC-212127](https://bugs.mojang.com/browse/MC-212127) Normal ink sac and glow ink sac are not grouped in the creative inventory
-   [MC-212144](https://bugs.mojang.com/browse/MC-212144) Subtitles refer to Glow Item Frame as "Item Frame"
-   [MC-212168](https://bugs.mojang.com/browse/MC-212168) Ctrl + Pick Block doesn't copy block state "lit"
-   [MC-212236](https://bugs.mojang.com/browse/MC-212236) Cannot visually critical-hit a glow squid (No sound/particles)
-   [MC-212314](https://bugs.mojang.com/browse/MC-212314) Glow squid remains dark even if there is a light source block next to it
-   [MC-212325](https://bugs.mojang.com/browse/MC-212325) Glow Squid entity data (potion effects, custom name, ...) does not get saved
-   [MC-214629](https://bugs.mojang.com/browse/MC-214629) FOV decreases when underwater regardless of FOV Effects accessibility setting
-   [MC-214781](https://bugs.mojang.com/browse/MC-214781) Lava does not generate at the very bottom of noise caves
-   [MC-214784](https://bugs.mojang.com/browse/MC-214784) Fossils can generate floating in caves
-   [MC-214836](https://bugs.mojang.com/browse/MC-214836) Water caves cause land to be excessively flooded
-   [MC-214844](https://bugs.mojang.com/browse/MC-214844) Bedrock can be exposed to the air at the very bottom of the new caves
-   [MC-214970](https://bugs.mojang.com/browse/MC-214970) Phantoms continously make too much flapping sounds
-   [MC-215194](https://bugs.mojang.com/browse/MC-215194) Structure blocks do not work below y=0
-   [MC-215838](https://bugs.mojang.com/browse/MC-215838) There is currently no way to craft deepslate tiles and deepslate bricks
-   [MC-215850](https://bugs.mojang.com/browse/MC-215850) Deepslate Tile Wall comes before Deepslate Brick Wall but Deepslate Bricks come before Deepslate Tiles in creative inventory
-   [MC-215939](https://bugs.mojang.com/browse/MC-215939) Emerald ore spawns in lower frequencies than it should above y=100
-   [MC-216136](https://bugs.mojang.com/browse/MC-216136) Polished deepslate slab isn't grouped with the other deepslate slabs in creative inventory
-   [MC-216363](https://bugs.mojang.com/browse/MC-216363) Crash upon replacing soul sand or magma with the other under a tall bubble column using /setblock
-   [MC-216735](https://bugs.mojang.com/browse/MC-216735) Stone Lapis Ore generating in Deepslate
-   [MC-216736](https://bugs.mojang.com/browse/MC-216736) Lava lakes generate exposed in caves
-   [MC-216765](https://bugs.mojang.com/browse/MC-216765) Coal ore can generate below Y=0 when attached to a fossil
-   [MC-216817](https://bugs.mojang.com/browse/MC-216817) Inconsistency: Cobbled deepslate cannot be smelted back into deepslate
-   [MC-218139](https://bugs.mojang.com/browse/MC-218139) Spectator vision bug

---

Snapshot 21w08b is a small hotfix to fix two issues with ore distribution.

Happy mining!

## Fixed Bugs in 21w08b

-   [MC-216744](https://bugs.mojang.com/browse/MC-216744) Iron ore doesn't generate (only iron ore in deepslate is generated)
-   [MC-216101](https://bugs.mojang.com/browse/MC-216101) Redstone ore generates with a flat distribution below y=12

---

In this snapshot, our new beloved stone type has suffered a grim fate and has been renamed to Deepslate. How mysterious!

## Changes in 21w08a

-   Tweaked cave sizes further
-   Canyon and cave carvers now apply below y=0
-   Cracks can now be found carved into the ground
-   Grimstone has been changed into Deepslate
-   Added Deepslate ores
-   The [distribution of ores](https://launchercontent.mojang.com/v2/images/snapshot21w08aoredistribution.jpg) has been further tweaked
-   Andesite no longer generates under y=0
-   Tuff now sometimes generates under y=0
-   The Tuff layer of amethyst geodes has been replaced with now a new type of stone called Smooth Basalt
-   Smooth basalt is now obtained from smelting basalt
-   Another round of tweaking has been done to the new textures of ores and blackstone
-   Emerald and Lapis Lazuli ore textures have had some touch ups
-   Mineshafts now once again generate in the open air in caves
-   Particles now appear in the air around spore blossoms
-   Slime blocks and honey blocks have been moved to the redstone tab of the creative inventory

![Snapshot 21w08a texture comparison.](https://launchercontent.mojang.com/images/snapshot-21w08a-texture-comparison.jpg)

### Deepslate

-   Grimstone is now called Deepslate
-   Deepslate now has a top texture, and a new block called Cobbled Deepslate drops from Deepslate
-   The cobbled variant is the same but without the top texture, and is used to craft all Deepslate variants instead
-   Deepslate now has a unique set of sounds! Very crunchy indeed

### Deepslate ores

-   Added Deepslate versions of iron, gold, lapis, redstone and diamond ores that generate wherever those ores replace Deepslate
-   Twice as tough to mine as normal ores

### Ore Distribution Tweaks

![Ore distribution in snapshot 21w08a.](https://launchercontent.mojang.com/images/snapshot-21w08a-ore-distribution-741x421.jpg) [Click here](https://launchercontent.mojang.com/v2/images/snapshot21w08aoredistribution.jpg) for a link to the image in full resolution.

## Fixed bugs in 21w08a

-   [MC-213926](https://bugs.mojang.com/browse/MC-213926) Rooted dirt footstep sounds are considerably quieter than normal dirt footstep sounds
-   [MC-214782](https://bugs.mojang.com/browse/MC-214782) Geodes can generate floating in caves
-   [MC-214843](https://bugs.mojang.com/browse/MC-214843) Old style caves don't generate past Y=0

---

