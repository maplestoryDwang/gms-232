package net.swordie.orm.dao;

import net.swordie.ms.client.Account;
import net.swordie.ms.client.ResetType;
import net.swordie.ms.client.User;
import net.swordie.ms.client.anticheat.OffenseManager;
import net.swordie.ms.client.character.Char;
import net.swordie.ms.client.friend.Friend;
import net.swordie.ms.connection.db.DatabaseManager;
import net.swordie.ms.connection.db.converters.FileTimeConverter;
import net.swordie.ms.enums.AccountType;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class UserDao implements SworDao<User> {
    private static final Logger log = LogManager.getLogger();
    private static final AccountDao accountDao = (AccountDao) SworDaoFactory.getByClass(Account.class);
    private static final FriendDao friendDao = (FriendDao) SworDaoFactory.getByClass(Friend.class);

    private static final OffenseManagerDao offenseManagerDao = (OffenseManagerDao) SworDaoFactory.getByClass(OffenseManager.class);

    public User getByName(String name) {
        var objs = DatabaseManager.executeSelect(this, "SELECT * FROM users u LEFT JOIN offense_managers om ON om.id = u.offensemanager WHERE name = ?", "u", name);
        if (objs.size() > 0) {
            return (User) objs.get(0);
        }
        return null;
    }

    public User getById(int id) {
        var objs = DatabaseManager.executeSelect(this, "SELECT * FROM users u LEFT JOIN offense_managers om ON om.id = u.offensemanager WHERE u.id = ?", "u", id);
        if (objs.size() > 0) {
            return (User) objs.get(0);
        }
        return null;
    }

    public User getByEmail(String email) {
        var objs = DatabaseManager.executeSelect(this, "SELECT * FROM users u LEFT JOIN offense_managers om ON om.id = u.offensemanager WHERE email = ?", "u", email);
        if (objs.size() > 0) {
            return (User) objs.get(0);
        }
        return null;
    }

    public User getByCharname(String charname) {
        var objs = DatabaseManager.executeSelect(this,
                """
                select u.*, om.* from users u
                left join accounts a on a.userid = u.id
                left join characters c on c.accid = a.id
                left join characterstats cs on cs.characterid = c.id
                left join offense_managers om ON om.id = u.offensemanager
                where cs.name = ?;
                """, "u", charname);
        if (objs.size() > 0) {
            return (User) objs.get(0);
        }
        return null;
    }

    public List<User> list() {
        var objs = DatabaseManager.executeSelect(this,
                "SELECT * FROM users u LEFT JOIN offense_managers om ON om.id = u.offensemanager",
                "u");
        List<User> users = new ArrayList<>();
        for (var obj : objs) {
            if (obj != null) {
                users.add((User) obj);
            }
        }
        return users;
    }

    public void saveOrUpdateFriends(User user) {
        friendDao.saveOrUpdate(user, user.getFriends());
    }

    public void saveOrUpdate(User user, Char onlyChar) {
        if (user == null) {
            return;
        }
        boolean needsId = user.getId() == 0;

        // 1 to 1
        offenseManagerDao.saveOrUpdate(user.getOffenseManager());

        String query;
        if (needsId) {
            query = "INSERT INTO users (" +
                "banExpireDate, " +
                "banReason, " +
                "votepoints, " +
                "donationpoints, " +
                "maplePoints, " +
                "name, " +
                "password, " +
                "pic, " +
                "accounttype, " +
                "age, " +
                "vipgrade, " +
                "nblockreason, " +
                "gender, " +
                "msg2, " +
                "purchaseexp, " +
                "pblockreason, " +
                "chatunblockdate, " +
                "hascensorednxloginid, " +
                "gradecode, " +
                "censorednxloginid, " +
                "characterslots, " +
                "creationdate, " +
                "email, " +
                "registerip, " +
                "nextPossibleVoteTime, " +
                "resetKey, " +
                "lastReset, " +
                "resetType, " +
                "offensemanager, " +
                "id " +
                ") VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
        } else {
            query = "UPDATE users " +
                    "SET " +
                    "banExpireDate = ?, " +
                    "banReason = ?, " +
                    "votepoints = ?, " +
                    "donationpoints = ?, " +
                    "maplePoints = ?, " +
                    "name = ?, " +
                    "password = ?, " +
                    "pic = ?, " +
                    "accounttype = ?, " +
                    "age = ?, " +
                    "vipgrade = ?, " +
                    "nblockreason = ?, " +
                    "gender = ?, " +
                    "msg2 = ?, " +
                    "purchaseexp = ?, " +
                    "pblockreason = ?, " +
                    "chatunblockdate = ?, " +
                    "hascensorednxloginid = ?, " +
                    "gradecode = ?, " +
                    "censorednxloginid = ?, " +
                    "characterslots = ?, " +
                    "creationdate = ?, " +
                    "email = ?, " +
                    "registerip = ?, " +
                    "nextPossibleVoteTime = ?, " +
                    "resetKey = ?, " +
                    "lastReset = ?, " +
                    "resetType = ?, " +
                    "offensemanager = ? " +
                    "WHERE ID = ?";
        }
        long id = DatabaseManager.executeQuery(query,
                FileTimeConverter.toDbColumn(user.getBanExpireDate()),
                user.getBanReason(),
                user.getVotePoints(),
                user.getDonationPoints(),
                user.getMaplePoints(),
                user.getName(),
                user.getPassword(),
                user.getPic(),
                user.getAccountType().ordinal(),
                user.getAge(),
                user.getVipGrade(),
                user.getnBlockReason(),
                user.getGender(),
                user.getMsg2(),
                user.getPurchaseExp(),
                user.getpBlockReason(),
                user.getChatUnblockDate(),
                user.hasCensoredNxLoginID(),
                user.getGradeCode(),
                user.getCensoredNxLoginID(),
                user.getCharacterSlots(),
                FileTimeConverter.toDbColumn(user.getCreationDate()),
                user.getEmail(),
                user.getRegisterIp(),
                FileTimeConverter.toDbColumn(user.getNextPossibleVoteTime()),
                user.getResetKey(),
                FileTimeConverter.toDbColumn(user.getLastReset()),
                user.getResetType() == null ? null : user.getResetType().ordinal(),
                user.getOffenseManager().getId(),
                user.getId()
                );

        if (needsId) {
            user.setId((int) id);
        }

        // 1 to *
        accountDao.saveOrUpdate(user, user.getAccounts(), onlyChar);
        friendDao.saveOrUpdate(user, user.getFriends());
    }

    public void delete(User obj) {
        if (obj == null || obj.getId() == 0) {
            log.debug("Trying to delete object " + obj + " that is null or has id 0");
            return;
        }
        DatabaseManager.executeQuery("DELETE FROM users WHERE id = ?", obj.getId());
    }

    public User fromResultSet(ResultSet resultSet, String alias) {
        User user = null;

        try {
            user = new User();
            user.setId(resultSet.getInt(alias + ".id"));
            user.setBanExpireDate(FileTimeConverter.fromDbColumn(resultSet.getTimestamp(alias + ".banExpireDate")));
            user.setBanReason(resultSet.getString(alias + ".banReason"));
            user.setVotePoints(resultSet.getInt(alias + ".votepoints"));
            user.setDonationPoints(resultSet.getInt(alias + ".donationpoints"));
            user.setMaplePoints(resultSet.getInt(alias + ".maplePoints"));
            user.setName(resultSet.getString(alias + ".name"));
            user.setPassword(resultSet.getString(alias + ".password"));
            user.setPic(resultSet.getString(alias + ".pic"));
            user.setAccountType(AccountType.values()[resultSet.getInt(alias + ".accounttype")]);
            user.setAge(resultSet.getInt(alias + ".age"));
            user.setVipGrade(resultSet.getInt(alias + ".vipgrade"));
            user.setnBlockReason(resultSet.getInt(alias + ".nblockreason"));
            user.setGender(resultSet.getByte(alias + ".gender"));
            user.setMsg2(resultSet.getByte(alias + ".msg2"));
            user.setPurchaseExp(resultSet.getByte(alias + ".purchaseexp"));
            user.setpBlockReason(resultSet.getByte(alias + ".pblockreason"));
            user.setChatUnblockDate(resultSet.getLong(alias + ".chatunblockdate"));
            user.setHasCensoredNxLoginID(resultSet.getBoolean(alias + ".hascensorednxloginid"));
            user.setGradeCode(resultSet.getByte(alias + ".gradecode"));
            user.setCensoredNxLoginID(resultSet.getString(alias + ".censorednxloginid"));
            user.setCharacterSlots(resultSet.getInt(alias + ".characterslots"));
            user.setCreationDate(FileTimeConverter.fromDbColumn(resultSet.getTimestamp(alias + ".creationdate")));
            user.setEmail(resultSet.getString(alias + ".email"));
            user.setRegisterIp(resultSet.getString(alias + ".registerip"));
            user.setNextPossibleVoteTime(FileTimeConverter.fromDbColumn(resultSet.getTimestamp(alias + ".nextPossibleVoteTime")));
            user.setResetKey(resultSet.getString(alias + ".resetKey"));
            user.setLastReset(FileTimeConverter.fromDbColumn(resultSet.getTimestamp(alias + ".lastReset")));
            var resetType = resultSet.getInt(alias + ".resetType");
            if (!resultSet.wasNull()) {
                user.setResetType(ResetType.values()[resetType]);
            }

            user.setOffenseManager(offenseManagerDao.fromResultSet(resultSet, "om"));
        } catch (SQLException e) {
            e.printStackTrace();
        }

        return user;
    }

    public void saveProperties(User user) {
        if (user.getId() == 0) {
            saveOrUpdate(user, null);
            return;
        }

        var query = "UPDATE users " +
                "SET " +
                "banExpireDate = ?, " +
                "banReason = ?, " +
                "votepoints = ?, " +
                "donationpoints = ?, " +
                "maplePoints = ?, " +
                "name = ?, " +
                "password = ?, " +
                "pic = ?, " +
                "accounttype = ?, " +
                "age = ?, " +
                "vipgrade = ?, " +
                "nblockreason = ?, " +
                "gender = ?, " +
                "msg2 = ?, " +
                "purchaseexp = ?, " +
                "pblockreason = ?, " +
                "chatunblockdate = ?, " +
                "hascensorednxloginid = ?, " +
                "gradecode = ?, " +
                "censorednxloginid = ?, " +
                "characterslots = ?, " +
                "creationdate = ?, " +
                "email = ?, " +
                "registerip = ?, " +
                "nextPossibleVoteTime = ?, " +
                "resetKey = ?, " +
                "lastReset = ?, " +
                "resetType = ? " +
                "WHERE ID = ?";

        DatabaseManager.executeQuery(query,
                FileTimeConverter.toDbColumn(user.getBanExpireDate()),
                user.getBanReason(),
                user.getVotePoints(),
                user.getDonationPoints(),
                user.getMaplePoints(),
                user.getName(),
                user.getPassword(),
                user.getPic(),
                user.getAccountType().ordinal(),
                user.getAge(),
                user.getVipGrade(),
                user.getnBlockReason(),
                user.getGender(),
                user.getMsg2(),
                user.getPurchaseExp(),
                user.getpBlockReason(),
                user.getChatUnblockDate(),
                user.hasCensoredNxLoginID(),
                user.getGradeCode(),
                user.getCensoredNxLoginID(),
                user.getCharacterSlots(),
                FileTimeConverter.toDbColumn(user.getCreationDate()),
                user.getEmail(),
                user.getRegisterIp(),
                FileTimeConverter.toDbColumn(user.getNextPossibleVoteTime()),
                user.getResetKey(),
                FileTimeConverter.toDbColumn(user.getLastReset()),
                user.getResetType() == null ? null : user.getResetType().ordinal(),
                user.getId()
        );
    }
}
