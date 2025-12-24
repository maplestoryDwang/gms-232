package net.swordie.orm.dao;

import net.swordie.ms.client.Account;
import net.swordie.ms.client.soulcollection.SoulCollectionEntry;
import net.swordie.ms.connection.db.DatabaseManager;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

/**
 * Created on 02/07/2021.
 *
 * @author Asura
 */
public class SoulCollectionDao implements SworDao<SoulCollectionEntry> {

    private static final Logger log = LogManager.getLogger();

    public void saveOrUpdate(Account account, SoulCollectionEntry entry) {
        if (account == null || entry == null) {
            return;
        }

        boolean needsId = entry.getId() == 0;

        String query;
        if (needsId) {
            query = "INSERT INTO soulcollection(" +
                    "accountid, " +
                    "bosssoul, " +
                    "flag, " +
                    "id " +
                    ") VALUES (?, ?, ?, ?);";
        } else {
            query = "UPDATE soulcollection SET " +
                    "accountid = ?, " +
                    "bosssoul = ?, " +
                    "flag = ? " +
                    " WHERE id = ?;";
        }

        long id = DatabaseManager.executeQuery(query,
                account.getId(),
                entry.getBossSoul().getVal(),
                entry.getFlag(),
                entry.getId()
        );
        if (needsId) {
            entry.setId((int) id);
        }
    }

    public void saveOrUpdate(Account account, List<SoulCollectionEntry> entries) {
        entries.forEach(entry -> saveOrUpdate(account, entry));
    }

    public void delete(SoulCollectionEntry entry) {
        if (entry == null || entry.getId() == 0) {

            return;
        }

        DatabaseManager.executeQuery("DELETE FROM soulcollection WHERE id = ?;", entry.getId());
    }

    public List<SoulCollectionEntry> byAccount(Account account) {
        var objs = DatabaseManager.executeSelect(this, "SELECT * FROM soulcollection sc WHERE accountid = ?;", "sc", account.getId());

        List<SoulCollectionEntry> ret = new ArrayList<>();
        for (var obj : objs) {
            if (obj != null) {
                ret.add((SoulCollectionEntry) obj);
            }
        }

        return ret;
    }

    @Override
    public SoulCollectionEntry fromResultSet(ResultSet resultSet, String alias) {
        SoulCollectionEntry entry = null;

        try {
            entry = new SoulCollectionEntry();
            entry.setId(resultSet.getInt(alias + ".id"));
            entry.setBossSoul(resultSet.getInt(alias + ".bosssoul"));
            entry.setFlag(resultSet.getInt(alias + ".flag"));

        } catch (SQLException e) {
            e.printStackTrace();
        }

        return entry;
    }
}
