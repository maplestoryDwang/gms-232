package net.swordie.ms.client.jobs.sengoku;

import net.swordie.ms.client.Client;
import net.swordie.ms.client.character.Char;
import net.swordie.ms.client.character.CharacterStat;
import net.swordie.ms.client.character.info.HitInfo;
import net.swordie.ms.client.character.items.BodyPart;
import net.swordie.ms.client.character.items.Item;
import net.swordie.ms.client.character.skills.Option;
import net.swordie.ms.client.character.skills.Skill;
import net.swordie.ms.client.character.skills.SkillStat;
import net.swordie.ms.client.character.skills.debuff.DebuffInfo;
import net.swordie.ms.client.character.skills.debuff.DebuffUtil;
import net.swordie.ms.client.character.skills.info.AttackInfo;
import net.swordie.ms.client.character.skills.info.MobAttackInfo;
import net.swordie.ms.client.character.skills.info.SkillInfo;
import net.swordie.ms.client.character.skills.info.SkillUseInfo;
import net.swordie.ms.client.character.skills.temp.CharacterTemporaryStat;
import net.swordie.ms.client.character.skills.temp.TemporaryStatManager;
import net.swordie.ms.client.jobs.Job;
import net.swordie.ms.connection.InPacket;
import net.swordie.ms.connection.OutPacket;
import net.swordie.ms.connection.packet.*;
import net.swordie.ms.constants.JobConstants;
import net.swordie.ms.constants.SkillChangeConstants;
import net.swordie.ms.enums.AssistType;
import net.swordie.ms.enums.MoveAbility;
import net.swordie.ms.enums.Stat;
import net.swordie.ms.handlers.executors.EventManager;
import net.swordie.ms.life.Summon;
import net.swordie.ms.life.mob.Mob;
import net.swordie.ms.life.mob.MobStat;
import net.swordie.ms.life.mob.MobTemporaryStat;
import net.swordie.ms.loaders.ItemData;
import net.swordie.ms.loaders.SkillData;
import net.swordie.ms.util.Util;
import net.swordie.ms.world.field.Field;

import java.util.Arrays;
import java.util.Map;
import java.util.concurrent.TimeUnit;

import static net.swordie.ms.client.character.skills.SkillStat.*;
import static net.swordie.ms.client.character.skills.temp.CharacterTemporaryStat.*;

/**
 * Created on 12/14/2017.
 */
public class Hayato extends Job {

    public static final int MAX_SWORD_ENERGY = 1000;

    //Blade Energy
    public static final int QUICK_DRAW = 40011288;
    public static final int NORMAL_STANCE_BONUS = 40011291;
    public static final int QUICK_DRAW_STANCE_BONUS = 40011292;
    public static final int SUMMER_RAIN = 40011289;
    public static final int HITOKIRI_HUNDRED_STRIKE = 40011290;
    public static final int MASTER_OF_BLADES = 40010000;
    public static final int SHIMADA_HEART = 40010067;
    public static final int RETURN_OF_THE_FIVE_PLANETS = 40011227;

    public static final int SURGING_BLADE = 41001002;
    public static final int SHOURYUUSEN = 41001013;
    public static final int BATTOUJUTSU_ADVANCE = 41001010;

    public static final int RISING_SLASH = 41101012;
    public static final int FALCON_DIVE = 41101013;
    public static final int KATANA_BOOSTER = 41101005; //Buff
    public static final int MILITARY_MIGHT = 41101003; //Buff

    public static final int DANKUUSEN = 41111015;
    public static final int SWEEPING_SWORD = 41111001;
    public static final int WILLOW_DODGE = 41110006;
    public static final int MERCILESS_BLADE = 41110007;
    public static final int WARRIOR_HEART = 41110009;

