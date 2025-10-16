# 1.20.3-pre3

We are now releasing the third Pre-Release for Minecraft 1.20.3, containing mostly bug fixes, as well as changes to server resource pack handling.

Happy Mining!

## Technical Changes

### World resource packs

#### Local storage

-   Only up to 20 server resource packs are cached

#### Packets

-   Client now sends additional updates about packs (like download success)

## Fixed bugs in 1.20.3 Pre-Release 3

-   [MC-265908](https://bugs.mojang.com/browse/MC-265908) Pool aliases don't redirect start pool
-   [MC-266060](https://bugs.mojang.com/browse/MC-266060) The word "ignored" is misspelled as "ingored" within the "commands.tick.query.rate.sprinting" string
-   [MC-266115](https://bugs.mojang.com/browse/MC-266115) Inconsistent Copper Door block drops when broken with tools weaker than stone
-   [MC-266144](https://bugs.mojang.com/browse/MC-266144) Copper Doors are not part of the #doors item tag
-   [MC-266145](https://bugs.mojang.com/browse/MC-266145) Copper Trapdoors are not part of the #trapdoors item tag
-   [MC-266189](https://bugs.mojang.com/browse/MC-266189) Freezing the game during pick-up animation desyncs item position
-   [MC-266210](https://bugs.mojang.com/browse/MC-266210) Dragon respawn is unable to be frozen with /tick freeze
-   [MC-266335](https://bugs.mojang.com/browse/MC-266335) Copper Doors/Trapdoors have wrong Blast Resistance
-   [MC-266903](https://bugs.mojang.com/browse/MC-266903) Incorrect part of copper door texture
-   [MC-266920](https://bugs.mojang.com/browse/MC-266920) Server Resource Packs Setting disabled no longer overridden by require-resource-pack
-   [MC-266948](https://bugs.mojang.com/browse/MC-266948) You can run "/summon wind;;_;;charge" without enabling the 1.21 datapack