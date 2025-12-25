package net.swordie.ms.constants;

import net.swordie.ms.ServerConstants;
import net.swordie.ms.client.character.Char;
import net.swordie.ms.client.character.items.Equip;
import net.swordie.ms.connection.packet.QuickMoveInfo;
import net.swordie.ms.enums.*;
import net.swordie.ms.loaders.ItemData;
import net.swordie.ms.util.FileTime;
import net.swordie.ms.util.Rect;
import net.swordie.ms.util.Util;
import net.swordie.ms.util.container.Triple;

import java.util.*;

/**
 * Created on 1/23/2018.
 */
public class GameConstants {
    public static final int CHANNELS_PER_WORLD = 10;
    public static final int BUFFED_CHANNELS = CHANNELS_PER_WORLD;
    public static final int MOB_EXP_RATE = 4;
    public static final int MOB_NX_RATE = 1;
    public static final int MOB_DROP_RATE = 1;
    public static final int MOB_MESO_RATE = 2;
    public static final long MAX_MONEY = 99_999_999_999L;
    public static final short DAMAGE_SKIN_MAX_SIZE = 100;
    public static final int MAX_PET_AMOUNT = 3;
    public static final int MAX_HP_MP = 500000;
    public static final long DAMAGE_CAP = 150_000_000_000L;
    public static final int BEGINNER_SP_MAX_LV = 7;
    public static final int RESISTANCE_SP_MAX_LV = 10;
    public static final int QUICKSLOT_LENGTH = 32;
    public static final byte DEFAULT_TRUNK_SIZE = 20;
    public static final int MAX_TRUNK_SIZE = 128;
    public static final int MAX_CHAT_MESSAGE_LENGTH = 70;
    public static final short MAX_ATTACK_ACTION = 2386;
    public static final int FIELD_REMOVAL_TIME = 30;
    public static final boolean PIC_ON_V_MATRIX_OPEN = false; // if true,  PIC will be required when opening VMatrix UI
    public static final long EXPIRY_TIME_CHECK = 15; // minutes

    // User Death
    public static final int BUFF_FREEZER_TIMER = 30; // 30 seconds
    public static final int USER_REVIVE_TIMER = 5; // 5 seconds
    public static final int DEATH_PENALTY_MAX_DURATION = 30 * 60; // 30min
    public static final int DEATH_PENALTY_DROP_DEBUFF = 80; // 80% less drop rate
    public static final int DEATH_PENALTY_EXP_DEBUFF = 80; // 80% less exp

    // Stats
    public static final int HP_PER_LEVEL = 50;
    public static final int MP_PER_LEVEL = 37;
    public static final double STR_HP_MULT = 1.5;
    public static final double STR_MP_MULT = 0.75;
    public static final double INT_HP_MULT = 0.75;
    public static final double INT_MP_MULT = 1.5;

    // Field
    public static final int NO_MAP_ID = 999999999;
    public static final int VIDEO_FIELD = 931050990; // Used for Effects and/or Videos
    public static final int ARDENTMILL = 910001000;
    public static final int GUILD_BASE = 200000301;
    public static final int FOREST_OF_TENACITY = 993001000;
    public static final int DEFAULT_FIELD_MOB_CAPACITY = 25;
    public static final double DEFAULT_FIELD_MOB_RATE_BY_MOBGEN_COUNT = 1.5;
    public static final int BASE_MOB_RESPAWN_RATE = 5000; // In milliseconds
    public static final double KISHIN_MOB_MULTIPLIER = 1.7;
    public static final double KISHIN_MOB_RATE_MULTIPLIER = 1.7;
    public static final Rect MOB_CHECK_RECT = new Rect(-100, -100, 100, 100);
    public static final int MIN_LEVEL_FOR_RANDOM_FIELD_OCCURRENCES = 10;

    // Drop
    public static final int DROP_HEIGHT = 100; // was 20
    public static final int DROP_DIFF = 20;
    public static final int DROP_DIFF_FROM_FIELD_BORDER = 25;
    public static final int DROP_REMAIN_ON_GROUND_TIME = 120; // 2 minutes
    public static final int DROP_REMOVE_OWNERSHIP_TIME = 30; // 30 sec
    public static final int MIN_MONEY_MULT = 20;
    public static final int MAX_MONEY_MULT = 40;
    public static final int MAX_DROP_CHANCE = 10000;

    // Combo Kill
    public static final int COMBO_KILL_RESET_TIMER = 7000; // 7 sec
    public static final int COMBO_KILL_REWARD_BLUE = 50; // Combo kills
    public static final int COMBO_KILL_REWARD_PURPLE = 350; // Combo kills
    public static final int COMBO_KILL_REWARD_RED = 750; // Combo kills
    public static final int COMBO_KILL_REWARD_GOLD = 1000; // Combo kills

    // Multi Kill
    public static final float MULTI_KILL_BONUS_EXP_MULTIPLIER = 0.01f; // Multi Kill Bonus Exp given  =  mobEXP * (( multi Kill Amount - 2 ) * 5) * BONUS_EXP_FOR_MULTI_KILL

    // Aggressive Ranking
    public static final long AGGRESSIVE_RANKING_UPDATE_DELAY = 1000L; // 1000 ms

    // Inner Ability
    public static final int CHAR_POT_BASE_ID = 70000000;
    public static final int CHAR_POT_END_ID = 70000062;
    public static final int BASE_CHAR_POT_UP_RATE = 10; // 10%
    public static final int CHAR_POT_RESET_COST = 100;
    public static final int CHAR_POT_GRADE_LOCK_COST_EPIC = 400; // added cost to lock Epic Grade
    public static final int CHAR_POT_GRADE_LOCK_COST_UNIQUE = 5000; // added cost to lock Unique Grade
    public static final int CHAR_POT_GRADE_LOCK_COST_LEGENDARY = 10000; // added cost to lock Legendary Grade
    public static final int CHAR_POT_LOCK_1_COST = 3000;
    public static final int CHAR_POT_LOCK_2_COST = 5000;

    // Potential Chance on Drop Equips
    public static final int RANDOM_EQUIP_UNIQUE_CHANCE = 1; // out of a 100
    public static final int RANDOM_EQUIP_EPIC_CHANCE = 3; // out of a 100
    public static final int RANDOM_EQUIP_RARE_CHANCE = 8; // out of a 100

    // BagItem
    public static final int BAG_ITEM_MAX_ETC = 7;
    public static final int BAG_ITEM_MAX_INSTALL_CONSUME = 2;
    public static int getMaxItemPerBagByType(InvType type) {
        switch (type) {
            case CONSUME:
            case INSTALL:
                return BAG_ITEM_MAX_INSTALL_CONSUME;
            case ETC:
                return BAG_ITEM_MAX_ETC;
            default: return 0;
        }
    }

    // Random Portal
    public static final int RANDOM_PORTAL_NEXT_SPAWN_TIME_QUEST_ID = 89999997; // nextTime=X
    public static final int RANDOM_PORTAL_SPAWN_CHANCE = 25; // out of a 10,000 (0.25%)
    public static final int RANDOM_PORTAL_COOLTIME = 30 * 60 * 1000; // 30 minutes
    public static final int RANDOM_PORTAL_DURATION = 3 * 60 * 1000; // 3 minutes
    public static final long INFERNO_WOLF_HP = 60_000_000_000_000L; // 60 tril


    public static final int LIE_DETECTOR_CHANCE = 7000; // 1 out of N
    public static final int LIE_DETECTOR_MIN_LEVEL = 180;


    public static final long FIELD_UPDATE_FREQ = 1000; // 1 Hz
    public static final long CHAR_UPDATE_FREQ = 250; // 4 Hz
    public static final int DAILY_RESET_FREQ = 24 * 60 * 60; // 1 day
    public static final int RANKING_REFRESH_FREQ = 1; // 1 hour

    // World Map Bookmark
    public static final int WORLD_MAP_BOOKMARK_LENGTH = 30;

    // AD Board
    public static final int MAX_AD_BOARD_MSG_LEN = 40;

    public static final int randomPortalInfernoWolfCoinFormula(long dmg) { // returns the amount of coins gained depending on dmg done
        if (dmg <= 0) {
            return 0;
        } else if (dmg <         400_000_000L) {
            return Util.getRandom(5, 8); // 5 ~ 7 coins
        } else if (dmg <      35_000_000_000L) {
            return Util.getRandom(7, 11); // 7 ~ 10 coins
        } else if (dmg <     500_000_000_000L) {
            return Util.getRandom(8, 12); // 8 ~ 11 coins
        } else if (dmg <   1_500_000_000_000L) {
            return Util.getRandom(11, 15); // 11 ~ 14 coins
        } else if (dmg <   5_000_000_000_000L) {
            return Util.getRandom(13, 17); // 13 ~ 16 coins
        } else if (dmg <   7_500_000_000_000L) {
            return Util.getRandom(19, 23); // 19 ~ 22 coins
        } else if (dmg <  10_700_000_000_000L) {
            return Util.getRandom(20, 26); // 20 ~ 25 coins
        } else {
            return Util.getRandom(23, 30); // 23 ~ 29 coins
        }
    }
    public static final int randomPortalFrittoCoinFormula(long stage) {
        if (stage <= 0) {
            return 0;
        } else if (stage < 2) {
            return Util.getRandom(3, 6); // 3 ~ 5 coins
        } else if (stage < 3) {
            return Util.getRandom(5, 8); // 5 ~ 8 coins
        } else if (stage < 5) {
            return Util.getRandom(8, 11); // 8 ~ 11 coins
        } else if (stage < 7) {
            return Util.getRandom(9, 14); // 9 ~ 13 coins
        } else if (stage < 9) {
            return Util.getRandom(10, 15); // 10 ~ 14 coins
        } else if (stage < 11) {
            return Util.getRandom(13, 20); // 13 ~ 19 coins
        } else if (stage < 13) {
            return Util.getRandom(14, 22); // 14 ~ 21 coins
        } else {
            return 0;
        }
    }


