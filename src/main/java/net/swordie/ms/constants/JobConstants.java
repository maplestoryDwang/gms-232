package net.swordie.ms.constants;

import net.swordie.ms.client.jobs.Zero;
import net.swordie.ms.client.jobs.adventurer.BeastTamer;
import net.swordie.ms.client.jobs.adventurer.Kinesis;
import net.swordie.ms.client.jobs.adventurer.archer.BowMaster;
import net.swordie.ms.client.jobs.adventurer.archer.Marksman;
import net.swordie.ms.client.jobs.adventurer.archer.Pathfinder;
import net.swordie.ms.client.jobs.adventurer.magician.Bishop;
import net.swordie.ms.client.jobs.adventurer.magician.FirePoison;
import net.swordie.ms.client.jobs.adventurer.magician.IceLightning;
import net.swordie.ms.client.jobs.adventurer.pirate.Buccaneer;
import net.swordie.ms.client.jobs.adventurer.pirate.Cannoneer;
import net.swordie.ms.client.jobs.adventurer.pirate.Corsair;
import net.swordie.ms.client.jobs.adventurer.pirate.Jett;
import net.swordie.ms.client.jobs.adventurer.thief.BladeMaster;
import net.swordie.ms.client.jobs.adventurer.thief.NightLord;
import net.swordie.ms.client.jobs.adventurer.thief.Shadower;
import net.swordie.ms.client.jobs.adventurer.warrior.DarkKnight;
import net.swordie.ms.client.jobs.adventurer.warrior.Hero;
import net.swordie.ms.client.jobs.adventurer.warrior.Paladin;
import net.swordie.ms.client.jobs.anima.HoYoung;
import net.swordie.ms.client.jobs.anima.Lara;
import net.swordie.ms.client.jobs.cygnus.*;
import net.swordie.ms.client.jobs.flora.Adele;
import net.swordie.ms.client.jobs.flora.Ark;
import net.swordie.ms.client.jobs.flora.Illium;
import net.swordie.ms.client.jobs.legend.*;
import net.swordie.ms.client.jobs.nova.AngelicBuster;
import net.swordie.ms.client.jobs.nova.Cadena;
import net.swordie.ms.client.jobs.nova.Kain;
import net.swordie.ms.client.jobs.nova.Kaiser;
import net.swordie.ms.client.jobs.resistance.*;
import net.swordie.ms.client.jobs.resistance.demon.DemonAvenger;
import net.swordie.ms.client.jobs.resistance.demon.DemonSlayer;
import net.swordie.ms.client.jobs.sengoku.Hayato;
import net.swordie.ms.client.jobs.sengoku.Kanna;
import net.swordie.ms.connection.OutPacket;
import net.swordie.ms.enums.BaseStat;
import net.swordie.ms.enums.WeaponType;
import net.swordie.ms.enums.ItemJob;
import net.swordie.ms.util.Util;
import net.swordie.ms.util.container.Tuple;

import java.util.*;
import java.util.stream.Collectors;

/**
 * @author Itzik
 */
public class JobConstants {

    public static final boolean enableJobs = true;
    public static int jobOrder = 0x23;

    // region Job Specific Methods

    // region Explorers
    public static boolean isHero(int job) {
        return job / 10 == 11;
    }

    public static boolean isPaladin(int job) {
        return job / 10 == 12;
    }

    public static boolean isDarkKnight(int job) {
        return job / 10 == 13;
    }

    public static boolean isFirePoison(int job) {
        return job / 10 == 21;
    }

    public static boolean isIceLightning(int job) {
        return job / 10 == 22;
    }

    public static boolean isBishop(int job) {
        return job / 10 == 23;
    }

    public static boolean isBowMaster(int job) {
        return job / 10 == 31;
    }

    public static boolean isMarksman(int job) {
        return job / 10 == 32;
    }

    public static boolean isPathFinder(int id) {
        return id == JobEnum.PATHFINDER_1.getJobId()
                || id == JobEnum.PATHFINDER_2.getJobId()
                || id == JobEnum.PATHFINDER_3.getJobId()
                || id == JobEnum.PATHFINDER_4.getJobId();
    }

    public static boolean isNightLord(int job) {
        return job / 10 == 41;
    }

    public static boolean isShadower(int job) {
        return job / 10 == 42;
    }

    public static boolean isDualBlade(int job) {
        return job / 10 == 43;
    }

    public static boolean isBuccaneer(int job) {
        return job / 10 == 51;
    }

    public static boolean isCorsair(int job) {
        return job / 10 == 52;
    }

    public static boolean isCannonShooter(int jobId) {
        return jobId / 10 == 53 || jobId == 501;
    }

    public static boolean isJett(int job) {
        return job / 10 == 57 || job == JobEnum.JETT_1.getJobId();
    }
    // endregion

    // region Knights of Cygnus
    public static boolean isDawnWarrior(int job) {
        return job / 100 == 11;
    }

    public static boolean isBlazeWizard(int job) {
        return job / 100 == 12;
    }

    public static boolean isWindArcher(int id) {
        return id / 100 == 13;
    }

    public static boolean isNightWalker(int id) {
        return id / 100 == 14;
    }

    public static boolean isThunderBreaker(int id) {
        return id / 100 == 15;
    }

    public static boolean isMihile(int id) {
        return id / 100 == 51 || id == 5000;
    }
    // endregion

    // region Legends
    public static boolean isAran(int jobId) {
        return jobId / 100 == 21 || jobId == 2000;
    }

    public static boolean isEvan(int jobId) {
        return jobId / 100 == 22 || jobId == 2001;
    }

    public static boolean isMercedes(int jobId) {
        return jobId / 100 == 23 || jobId == 2002;
    }

    public static boolean isPhantom(int jobId) {
        return jobId / 100 == 24 || jobId == 2003;
    }

    public static boolean isShade(int id) {
        return id == JobEnum.SHADE.getJobId() || id / 100 == 25;
    }

    public static boolean isHidden(int jobId) {
        return jobId / 100 == 25 || jobId == 2005;
    }

    public static boolean isLuminous(int jobId) {
        return jobId / 100 == 27 || jobId == 2004;
    }
    // endregion

    // region Resistance
    public static boolean isDemonSlayer(int job) {
        return job == 3100 || job / 10 == 311;
    }

    public static boolean isDemonAvenger(int job) {
        return job / 10 == 312 || job == 3101;
    }

    public static boolean isBattleMage(int id) {
        return id >= JobConstants.JobEnum.BATTLE_MAGE_1.getJobId() && id <= JobConstants.JobEnum.BATTLE_MAGE_4.getJobId();
    }

    public static boolean isWildHunter(int job) {
        return job / 100 == 33;
    }

    public static boolean isMechanic(int id) {
        return id >= JobConstants.JobEnum.MECHANIC_1.getJobId() && id <= JobConstants.JobEnum.MECHANIC_4.getJobId();
    }

    public static boolean isXenon(int jobId) {
        return jobId / 100 == 36 || jobId == 3002;
    }

    public static boolean isBlaster(int id) {
        return id / 100 == 37;
    }
    // endregion

    // region Sengoku
    public static boolean isHayato(int id) {
        return id == JobConstants.JobEnum.HAYATO.getJobId() || id / 100 == 41;
    }

    public static boolean isKanna(int id) {
        return id == JobConstants.JobEnum.KANNA.getJobId() || id / 100 == 42;
    }
    // endregion

    // region Nova
    public static boolean isKaiser(int jobId) {
        return jobId == JobConstants.JobEnum.KAISER.getJobId() || jobId / 100 == 61;
    }

    public static boolean isKain(int jobId) {
        return jobId == JobEnum.KAIN.getJobId()
                || jobId == JobEnum.KAIN_1.getJobId()
                || jobId == JobEnum.KAIN_2.getJobId()
                || jobId == JobEnum.KAIN_3.getJobId()
                || jobId == JobEnum.KAIN_4.getJobId();
    }

    public static boolean isCadena(int jobId) {
        return jobId == 6002 || (jobId >= 6400 && jobId <= 6412);
    }

    public static boolean isAngelicBuster(int id) {
        return id == JobConstants.JobEnum.ANGELIC_BUSTER.getJobId() || id / 100 == 65;
    }
    // endregion

    // region Lef
    public static boolean isAdele(int id) {
        return id == JobEnum.ADELE.getJobId() || id >= JobEnum.ADELE_1.getJobId() && id <= JobEnum.ADELE_4.getJobId();
    }

    public static boolean isIllium(int jobId) {
        return jobId == 15000 || (jobId >= 15200 && jobId <= 15212);
    }

    public static boolean isArk(int jobId) {
        return jobId == 15001 || (jobId >= 15500 && jobId <= 15512);
    }
    // endregion

