package net.swordie.orm.dao;

import net.swordie.ms.client.User;
import net.swordie.ms.client.character.Char;
import net.swordie.ms.client.friend.Friend;
import net.swordie.ms.connection.db.DatabaseManager;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.HashSet;
import java.util.Set;

public class FriendDao implements SworDao<Friend> {

    private static final Logger log = LogManager.getLogger();

    public void saveOrUpdate(Char chr, Friend friend) {
        if (friend == null) {
            return;
        }
        boolean needsId = friend.getId() == 0;

        String query;
        if (needsId) {
            query = "INSERT INTO friends(" +
                    "friendID, " +
                    "name, " +
                    "flag, " +
                    "groupName, " +
                    "mobile, " +
                    "friendAccountID, " +
                    "nickname, " +
                    "memo, " +
                    "ownerid, " +
                    "id " +
                    ") VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
        } else {
            query = "UPDATE friends SET " +
                    "friendID = ?," +
                    "name = ?," +
                    "flag = ?," +
                    "groupName = ?," +
                    "mobile = ?," +
                    "friendAccountID = ?," +
                    "nickname = ?," +
                    "memo = ?," +
                    "ownerid = ?" +
                    " WHERE ID = ?";
        }
        long id = DatabaseManager.executeQuery(query,
                friend.getFriendID(),
                friend.getName(),
                friend.getFlag(),
                friend.getGroup(),
                friend.getMobile(),
                friend.getFriendAccountID(),
                friend.getNickname(),
                friend.getMemo(),
                chr.getId(),
                friend.getId()
        );
        if (needsId) {
            friend.setId((int) id);
        }
    }

    public void saveOrUpdate(Friend friend) {
        if (friend == null) {
            return;
        }
        boolean needsId = friend.getId() == 0;

        String query;
        if (needsId) {
            query = "INSERT INTO friends(" +
                    "friendID, " +
                    "name, " +
                    "flag, " +
                    "groupName, " +
                    "mobile, " +
                    "friendAccountID, " +
                    "nickname, " +
                    "memo, " +
                    "id " +
                    ") VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";
        } else {
            query = "UPDATE friends SET " +
                    "friendID = ?," +
                    "name = ?," +
                    "flag = ?," +
                    "groupName = ?," +
                    "mobile = ?," +
                    "friendAccountID = ?," +
                    "nickname = ?," +
                    "memo = ?" +
                    " WHERE ID = ?";
        }
        long id = DatabaseManager.executeQuery(query,
                friend.getFriendID(),
                friend.getName(),
                friend.getFlag(),
                friend.getGroup(),
                friend.getMobile(),
                friend.getFriendAccountID(),
                friend.getNickname(),
                friend.getMemo(),
                friend.getId()
        );
        if (needsId) {
            friend.setId((int) id);
        }
    }

    public void saveOrUpdate(User user, Friend friend) {
        if (friend == null) {
            return;
        }
        boolean needsId = friend.getId() == 0;

        String query;
        if (needsId) {
            query = "INSERT INTO friends(" +
                    "friendID, " +
                    "name, " +
                    "flag, " +
                    "groupName, " +
                    "mobile, " +
                    "friendAccountID, " +
                    "nickname, " +
                    "memo, " +
                    "owneraccid, " +
                    "id " +
                    ") VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
        } else {
            query = "UPDATE friends SET " +
                    "friendID = ?," +
                    "name = ?," +
                    "flag = ?," +
                    "groupName = ?," +
                    "mobile = ?," +
                    "friendAccountID = ?," +
                    "nickname = ?," +
                    "memo = ?," +
                    "owneraccid = ?" +
                    " WHERE ID = ?";
        }
        long id = DatabaseManager.executeQuery(query,
                friend.getFriendID(),
                friend.getName(),
                friend.getFlag(),
                friend.getGroup(),
                friend.getMobile(),
                friend.getFriendAccountID(),
                friend.getNickname(),
                friend.getMemo(),
                user.getId(),
                friend.getId()
        );
        if (needsId) {
            friend.setId((int) id);
        }
    }

    public void delete(Friend friend) {
        if (friend == null || friend.getId() == 0) {
            log.debug("Trying to delete object " + friend + " that is null or has id 0");
            return;
        }
        DatabaseManager.executeQuery("DELETE FROM friends WHERE ID = ?", friend.getId());
    }


    @Override
    public Friend fromResultSet(ResultSet resultSet, String alias) {
        Friend friend = null;

        try {
            friend = new Friend();
            friend.setId(resultSet.getInt(alias + ".id"));
            friend.setFriendID(resultSet.getInt(alias + ".friendid"));
            friend.setFriendAccountID(resultSet.getInt(alias + ".friendaccountid"));
            friend.setName(resultSet.getString(alias + ".name"));
            friend.setFlag(resultSet.getByte(alias + ".flag"));
            friend.setGroup(resultSet.getString(alias + ".groupname"));
            friend.setMobile(resultSet.getByte(alias + ".mobile"));
            friend.setNickname(resultSet.getString(alias + ".nickname"));
            friend.setMemo(resultSet.getString(alias + ".memo"));
        } catch (SQLException e) {
            e.printStackTrace();
        }

        return friend;
    }

    public void saveOrUpdate(Char chr, Set<Friend> friends) {
        for (var f : new HashSet<>(friends)) {
            saveOrUpdate(chr, f);
        }
    }

    public Set<Friend> byChar(Char chr) {
        var objs = DatabaseManager.executeSelect(this, "SELECT * FROM friends f WHERE ownerid = ?", "f", chr.getId());
        Set<Friend> saveDatas = new HashSet<>();
        for (var obj : objs) {
            if (obj != null) {
                saveDatas.add((Friend) obj);
            }
        }
        return saveDatas;
    }

    public void saveOrUpdate(User user, Set<Friend> friends) {
        for (var f : new HashSet<>(friends)) {
            saveOrUpdate(user, f);
        }
    }

    public Set<Friend> byUser(User user) {
        var objs = DatabaseManager.executeSelect(this, "SELECT * FROM friends f WHERE owneraccid = ?", "f", user.getId());
        Set<Friend> saveDatas = new HashSet<>();
        for (var obj : objs) {
            if (obj != null) {
                saveDatas.add((Friend) obj);
            }
        }
        return saveDatas;
    }
}
