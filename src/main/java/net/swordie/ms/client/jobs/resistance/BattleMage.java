package net.swordie.ms.client.jobs.resistance;

import net.swordie.ms.client.Client;
import net.swordie.ms.client.character.Char;
import net.swordie.ms.client.character.skills.Option;
import net.swordie.ms.client.character.skills.Skill;
import net.swordie.ms.client.character.skills.SkillStat;
import net.swordie.ms.client.character.skills.atom.forceatom.ForceAtom;
import net.swordie.ms.client.character.skills.debuff.DebuffInfo;
import net.swordie.ms.client.character.skills.debuff.DebuffUtil;
import net.swordie.ms.client.character.skills.info.*;
import net.swordie.ms.client.character.skills.temp.CharacterTemporaryStat;
import net.swordie.ms.client.character.skills.temp.TemporaryStatManager;
import net.swordie.ms.connection.InPacket;
import net.swordie.ms.connection.packet.*;
import net.swordie.ms.constants.JobConstants;
import net.swordie.ms.constants.SkillChangeConstants;
import net.swordie.ms.constants.SkillConstants;
import net.swordie.ms.enums.AssistType;
import net.swordie.ms.enums.ForceAtomEnum;
import net.swordie.ms.enums.MoveAbility;
import net.swordie.ms.handlers.executors.EventManager;
import net.swordie.ms.life.AffectedArea;
import net.swordie.ms.life.ImmovableObj;
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
import java.util.Comparator;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ScheduledFuture;
import java.util.concurrent.TimeUnit;
import java.util.stream.Collectors;

import static net.swordie.ms.client.character.skills.SkillStat.*;
import static net.swordie.ms.client.character.skills.temp.CharacterTemporaryStat.*;

/**
 * Created on 12/14/2017.
 */
public class BattleMage extends Citizen {

    public static final int SECRET_ASSEMBLY = 30001281;

    public static final int CONDEMNATION = 32001014; //Special Buff (ON/OFF)
    public static final int HASTY_AURA = 32001016; //Buff (Unlimited Duration)

    public static final int CONDEMNATION_I = 32100010; //Special Buff (ON/OFF)
    public static final int DRAINING_AURA = 32101009; //Buff (Unlimited Duration)
    public static final int STAFF_BOOST = 32101005; //Buff
    public static final int DARK_CHAIN = 32101001; //Special Attack (Stun Debuff)

    public static final int CONDEMNATION_II = 32110017; //Special Buff (ON/OFF)
    public static final int BLUE_AURA = 32111012; //Buff (Unlimited Duration
    public static final int BLUE_AURA_DISPEL = 32120062;
    public static final int DARK_SHOCK = 32111016; //Buff (ON/OFF)
    public static final int DARK_SHOCK_EXPLOSION = 32110020;
    public static final int BATTLE_BURST = 32111015;

    public static final int CONDEMNATION_III = 32120019; //Special Buff (ON/OFF)
    public static final int DARK_GENESIS = 32121004; //Special Attack (Stun Debuff) (Special Properties if on Cooldown)
    public static final int DARK_GENESIS_FA = 32121011; // Final Attack  attack if DarkGenesis is on CD
    public static final int DARK_AURA = 32121017; //Buff (Unlimited Duration)
    public static final int DARK_AURA_BOSS = 32120060;
    public static final int WEAKENING_AURA = 32121018; //Buff (Unlimited Duration)
    public static final int WEAKENING_AURA_ELE_DEC = 32120061;
    public static final int PARTY_SHIELD = 32121006;
    public static final int PARTY_SHIELD_PERSIST = 32120064;
    public static final int PARTY_SHIELD_ENHANCE = 32120065;
    public static final int BATTLE_RAGE = 32121010; //Buff (ON/OFF)
    public static final int MAPLE_WARRIOR_BAM = 32121007; //Buff
    public static final int HEROS_WILL_BAM = 32121008;

    public static final int FOR_LIBERTY_BAM = 32121053;
    public static final int MASTER_OF_DEATH = 32121056;

    // V Skills
    public static final int AURA_SCYTHE = 400021006;
    public static final int ALTAR_OF_ANNIHILATION = 400021047;
    public static final int GRIM_HARVEST = 400021069;
    public static final int ABYSSAL_LIGHTNING = 400021087;
    public static final int ABYSSAL_LIGHTNING_PORTAL_ATTACK = 400021088;
    public static final int ABYSSAL_LIGHTNING_PORTAL = 400021089;


    private static final int[] addedSkills = new int[]{
            SECRET_ASSEMBLY,
    };


    private static final int[] auras = new int[]{
            HASTY_AURA,
            DRAINING_AURA,
            BLUE_AURA,
            DARK_AURA,
            WEAKENING_AURA,
    };

