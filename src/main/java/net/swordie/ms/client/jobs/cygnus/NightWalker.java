package net.swordie.ms.client.jobs.cygnus;

import net.swordie.ms.client.Client;
import net.swordie.ms.client.character.Char;
import net.swordie.ms.client.character.info.HitInfo;
import net.swordie.ms.client.character.skills.Option;
import net.swordie.ms.client.character.skills.Skill;
import net.swordie.ms.client.character.skills.SkillUseSource;
import net.swordie.ms.client.character.skills.atom.forceatom.ForceAtom;
import net.swordie.ms.client.character.skills.atom.forceatom.ForceAtomCollisionInfo;
import net.swordie.ms.client.character.skills.info.*;
import net.swordie.ms.client.character.skills.temp.CharacterTemporaryStat;
import net.swordie.ms.client.character.skills.temp.TemporaryStatManager;
import net.swordie.ms.connection.InPacket;
import net.swordie.ms.connection.packet.*;
import net.swordie.ms.constants.JobConstants;
import net.swordie.ms.constants.SkillConstants;
import net.swordie.ms.enums.AssistType;
import net.swordie.ms.enums.ForceAtomEnum;
import net.swordie.ms.enums.LeaveType;
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

import java.util.Arrays;
import java.util.List;
import java.util.Objects;
import java.util.Random;
import java.util.concurrent.TimeUnit;
import java.util.stream.Collectors;

import static net.swordie.ms.client.character.skills.SkillStat.*;
import static net.swordie.ms.client.character.skills.temp.CharacterTemporaryStat.*;

/**
 * Created on 12/14/2017.
 */
public class NightWalker extends Noblesse {

    public static final int ELEMENTAL_HARMONY_LUK = 10000249;

    public static final int LUCKY_SEVEN = 14001020;
    public static final int DARK_ELEMENTAL = 14001021; //Buff (Mark of Darkness)
    public static final int HASTE = 14001022; //Buff
    public static final int DARK_SIGHT = 14001023; //Buff

    public static final int THROWING_BOOSTER = 14101022; //Buff


    public static final int DARK_SERVANT = 14111024; //Buff
    public static final int SPIRIT_PROJECTION = 14111025; //Buff
    public static final int DARKNESS_ASCENDING = 14110030; //Special Buff
    public static final int SHADOW_SPARK = 14111022;
    public static final int SHADOW_SPARK_FINISHER = 14111023;

    public static final int DARK_OMEN = 14121003; //Summon
    public static final int SHADOW_STITCH = 14121004; //Special Attack (Bind Debuff)
    public static final int CALL_OF_CYGNUS_NW = 14121000; //Buff
    public static final int VITALITY_SIPHON = 14120009;
    public static final int VITALITY_SIPHON_SHIELD = 14120011;
    public static final int VITALITY_SIPHON_EXTRA_POINT = 14120049;
    public static final int VITALITY_SIPHON_REINFORCE = 14120050;
    public static final int VITALITY_SIPHON_PREPARATION = 14120051;

    public static final int GLORY_OF_THE_GUARDIANS_NW = 14121053;
    public static final int SHADOW_ILLUSION = 14121054;
    public static final int DOMINION = 14121052;

    // V Skill
    public static final int SHADOW_SPEAR = 400041008;
    public static final int SHADOW_SPEAR_AA_SMALL = 400040008;
    public static final int SHADOW_SPEAR_AA_LARGE = 400041019;
    public static final int GREATER_DARK_SERVANT = 400041028;
    public static final int SHADOW_BITE = 400041037;
    public static final int RAPID_THROW = 400041059;


    //Bats
    public static final int SHADOW_BAT_SKILL = 14000027;
    public static final int SHADOW_BAT = 14001027; //Buff (Shadow Bats) (ON/OFF)
    public static final int SHADOW_BAT_ATOM = 14000028;
    public static final int SHADOW_BAT_FROM_MOB_ATOM = 14000029;
    public static final int BAT_AFFINITY = 14100027; //Summon Upgrade
    public static final int BAT_AFFINITY_II = 14110029; //Summon Upgrade
    public static final int BAT_AFFINITY_III = 14120008; //Summon Upgrade

    //Dark Elemental
    public static final int ADAPTIVE_DARKNESS = 14100026;
    public static final int ADAPTIVE_DARKNESS_II = 14110028;
    public static final int ADAPTIVE_DARKNESS_III = 14120007;

    //Attacks
    public static final int QUINTUPLE_STAR = 14121001;
    public static final int QUINTUPLE_STAR_FINISHER = 14121002;

    public static final int QUAD_STAR = 14111020;
    public static final int QUAD_STAR_FINISHER = 14111021;

    public static final int TRIPLE_THROW = 14101020;
    public static final int TRIPLE_THROW_FINISHER = 14101021;

