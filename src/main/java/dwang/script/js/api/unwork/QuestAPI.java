package dwang.script.js.api.unwork;

import dwang.script.DwangScriptBaseApi;
import net.swordie.ms.client.character.Char;
import net.swordie.ms.client.character.quest.Quest;
import net.swordie.ms.client.character.quest.QuestManager;
import net.swordie.ms.connection.packet.WvsContext;
import net.swordie.ms.connection.packet.model.MessagePacket;
import net.swordie.ms.enums.QuestStatus;
import net.swordie.ms.loaders.QuestData;

public interface QuestAPI extends DwangScriptBaseApi {

    /**
         * 改变账户共享任务的信息
         * @出自类 QuestAPI
         */
    default void addNumberForAccountQuestInfo(int questId, String key, int diff) { }



    /**
         * 改变账户共享任务的信息
         * @出自类 QuestAPI
         */
    default void addNumberForAccountQuestInfo(int questId, String key, int diff, int min, int max) { }



    /**
         * @出自类 QuestAPI
    */
    default void addNumberForQuestCustomData(int quest, int diff) { }



    /**
         * QuestInfo 增加某一项的数值
         * 举例：cm.addNumberForQuestInfo(1477,'count',10); 增加10点核心碎片
         * @param diff 增幅
         * @出自类 QuestAPI
         */
    default void addNumberForQuestInfo(int questId, String key, int diff) { }



    /**
         * QuestInfo 增加某一项的数值
         *
         * @param diff 增幅
         * @param min  最终结果的最小值
         * @param max  最终结果的最大值
         * @return
         * @出自类 QuestAPI
         */
    default void addNumberForQuestInfo(int questId, String key, int diff, int min, int max) { }



    /**
         * 是否满足完成任务的条件
         *
         * @param id
         * @return
         * @出自类 QuestAPI
         */
    default void canCompleteQuest(int id) { }



    /**
         * 是否满足开始任务的条件
         *
         * @param id
         * @return
         * @出自类 QuestAPI
         */
    default void canStartQuest(int id) { }



    /**
         * 调试用，删除当前角色所有任务记录
         * @出自类 QuestAPI
         */
    default void clearAllQuests() { }



    /**
         * @出自类 QuestAPI
    */
    default void completeQuest(int questID) {
        if (hasQuest(questID) && isComplete(questID)) {
            forceCompleteQuest(questID);
        }
    }
    default boolean isComplete(int questID) {
        return getChr().getQuestManager().isComplete(questID);
    }
    default boolean hasQuest(int id) {
        return getChr().getQuestManager().hasQuestInProgress(id);
    }



    /**
         * 结束任务相关的倒计时，显示在头上
         *
         * @param action 1=开始
         * @param quest
         * @出自类 QuestAPI
         */
    default void endQuestClock(int action, int quest) {

    }



    /**
         * 强制调用任务的结束脚本
         *
         * @param npc
         * @param quest 任务ID
         * @出自类 QuestAPI
         */
    default void endQuestScript(int npc, int quest) { }



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
         * @出自类 QuestAPI
         */
    default void forceForfeitQuest() { }



    /**
         * 强制放弃任务
         * @出自类 QuestAPI
         */
    default void forceForfeitQuest(int id) { }



    /**
         * 强制开始当前任务
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
    default void forceStartQuest(int questId, String qrValue) {

        QuestManager qm = getChr().getQuestManager();
        Quest quest = qm.getQuestById(questId);
        if (quest == null) {
            quest = QuestData.createQuestFromId(questId);
            quest.setQrValue(qrValue);
            qm.addCustomQuest(quest);
        }
        quest.setQrValue(qrValue);
        updateQRValue(questId, true);
    }



    /**
         * 强制开始任务，任务脚本里如果最后不执行该指令则无法开始任务
         *
         * @param id         任务
         * @param customData 对应wz里没有关联到exVariable的value，不少任务、NPC变动依赖特定任务的CustomData值
         * @param siliently  避免系统任务等情况触发后续对话
         * @出自类 QuestAPI
         */
    default void forceStartQuest(int id, String customData, int siliently) { }



    /**
         * @出自类 QuestAPI
    */
    default void forfeitQuest(int idd) { }



    /**
         * 获取账户共享任务的信息
         * @出自类 QuestAPI
         */
    default void getAccountQuestInfo(int questId) { }



    /**
         * @出自类 QuestAPI
    */
    default void getCharsFromQuestInfo(int questId, String key) { }



    /**
         * 获得指定任务的 Info 信息
         * @出自类 QuestAPI
         */
    default void getInfoQuest(int id) { }



    /**
         * 改变账户共享任务的信息
         * @出自类 QuestAPI
         */
    default void getNumberFromAccountQuestInfo(int questId, String key, int value) { }



    /**
         * @出自类 QuestAPI
    */
    default void getNumberFromQuestCustomData(int quest) { }



    /**
         * 从QuestInfo读取数值
         * @出自类 QuestAPI
         */
    default void getNumberFromQuestInfo(int questId, String key) { }



    /**
         * @出自类 QuestAPI
    */
    default void getNumberFromQuestInfo(int questId, String key, int value) { }



    /**
         * @出自类 QuestAPI
    */
    default void getQuestCustomData() { }



