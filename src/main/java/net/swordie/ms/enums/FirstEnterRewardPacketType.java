package net.swordie.ms.enums;

import java.util.Arrays;

public enum FirstEnterRewardPacketType{
    Load_Items(9),
    Nx_Claimed(11),
    Item_Claimed(12),
    Cash_Item_Claimed(13),
    Meso_Claimed(14),
    Exp_Claimed(15),
    Error(21),
    Error2(22),
    Meso_Error(23),
    Exp_Error(24),
    Time_Expired(27)
    ;
    private int val;

    FirstEnterRewardPacketType(int val) {this.val = val;}

    public int getVal() {
        return val;
    }

    public static FirstEnterRewardPacketType getByVal(int val) {
        return Arrays.stream(values()).filter(uit -> uit.getVal() == val).findAny().orElse(null);
    }
}
