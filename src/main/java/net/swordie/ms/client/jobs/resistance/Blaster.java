package net.swordie.ms.client.jobs.resistance;

import net.swordie.ms.client.Client;
import net.swordie.ms.client.character.Char;
import net.swordie.ms.client.character.info.HitInfo;
import net.swordie.ms.client.character.skills.Option;
import net.swordie.ms.client.character.skills.Skill;
import net.swordie.ms.client.character.skills.debuff.DebuffUtil;
import net.swordie.ms.client.character.skills.info.AttackInfo;
import net.swordie.ms.client.character.skills.info.MobAttackInfo;
import net.swordie.ms.client.character.skills.info.SkillInfo;
import net.swordie.ms.client.character.skills.info.SkillUseInfo;
import net.swordie.ms.client.character.skills.temp.TemporaryStatManager;
import net.swordie.ms.connection.InPacket;
import net.swordie.ms.connection.packet.UserLocal;
import net.swordie.ms.connection.packet.UserPool;
import net.swordie.ms.connection.packet.field.FieldPacket;
import net.swordie.ms.constants.JobConstants;
import net.swordie.ms.handlers.executors.EventManager;
import net.swordie.ms.life.AffectedArea;
import net.swordie.ms.life.mob.MobStat;
import net.swordie.ms.life.mob.MobTemporaryStat;
import net.swordie.ms.loaders.SkillData;
import net.swordie.ms.util.Rect;
import net.swordie.ms.world.field.Field;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.ScheduledFuture;
import java.util.concurrent.TimeUnit;

import static net.swordie.ms.client.character.skills.SkillStat.*;
import static net.swordie.ms.client.character.skills.temp.CharacterTemporaryStat.*;

/**
 * Created on 12/14/2017.
 */
public class Blaster extends Citizen {

    // When Bunker Buster is used,
    /*
    * 477 given, with nOption 1, rOption 37001002
    * dynamoOption 3 (?)
    *
    * 484 given, with nOption 1, rOption 37001002
    * for tTime (7000ms)
    * */

    // Blaster Beginner Skills
    public static final int SECRET_ASSEMBLY = 30001281;



    // Blaster  1st Job
    public static final int DETONATE_H = 37001004;
    public static final int DETONATE_V = 37000005;
    public static final int MAGNUM_PUNCH = 37001000;

    public static final int REVOLVING_CANNON_RELOAD = 37000010;
    public static final int REVOLVING_CANNON_1 = 37000009;
    public static final int REVOLVING_CANNON = 37001001;
    public static final int REVOLVING_CANNON_MASTERY = 37000007;

    public static final int BUNKER_BUSTER_EXPLOSION_3 = 37001002;
    public static final int BUNKER_BUSTER_EXPLOSION_4 = 37000011;
    public static final int BUNKER_BUSTER_EXPLOSION_5 = 37000012;
    public static final int BUNKER_BUSTER_EXPLOSION_6 = 37000013;
    public static final int BLAST_SHIELD = 37000006;



    // Blaster  2nd Job
    public static final int DOUBLE_BLAST = 37101000;
    public static final int ARM_CANNON_BOOST = 37101003;
    public static final int BOBBING = 37101001;
    public static final int BOBBING_ATTACK = 37100002;
    public static final int REVOLVING_CANNON_2 = 37100008;
    public static final int REVOLVING_CANNON_PLUS = 37100007;
    public static final int CHARGE_MASTERY = 37100006;



    // Blaster  3rd Job
    public static final int HAMMER_SMASH = 37111000;
    public static final int HAMMER_SMASH_CHARGE = 37110001;
    public static final int HAMMER_SMASH_AA = 37110002;
    public static final int WEAVING = 37111003;
    public static final int WEAVING_ATTACK = 37110004;
    public static final int REVOLVING_CANNON_PLUS_II = 37110007;
    public static final int SHIELD_TRAINING = 37110008;
    public static final int COMBO_TRAINING = 37110009;



