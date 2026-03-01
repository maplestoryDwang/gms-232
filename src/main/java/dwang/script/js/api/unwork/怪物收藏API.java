package dwang.script.js.api.unwork;

import dwang.script.DwangScriptBaseApi;

public interface 怪物收藏API extends DwangScriptBaseApi {

    default void gainAllMobCollection() { }

    default void gainRandomEliteMobCollection() { }

    default void gainRandomMobCollectionByRegion(int category) { }

    default void gainRandomMobCollection() { }

    default void gainRandomNormalMobCollection() { }

    default void gainOneMobCollection(int mobId) { }

}
