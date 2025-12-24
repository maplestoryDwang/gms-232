package net.swordie.ms.client.character.damage;

import net.swordie.ms.Server;
import net.swordie.ms.client.character.Char;
import net.swordie.ms.client.character.items.BodyPart;
import net.swordie.ms.client.character.skills.SkillStat;
import net.swordie.ms.client.character.skills.info.AttackInfo;
import net.swordie.ms.client.character.skills.info.MobAttackInfo;
import net.swordie.ms.client.character.skills.info.SkillInfo;
import net.swordie.ms.client.character.skills.temp.TemporaryStatManager;
import net.swordie.ms.constants.GameConstants;
import net.swordie.ms.constants.ItemConstants;
import net.swordie.ms.constants.JobConstants;
import net.swordie.ms.constants.SkillConstants;
import net.swordie.ms.enums.BaseStat;
import net.swordie.ms.enums.Stat;
import net.swordie.ms.enums.WeaponType;
import net.swordie.ms.life.mob.Mob;
import net.swordie.ms.loaders.EtcData;
import net.swordie.ms.loaders.SkillData;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import java.util.Arrays;
import java.util.Map;
import java.util.Set;

import static net.swordie.ms.client.character.skills.temp.CharacterTemporaryStat.SetBaseDamage;
import static net.swordie.ms.enums.BaseStat.*;


/**
 * Created on 5/4/2018.
 */
public class DamageCalc {

    private static final Logger log = LogManager.getLogger();

    private final static int RAND_NUM = 11;
    public final static int MAX_CRIT_DMG = 50;
    public final static int MIN_CRIT_DMG = 20;
    public final static int MAX_ATTACK_COUNT = 15;
    public final static int MAX_MOB_COUNT = 15;
    private final static double DAMAGE_EXTRA_ROOM = 2.5;
    private static final double SKILL_RECT_SCALAR = 1.5;

    private final Rand32 rand;
    private final Char chr;

    public Rand32 getRand() {
        return rand;
    }

    public DamageCalc(Char chr, int seed1, int seed2, int seed3) {
        rand = new Rand32();
        rand.seed(seed1, seed2, seed3);
        this.chr = chr;
    }

    public long calcPDamageForPvM(Mob mob, int skillID, int slv, int dotDmg) {
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        WeaponType weaponType = chr.getWeaponType();
        SkillInfo si = SkillData.getSkillInfoById(skillID);

        double mult = (si == null ? 100 : dotDmg) / 100D;
        mult = mult == 0 ? si.getValue(SkillStat.damage, slv) / 100D : mult;

        Map<BaseStat, Integer> basicStats = chr.getTotalBasicStats();
        int setBaseDamage = tsm.hasStat(SetBaseDamage) ? tsm.getOption(SetBaseDamage).nOption : 0;
        long damage = calcDamageByWT(weaponType, basicStats, setBaseDamage, skillID);

        var levelDiffMult = getLevelDiffMultiplier(chr.getLevel(), mob.getLevel());

        return (long) (damage * levelDiffMult * mult);
    }

    private double getLevelDiffMultiplier(int charLevel, int mobLevel) {
        int diff = charLevel - mobLevel;

        if (diff >= 5) {
            return 1.2;
        } else if (diff >= 0) {
            return 1.1 + diff * 0.02;
        } else if (diff >= -5) {
            return (1.1 - diff * 0.02) * (1 - diff * 0.02);
        } else {
            return Math.max(0, 1 - diff * 0.025);
        }
    }

    private double getMinBaseDamage() {
        return 0.5 + getMaxBaseDamage() * (getMastery() / 100D); // 0.5 for rounding to closest int
    }

    private double getMastery() {
        int mas = chr.getTotalStat(mastery);
        int base = 0;
        switch (chr.getWeaponType()) {
            case None:
                break;
            // physical melee
            case Desperado:
            case ChainSword:
            case Chain:
            case Gauntlet:
            case OneHandedSword:
            case OneHandedAxe:
            case OneHandedMace:
            case Dagger:
            case Katara:
            case Cane:
            case Barehand:
            case TwoHandedSword:
            case TwoHandedAxe:
            case TwoHandedMace:
            case Spear:
            case Polearm:
            case Knuckle:
            case Katana:
            case BigSword:
            case LongSword:
            case ArmCannon:
                base = 20;
                break;
            // physical ranged
            case SoulShooter:
            case Bow:
            case Crossbow:
            case Claw:
            case Gun:
            case DualBowgun:
            case HandCannon:
            case AncientBow:
            case Whispershot:
                base = 15;
                break;
            // magic
            case ShiningRod:
            case Scepter:
            case PsyLimiter:
            case Wand:
            case Staff:
            case Fan:
                base = 25;
                break;
        }
        return Math.min(99, base + mas); // 99% mastery is maximum
    }

