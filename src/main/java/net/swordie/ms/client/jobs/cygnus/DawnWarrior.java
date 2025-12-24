package net.swordie.ms.client.jobs.cygnus;

import net.swordie.ms.client.Client;
import net.swordie.ms.client.character.Char;
import net.swordie.ms.client.character.skills.Option;
import net.swordie.ms.client.character.skills.Skill;
import net.swordie.ms.client.character.skills.SkillStat;
import net.swordie.ms.client.character.skills.info.AttackInfo;
import net.swordie.ms.client.character.skills.info.MobAttackInfo;
import net.swordie.ms.client.character.skills.info.SkillInfo;
import net.swordie.ms.client.character.skills.info.SkillUseInfo;
import net.swordie.ms.client.character.skills.temp.CharacterTemporaryStat;
import net.swordie.ms.client.character.skills.temp.TemporaryStatManager;
import net.swordie.ms.connection.InPacket;
import net.swordie.ms.connection.packet.Summoned;
import net.swordie.ms.connection.packet.UserLocal;
import net.swordie.ms.constants.JobConstants;
import net.swordie.ms.enums.MoveAbility;
import net.swordie.ms.handlers.executors.EventManager;
import net.swordie.ms.life.Life;
import net.swordie.ms.life.Summon;
import net.swordie.ms.life.mob.Mob;
import net.swordie.ms.life.mob.MobStat;
import net.swordie.ms.life.mob.MobTemporaryStat;
import net.swordie.ms.loaders.SkillData;
import net.swordie.ms.util.Position;
import net.swordie.ms.util.Rect;
import net.swordie.ms.util.Util;
import net.swordie.ms.world.field.Field;

import java.util.HashMap;
import java.util.concurrent.ScheduledFuture;
import java.util.concurrent.TimeUnit;

import static net.swordie.ms.client.character.skills.SkillStat.*;
import static net.swordie.ms.client.character.skills.temp.CharacterTemporaryStat.*;

/**
 * Created on 12/14/2017.
 */
public class DawnWarrior extends Noblesse {

    public static final int ELEMENTAL_HARMONY_STR = 10000246;

    public static final int SOUL_ELEMENT = 11001022; //Buff  (Immobility Debuff)

    public static final int SOUL_SPEED = 11101024; //Buff
    public static final int FALLING_MOON = 11101022; //Buff (Unlimited Duration)

    public static final int RISING_SUN = 11111022; //Buff (Unlimited Duration)
    public static final int TRUE_SIGHT = 11111023; //Buff (Mob Def Debuff & Final DmgUp Debuff)
    public static final int TRUE_SIGHT_PERSIST = 11120043;
    public static final int TRUE_SIGHT_GUARDBREAK = 11120045;
    public static final int TRUE_SIGHT_ENHANCE = 11120044;
    public static final int WILL_OF_STEEL = 11110025;

    public static final int EQUINOX_CYCLE = 11121005; //Buff
    public static final int EQUINOX_CYCLE_MOON = 11121011;
    public static final int EQUINOX_CYCLE_SUN = 11121012;
    public static final int IMPALING_RAYS = 11121004; //Special Attack (Incapacitate Debuff)
    public static final int IMPALING_RAYS_EXPLOSION = 11121013;
    public static final int CALL_OF_CYGNUS_DW = 11121000; //Buff
    public static final int MASTER_OF_THE_SWORD = 11120009;
    public static final int EQUINOX_SLASH = 11121014;

    public static final int STYX_CROSSING_KEYDOWN = 11121052;
    public static final int STYX_CROSSING = 11121055;
    public static final int STYX_CROSSING_2 = 11121056;
    public static final int SOUL_FORGE = 11121054;
    public static final int GLORY_OF_THE_GUARDIANS_DW = 11121053;

