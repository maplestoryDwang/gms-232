package dwang.script.js.api.unwork;

import dwang.script.DwangScriptBaseApi;
import net.swordie.ms.connection.packet.field.FieldPacket;
import net.swordie.ms.enums.ClockType;
import net.swordie.ms.handlers.executors.EventManager;
import net.swordie.ms.scripts.FieldTransferInfo;
import net.swordie.ms.world.field.Clock;
import net.swordie.ms.world.field.ClockPacket;
import net.swordie.ms.world.field.Field;

import java.time.Duration;
import java.util.Arrays;
import java.util.Map;
import java.util.concurrent.ScheduledFuture;
import java.util.concurrent.TimeUnit;

public interface MapAPI extends DwangScriptBaseApi {

    String[] fieldEventMethodNames = new String[]{
            "createObstacleAtom",
            "createObstacleAtomToFoothold",
    };

    /**
     * @出自类 MapAPI
     */
    default void destroyReactor(int mapId, int id) {
        throw new RuntimeException("not implemented");
    }


    /**
     * 强制触发反应堆
     *
     * @param mapId 地图
     * @param id    反应堆
     * @出自类 MapAPI
     */
    default void forceStartReactor(int mapId, int id) {
        throw new RuntimeException("not implemented");
    }


    /**
     * 获得玩家当前地图实例
     *
     * @出自类 MapAPI
     */
    default Field getMap() {
        return getField();
    }


    /**
     * 获得指定地图实例
     *
     * @出自类 MapAPI
     */
    default Field getMap(int mapId) {
        return getChr().getOrCreateFieldByCurrentInstanceType(mapId);
    }


    /**
     * 获得玩家当前地图ID
     *
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
    default void getPlayerCount(int mapId) {
        throw new RuntimeException("not implemented");
    }


    /**
     * 强制触发反应堆
     *
     * @param mapId 地图
     * @param id    反应堆
     * @出自类 MapAPI
     */
    default void hitReactor(int mapId, int id) {
        throw new RuntimeException("not implemented");
    }


    /**
     * 玩具塔出现,瞬移到某个传送位置
     *
     * @param Portal
     * @出自类 MapAPI
     */
    default void instantMapWarp(int Portal) {
        throw new RuntimeException("not implemented");
    }


    /**
     * @出自类 MapAPI
     */
    default void isAllReactorState(int reactorId, int state) {
        throw new RuntimeException("not implemented");
    }


    /**
     * 重复陨石掉落事件，直到没有人
     *
     * @出自类 MapAPI
     */
    default void obstacleFallRepeat(int count, String type, int delay) {
        throw new RuntimeException("not implemented");
    }


    /**
     * @出自类 MapAPI
     */
    default void obstacleFallRepeat(int count, String typeMin, String typeMax, int delay) {
        throw new RuntimeException("not implemented");
    }


    /**
     * 重置指定地图
     *
     * @param mapId 地图
     * @出自类 MapAPI
     */
    default void resetMap(int mapId) {
        Field field = getField();
        if (field != null && field.getId() == mapId) {
            field.clear();
        } else {
            getInitData().getChr().chatMessage("resetMap error!");

        }
    }


    /**
     * @出自类 MapAPI
     */
    default void scheduleOpenNpcTask(int time, int npc, String filename) {
        throw new RuntimeException("not implemented");
    }


    /**
     * @出自类 MapAPI
     */
    default void scheduleWarpTask(int time, Field to) {
        scheduleWarpTask(time, to.getId(), 0);

    }


    default void scheduleWarpTask(int time, int to) {
        scheduleWarpTask(time, to, 0);
    }


    /**
     * @出自类 MapAPI
     */
    default void scheduleWarpTask(int time, int to, int portal) {
        scheduleWarpTask(time, to, portal, true);
    }


    /**
     * @出自类 MapAPI
     */
    default void scheduleWarpTask(int time, int to, int portal, boolean show) {
        scheduleWarpTask(time, to, portal, show, false);
    }


