package net.swordie.ms.client.jobs.legend;

import net.swordie.ms.client.Client;
import net.swordie.ms.client.character.Char;
import net.swordie.ms.client.character.CharacterStat;
import net.swordie.ms.client.character.skills.Option;
import net.swordie.ms.client.character.skills.Skill;
import net.swordie.ms.client.character.skills.SkillStat;
import net.swordie.ms.client.character.skills.SkillUseSource;
import net.swordie.ms.client.character.skills.info.AttackInfo;
import net.swordie.ms.client.character.skills.info.MobAttackInfo;
import net.swordie.ms.client.character.skills.info.SkillInfo;
import net.swordie.ms.client.character.skills.info.SkillUseInfo;
import net.swordie.ms.client.character.skills.temp.CharacterTemporaryStat;
import net.swordie.ms.client.character.skills.temp.TemporaryStatManager;
import net.swordie.ms.client.jobs.Job;
import net.swordie.ms.connection.InPacket;
import net.swordie.ms.connection.packet.UserLocal;
import net.swordie.ms.connection.packet.WvsContext;
import net.swordie.ms.constants.JobConstants;
import net.swordie.ms.handlers.executors.EventManager;
import net.swordie.ms.life.AffectedArea;
import net.swordie.ms.life.mob.Mob;
import net.swordie.ms.life.mob.MobStat;
import net.swordie.ms.life.mob.MobTemporaryStat;
import net.swordie.ms.loaders.SkillData;
import net.swordie.ms.util.Util;
import net.swordie.ms.world.field.Field;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ScheduledFuture;
import java.util.stream.Collectors;

import static net.swordie.ms.client.character.skills.SkillStat.*;
import static net.swordie.ms.client.character.skills.temp.CharacterTemporaryStat.*;

/**
 * Created on 12/14/2017.
 */
public class Aran extends Job {

    private static final int AERO_SWING_FRICTION = 30; // glide
    private static final int AERO_SWING_TIME = 420; // ms


    public static final int COMBO_ABILITY = 21000000;
    public static final int COMBAT_STEP = 20001295;
    public static final int REGAINED_MEMORY = 20000194;
    public static final int RETURN_TO_RIEN = 20001296;

    public static final int POLEARM_BOOSTER = 21001003; //Buff
    public static final int BODY_PRESSURE = 21001008; //Buff (ON/OFF)

    public static final int SNOW_CHARGE = 21101006; //Buff
    public static final int DRAIN = 21101005; //Special Skill (HP Recovery) (ON/OFF)

    public static final int MAHA_BLESSING = 21111012; //Buff
    public static final int ADRENALINE_RUSH = 21110016; //at 1000 combo activated
    public static final int AERO_SWING = 21110026; //Passive that activates when Combo'ing in Air

    public static final int MAPLE_WARRIOR_ARAN = 21121000; //Buff
    public static final int HEROS_WILL_ARAN = 21121008;

    public static final int HEROIC_MEMORIES_ARAN = 21121053;
    public static final int ADRENALINE_BURST = 21121058;
    public static final int MAHAS_DOMAIN = 21121068; //AoE Effect
    public static final int MAHAS_DOMAIN_SKILL_USE = 21121057; //AoE Effect
    public static final int SURGING_ADRENALINE = 21120064;

    // Swing Studies
    public static final int SWING_STUDIES_1 = 21100015;
    public static final int SWING_STUDIES_2 = 21120021;

    // Final Attack
    public static final int FINAL_ATTACK = 21100010;
    public static final int ADVANCED_FINAL_ATTACK = 21120012;


    // Attacking Skills:
    public static final int SMASH_WAVE = 21001009;
    public static final int SMASH_WAVE_COMBO = 21000004;

    public static final int SMASH_SWING_1 = 21001010;
    public static final int SMASH_SWING_2 = 21000006;
    public static final int SMASH_SWING_3 = 21000007;
    public static final int SMASH_SWING_2_FINAL_BLOW = 21120025; // upgrades
    public static final int SMASH_SWING_3_FINAL_BLOW = 21110028; // upgrades

    public static final int SMASH_SWING_1_AERO_UPGRADE = 21110026;
    public static final int SMASH_SWING_2_AERO_UPGRADE = 21110022;
    public static final int SMASH_SWING_3_AERO_UPGRADE = 21110023;

