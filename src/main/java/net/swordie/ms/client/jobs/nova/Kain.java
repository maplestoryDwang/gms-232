package net.swordie.ms.client.jobs.nova;

import net.swordie.ms.client.Client;
import net.swordie.ms.client.character.Char;
import net.swordie.ms.client.character.CharacterStat;
import net.swordie.ms.client.character.items.Item;
import net.swordie.ms.client.character.skills.Option;
import net.swordie.ms.client.character.skills.Skill;
import net.swordie.ms.client.character.skills.SkillStat;
import net.swordie.ms.client.character.skills.atom.secondatom.SecondAtom;
import net.swordie.ms.client.character.skills.info.AttackInfo;
import net.swordie.ms.client.character.skills.info.SkillInfo;
import net.swordie.ms.client.character.skills.info.SkillUseInfo;
import net.swordie.ms.client.character.skills.shootobject.ShootObjectSkillInfo;
import net.swordie.ms.client.character.skills.temp.CharacterTemporaryStat;
import net.swordie.ms.client.character.skills.temp.TemporaryStatManager;
import net.swordie.ms.client.jobs.Job;
import net.swordie.ms.connection.InPacket;
import net.swordie.ms.connection.packet.SecondAtomPool;
import net.swordie.ms.connection.packet.UserLocal;
import net.swordie.ms.constants.JobConstants;
import net.swordie.ms.enums.Stat;
import net.swordie.ms.life.Wreckage;
import net.swordie.ms.life.mob.Mob;
import net.swordie.ms.life.mob.MobStat;
import net.swordie.ms.life.mob.MobTemporaryStat;
import net.swordie.ms.loaders.ItemData;
import net.swordie.ms.loaders.SkillData;
import net.swordie.ms.util.Position;
import net.swordie.ms.util.Rect;
import net.swordie.ms.util.Util;
import net.swordie.ms.world.field.Field;

import java.util.*;
import java.util.stream.Collectors;

import static net.swordie.ms.client.character.skills.SkillStat.*;
import static net.swordie.ms.client.character.skills.temp.CharacterTemporaryStat.*;

/**
 * Created on 07/04/2021.
 *
 * @author Asura
 */
public class Kain extends Job {


    // TODO [4] Handle Grappling Wire local&remote effect

    // TODO [5] Handle Link Skill & Union (If needs handling)


    // Thanatos Descent Rect
    public static final Rect thanatosRect = new Rect(-200, -250, 200, -30);
    public static final Rect remainIncenseRect = new Rect(-700, -400, 700, 450);

    // Beginner Job
    public static final int PRIOR_PREPARATION = 60030241;


    // 1st Job
    public static final int HITMAN = 63000007; // Passive
    public static final int COVERT = 63000008; // Passive
    public static final int STRIKE_ARROW = 63001000;
    public static final int STRIKE_ARROW_EXTRA_HIT = 63001001;
    public static final int SHADOW_STEP_HORIZONTAL = 63001002;
    public static final int SHADOW_STEP_VERTICAL_UP = 63001003; // Up
    public static final int GRAPPLING_WIRE = 63001004;
    public static final int SHADOW_STEP_VERTICAL_DOWN = 63001005; // Down
    public static final int SHADOW_SWIFT = 63001006; // Flash Jump
    public static final int STRIKE_ARROW_POSSESS = 63001100; // Possess Skill


    // 2nd Job
    public static final int STRIKE_ARROW_2_PASSIVE = 63100002; // Upgrade on StrikeArrow
    public static final int BREATH_SHOOTER_MASTERY = 63100011; // Passive Mastery
    public static final int PHYSICAL_TRAINING = 63100012; // Passive
    public static final int STRIKE_ARROW_POSSESS_PASSIVE = 63100100; // Upgrade on StrikeArrowPossess? (disable=1)
    public static final int SCATTERING_SHOT_POSSESS_PASSIVE = 63101001; // Upgrade on ScatteringShotPossess? (disable=1)
    public static final int POSSESSION = 63101001; // Kain Energy/Gauge Skill
    public static final int STRIKE_ARROW_2 = 63101003; // Upgrade on StrikeArrow. Added Sequential Attack after StrikeArrow
    public static final int SCATTERING_SHOT = 63101004; // TODO [2] Handle Stack Inc Request
    public static final int DRAGON_FANG = 63101005; // Buff that shows 3 Orbs around character (So new CTS, most likely)
    public static final int DRAGON_FANG_SA = 63101006; // Second Atom!
    public static final int BREATH_SHOOTER_BOOSTER = 63101010; // Booster Buff
    public static final int STRIKE_ARROW_2_POSSESS = 63101100; // Possess Skill
    public static final int SCATTERING_SHOT_POSSESS = 63101104; // Possess Skill & Second Atom


    // 3rd Job
    public static final int STRIKE_ARROW_3_PASSIVE = 63110001; // Upgrade on StrikeArrow2
    public static final int DEATH_BLESSING = 63110011; // Passive Skill that places MobStat on Mobs when attacking with Possessed Skills
    public static final int NATURAL_BORN_INSTINCT = 63110014; // Passive
    public static final int GRINDING = 63110015;
    public static final int SHAFT_BREAK_PASSIVE = 63110103; // Upgrade? (disable=1)
    public static final int STRIKE_ARROW_3 = 63111002; // Upgrade on StrikeArrow2. Added Sequential Attack after StrikeArrow2
    public static final int SHAFT_BREAK = 63111003; // Shoot Obj
    public static final int SHAFT_BREAK_VACUUM = 63111004; // Shoot Obj
    public static final int SHAFT_BREAK_EXPLOSION = 63111005; // Shoot Obj
    public static final int TEARING_KNIFE = 63111007; // Execution Skill
    public static final int PHANTOM_BLADE = 63111008; // Execution Skill
    public static final int REMAIN_INCENSE = 63111009; // ON/OFF buff
    public static final int REMAIN_INCENSE_WRECKAGE = 63111010; // Wreckage
    public static final int DEATH_BLESSING_ATTACK = 63111012;
    public static final int DEATH_BLESSING_BUFF = 63111013; // skillList = placeMobDebuff | skillList2 = explodeMobDebuff
    public static final int SHAFT_BREAK_POSSESS = 63111103;
    public static final int SHAFT_BREAK_VACUUM_POSSESS = 63111104;
    public static final int SHAFT_BREAK_EXPLOSION_POSSESS = 63111105;
    public static final int SHAFT_BREAK_AFTER_EFFECT_POSSESS = 63111106;


