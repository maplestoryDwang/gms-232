package net.swordie.orm.dao;

import net.swordie.ms.client.guild.Guild;
import net.swordie.ms.client.guild.bbs.BBSRecord;
import net.swordie.ms.client.guild.bbs.BBSReply;
import net.swordie.ms.connection.db.DatabaseManager;
import net.swordie.ms.connection.db.converters.FileTimeConverter;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.HashSet;
import java.util.Set;

public class BBSRecordDao implements SworDao<BBSRecord> {

    private static final Logger log = LogManager.getLogger();

    private static final BBSReplyDao bbsReplyDao = (BBSReplyDao) SworDaoFactory.getByClass(BBSReply.class);
    private static final IntegerColumnDao upvoteDao = new IntegerColumnDao("upvoteId");

    public void saveOrUpdate(Guild guild, BBSRecord bbsRecord) {
        if (bbsRecord == null) {
            return;
        }
        boolean needsId = bbsRecord.getId() == 0;

        String query;
        if (needsId) {
            query = "INSERT INTO bbs_records(" +
                    "idForBbs, " +
                    "creatorID, " +
                    "msg, " +
                    "creationDate, " +
                    "isAnnouncement, " +
                    "guildid, " +
                    "id " +
                    ") VALUES (?, ?, ?, ?, ?, ?, ?)";
        } else {
            query = "UPDATE bbs_records SET " +
                    "idForBbs = ?," +
                    "creatorID = ?," +
                    "msg = ?," +
                    "creationDate = ?," +
                    "isAnnouncement = ?," +
                    "guildid = ?" +
                    " WHERE ID = ?";
        }
        long id = DatabaseManager.executeQuery(query,
                bbsRecord.getIdForBbs(),
                bbsRecord.getCreatorID(),
                bbsRecord.getMsg(),
                FileTimeConverter.toDbColumn(bbsRecord.getCreationDate()),
                bbsRecord.isAnnouncement(),
                guild.getId(),
                bbsRecord.getId()
        );
        if (needsId) {
            bbsRecord.setId((int) id);
        }

//        saveUpvoteIds(bbsRecord, bbsRecord.getUpvotedIds()); // causes a duplicate PK error?
        bbsReplyDao.saveOrUpdate(bbsRecord, bbsRecord.getReplies());
    }

    private void saveUpvoteIds(BBSRecord bbsRecord, Set<Integer> upvotedIds) {
        var recordId = bbsRecord.getId();
        DatabaseManager.executeQuery("DELETE FROM bbs_upvotes WHERE recordId = ?", recordId);

        if (upvotedIds == null || upvotedIds.size() == 0) {
            return;
        }

        var queryBuilder = new StringBuilder("INSERT INTO bbs_upvotes (recordId, upvoteId) VALUES ");
        var queryArgs = new Object[upvotedIds.size() * 2];
        var i = 0;

        for (var item : upvotedIds) {
            queryBuilder.append("(?, ?),");
            queryArgs[i++] = recordId;
            queryArgs[i++] = item;
        }

        var query = queryBuilder.toString();
        DatabaseManager.executeQuery(query.substring(0, query.length() - 1), queryArgs);
    }

    public void delete(BBSRecord bbSRecord) {
        if (bbSRecord == null || bbSRecord.getId() == 0) {
            log.debug("Trying to delete object " + bbSRecord + " that is null or has id 0");
            return;
        }
        DatabaseManager.executeQuery("DELETE FROM bbs_records WHERE ID = ?", bbSRecord.getId());
    }


    @Override
    public BBSRecord fromResultSet(ResultSet resultSet, String alias) {
        BBSRecord bbsRecord = null;

        try {
            int id = resultSet.getInt(alias + ".id");
            if (id == 0) {
                return null;
            }

            bbsRecord = new BBSRecord();
            bbsRecord.setId(id);
            bbsRecord.setIdForBbs(resultSet.getInt(alias + ".idforbbs"));
            bbsRecord.setCreatorID(resultSet.getInt(alias + ".creatorid"));
            bbsRecord.setMsg(resultSet.getString(alias + ".msg"));
            bbsRecord.setCreationDate(FileTimeConverter.fromDbColumn(resultSet.getTimestamp(alias + ".creationdate")));
            bbsRecord.setIsAnnouncement(resultSet.getBoolean(alias + ".isAnnouncement"));

            bbsRecord.setUpvotedIds(getUpvotedIds(bbsRecord));

        } catch (SQLException e) {
            e.printStackTrace();
        }

        return bbsRecord;
    }

    private Set<Integer> getUpvotedIds(BBSRecord bbsRecord) {
        var objs = DatabaseManager.executeSelect(upvoteDao, "SELECT * " +
                        "FROM bbs_upvotes bu " +
                        "WHERE recordId = ?",
                "bu", bbsRecord.getId());
        Set<Integer> ids = new HashSet<>();
        for (var obj : objs) {
            if (obj instanceof Integer) {
                ids.add((Integer) obj);
            }
        }
        return ids;
    }

    public Set<BBSRecord> byGuild(Guild guild) {
        var objs = DatabaseManager.executeSelect(this, "SELECT * FROM bbs_records br " +
                "WHERE guildid = ?", "br", guild.getId());
        Set<BBSRecord> saveDatas = new HashSet<>();
        for (var obj : objs) {
            if (obj != null) {
                saveDatas.add((BBSRecord) obj);
            }
        }
        return saveDatas;
    }

    public void saveOrUpdate(Guild guild, Set<BBSRecord> bbsRecords) {
        if (guild == null) {
            return;
        }
        for (var record : new HashSet<>(bbsRecords)) {
            saveOrUpdate(guild, record);
        }
    }
}
