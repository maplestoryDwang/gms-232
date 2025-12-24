package net.swordie.ms.constants;

import net.swordie.ms.util.Position;

/**
 * Created on 2-8-2018.
 */
public class BossConstants {

    //  Zakum --------------------------------------------------------------------------------------------------------------
    public static final int EASY_ZAKUM_FIELD = 280030200;
    public static final int NORMAL_ZAKUM_FIELD = 280030100;
    public static final int HARD_ZAKUM_FIELD = 280030000;

    public static final int EASY_ZAKUM_BODY = 8800022;
    public static final int NORMAL_ZAKUM_BODY = 8800002;
    public static final int HARD_ZAKUM_BODY = 8800102;

//  Lotus --------------------------------------------------------------------------------------------------------------

    //      General
    public static final int LOTUS_TIMER = 30 * 60;  // Minutes
    public static final int ENTRY_COOLDOWN = 30;

    //      Normal Lotus
    public static final int LOTUS_P3 = 8950002;
    public static final long LOTUS_NORMAL_HP_1 = 400_000_000_000L;      // 400 bil
    public static final long LOTUS_NORMAL_HP_2 = 750_000_000_000L;      // 750 bil
    public static final long LOTUS_NORMAL_HP_3 = 1_000_000_000_000L;    // 1 tril
    public static final int LOTUS_NORMAL_DEATHCOUNT = 5;

    //      Hard Lotus
    public static final long LOTUS_HARD_HP_1 = 1_650_000_000_000L;      // 1.65 tril
    public static final long LOTUS_HARD_HP_2 = 7_000_000_000_000L;      // 7 tril
    public static final long LOTUS_HARD_HP_3 = 15_000_000_000_000L;     // 15 tril
    public static final int LOTUS_HARD_P3 = 8950102;
    public static final int LOTUS_HARD_DEATHCOUNT = 5;

    //      Falling Foothold
    public static final int LOTUS_FALLING_FOOTHOLD_CHANCE = 60;  // 60% chance of spawning when MobSkill Used
    public static final int LOTUS_FALLING_FOOTHOLD_WIDTH = 90; // value used for both  left distance & right distance
    public static final int LOTUS_FALLING_FOOTHOLD_DURATION = 10; // 10 seconds
    public static final int LOTUS_FALLING_FOOTHOLD_SHOCK_TERRAIN_DELAY = 2500; // ms  after falling footholds land, will the shock terrain start

    //      Toss Skill
    public static final int LOTUS_AMOUNT_OF_BEAMS = 3;

    //      Obstacle Atoms
    public static final int LOTUS_OBSTACLE_ATOM_VELOCITY = 9; // Velocity at which the Obstacle Atoms fall down.

    public static final int LOTUS_BLUE_ATOM_EXECUTION_DELAY = 1500; // in ms. Delay between method executions
    public static final int LOTUS_BLUE_ATOM_AMOUNT = 3; // max amount of Atoms spawning attempts in 1 call
    public static final int LOTUS_BLUE_ATOM_PROP = 25; // % chance of actually spawning in
    public static final int LOTUS_BLUE_ATOM_DAMAGE = 25; // % of Max HP

    public static final int LOTUS_YELLOW_ATOM_EXECUTION_DELAY = 1750; // in ms. Delay between method executions
    public static final int LOTUS_YELLOW_ATOM_AMOUNT = 3; // max amount of Atoms spawning attempts in 1 call
    public static final int LOTUS_YELLOW_ATOM_PROP = 20; // % chance of actually spawning in
    public static final int LOTUS_YELLOW_ATOM_DAMAGE = 45; // % of Max HP

    public static final int LOTUS_PURPLE_ATOM_EXECUTION_DELAY = 2000; // in ms. Delay between method executions
    public static final int LOTUS_PURPLE_ATOM_AMOUNT = 3; // max amount of Atoms spawning attempts in 1 call
    public static final int LOTUS_PURPLE_ATOM_PROP = 15; // % chance of actually spawning in
    public static final int LOTUS_PURPLE_ATOM_DAMAGE = 75; // % of Max HP
    //      Hard Lotus
    public static final int LOTUS_ROBOT_ATOM_EXECUTION_DELAY = 3000; // in ms. Delay between method executions
    public static final int LOTUS_ROBOT_ATOM_AMOUNT = 2; // max amount of Atoms spawning attempts in 1 call
    public static final int LOTUS_ROBOT_ATOM_PROP = 10; // % chance of actually spawning in
    public static final int LOTUS_ROBOT_ATOM_DAMAGE = 90; // % of Max HP
    //      Stage 3
    public static final int LOTUS_CRUSHER_ATOM_EXECUTION_DELAY = 10000; // in ms. Delay between method executions
    public static final int LOTUS_CRUSHER_ATOM_AMOUNT = 2; // max amount of Atoms spawning attempts in 1 call
    public static final int LOTUS_CRUSHER_ATOM_PROP = 50; // % chance of actually spawning in
    public static final int LOTUS_CRUSHER_ATOM_DAMAGE = 100; // % of Max HP


//  Root Abyss ---------------------------------------------------------------------------------------------------------

