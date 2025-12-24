package net.swordie.ms.handlers.social;

import net.swordie.ms.Server;
import net.swordie.ms.client.Client;
import net.swordie.ms.client.character.Char;
import net.swordie.ms.client.character.commands.*;
import net.swordie.ms.client.character.emoticons.EmoticonModule;
import net.swordie.ms.client.character.emoticons.EmoticonType;
import net.swordie.ms.client.character.items.Item;
import net.swordie.ms.client.friend.Friend;
import net.swordie.ms.connection.InPacket;
import net.swordie.ms.connection.packet.UserPacket;
import net.swordie.ms.connection.packet.field.FieldPacket;
import net.swordie.ms.constants.GameConstants;
import net.swordie.ms.enums.ChatUserType;
import net.swordie.ms.enums.GroupMessageType;
import net.swordie.ms.enums.InvType;
import net.swordie.ms.enums.WhisperType;
import net.swordie.ms.handlers.Handler;
import net.swordie.ms.handlers.header.InHeader;
import net.swordie.ms.loaders.ForbiddenWordsData;
import net.swordie.ms.loaders.StringData;
import net.swordie.ms.util.Util;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;

import static net.swordie.ms.enums.ChatType.Expedition;
import static net.swordie.ms.enums.InvType.EQUIP;
import static net.swordie.ms.enums.InvType.EQUIPPED;

public class ChatHandler {

    private static final Logger log = LogManager.getLogger();

    @Handler(op = InHeader.USER_CHAT)
    public static void handleUserChat(Client c, InPacket inPacket) {
        Char chr = c.getChr();
        inPacket.decodeInt();
        String msg = inPacket.decodeString();
        byte type = inPacket.decodeByte();

        int emoticonId = 0;
        if ((type & 0x8) != 0) {
            // Emoticon
            emoticonId = Integer.parseInt(msg.split(":")[1]);
            if (!GameConstants.isEmoticon(emoticonId)) {
                type = 3;
            } else {
                msg = "";
                type = 11;
            }
        } else {
            // Normal chat
            type = 3;
        }

        // Forbidden Words Check
        if (ForbiddenWordsData.isForbiddenChat(msg)) {
            chr.chatMessage("An error occurred. Try again later.");
            return;
        }
        // Forbidden Words Check

        if (msg.length() > GameConstants.MAX_CHAT_MESSAGE_LENGTH || !Util.isValidString(msg)) {
            chr.getUser().getOffenseManager().addOffense("Tried to say a message that is too long or invalid.", GameConstants.MAX_CHAT_MESSAGE_LENGTH, msg.length());
            return;
        }

        if (!"".equals(msg) && msg.charAt(0) == PlayerCommand.getPrefix()) {
            executePlayerCommand(c, chr, msg);
        } else if (!"".equals(msg) && msg.charAt(0) == AdminCommand.getPrefix()) {
            executeAdminCommand(c, chr, msg);
        } else {
            var chatType = chr.getUser().getAccountType().isGmOrAdmin()
                    ? ChatUserType.Admin
                    : ChatUserType.User;
            chr.getField().broadcastPacketByChr(chr, UserPacket.chat(chr, chatType, msg,
                    type, 0, c.getWorldId(), emoticonId, false));
        }
    }

    public static void executeAdminCommand(Client c, Char chr, String msg) {
        boolean executed = false;
        String command = msg.split(" ")[0].replace("!", "");
        for (Class clazz : AdminCommands.class.getClasses()) {
            Command cmd = (Command) clazz.getAnnotation(Command.class);
            boolean matchingCommand = false;
            for (String name : cmd.names()) {
                if (name.equalsIgnoreCase(command)
                        && chr.getUser().getAccountType().ordinal() >= cmd.requiredType().ordinal()) {
                    matchingCommand = true;
                    break;
                }
            }
            if (matchingCommand) {
                executed = true;
                String[] split = null;
                try {
                    AdminCommand adminCommand = (AdminCommand) clazz.getConstructor().newInstance();
                    Method method = clazz.getDeclaredMethod("execute", Char.class, String[].class);
                    split = msg.split(" ");
                    method.invoke(adminCommand, c.getChr(), split);
                } catch (NoSuchMethodException | IllegalAccessException | InvocationTargetException | InstantiationException e) {
                    chr.chatMessage("Exception: " + e.getCause().toString());
                    e.printStackTrace();
                }
            }
        }
        if (!executed) {
            chr.chatMessage(Expedition, "Unknown command \"" + command + "\"");
        }
    }

