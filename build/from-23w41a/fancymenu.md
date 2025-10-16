# Minecraft Snapshot 23w41a

For this week's Snapshot, we've made improvements to the Decorated Pots!

Additionally, Realms is now available in Snapshots moving forward! Any player who has an active Realms subscription is eligible to create a free Snapshot Realm. This Snapshot Realm will be separate from your regular Realm to prevent any issues from impacting your regular Realm. For more information on how Snapshot Realms work, please see Realms in [Minecraft: Java Edition Snapshot FAQ](https://help.minecraft.net/hc/en-us/articles/20143730191245).

## New Features

### Snapshot Realms

-   Realms is now available in Snapshots, Pre-Releases, and Release Candidates
-   The version of the last played world on a Realm is displayed in the Realms list
-   Experiments are available for newly created worlds

## Changes

-   Decorated Pots can now store items, and can be smashed by projectiles

### Decorated Pots

-   Decorated Pots now store up to a single stack of items
-   Hoppers, Hopper Minecarts and Droppers can now insert and/or extract items from Decorated Pots
-   Comparators can now read the number of items in Decorated Pots
-   Players can interact with Decorated Pots to insert items into them
-   Decorated Pots have no GUI, and need to be broken to retrieve or discover their content by players
-   Player interactions with Decorated Pots cause the Decorated Pot to wobble and trigger the vibration frequency of 11
-   Decorated Pots can be smashed by projectiles which cause them to shatter and drop their content
-   Decorated Pots now stack up to 64

We want to hear your feedback on these improvements to Decorated Pots - let us know what you think in [our dedicated feedback site post](https://feedback.minecraft.net/hc/en-us/community/posts/20289952762637-Let-s-talk-about-Decorated-Pot-improvements-)!

## Technical Changes

-   The Data Pack version is now 20
-   The name of non-living entities will now be shown if looked at and a CustomName is set, or always displayed if CustomNameVisible is set, similar to living entities

## Data Pack Version 20

-   Changed `function` command results
-   Adjusted check for gamerule `maxCommandChainLength`
-   Added new gamerule `maxCommandForkCount`
-   Reintroduced form of the `execute` command: `execute if function`
-   Reintroduced form of the `return` command: `return run`
-   Decorated Pots with `cracked` state set to true will always shatter when broken
-   Added new `dust_plume` particle type

### Commands

**Functions**

-   `function` command has been changed to better accomodate new `return` command
-   Functions no longer have any result unless they use `return` or there was error during lookup or instantiation
    -   That means `function` command will no longer return (or even display) number of commands run during execution
    -   Error conditions:
        -   Calling non-existent function
        -   Calling empty function tag
        -   Macro instantiation failure
-   "Result" in this context means values that would be stored with `execute store`
-   The previous behavior where every command in function would perform store if a function was called with `execute store ... run function` is removed
    -   That means that a single call to `function` will store at most once (zero times if `return` was not called)
    -   For function tags with multiple entries, function results will be accumulated, but partial results will be stored at the end of every function

**Limits**

Existing limits for functions have been refined to accomodate new execution rules and prevent wider range of exploits:

-   Limits apply even if run from command line (so it will now always behave as if they were placed in a function)
    -   For example, all functions called by `execute as @e run function` will count towards same limit
    -   Executions from command blocks still count as separate ones
-   Limit `maxCommandChainLength` for functions will now count "operations" like:
    -   execution of command for a single context
    -   execution of a stage in `execute` (no matter how many contexts were modified)
    -   invocation of function
-   New limit with game rule `maxCommandForkCount` now restricts total amount of context that can be created by single state of functions like `execute`
    -   Example: if there are 5 entities in world, `execute as @e` creates 5 contexts, while `execute as @e at @e` creates 5;;*;;5 = 25 contexts

**`execute if function`**

An `execute` sub-command that runs a function or function tag and matches the return value(s). This is a reintroduction of functionality removed in previous version. If a tag is given, all functions run regardless of the results of prior functions.

Syntax: `execute if|unless function <function> <continuation>`

Parameters:

-   `function`: The function or tag to run

**Matching**

The matching of the result value of the function(s) that run:

-   At least one of the functions must succeed for the match to succeed
-   A succeessful call is defined as a function that:
    -   Uses the `return` command to return a value
    -   The return value is not 0
-   If no functions exited with `return`, neither `if` or `unless` will run

**`return run`**

A form of the `return` command is now available, `return run`. This is a reintroduction of functionality removed in previous version.

Syntax: `return run <command>`

This takes the `result` value from running the specified `command` and returns that as the return value of the function.

-   If command did not return any value (like, for example, call to a `function` without `return`), return will not execute and function will continue execution
-   If the given command fails, the return value is `0`
-   In all other aspects, it works like `return` with a specified return value
-   In case of fork (for example `return run execute as @e run some_command`) the first execution of the command will return
    -   If there are no executions (for example in `return run execute if @e[something_impossible] run some_command`) function will not return and will continue execution

## Fixed bugs in Snapshot 23w41a

-   [MC-16937](https://bugs.mojang.com/browse/MC-16937) Shooting an arrow into the nether portal can hurt anybody when PvP is disabled
-   [MC-50319](https://bugs.mojang.com/browse/MC-50319) Player owned projectiles lose their player ownership when exiting portals
-   [MC-81656](https://bugs.mojang.com/browse/MC-81656) Field determining whether or not a wither skull is blue is not saved to and read from NBT
-   [MC-118403](https://bugs.mojang.com/browse/MC-118403) Vexes summoned by evoker do not have evoker team applied
-   [MC-143266](https://bugs.mojang.com/browse/MC-143266) Nested function calls reevaluate maxCommandChainLength before queueing commands
-   [MC-143269](https://bugs.mojang.com/browse/MC-143269) Nested intermediate functions are skipped when maxCommandChainLength commands are already queued
-   [MC-189227](https://bugs.mojang.com/browse/MC-189227) First time tutorial uses old textures
-   [MC-198113](https://bugs.mojang.com/browse/MC-198113) Incomplete commands do not prevent functions from loading
-   [MC-233276](https://bugs.mojang.com/browse/MC-233276) You can feed adult donkeys, horses, llamas or mules with maximum Temper value, and hand animation is not played
-   [MC-234323](https://bugs.mojang.com/browse/MC-234323) Performance issue with text parsing
-   [MC-236501](https://bugs.mojang.com/browse/MC-236501) Renamed minecarts and boats don't show their name tag in the world
-   [MC-249408](https://bugs.mojang.com/browse/MC-249408) Boats with Chests lose their name when placed
-   [MC-257786](https://bugs.mojang.com/browse/MC-257786) The game takes a long time to process players leaving realms groups or accepting or declining realms invitations
-   [MC-260576](https://bugs.mojang.com/browse/MC-260576) Incomplete 'execute summon' command still runs
-   [MC-261682](https://bugs.mojang.com/browse/MC-261682) Brushing can continue when block goes out of range
-   [MC-262105](https://bugs.mojang.com/browse/MC-262105) Entities can block brushing actions when players look very close to their hitboxes
-   [MC-263575](https://bugs.mojang.com/browse/MC-263575) When an item is extracted from suspicious sand/gravel, gravity does not work on this block
-   [MC-263660](https://bugs.mojang.com/browse/MC-263660) "Sign wobbles" subtitle is the same for signs and hanging signs, causing translation issues
-   [MC-264595](https://bugs.mojang.com/browse/MC-264595) Return command cannot run function when inside another function
-   [MC-264699](https://bugs.mojang.com/browse/MC-264699) Functions return the output of commands only if the command doesn't start with return run
-   [MC-264710](https://bugs.mojang.com/browse/MC-264710) "/execute if function" always fails and "/execute unless function" always succeeds if run from a function
-   [MC-264880](https://bugs.mojang.com/browse/MC-264880) GUI slider uses new texture with programmer art
-   [MC-265516](https://bugs.mojang.com/browse/MC-265516) The "Cancel" button within some realms menus can be deselected using keyboard navigation despite it being the only element within the said menu
-   [MC-265647](https://bugs.mojang.com/browse/MC-265647) Shield arm position is incorrect while in a boat
-   [MC-265656](https://bugs.mojang.com/browse/MC-265656) Pumpkins can no longer be sheared

---

# Minecraft Snapshot 23w40a

We are now releasing Snapshot 23w40a, the first snapshot for 1.20.3! This snapshot contains improvements for shields, changes to chat component serialization and bug fixes.

## Changes

-   When a player is blocking with a shield, the arm with the shield now follows the direction the player is looking at, when viewed from third person perspective

## Technical Changes

-   The Data Pack version is now 19
-   A few minor changes to chat component serialization

### Chat components

**Serialization**

-   Plain-text chat components (text, no sibilings, no stylings) are now always serialized as string instead of `{"text': "blah"}`
-   Chat components now serialize to NBT when sent over network
-   Chat components now have an optional `type` value (allowed values: `text`, `translatable`, `score`, `nbt`, `keybind`) to speed up parsing and improve error checking
-   `id` field in `show_entity` `hoverEvent` style now also accepts UUID as an array of 4 ints
-   Numeric and boolean arguments for `translate` component are no longer converted to string
-   The following JSON component representations are no longer accepted:
    -   `null`
    -   `[]`
-   Errors in following style fields are no longer silently ignored:
    -   `color`
    -   `clickEvent`
    -   `hoverEvent`
    -   `hoverEvent[action=show_entity].contents.name`
    -   `hoverEvent[action=show_item].contents.tag`

## Data Pack Version 19

### Tags

-   Added `can_breathe_under_water` entity type tag which disables drowning
-   Added `can_break_armor_stands` damage type tag for damage types that can incrementally knock down armor stands

## Fixed bugs in 23w40a

-   [MC-47607](https://bugs.mojang.com/browse/MC-47607) Barrier particles aren't shown if particles are set to minimal
-   [MC-50647](https://bugs.mojang.com/browse/MC-50647) Slime mob spawners spawn slimes only in slime chunks
-   [MC-78314](https://bugs.mojang.com/browse/MC-78314) (Marker) Armor stands create bubbles in water
-   [MC-109101](https://bugs.mojang.com/browse/MC-109101) Shields do not block damage while the player faces straight up
-   [MC-114761](https://bugs.mojang.com/browse/MC-114761) Area effect cloud applies effect to dying mob
-   [MC-172398](https://bugs.mojang.com/browse/MC-172398) Fire texture renders according to the player's rotation in the player inventory
-   [MC-221558](https://bugs.mojang.com/browse/MC-221558) Light particles aren't shown if particles are set to minimal
-   [MC-227255](https://bugs.mojang.com/browse/MC-227255) Beehives and bee nests do not rotate/mirror correctly in structure blocks
-   [MC-236946](https://bugs.mojang.com/browse/MC-236946) Shield attack vector is normalized incorrectly
-   [MC-253819](https://bugs.mojang.com/browse/MC-253819) Bells don't rotate correctly when loaded by structure/jigsaw blocks
-   [MC-254850](https://bugs.mojang.com/browse/MC-254850) An operator can kick a host of a LAN world
-   [MC-255173](https://bugs.mojang.com/browse/MC-255173) Nether portal teleportation is inaccurate at large coordinate values
-   [MC-261303](https://bugs.mojang.com/browse/MC-261303) Decorated pots have an unused "cracked" block state
-   [MC-263123](https://bugs.mojang.com/browse/MC-263123) Mending incorrectly calculates overflow after full repair
-   [MC-264748](https://bugs.mojang.com/browse/MC-264748) GLX.;;_;;initGlfw Treats Pointer as a String
-   [MC-265353](https://bugs.mojang.com/browse/MC-265353) Clocks and Compasses in Item Display Entities don't show correct time/direction
-   [MC-265462](https://bugs.mojang.com/browse/MC-265462) Sending resource pack during play phase shows loading terrain screen for a long time
-   [MC-265519](https://bugs.mojang.com/browse/MC-265519) Game minimizes when certain areas of the screen are clicked on Mac in fullscreen mode

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

**Cartographer**

Before now, Cartographers only sold maps to the Ocean Monument and Woodland Mansion. In this experiment Cartographers can sell seven new maps as well. These new maps each point to a different village or structure and can be used to find seven different biomes. This will help players who want to quickly find a specific location without waiting until they come across it by chance.

Cartographers from different biomes will sell a different selection of maps. Starting from one village, it will be possible to find every other village type by following maps from village to village.

Cartographers now sell 7 new maps: Desert Village Map, Jungle Explorer Map, Plains Village Map, Savanna Village Map, Snow Village Map, Swamp Explorer Map, and Taiga Village Map.

**Armorer**

The Armorer's trades have been updated with many changes.

The biggest change is that buying diamond armor now requires paying a small amount of Diamonds as well as Emeralds. This is meant to make the Armorer's diamond armor trades less useful at the start of the game when players don't have any Diamonds, while still giving a powerful advantage to advanced players who have spent some time collecting Diamonds.

Early-game players will find Armorers useful as a great source of iron armor, Shields and Emeralds.

Other changes include:

-   Most master-level Armorers buy Iron Blocks (and pay very well for them)
-   Chainmail armor is exclusively sold by the secret Jungle and Swamp Armorers
-   The Savanna Armorer sells cursed diamond armor at reduced prices
-   The Taiga Armorer can swap one piece of diamond armor for another

**Structure Loot**

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

# Minecraft Snapshot 23w35a

We are releasing a new snapshot that contains updates to support libraries, and a whole bundle of bug fixes!

## Technical Changes

-   The `LWJGL` library has been upgraded to version 3.3.2
-   The default Java version shipped with the game has been upgraded to Microsoft OpenJDK 17.0.8

## Fixed bugs in 23w35a

-   [MC-229121](https://bugs.mojang.com/browse/MC-229121) JVM crash in jdk.internal.loader.NativeLibraries.load
-   [MC-242385](https://bugs.mojang.com/browse/MC-242385) Inconsistency on the buffer size calculation in the chunk packet data
-   [MC-256549](https://bugs.mojang.com/browse/MC-256549) Baby camels that aren't moving face in the direction of their adults when pathfinding to players that are tempting them
-   [MC-256737](https://bugs.mojang.com/browse/MC-256737) Sniffers, frogs, goats, and camels prioritize pathfinding to their lover when fed over panicking when being damaged
-   [MC-259475](https://bugs.mojang.com/browse/MC-259475) The rotation of controlling passengers on sitting camels is sometimes restricted while adjusting your rotation slowly
-   [MC-259860](https://bugs.mojang.com/browse/MC-259860) Sitting camels that have passengers continuously look up and down for other players
-   [MC-261951](https://bugs.mojang.com/browse/MC-261951) Dragon/piglin head does not move when placed on a jukebox that is playing a record
-   [MC-264092](https://bugs.mojang.com/browse/MC-264092) Functions execute commands out of order when containing /say
-   [MC-264558](https://bugs.mojang.com/browse/MC-264558) The word "reconfiguring" is spelled as "reconfiging" within the "connect.reconfiging" translation key
-   [MC-264559](https://bugs.mojang.com/browse/MC-264559) Grammar error in "Added pack(s) contain symbolic links"
-   [MC-264561](https://bugs.mojang.com/browse/MC-264561) Some new strings introduced in 23w31a are missing articles
-   [MC-264566](https://bugs.mojang.com/browse/MC-264566) Force loaded chunks reset when changing versions
-   [MC-264619](https://bugs.mojang.com/browse/MC-264619) Strings for returning to menus and loading lists are inconsistently spelled and capitalized
-   [MC-264686](https://bugs.mojang.com/browse/MC-264686) Z-fighting occurs on the backs of bamboo chest rafts
-   [MC-264698](https://bugs.mojang.com/browse/MC-264698) The absorption effect is lost when reloading the world
-   [MC-264750](https://bugs.mojang.com/browse/MC-264750) Effects are lost when updating to 23w32a
-   [MC-264897](https://bugs.mojang.com/browse/MC-264897) Shift-clicking to unequip armor bypasses vibrations in survival
-   [MC-264899](https://bugs.mojang.com/browse/MC-264899) Narrator is not capitalized in the Narrator Hotkey tooltip
-   [MC-264915](https://bugs.mojang.com/browse/MC-264915) Some mobs can still attack you through blocks
-   [MC-264917](https://bugs.mojang.com/browse/MC-264917) Entry list gradients render below content
-   [MC-264920](https://bugs.mojang.com/browse/MC-264920) Some buttons within the "Report Player" menu are improperly capitalized
-   [MC-264947](https://bugs.mojang.com/browse/MC-264947) Torches generated on end fountain don't emit light

---

# Minecraft Snapshot 23w33a

We are making some important updates to our Player Reporting Tool in this Snapshot to better protect the online safety of our players.

Playing Minecraft should be an inclusive and safe experience for everyone, which is why alongside in-game chat messages, you will now be able to report player skins and usernames that violate our Community Standards in Java Edition.

Just like with chat reports, nothing is automated. Any reported skin or username will be reviewed manually by a team of trained Minecraft moderators, who will use the submitted evidence to decide whether the skin and/or username is in breach of our Community Standards. Skins that are in violation of these standards will be removed from Minecraft and will no longer be accessible for use by any player. Usernames that are in violation of these standards will need to be changed before that player can play online via a shared server or Realm; though single player mode will still be accessible. To find out more about this and other safety policies, including more detail on the suspension procedure, appeals process, and how we handle malicious or repeat reporting, please visit our dedicated FAQ page.

## New Features

### Player Skin & Name Reporting

-   Player Skins and Names can now be reported in the Social Interactions Screen
-   If a skin or name is reported, and found to be violating the [Community Standards](https://www.minecraft.net/community-standards), our team of human moderators can action in a few ways:
    -   Ban the skin from being used by any player
    -   Ban the name from being used by any player
    -   Suspend the player from online play in the case of repeated offences
-   When a skin is banned, players with that skin:
    -   Will have their skin removed
    -   Will be notified when they launch the game
    -   Will be automatically assigned one of the default skins
    -   Can still play multiplayer and singleplayer
    -   Can select a new custom skin at any time
-   When a player's name is banned, that player:
    -   Will need to choose a new name
    -   Will be notified when they launch the game
    -   Will not be able to play online until they change their name
    -   Can still play singleplayer
-   A skin or name that has been banned cannot be used by any player in the future

## Changes

-   Sponges and Wet Sponges now have their own custom sounds
-   The calculations to determine whether a mob can attack a player or other mobs have been changed
-   Added the "Narrator Hotkey" accessibility option
    -   Allows the narrator to be toggled on and off with `Ctrl+B`
-   Added "I want to report them" Player Reporting category
-   A change has been reverted where armor trim patterns would be masked by the underlying armor texture

### Mob attack reach changes

The calculations to determine whether a mob can attack a player or other mobs have been changed. Previously a mob's horizontal width was used to determine their attack reach and their height had no effect. The area where a mob can attack is now their bounding box extended in horizontal directions.

Here are some situations where the new rules will affect the reach of mobs:

-   If a mob is entirely below you, or entirely above you, it will not be able to reach you
-   While riding on a medium-sized mob, like a Horse, you will be protected from small mobs, like Baby Zombies
-   While riding on a tall mob, like a Camel, you will be protected from standard-size mobs, like Zombies
-   Also, Ravagers won't be able to attack you through a few block thick walls anymore
-   However, to escape from an Enderman, you need to be at least 3 blocks above the ground, not 1.5 as before
-   Mobs will be able to attack you with the bottom of their hitbox, assuming your head is in range
-   Builds that trap hostile mobs might need to be adjusted to be safe

This change does not affect the reach of players, and mobs still need to see their target to attack it. We believe this new system will be more intuitive and will result in a more consistent behavior, and we welcome all feedback on this change.

## Technical Changes

-   The charts on the debug screen can now be toggled with F3+1 (pie chart), F3+2 (FPS and TPS) and F3+3 (bandwidth and ping) instead of holding Shift, Alt or Ctrl while opening the screen

### Data Pack Changes

-   Added `decal` field to armor trim patterns (default: `false`)
    -   If `true`, the pattern texture will be masked based on the underlying armor

## Fixed bugs in 23w33a

-   [MC-2310](https://bugs.mojang.com/browse/MC-2310) Wrong attack radius calculation damages/kills entities through blocks and corners
-   [MC-112133](https://bugs.mojang.com/browse/MC-112133) Eating chorus fruit does not reset fall distance
-   [MC-118616](https://bugs.mojang.com/browse/MC-118616) The sounds of magma cubes and slimes aren't controlled by the "Hostile Creatures" sound slider
-   [MC-122645](https://bugs.mojang.com/browse/MC-122645) Narrator hotkey cannot be customized or disabled
-   [MC-125046](https://bugs.mojang.com/browse/MC-125046) "RepairCost" NBT tag is created on any renamed item using anvils which can cause items to not stack properly
-   [MC-181109](https://bugs.mojang.com/browse/MC-181109) Grindstone adds RepairCost: 0
-   [MC-182820](https://bugs.mojang.com/browse/MC-182820) Repeaters and comparators use wood sounds for placing/breaking despite being made mostly of stone
-   [MC-197473](https://bugs.mojang.com/browse/MC-197473) Renamed block entities don't stack properly
-   [MC-200484](https://bugs.mojang.com/browse/MC-200484) Jukeboxes use stone sounds despite being composed predominantly of wood
-   [MC-214126](https://bugs.mojang.com/browse/MC-214126) Bees don't pollinate themselves with spore blossoms or chorus flowers
-   [MC-217628](https://bugs.mojang.com/browse/MC-217628) Levers use wood sounds rather than stone
-   [MC-217629](https://bugs.mojang.com/browse/MC-217629) Tripwire hooks use stone sounds, rather than wood
-   [MC-257909](https://bugs.mojang.com/browse/MC-257909) Zoglins, hoglins, and pandas can still attack players riding camels
-   [MC-264741](https://bugs.mojang.com/browse/MC-264741) Unequip vibration only works in creative mode
-   [MC-264743](https://bugs.mojang.com/browse/MC-264743) The "Debug" line on the debug screen that shows which debug graphs are enabled doesn't mention the ping and network traffic chart
-   [MC-264746](https://bugs.mojang.com/browse/MC-264746) Armor trims no longer render their second layer
-   [MC-264753](https://bugs.mojang.com/browse/MC-264753) Eye armor trim on chainmail helmets now has absolutely no effect
-   [MC-264773](https://bugs.mojang.com/browse/MC-264773) There's a misplaced label in the network traffic graph, overlapping minimum B/s rate text

---

# Minecraft Snapshot 23w32a

Hello! This very technical snapshot contains vibration changes, data pack and resource pack changes, some network optimizations, new debug tools, and a some bug fixes. Enjoy!

## Changes

-   Changes to vibration mechanic

### Vibrations

-   Vibrations no longer risk being lost on simulation distance limit
-   Unequipping items emits a new `unequip` vibration of frequency 4
-   Chiseled Bookshelves emit a `block_change` vibration of frequency 11 when receiving books from Hoppers
-   Turtle Eggs cracking emit a `block_change` vibration of frequency 11
-   Turtle Eggs hatching emit a `block_destroy` vibration of frequency 12
-   Using Bone Meal emits an `item_interact_finish` vibration of frequency 3
-   Fire being doused by Water Potion emits a `block_destroy` vibration of frequency 12
-   Evokers evoking Vexes or Fangs emit an `entity_place` vibration of frequency 14
-   Carrots being eaten by Rabbits emit a `block_change` vibration of frequency 11
-   Sweet Berries being eaten by Foxes emit a `block_change` vibration of frequency 11
-   Camels eating Cactus emit an `eat` vibration of frequency 8

## Technical Changes

-   The resource pack version is now 17
-   A bug involving hunger icons was fixed in the slicer tool released with last snapshot. Here is [the new version](https://github.com/Mojang/slicer/releases/tag/v1.1.1)
-   The data pack version is now 17
-   Optimized networking to improve the experience on low bandwidth connections

### Resource Pack Version 17

-   The text field background is now a nine-sliced sprite at `widget/text_field` and `widget/text_field_highlighted`
-   The scroll bar in lists and text fields is now a nine-sliced sprite at `widget/scroller`

### Data Pack Version 17

-   Changed mob effect storage on items, entities and block entities

**Mob effect storage changes**

-   Game no longer uses numeric values when storing mob effects to world (so, for example, `4` becomes `minecraft:mining_fatigue`)
-   Various mob effect fields have been renamed for consistency with new structures

**Mob Effect Instance**

This structure is used in many places, so changes are described separately.

-   `Id` -> `id`, also changed from number to string id
-   `Ambient` -> `ambient`
-   `Amplifier` -> `amplifier`
-   `Duration` -> `duration`
-   `ShowParticles` -> `show_particles`
-   `ShowIcon` -> `show_icon`
-   `HiddenEffect` -> `hidden_effect`, also since it's mob effect instance, changes apply recursively
-   `FactorCalculationData` -> `factor_calculation_data`

**Items**

**`potion`, `lingering_potion`, `splash_potion`, `tipped_arrow`**

-   `CustomPotionEffects` -> `custom_potion_effects`, contents tranformed as a list of mob effect instances

**`suspicous_stew`**

-   `Effects` -> `effects`, for each entry:
    -   `EffectId` -> `id`, also changed from number to string id
    -   `EffectDuration` -> `duration`

**Entities**

**`mooshroom`**

-   Removed `EffectId` and `EffectDuration`
-   Added `stew_effects` with the same format as `suspicious_stew.effects` tag (i.e. list of effect id and duration)

**`area_effect_cloud`**

-   `Effects` -> `effects`, contents tranformed as a list of mob effect instances

**`arrow`**

-   `CustomPotionEffects` -> `custom_potion_effects`, contents tranformed as a list of mob effect instances

**Players, Armor Stands and mobs**

-   `ActiveEffects` -> `active_effects`, contents tranformed as a list of mob effect instances

**Block Entities**

**`beacon`**

-   `Primary` -> `primary_effect`, also changed from number to string id
-   `Secondary` -> `secondary_effect`, also changed from number to string id

**Loot Tables**

-   Added `sequence` loot function
    -   Contains 1 field:
        -   `functions`: an array of sub-functions to run in sequence
    -   Can also be declared as an inline array with out a type
        -   This matches the existing behavior where loot function JSON files can be declared as an array of composite functions
-   `all_of` predicates in loot tables can now be declared implicitly as an inline array without a type
    -   This similarly matches the existing behavior where loot predicate JSON files can be declared as an array of sub-predicates

### Network optimizations

-   Gameplay packets are now packed into bigger TCP-packets to reduce overhead from TCP-headers, significantly reducing network usage
-   Opening the debug screen with CTRL + F3 will now show charts for ping and received network traffic

### Secure Chat

-   Clients will no longer disconnect themselves when receiving an invalid chat message
    -   A placeholder message will instead be shown in chat

---