    // region Anima
    public static boolean isHoYoung(int id) {
        return id == JobEnum.HO_YOUNG.getJobId() || (id >= JobEnum.HO_YOUNG_1.getJobId() && id <= JobEnum.HO_YOUNG_4.getJobId());
    }

    public static boolean isLara(int id) {
        return id == JobEnum.LARA.getJobId() || (id >= JobEnum.LARA_1.getJobId() && id <= JobEnum.LARA_4.getJobId());
    }
    // endregion

    // region Others
    public static boolean isGmJob(int id) {
        return isGm(id) || isSuperGm(id);
    }

    public static boolean isGm(int id) {
        return id == JobEnum.GM.getJobId();
    }

    public static boolean isSuperGm(int id) {
        return id == JobEnum.SUPER_GM.getJobId();
    }

    public static boolean isZero(int jobId) {
        return jobId == JobEnum.ZERO.getJobId()
                || jobId == JobEnum.ZERO_1.getJobId()
                || jobId == JobEnum.ZERO_2.getJobId()
                || jobId == JobEnum.ZERO_3.getJobId()
                || jobId == JobEnum.ZERO_4.getJobId();
    }

    public static boolean isBeastTamer(int job) {
        return job == 11000 || (job >= 11200 && job <= 11212);
    }

    public static boolean isKinesis(int jobId) {
        return jobId == JobEnum.KINESIS_0.getJobId()
                || jobId == JobEnum.KINESIS_1.getJobId()
                || jobId == JobEnum.KINESIS_2.getJobId()
                || jobId == JobEnum.KINESIS_3.getJobId()
                || jobId == JobEnum.KINESIS_4.getJobId();
    }

    public static boolean isPinkBean(int job) {
        return job == JobEnum.PINK_BEAN_0.getJobId() || job == JobEnum.PINK_BEAN_1.getJobId();
    }
    // endregion

    // endregion



    // region Race Specific Methods
    public static boolean isExplorer(int job) {
        return job >= 0 && job < 600; // good enough to catch them all
    }

    public static boolean isAdventurerWarrior(int jobId) {
        return jobId == JobEnum.WARRIOR.getJobId()
                || isHero(jobId)
                || isPaladin(jobId)
                || isDarkKnight(jobId);
    }

    public static boolean isAdventurerMage(int jobId) {
        return jobId == JobEnum.MAGICIAN.getJobId()
                || isFirePoison(jobId)
                || isIceLightning(jobId)
                || isBishop(jobId);
    }

    public static boolean isAdventurerArcher(int jobId) {
        return jobId == JobEnum.BOWMAN.getJobId()
                || isBowMaster(jobId)
                || isMarksman(jobId)
                || isPathFinder(jobId);
    }

    public static boolean isAdventurerThief(int jobId) {
        return jobId == JobEnum.THIEF.getJobId()
                || isNightLord(jobId)
                || isShadower(jobId)
                || isDualBlade(jobId);
    }

    public static boolean isAdventurerPirate(int jobId) {
        return jobId == JobEnum.PIRATE.getJobId()
                || isBuccaneer(jobId)
                || isCorsair(jobId)
                || isCannonShooter(jobId);
    }

    public static boolean isCygnusKnight(int jobId) {
        return jobId / 1000 == 1;
    }

    public static boolean isLegends(int jobId) {
        return jobId / 1000 == 2;
    }

    public static boolean isResistance(int jobId) {
        return jobId / 1000 == 3;
    }

    public static boolean isDemon(int jobId) {
        return jobId / 100 == 31 || jobId == 3001;
    }

    public static boolean isSengoku(int jobId) {
        return jobId / 1000 == 4;
    }

    public static boolean isLeader(int jobId) {
        return jobId / 1000 == 5;
    }

    public static boolean isNova(int jobId) {
        return jobId / 1000 == 6;
    }

    public static boolean isFlora(int jobId) {
        return jobId / 1000 == 15;
    }

    public static boolean isAnima(int jobId) {
        return jobId / 1000 == 16;
    }

    public static BaseStat getMainStatByJob(int job) {
        if (JobConstants.isWarriorEquipJob(job)) {
            if (JobConstants.isDemonAvenger(job)) {
                return BaseStat.mhp;
            }

            return BaseStat.str;

        } else if (JobConstants.isMageEquipJob(job)) {
            return BaseStat.inte;

        } else if (JobConstants.isArcherEquipJob(job)) {
            return BaseStat.dex;

        } else if (JobConstants.isThiefEquipJob(job)) {
            return BaseStat.luk;

        } else if (JobConstants.isPirateEquipJob(job)) {

            if (JobConstants.isBuccaneer(job) || JobConstants.isCannonShooter(job) || JobConstants.isThunderBreaker(job)
                    || JobConstants.isShade(job) || JobConstants.isArk(job)) {
                return BaseStat.str;

            } else {
                return BaseStat.dex;
            }
        }

        return null;
    }
    // endregion



    // region Skill Related Methods
    public static boolean requiresLuckyDice(int jobId) { // Extra Skill from Loaded Dice, for those jobs that don't have  Throw Die  skill.
        return isXenon(jobId) || isJett(jobId) || isThunderBreaker(jobId) || isShade(jobId) || isAngelicBuster(jobId) || isArk(jobId);
    }

    public static boolean isNoManaJob(int job) {
        return isDemon(job) || isAngelicBuster(job) || isZero(job) || isKinesis(job) || isKanna(job);
    }

    public static boolean isWarriorEquipJob(int jobId) {
        return isAdventurerWarrior(jobId) || isPinkBean(jobId) || isDawnWarrior(jobId) || isMihile(jobId) ||
                isAran(jobId) || isKaiser(jobId) || isBlaster(jobId) || isDemon(jobId) || isHayato(jobId) ||
                isZero(jobId) || isAdele(jobId);
    }

    public static boolean isMageEquipJob(int jobId) {
        return isBeastTamer(jobId) || isKinesis(jobId) || isAdventurerMage(jobId) || isBlazeWizard(jobId) ||
                isEvan(jobId) || isLuminous(jobId) || isBattleMage(jobId) || isKanna(jobId) || isIllium(jobId) || isLara(jobId);
    }

    public static boolean isArcherEquipJob(int jobId) {
        return isAdventurerArcher(jobId) || isWindArcher(jobId) || isMercedes(jobId) || isWildHunter(jobId) || isKain(jobId);
    }

    public static boolean isThiefEquipJob(int jobId) {
        return isAdventurerThief(jobId) || isNightWalker(jobId) || isPhantom(jobId)
                || isXenon(jobId) || isCadena(jobId) || isHoYoung(jobId);
    }

    public static boolean isPirateEquipJob(int jobId) {
        return isAdventurerPirate(jobId) || isThunderBreaker(jobId) || isShade(jobId) || isAngelicBuster(jobId) ||
                isXenon(jobId) || isMechanic(jobId) || isJett(jobId) || isArk(jobId);
    }

    public static int getBranchIdByJob(int job) {
        if (JobConstants.isLuminous(job)) {
            return 2; // Mage
        } else if (JobConstants.isXenon(job)) {
            return 4; // Thief
        } else if (JobConstants.isBlaster(job)) {
            return 1; // Warrior
        }
        return (job % 1000) / 100;
    }

    public static boolean isExtendSpJob(int jobId) {
        return !isBeastTamer(jobId) && !isPinkBean(jobId) && !isGmJob(jobId) && jobId != 800;
    }
    // endregion



    // region Others
    public static JobEnum getJobEnumById(int jobId) {
        return Arrays.stream(JobEnum.values()).filter(job -> job.getJobId() == jobId)
                .findFirst().orElse(null);
    }

    public static double getDamageConstant(int job) {
        // get_job_damage_const
        if (job > 222) {
            if (job > 1200) {
                if (job >= 1210 && job <= 1212)
                    return 0.2;
            } else if (job == 1200 || job >= 230 && job <= 232) {
                return 0.2;
            }
            return 0.0;
        }
        if (job < 220) {
            switch (job) {
                case 110:
                case 111:
                case 112:
                    return 0.1;
                case 200:
                case 210:
                case 211:
                case 212:
                    return 0.2;
                default:
                    return 0.0;
            }
        }
        return 0.2;
    }

    public static int getJobCategory(int job) {
        int res = 0;
        switch (job / 100) {
            case 27:
            case 140:
            case 142:
                res = 2;
                break;
            case 36:
                res = 4;
                break;
            case 37:
                res = 1;
                break;
            default:
                res = job % 1000 / 100;
        }
        return res;
    }

