package net.swordie.ms.client.jobs.common;

import net.swordie.ms.client.Client;
import net.swordie.ms.client.character.Char;
import net.swordie.ms.client.character.info.HitInfo;
import net.swordie.ms.client.character.items.BodyPart;
import net.swordie.ms.client.character.items.Equip;
import net.swordie.ms.client.character.skills.Option;
import net.swordie.ms.client.character.skills.info.AttackInfo;
import net.swordie.ms.client.character.skills.info.SkillInfo;
import net.swordie.ms.client.character.skills.info.SkillUseInfo;
import net.swordie.ms.client.character.skills.temp.CharacterTemporaryStat;
import net.swordie.ms.client.character.skills.temp.TemporaryStatManager;
import net.swordie.ms.connection.InPacket;
import net.swordie.ms.connection.packet.Effect;
import net.swordie.ms.connection.packet.UserPacket;
import net.swordie.ms.constants.JobConstants;
import net.swordie.ms.enums.BaseStat;
import net.swordie.ms.enums.EquipBaseStat;
import net.swordie.ms.life.AffectedArea;
import net.swordie.ms.loaders.SkillData;
import net.swordie.ms.util.Util;
import net.swordie.ms.world.field.Field;

import static net.swordie.ms.client.character.skills.SkillStat.*;
import static net.swordie.ms.client.character.skills.temp.CharacterTemporaryStat.*;

/**
 * Created on 09/07/2021.
 *
 * @author Asura
 */
public class OzSkillHandler implements ICommonSkillHandler {

    // Active Rings
    public static final int RING_OF_RESTRAINT = 80001455;
    public static final int ULTIMATUM_RING = 80001456;
    public static final int LIMIT_RING = 80001457;
    public static final int HEALTH_CUT_RING = 80001458;
    public static final int MANA_CUT_RING = 80001459;
    public static final int DURABILITY_RING = 80001460;
    public static final int CRITICAL_DAMAGE_RING = 80001461;
    public static final int CRITICAL_DEFENSE_RING = 80001462;
    public static final int CRITICAL_SHIFT_RING = 80001463;
    public static final int STANCE_SHIFT_RING = 80001464;
    public static final int TOTTALING_RING = 80001465;
    public static final int LEVEL_JUMP_S_RING = 80001466;
    public static final int LEVEL_JUMP_D_RING = 80001467;
    public static final int LEVEL_JUMP_I_RING = 80001468;
    public static final int LEVEL_JUMP_L_RING = 80001469;
    public static final int WEAPON_JUMP_S_RING = 80001470;
    public static final int WEAPON_JUMP_D_RING = 80001471;
    public static final int WEAPON_JUMP_I_RING = 80001472;
    public static final int WEAPON_JUMP_L_RING = 80001473;
    public static final int SWIFT_RING = 80001474;
    public static final int OVERDRIVE_RING = 80001475;
    public static final int BERSERKER_RING = 80001476;
    public static final int REFLECTIVE_RING = 80001477;
    public static final int CLEANSING_RING = 80001478;
    public static final int RISK_TAKER_RING = 80001479;

    // Passive Rings
    public static final int CRISIS_H_RING = 80000299;
    public static final int CRISIS_M_RING = 80000300;
    public static final int CRISIS_HM_RING = 80000301;
    public static final int CLEAN_STANCE_RING = 80000302;
    public static final int CLEAN_DEFENCE_RING = 80000303;
    public static final int TOWER_BOOST_RING = 80000304;


    private Char chr;

    public OzSkillHandler(Char chr) {
        this.chr = chr;
    }

