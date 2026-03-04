# Minecraft 26.1 Snapshot 11

Tuesday rolls around once more! We're back in the shipping room for another 26.1 snapshot and like a wise man once said, this one goes to 11. This week spells polish and finishing touches on our upcoming game drop features, technical changes, as well as bug fixes.

Happy mining!

## Known Issue

-   If you minimize the game while in Fullscreen mode (by pressing Alt + Tab, for example) you can not maximize it again

## Changes

-   Fixed adult and baby Rabbit textures to be consistent with the other new textures
-   Pig sound variants now has sound for eating
-   Baby Goats now rotate their head when ramming
-   Baby Hoglin's mane now appears on both sides of the body texture
-   Fixed texture on the back of the baby Panda's head

### Trades

-   The Master Librarian no longer offers Name Tags
-   The Master Librarian will now offer Red Candles and Yellow Candles for the price of three Emeralds
-   The Wandering Trader will now offer Name Tags for the price of one Emerald

### Sounds

-   Updated the trumpet note block sound assets

## Technical Changes

-   The Data Pack version is now 100
-   The Resource Pack version is now 83

## Data Pack Version 100

### Pig Sound Variants

Eating sound customization is now supported through the new field `eat_sound` big variant sound sets

### Game Test Environments

**Added `timeline_attributes` definitions to set any number of timelines**

-   `timelines`: A list of timelines to set

### Block States

-   `rotation` property in default block state of Banners and Signs has been changed from `0` to `8`

> **Developer's Note**: Default block state is used in very few contexts, most notably `/setblock` without any properties. This change was done to align default orientation of those blocks with other ones (like Skulls or Dispensers)

### Loot Tables

-   Removed Name Tag from Ancient Cities and Woodland Mansions

### World Generation

-   Block state providers now have a new type called `rule_based_state_provider`
    -   This was previously a separately parsed type but is now instead a sub-type of block state providers
    -   They can now be used in any other feature configurations as a block state provider and are no longer unique to the `disk` feature
    -   Format:
        -   `fallback` - An optional block state provider
        -   `rules` - A list of rules
            -   `if_true` - A block predicate that checks the block position before providing the block
            -   `then` - A block state provider

### Tags

**Block Tags**

-   Added `#prevents_nearby_leaf_decay` which defines what block types prevent leaf blocks from decaying within a taxicab distance of 6 blocks

## Resource Pack Version 83

-   Item model format now supports transformation for individual sub-models

### Sounds

-   Added new sound events for the Pig:
    -   `entity.baby_pig.eat`
    -   `entity.pig_mini.eat`
    -   `entity.pig_big.eat`
    -   `entity.pig.eat`

### Item Models

-   The `minecraft:model`, `minecraft:special`, `minecraft:range_dispatch`, `minecraft:composite`, `minecraft:select`, `minecraft:condition` item model types now have `transformation` fields
    -   Those fields have the same format as the `transformation` field on the `minecraft:display` entity, i.e. either an array of 16 numbers representing a matrix or structure with decomposed translation, scale and rotation info
    -   For types with children (`minecraft:range_dispatch`, `minecraft:composite`, `minecraft:select`, `minecraft:condition`), the transformation will be composed with the transformation of the children, except for `minecraft:bundle/selected_item`
    -   Model transformations will be applied AFTER item display transformations (i.e. `display` section in model files)
-   The transformations for some special item models (types referenced by the `minecraft:special` item model) have been extracted to item models itself
    -   Affected special model types:
        -   `minecraft:bed`
        -   `minecraft:banner`
        -   `minecraft:conduit`
        -   `minecraft:copper_colem_statue`
        -   `minecraft:head`
        -   `minecraft:player_head`
        -   `minecraft:shulker_box`
        -   `minecraft:shield`
        -   `minecraft:trident`
        -   `minecraft:standing_sign`
        -   `minecraft:hanging_sign`

**`minecraft:bell` Special Model Type**

-   New special model type that renders the animated part of a Bell block
-   No fields

**`minecraft:book` Special Model Type**

-   New special model type that renders a book that normally is a part of Enchanting Table and Lectern
-   Fields:
    -   `open_angle` - angle (in degrees) between book cover and book centerline (`0` means closed, `90` means open flat)
    -   `page1`, `page2` - the positions of two pages inside the book
        -   `0.0` means the page is in the leftmost position, `1.0` means the page in the rightmost position

**`minecraft:bed` Special Model Type**

