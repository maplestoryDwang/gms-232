package net.swordie.ms.client.jobs.resistance.demon;

import net.swordie.ms.client.Client;
import net.swordie.ms.client.character.Char;
import net.swordie.ms.client.character.info.HitInfo;
import net.swordie.ms.client.character.skills.BypassCooldownCheckType;
import net.swordie.ms.client.character.skills.Option;
import net.swordie.ms.client.character.skills.Skill;
import net.swordie.ms.client.character.skills.SkillUseSource;
import net.swordie.ms.client.character.skills.atom.forceatom.ForceAtom;
import net.swordie.ms.client.character.skills.atom.forceatom.ForceAtomCollisionInfo;
import net.swordie.ms.client.character.skills.debuff.DebuffInfo;
import net.swordie.ms.client.character.skills.debuff.DebuffUtil;
import net.swordie.ms.client.character.skills.info.*;
import net.swordie.ms.client.character.skills.temp.TemporaryStatManager;
import net.swordie.ms.connection.InPacket;
import net.swordie.ms.connection.packet.Effect;
import net.swordie.ms.connection.packet.ReactorPool;
import net.swordie.ms.connection.packet.UserPacket;
import net.swordie.ms.connection.packet.UserRemote;
import net.swordie.ms.constants.JobConstants;
import net.swordie.ms.constants.QuestConstants;
import net.swordie.ms.enums.ForceAtomEnum;
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

import java.util.Arrays;
import java.util.List;
import java.util.Map;
import java.util.Random;
import java.util.concurrent.ScheduledFuture;
import java.util.concurrent.TimeUnit;

import static net.swordie.ms.client.character.skills.SkillStat.*;
import static net.swordie.ms.client.character.skills.temp.CharacterTemporaryStat.*;

public class DemonSlayer extends Demon {
    public static final int DF_HEALED_PER_ORB = 2;

    public static final int CURSE_OF_FURY = 30010111;
    public static final int DARK_WINDS = 30010110;


    public static final int GRIM_SCYTHE = 31001000; //Special Attack
    public static final int BATTLE_PACT_DS = 31001001; //Buff
    public static final int DEMON_LASH = 31000004;
    public static final int DEMON_LASH_2 = 31001006;
    public static final int DEMON_LASH_3 = 31001007;
    public static final int DEMON_LASH_4 = 31001008;


    public static final int SOUL_EATER = 31101000; //Special Attack
    public static final int DARK_THRUST = 31101001; //Special Attack
    public static final int CHAOS_LOCK = 31101002; //Special Attack  -Stun-


    public static final int JUDGEMENT = 31111000; //Special Attack
    public static final int VORTEX_OF_DOOM = 31111001; //Special Attack  -Stun-
    public static final int RAVEN_STORM = 31111003; //Special Attack -GainHP-
    public static final int CARRION_BREATH = 31111005; //Special Attack  -DoT-
    public static final int POSSESSED_AEGIS = 31110008;
    public static final int MAX_FURY = 31110009;
    public static final int VENGEANCE = 31101003; //Buff (Stun Debuff)


    public static final int BLUE_BLOOD = 31121054;
    public static final int LEECH_AURA = 31121002; //Buff
    public static final int BOUNDLESS_RAGE = 31121007; //Buff
    public static final int DARK_METAMORPHOSIS = 31121005; //Buff
    public static final int DARK_METAMORPHOSIS_ENHANCE = 31120046;
    public static final int DARK_METAMORPHOSIS_REDUCED_FURY = 31120048;
    public static final int INFERNAL_CONCUSSION = 31121000; //Special Attack
    public static final int DEMON_IMPACT = 31121001; //Special Attack  -Slow-
    public static final int DEMON_IMPACT_REDUCED_FURY = 31120051; //Special Attack  -Slow-
    public static final int DEMON_CRY = 31121003; //Special Attack -DemonCry-
    public static final int BINDING_DARKNESS = 31121006; //Special Attack -Bind-
    public static final int MAPLE_WARRIOR_DS = 31121004; //Buff
    public static final int DEMON_LASH_FURY = 31120043;
    public static final int DEMON_LASH_REINFORCE_DURATION = 31120045;
    public static final int DEMONIC_FORTITUDE_DS = 31121053;
    public static final int CERBERUS_CHOMP = 31121052;


