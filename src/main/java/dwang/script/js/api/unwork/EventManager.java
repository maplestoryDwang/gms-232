package dwang.script.js.api.unwork;

import dwang.script.DwangScriptBaseApi;
import net.swordie.ms.life.mob.Mob;
import net.swordie.ms.world.field.Field;

public interface EventManager extends DwangScriptBaseApi {

    /**
         * @出自类 EventManager
    */
    default void addNumberProperty(String key, int value) {
        throw new RuntimeException("not implemented");
    }



    /**
         * @出自类 EventManager
    */
    default void broadcastPlayerMsg(int type, String msg) {
        throw new RuntimeException("not implemented");
    }



    /**
         * @出自类 EventManager
    */
    default void broadcastServerMsg(String msg) {
        throw new RuntimeException("not implemented");
    }



    /**
         * @出自类 EventManager
    */
    default void broadcastServerMsg(int type, String msg, int weather) {
        throw new RuntimeException("not implemented");
    }



    /**
         * @出自类 EventManager
    */
    default void broadcastShip(int mapId, int effect) {
        throw new RuntimeException("not implemented");
    }



    /**
         * @出自类 EventManager
    */
    default void broadcastYellowMsg(String msg) {
        throw new RuntimeException("not implemented");
    }



    /**
         * 停止所有定时任务
         * @出自类 EventManager
         */
    default void cancelSchedlue() {
        throw new RuntimeException("not implemented");
    }



    /**
         * @出自类 EventManager
    */
    default void dispose() {
        throw new RuntimeException("not implemented");
    }



    /**
         * @出自类 EventManager
    */
    default void disposeIfPlayerBelow(int size, int towarp) {
        throw new RuntimeException("not implemented");
    }



    /**
         * @出自类 EventManager
    */
    default void disposeIfPlayerBelow(int size, int towarp, int portal) {
        throw new RuntimeException("not implemented");
    }



    /**
         * @出自类 EventManager
    */
    default void getChannel() {
        throw new RuntimeException("not implemented");
    }



    /**
         * @出自类 EventManager
    */
    default void getDisconnected() {
        throw new RuntimeException("not implemented");
    }



    /**
         * @出自类 EventManager
    */
    default void getIv() {
        throw new RuntimeException("not implemented");
    }



    /**
         * @出自类 EventManager
    */
    default void getMapFactoryMap(int mapId) {
        throw new RuntimeException("not implemented");
    }



    /**
         * @出自类 EventManager
    */
    default void getMapIds() {
        throw new RuntimeException("not implemented");
    }



    /**
         * @出自类 EventManager
    */
    default void getMapInstance(int args) {
        throw new RuntimeException("not implemented");
    }



    /**
         * @出自类 EventManager
    */
    default void getMobs() {
        throw new RuntimeException("not implemented");
    }



    /**
         * @出自类 EventManager
    */
    default void getMonster(int id) {
        throw new RuntimeException("not implemented");
    }



    /**
         * @出自类 EventManager
    */
    default void getName() {
        throw new RuntimeException("not implemented");
    }



    /**
         * @出自类 EventManager
    */
    default void getNumberProperty(String key) {
        throw new RuntimeException("not implemented");
    }



    /**
         * @出自类 EventManager
    */
    default void getPlayerCount() {
        throw new RuntimeException("not implemented");
    }



    /**
         * @出自类 EventManager
    */
    default void getPlayers() {
        throw new RuntimeException("not implemented");
    }



    /**
         * @出自类 EventManager
    */
    default void getProperties() {
        throw new RuntimeException("not implemented");
    }



    /**
         * @出自类 EventManager
    */
    default void getProperty(String key) {
        throw new RuntimeException("not implemented");
    }



    /**
         * @出自类 EventManager
    */
    default void getTimeLeft() {
        throw new RuntimeException("not implemented");
    }



    /**
         * 初始化痛苦迷宫
    
         *
    
         * @param style  0=绿色 1=红色
    
         * @param height
    
         * @param width
         * @出自类 EventManager
         */
    default void initMaze(int style, int height, int width) {
        throw new RuntimeException("not implemented");
    }



    /**
         * @出自类 EventManager
    */
    default void initPropArrayRandom(String name, int min, int max, int amount) {
        throw new RuntimeException("not implemented");
    }



    /**
         * @出自类 EventManager
    */
    default void isTimerStarted() {
        throw new RuntimeException("not implemented");
    }



    /**
         * @出自类 EventManager
    */
    default void onItemPickedUp(Character chr, int itemID) {
        throw new RuntimeException("not implemented");
    }



