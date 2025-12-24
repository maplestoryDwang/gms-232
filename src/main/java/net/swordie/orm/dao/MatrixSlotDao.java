package net.swordie.orm.dao;

import net.swordie.ms.client.character.Char;
import net.swordie.ms.client.character.skills.vmatrix.MatrixSlot;
import net.swordie.ms.connection.db.BatchQueryHolder;
import net.swordie.ms.connection.db.DatabaseManager;
import net.swordie.ms.connection.db.QueryHolder;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;

public class MatrixSlotDao implements SworDao<MatrixSlot> {

    private static final Logger log = LogManager.getLogger();

    public QueryHolder createQueryHolder(Char chr, MatrixSlot matrixSlot) {
        if (matrixSlot.isClean()) {
            return QueryHolder.clean();
        }
        boolean needsId = matrixSlot.getId() == 0;
        var queryHolder = new QueryHolder<>(matrixSlot, needsId);

        String query;
        if (needsId) {
            query = "INSERT INTO matrix_slots(" +
                    "position, " +
                    "enhancementLv, " +
                    "unlockedByPurchase, " +
                    "charid, " +
                    "id " +
                    ") VALUES (?, ?, ?, ?, ?)";
        } else {
            query = "UPDATE matrix_slots SET " +
                    "position = ?," +
                    "enhancementLv = ?," +
                    "unlockedByPurchase = ?," +
                    "charid = ?" +
                    " WHERE id = ?";
        }

        queryHolder.setQuery(query);
        queryHolder.setArgs(
                matrixSlot.getPosition(),
                matrixSlot.getEnhancementLv(),
                matrixSlot.isUnlockedByPurchase(),
                chr.getId(),
                matrixSlot.getId()
        );

        return queryHolder;
    }

    public void delete(MatrixSlot matrixSlot) {
        if (matrixSlot == null || matrixSlot.getId() == 0) {
            log.debug("Trying to delete object " + matrixSlot + " that is null or has id 0");
            return;
        }
        DatabaseManager.executeQuery("DELETE FROM matrix_slots WHERE ID = ?", matrixSlot.getId());
    }


    @Override
    public MatrixSlot fromResultSet(ResultSet resultSet, String alias) {
        MatrixSlot ms = null;

        try {
            ms = new MatrixSlot();
            ms.setId(resultSet.getLong(alias + ".id"));
            ms.setPosition(resultSet.getInt(alias + ".position"));
            ms.setEnhancementLv(resultSet.getInt(alias + ".enhancementLv"));
            ms.setUnlockedByPurchase(resultSet.getBoolean(alias + ".unlockedByPurchase"));
            ms.setLastSavedHash();
        } catch (SQLException e) {
            e.printStackTrace();
        }

        return ms;
    }

    public synchronized void saveOrUpdate(Char chr, List<MatrixSlot> matrixSlots) {
        var batch = new BatchQueryHolder<>();
        for (var ms : new HashSet<>(matrixSlots)) {
            batch.addQueryInfo(createQueryHolder(chr, ms));
        }
        DatabaseManager.executeBatchQuery(batch);
    }

    public List<MatrixSlot> byChar(Char chr) {
        var objs = DatabaseManager.executeSelect(this, "SELECT * FROM matrix_slots ms WHERE charid = ?", "ms", chr.getId());
        List<MatrixSlot> saveDatas = new ArrayList<>();
        for (var obj : objs) {
            if (obj != null) {
                saveDatas.add((MatrixSlot) obj);
            }
        }
        return saveDatas;
    }
}
