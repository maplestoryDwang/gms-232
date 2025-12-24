package net.swordie.orm.dao;

import net.swordie.ms.client.alliance.Alliance;
import net.swordie.ms.client.guild.Guild;
import net.swordie.ms.client.guild.GuildMember;
import net.swordie.ms.client.guild.GuildRequestor;
import net.swordie.ms.client.guild.GuildSkill;
import net.swordie.ms.client.guild.bbs.BBSRecord;
import net.swordie.ms.connection.db.DatabaseManager;
import net.swordie.ms.connection.db.converters.BlobByteArrayConverter;
import net.swordie.ms.connection.db.converters.InlinedIntArrayConverter;
import net.swordie.ms.connection.db.converters.InlinedStringArrayConverter;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.HashSet;
import java.util.Set;

public class GuildDao implements SworDao<Guild> {

    private static final Logger log = LogManager.getLogger();

    private static final BBSRecordDao bbsRecordDao = (BBSRecordDao) SworDaoFactory.getByClass(BBSRecord.class);
    private static final GuildMemberDao guildMemberDao = (GuildMemberDao) SworDaoFactory.getByClass(GuildMember.class);
    private static final GuildRequestorDao guildRequestorDao = (GuildRequestorDao) SworDaoFactory.getByClass(GuildRequestor.class);
    private static final GuildSkillDao guildSkillDao = (GuildSkillDao) SworDaoFactory.getByClass(GuildSkill.class);

    public void saveOrUpdate(Guild guild) {
        if (guild == null) {
            return;
        }

        boolean needsId = guild.getId() == 0;

        String query;
        if (needsId) {
            query = "INSERT INTO guilds(" +
                    "name, " +
                    "leaderID, " +
                    "worldID, " +
                    "gradeNames, " +
                    "gradePermissions, " +
                    "markBg, " +
                    "markBgColor, " +
                    "mark, " +
                    "markColor, " +
                    "maxMembers, " +
                    "notice, " +
                    "points, " +
                    "seasonPoints, " +
                    "allianceID, " +
                    "`level`, " +
                    "`rank`, " +
                    "ggp, " +
                    "appliable, " +
                    "activeTimes, " +
                    "mainActivity, " +
                    "ageGroup, " +
                    "reqLevel, " +
                    "customMark, " +
                    "id " +
                    ") VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
        } else {
            query = "UPDATE guilds SET " +
                    "name = ?," +
                    "leaderID = ?," +
                    "worldID = ?," +
                    "gradeNames = ?," +
                    "gradePermissions = ?," +
                    "markBg = ?," +
                    "markBgColor = ?," +
                    "mark = ?," +
                    "markColor = ?," +
                    "maxMembers = ?," +
                    "notice = ?," +
                    "points = ?," +
                    "seasonPoints = ?," +
                    "allianceID = ?," +
                    "`level` = ?," +
                    "`rank` = ?," +
                    "ggp = ?," +
                    "appliable = ?," +
                    "activeTimes = ?," +
                    "mainActivity = ?," +
                    "ageGroup = ?," +
                    "reqLevel = ?," +
                    "customMark = ?" +
                    " WHERE ID = ?";
        }
        long id = DatabaseManager.executeQuery(query,
                guild.getName(),
                guild.getLeaderID(),
                guild.getWorldID(),
                InlinedStringArrayConverter.toDbColumn(guild.getGradeNames()),
                InlinedIntArrayConverter.toDbColumn(guild.getGradePermissions()),
                guild.getMarkBg(),
                guild.getMarkBgColor(),
                guild.getMark(),
                guild.getMarkColor(),
                guild.getMaxMembers(),
                guild.getNotice(),
                guild.getPoints(),
                guild.getSeasonPoints(),
                guild.getAllianceID(),
                guild.getLevel(),
                guild.getRank(),
                guild.getGgp(),
                guild.isAppliable(),
                guild.getActiveTimes(),
                guild.getMainActivity(),
                guild.getAgeGroup(),
                guild.getReqLevel(),
                BlobByteArrayConverter.toDbColumn(guild.getCustomMark()),
                guild.getId()
        );
        if (needsId) {
            guild.setId((int) id);
        }

        guildRequestorDao.saveOrUpdate(guild, guild.getRequestors());
        guildMemberDao.saveOrUpdate(guild, guild.getMembers());
        guildSkillDao.saveOrUpdate(guild, guild.getSkills());
        bbsRecordDao.saveOrUpdate(guild, guild.getBbsRecords());
    }

