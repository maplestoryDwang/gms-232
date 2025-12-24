package net.swordie.orm.dao;

import net.swordie.ms.client.character.Char;
import net.swordie.ms.client.character.emoticons.EmoticonShortcut;
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
public class EmoticonShortcutDao implements SworDao<EmoticonShortcut> {

    private static final Logger log = LogManager.getLogger();

    public void saveOrUpdate(Char chr, EmoticonShortcut emoticonShortcut) {
        if (emoticonShortcut == null) {
            return;
        }
        boolean needsId = emoticonShortcut.getId() == 0;

        String query;
        if (needsId) {
            query = "INSERT INTO emoticonshortcuts(" +
                    "charid, " +
                    "emoticonid, " +
                    "shortcut, " +
                    "position, " +
                    "id " +
                    ") VALUES (?, ?, ?, ?, ?);";
        } else {
            query = "UPDATE emoticonshortcuts SET " +
                    "charid = ?, " +
                    "emoticonid = ?, " +
                    "shortcut = ?, " +
                    "position = ? " +
                    " WHERE id = ?;";
        }

        long id = DatabaseManager.executeQuery(query,
                chr.getId(),
                emoticonShortcut.getEmoticonId(),
                emoticonShortcut.getShortcut(),
                emoticonShortcut.getPosition(),
                emoticonShortcut.getId()
        );
        if (needsId) {
            emoticonShortcut.setId((int) id);
        }
    }

    public void delete(EmoticonShortcut emoticonShortcut) {
        if (emoticonShortcut == null || emoticonShortcut.getId() == 0) {
            log.debug("Trying to delete object " + emoticonShortcut + " that is null or has id 0");
            return;
        }
        DatabaseManager.executeQuery("DELETE FROM emoticonshortcuts WHERE id = ?;", emoticonShortcut.getId());
    }

    @Override
    public EmoticonShortcut fromResultSet(ResultSet resultSet, String alias) {
        EmoticonShortcut emoticonShortcut = null;

        try {
            emoticonShortcut = new EmoticonShortcut();
            emoticonShortcut.setId(resultSet.getInt(alias + ".id"));
            emoticonShortcut.setEmoticonId(resultSet.getInt(alias + ".emoticonid"));
            emoticonShortcut.setShortcut(resultSet.getString(alias + ".shortcut"));
            emoticonShortcut.setPosition(resultSet.getInt(alias + ".position"));

        } catch (SQLException e) {
            e.printStackTrace();
        }

        return emoticonShortcut;
    }

    public void saveOrUpdate(Char chr, Set<EmoticonShortcut> emoticonShortcuts) {
        for (var es : new HashSet<>(emoticonShortcuts)) {
            saveOrUpdate(chr, es);
        }
    }

    public Set<EmoticonShortcut> byChar(Char chr) {
        var objs = DatabaseManager.executeSelect(this, "SELECT * FROM emoticonshortcuts es WHERE charid = ?;", "es", chr.getId());

        Set<EmoticonShortcut> ret = new HashSet<>();
        for (var obj : objs) {
            if (obj != null) {
                ret.add((EmoticonShortcut) obj);
            }
        }

        return ret;
    }
}
