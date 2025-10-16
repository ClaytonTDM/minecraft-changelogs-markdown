# Minecraft Snapshot 20w14a

Even though we just added [every update imaginable to Minecraft](https://www.minecraft.net/article/every-update-imaginable-coming-minecraft), we thought that it might be good to pick up the Nether Update snapshots from where we left off. This snapshot introduces the Zoglins!

## New Features in 20w14a

-   Hoglins that somehow end up in the Overworld become Zoglins fairly quickly - but who would ever bring a Hoglin to the Overworld?
-   Compasses can now be enchanted with Curse of Vanishing

​

### Zoglins

​

-   Zoglins are zombified hoglins - the result of bringing a hoglin into the overworld
-   Unlike hoglins they can't be bred or fed, and they don't care about warped fungus
-   Beware - these beasts are raving mad and attack just about everything they see!

## Changes in 20w14a

-   The main menu background is now in the Nether
-   The General statistics list is now alphabetically sorted
-   Strider balancing

### Strider Balancing

-   Strider speed while mounted has been significantly increased to more closely resemble boat speeds
-   Warped Fungus on a Stick now has 100 max item damage, and only takes 1 damage per Strider consume
-   When Warped Fungus on a Stick is used with Striders, the boost is a great way to traverse the lava seas

​

## Technical Changes in 20w14a

-   The compass now has `LodestonePos`, `LodestoneDimension` and `LodestoneTracked` data fields. If `LodestoneTracked` is zero, the game will skip checking for a Lodestone in the specified position.
-   Attributes are now added to game registry, similar to items, sound events, etc.
-   Region files are now opened in synchronous mode to increase reliability

​

### Attributes

Attributes have been moved to game registry. That means few changes: ​

-   Items and entities will no longer keep unknown attributes
-   Names of some attributes have been renamed to meet resource location requirements

#### Renames:

-   `generic.maxHealth` 🡆 `generic.max_health`
-   `zombie.spawnReinforcements` 🡆 `zombie.spawn_reinforcements`
-   `horse.jumpStrength` 🡆 `horse.jump_strength`
-   `generic.followRange` 🡆 `generic.follow_range`
-   `generic.knockbackResistance` 🡆 `generic.knockback_resistance`
-   `generic.movementSpeed` 🡆 `generic.movement_speed`
-   `generic.flyingSpeed` 🡆 `generic.flying_speed`
-   `generic.attackDamage` 🡆 `generic.attack_damage`
-   `generic.attackKnockback` 🡆 `generic.attack_knockback`
-   `generic.attackSpeed` 🡆 `generic.attack_speed`
-   `generic.armorToughness` 🡆 `generic.armor_toughness`

## Fixed bugs in 20w14a

-   [MC-83039](https://bugs.mojang.com/browse/MC-83039) End City chests generate destroyed, items on the ground
-   [MC-91893](https://bugs.mojang.com/browse/MC-91893) Missing subtitles for various sounds
-   [MC-109248](https://bugs.mojang.com/browse/MC-109248) Extended piston head not removed when /setblock is used to place a different piston base.
-   [MC-115750](https://bugs.mojang.com/browse/MC-115750) Advancement "Monster Hunter" (kill;;_;;a;;_;;mob) is not granted for killing certain hostile mobs
-   [MC-116756](https://bugs.mojang.com/browse/MC-116756) Reversed and inconsistent subtitles for iron trapdoor
-   [MC-124428](https://bugs.mojang.com/browse/MC-124428) Firework star crashes game if there's an int array but no colors
-   [MC-125055](https://bugs.mojang.com/browse/MC-125055) Igloo generates with brewing stand and flower pot contents dropped (and placed)
-   [MC-127316](https://bugs.mojang.com/browse/MC-127316) General statistics out of order
-   [MC-133049](https://bugs.mojang.com/browse/MC-133049) Compasses don't point to the correct location when in an item frame on the ground or on the ceiling
-   [MC-154427](https://bugs.mojang.com/browse/MC-154427) Villagers only pick up four stacks of items
-   [MC-164129](https://bugs.mojang.com/browse/MC-164129) Ender dragon inner hitboxes are rendered offset by approximately 200 blocks
-   [MC-164446](https://bugs.mojang.com/browse/MC-164446) Tags don't load if one of their values is invalid, causing all data packs to unload
-   [MC-169975](https://bugs.mojang.com/browse/MC-169975) Highlight players (spectators) key doesn't affect any players other than yourself
-   [MC-171020](https://bugs.mojang.com/browse/MC-171020) New nether biomes don't work properly in buffet worlds
-   [MC-172069](https://bugs.mojang.com/browse/MC-172069) Piston arms are not deleted when the base of a pulsing piston is replaced with another piston
-   [MC-173192](https://bugs.mojang.com/browse/MC-173192) Fluid collision is too high
-   [MC-173684](https://bugs.mojang.com/browse/MC-173684) Spawning under the portal when using a nether portal
-   [MC-173774](https://bugs.mojang.com/browse/MC-173774) Shulker bullets do not act as a projectile
-   [MC-173875](https://bugs.mojang.com/browse/MC-173875) Item frames cannot be interacted with after unloading and reloading the chunk
-   [MC-174231](https://bugs.mojang.com/browse/MC-174231) Ocelots are no longer spawning
-   [MC-174838](https://bugs.mojang.com/browse/MC-174838) Target detection of fireworks is unreliable
-   [MC-175201](https://bugs.mojang.com/browse/MC-175201) Misrotated floor block in savanna;;_;;small;;_;;house;;_;;1, savanna;;_;;small;;_;;house;;_;;2, savanna;;_;;small;;_;;house;;_;;3 and savanna;;_;;small;;_;;house;;_;;7
-   [MC-175434](https://bugs.mojang.com/browse/MC-175434) Fireworks launched from upwards-facing dispensers explode inside of the dispenser block
-   [MC-175985](https://bugs.mojang.com/browse/MC-175985) Lodestone compass needle doesn't have an animation
-   [MC-175990](https://bugs.mojang.com/browse/MC-175990) Lodestone compass needle spins around quickly when the lodestone has been destroyed or is not in the same dimension
-   [MC-176052](https://bugs.mojang.com/browse/MC-176052) Using a compass on a lodestone plays no hand animation
-   [MC-176195](https://bugs.mojang.com/browse/MC-176195) Many mountable mobs and vehicles can still be shot by the rider's arrows
-   [MC-176231](https://bugs.mojang.com/browse/MC-176231) Compasses with custom enchantments does not display enchanted glint
-   [MC-176269](https://bugs.mojang.com/browse/MC-176269) Right-clicking Lodestone with Compass also uses offhand item
-   [MC-176420](https://bugs.mojang.com/browse/MC-176420) Lodestone compass sound is in friendly creatures option
-   [MC-176644](https://bugs.mojang.com/browse/MC-176644) Observers don't trigger when a fence connects to a newly grown tree

---

A small release to fix a few critical bugs.

## Fixed bugs in 20w13b

-   [MC-175177](https://bugs.mojang.com/browse/MC-175177) Exhausting, breaking or obstructing the respawn anchor creates ghost blocks in the overworld when breaking blocks
-   [MC-175988](https://bugs.mojang.com/browse/MC-175988) Dying without a valid spawnpoint causes a softlock
-   [MC-176004](https://bugs.mojang.com/browse/MC-176004) Cannot interact with the world after dying in the end or the nether without a valid spawn point

---

Ever felt that you want to take a ride across fields of lava? Yeah? Me too! This snapshot introduces the adorable(?) strider. It might need some help with directions...

## New Features in 20w13a

-   Added the Lodestone
-   Added the Strider
-   Basalt is formed when lava flows over soul soil next to blue ice
-   Farmer villagers can now compost seeds

### Lodestone

A new block that can help you get your bearings!

-   Crafted from a netherite ingot and chiseled stone bricks
-   Use a compass on a lodestone to create a lodestone compass pointing to that lodestone

### Strider

A new mob living the lava lakes of the Nether.

-   Strides on top of the surface of lava
-   Can be saddled, but has a will of its own
-   Really likes the smell of warped fungi - might even be convinced to follow it

### Farmers

-   Farmer villagers can now put excess seeds in the composter to create bone meal
-   Bone meal is used by the farmers to grow crops
-   Farmers share excess wheat to other farmers, so more farmers can make bread

## Changes in 20w13a

-   You're now more likely to get soul speed books and boots when bartering with Piglins
-   You can now charge the Respawn Anchor using a Dispenser

## Technical Changes in 20w13a

### Jigsaw block

-   Jigsaw now can have one of 12 orientations
-   Added new property `Joint type` to describe if attached piece can be rotated (`rollable`) or not (`aligned`)
-   NBT field `target_pool` has been renamed to `pool`
-   `attachement_type` has been split into `name` (on parent block) and `target` (on child block).

### Loot tables

-   A fishing location is now considered to be open water if the fishing hook is in water, there are no blocks besides lily pads above water and all water blocks are source blocks with no solid underwater blocks around

## Fixed bugs in 20w13a

-   [MC-118080](https://bugs.mojang.com/browse/MC-118080) Bows without pulling predicate animate when other bows are pulled back
-   [MC-154427](https://bugs.mojang.com/browse/MC-154427) Villagers only pick up four stacks of items
-   [MC-171003](https://bugs.mojang.com/browse/MC-171003) Crimson and Warped stairs, planks and slabs can be used as fuel in a furnace
-   [MC-171286](https://bugs.mojang.com/browse/MC-171286) Warped fences and Crimson fences don't connect with other fences
-   [MC-171484](https://bugs.mojang.com/browse/MC-171484) Shields, crossbows, bows, and fishing rods don't show their proper animations in first person mode after certain actions
-   [MC-171526](https://bugs.mojang.com/browse/MC-171526) en;;_;;us.json issue: weeping;;_;;vines and weeping;;_;;vines;;_;;plant have the same name
-   [MC-171830](https://bugs.mojang.com/browse/MC-171830) Smokers cannot be crafted using crimson or warped stems
-   [MC-172123](https://bugs.mojang.com/browse/MC-172123) Using a spawn egg on a mob without a baby variant spawns an adult mob of the same type without a weapon
-   [MC-172279](https://bugs.mojang.com/browse/MC-172279) Can't craft campfire with nether stems or hyphae
-   [MC-172307](https://bugs.mojang.com/browse/MC-172307) All loaded tileticks instantly run in the first tick after loading the chunk
-   [MC-173258](https://bugs.mojang.com/browse/MC-173258) Back of zombified piglin heads has very different texture/shading compared to the other sides
-   [MC-173367](https://bugs.mojang.com/browse/MC-173367) Arrows are floating in midair after being pushed by piston
-   [MC-173791](https://bugs.mojang.com/browse/MC-173791) Mobs dismount vehicles only in front of the boat, even if there is danger ahead
-   [MC-174368](https://bugs.mojang.com/browse/MC-174368) Minecarts can no longer eject entities into an open trap door
-   [MC-174428](https://bugs.mojang.com/browse/MC-174428) Nylium can be bonemealed underwater with seagrass above it
-   [MC-174434](https://bugs.mojang.com/browse/MC-174434) Sugar Cane, Kelp and Bamboo are in the incorrect creative inventory tab
-   [MC-174481](https://bugs.mojang.com/browse/MC-174481) en;;_;;us.json issue: twisting;;_;;vines and twisting;;_;;vines;;_;;plant have the same name
-   [MC-174510](https://bugs.mojang.com/browse/MC-174510) Stems, Hyphae, and variants do not use the Nether Wood material
-   [MC-174537](https://bugs.mojang.com/browse/MC-174537) Zombie Pigman hooves are still visible on Zombified Piglin texture
-   [MC-174547](https://bugs.mojang.com/browse/MC-174547) Kelp, Weeping Vines, and Twisted Vines can be bonemealed at age 25
-   [MC-174642](https://bugs.mojang.com/browse/MC-174642) Hitbox of twisting vine is incorrect
-   [MC-174731](https://bugs.mojang.com/browse/MC-174731) Modifying "soul.json" (inside of "particles" folder) causes crash
-   [MC-174787](https://bugs.mojang.com/browse/MC-174787) Arrow physics don't work correctly when in a target that is moved
-   [MC-174823](https://bugs.mojang.com/browse/MC-174823) Sprinting and walking scoreboards don't update properly
-   [MC-174988](https://bugs.mojang.com/browse/MC-174988) Bee nests are brown on maps
-   [MC-175165](https://bugs.mojang.com/browse/MC-175165) Using glowstone on a respawn anchor doesn't consume it
-   [MC-175171](https://bugs.mojang.com/browse/MC-175171) Fishing bobber can get stuck on a ledge when being reeled in
-   [MC-175174](https://bugs.mojang.com/browse/MC-175174) Respawn anchor is considered obstructed if all its sides are covered or air
-   [MC-175178](https://bugs.mojang.com/browse/MC-175178) Anchor uses up the glowstone charge even though it didn't respawn you
-   [MC-175185](https://bugs.mojang.com/browse/MC-175185) No datafixer for item AttributeModifiers UUIDs
-   [MC-175191](https://bugs.mojang.com/browse/MC-175191) Respawn Anchor charging cannot be heard by other players
-   [MC-175193](https://bugs.mojang.com/browse/MC-175193) Using glowstone in the offhand does not charge respawn anchor
-   [MC-175199](https://bugs.mojang.com/browse/MC-175199) In snowy;;_;;medium;;_;;house;;_;;2, some blocks are still misrotated
-   [MC-175204](https://bugs.mojang.com/browse/MC-175204) Four misrotated blocks in snowy;;_;;masons;;_;;house;;_;;1
-   [MC-175208](https://bugs.mojang.com/browse/MC-175208) Incorrect grammar "Your have no home bed or respawn anchor, or it was obstructed."
-   [MC-175209](https://bugs.mojang.com/browse/MC-175209) Dying in a different dimension than your respawn anchor will cause the anchor to not play the depletion sound
-   [MC-175210](https://bugs.mojang.com/browse/MC-175210) Respawn anchor uses a charge after leaving the end dimension through the end portal
-   [MC-175218](https://bugs.mojang.com/browse/MC-175218) Looking at a map of an area with spruce sign, jungle sign or dark oak sign in it crashes the game
-   [MC-175219](https://bugs.mojang.com/browse/MC-175219) Respawn Anchor plays the "Respawn Point set" sound when right-clicked even when its already your respawn point
-   [MC-175224](https://bugs.mojang.com/browse/MC-175224) Nether gold ore does not yield any experience when mined
-   [MC-175239](https://bugs.mojang.com/browse/MC-175239) Villagers are generated very rarely in villages
-   [MC-175278](https://bugs.mojang.com/browse/MC-175278) Fishing near lily pads prevents players from receiving treasure loot table
-   [MC-175289](https://bugs.mojang.com/browse/MC-175289) Respawn anchor isn't in the #dragon;;_;;immune tag
-   [MC-175322](https://bugs.mojang.com/browse/MC-175322) Clicking on a fully charged respawn anchor with a glowstone block doesn't activate it
-   [MC-175327](https://bugs.mojang.com/browse/MC-175327) The crafting recipe of Polished Basalt is inconsistent
-   [MC-175514](https://bugs.mojang.com/browse/MC-175514) Villager Gossips still use old UUID NBT format (TargetMost and TargetLeast)
-   [MC-175827](https://bugs.mojang.com/browse/MC-175827) Entities not loading in structure blocks (duplicate UUID)
-   [MC-175830](https://bugs.mojang.com/browse/MC-175830) F3 + I copies UUID

---

In this snapshot you can be on your merry way across the beautiful Soulsand Valleys with your freshly enchanted boots. It's a bit scary to be fair, so these boots will help you out with that bit...

This update can also be found on [minecraft.net](https://www.minecraft.net/en-us/article/minecraft-snapshot-20w12a).

If you find any bugs, please report them on the official [Minecraft Issue Tracker](https://aka.ms/snapshotbugs?ref=reddit).

## New Features in 20w12a

-   Added the respawn anchor that can set your respawn point in the Nether. Use while holding Glowstone to charge to a maximum of four charges - each respawn depletes one charge
-   Added polished basalt! Smelt your basalt to make it clean and shiny!
-   Warped and crimson nylium can now be bonemealed to get more of the strange new vegetation
-   Hoes are now the appropriate tool to mine sponges and wet sponges

## Changes in 20w12a

-   When fishing, treasure loot can now only be obtained by fishing in open waters
-   Reduced the maximum distance a bee can wander away from its home hive when randomly wandering to around 22 blocks
-   Nether gold ore can now be mined with any type of pickaxe and drops a few gold nuggets
-   Parrots imitate hostile mobs less often
-   Parrots do not randomly imitate hostile mobs when gamemode is on peaceful
-   New mood detection algorithm for cave sounds

## Technical Changes in 20w12a

### Commands

#### spawnpoint

The spawnpoint command now supports being run in any dimension.

#### UUIDs in NBT

UUIDs stored in NBT are now represented as an array of four integers. Example: `{UUID:[I;1498693494,1027158888,1898994005,860320107]}` Along with that a couple of fields have been renamed:

-   `OwnerUUID` of tamed animals, area effect clouds, evoker fangs and projectiles is now simply `Owner`
-   `TrustedUUIDs` of foxes is now `Trusted`
-   `target_uuid` of conduits is now `Target`

### Loot Tables

#### Entity Predicate

-   Added `fishing_hook` sub-predicate

##### `fishing_hook`

Check properties of the fishing hook

###### Parameters

to be open water if there are no blocks above water and no solid underwater blocks around, all water blocks are source blocks and there are no bubble columns.

-   `in_open_water` - Matches whether the fishing location is open water fishing or not. A fishing location is considered

## Fixed bugs in 20w11a

-   [MC-3328](https://bugs.mojang.com/browse/MC-3328) Dismounting an entity places riding entity / player half block too high
-   [MC-64242](https://bugs.mojang.com/browse/MC-64242) Silent tag is not working for some entities
-   [MC-100342](https://bugs.mojang.com/browse/MC-100342) Several Non-Ticking blocks are marked as ticking forcing the growth-algorithm to check chunks needlessly
-   [MC-113809](https://bugs.mojang.com/browse/MC-113809) Chorus Flower plant, Bamboo, Sugarcane, Cactus and other plants grow instantly when supporting block is replaced with same block type
-   [MC-114000](https://bugs.mojang.com/browse/MC-114000) Mouse click in cat hissing sounds
-   [MC-122128](https://bugs.mojang.com/browse/MC-122128) Recipe book resets itself to closed state after death
-   [MC-129137](https://bugs.mojang.com/browse/MC-129137) Parrots imitating hostile mobs in peaceful is not that peaceful
-   [MC-130137](https://bugs.mojang.com/browse/MC-130137) Grass and mycelium don't decay underwater
-   [MC-140545](https://bugs.mojang.com/browse/MC-140545) Pathfinding prefers North (negative Z) direction
-   [MC-148936](https://bugs.mojang.com/browse/MC-148936) Parrot summoned with negative Age has smaller hitbox
-   [MC-149375](https://bugs.mojang.com/browse/MC-149375) Camera can be positioned inside of snow layers
-   [MC-160959](https://bugs.mojang.com/browse/MC-160959) Clicking onto a bed in daytime doesn't grant the advancement "Sweet Dreams"
-   [MC-161754](https://bugs.mojang.com/browse/MC-161754) Item duplication with chested donkeys, mules and llamas
-   [MC-163918](https://bugs.mojang.com/browse/MC-163918) Bees not animating their pollen gathering
-   [MC-166980](https://bugs.mojang.com/browse/MC-166980) Bees become stuck wandering to the north-west after completing a task, or randomly in large numbers
-   [MC-168384](https://bugs.mojang.com/browse/MC-168384) NBT-Tag "Silent:1b" doesn't work for bees.
-   [MC-169965](https://bugs.mojang.com/browse/MC-169965) Potion effect timers for higher levels can remain at 0:00 after the higher level has run out if multiple levels of the same effect were applied in descending order
-   [MC-170584](https://bugs.mojang.com/browse/MC-170584) Structure taiga;;_;;meeting;;_;;point;;_;;2 from zombie villages has 1 misrotated log
-   [MC-170591](https://bugs.mojang.com/browse/MC-170591) Misrotated floor blocks in desert;;_;;tool;;_;;smith;;_;;1 basement
-   [MC-170773](https://bugs.mojang.com/browse/MC-170773) Recipe book and filtering craftable do not stay open for blast furnace and smoker when (re)loading the world
-   [MC-170940](https://bugs.mojang.com/browse/MC-170940) Netherite ingot recipes are not grouped
-   [MC-171133](https://bugs.mojang.com/browse/MC-171133) Camera can be positioned inside of soul sand
-   [MC-172188](https://bugs.mojang.com/browse/MC-172188) Hoglins are not required by 'Two by Two' advancement
-   [MC-172690](https://bugs.mojang.com/browse/MC-172690) Smelting netherite scraps doesn't provide the right amount of experience
-   [MC-172820](https://bugs.mojang.com/browse/MC-172820) Piglins can turn into adult chicken jockeys in the overworld
-   [MC-173199](https://bugs.mojang.com/browse/MC-173199) Fossils in the nether cause caves / floating islands to generate and can break through the nether roof
-   [MC-173220](https://bugs.mojang.com/browse/MC-173220) Dismounting passenger moves to a nearby block when ridden entity dies
-   [MC-173420](https://bugs.mojang.com/browse/MC-173420) Sign crafting recipes of various wood types are not grouped
-   [MC-173487](https://bugs.mojang.com/browse/MC-173487) Falling out of water death message still does not seem to appear
-   [MC-173552](https://bugs.mojang.com/browse/MC-173552) Nether Fossile support islands cut off at chunk borders
-   [MC-173791](https://bugs.mojang.com/browse/MC-173791) Mobs dismount vehicles only in front of the boat, even if there is danger ahead
-   [MC-173828](https://bugs.mojang.com/browse/MC-173828) Village church entrance does not generate correctly
-   [MC-173832](https://bugs.mojang.com/browse/MC-173832) Crimson and Warped Hyphae and Stripped Hyphae are switched in Creative inventory
-   [MC-173837](https://bugs.mojang.com/browse/MC-173837) Removing fire and soul fire with shears will reduce the shears' durability
-   [MC-174049](https://bugs.mojang.com/browse/MC-174049) Fireworks shot from a crossbow do not explode instantly when hitting a solid block
-   [MC-174071](https://bugs.mojang.com/browse/MC-174071) Roof of savanna;;_;;mason;;_;;1 is cut off
-   [MC-174072](https://bugs.mojang.com/browse/MC-174072) Structure savanna;;_;;temple;;_;;2 contains one misrotated block
-   [MC-174073](https://bugs.mojang.com/browse/MC-174073) Two misrotated blocks in savanna;;_;;small;;_;;house;;_;;5
-   [MC-174075](https://bugs.mojang.com/browse/MC-174075) Misrotated block in savanna;;_;;butchers;;_;;shop;;_;;1
-   [MC-174076](https://bugs.mojang.com/browse/MC-174076) Inconsistent rotation of logs under windows in savanna;;_;;small;;_;;house;;_;;4
-   [MC-174077](https://bugs.mojang.com/browse/MC-174077) Structure snowy;;_;;library;;_;;1 no longer has snow under the roof
-   [MC-174078](https://bugs.mojang.com/browse/MC-174078) Three misrotated blocks in snowy;;_;;armorer;;_;;house;;_;;2
-   [MC-174079](https://bugs.mojang.com/browse/MC-174079) Misrotated block at snowy;;_;;weapon;;_;;smith;;_;;1
-   [MC-174082](https://bugs.mojang.com/browse/MC-174082) Three misrotated blocks in snowy;;_;;small;;_;;house;;_;;2
-   [MC-174083](https://bugs.mojang.com/browse/MC-174083) Three misrotated blocks in snowy;;_;;butchers;;_;;shop;;_;;1
-   [MC-174174](https://bugs.mojang.com/browse/MC-174174) Arrow animation stuck on loop when a flame bow is used to detonate TNT
-   [MC-174234](https://bugs.mojang.com/browse/MC-174234) Village structure snowy;;_;;masons;;_;;house;;_;;1 has two misrotated blocks
-   [MC-174258](https://bugs.mojang.com/browse/MC-174258) Fixed item frames do not take void damage
-   [MC-174391](https://bugs.mojang.com/browse/MC-174391) Several misrotated blocks at snowy;;_;;medium;;_;;house;;_;;2
-   [MC-174429](https://bugs.mojang.com/browse/MC-174429) Chorus flowers remove arrow and trident velocity
-   [MC-174464](https://bugs.mojang.com/browse/MC-174464) Soul speed decreases durability on boots in creative mode
-   [MC-174466](https://bugs.mojang.com/browse/MC-174466) Soul speed particles are generated in spectator mode
-   [MC-174467](https://bugs.mojang.com/browse/MC-174467) Placing fire on soul sand does not place soul fire
-   [MC-174476](https://bugs.mojang.com/browse/MC-174476) Soul fire torch is in the piglin;;_;;repellents item tag twice
-   [MC-174480](https://bugs.mojang.com/browse/MC-174480) Piglins are not attracted to Nether gold ore
-   [MC-174489](https://bugs.mojang.com/browse/MC-174489) Shroomlight preferred tool is now both Axe and Hoe
-   [MC-174502](https://bugs.mojang.com/browse/MC-174502) Soul Speed 3 on Soul Soil in water keeps and increases player momentum
-   [MC-174513](https://bugs.mojang.com/browse/MC-174513) Soul Speed Enchanted Books from bartering with piglins do not work in an anvil
-   [MC-174522](https://bugs.mojang.com/browse/MC-174522) Soul Speed doesn't break boots
-   [MC-174690](https://bugs.mojang.com/browse/MC-174690) Soul speed enchantment books can be found in chests
-   [MC-174785](https://bugs.mojang.com/browse/MC-174785) Mining speed of crimson and warped wall signs is not affected by an axe

---

