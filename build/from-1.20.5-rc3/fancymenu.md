# Minecraft: 1.20.5 Release Candidate 3

Oh look, it's finally Monday! Since we haven't shipped something for several hours, we thought we'd kick the week off with a third and (fingers crossed!) final Release Candidate for Minecraft: Java Edition 1.20.5.

Happy mining!

## Fixed bugs in 1.20.5 Release Candidate 3

-   [MC-270964](https://bugs.mojang.com/browse/MC-270964) Race condition in can;;_;;break/can;;_;;place;;_;;on item stack components

---

We're honestly starting to lose count at this point. Anyways! Here's 1.20.5 Release Candidate 2 coming in clutch with some bona fide bug fixes to round off the week.

Happy weekend mining!

## Fixed bugs in 1.20.5 Release Candidate 2

-   [MC-270862](https://bugs.mojang.com/browse/MC-270862) Firework Star item displays have inconsistent color updates
-   [MC-270902](https://bugs.mojang.com/browse/MC-270902) Game unpauses when credits are played via pause menu
-   [MC-270916](https://bugs.mojang.com/browse/MC-270916) Villagers can sell experimental enchantments without the 1.21 experiment enabled

---

This week's shipping frenzy continues with our very first Release Candidate for 1.20.5! Barring any significant or critical issues found within it, this is the version we are planning to ship as Minecraft: Java Edition 1.20.5 next week.

## Technical Changes

-   Changed the approach to game client disconnecting on invalid data in packets sent from a server
    -   To ease the transition period, modded servers can opt out by setting the appropriate field in the `handshake/game_profile` packet
    -   This option will be removed in the next release

## Fixed bugs in 1.20.5 Release Candidate 1

-   [MC-270867](https://bugs.mojang.com/browse/MC-270867) Severe lag when upgrading 1.20.4 worlds
-   [MC-270871](https://bugs.mojang.com/browse/MC-270871) Upgrading a world with horses wearing leather horse armor makes the horse immune to freezing forever

---

And back again! Here comes the fourth Pre-Release of 1.20.5. Similar story this time around, fixing some important issues.

Happy crafting!

## Technical Changes

-   The Resource Pack version is now 32

## Resource Pack Version 32

-   The `shift` in TTF glyph providers is now restricted to the range `[-512; 512]`

## Fixed bugs in 1.20.5 Pre-Release 4

-   [MC-270666](https://bugs.mojang.com/browse/MC-270666) The game tries to spawn bogged without experimental feature "update 1.21" active (but failed)
-   [MC-270825](https://bugs.mojang.com/browse/MC-270825) Certain simulation distance values cannot be saved visually
-   [MC-270838](https://bugs.mojang.com/browse/MC-270838) Stationary fireballs can no longer be redirected
-   [MC-270845](https://bugs.mojang.com/browse/MC-270845) Summoned wind charges can no longer be redirected

---