    public static byte getJobLevelByZeroSkillID(int skillID) {
        int prefix = (skillID % 1000) / 100;
        return (byte) (prefix == 1 ? 2
                : prefix == 2 ? 1
                : 3);
    }

    public static boolean isMatchingForBeginnerjob(int job, int beginnerJob) {
        switch (beginnerJob) {
            case 0:
                return isExplorer(job);
            case 2001:
                return isEvan(job);
            case 2002:
                return isMercedes(job);
            case 2003:
                return isPhantom(job);
            case 2004:
                return isLuminous(job);
            case 2005:
                return isShade(job);
            case 3000:
                return isResistance(job);
            case 3001:
                return isDemon(job);
            case 3002:
                return isXenon(job);
            case 4001:
                return isHayato(job);
            case 4002:
                return isKanna(job);
            case 6000:
                return isKaiser(job);
            case 6001:
                return isAngelicBuster(job);
            case 6002:
                return isCadena(job);
            case 10000:
                return isZero(job);
            case 11000:
                return isBeastTamer(job);
            case 14000:
                return isKinesis(job);
            case 15000:
                return isIllium(job);
            case 15001:
                return isArk(job);
            case 15002:
                return isAdele(job);
            case 16000:
                return isHoYoung(job);
            case 16001:
                return isLara(job);
        }

        return false;
    }
    // endregion



    public enum JobEnum {
        BEGINNER(0, 0),
        WARRIOR(100, 0),
        FIGHTER(110, 0),
        CRUSADER(111, 0),
        HERO(112, 0),
        PAGE(120, 0),
        WHITE_KNIGHT(121, 0),
        PALADIN(122, 0),
        SPEARMAN(130, 0),
        DRAGON_KNIGHT(131, 0),
        DARK_KNIGHT(132, 0),
        MAGICIAN(200, 0),
        FP_WIZARD(210, 0),
        FP_MAGE(211, 0),
        FP_ARCHMAGE(212, 0),
        IL_WIZARD(220, 0),
        IL_MAGE(221, 0),
        IL_ARCHMAGE(222, 0),
        CLERIC(230, 0),
        PRIEST(231, 0),
        BISHOP(232, 0),
        BOWMAN(300, 0),
        HUNTER(310, 0),
        RANGER(311, 0),
        BOWMASTER(312, 0),
        CROSSBOWMAN(320, 0),
        SNIPER(321, 0),
        MARKSMAN(322, 0),
        PATHFINDER_1(301, 0),
        PATHFINDER_2(330, 0),
        PATHFINDER_3(331, 0),
        PATHFINDER_4(332, 0),
        THIEF(400, 0),
        ASSASSIN(410, 0),
        HERMIT(411, 0),
        NIGHT_LORD(412, 0),
        BANDIT(420, 0),
        CHIEF_BANDIT(421, 0),
        SHADOWER(422, 0),
        BLADE_RECRUIT(430, 0),
        BLADE_ACOLYTE(431, 0),
        BLADE_SPECIALIST(432, 0),
        BLADE_LORD(433, 0),
        BLADE_MASTER(434, 0),
        PIRATE(500, 0),
        PIRATE_CANNONEER(501, 0),
        JETT_1(508, 0),
        BRAWLER(510, 0),
        MARAUDER(511, 0),
        BUCCANEER(512, 0),
        GUNSLINGER(520, 0),
        OUTLAW(521, 0),
        CORSAIR(522, 0),
        CANNONEER(530, 0),
        CANNON_BLASTER(531, 0),
        CANNON_MASTER(532, 0),
        JETT_2(570, 0),
        JETT_3(571, 0),
        JETT_4(572, 0),
        MANAGER(800, 0),
        GM(900, 0),
        SUPER_GM(910, 0),
        NOBLESSE(1000, 1000),
        DAWN_WARRIOR_1(1100, 1000),
        DAWN_WARRIOR_2(1110, 1000),
        DAWN_WARRIOR_3(1111, 1000),
        DAWN_WARRIOR_4(1112, 1000),
        BLAZE_WIZARD_1(1200, 1000),
        BLAZE_WIZARD_2(1210, 1000),
        BLAZE_WIZARD_3(1211, 1000),
        BLAZE_WIZARD_4(1212, 1000),
        WIND_ARCHER_1(1300, 1000),
        WIND_ARCHER_2(1310, 1000),
        WIND_ARCHER_3(1311, 1000),
        WIND_ARCHER_4(1312, 1000),
        NIGHT_WALKER_1(1400, 1000),
        NIGHT_WALKER_2(1410, 1000),
        NIGHT_WALKER_3(1411, 1000),
        NIGHT_WALKER_4(1412, 1000),
        THUNDER_BREAKER_1(1500, 1000),
        THUNDER_BREAKER_2(1510, 1000),
        THUNDER_BREAKER_3(1511, 1000),
        THUNDER_BREAKER_4(1512, 1000),
        LEGEND(2000, 2000),
        EVAN_NOOB(2001, 2001),
        ARAN_1(2100, 2000),
        ARAN_2(2110, 2000),
        ARAN_3(2111, 2000),
        ARAN_4(2112, 2000),
        EVAN_1(2210, 2001),
        EVAN_2(2212, 2001),
        EVAN_3(2214, 2001),
        EVAN_4(2217, 2001),
        MERCEDES(2002, 2002),
        MERCEDES_1(2300, 2002),
        MERCEDES_2(2310, 2002),
        MERCEDES_3(2311, 2002),
        MERCEDES_4(2312, 2002),
        PHANTOM(2003, 2003),
        PHANTOM_1(2400, 2003),
        PHANTOM_2(2410, 2003),
        PHANTOM_3(2411, 2003),
        PHANTOM_4(2412, 2003),
        SHADE(2005, 2005),
        SHADE_1(2500, 2005),
        SHADE_2(2510, 2005),
        SHADE_3(2511, 2005),
        SHADE_4(2512, 2005),
        LUMINOUS(2004, 2004),
        LUMINOUS_1(2700, 2004),
        LUMINOUS_2(2710, 2004),
        LUMINOUS_3(2711, 2004),
        LUMINOUS_4(2712, 2004),
        CITIZEN(3000, 3000),
        DEMON(3001, 3001),
        XENON(3002, 3002),
        DEMON_SLAYER_1(3100, 3001),
        DEMON_SLAYER_2(3110, 3001),
        DEMON_SLAYER_3(3111, 3001),
        DEMON_SLAYER_4(3112, 3001),
        DEMON_AVENGER_1(3101, 3001),
        DEMON_AVENGER_2(3120, 3001),
        DEMON_AVENGER_3(3121, 3001),
        DEMON_AVENGER_4(3122, 3001),
        BATTLE_MAGE_1(3200, 3000),
        BATTLE_MAGE_2(3210, 3000),
        BATTLE_MAGE_3(3211, 3000),
        BATTLE_MAGE_4(3212, 3000),
        WILD_HUNTER_1(3300, 3000),
        WILD_HUNTER_2(3310, 3000),
        WILD_HUNTER_3(3311, 3000),
        WILD_HUNTER_4(3312, 3000),
        MECHANIC_1(3500, 3000),
        MECHANIC_2(3510, 3000),
        MECHANIC_3(3511, 3000),
        MECHANIC_4(3512, 3000),
        BLASTER_1(3700, 3000),
        BLASTER_2(3710, 3000),
        BLASTER_3(3711, 3000),
        BLASTER_4(3712, 3000),
        XENON_1(3600, 3002),
        XENON_2(3610, 3002),
        XENON_3(3611, 3002),
        XENON_4(3612, 3002),
        HAYATO(4001, 4001),
        KANNA(4002, 4002),
        HAYATO_1(4100, 4001),
        HAYATO_2(4110, 4001),
        HAYATO_3(4111, 4001),
        HAYATO_4(4112, 4001),
        KANNA_1(4200, 4002),
        KANNA_2(4210, 4002),
        KANNA_3(4211, 4002),
        KANNA_4(4212, 4002),
        NAMELESS_WARDEN(5000, 5000),
        MIHILE_1(5100, 5000),
        MIHILE_2(5110, 5000),
        MIHILE_3(5111, 5000),
        MIHILE_4(5112, 5000),
        KAISER(6000, 6000),
        ANGELIC_BUSTER(6001, 6001),
        CADENA(6002, 6002),
        KAIN(6003, 6003),
        KAISER_1(6100, 6000),
        KAISER_2(6110, 6000),
        KAISER_3(6111, 6000),
        KAISER_4(6112, 6000),
        KAIN_1(6300, 6003),
        KAIN_2(6310, 6003),
        KAIN_3(6311, 6003),
        KAIN_4(6312, 6003),
        CADENA_1(6400, 6002),
        CADENA_2(6410, 6002),
        CADENA_3(6411, 6002),
        CADENA_4(6412, 6002),
        ANGELIC_BUSTER_1(6500, 6001),
        ANGELIC_BUSTER_2(6510, 6001),
        ANGELIC_BUSTER_3(6511, 6001),
        ANGELIC_BUSTER_4(6512, 6001),
        ADDITIONAL_SKILLS(9000, 0),
        ZERO(10000, 10000),
        ZERO_1(10100, 10000),
        ZERO_2(10110, 10000),
        ZERO_3(10111, 10000),
        ZERO_4(10112, 10000),
        BEAST_TAMER(11000, 11000),
        BEAST_TAMER_1(11200, 11000),
        BEAST_TAMER_2(11210, 11000),
        BEAST_TAMER_3(11211, 11000),
        BEAST_TAMER_4(11212, 11000),
        PINK_BEAN_0(13000, 13000),
        PINK_BEAN_1(13100, 13000),
        KINESIS_0(14000, 14000),
        KINESIS_1(14200, 14000),
        KINESIS_2(14210, 14000),
        KINESIS_3(14211, 14000),
        KINESIS_4(14212, 14000),
        ILLIUM(15000, 15000),
        ARK(15001, 15001),
        ADELE(15002, 15002),
        ADELE_1(15100, 15002),
        ADELE_2(15110, 15002),
        ADELE_3(15111, 15002),
        ADELE_4(15112, 15002),
        ILLIUM_1(15200, 15000),
        ILLIUM_2(15210, 15000),
        ILLIUM_3(15211, 15000),
        ILLIUM_4(15212, 15000),
        ARK_1(15500, 15001),
        ARK_2(15510, 15001),
        ARK_3(15511, 15001),
        ARK_4(15512, 15001),
        LARA(16001, 16001),
        LARA_1(16200, 16001),
        LARA_2(16210, 16001),
        LARA_3(16211, 16001),
        LARA_4(16212, 16001),
        HO_YOUNG(16000, 16000),
        HO_YOUNG_1(16400, 16000),
        HO_YOUNG_2(16410, 16000),
        HO_YOUNG_3(16411, 16000),
        HO_YOUNG_4(16412, 16000),
        EMPTY_0(30000, 0),
        V_SKILLS_COMMON(40000, 0),
        V_SKILLS_WARRIOR(40001, 0),
        V_SKILLS_MAGE(40002, 0),
        V_SKILLS_ARCHER(40003, 0),
        V_SKILLS_THIEF(40004, 0),
        V_SKILLS_PIRATE(40005, 0),
        PINK_BEAN_EMPTY_0(800000, 13000),
        PINK_BEAN_EMPTY_1(800001, 13000),
        PINK_BEAN_EMPTY_2(800002, 13000),
        PINK_BEAN_EMPTY_3(800003, 13000),
        PINK_BEAN_EMPTY_4(800004, 13000),
        PINK_BEAN_EMPTY_5(800010, 13000),
        PINK_BEAN_EMPTY_6(800011, 13000),
        PINK_BEAN_EMPTY_7(800012, 13000),
        PINK_BEAN_EMPTY_8(800013, 13000),
        PINK_BEAN_EMPTY_9(800014, 13000),
        PINK_BEAN_EMPTY_10(800015, 13000),
        PINK_BEAN_EMPTY_11(800016, 13000),
        PINK_BEAN_EMPTY_12(800017, 13000),
        PINK_BEAN_EMPTY_13(800018, 13000),
        PINK_BEAN_EMPTY_14(800019, 13000),
        PINK_BEAN_EMPTY_15(800022, 13000);

