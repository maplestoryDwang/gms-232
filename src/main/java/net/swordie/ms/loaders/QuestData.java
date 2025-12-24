package net.swordie.ms.loaders;

import net.swordie.ms.ServerConstants;
import net.swordie.ms.client.character.quest.Quest;
import net.swordie.ms.client.character.quest.progress.*;
import net.swordie.ms.client.character.quest.requirement.*;
import net.swordie.ms.client.character.quest.reward.*;
import net.swordie.ms.constants.ItemConstants;
import net.swordie.ms.enums.InvType;
import net.swordie.ms.enums.QuestStatus;
import net.swordie.ms.enums.Stat;
import net.swordie.ms.jwzlib.WzEmpty;
import net.swordie.ms.jwzlib.WzFile;
import net.swordie.ms.jwzlib.WzObject;
import net.swordie.ms.jwzlib.WzProperty;
import net.swordie.ms.loaders.containerclasses.ItemInfo;
import net.swordie.ms.loaders.containerclasses.QuestInfo;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import java.io.IOException;
import java.io.RandomAccessFile;
import java.util.HashMap;
import java.util.Map;
import java.util.stream.Collectors;

/**
 * Created on 3/2/2018.
 */
public class QuestData {
    private static final Logger log = LogManager.getRootLogger();
    private static final boolean LOG_UNKS = false;
    private static final String QUESTS_FILE = ServerConstants.DAT_DIR + "/quests.dat";

    private static Map<Integer, QuestInfo> baseQuests = new HashMap<>();
    private static Map<Integer, Integer> questOffsets;

