package net.swordie.ms.world.field.instance.instancehelper.boss;

import net.swordie.ms.client.character.Char;
import net.swordie.ms.client.character.skills.Option;
import net.swordie.ms.connection.OutPacket;
import net.swordie.ms.connection.packet.UserLocal;
import net.swordie.ms.connection.packet.UserPacket;
import net.swordie.ms.connection.packet.field.FieldPacket;
import net.swordie.ms.constants.BossConstants;
import net.swordie.ms.enums.ChatType;
import net.swordie.ms.enums.ObstacleAtomEnum;
import net.swordie.ms.enums.ProgressMessageColourType;
import net.swordie.ms.enums.ProgressMessageFontType;
import net.swordie.ms.handlers.executors.EventManager;
import net.swordie.ms.handlers.header.OutHeader;
import net.swordie.ms.life.mob.Mob;
import net.swordie.ms.life.mob.MobStat;
import net.swordie.ms.life.mob.skill.MobSkillID;
import net.swordie.ms.loaders.containerclasses.MobSkillInfo;
import net.swordie.ms.util.Position;
import net.swordie.ms.util.Util;
import net.swordie.ms.world.field.ClockPacket;
import net.swordie.ms.world.field.Field;
import net.swordie.ms.world.field.fieldeffect.FieldEffect;
import net.swordie.ms.world.field.instance.Instance;
import net.swordie.ms.world.field.instance.instancehelper.InstanceHelper;

import java.time.LocalDateTime;
import java.time.temporal.ChronoUnit;
import java.util.concurrent.ScheduledFuture;

public class VonBonInstanceHelper extends InstanceHelper {

    private static final int DIMENSION_DURATION = 20000; //ms

    private boolean dimensionCleared = false;
    private ScheduledFuture dimensionTickDamage = null;
    private boolean dimensionActive = false;
    private ScheduledFuture greenClockTimer = null;
    private ScheduledFuture blueClockTimer = null;
    private ScheduledFuture purpleClockTimer = null;
    //Used for dimension clock time left calculation
    private LocalDateTime remainingTime = null;
    private boolean percent10Reached = false;
    private boolean percent40Reached = false;
    private boolean percent75Reached = false;

    @Override
    public void setup(Instance instance) {
        super.setup(instance);
        addTimer(EventManager.addFixedRateEvent(() -> tickCheckClockAA(), 1500, 1500));
    }

    private void tickCheckClockAA() {
        Mob mob = getVonBon();
        if (mob != null) {
            mob.getField().checkMobInAffectedAreas(mob);
        }
    }

    @Override
    public void onMobSkill(Mob mob, MobSkillInfo msi, MobSkillID msId) {
        super.onMobSkill(mob, msi, msId);
        if (msi.getSkillId() == MobSkillID.BreakdownTimezone.getVal()) {
            //Start the countdown
            remainingTime = LocalDateTime.now();
            mob.getField().broadcastPacket(FieldPacket.clock(ClockPacket.timerGauge(DIMENSION_DURATION, DIMENSION_DURATION)));
            //Create the portal
            mob.getField().broadcastPacket(FieldPacket.fieldEffect(FieldEffect.getFieldEffectFromObject("Pt03gate")));
            dimensionCleared = false;
            dimensionActive = true;

            //Spawn Disembodied Von Bon in Von Bon's Realm
            boolean isChaosMode = isChaosMode();
            Field field = isChaosMode ? getInstance().getField(BossConstants.VON_BON_CHAOS_REALM_FIELDID) : getInstance().getField(BossConstants.VON_BON_NORMAL_REALM_FIELDID);
            int disembodiedVonBon = isChaosMode ? BossConstants.VON_BON_CHAOS_DISEMBODIED : BossConstants.VON_BON_NORMAL_DISEMBODIED;
            field.spawnMob(disembodiedVonBon, new Position(412, 245));

            //Tick damage in Von Bon's Realm
            dimensionTickDamage = addTimer(EventManager.addFixedRateEvent(() -> doDimensionTickDamage(), 1000, 1000));
        }
    }

    @Override
    public void onMobDeath(Field field, Mob mob) {
        super.onMobDeath(field, mob);
        if (mob.getTemplateId() == BossConstants.VON_BON_CHAOS_DISEMBODIED || mob.getTemplateId() == BossConstants.VON_BON_NORMAL_DISEMBODIED) {
            if (dimensionTickDamage != null) {
                EventManager.stopTimer(dimensionTickDamage);
            }
            Mob vonBon = getVonBon();
            if (vonBon != null) {
                vonBon.getField().broadcastPacket(FieldPacket.fieldEffect(FieldEffect.getFieldEffectFromObjectDisable("Pt", true)));
            }

            field.broadcastPacket(UserPacket.progressMessageFont(ProgressMessageFontType.Normal, 16, ProgressMessageColourType.Yellow, 2000, "Space-Time Collapse failed! You will return to the real world soon."));
            addTimer(EventManager.addEvent(() -> returnPlayersToMainMap(), 2000));
            dimensionCleared = true;
            dimensionActive = false;
        }
        if (mob.getTemplateId() == BossConstants.VON_BON_CHAOS) {
            EventManager.stopTimer(greenClockTimer);
            EventManager.stopTimer(blueClockTimer);
            EventManager.stopTimer(purpleClockTimer);
        }
    }