    // Blaster  4th Job
    public static final int REVOLVING_BLAST = 37121004;
    public static final int MAPLE_WARRIOR_BLASTER = 37121006;
    public static final int HEROS_WILL_BLASTER = 37121007;
    public static final int REVOLVING_CANNON_PLUS_III = 37120008;
    public static final int SHIELD_TRAINING_II = 37120009;
    public static final int VITALITY_SHIELD = 37121005;
    public static final int COMBO_TRAINING_II = 37120012;
    public static final int ADV_CHARGE_MASTERY = 37120011;
    public static final int BALLISTIC_HURRICANE = 37121003;

    // Blaster  Hyper
    public static final int FOR_LIBERTY_BLASTER = 37121053;
    public static final int CANNON_OVERDRIVE = 37121054;
    public static final int HYPER_MAGNUM_PUNCH = 37121052;



    // V skills
    public static final int ROCKET_PUNCH = 400011017;
    public static final int ROCKET_PUNCH_EXTRA_SKILL = 400011019;
    public static final int GATLING_PUNCH = 400011028;
    public static final int BULLET_BLAST = 400011091;
    public static final int BULLET_BLAST_2 = 400011103;
    public static final int AFTERIMAGE_SHOCK_1 = 400011116; // Buff
    public static final int AFTERIMAGE_SHOCK_2 = 400011117; // Bonus Attack

    private static final int[] addedSkills = new int[]{
            SECRET_ASSEMBLY,
    };

    private ScheduledFuture blastShieldTimer;
    private int bulletBlastCount = 0;
    private int lastAttack = 0;

    public Blaster(Char chr) {
        super(chr);
        if (isHandlerOfJob(chr.getJob())) {
            for (int id : addedSkills) {
                if (!chr.hasSkill(id)) {
                    Skill skill = SkillData.getSkillDeepCopyById(id);
                    skill.setCurrentLevel(skill.getMasterLevel());
                    chr.addSkill(skill);
                }
            }
            loginAmmo();
        }
    }

    @Override
    public boolean isHandlerOfJob(short id) {
        return JobConstants.isBlaster(id);
    }



    // Attack related methods ------------------------------------------------------------------------------------------

