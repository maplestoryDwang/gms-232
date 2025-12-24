package net.swordie.ms.client.character.commerce.voyage;

import java.util.Arrays;

/**
 * Created on 20/05/2021.
 *
 * @author Asura
 */
public enum VoyageRouteType {
    Dolce(0),
    Luna(1),
    Rosa(2),
    HerbTown(3),
    Rien(4),
    LithHarbor(5),
    ;

    private int val;

    public int getVal() {
        return val;
    }

    VoyageRouteType(int val) {
        this.val = val;
    }

    public static VoyageRouteType getByVal(int val) {
        return Arrays.stream(values()).filter(vrt -> vrt.getVal() == val).findFirst().orElse(null);
    }
}