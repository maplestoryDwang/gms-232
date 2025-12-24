package net.swordie.orm.dao;

import net.swordie.ms.client.character.familiar.FamiliarCodexManager;
import net.swordie.ms.connection.db.DatabaseManager;
import net.swordie.ms.connection.db.converters.InlinedIntArrayConverter;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Arrays;
import java.util.stream.Collectors;

/**
 * Created on 25/04/2020.
 *
 * @author Asura
 */
public class FamiliarCodexManagerDao implements SworDao<FamiliarCodexManager> {

    private static final Logger log = LogManager.getLogger();

    public void saveOrUpdate(FamiliarCodexManager fcm) {
        if (fcm == null) {
            return;
        }
        boolean needsId = fcm.getId() == 0;

        String query;
        if (needsId) {
            query = "INSERT INTO familiarcodexmanager(" +
                    "summongauge, " +
                    "familiarslots, " +
                    "activefamiliars, " +
                    "activebadges, " +
                    " id " +
                    ") VALUES(?, ?, ?, ?, ?)";
        } else {
            query = "UPDATE familiarcodexmanager SET " +
                    "summongauge = ?, " +
                    "familiarslots = ?, " +
                    "activefamiliars = ?, " +
                    "activebadges = ?" +
                    " WHERE ID = ?";
        }
        long id = DatabaseManager.executeQuery(query,
                fcm.getSummonGauge(),
                fcm.getFamiliarSlots(),
                InlinedIntArrayConverter.toDbColumn(Arrays.stream(fcm.getActiveFamiliars()).boxed().collect(Collectors.toList())),
                InlinedIntArrayConverter.toDbColumn(Arrays.stream(fcm.getActiveBadges()).boxed().collect(Collectors.toList())),
                fcm.getId()
        );
        if (needsId) {
            fcm.setId((int) id);
        }
    }

    public void delete(FamiliarCodexManager fcm) {
        if (fcm == null || fcm.getId() == 0) {
            log.debug("Trying to delete object " + fcm + " that is null or has id 0");
            return;
        }
        DatabaseManager.executeQuery("DELETE FROM familiarcodexmanager WHERE ID = ?", fcm.getId());
    }

    public FamiliarCodexManager getById(int id, String alias) {
        if (id == 0) {
            return null;
        }

        var objs = DatabaseManager.executeSelect(this, "SELECT * FROM familiarcodexmanager " + alias + " WHERE id = ?", alias, id);
        if (objs.size() > 0) {
            return (FamiliarCodexManager) objs.get(0);
        }
        return null;
    }

    @Override
    public FamiliarCodexManager fromResultSet(ResultSet resultSet, String alias) {
        FamiliarCodexManager fcm = null;

        try {
            fcm = new FamiliarCodexManager();
            fcm.setId(resultSet.getInt(alias + ".id"));
            fcm.setSummonGauge(resultSet.getInt(alias + ".summongauge"));
            fcm.setFamiliarSlots(resultSet.getInt(alias + ".familiarslots"));
            var af = InlinedIntArrayConverter.fromDbColumn(resultSet.getString(alias + ".activefamiliars"));
            if (af != null) {
                fcm.setActiveFamiliars(af.stream().mapToInt(f -> f).toArray());
            } else {
                fcm.setActiveFamiliars(new int[3]);
            }
            var ab = InlinedIntArrayConverter.fromDbColumn(resultSet.getString(alias + ".activebadges"));
            if (ab != null) {
                fcm.setActiveBadges(ab.stream().mapToInt(b -> b).toArray());
            } else {
                fcm.setActiveBadges(new int[] {-1, -1, -1, -1, -1, -1, -1, -1}); // 8  slots
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }

        return fcm;
    }
}
