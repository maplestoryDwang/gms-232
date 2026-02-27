package dwang.script.js.api;

import dwang.script.DwangScriptBaseApi;

/**
 * @author dwang
 * @version 1.0.0
 * @Title
 * @ClassName ScriptMapApi.java
 * @Description 地图相关API
 * @createTime 2026-02-27 16:11
 */

public interface ScriptFieldApi extends DwangScriptBaseApi {


    default void warp(int fieldId) {
        getChr().warp(fieldId, 0);

    }

}
