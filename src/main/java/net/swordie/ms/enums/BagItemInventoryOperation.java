package net.swordie.ms.enums;

import java.util.Arrays;

/**
 * Created on 04/05/2020.
 *
 * @author Asura
 */
public enum BagItemInventoryOperation {
    AddToBag(0),
    RemoveFromBag(1),
    AddToBagFirstPos(2),
    RemoveFromBagFirstPos(3),
    ;
    private int val;

    BagItemInventoryOperation(int val) {
        this.val = val;
    }

    public int getVal() {
        return val;
    }

    public static BagItemInventoryOperation getByVal(int val) {
        return Arrays.stream(values()).filter(op -> op.getVal() == val).findFirst().orElse(null);
    }
}