    // Rune
    public static final Rect RUNE_USE_RECT = new Rect(-120, -120, 120, 120); // Must be within this rect  to use a Rune
    public static final int RUNE_RESPAWN_TIME = 15; // minutes
    public static final int RUNE_COOLDOWN_TIME = 15; // minutes
    public static final int RUNE_ANTIBOT_TIME = 15; // minutes
    public static final int RUNE_MIN_LEVEL_FOR_ANTIBOT = 150;
    public static final int RUNE_LEVEL_RANGE = 20;
    public static final int THUNDER_RUNE_ATTACK_DELAY = 4; // seconds
    public static final int DARKNESS_RUNE_NUMBER_OF_ELITE_MOBS_SPAWNED = 3; // number of elites spawned when activating Rune of Darkness
    public static final String RUNE_NOTICE_TEXT = "Free the rune and lift the Elite Boss curse! \r\n" +
            "Curse Stage %d: %d%% reduction of EXP, Drop and Meso Rate in effect.";
    public static final int RUNE_CURSE_INTERVAL = 5 * 60 * 1000; // 5 minutes
    public static final int RUNE_CURSE_MULTIPLIER_PER_LEVEL = 25; // 25% reduction of exp&item per level
    public static final int RUNE_SPAWN_CHANCE = 100; // out of 10000
    public static final int LEVEL_RANGE_TO_SPAWN_RUNE = 20;

    // BurningField
    public static final int BURNING_FIELD_MAX_LEVEL = 20; //Maximum Burning Field Level
    public static final int BURNING_FIELD_LEVEL_ON_START = BURNING_FIELD_MAX_LEVEL; //Starts Burning Maps at BurningLevel 20
    public static final int BURNING_FIELD_TIMER = 15; // minutes
    public static final int BURNING_FIELD_MIN_MOB_LEVEL = 0; //Minimum Mob Level for the Field to become a Burning Field
    public static final int BURNING_FIELD_BONUS_EXP_MULTIPLIER_PER_LEVEL = 5; // multiplied by the BurningField Level  =  Bonus Exp% given

    // Exp Orb
    public static final int BLUE_EXP_ORB_ID = 2023484;
    public static final double BLUE_EXP_ORB_MULT = 2;
    public static final int PURPLE_EXP_ORB_ID = 2023494;
    public static final double PURPLE_EXP_ORB_MULT = 3.5;
    public static final int RED_EXP_ORB_ID = 2023495;
    public static final double RED_EXP_ORB_MULT = 5;
    public static final int GOLD_EXP_ORB_ID = 2023669;
    public static final double GOLD_EXP_ORB_MULT = 7;

    // Mob
    public static final int MOB_SKILL_CHANCE = 20;
    public static final int MOB_ATTACK_CHANCE = 40;
    public static final int NX_DROP_CHANCE = 25;
    public static final int MOB_ATTACK_COOLDOWN_MIN = 3;
    public static final int MOB_ATTACK_COOLDOWN_MAX = 5;
    public static final int MOB_RESUMMON_COOLDOWN = 30; // 2 minutes
    public static final int STUN_COOLDOWN = 6; // 5 seconds   |  Cooldown on user getting stunned
    public static final int MOBS_NEAR_YOUR_LEVEL_RANGE = 20; // +- 20 based off chrLv

    // Elite mob
    public static final int ELITE_MOB_SKILL_COUNT = 2;
    public static final int ELITE_MOB_RESPAWN_TIME = 150; // seconds
    public static final int ELITE_MOB_SPAWN_CHANCE = 5; // out of a 1000
    public static final int ELITE_MOB_DARK_NOTIFICATION = 17;
    public static final int ELITE_BOSS_REQUIRED_KILLS = 20;
    public static final Integer[] ELITE_BOSS_TEMPLATES = new Integer[]{8220022, 8220023, 8220024, 8220025, 8220026};
    public static final String ELITE_BOSS_BGM = "Bgm45/Anthem For Heroes";
    public static final long ELITE_BOSS_HP_RATE = 500; // multiplier for boss' hp compared to the mobs on the map
    public static final int ELITE_CHAMPION_CYCLIC_COUNT = 5; // every 5 elite mobs, it will spawn a random elite champion
    public static final int ELITE_CHAMPION_TIME_LIMIT = 150; // 150 seconds

    // Elite Champion
    public static final int ELITE_CHAMPION_ORB = 2023927;

    // FamiliarCodex
    public static final short FAMILIAR_ORB_VITALITY = 300;
    public static final int ACTIVE_FAMILIARS_SLOTS = 3;
    public static final int BADGE_SLOTS = 8; // amount of badge slots
    public static final int MAX_FAMILIAR_SLOTS = 2000; // amount of familiars
    public static final int STARTING_FAMILIAR_SLOTS = 100; // default amount of familiars
    public static final int MAX_SUMMON_GAUGE = 2000;
    public static final int EXP_PER_KILL = 1;
    public static final int MAX_FAMILIAR_LEVEL_U_L = 7;
    public static final int MAX_FAMILIAR_LEVEL_C_R_E = 5;
    public static final Rect FAMILIAR_AFFECT_NEARBY_ALLIES_RECT = new Rect(-300, -300, 300, 300);
    // Familiar Red Card
    public static final int RANK_UP_CHANCE = 4; // Chance to rank your familiar up
    public static final int SECONDARY_LINE_PRIME_CHANCE = 50; // Chance for the second line of familiar potential to be prime when rolled.


    // Megaphone
    public static final int MEGAPHONE_COOLTIME = 2 * 60 * 1000; // 2 Minutes
    public static final int AVATAR_MEGAPHONE_COOLTIME = 2 * 60 * 1000; // 2 Minutes
    public static final int TRIPLE_MEGAPHONE_COOLTIME = 5 * 60 * 1000; // 5 Minutes


    // Party
    public static final int MAX_PARTY_MOB_LEVEL_DIFF = 5; // x levels lower than mob level
    public static final int MAX_PARTY_CHR_LEVEL_DIFF = 60; // x levels lower than chr level

    // Hyper Stats
    public static final long HYPER_STAT_RESET_COST = 10_000_000;
    public static final long HYPER_STAT_PRESET_SWITCH_COST = 2_000_000;
    public static final int HYPER_STATS_MAX_PRESETS = 3;

    // Cash Shop
    public static final int MAX_CS_ITEMS_PER_PAGE = 12;
    public static final int MAX_LOCKER_SIZE = 200;
    public static final int MAX_CASH_SHOP_BUY_QUANT = 100;

    // Surprise Missions
    public static final int SURPRISE_MISSION_MIN_LEVEL = 33;
    public static final int SURPRISE_MISSION_CLAIM_REWARD_TIME_LIMIT = 60; // seconds
    public static final int SURPRISE_MISSION_COOLTIME = 20 * 60 * 1000; // 20 minutes | Cooltime on mission
    public static final int SURPRISE_MISSION_CHANCE = 5; // chance of succeeding and gaining a mission
    public static final int SURPRISE_MISSION_TRY_FREQUENCY = 3; // 3 minutes | We try to give mission every 3 minutes

    // Field Ownership
    public static final long MAP_OWNERSHIP_LOSS_TIME = 10 * 60 * 1000; // 10 minutes

    // START OF Party Quests
    public static final long PARTY_QUEST_GLOBAL_EXP = 30000000; // The minimum amount of Exp given from a PQ.
    public static final int NODE_STONE_CRAFT_REQ = 35;
    public static final String DEFAULT_SHOP_SCRIPT = "unknown_shop";
    public static final double MAX_PET_DROP_PICKUP_DIST = 350;
    public static final long MAX_AUCTION_QUERY_RESULT_SIZE = 150;
    public static final byte[] SERVER_IP = new byte[]{54, 68, (byte) 160, 34};

    public static final long PARTY_QUEST_EXP_FORMULA(Char chr) {
        // Exp formula for giving Exp from Party Quests
        return PARTY_QUEST_GLOBAL_EXP * (1 + (chr.getParty().getPartyMembers().length * 100 / chr.getParty().getAvgLevel()));
    }

    // Dojo
    public static final int DOJO_DUMMY_DURATION = 10; // Dummy will stay alive for [] minutes, after which it will be removed.
    public static final int DOJO_SPAWM_BOSS_DELAY = 3; // Spawn delay, in seconds, per boss on the Dojo Floors

    // Monster Park
    public static final byte MAX_MONSTER_PARK_RUNS = 7; // Max Monster Park runs per character
    public static final int MONSTER_PARK_EXP_QUEST = 99999; // Quest where the Exp for MP runs gets stored.
    public static final int MONSTER_PARK_ENTRANCE_CHECK_QUEST = 99997; // Quest where the Number of MP runs are stored
    public static final int MONSTER_PARK_TIME = 10 * 60; // 10minutes

    // Lord Pirate Party Quest
    public static final int LORD_PIRATE_QUEST = 99998; // Quest where the NPC state is stored, to close/open portals

    // END OF Party Quests

    //Boss QR Values
    public static final int EASY_HORNTAIL_QUEST = 99996; // Quest where the Spawn state of horntail's heads is stored
    public static final int EASY_HILLA_QUEST = 99995; //Quest where the state of hilla portals is stored
    public static final int ARKARIUM_QUEST = 99994; //Quest wehre difficulty of arkarium is stored
    public static final int LOADED_DICE_SELECTION = 99990; // Quest where the User's Loaded Dice selection is stored

    // Custom Quest QR Values
    public static final int EVAN_INTRO = 99992; // Used for portal script "evanRoom1" so script doesn't loop
    public static final int EVAN_INTRO2 = 99993; // Used for portal script "DragonEggNotice" so script doesn't loop


    // Trading
    public static final int MAX_TRADE_ITEMS = 9;

    // Faming
    public static final int MIN_LEVEL_TO_FAME = 15;
    public static final int FAME_COOLDOWN = 24; // in hours

    // Guild
    public static final int SP_PER_GUILD_LEVEL = 2;
    public static final double CONITRUBITION_PER_EXP = 0.00002;
    public static final double GGP_PER_CONTRIBUTION = 0.3;
    public static final double IGP_PER_CONTRIBUTION = 0.7;
    public static final int GUILD_BBS_RECORDS_PER_PAGE = 6;
    public static final int GGP_FOR_SKILL_RESET = 5;
    public static final int MAX_GUILD_LV = 30;
    public static final int MAX_GUILD_MEMBERS = 200;

    // Monster Collection
    public static final int MOBS_PER_PAGE = 25;
    public static final int MOBS_PER_GROUP = 5;

    // V Matrix
    public static final int MAX_NODE_SLOTS = 25;
    public static final int[] REQ_LV_BY_MATRIX_SLOT_POS = new int[] {
            200, // 0
            200, // 1
            200, // 2
            200, // 3
            200, // 4

            205, // 5
            210, // 6
            215, // 7

            220, // 8
            225, // 9
            230, // 10
            235, // 11

            240, // 12
            245, // 13
            250, // 14

            255, // 15
            260, // 16
            265, // 17
            270, // 18

            275, // 19
            280, // 20
            285, // 21
            290, // 22
            295, // 23
            300 // 24
    };

