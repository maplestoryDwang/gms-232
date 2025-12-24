package net.swordie.ms.client.character.quest;

import net.swordie.ms.connection.packet.WvsContext;
import net.swordie.ms.connection.packet.model.MessagePacket;
import net.swordie.ms.constants.GameConstants;
import net.swordie.ms.constants.QuestConstants;
import net.swordie.ms.enums.MobSetType;
import net.swordie.ms.life.mob.Mob;
import net.swordie.ms.loaders.QuestData;

import java.util.Arrays;

/**
 * Created on 31/01/2022.
 *
 * @author Asura
 */
public class QuestManagerHandler {

    /**
     * Invoked when the owner of the QuestManager (chr) has gained money.
     *
     * @param manager the quest manager that handles the money gained
     * @param money money that has been earned
     */
    public static void handleMoneyGain(QuestManager manager, int money) {
        var chr = manager.getChr();
        for (Quest q : manager.getQuestsInProgress()) {
            if (q.hasMoneyReq()) {
                q.addMoney(money);
                chr.write(WvsContext.message(MessagePacket.questRecordMessage(q)));
            }
        }
    }

    /**
     * Invoked when a Mob is killed.
     *
     * @param manager the quest manager that handles the mob kill
     * @param mob mob that has been killed
     */
    public static void handleMobKill(QuestManager manager, Mob mob) {
        var chr = manager.getChr();
        for (int questID : mob.getMobInfo().getQuests()) {
            Quest q = manager.getQuestById(questID);
            if (q != null && !q.isComplete(chr)) {
                q.handleMobKill(mob.getTemplateId());
                if (QuestConstants.M0_QR_QUESTS.contains(q.getQRKey())) {
                    chr.write(WvsContext.message(MessagePacket.questRecordExMessage(q)));
                } else {
                    chr.write(WvsContext.message(MessagePacket.questRecordMessage(q)));
                }
            }
        }

        // Quests that have template id of a mob that is a generalisation of many mobs. e.g. Lv13-30 mobs
        for (var quest : manager.getQuestsWithMobSetProgressRequirement()) {
            for (var mobReq : quest.getMobReqs()) {
                var mobId = mobReq.getMobID();
                var mobSetType = MobSetType.getByVal(mobId);

                if (mobSetType == null) {
                    continue;
                }

                var handleMobKill = false;
                switch (mobSetType) {
                    case Lv13_30Monsters:
                        handleMobKill = mob.getLevel() >= 13 && mob.getLevel() <= 30;
                        break;
                    case Lv31_50Monsters:
                        handleMobKill = mob.getLevel() >= 31 && mob.getLevel() <= 50;
                        break;
                    case Lv51_70Monsters:
                        handleMobKill = mob.getLevel() >= 51 && mob.getLevel() <= 70;
                        break;
                    case Lv71_90Monsters:
                        handleMobKill = mob.getLevel() >= 71 && mob.getLevel() <= 90;
                        break;
                    case Lv91_110Monsters:
                        handleMobKill = mob.getLevel() >= 91 && mob.getLevel() <= 110;
                        break;
                    case Lv111_130Monsters:
                        handleMobKill = mob.getLevel() >= 111 && mob.getLevel() <= 130;
                        break;
                    case Lv131_150Monsters:
                        handleMobKill = mob.getLevel() >= 131 && mob.getLevel() <= 150;
                        break;
                    case Lv151_plus_Monsters:
                        handleMobKill = mob.getLevel() >= 151;
                        break;
                    case MonsterParkBossLv60_114: // TODO

                        break;
                    case MonsterParkBossLv115_159: // TODO

                        break;
                    case MonsterParkBossLv160_plus: // TODO

                        break;
                    case Lv10_30Monsters:
                        handleMobKill = mob.getLevel() >= 10 && mob.getLevel() <= 30;
                        break;
                    case MonstersNearYourLevel:
                        var chrLv = chr.getLevel();
                        handleMobKill = Math.abs(mob.getLevel() - chrLv) < GameConstants.MOBS_NEAR_YOUR_LEVEL_RANGE;
                        break;
                    case EliteChampion:
                        handleMobKill = Arrays.stream(GameConstants.ELITE_BOSS_TEMPLATES).anyMatch(templateId -> templateId == mob.getTemplateId());
                        break;
                    case EliteMonsterOrEliteChampion:
                        handleMobKill = mob.getEliteType() == 1 || Arrays.stream(GameConstants.ELITE_BOSS_TEMPLATES).anyMatch(templateId -> templateId == mob.getTemplateId());
                        break;
                }

                if (handleMobKill) {
                    quest.handleMobKill(mobId);
                    chr.write(WvsContext.message(MessagePacket.questRecordMessage(quest)));
                }
            }
        }
    }

    public static void handleRuneAct(QuestManager manager) {
        var chr = manager.getChr();

        var qrExInfo = "runeAct";
        for (var quest : manager.getQuestsInProgress()) {
            var qi = QuestData.getQuestInfoById(quest.getQRKey());
            if (qi == null || !qi.getExProgressRequirements().containsKey(qrExInfo)) {
                continue;
            }

            var runeAct = quest.getIntPropertyEx("RunAct");
            quest.setPropertyEx("RunAct", runeAct + 1);

            chr.write(WvsContext.message(MessagePacket.questRecordExMessage(quest)));
        }
    }

    public static void handleMultiKillCount(QuestManager manager) {
        var chr = manager.getChr();

        var qrExInfo = "multiKillCount";
        for (var quest : manager.getQuestsInProgress()) {
            var qi = QuestData.getQuestInfoById(quest.getQRKey());
            if (qi == null || !qi.getExProgressRequirements().containsKey(qrExInfo)) {
                continue;
            }

            var currentMultiKill = quest.getIntPropertyEx("MultiKC");
            quest.setPropertyEx("MultiKC", currentMultiKill + 1);
            chr.write(WvsContext.message(MessagePacket.questRecordExMessage(quest)));
        }
    }

    public static void handleComboKill(QuestManager manager, int combo) {
        var chr = manager.getChr();

        var qrExInfo = "comboKill";
        for (var quest : manager.getQuestsInProgress()) {
            var qi = QuestData.getQuestInfoById(quest.getQRKey());
            if (qi == null || !qi.getExProgressRequirements().containsKey(qrExInfo)) {
                continue;
            }

            var currentCombo = quest.getIntPropertyEx("ComboK");
            if (combo > currentCombo) {
                quest.setPropertyEx("ComboK", combo);
                chr.write(WvsContext.message(MessagePacket.questRecordExMessage(quest)));
            }
        }
    }
}