    // V skills
    public static final int ORTHRUS_2 = 400011078;
    public static final int ORTHRUS = 400011077;
    public static final int SPIRIT_OF_RAGE = 400011057;
    public static final int DEMON_AWAKENING = 400011006;
    public static final int DEMON_AWAKENING_1 = 400011007;
    public static final int DEMON_AWAKENING_2 = 400011008;
    public static final int DEMON_AWAKENING_3 = 400011009;
    public static final int DEMON_AWAKENING_4 = 400011018;
    public static final int DEMON_BANE = 400011110;
    public static final int DEMON_BANE_2 = 400011111;


    private static final int[] addedSkills = new int[]{
            CURSE_OF_FURY,
    };

    private long leechAuraCD = Long.MIN_VALUE;
    private int blueBloodDFAbsorbed;
    private ScheduledFuture maxFuryTimer;
    private ScheduledFuture boundlessRageTimer;
    private long demonBaneStart = 0L;
    private long demonBaneDuration = 0L;

    public DemonSlayer(Char chr) {
        super(chr);
        if (isHandlerOfJob(chr.getJob())) {
            for (int id : addedSkills) {
                if (!chr.hasSkill(id)) {
                    Skill skill = SkillData.getSkillDeepCopyById(id);
                    skill.setCurrentLevel(skill.getMasterLevel());
                    chr.addSkill(skill);
                }
            }
            startMaxFuryRecovery();
        }
    }


    @Override
    public boolean isHandlerOfJob(short id) {
        return JobConstants.isDemonSlayer(id);
    }

