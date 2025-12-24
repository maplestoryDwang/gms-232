package net.swordie.ms.enums.customscripts;

import java.util.Arrays;

/**
 * Created on 1-12-2018.
 *
 * @author Asura
 */
public enum CustomFieldScripts { // Custom Field Scripts
    easy_zakum_enter(280030200),
    hard_hilla_enter(262031300),
    jaguar_habitat(931000500),
    ninja_jumpquest_in(800040210),
    neo_castle_up(993190400),
    fifth_job_magnus_spawn(940100200),
    ;
    private int id;

    CustomFieldScripts(int val) {
        this.id = val;
    }

    public int getVal() {
        return id;
    }

    public static CustomFieldScripts getByVal(int id) {
        return Arrays.stream(values()).filter(cfs -> cfs.getVal() == id).findAny().orElse(null);
    }
}
