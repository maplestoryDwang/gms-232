package net.swordie.orm.dao;

import net.swordie.ms.client.character.union.UnionRaid;
import net.swordie.ms.connection.db.DatabaseManager;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * Created on 2/26/2020.
 *
 * @author Asura
 */
public class UnionRaidDao implements SworDao<UnionRaid> {

    private static final Logger log = LogManager.getLogger();

    public void saveOrUpdate(UnionRaid unionRaid) {
        if (unionRaid == null) {
            return;
        }
        boolean needsId = unionRaid.getId() == 0;

        String query;
        if (needsId) {
            query = "INSERT INTO unionraid(" +
                    "totaldamagedone, " +
                    "curboss, " +
                    "curshield, " +
                    "curhp, " +
                    "unclaimedcoins, " +
                    "lasttime, " +
                    "id " +
                    ") VALUES (?, ?, ?, ?, ?, ?, ?)";
        } else {
            query = "UPDATE unionraid SET " +
                    "totaldamagedone = ?, " +
                    "curboss = ?, " +
                    "curshield = ?, " +
                    "curhp = ?, " +
                    "unclaimedcoins = ?, " +
                    "lasttime = ?" +
                    " WHERE ID = ?";
        }
        long id = DatabaseManager.executeQuery(query,
                unionRaid.getTotalDamageDone(),
                unionRaid.getCurrentBoss(),
                unionRaid.getCurShield(),
                unionRaid.getCurHp(),
                unionRaid.getUnclaimedCoins(),
                unionRaid.getLastTime(),
                unionRaid.getId()
        );
        if (needsId) {
            unionRaid.setId((int) id);
        }
    }

    public void delete(UnionRaid unionRaid) {
        if (unionRaid == null || unionRaid.getId() == 0) {
            log.debug("Trying to delete object " + unionRaid + " that is null or has id 0");
            return;
        }
        DatabaseManager.executeQuery("DELETE FROM unionraid WHERE ID = ?", unionRaid.getId());
    }

    public UnionRaid getById(int id, String alias) {
        if (id == 0) {
            return null;
        }

        var objs = DatabaseManager.executeSelect(this, "SELECT * FROM unionraid " + alias + " WHERE ID = ?", alias, id);
        if (objs.size() > 0) {
            return (UnionRaid) objs.get(0);
        }
        return null;
    }

    @Override
    public UnionRaid fromResultSet(ResultSet resultSet, String alias) {
        UnionRaid unionRaid = null;
        try {
            unionRaid = new UnionRaid();
            unionRaid.setId(resultSet.getInt(alias + ".id"));
            unionRaid.setTotalDamageDone(resultSet.getLong(alias + ".totaldamagedone"));
            unionRaid.setCurrentBoss(resultSet.getInt(alias + ".curboss"));
            unionRaid.setCurShield(resultSet.getLong(alias + ".curshield"));
            unionRaid.setCurHp(resultSet.getLong(alias + ".curhp"));
            unionRaid.setUnclaimedCoins(resultSet.getInt(alias + ".unclaimedcoins"));
            unionRaid.setLastTime(resultSet.getLong(alias + ".lasttime"));
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return unionRaid;
    }
}
