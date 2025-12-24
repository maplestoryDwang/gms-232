package net.swordie.orm.dao;

import net.swordie.ms.client.character.quest.Quest;
import net.swordie.ms.client.character.quest.QuestManager;
import net.swordie.ms.connection.db.DatabaseManager;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import java.sql.ResultSet;
import java.sql.SQLException;

public class QuestManagerDao implements SworDao<QuestManager> {

    private static final Logger log = LogManager.getLogger();

    private static final QuestDao questDao = (QuestDao) SworDaoFactory.getByClass(Quest.class);

    public void saveOrUpdate(QuestManager questManager) {
        if (questManager == null) {
            return;
        }
        boolean needsId = questManager.getId() == 0;

        String query;
        if (needsId) {
            query = "INSERT INTO questmanagers(" +
                    "id " +
                    ") VALUES (?)";
        } else {
            query = null;
        }
        long id = DatabaseManager.executeQuery(query,
                questManager.getId()
        );
        if (needsId) {
            questManager.setId(id);
        }

        questDao.saveOrUpdate(questManager, questManager.getQuests().values());
    }

    public void delete(QuestManager questManager) {
        if (questManager == null || questManager.getId() == 0) {
            log.debug("Trying to delete object " + questManager + " that is null or has id 0");
            return;
        }
        DatabaseManager.executeQuery("DELETE FROM questmanagers WHERE ID = ?", questManager.getId());
    }


    @Override
    public QuestManager fromResultSet(ResultSet resultSet, String alias) {
        QuestManager alliance = null;

        try {
            alliance = new QuestManager();
            alliance.setId(resultSet.getLong(alias + ".id"));
        } catch (SQLException e) {
            e.printStackTrace();
        }

        return alliance;
    }
}
