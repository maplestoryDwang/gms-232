package net.swordie.orm.dao;

import net.swordie.ms.client.character.Char;
import net.swordie.ms.client.character.commerce.vessel.Vessel;
import net.swordie.ms.client.character.commerce.vessel.VesselType;
import net.swordie.ms.connection.db.DatabaseManager;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

/**
 * Created on 20/05/2021.
 *
 * @author Asura
 */
public class VesselDao implements SworDao<Vessel> {

    private static final Logger log = LogManager.getLogger();

    public void saveOrUpdate(Char chr, Vessel vessel) {
        if (vessel == null || chr == null) {
            return;
        }
        boolean needsId = vessel.getId() == 0;

        String query;
        if (needsId) {
            query = "INSERT INTO vessel(" +
                    "charid, " +
                    "type, " +
                    "level, " +
                    "exp, " +
                    "energy, " +
                    "id " +
                    ") VALUES (?, ?, ?, ?, ?, ?);";
        } else {
            query = "UPDATE vessel SET " +
                    "charid = ?, " +
                    "type = ?, " +
                    "level = ?, " +
                    "exp = ?, " +
                    "energy = ? " +
                    "WHERE id = ?;";
        }

        long id = DatabaseManager.executeQuery(query,
                chr.getId(),
                vessel.getVesselType().getVal(),
                vessel.getLevel(),
                vessel.getExp(),
                vessel.getEnergy(),
                vessel.getId()
        );
        if (needsId) {
            vessel.setId((int) id);
        }
    }

    public void delete(Vessel vessel) {
        if (vessel == null || vessel.getId() == 0) {
            log.debug("Trying to delete object " + vessel + " that is null or has id 0");
            return;
        }
        DatabaseManager.executeQuery("DELETE FROM vessel WHERE id = ?", vessel.getId());
    }

    public Vessel byChar(Char chr) {
        var objs = DatabaseManager.executeSelect(this, "SELECT * FROM vessel v WHERE charid = ?;", "v", chr.getId());

        List<Vessel> ret = new ArrayList<>();
        for (var obj : objs) {
            if (obj != null) {
                ret.add((Vessel) obj);
            }
        }

        if (ret.size() > 0) {
            return ret.get(0);
        }

        return new Vessel();
    }

    @Override
    public Vessel fromResultSet(ResultSet resultSet, String alias) {
        Vessel vessel = null;

        try {
            vessel = new Vessel();
            vessel.setId(resultSet.getInt(alias + ".id"));
            var vesselType = VesselType.getByVal(resultSet.getInt(alias + ".type"));
            vessel.setVesselType(vesselType == null ? VesselType.CargoSkiff : vesselType);
            vessel.setLevel(resultSet.getInt(alias + ".level"));
            vessel.setExp(resultSet.getInt(alias + ".exp"));
            vessel.setEnergy(resultSet.getInt(alias + ".energy"));

        } catch (SQLException e) {
            e.printStackTrace();
        }

        return vessel;
    }
}