        private int jobId;
        private short beginnerJobId;

        JobEnum(int jobId, short beginnerJobId) {
            this.jobId = jobId;
            this.beginnerJobId = beginnerJobId;
        }

        JobEnum(int jobId, int beginnerJobId) {
            this((short) jobId, (short) beginnerJobId);
        }

        public static List<String> getJobsByName(String name) {
            name = name.replaceAll(" ", "_").toLowerCase();

            var list = new ArrayList<String>();
            for (var job : values()) {
                if (job.toString().toLowerCase().contains(name)) {
                    list.add(job.toString() + ": " + job.getJobId());
                }
            }

            return list;
        }

        public int getJobId() {
            return jobId;
        }

        public short getBeginnerJobId() {
            return beginnerJobId;
        }

        public static JobEnum getJobById(int id) {
            return Util.findWithPred(values(), j -> j.getJobId() == id);
        }

        public String toPrettyString() {
            var lowerCases = toString().replace("_", "").toLowerCase(Locale.ROOT);
            return Arrays.stream(lowerCases.split(" "))
                    .map(word -> word.substring(0, 1).toUpperCase() + word.substring(1).toLowerCase())
                    .collect(Collectors.joining(" "));
        }

        public Set<WeaponType> getUsingWeapons() {
            Set<WeaponType> wts = new HashSet<>();
            switch (this) {
                case BEGINNER:
                case WARRIOR:
                case NOBLESSE:
                case LEGEND:
                case CITIZEN:
                    wts.add(WeaponType.OneHandedSword);
                    wts.add(WeaponType.OneHandedAxe);
                    wts.add(WeaponType.OneHandedMace);
                    wts.add(WeaponType.TwoHandedSword);
                    wts.add(WeaponType.TwoHandedAxe);
                    wts.add(WeaponType.TwoHandedMace);
                    break;
                case FIGHTER:
                case CRUSADER:
                case HERO:
                    wts.add(WeaponType.OneHandedSword);
                    wts.add(WeaponType.OneHandedAxe);
                    wts.add(WeaponType.TwoHandedSword);
                    wts.add(WeaponType.TwoHandedAxe);
                    break;
                case PAGE:
                case WHITE_KNIGHT:
                case PALADIN:
                    wts.add(WeaponType.OneHandedSword);
                    wts.add(WeaponType.OneHandedMace);
                    wts.add(WeaponType.TwoHandedSword);
                    wts.add(WeaponType.TwoHandedMace);
                    break;
                case SPEARMAN:
                case DRAGON_KNIGHT:
                case DARK_KNIGHT:
                    wts.add(WeaponType.Spear);
                    wts.add(WeaponType.Polearm);
                    break;
                case MAGICIAN:
                case FP_WIZARD:
                case FP_MAGE:
                case FP_ARCHMAGE:
                case IL_WIZARD:
                case IL_MAGE:
                case IL_ARCHMAGE:
                case CLERIC:
                case PRIEST:
                case BISHOP:
                case EVAN_NOOB:
                case EVAN_1:
                case EVAN_2:
                case EVAN_3:
                case EVAN_4:
                case BLAZE_WIZARD_1:
                case BLAZE_WIZARD_2:
                case BLAZE_WIZARD_3:
                case BLAZE_WIZARD_4:
                    wts.add(WeaponType.Wand);
                    wts.add(WeaponType.Staff);
                    break;
                case BOWMAN:
                case HUNTER:
                case RANGER:
                case BOWMASTER:
                case WIND_ARCHER_1:
                case WIND_ARCHER_2:
                case WIND_ARCHER_3:
                case WIND_ARCHER_4:
                    wts.add(WeaponType.Bow);
                    break;
                case CROSSBOWMAN:
                case SNIPER:
                case MARKSMAN:
                case WILD_HUNTER_1:
                case WILD_HUNTER_2:
                case WILD_HUNTER_3:
                case WILD_HUNTER_4:
                    wts.add(WeaponType.Crossbow);
                    break;
                case THIEF:
                    wts.add(WeaponType.Dagger);
                    wts.add(WeaponType.Claw);
                    break;
                case ASSASSIN:
                case HERMIT:
                case NIGHT_LORD:
                case NIGHT_WALKER_1:
                case NIGHT_WALKER_2:
                case NIGHT_WALKER_3:
                case NIGHT_WALKER_4:
                    wts.add(WeaponType.Claw);
                    break;
                case BANDIT:
                case CHIEF_BANDIT:
                case SHADOWER:
                case BLADE_RECRUIT:
                case BLADE_ACOLYTE:
                case BLADE_SPECIALIST:
                case BLADE_LORD:
                case BLADE_MASTER:
                    wts.add(WeaponType.Dagger);
                    break;
                case PIRATE:
                    wts.add(WeaponType.Knuckle);
                    wts.add(WeaponType.Gun);
                    break;
                case BRAWLER:
                case MARAUDER:
                case BUCCANEER:
                case SHADE:
                case SHADE_1:
                case SHADE_2:
                case SHADE_3:
                case SHADE_4:
                case THUNDER_BREAKER_1:
                case THUNDER_BREAKER_2:
                case THUNDER_BREAKER_3:
                case THUNDER_BREAKER_4:
                    wts.add(WeaponType.Knuckle);
                    break;
                case GUNSLINGER:
                case OUTLAW:
                case CORSAIR:
                case JETT_1:
                case JETT_2:
                case JETT_3:
                case JETT_4:
                case MECHANIC_1:
                case MECHANIC_2:
                case MECHANIC_3:
                case MECHANIC_4:
                    wts.add(WeaponType.Gun);
                    break;
                case PIRATE_CANNONEER:
                case CANNONEER:
                case CANNON_BLASTER:
                case CANNON_MASTER:
                    wts.add(WeaponType.HandCannon);
                    break;
                case DAWN_WARRIOR_1:
                case DAWN_WARRIOR_2:
                case DAWN_WARRIOR_3:
                case DAWN_WARRIOR_4:
                case KAISER:
                case KAISER_1:
                case KAISER_2:
                case KAISER_3:
                case KAISER_4:
                    wts.add(WeaponType.TwoHandedSword);
                    break;
                case ARAN_1:
                case ARAN_2:
                case ARAN_3:
                case ARAN_4:
                    wts.add(WeaponType.Polearm);
                    break;
                case MERCEDES:
                case MERCEDES_1:
                case MERCEDES_2:
                case MERCEDES_3:
                case MERCEDES_4:
                    wts.add(WeaponType.DualBowgun);
                    break;
                case PHANTOM:
                case PHANTOM_1:
                case PHANTOM_2:
                case PHANTOM_3:
                case PHANTOM_4:
                    wts.add(WeaponType.Cane);
                    break;
                case LUMINOUS:
                case LUMINOUS_1:
                case LUMINOUS_2:
                case LUMINOUS_3:
                case LUMINOUS_4:
                    wts.add(WeaponType.ShiningRod);
                    break;
                case DEMON:
                    wts.add(WeaponType.OneHandedAxe);
                    wts.add(WeaponType.OneHandedMace);
                    wts.add(WeaponType.Desperado);
                    break;
                case DEMON_SLAYER_1:
                case DEMON_SLAYER_2:
                case DEMON_SLAYER_3:
                case DEMON_SLAYER_4:
                    wts.add(WeaponType.OneHandedAxe);
                    wts.add(WeaponType.OneHandedMace);
                    break;
                case DEMON_AVENGER_1:
                case DEMON_AVENGER_2:
                case DEMON_AVENGER_3:
                case DEMON_AVENGER_4:
                    wts.add(WeaponType.Desperado);
                    break;
                case BATTLE_MAGE_1:
                case BATTLE_MAGE_2:
                case BATTLE_MAGE_3:
                case BATTLE_MAGE_4:
                    wts.add(WeaponType.Staff);
                    break;
                case BLASTER_1:
                case BLASTER_2:
                case BLASTER_3:
                case BLASTER_4:
                    wts.add(WeaponType.ArmCannon);
                    break;
                case XENON:
                case XENON_1:
                case XENON_2:
                case XENON_3:
                case XENON_4:
                    wts.add(WeaponType.ChainSword);
                    break;
                case HAYATO:
                case HAYATO_1:
                case HAYATO_2:
                case HAYATO_3:
                case HAYATO_4:
                    wts.add(WeaponType.Katana);
                    break;
                case KANNA:
                case KANNA_1:
                case KANNA_2:
                case KANNA_3:
                case KANNA_4:
                    wts.add(WeaponType.Fan);
                    break;
                case NAMELESS_WARDEN:
                case MIHILE_1:
                case MIHILE_2:
                case MIHILE_3:
                case MIHILE_4:
                    wts.add(WeaponType.OneHandedSword);
                    break;
                case ANGELIC_BUSTER:
                case ANGELIC_BUSTER_1:
                case ANGELIC_BUSTER_2:
                case ANGELIC_BUSTER_3:
                case ANGELIC_BUSTER_4:
                    wts.add(WeaponType.SoulShooter);
                    break;
                case ZERO:
                case ZERO_1:
                case ZERO_2:
                case ZERO_3:
                case ZERO_4:
                    wts.add(WeaponType.LongSword);
                    wts.add(WeaponType.BigSword);
                    break;
                case BEAST_TAMER:
                case BEAST_TAMER_1:
                case BEAST_TAMER_2:
                case BEAST_TAMER_3:
                case BEAST_TAMER_4:
                    wts.add(WeaponType.Scepter);
                    break;
                case KINESIS_0:
                case KINESIS_1:
                case KINESIS_2:
                case KINESIS_3:
                case KINESIS_4:
                    wts.add(WeaponType.PsyLimiter);
                    break;
                case PATHFINDER_1:
                case PATHFINDER_2:
                case PATHFINDER_3:
                case PATHFINDER_4:
                    wts.add(WeaponType.AncientBow);
                    break;
                case HO_YOUNG:
                case HO_YOUNG_1:
                case HO_YOUNG_2:
                case HO_YOUNG_3:
                case HO_YOUNG_4:
                    wts.add(WeaponType.RitualFan);
                    break;
                case ADELE:
                case ADELE_1:
                case ADELE_2:
                case ADELE_3:
                case ADELE_4:
                    wts.add(WeaponType.Bladecaster);
                    break;
                case KAIN:
                case KAIN_1:
                case KAIN_2:
                case KAIN_3:
                case KAIN_4:
                    wts.add(WeaponType.Whispershot);
                    break;
            }
            return wts;
        }
    }

