package net.swordie.orm.dao;

import net.swordie.ms.client.guild.Guild;
import net.swordie.ms.client.guild.GuildMember;
import net.swordie.ms.connection.db.DatabaseManager;
import net.swordie.ms.connection.db.converters.FileTimeConverter;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.HashSet;
import java.util.Set;

public class GuildMemberDao implements SworDao<GuildMember> {

    private static final Logger log = LogManager.getLogger();

    public void saveOrUpdate(Guild guild, GuildMember guildMember) {
        if (guildMember == null) {
            return;
        }
        boolean needsId = guildMember.getId() == 0;

        String query;
        if (needsId) {
            query = "INSERT INTO guildmembers(" +
                    "charID, " +
                    "grade, " +
                    "allianceGrade, " +
                    "commitment, " +
                    "dayCommitment, " +
                    "igp, " +
                    "commitmentIncTime, " +
                    "lastonline, " +
                    "name, " +
                    "job, " +
                    "level, " +
                    "loggedIn, " +
                    "guildid, " +
                    "id " +
                    ") VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
        } else {
            query = "UPDATE guildmembers SET " +
                    "charID = ?," +
                    "grade = ?," +
                    "allianceGrade = ?," +
                    "commitment = ?," +
                    "dayCommitment = ?," +
                    "igp = ?," +
                    "commitmentIncTime = ?," +
                    "lastonline = ?," +
                    "name = ?," +
                    "job = ?," +
                    "level = ?," +
                    "loggedIn = ?," +
                    "guildid = ?" +
                    " WHERE ID = ?";
        }
        long id = DatabaseManager.executeQuery(query,
                guildMember.getCharID(),
                guildMember.getGrade(),
                guildMember.getAllianceGrade(),
                guildMember.getCommitment(),
                guildMember.getDayCommitment(),
                guildMember.getIgp(),
                FileTimeConverter.toDbColumn(guildMember.getCommitmentIncTime()),
                FileTimeConverter.toDbColumn(guildMember.getLastOnline()),
                guildMember.getName(),
                guildMember.getJob(),
                guildMember.getLevel(),
                guildMember.isOnline(),
                guild.getId(),
                guildMember.getId()
        );
        if (needsId) {
            guildMember.setId((int) id);
        }
    }

    public void delete(GuildMember guildMember) {
        if (guildMember == null || guildMember.getId() == 0) {
            log.debug("Trying to delete object " + guildMember + " that is null or has id 0");
            return;
        }
        DatabaseManager.executeQuery("DELETE FROM guildmembers WHERE ID = ?", guildMember.getId());
    }


    @Override
    public GuildMember fromResultSet(ResultSet resultSet, String alias) {
        GuildMember gm = null;

        try {
            gm = new GuildMember(null);
            gm.setId(resultSet.getInt(alias + ".id"));
            gm.setCharID(resultSet.getInt(alias + ".charid"));
            gm.setGrade(resultSet.getInt(alias + ".grade"));
            gm.setAllianceGrade(resultSet.getInt(alias + ".alliancegrade"));
            gm.setCommitment(resultSet.getInt(alias + ".commitment"));
            gm.setDayCommitment(resultSet.getInt(alias + ".daycommitment"));
            gm.setIgp(resultSet.getInt(alias + ".igp"));
            gm.setCommitmentIncTime(FileTimeConverter.fromDbColumn(resultSet.getTimestamp(alias + ".commitmentinctime")));
            gm.setName(resultSet.getString(alias + ".name"));
            gm.setJob(resultSet.getInt(alias + ".job"));
            gm.setLevel(resultSet.getInt(alias + ".level"));
            gm.setOnline(resultSet.getBoolean(alias + ".loggedin"));
            gm.setLastOnline(FileTimeConverter.fromDbColumn(resultSet.getTimestamp(alias + ".lastonline")));
        } catch (SQLException e) {
            e.printStackTrace();
        }

        return gm;
    }

    public Set<GuildMember> byGuild(Guild guild) {
        var objs = DatabaseManager.executeSelect(this, "SELECT * FROM guildmembers gm WHERE guildid = ?", "gm", guild.getId());
        Set<GuildMember> saveDatas = new HashSet<>();
        for (var obj : objs) {
            if (obj != null) {
                var gm = (GuildMember) obj;
                gm.setGuild(guild);
                saveDatas.add(gm);
            }
        }
        return saveDatas;
    }

    public void saveOrUpdate(Guild guild, Set<GuildMember> members) {
        for (var mem : new HashSet<>(members)) {
            saveOrUpdate(guild, mem);
        }
    }
}
