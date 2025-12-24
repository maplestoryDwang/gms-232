package net.swordie.ms.client.character.commerce.vessel;

import java.util.Arrays;

/**
 * Created on 19/05/2021.
 *
 * @author Asura
 */
public enum VesselType {
    CargoSkiff(0),
    SailBoat(1),
    Dreadnought(2),
    ;
    private int val;

    public int getVal() {
        return val;
    }

    VesselType(int val) {
        this.val = val;
    }

    public static VesselType getByVal(int val) {
        return Arrays.stream(values()).filter(vt -> vt.getVal() == val).findFirst().orElse(null);
    }
}
