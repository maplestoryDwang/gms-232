package net.swordie.orm.dao;

import net.swordie.ms.client.character.Char;
import net.swordie.ms.client.character.potential.CharacterPotential;
import net.swordie.ms.connection.db.DatabaseManager;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.HashSet;
import java.util.Set;

public class CharacterPotentialDao implements SworDao<CharacterPotential> {

    private static final Logger log = LogManager.getLogger();

    public void saveOrUpdate(Char chr, CharacterPotential characterPotential) {
        if (characterPotential == null) {
            return;
        }
        boolean needsId = characterPotential.getId() == 0;

        String query;
        if (needsId) {
            query = "INSERT INTO characterpotentials(" +
                    "potKey, " +
                    "skillID, " +
                    "slv, " +
                    "grade, " +
                    "charid, " +
                    "id " +
                    ") VALUES (?, ?, ?, ?, ?, ?)";
        } else {
            query = "UPDATE characterpotentials SET " +
                    "potKey = ?," +
                    "skillID = ?," +
                    "slv = ?," +
                    "grade = ?," +
                    "charid = ?" +
                    " WHERE ID = ?";
        }
        long id = DatabaseManager.executeQuery(query,
                characterPotential.getKey(),
                characterPotential.getSkillID(),
                characterPotential.getSlv(),
                characterPotential.getGrade(),
                chr.getId(),
                characterPotential.getId()
        );
        if (needsId) {
            characterPotential.setId(id);
        }
    }

    public void delete(CharacterPotential characterPotential) {
        if (characterPotential == null || characterPotential.getId() == 0) {
            log.debug("Trying to delete object " + characterPotential + " that is null or has id 0");
            return;
        }
        DatabaseManager.executeQuery("DELETE FROM characterpotentials WHERE ID = ?", characterPotential.getId());
    }


    @Override
    public CharacterPotential fromResultSet(ResultSet resultSet, String alias) {
        CharacterPotential cp = null;

        try {
            cp = new CharacterPotential();
            cp.setId(resultSet.getLong(alias + ".id"));
            cp.setKey(resultSet.getByte(alias + ".potkey"));
            cp.setSkillID(resultSet.getInt(alias + ".skillid"));
            cp.setSlv(resultSet.getInt(alias + ".slv"));
            cp.setGrade(resultSet.getByte(alias + ".grade"));
        } catch (SQLException e) {
            e.printStackTrace();
        }

        return cp;
    }

    public void saveOrUpdate(Char chr, Set<CharacterPotential> potentials) {
        if (chr == null) {
            return;
        }
        for (var pot : new HashSet<>(potentials)) {
            saveOrUpdate(chr, pot);
        }
    }

    public Set<CharacterPotential> byChar(Char chr) {
        var objs = DatabaseManager.executeSelect(this, "SELECT * FROM characterpotentials cp WHERE charid = ?", "cp", chr.getId());
        Set<CharacterPotential> saveDatas = new HashSet<>();
        for (var obj : objs) {
            if (obj != null) {
                saveDatas.add((CharacterPotential) obj);
            }
        }
        return saveDatas;
    }
}
