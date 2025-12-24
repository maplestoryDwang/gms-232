package net.swordie.orm.dao;

import net.swordie.ms.connection.db.DatabaseManager;
import net.swordie.ms.enums.ItemJob;
import net.swordie.ms.loaders.containerclasses.EquipDrop;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class EquipDropDao implements SworDao<EquipDrop> {

    private static final Logger log = LogManager.getLogger();

    public void saveOrUpdate(EquipDrop equipDrop) {
        if (equipDrop == null) {
            return;
        }
        boolean needsId = equipDrop.getId() == 0;

        String query;
        if (needsId) {
            query = "INSERT INTO equip_drops(" +
                    "job, " +
                    "level, " +
                    "id " +
                    ") VALUES (?, ?, ?)";
        }
        else {
            query = "UPDATE equip_drops SET " +
                    "job = ?," +
                    "level = ?" +
                    " WHERE ID = ?";
        }
        long id = DatabaseManager.executeQuery(query,
                equipDrop.getJob().toString(),
                equipDrop.getLevel(),
                equipDrop.getId()
        );
        if (needsId) {
            equipDrop.setId((int) id);
        }
    }

    public void delete(EquipDrop equipDrop) {
        if (equipDrop == null || equipDrop.getId() == 0) {
            log.debug("Trying to delete object " + equipDrop + " that is null or has id 0");
            return;
        }
        DatabaseManager.executeQuery("DELETE FROM equip_drops WHERE ID = ?", equipDrop.getId());
    }



    @Override
    public EquipDrop fromResultSet(ResultSet resultSet, String alias) {
        EquipDrop ee = null;

        try {
            ee = new EquipDrop();
            ee.setId(resultSet.getInt(alias + ".id"));
            ee.setJob(ItemJob.valueOf(resultSet.getString(alias + ".job")));
            ee.setLevel(resultSet.getInt(alias + ".level"));
        } catch (SQLException e) {
            e.printStackTrace();
        }

        return ee;
    }

    public List<EquipDrop> list() {
        var objs = DatabaseManager.executeSelect(this, "SELECT * FROM equip_drops ed", "ed");
        List<EquipDrop> users = new ArrayList<>();
        for (var obj : objs) {
            if (obj != null) {
                users.add((EquipDrop) obj);
            }
        }
        return users;
    }
}
