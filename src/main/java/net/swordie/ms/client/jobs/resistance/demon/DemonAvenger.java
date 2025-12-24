package net.swordie.ms.client.jobs.resistance.demon;

import net.swordie.ms.client.Client;
import net.swordie.ms.client.character.Char;
import net.swordie.ms.client.character.info.HitInfo;
import net.swordie.ms.client.character.skills.BypassCooldownCheckType;
import net.swordie.ms.client.character.skills.Option;
import net.swordie.ms.client.character.skills.Skill;
import net.swordie.ms.client.character.skills.SkillUseSource;
import net.swordie.ms.client.character.skills.atom.forceatom.ForceAtom;
import net.swordie.ms.client.character.skills.info.*;
import net.swordie.ms.client.character.skills.temp.CharacterTemporaryStat;
import net.swordie.ms.client.character.skills.temp.TemporaryStatManager;
import net.swordie.ms.connection.InPacket;
import net.swordie.ms.constants.JobConstants;
import net.swordie.ms.constants.SkillChangeConstants;
import net.swordie.ms.constants.SkillConstants;
import net.swordie.ms.enums.BaseStat;
import net.swordie.ms.enums.ForceAtomEnum;
import net.swordie.ms.enums.MoveAbility;
import net.swordie.ms.handlers.executors.EventManager;
import net.swordie.ms.life.AffectedArea;
import net.swordie.ms.life.Summon;
import net.swordie.ms.life.mob.Mob;
import net.swordie.ms.life.mob.MobStat;
import net.swordie.ms.life.mob.MobTemporaryStat;
import net.swordie.ms.loaders.SkillData;
import net.swordie.ms.util.Position;
import net.swordie.ms.util.Rect;
import net.swordie.ms.util.Util;
import net.swordie.ms.world.field.Field;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.concurrent.ScheduledFuture;
import java.util.concurrent.TimeUnit;

import static net.swordie.ms.client.character.skills.SkillStat.*;
import static net.swordie.ms.client.character.skills.temp.CharacterTemporaryStat.*;

public class DemonAvenger extends Demon {
    public static final int STAR_FORCE_CONVERSION = 30010232;
    public static final int HYPER_POTION_MASTERY = 30010231;
    public static final int EXCEED = 30010230;
    public static final int BLOOD_PACT = 30010242;


    public static final int EXCEED_DOUBLE_SLASH_1 = 31011000; //Special Attack
    public static final int EXCEED_DOUBLE_SLASH_2 = 31011004; //Special Attack
    public static final int EXCEED_DOUBLE_SLASH_3 = 31011005; //Special Attack
    public static final int EXCEED_DOUBLE_SLASH_4 = 31011006; //Special Attack
    public static final int EXCEED_DOUBLE_SLASH_PURPLE = 31011007; //Special Attack
    public static final int LIFE_SAP = 31010002; //Passive Life Drain
    public static final int OVERLOAD_RELEASE = 31011001; // Special Buff


    public static final int EXCEED_DEMON_STRIKE_1 = 31201000; //Special Attack
    public static final int EXCEED_DEMON_STRIKE_2 = 31201007; //Special Attack
    public static final int EXCEED_DEMON_STRIKE_3 = 31201008; //Special Attack
    public static final int EXCEED_DEMON_STRIKE_4 = 31201009; //Special Attack
    public static final int EXCEED_DEMON_STRIKE_PURPLE = 31201010; //Special Attack
    public static final int BATTLE_PACT_DA = 31201002; //Buff
    public static final int BAT_SWARM = 31201001;


    public static final int EXCEED_LUNAR_SLASH_1 = 31211000; //Special Attack
    public static final int EXCEED_LUNAR_SLASH_2 = 31211007; //Special Attack
    public static final int EXCEED_LUNAR_SLASH_3 = 31211008; //Special Attack
    public static final int EXCEED_LUNAR_SLASH_4 = 31211009; //Special Attack
    public static final int EXCEED_LUNAR_SLASH_PURPLE = 31211010; //Special Attack
    public static final int VITALITY_VEIL = 31211001;
    public static final int SHIELD_CHARGE_RUSH = 31211002;
    public static final int SHIELD_CHARGE = 31211011; //Special Attack (Stun Debuff)
    public static final int ADVANCED_LIFE_SAP = 31210006; //Passive Life Drain
    public static final int PAIN_DAMPENER = 31210005;


