package net.swordie.ms.enums;

import net.swordie.ms.constants.ItemConstants;

import java.util.Arrays;

/**
 * Created on 11/23/2017.
 */
public enum InvType {
    EQUIPPED(-1),
    EQUIP(1),
    CONSUME(2),
    ETC(4), // Turned around with INSTALL on purpose
    INSTALL(3),
    CASH(5),
    DEC(6)
    ;

    private byte val;

    InvType(int val) {
        this((byte) val);
    }

    InvType(byte val) {
        this.val = val;
    }

    public byte getVal() {
        return val;
    }

    public static InvType getInvTypeByVal(int val) {
        return Arrays.stream(InvType.values()).filter(t -> t.getVal() == val).findFirst().orElse(null);
    }

    public static InvType getInvTypeByString(String subMap) {
        subMap = subMap.toLowerCase();
        InvType res = null;
        switch(subMap) {
            case "cash":
            case "pet":
                res = CASH;
                break;
            case "consume":
            case "special":
            case "use":
                res = CONSUME;
                break;
            case "etc":
                res = ETC;
                break;
            case "install":
            case "setup":
                res = INSTALL;
                break;
            case "eqp":
            case "equip":
                res = EQUIP;
                break;
            case "dec":
                res = DEC;
                break;
            default:
                System.err.println("Unknown InvType string " + subMap);
                break;
        }
        return res;
    }

    public boolean isStackable() {
        return this != EQUIP && this != EQUIPPED && this != DEC;
    }

    public boolean isStackable(int itemId) {
        return isStackable() && !ItemConstants.isRechargable(itemId) && !ItemConstants.isPet(itemId) && !ItemConstants.isCashEffect(itemId);
    }

    @Override
    public String toString() {
        switch (this) {
            case EQUIPPED:
                return "Equipped";
            case EQUIP:
                return "Equip";
            case CONSUME:
                return "Consume";
            case ETC:
                return "Etc";
            case INSTALL:
                return "Setup";
            case CASH:
                return "Cash";
            case DEC:
                return "Decoration";
        }
        return "Unknown";
    }

    public boolean isEquipType() {
        return this == EQUIP || this == DEC;
    }
}