    // Nodestone
    public static final int NODE_SELF_JOB_CHANCE = 75;
    public static final int NODE_ENFORCE_CHANCE = 60;
    public static final int NODE_SKILL_CHANCE = 30;
    public static final int SPECIAL_NODE_ACTIVATION_CD = 30; // 30 seconds

    public static long[] charExp = new long[300];
    public static int[] traitExp = new int[100];
    private static int[][] enchantSuccessRates = new int[25][2];
    private static int[][] enchantSuccessRatesSuperior = new int[15][2];
    private static int[] guildExp = new int[MAX_GUILD_LV];
    public static final int MAX_CHAR_LEVEL = charExp.length;

    // Auction
    public static final long AUCTION_LIST_TIME = 24; // hours
    public static final long AUCTION_DEPOSIT_AMOUNT = 2000;
    public static final long AUCTION_MIN_PRICE = 50;
    public static final long AUCTION_MAX_PRICE = 99_999_999_999L;
    public static final double AUCTION_TAX = 0.95; // 5%

    // Skills
    public static final int TIME_LEAP_QR_KEY = 99996; // Quest where personal Time Leap CDs get stored
    public static final int COOLTIME_THRESHOLD_MS = 10000; // When switch from reduceCooltime to reduceCooltimeR  is
    public static final int NO_REDUCE_COOLTIME_CD_MS = 5000; // if cd is below  this  cdReductions wont apply

    //Merchant
    public static final int MAX_MERCHANT_VISITORS = 6;
    public static final int MAX_MERCHANT_SLOTS = 16;

    // Starforce
    private static final int STARFORCE_LEVELS[][] = {
            {Integer.MAX_VALUE, -1}, // per equip
            {137, (ServerConstants.VERSION >= 197 ? 20 : 13)},
            {127, (ServerConstants.VERSION >= 197 ? 15 : 12)},
            {117, 10},
            {107, 8},
            {95, 5},
    };

    private static final int STARFORCE_LEVELS_SUPERIOR[][] = {
            {Integer.MAX_VALUE, 15},
            {137, 12},
            {127, 10},
            {117, 8},
            {107, 5},
            {95, 3},
    };

    // Harvesting
    private static Map<Integer, Map<Integer, Integer>> gatherDrops; // reactorId -> item -> drop chance (out of 100)

    public static final int HARVEST_HERB_START = 100000;
    public static final int HARVEST_HERB_END = 100013;
    public static final int HARVEST_VEIN_START = 200000;
    public static final int HARVEST_VEIN_END = 200013;

    public static final int MIN_LEVEL_FOR_HIGH_LEVEL_HARVESTING = 130;
    public static final int MAX_HARVESTABLE_REACTORS = 3;
    public static final int HARVEST_TIMER = 3; // every 3 minutes
    public static final int MAX_TRAIT_EXP = 93_596;

    private static List<QuickMoveInfo> quickMoveInfos;

    public static final int EMOTICON_SLOTS = 28; // size of EMOTICONS
    public static final int EMOTICON_SHORTCUT_SLOTS = 10;
    public static final int[] EMOTICON_BASES = new int[] {
            1008, 1009, 1010, 1011, 1012
    };

    public static final int[] EMOTICONS = new int[] {
            10080001,
            10080002,
            10080003,
            10080004,
            10080005,
            10080006,
            10080007,
            10080008,
            10080009,
            10080010,

            10090001,
            10090002,
            10090003,
            10090004,

            10100001,
            10100002,
            10100003,
            10100004,
            10100005,
            10100006,

            10110001,
            10110002,
            10110003,
            10110004,

            10120001,
            10120002,
            10120003,
            10120004,
    };

    static {
        initCharExp();
        initTraitExp();
        initEnchantRates();
        initEnchantRatesSuperior();
        initQuickMove();
        initGuildExp();
        initGatherDrops();
    }

    private static void initQuickMove() {
        quickMoveInfos = new ArrayList<>();
        quickMoveInfos.add(new QuickMoveInfo(0, 9072302, QuickMoveType.Boat, 1, "Warping", false,
                FileTime.fromType(FileTime.Type.ZERO_TIME), FileTime.fromType(FileTime.Type.MAX_TIME)));
        quickMoveInfos.add(new QuickMoveInfo(0, 9010024, QuickMoveType.Baret, 1, "Settings", false,
                FileTime.fromType(FileTime.Type.ZERO_TIME), FileTime.fromType(FileTime.Type.MAX_TIME)));
        quickMoveInfos.add(new QuickMoveInfo(0, 9010022, QuickMoveType.DimensionalPortal, 1, "Dimensional Portal", false,
                FileTime.fromType(FileTime.Type.ZERO_TIME), FileTime.fromType(FileTime.Type.MAX_TIME)));
        quickMoveInfos.add(new QuickMoveInfo(0, 9071003, QuickMoveType.MonsterPark, 1, "Monster Park", false,
                FileTime.fromType(FileTime.Type.ZERO_TIME), FileTime.fromType(FileTime.Type.MAX_TIME)));
        quickMoveInfos.add(new QuickMoveInfo(0, 9072303, QuickMoveType.FreeMarket, 1, "Free Market", false,
                FileTime.fromType(FileTime.Type.ZERO_TIME), FileTime.fromType(FileTime.Type.MAX_TIME)));
        quickMoveInfos.add(new QuickMoveInfo(0, 9062008, QuickMoveType.Cat, 1, "Inventory utility", false,
                FileTime.fromType(FileTime.Type.ZERO_TIME), FileTime.fromType(FileTime.Type.MAX_TIME)));

    }

    public static List<QuickMoveInfo> getQuickMoveInfos() {
        return quickMoveInfos;
    }

    private static void initCharExp() {
        // NEXTLEVEL::NEXTLEVEL
        charExp[1] = 15;
        charExp[2] = 34;
        charExp[3] = 57;
        charExp[4] = 92;
        charExp[5] = 135;
        charExp[6] = 372;
        charExp[7] = 560;
        charExp[8] = 840;
        charExp[9] = 1242;
        for (int i = 10; i <= 14; i++) {
            charExp[i] = charExp[i - 1];
        }
        for (int i = 15; i <= 29; i++) {
            charExp[i] = (long) (charExp[i - 1] * 1.2);
        }
        for (int i = 30; i <= 34; i++) {
            charExp[i] = charExp[i - 1];
        }
        for (int i = 35; i <= 39; i++) {
            charExp[i] = (long) (charExp[i - 1] * 1.2);
        }
        for (int i = 40; i <= 59; i++) {
            charExp[i] = (long) (charExp[i - 1] * 1.08);
        }
        for (int i = 60; i <= 64; i++) {
            charExp[i] = charExp[i - 1];
        }
        for (int i = 65; i <= 74; i++) {
            charExp[i] = (long) (charExp[i - 1] * 1.075);
        }
        for (int i = 75; i <= 89; i++) {
            charExp[i] = (long) (charExp[i - 1] * 1.07);
        }
        for (int i = 90; i <= 99; i++) {
            charExp[i] = (long) (charExp[i - 1] * 1.065);
        }
        for (int i = 100; i <= 104; i++) {
            charExp[i] = charExp[i - 1];
        }
        for (int i = 105; i <= 139; i++) {
            charExp[i] = (long) (charExp[i - 1] * 1.065);
        }
        for (int i = 140; i <= 169; i++) {
            charExp[i] = (long) (charExp[i - 1] * 1.0625);
        }
        charExp[170] = 138750435;
        for (int i = 171; i <= 199; i++) {
            charExp[i] = (long) (charExp[i - 1] * 1.05);
        }
        charExp[200] = 2207026470L;
        for (int i = 201; i <= 209; i++) {
            charExp[i] = (long) (charExp[i - 1] * 1.12);
        }

        charExp[210] = (long) (charExp[209] * 1.6);
        for (int i = 211; i <= 214; i++) {
            charExp[i] = (long) (charExp[i - 1] * 1.11);
        }

        charExp[215] = (long) (charExp[214] * 1.3);
        for (int i = 216; i <= 219; i++) {
            charExp[i] = (long) (charExp[i - 1] * 1.09);
        }

        charExp[220] = (long) (charExp[219] * 1.6);
        for (int i = 221; i <= 224; i++) {
            charExp[i] = (long) (charExp[i - 1] * 1.07);
        }

        charExp[225] = (long) (charExp[224] * 1.3);
        for (int i = 226; i <= 229; i++) {
            charExp[i] = (long) (charExp[i - 1] * 1.05);
        }

        charExp[230] = (long) (charExp[229] * 1.6);
        for (int i = 231; i <= 234; i++) {
            charExp[i] = (long) (charExp[i - 1] * 1.03);
        }

        charExp[235] = (long) (charExp[234] * 1.3);
        for (int i = 236; i <= 239; i++) {
            charExp[i] = (long) (charExp[i - 1] * 1.03);
        }

        charExp[240] = (long) (charExp[239] * 1.6);
        for (int i = 241; i <= 244; i++) {
            charExp[i] = (long) (charExp[i - 1] * 1.03);
        }

        charExp[245] = (long) (charExp[244] * 1.3);
        for (int i = 246; i <= 249; i++) {
            charExp[i] = (long) (charExp[i - 1] * 1.03);
        }

        charExp[250] = 1313764762354L;
        for (int i = 251; i <= 259; i++) {
            charExp[i] = (long) (charExp[i - 1] * 1.01);
        }

        charExp[260] = (long) (charExp[259] * 1.01 + charExp[259] * 1.01);
        for (int i = 261; i <= 269; i++) {
            charExp[i] = (long) (charExp[i - 1] * 1.01);
        }

        charExp[270] = (long) (charExp[269] * 1.01 + charExp[269] * 1.01);
        for (int i = 271; i <= 274; i++) {
            charExp[i] = (long) (charExp[i - 1] * 1.01);
        }

        charExp[275] = (long) (charExp[274] * 2.02);
        for (int i = 276; i <= 279; i++) {
            charExp[i] = (long) (charExp[i - 1] * 1.1);
        }

        charExp[280] = (long) (charExp[279] * 2.02);
        for (int i = 281; i <= 284; i++) {
            charExp[i] = (long) (charExp[i - 1] * 1.1);
        }

        charExp[285] = (long) (charExp[284] * 2.02);
        for (int i = 286; i <= 289; i++) {
            charExp[i] = (long) (charExp[i - 1] * 1.1);
        }

        charExp[290] = (long) (charExp[289] * 2.02);
        for (int i = 291; i <= 294; i++) {
            charExp[i] = (long) (charExp[i - 1] * 1.1);
        }

        charExp[295] = (long) (charExp[294] * 2.02);
        for (int i = 296; i <= 298; i++) {
            charExp[i] = (long) (charExp[i - 1] * 1.1);
        }

        charExp[299] = (long) (charExp[298] * 1.5);
    }

