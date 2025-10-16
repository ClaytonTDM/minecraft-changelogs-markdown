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
-   [MC-266890](https://bugs.mojang.com/browse/MC-266890) The minecraft:grass item does not get upgraded to minecraft:short\_grass

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

-   [MC-265238](https://bugs.mojang.com/browse/MC-265238) trade\_rebalance loot tables have a wrong type
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
-   [MC-265264](https://bugs.mojang.com/browse/MC-265264) trade\_rebalance tags are not in the trade\_rebalance pack
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
-   [MC-260819](https://bugs.mojang.com/browse/MC-260819) The "death.attack.message\_too\_long" string is missing an article before the word "stripped"
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

-   [MC-120158](https://bugs.mojang.com/browse/MC-120158) Anvils and other falling\_blocks with HurtEntities set to true kill items and xp orbs
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
-   [MC-262311](https://bugs.mojang.com/browse/MC-262311) The "telemetry.event.game\_load\_times.description" string is missing an article before the word "execution"
-   [MC-262355](https://bugs.mojang.com/browse/MC-262355) Death messages for falling from climbable blocks do not work
-   [MC-262440](https://bugs.mojang.com/browse/MC-262440) Sniffers can sniff while in love and pathfinding to their lover
-   [MC-262441](https://bugs.mojang.com/browse/MC-262441) Baby sniffers stand a bit too far away from players that are tempting them
-   [MC-262445](https://bugs.mojang.com/browse/MC-262445) The text cursor no longer renders above text
-   [MC-262446](https://bugs.mojang.com/browse/MC-262446) Text within buttons renders above the semi-transparent black lines at the edges of menus
-   [MC-262471](https://bugs.mojang.com/browse/MC-262471) Random skylight underwater where it shouldn't be, that cuts off at the chunk border
-   [MC-262506](https://bugs.mojang.com/browse/MC-262506) Parts of beds render through the alternative recipe GUI in the recipe book
-   [MC-262508](https://bugs.mojang.com/browse/MC-262508) Torchflower\_crop causes the game to crash and locks the world when pollinated by bees
-   [MC-262518](https://bugs.mojang.com/browse/MC-262518) The "mco.configure.world.uninvite.player" string contains an unnecessary space before the question mark
-   [MC-262531](https://bugs.mojang.com/browse/MC-262531) "death.attack.genericKill.player" displays raw translation string (is untranslated)

---

# Minecraft 1.20 Pre-release 1 

It is now time for the first Pre-release for Minecraft 1.20: The Trails and Tales update!

From now on, you should mostly see bugs being fixed. In addition to that, pre-releases don't follow the regular snapshot cadence of releasing on Wednesdays, so keep an eye out for the next pre-release.

As always, a big thank you to the community for your feedback, bugs reported, and awesome ideas throughout the snapshot series. Let the pre-releases commence!

## Changes

-   Colored Wool, Carpets and Beds can now be dyed to any other color

## Technical Changes

-   Added new damage types: `outside_border` and `generic_kill`
-   Random sequences for loot tables are now deterministic
-   Changes in `server.properties` encoding
-   `string` data sources for the `data` command now accept negative boundaries, which are interpreted as index counted from the end of the string

### Damage Types

-   Players outside the world border are now hurt by the damage type `outside_border` instead of `in_wall`
-   Forcibly removing an entity using i.e. the `/kill` command now uses damage type `generic_kill` instead of `out_of_world`

### Loot Table Random Sequences

The game now uses named random sequences to deterministically produce loot for loot tables. Each random sequence produces a unique sequence based on the world seed and sequence ID, which means a loot table will produce the same results when ran with the same parameters in the same world.

The ID of the random sequence to use for a loot table is specified in a new field called `random_sequence`.

### `server.properties`

-   File is now read in UTF-8 initially, with previous encoding (ISO 8859-1/Latin 1) as a fallback
-   File is now written with UTF-8 encoding

## Fixed bugs in 1.20 Pre-release 1

-   [MC-180](https://bugs.mojang.com/browse/MC-180) When reaching the other side of a nether portal the animation plays forever until stepped out of
-   [MC-2215](https://bugs.mojang.com/browse/MC-2215) Encoding errors in server.properties
-   [MC-18060](https://bugs.mojang.com/browse/MC-18060) Several realms strings are untranslatable
-   [MC-35078](https://bugs.mojang.com/browse/MC-35078) Breaking animation is one frame off
-   [MC-123081](https://bugs.mojang.com/browse/MC-123081) Placing an end crystal when entering The End prevents Ender Dragon from spawning
-   [MC-146582](https://bugs.mojang.com/browse/MC-146582) When entering spectator mode while standing on the ground, the player moves down by 0.19051 blocks, which makes you fall down
-   [MC-195781](https://bugs.mojang.com/browse/MC-195781) The "Include entities:" string displayed within the structure block GUI is improperly capitalized
-   [MC-195825](https://bugs.mojang.com/browse/MC-195825) "datapacks" string is inconsistent with "data pack" string in "datapackFailure.title" text
-   [MC-198202](https://bugs.mojang.com/browse/MC-198202) Options background texture does not match dirt texture
-   [MC-203039](https://bugs.mojang.com/browse/MC-203039) Incorrect use of colon in options.hideMatchedNames.tooltip
-   [MC-206548](https://bugs.mojang.com/browse/MC-206548) Leash knot subtitles are not properly capitalized
-   [MC-226454](https://bugs.mojang.com/browse/MC-226454) The "Light as a Rabbit" advancement description has no space after the ellipsis
-   [MC-236606](https://bugs.mojang.com/browse/MC-236606) Lightning bolt related string lacks capitalization
-   [MC-241736](https://bugs.mojang.com/browse/MC-241736) Company names are still inconsistent and partly misspelled in the credits
-   [MC-250571](https://bugs.mojang.com/browse/MC-250571) Gamerule description strings within the world creation menu consist of inconsistent concluding punctuation
-   [MC-256424](https://bugs.mojang.com/browse/MC-256424) Game mode is sometimes referred to as "gamemode"
-   [MC-257336](https://bugs.mojang.com/browse/MC-257336) Some chiseled bookshelf interaction subtitles are improperly capitalized
-   [MC-262006](https://bugs.mojang.com/browse/MC-262006) Melon and Pumpkin are in the default '#maintains\_farmland' tag despite not maintain farmland
-   [MC-262208](https://bugs.mojang.com/browse/MC-262208) In the credits, "Lionbridge" is misspelt in one place (no "g")
-   [MC-262253](https://bugs.mojang.com/browse/MC-262253) Music composers not listed in credits
-   [MC-262265](https://bugs.mojang.com/browse/MC-262265) Changing resource pack that overrides a font crashes JVM
-   [MC-262296](https://bugs.mojang.com/browse/MC-262296) Rabbits are no longer affected by jump boost
-   [MC-262300](https://bugs.mojang.com/browse/MC-262300) Menu text is now rendered in front of the Mojang Studios loading screen fade animation
-   [MC-262304](https://bugs.mojang.com/browse/MC-262304) The stepping\_on predicate condition does not correctly succeed on trapdoors
-   [MC-262308](https://bugs.mojang.com/browse/MC-262308) Entities do not stick to honey blocks pushed by pistons if their center isn't over the honey block
-   [MC-262313](https://bugs.mojang.com/browse/MC-262313) Nether won't load in upgraded worlds
-   [MC-262317](https://bugs.mojang.com/browse/MC-262317) Items don't respect properties of the block they are supported on
-   [MC-262351](https://bugs.mojang.com/browse/MC-262351) Worldgen deadlock caused by supporting block checks
-   [MC-262363](https://bugs.mojang.com/browse/MC-262363) Player can still gain a normal jump off of a honey block with precise timing
-   [MC-262424](https://bugs.mojang.com/browse/MC-262424) Sprinting particles on the edges of blocks are still incorrect

---

# Minecraft 1.19.4 Release Candidate 3

A third Release Candidate is now available for Minecraft 1.19.4, fixing one issue in preparation for the full release of Minecraft 1.19.4 tomorrow.

Happy Crafting!

## Fixed bug in 1.19.4 Release Candidate 3

-   [MC-260901](https://bugs.mojang.com/browse/MC-260901) Guardians deal thorns damage even while their spikes are retracted

---

# Minecraft 1.19.4 Release Candidate 2

We are releasing a second Release Candidate for 1.19.4 to fix a few critical issues.

## Fixed bugs in 1.19.4 Release Candidate 2

-   [MC-260677](https://bugs.mojang.com/browse/MC-260677) Advancement icons handle translucent textures wrong
-   [MC-260878](https://bugs.mojang.com/browse/MC-260878) Guardians apply Thorns damage when hit by projectiles
-   [MC-260881](https://bugs.mojang.com/browse/MC-260881) Transparent 3D models dont render properly in the GUI/Hotbar

---

# Minecraft 1.19.4 Release Candidate 1

Here is the first (and hopefully last) release candidate for 1.19.4. Unless something critical pops up, no further changes will be made for the full release, which is planned for next week.

Happy mining!

## Technical Changes

Changes to display entity interpolation:

-   interpolation always starts at the beginning on client tick
-   field `interpolation_start` is replaced with `start_interpolation`, with a different meaning
-   `start_interpolation` describes amount of ticks from the start of next client tick after receiving an update to start of interpolation
    -   for example value `0` means that interpolation will start at the beginning of next client tick after receiving the update
-   `start_interpolation` is not stored in entity data
    -   when using data commands, if interpolated value is updated, but `start_interpolation` is not present in modified tag, interpolation will continue from the time of previous update, but with new values

## Fixed bugs in 1.19.4-rc1

-   [MC-260857](https://bugs.mojang.com/browse/MC-260857) Display entities summoned with initial transformation interpolate incorrectly from default transformation during next transformation

---

# Minecraft 1.19.4 Pre-Release 4

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
-   [MC-259715](https://bugs.mojang.com/browse/MC-259715) The "death.attack.message\_too\_long" string is missing an article before the word "message"
-   [MC-259792](https://bugs.mojang.com/browse/MC-259792) The "selectWorld.experimental.message" string is missing a serial comma
-   [MC-259853](https://bugs.mojang.com/browse/MC-259853) block\_display transform breaks when shearing
-   [MC-259896](https://bugs.mojang.com/browse/MC-259896) item\_display has a wrong default value
-   [MC-260068](https://bugs.mojang.com/browse/MC-260068) The sounds of using brushes don't show any subtitles
-   [MC-260196](https://bugs.mojang.com/browse/MC-260196) Entities don't recognize decorated pots as obstacles when pathfinding
-   [MC-260214](https://bugs.mojang.com/browse/MC-260214) Entities will often spin while pathfinding on top of decorated pots
-   [MC-260215](https://bugs.mojang.com/browse/MC-260215) Water within waterlogged decorated pots doesn't flow
-   [MC-260265](https://bugs.mojang.com/browse/MC-260265) Lighting does not transform with display entities
-   [MC-260285](https://bugs.mojang.com/browse/MC-260285) Applying an identical transformation will result in the previous interpolation repeating instead of having no effect
-   [MC-260321](https://bugs.mojang.com/browse/MC-260321) Sniffers in the distance have lots of Z-fighting on their body
-   [MC-260429](https://bugs.mojang.com/browse/MC-260429) The texture of the Cherry Sign post has an inconsistency with the other Signs
-   [MC-260497](https://bugs.mojang.com/browse/MC-260497) Villager trade button interferes with the slider
-   [MC-260642](https://bugs.mojang.com/browse/MC-260642) tall\_grass and large\_fern display gray as block\_display entities
-   [MC-260681](https://bugs.mojang.com/browse/MC-260681) UI click sounds in Create New World menu tabs are louder than they should be
-   [MC-260735](https://bugs.mojang.com/browse/MC-260735) You can block falling anvils and dripstone with a shield
-   [MC-260764](https://bugs.mojang.com/browse/MC-260764) Right-clicking will focus text fields
-   [MC-260765](https://bugs.mojang.com/browse/MC-260765) Right-clicking will move packs in the pack edit screen
-   [MC-260774](https://bugs.mojang.com/browse/MC-260774) Players are kicked from server environments due to chat message validation failures when attempting to type in chat after having previously altered chat settings

---

# Minecraft 1.19.4 Pre-Release 3

We're back again with the third pre-release for Minecraft 1.19.4. This pre-release contains more bug fixes, as well as color adjustments for potions. The archer pottery shard texture has also been updated. ​ Happy mining! ​

## Changes

-   Potions have had their colors adjusted to make them more distinguishable from each other

​

## Technical Changes

-   Pressing F3+S will now dump contents of dynamic textures (like atlases, maps, etc.) to `screenshots/debug/`

​

## Experimental Feature Changes

### Pottery Shards

-   Updated the textures of the Archer Pottery Shard based on community feedback

​

## Fixed bugs in 1.19.4-pre3

-   [MC-148458](https://bugs.mojang.com/browse/MC-148458) Ridable mobs aren't knocked back upon death
-   [MC-250486](https://bugs.mojang.com/browse/MC-250486) Error saving GUI scale option when toggling fullscreen while fullscreen resolution is changed
-   [MC-258561](https://bugs.mojang.com/browse/MC-258561) Endermen teleport away instead of taking damage from end crystal, TNT and wither skull explosions
-   [MC-259666](https://bugs.mojang.com/browse/MC-259666) Reloading a resource pack that has a custom texture atlas for a second time causes severe FPS lag on the client
-   [MC-260277](https://bugs.mojang.com/browse/MC-260277) potted\_cherry\_sapling and potted\_torchflower not part of #flower\_pots block tag
-   [MC-260451](https://bugs.mojang.com/browse/MC-260451) Inventory character with semi-transparent outer skin layer not rendered correctly when looking right
-   [MC-260456](https://bugs.mojang.com/browse/MC-260456) Certain potions are still indistinguishable by color
-   [MC-260470](https://bugs.mojang.com/browse/MC-260470) Endermen can't dodge arrows fired from a dispenser
-   [MC-260474](https://bugs.mojang.com/browse/MC-260474) Players and mobs are no longer affected by knockback upon death
-   [MC-260501](https://bugs.mojang.com/browse/MC-260501) Cannot delete previous snapshot world in launcher
-   [MC-260579](https://bugs.mojang.com/browse/MC-260579) Crash when a guardian deals damage to itself after removing thorns from avoids\_guardian\_thorns
-   [MC-260605](https://bugs.mojang.com/browse/MC-260605) Repeating command block summoning piglins/villagers causes memory usage to constantly increase
-   [MC-260627](https://bugs.mojang.com/browse/MC-260627) Dolphins with passengers either accelerate to ludicrous speed or are immobilized completely

---

# Minecraft 1.19.4 Pre-Release 2

We are now releasing the second pre-release for Minecraft 1.19.4. This pre-release contains bug fixes, as well as an updated model for the decorated pot.

As a reminder, the pre-release cycle for 1.19.4 will continue to contain mostly bug fixes.

Happy mining!

## Technical Changes

### Mob Behavior

-   Only mobs in the `dismounts_underwater` entity tag will now force the rider to dismount when underwater

## Changes for Experimental Features

### Cherry Biome and Wood Set

-   Updated the texture for Pink Petals
-   Updated textures for the Cherry Door, Cherry Sapling, and Cherry Boat with Chest

### Decorated Pot

-   Updated the neck of the Decorated Pot model
    -   With the former pot we decided to make the pot's neck clip with blocks, so it would be extra flexible to build with
    -   However, this had some Z-fighting issues where 2 objects are in the same exact position and cause flickering
    -   This is prevented with the new and more complex block model

## Fixed bugs in 1.19.4 Pre-release 2

-   [MC-137552](https://bugs.mojang.com/browse/MC-137552) Loaded crossbows look unloaded in item frames and when dropped on the ground
-   [MC-229293](https://bugs.mojang.com/browse/MC-229293) Casting issue: Broken blocks drop items in the wrong position at high distances
-   [MC-259208](https://bugs.mojang.com/browse/MC-259208) Zombie riding chicken or skeleton riding spider not considered controllers by /execute on controller command
-   [MC-259609](https://bugs.mojang.com/browse/MC-259609) Tooltips from selected buttons and sliders don't disappear when expected
-   [MC-259831](https://bugs.mojang.com/browse/MC-259831) UI Buttons break certain resource packs as of 23w06a
-   [MC-259839](https://bugs.mojang.com/browse/MC-259839) Duplicated "minecraft:freeze" in damage\_type tag "bypasses\_armor"
-   [MC-259885](https://bugs.mojang.com/browse/MC-259885) Upon entering the credits screen while in F1 mode, the Minecraft: Java Edition logo does not display correctly
-   [MC-259961](https://bugs.mojang.com/browse/MC-259961) item\_display does not take some nbt tags into account
-   [MC-259979](https://bugs.mojang.com/browse/MC-259979) Striders and blazes do not take five times the damage when using /damage with freeze type
-   [MC-260208](https://bugs.mojang.com/browse/MC-260208) Display entities in spawn chunks with interpolation\_duration greater than 0 visually reset to default transformation on rejoin
-   [MC-260268](https://bugs.mojang.com/browse/MC-260268) Can't scroll using arrows in "Telemetry Data Collection" screen
-   [MC-260324](https://bugs.mojang.com/browse/MC-260324) Cherry Boat with Chest item texture has a misplaced pixel
-   [MC-260335](https://bugs.mojang.com/browse/MC-260335) Clicking with an item that is out of stock in the villager trading menu with sufficient payment will allow purchase of the item regardless
-   [MC-260364](https://bugs.mojang.com/browse/MC-260364) Cherry Door inconsistent item texture
-   [MC-260427](https://bugs.mojang.com/browse/MC-260427) Button text is visible outside menus
-   [MC-260434](https://bugs.mojang.com/browse/MC-260434) There is no "Will be saved in..." text in the new world creation menu
-   [MC-260436](https://bugs.mojang.com/browse/MC-260436) Item Tags in 1.19.4-pre1 have extra entries
-   [MC-260438](https://bugs.mojang.com/browse/MC-260438) Items are not rendered in the bundle UI
-   [MC-260443](https://bugs.mojang.com/browse/MC-260443) Loading a snapshot 23w07a experimental world says it can be opened in "safe mode" and clicking "safe mode" does nothing
-   [MC-260445](https://bugs.mojang.com/browse/MC-260445) Player can climb up one block while riding a boat or raft
-   [MC-260461](https://bugs.mojang.com/browse/MC-260461) Water mobs cannot be ridden in water

---

# Minecraft 1.19.4 Pre-Release 1

We are now releasing the first pre-release for Minecraft 1.19.4. This pre-release contains a new high contrast accessibility setting, some updates to the Create World tab visuals, a new execute subcommand, improvements to startup performance, and lots of bug fixes!

For the remainder of the 1.19.4 cycle, you should mostly see bugs being fixed. In addition to that, pre-releases don't follow the regular snapshot cadence of releasing on Wednesdays, so keep an eye out for the next pre-release.

Happy mining!

## Important Note

-   Experimental 1.20 worlds created in the previous snapshot (23w07a) can no longer be opened in this version

## Changes

-   The enchantment glint for items in the inventory has been made more visible
-   The default value of the "Glint Strength" setting has been reduced to 75%
-   Potions no longer have an enchantment glint due to it obscuring the color of the potion contents
-   Added a notification system for Realms to tell you about important information about your Realm

### Accessibility

-   Added a built-in resource pack that enhances the contrast of UI elements
    -   The resource pack can be enabled in the Accessibility Options screen or manually in the Resource Pack screen
    -   This is only available in the menus for now, but we’ll be looking to bring this to gameplay UIs in the future as well

### Updated Create New World Screen

-   The appearance of the tab bar in the Create New World screen has been updated
    -   Tabs now have unique visuals instead of being traditional buttons
    -   The tabs now align to the center of the screen
    -   The content has been aligned to the top of the screen

## Technical Changes

-   The resource pack version is now 13
-   Changed the following game events:
    -   `item_interact_finish` now has a vibration frequency of 2 instead of 14
-   New Damage Type Tag: `bypasses_cooldown` - damage types with this tag bypass the regular invincibility time after taking damage
-   New Entity Type Tag: `fall_damage_immune` - entity types with this tag do not take fall damage

### Resource Pack format

-   The enchantment glint now has two separate texture files: `enchanted_glint_entity.png` and `enchanted_glint_item.png`

### Commands

##### `execute positioned over`

New `execute` sub-command for finding positions on top of a heightmap. Changes the height of the execution position to be on top of the given heightmap. Syntax:

-   `execute positioned over <heightmap>`

###### Heightmaps

A heightmap records the highest position in a column of blocks according to some criteria. Available options:

-   `world_surface`: Any non-air block
-   `motion_blocking`: Any motion blocking material (e.g. ignores flowers and grass)
-   `motion_blocking_no_leaves`: Any non-leaf motion blocking material
-   `ocean_floor`: Any non-fluid motion blocking material

## Changes for Experimental Features

-   The Brush crafting recipe now uses a Feather, Copper Ingot and Stick in a vertical line
-   The Sniffer Spawn Egg colors have been updated
-   The recipe for the Decorated Pot made of all Bricks can now be found in the Recipe Book

## Fixed bugs in 1.19.4 Pre-release 1

-   [MC-106484](https://bugs.mojang.com/browse/MC-106484) Some potions are indistinguishable by color
-   [MC-132200](https://bugs.mojang.com/browse/MC-132200) Ghost block hoppers appear if summoned by command to powered location
-   [MC-253210](https://bugs.mojang.com/browse/MC-253210) Goats will panic when receiving fall damage
-   [MC-253211](https://bugs.mojang.com/browse/MC-253211) Frogs will panic when receiving fall damage
-   [MC-256484](https://bugs.mojang.com/browse/MC-256484) Sitting camels don't stand up and begin following players that are tempting them with their favorite food
-   [MC-256489](https://bugs.mojang.com/browse/MC-256489) Sitting camels that are in love don't attempt to stand up and approach one another to breed
-   [MC-256731](https://bugs.mojang.com/browse/MC-256731) The sounds of camels recovering aren't controlled by the "Friendly Creatures" sound slider
-   [MC-256861](https://bugs.mojang.com/browse/MC-256861) Camels panic when receiving fall damage
-   [MC-259192](https://bugs.mojang.com/browse/MC-259192) Server/client position desync when running /ride too fast and manually dismounting
-   [MC-259246](https://bugs.mojang.com/browse/MC-259246) Passengers on an ender dragon ride too high
-   [MC-259576](https://bugs.mojang.com/browse/MC-259576) Passenger's riding position is too high on a phantom
-   [MC-259613](https://bugs.mojang.com/browse/MC-259613) Enchantment glint is hardly noticeable on some items, even when the Glint Strength is set to 100%
-   [MC-259630](https://bugs.mojang.com/browse/MC-259630) Camels, horses and mules bounce high into the air when being ridden across water
-   [MC-259882](https://bugs.mojang.com/browse/MC-259882) Axolotls no longer give the Regeneration effect to nearby players after they kill a mob, and do not grant "The Healing Power of Friendship!" advancement
-   [MC-259893](https://bugs.mojang.com/browse/MC-259893) Long texts on buttons scroll too fast
-   [MC-259917](https://bugs.mojang.com/browse/MC-259917) Entities immune to fall damage are damaged when using minecraft:fall damage type in /damage
-   [MC-259918](https://bugs.mojang.com/browse/MC-259918) Text scrolling speed isn't accessible-friendly
-   [MC-259920](https://bugs.mojang.com/browse/MC-259920) The "ITEM\_INTERACT\_FINISH" game event overrides other game events causing several actions to not produce their intended vibration frequency
-   [MC-260030](https://bugs.mojang.com/browse/MC-260030) Starting data.Main for data generation crashes
-   [MC-260033](https://bugs.mojang.com/browse/MC-260033) Torchflowers cannot be used to craft suspicious stew
-   [MC-260035](https://bugs.mojang.com/browse/MC-260035) Chickens and parrots are not tempted by torchflower seeds
-   [MC-260051](https://bugs.mojang.com/browse/MC-260051) Bees are not tempted by or attempt to pollinate Pink Petals and Torchflowers
-   [MC-260059](https://bugs.mojang.com/browse/MC-260059) Pigs do not seem to spawn in Cherry Grove biome
-   [MC-260071](https://bugs.mojang.com/browse/MC-260071) Sniffer Digging Sounds can be heard from way too far
-   [MC-260089](https://bugs.mojang.com/browse/MC-260089) Sniffers panic when receiving fall damage
-   [MC-260092](https://bugs.mojang.com/browse/MC-260092) Sniffers' hitboxes are too small resulting in sniffers not being rendered from certain angles despite being visible on the screen
-   [MC-260098](https://bugs.mojang.com/browse/MC-260098) Sniffers aren't required for the "Two by Two" advancement
-   [MC-260102](https://bugs.mojang.com/browse/MC-260102) Torchflower seeds don't contribute to the "A Seedy Place" advancement
-   [MC-260107](https://bugs.mojang.com/browse/MC-260107) Sniffers don't swim properly and their walking animations freeze when in water
-   [MC-260109](https://bugs.mojang.com/browse/MC-260109) Sniffers do not rotate their head to look at the player
-   [MC-260118](https://bugs.mojang.com/browse/MC-260118) Disabling experimental features on the world creation screen causes pack validation to fail
-   [MC-260121](https://bugs.mojang.com/browse/MC-260121) Hoppers are ghost blocks for other players when placed on jukeboxes that are playing music
-   [MC-260125](https://bugs.mojang.com/browse/MC-260125) Sniffer's head occasionally disappears
-   [MC-260126](https://bugs.mojang.com/browse/MC-260126) Using pick block function on grown torchflower crop gives torchflower seeds instead of the plant item
-   [MC-260149](https://bugs.mojang.com/browse/MC-260149) Cherry logs can't be used to craft campfires
-   [MC-260156](https://bugs.mojang.com/browse/MC-260156) The sound of the torchflower being broken after growing is different than the sound of it breaking after being placed
-   [MC-260157](https://bugs.mojang.com/browse/MC-260157) On existing snapshot servers, cherry grove biomes cannot be found with "/locate", nor do they generate
-   [MC-260168](https://bugs.mojang.com/browse/MC-260168) Torchflower crop aren't part of the #crops block tag
-   [MC-260171](https://bugs.mojang.com/browse/MC-260171) Cherry Leaves and Pink Petals aren't part of the #flower block tag
-   [MC-260172](https://bugs.mojang.com/browse/MC-260172) Torchflower isn't part of the #flowers block or item tags
-   [MC-260181](https://bugs.mojang.com/browse/MC-260181) Torchflower seeds are not grouped with other seeds in the creative inventory
-   [MC-260185](https://bugs.mojang.com/browse/MC-260185) Pink Petals aren't insta-mined
-   [MC-260189](https://bugs.mojang.com/browse/MC-260189) Cherry Sapling is not part of the #saplings item tag
-   [MC-260191](https://bugs.mojang.com/browse/MC-260191) Cherry Leaves aren't part of the #leaves and #complete\_find\_tree\_tutorial item tags
-   [MC-260192](https://bugs.mojang.com/browse/MC-260192) You can't make Charcoal with Cherry Logs or Wood
-   [MC-260193](https://bugs.mojang.com/browse/MC-260193) Cherry Logs and Wood can't be used as fuel in furnaces
-   [MC-260194](https://bugs.mojang.com/browse/MC-260194) Create new world screen appears even when world is created; clicking on button causes freeze or crash
-   [MC-260195](https://bugs.mojang.com/browse/MC-260195) Cherry Logs and Wood are missing from the #log, #logs\_that\_burn and #complete\_find\_tree\_tutorial item tags
-   [MC-260209](https://bugs.mojang.com/browse/MC-260209) breaks\_decorated\_pots Item Tag is in the Vanilla datapack, not 1.20
-   [MC-260210](https://bugs.mojang.com/browse/MC-260210) Brush Recipe is in the Vanilla datapack, not 1.20

---

# Minecraft 1.19.3 Release Candidate 3

In order to secure the quality of the Minecraft 1.19.3 release, we have decided to fix a few more critical issues and to delay the release until tomorrow. To that end we are now releasing Minecraft 1.19.3 Release Candidate 3.

Happy mining!

## Fixed bugs in 1.19.3 Release Candidate 3

-   [MC-108707](https://bugs.mojang.com/browse/MC-108707) Potion effects, particles, and fire animations persist client-side after death in server environments
-   [MC-258258](https://bugs.mojang.com/browse/MC-258258) The "EntityTag" NBT data on armor stands is no longer applied upon placement
-   [MC-258279](https://bugs.mojang.com/browse/MC-258279) Particle groups aren't cleared on resource reload

---

# Minecraft 1.19.3 Release Candidate 2

We're now releasing the second (and hopefully last) release candidate for Minecraft 1.19.3, fixing a few critical bugs. If there are no major issues following this release candidate, no further changes will be done before the full release.

With this release candidate, we are reverting a behavior change for translation strings due to a prevalent but unsupported use case. Expect this behavior to be changed in the future to provide a supported alternative.

Happy mining!

## Fixed bugs in 1.19.3 Release Candidate 2

-   [MC-258256](https://bugs.mojang.com/browse/MC-258256) Cannot join a LAN world while offline
-   [MC-258251](https://bugs.mojang.com/browse/MC-258251) Slots (like %s) in translations no longer ignore missing elements in "with"

---

# Minecraft 1.19.3 Release Candidate 1

We're now releasing the first (and hopefully only) release candidate for Minecraft 1.19.3. If there are no major issues following this release candidate, no further changes will be done before the full release.

Happy mining!

## Fixed bugs in 1.19.3 Release Candidate 1

-   [MC-58668](https://bugs.mojang.com/browse/MC-58668): Smooth Lighting Minimum and Maximum levels no longer differ
-   [MC-185279](https://bugs.mojang.com/browse/MC-185279): "Done" and "Cancel" buttons in the game rules screen are not selected in the right order when navigating using Tab
-   [MC-187812](https://bugs.mojang.com/browse/MC-187812): The buttons are not selected in the right order using Tab in the new datapacks and resource packs menus
-   [MC-187816](https://bugs.mojang.com/browse/MC-187816): Using Tab multiple times to select a datapack / resource pack from the list does not deselect it
-   [MC-227250](https://bugs.mojang.com/browse/MC-227250): Mobs continue converting after the conversion process starts and the block causing the conversion is removed
-   [MC-240724](https://bugs.mojang.com/browse/MC-240724): There are no shadows on text displayed within the subtitles overlay
-   [MC-248589](https://bugs.mojang.com/browse/MC-248589): World border texture jumps back and forth between two positions as the player's y level changes
-   [MC-254809](https://bugs.mojang.com/browse/MC-254809): You cannot get water bottles from water in creative mode if there's a potion in your inventory
-   [MC-258159](https://bugs.mojang.com/browse/MC-258159): Pick block doesn't work on Ender Dragon
-   [MC-258190](https://bugs.mojang.com/browse/MC-258190): Bubble columns let skylight through
-   [MC-258195](https://bugs.mojang.com/browse/MC-258195): Performance degradation of NBT modification
-   [MC-258196](https://bugs.mojang.com/browse/MC-258196): Stray pixel in gui/toasts.png
-   [MC-258203](https://bugs.mojang.com/browse/MC-258203): /data modify thinks NBT is too large, but /data merge doesn't
-   [MC-258209](https://bugs.mojang.com/browse/MC-258209): Storage data is broken

---

# Minecraft 1.19.3 Pre-release 3

We're now releasing pre-release 3 for Minecraft 1.19.3 with more bug fixes. Happy mining!

## Fixed bugs in 1.19.3 Pre-release 3

-   [MC-108597](https://bugs.mojang.com/browse/MC-108597): Shulker box still plays the close sound, even if it is destroyed or replaced
-   [MC-165686](https://bugs.mojang.com/browse/MC-165686): Knowledge book texture in the crafting UI hasn't been updated
-   [MC-177141](https://bugs.mojang.com/browse/MC-177141): Cleric working subtitle is "Brewing Stand bubbles" instead of "Cleric works"
-   [MC-194501](https://bugs.mojang.com/browse/MC-194501): IllegalArgumentException (Cannot set property) when using a block without the "axis" property in fancy\_tree\_placer
-   [MC-201769](https://bugs.mojang.com/browse/MC-201769): Copying deeply nested NBT causes StackOverflowError
-   [MC-208051](https://bugs.mojang.com/browse/MC-208051): Chests/trapped chests/barrels do not 'open' after respawning
-   [MC-228976](https://bugs.mojang.com/browse/MC-228976): Entity collision is run on render thread
-   [MC-233051](https://bugs.mojang.com/browse/MC-233051): Server crashes as player logs in
-   [MC-250428](https://bugs.mojang.com/browse/MC-250428): Narrator does not narrate the death screen
-   [MC-256706](https://bugs.mojang.com/browse/MC-256706): Carpet texture is cut off in the recipe book
-   [MC-257121](https://bugs.mojang.com/browse/MC-257121): Players' capes and outer skin layers don't render client-side in server environments when joining worlds while dead
-   [MC-257340](https://bugs.mojang.com/browse/MC-257340): Vexes' hitboxes aren't vertically centered with their models
-   [MC-257350](https://bugs.mojang.com/browse/MC-257350): Top and bottom texture of block of bamboo rotated incorrectly
-   [MC-257392](https://bugs.mojang.com/browse/MC-257392): Vex's new model's head does not rotate to where it looks
-   [MC-257411](https://bugs.mojang.com/browse/MC-257411): Vex Renders Offhand Items Incorrectly
-   [MC-257495](https://bugs.mojang.com/browse/MC-257495): Dying whilst in the Shulker Box GUI will spam "Shulker Closes" sound
-   [MC-257530](https://bugs.mojang.com/browse/MC-257530): When Chat is set to Hidden, the Chat Hidden Warning appears in chat instead of the actionbar when attempting to send a message whilst sleeping or switching gamemode
-   [MC-257817](https://bugs.mojang.com/browse/MC-257817): Player heads with a custom skin lose their noteblock sound data when using Ctrl+Pick block
-   [MC-257839](https://bugs.mojang.com/browse/MC-257839): NullPointerException when attempting to render a tooltip in the Game Rules menu
-   [MC-257843](https://bugs.mojang.com/browse/MC-257843): note\_block\_sound data is lost when breaking a player head
-   [MC-257861](https://bugs.mojang.com/browse/MC-257861): Villagers and Piglin no longer seek out Items

---

# Minecraft 1.19.3 Pre-Release 2

We're now releasing 1.19.3 pre-release 2 which fixes a few bugs.

## Changes in 1.19.3 Pre-release 2

​

-   When tabbing through buttons, tooltips are displayed above or below them
-   Tooltips displayed when hovering are displayed next to the cursor
-   Tooltips from focused buttons (focused by pressing tab) take priority over tooltips from hovered buttons
-   Optimized some exceptionally slow cases of structure lookup

​

## Fixed bugs in 1.19.3 Pre-release 2

​

-   [MC-185618](https://bugs.mojang.com/browse/MC-185618) Creepers can't be ignited with a fire charge
-   [MC-187744](https://bugs.mojang.com/browse/MC-187744) "Place pack files here" hover text on pack selection screen shows everywhere when "Open pack folder" button has focus
-   [MC-189111](https://bugs.mojang.com/browse/MC-189111) Bees get stuck on non-full blocks
-   [MC-256655](https://bugs.mojang.com/browse/MC-256655) Some shorter mobs can attack Players on a Camel
-   [MC-257616](https://bugs.mojang.com/browse/MC-257616) The "Data Collection" button in the telemetry menu displays its hover text regardless of the position of the cursor
-   [MC-257636](https://bugs.mojang.com/browse/MC-257636) Villagers rarely close doors after going through them
-   [MC-257664](https://bugs.mojang.com/browse/MC-257664) Buttons within the list in the social interactions menu display their hover text regardless of the position of the cursor
-   [MC-257668](https://bugs.mojang.com/browse/MC-257668) The draft report icon isn't present on any of the "Title Screen" buttons within the death screen when attempting to disconnect from worlds while having saved draft reports

---

# Minecraft 1.19.3 Pre-Release 1

We’re now releasing the first pre-release for Minecraft 1.19.3. This pre-release fixes a few bugs, contains a few tweaks, and it has some technical changes.

If everything goes as expected, we aim to release this version on December 6th.

Happy mining!

## Technical Changes in 1.19.3 Pre-release 1

-   Added new entity sub-predicate types: `axolotl`, `boat`, `fox`, `mushroom`, `painting`, `rabbit`, `horse`, `llama`, `villager`, `parrot`, `tropical_fish`
-   `fillbiome` command now supports a filtered mode
-   Player Heads can now contain a `note_block_sound` field
    -   When present, this determines the sound a note block makes when the head is placed on top of it

### Loot tables and Advancements

#### New entity sub-predicate types

-   Added new entity sub-predicates for some entity types with variants:
-   `axolotl`
    -   `variant` - values: `lucy`, `wild`, `gold`, `cyan`, `blue`
-   `boat`
    -   Works for boats, chest boats and rafts
    -   `variant` - values: `oak`, `spruce`, `birch`, `jungle`, `acacia`, `dark_oak`, `mangrove`, `bamboo`
-   `fox`
    -   `variant` - values: `red`, `snow`
-   `mooshroom`
    -   `variant` - values: `red`, `brown`
-   `painting`
    -   `variant` - values: see `painting_variant` registry
-   `rabbit`
    -   `variant` - values: `brown`, `white`, `black`, `white_splotched`, `gold`, `salt`, `evil`
-   `horse`
    -   `variant` - values: `white`, `creamy`, `chestnut`, `brown`, `black`, `gray`, `dark_brown`
    -   Markings are separate value and not matched
-   `llama`
    -   `variant` - values: `creamy`, `white`, `brown`, `gray`
-   `villager`
    -   `variant` - values: see `villager_type` registry
    -   Also works for Zombie Villagers
    -   Profession and level are separate values and not matched
-   `parrot`
    -   `variant` - values: `red_blue`, `blue`, `green`, `yellow_blue`, `gray`
-   `tropical_fish`
    -   `variant` - values: `kob`, `sunstreak`, `snooper`, `dasher`, `brinely`, `spotty`, `flopper`, `stripey`, `glitter`, `blockfish`, `betty`, `clayfish`

### `fillbiome` command

Now supports a filtered form. New syntax:

`fillbiome <from> <to> <biome> [replace <filter>]`

New parameter:

-   `filter`: A biome or biome tag to replace

## Fixed bugs in 1.19.3 Pre-release 1

-   [MC-156663](https://bugs.mojang.com/browse/MC-156663) Villager pathfinding broken in water
-   [MC-177596](https://bugs.mojang.com/browse/MC-177596) Weaponsmith working subtitle is "Grindstone used" instead of "Weaponsmith works"
-   [MC-177676](https://bugs.mojang.com/browse/MC-177676) Armorer working subtitle is "Blast Furnace crackles" instead of "Armorer works"
-   [MC-245697](https://bugs.mojang.com/browse/MC-245697) Certain mobs can't get out of water that is at least two blocks deep
-   [MC-255133](https://bugs.mojang.com/browse/MC-255133) Extra copper ore generates in deep dark
-   [MC-256481](https://bugs.mojang.com/browse/MC-256481) minecraft.used:minecraft.BOOK\_TYPE doesn't increase when placing books onto chiseled bookshelves
-   [MC-256679](https://bugs.mojang.com/browse/MC-256679) Axolotls commonly hesitate when avoiding danger and occasionally start pathfinding in dangerous directions
-   [MC-256883](https://bugs.mojang.com/browse/MC-256883) Elements within the game menu are now positioned slightly lower than they were in previous versions
-   [MC-257341](https://bugs.mojang.com/browse/MC-257341) Vex texture does not utilize translucency
-   [MC-257349](https://bugs.mojang.com/browse/MC-257349) Vex does not sit in boats and minecarts properly anymore
-   [MC-257368](https://bugs.mojang.com/browse/MC-257368) Not a valid port error in Open to LAN doesn't show if port is <1024
-   [MC-257373](https://bugs.mojang.com/browse/MC-257373) The cursor in the port number text box doesn't blink
-   [MC-257374](https://bugs.mojang.com/browse/MC-257374) The word "number" isn't capitalized in "Port number"
-   [MC-257386](https://bugs.mojang.com/browse/MC-257386) Inventory menu has broken textures with Programmer Art enabled
-   [MC-257506](https://bugs.mojang.com/browse/MC-257506) Top and bottom texture of chiseled bookshelf rotates depending on placement
-   [MC-257525](https://bugs.mojang.com/browse/MC-257525) Allay movement AI is broken in 22w42a+ causing them to sometimes spin mid-air
-   [MC-257617](https://bugs.mojang.com/browse/MC-257617) You cannot scroll with the mouse wheel on the telemetry screen after clicking the "Open my data" or "Data collection" button
-   [MC-257618](https://bugs.mojang.com/browse/MC-257618) The word "pair" uses the incorrect verb form within the "telemetry.event.world\_loaded.description" string
-   [MC-257619](https://bugs.mojang.com/browse/MC-257619) Baby piglins and zombified piglins take damage when they hit their head on a block
-   [MC-257625](https://bugs.mojang.com/browse/MC-257625) Piglin Head placed on noteblock play the piglin angry sound instead of the piglin ambient sound
-   [MC-257648](https://bugs.mojang.com/browse/MC-257648) The fillbiome command can result in flickering biome colors
-   [MC-257658](https://bugs.mojang.com/browse/MC-257658) Sculk sensors are not activated upon taking books from chiseled bookshelves
-   [MC-257663](https://bugs.mojang.com/browse/MC-257663) The "Hide messages" button in the social interactions menu can now no longer be toggled due to it being executed twice upon being pressed

---

# Minecraft 1.19.2 Release Candidate 2

We're now releasing the first (and hopefully only) release candidate for Minecraft 1.19.2. This release candidate fixes a critical issue related to server connectivity with secure chat. If there are no major issues following this release, no further changes will be done before the full release.

Edit: We've now released 1.19.2 release candidate 2

## FIXED BUGS IN 1.19.2 RELEASE CANDIDATE 2

-   We're now releasing Release Candidate 2 for Minecraft 1.19.2 to fix a crash.

## FIXED BUGS IN 1.19.2 RELEASE CANDIDATE 1

-   This release candidate fixes a critical issue related to server connectivity with secure chat.

## Feedback

Report bugs here: [Minecraft issue tracker!](https://bugs.mojang.com/)

Want to give feedback?

-   Head over to our [feedback website](https://aka.ms/snapshotfeedback) or come chat with us about it on the [official Minecraft Discord](https://discordapp.com/invite/minecraft).

---

# Minecraft 1.19.2 Release Candidate 1

We're now releasing the first (and hopefully only) release candidate for Minecraft 1.19.2. This release candidate fixes a critical issue related to server connectivity with secure chat. If there are no major issues following this release, no further changes will be done before the full release.

## Feedback

Report bugs here: [Minecraft issue tracker!](https://bugs.mojang.com/)

Want to give feedback?

-   Head over to our [feedback website](https://aka.ms/snapshotfeedback) or come chat with us about it on the [official Minecraft Discord](https://discordapp.com/invite/minecraft).

---

# Minecraft 1.19.1 Release Candidate 3

We are now releasing Release Candidate 3 for Minecraft 1.19.1. We still expect to release the full version of 1.19.1 this week.

## Technical Changes in 1.19.1 Release Candidate 3

-   The chat input box will no longer apply custom font glyphs with negative advances, or glyphs with advances greater than 32

## Bugs fixed in 1.19.1 Release Candidate 3

-   [MC-254529](https://bugs.mojang.com/browse/MC-254529) Warning and information toasts can overlap one another

---

# Minecraft 1.19.1 Release Candidate 2

We are now releasing Release Candidate 2 for Minecraft 1.19.1. If no critical issues are found, we expect to release the full version next week.

## Changes in 1.19.1 Release Candidate 2

-   Tweaked the names of the chat preview options
-   Added a warning toast when connecting to a server that doesn't enforce secure chat

## Bugs fixed in 1.19.1 Release Candidate 2

-   [MC-254355](https://bugs.mojang.com/browse/MC-254355) Key binds set to mouse buttons of number greater than 8 switch over by 1 when the game starts
-   [MC-254405](https://bugs.mojang.com/browse/MC-254405) Debug messages aren't prefixed with gray color indicators

---

# Minecraft 1.19.1 Release Candidate 1

We're now releasing the first (and hopefully only) release candidate for Minecraft 1.19.1. We have also now created a help article on chat reporting, available [here](https://help.minecraft.net/hc/articles/7149823936781).

If there are no major issues following this release, no further changes will be done before the full release on Tuesday.

Happy mining!

## Changes in 1.19.1 Release Candidate 1

-   Updated the categories for chat reporting
    -   The "Profanity", "Nudity or pornography" and "Extreme violence or gore" categories have been removed
    -   The description for the "Drugs and alcohol" category has been updated to "Someone is encouraging others to partake in illegal drug related activities or encouraging underage drinking"
    -   The description of the "Harassment and bullying" category has been extended with the following: or posting private personal information about you or someone else without consent ("doxing").

## Technical changes in 1.19.1 Release Candidate 1

-   The `run_command` click event for text components no longer supports sending chat messages directly
    -   Only commands are supported, so a command such as `/say` should be used instead
    -   This means values now always need to be '/'-prefixed
-   Increased the amount of chat context sent with each chat report

## Fixed bugs in 1.19 Release Candidate 1

-   [MC-250020](https://bugs.mojang.com/browse/MC-250020) Allay doesn't ignore items when mobGriefing is set to false
-   [MC-252511](https://bugs.mojang.com/browse/MC-252511) Bedrock not generating on the new blending border between old and new blending
-   [MC-252987](https://bugs.mojang.com/browse/MC-252987) Illegal character '\\n' in text component clickEvent
-   [MC-253114](https://bugs.mojang.com/browse/MC-253114) Selection boxes within the "Select Chat Messages to Report" menu don't disappear when deselecting fields after reentering the menu
-   [MC-253188](https://bugs.mojang.com/browse/MC-253188) Selection boxes within the "Select Chat Messages to Report" menu differ in size ever so slightly depending on how they're selected
-   [MC-253225](https://bugs.mojang.com/browse/MC-253225) Selection boxes of fields within player reporting menu lists don't contain white outlines when selected using the TAB key
-   [MC-253227](https://bugs.mojang.com/browse/MC-253227) Players can only be reported using the reporting system if they're present within the world
-   [MC-253336](https://bugs.mojang.com/browse/MC-253336) Using the eye of ender "crashes" game in the seed: -3721742095548798177
-   [MC-253422](https://bugs.mojang.com/browse/MC-253422) The selection of the "Please report breaches of our Community Standards" text within the "Select Report Category" menu is slightly confusing due to the words "Community Standards" being underlined by default

---

# Minecraft 1.19.1 Pre-Release 6

We are now releasing pre-release 6 for Minecraft 1.19.1 with some small tweaks to sculk sensors and catalysts as well as bug fixes and improvements to the chat signing system.

## Changes in 1.19.1 Pre-release 6

-   Sculk Catalysts will now drop 5 XP instead of 20 XP
-   Colors of the signing indicators for sending a message have been adjusted for improved accessiblity

## Technical Changes in 1.19.1 Pre-release 6

-   The `run_command` click event for text components no longer supports any commands that send chat messages
    -   `/tellraw` should be used instead

## Bugs fixed in 1.19.1 Pre-release 6

-   [MC-148149](https://bugs.mojang.com/browse/MC-148149) Linux game crash when opening links
-   [MC-207077](https://bugs.mojang.com/browse/MC-207077) Crash on loading pre-1.13 world with noteblock + note NBT in inventory
-   [MC-235614](https://bugs.mojang.com/browse/MC-235614) Reference to unexisting predicate in a datapack causes java.lang.NullPointerException
-   [MC-252190](https://bugs.mojang.com/browse/MC-252190) Player-dropped items creating vibrations depends on you sneaking at the moment the item hits the ground, instead of when you threw the item
-   [MC-252258](https://bugs.mojang.com/browse/MC-252258) Wool block / carpet items generate vibrations, unless thrown by crouching players
-   [MC-252265](https://bugs.mojang.com/browse/MC-252265) --server argument causes java.lang.NullPointerException crash on some servers
-   [MC-253402](https://bugs.mojang.com/browse/MC-253402) Game crash when you shift right click on item in your hotbar to the chest at the same time as you die
-   [MC-254255](https://bugs.mojang.com/browse/MC-254255) Unable to text in chat with Chat Preview On send while sleeping
-   [MC-254261](https://bugs.mojang.com/browse/MC-254261) "The background opacity box of the chat preview field renders behind the ""Leave Bed"" button when sleeping in beds"
-   [MC-254284](https://bugs.mojang.com/browse/MC-254284) Sending chat packets with invalid message type id crashes the game
-   [MC-254349](https://bugs.mojang.com/browse/MC-254349) Crash when putting dye into a loom on a modded server

---

# Minecraft 1.19.1 Pre-release 5

We are now releasing pre-release 5 for Minecraft 1.19.1. This pre-release includes the remaining fixes for a known exploit regarding player report context. It also fixes some other crashes and bugs.

## Changes in 1.19.1 Pre-release 5

### Chat

-   When writing chat messages, the signing status of the displayed chat messages is shown with a colored indicator
    -   The indicator will either appear to the left of the chat input field, or to the left of the chat preview if chat preview is being used
    -   The indicator will be green when the displayed message is signed
    -   The indicator will be orange when Chat Preview is enabled and a preview is waiting to be signed
-   The background of the chat preview will also display slightly faded when a preview is waiting to be signed

### Chat Preview

-   Added "On Send" Chat Preview option for updating chat previews only when attempting to send a message
    -   To confirm sending a message, a second hit of the Enter/Return key is required
    -   The previous "ON" setting has been renamed to "On Modified"
-   The "On Modified" mode no longer displays previews if the message has not been modified by the server
-   Chat Preview is now enabled in singleplayer, and will display when using commands that have selector substitution such as `/say`
-   Previewed hover events and click events are now highlighted with a solid background

## Technical Changes in 1.19.1 Pre-release 5

-   The `team_msg_command` chat type has been split apart into `team_msg_command_incoming` and `team_msg_command_outgoing`

## Bugs fixed in 1.19.1 Pre-release 5

-   [MC-130243](https://bugs.mojang.com/browse/MC-130243) /debug stop message uses OS locale specific number formatting
-   [MC-149047](https://bugs.mojang.com/browse/MC-149047) Scroll Sensitivity slider label uses OS locale for number formatting
-   [MC-252546](https://bugs.mojang.com/browse/MC-252546) Poor audio quality compared to 1.18.2
-   [MC-252702](https://bugs.mojang.com/browse/MC-252702) Game crashes when trying to launch 1.19 when system is in Arabic, Persian, or adjacent formats
-   [MC-253223](https://bugs.mojang.com/browse/MC-253223) "A preposition is incorrectly used within the ""gui.abuseReport.reason.terrorism\_or\_violent\_extremism.description"" string"
-   [MC-253888](https://bugs.mojang.com/browse/MC-253888) Messages that servers have tampered with through chat reporting are signed and reportable
-   [MC-253950](https://bugs.mojang.com/browse/MC-253950) Sending a chat message too fast after typing it fails to sign the eventual proper chat preview
-   [MC-253997](https://bugs.mojang.com/browse/MC-253997) "The current description of ""Imminent harm - Threat to harm others"" report category seems not matching its title"
-   [MC-254089](https://bugs.mojang.com/browse/MC-254089) "Chat Preview components allow server to ""hide"" content"

---

# Minecraft 1.19.1 Pre-Release 4

This pre-release fixes an exploit found regarding contextual chat evidence when creating a Player Report.

## Technical changes in 1.19.1 Pre-Release 4

-   Custom servers can hide player chat messages from display via a new network packet
    -   This does not delete player chat messages from chat logs
-   Insecure chat messages logged in the server are prefixed with a `[Not Secure]` tag
-   The order of chat messages are now cryptographically verified
    -   This will be used for validating the context of chat messages for Player Reports

## Fixed bugs in 1.19.1 Pre-Release 4

-   [MC-253743](https://bugs.mojang.com/browse/MC-253743) The server console doesn't state if chat messages aren't secure or have been modified
-   [MC-253813](https://bugs.mojang.com/browse/MC-253813) Chat commands with entity selectors often reported as "This message is not secure"

---

# Minecraft 1.19.1 Pre-Release 3

Hi everyone,

Before we jump into today's pre-release, we would like to take a moment and dedicate some thoughts to a person who over the years has made an incredible impact on the Minecraft community and touched the lives of many. **Technoblade** became synonymous with a source of good – a positive force that time and time again made many, many people happy and someone we are proud to have as part of our giant family.

Minecraft is its community, which is why it should come as no surprise that so many of us mourn the loss of him, with tributes and love pouring in from across the world.

On behalf of the Java Team – thank you Technoblade for the memories, for all the fun and the laughter. You will be dearly missed. Our thoughts are with your family and friends.

* * *

Regarding 1.19.1: We still have a number of fixes in the pipeline, set for another pre-release in the near future. After that, once everything is tested and verified, we'll be aiming for a release candidate.

## Changes in 1.19.1 Pre-Release 3

-   Moved the chat scrollbar to the right of the chat window
-   System messages (non-player chat, such as those outputted by commands) are displayed with a gray color indicator

## Technical changes in 1.19.1 Pre-Release 3

-   Custom servers can set their own auto-completion options for regular chat via a new network packet
-   The list of players on the Social Interactions screen now places entries for players with recently seen messages at the top of the list
-   The `msg_command` chat type has been split apart into `msg_command_incoming` and `msg_command_outgoing`
-   The `team_name` chat type parameter has been renamed to `target`
    -   This chat type parameter is now used by `msg_command_outgoing`

## Fixed bugs in 1.19.1 Pre-Release 3

-   [MC-253182](https://bugs.mojang.com/browse/MC-253182) The second instance of a reflexive pronoun is used incorrectly within the "gui.abuseReport.reason.self\_harm\_or\_suicide.description" string
-   [MC-253214](https://bugs.mojang.com/browse/MC-253214) Tooltips will become offset in certain cases
-   [MC-253223](https://bugs.mojang.com/browse/MC-253223) A preposition is incorrectly used within the "gui.abuseReport.reason.terrorism\_or\_violent\_extremism.description" string
-   [MC-253496](https://bugs.mojang.com/browse/MC-253496) /execute as {player} run say counts to the report system
-   [MC-253742](https://bugs.mojang.com/browse/MC-253742) The chat scroll bar overlaps the colored indicators used to show the trust status of messages
-   [MC-253773](https://bugs.mojang.com/browse/MC-253773) Whispers appear as modified by the server

---

# Minecraft 1.19.1 Pre-Release 2

Hey everyone! As a few of you might have noticed, we’ve made the decision to postpone the release of 1.19.1 and we're now going back into pre-release mode. This is in order to address a few of our more noticeable issues. We've yet to fully decide on a new release date, but it won't be too far in the future.

We’ve received a lot of feedback regarding the Player Chat Report feature, which is something we address specifically in a newly released post [here](https://www.minecraft.net/article/addressing-player-chat-reporting-tool), as well as in our [FAQ](https://aka.ms/chatreportingfaq) which hopefully answers all your questions!

## Changes in 1.19.1 Pre-Release 2

We've added the ability to see the signing status of chat messages – this is so you can easily tell when a server is tampering with, or removing the signing security of, their players' messages.

### Chat Trust Status

-   Messages that are not signed with the Secure Chat system, or have been tampered with by the server will now be marked
    -   Messages with missing or invalid signatures are marked as "Not Secure"
    -   Messages that are detected as modified are marked as "Modified"
-   The trust status of messages are displayed with both a colored indicator and an icon
    -   The colored indicator is always visible
    -   The icon is only visible when the chat screen is open
-   Hovering over the icon will provide more information about the trust status
    -   For modified messages, the original secure text will also be displayed in the tooltip

## Technical changes in 1.19.1 Pre-Release 2

### Chat Types

-   Chat types added to the `chat_types` registry are now only used for player chat, and not system messages
    -   The `system` and `game_info` chat types have been removed
-   Chat types have been simplified and are now only required to define `chat` and `narration` decorations
    -   Chat types no longer support overlays
    -   A system message should instead be used to display overlays

### server.properties

-   `enforce-secure-profile` is now defaulted to `true` for dedicated servers

## Fixed Bugs in 1.19.1 Pre-Release 2

-   [MC-253112](https://bugs.mojang.com/browse/MC-253112) The game output console is logged with warnings regarding chat packets with invalid signatures when using entity selectors within commands
-   [MC-253121](https://bugs.mojang.com/browse/MC-253121) Entities and other non-player chat message sources appear as players on the Select Chat Messages to Report screen
-   [MC-253493](https://bugs.mojang.com/browse/MC-253493) The descriptions of report categories can once again overlap the "Description:" subtitle
-   [MC-253495](https://bugs.mojang.com/browse/MC-253495) Selection boxes of fields within the "Select Report Category" menu list don't contain white outlines when selected using the TAB key
-   [MC-253497](https://bugs.mojang.com/browse/MC-253497) Entities and other non-player chat message sources appear in the Social Interactions menu
-   [MC-253501](https://bugs.mojang.com/browse/MC-253501) Long messages within the "Select Chat Messages to Report" menu can extend beyond selection boxes and past the scroll bar
-   [MC-253517](https://bugs.mojang.com/browse/MC-253517) Online players cannot connect to offline server because "invalid profile public key signature"

---

# Minecraft 1.19.1 Pre-Release 1

The first pre-release for 1.19.1 is now available. This release contains a few bugfixes, an increased cooldown for Allay duplication, and it also contains a new UI if you have been banned for violating the Minecraft [Community Standards](https://www.minecraft.net/community-standards). ​ On the topic of community standards and the recent introduction of the chat reporting feature, we’re working on creating a help article that aims to add some context surrounding the functionality. ​ All of this said, if everything goes as planned, we plan to release the update next Tuesday on June 28th.

## Changes in 1.19.1 Pre-release 1

​

-   Allay duplication now has a 5-minute cooldown
-   Along with the support for reporting chat, reported players can now be banned from online play and Realms after moderator review
-   The game will show a notice screen on startup if you have been banned from online play
    -   The reason for the ban is shown as well as how long the ban is valid for

## Fixed Bugs in 1.19.1 Pre-Release 1

-   [MC-249973](https://bugs.mojang.com/browse/MC-249973) Loading resource packs is significantly slower in 1.19
-   [MC-252327](https://bugs.mojang.com/browse/MC-252327) World list fails to load after restarting game and deleting a world
-   [MC-252508](https://bugs.mojang.com/browse/MC-252508) Realms worldgen type missing language string
-   [MC-253055](https://bugs.mojang.com/browse/MC-253055) Resource packs causing each WeighedSoundEvents to duplicate Sounds
-   [MC-253102](https://bugs.mojang.com/browse/MC-253102) Chat reporting uses "Messages" for one message
-   [MC-253105](https://bugs.mojang.com/browse/MC-253105) Chat report category scroll bar intersects the selected option outline
-   [MC-253108](https://bugs.mojang.com/browse/MC-253108) Selection boxes within the "Select Report Category" menu aren't vertically centered with the text inside them
-   [MC-253109](https://bugs.mojang.com/browse/MC-253109) The descriptions of report categories can overlap the "Description:" subtitle
-   [MC-253110](https://bugs.mojang.com/browse/MC-253110) Text within the "Discard report and comments?" menu isn't horizontally centered
-   [MC-253111](https://bugs.mojang.com/browse/MC-253111) You cannot use CTRL+HOME or CTRL+END to navigate to the beginning or end of text within the "Report Chat" menu
-   [MC-253113](https://bugs.mojang.com/browse/MC-253113) Chat message content can extend past the outline of a button and past the scroll bar
-   [MC-253123](https://bugs.mojang.com/browse/MC-253123) The button within the "Sending your report" menu changes upon resizing the game window
-   [MC-253126](https://bugs.mojang.com/browse/MC-253126) The scroll bar within the "Select Chat Messages to Report" menu sometimes resets its position to the bottom of the list after scrolling upwards
-   [MC-253127](https://bugs.mojang.com/browse/MC-253127) Reason is not provided when chat report creation is not able to be started
-   [MC-253134](https://bugs.mojang.com/browse/MC-253134) Allays from older worlds don't duplicate
-   [MC-253176](https://bugs.mojang.com/browse/MC-253176) The character indicator symbol within the "Report Chat" menu is untranslatable
-   [MC-253178](https://bugs.mojang.com/browse/MC-253178) The word "Non-consensual" is spelled as "Non-consentual" within the "gui.abuseReport.reason.non\_consensual\_intimate\_imagery" string
-   [MC-253183](https://bugs.mojang.com/browse/MC-253183) The word "Unrelated" within the "gui.chatSelection.fold" string is incorrectly capitalized
-   [MC-253185](https://bugs.mojang.com/browse/MC-253185) The ESC key cannot be used to exit the "Sending your report" menu
-   [MC-253191](https://bugs.mojang.com/browse/MC-253191) Particles produced from allays duplicating cannot be seen by other players

---

# Minecraft 1.19 Release Candidate 2

1.19 release candidate 2 is now available which fixes a crash.

---

# Minecraft 1.19 Release Candidate 1

We're now releasing the first (and hopefully only) release candidate for The Wild Update. If there are no major issues following this release, no further changes will be done before the full release.

Happy mining!

## Fixed Bugs in 1.19 Release Candidate 1

-   [MC-252398](https://bugs.mojang.com/browse/MC-252398) Darkness effect fading in death screen causes subtle flashing

---

# Minecraft 1.19 Pre-Release 5

The fifth pre-release for 1.19 is now available with more bug fixes.

## Fixed bugs in 1.19 Pre-release 5

-   [MC-249121](https://bugs.mojang.com/browse/MC-249121) Sculk is missing subtitles for some sounds
-   [MC-249323](https://bugs.mojang.com/browse/MC-249323) Modifying a world preset to not include overworld settings will not give a datapack error, but selecting the world type will instantly crash your game
-   [MC-250034](https://bugs.mojang.com/browse/MC-250034) Standing on top of mud as it converts to clay causes the player to fall through or be pushed out of the block
-   [MC-250295](https://bugs.mojang.com/browse/MC-250295) Allay's head does not rotate to where it looks
-   [MC-251030](https://bugs.mojang.com/browse/MC-251030) Standing on top of soul sand or mud that converts to sculk will cause entities to fall through it
-   [MC-251323](https://bugs.mojang.com/browse/MC-251323) Mobs target emerging warden/ warden faces attacking mob while emerging if dealt melee damage
-   [MC-251594](https://bugs.mojang.com/browse/MC-251594) Leads are leashed too high on allays
-   [MC-252038](https://bugs.mojang.com/browse/MC-252038) Warden attacks immediately if hit during emerging animation
-   [MC-252108](https://bugs.mojang.com/browse/MC-252108) Eating a food item no longer opens the piston doors in city\_center\_2
-   [MC-252157](https://bugs.mojang.com/browse/MC-252157) 'CustomName' NBT tag still prevents wardens from digging down
-   [MC-252352](https://bugs.mojang.com/browse/MC-252352) URL in eula.txt (dedicated server) points to the wrong location

---

# Minecraft 1.19 Pre-Release 4

The fourth pre-release for 1.19 is now available with a few bugfixes.

In case you missed it, we just announced the release date for the Wild Update (June 7th). You can read more about that [here](https://www.minecraft.net/article/the-wild-update-coming?ref=launcher).

## Fixed bugs in 1.19 Pre-release 4

-   [MC-220067](https://bugs.mojang.com/browse/MC-220067) - Chunk corruption with command block full of certain Unicode characters
-   [MC-245504](https://bugs.mojang.com/browse/MC-245504) - Touchscreen mode crash // java.lang.ClassCastException: class eec$a cannot be cast to class eec$c (eec$a and eec$c are in unnamed module of loader 'app')
-   [MC-249831](https://bugs.mojang.com/browse/MC-249831) - Aquifers can cut themselves off at chunk borders
-   [MC-251840](https://bugs.mojang.com/browse/MC-251840) - Game crash whilst getting block state: cwj: Missing Palette entry for index 8
-   [MC-251859](https://bugs.mojang.com/browse/MC-251859) - Gear equipping sound plays every time armor/elytra durability changes while equipped
-   [MC-251989](https://bugs.mojang.com/browse/MC-251989) - Cannot send chats or use commands in multiplayer since 1.19 Pre-release 1

---

# Minecraft 1.19 Pre-Release 3

It is now time for pre-release 3 for Minecraft 1.19, which will be our last pre-release for this week. In this pre-release we've tweaked the sonic boom attack and fixed more bugs.

Enjoy!

## Changes in 1.19 Pre-release 3

-   Wardens' sonic boom attack now bypasses the damage reduction by armor enchantments such as Protection

## Technical Changes in 1.19 Pre-release 3

-   `item_interact_start` is no longer detectable as a vibration to allow more specific actions be detected, like `drink` or `eat`, but `item_interact_finish` still is

## Fixed Bugs in 1.19 Pre-Release 3

-   [MC-209932](https://bugs.mojang.com/browse/MC-209932) Sculk sensors only detect the last turtle egg being broken when being stepped on
-   [MC-210277](https://bugs.mojang.com/browse/MC-210277) Sculk sensors are not activated upon chickens laying eggs
-   [MC-210278](https://bugs.mojang.com/browse/MC-210278) Sculk sensors are not activated upon bees entering or leaving their hive or nest
-   [MC-214622](https://bugs.mojang.com/browse/MC-214622) Sculk sensors do not detect daylight detector mode switching
-   [MC-249094](https://bugs.mojang.com/browse/MC-249094) Unexpected culling of inner sculk shrieker faces
-   [MC-249230](https://bugs.mojang.com/browse/MC-249230) Frogs prioritize eating entities over panicking when being damaged
-   [MC-250162](https://bugs.mojang.com/browse/MC-250162) Placing a map in an item frame will break any intersecting paintings and item frames with a map inside
-   [MC-250238](https://bugs.mojang.com/browse/MC-250238) Frogs attempt to pathfind to entities outside of their reach causing them to spin and twitch constantly
-   [MC-250983](https://bugs.mojang.com/browse/MC-250983) Allays can get stuck and freeze inside non-full blocks
-   [MC-251220](https://bugs.mojang.com/browse/MC-251220) Block lighting on extended parts are a lot darker in 22w17a compared to 1.18.2
-   [MC-251420](https://bugs.mojang.com/browse/MC-251420) Demo Mode: The "Purchase Now!" link's destination is incorrect
-   [MC-251858](https://bugs.mojang.com/browse/MC-251858) Subtitles are higher than in previous versions
-   [MC-251872](https://bugs.mojang.com/browse/MC-251872) The game output and server console are logged with warnings regarding chat packets with invalid signatures when using entity selectors within commands
-   [MC-251878](https://bugs.mojang.com/browse/MC-251878) Sculk sensors hearing items being dropped on the ground doesn't alert shriekers even if a player drops it
-   [MC-251968](https://bugs.mojang.com/browse/MC-251968) /execute running chat related commands logs "Received chat packet without valid signature" warning
-   [MC-252071](https://bugs.mojang.com/browse/MC-252071) Warden still detects after death if signal is traveling before death
-   [MC-252078](https://bugs.mojang.com/browse/MC-252078) Allays no longer flee or panic when taking damage

---

# Minecraft 1.19 Pre-Release 2

A recent change made it possible for more types of mobs to spawn inside Nether Portals, which caused them to instantly change dimensions after spawning. We will not be making any further changes to this before the release of 1.19, but our intent for the future is to prevent most mobs from spawning in Nether Portals and the ones that do will not immediately travel through the portal. Expect to see these changes in a coming version.

## Changes in 1.19 Pre-release 2

​

-   If the Warden is stuck in a liquid, it will angrily despawn instead of digging
-   Reverted using `generic equip` sound when equipping blocks in the head slot

## Technical Changes in 1.19 Pre-release 2

-   Added game event `teleport` with a vibration frequency of 5

## Fixed bugs in 1.19 Pre-release 2

-   [MC-186148](https://bugs.mojang.com/browse/MC-186148) "death.attack.witherSkull.item" displays raw translation string (is untranslated)
-   [MC-186851](https://bugs.mojang.com/browse/MC-186851) "death.attack.sting.item" displays raw translation string (is untranslated)
-   [MC-207268](https://bugs.mojang.com/browse/MC-207268) Sculk sensors don't detect stripping logs, tilling dirt, or pathing grass
-   [MC-208759](https://bugs.mojang.com/browse/MC-208759) Sculk Sensor's 'block placed' doesn't trigger with villagers placing crops
-   [MC-208760](https://bugs.mojang.com/browse/MC-208760) Sculk Sensor's 'block placed' doesn't trigger when snow golems place snow layers
-   [MC-208761](https://bugs.mojang.com/browse/MC-208761) Sculk Sensor's 'block destroyed' doesn't trigger when blocks are destroyed by pistons
-   [MC-209701](https://bugs.mojang.com/browse/MC-209701) Sculk sensors are not activated upon placing food onto campfires
-   [MC-209900](https://bugs.mojang.com/browse/MC-209900) Sculk sensors are not activated upon inserting or retrieving music discs from jukeboxes
-   [MC-210330](https://bugs.mojang.com/browse/MC-210330) Sculk sensors are not activated upon throwing eyes of ender
-   [MC-210489](https://bugs.mojang.com/browse/MC-210489) Sculk sensors are not activated upon pointed dripstone filling partially filled cauldrons
-   [MC-210496](https://bugs.mojang.com/browse/MC-210496) Sculk sensors are not activated upon harvesting sweet berry bushes
-   [MC-210801](https://bugs.mojang.com/browse/MC-210801) Wool incorrectly occludes the vibration of item frames being placed
-   [MC-212430](https://bugs.mojang.com/browse/MC-212430) Sculk sensors are not activated upon rain or snow filling partially filled cauldrons
-   [MC-213387](https://bugs.mojang.com/browse/MC-213387) Sculk sensors don't detect endermen/shulkers teleporting from a place to another
-   [MC-220086](https://bugs.mojang.com/browse/MC-220086) Sculk sensors do not detect using an axe to clear the wax/weathering of a copper block
-   [MC-220087](https://bugs.mojang.com/browse/MC-220087) Sculk sensors do not detect using a honeycomb to wax copper
-   [MC-249696](https://bugs.mojang.com/browse/MC-249696) Certain void worlds fail to spawn the player on the stone platform
-   [MC-250259](https://bugs.mojang.com/browse/MC-250259) Warden AI doesn't function properly when it rides on entities
-   [MC-250941](https://bugs.mojang.com/browse/MC-250941) Goats' horns don't snap on copper ore
-   [MC-250956](https://bugs.mojang.com/browse/MC-250956) Baby goats with horns lose their horns when fed
-   [MC-251314](https://bugs.mojang.com/browse/MC-251314) Goats loaded from older worlds lose their horns
-   [MC-251336](https://bugs.mojang.com/browse/MC-251336) Darkness fog flashes at high duration values
-   [MC-251412](https://bugs.mojang.com/browse/MC-251412) Warden afflicting Darkness to players in the same team
-   [MC-251500](https://bugs.mojang.com/browse/MC-251500) Wardens ignore PersistenceRequired and dig away
-   [MC-251601](https://bugs.mojang.com/browse/MC-251601) Darkness rendering incorrectly when reloading the game
-   [MC-251639](https://bugs.mojang.com/browse/MC-251639) Warden emerging particles don't match up with block they emerge on the entire way
-   [MC-251646](https://bugs.mojang.com/browse/MC-251646) "death.attack.sonic\_boom.item" displays raw translation string (is untranslated)
-   [MC-251670](https://bugs.mojang.com/browse/MC-251670) Villager sometimes won't refill their stock
-   [MC-251675](https://bugs.mojang.com/browse/MC-251675) Mesa Mineshafts no longer generate with /place command outside of badlands biomes despite saying the structure has been generated successfully
-   [MC-251736](https://bugs.mojang.com/browse/MC-251736) Reflected ghast fireball cannot hit the ghast
-   [MC-251824](https://bugs.mojang.com/browse/MC-251824) Wardens aren't angered by being hit with damageless projectiles
-   [MC-251854](https://bugs.mojang.com/browse/MC-251854) "It Spreads" advancement can be granted when killing a mob that does not give experience
-   [MC-251859](https://bugs.mojang.com/browse/MC-251859) Gear equipping sound plays every time armor/elytra durability changes while equipped
-   [MC-251860](https://bugs.mojang.com/browse/MC-251860) The minecraft:item.armor.equip\_generic sound is produced when giving items to allays
-   [MC-251862](https://bugs.mojang.com/browse/MC-251862) Shift clicking the destroy item button in the creative inventory creates a vibration when there is nothing in your equipment slots
-   [MC-251864](https://bugs.mojang.com/browse/MC-251864) The minecraft:item.armor.equip\_generic sound is produced when filling water buckets with fish, axolotls, or tadpoles
-   [MC-251871](https://bugs.mojang.com/browse/MC-251871) The minecraft:item.armor.equip\_generic sound is produced and can only be heard by other players when switching items between hands
-   [MC-251876](https://bugs.mojang.com/browse/MC-251876) Villagers produce armor equipping sound when previewing armor
-   [MC-251889](https://bugs.mojang.com/browse/MC-251889) io.netty.handler.codec.EncoderException when evaluating too many entity selectors in chat preview
-   [MC-251890](https://bugs.mojang.com/browse/MC-251890) run\_command click events send value as command instead of chat message
-   [MC-251915](https://bugs.mojang.com/browse/MC-251915) Milking cows, mooshrooms and goats plays gear equipping sound
-   [MC-251916](https://bugs.mojang.com/browse/MC-251916) Eating food items that return empty containers plays gear equipping sound
-   [MC-251919](https://bugs.mojang.com/browse/MC-251919) Equipping a player head, skull or carved pumpkin displays the generic "Gear equips" subtitle
-   [MC-251920](https://bugs.mojang.com/browse/MC-251920) Taking a plant from a pot plays the gear equipping sound and subtitle
-   [MC-251921](https://bugs.mojang.com/browse/MC-251921) Equipping horse armor onto a horse plays the "Gear equips" sound
-   [MC-251922](https://bugs.mojang.com/browse/MC-251922) "Gear equips" sound plays when equipping or removing a saddle from a horse wearing horse armor
-   [MC-251924](https://bugs.mojang.com/browse/MC-251924) Gear equipping sounds and subtitles are played when foxes pick up any item
-   [MC-251925](https://bugs.mojang.com/browse/MC-251925) Gear equipping sounds and subtitles are played when dolphins throw around items
-   [MC-251927](https://bugs.mojang.com/browse/MC-251927) Gear equipping sounds and subtitles are played when CanPickUpLoot mobs pick up items
-   [MC-251928](https://bugs.mojang.com/browse/MC-251928) Gear equips sound plays when filling a single bottle with honey
-   [MC-251929](https://bugs.mojang.com/browse/MC-251929) Gear equips sound plays when filling a single bottle with water from a water source

---

# Minecraft 1.19 Pre-release 1

Presenting the first pre-release of 1.19: The Wild Update!

From now on, you should mostly see bugs being fixed. In addition to that, pre-releases don't follow the regular snapshot cadence of releasing on Wednesdays, so keep an eye out for the next pre-release ;)

As always, a big thank you to the community for your feedback, bugs reported, and awesome ideas throughout the snapshot series. Let the pre-releases commence!

## Changes in 1.19 Pre-release 1

-   Slightly reduced the number of Mangrove trees in Mangrove Swamps
-   Endermen, Skeletons, Wither Skeletons and Piglins now spawn in a wider range of light levels in the Nether (from light level 0 to 11)
-   Item interaction vibrations are now emitted when you start or finish "using" an item with a start and finish state (such as Bows, Crossbows, Goat Horns, Shields, Food)
-   Item interaction vibrations are now ignored when sneaking
-   Placing items that aren't armor (such as Pumpkins and Skulls) in your headwear slot now plays a generic equip sound

## Technical Changes in 1.19 Pre-release 1

-   Auto-completion is now available for the template argument to `place template`
-   Custom servers can now enable or disable chat preview for certain clients by sending a new network packet
-   Now, a chat preview is also shown for chat-related commands, such as `/say` and `/msg`
-   `test-rainbow-chat` has been removed from `server.properties`

### Added Game Events

-   `note_block_play` with a vibration frequency of 6
-   `instrument_play` with a vibration frequency of 15

## Fixed bugs in 1.19 Pre-release 1

-   [MC-94060](https://bugs.mojang.com/browse/MC-94060) Equipping armor/elytra through inventory or dispenser doesn't play sounds
-   [MC-134892](https://bugs.mojang.com/browse/MC-134892) PacketBuffer.writeString's max length is in bytes, while readString is in characters
-   [MC-209222](https://bugs.mojang.com/browse/MC-209222) Attempting to open the Minecraft Realms menu claims that the client is outdated, even if the snapshot may be newer than the release
-   [MC-210279](https://bugs.mojang.com/browse/MC-210279) Sculk sensors are not activated upon entities being summoned by a spawner
-   [MC-213915](https://bugs.mojang.com/browse/MC-213915) Equipping armor through the inventory does not count as a vibration
-   [MC-218222](https://bugs.mojang.com/browse/MC-218222) Distance value for Sculk Sensors is limited to integers
-   [MC-225195](https://bugs.mojang.com/browse/MC-225195) Goats don't panic when tempted with their favorite food
-   [MC-230735](https://bugs.mojang.com/browse/MC-230735) "FOV Effects" setting description is innacurate
-   [MC-249141](https://bugs.mojang.com/browse/MC-249141) No subtitles are produced upon frogs stepping
-   [MC-249164](https://bugs.mojang.com/browse/MC-249164) The entity.frog.tounge sound is misspelled
-   [MC-249209](https://bugs.mojang.com/browse/MC-249209) Frogs don't panic when tempted with their favorite food
-   [MC-249260](https://bugs.mojang.com/browse/MC-249260) Tadpoles are not tempted by slime balls
-   [MC-249328](https://bugs.mojang.com/browse/MC-249328) Frogs can jump around while being tempted with slimeballs
-   [MC-249456](https://bugs.mojang.com/browse/MC-249456) Tadpoles drop experience, unlike other baby mobs
-   [MC-249619](https://bugs.mojang.com/browse/MC-249619) The comparator frequency of sculk sensors when you are stepping on it is the last frequency it heard
-   [MC-249711](https://bugs.mojang.com/browse/MC-249711) Items collected off the ground by allays travel too high above their hitboxes
-   [MC-249757](https://bugs.mojang.com/browse/MC-249757) 'It Spreads' advancement is not a child of 'Monster Hunter'
-   [MC-249834](https://bugs.mojang.com/browse/MC-249834) Swapping items to the player's off-hand can generate vibrations
-   [MC-249980](https://bugs.mojang.com/browse/MC-249980) The Birthday Song advancement description doesn't capitalise the word Cake
-   [MC-250006](https://bugs.mojang.com/browse/MC-250006) ID of the british cat doesn't match texture name
-   [MC-250019](https://bugs.mojang.com/browse/MC-250019) Sculk catalyst triggers when a villager converts into zombie villager by a zombie
-   [MC-250317](https://bugs.mojang.com/browse/MC-250317) The subtitle for picking up a Tadpole with a bucket is the generic "Bucket fills" subtitle
-   [MC-250351](https://bugs.mojang.com/browse/MC-250351) /tp "argument" duplicated on the tab options
-   [MC-250919](https://bugs.mojang.com/browse/MC-250919) The server crashes when attempting to load chunks that contain command blocks that consist of large numbers of characters within the previous output field
-   [MC-250932](https://bugs.mojang.com/browse/MC-250932) Goat horn subtitles are improperly capitalized
-   [MC-250940](https://bugs.mojang.com/browse/MC-250940) Goat horn playing isn't detected as a vibration
-   [MC-251132](https://bugs.mojang.com/browse/MC-251132) Server logs "Game test server" messages
-   [MC-251312](https://bugs.mojang.com/browse/MC-251312) Entity selectors in /say commands are no longer evaluated
-   [MC-251355](https://bugs.mojang.com/browse/MC-251355) Potted mangrove propagule model is incorrect
-   [MC-251405](https://bugs.mojang.com/browse/MC-251405) Structure Block messages are formatted as chat
-   [MC-251479](https://bugs.mojang.com/browse/MC-251479) Duplicate object key \[lang file\]
-   [MC-251550](https://bugs.mojang.com/browse/MC-251550) Failed to launch the game on 32-bit operating system
-   [MC-251640](https://bugs.mojang.com/browse/MC-251640) io.netty.handler.codec.EncoderException when using special characters in chat message
-   [MC-251641](https://bugs.mojang.com/browse/MC-251641) Game crash regarding warden anger
-   [MC-251647](https://bugs.mojang.com/browse/MC-251647) Chat closes itself if the control for Open Chat is set to Enter
-   [MC-251649](https://bugs.mojang.com/browse/MC-251649) Clicking "incomplete command" message removes / in chat
-   [MC-251650](https://bugs.mojang.com/browse/MC-251650) Iron golems can spawn on non spawnable blocks such as leaves, glass, sea lanterns, etc
-   [MC-251652](https://bugs.mojang.com/browse/MC-251652) Warden emerge/roar/sonic charge/dig animation (and possibly other similar animations) don't start unless the player looks at the Warden first
-   [MC-251656](https://bugs.mojang.com/browse/MC-251656) /say command fails to apply server message styling when sent from a command block, server console, or RCON, unlike /msg
-   [MC-251690](https://bugs.mojang.com/browse/MC-251690) Wardens can spawn on any non-full block, as long as it's solid
-   [MC-251736](https://bugs.mojang.com/browse/MC-251736) Reflected ghast fireball cannot hit the ghast
-   [MC-251762](https://bugs.mojang.com/browse/MC-251762) You can run commands with double slash prefix
-   [MC-251773](https://bugs.mojang.com/browse/MC-251773) The --dev argument for the data generators no longer converts NBT to SNBT properly

---

# Minecraft 1.18.2 Release Candidate

We’re now releasing the first (and hopefully only) release candidate for Minecraft 1.18.2. This release candidate fixes two world generation bugs that could cause a server to stop running. If there are no major issues following this release, no further changes will be done before the full release, which is planned for February 28th. ​ Happy mining!

## Fixed Bugs in 1.18.2 Release Candidate 1

-   [MC-244682](https://bugs.mojang.com/browse/MC-244682) Some custom dimensions settings can cause the server to stop running, but not crash
-   [MC-248764](https://bugs.mojang.com/browse/MC-248764) Some worldgen datapacks can kill the internal server (possibly related to density functions)

---

# Minecraft 1.18.2 Pre-Release 3

The third pre-release for 1.18.2 is now out, fixing more bugs!

Happy Crafting!

## Fixed bugs in 1.18.2 Pre-release 3

-   [MC-218739](https://bugs.mojang.com/browse/MC-218739) Glow berries and glow lichen generation does not cause light updates across chunk borders
-   [MC-244772](https://bugs.mojang.com/browse/MC-244772) Can't double click to join a realm
-   [MC-248539](https://bugs.mojang.com/browse/MC-248539) /locate command not working properly in Flat Worlds
-   [MC-248636](https://bugs.mojang.com/browse/MC-248636) The game output and server console are logged and spammed with "Creating a MIN function between two non-overlapping inputs" when joining or creating a world
-   [MC-248637](https://bugs.mojang.com/browse/MC-248637) Crash when opening singleplayer screen due to StackOverflowError in net.minecraft.nbt.CompoundTag$1.skip
-   [MC-248680](https://bugs.mojang.com/browse/MC-248680) The world freezes on superflat when using the locate command to find a pillager outpost
-   [MC-248748](https://bugs.mojang.com/browse/MC-248748) Explorer maps leading to custom structures can cause the server to hang

---

# Minecraft 1.18.2 Pre-Release 2

The second pre-release for 1.18.2 is now out! This pre-release adds a spline density function and fixes a few bugs.

Enjoy!

## Technical Changes in 1.18.2 Pre-Release 2

-   Added [`spline` density](https://wikipedia.org/wiki/Spline_interpolation) function: general-purpose building block that allows you to express almost any function using a cubic spline

## Fixed bugs in 1.18.2 Pre-Release 2

-   [MC-243766](https://bugs.mojang.com/browse/MC-243766) Unable to put focus on "Copyright Mojang AB. Do not distribute" using Tab key
-   [MC-248638](https://bugs.mojang.com/browse/MC-248638) Strongholds can generate in The Void biome
-   [MC-248681](https://bugs.mojang.com/browse/MC-248681) Superflat worlds cannot be created without using presets
-   [MC-248694](https://bugs.mojang.com/browse/MC-248694) An empty generator-settings string crashes the server when starting up
-   [MC-248717](https://bugs.mojang.com/browse/MC-248717) Fortress mobs can spawn outside of fortresses

---

# Minecraft 1.18.2 Pre-Release 1

We're now releasing the first pre-release for Minecraft 1.18.2. This pre-release introduces the possibility for data packs to customize cave generation and to add new custom structures to worlds.

If everything goes as expected, we aim to release this version on February 28th.

Happy mining!

## Changes in 1.18.2 Pre-release 1

-   Users running Minecraft in a 32-bit environment will receive a warning in the main menu about the upcoming end of 32-bit environment support

## Technical Changes in 1.18.2 Pre-release 1

-   The data pack version is now 9
-   It is now possible to add custom structures in experimental datapacks
-   `locate` and `locatebiome` commands now support tags (prefix with `#` to distinguish from normal ids)
-   The `locate` command parameter is now a configured structure rather than a structure type. For instance, you can now use `/locate village_desert` or `/locate shipwreck_beached`
-   A lot of the cave generation is now configurable through data packs

### Configurable caves

-   A new registry was added for Density functions (caves are created by combining those together)
-   Noise settings got a new field `noise_router` (and lost a couple of flags), see `worldgen/noise_settings` folder in the worldgen report
-   Noise router wires data-driven parts of the cave generation with the rest of the code

### Configured Structures and Structure Sets

The game now generates and stores data-driven configured structures.

-   Experimental datapacks can add new structure sets
-   The `feature` field in location predicates now references a configured feature
-   The `exploration_map` loot table function `destination` field is now a configured feature tag id
-   The `exploration_map` loot table function no longer automatically sets the display name of the map

#### Side effects

Some gameplay oddities have been affected by this change.

-   Dolphins will now more accurately pick the closest structure regardless of type
-   Bastion Remnant bounding boxes are now slightly more accurate to the shape of the structure

## Fixed bugs in 1.18.2 Pre-release 1

-   [MC-3524](https://bugs.mojang.com/browse/MC-3524) Structure related mobs do not spawn in flat type world generation
-   [MC-146854](https://bugs.mojang.com/browse/MC-146854) Player movement favors x axis when in a corner
-   [MC-179315](https://bugs.mojang.com/browse/MC-179315) Ruined portals never generate in superflat worlds by default
-   [MC-210612](https://bugs.mojang.com/browse/MC-210612) Strongholds do not generate in certain customized worlds despite /locate saying otherwise
-   [MC-241288](https://bugs.mojang.com/browse/MC-241288) Support for custom structures has been removed
-   [MC-244137](https://bugs.mojang.com/browse/MC-244137) The option "level-seed" is not present in server.properties by default
-   [MC-248532](https://bugs.mojang.com/browse/MC-248532) Elytra firework particle spawns on the wrong hand when dual wielding fireworks

---

# Minecraft 1.18.1 Release Candidate 3

We're now releasing a third release candidate for Minecraft 1.18.1 to fix a critical security issue. If there are no major issues following this release, no further changes will be done before the full release.

Happy mining!

---

# Minecraft 1.18.1 Release Candidate 2

We're now releasing the second (uh... something something hopefully) release candidate for Minecraft 1.18.1. This release candidate fixes a chunk rendering issue. If there are no major issues following this release, no further changes will be done before the full release. ​ Happy mining!

## Fixed Bugs in 1.18.1 Release Candidate 2

-   [MC-245010](https://bugs.mojang.com/browse/MC-245010) Sometimes certain chunks will never load

---

# Minecraft 1.18.1 Release Candidate 1

We're now releasing the first (and hopefully only) release candidate for Minecraft 1.18.1. This release candidate fixes crashes and bugs. If there are no major issues following this release, no further changes will be done before the full release. ​ Happy mining! ​

## Fixed Bugs in 1.18 Release Candidate 1

​

-   [MC-229321](https://bugs.mojang.com/browse/MC-229321) Bees inside of bee hives / nests sometimes despawn when the world is reloaded
-   [MC-243796](https://bugs.mojang.com/browse/MC-243796) Random non fatal exceptions in console: Failed to store chunk ConcurrentModificationException
-   [MC-244190](https://bugs.mojang.com/browse/MC-244190) Entity fog doesn't match the fog of blocks around them

---

# Minecraft 1.18.1 Pre-Release 1

We're now releasing the first pre-release for Minecraft 1.18.1. This will be a fairly small release that will fix a few stability issues and a few bugs. We aim to release this version at the end of next week.

Happy mining!

## Technical Changes in 1.18.1 Pre-Release 1

-   Fixed an issue that would cause players on low-bandwidth connections to get timeout errors when connecting to a server
-   World fog now starts further away from the player, to make distant terrain more visible
-   Instead of applying fog as a spherical volume it is now applied as a cylindrical volume

## Fixed Bugs in 1.18.1 Pre-Release 1

-   [MC-219507](https://bugs.mojang.com/browse/MC-219507) - Beacon's power reverts back to previous one on world reload
-   [MC-242729](https://bugs.mojang.com/browse/MC-242729) - Observer activating without any updates nearby, caused by /clone
-   [MC-243216](https://bugs.mojang.com/browse/MC-243216) - Chunk render distance on servers seems shorter than in 1.17.1

---

# Minecraft 1.18 Release Candidate 4

We're now releasing the fourth (and totally last) release candidate for Caves & Cliffs: Part II. If there are no major issues following this release, no further changes will be done before the full release.

## Changes in 1.18 Release Candidate 4

​

-   Fixed an issue with the lower distribution of coal ore

---

# Minecraft 1.18 Release Candidate 3

We're now releasing the third (and almost certainly last) release candidate for Caves & Cliffs: Part II. If there are no major issues following this release, no further changes will be done before the full release. ​ Happy crafting!

## Fixed bugs in 1.18 Release Candidate 3

​

-   [MC-242859](https://bugs.mojang.com/browse/MC-242859) Blocks losing the loot inside them after dying

​

---

# Minecraft 1.18 Release Candidate 2

We're now releasing the second (and hopefully last) release candidate for Caves & Cliffs: Part II. If there are no major issues following this release, no further changes will be done before the full release.

## Fixed bugs in 1.18 Release Candidate 2

-   [MC-242547](https://bugs.mojang.com/browse/MC-242547) In large caves, the cave generation can't reach y= -54, not allowing to generate large lava lakes

---

# Minecraft 1.18 Release Candidate 1

We're now releasing the first (and hopefully only) release candidate for Caves & Cliffs: Part II. If there are no major issues following this release, no further changes will be done before the full release.

Happy mining!

## Technical Changes in 1.18 Release Candidate 1

-   Size limit for server resource packs has been increased from 100 MB to 250 MB

## Fixed bugs in 1.18 Release Candidate 1

-   [MC-242708](https://bugs.mojang.com/browse/MC-242708) Moving through blocks in spectator mode causes a memory leak

---

# Minecraft 1.18 Pre-Release 8

It is now time for pre-release 8 for Minecraft 1.18 which contains more fixes for crashes and bugs.

## Fixed Bugs in 1.18 Pre-release 8

-   [MC-227537](https://bugs.mojang.com/browse/MC-227537) Crash: java.lang.NullPointerException: Cannot invoke "it.unimi.dsi.fastutil.objects.ObjectSet.remove(Object)" because "$$4" is null
-   [MC-230866](https://bugs.mojang.com/browse/MC-230866) Eating whilst traveling through a Nether portal prints error in game log
-   [MC-236783](https://bugs.mojang.com/browse/MC-236783) Parity Issue: Ravagers still attack baby villagers in Java Edition
-   [MC-241991](https://bugs.mojang.com/browse/MC-241991) Game freezes without crash logs when upgrading from 1.12.2 to 1.18 pre-5
-   [MC-242375](https://bugs.mojang.com/browse/MC-242375) Cats no longer scare phantoms away
-   [MC-242647](https://bugs.mojang.com/browse/MC-242647) Crash after respawning

---

# Minecraft 1.18 Pre-Release 7

We're now releasing the seventh pre-release for Minecraft 1.18, fixing more critical issues and tweaking cave biome features a bit further.

## Changes in 1.18 Pre-release 7

​

-   The numbers of features in cave biomes have been increased somewhat again

​

## Fixed bugs in 1.18 Pre-release 7

​

-   [MC-218592](https://bugs.mojang.com/browse/MC-218592) Azalea trees can generate in more than two blocks of water
-   [MC-241277](https://bugs.mojang.com/browse/MC-241277) Server can't generate amplified/large biomes worlds from scratch
-   [MC-241327](https://bugs.mojang.com/browse/MC-241327) Render Distance 13 at the world border causes excessive lag
-   [MC-242068](https://bugs.mojang.com/browse/MC-242068) Dirt part of the Dirt Path texture is one pixel too low
-   [MC-242546](https://bugs.mojang.com/browse/MC-242546) When optimizing 1.17 world in 1.18, old "Level" Compound is not deleted, resulting in increased world size

---

# Minecraft 1.18 Pre-Release 6

The sixth pre-release for 1.18 is now available. This pre-releases squashes some more bugs. Additionally, we now save the game more often, similar how to you should remember to save backups more often.

Happy mining!

## Changes in 1.18 Pre-release 6

-   The numbers of features in cave biomes have been tweaked

## Technical Changes in 1.18 Pre-release 6

-   The game now saves chunks whenever there is time spare to reduce autosave spikes

## Fixed Bugs in 1.18 Pre-release 6

-   [MC-236947](https://bugs.mojang.com/browse/MC-236947) Signature attribute is stripped from java records
-   [MC-238930](https://bugs.mojang.com/browse/MC-238930) Soul Sand and Soul Soil generate below the nether ceiling
-   [MC-238959](https://bugs.mojang.com/browse/MC-238959) Falling block placing at Y=1 changes into dropped item when landing on Y=0
-   [MC-239880](https://bugs.mojang.com/browse/MC-239880) Some chunks have missing blocks below 0
-   [MC-239900](https://bugs.mojang.com/browse/MC-239900) Upgrading custom world to 21w43a ignores min\_y and height
-   [MC-241263](https://bugs.mojang.com/browse/MC-241263) Off-heap memory leak
-   [MC-241409](https://bugs.mojang.com/browse/MC-241409) Game crashes when terrain shaper data is missing
-   [MC-241630](https://bugs.mojang.com/browse/MC-241630) Temperatures don't properly get converted
-   [MC-241767](https://bugs.mojang.com/browse/MC-241767) Breaking a vine or ladder block while the player is climbing it while sneaking allows the player to hover in place indefinetly
-   [MC-241820](https://bugs.mojang.com/browse/MC-241820) Ocean Monuments upgraded from previous versions appears to have the bounding box shifted to chunk borders north and west
-   [MC-241830](https://bugs.mojang.com/browse/MC-241830) Windswept savannas in amplified worlds have the incorrect surface blocks
-   [MC-241941](https://bugs.mojang.com/browse/MC-241941) Nether bedrock roof can generate exposed
-   [MC-242016](https://bugs.mojang.com/browse/MC-242016) Dripstone doesn't generate at high y values
-   [MC-242022](https://bugs.mojang.com/browse/MC-242022) Game crashes when loading new chunks (Exception generating new chunk, caused by ArrayIndexOutOfBoundsException: Index 268435455 out of bounds for length 32)
-   [MC-242479](https://bugs.mojang.com/browse/MC-242479) Pointed dripstone makes holes in lava pools

---

# Minecraft 1.18 Pre-Release 5

We're now releasing pre-release 5 for Minecraft 1.18. This pre-release contains more bug fixes and a tweak to new cave generation under existing chunks.

## Changes in 1.18 Pre-release 5

-   If there is any bedrock at height 0 in a chunk, new world generation will happen under any non-air block at height 0 in that chunk

## Fixed Bugs in 1.18 Pre-release 5

-   [MC-138118](https://bugs.mojang.com/browse/MC-138118) Parrot wing texture is reversed on the bottom
-   [MC-148422](https://bugs.mojang.com/browse/MC-148422) Stripped dark oak log side texture is too bright
-   [MC-150567](https://bugs.mojang.com/browse/MC-150567) Dark oak log top texture bark ring not updated
-   [MC-162038](https://bugs.mojang.com/browse/MC-162038) Pillagers have no hood texture
-   [MC-162803](https://bugs.mojang.com/browse/MC-162803) Lily Pad mirrors texture when placed
-   [MC-170557](https://bugs.mojang.com/browse/MC-170557) Spruce door top/bottom has the incorrect texture
-   [MC-176309](https://bugs.mojang.com/browse/MC-176309) Illusioner has a few misplaced pixels left in their texture
-   [MC-176824](https://bugs.mojang.com/browse/MC-176824) Red glass and outline of blue glass are slightly more opaque.
-   [MC-176833](https://bugs.mojang.com/browse/MC-176833) Anvil GUI hammer uses an outdated iron pallet
-   [MC-177664](https://bugs.mojang.com/browse/MC-177664) Sound system warning messages are spamming the system log
-   [MC-180398](https://bugs.mojang.com/browse/MC-180398) Too many sounds causes client to stall, limit can be easily reached with rabbits
-   [MC-194822](https://bugs.mojang.com/browse/MC-194822) Glass pane top texture has not changed with the Texture Update
-   [MC-194950](https://bugs.mojang.com/browse/MC-194950) Cactus in potted cactus is vertically squished
-   [MC-198007](https://bugs.mojang.com/browse/MC-198007) Villages replace ice with path blocks instead of wood
-   [MC-199662](https://bugs.mojang.com/browse/MC-199662) Extra pixels in cocoa pod textures as of Texture Update
-   [MC-200046](https://bugs.mojang.com/browse/MC-200046) Cartography table planks texture is incorrect/slightly outdated
-   [MC-200137](https://bugs.mojang.com/browse/MC-200137) Lectern base plate texture still uses the old planks texture
-   [MC-200956](https://bugs.mojang.com/browse/MC-200956) Beetroot seeds texture is not vertically centered
-   [MC-200957](https://bugs.mojang.com/browse/MC-200957) Melon seeds texture is not vertically centered
-   [MC-202910](https://bugs.mojang.com/browse/MC-202910) Inconsistent highlight color on armor
-   [MC-204901](https://bugs.mojang.com/browse/MC-204901) Side texture for dirt paths hasn't been updated with the texture update
-   [MC-221172](https://bugs.mojang.com/browse/MC-221172) Warped and Crimson Stems use different top texture from Bedrock Edition
-   [MC-222154](https://bugs.mojang.com/browse/MC-222154) Cave vines can generate hanging on pointed dripstone
-   [MC-222763](https://bugs.mojang.com/browse/MC-222763) Armor stands use the old smooth stone slab texture
-   [MC-225553](https://bugs.mojang.com/browse/MC-225553) Oak and iron doors have a line in their textures
-   [MC-226711](https://bugs.mojang.com/browse/MC-226711) Carrot crop texture has an incorrect pixel
-   [MC-227258](https://bugs.mojang.com/browse/MC-227258) Flowering Azalea Leaves are in both #minecraft:mineable/hoe and #minecraft:mineable/axe tags, while regular Azalea Leaves (and all other leaves) are only in #minecraft:mineable/hoe
-   [MC-228900](https://bugs.mojang.com/browse/MC-228900) Cave vines can generate floating (Recurrence of MC-218817)
-   [MC-229977](https://bugs.mojang.com/browse/MC-229977) Breaking blocks with pistons on the east/west direction causes significant lag
-   [MC-231272](https://bugs.mojang.com/browse/MC-231272) Cave vines can sometimes generate hanging on cobwebs
-   [MC-231818](https://bugs.mojang.com/browse/MC-231818) You can no longer use the up or down arrow to navigate between servers in the multiplayer menu
-   [MC-233883](https://bugs.mojang.com/browse/MC-233883) The hide and show messages buttons in the social interactions menu display their hover text regardless of the position of the cursor
-   [MC-234039](https://bugs.mojang.com/browse/MC-234039) The back of wild axolotls are off-centered
-   [MC-235567](https://bugs.mojang.com/browse/MC-235567) Clusters of dripstone (stalagmites) tend to generate abnormally frequent with thickness "tip" on tall caves
-   [MC-236723](https://bugs.mojang.com/browse/MC-236723) The Floating Islands preset does not seem to be generating correctly
-   [MC-237500](https://bugs.mojang.com/browse/MC-237500) Azalea trees can generate on top of huge mushrooms, trees & bamboo
-   [MC-238360](https://bugs.mojang.com/browse/MC-238360) Rooted dirt cannot replace terracotta
-   [MC-238529](https://bugs.mojang.com/browse/MC-238529) Azalea trees can fail to generate
-   [MC-238892](https://bugs.mojang.com/browse/MC-238892) Rooted dirt doesn't replace red sand
-   [MC-239128](https://bugs.mojang.com/browse/MC-239128) Sweet berry bushes generate extremely rare in comparison with 1.17.1
-   [MC-239237](https://bugs.mojang.com/browse/MC-239237) Azalea trees can be generated on icebergs
-   [MC-239489](https://bugs.mojang.com/browse/MC-239489) Melons generate rarely in jungle biomes
-   [MC-239847](https://bugs.mojang.com/browse/MC-239847) Chunk blending occasionally produces sharp chunk border edges
-   [MC-241256](https://bugs.mojang.com/browse/MC-241256) Some feature configs still expect a configured feature instead of a placed feature
-   [MC-241278](https://bugs.mojang.com/browse/MC-241278) Azalea trees are no longer generating
-   [MC-241539](https://bugs.mojang.com/browse/MC-241539) Stone generates in the side of hoodoos
-   [MC-241566](https://bugs.mojang.com/browse/MC-241566) Mossy cobblestone boulders generate in a grid pattern in old-growth spruce taigas
-   [MC-241588](https://bugs.mojang.com/browse/MC-241588) Cave vines can sometimes generate hanging on water
-   [MC-241672](https://bugs.mojang.com/browse/MC-241672) Mobs don't panic when burning if standing on blocks placed above water
-   [MC-241728](https://bugs.mojang.com/browse/MC-241728) Converting world to 1.18 pre-release 2 generates new caves in too many places
-   [MC-241747](https://bugs.mojang.com/browse/MC-241747) Inconsistent Colors in grindstone gui
-   [MC-241784](https://bugs.mojang.com/browse/MC-241784) Some sliders in options menu do not work properly
-   [MC-241800](https://bugs.mojang.com/browse/MC-241800) Cannot change numbers for gamerules on world creation
-   [MC-241847](https://bugs.mojang.com/browse/MC-241847) Floating stone platform doesn't generate in void superflat world preset
-   [MC-241933](https://bugs.mojang.com/browse/MC-241933) Spore blossoms, cave vines, and pointed dripstones generate indented into the cave surface

---

# Minecraft 1.18 Pre-Release 4

We've now released Pre-release 4, which fixes a few crashes.

## Bugs fixed in 1.18 Pre-release 4

-   [MC-241774](https://bugs.mojang.com/browse/MC-241774) Crash when going nether portals or creating a single biome world with nether biomes // java.lang.IndexOutOfBoundsException: Index 0 out of bounds for length 0
-   [MC-241775](https://bugs.mojang.com/browse/MC-241775) Crash when going through end portals or creating a single biome world with end biomes // java.lang.NegativeArraySizeException: -5
-   [MC-241778](https://bugs.mojang.com/browse/MC-241778) Game crashes or freeze when loading and upgrading the 1.17.1 version of the Superflat world // java.util.concurrent.CompletionException: z: Biome decoration

---

# Minecraft 1.18 Pre-Release 3

We've now released 1.18 pre-release 3 with additional bugfixes and some performance improvements. In case you missed it, we've also announced the release date for 1.18! The update is set to release on November 30th, and you can read more about that [here](https://www.minecraft.net/article/caves---cliffs-update-part-ii-coming). Mark your calendars!

## Fixed bugs in 1.18 Pre-Release 3

-   [MC-109260](https://bugs.mojang.com/browse/MC-109260) Full-width punctuation characters are rendered incorrectly
-   [MC-185263](https://bugs.mojang.com/browse/MC-185263) Non full chunks in cache memory "semi-leak"
-   [MC-223840](https://bugs.mojang.com/browse/MC-223840) Lava blocks from "Lava Aquifers" don't get updated when a cave cuts through underneath them
-   [MC-231818](https://bugs.mojang.com/browse/MC-231818) You can no longer use the up or down arrow to navigate between servers in the multiplayer menu
-   [MC-236740](https://bugs.mojang.com/browse/MC-236740) Server-side lag spike sometimes occurs when attempting to locate a buried treasure or opening/breaking a chest containing a map
-   [MC-236764](https://bugs.mojang.com/browse/MC-236764) Lighting lags behind world generation
-   [MC-239397](https://bugs.mojang.com/browse/MC-239397) Lava pockets generate in icebergs
-   [MC-239610](https://bugs.mojang.com/browse/MC-239610) Severe world corruption due to 1.18 snapshots failing to deserialize chunks that 1.17 loads fine
-   [MC-239682](https://bugs.mojang.com/browse/MC-239682) Out of memory crash: World generation exhausts Java heap space
-   [MC-239950](https://bugs.mojang.com/browse/MC-239950) Feature placement doesn't check for biomes, causing unnecessary lag
-   [MC-240229](https://bugs.mojang.com/browse/MC-240229) Rain and snow fall on the same blocks in a certain height range
-   [MC-240483](https://bugs.mojang.com/browse/MC-240483) Foxes that spawn in grove biomes aren't the snowy variant
-   [MC-240589](https://bugs.mojang.com/browse/MC-240589) Game froze for several minutes and then crashed while flying around and loading chunks
-   [MC-241245](https://bugs.mojang.com/browse/MC-241245) Generated Deepslate overwrites ore veins (mainly Iron ore veins)
-   [MC-241255](https://bugs.mojang.com/browse/MC-241255) Gigantic Performance Drop after a couple of minutes
-   [MC-241352](https://bugs.mojang.com/browse/MC-241352) Directory structure is not consistent between server and client

---

# Minecraft 1.18 Pre-Release 2

The second pre-release for Minecraft Java is now available. In this pre-release, we've upgraded the Java version that is bundled with the game, and the game now uses Java 17. Other than this, we've mostly been busy fixing bugs.

Enjoy!

## Technical Changes in 1.18 Pre-Release 2

Minecraft now uses Java version 17. If you are using a default setup the Launcher will download and install the correct version. If you are using a custom Java setup or a third-party launcher, you will need to ensure that your Java installation is version 17 or above.

## Fixed Bugs in 1.18 Pre-Release 2

-   [MC-32813](https://bugs.mojang.com/browse/MC-32813) Floating water / lava above caves / cave carver doesn't update water
-   [MC-206303](https://bugs.mojang.com/browse/MC-206303) Minecarts have old textures on the bottom
-   [MC-217038](https://bugs.mojang.com/browse/MC-217038) Large dripstone structures can be generated outside the caves
-   [MC-217056](https://bugs.mojang.com/browse/MC-217056) Some high-speed particles lag/freeze the game
-   [MC-220061](https://bugs.mojang.com/browse/MC-220061) Painting back texture is mirrored
-   [MC-223917](https://bugs.mojang.com/browse/MC-223917) Goats on fire do not attempt to pathfind towards water
-   [MC-226689](https://bugs.mojang.com/browse/MC-226689) Albert Pastore's name is grey and improperly indented in the credits
-   [MC-227163](https://bugs.mojang.com/browse/MC-227163) Credits say ''IT Manager'' instead of ''IT Managers''
-   [MC-227204](https://bugs.mojang.com/browse/MC-227204) "Explore, dream, discover" quote no longer appears after new credits
-   [MC-227206](https://bugs.mojang.com/browse/MC-227206) Random names in the new credits use curly quotes/apostrophes
-   [MC-227231](https://bugs.mojang.com/browse/MC-227231) Steven Silvester's name is misspelt in the credits
-   [MC-227239](https://bugs.mojang.com/browse/MC-227239) In the credits, Elizabeth Batson's company name is improperly capitalized
-   [MC-227329](https://bugs.mojang.com/browse/MC-227329) The usage and punctuation of "Inc" is still inconsistent in the credits
-   [MC-231782](https://bugs.mojang.com/browse/MC-231782) Missing "(" in Frank Criscione credit
-   [MC-236756](https://bugs.mojang.com/browse/MC-236756) Biome-exclusive mob spawn rates are reduced
-   [MC-236858](https://bugs.mojang.com/browse/MC-236858) Seeds that spawn you in the middle of the ocean cause lag
-   [MC-237608](https://bugs.mojang.com/browse/MC-237608) Server address shown when connection fails during server startup
-   [MC-238049](https://bugs.mojang.com/browse/MC-238049) Passive mobs (cows, pigs, sheep, chickens) sometimes do not spawn
-   [MC-238076](https://bugs.mojang.com/browse/MC-238076) UpgradeData in chunk is not migrated to new world height
-   [MC-238375](https://bugs.mojang.com/browse/MC-238375) Crash and/or data corruption upon attempting to save a world with a world border center over 30 million blocks
-   [MC-238587](https://bugs.mojang.com/browse/MC-238587) Sprinting while flying into a block causes the screen to rapidly zoom in and out
-   [MC-239397](https://bugs.mojang.com/browse/MC-239397) Lava pockets generate in icebergs
-   [MC-239423](https://bugs.mojang.com/browse/MC-239423) Kumi Tanioka isn't under "Music composed by" in the credits
-   [MC-239856](https://bugs.mojang.com/browse/MC-239856) Upgrading old worlds causes vines to have the wrong block state
-   [MC-239857](https://bugs.mojang.com/browse/MC-239857) Fences, iron bars, and glass panes often use an incorrect block state after conversion
-   [MC-239884](https://bugs.mojang.com/browse/MC-239884) Water from old chunks don't properly propagate into new chunks
-   [MC-239899](https://bugs.mojang.com/browse/MC-239899) Connected redstone does not properly upgrade from older versions
-   [MC-240030](https://bugs.mojang.com/browse/MC-240030) Holes in worlds created in Alpha and Infdev below y=0 after conversion
-   [MC-240494](https://bugs.mojang.com/browse/MC-240494) Duplicated mineshafts with new cave generation
-   [MC-240507](https://bugs.mojang.com/browse/MC-240507) Mob Spawning in structures fails in pre-1.18 generated monuments/swamp huts/outposts
-   [MC-240570](https://bugs.mojang.com/browse/MC-240570) Biomes in old chunks are not copied to new caves below Y=0 when chunks are extended
-   [MC-240610](https://bugs.mojang.com/browse/MC-240610) "Allow Server Listings" option doesn't save its last setting
-   [MC-240783](https://bugs.mojang.com/browse/MC-240783) Powder snow does not reduce or negate fall damage
-   [MC-241111](https://bugs.mojang.com/browse/MC-241111) Some Mojang employees are not mentioned in the credits
-   [MC-241194](https://bugs.mojang.com/browse/MC-241194) Crash: java.lang.NullPointerException: Cannot invoke "ddm.a(cao, cps, java.util.Random, gh)" because the return value of "java.util.function.Supplier.get()" is null
-   [MC-241199](https://bugs.mojang.com/browse/MC-241199) Double chests have incorrect block states after upgrading old worlds
-   [MC-241208](https://bugs.mojang.com/browse/MC-241208) Powered buttons, pressure plates, and tripwire hooks remain powered forever after upgrading old worlds
-   [MC-241234](https://bugs.mojang.com/browse/MC-241234) Fossils get cut off at chunk borders
-   [MC-241413](https://bugs.mojang.com/browse/MC-241413) Floating water generates around ravines

---

# Minecraft 1.18 Pre-Release 1

The first 1.18 pre-release is here!

From now on, you should mostly see bugs being fixed. In addition to that, pre-releases don't follow the regular snapshot cadence of releasing on Wednesdays, so keep an eye out!

That being said, this pre-release introduces biome blending, which means that you should no longer find harsh borders between new and old terrain. On top of that, we've also reintroduced the Amplified and Large Biome world types.

Happy mining!

## Changes in 1.18 Pre-Release 1

-   Amplified and Large biome worlds have been adapted to the new terrain and are now once again available in the Create World screen
-   Removed world types "Caves" and "Floating islands" from the world creation screen
-   The transition between new and old terrain is less "cliffy"
    -   Will surface height blend? Yes
    -   Will biomes blend? Yes
    -   Will caves blend? Your mileage may vary

## Technical changes in 1.18 Pre-Release 1

-   `--report` option in data generator now creates full worldgen reference files instead of just biomes

## Fixed bugs in 1.18 Pre-Release 1

-   [MC-46584](https://bugs.mojang.com/browse/MC-46584) Clicking and dragging MOUSE3 (Mouse wheel) over item slots incorrectly attempts to place full stacks in survival
-   [MC-53444](https://bugs.mojang.com/browse/MC-53444) You can get outside of the worldborder by mounting a rideable entity (boat, pig, etc.) outside of it
-   [MC-54119](https://bugs.mojang.com/browse/MC-54119) Can place/take water/lava/lilypads outside worldborder and inside spawn protection
-   [MC-62550](https://bugs.mojang.com/browse/MC-62550) Worldborder not correctly initialized for the End and Nether
-   [MC-96535](https://bugs.mojang.com/browse/MC-96535) Ambient property of potion effects with ShowParticles:0b is not disregarded
-   [MC-113425](https://bugs.mojang.com/browse/MC-113425) Player can interact with entities outside the worldborder
-   [MC-117800](https://bugs.mojang.com/browse/MC-117800) Half bed can be placed outside the worldborder
-   [MC-121997](https://bugs.mojang.com/browse/MC-121997) Every dimension's world border is operating independently, and doesn't appear where it actually is
-   [MC-131808](https://bugs.mojang.com/browse/MC-131808) Forests don't spawn trees near the positive edges, but overstretch bounds on the negative edges
-   [MC-136523](https://bugs.mojang.com/browse/MC-136523) Invisible world border in the end dimension
-   [MC-187174](https://bugs.mojang.com/browse/MC-187174) Worldborder does not take nether coordinates into account
-   [MC-206660](https://bugs.mojang.com/browse/MC-206660) Stalactites don't fall properly if there are blocks directly below it
-   [MC-215139](https://bugs.mojang.com/browse/MC-215139) Some water in caves will not start flowing
-   [MC-219035](https://bugs.mojang.com/browse/MC-219035) Fossil structures can't generate in far east and south blocks of a chunk
-   [MC-222388](https://bugs.mojang.com/browse/MC-222388) Acacia trees under y=0 often grow with bare branches
-   [MC-229013](https://bugs.mojang.com/browse/MC-229013) Lava lake decorator config is unused
-   [MC-229517](https://bugs.mojang.com/browse/MC-229517) Conversion sounds for strays & drowned is controlled by Friendly Creatures mixer, not Hostile Creatures
-   [MC-231666](https://bugs.mojang.com/browse/MC-231666) Dragon egg can teleport to outside the world border
-   [MC-236610](https://bugs.mojang.com/browse/MC-236610) Lava lakes generate without stone around
-   [MC-236628](https://bugs.mojang.com/browse/MC-236628) Lava pools cause sand to fall now instead of putting sandstone beneath it
-   [MC-236652](https://bugs.mojang.com/browse/MC-236652) Weather can sometimes be incorrect within a biome
-   [MC-236803](https://bugs.mojang.com/browse/MC-236803) Extremely low amount of pillager spawns in outpost on jagged peaks, groves, snowy slopes & frozen peaks
-   [MC-237040](https://bugs.mojang.com/browse/MC-237040) Falling blocks still sometimes disappear for a moment when landing
-   [MC-237598](https://bugs.mojang.com/browse/MC-237598) Projectiles glitch around in the air when exiting simulation distance
-   [MC-237621](https://bugs.mojang.com/browse/MC-237621) Missing biome definitions in some peak grid cells causes unintended ocean placement
-   [MC-237791](https://bugs.mojang.com/browse/MC-237791) Villager spawn eggs used on grove, frozen peaks, snowy slopes and jagged peaks don't spawn snowy plains villagers
-   [MC-237954](https://bugs.mojang.com/browse/MC-237954) The "Sound of Music" and "Feels like home" advancements are internally located in the incorrect tab folder
-   [MC-238038](https://bugs.mojang.com/browse/MC-238038) Newly added advancements' namespace IDs do not match their translation keys
-   [MC-238972](https://bugs.mojang.com/browse/MC-238972) Deserts generate with little or no sandstone
-   [MC-239714](https://bugs.mojang.com/browse/MC-239714) Doing /locate desert\_pryamid in a desert superflat world freezes the world
-   [MC-239851](https://bugs.mojang.com/browse/MC-239851) Upgrading old worlds causes leaves to change to surface builder blocks
-   [MC-239852](https://bugs.mojang.com/browse/MC-239852) Lava pools intersecting strongholds can cause end portal frames to be deleted
-   [MC-240021](https://bugs.mojang.com/browse/MC-240021) Cullface arguments in cauldrons are excessive
-   [MC-240481](https://bugs.mojang.com/browse/MC-240481) Deepslate doesn't generate in the new cave generation under old chunks
-   [MC-240482](https://bugs.mojang.com/browse/MC-240482) There is no bedrock in the overworld in old chunks
-   [MC-240495](https://bugs.mojang.com/browse/MC-240495) Deepslate does not generate below Y=0 in Badlands or Wooded Badlands Biomes
-   [MC-240503](https://bugs.mojang.com/browse/MC-240503) Bedrock doesn\`t generate in Badlands or Wooded Badlands
-   [MC-240516](https://bugs.mojang.com/browse/MC-240516) Noise cave carvers don't generate below old chunks
-   [MC-240531](https://bugs.mojang.com/browse/MC-240531) Block simulation distance is always 8 chunks regardless of the slider's value
-   [MC-240534](https://bugs.mojang.com/browse/MC-240534) Clicking a JFR link copies full server-side path to clipboard
-   [MC-240631](https://bugs.mojang.com/browse/MC-240631) Extremely slow End terrain generation
-   [MC-240998](https://bugs.mojang.com/browse/MC-240998) Portals no longer load chunks as non entity processing

---

# Minecraft 1.17.1 Release Candidate 2

A second Release Candidate for Minecraft Java Edition 1.17.1 is now available in the launcher, fixing some critical issues. If nothing critical is found, we expect this to be released as the full version of 1.17.1 on Tuesday, July 6th.

## The Caves & Cliffs Preview

Download the [latest datapack](https://launcher.mojang.com/v1/objects/622bf0fd298e1e164ecd05d866045ed5941283cf/CavesAndCliffsPreview.zip).

---

# Minecraft 1.17.1 Release Candidate 1

A first and hopefully only Release Candidate for Minecraft: Java Edition 1.17.1 is now available in the launcher, fixing a few more crashes and bugs. If nothing critical is found, we expect this to be released as the full version of 1.17.1 on Tuesday, July 6th.

## The Caves & Cliffs Preview

Download the [latest datapack](https://launcher.mojang.com/v1/objects/622bf0fd298e1e164ecd05d866045ed5941283cf/CavesAndCliffsPreview.zip).

## Fixed bugs in 1.17.1 Release Candidate 1

-   [MC-230716](https://bugs.mojang.com/browse/MC-230716) "death.attack.dryout" and "death.attack.dryout.player" display raw translation strings (are untranslated)

---

# Minecraft 1.17.1 Pre-Release 3

A third pre-release for 1.17.1 is now available in your launcher, fixing a few more crashes and bugs.

## The Caves & Cliffs Preview

​ Download the [latest datapack](https://launcher.mojang.com/v1/objects/622bf0fd298e1e164ecd05d866045ed5941283cf/CavesAndCliffsPreview.zip). ​

## Fixed bugs in 1.17.1 Pre-release 3

​

-   [MC-222731](https://bugs.mojang.com/browse/MC-222731) Captured axolotl constantly tries to leave water
-   [MC-224894](https://bugs.mojang.com/browse/MC-224894) Light tickets are released too early
-   [MC-228802](https://bugs.mojang.com/browse/MC-228802) Chunks not loading on a server / Cannot invoke "cmq.a(int, int, int)" because "☃" is null
-   [MC-228858](https://bugs.mojang.com/browse/MC-228858) Axolotls despawning though named and on leashes.
-   [MC-229246](https://bugs.mojang.com/browse/MC-229246) Piglins and piglin brutes no longer call other piglins after attacking one of them behind walls
-   [MC-229475](https://bugs.mojang.com/browse/MC-229475) Placing a small dripleaf results in the top half of water getting deleted
-   [MC-229887](https://bugs.mojang.com/browse/MC-229887) "Unable to create a jar-filesystem" warning logged upon starting the game

---

# Minecraft 1.17.1 Pre-Release 2

The second pre-release for 1.17.1 is now available in your launcher. This pre-release fixes a few more bugs.

## The Caves & Cliffs Preview

Download the [latest datapack](https://launcher.mojang.com/v1/objects/622bf0fd298e1e164ecd05d866045ed5941283cf/CavesAndCliffsPreview.zip).

## Technical Changes in 1.17.1 Pre-release 1

-   Deaths of named mobs are now logged

## Fixed Bugs in 1.17.1 Pre-Release 2

-   [MC-219290](https://bugs.mojang.com/browse/MC-219290) Calcite is too quiet compared to other blocks
-   [MC-221656](https://bugs.mojang.com/browse/MC-221656) Creative mode obtained Bucket of Axolotl/Tropical Fish only spawns one kind axolotl/tropical fish
-   [MC-226926](https://bugs.mojang.com/browse/MC-226926) Emerald ore generates too often
-   [MC-228599](https://bugs.mojang.com/browse/MC-228599) Attempting to walk through flowing water constantly switches the player from swimming into normal mode
-   [MC-229191](https://bugs.mojang.com/browse/MC-229191) Diamond ore distribution changed between 1.16.5 and 1.17
-   [MC-229441](https://bugs.mojang.com/browse/MC-229441) You can steal the item a villager is holding for trade by killing it
-   [MC-229614](https://bugs.mojang.com/browse/MC-229614) Wandering Trader obtained tropical fish are only white kob
-   [MC-229983](https://bugs.mojang.com/browse/MC-229983) /clear command doesn't clear certain stacks after dropping items from them

---

# Minecraft 1.17.1 Pre-Release 1

Happy Friday! The first pre-release for 1.17.1 is now available for download. This pre-release introduces a few changes to some gameplay mechanics, and it also fixes a bunch of bugs.

## Changes in 1.17.1 Pre-release 1

-   Blue axolotls can now only be obtained through breeding
-   Non-screaming goats now have a rare chance to produce a screaming goat when bred
-   Status effects on goats now also apply when the goat is jumping or ramming
-   Raised the drop rate for copper ingots from Drowned to 11% + 2% per level of looting
-   Powder snow now fills cauldrons 2 times faster than before (still pretty slowly, though!)
-   Zombies, Zombie Villagers, Husks and Drowned will no longer pick up glow ink sacs

## The Caves & Cliffs Preview

Download the [latest datapack](https://launcher.mojang.com/v1/objects/622bf0fd298e1e164ecd05d866045ed5941283cf/CavesAndCliffsPreview.zip).

## Technical Changes in 1.17.1 Pre-release 1

-   In case of DNS-based redirection, the client will send the hostname actually used to connect (this restores the pre-1.17 behaviour)

## Bugs fixed in 1.17.1 Pre-release 1

-   [MC-123654](https://bugs.mojang.com/browse/MC-123654) Sun, moon, and/or clouds are not showing if render distance is below 4
-   [MC-131290](https://bugs.mojang.com/browse/MC-131290) Enchantments are saved as shorts, but are loaded as and function with integer values
-   [MC-156155](https://bugs.mojang.com/browse/MC-156155) Turkish lira sign (₺) appears as □ in the game
-   [MC-194736](https://bugs.mojang.com/browse/MC-194736) Duplicate text mapping for U+00B7
-   [MC-196999](https://bugs.mojang.com/browse/MC-196999) U+1FEC is wrong in Minecraft's font
-   [MC-213986](https://bugs.mojang.com/browse/MC-213986) Pistons and dispensers can be used to create ghost blocks using powder snow
-   [MC-219018](https://bugs.mojang.com/browse/MC-219018) Ghost items can be created using /item (server doesn't update client inventory correctly)
-   [MC-223350](https://bugs.mojang.com/browse/MC-223350) Loaded chunks sometimes don't render until the player moves their head slightly
-   [MC-225816](https://bugs.mojang.com/browse/MC-225816) Hanging Roots appear large when an item entity
-   [MC-226461](https://bugs.mojang.com/browse/MC-226461) Logs can be replaced with stone near lava pools
-   [MC-226948](https://bugs.mojang.com/browse/MC-226948) Withers are now affected by potion effects
-   [MC-227387](https://bugs.mojang.com/browse/MC-227387) World gen datapacks will likely crash or softlock the game
-   [MC-227435](https://bugs.mojang.com/browse/MC-227435) Lag when placing heads of non-existent players when on servers
-   [MC-227483](https://bugs.mojang.com/browse/MC-227483) root\_system feature config's codec uses a wrong field
-   [MC-227520](https://bugs.mojang.com/browse/MC-227520) Overworld Fossils always generate at bedrock level
-   [MC-227557](https://bugs.mojang.com/browse/MC-227557) End portal texture appears stretched after world conversion
-   [MC-227618](https://bugs.mojang.com/browse/MC-227618) Small dripleaf is consumed without being placed when used on tall seagrass
-   [MC-227651](https://bugs.mojang.com/browse/MC-227651) Group for lapis lazuli ore smelting and blasting recipes is misspelled
-   [MC-227821](https://bugs.mojang.com/browse/MC-227821) Client crash when trying to create/edit realm immediately after deleting previous one
-   [MC-227891](https://bugs.mojang.com/browse/MC-227891) Ender pearls despawn when player logs out of a server
-   [MC-228219](https://bugs.mojang.com/browse/MC-228219) Thrown ender pearls disappear upon entering the exit end portal
-   [MC-228343](https://bugs.mojang.com/browse/MC-228343) java.lang.NullPointerException when random\_selector default feature isn't found
-   [MC-228430](https://bugs.mojang.com/browse/MC-228430) Very long loading pause while booting the game ("Failed to add PDH Counter", caused by oshi)
-   [MC-228828](https://bugs.mojang.com/browse/MC-228828) Specifying the --server parameter when starting the game, causes the game to crash
-   [MC-229299](https://bugs.mojang.com/browse/MC-229299) Blue axolotls can spawn naturally

---

# Minecraft 1.17 Release Candidate 2

## Fixed Bugs in 1.17 Release Candidate 2

-   Fixed a few critical issues

---

# Minecraft 1.17 Release Candidate 1

We're now releasing the first (and hopefully only) release candidate for Caves & Cliffs: Part I. If there are no major issues following this release, no further changes will be done before the full release.

Happy mining!

## The Caves & Cliffs Preview

Download the [latest datapack](https://launcher.mojang.com/v1/objects/622bf0fd298e1e164ecd05d866045ed5941283cf/CavesAndCliffsPreview.zip).

## Fixed bugs in 1.17 Release Candidate 1

-   [MC-227323](https://bugs.mojang.com/browse/MC-227323) Custom player heads sometimes flash when placed on armor stands
-   Improved desync issues when exiting a boat over a high latency connection
-   Fixed crashes

---

# Minecraft 1.17 Pre-Release 5

The fifth pre-release for 1.17 is now available, fixing another round of bugs and crashes.

## The Caves & Cliffs Preview

Download the [latest datapack](https://launcher.mojang.com/v1/objects/622bf0fd298e1e164ecd05d866045ed5941283cf/CavesAndCliffsPreview.zip).

## Fixed bugs in 1.17 Pre-release 5

-   [MC-225707](https://bugs.mojang.com/browse/MC-225707) - Caves and Cliffs Datapacks Server Error
-   [MC-227065](https://bugs.mojang.com/browse/MC-227065) - Cannot Invoke "na.b(String, int)" because "â˜ƒ is null
-   [MC-227207](https://bugs.mojang.com/browse/MC-227207) - Datafixer doesn't properly update certain scoreboard objectives from 1.16 to 1.17
-   [MC-227208](https://bugs.mojang.com/browse/MC-227208) - Breaking bamboo is excessively laggy since the 1.17 pre-releases
-   [MC-227232](https://bugs.mojang.com/browse/MC-227232) - Player head SkullOwner tag with username string no longer works

---

# Minecraft 1.17 Pre-Release 4

The fourth pre-release for 1.17 is now available, and this one fixes a few additional bugs and crashes.

## Changes in 1.17 Pre-Release 4

-   Holding down control while holding down space now makes the credits scroll even faster

## The Caves & Cliffs Preview

Download the [latest datapack](https://launcher.mojang.com/v1/objects/622bf0fd298e1e164ecd05d866045ed5941283cf/CavesAndCliffsPreview.zip).

## Fixed bugs in 1.17 Pre-Release 4

-   [MC-223552](https://bugs.mojang.com/browse/MC-223552) Credits not alphabetically ordered
-   [MC-226690](https://bugs.mojang.com/browse/MC-226690) In the credits, "EXPERIS" is in all capital letters for two employees
-   [MC-226692](https://bugs.mojang.com/browse/MC-226692) In the credits, a closing parenthesis is missing for Brian Canning
-   [MC-226693](https://bugs.mojang.com/browse/MC-226693) The credits say "Wed Developers" instead of "Web Developers" in one place
-   [MC-226696](https://bugs.mojang.com/browse/MC-226696) In the credits, "TEN GUN DESIGN INC" is in all capital letters for one employee
-   [MC-226700](https://bugs.mojang.com/browse/MC-226700) Some people are listed twice in the credits
-   [MC-226702](https://bugs.mojang.com/browse/MC-226702) The usage and punctuation of "Inc." and "LLC" are inconsistent in the credits
-   [MC-226762](https://bugs.mojang.com/browse/MC-226762) Credits Text Wrapping
-   [MC-226777](https://bugs.mojang.com/browse/MC-226777) When a crossbow is loaded in the offhand, you cannot see it or shoot with it if an item is held in the main hand
-   [MC-227003](https://bugs.mojang.com/browse/MC-227003) Game crashed whilst debug profiling
-   [MC-227058](https://bugs.mojang.com/browse/MC-227058) Any hostility between animals is removed in peaceful
-   [MC-227092](https://bugs.mojang.com/browse/MC-227092) Experimental Settings confirmation prompt appears when creating any world in 1.17-pre3
-   [MC-227107](https://bugs.mojang.com/browse/MC-227107) C418 is removed from ==Composers== in credits.json

---

# Minecraft 1.17 Pre-Release 3

Time for another pre-release, this time with some final tweaks to candles and more fixes for bugs and crashes!

Note that a bug has snuck into this pre-release making the game warn about every world as if it was experimental. This will be fixed in the next pre-release.

## Changes in 1.17 Pre-release 3

-   Tweaked the textures of lit candles
-   Mobs rammed by goats will no longer retaliate
-   Axolotls and Glow Squids now only spawn in total darkness and where there's a natural stone block less than 5 blocks below the spawning space

## The Caves & Cliffs Preview

Download the [latest datapack](https://launcher.mojang.com/v1/objects/622bf0fd298e1e164ecd05d866045ed5941283cf/CavesAndCliffsPreview.zip).

## Fixed Bugs in 1.17 Pre-Release 3

-   [MC-203773](https://bugs.mojang.com/browse/MC-203773) Lightning rod is floating when held in third-person
-   [MC-215946](https://bugs.mojang.com/browse/MC-215946) Game fatally crashed while exploring chunks (IllegalStateException: Accessing PalettedContainer from multiple threads)
-   [MC-222223](https://bugs.mojang.com/browse/MC-222223) Baby axolotls despawn
-   [MC-223147](https://bugs.mojang.com/browse/MC-223147) Vines aren't rendered with /setblock
-   [MC-223227](https://bugs.mojang.com/browse/MC-223227) Floating water caves in caves under the ocean
-   [MC-224893](https://bugs.mojang.com/browse/MC-224893) Replacing Chunk Futures causes several issues
-   [MC-225077](https://bugs.mojang.com/browse/MC-225077) Vines can spread upward to non-full blocks
-   [MC-225344](https://bugs.mojang.com/browse/MC-225344) Cave generation seems to be broken at seemingly random chunk borders
-   [MC-226441](https://bugs.mojang.com/browse/MC-226441) Lit candle texture doesn't change when on cake
-   [MC-226514](https://bugs.mojang.com/browse/MC-226514) Crash trying to start a world: Error: java.lang.NullPointerException: Cannot read field "u" because "â˜ƒ" is null
-   [MC-226660](https://bugs.mojang.com/browse/MC-226660) "Double closing program" warnings upon closing the game
-   [MC-226874](https://bugs.mojang.com/browse/MC-226874) Player's owned player\_head on mobs are flashing
-   [MC-226956](https://bugs.mojang.com/browse/MC-226956) Gravity blocks do not break when doEntityDrops is set to false
-   [MC-226970](https://bugs.mojang.com/browse/MC-226970) Stars are occluded by render fog
-   [MC-227018](https://bugs.mojang.com/browse/MC-227018) Changing or reloading resource packs does not reload core shaders until reloading a second time

---

# Minecraft 1.17 Pre-Release 2

It's Monday and it's time for another pre-release! This one fixed a few bugs and crashes.

In case you missed our recent [news](https://www.minecraft.net/article/caves---cliffs--part-i-has-release-date-), we just announced that we're releasing Caves & Cliffs Part I on June 8th. That's soon!

## Bugs fixed in 1.17 Pre-release 2

-   [MC-68129](https://bugs.mojang.com/browse/MC-68129) Smooth lighting doesn't work properly underwater
-   [MC-196298](https://bugs.mojang.com/browse/MC-196298) Arrows fired into the side of bamboo or pointed dripstone never despawn
-   [MC-205840](https://bugs.mojang.com/browse/MC-205840) Smooth lighting behaves oddly on blocks covered with tinted glass
-   [MC-213767](https://bugs.mojang.com/browse/MC-213767) Flowering azalea leaves ID is unintuitive
-   [MC-220698](https://bugs.mojang.com/browse/MC-220698) The ExplosionPower of ghast fireballs is uncapped, causing a freeze / crash
-   [MC-223602](https://bugs.mojang.com/browse/MC-223602) Glowing translucent entities often don't merge their outlines with other glowing entities
-   [MC-225190](https://bugs.mojang.com/browse/MC-225190) Tnt can be pushed with enchanted sword with knockback
-   [MC-225911](https://bugs.mojang.com/browse/MC-225911) Slimes and Magma Cubes not interacting with player
-   [MC-226470](https://bugs.mojang.com/browse/MC-226470) Nether Fossils generate on the nether roof above bedrock in soul sand valleys
-   [MC-226561](https://bugs.mojang.com/browse/MC-226561) Facing away from signs with glowing text makes the text disappear or z-fight
-   [MC-226576](https://bugs.mojang.com/browse/MC-226576) Unknown CPU on Debug menu.
-   [MC-226782](https://bugs.mojang.com/browse/MC-226782) /debug start does not work as described

---

# Minecraft 1.17 Pre-Release 1

The first 1.17 pre-release is here!

From now on, you should mostly see bugs being fixed. In addition to that, pre-releases doesn't follow the regular snapshot cadence of releasing on Wednesdays, so keep an eye out!

Addtionally, based on feedback from the community, we have decided to include candles in part 1 of Caves & Cliffs again. Candles will become available in Bedrock shortly after the release of part 1.

## New Features in 1.17 Pre-release 1

-   Added new advancements

### Advancements

-   Added "Whatever Floats Your Goat!" for floating in a boat with a goat
-   Added "Wax on" for applying wax to a Copper block!
-   Added "Wax off" for scraping wax off a Copper block!
-   Added "The Cutest Predator" for catching an axolotl in a bucket!
-   Added "The Healing Power of Friendship!" for teaming up with an axolotl and winning a fight
-   Added "Glow and Behold" for making a sign glow
-   Added "Light as a Rabbit" for walking on powder snow with leather boots
-   Added "Surge Protector!" for having a lightning strike a lightning rod near a villager without setting the area on fire
-   Added "Is it a Bird?" for looking at a parrot through a spyglass
-   Added "Is it a Balloon?" for looking at a ghast through a spyglass
-   Added "Is it a Plane?" for looking at a dragon through a spyglass

## Changes in 1.17 Pre-release 1

-   Candles have been added back to the creative inventory
-   Recipes for crafting and dying candles are once again available
-   Candles now have a different texture when lit
-   Glowing text on signs now has an outer glow, making text in dark colors more visible in the dark
-   Holding down the space bar now increases the scroll speed in the credits

## The Caves & Cliffs Preview

Download the [updated datapack](https://launcher.mojang.com/v1/objects/233aa01c6db99ffcf95594e384e72671ae279ced/CavesAndCliffsPreview.zip).

## Technical changes in 1.17 Pre-release 1

-   Added `started_riding`, `lightning_strike` and `using_item` advancement triggers
-   Added `source` condition to `effects_changed` trigger
-   Added `lightning_bolt` sub-predicate
-   Added `passenger`, `stepping_on` and `lightning_bolt` properties to entity predicate
-   Added `looking_at` condition to player sub-predicate
-   Expanded `item` field on item predicate to `items`
-   Expanded `block` field on block predicate to `blocks`
-   Added F3+L shortcut to generate and persist performance metrics from in-game
    -   F3+L on single-player worlds will also include reports for the integrated server
-   Removed debug report command (use perf start/stop for server performance measurement)
-   perf start/stop command on dedicated servers will now generate and persist server performance metrics

### Advancements

#### New triggers

##### `started_riding`

-   Triggered when player starts riding a vehicle or entity starts riding vehicle currently ridden by player
-   Conditions:
    -   `player` - either a player that started riding or one of boat passengers

##### `lightning_strike`

-   Triggered when lighting finishes (i.e. entity disappears)
-   Triggers for any player on server
-   Conditions
    -   `player` - player for which this trigger runs
    -   `lightning` - predicate for lightning entity
    -   `bystander` - predicate for one of the entities in certain area around strike not hurt by it

##### `using_item`

-   Triggered for every tick of using items (like crossbows, spyglass, fishing rods, etc)
-   Conditions
    -   `player` - players that uses item
    -   `item` - item being used

#### Changed triggers

##### `effects_changed`

-   Added `source` triggers that matches entity that triggered the change
-   Might be empty when:
    -   there is no entity (for example, effect gained from beacon)
    -   the effect is self-applied
    -   effect is removed

#### Changed predicates

##### Item predicate

-   `item` field expended to `items`, now accepting array of item types

##### Block predicate

-   `block` field expended to `blocks`, now accepting array of block types

##### Entity predicate

-   `passenger` - new sub-predicate for passenger directly riding this vehicle (if present, must match one or more)
-   `stepping_on` - location predicate for block entity is currently standing on
-   `lightning_bolt` - sub-predicate valid only for lightning bolt entity

##### Player predicate

-   `looking_at` - entity currently viewed by player
    -   uses same line-of-sight rules as attacking mobs
    -   actual detection radius might be changed in future

#### Lightning bolt

-   `blocks_set_on_fire` - range check for of blocks set on fire by this entity
-   `entity_struck` - predicate for entities struck by this lightning (if present, must match one or more)

### Performance metrics reporting

These will be saved to a zip file in `debug/profiling/<yyyy-MM-dd_HH.mm.ss-[levelname]-[version]>.zip` and could be used for performance regression analysis if included in bug reports.

The exact metrics, output format, and names are susceptible to change between versions. Our plan is to continue iterating on which metrics to capture.

#### Client F3+L shortcut

Pressing F3+L while in the game will start a recording for 10 seconds capturing metrics such as tick durations, used heap sizes and other more detailed stats.

Pressing F3+L before the 10-second limit will end the recording early.

This shortcut is always available to clients, even on multi-player servers where it will record client-side performance.

#### Dedicated Server perf start/stop command

`perf start` will start a recording for 10 seconds capturing metrics such as tick durations, used heap sizes and other more detailed stats.

`perf stop` before the 10-second limit will end the recording early.

## Bugs fixed in 1.17 Pre-release 1

-   [MC-19690](https://bugs.mojang.com/browse/MC-19690) Reducing maxHealth / max\_health can cause fake death
-   [MC-65587](https://bugs.mojang.com/browse/MC-65587) Lag spike while loading player head textures/player skins
-   [MC-104897](https://bugs.mojang.com/browse/MC-104897) End crystals placed on exit portals generated before 1.9 do not respawn the ender dragon
-   [MC-117708](https://bugs.mojang.com/browse/MC-117708) Credits background jitters
-   [MC-118757](https://bugs.mojang.com/browse/MC-118757) Increasing Game State Rain Level values make the game increasingly laggier and distorts UI
-   [MC-148809](https://bugs.mojang.com/browse/MC-148809) Structure block data length limited to 12
-   [MC-163945](https://bugs.mojang.com/browse/MC-163945) Intersecting structures can create corrupted block entities (spawner / chest)
-   [MC-189336](https://bugs.mojang.com/browse/MC-189336) Shifting around servers in the server list crashes the game (ArrayIndexOutOfBoundsException)
-   [MC-192889](https://bugs.mojang.com/browse/MC-192889) When placing certain heads or putting them in entities' head slot the game stutters
-   [MC-197942](https://bugs.mojang.com/browse/MC-197942) Leaves change to stone near Lava Pool (Recurrence of MC-48340)
-   [MC-198957](https://bugs.mojang.com/browse/MC-198957) End Portal Frames change to Stone near Lava Pool
-   [MC-202249](https://bugs.mojang.com/browse/MC-202249) Angering passive mobs in new nether chunks very far away from previously generated chunks, then entering a nether portal causes server to completely freeze
-   [MC-203131](https://bugs.mojang.com/browse/MC-203131) Setting the weight in Template Pool to high values will lag world and can cause out of memory error.
-   [MC-203558](https://bugs.mojang.com/browse/MC-203558) Lighting a candle is sometimes delayed
-   [MC-203661](https://bugs.mojang.com/browse/MC-203661) Flowing liquids look very dark through tinted glass
-   [MC-203704](https://bugs.mojang.com/browse/MC-203704) Candles don't show flame animations when particles are set to "Minimal"
-   [MC-204649](https://bugs.mojang.com/browse/MC-204649) Amethyst blocks don't make chime sounds when walked on by certain mobs
-   [MC-205035](https://bugs.mojang.com/browse/MC-205035) Powder Snow Bucket is not grouped with Snowball or buckets in creative inventory
-   [MC-208604](https://bugs.mojang.com/browse/MC-208604) While the mainhand is empty and there's a loaded crossbow in the offhand, the mainhand will appear invisible
-   [MC-209819](https://bugs.mojang.com/browse/MC-209819) Server crash when pathfinding to player that is teleporting away
-   [MC-211601](https://bugs.mojang.com/browse/MC-211601) Entities are loaded after scheduled ticks are processed causing detector rails, pressure plates, etc. to turn off
-   [MC-212142](https://bugs.mojang.com/browse/MC-212142) Applying glow ink on signs doesn't render the text bright without also having applied a custom color
-   [MC-212146](https://bugs.mojang.com/browse/MC-212146) Glow lichen can generate floating inside underground structures
-   [MC-212207](https://bugs.mojang.com/browse/MC-212207) Geodes generating inside icebergs
-   [MC-213062](https://bugs.mojang.com/browse/MC-213062) A ruined portal generated in an end portal
-   [MC-213799](https://bugs.mojang.com/browse/MC-213799) Dripleaf isn't properly held in the player's hand
-   [MC-214057](https://bugs.mojang.com/browse/MC-214057) Entities no longer showing flame animation when in water/lava at the same time
-   [MC-214636](https://bugs.mojang.com/browse/MC-214636) Small dripleaf leafs can overlap each other and cause z-fighting
-   [MC-214684](https://bugs.mojang.com/browse/MC-214684) Azaleas cannot be placed in flower pots
-   [MC-216276](https://bugs.mojang.com/browse/MC-216276) Lava pools break bedrock with custom world generation
-   [MC-218112](https://bugs.mojang.com/browse/MC-218112) SynchedEntityData is using locks incorrectly
-   [MC-218831](https://bugs.mojang.com/browse/MC-218831) Lots of missing shaders in the game assets
-   [MC-218972](https://bugs.mojang.com/browse/MC-218972) The glowing effect outline omits parts of entities if the entity is invisible
-   [MC-219762](https://bugs.mojang.com/browse/MC-219762) More performant noise blending algorithm in BlendedNoise
-   [MC-221554](https://bugs.mojang.com/browse/MC-221554) When searching, the goat spawn egg appears in the middle of the different boat types
-   [MC-221820](https://bugs.mojang.com/browse/MC-221820) Inconsistency: Enderman is able to pick up flowering azalea, while unable to hold normal azalea bush.
-   [MC-223021](https://bugs.mojang.com/browse/MC-223021) glShaderSource fails on some AMD drivers resulting in a crash on 1.17
-   [MC-223843](https://bugs.mojang.com/browse/MC-223843) Mycelium inside enderman\_holdable.json twice
-   [MC-224159](https://bugs.mojang.com/browse/MC-224159) Absorbtion hearts don't have the wither heart effect
-   [MC-224445](https://bugs.mojang.com/browse/MC-224445) Reloading resource packs with fabulous graphics causes screen to become black, after a few times causes crash for AMD drivers
-   [MC-224778](https://bugs.mojang.com/browse/MC-224778) Game crashes when there is a block with no facing block state in #wall\_corals and a warm ocean tries to generate
-   [MC-224861](https://bugs.mojang.com/browse/MC-224861) Falling blocks disappear for a moment when landing
-   [MC-224862](https://bugs.mojang.com/browse/MC-224862) Azalea and Flowering Azaleas can take bone meal despite being on clay
-   [MC-225010](https://bugs.mojang.com/browse/MC-225010) Closing the inventory in creative mode while having an item on the cursor turns it into a ghost item
-   [MC-225129](https://bugs.mojang.com/browse/MC-225129) Players do not despawn until they respawn
-   [MC-225193](https://bugs.mojang.com/browse/MC-225193) Goats will attempt to ram entities that are outside of the world border
-   [MC-225315](https://bugs.mojang.com/browse/MC-225315) Selected text on signs blinks
-   [MC-225404](https://bugs.mojang.com/browse/MC-225404) The axe is still an appropriate tool for moss carpets
-   [MC-225722](https://bugs.mojang.com/browse/MC-225722) java.lang.IllegalArgumentException: bound must be positive
-   [MC-225773](https://bugs.mojang.com/browse/MC-225773) Axolotls can make ambient noises when they're playing dead
-   [MC-225843](https://bugs.mojang.com/browse/MC-225843) Snow layers can still generate floating over lakes
-   [MC-225850](https://bugs.mojang.com/browse/MC-225850) Grass, tall grass, flower, double flower, fern, large fern and tree can generate on sand or gravel
-   [MC-225853](https://bugs.mojang.com/browse/MC-225853) Minecraft sometimes crashes when trying to start 21w20a for the first time
-   [MC-225895](https://bugs.mojang.com/browse/MC-225895) Floating grass can still generate above lava lakes
-   [MC-225916](https://bugs.mojang.com/browse/MC-225916) Non-waxed oxidized copper blocks don't require at least stone tier to be mined
-   [MC-225919](https://bugs.mojang.com/browse/MC-225919) Coal Ore from fossils can generate through bedrock
-   [MC-225929](https://bugs.mojang.com/browse/MC-225929) Item statistic sorting not functioning
-   [MC-225978](https://bugs.mojang.com/browse/MC-225978) Non-waxed weathered copper blocks appear twice in needs\_stone\_tool.json
-   [MC-226192](https://bugs.mojang.com/browse/MC-226192) Crash upon attempting to create a new scoreboard objective: java.lang.NullPointerException: Cannot invoke "String.toLowerCase(java.util.Locale)" because "â˜ƒ" is null

---

# Minecraft 1.16.5 Release Candidate 1

We're now releasing 1.16.5 Release Candidate 1, which addresses two critical stability issues. If no further critical issues are found, we plan to release 1.16.5 on Friday. We hope to release another Caves & Cliffs snapshot next week.

Happy mining!

---

# Minecraft 1.16.4 Release Candidate 1

We have now released 1.16.4 Release Candidate 1. If no further critical issues are found, we expect this version to be the full release of 1.16.4 on Thursday.

## Changes in 1.16.4 Release Candidate 1

-   Added an option to hide matched names

### Hide matched names

-   Some servers send chat messages in non-standard formats. With this option on, the game will attempt to apply chat hiding anyway by matching the text in messages

## Fixed bugs in 1.16.4 Release Candidate 1

-   [MC-202614](https://bugs.mojang.com/browse/MC-202614) Search function in social interactions screen only finds names that begin with the letters that you typed in

---

# Minecraft 1.16.4 Pre-Release 2

Time for another pre-release! This time around we've fixed some issues with the new social interactions screen and we've also fixed some crashes.

In case you haven't heard, yesterday we announced that Mojang accounts will be migrating into Microsoft accounts. With this pre-release, we are preparing for that by having the game understand the settings and block-list of Microsoft accounts. You can read more about that over [here](https://www.minecraft.net/article/java-edition-moving-house), and you can find answers to questions you might have in the [FAQ](https://help.minecraft.net/hc/articles/360050865492). The FAQ will be continuously updated.

We aim to release 1.16.4 sometime during next week.

## Changes in 1.16.4 Pre-release 2

-   Players blocked in your Microsoft account are now also blocked in the game
-   A button to open a link to the Accessibility Guide can now be found in the Accessibility Options screen

### Social Interactions

-   The status of a player is now listed below their name on the Social Interactions screen
-   A new tab is available to filter by Blocked players in the Social Interactions screen
-   Chat from blocked players is always hidden
-   Realms invites from blocked players are hidden

## Fixed bugs in 1.16.4 Pre-release 2

-   [MC-202150](https://bugs.mojang.com/browse/MC-202150) Slider bar on social menu appears broken
-   [MC-202147](https://bugs.mojang.com/browse/MC-202147) Cursor in Social Interactions & Recipe Book & Anvil menu doesn’t blink
-   [MC-202137](https://bugs.mojang.com/browse/MC-202137) Social Interaction Screen says players for 1 player
-   [MC-202143](https://bugs.mojang.com/browse/MC-202143) Social Interactions search bar does not stay selected when switching tabs, although the cursor remains
-   [MC-202145](https://bugs.mojang.com/browse/MC-202145) Opening the Social Interactions menu in a singleplayer world open to LAN after attempting to join an outdated multiplayer server displays the name of the outdated server instead of the name of the current world
-   [MC-202156](https://bugs.mojang.com/browse/MC-202156) Social Interactions search box entries can go out of the box
-   [MC-202155](https://bugs.mojang.com/browse/MC-202155) Outdated server warn text doesn't actually exist
-   [MC-202136](https://bugs.mojang.com/browse/MC-202136) Social Interaction Toast icon doesn't render properly with Programmer Art resource pack
-   [MC-201885](https://bugs.mojang.com/browse/MC-201885) Divide by zero error in the Ender dragon entity class can cause a server crash and infinite velocity

---

# Minecraft 1.16.4 Pre-Release 1

The first pre-release for 1.16.4 is officially out! ​ If you’ve been on the Internet for some time, you’ve probably noticed that you occasionally run into other players that you don’t get along with. To alleviate some of that frustration, we’re introducing a UI element called the “social interactions screen”, which will let you disable chatting with certain players, thus hiding any messages you receive from them. Additionally, the 1.16.4 update will contain some fixes for critical bugs, but other than that, this will be it for this dot-release. ​ Please help us out by testing the new UI and reporting any bugs you find on the [Minecraft Issue Tracker](https://aka.ms/snapshotbugs?ref=launcher). ​

## New Features in 1.16.4 Pre-release 1

​

-   New UI called Social Interactions Screen

​

### Social Interactions Screen

A new screen available in Multiplayer which shows a list of all players on a server so you can can hide chat from any player. ​

-   Opens with a configurable key binding, by default P
-   Whether a player is hidden resets when re-joining a server

​

## Technical Changes in 1.16.4 Pre-release 1

​

-   New network protocol scheme, with a high bit (bit 30) set for snapshots. The protocol version will increase by 1 for each snapshot, but full releases may keep the same protocol version as the previous full release in cases where the network protocols are compatible
-   More information is now added to the crash log in cases where poor performance causes the server to crash

​

## Fixed bugs in 1.16.4 Pre-release 1

​

-   [MC-192434](https://bugs.mojang.com/browse/MC-192434) Netherite Leggings are textured weirdly
-   [MC-199487](https://bugs.mojang.com/browse/MC-199487) WorldGen Deadlock

---

# Minecraft 1.16.3 Release Candidate 1

What better way to start the week than with a new release candidate that fixes two bugs? 1.16.3 addresses a duplication exploit, along with a pathfinding issue.

## Fixed bugs in 1.16.3 Release Candidate 1

-   [MC-198678](https://bugs.mojang.com/browse/MC-198678) Giving an item and a gold ingot to a baby piglin and killing it duplicates the item
-   [MC-196449](https://bugs.mojang.com/browse/MC-196449) Piglins, Piglin Brutes, Hoglins and Zoglins have trouble pathfinding to the player when attacking

---

# Minecraft 1.16.2 Release Candidate 2

We have now released 1.16.2 Release Candidate 2, fixing a few critical issues. If no further critical issues are found, we expect this version to be the full release of 1.16.2 tomorrow.

## Fixed bugs in 1.16.2 Release Candidate 2

-   [MC-197512](https://bugs.mojang.com/browse/MC-197512) Incompatible resource packs don't display their name and description anymore
-   [MC-197362](https://bugs.mojang.com/browse/MC-197362) Cannot load 2 or more resource packs if the second one is incompatible
-   [MC-197354](https://bugs.mojang.com/browse/MC-197354) Block event lag in 1.16.2-rc1 is still higher than in 1.15.2
-   [MC-197348](https://bugs.mojang.com/browse/MC-197348) Piston heads occasionally appear twice in certain piston setups

---

# Minecraft 1.16.2 Release Candidate 1

We have now released 1.16.2 Release Candidate 1, fixing even more stability issues. If no further critical issues are found, we expect this version to be the full release of 1.16.2 on Tuesday next week.

## Technical Changes in 1.16.2 Release Candidate 1

-   The Resource and Data pack version has been raised to 6

## Fixed bugs in 1.16.2 Release Candidate 1

-   [MC-197275](https://bugs.mojang.com/browse/MC-197275) Due to changes to walls, "pack\_format: 5" is not cross-compatible between 1.15 and 1.16
-   [MC-197263](https://bugs.mojang.com/browse/MC-197263) End sky and nether fog don't work on servers
-   [MC-197258](https://bugs.mojang.com/browse/MC-197258) Certain dimensions can cause a game crash
-   [MC-197225](https://bugs.mojang.com/browse/MC-197225) Crash: java.util.concurrent.CompletionException: u: Exception generating new chunk
-   [MC-197197](https://bugs.mojang.com/browse/MC-197197) Game crashes/freezes after creating/entering a Superflat world without presets
-   [MC-194933](https://bugs.mojang.com/browse/MC-194933) Game crashes when loading a custom biome / java.lang.UnsupportedOperationException: Trying to add tag of type 8 to list of 10
-   [MC-190103](https://bugs.mojang.com/browse/MC-190103) Crash when using a nether portal: java.lang.IndexOutOfBoundsException: fromIndex < 0: -2368549

---

# Minecraft 1.16.2 Pre-Release 3

We have now released 1.16.2 Pre-release 3, fixing some stability issues.

## Fixed bugs in 1.16.2 Pre-release 3

-   [MC-105248](https://bugs.mojang.com/browse/MC-105248) Wet wolves become nearly black in dark areas
-   [MC-107529](https://bugs.mojang.com/browse/MC-107529) Marker:1 Armor Stands render themself and their equipment dark if inside solid blocks
-   [MC-167756](https://bugs.mojang.com/browse/MC-167756) Wolf is rendered too dark when not directly affected by skylight
-   [MC-191388](https://bugs.mojang.com/browse/MC-191388) "No key position\_predicate in MapLike" console spam
-   [MC-197053](https://bugs.mojang.com/browse/MC-197053) Pressing F3+D clears the pending lines message, but doesn't clear the pending messages
-   [MC-197152](https://bugs.mojang.com/browse/MC-197152) Ghost Blocks can be generated in some piston setups
-   [MC-197218](https://bugs.mojang.com/browse/MC-197218) Piston arm appears twice during retraction in some mechanisms

---

# Minecraft 1.16.2 Pre-Release 2

We have now released the second pre-release for Minecraft 1.16.2, in which another round of bugs have been squished!

## Changes in 1.16.2 Pre-release 2

-   Crimson and Warped Roots no longer require shears when mined

## Technical Changes in 1.16.2 Pre-release 2

### Execute Command

-   `execute in` now respects dimension scaling

## Fixed bugs in 1.16.2 Pre-release 2

-   [MC-69876](https://bugs.mojang.com/browse/MC-69876) Pistons at Y=1 do not push downwards / at Y=254 do not push upwards
-   [MC-124320](https://bugs.mojang.com/browse/MC-124320) Endermen can pick up and place snowless snowy grass blocks
-   [MC-130558](https://bugs.mojang.com/browse/MC-130558) Item frames cannot be emptied if gamerule doEntityDrops is set to false
-   [MC-134084](https://bugs.mojang.com/browse/MC-134084) If gamerule sendCommandFeedback is disabled, /msg or /tell don't display the message to the sender
-   [MC-136553](https://bugs.mojang.com/browse/MC-136553) Dyes in creative inventory are in reverse order
-   [MC-152037](https://bugs.mojang.com/browse/MC-152037) Powered, activator and detector rails are deleted when pushed/pulled onto a block they cannot be placed on
-   [MC-187357](https://bugs.mojang.com/browse/MC-187357) Strongholds will not generate in floating\_islands or caves preset
-   [MC-189736](https://bugs.mojang.com/browse/MC-189736) "distance" within predicate no longer works
-   [MC-190552](https://bugs.mojang.com/browse/MC-190552) Demo mode resets position and inventory upon launch
-   [MC-190859](https://bugs.mojang.com/browse/MC-190859) floating\_islands or caves buffet worlds no longer generate strongholds and ender eyes do not locate previously generated strongholds after upgrading to 1.16
-   [MC-192136](https://bugs.mojang.com/browse/MC-192136) Lava damage works differently than in previous versions
-   [MC-192236](https://bugs.mojang.com/browse/MC-192236) Endermen can place blocks on top of item frames on the floor
-   [MC-192371](https://bugs.mojang.com/browse/MC-192371) Paintings in the same block space pop off when chunk loads
-   [MC-192845](https://bugs.mojang.com/browse/MC-192845) Block Event Lag in 1.16 is excessive
-   [MC-194217](https://bugs.mojang.com/browse/MC-194217) Lava sets nether vegetation on fire despite it being fire resistant
-   [MC-194867](https://bugs.mojang.com/browse/MC-194867) Minecarts come out the wrong side of a nether portal and lose momentum when coming back to overworld
-   [MC-194953](https://bugs.mojang.com/browse/MC-194953) Custom Biomes are not useable in Predicates
-   [MC-195803](https://bugs.mojang.com/browse/MC-195803) Mob kill statistics are formatted in reverse: "N killed you times"
-   [MC-195851](https://bugs.mojang.com/browse/MC-195851) "Hat" layer on helmets detaches from Piglins' heads while bartering
-   [MC-196245](https://bugs.mojang.com/browse/MC-196245) Charged creeper does not always drop skull if zombie variants are nearby
-   [MC-196441](https://bugs.mojang.com/browse/MC-196441) Stonecutter/Smithing Table recipes are not given after crafting a stack of more than one
-   [MC-196469](https://bugs.mojang.com/browse/MC-196469) F1 hides the nausea green tint
-   [MC-196473](https://bugs.mojang.com/browse/MC-196473) Pufferfish gives Nausea II instead of the maximum of Nausea I
-   [MC-196653](https://bugs.mojang.com/browse/MC-196653) Creating multiple datapack dimensions which reference the same dimension\_type string causes "unregistered dimension" crash
-   [MC-196743](https://bugs.mojang.com/browse/MC-196743) Custom/modified biomes don't work in the overworld

---

# Minecraft 1.16.2 Pre-Release 1

It's time for pre-releases for Minecraft Java Edition 1.16.2!

From now on you should mostly see bug fixes leading up to the full release of 1.16.2 which we expect to happen in a few weeks.

## New Features in 1.16.2 Pre-release 1

-   New accessibility settings have been added to help with visual comfort

### Accessibility

-   Distortion effects such as nausea and the Nether portal overlay can now be reduced
-   At lower values, the nausea effect is replaced with a green overlay as an alternative visualization
-   Field of view effects shown after speed modifiers are applied can now be reduced

## Changes in 1.16.2 Pre-release 1

-   Chains can now be placed in all orientations
-   Endermen will no longer place their held blocks onto bedrock blocks
-   Piglins now become angry with players who open or destroy a Chest Minecart
-   Villagers now lose their job sites when changing dimension
-   Chat delay has been added to the Chat Settings screen

## Technical Changes in 1.16.2 Pre-release 1

-   Custom world generation and dimension settings now use the same folder pattern in data packs as other resources (`namespace/<type>/resource.json`)

## Fixed bugs in 1.16.2 Pre-release 1

-   [MC-73884](https://bugs.mojang.com/browse/MC-73884) Throwable projectiles get destroyed at contact with non solid blocks
-   [MC-125758](https://bugs.mojang.com/browse/MC-125758) Bubble column does not affect egg, snowball, ender pearl, splash potion, lingering potion, fireball and shulker bullet
-   [MC-158987](https://bugs.mojang.com/browse/MC-158987) Raid still continues after a villager turns into a witch
-   [MC-163767](https://bugs.mojang.com/browse/MC-163767) Villagers get ejected from a minecart when converted to a zombie villager
-   [MC-167045](https://bugs.mojang.com/browse/MC-167045) Banners are rendered too dark in the inventory
-   [MC-170900](https://bugs.mojang.com/browse/MC-170900) New Nether plants can be picked up without shears/silk touch
-   [MC-174574](https://bugs.mojang.com/browse/MC-174574) Soul speed doesn't work when slabs and blocks of similar height are placed above the soul sand block
-   [MC-176015](https://bugs.mojang.com/browse/MC-176015) Strider suffocates when player is saddled on and looking up with Warped Fungus on a Stick
-   [MC-176034](https://bugs.mojang.com/browse/MC-176034) You can walk on striders
-   [MC-177651](https://bugs.mojang.com/browse/MC-177651) Despite being cold outside of lava, striders don't care about staying in lava
-   [MC-178061](https://bugs.mojang.com/browse/MC-178061) Chat Delay option doesn't exist in Chat settings
-   [MC-182330](https://bugs.mojang.com/browse/MC-182330) Crossbow-wielding piglins behave weirdly when they try to pursue invisible players
-   [MC-185490](https://bugs.mojang.com/browse/MC-185490) Separated Trader Lamas On Leads Cause TPS Hit
-   [MC-187398](https://bugs.mojang.com/browse/MC-187398) Smithing table and stonecutter recipes are not unlocked when used
-   [MC-187904](https://bugs.mojang.com/browse/MC-187904) Data packs cannot replace settings of vanilla dimensions during world creation
-   [MC-189414](https://bugs.mojang.com/browse/MC-189414) Smithing table doesn't calculate amount of output items correctly
-   [MC-189797](https://bugs.mojang.com/browse/MC-189797) Hoglins, Zoglins, melee Piglins, and Piglin Brutes do not properly attack invisible entities within normal range
-   [MC-191168](https://bugs.mojang.com/browse/MC-191168) Piglins that convert into Zombified Piglins while sitting on a minecart sometimes sink into blocks
-   [MC-192032](https://bugs.mojang.com/browse/MC-192032) Villagers don't always try to claim the closest workstation and are sometimes focussed on a non-existent one or one out of their reach
-   [MC-193213](https://bugs.mojang.com/browse/MC-193213) Leads are positioned incorrectly on players and Wandering Traders
-   [MC-194263](https://bugs.mojang.com/browse/MC-194263) Large End Cities do not generate correctly / get cut off
-   [MC-194299](https://bugs.mojang.com/browse/MC-194299) Template pools fail to load via datapack
-   [MC-194845](https://bugs.mojang.com/browse/MC-194845) Subspace Bubble advancement cannot be completed with 7 km distance
-   [MC-195062](https://bugs.mojang.com/browse/MC-195062) Raids often will not end in defeat when all villagers are dead if there are job sites in the village
-   [MC-195544](https://bugs.mojang.com/browse/MC-195544) Game crashes after killing a mob that is being ridden by a guardian while it is being ridden by a wither skeleton

---

# Minecraft 1.16 Release Candidate

Out with the old, and in with the new! Today we're introducing a new naming convention (well, it's been a while) for Minecraft Java Edition. Previously, the last pre-release was, in fact, the release candidate, but we're now making that more clear by changing the name to be "release candidate". This means that if there are no major issues following this release, no further changes will be done before the full release.

Speaking of the full release: In case you've been living under a rock (it's Minecraft, so that's OK), [we're releasing the Nether Update on Tuesday, June 23](https://www.minecraft.net/article/the-nether-update-has-date-). That's next week!

## Fixed Bugs in 1.16 Release Candidate 1

-   Fixed issues with the Nether surface generation, causing issues like floating lava and crimson forests without nylium
-   [MC-150543](https://bugs.mojang.com/browse/MC-150543) Using a stonecutter can sometimes crash the game in certain circumstances
-   [MC-174790](https://bugs.mojang.com/browse/MC-174790) Mob on turtle eggs causes the game to crash
-   [MC-181833](https://bugs.mojang.com/browse/MC-181833) Crash on world startup after playing world in 20w18a

---

# Minecraft 1.16 Pre-Release 8

Squish, squash is the sound bugs make when you squish them. Or was it squash them? Anyway, here's pre-release 8 with more bug fixes.

## Fixed Bugs in 1.16 Pre-Release 8

-   [MC-114030](https://bugs.mojang.com/browse/MC-114030) Structure blocks take and apply NBT data of entities and tile entities directly instead of a copy when loading and saving structures
-   [MC-127971](https://bugs.mojang.com/browse/MC-127971) Trying to throw a trident while having a shield or bow equipped will make the trident appear backwards in your hand
-   [MC-153483](https://bugs.mojang.com/browse/MC-153483) When Swapping Tridents between hands the trident being held doesnt swap visually, it just flips backwards
-   [MC-159820](https://bugs.mojang.com/browse/MC-159820) 3rd person reverse trident bug
-   [MC-179309](https://bugs.mojang.com/browse/MC-179309) Trident animates backwards while eating
-   [MC-187953](https://bugs.mojang.com/browse/MC-187953) Adding items to #minecraft:small\_flowers item tag and feeding them to brown mooshrooms crashes the game
-   [MC-188746](https://bugs.mojang.com/browse/MC-188746) Not selecting a biome for "Floating Islands" world type spawns an empty world
-   [MC-188859](https://bugs.mojang.com/browse/MC-188859) Incorrect throwing animation for tridents
-   [MC-189007](https://bugs.mojang.com/browse/MC-189007) When entering or leaving swimming mode both arms now move parallel instead of symmetrical
-   [MC-189782](https://bugs.mojang.com/browse/MC-189782) Large ferns only drop one small fern when harvested
-   [MC-189858](https://bugs.mojang.com/browse/MC-189858) Leads can disappear when transporting a mob through a nether portal
-   [MC-189937](https://bugs.mojang.com/browse/MC-189937) Saddled pigs accumulate speed when ridden in water
-   [MC-189970](https://bugs.mojang.com/browse/MC-189970) Selected worlds using keyboard nav does not enable world-specific options such as Play, Edit, Delete, and Re-Create
-   [MC-189973](https://bugs.mojang.com/browse/MC-189973) ClassCastException when bee with passenger flies through village at night
-   [MC-190005](https://bugs.mojang.com/browse/MC-190005) Piglins can spawn with gear with too many enchantments, including multiple enchantments of the same type
-   [MC-190036](https://bugs.mojang.com/browse/MC-190036) Passive mobs do not spawn in floating island world type
-   [MC-190124](https://bugs.mojang.com/browse/MC-190124) Grass decays too quickly when covered in water
-   [MC-190166](https://bugs.mojang.com/browse/MC-190166) Game crashes when burning a tree in a custom dimension: java.lang.NullPointerException: Exception while ticking

---

# Minecraft 1.16 Pre-Release 7

We've now released pre-release 7 to fix a few more bugs.

## Fixed Bugs in 1.16 Pre-Release 7

-   [MC-176447](https://bugs.mojang.com/browse/MC-176447) Striders left/right leg uses the same texture
-   [MC-180467](https://bugs.mojang.com/browse/MC-180467) World Border is no longer fully solid
-   [MC-183673](https://bugs.mojang.com/browse/MC-183673) Skeletons not spawning frequently in Soul Sand Valley
-   [MC-185126](https://bugs.mojang.com/browse/MC-185126) Unable to jump one block high from flowing lava that has level 3 or lower
-   [MC-186228](https://bugs.mojang.com/browse/MC-186228) Zombified piglins' sleeve layers are not held upwards like their arms
-   [MC-188552](https://bugs.mojang.com/browse/MC-188552) Zombified Piglins drop less XP than before
-   [MC-188838](https://bugs.mojang.com/browse/MC-188838) Heads and skulls on a wall cause z-fighting
-   [MC-189824](https://bugs.mojang.com/browse/MC-189824) Overworld/general gameplay music can play in the nether in creative mode
-   [MC-189846](https://bugs.mojang.com/browse/MC-189846) Turtle eggs hatching broken, game checking for sand one block too deep
-   [MC-189856](https://bugs.mojang.com/browse/MC-189856) Unable to set nether portal block with /setblock or /fill
-   [MC-189867](https://bugs.mojang.com/browse/MC-189867) Cannot use /setblock and /fill to place blocks in positions they cannot normally be in
-   [MC-189868](https://bugs.mojang.com/browse/MC-189868) Player gets set on fire and extinguished continuously when standing in fire in Creative mode
-   [MC-189895](https://bugs.mojang.com/browse/MC-189895) Redstone in jungle temple / pyramid no longer connects to blocks and redstone components properly
-   [MC-189905](https://bugs.mojang.com/browse/MC-189905) The player can get stuck inside of the world border
-   [MC-189971](https://bugs.mojang.com/browse/MC-189971) Clicking the "Take me back" button causes translucent blocks to stop rendering

---

# Minecraft 1.16 Pre-Release 6

Start your new week by not slipping and sliding on blocks that should not be slippy or slidey - we've now released pre-release 6 for Minecraft Java Edition 1.16.

## Changes in 1.16 Pre-Release 6

-   Tweaked map colours of crimson and warped materials
-   There is now a text that says "Search..." in the recipe book that higlights that you can... search...
-   Opening the game mode switcher now has a default selection if you have not entered a different game mode before in that world.
    -   In this scenario, by default, you will now select Creative if currently in any other game mode, and Survival if currently in Creative

## Technical Changes in 1.16 Pre-release 6

​ Added `player_interacted_with_entity` advancement trigger

-   `item` matches the item which was in the player's hand during interaction
-   `entity` matches the entity which was interacted with

## Fixed Bugs in 1.16 Pre-Release 6

-   [MC-45749](https://bugs.mojang.com/browse/MC-45749) Potion particles spread always from the north-west corner of a block, regardless of impact
-   [MC-163333](https://bugs.mojang.com/browse/MC-163333) Plains houses and decorations can generate in taiga villages
-   [MC-166593](https://bugs.mojang.com/browse/MC-166593) Zombie villagers in zombie villages aren't persistent
-   [MC-167386](https://bugs.mojang.com/browse/MC-167386) binding hotbar hotkeys to mouse thumb button won't interact the way it should
-   [MC-167554](https://bugs.mojang.com/browse/MC-167554) Enchantment glint on shields is rendered incorrectly
-   [MC-171543](https://bugs.mojang.com/browse/MC-171543) Ravagers can easily be knocked back with the knockback enchantment
-   [MC-172027](https://bugs.mojang.com/browse/MC-172027) Datafixer for minecraft:recipes/misc/composter advancement is missing
-   [MC-172442](https://bugs.mojang.com/browse/MC-172442) Piglins don't spawn with enchanted gear
-   [MC-172592](https://bugs.mojang.com/browse/MC-172592) Breaking a larger than normally possible Nether portal makes the game crash with a java.lang.StackOverflowError
-   [MC-174279](https://bugs.mojang.com/browse/MC-174279) Baby piglins don't run from wither skeletons
-   [MC-175993](https://bugs.mojang.com/browse/MC-175993) Enchantment glint of lodestone compass or enchanted compass/clock jumps when compass/clock rotates
-   [MC-177929](https://bugs.mojang.com/browse/MC-177929) End gateways don't always teleport the player when throwing an ender pearl into it
-   [MC-178573](https://bugs.mojang.com/browse/MC-178573) Piglins are afraid of extinguished soul campfires
-   [MC-178947](https://bugs.mojang.com/browse/MC-178947) Explosion damage can be blocked by fire
-   [MC-181465](https://bugs.mojang.com/browse/MC-181465) Bartering with a piglin with an equipped shield using right click deletes the shield instead of dropping it on the ground
-   [MC-182309](https://bugs.mojang.com/browse/MC-182309) Command autocomplete doesn't sort strings that start with the given word to the top
-   [MC-182325](https://bugs.mojang.com/browse/MC-182325) Iron golem causes lag when it can't attack its enemies
-   [MC-183759](https://bugs.mojang.com/browse/MC-183759) Oh Shiny advancement doesn't activate when right clicking
-   [MC-184277](https://bugs.mojang.com/browse/MC-184277) Last game mode for game mode switcher and F3 + N is always survival after relogging
-   [MC-184813](https://bugs.mojang.com/browse/MC-184813) Superflat world corruption when converting the world
-   [MC-186614](https://bugs.mojang.com/browse/MC-186614) New Nether mobs make too many noises under certain circumstances
-   [MC-186617](https://bugs.mojang.com/browse/MC-186617) Zombified piglins sound angry too many times when hit constantly
-   [MC-187031](https://bugs.mojang.com/browse/MC-187031) Piglin swinging animation does not match attacking or targeting animation
-   [MC-187420](https://bugs.mojang.com/browse/MC-187420) Zombified piglins make angry sounds too frequently
-   [MC-187490](https://bugs.mojang.com/browse/MC-187490) Piglins that pick up gold while pathfinding will continue pathfinding
-   [MC-187522](https://bugs.mojang.com/browse/MC-187522) Server doesn't generate amplified / large biome worlds
-   [MC-187622](https://bugs.mojang.com/browse/MC-187622) Piglins can still remove curse of binding enchanted helmets / carved pumpkins after they've inspected a golden helmet
-   [MC-187853](https://bugs.mojang.com/browse/MC-187853) Water / Lava doesnt move entities unless they move first
-   [MC-188581](https://bugs.mojang.com/browse/MC-188581) Glass placed in item frame isn't rendered properly
-   [MC-188659](https://bugs.mojang.com/browse/MC-188659) New "swap items with offhand" feature doesn't work if the control is bound to the 4th or 5th mouse button
-   [MC-188702](https://bugs.mojang.com/browse/MC-188702) When loading in a redstone dot via a structure block, the dot gets set to a redstone cross
-   [MC-188987](https://bugs.mojang.com/browse/MC-188987) When standing on certain non-full blocks, the player gets pushed off if there is a lower area next to the block
-   [MC-189081](https://bugs.mojang.com/browse/MC-189081) Chains create water sources
-   [MC-189256](https://bugs.mojang.com/browse/MC-189256) Hoglin and zoglin tusks textures are not separate
-   [MC-189326](https://bugs.mojang.com/browse/MC-189326) Lecterns don't stack with other lecterns after being placed down and broken

---

# Minecraft 1.16 Pre-Release 5

Spend your weekend with this brand new fifth pre-release for Minecraft Java Edition 1.16 - it has a check to warn you not to try to run with too high graphics settings for your system and a bunch of bug fixes.

## Changes in 1.16 Pre-Release 5

-   Added a GPU warn list for graphics drivers that are known to have rendering issues with Fabulous graphics
-   If your GPU driver is detected as problematic then a warning message will be displayed with details of the detected problem
-   This warning message can be ignored, but support cannot be provided for graphics drivers on the warn list running Fabulous

## Fixed Bugs in 1.16 Pre-Release 5

-   [MC-141934](https://bugs.mojang.com/browse/MC-141934) Ctrl + Pick block on a lectern does not display its book despite being saved to NBT
-   [MC-148955](https://bugs.mojang.com/browse/MC-148955) Iron golems can spawn inside of non-full blocks
-   [MC-149308](https://bugs.mojang.com/browse/MC-149308) Thrown items appear right in front of head for a frame
-   [MC-166276](https://bugs.mojang.com/browse/MC-166276) Thrown items and blocks sometimes appear black for an instant
-   [MC-166413](https://bugs.mojang.com/browse/MC-166413) Item frame turns black for an instant when being placed
-   [MC-166718](https://bugs.mojang.com/browse/MC-166718) Mobs no longer suffocate inside of soul sand, farmland or grass paths
-   [MC-167359](https://bugs.mojang.com/browse/MC-167359) Items are bright for a brief moment after being broken
-   [MC-167362](https://bugs.mojang.com/browse/MC-167362) Item frames are bright for a brief moment when placed
-   [MC-177361](https://bugs.mojang.com/browse/MC-177361) Villagers/wandering traders don't flee away from zoglins
-   [MC-180867](https://bugs.mojang.com/browse/MC-180867) Jukeboxes grabbed with an NBT+ picker do not release discs on right click.
-   [MC-181605](https://bugs.mojang.com/browse/MC-181605) Right-clicking a Respawn Anchor with an item in off-hand uses that item
-   [MC-182119](https://bugs.mojang.com/browse/MC-182119) Game mode description text is no longer centered and now extends off the screen in some languages
-   [MC-183469](https://bugs.mojang.com/browse/MC-183469) Mobs do not pathfind around holes or lava
-   [MC-185777](https://bugs.mojang.com/browse/MC-185777) Shift-clicking a netherite ingot in a smithing table moves the ingot to gear slot
-   [MC-186206](https://bugs.mojang.com/browse/MC-186206) Water tinted rendered differently behind glass top versus sides
-   [MC-188468](https://bugs.mojang.com/browse/MC-188468) User Control for "Swap Item with Offhand" gets reset when upgrading from 1.16pre-2 to 3
-   [MC-188489](https://bugs.mojang.com/browse/MC-188489) "Switch item with offhand" inventory keyboard shortcut still works in Search Items creative tab, overriding text input
-   [MC-188505](https://bugs.mojang.com/browse/MC-188505) Attacking an entity while sneaking cancels sneaking for a moment, then desyncs client and server about player's height
-   [MC-188509](https://bugs.mojang.com/browse/MC-188509) Zombified Piglins drop experience but not gold ingots when they die while aggressive
-   [MC-188542](https://bugs.mojang.com/browse/MC-188542) Custom world gen settings causes minecraft to crash upon import
-   [MC-188633](https://bugs.mojang.com/browse/MC-188633) Small mobs drown while in boat
-   [MC-188652](https://bugs.mojang.com/browse/MC-188652) Gamerules doMobLoot and doTileDrops have the same description in gamerule menu
-   [MC-188655](https://bugs.mojang.com/browse/MC-188655) Number keys in Creative search override typing in the search bar, resulting in unintentional hotbar item switching
-   [MC-188675](https://bugs.mojang.com/browse/MC-188675) Bed heads, tall flowers and bottom doors drop two items
-   [MC-188678](https://bugs.mojang.com/browse/MC-188678) Milking a cow/mooshroom for milk or mushroom stew consumes the item without giving anything back
-   [MC-188691](https://bugs.mojang.com/browse/MC-188691) Can no longer light Nether Portal using Fire Charge on the side of Obsidian

---

# Minecraft 1.16 Pre-Release 4

We've now released Minecraft 1.16 Pre-release 4, with tweaked spawn rates and another round of bug fixes.

## Changes in 1.16 Pre-Release 4

-   Tweaked hostile spawn rates in Warped Forests and Soulsand Valleys

## Fixed Bugs in 1.16 Pre-Release 4

-   [MC-136085](https://bugs.mojang.com/browse/MC-136085) Blocks attached to multi-block blocks are deleted when breaking the other half of the block
-   [MC-177463](https://bugs.mojang.com/browse/MC-177463) Crash report "Connection:" field contains unuseful value (Object.toString())
-   [MC-179851](https://bugs.mojang.com/browse/MC-179851) Attribute generic.movement\_speed does not work in /attribute
-   [MC-180967](https://bugs.mojang.com/browse/MC-180967) Advancement description JSON can ignore the first specified color
-   [MC-181498](https://bugs.mojang.com/browse/MC-181498) Using a fire charge on top of fire briefly creates another fire on top of it
-   [MC-181556](https://bugs.mojang.com/browse/MC-181556) Baby Zombified Piglins float while riding striders
-   [MC-181576](https://bugs.mojang.com/browse/MC-181576) Worlds which are already open in another instance of Minecraft can be selected with arrow keys and tab
-   [MC-184613](https://bugs.mojang.com/browse/MC-184613) End Stone generates in Floating Islands setting
-   [MC-184644](https://bugs.mojang.com/browse/MC-184644) Cave buffet generator generates with netherrack, even if using a non-nether biome
-   [MC-186468](https://bugs.mojang.com/browse/MC-186468) Although reload failed, the game will also tell you "Disabled data pack \[XXX\]"
-   [MC-187419](https://bugs.mojang.com/browse/MC-187419) Hand animation is not played when feeding horses or donkeys with golden carrots
-   [MC-188352](https://bugs.mojang.com/browse/MC-188352) Creative mode cow milking / mushroom stewing inconsistent with picking up placed fluids
-   [MC-188451](https://bugs.mojang.com/browse/MC-188451) Game crashes when dispensing a shulker box from a dispenser "java.lang.NullPointerException: Exception while ticking"
-   [MC-188463](https://bugs.mojang.com/browse/MC-188463) Transparent dropped items render in wrong order when behind entities when graphics setting is set to fabulous
-   [MC-188467](https://bugs.mojang.com/browse/MC-188467) "Sound Director" in credits is too light compared to the rest of the text, and is missing an "S"
-   [MC-188517](https://bugs.mojang.com/browse/MC-188517) Cannot create multiple empty tags in a datapack
-   [MC-188519](https://bugs.mojang.com/browse/MC-188519) Clouds render on top of blocks
-   [MC-188528](https://bugs.mojang.com/browse/MC-188528) Particles render on top of stained glass

---

# Minecraft 1.16 Pre-Release 3

Another pre-release is now available for Minecraft: Java Edition! This pre-release fixes a bunch of bugs, but we also made a few minor tweaks. The Nether Update is closing in and we aim to release the update within a couple of weeks.

## Changes in 1.16 Pre-release 3

​

-   Food can now be placed on unlit campfires
-   Made Nether Fortresses slightly more common
-   Visibility under lava is now slightly better when under the effect of fire resistance
-   Piglins now hear you break a chest or block of gold (or similar) even if your are our of line of sight, and will assume you are stealing
-   Game rule descriptions now span multiple lines if needed on the game rules screen
-   A loading screen is now displayed while the game is reading world data for loading, creating or re-creating a world
-   The game will now attempt to recover worlds broken in 1.16 Pre-release 1

​

## Technical changes in 1.16 Pre-release 3

​ Region files are now only opened in synchronous mode on Windows, not on other operating systems. Status of this feature can be manually controlled by following options:

-   For dedicated servers: `sync-chunk-writes` within `server.properties`
-   For clients: `syncChunkWrites` within `options.txt`

## Fixed Bugs in 1.16 Pre-Release 3

-   [MC-13823](https://bugs.mojang.com/browse/MC-13823) Leads are incorrectly positioned on certain entities
-   [MC-14680](https://bugs.mojang.com/browse/MC-14680) Lead is shifted upwards or downwards based on leashed entity height
-   [MC-27535](https://bugs.mojang.com/browse/MC-27535) Mobs can sometimes still despawn, even if named with a name tag
-   [MC-84610](https://bugs.mojang.com/browse/MC-84610) Off-hand hotkey doesn't work in inventories
-   [MC-131286](https://bugs.mojang.com/browse/MC-131286) Attack will use right hand instead of left hand when swimming (main hand: left)
-   [MC-134608](https://bugs.mojang.com/browse/MC-134608) Certain Spawner Tag Conditions Induce Game Crash
-   [MC-143473](https://bugs.mojang.com/browse/MC-143473) Teleporting a mob while it is pathfinding will make it navigate back to where it was originally going
-   [MC-152157](https://bugs.mojang.com/browse/MC-152157) "Marie Stålkrantz" is not the right color in game credits
-   [MC-159371](https://bugs.mojang.com/browse/MC-159371) Leads are incorrectly positioned on bees
-   [MC-159502](https://bugs.mojang.com/browse/MC-159502) Bees don't avoid water; killing themselves
-   [MC-160520](https://bugs.mojang.com/browse/MC-160520) Bee's wandering AI tries to go through three-way corners
-   [MC-163921](https://bugs.mojang.com/browse/MC-163921) Placing a block while looking at redstone ore plays no sound
-   [MC-166346](https://bugs.mojang.com/browse/MC-166346) Transparent blocks do not render properly with tripwire above
-   [MC-166880](https://bugs.mojang.com/browse/MC-166880) Pufferfish spikes model seems to be broken
-   [MC-167043](https://bugs.mojang.com/browse/MC-167043) Enchantment glint does only apply to the handle of shields with banners
-   [MC-169008](https://bugs.mojang.com/browse/MC-169008) Using End portal in the Nether teleports the player to the End, but at the same coordinates the player was in the Nether
-   [MC-171618](https://bugs.mojang.com/browse/MC-171618) Players wearing armor take less damage from burning when standing in fire under certain conditions
-   [MC-171810](https://bugs.mojang.com/browse/MC-171810) Some Mojang employees are not mentioned in the credits
-   [MC-171969](https://bugs.mojang.com/browse/MC-171969) Fall damage is negated when stepping up after falling
-   [MC-172053](https://bugs.mojang.com/browse/MC-172053) Nether particles get stuck on the bottom of blocks
-   [MC-172105](https://bugs.mojang.com/browse/MC-172105) When a piglin is dancing, targeting or looking at an item, the chestplate the piglin is wearing does not adjust to the piglin's pose
-   [MC-172110](https://bugs.mojang.com/browse/MC-172110) Texture of turtle shells is missing when worn by a piglin or zombified piglin
-   [MC-172871](https://bugs.mojang.com/browse/MC-172871) Unable to spawn wither in horizontal arrangement below y level 2
-   [MC-173310](https://bugs.mojang.com/browse/MC-173310) Observer powered texture doesn't match unpowered
-   [MC-173404](https://bugs.mojang.com/browse/MC-173404) Desync when mounting an entity while sneaking
-   [MC-173825](https://bugs.mojang.com/browse/MC-173825) Bats break turtle eggs
-   [MC-176094](https://bugs.mojang.com/browse/MC-176094) Baby zombified piglin chicken jockeys can spawn riding striders
-   [MC-177336](https://bugs.mojang.com/browse/MC-177336) 'Failed to access level' when opening a world from a CIFS mount on Ubuntu
-   [MC-177530](https://bugs.mojang.com/browse/MC-177530) The new minecraft:attributes registry is plural, while all the others are singular
-   [MC-177542](https://bugs.mojang.com/browse/MC-177542) Chunk loading and saving is extremely slow when sync-chunk-writes=true
-   [MC-177626](https://bugs.mojang.com/browse/MC-177626) Spruce generation is broken
-   [MC-177694](https://bugs.mojang.com/browse/MC-177694) Zombified Piglin Spawn Egg is placed before Zombie Villager Spawn Egg in the creative inventory
-   [MC-177712](https://bugs.mojang.com/browse/MC-177712) Nether portal blocks do not have loot tables
-   [MC-177795](https://bugs.mojang.com/browse/MC-177795) Overworld music can start playing in the Nether
-   [MC-177863](https://bugs.mojang.com/browse/MC-177863) Shroomlights cannot be composted
-   [MC-177876](https://bugs.mojang.com/browse/MC-177876) Striders are now much rarer
-   [MC-178010](https://bugs.mojang.com/browse/MC-178010) Lena Raine does not appear in credits
-   [MC-178338](https://bugs.mojang.com/browse/MC-178338) Striders only get warm when lava touches their legs
-   [MC-179140](https://bugs.mojang.com/browse/MC-179140) Sea guardians have an odd swimming behavior
-   [MC-180603](https://bugs.mojang.com/browse/MC-180603) Wrong structures are generated in superflat worlds
-   [MC-181630](https://bugs.mojang.com/browse/MC-181630) Advancement trigger "minecraft:tick" does not support standard "player" predicate
-   [MC-181813](https://bugs.mojang.com/browse/MC-181813) Edit "g"ame "r"ules are not capitalized in the Game Rules menu title
-   [MC-181884](https://bugs.mojang.com/browse/MC-181884) Falling quickly/Flying with Elytra/Swimming with Riptide Trident and throwing a projectile will cause it to hit the player
-   [MC-182076](https://bugs.mojang.com/browse/MC-182076) Horse jumping sound is unused
-   [MC-182249](https://bugs.mojang.com/browse/MC-182249) Problems with potted\_cactus.json block model file
-   [MC-182766](https://bugs.mojang.com/browse/MC-182766) Recipe book search function does not work if recipe book was not open before
-   [MC-182909](https://bugs.mojang.com/browse/MC-182909) Esc from Customised World's Biome selection screen kicks us back to main menu
-   [MC-183018](https://bugs.mojang.com/browse/MC-183018) When sneaking while flying underwater in Creative, the player exits flying mode after a few seconds
-   [MC-183402](https://bugs.mojang.com/browse/MC-183402) Tutorial doesn't advance when breaking nether tree
-   [MC-183554](https://bugs.mojang.com/browse/MC-183554) Ruined portals generated in lava lakes unnaturally displace lava, resulting in weird borders
-   [MC-183588](https://bugs.mojang.com/browse/MC-183588) Stray emerald block in structure bastion/treasure/big\_air\_full
-   [MC-183594](https://bugs.mojang.com/browse/MC-183594) The 5th large inner and outer hoglin stables do not generate in bastions
-   [MC-183599](https://bugs.mojang.com/browse/MC-183599) Some hoglin stable stair structures do not generate
-   [MC-183762](https://bugs.mojang.com/browse/MC-183762) Description of F3+N in help menu still describes the old functionality
-   [MC-183809](https://bugs.mojang.com/browse/MC-183809) Large Oak Trees replace blocks
-   [MC-183880](https://bugs.mojang.com/browse/MC-183880) Distracting baby piglins with gold grants the 'Oh Shiny' advancement
-   [MC-183915](https://bugs.mojang.com/browse/MC-183915) Wall Heads & Skulls are slightly offset from block selection outline
-   [MC-183931](https://bugs.mojang.com/browse/MC-183931) nether fortress mobs no longer spawn in extended bounding box
-   [MC-183933](https://bugs.mojang.com/browse/MC-183933) show\_text tellraw hover events don't work for components that need resolving (nbt, score, selector)
-   [MC-184093](https://bugs.mojang.com/browse/MC-184093) Using an end gateway teleports the player half a block too high
-   [MC-184250](https://bugs.mojang.com/browse/MC-184250) Font of the enchantments displayed in the enchanting table is italic
-   [MC-184608](https://bugs.mojang.com/browse/MC-184608) "Unknown biome, defaulting to plains" error upon launching the game
-   [MC-184612](https://bugs.mojang.com/browse/MC-184612) Import Settings "s" isn't capitalized
-   [MC-184613](https://bugs.mojang.com/browse/MC-184613) End Stone generates in Floating Islands setting
-   [MC-184644](https://bugs.mojang.com/browse/MC-184644) Cave buffet generator generates with netherrack, even if using a non-nether biome
-   [MC-184653](https://bugs.mojang.com/browse/MC-184653) \[Crash\] "java.lang.IllegalArgumentException: value already present:" Game crashes when worldgen dimension type presets are not unique
-   [MC-184675](https://bugs.mojang.com/browse/MC-184675) Superflat void preset doesn't have a starting platform again
-   [MC-184699](https://bugs.mojang.com/browse/MC-184699) '/spreadplayers under' does not prevent invalid values
-   [MC-184723](https://bugs.mojang.com/browse/MC-184723) The "i" in "World Type: Floating islands" is not capitalized
-   [MC-184757](https://bugs.mojang.com/browse/MC-184757) \[Crash\] "java.lang.NullPointerException: Ticking memory connection" on loading a dimension with debug chunk generator
-   [MC-184887](https://bugs.mojang.com/browse/MC-184887) You can spawn in the bedrock ceiling of a Caves world
-   [MC-184900](https://bugs.mojang.com/browse/MC-184900) Newline in tellraw adds a space at the beginning of the new line
-   [MC-184984](https://bugs.mojang.com/browse/MC-184984) Game crashes after generating multiple worlds in succession
-   [MC-185004](https://bugs.mojang.com/browse/MC-185004) \[Crash\] java.lang.NullPointerException Crash on entering end/nether portal when dimension is removed in worldgen settings
-   [MC-185164](https://bugs.mojang.com/browse/MC-185164) Bottom half of icebergs always generate at y=62 regardless of sea\_level
-   [MC-185285](https://bugs.mojang.com/browse/MC-185285) Entering the End or the Nether after creating and reentering a debug world crashes the game
-   [MC-185299](https://bugs.mojang.com/browse/MC-185299) Villagers cannot be summoned with a specific type unless you also specify a profession
-   [MC-185363](https://bugs.mojang.com/browse/MC-185363) sync-chunk-writes often takes over a minute to close a world
-   [MC-185417](https://bugs.mojang.com/browse/MC-185417) Maps reset on upgrade
-   [MC-185616](https://bugs.mojang.com/browse/MC-185616) Turtle eggs can't hatch on red sand
-   [MC-185949](https://bugs.mojang.com/browse/MC-185949) Copy "C" in Click to Copy to Clipboard isn't capitalized
-   [MC-186078](https://bugs.mojang.com/browse/MC-186078) Transparent items render in front of transparent blocks on some graphics cards when graphics setting is set to fabulous
-   [MC-186084](https://bugs.mojang.com/browse/MC-186084) Piglin head and torso floats and detaches during celebration dance
-   [MC-186085](https://bugs.mojang.com/browse/MC-186085) Player is unable to interact with the world after dismounting a boat while it's moving
-   [MC-186091](https://bugs.mojang.com/browse/MC-186091) When you stop swimming, "diving underwater" sound occurs and vision flashes
-   [MC-186092](https://bugs.mojang.com/browse/MC-186092) The head of a piglin becomes offset after performing their celebration dance
-   [MC-186097](https://bugs.mojang.com/browse/MC-186097) Pigs are moving very slowly
-   [MC-186248](https://bugs.mojang.com/browse/MC-186248) "m" in Safe Mode button isn't capitalized
-   [MC-186263](https://bugs.mojang.com/browse/MC-186263) "b" & "l" in Create Backup & Load isn't capitalized
-   [MC-186337](https://bugs.mojang.com/browse/MC-186337) The lighting of the "Client" doesn't correspond to that of the "Server"
-   [MC-186353](https://bugs.mojang.com/browse/MC-186353) The "s" and "m" in "Edit sign message" are uncapitalized
-   [MC-186403](https://bugs.mojang.com/browse/MC-186403) Swimming up on the side of flowing water no longer prevents the player from drowning
-   [MC-186492](https://bugs.mojang.com/browse/MC-186492) Lily pad placement in creative mode causes item on hotbar to flicker/vanish
-   [MC-186905](https://bugs.mojang.com/browse/MC-186905) "Superflat Customization" screen resets every time you open it and does not show previously saved settings
-   [MC-187363](https://bugs.mojang.com/browse/MC-187363) Charged respawn anchors no longer light up blocks around them
-   [MC-187367](https://bugs.mojang.com/browse/MC-187367) Netherite recipes show up in crafting table despite requiring a smithing table to use
-   [MC-187371](https://bugs.mojang.com/browse/MC-187371) Game crashes when attempting to change cloud settings on some graphics cards
-   [MC-187392](https://bugs.mojang.com/browse/MC-187392) Items in waterlogged stairs don't float up high enough to be caught by a water stream above the stair
-   [MC-187394](https://bugs.mojang.com/browse/MC-187394) Dying Ender dragons are rendered completely white when using Fabulous graphics
-   [MC-187402](https://bugs.mojang.com/browse/MC-187402) Lighting in the End dimension is much darker when on a server
-   [MC-187405](https://bugs.mojang.com/browse/MC-187405) /seed is no longer available without cheats enabled
-   [MC-187411](https://bugs.mojang.com/browse/MC-187411) Particles and clouds not rendering properly behind stained glass and solid blocks
-   [MC-187437](https://bugs.mojang.com/browse/MC-187437) Held item is invisible in inventory menu
-   [MC-187449](https://bugs.mojang.com/browse/MC-187449) Zombie Pigmen/Zombified Piglins do not drop XP and rare drops anymore if killed by anything other than the player while in angered state
-   [MC-187466](https://bugs.mojang.com/browse/MC-187466) Mobs killed in creative mode don't drop experience
-   [MC-187468](https://bugs.mojang.com/browse/MC-187468) Enchantment glint does not render for certain things on "Fabulous" setting
-   [MC-187483](https://bugs.mojang.com/browse/MC-187483) The advancement "Two by Two" can be achieved by just breeding turtles
-   [MC-187504](https://bugs.mojang.com/browse/MC-187504) Mobs do not drop rare drop items when killed by a player in Creative Mode
-   [MC-187552](https://bugs.mojang.com/browse/MC-187552) Piglins and Hoglins shake in the nether on servers
-   [MC-187585](https://bugs.mojang.com/browse/MC-187585) Dolphins with NoAI:1b can drown
-   [MC-187592](https://bugs.mojang.com/browse/MC-187592) Piglins constantly picking up gold nuggets and dropping them
-   [MC-187611](https://bugs.mojang.com/browse/MC-187611) White squares when in first person with fabulous video settings and F1
-   [MC-187618](https://bugs.mojang.com/browse/MC-187618) Demo world not saving after saving and quitting then quiting out of minecraft
-   [MC-187673](https://bugs.mojang.com/browse/MC-187673) \[Crash\] "java.lang.IllegalStateException: Unregistered dimension type"
-   [MC-187676](https://bugs.mojang.com/browse/MC-187676) "d" in Reset to default isn't capitalized
-   [MC-187677](https://bugs.mojang.com/browse/MC-187677) "b" in Go back isn't capitalized
-   [MC-187679](https://bugs.mojang.com/browse/MC-187679) Bees stay angry far longer
-   [MC-187730](https://bugs.mojang.com/browse/MC-187730) Newly spawned Zombified Piglins do not pick up the aggro of older spawned aggravated Zombified Piglins
-   [MC-187739](https://bugs.mojang.com/browse/MC-187739) NeutralMob.playerDied(Player) does not return if forgiveDeadPlayers = false
-   [MC-187796](https://bugs.mojang.com/browse/MC-187796) Wolves only use their hostile appearance after being attacked
-   [MC-187811](https://bugs.mojang.com/browse/MC-187811) Ender dragon death animation suddenly flashes right after it has ended
-   [MC-187978](https://bugs.mojang.com/browse/MC-187978) /seed availiable to all players on multiplayer server
-   [MC-188070](https://bugs.mojang.com/browse/MC-188070) Glitched skin while swimming (left hand)
-   [MC-188088](https://bugs.mojang.com/browse/MC-188088) Overworld superflat preset no longer generates with terrain decorations
-   [MC-188216](https://bugs.mojang.com/browse/MC-188216) Superflat biome selection overrides block selection on "Create New World" screen
-   [MC-188393](https://bugs.mojang.com/browse/MC-188393) K in "4k" should be capitalized

---

# Minecraft 1.16 Pre-Release 2

We've now released 1.16 pre-release 2, fixing some crashes. Note that worlds opened in 1.16 pre-release 1 are corrupt and will not work in any way in 1.16 pre-release 2 (this includes using the re-create world button). Please restore an older backup or create a brand new world to play in this pre-release.

## Fixed bugs in 1.16 Pre-Release 2

-   [MC-187350](https://bugs.mojang.com/browse/MC-187350) Game randomly crashes / IllegalStateException: POI never registered
-   [MC-187352](https://bugs.mojang.com/browse/MC-187352) Loading a world created in 1.16-pre1 always ask for confirmation
-   [MC-187353](https://bugs.mojang.com/browse/MC-187353) Crash when loading some worlds: IllegalStateException: Lock is no longer valid
-   [MC-187358](https://bugs.mojang.com/browse/MC-187358) Worlds generated in 1.16-pre1 do not have their world generation settings saved correctly, causing chunk errors
-   [MC-187364](https://bugs.mojang.com/browse/MC-187364) Disabling and enabling dimension datapack disables nether and end
-   [MC-187408](https://bugs.mojang.com/browse/MC-187408) Game crashing with Nether portals - java.lang.NullPointerException: Ticking player

---

# Minecraft 1.16 Pre-Release 1

It's time for 1.16 pre-releases!

Going forward you should mostly see bugs being fixed. Additionally, pre-releases doesn't necessarily tend to our usual cadence of releasing on Wednesdays, so keep an eye out!

## New Features in 1.16 Pre-release 1

-   Added new "Fabulous" graphics option - uses per-pixel blending layers for some transparent elements

## Changes in 1.16 Pre-release 1

-   You can now milk Cows and Mooshrooms in creative mode
-   You can now get stew from Mooshrooms in creative mode
-   When you use an empty bucket on water in creative mode, you now get a bucket of water. If you have a bucket of water in your inventory already, no additional water buckets will be added when you use your empty bucket on water.
-   When any villager is struck by lightning, the witch it is converted to will no longer despawn
-   Added gamerule universalAnger (disabled by default), which makes angered neutral mobs attack any nearby player, not just the player that angered them. Works best if you disable forgiveDeadPlayers.
-   Added gamerule forgiveDeadPlayers (enabled by default), which makes angered neutral mobs stop being angry when the targeted player dies nearby.
-   Zombified piglins no longer attack innocent bystanders (unless you enable gamerule universalAnger)
-   Zombified piglins stop being angry if the targeted player dies nearby (unless you disable gamerule forgiveDeadPlayers)

## Technical Changes in 1.16 Pre-release 1

-   Smithing recipes can now be added or changed through data packs
-   Game will now detect critical datapack issues, like missing required tags and prevent world from being loaded

### Data Pack Selection

-   Data packs can now be selected before world is created
-   "Copy world" option will also copy data packs present in source world

### Pack Selection Screen

-   Packs can now be dropped directly on data and resource pack selection screens
-   Dropped files and directories will be copied to appropriate places

### Smithing Recipes

There's now a `smithing` recipe type. Recipes of this type are used in the smithing table to upgrade one item type into another type, maintaining tags.

-   `base` - Ingredient specifying an item to be upgraded.
-   `addition` - Ingredient specifying valid items to trigger the upgrade.
-   `result` - Item specifying the resulting type of the upgraded item.

## Fixed Bugs in 1.16 Pre-release 1

-   [MC-4520](https://bugs.mojang.com/browse/MC-4520) Aggressive neutral mobs become neutral when the world is reloaded
-   [MC-9856](https://bugs.mojang.com/browse/MC-9856) you cannot pick up buckets of water/lava in creative mode
-   [MC-36322](https://bugs.mojang.com/browse/MC-36322) Unable to milk cows in creative
-   [MC-64623](https://bugs.mojang.com/browse/MC-64623) Lightning bolts cannot be targeted by selectors
-   [MC-69032](https://bugs.mojang.com/browse/MC-69032) When a mob hits a zombified piglin, and that mob dies, the zombified piglins attack you
-   [MC-90969](https://bugs.mojang.com/browse/MC-90969) Cannot get mushroom stew from mooshrooms / milk from cows in creative mode
-   [MC-106968](https://bugs.mojang.com/browse/MC-106968) Snow golems aren't damaged by splash or lingering water bottles
-   [MC-127004](https://bugs.mojang.com/browse/MC-127004) Waterlogged blocks cause z-fighting when looking at them from a distance
-   [MC-138675](https://bugs.mojang.com/browse/MC-138675) Wither skulls inflict the Wither effect on players in Creative mode
-   [MC-138713](https://bugs.mojang.com/browse/MC-138713) "Two by Two" advancement does not require donkeys or mules
-   [MC-158906](https://bugs.mojang.com/browse/MC-158906) After sleeping in a bed, players aren't positioned in the center of a block
-   [MC-159500](https://bugs.mojang.com/browse/MC-159500) Hostile mobs attacking bees also cause the bees to attack players
-   [MC-161969](https://bugs.mojang.com/browse/MC-161969) Casting issue: Adding ender eyes to end portal frames at high distances causes particles to lose precision
-   [MC-163950](https://bugs.mojang.com/browse/MC-163950) Ice bordering water causes z-fighting issues from a distance
-   [MC-164692](https://bugs.mojang.com/browse/MC-164692) Entering a boat does not play the hand animation
-   [MC-165669](https://bugs.mojang.com/browse/MC-165669) Hand animation is playing when you're aiming at a block through the mob and use the spawn egg
-   [MC-165734](https://bugs.mojang.com/browse/MC-165734) Minecarts with furnace still display a hand animation with incompatible items when not on a rail
-   [MC-166188](https://bugs.mojang.com/browse/MC-166188) Bees still hitting player after death
-   [MC-166524](https://bugs.mojang.com/browse/MC-166524) Trying to dye a sheep with the same color as sheep displays hand animation
-   [MC-167042](https://bugs.mojang.com/browse/MC-167042) Casting issue: Campfire embers are generated at a point that loses precision at high coordinates
-   [MC-167044](https://bugs.mojang.com/browse/MC-167044) Casting issue: Enchanting table book does not open for the player at high distances in some cases
-   [MC-167046](https://bugs.mojang.com/browse/MC-167046) Casting issue: Lava ember particles and lava popping sounds lose precision on creation at high coordinates
-   [MC-167047](https://bugs.mojang.com/browse/MC-167047) Casting issue: TNT blocks ignited by other explosions lose precision at high coordinates
-   [MC-167091](https://bugs.mojang.com/browse/MC-167091) Casting issue: Water particles dripping from leaves lose precision at high coordinates
-   [MC-167195](https://bugs.mojang.com/browse/MC-167195) Bees anger towards players in survival when killed in one hit
-   [MC-167971](https://bugs.mojang.com/browse/MC-167971) Casting issue: Particles emitted by redstone repeaters lose precision at high coordinates
-   [MC-168675](https://bugs.mojang.com/browse/MC-168675) Settings that update after closing the video settings menu don't if you change the fullscreen setting
-   [MC-170872](https://bugs.mojang.com/browse/MC-170872) Casting issue: Nether biome particles suffer from precision loss
-   [MC-170944](https://bugs.mojang.com/browse/MC-170944) /locatebiome messages do not fit for all biome names
-   [MC-171035](https://bugs.mojang.com/browse/MC-171035) Casting issue: Particles from falling rain lose precision at high coordinates
-   [MC-171037](https://bugs.mojang.com/browse/MC-171037) Casting issue: smoke produced by lava during rain loses precision at high coordinates
-   [MC-171663](https://bugs.mojang.com/browse/MC-171663) Right-clicking on unemployed villagers sometimes cause hand animation to stop after a villager has a profession
-   [MC-171683](https://bugs.mojang.com/browse/MC-171683) Crimson and warped doors can't have transparent textures
-   [MC-172259](https://bugs.mojang.com/browse/MC-172259) Baby Hoglin/Zoglin have their head slightly above their neck, it seems that their head is partly floating
-   [MC-172531](https://bugs.mojang.com/browse/MC-172531) Small mobs get stuck in fence corners
-   [MC-172610](https://bugs.mojang.com/browse/MC-172610) When not aiming at a block through a ridable mob while using a spawn egg on it, the player starts riding the mob and a baby mob is spawned
-   [MC-174815](https://bugs.mojang.com/browse/MC-174815) Piglins don't automatically attack withers
-   [MC-175028](https://bugs.mojang.com/browse/MC-175028) Sometimes hoglins don't avoid warped fungus
-   [MC-175215](https://bugs.mojang.com/browse/MC-175215) Respawn anchors destroy blocks when detonated underwater
-   [MC-175409](https://bugs.mojang.com/browse/MC-175409) Soul speed "effect" stays when you levitate/fly off of soul sand or soul soil
-   [MC-175476](https://bugs.mojang.com/browse/MC-175476) Respawn anchor doesn't cull block faces
-   [MC-175911](https://bugs.mojang.com/browse/MC-175911) Soul Speed lasts after leaving soul blocks
-   [MC-176041](https://bugs.mojang.com/browse/MC-176041) Using a spawn egg on a strider while aiming at lava spawns both a baby and an adult strider
-   [MC-176188](https://bugs.mojang.com/browse/MC-176188) Striders are not damaged by splash or lingering water bottles
-   [MC-176225](https://bugs.mojang.com/browse/MC-176225) Accelerating a baby strider's growth does not display hand animation
-   [MC-176470](https://bugs.mojang.com/browse/MC-176470) Respawning in the nether does not de-aggro zombified piglins
-   [MC-176637](https://bugs.mojang.com/browse/MC-176637) Closing game during Mojang load screen causes NullPointerException
-   [MC-176640](https://bugs.mojang.com/browse/MC-176640) You can set your spawn point inside dangerous blocks
-   [MC-178567](https://bugs.mojang.com/browse/MC-178567) Shearing sheep does not display hand animation again
-   [MC-178618](https://bugs.mojang.com/browse/MC-178618) Feeding a flower to a brown mooshroom does not perform hand animation
-   [MC-178961](https://bugs.mojang.com/browse/MC-178961) /loot ... fish ... command no longer has any functionality
-   [MC-179561](https://bugs.mojang.com/browse/MC-179561) Retreating baby hoglins sometimes won't pathfind to the opposite direction of the player
-   [MC-180111](https://bugs.mojang.com/browse/MC-180111) Hoglins angered for reasons other than being attacked by the player ignore placed repellents.
-   [MC-180922](https://bugs.mojang.com/browse/MC-180922) Right clicking a mob with a spawn egg to spawn the baby variant doesn’t play the hand swing animation when not aiming at a block through the mob
-   [MC-182308](https://bugs.mojang.com/browse/MC-182308) Chicken jockeys cannot despawn
-   [MC-182748](https://bugs.mojang.com/browse/MC-182748) Casting issue: Redstone dust particles are generated at the wrong positions at high coordinates
-   [MC-182883](https://bugs.mojang.com/browse/MC-182883) Parity issue: Baby hoglins don't follow adult hoglins
-   [MC-183766](https://bugs.mojang.com/browse/MC-183766) Who Is Cutting Onions Improperly Capitalized
-   [MC-183767](https://bugs.mojang.com/browse/MC-183767) Incorrect filename for "Serious Dedication" advancement in vanilla data pack
-   [MC-183792](https://bugs.mojang.com/browse/MC-183792) piglin\_loved item tag has unnecessary items
-   [MC-183821](https://bugs.mojang.com/browse/MC-183821) "Game Mode Switcher" bottom hint text isn't centered
-   [MC-183825](https://bugs.mojang.com/browse/MC-183825) New nether challenges don't grant experience points
-   [MC-183893](https://bugs.mojang.com/browse/MC-183893) Gold nugget isn't under #piglin\_loved
-   [MC-184679](https://bugs.mojang.com/browse/MC-184679) Using custom world generation, temperature is written wrong
-   [MC-184947](https://bugs.mojang.com/browse/MC-184947) Carriage return symbol can be seen when importing or exporting world generation settings to or from certain worlds
-   [MC-185095](https://bugs.mojang.com/browse/MC-185095) "thrown\_item\_picked\_up\_by\_entity" advancement trigger does not work for players
-   [MC-185377](https://bugs.mojang.com/browse/MC-185377) Bone mealing kelp creates a large field of particles, rather than only within the kelp's block space
-   [MC-185480](https://bugs.mojang.com/browse/MC-185480) Casting issue: Smoke particles emitted by campfires during rain form at the wrong positions at high coordinates
-   [MC-186062](https://bugs.mojang.com/browse/MC-186062) Warning "Could not find uniform named InSize in the specified shader program." when loading resources
-   [MC-186064](https://bugs.mojang.com/browse/MC-186064) Clouds render in front of everything for some users
-   [MC-186067](https://bugs.mojang.com/browse/MC-186067) Some structures' loot chests do not contain any items
-   [MC-186071](https://bugs.mojang.com/browse/MC-186071) Clouds are visible and don't render correctly when they are turned off
-   [MC-186074](https://bugs.mojang.com/browse/MC-186074) Particles render in the wrong order with transparent blocks when using certain graphics cards
-   [MC-186075](https://bugs.mojang.com/browse/MC-186075) GPU usage in latest snapshot significantly higher than before, causing lag or crash for some users
-   [MC-186080](https://bugs.mojang.com/browse/MC-186080) Entities, block entities, and items are rendered black on some graphics cards
-   [MC-186088](https://bugs.mojang.com/browse/MC-186088) Block hitboxes once again cause semi-transparent blocks not to render behind them
-   [MC-186089](https://bugs.mojang.com/browse/MC-186089) Functions load before entity tags do, causing loading errors.
-   [MC-186101](https://bugs.mojang.com/browse/MC-186101) Some commands in functions cause a NullPointerException
-   [MC-186108](https://bugs.mojang.com/browse/MC-186108) Enchantment glint does not render on dropped/thrown items
-   [MC-186109](https://bugs.mojang.com/browse/MC-186109) You can use multiplayer commands on a singleplayer world
-   [MC-186124](https://bugs.mojang.com/browse/MC-186124) Lightning bolt doesn't render
-   [MC-186204](https://bugs.mojang.com/browse/MC-186204) Items render in front of other entities, transparent blocks, and blocks with special renderers
-   [MC-186253](https://bugs.mojang.com/browse/MC-186253) Held translucent blocks make the water, clouds, particles, and placed translucent blocks behind them invisible in third person mode.
-   [MC-186274](https://bugs.mojang.com/browse/MC-186274) Purple light from Ender Dragon's Death doesn't appear
-   [MC-186284](https://bugs.mojang.com/browse/MC-186284) Player's point of view is upside down in 20w22a
-   [MC-186314](https://bugs.mojang.com/browse/MC-186314) Villagers become fixated on potential job site
-   [MC-186335](https://bugs.mojang.com/browse/MC-186335) Bees age calculation inside hive/nest is broken
-   [MC-186455](https://bugs.mojang.com/browse/MC-186455) Persistent villagers without experience can despawn after converting to a witch
-   [MC-186464](https://bugs.mojang.com/browse/MC-186464) Enabled data packs still show up in the "/datapack enable" list
-   [MC-186478](https://bugs.mojang.com/browse/MC-186478) Tag minecraft:tick doesn't work when joining a world
-   [MC-186480](https://bugs.mojang.com/browse/MC-186480) Inner parts of slime blocks and honey blocks disappear again while the block is moved by a piston
-   [MC-186600](https://bugs.mojang.com/browse/MC-186600) Nether gold ore is gray on a map
-   [MC-186696](https://bugs.mojang.com/browse/MC-186696) Totem of Undying causes red or blue tint in the screen when in F5 mode

---

# Minecraft: Java Edition 1.15.2 Pre-release 2

## CHANGES IN 1.15.2 PRE-RELEASE 2

-   Fixed bugs

## FIXED BUGS IN 1.15.2 PRE-RELEASE 2

-   [MC-169825](https://bugs.mojang.com/browse/MC-169825) - “Multiplayer (3rd party)” shows in window title when disconnecting from a singleplayer world
-   [MC-169839](https://bugs.mojang.com/browse/MC-169839) - Certain potion effects that override lower level effects don’t get removed after their duration ends
-   [MC-169840](https://bugs.mojang.com/browse/MC-169840) - Drinking a level 1 potion under a level 2 beacon and leaving results in the effect being lost
-   [MC-169848](https://bugs.mojang.com/browse/MC-169848) - Crashes when trying to create Beehive From planted tree
-   [MC-169886](https://bugs.mojang.com/browse/MC-169886) - No older world protection in 1.15.2 PR 1

---

# Minecraft: Java Edition 1.15.2 Pre-release 1

## CHANGES IN 1.15.2 PRE-RELEASE 1

-   Bees no longer anger when a nearby nest/hive is destroyed using a silk touch tool
-   Added `doPatrolSpawning` and `doTraderSpawning` game rules that control spawning of patrols and wandering traders, respectively
-   Added `gui_light` option in block models to allow controlling light when rendering model as item in GUI
-   Controls light when rendering block model inside slot. If set to `side`, model will be rendered like block. If set to `front`, model is shaded like flat item
-   Any birch or oak sapling grown near a flower within 2 blocks distance on the same y-level has a 5% chance of having a bee nest
-   Bee Nests now have a 2% chance of spawning in Flower Forests
-   Bee Nests now have a 0.2% chance of spawning in Forest, Wooded Hills, Birch Forest, Tall Birch Forest, Birch Forest Hills, and Tall Birch Hills biomes
-   Fixed bugs

## FIXED BUGS IN 1.15.2 PRE-RELEASE 1

-   [MC-862](https://bugs.mojang.com/browse/MC-862) - Spawn protection doesn’t work for item frames, paintings and armor stands
-   [MC-1541](https://bugs.mojang.com/browse/MC-1541) - Beacon effect removes potion effect of the same type
-   [MC-51053](https://bugs.mojang.com/browse/MC-51053) - Furnace minecarts lose power after navigating corners
-   [MC-150575](https://bugs.mojang.com/browse/MC-150575) - Concrete powder does not turn into concrete when letting it fall beside water
-   [MC-153987](https://bugs.mojang.com/browse/MC-153987) - Falling down ladders while wearing elytra
-   [MC-165695](https://bugs.mojang.com/browse/MC-165695) - Hoppers harvesting honeycomb from bee hives and bee nests only pick up one honeycomb
-   [MC-166312](https://bugs.mojang.com/browse/MC-166312) - Loom UI pattern icons are too dark
-   [MC-166319](https://bugs.mojang.com/browse/MC-166319) - B on “Open in browser” is lowercase in link confirmation GUI
-   [MC-166324](https://bugs.mojang.com/browse/MC-166324) - “Raw input” button has lowercase “i”
-   [MC-166722](https://bugs.mojang.com/browse/MC-166722) - Some custom item models appear dark in the inventory
-   [MC-167018](https://bugs.mojang.com/browse/MC-167018) - Misplaced pixel in critical hit particle texture
-   [MC-167079](https://bugs.mojang.com/browse/MC-167079) - Horse Armor texture is off
-   [MC-167201](https://bugs.mojang.com/browse/MC-167201) - Invisible glowing entities do not respect their team color
-   [MC-167219](https://bugs.mojang.com/browse/MC-167219) - Reloading a resource pack enough times will cause intense lag
-   [MC-167220](https://bugs.mojang.com/browse/MC-167220) - Items on marker armor stands no longer glow
-   [MC-167235](https://bugs.mojang.com/browse/MC-167235) - Distance from where you can enter a bed is off center
-   [MC-167344](https://bugs.mojang.com/browse/MC-167344) - com.mojang.blaze3d.platform.ClipboardManager leaks direct buffers
-   [MC-167416](https://bugs.mojang.com/browse/MC-167416) - Distance from where a monster will stop you from sleeping is off center
-   [MC-167444](https://bugs.mojang.com/browse/MC-167444) - iron\_golem\_crackiness\_\* textures show up on invisible iron golems that are damaged
-   [MC-167709](https://bugs.mojang.com/browse/MC-167709) - Bees that ride a boat, minecart or other entities when entering their hive or nest can’t leave the hive or nest ever again
-   [MC-168091](https://bugs.mojang.com/browse/MC-168091) - Concrete powder doesn’t convert into concrete when dropped into deep water
-   [MC-168230](https://bugs.mojang.com/browse/MC-168230) - End crystal beam is dark / desaturated
-   [MC-168467](https://bugs.mojang.com/browse/MC-168467) - Bees do not remember how many crops they’ve pollinated
-   [MC-169157](https://bugs.mojang.com/browse/MC-169157) - Breaking a hive with obstructed front makes bees vanish

---

