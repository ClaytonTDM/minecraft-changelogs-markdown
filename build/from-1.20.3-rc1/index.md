# Minecraft 1.20.3 Release Candidate 1

We're now releasing the first (and hopefully last) release candidate for 1.20.3. Unless something critical pops up, no further changes will be made for the full release, which is planned for next week.

Happy Mining!

## Fixed bugs in 1.20.3 Release Candidate 1

-   [MC-266537](https://bugs.mojang.com/browse/MC-266537) Disparity between the read/write logic of the explosion packet

---

We're now releasing Pre-release 4 for 1.20.3 with a few more bug fixes.

Happy mining!

## Fixed bugs in 1.20.3 Pre-Release 4

-   [MC-266968](https://bugs.mojang.com/browse/MC-266968) /return executed within an advancement reward function globally discards all subsequent commands
-   [MC-267062](https://bugs.mojang.com/browse/MC-267062) Server list ping icon doesn't display tooltip

---

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
-   [MC-266948](https://bugs.mojang.com/browse/MC-266948) You can run "/summon wind\_charge" without enabling the 1.21 datapack

---

Hello again! The stabilization phase for 1.20.3 release continues. This Pre-Release brings more bug fixes.

## Changes

-   Breeze wind charges now break decorated pots, chorus flowers, and pointed dripstone blocks upon collision

## Fixed bugs in 1.20.3 Pre-Release 2

-   [MC-265291](https://bugs.mojang.com/browse/MC-265291) Command suggestions within the command block interface don't disappear when the console command field is unselected
-   [MC-265426](https://bugs.mojang.com/browse/MC-265426) Certain inputs pressed whilst in F3+Esc Pause will be carried out after game is unpaused
-   [MC-265772](https://bugs.mojang.com/browse/MC-265772) A command with multiple redirect modifiers can ignore "maxCommandChainLength"
-   [MC-265788](https://bugs.mojang.com/browse/MC-265788) The "Start free Snapshot Realm" element can be selected or remain selected causing its tooltip to erroneously be visible when other interfaces are open
-   [MC-266075](https://bugs.mojang.com/browse/MC-266075) "Player teleports" not shown in subtitles when an ender pearl lands far from the thrower
-   [MC-266206](https://bugs.mojang.com/browse/MC-266206) Renamed arrows are reffered as just "Arrow" in the death message
-   [MC-266380](https://bugs.mojang.com/browse/MC-266380) Rain texture doesn't loop correctly
-   [MC-266439](https://bugs.mojang.com/browse/MC-266439) Decorated pots with loot table desync item consumption if it cannot be inserted in the pot
-   [MC-266496](https://bugs.mojang.com/browse/MC-266496) Wind Charge can not break Decorated Pots
-   [MC-266516](https://bugs.mojang.com/browse/MC-266516) Arrows on fire set breezes on fire, despite being deflected
-   [MC-266728](https://bugs.mojang.com/browse/MC-266728) The "styled" number format uses the resource location "result"
-   [MC-266886](https://bugs.mojang.com/browse/MC-266886) Backspace in Anvil no longer works when renaming an item
-   [MC-266890](https://bugs.mojang.com/browse/MC-266890) The minecraft:grass item does not get upgraded to minecraft:short\_grass

---

