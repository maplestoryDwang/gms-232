package net.swordie.orm.dao;

import net.swordie.ms.connection.db.DatabaseManager;
import net.swordie.ms.loaders.containerclasses.MonsterCollectionMobInfo;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import java.sql.ResultSet;
import java.sql.SQLException;

public class MonsterCollectionMobsDao implements SworDao<Integer> {

    private static final Logger log = LogManager.getLogger();

    public static final String NAME = "MonsterCollectionMobsDao";

    public void saveOrUpdate(MonsterCollectionMobInfo monsterCollectionmobInfo) {
        if (monsterCollectionmobInfo == null) {
            return;
        }
        boolean needsId = monsterCollectionmobInfo.getId() == 0;

        String query;
        if (needsId) {
            query = "INSERT INTO monster_collection(" +
                    "mobID, " +
                    "region, " +
                    "session, " +
                    "mc_group, " +
                    "position, " +
                    "id " +
                    ") VALUES (?, ?, ?, ?, ?, ?)";
        } else {
            query = "UPDATE monster_collection SET " +
                    "mobID = ?," +
                    "region = ?," +
                    "session = ?," +
                    "mc_group = ?," +
                    "position = ?" +
                    " WHERE ID = ?";
        }
        long id = DatabaseManager.executeQuery(query,
                monsterCollectionmobInfo.getMobID(),
                monsterCollectionmobInfo.getRegion(),
                monsterCollectionmobInfo.getSession(),
                monsterCollectionmobInfo.getGroupId(),
                monsterCollectionmobInfo.getGroupPosition(),
                monsterCollectionmobInfo.getId()
        );
        if (needsId) {
            monsterCollectionmobInfo.setId((int) id);
        }
    }

    public void delete(MonsterCollectionMobInfo monsterCollectionmobInfo) {
        if (monsterCollectionmobInfo == null || monsterCollectionmobInfo.getId() == 0) {
            log.debug("Trying to delete object " + monsterCollectionmobInfo + " that is null or has id 0");
            return;
        }
        DatabaseManager.executeQuery("DELETE FROM monster_collection WHERE ID = ?", monsterCollectionmobInfo.getId());
    }


    @Override
    public Integer fromResultSet(ResultSet resultSet, String alias) {
        Integer mobId = null;

        try {
            mobId = resultSet.getInt(alias + ".mobid");
        } catch (SQLException e) {
            e.printStackTrace();
        }

        return mobId;
    }
}
