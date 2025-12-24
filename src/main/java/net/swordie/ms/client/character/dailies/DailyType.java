package net.swordie.ms.client.character.dailies;

import java.util.Arrays;

/**
 * Created on 24/05/2021.
 *
 * @author Asura
 */
public enum DailyType {
    CommerceVoyage(0),
    OzTower(1),
    ;

    private int val;

    public int getVal() {
        return val;
    }

    DailyType(int val) {
        this.val = val;
    }

    public static DailyType getByVal(int val) {
        return Arrays.stream(values()).filter(dt -> dt.getVal() == val).findFirst().orElse(null);
    }
}
