package net.swordie.orm.dao;

import net.swordie.ms.client.Account;
import net.swordie.ms.client.character.damage.DamageSkinSaveData;
import net.swordie.ms.connection.db.DatabaseManager;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.HashSet;
import java.util.Set;

public class DamageSkinSaveDataDao implements SworDao<DamageSkinSaveData> {

    private static final Logger log = LogManager.getLogger();

    public void saveOrUpdate(Account account, DamageSkinSaveData damageSkinSavedata) {
        if (damageSkinSavedata == null) {
            return;
        }
        boolean needsId = damageSkinSavedata.getId() == 0;

        String query;
        if (needsId) {
            query = "INSERT INTO damageskinsavedatas(" +
                    "damageSkinID, " +
                    "itemID, " +
                    "notSave, " +
                    "description, " +
                    "accid, " +
                    "id " +
                    ") VALUES (?, ?, ?, ?, ?, ?)";
        } else {
            query = "UPDATE damageskinsavedatas SET " +
                    "damageSkinID = ?," +
                    "itemID = ?," +
                    "notSave = ?," +
                    "description = ?," +
                    "accid = ?" +
                    " WHERE ID = ?";
        }
        long id = DatabaseManager.executeQuery(query,
                damageSkinSavedata.getDamageSkinID(),
                damageSkinSavedata.getItemID(),
                damageSkinSavedata.isNotSave(),
                damageSkinSavedata.getDescription(),
                account.getId(),
                damageSkinSavedata.getId()
        );
        if (needsId) {
            damageSkinSavedata.setId(id);
        }
    }

    public void delete(DamageSkinSaveData damageSkinSavedata) {
        if (damageSkinSavedata == null || damageSkinSavedata.getId() == 0) {
            log.debug("Trying to delete object " + damageSkinSavedata + " that is null or has id 0");
            return;
        }
        DatabaseManager.executeQuery("DELETE FROM damageskinsavedatas WHERE ID = ?", damageSkinSavedata.getId());
    }


    @Override
    public DamageSkinSaveData fromResultSet(ResultSet resultSet, String alias) {
        DamageSkinSaveData dssd = null;

        try {
            dssd = new DamageSkinSaveData(false);
            dssd.setId(resultSet.getLong(alias + ".id"));
            dssd.setDamageSkinID(resultSet.getInt(alias + ".damageskinid"));
            dssd.setItemID(resultSet.getInt(alias + ".itemid"));
            dssd.setNotSave(resultSet.getBoolean(alias + ".notsave"));
            dssd.setDescription(resultSet.getString(alias + ".description"));
        } catch (SQLException e) {
            e.printStackTrace();
        }

        return dssd;
    }

    public Set<DamageSkinSaveData> byAccount(Account account) {
        var objs = DatabaseManager.executeSelect(this, "SELECT * FROM damageskinsavedatas dssd WHERE accid = ?", "dssd", account.getId());
        Set<DamageSkinSaveData> saveDatas = new HashSet<>();
        for (var obj : objs) {
            if (obj != null) {
                saveDatas.add((DamageSkinSaveData) obj);
            }
        }
        return saveDatas;
    }

    public void saveOrUpdate(Account account, Set<DamageSkinSaveData> damageSkinSaveData) {
        if (account == null) {
            return;
        }
        for (var acc : new HashSet<>(damageSkinSaveData)) {
            saveOrUpdate(account, acc);
        }
    }
}
