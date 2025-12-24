package net.swordie.orm.dao;

import net.swordie.ms.connection.db.BatchQueryHolder;
import net.swordie.ms.connection.db.DatabaseManager;
import net.swordie.ms.connection.db.QueryHolder;
import net.swordie.ms.connection.db.converters.FileTimeConverter;
import net.swordie.ms.logging.TradeTransaction;
import net.swordie.ms.util.FileTime;
import net.swordie.ms.world.auction.AuctionItem;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.UUID;

public class TradeTransactionDao implements SworDao<TradeTransaction> {

    @Override
    public TradeTransaction fromResultSet(ResultSet resultSet, String alias) {
        TradeTransaction tt = null;

        try {
            tt = new TradeTransaction();
            tt.setId(resultSet.getInt("id"));
            tt.setUuid(UUID.fromString(resultSet.getString("uuid")));
            tt.setFileTime(FileTimeConverter.fromDbColumn(resultSet.getTimestamp("fileTime")));
            tt.setCharacterIdFrom(resultSet.getInt("characterIdFrom"));
            tt.setCharacterIdTo(resultSet.getInt("characterIdTo"));
            tt.setCharacterNameFrom(resultSet.getString("characterNameFrom"));
            tt.setCharacterNameTo(resultSet.getString("characterNameTo"));
            tt.setUserIdFrom(resultSet.getInt("userIdFrom"));
            tt.setUserIdTo(resultSet.getInt("userIdTo"));
            tt.setItemId(resultSet.getLong("itemId"));
            tt.setTemplateItemId(resultSet.getInt("templateItemId"));
            tt.setDescription(resultSet.getString("description"));
            tt.setMoney(resultSet.getLong("money"));
            tt.setTradeTransactionType(TradeTransaction.TradeTransactionType.valueOf(resultSet.getString("tradeTransactionType")));
            tt.setMapId(resultSet.getByte("mapId"));
        } catch (SQLException e) {
            e.printStackTrace();
        }

        return tt;
    }

    public QueryHolder createQueryHolder(TradeTransaction tradeTransaction) {
        var queryHolder = new QueryHolder<>(tradeTransaction, true); // Always insert

        var query = "INSERT INTO trade_transaction (" +
                "uuid, " +
                "fileTime, " +
                "characterIdFrom, " +
                "characterIdTo, " +
                "characterNameFrom, " +
                "characterNameTo, " +
                "userIdFrom, " +
                "userIdTo, " +
                "itemId, " +
                "templateItemId, " +
                "description, " +
                "money, " +
                "tradeTransactionType, " +
                "mapId "+
                ") VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

        queryHolder.setQuery(query);
        queryHolder.setArgs(
                tradeTransaction.getUuid().toString(),
                FileTimeConverter.toDbColumn(tradeTransaction.getFileTime()),
                tradeTransaction.getCharacterIdFrom(),
                tradeTransaction.getCharacterIdTo(),
                tradeTransaction.getCharacterNameFrom(),
                tradeTransaction.getCharacterNameTo(),
                tradeTransaction.getUserIdFrom(),
                tradeTransaction.getUserIdTo(),
                tradeTransaction.getItemId(),
                tradeTransaction.getTemplateItemId(),
                tradeTransaction.getDescription(),
                tradeTransaction.getMoney(),
                tradeTransaction.getTradeTransactionType().toString(),
                tradeTransaction.getMapId()
        );

        return queryHolder;
    }

    public void saveOrUpdate(List<TradeTransaction> tradeTransactions) {
        var batch = new BatchQueryHolder<>();
        for (var transaction : new HashSet<>(tradeTransactions)) {
            batch.addQueryInfo(createQueryHolder(transaction));
        }
        DatabaseManager.executeBatchQuery(batch);
    }

    public List<TradeTransaction> getByUsername(String username) {
        var objs = DatabaseManager.executeSelect(this,
                """
                        (select tt.*, om.* from users u
                        inner join accounts a on a.userid = u.id
                        inner join characters c on c.accid = a.id
                        inner join characterstats cs on cs.characterid = c.id
                        inner join trade_transaction tt on c.id = tt.characterIdFrom
                        inner join offense_managers om ON om.id = u.offensemanager
                        where u.name = ?)
                        union
                        (select tt.*, om.* from users u
                        inner join accounts a on a.userid = u.id
                        inner join characters c on c.accid = a.id
                        inner join characterstats cs on cs.characterid = c.id
                        inner join trade_transaction tt on c.id = tt.characterIdTo
                        inner join offense_managers om ON om.id = u.offensemanager
                        where u.name = ?)
                        """,
                "tt", username, username);
        List<TradeTransaction> auctionItems = new ArrayList<>();
        for (var obj : objs) {
            if (obj != null) {
                auctionItems.add((TradeTransaction) obj);
            }
        }
        return auctionItems;
    }

    public List<TradeTransaction> getByCharname(String charName) {
        var objs = DatabaseManager.executeSelect(this,
                """                     
                        select tt.* from trade_transaction tt
                        where characterNameTo = ? or characterNameFrom = ?
                        """,
                "tt", charName, charName);
        List<TradeTransaction> auctionItems = new ArrayList<>();
        for (var obj : objs) {
            if (obj != null) {
                auctionItems.add((TradeTransaction) obj);
            }
        }
        return auctionItems;
    }

}