    public static final int IRON_SKIN = 41121003; //Buff
    public static final int AKATSUKI_HERO_HAYATO = 41121005; //Buff
    public static final int TORNADO_BLADE = 41121017; //Attack (Stun Debuff)
    public static final int HITOKIRI_STRIKE = 41121002; //Crit% buff
    public static final int HITOKIRI_STRIKE_ANGLE = 41121022;
    public static final int HITOKIRI_STRIKE_PERSIST = 41120049;
    public static final int EYE_FOR_AN_EYE = 41121015; //  ON/OFF
    public static final int JINSOKU = 41120006;
    public static final int BLOODLETTER = 41120007;
    public static final int SUDDEN_STRIKE = 41121018;
    public static final int AKATSUKI_BLOSSOMS = 41121004;
    public static final int SHINSOKU = 41121001;
    public static final int AKATSUKI_TRACE = 41120013;


    public static final int GOD_OF_BLADES = 41121054;
    public static final int PRINCESS_VOW_HAYATO = 41121053;
    public static final int FALCONS_HONOR = 41121052;

    // V skills
    public static final int BATTOUJUTSU_ZANKOU = 400011026;
    public static final int IAIJUTSU_PHANTOM_BLADE = 400011029;
    public static final int BATTOUJUTSU_ULTIMATE_WILL = 400011104;
    public static final int INSTANT_SLICE = 400011138;


    //BattouJutsu Linked Skills
    public static final int SURGING_BLADE_BATTOUJUTSU = 41001014;
    public static final int SHOURYUUSEN_BATTOUJUTSU = 41001015;
    public static final int RISING_SLASH_BATTOUJUTSU = 41101014;
    public static final int FALCON_DIVE_BATTOUJUTSU = 41101015;
    public static final int DANKUUSEN_BATTOUJUTSU = 41111018;
    public static final int SWEEPING_SWORD_BATTOUJUTSU = 41111017;
    public static final int TORNADO_BLADE_BATTOUJUTSU = 41121020;
    public static final int SUDDEN_STRIKE_BATTOUJUTSU = 41121021;

    // Blade Flash
    public static final int BLADE_FLASH = 41001009;
    public static final int JIN_BLADE_FLASH = 41101011;
    public static final int FUU_BLADE_FLASH = 41111014;
    public static final int RAI_BLADE_FLASH = 41121016;

    private static final int[] addedSkills = new int[]{
            QUICK_DRAW,
            SUMMER_RAIN,
            MASTER_OF_BLADES,
            SHIMADA_HEART,
            RETURN_OF_THE_FIVE_PLANETS,
            HITOKIRI_HUNDRED_STRIKE,
    };

    private static final int[] battoujutsuAdvanceAttacks = new int[] {
            SURGING_BLADE_BATTOUJUTSU,
            SHOURYUUSEN_BATTOUJUTSU,
            RISING_SLASH_BATTOUJUTSU,
            FALCON_DIVE_BATTOUJUTSU,
            DANKUUSEN_BATTOUJUTSU,
            SWEEPING_SWORD_BATTOUJUTSU,
            TORNADO_BLADE_BATTOUJUTSU,
            SUDDEN_STRIKE_BATTOUJUTSU,

            SURGING_BLADE,
            SHOURYUUSEN,
            RISING_SLASH,
            FALCON_DIVE,
            DANKUUSEN,
            SWEEPING_SWORD,
            TORNADO_BLADE,
            SUDDEN_STRIKE,
    };

    private int swordEnergy = 0;

    public int getSwordEnergy() {
        return swordEnergy;
    }

    public void setSwordEnergy(int swordEnergy) {
        setSwordEnergy(swordEnergy, false);
    }

    public void setSwordEnergy(int swordEnergy, boolean force) {
        var newSwordEnergy = Math.max(0, Math.min(MAX_SWORD_ENERGY, swordEnergy));
        var oldSwordEnergy = getSwordEnergy();
        this.swordEnergy = newSwordEnergy;
        if (newSwordEnergy != oldSwordEnergy || force) { // Only send packet when change in Sword Energy is made.
            chr.write(UserLocal.modHayatoCombo(newSwordEnergy));
        }
    }