    public static void main(String[] args) {
        initCharExp();
        System.out.println(charExp[250]);
        System.out.println(591608554168L);
    }

    private static void initTraitExp() {
        traitExp[0] = 20; traitExp[1] = 26; traitExp[2] = 34; traitExp[3] = 44; traitExp[4] = 57; traitExp[5] = 74; traitExp[6] = 96; traitExp[7] = 125; traitExp[8] = 163; traitExp[9] = 212;
        traitExp[10] = 233; traitExp[11] = 256; traitExp[12] = 282; traitExp[13] = 310; traitExp[14] = 341; traitExp[15] = 375; traitExp[16] = 413; traitExp[17] = 454; traitExp[18] = 499; traitExp[19] = 549;
        traitExp[20] = 565; traitExp[21] = 582; traitExp[22] = 599; traitExp[23] = 617; traitExp[24] = 636; traitExp[25] = 655; traitExp[26] = 675; traitExp[27] = 695; traitExp[28] = 716; traitExp[29] = 737;
        traitExp[30] = 748; traitExp[31] = 759; traitExp[32] = 770; traitExp[33] = 782; traitExp[34] = 794; traitExp[35] = 806; traitExp[36] = 818; traitExp[37] = 830; traitExp[38] = 842; traitExp[39] = 855;
        traitExp[40] = 868; traitExp[41] = 881; traitExp[42] = 894; traitExp[43] = 907; traitExp[44] = 921; traitExp[45] = 935; traitExp[46] = 949; traitExp[47] = 963; traitExp[48] = 977; traitExp[49] = 992;
        traitExp[50] = 1007; traitExp[51] = 1022; traitExp[52] = 1037; traitExp[53] = 1053; traitExp[54] = 1069; traitExp[55] = 1085; traitExp[56] = 1101; traitExp[57] = 1118; traitExp[58] = 1135; traitExp[59] = 1152;
        traitExp[60] = 1169; traitExp[61] = 1187; traitExp[62] = 1205; traitExp[63] = 1223; traitExp[64] = 1241; traitExp[65] = 1260; traitExp[66] = 1279; traitExp[67] = 1298; traitExp[68] = 1317; traitExp[69] = 1337;
        traitExp[70] = 1341; traitExp[71] = 1345; traitExp[72] = 1349; traitExp[73] = 1353; traitExp[74] = 1357; traitExp[75] = 1361; traitExp[76] = 1365; traitExp[77] = 1369; traitExp[78] = 1373; traitExp[79] = 1377;
        traitExp[80] = 1381; traitExp[81] = 1385; traitExp[82] = 1389; traitExp[83] = 1393; traitExp[84] = 1397; traitExp[85] = 1401; traitExp[86] = 1405; traitExp[87] = 1409; traitExp[88] = 1413; traitExp[89] = 1417;
        traitExp[90] = 1421; traitExp[91] = 1425; traitExp[92] = 1429; traitExp[93] = 1433; traitExp[94] = 1437; traitExp[95] = 1441; traitExp[96] = 1445; traitExp[97] = 1449; traitExp[98] = 1453; traitExp[99] = 1457;
    }

    public static int getTraitLevel(int currentExp) {
        var i = 0;
        while (currentExp > 0 && i < 100) {
            currentExp -= traitExp[i];
            i++;
        }
        return currentExp >= 0 ? i : i - 1; // currentExp > 0 = reached a level exactly or above max level
    }

    public static int getTraitHPMP(int level) {
        if(level <= 4) { return 0;}
        if(level <= 9) { return 100;}
        if(level <=14) { return 200;}
        if(level <= 19) { return 300;}
        if(level <= 24) { return 400;}
        if(level <= 29) { return 500;}
        if(level <= 34) { return 600;}
        if(level <= 39) { return 700;}
        if(level <= 44) { return 800;}
        if(level <= 49) { return 900;}
        if(level <= 54) { return 1000;}
        if(level <= 59) { return 1100;}
        if(level <= 65) { return 1200;}
        if(level <= 69) { return 1300;}
        if(level <= 74) { return 1400;}
        if(level <= 79) { return 1500;}
        if(level <= 84) { return 1600;}
        if(level <= 89) { return 1700;}
        if(level <= 94) { return 1800;}
        if(level <= 99) { return 1900;}
        return 2000;
   }

    public static int getMaxStars(Equip equip) {
        if (equip.getInfo() == null) {
            return 0;
        }
        int level = equip.getReqLevel() + equip.getiIncReq();
        var superior = equip.getInfo().isSuperiorEqp();

        var exceptionStars = ItemConstants.getItemStarLimit(equip.getItemId());
        if (exceptionStars != -1) {
            return exceptionStars;
        }
        
        if (superior) {
            if (level < 95) {
                return 3;
            } else if (level < 107) {
                return 5;
            } else if (level < 117) {
                return 8;
            } else if (level < 127) {
                return 10;
            } else if (level < 137) {
                return 12;
            } else {
                return 15;
            }
        } else {
            if (level < 95) {
                return 5;
            } else if (level < 107) {
                return 8;
            } else if (level < 117) {
                return 10;
            } else if (level < 127) {
                return 15;
            } else if (level < 137) {
                return 20;
            } else {
                return 25;
            }
        }
    }

    private static void initEnchantRates() {
        // kms rates: success / destroy
        // out of 1000
        enchantSuccessRates = new int[][]{
                {950, 0}, // 0 -> 1
                {900, 0},
                {850, 0},
                {850, 0},
                {800, 0},

                {750, 0}, // 5 -> 6
                {700, 0},
                {650, 0},
                {600, 0},
                {550, 0},

                {500, 0}, // 10 -> 11
                {450, 0},
                {400, 6},
                {350, 13},
                {300, 14},

                {300, 21}, // 15 -> 16
                {300, 21},
                {300, 21},
                {300, 28},
                {300, 28},

                {300, 70}, // 20 -> 21
                {300, 70},
                {30, 194},
                {20, 294},
                {10, 396},
        };
    }

    private static void initEnchantRatesSuperior() {
        enchantSuccessRatesSuperior = new int[][]{
                {500, 0},
                {500, 0},
                {450, 0},
                {400, 0},
                {400, 0},

                {400, 18},
                {400, 30},
                {400, 42},
                {400, 60},
                {370, 95},

                {350, 130},
                {350, 162},
                {30, 485},
                {20, 490},
                {10, 500},
        };
    }

    public static void initGuildExp() {
        guildExp[1] = 15000;
        for (int i = 2; i < guildExp.length; i++) {
            guildExp[i] = guildExp[i - 1] + 30000;
        }
    }

