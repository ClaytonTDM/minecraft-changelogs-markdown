# Minecraft 1.20.5 Release Candidate 1

This week's shipping frenzy continues with our very first Release Candidate for 1.20.5! Barring any significant or critical issues found within it, this is the version we are planning to ship as Minecraft: Java Edition 1.20.5 next week.

## Technical Changes

-   Changed the approach to game client disconnecting on invalid data in packets sent from a server
    -   To ease the transition period, modded servers can opt out by setting the appropriate field in the `handshake/game_profile` packet
    -   This option will be removed in the next release

## Fixed bugs in 1.20.5 Release Candidate 1

-   [MC-270867](https://bugs.mojang.com/browse/MC-270867) Severe lag when upgrading 1.20.4 worlds
-   [MC-270871](https://bugs.mojang.com/browse/MC-270871) Upgrading a world with horses wearing leather horse armor makes the horse immune to freezing forever