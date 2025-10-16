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
-   [MC-252987](https://bugs.mojang.com/browse/MC-252987) Illegal character '\\n' in text component clickEvent
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

