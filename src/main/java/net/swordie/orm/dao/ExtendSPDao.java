package net.swordie.orm.dao;

import net.swordie.ms.client.character.ExtendSP;
import net.swordie.ms.client.character.SPSet;
import net.swordie.ms.connection.db.DatabaseManager;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import java.sql.ResultSet;
import java.sql.SQLException;

public class ExtendSPDao implements SworDao<ExtendSP> {

    private static final Logger log = LogManager.getLogger();

    private static final SPSetDao spSetDao = (SPSetDao) SworDaoFactory.getByClass(SPSet.class);

    public void saveOrUpdate(ExtendSP extendSP) {
        if (extendSP == null) {
            return;
        }
        boolean needsId = extendSP.getId() == 0;

        String query;
        if (needsId) {
            query = "INSERT INTO extendsp(" +
                    "id " +
                    ") VALUES (?)";
        } else {
            query = null;
        }
        long id = DatabaseManager.executeQuery(query,
                extendSP.getId()
        );
        if (needsId) {
            extendSP.setId((int) id);
        }

        spSetDao.saveOrUpdate(extendSP, extendSP.getSpSet());
    }

    public void delete(ExtendSP extendSP) {
        if (extendSP == null || extendSP.getId() == 0) {
            log.debug("Trying to delete object " + extendSP + " that is null or has id 0");
            return;
        }
        DatabaseManager.executeQuery("DELETE FROM extendsp WHERE ID = ?", extendSP.getId());
    }


    @Override
    public ExtendSP fromResultSet(ResultSet resultSet, String alias) {
        ExtendSP esp = null;

        try {
            esp = new ExtendSP();
            esp.setId(resultSet.getInt(alias + ".id"));
        } catch (SQLException e) {
            e.printStackTrace();
        }

        return esp;
    }
}
