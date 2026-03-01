package dwang.script.js.api.unwork;
import dwang.script.DwangScriptBaseApi;

public interface 版本活动API extends DwangScriptBaseApi {

    default void 技能跟随队友(int npc, int skill, int mode) { }

    default void eventSKill(int v1, int v2, int b1, int b2, int v3, int skill, int b3, int v4, int v5, int v6, int v7, int v8, int cd, int s1) { }

    default void 版本活动_无限怪物挑战_更新难度等级(int level, int curBar, int totalBar, int totalHP, int curHP) { }

    default void 加速_使用加速器() { }

    default void 拼图大师_举起拼图(Reactor reactor) { }

    default void 版本活动_无限怪物挑战_更新积分(int score) { }

    default void 黄金马车_初始化(int quest, int ui) { }

    default void eventSKill(int value0) { }

}