-   The model now renders only one half of the Bed
-   To render both halves, use a `minecraft:composite` model
-   New fields:
    -   `part` - one of: `head`, `foot`

**`minecraft:banner` Special Model Type**

-   New field:
    -   `attachment` - selects a model to be used, one of `wall`, `ground`, default: `ground`

**`minecraft:chest` Special Model Type**

-   New field:
    -   `chest_type` - selects a model to be used, one of `single`, `left`, `right`, default: `single`

**`minecraft:hanging_sign` Special Model Type**

-   New field:
    -   `attachment` - selects a model to be used, one of `wall`, `ceiling`, `ceiling_middle`, default: `ceiling_middle`

**`minecraft:standing_sign` Special Model Type**

-   New field:
    -   `attachment` - selects a model to be used, one of `wall`, `ground`, default: `ground`

**`minecraft:shulker_box` Special Model Type**

;;=;; Removed the `orientation` field

### Block State Rendering

-   Some changes have been made to the way blocks states render in places like Enderman-held blocks, Block Display entities, etc. (but not falling blocks or Pistons)
    -   Enchanting Table will now show a closed book on the top of the block
    -   Blocks that use special renderers (like Chests, Banners, Skulls) should now respect block state properties:
        -   Rendering now respects the `rotation` and `facing` properties (where applicable)
        -   Beds now only render one half of the model, depending on the `part` property
        -   Copper Golem Statues will now respect the `copper_golem_pose` property
        -   Wall and freestanding Signs, Hanging Sign, Banners and Skulls/Heads will now have separate models
        -   Chests now respect `part` properties (where applicable)
    -   Note: in general, all block states should look the same when rendered on a Block Display as they look when placed in world, except:
        -   Fluids
        -   End Gateway
        -   End Portal

## Fixed bugs in 26.1 Snapshot 11