    public Hayato(Char chr) {
        super(chr);
        if (isHandlerOfJob(chr.getJob())) {
            for (int id : addedSkills) {
                if (!chr.hasSkill(id)) {
                    Skill skill = SkillData.getSkillDeepCopyById(id);
                    skill.setCurrentLevel(skill.getMasterLevel());
                    chr.addSkill(skill);
                }
            }

            if (!chr.getQuestManager().hasQuestCompleted(57143)) {
                chr.getQuestManager().completeQuest(57143, false); // required to job adv
            }

            setSwordEnergy(0, true); // So that the packet is sent upon login
            giveHayatoStanceBonus();


            // TODO -> Only here for existing hayatos to get the new skill
            if (!chr.hasSkill(AKATSUKI_TRACE) && chr.getJob() == JobConstants.JobEnum.HAYATO_4.getJobId()) {
                chr.addSkill(AKATSUKI_TRACE, 20, 20);
            }
        }
    }

    @Override
    public boolean isHandlerOfJob(short id) {
        return JobConstants.isHayato(id);
    }


    private boolean isInQuickDrawStance() {
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        return tsm.hasStat(HayatoStance);
    }

    public void gainSwordEnergyFromGodOfBladesSummon(int swordEnergy) {
        int endingSwordEnergy = swordEnergy > 800 ? 800 : swordEnergy;
        incSwordEnergy(endingSwordEnergy);
        chr.write(UserPacket.effect(Effect.effectFromWZ("Skill/40001.img/skill/400011104/special0", !chr.isLeft(), 0, 0, 0)));
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
        var oldSwordEnergy = getHayatoStanceBonusCount();

        // Increment Sword Count from Killing/Attacking Mobs
        if (attackInfo.skillId != BATTOUJUTSU_ULTIMATE_WILL && attackInfo.skillId != QUICK_DRAW) {
            incrementSwordEnergy(attackInfo);
        }

        // Give BattoujutsuAdvance Buff from Using 'the trigger skills'
        if (isBattoujutsuAdvanceAttack(attackInfo.skillId)) {
            increaseBattoujutsuAdvance();
        }


        if (hasHitMobs) {
            if (isInQuickDrawStance()) {
                giveHayatoStunBonus(attackInfo);
            }
            applyDOTOnMob(attackInfo);
            warriorHeartHealHP();
        }
        Option o1 = new Option();
        Option o2 = new Option();
        Option o3 = new Option();
        switch (attackInfo.skillId) {
            case TORNADO_BLADE:
            case TORNADO_BLADE_BATTOUJUTSU:
                si = SkillData.getSkillInfoById(TORNADO_BLADE);
                slv = chr.getSkillLevel(TORNADO_BLADE);
                o1.nOption = 1;
                o1.rOption = TORNADO_BLADE;
                o1.tOption = si.getValue(time, slv);

                DebuffUtil.applyDebuffOnMobs(chr, MobStat.Stun, o1, attackInfo.getMobIds(), new DebuffInfo(true, si.getValue(subProp, slv)));
                break;
            case SUDDEN_STRIKE:
            case SUDDEN_STRIKE_BATTOUJUTSU:
                si = SkillData.getSkillInfoById(SUDDEN_STRIKE);
                slv = chr.getSkillLevel(SUDDEN_STRIKE);
                o1.nOption = si.getValue(y, slv);
                o1.rOption = SUDDEN_STRIKE;
                o1.tOption = si.getValue(time, slv);

                DebuffUtil.applyDebuffOnMobs(chr, MobStat.AddDamParty, o1, attackInfo.getMobIds());
                break;
            case SUMMER_RAIN:
            case HITOKIRI_HUNDRED_STRIKE:
                if ((tsm.getOptByCTSAndSkill(IndieDamR, SUMMER_RAIN) == null) || (tsm.getOptByCTSAndSkill(IndieDamR, HITOKIRI_HUNDRED_STRIKE) == null)) {
                    o1.rOption = attackInfo.skillId;
                    o1.nOption = 15;
                    o1.tOption = 120;
                    tsm.putCharacterStatValue(IndieDamR, o1); //Indie
                    tsm.sendSetStatPacket();
                }
                break;
            case HITOKIRI_STRIKE:
                if (tsm.getOptByCTSAndSkill(IndieCr, HITOKIRI_STRIKE) == null) {
                    o1.rOption = skillID;
                    o1.nOption = si.getValue(prop, slv);
                    o1.tOption = si.getValue(time, slv) + (chr.getSkillStatValue(time, HITOKIRI_STRIKE_PERSIST));
                    tsm.putCharacterStatValue(IndieCr, o1);
                    tsm.sendSetStatPacket();
                }
                break;
            case IAIJUTSU_PHANTOM_BLADE:
                if (getSwordEnergy() < 200) {
                    chr.chatMessage("You don't have enough sword energy for this skill.");
                    return;
                }
                if (hasHitMobs) {
                    o1.nOption = (tsm.hasStat(IaijutsuBlade) ? tsm.getOption(IaijutsuBlade).nOption : 0) + 1;
                    o1.rOption = skillID;
                    o1.tOption = si.getValue(time, slv);
                    if (o1.nOption > 5) {
                        o1.nOption = 5;
                    }
                    tsm.putCharacterStatValue(IaijutsuBlade, o1);
                    o2.nOption = si.getValue(w, slv) * o1.nOption;
                    o2.rOption = skillID;
                    o2.tOption = si.getValue(time, slv);
                    tsm.putCharacterStatValue(IndiePMdR, o2);
                    tsm.sendSetStatPacket();
                }
                if (attackInfo.summon != null) {
                    EventManager.addEvent(() -> chr.getField().removeSummon(attackInfo.summon), 200, TimeUnit.MILLISECONDS);
                }
                incSwordEnergy(-200);
                break;
            case BATTOUJUTSU_ULTIMATE_WILL:
                Field field = chr.getField();
                Summon gobSummon = getGodOfBladesSummon();
                if (gobSummon == null) {
                    return;
                }
                var inc = attackInfo.mobCount == 1 ? 10 : 8;
                for (MobAttackInfo mai : attackInfo.mobAttackInfo) {
                    Mob mob = (Mob) chr.getField().getLifeByObjectID(mai.mobId);
                    if (mob == null) {
                        continue;
                    }
                    if (attackInfo.mobCount == 1 || mai.mobDies) {
                        gobSummon.setCount(Math.min(gobSummon.getCount() + inc, 800));
                        OutPacket outPacket = MobPool.specialEffectBySkill(mob, attackInfo.skillId, chr.getId(), (short) 1000);
                        field.broadcastPacket(outPacket);
                    }
                }
                field.broadcastPacket(Summoned.effect(gobSummon, 3, 0));

                if (attackInfo.attackActionType == 25) {
                    field.removeSummon(gobSummon);
                }
                break;
            case BATTOUJUTSU_ZANKOU:
                o1.nOption = 1;
                o1.rOption = skillID;
                o1.tOption = 5;
                tsm.putCharacterStatValue(IndieNotDamaged, o1, true);
                tsm.sendSetStatPacket();
            case FALCONS_HONOR:
                incSwordEnergy(si.getValue(x, slv));
                break;
            case HITOKIRI_STRIKE_ANGLE:
                chr.setSkillCooldown(attackInfo.skillId, chr.getSkillLevel(HITOKIRI_STRIKE));
                break;
        }

        // Give Hayato Stance Bonuses
        if (oldSwordEnergy != getHayatoStanceBonusCount()) {
            giveHayatoStanceBonus();
        }

        super.handleAttack(c, attackInfo);
    }

