package net.swordie.ms.client.character.items;

import net.swordie.ms.client.character.Char;
import net.swordie.ms.client.trunk.Trunk;
import net.swordie.ms.connection.Encodable;
import net.swordie.ms.connection.OutPacket;
import net.swordie.ms.connection.db.IdAssigner;
import net.swordie.ms.connection.db.TrackedObject;
import net.swordie.ms.connection.packet.WvsContext;
import net.swordie.ms.constants.ItemConstants;
import net.swordie.ms.enums.InvType;
import net.swordie.ms.loaders.ItemData;
import net.swordie.ms.util.FileTime;

import java.io.Serializable;
import java.util.Arrays;
import java.util.Objects;

import static net.swordie.ms.enums.InvType.CASH;
import static net.swordie.ms.enums.InvType.EQUIPPED;
import static net.swordie.ms.enums.InventoryOperation.Add;

/**
 * GW_ItemSlotBase
 * Created on 11/23/2017.
 */
public class Item extends TrackedObject implements Serializable, Encodable {

    private static IdAssigner<Item> idAssigner;

    private long id;

    private Inventory inventory;
    private Trunk trunk;

    protected int itemId;
    protected int bagIndex;
    protected long cashItemSerialNumber;
    protected FileTime dateExpire = FileTime.fromType(FileTime.Type.MAX_TIME);
    protected InvType invType;
    protected Type type;
    protected boolean isCash;
    protected int quantity;
    private String owner = "";
    private boolean init;
    private int bagItemIndex = -1; // Link item to BagItem
    private boolean forceSaveNextFlush;
    private PowerCrystal powerCrystalInfo;

    public static <T extends TrackedObject> void setIdAssigner(IdAssigner<Item> idAssigner) {
        Item.idAssigner = idAssigner;
    }

