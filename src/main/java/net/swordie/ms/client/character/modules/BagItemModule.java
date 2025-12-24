package net.swordie.ms.client.character.modules;

import net.swordie.ms.client.character.Char;
import net.swordie.ms.client.character.items.Item;
import net.swordie.ms.enums.InvType;
import net.swordie.ms.enums.SpecStat;
import net.swordie.ms.loaders.ItemData;
import net.swordie.ms.loaders.containerclasses.ItemInfo;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

/**
 * Created on 03/05/2020.
 *
 * @author Asura
 */
public class BagItemModule {
    public static List<Item> getItemsByBagItemIndex(Char chr, InvType invType, int bagItemIndex) {
        Item bagItemOwner = getBagItemOwnerByBagItemIndex(chr, invType, bagItemIndex);
        if (bagItemOwner == null) {
            return new ArrayList<>();
        }

        return chr.getInventoryByType(invType).getItems().stream().filter(i -> !i.isBagItemOwner() && i.getInvType() == invType && i.getBagItemIndex() == bagItemIndex).collect(Collectors.toList());
    }

    public static Item getBagItemOwnerByBagItemIndex(Char chr, InvType invType, int bagItemIndex) {
        var item = chr.getInventoryByType(invType).getItems().stream().filter(i -> i.isBagItemOwner() && i.getInvType() == invType && i.getBagItemIndex() == bagItemIndex).findFirst().orElse(null);
        if (item != null) {
            return item;
        }

        return null;
    }

    public static List<Item> getBagItemOwners(Char chr, InvType invType) {
        return chr.getInventoryByType(invType).getItems().stream().filter(Item::isBagItemOwner).collect(Collectors.toList());
    }

    public static int getFirstFreeSlotInBagItem(Char chr, InvType invType, int bagItemIndex) {
        int oldIndex = getBagItemIdentifierByBagItemIndex(bagItemIndex);
        for (Item item : getItemsByBagItemIndex(chr, invType, bagItemIndex).stream().sorted(Comparator.comparingInt(Item::getBagIndex)).collect(Collectors.toList())) {
            if (item.getBagIndex() - oldIndex > 1) {
                // there's a gap between 2 consecutive items
                break;
            }
            oldIndex = item.getBagIndex();
        }
        return oldIndex + 1;
    }

    public static boolean isBagItemFull(Char chr, Item bagItemOwner) {
        ItemInfo ii = ItemData.getItemInfoByID(bagItemOwner.getItemId());
        if (ii == null) {
            return true;
        }
        var size = getItemsByBagItemIndex(chr, bagItemOwner.getInvType(), bagItemOwner.getBagItemIndex()).size();
        var capSize = ii.getSpecStats().getOrDefault(SpecStat.slotCount, 0);
        return size >= capSize;
    }

    public static int getBagItemIndexByBagItemIdentifier(int bagItemId) {
        return ((bagItemId % 10000) / 100) - 1;
    }

    public static int getBagItemIdentifierByBagItemIndex(int bagItemIndex) {
        return 10000 + ((bagItemIndex + 1) * 100);
    }
}
