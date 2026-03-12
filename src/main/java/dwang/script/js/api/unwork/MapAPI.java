package dwang.script.js.api.unwork;

import dwang.script.DwangScriptBaseApi;

public interface MapAPI extends DwangScriptBaseApi {

    /**
         * @出自类 MapAPI
    */
    default void destroyReactor(int mapId, int id) { }



    /**
         * 强制触发反应堆
         *
         * @param mapId 地图
         * @param id    反应堆
         * @出自类 MapAPI
         */
    default void forceStartReactor(int mapId, int id) { }



    /**
         * 获得玩家当前地图实例
         * @出自类 MapAPI
         */
    default void getMap() { }



    /**
         * 获得指定地图实例
         * @出自类 MapAPI
         */
    default void getMap(int map) { }



    /**
         * 获得玩家当前地图ID
         * @出自类 MapAPI
         */
    default int getMapId() {
        return getField().getId();
    }



    /**
         * 查看指定地图内玩家数量
         *
         * @param mapId 地图
         * @return
         * @出自类 MapAPI
         */
    default void getPlayerCount(int mapId) { }



    /**
         * 强制触发反应堆
         *
         * @param mapId 地图
         * @param id    反应堆
         * @出自类 MapAPI
         */
    default void hitReactor(int mapId, int id) { }



    /**
         * 玩具塔出现,瞬移到某个传送位置
         *
         * @param Portal
         * @出自类 MapAPI
         */
    default void instantMapWarp(int Portal) { }



    /**
         * @出自类 MapAPI
    */
    default void isAllReactorState(int reactorId, int state) { }



    /**
         * 重复陨石掉落事件，直到没有人
         * @出自类 MapAPI
         */
    default void obstacleFallRepeat(int count, String type, int delay) { }



    /**
         * @出自类 MapAPI
    */
    default void obstacleFallRepeat(int count, String typeMin, String typeMax, int delay) { }



    /**
         * V172新复古，魔王皮洛克专用版本
         * @出自类 MapAPI
         */
    default void obstacleFall魔王皮洛克(int delay) { }



    /**
         * 重置指定地图
         *
         * @param mapId 地图
         * @出自类 MapAPI
         */
    default void resetMap(int mapId) { }



    /**
         * @出自类 MapAPI
    */
    default void scheduleOpenNpcTask(int time, int npc, String filename) { }



    /**
         * @出自类 MapAPI
    */
    default void scheduleWarpTask(int time, int to) { }



    /**
         * @出自类 MapAPI
    */
    default void scheduleWarpTask(int time, int to, int portal) { }



    /**
         * @出自类 MapAPI
    */
    default void scheduleWarpTask(int time, int to, int portal, int show) { }



    /**
         * @出自类 MapAPI
    */
    default void scheduleWarpTask(int time, int to, int portal, int show, int fadeOut) { }



    /**
         * 在玩家当前地图生成一个反应堆
         *
         * @param id 反应堆
         * @param x
         * @param y
         * @出自类 MapAPI
         */
    default void spawnReactorOnGroundBelow(int id, int x, int y) { }



    /**
         * 传送到指定地点
         *
         * @param fieldId 地图
         * @出自类 MapAPI
         */
    default void warp(int fieldId) {
        warp(fieldId, 0);

    }



    /**
         * @出自类 MapAPI
    */
    default void warp(int map, int portal) {
        getChr().warp(map, portal);

    }



    /**
         * 传送到指定地点
         *
         * @param map    地图
         * @param portal 传送门
         * @param fadeIn 冻结淡入效果
         * @出自类 MapAPI
         */
    default void warp(int map, int portal, boolean fadeIn) {
        getChr().warp(map, portal);

    }



    /**
         * 传送玩家所在全地图人到指定地点
         *
         * @param portal 传送门
         * @出自类 MapAPI
         */
    default void warpMap(int mapId, int portal) {

    }



    /**
         * 传送玩家所在团队到指定地点
         * @出自类 MapAPI
         */
    default void warpParty(int mapId) { }



    /**
         * 传送玩家所在团队到指定地点
         *
         * @param mapId  地图
         * @param portal 传送门
         * @出自类 MapAPI
         */
    default void warpParty(int mapId, int portal) { }



    /**
         * 戴米安墓碑
         * @出自类 MapAPI
         */
    default void 戴米安墓碑() { }



    /**
         * @出自类 MapAPI
    */
    default void 戴米安未知() { }



    /**
         * 戴米安飞箭相关
         *
         * @param delay
         * @出自类 MapAPI
         */
    default void 戴米安飞箭(int delay) { }



}