    public void leechAuraHealing(AttackInfo attackInfo) {
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        if (chr.hasSkill(LEECH_AURA)) {
            if (tsm.getOptByCTSAndSkill(Regen, LEECH_AURA) != null) {
                Skill skill = chr.getSkill(LEECH_AURA);
                int slv = skill.getCurrentLevel();
                SkillInfo si = SkillData.getSkillInfoById(skill.getSkillId());
                int cd = si.getValue(y, slv) * 1000;
                if (cd + leechAuraCD < System.currentTimeMillis()) {
                    var totaldmg = attackInfo.totalDamageDealt;
                    int hpheal = (int) (totaldmg * ((double) 100 / si.getValue(x, slv)));
                    if (hpheal >= (chr.getMaxHP() / 4)) {
                        hpheal = (chr.getMaxHP() / 4);
                    }
                    leechAuraCD = System.currentTimeMillis();
                    chr.heal(hpheal);
                }
            }
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
            slv = skill.getCurrentLevel();
            skillID = skill.getSkillId();
        }

        if (hasHitMobs) {
            //Demon Slayer Fury Atoms
            createDemonFuryForceAtom(attackInfo);

            //Max Fury
            if (chr.hasSkill(MAX_FURY)) {
                if (attackInfo.skillId == DEMON_LASH || attackInfo.skillId == DEMON_LASH_2 || attackInfo.skillId == DEMON_LASH_3 || attackInfo.skillId == DEMON_LASH_4 ||
                        attackInfo.skillId == DEMON_AWAKENING_1 || attackInfo.skillId == DEMON_AWAKENING_2 || attackInfo.skillId == DEMON_AWAKENING_3 || attackInfo.skillId == DEMON_AWAKENING_4
                ) {
                    Skill maxfuryskill = chr.getSkill(MAX_FURY);
                    SkillInfo mfsi = SkillData.getSkillInfoById(MAX_FURY);
                    byte skillLevel = (byte) maxfuryskill.getCurrentLevel();
                    int propz = mfsi.getValue(prop, skillLevel);
                    if (Util.succeedProp(propz)) {
                        createDemonFuryForceAtom(attackInfo);
                    }
                }
            }

            //Leech Aura
            leechAuraHealing(attackInfo);
        }

        Option o1 = new Option();
        Option o2 = new Option();
        Option o3 = new Option();
        Option o4 = new Option();
        switch (attackInfo.skillId) {
            case DEMON_LASH:
            case DEMON_LASH_2:
            case DEMON_LASH_3:
            case DEMON_LASH_4:
            case DEMON_AWAKENING_1:
            case DEMON_AWAKENING_2:
            case DEMON_AWAKENING_3:
            case DEMON_AWAKENING_4:
                if (chr.hasSkill(DEMON_LASH_REINFORCE_DURATION)) {
                    o1.nOption = chr.getSkillStatValue(x, DEMON_LASH_REINFORCE_DURATION);
                    o1.rOption = DEMON_LASH_REINFORCE_DURATION;
                    o1.tOption = chr.getSkillStatValue(time, DEMON_LASH_REINFORCE_DURATION);
                    tsm.putCharacterStatValue(IndiePMdR, o1);
                    tsm.sendSetStatPacket();
                }
                break;
            case VORTEX_OF_DOOM: //prop
                o1.nOption = 1;
                o1.rOption = skill.getSkillId();
                o1.tOption = si.getValue(time, slv);

                DebuffUtil.applyDebuffOnMobs(chr, MobStat.Stun, o1, attackInfo.getMobIds(), new DebuffInfo(true, si.getValue(prop, slv)));
                break;
            case CHAOS_LOCK:
                o1.nOption = 1;
                o1.rOption = skill.getSkillId();
                o1.tOption = si.getValue(time, slv);
                var hitBoss = false;
                for (MobAttackInfo mai : attackInfo.mobAttackInfo) {
                    if (Util.succeedProp(si.getValue(prop, slv))) {
                        Mob mob = (Mob) chr.getField().getLifeByObjectID(mai.mobId);
                        if (mob == null) {
                            continue;
                        }
                        if (mob.isBoss()) {
                            hitBoss = true;
                            continue;
                        }
                        MobTemporaryStat mts = mob.getTemporaryStat();
                        mts.addStatOptionsAndBroadcast(chr, MobStat.Stun, o1);
                    }
                }
                if (!hitBoss || attackInfo.mobAttackInfo.size() == 0) {
                    chr.healMP(-chr.getMaxMP());
                }
                break;
            case CARRION_BREATH: //DoT
                for (MobAttackInfo mai : attackInfo.mobAttackInfo) {
                    Mob mob = (Mob) chr.getField().getLifeByObjectID(mai.mobId);
                    if (mob == null) {
                        continue;
                    }
                    MobTemporaryStat mts = mob.getTemporaryStat();
                    mts.createAndAddBurnedInfo(chr, skill);
                }
                break;
            case BINDING_DARKNESS: //stun + DoT
                o1.nOption = 1;
                o1.rOption = skillID;
                o1.tOption = si.getValue(time, slv);

                DebuffUtil.applyDebuffOnMobs(chr, MobStat.Freeze, o1, attackInfo.getMobIds(), new DebuffInfo(si.getValue(prop, slv)));
                break;
            case DEMON_CRY:
                o1.nOption = -si.getValue(y, slv);
                o1.rOption = skill.getSkillId();
                o1.tOption = si.getValue(time, slv);
                o2.nOption = -si.getValue(z, slv);
                o2.rOption = skill.getSkillId();
                o2.tOption = si.getValue(time, slv);
                o3.nOption = 1;
                o3.rOption = skillID;
                o3.tOption = si.getValue(time, slv);
                o3.xOption = si.getValue(w, slv); // exp
                o3.yOption = si.getValue(w, slv); // dropRate

                var msMap = Map.of(
                        MobStat.PAD, o1,
                        MobStat.PDR, o1,
                        MobStat.MAD, o1,
                        MobStat.MDR, o1,

                        MobStat.ACC, o2,
                        MobStat.Treasure, o3
                );
                DebuffUtil.applyDebuffOnMobs(chr, msMap, attackInfo.getMobIds());
                break;
            case DEMON_IMPACT:
                o1.nOption = si.getValue(x, slv);
                o1.rOption = skill.getSkillId();
                o1.tOption = si.getValue(time, slv);

                DebuffUtil.applyDebuffOnMobs(chr, MobStat.Speed, o1, attackInfo.getMobIds());
                break;
            case CERBERUS_CHOMP:
            case DEMON_AWAKENING:
                si = SkillData.getSkillInfoById(CERBERUS_CHOMP);
                slv = chr.getSkillLevel(CERBERUS_CHOMP);
                var recoveredDF = si.getValue(x, slv);
                blueBloodDFAbsorbed += recoveredDF;
                if (chr.hasSkill(BLUE_BLOOD)) {
                    if (blueBloodDFAbsorbed >= 50) {
                        chr.reduceSkillCoolTime(BLUE_BLOOD, chr.getSkillStatValue(w, BLUE_BLOOD) * 1000);
                        blueBloodDFAbsorbed = Math.max(0, blueBloodDFAbsorbed - 50);
                    }
                }
                chr.healMP(recoveredDF);
                break;
            case RAVEN_STORM:
                int hpheal = (int) (chr.getMaxHP() / ((double) 100 / si.getValue(x, slv)));
                Effect effect = Effect.skillAffected(skillID, slv, hpheal);
                chr.write(UserPacket.effect(effect));
                chr.getField().broadcastPacket(UserRemote.effect(chr.getId(), effect), chr);
                chr.heal(hpheal);

                o1.nOption = 1;
                o1.rOption = skillID;
                o1.tOption = 1500;
                o1.setInMillis(true);
                tsm.putCharacterStatValue(IndieNotDamaged, o1, true);
                tsm.sendSetStatPacket();
                break;
            case SPIRIT_OF_RAGE:
                if (attackInfo.attackActionType == 25 && attackInfo.summon != null) {
                    chr.getField().removeSummon(attackInfo.summon);
                }
                break;
        }
        if (!JobConstants.isPhantom(chr.getJob())) {
            super.handleAttack(c, attackInfo);
        }
    }

