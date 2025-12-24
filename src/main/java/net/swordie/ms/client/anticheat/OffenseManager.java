package net.swordie.ms.client.anticheat;

import net.swordie.ms.client.character.Char;
import net.swordie.ms.connection.db.DatabaseManager;
import net.swordie.ms.connection.packet.WvsContext;
import net.swordie.ms.constants.ItemConstants;
import net.swordie.ms.handlers.executors.EventManager;
import net.swordie.ms.util.AntiMacro;
import net.swordie.ms.util.FileTime;
import net.swordie.ms.util.Util;
import net.swordie.orm.dao.OffenseDao;
import net.swordie.orm.dao.SworDaoFactory;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import javax.persistence.Transient;
import java.time.LocalDateTime;
import java.util.HashSet;
import java.util.Set;
import java.util.concurrent.ScheduledFuture;
import java.util.concurrent.TimeUnit;

public class OffenseManager {
    private static final int MIN_TRUST = 1;
    private static final int MAX_TRUST = 200000;
    private static final int TRUST_FOR_RESET = 3000;
    private static final int MAX_LIE_DETECTOR_FAILS = 5;
    private static final int LIE_DETECTOR_COOLDOWN = 30 * 60; // 30 minutes
    private static final long LIE_DETECTOR_RESET_DAYS = 14;

    private static final int LIE_DETECTOR_FIRST_OFFENSE = 30; // 1 day //TODO change this back to 1 once we launch, this is for anti botting manual LD
    private static final int LIE_DETECTOR_SECOND_OFFENSE = 3; // 3 days
    private static final int RUNE_FAIL_FIRST_OFFENSE = 1; // 1 day

    private static final int LOW_TRUST_POINT_FOR_BAN = 7;

    private static final Logger log = LogManager.getLogger();
    private static final OffenseDao offenseDao = (OffenseDao) SworDaoFactory.getByClass(Offense.class);

    private int id;

    private Set<Offense> offenses;

    private int points;
    private int trust;
    @Transient
    private Char chr;

    private int lieDetectorFails;
    private int lieDetectorBans;

    private String lieDetectorAnswer;
    private long nextLieDetectorTime = Long.MIN_VALUE;
    private ScheduledFuture lieDetectorTimer;

    private int[] randArrows;
    private int correctArrows;
    private int lowTrustPoint;

    public OffenseManager(boolean init) {
        if (init) {
            offenses = new HashSet<>();
            trust = (MIN_TRUST + MAX_TRUST) / 2;
        }
    }

    /**
     * Creates a new offense that was detected by the system (i.e., not manual)
     * @param type the type of offense
     * @param msg the description of the offense
     */
    public void addOffense(Offense.Type type, String msg) {
        addOffense(getDefaultOffsense()
                .withMsg(msg)
                .withType(type)
        );
    }

    public void addOffense(Offense.Type type, String msg, boolean addPoints) {
        addOffense(getDefaultOffsense()
                    .withMsg(msg)
                    .withType(type),
                addPoints
        );
    }

    /**
     * Creates a new offense that was detected by the system (i.e., not manual)
     * @param type the type of offense
     * @param msg the description of the offense
     * @param expected expected value
     * @param actual actual value
     */
    public void addOffense(Offense.Type type, String msg, int expected, int actual) {
        msg += String.format(" (expected %d, got %d)", expected, actual);
        addOffense(getDefaultOffsense()
                .withMsg(msg)
                .withType(type)
        );
    }

    /**
     * Adds an offense seen by a game master.
     * @param type the type of offense
     * @param msg the description of the offense
     * @param issuerCharID the game master's char id
     */
    public void addOffense(Offense.Type type, String msg, int issuerCharID) {
        addOffense(getDefaultOffsense()
                .withMsg(msg)
                .withType(type)
                .withIssuerID(issuerCharID)
        );
    }

    /**
     * Adds an offense seen by a game master, with type Manual.
     * @param msg the description of the offense
     * @param issuerCharID the game master's char id
     */
    public void addOffense(String msg, int issuerCharID) {
        addOffense(getDefaultOffsense()
                .withMsg(msg)
                .withIssuerID(issuerCharID)
        );
    }

    /**
     * Adds an offense found by the system with type Editing.
     * @param msg the description of the offense
     */
    public void addOffense(String msg) {
        addOffense(getDefaultOffsense()
                .withMsg(msg)
                .withType(Offense.Type.Editing));
        if(getChr() != null) {
            getChr().dispose();
        }
    }

