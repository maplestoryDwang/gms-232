package net.swordie.ms.connection.packet;

import net.swordie.ms.client.character.items.Item;
import net.swordie.ms.enums.InventoryOperation;

public class ItemOperation {
    public InventoryOperation type;
    public Item item;
    public short pos;
    public short newPos;

    public ItemOperation() {
    }

    public ItemOperation(InventoryOperation type, Item item, short pos, short newPos) {
        this.type = type;
        this.item = item;
        this.pos = pos;
        this.newPos = newPos;
    }
}
