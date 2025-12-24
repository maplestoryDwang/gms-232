package net.swordie.ms.enums.customscripts;

import java.util.Arrays;

/**
 * Created on 1-12-2018.
 *
 * @author Asura
 */
public enum CustomFUEFieldScripts { // Custom First User Enter Field Scripts

    Fenter_450004150(450004150), // Lucid Phase 1 Field
    Fenter_450004300(450004300), // Lucid Reward Field
    ;
    private int id;

    CustomFUEFieldScripts(int val) {
        this.id = val;
    }

    public int getVal() {
        return id;
    }

    public static CustomFUEFieldScripts getByVal(int id) {
        return Arrays.stream(values()).filter(cfuefs -> cfuefs.getVal() == id).findAny().orElse(null);
    }
}
