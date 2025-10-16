# Minecraft: Java Edition 1.19.1

We're now releasing 1.19.1 for Minecraft: Java Edition. This release adds Allay duplication and new Player Safety functionality.

## Features

-   Added Allay Duplication
-   Tweaked Sculk Catalysts
-   Added Chat Trust status
-   New Options for Chat Preview
-   Added Player Reporting

### Allay

-   Allays will dance to a Record playing in a Jukebox
-   If the Allay is handed an Amethyst Shard while dancing it will duplicate
    -   Duplication has a 5-minute cooldown

### Sculk Catalyst

-   Sculk Catalysts will now drop 5 XP instead of 20 XP

### Chat

-   Moved the chat scrollbar to the right
-   When typing a message, the signing status of the displayed chat message is shown with a colored indicator
    -   The indicator will either appear to the left of the chat input field, or to the left of the chat preview if chat preview is being used
    -   The indicator will be blue when the displayed message is signed
    -   The indicator will be orange when Chat Preview is enabled and a preview is waiting to be signed
-   The background of the chat preview will also display slightly faded when a preview is waiting to be signed
-   Added a warning toast when connecting to a server that doesn't enforce secure chat
-   The list of players on the Social Interactions screen now places entries for players with recently seen messages at the top of the list

**Chat Trust Status**

-   Messages that are not signed with the Secure Chat system, or have been tampered with by the server will now be marked
    -   Messages with missing or invalid signatures are marked as "Not Secure"
    -   Messages that are detected as modified are marked as "Modified"
-   The trust status of messages are displayed with both a colored indicator and an icon
    -   The colored indicator is always visible
    -   The icon is only visible when the chat screen is open
-   Hovering over the icon will provide more information about the trust status
    -   For modified messages, the original secure text will also be displayed in the tooltip
-   System messages (non-player chat, such as command output) are displayed with a gray color indicator

**Chat Preview**

-   Added "When Sending" Chat Preview option for updating chat previews only when attempting to send a message
    -   To confirm sending a message, a second hit of the Enter/Return key is required
    -   The previous "ON" setting has been renamed to "While Typing"
-   In "While Typing" mode, the chat preview will no longer display previews if the message has not been modified by the server
-   Chat Preview is now enabled in singleplayer, and will display when using commands that have selector substitution such as `/say`
-   Previewed hover events and click events are highlighted with a solid background

### Player Reporting

It is now possible to report a player for sending abusive messages in the game chat. A reporter is required to select the individual chat messages that contain the objectionable content, as well as the category of the report, this is to provide the best context for our moderation team to take action. This is accessed via the social interactions screen.

-   Multiple chat messages can be selected for reporting
    -   Additional chat messages around this selection will also be used to provide our moderation team with further context
-   The category of the report can be selected from a list of Report Categories
    -   The Report Categories screen has a "Learn About Reporting" button that links to a help article
-   Additional comments can be entered to provide more details and information regarding the report

For more information, see this [article about Player Reporting](https://www.minecraft.net/en-us/article/addressing-player-chat-reporting-tool) and our [Reporting FAQ](https://help.minecraft.net/hc/en-us/articles/7317376541197).

### Suspensions & Bans

-   The game will now show a notice screen on startup if you have been suspended from online play
    -   The reason for the suspension is shown as well as how long it is effective for

### Realms

-   A message that has been filtered by the Java Realms Profanity Filter will now be marked with a yellow marker
-   Players will be notified if a chat message they have sent has been fully filtered for one or more receiving players on the Realm

## Technical

-   The chat input box will no longer apply to custom font glyphs with negative advances, or glyphs with advances greater than 32

### Chat Types

-   Chat types added to the `chat_types` registry are now only used for player chat, and not system messages
    -   The `system` and `game_info` chat types have been removed
-   Chat types have been simplified and are now only required to define `chat` and `narration` decorations
    -   Chat types no longer support overlays
    -   A system message should instead be used to display overlays
-   The `msg_command` chat type has been split apart into `msg_command_incoming` and `msg_command_outgoing`
-   The `team_msg_command` chat type has been split apart into `team_msg_command_incoming` and `team_msg_command_outgoing`
-   The `team_name` chat type parameter has been renamed to `target`
    -   This chat type parameter is now used by `msg_command_outgoing`

### Components

-   The `run_command` click event for text components no longer supports sending chat messages directly
    -   Only commands are supported
    -   This means values now always need to be `/`;;-;;prefixed
    -   Commands such as `/say` that produce a signed player chat message are not allowed
        -   `/tellraw` should be used instead

### Game Events

**Added Game Events**

-   `jukebox_play`
-   `jukebox_stop_play`

### Multiplayer Secure Chat Signing

-   The order of chat messages are now cryptographically verified
    -   This is used for validating the context of chat messages for Player Reports

### Server

-   `enforce-secure-profile` is now defaulted to `true` for dedicated servers
-   Insecure chat messages logged in the server are prefixed with a `[Not Secure]` tag
-   Custom servers can set their own auto-completion options for regular chat via a new network packet
-   Custom servers can hide player chat messages from display via a new network packet
    -   This does not delete player chat messages from chat logs

## Fixed Bugs in 1.19.1

-   More than 50 bugs were fixed in this release. View the [list on the issue tracker](https://bugs.mojang.com/issues/?filter=27220).