    // 4th Job
    public static final int POSSESSION_2 = 63120000; // Upgrade on Possession
    public static final int ADVANCED_DEATH_BLESSING = 63120001; // Upgrade on Death Blessing
    public static final int GRINDING_2 = 63120011; // Upgrade on Grinding
    public static final int DOGMA = 63120012; // Passive
    public static final int BREATH_SHOOTER_EXPERT = 63120013; // Passive
    public static final int ADAPT_TO_DEATH = 63120014; // Passive
    public static final int FALLING_DUST_PASSIVE = 63120102; // Upgrade? (disable=1)
    public static final int FALLING_DUST = 63121002; // Attack
    public static final int CHAIN_SICKLE = 63121004; // Execution
    public static final int CHAIN_SICKLE_2 = 63121005; // Execution | Additional Attack after ChainSickle
    public static final int POISON_NEEDLE = 63121006; // Execution | Inflicts BurnedInfo | KeyDown
    public static final int POISON_NEEDLE_2 = 63121007; // Execution | Inflicts BurnedInfo
    public static final int DRAGON_SCALE = 63121008; // iFrames | KeyDown
    public static final int NOVA_WARRIOR = 63121009;
    public static final int NOVA_HERO_WILL = 63121010;
    public static final int FALLING_DUST_POSSESS = 63121102; // Possess
    public static final int FALLING_DUST_2_POSSESS = 63121103;


    // Hyper Skills
    public static final int DRAGON_SCALE_EXTRA_HEALING = 63120039;

    public static final int SNEAKY_SNIPING_POSSES_PASSIVE = 63120140; // Upgrade? (disable=1)

    public static final int SNEAKY_SNIPING = 63121040; // Keydown!
    public static final int SNEAKY_SNIPING_2 = 63121041; // Keydown!
    public static final int CHASING_SHOT = 63121042;
    public static final int INCARNATION = 63121044; // Buff
    public static final int SNEAKY_SNIPING_POSSESS = 63121140;
    public static final int SNEAKY_SNIPING_2_POSSESS = 63121141;

    // V skills
    public static final int DRAGON_BURST = 400031061; // Possess | Keydown!
    public static final int THANATOS_DESCENT = 400031062; // Buff
    public static final int THANATOS_DESCENT_2 = 400031063; // Second Atom
    public static final int THANATOS_DESCENT_3 = 400031064; // Screen Attack
    public static final int FATAL_BLITZ = 400031065; // Execution
    public static final int GRIP_OF_AGONY = 400031066; // Second Atom


    public static final int[] possessionSkills = new int[] {
            STRIKE_ARROW_POSSESS,
            STRIKE_ARROW_2_POSSESS,
            SCATTERING_SHOT_POSSESS,
            SHAFT_BREAK_POSSESS,
            FALLING_DUST_POSSESS,

            DRAGON_BURST,
    };

    public static final int[] executionSkills = new int[] {
            TEARING_KNIFE,
            PHANTOM_BLADE,
            CHAIN_SICKLE,
            POISON_NEEDLE_2,

            SNEAKY_SNIPING_POSSESS,
            SNEAKY_SNIPING_2_POSSESS,
            FATAL_BLITZ,
    };

    public static final int[] whisperShotSkills = new int[]{
            STRIKE_ARROW,
            STRIKE_ARROW_2,
            SCATTERING_SHOT,
            STRIKE_ARROW_3,
            SHAFT_BREAK,
            FALLING_DUST,
    };

    public static final int[] addedSkills = new int[] {
            PRIOR_PREPARATION
    };

    private Map<Integer, Integer> kainStackSkills = new HashMap<>(); // <SkillId, CurStack>
    private int advDeathBlessingKillCount = 0;

    public Kain(Char chr) {
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
        return JobConstants.isKain(id);
    }



    // region Attack Handling

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

        var isPossessSkill = isPossessSkill(attackInfo.skillId);
        var isExecutionSkill = isExecutionSkill(attackInfo.skillId);
        var isWhisperShotSkill = isWhisperShotSkill(attackInfo.skillId);

        if (hasHitMobs) {


            // TODO [5] -> Handle Link Skill (Prior Preparation)
            /*
            [Prior Preparation]
            When you kill 8 enemies or hit a boss monster 9 times, complete 1 preparation.
            When you have 5 preparations, your damage is increased by 9% for 20 seconds. Cooldown: 40 seconds.
             */
            incPriorPreparation(attackInfo);


            /*
            [Possession]
            When skills that use the Breath Shooter hit an enemy create Malice.
             */
            if (isWhisperShotSkill) {
                activeMaliceGain();
            }


            /*
            [Possession]
            Every few seconds on your own, create Malice. (This is only triggered through attacking in Swordie).
             */
            if (isWhisperShotSkill) {
                passiveMaliceGain();
            }


            /*
            [Dragon Fang]
            Dragon Fang is summoned when Kain’s own attacking skills hit enemies a certain number of times.
             */
            if (attackInfo.skillId != DRAGON_FANG_SA) {
                var curOrbs = getDragonFangOrbs().size();
                if (curOrbs > 0 && !chr.hasSkillOnCooldown(-DRAGON_FANG_SA)) {
                    /*
                    When Kain’s own attacking skills hit an enemy, enter Attack Mode and activate Dragon Bite.
                     */
                    activateDragonFangAttackMode();
                }
                incDragonFangAttackCount(curOrbs, attackInfo.mobCount);
            }


            /*
            [Death Blessing]
            When specific Possess skills hit an enemy, they receive the blessing.
            When they are hit by an Execute skill, the blessing is materialized.
             */
            if (isExecutionSkill) {
                materialiseDeathBlessing(attackInfo);
            } else if (isPossessSkill) {
                applyDeathBlessing(attackInfo.mobAttackInfo.stream().map(mai -> mai.mobId).collect(Collectors.toList()));
            }

            if (chr.hasSkill(ADVANCED_DEATH_BLESSING)) {
                advancedDeathBlessingKillCount(attackInfo);
            }


            /*
            [Remain Incense]
            When a Possess skill, Thanatos Descent, or Grip of Agony hit an enemy, create 5 crystals for 10 seconds.
             */
            if (attackInfo.skillId != REMAIN_INCENSE && attackInfo.skillId != REMAIN_INCENSE_WRECKAGE) {
                activateRemainIncense(attackInfo.chrPos);
            }
            if (attackInfo.skillId == THANATOS_DESCENT_2 || attackInfo.skillId == THANATOS_DESCENT_3
                || attackInfo.skillId == GRIP_OF_AGONY || isPossessSkill) {
                if (!chr.hasSkillOnCooldown(-REMAIN_INCENSE_WRECKAGE)) {
                    createRemainIncense();
                }
            }


            /*
            [Thanatos Descent]
            When your own attacking skills hit an enemy 6 times, activate the Touch of Death, dealing 1000% damage 12 times on up to 8 enemies.
            Reactivation cooldown: 3 seconds.
             */
            if (tsm.hasStat(ThanatosDescent) && attackInfo.skillId != THANATOS_DESCENT_2 && attackInfo.skillId != THANATOS_DESCENT_3
                && !chr.hasSkillOnCooldown(THANATOS_DESCENT_2)) {
                createThanatosDescentSecondAtoms(attackInfo.left);
            }



            /*
            [Grip of Agony]
            When you kill 25 enemies or hit a boss monster 12 times, harvest 1 Agony.
            You can harvest up to 25 Agonies.
             */
            if (chr.hasSkill(GRIP_OF_AGONY)) {
                increaseGripOfAgonyByBossHit(attackInfo);
            }
        }