    public static final int NORMAL_CRIMSON_QUEEN_SIMMERING = 8920100;
    public static final int NORMAL_CRIMSON_QUEEN_JOYOUS = 8920101;
    public static final int NORMAL_CRIMSON_QUEEN_WRATHFUL = 8920102;
    public static final int NORMAL_CRIMSON_QUEEN_SORROWFUL = 8920103;

    public static final int CHAOS_CRIMSON_QUEEN_SIMMERING = 8920000;
    public static final int CHAOS_CRIMSON_QUEEN_JOYOUS = 8920001;
    public static final int CHAOS_CRIMSON_QUEEN_WRATHFUL = 8920002;
    public static final int CHAOS_CRIMSON_QUEEN_SORROWFUL = 8920003;




    public static final int CRIMSON_QUEEN_NORMAL_BOX = 8920106;
    public static final int PIERRE_NORMAL_BOX = 8900103;
    public static final int VELLUM_NORMAL = 8930100;

    public static final int CRIMSON_QUEEN_CHAOS_BOX = 8920006;
    public static final int PIERRE_CHAOS_BOX = 8900003;
    public static final int QUEEN_CHAOS = 8920002;
    public static final int VELLUM_CHAOS = 8930000;
    public static final long VON_BON_CHAOS_HP = 800_000_000_000L;
    public static final long VELLUM_CHAOS_HP = 1_200_000_000_000L;
    public static final long QUEEN_CHAOS_HP = 900_000_000_000L;
    public static final long PIERRE_CHAOS_HP = 600_000_000_000L;

    //Pierre-----------------------------------------------------------------------------------------------------------
    public static final int PIERRE_CHAOS_FIELDID = 105200610;
    public static final int PIERRE_NORMAL_FIELDID = 105200210;

    public static final int PIERRE_CHAOS_PURPLE = 8900000;
    public static final int PIERRE_CHAOS_RED = 8900001;
    public static final int PIERRE_CHAOS_BLUE = 8900002;

    public static final int PIERRE_NORMAL_PURPLE = 8900100;
    public static final int PIERRE_NORMAL_RED = 8900101;
    public static final int PIERRE_NORMAL_BLUE = 8900102;

    //Von Bon ---------------------------------------------------------------------------------------------------------
    //      Obstacle Atoms
    public static final int VON_BON_ATOM_MIN_VELOCITY = 3; // Min Velocity at which the Obstacle Atoms fall down.
    public static final int VON_BON_ATOM_MAX_VELOCITY = 8; // Max Velocity at which the Obstacle Atoms fall down.


    public static final int VON_BON_GREEN_ATOM_EXECUTION_DELAY = 750; // in ms. Delay between method executions
    public static final int VON_BON_GREEN_ATOM_AMOUNT = 4; // max amount of Atoms spawning attempts in 1 call
    public static final int VON_BON_GREEN_ATOM_PROP = 30; // % chance of actually spawning in
    public static final int VON_BON_GREEN_ATOM_DAMAGE = 33; // % of Max HP

    public static final int VON_BON_BLUE_ATOM_EXECUTION_DELAY = 1000; // in ms. Delay between method executions
    public static final int VON_BON_BLUE_ATOM_AMOUNT = 3; // max amount of Atoms spawning attempts in 1 call
    public static final int VON_BON_BLUE_ATOM_PROP = 20; // % chance of actually spawning in
    public static final int VON_BON_BLUE_ATOM_DAMAGE = 50; // % of Max HP

    public static final int VON_BON_PURPLE_ATOM_EXECUTION_DELAY = 2000; // in ms. Delay between method executions
    public static final int VON_BON_PURPLE_ATOM_AMOUNT = 2; // max amount of Atoms spawning attempts in 1 call
    public static final int VON_BON_PURPLE_ATOM_PROP = 10; // % chance of actually spawning in
    public static final int VON_BON_PURPLE_ATOM_DAMAGE = 100; // % of Max HP


    public static final int VON_BON_TIME_SHIFT = 7; //s
    public static final int VON_BON_TIME = 600; //seconds


    public static final int VON_BON_NORMAL = 8910100;
    public static final int VON_BON_NORMAL_FIELDID = 105200110;
    public static final int VON_BON_NORMAL_REALM_FIELDID = 105200520;
    public static final int VON_BON_NORMAL_DISEMBODIED = 8910101;


    public static final int VON_BON_CHAOS = 8910000;
    public static final int VON_BON_CHAOS_FIELDID = 105200510;
    public static final int VON_BON_CHAOS_REALM_FIELDID = 105200520;
    public static final int VON_BON_CHAOS_DISEMBODIED = 8910001;


//  Gollux -------------------------------------------------------------------------------------------------------------