    @Override
    public void handleKeyDownSkill(Char chr, int skillID, InPacket inPacket) {
        super.handleKeyDownSkill(chr, skillID, inPacket);

        switch (skillID) {
            case DEMON_BANE:
                demonBaneStart = Util.getCurrentTimeLong();
                break;
            case DEMON_BANE_2: // Gives Invincibility
                TemporaryStatManager tsm = chr.getTemporaryStatManager();
                Option o = new Option();
                o.nOption = 1;
                o.rOption = skillID;
                o.tOption = 1500;
                o.setInMillis(true);
                tsm.putCharacterStatValue(IndieNotDamaged, o, true);
                tsm.sendSetStatPacket();
                break;
        }
    }

    @Override
    public void handleCancelKeyDownSkill(Char chr, int skillID) {
        super.handleCancelKeyDownSkill(chr, skillID);

        switch (skillID) {
            case DEMON_BANE:
                var now = Util.getCurrentTimeLong();
                demonBaneDuration = now - demonBaneStart;
                break;
            case DEMON_BANE_2:
                TemporaryStatManager tsm = chr.getTemporaryStatManager();
                tsm.removeStatsBySkill(DEMON_BANE_2);
                demonBaneStart = 0L;
                demonBaneDuration = 0L;
                break;
        }
    }

    private int getDFAngleByAttack(int skillId) {
        switch (skillId) {
            case DEMON_LASH:
            case DEMON_AWAKENING_1:
                return Util.getRandom(113, 128);
            case DEMON_LASH_2:
            case DEMON_AWAKENING_2:
                return Util.getRandom(85, 96);
            case DEMON_LASH_3:
            case DEMON_AWAKENING_3:
                return Util.getRandom(40, 51);
            case DEMON_LASH_4:
            case DEMON_AWAKENING_4:
                return Util.getRandom(85, 96);
        }

        return 90;
    }

