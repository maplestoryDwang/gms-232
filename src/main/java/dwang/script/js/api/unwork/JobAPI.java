package dwang.script.js.api.unwork;

import dwang.script.DwangScriptBaseApi;

public interface JobAPI extends DwangScriptBaseApi {

    /**
         * 换职业
         *
         * @param job 职业ID
         * @出自类 JobAPI
         */
    default void changeJob(int job) { }



    /**
         * @出自类 JobAPI
    */
    default void changeJobById(int job) { }



    /**
         * @出自类 JobAPI
    */
    default void getBeginner() { }



    /**
         * 获得玩家当前职业ID
         * @出自类 JobAPI
         */
    default void getJob() { }



    /**
         * 获得玩家当前职业名称
         * @出自类 JobAPI
         */
    default void getJobName() { }



    /**
         * 查看指定职业的名称
         *
         * @param jobId 职业ID
         * @出自类 JobAPI
         */
    default void getJobName(int jobId) { }



    /**
         * @出自类 JobAPI
    */
    default void getMasteryBooksByJob(String job) { }



    /**
         * @出自类 JobAPI
    */
    default void is3转() { }



    /**
         * @出自类 JobAPI
    */
    default void isBeginnerJob() { }



    /**
         * 神之子切换
         * @出自类 JobAPI
         */
    default void onZeroInfo(int type) { }



    /**
         * 显示神之子武器晋升UI
         * @出自类 JobAPI
         */
    default void openZeroUpgradeUI() { }



    /**
         * @param skill       生活技能ID
         * @param resultLevel 0~3，对应B、C、A、A+
         * @param exp         经验值
         * @param levelup     是否给出升级提示
         * @return
         * @出自类 JobAPI
         */
    default void zeroLearnProfessionSkill(int skill, int resultLevel, int exp, int levelup) { }



    /**
         * 神之子读书列表
         *
         * @param count
         * @出自类 JobAPI
         */
    default void zeroReadBook(int count) { }



    /**
         * 神之子读书结果
         *
         * @param v1
         * @param v2
         * @param v3
         * @param text
         * @param npc
         * @param v4
         * @param s1
         * @param s2
         * @出自类 JobAPI
         */
    default void zeroReadBookResult(int v1, int v2, int v3, String text, int npc, int v4, int s1, int s2) { }



    /**
         * 适用于强化失败后恢复装备
         * @出自类 JobAPI
         */
    default void zeroRestoreWeapon() { }



    /**
         * 检查玩家当前职业是否匹配对应转职数，比如1转、2转……
         * @出自类 JobAPI
         */
    default void 匹配转职数(int 转数) { }



    /**
         * @出自类 JobAPI
    */
    default void 神之子_完成剧情任务() { }



}
