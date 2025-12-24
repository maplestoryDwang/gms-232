package net.swordie.ms.enums;

import java.util.Arrays;

public enum DebuffObjectType {
    SleepGas(1);

    private int val;

    DebuffObjectType(int val) { this.val = val; }

    public int getVal() {
        return val;
    }
    public static DebuffObjectType getByVal(int val) {
        return Arrays.stream(values()).filter(f -> f.getVal() == val).findFirst().orElse(null);
    }
}