    private ScheduledFuture drainAuraActiveHPRecoveryTimer;
    private ScheduledFuture weakeningAuraTimer;

    private int hitCountBoss = 0;

    public BattleMage(Char chr) {
        super(chr);
        if (isHandlerOfJob(chr.getJob())) {
            for (int id : addedSkills) {
                if (!chr.hasSkill(id)) {
                    Skill skill = SkillData.getSkillDeepCopyById(id);
                    skill.setCurrentLevel(skill.getMasterLevel());
                    chr.addSkill(skill);
                }
            }
            if (drainAuraActiveHPRecoveryTimer != null && !drainAuraActiveHPRecoveryTimer.isDone()) {
                drainAuraActiveHPRecoveryTimer.cancel(false);
            }
            drainAuraActiveHPRecoveryTimer = EventManager.addFixedRateEvent(this::drainAuraPassiveHPRecovery, 4, 4, TimeUnit.SECONDS);
        }
    }

    @Override
    public boolean isHandlerOfJob(short id) {
        return JobConstants.isBattleMage(id);
    }


    private void spawnDeath(int skillID, int slv) {
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        Option o1 = new Option();
        Field field = chr.getField();

        Summon death = Summon.getSummonByNoCTS(chr, skillID, slv);
        death.setSummonTerm(0);
        death.setAssistType(AssistType.AttackCounter);
        death.setSlv(chr.getLevel());
        field.spawnSummonAndRemoveOld(death);

        o1.rOption = skillID;
        o1.nOption = 1;
        o1.summon = death;
        tsm.putCharacterStatValue(IndieSummon, o1, true);
        tsm.sendSetStatPacket();
    }

    public void removeCondemnationBuff(Summon summon) {
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        if (summon != null && tsm.hasStat(BMageDeath)) {
            tsm.removeStatsBySkill(summon.getSkillID());
        }
    }

    public void incrementAltarAnnihilationCount() {
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        changeAltarAnnihilationCount(tsm.getOption(StackOverTimeSkill).nOption + 1);
    }

    private void changeAltarAnnihilationCount(int count) {
        if (!chr.hasSkill(ALTAR_OF_ANNIHILATION)) {
            return;
        }
        Skill skill = chr.getSkill(ALTAR_OF_ANNIHILATION);
        SkillInfo si = SkillData.getSkillInfoById(skill.getSkillId());
        int slv = skill.getCurrentLevel();
        int maxCount = si.getValue(y, slv);

        count = count > maxCount ? maxCount : count < 0 ? 0 : count;
        updateAlterAnnihilationCount(count);
    }

    private void updateAlterAnnihilationCount(int count) {
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        Option o = new Option();
        o.nOption = count;
        o.rOption = 3213;
        tsm.putCharacterStatValue(StackOverTimeSkill, o);
        tsm.sendSetStatPacket();
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
        if (hasHitMobs && !SkillConstants.isSummon(attackInfo.skillId)) {
            if (attackInfo.skillId != CONDEMNATION
                    && attackInfo.skillId != CONDEMNATION_I
                    && attackInfo.skillId != CONDEMNATION_II
                    && attackInfo.skillId != CONDEMNATION_III) {
                if (si != null && si.getElemAttr().contains("d") && tsm.getOptByCTSAndSkill(AttackCountX, MASTER_OF_DEATH) != null) {
                    decreaseCondemnationCooldown();
                }
                incrementCondemnation(attackInfo);
            }
            drainAuraActiveHPRecovery(attackInfo);
            if (attackInfo.skillId != DARK_SHOCK_EXPLOSION
                    && attackInfo.skillId != BATTLE_BURST
                    && attackInfo.skillId != DARK_CHAIN) {
                doDarkShockBonusAttack(attackInfo);
            }
        }
        Option o1 = new Option();
        Option o2 = new Option();
        Option o3 = new Option();
        Field field = chr.getField();
        switch (attackInfo.skillId) {
            case DARK_CHAIN:
                o1.nOption = 1;
                o1.rOption = skill.getSkillId();
                o1.tOption = si.getValue(time, slv);
                DebuffUtil.applyDebuffOnMobs(chr, MobStat.Stun, o1, attackInfo.getMobIds(), new DebuffInfo(true));
                // Fall through intended
            case DARK_SHOCK:
            case BATTLE_BURST:
            case ALTAR_OF_ANNIHILATION:
                if (!chr.hasSkill(DARK_SHOCK)) {
                    return;
                }
                si = SkillData.getSkillInfoById(DARK_SHOCK);
                slv = chr.getSkillLevel(DARK_SHOCK);
                o2.nOption = si.getValue(x, slv);
                o2.rOption = DARK_SHOCK;
                o2.tOption = si.getValue(time, slv);
                o3.nOption = si.getValue(x, slv) + si.getValue(bdR, slv);
                o3.rOption = DARK_SHOCK;
                o3.tOption = si.getValue(time, slv);
                for (MobAttackInfo mai : attackInfo.mobAttackInfo) {
                    Mob mob = mai.mob;
                    if (mob == null) {
                        continue;
                    }
                    MobTemporaryStat mts = mob.getTemporaryStat();
                    mts.addStatOptionsAndBroadcast(chr, MobStat.DarkLightning, mob.isBoss() ? o3: o2);
                }
                break;
            case DARK_GENESIS:
                o1.nOption = 1;
                o1.rOption = skill.getSkillId();
                o1.tOption = si.getValue(time, slv);

                DebuffUtil.applyDebuffOnMobs(chr, MobStat.Stun, o1, attackInfo.getMobIds(), new DebuffInfo(true));
                break;
            case GRIM_HARVEST:
                createGrimHarvestForceAtom(attackInfo);
                if (!tsm.hasStatBySkillId(MASTER_OF_DEATH)) {
                    for (MobAttackInfo mai : attackInfo.mobAttackInfo) {
                        if (mai.mob == null) {
                            continue;
                        }
                        extendGrimHarvest(mai.mob.isBoss(), mai.mobDies);
                    }
                }
                break;
            case ABYSSAL_LIGHTNING_PORTAL_ATTACK:
                var immovableObjObjId = attackInfo.sui.lifeObjectId;
                if (immovableObjObjId > 0) {
                    var immovableObj = (ImmovableObj) field.getLifeByObjectID(immovableObjObjId);
                    if (immovableObj != null) {
                        field.removeImmovableObj(immovableObj);
                        var sui = attackInfo.sui;
                        var effect = Effect.showAbyssalLightningSkill(attackInfo.skillId, sui.position, sui.endingPosition);
                        chr.write(UserPacket.effect(effect));
                        chr.getField().broadcastPacket(UserRemote.effect(chr.getId(), effect), chr);
                    }
                }
                break;
        }

        super.handleAttack(c, attackInfo);
    }

