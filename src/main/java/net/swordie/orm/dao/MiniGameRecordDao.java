package net.swordie.orm.dao;


import net.swordie.ms.client.character.Char;
import net.swordie.ms.client.social.minigamerecord.MiniGameRecord;
import net.swordie.ms.connection.db.BatchQueryHolder;
import net.swordie.ms.connection.db.DatabaseManager;
import net.swordie.ms.connection.db.QueryHolder;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

/**
 * Created on 04/02/2022.
 *
 * @author Asura
 */
public class MiniGameRecordDao implements SworDao<MiniGameRecord> {

    public QueryHolder createQueryHolder(Char chr, MiniGameRecord record) {
        if (record.isClean()) {
            return QueryHolder.clean();
        }
        boolean needsId = record.getId() == 0;
        var queryHolder = new QueryHolder<>(record, needsId);

        String query;
        if (needsId) {
            query = "INSERT INTO minigamerecords(" +
                    "type, " +
                    "win, " +
                    "tie, " +
                    "loss, " +
                    "charid, " +
                    "id " +
                    ") VALUES (?, ?, ?, ?, ?, ?)";
        } else {
            query = "UPDATE minigamerecords SET " +
                    "type = ?," +
                    "win = ?," +
                    "tie = ?," +
                    "loss = ?," +
                    "charid = ?" +
                    " WHERE id = ?";
        }

        queryHolder.setQuery(query);
        queryHolder.setArgs(
                record.getMiniRoomType(),
                record.getWinCount(),
                record.getTieCount(),
                record.getLossCount(),
                chr.getId(),
                record.getId()
        );

        return queryHolder;
    }

    @Override
    public MiniGameRecord fromResultSet(ResultSet resultSet, String alias) {
        MiniGameRecord record = null;

        try {
            record = new MiniGameRecord();
            record.setId(resultSet.getInt(alias + ".id"));
            record.setMiniRoomType(resultSet.getInt(alias + ".type"));
            record.setWinCount(resultSet.getInt(alias + ".win"));
            record.setTieCount(resultSet.getInt(alias + ".tie"));
            record.setLossCount(resultSet.getInt(alias + ".loss"));
        } catch (SQLException e) {
            e.printStackTrace();
        }

        return record;
    }

    public List<MiniGameRecord> byChar(Char chr) {
        var objs = DatabaseManager.executeSelect(this,
                "SELECT * " +
                        "FROM minigamerecords mgr " +
                        "WHERE charid = ?",
                "mgr",
                chr.getId());
        List<MiniGameRecord> mgsList = new ArrayList<>();
        for (var obj : objs) {
            if (obj != null) {
                mgsList.add((MiniGameRecord) obj);
            }
        }

        return mgsList;
    }

    public synchronized void saveOrUpdate(Char chr, List<MiniGameRecord> records) {
        var batch = new BatchQueryHolder<>();
        for (var record : records) {
            batch.addQueryInfo(createQueryHolder(chr, record));
        }
        DatabaseManager.executeBatchQuery(batch);
    }
}
