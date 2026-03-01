package dwang.script.js.api.unwork;

import dwang.script.DwangScriptBaseApi;

public interface WeddingAPI extends DwangScriptBaseApi {

    default void doWeddingEffect(Object ch) { }

    default void handleDivorce() { }

    default void doRing(String name, int itemId) { }

}
