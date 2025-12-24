package net.swordie.orm.dao;

import net.swordie.ms.connection.db.DatabaseManager;
import net.swordie.ms.life.drop.DropInfo;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.HashSet;
import java.util.Set;

public class DropInfoDao implements SworDao<DropInfo> {

    private static final Logger log = LogManager.getLogger();

    public void saveOrUpdate(DropInfo dropInfo) {
        if (dropInfo == null) {
            return;
        }
        boolean needsId = dropInfo.getId() == 0;

        String query;
        if (needsId) {
            query = "INSERT INTO mob_drops(" +
                    "itemID, " +
                    "chance, " +
                    "minQuant, " +
                    "maxQuant, " +
                    "id " +
                    ") VALUES (?, ?, ?, ?, ?)";
        } else {
            query = "UPDATE mob_drops SET " +
                    "itemID = ?," +
                    "chance = ?," +
                    "minQuant = ?," +
                    "maxQuant = ?" +
                    " WHERE ID = ?";
        }
        long id = DatabaseManager.executeQuery(query,
                dropInfo.getItemID(),
                dropInfo.getChance(),
                dropInfo.getMinQuant(),
                dropInfo.getMaxQuant(),
                dropInfo.getId()
        );
        if (needsId) {
            dropInfo.setId(id);
        }
    }

    public void delete(DropInfo dropInfo) {
        if (dropInfo == null || dropInfo.getId() == 0) {
            log.debug("Trying to delete object " + dropInfo + " that is null or has id 0");
            return;
        }
        DatabaseManager.executeQuery("DELETE FROM mob_drops WHERE ID = ?", dropInfo.getId());
    }


    @Override
    public DropInfo fromResultSet(ResultSet resultSet, String alias) {
        DropInfo di = null;

        try {
            di = new DropInfo();
            di.setId(resultSet.getLong(alias + ".id"));
            di.setItemID(resultSet.getInt(alias + ".itemid"));
            di.setChance(resultSet.getInt(alias + ".chance"));
            di.setMinQuant(resultSet.getInt(alias + ".minquant"));
            di.setMaxQuant(resultSet.getInt(alias + ".maxquant"));
        } catch (SQLException e) {
            e.printStackTrace();
        }

        return di;
    }

    public Set<DropInfo> byMobId(int mobId) {
        var objs = DatabaseManager.executeSelect(this, "SELECT * FROM mob_drops md WHERE mobid = ?", "md", mobId);

        Set<DropInfo> ret = new HashSet<>();
        for (var obj : objs) {
            if (obj != null) {
                ret.add((DropInfo) obj);
            }
        }

        return ret;
    }
}
