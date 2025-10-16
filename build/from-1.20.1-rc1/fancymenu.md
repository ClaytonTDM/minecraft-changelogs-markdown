# Minecraft 1.20.1 Release Candidate 1

We're now releasing a Release Candidate for a first minor update for Minecraft 1.20. This minor update will be a stability issue to fix some critical issues found after the release of Minecraft 1.20.

## Fixed bugs in 1.20.1 Release Candidate 1

-   Fixed a disk permissions-related crash
-   [MC-263244](https://bugs.mojang.com/browse/MC-263244) The realms invitation icon that appears on the realms button in the main menu is displayed incorrectly
-   [MC-263245](https://bugs.mojang.com/browse/MC-263245) Buttons in the "Add Realm" interface within the realms menu no longer render
-   [MC-263296](https://bugs.mojang.com/browse/MC-263296) Game softlocks after cancelling joining a server
-   [MC-263340](https://bugs.mojang.com/browse/MC-263340) Incorrect Protochunk#setStatus call on chunk generate

---

We are now releasing the first, and hopefully only, release-candidate for 1.20, containing two bug fixes. If all goes well, no further changes will be made before the full release of Minecraft 1.20 on Wednesday next week.

Happy crafting!

## Fixed bugs in 1.20 Release Candidate 1

-   [MC-256477](https://bugs.mojang.com/browse/MC-256477) Knowledge books can't be placed in chiseled bookshelves
-   [MC-262853](https://bugs.mojang.com/browse/MC-262853) Pitcher plant breaks and floats when growing without enough light

---

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

We've now released 1.20 Pre-release 4, resolving a crash in the Multiplayer screen introduced in the last pre-release.

---

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
-   [MC-262006](https://bugs.mojang.com/browse/MC-262006) Melon and Pumpkin are in the default '#maintains;;_;;farmland' tag despite not maintain farmland
-   [MC-262208](https://bugs.mojang.com/browse/MC-262208) In the credits, "Lionbridge" is misspelt in one place (no "g")
-   [MC-262253](https://bugs.mojang.com/browse/MC-262253) Music composers not listed in credits
-   [MC-262265](https://bugs.mojang.com/browse/MC-262265) Changing resource pack that overrides a font crashes JVM
-   [MC-262296](https://bugs.mojang.com/browse/MC-262296) Rabbits are no longer affected by jump boost
-   [MC-262300](https://bugs.mojang.com/browse/MC-262300) Menu text is now rendered in front of the Mojang Studios loading screen fade animation
-   [MC-262304](https://bugs.mojang.com/browse/MC-262304) The stepping;;_;;on predicate condition does not correctly succeed on trapdoors
-   [MC-262308](https://bugs.mojang.com/browse/MC-262308) Entities do not stick to honey blocks pushed by pistons if their center isn't over the honey block
-   [MC-262313](https://bugs.mojang.com/browse/MC-262313) Nether won't load in upgraded worlds
-   [MC-262317](https://bugs.mojang.com/browse/MC-262317) Items don't respect properties of the block they are supported on
-   [MC-262351](https://bugs.mojang.com/browse/MC-262351) Worldgen deadlock caused by supporting block checks
-   [MC-262363](https://bugs.mojang.com/browse/MC-262363) Player can still gain a normal jump off of a honey block with precise timing
-   [MC-262424](https://bugs.mojang.com/browse/MC-262424) Sprinting particles on the edges of blocks are still incorrect

---

A third Release Candidate is now available for Minecraft 1.19.4, fixing one issue in preparation for the full release of Minecraft 1.19.4 tomorrow.

Happy Crafting!

## Fixed bug in 1.19.4 Release Candidate 3

-   [MC-260901](https://bugs.mojang.com/browse/MC-260901) Guardians deal thorns damage even while their spikes are retracted

---

We are releasing a second Release Candidate for 1.19.4 to fix a few critical issues.

## Fixed bugs in 1.19.4 Release Candidate 2

-   [MC-260677](https://bugs.mojang.com/browse/MC-260677) Advancement icons handle translucent textures wrong
-   [MC-260878](https://bugs.mojang.com/browse/MC-260878) Guardians apply Thorns damage when hit by projectiles
-   [MC-260881](https://bugs.mojang.com/browse/MC-260881) Transparent 3D models dont render properly in the GUI/Hotbar

---