    @Override
    public void handleSkill(Char chr, TemporaryStatManager tsm, int skillId, int slv, InPacket inPacket, SkillUseInfo skillUseInfo) {
        SkillInfo si = SkillData.getSkillInfoById(skillId);
        Option o1 = new Option();
        Option o2 = new Option();
        Option o3 = new Option();
        Option o4 = new Option();
        Option o5 = new Option();
        Option o6 = new Option();
        Field field = chr.getField();

        switch (skillId) {
            case RING_OF_RESTRAINT:
                AffectedArea aa = AffectedArea.getPassiveAA(chr, skillId, slv);
                field.spawnAffectedArea(aa);
                break;

            case ULTIMATUM_RING:
                o1.nOption = 1;
                o1.rOption = skillId;
                o1.tOption = si.getValue(time, slv);
                // tsm.putCharacterStatValue(CharacterTemporaryStat.IndieFixedDamageR, o1);
                break;

            case LIMIT_RING:
                if (JobConstants.isNoManaJob(chr.getJob())) {
                    return;
                }
                o1.nOption = -(chr.getMaxMP() - si.getValue(x, slv));
                o1.rOption = skillId;
                o1.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(IndieMMP, o1);
                o2.nOption = si.getValue(indieBDR, slv);
                o2.rOption = skillId;
                o2.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(IndieBDR, o2);
                break;

            case HEALTH_CUT_RING:
                o1.nOption = -chr.getHPPerc(si.getValue(x, slv));
                o1.rOption = skillId;
                o1.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(IndieMHP, o1);
                o2.nOption = si.getValue(indieBDR, slv);
                o2.rOption = skillId;
                o2.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(IndieBDR, o2);
                break;

            case MANA_CUT_RING:
                if (JobConstants.isNoManaJob(chr.getJob())) {
                    return;
                }
                o1.nOption = -chr.getMPPerc(si.getValue(x, slv));
                o1.rOption = skillId;
                o1.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(IndieMMP, o1);
                o2.nOption = si.getValue(indieIgnoreMobpdpR, slv);
                o2.rOption = skillId;
                o2.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(IndieIgnoreMobpdpR, o2);
                break;

            case DURABILITY_RING:
                o1.nOption = si.getValue(indieMhpR, slv);
                o1.rOption = skillId;
                o1.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(IndieMHPR, o1);
                break;

            case CRITICAL_DAMAGE_RING:
                o1.nOption = si.getValue(x, slv);
                o1.rOption = skillId;
                o1.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(IndieCrDmg, o1);
                break;

            case CRITICAL_DEFENSE_RING:
                o1.nOption = (int) (((double) (chr.getTotalStat(BaseStat.crDmg) * si.getValue(x, slv))) / 100D);
                o1.rOption = skillId;
                o1.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(IndieIgnoreMobpdpR, o1);
                break;

            case CRITICAL_SHIFT_RING:
                BaseStat baseStat = JobConstants.getMainStatByJob(chr.getJob());
                var mainStat = chr.getTotalStat(baseStat);

                var stat = (int) (((double) mainStat * si.getValue(x, slv)) / 100D);
                var cr = chr.getTotalStat(BaseStat.cr);
                o1.nOption = Math.max(0, Math.min(stat - cr, 100));
                o1.rOption = skillId;
                o1.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(IndieCr, o1);
                break;

            case STANCE_SHIFT_RING:
                baseStat = JobConstants.getMainStatByJob(chr.getJob());
                mainStat = chr.getTotalStat(baseStat);

                stat = (int) (((double) mainStat * si.getValue(x, slv)) / 100D);
                var stance = chr.getTotalStat(BaseStat.stance);
                o1.nOption = Math.max(0, Math.min(stat - stance, 100));
                o1.rOption = skillId;
                o1.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(IndieStance, o1);
                break;

            case TOTTALING_RING:
                var sumStat = chr.getTotalStat(BaseStat.str) + chr.getTotalStat(BaseStat.dex) + chr.getTotalStat(BaseStat.inte) + chr.getTotalStat(BaseStat.luk);
                baseStat = JobConstants.getMainStatByJob(chr.getJob());
                var multiplier = baseStat == BaseStat.mhp ? si.getValue(t, slv) : si.getValue(x, slv);
                var bonus = (int) (((double) sumStat * multiplier) / 100D);
                o1.nOption = bonus;
                o1.rOption = skillId;
                o1.tOption = si.getValue(time, slv);
                switch (baseStat) {
                    case mhp:
                        tsm.putCharacterStatValue(IndieMHP, o1);
                        break;
                    case str:
                        tsm.putCharacterStatValue(IndieSTR, o1);
                        break;
                    case dex:
                        tsm.putCharacterStatValue(IndieDEX, o1);
                        break;
                    case inte:
                        tsm.putCharacterStatValue(IndieINT, o1);
                        break;
                    case luk:
                        tsm.putCharacterStatValue(IndieLUK, o1);
                        break;
                }
                break;

            case LEVEL_JUMP_S_RING:
                var chrLv = chr.getLevel();
                bonus = (int) (((double) chrLv * (JobConstants.isDemonAvenger(chr.getJob()) ? si.getValue(t, slv) : si.getValue(x, slv))) / 100D);
                o1.nOption = bonus;
                o1.rOption = skillId;
                o1.tOption = si.getValue(time,slv);
                tsm.putCharacterStatValue(IndieSTR, o1);
                break;

            case LEVEL_JUMP_D_RING:
                chrLv = chr.getLevel();
                bonus = (int) (((double) chrLv * (JobConstants.isDemonAvenger(chr.getJob()) ? si.getValue(t, slv) : si.getValue(x, slv))) / 100D);
                o1.nOption = bonus;
                o1.rOption = skillId;
                o1.tOption = si.getValue(time,slv);
                tsm.putCharacterStatValue(IndieDEX, o1);
                break;

            case LEVEL_JUMP_I_RING:
                chrLv = chr.getLevel();
                bonus = (int) (((double) chrLv * (JobConstants.isDemonAvenger(chr.getJob()) ? si.getValue(t, slv) : si.getValue(x, slv))) / 100D);
                o1.nOption = bonus;
                o1.rOption = skillId;
                o1.tOption = si.getValue(time,slv);
                tsm.putCharacterStatValue(IndieINT, o1);
                break;

            case LEVEL_JUMP_L_RING:
                chrLv = chr.getLevel();
                bonus = (int) (((double) chrLv * (JobConstants.isDemonAvenger(chr.getJob()) ? si.getValue(t, slv) : si.getValue(x, slv))) / 100D);
                o1.nOption = bonus;
                o1.rOption = skillId;
                o1.tOption = si.getValue(time,slv);
                tsm.putCharacterStatValue(IndieLUK, o1);
                break;

            case WEAPON_JUMP_S_RING:
                var att = 0;
                var matt = 0;
                var weapon = (Equip) chr.getEquippedInventory().getFirstItemByBodyPart(BodyPart.Weapon);
                if (weapon != null) {
                    att = weapon.getTotalStat(EquipBaseStat.iPAD);
                    matt = weapon.getTotalStat(EquipBaseStat.iMAD);
                }
                bonus = (int) (((double) Math.max(att, matt) * (JobConstants.isDemonAvenger(chr.getJob()) ? si.getValue(t, slv) : si.getValue(x, slv))) / 100D);
                o1.nOption = bonus;
                o1.rOption = skillId;
                o1.tOption = si.getValue(time,slv);
                tsm.putCharacterStatValue(IndieSTR, o1);
                break;

            case WEAPON_JUMP_D_RING:
                att = 0;
                matt = 0;
                weapon = (Equip) chr.getEquippedInventory().getFirstItemByBodyPart(BodyPart.Weapon);
                if (weapon != null) {
                    att = weapon.getTotalStat(EquipBaseStat.iPAD);
                    matt = weapon.getTotalStat(EquipBaseStat.iMAD);
                }
                bonus = (int) (((double) Math.max(att, matt) * (JobConstants.isDemonAvenger(chr.getJob()) ? si.getValue(t, slv) : si.getValue(x, slv))) / 100D);
                o1.nOption = bonus;
                o1.rOption = skillId;
                o1.tOption = si.getValue(time,slv);
                tsm.putCharacterStatValue(IndieDEX, o1);
                break;

            case WEAPON_JUMP_I_RING:
                att = 0;
                matt = 0;
                weapon = (Equip) chr.getEquippedInventory().getFirstItemByBodyPart(BodyPart.Weapon);
                if (weapon != null) {
                    att = weapon.getTotalStat(EquipBaseStat.iPAD);
                    matt = weapon.getTotalStat(EquipBaseStat.iMAD);
                }
                bonus = (int) (((double) Math.max(att, matt) * (JobConstants.isDemonAvenger(chr.getJob()) ? si.getValue(t, slv) : si.getValue(x, slv))) / 100D);
                o1.nOption = bonus;
                o1.rOption = skillId;
                o1.tOption = si.getValue(time,slv);
                tsm.putCharacterStatValue(IndieINT, o1);
                break;

            case WEAPON_JUMP_L_RING:
                att = 0;
                matt = 0;
                weapon = (Equip) chr.getEquippedInventory().getFirstItemByBodyPart(BodyPart.Weapon);
                if (weapon != null) {
                    att = weapon.getTotalStat(EquipBaseStat.iPAD);
                    matt = weapon.getTotalStat(EquipBaseStat.iMAD);
                }
                bonus = (int) (((double) Math.max(att, matt) * (JobConstants.isDemonAvenger(chr.getJob()) ? si.getValue(t, slv) : si.getValue(x, slv))) / 100D);
                o1.nOption = bonus;
                o1.rOption = skillId;
                o1.tOption = si.getValue(time,slv);
                tsm.putCharacterStatValue(IndieLUK, o1);
                break;

            case SWIFT_RING:
                o1.nOption = si.getValue(indieBooster, slv);
                o1.rOption = skillId;
                o1.tOption = si.getValue(time,slv);
                tsm.putCharacterStatValue(IndiePowerGuard, o1);
                break;

            case OVERDRIVE_RING:
                o1.nOption = si.getValue(indieBooster, slv);
                o1.rOption = skillId;
                o1.tOption = si.getValue(time,slv);
                tsm.putCharacterStatValue(IgnoreAllCounter, o1);
                tsm.putCharacterStatValue(IgnoreAllImmune, o1);
                break;

            case BERSERKER_RING:
                o1.nOption = si.getValue(indieIgnoreMobpdpR, slv);
                o1.rOption = skillId;
                o1.tOption = si.getValue(time,slv);
                tsm.putCharacterStatValue(IndieIgnoreMobpdpR, o1);
                o2.nOption = si.getValue(indiePddR, slv);
                o2.rOption = skillId;
                o2.tOption = si.getValue(time,slv);
                tsm.putCharacterStatValue(IndiePDDR, o2);
                break;

            case REFLECTIVE_RING:
                o1.nOption = slv;
                o1.rOption = skillId;
                o1.tOption = si.getValue(time,slv);
                tsm.putCharacterStatValue(IndiePowerGuard, o1);
                break;

            case CLEANSING_RING:
                if (Util.succeedProp(si.getValue(prop, slv))) {
                    tsm.removeAllDebuffs();
                    o1.nOption = 100;
                    o1.rOption = skillId;
                    o1.tOption = si.getValue(time, slv);
                    tsm.putCharacterStatValue(IndieAsrR, o1);
                }
                break;

            case RISK_TAKER_RING:
                o1.nOption = si.getValue(indiePadR, slv);
                o1.rOption = skillId;
                o1.tOption = si.getValue(time,slv);
                tsm.putCharacterStatValue(IndiePADR, o1);
                o2.nOption = si.getValue(indieMadR, slv);
                o2.rOption = skillId;
                o2.tOption = si.getValue(time,slv);
                tsm.putCharacterStatValue(IndieMADR, o2);
                break;

            case CRISIS_H_RING:
                chr.setSkillCooldown(skillId, slv);
                chr.write(UserPacket.effect(Effect.skillUse(skillId, chr.getLevel(), slv, 0)));
                o1.nOption = si.getValue(y, slv);
                o1.rOption = skillId;
                o1.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(IndiePDDR, o1);
                break;

            case CRISIS_M_RING:
                chr.setSkillCooldown(skillId, slv);
                chr.write(UserPacket.effect(Effect.skillUse(skillId, chr.getLevel(), slv, 0)));
                o1.nOption = si.getValue(y, slv);
                o1.rOption = skillId;
                o1.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(IndiePDDR, o1);
                break;

            case CRISIS_HM_RING:
                chr.setSkillCooldown(skillId, slv);
                chr.write(UserPacket.effect(Effect.skillUse(skillId, chr.getLevel(), slv, 0)));
                o1.nOption = si.getValue(y, slv);
                o1.rOption = skillId;
                o1.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(IndiePADR, o1);
                tsm.putCharacterStatValue(IndieMADR, o1);
                break;

            case CLEAN_STANCE_RING:
                chr.setSkillCooldown(skillId, slv);
                chr.write(UserPacket.effect(Effect.skillUse(skillId, chr.getLevel(), slv, 0)));
                o1.nOption = si.getValue(x, slv);
                o1.rOption = skillId;
                o1.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(IndieStance, o1);
                break;

            case CLEAN_DEFENCE_RING:
                chr.setSkillCooldown(skillId, slv);
                chr.write(UserPacket.effect(Effect.skillUse(skillId, chr.getLevel(), slv, 0)));
                o1.nOption = si.getValue(x, slv);
                o1.rOption = skillId;
                o1.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(IndieAsrR, o1);
                break;

            case TOWER_BOOST_RING:
                // Passive Oz Point increase.
                // already handled through pointing the SkillStat to 'OzBoostR' BaseStat and grabbing that when calculating the Oz Points Rewards
                break;
        }

        tsm.sendSetStatPacket();
    }

