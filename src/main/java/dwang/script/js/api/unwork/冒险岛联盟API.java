package dwang.script.js.api.unwork;

import dwang.script.DwangScriptBaseApi;

public interface 冒险岛联盟API extends DwangScriptBaseApi {

    default void 冒险岛联盟_领取猎龙奖励() { }

    default void get角色卡数量总和() { }

    default void get角色卡等级总和() { }

    default void 冒险岛联盟_解锁预设栏位(int slot) { }

    default void 冒险岛联盟_猎龙数据更新() { }

    default void get已装备角色卡数量总和() { }

    default void 冒险岛联盟_升级(int nextRank, int coin) { }

    default void 冒险岛联盟_获得联盟币(int coin) { }

    default void 冒险岛联盟_每周获得联盟币排行榜() { }

    default void 冒险岛联盟_猎龙初始化() { }

}
