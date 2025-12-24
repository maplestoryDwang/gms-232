package net.swordie.ms.logging;

import net.swordie.ms.client.character.Char;
import net.swordie.ms.client.character.items.Item;
import net.swordie.ms.connection.db.Saveable;
import net.swordie.ms.connection.db.TrackedObject;
import net.swordie.ms.loaders.StringData;
import net.swordie.ms.util.FileTime;

import java.util.Objects;
import java.util.UUID;

public class TradeTransaction extends TrackedObject implements Saveable {

    private long id;
    private UUID uuid;
    private FileTime fileTime;
    private int characterIdFrom;
    private int characterIdTo;
    private String characterNameFrom;
    private String characterNameTo;
    private int userIdFrom;
    private int userIdTo;
    private long itemId;
    private int templateItemId;
    private String description;
    private long money;
    private int mapId;
    private TradeTransactionType tradeTransactionType;

    public TradeTransaction() {

    }

    public TradeTransaction(UUID uuid, FileTime fileTime, int characterIdFrom, int characterIdTo,
            String characterNameFrom, String characterNameTo, int userIdFrom, int userIdTo, long itemId, int templateItemId,
            String description, TradeTransactionType tradeTransactionType, int mapId) {
        this.uuid = uuid;
        this.fileTime = fileTime;
        this.characterIdFrom = characterIdFrom;
        this.characterIdTo = characterIdTo;
        this.characterNameFrom = characterNameFrom;
        this.characterNameTo = characterNameTo;
		this.userIdFrom = userIdFrom;
		this.userIdTo = userIdTo;
        this.itemId = itemId;
        this.templateItemId = templateItemId;
        this.description = description;
        this.tradeTransactionType = tradeTransactionType;
        this.mapId = mapId;
    }

	public TradeTransaction(UUID uuid, FileTime fileTime, int characterIdFrom, int characterIdTo,
			String characterNameFrom, String characterNameTo, int userIdFrom, int userIdTo,
			long money, TradeTransactionType tradeTransactionType, int mapId) {
        this.uuid = uuid;
        this.fileTime = fileTime;
        this.characterIdFrom = characterIdFrom;
        this.characterIdTo = characterIdTo;
        this.characterNameFrom = characterNameFrom;
        this.characterNameTo = characterNameTo;
		this.userIdFrom = userIdFrom;
		this.userIdTo = userIdTo;
        this.tradeTransactionType = tradeTransactionType;
        this.money = money;
        this.mapId = mapId;
    }

    public static TradeTransaction fromTrade(UUID tradeUuid, Item item, Char from, Char to) {
        var description = String.format("%s (%d)", StringData.getItemStringById(item.getItemId()), item.getQuantity());
        return new TradeTransaction(
                tradeUuid,
                FileTime.currentTime(),
                from.getId(),
                to.getId(),
                from.getName(),
                to.getName(),
				from.getUserId(),
				to.getUserId(),
                item.getId(),
                item.getItemId(),
                description,
                TradeTransactionType.Trade,
                to.getFieldID()
        );
    }

    public static TradeTransaction fromTrade(UUID tradeUuid, long money, Char from, Char to) {
        return new TradeTransaction(
                tradeUuid,
                FileTime.currentTime(),
                from.getId(),
                to.getId(),
                from.getName(),
                to.getName(),
				from.getUserId(),
				to.getUserId(),
                money,
                TradeTransactionType.Trade,
                to.getFieldID()
        );
    }

    public static TradeTransaction fromDrop(Item item, Char from, Char to) {
        var description = String.format("%s (%d)", StringData.getItemStringById(item.getItemId()), item.getQuantity());
        return new TradeTransaction(
                UUID.randomUUID(),
                FileTime.currentTime(),
                from.getId(),
                to.getId(),
                from.getName(),
                to.getName(),
				from.getUserId(),
				to.getUserId(),
                item.getId(),
                item.getItemId(),
                description,
                TradeTransactionType.Drop,
                to.getFieldID()
        );
    }

