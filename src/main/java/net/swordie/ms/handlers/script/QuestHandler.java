package net.swordie.ms.handlers.script;

import net.swordie.ms.client.Client;
import net.swordie.ms.client.character.Char;
import net.swordie.ms.client.character.quest.Quest;
import net.swordie.ms.client.character.quest.QuestManager;
import net.swordie.ms.connection.InPacket;
import net.swordie.ms.connection.packet.UserLocal;
import net.swordie.ms.constants.ItemConstants;
import net.swordie.ms.constants.QuestConstants;
import net.swordie.ms.enums.MedalReissueResultType;
import net.swordie.ms.enums.QuestType;
import net.swordie.ms.handlers.Handler;
import net.swordie.ms.handlers.header.InHeader;
import net.swordie.ms.loaders.ItemData;
import net.swordie.ms.loaders.QuestData;
import net.swordie.ms.loaders.containerclasses.QuestInfo;
import net.swordie.ms.scripts.ScriptManagerImpl;
import net.swordie.ms.scripts.ScriptType;
import net.swordie.ms.util.Position;
import net.swordie.ms.world.field.Field;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import static net.swordie.ms.enums.ChatType.Mob;

public class QuestHandler {

    private static final Logger log = LogManager.getLogger(QuestHandler.class);


    @Handler(op = InHeader.USER_QUEST_REQUEST)
    public static void handleUserQuestRequest(Client c, InPacket inPacket) {
        Char chr = c.getChr();
        QuestManager qm = chr.getQuestManager();
        byte type = inPacket.decodeByte();
        int questID = 0;
        int npcTemplateID = 0;
        Position position = null;
        QuestType questType = QuestType.getQTFromByte(type);
        boolean success = false;
        if (questType != null) {
            switch (questType) {
                case QuestReq_AcceptQuest: // Quest start
                case QuestReq_CompleteQuest: // Quest end
                case QuestReq_OpeningScript: // Scripted quest start
                case QuestReq_CompleteScript: // Scripted quest end
                    questID = inPacket.decodeInt();
                    npcTemplateID = inPacket.decodeInt();
                    if (inPacket.getUnreadAmount() > 4) {
                        position = inPacket.decodePosition();
                    }
                    break;
                case QuestReq_ResignQuest: //Quest forfeit
                    questID = inPacket.decodeInt();
                    chr.getQuestManager().removeQuest(questID);

                    break;
                case QuestReq_LaterStep:
                    questID = inPacket.decodeInt();
                    break;
                default:
                    log.error(String.format("Unhandled quest request %s!", questType));
                    break;
            }
        }
        if (questID == 0 || questType == null) {
            chr.chatMessage(String.format("Could not find quest %d.", questID));
            return;
        }
        QuestInfo qi = QuestData.getQuestInfoById(questID);

        if (qi == null) {
            return;
        }

        switch (questType) {
            case QuestReq_AcceptQuest:
                if (qm.canStartQuest(questID)) {
                    Quest questFromId = QuestData.createQuestFromId(questID);
                    qm.addQuest(questFromId);
                    success = true;

                    String format = String.format("Starting system Quest [%s] , questID [%s] Type [Quest].", questID, questFromId.getStatus());
                    chr.chatMessage(Mob, format);
                    log.info(String.format(format));

                }
                break;
            case QuestReq_CompleteQuest:
                if (qm.hasQuestInProgress(questID)) {
                    Quest quest = qm.getQuestById(questID);
                    if (quest.isComplete(chr)) {
                        if (qm.completeQuest(questID)) {
                            success = true;

                            String format = String.format("Complete system Quest [%s] , questID [%s] Type [Quest].", questID, quest.getStatus());
                            chr.chatMessage(Mob, format);
                            log.info(String.format(format));
                        }
                    }
                }
                break;
            case QuestReq_OpeningScript:
                String scriptName = qi.getStartScript();
                if (QuestConstants.isSpamQuest(scriptName) || !qm.canStartQuest(questID)) {
                    // ~_~
                    return;
                }
                if (scriptName == null || scriptName.equalsIgnoreCase("")) {
                    scriptName = String.format("%d%s", questID, ScriptManagerImpl.QUEST_START_SCRIPT_END_TAG);
                }
                chr.getScriptManager().startScriptByScriptNameAndType(questID, scriptName, ScriptType.Quest, npcTemplateID);
                break;
            case QuestReq_CompleteScript:
                scriptName = qi.getEndScript();
                if (!qm.hasQuestInProgress(questID) || !qm.getQuestById(questID).isComplete(chr)) {
                    log.debug("Could not complete quest, as the prerequisites haven't been met.");
                    return;
                }
                if (scriptName == null || scriptName.equalsIgnoreCase("")) {
                    scriptName = String.format("%d%s", questID, ScriptManagerImpl.QUEST_COMPLETE_SCRIPT_END_TAG);
                }
                chr.getScriptManager().startScriptByScriptNameAndType(questID, scriptName, ScriptType.Quest);
                break;
            case QuestReq_LaterStep:
                if (qi.getTransferFields() != null && qi.getTransferFields().size() > 0) {
                    int transferField = 0;
                    if (chr.hasQuestInProgress(qi.getQuestID()) && qi.getTransferFields().containsKey(0)) {
                        transferField = qi.getTransferFields().get(0);
                    } else if (chr.getQuestManager().hasQuestCompleted(qi.getQuestID()) && qi.getTransferFields().containsKey(1)) {
                        transferField = qi.getTransferFields().get(1);
                    }
                    if (transferField != 0 && transferField != chr.getFieldID()) {
                        Field field = chr.getOrCreateFieldByCurrentInstanceType(transferField);
                        chr.warp(field);
                    }
                }
                break;
            case QuestReq_ResignQuest:
                scriptName = qi.getResignationScript();
                if (!qm.hasQuestInProgress(questID)) {
                    // ~_~
                    return;
                }
                if (scriptName == null || scriptName.equalsIgnoreCase("")) {
                    scriptName = String.format("%d%s", questID, ScriptManagerImpl.QUEST_RESIGN_SCRIPT_END_TAG);
                }
                chr.getScriptManager().startScriptByScriptNameAndType(questID, scriptName, ScriptType.Quest);
                chr.getQuestManager().removeQuest(questID);
                break;
        }
        if (success) {
            chr.write(UserLocal.questResult(QuestType.QuestRes_Act_Success, questID, npcTemplateID, 0, false));
        }
    }

