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

1.19 release candidate 2 is now available which fixes a crash.

---

We're now releasing the first (and hopefully only) release candidate for The Wild Update. If there are no major issues following this release, no further changes will be done before the full release.

Happy mining!

## Fixed Bugs in 1.19 Release Candidate 1

-   [MC-252398](https://bugs.mojang.com/browse/MC-252398) Darkness effect fading in death screen causes subtle flashing

---

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

