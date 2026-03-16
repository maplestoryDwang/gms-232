package dwang.script.js.api.imp;

import dwang.script.DwangScriptBaseApi;
import dwang.script.js.api.bean.MapleQuestStatus;
import net.swordie.ms.client.character.Char;
import net.swordie.ms.client.character.quest.Quest;
import net.swordie.ms.client.character.quest.QuestManager;
import net.swordie.ms.connection.packet.UserLocal;
import net.swordie.ms.connection.packet.WvsContext;
import net.swordie.ms.connection.packet.model.MessagePacket;
import net.swordie.ms.enums.QuestStatus;
import net.swordie.ms.loaders.QuestData;

public interface QuestAPI extends DwangScriptBaseApi {


    /**
     * 任务值核心方法： qrValue和qrExValue
     *
     * @param chr
     * @param questId
     * @return
     */
    default String getQRExValue(Char chr, int questId) {
        Quest quest = chr.getQuestManager().getQuestById(questId);
        if (quest == null) {
            return "";
        }
        return quest.getQRExValue();
    }

    default String getQRValue(Char chr, int questId) {
        Quest quest = chr.getQuestManager().getQuestById(questId);
        if (quest == null) {
            return "";
        }
        return quest.getQRValue();
    }


    default void setQRValueOrEx(int questId, String qrValue, boolean ex) {
        setQRValueOrEx(getChr(), questId, qrValue, ex);
    }


    default void setQRValueOrEx(Char chr, int questId, String qrValue, boolean ex) {
        Quest quest = chr.getQuestManager().getQuestById(questId);
        if (quest == null) {
            quest = QuestData.createQuestFromId(questId);
            chr.getQuestManager().addQuest(quest);
        }
        if (ex) {
            quest.setQrValueEx(qrValue);
        } else {
            quest.setQrValue(qrValue);
        }
        updateQROrExValue(quest, ex);
    }


    default void updateQROrExValue(Quest quest, boolean ex) {
        if (ex) {
            getChr().write(WvsContext.message(MessagePacket.questRecordMessage(quest)));
            getChr().write(WvsContext.message(MessagePacket.questRecordExMessage(quest)));
        } else {
            getChr().write(WvsContext.message(MessagePacket.questRecordMessage(quest)));
        }
    }


    default void deleteQuest(Char chr, int questId) {
        QuestManager qm = chr.getQuestManager();
        Quest quest = qm.getQuestById(questId);
        if (quest == null) {
            return;
        }
        qm.removeQuest(quest.getQRKey());
    }

    default Quest getQuest(Char chr, int questId) {
        Quest quest = getChr().getQuestManager().getQuestById(questId);
        if (quest == null) {
            throw new RuntimeException("quest not found");
        }
        return quest;
    }


    /**
     * ===============================================下面才是JS使用的脚本===============================================
     */


    /**
     * 增加qrValue的值，如果qrValue是数字的话
     *
     * @出自类 QuestAPI
     */
    default void addNumberForQuestCustomData(int questId, long diff) {
        Quest quest = getQuest(getChr(), questId);
        String qrValue = quest.getQRValue();
        long newQrValue = Long.parseLong(qrValue) + diff;
        quest.setQrValue(String.format("%d", newQrValue));
        updateQROrExValue(quest, false);
    }


    /**
     * QuestInfo 增加某一项的数值
     * 举例：cm.addNumberForQuestInfo(1477,'count',10); 增加10点核心碎片
     *
     * @param diff 增幅
     * @出自类 QuestAPI
     */
    default void addNumberForQuestInfo(int questId, String key, long diff) {
        Quest quest = getQuest(getChr(), questId);
        long longPropertyEx = quest.getLongPropertyEx(key);
        diff += longPropertyEx;
        quest.setPropertyEx(key, diff);
        updateQROrExValue(quest, true);

    }


    /**
     * QuestInfo 增加某一项的数值
     *
     * @param diff 增幅
     * @param min  最终结果的最小值
     * @param max  最终结果的最大值
     * @return
     * @出自类 QuestAPI
     */
    default void addNumberForQuestInfo(int questId, String key, int diff, int min, int max) {
        Quest quest = getQuest(getChr(), questId);
        long longPropertyEx = quest.getLongPropertyEx(key);
        // 设置区间中的最大值
        diff += longPropertyEx;
        diff = Math.max(min, Math.min(max, diff));

        quest.setPropertyEx(key, diff);
        updateQROrExValue(quest, true);
    }


    /**
     * 是否满足完成任务的条件
     *
     * @param id
     * @return
     * @出自类 QuestAPI
     */
    default boolean canCompleteQuest(int id) {
        return isComplete(id);
    }


    /**
     * 是否满足开始任务的条件
     *
     * @param id
     * @return
     * @出自类 QuestAPI
     */
    default boolean canStartQuest(int id) {
        QuestManager qm = getChr().getQuestManager();
        return qm.canStartQuest(id);
    }


