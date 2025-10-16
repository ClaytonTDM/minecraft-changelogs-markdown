# Minecraft 1.19.3 Release Candidate 2

We're now releasing the second (and hopefully last) release candidate for Minecraft 1.19.3, fixing a few critical bugs. If there are no major issues following this release candidate, no further changes will be done before the full release.

With this release candidate, we are reverting a behavior change for translation strings due to a prevalent but unsupported use case. Expect this behavior to be changed in the future to provide a supported alternative.

Happy mining!

## Fixed bugs in 1.19.3 Release Candidate 2

-   [MC-258256](https://bugs.mojang.com/browse/MC-258256) Cannot join a LAN world while offline
-   [MC-258251](https://bugs.mojang.com/browse/MC-258251) Slots (like %s) in translations no longer ignore missing elements in "with"

---

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

We're now releasing pre-release 3 for Minecraft 1.19.3 with more bug fixes. Happy mining!

## Fixed bugs in 1.19.3 Pre-release 3

-   [MC-108597](https://bugs.mojang.com/browse/MC-108597): Shulker box still plays the close sound, even if it is destroyed or replaced
-   [MC-165686](https://bugs.mojang.com/browse/MC-165686): Knowledge book texture in the crafting UI hasn't been updated
-   [MC-177141](https://bugs.mojang.com/browse/MC-177141): Cleric working subtitle is "Brewing Stand bubbles" instead of "Cleric works"
-   [MC-194501](https://bugs.mojang.com/browse/MC-194501): IllegalArgumentException (Cannot set property) when using a block without the "axis" property in fancy;;_;;tree;;_;;placer
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
-   [MC-257843](https://bugs.mojang.com/browse/MC-257843): note;;_;;block;;_;;sound data is lost when breaking a player head
-   [MC-257861](https://bugs.mojang.com/browse/MC-257861): Villagers and Piglin no longer seek out Items

---

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
-   [MC-256481](https://bugs.mojang.com/browse/MC-256481) minecraft.used:minecraft.BOOK;;_;;TYPE doesn't increase when placing books onto chiseled bookshelves
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
-   [MC-257618](https://bugs.mojang.com/browse/MC-257618) The word "pair" uses the incorrect verb form within the "telemetry.event.world;;_;;loaded.description" string
-   [MC-257619](https://bugs.mojang.com/browse/MC-257619) Baby piglins and zombified piglins take damage when they hit their head on a block
-   [MC-257625](https://bugs.mojang.com/browse/MC-257625) Piglin Head placed on noteblock play the piglin angry sound instead of the piglin ambient sound
-   [MC-257648](https://bugs.mojang.com/browse/MC-257648) The fillbiome command can result in flickering biome colors
-   [MC-257658](https://bugs.mojang.com/browse/MC-257658) Sculk sensors are not activated upon taking books from chiseled bookshelves
-   [MC-257663](https://bugs.mojang.com/browse/MC-257663) The "Hide messages" button in the social interactions menu can now no longer be toggled due to it being executed twice upon being pressed

---

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

We're now releasing the first (and hopefully only) release candidate for Minecraft 1.19.2. This release candidate fixes a critical issue related to server connectivity with secure chat. If there are no major issues following this release, no further changes will be done before the full release.

## Feedback

Report bugs here: [Minecraft issue tracker!](https://bugs.mojang.com/)

Want to give feedback?

-   Head over to our [feedback website](https://aka.ms/snapshotfeedback) or come chat with us about it on the [official Minecraft Discord](https://discordapp.com/invite/minecraft).

---

We are now releasing Release Candidate 3 for Minecraft 1.19.1. We still expect to release the full version of 1.19.1 this week.

## Technical Changes in 1.19.1 Release Candidate 3

-   The chat input box will no longer apply custom font glyphs with negative advances, or glyphs with advances greater than 32

## Bugs fixed in 1.19.1 Release Candidate 3

-   [MC-254529](https://bugs.mojang.com/browse/MC-254529) Warning and information toasts can overlap one another

---

We are now releasing Release Candidate 2 for Minecraft 1.19.1. If no critical issues are found, we expect to release the full version next week.

## Changes in 1.19.1 Release Candidate 2

-   Tweaked the names of the chat preview options
-   Added a warning toast when connecting to a server that doesn't enforce secure chat

## Bugs fixed in 1.19.1 Release Candidate 2

-   [MC-254355](https://bugs.mojang.com/browse/MC-254355) Key binds set to mouse buttons of number greater than 8 switch over by 1 when the game starts
-   [MC-254405](https://bugs.mojang.com/browse/MC-254405) Debug messages aren't prefixed with gray color indicators

---

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
-   [MC-252987](https://bugs.mojang.com/browse/MC-252987) Illegal character ';;\;;n' in text component clickEvent
-   [MC-253114](https://bugs.mojang.com/browse/MC-253114) Selection boxes within the "Select Chat Messages to Report" menu don't disappear when deselecting fields after reentering the menu
-   [MC-253188](https://bugs.mojang.com/browse/MC-253188) Selection boxes within the "Select Chat Messages to Report" menu differ in size ever so slightly depending on how they're selected
-   [MC-253225](https://bugs.mojang.com/browse/MC-253225) Selection boxes of fields within player reporting menu lists don't contain white outlines when selected using the TAB key
-   [MC-253227](https://bugs.mojang.com/browse/MC-253227) Players can only be reported using the reporting system if they're present within the world
-   [MC-253336](https://bugs.mojang.com/browse/MC-253336) Using the eye of ender "crashes" game in the seed: -3721742095548798177
-   [MC-253422](https://bugs.mojang.com/browse/MC-253422) The selection of the "Please report breaches of our Community Standards" text within the "Select Report Category" menu is slightly confusing due to the words "Community Standards" being underlined by default

---

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