    @Override
    public int getFinalAttackSkill() {
        var skill = chr.getSkill(AKATSUKI_TRACE);
        if (skill == null) {
            return super.getFinalAttackSkill();
        }
        var prop = SkillData.getSkillInfoById(skill.getSkillId()).getValue(SkillStat.prop, skill.getCurrentLevel());
        if (Util.succeedProp(prop)) {
            return AKATSUKI_TRACE;
        }

        return super.getFinalAttackSkill();
    }

    private boolean isBattoujutsuAdvanceAttack(int skillId) {
        return Arrays.stream(battoujutsuAdvanceAttacks).anyMatch(s -> s == skillId);
    }

    private void increaseBattoujutsuAdvance() {
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        Option o = new Option();
        Option o1 = new Option();

        SkillInfo si = SkillData.getSkillInfoById(BATTOUJUTSU_ADVANCE);
        var slv = 1; // always 1

        var stack = 1;
        if (tsm.hasStat(BattoujutsuAdvance)) {
            stack = tsm.getOption(BattoujutsuAdvance).nOption;
            if (stack < 8) {
                stack++;
            }
        }

        o.nOption = stack;
        o.rOption = BATTOUJUTSU_ADVANCE;
        o.tOption = si.getValue(time, slv);
        tsm.putCharacterStatValue(BattoujutsuAdvance, o, true);
        o1.nOption = stack * 2;
        o1.rOption = BATTOUJUTSU_ADVANCE;
        o1.tOption = si.getValue(time, slv);
        // tsm.putCharacterStatValue(DamR, o1, true);
        tsm.putCharacterStatValue(IndiePMdR, o1, true); // [Hayato] Custom Skill Change
        tsm.sendSetStatPacket();
    }