    public static void executePlayerCommand(Client c, Char chr, String msg) {
        boolean executed = false;
        String command = msg.split(" ")[0].replace("@", "");
        for (Class clazz : PlayerCommands.class.getClasses()) {
            Command cmd = (Command) clazz.getAnnotation(Command.class);
            boolean matchingCommand = false;
            for (String name : cmd.names()) {
                if (name.equalsIgnoreCase(command)
                        && chr.getUser().getAccountType().ordinal() >= cmd.requiredType().ordinal()) {
                    matchingCommand = true;
                    break;
                }
            }
            if (matchingCommand) {
                executed = true;
                String[] split = null;
                try {
                    PlayerCommand playerCommand = (PlayerCommand) clazz.getConstructor().newInstance();
                    Method method = clazz.getDeclaredMethod("execute", Char.class, String[].class);
                    split = msg.split(" ");
                    method.invoke(playerCommand, c.getChr(), split);
                } catch (NoSuchMethodException | IllegalAccessException | InvocationTargetException | InstantiationException e) {
                    chr.chatMessage("Something went wrong while executing the command.");
                    if (Server.DEBUG) {
                        e.printStackTrace();
                    }
                }
            }
        }
        if (!executed) {
            chr.chatMessage(Expedition, "Unknown command \"" + command + "\"");
        }
    }

    @Handler(op = InHeader.USER_ITEM_LINKED_CHAT)
    public static void handleUserItemLinkedChat(Char chr, InPacket inPacket) {
        inPacket.decodeInt(); // tick
        String msg = inPacket.decodeString();

        // Forbidden Words Check
        if (ForbiddenWordsData.isForbiddenChat(msg)) {
            chr.chatMessage("An error occurred. Try again later.");
            return;
        }
        // Forbidden Words Check

        byte type = inPacket.decodeByte();
        var subType = inPacket.decodeInt();

        if (subType == 1) {
            InvType invType = InvType.getInvTypeByVal(inPacket.decodeInt());
            int pos = inPacket.decodeInt();
            if (invType == EQUIP && pos < 0) {
                invType = EQUIPPED;
                pos = -pos;
            }

            if (msg.length() > GameConstants.MAX_CHAT_MESSAGE_LENGTH || !Util.isValidString(msg)) {
                chr.getUser().getOffenseManager().addOffense("Tried to say a message that is too long or invalid.", GameConstants.MAX_CHAT_MESSAGE_LENGTH, msg.length());
                return;
            }

            Item item = chr.getInventoryByType(invType).getItemBySlot(pos);
            if (item == null) {
                chr.chatMessage("Could not find that item.");
                return;
            }

            var itemName = StringData.getItemStringById(item.getItemId());
            chr.getField().broadcastPacket(UserPacket.itemLinkedChat(chr, ChatUserType.User, msg,
                    type, 0, chr.getClient().getWorldId(), item, false, itemName));
        } else {
            chr.chatMessage("This is currently not supported.");
        }
    }

    @Handler(op = InHeader.USER_AD_BOARD_CLOSE)
    public static void handleAdBoardClose(Char chr, InPacket inPacket) {
        chr.setADBoardRemoteMsg(null);
        chr.getField().broadcastPacket(UserPacket.adBoard(chr));
    }

    @Handler(op = InHeader.WHISPER)
    public static void handleWhisper(Client c, InPacket inPacket) {
        Char chr = c.getChr();
        byte type = inPacket.decodeByte();
        inPacket.decodeInt(); // tick
        String destName = inPacket.decodeString();
        Char dest = c.getWorld().getCharByName(destName);

        if (dest == null) {
            chr.write(FieldPacket.whisper(WhisperType.SaveName, null, destName, false, null, ""));
            return;
        }

        if (dest.hasChrBlacklisted(chr.getId())) {
            chr.chatMessage("You cannot whisper this person.");
            return;
        }

        switch (type) {
            case 5: // /find command
                int fieldId = dest.getField().getId();
                int channel = dest.getChannel();
                if (channel != chr.getChannel()) {
                    chr.chatMessage("%s is in channel %s-%d.", dest.getName(), dest.getWorld().getName(), channel);
                } else {
                    String fieldString = StringData.getMapStringById(fieldId);
                    if (fieldString == null) {
                        fieldString = "Unknown field.";
                    }
                    chr.chatMessage("%s is at %s.", dest.getName(), fieldString);
                }
                break;
            case 68:
                break;
            case 6: // whisper
                String msg = inPacket.decodeString();

                // Forbidden Words Check
                if (ForbiddenWordsData.isForbiddenChat(msg)) {
                    chr.chatMessage("An error occurred. Try again later.");
                    return;
                }
                // Forbidden Words Check

                if (msg.length() > GameConstants.MAX_CHAT_MESSAGE_LENGTH || !Util.isValidString(msg)) {
                    chr.getUser().getOffenseManager().addOffense("Tried to say a message that is too long or invalid.", GameConstants.MAX_CHAT_MESSAGE_LENGTH, msg.length());
                    return;
                }

                // dest.write(FieldPacket.whisper(chr, (byte) (c.getChannel() - 1), false, msg, false));
                // chr.chatMessage(Whisper, String.format("%s<< %s", dest.getName(), msg));
                dest.write(FieldPacket.whisper(WhisperType.In, chr, msg, true, null, "")); // send msg to destination chr
                chr.write(FieldPacket.whisper(WhisperType.SaveName, dest, destName, true, null, "")); // save name for character
                break;
        }

    }