    private static void initGatherDrops() {
        gatherDrops = new HashMap<>(); // Map: reactorId -> item -> drop % (out of 100)

        // Base Herbs
        // Silver Herb
        var silverHerbDropMap = new HashMap<Integer, Integer>();
        silverHerbDropMap.put(4022000, 80);
        silverHerbDropMap.put(4022001, 80);
        silverHerbDropMap.put(4023000, 80);
        silverHerbDropMap.put(4023001, 80);
        gatherDrops.put(HARVEST_HERB_START, silverHerbDropMap);

        // Magenta Herb
        var magentaHerbDropMap = new HashMap<Integer, Integer>();
        magentaHerbDropMap.put(4022002, 80);
        magentaHerbDropMap.put(4022003, 80);
        magentaHerbDropMap.put(4023002, 80);
        magentaHerbDropMap.put(4023003, 80);
        gatherDrops.put(HARVEST_HERB_START + 1, magentaHerbDropMap);

        // Blue Herb
        var blueHerbDropMap = new HashMap<Integer, Integer>();
        blueHerbDropMap.put(4022004, 80);
        blueHerbDropMap.put(4022005, 80);
        blueHerbDropMap.put(4023004, 80);
        blueHerbDropMap.put(4023005, 80);
        gatherDrops.put(HARVEST_HERB_START + 2, blueHerbDropMap);

        // Brown Herb
        var brownHerbDropMap = new HashMap<Integer, Integer>();
        brownHerbDropMap.put(4022006, 80);
        brownHerbDropMap.put(4022007, 80);
        brownHerbDropMap.put(4023006, 80);
        brownHerbDropMap.put(4023007, 80);
        gatherDrops.put(HARVEST_HERB_START + 3, brownHerbDropMap);

        // Emerald Herb
        var emeraldHerbDropMap = new HashMap<Integer, Integer>();
        emeraldHerbDropMap.put(4022008, 80);
        emeraldHerbDropMap.put(4022009, 80);
        emeraldHerbDropMap.put(4022010, 80);
        emeraldHerbDropMap.put(4023008, 80);
        emeraldHerbDropMap.put(4023009, 80);
        emeraldHerbDropMap.put(4023010, 80);
        gatherDrops.put(HARVEST_HERB_START + 4, emeraldHerbDropMap);

        // Gold Herb
        var goldHerbDropMap = new HashMap<Integer, Integer>();
        goldHerbDropMap.put(4022011, 80);
        goldHerbDropMap.put(4022012, 80);
        goldHerbDropMap.put(4023011, 80);
        goldHerbDropMap.put(4023012, 80);
        gatherDrops.put(HARVEST_HERB_START + 5, goldHerbDropMap);

        // Aquamarine Herb
        var aquamarineHerbDropMap = new HashMap<Integer, Integer>();
        aquamarineHerbDropMap.put(4022013, 80);
        aquamarineHerbDropMap.put(4022014, 80);
        aquamarineHerbDropMap.put(4023013, 80);
        aquamarineHerbDropMap.put(4023014, 80);
        gatherDrops.put(HARVEST_HERB_START + 6, aquamarineHerbDropMap);

        // Red Herb
        var redHerbDropMap = new HashMap<Integer, Integer>();
        redHerbDropMap.put(4022015, 80);
        redHerbDropMap.put(4022016, 80);
        redHerbDropMap.put(4023015, 80);
        redHerbDropMap.put(4023016, 80);
        gatherDrops.put(HARVEST_HERB_START + 7, redHerbDropMap);

        // Black Herb
        var blackHerbDropMap = new HashMap<Integer, Integer>();
        blackHerbDropMap.put(4022017, 80);
        blackHerbDropMap.put(4022018, 80);
        blackHerbDropMap.put(4023017, 80);
        blackHerbDropMap.put(4023018, 80);
        gatherDrops.put(HARVEST_HERB_START + 8, blackHerbDropMap);

        // Purple Herb
        var purpleHerbDropMap = new HashMap<Integer, Integer>();
        purpleHerbDropMap.put(4022019, 80);
        purpleHerbDropMap.put(4022020, 80);
        purpleHerbDropMap.put(4022021, 80);
        purpleHerbDropMap.put(4023019, 80);
        purpleHerbDropMap.put(4023020, 80);
        purpleHerbDropMap.put(4023021, 80);
        gatherDrops.put(HARVEST_HERB_START + 9, purpleHerbDropMap);

        // Gold Flower, oils 6-8
        var goldFlowerDropMap = new HashMap<Integer, Integer>();
        goldFlowerDropMap.put(4022011, 80);
        goldFlowerDropMap.put(4022012, 80);
        goldFlowerDropMap.put(4022013, 80);
        goldFlowerDropMap.put(4022014, 80);
        goldFlowerDropMap.put(4022015, 60);
        goldFlowerDropMap.put(4022016, 50);
        goldFlowerDropMap.put(4023011, 80);
        goldFlowerDropMap.put(4023012, 80);
        goldFlowerDropMap.put(4023013, 80);
        goldFlowerDropMap.put(4023014, 80);
        goldFlowerDropMap.put(4023015, 60);
        goldFlowerDropMap.put(4023016, 50);
        goldFlowerDropMap.put(4021021, 10);

        goldFlowerDropMap.put(4007000, 30);
        goldFlowerDropMap.put(4007001, 30);
        goldFlowerDropMap.put(4007002, 30);
        goldFlowerDropMap.put(4007003, 30);
        goldFlowerDropMap.put(4007004, 30);
        goldFlowerDropMap.put(4007005, 30);
        goldFlowerDropMap.put(4007006, 30);
        goldFlowerDropMap.put(4007007, 30);
        goldFlowerDropMap.put(4021022, 50);
        goldFlowerDropMap.put(4023023, 50);
        goldFlowerDropMap.put(4023024, 10);
        goldFlowerDropMap.put(4022023, 50);
        goldFlowerDropMap.put(4022024, 10);

        goldFlowerDropMap.put(4020009, 20);
        goldFlowerDropMap.put(2048717, 5);
        goldFlowerDropMap.put(2048716, 15);

        gatherDrops.put(HARVEST_HERB_START + 11, goldFlowerDropMap);

        // Mysterious Herb, oils 7-10
        var mysteriousHerbDropMap = new HashMap<Integer, Integer>();
        mysteriousHerbDropMap.put(4022013, 40);
        mysteriousHerbDropMap.put(4022014, 50);
        mysteriousHerbDropMap.put(4022015, 80);
        mysteriousHerbDropMap.put(4022016, 80);
        mysteriousHerbDropMap.put(4022017, 90);
        mysteriousHerbDropMap.put(4022018, 90);
        mysteriousHerbDropMap.put(4022019, 90);
        mysteriousHerbDropMap.put(4022020, 90);
        mysteriousHerbDropMap.put(4023013, 40);
        mysteriousHerbDropMap.put(4023014, 50);
        mysteriousHerbDropMap.put(4023015, 80);
        mysteriousHerbDropMap.put(4023016, 80);
        mysteriousHerbDropMap.put(4023017, 90);
        mysteriousHerbDropMap.put(4023018, 90);
        mysteriousHerbDropMap.put(4023019, 90);
        mysteriousHerbDropMap.put(4023020, 90);

        mysteriousHerbDropMap.put(4007000, 30);
        mysteriousHerbDropMap.put(4007001, 30);
        mysteriousHerbDropMap.put(4007002, 30);
        mysteriousHerbDropMap.put(4007003, 30);
        mysteriousHerbDropMap.put(4007004, 30);
        mysteriousHerbDropMap.put(4007005, 30);
        mysteriousHerbDropMap.put(4007006, 30);
        mysteriousHerbDropMap.put(4007007, 30);
        mysteriousHerbDropMap.put(4022023, 50);
        mysteriousHerbDropMap.put(4021022, 50);
        mysteriousHerbDropMap.put(4021021, 10);
        mysteriousHerbDropMap.put(4023023, 50);
        mysteriousHerbDropMap.put(4023024, 10);

        mysteriousHerbDropMap.put(4020009, 20);
        mysteriousHerbDropMap.put(2048717, 5);
        mysteriousHerbDropMap.put(2048716, 15);
        gatherDrops.put(HARVEST_HERB_START + 12, mysteriousHerbDropMap);

        // Mysterious Legendary Herb, oils 8-10
        var mysteriousLegendaryHerbDropMap = new HashMap<Integer, Integer>();
        mysteriousLegendaryHerbDropMap.put(4022013, 40);
        mysteriousLegendaryHerbDropMap.put(4022014, 50);
        mysteriousLegendaryHerbDropMap.put(4022015, 80);
        mysteriousLegendaryHerbDropMap.put(4022016, 80);
        mysteriousLegendaryHerbDropMap.put(4022017, 95);
        mysteriousLegendaryHerbDropMap.put(4022018, 95);
        mysteriousLegendaryHerbDropMap.put(4022019, 95);
        mysteriousLegendaryHerbDropMap.put(4022020, 95);
        mysteriousLegendaryHerbDropMap.put(4022021, 50);

        mysteriousLegendaryHerbDropMap.put(4023013, 40);
        mysteriousLegendaryHerbDropMap.put(4023014, 50);
        mysteriousLegendaryHerbDropMap.put(4023015, 80);
        mysteriousLegendaryHerbDropMap.put(4023016, 80);
        mysteriousLegendaryHerbDropMap.put(4023017, 95);
        mysteriousLegendaryHerbDropMap.put(4023018, 95);
        mysteriousLegendaryHerbDropMap.put(4023019, 95);
        mysteriousLegendaryHerbDropMap.put(4023020, 95);
        mysteriousLegendaryHerbDropMap.put(4023021, 50);

        mysteriousLegendaryHerbDropMap.put(4021022, 50);
        mysteriousLegendaryHerbDropMap.put(4021021, 10);

        mysteriousLegendaryHerbDropMap.put(4007000, 30);
        mysteriousLegendaryHerbDropMap.put(4007001, 30);
        mysteriousLegendaryHerbDropMap.put(4007002, 30);
        mysteriousLegendaryHerbDropMap.put(4007003, 30);
        mysteriousLegendaryHerbDropMap.put(4007004, 30);
        mysteriousLegendaryHerbDropMap.put(4007005, 30);
        mysteriousLegendaryHerbDropMap.put(4007006, 30);
        mysteriousLegendaryHerbDropMap.put(4007007, 30);
        mysteriousLegendaryHerbDropMap.put(4022023, 50);
        mysteriousLegendaryHerbDropMap.put(4023023, 50);
        mysteriousLegendaryHerbDropMap.put(4023024, 10);

        mysteriousLegendaryHerbDropMap.put(4020009, 20);
        mysteriousLegendaryHerbDropMap.put(2048717, 5);
        mysteriousLegendaryHerbDropMap.put(2048716, 15);
        gatherDrops.put(HARVEST_HERB_START + 13, mysteriousLegendaryHerbDropMap);

        // Base Veins
        // Silver Vein
        var silverVeinDropMap = new HashMap<Integer, Integer>();
        silverVeinDropMap.put(4034815, 80);
        silverVeinDropMap.put(4010001, 80);
        gatherDrops.put(HARVEST_VEIN_START, silverVeinDropMap);

        // Magenta Vein
        var magentaVeinDropMap = new HashMap<Integer, Integer>();
        magentaVeinDropMap.put(4010005, 80);
        magentaVeinDropMap.put(4020001, 80);
        gatherDrops.put(HARVEST_VEIN_START + 1, magentaVeinDropMap);

        // Blue Vein
        var blueVeinDropMap = new HashMap<Integer, Integer>();
        blueVeinDropMap.put(4020005, 80);
        blueVeinDropMap.put(4010001, 80);
        gatherDrops.put(HARVEST_VEIN_START + 2, blueVeinDropMap);

        // Brown Vein
        var brownVeinDropMap = new HashMap<Integer, Integer>();
        brownVeinDropMap.put(4010000, 80);
        brownVeinDropMap.put(4010003, 80);
        gatherDrops.put(HARVEST_VEIN_START + 3, brownVeinDropMap);

        // Emerald Vein
        var emeraldVeinDropMap = new HashMap<Integer, Integer>();
        emeraldVeinDropMap.put(4020003, 80);
        emeraldVeinDropMap.put(4010002, 80);
        emeraldVeinDropMap.put(4004002, 80);
        gatherDrops.put(HARVEST_VEIN_START + 4, emeraldVeinDropMap);

        // Gold Vein
        var goldVeinDropMap = new HashMap<Integer, Integer>();
        goldVeinDropMap.put(4010006, 80);
        goldVeinDropMap.put(4020006, 80);
        gatherDrops.put(HARVEST_VEIN_START + 5, goldVeinDropMap);

        // Aquamarine Vein
        var aquamarineVeinDropMap = new HashMap<Integer, Integer>();
        aquamarineVeinDropMap.put(4020002, 80);
        aquamarineVeinDropMap.put(4020007, 80);
        gatherDrops.put(HARVEST_VEIN_START + 6, aquamarineVeinDropMap);

        // Red Vein
        var redVeinDropMap = new HashMap<Integer, Integer>();
        redVeinDropMap.put(4004000, 80);
        redVeinDropMap.put(4020000, 80);
        gatherDrops.put(HARVEST_VEIN_START + 7, redVeinDropMap);

        // Black Vein
        var blackVeinDropMap = new HashMap<Integer, Integer>();
        blackVeinDropMap.put(4020008, 80);
        blackVeinDropMap.put(4004004, 80);
        gatherDrops.put(HARVEST_VEIN_START + 8, blackVeinDropMap);

        // Purple Vein
        var purpleVeinDropMap = new HashMap<Integer, Integer>();
        purpleVeinDropMap.put(4004001, 80);
        purpleVeinDropMap.put(4004003, 80);
        purpleVeinDropMap.put(4010007, 80);
        gatherDrops.put(HARVEST_VEIN_START + 9, purpleVeinDropMap);

        // Heartstone, gems 6-8
        var heartstoneDropMap = new HashMap<Integer, Integer>();
        heartstoneDropMap.put(4011006, 80);
        heartstoneDropMap.put(4021006, 80);
        heartstoneDropMap.put(4021002, 80);
        heartstoneDropMap.put(4021007, 80);
        heartstoneDropMap.put(4005000, 60);
        heartstoneDropMap.put(4021000, 50);
        heartstoneDropMap.put(4021021, 10);

        heartstoneDropMap.put(4007000, 30);
        heartstoneDropMap.put(4007001, 30);
        heartstoneDropMap.put(4007002, 30);
        heartstoneDropMap.put(4007003, 30);
        heartstoneDropMap.put(4007004, 30);
        heartstoneDropMap.put(4007005, 30);
        heartstoneDropMap.put(4007006, 30);
        heartstoneDropMap.put(4007007, 30);
        heartstoneDropMap.put(4011010, 50);
        heartstoneDropMap.put(4021022, 50);
        heartstoneDropMap.put(4023023, 50);
        heartstoneDropMap.put(4023024, 10);

        heartstoneDropMap.put(4020009, 20);
        heartstoneDropMap.put(2048717, 5);
        heartstoneDropMap.put(2048716, 15);
        gatherDrops.put(HARVEST_VEIN_START + 11, heartstoneDropMap);

        // Mysterious Vein, oils 7-10
        var mysteriousVeinDropMap = new HashMap<Integer, Integer>();
        mysteriousVeinDropMap.put(4011006, 40);
        mysteriousVeinDropMap.put(4021006, 50);
        mysteriousVeinDropMap.put(4021002, 80);
        mysteriousVeinDropMap.put(4021007, 80);
        mysteriousVeinDropMap.put(4005000, 90);
        mysteriousVeinDropMap.put(4021000, 90);
        mysteriousVeinDropMap.put(4005004, 90);
        mysteriousVeinDropMap.put(4021008, 90);
        mysteriousVeinDropMap.put(4011010, 50);
        mysteriousVeinDropMap.put(4021022, 50);
        mysteriousVeinDropMap.put(4021021, 10);

        mysteriousVeinDropMap.put(4007000, 30);
        mysteriousVeinDropMap.put(4007001, 30);
        mysteriousVeinDropMap.put(4007002, 30);
        mysteriousVeinDropMap.put(4007003, 30);
        mysteriousVeinDropMap.put(4007004, 30);
        mysteriousVeinDropMap.put(4007005, 30);
        mysteriousVeinDropMap.put(4007006, 30);
        mysteriousVeinDropMap.put(4007007, 30);
        mysteriousVeinDropMap.put(4023023, 50);
        mysteriousVeinDropMap.put(4023024, 10);

        mysteriousVeinDropMap.put(4020009, 20);
        mysteriousVeinDropMap.put(2048717, 5);
        mysteriousVeinDropMap.put(2048716, 15);
        gatherDrops.put(HARVEST_VEIN_START + 12, mysteriousVeinDropMap);

        // Mysterious Legendary Vein, oils 8-10
        var mysteriousLegendaryVeinDropMap = new HashMap<Integer, Integer>();
        mysteriousLegendaryVeinDropMap.put(4011006, 40);
        mysteriousLegendaryVeinDropMap.put(4021006, 50);
        mysteriousLegendaryVeinDropMap.put(4021002, 80);
        mysteriousLegendaryVeinDropMap.put(4021007, 80);
        mysteriousLegendaryVeinDropMap.put(4005000, 95);
        mysteriousLegendaryVeinDropMap.put(4021000, 95);
        mysteriousLegendaryVeinDropMap.put(4005001, 95);
        mysteriousLegendaryVeinDropMap.put(4005003, 95);
        mysteriousLegendaryVeinDropMap.put(4011008, 50);
        mysteriousLegendaryVeinDropMap.put(4011010, 50);
        mysteriousLegendaryVeinDropMap.put(4021022, 50);
        mysteriousLegendaryVeinDropMap.put(4021021, 10);

        mysteriousLegendaryVeinDropMap.put(4007000, 30);
        mysteriousLegendaryVeinDropMap.put(4007001, 30);
        mysteriousLegendaryVeinDropMap.put(4007002, 30);
        mysteriousLegendaryVeinDropMap.put(4007003, 30);
        mysteriousLegendaryVeinDropMap.put(4007004, 30);
        mysteriousLegendaryVeinDropMap.put(4007005, 30);
        mysteriousLegendaryVeinDropMap.put(4007006, 30);
        mysteriousLegendaryVeinDropMap.put(4007007, 30);
        mysteriousLegendaryVeinDropMap.put(4023023, 50);
        mysteriousLegendaryVeinDropMap.put(4023024, 10);

        mysteriousLegendaryVeinDropMap.put(4020009, 20);
        mysteriousLegendaryVeinDropMap.put(2048717, 5);
        mysteriousLegendaryVeinDropMap.put(2048716, 15);
        gatherDrops.put(HARVEST_VEIN_START + 13, mysteriousLegendaryVeinDropMap);
    }