    private void createDemonFuryForceAtom(AttackInfo attackInfo) {
        var q = chr.getQuestManager().getQuestById(QuestConstants.SW_DEMON_SLAYER_DF_ORBS);
        var noDFOrbs = q != null && q.getIntProperty("NoEffect") == 1;

        for (MobAttackInfo mai : attackInfo.mobAttackInfo) {
            Mob mob = (Mob) chr.getField().getLifeByObjectID(mai.mobId);
            if (mob == null) {
                continue;
            }
            boolean isBoss = mob.isBoss();
            int mobID = mai.mobId;
            int angle = Util.getRandom(40) + 30;
            int speed = Util.getRandom(50) + 35;

            // [Demon Slayer] No Demon Fury Orbs  toggle
            if (noDFOrbs) {
                healByDemonFury(isBoss);
                continue;
            }

            //Attacking with Demon Lash
            if (attackInfo.skillId == DEMON_LASH || attackInfo.skillId == DEMON_LASH_2 || attackInfo.skillId == DEMON_LASH_3 || attackInfo.skillId == DEMON_LASH_4 ||
                attackInfo.skillId == DEMON_AWAKENING_1 || attackInfo.skillId == DEMON_AWAKENING_2 || attackInfo.skillId == DEMON_AWAKENING_3 || attackInfo.skillId == DEMON_AWAKENING_4
            ) {
                ForceAtomEnum fae = ForceAtomEnum.DEMON_SLAYER_FURY_1;
                if (isBoss) {
                    fae = ForceAtomEnum.DEMON_SLAYER_FURY_1_BOSS;
                }
                if (chr.getJob() == JobConstants.JobEnum.DEMON_SLAYER_4.getJobId()) {
                    fae = ForceAtomEnum.DEMON_SLAYER_FURY_2;
                    if (isBoss) {
                        fae = ForceAtomEnum.DEMON_SLAYER_FURY_2_BOSS;
                    }
                }
                ForceAtomInfo forceAtomInfo = new ForceAtomInfo(chr.getNewForceAtomKey(), fae.getInc(), speed, 5,
                        getDFAngleByAttack(attackInfo.skillId), 0, Util.getCurrentTime(), 1, 0,
                        new Position(0, 0));
                forceAtomInfo.setBossMob(isBoss);
                chr.createForceAtom(new ForceAtom(true, chr.getId(), mobID, fae,
                        false, mobID, chr.getJob(), forceAtomInfo, new Rect(), 0, 300,
                        mob.getPosition(), 0, mob.getPosition(), 0), false);
            } else {

                // Attacking with another skill
                if (mai.mobDies) {
                    ForceAtomEnum fae = ForceAtomEnum.DEMON_SLAYER_FURY_1;
                    if (isBoss) {
                        fae = ForceAtomEnum.DEMON_SLAYER_FURY_1_BOSS;
                    }
                    if (chr.getJob() == JobConstants.JobEnum.DEMON_SLAYER_4.getJobId()) {
                        fae = ForceAtomEnum.DEMON_SLAYER_FURY_2;
                        if (isBoss) {
                            fae = ForceAtomEnum.DEMON_SLAYER_FURY_2_BOSS;
                        }
                    }
                    ForceAtomInfo forceAtomInfo = new ForceAtomInfo(chr.getNewForceAtomKey(), fae.getInc(), speed, 5,
                            angle, 50, Util.getCurrentTime(), 1, 0,
                            new Position(0, 0));
                    forceAtomInfo.setBossMob(isBoss);
                    chr.createForceAtom(new ForceAtom(true, chr.getId(), mobID, fae,
                            true, mobID, chr.getJob(), forceAtomInfo, new Rect(), 0, 300,
                            mob.getPosition(), 0, mob.getPosition(), 0), false);
                }
            }
        }
    }

    private void createPossessedAegisFuryForceAtom(int mobID) {
        Field field = chr.getField();
        Life life = field.getLifeByObjectID(mobID);
        if (life instanceof Mob) {
            int angle = new Random().nextInt(40) + 30;
            int speed = new Random().nextInt(31) + 29;
            ForceAtomEnum fae = ForceAtomEnum.DEMON_SLAYER_FURY_1;
            if (chr.getJob() == JobConstants.JobEnum.DEMON_SLAYER_4.getJobId()) {
                fae = ForceAtomEnum.DEMON_SLAYER_FURY_2;
            }
            ForceAtomInfo forceAtomInfo = new ForceAtomInfo(chr.getNewForceAtomKey(), fae.getInc(), speed, 4,
                    angle, 50, Util.getCurrentTime(), 1, 0,
                    new Position(0, 0));
            chr.createForceAtom(new ForceAtom(true, chr.getId(), mobID, fae,
                    false, mobID, POSSESSED_AEGIS, forceAtomInfo, new Rect(), 0, 300,
                    life.getPosition(), 0, life.getPosition(), 0), false);
        }
    }

