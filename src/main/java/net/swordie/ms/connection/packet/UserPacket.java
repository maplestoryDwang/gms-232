package net.swordie.ms.connection.packet;

import net.swordie.ms.client.character.Char;
import net.swordie.ms.client.character.items.Item;
import net.swordie.ms.client.character.modules.ChatModule;
import net.swordie.ms.client.character.skills.jupiterthunder.JupiterThunder;
import net.swordie.ms.client.character.skills.jupiterthunder.JupiterThunderUpdateInfo;
import net.swordie.ms.client.social.miniroom.gameroom.MiniGameRoom;
import net.swordie.ms.connection.OutPacket;
import net.swordie.ms.enums.ChatUserType;
import net.swordie.ms.enums.ProgressMessageColourType;
import net.swordie.ms.enums.ProgressMessageFontType;
import net.swordie.ms.handlers.PsychicLock;
import net.swordie.ms.handlers.header.OutHeader;
import net.swordie.ms.life.ImmovableObj;
import net.swordie.ms.util.Position;

import java.util.Collections;
import java.util.List;

/**
 * Created on 2/3/2018.
 */
public class UserPacket {

    /**
     * Creates a chat packet.
     * @param chr the Char
     * @param type the type of the chat
     * @param msg the message that the Char said
     * @param displayType what to show (0 = nothing, 0x1 = Chat, 0x2 = Balloon, 0x8 = Emoticon)
     * @param idk idk
     * @param worldID world id of the Char
     * @return the created outpacket
     */
    public static OutPacket chat(Char chr, ChatUserType type, String msg, int displayType, int idk, int worldID, int emoticonId, boolean remote) {
        OutPacket outPacket = new OutPacket(remote ? OutHeader.REMOTE_CHAT : OutHeader.CHAT);

        outPacket.encodeInt(chr.getId());
        outPacket.encodeByte(type.getVal());
        outPacket.encodeString(msg);
        chr.encodeChatInfo(outPacket, msg);
        outPacket.encodeByte(displayType);
        outPacket.encodeByte(idk);
        outPacket.encodeByte(worldID);
        if ((displayType & 0x8) != 0) {
            outPacket.encodeInt(emoticonId);
        }
        if (remote) {
            outPacket.encodeString(chr.getName());
        }
        return outPacket;
    }

    public static OutPacket itemLinkedChat(Char chr, ChatUserType type, String msg, int onlyBalloon, int idk,
                                           int worldID, Item item, boolean remote, String itemName) {
        OutPacket outPacket = new OutPacket(remote ? OutHeader.REMOTE_ITEM_LINKED_CHAT : OutHeader.ITEM_LINKED_CHAT);

        outPacket.encodeInt(chr.getId());

        outPacket.encodeByte(type.getVal());
        outPacket.encodeString(msg);
        chr.encodeChatInfo(outPacket, msg);

        outPacket.encodeByte(onlyBalloon);
        outPacket.encodeByte(idk);
        outPacket.encodeByte(worldID);

        ChatModule.encodeLinkedMessage(outPacket, item, ChatModule.LinkedMessageType.Item);

        return outPacket;
    }

    public static OutPacket adBoard(Char chr) {
        OutPacket outPacket = new OutPacket(OutHeader.AD_BOARD);

        outPacket.encodeInt(chr.getId());
        outPacket.encodeByte(chr.getADBoardRemoteMsg() != null);
        if (chr.getADBoardRemoteMsg() != null) {
            outPacket.encodeString(chr.getADBoardRemoteMsg());
        }

        return outPacket;
    }

    public static OutPacket setDamageSkin(Char chr) {
        OutPacket outPacket = new OutPacket(OutHeader.SET_DAMAGE_SKIN);

        outPacket.encodeInt(chr.getId());
        outPacket.encodeInt(chr.getDamageSkin().getDamageSkinID());
        outPacket.encodeString("");
        outPacket.encodeString("");

        return outPacket;
    }

    public static OutPacket setPremiumDamageSkin(Char chr) {
        OutPacket outPacket = new OutPacket(OutHeader.SET_PREMIUM_DAMAGE_SKIN);

        outPacket.encodeInt(chr.getId());
        outPacket.encodeInt(chr.getPremiumDamageSkin().getDamageSkinID());
        outPacket.encodeString("");
        outPacket.encodeString("");

        return outPacket;
    }