    private void doDarkShockBonusAttack(AttackInfo attackInfo) {
        List<Integer> mobObjIdList = new ArrayList<>();
        for (MobAttackInfo mai : attackInfo.mobAttackInfo) {
            Mob mob = mai.mob;
            if (mob == null) {
                continue;
            }
            MobTemporaryStat mts = mob.getTemporaryStat();
            if (mts.hasCurrentMobStat(MobStat.DarkLightning)) {
                mobObjIdList.add(mob.getObjectId());
                mts.removeMobStat(MobStat.DarkLightning);
            }
        }
        if (mobObjIdList.size() > 0) {
            chr.write(UserLocal.userBonusAttackRequest(DARK_SHOCK_EXPLOSION, mobObjIdList));
        }
    }

    private void createGrimHarvestForceAtom(AttackInfo attackInfo) {
        Summon summon = chr.getField().getSummonByChrAndSkillId(chr, GRIM_HARVEST);
        ForceAtomEnum fae = ForceAtomEnum.GRIM_HARVEST;
        Rect rect = new Rect(
                new Position(
                        -1500,
                        -1500),
                new Position(
                        1500,
                        1500)
        );
        for (MobAttackInfo mai : attackInfo.mobAttackInfo) {
            Mob mob = (Mob) chr.getField().getLifeByObjectID(mai.mobId);
            ForceAtomInfo fai = new ForceAtomInfo(chr.getNewForceAtomKey(), fae.getInc(), 2, 2,
                    0, 1300, Util.getCurrentTime(), 1, 0, new Position());
            fai.setBossMob(mob != null && mob.isBoss());
            chr.createForceAtom(new ForceAtom(true, chr.getId(), mob.getObjectId(), fae,
                    false, mob.getObjectId(), GRIM_HARVEST, fai, mob.getPosition().getRectAround(rect), 0, 0,
                    summon.getPosition(), GRIM_HARVEST, summon.getPosition(), 0), false);
        }
    }

    private void extendGrimHarvest(boolean isBoss, boolean killed) {
        if (isBoss && !killed) {
            return;
        }
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        long remainingTime = tsm.getRemainingTime(IndieSummon, GRIM_HARVEST);
        long addedTimeMS = isBoss ? 2000 : 200;

        Option o1 = new Option();
        o1.nOption = 1;
        o1.rOption = GRIM_HARVEST;
        o1.tOption = (int) (remainingTime + addedTimeMS);
        o1.summon = tsm.getOptByCTSAndSkill(IndieSummon, GRIM_HARVEST).summon;
        o1.setInMillis(true);
        tsm.putCharacterStatValue(IndieSummon, o1, true);
        tsm.sendSetStatPacket();
    }

