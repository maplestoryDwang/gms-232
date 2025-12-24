package net.swordie.ms.loaders.containerclasses;

/**
 * Created on 06/04/2021.
 *
 * @author Asura
 */
public class DamageSkinInfo {
    private int itemId;
    private int dmgSkinId;
    private boolean unit;

    public DamageSkinInfo(int itemId, int dmgSkinId, boolean isUnit) {
        this.itemId = itemId;
        this.dmgSkinId = dmgSkinId;
        this.unit = isUnit;
    }

    public int getItemId() {
        return itemId;
    }

    public void setItemId(int itemId) {
        this.itemId = itemId;
    }

    public int getDmgSkinId() {
        return dmgSkinId;
    }

    public void setDmgSkinId(int dmgSkinId) {
        this.dmgSkinId = dmgSkinId;
    }

    public boolean isUnit() {
        return unit;
    }

    public void setUnit(boolean unit) {
        this.unit = unit;
    }

    public String toString(String itemName) {
        return String.format("put(%s, %d);  // %s%s%s",
                getItemId() == 0 ? "ITEM_ID" : getItemId(),
                getDmgSkinId(),
                itemName,
                isUnit() ? " [U]" : "",
                getItemId() == 0 ? " // TODO" : ""
        );
    }
}