    @Override
    public void handleAttack(Client c, AttackInfo attackInfo) {

    }

    @Override
    public void handleHit(Client c, HitInfo hitInfo) {
        Char chr = c.getChr();
        TemporaryStatManager tsm = chr.getTemporaryStatManager();

        // Buff is removed if hit
        if (tsm.hasStatBySkillId(RISK_TAKER_RING) && hitInfo.hpDamage > 0) {
            tsm.removeStatsBySkill(RISK_TAKER_RING);
        }
    }

    @Override
    public void handleRemoveCTS(CharacterTemporaryStat cts, Option o) {
        if (o.rOption == RING_OF_RESTRAINT) {
            chr.getField().getAffectedAreas().stream().filter(aa -> aa.getSkillID() == o.rOption && aa.getOwner() == chr).findFirst().ifPresent(aa -> chr.getField().removeLife(aa));
        }

        if (o.byMob) {
            // Mob Debuff has ended
            if (chr.hasSkill(CLEAN_STANCE_RING) && !chr.hasSkillOnCooldown(CLEAN_STANCE_RING)) { // Clean Stance Ring
                handleSkill(chr, chr.getTemporaryStatManager(), CLEAN_STANCE_RING, chr.getSkillLevel(CLEAN_STANCE_RING), null, new SkillUseInfo());

            } else if (chr.hasSkill(CLEAN_DEFENCE_RING) && !chr.hasSkillOnCooldown(CLEAN_DEFENCE_RING)) { // Clean Defense Ring
                handleSkill(chr, chr.getTemporaryStatManager(), CLEAN_DEFENCE_RING, chr.getSkillLevel(CLEAN_DEFENCE_RING), null, new SkillUseInfo());
            }
        }
    }

