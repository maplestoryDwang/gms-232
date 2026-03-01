package dwang.script.js.api.unwork;

import dwang.script.DwangScriptBaseApi;

public interface MapAPI extends DwangScriptBaseApi {

    default void warp(int map, int portal) {
        this.warp(map, portal, false);
    }

    default void 戴米安墓碑() { }

    default void obstacleFallRepeat(int count, String typeMin, String typeMax, int delay) { }

    default void spawnReactorOnGroundBelow(int id, int x, int y) { }

    default void warpMap(int mapId, int portal) { }

    default void getMap(int map) { }

    default void isAllReactorState(int reactorId, int state) { }

    default void obstacleFall魔王皮洛克(int delay) { }

    default void 戴米安未知() { }

    default void getMapId() { }

    default void scheduleWarpTask(int time, int to, int portal, int show) { }

    default void getPlayerCount(int mapId) { }

    default void 戴米安飞箭(int delay) { }

    default void destroyReactor(int mapId, int id) { }

    default void getMap() { }

    default void resetMap(int mapId) { }

    default void warp(int fieldId) {
        warp(fieldId, 0);

    }

    default void instantMapWarp(int Portal) { }

    default void warpParty(int mapId, int portal) { }

    default void forceStartReactor(int mapId, int id) { }

    default void obstacleFallRepeat(int count, String type, int delay) { }

    default void scheduleWarpTask(int time, int to, int portal, int show, int fadeOut) { }

    default void warp(int map, int portal, boolean fadeIn) {
        getChr().warp(map, portal);

    }

    default void warpParty(int mapId) { }

    default void scheduleOpenNpcTask(int time, int npc, String filename) { }

    default void hitReactor(int mapId, int id) { }

    default void scheduleWarpTask(int time, int to) { }

    default void scheduleWarpTask(int time, int to, int portal) { }

}
