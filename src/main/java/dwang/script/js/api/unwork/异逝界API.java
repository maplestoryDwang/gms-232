package dwang.script.js.api.unwork;

import dwang.script.DwangScriptBaseApi;

public interface 异逝界API extends DwangScriptBaseApi {

    default void afterlandUpdateEnvironment() { }

    default void afterlandInitMapObject(Object name, Object b0, Object b1, Object b2, Object v1, Object v2) { }

    default void afterlandKillWarn(int total) { }

    default void afterlandChangeMapObject(String name, int b0, int show, int duration, int b2, int angle, int v2, int b3) { }

    default void afterlandKillStage(int stage) { }

}