    //      General
    public static final int GOLLUX_TIME = 30 * 60; // 30 minutes
    public static final int GOLLUX_DEATH_COUNT = 5; // starting amount of Death Count
    public static final int MAX_GOLLUX_STACKS = 5;
    public static final String GOLLUX_SPAWN_KEY = "Spawned";
    public static final String GOLLUX_FINISHED_KEY = "Killed";

    public static final long GOLLUX_ABDOMEN_HP = 990000000;     // 990mil HP
    public static final long GOLLUX_L_SHOULDER_HP = 990000000;  // 990mil HP
    public static final long GOLLUX_R_SHOULDER_HP = 990000000;  // 990mil HP

    public static final long EASY_GOLLUX_HEAD_JAW = 50000000;       // 50mil HP
    public static final long EASY_GOLLUX_HEAD_EYES = 10000000;      // 10mil HP
    public static final long EASY_GOLLUX_HEAD_JEWEL = 5000000;     // 5mil HP

    public static final long NORMAL_GOLLUX_HEAD_JAW = 300000000;       // 3bil HP
    public static final long NORMAL_GOLLUX_HEAD_EYES = 100000000;      // 100mil HP
    public static final long NORMAL_GOLLUX_HEAD_JEWEL = 50000000;     // 50mil HP

    public static final long HARD_GOLLUX_HEAD_JAW = 15_000_000_000L;       // 15bil HP
    public static final long HARD_GOLLUX_HEAD_EYES = 1500000000;      // 1.5bil HP
    public static final long HARD_GOLLUX_HEAD_JEWEL = 300000000;     // 300mil HP

    public static final long HELL_GOLLUX_HEAD_JAW = 25_000_000_000L;       // 25bil HP
    public static final long HELL_GOLLUX_HEAD_EYES = 30_000_000_000L;      // 30bil HP
    public static final long HELL_GOLLUX_HEAD_JEWEL = 30_000_000_000L;     // 30bil HP

    public static final int GOLLUX_REWARD_EASY = 9601459;
    public static final int GOLLUX_REWARD_NORMAL = 9601460;
    public static final int GOLLUX_REWARD_HARD = 9601461;
    public static final int GOLLUX_REWARD_HELL = 9601462;

//  Magnus -------------------------------------------------------------------------------------------------------------

    //      General
    public static final int HARD_MAGNUS_TEMPLATE = 8880000;
    public static final int NORMAL_MAGNUS_TEMPLATE = 8880002;
    public static final int EASY_MAGNUS_TEMPLATE = 8880010;
    public static final int EASY_MAGNUS_MAPID = 401060300;
    public static final int NORMAL_MAGNUS_MAPID = 401060200;
    public static final int HARD_MAGNUS_MAPID = 401060100;

    public static final int MAGNUS_TIME = 20 * 60; // 20 minutes
    public static final int MAGNUS_DEATHCOUNT = 15; // 15 death count

    public static final int V_MAGNUS_TEMPLATE = 9001059;
    public static final long V_QUEST_MAGNUS_HP = 25_000_000_000L;

    //      Obstacle Atoms
    public static final int MAGNUS_OBSTACLE_ATOM_VELOCITY = 5; // Velocity at which the Obstacle Atoms fall down.

    public static final int MAGNUS_GREEN_ATOM_EXECUTION_DELAY = 1000; // in ms. Delay between method executions
    public static final int MAGNUS_GREEN_ATOM_AMOUNT = 4; // max amount of Atoms spawning attempts in 1 call
    public static final int MAGNUS_GREEN_ATOM_PROP = 35; // % chance of actually spawning in
    public static final int MAGNUS_GREEN_ATOM_DAMAGE = 25; // % of Max HP

    public static final int MAGNUS_BLUE_ATOM_EXECUTION_DELAY = 750; // in ms. Delay between method executions
    public static final int MAGNUS_BLUE_ATOM_AMOUNT = 4; // max amount of Atoms spawning attempts in 1 call
    public static final int MAGNUS_BLUE_ATOM_PROP = 30; // % chance of actually spawning in
    public static final int MAGNUS_BLUE_ATOM_DAMAGE = 50; // % of Max HP

    public static final int MAGNUS_PURPLE_ATOM_EXECUTION_DELAY = 2000; // in ms. Delay between method executions
    public static final int MAGNUS_PURPLE_ATOM_AMOUNT = 3; // max amount of Atoms spawning attempts in 1 call
    public static final int MAGNUS_PURPLE_ATOM_PROP = 25; // % chance of actually spawning in
    public static final int MAGNUS_PURPLE_ATOM_DAMAGE = 100; // % of Max HP


//  Horntail -------------------------------------------------------------------------------------------------------

