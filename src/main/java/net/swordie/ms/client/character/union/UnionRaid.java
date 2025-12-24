package net.swordie.ms.client.character.union;

import net.swordie.ms.client.character.Char;
import net.swordie.ms.client.character.skills.Option;
import net.swordie.ms.connection.packet.CUIHandler;
import net.swordie.ms.connection.packet.field.FieldPacket;
import net.swordie.ms.handlers.executors.EventManager;
import net.swordie.ms.life.mob.Mob;
import net.swordie.ms.life.mob.MobStat;
import net.swordie.ms.life.mob.skill.MobSkillID;
import net.swordie.ms.util.Position;
import net.swordie.ms.util.Util;
import net.swordie.ms.world.field.Field;
import net.swordie.ms.world.field.fieldeffect.FieldEffect;

import java.util.Arrays;
import java.util.List;
import java.util.concurrent.ScheduledFuture;

/**
 * Created on 2/24/2020.
 *
 * @author Asura
 */
public class UnionRaid {

    // Fields
    public static final int GRASS_FIELD = 921172000; // Random Field you can enter
    public static final int BATTLE_ARENA = 921172100; // Random Field you can enter
    public static final Position bossPosition = new Position(2350, 17);

    public static final long TOTAL_DAMAGE_DONE_CAP = 99_999_999_999_999L;
    public static final long COIN_PER_DAMAGE = 100_000_000_000L;

    // Bosses
    public static final long BOSS_HP = 400_000_100_000L; // ~200bil
    public static final long SHIELD_HP = 100_000_000_000L; // ~50bil

    public static final List<Integer> bosses = Arrays.asList(
            9833101,
            9833102,
            9833103,
            9833104,
            9833105
    );

    public static final List<Integer> mobs = Arrays.asList(
            9833106,
            9833107,
            9833108,
            9833109,
            9833111,// Golden Wyvern
            9833110 // Flying Dragon
    );

    public static final List<Position> positions = Arrays.asList(
            new Position(1725, -600),
            new Position(1750, -441),
            new Position(1700, -282),
            new Position(1725, -129),
            new Position(1725, 21),
            new Position(2070, 21),
            new Position(2350, 21),
            new Position(2700, 21),
            new Position(3000, 21),
            new Position(3000, -129),
            new Position(3070, -282),
            new Position(2950, -441),
            new Position(3050, -600)
    );


    private int id;
    private long totalDamageDone;
    private int currentBoss;
    private long curShield;
    private long curHp;
    private int unclaimedCoins;
    private ScheduledFuture timer;
    private long lastTime = Util.getCurrentTimeLong();
    private Mob shield;
    private Mob boss;
    private Char chr;


    public UnionRaid() {
    }

    public void enter(Char chr) {
        this.chr = chr;

        if (getCurrentBoss() == 0) { // First time
            initialize();
        }

        // Warp
        chr.getScriptManager().warpInstanceIn(BATTLE_ARENA, 0);
        Field field = chr.getField();

        // Spawn Boss
        if(field.getId() == BATTLE_ARENA) {
            spawnBoss(field, getCurrentBoss(), getCurShield(), getCurHp());
        } else if (chr.getInstance() != null) {
            field =  chr.getInstance().getField(BATTLE_ARENA);
            spawnBoss(field, getCurrentBoss(), getCurShield(), getCurHp());
        }

        updateTotalDamageDone(chr, true);


        // Send Raid Coin Packet
        int coins = getUnclaimedCoins();
        if (coins > 0) {
            field.broadcastPacket(CUIHandler.unionRaidCoin(coins, true));
        }

        // Fixed Event
        if (this.timer != null && !this.timer.isDone()) {
            this.timer.cancel(true);
        }
        Field finalField = field;
        this.timer = EventManager.addFixedRateEvent(() -> updatePer5Seconds(finalField), 400, 5000);
    }

    //Called when player first unlocks their Union
    public void initialize() {
        setLastTime(Util.getCurrentTimeLong());
        int boss = Util.getRandomFromCollection(bosses);
        setCurrentBoss(boss);
        setCurShield(SHIELD_HP);
        setCurHp(BOSS_HP);
    }


