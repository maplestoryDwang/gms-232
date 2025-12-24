package net.swordie.orm.dao;

import net.swordie.ms.client.anticheat.Offense;
import net.swordie.ms.client.anticheat.OffenseManager;
import net.swordie.ms.connection.db.DatabaseManager;
import net.swordie.ms.connection.db.converters.FileTimeConverter;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.HashSet;
import java.util.Set;

public class OffenseDao implements SworDao<Offense> {

    private static final Logger log = LogManager.getLogger();

    public void saveOrUpdate(OffenseManager om, Offense offense) {
        if (offense == null) {
            return;
        }
        boolean needsId = offense.getId() == 0;

        String query;
        if (needsId) {
            query = "INSERT INTO offenses(" +
                    "charID, " +
                    "accountID, " +
                    "msg, " +
                    "type, " +
                    "issueDate, " +
                    "issuer_char_id, " +
                    "manager_id, " +
                    "id " +
                    ") VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
        } else {
            query = "UPDATE offenses SET " +
                    "charID = ?," +
                    "accountID = ?," +
                    "msg = ?," +
                    "type = ?," +
                    "issueDate = ?," +
                    "issuer_char_id = ?," +
                    "manager_id = ?" +
                    " WHERE ID = ?";
        }
        long id = DatabaseManager.executeQuery(query,
                offense.getCharID(),
                offense.getAccountID(),
                offense.getMsg(),
                offense.getType().toString(),
                FileTimeConverter.toDbColumn(offense.getIssueDate()),
                offense.getIssuerCharID(),
                om.getId(),
                offense.getId()
        );
        if (needsId) {
            offense.setId(id);
        }
    }

    public void delete(Offense offense) {
        if (offense == null || offense.getId() == 0) {
            log.debug("Trying to delete object " + offense + " that is null or has id 0");
            return;
        }
        DatabaseManager.executeQuery("DELETE FROM offenses WHERE ID = ?", offense.getId());
    }


    @Override
    public Offense fromResultSet(ResultSet resultSet, String alias) {
        Offense off = null;

        try {
            off = new Offense();
            off.setId(resultSet.getLong(alias + ".id"));
            off.setCharID(resultSet.getInt(alias + ".charid"));
            off.setAccountID(resultSet.getInt(alias + ".accountid"));
            off.setMsg(resultSet.getString(alias + ".msg"));
            off.setType(Offense.Type.valueOf(resultSet.getString(alias + ".type")));
            off.setIssueDate(FileTimeConverter.fromDbColumn(resultSet.getTimestamp(alias + ".issuedate")));
            off.setIssuerCharID(resultSet.getInt(alias + ".issuer_char_id"));
        } catch (SQLException e) {
            e.printStackTrace();
        }

        return off;
    }

    public Set<Offense> byOffenseManager(OffenseManager offenseManager) {
        var objs = DatabaseManager.executeSelect(this, "SELECT * FROM offenses o WHERE manager_id = ?", "o", offenseManager.getId());
        Set<Offense> ret = new HashSet<>();
        for (var obj : objs) {
            if (obj != null) {
                ret.add((Offense) obj);
            }
        }
        return ret;
    }

    public void saveOrUpdate(OffenseManager offenseManager, Set<Offense> offenses) {
        for (var o : new HashSet<>(offenses)) {
            saveOrUpdate(offenseManager, o);
        }
    }
}