    /**
     * @param second
     * @param to
     * @param portal
     * @param show    是否显示头顶的时间
     * @param fadeOut
     */
    default void scheduleWarpTask(int second, int to, int portal, boolean show, boolean fadeOut) {
        invokeAfterDelay(second * 1000, "warp", to);
        if (show) {
            createStopWatch(second);
        }
    }

    default Clock createStopWatch(int seconds) {
        return new Clock(ClockType.StopWatch, getField(), seconds);
    }

    /**
     * 定时执行
     *
     * @param delay
     * @param methodName
     * @param args
     * @return
     */
    default ScheduledFuture invokeAfterDelay(long delay, String methodName, Object... args) {
        Object[] funcArgs = args;
        if ("warp".equals(methodName) || "warpParty".equalsIgnoreCase(methodName)) {
            // kinda hacky method to make warps execute immediately when invoking after delay
            funcArgs = new Object[args.length + 1];
            System.arraycopy(args, 0, funcArgs, 0, args.length);
            funcArgs[funcArgs.length - 1] = false;
        }
        Object[] a = funcArgs;
        ScheduledFuture sf = EventManager.addEvent(() -> invoke(this, methodName, a), delay);

        var isFieldEvent = isFieldEventMethodName(methodName);

        addEvent(sf, isFieldEvent);
        return sf;
    }

    private static boolean isFieldEventMethodName(String methodName) {
        return Arrays.asList(fieldEventMethodNames).contains(methodName);
    }

    default void addEvent(ScheduledFuture event, boolean isFieldEvent) {
        getEvents().put(event, isFieldEvent);
    }

    private Map<ScheduledFuture, Boolean> getEvents() {
        return getInitData().getEvents();
    }

    default void addEvent(ScheduledFuture event) {
        addEvent(event, false);
    }


    /**
     * 在玩家当前地图生成一个反应堆
     *
     * @param id 反应堆
     * @param x
     * @param y
     * @出自类 MapAPI
     */
    default void spawnReactorOnGroundBelow(int id, int x, int y) {
        throw new RuntimeException("not implemented");
    }


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

    default void warp(int fieldId, boolean executeAfterScript) {
        warp(fieldId, 0, executeAfterScript, false);
    }

    default void warp(int fieldId, int portalId, boolean executeAfterScript, boolean instanceField) {
        if (executeAfterScript) {
            FieldTransferInfo fti = getInitData().getFieldTransferInfo();
            fti.setFieldId(fieldId);
            fti.setPortal(portalId);
            fti.setIsInstanceField(instanceField);
        } else {
            getChr().warp(fieldId, portalId);
        }
    }


    /**
     * 传送玩家所在全地图人到指定地点
     *
     * @param portal 传送门
     * @出自类 MapAPI
     */
    default void warpMap(int mapId, int portal) {
        throw new RuntimeException("not implemented");
    }


    /**
     * 传送玩家所在团队到指定地点
     *
     * @出自类 MapAPI
     */
    default void warpParty(int mapId) {
        throw new RuntimeException("not implemented");
    }


    /**
     * 传送玩家所在团队到指定地点
     *
     * @param mapId  地图
     * @param portal 传送门
     * @出自类 MapAPI
     */
    default void warpParty(int mapId, int portal) {
        throw new RuntimeException("not implemented");
    }


    /**
     * 戴米安墓碑
     *
     * @出自类 MapAPI
     */
    default void 戴米安墓碑() {
        throw new RuntimeException("not implemented");
    }


    /**
     * @出自类 MapAPI
     */
    default void 戴米安未知() {
        throw new RuntimeException("not implemented");
    }


    /**
     * 戴米安飞箭相关
     *
     * @param delay
     * @出自类 MapAPI
     */
    default void 戴米安飞箭(int delay) {
        throw new RuntimeException("not implemented");
    }


}