    public void recallGrimHarvest() {
        Summon grim = Summon.getSummonByNoCTS(chr, GRIM_HARVEST, chr.getSkillLevel(GRIM_HARVEST));
        grim.setMoveAbility(MoveAbility.Stop);
        grim.setAssistType(AssistType.Attack);
        grim.setSummonTerm(80);
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        Option o = tsm.getOptByCTSAndSkill(IndieSummon, GRIM_HARVEST);
        o.summon = grim;
        chr.getField().spawnSummonAndRemoveOld(grim);
    }

    private void incrementCondemnation(AttackInfo attackInfo) {
        Field field = chr.getField();
        TemporaryStatManager tsm = chr.getTemporaryStatManager();

        if (!tsm.hasStat(BMageDeath)) {
            return;
        }
        int killCount = tsm.getOption(BMageDeath).nOption;
        for (MobAttackInfo mai : attackInfo.mobAttackInfo) {
            if (mai.mob == null) {
                continue;
            }

            if (mai.mob.isBoss()) {
                if (hitCountBoss < 1) {
                    hitCountBoss++;
                } else {
                    hitCountBoss = 0;
                    if (killCount < getCondemnationKillReq()) {
                        killCount++;
                    } else {
                        killCount = doCondemnationAttack(killCount);
                    }
                }
            } else {
                if (mai.mobDies) {
                    if (killCount < getCondemnationKillReq()) {
                        killCount++;
                    } else {
                        killCount = doCondemnationAttack(killCount);
                    }

                }
            }
        }
        setCondemnationCount(killCount);
    }

    private void decreaseCondemnationCooldown() {
        Skill skill = chr.getSkill(MASTER_OF_DEATH);
        if (skill == null) {
            return;
        }
        SkillInfo si = SkillData.getSkillInfoById(skill.getSkillId());
        int slv = skill.getCurrentLevel();
        chr.reduceSkillCoolTime(JobConstants.JobEnum.BATTLE_MAGE_1.getJobId(), si.getValue(z, slv));
    }

    private void setCondemnationCount(int killCount) {
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        Option o = new Option();
        o.nOption = killCount;
        o.rOption = getCondemnationSkillId();
        tsm.putCharacterStatValue(BMageDeath, o);
        tsm.sendSetStatPacket();
    }

    private int doCondemnationAttack(int killCount) {
        if (!chr.hasSkillOnCooldown(JobConstants.JobEnum.BATTLE_MAGE_1.getJobId())) {
            chr.getField().broadcastPacket(Summoned.summonedAssistAttackRequest(getDeath(), 0));
            chr.addSkillCoolTime(JobConstants.JobEnum.BATTLE_MAGE_1.getJobId(), getCondemnationCooldown() * 1000);
            killCount = 0;
        }
        return killCount;
    }

    private int getCondemnationCooldown() {
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        SkillInfo si = SkillData.getSkillInfoById(getCondemnationSkillId());

        return si.getValue(time, 1);
    }

    private int getCondemnationKillReq() {
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        SkillInfo si = SkillData.getSkillInfoById(getCondemnationSkillId());

        // Master of Death Buff
        if (tsm.getOptByCTSAndSkill(AttackCountX, MASTER_OF_DEATH) != null) {
            return 0;
        }

        return si.getValue(x, 1);
    }

    private int getCondemnationSkillId() {
        int skillId = 0;

        if (chr.getJob() == JobConstants.JobEnum.BATTLE_MAGE_1.getJobId()) {
            skillId = CONDEMNATION;
        }
        if (chr.getJob() == JobConstants.JobEnum.BATTLE_MAGE_2.getJobId()) {
            skillId = CONDEMNATION_I;
        }
        if (chr.getJob() == JobConstants.JobEnum.BATTLE_MAGE_3.getJobId()) {
            skillId = CONDEMNATION_II;
        }
        if (chr.getJob() == JobConstants.JobEnum.BATTLE_MAGE_4.getJobId()) {
            skillId = CONDEMNATION_III;
        }
        return skillId;
    }

    private Summon getDeath() {
        return chr.getField().getSummons().stream().filter(s -> s.getSkillID() == CONDEMNATION
                || s.getSkillID() == CONDEMNATION_I
                || s.getSkillID() == CONDEMNATION_II
                || s.getSkillID() == CONDEMNATION_III
                && s.getChr() == chr)
                .findAny().orElse(null);
    }

