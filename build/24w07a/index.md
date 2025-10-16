# Minecraft Snapshot 24w07a

We are now releasing 24w07a, containing bug fixes and a new skeleton variant called Bogged.

Good luck dodging poisonous arrows!

## Known Issues

-   The fall damage reduction for the Wind Charge is not working

## Experimental Features

### Bogged

-   A new variant of Skeletons that shoot poisonous arrows
    -   They're faster to take down with 16 health instead of 20 health
    -   They attack at a slower interval of 3.5 seconds instead of 2 seconds
-   Has a chance to drop Arrows of Poison when killed by players
-   These mossy and mushroom covered Skeletons spawn naturally in Swamps and Mangrove Swamps
    -   Can also be found spawning from Trial Spawners in some Trial Chambers

## Changes

-   Hoppers can once again pick up items from beehives and beenests, but other full blocks still block them

## Technical Changes

-   The Data Pack version is now 32

## Data Pack Version 32

-   Added `#minecraft:does_not_block_hoppers` for blocks that will never disable a Hopper when placed above one
-   Added `gameplay/panda_sneeze` loot table for drops when Pandas sneeze

## Fixed bugs in 24w07a

-   [MC-266570](https://bugs.mojang.com/browse/MC-266570) Wind charges can't go through non solid blocks
-   [MC-267732](https://bugs.mojang.com/browse/MC-267732) /place jigsaw still caps max depth at 7
-   [MC-267866](https://bugs.mojang.com/browse/MC-267866) Panda slimeball drop is hardcoded
-   [MC-268080](https://bugs.mojang.com/browse/MC-268080) When the projectiles are reflected from the breeze, the projectiles will deflect in the opposite direction in Bedrock, but in Java they will always deflect downward
-   [MC-268339](https://bugs.mojang.com/browse/MC-268339) "Japanese" is misspelled as "Japanse" in options.japaneseGlyphVariants.tooltip
-   [MC-268342](https://bugs.mojang.com/browse/MC-268342) Breeze can be damaged by wind charge
-   [MC-268344](https://bugs.mojang.com/browse/MC-268344) Breezes are not affected by the looting enchantment
-   [MC-268349](https://bugs.mojang.com/browse/MC-268349) Hopper minecarts with a full block above them no longer search for item entities to pick up
-   [MC-268353](https://bugs.mojang.com/browse/MC-268353) Tick Freeze randomizes next AI tick type
-   [MC-268355](https://bugs.mojang.com/browse/MC-268355) Tick freeze lets chunk tickets expire
-   [MC-268362](https://bugs.mojang.com/browse/MC-268362) Blocks which typically negate fall damage fail to do so from falls after using wind charges
-   [MC-268368](https://bugs.mojang.com/browse/MC-268368) Wind charge bounces cause fall damage after exiting water
-   [MC-268383](https://bugs.mojang.com/browse/MC-268383) Wind Charges negate all fall damage that does not occur below the hit point, regardless of whether the fall was caused by the charge or not
-   [MC-268389](https://bugs.mojang.com/browse/MC-268389) Fall damage is conserved between game modes with Wind Charge
-   [MC-268418](https://bugs.mojang.com/browse/MC-268418) Pre-1.9 chunks get regenerated seemingly randomly when upgrading
-   [MC-268426](https://bugs.mojang.com/browse/MC-268426) Wind charges shot from breezes no longer explode and instead are deleted upon hitting breezes after being deflected
-   [MC-268451](https://bugs.mojang.com/browse/MC-268451) Hoppers can't pull honey bottles from bee hives or bee nests