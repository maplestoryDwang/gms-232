package dwang.script.js.api.unwork;

import dwang.script.DwangScriptBaseApi;
import net.swordie.ms.world.field.Field;

public interface MapEffectAPI extends DwangScriptBaseApi {

    default void 地图特效_开关落脚点(Object object, Object action) { }

    default void onSetMapTagedObjectVisibleSchedule(int count, String name, int value, int interval, int delay) { }

    default void Hidden_background(String str, int type, int on, int v1, int v2) { }

    default void showMapEffect(int show, int itemId, String msg, int time, int b2) { }

    default void onSetMapTagedObjectVisible(int v1, String name, int v3) { }

    default void onSetMapObjectCreateLayerMore(String map, int v1, String action, int v2) { }

    default void dynamicObjMove(int x1, int y1, int x2, int y2, int n1, int n2, int r, int start, int speed, String name) { }

    default void allowSpecialAtion(int v1, int enable, Object actions) { }

    default void onSetMapObjectCreateLayer(String map, int v1, int v2, int v3) { }

    default void onSetMapObjectCreateLayer(String map, int v1, int v2) { }

    default void onSetMapObjectMove(String key, Object v) { }

    default void Hidden_background(String str, int on) { }

    default void createRadianObstacle(Field map, int effect, Object type, int trueDamR, Object startPos, int radius, Object round, Object delay, Object angle, Object nVPerSec, Object nMaxp) { }

    default void onSetMapTaggedObjectAnimation(String map, int v1) { }

    default void 地图特效_开关落脚点_Schedule(Object object, Object action, int interval, int delay) { }

    default void 触发玩家需要按键盘解锁() { }

    default void onSetMapObjectMove(String key, String key2, Object v) { }

    default void onRandomPortalCreated(int op, int type) { }

    default void onSetBackEffectSchedule(String map, int 数组数量, int 动作, int v3, int v4, int interval, int delay) { }

    default void Effect_Mulung() { }

    default void onSetBackEffect(String map, int 数组数量, int 动作, int v3, int v4) { }

    default void Hidden_background(String str, int type, int on) { }

    default void setSpineObjectEffect(Object str, Object value) { }

    default void dynamicObjMoveSchedule(int x1, int y1, int x2, int y2, int n1, int n2, int r, int start, int speed, String name, int interval, int delay) { }

    default void onRandomPortalRemoved(int op, int type, int map) { }

    default void setSpineBackEffect(Object str, Object value) { }

}
