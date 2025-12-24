package net.swordie.ms.constants;

import net.swordie.ms.client.partyquests.towerofoz.OzPillType;
import net.swordie.ms.util.Position;
import net.swordie.ms.util.Rect;
import net.swordie.ms.util.Util;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Created on 03/07/2021.
 *
 * @author Asura
 */
public class OzConstants {

    public static final int BROKEN_BOX_PIECES_FROM_RING = 3;
    public static final int OZ_POINTS_FROM_POUCH_MIN = 25;
    public static final int OZ_POINTS_FROM_POUCH_MAX = 125;
    public static final int CLEVER_LADY_HOTLINE = 2432461;
    public static final int MAX_FLOORS_PER_DAY = 200;
    public static final int MAX_PILL_SLOTS = 5;
    public static final int START_TIME = 10 * 60;
    public static final int OZ_LOBBY = 992_000_000;

    public static final Map<Integer, OzPillType> PILLS = new HashMap<>() {{
        put(2432438, OzPillType.Prescription_ReallyNotVeryStupidAtAll); //  Prescription Really Not Very Stupid At All Pill)
        put(2432439, OzPillType.Prescription_LessStupid); //  Prescription Less Stupid Pill)
        put(2432440, OzPillType.Prescription_KindaStupid); //  Prescription Kinda Stupid Pill)
        put(2432441, OzPillType.Prescription_PrettyStupid); //  Prescription Pretty Stupid Pill)
        put(2432442, OzPillType.Prescription_PantsOnHeadStupid); //  Prescription Pants-On-Head Stupid Pill)
        put(2432443, OzPillType.Generic_ReallyNotVeryStupidAtAll); //  Generic Really Not Very Stupid At All Pill)
        put(2432444, OzPillType.Generic_LessStupid); //  Generic Less Stupid Pill)
        put(2432445, OzPillType.Generic_KindaStupid); //  Generic Kinda Stupid Pill)
        put(2432446, OzPillType.Generic_PrettyStupid); //  Generic Pretty Stupid Pill)
        put(2432447, OzPillType.Generic_PantsOnHeadStupid); //  Generic Pants-On-Head Stupid Pill)
    }};

    public static final Map<Integer, Integer> UNLOCK_SLOT_COST = new HashMap<>() {{
        put(1, 0);
        put(2, 8000);
        put(3, 28000);
        put(4, 55000);
        put(5, 80000);
    }};

    private static final Map<Integer, Integer> OZ_POINT_PER_FLOOR = new HashMap<>() {{
        put(1,     4);
        put(2,    12);
        put(3,    14);
        put(4,    16);

        put(6,    24);
        put(7,    29);
        put(8,    35);
        put(9,    46);
        put(10,   75);
        put(11,   58);
        put(12,   73);
        put(13,   77);
        put(14,   96);

        put(16,  112);
        put(17,  137);
        put(18,  139);
        put(19,  169);
        put(20,  255);
        put(21,  186);
        put(22,  223);
        put(23,  243);
        put(24,  264);

        put(26,  280);
        put(27,  331);
        put(28,  323);
        put(29,  380);
        put(30,  555);
        put(31,  394);
        put(32,  419);
        put(33,  489);
        put(34,  472);

        put(36,  580);
        put(37,  557);
        put(38,  587);
        put(39,  679);
        put(40,  975);
        put(41,  750);
        put(42,  715);
        put(43,  749);
        put(44,  862);

        put(46,  656);
        put(47,  982);
        put(48, 1024);
        put(49, 1067);
        put(50, 2020);
    }};

    public static int getUnlockCost(int slotNumber) {
        return UNLOCK_SLOT_COST.getOrDefault(slotNumber, 0);
    }

    public static int getExpByFloor(int floor) {
        return (floor * 30_000) + Util.getRandom(150, 5530); // random numbers atm
    }

    private static boolean isTowerBoosterFloor(int floor) {
        return floor == 7 || floor == 9 || floor == 10
                || floor == 13 || floor == 18 || floor == 19
                || floor == 20 || floor == 28 || floor == 29
                || floor == 30 || floor == 32 || floor == 33
                || floor == 38 || floor == 40 || floor == 47
                || floor == 48 || floor == 49 || floor == 50;
    }

    public static int getOzPointsByFloor(int floor, int towerBoostBonusR) {
        var sum = 0;
        for (var i = 1; i <= floor; i++) {
            var ozPointByFloor = OZ_POINT_PER_FLOOR.getOrDefault(i, 0);
            if (towerBoostBonusR > 0 && isTowerBoosterFloor(i) && ozPointByFloor > 0) {
                ozPointByFloor += (int) ((ozPointByFloor * towerBoostBonusR) / 100D);
            }
            sum += ozPointByFloor;
        }

        return sum;
    }