    public enum LoginJob {
        RESISTANCE(0, JobFlag.ENABLED, JobEnum.CITIZEN),
        EXPLORER(1, JobFlag.ENABLED, JobEnum.BEGINNER),
        CYGNUS(2, JobFlag.ENABLED, JobEnum.NOBLESSE),
        ARAN(3, JobFlag.ENABLED, JobEnum.LEGEND),
        EVAN(4, JobFlag.ENABLED, JobEnum.EVAN_NOOB),
        MERCEDES(5, JobFlag.ENABLED, JobEnum.MERCEDES),
        DEMON(6, JobFlag.ENABLED, JobEnum.DEMON),
        PHANTOM(7, JobFlag.ENABLED, JobEnum.PHANTOM),
        DUAL_BLADE(8, JobFlag.ENABLED, JobEnum.BEGINNER),
        MIHILE(9, JobFlag.ENABLED, JobEnum.NAMELESS_WARDEN),

        LUMINOUS(10, JobFlag.ENABLED, JobEnum.LUMINOUS),
        KAISER(11, JobFlag.ENABLED, JobEnum.KAISER),
        ANGELIC(12, JobFlag.ENABLED, JobEnum.ANGELIC_BUSTER),
        CANNONER(13, JobFlag.ENABLED, JobEnum.BEGINNER),
        XENON(14, JobFlag.ENABLED, JobEnum.XENON),
        ZERO(15, JobFlag.ENABLED, JobEnum.ZERO),
        SHADE(16, JobFlag.ENABLED, JobEnum.SHADE),
        PINK_BEAN(17, JobFlag.ENABLED, JobEnum.PINK_BEAN_0),
        KINESIS(18, JobFlag.ENABLED, JobEnum.KINESIS_0),
        CADENA(19, JobFlag.ENABLED, JobEnum.CADENA),

        ILLIUM(20, JobFlag.ENABLED, JobEnum.ILLIUM),
        ARK(21, JobFlag.ENABLED, JobEnum.ARK),
        PATHFINDER(22, JobFlag.ENABLED, JobEnum.PATHFINDER_1),
        HO_YOUNG(23, JobFlag.ENABLED, JobEnum.HO_YOUNG),
        ADELE(24, JobFlag.ENABLED, JobEnum.ADELE),
        KAIN(25, JobFlag.ENABLED, JobEnum.KAIN),
        LARA_PREEVENT(26, JobFlag.ENABLED, JobEnum.LARA),
        LARA(27, JobFlag.ENABLED, JobEnum.LARA),
        JETT(1000, JobFlag.ENABLED, JobEnum.BEGINNER),
        HAYATO(1001, JobFlag.ENABLED, JobEnum.HAYATO),

        KANNA(1002, JobFlag.ENABLED, JobEnum.KANNA),
        CHASE(1003, JobFlag.ENABLED, JobEnum.BEAST_TAMER),
        ;

        private final int jobType, flag;
        private JobEnum beginJob;

        LoginJob(int jobType, JobFlag flag, JobEnum beginJob) {
            this.jobType = jobType;
            this.flag = flag.getFlag();
            this.beginJob = beginJob;
        }

        public int getJobType() {
            return jobType;
        }

        public int getFlag() {
            return flag;
        }

        public JobEnum getBeginJob() {
            return beginJob;
        }

        public enum JobFlag {

            DISABLED(0),
            ENABLED(1);
            private final int flag;