    public static final int FINAL_CHARGE = 21101011;
    public static final int FINAL_CHARGE_COMBO = 21100002; //Special Attack (Stun Debuff) (Special Skill from Key-Command)
    public static final int FINAL_CHARGE_TILE = 21100018;

    public static final int FINAL_TOSS = 21101016;
    public static final int FINAL_TOSS_COMBO = 21100012;

    public static final int ROLLING_SPIN = 21101017;
    public static final int ROLLING_SPIN_COMBO = 21100013; //Special Attack (Stun Debuff) (Special Skill from Key-Command)

    public static final int GATHERING_HOOK = 21111019;
    public static final int GATHERING_HOOK_COMBO = 21110018;

    public static final int FINAL_BLOW = 21111021;
    public static final int FINAL_BLOW_COMBO = 21110020; //Special Attack (Stun Debuff) (Special Skill from Key-Command)
    public static final int FINAL_BLOW_SMASH_SWING_COMBO = 21110028; //Special Attack (Stun Debuff) (Special Skill from Key-Command)
    public static final int FINAL_BLOW_ADRENALINE_SHOCKWAVE = 21110027; //Shockwave after final blow when in Adrenaline Rush

    public static final int JUDGEMENT_DRAW = 21111017;
    public static final int JUDGEMENT_DRAW_COMBO_DOWN = 21110011; //Special Attack (Freeze Debuff) (Special Skill from Key-Command)
    public static final int JUDGEMENT_DRAW_COMBO_LEFT = 21110024; //Special Attack (Freeze Debuff) (Special Skill from Key-Command)
    public static final int JUDGEMENT_DRAW_COMBO_RIGHT = 21110025; //Special Attack (Freeze Debuff) (Special Skill from Key-Command)

    public static final int BEYOND_BLADE_1 = 21120022;
    public static final int BEYOND_BLADE_2 = 21121016;
    public static final int BEYOND_BLADE_3 = 21121017;


    // V skill
    public static final int MAHAS_FURY_BUFF = 400011016;
    public static final int MAHAS_FURY_ATTACK = 400011020;
    public static final int MAHAS_CARNAGE = 400011031;
    public static final int MAHAS_CARNAGE_COMBO = 400010030;
    public static final int FENRIR_CRASH = 400010070;
    public static final int FENRIR_CRASH_ADRENALINE = 400010071;
    public static final int BLIZZARD_TEMPEST = 400011121;
    public static final int BLIZZARD_TEMPEST_DIRE_WOLF_ATTACK = 400011122;
    public static final int BLIZZARD_TEMPEST_MOB = 400011123;

    //Finisher
    public static final int FINISHER_HUNTER_PREY = 21120019;
    public static final int FINISHER_HUNTER_PREY_ATTACK = 21120018;
    public static final int FINISHER_HUNTER_PREY_MOB_PULL = 21120027;
    public static final int FINISHER_STORM_OF_FEAR = 21120023;
    public static final int FINISHER_HUNTER_PREY_SKILL_USE = 21120026;


    private ScheduledFuture mahasFuryAttackTimer;
    private long lastDireWolfCurse = Long.MIN_VALUE;
    private static final int direWolfCurseInterval = 2000;


    public static int getOriginalSkillByID(int skillID) {
        switch (skillID) {
            case SMASH_WAVE_COMBO:
                return SMASH_WAVE;

            case FINAL_BLOW_COMBO:
            case FINAL_BLOW_SMASH_SWING_COMBO:
                return FINAL_BLOW;

        }
        return skillID; // no original skill linked with this one
    }


    private static final int[] addedSkills = new int[]{
            REGAINED_MEMORY,
            RETURN_TO_RIEN,
    };


    public Aran(Char chr) {
        super(chr);
        if (isHandlerOfJob(chr.getJob())) {
            for (int id : addedSkills) {
                if (!chr.hasSkill(id)) {
                    Skill skill = SkillData.getSkillDeepCopyById(id);
                    skill.setCurrentLevel(skill.getMasterLevel());
                    chr.addSkill(skill);
                }
            }
        }
    }

    @Override
    public boolean isHandlerOfJob(short id) {
        return JobConstants.isAran(id);
    }