    public static long getEnchantmentMesoCost(Equip equip) {
        var reqLevel = equip.getReqLevel();
        var chuc = equip.getChuc();
        var superior = equip.getInfo().isSuperiorEqp();

        if (superior) {
            return (long) Math.pow(reqLevel, 3.56);
        }
        if (chuc < 10) {
            return (long) (1000 + Math.pow(reqLevel, 3) * (chuc + 1) / 25);
        } else if (chuc < 15) {
            return (long) (1000 + Math.pow(reqLevel, 3) * Math.pow(chuc + 1, 2.7) / 400);
        } else {
            return (long) (1000 + Math.pow(reqLevel, 3) * Math.pow(chuc + 1, 2.7) / 200);
        }
    }

    public static long getEnchantmentNxCost(Equip equip, long mesoCost) {
        if (equip.getChuc() <= 15) {
            return 0;
        }
        return (long) (mesoCost * 0.012D);
    }

    public static int getVestigeRecoverCost(Equip equip) {
        var level = equip.getReqLevel();

        if (level < 100) {
            return 500000;
        } else if (level < 140) {
            return 1000000;
        } else if (level < 150) {
            return 2000000;
        } else if (level < 160) {
            return 4000000;
        }
        return 11000000;
    }

    public static int getEnchantmentSuccessRate(Equip equip) {
        if (equip.getDropStreak() >= 2) {
            return 1000;
        }
        int chuc = equip.getChuc();
        if (chuc < 0 || chuc > 24) {
            return 0;
        } else if (equip.getInfo().isSuperiorEqp()) {
            return enchantSuccessRatesSuperior[chuc][0];
        } else {
            return enchantSuccessRates[chuc][0];
        }
    }

    public static int getEnchantmentDestroyRate(Equip equip) {
        if (equip.getDropStreak() >= 2) {
            return 0;
        }
        int chuc = equip.getChuc();
        if (chuc < 0 || chuc > 24) {
            return 0;
        } else if (equip.getInfo().isSuperiorEqp()) {
            return enchantSuccessRatesSuperior[chuc][1];
        } else {
            return enchantSuccessRates[chuc][1];
        }
    }

    public static int getStatForSuperiorEnhancement(int reqLevel, short chuc) {
        if (chuc == 0) {
            return reqLevel < 110 ? 2 : reqLevel < 149 ? 9 : 19;
        } else if (chuc == 1) {
            return reqLevel < 110 ? 3 : reqLevel < 149 ? 10 : 20;
        } else if (chuc == 2) {
            return reqLevel < 110 ? 5 : reqLevel < 149 ? 12 : 22;
        } else if (chuc == 3) {
            return reqLevel < 149 ? 15 : 25;
        } else if (chuc == 4) {
            return reqLevel < 149 ? 19 : 29;
        }
        return 0;
    }

    public static int getAttForSuperiorEnhancement(int reqLevel, short chuc) {
        if (chuc == 5) {
            return reqLevel < 150 ? 5 : 9;
        } else if (chuc == 6) {
            return reqLevel < 150 ? 6 : 10;
        } else if (chuc == 7) {
            return reqLevel < 150 ? 7 : 11;
        } else {
            return chuc == 8 ? 12 : chuc == 9 ? 13 : chuc == 10 ? 15 : chuc == 11 ? 17 : chuc == 12 ? 19 : chuc == 13 ? 21 : chuc == 14 ? 23 : 0;
        }
    }

