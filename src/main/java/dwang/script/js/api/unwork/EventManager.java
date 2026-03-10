package dwang.script.js.api.unwork;

import dwang.script.DwangScriptBaseApi;
import net.swordie.ms.life.mob.Mob;
import net.swordie.ms.world.field.Field;

public interface EventManager extends DwangScriptBaseApi {

    /**
         * @出自类 EventManager
    */
    default void addNumberProperty(String key, int value) { }



    /**
         * @出自类 EventManager
    */
    default void broadcastPlayerMsg(int type, String msg) { }



    /**
         * @出自类 EventManager
    */
    default void broadcastServerMsg(String msg) { }



    /**
         * @出自类 EventManager
    */
    default void broadcastServerMsg(int type, String msg, int weather) { }



    /**
         * @出自类 EventManager
    */
    default void broadcastShip(int mapId, int effect) { }



    /**
         * @出自类 EventManager
    */
    default void broadcastYellowMsg(String msg) { }



    /**
         * 停止所有定时任务
         * @出自类 EventManager
         */
    default void cancelSchedlue() { }



    /**
         * @出自类 EventManager
    */
    default void dispose() { }



    /**
         * @出自类 EventManager
    */
    default void disposeIfPlayerBelow(int size, int towarp) { }



    /**
         * @出自类 EventManager
    */
    default void disposeIfPlayerBelow(int size, int towarp, int portal) { }



    /**
         * @出自类 EventManager
    */
    default void getChannel() { }



    /**
         * @出自类 EventManager
    */
    default void getDisconnected() { }



    /**
         * @出自类 EventManager
    */
    default void getIv() { }



    /**
         * @出自类 EventManager
    */
    default void getMapFactoryMap(int mapId) { }



    /**
         * @出自类 EventManager
    */
    default void getMapIds() { }



    /**
         * @出自类 EventManager
    */
    default void getMapInstance(int args) { }



    /**
         * @出自类 EventManager
    */
    default void getMobs() { }



    /**
         * @出自类 EventManager
    */
    default void getMonster(int id) { }



    /**
         * @出自类 EventManager
    */
    default void getName() { }



    /**
         * @出自类 EventManager
    */
    default void getNumberProperty(String key) { }



    /**
         * @出自类 EventManager
    */
    default void getPlayerCount() { }



    /**
         * @出自类 EventManager
    */
    default void getPlayers() { }



    /**
         * @出自类 EventManager
    */
    default void getProperties() { }



    /**
         * @出自类 EventManager
    */
    default void getProperty(String key) { }



    /**
         * @出自类 EventManager
    */
    default void getTimeLeft() { }



    /**
         * 初始化痛苦迷宫
    
         *
    
         * @param style  0=绿色 1=红色
    
         * @param height
    
         * @param width
         * @出自类 EventManager
         */
    default void initMaze(int style, int height, int width) { }



    /**
         * @出自类 EventManager
    */
    default void initPropArrayRandom(String name, int min, int max, int amount) { }



    /**
         * @出自类 EventManager
    */
    default void isTimerStarted() { }



    /**
         * @出自类 EventManager
    */
    default void onItemPickedUp(Character chr, int itemID) { }



    /**
         * @出自类 EventManager
    */
    default void onMapChanged(Character chr, int mapId) { }



    /**
         * @出自类 EventManager
    */
    default void onMonsterDamaged(Character chr, Mob mob, int realDamage, int attackDamage) { }



    /**
         * 活动中角色杀死怪物触发事件
    
         *
    
         * @param chr
    
         * @param mob
         * @出自类 EventManager
         */
    default void onMonsterKilled(Character chr, Mob mob) { }



    /**
         * @出自类 EventManager
    */
    default void onPartyDisbanded() { }



    /**
         * @出自类 EventManager
    */
    default void onPlayerDisconnected(Character chr, int idz) { }



    /**
         * @出自类 EventManager
    */
    default void onPlayerKilled(Character chr) { }



    /**
         * @出自类 EventManager
    */
    default void onPlayerRevived(Character chr) { }



    /**
         * @出自类 EventManager
    */
    default void onTimeOut(int delay) { }



    /**
         * 从指定数值里随机抽取N个值
    
         *
    
         * @param arr   long[]
    
         * @param amout 目标数量，小于入参则不会重复，否则会重复
    
         * @return long[]
         * @出自类 EventManager
         */
    default void randArray(Object arr, int amout) { }



    /**
         * 从指定范围的数值里随机抽取N个值
    
         *
    
         * @param min   long
    
         * @param max   long
    
         * @param amout 目标数量，小于入参则不会重复，否则会重复
    
         * @return long[]
         * @出自类 EventManager
         */
    default void randArray(int min, int max, int amout) { }



    /**
         * @出自类 EventManager
    */
    default void registerParty(Object party, Field map) { }



    /**
         * @出自类 EventManager
    */
    default void restartEventTimer(int time) { }



    /**
         * @出自类 EventManager
    */
    default void restartEventTimer(int time, int inSecond) { }



    /**
         * @出自类 EventManager
    */
    default void schedule(String methodName, int delay) { }



    /**
         * @出自类 EventManager
    */
    default void scheduleAtTimestamp(String methodName, int timestamp) { }



    /**
         * 不同场景需要不同时钟效果
    
         *
    
         * @param time         单位毫秒
    
         * @param showInSecond 默认显示为 分秒
         * @出自类 EventManager
         */
    default void showClockEffect(Character chr, int time, int showInSecond) { }



    /**
         * @出自类 EventManager
    */
    default void startEventTimer(int time) { }



    /**
         * @出自类 EventManager
    */
    default void startEventTimerInSecond(int time) { }



    /**
         * @出自类 EventManager
    */
    default void startInstance(Character character) { }



    /**
         * @出自类 EventManager
    */
    default void startInstance(Character character, String leader) { }



    /**
         * @出自类 EventManager
    */
    default void startInstance(Object party, Field map, int maxLevel) { }



    /**
         * @出自类 EventManager
    */
    default void unregisterMonster(Mob mob) { }



    /**
         * @出自类 EventManager
    */
    default void unregisterPlayer(Character chr) { }



    /**
         * @出自类 EventManager
    */
    default void 乌鲁斯_更新分数() { }



    /**
         * @param keepSize 每轮保留的拼图数量
    
         * @param totalStage 轮数，范围是1~9
    
         * @param period 关卡前后的间隔时长，单位ms
         * @出自类 EventManager
         */
    default void 拼图大师_初始化(int keepSize, int totalStage, int period) { }



}
