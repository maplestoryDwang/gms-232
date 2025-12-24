package net.swordie.orm.dao;

import net.swordie.ms.client.character.union.Union;
import net.swordie.ms.client.character.union.UnionBoard;
import net.swordie.ms.connection.db.DatabaseManager;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import java.sql.ResultSet;
import java.sql.SQLException;

public class UnionDao implements SworDao<Union> {

    private static final Logger log = LogManager.getLogger();

    private static final UnionBoardDao unionBoardDao = (UnionBoardDao) SworDaoFactory.getByClass(UnionBoard.class);

    public void saveOrUpdate(Union union) {
        if (union == null) {
            return;
        }
        boolean needsId = union.getId() == 0;

        String query;
        if (needsId) {
            query = "INSERT INTO unions(" +
                    "unionCoin, " +
                    "unionRank, " +
                    "presets, " +
                    "activepreset, " +
                    " id " +
                    ") VALUES (?, ?, ?, ?, ?)";
        } else {
            query = "UPDATE unions SET " +
                    "unionCoin = ?," +
                    "unionRank = ?," +
                    "presets = ?," +
                    "activepreset = ?" +
                    " WHERE ID = ?";
        }
        long id = DatabaseManager.executeQuery(query,
                union.getUnionCoin(),
                union.getUnionRank(),
                union.getPresets(),
                union.getActivePreset(),
                union.getId()
        );
        if (needsId) {
            union.setId(id);
        }

        unionBoardDao.saveOrUpdate(union, union.getUnionBoards());
    }

    public void delete(Union union) {
        if (union == null || union.getId() == 0) {
            log.debug("Trying to delete object " + union + " that is null or has id 0");
            return;
        }
        DatabaseManager.executeQuery("DELETE FROM unions WHERE ID = ?", union.getId());
    }


    @Override
    public Union fromResultSet(ResultSet resultSet, String alias) {
        Union union = null;

        try {
            union = new Union();
            union.setId(resultSet.getLong(alias + ".id"));
            union.setUnionCoin(resultSet.getInt(alias + ".unioncoin"));
            union.setUnionRank(resultSet.getInt(alias + ".unionrank"));
            union.setPresets(resultSet.getInt(alias + ".presets"));
            union.setActivePreset(resultSet.getInt(alias + ".activepreset"));
        } catch (SQLException e) {
            e.printStackTrace();
        }

        return union;
    }
}
