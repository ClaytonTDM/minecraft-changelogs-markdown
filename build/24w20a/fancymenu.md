# Minecraft Snapshot 24w20a

After some recent irregularities in our Snapshot schedule (public holidays, we're looking at you!) we're back to shipping on a Wednesday! Among other things, 24w20a includes a buff to the amount of Redstone Dust dropped by Witches, as well as a long requested change to make Piston sounds a tad more pleasing to the ear. We're also throwing 41 new bug fixes into the mix, because we like squashing bugs.

Happy mining!

## Changes

-   Witches now always drop 4-8 redstone dust on death
    -   This is to improve the viability of farms that utilize Witch Huts to obtain Redstone Dust
-   Improved player attribute and effect handling
    -   Custom set base attributes are now kept when respawning
    -   Active effects and modifiers are kept when changing dimension or winning the game
-   Updated credits

### Sounds

-   Updated Piston sounds to lower volume and attenuation
    -   This was done to address the long-received feedback on the old sounds being too harsh and loud, creating very noisy redstone builds

## Technical Changes

-   Data Pack version is now 44

## Data Pack Version 44

-   `dimension_padding` jigsaw structure NBT tag was changed
    -   Now it is an object with fields:
        -   `bottom` the vertical padding at the bottom of the dimension, non-negative integer
        -   `top` the vertical padding at the top of the dimension, non-negative integer
    -   Can be written as a single non-negative integer instead to be applied to both top and bottom fields
        -   e.g. both `dimension_padding: 10` or `dimension_padding: { bottom: 10, top: 5 }` are valid
-   Data-driven enchantment field `weight` now has an upper bound of 1024
-   Data-driven enchantment field `max_level` now has an upper bound of 255

### Predicates

#### Entity Predicate

-   New option: `movement_affected_by` - optional Location Predicate
    -   When present, adds requirements on a block at most 0.5 blocks below the entity which can affect its movement

## Fixed bugs in 24w20a

-   [MC-6431](https://bugs.mojang.com/browse/MC-6431) Status effects are lost when returning to the overworld from the exit end portal
-   [MC-83590](https://bugs.mojang.com/browse/MC-83590) Armor attributes list can be too long
-   [MC-137719](https://bugs.mojang.com/browse/MC-137719) The player's horizontal motion doesn't affect fired projectiles in certain situations
-   [MC-179940](https://bugs.mojang.com/browse/MC-179940) Player's attributes reset back to default values upon respawning
-   [MC-181604](https://bugs.mojang.com/browse/MC-181604) Exiting the end portal resets player attributes to their default values
-   [MC-267230](https://bugs.mojang.com/browse/MC-267230) Hangul fonts are rendered with missing pixels
-   [MC-268113](https://bugs.mojang.com/browse/MC-268113) the minecraft:generic.scale attribute is desynchronized when the player leaves the End dimension via an End portal
-   [MC-268370](https://bugs.mojang.com/browse/MC-268370) Japanese CJK variants use the same diacritic
-   [MC-268598](https://bugs.mojang.com/browse/MC-268598) The "weight" of skeletons in swamp biomes is too high causing less bogged spawns
-   [MC-269036](https://bugs.mojang.com/browse/MC-269036) Bogged do not drop mushrooms when sheared with doMobLoot false
-   [MC-269147](https://bugs.mojang.com/browse/MC-269147) Shearing a bogged spawns mushrooms at the bogged's feet
-   [MC-269951](https://bugs.mojang.com/browse/MC-269951) When the gamerule "doImmediateRespawn" is set to true, the Wind Charged, Oozing or Weaving effects don't function for players
-   [MC-270052](https://bugs.mojang.com/browse/MC-270052) Blur levels below 10% do not appear to actually work
-   [MC-270301](https://bugs.mojang.com/browse/MC-270301) The fire protection enchantment applied to horse armor no longer decreases the duration of time the horse remains ablaze
-   [MC-270539](https://bugs.mojang.com/browse/MC-270539) The blast protection enchantment, when applied to horse armor, no longer diminishes the knockback effect from explosions on horse
-   [MC-270637](https://bugs.mojang.com/browse/MC-270637) maxentityCramming set to 0 prevents slime spawning from oozing effect
-   [MC-271034](https://bugs.mojang.com/browse/MC-271034) List entries in the Social interaction menu are rendered over the background
-   [MC-271168](https://bugs.mojang.com/browse/MC-271168) Demo timer does not respect "Text Background" setting
-   [MC-271244](https://bugs.mojang.com/browse/MC-271244) Auto-save text does not respect "Text Background" setting in accessibility settings
-   [MC-271360](https://bugs.mojang.com/browse/MC-271360) Horse armor and wolf armor are deleted when used on an armor stand
-   [MC-271414](https://bugs.mojang.com/browse/MC-271414) Damage command at position applies knockback in random direction
-   [MC-271462](https://bugs.mojang.com/browse/MC-271462) Buttons make the deactivation sound when pressed
-   [MC-271468](https://bugs.mojang.com/browse/MC-271468) Game crashes with custom enchantment's "rotated;;_;;block;;_;;provider"
-   [MC-271532](https://bugs.mojang.com/browse/MC-271532) Mace only loses durability during smash attacks
-   [MC-271547](https://bugs.mojang.com/browse/MC-271547) Can't immediately sprint jump into a 2 block ceiling when standing next to it since 24w18a
-   [MC-271566](https://bugs.mojang.com/browse/MC-271566) Game crash on insufficient "ammo;;_;;use" amount
-   [MC-271574](https://bugs.mojang.com/browse/MC-271574) Inlining a painting variant causes players to disconnect when receiving entity data
-   [MC-271583](https://bugs.mojang.com/browse/MC-271583) Soul speed no longer works through partial blocks
-   [MC-271629](https://bugs.mojang.com/browse/MC-271629) Channeling doesn't work / "post;;_;;attack" effect requires enchanted item to be in the mainhand
-   [MC-271636](https://bugs.mojang.com/browse/MC-271636) Attempting to modify NBT of killer rabbit throws unexpected error
-   [MC-271678](https://bugs.mojang.com/browse/MC-271678) damage;;_;;item enchantment entity effect doesn't break items
-   [MC-271715](https://bugs.mojang.com/browse/MC-271715) Crash when the sum of enchantments' weights overflow
-   [MC-271716](https://bugs.mojang.com/browse/MC-271716) Fraction value provider allows division by zero
-   [MC-271803](https://bugs.mojang.com/browse/MC-271803) Custom enchantment with very large max level causes game to hang after opening Creative inventory
-   [MC-271853](https://bugs.mojang.com/browse/MC-271853) Random "Failed to store chunk" error
-   [MC-271854](https://bugs.mojang.com/browse/MC-271854) Trying to generate new chunks crashes the server
-   [MC-271863](https://bugs.mojang.com/browse/MC-271863) Crafter recipe gets stuck on an item with a similar recipe
-   [MC-271881](https://bugs.mojang.com/browse/MC-271881) Soul speed doesn't soul make particles.
-   [MC-271896](https://bugs.mojang.com/browse/MC-271896) Using Shift+F3+I on a villager crashes the game
-   [MC-271937](https://bugs.mojang.com/browse/MC-271937) Strike a villager with channeling trident in thunder doesn't obtain the advancement "Very Very Frightening"
-   [MC-271948](https://bugs.mojang.com/browse/MC-271948) Entering the Nether breaks the game