    @Override
    public void handleChangeHP(int curHP, int newHP) {

        var curMP = chr.getMP();
        var diff = Math.abs(curHP - newHP);

        if (diff == 0) {
            return;
        }

        // Crisis H Ring
        if (chr.hasSkill(CRISIS_H_RING)) {
            var si = SkillData.getSkillInfoById(CRISIS_H_RING);
            var slv = chr.getSkillLevel(CRISIS_H_RING);
            var threshold = chr.getHPPerc(si.getValue(x, slv));

            if (newHP < threshold && !chr.hasSkillOnCooldown(si.getSkillId())) {
                handleSkill(chr, chr.getTemporaryStatManager(), si.getSkillId(), slv, null, new SkillUseInfo());
            }
        }

        // Crisis HM Ring
        if (chr.hasSkill(CRISIS_HM_RING)) {
            var si = SkillData.getSkillInfoById(CRISIS_HM_RING);
            var slv = chr.getSkillLevel(CRISIS_HM_RING);
            var threshold = chr.getHPPerc(si.getValue(x, slv));

            if (newHP < threshold && curMP < threshold
                    && !chr.hasSkillOnCooldown(si.getSkillId())) { // Requires both HP and MP to be below threshold
                handleSkill(chr, chr.getTemporaryStatManager(), si.getSkillId(), slv, null, new SkillUseInfo());
            }
        }
    }

