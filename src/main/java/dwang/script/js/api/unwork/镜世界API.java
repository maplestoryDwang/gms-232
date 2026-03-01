package dwang.script.js.api.unwork;
import dwang.script.DwangScriptBaseApi;

public interface 镜世界API extends DwangScriptBaseApi {

    default void updateMirrorDungeonMap(int type, int count, Object maps) { }

    default void setMirrorDungeonInfo(Object names, Object ids, Object descs) { }

    default void updateMirrorDungeonBoss(int type, int boss) { }

    default void showMirrorDungeonReward(int cur, int best, int count, int exp, int wp, int s1, int v1) { }

}
