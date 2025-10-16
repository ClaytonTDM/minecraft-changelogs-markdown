# 1.16.2-rc1

We have now released 1.16.2 Release Candidate 1, fixing even more stability issues. If no further critical issues are found, we expect this version to be the full release of 1.16.2 on Tuesday next week.

## Technical Changes in 1.16.2 Release Candidate 1

-   The Resource and Data pack version has been raised to 6

## Fixed bugs in 1.16.2 Release Candidate 1

-   [MC-197275](https://bugs.mojang.com/browse/MC-197275) Due to changes to walls, "pack;;_;;format: 5" is not cross-compatible between 1.15 and 1.16
-   [MC-197263](https://bugs.mojang.com/browse/MC-197263) End sky and nether fog don't work on servers
-   [MC-197258](https://bugs.mojang.com/browse/MC-197258) Certain dimensions can cause a game crash
-   [MC-197225](https://bugs.mojang.com/browse/MC-197225) Crash: java.util.concurrent.CompletionException: u: Exception generating new chunk
-   [MC-197197](https://bugs.mojang.com/browse/MC-197197) Game crashes/freezes after creating/entering a Superflat world without presets
-   [MC-194933](https://bugs.mojang.com/browse/MC-194933) Game crashes when loading a custom biome / java.lang.UnsupportedOperationException: Trying to add tag of type 8 to list of 10
-   [MC-190103](https://bugs.mojang.com/browse/MC-190103) Crash when using a nether portal: java.lang.IndexOutOfBoundsException: fromIndex < 0: -2368549