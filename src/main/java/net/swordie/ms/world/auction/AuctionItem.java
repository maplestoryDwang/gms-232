package net.swordie.ms.world.auction;

import net.swordie.ms.client.character.items.Item;
import net.swordie.ms.connection.Encodable;
import net.swordie.ms.connection.OutPacket;
import net.swordie.ms.connection.db.IdAssigner;
import net.swordie.ms.connection.db.TrackedObject;
import net.swordie.ms.enums.AuctionState;
import net.swordie.ms.loaders.StringData;
import net.swordie.ms.util.FileTime;

import javax.persistence.Transient;
import java.util.Objects;

/**
 * @author Sjonnie
 * Created on 11/21/2018.
 */
public class AuctionItem extends TrackedObject implements Encodable {

    private static IdAssigner<AuctionItem> idAssigner;

    private long id;
    private int type;
    private int accountID;
    private int charID;
    private AuctionState state;
    private int itemType;
    private String charName;
    private long price;
    private long secondPrice;
    private long directPrice;
    private FileTime endDate;
    private int bidUserID;
    private String bidUsername;
    private int idk; // -1?
    private int bidWorld;
    private int oid;
    private FileTime regDate;
    private long deposit;
    private int ssType;
    private int idk2;
    private int idk3;
    private FileTime unkDate;
    private Item item;
    private String itemName;
    private int soldQuantity;

    @Transient
    private boolean init;

    public AuctionItem() {
        this(true);
    }

    public AuctionItem(boolean assignId) {
        state = AuctionState.Init;
        if (assignId && idAssigner != null) {
            init = true;
            idAssigner.assignId(this);
        }
    }

    public boolean isInit() {
        return init;
    }

    public void setInit(boolean init) {
        this.init = init;
    }

    public static void setIdAssigner(IdAssigner<AuctionItem> idAssigner) {
        AuctionItem.idAssigner = idAssigner;
    }

    @Override
    public void encode(OutPacket outPacket) {
        outPacket.encodeInt((int) getId());
        outPacket.encodeInt(getType());
        outPacket.encodeInt(getState().getVal());
        outPacket.encodeInt(getQuantity());
        outPacket.encodeLong(getPrice());
        outPacket.encodeLong(getSecondPrice());
        outPacket.encodeLong(getDirectPrice() * getQuantity());
        outPacket.encodeLong(getDirectPrice());
        outPacket.encodeDouble(getDirectPrice());
        outPacket.encodeFT(getEndDate());
        outPacket.encodeFT(getRegDate());
        outPacket.encodeLong(0);
        outPacket.encodeInt(getBidUserID());
        outPacket.encodeInt(1);
        outPacket.encodeFT(getEndDate());

        var bool = true;
        outPacket.encodeByte(bool);
        if (bool) {
            outPacket.encodeLong(1);
            outPacket.encodeInt(getAccountID());
            outPacket.encodeInt(getCharID());
            outPacket.encodeString(getCharName());
        }

        outPacket.encode(getItem());
    }

    public void encodeHistory(OutPacket outPacket) {
        // 60 bytes
        outPacket.encodeLong(getId());
        outPacket.encodeInt((int) getId());
        outPacket.encodeInt(getAccountID());
        outPacket.encodeInt(getCharID());
        outPacket.encodeInt(getItem().getItemId());
        outPacket.encodeInt(getState().getVal());
        outPacket.encodeLong((getState() == AuctionState.Sold || getState() == AuctionState.SoldDone) ? getDirectPrice() * getQuantity() : getDirectPrice());
        outPacket.encodeFT(getEndDate());
        outPacket.encodeLong(getDeposit());
        outPacket.encodeInt(getItem().getQuantity());
        outPacket.encodeInt(getBidWorld());
    }


    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    @Override
    public int getTransactionalHash() {
        return Objects.hash(type, accountID, charID, state, itemType, charName, price, secondPrice, directPrice, endDate, bidUserID, bidUsername, idk, bidWorld, oid, regDate, deposit, ssType, idk2, idk3, unkDate, item.getTransactionalHash(), itemName, soldQuantity, init);
    }

    public int getType() {
        return type;
    }

    public void setType(int type) {
        this.type = type;
    }

