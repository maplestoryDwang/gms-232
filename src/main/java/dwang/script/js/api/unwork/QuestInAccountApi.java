package dwang.script.js.api.unwork;

import dwang.script.DwangScriptBaseApi;

/**
 * @author dwang
 * @version 1.0.0
 * @Title
 * @ClassName AccountQuestApi.java
 * @Description 账号任务接口
 * @createTime 2026-03-16 13:57
 */

public interface QuestInAccountApi extends DwangScriptBaseApi {

    /**
     * 改变账户共享任务的信息
     *
     * @出自类 QuestAPI
     */
    default void addNumberForAccountQuestInfo(int questId, String key, int diff) {
    }


    /**
     * 改变账户共享任务的信息
     *
     * @出自类 QuestAPI
     */
    default void addNumberForAccountQuestInfo(int questId, String key, int diff, int min, int max) {
    }

    /**
     * 获取账户共享任务的信息
     *
     * @出自类 QuestAPI
     */
    default void getAccountQuestInfo(int questId) {
    }

    /**
     * 改变账户共享任务的信息
     *
     * @出自类 QuestAPI
     */
    default void getNumberFromAccountQuestInfo(int questId, String key, int value) {
    }


    /**
     * 改变账户共享任务的信息
     *
     * @出自类 QuestAPI
     */
    default void getStringFromAccountQuestInfo(int questId, String key, String value) {
    }

    /**
     * 改变账户共享任务的信息
     *
     * @出自类 QuestAPI
     */
    default void setAccountQuestInfo(int questId, String info) {
    }


    /**
     * 改变账户共享任务的信息
     *
     * @出自类 QuestAPI
     */
    default void setNumberForAccountQuestInfo(int questId, String key, int val) {
    }



    /**
     * 改变账户共享任务的信息
     *
     * @出自类 QuestAPI
     */
    default void setStringForAccountQuestInfo(int questId, String key, String val) {
    }

    /**
     * 同步账户任务信息到角色，相当于简易账户数据库
     *
     * @出自类 QuestAPI
     */
    default void synchFromAccountQuestInfo(int questInfo) {
    }


    /**
     * 同步角色任务信息到账户，相当于简易账户数据库
     *
     * @出自类 QuestAPI
     */
    default void synchToAccountQuestInfo(int questInfo) {
    }

}