    private static final int[] addedSkills = new int[]{
            ELEMENTAL_HARMONY_LUK,
            CALL_OF_CYGNUS_NW
    };

    private static final int[] darkEleSkills = new int[]{
            DARK_ELEMENTAL,
            ADAPTIVE_DARKNESS,
            ADAPTIVE_DARKNESS_II,
            ADAPTIVE_DARKNESS_III,
    };

    private static final int[] batSkills = new int[]{
            SHADOW_BAT,
            BAT_AFFINITY,
            BAT_AFFINITY_II,
            BAT_AFFINITY_III,
    };

    private int throwingStarCount = 0;
    private int darkOmenCount = 0;
    private Summon darkServant;
    private int darkSightCDCount = 0;

    public NightWalker(Char chr) {
        super(chr);
        if (isHandlerOfJob(chr.getJob())) {
            for (int id : addedSkills) {
                if (!chr.hasSkill(id) || chr.getSkill(id).getCurrentLevel() == 0) {
                    Skill skill = SkillData.getSkillDeepCopyById(id);
                    skill.setCurrentLevel(skill.getMasterLevel());
                    chr.addSkill(skill);
                }
            }
        }
    }

    @Override
    public boolean isHandlerOfJob(short id) {
        return JobConstants.isNightWalker(id);
    }


    private void applyDarkServant() {
        Skill skill = chr.getSkill(DARK_SERVANT);
        int slv = skill.getCurrentLevel();
        darkServant = Summon.getSummonBy(chr, skill.getSkillId(), slv);
        Field field = chr.getField();
        darkServant.setAvatarLook(chr.getAvatarData().getAvatarLook());
        darkServant.setMoveAbility(MoveAbility.WalkClone);
        darkServant.setActionDelay(400);
        darkServant.setMovementDelay(30);
        darkServant.setAssistType(AssistType.None);
        darkServant.setFlip(true);
        field.spawnSummonAndRemoveOld(darkServant);
    }

    private Summon getGreaterDarkServant() {
        return chr.getField().getSummonByChrAndSkillId(chr, GREATER_DARK_SERVANT);
    }

    public void swapWithServant() {
        Summon summon = getGreaterDarkServant();
        if (summon != null && summon.getCount() > 0) {
            summon.setCount(summon.getCount() - 1);
            chr.getField().broadcastPacket(Summoned.summonUpgradeStage(summon, 2, 0, 0));
            chr.getField().broadcastPacket(Summoned.effect(summon, 2, 0));
            chr.write(UserLocal.greaterDarkServantSwapResult(summon.getPosition()));
            summon.setPosition(chr.getPosition());
            chr.getField().broadcastPacket(UserRemote.effect(chr.getId(), Effect.skillSpecial(GREATER_DARK_SERVANT)));
        }
    }

    public void handleRemoveCTS(CharacterTemporaryStat cts, Option o) {
        if (cts == ShadowIllusion) {
            applyDarkServant();
        } else if (cts == DarkSight) {
            Skill skill = chr.getSkill(DARK_SIGHT);
            SkillInfo si = SkillData.getSkillInfoById(skill.getSkillId());
            int slv = skill.getCurrentLevel();
            chr.addSkillCoolTime(skill.getSkillId(), si.getValue(cooltime, slv) * darkSightCDCount * 1000);
        }

        super.handleRemoveCTS(cts, o);
    }

