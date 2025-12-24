package net.swordie.orm.dao;

import net.swordie.ms.client.character.Char;
import net.swordie.ms.client.character.hyperstats.HyperStatInfo;
import net.swordie.ms.client.character.hyperstats.HyperStatsManager;
import net.swordie.ms.connection.db.DatabaseManager;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

/**
 * Created on 01/02/2022.
 *
 * @author Asura
 */
public class HyperStatsManagerDao implements SworDao<HyperStatsManager> {

    private static final Logger log = LogManager.getLogger();

    private static final HyperStatInfoDao hyperStatInfoDao = (HyperStatInfoDao) SworDaoFactory.getByClass(HyperStatInfo.class);

    public void saveOrUpdate(Char chr, HyperStatsManager hsm) {
        if (hsm == null) {
            return;
        }
        boolean needsId = hsm.getId() == 0;

        String query;
        if (needsId) {
            query = "INSERT INTO hyperstatsmanager(" +
                    "currentpreset, " +
                    "charid, " +
                    "id " +
                    ") VALUES (?, ?, ?)";
        } else {
            query = "UPDATE hyperstatsmanager SET " +
                    "currentpreset = ?," +
                    "charid = ?" +
                    " WHERE id = ?";
        }
        long id = DatabaseManager.executeQuery(query,
                hsm.getCurrentPreset(),
                chr.getId(),
                hsm.getId()
        );
        if (needsId) {
            hsm.setId((int) id);
        }

        // 1 to *
        hyperStatInfoDao.saveOrUpdate(hsm, hsm.getHyperStatSkills());
    }

    public HyperStatsManager byChar(Char chr) {
        var objs = DatabaseManager.executeSelect(this,
                "SELECT * " +
                        "FROM hyperstatsmanager hsm " +
                        "WHERE charid = ? ",
                "hsm", chr.getId());
        List<HyperStatsManager> hsList = new ArrayList<>();
        for (var obj : objs) {
            if (obj != null) {
                hsList.add((HyperStatsManager) obj);
            }
        }

        if (hsList.size() <= 0) {
            return new HyperStatsManager();
        }

        return hsList.get(0);
    }

    @Override
    public HyperStatsManager fromResultSet(ResultSet resultSet, String alias) {
        HyperStatsManager hs = null;

        try {
            hs = new HyperStatsManager();
            hs.setCurrentPreset(resultSet.getInt(alias + ".currentpreset"));
            hs.setId(resultSet.getInt(alias + ".id"));
        } catch (SQLException e) {
            e.printStackTrace();
        }

        return hs;
    }
}