    // ugliest function in swordie
    public static int getEquipStatBoost(Equip equip, EnchantStat es, short chuc) {
        int stat = 0;
        // hp/mp
        if (es == EnchantStat.MHP || es == EnchantStat.MMP) {
            stat += chuc <= 2 ? 5 : chuc <= 4 ? 10 : chuc <= 6 ? 15 : chuc <= 8 ? 20 : chuc <= 14 ? 25 : 0;
        }
        int reqLevel = equip.getReqLevel() + equip.getiIncReq();
        // all stat
        if (es == EnchantStat.STR || es == EnchantStat.DEX || es == EnchantStat.INT || es == EnchantStat.LUK) {
            if (chuc <= 4) {
                stat += 2;
            } else if (chuc <= 14) {
                stat += 3;
            } else if (chuc <= 21) {
                stat += reqLevel <= 137 ? 7 : reqLevel <= 149 ? 9 : reqLevel <= 159 ? 11 : reqLevel <= 199 ? 13 : 15;
            }
        }
        // att for all equips
        if ((es == EnchantStat.PAD || es == EnchantStat.MAD) && chuc >= 15) {
            if (chuc == 15) {
                stat += reqLevel <= 137 ? 6 : reqLevel <= 149 ? 7 : reqLevel <= 159 ? 8 : reqLevel <= 199 ? 9 : 12;
            } else if (chuc == 16) {
                stat += reqLevel <= 137 ? 7 : reqLevel <= 149 ? 8 : reqLevel <= 159 ? 9 : reqLevel <= 199 ? 9 : 13;
            } else if (chuc == 17) {
                stat += reqLevel <= 137 ? 7 : reqLevel <= 149 ? 8 : reqLevel <= 159 ? 9 : reqLevel <= 199 ? 10 : 14;
            } else if (chuc == 18) {
                stat += reqLevel <= 137 ? 8 : reqLevel <= 149 ? 9 : reqLevel <= 159 ? 10 : reqLevel <= 199 ? 11 : 14;
            } else if (chuc == 19) {
                stat += reqLevel <= 137 ? 9 : reqLevel <= 149 ? 10 : reqLevel <= 159 ? 11 : reqLevel <= 199 ? 12 : 15;
            } else if (chuc == 20) {
                stat += reqLevel <= 149 ? 11 : reqLevel <= 159 ? 12 : reqLevel <= 199 ? 13 : 16;
            } else if (chuc == 21) {
                stat += reqLevel <= 149 ? 12 : reqLevel <= 159 ? 13 : reqLevel <= 199 ? 14 : 17;
            } else if (chuc == 22) {
                stat += reqLevel <= 149 ? 17 : reqLevel <= 159 ? 18 : reqLevel <= 199 ? 19 : 21;
            } else if (chuc == 23) {
                stat += reqLevel <= 149 ? 19 : reqLevel <= 159 ? 20 : reqLevel <= 199 ? 21 : 23;
            } else if (chuc == 24) {
                stat += reqLevel <= 149 ? 21 : reqLevel <= 159 ? 22 : reqLevel <= 199 ? 23 : 25;
            }
        }
        // att gains for weapons
        if (ItemConstants.isWeapon(equip.getItemId()) && !ItemConstants.isSecondary(equip.getItemId())) {
            if (chuc <= 14) {
                if (es == EnchantStat.PAD) {
                    stat += equip.getiPad() * 0.02;
                } else if (es == EnchantStat.MAD) {
                    stat += equip.getiMad() * 0.02;
                }
            } else if (es == EnchantStat.PAD || es == EnchantStat.MAD) {
                stat += chuc == 22 ? 13 : chuc == 23 ? 12 : chuc == 24 ? 11 : 0;
                if (reqLevel == 200 && chuc == 15) {
                    stat += 1;
                }
            }
        }
        // att gain for gloves, enhancements 4/6/8/10 and 12-14
        if (ItemConstants.isGlove(equip.getItemId()) && (es == EnchantStat.PAD || es == EnchantStat.MAD)) {
            if ((chuc <= 10 && chuc % 2 == 0) || (chuc >= 12 && chuc <= 14)) {
                stat += 1;
            }
        }
        // speed/jump for shoes
        if (ItemConstants.isShoe(equip.getItemId()) && (es == EnchantStat.SPEED || es == EnchantStat.JUMP) && chuc <= 4) {
            stat += 1;
        }
        return stat;
    }

    public static int getEnchantmentValByChuc(Equip equip, EnchantStat es, short chuc, int curAmount) {
        var baseEquip = ItemData.getEquipInfoById(equip.getItemId());
        if (equip.isCash() || baseEquip == null || (baseEquip.getTuc() <= 0 && !ItemConstants.isTucIgnoreItem(equip.getItemId()))) {
            return 0;
        }
        if (es == EnchantStat.DEF) {
            return (int) (equip.getiPDD() * (ItemConstants.isOverall(equip.getItemId()) ? 0.10 : 0.05));
        }
        if (!equip.getInfo().isSuperiorEqp()) {
            return getEquipStatBoost(equip, es, chuc);
        } else {
            if (es == EnchantStat.STR || es == EnchantStat.DEX || es == EnchantStat.INT || es == EnchantStat.LUK) {
                return getStatForSuperiorEnhancement(equip.getReqLevel() + equip.getiIncReq(), chuc);
            }
            if (es == EnchantStat.PAD || es == EnchantStat.MAD) {
                return getAttForSuperiorEnhancement(equip.getReqLevel() + equip.getiIncReq(), chuc);
            }
        }
        return 0;
    }

    public static BaseStat getMainStatByJob(short job) {
        if (JobConstants.isJett(job) || JobConstants.isCorsair(job) || JobConstants.isWildHunter(job)
                || JobConstants.isMercedes(job) || JobConstants.isAngelicBuster(job) || JobConstants.isWindArcher(job)
                || JobConstants.isMechanic(job) || JobConstants.isAdventurerArcher(job) || JobConstants.isKain(job)) {
            return BaseStat.dex;

        } else if (JobConstants.isBeastTamer(job) || JobConstants.isBlazeWizard(job) || JobConstants.isBishop(job)
                || JobConstants.isEvan(job) || JobConstants.isIceLightning(job) || JobConstants.isFirePoison(job)
                || JobConstants.isAdventurerMage(job) || JobConstants.isKanna(job) || JobConstants.isKinesis(job)
                || JobConstants.isLuminous(job) || JobConstants.isIllium(job) || JobConstants.isBattleMage(job)
                || JobConstants.isLara(job)) {
            return BaseStat.inte;

        } else if (JobConstants.isAdventurerThief(job) || JobConstants.isNightLord(job) || JobConstants.isShadower(job)
                || JobConstants.isPhantom(job) || JobConstants.isNightWalker(job) || JobConstants.isDualBlade(job)
                || JobConstants.isCadena(job) || JobConstants.isHoYoung(job)) {
            return BaseStat.luk;

        } else if (JobConstants.isDemonAvenger(job)) {
            return BaseStat.mhp;
        } else if (JobConstants.isBeginnerJob(job) || JobConstants.isBuccaneer(job) || JobConstants.isAdventurerPirate(job)
                || JobConstants.isPinkBean(job) || JobConstants.isDawnWarrior(job) || JobConstants.isKaiser(job)
                || JobConstants.isZero(job) || JobConstants.isDemon(job) || JobConstants.isDemonSlayer(job)
                || JobConstants.isAran(job) || JobConstants.isCannonShooter(job) || JobConstants.isDarkKnight(job)
                || JobConstants.isHero(job) || JobConstants.isPaladin(job) || JobConstants.isBlaster(job)
                || JobConstants.isHayato(job) || JobConstants.isMihile(job) || JobConstants.isShade(job)
                || JobConstants.isThunderBreaker(job) || JobConstants.isAdventurerWarrior(job) || JobConstants.isArk(job)
                || JobConstants.isAdele(job)) {
            return BaseStat.str;

        } else
            return null;
    }

    public static ItemJob getItemJobByJob(int jobArg) {
        short job = (short) jobArg;
        if (JobConstants.isWarriorEquipJob(job)) {
            return ItemJob.WARRIOR;
        }
        if (JobConstants.isArcherEquipJob(job)) {
            return ItemJob.BOWMAN;
        }
        if (JobConstants.isMageEquipJob(job)) {
            return ItemJob.MAGICIAN;
        }
        if (JobConstants.isThiefEquipJob(job)) {
            return ItemJob.THIEF;
        }
        if (JobConstants.isPirateEquipJob(job)) {
            return ItemJob.PIRATE;
        } else {
            return ItemJob.BEGINNER;
        }
    }

    public static BaseStat getSecStatByMainStat(BaseStat mainStat) {
        if (mainStat == null) {
            return null;
        }
        switch (mainStat) {
            case str:
                return BaseStat.dex;
            case dex:
                return BaseStat.str;
            case inte:
                return BaseStat.luk;
            case luk:
                return BaseStat.dex;
        }
        return null;
    }

    public static double getExpOrbExpModifierById(int itemID) {
        switch (itemID) {
            case BLUE_EXP_ORB_ID:
                return BLUE_EXP_ORB_MULT;
            case PURPLE_EXP_ORB_ID:
                return PURPLE_EXP_ORB_MULT;
            case RED_EXP_ORB_ID:
                return RED_EXP_ORB_MULT;
            case GOLD_EXP_ORB_ID:
                return GOLD_EXP_ORB_MULT;

            case ELITE_CHAMPION_ORB:
                return 1;
        }
        return 0;
    }

    /**
     * Gets a list of possible elite stats by mob level.
     *
     * @param level the level of the mob
     * @return list of Triples, each triple indicating the level (left), extra hp rate (mid) and the extra exp/meso drop rate (right).
     */
    public static List<Triple<Integer, Double, Double>> getEliteInfoByMobLevel(int level) {
        List<Triple<Integer, Double, Double>> list = new ArrayList<>();
        if (level < 100) {
            list.add(new Triple<>(0, 21D, 10.5));
            list.add(new Triple<>(1, 29D, 14.5));
            list.add(new Triple<>(2, 38D, 19D));
        } else if (level < 200) {
            list.add(new Triple<>(0, 30D, 15D));
            list.add(new Triple<>(1, 45D, 22.5));
            list.add(new Triple<>(2, 60D, 30D));
        } else {
            // level >= 200
            list.add(new Triple<>(0, 35D, 17.5));
            list.add(new Triple<>(1, 52.5, 26.25));
            list.add(new Triple<>(2, 70D, 35D));
        }
        return list;
    }

    public static double getPartyExpRateByAttackersAndLeechers(int attackers, int leechers) {
        if (leechers == 1) {
            return 0; // Just 1 attacker
        }
        if (attackers >= 3) {
            switch (leechers) {
                case 6:
                    return 1.95;
                case 5:
                    return 1.5;
                case 4:
                    return 1.1;
                default:
                    return 0.75;
            }
        } else {
            switch (leechers) {
                case 6:
                    return 1.65 + attackers * 0.1;
                case 5:
                    return 1.2 + attackers * 0.1;
                case 4:
                    return 0.8 + attackers * 0.1;
                case 3:
                    return 0.4 + attackers * 0.1;
                default:
                    return 0.15 + attackers * 0.1;
            }
        }
    }

    public static long applyTax(long money) {
        // 5% global tax starting from v180ish
        return Math.round(money * 0.95);
    }

    public static int getExpRequiredForNextGuildLevel(int curLevel) {
        if (curLevel >= 25 || curLevel < 0) {
            return 0;
        }
        return guildExp[curLevel];
    }

    // -1 if not in Maplerunner
    // 0 for lobby
    // N (1-50) for Maplerunner stages
    public static int getMaplerunnerField(int fieldId) {
        // Forest of Tenacity prefix
        if (fieldId / 1000 != 993001) {
            return -1;
        }
        return fieldId % 1000 / 10;
    }

    public static boolean isValidName(String name) {
        return name.length() >= 4 && name.length() <= 13 && Util.isDigitLetterString(name);
    }

    public static boolean isValidEmotion(int emotion) {
        return emotion >= 0 && emotion <= 10;
    }

    public static boolean isFreeMarketField(int id) {
        // room 1~22
        return id > 910000000 && id < 910001000;
    }

    public static int slotsFromLevel(short level) {
        return 4 + (level - 200) / 5;
    }

    public static int getNodeCreateShardCost(int iconID) {
        switch (iconID / 10000000) {
            case 1: // Skill
                return 140;
            case 2: // Enforcement
                return 70;
            case 3: // Special
                return 250;
            default:
                return 0;
        }
    }