    public int alterCooldownSkill(int skillId, int slv, AttackInfo attackInfo, SkillUseInfo sui, SkillUseSource source) {
        switch (skillId) {
            case DARK_SIGHT:
                return 0;
        }

        return super.alterCooldownSkill(skillId, slv, attackInfo, sui, source);
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
        Field field = chr.getField();
        if (hasHitMobs) {
            // Handling Shadow Bats
            if (tsm.hasStat(NightWalkerBat) && isThrowingStarSkill(attackInfo.skillId)) {
                shadowBats(attackInfo);
            }
            if (attackInfo.skillId == DARK_OMEN && chr.hasSkill(DARK_OMEN)) {
                for (MobAttackInfo mai : attackInfo.mobAttackInfo) {
                    Mob mob = (Mob) field.getLifeByObjectID(mai.mobId);
                    if (mob == null) {
                        continue;
                    }
                    if (darkOmenCount < chr.getSkillStatValue(x, DARK_OMEN)) {
                        darkOmenCount++;
                        continue;
                    }
                    if(tsm.hasStat(NightWalkerBat)) {
                        shadowBats(attackInfo);
                    }
                    darkOmenCount = 0;
                }
            }

            // Handling Dark Elemental
            applyDarkElementalOnMob(attackInfo);

            // Reduce Dark Omen Cooltime
            si = SkillData.getSkillInfoById(attackInfo.skillId);
            if (si != null && si.getElemAttr().equalsIgnoreCase("d") && attackInfo.skillId != DARK_OMEN && !SkillConstants.isForceAtomSkill(attackInfo.skillId)) {
                reduceDarkOmenCooltime();
            }

            if (tsm.hasStatBySkillId(SHADOW_SPEAR) &&
                    si != null &&
                    si.getElemAttr().equalsIgnoreCase("d") &&
                    attackInfo.skillId != DARK_OMEN &&
                    attackInfo.skillId != SHADOW_SPEAR_AA_SMALL &&
                    attackInfo.skillId != SHADOW_SPEAR_AA_LARGE) {
                placeShadowSpearAA(attackInfo);
            }
        }
        Option o1 = new Option();
        Option o2 = new Option();
        Option o3 = new Option();
        Option o4 = new Option();
        switch (attackInfo.skillId) {
            case SHADOW_STITCH:
                o1.nOption = 1;
                o1.rOption = skill.getSkillId();
                o1.tOption = Math.min(si.getValue(time, slv) + attackInfo.mobCount, si.getValue(s, slv));
                for (MobAttackInfo mai : attackInfo.mobAttackInfo) {
                    Mob mob = (Mob) chr.getField().getLifeByObjectID(mai.mobId);
                    if (mob == null) {
                        continue;
                    }
                    MobTemporaryStat mts = mob.getTemporaryStat();
                    mts.addStatOptionsAndBroadcast(chr, MobStat.Freeze, o1);
                }
                break;
            case DOMINION:
                o1.nOption = 1;
                o1.rOption = skillID;
                o1.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(NotDamaged, o1);
                o2.nOption = 100;
                o2.rOption = skillID;
                o2.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(CriticalBuff, o2);
                o3.nOption = 100;
                o3.rOption = skillID;
                o3.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(Stance, o3);
                o4.rOption = skillID;
                o4.nOption = si.getValue(indiePMdR, slv);
                o4.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(IndiePMdR, o4);
                tsm.sendSetStatPacket();
                break;
            case SHADOW_BITE:
                createShadowBiteForceAtom(attackInfo);
                break;
            case SHADOW_BAT_ATOM:
                healByShadowBat();
                break;
            case SHADOW_SPEAR_AA_SMALL:
                AffectedArea aa = (AffectedArea) chr.getField().getLifeByObjectID(attackInfo.affectedAreaObjId);
                if (aa != null) {
                    chr.getField().removeLife(aa);
                }
                break;
        }

        super.handleAttack(c, attackInfo);
    }

    private void reduceDarkOmenCooltime() {
        if (chr.hasSkill(DARK_OMEN)) {
            SkillInfo si = SkillData.getSkillInfoById(DARK_OMEN);
            int slv = chr.getSkillLevel(DARK_OMEN);
            if (si.getElemAttr().equalsIgnoreCase("d")) {
                chr.reduceSkillCoolTime(DARK_OMEN, si.getValue(y, slv));
            }
        }
    }

    private boolean isThrowingStarSkill(int skillId) {
        return skillId == LUCKY_SEVEN
                || skillId == TRIPLE_THROW
                || skillId == QUAD_STAR
                || skillId == SHADOW_SPARK
                || skillId == QUINTUPLE_STAR;
    }

    // handling Shadow Bats
    private void shadowBats(AttackInfo attackInfo) {
        if (!chr.hasSkill(SHADOW_BAT)) {
            return;
        }
        Skill skill = chr.getSkill(SHADOW_BAT);
        SkillInfo si = SkillData.getSkillInfoById(skill.getSkillId());
        int slv = skill.getCurrentLevel();
        int shadowBatSize = getCurrentShadowBats().size();
        // Create ShadowBat forceAtom
        if (shadowBatSize > 0 && Util.succeedProp(getShadowBatAttackProp())) {
            doShadowBatAttack(attackInfo, getCurrentShadowBats().get(0));
        }
        if (shadowBatSize < getMaxShadowBats()) {
            // Create ShadowBat every 3 hits
            if (throwingStarCount < si.getValue(z, slv)) {
                throwingStarCount++;
                return;
            }
            throwingStarCount = 0;
            createShadowBat();
        }
    }

    private void makeShadowBatInvisible(Summon shadowBat) {
        chr.getField().broadcastPacket(Summoned.summonedSkill(shadowBat, (byte) 0, 0, null));
    }

    private void doShadowBatAttack(AttackInfo attackInfo, Summon shadowBat) {
        makeShadowBatInvisible(shadowBat);
        removeShadowBat(shadowBat);
        createBatForceAtom(attackInfo, shadowBat);
    }

    private void removeShadowBat(Summon shadowBat) {
        chr.getField().removeSummon(shadowBat);
    }

    public List<Summon> getCurrentShadowBats() {
        return chr.getField().getSummons().stream().filter(s -> s.getSkillID() == SHADOW_BAT_SKILL && s.getChr() == chr).collect(Collectors.toList());
    }