    public static OutPacket showItemSkillSocketUpgradeEffect(int charID, boolean success) {
        OutPacket outPacket = new OutPacket(OutHeader.SHOW_ITEM_SKILL_SOCKET_UPGRADE_EFFECT);

        outPacket.encodeInt(charID);
        outPacket.encodeByte(success);

        return outPacket;
    }

    public static OutPacket showItemSkillOptionUpgradeEffect(int charID, boolean success, boolean boom, int ePos, int uPos) {
        OutPacket outPacket = new OutPacket(OutHeader.SHOW_ITEM_SKILL_OPTION_UPGRADE_EFFECT);

        outPacket.encodeInt(charID);
        outPacket.encodeByte(success);
        outPacket.encodeByte(boom);
        outPacket.encodeInt(ePos); // new
        outPacket.encodeInt(uPos); // new

        return outPacket;
    }

    public static OutPacket SetSoulEffect(int charID, boolean set) {
        OutPacket outPacket = new OutPacket(OutHeader.SET_SOUL_EFFECT);

        outPacket.encodeInt(charID);
        outPacket.encodeByte(set);

        return outPacket;
    }

    public static OutPacket setGachaponEffect(Char chr) {
        OutPacket outPacket = new OutPacket(OutHeader.GACHAPON_EFFECT);

        outPacket.encodeInt(chr.getId());

        return outPacket;
    }
    
    public static OutPacket scriptProgressMessage(String string) {
        OutPacket outPacket = new OutPacket(OutHeader.SCRIPT_PROGRESS_MESSAGE);

        outPacket.encodeString(string);

        return outPacket;
    }

    public static OutPacket progressMessageFont(ProgressMessageFontType fontNameType, int fontSize, ProgressMessageColourType fontColorType, int fadeOutDelay, String message) {
        OutPacket outPacket = new OutPacket(OutHeader.PROGRESS_MESSAGE_FONT);
        
        outPacket.encodeInt(fontNameType.getVal());
        outPacket.encodeInt(fontSize);
        outPacket.encodeInt(fontColorType.getVal());
        outPacket.encodeInt(fadeOutDelay);
        outPacket.encodeByte(0); // new 209
        outPacket.encodeString(message);
 
        return outPacket;
    }
    
    public static OutPacket effect(Effect effect) {
        OutPacket outPacket = new OutPacket(OutHeader.EFFECT);

        effect.encode(outPacket);

        return outPacket;
    }

    public static OutPacket showItemMemorialEffect(int charID, boolean success, int itemID, int ePos, int uPos) {
        OutPacket outPacket = new OutPacket(OutHeader.SHOW_ITEM_MEMORIAL_EFFECT);

        outPacket.encodeInt(charID);
        outPacket.encodeByte(success);
        outPacket.encodeInt(itemID);
        outPacket.encodeInt(ePos);
        outPacket.encodeInt(uPos);

        return outPacket;
    }

    public static OutPacket createPsychicLock(int charID, PsychicLock pl) {
        OutPacket outPacket = new OutPacket(OutHeader.CREATE_PSYCHIC_LOCK);

        outPacket.encodeInt(charID);
        outPacket.encodeByte(pl.success);
        pl.encode(outPacket);


        return outPacket;
    }

    public static OutPacket followCharacter(int driverChrId, boolean transferField, Position position) {
        OutPacket outPacket = new OutPacket(OutHeader.FOLLOW_CHARACTER);

        outPacket.encodeInt(driverChrId);
        if (driverChrId < 0) {
            outPacket.encodeByte(transferField);
            if (transferField) {
                outPacket.encodePositionInt(position);
            }
        }

        return outPacket;
    }

    public static OutPacket userHitByCounter(int charID, int damage) {
        OutPacket outPacket = new OutPacket(OutHeader.USER_HIT_BY_COUNTER);

        outPacket.encodeInt(charID);
        outPacket.encodeInt(damage);

        return outPacket;
    }

    public static OutPacket shootObjectExplodeResult(int chrId, List<Integer> shootObjectIdList) {
        OutPacket outPacket = new OutPacket(OutHeader.SHOOT_OBJECT_EXPLODE_RESULT);

        outPacket.encodeInt(chrId);
        outPacket.encodeInt(shootObjectIdList.size());
        for (int shootObjId : shootObjectIdList) {
            outPacket.encodeInt(shootObjId);
        }

        return outPacket;
    }