    public void retreat() {
        var returnMap = 100000000;
        var field = chr.getField();
        if (field != null && field.getInfo() != null && chr.getField().getInfo().getReturnMap() > 0) {
            returnMap = chr.getField().getInfo().getReturnMap();
        }
        chr.getScriptManager().warpInstanceOut(returnMap, 0);

        updateTotalDamageDone(chr, false);
        playerLeave();
    }

    public void playerLeave() {
        if (getShield() != null) {
            setCurShield(getShield().getHp());
        }
        if (getBoss() != null) {
            setCurHp(getBoss().getHp());
        }
        stopTimer();
        this.chr = null;
    }

    public void stopTimer() {
        if (this.timer != null) {
            this.timer.cancel(true);
        }
    }

    private void updatePer5Seconds(Field field) {
        updateTotalDamageDone(chr, true);

        long displayDmgDone = (boss.getMaxHp() - boss.getHp()) + (shield.getMaxHp() - shield.getHp());

        field.broadcastPacket(FieldPacket.fieldEffect(FieldEffect.mobHPTagFieldEffect(getShield())));
        field.broadcastPacket(CUIHandler.unionRaidDamage(Math.min(TOTAL_DAMAGE_DONE_CAP, displayDmgDone)));
        field.broadcastPacket(FieldPacket.fieldEffect(FieldEffect.mobHPTagFieldEffect(getBoss())));
    }

    public void damageDoneToRaidBoss(Mob mob, long totaldamage, long oldHp, long newHp) {
        boolean died = oldHp > 0 && newHp <= 0;

        if (died) {
            mob.getField().broadcastPacket(CUIHandler.unionRaidBossUpdate(getShield(), getBoss()));
        }

        if (mob.equals(getShield()) && oldHp > 0) {
            if (died) {
                totaldamage = oldHp;
                showShield();
            }
            setCurShield(Math.max(0, getCurShield() - totaldamage));
            mob.setHp(getCurShield());
            addTotalDamageDone(chr, totaldamage); // damage done by chr
        }

        if (getShield().getHp() <= 0 && getBoss().getHp() <= 0) { // Both Dead
            Field field = mob.getField();

            getShield().die(false);
            getBoss().die(false);

            spawnNewBoss(field);
            setTotalDamageDone(0);
        }
    }

    private void spawnNewBoss(Field field) { // when first time entering raid
        spawnBoss(field, Util.getRandomFromCollection(bosses), SHIELD_HP, BOSS_HP);
    }

    private void spawnBoss(Field field, int boss, long shield, long hp) {
        setCurrentBoss(boss);
        setCurShield(shield);
        setCurHp(hp);

        if (field != null) {
            setShield(field.spawnMob(boss, bossPosition.getX(), bossPosition.getY(), false, SHIELD_HP));
            getShield().setHp(getCurShield());
            setBoss(field.spawnMob(getSubBoss(boss), bossPosition.getX(), bossPosition.getY(), false, BOSS_HP));

            if (getShield().getHp() <= 0) {
                showShield();
            }

            field.broadcastPacket(CUIHandler.unionRaidBossUpdate(getShield(), getBoss()));
            field.broadcastPacket(CUIHandler.unionRaidDamage(Math.min(TOTAL_DAMAGE_DONE_CAP, 0)));
        }
    }

