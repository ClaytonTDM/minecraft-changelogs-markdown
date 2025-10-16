# Minecraft Snapshot 24w44a

We're back in the shipping room to serve you the first snapshot release for Minecraft: Java Edition 1.21.4! It's coming in hot with some new pale goodies in the form of Eyeblossoms and Resin, two new additions to the Pale Garden biome. You'll also find that leaves will now fall from the Pale Oak trees in said biome, something we hope will crank up the eerie atmosphere even further. In addition to that, this release is also bringing a collection of technical updates and bug fixes.

Happy mining!

## New Features

The `winter_drop` is no longer an experiment.

### Added Eyeblossoms

Eyeblossoms are new flowers that generate in the Pale Garden biome. Unique features:

-   They exist in two variants: Closed and Open Eyeblossom
-   Eyeblossoms transition between the two variants based on the time of day
    -   During the night, Eyeblossoms will become Open
    -   During the day, they will become Closed
    -   In dimensions that do not have a day/night cycle, they will remain as-is
    -   When transitioning, flowers will emit a particle effect
-   Eyeblossoms planted on the ground will communicate with each other, helping each other to open or close
-   Open Eyeblossoms have glowing eyes during the night
-   Eyeblossoms can be obtained by bonemealing the grass in the Pale Garden biome
-   Bees get poisoned when they touch Eyeblossoms
-   Bees can be tempted by Eyeblossoms, but they get poisoned on player interaction instead of typical breeding/growing behaviour
-   Suspicious Stew made from Eyeblossom will have Blindness or Nausea effect depending on the variant
-   Gray or Orange Dye can be crafted from Closed and Open Eyeblossoms respectively
-   Wandering Trader can sell Open Eyeblossoms

### Added Resin Clump, Block of Resin, Resin Brick, and a family of Resin Bricks blocks

-   Attacking a Creaking will cause its Creaking Heart to exude 2 to 3 Resin Clumps
-   Resin Clump spawns on the sides of Pale Oak Logs that are close, and are connected to the Creaking Heart
-   Creaking Heart is on cooldown and cannot produce more Resin Clumps for 5 seconds after an attack
-   Resin Clump can be used as a material for armor trimming
-   Block of Resin is a storage block for Resin Clumps
-   Resin Clumps can be smelted into Resin Brick items
-   Resin Brick items can be crafted into Resin Bricks, Resin Brick Slabs, Resin Brick Stairs, Resin Brick Walls, and then Chiseled Resin Bricks
-   Resin Clump and Resin Block does not require a tool and are mined instantly
-   The proper tool for Resin Bricks family of blocks is a pickaxe
-   Resin Clumps can be found in the Woodland Mansion chest loot

## Changes

-   The panorama has been updated
-   Sword is no longer efficient to break Moss Carpet. The proper tool for Moss Carpet remains the Hoe
-   Bees are now withered on player interactions with Wither Roses instead of typical breeding/growing behavior

### Required tools for drops

> **Developer's Note**: _We made it so any block that drops when its support is broken will also drop when mined with any tool. It seemed unfair that breaking a block directly could destroy it if it was possible to obtain it with any tool just by breaking the block below!_

-   The following blocks that require support now always drop when broken with any tool: Bell, Lantern, Soul Lantern, all Copper Doors, Iron Door, Heavy Weighted Pressure Plate, Light Weighted Pressure Plate, Polished Blackstone Pressure Plate, and Stone Pressure Plate
-   The Brewing Stand now drops when broken with any tool
-   The Ender Chest now drops Obsidian when broken with an incorrect tool, instead of dropping nothing

### Pale Garden

-   Pale Garden has no music and if a player enters the biome while music is playing, the music will fade out

### Creaking Heart

-   Creaking Heart can be obtained by using a Silk Touch enchanted tool
-   Creaking Heart can be crafted with a Resin Block and Pale Oak Logs
-   Naturally placed Creaking Hearts drop 20-24 experience when broken by a player, with or without silk touch
-   Breaking a Creaking Heart block will drop a 1-3 Resin Clumps, and it is affected by Fortune enchantment

### Pale Oak Tree

-   Pale Oak Leaves have a chance to spawn leaf particles if exposed on the bottom side
-   Player grown Pale Oak trees grow without any decorations
-   Naturally generated Pale Oak trees have Pale Hanging Moss hanging from the foliage, Pale Moss patches on the ground, and Creaking Heart blocks can generate in them
-   Wandering Trader can sell Pale Oak Saplings

### Pale Moss Block

-   Wandering Trader can sell a Pale Moss Block

### Pale Hanging Moss

-   Pale Hanging Moss breaks instantly when mined
-   Pale Hanging Moss requires shears or silk touch tools to be obtained
-   Wandering Trader can sell Pale Hanging Moss

### Creaking mob

-   Creaking melee attacks deal 3 points of damage (1.5 hearts)
-   Illagers are scared of Creaking and will run away from them

The following changes apply for naturally spawning Creaking:

-   Creaking reacts only to damage caused by mobs and projectiles, by swaying in place
-   Creaking ignores Cactus, Sweet Berry Bushes and Powder Snow damage and can now walk through/over them
-   Creaking has a twitching animation
-   Is fire-resistant
-   Creaking Heart decides to remove or replace the connected Creaking when:
    -   It turns day
    -   The Creaking is too far away from the Creaking Heart
    -   A player intersects with the Creaking for a few seconds

## Technical Changes

-   The Data Pack version is now 58
-   The Resource Pack version is now 43
-   Removed the `winter_drop` feature flag and built-in data pack

## Data Pack Version 58

-   `trail` particle has a new required field: `duration`
    -   Indicates, in ticks, how long the particle will take to fly from the start to the target
-   `simple_block` feature type has a new optional field: `schedule_tick`
    -   If set to `true`, the block will be scheduled to tick
-   biome effects have a new format for `music` using a weighted list
    -   The list can be empty indicating no music should play in this biome
-   biome effects have a new optional field: `music_volume`
    -   The game will smoothly transition between the current music volume and the new volume when entering the biome

      "music": [
        {
          "data": {
            "max_delay": 24000,
            "min_delay": 12000,
            "replace_current_music": false,
            "sound": "minecraft:music.overworld.forest"
          },
          "weight": 1
        }
      ],
      "music_volume": 1.0,
    

-   Item blocks with `minecraft:block_entity_data` component will now set block entity data only if `id` tag matches type of placed block entity
    -   Additionally, a warning will be added to item tooltip if placing such item might directly or indirectly lead to command execution with high permission level

### Commands

-   Suggestions will now be shown for attribute modifier IDs existing on the target in the `attribute` command

#### `attribute` Command

New subcommand to reset the base value of an attribute to its default value for the target entity. If the attribute does not exist on the entity, the command will fail.

Syntax:

    attribute <target> <attribute> base reset 
    

Parameters:

-   `target`: The entity to update the attribute for
-   `attribute`: The attribute ID to update

### TNT Minecart Data

-   The `TNTFuse` field of TNT Minecarts has been renamed to `fuse`
-   Addeded optional field `explosion_speed_factor` that controls the amount of added damage depending on the speed of the Minecart
    -   Default value: `1.0`

### Text Components

Added optional `shadow_color` style field to Text Components, which overrides the shadow properties of text.

-   Format:
    -   A packed integer ARGB value (e.g. `-1`)
    -   An array of RGBA values (e.g. `[1, 1, 1, 1]`)
-   If specified as `0`, the shadow will never be displayed for this text
-   If specified as a non-zero value, the shadow will always be displayed with this color

## Resource Pack Version 43

-   Added the following new block models and textures:
    -   `chiseled_resin_bricks`
    -   `closed_eyeblossom`
    -   `open_eyeblossom`
        -   Additionally uses `open_eyeblossom_emissive` texture layer
    -   `resin_block`
    -   `resin_bricks`
    -   `resin_clump`
-   Added the following non-top-level block models:
    -   `cross_emissive`
    -   `flower_pot_cross_emissive`
-   Added the following new item models and textures:
    -   `resin_brick`
    -   `resin_clump`
-   Added new Armor Trim color palette: `trims/color_palettes/resin`
-   Updates to GUI sprites
-   The UV mapping of the Magma Cube texture has been updated

### GUI Sprites

-   The `toast/system` sprite layout has been updated to use standard nine-slicing functionality
-   The `toast/tutorial` sprite will now be scaled for taller toasts, and as such has nine-slice scaling in the default Resource Pack
-   The `advancements/box_obtained` and `advancements/box_unobtained` GUI sprites are now configured to scale with nine-slicing
-   Empty slot sprites, such as those for the armor slots in the inventory, have been renamed and moved from `items` into the `gui/sprites/container/slot` directory
    -   `empty_armor_slot_helmet` -> `helmet`
    -   `empty_armor_slot_chestplate` -> `chestplate`
    -   `empty_armor_slot_leggings` -> `leggings`
    -   `empty_armor_slot_boots` -> `boots`
    -   `empty_slot_sword` -> `sword`
    -   `empty_slot_pickaxe` -> `pickaxe`
    -   `empty_slot_axe` -> `axe`
    -   `empty_slot_shovel` -> `shovel`
    -   `empty_slot_hoe` -> `hoe`
    -   `empty_slot_smithing_template_armor_trim` -> `smithing_template_armor_trim`
    -   `empty_slot_smithing_template_netherite` -> `smithing_template_netherite`
    -   `empty_slot_amethyst_shard` -> `amethyst_shard`
    -   `empty_slot_diamond` -> `diamond`
    -   `empty_slot_emerald` -> `emerald`
    -   `empty_slot_ingot` -> `ingot`
    -   `empty_slot_lapis_lazuli` -> `lapis_lazuli`
    -   `empty_slot_quartz` -> `quartz`
    -   `empty_slot_redstone_dust` -> `redstone_dust`
-   The empty slot sprites in the Loom have been split from their background and moved:
    -   `container/loom/banner_slot` -> `container/slot/banner`
    -   `container/loom/pattern_slot` -> `container/slot/banner_pattern`
    -   `container/loom/dye_slot` -> `container/slot/dye`
-   The empty slot sprites in the Brewing Stand have been split from the container background:
    -   `container/slot/brewing_fuel`
    -   `container/slot/potion`
-   The empty slot sprites in the Horse/Llama inventories have been split from their background, cropped, and moved:
    -   `container/horse/armor_slot` -> `container/slot/horse_armor`
    -   `container/horse/llama_armor_slot` -> `container/slot/llama_armor`
    -   `container/horse/saddle_slot` -> `container/slot/saddle`

## Fixed bugs in 24w44a

