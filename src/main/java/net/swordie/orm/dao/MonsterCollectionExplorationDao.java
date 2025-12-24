package net.swordie.orm.dao;

import net.swordie.ms.client.character.MonsterCollectionExploration;
import net.swordie.ms.connection.db.DatabaseManager;
import net.swordie.ms.connection.db.converters.FileTimeConverter;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import java.sql.ResultSet;
import java.sql.SQLException;

public class MonsterCollectionExplorationDao implements SworDao<MonsterCollectionExploration> {

    private static final Logger log = LogManager.getLogger();

    public void saveOrUpdate(MonsterCollectionExploration monsterCollectionExploration) {
        if (monsterCollectionExploration == null) {
            return;
        }
        boolean needsId = monsterCollectionExploration.getId() == 0;

        String query;
        if (needsId) {
            query = "INSERT INTO monster_collection_explorations(" +
                    "collectionKey, " +
                    "monsterKey, " +
                    "position, " +
                    "endDate, " +
                    "id " +
                    ") VALUES (?, ?, ?, ?, ?)";
        } else {
            query = "UPDATE monster_collection_explorations SET " +
                    "collectionKey = ?," +
                    "monsterKey = ?," +
                    "position = ?," +
                    "endDate = ?" +
                    " WHERE ID = ?";
        }
        long id = DatabaseManager.executeQuery(query,
                monsterCollectionExploration.getCollectionKey(),
                monsterCollectionExploration.getMonsterKey(),
                monsterCollectionExploration.getPosition(),
                FileTimeConverter.toDbColumn(monsterCollectionExploration.getEndDate()),
                monsterCollectionExploration.getId()
        );
        if (needsId) {
            monsterCollectionExploration.setId(id);
        }
    }

    public void delete(MonsterCollectionExploration monsterCollectionExploration) {
        if (monsterCollectionExploration == null || monsterCollectionExploration.getId() == 0) {
            log.debug("Trying to delete object " + monsterCollectionExploration + " that is null or has id 0");
            return;
        }
        DatabaseManager.executeQuery("DELETE FROM monster_collection_explorations WHERE ID = ?", monsterCollectionExploration.getId());
    }


    @Override
    public MonsterCollectionExploration fromResultSet(ResultSet resultSet, String alias) {
        MonsterCollectionExploration mce = null;

        try {
            mce = new MonsterCollectionExploration();
            mce.setId(resultSet.getInt(alias + ".id"));

            mce.setCollectionKey(resultSet.getInt(alias + ".collectionkey"));
            mce.setMonsterKey(resultSet.getString(alias + ".monsterkey"));
            mce.setEndDate(FileTimeConverter.fromDbColumn(resultSet.getTimestamp(alias + ".endDate")));
            mce.setPosition(resultSet.getInt(alias + ".position"));
        } catch (SQLException e) {
            e.printStackTrace();
        }

        return mce;
    }
}