    /**
     * 调试用，删除当前角色所有任务记录
     *
     * @出自类 QuestAPI
     */
    default void clearAllQuests() {
        throw new RuntimeException("not implemented");
    }


    /**
     * @出自类 QuestAPI
     */
    default void completeQuest(int questID) {
        if (isQuestActive(questID) && isComplete(questID)) {
            forceCompleteQuest(questID);
        }
    }

    default boolean isComplete(int questID) {
        return getChr().getQuestManager().isComplete(questID);
    }


    /**
     * 结束任务相关的倒计时，显示在头上
     *
     * @param action 1=开始
     * @param quest
     * @出自类 QuestAPI
     */
    default void endQuestClock(short action, int quest) {
        getChr().write(UserLocal.questResultQuestTimerEnd(action, quest));

    }


    /**
     * 强制调用任务的结束脚本
     *
     * @param npc
     * @param quest 任务ID
     * @出自类 QuestAPI
     */
    default void endQuestScript(int npc, int quest) {
        throw new RuntimeException("not implemented");

    }


    /**
     * @出自类 QuestAPI
     */
    default void forceCompleteQuest() {
        getChr().getQuestManager().completeQuest(getParentID());

    }


    /**
     * 强制结束任务，任务脚本里如果最后不执行该指令则无法完成任务
     *
     * @param questID 任务
     * @出自类 QuestAPI
     */
    default void forceCompleteQuest(int questID) {
        getChr().getQuestManager().completeQuest(questID);

    }


    /**
     * 强制放弃任务
     *
     * @出自类 QuestAPI
     */
    default void forceForfeitQuest() {
        forceForfeitQuest(getParentID());
    }


    /**
     * 强制放弃任务
     *
     * @出自类 QuestAPI
     */
    default void forceForfeitQuest(int questId) {
        deleteQuest(getChr(), questId);
    }


    /**
     * 强制开始当前任务
     *
     * @出自类 QuestAPI
     */
    default void forceStartQuest() {
        QuestManager qm = getChr().getQuestManager();
        qm.addQuest(QuestData.createQuestFromId(getParentID()));
    }


    /**
     * 强制开始任务，任务脚本里如果最后不执行该指令则无法开始任务
     *
     * @param id 任务
     * @出自类 QuestAPI
     */
    default void forceStartQuest(int id) {
        QuestManager qm = getChr().getQuestManager();
        qm.addQuest(QuestData.createQuestFromId(id));
    }


    /**
     * 强制开始任务，任务脚本里如果最后不执行该指令则无法开始任务
     *
     * @param id         任务
     * @param customData 对应wz里没有关联到exVariable的value，不少任务、NPC变动依赖特定任务的CustomData值
     * @出自类 QuestAPI
     */
    default void forceStartQuest(int questId, String customData) {
        QuestManager qm = getChr().getQuestManager();
        Quest quest = qm.getQuestById(questId);
        if (quest == null) {
            quest = QuestData.createQuestFromId(questId);
            quest.setQrValue(customData);
            quest.setId(questId); // 需要用到
            qm.addCustomQuest(quest);
        }
        quest.setQrValue(customData);
        updateQROrExValue(quest, false);
    }


    /**
     * @出自类 QuestAPI
     */
    default void forfeitQuest(int idd) {
        forceForfeitQuest(idd);
    }


    /**
     * @出自类 QuestAPI
     */
    default void getCharsFromQuestInfo(int questId, String key) {
        throw new RuntimeException("not implemented");
    }


    /**
     * 获得指定任务的 Info 信息 qrExValue
     *
     * @出自类 QuestAPI
     */
    default String getInfoQuest(int id) {
        return getQRExValue(getChr(), id);

    }


    /**
     * @出自类 QuestAPI
     */
    default long getNumberFromQuestCustomData(int quest) {
        String questCustomData = getQuestCustomData(getParentID());
        return Long.parseLong(questCustomData);
    }


    /**
     * 从QuestInfo读取数值
     *
     * @出自类 QuestAPI
     */
    default long getNumberFromQuestInfo(int questId, String key) {
        return getNumberFromQuestInfo(questId, key, 0);
    }


    /**
     * @出自类 QuestAPI
     */
    default long getNumberFromQuestInfo(int questId, String key, long defaultValue) {
        Quest quest = getQuest(getChr(), questId);
        long longPropertyEx = quest.getLongPropertyEx(key);
        return longPropertyEx == 0 ? defaultValue : longPropertyEx;
    }


    /**
     * @出自类 QuestAPI
     */
    default String getQuestCustomData() {
        return getQuestCustomData(getParentID());
    }


    /**
     * 获得玩家的指定任务的CustomData值，对应没有exVariable的value
     *
     * @param quest 任务
     * @return
     * @出自类 QuestAPI
     */
    default String getQuestCustomData(int quest) {
        return getQRValue(getChr(), quest);
    }