    private void showShield() {
        Option o = new Option();
        o.nOption = 1;
        o.rOption = MobSkillID.Invincible.getVal();
        o.slv = 13;
        getShield().getTemporaryStat().addMobSkillOptionsAndBroadCast(MobStat.Unk205_86, o);
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public long getTotalDamageDone() {
        return this.totalDamageDone;
    }

    public void setTotalDamageDone(long totalDamageDone) {
        if (totalDamageDone < 0) {
            totalDamageDone = 0;
        }
        this.totalDamageDone = totalDamageDone;
    }

    public void addTotalDamageDone(Char chr, long totalDamageDone) {
        setTotalDamageDone(getTotalDamageDone() + totalDamageDone);
        int coins = (int) ((getTotalDamageDone() - getTotalDamageDone() % COIN_PER_DAMAGE) / COIN_PER_DAMAGE);
        if (unclaimedCoins + coins >= getUnclaimedCoinCap(chr)) {
            setUnclaimedCoins(getUnclaimedCoinCap(chr));
            setTotalDamageDone(0);
            chr.chatMessage("You have reached the maximimum amount of Unclaimed Legion Coins.");
        } else {

            //Add coins if we did more damage than a coin costs
            if (getTotalDamageDone() > COIN_PER_DAMAGE && coins != 0) {
                addUnclaimedCoins(chr, coins);
                setTotalDamageDone(getTotalDamageDone() - coins * COIN_PER_DAMAGE);
            }
        }
    }

    //Return the lowest of either the damage done since last time or the coin cap.
    //Do this min to prevent damage done from being able to overflow
    public long getUnionDamageDone(Char chr) {
        return Math.min(getUnclaimedCoinCap(chr) * COIN_PER_DAMAGE, (chr.getUnionPower()) * ((Util.getCurrentTimeLong() - getLastTime()) / 1000)); // to sec
    }

    public void updateTotalDamageDone(Char chr, boolean affectBossHP) {
        // Only start counting union damage once the player entered.
        if (getCurrentBoss() > 0) {
            long unionDmgDone = getUnionDamageDone(chr);
            setLastTime(Util.getCurrentTimeLong());

            addTotalDamageDone(chr, unionDmgDone);
            if (affectBossHP) { // damage the boss by how much was done whilst character is not in field
                setCurHp(getCurHp() - unionDmgDone);
                if (boss != null) {
                    boss.setHp(getCurHp());
                }
                if (getCurShield() <= 0 && getCurHp() <= 0) {
                    spawnNewBoss(chr.getField().getId() == BATTLE_ARENA ? chr.getField() : null);
                    setTotalDamageDone(0);
                }
            }
        }
    }

    public int getCurrentBoss() {
        return currentBoss;
    }

    public void setCurrentBoss(int currentBoss) {
        this.currentBoss = currentBoss;
    }

    public long getCurShield() {
        return curShield;
    }

    public void setCurShield(long curShield) {
        this.curShield = Math.max(0, curShield);
    }

    public long getCurHp() {
        return curHp;
    }

    public void setCurHp(long curHp) {
        this.curHp = Math.max(0, curHp);
    }

    public long getLastTime() {
        return lastTime;
    }

    public void setLastTime(long lastTime) {
        this.lastTime = lastTime;
    }

    public Mob getShield() {
        return shield;
    }

    public void setShield(Mob shield) {
        this.shield = shield;
    }

    public Mob getBoss() {
        return boss;
    }

    public void setBoss(Mob boss) {
        this.boss = boss;
    }

    public Char getChr() {
        return chr;
    }

    public void setChr(Char chr) {
        this.chr = chr;
    }

    public static int getSubBoss(int main) {
        return main + 100;
    }

    public int getUnclaimedCoins() {
        return unclaimedCoins;
    }

    public void setUnclaimedCoins(int unclaimedCoins) {
        this.unclaimedCoins = unclaimedCoins;
    }

    public void addUnclaimedCoins(Char chr, int unclaimedCoins) {
        this.unclaimedCoins = Math.min(getUnclaimedCoinCap(chr), Math.max(0, this.unclaimedCoins + unclaimedCoins));

        boolean inField = this.chr != null;

        if (inField) {
            chr.write(CUIHandler.unionRaidCoin(unclaimedCoins, false));
        }
    }

    public static int getUnclaimedCoinCap(Char chr) {
        Union union = chr.getUnion();
        String rankName = union.getUnionRankName();
        if (rankName.contains("Nameless")) {
            return 200;
        } else if (rankName.contains("Renowned")) {
            return 300;
        } else if (rankName.contains("Heroic")) {
            return 500;
        } else if (rankName.contains("Legendary")) {
            return 700;
        } else {
            return 0;
        }
    }
}