    private void giveAdrenalinRushBuff(TemporaryStatManager tsm) {
        Skill skill = chr.getSkill(ADRENALINE_RUSH);
        if (skill == null) {
            return;
        }
        SkillInfo si = SkillData.getSkillInfoById(ADRENALINE_RUSH);
        int slv = skill.getCurrentLevel();
        if (chr.hasSkill(ADRENALINE_RUSH)) {
            Option o = new Option();
            o.nOption = 150;
            o.rOption = ADRENALINE_RUSH;
            o.tOption = si.getValue(time, slv) + chr.getSkillStatValue(time, SURGING_ADRENALINE);
            o.cOption = 1;
            tsm.putCharacterStatValue(AdrenalinBoost, o);
            setComboAndBroadcast(1000);
            tsm.sendSetStatPacket();
        }
    }

    private void restrictFinisher(TemporaryStatManager tsm) {
        if (tsm.hasStat(AdrenalinBoost)) {
            var opt = tsm.getOption(AdrenalinBoost);
            opt.cOption = 0;
            tsm.updateBuff(AdrenalinBoost, opt);
        }
    }

    public void handleRemoveCTS(CharacterTemporaryStat cts, Option o) {
        if (cts == AdrenalinBoost) {
            setComboAndBroadcast(500);
        }
        if (cts == MahasFury && mahasFuryAttackTimer != null) {
            mahasFuryAttackTimer.cancel(true);
            mahasFuryAttackTimer = null;
        }
        if (cts == BlizzardTempest) {
            chr.write(WvsContext.aranDireWolfCurse(new HashMap<>()));
        }
        super.handleRemoveCTS(cts, o);
    }

