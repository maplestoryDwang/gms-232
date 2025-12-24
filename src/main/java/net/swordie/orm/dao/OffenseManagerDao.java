package net.swordie.orm.dao;

import net.swordie.ms.client.anticheat.Offense;
import net.swordie.ms.client.anticheat.OffenseManager;
import net.swordie.ms.connection.db.DatabaseManager;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import java.sql.ResultSet;
import java.sql.SQLException;

public class OffenseManagerDao implements SworDao<OffenseManager> {

    private static final Logger log = LogManager.getLogger();

    private static final OffenseDao offenseDao = (OffenseDao) SworDaoFactory.getByClass(Offense.class);

    public void saveOrUpdate(OffenseManager offenseManager) {
        if (offenseManager == null) {
            return;
        }

        boolean needsId = offenseManager.getId() == 0;

        String query;
        if (needsId) {
            query = "INSERT INTO offense_managers(" +
                    "points, " +
                    "lieDetectorBans, " +
                    "lieDetectorFails, " +
                    "id " +
                    ") VALUES (?, ?, ?, ?)";
        } else {
            query = "UPDATE offense_managers SET " +
                    "points = ?, " +
                    "lieDetectorBans = ?, " +
                    "lieDetectorFails = ?" +
                    " WHERE ID = ?";
        }
        long id = DatabaseManager.executeQuery(query,
                offenseManager.getPoints(),
                offenseManager.getLieDetectorBans(),
                offenseManager.getLieDetectorFails(),
                offenseManager.getId()
        );
        if (needsId) {
            offenseManager.setId((int) id);
        }

        offenseDao.saveOrUpdate(offenseManager, offenseManager.getOffenses());
    }

    public void delete(OffenseManager offenseManager) {
        if (offenseManager == null || offenseManager.getId() == 0) {
            log.debug("Trying to delete object " + offenseManager + " that is null or has id 0");
            return;
        }
        DatabaseManager.executeQuery("DELETE FROM offense_managers WHERE ID = ?", offenseManager.getId());
    }


    @Override
    public OffenseManager fromResultSet(ResultSet resultSet, String alias) {
        OffenseManager om = null;

        try {
            om = new OffenseManager(false);
            om.setId(resultSet.getInt(alias + ".id"));
            om.setPoints(resultSet.getInt(alias + ".points"));
            om.setLieDetectorBans(resultSet.getInt(alias + ".lieDetectorBans"));
            om.setLieDetectorFails(resultSet.getInt(alias + ".lieDetectorFails"));
        } catch (SQLException e) {
            e.printStackTrace();
        }

        return om;
    }
}
