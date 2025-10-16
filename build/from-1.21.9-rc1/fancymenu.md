# Minecraft 1.21.9 Release Candidate 1

We are now releasing the first, and hopefully only, release-candidate for 1.21.9. If all goes well, no further changes will be made before the full release. Happy mining!

## Fixed bugs in 1.21.9 Release Candidate 1

-   [MC-302243](https://bugs.mojang.com/browse/MC-302243) Creakings can spawn with the "spawnMonsters" game rule set to false
-   [MC-302278](https://bugs.mojang.com/browse/MC-302278) The texture in the middle of conduits is upside down

---

# Minecraft 1.21.9 Pre-Release 4

Here is another Pre-Release for 1.21.9 with more bugfixes!

## Changes

### UI

-   Debug Options screen is now accessible using F3 + F6, instead of the previous F3 + F5

## Fixed bugs in 1.21.9 Pre-Release 4

-   [MC-300216](https://bugs.mojang.com/browse/MC-300216) The new F3 + F5 debug settings menu does not open on Mac keyboards
-   [MC-301735](https://bugs.mojang.com/browse/MC-301735) Server Management Protocol Kick command parameter mis match
-   [MC-302039](https://bugs.mojang.com/browse/MC-302039) Conduits don't have the block-breaking animation.
-   [MC-302119](https://bugs.mojang.com/browse/MC-302119) Shield with patterns has no enchantment glint when enchanted
-   [MC-302130](https://bugs.mojang.com/browse/MC-302130) Mobs have visual glitches all over them
-   [MC-302170](https://bugs.mojang.com/browse/MC-302170) Player Heads do not Glow
-   [MC-302240](https://bugs.mojang.com/browse/MC-302240) Bugs on ranged weapons

---

# Minecraft 1.21.9 Pre-Release 3

We'll kick the week off with a third pre-release for the Copper Age Drop. This pre-release includes a performance update and bug fix for the copper golem.

## Fixed bugs in 1.21.9 Pre-Release 3

-   [MC-301963](https://bugs.mojang.com/browse/MC-301963) Copper golems cause huge lag spikes when checking chests
-   [MC-301990](https://bugs.mojang.com/browse/MC-301990) Copper golem statues cause culling issues when placed above certain blocks

---

# Minecraft 1.21.9 Pre-Release 2

We heard Friday would be a Pre-tty cool day to release the second Pre-Release for Minecraft: Java Edition 1.21.9, so here we are! This pre-release contains fixes to various issues introduced in previous snapshots, as well as a missed bump to the Data Pack major version.

Happy Crafting!

## Changes

-   Copper Golems will now oxidize even when the game rule `doDaylightCycle` is disabled
-   The Copper Golem's behavior for turning into a statue has been tweaked to match Bedrock
    -   Copper Golems no longer need to be close to the center of an empty block position in order to turn into a statue
    -   Copper Golems now have the possibility to turn into a statue as soon as they become fully oxidized

## Technical Changes

-   The Data Pack version is now 88.0, to match the breaking change to `/setworldspawn` and `/spawnpoint` in the 1.21.9-pre1

## Fixed bugs in 1.21.9 Pre-Release 2

-   [MC-300362](https://bugs.mojang.com/browse/MC-300362) Copper golems do not oxidize when doDaylightCycle is disabled
-   [MC-301566](https://bugs.mojang.com/browse/MC-301566) Occasional sound crash on resource pack reload
-   [MC-301706](https://bugs.mojang.com/browse/MC-301706) Server Management Protocol does not support parameters as object (by-name)
-   [MC-301770](https://bugs.mojang.com/browse/MC-301770) The `below_name` plate is not displayed higher for players and mannequins named “deadmau5”
-   [MC-301963](https://bugs.mojang.com/browse/MC-301963) Copper golems cause huge lag spikes when checking chests
-   [MC-302088](https://bugs.mojang.com/browse/MC-302088) Oxidized Copper Golems take an extremely long time to turn into a statue
-   [MC-302112](https://bugs.mojang.com/browse/MC-302112) Posed mannequins don't use the correct hitbox
-   [MC-302117](https://bugs.mojang.com/browse/MC-302117) Text display billboarding is broken
-   [MC-302120](https://bugs.mojang.com/browse/MC-302120) Dimension-specific world spawn point causes mob spawning in other dimensions to fail
-   [MC-302148](https://bugs.mojang.com/browse/MC-302148) Copper Golem does not get close enough to search the chest, getting permanently stuck
-   [MC-302164](https://bugs.mojang.com/browse/MC-302164) Breaking change to /setworldspawn and /spawnpoint in minor datapack version

---

# Minecraft 1.21.9 Pre-Release 1

The copper age is approaching and it's time for this drop's first pre-release. Today's release includes more copper golem improvements, some changes to the mannequins and several bug fixes. Pre-releases don't follow the regular Tuesday release schedule, so keep an eye out for the next one.

## Changes

### Minor Tweaks to Blocks, Items and Entities

-   Copper Golem now only tries to open Chests that are neighboring blocks when it's a passenger

### Minecraft Server Management Protocol

-   Notifications now use `minecraft:notification/` prefix instead of `notification:`

## Technical Changes

-   The Data Pack version is now 87.1

## Data Pack Version 87.1

### Mannequins

-   Mannequins description text can now be configured
-   Mannequins now accept `minecraft:profile` component from spawner items

**Modified Data Fields**

-   `profile` - now has the same format as a `minecraft:profile` component (which has been extended to allow overrides), defaults to `{}` (i.e. static profile with both `id` and `name` missing)

**New Data Fields**

-   `pose` - The pose of the Mannequin
    -   Valid entries: `standing`, `crouching`, `swimming`, `fall_flying`, `sleeping`
-   `immovable` - Optional boolean specifying that the Mannequin cannot be moved (defaults to `false`)
-   `description` - Optional Text Component shown where a Player's `below_score` score would show
    -   The default "NPC" (`entity.minecraft.mannequin.label`) text is shown if omitted
-   `hide_description` - Optional boolean specifying that no description should be shown at all
    -   A Mannequin with the description hidden displays as if a Player had no `below_score` display

### Commands

-   The `spawnpoint` command now optionally takes in a `pitch` argument
-   The `setworldspawn` command is no longer limited to the overworld
    -   This means players can respawn e.g. in the Nether when they have no bed or respawn anchor
    -   It now also takes in an optional `pitch` argument
-   Server commands now run from the respawn dimension by default instead of always the overworld
-   The `fetchprofile` command now also prints a clickable text to summon a Mannequin with the resolved profile

### Data Components

**Modified `minecraft:profile`**

-   Profiles can now also have additional fields that can replace various values used for rendering
-   If any of the fields are omitted, the value from the resolved profile is used, even if the profile resolved to the default skin
-   New fields
    -   `texture` - Optional namespaced ID of the skin texture to use for rendering
        -   The skin is specified relative to the `textures` folder and with a `.png` suffix
        -   e.g. `entity/player/wide/steve` will use the default wide Steve skin
    -   `cape` - Optional namespaced ID of the cape texture to use for rendering
        -   When specified, uses the same format as the `texture` field
    -   `elytra` - Optional namespaced ID of the elytra texture to use for rendering
        -   When specified, uses the same format as the `texture` field
        -   If this value is not present either as override or in player profile, Mannequins using this profile will use the cape texture, or if that is also not present, the default Elytra texture when wearing Elytra
    -   `model` - Optional model type, one of `wide` and `slim`

### Entity Data

**Modified `minecraft:player`**

-   Changes to the `respawn` object
    -   `angle` has been renamed to `yaw` and is now a required field
    -   `pitch` has been added as a required field
    -   `dimension` is now a required field

### Loot Functions

**`minecraft:copy_name`**

-   The `source` field now accepts new context values:
    -   `direct_attacker`
    -   `target_entity`
    -   `interacting_entity`

**`minecraft:copy_components`**

-   The `source` field now accepts new context values:
    -   `this`
    -   `attacker`
    -   `direct_attacker`
    -   `attacking_player`
    -   `target_entity`
    -   `interacting_entity`
    -   `tool`

## Fixed bugs in 1.21.9 Pre-Release 1

-   [MC-160528](https://bugs.mojang.com/browse/MC-160528) End portals do not negate fall damage
-   [MC-243759](https://bugs.mojang.com/browse/MC-243759) Explosions won't damage an entity if the distance to its eyes is 0
-   [MC-300257](https://bugs.mojang.com/browse/MC-300257) Lightning does not reset copper golem oxidation
-   [MC-300294](https://bugs.mojang.com/browse/MC-300294) Copper golems pathfind to chests incorrectly
-   [MC-300687](https://bugs.mojang.com/browse/MC-300687) The copper chains and bars aren't organized correctly in the Creative inventory
-   [MC-300881](https://bugs.mojang.com/browse/MC-300881) The skin preview in the skin reporting screen is no longer interactive
-   [MC-301409](https://bugs.mojang.com/browse/MC-301409) Acceleration power of fireballs and wind charges gets halved when they are redirected by explosions
-   [MC-301414](https://bugs.mojang.com/browse/MC-301414) Scraping oxidation off double chests doesn't produce particles on the half of the chest that wasn’t directly interacted with
-   [MC-301424](https://bugs.mojang.com/browse/MC-301424) entity;;_;;data item component detection is broken in resource packs
-   [MC-301541](https://bugs.mojang.com/browse/MC-301541) Copper golems no longer sort items when in minecarts
-   [MC-301569](https://bugs.mojang.com/browse/MC-301569) Sounds of copper chests and all variants are too quiet and sound low-quality compared to before
-   [MC-301573](https://bugs.mojang.com/browse/MC-301573) Relative teleportation across dimensions is inconsistent
-   [MC-301798](https://bugs.mojang.com/browse/MC-301798) Copper golems do not open chests with specific transparent/non-full blocks above them
-   [MC-301814](https://bugs.mojang.com/browse/MC-301814) CustomNameVisible does not work for mannequins (for the name, not the NPC annotation)
-   [MC-301815](https://bugs.mojang.com/browse/MC-301815) Mannequin data is sometimes lost when using spawn eggs
-   [MC-301819](https://bugs.mojang.com/browse/MC-301819) Mannequins' name tags are visible when on a team and ridden
-   [MC-301862](https://bugs.mojang.com/browse/MC-301862) When clicking a command suggestion in chat, it occasionally selects half of the new word
-   [MC-301883](https://bugs.mojang.com/browse/MC-301883) Entities going through portals with their Motion set to more than 10 on an axis have their Motion tag reset
-   [MC-301893](https://bugs.mojang.com/browse/MC-301893) When a copper golem is leashed by a player and then oxidizes into a statue, it will not drop the lead
-   [MC-301951](https://bugs.mojang.com/browse/MC-301951) Misleading description for operator;;_;;user;;_;;permission;;_;;level in server management protocol documentation
-   [MC-301979](https://bugs.mojang.com/browse/MC-301979) Copper golems no longer properly check chests
-   [MC-301984](https://bugs.mojang.com/browse/MC-301984) Teleporting a player to their own position is now jittery/frozen
-   [MC-301991](https://bugs.mojang.com/browse/MC-301991) deprecated.json has some renamed keys pointing to text values instead of the new keys
-   [MC-302032](https://bugs.mojang.com/browse/MC-302032) Static profiles no longer resolve texture data unless an id or name is provided
-   [MC-302089](https://bugs.mojang.com/browse/MC-302089) Game crashes when flying mobs start pathfinding in debug mode
-   [MC-302092](https://bugs.mojang.com/browse/MC-302092) Crash when placing iron bars next to stairs, when stairs are added to #bars tag
-   [MC-302094](https://bugs.mojang.com/browse/MC-302094) Crash when adding blocks to #copper;;_;;chests then placing it next to actual copper chests
-   [MC-302095](https://bugs.mojang.com/browse/MC-302095) Crash when adding blocks to #lightning;;_;;rods and summoning a lightning over it
-   [MC-302096](https://bugs.mojang.com/browse/MC-302096) Crash when adding blocks to #wooden;;_;;shelves, placing it next to wooden shelf, then powering the shelf

---

# Minecraft Snapshot 25w37a

A new week, and a new snapshot. This one includes another big batch of bug fixes, copper golem polishing and our beloved friend can now open doors.

Happy mining!

## Changes

-   OpenGL 3.3 is now required to play the game, up from 3.2. This does not change our posted Minimum Requirements

> **Developer’s Note:** _We do not expect the update to OpenGL version to affect many people, if any at all. Our posted Minimum Requirements has been OpenGL 4.0 since 2017, and OpenGL 3.3 turned 15 years old recently._

### Minor Tweaks to Blocks, Items and Entities

-   Fixed a bug where breaking a Shelf while another player is interacting with it could lead to visual bugs in the player inventory
-   Copper Golems hitbox has been tweaked
    -   The hitbox is now 0.49 blocks in width to be able to pathfind through narrow spaces
-   Copper Golems can now open doors
-   Test Instance Blocks now preserve error markers between world reloads
-   Ambient lighting on entities has been adjusted to be more visually in line with blocks and other parts of the game
    -   The underside of flat surfaces will now be lit from that direction, instead of the opposite direction
    -   This mainly affects models containing cubes that are either flat or "hollow" such as:
        -   Worn armor
        -   Worn Elytra
        -   The outside layers on player skins
        -   The ribcages of Skeletons or Skeleton Horses
        -   The feet of Chickens or Frogs
        -   The wings of Phantoms or the Ender Dragon
        -   The fins on fish
        -   And more!

### Game Mode Switching

-   Switching from Spectator Mode to Creative Mode no longer causes the player to stop flying
    -   Instead, flight now only gets disabled when switching game modes if the player is near the ground
        -   A player is considered to be near the ground if there is a collidable surface (i.e. blocks, Happy Ghasts, boats...) within 1 block below them
    -   Flight will not get disabled if the player was inside a block or collidable entity
        -   This is to prevent players from suddenly falling through the ground

> **Developer's Note**: _This change is a partial revert of a bugfix from a previous snapshot. Even though the old behavior prior to the fix was unintended, the approach we took to fixing flight didn't quite **land** the way we wanted it to. In response to community feedback, we're trying this new approach as a less disruptive alternative._

### Minecraft Server Management Protocol

-   Clients must authenticate to access the API
    -   Clients should supply an `Authorization` bearer token header with a server specific secret
    -   The secret is configured in the server properties file
        -   `management-server-secret=`
        -   The secret should be exactly 40 alphanumeric characters (A-Z, a-z, 0-9)
        -   The secret will be automatically generated if the server property is empty
        -   Unauthorized requests are rejected with 401 Unauthorized
-   TLS is enabled by default
    -   Can be disabled in the server properties file
        -   `management-server-tls-enabled=false`
    -   Requires a keystore file to be set in the server properties file
        -   `management-server-tls-keystore=path/to/keystore.p12`
    -   The keystore file must be in PKCS12 format
    -   Keystore password can be set in the following ways, in order of priority
        -   Environment variable: `MINECRAFT_MANAGEMENT_TLS_KEYSTORE_PASSWORD`
        -   JVM argument: `-Dmanagement.tls.keystore.password=`
        -   Server property: `management-server-tls-keystore-password=`

### Server Properties

-   Default value of `management-server-port` was changed from `25585` to `0`, assigning an available port each time management server is started
-   Added server property `management-server-tls-enabled` controlling whether the Minecraft Server Management Protocol uses TLS or not
    -   Defaults to `true`
-   Added server property `management-server-tls-keystore` controlling the path to the keystore file used for TLS
    -   Defaults to an empty string
    -   A dedicated server won't start when TLS is enabled and no keystore is provided
-   Added server property `management-server-tls-keystore-password` controlling the password to the keystore file used for TLS
    -   Defaults to an empty string

### Game Rules

-   Added `spawnerBlocksEnabled` game rule controlling if Spawner Blocks should be enabled or not
    -   Defaults to `true`

### Mob Spawning

-   Logic for choosing type of equipment for mobs spawning with equipment has been tweaked to add Copper as a possibility
    -   The initial roll to choose a type now chooses between Leather, Copper and Gold
    -   The chance to increase an armor tier has increased from 9.5% to 10.87%

### Sounds

-   Some sound sliders in the Music & Sound Options now play a preview sound when adjusting the setting outside a world

### UI

-   The Resource Pack and Data Pack selection screens now have a search box

## Technical Changes

-   The Data Pack version is now 87.0
-   The Resource Pack version is now 69.0
-   Some previously hidden debug features have been exposed to players

### Debug features

-   Some debug features that were previously removed during compilation are now preserved and can be used by players
-   Individual values can be enabled with JVM properties:
    -   First, a global debug flag must be enabled with `-DMC_DEBUG_ENABLED` or `-DMC_DEBUG_ENABLED=true`
    -   Then, a specific feature can be enabled, for example `-DMC_DEBUG_BRAIN` or `-DMC_DEBUG_BRAIN=true`
    -   To get the list of all available debug properties, add `-DMC_DEBUG_PRINT_PROPERTIES`
-   Warning: this is debug code. Handle with extreme care!
    -   This is an advanced feature, meant to help modders - it should not be used for normal play
    -   Features not guaranteed to work as intended
    -   It might crash your game or corrupt your worlds
    -   Individual options might be added, changed or removed without a notice

## Data Pack Version 87.0

-   Changed name of game rule `enableCommandBlocks` to `commandBlocksEnabled`

## Resource Pack Version 69.0

### Textures

-   Moved the result slot of `gui/container/villager.png` up by one pixel

### Shaders & Post-process Effects

**Shaders**

-   A new `PER_FACE_LIGHTING` flag has been added to the following shaders:
    -   `core/entity.vsh`
    -   `core/entity.fsh`
-   When set, cardinal lighting will be computed separately for front- and back-faces
-   As we now require OpenGL 3.3, we have bumped the version of all shaders from `150` to `330`

## Fixed bugs in 25w37a

-   [MC-220913](https://bugs.mojang.com/browse/MC-220913) Parity issue: Adjusting slider in the sound settings when not being in a world does not play a sound of that category
-   [MC-254052](https://bugs.mojang.com/browse/MC-254052) /locate doesn't work outside build limit
-   [MC-295841](https://bugs.mojang.com/browse/MC-295841) Interactive collision check path is broken
-   [MC-300076](https://bugs.mojang.com/browse/MC-300076) Copper golems remain completely stationary while searching chests, causing them to float and making them unable to receive knockback or be pushed
-   [MC-300077](https://bugs.mojang.com/browse/MC-300077) Copper golems can interact with chests diagonally through solid blocks
-   [MC-300299](https://bugs.mojang.com/browse/MC-300299) Copper Golems can open chests that are blocked
-   [MC-300723](https://bugs.mojang.com/browse/MC-300723) Second armor layer is still not rendering properly on all pieces
-   [MC-301294](https://bugs.mojang.com/browse/MC-301294) Higher tiers of mob armor are unreasonably less common than they were before 25w31a
-   [MC-301494](https://bugs.mojang.com/browse/MC-301494) Falling particles no longer appear from floating sand or gravel
-   [MC-301510](https://bugs.mojang.com/browse/MC-301510) GUI sprites nine slice performance regression
-   [MC-301531](https://bugs.mojang.com/browse/MC-301531) Server Management Protocol returns wrong response for invalid method IDs
-   [MC-301547](https://bugs.mojang.com/browse/MC-301547) Switching from Spectator mode to Creative mode now makes you fall out of the sky
-   [MC-301554](https://bugs.mojang.com/browse/MC-301554) Management protocol doesn't support batched requests
-   [MC-301558](https://bugs.mojang.com/browse/MC-301558) Copper golems can't pathfind through thin blocks
-   [MC-301563](https://bugs.mojang.com/browse/MC-301563) When you have the darkness potion effect, the chat, letters and words in the pause menu, items, F3 will darken
-   [MC-301564](https://bugs.mojang.com/browse/MC-301564) Management protocol doesn't support string-based request IDs
-   [MC-301574](https://bugs.mojang.com/browse/MC-301574) The spawnMonsters game rule does not take effect when switched
-   [MC-301593](https://bugs.mojang.com/browse/MC-301593) Monsters can spawn from spawners with the "spawnMonsters" game rule set to false
-   [MC-301599](https://bugs.mojang.com/browse/MC-301599) Action key getting stuck on when entering an interface so you are unable to exit without it reopening instantly
-   [MC-301620](https://bugs.mojang.com/browse/MC-301620) Banner animation is not independent when two banners are rendered
-   [MC-301661](https://bugs.mojang.com/browse/MC-301661) Server Management Protocol prints some incorrectly formatted messages in the console
-   [MC-301711](https://bugs.mojang.com/browse/MC-301711) The name of the "enableCommandBlocks" game rule is inconsistent with Bedrock Edition
-   [MC-301748](https://bugs.mojang.com/browse/MC-301748) Striking a Lightning Rod with non-default oxidation level with Lightning keeps nearby redstone components powered
-   [MC-301751](https://bugs.mojang.com/browse/MC-301751) The client crashes when in the vicinity of a mannequin spawner
-   [MC-301752](https://bugs.mojang.com/browse/MC-301752) Mannequins with profile.model set to "wide" render as a Steve skin
-   [MC-301754](https://bugs.mojang.com/browse/MC-301754) The hand animation plays when right-clicking shelves with nothing in your hand
-   [MC-301758](https://bugs.mojang.com/browse/MC-301758) Shield model clips through shelves
-   [MC-301759](https://bugs.mojang.com/browse/MC-301759) Elements within the realms “Worlds” tab are not selected in order when using the TAB key
-   [MC-301766](https://bugs.mojang.com/browse/MC-301766) Heads and skulls appear too high when placed on shelf
-   [MC-301768](https://bugs.mojang.com/browse/MC-301768) Structure blocks frame is not displayed when in spectator mode
-   [MC-301785](https://bugs.mojang.com/browse/MC-301785) Squid ink particles are yellow
-   [MC-301811](https://bugs.mojang.com/browse/MC-301811) Loot from suspicious blocks does not render while brushing
-   [MC-301833](https://bugs.mojang.com/browse/MC-301833) Text of text;;_;;display entities is darker when "see;;_;;through" property is set to true
-   [MC-301869](https://bugs.mojang.com/browse/MC-301869) The specification for the minecraft:ip;;_;;bans server management method says it returns an array of players even though it returns an array of ip;;_;;ban objects
-   [MC-301870](https://bugs.mojang.com/browse/MC-301870) Command feedback for successful /ban and /ban-ip commands with no specified reason can't be sent to the client
-   [MC-301889](https://bugs.mojang.com/browse/MC-301889) Documented return type does not match for clear methods in server managment protocol
-   [MC-301891](https://bugs.mojang.com/browse/MC-301891) Server management method minecraft:bans/clear clears allowlist, not bans
-   [MC-301899](https://bugs.mojang.com/browse/MC-301899) The output slot in the trading GUI is misaligned with other slots
-   [MC-301903](https://bugs.mojang.com/browse/MC-301903) Dropped chests, including variants, are no longer translated upward
-   [MC-301935](https://bugs.mojang.com/browse/MC-301935) Chest placed on bottom of shelf despite the rest of the items arent
-   [MC-301952](https://bugs.mojang.com/browse/MC-301952) Conduit visual bug

---

# Minecraft Snapshot 25w36b

Here is Snapshot 25w36b to fix some common crashes.

## Fixed bugs in 25w36b

-   [MC-301745](https://bugs.mojang.com/browse/MC-301745) Placing an ender chest in the world crashes the game
-   [MC-301749](https://bugs.mojang.com/browse/MC-301749) Multiplayer Crash.

---

# Minecraft Snapshot 25w36a

Snapshot 25w36a is out and it includes mannequins, a new technical entity that is spawned with commands and can be used as an NPC. Conflicting key binds will now function together allowing you to bind a key to multiple actions. And as always, this snapshot also includes technical tweaks and bug fixes.

> > **Developer's Note**: _This snapshot brings a large change to how we collect and draw block entities and particles. We don't anticipate any change of behaviors so please keep an eye out and report anything suspicious as a bug, thank you!_

## New Features

-   World Borders can now be set per dimension

### End Light Flashes

-   While the Ender Dragon fog effect is active the flash source in the sky is not visible and the brightness of the light affecting the world is reduced

### Accessibility

-   Multiple key binds that have the same key assigned to them can now work together, while before only one would work
    -   For example, you can now bind `D` to `Jump` and `Strafe Left` to jump and strafe left at the same time
    -   The red warning for assigning the same key to multiple key binds is changed to yellow
-   The spectator hotbar menu key can now be rebound
    -   It is part of a new `Spectator` category in the Key Binds screen, alongside the pre-existing `Highlight Players` key bind

## Changes

-   Formatting codes are now stripped from Code of Conduct files

### World Border

-   The World Border is now dimension-specific
    -   This means that each dimension can have its own World Border size, position, etc.

### Minor Tweaks to Blocks, Items and Entities

-   Copper Torch and Copper Lantern colors are adjusted to make them more discernible to color blind players

### UI

-   Double-clicking a word in edit box now selects it

### Block States

-   Powered Shelves can now only connect to other Powered Shelves facing the exact same direction

### Performance Improvements

-   Particles outside of players view are not rendered anymore, which provides a performance improvement in some cases

## Technical Changes

-   The Data Pack version is now 86.0

## Data Pack Version 86.0

-   Added Mannequin entities
-   The World Border is now dimension-specific

### Mannequins

Added a new type of technical entity called `minecraft:mannequin` which can only be spawned with summon commands.

-   A Mannequin is a Player Avatar without a connected Player
-   Mannequins always show an "NPC" text where a Player's `below_score` score would show
-   Mannequins function as Living Entities - they can hold and wear equipment, have attributes & effects, take damage, etc

Data Fields:

-   `profile` - Which profile to show on the entity. This is either a Player profile (same format as a `minecraft:profile` component) or a Mannequin profile with the following fields:
    -   `texture` - Namespaced ID of the skin texture to use
        -   The skin is specified relative to the `textures` folder and with a `.png` suffix
        -   e.g. `entity/player/wide/steve` will use the default wide Steve skin
    -   `cape` - Optional namespaced ID of the cape texture to use
        -   When specified, uses the same format as the `texture` field
        -   Omitting this field means the Mannequin has no cape
    -   `elytra` - Optional namespaced ID of the elytra texture to use
        -   When specified, uses the same format as the `texture` field
        -   Omitting this field means the Mannequin uses the cape texture, or if that is also omitted, the default Elytra texture when wearing Elytra
    -   `model` - Optional model type, one of `wide` and `slim`
        -   If omitted, `wide` is used
-   `hidden_layers` - List of outer skin layers to hide
    -   Valid entries: `cape`, `jacket`, `left_sleeve`, `right_sleeve`, `left_pants_leg`, `right_pants_leg`, `hat`
-   `main_hand` - Which hand is the main hand of the Mannequn - one of `left` and `right`

### Particles

-   `dragon_breath` now optionally takes a `power` parameter (float, default `1.0`), which is multiplied onto its initial velocity, after all randomness
-   `instant_effect` and `effect` now optionally take `power` (float, default `1.0`) and `color` (rgb, default `0xFFFFFF`) parameters
-   `flash` now requires a `color` parameter (argb)

## Resource Pack Version 68.0

**Shaders**

-   The following unused shaders have been removed:
    -   `core/position_color_lightmap.vsh`
    -   `core/position_color_lightmap.fsh`
    -   `core/position_color_tex_lightmap.vsh`
    -   `core/position_color_tex_lightmap.fsh`

## Fixed bugs in 25w36a

-   [MC-223142](https://bugs.mojang.com/browse/MC-223142) Player can move while spectating a marker
-   [MC-225088](https://bugs.mojang.com/browse/MC-225088) Overworld surface is darker than before on low brightness
-   [MC-234737](https://bugs.mojang.com/browse/MC-234737) Typo in exception message: "EmtyPoolElement"
-   [MC-236508](https://bugs.mojang.com/browse/MC-236508) The title within the "Add Server" menu is displayed as "Edit Server Info"
-   [MC-237590](https://bugs.mojang.com/browse/MC-237590) The word "chunks" is improperly capitalized within the render and simulation distance sliders
-   [MC-238273](https://bugs.mojang.com/browse/MC-238273) "Locked by another running instance of Minecraft" lacks punctuation
-   [MC-249205](https://bugs.mojang.com/browse/MC-249205) "minecraft.used:minecraft.potion" increases by a value of two when using water bottles to create mud in creative mode
-   [MC-250062](https://bugs.mojang.com/browse/MC-250062) Several strings throughout the game contain comma splices
-   [MC-250193](https://bugs.mojang.com/browse/MC-250193) Server log does not use the string representation of a player's GameProfile on a disconnect during encryption
-   [MC-254052](https://bugs.mojang.com/browse/MC-254052) /locate doesn't work outside build limit
-   [MC-254668](https://bugs.mojang.com/browse/MC-254668) Pressing Escape on the death screen's title screen warning respawns the player
-   [MC-257792](https://bugs.mojang.com/browse/MC-257792) Output slot for trading menu is off-center
-   [MC-258191](https://bugs.mojang.com/browse/MC-258191) Root system feature allows hanging root vertical span of 0, causing error
-   [MC-259347](https://bugs.mojang.com/browse/MC-259347) Height limit warning message is shown when right-clicking the top of a block at the build height limit with a bucket
-   [MC-262370](https://bugs.mojang.com/browse/MC-262370) Some multiplayer strings are untranslatable
-   [MC-264962](https://bugs.mojang.com/browse/MC-264962) Strings that contain two inputs for a given action have inconsistent spacing and apostrophes
-   [MC-265807](https://bugs.mojang.com/browse/MC-265807) Mobs don't drown if their Air NBT is less than -19
-   [MC-277975](https://bugs.mojang.com/browse/MC-277975) The first line of the command execution warning in an item's tooltip is missing punctuation
-   [MC-278435](https://bugs.mojang.com/browse/MC-278435) Mushroom Fields biome doesn't generate pumpkin patches despite being specified in vanilla datapack
-   [MC-279123](https://bugs.mojang.com/browse/MC-279123) Some strings that reference Minecraft Realms use inconsistent or missing verb forms
-   [MC-279153](https://bugs.mojang.com/browse/MC-279153) Some strings that mention the base values of attributes are missing articles
-   [MC-279173](https://bugs.mojang.com/browse/MC-279173) The "chat.disabled.invalid;;_;;command;;_;;signature" string is missing an article before the word "Command"
-   [MC-279174](https://bugs.mojang.com/browse/MC-279174) The "gamerule.spawnChunkRadius.description" string is missing an article before the word "Amount"
-   [MC-279175](https://bugs.mojang.com/browse/MC-279175) Some multiplayer disconnection strings are missing articles and demonstratives
-   [MC-279176](https://bugs.mojang.com/browse/MC-279176) The "gamerule.commandModificationBlockLimit.description" string is missing an article before the word "Number"
-   [MC-279212](https://bugs.mojang.com/browse/MC-279212) Some narration strings are missing articles and possessive determiners
-   [MC-295829](https://bugs.mojang.com/browse/MC-295829) Test instance block GUI uses "Batch" instead of "Environment"
-   [MC-298605](https://bugs.mojang.com/browse/MC-298605) When creating a Water World superflat world, the player spawns at the bottom of the sea
-   [MC-299105](https://bugs.mojang.com/browse/MC-299105) Tears and Lava Chicken music disc 'desc' translations are unused
-   [MC-300055](https://bugs.mojang.com/browse/MC-300055) You get the advancement Wax On for changing the pose of a Copper Golem Statue while holding Honeycomb
-   [MC-300088](https://bugs.mojang.com/browse/MC-300088) Items placed by a copper golem in a double chest do not update redstone comparators reading the right side of the double chest
-   [MC-300109](https://bugs.mojang.com/browse/MC-300109) Lightning bolt does not remove oxidation from the lightning rod
-   [MC-300169](https://bugs.mojang.com/browse/MC-300169) The CustomName tag of a copper golem statue is not kept when mined
-   [MC-300192](https://bugs.mojang.com/browse/MC-300192) No darker trim for copper
-   [MC-300201](https://bugs.mojang.com/browse/MC-300201) Breaking a copper golem statue with a pose does not retain its pose
-   [MC-300416](https://bugs.mojang.com/browse/MC-300416) Copper golems' pathfinding to chests is biased to northwest
-   [MC-300558](https://bugs.mojang.com/browse/MC-300558) Copper golems can open locked chests without an appropriate key item
-   [MC-300729](https://bugs.mojang.com/browse/MC-300729) Incorrect or unusually obvious pixels on the weathered and exposed copper bars
-   [MC-300961](https://bugs.mojang.com/browse/MC-300961) The armor layer on husks no longer reflects their larger size compared to other humanoids
-   [MC-301099](https://bugs.mojang.com/browse/MC-301099) Copper chests worn on copper golems' heads are not visible
-   [MC-301250](https://bugs.mojang.com/browse/MC-301250) Upon exiting the gamemode switcher (F3+F4) while viewing the credits, the player still does not resume viewing the credits and instead remains in the end in a phantom state until they relog
-   [MC-301258](https://bugs.mojang.com/browse/MC-301258) Copper golem statues in the walking pose have a bit of their necks poking through their arms
-   [MC-301259](https://bugs.mojang.com/browse/MC-301259) Shelf align;;_;;items;;_;;to;;_;;bottom in block entity data doesn't work
-   [MC-301261](https://bugs.mojang.com/browse/MC-301261) The right arm of the copper golem statue isn't connected to its body
-   [MC-301276](https://bugs.mojang.com/browse/MC-301276) The hand animation no longer plays when shearing copper golems
-   [MC-301277](https://bugs.mojang.com/browse/MC-301277) Item frames with maps and paintings cannot share a corner anymore
-   [MC-301278](https://bugs.mojang.com/browse/MC-301278) The code of conduct screen renders carriage return characters
-   [MC-301283](https://bugs.mojang.com/browse/MC-301283) Sprint and sneak input can get 'stuck' if a screen is opened right as the input is pressed
-   [MC-301310](https://bugs.mojang.com/browse/MC-301310) The “Transfer Now” button in the realms menu renders outside the selection box
-   [MC-301312](https://bugs.mojang.com/browse/MC-301312) You cannot begin to use items while looking at copper golems
-   [MC-301324](https://bugs.mojang.com/browse/MC-301324) Sitting copper golem statue nose is rotated incorrectly
-   [MC-301330](https://bugs.mojang.com/browse/MC-301330) Malicious server can force client to remain stuck on code of conduct screen
-   [MC-301374](https://bugs.mojang.com/browse/MC-301374) Evokers can now spawn in Peaceful difficulty
-   [MC-301519](https://bugs.mojang.com/browse/MC-301519) Trying to use a command block while the "enableCommandBlocks" gamerule is set to false says "Command blocks are not enabled on this server" even if you're not on a server
-   [MC-301523](https://bugs.mojang.com/browse/MC-301523) Some gamerule description strings consist of inconsistent concluding punctuation, redundantly include “or not”, and are grammatically incorrect
-   [MC-301524](https://bugs.mojang.com/browse/MC-301524) The block breaking animation on banners now amplifies with each pattern applied
-   [MC-301546](https://bugs.mojang.com/browse/MC-301546) Bells do not display ringing animation when another bell is nearby
-   [MC-301577](https://bugs.mojang.com/browse/MC-301577) Block light sources produce shadows around themselves under skylight
-   [MC-301619](https://bugs.mojang.com/browse/MC-301619) Game mode translation key is used in the console message sent when a player tries to switch their game mode without permission

---

