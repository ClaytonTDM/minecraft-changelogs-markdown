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

#### Functions

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

##### Limits

Existing limits for functions have been refined to accomodate new execution rules and prevent wider range of exploits:

-   Limits apply even if run from command line (so it will now always behave as if they were placed in a function)
    -   For example, all functions called by `execute as @e run function` will count towards same limit
    -   Executions from command blocks still count as separate ones
-   Limit `maxCommandChainLength` for functions will now count "operations" like:
    -   execution of command for a single context
    -   execution of a stage in `execute` (no matter how many contexts were modified)
    -   invocation of function
-   New limit with game rule `maxCommandForkCount` now restricts total amount of context that can be created by single state of functions like `execute`
    -   Example: if there are 5 entities in world, `execute as @e` creates 5 contexts, while `execute as @e at @e` creates 5\*5 = 25 contexts

#### `execute if function`

An `execute` sub-command that runs a function or function tag and matches the return value(s). This is a reintroduction of functionality removed in previous version. If a tag is given, all functions run regardless of the results of prior functions.

Syntax: `execute if|unless function <function> <continuation>`

Parameters:

-   `function`: The function or tag to run

##### Matching

The matching of the result value of the function(s) that run:

-   At least one of the functions must succeed for the match to succeed
-   A succeessful call is defined as a function that:
    -   Uses the `return` command to return a value
    -   The return value is not 0
-   If no functions exited with `return`, neither `if` or `unless` will run

#### `return run`

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

We are now releasing Snapshot 23w40a, the first snapshot for 1.20.3! This snapshot contains improvements for shields, changes to chat component serialization and bug fixes.

## Changes

-   When a player is blocking with a shield, the arm with the shield now follows the direction the player is looking at, when viewed from third person perspective

## Technical Changes

-   The Data Pack version is now 19
-   A few minor changes to chat component serialization

### Chat components

#### Serialization

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
-   [MC-264748](https://bugs.mojang.com/browse/MC-264748) GLX.\_initGlfw Treats Pointer as a String
-   [MC-265353](https://bugs.mojang.com/browse/MC-265353) Clocks and Compasses in Item Display Entities don't show correct time/direction
-   [MC-265462](https://bugs.mojang.com/browse/MC-265462) Sending resource pack during play phase shows loading terrain screen for a long time
-   [MC-265519](https://bugs.mojang.com/browse/MC-265519) Game minimizes when certain areas of the screen are clicked on Mac in fullscreen mode

---

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

