package dwang.script.js.api.unwork;

import dwang.script.DwangScriptBaseApi;

public interface PyramidAPI extends DwangScriptBaseApi {

    default void bonus_PyramidSubway(int pyramid) { }

    default void sendPyramidEnergy(String object, String amount) { }

    default void start_PyramidSubway(int pyramid) { }

}
