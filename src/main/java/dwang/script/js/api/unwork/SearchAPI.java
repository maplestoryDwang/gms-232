package dwang.script.js.api.unwork;

import dwang.script.DwangScriptBaseApi;

public interface SearchAPI extends DwangScriptBaseApi {

    default void searchForIds(int type, String search) { }

    default void searchForText(int type, String search) { }

}