-   [MC-199975](https://bugs.mojang.com/browse/MC-199975) Endermen holding bells or bell block display entities only render the bell frame
-   [MC-231663](https://bugs.mojang.com/browse/MC-231663) Dragon eggs do not check whether there is a block under their destination when teleporting
-   [MC-275014](https://bugs.mojang.com/browse/MC-275014) Weathered and oxidized copper bulbs cast stronger shadows on themselves when lit with smooth lighting enabled
-   [MC-301003](https://bugs.mojang.com/browse/MC-301003) The bell part of bells worn on copper golems' "saddle" is not visible
-   [MC-303344](https://bugs.mojang.com/browse/MC-303344) Tooltips for selected items in dialogs are displayed even when the item isn't being hovered over
-   [MC-304683](https://bugs.mojang.com/browse/MC-304683) Wandering traders don't spawn in single biome snowy plains worlds
-   [MC-304796](https://bugs.mojang.com/browse/MC-304796) Hovering over a disabled slider shows the pointing hand cursor instead of the forbidden cursor
-   [MC-305797](https://bugs.mojang.com/browse/MC-305797) The texture of the warm piglet contains unused pixels
-   [MC-305857](https://bugs.mojang.com/browse/MC-305857) Entity hitboxes now move jaggedly when the game is frozen
-   [MC-306082](https://bugs.mojang.com/browse/MC-306082) The back texture of one of baby woods wolves' legs is inconsistent with the other three legs
-   [MC-306110](https://bugs.mojang.com/browse/MC-306110) The side textures of black, white splotched, killer, and Toast rabbits' heads extend to the bottom of their heads
-   [MC-306180](https://bugs.mojang.com/browse/MC-306180) Hitting a rolled up baby armadillo causes its legs to stick out and z-fight with the shell
-   [MC-306190](https://bugs.mojang.com/browse/MC-306190) The game closes when upgrading a world fails
-   [MC-306303](https://bugs.mojang.com/browse/MC-306303) Plains zombie villagers use the texture of their baby variant
-   [MC-306309](https://bugs.mojang.com/browse/MC-306309) Some new animal sound variants are missing
-   [MC-306312](https://bugs.mojang.com/browse/MC-306312) Some strings introduced in 26.1 Snapshot 7 are grammatically incorrect
-   [MC-306466](https://bugs.mojang.com/browse/MC-306466) The back texture of baby pandas' heads has a black stripe on one of its edges
-   [MC-306472](https://bugs.mojang.com/browse/MC-306472) The texture of chainmail helmets on baby humanoid mobs has no transparent pixels on its top, unlike on adult mobs
-   [MC-306483](https://bugs.mojang.com/browse/MC-306483) Golden dandelions do not prevent baby trader llamas from despawning
-   [MC-306520](https://bugs.mojang.com/browse/MC-306520) Baby donkeys and baby mules are offset from their hitbox, and their tail is offset from their body
-   [MC-306607](https://bugs.mojang.com/browse/MC-306607) Endermen now display the block-holding pose even when empty-handed
-   [MC-306608](https://bugs.mojang.com/browse/MC-306608) Glow item frames now resemble item frames
-   [MC-306625](https://bugs.mojang.com/browse/MC-306625) The "Programmer Art" and "High Contrast" resource packs are listed as incompatible
-   [MC-306639](https://bugs.mojang.com/browse/MC-306639) The worried baby panda's model is broken when hiding its face during a thunderstorm
-   [MC-306676](https://bugs.mojang.com/browse/MC-306676) The bottom texture of snifflets is made up of solid colors

---

# Minecraft 26.1 Snapshot 10

Another Tuesday, another snapshot! This week's release brings you some helpful new particles designed to better tell if your golden dandelion is keeping your mobs young or if you're about to reintroduce the concept of aging into their blocky lives. We've also shrunk baby zombie mob heads and fixed a collection of bugs, as we always do.

Happy mining!

## Changes

-   Fix pixel gap in Snifflet texture
-   Fix Strider baby not having its bristles animated
-   Striders now correctly inherit the warmth of the Strider they are standing on, matching Bedrock
-   Reduced the head size of the following baby mob models:
    -   Zombie
    -   Husk
    -   Drowned
-   Golden Dandelion now has different particles depending on if it is used to start or stop aging
    -   When aging is stopped green particles moving downwards will be shown
    -   When aging is started again green particles moving upwards will be shown
-   Small Armor Stand now displays correctly by using the adult armor and scaling it down

### UI

-   If there are no screens open, IME input will be canceled
-   IME will be opened when a text input gains focus and closed when a text input loses focus
-   `sound_cache` debug entry has been added

## Technical Changes

-   The Data Pack version is now 99.3
-   The Resource Pack version is now 82

## Data Pack Version 99.3

### Particles

-   Added `pause_mob_growth` - particles showing on a baby mob which has had its aging stopped using a Golden Dandelion
-   Added `reset_mob_growth` - particles showing on a baby mob which has had its aging reset and started using a Golden Dandelion

## Resource Pack Version 82

-   Updated textures for baby Zombie, baby Husk and Gurgle with smaller heads

## Fixed bugs in 26.1 Snapshot 10

-   [MC-91132](https://bugs.mojang.com/browse/MC-91132) No cross-platform CJK IME support
-   [MC-222949](https://bugs.mojang.com/browse/MC-222949) You can use tridents enchanted with riptide while riding entities
-   [MC-305369](https://bugs.mojang.com/browse/MC-305369) Trying to attach a leash to a fence outside its reach places a ghost leash knot and plays a sound
-   [MC-305471](https://bugs.mojang.com/browse/MC-305471) Cacti appear with seams on the edges and corners when using higher resolution texture packs with mipmaps enabled
-   [MC-305494](https://bugs.mojang.com/browse/MC-305494) Rabbits receive damage if they jump when there's a block above them
-   [MC-305507](https://bugs.mojang.com/browse/MC-305507) Baby cats' model is not scaled
-   [MC-306276](https://bugs.mojang.com/browse/MC-306276) Worried pandas no longer shake and hide their faces during thunderstorms
-   [MC-306300](https://bugs.mojang.com/browse/MC-306300) The riding positions of baby zombies, husks, drowned, piglins, zombified piglins, and zombie villagers are offset, causing them to visually float
-   [MC-306304](https://bugs.mojang.com/browse/MC-306304) The legs of baby zombies, husks, drowned, piglins, zombified piglins, and zombie villagers clip through their worn armor when their limbs move
-   [MC-306346](https://bugs.mojang.com/browse/MC-306346) Baby piglin and zombified piglin legs don't move the same way as their adult counterparts do
-   [MC-306361](https://bugs.mojang.com/browse/MC-306361) Hollow spaces don't render for a while when moving into a block in Spectator mode
-   [MC-306376](https://bugs.mojang.com/browse/MC-306376) Armor now appears incorrectly on small armor stands
-   [MC-306454](https://bugs.mojang.com/browse/MC-306454) The legs of baby striders detach from their bodies when attacked
-   [MC-306468](https://bugs.mojang.com/browse/MC-306468) The IME pre-edit window doesn't show up in the Creative mode inventory
-   [MC-306486](https://bugs.mojang.com/browse/MC-306486) Using an IME keyboard makes some inputs not register
-   [MC-306501](https://bugs.mojang.com/browse/MC-306501) Changing game rules from the world creation screen has no effect
-   [MC-306539](https://bugs.mojang.com/browse/MC-306539) Entities now appear darker than blocks on brightness values other than "Bright"
-   [MC-306565](https://bugs.mojang.com/browse/MC-306565) Farmers now sell 4 cookies instead of 18

---

# Minecraft 26.1 Snapshot 9

A snapshot on a Wednesday, how very nostalgic! We're releasing 26.1 Snapshot 9 today to address two issues introduced in yesterday's snapshot - in particular, a crash that would occur when any entity traveled outside of the vertical boundaries of the world. (That's a total edge-case, right?)

This snapshot also addresses noisy kittens and the pre-edit display showing incorrectly when using IME to input text in-game.

The sky is no longer the limit! Happy exploring!

## Fixed bugs in 26.1 Snapshot 9

-   [MC-305579](https://bugs.mojang.com/browse/MC-305579) Kittens repeatedly meow when snuggled up in bed
-   [MC-306456](https://bugs.mojang.com/browse/MC-306456) The game crashes when an entity is outside the world height limits
-   [MC-306479](https://bugs.mojang.com/browse/MC-306479) Entity shadows are elevated when a below;;_;;name scoreboard objective is active

---

# Minecraft 26.1 Snapshot 8

Get ready to meet the last baby mobs waddling into testing! This week's snapshot brings you the final gameplay features of our upcoming drop. Happy mining!

## Changes

-   Updated the visuals of more baby mobs
-   Deepslate can now be directly crafted into their cobbled, polished, brick, and tile variants in the Stonecutter
-   Stone can now be directly crafted into cobbled variants in the Stonecutter
-   Adult horse's blackdot markings have been updated to be visually closer to the new baby horse markings
-   Updated some of the sound assets for the adult sound variants
-   Fix a bug where Cat variant sounds `stray_ambient` and `purreow` weren't played

### Baby Mobs

-   Updated visuals for the following mobs:
    -   Panda
    -   Hoglin
    -   Zoglin
    -   Strider
    -   Snifflet
-   Hitboxes have been re-adjusted to be able to fit in spaces 1 block high and 0.5 blocks wide for the following mobs:
    -   Zombie
    -   Husk
    -   Drowned
    -   Piglin
    -   Zombified Piglin
    -   Villager
    -   Zombie Villager

### Creative Mode

-   Using Ctrl + Pick input as an operator on players and mannequins will now show the same results as executing the `/fetchprofile` command for this entity would

### User Interface

-   Input Method Editors (IME) candidates will now be shown in-game (on supported platforms, currently Windows and macOS) above currently edited text field
-   Fullscreen no longer uses exclusive mode

**Debug Screen**

-   Added a new entry called `detailed_memory` with additional information about used memory

### Default JVM Options

-   Decreased the initial heap size to 2GB

> **Developer's Note**: _The intention of this change is to reduce the amount of crashes we're seeing in the latest snapshots. If you're experiencing crashes, please refer to the [help article](https://help.minecraft.net/hc/en-us/articles/39083573916941-Fix-Minecraft-Java-Edition-Game-Crashes-by-Checking-Memory-Allocation) for more information on how to configure memory allocation._

## Technical Changes

-   The Data Pack version is now 99.2
-   The Resource Pack version is now 81.1

## Data Pack Version 99.2

-   Changes to the `minecraft:nbt` text component format

### Commands

**Changes to `/fetchprofile`**

-   Added a new `entity` subcommand that will print profile information from entity in world
    -   Syntax: `/fetchprofile entity <single entity selector>`
    -   If targeted entity does not have profile (currently only Players and Mannequins do) this command will fail
    -   Note that the profile is shown as-is - no additional resolving is done

### Text components

**`minecraft:selector`**

-   Field `selector` no longer accepts trailing data after a selector

**`minecraft:nbt`**

-   Tags resolved with the `minecraft:nbt` text component when the `interpret` field is set to `false` are now pretty-printed instead of being flattened into a single `text` component
-   Contents of the `nbt` and `block` fields are no longer silently rejected when parsing fails
-   Field `entity` no longer accepts trailing data after a selector
-   A new option called `plain` has been added to remove styling from pretty-printed text
    -   The `plain` and `interpret` options can't both be enabled at the same time

## Resource Pack Version 81.1

### UI Sprites

-   Added new UI sprites:
    -   `gui/sprites/widget/preedit.png` for IME preedit overlay background

### Entity Textures

-   Added new entity textures:
    -   `entity/hoglin/hoglin_baby.png`
    -   `entity/hoglin/zoglin_baby.png`
    -   `entity/strider/strider_baby.png`
    -   `entity/strider/strider_cold_baby.png`
    -   `entity/sniffer/snifflet.png`
    -   `entity/panda/aggresive_panda_baby.png`
    -   `entity/panda/brown_panda_baby.png`
    -   `entity/panda/lazy_panda_baby.png`
    -   `entity/panda/playful_panda_baby.png`
    -   `entity/panda/weak_panda_baby.png`
    -   `entity/panda/worried_panda_baby.png`
    -   `entity/panda/panda_baby.png`

## Fixed bugs in 26.1 Snapshot 8

-   [MC-98631](https://bugs.mojang.com/browse/MC-98631) The heights of shields in first person are different depending on what hand you have them held in
-   [MC-99647](https://bugs.mojang.com/browse/MC-99647) The "below;;_;;name" scoreboard display slot doesn't work with non-player entities
-   [MC-129886](https://bugs.mojang.com/browse/MC-129886) Trying to place a block underneath min;;_;;y does not give an error message
-   [MC-178713](https://bugs.mojang.com/browse/MC-178713) Bone meal can be used on certain plants at build height, but they don't grow
-   [MC-184432](https://bugs.mojang.com/browse/MC-184432) There is no warning when plants are bonemealed, but cannot grow above or below world height limits
-   [MC-184433](https://bugs.mojang.com/browse/MC-184433) When applying bone meal to grass / ferns / nether fungi at the upper build limit, there is no warning, and the taller part of the plant is cut off
-   [MC-254785](https://bugs.mojang.com/browse/MC-254785) Bone meal is used when clicked on a bamboo stalk with a block above it
-   [MC-264155](https://bugs.mojang.com/browse/MC-264155) Bone meal doesn't work on grass blocks beneath cave air or void air
-   [MC-305103](https://bugs.mojang.com/browse/MC-305103) The panorama sometimes spins too fast when saving or loading a world
-   [MC-305714](https://bugs.mojang.com/browse/MC-305714) "/time set " is unable to decrease time
-   [MC-305989](https://bugs.mojang.com/browse/MC-305989) Golden dandelions do not stop baby brown mooshrooms from aging
-   [MC-306019](https://bugs.mojang.com/browse/MC-306019) Items added to #cauldron;;_;;can;;_;;remove;;_;;dye by datapacks can't be undyed
-   [MC-306196](https://bugs.mojang.com/browse/MC-306196) Age-locked baby bees age while in the hive
-   [MC-306314](https://bugs.mojang.com/browse/MC-306314) The glowing effect is no longer visible
-   [MC-306319](https://bugs.mojang.com/browse/MC-306319) The content of the chat restrictions screen can shift off-center and overflow the edge of the game window when the game window is shrunken horizontally while the chat restrictions screen is open
-   [MC-306321](https://bugs.mojang.com/browse/MC-306321) The chat and chat restrictions screen don't update when changing the client chat option from that screen
-   [MC-306326](https://bugs.mojang.com/browse/MC-306326) Various block animations and particles in motion now jitter while the game is frozen
-   [MC-306333](https://bugs.mojang.com/browse/MC-306333) Grass blocks in dark forests no longer have a side overlay if Biome Blend is disabled
-   [MC-306342](https://bugs.mojang.com/browse/MC-306342) Stray adult cats play incorrect sounds
-   [MC-306345](https://bugs.mojang.com/browse/MC-306345) Baby zombies, gurgles, baby husks, and baby zombie villagers can no longer traverse one-block-high passages
-   [MC-306364](https://bugs.mojang.com/browse/MC-306364) Blocks rendered as block entities are now invisible in sections without regularly rendered blocks

---

# Minecraft 26.1 Snapshot 7

Sound the new trumpet note block instrument, it's Tuesday! With this week's release, our undead and hostile babies have a new scary strategy: looking even more adorable! The baby zombie, husk, zombie villager, piglin, zombified piglin, and drowned are storming the snapshot looking deceivingly innocent and huggable. Just know you can only truly trust the baby villagers! Oh, we've also added sound variants for some of your favorite adult mobs!

On the technical side of things we are, among other things, making changes to how chunks are rendered, as well as improving support for block translucency in resource packs. For the full list of changes, browse the changelog below!

Happy mining!

## New Features

-   Added adult sound variants for the following animals:
    -   Cats have a new variant called `royal`
    -   Pigs have new variants called `mini` and `big`
    -   Cows have a new variant called `moody`
    -   Chickens have a new variant called `picky`
    -   The original sounds of each animal are used for the variant called `classic`
    -   Every one of these animals will have a random sound variant assigned to it from the new variants and the original one
-   Added a trumpet instrument for when using a Note Block that is placed on a Copper Block
    -   The sound is different based on the oxidation level of the Copper Block
-   Golden Dandelion can now be used on Hoglin babies

## Changes

-   Revamped the visuals of more baby mobs
-   Fixed issue where Baby Axolotl animations were being disrupted by walking animation

### Baby Mobs

-   Updated the models and textures of the following baby mobs:
    -   Zombie
        -   Increased the bounding box of baby Zombie to better fit the new model
    -   Husk
        -   Increased the bounding box of baby Husk to better fit the new model
    -   Drowned
        -   Increased the bounding box of baby Drowned to better fit the new model
    -   Piglin
        -   Increased the bounding box of baby Piglin to better fit the new model
    -   Zombified Piglin
        -   Increased the bounding box of baby Zombified Piglin to better fit the new model
    -   Villager
        -   Increased the bounding box of baby Villager to better fit the new model
    -   Zombie Villager
        -   Increased the bounding box of baby Zombie Villager to better fit the new model

### UI

-   Changes to how the chat screen is handled when it's restricted by settings

**Chat**

-   The chat screen can now always be opened, even when chatting is restricted by settings
    -   When the chat screen is open, specific actions and message types may still be restricted
    -   Information about the restrictions (if there are any) is displayed on top of the chat box and above the chat input when the chat screen is open
    -   The same information can also be accessed in World Settings screen
-   Chat entries from client actions like taking screenshots will now be displayed even when messages from players and servers are restricted
-   Changing chat settings will now hide all messages of restricted types and discard any new ones
-   The handling of chat messages on a published local server is now more consistent with dedicated servers in regard to chat settings

## Technical Changes

-   The Data Pack version is now 99.1
    
-   The Resource Pack version is now 81
    
-   The internals of how chunk geometry data is stored in GPU memory and how they are rendered has been changed
    

> **Developer's Note**: _If you experience any visual bugs, performance degradation or crashes, please report it to us on our [bug tracker](https://bugs.mojang.com)._

## Data Pack Version 99.1

-   Added data-driven registry for sound variants for Pig, Cat, Cow and Chicken

### Data-driven Mob Sound Variants

### Cat Sound Variants

-   Cat sound variants can be data-driven by adding entries to data//cat;;_;;sound;;_;;variant/.json
-   The file contains two sound sets defining `adult_sounds` and `baby_sounds`
-   Each sound set contains the following fields which correspond to sound events to use for the specific behaviour:
    -   `ambient_sound`
    -   `stray_ambient_sound`
    -   `hiss_sound`
    -   `hurt_sound`
    -   `death_sound`
    -   `eat_sound`
    -   `beg_for_food_sound`
    -   `purr_sound`
    -   `purreow_sound`

### Pig Sound Variants

-   Pig sound variants can be data-driven by adding entries to data//pig;;_;;sound;;_;;variant/.json
-   The file contains two sound sets defining `adult_sounds` and `baby_sounds`
-   Each sound set contains the following fields which correspond to sound events to use for the specific behaviour:
    -   `ambient_sound`
    -   `hurt_sound`
    -   `death_sound`
    -   `step_sound`

### Cow Sound Variants

-   Cow sound variants can be data-driven by adding entries to data//cow;;_;;sound;;_;;variant/.json
-   Each sound variant contains the following fields which correspond to sound events to use for the specific behaviour:
    -   `ambient_sound`
    -   `hurt_sound`
    -   `death_sound`
    -   `step_sound`

### Chicken Sound Variants

-   Cow sound variants can be data-driven by adding entries to data//chicken;;_;;sound;;_;;variant/.json
-   The file contains two sound sets defining `adult_sounds` and `baby_sounds`
-   Each sound set contains the following fields which correspond to sound events to use for the specific behaviour:
    -   `ambient_sound`
    -   `hurt_sound`
    -   `death_sound`
    -   `step_sound`

## Resource Pack Version 81

-   Updated `mule_baby.png` and `donkey_baby.png` to fit model properly

### Block Model Format

-   Any block model can now support cutout or translucent (partially transparent pixels) textures
    -   Whether a quad is rendered in the cutout or translucent render pass is determined by the contents of its assigned sprite
        -   Any sprite with translucent (partially transparent) pixels will be assigned to the "translucent" pass
        -   Any sprite with fully transparent pixels will be assigned to the "cutout" pass
        -   All other sprites are assigned to the "solid" pass
    -   Note: the assigned render pass also implies rendering order: all solid geometry is rendered before all cutout geometry, which is rendered before all translucent geometry
-   The format of the `textures` map has been updated:
    -   Non-string entries will now be rejected, instead of interpreted as strings
    -   Alongside the previous inline sprite ID form, entries can now be defined as an object with fields:
        -   `sprite` - the sprite ID
        -   `force_translucent` - optional boolean, `true` if any geometry with this texture should be forced into the "translucent" pass
            -   This is useful for example for blocks that don't have any translucent pixels, but use the `mean` mipmap strategy
            -   Default: `false`

### Entity Textures

-   Added new entity textures:
    -   `entity/villager/villager_baby.png`
    -   `entity/villager/baby/desert.png`
    -   `entity/villager/baby/jungle.png`
    -   `entity/villager/baby/plains.png`
    -   `entity/villager/baby/savanna.png`
    -   `entity/villager/baby/snow.png`
    -   `entity/villager/baby/swamp.png`
    -   `entity/villager/baby/taiga.png`
    -   `entity/zombie/drowned_baby.png`
    -   `entity/zombie/drowned_outer_layer_baby.png`
    -   `entity/zombie/husk_baby.png`
    -   `entity/zombie/zombie_baby.png`
    -   `entity/zombie_villager/zombie_villager_baby.png`
    -   `entity/zombie_villager/baby/desert.png`
    -   `entity/zombie_villager/baby/jungle.png`
    -   `entity/zombie_villager/baby/plains.png`
    -   `entity/zombie_villager/baby/savanna.png`
    -   `entity/zombie_villager/baby/snow.png`
    -   `entity/zombie_villager/baby/swamp.png`
    -   `entity/zombie_villager/baby/taiga.png`
    -   `entity/piglin/piglin_baby.png`
    -   `entity/piglin/zombiefied_piglin_baby.png`
    -   `entity/equipment/humanoid_baby/chainmail.png`
    -   `entity/equipment/humanoid_baby/copper.png`
    -   `entity/equipment/humanoid_baby/diamond.png`
    -   `entity/equipment/humanoid_baby/gold.png`
    -   `entity/equipment/humanoid_baby/iron.png`
    -   `entity/equipment/humanoid_baby/leather_overlay.png`
    -   `entity/equipment/humanoid_baby/leather.png`
    -   `entity/equipment/humanoid_baby/netherite.png`
    -   `entity/equipment/humanoid_baby/turtle_scute.png`

### Sounds

-   Added new sound variants: one for adult Cat, adult Chicken, adult Cow and two for adult Pig
-   Added new sound events for the Cat:
    -   `entity.cat_royal.ambient`
    -   `entity.cat_royal.hiss`
    -   `entity.cat_royal.hurt`
    -   `entity.cat_royal.death`
    -   `entity.cat_royal.eat`
    -   `entity.cat_royal.beg_for_food`
    -   `entity.cat_royal.purr`
    -   `entity.cat_royal.purreow`
    -   `entity.cat_royal.stray_ambient`
-   Added new sound events for the Pig:
    -   `entity.pig_mini.ambient`
    -   `entity.pig_mini.hurt`
    -   `entity.pig_mini.death`
    -   `entity.pig_big.ambient`
    -   `entity.pig_big.hurt`
    -   `entity.pig_big.death`
-   Added new sound events for the Chicken:
    -   `entity.chicken_picky.ambient`
    -   `entity.chicken_picky.death`
    -   `entity.chicken_picky.hurt`
    -   `entity.chicken_picky.step`
-   Added new sound events for the Cow:
    -   `entity.cow_moody.ambient`
    -   `entity.cow_moody.death`
    -   `entity.cow_moody.hurt`
    -   `entity.cow_moody.step`
-   Added new sound events for the trumpet instrument:
    -   `block.note_block.trumpet`
    -   `block.note_block.trumpet_exposed`
    -   `block.note_block.trumpet_oxidized`
    -   `block.note_block.trumpet_weathered`

### Shaders & Post-process Effects

> **Developer's Note**: _Although it is possible in Resource Packs, overriding Core Shaders is considered as unsupported and not an intended Resource Pack feature. These shaders exist as part of the internal implementation of the game, and as such, may change at any time as the game's internals evolve. We understand that overriding Core Shaders is used for very cool Resource Pack features, many of which lack supported alternatives. We would like to provide better, supported alternatives in the future._

-   The `block.vsh` and `terrain.vsh` no longer receive the `Normal` vertex attribute

## Fixed bugs in 26.1 Snapshot 7

-   [MC-13187](https://bugs.mojang.com/browse/MC-13187) Water in water cauldrons is not transparent
-   [MC-257362](https://bugs.mojang.com/browse/MC-257362) Particles from breaking frogspawn are transparent
-   [MC-263488](https://bugs.mojang.com/browse/MC-263488) The item texture of pink petals has a misplaced transparent pixel
-   [MC-299730](https://bugs.mojang.com/browse/MC-299730) Dumping textures while using a TTF font crashes the game
-   [MC-305492](https://bugs.mojang.com/browse/MC-305492) Baby wolves have visible z-fighting
-   [MC-305501](https://bugs.mojang.com/browse/MC-305501) Baby wolves render their collar incorrectly all over their body
-   [MC-305515](https://bugs.mojang.com/browse/MC-305515) Rabbits float when panicking
-   [MC-305545](https://bugs.mojang.com/browse/MC-305545) The "wolf;;_;;baby" and "wolf;;_;;tame;;_;;baby" textures are identical
-   [MC-305580](https://bugs.mojang.com/browse/MC-305580) Baby zombie horses and baby skeleton horses grow into adults, unlike other baby undead mobs
-   [MC-305583](https://bugs.mojang.com/browse/MC-305583) The right side of the texture of British shorthair kittens overlaps the back of the head
-   [MC-305591](https://bugs.mojang.com/browse/MC-305591) The texture of temperate piglets uses the wrong color for a part of their body
-   [MC-305644](https://bugs.mojang.com/browse/MC-305644) Piglet heads are off-center
-   [MC-305984](https://bugs.mojang.com/browse/MC-305984) The legs of baby donkeys and baby mules extend into the ground by one pixel, mapped to an irregular texture area
-   [MC-305986](https://bugs.mojang.com/browse/MC-305986) “subtitles.entity.baby;;_;;chicken.hurt” displays as a raw translation key
-   [MC-305999](https://bugs.mojang.com/browse/MC-305999) Entities in any light level besides 0 render fully bright
-   [MC-306008](https://bugs.mojang.com/browse/MC-306008) Baby horse legs are not connected to the body correctly when it rears up
-   [MC-306034](https://bugs.mojang.com/browse/MC-306034) "subtitles.entity.baby;;_;;horse.land" displays as a raw translation key
-   [MC-306097](https://bugs.mojang.com/browse/MC-306097) Golden dandelions don't make mobs persistent
-   [MC-306136](https://bugs.mojang.com/browse/MC-306136) Baby pandas float in the air when fed bamboo after being fed golden dandelions
-   [MC-306137](https://bugs.mojang.com/browse/MC-306137) Players can feed baby pandas after feeding them golden dandelions
-   [MC-306157](https://bugs.mojang.com/browse/MC-306157) Getting the average water color of blocks takes up about half of the chunk render compile times
-   [MC-306161](https://bugs.mojang.com/browse/MC-306161) The color of baby turtles' front legs is inconsistent with the back legs
-   [MC-306172](https://bugs.mojang.com/browse/MC-306172) Golden dandelions don't work on baby hoglins
-   [MC-306185](https://bugs.mojang.com/browse/MC-306185) The podzol patches in the Old Growth Pine Taiga and Old Growth Spruce Taiga biomes are now generated incorrectly
-   [MC-306195](https://bugs.mojang.com/browse/MC-306195) Camel husks with the "Age" tag set below -24000 use their removed baby variant's hitbox size and animation speed
-   [MC-306201](https://bugs.mojang.com/browse/MC-306201) Baby turtles' legs now z-fight
-   [MC-306207](https://bugs.mojang.com/browse/MC-306207) The world upgrade tooltips in the world selection screen appear with any world after selecting a world that needs to be upgraded
-   [MC-306222](https://bugs.mojang.com/browse/MC-306222) Some strings introduced in 26.1 Snapshot 6 are grammatically incorrect

---

