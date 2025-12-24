package net.swordie.ms.connection.packet.model;

import net.swordie.ms.client.character.info.ExpIncreaseInfo;
import net.swordie.ms.client.character.items.Item;
import net.swordie.ms.client.character.quest.Quest;
import net.swordie.ms.connection.Encodable;
import net.swordie.ms.connection.OutPacket;
import net.swordie.ms.constants.QuestConstants;
import net.swordie.ms.enums.*;
import net.swordie.ms.util.FileTime;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import java.util.Collection;

import static net.swordie.ms.enums.MessageType.*;

public class MessagePacket implements Encodable {

    private static final Logger log = LogManager.getLogger();

    private MessageType messageType;
    private Collection<Integer> ints;
    private Collection<String> strings;
    private int delay;
    private DropPickupMessageType dropType;
    private int quantity;
    private int moneyOrItemId;
    private int smallChangeExtra;
    private Quest quest;
    private ExpIncreaseInfo expIncreaseInfo;
    private short job;
    private long amount;
    private Stat trait;
    private StylishKillType stylishKillType;
    private int comboCount;
    private int mobId;
    private int skinType;
    private int collectionIndex;
    private String strValue;
    private int intValue;
    private FileTime fileTime;

    public MessagePacket(MessageType messageType) {
        this.messageType = messageType;
    }

    @Override
    public void encode(OutPacket outPacket) {
        outPacket.encodeByte(messageType.getVal());

        switch (messageType) {
            case DROP_PICKUP_MESSAGE:
                outPacket.encodeInt(delay);
                outPacket.encodeByte(0); // new 200
                outPacket.encodeByte(dropType.getVal());
                // also error (?) codes -2, ,-3, -4, -5, <default>
                switch (dropType) {
                    case PotionPot:
                        outPacket.encodeInt(quantity);
                        break;
                    case Item: // item
                        outPacket.encodeInt(moneyOrItemId);
                        outPacket.encodeInt(quantity); // ?
                        outPacket.encodeByte(0); // 0 = normal, 1 = bag, 2 = normal and bag
                        break;
                    case Mesos:
                        outPacket.encodeByte(false); // boolean: portion was lost after falling to the ground
                        outPacket.encodeInt(moneyOrItemId); // Mesos
                        outPacket.encodeShort(smallChangeExtra); // Spotting small change
                        break;
                    case Unk: // ?
                        outPacket.encodeInt(100);
                        outPacket.encodeLong(0);
                        break;
                    case CommerciVoyage:
                        outPacket.encodeInt(moneyOrItemId); // money
                        outPacket.encodeShort(smallChangeExtra); // Internet cafe bonus
                        break;
                }
                break;
            case QUEST_RECORD_MESSAGE:
                outPacket.encodeInt(quest.getQRKey());
                QuestStatus state = quest.getStatus();
                outPacket.encodeByte(state.getVal());

                switch (state) {
                    case NotStarted:
                        outPacket.encodeByte(0); // If quest is completed, but should never be true?
                        break;
                    case Started:
                        outPacket.encodeString(quest.getQRValue());
                        break;
                    case Completed:
                        outPacket.encodeFT(quest.getCompletedTime());
                        break;
                }
                break;
            case CASH_ITEM_EXPIRE_MESSAGE:
            case INC_POP_MESSAGE:
            case INC_GP_MESSAGE:
            case GIVE_BUFF_MESSAGE:
                outPacket.encodeInt(intValue);
                break;
            case INC_EXP_MESSAGE:
                expIncreaseInfo.encode(outPacket);
                break;
            case INC_SP_MESSAGE:
                outPacket.encodeShort(job);
                outPacket.encodeByte((byte) amount);
                break;
            case INC_MONEY_MESSAGE:
                outPacket.encodeLong(amount);
                outPacket.encodeInt(amount > 0 ? 1 : -1);
                break;
            case INC_COMMITMENT_MESSAGE:
                outPacket.encodeInt(intValue);
                outPacket.encodeInt(5); // nOverflowCommitment
                outPacket.encodeInt(0); // makes the overflow message not appear
                break;
            case SYSTEM_MESSAGE:
                outPacket.encodeString(strValue);
                break;
            case QUEST_RECORD_EX_MESSAGE:
            case WORLD_SHARE_RECORD_MESSAGE:
            case COLLECTION_RECORD_MESSAGE:
                outPacket.encodeInt(quest.getQRKey());
                // TODO -> Fix All Quests to have 2 properties. Qr and QrEx
                if (QuestConstants.is2QrQuest(quest.getQRKey())) {
                    outPacket.encodeString(quest.getQRExValue());
                } else {
                    outPacket.encodeString(quest.getQRValue());
                }
                break;
            case ITEM_EXPIRE_REPLACE_MESSAGE:
                outPacket.encodeByte(strings.size());
                strings.forEach(outPacket::encodeString);
                break;
            case GENERAL_ITEM_EXPIRE_MESSAGE:
            case ITEM_PROTECT_EXPIRE_MESSAGE:
            case ITEM_ABILITY_TIME_LIMITED_EXPIRE_MESSAGE:
            case SKILL_EXPIRE_MESSAGE:
                outPacket.encodeByte(ints.size());
                ints.forEach(outPacket::encodeInt);
                break;
            case INC_NON_COMBAT_STAT_EXP_MESSAGE:
                outPacket.encodeLong(trait.getVal());
                outPacket.encodeInt((int) amount);
                break;
            case INC_HARDCORE_EXP_MESSAGE:
                outPacket.encodeInt(intValue); //You have gained x EXP
                outPacket.encodeInt(intValue); //Field Bonus Exp
                break;
            case STYLISH_KILL_MESSAGE:
                outPacket.encodeByte(stylishKillType.getVal()); //1 for Combo   |  0 for MultiKill

                switch (stylishKillType) {
                    case COMBO: //Combo Kill Message
                        outPacket.encodeInt(comboCount); // nCount
                        outPacket.encodeInt(mobId); // nMobID
                        outPacket.encodeInt(skinType); // nType (0~4)
                        outPacket.encodeInt(0); // some arg for a response packet
                        break;

                    case MULTI_KILL: //MultiKill Pop-up
                        outPacket.encodeLong(comboCount); // nBonus
                        outPacket.encodeInt(0); // some arg for a response packet
                        outPacket.encodeInt(mobId); // mCount
                        outPacket.encodeInt(skinType); // nType (0~4)
                        break;
                }
                break;
            case BARRIER_EFFECT_IGNORE_MESSAGE:
                outPacket.encodeByte(intValue); //protection/shield scroll pop-up Message
                break;
            case QUEST_EXPIRE_MESSAGE:
                outPacket.encodeInt(intValue);
                break;
            case ACHIEVEMENT_INIT:
                // No clue about the packet structure or the values,
                // so it's just a paste of a sniff for now.
                int size = 1;
                outPacket.encodeInt(size);
                for (int i = 0; i < size; i++) {
                    outPacket.encodeInt(1);
                    outPacket.encodeByte(-1);
                    outPacket.encodeByte(2);
                    outPacket.encodeLong(-71937691);
                    outPacket.encodeString("");
                }
                break;
            case ACHIEVEMENT_COMPLETE:
                outPacket.encodeInt(ints.size());
                ints.forEach(outPacket::encodeInt);
                break;

            case SET_CURRENT_TIME:
                outPacket.encodeFT(fileTime);
                break;
        }
    }