    @Override
    public void onWarp(Char chr, Field oldField, Field newField) {
        super.onWarp(chr, oldField, newField);
        if (dimensionActive) {
            int timeBetween = (int) ChronoUnit.SECONDS.between(remainingTime, LocalDateTime.now());
            if (timeBetween < DIMENSION_DURATION) {
                chr.write(FieldPacket.clock(ClockPacket.timerGauge(DIMENSION_DURATION - timeBetween * 1000, DIMENSION_DURATION)));
                if (newField.getId() == BossConstants.VON_BON_NORMAL_FIELDID || newField.getId() == BossConstants.VON_BON_CHAOS_FIELDID) {
                    //Create the portal
                    chr.write(FieldPacket.fieldEffect(FieldEffect.getFieldEffectFromObject("Pt03gate")));
                }
            }
        }
    }

    public boolean canPlayerWarpToDimension(){
        if(dimensionCleared == false && dimensionActive == true){
            return true;
        }
        return false;
    }

    public void onTimerGaugeTimeout(Char chr) {
        if (!dimensionCleared) {

            chr.write(UserLocal.chatMsg(ChatType.SystemNotice, "Time has collapsed, so you cannot survive. Time Collapse ignores revive skills."));
            OutPacket outPacket = new OutPacket(OutHeader.MOB_BREAK_DOWN_TIME_ZONE_TIME_OUT);
            Mob mob = getVonBon();
            if (mob != null) {
                outPacket.encodeInt(mob.getObjectId());
                chr.write(outPacket);
                chr.die();
            }
        }
        Mob mob = getVonBon();
        if (mob != null) {
            mob.getField().broadcastPacket(FieldPacket.fieldEffect(FieldEffect.getFieldEffectFromObjectDisable("Pt", true)));
            OutPacket outPacket = new OutPacket(OutHeader.MOB_BREAK_DOWN_TIME_ZONE_TIME_OUT);
            outPacket.encodeInt(mob.getObjectId());
            mob.getField().broadcastPacket(outPacket);
        }
        if (dimensionTickDamage != null) {
            EventManager.stopTimer(dimensionTickDamage);
        }
    }


    private void returnPlayersToMainMap() {
        boolean isChaosMode = isChaosMode();
        Field field = isChaosMode ? getInstance().getField(BossConstants.VON_BON_CHAOS_REALM_FIELDID) : getInstance().getField(BossConstants.VON_BON_NORMAL_REALM_FIELDID);
        for (Char chr : field.getChars()) {
            chr.warp(isChaosMode ? BossConstants.VON_BON_CHAOS_FIELDID : BossConstants.VON_BON_NORMAL_FIELDID);
        }

        //Stun Von Bon after the fact
        Option o1 = new Option();
        o1.tOption = 5;
        o1.nOption = 1;
        getVonBon().getTemporaryStat().addStatOptionsAndBroadcast(null, MobStat.Stun, o1);
    }

    private void doDimensionTickDamage() {
        Field field = isChaosMode() ? getInstance().getField(BossConstants.VON_BON_CHAOS_REALM_FIELDID) : getInstance().getField(BossConstants.VON_BON_NORMAL_REALM_FIELDID);
        for (Char chr : field.getChars()) {
            int damage = Math.min(chr.getHP(), chr.getMaxHP() / 5);
            if (damage != 0) {
                chr.damage(damage, true);
            }
        }
    }

    private Mob getVonBon() {
        Mob vonBon = getInstance().getField(BossConstants.VON_BON_NORMAL_FIELDID).getMobs().stream().filter(mob -> mob.getTemplateId() == BossConstants.VON_BON_NORMAL).findFirst().orElse(null);
        if (vonBon == null) {
            vonBon = getInstance().getField(BossConstants.VON_BON_CHAOS_FIELDID).getMobs().stream().filter(mob -> mob.getTemplateId() == BossConstants.VON_BON_CHAOS).findFirst().orElse(null);
        }
        return vonBon;
    }

    //Use this with care, it will return normal mode when there is no boss found yet
    public boolean isChaosMode() {
        Mob mob = getVonBon();
        if (mob != null) {
            if (mob.getTemplateId() == BossConstants.VON_BON_CHAOS) {
                return true;
            }
        }
        return false;
    }

