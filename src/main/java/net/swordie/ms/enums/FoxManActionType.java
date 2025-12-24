package net.swordie.ms.enums;

import java.util.Arrays;

/**
 * Created on 2/29/2020.
 *
 * @author Asura
 */
public enum FoxManActionType {
    HakuGift(1),
    FoxFire(3),
    HakuBlessing(4),
    BreathOfTheUnseen(5),
    ;

    int val;

    FoxManActionType(int val) {
        this.val = val;
    }

    public int getVal() {
        return val;
    }

    public static FoxManActionType getByVal(int val) {
        return Arrays.stream(values()).filter(f -> f.getVal() == val).findFirst().orElse(null);
    }
}