    // V Skills
    public static final int CELESTIAL_DANCE = 400011005;
    public static final int CELESTIAL_DANCE_MOON = 400011022;
    public static final int CELESTIAL_DANCE_SUN = 400011023;
    public static final int RIFT_OF_DAMNATION = 400011055;
    public static final int RIFT_OF_DAMNATION_ATTACK = 400011056;
    public static final int RIFT_OF_DAMNATION_SUMMON = 400011065;
    public static final int SOUL_ECLIPSE = 400011088;
    public static final int SOUL_ECLIPSE_BREAK = 400011089;

    public static final int FLARE_SLASH_SUN = 400011048;
    public static final int FLARE_SLASH_MOON = 400011049;


    private static final int[] addedSkills = new int[]{
            ELEMENTAL_HARMONY_STR,
            CALL_OF_CYGNUS_DW
    };

    private ScheduledFuture willOfSteelTimer;

    public DawnWarrior(Char chr) {
        super(chr);
        if (isHandlerOfJob(chr.getJob())) {
            for (int id : addedSkills) {
                if (!chr.hasSkill(id) || chr.getSkill(id).getCurrentLevel() == 0) {
                    Skill skill = SkillData.getSkillDeepCopyById(id);
                    skill.setCurrentLevel(skill.getMasterLevel());
                    chr.addSkill(skill);
                }
            }
            startWillOfSteel(chr);
        }
    }

    private void startWillOfSteel(Char chr) {
        if (!chr.hasSkill(WILL_OF_STEEL)) {
            return;
        }

        var interval = 5;
        var si = SkillData.getSkillInfoById(WILL_OF_STEEL);
        if (si != null && chr.hasSkill(WILL_OF_STEEL) && chr != null && chr.getField() != null) {
            var skill = chr.getSkill(WILL_OF_STEEL);
            var slv = skill.getCurrentLevel();
            interval = si.getValue(w, slv);
        }

        EventManager.stopTimer(willOfSteelTimer);
        if (interval > 0) {
            willOfSteelTimer = EventManager.addFixedRateEvent(this::willOfSteel, interval, interval, TimeUnit.SECONDS);
        }
    }

    @Override
    public boolean isHandlerOfJob(short id) {
        return JobConstants.isDawnWarrior(id);
    }


    private void willOfSteel() {
        if (chr.hasSkill(WILL_OF_STEEL) && chr != null && chr.getField() != null) {
            Skill skill = chr.getSkill(WILL_OF_STEEL);
            int slv = skill.getCurrentLevel();
            SkillInfo si = SkillData.getSkillInfoById(skill.getSkillId());
            int heal = (int) ((double) (chr.getMaxHP() * si.getValue(y, slv)) / 100F);

            chr.heal(heal, true, false);
        } else if (willOfSteelTimer != null) {
            willOfSteelTimer.cancel(true);
        }
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
            slv = (byte) skill.getCurrentLevel();
            skillID = skill.getSkillId();
        }

        // Soul Master
        if (tsm.hasStat(SoulMasterFinal)) {
            applySoulElementOnMob(attackInfo, slv);
        }

        // Celestial Dance
        if (tsm.hasStatBySkillId(CELESTIAL_DANCE)
                && !chr.hasSkillOnCooldown(CELESTIAL_DANCE_SUN)
                && !chr.hasSkillOnCooldown(CELESTIAL_DANCE_MOON)
                && attackInfo.skillId != CELESTIAL_DANCE_SUN
                && attackInfo.skillId != CELESTIAL_DANCE_MOON
                && attackInfo.skillId != SOUL_ECLIPSE
                && attackInfo.skillId != SOUL_ECLIPSE_BREAK) {
            if (tsm.getOption(PoseType).nOption == 1) { // Moon Attack
                chr.write(UserLocal.userBonusAttackRequest(CELESTIAL_DANCE_MOON));
            } else if (tsm.getOption(PoseType).nOption == 2) { // Sun Attack
                chr.write(UserLocal.userBonusAttackRequest(CELESTIAL_DANCE_SUN));
            }
            chr.addSkillCoolTime(CELESTIAL_DANCE_MOON, 5000);
            chr.addSkillCoolTime(CELESTIAL_DANCE_SUN, 5000);
        }

