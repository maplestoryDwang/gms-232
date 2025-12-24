package net.swordie.ms.client.jobs.adventurer.archer;

import net.swordie.ms.client.Client;
import net.swordie.ms.client.character.Char;
import net.swordie.ms.client.character.skills.Option;
import net.swordie.ms.client.character.skills.Skill;
import net.swordie.ms.client.character.skills.debuff.DebuffInfo;
import net.swordie.ms.client.character.skills.debuff.DebuffUtil;
import net.swordie.ms.client.character.skills.info.AttackInfo;
import net.swordie.ms.client.character.skills.info.MobAttackInfo;
import net.swordie.ms.client.character.skills.info.SkillInfo;
import net.swordie.ms.client.character.skills.info.SkillUseInfo;
import net.swordie.ms.client.character.skills.shootobject.ShootObjectSkillInfo;
import net.swordie.ms.client.character.skills.temp.CharacterTemporaryStat;
import net.swordie.ms.client.character.skills.temp.TemporaryStatManager;
import net.swordie.ms.connection.InPacket;
import net.swordie.ms.constants.JobConstants;
import net.swordie.ms.enums.MoveAbility;
import net.swordie.ms.enums.Stat;
import net.swordie.ms.life.Summon;
import net.swordie.ms.life.mob.Mob;
import net.swordie.ms.life.mob.MobStat;
import net.swordie.ms.life.mob.MobTemporaryStat;
import net.swordie.ms.loaders.SkillData;
import net.swordie.ms.util.Position;
import net.swordie.ms.util.Util;
import net.swordie.ms.world.field.Field;

import static net.swordie.ms.client.character.skills.SkillStat.*;
import static net.swordie.ms.client.character.skills.temp.CharacterTemporaryStat.*;

public class Marksman extends Archer {
    public static final int FINAL_ATTACK_XBOW = 3200001;
    public static final int NET_TOSS = 3201008;
    public static final int XBOW_BOOSTER = 3201002;
    public static final int SOUL_ARROW_XBOW = 3201004;


    public static final int PAIN_KILLER = 3211011;
    public static final int FREEZER = 3211005;
    public static final int MORTAL_BLOW_XBOW = 3210001;
    public static final int AGGRESSIVE_RESISTANCE = 3210013;
    public static final int EVASION_BOOST_XBOW = 3210007;
    public static final int HOOKSHOT_MM = 3211010;
    public static final int RECKLESS_HUNT_XBOW = 3211012;


    public static final int MAPLE_WARRIOR_XBOW = 3221000;
    public static final int ARROW_ILLUSION = 3221014;
    public static final int SHARP_EYES_XBOW = 3221002;
    public static final int SHARP_EYES_XBOW_GUARDBREAK = 3220044;
    public static final int SHARP_EYES_XBOW_PERSIST = 3220043;
    public static final int SHARP_EYES_XBOW_CRITICAL_CHANCE = 3220045;
    public static final int ILLUSION_STEP_XBOW = 3221006;
    public static final int HEROS_WILL_MM = 3221008;
    public static final int BULLSEYE_SHOT = 3221054;
    public static final int EPIC_ADVENTURE_XBOW = 3221053;


    // V skills
    public static final int PERFECT_SHOT = 400031006;
    public static final int PERFECT_SHOT_HIT = 400031010;
    public static final int SPLIT_SHOT = 400031015;
    public static final int SPLIT_SHOT_FINAL_ATTACK = 400031016;
    public static final int REPEATING_CROSSBOW_CARTRIDGE = 400031055;
    public static final int FULL_BURST_SHOT = 400031056;
    public static final int SURGE_BOLT = 400031025;


    public Marksman(Char chr) {
        super(chr);
    }



