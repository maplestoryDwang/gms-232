package net.swordie.ms.client.character.commerce.voyage;

import java.util.Arrays;

/**
 * Created on 20/05/2021.
 *
 * @author Asura
 */
public enum VoyageRequestType {
    VesselUpgrade(0),
    EnterVoyage(1),
    UnlockVoyageRoute(4),
    ;

    private int val;

    public int getVal() {
        return val;
    }

    VoyageRequestType(int val) {
        this.val = val;
    }

    public static VoyageRequestType getByVal(int val) {
        return Arrays.stream(values()).filter(vrt -> vrt.getVal() == val).findFirst().orElse(null);
    }
}
