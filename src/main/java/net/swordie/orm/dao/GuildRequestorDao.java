package net.swordie.orm.dao;

import net.swordie.ms.client.guild.Guild;
import net.swordie.ms.client.guild.GuildRequestor;
import net.swordie.ms.connection.db.DatabaseManager;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.HashSet;
import java.util.Set;

public class GuildRequestorDao implements SworDao<GuildRequestor> {

    private static final Logger log = LogManager.getLogger();

    public void saveOrUpdate(Guild guild, GuildRequestor guildRequestor) {
        if (guildRequestor == null) {
            return;
        }
        boolean needsId = guildRequestor.getId() == 0;

        String query;
        if (needsId) {
            query = "INSERT INTO guildrequestors(" +
                    "charID, " +
                    "name, " +
                    "job, " +
                    "level, " +
                    "introduction, " +
                    "loggedIn, " +
                    "guildid, " +
                    "id " +
                    ") VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
        } else {
            query = "UPDATE guildrequestors SET " +
                    "charID = ?," +
                    "name = ?," +
                    "job = ?," +
                    "level = ?," +
                    "introduction = ?," +
                    "loggedIn = ?," +
                    "guildid = ?" +
                    " WHERE ID = ?";
        }
        long id = DatabaseManager.executeQuery(query,
                guildRequestor.getCharID(),
                guildRequestor.getName(),
                guildRequestor.getJob(),
                guildRequestor.getLevel(),
                guildRequestor.getIntroduction(),
                guildRequestor.isOnline(),
                guild.getId(),
                guildRequestor.getId()
        );
        if (needsId) {
            guildRequestor.setId((int) id);
        }
    }

    public void delete(GuildRequestor guildRequestor) {
        if (guildRequestor == null || guildRequestor.getId() == 0) {
            log.debug("Trying to delete object " + guildRequestor + " that is null or has id 0");
            return;
        }
        DatabaseManager.executeQuery("DELETE FROM guildrequestors WHERE ID = ?", guildRequestor.getId());
    }


    @Override
    public GuildRequestor fromResultSet(ResultSet resultSet, String alias) {
        GuildRequestor gr = null;

        try {
            gr = new GuildRequestor();
            gr.setId(resultSet.getInt(alias + ".id"));
            gr.setCharID(resultSet.getInt(alias + ".charid"));
            gr.setName(resultSet.getString(alias + ".name"));
            gr.setJob(resultSet.getInt(alias + ".job"));
            gr.setLevel(resultSet.getInt(alias + ".level"));
            gr.setIntroduction(resultSet.getString(alias + ".introduction"));
            gr.setOnline(resultSet.getBoolean(alias + ".loggedin"));
        } catch (SQLException e) {
            e.printStackTrace();
        }

        return gr;
    }

    public Set<GuildRequestor> byGuild(Guild guild) {
        var objs = DatabaseManager.executeSelect(this, "SELECT * FROM guildrequestors gr WHERE guildid = ?", "gr", guild.getId());
        Set<GuildRequestor> saveDatas = new HashSet<>();
        for (var obj : objs) {
            if (obj != null) {
                saveDatas.add((GuildRequestor) obj);
            }
        }
        return saveDatas;
    }

    public void saveOrUpdate(Guild guild, Set<GuildRequestor> requestors) {
        for (var req : new HashSet<>(requestors)) {
            saveOrUpdate(guild, req);
        }
    }
}