    private void createShadowBat() {
        Summon shadowBat = Summon.getSummonByNoCTS(chr, SHADOW_BAT_SKILL, chr.getSkillLevel(SHADOW_BAT));
        shadowBat.setMoveAbility(MoveAbility.Fly);
        shadowBat.setAssistType(AssistType.None);
        shadowBat.setMoveAction((byte) 5);
        shadowBat.setSummonTerm(60000);
        shadowBat.setTemplateId(getCurrentShadowBatSkill().getSkillId());
        chr.getField().spawnSummon(shadowBat);
    }

    private void createBatForceAtom(AttackInfo attackInfo, Summon shadowBat) {
        Field field = chr.getField();
        SkillInfo si = SkillData.getSkillInfoById(SHADOW_BAT);
        Rect rect = chr.getRectAround(new Rect(-300, -300, 300, 300));
        Mob mob = (Mob) attackInfo.mobAttackInfo.stream().map(mai -> field.getLifeByObjectID(mai.mobId)).filter(Objects::nonNull).findFirst().orElse(null);
        if (mob == null) {
            if (field.getMobsInRect(rect).size() <= 0) {
                return;
            }
            mob = Util.getRandomFromCollection(field.getMobsInRect(rect));
        }
        ForceAtomEnum fae = getCurrentShadowBatSkill().getSkillId() == BAT_AFFINITY_III ? ForceAtomEnum.NIGHT_WALKER_BAT_4 : ForceAtomEnum.NIGHT_WALKER_BAT;
        ForceAtomInfo fai = new ForceAtomInfo(chr.getNewForceAtomKey(), fae.getInc(), 1, 5,
                (int) Util.getAngleOfTwoPositions(chr.getPosition(), mob.getPosition()), 500, Util.getCurrentTime(), 0, 0,
                new Position(shadowBat.getX() - chr.getPosition().getX(), shadowBat.getY() - chr.getPosition().getY()));
        ForceAtom fa = new ForceAtom(false, 0, chr.getId(), fae,
                true, mob.getObjectId(), SHADOW_BAT_ATOM, fai, chr.getRectAround(new Rect(-20, -20, 20, 20)), 0, 0,
                new Position(), 0, new Position(), 0);
        fa.setMaxRecreationCount(getShadowBatRecreationCount() + 1);
        chr.createForceAtom(fa);
    }

    private void healByShadowBat() {
        SkillInfo si = SkillData.getSkillInfoById(SHADOW_BAT);
        int slv = chr.getSkillLevel(SHADOW_BAT);
        chr.heal(chr.getHPPerc(si.getValue(x, slv)));
    }

    private int getMaxShadowBats() {
        return Arrays.stream(batSkills)
                .filter(skill -> chr.hasSkill(skill))
                .map(skillInt -> SkillData.getSkillInfoById(skillInt).getValue(y, chr.getSkillLevel(skillInt)))
                .sum();
    }

    private int getShadowBatAttackProp() {
        return Arrays.stream(batSkills)
                .filter(skill -> chr.hasSkill(skill))
                .map(skillInt -> SkillData.getSkillInfoById(skillInt).getValue(prop, chr.getSkillLevel(skillInt)))
                .sum();
    }

    private int getShadowBatRecreationCount() {
        return Arrays.stream(batSkills)
                .filter(skill -> chr.hasSkill(skill))
                .map(skillInt -> SkillData.getSkillInfoById(skillInt).getValue(mobCount, chr.getSkillLevel(skillInt)))
                .sum();
    }

    private Skill getCurrentShadowBatSkill() {
        Skill skill = null;
        for (int batSkill : batSkills) {
            if (chr.hasSkill(batSkill)) {
                skill = chr.getSkill(batSkill);
            }
        }
        return skill;
    }

    private void applyDarkElementalOnMob(AttackInfo attackInfo) {
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        if (tsm.hasStat(ElementDarkness)) {
            Option o1 = new Option();
            Option o2 = new Option();
            int amount = 1;
            o1.rOption = DARK_ELEMENTAL;
            o1.tOption = 5;
            for (MobAttackInfo mai : attackInfo.mobAttackInfo) {
                Skill skill = chr.getSkill(DARK_ELEMENTAL);
                SkillInfo si = SkillData.getSkillInfoById(skill.getSkillId());
                int slv = skill.getCurrentLevel();
                if (Util.succeedProp(getDarkEleProp())) {
                    Mob mob = (Mob) chr.getField().getLifeByObjectID(mai.mobId);
                    if (mob == null) {
                        continue;
                    }
                    MobTemporaryStat mts = mob.getTemporaryStat();

                    if (mts.hasCurrentMobStat(MobStat.ElementDarkness)) {
                        amount = mts.getCurrentOptionsByMobStat(MobStat.ElementDarkness).nOption;
                        if (amount < getMaxDarkEleStack()) {
                            amount++;
                        }
                    }

                    // if dominion is active, instantly gain max stack
                    if (tsm.getOptByCTSAndSkill(Stance, DOMINION) != null) {
                        amount = getMaxDarkEleStack();
                    }

                    o1.nOption = amount;
                    mts.addStatOptionsAndBroadcast(chr, MobStat.ElementDarkness, o1);
                    mts.createAndAddBurnedInfo(chr, mob, skill.getSkillId(), slv, o1.nOption * getDotDmg(), si.getValue(dotInterval, slv), si.getValue(dotTime, slv), 1);

                    //handle Vitality Siphon
                    if (chr.hasSkill(VITALITY_SIPHON)) {
                        incrementSiphonVitality(tsm);
                    }
                }
            }
        }
    }