    public int getAccountID() {
        return accountID;
    }

    public void setAccountID(int accountID) {
        this.accountID = accountID;
    }

    public int getCharID() {
        return charID;
    }

    public void setCharID(int charID) {
        this.charID = charID;
    }

    public AuctionState getState() {
        return state;
    }

    public void setState(AuctionState state) {
        this.state = state;
    }

    public int getItemType() {
        return itemType;
    }

    public void setItemType(int itemType) {
        this.itemType = itemType;
    }

    public String getCharName() {
        return charName;
    }

    public void setCharName(String charName) {
        this.charName = charName;
    }

    public long getPrice() {
        return price;
    }

    public void setPrice(long price) {
        this.price = price;
    }

    public long getSecondPrice() {
        return secondPrice;
    }

    public void setSecondPrice(long secondPrice) {
        this.secondPrice = secondPrice;
    }

    public long getDirectPrice() {
        return directPrice;
    }

    public void setDirectPrice(long directPrice) {
        this.directPrice = directPrice;
    }

    public FileTime getEndDate() {
        return endDate;
    }

    public void setEndDate(FileTime endDate) {
        this.endDate = endDate;
    }

    public int getBidUserID() {
        return bidUserID;
    }

    public void setBidUserID(int bidUserID) {
        this.bidUserID = bidUserID;
    }

    public String getBidUsername() {
        return bidUsername;
    }

    public void setBidUsername(String bidUsername) {
        this.bidUsername = bidUsername;
    }

    public int getIdk() {
        return idk;
    }

    public void setIdk(int idk) {
        this.idk = idk;
    }

    public int getBidWorld() {
        return bidWorld;
    }

    public void setBidWorld(int bidWorld) {
        this.bidWorld = bidWorld;
    }

    public int getOid() {
        return oid;
    }

    public void setOid(int oid) {
        this.oid = oid;
    }

    public FileTime getRegDate() {
        return regDate;
    }

    public void setRegDate(FileTime regDate) {
        this.regDate = regDate;
    }

    public long getDeposit() {
        return deposit;
    }

    public void setDeposit(long deposit) {
        this.deposit = deposit;
    }

    public int getSsType() {
        return ssType;
    }

    public void setSsType(int ssType) {
        this.ssType = ssType;
    }

    public int getIdk2() {
        return idk2;
    }

    public void setIdk2(int idk2) {
        this.idk2 = idk2;
    }

    public int getIdk3() {
        return idk3;
    }

    public void setIdk3(int idk3) {
        this.idk3 = idk3;
    }

    public FileTime getUnkDate() {
        return unkDate;
    }

    public void setUnkDate(FileTime unkDate) {
        this.unkDate = unkDate;
    }

    public Item getItem() {
        return item;
    }

    public void setItem(Item item) {
        this.item = item;
        this.itemType = item.getType().getVal();
        this.itemName = StringData.getItemStringById(item.getItemId());
    }

    public String getItemName() {
        return itemName;
    }

    public void setItemName(String itemName) {
        this.itemName = itemName;
    }

    public AuctionItem deepCopy(FileTime newEndDate) {
        AuctionItem ai = new AuctionItem();

        ai.type = type;
        ai.accountID = accountID;
        ai.charID = charID;
        ai.state = state;
        ai.itemType = itemType;
        ai.charName = charName;
        ai.price = price;
        ai.secondPrice = secondPrice;
        ai.directPrice = directPrice;
        ai.bidUserID = bidUserID;
        ai.bidUsername = bidUsername;
        ai.idk = idk;
        ai.bidWorld = bidWorld;
        ai.oid = oid;
        ai.regDate = regDate;
        ai.endDate = newEndDate;
        ai.deposit = deposit;
        ai.ssType = ssType;
        ai.idk2 = idk2;
        ai.idk3 = idk3;
        ai.unkDate = unkDate;
        ai.item = item;
        ai.itemName = itemName;

        return ai;
    }

    public int getQuantity() {
        return getItem().getQuantity();
    }

    public int getSoldQuantity() {
        return soldQuantity;
    }

    public void setSoldQuantity(int soldQuantity) {
        this.soldQuantity = soldQuantity;
    }
}