    @Override
    public BypassCooldownCheckType canBypassCooldownCheck(int skillId, AttackInfo attackInfo, SkillUseInfo sui, SkillUseSource source) {
        if (skillId == CHAOS_LOCK) {
            return BypassCooldownCheckType.BypassCheck;
        }

        return super.canBypassCooldownCheck(skillId, attackInfo, sui, source);
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
        Field field;
        Option o1 = new Option();
        Option o2 = new Option();
        Option o3 = new Option();
        Option o4 = new Option();
        Option o5 = new Option();
        Option o6 = new Option();
        Option o7 = new Option();
        switch (skillId) {
            case VENGEANCE: //stun chance = prop | stun dur. = subTime
                o1.nOption = si.getValue(y, slv);
                o1.rOption = skillId;
                o1.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(PowerGuard, o1);

                // Oz F23
                for (var r : chr.getField().getReactors()) { // 9260016
                    r.setState((byte) 1);
                    chr.write(ReactorPool.reactorChangeState(r, (short) 0, (byte) 0));
                }

                break;
            case DARK_METAMORPHOSIS:
                var tTime = si.getValue(time, slv);

                o1.rOption = skillId;
                o1.nOption = si.getValue(indieDamR, slv);
                o1.tOption = tTime;
                tsm.putCharacterStatValue(IndieDamR, o1);

                o2.rOption = skillId;
                o2.nOption = si.getValue(indieMhpR, slv);
                o2.tOption = tTime;
                tsm.putCharacterStatValue(IndieMHPR, o2);

                o4.nOption = slv;
                o4.rOption = skillId;
                o4.tOption = tTime;
                tsm.putCharacterStatValue(DevilishPower, o4);

                if (chr.hasSkill(DARK_METAMORPHOSIS_ENHANCE)) {
                    o3.rOption = skillId;
                    o3.nOption = 1;
                    o3.tOption = tTime / 5;
                    tsm.putCharacterStatValue(IndieInfiniteMDF, o3);

                    o6.nOption = 100;
                    o6.rOption = skillId;
                    o6.tOption = tTime / 5;
                    tsm.putCharacterStatValue(IgnoreAllCounter, o6);
                }

                o7.nOption = 1;
                o7.rOption = skillId;
                o7.tOption = 2;
                tsm.putCharacterStatValue(IndieNotDamaged, o7, true);
                break;
            case BOUNDLESS_RAGE:
                var duration = si.getValue(time, slv);
                o1.nOption = 1;
                o1.rOption = skillId;
                o1.tOption = duration;
                tsm.putCharacterStatValue(InfinityForce, o1);
                chr.healMP(chr.getMP());
                var executes = duration / 3;
                EventManager.stopTimer(boundlessRageTimer);
                boundlessRageTimer = EventManager.addFixedRateEvent(this::reduceBlueBloodByBoundlessRage, 3000, 3000, executes);
                break;
            case LEECH_AURA:
                o1.nOption = si.getValue(x, slv);
                o1.rOption = skillId;
                o1.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(VampiricTouch, o1);
                break;
            case BLUE_BLOOD:
                o1.nOption = si.getValue(x, slv);
                o1.rOption = skillId;
                o1.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(ShadowPartner, o1);
                break;
            case SPIRIT_OF_RAGE:
                summon = Summon.getSummonBy(chr, skillId, slv);
                field = chr.getField();
                summon.setFlyMob(false);
                summon.setMoveAction((byte) 0);
                summon.setMoveAbility(MoveAbility.Stop);
                summon.setPosition(inPacket.decodePosition());
                summon.setFlip(inPacket.decodeByte() == 0);
                field.spawnSummonAndRemoveOld(summon);
                break;
            case DEMON_AWAKENING:
                o1.nOption = si.getValue(indieCr, slv);
                o1.rOption = skillId;
                o1.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(IndieCr, o1);
                o2.nOption = si.getValue(indiePMdR, slv);
                o2.rOption = skillId;
                o2.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(IndiePMdR, o2);
                o3.nOption = slv;
                o3.rOption = skillId;
                o3.tOption = si.getValue(time, slv);
                o3.xOption = 1;
                tsm.putCharacterStatValue(ExtraSkillCTS, o3);
                // Fallthrough intended
            case DEFENDER_OF_THE_DEMON:
                summon = Summon.getSummonBy(chr, skillId, slv);
                field = chr.getField();
                summon.setFlyMob(false);
                summon.setMoveAction((byte) 4);
                summon.setMoveAbility(MoveAbility.Walk);
                summon.setPosition(chr.getPosition());
                field.spawnSummonAndRemoveOld(summon);
                break;
            case ORTHRUS:
                List<Integer> list = Arrays.asList(ORTHRUS, ORTHRUS_2);

                var tOpt = 0;
                for (int summonDS : list) {
                    summon = Summon.getSummonByNoCTS(chr, summonDS, slv);
                    tOpt = summon.getSummonTerm() / 1000;
                    field = chr.getField();
                    summon.setFlyMob(false);
                    summon.setMoveAction((byte) 0);
                    summon.setMoveAbility(MoveAbility.Walk);
                    summon.setPosition(chr.getPosition());
                    field.spawnSummonAndRemoveOld(summon);

                    o1.summons.add(summon);
                }
                o1.nOption = 1;
                o1.rOption = skillId;
                o1.tOption = tOpt;
                tsm.putCharacterStatValue(IndieSummon, o1);
                break;
        }
        tsm.sendSetStatPacket();
    }

