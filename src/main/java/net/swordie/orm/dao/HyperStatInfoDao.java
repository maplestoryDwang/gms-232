package net.swordie.orm.dao;

import net.swordie.ms.client.character.hyperstats.HyperStatInfo;
import net.swordie.ms.client.character.hyperstats.HyperStatsManager;
import net.swordie.ms.connection.db.BatchQueryHolder;
import net.swordie.ms.connection.db.DatabaseManager;
import net.swordie.ms.connection.db.QueryHolder;
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
public class HyperStatInfoDao implements SworDao<HyperStatInfo> {

    private static final Logger log = LogManager.getLogger();

    public QueryHolder createQueryHolder(HyperStatsManager hsm, HyperStatInfo info) {
        if (info.isClean()) {
            return QueryHolder.clean();
        }
        boolean needsId = info.getId() == 0;
        var queryHolder = new QueryHolder<>(info, needsId);

        String query;
        if (needsId) {
            query = "INSERT INTO hyperstatinfos(" +
                    "preset, " +
                    "skillid, " +
                    "lv, " +
                    "hsmid, " +
                    "id " +
                    ") VALUES (?, ?, ?, ?, ?)";
        } else {
            query = "UPDATE hyperstatinfos SET " +
                    "preset = ?," +
                    "skillid = ?," +
                    "lv = ?," +
                    "hsmid = ?" +
                    " WHERE id = ?";
        }

        queryHolder.setQuery(query);
        queryHolder.setArgs(
                info.getPresetIndex(),
                info.getSkillId(),
                info.getLevel(),
                hsm.getId(),
                info.getId()
        );

        return queryHolder;
    }

    @Override
    public HyperStatInfo fromResultSet(ResultSet resultSet, String alias) {
        HyperStatInfo info = null;
        try {
            info = new HyperStatInfo();
            info.setId(resultSet.getInt(alias + ".id"));
            info.setPresetIndex(resultSet.getInt(alias + ".preset"));
            info.setSkillId(resultSet.getInt(alias + ".skillid"));
            info.setLevel(resultSet.getInt(alias + ".lv"));
        } catch (SQLException e) {
            e.printStackTrace();
        }

        return info;
    }

    public void delete(HyperStatInfo info) {
        if (info == null || info.getId() == 0) {
            log.debug("Trying to delete object " + info + " that is null or has id 0.");
            return;
        }
        DatabaseManager.executeQuery("DELETE FROM hyperstatinfos WHERE id = ?", info.getId());
    }

    public void deleteByPreset(HyperStatsManager hsm, int preset) {
        DatabaseManager.executeQuery("DELETE FROM hyperstatinfos WHERE hsmid = ? and preset = ?", hsm.getId(), preset);
    }

    public List<HyperStatInfo> byHyperStatsManager(HyperStatsManager hsm) {
        var hsmId = hsm.getId();
        var objs = DatabaseManager.executeSelect(this,
                "SELECT * " +
                        "FROM hyperstatinfos hsi " +
                        "WHERE hsmid = ?",
                "hsi",
                hsmId);
        List<HyperStatInfo> hsiList = new ArrayList<>();
        for (var obj : objs) {
            if (obj != null) {
                hsiList.add((HyperStatInfo) obj);
            }
        }

        return hsiList;
    }

    public synchronized void saveOrUpdate(HyperStatsManager hsm, List<HyperStatInfo> infos) {
        var batch = new BatchQueryHolder<>();
        for (var info : infos) {
            batch.addQueryInfo(createQueryHolder(hsm, info));
        }
        DatabaseManager.executeBatchQuery(batch);
    }
}
