package net.swordie.orm.dao;

import net.swordie.ms.client.character.quest.Quest;
import net.swordie.ms.client.character.quest.QuestManager;
import net.swordie.ms.client.character.quest.progress.QuestProgressRequirement;
import net.swordie.ms.connection.db.BatchQueryHolder;
import net.swordie.ms.connection.db.DatabaseManager;
import net.swordie.ms.connection.db.QueryHolder;
import net.swordie.ms.connection.db.converters.FileTimeConverter;
import net.swordie.ms.enums.QuestStatus;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Collection;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;

public class QuestDao implements SworDao<Quest> {

    private static final Logger log = LogManager.getLogger();

    private static final QuestProgressRequirementDao questProgressRequirementDao = (QuestProgressRequirementDao) SworDaoFactory.getByClass(QuestProgressRequirement.class);

    public QueryHolder createQueryHolder(QuestManager qm, Quest quest) {
        if (quest.isClean()) {
            return QueryHolder.clean();
        }
        boolean needsId = quest.getId() == 0;
        var queryHolder = new QueryHolder<>(quest, needsId);

        String query;
        if (needsId) {
            query = "INSERT INTO quests(" +
                    "QRKey, " +
                    "qrValue, " +
                    "status, " +
                    "completedTime, " +
                    "questmanager_id, " +
                    "id " +
                    ") VALUES (?, ?, ?, ?, ?, ?)";
        } else {
            query = "UPDATE quests SET " +
                    "QRKey = ?," +
                    "qrValue = ?," +
                    "status = ?," +
                    "completedTime = ?," +
                    "questmanager_id = ?" +
                    " WHERE id = ?";
        }

        queryHolder.setQuery(query);
        queryHolder.setArgs(
                quest.getQRKey(),
                quest.getCustomQrValue(),
                quest.getStatus().ordinal(),
                FileTimeConverter.toDbColumn(quest.getCompletedTime()),
                qm.getId(),
                quest.getId()
        );

        return queryHolder;
    }

    public void delete(Quest quest) {
        if (quest == null || quest.getId() == 0) {
            log.debug("Trying to delete object " + quest + " that is null or has id 0");
            return;
        }
        DatabaseManager.executeQuery("DELETE FROM quests WHERE ID = ?", quest.getId());
    }


    @Override
    public Quest fromResultSet(ResultSet resultSet, String alias) {
        Quest q = null;

        try {
            q = new Quest();
            q.setId(resultSet.getLong(alias + ".id"));
            q.setQRKey(resultSet.getInt(alias + ".qrkey"));
            q.setQrValue(resultSet.getString(alias + ".qrvalue"));
            q.setStatus(QuestStatus.values()[resultSet.getInt(alias + ".status")]);
            q.setCompletedTime(FileTimeConverter.fromDbColumn(resultSet.getTimestamp(alias + ".completedtime")));
            q.setLastSavedHash();
        } catch (SQLException e) {
            e.printStackTrace();
        }

        return q;
    }

    public Map<Integer, Quest> byQuestManager(QuestManager questManager) {
        var objs = DatabaseManager.executeSelect(this, "SELECT * FROM quests q WHERE q.questmanager_id = ?", "q", questManager.getId());
        Map<Integer, Quest> saveDatas = new HashMap<>();
        for (var obj : objs) {
            if (obj != null) {
                var quest = (Quest) obj;
                saveDatas.put(quest.getQRKey(), quest);
            }
        }
        return saveDatas;
    }

    public void saveOrUpdate(QuestManager questManager, Collection<Quest> quests) {
        var batch = new BatchQueryHolder<>();
        var questsCopy = new HashSet<>(quests);
        for (var q : questsCopy) {
            batch.addQueryInfo(createQueryHolder(questManager, q));
        }
        DatabaseManager.executeBatchQuery(batch);
        for (var q : questsCopy) {
            questProgressRequirementDao.saveOrUpdate(q, q.getProgressRequirements());
        }

    }
}