    @Override
    public boolean isHandlerOfJob(short id) {
        return JobConstants.isMarksman(id);
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
        giveAggressiveResistanceBuff(attackInfo);
        mortalBlowXbow();

        Option o1 = new Option();
        Option o2 = new Option();
        Option o3 = new Option();
        Option o4 = new Option();
        Summon summon;
        Field field = chr.getField();
        switch (attackInfo.skillId) {
            case NET_TOSS:
                int duration = si.getValue(time, slv);

                // Boss
                o1.nOption = -50;
                o1.rOption = skillID;
                o1.tOption = duration / 2;

                // Mob
                o2.nOption = -40;
                o2.rOption = skillID;
                o2.tOption = duration;
                for (MobAttackInfo mai : attackInfo.mobAttackInfo) {
                    if (Util.succeedProp(si.getValue(prop, slv))) {
                        Mob mob = mai.mob;
                        if (mob == null) {
                            continue;
                        }
                        MobTemporaryStat mts = mob.getTemporaryStat();
                        mts.addStatOptionsAndBroadcast(chr, MobStat.Speed, mob.isBoss() ? o1 : o2);
                    }
                }
                break;
            case ARROW_ILLUSION:
                o1.nOption = 1;
                o1.rOption = skillID;
                o1.tOption = si.getValue(subTime, slv);

                DebuffUtil.applyDebuffOnMobs(chr, MobStat.Stun, o1, attackInfo.getMobIds(), new DebuffInfo(true, si.getValue(prop, slv)));
                break;
            case FREEZER:
                o1.nOption = 1;
                o1.rOption = skillID;
                o1.tOption = si.getValue(x, slv);

                DebuffUtil.applyDebuffOnMobs(chr, MobStat.Freeze, o1, attackInfo.getMobIds(), new DebuffInfo(true));
                break;
            case PERFECT_SHOT_HIT:
                int curBulletCount = tsm.getOptByCTSAndSkill(PerfectShot, PERFECT_SHOT) != null ? tsm.getOption(PerfectShot).nOption : 0;
                duration = (int) tsm.getRemainingTime(PerfectShot, PERFECT_SHOT);
                curBulletCount--;

                if (curBulletCount > 0) {
                    o1.nOption = curBulletCount;
                    o1.rOption = PERFECT_SHOT;
                    o1.tOption = duration;
                    o1.setInMillis(true);
                    tsm.putCharacterStatValue(PerfectShot, o1);
                } else {
                    tsm.removeStatsBySkill(PERFECT_SHOT);
                }
                tsm.sendSetStatPacket();
                break;
        }
        super.handleAttack(c, attackInfo);
    }


    private void giveAggressiveResistanceBuff(AttackInfo ai) {
        if (!chr.hasSkill(AGGRESSIVE_RESISTANCE)) {
            return;
        }
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        Skill skill = chr.getSkill(AGGRESSIVE_RESISTANCE);
        SkillInfo si = SkillData.getSkillInfoById(AGGRESSIVE_RESISTANCE);
        int slv = skill.getCurrentLevel();
        Option o = tsm.getOptByCTSAndSkill(DamAbsorbShield, AGGRESSIVE_RESISTANCE);
        Option o1 = new Option();
        if (o == null) {
            o = new Option();
            o.nOption = 0;
            o.rOption = AGGRESSIVE_RESISTANCE;
        }
        o.nOption = (int) Math.min((int) ai.totalDamageDealt * (si.getValue(y, slv) / 100D) + o.nOption,
                chr.getStat(Stat.mhp) / (si.getValue(z, slv) / 100D));
        o.tOption = si.getValue(time, slv);
        tsm.putCharacterStatValue(PowerTransferGauge, o);
        tsm.sendSetStatPacket();
    }

    private void mortalBlowXbow() {
        if (!chr.hasSkill(MORTAL_BLOW_XBOW)) {
            return;
        }
        Skill skill = chr.getSkill(MORTAL_BLOW_XBOW);
        SkillInfo si = SkillData.getSkillInfoById(skill.getSkillId());
        int slv = skill.getCurrentLevel();
        if (Util.succeedProp(si.getValue(x, slv))) {
            var tsm = chr.getTemporaryStatManager();

            int healed = si.getValue(z, slv);
            chr.heal((int) (healed * chr.getMaxHP() / 100F));
            chr.healMP((int) (healed * chr.getMaxMP() / 100F));

            tsm.putCharacterStatValue(IndieDamR, new Option(si.getValue(y, slv), MORTAL_BLOW_XBOW, 1));
        }
    }

    private Skill getFinalAtkSkill() {
        Skill skill = null;
        if (chr.hasSkill(FINAL_ATTACK_XBOW)) {
            skill = chr.getSkill(FINAL_ATTACK_XBOW);
        }
        return skill;
    }