    public static MessagePacket dropPickupMessage(int money, short smallChangeExtra) {
        return dropPickupMessage(money, 0, DropPickupMessageType.Mesos, smallChangeExtra, (short) 0);
    }

    public static MessagePacket dropPickupMessage(Item item, short quantity) {
        return dropPickupMessage(item.getItemId(), 0, DropPickupMessageType.Item, (short) 0, quantity);
    }

    public static MessagePacket dropPickupMessage(int moneyOrItemId, int delay, DropPickupMessageType type,
                                                  short smallChangeExtra, short quantity) {
        var packet = new MessagePacket(DROP_PICKUP_MESSAGE);
        packet.moneyOrItemId = moneyOrItemId;
        packet.delay = delay;
        packet.dropType = type;
        packet.smallChangeExtra = smallChangeExtra;
        packet.quantity = quantity;
        return packet;
    }

    public static MessagePacket questRecordMessage(Quest quest) {
        var packet = new MessagePacket(QUEST_RECORD_MESSAGE);
        packet.quest = quest;
        return packet;
    }

    public static MessagePacket questRecordExMessage(Quest quest) {
        var packet = new MessagePacket(QUEST_RECORD_EX_MESSAGE);
        packet.quest = quest;
        return packet;
    }

    public static MessagePacket questRecordExMessage(int qrKey, String qrValue) {
        var packet = new MessagePacket(QUEST_RECORD_EX_MESSAGE);
        var quest = new Quest();
        quest.setQRKey(qrKey);
        quest.setQrValue(qrValue);
        packet.quest = quest;
        return packet;
    }

    public static MessagePacket cashItemExpireMessage(int value) {
        var packet = new MessagePacket(CASH_ITEM_EXPIRE_MESSAGE);
        packet.intValue = value;
        return packet;
    }

    public static MessagePacket incExpMessage(ExpIncreaseInfo eii) {
        var packet = new MessagePacket(INC_EXP_MESSAGE);
        packet.expIncreaseInfo = eii;
        return packet;
    }

    public static MessagePacket incSpMessage(short job, byte amount) {
        var packet = new MessagePacket(INC_SP_MESSAGE);
        packet.job = job;
        packet.amount = amount;
        return packet;
    }

    public static MessagePacket incPopMessage(int value) {
        var packet = new MessagePacket(INC_POP_MESSAGE);
        packet.intValue = value;
        return packet;
    }

