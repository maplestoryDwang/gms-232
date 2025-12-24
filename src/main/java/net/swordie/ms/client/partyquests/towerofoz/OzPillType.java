package net.swordie.ms.client.partyquests.towerofoz;

import java.util.Arrays;

/**
 * Created on 06/07/2021.
 *
 * @author Asura
 */
public enum OzPillType {
    // Prescription (Untradable)
    Prescription_ReallyNotVeryStupidAtAll(1, 2),
    Prescription_LessStupid(2, 5),
    Prescription_KindaStupid(3, 8),
    Prescription_PrettyStupid(4, 13),
    Prescription_PantsOnHeadStupid(5, 16),

    // Generic (Tradable)
    Generic_ReallyNotVeryStupidAtAll(101, 2),
    Generic_LessStupid(102, 4),
    Generic_KindaStupid(103, 6),
    Generic_PrettyStupid(104, 8),
    Generic_PantsOnHeadStupid(105, 10),
    ;

    private int val;
    private int timeExtension; // in minutes

    OzPillType(int val, int timeExtension) {
        this.val = val;
        this.timeExtension = timeExtension;
    }

    public int getVal() {
        return val;
    }

    public int getTimeExtension() {
        return timeExtension * 60; // return as seconds
    }

    public static OzPillType getByVal(int val) {
        return Arrays.stream(values()).filter(pt -> pt.getVal() == val).findFirst().orElse(null);
    }
}
