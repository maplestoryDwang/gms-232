package net.swordie.ms.enums;

import java.util.Arrays;

public enum GolluxDifficultyType {
    Hell(0),
    Hard(1),
    Normal(2),
    Easy(3),
    ;

    private byte val;

    GolluxDifficultyType(int val) {
        this.val = (byte) val;
    }

    public static GolluxDifficultyType getByVal(byte val) {
        return Arrays.stream(values()).filter(gdt -> gdt.getVal() == val).findAny().orElse(null);
    }

    public byte getVal() {
        return val;
    }
}