    @Override
    public void handleAttack(Client c, AttackInfo attackInfo) {
        Char chr = c.getChr();
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        Skill skill = chr.getSkill(attackInfo.skillId);
        int skillID = 0;
        SkillInfo si = null;
        boolean hasHitMobs = attackInfo.mobAttackInfo.size() > 0;
        int slv = 0;
        if (skill != null) {
            si = SkillData.getSkillInfoById(skill.getSkillId());
            slv = skill.getCurrentLevel();
            skillID = skill.getSkillId();
        }

        incrementComboTraining(skillID);

        Option o1 = new Option();
        Option o2 = new Option();
        Option o3 = new Option();
        Field field = chr.getField();
        switch (attackInfo.skillId) {
            case REVOLVING_CANNON:
            case REVOLVING_CANNON_1:
            case REVOLVING_CANNON_2:
                useAmmo(skillID, true);
                if (tsm.getOptByCTSAndSkill(Unk199_256, ROCKET_PUNCH) != null) { // TODO
                    registerRocketPunchExtraHit();
                }
                break;
            case DETONATE_H:
            case DETONATE_V:
                useAmmo(skillID, false);
                break;
            case BUNKER_BUSTER_EXPLOSION_3:
            case BUNKER_BUSTER_EXPLOSION_4:
            case BUNKER_BUSTER_EXPLOSION_5:
            case BUNKER_BUSTER_EXPLOSION_6:
                resetDynamoGauge(attackInfo.skillId);
                o1.nOption = 1;
                o1.rOption = attackInfo.skillId;
                o1.tOption = (tsm.hasStat(RWMaximizeCannon) ? 1 : chr.getSkillStatValue(time, BUNKER_BUSTER_EXPLOSION_3));
                tsm.putCharacterStatValue(RWOverHeat, o1);
                tsm.sendSetStatPacket();
                break;
            case HYPER_MAGNUM_PUNCH:
                int nOpt = tsm.hasStat(RWMagnumBlow) ? tsm.getOption(RWMagnumBlow).nOption : 0;
                List<Integer> extraSkillList = new ArrayList<>();
                for (int i = nOpt - 1; i >= 0; i--) {
                    extraSkillList.addAll(si.getExtraSkillInfo().get(i).keySet());
                }
                extraSkillList.add(REVOLVING_CANNON_MASTERY);
                chr.write(FieldPacket.registerExtraSkill(chr, skillID, extraSkillList));
                tsm.removeStatsBySkill(skillID);
                break;
            case BOBBING_ATTACK:
            case WEAVING_ATTACK:
                gainAmmo(skillID, getAmmoReloadedByCharge());
            case BOBBING:
            case WEAVING:
                int realSkillId = attackInfo.skillId;
                if (attackInfo.skillId == BOBBING_ATTACK) {
                    realSkillId = BOBBING;
                } else if (attackInfo.skillId == WEAVING_ATTACK) {
                    realSkillId = WEAVING;
                }
                si = SkillData.getSkillInfoById(realSkillId);
                slv = (byte) chr.getSkillLevel(realSkillId);
                o1.nOption = si.getValue(w, slv);
                o1.rOption = realSkillId;
                o1.tOption = 1500;
                o1.setInMillis(true);
                tsm.putCharacterStatValue(RWMovingEvar, o1);
                tsm.sendSetStatPacket();
                break;
            case REVOLVING_BLAST:
                o1.nOption = 1;
                o1.rOption = skillID;
                o1.tOption = 8;
                for (MobAttackInfo mai : attackInfo.mobAttackInfo) {
                    if (mai.mob == null || mai.mob.isBoss()) {
                        continue;
                    }
                    MobTemporaryStat mts = mai.mob.getTemporaryStat();
                    mts.addMobSkillOptionsAndBroadCast(MobStat.Stun, o1);

                    chr.write(UserPool.rwZeroBunkerMobBind(true, !mai.mobDies, mai.mob));
                }
                break;
            case HAMMER_SMASH_CHARGE:
                gainAmmo(skillID, getAmmoReloadedByCharge());
            case HAMMER_SMASH:
                si = SkillData.getSkillInfoById(HAMMER_SMASH);
                slv = chr.getSkillLevel(HAMMER_SMASH);

                AffectedArea aa = AffectedArea.getPassiveAA(chr, HAMMER_SMASH_AA, slv);
                aa.setDuration(si.getValue(time, slv));
                aa.setDelay((short) 3);
                aa.setPosition(chr.getPosition());
                Rect rect = aa.getPosition().getRectAround(si.getRects().get(0));
                if (!attackInfo.left) {
                    rect = rect.horizontalFlipAround(aa.getPosition().getX());
                }
                aa.setRect(rect);
                field.spawnAffectedAreaAndRemoveOld(aa);

                o1.nOption = si.getValue(x, slv);
                o1.rOption = si.getSkillId();
                o1.tOption = si.getValue(y, slv);

                DebuffUtil.applyDebuffOnMobs(chr, MobStat.Lifting, o1, attackInfo.getMobIds());
                break;
            case HAMMER_SMASH_AA:
                si = SkillData.getSkillInfoById(HAMMER_SMASH);
                slv = chr.getSkillLevel(HAMMER_SMASH);

                o1.nOption = si.getValue(x, slv);
                o1.rOption = si.getSkillId();
                o1.tOption = si.getValue(y, slv);

                DebuffUtil.applyDebuffOnMobs(chr, MobStat.Lifting, o1, attackInfo.getMobIds());
                break;
        }
        super.handleAttack(c, attackInfo);
    }

    public int getAmmoReloadedByCharge() {
        if (chr.hasSkill(ADV_CHARGE_MASTERY)) {
            return chr.getSkillStatValue(w, ADV_CHARGE_MASTERY);
        } else if (chr.hasSkill(CHARGE_MASTERY)) {
            return chr.getSkillStatValue(w, CHARGE_MASTERY);
        }
        return 0;
    }

    public void increaseHyperMagnumPunch(int keydownDurationMS) {
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        Option o = new Option();

        int nOpt = 1;
        if (keydownDurationMS >= 750) {
            nOpt = 2;
        }
        if (keydownDurationMS >= 1780) {
            nOpt = 3;
        }
        if (keydownDurationMS >= 3720) {
            nOpt = 4;
        }

        o.nOption = nOpt;
        o.rOption = HYPER_MAGNUM_PUNCH;
        o.tOption = 5;
        tsm.putCharacterStatValue(RWMagnumBlow, o);
        tsm.sendSetStatPacket();
    }

