package net.swordie.orm.dao;

import net.swordie.ms.client.alliance.Alliance;
import net.swordie.ms.client.guild.Guild;
import net.swordie.ms.connection.db.DatabaseManager;
import net.swordie.ms.connection.db.converters.InlinedStringArrayConverter;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class AllianceDao implements SworDao<Alliance> {

    private static final GuildDao guildDao = (GuildDao) SworDaoFactory.getByClass(Guild.class);

    private static final Logger log = LogManager.getLogger();

    public void saveOrUpdate(Alliance alliance) {
        if (alliance == null) {
            return;
        }

        boolean needsId = alliance.getId() == 0;

        String query;
        if (needsId) {
            query = "INSERT INTO alliances(" +
                    "name, " +
                    "maxmembernum, " +
                    "notice, " +
                    "gradenames, " +
                    "id " +
                    ") VALUES (?, ?, ?, ?, ?)";
        }
        else {
            query = "UPDATE alliances SET " +
                    "name = ?," +
                    "maxmembernum = ?," +
                    "notice = ?," +
                    "gradenames = ?" +
                    " WHERE id = ?";
        }
        long id = DatabaseManager.executeQuery(query,
                alliance.getName(),
                alliance.getMaxMemberNum(),
                alliance.getNotice(),
                InlinedStringArrayConverter.toDbColumn(alliance.getGradeNames()),
                alliance.getId()
        );
        if (needsId) {
            alliance.setId((int) id);
        }

        guildDao.saveOrUpdate(alliance, alliance.getGuilds());
    }

    public void delete(Alliance alliance) {
        if (alliance == null || alliance.getId() == 0) {
            log.debug("Trying to delete object " + alliance + " that is null or has id 0");
            return;
        }
        DatabaseManager.executeQuery("DELETE FROM alliances WHERE ID = ?", alliance.getId());
    }



    @Override
    public Alliance fromResultSet(ResultSet resultSet, String alias) {
        Alliance alliance = null;

        try {
            alliance = new Alliance(false);
            alliance.setId(resultSet.getInt(alias +".id"));
            alliance.setName(resultSet.getString(alias +".name"));
            alliance.setMaxMemberNum(resultSet.getInt(alias +".maxmembernum"));
            alliance.setNotice(resultSet.getString(alias +".notice"));
            alliance.setGradeNames(InlinedStringArrayConverter.fromDbColumn(resultSet.getString(alias + ".gradenames")));
        } catch (SQLException e) {
            e.printStackTrace();
        }

        return alliance;
    }

    public List<Alliance> list() {
        var objs = DatabaseManager.executeSelect(this,
                "SELECT * FROM alliances a ", "a");
        List<Alliance> alliances = new ArrayList<>();
        for (var obj : objs) {
            if (obj != null) {
                alliances.add((Alliance) obj);
            }
        }
        return alliances;
    }

    public Alliance byId(int id) {
        var objs = DatabaseManager.executeSelect(this,
                "SELECT * FROM alliances a WHERE id = ?", "a", id);
        Alliance alliance = null;
        for (var obj : objs) {
            if (obj != null) {
                alliance = (Alliance) obj;
            }
        }
        return alliance;
    }

    public Alliance byName(String name) {
        var objs = DatabaseManager.executeSelect(this,
                "SELECT * FROM alliances a WHERE name = ?", "a", name);
        Alliance alliance = null;
        for (var obj : objs) {
            if (obj != null) {
                alliance = (Alliance) obj;
            }
        }
        return alliance;
    }
}
