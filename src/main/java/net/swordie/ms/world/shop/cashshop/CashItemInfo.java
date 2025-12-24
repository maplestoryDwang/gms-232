package net.swordie.ms.world.shop.cashshop;

import net.swordie.ms.client.character.Char;
import net.swordie.ms.client.character.items.Item;
import net.swordie.ms.client.character.items.PetItem;
import net.swordie.ms.connection.Encodable;
import net.swordie.ms.connection.OutPacket;
import net.swordie.ms.connection.db.IdAssigner;
import net.swordie.ms.connection.db.TrackedObject;
import net.swordie.ms.loaders.ItemData;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Transient;
import java.util.Objects;

/**
 * Created on 4/23/2018.
 */
@Entity
@Table(name = "cashiteminfos")
public class CashItemInfo extends TrackedObject implements Encodable {

    private static IdAssigner<CashItemInfo> idAssigner;

    @Id
    private long id;

    private int accountID;
    private int characterID;
    private int commodityID;
    private String buyCharacterID;

    private int paybackRate;
    private double discount;
    private int orderNo;
    private int productNo;
    private boolean refundable;
    private byte sourceFlag;
    private boolean storeBank;
    private int position;

    private Item item;

    @Transient
    private boolean init;

    public CashItemInfo() {
        this(true);
    }

    public CashItemInfo(boolean needsId) {
        if (needsId && idAssigner != null) {
            init = true;
            idAssigner.assignId(this);
        }
    }

    @Override
    public int getTransactionalHash() {
        return Objects.hash(accountID, characterID, commodityID, buyCharacterID, paybackRate, discount, orderNo, productNo, refundable, sourceFlag, storeBank, position, item.getTransactionalHash());
    }

    public static <T extends TrackedObject> void setIdAssigner(IdAssigner<CashItemInfo> idAssigner) {
        CashItemInfo.idAssigner = idAssigner;
    }

    public void encode(OutPacket outPacket) {
        // size 102
        outPacket.encodeLong(item.getId());
        outPacket.encodeInt(getAccountID());
        outPacket.encodeInt(getCharacterID());
        outPacket.encodeInt(item.getItemId());
        outPacket.encodeInt(getCommodityID());
        outPacket.encodeShort(item.getQuantity());
        outPacket.encodeString(getBuyCharacterID(), 13); // gifter
        outPacket.encodeFT(item.getDateExpire());
        outPacket.encodeInt(getPaybackRate());
        outPacket.encodeLong((long) getDiscount());
        outPacket.encodeInt(getOrderNo());
        outPacket.encodeInt(getProductNo());
        outPacket.encodeByte(isRefundable());
        outPacket.encodeByte(getSourceFlag());
        outPacket.encodeByte(isStoreBank());

        outPacket.encodeByte(item != null);
        if (item != null) {
            outPacket.encode(item);
        }
    }

    public int getAccountID() {
        return accountID;
    }

    public void setAccountID(int accountID) {
        this.accountID = accountID;
    }

    public int getCharacterID() {
        return characterID;
    }

    public void setCharacterID(int characterID) {
        this.characterID = characterID;
    }

    public int getItemId() {
        return item.getItemId();
    }

    public int getCommodityID() {
        return commodityID;
    }

    public void setCommodityID(int commodityID) {
        this.commodityID = commodityID;
    }

    public int getQuantity() {
        return item.getQuantity();
    }

    public String getBuyCharacterID() {
        return buyCharacterID;
    }

    public void setBuyCharacterID(String buyCharacterID) {
        this.buyCharacterID = buyCharacterID;
    }

    public int getPaybackRate() {
        return paybackRate;
    }

    public void setPaybackRate(int paybackRate) {
        this.paybackRate = paybackRate;
    }

    public double getDiscount() {
        return discount;
    }

    public void setDiscount(double discount) {
        this.discount = discount;
    }

    public int getOrderNo() {
        return orderNo;
    }

    public void setOrderNo(int orderNo) {
        this.orderNo = orderNo;
    }

    public int getProductNo() {
        return productNo;
    }

    public void setProductNo(int productNo) {
        this.productNo = productNo;
    }

    public boolean isRefundable() {
        return refundable;
    }

    public void setRefundable(boolean refundable) {
        this.refundable = refundable;
    }

    public byte getSourceFlag() {
        return sourceFlag;
    }

    public void setSourceFlag(byte sourceFlag) {
        this.sourceFlag = sourceFlag;
    }

    public boolean isStoreBank() {
        return storeBank;
    }

    public void setStoreBank(boolean storeBank) {
        this.storeBank = storeBank;
    }

    public long getCashItemSN() {
        return getItem() == null ? 0 : getItem().getId();
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public int getPosition() {
        return position;
    }

    public void setPosition(int position) {
        this.position = position;
    }

    /**
     * Transforms this CashItemInfo to its corresponding Item
     *
     * @return the corresponding Item
     */
    public Item getItem() {
        return item;
    }

    public void setItem(Item item) {
        this.item = item;
    }

    /**
     * Creates a CashItemInfo from a given cash Item. If the Item is not a cash Item, returns null.
     *
     * @param chr  the chr to which the items belongs to
     * @param item the item from which the CashItemInfo should be created from
     * @return corresponding CashItemInfo
     */
    public static CashItemInfo fromItem(Char chr, Item item) {
        if (!item.isCash() && !(item instanceof PetItem)) {
            return null;
        }

        CashItemInfo cii = new CashItemInfo();
        cii.setAccountID(chr.getUserId());
        cii.setCommodityID(1); // could grab this from cashshop wz

        cii.setItem(item);

        return cii;
    }

    public static CashItemInfo fromNewItem(Char chr, int itemId, int quantity) {
        CashItemInfo cii = new CashItemInfo();

        cii.setAccountID(chr.getAccount().getId());

        Item item = ItemData.getItemDeepCopy(itemId);
        item.assignId();
        item.setQuantity(quantity);
        cii.setItem(item);
        cii.setCommodityID(0);

        return cii;
    }

    public boolean isInit() {
        return init;
    }

    public void setInit(boolean init) {
        this.init = init;
    }

    public void addQuantity(int quant) {
        getItem().setQuantity(getQuantity() + quant);
    }
}
