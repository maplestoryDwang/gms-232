package dwang.script.js.api.unwork;

import dwang.script.DwangScriptBaseApi;
import net.swordie.ms.world.field.Field;

public interface MapEffectAPI extends DwangScriptBaseApi {

    /**
         * 出现于啾啾岛，允许游泳
         *
         * @param v1
         * @param enable
         * @param actions
         * @出自类 MapEffectAPI
         */
    default void allowSpecialAtion(int v1, int enable, Object actions) { }



    /**
         * @出自类 MapEffectAPI
    */
    default void createRadianObstacle(Field map, int effect, Object type, int trueDamR, Object startPos, int radius, Object round, Object delay, Object angle, Object nVPerSec, Object nMaxp) { }



    /**
         * 移动平台
         *
         * @param x1
         * @param y1
         * @param x2
         * @param y2
         * @param n1
         * @param n2
         * @param r
         * @param start
         * @param speed
         * @param name
         * @出自类 MapEffectAPI
         */
    default void dynamicObjMove(int x1, int y1, int x2, int y2, int n1, int n2, int r, int start, int speed, String name) { }



    /**
         * @出自类 MapEffectAPI
    */
    default void dynamicObjMoveSchedule(int x1, int y1, int x2, int y2, int n1, int n2, int r, int start, int speed, String name, int interval, int delay) { }



    /**
         * 玩具塔箱子瞬移特效
         * @出自类 MapEffectAPI
         */
    default void Effect_Mulung() { }



    /**
         * 隐藏背景某个图标
         *
         * @param str
         * @param on
         * @出自类 MapEffectAPI
         */
    default void Hidden_background(String str, int on) { }



    /**
         * @出自类 MapEffectAPI
    */
    default void Hidden_background(String str, int type, int on) { }



    /**
         * @出自类 MapEffectAPI
    */
    default void Hidden_background(String str, int type, int on, int v1, int v2) { }



    /**
         * 在当前位置创建随机传送门，调试用途
         *
         * @param op
         * @param type
         * @出自类 MapEffectAPI
         */
    default void onRandomPortalCreated(int op, int type) { }



    /**
         * 移除地图随机传送门
         *
         * @param op
         * @param type
         * @param map
         * @出自类 MapEffectAPI
         */
    default void onRandomPortalRemoved(int op, int type, int map) { }



    /**
         * 改变地图背景，出现于莫奈德大篷车环节
         *
         * @param map
         * @param 数组数量
         * @param 动作
         * @param v3
         * @param v4
         * @出自类 MapEffectAPI
         */
    default void onSetBackEffect(String map, int 数组数量, int 动作, int v3, int v4) { }



    /**
         * @出自类 MapEffectAPI
    */
    default void onSetBackEffectSchedule(String map, int 数组数量, int 动作, int v3, int v4, int interval, int delay) { }



    /**
         * @出自类 MapEffectAPI
    */
    default void onSetMapObjectCreateLayer(String map, int v1, int v2) { }



    /**
         * @出自类 MapEffectAPI
    */
    default void onSetMapObjectCreateLayer(String map, int v1, int v2, int v3) { }



    /**
         * 设置地图物体特效，出现于莫奈德、塔楼倒塌
         *
         * @param map
         * @param v1
         * @param action
         * @param v2
         * @出自类 MapEffectAPI
         */
    default void onSetMapObjectCreateLayerMore(String map, int v1, String action, int v2) { }



    /**
         * 设置地图物体移动，出现于莫奈德Act2，吸引怪物，引发雪崩
         * @出自类 MapEffectAPI
         */
    default void onSetMapObjectMove(String key, Object v) { }



    /**
         * @出自类 MapEffectAPI
    */
    default void onSetMapObjectMove(String key, String key2, Object v) { }



    /**
         * 设置地图内指定物体的状态
         *
         * @param v1 ID?
         * @param v3 状态？
         * @出自类 MapEffectAPI
         */
    default void onSetMapTagedObjectVisible(int v1, String name, int v3) { }



    /**
         * @出自类 MapEffectAPI
    */
    default void onSetMapTagedObjectVisibleSchedule(int count, String name, int value, int interval, int delay) { }



    /**
         * 设置地图内指定物体的动画，出现于少林寺消灭BOSS后剧情
         *
         * @param map
         * @param v1
         * @出自类 MapEffectAPI
         */
    default void onSetMapTaggedObjectAnimation(String map, int v1) { }



    /**
         * 设置地图背景效果
         *
         * @param str
         * @param value
         * @出自类 MapEffectAPI
         */
    default void setSpineBackEffect(Object str, Object value) { }



    /**
         * 设置地图物体效果
         *
         * @param str
         * @param value
         * @出自类 MapEffectAPI
         */
    default void setSpineObjectEffect(Object str, Object value) { }



    /**
         * 显示横幅
         *
         * @param show   0=显示
         * @param itemId 不一定真的是道具
         * @param msg    文本
         * @param time   单位 秒
         * @param b2     ?
         * @出自类 MapEffectAPI
         */
    default void showMapEffect(int show, int itemId, String msg, int time, int b2) { }



    /**
         * 出现于莫奈德Act3 朱丽埃塔BOSS战 建筑物坍塌
         * @出自类 MapEffectAPI
         */
    default void 地图特效_开关落脚点(Object object, Object action) { }



    /**
         * @出自类 MapEffectAPI
    */
    default void 地图特效_开关落脚点_Schedule(Object object, Object action, int interval, int delay) { }



    /**
         * @出自类 MapEffectAPI
    */
    default void 触发玩家需要按键盘解锁() { }



}