    private void drainAuraActiveHPRecovery(AttackInfo attackInfo) {
        Skill skill = chr.getSkill(DRAINING_AURA);
        if (skill == null) {
            return;
        }
        int slv = skill.getCurrentLevel();
        SkillInfo si = SkillData.getSkillInfoById(skill.getSkillId());
        int healCoolTime = 1000 * si.getValue(subTime, slv);
        int healingrate = si.getValue(x, slv);
        List<Char> pChrList = new ArrayList<>();
        if (chr.getParty() != null) {
            pChrList.addAll(chr.getParty().getPartyMembersInSameField(chr));
        }
        pChrList.add(chr);
        long totaldmg = Util.getRandomFromCollection(attackInfo.mobAttackInfo).totalDamage;
        int restoration = (int) ((healingrate * totaldmg) / 100D);
        for (Char pChr : pChrList) {
            TemporaryStatManager ptsm = pChr.getTemporaryStatManager();
            if ((ptsm.getOptByCTSAndSkill(FireAura, skill.getSkillId()) != null || ptsm.getOptByCTSAndSkill(FireAura, AURA_SCYTHE) != null) &&
                    !pChr.hasSkillOnCooldown(JobConstants.JobEnum.BATTLE_MAGE_2.getJobId())) {
                pChr.heal(restoration);
                pChr.addSkillCoolTime(JobConstants.JobEnum.BATTLE_MAGE_2.getJobId(), healCoolTime);
            }
        }
    }

    private void drainAuraPassiveHPRecovery() {
        Skill skill = chr.getSkill(DRAINING_AURA);
        if (skill ==  null) {
            return;
        }
        SkillInfo si = SkillData.getSkillInfoById(skill.getSkillId());
        int slv = skill.getCurrentLevel();
        if (chr == null) {

        }
        chr.heal(si.getValue(hp, slv), true, false);
    }