    private double getMaxBaseDamage() {
        var weapon = chr.getEquippedItemByBodyPart(BodyPart.Weapon);
        if (weapon == null) {
            return 1;
        }

        WeaponType weaponType = ItemConstants.getWeaponType(weapon.getItemId());
        Map<BaseStat, Integer> basicStats = chr.getTotalBasicStats();
        return (calcDamageByWT(weaponType, basicStats, 0, 0));
    }

    private long calcDamageByWT(WeaponType wt, Map<BaseStat, Integer> stats, int setBaseDamage, int skillID) {
        if (setBaseDamage > 0) {
            return setBaseDamage;
        }
        long dmg = 0;
        double jobConst = JobConstants.getDamageConstant(chr.getJob());
        short job = chr.getJob();
        if (JobConstants.isBeginnerJob(job)) {
            dmg = calcBaseDamage(stats.get(str), stats.get(dex), 0, stats.get(pad), jobConst + 1.2);
        } else {
            if (JobConstants.getJobCategory(job) != 2 || JobConstants.isLuminous(job) || JobConstants.isKinesis(job) ||
                    JobConstants.isIllium(job) || JobConstants.isArk(job) || JobConstants.isBeastTamer(job)) {
                switch (wt) {
                    // 11 str, 14 dex, 17 inte, 20 luk
                    case None:
                        break;
                    case ShiningRod:
                        dmg = calcBaseDamage(stats.get(inte), stats.get(luk), 0, stats.get(mad), jobConst + 1.2);
                        break;
                    case SoulShooter:
                        dmg = calcBaseDamage(stats.get(dex), stats.get(str), 0, stats.get(pad), jobConst + 1.7);
                        break;
                    case ChainSword:
                        dmg = calcHybridBaseDamage(stats.get(str), stats.get(dex), stats.get(luk), 0, stats.get(pad), jobConst + 1.5);
                        break;
                    case Scepter:
                        dmg = calcBaseDamage(stats.get(inte), stats.get(luk), 0, stats.get(mad), jobConst + 1.34);
                        break;
                    case PsyLimiter:
                        dmg = calcBaseDamage(stats.get(inte), stats.get(luk), 0, stats.get(mad), jobConst + 1.2);
                        break;
                    case Chain:
                        dmg = calcBaseDamage(stats.get(luk), stats.get(dex), stats.get(str), stats.get(pad), jobConst + 1.3);
                        break;
                    case Gauntlet:
                        dmg = calcBaseDamage(stats.get(inte), stats.get(luk), 0, stats.get(mad), jobConst + 1.2);
                        break;
                    case OneHandedSword:
                        dmg = calcBaseDamage(stats.get(str), stats.get(dex), 0, stats.get(pad), jobConst + 1.2);
                        break;
                    case OneHandedAxe:
                    case OneHandedMace:
                        dmg = calcBaseDamage(stats.get(str), stats.get(dex), 0, stats.get(pad), jobConst + 1.2);
                        break;
                    case Dagger:
                        dmg = calcBaseDamage(stats.get(luk), stats.get(dex), stats.get(str), stats.get(pad), jobConst + 1.2);
                        break;
                    case Katara:
                        dmg = calcBaseDamage(stats.get(luk), stats.get(dex), stats.get(str), stats.get(pad), jobConst + 1.3);
                        break;
                    case Cane:
                        double k;
                        if (SkillConstants.isStealableSkill(skillID)) {
                            k = jobConst + 1.2;
                        } else {
                            k = jobConst + 1.3;
                        }
                        dmg = calcBaseDamage(stats.get(luk), stats.get(dex), 0, stats.get(pad), k);
                        break;
                    case Wand:
                    case Staff:
                        double mult;
                        if (JobConstants.isBlazeWizard(chr.getJob()) || JobConstants.isExplorer(chr.getJob())) {
                            mult = 1.2;
                        } else {
                            mult = 1;
                        }
                        dmg = calcBaseDamage(stats.get(inte), stats.get(luk), 0, stats.get(mad), jobConst + mult);
                        break;
                    case Barehand:
                        dmg = calcBaseDamage(stats.get(str), stats.get(dex), 0, 1, jobConst + 1.43);
                        break;
                    case TwoHandedSword:
                    case LongSword:
                        dmg = calcBaseDamage(stats.get(str), stats.get(dex), 0, stats.get(pad), jobConst + 1.34);
                        break;
                    case TwoHandedAxe:
                    case TwoHandedMace:
                        dmg = calcBaseDamage(stats.get(str), stats.get(dex), 0, stats.get(pad), jobConst + 1.34);
                        break;
                    case Katana:
                        dmg = calcBaseDamage(stats.get(str), stats.get(dex), 0, stats.get(pad), jobConst + 1.25);
                        break;
                    case Fan:
                        dmg = calcBaseDamage(stats.get(inte), stats.get(luk), 0, stats.get(mad), jobConst + 1.35);
                        break;
                    case Spear:
                    case Polearm:
                    case BigSword:
                        dmg = calcBaseDamage(stats.get(str), stats.get(dex), 0, stats.get(pad), jobConst + 1.49);
                        break;
                    case Bow:
                    case AncientBow: // ?
                    case Whispershot: // ?
                        dmg = calcBaseDamage(stats.get(dex), stats.get(str), 0, stats.get(pad), jobConst + 1.3);
                        break;
                    case Crossbow:
                        dmg = calcBaseDamage(stats.get(dex), stats.get(str), 0, stats.get(pad), jobConst + 1.35);
                        break;
                    case Claw:
                        dmg = calcBaseDamage(stats.get(luk), stats.get(dex), 0, stats.get(pad), jobConst + 1.75);
                        break;
                    case Knuckle:
                        dmg = calcBaseDamage(stats.get(str), stats.get(dex), 0, stats.get(pad), jobConst + 1.7);
                        break;
                    case Gun:
                        dmg = calcBaseDamage(stats.get(dex), stats.get(str), 0, stats.get(pad), jobConst + 1.5);
                        break;
                    case DualBowgun:
                        dmg = calcBaseDamage(stats.get(dex), stats.get(str), 0, stats.get(pad), jobConst + 1.3);
                        break;
                    case HandCannon:
                        int dexNum = stats.get(dex);
                        int strNum = stats.get(str);
                        if (strNum >= dexNum) {
                            int temp = dexNum;
                            dexNum = strNum;
                            strNum = temp;
                        }
                        dmg = calcBaseDamage(dexNum, strNum, 0, stats.get(pad), jobConst + 1.5);
                        break;
                    case ArmCannon:
                        dmg = calcBaseDamage(stats.get(str), stats.get(dex), 0, stats.get(pad), jobConst + 1.7);
                        break;
                    case Desperado:
                        // calcDamageByHp, first arg is raw hp, 2nd is
                        dmg = calcBaseDamageByHp(chr.getStat(Stat.mhp), stats.get(mhp), stats.get(str), stats.get(pad), jobConst + 1.3);
                        break;
                    case RitualFan:
                        dmg = calcBaseDamage(stats.get(luk), stats.get(dex), 0, stats.get(pad), jobConst + 1.3);
                        break;
                    case Bladecaster:
                        dmg = calcBaseDamage(stats.get(str), stats.get(dex), 0, stats.get(pad), jobConst + 1.3);
                        break;
                }
            } else {
                dmg = calcBaseDamage(stats.get(inte), stats.get(luk), 0, stats.get(mad), jobConst + 1.0);
            }
        }
        return dmg;
    }

