package net.swordie.orm.dao;

import net.swordie.ms.client.Account;
import net.swordie.ms.client.blacklist.BlackListEntry;
import net.swordie.ms.connection.db.DatabaseManager;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

/**
 * Created on 05/06/2021.
 *
 * @author Asura
 */
public class BlackListEntryDao implements SworDao<BlackListEntry> {

    private static final Logger log = LogManager.getLogger();

    public void saveOrUpdate(Account account, BlackListEntry entry) {
        if (account == null || entry == null) {
            return;
        }

        boolean needsId = entry.getId() == 0;

        String query;
        if (needsId) {
            query = "INSERT INTO blacklist(" +
                    "accountid, " +
                    "tab, " +
                    "targetname, " +
                    "nickname, " +
                    "charid, " +
                    "guildid, " +
                    "id " +
                    ") VALUES (?, ?, ?, ?, ?, ?, ?);";
        } else {
            query = "UPDATE blacklist SET " +
                    "accountid = ?," +
                    "tab = ?," +
                    "targetname = ?," +
                    "nickname = ?," +
                    "charid = ?," +
                    "guildid = ?" +
                    " WHERE id = ?;";
        }

        long id = DatabaseManager.executeQuery(query,
                account.getId(),
                entry.getTab(),
                entry.getTargetName(),
                entry.getNickName(),
                entry.getChrId(),
                entry.getGuildId(),
                entry.getId()
        );
        if (needsId) {
            entry.setId((int) id);
        }
    }

    public void saveOrUpdate(Account account, List<BlackListEntry> entries) {
        entries.forEach(entry -> saveOrUpdate(account, entry));
    }

    public void delete(BlackListEntry entry) {
        if (entry == null || entry.getId() == 0) {
            log.debug("Trying to delete object " + entry + " that is null or has id 0");
            return;
        }

        DatabaseManager.executeQuery("DELETE FROM blacklist WHERE id = ?;", entry.getId());
    }

    public List<BlackListEntry> byAccount(Account account) {
        var objs = DatabaseManager.executeSelect(this, "SELECT * FROM blacklist bl WHERE accountid = ?;", "bl", account.getId());

        List<BlackListEntry> ret = new ArrayList<>();
        for (var obj : objs) {
            if (obj != null) {
                ret.add((BlackListEntry) obj);
            }
        }

        return ret;
    }

    @Override
    public BlackListEntry fromResultSet(ResultSet resultSet, String alias) {
        BlackListEntry entry = null;

        try {
            entry = new BlackListEntry();
            entry.setId(resultSet.getInt(alias + ".id"));
            entry.setTab(resultSet.getInt(alias + ".tab"));
            entry.setTargetName(resultSet.getString(alias + ".targetname"));
            entry.setNickName(resultSet.getString(alias + ".nickname"));
            entry.setChrId(resultSet.getInt(alias + ".charid"));
            entry.setGuildId(resultSet.getInt(alias + ".guildid"));
        } catch (SQLException e) {
            e.printStackTrace();
        }

        return entry;
    }
}
