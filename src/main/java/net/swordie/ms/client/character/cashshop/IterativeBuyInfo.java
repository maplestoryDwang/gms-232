package net.swordie.ms.client.character.cashshop;

import net.swordie.ms.client.character.Char;
import net.swordie.ms.connection.packet.CCashShop;
import net.swordie.ms.world.shop.cashshop.CashItemInfo;

import java.util.HashSet;
import java.util.Set;

public class IterativeBuyInfo {

    private int buyCount;
    private int currentBuyCount;
    private Set<CashItemInfo> cashItemInfos;

    public IterativeBuyInfo(int buyCount) {
        this.buyCount = buyCount;
        currentBuyCount = 0;
        cashItemInfos = new HashSet<>();
    }

    public int getCurrentBuyCount() {
        return currentBuyCount;
    }

    public void setCurrentBuyCount(int currentBuyCount) {
        this.currentBuyCount = currentBuyCount;
    }

    public int getBuyCount() {
        return buyCount;
    }

    public Set<CashItemInfo> getCashItemInfos() {
        return cashItemInfos;
    }

    public void addCashItemInfo(CashItemInfo cii) {
        cashItemInfos.add(cii);
        setCurrentBuyCount(getCurrentBuyCount() + 1);
    }

    public void encodeItems(Char chr) {
        for (var cashItemInfo : getCashItemInfos()) {
            chr.write(CCashShop.cashItemResBuyDone(cashItemInfo, null, null));
        }
    }

    public boolean isDone() {
        return getCurrentBuyCount() >= getBuyCount();
    }
}