    private void registerRocketPunchExtraHit() {
        chr.write(UserLocal.userBonusAttackRequest(ROCKET_PUNCH_EXTRA_SKILL));
    }

    public void bulletBlastReloadRequest(int skillId) {
        reloadAmmo(skillId);
    }

    private void loginAmmo() {
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        Option o = new Option();

        o.nOption = 1;
        o.rOption = 1;
        o.bOption = getMaxAmmo();
        o.cOption = getGauge();
        tsm.putCharacterStatValue(RWCylinder, o);
        tsm.sendSetStatPacket();
    }

    private void reloadAmmo() {
        reloadAmmo(REVOLVING_CANNON_RELOAD);
    }

    private void reloadAmmo(int skillId) {
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        Option o = new Option();
        o.nOption = 1;
        o.rOption = skillId;
        o.bOption = getMaxAmmo();
        o.cOption = getGauge();
        tsm.putCharacterStatValue(RWCylinder, o);
        tsm.sendSetStatPacket();
    }

    private void gainAmmo(int skillID, int gainedAmmo) {
        int newAmmo = Math.max(0, Math.min(gainedAmmo + getAmmo(), getMaxAmmo()));
        int newDynamo = getGauge();

        setRWCylinder(skillID, newAmmo, newDynamo);
    }

    private void useAmmo(int skillID, boolean incDynamo) {
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        if (tsm.hasStat(RWOverHeat)) {
            incDynamo = false;
        }
        int newAmmo = Math.max((getAmmo() - 1), 0);
        int newDynamo = incDynamo ? (Math.min(getGauge() + 1, getMaxAmmo())) : getGauge();

        setRWCylinder(skillID, newAmmo, newDynamo);
    }

    private void setRWCylinder(int skillID, int ammo, int dynamo) {
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        Option o = new Option();

        o.nOption = 1;
        o.rOption = skillID;
        o.bOption = Math.max(0, Math.min(ammo, getMaxAmmo()));
        o.cOption = Math.max(0, Math.min(dynamo, getMaxAmmo()));
        o.xOption = 1;
        tsm.putCharacterStatValue(RWCylinder, o);
        tsm.sendSetStatPacket();

        if (getAmmo() <= 0 && skillID != BULLET_BLAST_2) {
            EventManager.addEvent((Runnable) this::reloadAmmo, 250, TimeUnit.MILLISECONDS);
        }
    }

    private void resetDynamoGauge(int skillID) {
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        Option o = new Option();
        o.nOption = 1;
        o.rOption = skillID;
        o.bOption = getAmmo();
        o.cOption = 0;
        tsm.putCharacterStatValue(RWCylinder, o);
        tsm.sendSetStatPacket();
    }

    private int getAmmo() {
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        if (tsm.hasStat(RWCylinder)) {
            return tsm.getOption(RWCylinder).bOption;
        }
        return 0;
    }

    private int getGauge() {
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        if (tsm.hasStat(RWCylinder)) {
            return tsm.getOption(RWCylinder).cOption;
        }
        return 0;
    }

    private int getMaxAmmo() {
        int maxAmmo = 3;
        if (chr.hasSkill(REVOLVING_CANNON_PLUS)) {
            maxAmmo = 4;
        }
        if (chr.hasSkill(REVOLVING_CANNON_PLUS_II)) {
            maxAmmo = 5;
        }
        if (chr.hasSkill(REVOLVING_CANNON_PLUS_III)) {
            maxAmmo = 6;
        }
        return maxAmmo;
    }

