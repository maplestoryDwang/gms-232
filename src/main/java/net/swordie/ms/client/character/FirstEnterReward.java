package net.swordie.ms.client.character;

import net.swordie.ms.connection.db.Saveable;
import net.swordie.ms.enums.FirstEnterRewardType;
import net.swordie.ms.util.FileTime;


public class FirstEnterReward implements Saveable {

    private long id;
    private int accountId;
    private int charId;
    private FirstEnterRewardType rewardType;
    private int itemId;
    private int quantity;
    private String description;
    private FileTime expireTime;

    public FirstEnterReward(){
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public int getAccountId() {
        return accountId;
    }

    public void setAccountId(int accountId) {
        this.accountId = accountId;
    }

    public FirstEnterRewardType getRewardType() {
        return rewardType;
    }

    public void setRewardType(FirstEnterRewardType rewardType) {
        this.rewardType = rewardType;
    }

    public int getItemId() {
        return itemId;
    }

    public void setItemId(int itemId) {
        this.itemId = itemId;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public FileTime getExpireTime() {
        return expireTime;
    }

    public void setExpireTime(FileTime expireTime) {
        this.expireTime = expireTime;
    }

    public int getCharId() {
        return charId;
    }

    public void setCharId(int charId) {
        this.charId = charId;
    }
}
