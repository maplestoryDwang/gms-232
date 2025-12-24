package net.swordie.orm.dao;

import net.swordie.ms.client.character.keys.FuncKeyMap;
import net.swordie.ms.client.character.keys.Keymapping;
import net.swordie.ms.connection.db.BatchQueryHolder;
import net.swordie.ms.connection.db.DatabaseManager;
import net.swordie.ms.connection.db.QueryHolder;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;

public class KeymappingDao implements SworDao<Keymapping> {

    private static final Logger log = LogManager.getLogger();

    public QueryHolder createQueryHolder(FuncKeyMap fkm, Keymapping keymapping) {
        if (keymapping.isClean()) {
            return QueryHolder.clean();
        }
        boolean needsId = keymapping.getId() == 0;
        var queryHolder = new QueryHolder<>(keymapping, needsId);

        String query;
        if (needsId) {
            query = "INSERT INTO keymaps(" +
                    "idx, " +
                    "type, " +
                    "val, " +
                    "fkMapId, " +
                    "id " +
                    ") VALUES (?, ?, ?, ?, ?)";
        } else {
            query = "UPDATE keymaps SET " +
                    "idx = ?," +
                    "type = ?," +
                    "val = ?," +
                    "fkMapId = ?" +
                    " WHERE id = ?";
        }

        queryHolder.setQuery(query);
        queryHolder.setArgs(
                keymapping.getIndex(),
                keymapping.getType(),
                keymapping.getVal(),
                fkm.getId(),
                keymapping.getId()
        );

        return queryHolder;
    }

    public void delete(Keymapping keymapping) {
        if (keymapping == null || keymapping.getId() == 0) {
            log.debug("Trying to delete object " + keymapping + " that is null or has id 0");
            return;
        }
        DatabaseManager.executeQuery("DELETE FROM keymaps WHERE ID = ?", keymapping.getId());
    }


    @Override
    public Keymapping fromResultSet(ResultSet resultSet, String alias) {
        Keymapping km = null;

        try {
            km = new Keymapping();
            km.setId(resultSet.getInt(alias + ".id"));
            km.setIndex(resultSet.getInt(alias + ".idx"));
            km.setType(resultSet.getByte(alias + ".type"));
            km.setVal(resultSet.getInt(alias + ".val"));
            km.setLastSavedHash();
        } catch (SQLException e) {
            e.printStackTrace();
        }

        return km;
    }

    public List<Keymapping> byFuncKeyMap(FuncKeyMap funcKeyMap) {
        var objs = DatabaseManager.executeSelect(this, "SELECT * FROM keymaps km WHERE fkmapid = ?", "km", funcKeyMap.getId());
        List<Keymapping> saveDatas = new ArrayList<>();
        for (var obj : objs) {
            if (obj != null) {
                saveDatas.add((Keymapping) obj);
            }
        }
        return saveDatas;
    }

    public synchronized void saveOrUpdate(FuncKeyMap funcKeyMap, List<Keymapping> keymap) {
        var batch = new BatchQueryHolder<>();
        for (var km : new HashSet<>(keymap)) {
            batch.addQueryInfo(createQueryHolder(funcKeyMap, km));
        }
        DatabaseManager.executeBatchQuery(batch);
    }
}
