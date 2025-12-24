package net.swordie.orm.dao;

import net.swordie.ms.client.character.items.Item;
import net.swordie.ms.connection.db.DatabaseManager;
import net.swordie.ms.connection.db.converters.FileTimeConverter;
import net.swordie.ms.enums.AuctionState;
import net.swordie.ms.util.FileTime;
import net.swordie.ms.world.auction.AuctionItem;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;

public class AuctionItemDao implements SworDao<AuctionItem> {

    private static final Logger log = LogManager.getLogger();

    public static final String TABLE = "auction_items";
    private static final ItemDao itemDao = (ItemDao) SworDaoFactory.getByClass(Item.class);

    public void saveOrUpdate(AuctionItem auctionItem) {
        if (auctionItem == null || auctionItem.isClean()) {
            return;
        }

        boolean needsId = auctionItem.isInit();

        itemDao.saveOrUpdate(auctionItem.getItem());

        String query;
        if (needsId) {
            query = "INSERT INTO auction_items(" +
                    "type, " +
                    "accountID, " +
                    "charID, " +
                    "state, " +
                    "itemType, " +
                    "charName, " +
                    "price, " +
                    "secondPrice, " +
                    "directPrice, " +
                    "endDate, " +
                    "bidUserID, " +
                    "bidUsername, " +
                    "idk, " +
                    "bidWorld, " +
                    "oid, " +
                    "regDate, " +
                    "deposit, " +
                    "ssType, " +
                    "idk2, " +
                    "idk3, " +
                    "unkDate, " +
                    "item, " +
                    "itemName, " +
                    "soldQuantity, " +
                    "id " +
                    ") VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
        } else {
            query = "UPDATE auction_items SET " +
                    "type = ?," +
                    "accountID = ?," +
                    "charID = ?," +
                    "state = ?," +
                    "itemType = ?," +
                    "charName = ?," +
                    "price = ?," +
                    "secondPrice = ?," +
                    "directPrice = ?," +
                    "endDate = ?," +
                    "bidUserID = ?," +
                    "bidUsername = ?," +
                    "idk = ?," +
                    "bidWorld = ?," +
                    "oid = ?," +
                    "regDate = ?," +
                    "deposit = ?," +
                    "ssType = ?," +
                    "idk2 = ?," +
                    "idk3 = ?," +
                    "unkDate = ?," +
                    "item = ?," +
                    "itemName = ?," +
                    "soldQuantity = ?" +
                    " WHERE ID = ?";
        }
        DatabaseManager.executeQuery(query,
                auctionItem.getType(),
                auctionItem.getAccountID(),
                auctionItem.getCharID(),
                auctionItem.getState().ordinal(),
                auctionItem.getItemType(),
                auctionItem.getCharName(),
                auctionItem.getPrice(),
                auctionItem.getSecondPrice(),
                auctionItem.getDirectPrice(),
                FileTimeConverter.toDbColumn(auctionItem.getEndDate()),
                auctionItem.getBidUserID(),
                auctionItem.getBidUsername(),
                auctionItem.getIdk(),
                auctionItem.getBidWorld(),
                auctionItem.getOid(),
                FileTimeConverter.toDbColumn(auctionItem.getRegDate()),
                auctionItem.getDeposit(),
                auctionItem.getSsType(),
                auctionItem.getIdk2(),
                auctionItem.getIdk3(),
                FileTimeConverter.toDbColumn(auctionItem.getUnkDate()),
                auctionItem.getItem() == null ? null : auctionItem.getItem().getId(),
                auctionItem.getItemName(),
                auctionItem.getSoldQuantity(),
                auctionItem.getId()
        );
        if (needsId) {
            auctionItem.setInit(false);
        }
        auctionItem.setLastSavedHash();
    }

    public void delete(AuctionItem auctionItem) {
        if (auctionItem == null || auctionItem.getId() == 0) {
            log.debug("Trying to delete object " + auctionItem + " that is null or has id 0");
            return;
        }
        DatabaseManager.executeQuery("DELETE FROM auction_items WHERE ID = ?", auctionItem.getId());
    }


    @Override
    public AuctionItem fromResultSet(ResultSet resultSet, String alias) {
        AuctionItem ai = null;

        try {
            ai = new AuctionItem(false);

            ai.setId(resultSet.getLong(alias + ".id"));
            ai.setType(resultSet.getInt(alias + ".type"));
            ai.setCharID(resultSet.getInt(alias + ".charid"));
            ai.setAccountID(resultSet.getInt(alias + ".accountid"));
            ai.setState(AuctionState.values()[resultSet.getInt(alias + ".state")]);
            ai.setItemType(resultSet.getInt(alias + ".itemType"));
            ai.setCharName(resultSet.getString(alias + ".charName"));
            ai.setPrice(resultSet.getInt(alias + ".price"));
            ai.setSecondPrice(resultSet.getLong(alias + ".secondprice"));
            ai.setDirectPrice(resultSet.getLong(alias + ".directprice"));
            ai.setEndDate(FileTimeConverter.fromDbColumn(resultSet.getTimestamp(alias + ".endDate")));
            ai.setBidUserID(resultSet.getInt(alias + ".biduserid"));
            ai.setBidUsername(resultSet.getString(alias + ".bidusername"));
            ai.setIdk(resultSet.getInt(alias + ".idk"));
            ai.setBidWorld(resultSet.getInt(alias + ".bidworld"));
            ai.setOid(resultSet.getInt(alias + ".oid"));
            ai.setRegDate(FileTimeConverter.fromDbColumn(resultSet.getTimestamp(alias + ".regdate")));
            ai.setDeposit(resultSet.getInt(alias + ".deposit"));
            ai.setSsType(resultSet.getInt(alias + ".sstype"));
            ai.setIdk2(resultSet.getInt(alias + ".idk2"));
            ai.setIdk3(resultSet.getInt(alias + ".idk3"));
            ai.setUnkDate(FileTimeConverter.fromDbColumn(resultSet.getTimestamp(alias + ".unkdate")));
            ai.setItemName(resultSet.getString(alias + ".itemname"));
            ai.setSoldQuantity(resultSet.getInt(alias + ".soldquantity"));

            ai.setItem(itemDao.fromResultSet(resultSet, "i"));

            ai.setLastSavedHash();
        } catch (SQLException e) {
            e.printStackTrace();
        }

        return ai;
    }

    public List<AuctionItem> list() {
        var twoWeeksAgo = Timestamp.valueOf(FileTime.currentTime().toLocalDateTime().minusWeeks(2));
        var objs = DatabaseManager.executeSelect(this,
                "SELECT * " +
                        "FROM auction_items ai " +
                        "INNER JOIN items i ON i.id = ai.item " +
                        "WHERE ai.enddate > ?",
                "ai", twoWeeksAgo.toString());
        List<AuctionItem> auctionItems = new ArrayList<>();
        for (var obj : objs) {
            if (obj != null) {
                auctionItems.add((AuctionItem) obj);
            }
        }
        return auctionItems;
    }

    public static void main(String[] args) {
        var twoWeeksAgo = Timestamp.valueOf(FileTime.currentTime().toLocalDateTime().minusWeeks(2));
        System.out.println(twoWeeksAgo);

    }

}