    @Override
    public void handleChangeMP(int curMP, int newMP) {

        var curHP = chr.getHP();
        var diff = Math.abs(curMP - newMP);

        if (diff == 0) {
            return;
        }

        // Crisis M Ring
        if (chr.hasSkill(CRISIS_M_RING)) {
            var si = SkillData.getSkillInfoById(CRISIS_M_RING);
            var slv = chr.getSkillLevel(CRISIS_M_RING);
            var threshold = chr.getHPPerc(si.getValue(x, slv));

            if (newMP < threshold && !chr.hasSkillOnCooldown(si.getSkillId())) {
                handleSkill(chr, chr.getTemporaryStatManager(), si.getSkillId(), slv, null, new SkillUseInfo());
            }
        }

        // Crisis HM Ring
        if (chr.hasSkill(CRISIS_HM_RING)) {
            var si = SkillData.getSkillInfoById(CRISIS_HM_RING);
            var slv = chr.getSkillLevel(CRISIS_HM_RING);
            var threshold = chr.getHPPerc(si.getValue(x, slv));

            if (newMP < threshold && curHP < threshold
                    && !chr.hasSkillOnCooldown(si.getSkillId())) { // Requires both HP and MP to be below threshold
                handleSkill(chr, chr.getTemporaryStatManager(), si.getSkillId(), slv, null, new SkillUseInfo());
            }
        }
    }
}
