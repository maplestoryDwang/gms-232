package net.swordie.orm.dao;

import net.swordie.ms.client.character.Char;
import net.swordie.ms.client.character.skills.ChosenSkill;
import net.swordie.ms.connection.db.DatabaseManager;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.HashSet;
import java.util.Set;

public class ChosenSkillDao implements SworDao<ChosenSkill> {

    private static final Logger log = LogManager.getLogger();

    public void saveOrUpdate(Char chr, ChosenSkill chosenSkill) {
        if (chosenSkill == null || chosenSkill.getSkillId() == 0) {
            return;
        }
        boolean needsId = chosenSkill.getId() == 0;

        String query;
        if (needsId) {
            query = "INSERT INTO chosenskills(" +
                    "skillId, " +
                    "position, " +
                    "charid, " +
                    "id " +
                    ") VALUES (?, ?, ?, ?)";
        } else {
            query = "UPDATE chosenskills SET " +
                    "skillId = ?," +
                    "position = ?," +
                    "charid = ?" +
                    " WHERE ID = ?";
        }
        long id = DatabaseManager.executeQuery(query,
                chosenSkill.getSkillId(),
                chosenSkill.getPosition(),
                chr.getId(),
                chosenSkill.getId()
        );
        if (needsId) {
            chosenSkill.setId((int) id);
        }
    }

    public void delete(ChosenSkill chosenSkill) {
        if (chosenSkill == null || chosenSkill.getId() == 0) {
            log.debug("Trying to delete object " + chosenSkill + " that is null or has id 0");
            return;
        }
        DatabaseManager.executeQuery("DELETE FROM chosenskills WHERE ID = ?", chosenSkill.getId());
    }


    @Override
    public ChosenSkill fromResultSet(ResultSet resultSet, String alias) {
        ChosenSkill cs = null;

        try {
            cs = new ChosenSkill();
            cs.setId(resultSet.getInt(alias + ".id"));
            cs.setSkillId(resultSet.getInt(alias + ".skillid"));
            cs.setPosition(resultSet.getInt(alias + ".position"));
        } catch (SQLException e) {
            e.printStackTrace();
        }

        return cs;
    }

    public void saveOrUpdate(Char chr, Set<ChosenSkill> chosenSkills) {
        if (chr == null) {
            return;
        }
        for (var cs : new HashSet<>(chosenSkills)) {
            saveOrUpdate(chr, cs);
        }
    }

    public Set<ChosenSkill> byChar(Char chr) {
        var objs = DatabaseManager.executeSelect(this, "SELECT * FROM chosenskills csk WHERE charid = ?", "csk", chr.getId());
        Set<ChosenSkill> saveDatas = new HashSet<>();
        for (var obj : objs) {
            if (obj != null) {
                var cs = (ChosenSkill) obj;
                if (cs.getSkillId() == 0) {
                    continue;
                }
                saveDatas.add(cs);
            }
        }
        return saveDatas;
    }
}
