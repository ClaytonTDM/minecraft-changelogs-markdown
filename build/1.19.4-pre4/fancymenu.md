# 1.19.4-pre4

We are now releasing the fourth pre-release for Minecraft 1.19.4. This pre-release contains bug fixes, some cherry texture tweaks, and a button in the options menu to view the game credits.

Happy mining!

## Changes

-   Added "Credits & Attribution" button in the Options menu

## Technical Changes

### Display entities

-   When a new interpolation is started, it now starts from the current state instead of the final state

## Changes to Experimental Features

-   The textures for the Cherry Tree Leaves and Cherry Sign have been updated

## Fixed bugs in 1.19.4 Pre-release 4

-   [MC-172305](https://bugs.mojang.com/browse/MC-172305) Some words within "/clear" command feedback messages are always pluralized
-   [MC-193497](https://bugs.mojang.com/browse/MC-193497) Tall Grass & Large Fern are rendered incorrectly when an Enderman is holding them
-   [MC-210816](https://bugs.mojang.com/browse/MC-210816) Sculk sensors are not activated upon breaking shulker bullets
-   [MC-211071](https://bugs.mojang.com/browse/MC-211071) Some words within "/spreadplayers" command feedback messages are always pluralized
-   [MC-255060](https://bugs.mojang.com/browse/MC-255060) Some words within "/function" and "/schedule" command feedback messages are always pluralized
-   [MC-255087](https://bugs.mojang.com/browse/MC-255087) Some words within "/worldborder" command feedback messages are always pluralized
-   [MC-256270](https://bugs.mojang.com/browse/MC-256270) Some words within some multiplayer command feedback messages are always pluralized
-   [MC-257784](https://bugs.mojang.com/browse/MC-257784) Some words within some realms strings are always pluralized
-   [MC-259259](https://bugs.mojang.com/browse/MC-259259) Hostile mobs can't replace armor they're wearing with better armor
-   [MC-259603](https://bugs.mojang.com/browse/MC-259603) The "selectWorld.gameMode.hardcore.info" string displayed within the create new world GUI is improperly capitalized
-   [MC-259610](https://bugs.mojang.com/browse/MC-259610) Gamemode information strings consist of inconsistent concluding punctuation
-   [MC-259637](https://bugs.mojang.com/browse/MC-259637) Natural spider potion effects still last max int instead of infinity
-   [MC-259702](https://bugs.mojang.com/browse/MC-259702) The "death.attack.hotFloor.player" string is missing an article before the word "danger"
-   [MC-259714](https://bugs.mojang.com/browse/MC-259714) Death messages relating to dragons' breath aren't possessive
-   [MC-259715](https://bugs.mojang.com/browse/MC-259715) The "death.attack.message;;_;;too;;_;;long" string is missing an article before the word "message"
-   [MC-259792](https://bugs.mojang.com/browse/MC-259792) The "selectWorld.experimental.message" string is missing a serial comma
-   [MC-259853](https://bugs.mojang.com/browse/MC-259853) block;;_;;display transform breaks when shearing
-   [MC-259896](https://bugs.mojang.com/browse/MC-259896) item;;_;;display has a wrong default value
-   [MC-260068](https://bugs.mojang.com/browse/MC-260068) The sounds of using brushes don't show any subtitles
-   [MC-260196](https://bugs.mojang.com/browse/MC-260196) Entities don't recognize decorated pots as obstacles when pathfinding
-   [MC-260214](https://bugs.mojang.com/browse/MC-260214) Entities will often spin while pathfinding on top of decorated pots
-   [MC-260215](https://bugs.mojang.com/browse/MC-260215) Water within waterlogged decorated pots doesn't flow
-   [MC-260265](https://bugs.mojang.com/browse/MC-260265) Lighting does not transform with display entities
-   [MC-260285](https://bugs.mojang.com/browse/MC-260285) Applying an identical transformation will result in the previous interpolation repeating instead of having no effect
-   [MC-260321](https://bugs.mojang.com/browse/MC-260321) Sniffers in the distance have lots of Z-fighting on their body
-   [MC-260429](https://bugs.mojang.com/browse/MC-260429) The texture of the Cherry Sign post has an inconsistency with the other Signs
-   [MC-260497](https://bugs.mojang.com/browse/MC-260497) Villager trade button interferes with the slider
-   [MC-260642](https://bugs.mojang.com/browse/MC-260642) tall;;_;;grass and large;;_;;fern display gray as block;;_;;display entities
-   [MC-260681](https://bugs.mojang.com/browse/MC-260681) UI click sounds in Create New World menu tabs are louder than they should be
-   [MC-260735](https://bugs.mojang.com/browse/MC-260735) You can block falling anvils and dripstone with a shield
-   [MC-260764](https://bugs.mojang.com/browse/MC-260764) Right-clicking will focus text fields
-   [MC-260765](https://bugs.mojang.com/browse/MC-260765) Right-clicking will move packs in the pack edit screen
-   [MC-260774](https://bugs.mojang.com/browse/MC-260774) Players are kicked from server environments due to chat message validation failures when attempting to type in chat after having previously altered chat settings