    public static void loadQuestsFromWZ() {
        WzFile file = new WzFile(ServerConstants.WZ_DIR + "/Quest.wz");
        WzObject<?, ?> checkNode = file.getChild("Check.img");
        WzProperty reqNode;

        for (WzObject<?, ?> questIdNode : checkNode) {
            int questId = Integer.parseInt(questIdNode.getName());
            QuestInfo qi = new QuestInfo();
            qi.setQuestID(questId);
            for (WzObject<?, ?> statusNode : questIdNode) {
                int status = Integer.parseInt(statusNode.getName());
                int npc = ((WzProperty) statusNode.getChild("npc", 0)).getIntValue();
                if (status == 0) {
                    qi.setStartNpc(npc);
                } else {
                    qi.setEnd(npc);
                }

                WzObject<?, ?> infoNumber = statusNode.getChild("infoNumber");
                if (infoNumber != null) {
                    qi.setInfoNumber(((WzProperty) infoNumber).getIntValue());
                }

                WzObject<?, ?> fieldsetkeeptime = statusNode.getChild("fieldsetkeeptime");
                if (fieldsetkeeptime != null) {
                    qi.setFieldSetKeepTime(((WzProperty) fieldsetkeeptime).getIntValue());
                }

                WzObject<?, ?> subJobFlags = statusNode.getChild("subJobFlags");
                if (subJobFlags != null) {
                    qi.setSubJobFlags(((WzProperty) subJobFlags).getIntValue());
                }

                WzObject<?, ?> deathCount = statusNode.getChild("deathCount");
                if (deathCount != null) {
                    qi.setDeathCount(((WzProperty) deathCount).getIntValue());
                }

                WzObject<?, ?> mobDropMeso = statusNode.getChild("mobDropMeso");
                if (mobDropMeso != null) {
                    qi.setMobDropMeso(((WzProperty) mobDropMeso).getIntValue());
                }

                WzObject<?, ?> morph = statusNode.getChild("morph");
                if (morph != null) {
                    qi.setMorph(((WzProperty) morph).getIntValue());
                }

                WzObject<?, ?> start = statusNode.getChild("start");
                if (start != null) {
                    qi.setStart(((WzProperty) start).getLongValue());
                }

                WzObject<?, ?> startT = statusNode.getChild("start_t");
                if (startT != null) {
                    qi.setStartT(((WzProperty) startT).getLongValue());
                }

                WzObject<?, ?> end = statusNode.getChild("end");
                if (end != null) {
                    qi.setEnd(((WzProperty) end).getLongValue());
                }

                WzObject<?, ?> endT = statusNode.getChild("end_t");
                if (endT != null) {
                    qi.setEndT(((WzProperty) endT).getLongValue());
                }

                WzObject<?, ?> startScript = statusNode.getChild("startscript");
                if (startScript != null) {
                    qi.setStartScript(startScript.toString());
                }

                WzObject<?, ?> endScript = statusNode.getChild("endscript");
                if (endScript != null) {
                    qi.setEndScript(endScript.toString());
                }

                WzObject<?, ?> fieldset = statusNode.getChild("fieldset");
                if (fieldset != null) {
                    qi.setFieldSet(fieldset.toString());
                }

                WzObject<?, ?> normalAutoStart = statusNode.getChild("normalAutoStart");
                if (normalAutoStart != null) {
                    qi.setNormalAutoStart(((WzProperty) normalAutoStart).getIntValue() != 0);
                }

                WzObject<?, ?> completeNpcAutoGuide = statusNode.getChild("completeNpcAutoGuide");
                if (completeNpcAutoGuide != null) {
                    qi.setCompleteNpcAutoGuide(((WzProperty) completeNpcAutoGuide).getIntValue() != 0);
                }

                WzObject<?, ?> autoStart = statusNode.getChild("autoStart");
                if (autoStart != null) {
                    qi.setAutoStart(((WzProperty) autoStart).getIntValue() != 0);
                }

                WzObject<?, ?> scenarioQuest = statusNode.getChild("scenarioQuest");
                if (scenarioQuest != null) {
                    qi.setScenarioQuest(((WzProperty) scenarioQuest).getIntValue() != 0);
                }

                WzObject<?, ?> secret = statusNode.getChild("secret");
                if (secret != null) {
                    qi.setSecret(((WzProperty) secret).getIntValue() != 0);
                }

                reqNode = (WzProperty) statusNode.getChild("marriaged");
                if (reqNode != null) {
                    qi.addRequirement(new QuestStartMarriageRequirement());
                }

                reqNode = (WzProperty) statusNode.getChild("lvmin");
                if (reqNode != null) {
                    qi.addRequirement(new QuestStartMinStatRequirement(Stat.level, (short) reqNode.getIntValue()));
                }

                reqNode = (WzProperty) statusNode.getChild("pop");
                if (reqNode != null) {
                    qi.addRequirement(new QuestStartMinStatRequirement(Stat.pop, (short) reqNode.getIntValue()));
                }

                reqNode = (WzProperty) statusNode.getChild("fameGradeReq");
                if (reqNode != null) {
                    qi.addRequirement(new QuestStartMinStatRequirement(Stat.pop, (short) reqNode.getIntValue()));
                }

                reqNode = (WzProperty) statusNode.getChild("charismaMin");
                if (reqNode != null) {
                    qi.addRequirement(new QuestStartMinStatRequirement(Stat.charismaEXP, (short) reqNode.getIntValue()));
                }

                reqNode = (WzProperty) statusNode.getChild("insightMin");
                if (reqNode != null) {
                    qi.addRequirement(new QuestStartMinStatRequirement(Stat.insightEXP, (short) reqNode.getIntValue()));
                }

                reqNode = (WzProperty) statusNode.getChild("willMin");
                if (reqNode != null) {
                    qi.addRequirement(new QuestStartMinStatRequirement(Stat.willEXP, (short) reqNode.getIntValue()));
                }

                reqNode = (WzProperty) statusNode.getChild("craftMin");
                if (reqNode != null) {
                    qi.addRequirement(new QuestStartMinStatRequirement(Stat.craftEXP, (short) reqNode.getIntValue()));
                }

                reqNode = (WzProperty) statusNode.getChild("senseMin");
                if (reqNode != null) {
                    qi.addRequirement(new QuestStartMinStatRequirement(Stat.senseEXP, (short) reqNode.getIntValue()));
                }

                reqNode = (WzProperty) statusNode.getChild("charm");
                if (reqNode != null) {
                    qi.addRequirement(new QuestStartMinStatRequirement(Stat.charmEXP, (short) reqNode.getIntValue()));
                }

                reqNode = (WzProperty) statusNode.getChild("charmMin");
                if (reqNode != null) {
                    qi.addRequirement(new QuestStartMinStatRequirement(Stat.charmEXP, (short) reqNode.getIntValue()));
                }

                reqNode = (WzProperty) statusNode.getChild("level");
                if (reqNode != null) {
                    qi.addProgressRequirement(new QuestProgressLevelRequirement(reqNode.getIntValue()));
                }

                reqNode = (WzProperty) statusNode.getChild("lvmax");
                if (reqNode != null) {
                    qi.addRequirement(new QuestStartMaxLevelRequirement((short) reqNode.getIntValue()));
                }

                reqNode = (WzProperty) statusNode.getChild("endmeso");
                if (reqNode != null) {
                    qi.addProgressRequirement(new QuestProgressMoneyRequirement(reqNode.getIntValue()));
                }

                WzObject<?, ?> questNode = statusNode.getChild("quest");
                if (questNode != null) {
                    for (WzObject<?, ?> qNode : questNode) {
                        QuestStartCompletionRequirement qcr = new QuestStartCompletionRequirement();
                        qcr.setQuestID(((WzProperty) qNode.getChild("id", 0)).getIntValue());
                        qcr.setQuestStatus((byte) ((WzProperty) qNode.getChild("state", -1)).getIntValue());
                        if (qcr.getQuestStatus() != -1) {
                            qi.addRequirement(qcr);
                        }
                    }
                }

                WzObject<?, ?> petNode = statusNode.getChild("pet");
                if (petNode != null) {
                    for (WzObject<?, ?> petIdNode : petNode) {
                        QuestStartItemRequirement qsir = new QuestStartItemRequirement();
                        qsir.setId(((WzProperty) petIdNode.getChild("id", 0)).getIntValue());
                        qi.addRequirement(qsir);
                    }
                }
                if(qi.getQuestID() == 53236) {
                    WzObject<?, ?> jobNode = statusNode.getChild(-1, "job", "job ");
                    if (jobNode != null && !(jobNode instanceof WzEmpty)) {
                        QuestStartJobRequirement qsjr = new QuestStartJobRequirement();
                        for (WzObject<?, ?> jobIdNode : jobNode) {
                            if (jobIdNode != null) {
                                qsjr.addJobReq((short) ((WzProperty) jobIdNode).getIntValue());
                            }
                        }
                        if (!qsjr.getJobReq().isEmpty()) {
                            qi.addRequirement(qsjr);
                        }
                    }

                    WzObject<?, ?> jobGLNode = statusNode.getChild(-1, "job_GL");
                    if (jobGLNode != null && !(jobGLNode instanceof WzEmpty)) {
                        QuestStartJobRequirement qsjr = new QuestStartJobRequirement();
                        for (WzObject<?, ?> jobGLIdNode : jobGLNode) {
                            if (jobGLIdNode != null) {
                                qsjr.addJobReq((short) ((WzProperty) jobGLIdNode).getIntValue());
                            }
                        }
                        if (!qsjr.getJobReq().isEmpty()) {
                            qi.addRequirement(qsjr);
                        }
                    }
                }

                WzObject<?, ?> scenarioQuestListNode = statusNode.getChild("scenarioQuestList");
                if (scenarioQuestListNode != null) {
                    for (WzObject<?, ?> scenNode : scenarioQuestListNode) {
                        qi.addScenario(((WzProperty) scenNode).getIntValue());
                    }
                }

                WzObject<?, ?> fieldEnterNode = statusNode.getChild("fieldEnter");
                if (fieldEnterNode != null) {
                    for (WzObject<?, ?> feNode : fieldEnterNode) {
                        qi.addFieldEnter(((WzProperty) feNode).getIntValue());
                    }
                }

                WzObject<?, ?> mobNode = statusNode.getChild("mob");
                if (mobNode != null) {
                    for (WzObject<?, ?> mn : mobNode) {
                        QuestProgressMobRequirement qpmr = new QuestProgressMobRequirement();
                        qpmr.setOrder(Integer.parseInt(mn.getName()));
                        qpmr.setMobID(((WzProperty) mn.getChild("id", 0)).getIntValue());
                        qpmr.setRequiredCount(((WzProperty) mn.getChild("count", 0)).getIntValue());
                        qi.addProgressRequirement(qpmr);
                    }
                }

                WzObject<?, ?> itemNode = statusNode.getChild("item");
                if (itemNode != null) {
                    for (WzObject<?, ?> in : itemNode) {
                        QuestStartItemRequirement qir = new QuestStartItemRequirement();
                        QuestProgressItemRequirement qpir = new QuestProgressItemRequirement();
                        int order = Integer.parseInt(in.getName());
                        int count = ((WzProperty) in.getChild("count", 0)).getIntValue();
                        int itemId = ((WzProperty) in.getChild("id", 0)).getIntValue();

                        if (status == 0) {
                            qir.setId(itemId);
                            qir.setQuantity(count);
                            qi.addRequirement(qir);
                        } else {
                            qpir.setOrder(order);
                            qpir.setItemID(itemId);
                            qpir.setRequiredCount(count);
                            qi.addProgressRequirement(qpir);
                        }
                    }
                }

                var exProgressRequirements = new String[] {
                        "runeAct", "multiKillCount", "comboKill", "breakTimeField"
                };
                for (var exProgressRequirement : exProgressRequirements) {
                    var exProgressRequirementNode = statusNode.getChild(exProgressRequirement);
                    if (exProgressRequirementNode != null) {
                        var name = exProgressRequirementNode.getName();
                        var value = ((WzProperty) exProgressRequirementNode).getIntValue();
                        qi.getExProgressRequirements().put(name, value);
                    }
                }

                WzObject<?, ?> speechNode = statusNode.getChild("npcSpeech");
                if (speechNode != null) {
                    String speechValue = "NpcSpeech=";
                    for (WzObject<?, ?> sn : speechNode) {
                        qi.addSpeech(((WzProperty<String>) sn.getChild("script", "")).getValue());

                        boolean hasSpeech = sn.hasChild("script");
                        int templateId = ((WzProperty) sn.getChild("id", 0)).getIntValue();
                        int order = ((WzProperty) sn.getChild("order", 0)).getIntValue();

                        if (hasSpeech && templateId != 0) {
                            speechValue += templateId + (order + "/");
                            qi.addSpeech(speechValue);
                        }
                    }
                }


            }
            getBaseQuests().put(qi.getQuestID(), qi);
            questIdNode.clear();
        }
        checkNode.clear();

        WzObject<?, ?> actNode = file.getChild("Act.img");
        for (WzObject<?, ?> questIdNode : actNode) {
            int id = Integer.parseInt(questIdNode.getName());
            QuestInfo qi = getQuestInfo(id);
            for (WzObject<?, ?> statusNode : questIdNode) {
                int status = Integer.parseInt(statusNode.getName());

                reqNode = (WzProperty) statusNode.getChild("transferField");
                if(reqNode != null)
                {
                    qi.addTransferField(status, reqNode.getIntValue());
                }
                qi.setNextQuest(((WzProperty) statusNode.getChild("nextQuest", 0)).getIntValue());

                reqNode = (WzProperty) statusNode.getChild("exp");
                if (reqNode != null) {
                    qi.addReward(new QuestExpReward(reqNode.getLongValue()));
                }

                reqNode = (WzProperty) statusNode.getChild("money");
                if (reqNode != null) {
                    qi.addReward(new QuestMoneyReward(reqNode.getLongValue()));
                }

                reqNode = (WzProperty) statusNode.getChild("pop");
                if (reqNode != null) {
                    qi.addReward(new QuestPopReward(reqNode.getIntValue()));
                }

                reqNode = (WzProperty) statusNode.getChild("buffItemID");
                if (reqNode != null) {
                    qi.addReward(new QuestBuffItemReward(reqNode.getIntValue(), status));
                }

                WzObject<?, ?> itemTopNode = statusNode.getChild("item");
                if (itemTopNode != null) {
                    for (WzObject<?, ?> itemNode : itemTopNode) {
                        QuestItemReward qir = new QuestItemReward();
                        qir.setStatus(status);
                        qir.setId(((WzProperty) itemNode.getChild("id", 0)).getIntValue());
                        qir.setProp(((WzProperty) itemNode.getChild("prop", 0)).getIntValue());
                        qir.setQuantity((short) ((WzProperty) itemNode.getChild("count", 0)).getIntValue());
                        qir.setPotentialGrade(((WzProperty<String>) itemNode.getChild("potentialGrade", "")).getValue());
                        qir.setGender(((WzProperty) itemNode.getChild("gender", 0)).getIntValue());
                        qi.addReward(qir);
                    }
                }
            }
        }
        actNode.clear();

        WzObject<?, ?> questInfoNode = file.getChild("QuestInfo.img");
        for (WzObject<?, ?> qiNode : questInfoNode) {
            int id = Integer.parseInt(qiNode.getName());
            QuestInfo qi = getQuestInfo(id);
            qi.setAutoComplete(((WzProperty) qiNode.getChild("autoComplete", 0)).getIntValue() != 0);
            qi.setMedalItemId(((WzProperty) qiNode.getChild("viewMedalItem", 0)).getIntValue());
            qi.setTimeLimit(((WzProperty) qiNode.getChild("timeLimit", 0)).getIntValue());
            qi.setTimeLimit(((WzProperty) qiNode.getChild("timeLimit2", 0)).getIntValue());
            WzObject<?, ?> resignScript = qiNode.getChild("resignScript");
            if (resignScript != null) {
                qi.setResignationScript(resignScript.toString());
            }
        }
        questInfoNode.clear();
        file.clear();
    }