    private void incrementComboTraining(int skillId) {
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        if (chr.hasSkillOnCooldown(COMBO_TRAINING) || SkillData.getSkillInfoById(skillId) == null || SkillData.getSkillInfoById(skillId).isInvisible() || getComboTrainingSkill() == null) {
            return;
        }
        Option o = new Option();
        Option o1 = new Option();
        Option o2 = new Option();
        Skill skill = getComboTrainingSkill();
        SkillInfo si = SkillData.getSkillInfoById(skill.getSkillId());
        byte slv = (byte) chr.getSkillLevel(skill.getSkillId());
        int amount = 1;
        if (tsm.hasStat(RWCombination)) {
            if (skillId != GATLING_PUNCH && lastAttack == skillId) {
                return;
            }
            amount = tsm.getOption(RWCombination).nOption;
            if (amount < si.getValue(x, slv)) {
                amount++;
            }
        }
        lastAttack = skillId;
        o.nOption = amount;
        o.rOption = COMBO_TRAINING;
        o.tOption = si.getValue(time, slv);
        tsm.putCharacterStatValue(RWCombination, o);
        if (skill.getSkillId() == COMBO_TRAINING_II) {
            o1.nOption = si.getValue(q, slv) * amount;
            o1.rOption = COMBO_TRAINING;
            o1.tOption = si.getValue(time, slv);
            tsm.putCharacterStatValue(IndieCr, o1);
        }
        if (amount >= si.getValue(w, slv)) {
            o2.nOption = -1;
            o2.rOption = COMBO_TRAINING;
            o2.tOption = si.getValue(time, slv);
            tsm.putCharacterStatValue(IndieBooster, o2);
        }
        tsm.sendSetStatPacket();
        chr.addSkillCoolTime(COMBO_TRAINING, 300);
    }

    private Skill getComboTrainingSkill() {
        Skill skill = null;
        if (chr.hasSkill(COMBO_TRAINING)) {
            skill = chr.getSkill(COMBO_TRAINING);
        }
        if (chr.hasSkill(COMBO_TRAINING_II)) {
            skill = chr.getSkill(COMBO_TRAINING_II);
        }
        return skill;
    }

    @Override
    public void handleKeyDownSkill(Char chr, int skillID, InPacket inPacket) {
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        Option o = new Option();
        if (skillID == HYPER_MAGNUM_PUNCH) {
            o.nOption = 1;
            o.rOption = skillID;
            o.tOption = 5;
            tsm.putCharacterStatValue(RWMagnumBlow, o, true);
            tsm.sendSetStatPacket();
        }
        super.handleKeyDownSkill(chr, skillID, inPacket);
    }

    @Override
    public void handleCancelKeyDownSkill(Char chr, int skillID) {
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        Option o = new Option();
        if (skillID == BULLET_BLAST) {
            o.nOption = 1;
            o.rOption = skillID;
            o.tOption = 3700;
            o.setInMillis(true);
            tsm.putCharacterStatValue(NotDamaged, o, true);
            tsm.sendSetStatPacket();
        }
        super.handleCancelKeyDownSkill(chr, skillID);
    }


    // Skill related methods -------------------------------------------------------------------------------------------

    @Override
    public void handleSkill(Char chr, TemporaryStatManager tsm, int skillId, int slv, InPacket inPacket, SkillUseInfo skillUseInfo) {
        super.handleSkill(chr, tsm, skillId, slv, inPacket, skillUseInfo);
        Skill skill = chr.getSkill(skillId);
        SkillInfo si = null;
        if (skill != null) {
            si = SkillData.getSkillInfoById(skillId);
        }
        Option o1 = new Option();
        switch (skillId) {
            case REVOLVING_CANNON_RELOAD:
                reloadAmmo();
                break;
            case ARM_CANNON_BOOST:
                o1.nOption = si.getValue(x, slv);
                o1.rOption = skillId;
                o1.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(IndieBooster, o1);
                break;
            case FOR_LIBERTY_BLASTER:
                o1.rOption = skillId;
                o1.nOption = si.getValue(indieDamR, slv);
                o1.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(IndieDamR, o1);
                break;
            case CANNON_OVERDRIVE:
                o1.nOption = 1;
                o1.rOption = skillId;
                o1.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(RWMaximizeCannon, o1);
                break;
            case VITALITY_SHIELD:
                if (!tsm.hasStat(RWBarrier)) {
                    return;
                }
                int dissipatedShield = tsm.getOption(RWBarrier).xOption - tsm.getOption(RWBarrier).nOption;
                chr.heal(dissipatedShield + (int) (chr.getMaxHP() * si.getValue(x, slv) / 100F));

                tsm.removeStat(RWBarrier);
                o1.nOption = 1;
                o1.rOption = skillId;
                o1.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(RWBarrierHeal, o1, true);
                break;
            case ROCKET_PUNCH:
                o1.nOption = 1;
                o1.rOption = skillId;
                o1.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(Unk199_256, o1); // TODO
                break;
            case BULLET_BLAST_2:
                useAmmo(skillId, true);
                incBulletBlastCount();
                break;
            case AFTERIMAGE_SHOCK_1:
                o1.nOption = 1;
                o1.rOption = skillId;
                o1.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(DrainingAura, o1);
                break;
        }
        tsm.sendSetStatPacket();
    }