    /**
         * 获得玩家的指定任务的CustomData值，对应没有exVariable的value
         *
         * @param quest 任务
         * @return
         * @出自类 QuestAPI
         */
    default void getQuestCustomData(int quest) { }



    /**
         * @return 任务的名称
         * @出自类 QuestAPI
         */
    default void getQuestName(int questId) { }



    /**
         * 获得玩家的指定任务的状态实例，附带记录
         *
         * @param id 任务
         * @return
         * @出自类 QuestAPI
         */
    default void getQuestRecord(int id) { }



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
        QuestStatus status = quest.getStatus();
        return status.getVal();

    }



    /**
         * 改变账户共享任务的信息
         * @出自类 QuestAPI
         */
    default void getStringFromAccountQuestInfo(int questId, String key, String value) { }



    /**
         * @出自类 QuestAPI
    */
    default void getStringFromQuestInfo(int questId, String key) { }



    /**
         * @出自类 QuestAPI
    */
    default void getStringFromQuestInfo(int questId, String key, String value) { }



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
    default void isValidQuest(int id) { }



    /**
         * @出自类 QuestAPI
    */
    default void questMobKilled(int id, int skillID) { }



    /**
         * 改变账户共享任务的信息
         * @出自类 QuestAPI
         */
    default void setAccountQuestInfo(int questId, String info) { }



    /**
         * 改变账户共享任务的信息
         * @出自类 QuestAPI
         */
    default void setNumberForAccountQuestInfo(int questId, String key, int val) { }



    /**
         * @出自类 QuestAPI
    */
    default void setNumberForQuestCustomData(int quest, int data) { }



    /**
         * QuestInfo 设置指定数值
         * @出自类 QuestAPI
         */
    default void setNumberForQuestInfo(int questId, String key, int num) { }



    /**
         * @出自类 QuestAPI
    */
    default void setQuestCustomData(String customData) { }



    /**
         * @出自类 QuestAPI
    */
    default void setQuestCustomData(int quest, String data) { }



    /**
         * 改变账户共享任务的信息
         * @出自类 QuestAPI
         */
    default void setStringForAccountQuestInfo(int questId, String key, String val) { }



    /**
         * @出自类 QuestAPI
    */
    default void setStringForQuestInfo(int questId, String key, Object num) { }



    /**
         * *
         * 解放内在能力效果
         * @出自类 QuestAPI
         */
    default void showCompleteQuestEffect() { }

    default void startQuest(int id) {
        QuestManager qm = getChr().getQuestManager();
        if (qm.canStartQuest(id)) {
            qm.addQuest(QuestData.createQuestFromId(id));
        } else {
            String s = "JS - quest: [" + id +"]: 您不符合开始此任务的要求，如果您认为这是意外情况，请在Bug中报告。.";
            log.info(s);
            getInitData(). getChr().chatMessage(s);
        }    }

    /**
         * 开始任务相关的倒计时，显示在头上
         *
         * @param action 1=开始
         * @param quest
         * @param time   单位毫秒
         * @出自类 QuestAPI
         */
    default void startQuestClock(int action, int quest, int time) { }



    /**
         * 强制调用任务的开始脚本
         *
         * @param npc
         * @param quest 任务ID
         * @出自类 QuestAPI
         */
    default void startQuestScript(int npc, int quest) { }



    /**
         * 同步账户任务信息到角色，相当于简易账户数据库
         * @出自类 QuestAPI
         */
    default void synchFromAccountQuestInfo(int questInfo) { }



    /**
         * 同步角色任务信息到账户，相当于简易账户数据库
         * @出自类 QuestAPI
         */
    default void synchToAccountQuestInfo(int questInfo) { }



    /**
         * 更新玩家的指定任务的 Info，常用于exVariable指定的任务状态标记，也用于永久性数据存储
         *
         * @param id   任务
         * @param data 数据
         * @出自类 QuestAPI
         */
    default void updateInfoQuest(int id, String data) {
        setQRValue(id, data, true);

    }

    default void setQRValue(int questId, String qrValue, boolean ex) {
        setQRValue(getChr(), questId, qrValue, ex);
    }


    default void setQRValue(Char chr, int questId, String qrValue, boolean ex) {
        Quest quest = chr.getQuestManager().getQuestById(questId);
        if (quest == null) {
            quest = QuestData.createQuestFromId(questId);
            chr.getQuestManager().addQuest(quest);
        }
        quest.setQrValue(qrValue);
        updateQRValue(questId, ex);
    }

    default void updateQRValue(int questId, boolean ex) {
        Quest quest = getChr().getQuestManager().getQuestById(questId);
        if (quest == null) {
            log.error(String.format("The user does not have the quest %d.", questId));
            return;
        }
        if (ex) {
            getChr().write(WvsContext.message(MessagePacket.questRecordMessage(quest)));
            getChr().write(WvsContext.message(MessagePacket.questRecordExMessage(quest)));
        } else {
            getChr().write(WvsContext.message(MessagePacket.questRecordMessage(quest)));
        }
    }


    /**
         * 特殊任务，要求等待一段时间
         *
         * @param quest
         * @出自类 QuestAPI
         */
    default void waitForEvent(int quest) { }



}
