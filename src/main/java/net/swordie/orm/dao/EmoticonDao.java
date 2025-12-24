package net.swordie.orm.dao;

import net.swordie.ms.client.character.Char;
import net.swordie.ms.client.character.emoticons.Emoticon;
import net.swordie.ms.connection.db.DatabaseManager;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.HashSet;
import java.util.Set;

/**
 * Created on 20/06/2020.
 *
 * @author Asura
 */
public class EmoticonDao implements SworDao<Emoticon> {

    private static final Logger log = LogManager.getLogger();

    public void saveOrUpdate(Char chr, Emoticon emoticon) {
        if (emoticon == null) {
            return;
        }
        boolean needsId = emoticon.getId() == 0;

        String query;
        if (needsId) {
            query = "INSERT INTO emoticons(" +
                    "charid, " +
                    "emoticonid, " +
                    "position, " +
                    "id " +
                    ") VALUES (?, ?, ?, ?);";
        } else {
            query = "UPDATE emoticons SET " +
                    "charid = ?, " +
                    "emoticonid = ?, " +
                    "position = ? " +
                    " WHERE id = ?;";
        }

        long id = DatabaseManager.executeQuery(query,
                chr.getId(),
                emoticon.getEmoticonId(),
                emoticon.getPosition(),
                emoticon.getId()
        );

        if (needsId) {
            emoticon.setId((int) id);
        }
    }

    public void delete(Emoticon emoticon) {
        if (emoticon == null || emoticon.getId() == 0) {
            log.debug("Trying to delete object " + emoticon + " that is null or has id 0");
            return;
        }
        DatabaseManager.executeQuery("DELETE FROM emoticons WHERE id = ?;", emoticon.getId());
    }

    @Override
    public Emoticon fromResultSet(ResultSet resultSet, String alias) {
        Emoticon emoticon = null;

        try {
            emoticon = new Emoticon();
            emoticon.setId(resultSet.getInt(alias + ".id"));
            emoticon.setEmoticonId(resultSet.getInt(alias + ".emoticonid"));
            emoticon.setPosition(resultSet.getInt(alias + ".position"));

        } catch (SQLException e) {
            e.printStackTrace();
        }

        return emoticon;
    }

    public void saveOrUpdate(Char chr, Set<Emoticon> emoticons) {
        for (var e : new HashSet<>(emoticons)) {
            saveOrUpdate(chr, e);
        }
    }

    public Set<Emoticon> byChar(Char chr) {
        var objs = DatabaseManager.executeSelect(this, "SELECT * FROM emoticons em WHERE charid = ?;", "em", chr.getId());

        Set<Emoticon> ret = new HashSet<>();
        for (var obj : objs) {
            if (obj != null) {
                ret.add((Emoticon) obj);
            }
        }

        return ret;
    }
}