    public void reduceBlueBloodByBoundlessRage() {
        if (chr.hasSkillOnCooldown(BLUE_BLOOD)) {
            chr.reduceSkillCoolTime(BLUE_BLOOD, chr.getSkillStatValue(q, BLUE_BLOOD) * 1000);
        }
    }

    public int alterCooldownSkill(int skillId, int slv, AttackInfo attackInfo, SkillUseInfo sui, SkillUseSource source) {
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        if (tsm.hasStat(InfinityForce) && skillId == DEMON_CRY) {
            return chr.getSkillStatValue(s, DEMON_CRY) * 1000;
        }
        return super.alterCooldownSkill(skillId, slv, attackInfo, sui, source);
    }

    @Override
    public int alterMpCon(int mpCon, int skillId, int slv, AttackInfo attackInfo, SkillUseInfo sui, SkillUseSource source) {
        // Purposely does not call super.
        // As Common MP Reduction Skills/Buffs should not apply on Demon Fury.
        if (chr.getTemporaryStatManager().hasStat(InfinityForce)
            || (source == SkillUseSource.AttackUseRequest && skillId == DARK_METAMORPHOSIS)) {
            return 0;
        }

        if (skillId == DemonSlayer.DARK_METAMORPHOSIS && chr.hasSkill(DemonSlayer.DARK_METAMORPHOSIS_REDUCED_FURY)) {
            return mpCon / 2;
        } else if (skillId == DemonSlayer.DEMON_IMPACT && chr.hasSkill(DemonSlayer.DEMON_IMPACT_REDUCED_FURY)) {
            return mpCon / 2;
        }

        return super.alterMpCon(mpCon, skillId,slv, attackInfo,sui, source);
    }

    @Override
    public void handleForceAtomCollision(ForceAtom fa, ForceAtomCollisionInfo faci) {
        var faKey = faci.forceAtomKey;
        var skillId = faci.skillId;

        if (skillId == 0) { // Demon Fury Atom
            ForceAtom forceAtom = chr.getForceAtomByKey(faKey);
            boolean isBoss = false;
            if (forceAtom != null && forceAtom.getFaiByKey(faKey).isBossMob()) {
                isBoss = true;
            }
            healByDemonFury(isBoss);
        }

        super.handleForceAtomCollision(fa, faci);
    }