    private int getDotDmg() {
        int dotDmg = 0;
        for (int darkEleSkill : darkEleSkills) {
            if (chr.hasSkill(darkEleSkill)) {
                Skill skill = chr.getSkill(darkEleSkill);
                SkillInfo si = SkillData.getSkillInfoById(skill.getSkillId());
                int slv = skill.getCurrentLevel();
                dotDmg += si.getValue(dot, slv);
            }
        }
        return dotDmg;
    }

    private int getMaxDarkEleStack() {
        int maxStack = 0;
        for (int darkEleSkill : darkEleSkills) {
            if (chr.hasSkill(darkEleSkill)) {
                Skill skill = chr.getSkill(darkEleSkill);
                SkillInfo si = SkillData.getSkillInfoById(skill.getSkillId());
                int slv = skill.getCurrentLevel();
                maxStack += si.getValue(x, slv);
            }
        }
        return maxStack;
    }

    private Skill getDarkElementalSkill() {
        Skill skill = null;
        for (int darkEleSkill : darkEleSkills) {
            if (chr.hasSkill(darkEleSkill)) {
                skill = chr.getSkill(darkEleSkill);
            }
        }
        return skill;
    }

    private int getDarkEleProp() {
        int proc = 0;
        for (int darkEleSkill : darkEleSkills) {
            if (chr.hasSkill(darkEleSkill)) {
                Skill skill = chr.getSkill(darkEleSkill);
                SkillInfo si = SkillData.getSkillInfoById(skill.getSkillId());
                int slv = skill.getCurrentLevel();
                proc += si.getValue(prop, slv);
            }
        }
        return proc;
    }

    private void incrementSiphonVitality(TemporaryStatManager tsm) {
        Option o = new Option();
        Option o1 = new Option();
        Option o2 = new Option();
        Skill skill = chr.getSkill(VITALITY_SIPHON);
        SkillInfo si = SkillData.getSkillInfoById(VITALITY_SIPHON);
        int slv = skill.getCurrentLevel();
        int amount = 1;
        if (tsm.hasStat(ElementDarkness)) {
            if (tsm.hasStat(SiphonVitality)) {
                amount = tsm.getOption(SiphonVitality).nOption;
                if (amount < getMaxSiphon()) {
                    amount++;
                }
            }

            if (amount >= getMaxSiphon()) {
                tsm.removeStatsBySkill(VITALITY_SIPHON);
                o.nOption = si.getValue(y, slv) + chr.getSkillStatValue(x, VITALITY_SIPHON_EXTRA_POINT);
                o.rOption = VITALITY_SIPHON_SHIELD;
                o.tOption = si.getValue(subTime, slv);
                tsm.putCharacterStatValue(ProtectiveShield, o, true);
                if (chr.hasSkill(VITALITY_SIPHON_PREPARATION)) {
                    o1.nOption = chr.getSkillStatValue(x, VITALITY_SIPHON_PREPARATION);
                    o1.rOption = VITALITY_SIPHON_SHIELD;
                    o1.tOption = si.getValue(subTime, slv);
                    tsm.putCharacterStatValue(IndieAsrR, o1);
                }
                if (chr.hasSkill(VITALITY_SIPHON_REINFORCE)) {
                    o2.nOption = chr.getSkillStatValue(x, VITALITY_SIPHON_REINFORCE);
                    o2.rOption = VITALITY_SIPHON_SHIELD;
                    o2.tOption = si.getValue(subTime, slv);
                    tsm.putCharacterStatValue(IndiePAD, o2);
                }
                tsm.sendSetStatPacket();
                return;
            }

            o.nOption = amount;
            o.rOption = skill.getSkillId();
            o.tOption = si.getValue(time, slv);
            tsm.putCharacterStatValue(SiphonVitality, o);
            tsm.sendSetStatPacket();
        }
    }

    private int getMaxSiphon() {
        Skill skill = null;
        if (chr.hasSkill(VITALITY_SIPHON)) {
            skill = chr.getSkill(VITALITY_SIPHON);
        }
        return skill == null ? 0 : SkillData.getSkillInfoById(skill.getSkillId()).getValue(x, skill.getCurrentLevel());
    }