    private Summon getGodOfBladesSummon() {
        return chr.getField().getSummonByChrAndSkillId(chr, BATTOUJUTSU_ULTIMATE_WILL);
    }

    private void applyDOTOnMob(AttackInfo attackInfo) {
        if (chr.hasSkill(BLOODLETTER)) {
            Skill skill = chr.getSkill(BLOODLETTER);
            int slv = skill.getCurrentLevel();
            SkillInfo si = SkillData.getSkillInfoById(skill.getSkillId());
            int proc = si.getValue(prop, slv);
            for (MobAttackInfo mai : attackInfo.mobAttackInfo) {
                if (Util.succeedProp(proc)) {
                    Mob mob = (Mob) chr.getField().getLifeByObjectID(mai.mobId);
                    if (mob == null) {
                        continue;
                    }
                    MobTemporaryStat mts = mob.getTemporaryStat();
                    mts.createAndAddBurnedInfo(chr, skill);
                }
            }
        } else if (chr.hasSkill(MERCILESS_BLADE)) {
            Skill skill = chr.getSkill(MERCILESS_BLADE);
            int slv = skill.getCurrentLevel();
            SkillInfo si = SkillData.getSkillInfoById(skill.getSkillId());
            int proc = si.getValue(prop, slv);
            for (MobAttackInfo mai : attackInfo.mobAttackInfo) {
                if (Util.succeedProp(proc)) {
                    Mob mob = (Mob) chr.getField().getLifeByObjectID(mai.mobId);
                    if (mob == null) {
                        continue;
                    }
                    MobTemporaryStat mts = mob.getTemporaryStat();
                    mts.createAndAddBurnedInfo(chr, skill);
                }
            }
        }
    }

    private void warriorHeartHealHP() {
        if (chr.hasSkill(WARRIOR_HEART)) {
            Skill skill = chr.getSkill(WARRIOR_HEART);
            int slv = skill.getCurrentLevel();
            SkillInfo si = SkillData.getSkillInfoById(skill.getSkillId());
            int proc = si.getValue(prop, slv);
            int healrate = si.getValue(x, slv);
            int healhp = (int) ((chr.getMaxHP() / ((double) 100 / healrate)));

            //Get chance to heal on  #Crit hits
            if (Util.succeedProp(proc)) {
                chr.heal(healhp);
            }
        }
    }

    @Override
    public void handleSkillRemove(Char chr, int skillID, Map<CharacterTemporaryStat, Option> removedOptions) {
        if (skillID == QUICK_DRAW) {
            SkillInfo si = SkillData.getSkillInfoById(skillID);
            int cost = si.getValue(z, 1);
            incSwordEnergy(-cost);
            giveHayatoStanceBonus();

            TemporaryStatManager tsm = chr.getTemporaryStatManager();
            tsm.removeStat(HayatoStance);
        }
        super.handleSkillRemove(chr, skillID, removedOptions);
    }