    private long calcHybridBaseDamage(int stat1, int stat2, int stat3, int stat4, int pad, double finalDamage) {
        return (long) ((stat1 * 3.5 + stat2 * 3.5 + stat3 * 3.5 + stat4) / 100.0 * (pad * finalDamage) + 0.5);
    }

    private long calcBaseDamage(int mainStat, int secStat, int tertStat, int pad, double finalDamage) {
        return (long) ((tertStat + secStat + 4 * mainStat) / 100.0 * (pad * finalDamage) + 0.5);
    }

    private long calcBaseDamageByHp(int rawHp, int totalHp, int str, int pad, double finalDamage) {
        return (long) (((int) (rawHp / 3.5) + 0.8 * ((int) ((totalHp - rawHp) / 3.5)) + str) / 100.0 * (pad * finalDamage) + 0.5);
    }

    public void checkDamage(AttackInfo attackInfo) {
        long minDamage = (long) getMinBaseDamage();
        long maxDamage = (long) getMaxBaseDamage();
        int skillId = attackInfo.skillId;
        // make seperate variables, as they can change based on the mob being a boss or not
        int chrIed = chr.getTotalStat(BaseStat.ied);
        int chrFd = chr.getTotalStat(BaseStat.fd);
        int chrCr = chr.getTotalStat(BaseStat.cr);
        int chrDam = chr.getTotalStat(damR);
        // star force
        int reqChuc = chr.getField().getInfo().getBarrier();
        int sfMult = 0;
        if (reqChuc > 0) {
            int userChuc = chr.getTotalChuc();
            int perc = userChuc / reqChuc;
            int diff = userChuc - reqChuc;
            sfMult = GameConstants.getStarForceMultiplier(perc, diff);
        }
        // arcane force
        int reqArc = chr.getField().getInfo().getBarrierArc();
        int arcMult = 0;
        if (reqArc > 0) {
            int userArc = chr.getTotalStat(BaseStat.arc);
            int perc = userArc / reqArc;
            arcMult = GameConstants.getArcaneForceMultiplier(perc);
        }
        for (MobAttackInfo mai : attackInfo.mobAttackInfo) {
            int ied = chrIed;
            int fd = chrFd;
            int cr = chrCr;
            int dam = chrDam;
            Mob mob = mai.mob;
            long[] randNums = new long[RAND_NUM];
            long[] damages = new long[RAND_NUM];
            boolean[] usedIdx = new boolean[RAND_NUM];
            for (int i = 0; i < randNums.length; i++) {
                randNums[i] = getRand().random();
            }
            if (mob == null) {
                return;
            }
            boolean boss = mob.isBoss();
            StringBuilder sb = new StringBuilder("(C):");
            StringBuilder sb2 = new StringBuilder("(S):");

            int index = 0;
            int[] indices = new int[mai.damages.length];
            boolean start = true;
            int j = 0;
            mai.crits = new boolean[mai.damages.length];
            for (long damage : mai.damages) {
                boolean reusedIdx = usedIdx[index % RAND_NUM];
                if (!reusedIdx) {
                    usedIdx[index % RAND_NUM] = true;
                }
                if (start) {
                    sb.append(" ").append(damage);
                } else {
                    sb.append(" + ").append(damage);
                }
                double expectedDamage = 0d;
                index++;
                long unkRand1 = randNums[index++ % RAND_NUM];


                // Adjusted Random Damage
                // TODO: cache min/max damage
                long rand;
                indices[j] = index % 11;
                rand = randNums[index++ % RAND_NUM];

                double adjustedRandomDamage = randomInRange(rand, minDamage, maxDamage);
                expectedDamage += adjustedRandomDamage;
                double maxExpectedDamagePerc = maxDamage / expectedDamage;


                // Adjusted Damage By Monster's Physical Defense Rate
                double monsterPDRate = mob.getForcedMobStat().getPdr();
                monsterPDRate -= monsterPDRate * (ied / 100D);
                double percentDmgAfterPDRate = Math.max(0.0, 100D - monsterPDRate);
                expectedDamage = percentDmgAfterPDRate / 100D * expectedDamage;


                // Adjusted Damage By Skill
                SkillInfo si = null;
                if (skillId > 0) {
                    si = SkillData.getSkillInfoById(skillId);
                }
                if (si != null) {
                    int slv = chr.getSkillLevel(skillId);
                    expectedDamage = expectedDamage * si.getValue(SkillConstants.getDamageSkillStat(skillId, attackInfo.attackHeader), slv) / 100D;
                    cr += si.getValue(SkillStat.cr, slv);
                    if (boss) {
                        dam += si.getValue(SkillStat.damageToBoss, slv);
                    }
                }

                // total damage
                if (mob.isBoss()) {
                    dam += chr.getTotalStat(bd);
                } else {
                    dam += chr.getTotalStat(nbd);
                }
                expectedDamage += expectedDamage * (dam / 100D);

                // Index reusage check
                if (reusedIdx) {
                    long randNewIndex = randNums[(j + index) % RAND_NUM];
                    index += randomInRange(randNewIndex, 0, 9);
                }

                // Final damage
                expectedDamage += expectedDamage * (fd / 100D);

                // Adjusted Critical Damage
                if (mob.isBoss()) {
                    cr += chr.getTotalStat(addCrOnBoss);
                }
                if (cr >= 100 || (cr > 0 && randomInRange(randNums[index++ % RAND_NUM], 0, 100) < cr)) {
                    mai.crits[j] = true;
                    int minCritDamage = getMinCritDamage();
                    int maxCritDamage = getMaxCritDamage();
                    double criticalDamageRate = randomInRange(randNums[index++ % RAND_NUM], minCritDamage, maxCritDamage);
                    expectedDamage = (long) (criticalDamageRate / 100D * expectedDamage + expectedDamage);
                }

                // Level difference
                expectedDamage *= 1 + GameConstants.getDamageBonusFromLevelDifference(chr.getLevel(), mob.getLevel());

                // Star force
                expectedDamage += expectedDamage * (sfMult / 100D);

                // Arcane force
                expectedDamage += expectedDamage * (arcMult / 100D);

                // Apply damage cap
                expectedDamage = Math.min(GameConstants.DAMAGE_CAP, (long) expectedDamage);

                if (expectedDamage <= 0) {
                    expectedDamage = 1;
                }

                // debug stuff
                if (start) {
                    sb2.append(" ").append((long) expectedDamage);
                } else {
                    sb2.append(" + ").append((long) expectedDamage);
                }
                if (mai.crits[j]) {
                    // current hit crit
                    sb.append(" (Crit)");
                    sb2.append(" (Crit)");
                }

                // actual check to given damage
                // ceiling damage (max possible damage roll) * buffer * possible crit we missed
                long maxDamageWithRoom = (long) ((long)(expectedDamage) * maxExpectedDamagePerc * DAMAGE_EXTRA_ROOM * (mai.crits[j] ? 1 : (1 + chr.getTotalStat(crDmg) / 100D)));
                if (damage > maxDamageWithRoom) {
                    chr.getOffenseManager().decreaseTrust();
                } else {
                    chr.getOffenseManager().increaseTrust();
                }

                if (start) {
                    index++;
                }
                start = false;
                j++;
            }
            sb2.append(" ").append(Arrays.toString(indices));
            if (chr.isShowDamageCalc()) {
                chr.chatMessage(sb.toString());
                chr.chatMessage(sb2.toString());
            }
        }
    }