    public static final int EXCEED_EXECUTION_1 = 31221000; //Special Attack
    public static final int EXCEED_EXECUTION_2 = 31221009; //Special Attack
    public static final int EXCEED_EXECUTION_3 = 31221010; //Special Attack
    public static final int EXCEED_EXECUTION_4 = 31221011; //Special Attack
    public static final int EXCEED_EXECUTION_PURPLE = 31221012; //Special Attack
    public static final int NETHER_SHIELD = 31221001; //Special Attack
    public static final int NETHER_SHIELD_ATOM = 31221014; //atom
    public static final int NETHER_SHIELD_SPREAD = 31220050; //atom
    public static final int NETHER_SLICE = 31221002; // Special Attack (DefDown Debuff)
    public static final int BLOOD_PRISON = 31221003; // Special Attack (Stun Debuff)
    public static final int MAPLE_WARRIOR_DA = 31221008; //Buff
    public static final int INFERNAL_EXCEED = 31220007;
    public static final int DEMONIC_FORTITUDE_DA = 31221053;
    public static final int THOUSAND_SWORDS = 31221052;
    public static final int FORBIDDEN_CONTRACT = 31221054;
    public static final int WARD_EVIL = 31211003; //Buff
    public static final int WARD_EVIL_HARDEN = 31220046;
    public static final int WARD_EVIL_IMMUNITY_ENHANCE_2 = 31220047;
    public static final int WARD_EVIL_IMMUNITY_ENHANCE_1 = 31220048;
    public static final int EXCEED_OPPORTUNITY = 31220045;
    public static final int DIABOLIC_RECOVERY = 31211004; //Buff


    // V skills
    public static final int DEMONIC_FRENZY = 400011010;
    public static final int DEMONIC_FRENZY_AA = 400010010;
    public static final int DEMONIC_BLAST_HOLDDOWN = 400011038;
    public static final int DEMONIC_BLAST_ATTACK_1 = 400011062;
    public static final int DEMONIC_BLAST_ATTACK_2 = 400011063;
    public static final int DEMONIC_BLAST_ATTACK_3 = 400011064;
    public static final int DIMENSIONAL_SWORD_SUMMON = 400011090;
    public static final int DIMENSIONAL_SWORD_ATTACK = 400011102;
    public static final int REVENANT = 400011112;
    public static final int THORN_OF_FURY_1 = 400011113;
    public static final int THORN_OF_FURY_2 = 400011114;
    public static final int THORN_OF_FURY_3 = 400011115;
    public static final int REVENANT_END = 400011129;


    private static final int[] addedSkills = new int[]{
            EXCEED,
            BLOOD_PACT,
            HYPER_POTION_MASTERY,
            STAR_FORCE_CONVERSION,
    };

    private static final int[] noHpRConSkills = new int[] {
            0, // Basic Attacks
            NETHER_SHIELD_ATOM,
            DEFENDER_OF_THE_DEMON,
            DEFENDER_OF_THE_DEMON_MASTEMA_MARK,
            DIMENSIONAL_SWORD_SUMMON,
            DIMENSIONAL_SWORD_ATTACK
    };

    private int lastExceedSkill;
    private ScheduledFuture diabolicRecoveryTimer;


    public DemonAvenger(Char chr) {
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
        return JobConstants.isDemonAvenger(id);
    }


    public void diabolicRecoveryHPRecovery() {
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        if (tsm.hasStat(DiabolikRecovery)) {
            var healR = tsm.getOption(DiabolikRecovery).nOption;
            chr.heal(chr.getHPPerc(healR));
        } else {
            EventManager.stopTimer(diabolicRecoveryTimer);
        }
    }

    public void sendHpUpdate() {
        // Used for client side damage calculation for DAs
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        Option o = new Option();
        o.nOption = 3; // Hp -> damage conversion
        o.mOption = chr.getTotalStat(BaseStat.mhp);
        tsm.putCharacterStatValue(LifeTidal, o);
    }

