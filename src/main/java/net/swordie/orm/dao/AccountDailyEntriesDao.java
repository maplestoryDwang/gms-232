package net.swordie.orm.dao;

import net.swordie.ms.client.Account;
import net.swordie.ms.client.dailies.AccountDailyEntries;
import net.swordie.ms.connection.db.DatabaseManager;
import net.swordie.ms.enums.DailyEntry;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import java.sql.ResultSet;
import java.sql.SQLException;

public class AccountDailyEntriesDao implements SworDao<AccountDailyEntries> {

    private static final Logger log = LogManager.getLogger();

    public void saveOrUpdate(Account account, AccountDailyEntries accountDailyEntries) {
        if (accountDailyEntries == null) {
            return;
        }
        boolean needsId = accountDailyEntries.getId() == 0;
        String query;
        if (needsId) {
            query = "INSERT INTO accountdailyentries(";

            for(DailyEntry dailyEntry : DailyEntry.values()) {
                query += dailyEntry.getDaoString() + ", ";
            }
            query +=
                    "accId, " +
                    "id " +
                    ") VALUES (?, ?";
            for(int i = 0; i < DailyEntry.values().length; i++) {
                query += ", ?";
            }
            query += ")";
        } else {
            query = "UPDATE accountdailyentries SET ";

            for(DailyEntry dailyEntry : DailyEntry.values()) {
                query += dailyEntry.getDaoString() + " = ?, ";
            }
            query += "accId = ?" +
                    " WHERE ID = ?";
        }
        long id = DatabaseManager.executeQuery(query,
                accountDailyEntries.getRemainingEntries(DailyEntry.MonsterPark),
                accountDailyEntries.getRemainingEntries(DailyEntry.EvoLab),
                accountDailyEntries.getRemainingEntries(DailyEntry.Dojo),
                accountDailyEntries.getRemainingEntries(DailyEntry.PQ),
                accountDailyEntries.getRemainingEntries(DailyEntry.WhipTheWhelps),
                accountDailyEntries.getRemainingEntries(DailyEntry.DefeatGoldenWyvern),
                accountDailyEntries.getRemainingEntries(DailyEntry.PowerCrystal),
                accountDailyEntries.getRemainingEntries(DailyEntry.VanishingJourney),
                accountDailyEntries.getRemainingEntries(DailyEntry.ChuChu),
                accountDailyEntries.getRemainingEntries(DailyEntry.Lachelein),
                accountDailyEntries.getRemainingEntries(DailyEntry.Arcana),
                accountDailyEntries.getRemainingEntries(DailyEntry.Morass),
                accountDailyEntries.getRemainingEntries(DailyEntry.Esfera),
                accountDailyEntries.getRemainingEntries(DailyEntry.Cernium),
                accountDailyEntries.getRemainingEntries(DailyEntry.HotelArcus),
                account.getId(),
                accountDailyEntries.getId()
        );

        if (needsId){
            accountDailyEntries.setId(id);
        }
    }

    public void delete(AccountDailyEntries accountDailyEntries) {
        if (accountDailyEntries == null || accountDailyEntries.getId() == 0) {
            log.debug("Trying to delete object " + accountDailyEntries + " that is null or has id 0");
            return;
        }
        DatabaseManager.executeQuery("DELETE FROM accountdailyentries WHERE ID = ?", accountDailyEntries.getId());
    }

    @Override
    public AccountDailyEntries fromResultSet(ResultSet resultSet, String alias) {
        AccountDailyEntries ade = null;

        try {
            ade = new AccountDailyEntries();
            ade.setId(resultSet.getLong(alias + ".id"));

            for(DailyEntry dailyEntry : DailyEntry.values()) {
                ade.setRemainingEntries(dailyEntry, resultSet.getInt(alias + "." + dailyEntry.getDaoString()));
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }

        return ade;
    }


    public AccountDailyEntries byAccount(Account account) {
        var objs = DatabaseManager.executeSelect(this, "SELECT * FROM accountdailyentries de WHERE accId = ?", "de", account.getId());
        AccountDailyEntries accDailyEntry = null;
        for (var obj : objs) {
            if (obj != null) {
                accDailyEntry = (AccountDailyEntries) obj;
                break;
            }
        }
        return accDailyEntry;
    }

    public void resetDailyEntries(DailyEntry dailyEntry) {
        DatabaseManager.executeQuery("UPDATE accountdailyentries SET %s = -1;".formatted(dailyEntry.getDaoString()));
    }
}