    private void placeShadowSpearAA(AttackInfo attackInfo) {
        Skill skill = chr.getSkill(SHADOW_SPEAR);
        if (skill != null) {
            SkillInfo si = SkillData.getSkillInfoById(skill.getSkillId());
            int slv = skill.getCurrentLevel();
            Rect rect = new Rect(
                    new Position(
                            -20,
                            -20),
                    new Position(
                            20,
                            20)
            );
            for (MobAttackInfo mai : attackInfo.mobAttackInfo) {
                AffectedArea aa = AffectedArea.getPassiveAA(chr, SHADOW_SPEAR_AA_SMALL, slv);
                Mob mob = (Mob) chr.getField().getLifeByObjectID(mai.mobId);
                if (mob == null) {
                    continue;
                }
                int randInt = new Random().nextInt(140) - 70;
                Position randPos = new Position(mob.getPosition().getX() + randInt, mob.getPosition().getY());
                if (canSpawnGiantShadowSpear(mob.getPosition())
                        && !chr.hasSkillOnCooldown(SHADOW_SPEAR_AA_LARGE)
                        && (getGiantShadowSpearAA() == null
                        || (getGiantShadowSpearAA() != null && !getGiantShadowSpearAA().getRect().hasPositionInside(randPos)))) {
                    removeShadowSpearAfterGiant(mob.getPosition());
                    chr.write(UserLocal.giantShadowSpearAttack(randPos));
                    chr.addSkillCoolTime(SHADOW_SPEAR_AA_LARGE, si.getValue(w, slv) * 1000);
                } else {
                    aa.setPosition(randPos);
                    aa.setFh(chr.getField().findFootHoldBelow(mob.getPosition()).getId());
                    aa.setRect(aa.getPosition().getRectAround(rect));
                    aa.setTemplateId(SHADOW_SPEAR_AA_SMALL);
                    aa.setNoFoothold(true);
                    aa.setDuration(si.getValue(subTime, slv));
                    chr.getField().spawnAffectedArea(aa);
                }
            }
        }
    }

    private boolean canSpawnGiantShadowSpear(Position position) {
        return chr.getField().getAffectAreasInRect(position.getRectAround(new Rect(-100, -50, 100, 50))).stream()
                .filter(aa -> aa.getSkillID() == SHADOW_SPEAR_AA_SMALL && aa.getOwner() == chr)
                .count() > 15;
    }

    private void removeShadowSpearAfterGiant(Position position) {
        chr.getField().getAffectAreasInRect(position.getRectAround(new Rect(-100, -50, 100, 50))).stream()
                .filter(aa -> aa.getSkillID() == SHADOW_SPEAR_AA_SMALL && aa.getOwner() == chr)
                .forEach(aa -> chr.getField().removeLife(aa));
        setGiantShadowSpearAA(position);
    }

    private void setGiantShadowSpearAA(Position position) {
        SkillInfo si = SkillData.getSkillInfoById(SHADOW_SPEAR);
        AffectedArea aa = AffectedArea.getPassiveAA(chr, SHADOW_SPEAR_AA_LARGE, 1);
        aa.setPosition(position);
        aa.setRect(position.getRectAround(new Rect(-100, -50, 100, 50)));
        aa.setDuration(si.getValue(w, 1));
        chr.getField().spawnAffectedAreaAndRemoveOld(aa);
    }

    private AffectedArea getGiantShadowSpearAA() {
        return chr.getField().getAffectedAreas().stream().filter(aa -> aa.getSkillID() == SHADOW_SPEAR_AA_LARGE && aa.getOwner() == chr).findFirst().orElse(null);
    }

    private void createShadowBiteForceAtom(AttackInfo attackInfo) {
        if (!chr.hasSkill(SHADOW_BITE)) {
            return;
        }
        Field field = chr.getField();
        for (MobAttackInfo mai : attackInfo.mobAttackInfo) {
            Mob mob = mai.mob;
            if (mob == null) {
                continue;
            }
            Rect rect = new Rect(
                    new Position(
                            -500,
                            -500),
                    new Position(
                            500,
                            500)
            );
            if (mai.mobDies || mob.isBoss()) {
                // If mobs die, create ShadowBite atom
                ForceAtomEnum fae = ForceAtomEnum.SHADOW_BITE;
                ForceAtomInfo forceAtomInfo = new ForceAtomInfo(chr.getNewForceAtomKey(), fae.getInc(), 3, 2,
                        0, 1900, Util.getCurrentTime(), 1, 0,
                        new Position());
                forceAtomInfo.setBossMob(mob.isBoss());
                chr.createForceAtom(new ForceAtom(true, chr.getId(), mob.getObjectId(), fae,
                        false, mob.getObjectId(), SHADOW_BITE, forceAtomInfo, mob.getPosition().getRectAround(rect), 0, 300,
                        mob.getPosition(), 0, mob.getPosition(), 0), false);
            }

            Mob toMob = Util.getRandomFromCollection(field.getMobsInRect(mob.getPosition().getRectAround(rect)));
            ForceAtomEnum fae = chr.hasSkill(BAT_AFFINITY_III) ? ForceAtomEnum.NIGHT_WALKER_FROM_MOB_4 : ForceAtomEnum.NIGHT_WALKER_FROM_MOB;
            ForceAtomInfo fai = new ForceAtomInfo(chr.getNewForceAtomKey(), fae.getInc(), 1, 5,
                    (int) Util.getAngleOfTwoPositions(mob.getPosition(), toMob.getPosition()), 0, Util.getCurrentTime(), 0, 0,
                    new Position());
            ForceAtom fa = new ForceAtom(true, chr.getId(), mob.getObjectId(), fae,
                    true, toMob.getObjectId(), SHADOW_BAT_FROM_MOB_ATOM, fai, mob.getPosition().getRectAround(rect), 0, 0,
                    new Position(), SHADOW_BAT_FROM_MOB_ATOM, mob.getPosition(), 0);
            fa.setMaxRecreationCount(3);
            chr.createForceAtom(fa);
        }
    }

