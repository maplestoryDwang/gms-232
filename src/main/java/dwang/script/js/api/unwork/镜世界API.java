package dwang.script.js.api.unwork;
import dwang.script.DwangScriptBaseApi;

public interface 镜世界API extends DwangScriptBaseApi {

    /**
         * 显示神之子镜世界副本列表
         *
         * @param names
         * @param ids
         * @param descs
         * @出自类 镜世界API
         */
    default void setMirrorDungeonInfo(Object names, Object ids, Object descs) { }



    /**
         * 镜世界副本，结算
         *
         * @param cur
         * @param best
         * @param count
         * @param exp
         * @param wp
         * @param s1
         * @param v1
         * @出自类 镜世界API
         */
    default void showMirrorDungeonReward(int cur, int best, int count, int exp, int wp, int s1, int v1) { }



    /**
         * 镜世界副本，更新BOSS
         *
         * @param type
         * @param boss
         * @出自类 镜世界API
         */
    default void updateMirrorDungeonBoss(int type, int boss) { }



    /**
         * 镜世界副本，更新地图
         *
         * @param type
         * @param count
         * @param maps
         * @出自类 镜世界API
         */
    default void updateMirrorDungeonMap(int type, int count, Object maps) { }



}