    private void incBulletBlastCount() {
        int newBulletBlastCount = Math.max(0, (Math.min(6, this.bulletBlastCount + 1)));
        this.bulletBlastCount = newBulletBlastCount;
    }

    private void resetBulletBlastCount() {
        this.bulletBlastCount = 0;
    }


    // Hit related methods ---------------------------------------------------------------------------------------------

    @Override
    public void handleHit(Client c, InPacket inPacket, HitInfo hitInfo) {
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        if (hitInfo.hpDamage > 0 && chr.hasSkill(BLAST_SHIELD) && !tsm.hasStat(RWBarrier)) {
            generateBlastShield(hitInfo.hpDamage);
        }
        super.handleHit(c, inPacket, hitInfo);
    }

    private Skill getBlastShieldSkill() {
        Skill skill = null;
        if (chr.hasSkill(BLAST_SHIELD)) {
            skill = chr.getSkill(BLAST_SHIELD);
        }
        if (chr.hasSkill(SHIELD_TRAINING)) {
            skill = chr.getSkill(SHIELD_TRAINING);
        }
        if (chr.hasSkill(SHIELD_TRAINING_II)) {
            skill = chr.getSkill(SHIELD_TRAINING_II);
        }
        return skill;
    }

    private void generateBlastShield(int hpDmg) {
        TemporaryStatManager tsm = chr.getTemporaryStatManager();

        Option o = new Option();
        Option o1 = new Option();
        Skill skill = getBlastShieldSkill();
        SkillInfo si = SkillData.getSkillInfoById(skill.getSkillId());
        byte slv = (byte) skill.getCurrentLevel();

        o.nOption = (int) ((si.getValue(x, slv) * hpDmg) / 100F);
        o.rOption = BLAST_SHIELD;
        o.xOption = (int) ((si.getValue(x, slv) * hpDmg) / 100F);
        tsm.putCharacterStatValue(RWBarrier, o, true);
        o1.rOption = BLAST_SHIELD;
        o1.nOption = 100;
        tsm.putCharacterStatValue(IndieStance, o1, true);
        tsm.sendSetStatPacket();
        EventManager.stopTimer(blastShieldTimer);
        blastShieldTimer = EventManager.addEvent(this::diminishBlastShield, 5, TimeUnit.SECONDS);
    }

    private void diminishBlastShield() {
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        if (!tsm.hasStat(RWBarrier)) {
            return;
        }
        Option o = new Option();
        Option o1 = new Option();
        Skill skill = getBlastShieldSkill();
        SkillInfo si = SkillData.getSkillInfoById(skill.getSkillId());
        byte slv = (byte) skill.getCurrentLevel();
        int curShieldStrength = tsm.getOption(RWBarrier).nOption;
        int newShieldStrength = (int) (curShieldStrength * si.getValue(y, slv) / 100F) - si.getValue(z, slv);
        if (newShieldStrength <= 0) {
            tsm.removeStatsBySkill(BLAST_SHIELD);
            return;
        }
        o.nOption = newShieldStrength;
        o.rOption = BLAST_SHIELD;
        tsm.putCharacterStatValue(RWBarrier, o, true);
        o1.rOption = BLAST_SHIELD;
        o1.nOption = 100;
        tsm.putCharacterStatValue(IndieStance, o1, true);
        tsm.sendSetStatPacket();
        EventManager.stopTimer(blastShieldTimer);
        blastShieldTimer = EventManager.addEvent(this::diminishBlastShield, 5, TimeUnit.SECONDS);
    }

    @Override
    public void stopTimers() {
        EventManager.stopTimer(blastShieldTimer);
        super.stopTimers();
    }
}
