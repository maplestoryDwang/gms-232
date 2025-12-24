package net.swordie.orm.dao;

import net.swordie.ms.client.character.quest.Quest;
import net.swordie.ms.client.character.quest.progress.*;
import net.swordie.ms.connection.db.DatabaseManager;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class QuestProgressRequirementDao implements SworDao<QuestProgressRequirement> {

    private static final Logger log = LogManager.getLogger();

    public void saveOrUpdate(Quest quest, QuestProgressRequirement questProgressRequirement) {
        if (questProgressRequirement == null || questProgressRequirement.isClean()) {
            return;
        }
        boolean needsId = questProgressRequirement.getId() == 0;

        String query;
        if (needsId) {
            query = "INSERT INTO questprogressrequirements(" +
                    "progressType, " +
                    "orderNum, " +
                    "unitid, " +
                    "requiredcount, " +
                    "currentcount, " +
                    "questid, " +
                    " id " +
                    ") VALUES (?, ?, ?, ?, ?, ?, ?)";
        } else {
            query = "UPDATE questprogressrequirements SET " +
                    "progressType = ?, " +
                    "orderNum = ?," +
                    "unitid = ?," +
                    "requiredcount = ?," +
                    "currentcount = ?," +
                    "questid = ?" +
                    " WHERE ID = ?";
        }
        long id = DatabaseManager.executeQuery(query,
                questProgressRequirement.getProgressType(),
                questProgressRequirement.getOrder(),
                questProgressRequirement.getUnitId(),
                questProgressRequirement.getRequiredCount(),
                questProgressRequirement.getCurrentCount(),
                quest.getId(),
                questProgressRequirement.getId()
        );
        if (needsId) {
            questProgressRequirement.setId(id);
        }
    }

    public void delete(QuestProgressRequirement questProgressRequirement) {
        if (questProgressRequirement == null || questProgressRequirement.getId() == 0) {
            log.debug("Trying to delete object " + questProgressRequirement + " that is null or has id 0");
            return;
        }
        DatabaseManager.executeQuery("DELETE FROM questprogressrequirements WHERE ID = ?", questProgressRequirement.getId());
    }


    @Override
    public QuestProgressRequirement fromResultSet(ResultSet resultSet, String alias) {
        QuestProgressRequirement qpr = null;

        try {
            var type = resultSet.getString("progresstype");

            switch (type) {
                case QuestProgressItemRequirement.PROGRESS_TYPE:
                    qpr = new QuestProgressItemRequirement();
                    ((QuestProgressItemRequirement) qpr).setItemID(resultSet.getInt(alias + ".unitid"));
                    ((QuestProgressItemRequirement) qpr).setRequiredCount(resultSet.getInt(alias + ".requiredCount"));
                    break;
                case QuestProgressLevelRequirement.PROGRESS_TYPE:
                    qpr = new QuestProgressLevelRequirement();
                    ((QuestProgressLevelRequirement) qpr).setLevel(resultSet.getInt(alias + ".requiredCount"));
                    break;
                case QuestProgressMobRequirement.PROGRESS_TYPE:
                    qpr = new QuestProgressMobRequirement();
                    ((QuestProgressMobRequirement) qpr).setMobID(resultSet.getInt(alias + ".unitid"));
                    ((QuestProgressMobRequirement) qpr).setRequiredCount(resultSet.getInt(alias + ".requiredCount"));
                    ((QuestProgressMobRequirement) qpr).setCurrentCount(resultSet.getInt(alias + ".currentCount"));
                    break;
                case QuestProgressMoneyRequirement.PROGRESS_TYPE:
                    qpr = new QuestProgressMoneyRequirement();
                    ((QuestProgressMoneyRequirement) qpr).setMoney(resultSet.getInt(alias + ".requiredCount"));
                    break;
            }
            qpr.setId(resultSet.getLong(alias + ".id"));
            qpr.setOrder(resultSet.getInt(alias + ".orderNum"));
            qpr.setLastSavedHash();
        } catch (SQLException e) {
            e.printStackTrace();
        }

        return qpr;
    }

    public List<QuestProgressRequirement> byQuest(Quest quest) {
        var objs = DatabaseManager.executeSelect(this, "SELECT * FROM questprogressrequirements qpr WHERE questid = ?", "qpr", quest.getId());
        List<QuestProgressRequirement> saveDatas = new ArrayList<>();
        for (var obj : objs) {
            if (obj != null) {
                saveDatas.add((QuestProgressRequirement) obj);
            }
        }
        return saveDatas;
    }

    public void saveOrUpdate(Quest quest, List<QuestProgressRequirement> progressRequirements) {
        for (var qpr : progressRequirements) {
            saveOrUpdate(quest, qpr);
        }
    }
}