-   [MC-12829](https://bugs.mojang.com/browse/MC-12829) Flying through climbable blocks in creative mode slows you down
-   [MC-16132](https://bugs.mojang.com/browse/MC-16132) Cave carvers don't cut through snow blocks
-   [MC-49071](https://bugs.mojang.com/browse/MC-49071) The title of written books is not displayed in item frames unless renamed with anvils
-   [MC-50614](https://bugs.mojang.com/browse/MC-50614) Villager trading window is not closed when villager leaves interaction range
-   [MC-55347](https://bugs.mojang.com/browse/MC-55347) Title with long duration shows in other world
-   [MC-59308](https://bugs.mojang.com/browse/MC-59308) Dark/pale oak leaves sometimes do not generate centered on the tree
-   [MC-71990](https://bugs.mojang.com/browse/MC-71990) The 'Hat' layer of a player skin is not shown in the tab list under certain conditions
-   [MC-72846](https://bugs.mojang.com/browse/MC-72846) Altering the time of day using commands is delayed
-   [MC-74408](https://bugs.mojang.com/browse/MC-74408) The brewing stand GUI does not have container sprites for the fuel and potion output slots
-   [MC-86153](https://bugs.mojang.com/browse/MC-86153) Ctrl Pick Block gives new item even if picked item already exists in inventory
-   [MC-111516](https://bugs.mojang.com/browse/MC-111516) Player flickers/turns invisible when flying at high speeds
-   [MC-134002](https://bugs.mojang.com/browse/MC-134002) Blocks at y=-64 don't render on a map
-   [MC-152728](https://bugs.mojang.com/browse/MC-152728) The player continues sprinting when performing actions that slow them down
-   [MC-158205](https://bugs.mojang.com/browse/MC-158205) Ender Dragon doesn't take damage from melee attacks unless hit a certain way
-   [MC-166614](https://bugs.mojang.com/browse/MC-166614) Advancements menu doesn't render titles fully when they're longer than roughly 30 characters
-   [MC-191096](https://bugs.mojang.com/browse/MC-191096) Fences and walls can no longer be placed in invalid block states by using /setblock or /fill
-   [MC-191698](https://bugs.mojang.com/browse/MC-191698) Cannot set "shape" block state of stairs with /setblock
-   [MC-192498](https://bugs.mojang.com/browse/MC-192498) /fill and /setblock cannot set different directional block states of several blocks, such as glass panes and iron bars
-   [MC-192791](https://bugs.mojang.com/browse/MC-192791) Doors' block states cannot be set if another door half exists
-   [MC-192956](https://bugs.mojang.com/browse/MC-192956) Cannot setblock chest type other than single without other adjacent chest
-   [MC-192959](https://bugs.mojang.com/browse/MC-192959) Cannot setblock a directional state on redstone wire nor tripwire
-   [MC-203146](https://bugs.mojang.com/browse/MC-203146) No subtitle for item.crossbow.loading\_middle
-   [MC-225367](https://bugs.mojang.com/browse/MC-225367) Magma Cube's layers UV mapping overlaps
-   [MC-255254](https://bugs.mojang.com/browse/MC-255254) Use /setblock can't place snowy grass block
-   [MC-256822](https://bugs.mojang.com/browse/MC-256822) Advancement description text cuts words in weird places if title is too short
-   [MC-264541](https://bugs.mojang.com/browse/MC-264541) Nine\_sliced sprite glitch
-   [MC-265033](https://bugs.mojang.com/browse/MC-265033) Slots with item outline textures behave inconsistently when items are placed inside of these slots
-   [MC-265637](https://bugs.mojang.com/browse/MC-265637) /execute on origin doesn't work on Area Effect Cloud's owner after rejoining
-   [MC-266019](https://bugs.mojang.com/browse/MC-266019) Large bold text can have gaps in the middle of characters
-   [MC-267095](https://bugs.mojang.com/browse/MC-267095) Nether Brick block texture misalignment
-   [MC-267730](https://bugs.mojang.com/browse/MC-267730) Text wall when trying to join a server
-   [MC-267878](https://bugs.mojang.com/browse/MC-267878) Tutorial hint for movement may not fit all the required text if controls are changed
-   [MC-268364](https://bugs.mojang.com/browse/MC-268364) Wind Charges don't ignite TNT minecarts
-   [MC-268522](https://bugs.mojang.com/browse/MC-268522) The last language option is not deselected if you reach the bottom of the list and exit the menu
-   [MC-268822](https://bugs.mojang.com/browse/MC-268822) There are no shadows on text displayed within the singleplayer, multiplayer, and realms list menus
-   [MC-271218](https://bugs.mojang.com/browse/MC-271218) Empty Offers:{} NBT doesn't disable trades anymore
-   [MC-272062](https://bugs.mojang.com/browse/MC-272062) Dimension padding doesn't affect the start piece
-   [MC-272105](https://bugs.mojang.com/browse/MC-272105) Decorated Pot is missing the "contents" implicit data component type
-   [MC-275917](https://bugs.mojang.com/browse/MC-275917) Consumable blocking animation is broken in first person
-   [MC-276123](https://bugs.mojang.com/browse/MC-276123) Display entity shadow\_radius updates for all display entities
-   [MC-276389](https://bugs.mojang.com/browse/MC-276389) The "Can hold a mixed stack of items" text within bundle tooltips doesn't have a shadow
-   [MC-276794](https://bugs.mojang.com/browse/MC-276794) There are no shadows on text displayed within the social interactions list menu
-   [MC-276799](https://bugs.mojang.com/browse/MC-276799) There are no shadows on text displayed within the superflat customization or preset lists
-   [MC-276969](https://bugs.mojang.com/browse/MC-276969) TNT Minecarts with explosion\_power set to 0 can still break blocks
-   [MC-277066](https://bugs.mojang.com/browse/MC-277066) Creakings do not show particles leading to the creaking heart if Particles are set to Minimal
-   [MC-277072](https://bugs.mojang.com/browse/MC-277072) You can use bone meal on pale moss carpets in situations where nothing grows
-   [MC-277076](https://bugs.mojang.com/browse/MC-277076) Pale hanging moss doesn't have an assigned tool
-   [MC-277094](https://bugs.mojang.com/browse/MC-277094) Pale oak hanging sign uses a totally different palette to the rest of the wood set
-   [MC-277101](https://bugs.mojang.com/browse/MC-277101) Destroying a creaking heart with player-activated TNT does not grant the Monster Hunter advancement
-   [MC-277113](https://bugs.mojang.com/browse/MC-277113) Pale oak sign item and block texture is inconsistent with the other signs
-   [MC-277115](https://bugs.mojang.com/browse/MC-277115) Creaking mob can spawn inside block
-   [MC-277123](https://bugs.mojang.com/browse/MC-277123) You can get soft locked if a creaking falls in a hole with you
-   [MC-277129](https://bugs.mojang.com/browse/MC-277129) The Creaking "slides" on the ground when not aggro towards the player
-   [MC-277134](https://bugs.mojang.com/browse/MC-277134) Pale chest boat item is incorrect
-   [MC-277145](https://bugs.mojang.com/browse/MC-277145) The 2 brightest pixel colors on pale oak boat items are wrong
-   [MC-277164](https://bugs.mojang.com/browse/MC-277164) Music plays in the pale garden
-   [MC-277202](https://bugs.mojang.com/browse/MC-277202) Differences in the highlight effect of empty slot outlines in the GUI
-   [MC-277213](https://bugs.mojang.com/browse/MC-277213) Subtitles for cave sounds, creaking heart idle sounds, and pale hanging moss idle sounds are identical but are shown separately
-   [MC-277214](https://bugs.mojang.com/browse/MC-277214) The sound event associated with the "Creaking sees player" subtitle doesn't exist
-   [MC-277268](https://bugs.mojang.com/browse/MC-277268) Pufferfish have no hit delay on creakings; they make a loud buzzing noise constantly
-   [MC-277271](https://bugs.mojang.com/browse/MC-277271) Sniffers can't dig into pale moss
-   [MC-277275](https://bugs.mojang.com/browse/MC-277275) Crash upon loading chunks when teleporting
-   [MC-277305](https://bugs.mojang.com/browse/MC-277305) Creakings are able to be pushed around by entities and players when standing on soul sand and mud
-   [MC-277363](https://bugs.mojang.com/browse/MC-277363) Creakings cannot rotate their heads independently from their bodies
-   [MC-277368](https://bugs.mojang.com/browse/MC-277368) The "message(s) selected" text within the "Select Chat Messages to Report" menu is positioned too close to the header separator
-   [MC-277373](https://bugs.mojang.com/browse/MC-277373) There are no shadows on text used to display the names of categories within the key binds menu
-   [MC-277374](https://bugs.mojang.com/browse/MC-277374) There are no shadows on text used to display the names of lists within the resource pack and data pack menus
-   [MC-277387](https://bugs.mojang.com/browse/MC-277387) Evokers run away from creakings faster than other illagers
-   [MC-277408](https://bugs.mojang.com/browse/MC-277408) There are no shadows on text used to display the description of report categories within the "Select Report Category" menu
-   [MC-277440](https://bugs.mojang.com/browse/MC-277440) There are no shadows on text used to display the speed at which a world is being uploaded within the realms menu
-   [MC-277441](https://bugs.mojang.com/browse/MC-277441) There are no shadows on text used to display the start date and time left of your realm subscription within the realms menu
-   [MC-277443](https://bugs.mojang.com/browse/MC-277443) There are no shadows on text displayed when connecting to realms
-   [MC-277444](https://bugs.mojang.com/browse/MC-277444) There are no shadows on text used to display the names of text boxes within the realms settings menu
-   [MC-277477](https://bugs.mojang.com/browse/MC-277477) There are no shadows on text used to display the description of advancements within the advancements menu
-   [MC-277478](https://bugs.mojang.com/browse/MC-277478) The "Layer Material" and "Height" text within the "Superflat Customization" menu is positioned too close to the header separator
-   [MC-277479](https://bugs.mojang.com/browse/MC-277479) There are no shadows on text used to display the names of game rules within the game rules menu
-   [MC-277480](https://bugs.mojang.com/browse/MC-277480) There are no shadows on placeholder text displayed within the "Please describe what happened" box within the reporting menu
-   [MC-277510](https://bugs.mojang.com/browse/MC-277510) When grass or mycelium grows under powder snow the grass is not snowy
-   [MC-277549](https://bugs.mojang.com/browse/MC-277549) Arrows summoned with custom motion don't render correctly
-   [MC-277557](https://bugs.mojang.com/browse/MC-277557) Creaking Heart has inconsistent and miscolored pixels
-   [MC-277617](https://bugs.mojang.com/browse/MC-277617) The base damage of the Power enchantment was reduced in 1.21
-   [MC-277651](https://bugs.mojang.com/browse/MC-277651) Arrows and tridents glitch when in an explosion or wind charge burst
-   [MC-277657](https://bugs.mojang.com/browse/MC-277657) Arrows are not correctly affected by rising bubble columns
-   [MC-277658](https://bugs.mojang.com/browse/MC-277658) Tridents glitch up and down in rising bubble columns
-   [MC-277682](https://bugs.mojang.com/browse/MC-277682) Arrows and tridents glitch after shooting/throwing them onto magma/soul sand blocks underwater
-   [MC-277742](https://bugs.mojang.com/browse/MC-277742) Creakings activate for a brief moment when switching from Creative to Spectator mode
-   [MC-277754](https://bugs.mojang.com/browse/MC-277754) Chunks on the corner of the rendering distance are not synchronized between client and server for the terrain
-   [MC-277776](https://bugs.mojang.com/browse/MC-277776) Baby cats and ocelots size is changed
-   [MC-277815](https://bugs.mojang.com/browse/MC-277815) Creakings on a team can still be observed and stopped by teammate players
-   [MC-277833](https://bugs.mojang.com/browse/MC-277833) Creakings can attack players in the same team as them
-   [MC-277871](https://bugs.mojang.com/browse/MC-277871) Creaking Hearts do not have a unique place sound

---

Hello!

In this week's snapshot we are adding a new experiment which will allow you to experience the Pale Garden, a new eerie biome filled with Pale Oak Trees and Hanging Moss. Beware of its sole inhabitant, the Creaking, and don't blink!

Happy Exploring!

## Experimental Features

The experimental feature with the Pale Garden biome can be enabled by turning the "Winter Drop" experiment on. You can do this in the Experiments screen while creating the world. These experiments have no effect unless enabled. You can find more information about Feature Toggles [here](https://www.minecraft.net/en-us/article/testing-new-minecraft-features/feature-toggles-java-edition).

We would love to hear your feedback on the new Pale Garden biome and the hostile mob the Creaking.

Creaking feedback thread: [https://aka.ms/mccreakingfeedback](https://aka.ms/mccreakingfeedback)

Pale garden feedback thread: [https://aka.ms/mcpalegardenfeedback](https://aka.ms/mcpalegardenfeedback)

### Winter Drop

-   Added Pale Garden Biome, Pale Oak tree, Pale Moss block, Pale Moss carpet, Pale Hanging Moss and Pale Oak woodset
-   Added Creaking mob, Creaking Spawn Egg and Creaking Heart block

#### Pale Garden

Pale Garden is a biome variation of Dark Forest. Unique features:

-   Pale Oaks generate here
-   Pale Moss blocks/carpet generate on the ground here
-   Hanging Pale Moss generate hanging from the foliage of Pale Oaks
-   Animal mobs do not spawn naturally in Pale Gardens
-   New biome specific ambient sounds
-   Creaking Heart block can generate in Pale Oaks

#### Pale Oak Tree

-   Pale Oak Leaves drop Pale Oak Saplings that can be planted in a 2x2 configuration to grow Pale Oak trees
-   Pale Oaks logs can be crafted into the Pale Oak woodset:
    -   Door
    -   Fence
    -   Fence Gate
    -   Plank
    -   Sign
    -   Hanging Sign
    -   Slab
    -   Stairs
    -   Trapdoor
    -   Wood
    -   Stripped Log
    -   Stripped Wood
    -   Button
    -   Pressure Plate
    -   Boat
    -   Boat with Chest

#### Pale Moss Block

Pale Moss block generates naturally in the Pale Garden biome

#### Pale Moss Carpet

Pale Moss block generates naturally in the Pale Garden biome. Unique features:

-   When placed, Pale Moss Carpet grows up to two blocks on the solid faces of any block that borders it
-   Pale Moss Carpet can be bonemealed to grow to full on all solid faces of any block that borders it

#### Pale Hanging Moss

Pale Hanging Moss generates naturally in the Pale Garden biome under the foliage of Pale Oaks

-   Pale Hanging Moss does not grow randomly, but can be bonemealed to grow down

#### Creaking mob

The Creaking mob spawns at night in the Pale Garden biome if there is a Creaking Heart block that has been generated in a Pale Oak tree. Gameplay features:

-   An activated Creaking will not move if a player is looking at it
-   Creaking is invulnerable to damage
-   Creaking has Fire Resistance
-   When hit, a particle trail is shown between the Creaking and the Creaking Heart block it is connected to
-   When the Creaking Heart block the Creaking is connected to is destroyed, the Creaking is removed
-   Is not affected by light levels but spawns and despawns based on day/night cycle
-   Creaking cannot enter Boats
-   Creaking spawned from a Creaking Heart can not go through portals
-   The Creaking Spawn Egg will spawn a Creaking mob that is not connected to a Creaking Heart
    -   Creaking summoned from a Creaking Spawn Egg or commands will persist through day and night, and, loads and saves
    -   Is Fire Resistant
    -   Takes damage from attacks and other damage sources
    -   Has one point of health (half a heart)
-   Creaking summoned from the Creaking Heart cannot be spawned with a spawn egg, nor can it be summoned with commands. It can only exist as a part of the Creaking Heart block
-   Player wearing a carved pumpkin on their head can look at Creaking without it freezing in place

#### Creaking Heart

A Creaking Heart is a “living” block generating in Pale Oak trees, covered on all sides by Pale Oak wood logs. It can spawn a Creaking mob when it is nighttime, and it is placed between two correctly aligned Pale Oak log blocks.

-   Is active during night and dormant during day
-   Sends a trail of particles towards the connected Creaking when the Creaking gets hit by the player
-   When Creaking Heart block is destroyed, the connected Creaking is removed

#### New system for Pale Garden ambient sounds

Ambient sounds in the Pale Garden biome do not come from the biome settings but are generated by blocks found in the biome

-   Pale Hanging Moss emits subtle atmospheric sounds when it is attached to Pale Oak Logs and Pale Oak Leaves
-   Creaking Heart block emits a set of eerie sounds when it is active during night and surrounded by Logs on all sides

## Changes

-   Bundle coloring recipes are now unlocked by Dye rather than uncolored Bundle item
-   Shulker Box and Bundle coloring recipes no longer work when trying to apply a Dye to an item of the same color
-   Added an accessibility option to make targeted block's outlines more visible

### Realms

-   The game mode for the last active world on a Realm will now be visible on the main Realms screen if applicable

## Technical Changes

-   The Data Pack version is now 56
-   Resource Pack version is now 40

## Data Pack Version 56

-   Added new particles: `block_crumble` and `trail`

### Commands

-   You cannot ride Leash Knots, Lighting Bolts and Fishing Bobbers anymore with `ride` command
-   Added the `rotate` command

#### `rotate` Command

New command to rotate entities.

Syntax:

    rotate <target> <rotation>
    rotate <target> facing <facingLocation>
    rotate <target> facing entity <facingTarget> [<facingAnchor>]
    

Parameters:

-   `target`: The entity to rotate
-   `rotation`: Two rotation values in degrees denoting horizontal and vertial rotation
    -   May use relative (`~`) coordinate notation to specify rotation relative to current context rotation
-   `facingLocation`: The coordinates of a location in the world for the rotated entity to face
-   `facingTarget`: An entity for the rotated entity to face
-   `facingAnchor`: Specifies the anchor of the `facingTarget` entity to rotate towards - `feet` or `eyes` (by default `feet`)

Note: parameters have the same meaning as in the `teleport` command.

### Enchantment Effects

-   Renamed effect type `damage_item` to `change_item_damage`, now also supports negative amounts

### Tags

#### Item Tags

-   `gaze_disguise_equipment`: Items that can be equipped to disguise the player looking for other mobs

### Particles

-   added `block_crumble` particle with the following options:
    -   `block_state` - the block state of the block to crumble
-   added `trail` particle with the following options:
    -   `color` - the color of the trail
    -   `target` - the position of the target for particle to reach

## Resource Pack Version 40

Increased to support the new experimental changes

## Fixed bugs in 24w40a

-   [MC-64265](https://bugs.mojang.com/browse/MC-64265) Teleporting passengers does not dismount them
-   [MC-108323](https://bugs.mojang.com/browse/MC-108323) Underlines in chat and /title command intersect each other, causing an ugly effect when fading
-   [MC-185144](https://bugs.mojang.com/browse/MC-185144) Item durability bar and all items render incorrectly in the villager trade UI
-   [MC-272946](https://bugs.mojang.com/browse/MC-272946) The block outline is nearly invisible for some blocks
-   [MC-273848](https://bugs.mojang.com/browse/MC-273848) Players can spawn underwater again in 1.21
-   [MC-275505](https://bugs.mojang.com/browse/MC-275505) The /tp command forces a mounted entity to dismount
-   [MC-275706](https://bugs.mojang.com/browse/MC-275706) Vanilla clients can't display items with components in recipe book anymore
-   [MC-275790](https://bugs.mojang.com/browse/MC-275790) Non-existent entries in certain tags that are not required causes validation error
-   [MC-276005](https://bugs.mojang.com/browse/MC-276005) The text of sneaking players' name tags is rendered completely invisible or barely visible when the "Text Background Opacity" accessibility option is set to high values
-   [MC-276330](https://bugs.mojang.com/browse/MC-276330) Bundles no longer play a sound when being emptied
-   [MC-276387](https://bugs.mojang.com/browse/MC-276387) Bundles can remain in the open state when using hotkeys to move them into different slots
-   [MC-276391](https://bugs.mojang.com/browse/MC-276391) The item durability and bundle fullness bars render incorrectly when held over recipe book elements
-   [MC-276440](https://bugs.mojang.com/browse/MC-276440) Items within bundle tooltips can be unselected by scrolling despite only one item being present
-   [MC-276596](https://bugs.mojang.com/browse/MC-276596) Damageable horse armor with "damage\_on\_hurt" enabled doesn't take damage when the horse wearing it is hurt
-   [MC-276640](https://bugs.mojang.com/browse/MC-276640) Riding an entity constantly teleported with relative coordinates produces jittery camera movement
-   [MC-276651](https://bugs.mojang.com/browse/MC-276651) damage\_item does not repair items when the value is negative
-   [MC-276669](https://bugs.mojang.com/browse/MC-276669) Pausing the game spams "Trying to save removed ender pearl, skipping" to log if ender pearls have landed
-   [MC-276806](https://bugs.mojang.com/browse/MC-276806) The text of name tags behind blocks or entities is rendered completely invisible or barely visible when the "Text Background Opacity" accessibility option is set to high values
-   [MC-276876](https://bugs.mojang.com/browse/MC-276876) Lava cauldrons deal less damage to boats and minecarts than before
-   [MC-276947](https://bugs.mojang.com/browse/MC-276947) Command server output in singleplayer is printed into chat
-   [MC-276948](https://bugs.mojang.com/browse/MC-276948) Split boat entity types have capitalized 'With'
-   [MC-276949](https://bugs.mojang.com/browse/MC-276949) Old boat entity type translation keys are not deprecated
-   [MC-276956](https://bugs.mojang.com/browse/MC-276956) Cannot access registries in container block entity "lock" field
-   [MC-276980](https://bugs.mojang.com/browse/MC-276980) Projectiles on the wall in the water will continue to produce bubble trails

---

Happy Wednesday miners! With this snapshot we're now bundling Bundles into the game for real - Bundles are no longer experimental!

Happy mining!

## New Features

-   Bundles are no longer experimental

## Changes

-   Updated slot highlight in the UI so Item texture has better visibility
    -   The previous textures have been added to Programmer Art resource pack
-   Equipping a Carved Pumpkin on your head now removes the player marker from other players' maps

## Technical Changes

-   The Data Pack version is now 55
-   Removed the `bundle` feature flag and built-in datapack

## Data Pack Version 55

-   `boat` and `chest_boat` entity types have been split into separate types, one per existing variant

### Boat split

-   Variants of boats and chest boats now have separate entity type instead of `Type` field
-   Removed entites:
    -   `minecraft:boat`
    -   `minecraft:chest_boat`
-   New entities:
    -   Boat without chest:
        -   `Type=oak` -> `minecraft:oak_boat`
        -   `Type=spruce` -> `minecraft:spruce_boat`
        -   `Type=birch` -> `minecraft:birch_boat`
        -   `Type=jungle` -> `minecraft:jungle_boat`
        -   `Type=acacia` -> `minecraft:acacia_boat`
        -   `Type=cherry` -> `minecraft:cherry_boat`
        -   `Type=dark_oak` -> `minecraft:dark_oak_boat`
        -   `Type=mangrove` -> `minecraft:mangrove_boat`
        -   `Type=bamboo` -> `minecraft:bamboo_raft`
    -   Boat with chest:
        -   `Type=oak` -> `minecraft:oak_chest_boat`
        -   `Type=spruce` -> `minecraft:spruce_chest_boat`
        -   `Type=birch` -> `minecraft:birch_chest_boat`
        -   `Type=jungle` -> `minecraft:jungle_chest_boat`
        -   `Type=acacia` -> `minecraft:acacia_chest_boat`
        -   `Type=cherry` -> `minecraft:cherry_chest_boat`
        -   `Type=dark_oak` -> `minecraft:dark_oak_chest_boat`
        -   `Type=mangrove` -> `minecraft:mangrove_chest_boat`
        -   `Type=bamboo` -> `minecraft:bamboo_chest_raft`

### Container Locks

-   The `Lock` field of containers has been renamed to `lock` and is now an item predicate
    -   Any items which match the predicate can open the container
-   The `lock` data component is now also an item predicate

### Tags

#### Item Tags

-   `map_invisibility_equipment`: Items that can be equipped to hide the player marker on other players maps

### Predicates

-   `minecraft:boat` entity sub-predicate has been removed, since boats no longer have variants

## Fixed bugs in 24w39a

-   [MC-219083](https://bugs.mojang.com/browse/MC-219083) Hunger client/server desync when natural regeneration is off in peaceful mode
-   [MC-275216](https://bugs.mojang.com/browse/MC-275216) Bowl is consumed when feeding a rabbit stew to a wolf
-   [MC-275544](https://bugs.mojang.com/browse/MC-275544) Drowned do not summon reinforcements anymore
-   [MC-276341](https://bugs.mojang.com/browse/MC-276341) The time how long you remain on fire no longer increases while being in the fire
-   [MC-276426](https://bugs.mojang.com/browse/MC-276426) Slimes or magma cubes spawned by splitting synchronize inherited status effects
-   [MC-276588](https://bugs.mojang.com/browse/MC-276588) Boat with chest inventory names no longer are suffixed with 'with Chest'
-   [MC-276598](https://bugs.mojang.com/browse/MC-276598) The slot\_highlight\_front texture renders incorrectly behind with missing recipe items
-   [MC-276610](https://bugs.mojang.com/browse/MC-276610) Ender pearl interaction with bubble columns is broken
-   [MC-276611](https://bugs.mojang.com/browse/MC-276611) Converted mobs do not keep CanBreakDoors tag
-   [MC-276615](https://bugs.mojang.com/browse/MC-276615) Cured Zombie Villagers keep CanPickUpLoot:0b
-   [MC-276638](https://bugs.mojang.com/browse/MC-276638) The server console or LAN game output spammed with "PLAYER moved too quickly!" after a player dies and respawns
-   [MC-276646](https://bugs.mojang.com/browse/MC-276646) Unique Horse Armor sound event is no longer used
-   [MC-276674](https://bugs.mojang.com/browse/MC-276674) Entities with emissive eyes aren't properly affected by fog of any kind
-   [MC-276707](https://bugs.mojang.com/browse/MC-276707) Underwater fireballs constantly play fire extinguishing sound
-   [MC-276724](https://bugs.mojang.com/browse/MC-276724) Arrows and potions resist upward flowing bubble columns
-   [MC-276727](https://bugs.mojang.com/browse/MC-276727) Projectiles are choppy while moving after hitting blocks or entities
-   [MC-276807](https://bugs.mojang.com/browse/MC-276807) All blocks and entities flicker at night or at lower light levels than 15
-   [MC-276817](https://bugs.mojang.com/browse/MC-276817) Teleport command offsets are applied incorrectly
-   [MC-276843](https://bugs.mojang.com/browse/MC-276843) Touching an end portal while in spectator mode teleports the player when they exit spectator mode
-   [MC-276919](https://bugs.mojang.com/browse/MC-276919) /tp teleports twice the relative distance if there's a block on the teleport point

---

Hey! This snapshot brings you dyable Bundles in the Bundles experiment and fully-featured world creation for Realms, including Hardcore mode.

Happy dyeing!

## Experimental Features

### Bundles

-   The Bundle can be dyed 16 different colors using Dyes

## Changes

-   Shulker Box coloring recipes are now shown in the recipe book
-   Updated the world creation screen for Realms
-   Enabled hardcore mode for Realms
-   Throwing items out of your inventory very quickly in creative mode is now throttled

### Realms

-   Now uses the normal, fully featured world creation screen
    -   Enables game rule customization
    -   Enables datapack customization

#### Hardcore mode

Hardcore mode is now available in Realms and is accessible by creating a new world or recreating an existing one

## Technical Changes

-   The Data Pack version is now 54
-   Resource Pack version is now 39
-   Temporary option for ignoring connection errors on client side (`strictErrorHandling`) has been removed

## Data Pack Versions 54

-   Introduced new Item tag `bundles` which includes all Bundle Items

### New Recipe Type

#### `crafting_transmute` recipe type

-   New crafting recipe type has been introduced: `crafting_transmute`
-   When matched, output will copy the input item stack, changing the item type but preserving all stack components
-   This completely replaces `crafting_special_shulkerboxcoloring`
-   Fields:
    -   `category` - crafting book category, one of `building`, `redstone`, `equipment`, `misc`
    -   `group` - optional string
    -   `input` - ingredient for item to copy
    -   `material` - additional ingredient to use
    -   `result` - item type to use for output

## Resource Pack Versions 39

-   Bundle models and textures have 16 colored variants
-   The models and UV mapping related to the Torch and blocks containing Redstone Torch have been updated
    -   The "inverted" model now uses 6 separate faces creating the same effect as a model with a negative size
    -   Updated the UV layout for the inverted model

## Fixed bugs in 24w38a

-   [MC-13246](https://bugs.mojang.com/browse/MC-13246) On certain enchanted items, the Anvil will display a "too expensive" message before attempting to repair, combine, or rename them
-   [MC-134626](https://bugs.mojang.com/browse/MC-134626) Squids/glow squids bounce up and down in bubble columns, teleporting high up in the air
-   [MC-164258](https://bugs.mojang.com/browse/MC-164258) Recipe book search field is not selected when clicking on the search icon
-   [MC-169660](https://bugs.mojang.com/browse/MC-169660) /teleport without can change the entity's rotation
-   [MC-204050](https://bugs.mojang.com/browse/MC-204050) Subtitle for shooting amethyst blocks is "Block breaking"
-   [MC-216016](https://bugs.mojang.com/browse/MC-216016) Launching fireworks into a crystal sound block will make the breaking noise
-   [MC-225060](https://bugs.mojang.com/browse/MC-225060) Burning entity sound repeats every tick
-   [MC-228070](https://bugs.mojang.com/browse/MC-228070) Name tags rendered in blocks have letters brighter depending on your angle
-   [MC-275347](https://bugs.mojang.com/browse/MC-275347) Minecart with Furnace does not travel correctly over curves
-   [MC-275413](https://bugs.mojang.com/browse/MC-275413) Squids and glow squids are not affected by the thrust of the bubble column
-   [MC-276292](https://bugs.mojang.com/browse/MC-276292) Shift-clicking the "Destroy Item" slot in the creative inventory deletes the items server-side but not client-side, causing a desync
-   [MC-276372](https://bugs.mojang.com/browse/MC-276372) Player drops 2 items from the hotbar at once when the Survival Inventory tab is not selected
-   [MC-276373](https://bugs.mojang.com/browse/MC-276373) Items dropped from the hotbar are sometimes lost when the Survival Inventory tab is not selected
-   [MC-276428](https://bugs.mojang.com/browse/MC-276428) Player cannot drink honey bottles when they're not hungry
-   [MC-276459](https://bugs.mojang.com/browse/MC-276459) Item display rotation wrapping does not interpolate cleanly
-   [MC-276539](https://bugs.mojang.com/browse/MC-276539) Name tags and text displays render brighter in dark areas when behind blocks or entities
-   [MC-276573](https://bugs.mojang.com/browse/MC-276573) Spruce boat item translation key misspells "minecaft"
-   [MC-276603](https://bugs.mojang.com/browse/MC-276603) No High Norwegian language option
-   [MC-276621](https://bugs.mojang.com/browse/MC-276621) Game crashes when opening inventory that renders entity with both Invisibility and Glowing effects
-   [MC-276640](https://bugs.mojang.com/browse/MC-276640) Riding an entity constantly teleported with relative coordinates produces jittery camera movement
-   [MC-276704](https://bugs.mojang.com/browse/MC-276704) Not using a selector in a tp command breaks rotation from a completely different tp command
-   [MC-276722](https://bugs.mojang.com/browse/MC-276722) Teleporting to your current position every tick sometimes doesn't let you move properly

---

Hi everyone! In this snapshot we have fixed the bug with Ender Pearls not teleporting the player to the point of impact. Ender Pearls will now also load chunks when thrown. Happy mining!

## New Features

## Changes

-   Thrown Ender Pearls now load and tick chunks
-   Added language support for High Norwegian

### Ender Pearl Chunk Loading

-   Ender Pearls now ensure that the chunk they are in or travel into is always loaded and ticking
-   They also load chunks when crossing to a new dimension, so that they can always continue to travel
-   This ensures that Ender Pearls can always land, and makes cross dimensional Ender Pearl travelling more predictable
-   Ender Pearls now unload when a player logs out, and reappear whenever that player logs back in, similar to how mounts currently behave

### Mob Conversion Details

In last week's snapshot, we fixed a bug related to which data gets transferred between mobs when converted from one type to another (ex: zombie to drowned). This week, we have reverted a few of those changes (health, attributes, and loot tables are no longer transferred).

-   Here is a full list of tags, data, and other properties which get transferred when a mob is converted (only relevant for mobs that can have these properties):
    
    -   `AbsorptionAmount`
    -   `active_effects`
    -   `Age`
    -   `AngerTime`
    -   `AngryAt`
    -   `ArmorDropChances`
    -   `ArmorItems`
    -   `Brain.memories.minecraft:angry_at.ttl`
    -   `Brain.memories.minecraft:angry_at.value`
    -   `CanBreakDoors`
    -   `CanPickUpLoot`
    -   `CustomNameVisible`
    -   `CustomName`
    -   `fall_distance`
    -   `FallFlying`
    -   `Fire`
    -   `ForcedAge`
    -   `HandDropChances`
    -   `HandItems`
    -   `HurtByTimestamp`
    -   `HurtTime`
    -   `Invulnerable`
    -   `IsBaby`
    -   `Leash`
    -   `LeftHanded`
    -   `Motion`
    -   `NoAI`
    -   `NoGravity`
    -   `OnGround`
    -   `Passengers`
    -   `PersistenceRequired`
    -   `PortalCooldown`
    -   `Position`
    -   `RootVehicle`
    -   `Rotation`
    -   `Silent`
    -   `SleepingX`
    -   `SleepingY`
    -   `SleepingZ`
    -   `Tags`
    -   `Team`
-   Mobs that split into several mobs rather than converting from one type into another do not transfer the following properties:
    
    -   `ArmorDropChances`
    -   `ArmorItems`
    -   `fall_distance`
    -   `FallFlying`
    -   `HandDropChances`
    -   `HandItems`
    -   `HurtByTimestamp`
    -   `HurtTime`
    -   `Leash`
    -   `Motion`
    -   `OnGround`
    -   `Passengers`
    -   `Position`
    -   `Rotation`
    -   `SleepingX`
    -   `SleepingY`
    -   `SleepingZ`
-   Some properties mentioned in MC-88967 are intentionally not transferred in any conversion:
    
    -   Attributes
    -   Gossips
    -   Health
    -   Loot tables
    -   VillagerData
    -   Xp

## Technical Changes

-   The Data Pack version is now 53
-   Resource Pack version is now 38

## Data Pack Version 53

### Loot tables

-   Tool value (used for functions like `match_tool`) is now available for some additional loot table types
    -   `archaeology` - used brush
    -   `vault` - inserted key (not available when displaying items)
    -   `shearing` - shears
-   Chickens laying eggs is now controlled by a loot table found at `gameplay/chicken_lay`
-   Armadillos randomly dropping scutes is now controlled by a loot table found at `gameplay/armadillo_shed`

#### Hero of the Village Gift Loot Tables

-   The loot given by Villagers is now controlled by two additional loot tables:
    -   `gameplay/hero_of_the_village/unemployed_gift` - used if the Villager is unemployed
    -   `gameplay/hero_of_the_village/baby_gift` - used if the Villager is a baby

### Tags

#### Item Tags

-   `duplicates_allays`: Items that can be used to duplicate Allays when dancing
-   `panda_eats_from_ground`: Items that a Panda will pick up from the ground and eat
-   `brewing_fuel`: Items that can be used as fuel in a Brewing Stand

### Item Component Changes

#### `minecraft:fire_resistant` -> `minecraft:damage_resistant`

-   Has a new field: `types`, hash-prefixed damage type tag
    -   Items with this component, when in entity form, will be resistant to the damage types included in the tag
    -   This component also affects whether the equipped item will be damaged when the wearer is hurt by a given damage type

#### `minecraft:item_name`

-   Name provided by this component always has the lowest priority
    -   That means it will be overriden by components like `minecraft:potion_contents`

#### `minecraft:potion_contents`

-   Added optional string field `custom_name`
    -   When present, it will be used to generate containing stack name
    -   For example, if value is `foo` and item is `minecraft:lingering_potion`, the name of item will be translation of `item.minecraft.lingering_potion.effect.foo`

#### `minecraft:equippable`

-   Added the following fields
    -   `swappable`: boolean (default: `true`), whether the item can be equipped into the relevant slot by right-clicking
    -   `damage_on_hurt`: boolean (default: `true`), whether this item will be damaged when the wearing entity is damaged

#### Added `minecraft:death_protection`

-   If present, this item will protect the holder from dying by restoring a single health point
-   Format: object with fields
    -   `death_effects`: An optional list of effects that are applied when the item protects the holder
        -   These effects are the same as those specified by the `on_consume_effects` field in the `consumable` component

### Predicates

#### `salmon` entity sub-predicate

-   Added `minecraft:salmon` entity sub-predicate
-   Fields:
    -   `variant`: one of `small`, `medium`, `large`

### Advancements

#### Triggers

##### `minecraft:killed_by_crossbow` -> `minecraft:killed_by_arrow`

-   Will now trigger whenever an Arrow kills an entity, not just when fired from a Crossbow
-   Has a new optional Item Predicate field, `fired_from_weapon`
    -   Can be used to match the item used to shoot the arrow

## Resource Pack Version 38

### GUI Sprites

-   The appearance of a highlighted slot may now be customized by replacing sprites:
    -   `container/slot_highlight_front`: The sprite to render in front of highlighted slots
    -   `container/slot_highlight_back`: The sprite to render behind highlighted slots
-   Likewise, the appearance of a highlighted item within the Bundle can be customized with the following sprites:
    -   `container/bundle/slot_highlight_front`
    -   `container/bundle/slot_highlight_back`

## Fixed bugs in

-   [MC-119369](https://bugs.mojang.com/browse/MC-119369) Boats crash/break and can kill their passengers when falling certain distances
-   [MC-206436](https://bugs.mojang.com/browse/MC-206436) Stonecutter ignores anything over 64 when shift-clicking
-   [MC-260537](https://bugs.mojang.com/browse/MC-260537) Tree growth can replace leaves that have the 'persistent' block state set to true
-   [MC-265399](https://bugs.mojang.com/browse/MC-265399) Players' heads are incorrectly positioned while exiting the swimming/crawling state when other players are on screen
-   [MC-275205](https://bugs.mojang.com/browse/MC-275205) The hand animation is delayed and doesn't play all the time
-   [MC-275300](https://bugs.mojang.com/browse/MC-275300) Mace smash attack damage does not work with mobs, even though particles and sounds happen
-   [MC-275302](https://bugs.mojang.com/browse/MC-275302) The animation speed of end crystals is no longer constant
-   [MC-275352](https://bugs.mojang.com/browse/MC-275352) Spectral arrow texture is not updated properly for Programmer Art
-   [MC-275406](https://bugs.mojang.com/browse/MC-275406) Grammatical error in "options.rotateWithMinecart.tooltip"
-   [MC-275468](https://bugs.mojang.com/browse/MC-275468) Gamerule minecartMaxSpeed can't be set through functions
-   [MC-275504](https://bugs.mojang.com/browse/MC-275504) Custom model data is not applied to open bundle
-   [MC-275538](https://bugs.mojang.com/browse/MC-275538) Breeze still do not attack when super close to them
-   [MC-275751](https://bugs.mojang.com/browse/MC-275751) Head snaps when coming out of crawling
-   [MC-275765](https://bugs.mojang.com/browse/MC-275765) Missing full stop in string gamerule.minecartMaxSpeed.description
-   [MC-275792](https://bugs.mojang.com/browse/MC-275792) Bottom faces of torches and soul torches are not culled against solid blocks
-   [MC-275833](https://bugs.mojang.com/browse/MC-275833) Hand animation plays higher than before
-   [MC-275883](https://bugs.mojang.com/browse/MC-275883) Riding a minecart cluster into a wall freezes the game
-   [MC-275909](https://bugs.mojang.com/browse/MC-275909) Wrong death message is displayed when being killed by a mob's smash attack
-   [MC-275964](https://bugs.mojang.com/browse/MC-275964) Bundles can remain in the open state when held by the mouse cursor via swapping items
-   [MC-275990](https://bugs.mojang.com/browse/MC-275990) Bundles can remain in the open state through the crafting table
-   [MC-276025](https://bugs.mojang.com/browse/MC-276025) Model overrides are not applied to items shown in an open bundle
-   [MC-276111](https://bugs.mojang.com/browse/MC-276111) Salmon spawned from a bucket are the wrong size for one tick
-   [MC-276127](https://bugs.mojang.com/browse/MC-276127) Fractions in bee nest tooltip are not padded with whitespace
-   [MC-276134](https://bugs.mojang.com/browse/MC-276134) Can't scroll in creative inventory while hovered over the bundle
-   [MC-276263](https://bugs.mojang.com/browse/MC-276263) explosion\_power nbt does not work for minecarts with tnt
-   [MC-276293](https://bugs.mojang.com/browse/MC-276293) Mobs no longer get damaged by sweet berry bushes
-   [MC-276295](https://bugs.mojang.com/browse/MC-276295) Zombies always kill villagers
-   [MC-276296](https://bugs.mojang.com/browse/MC-276296) Worn chainmail armor has a missing texture
-   [MC-276297](https://bugs.mojang.com/browse/MC-276297) Worn netherite armor appears as diamond armor
-   [MC-276299](https://bugs.mojang.com/browse/MC-276299) Horse armor doesn't render properly in horse inventory
-   [MC-276301](https://bugs.mojang.com/browse/MC-276301) Item tooltip padding is gone
-   [MC-276304](https://bugs.mojang.com/browse/MC-276304) Carved pumpkins and skulls can be equipped through right-clicking
-   [MC-276310](https://bugs.mojang.com/browse/MC-276310) Players' capes detach from their bodies when wearing non-chestplate items in the chest slot
-   [MC-276311](https://bugs.mojang.com/browse/MC-276311) Players' capes illogically point upward when flying with non-elytra items
-   [MC-276314](https://bugs.mojang.com/browse/MC-276314) Wind charges cause entities to be launched extremely high when directly hit by them
-   [MC-276315](https://bugs.mojang.com/browse/MC-276315) Teleport command runs at the entity's position and ignores location from execution context
-   [MC-276316](https://bugs.mojang.com/browse/MC-276316) Ender pearls no longer teleport entities to the point of impact
-   [MC-276317](https://bugs.mojang.com/browse/MC-276317) Projectiles visually update slowly when their motion is changed
-   [MC-276320](https://bugs.mojang.com/browse/MC-276320) Shields no longer block incoming projectiles
-   [MC-276321](https://bugs.mojang.com/browse/MC-276321) Elytra loses durability when taking damage
-   [MC-276322](https://bugs.mojang.com/browse/MC-276322) Boats don't drop as items when destroyed
-   [MC-276326](https://bugs.mojang.com/browse/MC-276326) "Air" item lost its name
-   [MC-276327](https://bugs.mojang.com/browse/MC-276327) The item\_name component no longer overrides potion names
-   [MC-276335](https://bugs.mojang.com/browse/MC-276335) Cured villagers have the wrong movement speed
-   [MC-276338](https://bugs.mojang.com/browse/MC-276338) Converted mob keeps the same loot table of the first mob
-   [MC-276339](https://bugs.mojang.com/browse/MC-276339) Witches converted from villagers move very fast
-   [MC-276344](https://bugs.mojang.com/browse/MC-276344) Hovered items in bundles do not reflect any tooltip\_style component
-   [MC-276364](https://bugs.mojang.com/browse/MC-276364) Non-armor items with equippable tag cannot be given to wolves
-   [MC-276365](https://bugs.mojang.com/browse/MC-276365) Armor sleeves do not follow arms when switching to and from items and on item use animations
-   [MC-276370](https://bugs.mojang.com/browse/MC-276370) Golden armor pieces have wrong max durabilities
-   [MC-276376](https://bugs.mojang.com/browse/MC-276376) /tp command cannot teleport to the correct facing angles
-   [MC-276378](https://bugs.mojang.com/browse/MC-276378) Converted witches lose their armor yet are still protected by it
-   [MC-276383](https://bugs.mojang.com/browse/MC-276383) Using Pick Block on boats crashes the game
-   [MC-276384](https://bugs.mojang.com/browse/MC-276384) Players' capes detach from their bodies when moving
-   [MC-276394](https://bugs.mojang.com/browse/MC-276394) Some specially rendered elements are no longer affected by fog of any type
-   [MC-276415](https://bugs.mojang.com/browse/MC-276415) Turtle helmet does not give water breathing effect when equipped on any slot other than the head
-   [MC-276429](https://bugs.mojang.com/browse/MC-276429) Projectiles move after hitting a block
-   [MC-276433](https://bugs.mojang.com/browse/MC-276433) set\_enchantments function removes enchantments component from books
-   [MC-276463](https://bugs.mojang.com/browse/MC-276463) Armor on piglins detach from their bodies while bartering
-   [MC-276476](https://bugs.mojang.com/browse/MC-276476) Crash when a boat is destroyed by a hazard
-   [MC-276480](https://bugs.mojang.com/browse/MC-276480) Projectile no longer moves correctly when it is deflected
-   [MC-276484](https://bugs.mojang.com/browse/MC-276484) Fireballs and wither skulls do too much damage
-   [MC-276495](https://bugs.mojang.com/browse/MC-276495) Creative player can go through nether portal without being teleported when throwing riptide trident
-   [MC-276501](https://bugs.mojang.com/browse/MC-276501) Returning tridents get stuck on blocks and spam sounds
-   [MC-276527](https://bugs.mojang.com/browse/MC-276527) Duplicate UUID error causes player to teleport to origin when riding on a pig after it is converted by lightning
-   [MC-276533](https://bugs.mojang.com/browse/MC-276533) Game crashes when three or more skeletons are about to release their arrows

---

Hi everyone! In the most exciting Minecraft-related news of the day, we have a new movi- I mean snapshot coming your way! This week we are adding support for custom equipment with Data Packs and Resource Packs. We have also tweaked the Bundle so that you can empty a group of items when it's used in the hotbar. And as usual, we have included a bunch of bug fixes!

Happy mining!

## Known Issues

-   Ender Pearls will not teleport you to the right location

## Experimental Features

### Bundles

-   When a Bundle is used in the hotbar, one group of items is emptied at a time instead of everything being emptied at once

## Changes

-   Squid Spawn Eggs now only spawn adult Squids
    -   There is a 5% chance of Squids spawned in groups in the wild to be a baby
-   When a mob converts from one type to another (ex: Piglin to Zombified Piglin), the health of the converted mob is set to the same percentage of max health as the original mob had before conversion

## Technical Changes

-   The Data Pack version is now 52
-   Resource Pack version is now 37

## Data Pack Version 52

### Tags

#### Block Tags

-   `bats_spawnable_on`: Blocks that bats can spawn on

#### Item Tags

-   Added new tags to control which items can be used to repair various armor sets:
    -   `repairs_leather_armor`
    -   `repairs_iron_armor`
    -   `repairs_chain_armor`
    -   `repairs_gold_armor`
    -   `repairs_diamond_armor`
    -   `repairs_netherite_armor`
    -   `repairs_turtle_helmet`
    -   `repairs_wolf_armor`
-   `piglin_safe_armor`: Items that, when worn by a player, will cause Piglins to not get angry

### Changed Item Components

#### `minecraft:item_name`

This component is now always present on every item

### New Item Components

#### `minecraft:item_model`

-   Controls item model
-   Present on every item
-   Format: namespaced id
    -   `namespace:id` will reference model `/assets/<namespace>/models/item/<id>`

#### `minecraft:equippable`

-   If present, this item can be equipped by players in the selected slot
-   When right-clicking with an item with this component, it will be swapped into the appropriate slot
-   Format: object with fields
    -   `slot`: one of `head`, `chest`, `legs`, `feet`, `body`, `mainhand`, or `offhand`
    -   `equip_sound` (optional): Sound event to play when the item is equipped
        -   If not specified, the default armor equip sound will be played
    -   `model` (optional): namespaced ID of the equipment model to use when equipped
        -   These model definitions are loaded from Resource Packs
        -   If not specified, will fall back to rendering as the item itself when in the head slot (or no rendering if not applicable)
    -   `allowed_entities` (optional): Entity ID, Entity Tag, or list of Entity IDs to limit which entities can equip this item
        -   If not specified, any entity (that can wear this kind of equipment) is allowed to equip this item
    -   `dispensable`: boolean (default: `true`), whether the item can be equipped by using a Dispenser
        -   If the item type has special dispenser behavior, this will have no effect
    -   e.g. `equippable={slot:'chest',equip_sound:'item.armor.equip_chain'}`

#### `minecraft:glider`

-   If present, this item will allow players to glide (as with Elytra) when equipped
-   Format: empty object
    -   e.g. `glider={}`

#### `minecraft:tooltip_style`

-   If present, this item can use custom sprites for its tooltip background and frame
-   Format: namespaced ID for a tooltip style
    -   A tooltip style of `namespace:path` will use sprites with IDs:
        -   `<namespace>:tooltip/<path>_background` and `<namespace>:tooltip/<path>_frame`
    -   e.g. `tooltip_style='minecraft:special_sword'`

### Predicates

-   Added a new field in the Player sub-predicate, `input`, that can be used to detect which movement keys the player is pressing
-   If specified the predicate matches with the corresponding keybind that the player is pressing; it supports detecting the following input:
    -   `forward` : boolean (optional)
    -   `backward` : boolean (optional)
    -   `left` : boolean (optional)
    -   `right` : boolean (optional)
    -   `jump` : boolean (optional)
    -   `sneak` : boolean (optional)
    -   `sprint` : boolean (optional)

## Resource Pack Version 37

-   Introduced equipment models
-   Textures for entity equipment have been moved and renamed
-   The tooltip background and frame may now be customized by replacing sprites:
    -   `tooltip/background`: The background of the tooltip
    -   `tooltip/frame`: The frame appearing around the tooltip
    -   Items with a custom `tooltip_style` component will use sprites with IDs:
        -   `<namespace>:tooltip/<path>_background` and `<namespace>:tooltip/<path>_frame`
-   The `nine_slice` GUI sprite scaling mode has a new optional boolean property: `stretch_inner`
    -   If `true`, the inner parts of the texture (i.e. not the corners) will be stretched instead of tiled
    -   If not specified, defaults to `false` as before

### Item Models

-   All item models can now use the `broken` property in model overrides that was previously limited to just Elytra
    -   This will have a value of 1 if the item has 1 durability left, or 0 otherwise

### Custom Equipment Models

The appearance of equipment when equipped by players or certain mobs can now be customized by defining 'equipment models' in the Resource Pack.

-   Equipment model definitions are loaded from `assets/<namespace>/models/equipment/<path>.json`
    -   These can then be referenced by the `equippable` component with a model id of `namespace:path`
-   The model definition is an object with fields: `wolf_body`, `horse_body`, `llama_body`, `humanoid`, `humanoid_leggings`, `wings`
    -   All fields are optional, and can be used to specify a list of layers for the given model layer type
    -   Each field contains list of layer objects:
        -   `texture`: namespaced texture location for this layer
            -   `namespace:path` will resolve to `assets/<namespace>/textures/entity/equipment/<layer_type>/<path>.png`
        -   `dyeable`: object with fields (optional), specifying how this layer behaves when dyed (in the `dyeable` item tag, and has `dyed_color` component)
            -   `color_when_undyed`: rgb color int (optional)
            -   If specified, this layer will be tinted by the color contained in the `dyed_color` component
                -   If the item is not dyeable or not dyed, it will be tinted based on the color specified by `color_when_undyed`
                -   If `color_when_undyed` is not specified and the item is not dyed, the layer will be hidden
        -   `use_player_texture`: boolean (default: `false`), true if this layer texture should be overridden by a texture given by the player
            -   Only used for `wings` layers, which will override with the player's custom Elytra texture

A model definition specifying both player and horse armor layers might look like:

    {
      "layers": {
        "horse_body": [
          { "texture": "minecraft:iron" }
        ],
        "humanoid": [
          { "texture": "minecraft:iron" }
        ],
        "humanoid_leggings": [
          { "texture": "minecraft:iron" }
        ]
      }
    }
    

### Trims

-   All equippable items with an equipment model defined support rendering trims, based on the `trim` component
-   Trim textures will be loaded from the appropriate folder in the `textures/trims/entity` directory
    -   For example, armor with `wolf_body` layers will fetch trims from `textures/trims/entity/wolf_body`

### Moved Textures

-   All equipment-related textures have been moved to subfolders of the `textures/entity/equipment` directory
    -   Player armor textures have been moved to `textures/entity/equipment/humanoid` and `textures/entity/equipment/humanoid_leggings`
        -   `<material>_layer_1` textures have been renamed to `<material>`, and moved into the `humanoid` subdirectory
        -   `<material>_layer_2` textures have been renamed to `<material>`, and moved into the `humanoid_leggings` subdirectory
        -   `leather_layer_1_overlay` and `leather_layer_2_overlay` textures have been renamed to `leather_overlay` in their respective subdirectories
    -   `wolf_armor` and `wolf_armor_overlay` textures have moved to `textures/entity/equipment/wolf_body/` and have been renamed to `armadillo_scute` and `armadillo_scute_overlay` respectively
    -   `turtle_layer_1` has been renamed to `turtle_scute`
    -   Llama decor textures have been moved to `textures/entity/equipment/llama_body`
    -   Horse armor textures have been moved to `textures/entity/equipment/horse_body`
    -   The Elytra texture has been moved to `textures/entity/equipment/wings/elytra`
-   Armor trim textures have also been moved to match the folder structure of the regular `equipment` textures
    -   Textures in `textures/trims/models/armor` have been divided between `textures/trims/entity/humanoid` and `textures/trims/entity/humanoid_leggings`
    -   For leggings textures, the `_leggings` suffix is dropped

## Fixed bugs in 24w36a

-   [MC-16829](https://bugs.mojang.com/browse/MC-16829) The horse armor model does not show the enchantment glint effect
-   [MC-38022](https://bugs.mojang.com/browse/MC-38022) Order of rendering translucent block faces fails to update with camera position
-   [MC-88967](https://bugs.mojang.com/browse/MC-88967) Most NBT tags are not kept when a mob converts to another mob
-   [MC-92875](https://bugs.mojang.com/browse/MC-92875) Collisionless blocks ignore entities with high velocity
-   [MC-135898](https://bugs.mojang.com/browse/MC-135898) Teams are not retained when a mob converts to another mob
-   [MC-196556](https://bugs.mojang.com/browse/MC-196556) When projectiles (such as arrows and tridents) move too fast, they can't be teleported by portals and end gateways
-   [MC-196964](https://bugs.mojang.com/browse/MC-196964) Fall damage is reset when an entity converts to another entity
-   [MC-230317](https://bugs.mojang.com/browse/MC-230317) Lead disappears when mooshroom cow is sheared
-   [MC-250924](https://bugs.mojang.com/browse/MC-250924) Goat horns are missing sounds
-   [MC-259936](https://bugs.mojang.com/browse/MC-259936) Equipping armor in hand via right-click equips entire stack
-   [MC-261666](https://bugs.mojang.com/browse/MC-261666) Armor given to Villagers is lost when they convert to Zombie Villagers
-   [MC-270842](https://bugs.mojang.com/browse/MC-270842) Scores are not kept when a mob converts to another mob
-   [MC-271826](https://bugs.mojang.com/browse/MC-271826) Armor default attribute modifier component can't be removed
-   [MC-275011](https://bugs.mojang.com/browse/MC-275011) Instant mine does not work when standing inside of cobwebs
-   [MC-275228](https://bugs.mojang.com/browse/MC-275228) You can duplicate items in your creative hotbar
-   [MC-275239](https://bugs.mojang.com/browse/MC-275239) Item duplication while a screen is opened (Creative Mode)
-   [MC-275298](https://bugs.mojang.com/browse/MC-275298) Blocks with special collision behavior have a larger detection range than previously
-   [MC-275299](https://bugs.mojang.com/browse/MC-275299) Crafting using Ctrl + Drop key crafts the incorrect amount of items
-   [MC-275344](https://bugs.mojang.com/browse/MC-275344) Sweet Berry Bushes deal damage inconsistently
-   [MC-275345](https://bugs.mojang.com/browse/MC-275345) Inventory bug that causes items to be constantly shuffled
-   [MC-275416](https://bugs.mojang.com/browse/MC-275416) Baby squid or baby glow squid produces ink particles that are too far away from itself
-   [MC-275418](https://bugs.mojang.com/browse/MC-275418) Feeding baby dolphins won't speed up their growth
-   [MC-275437](https://bugs.mojang.com/browse/MC-275437) Fast moving entities freeze the server which causes watchdog crash
-   [MC-275445](https://bugs.mojang.com/browse/MC-275445) Specifying the size of a target in post effect shaders fails
-   [MC-275450](https://bugs.mojang.com/browse/MC-275450) Player Motion data no longer updates while riding another entity
-   [MC-275455](https://bugs.mojang.com/browse/MC-275455) Player motion is no longer retained on relative teleportation
-   [MC-275462](https://bugs.mojang.com/browse/MC-275462) Bats can spawn in unusual places, such as in woodland mansions and beneath trees
-   [MC-275497](https://bugs.mojang.com/browse/MC-275497) The repairable data component does not exist in armor items by default
-   [MC-275537](https://bugs.mojang.com/browse/MC-275537) Sliding down honey blocks is slower than in previous versions
-   [MC-275622](https://bugs.mojang.com/browse/MC-275622) Minecarts with TNT are more volatile than in previous releases
-   [MC-275624](https://bugs.mojang.com/browse/MC-275624) Redstone wire with custom model unexpectedly appears green
-   [MC-275638](https://bugs.mojang.com/browse/MC-275638) It is still possible to go through portals without being teleported when going quickly enough by throwing riptide tridents
-   [MC-275642](https://bugs.mojang.com/browse/MC-275642) Baby dolphins do not spawn naturally
-   [MC-275655](https://bugs.mojang.com/browse/MC-275655) Entity rotation does not visually update when using the teleport command until the world is reloaded
-   [MC-275745](https://bugs.mojang.com/browse/MC-275745) A scoreboard objective with display mode below\_name renders right behind the player's name
-   [MC-275767](https://bugs.mojang.com/browse/MC-275767) Camera is shaky when riding an entity that is being constantly teleported
-   [MC-275770](https://bugs.mojang.com/browse/MC-275770) Guardian beam attacks stay yellow and do not shift colors anymore
-   [MC-276027](https://bugs.mojang.com/browse/MC-276027) Chestplates and Boots on Armor Stands render the helmet overlay texture
-   [MC-276030](https://bugs.mojang.com/browse/MC-276030) The blue highlighted text background for signs is gone
-   [MC-276064](https://bugs.mojang.com/browse/MC-276064) Tall grass generated from bone mealing a grass block will delete the 2nd block above it
-   [MC-276122](https://bugs.mojang.com/browse/MC-276122) Soul sand and magma block bubble columns don't move the player vertically in creative mode when not flying
-   [MC-276132](https://bugs.mojang.com/browse/MC-276132) Translucency sorting seems to be slightly broken
-   [MC-276179](https://bugs.mojang.com/browse/MC-276179) Zombie villagers don't raise their arms to attack again
-   [MC-276204](https://bugs.mojang.com/browse/MC-276204) Dolphins and axolotls keep trying to swim into the seabed

---

Hello! In this week's snapshot we have addressed some important bugs related to village raid spawns, Bundles and Redstone.

Happy mining!

## Experimental Features

### Bundles

-   Selecting items in a Bundle is now only done by scrolling

> **Developer's Note**: _In previous snapshots you could select items in a Bundle with the number keys. We removed this because it was conflicting with hotkeys used by expert players, and it was not as useful now that the Bundle can have more than 10 items visible._

## Changes

-   Raiders must find a place to spawn no more than 96 blocks vertically above or below the village center, or a raid will not start
-   It is now much less likely for raiders to not find a valid place to spawn when raiding

## Technical Changes

-   The Data Pack version is now 51

## Data Pack Version 51

-   Trial Spawner configurations in fields `normal_config` and `ominous_config` are now defined in registry `trial_spawner`
    -   This allows for easier customization of Trial Spawner configurations in data packs
    -   Inlined configuration data is still supported
-   Entities' rotation on the x axis is now clamped between -90 and 90
-   `loot` command now returns an error when trying to drop from block without loot table (like air)

### Loot tables

-   Special loot table `empty` has been removed and is no longer defined in vanilla data pack

#### Sheep loot tables

-   Sheep now always uses a single loot table `entities/sheep`
-   Wool drops are still defined in sub-tables in `entities/sheep/<color>`, but they are now just dispatched from the main table
    -   Note: mutton drop is now controlled by the main table, while sub-tables are responsible only for wool drop
-   Sheep shearing is now controlled by loot table found as `shearing/sheep`

#### Mooshroom shearing loot table

-   Mooshroom shearing is now controlled by loot table found as `shearing/mooshroom`

### New conditions

#### `sheep` entity sub-predicate

New entity sub-predicate for testing sheep wool Fields:

-   `sheared` - optional boolean
-   `color` - optional wool dye color

## Fixed bugs in 24w35a

-   [MC-124331](https://bugs.mojang.com/browse/MC-124331) Redstone lamps do not show on maps
-   [MC-129298](https://bugs.mojang.com/browse/MC-129298) Drowned don't chase you if they are in 1 block deep water
-   [MC-146805](https://bugs.mojang.com/browse/MC-146805) Trader Llamas don't attack zombies, drowned, husks, zombie villager and illagers
-   [MC-148982](https://bugs.mojang.com/browse/MC-148982) Map color for wheat is incorrect
-   [MC-167906](https://bugs.mojang.com/browse/MC-167906) Beehive items at full honey level do not appear with honey in inventory/as item/in hand
-   [MC-168329](https://bugs.mojang.com/browse/MC-168329) Bees do not leave their hives in the Nether/End in some cases
-   [MC-168546](https://bugs.mojang.com/browse/MC-168546) Bee nest / hive items have no lore
-   [MC-203382](https://bugs.mojang.com/browse/MC-203382) The "Bee Our Guest" advancement description only states a beehive is required to unlock
-   [MC-270742](https://bugs.mojang.com/browse/MC-270742) Displays don't rotate properly between 179 and 180
-   [MC-272345](https://bugs.mojang.com/browse/MC-272345) Some trial spawners don't have an extra breeze out at once when ominous
-   [MC-273601](https://bugs.mojang.com/browse/MC-273601) The channeling enchantment no longer functions on tridents without an owner
-   [MC-273745](https://bugs.mojang.com/browse/MC-273745) Soul speed momentum resets when jumping on soul sand
-   [MC-275204](https://bugs.mojang.com/browse/MC-275204) Coast Armor Trim has generic "Smithing Template" name
-   [MC-275208](https://bugs.mojang.com/browse/MC-275208) You cannot move the bundle into or around the inventory using hotkeys
-   [MC-275220](https://bugs.mojang.com/browse/MC-275220) Picking up a Salmon in a Bucket doesn't keep its size
-   [MC-275222](https://bugs.mojang.com/browse/MC-275222) Salmons always have same hitbox regardless of their size
-   [MC-275256](https://bugs.mojang.com/browse/MC-275256) Snow golem shoots to the sky/floor instead of at mobs
-   [MC-275275](https://bugs.mojang.com/browse/MC-275275) Footsteps on Monster Spawners create missing subtitle
-   [MC-275279](https://bugs.mojang.com/browse/MC-275279) Raiders do not spawn on small islands even though there are close enough places around the village
-   [MC-275322](https://bugs.mojang.com/browse/MC-275322) "Subspace Bubble" is granted when exiting and entering some Nether Portals
-   [MC-275353](https://bugs.mojang.com/browse/MC-275353) Item Frame/Glow Item Frame "Fixed" tag behaving strangely since 24w33a
-   [MC-275358](https://bugs.mojang.com/browse/MC-275358) Renamed bundle's contents are not centered
-   [MC-275409](https://bugs.mojang.com/browse/MC-275409) Stuffing too many items into a bundle through commands will cause the capacity bar to overflow
-   [MC-275410](https://bugs.mojang.com/browse/MC-275410) Flying in Creative Mode no longer resists the thrust of the bubble column
-   [MC-275417](https://bugs.mojang.com/browse/MC-275417) Creepers can destroy vehicles even if mobGriefing is set to false
-   [MC-275521](https://bugs.mojang.com/browse/MC-275521) Tall seagrass can now generate when bone mealing one-high water
-   [MC-275523](https://bugs.mojang.com/browse/MC-275523) Reduced shield glint applies to the shield's item appearance
-   [MC-275586](https://bugs.mojang.com/browse/MC-275586) Renamed items highlighted in the bundle are not in italics
-   [MC-275612](https://bugs.mojang.com/browse/MC-275612) Items with rarity values highlighted in bundles do not display their rarity colors
-   [MC-275752](https://bugs.mojang.com/browse/MC-275752) Villagers indefinitely stand around items when their "CanPickUpLoot" tag is set to "0b"
-   [MC-275754](https://bugs.mojang.com/browse/MC-275754) Random stack trace sometimes appears
-   [MC-275755](https://bugs.mojang.com/browse/MC-275755) Attempting to swap armor by right clicking deletes it
-   [MC-275757](https://bugs.mojang.com/browse/MC-275757) Using a bucket deletes the bucket in most cases
-   [MC-275774](https://bugs.mojang.com/browse/MC-275774) Observers no longer detect redstone dust powering/unpowering
-   [MC-275778](https://bugs.mojang.com/browse/MC-275778) Bundle fullness bar texture and color are hardcoded
-   [MC-275800](https://bugs.mojang.com/browse/MC-275800) Translucency sorting is broken
-   [MC-275801](https://bugs.mojang.com/browse/MC-275801) Use cooldown triggers without item consumption
-   [MC-275828](https://bugs.mojang.com/browse/MC-275828) Game crashes when there is an invalid shader path
-   [MC-275837](https://bugs.mojang.com/browse/MC-275837) The use\_cooldown component uses field cooldownGroup instead of cooldown\_group
-   [MC-275838](https://bugs.mojang.com/browse/MC-275838) Drowned holds trident upside down
-   [MC-275843](https://bugs.mojang.com/browse/MC-275843) Using an empty map (single item in stack) doesn't create a filled map in survival mode
-   [MC-275851](https://bugs.mojang.com/browse/MC-275851) diameter in teleport\_randomly consume effect is ignored
-   [MC-275959](https://bugs.mojang.com/browse/MC-275959) Drowned no longer raise their arms to attack
-   [MC-276053](https://bugs.mojang.com/browse/MC-276053) Glass bottles are deleted when used on a water source block

---

Hello! Here is the next snapshot for 1.21.2! It contains some much-requested tweaks to experimental features, as well as some technical changes and optimizations.

Happy mining!

## Experimental Features

The following changes only apply when their respective Experiment is turned on, either by activating the corresponding experimental data pack or by turning it on in the Experiments screen while creating the world.

These experiments have no effect unless enabled. You can find more information about Feature Toggles [here](https://www.minecraft.net/en-us/article/testing-new-minecraft-features/feature-toggles-java-edition).

### Bundles

-   The Bundle tooltip now fits 3 rows and can always show at least 8 item types

> **Developer's Note**: _Items fill up a Bundle in rows of four, and when a row is full it is pushed down by the row above. This means there can be empty spaces in the top row._
> 
> _In the previous 2020 Bundle experiment, items filled in from the top without leaving any gaps. We changed this behavior because it meant that items moved left and right in the Bundle as new items were added. This made it more difficult for some players to keep track of the order of items and some even reported that the items were moving randomly!_
> 
> _With only two rows in the tooltip, the behavior of pushing a full row of items further down the Bundle removed half of the visible items, which was too much. We're adding a third row to make the design work better and allow players to see more of the items in their Bundles as they fill up._

### Minecart Improvements

Please note that the experimental features behind this toggle are not aimed at any future release at this time. Instead, this is a place for us to try out changes and gather feedback.

We are excited to hear what you think about these changes: please share your feedback on this [feedback page](https://aka.ms/fbcarts).

-   Minecarts no longer forcefully snap to the center of a block when landing on a rail
    -   Minecarts snap to corners along the diagonal, and snaps after being pushed by a Piston
    -   This allows for Piston bolts and similar contraptions
-   Dispensers are allowed to stack Minecarts again
-   Minecarts now more easily come to rest at opposing slopes
-   Minecarts no longer tilt during a short fall, or when they are falling straight down
-   Minecarts are now placed (or dispensed) with the correct rotation straight away when put on rails
    -   They are also placed with the correct rotation onto slopes
-   Minecarts no longer phase through blocks on slopes when going up or down, they collide instead

### Redstone Experiments

Please note that the experimental features behind this toggle are not aimed at any future release at this time.  
Instead, this is a place for us to try out changes and gather feedback.

We are excited to hear what you think about these changes: please share your feedback on the [feedpack page](https://aka.ms/fbredstone).

> **Developer's Note**: _The removal of excessive neighbor updates around wire affects the behavior of Quasi-Connectivity based contraptions. We plan to address these issues at a later point._

-   Redstone wire updates now have a left-first preference
    -   That means if there is a fork in a wire and the distance on both sides is the same, the left side will be updated first
    -   This removes most of the random behavior
    -   The remaining edge cases which are still random are situations where wire gets powered from above or below without enough context

## Changes

The following changes apply to the game regardless of which experiments are turned on.

-   Projectiles such as Arrows, Tridents and Fishing Bobbers now bounce on the world border if hit
-   Framerate has been improved when using higher render distances
    -   Significantly reduced the performance impact when turning the camera
-   The recipe book now repeats the last selected recipe when a "selected" key is pressed (space or either enter key)
-   Items which convert to another item after consumption will no longer do so in Creative
    -   For example, a Honey Bottle will no longer add a Glass Bottle to your inventory when consumed in Creative

## Technical Changes

-   The Data Pack version is now 50
-   Resource Pack version is now 36

## Data Pack Version 50

### Changed Item Components

#### `minecraft:food`

-   The food component has been changed to become a data container which only holds the food stats applied when the item is consumed
    -   This component no longer gives it the ability to be consumed, and can be done instead with the new `consumable` component
-   Format: object with fields
    -   `nutrition` The amount of nutrition applied when consumed
    -   `saturation` The amount of saturation applied when consumed
    -   `can_always_eat` Whether it can be consumed even when the user is not hungry

### New Item Components

#### `minecraft:use_remainder`

-   If present, will replace the item with a remainder item if its stack count has decreased after use
    -   If the item has a stack count higher than 0 after use, the remainder item will be added to the inventory instead
    -   If the inventory is full when trying to add a remainder item to it, it will be dropped on the ground instead
-   Format: single value as an item stack
    -   e.g. `use_remainder={id:'minecraft:stick', count:1}`

#### `minecraft:use_cooldown`

-   If present, this item will apply a cooldown to all items of the same type when it has been used
-   Format: object with fields
    -   `seconds`: Positive float representing the amount of seconds the cooldown will take place for
    -   `cooldown_group`: Optional namespaced id representing the cooldown group
        -   If present, this item will be part of a cooldown group and no longer share cooldowns with its base item type
        -   Instead, cooldowns applied to this item will only be shared with any other items that are part of the same cooldown group
    -   e.g. `use_cooldown={seconds:1.5, cooldown_group:"minecraft:custom_weapon"}`

#### `minecraft:consumable`

-   If present, this item can be consumed on use
    -   If `food`, `potion_contents`, `ominous_bottle_amplifier` or `suspicious_stew_contents` are also present on this item, consuming this will apply the stats and effects of those components
-   Format: object with fields
    -   `consume_seconds`: Non-negative float, the amount of seconds it takes for a player to consume the item
        -   Default value: 1.6
    -   `animation`: The animation used during consumption of the item
        -   Default value: `eat`
        -   Accepted values:
            -   `none`
            -   `eat`
            -   `drink`
            -   `block`
            -   `bow`
            -   `spear`
            -   `crossbow`
            -   `spyglass`
            -   `toot_horn`
            -   `brush`
    -   `sound`: Sound event, the sound used during and on completion of the item's consumption
        -   Default value: `entity.generic.eat`
    -   `has_consume_particles`: Boolean, whether consumption particles are emitted while consuming this item
        -   Default value: `true`
    -   `on_consume_effects`: An optional list of side effects which take place as a result of consuming this item
        -   There are currently 5 valid consume effects
        -   `minecraft:apply_effects`
            -   `effects`: A list of status effect instances applied once consumed
            -   `probability`: Float, the probability the above effects will be applied once consumed
                -   Default value: 1.0
        -   `minecraft:remove_effects`
            -   `effects`: A set of status effects removed once consumed, as either a tag or list of ids
        -   `minecraft:clear_all_effects`
            -   Clears all status effects of the consumer
        -   `minecraft:teleport_randomly`
            -   `diameter`: Positive float, the diameter that the consumer will be teleported within
                -   Default value: 16.0
        -   `minecraft:play_sound`
            -   `sound`: Sound event, played once consumed
    -   e.g. `consumable={consume_seconds:3.0, animation:'eat', sound:'entity.generic.eat', has_consume_particles:true, on_consume_effects:[{type:'minecraft:clear_all_effects'}]}`

## Resource Pack Versions 36

### Shaders & Post-process Effects

> **Developer's Note**: _Although it is possible in Resource Packs, overriding Core Shaders is considered as unsupported and not an intended Resource Pack feature. These shaders exist as part of the internal implementation of the game, and as such, may change at any time as the game's internals evolve. We understand that overriding Core Shaders is used for very cool Resource Pack features, many of which lack supported alternatives. We would like to provide better, supported alternatives in the future._

-   Shader program configurations can now specify preprocessor define directives to apply to their linked shaders
    -   Many shader implementations have been merged by making use of this
-   The format of core shader and post-processing shader configurations have been consolidated
-   The `rendertype_entity_glint_direct` shader has been removed (replaced by `rendertype_entity_glint`)
-   The `rendertype_entity_translucent_cull` shader has been removed (replaced by `rendertype_item_entity_translucent_cull`)

#### Shader Program Definitions

-   Program definitions for post-processing effects (`assets/<namespace>/shaders/program/<name>.json`) have been made consistent with core shader definitions (`assets/<namespace>/shaders/core/<name>.json`)
    -   The `blend` field has been removed, as it had no use
    -   The `attributes` field has been removed, instead the `Position` attribute will always be bound
    -   The provided uniforms have been consolidated with those provided to core shaders
        -   `Time` has been renamed to `GameTime`
-   The `vertex` and `fragment` shader references in program definitions (including post-processing effects) are now namespaced shader ids
    -   A vertex shader `<namespace>:<path>` will resolve to `assets/<namespace>/shaders/<path>.vsh`
    -   A fragment shader `<namespace>:<path>` will resolve to `assets/<namespace>/shaders/<path>.fsh`
-   Shader source files are no longer required to be in the `shaders/core` subdirectory, this only exists for organization
-   Added `defines` field to program definitions (object with fields)
    -   Allows GLSL define directives to be injected into the shader source, which can be referenced in the shader
    -   `values` (map of string to string)
        -   Will be injected as `#define <key> <value>` at the top of the file
    -   `flags` (list of strings)
        -   Will be injected as `#define <key>` at the top of the file

#### Shader Imports

-   The `#moj_import` directive now supports namespaced includes with absolute paths
    -   For example, `#moj_import <minecraft:fog.glsl>` will import `assets/minecraft/shaders/include/fog.glsl`
-   Relative imports are not namespaced and behave as before

#### Post-process Effect Definitions

-   Post-processing effect configuration has been moved out of the `assets/<namespace>/shaders/post` directory to just `assets/<namespace>/post_effect`
-   Vertex and fragment shaders used by these effects have been moved from `assets/<namespace>/shaders/program` to `assets/<namespace>/shaders/post`
-   `name` has been renamed to `program`, and is now a namespaced id of a shader program configuration
    -   `<namespace>:<path>` will resolve to `assets/<namespace>/shaders/<path>.json`

## Fixed bugs in 24w34a

-   [MC-73178](https://bugs.mojang.com/browse/MC-73178) Villagers' "CanPickUpLoot" tag cannot be set to zero
-   [MC-144327](https://bugs.mojang.com/browse/MC-144327) The bottom face texture of a blaze's rods is the same as their top face texture
-   [MC-191431](https://bugs.mojang.com/browse/MC-191431) Player spectator head is invisible / does not render in the inventory after switching to "Fabulous!"
-   [MC-269376](https://bugs.mojang.com/browse/MC-269376) Breeze fires wind charge from center of hitbox
-   [MC-269715](https://bugs.mojang.com/browse/MC-269715) Food won't be eaten when the component food.eat\_seconds is less than 0.05
-   [MC-272643](https://bugs.mojang.com/browse/MC-272643) Items containing using\_converts\_to cannot be stacked with the original items after restarting the world.
-   [MC-273629](https://bugs.mojang.com/browse/MC-273629) Adding effects with an effects\_changed advancement causes a packet error (ConcurrentModificationException) if it was triggered by Milk
-   [MC-275203](https://bugs.mojang.com/browse/MC-275203) Minecarts always spawn facing east/west and move upward slightly when being placed on rails
-   [MC-275209](https://bugs.mojang.com/browse/MC-275209) It's impossible to put water in a cauldron underwater
-   [MC-275210](https://bugs.mojang.com/browse/MC-275210) Minecarts can phase through blocks when travelling diagonally upwards
-   [MC-275211](https://bugs.mojang.com/browse/MC-275211) The enchantment glint isn't visible on dropped items
-   [MC-275213](https://bugs.mojang.com/browse/MC-275213) Hand animation still plays when trying to put lava or powder snow in an underwater cauldron
-   [MC-275218](https://bugs.mojang.com/browse/MC-275218) "Minecart rolls" sound does not play when on tracks after de-railing then re-railing
-   [MC-275219](https://bugs.mojang.com/browse/MC-275219) Hand animation still plays in creative when trying to use minecarts inside each other on the same rail
-   [MC-275221](https://bugs.mojang.com/browse/MC-275221) Baby polar bear model is messed up in 24w33a
-   [MC-275224](https://bugs.mojang.com/browse/MC-275224) Minecart items desync when using them on a rail with a minecart above it
-   [MC-275226](https://bugs.mojang.com/browse/MC-275226) Enchantment glint is not visible on items held by player and mobs in third person
-   [MC-275229](https://bugs.mojang.com/browse/MC-275229) Minecarts behave strangely on bubble columns
-   [MC-275230](https://bugs.mojang.com/browse/MC-275230) The game crashes when opening the inventory while in spectator mode
-   [MC-275232](https://bugs.mojang.com/browse/MC-275232) The mining fatigue animation appears too close
-   [MC-275237](https://bugs.mojang.com/browse/MC-275237) Cannot rename written book in an anvil
-   [MC-275241](https://bugs.mojang.com/browse/MC-275241) Minecarts continue to produce sound for a short while after being stopped
-   [MC-275246](https://bugs.mojang.com/browse/MC-275246) Crash after attempting to move item from off-hand in Creative inventory
-   [MC-275248](https://bugs.mojang.com/browse/MC-275248) Torches no longer have bottom faces
-   [MC-275249](https://bugs.mojang.com/browse/MC-275249) "FOV Effects" slider incorrectly modifying zoom values on the spyglass
-   [MC-275252](https://bugs.mojang.com/browse/MC-275252) Player head angle when crawling is now strange
-   [MC-275270](https://bugs.mojang.com/browse/MC-275270) Minecart not oriented correctly when placed on a sloped unpowered powered rail
-   [MC-275271](https://bugs.mojang.com/browse/MC-275271) Crash after attempting to move item to hotbar slot in Creative inventory
-   [MC-275273](https://bugs.mojang.com/browse/MC-275273) Baby mooshroom uses wrong scale
-   [MC-275277](https://bugs.mojang.com/browse/MC-275277) Trial chambers' encounter\_4 trap often does not hit the player
-   [MC-275289](https://bugs.mojang.com/browse/MC-275289) There are empty chests in some chambers even after 24w33a
-   [MC-275293](https://bugs.mojang.com/browse/MC-275293) Internal exception when picking blocks not in hotbar but in inventory in Survival mode
-   [MC-275296](https://bugs.mojang.com/browse/MC-275296) Emissive textures are not emissive in the player's hand
-   [MC-275297](https://bugs.mojang.com/browse/MC-275297) Failing selectors and fake players in "score" selector result in an unexpected error
-   [MC-275307](https://bugs.mojang.com/browse/MC-275307) Hand doesn't show up when switching from Spectator mode
-   [MC-275310](https://bugs.mojang.com/browse/MC-275310) Cannot enchant armor in enchanting table
-   [MC-275319](https://bugs.mojang.com/browse/MC-275319) End crystals in 24w33a appear to be slightly smaller than in previous versions
-   [MC-275328](https://bugs.mojang.com/browse/MC-275328) Enchantment glint is not visible on items in item frames
-   [MC-275329](https://bugs.mojang.com/browse/MC-275329) As of 24w33a zombie villagers no longer raise their arms to attack
-   [MC-275332](https://bugs.mojang.com/browse/MC-275332) The rotation of a wall/ceiling lever and buttons does not affect the update order of wire in Redstone Experiment
-   [MC-275343](https://bugs.mojang.com/browse/MC-275343) Projectiles stuck in the world border can float in the air if the border size is changed
-   [MC-275361](https://bugs.mojang.com/browse/MC-275361) Baby zombie variant arms disconnect from their body when attacking
-   [MC-275397](https://bugs.mojang.com/browse/MC-275397) Redstone dust doesn't update properly
-   [MC-275436](https://bugs.mojang.com/browse/MC-275436) Cannot enchant books in enchanting table
-   [MC-275467](https://bugs.mojang.com/browse/MC-275467) Minecarts can launch you hundreds of thousands of blocks upwards if you derail inside cobwebs or powdered snow
-   [MC-275473](https://bugs.mojang.com/browse/MC-275473) Slim model's arms are now lower than the torso by 0.5 pixels
-   [MC-275479](https://bugs.mojang.com/browse/MC-275479) Dispensers cannot place minecarts onto rails if there is a minecart one block away
-   [MC-275482](https://bugs.mojang.com/browse/MC-275482) Minecarts do not pick up mobs like they used to
-   [MC-275486](https://bugs.mojang.com/browse/MC-275486) Enchantable data component doesn't work with items that only have enchantments through a data pack
-   [MC-275498](https://bugs.mojang.com/browse/MC-275498) Clocks, compasses and recovery compasses don't function in item frames
-   [MC-275554](https://bugs.mojang.com/browse/MC-275554) Minecarts between two downward slopes will shake violently and never settle
-   [MC-275566](https://bugs.mojang.com/browse/MC-275566) Game crash when trying to open various GUIs with Fabulous graphics
-   [MC-275569](https://bugs.mojang.com/browse/MC-275569) Outer layer of the skin shows when disabled until you go into third person

---

We know you have been waiting long for the next update, and we are finally kicking off the new snapshot cycle with Snapshot 24w33a!

Over the summer someone changed our password and wouldn't let us know what it was until we finished 200 bug fixes (the password was cubepork14 by the way). This update also features a Bundle of new Experiments that we are eager for you to try out!

Enable the new experimental features in the Experiments menu when creating a new world and let us know what you think!

Read below for a full list of the changes included.

Your thoughts on the game continue to shape new updates so please upvote and report any new bugs at [bugs.mojang.com](https://bugs.mojang.com/) and leave us your feedback at [feedback.minecraft.net](https://feedback.minecraft.net).

## Experimental Features

The following changes only apply when their respective Experiment is turned on, either by activating the corresponding experimental data pack or by turning it on in the Experiments screen while creating the world.

These experiments have no effect unless enabled. You can find more information about Feature Toggles [here](https://www.minecraft.net/en-us/article/testing-new-minecraft-features/feature-toggles-java-edition).

### Bundles

Bundles are back The Bundle was added to Java Edition as an experiment in 2020. We are now working on Bundles again! To test Bundles you must create a new world with the Bundles experiment turned on. (When creating a new world click ‘More’, then ‘Experiments’, then click the button next to the word ‘Bundles’.) A Bundle is an item that lets you stack different blocks or items together in the same inventory slot. Different items normally don’t stack together, so you can end up wasting space by only having a few items in each slot. A Bundle lets you pack those items together so there is no wasted space.

![Screenshots of an inventory with no empty slots and then the same inventory with 8 empty slots because some incomplete stacks have moved inside a Bundle.](https://launchercontent.mojang.com/v2/images/bundlebeforeafterimage.jpg)

The Bundle has a tooltip that shows some of the items inside. If the Bundle has up to 8 item types, you will see all of them and can pull any item out immediately. If there are more than 8 item types then some rows of items will be hidden. You may want to craft a new Bundle to keep everything easy to reach. A Bundle can be crafted with 1 String and 1 Leather. Please try out this all-new version of the Bundle and let us know what you think!

-   A Bundle only fits one stack (usually 64 items) but it can be a mixture of many different item types
-   You can insert items into a Bundle directly in the inventory
-   Bundles have a tooltip that shows the items inside
    -   If a Bundle has less than 8 item types inside, the tooltip will show all of them
    -   Otherwise the tooltip will show the top two rows of items and the others will be hidden below
-   You can select any of the visible items to pull out of the Bundle
    -   Right-click to take the first item
    -   Use the number keys or scroll wheel to select a different item, then right-click to take it

> **Developer's Note:** In the original Bundle experiment you could only pick the top item. We got a lot of feedback that players wanted more flexibility when taking items out. To address this we put a submenu inside the Bundle, which has never been done before in Minecraft!

-   When selecting an item to remove, the Bundle icon shows that item poking out of the Bundle
-   When holding a Bundle in hand, you can empty it onto the ground by right-clicking
-   The Bundle is crafted with one String above one Leather

> **Developer's Note:** The original prototype for Bundles was much more expensive to craft and used Rabbit Hide which is only available in certain biomes, so the player had to explore to get their first Bundle. In this version we’ve made it cheaper and something that you can craft at home in almost any biome. We want it to be easy to get Bundles in a new world so you can use it in your early adventures.

-   The controls have changed from the original prototype:
    -   Use left-click to put an item into a Bundle
    -   Use right-click to remove the top item type from a Bundle
    -   When the Bundle tooltip is visible, use number keys or the mouse wheel to select a different item type then use right-click to remove it

### Redstone Experiments

Added a new Experiment containing various Redstone-related changes. This can be enabled by selecting "Redstone Experiments" in the Experiments menu when creating a world.

Please note that the experimental features behind this toggle are not aimed at any future release at this time. Instead, this is a place for us to try out changes and gather feedback.  
We are excited to hear what you think about these changes: please share your feedback on the [feedpack page](https://aka.ms/fbredstone).

#### Redstone Wire

-   The performance impact of Redstone wire (connected blocks of Redstone Dust) has been improved
-   Redstone wire now only triggers block updates on blocks that may receive power from the wire
-   Before a line of wire causes block updates, the new signal strength of all connected wires is set
-   The update order around Redstone wire has been changed
    -   The aim is to make wire work the same, independent of position and orientation
    -   When possible the order is deterministic based on the context the updates are caused in
    -   When there is not enough context to fully determine the order, the rest is picked at random

> **Developer's note:** We know that randomness in Redstone is usually unwanted.  
> We've used it here because we've made things deterministic whenever it makes sense, and sometimes it just doesn't make sense - and we don't want some hidden state (like location-based hashes!) determining the order and making machines work differently at different coordinates or in different orientations.  
> The screenshot below shows an example of a 'random' vs 'non-random' wire - we think it's actually pretty logical, and is within the players control to build machines that behave deterministically.  
> But we are looking forward to hearing what you think after trying it out!

![The image shows three Redstone machines. In each of them a lever is powering a Redstone wire leading to two pistons that are trying to push into the same block. In the machine on the left, the wire to the left piston is shorter and the left piston is the one that got to extend. In the machine on the right, the wire to the right piston is shorter and the right piston is the one that got to extend. In the machine in the center, the wire is the same length to both pistons and which piston extended was picked by random choice.](https://launchercontent.mojang.com/v2/images/redstone.jpg)

##### Order in Which a Line of Wire Changes

-   When a line of wire turns on, the wires closer to the power source will cause block updates first
-   When a line of wire turns off, the wires closer to where the power source was, will cause block updates first
-   When two wires have the same distance to the power source, which of them causes updates first is picked at random
    -   The random choice is made once for the entire line of wire, to limit the amount of possible outcomes
    -   This means, when powering a line of wire from the side, it randomly chooses one of two possible update orders
    -   The advantage of having few possible update orders is that the results are more predictable

##### Block Updates Around a Wire

-   The order in which blocks around the wire update is based on the direction the wire received an update from
-   Currently, the order is: back, front, left, right, down, up
    -   left and right may be swapped, depending on the random choice made by the line of wire
-   When the updates are further distributed through solid blocks, the same order is applied there

#### Known Issues

As this experiment only changes Redstone wire, interactions with other components may not always act as expected, especially when it comes to update orders.

### Minecart Improvements

Added a new Experiment containing various movement changes to Minecarts. This can be enabled by selecting "Minecart Improvements" in the Experiments menu when creating a world.

Our long term goal is to make vehicle travel, like minecarts, a viable option for players compared to other late-game options which currently dominate most playstyles. To achieve this, we aim to make riding minecarts a smooth experience, with consistent and predictable motion and rotation. With this feature toggle we are laying a foundation to build upon in the future. We are aware of that these changes will break some existing contraptions, which is why we want to collaborate with the community to shape the upgrade and future experience of riding minecarts.

Please note that the experimental features behind this toggle are not aimed at any future release at this time. Instead, this is a place for us to try out changes and gather feedback.

We are excited to hear what you think about these changes: please share your feedback on this [feedback page](https://aka.ms/fbcarts).

#### Movement Changes

-   Minecarts will articulate their movement better when going fast, riding on the rail all the time
    -   Minecarts will now smoothly turn along with the track and are less likely to halt or derail
-   Minecarts can now jump better
    -   They keep their vertical momentum when the track ends with a slope
    -   Minecarts will tilt to visually articulate while in the air
    -   No rail grinding sound is played when Minecarts are flying through the air
-   Added a new accessibility setting that makes players follow the rotation of Minecarts they ride
    -   Defaults to off
    -   Only has effect when within a world with the experiment enabled
-   Added new gamerule `minecartMaxSpeed` that changes the maximum speed of Minecarts
    -   Defaults to 8 and goes up to 1000 blocks per second.
    -   Setting it to a specific value does not guarantee that a minecart will reach that particular max speed - there are built in air resistances and similar effects that the speed added through slopes or powered rails need to overcome
    -   This gamerule only exists in worlds with the experiment enabled

#### Minecart Changes

-   Minecarts can no longer be placed within another Minecart by the player or a dispenser
-   Minecarts can now consistently be placed next to each other along a track
-   Minecarts now pick up mobs more consistently when moving along a track

#### Known Impact

-   We are aware that these changes will make certain contraptions such as 'piston bolts' not work at all, or have their behavior changed
-   Very delicate rail networks will have their timings changed due to slight changes in speeds, movement distance, friction etc.
-   Contraptions that rely on Minecarts snapping to rails will no longer work, or have their behavior changed

## Changes

-   Various items and blocks have had their assigned rarities changed
-   Tweaked portal cooldowns of vehicles and projectiles
    -   After using a Nether Portal, Minecarts and Boats now only need to leave the portal for 0.5 seconds to use a portal again (down from previous 15 seconds)
    -   After using a Nether Portal, projectiles such as Enderpearls and Arrows now only need to leave the portal for 2 ticks to use a portal again (down from previous 15 seconds)
-   Suspicious Stew recipes are now shown in the recipe book
-   Breeze no longer have a minimum distance required to attack a target
-   Added a new death message for when killed by a Mace smash attack
-   Wolves can now also be fed cod, cooked cod, salmon, cooked salmon, tropical fish, pufferfish and rabbit stew to achieve parity with Bedrock
-   Enchanted shields now have the same reduced glint as enchanted armor
-   Banner Pattern items have new names and icons
-   Smithing Template items are now named after their template type instead of the generic "Smithing Template" name
    -   They instead specify that they are a Smithing Template through a subtitle in the hover text
-   The game will now limit the maximum framerate when it is minimized or when the player is AFK
    -   A new Video Setting is introduced to configure this behavior
-   Added language support for Tzotzil and Belarusian (Latin)
-   Tweaked Bee flight distances and cooldowns
    -   Bees now wander around randomly for less time after exiting a nest/hive
    -   If a bee has a known nest/hive, it will travel less far from it, thus being less likely to get lost
    -   Significantly increased the amount of time a Bee can take to return to a known nest/hive before it gives up trying to return home
    -   Bees are now a lot less likely to get stuck on corners or when they are close to a nest/hive they are trying to return to
    -   Bees are also now a lot less likely to try and pathfind to a flower it cannot reach
-   Updated the Bundle
-   Bats can now spawn at any height, not just below sea level, as long as it is dark enough and there is a solid block to spawn on
-   A triggered raid will no longer start if the raiders cannot find a place to spawn within a reasonable distance of the village they are trying to raid
-   Added baby versions of Dolphins, Squids, and Glow Squids
-   Added small and large Salmon variants
-   The title specified in the `written_book_content` component will now be prioritized over `custom_name` and `item_name` for any item with a non-empty title in this component
-   The performance of the server (tick rate) has been improved when using higher render distances
    -   Furthermore, the impact of loading and generating chunks on tick rate has been reduced
-   Redstone Torches have been given a new look with updated textures and models, to give it a unique and distinctive identity

### Banner Patterns

-   Each Banner Pattern item now includes their pattern type in their name instead of as a subtitle
    -   Unique item textures have been added to better distinguish each pattern type
-   The following Banner Patterns have been added to achieve parity with Bedrock:
    -   Field Masoned
        -   Crafted with Paper and Bricks
    -   Bordure Indented
        -   Crafted with Paper and Vines
-   The Bricks and Curved Border patterns in the Loom can no longer be accessed without the above Banner Patterns

### Rarity

-   Rarity is a set of categories which determine the color used to display the name of an item or block
    -   It has no gameplay impact, but is used to signal how difficult something is to obtain
    -   By default, unless specified otherwise, all items and blocks have a rarity of Common which displays their name in the color white
-   We have re-evaluated the rarity of all items and blocks in the game to more accurately reflect the current challenge of obtaining them, given the following guidelines:
    -   Items and blocks become more rare depending on the following factors:
        -   The chance of finding it in a loot table, including mob drops
        -   The amount of travelling required to obtain it
        -   The difficulty of any obstacle which must be overcome to obtain it
        -   The possible amount of that item or block which exists in the world
    -   Any item or block which can be crafted must inherit the highest rarity of its crafting ingredients
        -   For example, a Mace has an Epic rarity because one of its ingredients (the Heavy Core) has an Epic rarity
        -   Likewise, any crafted item which has only Common crafting ingredients must also be Common
-   The lists below detail the items and blocks which have changed to that rarity category

#### Common

-   End Crystal
-   Golden Apple

#### Uncommon

-   Sniffer Egg
-   Chainmail Helmet
-   Chainmail Chestplate
-   Chainmail Leggings
-   Chainmail Boots
-   Recovery Compass
-   Disc Fragment 5
-   Nautilus Shell
-   Echo Shard
-   Goat Horns
-   Pottery Sherds
-   Ominous Bottles
-   Ominous Banner
-   Netherite Upgade
-   Sentry Armor Trim
-   Dune Armor Trim
-   Coast Armor Trim
-   Wild Armor Trim
-   Tide Armor Trim
-   Snout Armor Trim
-   Rib Armor Trim
-   Wayfinder Armor Trim
-   Shaper Armor Trim
-   Raiser Armor Trim
-   Host Armor Trim
-   Flow Armor Trim
-   Bolt Armor Trim
-   The following Music Discs:
    -   13
    -   Cat
    -   Blocks
    -   Chirp
    -   Creator (Music Box)
    -   Far
    -   Mall
    -   Mellohi
    -   Stal
    -   Strad
    -   Ward
    -   11
    -   Wait
    -   Relic
    -   5
    -   Precipice

#### Rare

-   Enchanted Golden Apple
    -   Enchanted Golden Apples have become more common in recent years due to being accessible in both Ancient Cities and Trial Chambers, warranting a demotion to Rare instead of Epic
-   Trident
    -   We recently increased Trident's rarity up to Epic from Common, but after re-evaluating we felt that it was easier to obtain than other items in the Epic category such as Heavy Cores or Elytras
-   Nether Star
-   Ward Armor Trim
-   Eye Armor Trim
-   Vex Armor Trim
-   Spire Armor Trim
-   Wither Skeleton Skull
-   Skull Charge Banner Pattern
    -   Now that Wither Skeleton Skulls are Rare, these banner patterns should be Rare as well
-   Thing Banner Pattern
    -   Now that Enchanted Golden Apples are Rare, these banner patterns should be Rare as well
-   The following Music Discs:
    -   Pigstep
    -   otherside
    -   Creator

#### Epic

-   Elytra
-   Dragon Head
-   Silence Armor Trim

### Inactivity FPS limit

-   The game will now limit the maximum framerate in certain situations
-   These situations are controlled by a new Video Setting: `Reduce FPS when`
-   Possible options are:
    -   `Mimimized`
        -   Limits framerate to 10 FPS only when the game window is minimized
    -   `AFK`
        -   Limits framerate to 30 FPS when the game is not getting any player input for more than a minute
        -   Further limits to 10 FPS after 9 more minutes of no input
        -   Also limits to 10 FPS when the game window is minimized
-   The default is `AFK`

### Player Safety

#### Skin Reporting

-   Added reporting reason "Sexually inappropriate"
    -   This is intended for skins that are graphic in nature relating to sexual acts, sexual organs, and sexual violence
-   Removed reason "Defamation" due to lack of relevance for skins
-   Removed reason "Threat of harm to others" due to already being covered by "Harassment or bullying" reporting reason

#### Name Reporting

-   Added a text label above the description box to clarify that only the name of the player is subject to the report

#### Realms

-   Extended the `text-filtering-config` in order to support an internal migration for Realms Profanity Filtering
    -   Servers currently utilizing the `text-filtering-config` will be able to continue to do so without any changes

### Trial Chambers

-   Added new variations to the hallways, including "Encounters": Short challenges leading to a larger chamber.
-   Beds in intersections now have their colors randomized.
-   Replaced the empty chests at the entrance of chamber with a Hopper and Barrel to better show the players that these are meant for disposal and inventory managment!

## Technical Changes

-   The Data Pack version is now 49
-   Resource Pack version is now 35
-   Added some information about data pack structure (for example, data-driven registries) to generated reports
-   Added unique block sounds to the Monster Spawner block
-   New `server.properties` option: `pause-when-empty-seconds` (default `60`)
    -   When set to a positive value, causes the server to pause when no player has been online for that many seconds
-   Removed `server.properties` options: `spawn-animals` and `spawn-npcs`

### Network Protocol

-   Added `minecraft:client_tick_end` serverbound packet during play phase, sent when the client finishes processing its current tick
    -   This is unused by the Vanilla server, but left for use by custom server implementations
-   Added ability for custom servers to override the order that players appear in the 'tab list'
    -   This is controlled by a non-negative ordering index that is sorted highest to lowest
-   The client now shares the state of the 'Particles' limiter option to be used by custom servers

## Data Pack Version 49

-   Goat Horn instruments are now data-driven
-   Sheep shearing is now controlled by loot tables found as `shearing/sheep/<color>`
-   Mooshroom shearing is now controlled by loot tables found as `shearing/mooshroom/<variant>`
-   Snow golem shearing is now controlled by a loot table found as `shearing/snow_golem`
-   The `crafting_special_suspiciousstew` recipe type has been removed
-   Added new fields to painting variant definitions
-   Added optional field `explosion_power` to `tnt` and `tnt_minecart` types
    -   Defaults to 4
    -   For TNT minecarts, field value is added to speed-based explosion power
-   Added support for Enchantment trigger `projectile_spawned` in the following items:
    -   Snowballs
    -   Tridents
    -   Small Fireballs
    -   Thrown Potions
    -   Ender Pearls
    -   Fishing Rod
    -   Firework Rocket
    -   Wind Charge
    -   Eggs
-   Added new item components
-   Attribute IDs no longer have `generic.`, `player.` and `zombie.` prefixes
-   Recipe ingredient format has been simplified
-   Invalid `selector` patterns in Chat Components will now cause commands to fail to parse, instead of resolving to an empty string
-   Added `tempt_range` attribute - can be used to change the range, in blocks, at which temptable mobs can be tempted

### Instruments

Goat Horn instruments are now defined in a data pack registry folder called `instruments`. Like other registries, changing this content in data packs is considered experimental and requires a full world re-load to take effect.

Fields:

-   `sound_event`: The sound event the instrument plays
-   `range`: The maximum range (in blocks) at which the sound can be heard
-   `use_duration`: The amount of time (in seconds) the instrument is considered in use after triggering, which also serves as its cooldown
-   `description`: A Text Component used as the descrpition of the instrument in item tooltips

### Painting variant

-   Added new optional fields `author` and `title`, holding text components to be displayed in the creative menu tooltip
-   This replaces previous mechanism where those values were derived from variant name
-   Author tooltip has been removed for `earth`, `wind`, `fire`, `water` and `wither` variants

### Tags

#### Item Tags

-   `furnace_minecart_fuel`: Items that can be used to refuel furnace minecart
-   `villager_picks_up`: Items that a Villager will try to pick up from the ground
-   Added new tags to control which items can be used to craft and repair various tool sets:
    -   `wooden_tool_materials`
    -   `iron_tool_materials`
    -   `gold_tool_materials`
    -   `diamond_tool_materials`
    -   `netherite_tool_materials`

### New Item Components

#### `minecraft:repairable`

-   If present, and this item is damageable, this item can be repaired in an Anvil using the specified ingredient
-   Format: object with fields
    -   `items`: Item, list of Items, or hash-prefixed Item Tag matching what can be used to repair this item
    -   e.g. `repairable={items:'stick'}`

#### `minecraft:enchantable`

-   If present (and any enchantments are applicable), this item can be enchanted in an Enchanting Table
-   Format: object with fields
    -   `value`: Positive integer, a higher value allows enchantments with a higher cost to be picked
    -   e.g. `enchantable={value:15}`

### Recipes

The format used for recipe ingredients has been simplified and aligned with other fields that accept item lists (like item predicates):

-   For items: `{ "item": "<item id>" }` now becomes `"<item id>"`
-   For tags: `{ "tag": "<tag id>" }` now becomes `"#<tag id>"`
-   Lists of items are still allowed, but tags can no longer appear in such list
-   Remaining restrictions:
    -   `minecraft:air` can't appear anywhere in ingredient
    -   ingredient must have at least one tag or item
-   Fields `template`, `base` and `addition` in `smithing_transform` and `smithing_trim` recipes are now optional instead of accepting empty list

## Resource Pack Version 35

-   Added break, fall, hit, place, and step sounds for the Spawner block
-   Removals and renames of some translations is now automatically applied at startup
-   Updated the format of post-processing effect definitions
-   Added support for emissive layers for block models
-   The texture map for the Arrow and Bee Stinger models have been updated
-   The model and UV mapping of the Dragon Egg have been updated
-   Updated textures, models and sounds for the Bundle item
    -   Bundle icon has new models and textures
    -   The Bundle UI has new textures and scaling
    -   Added a new sound for when failing to add an item to a Bundle
-   The models and UV mapping related to the Torch and blocks containing Redstone Torch have been updated
-   Added new models for the Redstone Torch and updated its texture

### Shaders & Post-process Effects

-   The format of post-processing effect configurations have been updated
-   The `ChunkOffset` uniform in terrain shaders has been renamed to `ModelOffset`

#### Post-process Effect Definitions

-   `intarget` and `auxtargets` have been merged into a single `inputs` list, as specified by the input format below
-   `outtarget` has been renamed to `output` with the same format
-   `targets` is now a map between target name and target definition, as opposed to a list
    -   Inline target names are replaced with an empty object
        -   For example, `["swap"]` becomes `{"swap": {}}`
    -   Target definitions with a specific size remain the same, with the `name` field moved into the map key
        -   For example, `[{"name": "potato", "width": 16, "height": 16}]` becomes `{"potato": {"width": 16, "height": 16}}`

##### Input Format

For both render target and texture inputs, the following fields may be specified:

-   `sampler_name`: string - prefix to set up both `_Sampler` and `_Size` uniforms
    -   For example, `"sampler_name": "Diffuse"` will link to the `DiffuseSampler` and `DiffuseSize` uniforms
    -   This was previously always `DiffuseSampler` and `InSize` for `intarget`
    -   For `auxtargets`, the `name` defined the sampler uniform, and the size was given as `AuxSize<index>`
-   `bilinear`: boolean (default: `false`) - if true, the input will be sampled with a bilinear filter
    -   This formerly only existed on texture inputs, however now functions for render targets
    -   For render targets, replaces the now removed `use_linear_filter` field on the pass definition

For inputs from a render target, the following fields may be specified:

-   `target`: namespaced id - the render target id
    -   Either a custom target id defined in the same file, or `minecraft:main` to reference the main screen target
    -   This replaces the former `id` field, which was a free-form string
-   `use_depth_buffer`: boolean (default: `false`) - true to sample from the depth texture, false to sample from the color texture
    -   This replaces the former `:depth` suffix applied to the target id

For inputs from a static texture, the following fields may be specified:

-   `location`: namespaced string - the location to a static texture file that can be sampled by the effect
    -   As the `id` field did before, this resolves to a texture at `assets/<namespace>/textures/effect/<path>.png`
-   `width`: positive integer - width in pixels of the texture
-   `height`: positive integer - height in pixels of the texture

##### External Targets

-   The 'Fabulous' graphics transparency post-processing config no longer specifies the sorted framebuffers as custom targets
    -   These are instead imported in the same way as the `minecraft:main` target
    -   `translucent`, `itemEntity`, `particles`, `weather`, `clouds` are now `minecraft:translucent`, `minecraft:item_entity`, `minecraft:particles`, `minecraft:weather`, and `minecraft:clouds` respectively
-   The entity outline processing shader similarly imports the `minecraft:entity_outline` target

## Translation removals and renames

-   During load some deprecated translation strings will now be removed and/or renamed
-   Packs that used those translations will need to re-add them manually
-   The full list is available in `/assets/minecraft/lang/deprecated.json` file inside the game's JAR file

## Emissive layers for block models

-   Added an optional `light_emission` field to block model elements
-   Integer value between 0 and 15, with 0 being the default value (no light emission)
-   If specified and non-zero, this will behave as the minimum light level that the element can receive

## Fixed bugs in Snapshot 24w33a

-   [MC-379](https://bugs.mojang.com/browse/MC-379) spawn-animals and spawn-npcs=false removes all villagers and prevents summoning new mobs
-   [MC-1673](https://bugs.mojang.com/browse/MC-1673) Several mobs can pop off paintings, item frames and leads and destroy minecarts, armor stands and anything in item form even when mobGriefing is turned off
-   [MC-3266](https://bugs.mojang.com/browse/MC-3266) Your experience level overflows once it exceeds the integer limit
-   [MC-3697](https://bugs.mojang.com/browse/MC-3697) TNT submerged in water can destroy item frames, paintings, armor stands, and other similar entities
-   [MC-4665](https://bugs.mojang.com/browse/MC-4665) Anvil consuming 2 unbroken items of the same kind when renaming them
-   [MC-14800](https://bugs.mojang.com/browse/MC-14800) When zombie villagers, husks, drowned or zombified piglins are damaged, they spawn regular zombie reinforcements
-   [MC-49628](https://bugs.mojang.com/browse/MC-49628) When in spectator mode the head overlay shows even if it is set not to show in the skin customisation options
-   [MC-53602](https://bugs.mojang.com/browse/MC-53602) Projectiles don't collide with the world border
-   [MC-55863](https://bugs.mojang.com/browse/MC-55863) It rains over unloaded chunks, ignoring the biome
-   [MC-59471](https://bugs.mojang.com/browse/MC-59471) String can be duplicated using tripwire hooks
-   [MC-72494](https://bugs.mojang.com/browse/MC-72494) In Statistics screen 'm' is the same unit for both minutes and meters
-   [MC-75494](https://bugs.mojang.com/browse/MC-75494) Lead item drop is not affected by doEntityDrops gamerule
-   [MC-86252](https://bugs.mojang.com/browse/MC-86252) Shields can continue to block after entity changes dimensions due to client and server desync
-   [MC-89883](https://bugs.mojang.com/browse/MC-89883) Squid and glow squid collision error and rubberbanding
-   [MC-92875](https://bugs.mojang.com/browse/MC-92875) Collisionless blocks ignore entities with high velocity
-   [MC-101376](https://bugs.mojang.com/browse/MC-101376) Elytra appearance doesn't update in 1st person mode; only in 3rd person
-   [MC-112257](https://bugs.mojang.com/browse/MC-112257) Some NBT tags require the correct suffix
-   [MC-120417](https://bugs.mojang.com/browse/MC-120417) Incorrect dragon egg block model
-   [MC-121013](https://bugs.mojang.com/browse/MC-121013) "Followrange" Attribute only targets mobs on (roughly) the same y level.
-   [MC-125642](https://bugs.mojang.com/browse/MC-125642) Bone meal is consumed when used on fern, grass and seagrass even if it cannot grow
-   [MC-127995](https://bugs.mojang.com/browse/MC-127995) You can use bone meal on sea pickles in situations where no sea pickles will grow
-   [MC-129826](https://bugs.mojang.com/browse/MC-129826) \["shade": false\] is missing from potted cross models, resulting in most potted plants appearing darker than they should
-   [MC-130097](https://bugs.mojang.com/browse/MC-130097) Tropical fish fin UV mapping wrong
-   [MC-132804](https://bugs.mojang.com/browse/MC-132804) Low follow range attribute also affects mobs' idle wandering range
-   [MC-133862](https://bugs.mojang.com/browse/MC-133862) Optimize world screen backup button has inaccurate text
-   [MC-135971](https://bugs.mojang.com/browse/MC-135971) Can't use CTRL+Q in crafting table
-   [MC-137053](https://bugs.mojang.com/browse/MC-137053) You cannot set the "CanBreakDoors" NBT tag of drowned to "1b"
-   [MC-144761](https://bugs.mojang.com/browse/MC-144761) Animated texture interpolation ignores alpha channel during transition from/to transparent pixels
-   [MC-145656](https://bugs.mojang.com/browse/MC-145656) Attribute "follow\_range" is not working for hostile mobs before they find the target
-   [MC-151828](https://bugs.mojang.com/browse/MC-151828) Woodland mansion structure '1x1\_b3' has dark oak leaf block with persistent tag set to 'false'
-   [MC-156579](https://bugs.mojang.com/browse/MC-156579) Creative players can fly through portals when going quickly enough using elytra or Riptide trident
-   [MC-161913](https://bugs.mojang.com/browse/MC-161913) Misalignment on edges/corners of clouds
-   [MC-162713](https://bugs.mojang.com/browse/MC-162713) Clouds are generated with offset to east and south
-   [MC-165182](https://bugs.mojang.com/browse/MC-165182) Inventory/GUI textures no longer handle translucent pixels correctly
-   [MC-166880](https://bugs.mojang.com/browse/MC-166880) Pufferfish spikes model seems to be broken
-   [MC-174732](https://bugs.mojang.com/browse/MC-174732) Semi-transparent status effect textures do not render correctly in the inventory or beacon UI
-   [MC-179629](https://bugs.mojang.com/browse/MC-179629) Faces in between cloud "blocks" can still render from outside of the cloud
-   [MC-180272](https://bugs.mojang.com/browse/MC-180272) en\_us.json contains unused strings
-   [MC-182478](https://bugs.mojang.com/browse/MC-182478) Mob armor generates starting with boots rather than helmet
-   [MC-182877](https://bugs.mojang.com/browse/MC-182877) Piglins use one hand to hold a loaded crossbow
-   [MC-183518](https://bugs.mojang.com/browse/MC-183518) High CPU usage on hypervisor host possibly due to excessive syscall usage by Minecraft Server
-   [MC-183636](https://bugs.mojang.com/browse/MC-183636) follow\_range attribute not working for piglins
-   [MC-187920](https://bugs.mojang.com/browse/MC-187920) Bees sometimes give up when returning home
-   [MC-188217](https://bugs.mojang.com/browse/MC-188217) Bees circle above flower that is covered by all sides
-   [MC-190163](https://bugs.mojang.com/browse/MC-190163) Zoglin spawn eggs don't occasionally spawn baby zoglins on their own accord
-   [MC-190484](https://bugs.mojang.com/browse/MC-190484) Sneaking players' name tags are partly invisible depending on what angle you're facing
-   [MC-195754](https://bugs.mojang.com/browse/MC-195754) Illagers in raids continuously try and fail to pick up ominous banners if they can't reach them
-   [MC-196556](https://bugs.mojang.com/browse/MC-196556) When projectiles (such as arrows and tridents) move too fast, they can't be teleported by portals and end gateways
-   [MC-203748](https://bugs.mojang.com/browse/MC-203748) Filled lava cauldrons are able to be put under water
-   [MC-209947](https://bugs.mojang.com/browse/MC-209947) minecraft:block/scaffolding\_unstable has incorrect cullfaces
-   [MC-215332](https://bugs.mojang.com/browse/MC-215332) Glow squids lack a baby variant
-   [MC-215752](https://bugs.mojang.com/browse/MC-215752) Z-fighting with paintings and item frames in solid blocks
-   [MC-224035](https://bugs.mojang.com/browse/MC-224035) Small Dripleaf's model is inconsistent
-   [MC-224454](https://bugs.mojang.com/browse/MC-224454) Entities don't recognize azaleas or flowering azaleas as obstacles when pathfinding
-   [MC-225270](https://bugs.mojang.com/browse/MC-225270) Goats can move armor stands even with mobGriefing turned off
-   [MC-226038](https://bugs.mojang.com/browse/MC-226038) Scheduled functions are part of weather in profile results
-   [MC-226687](https://bugs.mojang.com/browse/MC-226687) Sea Level is assumed to be Y = 63 in numerous parts of Minecraft
-   [MC-227139](https://bugs.mojang.com/browse/MC-227139) Sky fog stutters
-   [MC-234318](https://bugs.mojang.com/browse/MC-234318) Small dripleaf stems intersect its leaves
-   [MC-239581](https://bugs.mojang.com/browse/MC-239581) Bees do not become angry at the closest player when hive is exploded
-   [MC-240948](https://bugs.mojang.com/browse/MC-240948) Filled powder snow cauldrons are able to be put under water
-   [MC-241873](https://bugs.mojang.com/browse/MC-241873) Ravagers can move armor stands even with mobGriefing turned off
-   [MC-243413](https://bugs.mojang.com/browse/MC-243413) Some Explorer Maps are missing their icon
-   [MC-244720](https://bugs.mojang.com/browse/MC-244720) "Erased cached data" button in Optimize World is not labeled in the right order when using Tab
-   [MC-245510](https://bugs.mojang.com/browse/MC-245510) Piglin Brute's generic.follow\_range attribute functions oddly
-   [MC-247238](https://bugs.mojang.com/browse/MC-247238) Sky fog is not cylindrical
-   [MC-249067](https://bugs.mojang.com/browse/MC-249067) Ominous banners lose their rarity color when renamed using anvils
-   [MC-249901](https://bugs.mojang.com/browse/MC-249901) Frogs don't play the frog eating sound when given a slime ball
-   [MC-256422](https://bugs.mojang.com/browse/MC-256422) Some words within some strings use right single quotation marks instead of apostrophes
-   [MC-257309](https://bugs.mojang.com/browse/MC-257309) Monster spawner tries to spawn wardens and zoglins when the difficulty is Peaceful
-   [MC-259687](https://bugs.mojang.com/browse/MC-259687) "Distance by Elytra" statistic is approximately doubled
-   [MC-259798](https://bugs.mojang.com/browse/MC-259798) Block hitboxes cause semi-transparent blocks not to render behind them in lower than "Fabulous" graphics settings
-   [MC-260013](https://bugs.mojang.com/browse/MC-260013) Baby Llama's head has incorrect scale method
-   [MC-260858](https://bugs.mojang.com/browse/MC-260858) The word "ticks" within a "/schedule" command feedback message is always pluralized
-   [MC-260859](https://bugs.mojang.com/browse/MC-260859) Some words within a tick profiling feedback message are always pluralized
-   [MC-260860](https://bugs.mojang.com/browse/MC-260860) Some words within some chat delay strings are always pluralized
-   [MC-260913](https://bugs.mojang.com/browse/MC-260913) The word "blocks" within some "/spreadplayers" command feedback messages is always pluralized
-   [MC-260914](https://bugs.mojang.com/browse/MC-260914) "/spreadplayers" strings for entities consist of inconsistent noun usage
-   [MC-261691](https://bugs.mojang.com/browse/MC-261691) Bees get stuck while trying to pathfind to inaccessible flowers
-   [MC-262112](https://bugs.mojang.com/browse/MC-262112) Wither skull's bounding box is wrongly positioned in the first tick, and cannot be selected with volume checks in commands
-   [MC-262175](https://bugs.mojang.com/browse/MC-262175) The "advancements.adventure.trim\_with\_any\_armor\_pattern.description" text contains incorrect English grammar
-   [MC-262498](https://bugs.mojang.com/browse/MC-262498) Underground seagrass feature files exist despite never generating
-   [MC-262652](https://bugs.mojang.com/browse/MC-262652) Dragon egg's side texture is mapped strangely as of 1.8 (and the model is also unoptimized)
-   [MC-263838](https://bugs.mojang.com/browse/MC-263838) doLimitedCrafting gamerule does not work on suspicious stew
-   [MC-263858](https://bugs.mojang.com/browse/MC-263858) Text Displays are rendered differently compared to name tags
-   [MC-264886](https://bugs.mojang.com/browse/MC-264886) Geode features ignore the invalid\_blocks field
-   [MC-264986](https://bugs.mojang.com/browse/MC-264986) Item count of fuel slot affects the way smelting recipe book moves ingredients
-   [MC-265554](https://bugs.mojang.com/browse/MC-265554) Aaron Cherof listed as "Aaron Cherof\\u00a0" in credits.json
-   [MC-265693](https://bugs.mojang.com/browse/MC-265693) Movement does not reset a player's last action time
-   [MC-265695](https://bugs.mojang.com/browse/MC-265695) The feedback for setting the idle timeout to 0 minutes does not reflect the actual behavior
-   [MC-265703](https://bugs.mojang.com/browse/MC-265703) BrushableBlock's codec misspells 'completed' as 'comleted'
-   [MC-266441](https://bugs.mojang.com/browse/MC-266441) Multiple trial chamber templates have missing or incorrect blocks
-   [MC-266949](https://bugs.mojang.com/browse/MC-266949) Monster spawner tries to spawn breezes when the difficulty is Peaceful
-   [MC-267006](https://bugs.mojang.com/browse/MC-267006) The Distance Flown statistics rapidly increases when you are standing in Ender Dragon's hitbox
-   [MC-267107](https://bugs.mojang.com/browse/MC-267107) Spawners unsuccessfully try to summon hostile entities on peaceful difficulty
-   [MC-267401](https://bugs.mojang.com/browse/MC-267401) All the player skin report's category descriptions use the chat message ones
-   [MC-267838](https://bugs.mojang.com/browse/MC-267838) Projectile yaw rotations have incorrect interpolation, causing flickering
-   [MC-268045](https://bugs.mojang.com/browse/MC-268045) The name of Entity Argument is plural in Query literal node of Experience command
-   [MC-268220](https://bugs.mojang.com/browse/MC-268220) Zoglins ignore monster spawning requirements when spawning naturally
-   [MC-268241](https://bugs.mojang.com/browse/MC-268241) The bottom faces of vaults aren't culled when covered by blocks
-   [MC-268528](https://bugs.mojang.com/browse/MC-268528) Cave Vines can be pollinated infinitely (instead of limit of 10)
-   [MC-268645](https://bugs.mojang.com/browse/MC-268645) Scheduling a macro function silently fails
-   [MC-268929](https://bugs.mojang.com/browse/MC-268929) pack.png does not support translucent pixels
-   [MC-269083](https://bugs.mojang.com/browse/MC-269083) Effect background texture in inventory renders translucent pixels as opaque
-   [MC-269152](https://bugs.mojang.com/browse/MC-269152) nine\_slice texture scaling will cause ridiculous levels of lag when used on small textures
-   [MC-269352](https://bugs.mojang.com/browse/MC-269352) The breeze rod uses an incorrect model for holding
-   [MC-269375](https://bugs.mojang.com/browse/MC-269375) Breeze's wind charge attack can move or break armor stands when mobGriefing is disabled
-   [MC-269428](https://bugs.mojang.com/browse/MC-269428) Mace fall damage multiplier does not apply to mobs
-   [MC-269440](https://bugs.mojang.com/browse/MC-269440) Text fields render translucent pixels as opaque
-   [MC-269441](https://bugs.mojang.com/browse/MC-269441) Difficulty lock button renders translucent pixels as opaque
-   [MC-269445](https://bugs.mojang.com/browse/MC-269445) Some empty slot icons render translucent pixels as opaque
-   [MC-269528](https://bugs.mojang.com/browse/MC-269528) Recipe book tabs are rendered over items held by the mouse cursor
-   [MC-269549](https://bugs.mojang.com/browse/MC-269549) Items held in cursor are rendered behind recipe book UI elements
-   [MC-269622](https://bugs.mojang.com/browse/MC-269622) Previous/Next Page buttons render translucent pixels as opaque
-   [MC-269627](https://bugs.mojang.com/browse/MC-269627) Toasts render translucent pixels as opaque
-   [MC-269656](https://bugs.mojang.com/browse/MC-269656) Feeding parrots poison while holding mace grants Over-Overkill challenge
-   [MC-269738](https://bugs.mojang.com/browse/MC-269738) Recipe book cannot quick-move oversized item stacks into applicable recipe slots
-   [MC-269751](https://bugs.mojang.com/browse/MC-269751) Advancement frames render translucent pixels as opaque
-   [MC-269814](https://bugs.mojang.com/browse/MC-269814) Can’t feed fish to wolves
-   [MC-269832](https://bugs.mojang.com/browse/MC-269832) Gamemode switcher sprites render translucent pixels as opaque
-   [MC-269834](https://bugs.mojang.com/browse/MC-269834) Statistics screen sprites render translucent pixels as opaque
-   [MC-269895](https://bugs.mojang.com/browse/MC-269895) Breezes missing higher fidelity jump animation from Bedrock
-   [MC-269936](https://bugs.mojang.com/browse/MC-269936) Transferable list (resource pack, data pack) screen buttons render translucent pixels as opaque
-   [MC-269937](https://bugs.mojang.com/browse/MC-269937) World list buttons render translucent pixels as opaque
-   [MC-269996](https://bugs.mojang.com/browse/MC-269996) Custom names of Interaction entities render at wrong location
-   [MC-270051](https://bugs.mojang.com/browse/MC-270051) Recipe book button renders translucent pixels as opaque
-   [MC-270299](https://bugs.mojang.com/browse/MC-270299) New data pack component crafting doesn't work with suspicious stews
-   [MC-270348](https://bugs.mojang.com/browse/MC-270348) Some slime trial spawners in trial chambers won't spawn slimes without player intervention
-   [MC-270510](https://bugs.mojang.com/browse/MC-270510) youJustLostTheGame is not the first item in the mappings
-   [MC-270518](https://bugs.mojang.com/browse/MC-270518) Scrollers in block UIs render translucent pixels as opaque
-   [MC-270519](https://bugs.mojang.com/browse/MC-270519) "Error" textures in block/entity GUIs do not support translucent textures
-   [MC-270563](https://bugs.mojang.com/browse/MC-270563) Furnace, blast furnace and smoker smelting progress and burn time indicators do not support translucent textures
-   [MC-270564](https://bugs.mojang.com/browse/MC-270564) Brewing stand fuel, bubbles and progress sprites do not support translucent textures
-   [MC-270570](https://bugs.mojang.com/browse/MC-270570) TPS chart uses OS locale specific number formatting
-   [MC-270571](https://bugs.mojang.com/browse/MC-270571) /tick command uses OS locale specific number formatting
-   [MC-270640](https://bugs.mojang.com/browse/MC-270640) Anvil text field does not support translucent textures
-   [MC-270641](https://bugs.mojang.com/browse/MC-270641) Crafter UI sprites do not support translucent pixels
-   [MC-270678](https://bugs.mojang.com/browse/MC-270678) Tabs in recipe book and Creative inventory do not support translucent pixels
-   [MC-270680](https://bugs.mojang.com/browse/MC-270680) Buttons in the beacon GUI do not support translucent pixels
-   [MC-270692](https://bugs.mojang.com/browse/MC-270692) Textures for empty slots do not support translucent pixels
-   [MC-270696](https://bugs.mojang.com/browse/MC-270696) Traps are generated behind walls in Trial Chambers
-   [MC-270697](https://bugs.mojang.com/browse/MC-270697) Stonecutter recipe buttons render translucent pixels as opaque
-   [MC-270698](https://bugs.mojang.com/browse/MC-270698) Loom recipe buttons render translucent pixels as opaque
-   [MC-270726](https://bugs.mojang.com/browse/MC-270726) Advancement backgrounds render translucent pixels as opaque
-   [MC-270741](https://bugs.mojang.com/browse/MC-270741) Realms main menu icons do not render translucent pixels correctly, but accessibility/language icons do
-   [MC-270764](https://bugs.mojang.com/browse/MC-270764) Recipe book buttons and icons do not render translucent pixels correctly
-   [MC-270765](https://bugs.mojang.com/browse/MC-270765) Bundle background does not handle translucent pixels correctly
-   [MC-270775](https://bugs.mojang.com/browse/MC-270775) Ominous vault failed to generate sometimes
-   [MC-271113](https://bugs.mojang.com/browse/MC-271113) Bees occasionally freezing right before they enter the hives
-   [MC-271191](https://bugs.mojang.com/browse/MC-271191) Poor saving performance due to large amount of item frames
-   [MC-271628](https://bugs.mojang.com/browse/MC-271628) Enchantment effect "projectile\_spawned" doesn't trigger for fishing rods and tridents
-   [MC-272327](https://bugs.mojang.com/browse/MC-272327) Attribute effects not properly postfixed with slot name
-   [MC-272414](https://bugs.mojang.com/browse/MC-272414) Redundant calculation causes 2x lag during explosions
-   [MC-272506](https://bugs.mojang.com/browse/MC-272506) Fast switching between servers causes disconnect
-   [MC-272603](https://bugs.mojang.com/browse/MC-272603) Riding an entity into the end fountain skips the credits
-   [MC-272649](https://bugs.mojang.com/browse/MC-272649) After a chest with the item component "container\_loot" is opened, it will appear on the subsequent pick Block
-   [MC-272670](https://bugs.mojang.com/browse/MC-272670) Crash while saving entity NBT - Cannot encode empty ItemStack
-   [MC-272766](https://bugs.mojang.com/browse/MC-272766) When riding a minecart through a portal, the direction the player is facing after they go through the portal is not the same as when they entered
-   [MC-272802](https://bugs.mojang.com/browse/MC-272802) Ender pearls deal no damage to their owners after switching dimensions and landing
-   [MC-272804](https://bugs.mojang.com/browse/MC-272804) The mining fatigue animation plays in reverse
-   [MC-272805](https://bugs.mojang.com/browse/MC-272805) Command blocks made from Pick Block still do not activate when placed near sources of power
-   [MC-272821](https://bugs.mojang.com/browse/MC-272821) Wind Charges incorrectly negate fall damage
-   [MC-272932](https://bugs.mojang.com/browse/MC-272932) Auto-save text in the pause menu is rendered at the wrong position
-   [MC-272994](https://bugs.mojang.com/browse/MC-272994) Allays assigned to a player can be set on fire with sweeping and fire aspect
-   [MC-273076](https://bugs.mojang.com/browse/MC-273076) Breeze immediately forgets the player once Line of Sight is lost, even through transparent blocks
-   [MC-273239](https://bugs.mojang.com/browse/MC-273239) Trial Spawners rapidly change block state when switching gamerule "doMobSpawning" from false to true
-   [MC-273263](https://bugs.mojang.com/browse/MC-273263) Attributes are retained even if destroyed by "damage\_item"
-   [MC-273281](https://bugs.mojang.com/browse/MC-273281) "projectile\_spawned" Enchantment Component runs predicates and effects on projectiles before all of their data has been assigned
-   [MC-273288](https://bugs.mojang.com/browse/MC-273288) Dropping a stack of items while in the creative mode inventory deletes them
-   [MC-273311](https://bugs.mojang.com/browse/MC-273311) Taking near Float.MAX\_VALUE damage from mob attack through commands on hard causes NaN Absorption and Health
-   [MC-273328](https://bugs.mojang.com/browse/MC-273328) Stars are smaller than supposed to
-   [MC-273361](https://bugs.mojang.com/browse/MC-273361) Entities teleported to the player from a force loaded chunk are not rendered
-   [MC-273377](https://bugs.mojang.com/browse/MC-273377) No debug stick in hand, but I can still edit blocks
-   [MC-273400](https://bugs.mojang.com/browse/MC-273400) Baby zombified piglin chicken jockeys immediately teleport
-   [MC-273427](https://bugs.mojang.com/browse/MC-273427) Respawn anchor loses charges when returning from the End
-   [MC-273464](https://bugs.mojang.com/browse/MC-273464) Incorrect partial tick during screen render
-   [MC-273489](https://bugs.mojang.com/browse/MC-273489) Sneaking players' name tags are barely visible
-   [MC-273578](https://bugs.mojang.com/browse/MC-273578) Interaction entities position passengers incorrectly
-   [MC-273662](https://bugs.mojang.com/browse/MC-273662) Trial spawners cannot spawn silverfish at all/have unusually long delays between spawns
-   [MC-273672](https://bugs.mojang.com/browse/MC-273672) When spectatorsGenerateChunks is set to false, the player cannot stop spectating an entity without running /spectate
-   [MC-273758](https://bugs.mojang.com/browse/MC-273758) Ominous item spawner's animation breaks if the level.dat "Time" value is over a certain number
-   [MC-273771](https://bugs.mojang.com/browse/MC-273771) Passengers can glitch into walls when their mounts are killed
-   [MC-273811](https://bugs.mojang.com/browse/MC-273811) Ender pearls don't teleport the player if he hasn't been in the pearl's dimension after relog
-   [MC-273822](https://bugs.mojang.com/browse/MC-273822) The words "forwards" and "backwards" within two movement key bind strings aren't spelled in American English
-   [MC-273828](https://bugs.mojang.com/browse/MC-273828) Movement predicate is incorrect for stationary players until either mouse is moved or one second elapses
-   [MC-273848](https://bugs.mojang.com/browse/MC-273848) Players can spawn underwater again in 1.21
-   [MC-273850](https://bugs.mojang.com/browse/MC-273850) Shield enchantment glint is too bright to clearly see banner patterns
-   [MC-273914](https://bugs.mojang.com/browse/MC-273914) Client game options that do not constitute sending a network packet will send one anyway
-   [MC-273960](https://bugs.mojang.com/browse/MC-273960) The NBT data stored in the world affects copying a Decorated Pot in creative mode
-   [MC-274030](https://bugs.mojang.com/browse/MC-274030) Item stacks with a count over 99 cause the player to get kicked from their world in creative mode
-   [MC-274244](https://bugs.mojang.com/browse/MC-274244) minecraft:villager\_plantable\_seeds tag does not allow farmer Villagers to pick up items
-   [MC-274371](https://bugs.mojang.com/browse/MC-274371) Depleting a Respawn Anchor doesn't play any sound
-   [MC-274372](https://bugs.mojang.com/browse/MC-274372) using\_item advancement trigger keeps being activated even after the item stops being used, after teleporting to another dimension
-   [MC-274400](https://bugs.mojang.com/browse/MC-274400) Dispensers firing a wind charge play the crafter crafting world event, showing incorrect particles beneath the block
-   [MC-274519](https://bugs.mojang.com/browse/MC-274519) Minecraft resaves all maps with every autosave
-   [MC-274657](https://bugs.mojang.com/browse/MC-274657) Ominous Banner's orange name is handled as a custom text color, rather than as a rarity
-   [MC-274708](https://bugs.mojang.com/browse/MC-274708) Exiting the end portal first time removes player attribute modifiers
-   [MC-274852](https://bugs.mojang.com/browse/MC-274852) "item\_name" component has priority over signed book title
-   [MC-274911](https://bugs.mojang.com/browse/MC-274911) If the raid begins more than 112 blocks above the ground, all illagers will be summoned and the player wins
-   [MC-274960](https://bugs.mojang.com/browse/MC-274960) Registries allow duplicate entries

---

We are now releasing snapshot 24w21b to fix a frequent crash which happened when Zombies spawned in areas of high local difficulty.

## Fixed bugs in 24w21b

-   [MC-272321](https://bugs.mojang.com/browse/MC-272321) Crash after upgrading snapshot world to 24w21a

---

This week we're bringing a Snapshot you can vibe out to! This time around we're bringing data-driven jukeboxes, a new gamerule, and a bunch of fixes.

Happy vibing!

## Changes

-   It seems we cooked a bit too hard with the new Piston sounds last week, which is why we're reverting back to the old sounds again
-   Lowered volume of original sounds to address initial feedback of Pistons being too loud
-   Pause menu now can include a list of links provided by server
-   Improvements to the disconnection screen
-   Any member of a Realm can now upgrade a world
-   In the Realms main screen, all online players of a Realm are displayed
    -   When hovered, a tooltip is shown with each player's head and name

### Vault

-   Added sound effect to help players understand they've already looted a vault

### Trial Chambers

-   Trial Chambers are less likely to generate in the Deep Dark

### Animal Panic

-   Animals now panic based on the damage caused by predefined Damage Source Types
-   The panic lasts for 2 seconds after the damage is dealt. The following damage type tags are used by vanilla animals:
    -   `panic_environmental_causes`: Used by Wolves, Polar Bears (adults) and Pandas
    -   `panic_causes`: Used by all other animals and baby Polar Bears

### Server links

-   Servers can now provide a list of links to clients
-   If client has received any links, a new button called "Server Links..." will show up in pause game screen
    -   To make space for that button, "Report Bugs" and "Give Feedback" buttons might be moved into a sub-screen if necessary

### Disconnection screen improvements

-   In some cases client will now store detailed information about disconnection (similar to crash reports)
-   When that happens, new "Open Disconnection Report Directory" button will be added to the disconnection screen
-   When server provides link for bug reporting, it will be also be added as a button to the disconnection screen

## Technical Changes

-   Resource Pack version is now 34
-   Data Pack version is now 45
-   Server can now provide list of links to client
-   Servers can add custom details to crash and disconnection reports

### Gamerules

-   Added new `entitiesWithPassengersCanUsePortals` gamerule
    -   When `true`, entities with passengers can use Nether Portals, End Portals and End Gateways
    -   Defaults to `false`

### Server links

-   New clientbound packet `server_links` is available in `configuration` and `game` protocols
-   On receival, client will make links available from pause menu
-   Link labels can be built-in or custom (i.e. any text)
-   Some built-ins also have special fuctionality:
    -   `report_bug`:
        -   link will be displayed on disconnection screen, if disconnection was caused by packet handling error
        -   link will be included as a comment in disconnection report
-   Added `bug-report-link` to `server.properties` to allow vanilla server to configure `report_bug` links
    -   If this field is non-empty, server will send that link to clients
    -   This field should contain well-formed URL

### Custom server crash report details

-   New clientbound packet `custom_report_details` is available in `configuration` and `game` protocols
-   This packet contains a list of key-value text entries
-   If received, contents of this packet will be added in a separate section to any crash or disconnection report generated during connection to this server

## Data Pack Version 45

-   Jukebox songs are now data-driven
-   Added new command syntax

### Jukebox Songs

-   Added a jukebox song registry which is loaded from data packs
-   Path to jukebox song definition is `data/<namespace>/jukebox_song/<id>.json`
-   Fields in definition:
    -   `sound_event` - sound event that is streamed when played by a Jukebox
    -   `description` - the name of the song that will be displayed in the hover tooltip represented as a Text Component
    -   `length_in_seconds` - length of the song in seconds as a positive float
    -   `comparator_output` - the redstone signal output by a comparator when played in a Jukebox, between 0 and 15
-   Added `minecraft:jukebox_playable` item stack component

#### `jukebox_playable` item component

-   If set, the item can be inserted into Jukeboxes to play a song
-   Format: object with fields
    -   `song`: jukebox song id
        -   The song that will be played by the Jukebox when this item stack is inserted
    -   `show_in_tooltip`: boolean (default: true)
        -   If false, the name of the song will not be shown in the tooltip
        -   This was formerly controlled by the `hide_additional_tooltip` component on Music Discs
    -   e.g. `jukebox_playable={song:'minecraft:precipice'}`, `jukebox_playable={song:'minecraft:precipice', show_in_tooltip:false}`

### Attributes

-   Attribute modifiers no longer have a UUID and name combination
-   Instead, attribute modifiers are now uniquely identified by a namespaced ID, similar to other resources
-   The ID of a modifier uniquely identifies it in the set of modifiers for a single attribute
    -   Using the same ID for different modifiers is allowed as long as the modifiers are for different attributes
-   Existing built-in modifiers will be upgraded to new IDs
-   Existing custom modifiers will be upgraded to the GUID as an ID in the `minecraft` namespace

#### `attribute` command

-   The `uuid` and `name` arguments have been replaced with a singular `id` argument

#### Item Stack Attribute Modifiers

-   The `uuid` and `name` fields have been removed.
-   Attribute Modifiers now have an `id` (namespaced ID) field
    -   This is a unique identifier per attribute for the modifier

#### Entity Attributes

-   Attributes are now stored as `attributes`
-   Attribute format:
    -   `id`, renamed from `Name`
    -   `base`, renamed from `Base`
    -   `modifiers`, renamed from `Modifiers`
        -   Now stores modifiers in the same format as modifiers in `attribute_modifiers` item stack components:
            -   `id`, replaces `UUID` and `Name`
            -   `amount`, renamed from `Amount`
            -   `operation`, renamed from `Operation`, now a named constant instead of an int:
                -   `add_value` - previously `0`
                -   `add_multiplied_base` - previously `1`
                -   `add_multiplied_total` - previously `2`

### Enchantments

#### Attribute Effects

Fields:

-   `name` & `uuid` have been removed, replaced by `id`
-   `id`: The namespaced ID of the Attribute Modifier to add
    -   This will be postfixed with the slot name when the enchanted item is equipped in a slot
    -   Must be unique to avoid different Enchantments (or other systems) interfering with each others

#### Entity Effect Types

##### `damage_item`

The damage is not applied to items held by players in creative mode.

##### Hit Block Parameters

-   Entities: `this`
-   Enchantment Level
-   Origin
-   Block State

#### Effect Components

-   `minecraft:hit_block`:
    -   Condition Context: changed to take a Hit Block Parameter - `this` is the entity hitting the Block

### Tags

#### Directory renames

-   Some registry types that used legacy datapack directory names (based on plural name of element) have been renamed to match registry name
-   Affected directories:
    -   `structures` -> `structure`
    -   `advancements` -> `advancement`
    -   `recipes` -> `recipe`
    -   `loot_tables` -> `loot_table`
    -   `predicates` -> `predicate`
    -   `item_modifiers` -> `item_modifier`
    -   `functions` -> `function`
    -   `tags/functions` -> `tags/function`

#### Item Tags

-   Removed `music_discs` item tag

#### Block Tags

-   `air`: All blocks that resemble air

#### Damage Type Tags

-   Removed `breeze_immune_to` damage type tag
-   Added `panic_environmental_causes`: Damage types that cause panic in aggressive animals that can panic, i.e. mobs that retaliate when attacked
-   Added `panic_causes`: Damage types that cause panic in passive animals, i.e. mobs that run away when attacked

### Predicates

#### Jukebox Playable Predicate

New item sub-predicate available as `jukebox_playable`.

-   Matcher for `jukebox_playable` component (like Music Discs)
-   Fields:
    -   `song` - optional id, list of ids or tag for jukebox song to be matched

#### Player Predicate

-   The `gamemode` field has been changed to accept a list of gamemodes

### Commands

-   Added `@n` entity selector, selecting the nearest entity
    -   This functions as `@e[sort=nearest,limit=1]`
    -   Additional requirements may still be provided; for example: `@n[type=pig]` will select the closest Pig

## Resource Pack Version 34

-   Added the `block.vault.reject_rewarded_player` sound event
-   Changes to Shaders

### Shaders

-   The `blend` block in core shader definitions has been removed, as it was not used
-   The `position_color_tex` shader has been removed, replaced with the pre-existing `position_tex_color`
-   The `glint_direct` shader has been removed, replaced with the pre-existing `glint` shader
-   The `armor_glint` shader has been removed, as it was unused

## Fixed bugs in 24w21a

-   [MC-67](https://bugs.mojang.com/browse/MC-67) Entities with passengers cannot travel through portals
-   [MC-31819](https://bugs.mojang.com/browse/MC-31819) Hunger saturation depletes on peaceful difficulty
-   [MC-116279](https://bugs.mojang.com/browse/MC-116279) Non-player entities going through Nether portal do not generate portal in Nether if none exists
-   [MC-151648](https://bugs.mojang.com/browse/MC-151648) Non-player entities cannot travel through unlinked nether portals
-   [MC-170103](https://bugs.mojang.com/browse/MC-170103) Untamed wolves only beg for food while being angry and jumping
-   [MC-260346](https://bugs.mojang.com/browse/MC-260346) Custom music discs cut off when vanilla disc would normally end
-   [MC-266290](https://bugs.mojang.com/browse/MC-266290) Double doors do not automatically form between waxed and unwaxed copper doors, even of the same variant
-   [MC-266586](https://bugs.mojang.com/browse/MC-266586) Trial chambers can spawn directly inside the deep dark biome
-   [MC-266626](https://bugs.mojang.com/browse/MC-266626) Breeze doesn't stop attacking the player when it enters on the same team
-   [MC-267967](https://bugs.mojang.com/browse/MC-267967) Breezes ignore the deflects\_projectiles entity type tag
-   [MC-268438](https://bugs.mojang.com/browse/MC-268438) Baby armadillos can still eat while rolled up
-   [MC-269034](https://bugs.mojang.com/browse/MC-269034) Wolves no longer teleport while trying to pathfind out of Lava
-   [MC-269351](https://bugs.mojang.com/browse/MC-269351) The Bolt Armor Trim cannot be duplicated with Waxed Copper Block
-   [MC-269370](https://bugs.mojang.com/browse/MC-269370) Sharp lag spike caused by incorrect upper limit on particles created by mace smash attack
-   [MC-269460](https://bugs.mojang.com/browse/MC-269460) Thorns enchantment doesn't work when entities are hit by wind charges
-   [MC-269964](https://bugs.mojang.com/browse/MC-269964) Ominous item spawners are missing an NBT load for spawn\_item\_after\_ticks
-   [MC-269988](https://bugs.mojang.com/browse/MC-269988) New potion effects don't apply their respective behaviors when creeper explodes
-   [MC-270024](https://bugs.mojang.com/browse/MC-270024) When drinking ominous bottles, bad omen of higher levels can be overriden by lower amplifiers
-   [MC-270377](https://bugs.mojang.com/browse/MC-270377) Wind charges can be hit and redirected the moment they are thrown
-   [MC-270573](https://bugs.mojang.com/browse/MC-270573) Mounted entities are immune to wind charge damage
-   [MC-270808](https://bugs.mojang.com/browse/MC-270808) Any item in the armor.body slot protects wolves from taking damage
-   [MC-271458](https://bugs.mojang.com/browse/MC-271458) Channeling tridents no longer summon lightning bolt every time hitting lightning rod under thunderstorm
-   [MC-271573](https://bugs.mojang.com/browse/MC-271573) Attribute Enchantments Don't Behave Properly on Armor
-   [MC-271634](https://bugs.mojang.com/browse/MC-271634) Custom enchantments don't appear in the creative menu
-   [MC-271718](https://bugs.mojang.com/browse/MC-271718) Crash when randomized\_int\_state\_provider is applied to blocks lacking the property
-   [MC-271753](https://bugs.mojang.com/browse/MC-271753) Crash due to overflow inside cost calculation in by\_cost\_with\_difficulty
-   [MC-271856](https://bugs.mojang.com/browse/MC-271856) Crossbows enchanted with Quick Charge do not benefit from its effects when used in the offhand
-   [MC-271868](https://bugs.mojang.com/browse/MC-271868) Frost walker replaces flowing water now
-   [MC-271901](https://bugs.mojang.com/browse/MC-271901) Entity effect "play\_sound" Field "pitch" value upper limit is 1.0 instead of 2.0
-   [MC-271911](https://bugs.mojang.com/browse/MC-271911) Frost walker no longer works with void or cave air
-   [MC-271914](https://bugs.mojang.com/browse/MC-271914) Soul speed enchantment doesn't emit particles when the entity is controlled by a player
-   [MC-272039](https://bugs.mojang.com/browse/MC-272039) Soul Speed uses durability in creative mode
-   [MC-272042](https://bugs.mojang.com/browse/MC-272042) If players have max health over 20 and die, when they respawn they will have 20 health instead of their max health
-   [MC-272043](https://bugs.mojang.com/browse/MC-272043) The game crashes when entities die while having the oozing effect
-   [MC-272075](https://bugs.mojang.com/browse/MC-272075) Attempting to step up while controlling entity and moving fast often glitches
-   [MC-272084](https://bugs.mojang.com/browse/MC-272084) Creepers with potion effects no longer create area effect clouds upon exploding
-   [MC-272182](https://bugs.mojang.com/browse/MC-272182) Knowledge Books no longer function properly with a stack size of 1 in survival/adventure mode

---