        // Equinox
        if (attackInfo.bySummonedID == 0
                && chr.hasSkill(RISING_SUN)
                && chr.hasSkill(FALLING_MOON)
                && attackInfo.skillId != CELESTIAL_DANCE_MOON
                && attackInfo.skillId != CELESTIAL_DANCE_SUN
                && attackInfo.skillId != SOUL_ECLIPSE
                && attackInfo.skillId != SOUL_ECLIPSE_BREAK
                && attackInfo.skillId != EQUINOX_SLASH) {
            equinox(tsm);
        }

        if (attackInfo.bySummonedID == CELESTIAL_DANCE) {
            reduceFlareSlash(y);
        }

        // Flare Slash
        if (chr.hasSkill(FLARE_SLASH_SUN) && !chr.hasSkillOnCooldown(FLARE_SLASH_SUN) && tsm.hasStat(PoseType)) {
            if (tsm.getOption(PoseType).nOption == 1) {
                // Moon
                chr.write(UserLocal.userBonusAttackRequest(FLARE_SLASH_MOON));
            } else {
                // Sun
                chr.write(UserLocal.userBonusAttackRequest(FLARE_SLASH_SUN));
            }
        }

        Option o1 = new Option();
        Option o2 = new Option();
        Option o3 = new Option();
        switch (attackInfo.skillId) {
            case IMPALING_RAYS:
                o1.nOption = 1;
                o1.rOption = skill.getSkillId();
                o1.tOption = si.getValue(time, slv);
                o2.nOption = 1;
                o2.rOption = skill.getSkillId();
                o2.wOption = chr.getId();
                for (MobAttackInfo mai : attackInfo.mobAttackInfo) {
                    if (Util.succeedProp(si.getValue(prop, slv))) {
                        Mob mob = (Mob) chr.getField().getLifeByObjectID(mai.mobId);
                        if (mob == null) {
                            continue;
                        }
                        MobTemporaryStat mts = mob.getTemporaryStat();
                        mts.addStatOptionsAndBroadcast(chr, MobStat.Freeze, o1);
                        mts.addStatOptionsAndBroadcast(chr, MobStat.SoulExplosion, o2);
                    }
                }
                break;
            case RIFT_OF_DAMNATION_ATTACK:
            case RIFT_OF_DAMNATION_SUMMON:
                summonAndIncRift(attackInfo);
                break;
            case SOUL_ECLIPSE_BREAK:
                if (chr.getField().getSummonByChrAndSkillId(chr, SOUL_ECLIPSE) != null) {
                    chr.getField().removeSummon(chr.getField().getSummonByChrAndSkillId(chr, SOUL_ECLIPSE));
                    o1.nOption = 1;
                    o1.rOption = SOUL_ECLIPSE;
                    o1.tOption = 2;
                    tsm.putCharacterStatValue(IndieNotDamaged, o1, true); // Invincibility
                }
                break;
            case EQUINOX_SLASH:
                chr.setSkillCooldown(skillID, slv);
                break;
            case STYX_CROSSING: // Fully Charged
            case STYX_CROSSING_KEYDOWN: // Not Fully Charged
                reduceFlareSlash(z);
                break;
        }

