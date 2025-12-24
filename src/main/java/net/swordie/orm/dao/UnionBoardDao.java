package net.swordie.orm.dao;

import net.swordie.ms.client.character.union.Union;
import net.swordie.ms.client.character.union.UnionBoard;
import net.swordie.ms.client.character.union.UnionMember;
import net.swordie.ms.connection.db.DatabaseManager;
import net.swordie.ms.connection.db.converters.InlinedIntArrayConverter;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;

public class UnionBoardDao implements SworDao<UnionBoard> {

    private static final Logger log = LogManager.getLogger();

    private static final UnionMemberDao unionMemberDao = (UnionMemberDao) SworDaoFactory.getByClass(UnionMember.class);

    public void saveOrUpdate(Union union, UnionBoard unionBoard) {
        if (unionBoard == null) {
            return;
        }
        boolean needsId = unionBoard.getId() == 0;

        String query;
        if (needsId) {
            query = "INSERT INTO unionboards(" +
                    "unionPower, " +
                    "unionDamage, " +
                    "synergyGrid, " +
                    "unionid, " +
                    "id " +
                    ") VALUES (?, ?, ?, ?, ?)";
        }
        else {
            query = "UPDATE unionboards SET " +
                    "unionPower = ?," +
                    "unionDamage = ?," +
                    "synergyGrid = ?," +
                    "unionid = ?" +
                    " WHERE ID = ?";
        }
        long id = DatabaseManager.executeQuery(query,
                unionBoard.getUnionPower(),
                unionBoard.getUnionDamage(),
                InlinedIntArrayConverter.toDbColumn(unionBoard.getSynergyGrid()),
                union.getId(),
                unionBoard.getId()
        );
        if (needsId) {
            unionBoard.setId(id);
        }

        if (unionBoard.isActiveMembersLoaded()) {
            // No need to save unloaded members (this would just load > save immediately)
            unionMemberDao.saveOrUpdate(unionBoard, unionBoard.getActiveMembers());
        }
    }

    public void delete(UnionBoard unionBoard) {
        if (unionBoard == null || unionBoard.getId() == 0) {
            log.debug("Trying to delete object " + unionBoard + " that is null or has id 0");
            return;
        }
        DatabaseManager.executeQuery("DELETE FROM unionboards WHERE ID = ?", unionBoard.getId());
    }



    @Override
    public UnionBoard fromResultSet(ResultSet resultSet, String alias) {
        UnionBoard unionBoard = null;

        try {
            unionBoard = new UnionBoard(false);
            unionBoard.setId(resultSet.getLong(alias + ".id"));
            unionBoard.setUnionPower(resultSet.getInt(alias + ".unionpower"));
            unionBoard.setUnionDamage(resultSet.getLong(alias + ".uniondamage"));
            unionBoard.setSynergyGrid(InlinedIntArrayConverter.fromDbColumn(resultSet.getString(alias + ".synergyGrid")));
        } catch (SQLException e) {
            e.printStackTrace();
        }

        return unionBoard;
    }

    public List<UnionBoard> byUnion(Union union) {
        var objs = DatabaseManager.executeSelect(this, "SELECT * FROM unionboards ub WHERE unionid = ? ORDER BY ub.id", "ub", union.getId());
        List<UnionBoard> ret = new ArrayList<>();
        for (var obj : objs) {
            if (obj != null) {
                ret.add((UnionBoard) obj);
            }
        }
        return ret;
    }

    public void saveOrUpdate(Union union, List<UnionBoard> unionBoards) {
        for (var ub : new HashSet<>(unionBoards)) {
            saveOrUpdate(union, ub);
        }
    }
}
