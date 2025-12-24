package net.swordie.ms.enums;

import java.util.Arrays;

/**
 * Created on 21/03/2020.
 *
 * @author Asura
 */
public enum FuncKeyRequestType {
    QuickSlot(0),
    PetHPPotion(1),
    PetMPPotion(2),
    PetAllCurePotion(3),
    ;

    private int val;

    FuncKeyRequestType(int val) {
        this.val = val;
    }

    public int getVal() {
        return val;
    }

    public static FuncKeyRequestType getByVal(int val) {
        return Arrays.stream(values()).filter(v -> v.getVal() == val).findFirst().orElse(null);
    }
}
