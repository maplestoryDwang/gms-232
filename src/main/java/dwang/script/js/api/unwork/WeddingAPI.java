package dwang.script.js.api.unwork;

import dwang.script.DwangScriptBaseApi;

public interface WeddingAPI extends DwangScriptBaseApi {

    /**
         * @出自类 WeddingAPI
    */
    default void doRing(String name, int itemId) {
        throw new RuntimeException("not implemented");
    }



    /**
         * @出自类 WeddingAPI
    */
    default void doWeddingEffect(Object ch) {
        throw new RuntimeException("not implemented");
    }



    /**
         * @出自类 WeddingAPI
    */
    default void handleDivorce() {
        throw new RuntimeException("not implemented");
    }



}