    /**
         * @出自类 EventManager
    */
    default void onMapChanged(Character chr, int mapId) {
        throw new RuntimeException("not implemented");
    }



    /**
         * @出自类 EventManager
    */
    default void onMonsterDamaged(Character chr, Mob mob, int realDamage, int attackDamage) {
        throw new RuntimeException("not implemented");
    }



    /**
         * 活动中角色杀死怪物触发事件
    
         *
    
         * @param chr
    
         * @param mob
         * @出自类 EventManager
         */
    default void onMonsterKilled(Character chr, Mob mob) {
        throw new RuntimeException("not implemented");
    }



    /**
         * @出自类 EventManager
    */
    default void onPartyDisbanded() {
        throw new RuntimeException("not implemented");
    }



    /**
         * @出自类 EventManager
    */
    default void onPlayerDisconnected(Character chr, int idz) {
        throw new RuntimeException("not implemented");
    }



    /**
         * @出自类 EventManager
    */
    default void onPlayerKilled(Character chr) {
        throw new RuntimeException("not implemented");
    }



    /**
         * @出自类 EventManager
    */
    default void onPlayerRevived(Character chr) {
        throw new RuntimeException("not implemented");
    }



    /**
         * @出自类 EventManager
    */
    default void onTimeOut(int delay) {
        throw new RuntimeException("not implemented");
    }



    /**
         * 从指定数值里随机抽取N个值
    
         *
    
         * @param arr   long[]
    
         * @param amout 目标数量，小于入参则不会重复，否则会重复
    
         * @return long[]
         * @出自类 EventManager
         */
    default void randArray(Object arr, int amout) {
        throw new RuntimeException("not implemented");
    }



    /**
         * 从指定范围的数值里随机抽取N个值
    
         *
    
         * @param min   long
    
         * @param max   long
    
         * @param amout 目标数量，小于入参则不会重复，否则会重复
    
         * @return long[]
         * @出自类 EventManager
         */
    default void randArray(int min, int max, int amout) {
        throw new RuntimeException("not implemented");
    }



    /**
         * @出自类 EventManager
    */
    default void registerParty(Object party, Field map) {
        throw new RuntimeException("not implemented");
    }



    /**
         * @出自类 EventManager
    */
    default void restartEventTimer(int time) {
        throw new RuntimeException("not implemented");
    }



    /**
         * @出自类 EventManager
    */
    default void restartEventTimer(int time, int inSecond) {
        throw new RuntimeException("not implemented");
    }



    /**
         * @出自类 EventManager
    */
    default void schedule(String methodName, int delay) {
        throw new RuntimeException("not implemented");
    }



    /**
         * @出自类 EventManager
    */
    default void scheduleAtTimestamp(String methodName, int timestamp) {
        throw new RuntimeException("not implemented");
    }



    /**
         * 不同场景需要不同时钟效果
    
         *
    
         * @param time         单位毫秒
    
         * @param showInSecond 默认显示为 分秒
         * @出自类 EventManager
         */
    default void showClockEffect(Character chr, int time, int showInSecond) {
        throw new RuntimeException("not implemented");
    }



    /**
         * @出自类 EventManager
    */
    default void startEventTimer(int time) {
        throw new RuntimeException("not implemented");
    }



    /**
         * @出自类 EventManager
    */
    default void startEventTimerInSecond(int time) {
        throw new RuntimeException("not implemented");
    }



    /**
         * @出自类 EventManager
    */
    default void startInstance(Character character) {
        throw new RuntimeException("not implemented");
    }



    /**
         * @出自类 EventManager
    */
    default void startInstance(Character character, String leader) {
        throw new RuntimeException("not implemented");
    }



    /**
         * @出自类 EventManager
    */
    default void startInstance(Object party, Field map, int maxLevel) {
        throw new RuntimeException("not implemented");
    }



    /**
         * @出自类 EventManager
    */
    default void unregisterMonster(Mob mob) {
        throw new RuntimeException("not implemented");
    }



    /**
         * @出自类 EventManager
    */
    default void unregisterPlayer(Character chr) {
        throw new RuntimeException("not implemented");
    }



    /**
         * @出自类 EventManager
    */
    default void 乌鲁斯_更新分数() {
        throw new RuntimeException("not implemented");
    }



    /**
         * @param keepSize 每轮保留的拼图数量
    
         * @param totalStage 轮数，范围是1~9
    
         * @param period 关卡前后的间隔时长，单位ms
         * @出自类 EventManager
         */
    default void 拼图大师_初始化(int keepSize, int totalStage, int period) {
        throw new RuntimeException("not implemented");
    }



}