    @Override
    public int getFinalAttackSkill() {
        Skill faSkill = getFinalAtkSkill();
        if (faSkill != null) {
            SkillInfo si = SkillData.getSkillInfoById(faSkill.getSkillId());
            int slv = faSkill.getCurrentLevel();
            int proc = si.getValue(prop, slv);
            if (Util.succeedProp(proc)) {
                return faSkill.getSkillId();
            }
        }
        return super.getFinalAttackSkill();
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
            case PAIN_KILLER:
                o1.nOption = 100;
                o1.rOption = skillId;
                o1.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(IndieAsrR, o1);
                break;
            case BULLSEYE_SHOT:
                o1.nOption = si.getValue(y, slv);
                o1.rOption = skillId;
                o1.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(BullsEye, o1); // crDmg
                o2.rOption = skillId;
                o2.nOption = si.getValue(indieDamR, slv);
                o2.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(IndieDamR, o2);
                o3.rOption = skillId;
                o3.nOption = si.getValue(indieIgnoreMobpdpR, slv);
                o3.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(IndieIgnoreMobpdpR, o3);
                o4.rOption = skillId;
                o4.nOption = si.getValue(x, slv);
                o4.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(IndieCr, o4);
                break;
            case RECKLESS_HUNT_XBOW:
                if (tsm.hasStatBySkillId(skillId)) {
                    tsm.removeStatsBySkill(skillId);
                } else {
                    o1.nOption = -si.getValue(x, slv);
                    o1.rOption = skillId;
                    tsm.putCharacterStatValue(IndieEVAR, o1);
                    o2.nOption = si.getValue(z, slv);
                    o2.rOption = skillId;
                    tsm.putCharacterStatValue(IndieCrDmg, o2);
                }
                break;
            case ARROW_ILLUSION:
                summon = Summon.getSummonBy(chr, skillId, slv);
                summon.setMoveAbility(MoveAbility.Stop);
                summon.setMaxHP(si.getValue(x, slv));
                Position position = inPacket.decodePosition();
                summon.setCurFoothold((short) field.findFootHoldBelow(position).getId());
                summon.setPosition(position);
                summon.setMaxHP(si.getValue(x, slv));
                summon.setHp(summon.getMaxHP());
                field.spawnSummonAndRemoveOld(summon);
                break;
            case SPLIT_SHOT:
                o1.nOption = 1;
                o1.rOption = skillId;
                o1.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(SplitShot, o1);
                break;
            case PERFECT_SHOT:
                o1.nOption = si.getValue(x, slv);
                o1.rOption = skillId;
                o1.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(PerfectShot, o1);
                break;
            case REPEATING_CROSSBOW_CARTRIDGE:
                o1.nOption = si.getValue(x, slv);
                o1.rOption = skillId;
                o1.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(RepeatingCrossbowCartridge, o1);
                break;
        }
        tsm.sendSetStatPacket();
    }

    private void decreaseRepeatingCrossbowCartridge() {
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        if (!tsm.hasStat(RepeatingCrossbowCartridge) || !chr.hasSkill(REPEATING_CROSSBOW_CARTRIDGE)) {
            return;
        }

        var o = tsm.getOption(RepeatingCrossbowCartridge);
        o.nOption -= 1;

        if (o.nOption <= 0) {
            tsm.removeStatsBySkill(REPEATING_CROSSBOW_CARTRIDGE);
        } else {
            tsm.updateBuff(RepeatingCrossbowCartridge, o);
        }
    }

    @Override
    public void handleShootObj(Char chr, ShootObjectSkillInfo sosi) {
        if (sosi.getSkillId() == FULL_BURST_SHOT) {
            decreaseRepeatingCrossbowCartridge();
        }

        super.handleShootObj(chr, sosi);
    }

    public void handleRemoveCTS(CharacterTemporaryStat cts, Option o) {
        if (cts.equals(PerfectShot)) {
            TemporaryStatManager tsm = chr.getTemporaryStatManager();
            Option o1 = new Option();
            o1.nOption = 1;
            o1.rOption = PERFECT_SHOT_HIT;
            o1.tOption = 2;
            tsm.putCharacterStatValue(IndieNotDamaged, o1, true);
            tsm.sendSetStatPacket();
        }
        super.handleRemoveCTS(cts, o);
    }


    // Hit related methods ---------------------------------------------------------------------------------------------

}