    @Override
    public int getFinalAttackSkill() {
        SkillInfo si = SkillData.getSkillInfoById(DARK_GENESIS_FA);
        if (chr.getSkill(DARK_GENESIS) != null && chr.hasSkillOnCooldown(DARK_GENESIS)) {
            int slv = chr.getSkill(DARK_GENESIS).getCurrentLevel();
            if (Util.succeedProp(si.getValue(prop, slv))) {
                return DARK_GENESIS_FA;
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
        Option o5 = new Option();
        Option o6 = new Option();
        Option o7 = new Option();
        Option o8 = new Option();
        switch (skillId) {
            case PARTY_SHIELD:
                var pos = inPacket.decodePosition();
                AffectedArea aa = AffectedArea.getPassiveAA(chr, skillId, slv);
                aa.setPosition(pos);
                aa.setRect(aa.getPosition().getRectAround(si.getFirstRect()));
                aa.setDelay((short) 16);
                aa.setDuration((si.getValue(time, slv) + chr.getSkillStatValue(time, PARTY_SHIELD_PERSIST)) * 1000);
                chr.getField().spawnAffectedArea(aa);
                break;
            case CONDEMNATION:
            case CONDEMNATION_I:
            case CONDEMNATION_II:
            case CONDEMNATION_III:
                o1.nOption = 0;
                o1.rOption = skillId;
                tsm.putCharacterStatValue(BMageDeath, o1);
                spawnDeath(skillId, slv);
                break;
            case STAFF_BOOST:
                o1.nOption = si.getValue(x, slv);
                o1.rOption = skillId;
                o1.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(IndieBooster, o1);
                break;
            case HASTY_AURA:
                if (tsm.hasStat(HastyAura) && tsm.getOption(HastyAura).xOption == tsm.getChr().getId()) {
                    tsm.removeStatsBySkill(skillId);
                } else {
                    // [Battle Mage] Custom Skill Change
                    if (!SkillChangeConstants.STACKING_AURAS) {
                        clearAuras(skillId);
                    }

                    o1.nOption = slv;
                    o1.rOption = skillId;
                    o1.xOption = chr.getId();
                    o1.bOption = 0; // Aura Owner
                    tsm.putCharacterStatValue(HastyAura, o1);
                    o2.nOption = si.getValue(indieSpeed, slv);
                    o2.rOption = skillId;
                    tsm.putCharacterStatValue(IndieSpeed, o2);
                    o3.nOption = si.getValue(indieBooster, slv);
                    o3.rOption = skillId;
                    tsm.putCharacterStatValue(IndieBooster, o3);
                }
                break;
            case DRAINING_AURA:
                if (tsm.hasStat(DrainingAura) && tsm.getOption(DrainingAura).xOption == tsm.getChr().getId()) {
                    tsm.removeStatsBySkill(skillId);
                } else {
                    // [Battle Mage] Custom Skill Change
                    if (!SkillChangeConstants.STACKING_AURAS) {
                        clearAuras(skillId);
                    }

                    o1.nOption = slv;
                    o1.rOption = skillId;
                    o1.xOption = chr.getId();
                    o1.bOption = 0; // Aura Owner
                    tsm.putCharacterStatValue(DrainingAura, o1);
                }
                break;
            case BLUE_AURA:
                if (tsm.hasStat(BlueAura) && tsm.getOption(BlueAura).xOption == tsm.getChr().getId()) {
                    tsm.removeStatsBySkill(skillId);
                } else {
                    // [Battle Mage] Custom Skill Change
                    if (!SkillChangeConstants.STACKING_AURAS) {
                        clearAuras(skillId);
                    }

                    o1.nOption = slv;
                    o1.rOption = skillId;
                    o1.xOption = chr.getId();
                    o1.bOption = 0; // Aura Owner
                    tsm.putCharacterStatValue(BlueAura, o1);
                    o2.nOption = si.getValue(indieAsrR, slv);
                    o2.rOption = skillId;
                    tsm.putCharacterStatValue(IndieAsrR, o2);
                }
                break;
            case DARK_AURA:
                if (tsm.hasStat(DarkAura) && tsm.getOption(DarkAura).xOption == tsm.getChr().getId()) {
                    tsm.removeStatsBySkill(skillId);
                } else {
                    // [Battle Mage] Custom Skill Change
                    if (!SkillChangeConstants.STACKING_AURAS) {
                        clearAuras(skillId);
                    }

                    o1.nOption = slv;
                    o1.rOption = skillId;
                    o1.xOption = chr.getId();
                    o1.bOption = 0; // Aura Owner
                    tsm.putCharacterStatValue(DarkAura, o1);
                    o2.nOption = si.getValue(indieDamR, slv);
                    o2.rOption = skillId;
                    tsm.putCharacterStatValue(IndieDamR, o2);

                    if (chr.hasSkill(BattleMage.DARK_AURA_BOSS)) {
                        o3.rOption = skillId;
                        o3.nOption = chr.getSkillStatValue(indieBDR, BattleMage.DARK_AURA_BOSS);
                        o3.tOption = si.getValue(time, slv);
                        tsm.putCharacterStatValue(IndieBDR, o3);
                    }
                }
                break;
            case WEAKENING_AURA:
                if (tsm.hasStat(WeakeningAura) && tsm.getOption(WeakeningAura).xOption == tsm.getChr().getId()) {
                    tsm.removeStatsBySkill(skillId);
                } else {
                    // [Battle Mage] Custom Skill Change
                    if (!SkillChangeConstants.STACKING_AURAS) {
                        clearAuras(skillId);
                    }

                    o1.nOption = slv;
                    o1.rOption = skillId;
                    o1.xOption = chr.getId();
                    o1.bOption = 1; // Aura Owner
                    tsm.putCharacterStatValue(WeakeningAura, o1);

                    EventManager.stopTimer(weakeningAuraTimer);
                    weakeningAuraTimer = EventManager.addFixedRateEvent(this::doWeakeningAura, 2000, 2000);
                }
                break;
            case AURA_SCYTHE:
                // [Battle Mage] Custom Skill Change
                if (!SkillChangeConstants.STACKING_AURAS) {
                    clearAuras(skillId);
                }

                // Hasty
                SkillInfo hastySI = SkillData.getSkillInfoById(BattleMage.HASTY_AURA);
                int hastySLV = chr.getSkillLevel(BattleMage.HASTY_AURA);
                o1.rOption = skillId;
                o1.nOption = hastySI.getValue(indieSpeed, hastySLV);
                o1.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(IndieSpeed, o1);
                o2.rOption = skillId;
                o2.nOption = -1;
                o2.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(IndieBooster, o2);

                // Blue
                SkillInfo blueSI = SkillData.getSkillInfoById(BattleMage.BLUE_AURA);
                int blueSLV = chr.getSkillLevel(BattleMage.BLUE_AURA);
                o3.rOption = skillId;
                o3.nOption = blueSI.getValue(indieAsrR, blueSLV);
                o3.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(IndieAsrR, o3);
                o4.nOption = blueSI.getValue(SkillStat.y, blueSLV);
                o4.rOption = skillId;
                o4.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(DamageReduce, o4);

                // Dark
                SkillInfo darkSI = SkillData.getSkillInfoById(BattleMage.DARK_AURA);
                int darkSLV = chr.getSkillLevel(BattleMage.DARK_AURA);
                o5.rOption = skillId;
                o5.nOption = darkSI.getValue(indieDamR, darkSLV);
                o5.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(IndieDamR, o5);
                if (chr.hasSkill(BattleMage.DARK_AURA_BOSS)) {
                    o6.rOption = skillId;
                    o6.nOption = chr.getSkillStatValue(indieBDR, BattleMage.DARK_AURA_BOSS);
                    o6.tOption = si.getValue(time, slv);
                    tsm.putCharacterStatValue(IndieBDR, o6);
                }

                // Weakening
                EventManager.stopTimer(weakeningAuraTimer);
                weakeningAuraTimer = EventManager.addFixedRateEvent(this::doWeakeningAura, 2000, 2000);

                // Scythe
                o7.nOption = si.getValue(indieMad, slv);
                o7.rOption = skillId;
                o7.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(IndieMAD, o7);

                o8.nOption = 1;
                o8.rOption = skillId;
                o8.tOption = si.getValue(time, slv);
                o8.xOption = chr.getId();
                o8.bOption = 1; // Owner
                tsm.putCharacterStatValue(AuraScythe, o8);
                break;
            case DARK_SHOCK:
                o1.nOption = 1;
                o1.rOption = skillId;
                tsm.putCharacterStatValue(DarkLighting, o1);
                break;
            case BATTLE_RAGE:
                int fd = si.getValue(x, slv);
                o1.nOption = fd; // dmg 20,  mobsHit 01
                o1.rOption = skillId;
                o1.xOption = fd;
                tsm.putCharacterStatValue(Enrage, o1);
                o3.nOption = si.getValue(z, slv);
                o3.rOption = skillId;
                tsm.putCharacterStatValue(EnrageCr, o3);
                o4.nOption = si.getValue(y, slv);
                o4.rOption = skillId;
                tsm.putCharacterStatValue(EnrageCrDamMin, o4);
                break;
            case FOR_LIBERTY_BAM:
                o1.rOption = skillId;
                o1.nOption = si.getValue(indieDamR, slv);
                o1.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(IndieDamR, o1);
                break;
            case MASTER_OF_DEATH:
                o1.nOption = 1;
                o1.rOption = skillId;
                o1.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(AttackCountX, o1);
                break;
            case GRIM_HARVEST:
                summon = Summon.getSummonBy(chr, skillId, slv);
                summon.setMoveAbility(MoveAbility.Stop);
                summon.setAssistType(AssistType.Attack);
                summon.setSummonTerm(80);
                field.spawnSummonAndRemoveOld(summon);
                break;
            case ALTAR_OF_ANNIHILATION:
                if (tsm.getOption(StackOverTimeSkill).nOption < 1) {
                    chr.chatMessage("You don't have enough Altar stacks.");
                    return;
                }
                if (getAnnihilationAltarList().size() >= 4) {
                    field.removeSummon(getAnnihilationAltarList().get(0));
                }
                Position position = inPacket.decodePosition();
                summon = Summon.getSummonByNoCTS(chr, skillId, slv);
                summon.setMoveAbility(MoveAbility.Stop);
                summon.setAssistType(AssistType.CreateShootObj);
                summon.setFlip(true);
                summon.setPosition(position);
                field.spawnSummon(summon);
                changeAltarAnnihilationCount(tsm.getOption(StackOverTimeSkill).nOption - 1);

                o1.nOption = 1;
                o1.rOption = skillId;
                o1.tOption = si.getValue(time, slv);
                o1.summon = summon;
                tsm.putCharacterStatValue(IndieSummon, o1, true);
                break;
            case ABYSSAL_LIGHTNING:
                o1.nOption = 1;
                o1.rOption = skillId;
                o1.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(AbyssalLightning, o1);
                o2.nOption = 1;
                o2.rOption = skillId;
                o2.tOption = 2;
                tsm.putCharacterStatValue(IndieNotDamaged, o2, true);
                break;
        }
        tsm.sendSetStatPacket();
    }

    private void clearAuras(int skillId) {
        var tsm = chr.getTemporaryStatManager();
        for (var aura : auras) {
            if (aura == skillId) {
                continue;
            }
            if (tsm.hasStatBySkillId(aura)) {
                tsm.removeStatsBySkill(aura);
            }
        }
    }

    public void additionalAuraEffects(int skillId) {
        switch (skillId) {
            case BLUE_AURA:
                if (!chr.hasSkillOnCooldown(BLUE_AURA_DISPEL) && chr.hasSkill(BLUE_AURA_DISPEL)) {
                    List<Char> chrList = new ArrayList<>() {{ add(chr); }};
                    if (chr.getParty() != null) {
                        chrList = chr.getParty().getPartyMembersInField(chr);
                    }
                    for (var pChr : chrList) {
                        if (pChr.getTemporaryStatManager().hasStat(BlueAura) && pChr.getTemporaryStatManager().getOption(BlueAura).xOption == chr.getId()) {
                            pChr.getTemporaryStatManager().removeAllDebuffs();
                        }
                    }
                    chr.addSkillCoolTime(BLUE_AURA_DISPEL, 5000);
                }
                break;
        }
    }

    public void doWeakeningAura() {
        if (!chr.getTemporaryStatManager().hasStat(WeakeningAura)) {
            EventManager.stopTimer(weakeningAuraTimer);
            return;
        }
        var si = SkillData.getSkillInfoById(WEAKENING_AURA);
        var slv = chr.getSkillLevel(WEAKENING_AURA);
        Rect rect = chr.getRectAround(si.getFirstRect());
        for (Mob mob : chr.getField().getMobsInRect(rect)) {
            applyWeakeningAuraOnMob(mob, si, slv);
        }
    }

    public void applyWeakeningAuraOnMob(Mob mob, SkillInfo si, int slv) {
        var o = new Option();
        var o1 = new Option();
        var o2 = new Option();
        var mts = mob.getTemporaryStat();
        o.nOption = -si.getValue(SkillStat.x, slv);
        o.rOption = si.getSkillId();
        o.tOption = si.getValue(time, slv);
        mts.addStatOptionsAndBroadcast(chr, MobStat.PDR, o);
        mts.addStatOptionsAndBroadcast(chr, MobStat.MDR, o);
        if (chr.hasSkill(BattleMage.WEAKENING_AURA_ELE_DEC)) {
            o1.nOption = chr.getSkillStatValue(SkillStat.x, BattleMage.WEAKENING_AURA_ELE_DEC);
            o1.rOption = si.getSkillId();
            o1.tOption = si.getValue(time, slv);
            mts.addStatOptionsAndBroadcast(chr, MobStat.ElementResetBySummon, o1);

            o2.nOption = chr.getSkillStatValue(SkillStat.s, BattleMage.WEAKENING_AURA_ELE_DEC);
            o2.rOption = si.getSkillId();
            o2.tOption = si.getValue(time, slv);
            mts.addStatOptionsAndBroadcast(chr, MobStat.FinalDmgReceived, o2);
        }
    }

    public void createAbyssalPortal(Position pos) {
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        var skill = chr.getSkill(ABYSSAL_LIGHTNING);
        if (!tsm.hasStat(AbyssalLightning) || skill == null) {
            return;
        }

        var si = SkillData.getSkillInfoById(ABYSSAL_LIGHTNING_PORTAL);
        var slv = skill.getCurrentLevel();

        if (getAbyssalPortalCount() >= si.getValue(x, slv)) {
            return;
        }

        ImmovableObj immovableObj = ImmovableObj.getByInfo(chr, ABYSSAL_LIGHTNING_PORTAL, pos, si.getValue(time, slv) * 1000);
        chr.getField().spawnImmovableObj(immovableObj);
    }

    public int getAbyssalPortalCount() {
        return (int) chr.getField().getImmovableObjs().stream().filter(vp -> vp.getOwner().equals(chr) && vp.getSkillId() == ABYSSAL_LIGHTNING_PORTAL).count();
    }

    @Override
    public void handleRemoveCTS(CharacterTemporaryStat cts, Option option) {
        var tsm = chr.getTemporaryStatManager();
        if (cts == AbyssalLightning) {
            chr.getField().getImmovableObjs().stream().filter(vp -> vp.getOwner().equals(chr) && vp.getSkillId() == ABYSSAL_LIGHTNING_PORTAL).forEach(vp -> vp.getField().removeImmovableObj(vp));
            var opt = new Option(1, ABYSSAL_LIGHTNING, 1);
            tsm.putCharacterStatValue(IndieNotDamaged, opt, true);
            tsm.sendSetStatPacket();
        }

        super.handleRemoveCTS(cts, option);
    }

    @Override
    public void onWarp(Field oldField, Field newField) {
        chr.getField().getImmovableObjs().stream().filter(vp -> vp.getOwner().equals(chr) && vp.getSkillId() == ABYSSAL_LIGHTNING_PORTAL).forEach(vp -> vp.getField().removeImmovableObj(vp));
        super.onWarp(oldField, newField);
    }

    @Override
    public void handleSkillRemove(Char chr, int skillID, Map<CharacterTemporaryStat, Option> removedOptions) {
        if (skillID == ALTAR_OF_ANNIHILATION) {
            Field field = chr.getField();
            for (Summon altar : getAnnihilationAltarList()) {
                field.removeSummon(altar);
            }
        }
        super.handleSkillRemove(chr, skillID, removedOptions);
    }

    // Hit related methods ---------------------------------------------------------------------------------------------


    public List<Summon> getAnnihilationAltarList() {
        return chr.getField().getSummons().stream()
                .filter(s -> s.getChr() == chr && s.getSkillID() == ALTAR_OF_ANNIHILATION)
                .sorted(Comparator.comparingInt(Summon::getObjectId))
                .collect(Collectors.toList());
    }

    @Override
    public void stopTimers() {
        EventManager.stopTimer(drainAuraActiveHPRecoveryTimer);
        EventManager.stopTimer(weakeningAuraTimer);
        super.stopTimers();
    }
}