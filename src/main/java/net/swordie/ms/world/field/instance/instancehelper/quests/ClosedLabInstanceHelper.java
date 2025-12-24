package net.swordie.ms.world.field.instance.instancehelper.quests;

import net.swordie.ms.client.character.Char;
import net.swordie.ms.client.character.items.Item;
import net.swordie.ms.enums.DropType;
import net.swordie.ms.life.drop.Drop;
import net.swordie.ms.loaders.ItemData;
import net.swordie.ms.util.Position;
import net.swordie.ms.util.Rect;
import net.swordie.ms.world.field.Field;
import net.swordie.ms.world.field.instance.instancehelper.InstanceHelper;

public class ClosedLabInstanceHelper extends InstanceHelper {

    private Rect magicTargetRect = new Rect(-246, 100, -116, 250);
    private int MAGIC_DEVICE_ID = 4031698;
    private int LIGHTLESS_MAGIC_DEVICE_ID = 4031709;
    private Position dropPosition = new Position(-176, 230);

    @Override
    public void onItemDropped(Char chr, Item item, int quantity, Position position, Drop drop) {
        super.onItemDropped(chr, item, quantity, position, drop);
        if(item.getItemId() != MAGIC_DEVICE_ID) return;

        if(magicTargetRect.hasPositionInside(position)) {
            getInstance().getField(926120100).removeDrop(drop.getObjectId(), 0, false, 0);
            Drop newDrop = new Drop(-1);
            newDrop.setItem(ItemData.getItemDeepCopy(LIGHTLESS_MAGIC_DEVICE_ID));
            newDrop.getItem().setQuantity(1);
            newDrop.setDropType(DropType.Item);
            drop.setPosition(position);
            getInstance().getField(926120100).drop(newDrop, position, true);
        }
    }
}
