package net.swordie.orm.dao;

import net.swordie.ms.client.character.items.Item;
import net.swordie.ms.client.trunk.Trunk;
import net.swordie.ms.connection.db.DatabaseManager;
import net.swordie.ms.world.shop.cashshop.CashItemInfo;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class CashItemInfoDao implements SworDao<CashItemInfo> {

    private static final Logger log = LogManager.getLogger();

    public static final String TABLE = "cashiteminfos";
    private static final ItemDao itemDao = (ItemDao) SworDaoFactory.getByClass(Item.class);

    public synchronized void saveOrUpdate(Trunk trunk, CashItemInfo cashItemInfo) {
        if (cashItemInfo == null || cashItemInfo.isClean()) {
            return;
        }
        boolean needsId = cashItemInfo.isInit();

        itemDao.saveOrUpdate(cashItemInfo.getItem());

        String query;
        if (needsId) {
            query = "INSERT INTO cashiteminfos(" +
                    "accountID, " +
                    "characterID, " +
                    "commodityID, " +
                    "buyCharacterID, " +
                    "paybackRate, " +
                    "discount, " +
                    "orderNo, " +
                    "productNo, " +
                    "refundable, " +
                    "sourceFlag, " +
                    "storeBank, " +
                    "position, " +
                    "itemid, " +
                    "trunkid, " +
                    "id " +
                    ") VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
        } else {
            query = "UPDATE cashiteminfos SET " +
                    "accountID = ?," +
                    "characterID = ?," +
                    "commodityID = ?," +
                    "buyCharacterID = ?," +
                    "paybackRate = ?," +
                    "discount = ?," +
                    "orderNo = ?," +
                    "productNo = ?," +
                    "refundable = ?," +
                    "sourceFlag = ?," +
                    "storeBank = ?," +
                    "position = ?," +
                    "itemid = ?," +
                    "trunkid = ?" +
                    " WHERE ID = ?";
        }
        DatabaseManager.executeQuery(query,
                cashItemInfo.getAccountID(),
                cashItemInfo.getCharacterID(),
                cashItemInfo.getCommodityID(),
                cashItemInfo.getBuyCharacterID(),
                cashItemInfo.getPaybackRate(),
                cashItemInfo.getDiscount(),
                cashItemInfo.getOrderNo(),
                cashItemInfo.getProductNo(),
                cashItemInfo.isRefundable(),
                cashItemInfo.getSourceFlag(),
                cashItemInfo.isStoreBank(),
                cashItemInfo.getPosition(),
                cashItemInfo.getItem() == null ? null : cashItemInfo.getItem().getId(),
                trunk.getId(),
                cashItemInfo.getId()
        );
        if (needsId) {
            cashItemInfo.setInit(false);
        }
        cashItemInfo.setLastSavedHash();
    }

    public void delete(CashItemInfo cashItemInfo) {
        if (cashItemInfo == null || cashItemInfo.getId() == 0) {
            log.debug("Trying to delete object " + cashItemInfo + " that is null or has id 0");
            return;
        }
        DatabaseManager.executeQuery("DELETE FROM cashiteminfos WHERE ID = ?", cashItemInfo.getId());
    }

    @Override
    public CashItemInfo fromResultSet(ResultSet resultSet, String alias) {
        CashItemInfo cii = null;

        try {
            cii = new CashItemInfo(false);
            cii.setId(resultSet.getLong(alias + ".id"));
            cii.setAccountID(resultSet.getInt(alias + ".accountid"));
            cii.setCharacterID(resultSet.getInt(alias + ".characterid"));
            cii.setCommodityID(resultSet.getInt(alias + ".commodityid"));
            cii.setBuyCharacterID(resultSet.getString(alias + ".buycharacterid"));
            cii.setPaybackRate(resultSet.getInt(alias + ".paybackrate"));
            cii.setDiscount(resultSet.getInt(alias + ".discount"));
            cii.setOrderNo(resultSet.getInt(alias + ".orderno"));
            cii.setProductNo(resultSet.getInt(alias + ".productno"));
            cii.setRefundable(resultSet.getBoolean(alias + ".refundable"));
            cii.setSourceFlag(resultSet.getByte(alias + ".sourceflag"));
            cii.setStoreBank(resultSet.getBoolean(alias + ".storebank"));
            cii.setPosition(resultSet.getInt(alias + ".position"));

            cii.setItem(itemDao.fromResultSet(resultSet, "i"));
            cii.setLastSavedHash();
        } catch (SQLException e) {
            e.printStackTrace();
        }

        return cii;
    }

    public List<CashItemInfo> byTrunk(Trunk trunk) {
        var objs = DatabaseManager.executeSelect(this,
                "SELECT * FROM cashiteminfos cii " +
                        "INNER JOIN items i ON i.id = cii.itemid " +
                        "WHERE cii.trunkid = ? ",
                "cii", trunk.getId());
        List<CashItemInfo> saveDatas = new ArrayList<>();
        for (var obj : objs) {
            if (obj != null) {
                saveDatas.add((CashItemInfo) obj);
            }
        }
        return saveDatas;
    }

    public void saveOrUpdate(Trunk trunk, List<CashItemInfo> locker) {
        if (trunk == null) {
            return;
        }
        for (var cii : locker) {
            saveOrUpdate(trunk, cii);
        }
    }
}