    //      General
    public static final int HORNTAIL_DEATH_COUNT = 5;
    public static final String HORNTAIL_PROGRESS = "HorntailProgress";
    public static final int DEAD_HORNTAIL_HEAD_A = 8810010;
    public static final int DEAD_HORNTAIL_HEAD_B = 8810011;
    public static final int DEAD_HORNTAIL_HEAD_C = 8810012;
    public static final int DEAD_HORNTAIL_LEFT_HAND = 8810013;
    public static final int DEAD_HORNTAIL_RIGHT_HAND = 8810014;
    public static final int DEAD_HORNTAIL_WINGS = 8810015;
    public static final int DEAD_HORNTAIL_LEGS = 8810016;
    public static final int DEAD_HORNTAIL_TAILS = 8810017;


    // Easy
    public static final int HORNTAIL_EASY = 8810214;
    public static final int EASY_HORNTAIL_TIME = 75 * 60; // 1 hr, 15 min timer

    public static final int EASY_HORNTAIL_HEAD_1 = 8810200;
    public static final int EASY_HORNTAIL_HEAD_2 = 8810201;

    public static final int EASY_HORNTAIL_HEAD_A = 8810202;
    public static final int EASY_HORNTAIL_HEAD_B = 8810203;
    public static final int EASY_HORNTAIL_HEAD_C = 8810204;
    public static final int EASY_HORNTAIL_LEFT_HAND = 8810205;
    public static final int EASY_HORNTAIL_RIGHT_HAND = 8810206;
    public static final int EASY_HORNTAIL_WINGS = 8810207;
    public static final int EASY_HORNTAIL_LEGS = 8810208;
    public static final int EASY_HORNTAIL_TAIL = 8810209;

    public static final int EASY_HORNTAIL_FIELDID_1 = 240_060_002;
    public static final int EASY_HORNTAIL_FIELDID_2 = 240_060_102;
    public static final int EASY_HORNTAIL_FIELDID_3 = 240_060_300;

    // Normal
    public static final int HORNTAIL_NORMAL = 8810018;

    public static final int NORMAL_HORNTAIL_HEAD_1 = 8810000;
    public static final int NORMAL_HORNTAIL_HEAD_2 = 8810001;

    public static final int NORMAL_HORNTAIL_HEAD_A = 8810002;
    public static final int NORMAL_HORNTAIL_HEAD_B = 8810003;
    public static final int NORMAL_HORNTAIL_HEAD_C = 8810004;
    public static final int NORMAL_HORNTAIL_LEFT_HAND = 8810005;
    public static final int NORMAL_HORNTAIL_RIGHT_HAND = 8810006;
    public static final int NORMAL_HORNTAIL_WINGS = 8810007;
    public static final int NORMAL_HORNTAIL_LEGS = 8810008;
    public static final int NORMAL_HORNTAIL_TAIL = 8810009;

    public static final int NORMAL_HORNTAIL_FIELDID_1 = 240_060_000;
    public static final int NORMAL_HORNTAIL_FIELDID_2 = 240_060_100;
    public static final int NORMAL_HORNTAIL_FIELDID_3 = 240_060_200;

    // Chaos
    public static final int HORNTAIL_HARD = 8810122;
    public static final long HORNTAIL_CHAOS_MULTIPLIER = 4;
    public static final long HORNTAIL_CHAOS_HP = 10_000_000_000L * HORNTAIL_CHAOS_MULTIPLIER; // 40bil
    public static final int CHAOS_HORNTAIL_TIME = 150 * 60; // 2 hrs, 30 min timer

    public static final int CHAOS_HORNTAIL_HEAD_1 = 8810100;
    public static final int CHAOS_HORNTAIL_HEAD_2 = 8810101;

    public static final int CHAOS_HORNTAIL_HEAD_A = 8810102;
    public static final int CHAOS_HORNTAIL_HEAD_B = 8810103;
    public static final int CHAOS_HORNTAIL_HEAD_C = 8810104;
    public static final int CHAOS_HORNTAIL_LEFT_HAND = 8810105;
    public static final int CHAOS_HORNTAIL_RIGHT_HAND = 8810106;
    public static final int CHAOS_HORNTAIL_WINGS = 8810107;
    public static final int CHAOS_HORNTAIL_LEGS = 8810108;
    public static final int CHAOS_HORNTAIL_TAIL = 8810109;

    public static final int CHAOS_HORNTAIL_FIELDID_1 = 240_060_001;
    public static final int CHAOS_HORNTAIL_FIELDID_2 = 240_060_101;
    public static final int CHAOS_HORNTAIL_FIELDID_3 = 240_060_201;


//  Hilla --------------------------------------------------------------------------------------------------------------

