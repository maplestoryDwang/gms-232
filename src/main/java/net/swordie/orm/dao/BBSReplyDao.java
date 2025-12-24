package net.swordie.orm.dao;

import net.swordie.ms.client.guild.bbs.BBSRecord;
import net.swordie.ms.client.guild.bbs.BBSReply;
import net.swordie.ms.connection.db.DatabaseManager;
import net.swordie.ms.connection.db.converters.FileTimeConverter;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class BBSReplyDao implements SworDao<BBSReply> {

    private static final Logger log = LogManager.getLogger();

    public void saveOrUpdate(BBSRecord bbsRecord, BBSReply bbsReply) {
        if (bbsReply == null) {
            return;
        }

        boolean needsId = bbsReply.getId() == 0;

        String query;
        if (needsId) {
            query = "INSERT INTO bbs_replies(" +
                        "idForReply, " +
                        "creatorID, " +
                        "creationDate, " +
                        "msg, " +
                        "recordid, " +
                        "id " +
                    ") VALUES (?, ?, ?, ?, ?, ?)";
        } else {
            query = "UPDATE bbs_replies SET " +
                        "idForReply = ?," +
                        "creatorID = ?," +
                        "creationDate = ?," +
                        "msg = ?," +
                        "recordid = ?" +
                    " WHERE ID = ?";
        }
        long id = DatabaseManager.executeQuery(query,
                bbsReply.getIdForReply(),
                bbsReply.getCreatorID(),
                FileTimeConverter.toDbColumn(bbsReply.getCreationDate()),
                bbsReply.getMsg(),
                bbsRecord.getId(),
                bbsReply.getId()
        );

        if (needsId) {
            bbsReply.setId((int) id);
        }
    }

    public void delete(BBSReply bbSReply) {
        if (bbSReply == null || bbSReply.getId() == 0) {
            log.debug("Trying to delete object " + bbSReply + " that is null or has id 0");
            return;
        }
        DatabaseManager.executeQuery("DELETE FROM bbs_replies WHERE ID = ?", bbSReply.getId());
    }


    @Override
    public BBSReply fromResultSet(ResultSet resultSet, String alias) {
        BBSReply bbsReply = null;

        try {
            bbsReply = new BBSReply();
            bbsReply.setId(resultSet.getInt(alias + ".id"));
            bbsReply.setIdForReply(resultSet.getInt(alias + ".idforreply"));
            bbsReply.setCreatorID(resultSet.getInt(alias + ".creatorid"));
            bbsReply.setCreationDate(FileTimeConverter.fromDbColumn(resultSet.getTimestamp(alias + ".creationdate")));
            bbsReply.setMsg(resultSet.getString(alias + ".msg"));
        } catch (SQLException e) {
            e.printStackTrace();
        }

        return bbsReply;
    }

    public List<BBSReply> byBbsRecord(BBSRecord record) {
        var objs = DatabaseManager.executeSelect(this, "SELECT * FROM bbs_replies br WHERE recordid = ? ORDER BY idForReply", "br", record.getId());
        List<BBSReply> saveDatas = new ArrayList<>();
        for (var obj : objs) {
            if (obj != null) {
                saveDatas.add((BBSReply) obj);
            }
        }
        return saveDatas;
    }

    public void saveOrUpdate(BBSRecord bbsRecord, List<BBSReply> replies) {
        if (bbsRecord == null) {
            return;
        }
        for (var reply : replies) {
            saveOrUpdate(bbsRecord, reply);
        }
    }
}
