package net.swordie.orm.dao;

import net.swordie.ms.client.character.Char;
import net.swordie.ms.client.character.skills.vmatrix.MatrixRecord;
import net.swordie.ms.connection.db.BatchQueryHolder;
import net.swordie.ms.connection.db.DatabaseManager;
import net.swordie.ms.connection.db.QueryHolder;
import net.swordie.ms.connection.db.converters.FileTimeConverter;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.HashSet;
import java.util.Set;

public class MatrixRecordDao implements SworDao<MatrixRecord> {

    private static final Logger log = LogManager.getLogger();

    public static final String TABLE = "matrix_records";

    public QueryHolder createQueryHolder(Char chr, MatrixRecord matrixRecord) {
        if (matrixRecord.isClean()) {
            return QueryHolder.clean();
        }
        boolean isInsert = matrixRecord.isInit();
        var queryHolder = new QueryHolder<>(matrixRecord, isInsert, false);

        String query;
        if (isInsert) {
            query = "INSERT INTO matrix_records(" +
                    "iconID, " +
                    "skillID1, " +
                    "skillID2, " +
                    "skillID3, " +
                    "slv, " +
                    "maxLevel, " +
                    "`row`, " +
                    "exp, " +
                    "crc, " +
                    "expireDate, " +
                    "position, " +
                    "locked, " +
                    "charid, " +
                    "id " +
                    ") VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
        } else {
            query = "UPDATE matrix_records SET " +
                    "iconID = ?," +
                    "skillID1 = ?," +
                    "skillID2 = ?," +
                    "skillID3 = ?," +
                    "slv = ?," +
                    "maxLevel = ?," +
                    "`row` = ?," +
                    "exp = ?," +
                    "crc = ?," +
                    "expireDate = ?," +
                    "position = ?," +
                    "locked = ?," +
                    "charid = ?" +
                    " WHERE ID = ?";
        }

        queryHolder.setQuery(query);
        queryHolder.setArgs(
                matrixRecord.getIconID(),
                matrixRecord.getSkillID1(),
                matrixRecord.getSkillID2(),
                matrixRecord.getSkillID3(),
                matrixRecord.getSlv(),
                matrixRecord.getMaxLevel(),
                matrixRecord.getRow(),
                matrixRecord.getExp(),
                matrixRecord.getCrc(),
                FileTimeConverter.toDbColumn(matrixRecord.getExpireDate()),
                matrixRecord.getPosition(),
                matrixRecord.isLocked(),
                chr.getId(),
                matrixRecord.getId()
        );
        if (isInsert) {
            matrixRecord.setInit(false);
        }

        return queryHolder;
    }

    public void delete(MatrixRecord matrixRecord) {
        if (matrixRecord == null || matrixRecord.getId() == 0) {
            log.debug("Trying to delete object " + matrixRecord + " that is null or has id 0");
            return;
        }
        DatabaseManager.executeQuery("DELETE FROM matrix_records WHERE ID = ?", matrixRecord.getId());
    }


    @Override
    public MatrixRecord fromResultSet(ResultSet resultSet, String alias) {
        MatrixRecord mr = null;

        try {
            mr = new MatrixRecord();
            mr.setId(resultSet.getLong(alias + ".id"));
            mr.setIconID(resultSet.getInt(alias + ".iconid"));
            mr.setSkillID1(resultSet.getInt(alias + ".skillid1"));
            mr.setSkillID2(resultSet.getInt(alias + ".skillid2"));
            mr.setSkillID3(resultSet.getInt(alias + ".skillid3"));
            mr.setSlv(resultSet.getInt(alias + ".slv"));
            mr.setMaxLevel(resultSet.getInt(alias + ".maxLevel"));
            mr.setRow(resultSet.getInt(alias + ".row"));
            mr.setExp(resultSet.getInt(alias + ".exp"));
            mr.setCrc(resultSet.getLong(alias + ".crc"));
            mr.setExpireDate(FileTimeConverter.fromDbColumn(resultSet.getTimestamp(alias + ".expiredate")));
            mr.setPosition(resultSet.getInt(alias + ".position"));
            mr.setLocked(resultSet.getBoolean(alias + ".locked"));
            mr.setLastSavedHash();
        } catch (SQLException e) {
            e.printStackTrace();
        }

        return mr;
    }

    public void saveOrUpdate(Char chr, Set<MatrixRecord> matrixRecords) {
        if (chr == null) {
            return;
        }

        var batch = new BatchQueryHolder<>();
        for (var mr : new HashSet<>(matrixRecords)) {
            batch.addQueryInfo(createQueryHolder(chr, mr));
        }
        DatabaseManager.executeBatchQuery(batch);
    }

    public Set<MatrixRecord> byChar(Char chr) {
        var objs = DatabaseManager.executeSelect(this, "SELECT * FROM matrix_records mr WHERE charid = ?", "mr", chr.getId());
        Set<MatrixRecord> saveDatas = new HashSet<>();
        for (var obj : objs) {
            if (obj != null) {
                saveDatas.add((MatrixRecord) obj);
            }
        }
        return saveDatas;
    }
}