    // stun enemies
    private void giveHayatoStunBonus(AttackInfo attackInfo) {
        Option o = new Option();
        o.nOption = 1;
        o.rOption = QUICK_DRAW;
        o.tOption = 3;
        var proc = 10;

        DebuffUtil.applyDebuffOnMobs(chr, MobStat.Stun, o, attackInfo.getMobIds(), new DebuffInfo(true, proc));
    }

    private void giveHayatoStanceBonus() {
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        Option o = new Option();
        Option o1 = new Option();
        Option o2 = new Option();
        Option o3 = new Option();
        Option o4 = new Option();
        var bonusCount = getHayatoStanceBonusCount();
        var skillId = NORMAL_STANCE_BONUS;
        if (isInQuickDrawStance()) {
            // Quick Draw Bonus
            // 15, 34, 110, 227, 633
            tsm.removeStatsBySkill(NORMAL_STANCE_BONUS);

            skillId = QUICK_DRAW_STANCE_BONUS;
            // Stats for bonusCount = 1
            var stance = 80;
            var crit = 30;
            var booster = -1;
            var bdr = 6;
            // Stuns & Attacks enemies

            switch (bonusCount) {
                case 2:
                    crit += 5;
                    break;
                case 3:
                    bdr += 2;
                    crit += 5;
                    break;
                case 4:
                    crit += 5;
                    break;
                case 5:
                    bdr += 2;
                    crit += 5;
                    break;
            }
            o1.nOption = booster;
            o1.rOption = skillId;
            tsm.putCharacterStatValue(IndieBooster, o1);

            o2.nOption = bdr;
            o2.rOption = skillId;
            tsm.putCharacterStatValue(IndieBDR, o2);

            o3.nOption = stance;
            o3.rOption = skillId;
            tsm.putCharacterStatValue(Stance, o3);

            o4.nOption = crit;
            o4.rOption = skillId;
            tsm.putCharacterStatValue(CriticalBuff, o4);

        } else {
            // Normal Stance Bonus
            // [CTS]
            tsm.removeStatsBySkill(QUICK_DRAW_STANCE_BONUS);

            // Stats for bonusCount = 1
            var padr = 1;
            var hpr = 20;
            var ied = 9;
            var stance = 40;

            switch (bonusCount) {
                case 2:
                    padr += 1;
                    ied += 4;
                    break;
                case 3:
                    padr += 2;
                    ied += 4;
                    break;
                case 4:
                    padr += 2;
                    ied += 4;
                    break;
                case 5:
                    padr += 2;
                    ied += 4;
                    break;
            }

            o1.nOption = padr;
            o1.rOption = skillId;
            tsm.putCharacterStatValue(IndiePADR, o1);

            o2.nOption = hpr;
            o2.rOption = skillId;
            tsm.putCharacterStatValue(IndieMHPR, o2);
            tsm.putCharacterStatValue(IndieMMPR, o2);

            o3.nOption = stance;
            o3.rOption = skillId;
            tsm.putCharacterStatValue(Stance, o3);

            o4.nOption = ied;
            o4.rOption = skillId;
            tsm.putCharacterStatValue(IndieIgnoreMobpdpR, o4);
        }

        o.nOption = bonusCount;
        o.rOption = skillId;
        tsm.putCharacterStatValue(HayatoStanceBonus, o);
        tsm.sendSetStatPacket();
    }

    private int getHayatoStanceBonusCount() {
        var energy = getSwordEnergy();
        return  energy < 200  ? 1 :
                energy < 400  ? 2 :
                energy < 700  ? 3 :
                energy < 1000 ? 4 :
                                5
                ;
    }

    private void incrementSwordEnergy(AttackInfo attackInfo) {
        for (MobAttackInfo mai : attackInfo.mobAttackInfo) {
            if (mai.mob == null) {
                continue;
            }
            if (mai.mobDies || mai.mob.isBoss() || isInQuickDrawStance()) {

                //reward BladeEnergy
                if (isInQuickDrawStance()) {
                    incSwordEnergy(2);
                } else {
                    incSwordEnergy(5);
                }
            }
        }
    }

