package net.swordie.orm.dao;

import net.swordie.ms.connection.db.DatabaseManager;
import net.swordie.ms.connection.db.converters.FileTimeConverter;
import net.swordie.ms.world.shop.NpcShopItem;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class NpcShopItemDao implements SworDao<NpcShopItem> {

    private static final Logger log = LogManager.getLogger();

    public void saveOrUpdate(NpcShopItem npcShopItem) {
        if (npcShopItem == null) {
            return;
        }
        boolean needsId = npcShopItem.getId() == 0;

        String query;
        if (needsId) {
            query = "INSERT INTO shopitems(" +
                    "shopID, " +
                    "itemID, " +
                    "price, " +
                    "tokenItemID, " +
                    "tokenPrice, " +
                    "pointQuestID, " +
                    "pointPrice, " +
                    "starCoin, " +
                    "questExID, " +
                    "questExKey, " +
                    "questExValue, " +
                    "itemPeriod, " +
                    "levelLimited, " +
                    "showLevMin, " +
                    "showLevMax, " +
                    "questID, " +
                    "sellStart, " +
                    "sellEnd, " +
                    "tabIndex, " +
                    "worldBlock, " +
                    "potentialGrade, " +
                    "buyLimit, " +
                    "quantity, " +
                    "unitPrice, " +
                    "maxPerSlot, " +
                    "discountPerc, " +
                    "id " +
                    ") VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
        } else {
            query = "UPDATE shopitems SET " +
                    "shopID = ?," +
                    "itemID = ?," +
                    "price = ?," +
                    "tokenItemID = ?," +
                    "tokenPrice = ?," +
                    "pointQuestID = ?," +
                    "pointPrice = ?," +
                    "starCoin = ?," +
                    "questExID = ?," +
                    "questExKey = ?," +
                    "questExValue = ?," +
                    "itemPeriod = ?," +
                    "levelLimited = ?," +
                    "showLevMin = ?," +
                    "showLevMax = ?," +
                    "questID = ?," +
                    "sellStart = ?," +
                    "sellEnd = ?," +
                    "tabIndex = ?," +
                    "worldBlock = ?," +
                    "potentialGrade = ?," +
                    "buyLimit = ?," +
                    "quantity = ?," +
                    "unitPrice = ?," +
                    "maxPerSlot = ?," +
                    "discountPerc = ?" +
                    " WHERE ID = ?";
        }
        long id = DatabaseManager.executeQuery(query,
                npcShopItem.getShopID(),
                npcShopItem.getItemID(),
                npcShopItem.getPrice(),
                npcShopItem.getTokenItemID(),
                npcShopItem.getTokenPrice(),
                npcShopItem.getPointQuestID(),
                npcShopItem.getPointPrice(),
                npcShopItem.getStarCoin(),
                npcShopItem.getQuestExID(),
                npcShopItem.getQuestExKey(),
                npcShopItem.getQuestExValue(),
                npcShopItem.getItemPeriod(),
                npcShopItem.getLevelLimited(),
                npcShopItem.getShowLevMin(),
                npcShopItem.getShowLevMax(),
                npcShopItem.getQuestID(),
                FileTimeConverter.toDbColumn(npcShopItem.getSellStart()),
                FileTimeConverter.toDbColumn(npcShopItem.getSellEnd()),
                npcShopItem.getTabIndex(),
                npcShopItem.isWorldBlock(),
                npcShopItem.getPotentialGrade(),
                npcShopItem.getBuyLimit(),
                npcShopItem.getQuantity(),
                npcShopItem.getUnitPrice(),
                npcShopItem.getMaxPerSlot(),
                npcShopItem.getDiscountPerc(),
                npcShopItem.getId()
        );
        if (needsId) {
            npcShopItem.setId(id);
        }
    }

    public void delete(NpcShopItem npcShopItem) {
        if (npcShopItem == null || npcShopItem.getId() == 0) {
            log.debug("Trying to delete object " + npcShopItem + " that is null or has id 0");
            return;
        }
        DatabaseManager.executeQuery("DELETE FROM shopitems WHERE ID = ?", npcShopItem.getId());
    }

    @Override
    public NpcShopItem fromResultSet(ResultSet resultSet, String alias) {
        NpcShopItem nsi = null;

        try {
            nsi = new NpcShopItem();
            nsi.setId(resultSet.getLong(alias + ".id"));
            nsi.setItemID(resultSet.getInt(alias + ".itemid"));
            nsi.setPrice(resultSet.getInt(alias + ".price"));
            nsi.setTokenItemID(resultSet.getInt(alias + ".tokenitemid"));
            nsi.setTokenPrice(resultSet.getInt(alias + ".tokenprice"));
            nsi.setPointQuestID(resultSet.getInt(alias + ".pointquestid"));
            nsi.setPointPrice(resultSet.getInt(alias + ".pointprice"));
            nsi.setStarCoin(resultSet.getInt(alias + ".starcoin"));
            nsi.setQuestExID(resultSet.getInt(alias + ".questexid"));
            nsi.setQuestExKey(resultSet.getString(alias + ".questexkey"));
            nsi.setQuestExValue(resultSet.getInt(alias + ".questexvalue"));
            nsi.setItemPeriod(resultSet.getInt(alias + ".itemperiod"));
            nsi.setLevelLimited(resultSet.getInt(alias + ".levellimited"));
            nsi.setShowLevMin(resultSet.getInt(alias + ".showlevmin"));
            nsi.setShowLevMax(resultSet.getInt(alias + ".showlevmax"));
            nsi.setQuestID(resultSet.getInt(alias + ".questid"));
            nsi.setSellStart(FileTimeConverter.fromDbColumn(resultSet.getTimestamp(alias + ".sellstart")));
            nsi.setSellEnd(FileTimeConverter.fromDbColumn(resultSet.getTimestamp(alias + ".sellend")));
            nsi.setTabIndex(resultSet.getInt(alias + ".tabindex"));
            nsi.setWorldBlock(resultSet.getBoolean(alias + ".worldblock"));
            nsi.setPotentialGrade(resultSet.getInt(alias + ".potentialgrade"));
            nsi.setBuyLimit(resultSet.getInt(alias + ".buylimit"));
            nsi.setQuantity(resultSet.getShort(alias + ".quantity"));
            nsi.setUnitPrice(resultSet.getLong(alias + ".unitprice"));
            nsi.setMaxPerSlot(resultSet.getShort(alias + ".maxperslot"));
            nsi.setDiscountPerc(resultSet.getInt(alias + ".discountperc"));
        } catch (SQLException e) {
            e.printStackTrace();
        }

        return nsi;
    }

    public List<NpcShopItem> byShopId(int id) {
        var objs = DatabaseManager.executeSelect(this, "SELECT * FROM shopitems si WHERE shopid = ?", "si", id);
        List<NpcShopItem> saveDatas = new ArrayList<>();
        for (var obj : objs) {
            if (obj != null) {
                saveDatas.add((NpcShopItem) obj);
            }
        }
        return saveDatas;
    }
}
