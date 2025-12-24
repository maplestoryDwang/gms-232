package net.swordie.orm.dao;

import net.swordie.ms.client.character.union.UnionBoard;
import net.swordie.ms.client.character.union.UnionMember;
import net.swordie.ms.connection.db.DatabaseManager;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.HashSet;
import java.util.Set;

public class UnionMemberDao implements SworDao<UnionMember> {

    private static final Logger log = LogManager.getLogger();

    public void saveOrUpdate(UnionBoard unionBoard, UnionMember unionMember) {
        if (unionMember == null) {
            return;
        }
        boolean needsId = unionMember.getId() == 0;

        String query;
        if (needsId) {
            query = "INSERT INTO unionmembers(" +
                    "type, " +
                    "charid, " +
                    "mobileName, " +
                    "gridPos, " +
                    "gridRotation, " +
                    "unionboardid, " +
                    "id " +
                    ") VALUES (?, ?, ?, ?, ?, ?, ?)";
        } else {
            query = "UPDATE unionmembers SET " +
                    "type = ?," +
                    "charid = ?," +
                    "mobileName = ?," +
                    "gridPos = ?," +
                    "gridRotation = ?," +
                    "unionboardid = ?" +
                    " WHERE ID = ?";
        }
        long id = DatabaseManager.executeQuery(query,
                unionMember.getType(),
                unionMember.getCharId(),
                unionMember.getMobileName(),
                unionMember.getGridPos(),
                unionMember.getGridRotation(),
                unionBoard.getId(),
                unionMember.getId()
        );
        if (needsId) {
            unionMember.setId(id);
        }
    }

    public void delete(UnionMember unionMember) {
        if (unionMember == null || unionMember.getId() == 0) {
            log.debug("Trying to delete object " + unionMember + " that is null or has id 0");
            return;
        }
        DatabaseManager.executeQuery("DELETE FROM unionmembers WHERE ID = ?", unionMember.getId());
    }

    public void deleteByUnionBoard(UnionBoard unionBoard) {
        if (unionBoard == null || unionBoard.getId() == 0) {
            log.debug("Trying to delete object " + unionBoard + " that is null or has id 0");
            return;
        }
        DatabaseManager.executeQuery("DELETE FROM unionmembers WHERE unionboardid = ?;", unionBoard.getId());
    }

    @Override
    public UnionMember fromResultSet(ResultSet resultSet, String alias) {
        UnionMember unionMember = null;

        try {
            unionMember = new UnionMember();
            unionMember.setId(resultSet.getLong(alias + ".id"));
            unionMember.setType(resultSet.getInt(alias + ".type"));
            unionMember.setGridPos(resultSet.getInt(alias + ".gridpos"));
            unionMember.setGridRotation(resultSet.getInt(alias + ".gridrotation"));
            unionMember.setCharId(resultSet.getInt(alias + ".charid"));
        } catch (SQLException e) {
            e.printStackTrace();
        }

        return unionMember;
    }

    public Set<UnionMember> byUnionBoard(UnionBoard unionBoard) {
        var objs = DatabaseManager.executeSelect(this, "SELECT * FROM unionmembers um WHERE unionboardid = ?", "um", unionBoard.getId());
        Set<UnionMember> saveDatas = new HashSet<>();
        for (var obj : objs) {
            if (obj != null) {
                saveDatas.add((UnionMember) obj);
            }
        }
        return saveDatas;
    }

    public void saveOrUpdate(UnionBoard unionBoard, Set<UnionMember> activeMembers) {
        deleteByUnionBoard(unionBoard); // When saving/updating, all previous members must be removed, and new members are inserted
        for (var mem : new HashSet<>(activeMembers)) {
            mem.setId(0); // force Insert, as all members are deleted
            saveOrUpdate(unionBoard, mem);
        }
    }
}