    private void giveShadowBiteBuff(boolean isBoss) {
        if (!chr.hasSkill(SHADOW_BITE)) {
            return;
        }
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        Option o = new Option();
        Skill skill = chr.getSkill(SHADOW_BITE);
        SkillInfo si = SkillData.getSkillInfoById(skill.getSkillId());
        int slv = skill.getCurrentLevel();
        int count = isBoss ? 14 : 1;
        if (tsm.getOptByCTSAndSkill(IndiePMdR, SHADOW_BITE) != null) {
            count = tsm.getOptByCTSAndSkill(IndiePMdR, SHADOW_BITE).nOption;
            if (count < si.getValue(q, slv)) {
                if (isBoss) {
                    count += si.getValue(w, slv);
                } else {
                    count++;
                }
            }
        }
        o.nOption = count > si.getValue(q, slv) ? si.getValue(q, slv) : count;
        o.rOption = SHADOW_BITE;
        o.tOption = si.getValue(time, slv);
        tsm.putCharacterStatValue(IndiePMdR, o);
        tsm.sendSetStatPacket();
    }

    public void handleForceAtomCollision(ForceAtom fa, ForceAtomCollisionInfo faci) {
        var skillId = faci.skillId;
        var faKey = faci.forceAtomKey;

        switch (skillId) {
            case SHADOW_BITE:
                ForceAtomInfo fai = fa.getFaiList().stream().filter(sfai -> sfai.getKey() == faKey).findFirst().orElse(null);
                if (fai != null) {
                    boolean isBoss = fai.isBossMob();
                    giveShadowBiteBuff(isBoss);
                }
                break;
        }

        super.handleForceAtomCollision(fa, faci);
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
        switch (skillId) {
            case DARK_ELEMENTAL:
                if (!tsm.hasStatBySkillId(DARK_ELEMENTAL)) {
                    o1.nOption = si.getValue(x, slv);
                    o1.rOption = skillId;
                    tsm.putCharacterStatValue(ElementDarkness, o1);
                } else {
                    tsm.removeStatsBySkill(DARK_ELEMENTAL);
                }
                break;
            case HASTE:
                o1.nOption = si.getValue(speed, slv);
                o1.rOption = skillId;
                o1.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(Speed, o1);
                o2.nOption = si.getValue(jump, slv);
                o2.rOption = skillId;
                o2.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(Jump, o2);
                break;
            case DARK_SIGHT:
                o1.nOption = si.getValue(x, slv);
                o1.rOption = skillId;
                o1.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(DarkSight, o1);
                darkSightCDCount = 0;
                break;
            case THROWING_BOOSTER:
                o1.nOption = si.getValue(x, slv);
                o1.rOption = skillId;
                o1.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(IndieBooster, o1);
                break;
            case DARK_SERVANT:
                applyDarkServant();
                break;
            case SPIRIT_PROJECTION:
                break;
            case DARKNESS_ASCENDING:
                o1.nOption = 1;
                o1.rOption = skillId;
                o1.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(ReviveOnce, o1, true);
                break;
            case SHADOW_BAT:
                if (tsm.hasStatBySkillId(skillId)) {
                    tsm.removeStatsBySkill(skillId);
                    tsm.sendResetStatPacket();
                } else {
                    o1.nOption = 1;
                    o1.rOption = skillId;
                    tsm.putCharacterStatValue(NightWalkerBat, o1);
                }
                break;
            case GLORY_OF_THE_GUARDIANS_NW:
                o1.rOption = skillId;
                o1.nOption = si.getValue(indieDamR, slv);
                o1.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(IndieDamR, o1);
                break;
            case SHADOW_ILLUSION:
                if (chr.getField().getSummons().stream()
                        .anyMatch(l -> l.getChr() == chr &&
                                l.getSkillID() == DARK_SERVANT)
                ) {
                    tsm.removeStatsBySkill(DARK_SERVANT);
                    chr.getField().broadcastPacket(Summoned.summonedRemoved(darkServant, LeaveType.ANIMATION));
                }
                o1.nOption = 1;
                o1.rOption = skillId;
                o1.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(ShadowIllusion, o1);
                for (int i = skillId; i < skillId + 3; i++) {
                    summon = Summon.getSummonBy(chr, i, slv);
                    summon.setAvatarLook(chr.getAvatarData().getAvatarLook());
                    summon.setAvatarLook(chr.getAvatarData().getAvatarLook());
                    summon.setMoveAbility(MoveAbility.WalkClone);
                    summon.setAssistType(AssistType.None);
                    summon.setActionDelay((i - (skillId - 1)) * 400);
                    summon.setMovementDelay((i - (skillId - 1)) * 30);
                    summon.setFlip(true);
                    field.spawnSummonAndRemoveOld(summon);
                }
                if (chr.hasSkill(DARK_SERVANT)) {
                    EventManager.addEvent(this::applyDarkServant, si.getValue(time, slv) * 1001, TimeUnit.MILLISECONDS);
                }
                break;
            case DARK_OMEN:
                summon = Summon.getSummonBy(chr, skillId, slv);
                summon.setFlyMob(false);
                summon.setMoveAbility(MoveAbility.Stop);
                field.spawnSummonAndRemoveOld(summon);
                break;
            case SHADOW_SPEAR:
                o1.nOption = 1;
                o1.rOption = skillId;
                o1.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(HiddenPossession, o1);
                break;
            case GREATER_DARK_SERVANT:
                summon = Summon.getSummonBy(chr, skillId, slv);
                summon.setFlyMob(false);
                summon.setAvatarLook(chr.getAvatarData().getAvatarLook());
                summon.setMoveAbility(MoveAbility.Stop);
                summon.setCount(si.getValue(w, slv));
                field.spawnSummonAndRemoveOld(summon);
                break;
        }
        tsm.sendSetStatPacket();
    }


