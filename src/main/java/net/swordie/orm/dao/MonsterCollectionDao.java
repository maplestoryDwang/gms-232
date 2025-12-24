package net.swordie.orm.dao;

import net.swordie.ms.client.character.MonsterCollection;
import net.swordie.ms.client.character.MonsterCollectionReward;
import net.swordie.ms.connection.db.DatabaseManager;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.HashSet;
import java.util.Set;

public class MonsterCollectionDao implements SworDao<MonsterCollection> {

    private static final Logger log = LogManager.getLogger();

    private static final IntegerDao mobDao = new IntegerDao("mobid");
    private static final MonsterCollectionRewardDao monsterCollectionRewardDao = (MonsterCollectionRewardDao) SworDaoFactory.getByClass(MonsterCollectionReward.class);


    public void saveOrUpdate(MonsterCollection monsterCollection) {
        if (monsterCollection == null) {
            return;
        }
        boolean needsId = monsterCollection.getId() == 0;

        String query;
        if (needsId) {
            query = "INSERT INTO monster_collections(" +
                    "id " +
                    ") VALUES (?)";
        } else {
            query = null;
        }
        long id = DatabaseManager.executeQuery(query,
                monsterCollection.getId()
        );
        if (needsId) {
            monsterCollection.setId((int) id);
        }

        saveOrUpdate(monsterCollection, monsterCollection.getMobs());
    }

    private void saveOrUpdate(MonsterCollection monsterCollection, Set<Integer> mobs) {
        deleteMobs(monsterCollection);

        String query = "INSERT INTO monster_collection_mobs(" +
                "collectionid," +
                "mobid" +
                ") VALUES (?, ?)";

        for (int val : new HashSet<>(mobs)) {
            DatabaseManager.executeQuery(query,
                    monsterCollection.getId(),
                    val
            );
        }
    }

    private void deleteMobs(MonsterCollection monsterCollection) {
        var query = "DELETE FROM monster_collection_mobs WHERE collectionid = ?";
        DatabaseManager.executeQuery(query, monsterCollection.getId());
    }

    public void delete(MonsterCollection monsterCollection) {
        if (monsterCollection == null || monsterCollection.getId() == 0) {
            log.debug("Trying to delete object " + monsterCollection + " that is null or has id 0");
            return;
        }
        DatabaseManager.executeQuery("DELETE FROM monster_collections WHERE ID = ?", monsterCollection.getId());
    }


    @Override
    public MonsterCollection fromResultSet(ResultSet resultSet, String alias) {
        MonsterCollection mc = null;

        try {
            mc = new MonsterCollection();
            mc.setId(resultSet.getInt(alias + ".id"));
        } catch (SQLException e) {
            e.printStackTrace();
        }

        return mc;
    }

    public Set<Integer> getMobsByMonsterCollection(MonsterCollection monsterCollection) {
        var objs = DatabaseManager.executeSelect(mobDao, "SELECT * FROM monster_collection_mobs mcm WHERE collectionid = ?", "mcm", monsterCollection.getId());
        Set<Integer> saveDatas = new HashSet<>();
        for (var obj : objs) {
            if (obj != null) {
                saveDatas.add((Integer) obj);
            }
        }
        return saveDatas;
    }
}