    public void giveDemonFrenzy() {
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        if (!chr.hasSkill(DEMONIC_FRENZY) || tsm.getOptByCTSAndSkill(DemonFrenzy, DEMONIC_FRENZY) == null) {
            return;
        }

        Skill skill = chr.getSkill(DEMONIC_FRENZY);
        SkillInfo si = SkillData.getSkillInfoById(skill.getSkillId());
        int slv = skill.getCurrentLevel();
        var dmgToSelf = si.getValue(y, slv);

        if (chr.getHP() > dmgToSelf && chr.getCurrentHPPerc() >= si.getValue(q2, slv)) {
            chr.heal(-dmgToSelf, true, false);

            Option o = new Option();
            Option prevOpt = tsm.getOption(DemonFrenzy);
            o.nOption = prevOpt.nOption;
            o.rOption = prevOpt.rOption;
            o.xOption = (int) (100 - chr.getCurrentHPPerc()) / si.getValue(u, slv);
            tsm.putCharacterStatValue(DemonFrenzy, o);
            tsm.sendSetStatPacket();

            if (Util.succeedProp(60)) {
                spillBlood();
            }
        }
    }

    private void spillBlood() {
        SkillInfo si = SkillData.getSkillInfoById(DEMONIC_FRENZY_AA);
        int slv = chr.getSkillLevel(DEMONIC_FRENZY);
        AffectedArea aa = AffectedArea.getPassiveAA(chr, DEMONIC_FRENZY_AA, (byte) chr.getSkillLevel(DEMONIC_FRENZY));
        aa.setPosition(chr.getPosition());
        aa.setDuration(si.getValue(time, slv) * 1000);
        aa.setRect(new Position(aa.getPosition().getX(), aa.getPosition().getY() + 50).getRectAround(si.getFirstRect()));
        chr.getField().spawnAffectedArea(aa);
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
        //DA HP Cost System
        applyHpCostForDA(SkillConstants.getActualSkillIDfromSkillID(attackInfo.skillId));

        if (hasHitMobs) {

            //Life Sap & Advanced Life Sap
            lifeSapHealing();
        }

        Option o1 = new Option();
        Option o2 = new Option();
        Option o3 = new Option();
        Option o4 = new Option();
        switch (attackInfo.skillId) {
            case DEMONIC_BLAST_ATTACK_3:
                si = SkillData.getSkillInfoById(DEMONIC_BLAST_HOLDDOWN);
                var hpRecovered = si.getValue(dot, attackInfo.slv);
                chr.heal(chr.getHPPerc(hpRecovered), false, false, DEMONIC_BLAST_HOLDDOWN);
                tsm.removeStatsBySkill(DEMONIC_BLAST_HOLDDOWN);
                break;
            case DEMONIC_BLAST_ATTACK_2:
                si = SkillData.getSkillInfoById(DEMONIC_BLAST_HOLDDOWN);
                hpRecovered = si.getValue(v2, attackInfo.slv);
                chr.heal(chr.getHPPerc(hpRecovered), false, false, DEMONIC_BLAST_HOLDDOWN);
                tsm.removeStatsBySkill(DEMONIC_BLAST_HOLDDOWN);
                break;
            case DEMONIC_BLAST_ATTACK_1:
                si = SkillData.getSkillInfoById(DEMONIC_BLAST_HOLDDOWN);
                hpRecovered = si.getValue(u, attackInfo.slv);
                chr.heal(chr.getHPPerc(hpRecovered), false, false, DEMONIC_BLAST_HOLDDOWN);
                tsm.removeStatsBySkill(DEMONIC_BLAST_HOLDDOWN);
                break;
            case BLOOD_PRISON:
                o1.nOption = 1;
                o1.rOption = skill.getSkillId();
                o1.tOption = si.getValue(time, slv);
                for (MobAttackInfo mai : attackInfo.mobAttackInfo) {
                    Mob mob = (Mob) chr.getField().getLifeByObjectID(mai.mobId);
                    if (mob == null) {
                        continue;
                    }
                    MobTemporaryStat mts = mob.getTemporaryStat();
                    mts.addStatOptionsAndBroadcast(chr, MobStat.Stun, o1);
                }
                break;
            case SHIELD_CHARGE:
                o1.nOption = 1;
                o1.rOption = SkillConstants.getActualSkillIDfromSkillID(skillID);
                o1.tOption = 5;
                for (MobAttackInfo mai : attackInfo.mobAttackInfo) {
                    Mob mob = (Mob) chr.getField().getLifeByObjectID(mai.mobId);
                    if (mob == null || mob.isBoss()) {
                        continue;
                    }
                    MobTemporaryStat mts = mob.getTemporaryStat();
                    mts.addStatOptionsAndBroadcast(chr, MobStat.Stun, o1);
                }
                break;
            case NETHER_SLICE:
                o1.nOption = si.getValue(x, slv);
                o1.rOption = skill.getSkillId();
                o1.tOption = 30;
                for (MobAttackInfo mai : attackInfo.mobAttackInfo) {
                    Mob mob = (Mob) chr.getField().getLifeByObjectID(mai.mobId);
                    if (mob == null) {
                        continue;
                    }
                    MobTemporaryStat mts = mob.getTemporaryStat();
                    mts.addStatOptions(MobStat.PDR, o1);
                    mts.addStatOptionsAndBroadcast(chr, MobStat.MDR, o1);
                }
                break;
            case THOUSAND_SWORDS:
                for (int i = 0; i < si.getValue(x, slv); i++) {
                    incrementOverloadCount(skillID, tsm);
                }
                break;
            case VITALITY_VEIL:
                if (hasHitMobs) {
                    int amounthealed = si.getValue(y, slv);
                    int healamount = (int) ((chr.getMaxHP()) / ((double) 100 / amounthealed));
                    chr.heal(healamount);
                }
                break;

            case EXCEED_DOUBLE_SLASH_1:
            case EXCEED_DOUBLE_SLASH_2:
            case EXCEED_DOUBLE_SLASH_3:
            case EXCEED_DOUBLE_SLASH_4:
            case EXCEED_DOUBLE_SLASH_PURPLE:

            case EXCEED_DEMON_STRIKE_1:
            case EXCEED_DEMON_STRIKE_2:
            case EXCEED_DEMON_STRIKE_3:
            case EXCEED_DEMON_STRIKE_4:
            case EXCEED_DEMON_STRIKE_PURPLE:

            case EXCEED_LUNAR_SLASH_1:
            case EXCEED_LUNAR_SLASH_2:
            case EXCEED_LUNAR_SLASH_3:
            case EXCEED_LUNAR_SLASH_4:
            case EXCEED_LUNAR_SLASH_PURPLE:

            case EXCEED_EXECUTION_1:
            case EXCEED_EXECUTION_2:
            case EXCEED_EXECUTION_3:
            case EXCEED_EXECUTION_4:
            case EXCEED_EXECUTION_PURPLE:
                if (attackInfo.skillId == EXCEED_EXECUTION_PURPLE && chr.hasSkill(NETHER_SHIELD)) {
                    createNetherShieldForceAtomFromExecution(attackInfo);
                }
                giveExceedOverload(SkillConstants.getActualSkillIDfromSkillID(attackInfo.skillId));
                incrementOverloadCount(SkillConstants.getActualSkillIDfromSkillID(attackInfo.skillId), tsm);
                break;
        }
        if (!JobConstants.isPhantom(chr.getJob())) {
            super.handleAttack(c, attackInfo);
        }
    }