    @Handler(op = InHeader.ITEM_LINKED_WHISPER)
    public static void handleItemLinkedWhisper(Char chr, InPacket inPacket) {
        byte type = inPacket.decodeByte();
        inPacket.decodeInt(); // tick
        String destName = inPacket.decodeString();
        Char dest = chr.getWorld().getCharByName(destName);
        if (dest == null) {
            chr.write(FieldPacket.whisper(WhisperType.SaveName, null, destName, false, null, ""));
            return;
        }

        if (dest.hasChrBlacklisted(chr.getId())) {
            chr.chatMessage("You cannot whisper this person.");
            return;
        }

        switch (type) {
            case 6:
                var subType = inPacket.decodeInt();
                if (subType != 1) {
                    chr.chatMessage("This is not supported yet.");
                    return;
                }

                var invType = InvType.getInvTypeByVal(inPacket.decodeInt());
                var position = inPacket.decodeInt();
                if (invType.equals(EQUIP) && position <= 0) {
                    invType = EQUIPPED;
                    position = -position;
                }
                var itemName = inPacket.decodeString();
                var msg = inPacket.decodeString();

                // Forbidden Words Check
                if (ForbiddenWordsData.isForbiddenChat(msg)) {
                    chr.chatMessage("An error occurred. Try again later.");
                    return;
                }
                // Forbidden Words Check

                Item item = chr.getInventoryByType(invType).getItemBySlot(position);
                if (item == null) {
                    return;
                }

                dest.write(FieldPacket.whisper(WhisperType.In, chr, msg, true, item, itemName)); // send msg to destination chr
                chr.write(FieldPacket.whisper(WhisperType.SaveName, dest, destName, true, null, "")); // save name for character
                break;
        }
    }

    @Handler(op = InHeader.GROUP_MESSAGE)
    public static void handleGroupMessage(Char chr, InPacket inPacket) {
        byte type = inPacket.decodeByte(); // party = 1, guild = 2, alliance = 3
        var recepientSize = inPacket.decodeShort();
        for (int i = 0; i < recepientSize; i++) {
            inPacket.decodeInt(); // list of charids to send message to
        }
        String msg = inPacket.decodeString();

        // Forbidden Words Check
        if (ForbiddenWordsData.isForbiddenChat(msg)) {
            chr.chatMessage("An error occurred. Try again later.");
            return;
        }
        // Forbidden Words Check

        if (msg.length() > GameConstants.MAX_CHAT_MESSAGE_LENGTH || !Util.isValidString(msg)) {
            chr.getUser().getOffenseManager().addOffense("Tried to say a message that is too long or invalid.", GameConstants.MAX_CHAT_MESSAGE_LENGTH, msg.length());
            return;
        }

        switch (type) {
            case 0: // buddy
                for (Friend friend : chr.getOnlineFriends()) {
                    friend.write(FieldPacket.groupMessage(GroupMessageType.Buddy, chr, msg));
                }
                break;
            case 1: // party
                if (chr.getParty() != null) {
                    chr.getParty().broadcastByChr(chr, FieldPacket.groupMessage(GroupMessageType.Party, chr, msg), chr);
                }
                break;
            case 2: // guild
                if (chr.getGuild() != null) {
                    chr.getGuild().broadcastByChr(chr, FieldPacket.groupMessage(GroupMessageType.Guild, chr, msg), chr);
                }
                break;
            case 3: // alliance
                if (chr.getGuild() != null && chr.getGuild().getAlliance() != null) {
                    chr.getGuild().getAlliance().broadcastByChr(chr, FieldPacket.groupMessage(GroupMessageType.Alliance, chr, msg), chr);
                }
                break;
            default:
                log.error("Unhandled group message type " + type);
        }
    }

