package net.swordie.ms.client;

import net.swordie.ms.Server;
import net.swordie.ms.ServerConstants;
import net.swordie.ms.client.anticheat.OffenseManager;
import net.swordie.ms.client.character.Char;
import net.swordie.ms.client.friend.Friend;
import net.swordie.ms.connection.db.converters.FileTimeConverter;
import net.swordie.ms.enums.AccountType;
import net.swordie.ms.enums.PicStatus;
import net.swordie.ms.util.FileTime;
import net.swordie.ms.util.Util;
import net.swordie.ms.world.World;
import net.swordie.orm.dao.AccountDao;
import net.swordie.orm.dao.FriendDao;
import net.swordie.orm.dao.SworDaoFactory;
import net.swordie.orm.dao.UserDao;
import net.swordie.webapi.donation.Donation;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.mindrot.jbcrypt.BCrypt;

import javax.persistence.Convert;
import javax.persistence.Transient;
import java.util.HashSet;
import java.util.Set;

/**
 * A class that represents a User of this system. It is uniquely identified by its username.
 *
 * @author Sjonnie
 * Created on 3/19/2019.
 */
public class User {
    private static final int PASSWORD_RESET_KEY_LENGTH = 10;

    private static final Logger log = LogManager.getLogger();
    private static final AccountDao accountDao = (AccountDao) SworDaoFactory.getByClass(Account.class);
    private static final UserDao userDao = (UserDao) SworDaoFactory.getByClass(User.class);
    private static final FriendDao friendDao = (FriendDao) SworDaoFactory.getByClass(Friend.class);

    private int id;

    private Set<Account> accounts;

    private Set<Friend> friends;

    private OffenseManager offenseManager;

    private String name;
    private String password;
    private String pic;

    private String resetKey;
    private FileTime lastReset;
    private ResetType resetType;

    private AccountType accountType;

    private int votePoints;
    private int donationPoints;
    private int age;
    private int vipGrade;
    private int nBlockReason;
    private byte gender;
    private byte msg2;
    private byte purchaseExp;
    private byte pBlockReason;
    private byte gradeCode;
    private long chatUnblockDate;
    private boolean hasCensoredNxLoginID;
    private String censoredNxLoginID;
    private int characterSlots;
    @Convert(converter = FileTimeConverter.class)
    private FileTime creationDate;
    private int maplePoints;
    private FileTime nextPossibleVoteTime;

    @Convert(converter = FileTimeConverter.class)
    private FileTime banExpireDate = FileTime.fromType(FileTime.Type.ZERO_TIME);
    private String banReason;

    private String email;
    private String registerIp;

    @Transient
    private Char currentChr;
    @Transient
    private Account currentAcc;
    @Transient
    private long lastAliveAck;
    private Client client;
    private boolean inGame;
    private World currentWorld;

    public User() {
    }

    public User(String name) {
        this.name = name;
        this.accountType = AccountType.Player;
        this.creationDate = FileTime.currentTime();
        this.accounts = new HashSet<>();
        this.offenseManager = new OffenseManager(true);
    }