    @Override
    public void onMobSpawn(Field field, Mob mob) {
        super.onMobSpawn(field, mob);
        if (mob.getTemplateId() == BossConstants.VON_BON_NORMAL || mob.getTemplateId() == BossConstants.VON_BON_CHAOS) {
            mob.addBlockedSkill(MobSkillID.Teleport, 11);
            mob.addBlockedSkill(MobSkillID.BreakdownTimezone, 1);
            mob.addBlockedSkill(MobSkillID.ReturnTeleport, 1);
            mob.addBlockedAttack(2); //Slam
        }
    }

    @Override
    public void onMobDamaged(Char attacker, Mob mob, long damage, long oldHp, long newHp) {
        Field field = isChaosMode() ? getInstance().getField(BossConstants.VON_BON_CHAOS_FIELDID) : getInstance().getField(BossConstants.VON_BON_NORMAL_FIELDID);
        super.onMobDamaged(attacker, mob, damage, oldHp, newHp);
        if (mob.getTemplateId() != BossConstants.VON_BON_CHAOS && mob.getTemplateId() != BossConstants.VON_BON_NORMAL)
            return;
        if (mob.getHpPerc() <= 75 && !percent75Reached) {
            percent75Reached = true;
            mob.removeBlockedSkill(MobSkillID.ReturnTeleport, 1);
            mob.removeBlockedAttack(2); //Slam
        }

        if (mob.getHpPerc() <= 40 && mob.getTemplateId() == BossConstants.VON_BON_CHAOS && !percent40Reached) {
            percent40Reached = true;
            mob.removeBlockedSkill(MobSkillID.BreakdownTimezone, 1);
        }
        if (mob.getHpPerc() <= 10 && !percent10Reached) {
            percent10Reached = true;
            mob.removeBlockedSkill(MobSkillID.Teleport, 11);
            mob.addBlockedSkill(MobSkillID.AreaTimezone, 1);
            mob.addBlockedSkill(MobSkillID.AreaTimezone, 2);
            mob.addBlockedAttack(0); //Block Whack
            mob.addBlockedAttack(2); //Block Slam
            if (greenClockTimer == null && mob.getTemplateId() == BossConstants.VON_BON_CHAOS) {
                greenClockTimer = EventManager.addFixedRateEvent(() -> field.createObstacleAtom(ObstacleAtomEnum.VonBonGreenClock, 1, BossConstants.VON_BON_GREEN_ATOM_DAMAGE,
                        Util.getRandomInclUpperBound(BossConstants.VON_BON_ATOM_MIN_VELOCITY, BossConstants.VON_BON_ATOM_MAX_VELOCITY), 0, BossConstants.VON_BON_GREEN_ATOM_AMOUNT,
                        BossConstants.VON_BON_GREEN_ATOM_PROP), BossConstants.VON_BON_GREEN_ATOM_EXECUTION_DELAY, BossConstants.VON_BON_GREEN_ATOM_EXECUTION_DELAY);
                addTimer(greenClockTimer);

                blueClockTimer = EventManager.addFixedRateEvent(() -> field.createObstacleAtom(ObstacleAtomEnum.VonBonBlueClock, 1, BossConstants.VON_BON_BLUE_ATOM_DAMAGE,
                        Util.getRandomInclUpperBound(BossConstants.VON_BON_ATOM_MIN_VELOCITY, BossConstants.VON_BON_ATOM_MAX_VELOCITY),0, BossConstants.VON_BON_BLUE_ATOM_AMOUNT,
                        BossConstants.VON_BON_BLUE_ATOM_PROP), BossConstants.VON_BON_BLUE_ATOM_EXECUTION_DELAY, BossConstants.VON_BON_BLUE_ATOM_EXECUTION_DELAY);
                addTimer(blueClockTimer);

                purpleClockTimer = EventManager.addFixedRateEvent(() -> field.createObstacleAtom(ObstacleAtomEnum.VonBonPurpleClock, 1, BossConstants.VON_BON_PURPLE_ATOM_DAMAGE,
                        Util.getRandomInclUpperBound(BossConstants.VON_BON_ATOM_MIN_VELOCITY, BossConstants.VON_BON_ATOM_MAX_VELOCITY),0, BossConstants.VON_BON_PURPLE_ATOM_AMOUNT,
                        BossConstants.VON_BON_PURPLE_ATOM_PROP), BossConstants.VON_BON_PURPLE_ATOM_EXECUTION_DELAY, BossConstants.VON_BON_PURPLE_ATOM_EXECUTION_DELAY);
                addTimer(purpleClockTimer);

            }
        }
    }
}