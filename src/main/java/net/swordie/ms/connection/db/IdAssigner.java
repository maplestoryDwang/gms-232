package net.swordie.ms.connection.db;

import net.swordie.ms.client.character.items.Item;
import net.swordie.ms.client.character.skills.vmatrix.MatrixRecord;
import net.swordie.ms.life.Familiar;
import net.swordie.ms.world.auction.AuctionItem;
import net.swordie.ms.world.shop.cashshop.CashItemInfo;
import net.swordie.orm.dao.*;

import java.sql.ResultSet;
import java.sql.SQLException;

public class IdAssigner<T extends Saveable> implements SworDao<Long> {

    private long id;

    private long getCurrentHighestId(Class clazz) {
        String tableName;
        if (clazz == Item.class) {
            tableName = ItemDao.TABLE;
        } else if (clazz == CashItemInfo.class) {
            tableName = CashItemInfoDao.TABLE;
        } else if (clazz == AuctionItem.class) {
            tableName = AuctionItemDao.TABLE;
        } else if (clazz == MatrixRecord.class) {
            tableName = MatrixRecordDao.TABLE;
        } else if (clazz == Familiar.class) {
            tableName = FamiliarDao.TABLE_F;
        } else {
            throw new UnsupportedOperationException("Unhandled self-managed id class " + clazz);
        }

        var list = DatabaseManager.executeSelect(this, String.format("SELECT * FROM %s a ORDER BY id DESC LIMIT 1", tableName), "a");

        return list.size() > 0 ? (long) list.get(0) : -1;
    }

    public IdAssigner(Class clazz) {
        id = 1 + getCurrentHighestId(clazz);
    }

    public synchronized void assignId(T obj) {
        obj.setId(id++);
    }

    @Override
    public Long fromResultSet(ResultSet resultSet, String alias) {
        try {
            return resultSet.getLong("id");
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return -1L;
    }
}
