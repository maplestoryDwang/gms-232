package net.swordie.orm.dao;

import net.swordie.ms.client.character.Char;
import net.swordie.ms.client.character.skills.StolenSkill;
import net.swordie.ms.connection.db.DatabaseManager;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.HashSet;
import java.util.Set;

public class StolenSkillDao implements SworDao<StolenSkill> {

    private static final Logger log = LogManager.getLogger();

    public void saveOrUpdate(Char chr, StolenSkill stolenskill) {
        if (stolenskill == null || stolenskill.getSkillId() <= 0) {
            return;
        }
        boolean needsId = stolenskill.getId() == 0;

        String query;
        if (needsId) {
            query = "INSERT INTO stolenskills(" +
                    "skillid, " +
                    "position, " +
                    "currentlv, " +
                    "charid, " +
                    "id " +
                    ") VALUES (?, ?, ?, ?, ?)";
        } else {
            query = "UPDATE stolenskills SET " +
                    "skillid = ?," +
                    "position = ?," +
                    "currentlv = ?," +
                    "charid = ?" +
                    " WHERE ID = ?";
        }
        long id = DatabaseManager.executeQuery(query,
                stolenskill.getSkillId(),
                stolenskill.getPosition(),
                stolenskill.getCurrentlv(),
                chr.getId(),
                stolenskill.getId()
        );
        if (needsId) {
            stolenskill.setId((int) id);
        }
    }

    public void delete(StolenSkill stolenskill) {
        if (stolenskill == null || stolenskill.getId() == 0) {
            log.debug("Trying to delete object " + stolenskill + " that is null or has id 0");
            return;
        }
        DatabaseManager.executeQuery("DELETE FROM stolenskills WHERE ID = ?", stolenskill.getId());
    }


    @Override
    public StolenSkill fromResultSet(ResultSet resultSet, String alias) {
        StolenSkill stolenSkill = null;

        try {
            stolenSkill = new StolenSkill();
            stolenSkill.setId(resultSet.getInt(alias + ".id"));
            stolenSkill.setSkillId(resultSet.getInt(alias + ".skillid"));
            stolenSkill.setPosition(resultSet.getInt(alias + ".position"));
            stolenSkill.setCurrentlv(resultSet.getByte(alias + ".currentlv"));
        } catch (SQLException e) {
            e.printStackTrace();
        }

        return stolenSkill;
    }

    public void saveOrUpdate(Char chr, Set<StolenSkill> stolenSkills) {
        for (var ss : new HashSet<>(stolenSkills)) {
            saveOrUpdate(chr, ss);
        }
    }

    public Set<StolenSkill> byChar(Char chr) {
        var objs = DatabaseManager.executeSelect(this, "SELECT * FROM stolenskills ss WHERE charid = ?", "ss", chr.getId());
        Set<StolenSkill> saveDatas = new HashSet<>();
        for (var obj : objs) {
            if (obj != null) {
                var sk = (StolenSkill) obj;
                if (sk.getSkillId() == 0) {
                    continue;
                }
                saveDatas.add(sk);
            }
        }
        return saveDatas;
    }
}