    public void demonicBlastKeydownCost() {
        var tsm = chr.getTemporaryStatManager();
        var opt = tsm.getOptByCTSAndSkill(IndieKeyDownTime, DEMONIC_BLAST_HOLDDOWN);
        if (opt != null) {
            int hpDrained = chr.getHPPerc(opt.xOption);
            chr.heal(-hpDrained, true, false);
        }
    }

    public void changeDimensionalSword() {
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        Option o1 = new Option();
        if (chr.hasSkill(DIMENSIONAL_SWORD_SUMMON) && tsm.hasStat(IndiePMdR) && chr.getField().getSummons().stream().anyMatch(s -> s.getChr() == chr && s.getSkillID() == DIMENSIONAL_SWORD_SUMMON)) {
            long remainingTime = tsm.getRemainingTime(IndiePMdR, DIMENSIONAL_SWORD_SUMMON);
            chr.getField().removeSummon(DIMENSIONAL_SWORD_SUMMON, chr.getId());
            tsm.removeStatsBySkill(DIMENSIONAL_SWORD_SUMMON);
            o1.nOption = chr.getSkillLevel(DIMENSIONAL_SWORD_SUMMON);
            o1.rOption = DIMENSIONAL_SWORD_ATTACK;
            o1.tOption = (int) ((remainingTime) / 5);
            o1.setInMillis(true);
            tsm.putCharacterStatValue(DevilishPower, o1);
            tsm.sendSetStatPacket();
        }
    }