    @Override
    public void onWarp(Field oldField, Field newField) {
        if (chr.getTemporaryStatManager().hasStat(BlizzardTempest)) {
            chr.write(WvsContext.aranDireWolfCurse(new HashMap<>()));
        }

        super.onWarp(oldField, newField);
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
        if (hasHitMobs) {
            if (!isNoIncComboAbilitySkill(attackInfo.skillId)) {
                incrementComboAbility(tsm, attackInfo);

                if (tsm.hasStat(BlizzardTempest)) {
                    chr.write(UserLocal.userBonusAttackRequest(BLIZZARD_TEMPEST_DIRE_WOLF_ATTACK));
                }
            }

            if (chr.hasSkill(ADRENALINE_RUSH) && getCombo() > 999 && !tsm.hasStat(AdrenalinBoost)) {
                giveAdrenalinRushBuff(tsm);
            }
            aranDrain();
            snowCharge(attackInfo);

        }
        doSwingStudiesAddAttack(tsm);
        Option o1 = new Option();
        Option o2 = new Option();
        Option o3 = new Option();
        switch (attackInfo.skillId) {
            case SMASH_SWING_3_FINAL_BLOW:
                int prop = 30; //Prop value never given, so I decided upon 30%.
                int tOpt = 3; //Time value never given, so I decided upon 3 seconds.
                o1.nOption = 1;
                o1.rOption = FINAL_CHARGE_COMBO; // Final Blow doens't have a mob stat effect
                o1.tOption = tOpt;
                for (MobAttackInfo mai : attackInfo.mobAttackInfo) {
                    if (Util.succeedProp(prop)) {
                        Mob mob = (Mob) chr.getField().getLifeByObjectID(mai.mobId);
                        if (mob == null || mob.isBoss()) {
                            continue;
                        }
                        MobTemporaryStat mts = mob.getTemporaryStat();
                        mts.addStatOptionsAndBroadcast(chr, MobStat.Stun, o1);
                    }
                }
                // Fall through intended
            case SMASH_SWING_2_FINAL_BLOW:
            case SMASH_SWING_1_AERO_UPGRADE:
            case SMASH_SWING_2_AERO_UPGRADE:
            case SMASH_SWING_3_AERO_UPGRADE:
                chr.write(UserLocal.setSlowDown(AERO_SWING_FRICTION, AERO_SWING_TIME)); // Aero Swing
                break;

            case FINAL_CHARGE_COMBO:
                si = SkillData.getSkillInfoById(FINAL_CHARGE);
                slv = chr.getSkillLevel(FINAL_CHARGE);
                o1.nOption = 1;
                o1.rOption = FINAL_CHARGE_COMBO;
                o1.tOption = si.getValue(time, slv);
                for (MobAttackInfo mai : attackInfo.mobAttackInfo) {
                    Mob mob = (Mob) chr.getField().getLifeByObjectID(mai.mobId);
                    if (mob == null || mob.isBoss()) {
                        continue;
                    }
                    MobTemporaryStat mts = mob.getTemporaryStat();
                    mts.addStatOptionsAndBroadcast(chr, MobStat.Stun, o1);
                }
                if (tsm.hasStat(AdrenalinBoost)) {
                    AffectedArea aa = AffectedArea.getPassiveAA(chr, FINAL_CHARGE, (byte) slv);
                    aa.setPosition(chr.getPosition());
                    aa.setRect(aa.getPosition().getRectAround(si.getLastRect()));
                    if (!attackInfo.left) {
                        aa.setRect(aa.getRect().moveRight());
                    }
                    chr.getField().spawnAffectedArea(aa);
                }
                break;

            case FINAL_CHARGE_TILE:
                si = SkillData.getSkillInfoById(FINAL_CHARGE);
                slv = chr.getSkillLevel(FINAL_CHARGE);
                o1.nOption = 1;
                o1.rOption = FINAL_CHARGE_COMBO;
                o1.tOption = si.getValue(time, slv);
                for (MobAttackInfo mai : attackInfo.mobAttackInfo) {
                    Mob mob = (Mob) chr.getField().getLifeByObjectID(mai.mobId);
                    if (mob == null || mob.isBoss()) {
                        continue;
                    }
                    MobTemporaryStat mts = mob.getTemporaryStat();
                    mts.addStatOptionsAndBroadcast(chr, MobStat.Freeze, o1);
                }
                break;

            case ROLLING_SPIN_COMBO:
                si = SkillData.getSkillInfoById(ROLLING_SPIN);
                slv = chr.getSkillLevel(ROLLING_SPIN);
                o1.nOption = 1;
                o1.rOption = ROLLING_SPIN_COMBO;
                o1.tOption = si.getValue(time, slv);
                for (MobAttackInfo mai : attackInfo.mobAttackInfo) {
                    Mob mob = (Mob) chr.getField().getLifeByObjectID(mai.mobId);
                    if (mob == null || mob.isBoss()) {
                        continue;
                    }
                    MobTemporaryStat mts = mob.getTemporaryStat();
                    mts.addStatOptionsAndBroadcast(chr, MobStat.Stun, o1);
                }
                break;

            case JUDGEMENT_DRAW_COMBO_DOWN:
            case JUDGEMENT_DRAW_COMBO_LEFT:
            case JUDGEMENT_DRAW_COMBO_RIGHT:
                si = SkillData.getSkillInfoById(JUDGEMENT_DRAW);
                slv = chr.getSkillLevel(JUDGEMENT_DRAW);
                o1.nOption = 1;
                o1.rOption = getOriginalSkillByID(skillID);
                o1.tOption = si.getValue(hcTime, slv);
                for (MobAttackInfo mai : attackInfo.mobAttackInfo) {
                    Mob mob = (Mob) chr.getField().getLifeByObjectID(mai.mobId);
                    if (mob == null) {
                        continue;
                    }
                    if (Util.succeedProp(si.getValue(hcProp, slv))) {
                        MobTemporaryStat mts = mob.getTemporaryStat();
                        mts.addStatOptionsAndBroadcast(chr, MobStat.Freeze, o1);
                    } else {
                        Skill judgementDrawSkill = chr.getSkill(JUDGEMENT_DRAW);
                        MobTemporaryStat mts = mob.getTemporaryStat();
                        mts.createAndAddBurnedInfo(chr, judgementDrawSkill);
                    }
                }
                break;

            case MAHAS_DOMAIN_SKILL_USE:
                SkillInfo mdi = SkillData.getSkillInfoById(MAHAS_DOMAIN);
                AffectedArea aa = AffectedArea.getPassiveAA(chr, MAHAS_DOMAIN, (byte) slv);
                aa.setPosition(chr.getPosition());
                aa.setRect(aa.getPosition().getRectAround(mdi.getFirstRect()));
                chr.getField().spawnAffectedArea(aa);
                aa.activateTimer(1000, 1000);
                break;

            case BLIZZARD_TEMPEST:
                o1.nOption = 1;
                o1.rOption = skillID;
                o1.tOption = 10;
                for (MobAttackInfo mai : attackInfo.mobAttackInfo) {
                    Mob mob = (Mob) chr.getField().getLifeByObjectID(mai.mobId);
                    if (mob == null) {
                        continue;
                    }
                    MobTemporaryStat mts = mob.getTemporaryStat();
                    mts.addStatOptionsAndBroadcast(chr, MobStat.Freeze, o1);
                }
                o2.nOption = 1;
                o2.rOption = BLIZZARD_TEMPEST_MOB;
                o2.tOption = si.getValue(SkillStat.q, slv);
                o2.xOption = chr.getId();
                o2.bOption = 0;
                tsm.putCharacterStatValue(BlizzardTempest, o2);
                tsm.putCharacterStatValue(AuraScythe, o2);
                tsm.sendSetStatPacket();

                lastDireWolfCurse = Long.MIN_VALUE;
                break;
        }

        super.handleAttack(c, attackInfo);
    }