    public static int getRewardItemByFloor(int floor) {
        if (floor <= 5) {
            return ALICIAS_RING_BOX_10;

        } else if (floor <= 10) {
            return ALICIAS_RING_BOX_9;

        } else if (floor <= 15) {
            return ALICIAS_RING_BOX_8;

        } else if (floor <= 20) {
            return ALICIAS_RING_BOX_7;

        } else if (floor <= 25) {
            return ALICIAS_RING_BOX_6;

        } else if (floor <= 30) {
            return ALICIAS_RING_BOX_5;

        } else if (floor <= 35) {
            return ALICIAS_RING_BOX_4;

        } else if (floor <= 40) {
            return ALICIAS_RING_BOX_3;

        } else if (floor <= 45) {
            return ALICIAS_RING_BOX_2;

        } else if (floor <= 50) {
            return ALICIAS_RING_BOX_1;
        }

        return ALICIAS_RING_BOX_10;
    }

    public static final int ALICIAS_RING_BOX_1 = 2028263; // best
    public static final int ALICIAS_RING_BOX_2 = 2028264;
    public static final int ALICIAS_RING_BOX_3 = 2028265;
    public static final int ALICIAS_RING_BOX_4 = 2028266;
    public static final int ALICIAS_RING_BOX_5 = 2028267;
    public static final int ALICIAS_RING_BOX_6 = 2028268;
    public static final int ALICIAS_RING_BOX_7 = 2028269;
    public static final int ALICIAS_RING_BOX_8 = 2028270;
    public static final int ALICIAS_RING_BOX_9 = 2028271;
    public static final int ALICIAS_RING_BOX_10 = 2028272; // worst


    // Tower of Oz Medal of Honor
    public static final int TOWER_OF_OZ_MEDAL_OF_HONOR = 2433840;


    // Medals
    // Medals are dropped in the Rest floor (at a chance) and dropped by the bosses
    public static final int TOURIST_OF_OZ = 1142686;
    public static final int WEBMASTER = 1142687;
    public static final int CAMPER_OF_OZ = 1142688;
    public static final int HAVE_A_HEART = 1142689;
    public static final int TRAVELER_OF_OZ = 1142690;
    public static final int COURAGEOUS = 1142691;
    public static final int EXPERT_OF_OZ = 1142692;
    public static final int BRAINY = 1142693;
    public static final int MASTER_OF_OZ = 1142694;
    public static final int NO_PLACE_LIKE_HOME = 1142695;

    public static final int F5_MEDAL_DROP_RATE = 90;
    public static final int F15_MEDAL_DROP_RATE = 70;
    public static final int F25_MEDAL_DROP_RATE = 60;
    public static final int F35_MEDAL_DROP_RATE = 50;
    public static final int F45_MEDAL_DROP_RATE = 50;




    public static final String UNLOCKED_FLOOR = "UF"; // Unlocked Floor #
    public static final String CURRENT_FLOOR = "CF"; // Current Floor #
    public static final String MAX_TIME = "MT"; // Max time allow
    public static final String DAMAGE_DEALT = "DmgDealt"; // Amount of total damage dealt
    public static final String KILL_COUNT = "KillCount"; // Amount of mobs killed
    public static final String ITEMS_LOOTED = "ItemsLooted"; // Amount of items looted
    public static final String ITEMS_DROPPED = "ItemsDropped"; // Amount of items dropped


    // F1
    public static final int F1_KILL_COUNT = 100;
    public static final long F1_DAMAGE_DEALT = 50_000_000L;

    // F2
    public static final int F2_CARD_BREAKER_ITEM_ID = 2432448;
    public static final String F2_CURRENT_CARD_COLOUR = "F2_CCC"; // current card picked up by the instance.
    public static final String F2_CURRENT_CARD_NUMBER = "F2_CCN"; // current card picked up by the instance.
    public static final String F2_SEALS_CLEARED = "F2_SC"; // amount of seals that have been completed.

    public static final int BLUE_REACTOR = 9260004;
    public static final int YELLOW_REACTOR = 9260005;
    public static final int RED_REACTOR = 9260006;
    public static final int GREEN_REACTOR = 9260007;