        /*
        [Possession]
        After a Possess skill is used 1 time, Possession Mode will be cancelled.
         */
        if (tsm.hasStat(Possession) && isPossessSkill && attackInfo.skillId != DRAGON_BURST) {
            tsm.removeStat(Possession);
        }

        Option o1 = new Option();
        Option o2 = new Option();
        Option o3 = new Option();
        Field field = chr.getField();
        switch (attackInfo.skillId) {
            case POISON_NEEDLE:
            case POISON_NEEDLE_2:
                if (attackInfo.skillId != POISON_NEEDLE) {
                    skill = chr.getSkill(POISON_NEEDLE);
                }

                for (var mai : attackInfo.mobAttackInfo) {
                    Mob mob = mai.mob;
                    if (mob == null) {
                        continue;
                    }

                    var mts = mob.getTemporaryStat();
                    mts.createAndAddBurnedInfo(chr, skill);
                }
        }
        super.handleAttack(c, attackInfo);
    }

    @Override
    public void handleMobDeath(AttackInfo attackInfo, Mob mob) {

        if (chr.hasSkill(GRIP_OF_AGONY)) {
            increaseGripOfAgonyByMobKill();
        }

        switch (attackInfo.skillId) {
            case TEARING_KNIFE:
            case CHAIN_SICKLE:
            case POISON_NEEDLE_2:
            case SNEAKY_SNIPING_POSSESS:
            case SNEAKY_SNIPING_2_POSSESS:
            case FATAL_BLITZ:
                /*
                [Execution Skills]
                If Execution Skill kills an enemy, Shadow Step’s cooldown is reset.
                 */
                chr.resetSkillCoolTime(SHADOW_STEP_HORIZONTAL);
                break;
        }

        super.handleMobDeath(attackInfo, mob);
    }


    // region Prior Preparation
    // TODO [5] -> Handle Link Skill (Prior Preparation)
    private void incPriorPreparation(AttackInfo attackInfo) {
        Skill skill = chr.getSkill(PRIOR_PREPARATION);
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        if (skill == null) {
            return;
        }
        var si = SkillData.getSkillInfoById(skill.getSkillId());
        var slv = skill.getCurrentLevel();
        var curPreparations = 0;
        var curMobKills = 0;
        var curBossHits = 0;
        if (tsm.hasStat(PriorPreparation)) {
            curPreparations = tsm.getOption(PriorPreparation).nOption; // TODO [1] -> Assuming it's nOption. might be xOption and nOption is Damage%
            curMobKills = tsm.getOption(PriorPreparation).xOption;
            curBossHits = tsm.getOption(PriorPreparation).yOption;
        }
        var maxMobKills = si.getValue(x, slv);
        var maxBossHits = si.getValue(y, slv);

        for (var mai : attackInfo.mobAttackInfo) {
            Mob mob = (Mob) chr.getField().getLifeByObjectID(mai.mobId);
            if (mob == null) {
                continue;
            }

            if (mob.isBoss()) {
                // Increase boss Hit
                curBossHits++;
                if (curBossHits >= maxBossHits) {
                    curPreparations++;
                    curBossHits = 0;
                    curMobKills = 0;
                    break;
                }

            } else {
                if (mai.mobDies) {
                    // Increase Mob Kill
                    curMobKills++;
                    if (curMobKills >= maxMobKills) {
                        curPreparations++;
                        curBossHits = 0;
                        curMobKills = 0;
                        break;
                    }
                }
            }
        }

        updatePriorPreparation(si, slv, tsm, curPreparations, curMobKills, curBossHits);
    }

    // TODO [5] -> Handle Link Skill (Prior Preparation)
    private void resetPriorPreparation(TemporaryStatManager tsm) {
        tsm.removeStat(PriorPreparation);
    }

    // TODO [5] -> Handle Link Skill (Prior Preparation)
    private void updatePriorPreparation(SkillInfo si, int slv, TemporaryStatManager tsm, int preparation, int mobKill, int bossHit) {
        var maxPreparationCount = si.getValue(u, slv);
        if (preparation >= maxPreparationCount) {
            resetPriorPreparation(tsm);
            givePriorPreparationBuff(si, slv, tsm);
        } else {
            Option o = new Option(Math.max(0, Math.min(preparation, maxPreparationCount)), PRIOR_PREPARATION, 0);
            o.xOption = mobKill;
            o.yOption = bossHit;
            tsm.putCharacterStatValue(PriorPreparation, o);
            tsm.sendSetStatPacket();
        }
    }

    // TODO [5] -> Handle Link Skill (Prior Preparation)
    private void givePriorPreparationBuff(SkillInfo si, int slv, TemporaryStatManager tsm) {
        var dmgInc = si.getValue(y, slv);
        var tOpt = si.getValue(time, slv);
        Option o = new Option(dmgInc, PRIOR_PREPARATION, tOpt);
        tsm.putCharacterStatValue(IndieDamR, o);
        tsm.sendSetStatPacket();

        chr.addSkillCoolTime(PRIOR_PREPARATION, si.getValue(cooltime, slv));
    }
    // endregion

    // region Possession / Malice

    /*

    Assuming the CTS Structure will be:
    1 CTS  xOption -> Malice | yOption -> MaliceStone

     */
    private void incMalice(int amount) {
        if (getMalice() >= getMaxMalice() && amount > 0) {
            return;
        }
        updateMalice(getMalice() + amount);
    }

    private void decMalice(int amount) {
        incMalice(-amount);
    }

    private void updateMalice(int malice) {
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        Option o = new Option(Math.max(0, Math.min(malice, getMaxMalice())), JobConstants.JobEnum.KAIN_4.getJobId(), 0);
        tsm.putCharacterStatValue(Malice, o);
        tsm.sendSetStatPacket();
    }

    private int getMaliceStone() {
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        if (!tsm.hasStat(Malice)) {
            return 0;
        }
        return tsm.getOption(Malice).nOption / 100;
    }

    private int getMalice() {
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        if (!tsm.hasStat(Malice)) {
            return 0;
        }
        return tsm.getOption(Malice).nOption;
    }

    /**
     * 100 Malice is required to acquire a Malice Stone. You can hold up to 2 Malice Stones at a time.
     * @return Max MaliceStones
     */
    private int getMaxMalice() {
        var maxMaliceStone = 0;
        if (chr.hasSkill(POSSESSION_2)) {
            maxMaliceStone = (chr.getSkillStatValue(v, POSSESSION_2) * 100) + 100;
        } else if (chr.hasSkill(POSSESSION)) {
            maxMaliceStone = (chr.getSkillStatValue(v, POSSESSION) * 100) + 100;
        }

        return maxMaliceStone;
    }


    /**
     * Create 8 Malice every few seconds.
     * @return Malice
     */
    private int getPassiveMaliceRegeneration() {
        return getMaliceRegeneration(y);
    }

    /**
     * Create 12 Malice when a Breath Shooter skill hits an enemy.
     * @return Malice
     */
    private int getActiveMaliceRegeneration() {
        return getMaliceRegeneration(x);
    }

    private int getMaliceRegeneration(SkillStat skillStat) {
        var malice = 0;
        if (chr.hasSkill(POSSESSION_2)) {
            malice += chr.getSkillStatValue(skillStat, POSSESSION_2);
        } else if (chr.hasSkill(POSSESSION)) {
            malice += chr.getSkillStatValue(skillStat, POSSESSION);
        }

        if (chr.getTemporaryStatManager().hasStat(ThanatosDescent)) {
            malice += chr.getSkillStatValue(skillStat, THANATOS_DESCENT);
        }

        return malice;
    }

    /**
     * You can consume the Malice Stone to Manifest Satiras’ malice and enter Possession mode.
     */
    private void consumeMaliceStone() {
        decMalice(100); // 1 MaliceStone = 100 Malice
    }

    /**
     * every few seconds on your own, create Malice.
     */
    private void passiveMaliceGain() {
        if (chr.hasSkillOnCooldown(POSSESSION_2)) {
            return;
        }
        incMalice(getPassiveMaliceRegeneration());
        chr.addSkillCoolTime(POSSESSION_2, 5000); // No Interval number is given. other than 'every few seconds'. So I decided on 5 sec.
    }

    /**
     * When skills that use the Breath Shooter hit an enemy create Malice
     */
    private void activeMaliceGain() {
        incMalice(getActiveMaliceRegeneration());
    }
    // endregion

    // region Dragon Fang
    private void incDragonFangAttackCount(int curOrbs, int attackCount) {
        Skill skill = chr.getSkill(DRAGON_FANG);
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        if (skill == null || !tsm.hasStat(DragonFang)) {
            return;
        }
        var si = SkillData.getSkillInfoById(skill.getSkillId());
        var slv = skill.getCurrentLevel();

        var maxOrbs = si.getValue(q, slv);
        var curCount = getCurrentDragonFangAttackCount(tsm);
        var maxCount = 30; // si.getValue(z, slv);

        curCount += attackCount;

        if (curCount >= maxCount && curOrbs < maxOrbs) {
            curOrbs = createDragonFangOrb(curOrbs, si, slv);
            updateDragonFangBuff(tsm, curOrbs, 0);
            return;
        }
        tsm.getOption(DragonFang).yOption = curCount;
    }

    private void updateDragonFangBuff(TemporaryStatManager tsm, int dragonFangOrbCount, int attackCount) {
        var o = tsm.getOption(DragonFang);
        o.xOption = dragonFangOrbCount;
        o.yOption = attackCount;
        tsm.updateBuffExtendTime(DragonFang, o);
    }

    private int getCurrentDragonFangAttackCount(TemporaryStatManager tsm) {
        return tsm.hasStat(DragonFang) ? tsm.getOption(DragonFang).yOption : 0;
    }

    private List<SecondAtom> getDragonFangOrbs() {
        return chr.getSecondAtoms().values().stream().filter(sa -> sa.getSource() == DRAGON_FANG_SA).collect(Collectors.toList());
    }

    private int createDragonFangOrb(int curOrbs, SkillInfo si, int slv) {
        var saSI = SkillData.getSkillInfoById(DRAGON_FANG_SA);
        var maxOrbs = si.getValue(u, slv);

        if (getDragonFangOrbs().size() >= maxOrbs) {
            return maxOrbs;
        }

        if (saSI == null || saSI.getSecondAtomInfos().size() <= 0) {
            return 0;
        }

        var sai = saSI.getSecondAtomInfos().get(0);
        var sa = SecondAtom.createFromInfo(chr, DRAGON_FANG_SA, sai);
        sa.setAttackableCount(7);
        chr.spawnSecondAtoms(Collections.singletonList(sa));

        return curOrbs + 1;
    }

    private void activateDragonFangAttackMode() {
        var saList = getDragonFangOrbs().stream().filter(sa -> !sa.isInAttackMode()).collect(Collectors.toList()); // Only look for non-active DragonFangs

        if (saList.size() > 0) {
            var sa = Util.getRandomFromCollection(saList);
            chr.write(SecondAtomPool.secondAtomAttack(chr, sa.getObjectId(), 1));
            chr.addSkillCoolTime(-DRAGON_FANG_SA, 1000);
        }
    }

    @Override
    public boolean handleSecondAtomRemoveRequest(int objectId) {
        var sa = chr.getSecondAtomById(objectId);
        if (sa != null) {
            if (sa.getSource() == DRAGON_FANG_SA) {
                var remainingTime = sa.getRemainingTime();
                if (remainingTime > 0) {
                    var opt = chr.getTemporaryStatManager().getOption(DragonFang);
                    if (opt != null) {
                        opt.yOption = opt.yOption + (remainingTime / 1000);
                    }
                }
            }
        }

        return super.handleSecondAtomRemoveRequest(objectId);
    }

    @Override
    public void handleSecondAtomCollisionRequest(Map<Integer, Integer> attackMap) {
        for (var entry : attackMap.entrySet()) {
            var saObjId = entry.getKey();
            var targetId = entry.getValue();

            var sa = chr.getSecondAtomById(saObjId);
            if (sa != null) {
                var collidedWithMob = !(targetId == chr.getId() || targetId == 0);

                if (collidedWithMob) {
                    sa.setCurAttackCount(sa.getCurAttackCount() + 1);
                }

                var hasAttacksLeft = sa.hasAttacksLeft();

                if (!collidedWithMob) {
                    sa.setInAttackMode(false);
                } else if (hasAttacksLeft) {
                    sa.setInAttackMode(true);
                    chr.write(SecondAtomPool.secondAtomAttack(chr, saObjId, 1));
                }
            }
        }
        super.handleSecondAtomCollisionRequest(attackMap);
    }

    // endregion

    // region Death Blessing
    public void applyDeathBlessing(List<Integer> mobList) {
        Skill skill = chr.getSkill(DEATH_BLESSING);
        if (skill == null) {
            return;
        }

        Field field = chr.getField();
        Map<Integer, Integer> deathBlessingMap = new HashMap<>(); // <MobObjId , DeathBlessingStack>
        var duration = chr.getSkillStatValue(time, skill.getSkillId());
        for (var mobId : mobList) {
            Mob mob = field.getLifeByObjectID(Mob.class, mobId);
            if (mob == null) {
                continue;
            }

            var mts = mob.getTemporaryStat();
            var stack = applyDeathBlessingOnMob(mts, duration);
            deathBlessingMap.put(mobId, stack);
        }

        chr.write(UserLocal.deathBlessing(deathBlessingMap, 15, duration * 1000));
    }

    private int applyDeathBlessingOnMob(MobTemporaryStat mts, int duration) {
        var rOpt = DEATH_BLESSING;
        var stack = 1;

        if (mts.hasCurrentMobStatBySkillId(rOpt)) {
            stack = mts.getOptByMobStatAndSkill(MobStat.ACC, rOpt).xOption;

            if (stack < 15) {
                stack++;
            }
        }

        Option o = new Option(0, rOpt, duration);
        o.xOption = stack;
        mts.addStatOptionsAndBroadcast(chr, MobStat.ACC, o);
        return stack;
    }

    private int decreaseDeathBlessingOnMob(MobTemporaryStat mts) {
        var amountConsumed = 1;
        var rOpt = DEATH_BLESSING;
        var stack = 0;

        if (!mts.hasCurrentMobStatBySkillId(rOpt)) {
            return -1337;
        }
        stack = mts.getOptByMobStatAndSkill(MobStat.ACC, rOpt).xOption;

        if (stack > 0) {
            stack = stack - amountConsumed;
        } else {
            mts.removeMobStat(MobStat.ACC);
            return 0;
        }

        Option o = new Option(0, rOpt, 0);
        o.xOption = stack;
        mts.addStatOptionsAndBroadcast(chr, MobStat.ACC, o);
        return amountConsumed;
    }

    private void materialiseDeathBlessing(AttackInfo attackInfo) {
        var skill = chr.getSkill(DEATH_BLESSING);
        if (skill == null) {
            return;
        }

        Field field = chr.getField();
        Map<Integer, Integer> deathBlessingMap = new HashMap<>(); // <MobObjId , StacksConsumed>
        var duration = chr.getSkillStatValue(time, skill.getSkillId());
        var onBoss = false;
        for (var mai : attackInfo.mobAttackInfo) {
            Mob mob = mai.mob;
            if (mob == null) {
                continue;
            }

            if (!onBoss) {
                onBoss = mob.isBoss();
            }

            materialiseDeathBlessingOnMob(deathBlessingMap, mob);
        }

        if (deathBlessingMap.size() > 0) {
            chr.write(UserLocal.deathBlessingMaterialisation(deathBlessingMap, DEATH_BLESSING_ATTACK, Util.getRandom(200, 600)));

            /*
            [Death Blessing]
            When the blessing is materialized, Death Blessing’s final damage is increased for a certain period of time and Shadow Step’s cooldown is reset.
             */
            giveDeathBlessingBuff(onBoss);
        }
    }

    public void materialiseDeathBlessingViaIncarnation(AttackInfo attackInfo) {
        var skillId = INCARNATION;
        if (attackInfo.mobCount <= 0 || chr.hasSkillOnCooldown(-skillId)) {
            return;
        }

        var si = SkillData.getSkillInfoById(skillId);
        var slv = chr.getSkillLevel(skillId);
        var attacks = si.getValue(attackCount, slv);

        var mob = chr.getField().getLifeByObjectID(Mob.class, attackInfo.mobAttackInfo.get(0).mobId);

        chr.write(UserLocal.deathBlessingMaterialisation(new HashMap<>(){{put(mob.getObjectId(), attacks);}}, DEATH_BLESSING_ATTACK, Util.getRandom(150, 400)));
        chr.addSkillCoolTime(-skillId, si.getValue(y, slv) * 1000);
    }

    private void advancedDeathBlessingKillCount(AttackInfo attackInfo) {
        for (var mai : attackInfo.mobAttackInfo) {
            if (mai.mobDies) {
                advDeathBlessingKillCount++;
            }
        }

        if (advDeathBlessingKillCount >= chr.getSkillStatValue(y, ADVANCED_DEATH_BLESSING)) {
            advDeathBlessingKillCount = 0; // reset advDeathBlessingKillCount

            chr.heal(chr.getHPPerc(chr.getSkillStatValue(v, ADVANCED_DEATH_BLESSING)));
        }
    }

    private void materialiseDeathBlessingOnMob(Map<Integer, Integer> deathBlessingMap, Mob mob) {
        var mts = mob.getTemporaryStat();

        // Consume 1 Stack
        var stacksConsumed = decreaseDeathBlessingOnMob(mts);

        // Add to DeathBlessingMap which will be sent after each mob in the attack has been added.
        if (stacksConsumed > 0) {
            deathBlessingMap.put(mob.getObjectId(), stacksConsumed);
        }
    }

    private void giveDeathBlessingBuff(boolean onBoss) {
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        var si = SkillData.getSkillInfoById(DEATH_BLESSING_BUFF);
        var slv = chr.getSkillLevel(DEATH_BLESSING);

        var dmgInc = si.getValue(x, slv) + chr.getSkillStatValue(u, ADVANCED_DEATH_BLESSING);
        var tOpt = si.getValue(time, slv);

        Option o = new Option(dmgInc, DEATH_BLESSING_BUFF, tOpt);
        tsm.putCharacterStatValue(DeathBlessing, o);
        tsm.sendSetStatPacket();

        chr.resetSkillCoolTime(SHADOW_STEP_HORIZONTAL);
        incMalice(chr.getSkillStatValue(s, DEATH_BLESSING) + chr.getSkillStatValue(s, ADVANCED_DEATH_BLESSING));
        if (onBoss && chr.hasSkill(ADVANCED_DEATH_BLESSING)) {
            chr.heal(chr.getHPPerc(3));
        }
    }
    // endregion

    // region Remain Incense
    private void createRemainIncense() {
        Skill skill = chr.getSkill(REMAIN_INCENSE);
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        if (skill == null || !tsm.hasStat(RemainIncense)) {
            return;
        }

        var si = SkillData.getSkillInfoById(skill.getSkillId());
        var slv = skill.getCurrentLevel();

        var bulletCount = 5; // Not included in the Skill.wz ? TODO
        var curWreckageCount = getRemainIncenseSizeOnField();
        var maxWreckage = 10;
        var duration = si.getValue(w, slv);

        Field field = chr.getField();
        var loopsize = Math.min(bulletCount, maxWreckage - curWreckageCount);
        Rect rect = chr.getRectAround(remainIncenseRect);
        for (int i = 0; i < loopsize; i++) {
            var fh = Util.getRandomFromCollection(field.getNonWallFootholdsWithinRect(rect));
            if (fh == null) {
                fh = field.getRandomWalkableFoothold();
            }
            var pos = fh.getRandomPosition();
            Wreckage wreckage = Wreckage.getWreckageBy(chr, REMAIN_INCENSE_WRECKAGE, pos, duration * 1000, 2);
            field.spawnWreckage(chr, wreckage);
        }
        chr.addSkillCoolTime(-REMAIN_INCENSE_WRECKAGE, 300);
    }

    private void activateRemainIncense(Position position) {
        if (getRemainIncenseSizeOnField() <= 0 && !chr.getTemporaryStatManager().hasStat(RemainIncense)) {
            return;
        }
        var rect = SkillData.getSkillInfoById(REMAIN_INCENSE_WRECKAGE).getFirstRect();
        if (rect == null) {
            return;
        }

        var repositionedRect = position.getRectAround(rect);
        List<Wreckage> remainIncenseList = getRemainIncenseInRect(repositionedRect);
        if (remainIncenseList.size() > 0) {
            chr.write(UserLocal.remainIncenseActivation(chr.getId(), remainIncenseList));
            chr.getField().removeWreckage(chr, remainIncenseList);
        }
    }

    private int getRemainIncenseSizeOnField() {
        return chr.getField().getWreckageByChrId(chr.getId()).size();
    }

    private List<Wreckage> getRemainIncenseInRect(Rect rect) {
        return chr.getField().getWreckageByChrIdInRect(chr.getId(), rect);
    }
    // endregion

    // region Thanatos Descent
    private void createThanatosDescentSecondAtoms(boolean isLeft) { // TODO -> Fix Thanatos Descent SA for Mob on Left of Character
        var si = SkillData.getSkillInfoById(THANATOS_DESCENT_2);
        var slv = chr.getSkillLevel(THANATOS_DESCENT);

        var bullets = si.getValue(bulletCount, slv);

        var saiList = si.getSecondAtomInfos();
        var sai = saiList.get(0);
        List<SecondAtom> saList = new ArrayList<>();
        for (int i = 0; i < bullets; i++) {
            var sa = SecondAtom.createFromInfo(chr, THANATOS_DESCENT_2, sai);
            sa.setPosition(sa.getPosition().add(thanatosRect.getRandomPositionInside()));
            sa.setCreateDelay(Util.getRandom(50, 600));
            sa.setEnableDelay(sa.getEnableDelay() + sa.getCreateDelay());
            sa.setCustomRotation(isLeft ? 270 : 90);
            sa.setRotate(isLeft ? 270 : 90);
            saList.add(sa);
        }

        chr.spawnSecondAtoms(saList);
        chr.addSkillCoolTime(THANATOS_DESCENT_2, chr.getSkillStatValue(subTime, THANATOS_DESCENT) * 1000);
    }
    // endregion

    // region Grip of Agony
    private void increaseGripOfAgonyByBossHit(AttackInfo attackInfo) {
        var tsm = chr.getTemporaryStatManager();
        var hasGripOfAgony = tsm.hasStat(GripOfAgony);
        var opt = tsm.getOption(GripOfAgony);

        var curBossHits = opt.xOption;
        var curDeathroes = opt.nOption;

        for (var mai : attackInfo.mobAttackInfo) {
            Mob mob = mai.mob;
            if (mob != null && mob.isBoss()) {
                curBossHits++;
            }
        }

        if (curBossHits >= getGripOfAgonyBossHitsReq()) {
             updateGripOfAgony(curDeathroes + 1, 0, opt.yOption);
        } else {
            if (hasGripOfAgony) {
                opt.xOption = curBossHits;
            } else {
                var o = new Option(0, GRIP_OF_AGONY, 0);
                o.xOption = curBossHits;
                tsm.putCharacterStatValue(GripOfAgony, o);
                tsm.sendSetStatPacket();
            }
        }
    }

    private void increaseGripOfAgonyByMobKill() {
        var tsm = chr.getTemporaryStatManager();
        var hasGripOfAgony = tsm.hasStat(GripOfAgony);
        var opt = tsm.getOption(GripOfAgony);

        var curMobKills = opt.yOption;
        var curDeathroes = opt.nOption;

        curMobKills++;

        if (curMobKills >= getGripOfAgonyMobKillsReq()) {
            updateGripOfAgony(curDeathroes + 1, opt.xOption, 0);
        } else {
            if (hasGripOfAgony) {
                opt.yOption = curMobKills;
            } else {
                var o = new Option(curDeathroes, GRIP_OF_AGONY, 0);
                o.yOption = curMobKills;
                tsm.putCharacterStatValue(GripOfAgony, o);
                tsm.sendSetStatPacket();
            }
        }
    }

    private void updateGripOfAgony(int deathroes, int bossHits, int mobKills) {
        var maxDeathroes = 15;
        if (deathroes > maxDeathroes) {
            return;
        }
        var tsm = chr.getTemporaryStatManager();
        var o = new Option(Math.max(0, Math.min(deathroes, maxDeathroes)), GRIP_OF_AGONY, 0);
        o.xOption = bossHits;
        o.yOption = mobKills;
        tsm.putCharacterStatValue(GripOfAgony, o);
        tsm.sendSetStatPacket();
    }

    private int getGripOfAgonyMobKillsReq() {
        return chr.getSkillStatValue(q, GRIP_OF_AGONY);
    }

    private int getGripOfAgonyBossHitsReq() {
        return chr.getSkillStatValue(q2, GRIP_OF_AGONY);
    }

    private void createGripOfAgonySecondAtom(SkillInfo si, int skillId, Position position, int extendedDuration) {
        if (si.getSecondAtomInfos().size() <= 0) {
            return;
        }

        var sai = si.getSecondAtomInfos().get(0);
        var sa = SecondAtom.createFromInfo(chr, skillId, sai);
        sa.setPosition(position);
        sa.setExpire(sa.getExpire() + extendedDuration);

        chr.spawnSecondAtoms(Collections.singletonList(sa));
    }
    // endregion

    // endregion



    // region Skill Handling

    @Override
    public void handleSkill(Char chr, TemporaryStatManager tsm, int skillID, int slv, InPacket inPacket, SkillUseInfo skillUseInfo) {
        super.handleSkill(chr, tsm, skillID, slv, inPacket, skillUseInfo);
        Skill skill = chr.getSkill(skillID);
        SkillInfo si = null;
        if (skill != null) {
            si = SkillData.getSkillInfoById(skillID);
        }

        var isPossessSkill = isPossessSkill(skillID);
        if (isPossessSkill) {
            if (tsm.hasStat(Possession)) {
                tsm.removeStat(Possession);
            } else {
                // Tried to do possess skill without being possessed
                return;
            }
        }

        Field field = chr.getField();
        Option o1 = new Option();
        Option o2 = new Option();
        Option o3 = new Option();
        Option o4 = new Option();
        switch (skillID) {
            case SHADOW_STEP_HORIZONTAL:
            case SHADOW_STEP_VERTICAL_UP:
            case SHADOW_STEP_VERTICAL_DOWN:
                si = SkillData.getSkillInfoById(SHADOW_STEP_HORIZONTAL);
                // Gives Dark Sight when using
                o1.nOption = 1;
                o1.rOption = skillID;
                o1.tOption = si.getValue(subTime, slv);
                o1.setInMillis(true);
                tsm.putCharacterStatValue(DarkSight, o1);
                break;

            case POSSESSION:
                /*
                [Possession]
                You cannot use Possession while in Possession mode
                consume 1 Malice Stone to enter Possession mode for 15 seconds.
                 */
                if (!tsm.hasStat(Possession) && getMaliceStone() > 0) {
                    o1.nOption = 1;
                    o1.rOption = skillID;
                    o1.tOption = si.getValue(time, slv);
                    tsm.putCharacterStatValue(Possession, o1);

                    consumeMaliceStone();
                }
                break;

            case DRAGON_FANG:
                if (tsm.hasStat(DragonFang)) {
                    tsm.removeStatsBySkill(skillID);
                } else {
                    o1.nOption = 1;
                    o1.rOption = skillID;
                    tsm.putCharacterStatValue(DragonFang, o1);
                }
                break;

            case BREATH_SHOOTER_BOOSTER:
                o1.nOption = si.getValue(x, slv);
                o1.rOption = skillID;
                o1.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(IndieBooster, o1);
                break;

            case FALLING_DUST:
                decreaseStackOverTimeSkill(skillID);
                break;

            case SCATTERING_SHOT_POSSESS:
                var size = inPacket.decodeByte();
                List<Integer> targetList = new ArrayList<>();
                for (int i = 0; i < size; i++) {
                    targetList.add(inPacket.decodeInt());
                }
                inPacket.decodeArr(3);
                var position = inPacket.decodePositionInt();
                createScatteringShotSecondAtom(targetList, position, skillUseInfo.isLeft);
                chr.setSkillCooldown(skillID, slv);
                break;

            case FALLING_DUST_POSSESS:
                chr.setSkillCooldown(skillID, slv);
                break;

            case REMAIN_INCENSE:
                if (tsm.hasStat(RemainIncense)) {
                    tsm.removeStatsBySkill(skillID);
                } else {
                    o1.nOption = 1; // ON/OFF skill
                    o1.rOption = skillID;
                    tsm.putCharacterStatValue(RemainIncense, o1);
                }
                break;

            case INCARNATION:
                if (tsm.hasStat(IncarnationAura) && tsm.getOption(IncarnationAura).xOption == tsm.getChr().getId()) {
                    tsm.removeStatsBySkill(skillID);
                } else {
                    var applyToOwner = tsm.getChr().getId() == chr.getId();
                    var tOpt = applyToOwner ? si.getValue(time, slv) : 0;
                    if (applyToOwner) {
                        o1.nOption = si.getValue(indieDamR, slv);
                        o1.rOption = skillID;
                        o1.tOption = tOpt;
                        tsm.putCharacterStatValue(IndieDamR, o1);
                        o2.nOption = si.getValue(indiePadR, slv);
                        o2.rOption = skillID;
                        o2.tOption = tOpt;
                        tsm.putCharacterStatValue(IndiePADR, o2);
                        o3.nOption = si.getValue(indieStance, slv);
                        o3.rOption = skillID;
                        o3.tOption = tOpt;
                        tsm.putCharacterStatValue(IndieStance, o3);
                    }
                    o4.nOption = slv;
                    o4.rOption = skillID;
                    o4.xOption = chr.getId();
                    o4.bOption = 0; // Owner
                    o4.tOption = tOpt;
                    tsm.putCharacterStatValue(IncarnationAura, o4);
                }
                break;

            case THANATOS_DESCENT:
                var tOpt = si.getValue(time, slv);
                o1.nOption = 1;
                o1.rOption = skillID;
                o1.tOption = tOpt;
                tsm.putCharacterStatValue(ThanatosDescent, o1);
                o2.nOption = si.getValue(indieDamR, slv);
                o2.rOption = skillID;
                o2.tOption = tOpt;
                tsm.putCharacterStatValue(IndieDamR, o2);
                o3.nOption = si.getValue(indieStance, slv);
                o3.rOption = skillID;
                o3.tOption = tOpt;
                tsm.putCharacterStatValue(IndieStance, o3);
                break;

            case GRIP_OF_AGONY:
                inPacket.decodeInt(); // unk
                var pos = inPacket.decodePositionInt();
                var isLeft = inPacket.decodeByte() != 0;
                createGripOfAgonySecondAtom(si, skillID, pos, tsm.getOption(GripOfAgony).nOption * 1000);
                tsm.removeStat(GripOfAgony);
                break;
        }
        tsm.sendSetStatPacket();
    }


    @Override
    public void handleShootObj(Char chr, ShootObjectSkillInfo sosi) {
        var skillID = sosi.getSkillId();
        switch (skillID) {
            case SCATTERING_SHOT:
            case SHAFT_BREAK:
                decreaseStackOverTimeSkill(skillID);
                break;
        }
        super.handleShootObj(chr, sosi);
    }


    @Override
    public void handleSkillPrepareStart(Char chr, int skillId, SkillUseInfo sui) {
        var tsm = chr.getTemporaryStatManager();
        switch (skillId) {
            case THANATOS_DESCENT_3:
                tsm.removeStat(ThanatosDescent);

                Option o = new Option(1, THANATOS_DESCENT_3, 6);
                tsm.putCharacterStatValue(IndieNotDamaged, o, true);
                tsm.sendSetStatPacket();
                break;
            case DRAGON_SCALE:
                o = new Option(1, skillId, 4);
                tsm.putCharacterStatValue(IndieNotDamaged, o, true);
                tsm.sendSetStatPacket();
                break;
        }
        super.handleSkillPrepareStart(chr, skillId, sui);
    }


    @Override
    public void handleKeyDownSkillCost(int skillId) {
        switch (skillId) {
            case DRAGON_SCALE:
                var si = SkillData.getSkillInfoById(skillId);
                var slv = chr.getSkillLevel(skillId);
                var mpCon = chr.getMPPerc(si.getValue(mpRCon, slv));

                if (chr.getMP() < mpCon) {
                    chr.write(UserLocal.stopKeyDownSkillRequest(skillId));
                } else {
                    var healR = chr.getSkillStatValue(x, DRAGON_SCALE_EXTRA_HEALING);
                    if (healR > 0) {
                        chr.heal(chr.getHPPerc(healR));
                    }

                    chr.healMP(-mpCon);
                }
                break;
        }

        super.handleKeyDownSkillCost(skillId);
    }

    @Override
    public void handleSkillPrepareStop(Char chr, int skillId, SkillUseInfo sui) {
        switch (skillId) {
            case DRAGON_SCALE:
                chr.setSkillCooldown(skillId, chr.getSkillLevel(skillId));
                break;

            case SNEAKY_SNIPING:
                decreaseStackOverTimeSkill(skillId);
                break;

            case SNEAKY_SNIPING_POSSESS:
                chr.getTemporaryStatManager().removeStat(Possession);
                chr.setSkillCooldown(skillId, chr.getSkillLevel(SNEAKY_SNIPING));
                break;
        }
        super.handleSkillPrepareStop(chr, skillId, sui);
    }

    @Override
    public void handleRemoveCTS(CharacterTemporaryStat cts, Option option) {
        if (cts == RemainIncense) {
            chr.getField().removeWreckage(chr, chr.getField().getWreckageByChrId(chr.getId()));
        }

        if (cts == DragonFang) {
            chr.removeSecondAtom(chr.getSecondAtoms().values().stream().filter(sa -> sa.getSource() == DRAGON_FANG).map(SecondAtom::getObjectId).collect(Collectors.toList()));
        }

        super.handleRemoveCTS(cts, option);
    }


    // region Increase Stacking Skills
    public void increaseStackOverTimeSkill(int skillId) {
        // May be packet edited. But atm is behaving weird. So it's commented out for now.
        // if (chr.hasSkillOnCooldown(-skillId)) {
        //     return;
        // }

        var maxStack = getMaxSkillStackBySkillId(skillId);
        var curStack = increaseSkillStack(skillId, maxStack);
        var cooltime = getCooltimeBySkillId(skillId) * 1000;
        chr.write(UserLocal.kainStackOverTimeSkillIncreaseResult(skillId, curStack, maxStack, cooltime));
        chr.addSkillCoolTime(-skillId, cooltime);
    }

    private void decreaseStackOverTimeSkill(int skillId) {
        var curStack = getCurKainSkillStack(skillId);
        var maxStack = getMaxSkillStackBySkillId(skillId);
        var hasMaxStack = maxStack == curStack;
        if (curStack > 0) {
            curStack--;
            kainStackSkills.put(skillId, curStack);
            var cooltime = hasMaxStack ? getCooltimeBySkillId(skillId) * 1000 : (int) chr.getRemainingCoolTime(-skillId);
            chr.write(UserLocal.kainStackOverTimeSkillIncreaseResult(skillId, curStack, maxStack, cooltime));
            if (hasMaxStack) {
                chr.addSkillCoolTime(-skillId, cooltime);
            }
        }
    }

    private int increaseSkillStack(int skillId, int maxStack) {
        var curStack = 0;
        if (kainStackSkills.containsKey(skillId)) {
            curStack = kainStackSkills.get(skillId);
        }

        var newStack = Math.max(0, Math.min(curStack + 1, maxStack));
        kainStackSkills.put(skillId, newStack);

        return newStack;
    }

    private int getCurKainSkillStack(int skillId) {
        return kainStackSkills.getOrDefault(skillId, 0);
    }

    private int getMaxSkillStackBySkillId(int skillId) {
        return chr.getSkillStatValue(w, skillId);
    }

    private int getCooltimeBySkillId(int skillId) {
        return chr.getSkillStatValue(u, skillId);
    }
    // endregion

    // region Scattering Shot Possess
    private void createScatteringShotSecondAtom(List<Integer> targetList, Position position, boolean isLeft) {
        /*
        [Scattering Shot]
        User must be in Possession mode
        User must have the ScatteringShot Skill
         */
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        Skill skill = chr.getSkill(SCATTERING_SHOT);
        if (skill == null) {
            return;
        }

        var si = SkillData.getSkillInfoById(SCATTERING_SHOT_POSSESS);
        List<SecondAtom> saList = new ArrayList<>();

        if (si == null || si.getSecondAtomInfos().size() <= 0) {
            return;
        }

        var saiList = si.getSecondAtomInfos();
        for (var sai : saiList) {
            var sa = SecondAtom.createFromInfo(chr, SCATTERING_SHOT_POSSESS, sai);
            sa.setTargetId(Util.getRandomFromCollection(targetList));
            var saiPos = sai.getPosition();
            var rotate = sa.getRotate();
            if (isLeft) {
                saiPos = Position.flipY(saiPos);
                rotate = (360 - rotate) % 360;
            }
            sa.setPosition(position.add(saiPos));
            sa.setCustomRotation(rotate);
            saList.add(sa);
        }

        chr.spawnSecondAtoms(saList);
    }
    // endregion

    // endregion


    private boolean isPossessSkill(int skillId) {
        return Arrays.stream(possessionSkills).anyMatch(s -> s == skillId);
    }

    private boolean isExecutionSkill(int skillId) {
        return Arrays.stream(executionSkills).anyMatch(s -> s == skillId);
    }

    private boolean isWhisperShotSkill(int skillId) {
        return Arrays.stream(whisperShotSkills).anyMatch(s -> s == skillId);
    }


    @Override
    public void onWarp(Field oldField, Field newField) {

        // Dragon Fang disappears on map change. However, the remaining time on an orb is used to add 'attackCount' to DragonFang
        var dragonFangs = getDragonFangOrbs();
        for (var dragonFang : dragonFangs) {
            handleSecondAtomRemoveRequest(dragonFang.getObjectId());
            chr.removeSecondAtomByKey(dragonFang.getObjectId());
        }
        super.onWarp(oldField, newField);
    }

    @Override
    public void stopTimers() {
        kainStackSkills.clear(); // clear Skill List map
        super.stopTimers();
    }

    @Override
    public void setCharCreationStats(Char chr) {
        super.setCharCreationStats(chr);

        CharacterStat cs = chr.getAvatarData().getCharacterStat();
        cs.setPosMap(410000401);
        cs.setLevel(10);
        chr.setJob(JobConstants.JobEnum.KAIN_1.getJobId());
        chr.addSpToJobByCurrentJob(5);
        cs.setStr(5);
        cs.setDex(5);
        cs.setInt(5);
        cs.setLuk(5);
        cs.setAp(4 + cs.getLevel() * 5);
        cs.setHp(450);
        cs.setMaxHp(450);
        cs.setMp(300);
        cs.setMaxMp(300);

        Item secondary = ItemData.getItemDeepCopy(1354010);
        chr.addItemToInventory(secondary);
    }

    @Override
    public void handleLevelUp() {
        super.handleLevelUp();
        var level = chr.getLevel();
        if (level == 10) {
            chr.setJob(JobConstants.JobEnum.KAIN_1.getJobId());
            chr.addSpToJobByCurrentJob(5);
            chr.addStatAndSendPacket(Stat.ap, 5);
        } else if (level == 30) {
            chr.setJob(JobConstants.JobEnum.KAIN_2.getJobId());
            chr.addSpToJobByCurrentJob(4);
            chr.addStatAndSendPacket(Stat.ap, 4);
        } else if (level == 60) {
            chr.setJob(JobConstants.JobEnum.KAIN_3.getJobId());
            chr.addSpToJobByCurrentJob(4);
            chr.addStatAndSendPacket(Stat.ap, 5);
        } else if (level == 100) {
            chr.setJob(JobConstants.JobEnum.KAIN_4.getJobId());
            chr.addSpToJobByCurrentJob(3);
            chr.addStatAndSendPacket(Stat.ap, 5);
        }
    }
}