            JobFlag(int flag) {
                this.flag = flag;
            }

            public int getFlag() {
                return flag;
            }
        }

        public static LoginJob getLoginJobById(int id) {
            return Arrays.stream(LoginJob.values()).filter(j -> j.getJobType() == id).findFirst().orElse(null);
        }
    }

    public static void encode(OutPacket outPacket) {
        outPacket.encodeByte(enableJobs);

        if (enableJobs) {
            outPacket.encodeByte(jobOrder);
            for (LoginJob loginJobId : LoginJob.values()) {
                outPacket.encodeByte(loginJobId.getFlag());
                outPacket.encodeShort(loginJobId.getFlag());
            }
        }
    }

    public static boolean isBeginnerJob(int jobId) {
        if (jobId == 7000 || jobId == 7100 || jobId == 7200) {
            return false;
        }
        switch (jobId) {
            case 8001:
            case 15001:
            case 15002:
            case 15000:
            case 6001:
            case 6002:
            case 4001:
            case 4002:
            case 3001:
            case 3002:
            case 2001:
            case 2002:
            case 2003:
            case 2004:
            case 2005:
            case 16001:
                return true;
            default:
                return jobId % 1000 == 0 || jobId / 100 == 8000 || jobId / 100 == 8001;
        }
    }

    public static int getJobLevel(int jobId) {
        int prefix;
        if (isBeginnerJob(jobId) || (jobId % 100 == 0) || jobId == 301 || jobId == 501 || jobId == 3101|| jobId == 508) {
            return 1;
        }
        if (isEvan(jobId)) {
            return getEvanJobLevel(jobId);
        }
        if (isDualBlade(jobId)) {
            prefix = jobId - 430;
            if (prefix <= 4) {
                prefix = prefix + 2;
            }
            return prefix;
        } else {
            prefix = jobId % 10;
        }
        return prefix <= 2 ? prefix + 2 : 0;
    }

    public static int getJobLevelForMasterSkillCheck(int jobId) {
        int prefix;
        if (isBeginnerJob(jobId) || (jobId % 100 == 0) || jobId == 501 || jobId == 3101 || jobId == 301|| jobId == 508) {
            return 1;
        }
        if (isEvan(jobId)) {
            return getEvanJobLevel(jobId);
        }
        if (isDualBlade(jobId)) {
            prefix = (jobId - 430) / 2;
            if (prefix <= 2) {
                prefix = prefix + 2;
            }
            return prefix;
        } else {
            prefix = jobId % 10;
        }
        return prefix <= 2 ? prefix + 2 : 0;
    }

    public static int getJobLevelByCharLevel(int job, int subJob, int charLevel) {
        if (JobConstants.isDualBlade(job) || (job == 400 && subJob == 1)) {
            if (charLevel <= 10) {
                return 0;
            } else if (charLevel <= 20) {
                return 1;
            } else if (charLevel <= 30) {
                return 2;
            } else if (charLevel <= 45) {
                return 3;
            } else if (charLevel <= 60) {
                return 4;
            } else if (charLevel <= 100) {
                return 5;
            } else {
                return 6;
            }
        }
        if (charLevel <= 10) {
            return 0;
        } else if (charLevel <= 30) {
            return 1;
        } else if (charLevel <= 60) {
            return 2;
        } else if (charLevel <= 100) {
            return 3;
        } else {
            return 4;
        }
    }

    private static int getEvanJobLevel(int jobId) {
        int result;
        switch (jobId) {
            case 2200:
            case 2210:
                result = 1;
                break;
            case 2211:
            case 2212:
            case 2213:
                result = 2;
                break;
            case 2214:
            case 2215:
            case 2216:
                result = 3;
                break;
            case 2217:
            case 2218:
                result = 4;
                break;
            default:
                result = 0;
                break;
        }
        return result;
    }

    public static int getJobByJobLevel(int job, byte jobLevel) {
        if (jobLevel == 0) {
            return JobConstants.JobEnum.getJobById(job).getBeginnerJobId();
        }
        int baseJob = job / 100;
        int path = (job / 10) % 10;
        return baseJob * 100 + path * 10 + (jobLevel - 1);
    }

    public static final List<Tuple<String, Integer>> CLASS_RANKING_MAP = new ArrayList<>() {{
        add(new Tuple<>("Hero", JobEnum.HERO.getJobId()));
        add(new Tuple<>("Paladin", JobEnum.PALADIN.getJobId()));
        add(new Tuple<>("Dark Knight", JobEnum.DARK_KNIGHT.getJobId()));
        add(new Tuple<>("Mage Fire Poison", JobEnum.FP_ARCHMAGE.getJobId()));
        add(new Tuple<>("Mage Ice Lightning", JobEnum.IL_ARCHMAGE.getJobId()));
        add(new Tuple<>("Bishop", JobEnum.BISHOP.getJobId()));
        add(new Tuple<>("Bow Master", JobEnum.BOWMASTER.getJobId()));
        add(new Tuple<>("Marksman", JobEnum.MARKSMAN.getJobId()));
        add(new Tuple<>("Pathfinder", JobEnum.PATHFINDER_4.getJobId()));
        add(new Tuple<>("Night Lord", JobEnum.NIGHT_LORD.getJobId()));
        add(new Tuple<>("Shadower", JobEnum.SHADOWER.getJobId()));
        add(new Tuple<>("Blade Master", JobEnum.BLADE_MASTER.getJobId()));
        add(new Tuple<>("Buccaneer", JobEnum.BUCCANEER.getJobId()));
        add(new Tuple<>("Corsair", JobEnum.CORSAIR.getJobId()));
        add(new Tuple<>("Cannon Master", JobEnum.CANNON_MASTER.getJobId()));
        add(new Tuple<>("Jett", JobEnum.JETT_4.getJobId()));
        add(new Tuple<>("Dawn Warrior", JobEnum.DAWN_WARRIOR_4.getJobId()));
        add(new Tuple<>("Blaze Wizard", JobEnum.BLAZE_WIZARD_4.getJobId()));
        add(new Tuple<>("Wind Archer", JobEnum.WIND_ARCHER_4.getJobId()));
        add(new Tuple<>("Night Walker", JobEnum.NIGHT_WALKER_4.getJobId()));
        add(new Tuple<>("Thunder Breaker", JobEnum.THUNDER_BREAKER_4.getJobId()));
        add(new Tuple<>("Aran", JobEnum.ARAN_4.getJobId()));
        add(new Tuple<>("Evan", JobEnum.EVAN_4.getJobId()));
        add(new Tuple<>("Mercedes", JobEnum.MERCEDES_4.getJobId()));
        add(new Tuple<>("Phantom", JobEnum.PHANTOM_4.getJobId()));
        add(new Tuple<>("Shade", JobEnum.SHADE_4.getJobId()));
        add(new Tuple<>("Luminous", JobEnum.LUMINOUS_4.getJobId()));
        add(new Tuple<>("Demon Slayer", JobEnum.DEMON_SLAYER_4.getJobId()));
        add(new Tuple<>("Demon Avenger", JobEnum.DEMON_AVENGER_4.getJobId()));
        add(new Tuple<>("Battle Mage", JobEnum.BATTLE_MAGE_4.getJobId()));
        add(new Tuple<>("Wild Hunter", JobEnum.WILD_HUNTER_4.getJobId()));
        add(new Tuple<>("Mechanic", JobEnum.MECHANIC_4.getJobId()));
        add(new Tuple<>("Blaster", JobEnum.BLASTER_4.getJobId()));
        add(new Tuple<>("Xenon", JobEnum.XENON_4.getJobId()));
        add(new Tuple<>("Hayato", JobEnum.HAYATO_4.getJobId()));
        add(new Tuple<>("Kanna", JobEnum.KANNA_4.getJobId()));
        add(new Tuple<>("Mihile", JobEnum.MIHILE_4.getJobId()));
        add(new Tuple<>("Kaiser", JobEnum.KAISER_4.getJobId()));
        add(new Tuple<>("Kain", JobEnum.KAIN_4.getJobId()));
        add(new Tuple<>("Cadena", JobEnum.CADENA_4.getJobId()));
        add(new Tuple<>("Angelic buster", JobEnum.ANGELIC_BUSTER_4.getJobId()));
        add(new Tuple<>("Zero", JobEnum.ZERO_4.getJobId()));
        add(new Tuple<>("Beast Tamer", JobEnum.BEAST_TAMER_4.getJobId()));
        add(new Tuple<>("Kinesis", JobEnum.KINESIS_4.getJobId()));
        add(new Tuple<>("Adele", JobEnum.ADELE_4.getJobId()));
        add(new Tuple<>("Illium", JobEnum.ILLIUM_4.getJobId()));
        add(new Tuple<>("Ark", JobEnum.ARK_4.getJobId()));
        add(new Tuple<>("Ho Young", JobEnum.HO_YOUNG_4.getJobId()));
        add(new Tuple<>("Lara", JobEnum.LARA_4.getJobId()));
    }};