    public static Map<Integer, QuestInfo> getBaseQuests() {
        return baseQuests;
    }

    public static void linkMobData() {
        if (getBaseQuests().size() == 0) {
            loadQuestsFromWZ();
        }
        if (MobData.getMobs().size() == 0) {
            MobData.loadMobsFromWz();
        }
        for (QuestInfo qi : getBaseQuests().values()) {
            for (QuestProgressMobRequirement qpmr :
                    qi.getQuestProgressRequirements()
                            .stream()
                            .filter(q -> q instanceof QuestProgressMobRequirement)
                            .map(q -> (QuestProgressMobRequirement) q)
                            .collect(Collectors.toSet())) { // readability is overrated
                var m = MobData.getMobs().get(qpmr.getMobID());
                if (m != null) {
                    m.addQuest(qi.getQuestID());
                    for (int childId : m.getMobSet()) {
                        var childMob = MobData.getMobInfoById(childId);
                        if (childMob != null) {
                            childMob.addQuest(qi.getQuestID());
                        }
                    }
                }
            }
        }
    }

    public static void linkItemData() {
        if (getBaseQuests().size() == 0) {
            loadQuestsFromWZ();
        }
        for (QuestInfo qi : getBaseQuests().values()) {
            for (QuestProgressItemRequirement qpmr :
                    qi.getQuestProgressRequirements()
                            .stream()
                            .filter(q -> q instanceof QuestProgressItemRequirement)
                            .map(q -> (QuestProgressItemRequirement) q)
                            .collect(Collectors.toSet())) { // readability is overrated
                int itemID = qpmr.getItemID();
                if (ItemConstants.isEquip(itemID)) {
                    // create new ItemInfos just for equips that are required for quests
                    // normally ItemInfo is just for non-equips.
                    ItemInfo ii = new ItemInfo();
                    ii.setItemId(itemID);
                    ii.setInvType(InvType.EQUIP);
                    ii.addQuest(qi.getQuestID());
                    ItemData.addItemInfo(ii);
                } else {
                    ItemInfo item = ItemData.getItems().get(qpmr.getItemID());
                    if (item != null) {
                        item.addQuest(qi.getQuestID());
                    }
                }
            }
        }
        Map<Integer, Integer> itemIdToQuestMap = new HashMap<>();
        itemIdToQuestMap.put(1712001, 34120);
        itemIdToQuestMap.put(1712002, 34216);
        itemIdToQuestMap.put(1712003, 34330);
        itemIdToQuestMap.put(1712004, 34478);
        itemIdToQuestMap.put(1712005, 34272);
        itemIdToQuestMap.put(1712006, 34585);

        for (var entry : itemIdToQuestMap.entrySet()) {
            var itemId = entry.getKey();
            var questId = entry.getValue();

            ItemInfo item = ItemData.getItems().get(itemId);
            if (item != null) {
                item.addQuest(questId);
            }
        }
    }