    public boolean isTradable() {
        if (ItemConstants.isBagItem(getItemId())) {
            return getBagItemIndex() == -1;
        }
        var itemInfo = ItemData.getItemInfoByID(getItemId());
        return itemInfo != null && !itemInfo.isTradeBlock() && !itemInfo.isAccountSharable();
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getOwner() {
        return owner;
    }

    public void setOwner(String owner) {
        this.owner = owner;
    }

    public void drop() {
        setBagIndex(0);
    }

    public void addQuantity(int amount) {
        if (amount > 0 && amount + getQuantity() > 0) {
            setQuantity(getQuantity() + amount);
        }
    }

    public void removeQuantity(int amount) {
        if (amount > 0) {
            setQuantity(Math.max(0, getQuantity() - amount));
        }
    }

    public Item() {
    }

    public Item(int itemId, int bagIndex, long cashItemSerialNumber, FileTime dateExpire, InvType invType,
                boolean isCash, Type type) {
        this.itemId = itemId;
        this.bagIndex = bagIndex;
        this.cashItemSerialNumber = cashItemSerialNumber;
        this.dateExpire = dateExpire;
        this.invType = invType;
        this.isCash = isCash;
        this.type = type;
    }

    public Item deepCopy() {
        Item item = new Item();

        item.setItemId(getItemId());
        item.setBagIndex(getBagIndex());
        item.setCashItemSerialNumber(getCashItemSerialNumber());
        item.setDateExpire(getDateExpire().deepCopy());
        item.setInvType(getInvType());
        item.setCash(isCash());
        item.setType(getType());
        item.setOwner(getOwner());
        item.setQuantity(getQuantity());
        item.setPowerCrystalInfo(getPowerCrystalInfo());

        return item;
    }

    public int getItemId() {
        return itemId;
    }

    public int getBagIndex() {
        return bagIndex;
    }

    public int getBagIndexWithEquipped() {
        return getInvType() == EQUIPPED ? -bagIndex : bagIndex;
    }

    public void setBagIndex(int bagIndex) {
        this.bagIndex = Math.abs(bagIndex);
    }

    public long getCashItemSerialNumber() {
        return getId();
    }

    public FileTime getDateExpire() {
        return dateExpire;
    }

    public boolean hasExpireDate() {
        return !getDateExpire().equals(FileTime.fromType(FileTime.Type.MAX_TIME));
    }

    public InvType getInvType() {
        return invType;
    }

    public Type getType() {
        return type;
    }

    public boolean isCash() {
        return isCash || getInvType() == CASH;
    }

    public void encode(OutPacket outPacket) {
        int itemId = getItemId();
        outPacket.encodeByte(getType().getVal());
        // GW_ItemSlotBase
        outPacket.encodeInt(itemId);
        outPacket.encodeByte(isCash());
        if (isCash()) {
            outPacket.encodeLong(getId());
        }
        outPacket.encodeFT(getDateExpire());
        outPacket.encodeInt(isBagItemOwner() && getBagItemIndex() >= 0 ? getBagItemIndex() : -1); // bagIndex if it's in a bag
        outPacket.encodeByte(false); // new 196
        if (getType() == Type.ITEM) { // bundle
            outPacket.encodeShort(getQuantity()); // nQuantity
            outPacket.encodeString(getOwner()); // sOwner
            outPacket.encodeShort(0); // flag
            if (ItemConstants.isThrowingStar(itemId) || ItemConstants.isBullet(itemId) ||
                    ItemConstants.isFamiliar(itemId) || ItemConstants.isIntensePowerCrystal(itemId) ||
                    itemId / 10000 == 288) { // idk what the last one for is, there's no items that begin with this
                outPacket.encodeLong(getId()); // not id, basically an option
            }
            outPacket.encodeInt(0); // new 196
        }
    }

    public void setItemId(int itemId) {
        this.itemId = itemId;
    }

    public void setCashItemSerialNumber(long cashItemSerialNumber) {
        this.cashItemSerialNumber = cashItemSerialNumber;
    }

    public void setDateExpire(FileTime dateExpire) {
        this.dateExpire = dateExpire;
    }

    public void setInvType(InvType invType) {
        this.invType = invType;
    }

    public void setType(Type type) {
        this.type = type;
    }

    public void setCash(boolean cash) {
        isCash = cash;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public int getBagItemIndex() {
        return bagItemIndex;
    }

    public void setBagItemIndex(int bagItemIndex) {
        this.bagItemIndex = bagItemIndex;
    }

    public boolean isBagItemOwner() {
        return getBagItemIndex() >= 0 && ItemConstants.isBagItem(getItemId());
    }

    public boolean isInBag() {
        return getBagIndex() >= 10000;
    }

    public boolean isNotInBag() {
        return getBagIndex() < 10000;
    }

    public int getBagIndexInBagItem() {
        if (!isInBag()) {
            return getBagIndex();
        }
        return getBagIndex() % 100 - 1; // 10101 -> first slot in a bag
    }

    public void openBagItemFirstTime(Char chr) { // create BagItemIndex  &  make untradable
        setBagItemIndex(chr.getNewBagItemIndex(getInvType()));
    }

    @Override
    public String toString() {
        return "Id: " + getId() + ", ItemId: " + getItemId() + ", Qty: " + getQuantity() + ", InvType: " + getInvType()
                + ", BagIndex: " + getBagIndex();
    }

    /**
     * Sends a packet to the given Char to show that this Item has updated.
     * @param chr The Char to give the update to
     */
    public void updateToChar(Char chr) {
        short bagIndex = (short) (getInvType() == EQUIPPED ? - getBagIndex() : getBagIndex());
        chr.write(WvsContext.inventoryOperation(true, false, Add,
                bagIndex, (short) 0, 0, this));
    }

    public void assignId() {
        if (getId() == 0) {
            init = true;
            idAssigner.assignId(this);
        }
    }

    public boolean applyPsok(Char chr) {
        var ii = ItemData.getItemInfoByID(getItemId());
        if (ii == null) {
            chr.chatMessage("Unknown item");
            chr.dispose();
            return false;
        }

        if (ii.isAccountSharable() || !ii.isTradeBlock()) {
            chr.chatMessage("Item is tradable or account tradable.");
            chr.dispose();
            return false;
        }

        var trunk = chr.getAccount().getTrunk();
        if (trunk.isFullItems()) {
            chr.chatMessage("Your storage is full.");
            chr.dispose();
            return false;
        }

        trunk.addItem(this, getQuantity());
        chr.consumeItemFull(this);
        chr.chatMessage("The item has been moved into your storage.");

        return true;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Item item = (Item) o;
        return id != 0 && id == item.id && itemId == item.itemId;
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, itemId);
    }

    @Override
    public boolean isClean() {
        return !isForceSaveNextFlush() && super.isClean();
    }

    public int getTransactionalHash() {
        return Objects.hash(itemId, bagIndex, cashItemSerialNumber, dateExpire, invType, type, isCash, quantity, owner, bagItemIndex,
                inventory == null ? -1 : inventory.getId(), trunk == null ? -1 : trunk.getId(), powerCrystalInfo == null ? -1 : powerCrystalInfo.getBossId(),
                powerCrystalInfo == null ? -1 : powerCrystalInfo.getPlayerCount(), powerCrystalInfo == null ? -1 : powerCrystalInfo.getPrice(), powerCrystalInfo == null ? -1 : powerCrystalInfo.getObtainedDate());

    }

    public boolean isAccountSharable() {
        var ii = ItemData.getItemInfoByID(getItemId());
        return ii != null && ii.isAccountSharable();
    }

    public boolean isInit() {
        return init;
    }

    public void setInit(boolean init) {
        this.init = init;
    }

    public boolean isForceSaveNextFlush() {
        return forceSaveNextFlush;
    }

    public void setForceSaveNextFlush(boolean forceSaveNextFlush) {
        this.forceSaveNextFlush = forceSaveNextFlush;
    }

    public Inventory getInventory() {
        return inventory;
    }

    public void setInventory(Inventory inventory) {
        this.inventory = inventory;
        this.trunk = null;
    }

    public Trunk getTrunk() {
        return trunk;
    }

    public void setTrunk(Trunk trunk) {
        this.trunk = trunk;
        this.inventory = null;
    }

    public PowerCrystal getPowerCrystalInfo() {
        return powerCrystalInfo;
    }

    public void setPowerCrystalInfo(PowerCrystal powerCrystalInfo) {
        this.powerCrystalInfo = powerCrystalInfo;
    }

    public enum Type {
        EQUIP(1),
        ITEM(2),
        PET(3);

        private byte val;

        Type(byte val) {
            this.val = val;
        }

        Type(int val) {
            this((byte) val);
        }

        public byte getVal() {
            return val;
        }

        public static Type getTypeById(int id) {
            return Arrays.stream(Type.values()).filter(type -> type.getVal() == id).findFirst().orElse(null);
        }
    }
}
