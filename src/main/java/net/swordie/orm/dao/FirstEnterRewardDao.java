package net.swordie.orm.dao;

import net.swordie.ms.client.Account;
import net.swordie.ms.client.character.Char;
import net.swordie.ms.client.character.FirstEnterReward;
import net.swordie.ms.connection.db.BatchQueryHolder;
import net.swordie.ms.connection.db.DatabaseManager;
import net.swordie.ms.connection.db.QueryHolder;
import net.swordie.ms.connection.db.converters.FileTimeConverter;
import net.swordie.ms.enums.FirstEnterRewardType;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.HashSet;
import java.util.Set;

public class FirstEnterRewardDao implements SworDao<FirstEnterReward> {



    @Override
    public FirstEnterReward fromResultSet(ResultSet resultSet, String alias) {
        FirstEnterReward reward = null;

        try {
                reward = new FirstEnterReward();
                reward.setId(resultSet.getLong(alias + ".id"));
                reward.setAccountId(resultSet.getInt(alias + ".accountId"));
                reward.setCharId(resultSet.getInt(alias + ".charId"));
                reward.setRewardType(FirstEnterRewardType.valueOf(resultSet.getString(alias + ".rewardType")));
                reward.setItemId(resultSet.getInt(alias+".itemId"));
                reward.setQuantity(resultSet.getInt(alias+".quantity"));
                reward.setDescription(resultSet.getString(alias+".descr"));
                reward.setExpireTime(FileTimeConverter.fromDbColumn(resultSet.getTimestamp(alias + ".expireTime")));

        } catch (SQLException e) {
            e.printStackTrace();
        }

        return reward;
    }

    public void saveOrUpdate(Account account, FirstEnterReward firstEnterReward) {
        if (firstEnterReward == null) {
            return;
        }
        var queryHolder = createQueryHolder(account, firstEnterReward);
        if (!queryHolder.isClean()) {
            queryHolder.assignId(DatabaseManager.executeQuery(queryHolder));
        }
    }

    public QueryHolder createQueryHolder(Account account, FirstEnterReward firstEnterReward) {
        if (firstEnterReward.getId() != 0) {
            return QueryHolder.clean();
        }
        boolean needsId = firstEnterReward.getId() == 0;
        QueryHolder<FirstEnterReward> queryHolder = new QueryHolder<>(firstEnterReward, needsId);

        String query;
        if (needsId) {
            query = "INSERT INTO first_enter_rewards(" +
                    "rewardType, " +
                    "itemId, " +
                    "quantity, " +
                    "descr, " +
                    "expireTime, " +
                    "accountId, " +
                    "charId, " +
                    "id " +
                    ") VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
        } else {
            query = "UPDATE first_enter_rewards SET " +
                    "rewardType = ?," +
                    "itemId = ?," +
                    "quantity = ?," +
                    "descr = ?," +
                    "expireTime = ?," +
                    "accountId = ?" +
                    "charId = ?" +
                    " WHERE ID = ?";
        }
        queryHolder.setQuery(query);
        queryHolder.setArgs(
                firstEnterReward.getRewardType().toString(),
                firstEnterReward.getItemId(),
                firstEnterReward.getQuantity(),
                firstEnterReward.getDescription(),
                FileTimeConverter.toDbColumn(firstEnterReward.getExpireTime()),
                account.getId(),
                firstEnterReward.getCharId(),
                firstEnterReward.getId()
        );

        return queryHolder;
    }

    public void delete(FirstEnterReward firstEnterReward) {
        if (firstEnterReward == null || firstEnterReward.getId() == 0) {
            return;
        }
        DatabaseManager.executeQuery("DELETE FROM first_enter_rewards WHERE ID = ?", firstEnterReward.getId());
    }

    public synchronized void saveOrUpdate(Account account, Set<FirstEnterReward> firstEnterRewards) {
        var batchQueryHolder = new BatchQueryHolder<>();
        for (var fer : new HashSet<>(firstEnterRewards)) {
            batchQueryHolder.addQueryInfo(createQueryHolder(account, fer));
        }
        DatabaseManager.executeBatchQuery(batchQueryHolder);
    }

    public Set<FirstEnterReward> getFirstEnterRewardsByAccount(Char chr, Account account) {
        var objs = DatabaseManager.executeSelect(this, "SELECT * FROM first_enter_rewards fer WHERE accountId = ?", "fer", account.getId());
        Set<FirstEnterReward> saveDatas = new HashSet<>();
        for (var obj : objs) {
            if (obj != null) {
                FirstEnterReward firstEnterReward = (FirstEnterReward) obj;
                if(firstEnterReward.getCharId() == 0 || firstEnterReward.getCharId() == chr.getId()) {
                    saveDatas.add(firstEnterReward);
                }
            }
        }
        return saveDatas;
    }
}
