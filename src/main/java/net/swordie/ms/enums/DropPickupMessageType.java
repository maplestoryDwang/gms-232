package net.swordie.ms.enums;

public enum DropPickupMessageType {
    Item(0),
    Mesos(1),
    Unk(2),
    CommerciVoyage(8),

    Fail_NoSpace(-1),
    Fail_DamagedGameFiles(-3),
    PotionPot(-10),
    ;

    private final int val;

    DropPickupMessageType(int val) {
        this.val = val;
    }

    public int getVal() {
        return val;
    }
}