    //      General
    public static final int HILLA_NORMAL = 8870000;
    public static final int HILLA_HARD = 8870100;
    public static final long HILLA_HARD_HP = 50400000000L;
    public static final int EASY_HILLA_TIME = 30 * 60; // 1 hr, 15 min timer
    public static final int NORMAL_HILLA_TIME = 150 * 60; // 2 hrs, 30 min timer


    //  Von Leon -----------------------------------------------------------------------------------------------------------
    public static final int VON_LEON_SUMMON_NPC = 2161000;

    public static final int VON_LEON_TIME = 30 * 60; // 30 min timer

    public static final int VON_LEON_DEATHCOUNT = 5;
    public static final int VON_LEON_EASY_FIELDID = 211070300;
    public static final int VON_LEON_NORMAL_FIELDID = 211070400;
    public static final int VON_LEON_HARD_FIELDID = 211070500;
    public static final int VON_LEON_PRISON_EASY_FIELDID = 211070101;
    public static final int VON_LEON_PRISON_NORMAL_FIELDID = 211070103;
    public static final int VON_LEON_PRISON_HARD_FIELDID = 211070105;
    public static final int VON_LEON_EASY = 8840007; // old 8840007
    public static final int VON_LEON_NORMAL = 8840000; // old 8840000
    public static final int VON_LEON_HARD = 8840014;
    public static final long VON_LEON_HARD_HP = 21000000000L;

    //  Cygnus -------------------------------------------------------------------------------------------------------------
    public static final int CYGNUS_TIME = 30 * 60; // 30 min timer
    public static final int CYGNUS_EASY = 8850111;
    public static final int SHINSOO_CYGNUS_EASY = 8850110;
    public static final int CYGNUS_NORMAL = 8850011;
    public static final int CYGNUS_FLAMES_DELAY = 2500; //ms
    public static final int CYGNUS_EASY_MAP = 271041100;
    public static final int CYGNUS_NORMAL_MAP = 271040100;


    //  Arkarium -----------------------------------------------------------------------------------------------------------
    public static final int ARKARIUM_TIME = 30 * 60; // 30 min timer
    public static final int ARKARIUM_EASY = 8860005;
    public static final long ARKARIUM_EASY_HP = 8_400_000_000L;
    public static final long ARKARIUM_EASY_FIELD = 272_020_210;
    public static final int ARKARIUM_EASY_BANMAP_FIELDID = 272020300;
    public static final int ARKARIUM_NORMAL = 8860000;
    public static final long ARKARIUM_NORMAL_HP = 75_600_000_000L;
    public static final long ARKARIUM_NORMAL_FIELD = 272_020_200;
    public static final int ARKARIUM_NORMAL_BANMAP_FIELDID = 272020310;
    public static final int TWISTED_DARKNESS_DUPLICATE = 8860003;

    //  Pink Bean ----------------------------------------------------------------------------------------------------------
    public static final int ARIEL = 8820002;
    public static final long ARIEL_HP = 3_160_000_000L;
    public static final int ARIEL_STATUE = 8820019;
    public static final int SOLOMON = 8820003;
    public static final long SOLOMON_HP = 1_600_000_000L;
    public static final int SOLOMON_STATUE = 8820020;
    public static final int REX = 8820004;
    public static final long REX_HP = 1_600_000_000L;
    public static final int REX_STATUE = 8820021;
    public static final int HUGIN = 8820005;
    public static final long HUGIN_HP = 2_370_000_000L;
    public static final int HUGIN_STATUE = 8820022;
    public static final int MUNIN = 8820006;
    public static final long MUNIN_HP = 2_375_000_000L;
    public static final int MUNIN_STATUE = 8820023;
    public static final int MUNIN_BANMAP_FIELDID = 270050200;

    public static final int CHAOS_ARIEL = 8820102;
    public static final long CHAOS_ARIEL_HP = 37_800_000_000L;
    public static final int CHAOS_SOLOMON = 8820103;
    public static final long CHAOS_SOLOMON_HP = 21_000_000_000L;
    public static final int CHAOS_REX = 8820104;
    public static final long CHAOS_REX_HP = 21_000_000_000L;
    public static final int CHAOS_HUGIN = 8820105;
    public static final long CHAOS_HUGIN_HP = 25_200_000_000L;
    public static final int CHAOS_MUNIN = 8820106;
    public static final long CHAOS_MUNIN_HP = 25_200_000_000L;
    public static final int CHAOS_MUNIN_BANMAP_FIELDID = 270051200;

