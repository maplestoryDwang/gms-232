package net.swordie.ms.world.auction;

import net.swordie.ms.client.character.items.Equip;
import net.swordie.ms.client.character.items.Item;

public class AuctionItemSearchCriteria {

    public String query1;
    public String query2;
    public AuctionEnum outerType;
    public AuctionEnum innerType;
    public int minLv;
    public int maxLv;
    public long minPrice;
    public long maxPrice;
    public AuctionPotType apt;
    public boolean andSearch;
    public boolean expired;

    public AuctionItemSearchCriteria(String query1, String query2, AuctionEnum outerType, AuctionEnum innerType, int minLv, int maxLv, long minPrice, long maxPrice, AuctionPotType apt, boolean andSearch, boolean expired) {
        this.query1 = query1;
        this.query2 = query2;
        this.outerType = outerType;
        this.innerType = innerType;
        this.minLv = minLv;
        this.maxLv = maxLv;
        this.minPrice = minPrice;
        this.maxPrice = maxPrice;
        this.apt = apt;
        this.andSearch = andSearch;
        this.expired = expired;
    }

    public boolean matches(AuctionItem ai) {
        Item item = ai.getItem();
        String name = ai.getItemName().toLowerCase().replaceAll(" ", "");
        Equip equip = null;

        if (item instanceof Equip) {
            equip = (Equip) item;
        }

        boolean nonEquipCheck = (name.toLowerCase().contains(query1) || name.contains(query2))
                && outerType.isMatching(item) && innerType.isMatching(item)
                && ai.getPrice() >= minPrice && ai.getPrice() <= maxPrice;

        if (equip != null && nonEquipCheck) {
            nonEquipCheck = equip.getReqLevel() >= minLv && equip.getReqLevel() <= maxLv &&
                    apt.isMatching(equip);
        }
        return nonEquipCheck;
    }
}