    private void healByDemonFury(boolean isBoss) {
        var healed = DF_HEALED_PER_ORB;
        if (chr.hasSkill(DEMON_LASH_FURY)) {
            healed = healed + (healed / 2);
        }
        if (isBoss) {
            healed = healed * 2;
        }
        chr.healMP(healed);
        if (chr.hasSkill(BLUE_BLOOD)) {
            blueBloodDFAbsorbed += healed;

            if (blueBloodDFAbsorbed >= 50) {
                chr.reduceSkillCoolTime(BLUE_BLOOD, chr.getSkillStatValue(w, BLUE_BLOOD) * 1000);
                blueBloodDFAbsorbed = Math.max(0, blueBloodDFAbsorbed - 50);
            }
        }
    }

    // Hit related methods ---------------------------------------------------------------------------------------------

    @Override
    public void handleHit(Client c, InPacket inPacket, HitInfo hitInfo) {
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        super.handleHit(c, inPacket, hitInfo);
        Option o1 = new Option();

        // Vengeance
        if (tsm.getOptByCTSAndSkill(PowerGuard, VENGEANCE) != null) {
            if (hitInfo.hpDamage != 0) {
                Skill skill = chr.getSkill(VENGEANCE);
                int slv = skill.getCurrentLevel();
                SkillInfo si = SkillData.getSkillInfoById(skill.getSkillId());
                int mobID = hitInfo.mobID;
                Mob mob = (Mob) chr.getField().getLifeByObjectID(mobID);
                if (mob == null) {
                    return;
                }
                MobTemporaryStat mts = mob.getTemporaryStat();
                if (!mob.isBoss() && Util.succeedProp(si.getValue(prop, slv))) {
                    o1.nOption = 1;
                    o1.rOption = skill.getSkillId();
                    o1.tOption = si.getValue(subTime, slv);
                    o1.bOption = 1;
                    mts.addStatOptionsAndBroadcast(chr, MobStat.Freeze, o1);
                }
            }
        }


        // Possessed Aegis
        if (hitInfo.hpDamage == 0 && hitInfo.mpDamage == 0) {
            // Guarded
            if (chr.hasSkill(POSSESSED_AEGIS)) {
                Skill skill = chr.getSkill(POSSESSED_AEGIS);
                int slv = skill.getCurrentLevel();
                SkillInfo si = SkillData.getSkillInfoById(skill.getSkillId());
                int propz = si.getValue(x, slv);
                if (Util.succeedProp(propz)) {
                    int mobID = hitInfo.mobID;
                    createPossessedAegisFuryForceAtom(mobID);
                    chr.heal((int) (chr.getMaxHP() / ((double) 100 / si.getValue(y, slv))));
                }
            }
        }
    }

    private void startMaxFuryRecovery() {
        if (!chr.hasSkill(MAX_FURY)) {
            return;
        }
        Skill skill = chr.getSkill(MAX_FURY);
        SkillInfo si = SkillData.getSkillInfoById(skill.getSkillId());
        int slv = chr.getSkillLevel(skill.getSkillId());
        int interval = 4;
        EventManager.stopTimer(maxFuryTimer);
        if (interval > 0) {
            maxFuryTimer = EventManager.addFixedRateEvent(this::regenDFInterval, interval, interval, TimeUnit.SECONDS);
        }
    }


    public void regenDFInterval() {
        if (chr != null && chr.getField() != null && chr.hasSkill(MAX_FURY)) {
            chr.healMP(10);
        } else if (maxFuryTimer != null) {
            maxFuryTimer.cancel(true);
        }
    }


    @Override
    public void stopTimers() {
        if (maxFuryTimer != null) {
            maxFuryTimer.cancel(true);
        }
        if (boundlessRageTimer != null) {
            boundlessRageTimer.cancel(true);
        }
        super.stopTimers();
    }

    @Override
    public void updateTimerSkill() {
        EventManager.stopTimer(maxFuryTimer);
        startMaxFuryRecovery();
        super.updateTimerSkill();
    }

    @Override
    public void setCharCreationStats(Char chr) {
        super.setCharCreationStats(chr);
        chr.getAvatarData().getCharacterStat().setMp(10);
        chr.getAvatarData().getCharacterStat().setMaxMp(10);
    }
}
