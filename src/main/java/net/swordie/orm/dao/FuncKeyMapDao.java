package net.swordie.orm.dao;

import net.swordie.ms.client.character.Char;
import net.swordie.ms.client.character.keys.FuncKeyMap;
import net.swordie.ms.client.character.keys.Keymapping;
import net.swordie.ms.connection.db.DatabaseManager;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;

public class FuncKeyMapDao implements SworDao<FuncKeyMap> {

    private static final Logger log = LogManager.getLogger();

    private static final KeymappingDao keymappingDao = (KeymappingDao) SworDaoFactory.getByClass(Keymapping.class);

    public void saveOrUpdate(Char chr, FuncKeyMap funcKeyMap) {
        if (funcKeyMap == null) {
            return;
        }
        boolean needsId = funcKeyMap.getId() == 0;

        String query;
        if (needsId) {
            query = "INSERT INTO funckeymap(" +
                    "charid, " +
                    "id " +
                    ") VALUES (?, ?)";
        } else {
            query = null;
        }
        long id = DatabaseManager.executeQuery(query,
                chr.getId(),
                funcKeyMap.getId()
        );
        if (needsId) {
            funcKeyMap.setId((int) id);
        }

        keymappingDao.saveOrUpdate(funcKeyMap, funcKeyMap.getKeymap());
    }

    public void delete(FuncKeyMap funcKeyMap) {
        if (funcKeyMap == null || funcKeyMap.getId() == 0) {
            log.debug("Trying to delete object " + funcKeyMap + " that is null or has id 0");
            return;
        }
        DatabaseManager.executeQuery("DELETE FROM funckeymap WHERE ID = ?", funcKeyMap.getId());
    }

    public List<FuncKeyMap> byChar(Char chr) {
        var objs = DatabaseManager.executeSelect(this, "SELECT * " +
                        "FROM funckeymap fkm " +
                        "WHERE charid = ? " +
                        "ORDER BY id",
                "fkm",
                chr.getId());
        List<FuncKeyMap> keymaps = new ArrayList<>();
        for (var obj : objs) {
            if (obj != null) {
                keymaps.add((FuncKeyMap) obj);
            }
        }
        return keymaps;
    }


    @Override
    public FuncKeyMap fromResultSet(ResultSet resultSet, String alias) {
        FuncKeyMap fkm = null;

        try {
            fkm = new FuncKeyMap(false);
            fkm.setId(resultSet.getInt(alias + ".id"));
        } catch (SQLException e) {
            e.printStackTrace();
        }

        return fkm;
    }

    public void saveOrUpdate(Char chr, List<FuncKeyMap> btFuncKeyMap) {
        for (var km : new HashSet<>(btFuncKeyMap)) {
            saveOrUpdate(chr, km);
        }
    }
}