    public void checkSkillRange(AttackInfo attackInfo) {
        var offenseManager = chr.getOffenseManager();
        var skillId = attackInfo.skillId;
        var slv = attackInfo.slv;
        var si = SkillData.getSkillInfoById(skillId);
        var mobInfo = attackInfo.mobAttackInfo;

        var trustDecreased = false;

        if (si == null && mobInfo.size() > 1) {
            offenseManager.decreaseTrust();
            return;
        } else if (si == null || InspectConstants.isSkipRangeSkill(skillId)) {
            return;
        }

        var skillMobCount = getMobCount(chr, si, slv, attackInfo);
        var skillRect = si.getFirstRect();

        if (skillMobCount != 0 && mobInfo.size() > skillMobCount) {
            offenseManager.decreaseTrust();
            log.warn(String.format("[%s] Invalid mob count! Skill: %d, Expected: %d, Actual: %d", chr, skillId, skillMobCount, mobInfo.size()));
            trustDecreased = true;
        }

        var chrPos = attackInfo.chrPos;
        if (skillRect != null) {
            skillRect = chrPos.getRectAround(skillRect.scaleLinear(SKILL_RECT_SCALAR));

            if (!attackInfo.left) {
                // flip
                skillRect = skillRect.horizontalFlipAround(chrPos.getX());
            }
        }

        var skillAttackCount = getAttackCount(slv, si, attackInfo);

        for (var mai : attackInfo.mobAttackInfo) {
            if (skillAttackCount != 0 && mai.damages.length > skillAttackCount) {
                offenseManager.decreaseTrust();
                log.warn(String.format("[%s] Invalid attack count! Skill: %d, Expected: %d, Actual: %d", chr, skillId, skillAttackCount, mai.damages.length));
                trustDecreased = true;
            }

            if (mai.mob != null) {
                var mobPos = mai.mob.getPosition();
                if (skillRect != null && !skillRect.hasPositionInside(mobPos)) {
                    offenseManager.decreaseTrust();
                    trustDecreased = true;
                    if (Server.DEBUG) {
                        chr.chatMessage(String.format("MISS: SkillId = %d", skillId));
                    }
                    log.warn(String.format("[%s] Invalid mobPos! Skill: %d, Expected: %s, Actual: %s", chr, skillId, skillRect, mobPos));
                    if (Server.DEBUG) {
                        skillRect.debugRect(chr);
                        mobPos.show(chr);
                    }
                }
            }
        }

        if (!trustDecreased) {
            offenseManager.increaseTrust();
        }
    }

