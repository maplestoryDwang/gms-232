package net.swordie.orm.dao;

import net.swordie.ms.client.character.items.Item;
import net.swordie.ms.client.trunk.Trunk;
import net.swordie.ms.connection.db.DatabaseManager;
import net.swordie.ms.world.shop.cashshop.CashItemInfo;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import java.sql.ResultSet;
import java.sql.SQLException;

public class TrunkDao implements SworDao<Trunk> {

    private static final Logger log = LogManager.getLogger();

    private static final ItemDao itemDao = (ItemDao) SworDaoFactory.getByClass(Item.class);
    private static final CashItemInfoDao cashItemInfoDao = (CashItemInfoDao) SworDaoFactory.getByClass(CashItemInfo.class);

    public void saveOrUpdate(Trunk trunk) {
        if (trunk == null) {
            return;
        }
        boolean needsId = trunk.getId() == 0;

        String query;
        if (needsId) {
            query = "INSERT INTO trunks(" +
                    "money, " +
                    "slotCount, " +
                    "id " +
                    ") VALUES (?, ?, ?)";
        } else {
            query = "UPDATE trunks SET " +
                    "money = ?," +
                    "slotCount = ?" +
                    " WHERE ID = ?";
        }
        long id = DatabaseManager.executeQuery(query,
                trunk.getMoney(),
                trunk.getSlotCount(),
                trunk.getId()
        );
        if (needsId) {
            trunk.setId((int) id);
        }

        itemDao.saveOrUpdate(trunk.getItems());
        cashItemInfoDao.saveOrUpdate(trunk, trunk.getLocker());
    }

    public void delete(Trunk trunk) {
        if (trunk == null || trunk.getId() == 0) {
            log.debug("Trying to delete object " + trunk + " that is null or has id 0");
            return;
        }
        DatabaseManager.executeQuery("DELETE FROM trunks WHERE ID = ?", trunk.getId());
    }

    @Override
    public Trunk fromResultSet(ResultSet resultSet, String alias) {
        Trunk trunk = null;

        try {
            trunk = new Trunk();
            trunk.setId(resultSet.getInt(alias + ".id"));
            trunk.setSlotCount(resultSet.getInt(alias + ".slotcount"));
            trunk.setMoney(resultSet.getLong(alias + ".money"));
        } catch (SQLException e) {
            e.printStackTrace();
        }

        return trunk;
    }
}