    public static MessagePacket incMoneyMessage(long amount) {
        var packet = new MessagePacket(INC_MONEY_MESSAGE);
        packet.amount = amount;
        return packet;
    }

    public static MessagePacket incGpMessage(int value) {
        var packet = new MessagePacket(INC_GP_MESSAGE);
        packet.intValue = value;
        return packet;
    }

    public static MessagePacket giveBuffMessage(int value) {
        var packet = new MessagePacket(GIVE_BUFF_MESSAGE);
        packet.intValue = value;
        return packet;
    }

    public static MessagePacket incCommitmentMessage(int value) {
        var packet = new MessagePacket(INC_COMMITMENT_MESSAGE);
        packet.intValue = value;
        return packet;
    }

    public static MessagePacket generalItemExpireMessage(Collection<Integer> expiredItems) {
        var packet = new MessagePacket(GENERAL_ITEM_EXPIRE_MESSAGE);
        packet.ints = expiredItems;
        return packet;
    }

    public static MessagePacket systemMessage(String value) {
        var packet = new MessagePacket(SYSTEM_MESSAGE);
        packet.strValue = value;
        return packet;
    }

    public static MessagePacket worldShareRecordMessage(int intValue, String strValue) {
        var packet = new MessagePacket(WORLD_SHARE_RECORD_MESSAGE);
        var quest = new Quest();
        quest.setQRKey(intValue);
        quest.setQrValue(strValue);
        packet.quest = quest;
        return packet;
    }

    public static MessagePacket collectionRecordMessage(int intValue, String strValue) {
        var packet = new MessagePacket(COLLECTION_RECORD_MESSAGE);
        var quest = new Quest();
        quest.setQRKey(intValue);
        quest.setQrValue(strValue);
        packet.quest = quest;
        return packet;
    }

    public static MessagePacket worldShareRecordMessage(Quest quest) {
        var packet = new MessagePacket(WORLD_SHARE_RECORD_MESSAGE);
        packet.quest = quest;
        return packet;
    }

    public static MessagePacket itemProtectExpireMessage(Collection<Integer> expiredItems) {
        var packet = new MessagePacket(ITEM_PROTECT_EXPIRE_MESSAGE);
        packet.ints = expiredItems;
        return packet;
    }

    public static MessagePacket itemExpireReplaceMessage(Collection<String> expiredItemsReplaceMessages) {
        var packet = new MessagePacket(ITEM_EXPIRE_REPLACE_MESSAGE);
        packet.strings = expiredItemsReplaceMessages;
        return packet;
    }

    public static MessagePacket itemAbilityTimeLimitedExpireMessage(Collection<Integer> expiredItems) {
        var packet = new MessagePacket(ITEM_ABILITY_TIME_LIMITED_EXPIRE_MESSAGE);
        packet.ints = expiredItems;
        return packet;
    }

    public static MessagePacket skillExpireMessage(Collection<Integer> expiredSkills) {
        var packet = new MessagePacket(SKILL_EXPIRE_MESSAGE);
        packet.ints = expiredSkills;
        return packet;
    }

    public static MessagePacket incNonCombatStatEXPMessage(Stat trait, int amount) {
        var packet = new MessagePacket(INC_NON_COMBAT_STAT_EXP_MESSAGE);
        packet.trait = trait;
        packet.amount = amount;
        return packet;
    }

    public static MessagePacket incHardcoreExpMessage(int amount) {
        var packet = new MessagePacket(INC_HARDCORE_EXP_MESSAGE);
        packet.intValue = amount;
        return packet;
    }

    public static MessagePacket barrierEffectIgnoreMessage(int amount) {
        var packet = new MessagePacket(BARRIER_EFFECT_IGNORE_MESSAGE);
        packet.intValue = amount;
        return packet;
    }

    public static MessagePacket stylishKillMessage(StylishKillType type, int comboCount, int mobId, int skinType) {
        var packet = new MessagePacket(STYLISH_KILL_MESSAGE);
        packet.stylishKillType = type;
        packet.comboCount = comboCount;
        packet.mobId = mobId;
        packet.skinType = skinType;
        return packet;
    }

    public static MessagePacket questExpireMessage(int quest) {
        var packet = new MessagePacket(QUEST_EXPIRE_MESSAGE);
        packet.intValue = quest;
        return packet;
    }

    public static MessagePacket initMapleAchievement() {
        return new MessagePacket(ACHIEVEMENT_INIT);
    }

    public static MessagePacket achievementsComplete(Collection<Integer> completedAchievements) {
        var packet = new MessagePacket(ACHIEVEMENT_COMPLETE);
        packet.ints = completedAchievements;
        return packet;
    }

    public static MessagePacket setCurrentTime(FileTime fileTime) {
        var packet = new MessagePacket(SET_CURRENT_TIME);
        packet.fileTime = fileTime;
        return packet;
    }
}