    @Handler(op = InHeader.USER_MEDAL_REISSUE_REQUEST)
    public static void handleUserMedalReissueRequest(Char chr, InPacket inPacket) {
        int questId = inPacket.decodeInt();
        int medalItemId = inPacket.decodeInt();
        ScriptManagerImpl sm = chr.getScriptManager();
        long actualMesoCost;
        int count = 0;
        if (chr.getQRValue(QuestConstants.MEDAL_REISSUE_QUEST).contains("count=")) {
            String countString = chr.getQRValue(QuestConstants.MEDAL_REISSUE_QUEST).replace("count=", "");
            count = Integer.parseInt(countString);
        } else {
            chr.createQuestWithQRValue(QuestConstants.MEDAL_REISSUE_QUEST, "");
        }
        switch (count) {
            case 0:
                actualMesoCost = 100;
                break;
            case 1:
                actualMesoCost = 1000;
                break;
            case 2:
                actualMesoCost = 10000;
                break;
            case 3:
                actualMesoCost = 100000;
                break;
            default:
                actualMesoCost = 1000000;
                break;
        }
        if (!ItemConstants.isMedal(medalItemId) || QuestData.getQuestInfoById(questId).getMedalItemId() != medalItemId) {
            chr.getOffenseManager().addOffense(String.format("Character %d tried to reissue an item {%d} that isn't a medal or tried to reissue a medal from a quest {%d} that doesn't give the given medal", chr.getId(), medalItemId, questId));

        } else if (!chr.hasQuestCompleted(questId)) {
            chr.getOffenseManager().addOffense(String.format("Character %d tried to reissue a medal from a quest {%d} which they have not completed.", chr.getId(), questId));

        } else if (ItemData.getItemDeepCopy(medalItemId) == null || QuestData.getQuestInfoById(questId) == null) {
            chr.write(UserLocal.medalReissueResult(MedalReissueResultType.Unknown, medalItemId));

        } else if (chr.getMoney() < actualMesoCost) {
            chr.write(UserLocal.medalReissueResult(MedalReissueResultType.NoMoney, medalItemId));

        } else if (!chr.canHoldItem(medalItemId, 1)) {
            chr.write(UserLocal.medalReissueResult(MedalReissueResultType.NoSlot, medalItemId));

        } else if (chr.hasItem(medalItemId)) {
            chr.write(UserLocal.medalReissueResult(MedalReissueResultType.AlreadyHas, medalItemId));

        } else {
            count++;
            chr.setQRValue(QuestConstants.MEDAL_REISSUE_QUEST, "count=" + count);
            chr.deductMoney(actualMesoCost);
            chr.addItemToInventory(QuestData.getQuestInfoById(questId).getMedalItemId(), 1);
            chr.write(UserLocal.medalReissueResult(MedalReissueResultType.Success, medalItemId));
        }
        chr.dispose();
    }
}