    public void saveOrUpdate(Alliance alliance, Guild guild) {
        if (guild == null) {
            return;
        }
        boolean needsId = guild.getId() == 0;

        String query;
        if (needsId) {
            query = "INSERT INTO guilds(" +
                    "name, " +
                    "leaderID, " +
                    "worldID, " +
                    "gradenames, " +
                    "gradePermissions, " +
                    "markBg, " +
                    "markBgColor, " +
                    "mark, " +
                    "markColor, " +
                    "maxMembers, " +
                    "notice, " +
                    "points, " +
                    "seasonPoints, " +
                    "allianceID, " +
                    "`level`, " +
                    "`rank`, " +
                    "ggp, " +
                    "appliable, " +
                    "activeTimes, " +
                    "mainActivity, " +
                    "ageGroup, " +
                    "reqLevel, " +
                    "customMark, " +
                    "allianceid, " +
                    "id " +
                    ") VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
        } else {
            query = "UPDATE guilds SET " +
                    "name = ?," +
                    "leaderID = ?," +
                    "worldID = ?," +
                    "gradenames = ?," +
                    "gradePermissions = ?," +
                    "markBg = ?," +
                    "markBgColor = ?," +
                    "mark = ?," +
                    "markColor = ?," +
                    "maxMembers = ?," +
                    "notice = ?," +
                    "points = ?," +
                    "seasonPoints = ?," +
                    "allianceID = ?," +
                    "`level` = ?," +
                    "`rank` = ?," +
                    "ggp = ?," +
                    "appliable = ?," +
                    "activeTimes = ?," +
                    "mainActivity = ?," +
                    "ageGroup = ?," +
                    "reqLevel = ?," +
                    "customMark = ?," +
                    "allianceid = ?" +
                    " WHERE ID = ?";
        }
        long id = DatabaseManager.executeQuery(query,
                guild.getName(),
                guild.getLeaderID(),
                guild.getWorldID(),
                InlinedStringArrayConverter.toDbColumn(guild.getGradeNames()),
                InlinedIntArrayConverter.toDbColumn(guild.getGradePermissions()),
                guild.getMarkBg(),
                guild.getMarkBgColor(),
                guild.getMark(),
                guild.getMarkColor(),
                guild.getMaxMembers(),
                guild.getNotice(),
                guild.getPoints(),
                guild.getSeasonPoints(),
                guild.getAllianceID(),
                guild.getLevel(),
                guild.getRank(),
                guild.getGgp(),
                guild.isAppliable(),
                guild.getActiveTimes(),
                guild.getMainActivity(),
                guild.getAgeGroup(),
                guild.getReqLevel(),
                BlobByteArrayConverter.toDbColumn(guild.getCustomMark()),
                alliance == null ? null : guild.getAlliance().getId(),
                guild.getId()
        );
        if (needsId) {
            guild.setId((int) id);
        }
    }

    public void delete(Guild guild) {
        if (guild == null || guild.getId() == 0) {
            log.debug("Trying to delete object " + guild + " that is null or has id 0");
            return;
        }
        DatabaseManager.executeQuery("DELETE FROM guildskill WHERE guildid = ?", guild.getId());
        DatabaseManager.executeQuery("DELETE FROM guilds WHERE ID = ?", guild.getId());
    }


    @Override
    public Guild fromResultSet(ResultSet resultSet, String alias) {
        Guild guild = null;

        try {
            guild = new Guild(false);
            guild.setId(resultSet.getInt(alias + ".id"));
            guild.setName(resultSet.getString(alias + ".name"));
            guild.setLeaderID(resultSet.getInt(alias + ".leaderid"));
            guild.setWorldID(resultSet.getInt(alias + ".worldid"));
            guild.setMarkBg(resultSet.getInt(alias + ".markbg"));
            guild.setMarkBgColor(resultSet.getInt(alias + ".markbgcolor"));
            guild.setMark(resultSet.getInt(alias + ".mark"));
            guild.setMarkColor(resultSet.getInt(alias + ".markcolor"));
            guild.setMaxMembers(resultSet.getInt(alias + ".maxmembers"));
            guild.setNotice(resultSet.getString(alias + ".notice"));
            guild.setPoints(resultSet.getInt(alias + ".points"));
            guild.setSeasonPoints(resultSet.getInt(alias + ".seasonpoints"));
            guild.setAllianceID(resultSet.getInt(alias + ".allianceid"));
            guild.setLevel(resultSet.getInt(alias + ".level"));
            guild.setRank(resultSet.getInt(alias + ".rank"));
            guild.setGgp(resultSet.getInt(alias + ".ggp"));
            guild.setAppliable(resultSet.getBoolean(alias + ".appliable"));
            guild.setActiveTimes(resultSet.getInt(alias + ".activeTimes"));
            guild.setMainActivity(resultSet.getInt(alias + ".mainActivity"));
            guild.setAgeGroup(resultSet.getInt(alias + ".ageGroup"));
            guild.setReqLevel(resultSet.getInt(alias + ".reqlevel"));
            guild.setCustomMark(BlobByteArrayConverter.fromDbColumn(resultSet.getBlob(alias + ".customMark")));
            guild.setGradeNames(InlinedStringArrayConverter.fromDbColumn(resultSet.getString(alias + ".gradenames")));
            guild.setGradePermissions(InlinedIntArrayConverter.fromDbColumn(resultSet.getString(alias + ".gradepermissions")));
        } catch (SQLException e) {
            e.printStackTrace();
        }

        return guild;
    }

    public Set<Guild> list() {
        var objs = DatabaseManager.executeSelect(this,
                "SELECT * FROM guilds g", "g");
        Set<Guild> guilds = new HashSet<>();
        for (var obj : objs) {
            if (obj != null) {
                guilds.add((Guild) obj);
            }
        }
        return guilds;
    }

    public void saveOrUpdate(Alliance alliance, Set<Guild> guilds) {
        for (var g : new HashSet<>(guilds)) {
            saveOrUpdate(alliance, g);
        }
    }

    public Set<Guild> byAlliance(Alliance alliance) {
        var objs = DatabaseManager.executeSelect(this,
                "SELECT * FROM guilds g " +
                        "WHERE g.allianceid = ?", "g", alliance.getId());
        Set<Guild> guilds = new HashSet<>();
        for (var obj : objs) {
            if (obj != null) {
                guilds.add((Guild) obj);
            }
        }
        return guilds;
    }
}