    @Override
    public void handleKeyDownSkill(Char chr, int skillID, InPacket inPacket) {
        switch (skillID) {
            case FINISHER_HUNTER_PREY:
                var tsm = chr.getTemporaryStatManager();
                var opt = new Option(1, skillID, 6);
                tsm.putCharacterStatValue(IndieNotDamaged, opt, true);
                tsm.sendSetStatPacket();
                break;
        }
        super.handleKeyDownSkill(chr, skillID, inPacket);
    }

    @Override
    public void handleCancelKeyDownSkill(Char chr, int skillID) {
        switch (skillID) {

            case FINISHER_HUNTER_PREY:
                var tsm = chr.getTemporaryStatManager();
                tsm.removeStatsBySkill(skillID);
                break;
        }
        super.handleCancelKeyDownSkill(chr, skillID);
    }

    private boolean isNoIncComboAbilitySkill(int skillId) {
        return skillId == FINISHER_HUNTER_PREY || skillId == FINISHER_HUNTER_PREY_ATTACK
                || skillId == FINISHER_HUNTER_PREY_MOB_PULL || skillId == FINISHER_STORM_OF_FEAR
                || skillId == BLIZZARD_TEMPEST_DIRE_WOLF_ATTACK;
    }


    public void applyDireWolfCurse() {
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        if (!tsm.hasStat(BlizzardTempest) || lastDireWolfCurse + direWolfCurseInterval >Util.getCurrentTimeLong()) {
            return;
        }

        var si = SkillData.getSkillInfoById(BLIZZARD_TEMPEST_MOB);
        List<Mob> mobList = chr.getField().getMobsInRect(chr.getRectAround(si.getFirstRect())).stream().limit(10).collect(Collectors.toList());
        Map<Mob, Integer> mobCursedMap = new HashMap<>();
        for (var mob : mobList) {
            if (mob == null) {
                continue;
            }

            var count = incDireWolfCurse(mob);
            mobCursedMap.put(mob, count);
        }

        lastDireWolfCurse = Util.getCurrentTimeLong();
        chr.write(WvsContext.aranDireWolfCurse(mobCursedMap));
    }

    private int incDireWolfCurse(Mob mob) {
        var rOpt = JobConstants.JobEnum.ARAN_4.getJobId();;

        MobTemporaryStat mts = mob.getTemporaryStat();
        Option o = new Option();
        var count = 1;

        var prevOpt = mts.getOptByMobStatAndSkill(MobStat.ACC, rOpt);
        if (prevOpt != null) {
            count = prevOpt.xOption;
            if (count < 6) {
                count++;
            }
        }

        o.tOption = 10;
        o.rOption = rOpt;
        o.xOption = count;
        mts.addStatOptionsAndBroadcast(chr, MobStat.ACC, o);

        return count;
    }