    public static void generateDatFiles() {
        log.info("Started generating quest data.");
        long start = System.currentTimeMillis();
        if (getBaseQuests().size() == 0) {
            loadQuestsFromWZ();
        }
        saveAllQuestInfos(QUESTS_FILE);
        log.info(String.format("Completed generating quest data in %dms.", System.currentTimeMillis() - start));
    }

    private static void saveAllQuestInfos(String file) {
        int tableSize = getBaseQuests().size() * 8 + 4; // 4 for id, 4 for offset pos, single 4 for size
        questOffsets = new HashMap<>();
        try (RandomAccessFile raf = new RandomAccessFile(file, IOHelper.READ_WRITE_MODE)) {
            raf.seek(tableSize);
            for (QuestInfo qi : getBaseQuests().values()) {
                questOffsets.put(qi.getQuestID(), (int) raf.getFilePointer());
                raf.writeInt(qi.getQuestID());
                raf.writeInt(qi.getStartNpc());
                raf.writeBoolean(qi.isNormalAutoStart());
                raf.writeShort(qi.getQuestStartRequirements().size());
                for (QuestStartRequirement qsr : qi.getQuestStartRequirements()) {
                    raf.writeByte(QuestStartRequirementType.getQPRTByObj(qsr).getVal());
                    qsr.write(raf);
                }
                raf.writeShort(qi.getQuestProgressRequirements().size());
                for (QuestProgressRequirement qpr : qi.getQuestProgressRequirements()) {
                    raf.writeByte(QuestProgressRequirementType.getQPRTByObj(qpr).getVal());
                    qpr.write(raf);
                }
                raf.writeShort(qi.getQuestRewards().size());
                for (QuestReward qr : qi.getQuestRewards()) {
                    raf.writeByte(QuestRewardType.getQPRTByObj(qr).getVal());
                    qr.write(raf);
                }
                raf.writeShort(qi.getFieldEnters().size());
                for (int i : qi.getFieldEnters()) {
                    raf.writeInt(i);
                }
                raf.writeInt(qi.getInfoNumber());
                raf.writeLong(qi.getEnd());
                raf.writeLong(qi.getEndT());
                raf.writeUTF(qi.getStartScript());
                raf.writeUTF(qi.getEndScript());
                raf.writeLong(qi.getStart());
                raf.writeLong(qi.getStartT());
                raf.writeInt(qi.getEndNpc());
                raf.writeInt(qi.getSubJobFlags());
                raf.writeBoolean(qi.isCompleteNpcAutoGuide());
                raf.writeInt(qi.getSkill());
                raf.writeInt(qi.getFieldSetKeepTime());
                raf.writeUTF(qi.getFieldSet());
                raf.writeBoolean(qi.isAutoStart());
                raf.writeInt(qi.getDeathCount());
                raf.writeShort(qi.getScenarios().size());
                for (int i : qi.getScenarios()) {
                    raf.writeInt(i);
                }
                raf.writeShort(qi.getSpeech().size());
                for (String i : qi.getSpeech()) {
                    raf.writeUTF(i);
                }
                raf.writeShort(qi.getExProgressRequirements().size());
                for (var entry : qi.getExProgressRequirements().entrySet()) {
                    raf.writeUTF(entry.getKey());
                    raf.writeInt(entry.getValue());
                }
                raf.writeInt(qi.getMobDropMeso());
                raf.writeInt(qi.getMorph());
                raf.writeBoolean(qi.isSecret());
                if (qi.getTransferFields() == null){
                    qi.setTransferFields(new HashMap<>());
                }
                raf.writeShort(qi.getTransferFields().size());
                for (Map.Entry<Integer, Integer> entry : qi.getTransferFields().entrySet()) {
                    raf.writeInt(entry.getKey());
                    raf.writeInt(entry.getValue());
                }
                raf.writeInt(qi.getNextQuest());
                raf.writeBoolean(qi.isAutoComplete());
                raf.writeInt(qi.getMedalItemId());
                raf.writeInt(qi.getTimeLimit());
                raf.writeUTF(qi.getResignationScript());
            }
            IOHelper.writeOffsetTable(questOffsets, raf);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    private static QuestInfo getQuestInfo(int id) {
        return getBaseQuests().get(id);
    }

    public static QuestInfo getQuestInfoById(int id) {
        QuestInfo qi = getQuestInfo(id);
        return qi == null ? loadQuestInfoById(id) : qi;
    }

    private static QuestInfo loadQuestInfoById(int id) {
        if (questOffsets == null) {
            questOffsets = new HashMap<>();
            IOHelper.loadOffsets(questOffsets, QUESTS_FILE);
        }
        if (!questOffsets.containsKey(id)) {
            return null;
        }
        QuestInfo qi = null;
        try (RandomAccessFile raf = new RandomAccessFile(QUESTS_FILE, IOHelper.READ_MODE)) {
            raf.seek(questOffsets.get(id));
            qi = new QuestInfo();
            qi.setQuestID(raf.readInt());
            qi.setStartNpc(raf.readInt());
            qi.setNormalAutoStart(raf.readBoolean());
            short size = raf.readShort();
            for (int i = 0; i < size; i++) {
                QuestStartRequirementType qsrt = QuestStartRequirementType.getQPRTByVal(raf.readByte());
                qi.addRequirement(qsrt.load(raf));
            }
            size = raf.readShort();
            for (int i = 0; i < size; i++) {
                QuestProgressRequirementType qprt = QuestProgressRequirementType.getQPRTByVal(raf.readByte());
                qi.addProgressRequirement(qprt.load(raf));
            }
            size = raf.readShort();
            for (int i = 0; i < size; i++) {
                QuestRewardType qr = QuestRewardType.getQPRTByVal(raf.readByte());
                qi.addReward(qr.load(raf));
            }
            size = raf.readShort();
            for (int i = 0; i < size; i++) {
                qi.addFieldEnter(raf.readInt());
            }
            qi.setInfoNumber(raf.readInt());
            qi.setEnd(raf.readLong());
            qi.setEndT(raf.readLong());
            qi.setStartScript(raf.readUTF());
            qi.setEndScript(raf.readUTF());
            qi.setStart(raf.readLong());
            qi.setStartT(raf.readLong());
            qi.setEndNpc(raf.readInt());
            qi.setSubJobFlags(raf.readInt());
            qi.setCompleteNpcAutoGuide(raf.readBoolean());
            qi.setSkill(raf.readInt());
            qi.setFieldSetKeepTime(raf.readInt());
            qi.setFieldSet(raf.readUTF());
            qi.setAutoStart(raf.readBoolean());
            qi.setDeathCount(raf.readInt());
            size = raf.readShort();
            for (int i = 0; i < size; i++) {
                qi.addScenario(raf.readInt());
            }
            size = raf.readShort();
            for (int i = 0; i < size; i++) {
                qi.addSpeech(raf.readUTF());
            }
            size = raf.readShort();
            for (int i = 0; i < size; i++) {
                qi.getExProgressRequirements().put(raf.readUTF(), raf.readInt());
            }
            qi.setMobDropMeso(raf.readInt());
            qi.setMorph(raf.readInt());
            qi.setSecret(raf.readBoolean());
            size = raf.readShort();
            for (int i = 0; i < size; i++) {
                int status = raf.readInt();
                int transferField = raf.readInt();
                qi.addTransferField(status, transferField);
            }
            qi.setNextQuest(raf.readInt());
            qi.setAutoComplete(raf.readBoolean());
            qi.setMedalItemId(raf.readInt());
            qi.setTimeLimit(raf.readInt());
            qi.setResignationScript(raf.readUTF());
            getBaseQuests().put(qi.getQuestID(), qi);
        } catch (IOException e) {
            log.error(String.format("IOException when loading %d", qi.getQuestID()));
            e.printStackTrace();
        }
        return qi;
    }

    public static Quest createQuestFromId(int questID) {
        QuestInfo qi = getQuestInfoById(questID);
        Quest quest = new Quest();
        quest.setQRKey(questID);
        if (qi != null) {
            if (qi.isAutoComplete()) {
                quest.setStatus(QuestStatus.Started);
//            quest.completeQuest(); // TODO check what autocomplete actually means
            } else {
                quest.setStatus(QuestStatus.Started);
            }
            for (QuestProgressRequirement qpr : qi.getQuestProgressRequirements()) {
                quest.addQuestProgressRequirement(qpr.deepCopy());
            }
        } else {
            quest.setStatus(QuestStatus.Started);
        }
        return quest;
    }

    public static void main(String[] args) {
        generateDatFiles();
    }

    public static void clear() {
        getBaseQuests().clear();
        if (questOffsets != null) {
            questOffsets = null;
        }
    }
}
