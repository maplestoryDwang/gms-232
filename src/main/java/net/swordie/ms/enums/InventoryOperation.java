package net.swordie.ms.enums;

/**
 * Created on 2/28/2018.
 */
public enum InventoryOperation {
    Add(0),
    UpdateQuantity(1),
    Move(2),
    Remove(3),
    ItemExp(4),
    Unk232(5),
    UpdateBagPos(6),
    UpdateBagQuantity(7),
    BagRemove(8),
    BagToBag(9),
    BagNewItem(10),
    BagRemoveSlot(11),
    ;

    private byte val;

    InventoryOperation(int val) {
        this.val = (byte) val;
    }

    public byte getVal() {
        return val;
    }
}
