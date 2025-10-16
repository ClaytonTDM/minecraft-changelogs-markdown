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
-   [MC-203554](https://bugs.mojang.com/browse/MC-203554) block.amethyst\_block.chime has no subtitle
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

## New Features in 21w07a

-   Added Grimstone!

## Grimstone

Grimstone can be found in the deepest parts of the underground, and is slightly tougher to mine than normal Stone.

-   Like Blackstone, Grimstone can be used to craft basic tools, furnaces and brewing stands.
-   You can craft the following blocks with this new stone type:
    -   Grimstone Slab
    -   Grimstone Stairs
    -   Grimstone Wall
    -   Polished Grimstone
    -   Polished Grimstone Slab
    -   Polished Grimstone Stairs
    -   Polished Grimstone Wall
    -   Grimstone Bricks
    -   Grimstone Brick Slab
    -   Grimstone Brick Stairs
    -   Grimstone Brick Wall
    -   Grimstone Tiles
    -   Grimstone Tile Slab
    -   Grimstone Tile Stairs
    -   Grimstone Tile Wall
    -   Chiseled Grimstone

## Changes in 21w07a

-   Tweaks and updates to world generation and ores
-   Changes to the visuals of some ores and stone types
-   Reordered Redstone Tab in Creative Inventory

### World Generation

-   Tweaked huge caves to be more rare and decreased the chance that caves are filled with water
-   Changed ore generation to match the new world height and to add more strategy to mining
-   Tweaked size and positioning of diorite, andesite & granite generation
-   Exception: Diorite and Granite and Dirt no longer generate below y = 0
-   Strongholds are now mostly encased in stone
-   Mineshaft corridors are now supported by log pillars below or chains above when needed

![Comparing old and new ore distribution](https://launchercontent.mojang.com/images/snapshot-21w07a-ore-comparison.png) [Click here](https://i.imgur.com/RH5cgSF.jpg) to view full resolution.

### Visuals

-   Ores without unique shapes have been given new textures for accessibility reasons, so that each ore is distinguishable by shape alone
-   Being the most iconic ore, Diamond Ore texture is staying the same to keep that classic feel maintained
-   Blackstone, Polished Blackstone Bricks, and Cracked Polished Blackstone Bricks have had some minor touch ups

![snapshot-21w07a-texture-comparison](https://launchercontent.mojang.com/images/snapshot-21w07a-texture-comparison.jpg)

### Creative Inventory

-   The Redstone Tab has been reordered to prioritize highly-used blocks
-   Redstone items/blocks have been grouped and ordered in the following way:
    -   Essentials
    -   Unique activators
    -   Miscellaneous
    -   Common activators
    -   Openables

## Fixed bugs in 21w07a

-   [MC-147589](https://bugs.mojang.com/browse/MC-147589) Vines no longer randomly generate in jungles
-   [MC-208613](https://bugs.mojang.com/browse/MC-208613) Amount of players who need to sleep to skip the night is calculated incorrectly
-   [MC-208618](https://bugs.mojang.com/browse/MC-208618) Clicking on a bed immediately skips the night if gamerule playersSleepingPercentage is set to 0
-   [MC-211224](https://bugs.mojang.com/browse/MC-211224) Seagrass can occasionally replace parts of a swamp hut
-   [MC-214082](https://bugs.mojang.com/browse/MC-214082) Crash after placing soul sand or magma under 2032 tall water
-   [MC-214814](https://bugs.mojang.com/browse/MC-214814) Strongholds generate floating and without walls, floors, or ceilings when inside caves
-   [MC-214844](https://bugs.mojang.com/browse/MC-214844) Bedrock can be exposed to the air at the very bottom of the new caves
-   [MC-214885](https://bugs.mojang.com/browse/MC-214885) Beacon beam only render 256 blocks from source
-   [MC-214973](https://bugs.mojang.com/browse/MC-214973) Powder snow bucket in a dispenser at y = 319 facing upwards or at y = -64 facing downwards is replaced with empty bucket, despite no powder snow being placed
-   [MC-214986](https://bugs.mojang.com/browse/MC-214986) Large dripstones only generate as stalagmites below Y=0

---

Hello, new snapshot! Hello, new cave generation!

Today's snapshot introduces a major change to how caves are generated within Minecraft. You could say that we're now introducing the cave part of Caves & Cliffs.

This is only the first step in our underground adventure, so please note that snapshots show features in early development and that there are two notable caveats with this snapshot:

-   You'll be unable to open old worlds in this snapshot as there is currently no upgrade path towards the new world height
-   All caves of the new type between y31 and y63 will be flooded with water

## New Features in 21w06a

-   Added noise caves and aquifers

### Noise caves and Aquifers

-   Noise caves are a new way of generating caves, providing more natural variety. They can get really huge sometimes! Noise caves come in two flavors:
    -   Cheese caves. Like the holes in swiss cheese. These often form caverns of various size.
    -   Spaghetti caves. Long squiggly tunnels, sometimes wide like tagliatelle.
-   No, they aren't loud. The "noise" part of noise caves is a technical term and has nothing to do with sound.
-   The old cave carvers and canyons still generate, combining with the noise caves to form interesting cave systems.
-   As with carvers, when noise caves intersect the surface they form cave entrances.
-   An aquifer is an area with local water level, independent of sea level. Aquifers are used during world generation to generate bodies of water inside noise caves. This sometimes results in large underground lakes!
-   For now, aquifers are only used below y31. This means all noise caves between y31 and sea level (y63) will be flooded with water, and noise cave entrances will essentially be lakes. This will be fixed later.
-   Magma sometimes generates at the bottom of underground bodies of water
-   Underwater cave carvers and underwater canyons have been removed, since aquifers are used to generate water in caves instead.

## Changes in 21w06a

-   Overworld build and generation limits have been expanded
-   Mineshafts adapted to larger caves
-   You can no longer crouch or jump to prevent a big dripleaf from tilting
-   A big dripleaf will now tilt rather than break when hit by a projectile
-   A redstone powered big dripleaf will not tilt (except when hit by a projectile)
-   The textures for hanging roots and small dripleaves have been updated

### World generation

-   Generation range and build limits have been expanded by 64 blocks up and 64 blocks down, to a total range of 384 blocks
-   Underground features, structures, and caves generate all the way down to y -64.

### Mineshaft changes

-   Mineshaft pieces don't generate if they would be fully floating in the air
-   Mineshaft corridors are supported by log pillars when needed
-   No floating cobwebs

## Fixed bugs in 21w06a

-   [MC-214346](https://bugs.mojang.com/browse/MC-214346) Big dripleaf can be broken with arrows in spawn protection
-   [MC-213813](https://bugs.mojang.com/browse/MC-213813) Small dripleaf can destroy any block

---

Snapshot 21w05b is a small snapshot to address a couple of bugs.

## Fixed bugs in 21w05b

-   [MC-203813](https://bugs.mojang.com/browse/MC-203813) Copper blocks are named inconsistently
-   [MC-213788](https://bugs.mojang.com/browse/MC-213788) The game can randomly freeze
-   [MC-213802](https://bugs.mojang.com/browse/MC-213802) Copper is not upgraded correctly from pre-21w05a worlds

---

## New Features in 21w05a

-   Azalea bushes as well as flowering azaela bushes!
-   Added cave vines and glow berries!
-   Added drip leaves!
-   Added decorative blocks for the upcoming lush caves: hanging roots and rooted dirt!
-   Added moss!
-   Added spore blossom!

### Cave vines and glow berries

-   Cave vines grow down from the ceiling, like weeping vines
-   When they grow they have a chance of producing glow berries
-   Glow berries are a natural light source as well as a food source
-   Foxes eat glow berries
-   Use glow berries to plant new cave vines
-   Bonemealing a cave vine will create glow berries

### Dripleaf

-   Small dripleaf needs moisture, so it grows on clay or underwater
-   Small dripleaf grow into big dripleaf when bonemealed.
-   Big dripleaf grows taller when bonemealed
-   If you stand on a big dripleaf it will tilt after a while and you will fall off
-   You can crouch or jump to prevent a big dripleaf from tilting
-   A tilted big drip leaf will tilt up again after a while
-   The big dripleaf will break when hit by a projectile
-   The wandering trader will sometimes sell small dripleaf plants

### Moss

-   Two new decorative blocks: Moss block and moss carpet
-   Moss carpet can be crafted from moss blocks

### Spore blossom

-   A beautiful large flower placed on ceilings
-   Particles drip from it

## Changes in 21w05a

-   The stonecutter can be used to craft the different copper block variants
-   The stages of copper oxidization are now called "Copper Block", "Exposed Copper Block", "Weathered Copper Block" and "Oxidized Copper Block" in sequence of least to most oxidized
-   Drowned now have a chance of dropping a copper ingot, they no longer drop gold ingots
-   Added new sculk sensor events
-   Changes to powder snow

### Sculk Sensor Changes

Added the following game events that the Sculk Sensor reacts to, along with corresponding frequency value:

Vibration Types

Frequency Value

Minecart Moving, Ring Bell, Block Change

6

Drinking Finish, Prime Fuse

7

Mob Interact

8

Equip, Shear, Ravager Roar

9

Entity Place

12

Entity Killed

13

Shulker Close

14

Shulker Open

15

-   `Block Change` is for when player or dispenser action has changed a block. Example: cake slice being eaten.
-   `Mob Interact` is for specific mob interaction events that cause vibrations.
-   `Prime Fuse` is for both TNT and Creepers.

### Powder Snow changes

-   Flaming arrows now get extinguished when they collide with Powder Snow
-   Skeletons now convert to Strays when frozen
-   Powder snow is now pushable by pistons and sticky pistons
-   Foxes can now walk on top of powder snow without falling in

## Technical Changes in 21w05a

-   Improved performance when using many overrides on an item model
-   Copper oxidization is now a random tick effect and thus affected by the randomTickSpeed game rule

## Fixed Bugs in 21w05a

-   [MC-9568](https://bugs.mojang.com/browse/MC-9568) Mobs suffocate / go through blocks when growing up near a solid block
-   [MC-130098](https://bugs.mojang.com/browse/MC-130098) Debug world spawns player at y=2 instead at y=70 where all the blocks are
-   [MC-142711](https://bugs.mojang.com/browse/MC-142711) Baby turtles take damage when pushed against ceiling
-   [MC-148432](https://bugs.mojang.com/browse/MC-148432) Sound spam while in water and lava at the same time
-   [MC-149495](https://bugs.mojang.com/browse/MC-149495) Pufferfish triggers tripwire without colliding with it upon reloading the game
-   [MC-152265](https://bugs.mojang.com/browse/MC-152265) Starting server outputs "unable to resolve BlockEntity for ItemStack" errors
-   [MC-153254](https://bugs.mojang.com/browse/MC-153254) Baby zombies/piglins take damage when pushed against ceiling by bubble columns
-   [MC-163673](https://bugs.mojang.com/browse/MC-163673) Baby husks, piglins, zombies, zombie villagers, and zombified piglins take damage when jumping into a space with a solid block above it
-   [MC-186879](https://bugs.mojang.com/browse/MC-186879) Standing in fire and water spams the extinguish sound
-   [MC-191714](https://bugs.mojang.com/browse/MC-191714) Player is dismounted when standing on farmland while riding a horse/boat while the farmland turns to dirt, causing a desync
-   [MC-198432](https://bugs.mojang.com/browse/MC-198432) Pufferfish phases through blocks after reloading world
-   [MC-199356](https://bugs.mojang.com/browse/MC-199356) chatDelay in options.txt has a space between the colon and the value
-   [MC-200906](https://bugs.mojang.com/browse/MC-200906) Pufferfish hitbox incorrect when reloading world
-   [MC-204801](https://bugs.mojang.com/browse/MC-204801) Large amounts of copper blocks lag the server and causes the worldsave to take forever
-   [MC-205079](https://bugs.mojang.com/browse/MC-205079) Cauldrons don't fill with powder snow in some biomes
-   [MC-205401](https://bugs.mojang.com/browse/MC-205401) "Fire extinguishes" Sound repeatedly plays when a mob that burns in daylight is in powder snow
-   [MC-205477](https://bugs.mojang.com/browse/MC-205477) Occasional desync when trying to enter/exit a boat while the server is lagging
-   [MC-205735](https://bugs.mojang.com/browse/MC-205735) Baby cows can suffocate on stairs
-   [MC-206113](https://bugs.mojang.com/browse/MC-206113) Powder Snow causes Z-Fighting with Falling Blocks
-   [MC-207258](https://bugs.mojang.com/browse/MC-207258) Sculk sensors do not react to minecarts being driven
-   [MC-207261](https://bugs.mojang.com/browse/MC-207261) Bell ringing event is not considered a vibration
-   [MC-207262](https://bugs.mojang.com/browse/MC-207262) Drinking potions or milk doesn’t cause vibrations even though eating does
-   [MC-207263](https://bugs.mojang.com/browse/MC-207263) Inconsistency: Filling cauldrons with liquids or powder snow is not detected by sculk sensors
-   [MC-207277](https://bugs.mojang.com/browse/MC-207277) Sculk sensor can't detect setting a fire with fire charge
-   [MC-207283](https://bugs.mojang.com/browse/MC-207283) Extinguishing a campfire is not detected by sculk sensor
-   [MC-207300](https://bugs.mojang.com/browse/MC-207300) Blocks being placed or picked up by an enderman are not detected by sculk sensors
-   [MC-207329](https://bugs.mojang.com/browse/MC-207329) Sculk sensors don't properly detect eating from other mobs
-   [MC-207340](https://bugs.mojang.com/browse/MC-207340) Sculk sensors do not detect buckets of fish being emptied
-   [MC-207358](https://bugs.mojang.com/browse/MC-207358) Sculk sensors don't detect shulkers opening and closing
-   [MC-207384](https://bugs.mojang.com/browse/MC-207384) Flame arrows repeatedly trigger sculk sensors
-   [MC-207387](https://bugs.mojang.com/browse/MC-207387) Sculk sensors can sense players sneaking in water when they move, even when they're not swimming
-   [MC-207391](https://bugs.mojang.com/browse/MC-207391) Sculk sensors don't detect certain flying mobs
-   [MC-207397](https://bugs.mojang.com/browse/MC-207397) The fire extinguish sound plays every tick when the player is on fire and freezing
-   [MC-207407](https://bugs.mojang.com/browse/MC-207407) Villages will always generate at least on y=0
-   [MC-207417](https://bugs.mojang.com/browse/MC-207417) Directly breaking fire does not alert sculk sensors, but removing its supporting block correctly does
-   [MC-207418](https://bugs.mojang.com/browse/MC-207418) Breaking paintings/item frames/glow item frames does not alert sculk sensors, even though placing them does
-   [MC-207445](https://bugs.mojang.com/browse/MC-207445) Sculk sensor doesn't detect squids swimming
-   [MC-207473](https://bugs.mojang.com/browse/MC-207473) Sculk sensors do not detect when ghasts shoot
-   [MC-207520](https://bugs.mojang.com/browse/MC-207520) Sculk sensors don't react to ravager roars
-   [MC-207521](https://bugs.mojang.com/browse/MC-207521) Ocelots and cats can still emit vibrations while sneaking
-   [MC-207592](https://bugs.mojang.com/browse/MC-207592) Shooting bow with flame enchantment while sneaking triggers sculk sensor
-   [MC-207600](https://bugs.mojang.com/browse/MC-207600) Sculk sensor detects wrong sound for fishing rod
-   [MC-207670](https://bugs.mojang.com/browse/MC-207670) Sculk sensors do not detect the placement of boats and minecarts
-   [MC-207671](https://bugs.mojang.com/browse/MC-207671) Sculk sensors do not detect candles being placed into cakes
-   [MC-207672](https://bugs.mojang.com/browse/MC-207672) Sculk sensors do not detect when creepers are set off with flint and steel
-   [MC-207673](https://bugs.mojang.com/browse/MC-207673) Sculk sensors do not detect lighting TNT with flint and steel
-   [MC-207674](https://bugs.mojang.com/browse/MC-207674) Sculk sensors do not detect placing things in flower pots
-   [MC-207675](https://bugs.mojang.com/browse/MC-207675) Sculk sensors do not detect books being placed onto lecterns
-   [MC-207677](https://bugs.mojang.com/browse/MC-207677) Sculk sensors do not detect collecting water with bottles
-   [MC-207678](https://bugs.mojang.com/browse/MC-207678) Sculk sensors do not detect collecting honey bottles
-   [MC-207679](https://bugs.mojang.com/browse/MC-207679) Sculk sensors do not detect the breaking of bee nests and beehives in Creative mode
-   [MC-207745](https://bugs.mojang.com/browse/MC-207745) Sculk sensors do not detect when ender dragons shoot fireballs
-   [MC-208193](https://bugs.mojang.com/browse/MC-208193) Sculk sensors do not detect removing things from flower pots
-   [MC-208194](https://bugs.mojang.com/browse/MC-208194) Sculk sensors do not detect when candle cakes are eaten
-   [MC-208477](https://bugs.mojang.com/browse/MC-208477) Going into a dimension that has height higher than the maximum height crashes the game
-   [MC-209361](https://bugs.mojang.com/browse/MC-209361) Game crashes upon instantly click-replacing the block underneath a bamboo sapling with another bamboo
-   [MC-209625](https://bugs.mojang.com/browse/MC-209625) Baby llamas suffocate when below a solid block while standing on top of a carpet
-   [MC-212117](https://bugs.mojang.com/browse/MC-212117) Placing glow lichen in lava creates waterlogged glow lichen
-   [MC-212141](https://bugs.mojang.com/browse/MC-212141) Shulkers get rotated when upgrading to 21w03a
-   [MC-212149](https://bugs.mojang.com/browse/MC-212149) Shulker is sometimes mis-rotated when player teleports through a nether portal and reloading an active chunk with Shulker
-   [MC-212284](https://bugs.mojang.com/browse/MC-212284) Crammed enitities pushed through blocks when growing to adults
-   [MC-212290](https://bugs.mojang.com/browse/MC-212290) Commands "setblock" and "fill" don't work at or above height 1024 in some cases
-   [MC-212291](https://bugs.mojang.com/browse/MC-212291) Client can dismount vehicles independently from the server, causing a de-sync
-   [MC-212331](https://bugs.mojang.com/browse/MC-212331) Boats dismount you in the direction the boat is facing instead of the direction of the player
-   [MC-212347](https://bugs.mojang.com/browse/MC-212347) Importing custom world file height is limited to 2047 instead of 2048
-   [MC-212422](https://bugs.mojang.com/browse/MC-212422) Game crashes when generating a world with increased height limit
-   [MC-212532](https://bugs.mojang.com/browse/MC-212532) Shulkers are spawned slightly mis-rotated after a shulker was hit by another shulker's shulker bullet
-   [MC-212537](https://bugs.mojang.com/browse/MC-212537) Standing near a shulker slightly lifts you when they open
-   [MC-212541](https://bugs.mojang.com/browse/MC-212541) Shulkers are often incorrectly rotated upon generation
-   [MC-213512](https://bugs.mojang.com/browse/MC-213512) Copper blocks are named differently from bedrock edition

---

Today's Caves & Cliffs snapshot is particularly shiny! You could almost say it's glowing... Oh wait, that's a squid.

## New Features in 21w03a

​

-   Added Glow Lichen!
-   Added the Glow Squid!

​

### Glow Lichen

-   A dim light source that generates in caves
-   Use shears to pick it up
-   Use bonemeal to spread it along block surfaces

​

### Glow Squid

Glow squids have been added, but do not yet spawn naturally. You can find spawn eggs for them in the creative inventory.

-   Glow Squids are well-lit and can be seen from even far distances!
-   When killed, Glow Squids drop Glow Ink Sacs
-   Glow Ink Sacs can be used on signs to make the text super visible, even at night! Works with colors!
-   Craft a Glow Item Frame by combining a Glow Ink Sac with an Item Frame in a Crafting Table. Any item in a Glow Item Frame is perfectly illuminated, even at night!
-   Use an Ink Sac on a sign to remove the glow effect
-   Axolotls will attack any Glow Squids they see, so...be careful

​

## Changes in 21w03a

​

-   Dripstone blocks can be crafted from 4 pointed dripstone

​

## Fixed bugs in 21w03a

​

-   [MC-9568](https://bugs.mojang.com/browse/MC-9568) Mobs suffocate / go through blocks when growing up near a solid block
-   [MC-89880](https://bugs.mojang.com/browse/MC-89880) Spawner with weight 0 crashes game
-   [MC-91522](https://bugs.mojang.com/browse/MC-91522) Shulker rendering position desync and generates ghost shulker when destroying shulker-ridden boat or minecart
-   [MC-92349](https://bugs.mojang.com/browse/MC-92349) Players can't tempt animals with food while other players are closer to the animal
-   [MC-92867](https://bugs.mojang.com/browse/MC-92867) Setting Json text value to null throws exceptions and crashes
-   [MC-105344](https://bugs.mojang.com/browse/MC-105344) Shulkers in boats and minecarts do not sit up if previousely attached to blocks sideways
-   [MC-108717](https://bugs.mojang.com/browse/MC-108717) Shulkers can't be pushed back
-   [MC-111196](https://bugs.mojang.com/browse/MC-111196) Using a monster spawner to spawn shulkers spawns white shulkers
-   [MC-113177](https://bugs.mojang.com/browse/MC-113177) Shulkers cannot be pushed inside non-solid blocks
-   [MC-119051](https://bugs.mojang.com/browse/MC-119051) Random transparent line in shulker box GUI texture
-   [MC-121897](https://bugs.mojang.com/browse/MC-121897) Gaps in an animation's used frames throws ArrayIndexOutOfBoundsException
-   [MC-139265](https://bugs.mojang.com/browse/MC-139265) Shulkers do not teleport correctly when going through a portal
-   [MC-161334](https://bugs.mojang.com/browse/MC-161334) Shulker boxes cannot be opened if next to a shulker mob
-   [MC-168900](https://bugs.mojang.com/browse/MC-168900) Shulkers teleport with original dimension coordinates after passing through portals
-   [MC-183884](https://bugs.mojang.com/browse/MC-183884) Shulkers are afraid of being next to another shulker
-   [MC-186172](https://bugs.mojang.com/browse/MC-186172) Shulkers open into blocks when unable to teleport
-   [MC-190677](https://bugs.mojang.com/browse/MC-190677) Shulkers aren't aligned to the grid for a split second after being spawned in
-   [MC-200195](https://bugs.mojang.com/browse/MC-200195) Boats don't try dismounting you on land
-   [MC-202202](https://bugs.mojang.com/browse/MC-202202) Server is unable to prevent a player from dismounting a vehicle, causing a desync
-   [MC-203373](https://bugs.mojang.com/browse/MC-203373) Shulker bullet subtitles are not capitalized correctly
-   [MC-203571](https://bugs.mojang.com/browse/MC-203571) Right-clicking an empty bundle sometimes plays hand animation
-   [MC-204337](https://bugs.mojang.com/browse/MC-204337) Bundle use stat never increases
-   [MC-205076](https://bugs.mojang.com/browse/MC-205076) Game mode selection is ordered differently
-   [MC-206118](https://bugs.mojang.com/browse/MC-206118) "type" in loot table number providers is not optional anymore
-   [MC-206510](https://bugs.mojang.com/browse/MC-206510) Game crashes when trying to shift-click a chest into the inventory of a donkey whose chest is being removed
-   [MC-206550](https://bugs.mojang.com/browse/MC-206550) block.pointed\_dripstone.drip\_\[liquid/cauldron\] has no subtitles
-   [MC-206599](https://bugs.mojang.com/browse/MC-206599) Pointed dripstone can be placed atop each other, even if a player would be inside the hitbox of the lower dripstone
-   [MC-206923](https://bugs.mojang.com/browse/MC-206923) Dripstone subtitles are not capitalized properly
-   [MC-207250](https://bugs.mojang.com/browse/MC-207250) Dripstone caves biome name is not properly capitalized
-   [MC-207254](https://bugs.mojang.com/browse/MC-207254) Dripstone caves generate merging dripstones in impossible ways
-   [MC-207293](https://bugs.mojang.com/browse/MC-207293) Dripstone generated in dripstone caves can replace lava sources which looks weird
-   [MC-207335](https://bugs.mojang.com/browse/MC-207335) Mobs cannot spawn in Dripstone Caves
-   [MC-207388](https://bugs.mojang.com/browse/MC-207388) Issues with chunk rendering when height limit is large
-   [MC-207900](https://bugs.mojang.com/browse/MC-207900) Summoning "dust" or "dust\_color\_transition" particles kicks nearby players when on a server
-   [MC-208336](https://bugs.mojang.com/browse/MC-208336) 'player' sub-predicate of 'entity\_properties' predicate only passes if game mode is specified
-   [MC-208611](https://bugs.mojang.com/browse/MC-208611) Shulkerboxes/bundles duplicate items when destroyed by two fire blocks simultaneously
-   [MC-208666](https://bugs.mojang.com/browse/MC-208666) Shulker boxes and bundles drop their items twice when thrown into a lava cauldron

---

Ready your screenshot buttons and start rehearsing your best "naaaaww"s. The final snapshot of the year enters Minecraft Java, and what better way to end the year than with something that has been on our bucket list for quite a while: the adorable **axolotl**?

We hope you'll end the year on a good note, and the entirety of the Java team wishes you happy holidays.

## New Features in 20w51a

​

-   Added the axolotl!

​

### Axolotl

-   Amphibious!
-   Axolotls currently love tropical fish, though this may change. Tropical fish or tropical fish buckets can be used to mate axolotls
-   Axolotls will swim around with you if you're holding a tropical fish or tropical fish bucket in one of your hands
-   When a player kills a mob that the axolotl was attacking or being attacked by, the axolotl will show its appreciation by granting the player temporary regeneration and removing any mining fatigue effects
-   You can pick up your axolotl in a water bucket and carry it around just like a salmon or cod!
-   Axolotls will always chase after squids and other types of fish
-   Axolotls are skittish, but they will attack Drowned and Guardians if you tempt them with their favorite food - tropical fish!
-   Axolotls do not like it out of water, and will dry up and begin taking damage if they are out of water for longer than 5 minutes
-   An axolotl will not dry up as long as they are in water or rain
-   Sometimes when an axolotl takes damage, it will pretend to be dead so that it stops being attacked
-   There are 4 common varieties and 1 rare variety of axolotl
-   Axolotls do not spawn in the world yet, but you can find spawn eggs for them in the creative inventory

​

## Changes in 20w51a

-   Bundles and shulker box items will now drop their items when destroyed
-   Some changes have been made to Sculk Sensors

​

### Sculk Sensors

-   Eating Start has been removed as an event for a few reasons.
    -   It is inconsistent with our philosophy around vibrations. Mining a block is not considered a vibration because a physical event hasn't happened in the world yet (you can stop mining and the block will revert). This is the same for eating: you can start eating, but then stop and the food reverts as if eating never occurred.
    -   It wasn't widely considered to be a useful event for players to use Sculk Sensors with.
    -   Eating Finish is staying, and will likely be much more useful to Sculk Sensors for this scenario.
-   Walking on wool no longer causes vibrations.
-   Throwing wool as an item onto the ground no longer causes vibrations.
-   Sculk Sensors are now silent while waterlogged.

​

#### Vibration Frequency Changes

As we continue to consider feedback from the community, some changes to the frequency ranges have been made. We expect this to change quite heavily up until release to figure out the most interesting ranges for gameplay, and as always feedback is extremely welcome! Here is the newest table in this snapshot.

Vibration Types

Frequency Value

Step

1

Flap

2

Swim

3

Elytra Free Fall

4

Hit Ground

5

Splash, Wolf Shaking

6

Projectile Shoot

7

Projectile Land, Eating Finish, Entity Hit

8

Armor Stand Add Item

9

Block Close, Block Unswitch, Block Unpress, Block Detach, Dispense Fail

10

Block Open, Block Switch, Block Press, Block Attach

11

Block Place, Fluid Place, Flint And Steel Use

12

Block Destroy, Fluid Pickup

13

Fishing Rod Reel-In, Container Close, Piston Contract

14

Fishing Rod Cast, Container Open, Explode, Lightning Strike, Piston Extend

15

## Technical Changes in 20w51a

-   Added gamerule playersSleepingPercentage (100 by default), which sets what percentage of players must sleep to skip the night. Setting to 0 will mean 1 player is always enough to skip the night. Setting above 100 will prevent skipping the night.

​

## Fixed bugs in 20w51a

​

-   [MC-149799](https://bugs.mojang.com/browse/MC-149799) When a crossbow is loaded and in the offhand, you do not see it anymore if you carry an item in the main hand
-   [MC-176615](https://bugs.mojang.com/browse/MC-176615) It is possible to destroy netherite items with lava by putting them inside a container
-   [MC-203563](https://bugs.mojang.com/browse/MC-203563) Cake appears eaten for a split second when putting a candle on it
-   [MC-203568](https://bugs.mojang.com/browse/MC-203568) Trying to put a candle onto a candle cake duplicates the candle
-   [MC-204058](https://bugs.mojang.com/browse/MC-204058) Placing a candle on a cake causes hunger display desync
-   [MC-204146](https://bugs.mojang.com/browse/MC-204146) Netherite can burn whilst inside of a bundle
-   [MC-205057](https://bugs.mojang.com/browse/MC-205057) Bundle inventory preview is off-center inside of the tooltip box
-   [MC-205212](https://bugs.mojang.com/browse/MC-205212) Desync when putting a candle on a cake in Survival mode
-   [MC-207405](https://bugs.mojang.com/browse/MC-207405) Nether stars can be blown up while being inside of a bundle/shulker box
-   [MC-208082](https://bugs.mojang.com/browse/MC-208082) Game stalls when any message is displayed in chat while playing with an expired session

---

Another snapshot is going out, and this one introduces the Sculk. They're a bit creepy, but don't let that put you off. Pick up some good vibrations!

## New Features in 20w49a

-   Added Dripstone Caves biome
-   Added Sculk Sensors

### Dripstone Caves biome

This biome doesn't generate naturally yet, since it is designed for the upcoming larger caves. However, if you want to see the biome in the current caves you can create a single-biome world with dripstone caves.

-   Contains plenty of Pointed Dripstone on the floors and ceilings, and small pools of water
-   In some places you'll find larger stalagmites, stalactites, and columns built from Dripstone Blocks.

### Sculk Sensors

-   Introducing the bizarre, tendril-filled world of Sculk - prepare for Sculk Sensors to creep you out with their unique ability to detect vibrations nearby.
-   A vibration is anything that causes physical motion; if you are careful, there are some motions that are undetectable to sensors by sneaking.
    -   These sneak-friendly vibrations currently include walking, falling to the ground or throwing/shooting projectiles.
-   Sculk Sensors will not listen to vibrations that are directly created by other Sculk sources.
-   When a vibration is detected, a signal is sent from the source location to the sensor at a speed of 1 game tick per block.
    -   Other vibrations cannot be detected by a sensor when a signal is already travelling to it.
    -   When the signal has arrived, the sensor will be activated for 40 game ticks (approximately 2 seconds).
    -   While activated, the sensor cannot detect other vibrations.
-   Sculk Sensors can detect vibrations in an 8 block radius around it.
-   The efficient tool to mine Sculk Sensors is the Hoe.
-   They can be waterlogged.

#### Redstone Emission

-   Sculk Sensors emit a redstone signal when they are activated.
-   The strength of the redstone signal is inversely proportional to the distance the vibration signal travelled.
    -   This means that the closer the vibration is, the stronger the redstone signal is.
    -   The output is also scaled based on the Sculk Sensor's radius, so it can reach the max redstone signal strength when the vibration is 0 distance away (directly on top of the sensor).

#### Vibration Frequencies

-   Sculk Sensors have a unique interaction with comparators.
-   Each vibration in the game falls under a certain frequency value, and this value can be measured with a comparator.
-   With the right contraption, this allows you to detect when a certain action has occured nearby.

Vibration Type

Frequency Value

Step

1

Flap

2

Swim

3

Elytra Free Fall

4

Hit Ground

5

Splash

6

Wolf Shaking

6

Projectile Shoot

7

Projectile Land

8

Start Eating

7

Finish Eating

8

Hit Entity

9

Add Item To Armor Stand

9

Open Block

11

Close Block

10

Switch Block

11

Unswitch Block

10

Press Block

11

Unpress Block

10

Attach Block

11

Detach Block

10

Open Container

11

Close Container

10

Dispense Failed

10

Use Flint And Steel

12

Place Block

12

Destroy Block

13

Place Fluid

12

Pickup Fluid

13

Cast Fishing Rod

15

Reel-In Fishing Rod

14

Extend Piston

15

Contract Piston

14

Explosion

15

Lightning Strike

15

#### Wool Occlusion

-   Wool has a special interaction with Sculk Sensors.
-   If a wool block is in the way of a vibration source, the sensor will not be able to detect it.

#### Technical Tidbits

-   Sculk Sensors have a cooldown period of 1 tick after being placed or after deactivating.
-   During this short cooldown period, it cannot detect vibrations. This is to prevent it from activating itself when a contraption it is powering is being unpowered. Feedback is welcome on this point!

## Changes in 20w49a

-   The Fullness of a bundle now shows up regardless of whether Advanced Tooltips are on or off
-   Stalactites and stalagmites merge if the tips are next to each other, unless you press shift while placing

## Technical Changes in 20w49a

-   A new game event system has been implemented to support Sculk Sensors detecting vibrations.
-   World height related values are now exposed for customized worlds
-   Removed the `max-build-height` server setting
-   Added `occludes_vibration_signals` block tag. Anything in this tag will occlude vibrations, and inherits `wool` tag entries by default
-   New particle types: `vibration` and `dust_color_transition`
-   A new game event system has been implemented to support Sculk Sensors detecting vibrations.

### Game Events

This system has been developed to identify when certain in-world actions are happening in nearby chunks, particularly so the new Sculk Sensor can detect these events as vibrations.

The following is a list of the initial game events:

-   `minecraft:step`
-   `minecraft:swim`
-   `minecraft:flap`
-   `minecraft:elytra_free_fall`
-   `minecraft:hit_ground`
-   `minecraft:splash`
-   `minecraft:projectile_shoot`
-   `minecraft:projectile_land`
-   `minecraft:entity_hit`
-   `minecraft:block_place`
-   `minecraft:block_destroy`
-   `minecraft:fluid_place`
-   `minecraft:fluid_pickup`
-   `minecraft:block_open`
-   `minecraft:block_close`
-   `minecraft:block_switch`
-   `minecraft:block_unswitch`
-   `minecraft:block_attach`
-   `minecraft:block_detach`
-   `minecraft:block_press`
-   `minecraft:block_unpress`
-   `minecraft:container_open`
-   `minecraft:container_close`
-   `minecraft:explode`
-   `minecraft:armor_stand_add_item`
-   `minecraft:wolf_shaking`
-   `minecraft:dispense_fail`
-   `minecraft:fishing_rod_cast`
-   `minecraft:fishing_rod_reel_in`
-   `minecraft:piston_extend`
-   `minecraft:piston_contract`
-   `minecraft:flint_and_steel_use`
-   `minecraft:eating_start`
-   `minecraft:eating_finish`
-   `minecraft:lightning_strike`

#### Tags

There are also game event tags that come with this, and can be modified by data packs. They can be found under `data/minecraft/tags/game_events`.

-   `vibrations` Determines which game events are considered vibrations by the Sculk Sensor. Currently, all added game events are in this tag by default.
-   `ignore_vibrations_stepping_carefully` Which game events should be ignored by the Sculk Sensor when the source of the event is sneaking.

The following game events are in `ignore_vibrations_stepping_carefully` by default:

-   `minecraft:step`
-   `minecraft:hit_ground`
-   `minecraft:projectile_shoot`

## Fixed bugs in 20w49a

-   [MC-18880](https://bugs.mojang.com/browse/MC-18880) The Absorption effect has no texture for poison/wither hearts (appears empty instead)
-   [MC-201840](https://bugs.mojang.com/browse/MC-201840) Optional function tags sometimes don't run even when the tag exists
-   [MC-203797](https://bugs.mojang.com/browse/MC-203797) Placing or removing a block over the void causes a DecoderException on servers
-   [MC-204314](https://bugs.mojang.com/browse/MC-204314) Double copper slabs only drop a single slab when mined
-   [MC-205043](https://bugs.mojang.com/browse/MC-205043) Absorption hearts appear broken when taking freezing damage
-   [MC-205096](https://bugs.mojang.com/browse/MC-205096) Hardcore hearts lose all color when player is taking freeze damage
-   [MC-205391](https://bugs.mojang.com/browse/MC-205391) Waxing cut copper doesn’t prevent it from oxidising
-   [MC-205629](https://bugs.mojang.com/browse/MC-205629) Unused sign cache when rendering signs
-   [MC-206553](https://bugs.mojang.com/browse/MC-206553) Pointed Dripstone creates water particles in the Nether
-   [MC-206563](https://bugs.mojang.com/browse/MC-206563) Pointed dripstone is not connected to the player's hand
-   [MC-206578](https://bugs.mojang.com/browse/MC-206578) Large pillars of stalactites don't fall when the block above is removed
-   [MC-206583](https://bugs.mojang.com/browse/MC-206583) Cauldrons below stalactites at least 2 blocks tall won't fill up
-   [MC-206591](https://bugs.mojang.com/browse/MC-206591) Setting any floating block to a pointed dripstone, causes the replaced block to drop as an item
-   [MC-206594](https://bugs.mojang.com/browse/MC-206594) Large stalactites falling occasionally don't drop all of their pointed dripstone items
-   [MC-206599](https://bugs.mojang.com/browse/MC-206599) Pointed dripstone can be placed atop each other, even if a player would be inside the hitbox of the lower dripstone
-   [MC-206606](https://bugs.mojang.com/browse/MC-206606) Frustum stage of stalactites negates fall damage
-   [MC-206613](https://bugs.mojang.com/browse/MC-206613) Pointed Dripstone duplicates when the block it was attached to is removed
-   [MC-206615](https://bugs.mojang.com/browse/MC-206615) Pointed dripstone's hitbox can extend further than a block, causing nearby stalactites to not be able to fall
-   [MC-206642](https://bugs.mojang.com/browse/MC-206642) Stalactites destroy items they fall on, however stalagmites don't
-   [MC-206643](https://bugs.mojang.com/browse/MC-206643) When a dripstone's hitbox extends into the space of another block, the area that extends into said block cannot be targeted
-   [MC-206669](https://bugs.mojang.com/browse/MC-206669) Inconsistency between dripstone and non-mob entities
-   [MC-206682](https://bugs.mojang.com/browse/MC-206682) Floating dripstone tips are sometimes left behind from large dripstone pillars
-   [MC-206691](https://bugs.mojang.com/browse/MC-206691) Pointed dripstone replaces items with pointed dripstone items
-   [MC-206711](https://bugs.mojang.com/browse/MC-206711) Coding error at net.minecraft.world.entity.Entity.resetPos()
-   [MC-206790](https://bugs.mojang.com/browse/MC-206790) Waterlogged dripstone does not update
-   [MC-206878](https://bugs.mojang.com/browse/MC-206878) Pointed dripstone attached to a piston is not removed as the piston extends

---