    // F3
    public static final int F3_EGG = 1000; // 1000 eggs collected.
    public static final String F3_EGG_PROP = "F3_Egg"; // current amount of eggs collected.
    public static final int F3_ANCIENT_BLUE_TURTLE_EGG = 4009237;
    public static final int F3_ANCIENT_ORANGE_TURTLE_EGG = 4009238;
    public static final int ANCIENT_BLUE_TURTLE = 9309042;
    public static final int ANCIENT_ORANGE_TURTLE = 9309043;

    // F4
    public static final String F4_CUR_SIDE = "F4_Side"; // current side the tower is leaning.
    public static final String F4_BALANCE_POINTS = "F4_BP"; // current balance points.
    public static final Rect F4_RIGHT_SIDE_RECT = new Rect(new Position(650, -500), new Position(2000, 500));
    public static final int F4_BALANCE_POINTS_REQ = 100;
    public static final int F4_BALANCE_POINTS_PER_MOB = 5;

    // F5
    // Rest Floor

    // F6
    public static final int F6_KILL_COUNT = 700;
    public static final int SLIME = 9309001;
    public static final int KING_SLIME = 9309127;
    public static final long KING_SLIME_HP = 1_000_000_000L;
    public static final int KING_SLIME_SPAWN_PROP = 2;
    public static final int KING_SLIME_MULTIPLIER = 30;

    // F7
    // Jump Quest

    // F8
    public static final int F8_KILL_COUNT = 200;

    // F9
    public static final String F9_ORDER = "F9_ORDER"; // puzzle order.
    public static final String F9_CORRECT_PORTALS = "F9_CPORTALS"; // amount of portals completed (fly hack check).

    // F10
    public static final int GIANT_SPIDER_TEMPLATE_ID = 9309201;
    public static final long GIANT_SPIDER_HP = 50_000_000L;

    // F11
    public static final int F11_KILL_COUNT = 500;

    // F12
    // JumpQuest

    // F13
    public static final String F13_ROCK_HITS = "F13_RH"; // Holds the amount of mobs have hit the rock.
    public static final int F13_MAX_ROCK_HITS = 5;
    public static final int F13_KILL_COUNT = 80;

    public static final long F13_MOB_HP = 10_000_000L;
    public static final int BLUE_FLOWER_COW = 9309048;
    public static final int GREEN_FLOWER_COW = 9309049;
    public static final int WHITE_THORNY_BEAR = 9309104;
    public static final int BROWN_THORNY_BEAR = 9309105;

    public static final int METEOR_GREEN_ATOM_EXECUTION_DELAY = 1000;
    public static final int METEOR_GREEN_ATOM_DAMAGE = 50;
    public static final int METEOR_GREEN_ATOM_VELOCITY = 3;
    public static final int METEOR_GREEN_ATOM_AMOUNT = 10;
    public static final int METEOR_GREEN_ATOM_PROP = 40;

    public static final int METEOR_BLUE_ATOM_EXECUTION_DELAY = 1000;
    public static final int METEOR_BLUE_ATOM_DAMAGE = 95;
    public static final int METEOR_BLUE_ATOM_VELOCITY = 3;
    public static final int METEOR_BLUE_ATOM_AMOUNT = 8;
    public static final int METEOR_BLUE_ATOM_PROP = 40;

    // F14
    public static final int YELLOW_MUSHROOM_BAT = 9309116;
    public static final int RED_MUSHROOM_BAT = 9309117;
    public static final int YELLOW_MUSHROOM_BAT_2 = 9309118; // Different Flight Pattern
    public static final int RED_MUSHROOM_BAT_2 = 9309119; // Different Flight Pattern
    public static final int F14_MOBS_SPAWNED = 5; // the mobs above are spawned 5x (so 10 mobs)
    public static final Rect F14_SPAWN_RECT = new Rect(-300, -300, 300, 300);

    // F15
    // Rest Floor

    // F16
    public static final int F16_KILL_COUNT = 400;

    // F17
    // JumpQuest

    // F18
    public static final String F18_COCONUT_GATHERED = "F18_CG"; // Holds amount of Coconuts gathered.
    public static final int COCONUT_REQ = 10;
    public static final int COCONUT = 2432476;
    public static final int CLANG = 9309006;
    public static final int LORANG = 9309007;
    public static final long F18_MOB_HP = 20_000_000L;

    // F19
    // Jump Quest

    // F20
    public static final int TIN_WOODMAN = 9309205;
    public static final long TIN_WOODMAN_HP = 50_000_000L;

    // F21
    public static final int ELIZA = 9309100;
    public static final long ELIZA_HP = 30_000_000L;
    public static final int ELIZA_SPAWN_PROP = 3;