    /**
     * Adds an offense found by the system with type Editing.
     * @param msg the description of the offense
     */
    public void addOffense(String msg, int expected, int actual) {
        msg += String.format(" (expected %d, got %d)", expected, actual);
        addOffense(msg);
    }

    private Offense getDefaultOffsense() {
        int charId = 0;
        int accId = 0;
        if (chr != null) {
            charId = chr.getId();
            accId = chr.getUserId();
        }

        return new Offense(charId, accId, "", Offense.Type.Manual, FileTime.currentTime(), 0);
    }

    private void addOffense(Offense offense) {
        addOffense(offense, false);
    }

    private void addOffense(Offense offense, boolean addPoints) {
        log.warn(String.format("Added offense: [%s] %s", chr == null ? "Not online" : chr.getName(), offense));
        if (addPoints) {
            addPoints(offense.getType().getPoints());
//            decreaseTrust();
        }
        // TODO do something at certain point intervals (temp ban, mute, idk)
//        getOffenses().add(offense);
    }

    public Set<Offense> getOffenses() {
        if (offenses == null) {
            offenses = offenseDao.byOffenseManager(this);
        }
        return offenses;
    }

    public void setOffenses(Set<Offense> offenses) {
        this.offenses = offenses;
    }

    public Char getChr() {
        return chr;
    }

    public void setChr(Char chr) {
        this.chr = chr;
    }

    public int getPoints() {
        return points;
    }

    public void setPoints(int points) {
        this.points = points;
    }