    private void createNetherShieldForceAtomFromExecution(AttackInfo attackInfo) {
        if (attackInfo.mobCount <= 0) {
            return;
        }

        ForceAtomEnum fae = ForceAtomEnum.NETHER_SHIELD_RECREATION;
        for (MobAttackInfo mai : attackInfo.mobAttackInfo) {
            if (!Util.succeedProp(SkillChangeConstants.NETHER_SHIELD_BY_EXECUTION_CHANCE) || mai.mob == null) {
                continue;
            }
            ForceAtomInfo fai = new ForceAtomInfo(chr.getNewForceAtomKey(), fae.getInc(), Util.getRandom(23, 30), Util.getRandom(9, 16),
                    Util.getRandom(359), 0, Util.getCurrentTime(), 0, 0,
                    new Position());
            ForceAtom fa = new ForceAtom(true, chr.getId(), mai.mob.getObjectId(), fae,
                    true, 0, NETHER_SHIELD_ATOM, fai, new Rect(), 0, 0,
                    mai.mob.getPosition(), 0, mai.mob.getPosition(), 0);
            fa.setMaxRecreationCount(SkillChangeConstants.NETHER_SHIELD_BY_EXECUTION_RECREATIONS);
            chr.createForceAtom(fa);
        }
    }

    private void createNetherShieldForceAtom(List<Mob> mobList) {
        if (mobList.size() <= 0) {
            return;
        }
        SkillInfo si = SkillData.getSkillInfoById(NETHER_SHIELD);
        int slv = chr.getSkillLevel(NETHER_SHIELD);

        ForceAtomEnum fae = ForceAtomEnum.NETHER_SHIELD;
        List<ForceAtomInfo> faiList = new ArrayList<>();
        List<Integer> targetList = new ArrayList<>();
        for (Mob mob : mobList) {
            ForceAtomInfo fai = new ForceAtomInfo(chr.getNewForceAtomKey(), fae.getInc(), Util.getRandom(20, 26), Util.getRandom(35, 45),
                    0, 480 + Util.getRandom(100), Util.getCurrentTime(), 0, 0,
                    new Position(0, -100));
            faiList.add(fai);
            targetList.add(mob.getObjectId());
        }
        ForceAtom fa = new ForceAtom(false, 0, chr.getId(), fae,
                true, targetList, NETHER_SHIELD_ATOM, faiList, new Rect(), 0, 300,
                new Position(), 0, new Position(), 0);
        fa.setMaxRecreationCount(si.getValue(z, slv) + chr.getSkillStatValue(z, NETHER_SHIELD_SPREAD));
        chr.createForceAtom(fa);
    }

    public void giveExceedOverload(int skillid) {
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        Option o = new Option();
        o.nOption = 1;
        o.rOption = skillid;
        o.tOption = 15;
        tsm.putCharacterStatValue(Exceed, o);
        tsm.sendSetStatPacket();
    }

    public void incrementOverloadCount(int skillid, TemporaryStatManager tsm) {
        Option o = new Option();
        int amount = 1;
        if (tsm.hasStat(OverloadCount)) {
            amount = tsm.getOption(OverloadCount).nOption;
            if (amount < getMaxExceed()) {
                if (skillid != lastExceedSkill && lastExceedSkill != 0) {
                    amount++;
                }
                amount++;
            }
        }
        amount = amount > getMaxExceed() ? getMaxExceed() : amount;
        lastExceedSkill = skillid;
        o.nOption = amount;
        o.rOption = EXCEED;
        tsm.putCharacterStatValue(OverloadCount, o);
        tsm.sendSetStatPacket();
    }