        super.handleAttack(c, attackInfo);
    }

    private void reduceFlareSlash(SkillStat skillStat) {
        var skill = chr.getSkill(FLARE_SLASH_SUN);
        if (skill == null || !chr.hasSkillOnCooldown(skill.getSkillId())) {
            return;
        }

        // x = 300ms    |  Changing Stance through Equinox
        // y = 900ms    |  Celestial Dance Afterimage Attacks
        // z = 1200ms   |  Styx Crossing Hits
        var si = SkillData.getSkillInfoById(skill.getSkillId());
        var slv = skill.getCurrentLevel();

        chr.reduceSkillCoolTime(skill.getSkillId(), si.getValue(skillStat, slv));
    }

    private void summonAndIncRift(AttackInfo attackInfo) {
        Field field = chr.getField();
        Rect rect = chr.getRectAround(new Rect(-300, -300, 300, 300));
        int curFieldRiftCount = (int) field.getSummons().stream().filter(s -> s.getSkillID() == RIFT_OF_DAMNATION_SUMMON && s.getChr() == chr).count();
        SkillInfo si = SkillData.getSkillInfoById(RIFT_OF_DAMNATION);
        int slv = chr.getSkillLevel(RIFT_OF_DAMNATION);
        Summon riftInRect = field.getSummonByChrAndSkillIdInRect(chr, RIFT_OF_DAMNATION_SUMMON, rect);
        switch (attackInfo.skillId) {
            case RIFT_OF_DAMNATION_ATTACK:
                if (riftInRect == null) {
                    if (curFieldRiftCount >= 2 || chr.hasSkillOnCooldown(RIFT_OF_DAMNATION_SUMMON)) {
                        return;
                    }
                    Summon summon = Summon.getSummonByNoCTS(chr, RIFT_OF_DAMNATION_SUMMON, slv);
                    summon.setState(1);
                    summon.setFlip(!attackInfo.left);
                    summon.setMoveAbility(MoveAbility.Stop);
                    field.spawnSummon(summon);
                } else {
                    field.broadcastPacket(Summoned.stateChanged(riftInRect, 1, new HashMap<>()));
                }
                break;
            case RIFT_OF_DAMNATION_SUMMON:
                if (riftInRect != null) {
                    field.removeSummon(riftInRect);
                    chr.addSkillCoolTime(attackInfo.skillId, si.getValue(z, slv) * 1000);
                }
                break;
        }
    }

    public void handleRemoveCTS(CharacterTemporaryStat cts, Option o) {
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        if (cts == GlimmeringTime) {
            tsm.removeStatsBySkill(EQUINOX_CYCLE_MOON);
            tsm.removeStatsBySkill(EQUINOX_CYCLE_SUN);
        }
        super.handleRemoveCTS(cts, o);
    }

    private void giveMoonBuffs() {
        if (!chr.hasSkill(FALLING_MOON)) {
            return;
        }
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        Option o1 = new Option();
        Option o2 = new Option();
        Option o3 = new Option();
        Skill skill = chr.getSkill(FALLING_MOON);
        SkillInfo si = SkillData.getSkillInfoById(skill.getSkillId());
        int slv = skill.getCurrentLevel();
        SkillInfo mosSI = SkillData.getSkillInfoById(MASTER_OF_THE_SWORD);
        int mosSLV = chr.getSkillLevel(MASTER_OF_THE_SWORD);
        if (tsm.getOption(PoseType).nOption != 1) {
            tsm.removeStatsBySkill(RISING_SUN);
        }
        o1.nOption = 1;
        o1.rOption = skill.getSkillId();
        if (tsm.hasStat(GlimmeringTime)) {
            o1.bOption = 1;
        }
        tsm.putCharacterStatValue(PoseType, o1);
        o2.nOption = chr.hasSkill(MASTER_OF_THE_SWORD) ? mosSI.getValue(indieCr, mosSLV) : si.getValue(indieCr, slv);
        o2.rOption = skill.getSkillId();
        tsm.putCharacterStatValue(IndieCr, o2);
        o3.nOption = slv;
        o3.rOption = skill.getSkillId();
        tsm.putCharacterStatValue(BuckShot, o3);
    }

    private void giveSunBuffs() {
        if (!chr.hasSkill(RISING_SUN)) {
            return;
        }
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        Option o1 = new Option();
        Option o2 = new Option();
        Option o3 = new Option();

        Skill skill = chr.getSkill(RISING_SUN);
        SkillInfo si = SkillData.getSkillInfoById(skill.getSkillId());
        int slv = skill.getCurrentLevel();
        SkillInfo mosSI = SkillData.getSkillInfoById(MASTER_OF_THE_SWORD);
        int mosSLV = chr.getSkillLevel(MASTER_OF_THE_SWORD);
        if (tsm.getOption(PoseType).nOption != 2) {
            tsm.removeStatsBySkill(FALLING_MOON);
        }
        o1.nOption = 2;
        o1.rOption = skill.getSkillId();
        if (tsm.hasStat(GlimmeringTime)) {
            o1.bOption = 1;
        }
        tsm.putCharacterStatValue(PoseType, o1);
        o2.rOption = skill.getSkillId();
        o2.nOption = chr.hasSkill(MASTER_OF_THE_SWORD) ? mosSI.getValue(v, mosSLV) : si.getValue(indiePMdR, slv);
        tsm.putCharacterStatValue(IndiePMdR, o2); //Indie
        o3.nOption = chr.hasSkill(MASTER_OF_THE_SWORD) ? -2 : si.getValue(indieBooster, slv);
        o3.rOption = skill.getSkillId();
        tsm.putCharacterStatValue(IndieBooster, o3);
    }

    private void equinox(TemporaryStatManager tsm) {
        Option o1 = new Option();
        Option o2 = new Option();
        Option o3 = new Option();
        Option o4 = new Option();
        Option o5 = new Option();
        SkillInfo mosSI = SkillData.getSkillInfoById(MASTER_OF_THE_SWORD);
        //Rising Sun Skill Info
        Skill skillRS = chr.getSkill(RISING_SUN);
        int slvRS = (byte) skillRS.getCurrentLevel();
        SkillInfo siRS = SkillData.getSkillInfoById(skillRS.getSkillId());
        //Falling Moon Skill Info
        Skill skillFM = chr.getSkill(FALLING_MOON);
        int slvFM = (byte) skillFM.getCurrentLevel();
        SkillInfo siFM = SkillData.getSkillInfoById(skillFM.getSkillId());


        if (!tsm.hasStat(GlimmeringTime)) {
            return;
        }
        if (tsm.getOption(PoseType).nOption == 1) {
            //Switch to Rising Sun State
            o1.nOption = 2;
            o1.rOption = RISING_SUN;
            o1.bOption = 1;
            tsm.putCharacterStatValue(PoseType, o1);

            tsm.removeStatsBySkill(FALLING_MOON);
            tsm.removeStatsBySkill(EQUINOX_CYCLE_SUN);

            o2.rOption = RISING_SUN;
            o2.nOption = chr.hasSkill(MASTER_OF_THE_SWORD) ? mosSI.getValue(v, slvRS) : siRS.getValue(indiePMdR, slvRS);
            tsm.putCharacterStatValue(IndiePMdR, o2); //Indie

            o3.nOption = chr.hasSkill(MASTER_OF_THE_SWORD) ? -2 : siRS.getValue(indieBooster, slvRS);
            o3.rOption = RISING_SUN;
            o3.tOption = siRS.getValue(time, slvRS);
            tsm.putCharacterStatValue(IndieBooster, o3);

            //Invisible Moon Buffs
            o4.nOption = chr.getSkillLevel(EQUINOX_CYCLE);
            o4.rOption = EQUINOX_CYCLE_MOON;
            tsm.putCharacterStatValue(BuckShot, o4);

            o5.nOption = chr.hasSkill(MASTER_OF_THE_SWORD) ? mosSI.getValue(indieCr, slvFM) : siFM.getValue(indieCr, slvFM);
            o5.rOption = EQUINOX_CYCLE_MOON;
            tsm.putCharacterStatValue(IndieCr, o5);
        } else {
            //Switch to Falling Moon State
            o1.nOption = 1;
            o1.rOption = FALLING_MOON;
            o1.bOption = 1;
            tsm.putCharacterStatValue(PoseType, o1);

            tsm.removeStatsBySkill(RISING_SUN);
            tsm.removeStatsBySkill(EQUINOX_CYCLE_MOON);

            o2.nOption = chr.hasSkill(MASTER_OF_THE_SWORD) ? mosSI.getValue(indieCr, slvFM) : siFM.getValue(indieCr, slvFM);
            o2.rOption = FALLING_MOON;
            o2.tOption = siFM.getValue(time, slvFM);
            tsm.putCharacterStatValue(IndieCr, o2);

            o3.nOption = chr.getSkillLevel(EQUINOX_CYCLE);
            o3.rOption = FALLING_MOON;
            tsm.putCharacterStatValue(BuckShot, o3);

            //Invisible Sun Buffs
            o4.rOption = EQUINOX_CYCLE_SUN;
            o4.nOption = chr.hasSkill(MASTER_OF_THE_SWORD) ? mosSI.getValue(v, slvRS) : siRS.getValue(indiePMdR, slvRS);
            tsm.putCharacterStatValue(IndiePMdR, o4);

            o5.nOption = chr.hasSkill(MASTER_OF_THE_SWORD) ? -2 : siRS.getValue(indieBooster, slvRS);
            o5.rOption = EQUINOX_CYCLE_SUN;
            o5.tOption = siRS.getValue(time, slvRS);
            tsm.putCharacterStatValue(IndieBooster, o5);
        }
        tsm.sendSetStatPacket();

        // Flare Slash | Reduce Cooldown every stance change through Equinox
        reduceFlareSlash(x);
    }

    private void applySoulElementOnMob(AttackInfo attackInfo, int slv) {
        Option o1 = new Option();
        SkillInfo si = SkillData.getSkillInfoById(SOUL_ELEMENT);
        o1.nOption = 1;
        o1.rOption = SOUL_ELEMENT;
        o1.tOption = si.getValue(subTime, slv);
        for (MobAttackInfo mai : attackInfo.mobAttackInfo) {
            if (Util.succeedProp(si.getValue(prop, slv))) {
                Mob mob = (Mob) chr.getField().getLifeByObjectID(mai.mobId);
                if (mob == null) {
                    continue;
                }
                MobTemporaryStat mts = mob.getTemporaryStat();
                if (!mob.isBoss()) {
                    mts.addStatOptionsAndBroadcast(chr, MobStat.Stun, o1);
                }
            }
        }
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
        Summon summon;
        Field field = chr.getField();
        Option o1 = new Option();
        Option o2 = new Option();
        Option o3 = new Option();
        Option o4 = new Option();
        switch (skillId) {
            case TRUE_SIGHT:
                // Mob Def = v
                // Final Dmg on mob = s
                Rect rect = new Rect(
                        new Position(
                                -500,
                                -500),
                        new Position(
                                +500,
                                +500)
                );
                Rect rectAround = chr.getPosition().getRectAround(rect);

                if (!chr.isLeft()) {
                    rectAround = rectAround.horizontalFlipAround(chr.getPosition().getX());
                }
                o1.nOption = -(si.getValue(v, slv) + (chr.hasSkill(TRUE_SIGHT_GUARDBREAK) ? 10 : 0));
                o1.rOption = skillId;
                o1.tOption = si.getValue(time, slv) + (chr.hasSkill(TRUE_SIGHT_PERSIST) ? 20 : 0);
                o2.nOption = si.getValue(s, slv);
                o2.rOption = skillId;
                o2.tOption = si.getValue(time, slv) + (chr.hasSkill(TRUE_SIGHT_PERSIST) ? 20 : 0);
                o3.nOption = chr.hasSkill(TRUE_SIGHT_ENHANCE) ? -10 : 0;
                o3.rOption = skillId;
                o3.tOption = si.getValue(time, slv) + (chr.hasSkill(TRUE_SIGHT_PERSIST) ? 20 : 0);
                for (Life life : chr.getField().getLifesInRect(rectAround)) {
                    if (life instanceof Mob && ((Mob) life).getHp() > 0) {
                        Mob mob = (Mob) life;
                        MobTemporaryStat mts = mob.getTemporaryStat();
                        if (Util.succeedProp(si.getValue(prop, slv))) {
                            mts.addStatOptionsAndBroadcast(chr, MobStat.PDR, o1);
                            mts.addStatOptionsAndBroadcast(chr, MobStat.MDR, o1);
                            mts.addStatOptionsAndBroadcast(chr, MobStat.FinalDmgReceived, o2);
                            mts.addStatOptionsAndBroadcast(chr, MobStat.TrueSight, o3);
                        }
                    }
                }
                break;
            case SOUL_ELEMENT:
                if (!tsm.hasStatBySkillId(SOUL_ELEMENT)) {
                    o1.nOption = 1;
                    o1.rOption = skillId;
                    tsm.putCharacterStatValue(SoulMasterFinal, o1);
                } else {
                    tsm.removeStatsBySkill(SOUL_ELEMENT);
                }
                break;
            case SOUL_SPEED:
                o1.nOption = si.getValue(x, slv);
                o1.rOption = skillId;
                o1.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(IndieBooster, o1);
                break;
            case FALLING_MOON:
                giveMoonBuffs();
                break;
            case RISING_SUN:
                giveSunBuffs();
                break;
            case EQUINOX_CYCLE:
                o1.nOption = 1;
                o1.rOption = skillId;
                o1.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(GlimmeringTime, o1);
                break;
            case SOUL_FORGE:
                o2.rOption = skillId;
                o2.nOption = si.getValue(indiePad, slv);
                o2.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(IndiePAD, o2);
                o3.nOption = 1;
                o3.rOption = skillId;
                o3.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(LightOfSpirit, o3);
                break;
            case GLORY_OF_THE_GUARDIANS_DW:
                o1.rOption = skillId;
                o1.nOption = si.getValue(indieDamR, slv);
                o1.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(IndieDamR, o1);
                break;
            case CELESTIAL_DANCE:
                summon = Summon.getSummonBy(chr, skillId, slv);
                summon.setAvatarLook(chr.getAvatarData().getAvatarLook());
                summon.setMoveAbility(MoveAbility.Walk);
                summon.setAttackActive(true);
                field.spawnSummonAndRemoveOld(summon);
                break;
            case RIFT_OF_DAMNATION:
                o1.nOption = 1;
                o1.rOption = skillId;
                o1.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(RiftOfDamnation, o1);
                chr.resetSkillCoolTime(STYX_CROSSING_KEYDOWN);
                chr.resetSkillCoolTime(STYX_CROSSING);
                break;
            case SOUL_ECLIPSE:
                if (field.getSummonByChrAndSkillId(chr, skillId) == null) {
                    summon = Summon.getSummonByNoCTS(chr, skillId, slv);
                    summon.setMoveAbility(MoveAbility.Walk);
                    field.spawnSummonAndRemoveOld(summon);
                    o1.nOption = 1;
                    o1.rOption = skillId;
                    o1.tOption = 2;
                    tsm.putCharacterStatValue(IndieNotDamaged, o1, true); // Invincibility
                }
                break;
        }
        tsm.sendSetStatPacket();
    }


    // Hit related methods ---------------------------------------------------------------------------------------------

    @Override
    public void stopTimers() {
        if (willOfSteelTimer != null) {
            willOfSteelTimer.cancel(true);
        }
        super.stopTimers();
    }

    @Override
    public void updateTimerSkill() {
        EventManager.stopTimer(willOfSteelTimer);
        startWillOfSteel(chr);
        super.updateTimerSkill();
    }
}
