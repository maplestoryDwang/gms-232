package dwang.script.js.api.unwork;
import dwang.script.DwangScriptBaseApi;

public interface 莫奈德API extends DwangScriptBaseApi {

    default void 莫奈德_特效(String text, Object v) { }

    default void 莫奈德_特效(String text, Object v, int wait) { }

    default void monadForceMove(String s, int v1, int time) { }

    default void monadEndingScene(int exp, int gold, Object items) { }

}