    private void incrementComboAbility(TemporaryStatManager tsm, AttackInfo attackInfo) {
        SkillInfo comboInfo = SkillData.getSkillInfoById(COMBO_ABILITY);
        int amount = 1;
        if (!chr.hasSkill(COMBO_ABILITY)) {
            return;
        }
        if (tsm.hasStat(ComboAbilityBuff)) {
            amount = tsm.getOption(ComboAbilityBuff).nOption;
            if (amount < comboInfo.getValue(s2, chr.getSkill(COMBO_ABILITY).getCurrentLevel())) {
                for (MobAttackInfo mai : attackInfo.mobAttackInfo) {
                    if (mai.mob != null && mai.mob.isBoss()) {
                        amount += mai.damages.length;
                    } else {
                        amount++;
                    }
                }
            }
        }
        setComboAndBroadcast(amount);
    }

    private void doSwingStudiesAddAttack(TemporaryStatManager tsm) {
        if (tsm.hasStat(ChangeFoxMan)) {
            return;
        }
        Option o = new Option();
        var skillId = chr.hasSkill(SWING_STUDIES_1) ? chr.hasSkill(SWING_STUDIES_2) ? SWING_STUDIES_2 : SWING_STUDIES_1 : 0;
        if (skillId > 0) {
            o.nOption = skillId == SWING_STUDIES_2 ? 15 : 10;
            o.rOption = skillId;
            o.tOption = 5;
            tsm.putCharacterStatValue(ChangeFoxMan, o);
            tsm.sendSetStatPacket();
        }
    }

    public int getCombo() {
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        return tsm.hasStat(ComboAbilityBuff) ? tsm.getOption(ComboAbilityBuff).nOption : 0;
    }

    public void setComboAndBroadcast(int combo) {
        var correctedCombo = Math.min(1000, Math.max(0, combo));
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        Option o = new Option(correctedCombo, COMBO_ABILITY, 0);
        tsm.putCharacterStatValue(ComboAbilityBuff, o);
        tsm.sendSetStatPacket();
        chr.write(WvsContext.modComboResponse(correctedCombo, true));
    }

    public void aranDrain() {
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        if (tsm.hasStat(AranDrain)) {
            Skill skill = chr.getSkill(DRAIN);
            int slv = skill.getCurrentLevel();
            SkillInfo si = SkillData.getSkillInfoById(skill.getSkillId());
            int healrate = si.getValue(x, slv);
            chr.heal((int) (chr.getMaxHP() / ((double) 100 / healrate)));
        }
    }

    public void snowCharge(AttackInfo attackInfo) {
        if (!chr.hasSkill(SNOW_CHARGE)) {
            return;
        }
        Skill skill = chr.getSkill(SNOW_CHARGE);
        SkillInfo si = SkillData.getSkillInfoById(skill.getSkillId());
        int slv = chr.getSkill(skill.getSkillId()).getCurrentLevel();
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        Option o1 = new Option();
        o1.rOption = skill.getSkillId();
        o1.tOption = si.getValue(y, slv);
        o1.mOption = 1;
        if (tsm.getOptByCTSAndSkill(WeaponCharge, SNOW_CHARGE) != null) {
            for (MobAttackInfo mai : attackInfo.mobAttackInfo) {
                Mob mob = (Mob) chr.getField().getLifeByObjectID(mai.mobId);
                if (mob == null) {
                    continue;
                }
                MobTemporaryStat mts = mob.getTemporaryStat();
                o1.nOption = (mob.isBoss() ? -(si.getValue(q, slv) / 2) : -si.getValue(q, slv));
                mts.addStatOptionsAndBroadcast(chr, MobStat.Speed, o1);
            }
        }
    }

    private void doMahasFuryAttack() {
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        if (!tsm.hasStat(MahasFury) || !chr.hasSkill(MAHAS_FURY_BUFF)) {
            EventManager.stopTimer(mahasFuryAttackTimer);
            return;
        }
        chr.write(UserLocal.userBonusAttackRequest(MAHAS_FURY_ATTACK));
    }

    @Override
    public int getFinalAttackSkill() {
        Skill skill = getFinalAtkSkill();
        if (skill != null) {
            SkillInfo si = SkillData.getSkillInfoById(skill.getSkillId());
            int slv = skill.getCurrentLevel();
            int proc = si.getValue(prop, slv);

            if (Util.succeedProp(proc)) {
                int fas = 0;
                if (chr.hasSkill(FINAL_ATTACK)) {
                    fas = FINAL_ATTACK;
                }
                if (chr.hasSkill(ADVANCED_FINAL_ATTACK)) {
                    fas = ADVANCED_FINAL_ATTACK;
                }
                return fas;
            }
        }
        return super.getFinalAttackSkill();
    }

