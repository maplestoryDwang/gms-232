package dwang.script.js.api.unwork;
import dwang.script.DwangScriptBaseApi;

public interface 异逝界API extends DwangScriptBaseApi {

    /**
         * 异逝界，更改本地物体的状态
         * @出自类 异逝界API
         */
    default void afterlandChangeMapObject(String name, int b0, int show, int duration, int b2, int angle, int v2, int b3) { }



    /**
         * 异逝界，初始化本地物体的状态
         * @出自类 异逝界API
         */
    default void afterlandInitMapObject(Object name, Object b0, Object b1, Object b2, Object v1, Object v2) { }



    /**
         * 异逝界，勇士之地，头顶显示剩余怪物数量
         * @出自类 异逝界API
         */
    default void afterlandKillStage(int stage) { }



    /**
         * 异逝界，勇士之地，头顶显示剩余怪物数量
         * @出自类 异逝界API
         */
    default void afterlandKillWarn(int total) { }



    /**
         * 异逝界，根据状态更新背景等通用效果
         * @出自类 异逝界API
         */
    default void afterlandUpdateEnvironment() { }



}
