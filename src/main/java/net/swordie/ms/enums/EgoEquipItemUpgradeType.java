package net.swordie.ms.enums;

import java.util.Arrays;

/**
 * Created on 2/15/2020.
 *
 * @author Asura
 */
public enum EgoEquipItemUpgradeType { // Zero
    AddBonusStat(0),
    ChangePotential(1),
    ;

    private int val;

    EgoEquipItemUpgradeType(int val) {
        this.val = val;
    }

    public int getVal() {
        return val;
    }

    public static EgoEquipItemUpgradeType getByVal(int val) {
        return Arrays.stream(values()).filter(v -> v.getVal() == val).findFirst().orElse(null);
    }
}