    private int getMobCount(Char chr, SkillInfo si, int slv, AttackInfo attackInfo) {
        var mobCount = si.getValue(SkillStat.mobCount, slv);

        for (var psdSkillId : si.getPsdSkillsOrigin()) {
            var psdSi = SkillData.getSkillInfoById(psdSkillId);

            if (psdSi == null || !chr.hasSkill(psdSkillId) || psdSkillId == si.getSkillId()) {
                continue;
            }

            mobCount += psdSi.getValue(SkillStat.targetPlus, chr.getSkill(psdSkillId).getCurrentLevel());
            mobCount += psdSi.getValue(SkillStat.targetPlus_5th, chr.getSkill(psdSkillId).getCurrentLevel());
        }

        return Math.min(mobCount, MAX_MOB_COUNT);
    }

    private int getAttackCount(int slv, SkillInfo si, AttackInfo attackInfo) {
        var skillId = attackInfo.skillId;

        var hasDoubleLines = attackInfo.buckShot != 0;
        var attackCount = si.getValue(SkillStat.attackCount, slv);
        if (hasDoubleLines) {
            attackCount *= attackCount;
        }

        for (var psdSkillId : si.getPsdSkillsOrigin()) {
            var psdSi = SkillData.getSkillInfoById(psdSkillId);

            if (psdSi == null || !chr.hasSkill(psdSkillId) || psdSkillId == skillId) {
                continue;
            }

            attackCount += psdSi.getValue(SkillStat.attackCount, chr.getSkill(psdSkillId).getCurrentLevel());
        }

        var notLinkedSkill = SkillConstants.getNotWzLinkedAttackCountSkill(skillId); // Some hypers are not linked via psdSkill
        if (notLinkedSkill != 0) {
            var notLinkedSi = SkillData.getSkillInfoById(notLinkedSkill);

            if (notLinkedSi != null && chr.hasSkill(notLinkedSkill)) {
                attackCount += notLinkedSi.getValue(SkillStat.attackCount, chr.getSkill(notLinkedSkill).getCurrentLevel());
            }
        }

        return Math.min(attackCount, MAX_ATTACK_COUNT);
    }

