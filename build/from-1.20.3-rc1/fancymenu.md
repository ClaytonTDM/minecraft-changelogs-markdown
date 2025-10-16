# Minecraft 1.20.3 Release Candidate 1

We're now releasing the first (and hopefully last) release candidate for 1.20.3. Unless something critical pops up, no further changes will be made for the full release, which is planned for next week.

Happy Mining!

## Fixed bugs in 1.20.3 Release Candidate 1

-   [MC-266537](https://bugs.mojang.com/browse/MC-266537) Disparity between the read/write logic of the explosion packet

---

# Minecraft 1.20.3 Pre-Release 4

We're now releasing Pre-release 4 for 1.20.3 with a few more bug fixes.

Happy mining!

## Fixed bugs in 1.20.3 Pre-Release 4

-   [MC-266968](https://bugs.mojang.com/browse/MC-266968) /return executed within an advancement reward function globally discards all subsequent commands
-   [MC-267062](https://bugs.mojang.com/browse/MC-267062) Server list ping icon doesn't display tooltip

---

# Minecraft 1.20.3 Pre-Release 3

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

---

# Minecraft 1.20.3 Pre-Release 2

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
-   [MC-266890](https://bugs.mojang.com/browse/MC-266890) The minecraft:grass item does not get upgraded to minecraft:short;;_;;grass

---

# Minecraft 1.20.3 Pre-Release 1

We're bringing you the first Pre-Release of 1.20.3 with updates to server resource pack handling and bug fixes!

## Technical Changes

-   The Data Pack version is now 26
-   The Resource Pack version is now 22
-   Changes to downloaded/world resource pack handling

### World resource packs

Changes apply to world resource packs (`resources.zip`), Realms resource packs and resource packs controlled by dedicated servers.

#### UI

-   Download screen has been replaced with a toast
-   World resource pack application will start together with chunk loading

#### Local storage

Downloaded packs are now stored in `downloads` directory (with different file organization than old `server-resource-packs`)

-   Files in this directory are no longer automatically cleaned (previously only up 10 packs were kept)
-   Additionally, inside this directory there is also log file `log.json` that stores information about downloaded files for debug purposes

#### Server config

Downloaded packs now have unique id (GUID/UUID) that can be used to differentiate them

-   This value for dedicated server pack can be configured with `resource-pack-id` option in `server.properties`
-   If the value is missing, it will be generated based on URL
-   If hash of a pack is not set, this pack will be redownloaded before every application
    -   Previously, if hash was missing, latest downloaded version of pack was applied

#### Packets

Some additional options are added for 3rd-party servers software:

-   Client can now accept multiple server resource packs
-   New packet was added to un-apply server resource packs
-   Resource packs are no longer cleaned when entering configuration phase

## Data Pack Version 26

-   Renamed `minecraft:grass` block and item to `minecraft:short_grass`

## Resource Pack Version 22

-   Renamed `minecraft:grass` block and item to `minecraft:short_grass`

## Fixed bugs in 1.20.3 Pre-Release 1

-   [MC-142160](https://bugs.mojang.com/browse/MC-142160) pausedTickDelta updated when the game is unpaused rather than paused
-   [MC-164316](https://bugs.mojang.com/browse/MC-164316) Resource pack update by a hash doesn't work
-   [MC-251126](https://bugs.mojang.com/browse/MC-251126) Server resource pack is not redownloaded when a hash mismatch is detected with the previously downloaded version
-   [MC-265927](https://bugs.mojang.com/browse/MC-265927) Edit box length restrictions can result in unpaired surrogate characters
-   [MC-265929](https://bugs.mojang.com/browse/MC-265929) Ctrl+Backspacing a word with non-BMP characters in an edit box deletes additional characters
-   [MC-266456](https://bugs.mojang.com/browse/MC-266456) Breezes in minecarts or boats are passive
-   [MC-266468](https://bugs.mojang.com/browse/MC-266468) Breeze cannot attack in deep water
-   [MC-266472](https://bugs.mojang.com/browse/MC-266472) Charged creeper / wither armor is rendered incorrectly
-   [MC-266507](https://bugs.mojang.com/browse/MC-266507) Number of block drops from TNT explosions is capped to 16
-   [MC-266563](https://bugs.mojang.com/browse/MC-266563) End Crystals and TNT Minecarts that explode without a source entity deal no damage at all
-   [MC-266571](https://bugs.mojang.com/browse/MC-266571) Breezes won't attack while under the effects of levitation status
-   [MC-266656](https://bugs.mojang.com/browse/MC-266656) The interpolation of particle, entity and block entity transforms is disrupted when pausing the game in singleplayer
-   [MC-266723](https://bugs.mojang.com/browse/MC-266723) Monsters Hunted advancement requires killing a Breeze even when they're disabled
-   [MC-266724](https://bugs.mojang.com/browse/MC-266724) scoreboard players reset no longer works
-   [MC-266729](https://bugs.mojang.com/browse/MC-266729) Unformatted objects in scoreboard error messages

---

# Minecraft 1.20.2 Release Candidate 2

A second Release Candidate for 1.20.2 is now available in the Minecraft Launcher. If no further critical issues are found, we still aim to release 1.20.2 later this week.

## Changes

-   Fixed a problem with Villagers and Wandering Traders suffocating when travelling up slopes in Minecarts

---

# Minecraft 1.20.2 Release Candidate 1

Here is the first (and hopefully last) release candidate for 1.20.2. Unless something critical pops up, no further changes will be made for the full release, which is planned for next week.

## Changes

-   The positions that all entities ride on minecarts have been adjusted to make more sense

## Fixed bugs in 1.20.2 Release Candidate 1

-   [MC-265238](https://bugs.mojang.com/browse/MC-265238) trade;;_;;rebalance loot tables have a wrong type
-   [MC-265388](https://bugs.mojang.com/browse/MC-265388) Mobs now sit too high in minecarts

---

# Minecraft 1.20.2 Pre-Release 4

Here comes the fourth pre-release for 1.20.2. Much like the previous one, this pre-release contains some bug and crash fixes.

Happy Mining!

## Technical Changes

### Data Pack Changes

-   Added damage type tag `always_kills_armor_stands` for damage types that should always fully kill an Armor Stand

## Fixed bugs in 1.20.2 Pre-Release 4

-   [MC-265239](https://bugs.mojang.com/browse/MC-265239) Error in logs: java.lang.IllegalStateException: recursive call to sendBlockUpdated
-   [MC-265289](https://bugs.mojang.com/browse/MC-265289) Error in log: java.lang.IllegalStateException: onTrackingStart called during navigation iteration

---

# Minecraft 1.20.2 Pre-Release 3

We are now releasing the third pre-release for 1.20.2. As we are now on the final stabilisation stretch of 1.20.2, this pre-release contains some bug and crash fixes.

Happy Mining!

## Fixed bugs in 1.20.2 Pre-Release 3

-   [MC-264564](https://bugs.mojang.com/browse/MC-264564) Record attribute is stripped from records with no components
-   [MC-265296](https://bugs.mojang.com/browse/MC-265296) Player sits lower in minecarts
-   [MC-265335](https://bugs.mojang.com/browse/MC-265335) Hoglins can't be bred

---

# Minecraft 1.20.2 Pre-Release 2

Another pre-release this week with minor changes and some bug fixes.

## Recipe book search revert

We received a lot of great feedback on the changes to the Recipe Book search in the last pre-release, as well as a number of bugs. As we do not have time to address this feedback so close to release, we have reverted the change for now, but we may look into this again at a later time.

## Technical Changes

-   The resource pack version is now 18 accounting for the new icons in last pre-release

## Fixed bugs in 1.20.2 Pre-release 2

-   [MC-109346](https://bugs.mojang.com/browse/MC-109346) Newly rendered players always look south until they move their head
-   [MC-206182](https://bugs.mojang.com/browse/MC-206182) Cannot tab out of console text field of command block
-   [MC-235762](https://bugs.mojang.com/browse/MC-235762) Screenshots wider than 16384 pixels causes a crash / java.lang.OutOfMemoryError: Out of stack space
-   [MC-249702](https://bugs.mojang.com/browse/MC-249702) Server crash: java.lang.NullPointerException: Cannot invoke "com.google.gson.JsonArray.iterator()" because "$$1" is null
-   [MC-261119](https://bugs.mojang.com/browse/MC-261119) Accessibility button in the Welcome screen needs its own string
-   [MC-262754](https://bugs.mojang.com/browse/MC-262754) Change in AbstractScrollWidget breaks MultiLineEditBox click-to-move-cursor behaviour
-   [MC-264759](https://bugs.mojang.com/browse/MC-264759) Narrator narrates incorrect tab action in command block suggestions
-   [MC-265237](https://bugs.mojang.com/browse/MC-265237) Recipe book search no longer finds anything containing non-English characters
-   [MC-265241](https://bugs.mojang.com/browse/MC-265241) Recipe book search no longer finds relevant items in languages where compound words are not separated
-   [MC-265243](https://bugs.mojang.com/browse/MC-265243) Uncraftable variants of a craftable recipe are shown as craftable now
-   [MC-265244](https://bugs.mojang.com/browse/MC-265244) Macro arguments entered as floats are converted to scientific notation
-   [MC-265245](https://bugs.mojang.com/browse/MC-265245) Crafting book search doesn't find anything when a space is included in the search
-   [MC-265253](https://bugs.mojang.com/browse/MC-265253) Fullscreen Resolution value is untranslatable
-   [MC-265260](https://bugs.mojang.com/browse/MC-265260) Boats and rafts when placed turn south
-   [MC-265262](https://bugs.mojang.com/browse/MC-265262) Revoked recipes remain in the recipe book until relogging
-   [MC-265263](https://bugs.mojang.com/browse/MC-265263) Ender Pearl vanishes client side when enderPearlsVanishOnDeath is false
-   [MC-265264](https://bugs.mojang.com/browse/MC-265264) trade;;_;;rebalance tags are not in the trade;;_;;rebalance pack
-   [MC-265276](https://bugs.mojang.com/browse/MC-265276) Fire under naturally generated end crystals does not always emit light correctly
-   [MC-265280](https://bugs.mojang.com/browse/MC-265280) Mobs sometimes become invisible when you join a singleplayer world

---

# Minecraft 1.20.2 Pre-Release 1

Are you pre-pared for Pre-release 1 of 1.20.2? Moving into pre-releases means that, moving forward, you won't see any significant changes besides bug fixes and tweaks until the next snapshot cycle. It also means that we will be releasing more frequently than just Wednesdays, so keep your eyes peeled! However, Pre-release 1 brings new changes to the 'Villager Trade Rebalance' experiment, updates to Recipe Book search, command changes, and a new game rule!

Happy crafting!

## Changes

-   The Recipe Book search has been updated with the following changes:
    -   The search will only match the beginning of any word in the item's name
        -   For example, searching for "tor" will still show Torch and Redstone Torch but not Daylight Detector anymore
    -   All recipes, including those that have not been unlocked, will now show up in search results
    -   This will enable experienced players to find the recipes they are looking for (even if it hasn't been unlocked yet) without overwhelming new players
-   Updated structure icons on explorer maps sold by Cartographers
-   When villagers unlock new trades, the order of those trades in the UI is now always random instead of sometimes being deterministic

## Technical Changes

-   The data pack version is now 18
-   Client options are now sent during the configuration network phase when joining a server

### Data Pack Version 18

This data pack version removes the recently introduced `execute if function` and `return run` functionality. Flaws with those commands (see bugs [MC-264595](https://bugs.mojang.com/browse/MC-264595), [MC-264699](https://bugs.mojang.com/browse/MC-264699) and [MC-264710](https://bugs.mojang.com/browse/MC-264710)) require some substantial changes to fix, which we do not want to make close to a release.

These commands will instead be reintroduced early in the next snapshot series when we can take the time to iterate on and test them together with pack makers.

-   Removed `execute if|unless function` command form
-   Removed `return run` command form
-   Numbers used as macro arguments are now always inserted without suffixes, regardless of numeric type
-   Added game rule `enderPearlsVanishOnDeath`, controlling whether thrown ender pearls vanish when the player that threw them dies (default `true`)

## Experimental Features

### Villager Trade Rebalance Part 2

This pre-release updates the Villager Trade Rebalance experiment. This experiment has no effect on normal worlds. If you want to try these changes, you must turn on the Feature Toggle in the Experiments Menu when creating a new world. You can find more information about Feature Toggles [here](https://www.minecraft.net/article/testing-new-minecraft-features/feature-toggles-java-edition).

Thank you to everyone that has sent in their suggestions and feedback regarding the experimental trade change! We are trying out these changes to rebalance the villager trade system and make it more fair and fun for everyone. However, these changes are not yet final, and they will stay as experimental features while we continue to work on them. We appreciate your feedback on these changes. Visit [this link](https://aka.ms/VillagerTradingFeedback) to share your thoughts! We have been following the discussions about the previous Librarian and Wandering Trader updates and look forward to seeing the conversation continue.

#### Cartographer

Before now, Cartographers only sold maps to the Ocean Monument and Woodland Mansion. In this experiment Cartographers can sell seven new maps as well. These new maps each point to a different village or structure and can be used to find seven different biomes. This will help players who want to quickly find a specific location without waiting until they come across it by chance.

Cartographers from different biomes will sell a different selection of maps. Starting from one village, it will be possible to find every other village type by following maps from village to village.

Cartographers now sell 7 new maps: Desert Village Map, Jungle Explorer Map, Plains Village Map, Savanna Village Map, Snow Village Map, Swamp Explorer Map, and Taiga Village Map.

#### Armorer

The Armorer's trades have been updated with many changes.

The biggest change is that buying diamond armor now requires paying a small amount of Diamonds as well as Emeralds. This is meant to make the Armorer's diamond armor trades less useful at the start of the game when players don't have any Diamonds, while still giving a powerful advantage to advanced players who have spent some time collecting Diamonds.

Early-game players will find Armorers useful as a great source of iron armor, Shields and Emeralds.

Other changes include:

-   Most master-level Armorers buy Iron Blocks (and pay very well for them)
-   Chainmail armor is exclusively sold by the secret Jungle and Swamp Armorers
-   The Savanna Armorer sells cursed diamond armor at reduced prices
-   The Taiga Armorer can swap one piece of diamond armor for another

#### Structure Loot

Certain Enchanted Books now have a high chance of generating in some structures:

-   Ancient Cities: Mending
-   Mineshafts: Efficiency (I to V)
-   Pillager Outposts: Quick Charge (I to III)
-   Desert Temples: Unbreaking (I to III)
-   Jungle Temples: Unbreaking (I to III)

## Fixed bugs in 1.20.2 Pre-release 1

-   [MC-70127](https://bugs.mojang.com/browse/MC-70127) Some block state changes aren't communicated to clients
-   [MC-72721](https://bugs.mojang.com/browse/MC-72721) Chat messages show after death independent of chat setting
-   [MC-103800](https://bugs.mojang.com/browse/MC-103800) Sometimes armor stands won't update their visual rotation
-   [MC-119873](https://bugs.mojang.com/browse/MC-119873) The text used for the credits button within the title screen is untranslatable
-   [MC-154827](https://bugs.mojang.com/browse/MC-154827) Typo in splash text "Verlet intregration!"
-   [MC-177172](https://bugs.mojang.com/browse/MC-177172) Dash in villager/trader UI is hardcoded / untranslatable
-   [MC-248778](https://bugs.mojang.com/browse/MC-248778) The item count symbol within shulker box tooltips is untranslatable
-   [MC-248833](https://bugs.mojang.com/browse/MC-248833) The parentheses used before and after the warning label within the language menu are untranslatable
-   [MC-248844](https://bugs.mojang.com/browse/MC-248844) The page indicator symbol within the recipe book GUI is untranslatable
-   [MC-248846](https://bugs.mojang.com/browse/MC-248846) The colon used within the death screen to show the player's score is untranslatable
-   [MC-249355](https://bugs.mojang.com/browse/MC-249355) The hyphen used within the statistics menu to show a null value is untranslatable
-   [MC-252295](https://bugs.mojang.com/browse/MC-252295) The word "whilst" within several death messages isn't spelled in American English
-   [MC-252298](https://bugs.mojang.com/browse/MC-252298) Death messages relating to the Thorns enchantment don't contain conjunctions where appropriate
-   [MC-252316](https://bugs.mojang.com/browse/MC-252316) The word "burnt" within some death messages isn't spelled in American English
-   [MC-253241](https://bugs.mojang.com/browse/MC-253241) The player count indicator symbol within the multiplayer menu is untranslatable
-   [MC-253269](https://bugs.mojang.com/browse/MC-253269) The advancement progress indicator symbol within the advancements menu is untranslatable
-   [MC-253270](https://bugs.mojang.com/browse/MC-253270) The hyphen used within boss bars for raids is untranslatable
-   [MC-253278](https://bugs.mojang.com/browse/MC-253278) The percentage symbol used within the level loading screen to show the loading progress of the world is untranslatable
-   [MC-253281](https://bugs.mojang.com/browse/MC-253281) Text within filled map tooltips when advanced tooltips are hidden is untranslatable
-   [MC-253283](https://bugs.mojang.com/browse/MC-253283) The percentage and chunk indicator symbols used within the optimize world menu are untranslatable
-   [MC-253638](https://bugs.mojang.com/browse/MC-253638) The symbols used within shulker box tooltips to show random loot table contents are untranslatable
-   [MC-255418](https://bugs.mojang.com/browse/MC-255418) Vertical redstone dust placed against dropper/dispenser/hopper doesn't visually disappear when the dust above is removed
-   [MC-256777](https://bugs.mojang.com/browse/MC-256777) The two characters used within the tab list to show players' health are untranslatable
-   [MC-260819](https://bugs.mojang.com/browse/MC-260819) The "death.attack.message;;_;;too;;_;;long" string is missing an article before the word "stripped"
-   [MC-263133](https://bugs.mojang.com/browse/MC-263133) Inconsistent word usage in Out of Memory screen
-   [MC-264233](https://bugs.mojang.com/browse/MC-264233) Player is shown as Anonymous after dying and respawning
-   [MC-264574](https://bugs.mojang.com/browse/MC-264574) symlink does not work for root world folder
-   [MC-264615](https://bugs.mojang.com/browse/MC-264615) It takes several seconds for the absorption effect icon to display after obtaining the effect
-   [MC-264656](https://bugs.mojang.com/browse/MC-264656) Regular golden apples don't increase the number of gold hearts if you previously ate an enchanted golden apple and then took damage
-   [MC-264657](https://bugs.mojang.com/browse/MC-264657) Absorption gold heart refilling is determined by whether the low level and the high level have the same hideParticles parameter
-   [MC-264658](https://bugs.mojang.com/browse/MC-264658) Only integer numeric data type can be used in macro
-   [MC-264809](https://bugs.mojang.com/browse/MC-264809) Redstone comparators cause redstone dust connection issue
-   [MC-265053](https://bugs.mojang.com/browse/MC-265053) Programmer Art lapis lazuli outline texture in enchanting table UI incorrectly uses the old formatting
-   [MC-265060](https://bugs.mojang.com/browse/MC-265060) Missing sprite for error in Loom GUI (loom.png)
-   [MC-265126](https://bugs.mojang.com/browse/MC-265126) 'requirements' field can no longer be skipped in advancements
-   [MC-265151](https://bugs.mojang.com/browse/MC-265151) The "(Unknown)" string that's displayed when being banned from a server for an unknown reason is untranslatable
-   [MC-265209](https://bugs.mojang.com/browse/MC-265209) Switching to protocol "CONFIGURATION" causes race condition
-   [MC-265213](https://bugs.mojang.com/browse/MC-265213) The chat message from the /random command says "between 1 and 6" instead of "1 to 6"

---

# Minecraft 1.20.1 Release Candidate 1

We're now releasing a Release Candidate for a first minor update for Minecraft 1.20. This minor update will be a stability issue to fix some critical issues found after the release of Minecraft 1.20.

## Fixed bugs in 1.20.1 Release Candidate 1

-   Fixed a disk permissions-related crash
-   [MC-263244](https://bugs.mojang.com/browse/MC-263244) The realms invitation icon that appears on the realms button in the main menu is displayed incorrectly
-   [MC-263245](https://bugs.mojang.com/browse/MC-263245) Buttons in the "Add Realm" interface within the realms menu no longer render
-   [MC-263296](https://bugs.mojang.com/browse/MC-263296) Game softlocks after cancelling joining a server
-   [MC-263340](https://bugs.mojang.com/browse/MC-263340) Incorrect Protochunk#setStatus call on chunk generate

---

# Minecraft 1.20 Release Candidate 1

We are now releasing the first, and hopefully only, release-candidate for 1.20, containing two bug fixes. If all goes well, no further changes will be made before the full release of Minecraft 1.20 on Wednesday next week.

Happy crafting!

## Fixed bugs in 1.20 Release Candidate 1

-   [MC-256477](https://bugs.mojang.com/browse/MC-256477) Knowledge books can't be placed in chiseled bookshelves
-   [MC-262853](https://bugs.mojang.com/browse/MC-262853) Pitcher plant breaks and floats when growing without enough light

---

# Minecraft 1.20 Pre-release 7

Pre-release 7 for Minecraft 1.20 is now available in the Minecraft Launcher. This pre-release adds validation of symbolic links and fixes a bug.

### Changes

To improve safety, the game will now detect symbolic links used inside world directory. For a detailed explanation, check our [help article](https://aka.ms/MinecraftSymLinks).

-   If the target of a symbolic link is not on the user-configured allow-list, the game will not proceed with loading the world
    -   Note: world directory itself can still be linked
-   The list of allowed symbolic link targets is stored in file `allowed_symlinks.txt` in client or server top directory
-   The file consists of entries (one per line) with following formats allowed:
    -   Lines starting with `#` are comments and are ignored
    -   `[type]pattern`, where `type` can be `glob`, `regex` or `prefix`
        -   `prefix` matches start of path with given pattern (so for `/test` paths `/test`, `/test/` and `/test/foo.txt` would match)
        -   `regex` matches regular expression against whole path
        -   `glob` uses OS-specific path matching mechanism (for example `*.txt` would usually match files with `txt` extension)
        -   Note: paths will use OS-specific separators
    -   `pattern`, which uses default `prefix` type

## Fixed bug in 1.20 Pre-release 7

-   [MC-257778](https://bugs.mojang.com/browse/MC-257778) Bamboo Mosaic Slabs and Stairs are not in the #slabs and #stairs block and item tags

---

# Minecraft 1.20 Pre-Release 6

The sixth pre-release of the 1.20 update is here, yet again containing more bug fixes.

Happy mining!

## Technical Changes

-   `"item": "minecraft:air"` can no longer be used in datapack recipes
-   Ingredients in array form are now also allowed in `smithing_trim` and `smithing_transform` recipes on fields `template`, `base` and `addition`
    -   Those fields also allow empty arrays, which signalize that slot needs to be left empty

### Loot tables

#### Random sequences

The ID of the random sequence is now an optional field. If no sequence name is given, loot is drawn using a non-deterministic random source.

## Fixed bugs in 1.20 Pre-Release 6

-   [MC-237042](https://bugs.mojang.com/browse/MC-237042) Killing players in the sneaking state that have their sneak option set to "Toggle" in their accessibility settings, results in other players not being able to see them in this state when they respawn
-   [MC-241326](https://bugs.mojang.com/browse/MC-241326) Thomas Guimbretière's name is listed twice and misspelt in the credits
-   [MC-260411](https://bugs.mojang.com/browse/MC-260411) Re-summoned dragons don't spawn end gateways when exiting the world before killing the dragon
-   [MC-262340](https://bugs.mojang.com/browse/MC-262340) Iron Golems can spawn on transparent blocks
-   [MC-262575](https://bugs.mojang.com/browse/MC-262575) Company names are still inconsistent in the credits

---

# Minecraft 1.20 Pre-Release 5

Summer is around the corner here at the office, and what better time to stay inside and try out the new pre-release?!

Happy crafting, you wonderful people!

## Library version updates

-   `uniform` font has been updated to use Unifont 15.0.03 (was 15.0.01 last pre-release)

## Fixed bugs in 1.20 Pre-release 5

-   [MC-120158](https://bugs.mojang.com/browse/MC-120158) Anvils and other falling;;_;;blocks with HurtEntities set to true kill items and xp orbs
-   [MC-261294](https://bugs.mojang.com/browse/MC-261294) Jack o'lantern can be placed on the player or armor stand head without commands and without appearing the blur
-   [MC-262334](https://bugs.mojang.com/browse/MC-262334) Item display entities have wrong lighting when they're rotated
-   [MC-262504](https://bugs.mojang.com/browse/MC-262504) Recipes for colored wool, carpets, and beds in the recipe book are not grouped
-   [MC-262513](https://bugs.mojang.com/browse/MC-262513) Blocks placed in the spot of a previously broken block will display the first frame of the breaking animation until updated
-   [MC-262514](https://bugs.mojang.com/browse/MC-262514) Unbreakable blocks display the first breaking animation frame when attempting to mine them
-   [MC-262690](https://bugs.mojang.com/browse/MC-262690) The player can still jump from the edge of the honey block
-   [MC-262730](https://bugs.mojang.com/browse/MC-262730) Biomes being partially overwritten / regenerated in 1.20pre2 inside old world
-   [MC-262773](https://bugs.mojang.com/browse/MC-262773) Markers, interaction, and display entities prevent weighted pressure plates from deactivating
-   [MC-262778](https://bugs.mojang.com/browse/MC-262778) Losing control of a ridden mob with levitation and then re-gaining control causes levitation to persist indefinitely
-   [MC-262797](https://bugs.mojang.com/browse/MC-262797) Book model not rendering in Enchanting Table GUI
-   [MC-262801](https://bugs.mojang.com/browse/MC-262801) Z-fighting occurs on trimmed enchanted armor in the inventory

---

# Minecraft 1.20 Pre-Release 4

We've now released 1.20 Pre-release 4, resolving a crash in the Multiplayer screen introduced in the last pre-release.

---

# Minecraft 1.20 Pre-Release 3

We are now releasing 1.20 Pre-release 3, containing even more bug fixes.

Happy crafting!

## Fixed bugs in 1.20 Pre-release 3

-   [MC-121788](https://bugs.mojang.com/browse/MC-121788) Jump boost, slow falling and levitation don't apply to ridden horses, pigs or striders until after a relog
-   [MC-152258](https://bugs.mojang.com/browse/MC-152258) Riding an entity with slow falling will not stop fall damage
-   [MC-181280](https://bugs.mojang.com/browse/MC-181280) Incorrect textures can sometimes be displayed
-   [MC-259912](https://bugs.mojang.com/browse/MC-259912) Saddled horses can infinitely retain Levitation effect
-   [MC-260653](https://bugs.mojang.com/browse/MC-260653) Markers, interaction, and display entities can prevent pressure plates from deactivating
-   [MC-260903](https://bugs.mojang.com/browse/MC-260903) Less recent attacker can be credited for kill
-   [MC-261202](https://bugs.mojang.com/browse/MC-261202) Teleporting a display entity jitters the player riding on the stack
-   [MC-262324](https://bugs.mojang.com/browse/MC-262324) Teleporting a mob while riding it doesn't work well
-   [MC-262505](https://bugs.mojang.com/browse/MC-262505) Iron golems can produce particles for blocks they're not colliding with
-   [MC-262593](https://bugs.mojang.com/browse/MC-262593) The word "occurred" is misspelled as "occured" within two realms strings
-   [MC-262684](https://bugs.mojang.com/browse/MC-262684) Game icon has low resolution
-   [MC-262709](https://bugs.mojang.com/browse/MC-262709) Dispensers do not dispense boats at the correct height
-   [MC-262712](https://bugs.mojang.com/browse/MC-262712) Alternative recipes in recipe book do not appear on right-click
-   [MC-262714](https://bugs.mojang.com/browse/MC-262714) The "key.keyboard.unknown" string displayed within the key binds menu is improperly capitalized

---

# Minecraft 1.20 Pre-Release 2

We are now releasing the second pre-release for Minecraft 1.20. This pre-release contains bug fixes.

Happy Mining!

## Technical Changes

-   Game will now display message box on startup if user enabled text-to-speech functionality, but it is not available
-   `"item": "minecraft:air"` can now be used in datapack recipes to denote an ingredient that will match an empty slot.
    -   The following recipe types, however, do not allow for an empty ingredient:
        -   `minecraft:crafting_shaped`
        -   `minecraft:crafting_shapeless`
        -   `minecraft:smelting`
        -   `minecraft:blasting`
        -   `minecraft:smoking`
        -   `minecraft:campfire_cooking`
        -   `minecraft:stonecutting`

## Fixed bugs in 1.20 Pre-release 2

-   [MC-1310](https://bugs.mojang.com/browse/MC-1310) Dispensed boats and rafts get stuck inside of dispensers used to place them
-   [MC-124327](https://bugs.mojang.com/browse/MC-124327) Changing the name of an item and then emptying the text field in an anvil doesn't make the rename unavailable, keeps last non-empty name on output item
-   [MC-132076](https://bugs.mojang.com/browse/MC-132076) Lowercase Letters in controls menu + "Not Bound" is missing
-   [MC-159633](https://bugs.mojang.com/browse/MC-159633) Command feedback messages are unnecessarily created during function execution
-   [MC-165562](https://bugs.mojang.com/browse/MC-165562) Command suggestion report "incorrect argument" when cursor is at the start of a node without suggestions
-   [MC-175504](https://bugs.mojang.com/browse/MC-175504) Single quotation marks are not supported in NBT paths
-   [MC-220096](https://bugs.mojang.com/browse/MC-220096) Graphics warning button(s) improperly capitalized
-   [MC-224976](https://bugs.mojang.com/browse/MC-224976) NativeImage.setPixelRGBA throws exception with message getPixelRGBA
-   [MC-226344](https://bugs.mojang.com/browse/MC-226344) Changing the "Owner" tag of a projectile doesn't affect the outcome of the projectile unless the world is reloaded
-   [MC-237960](https://bugs.mojang.com/browse/MC-237960) New potion effect GUI doesn't work when using Programmer Art
-   [MC-250197](https://bugs.mojang.com/browse/MC-250197) Glass bottles are inconsistently referred to throughout some advancement description strings
-   [MC-252216](https://bugs.mojang.com/browse/MC-252216) 65540: Invalid scancode -1 logged in key bind menu when an option is unbound
-   [MC-252408](https://bugs.mojang.com/browse/MC-252408) Chat restriction strings consist of inconsistent concluding punctuation
-   [MC-256833](https://bugs.mojang.com/browse/MC-256833) Ridable entities that can be steered build up fall damage when on climbable blocks
-   [MC-257052](https://bugs.mojang.com/browse/MC-257052) You cannot double-click on languages within the "Language" menu to select them
-   [MC-257370](https://bugs.mojang.com/browse/MC-257370) Buckets of fish are not sorted in the same order as the fish items
-   [MC-257512](https://bugs.mojang.com/browse/MC-257512) Dead tube coral in creative inventory is in wrong order
-   [MC-258360](https://bugs.mojang.com/browse/MC-258360) Horse armor loses its NBT data when equipped on horses via right-clicking
-   [MC-258461](https://bugs.mojang.com/browse/MC-258461) The "Detect structure size and position:" string displayed within the structure block GUI is improperly capitalized
-   [MC-260468](https://bugs.mojang.com/browse/MC-260468) Wither rose is not grouped with other small flowers in the creative inventory
-   [MC-260602](https://bugs.mojang.com/browse/MC-260602) 'data modify from string' index failure does not return 0 for 'execute store success'
-   [MC-260711](https://bugs.mojang.com/browse/MC-260711) Some words within "/datapack list" command feedback messages are always pluralized
-   [MC-260712](https://bugs.mojang.com/browse/MC-260712) Some words within "/scoreboard" command feedback messages are always pluralized
-   [MC-260713](https://bugs.mojang.com/browse/MC-260713) Some words within "/team" command feedback messages are always pluralized
-   [MC-260715](https://bugs.mojang.com/browse/MC-260715) Some words within "/bossbar" command feedback messages are always pluralized
-   [MC-260716](https://bugs.mojang.com/browse/MC-260716) Some words within "/fill", "/fillbiome", and "/clone" command feedback messages are always pluralized
-   [MC-261024](https://bugs.mojang.com/browse/MC-261024) /execute if loaded does not guarantee entities are loaded
-   [MC-261080](https://bugs.mojang.com/browse/MC-261080) Player can fall through scaffolding when loading a world
-   [MC-261233](https://bugs.mojang.com/browse/MC-261233) Minecart movement is not reliably detected by sculk sensors
-   [MC-261349](https://bugs.mojang.com/browse/MC-261349) Chiseled Bookshelf won't rotate when placed as part of a structure
-   [MC-261433](https://bugs.mojang.com/browse/MC-261433) Shield doesn't block TNT explosion
-   [MC-261816](https://bugs.mojang.com/browse/MC-261816) Most two block tall flowers do not block enchanting tables / are part of #minecraft:replaceable
-   [MC-261988](https://bugs.mojang.com/browse/MC-261988) Inconsistency with Mangrove Roots and Leaves in the Creative Tab
-   [MC-262033](https://bugs.mojang.com/browse/MC-262033) The command block GUI remains open when the said command block is destroyed
-   [MC-262106](https://bugs.mojang.com/browse/MC-262106) Smithing recipe must have template to work
-   [MC-262135](https://bugs.mojang.com/browse/MC-262135) Recipe book GUI is positioned incorrectly
-   [MC-262181](https://bugs.mojang.com/browse/MC-262181) NBSP is a valid invisible character that can be used to rename items to have blank names
-   [MC-262213](https://bugs.mojang.com/browse/MC-262213) Baby sniffer's head is smaller on the first frame of existing
-   [MC-262310](https://bugs.mojang.com/browse/MC-262310) Telemetry description strings consist of inconsistent concluding punctuation
-   [MC-262311](https://bugs.mojang.com/browse/MC-262311) The "telemetry.event.game;;_;;load;;_;;times.description" string is missing an article before the word "execution"
-   [MC-262355](https://bugs.mojang.com/browse/MC-262355) Death messages for falling from climbable blocks do not work
-   [MC-262440](https://bugs.mojang.com/browse/MC-262440) Sniffers can sniff while in love and pathfinding to their lover
-   [MC-262441](https://bugs.mojang.com/browse/MC-262441) Baby sniffers stand a bit too far away from players that are tempting them
-   [MC-262445](https://bugs.mojang.com/browse/MC-262445) The text cursor no longer renders above text
-   [MC-262446](https://bugs.mojang.com/browse/MC-262446) Text within buttons renders above the semi-transparent black lines at the edges of menus
-   [MC-262471](https://bugs.mojang.com/browse/MC-262471) Random skylight underwater where it shouldn't be, that cuts off at the chunk border
-   [MC-262506](https://bugs.mojang.com/browse/MC-262506) Parts of beds render through the alternative recipe GUI in the recipe book
-   [MC-262508](https://bugs.mojang.com/browse/MC-262508) Torchflower;;_;;crop causes the game to crash and locks the world when pollinated by bees
-   [MC-262518](https://bugs.mojang.com/browse/MC-262518) The "mco.configure.world.uninvite.player" string contains an unnecessary space before the question mark
-   [MC-262531](https://bugs.mojang.com/browse/MC-262531) "death.attack.genericKill.player" displays raw translation string (is untranslated)

---

