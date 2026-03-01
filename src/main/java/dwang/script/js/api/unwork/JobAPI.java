package dwang.script.js.api.unwork;

import dwang.script.DwangScriptBaseApi;

public interface JobAPI extends DwangScriptBaseApi {

    default void getJob() { }

    default void 神之子_完成剧情任务() { }

    default void zeroRestoreWeapon() { }

    default void 匹配转职数(int 转数) { }

    default void zeroReadBookResult(int v1, int v2, int v3, String text, int npc, int v4, int s1, int s2) { }

    default void changeJob(int job) { }

    default void onZeroInfo(int type) { }

    default void openZeroUpgradeUI() { }

    default void getBeginner() { }

    default void getJobName(int jobId) { }

    default void getJobName() { }

    default void is3转() { }

    default void getMasteryBooksByJob(String job) { }

    default void zeroLearnProfessionSkill(int skill, int resultLevel, int exp, int levelup) { }

    default void zeroReadBook(int count) { }

    default void changeJobById(int job) { }

    default void isBeginnerJob() { }

}
