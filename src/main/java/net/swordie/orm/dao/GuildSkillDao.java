package net.swordie.orm.dao;

import net.swordie.ms.client.guild.Guild;
import net.swordie.ms.client.guild.GuildSkill;
import net.swordie.ms.connection.db.DatabaseManager;
import net.swordie.ms.connection.db.converters.FileTimeConverter;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;

public class GuildSkillDao implements SworDao<GuildSkill> {

    private static final Logger log = LogManager.getLogger();

    public void saveOrUpdate(Guild guild, GuildSkill guildSkill) {
        if (guildSkill == null) {
            return;
        }
        boolean needsId = guildSkill.getId() == 0;

        String query;
        if (needsId) {
            query = "INSERT INTO guildskill(" +
                    "skillID, " +
                    "level, " +
                    "expireDate, " +
                    "buyCharacterName, " +
                    "extendCharacterName, " +
                    "guildid, " +
                    "id " +
                    ") VALUES (?, ?, ?, ?, ?, ?, ?)";
        } else {
            query = "UPDATE guildskill SET " +
                    "skillID = ?," +
                    "level = ?," +
                    "expireDate = ?," +
                    "buyCharacterName = ?," +
                    "extendCharacterName = ?," +
                    "guildid = ?" +
                    " WHERE ID = ?";
        }
        long id = DatabaseManager.executeQuery(query,
                guildSkill.getSkillID(),
                guildSkill.getLevel(),
                FileTimeConverter.toDbColumn(guildSkill.getExpireDate()),
                guildSkill.getBuyCharacterName(),
                guildSkill.getExtendCharacterName(),
                guild.getId(),
                guildSkill.getId()
        );
        if (needsId) {
            guildSkill.setId((int) id);
        }
    }

    public void delete(GuildSkill guildSkill) {
        if (guildSkill == null || guildSkill.getId() == 0) {
            log.debug("Trying to delete object " + guildSkill + " that is null or has id 0");
            return;
        }
        DatabaseManager.executeQuery("DELETE FROM guildskill WHERE ID = ?", guildSkill.getId());
    }


    @Override
    public GuildSkill fromResultSet(ResultSet resultSet, String alias) {
        GuildSkill gs = null;

        try {
            gs = new GuildSkill();
            gs.setId(resultSet.getInt(alias + ".id"));
            gs.setSkillID(resultSet.getInt(alias + ".skillid"));
            gs.setLevel(resultSet.getInt(alias + ".level"));
            gs.setExpireDate(FileTimeConverter.fromDbColumn(resultSet.getTimestamp(alias + ".expiredate")));
            gs.setBuyCharacterName(resultSet.getString(alias + ".buycharactername"));
            gs.setExtendCharacterName(resultSet.getString(alias + ".extendcharactername"));
        } catch (SQLException e) {
            e.printStackTrace();
        }

        return gs;
    }

    public Map<Integer, GuildSkill> byGuild(Guild guild) {
        var objs = DatabaseManager.executeSelect(this, "SELECT * FROM guildskill gs WHERE guildid = ?", "gs", guild.getId());
        Map<Integer, GuildSkill> saveDatas = new HashMap();
        for (var obj : objs) {
            if (obj != null) {
                var gs = ((GuildSkill) obj);
                saveDatas.put(gs.getSkillID(), gs);
            }
        }
        return saveDatas;
    }

    public void saveOrUpdate(Guild guild, Map<Integer, GuildSkill> skills) {
        for (var skill : new HashSet<>(skills.values())) {
            saveOrUpdate(guild, skill);
        }
    }
}