    public static final int PINK_BEAN_TIME = 30 * 60; // 30 min
    public static final int PINK_BEAN = 8820000;
    public static final int PINK_BEAN_P2 = 8820001;
    public static final long PINK_BEAN_HP_P1 = ARIEL_HP + SOLOMON_HP + REX_HP + HUGIN_HP + MUNIN_HP;
    public static final long PINK_BEAN_HP_P2 = 4_200_000_000L;
    public static final int PINK_BEAN_FIELD = 270050100;
    public static final int CHAOS_PINK_BEAN_P1 = 8820100;
    public static final int CHAOS_PINK_BEAN_P2 = 8820212;
    public static final long CHAOS_PINK_BEAN_HP_P1 = CHAOS_ARIEL_HP + CHAOS_SOLOMON_HP + CHAOS_REX_HP + CHAOS_HUGIN_HP + CHAOS_MUNIN_HP;
    public static final long CHAOS_PINK_BEAN_HP_P2 = 211_050_000_000L;
    public static final int CHAOS_PINK_BEAN_FIELD = 270051100;
    public static final String PINK_BEAN_CTR = "bossesKilled";

    //  Papulatus ----------------------------------------------------------------------------------------------------------
    public static final int PAPULATUS_ALARM_CLOCK_COOLTIME_MILLIS = 1000 * 60 * 2; // 2 minutes
    public static final int PAPULATUS_ALARM_CLOCK_MILLIS = 1000 * 30; // 30 seconds
    public static final int PAPULATUS_LASER_INIT_COOLTIME_MILLIS = 1000 * 60; // 1 minute
    public static final int PAPULATUS_LASER_COOLTIME_MILLIS = 1000 * 30; // 30 seconds
    public static final int PAPULATUS_LASER_MILLIS = 1000 * 30; // 30 seconds
    public static final int PAPULATUS_LASER_MIN = 0x4010; // 30 seconds
    public static final int PAPULATUS_LASER_MAX = 0x4040; // 30 seconds
    public static final int PAPULATUS_TIME = 30 * 60; // 30 minutes
    public static final int PAPULATUS_SOLO_TIMER_MOB_COUNT = 3; // 30 minutes

    public static final int PAPULATUS_EASY_P0 = 8500000;
    public static final int PAPULATUS_EASY_P1 = 8500001;
    public static final int PAPULATUS_EASY_P2 = 8500002;
    public static final int PAPULATUS_EASY_DC = 50;
    public static final int PAPULATUS_NORMAL_P0 = 8500010;
    public static final int PAPULATUS_NORMAL_P1 = 8500011;
    public static final int PAPULATUS_NORMAL_P2 = 8500012;
    public static final int PAPULATUS_NORMAL_DC = 10;
    public static final int PAPULATUS_CHAOS_P0 = 8500020;
    public static final int PAPULATUS_CHAOS_P1 = 8500021;
    public static final int PAPULATUS_CHAOS_P2 = 8500022;
    public static final int PAPULATUS_CHAOS_DC = 5;




    //  Demian -------------------------------------------------------------------------------------------------------------
    public static final int DEMIAN_TIME = 30 * 60; // 30 min
    public static final int BRAND_OF_SACRIFICE = 80001974; // Skill ID

    public static final int DEMIAN_NORMAL_TEMPLATE_ID_1 = 8880100;
    public static final int DEMIAN_NORMAL_TEMPLATE_ID_2 = 8880101;
    public static final int DEMIAN_HARD_TEMPLATE_ID_1 = 8880110; // Only real Damien, that uses skills other than Teleport
    public static final int DEMIAN_HARD_TEMPLATE_ID_2 = 8880111; // Only real Damien, that uses skills other than Teleport

    public static final long DEMIAN_HP_NORMAL_1 = 8_578_500_000_000L;
    public static final long DEMIAN_HP_NORMAL_2 = 14_690_300_000_000L;
    public static final long DEMIAN_HP_HARD_1 = 15_310_000_000_000L;
    public static final long DEMIAN_HP_HARD_2 = 18_840_000_000_000L;

    // Sword
    public static final int DEMIAN_SWORD_VELOCITY = 30; // default velocity
    public static final int DEMIAN_SWORD_TARGETING_VELOCITY = 60; // default velocity when targeting

    // Stigma
    public static final int DEMIAN_MAX_STIGMA = 7; // max stigma
    public static final int DEMIAN_PASSIVE_STIGMA_TIME = 30 * 1000; // Every 30 seconds, users are hit with +1 stigma
    public static final int DEMIAN_STIGMA_INCINERATE_OBJECT_RESPAWN_TIME = 20 * 1000; // Stigma Pillar spawns every 20seconds
    public static final int DEMIAN_STIGMA_INCINERATE_OBJECT_DURATION_TIME = 10 * 1000; // Stigma Pillar lasts 10 seconds


    //  Ursus --------------------------------------------------------------------------------------------------------------
    public static final int URSUS_TEMPLATE_ID = 8881000;


