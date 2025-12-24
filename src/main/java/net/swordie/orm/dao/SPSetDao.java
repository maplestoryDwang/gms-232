package net.swordie.orm.dao;

import net.swordie.ms.client.character.ExtendSP;
import net.swordie.ms.client.character.SPSet;
import net.swordie.ms.connection.db.DatabaseManager;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;

public class SPSetDao implements SworDao<SPSet> {

    private static final Logger log = LogManager.getLogger();

    public SPSetDao() {
    }

    public SPSet getById(int id) {
        var objs = DatabaseManager.executeSelect(this, "SELECT * FROM spset sps WHERE id = ?", "sps", id);
        if (objs.size() > 0) {
            return (SPSet) objs.get(0);
        }
        return null;
    }

    public SPSet getByColumn(String columnName, Object value) {
        // IMPORTANT: value as argument to executeSelect
        var objs = DatabaseManager.executeSelect(this, String.format("SELECT * FROM spset sps WHERE %s = ?", columnName), "sps", value);
        if (objs.size() > 0) {
            return (SPSet) objs.get(0);
        }
        return null;
    }

    public List<SPSet> list() {
        // IMPORTANT: value as argument to executeSelect
        var objs = DatabaseManager.executeSelect(this, "SELECT * FROM spset sps", "sps");
        List<SPSet> spSets = new ArrayList<>();
        for (var obj : objs) {
            if (obj != null) {
                spSets.add((SPSet) obj);
            }
        }
        return spSets;
    }

    public void saveOrUpdate(ExtendSP extendSP, SPSet spSet) {
        if (spSet == null) {
            return;
        }
        boolean needsId = spSet.getId() == 0;

        String query;
        if (needsId) {
            // insert
            query = "INSERT INTO spset (joblevel, sp, extendSP_id, id) VALUES (?, ?, ?, ?)";
        } else {
            // update
            query = "UPDATE spset " +
                    "SET joblevel = ?," +
                    "sp = ?, " +
                    "extendSP_id = ? " +
                    "WHERE ID = ?";
        }

        long id = DatabaseManager.executeQuery(query,
                spSet.getJobLevel(),
                spSet.getSp(),
                extendSP.getId(),
                spSet.getId());

        if (needsId) {
            spSet.setId((int) id);
        }
    }

    public void delete(SPSet obj) {
        if (obj == null || obj.getId() == 0) {
            log.debug("Trying to delete object " + obj + " that is null or has id 0");
            return;
        }
        DatabaseManager.executeQuery("DELETE FROM spset WHERE id = ?", obj.getId());
    }

    @Override
    public SPSet fromResultSet(ResultSet resultSet, String alias) {
        SPSet spSet = null;

        try {
            spSet = new SPSet();
            spSet.setId(resultSet.getInt(alias + ".id"));
            spSet.setJobLevel(resultSet.getByte(alias + ".jobLevel"));
            spSet.setSp(resultSet.getInt(alias + ".sp"));
        } catch (SQLException e) {
            e.printStackTrace();
        }

        return spSet;
    }

    public List<SPSet> byExtendSP(ExtendSP extendSP) {
        var objs = DatabaseManager.executeSelect(this, "SELECT * FROM spset sps WHERE extendsp_id = ?", "sps", extendSP.getId());
        List<SPSet> ret = new ArrayList<>();
        for (var obj : objs) {
            if (obj != null) {
                ret.add((SPSet) obj);
            }
        }
        return ret;
    }

    public void saveOrUpdate(ExtendSP extendSP, List<SPSet> spSets) {
        for (var spSet : new HashSet<>(spSets)) {
            saveOrUpdate(extendSP, spSet);
        }
    }
}
