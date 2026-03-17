package dwang.script.js.api.unwork;
import dwang.script.DwangScriptBaseApi;

public interface 冒险岛联盟API extends DwangScriptBaseApi {

    /**
         * 账号下已装备的联盟卡数量总和
         * @出自类 冒险岛联盟API
         */
    default void get已装备角色卡数量总和() {
        throw new RuntimeException("not implemented");
    }



    /**
         * 账号下所有的联盟卡数量总和
         * @出自类 冒险岛联盟API
         */
    default void get角色卡数量总和() {
        throw new RuntimeException("not implemented");
    }



    /**
         * 账号下所有的联盟卡角色等级总和
         * @出自类 冒险岛联盟API
         */
    default void get角色卡等级总和() {
        throw new RuntimeException("not implemented");
    }



    /**
         * @出自类 冒险岛联盟API
    */
    default void 冒险岛联盟_升级(int nextRank, int coin) {
        throw new RuntimeException("not implemented");
    }



    /**
         * @出自类 冒险岛联盟API
    */
    default void 冒险岛联盟_每周获得联盟币排行榜() {
        throw new RuntimeException("not implemented");
    }



    /**
         * @出自类 冒险岛联盟API
    */
    default void 冒险岛联盟_猎龙初始化() {
        throw new RuntimeException("not implemented");
    }



    /**
         * @出自类 冒险岛联盟API
    */
    default void 冒险岛联盟_猎龙数据更新() {
        throw new RuntimeException("not implemented");
    }



    /**
         * @出自类 冒险岛联盟API
    */
    default void 冒险岛联盟_获得联盟币(int coin) {
        throw new RuntimeException("not implemented");
    }



    /**
         * @出自类 冒险岛联盟API
    */
    default void 冒险岛联盟_解锁预设栏位(int slot) {
        throw new RuntimeException("not implemented");
    }



    /**
         * @出自类 冒险岛联盟API
    */
    default void 冒险岛联盟_领取猎龙奖励() {
        throw new RuntimeException("not implemented");
    }



}