    private int getTotalSkillDamage(AttackInfo attackInfo) {
        int skillId = attackInfo.skillId;
        int slv = attackInfo.slv;
        int skillDmg = 0;

        SkillInfo si = null;
        if (skillId > 0) {
            si = SkillData.getSkillInfoById(skillId);
        }
        if (si != null) {
            skillDmg = si.getValue(SkillStat.damage, slv);

            Set<Integer> psdSkillOrigins = si.getPsdSkillsOrigin();
            for (Integer psdOriginSkillId : psdSkillOrigins) {
                SkillInfo psdSi = SkillData.getSkillInfoById(psdOriginSkillId);
                if (psdSi == null || !chr.hasSkill(psdOriginSkillId)) {
                    continue;
                }
                int psdSlv = chr.getSkillLevel(psdOriginSkillId);

                // Additive
                skillDmg += psdSi.getValue(SkillStat.damR, psdSlv);


                // Multiplicative
                if (psdSi.getValue(SkillStat.damage, slv) > 0) { // Attacking Skill

                    if (psdSi.getValue(SkillStat.damPlus, slv) > 0) {
                        skillDmg += skillDmg * (psdSi.getValue(SkillStat.damPlus, psdSlv) / 100D);
                    }

                }

                // V Booster Nodes
                if (psdSi.getvSkill() == 2) { // Boost Nodes

                    if (psdSi.getValue(SkillStat.damR_5th, slv) > 0) {
                        skillDmg += skillDmg * (psdSi.getValue(SkillStat.damR_5th, psdSlv) / 100D);
                    }

                }
            }
        }
        return skillDmg;
    }

    private int getMinCritDamage() {
        return chr.getTotalStat(crDmg) + MIN_CRIT_DMG;
    }

    private int getMaxCritDamage() {
        return chr.getTotalStat(crDmg) + MAX_CRIT_DMG;
    }

    private double randomInRange(long randomNum, long min, long max) {
        if (min == max) {
            return min;
        }
        if (min > max) {
            // swap min and max values
            long temp = max;
            max = min;
            min = temp;
        }
        return min + (randomNum % 10000000) * (max - min) / 9999999.0;
    }

}
