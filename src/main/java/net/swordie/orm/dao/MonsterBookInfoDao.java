package net.swordie.orm.dao;

import net.swordie.ms.client.character.cards.MonsterBookInfo;
import net.swordie.ms.connection.db.DatabaseManager;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import java.sql.ResultSet;
import java.sql.SQLException;

public class MonsterBookInfoDao implements SworDao<MonsterBookInfo> {

    private static final Logger log = LogManager.getLogger();

    public void saveOrUpdate(MonsterBookInfo monsterBookInfo) {
        if (monsterBookInfo == null) {
            return;
        }
        boolean needsId = monsterBookInfo.getId() == 0;

        String query;
        if (needsId) {
            query = "INSERT INTO monsterbookinfos(" +
                    "setID, " +
                    "coverID, " +
                    "id " +
                    ") VALUES (?, ?, ?)";
        } else {
            query = "UPDATE monsterbookinfos SET " +
                    "setID = ?," +
                    "coverID = ?" +
                    " WHERE ID = ?";
        }
        long id = DatabaseManager.executeQuery(query,
                monsterBookInfo.getSetID(),
                monsterBookInfo.getCoverID(),
                monsterBookInfo.getId()
        );
        if (needsId) {
            monsterBookInfo.setId((int) id);
        }
    }

    public void delete(MonsterBookInfo monsterBookInfo) {
        if (monsterBookInfo == null || monsterBookInfo.getId() == 0) {
            log.debug("Trying to delete object " + monsterBookInfo + " that is null or has id 0");
            return;
        }
        DatabaseManager.executeQuery("DELETE FROM monsterbookinfos WHERE ID = ?", monsterBookInfo.getId());
    }


    @Override
    public MonsterBookInfo fromResultSet(ResultSet resultSet, String alias) {
        MonsterBookInfo mbi = null;

        try {
            mbi = new MonsterBookInfo(false);
            mbi.setId(resultSet.getInt(alias + ".id"));
        } catch (SQLException e) {
            e.printStackTrace();
        }

        return mbi;
    }
}
