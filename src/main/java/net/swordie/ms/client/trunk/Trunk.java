package net.swordie.ms.client.trunk;

import net.swordie.ms.client.character.Char;
import net.swordie.ms.client.character.items.Item;
import net.swordie.ms.connection.OutPacket;
import net.swordie.ms.constants.GameConstants;
import net.swordie.ms.constants.ItemConstants;
import net.swordie.ms.enums.DBChar;
import net.swordie.ms.enums.InvType;
import net.swordie.ms.loaders.ItemData;
import net.swordie.ms.util.FileTime;
import net.swordie.ms.util.Util;
import net.swordie.ms.world.shop.cashshop.CashItemInfo;
import net.swordie.orm.dao.CashItemInfoDao;
import net.swordie.orm.dao.ItemDao;
import net.swordie.orm.dao.SworDaoFactory;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.HashSet;
import java.util.List;
import java.util.stream.Collectors;

/**
 * Created on 4/7/2018.
 */
@Entity
@Table(name = "trunks")
public class Trunk {

    private static final ItemDao itemDao = (ItemDao) SworDaoFactory.getByClass(Item.class);
    private static final CashItemInfoDao cashItemInfoDao = (CashItemInfoDao) SworDaoFactory.getByClass(CashItemInfo.class);

    private Char chr;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private List<Item> items;
    private long money;
    private int slotCount;

    private List<CashItemInfo> locker;

    public Trunk() {
    }

    public Trunk(byte slotCount) {
        this.slotCount = slotCount;
    }

    public List<Item> getItems() {
        if (items == null) {
            items = itemDao.byTrunk(this);
        }
        return items;
    }

    public void setItems(List<Item> items) {
        this.items = items;
    }

    public int getSlotCount() {
        return slotCount;
    }

    public void setSlotCount(int slotCount) {
        this.slotCount = slotCount;
    }

    public void addSlotCount(int slotCount) {
        int newSlotCount = Math.min(GameConstants.MAX_TRUNK_SIZE, getSlotCount() + slotCount);
        setSlotCount(newSlotCount);
    }

    public void encodeItems(OutPacket outPacket) {
        outPacket.encodeByte(getSlotCount());
        long mask = DBChar.All.get();
        outPacket.encodeLong(mask);
        if ((mask & 2) != 0) {
            outPacket.encodeLong(getMoney());
        }

        sortItems();
        for (int i = 1; i <= 6; i++) {
            InvType curInvType = InvType.getInvTypeByVal(i);
            List<Item> items = getSortedItems(curInvType);
            outPacket.encodeInt(items.size());
            for (Item item : items) {
                item.encode(outPacket);
            }
        }
    }

    public long getMoney() {
        return money;
    }

    public void setMoney(long money) {
        this.money = money;
    }

    public void setChr(Char chr) {
        this.chr = chr;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public boolean canAddMoney(long amount) {
        return getMoney() + amount <= GameConstants.MAX_MONEY;
    }

    public void addMoney(long reqMoney) {
        if (canAddMoney(reqMoney)) {
            setMoney(getMoney() + reqMoney);
        }
    }

    public void addItem(Item item, int quantity) {
        int itemId = item.getItemId();

        var curItem = getItemByItemID(itemId, false, item.getDateExpire());
        if (curItem == null || curItem.getInvType() == InvType.EQUIP) {
            Item newItem = item.deepCopy();
            newItem.assignId();
            newItem.setQuantity(quantity);
            newItem.setTrunk(this);
            getItems().add(newItem);
        } else {
            curItem.setQuantity(curItem.getQuantity() + quantity);
        }
    }

    public Item getItemByItemID(int itemId, boolean maxSlotAllowed, FileTime dateExpire) {
        var itemInfo = ItemData.getItemInfoByID(itemId);
        int slotMax = maxSlotAllowed
                ? Short.MAX_VALUE
                : itemInfo == null
                    ? 1
                    : itemInfo.getSlotMax();

        return getItems().stream()
                .filter(i -> i.getItemId() == itemId
                        && (maxSlotAllowed || i.getQuantity() < slotMax)
                        && i.getDateExpire().equals(dateExpire))
                .findAny()
                .orElse(null);
    }

    public void removeItem(Item item, int quantity) {
        if (quantity >= item.getQuantity()) {
            getItems().remove(item);
            item.setTrunk(null);
            chr.addRemovedItem(item);
        } else {
            item.removeQuantity(quantity);
        }
    }

    public List<CashItemInfo> getLocker() {
        if (locker == null) {
            locker = cashItemInfoDao.byTrunk(this);
        }
        return locker;
    }

    public void setLocker(List<CashItemInfo> locker) {
        this.locker = locker;
    }

    public void addCashItem(CashItemInfo cii) {
        getLocker().add(cii);
    }

    public CashItemInfo getSimilarEndDateItem(CashItemInfo cii) {
        if (cii.getItem() == null || cii.getItem().getDateExpire() == null) {
            return null;
        }

        var itemId = cii.getItem().getItemId();
        if (ItemConstants.isEquip(itemId) || ItemConstants.isPet(itemId)) {
            return null;
        }

        var expireDate = cii.getItem().getDateExpire();

        var lowerBound = expireDate.toLocalDateTime().minusMinutes(2);
        var upperBound = expireDate.toLocalDateTime().plusMinutes(2);

        var similarItems = new HashSet<CashItemInfo>();
        for (var otherCii : new HashSet<>(getLocker())) {
            if (otherCii.getItem() != null && otherCii.getItemId() == itemId) {
                if (otherCii.getItem().getDateExpire() == null) {
                    continue;
                }
                var otherExpireDate = otherCii.getItem().getDateExpire().toLocalDateTime();
                if (otherExpireDate.isBefore(upperBound) && otherExpireDate.isAfter(lowerBound)) {
                    return otherCii;
                }
            }
        }

        return null;
    }

    public CashItemInfo getLockerItemBySn(long sn) {
        return Util.findWithPred(getLocker(), cii -> cii.getCashItemSN() == sn);
    }

    public boolean isFullLocker() {
        return getLocker().size() >= GameConstants.MAX_LOCKER_SIZE;
    }

    public boolean isFullItems() {
        return getItems().size() >= getSlotCount();
    }

    public Item getItemByInvIdAndPos(byte invType, short pos) {
        List<Item> items = getSortedItems(InvType.getInvTypeByVal(invType));

        return pos >= 0 && pos < items.size() ? items.get(pos) : null;
    }

    public List<Item> getSortedItems(InvType invType) {
        return getItems().stream()
                .filter(it -> it.getInvType() == invType)
                .sorted(Comparator.comparingInt(Item::getItemId))
                .collect(Collectors.toList());
    }

    public Item getItemByPos(int pos) {
        return pos >= 0 && pos < items.size() ? items.get(pos) : null;
    }

    public void removeCashItem(CashItemInfo cii) {
        getLocker().remove(cii);
        cashItemInfoDao.delete(cii);
    }

    public void removeQuantity(CashItemInfo item, int quantRemoved) {
        if (item.getQuantity() <= quantRemoved) {
            removeCashItem(item);
        } else {
            item.getItem().setQuantity(item.getQuantity() - quantRemoved);
        }
    }

    public void sortItems() {
        if (true) return;
        var newItems = new ArrayList<Item>();

        for (int i = 1; i <= 5; i++) {
            InvType invType = InvType.getInvTypeByVal(i);

            var items = getSortedItems(invType);

            newItems.addAll(items);
        }

        setItems(newItems);
    }
}
