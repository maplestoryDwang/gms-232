package net.swordie.orm.dao;

import net.swordie.ms.client.character.Char;
import net.swordie.ms.client.character.skills.SkillCooltime;
import net.swordie.ms.connection.db.DatabaseManager;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;

/**
 * Created on 06/05/2020.
 *
 * @author Asura
 */
public class SkillCooltimeDao implements SworDao<SkillCooltime> {

    private static final Logger log = LogManager.getLogger();

    public void saveOrUpdate(Char chr, Map<Integer, Long> skillCooltimes) {
        deleteByChrId(chr.getId());
        if (skillCooltimes == null || skillCooltimes.size() == 0) {
            return;
        }
        var skillCooltimesCopy = new HashMap<>(skillCooltimes);
        var queryBuilder = new StringBuilder("INSERT INTO skillcooltimes (charid, skillid, nextusabletime) VALUES ");
        var queryArgs = new Object[skillCooltimesCopy.size() * 3];
        var i = 0;

        for (var item : skillCooltimesCopy.entrySet()) {
            queryBuilder.append("(?, ?, ?),");
            queryArgs[i++] = chr.getId();
            queryArgs[i++] = item.getKey();
            queryArgs[i++] = item.getValue();
        }

        var query = queryBuilder.toString();
        DatabaseManager.executeQuery(query.substring(0, query.length() - 1), queryArgs);
    }

    public void deleteByChrId(int chrId) {
        DatabaseManager.executeQuery("DELETE FROM skillcooltimes WHERE charid = ?;", chrId);
    }

    public Map<Integer, Long> byChar(Char chr) {
        var objs = DatabaseManager.executeSelect(this, "SELECT * FROM skillcooltimes sc WHERE charid = ?", "sc", chr.getId());
        Set<SkillCooltime> saveDatas = new HashSet<>();
        for (var obj : new HashSet<>(objs)) {
            if (obj != null) {
                saveDatas.add((SkillCooltime) obj);
            }
        }
        Map<Integer, Long> cooltimes = new HashMap<>();
        if (saveDatas.size() == 0) {
            return cooltimes;
        }
        for (var sc : saveDatas) {
            cooltimes.put(sc.getSkillId(), sc.getNextAvailableTime());
        }

        return cooltimes;
    }

    @Override
    public SkillCooltime fromResultSet(ResultSet resultSet, String alias) {
        SkillCooltime sc = null;

        try {
            sc = new SkillCooltime();
            sc.setSkillId(resultSet.getInt(alias + ".skillid"));
            sc.setNextAvailableTime(resultSet.getLong(alias + ".nextusabletime"));
        } catch (SQLException e) {
            e.printStackTrace();
        }

        return sc;
    }
}