    public static String getNameByJobId(int jobId) {
        return Objects.requireNonNull(CLASS_RANKING_MAP.stream().filter(t -> t.getRight() == jobId).findFirst().orElse(null)).getLeft();
    }

    private static Map<Integer, List<Integer>> VSkillsToGiveUponReachingV = new HashMap<>(){{
        put(JobEnum.HERO.getJobId(), new ArrayList<>(){{
            add(Hero.BURNING_SOUL_BLADE);
            add(Hero.WORLDREAVER);
            add(Hero.COMBO_INSTINCT);
            add(Hero.SWORD_ILLUSION);
        }});

        put(JobEnum.PALADIN.getJobId(), new ArrayList<>(){{
            add(Paladin.DIVINE_ECHO);
            add(Paladin.HAMMERS_OF_THE_RIGHTEOUS);
            add(Paladin.GRAND_GUARDIAN);
            add(Paladin.MIGHTY_MJOLNIR);
        }});

        put(JobEnum.DARK_KNIGHT.getJobId(), new ArrayList<>(){{
            add(DarkKnight.SPEAR_OF_DARKNESS);
            add(DarkKnight.RADIANT_EVIL);
            add(DarkKnight.CALAMITOUS_CYCLONE);
            add(DarkKnight.DARKNESS_AURA);
        }});


        put(JobEnum.BOWMASTER.getJobId(), new ArrayList<>(){{
            add(BowMaster.STORM_OF_ARROWS);
            add(BowMaster.INHUMAN_SPEED);
            add(BowMaster.QUIVER_BARRAGE);
            add(BowMaster.SILHOUETTE_MIRAGE);
        }});

        put(JobEnum.MARKSMAN.getJobId(), new ArrayList<>(){{
            add(Marksman.PERFECT_SHOT);
            add(Marksman.SPLIT_SHOT);
            add(Marksman.SURGE_BOLT);
            add(Marksman.REPEATING_CROSSBOW_CARTRIDGE);
        }});

        put(JobEnum.PATHFINDER_4.getJobId(), new ArrayList<>(){{
            add(Pathfinder.NOVA_BLAST);
            add(Pathfinder.RAVEN_TEMPEST);
            add(Pathfinder.OBSIDIAN_BARRIER_NONE);
            add(Pathfinder.RELIC_UNBOUND);
        }});

        put(JobEnum.BISHOP.getJobId(), new ArrayList<>(){{
            add(Bishop.BENEDICTION);
            add(Bishop.ANGEL_OF_BALANCE_BENEVOLENCE);
            add(Bishop.PEACEMAKER_TRAVEL);
            add(Bishop.DIVINE_PUNIHSMENT);
        }});

        put(JobEnum.FP_ARCHMAGE.getJobId(), new ArrayList<>(){{
            add(FirePoison.DOT_PUNISHER);
            add(FirePoison.POISON_NOVA);
            add(FirePoison.ELEMENTAL_FURY);
            add(FirePoison.POISON_CHAIN_1);
        }});

        put(JobEnum.IL_ARCHMAGE.getJobId(), new ArrayList<>(){{
            add(IceLightning.ICE_AGE);
            add(IceLightning.BOLT_BARRAGE);
            add(IceLightning.SPIRIT_OF_SNOW);
            add(IceLightning.JUPITER_THUNDER);
        }});

        put(JobEnum.NIGHT_LORD.getJobId(), new ArrayList<>(){{
            add(NightLord.THROWING_STAR_BARRAGE);
            add(NightLord.SHURRIKANE);
            add(NightLord.DARK_LORDS_OMEN);
            add(NightLord.THROW_BLASTING_BUFF);
        }});

        put(JobEnum.SHADOWER.getJobId(), new ArrayList<>(){{
            add(Shadower.SHADOW_ASSAULT);
            add(Shadower.TRICKBLADE);
            add(Shadower.SONIC_BLOW);
            add(Shadower.SLASH_SHADOW_FORMATION);
        }});

        put(JobEnum.BLADE_MASTER.getJobId(), new ArrayList<>(){{
            add(BladeMaster.BLADE_TEMPEST);
            add(BladeMaster.BLADES_OF_DESTINY);
            add(BladeMaster.BLADE_TORNADO);
            add(BladeMaster.HAUNTED_EDGE);
        }});

        put(JobEnum.BUCCANEER.getJobId(), new ArrayList<>(){{
            add(Buccaneer.MELTDOWN);
            add(Buccaneer.LORD_OF_THE_DEEP);
            add(Buccaneer.SERPENT_VORTEX);
            add(Buccaneer.HOWLING_FIST);
        }});

        put(JobEnum.CORSAIR.getJobId(), new ArrayList<>(){{
            add(Corsair.BULLET_BARRAGE);
            add(Corsair.TARGET_LOCK);
            add(Corsair.NAUTILUS_ASSAULT);
            add(Corsair.DEATH_TRIGGER);
        }});

        put(JobEnum.CANNON_MASTER.getJobId(), new ArrayList<>(){{
            add(Cannoneer.BIG_HUGE_GIGANTIC_ROCKET);
            add(Cannoneer.NUCLEAR_OPTION);
            add(Cannoneer.SPECIAL_MONKEY_SIDEKICK);
            add(Cannoneer.POOLMAKER_BUFF);
        }});

        put(JobEnum.JETT_4.getJobId(), new ArrayList<>(){{
            add(Jett.GRAVITY_CRUSH);
            add(Jett.SUBORBITAL_SUMMON_BIG);
            add(Jett.ALLIED_FURY);
            add(Jett.ANTI_GRAVITY_CYCLE_SUMMON);
        }});

        put(JobEnum.DAWN_WARRIOR_4.getJobId(), new ArrayList<>(){{
            add(DawnWarrior.CELESTIAL_DANCE);
            add(DawnWarrior.RIFT_OF_DAMNATION);
            add(DawnWarrior.SOUL_ECLIPSE );
            add(DawnWarrior.FLARE_SLASH_SUN);
        }});

        put(JobEnum.BLAZE_WIZARD_4.getJobId(), new ArrayList<>(){{
            add(BlazeWizard.ORBITAL_INFERNO);
            add(BlazeWizard.SAVAGE_FLAME);
            add(BlazeWizard.INFERNO_SPHERE);
            add(BlazeWizard.SALAMANDER_MISCHIEF);
        }});

        put(JobEnum.WIND_ARCHER_4.getJobId(), new ArrayList<>(){{
            add(WindArcher.HOWLING_GALE_1);
            add(WindArcher.MERCILESS_WINDS);
            add(WindArcher.GALE_BARRIER);
            add(WindArcher.VORTEX_SPHERE);
        }});

        put(JobEnum.NIGHT_WALKER_4.getJobId(), new ArrayList<>(){{
            add(NightWalker.SHADOW_SPEAR);
            add(NightWalker.GREATER_DARK_SERVANT);
            add(NightWalker.SHADOW_BITE);
            add(NightWalker.RAPID_THROW);
        }});

        put(JobEnum.THUNDER_BREAKER_4.getJobId(), new ArrayList<>(){{
            add(ThunderBreaker.LIGHTNING_CASCADE);
            add(ThunderBreaker.SHARK_TORPEDO);
            add(ThunderBreaker.TRIDENT_STRIKE);
            add(ThunderBreaker.LIGHTNING_SPEAR_MULTISTRIKE_SKILL);
        }});

        put(JobEnum.ARAN_4.getJobId(), new ArrayList<>(){{
            add(Aran.MAHAS_FURY_BUFF);
            add(Aran.MAHAS_CARNAGE);
            add(Aran.FENRIR_CRASH);
            add(Aran.BLIZZARD_TEMPEST);
        }});

        put(JobEnum.EVAN_4.getJobId(), new ArrayList<>(){{
            add(Evan.ELEMENTAL_BARRAGE);
            add(Evan.DRAGON_SLAM);
            add(Evan.ELEMENTAL_RADIANCE);
            add(Evan.SPIRAL_OF_MANA);
        }});

        put(JobEnum.MERCEDES_4.getJobId(), new ArrayList<>(){{
            add(Mercedes.SPIRIT_OF_ELLUEL);
            add(Mercedes.SYLVIDIAS_FLIGHT);
            add(Mercedes.IRKILLAS_WRATH);
            add(Mercedes.ROYAL_KNIGHTS);
        }});

        put(JobEnum.PHANTOM_4.getJobId(), new ArrayList<>(){{
            add(Phantom.LUCK_OF_THE_DRAW);
            add(Phantom.ACE_IN_THE_HOLE);
            add(Phantom.PHANTOMS_MARK);
            add(Phantom.RIFT_BREAK_TELEPORT);
        }});

        put(JobEnum.SHADE_4.getJobId(), new ArrayList<>(){{
            add(Shade.SPIRIT_FLOW);
            add(Shade.SPIRITGATE_SUMMONER);
            add(Shade.TRUE_SPIRIT_CLAW);
            add(Shade.SMASHING_MULTIPUNCH_KEYDOWN);
        }});

        put(JobEnum.LUMINOUS_4.getJobId(), new ArrayList<>(){{
            add(Luminous.DOOR_OF_LIGHT);
            add(Luminous.AETHER_CONDUIT_L);
            add(Luminous.BAPTISM_OF_LIGHT_AND_DARKNESS);
            add(Luminous.LIBERATION_ORB);
        }});

        put(JobEnum.DEMON_SLAYER_4.getJobId(), new ArrayList<>(){{
            add(DemonSlayer.DEMON_AWAKENING);
            add(DemonSlayer.SPIRIT_OF_RAGE);
            add(DemonSlayer.ORTHRUS);
            add(DemonSlayer.DEMON_BANE);
        }});

        put(JobEnum.DEMON_AVENGER_4.getJobId(), new ArrayList<>(){{
            add(DemonAvenger.DEMONIC_FRENZY);
            add(DemonAvenger.DEMONIC_BLAST_HOLDDOWN);
            add(DemonAvenger.DIMENSIONAL_SWORD_SUMMON);
            add(DemonAvenger.REVENANT);
        }});

        put(JobEnum.BATTLE_MAGE_4.getJobId(), new ArrayList<>(){{
            add(BattleMage.AURA_SCYTHE);
            add(BattleMage.ALTAR_OF_ANNIHILATION);
            add(BattleMage.GRIM_HARVEST);
            add(BattleMage.ABYSSAL_LIGHTNING);
        }});

        put(JobEnum.WILD_HUNTER_4.getJobId(), new ArrayList<>(){{
            add(WildHunter.JAGUAR_STORM);
            add(WildHunter.PRIMAL_FURY);
            add(WildHunter.PRIMAL_GRENADE);
            add(WildHunter.WILD_ARROW_BLAST_TYPE_X);
        }});

        put(JobEnum.MECHANIC_4.getJobId(), new ArrayList<>(){{
            add(Mechanic.DOOMSDAY_DEVICE);
            add(Mechanic.MOBILE_MISSILE_BATTERY);
            add(Mechanic.FULL_METAL_BARRAGE);
            add(Mechanic.MECHA_CARRIER);
        }});

        put(JobEnum.XENON_4.getJobId(), new ArrayList<>(){{
            add(Xenon.OMEGA_BLASTER);
            add(Xenon.CORE_OVERLOAD_BUFF);
            add(Xenon.HYPOGRAM_FIELD_FUSION);
            add(Xenon.PHOTON_RAY);
        }});

        put(JobEnum.BLASTER_4.getJobId(), new ArrayList<>(){{
            add(Blaster.ROCKET_PUNCH);
            add(Blaster.GATLING_PUNCH);
            add(Blaster.BULLET_BLAST);
            add(Blaster.AFTERIMAGE_SHOCK_1);
        }});

        put(JobEnum.HAYATO_4.getJobId(), new ArrayList<>(){{
            add(Hayato.BATTOUJUTSU_ZANKOU);
            add(Hayato.IAIJUTSU_PHANTOM_BLADE);
            add(Hayato.BATTOUJUTSU_ULTIMATE_WILL);
            add(Hayato.INSTANT_SLICE);
        }});

        put(JobEnum.KANNA_4.getJobId(), new ArrayList<>(){{
            add(Kanna.YUKI_MUSUME_SHOUKAN);
            add(Kanna.SPIRITS_DOMAIN);
            add(Kanna.LIBERATED_SPIRIT_CIRCLE_SMALL);
            add(Kanna.YAKSHA_GHOST_GREAT_ONI_LORD);
        }});

        put(JobEnum.MIHILE_4.getJobId(), new ArrayList<>(){{
            add(Mihile.SHIELD_OF_LIGHT);
            add(Mihile.SWORD_OF_LIGHT);
            add(Mihile.RADIANT_SOUL);
            add(Mihile.LIGHT_OF_COURAGE_BUFF);
        }});

        put(JobEnum.KAISER_4.getJobId(), new ArrayList<>(){{
            add(Kaiser.NOVA_GUARDIANS);
            add(Kaiser.BLADEFALL_ATTACK);
            add(Kaiser.DRACO_SURGE_ATTACK);
            add(Kaiser.DRAGON_BLAZE);
        }});

        put(JobEnum.KAIN_4.getJobId(), new ArrayList<>(){{
            add(Kain.DRAGON_BURST);
            add(Kain.FATAL_BLITZ);
            add(Kain.THANATOS_DESCENT);
            add(Kain.GRIP_OF_AGONY);
        }});

        put(JobEnum.CADENA_4.getJobId(), new ArrayList<>(){{
            add(Cadena.APOCALYPSE_CANNON_SUMMON);
            add(Cadena.CHAIN_ARTS_VOID_STRIKE_BUFF);
            add(Cadena.CHAIN_ARTS_MAELSTROM);
            add(Cadena.MUSCLE_MEMORY_FINALE);
        }});

        put(JobEnum.ANGELIC_BUSTER_4.getJobId(), new ArrayList<>(){{
            add(AngelicBuster.SPARKLE_BURST);
            add(AngelicBuster.SUPER_STAR_SPOTLIGHT);
            add(AngelicBuster.MIGHTY_MASCOT);
            add(AngelicBuster.TRINITY_FUSION);
        }});

        put(JobEnum.ZERO_4.getJobId(), new ArrayList<>(){{
            add(Zero.CHRONO_BREAK);
            add(Zero.TWIN_BLADES_OF_TIME_START);
            add(Zero.SHADOW_FLASH_ALPHA_TILE);
            add(Zero.EGO_WEAPON_ALPHA);
        }});

        put(JobEnum.BEAST_TAMER_4.getJobId(), new ArrayList<>(){{
            add(BeastTamer.CHAMP_CHARGE);
            add(BeastTamer.CUB_CAVALRY);
            add(BeastTamer.AERIAL_RELIEF);
            add(BeastTamer.THE_GREATEST_SHOW_ON_MAPLE_WORLD_IS_COMING);
        }});

        put(JobEnum.KINESIS_4.getJobId(), new ArrayList<>(){{
            add(Kinesis.PSYCHIC_TORNADO);
            add(Kinesis.MIND_OVER_MATTER);
            add(Kinesis.PSYCHIC_SHOCKWAVE);
            add(Kinesis.LAW_OF_GRAVITY);
        }});

        put(JobEnum.ADELE_4.getJobId(), new ArrayList<>(){{
            add(Adele.RUIN);
            add(Adele.INFINITE);
            add(Adele.LEGACY_RESTORATION);
            add(Adele.STORM);
        }});

        put(JobEnum.ILLIUM_4.getJobId(), new ArrayList<>(){{
            add(Illium.CRYSTAL_IGNITION);
            add(Illium.TEMPLAR_KNIGHT);
            add(Illium.CRYSTALLINE_SPIRIT);
            add(Illium.CRYSTAL_GATE);
        }});

        put(JobEnum.ARK_4.getJobId(), new ArrayList<>(){{
            add(Ark.INFINITY_SPELL);
            add(Ark.ABYSSAL_RECALL);
            add(Ark.NIGHTMARES_ESCAPE);
            add(Ark.ENDLESSLY_STARVING_BEAST);
        }});

        put(JobEnum.LARA_4.getJobId(), new ArrayList<>(){{
            add(Lara.BIG_STRETCH);
            add(Lara.LANDS_CONNECTION);
            add(Lara.SURGING_ESSENCE);
            add(Lara.WINDING_MOUNTAIN_RIDGE_1);
        }});

        put(JobEnum.HO_YOUNG_4.getJobId(), new ArrayList<>(){{
            add(HoYoung.HYPER_CLONE_RAMPAGE_BUFF);
            add(HoYoung.MOUNTAIN_SPIRIT);
            add(HoYoung.GODS_COMING);
            add(HoYoung.THREE_PATHS_APPARITION_BUFF);
        }});
    }};

    public static List<Integer> GetVSkillsToGiveUponReachingV(int jobId) {
        return  VSkillsToGiveUponReachingV.get(jobId);
    }
}