    public static Logger getLog() {
        return log;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public void setPasswordAndHash(String password) {
        setPassword(BCrypt.hashpw(password, BCrypt.gensalt(ServerConstants.BCRYPT_ITERATIONS)));
    }

    public AccountType getAccountType() {
        return accountType;
    }

    public void setAccountType(AccountType accountType) {
        this.accountType = accountType;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public int getVipGrade() {
        return vipGrade;
    }

    public void setVipGrade(int vipGrade) {
        this.vipGrade = vipGrade;
    }

    public int getnBlockReason() {
        return nBlockReason;
    }

    public void setnBlockReason(int nBlockReason) {
        this.nBlockReason = nBlockReason;
    }

    public FileTime getCreationDate() {
        return creationDate;
    }

    public void setCreationDate(FileTime creationDate) {
        this.creationDate = creationDate;
    }

    public Char getCurrentChr() {
        return currentChr;
    }

    public void setCurrentChr(Char currentChr) {
        this.currentChr = currentChr;
    }

    public int getMaplePoints() {
        return maplePoints;
    }

    public void setMaplePoints(int maplePoints) {
        this.maplePoints = maplePoints;
    }


    public void addMaplePoints(int points) {
        int newPoints = getMaplePoints() + points;
        if (newPoints >= 0) {
            setMaplePoints(newPoints);
        }
    }

    public void deductMaplePoints(int points) {
        addMaplePoints(-points);
    }

    public Set<Account> getAccounts() {
        if (accounts == null) {
            accounts = accountDao.getByUserId(getId());
        }

        return accounts;
    }

    public void setAccounts(Set<Account> accounts) {
        this.accounts = accounts;
    }

    public void addAccount(Account account) {
        getAccounts().add(account);
    }

    public FileTime getBanExpireDate() {
        return banExpireDate;
    }

    public void setBanExpireDate(FileTime banExpireDate) {
        this.banExpireDate = banExpireDate;
    }

    public String getBanReason() {
        return banReason;
    }

    public void setBanReason(String banReason) {
        this.banReason = banReason;
    }

    public OffenseManager getOffenseManager() {
        return offenseManager;
    }

    public void setOffenseManager(OffenseManager offenseManager) {
        this.offenseManager = offenseManager;
    }

    public Account getCurrentAcc() {
        return currentAcc;
    }

    public void setCurrentAcc(Account currentAcc) {
        this.currentAcc = currentAcc;
    }

    public void unstuck() {
        unstuck(true);
    }

    public void unstuck(boolean allowRemoveUser) {
        if (!Server.getInstance().isInTransfer(this) && allowRemoveUser) {
            Server.getInstance().removeUser(this);
        }
        userDao.saveOrUpdate(this, null);
    }

    public String getPic() {
        return pic;
    }

    public void setPic(String pic) {
        this.pic = pic;
    }

    public void setPicAndHash(String pic) {
        setPic(BCrypt.hashpw(pic, BCrypt.gensalt(ServerConstants.BCRYPT_ITERATIONS)));
    }

    public PicStatus getPicStatus() {
        PicStatus picStatus;
        String pic = getPic();
        if (pic == null || pic.length() == 0) {
            picStatus = PicStatus.CREATE_PIC;
        } else {
            picStatus = PicStatus.ENTER_PIC;
        }
        return picStatus;
    }

    public byte getGender() {
        return gender;
    }

    public void setGender(byte gender) {
        this.gender = gender;
    }

    public byte getMsg2() {
        return msg2;
    }

    public void setMsg2(byte msg2) {
        this.msg2 = msg2;
    }

    public byte getPurchaseExp() {
        return purchaseExp;
    }

    public void setPurchaseExp(byte purchaseExp) {
        this.purchaseExp = purchaseExp;
    }

    public byte getpBlockReason() {
        return pBlockReason;
    }

    public void setpBlockReason(byte pBlockReason) {
        this.pBlockReason = pBlockReason;
    }

    public byte getGradeCode() {
        return gradeCode;
    }

    public void setGradeCode(byte gradeCode) {
        this.gradeCode = gradeCode;
    }

    public long getChatUnblockDate() {
        return chatUnblockDate;
    }

    public void setChatUnblockDate(long chatUnblockDate) {
        this.chatUnblockDate = chatUnblockDate;
    }

    public boolean hasCensoredNxLoginID() {
        return hasCensoredNxLoginID;
    }

    public void setHasCensoredNxLoginID(boolean hasCensoredNxLoginID) {
        this.hasCensoredNxLoginID = hasCensoredNxLoginID;
    }

    public String getCensoredNxLoginID() {
        return censoredNxLoginID;
    }

    public void setCensoredNxLoginID(String censoredNxLoginID) {
        this.censoredNxLoginID = censoredNxLoginID;
    }

    public int getCharacterSlots() {
        return characterSlots;
    }

    public void setCharacterSlots(int characterSlots) {
        this.characterSlots = characterSlots;
    }

    /**
     * Gets a Char from the any Account by id.
     *
     * @param characterId the Char's id
     * @return the corresponding Char, or null if none exist
     */
    public Char getCharById(int characterId) {
        Char chr = null;
        for (Account acc : getAccounts()) {
            chr = acc.getCharById(characterId);
            if (chr == null) {
                break;
            }
        }
        return chr;
    }

    public boolean hasCharWithId(int characterId) {
        for (Account acc : getAccounts()) {
            if (acc.hasCharacter(characterId)){
                return true;
            }
        }
        return false;
    }

    public Account getAccountByWorldId(int worldId) {
        for (Account account : getAccounts()) {
            if (account.getWorldId() == worldId) {
                return account;
            }
        }
        return null;
    }

    public int getVotePoints() {
        return votePoints;
    }

    public void setVotePoints(int votePoints) {
        this.votePoints = votePoints;
    }

    public int getDonationPoints() {
        return donationPoints;
    }

    public void setDonationPoints(int donationPoints) {
        this.donationPoints = donationPoints;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getEmail() {
        return email;
    }

    public void setRegisterIp(String registerIp) {
        this.registerIp = registerIp;
    }

    public String getRegisterIp() {
        return registerIp;
    }

    public Set<Friend> getFriends() {
        if (friends == null) {
            friends = friendDao.byUser(this);
        }

        return friends;
    }

    public void setFriends(Set<Friend> friends) {
        this.friends = friends;
    }

    public void addFriend(Friend friend) {
        if (getFriendByUserID(friend.getFriendAccountID()) == null) {
            getFriends().add(friend);
        }
    }

    public Friend getFriendByUserID(int accID) {
        return getFriends().stream().filter(f -> f.getFriendAccountID() == accID).findAny().orElse(null);
    }

    public void removeFriend(int accID) {
        removeFriend(getFriendByUserID(accID));
    }

    public void removeFriend(Friend f) {
        if (f != null) {
            getFriends().remove(f);
            friendDao.delete(f);
        }
    }

    public void setLastAliveAck(long lastAliveAck) {
        this.lastAliveAck = lastAliveAck;
    }

    public long getLastAliveAck() {
        return lastAliveAck;
    }

    public boolean isClientDisconnected() {
        return getLastAliveAck() + Client.MAX_UNACKED_PINGS * 10000 < System.currentTimeMillis(); // 1 ping = 10s
    }

    private void addDonationPoints(int points) {
        setDonationPoints(getDonationPoints() + points);
    }

    public void addVotePoints(int points) {
        setVotePoints(getVotePoints() + points);
    }

    public void claimDonation(Donation donation) {
        if (donation.isClaimed()) {
            return;
        }

        donation.setClaimed(true);
        donation.setClaimedUserId(getId());
        addDonationPoints(donation.getDonationPoints() + donation.getDonationPointsBonus());
    }

    public void setNextPossibleVoteTime(FileTime nextPossibleVoteTime) {
        this.nextPossibleVoteTime = nextPossibleVoteTime;
    }

    public FileTime getNextPossibleVoteTime() {
        return nextPossibleVoteTime;
    }

    public boolean canVote() {
        return nextPossibleVoteTime == null || nextPossibleVoteTime.isExpired();
    }

    public boolean isCorrectPassword(String password) {
        var dbPassword = getPassword();
        boolean hashed = Util.isStringBCrypt(dbPassword);
        if (!hashed) {
            setPasswordAndHash(getPassword());
            dbPassword = getPassword();
            userDao.saveOrUpdate(this, null);
        }

        var success = false;
        try {
            success = BCrypt.checkpw(password, dbPassword);
        } catch (IllegalArgumentException e) { // if password hashing went wrong
            log.error(String.format("BCrypt check in login has failed! dbPassword: %s", dbPassword));
            e.printStackTrace();
        }
        return success;
    }

    public void unload() {
        friends = null;
//        accounts = null;
        client = null;
        setInGame(false);
    }

    public String getResetKey() {
        return resetKey;
    }

    public void resetResetKey() {
        this.resetKey = null;
    }

    public void setResetKey() {
        var randKey = "";

        String options = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

        for (int i = 1; i <= PASSWORD_RESET_KEY_LENGTH; i++) {
            options = options.toUpperCase();
            randKey += options.charAt(Util.getRandom(options.length() - 1));
        }

        this.resetKey = randKey;
    }

    public void setResetKey(String resetKey) {
        this.resetKey = resetKey;
    }

    public FileTime getLastReset() {
        return lastReset;
    }

    public void setLastReset(FileTime lastReset) {
        this.lastReset = lastReset;
    }

    public ResetType getResetType() {
        return resetType;
    }

    public void setResetType(ResetType resetType) {
        this.resetType = resetType;
    }

    public void clearResetInfo() {
        setLastReset(null);
        resetResetKey();
        setResetType(null);
    }

    public void setClient(Client client) {
        this.client = client;
    }

    public Client getClient() {
        return client;
    }

    public boolean isPlayer() {
        return getAccountType() == AccountType.Player;
    }

    public void dropClient() {
        if (getClient() != null) {
            getClient().close();
        }
        if (getCurrentChr() != null && getCurrentChr().getClient() != null) {
            getCurrentChr().getClient().close();
        }
    }

    public void setInGame(boolean inGame) {
        this.inGame = inGame;
    }

    public boolean isInGame() {
        return inGame;
    }

    public void setCurrentWorld(World currentWorld) {
        this.currentWorld = currentWorld;
    }

    public World getCurrentWorld() {
        return currentWorld;
    }
}
