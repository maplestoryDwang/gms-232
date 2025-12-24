package net.swordie.orm.dao;

import net.swordie.ms.client.Account;
import net.swordie.ms.client.AccountBossCooldown;
import net.swordie.ms.connection.db.BatchQueryHolder;
import net.swordie.ms.connection.db.DatabaseManager;
import net.swordie.ms.connection.db.QueryHolder;
import net.swordie.ms.connection.db.converters.FileTimeConverter;
import net.swordie.ms.enums.BossCooldown;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

public class AccountBossCooldownDao implements SworDao<AccountBossCooldown> {

    private static final Logger log = LogManager.getLogger();

    public void saveOrUpdate(Account account, AccountBossCooldown accountBossCooldown) {
        if (accountBossCooldown == null) {
            return;
        }
        var queryHolder = createQueryHolder(account, accountBossCooldown);
        if (!queryHolder.isClean()) {
            queryHolder.assignId(DatabaseManager.executeQuery(queryHolder));
        }
    }

    public QueryHolder createQueryHolder(Account account, AccountBossCooldown accountBossCooldown) {
        if (accountBossCooldown.isClean()) {
            return QueryHolder.clean();
        }
        boolean needsId = accountBossCooldown.getId() == 0;
        QueryHolder<AccountBossCooldown> queryHolder = new QueryHolder<>(accountBossCooldown, needsId);

        String query;
        if (needsId) {
            query = "INSERT INTO bosscooldowns(" +
                    "boss, " +
                    "nextEntryTime, " +
                    "accid, " +
                    "id " +
                    ") VALUES (?, ?, ?, ?)";
        } else {
            query = "UPDATE bosscooldowns SET " +
                    "boss = ?," +
                    "nextEntryTime = ?," +
                    "accid = ?" +
                    " WHERE ID = ?";
        }
        queryHolder.setQuery(query);
        queryHolder.setArgs(
                accountBossCooldown.getBossCooldown().toString(),
                FileTimeConverter.toDbColumn(accountBossCooldown.getNextEntryTime()),
                account.getId(),
                accountBossCooldown.getId()
        );

        return queryHolder;
    }

    public void delete(AccountBossCooldown accountBossCooldown) {
        if (accountBossCooldown == null || accountBossCooldown.getId() == 0) {
            log.debug("Trying to delete object " + accountBossCooldown + " that is null or has id 0");
            return;
        }
        DatabaseManager.executeQuery("DELETE FROM bosscooldowns WHERE ID = ?", accountBossCooldown.getId());
    }


    public AccountBossCooldown getById(int id) {
        var objs = DatabaseManager.executeSelect(this, "SELECT id, boss, nextEntryTime FROM bosscooldowns bc WHERE id = ?", "bc", id);
        if (objs.size() > 0) {
            return (AccountBossCooldown) objs.get(0);
        }
        return null;
    }

    public AccountBossCooldown getByColumn(String columnName, Object value) {
        var objs = DatabaseManager.executeSelect(this, "SELECT id, boss, nextEntryTime FROM bosscooldowns bc WHERE %s = ?", "bc", value);
        if (objs.size() > 0) {
            return (AccountBossCooldown) objs.get(0);
        }
        return null;
    }

    public List<AccountBossCooldown> list() {
        var objs = DatabaseManager.executeSelect(this, "SELECT * FROM bosscooldowns bc", "bc");
        List<AccountBossCooldown> abcs = new ArrayList<>();
        for (var obj : objs) {
            if (obj != null) {
                abcs.add((AccountBossCooldown) obj);
            }
        }
        return abcs;
    }

    @Override
    public AccountBossCooldown fromResultSet(ResultSet resultSet, String alias) {
        AccountBossCooldown abc = null;

        try {
            abc = new AccountBossCooldown();
            abc.setId(resultSet.getLong(alias + ".id"));
            abc.setBossCooldown(BossCooldown.valueOf(resultSet.getString(alias + ".boss")));
            abc.setNextEntryTime(FileTimeConverter.fromDbColumn(resultSet.getTimestamp(alias + ".nextEntryTime")));
            abc.setLastSavedHash();
        } catch (SQLException e) {
            e.printStackTrace();
        }

        return abc;
    }

    public synchronized void saveOrUpdate(Account account, Set<AccountBossCooldown> bossCooldowns) {
        var batchQueryHolder = new BatchQueryHolder<>();
        for (var abc : new HashSet<>(bossCooldowns)) {
            if (!abc.getNextEntryTime().isExpired()) {
                batchQueryHolder.addQueryInfo(createQueryHolder(account, abc));
            }
        }
        DatabaseManager.executeBatchQuery(batchQueryHolder);
    }

    public Set<AccountBossCooldown> byAccount(Account account) {
        var objs = DatabaseManager.executeSelect(this, "SELECT * FROM bosscooldowns bc WHERE accid = ?", "bc", account.getId());
        Set<AccountBossCooldown> saveDatas = new HashSet<>();
        for (var obj : objs) {
            if (obj != null) {
                saveDatas.add((AccountBossCooldown) obj);
            }
        }
        return saveDatas;
    }
}