    private Skill getFinalAtkSkill() {
        Skill skill = null;
        if (chr.hasSkill(FINAL_ATTACK)) {
            skill = chr.getSkill(FINAL_ATTACK);
        }
        if (chr.hasSkill(ADVANCED_FINAL_ATTACK)) {
            skill = chr.getSkill(ADVANCED_FINAL_ATTACK);
        }
        return skill;
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
        Option o2 = new Option();
        Option o3 = new Option();
        switch (skillId) {
            case ADRENALINE_BURST:
                giveAdrenalinRushBuff(tsm);
                break;
            case POLEARM_BOOSTER:
                o1.nOption = si.getValue(x, slv);
                o1.rOption = skillId;
                o1.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(IndieBooster, o1);
                break;
            case BODY_PRESSURE:
                if (tsm.hasStatBySkillId(skillId)) {
                    tsm.removeStatsBySkill(skillId);
                } else {
                    o1.nOption = slv;
                    o1.rOption = skillId;
                    tsm.putCharacterStatValue(BodyPressure, o1);
                }
                break;
            case DRAIN:
                if (tsm.hasStatBySkillId(skillId)) {
                    tsm.removeStatsBySkill(skillId);
                } else {
                    o1.nOption = si.getValue(x, slv);
                    o1.rOption = skillId;
                    tsm.putCharacterStatValue(AranDrain, o1);
                }
                break;
            case SNOW_CHARGE:
                o1.nOption = 1;
                o1.rOption = skillId;
                o1.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(WeaponCharge, o1);
                break;
            case MAHA_BLESSING:
                o1.rOption = skillId;
                o1.nOption = si.getValue(indieMad, slv);
                o1.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(IndieMAD, o1);
                o2.rOption = skillId;
                o2.nOption = si.getValue(indiePad, slv);
                o2.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(IndiePAD, o2);
                break;
            case FINISHER_STORM_OF_FEAR:
            case FINISHER_HUNTER_PREY_SKILL_USE:
                restrictFinisher(tsm);
                break;
            case HEROIC_MEMORIES_ARAN:
                o1.rOption = skillId;
                o1.nOption = si.getValue(indieDamR, slv);
                o1.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(IndieDamR, o1);
                break;
            case MAHAS_FURY_BUFF:
                var tOpt = si.getValue(time, slv);
                o1.nOption = 1;
                o1.rOption = skillId;
                o1.tOption = tOpt;
                tsm.putCharacterStatValue(MahasFury, o1);
                o2.rOption = skillId;
                o2.nOption = si.getValue(indiePadR, slv);
                o2.tOption = tOpt;
                tsm.putCharacterStatValue(IndiePADR, o2);

                var addedCombo = si.getValue(z, slv);
                setComboAndBroadcast(getCombo() + addedCombo);

                var interval = si.getValue(x, slv);
                var executes = tOpt / interval;
                EventManager.stopTimer(mahasFuryAttackTimer);
                mahasFuryAttackTimer = EventManager.addFixedRateEvent(this::doMahasFuryAttack, interval * 1000, interval * 1000, executes);
                break;
        }
        tsm.sendSetStatPacket();
    }

    public int alterCooldownSkill(int skillId, int slv, AttackInfo attackInfo, SkillUseInfo sui, SkillUseSource source) {
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        switch (skillId) {
            case MAHAS_CARNAGE:
                SkillInfo si = SkillData.getSkillInfoById(skillId);
                if (tsm.hasStat(MahasFury)) {
                    return (int) ((si.getValue(cooltime, slv) / (100D / si.getValue(x, slv))) * 1000);
                }
                break;
        }
        return super.alterCooldownSkill(skillId, slv, attackInfo, sui, source);
    }


    // Hit related methods ---------------------------------------------------------------------------------------------


    @Override
    public void setCharCreationStats(Char chr) {
        super.setCharCreationStats(chr);
        CharacterStat cs = chr.getAvatarData().getCharacterStat();
        cs.setPosMap(914000000);
    }

    @Override
    public void stopTimers() {
        if (mahasFuryAttackTimer != null) {
            mahasFuryAttackTimer.cancel(true);
        }
        super.stopTimers();
    }
}
