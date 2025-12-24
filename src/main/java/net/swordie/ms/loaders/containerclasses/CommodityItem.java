package net.swordie.ms.loaders.containerclasses;

import net.swordie.ms.client.Account;
import net.swordie.ms.client.character.items.Item;
import net.swordie.ms.loaders.ItemData;
import net.swordie.ms.util.FileTime;
import net.swordie.ms.world.shop.cashshop.CashItemInfo;

import java.time.LocalDateTime;

public class CommodityItem {
    private int sn;
    private int itemId;
    private int count;
    private int period;
    private int price;
    private int priority;
    private int originalPrice;
    private int mileageRate;
    private boolean credit;
    private boolean gift;
    private boolean point;
    private boolean prepaid;
    private boolean bonus;
    private boolean onSale;

    public CashItemInfo toCashItemInfo(Account account, int quantity) {
        CashItemInfo cii = new CashItemInfo();

        cii.setAccountID(account.getId());

        var itemId = getItemId();
        if (getItemId() == 5000012) {
            itemId = 5000101; // white tiger has a wrong id in wz
        }

        Item item = ItemData.getItemDeepCopy(itemId);
        item.assignId();
        item.setQuantity((short) (getCount() == 0 ? 1 : getCount()));
        item.setQuantity(item.getQuantity() * quantity);
        cii.setItem(item);
        cii.setCommodityID(getSn());
        if (getPrice() > 0 && getPeriod() > 0) {
            item.setDateExpire(FileTime.fromDate(LocalDateTime.now().plusDays(getPeriod())));
        }

        return cii;
    }

    public void setSn(int sn) {
        this.sn = sn;
    }

    public int getSn() {
        return sn;
    }

    public void setItemId(int itemId) {
        this.itemId = itemId;
    }

    public int getItemId() {
        return itemId;
    }

    public void setCount(int count) {
        this.count = count;
    }

    public int getCount() {
        return count;
    }

    public void setPeriod(int period) {
        this.period = period;
    }

    public int getPeriod() {
        return period;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public int getPrice() {
        return price;
    }

    public void setPriority(int priority) {
        this.priority = priority;
    }

    public int getPriority() {
        return priority;
    }

    public void setOriginalPrice(int originalPrice) {
        this.originalPrice = originalPrice;
    }

    public int getOriginalPrice() {
        return originalPrice;
    }

    public void setMileageRate(int mileageRate) {
        this.mileageRate = mileageRate;
    }

    public int getMileageRate() {
        return mileageRate;
    }

    public void setCredit(boolean credit) {
        this.credit = credit;
    }

    public boolean isCredit() {
        return credit;
    }

    public void setGift(boolean gift) {
        this.gift = gift;
    }

    public boolean isGift() {
        return gift;
    }

    public void setPoint(boolean point) {
        this.point = point;
    }

    public boolean isPoint() {
        return point;
    }

    public void setPrepaid(boolean prepaid) {
        this.prepaid = prepaid;
    }

    public boolean isPrepaid() {
        return prepaid;
    }

    public void setBonus(boolean bonus) {
        this.bonus = bonus;
    }

    public boolean hasBonus() {
        return bonus;
    }

    public void setOnSale(boolean onSale) {
        this.onSale = onSale;
    }

    public boolean isOnSale() {
        return onSale;
    }
}
