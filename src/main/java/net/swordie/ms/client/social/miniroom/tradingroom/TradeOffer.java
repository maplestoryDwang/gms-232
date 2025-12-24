package net.swordie.ms.client.social.miniroom.tradingroom;

import net.swordie.ms.client.character.items.Item;
import net.swordie.ms.constants.GameConstants;

import java.util.HashMap;
import java.util.Map;

/**
 * Created on 03/02/2022.
 *
 * @author Asura
 */
public class TradeOffer {
    private Map<Integer, Item> offeredItems = new HashMap<>();
    private long money = 0L;

    public Map<Integer, Item> getOfferedItems() {
        return offeredItems;
    }

    private void setOfferedItems(Map<Integer, Item> offeredItems) {
        this.offeredItems = offeredItems;
    }

    public void addItemToOfferedItems(int position, Item item) {
        getOfferedItems().put(position, item);
    }

    public Item getOfferedItemByPosition(int position) {
        return getOfferedItems().getOrDefault(position, null);
    }

    public boolean canAddItems() {
        return getOfferedItems().size() < GameConstants.MAX_TRADE_ITEMS;
    }

    public long getMoney() {
        return money;
    }

    private void setMoney(long money) {
        this.money = money;
    }

    public void addMoney(long moneyAdded) {
        setMoney(getMoney() + moneyAdded);
    }
}