    public void incSwordEnergy(int swordEnergy) {
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        // [Hayato] Custom Skill Change
        if (swordEnergy > 0 && SkillChangeConstants.GOD_OF_BLADES_INCREASES_BLADE_ENERGY && tsm.hasStatBySkillId(GOD_OF_BLADES)) {
            swordEnergy *= SkillChangeConstants.GOD_OF_BLADES_BLADE_ENERGY_MULTIPLIER;
        }
        setSwordEnergy(getSwordEnergy() + swordEnergy);
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
        Option o4 = new Option();
        Option o5 = new Option();
        switch (skillId) {
            case QUICK_DRAW:
                int cost = si.getValue(z, slv);
                incSwordEnergy(-cost);
                o1.nOption = 1;
                o1.rOption = skillId;
                o1.xOption = -skillId;
                tsm.putCharacterStatValue(HayatoStance, o1);
                giveHayatoStanceBonus();
                break;
            case BATTOUJUTSU_ADVANCE:
                tsm.removeStatsBySkill(skillId);
                o1.nOption = 1;
                o1.rOption = skillId;
                o1.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(BattoujutsuAdvance, o1);
                break;
            case KATANA_BOOSTER:
                o1.nOption = si.getValue(x, slv);
                o1.rOption = skillId;
                o1.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(IndieBooster, o1);
                break;
            case MILITARY_MIGHT:
                o1.rOption = skillId;
                o1.nOption = si.getValue(x, slv);
                o1.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(IndieMHPR, o1); //Indie
                o2.rOption = skillId;
                o2.nOption = si.getValue(y, slv);
                o2.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(IndieMMPR, o1); //Indie
                o3.nOption = si.getValue(speed, slv);
                o3.rOption = skillId;
                o3.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(Speed, o3);
                o4.nOption = si.getValue(jump, slv);
                o4.rOption = skillId;
                o4.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(Jump, o4);
                o5.nOption = si.getValue(padX, slv);
                o5.rOption = skillId;
                o5.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(PAD, o5);
                break;
            case EYE_FOR_AN_EYE:
                if (tsm.hasStatBySkillId(skillId)) {
                    tsm.removeStatsBySkill(skillId);
                } else {
                    o1.nOption = 1;
                    o1.rOption = skillId;
                    tsm.putCharacterStatValue(EyeForEye, o1);
                }
                break;
            case PRINCESS_VOW_HAYATO:
                o1.rOption = skillId;
                o1.nOption = si.getValue(indieDamR, slv);
                o1.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(IndieDamR, o1);
                break;
            case GOD_OF_BLADES:
                var tOpt = si.getValue(time, slv);
                o1.rOption = skillId;
                o1.nOption = si.getValue(indiePad, slv);
                o1.tOption = tOpt;
                tsm.putCharacterStatValue(IndiePAD, o1); //Indie
                o2.nOption = si.getValue(x, slv);
                o2.rOption = skillId;
                o2.tOption = tOpt;
                tsm.putCharacterStatValue(AsrR, o2);
                o3.nOption = si.getValue(x, slv);
                o3.rOption = skillId;
                o3.tOption = tOpt;
                tsm.putCharacterStatValue(TerR, o3);

                // [Hayato] Custom Skill Change
                o4.nOption = SkillChangeConstants.GOD_OF_BLADES_BOOSTER;
                o4.rOption = skillId;
                o4.tOption = tOpt;
                tsm.putCharacterStatValue(IndieBooster, o4);
                break;
            case IAIJUTSU_PHANTOM_BLADE:
                Summon summon = Summon.getSummonBy(chr, skillId, slv);
                summon.setFlyMob(false);
                summon.setMoveAbility(MoveAbility.Walk);
                summon.setAssistType(AssistType.AttackCounter);
                summon.setAvatarLook(chr.getAvatarData().getAvatarLook());
                chr.getField().spawnSummonAndRemoveOld(summon);
                break;
            case BATTOUJUTSU_ULTIMATE_WILL:
                if (getSwordEnergy() < si.getValue(s, slv)) {
                    chr.chatMessage("You don't have enough sword energy for this skill.");
                    return;
                }
                incSwordEnergy(-si.getValue(s, slv));
                giveHayatoStanceBonus();
                summon = Summon.getSummonBy(chr, skillId, slv);
                summon.setFlyMob(false);
                summon.setMoveAbility(MoveAbility.Stop);
                chr.getField().spawnSummonAndRemoveOld(summon);
                break;
        }
        tsm.sendSetStatPacket();
    }

