package net.swordie.orm.dao;

import net.swordie.ms.client.character.Char;
import net.swordie.ms.client.character.skills.Skill;
import net.swordie.ms.connection.db.BatchQueryHolder;
import net.swordie.ms.connection.db.DatabaseManager;
import net.swordie.ms.connection.db.QueryHolder;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.HashSet;
import java.util.Set;

public class SkillDao implements SworDao<Skill> {

    private static final Logger log = LogManager.getLogger();

    public QueryHolder createQueryHolder(Char chr, Skill skill) {
        if (skill.isClean()) {
            return QueryHolder.clean();
        }
        boolean needsId = skill.getId() == 0;
        var queryHolder = new QueryHolder<>(skill, needsId);

        String query;
        if (needsId) {
            query = "INSERT INTO skills(" +
                    "skillId, " +
                    "rootId, " +
                    "maxLevel, " +
                    "currentLevel, " +
                    "masterLevel, " +
                    "charid, " +
                    "id " +
                    ") VALUES (?, ?, ?, ?, ?, ?, ?)";
        } else {
            query = "UPDATE skills SET " +
                    "skillId = ?," +
                    "rootId = ?," +
                    "maxLevel = ?," +
                    "currentLevel = ?," +
                    "masterLevel = ?," +
                    "charid = ?" +
                    " WHERE id = ?";
        }

        queryHolder.setQuery(query);
        queryHolder.setArgs(
                skill.getSkillId(),
                skill.getRootId(),
                skill.getMaxLevel(),
                skill.getCurrentLevel(),
                skill.getMasterLevel(),
                chr.getId(),
                skill.getId()
        );

        return queryHolder;
    }

    public void delete(Skill skill) {
        if (skill == null || skill.getId() == 0) {
            log.debug("Trying to delete object " + skill + " that is null or has id 0");
            return;
        }
        DatabaseManager.executeQuery("DELETE FROM skills WHERE ID = ?", skill.getId());
    }


    @Override
    public Skill fromResultSet(ResultSet resultSet, String alias) {
        Skill skill = null;

        try {
            skill = new Skill();
            skill.setId(resultSet.getInt(alias + ".id"));
            skill.setSkillId(resultSet.getInt(alias + ".skillid"));
            skill.setRootId(resultSet.getInt(alias + ".rootid"));
            skill.setMaxLevel(resultSet.getInt(alias + ".maxlevel"));
            skill.setCurrentLevel(resultSet.getInt(alias + ".currentlevel"));
            skill.setMasterLevel(resultSet.getInt(alias + ".masterlevel"));
            skill.setLastSavedHash();
        } catch (SQLException e) {
            e.printStackTrace();
        }

        return skill;
    }

    public synchronized void saveOrUpdate(Char chr, Set<Skill> skills) {
        var batch = new BatchQueryHolder<>();
        for (var s : new HashSet<>(skills)) {
            batch.addQueryInfo(createQueryHolder(chr, s));
        }
        DatabaseManager.executeBatchQuery(batch);
    }

    public Set<Skill> byChar(Char chr) {
        var objs = DatabaseManager.executeSelect(this, "SELECT * FROM skills s WHERE charid = ?", "s", chr.getId());
        Set<Skill> saveDatas = new HashSet<>();
        for (var obj : new HashSet<>(objs)) {
            if (obj != null) {
                saveDatas.add((Skill) obj);
            }
        }
        return saveDatas;
    }
}
