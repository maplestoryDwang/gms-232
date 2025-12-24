package net.swordie.orm.dao;

import net.swordie.ms.client.character.MonsterCollection;
import net.swordie.ms.client.character.MonsterCollectionExploration;
import net.swordie.ms.client.character.MonsterCollectionReward;
import net.swordie.ms.connection.db.DatabaseManager;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import java.sql.ResultSet;
import java.util.HashSet;
import java.util.Set;

public class MonsterCollectionRewardDao implements SworDao<MonsterCollectionReward> {

    private static final Logger log = LogManager.getLogger();

//    public void saveOrUpdate(MonsterCollectionReward monsterCollectionReward ) {
//        boolean needsId = monsterCollectionReward.getId() == 0;
//
//        String query;
//        if (needsId) {
//            query = "INSERT INTO monster_collection_rewards(" +
//                    "region, " +
//                    "session, " +
//                    "groupid, " +
//                    "id " +
//                    ") VALUES (?, ?, ?)";
//        }
//        else {
//            query = "UPDATE monster_collection_rewards SET " +
//                    "region = ?," +
//                    "session = ?," +
//                    "groupid = ?" +
//                    " WHERE ID = ?";
//        }
//        long id = DatabaseManager.executeQuery(query,
//                monsterCollectionReward.getRegion(),
//                monsterCollectionReward.getSession(),
//                monsterCollectionReward.getGroup(),
//        );
//        if (needsId) {
//            monsterCollectionReward.setId(id);
//        }
//    }
//
//    public void delete(MonsterCollectionReward monsterCollectionReward) {
//        if (monsterCollectionReward == null || monsterCollectionReward.getId() == 0) {
//            log.debug("Trying to delete object " + monsterCollectionReward + " that is null or has id 0");
//            return;
//        }
//        DatabaseManager.executeQuery("DELETE FROM monster_collection_rewards WHERE ID = ?", monsterCollectionReward.getId());
//    }
//




    @Override
    public MonsterCollectionReward fromResultSet(ResultSet resultSet, String alias) {
        MonsterCollectionReward mcr = null;

//        try {
            mcr = new MonsterCollectionReward();
            // TODO
//        } catch (SQLException e) {
//            e.printStackTrace();
//        }

        return mcr;
    }

    public Set<MonsterCollectionExploration> byMonsterCollection(MonsterCollection monsterCollection) {
        var objs = DatabaseManager.executeSelect(this,
                "SELECT * FROM monster_collection_explorations mce WHERE collectionid = ?",
                "mce", monsterCollection.getId());
        Set<MonsterCollectionExploration> saveDatas = new HashSet<>();
        for (var obj : objs) {
            if (obj != null) {
                saveDatas.add((MonsterCollectionExploration) obj);
            }
        }
        return saveDatas;
    }
}