    //  Gollux -------------------------------------------------------------------------------------------------------------
    public static final int[][] GOLLUX_HP_MULTIPLIERS = {{1, 60, 300, 500}, {1, 10, 150, 3000}, {1, 10, 300, 30000}};
    public static final int GOLLUX_FIRST_MAP = 863010100;
    public static final int GOLLUX_RIGHT_SHOULDER = 863010330;
    public static final int GOLLUX_LEFT_SHOULDER = 863010430;
    public static final int GOLLUX_ABDOMEN = 863010240;
    public static final int[] GOLLUX_RIGHT_HAND_SKILLS = new int[]{3, 5, 6, 8, 10};
    public static final int[] GOLLUX_LEFT_HAND_SKILLS = new int[]{2, 4, 7, 9, 11};
    public static final int GOLLUX_BREATH_ATTACK = 1;
    public static final int GOLLUX_DROP_STONE_CHANCE = 25;

    //  Princess No --------------------------------------------------------------------------------------------------------
    public static final int PRINCESS_NO = 9450022;

    //  Akechi  ------------------------------------------------------------------------------------------------------------
    public static final int AKECHI = 9601622;

//  RanMaru ------------------------------------------------------------------------------------------------------------

    // General
    public static final int RANMARU_TIMER = 30 * 60; // 30 min timer
    public static final int RANMARU_DEATHCOUNT = 10;
    public static final String RANMARU_SPAWN_KEY = "Spawned";
    public static final Position RANMARU_LEFT_WALKER_NORMAL_POSITION = new Position(-781, -169);
    public static final Position RANMARU_RIGHT_WALKER_NORMAL_POSITION = new Position(-69, -135);
    public static final Position RANMARU_TOP_WALKER_NORMAL_POSITION = new Position(-329, -298);

    // Normal
    public static final long RANMARU_NORMAL_HP = 1_000_000_000L; // 1 bil HP
    public static final int RANMARU_NORMAL_BODY = 9421581;
    public static final int RANMARU_NORMAL_DEAD_BODY = 9421582;
    public static final int RANMARU_NORMAL_MAP = 807300110;
    public static final int RANMARU_RESTRAINED_SPIRIT_WALKER_NORMAL = 9421575;
    public static final int RANMARU_HEALING_SPIRIT_WALKER_NORMAL = 9421576;

    // Hard
    public static final long RANMARU_HARD_HP = 10_500_000_000L; // 10.5 bil HP
    public static final int RANMARU_HARD_BODY_1 = 9421583;
    public static final int RANMARU_HARD_BODY_2 = 9421586;
    public static final int RANMARU_HARD_BODY_3 = 9421587;
    public static final int RANMARU_HARD_BODY_4 = 9421588;
    public static final int RANMARU_HARD_BODY_5 = 9421589;
    public static final int RANMARU_HARD_DEAD_BODY = 9421584;
    public static final int RANMARU_HARD_MAP = 807300210;
    public static final int RANMARU_RESTRAINED_SPIRIT_WALKER_HARD = 9421577;
    public static final int RANMARU_INFERNO_SPIRIT_WALKER_HARD = 9421579;
    public static final int RANMARU_HEALING_SPIRIT_WALKER_HARD = 9421578;
    public static final int RANMARU_WALL = 9421585;
    public static final Position RANMARU_LEFT_WALL_START_POSITION = new Position(-1500, 123);
    public static final Position RANMARU_RIGHT_WALL_START_POSITION = new Position(550, 123);
    public static final int RANMARU_DISTANCE_BETWEEN_WALLS = 100;
    public static final int RANMARU_WALL_MAX_COUNT = 10;


//  Dorothy ------------------------------------------------------------------------------------------------------------


    public static final long DOROTHY_HP = 85_500_000_000_000L; // 85t

//  Dorothy ------------------------------------------------------------------------------------------------------------


    public static final int GUARDIAN_ANGEL_SLIME_NORMAL = 9210052;
    public static final int GUARDIAN_ANGEL_SLIME_CHAOS = 9210051;

//  Lucid --------------------------------------------------------------------------------------------------------------

    public static final int LUCID_TIMER = 30 * 60; // 30 min timer
    public static final int LUCID_DEATHCOUNT = 10;
    public static final int LUCID_WELCOME_BARRAGE_COOLTIME = 120 * 1000; // 120 seconds

    public static final int LUCID_TEMPLATE_ID_1 = 8880140;
    public static final int LUCID_TEMPLATE_ID_2 = 8880150;

    public static final int LUCID_REWARD_BOX_EASY = 8880156;
    public static final int LUCID_REWARD_BOX_NORMAL = 8880167;
    public static final int LUCID_REWARD_BOX_HARD = 8880177;

    public static final long LUCID_HP_1 = 23_500_300_000_000L;
    public static final long LUCID_HP_2 = 29_500_000_000_000L;

    //  Will -----------------------------------------------------------------------------------------------------------

    public static final long WILL_P1_HP = 4_200_000_000_000L;
    public static final long WILL_P2_HP = 6_300_000_000_000L;
    public static final long WILL_P3_HP = 10_500_000_000_000L;