    // Hit related methods ---------------------------------------------------------------------------------------------

    @Override
    public void handleHit(Client c, InPacket inPacket, HitInfo hitInfo) {
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        if (hitInfo.hpDamage > 0 && tsm.hasStatBySkillId(DARK_SIGHT)) {
            // TODO     Check if hp% attack
            incrementDarkSightCooltime();
        }
        super.handleHit(c, inPacket, hitInfo);
    }

    private void incrementDarkSightCooltime() {
        Skill skill = chr.getSkill(DARK_SIGHT);
        SkillInfo si = SkillData.getSkillInfoById(skill.getSkillId());
        int slv = skill.getCurrentLevel();
        int maxStack = si.getValue(y, slv);
        if (darkSightCDCount < maxStack) {
            darkSightCDCount++;
        }
    }

    public void reviveByDarknessAscending() {
        Field field = chr.getField();
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        if (!chr.hasSkill(DARKNESS_ASCENDING)) {
            return;
        }
        Skill skill = chr.getSkill(DARKNESS_ASCENDING);
        SkillInfo si = SkillData.getSkillInfoById(skill.getSkillId());
        int slv = skill.getCurrentLevel();

        tsm.removeStatsBySkill(skill.getSkillId());
        chr.setSkillCooldown(skill.getSkillId(), slv);
        chr.write(UserPacket.effect(Effect.skillPreLoopEnd(skill.getSkillId(), si.getValue(subTime, slv) * 1000)));

        int healedR = si.getValue(x, slv) + (getCurrentShadowBats().size() * si.getValue(w, slv));
        chr.heal(chr.getHPPerc(healedR), false, true);
        getCurrentShadowBats().forEach(field::removeLife);

        Option o = new Option();
        Option o1 = new Option();
        o.nOption = 1;
        o.rOption = skill.getSkillId();
        o.tOption = si.getValue(subTime, slv);
        tsm.putCharacterStatValue(NotDamaged, o);
        o1.nOption = 550;
        o1.rOption = skill.getSkillId();
        o1.tOption = si.getValue(subTime, slv);
        tsm.putCharacterStatValue(DarknessAscension, o1);
        tsm.sendSetStatPacket();
        chr.chatMessage("You have been revived by Darkness Ascending.");
    }

    private int getOriginalByFinisherId(int skillId) {
        switch (skillId) {
            case QUAD_STAR_FINISHER:
                return QUAD_STAR;
            case TRIPLE_THROW_FINISHER:
                return TRIPLE_THROW;
            case QUINTUPLE_STAR_FINISHER:
                return QUINTUPLE_STAR;
            case SHADOW_SPARK_FINISHER:
                return SHADOW_SPARK;
            default:
                return skillId;
        }
    }
}