    public static TradeTransaction fromDrop(long money, Char from, Char to) {
        return new TradeTransaction(
                UUID.randomUUID(),
                FileTime.currentTime(),
                from.getId(),
                to.getId(),
                from.getName(),
                to.getName(),
				from.getUserId(),
				to.getUserId(),
                money,
                TradeTransactionType.Drop,
                to.getFieldID()
        );
    }

    public UUID getUuid() {
        return uuid;
    }

    public void setUuid(UUID uuid) {
        this.uuid = uuid;
    }

    public FileTime getFileTime() {
        return fileTime;
    }

    public void setFileTime(FileTime fileTime) {
        this.fileTime = fileTime;
    }

    public int getCharacterIdFrom() {
        return characterIdFrom;
    }

    public void setCharacterIdFrom(int characterIdFrom) {
        this.characterIdFrom = characterIdFrom;
    }

    public int getCharacterIdTo() {
        return characterIdTo;
    }

    public void setCharacterIdTo(int characterIdTo) {
        this.characterIdTo = characterIdTo;
    }

    public String getCharacterNameFrom() {
        return characterNameFrom;
    }

    public void setCharacterNameFrom(String characterNameFrom) {
        this.characterNameFrom = characterNameFrom;
    }

    public String getCharacterNameTo() {
        return characterNameTo;
    }

    public void setCharacterNameTo(String characterNameTo) {
        this.characterNameTo = characterNameTo;
    }

    public int getUserIdFrom() {
		return userIdFrom;
	}

    public void setUserIdFrom(int userIdFrom) {
        this.userIdFrom = userIdFrom;
    }

    public int getUserIdTo() {
		return userIdTo;
	}

    public void setUserIdTo(int userIdTo) {
        this.userIdTo = userIdTo;
    }

    public long getItemId() {
        return itemId;
    }

    public void setItemId(long itemId) {
        this.itemId = itemId;
    }

    public int getTemplateItemId() {
        return templateItemId;
    }

    public void setTemplateItemId(int templateItemId) {
        this.templateItemId = templateItemId;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public TradeTransactionType getTradeTransactionType() {
        return tradeTransactionType;
    }

    public void setTradeTransactionType(TradeTransactionType tradeTransactionType) {
        this.tradeTransactionType = tradeTransactionType;
    }

    @Override
    public long getId() {
        return id;
    }

    @Override
    public void setId(long id) {
        this.id = id;
    }

    @Override
    public String toString() {
        return "TradeTransaction{" +
                "id=" + id +
                ", uuid=" + uuid +
                ", fileTime=" + fileTime +
                ", characterIdFrom=" + characterIdFrom +
                ", characterIdTo=" + characterIdTo +
                ", characterNameFrom='" + characterNameFrom + '\'' +
                ", characterNameTo='" + characterNameTo + '\'' +
                ", userIdFrom=" + userIdFrom +
                ", userIdTo=" + userIdTo +
                ", itemId=" + itemId +
                ", templateItemId=" + templateItemId +
                ", description='" + description + '\'' +
                ", tradeTransactionType=" + tradeTransactionType +
                ", mapId=" + mapId +
                '}';
    }

    @Override
    public int getTransactionalHash() {
        return Objects.hash(uuid,
                fileTime,
                characterIdFrom,
                characterIdTo,
				characterNameFrom,
				characterNameTo,
				userIdFrom,
				userIdTo,
                itemId,
                templateItemId,
                description,
                tradeTransactionType,
                mapId);
    }

    public long getMoney() {
        return money;
    }

    public void setMoney(long money) {
        this.money = money;
    }

    public int getMapId() {return mapId;}

    public void setMapId(int mapId) {
        this.mapId = mapId;
    }

    public enum TradeTransactionType {
        Trade,
        Drop,
    }
}
