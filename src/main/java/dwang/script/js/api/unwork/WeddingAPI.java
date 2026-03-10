package dwang.script.js.api.unwork;

import dwang.script.DwangScriptBaseApi;

public interface WeddingAPI extends DwangScriptBaseApi {

    /**
         * @出自类 WeddingAPI
    */
    default void doRing(String name, int itemId) { }



    /**
         * @出自类 WeddingAPI
    */
    default void doWeddingEffect(Object ch) { }



    /**
         * @出自类 WeddingAPI
    */
    default void handleDivorce() { }



}