    public void addPoints(int points) {
        setPoints(getPoints() + points);
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getTrust() {
        return trust;
    }

    public void setTrust(int trust) {
        this.trust = trust;
    }

    public void increaseTrust() {
        var newTrust = getTrust() * 2;
        if (newTrust < MIN_TRUST) {
            newTrust = MIN_TRUST;
        } else if (newTrust > MAX_TRUST) {
            newTrust = MAX_TRUST;
        }
        setTrust(newTrust);
    }

    public void decreaseTrust() {
        var newTrust = getTrust() / 2;
        if (newTrust < MIN_TRUST) {
            newTrust = MIN_TRUST;
        } else if (newTrust > MAX_TRUST) {
            newTrust = MAX_TRUST;
        }

        if (newTrust == MIN_TRUST) {
            addLowTrustPoint();
        } else if (getLowTrustPoint() > 0 && newTrust >= TRUST_FOR_RESET) {
            resetLowTrustPoints();
        }

        setTrust(newTrust);
    }

    private void resetLowTrustPoints() {
        setLowTrustPoint(0);
    }

    private void addLowTrustPoint() {
        setLowTrustPoint(getLowTrustPoint() + 1);
        if (getLowTrustPoint() > LOW_TRUST_POINT_FOR_BAN) {
            setLowTrustPoint(0);
            setTrust(TRUST_FOR_RESET);
//            chr.chatMessage("BAN! At least not right now, we're just testing stuff.");
        }
    }

    public boolean doSampleTest() {
        return Util.getRandom(getTrust() * 100 - 1) <= 0; // inclusive bound, so -1
    }

    public boolean canBeLieDetected() {
        return System.currentTimeMillis() >= getNextLieDetectorTime();
    }

    public int getLieDetectorFails() {
        return lieDetectorFails;
    }

    public void setLowTrustPoint(int lowTrustPoint) {
        this.lowTrustPoint = lowTrustPoint;
    }

    public int getLowTrustPoint() {
        return lowTrustPoint;
    }

    public void setLieDetectorFailsAndApplyBan(int lieDetectorFails, boolean fromRune) {
        if (lieDetectorFails >= MAX_LIE_DETECTOR_FAILS && !isBanned()) {
            LocalDateTime banDate;
            if(fromRune){
                banDate = FileTime.currentTime().toLocalDateTime().plusDays(RUNE_FAIL_FIRST_OFFENSE);
            }
            else{
                banDate = FileTime.currentTime().toLocalDateTime().plusDays(LIE_DETECTOR_FIRST_OFFENSE);
            }
          /*  if (getLieDetectorBans() > 0 && getLastBanTime() != null && getLastBanTime().isAfter(FileTime.currentTime().toLocalDateTime().minusDays(LIE_DETECTOR_RESET_DAYS))) {
                banDate = FileTime.currentTime().toLocalDateTime().plusHours(LIE_DETECTOR_SECOND_OFFENSE);
            }*/
            setLieDetectorFailsAndApplyBan(0, fromRune);
            setLieDetectorBans(getLieDetectorBans() + 1);
            ban("Not responding to anti-macro tests or failing a rune too often.", banDate);
            return;
        }

        setLieDetectorFails(lieDetectorFails);
    }

    public void setLieDetectorFails(int lieDetectorFails) {
        this.lieDetectorFails = lieDetectorFails;
    }

    public boolean isBanned() {
        if (chr == null || getLastBanTime() == null) {
            return false;
        }
        return !getLastBanTime().isExpired();
    }

    public FileTime getLastBanTime() {
        if (chr == null) {
            return FileTime.MAX_TIME();
        }
        return chr.getUser().getBanExpireDate();
    }

    public boolean isDoingLieDetector() {
        return getLieDetectorAnswer() != null && !getLieDetectorAnswer().isEmpty();
    }

    public String getLieDetectorAnswer() {
        return lieDetectorAnswer;
    }

    public void setLieDetectorAnswer(String lieDetectorAnswer) {
        this.lieDetectorAnswer = lieDetectorAnswer;
    }

    public long getNextLieDetectorTime() {
        return nextLieDetectorTime;
    }

    public void setNextLieDetectorTime() {
        setNextLieDetectorTime(LIE_DETECTOR_COOLDOWN);
        lieDetectorTimer = EventManager.addEvent(() -> punishLieDetectorEvasion(true), 1, TimeUnit.MINUTES);
    }

    public void setNextLieDetectorTime(long cooltimeSeconds) {
        this.nextLieDetectorTime = System.currentTimeMillis() + cooltimeSeconds * 1000;
    }

    public int getLieDetectorBans() {
        return lieDetectorBans;
    }

    public void setLieDetectorBans(int lieDetectorBans) {
        this.lieDetectorBans = lieDetectorBans;
    }

    public void punishLieDetectorEvasion(boolean askForNew) {
        if (!askForNew) {
            EventManager.stopTimer(lieDetectorTimer);
        }
        if (isDoingLieDetector() && !isBanned()) {
            failedLieDetector(2, askForNew, false);
        }
    }

    public void failedLieDetector(int points, boolean askForNew, boolean fromRune) {
        // this is also used for runes now

        if (!fromRune) {
            stopLieDetectorTimer();
            setLieDetectorAnswer("");
        }

        setLieDetectorFailsAndApplyBan(getLieDetectorFails() + points, fromRune);


        if (!fromRune) {
            chr.chatMessage("You have failed the Lie Detector test.");
            chr.write(WvsContext.antiMacroResult(null, AntiMacro.AntiMacroResultType.AntiMacroRes_Success,
                    AntiMacro.AntiMacroType.AntiMacroFieldRequest, 0));

            if (getLieDetectorFails() != 0 && askForNew) {
                // == 0 => user has been banned
                chr.sendLieDetector(true);
            }
        }

    }

    public void stopLieDetectorTimer() {
        EventManager.stopTimer(lieDetectorTimer);
        lieDetectorTimer = null;
    }

    public void passedLieDetector() {
        stopLieDetectorTimer();
        setLieDetectorAnswer("");
        setLieDetectorFailsAndApplyBan(0, false);

        chr.write(WvsContext.antiMacroResult(null, AntiMacro.AntiMacroResultType.AntiMacroRes_Success,
                AntiMacro.AntiMacroType.AntiMacroRequestNone, 0));

        var quantity = Util.getRandom(2, 4);
        if (chr.canHold(ItemConstants.SWORDIE_COIN, quantity)) {
            chr.addItemToInventory(ItemConstants.SWORDIE_COIN, quantity);
            chr.chatMessage("You have been given some Swordie Coins as reward for passing the lie detector test! (%d)", quantity);
        } else {
            chr.chatMessage("You don't have enough space for the Swordie Coin reward from passing the lie detector test.");
        }
    }

    private void ban(String reason, LocalDateTime banDate) {
        chr.getUser().setBanExpireDate(FileTime.fromDate(banDate));
        chr.getUser().setBanReason(reason);
        chr.getUser().getOffenseManager().addOffense(reason, chr.getId());
        chr.write(WvsContext.returnToTitle());
    }

    public void setRandArrows(int[] randArrows) {
        this.randArrows = randArrows;
    }

    public int[] getRandArrows() {
        return randArrows;
    }

    public int getCorrectArrows() {
        return correctArrows;
    }

    public void setCorrectArrows(int correctArrows) {
        this.correctArrows = correctArrows;
    }

    public void resetRunestoneInfo() {
        setRandArrows(null);
        setCorrectArrows(0);
    }
}