    @Handler(op = InHeader.ITEM_LINKED_GROUP_MESSAGE)
    public static void handleItemLinkedGroupMessage(Char chr, InPacket inPacket) {
        byte type = inPacket.decodeByte(); // party = 1, alliance = 3
        var recepientSize = inPacket.decodeShort();
        for (int i = 0; i < recepientSize; i++) {
            inPacket.decodeInt(); // list of charids to send message to
        }
        String msg = inPacket.decodeString();

        // Forbidden Words Check
        if (ForbiddenWordsData.isForbiddenChat(msg)) {
            chr.chatMessage("An error occurred. Try again later.");
            return;
        }

        var subType = inPacket.decodeInt();
        if (subType != 1) {
            chr.chatMessage("This is not supported yet.");
            return;
        }

        InvType invType = InvType.getInvTypeByVal(inPacket.decodeInt());
        int pos = inPacket.decodeInt();
        if (invType == EQUIP && pos < 0) {
            invType = EQUIPPED;
            pos = -pos;
        }

        if (msg.length() > GameConstants.MAX_CHAT_MESSAGE_LENGTH || !Util.isValidString(msg)) {
            chr.getUser().getOffenseManager().addOffense("Tried to say a message that is too long or invalid.", GameConstants.MAX_CHAT_MESSAGE_LENGTH, msg.length());
            return;
        }

        Item item = chr.getInventoryByType(invType).getItemBySlot(pos);
        if (item == null) {
            chr.chatMessage("Could not find that item.");
            return;
        }

        var itemName = StringData.getItemStringById(item.getItemId());
        if (itemName == null) {
            itemName = "";
        }

        switch (type) {
            case 0: // buddy
                for (Friend friend : chr.getOnlineFriends()) {
                    friend.write(FieldPacket.itemLinkedGroupMessage(GroupMessageType.Buddy, chr, msg, item, itemName));
                }
                break;
            case 1: // party
                if (chr.getParty() != null) {
                    chr.getParty().broadcastByChr(chr, FieldPacket.itemLinkedGroupMessage(GroupMessageType.Party, chr, msg, item, itemName), chr);
                }
                break;
            case 2: // guild
                if (chr.getGuild() != null) {
                    chr.getGuild().broadcastByChr(chr, FieldPacket.itemLinkedGroupMessage(GroupMessageType.Guild, chr, msg, item, itemName), chr);
                }
                break;
            case 3: // alliance
                if (chr.getGuild() != null && chr.getGuild().getAlliance() != null) {
                    chr.getGuild().getAlliance().broadcastByChr(chr, FieldPacket.itemLinkedGroupMessage(GroupMessageType.Alliance, chr, msg, item, itemName), chr);
                }
                break;
            default:
                log.error("Unhandled group message type " + type);
        }
    }

    @Handler(op = InHeader.EMOTICON_REQUEST)
    public static void emoticonShortcutRequest(Char chr, InPacket inPacket) {
        int typeVal = inPacket.decodeByte();
        EmoticonType type = EmoticonType.getByVal(typeVal);
        if (type == null) {
            log.error("Unhandled Emoticon Request: " + typeVal);
            return;
        }
        switch (type) {
            case AddEmoticon: // Add Emoticon to favourites
                int emoticonId = inPacket.decodeInt();
                EmoticonModule.addEmoticon(chr, emoticonId);
                break;
            case RemoveEmoticon:
                emoticonId = inPacket.decodeInt();
                EmoticonModule.removeEmoticon(chr, emoticonId);
                break;
            case MoveEmoticon:
                short fromPos = inPacket.decodeShort();
                short toPos = inPacket.decodeShort();
                EmoticonModule.moveEmoticon(chr, fromPos, toPos);
                break;

            case AddEmoticonShortcut:
                emoticonId = inPacket.decodeInt();
                String shortCut = inPacket.decodeString();
                EmoticonModule.addEmoticonShortcut(chr, emoticonId, shortCut);
                break;
            case RemoveEmoticonShortcut:
                fromPos = inPacket.decodeShort();
                EmoticonModule.removeEmoticonShortcut(chr, fromPos);
                break;
            case MoveEmoticonShortcut:
                fromPos = inPacket.decodeShort();
                toPos = inPacket.decodeShort();
                EmoticonModule.moveEmoticonShortcut(chr, fromPos, toPos);
                break;
            default:
                log.error("Unhandled Emoticon Request: " + typeVal);
                break;
        }
    }
}