    private void resetExceed(TemporaryStatManager tsm) {
        tsm.removeStatsBySkill(EXCEED);
        tsm.sendResetStatPacket();
    }

    private int getMaxExceed() {
        int num = 20;
        if (chr.hasSkill(31220044)) { //Hyper Skill Boost [ Reduce Overload ]
            num = 18;
        }
        return num;
    }

    @Override
    public int getFinalAttackSkill() {
        if (chr.hasSkill(INFERNAL_EXCEED)) {
            Skill skill = chr.getSkill(INFERNAL_EXCEED);
            int slv = skill.getCurrentLevel();
            SkillInfo si = SkillData.getSkillInfoById(skill.getSkillId());
            int proc = si.getValue(prop, slv) + chr.getSkillStatValue(prop, EXCEED_OPPORTUNITY);
            if (Util.succeedProp(proc)) {
                return INFERNAL_EXCEED;
            }
        }
        return super.getFinalAttackSkill();
    }

    public void lifeSapHealing() {
        Skill skill = chr.getSkill(LIFE_SAP);
        if (skill != null) {
            int slv = skill.getCurrentLevel();
            SkillInfo si = SkillData.getSkillInfoById(skill.getSkillId());
            int proc = si.getValue(prop, slv);
            int amounthealed = si.getValue(x, slv);
            if (chr.hasSkill(ADVANCED_LIFE_SAP)) {
                amounthealed = SkillData.getSkillInfoById(ADVANCED_LIFE_SAP).getValue(x, chr.getSkill(ADVANCED_LIFE_SAP).getCurrentLevel());
            }
            if (chr.hasSkill(PAIN_DAMPENER)) {
                amounthealed -= SkillData.getSkillInfoById(PAIN_DAMPENER).getValue(x, chr.getSkill(PAIN_DAMPENER).getCurrentLevel());
            }
            if (Util.succeedProp(proc)) {
                int healamount = chr.getHPPerc(amounthealed);
                if (healamount > 0) {
                    chr.heal(healamount);
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
        applyHpCostForDA(skillId);
        switch (skillId) {
            case NETHER_SHIELD:
                Position position = inPacket.decodePosition();
                List<Mob> mobList = new ArrayList<>();
                int size = inPacket.decodeByte();
                for (int i = 0; i < size; i++) {
                    int mobId = inPacket.decodeInt();
                    Mob mob = (Mob) field.getLifeByObjectID(mobId);
                    if (mob == null || mobList.size() >= si.getValue(bulletCount, slv)) { // Ensure there's only 2 shields created
                        continue;
                    }
                    mobList.add(mob);
                }
                if (mobList.size() == 1) {
                    mobList.add(mobList.get(0)); // Ensure there's 2 shields created
                }
                createNetherShieldForceAtom(mobList);
                break;
            case OVERLOAD_RELEASE:
                int overloadCount = tsm.getOption(OverloadCount).nOption;
                double overloadRate = ((double) overloadCount / getMaxExceed()) * 100D;
                var maxIndiePMdR = si.getValue(indiePMdR, slv);

                var advLifeSap = chr.getSkill(ADVANCED_LIFE_SAP);
                if (advLifeSap != null) {
                    maxIndiePMdR = SkillData.getSkillInfoById(advLifeSap.getSkillId()).getValue(y, advLifeSap.getCurrentLevel());
                }

                o2.nOption = (int) ((overloadRate * maxIndiePMdR) / 100D);
                o2.rOption = skillId;
                o2.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(IndiePMdR, o2);
                resetExceed(tsm);
                chr.heal(chr.getHPPerc((int) overloadRate));
                break;
            case WARD_EVIL:
                o1.nOption = si.getValue(x, slv) + chr.getSkillStatValue(x, WARD_EVIL_HARDEN);
                o1.rOption = skillId;
                o1.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(DamageReduce, o1);
                o2.nOption = si.getValue(z, slv) + chr.getSkillStatValue(x, WARD_EVIL_IMMUNITY_ENHANCE_1);
                o2.rOption = skillId;
                o2.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(IndieAsrR, o2);
                o3.nOption = si.getValue(z, slv) + chr.getSkillStatValue(x, WARD_EVIL_IMMUNITY_ENHANCE_2);
                o3.rOption = skillId;
                o3.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(IndieTerR, o3);
                break;
            case DIABOLIC_RECOVERY: // x = HP restored at interval
                o1.rOption = skillId;
                o1.nOption = si.getValue(indieMhpR, slv);
                o1.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(IndieMHPR, o1);
                o2.nOption = si.getValue(x, slv);
                o2.rOption = skillId;
                o2.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(DiabolikRecovery, o2);
                EventManager.stopTimer(diabolicRecoveryTimer);
                diabolicRecoveryTimer = EventManager.addFixedRateEvent(this::diabolicRecoveryHPRecovery, si.getValue(w, slv), si.getValue(w, slv), TimeUnit.SECONDS);
                break;
            case FORBIDDEN_CONTRACT:
                o1.rOption = skillId;
                o1.nOption = si.getValue(indieDamR, slv);
                o1.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(IndieDamR, o1);
                //HP consumption from Skills = 0;
                break;
            case DEFENDER_OF_THE_DEMON:
                summon = Summon.getSummonBy(chr, skillId, slv);
                summon.setFlyMob(false);
                summon.setMoveAction((byte) 0);
                summon.setMoveAbility(MoveAbility.Walk);
                summon.setPosition(chr.getPosition());
                field.spawnSummonAndRemoveOld(summon);
                break;
            case DIMENSIONAL_SWORD_SUMMON:
                summon = Summon.getSummonBy(chr, skillId, slv);
                summon.setFlyMob(false);
                summon.setMoveAction((byte) 0);
                summon.setMoveAbility(MoveAbility.Walk);
                summon.setPosition(chr.getPosition());
                field.spawnSummonAndRemoveOld(summon);
                o1.nOption = 1;
                o1.rOption = skillId;
                o1.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(IndiePMdR, o1);
                break;
            case DEMONIC_FRENZY:
                if (tsm.hasStatBySkillId(skillId)) {
                    tsm.removeStatsBySkill(skillId);
                } else {
                    o1.nOption = si.getValue(s, slv); // Dmg Reduction%
                    o1.rOption = skillId;
                    // xOption  is  Final Dmg%
                    tsm.putCharacterStatValue(DemonFrenzy, o1);
                }
                break;
            case DEMONIC_BLAST_HOLDDOWN:
                o1.nOption = 1;
                o1.rOption = skillId;
                o1.tOption = si.getValue(time, slv);
                o1.xOption = si.getValue(x, slv); // hp% drain
                tsm.putCharacterStatValue(IndieKeyDownTime, o1);
                o2.nOption = -si.getValue(w, slv);
                o2.rOption = skillId;
                o2.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(IndieHitDamageInclHPR, o2);
                break;
            case REVENANT:
                o1.nOption = 1; // Stored Fury
                o1.rOption = skillId;
                o1.tOption = si.getValue(time, slv);
                o1.xOption = chr.getHPPerc(si.getValue(hpRCon, slv)); // -HP value
                tsm.putCharacterStatValue(Revenant, o1);
                break;
        }
        tsm.sendSetStatPacket();
    }

    public void updateRevenant() {
        var furyDecrease = chr.getHPPerc(chr.getSkillStatValue(q2, REVENANT));
        updateRevenant(-furyDecrease);
    }

    public void updateRevenant(int hpDamage) {
        var tsm = chr.getTemporaryStatManager();
        var opt = tsm.getOption(Revenant);
        if (opt.nOption > 0) {
            opt.xOption = Math.min(2 * chr.getMaxHP(), Math.max(opt.xOption + hpDamage, 1));
            tsm.updateBuff(Revenant, opt);
        }
    }

    @Override
    public void handleRemoveCTS(CharacterTemporaryStat cts, Option option) {

        if (cts.equals(Revenant)) {
            var dmg = Math.max(0, Math.min(option.xOption, chr.getMaxHP() - 1));
            chr.heal(-dmg);
        }

        super.handleRemoveCTS(cts, option);
    }

    @Override
    public int alterHeal(int oldHP, int amount, int sourceId) {
        if (sourceId == DEMONIC_BLAST_HOLDDOWN) { // Check Demonic Blast Source first, as Demonic Blast is the only skill that will bypass the DemonicFrenzy heal reduction.
            return -1;
        }
        if (chr.getTemporaryStatManager().getOptByCTSAndSkill(DemonFrenzy, DemonAvenger.DEMONIC_FRENZY) != null && amount > 0) { // limits skill & item healing to 1% of the Char's MaxHP
            return Math.min(amount, chr.getHPPerc(SkillChangeConstants.DEMONIC_FRENZY_HEAL_CAP ? SkillChangeConstants.DEMONIC_FRENZY_HEAL_CAP_VALUE : 1)); // [Demon Avenger] Custom Skill Change
        }

        return super.alterHeal(oldHP, amount, sourceId);
    }

    private boolean isNoHpCostSkill(int skillId) {
        return Arrays.stream(noHpRConSkills).anyMatch(s -> s == skillId);
    }

    private void applyHpCostForDA(int skillID) {
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        if (tsm.hasStatBySkillId(FORBIDDEN_CONTRACT) || isNoHpCostSkill(skillID) || !chr.hasSkill(skillID)) {
            return;
        }

        // Turn off Demonic Frenzy doesn't cost HP
        if (skillID == DEMONIC_FRENZY && tsm.hasStatBySkillId(DEMONIC_FRENZY)) {
            return;
        }

        Skill skill = chr.getSkill(skillID);

        int slv = skill.getCurrentLevel();
        SkillInfo si = SkillData.getSkillInfoById(skill.getSkillId());
        int hpRCost = si.getValue(hpRCon, slv);
        var hpCost = si.getValue(hpCon, slv);
        if (hpRCost > 0) {
            int skillcost = chr.getHPPerc(hpRCost);
            if (chr.getHP() > skillcost) {
                chr.heal(-skillcost);
            }
        } else if (hpCost > 0) {
            if (chr.getHP() > hpCost) {
                chr.heal(-hpCost);
            }
        }
    }

    @Override
    public int alterCooldownSkill(int skillId, int slv, AttackInfo attackInfo, SkillUseInfo sui, SkillUseSource source) {

        if (skillId == DEMONIC_FRENZY) {
            var tsm = chr.getTemporaryStatManager();
            if (tsm.hasStatBySkillId(DEMONIC_FRENZY)) {
                return 0; // Turning off Demonic Frenzy shouldn't apply CD
            }
            var si = SkillData.getSkillInfoById(skillId);
            return si.getValue(z, slv) * 1000; // thank you for making 'z' the cooldown property
        }

        return super.alterCooldownSkill(skillId, slv, attackInfo, sui, source);
    }

    @Override
    public BypassCooldownCheckType canBypassCooldownCheck(int skillId, AttackInfo attackInfo, SkillUseInfo sui, SkillUseSource source) {
        if (skillId == DEMONIC_FRENZY && chr.getTemporaryStatManager().hasStatBySkillId(DEMONIC_FRENZY)) {
            return BypassCooldownCheckType.BypassCheckAndCooldown;
        }

        return super.canBypassCooldownCheck(skillId, attackInfo, sui, source);
    }

    // Hit related methods ---------------------------------------------------------------------------------------------


    @Override
    public void handleHit(Client c, InPacket inPacket, HitInfo hitInfo) {
        var tsm = chr.getTemporaryStatManager();
        if (tsm.hasStat(Revenant)) {
            var curHP = chr.getHP();
            updateRevenant(hitInfo.hpDamage);
            if (hitInfo.hpDamage >= curHP) {
                hitInfo.hpDamage = curHP - 1;
            }
        }
        super.handleHit(c, inPacket, hitInfo);
    }

    @Override
    public void stopTimers() {
        if (diabolicRecoveryTimer != null) {
            diabolicRecoveryTimer.cancel(true);
        }
        super.stopTimers();
    }

    @Override
    public Long getJobBaseStat(BaseStat baseStat) {
        if (chr.hasSkill(STAR_FORCE_CONVERSION) && baseStat.equals(BaseStat.mhp)) {
            var totalChuc = chr.getTotalChucForStarForceConversion();
            if (totalChuc <= 0) {
                return 0L;
            }

            return (long) SkillConstants.getMaxHpFromStarForceConversion(totalChuc);
        }

        return super.getJobBaseStat(baseStat);
    }
}