    public static final long HARD_WILL_P1_HP = 21_000_000_000_000L;
    public static final long HARD_WILL_P2_HP = 31_500_000_000_000L;
    public static final long HARD_WILL_P3_HP = 52_500_000_000_000L;

    public static final int REAL_WILL_P1 = 8880340;
    public static final int BLUE_WILL_P1 = 8880343;
    public static final int PURPLE_WILL_P1 = 8880344;
    public static final int WILL_P1_DUMMY_1 = 8880351;
    public static final int WILL_P1_DUMMY_2 = 8880355;

    public static final int WILL_P2 = 8880341;
    public static final int WILL_P2_DUMMY_1 = 8880353;
    public static final int WILL_P2_DUMMY_2 = 8880357;

    public static final int WILL_P3 = 8880342;
    public static final int WILL_P3_DUMMY_1 = 8880354;
    public static final int WILL_P3_DUMMY_2 = 8880358;

    public static final int HARD_REAL_WILL_P1 = 8880300;
    public static final int HARD_BLUE_WILL_P1 = 8880303;
    public static final int HARD_PURPLE_WILL_P1 = 8880304;
    public static final int HARD_WILL_P1_DUMMY_1 = 8880321;
    public static final int HARD_WILL_P1_DUMMY_2 = 8880325;

    public static final int HARD_WILL_P2 = 8880301;
    public static final int HARD_WILL_P2_DUMMY_1 = 8880323;
    public static final int HARD_WILL_P2_DUMMY_2 = 8880327;

    public static final int HARD_WILL_P3 = 8880302;
    public static final int HARD_WILL_P3_DUMMY_1 = 8880324;
    public static final int HARD_WILL_P3_DUMMY_2 = 8880328;

    public static final int BEHOLDERS_EYE_BLUE = 8880305;
    public static final int BEHOLDERS_EYE_PURPLE = 8880307;

    public static final long WILL_P2_MOONLIGHT_TIME = 5000;

    public static final int WILL_FIELD_P1 = 450008750;
    public static final int WILL_FIELD_P2 = 450008850;
    public static final int WILL_FIELD_P3 = 450008950;

    public static final int WILL_HARD_FIELD_P1 = 450008150;
    public static final int WILL_HARD_FIELD_P2 = 450008250;
    public static final int WILL_HARD_FIELD_P3 = 450008350;

    public static final String WILL_FIELD_SAFE_KEY = "safe";
    public static final String WILL_FIELD_FAIL_KEY = "fail";
    public static final String WILL_FIELD_P1_HIT_OA_KEY = "oaCd";
    public static final String WILL_FIELD_P2_REFLECTED = "reflected";
    public static final String WILL_FIELD_P2_TEST_SET_COUNT = "setCount";

    public static final int WILL_INFECTION_DAMAGE_CHECK_TIME = 7; // seconds
    public static final int WILL_INFECTION_INITIAL_DELAY = 2000; // millis
    public static final int WILL_INFECTION_DELAY = 1000; // millis
    public static final int WILL_INFECTION_TIME = 15; // seconds

    // Verus Hilla -----------------------------------------------------------------------------------------------------
    public static final int VERUS_HILLA = 8880405;
    public static final long VERUS_HILLA_HP = 176_000_000_000_000L;

    public static boolean isP2Will(int templateId) {
        return templateId == WILL_P2 || templateId == HARD_WILL_P2;
    }

    // Gloom -----------------------------------------------------------------------------------------------------------
    public static final int GLOOM = 8644650;
    public static final int GLOOM_FIELD = 450009400;
    public static final long GLOOM_HP = 26_000_000_000_000L; // 26t

    public static final int GLOOM_HARD = 8644650;
    public static final int GLOOM_HARD_FIELD = 450009450;
    public static final long GLOOM_HARD_HP = 114_600_000_000_000L; // 114.6t
    public static final int GLOOM_TENTACLE = 8644658; // Needs to be spawned otherwise tentacle attack won't do
    //Not sure if this is right ID
    public static final int GLOOM_CHAOS = 9210046;

    // Darknell --------------------------------------------------------------------------------------------------------
    //Not sure if these are right ID's
    public static final int DARKNELL_NORMAL = 9210043;
    public static final int DARKNELL_CHAOS = 9210047;

    // Black Mage ------------------------------------------------------------------------------------------------------
    public static final int GENESIS_CRUX = 8880518;

    // Seren ------------------------------------------------------------------------------------------------------
    public static final int CHOSEN_SEREN_TREASURE_CHEST = 8880615;

    // Gigatoad ------------------------------------------------------------------------------------------------------
    public static final int GIGATOAD = 9601327;
    public static final int FRENZIED_GIGATOAD = 9601328;

    // OMNI_CLN ------------------------------------------------------------------------------------------------------
    public static final int OMNI_CLN = 8880200;

    // Julieta ------------------------------------------------------------------------------------------------------
    public static final int JULIETA_BOX = 9402282;
}
