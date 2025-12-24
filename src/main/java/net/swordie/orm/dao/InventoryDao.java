package net.swordie.orm.dao;

import net.swordie.ms.client.character.items.Inventory;
import net.swordie.ms.client.character.items.Item;
import net.swordie.ms.connection.db.DatabaseManager;
import net.swordie.ms.enums.InvType;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import java.sql.ResultSet;
import java.sql.SQLException;

public class InventoryDao implements SworDao<Inventory> {

    private static final Logger log = LogManager.getLogger();

    private static final ItemDao itemDao = (ItemDao) SworDaoFactory.getByClass(Item.class);

    public void saveOrUpdate(Inventory inventory) {
        if (inventory == null) {
            return;
        }

        boolean needsId = inventory.getId() == 0;

        String query;
        if (needsId) {
            query = "INSERT INTO inventories(" +
                    "type, " +
                    "slots, " +
                    "id " +
                    ") VALUES (?, ?, ?)";
        } else {
            query = "UPDATE inventories SET " +
                    "type = ?," +
                    "slots = ?" +
                    " WHERE ID = ?";
        }
        long id = DatabaseManager.executeQuery(query,
                inventory.getType().ordinal(),
                inventory.getSlots(),
                inventory.getId()
        );
        if (needsId) {
            inventory.setId((int) id);
        }

        // 1 to many
        itemDao.saveOrUpdate(inventory.getItems());
    }

    public void delete(Inventory inventory) {
        if (inventory == null || inventory.getId() == 0) {
            log.debug("Trying to delete object " + inventory + " that is null or has id 0");
            return;
        }
        DatabaseManager.executeQuery("DELETE FROM inventories WHERE ID = ?", inventory.getId());
    }


    @Override
    public Inventory fromResultSet(ResultSet resultSet, String alias) {
        Inventory inv = null;

        try {
            inv = new Inventory();
            inv.setId(resultSet.getInt(alias + ".id"));
            inv.setSlots(resultSet.getInt(alias + ".slots"));
            inv.setType(InvType.values()[resultSet.getInt(alias + ".type")]);
        } catch (SQLException e) {
            e.printStackTrace();
        }

        return inv;
    }
}
