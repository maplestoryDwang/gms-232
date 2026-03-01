package dwang.script.js.api.unwork;

import dwang.script.DwangScriptBaseApi;

public interface MissionAPI extends DwangScriptBaseApi {

    default void MissionGetFinish(int charid, int missionid) { }

    default void MissionGetMaxNum(int charid, int missionid, int mobid) { }

    default void MissionAddMinNum(int charid, int missionid, int num) { }

    default void MissionSetMobId(int charid, int missionid, int mobid) { }

    default void MissionReMake(int charid, int missionid, int repeat, int repeattime, int lockmap) { }

    default void MissionGetMobId(int charid, int missionid) { }

    default void MissionMaxNum(int missionid, int maxnum) { }

}