    public static OutPacket hoYoungShapeshiftResult(int chrId, boolean show) {
        OutPacket outPacket = new OutPacket(OutHeader.HO_YOUNG_SHAPESHIFT_RESULT);

        outPacket.encodeInt(chrId);
        outPacket.encodeByte(show);

        return outPacket;
    }

    public static OutPacket immovableObjCreated(int chrId, ImmovableObj immovableObj) {
        return immovableObjCreated(chrId, Collections.singletonList(immovableObj));
    }

    public static OutPacket immovableObjCreated(int chrId, List<ImmovableObj> immovableObjs) {
        OutPacket outPacket = new OutPacket(OutHeader.IMMOVABLE_OBJ_CREATED);

        outPacket.encodeInt(chrId);

        outPacket.encodeInt(immovableObjs.size()); // loop size
        for (var immovableObj : immovableObjs) {
            outPacket.encode(immovableObj);
        }

        return outPacket;
    }

    public static OutPacket immovableObjRemoved(int chrId, ImmovableObj immovableObj) {
        return immovableObjRemoved(chrId, Collections.singletonList(immovableObj));
    }

    public static OutPacket immovableObjRemoved(int chrId, List<ImmovableObj> immovableObjs) {
        OutPacket outPacket = new OutPacket(OutHeader.IMMOVABLE_OBJ_REMOVED);

        outPacket.encodeInt(chrId);
        outPacket.encodeInt(immovableObjs.size());
        for (var immovableObj : immovableObjs) {
            outPacket.encodeInt(immovableObj.getObjectId());
        }

        return outPacket;
    }

    public static OutPacket jupiterThunderCreated(Char chr, JupiterThunder jupiterThunder) {
        return jupiterThunderCreated(chr, Collections.singletonList(jupiterThunder));
    }

    public static OutPacket jupiterThunderCreated(Char chr, List<JupiterThunder> jupiterThunderList) {
        OutPacket outPacket = new OutPacket(OutHeader.JUPITER_THUNDER_CREATED);

        outPacket.encodeInt(chr.getId());

        outPacket.encodeInt(jupiterThunderList.size()); // loop size
        for (var jt : jupiterThunderList) {
            outPacket.encode(jt);
        }

        return outPacket;
    }

    public static OutPacket jupiterThunderRemoved(JupiterThunder jupiterThunder) {
        OutPacket outPacket = new OutPacket(OutHeader.JUPITER_THUNDER_REMOVED);

        outPacket.encodeInt(jupiterThunder.getOwnerId());
        var size = 1;
        outPacket.encodeInt(size); // size
        for (var i = 0; i < size; i++) {
            outPacket.encodeInt(jupiterThunder.getObjectId());
        }

        return outPacket;
    }

    public static OutPacket jupiterThunderUpdateResult(JupiterThunder jupiterThunder, JupiterThunderUpdateInfo jtui) {
        OutPacket outPacket = new OutPacket(OutHeader.JUPITER_THUNDER_UPDATE_RESULT);

        outPacket.encodeInt(jupiterThunder.getOwnerId());
        var size = 1;
        outPacket.encodeInt(size); // size
        for (var i = 0; i < size; i++) {
            outPacket.encode(jtui);
        }

        return outPacket;
    }

    public static OutPacket miniRoomBalloon(Char chr, MiniGameRoom miniRoom) {
        OutPacket outPacket = new OutPacket(OutHeader.MINI_ROOM_BALLOON);

        outPacket.encodeInt(chr.getId());

        if (miniRoom == null) {
            outPacket.encodeByte(0);
        } else {
            outPacket.encodeByte(miniRoom.getMiniRoomType().getVal());
            outPacket.encodeInt(chr.getId()); // MiniRoomSN
            outPacket.encodeString(miniRoom.getRoomName());
            outPacket.encodeByte(miniRoom.isPrivate()); // bPrivate
            outPacket.encodeByte(miniRoom.getMiniGameKind().ordinal()); // nGameKind
            outPacket.encodeByte(miniRoom.getChrs().size()); // nCurUsers
            outPacket.encodeByte(miniRoom.getMaxChars()); // nMaxUsers
            outPacket.encodeByte(miniRoom.isStarted()); // bGameOn

            outPacket.encodeString(miniRoom.getRoomOwner().getName());
            outPacket.encodeString("[Miniroom]"+miniRoom.getRoomName());

            outPacket.encodeInt(0);
            outPacket.encodeInt(0);
            outPacket.encodeByte(0);
            outPacket.encodeInt(0);
        }

        return outPacket;
    }
}