    // F22
    // JumpQuest

    // F23
    public static final Rect F23_HINT00_RECT = new Rect(-250, -500, 1075, 500);
    public static final Rect F23_HINT01_RECT = new Rect(1075, -500, 2000, 500);
    public static final Rect F23_HINT02_RECT = new Rect(2000, -500, 3300, 500);

    // F24
    // Music Floor

    // F25
    // Rest Floor

    // F26
    public static final int ORANGE_SLIME_LIQUID = 4009236;
    public static final int ORANGE_SLIME_LIQUID_REQ = 10;
    public static final int ORANGE_ANCIENT_SLIME = 9309035;
    public static final int SPAWNED_PER_ALTAR = 50;
    public static final int F26_KILL_COUNT = 500;

    // F27
    // JumpQuest

    // F28
    public static final String F28_KILL_COUNT_BELLAMOA = "F28_KC_Bellamoa"; // Holds amount of Bellamoa killed.
    public static final String F28_KILL_COUNT_PLEAD = "F28_KC_Plead"; // Holds amount of Plead killed.
    public static final int BELLAMOA = 9309014;
    public static final int PLEAD = 9309015;
    public static final int F28_KILL_COUNT = 20;
    public static final int F28_MOBS_SPAWNED_PER_ACTIVATION = 5;

    // F29
    public static final String F29_CRYSTAL_REQ = "F29_CR"; // Holds the amount of Red Sand Crystals required (is random between 4 & 7).
    public static final int RED_SAND_CRYSTAL = 4034077;
    public static final int RED_SAND_POWDER = 4009232;
    public static final Rect F29_DROP_RECT = new Rect(new Position(330, -600), new Position(650, -480));

    // F30
    public static final int COWARDLY_LION = 9309200;
    public static final long COWARDLY_LION_HP = 90_000_000L;
    public static final String F30_INITED = "F30_Inited"; // Check if Floor30 has been initialised.

    // F31
    public static final int F31_KILL_COUNT = 300;
    public static final int BLUE_INSECTIVORE_SLIME = 9309040;
    public static final int YELLOW_INSECTIVORE_SLIME = 9309041;
    public static final int FAIRY = 9309129;
    public static final long FAIRY_HP = 40_000_000L;
    public static final int FAIRY_SPAWN_PROP = 1;
    public static final List<Position> FAIRY_SPAWN_POS_LIST = new ArrayList<>() {{
        add(new Position(-1250, -630));
        add(new Position(-1000, -1230));
        add(new Position(-500, -750));
        add(new Position(-400, -1350));
    }};

    // F32
    public static final int Y_POS = -1100; // -400

    // F33
    public static final int DIRECTION_SIGN = 9260000;
    public static final int COUNTERCLOCKWISE_LABYRINTH_KEY = 4009233;
    public static final int CLOCKWISE_LABYRINTH_KEY = 4009231;
    public static final int KEYS_GIVEN_PER_TELEPORT = 2;
    public static final Rect F33_RECT = new Rect(-100, -50, 50, 100);

    // F34
    public static final int YELLOW_CURLY_COW = 9309038;
    public static final int PURPLE_CURLY_COW = 9309039;
    public static final int YELLOW_LEATHER = 4009234;
    public static final int PURPLE_LEATHER = 4009235;
    public static final int F34_ITEMS_LOOTED = 10;

    // F35
    // Rest Floor

    // F36
    public static final String F36_CUR_STAGE = "F36_CS"; // Holds the current stage within Floor 36.
    public static final String F36_PATTERN = "F36_P"; // Holds the correct pattern calculated by the server.
    public static final String F36_USER_PATTERN = "F36_UP"; // Holds the pattern the user has entered.

    // F37
    public static final int F37_KILL_COUNT = 150;
    public static final String F37_MEERKAT_KILLS = "F37_MK"; // Holds the kill count for that specific mob.
    public static final String F37_KIYO_KILLS = "F37_KK"; // Holds the kill count for that specific mob.
    public static final String F37_SAND_RAT_KILLS = "F37_SRK"; // Holds the kill count for that specific mob.
    public static final String F37_SCORPION_KILLS = "F37_SK"; // Holds the kill count for that specific mob.
    public static final int MEERKAT = 9309016;
    public static final int KIYO = 9309017;
    public static final int SAND_RAT = 9309018;
    public static final int SCORPION = 9309019;