    @Override
    public void handleKeyDownSkill(Char chr, int skillID, InPacket inPacket) {
        switch (skillID) {
            case SHINSOKU:
                var tsm = chr.getTemporaryStatManager();
                var opt = new Option(200, skillID, 0);
                tsm.putCharacterStatValue(KeyDownMoving, opt);
                tsm.sendSetStatPacket();
        }
        super.handleKeyDownSkill(chr, skillID, inPacket);
    }

    // Hit related methods ---------------------------------------------------------------------------------------------

    @Override
    public void handleHit(Client c, InPacket inPacket, HitInfo hitInfo) {
        TemporaryStatManager tsm = chr.getTemporaryStatManager();

        //Dodge
        if (hitInfo.hpDamage <= 0 && hitInfo.mpDamage <= 0) {
            jinsoku();
            incrementWillowDodge();
        }
        super.handleHit(c, inPacket, hitInfo);
    }


    public void incrementWillowDodge() {
        Skill skill = chr.getSkill(WILLOW_DODGE);
        if (skill == null) {
            return;
        }
        int slv = skill.getCurrentLevel();
        SkillInfo si = SkillData.getSkillInfoById(WILLOW_DODGE);
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        Option o = new Option();
        int amount = 1;
        if (tsm.hasStat(WillowDodge)) {
            amount = tsm.getOption(WillowDodge).xOption;
            if (amount < si.getValue(x, slv)) {
                amount++;
            }
        }
        o.nOption = amount * si.getValue(damR, slv);
        o.rOption = WILLOW_DODGE;
        o.tOption = 20;
        o.xOption = amount;
        tsm.putCharacterStatValue(WillowDodge, o);
        tsm.sendSetStatPacket();
    }

    public void jinsoku() {
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        Option o = new Option();
        if (chr.hasSkill(JINSOKU)) {
            Skill skill = chr.getSkill(JINSOKU);
            int slv = skill.getCurrentLevel();
            SkillInfo si = SkillData.getSkillInfoById(skill.getSkillId());
            int proc = si.getValue(t, slv);
            if (Util.succeedProp(proc)) {
                o.nOption = si.getValue(y, slv);
                o.rOption = skill.getSkillId();
                o.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(Jinsoku, o);
                tsm.sendSetStatPacket();
            }
        }
    }

    @Override
    public void handleRevive() {
        giveHayatoStanceBonus();
        super.handleRevive();
    }

    @Override
    public void onWarp(Field oldField, Field newField) {
        setSwordEnergy(swordEnergy, true);
        super.onWarp(oldField, newField);
    }

    @Override
    public void setCharCreationStats(Char chr) {
        super.setCharCreationStats(chr);
        CharacterStat cs = chr.getAvatarData().getCharacterStat();
        cs.setPosMap(807100000);
        Item item = ItemData.getItemDeepCopy(1352804); // Secondary
        item.setBagIndex(BodyPart.Shield.getVal());
        chr.getEquippedInventory().addItem(item);
    }

    @Override
    public void handleLevelUp() {
        super.handleLevelUp();
        if (chr.getLevel() == 60) {
            chr.setJob(JobConstants.JobEnum.HAYATO_3.getJobId());
            chr.setStatAndSendPacket(Stat.job, (short) JobConstants.JobEnum.HAYATO_3.getJobId());
            chr.addSpToJobByCurrentJob(2);
        }
        if (chr.getLevel() == 100) {
            chr.setJob(JobConstants.JobEnum.HAYATO_4.getJobId());
            chr.setStatAndSendPacket(Stat.job, (short) 4112);
            chr.addSpToJobByCurrentJob(3);
        }
    }
}