    public static double getUnionMultiplier(int level) {
        double multiplier = 0.5; // default for 60~99
        if (level >= 100 && level <= 139) {
            multiplier = 0.4;
        } else if (level >= 140 && level <= 179) {
            multiplier = 0.7;
        } else if (level >= 180 && level <= 199) {
            multiplier = 0.8;
        } else if (level >= 200 && level <= 209) {
            multiplier = 1.0;
        } else if (level >= 210 && level <= 219) {
            multiplier = 1.1;
        } else if (level >= 220 && level <= 229) {
            multiplier = 1.15;
        } else if (level >= 230 && level <= 239) {
            multiplier = 1.2;
        } else if (level >= 240) {
            multiplier = 1.25;
        }
        return multiplier;
    }

    public static UnionChucMultiplier getUnionChucMultiplier(int chuc) {
        // values for chuc 0~59
        double firstMulti = 0.10;
        double secondMulti = 15.0;
        double thirdMulti = 750.0;
        double fourthMulti = 0.0;
        if (chuc >= 60 && chuc <= 119) {
            firstMulti = 0.11;
            secondMulti = 16.5;
            thirdMulti = 825.0;
            fourthMulti = 1250.0;
        } else if (chuc >= 120 && chuc <= 179) {
            firstMulti = 0.12;
            secondMulti = 18.0;
            thirdMulti = 900.0;
            fourthMulti = 2500.0;
        } else if (chuc >= 180 && chuc <= 229) {
            firstMulti = 0.13;
            secondMulti = 19.5;
            thirdMulti = 975.0;
            fourthMulti = 3750.0;
        } else if (chuc >= 230 && chuc <= 259) {
            firstMulti = 0.14;
            secondMulti = 21.0;
            thirdMulti = 1050.0;
            fourthMulti = 5000.0;
        } else if (chuc >= 260 && chuc <= 289) {
            firstMulti = 0.15;
            secondMulti = 22.5;
            thirdMulti = 1125.0;
            fourthMulti = 6250.0;
        } else if (chuc >= 290 && chuc <= 319) {
            firstMulti = 0.16;
            secondMulti = 24.0;
            thirdMulti = 1200.0;
            fourthMulti = 7500.0;
        } else if (chuc >= 320 && chuc <= 349) {
            firstMulti = 0.17;
            secondMulti = 25.5;
            thirdMulti = 1275.0;
            fourthMulti = 8750.0;
        } else if (chuc >= 350 && chuc <= 379) {
            firstMulti = 0.18;
            secondMulti = 27.0;
            thirdMulti = 1350.0;
            fourthMulti = 10000.0;
        } else if (chuc >= 380 && chuc <= 300) {
            firstMulti = 0.19;
            secondMulti = 28.5;
            thirdMulti = 1425.0;
            fourthMulti = 11250.0;
        } else if (chuc >= 400) {
            firstMulti = 0.2;
            secondMulti = 30.0;
            thirdMulti = 1500.0;
            fourthMulti = 12500.0;

        }
        return new UnionChucMultiplier(firstMulti, secondMulti, thirdMulti, fourthMulti);
    }

    public static long calcAuctionCost(long unitPrice, int quant) {
        long price = unitPrice + quant;
        return (long) (AUCTION_DEPOSIT_AMOUNT + price * 0.05);
    }

    public static int getStarForceMultiplier(int perc, int diff) {
        if (perc <= 9) {
            return -100;
        } else if (perc <= 29) {
            return -90;
        } else if (perc <= 49) {
            return -70;
        } else if (perc <= 69) {
            return -50;
        } else if (perc <= 99) {
            return -30;
        } else if (perc == 100) {
            return 0;
        }
        return Math.min(20, diff);
    }

    public static int getArcaneForceMultiplier(int perc) {
        if (perc <= 9) {
            return -90;
        } else if (perc <= 29) {
            return -70;
        } else if (perc <= 49) {
            return -40;
        } else if (perc <= 69) {
            return -30;
        } else if (perc <= 99) {
            return -20;
        } else if (perc <= 109) {
            return 0;
        } else if (perc <= 129) {
            return 10;
        } else if (perc <= 149) {
            return 30;
        }
        return 50;
    }

    public static int[] getHpMpPerLevel(short job) {
        var mainStat = GameConstants.getMainStatByJob(job);
        int hp = HP_PER_LEVEL;
        int mp = MP_PER_LEVEL;
        if (mainStat == BaseStat.str) {
            hp *= STR_HP_MULT;
            mp *= STR_MP_MULT;
        } else if (mainStat == BaseStat.inte) {
            hp *= INT_HP_MULT;
            mp *= INT_MP_MULT;
        }
        return new int[]{hp, mp};
    }

    public static Set<Integer> getRandomHarvestReactorsByLevel(int averageMobLevel, boolean herb) {
        var possibleReactors = new HashSet<Integer>();
        if (herb) {
            if (averageMobLevel >= MIN_LEVEL_FOR_HIGH_LEVEL_HARVESTING) {
                possibleReactors.add(100011);
                possibleReactors.add(100012);
                possibleReactors.add(100013);
            } else {
                possibleReactors.add(100000);
                possibleReactors.add(100001);
                possibleReactors.add(100002);
                possibleReactors.add(100003);
                possibleReactors.add(100004);
                possibleReactors.add(100005);
                possibleReactors.add(100006);
                possibleReactors.add(100007);
                possibleReactors.add(100008);
                possibleReactors.add(100009);
            }
        } else {
            if (averageMobLevel >= MIN_LEVEL_FOR_HIGH_LEVEL_HARVESTING) {
                possibleReactors.add(200011);
                possibleReactors.add(200012);
                possibleReactors.add(200013);
            } else {
                possibleReactors.add(200000);
                possibleReactors.add(200001);
                possibleReactors.add(200002);
                possibleReactors.add(200003);
                possibleReactors.add(200004);
                possibleReactors.add(200005);
                possibleReactors.add(200006);
                possibleReactors.add(200007);
                possibleReactors.add(200008);
                possibleReactors.add(200009);
            }
        }
        return possibleReactors;
    }

    public static int getRequiredMakingSkillForExtraction(int reqLevel) {
        if (reqLevel <= 50) {
            return 1;
        } else if (reqLevel <= 70) {
            return 2;
        } else if (reqLevel <= 90) {
            return 3;
        } else if (reqLevel <= 110) {
            return 4;
        } else if (reqLevel <= 130) {
            return 5;
        } else {
            return 6;
        }
    }

    public static int getExtractionReward(int reqLevel) {
        if (reqLevel <= 60) {
            return 4021013;
        } else if (reqLevel <= 90) {
            return 4021014;
        } else if (reqLevel <= 120) {
            return 4021015;
        } else {
            return 4021016;
        }
    }

    public static int getTraitExpByMakingSkillLevel(int level) {
        return 2 + level * 5;
    }

    public static int getNonCombatLevelByExp(short nonCombatExp) {
        var total = 0;
        var expReq = 20; // for level 0 -> 1
        for (int level = 0; level < 100; level++) {
            total += expReq;
            if (nonCombatExp < total) {
                return level;
            }
            expReq *= getNonCombatLevelMultiplier(level);
        }

        return 100; // max
    }

    private static double getNonCombatLevelMultiplier(int level) {
        if (level >= 0 && level < 10) {
            return 1.3;
        } else if (level < 20) {
            return 1.1;
        } else if (level < 30) {
            return 1.03;
        } else if (level < 70) {
            return 1.015;
        } else {
            return 1.003;
        }
    }

    public static int getCharPotResetCost(CharPotGrade value) {
        switch (value) {
            case Rare:
                return 100;
            case Epic:
                return 200;
            case Unique:
                return 1500;
            case Legendary:
                return 8000;
        }

        return 100;
    }

    public static int getCharPotLockCost(int size, CharPotGrade gradeVal) {
        if (size == 0 || gradeVal == CharPotGrade.Rare || gradeVal == CharPotGrade.Epic) {
            return 0;
        }

        if (gradeVal == CharPotGrade.Unique) {
            if (size == 1) {
                return 1500;
            }

            return 4000;
        } else {
            if (size == 1) {
                return 3000;
            }

            return 8000;
        }
    }

    public static class UnionChucMultiplier {
        public double firstMulti, secondMulti, thirdMulti, fourthMulti;

        public UnionChucMultiplier(double firstMulti, double secondMulti, double thirdMulti, double fourthMulti) {
            this.firstMulti = firstMulti;
            this.secondMulti = secondMulti;
            this.thirdMulti = thirdMulti;
            this.fourthMulti = fourthMulti;
        }
    }

    public static double getDamageBonusFromLevelDifference(int charLevel, int mobLevel) {
        double mult = 0;
        int diff = charLevel - mobLevel;
        if (diff >= 0) {
            diff = Math.min(diff, 5); // max 5 * 2% extra
            mult = 10 + (diff * 2);
        } else if (diff < 0 && diff >= -5) {
            // can do calc based on diff, but needs some rounding, so just to a switch
            switch (diff) {
                case -1:
                    mult = 1.08 * 0.98;
                    break;
                case -2:
                    mult = 1.06 * 0.95;
                    break;
                case -3:
                    mult = 1.04 * 0.93;
                    break;
                case -4:
                    mult = 1.02 * 0.9;
                    break;
                case -5:
                    mult = 1.0 * 0.88;
                    break;
            }
            mult -= 1;
            mult *= 100;
        } else {
            // diff < 5, max out at 40 diff (=100% damage reduction)
            diff = Math.max(-40, diff);
            mult = Math.round(-15 - (-2.5 * (diff + 6)));
        }
        return mult / 100;
    }

    public static Set<Integer> getGatherDrops(int reactorId) {
        if (!gatherDrops.containsKey(reactorId)) {
            return new HashSet<>();
        }
        var drops = new HashSet<Integer>();
        for (var entry : gatherDrops.get(reactorId).entrySet()) {
            var item = entry.getKey();
            var chance = entry.getValue();
            if (Util.succeedProp(chance)) {
                drops.add(item);
            }
        }
        return drops;
    }

    public static boolean isEmoticon(int id) {
        return (id >= 10080001 && id <= 10080010)
                || (id >= 10090001 && id <= 10090004)
                || (id >= 10100001 && id <= 10100006)
                || (id >= 10110001 && id <= 10110004)
                || (id >= 10120001 && id <= 10120004);
    }
}