    // F38
    public static final String F38_CUR_MOB = "F38_CM"; // holds the currently selected mob to be eliminated.
    public static final String F38_CUR_DARKNESS = "F38_CD"; // Holds the current darkness level.
    public static final String F38_INITED = "F38_Inited"; // Check if Floor38 has been initialised.
    public static final int DARKNESS_START_LEVEL = 1000;
    public static final int DARKNESS_DEC_PER_MOB = 10;
    public static final int F38_SWITCH_MOB_PROP = 5;

    public static final int PEACH_MONKEY = 9309020;
    public static final int GRIZZLY = 9309021;
    public static final int PANDA = 9309022;

    // F39
    public static final String F39_CUR_STAGE = "F39_CS";

    // F40
    public static final int SCARECROW = 9309203;
    public static final long SCARECROW_HP = 35_000L;

    // F41
    // JumpQuest

    // F42
    public static final String F42_BEETLE_KILLS = "F37_BK"; // Holds the kill count for that specific mob.
    public static final String F42_DUAL_BEETLE_KILLS = "F37_DBK"; // Holds the kill count for that specific mob.
    public static final String F42_HARP_KILLS = "F37_HK"; // Holds the kill count for that specific mob.
    public static final String F42_BLOOD_HARP_KILLS = "F37_BHK"; // Holds the kill count for that specific mob.
    public static final int BEETLE = 9309023;
    public static final int DUAL_BEETLE = 9309024;
    public static final int HARP = 9309025;
    public static final int BLOOD_HARP = 9309026;
    public static final int F42_KILL_COUNT = 30;
    public static final Rect F42_METEOR_RECT = new Rect(-1000, -1500, 4500, 1000);
    // Also used in F42
/*
    public static final int METEOR_GREEN_ATOM_EXECUTION_DELAY = 1000;
    public static final int METEOR_GREEN_ATOM_DAMAGE = 50;
    public static final int METEOR_GREEN_ATOM_VELOCITY = 3;
    public static final int METEOR_GREEN_ATOM_AMOUNT = 10;
    public static final int METEOR_GREEN_ATOM_PROP = 40;

    public static final int METEOR_BLUE_ATOM_EXECUTION_DELAY = 1000;
    public static final int METEOR_BLUE_ATOM_DAMAGE = 95;
    public static final int METEOR_BLUE_ATOM_VELOCITY = 3;
    public static final int METEOR_BLUE_ATOM_AMOUNT = 8;
    public static final int METEOR_BLUE_ATOM_PROP = 40;
*/

    // F43 - Not a Quiz. But Kill Mobs
    // JumpQuest

    // F44
    // JumpQuest

    // F45
    // Rest Floor

    // F46
    public static final int F46_KILL_COUNT = 300;

    // F47
    // JumpQuest

    // F48
    // JumpQuest

    // F49 - Not a Quiz. But Rest Floor
    // Rest Floor

    // F50 - Boss
    public static final int DOROTHY = 9309207;
    public static final long DOROTHY_HP = BossConstants.DOROTHY_HP;

    public static final Rect DOROTHY_METEOR_RECT = new Rect(-2005, -400, 545, 400);

    public static final int DOROTHY_METEOR_SMALL_ATOM_EXECUTION_DELAY = 1000;
    public static final int DOROTHY_METEOR_SMALL_ATOM_DAMAGE = 30;
    public static final int DOROTHY_METEOR_SMALL_ATOM_VELOCITY = 8;
    public static final int DOROTHY_METEOR_SMALL_ATOM_AMOUNT = 5;
    public static final int DOROTHY_METEOR_SMALL_ATOM_PROP = 50;

    public static final int DOROTHY_METEOR_MEDIUM_ATOM_EXECUTION_DELAY = 1000;
    public static final int DOROTHY_METEOR_MEDIUM_ATOM_DAMAGE = 55;
    public static final int DOROTHY_METEOR_MEDIUM_ATOM_VELOCITY = 7;
    public static final int DOROTHY_METEOR_MEDIUM_ATOM_AMOUNT = 5;
    public static final int DOROTHY_METEOR_MEDIUM_ATOM_PROP = 50;

    public static final int DOROTHY_METEOR_LARGE_ATOM_EXECUTION_DELAY = 1000;
    public static final int DOROTHY_METEOR_LARGE_ATOM_DAMAGE = 95;
    public static final int DOROTHY_METEOR_LARGE_ATOM_VELOCITY = 5;
    public static final int DOROTHY_METEOR_LARGE_ATOM_AMOUNT = 8;
    public static final int DOROTHY_METEOR_LARGE_ATOM_PROP = 50;
}
