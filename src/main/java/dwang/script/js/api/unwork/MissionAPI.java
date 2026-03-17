package dwang.script.js.api.unwork;

import dwang.script.DwangScriptBaseApi;

public interface MissionAPI extends DwangScriptBaseApi {

    /**
         * @出自类 MissionAPI
    */
    default void MissionAddMinNum(int charid, int missionid, int num) {
        throw new RuntimeException("not implemented");
    }



    /**
         * @出自类 MissionAPI
    */
    default void MissionGetFinish(int charid, int missionid) {
        throw new RuntimeException("not implemented");
    }



    /**
         * @出自类 MissionAPI
    */
    default void MissionGetMaxNum(int charid, int missionid, int mobid) {
        throw new RuntimeException("not implemented");
    }



    /**
         * @出自类 MissionAPI
    */
    default void MissionGetMobId(int charid, int missionid) {
        throw new RuntimeException("not implemented");
    }



    /**
         * @出自类 MissionAPI
    */
    default void MissionMaxNum(int missionid, int maxnum) {
        throw new RuntimeException("not implemented");
    }



    /**
         * @出自类 MissionAPI
    */
    default void MissionReMake(int charid, int missionid, int repeat, int repeattime, int lockmap) {
        throw new RuntimeException("not implemented");
    }



    /**
         * @出自类 MissionAPI
    */
    default void MissionSetMobId(int charid, int missionid, int mobid) {
        throw new RuntimeException("not implemented");
    }



}