    /**
     * @return 任务的名称
     * @出自类 QuestAPI
     */
    default void getQuestName(int questId) {
        throw new RuntimeException("not implemented");
    }


    /**
     * 获得玩家的指定任务的状态实例，附带记录
     *
     * @param questId 任务
     * @return
     * @出自类 QuestAPI
     */
    default MapleQuestStatus getQuestRecord(int questId) {
        // todo 自己包装的
        Quest quest = getChr().getQuestManager().getQuestById(questId);
        MapleQuestStatus mapleQuestStatus = new MapleQuestStatus();
        mapleQuestStatus.setCustomData(quest.getQRValue());
        mapleQuestStatus.setStatus(quest.getStatus().getVal());


        return mapleQuestStatus;

    }


    /**
     * 获得玩家的指定任务的状态
     *
     * @param id
     * @return 0=未开始 1=进行中 2=已结束
     * @出自类 QuestAPI
     */
    default byte getQuestStatus(int id) {
        QuestManager qm = getChr().getQuestManager();
        Quest quest = qm.getQuestById(id);
        if (quest == null) {
            return 0;
        }
        QuestStatus status = quest.getStatus();
        return status.getVal();

    }


    /**
     * 获取某个qrExValue的 value值
     *
     * @出自类 QuestAPI
     */
    default String getStringFromQuestInfo(int questId, String key) {
        return getStringFromQuestInfo(questId, key, "");

    }


    /**
     * @出自类 QuestAPI
     */
    default String getStringFromQuestInfo(int questId, String key, String value) {
        Quest quest = getQuest(getChr(), questId);
        String propertyEx = quest.getPropertyEx(key);
        return propertyEx != null ? propertyEx : value;
    }


    /**
     * 检查玩家目标任务是否进行中
     *
     * @param id 任务
     * @return
     * @出自类 QuestAPI
     */
    default boolean isQuestActive(int id) {
        return getChr().getQuestManager().hasQuestInProgress(id);

    }


    /**
     * 检查玩家目标任务是否已完成
     *
     * @param id 任务
     * @return
     * @出自类 QuestAPI
     */
    default boolean isQuestFinished(int id) {
        return getChr().getQuestManager().hasQuestCompleted(id);

    }


    /**
     * @出自类 QuestAPI
     */
    default void setNumberForQuestCustomData(int quest, long data) {
        this.setQuestCustomData(quest, String.valueOf(data));

    }


    /**
     * QuestInfo 设置指定数值到Questex
     *
     * @出自类 QuestAPI
     */
    default void setNumberForQuestInfo(int questId, String key, long num) {
        Quest quest = getChr().getQuestManager().getQuestById(questId);
        quest.setPropertyEx(key, num);
        updateQROrExValue(quest, true);


    }


    /**
     * @出自类 QuestAPI
     */
    default void setQuestCustomData(String customData) {
        setQuestCustomData(getParentID(), customData);
    }


    /**
     * @出自类 QuestAPI
     */
    default void setQuestCustomData(int quest, String data) {
        setQRValueOrEx(quest, data, false);
    }


    /**
     * @出自类 QuestAPI
     */
    default void setStringForQuestInfo(int questId, String key, String num) {
        Quest quest = getChr().getQuestManager().getQuestById(questId);
        quest.setPropertyEx(key, num);
        updateQROrExValue(quest, true);
    }




    default void startQuest(int id) {
        QuestManager qm = getChr().getQuestManager();
        if (qm.canStartQuest(id)) {
            qm.addQuest(QuestData.createQuestFromId(id));
        } else {
            String s = "JS - quest: [" + id + "]: 您不符合开始此任务的要求，如果您认为这是意外情况，请在Bug中报告。.";
            log.info(s);
            getInitData().getChr().chatMessage(s);
        }
    }

    /**
     * 开始任务相关的倒计时，显示在头上
     *
     * @param action 1=开始
     * @param quest
     * @param time   单位毫秒
     * @出自类 QuestAPI
     */
    default void startQuestClock(short action, int quest, int time) {
        getChr().write(UserLocal.questResultQuestTimerStart(action, quest, time));

    }


    /**
     * 强制调用任务的开始脚本
     *
     * @param npc
     * @param quest 任务ID
     * @出自类 QuestAPI
     */
    default void startQuestScript(int npc, int quest) {
        throw new RuntimeException("not implemented");
    }


    /**
     * 更新玩家的指定任务的 Info，常用于exVariable指定的任务状态标记，也用于永久性数据存储
     *
     * @param id   任务
     * @param data 数据
     * @出自类 QuestAPI
     */
    default void updateInfoQuest(int id, String data) {
        setQRValueOrEx(id, data, true);

    }


    /**
     * 特殊任务，要求等待一段时间
     *
     * @param quest
     * @出自类 QuestAPI
     */
    default void waitForEvent(int quest) {
        throw new RuntimeException("not implemented");

    }


}
