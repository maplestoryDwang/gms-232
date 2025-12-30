package net.swordie.ms.enums;

import java.util.Arrays;

public enum FirstEnterRewardType{
    GameItem(1),
    CashItem(2),
    MaplePoints(3),
    Meso(4),
    Exp(5)
    ;
    private int val;

    FirstEnterRewardType(int val) {
        this.val =  val;
    }

    public int getVal() {
        return val;
    }

    public static FirstEnterRewardType getByVal(int val) {
        return Arrays.stream(values()).filter(uit -> uit.getVal() == val).findAny().orElse(null);
    }
}
