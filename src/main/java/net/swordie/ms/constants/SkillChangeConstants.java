package net.swordie.ms.constants;

import java.util.Map;

/**
 * Created on 20-11-2019.
 *
 * @author Asura
 */
public class SkillChangeConstants {

    // Legion
    public static final int LEGION_CHANCE_HEAL_HP_SKILLID = 71000211; // Aran Legion Card SkillId
    public static final int LEGION_CHANCE_HEAL_MP_SKILLID = 71000221; // Evan Legion Card SkillId
    public static final int CHANCE_TO_HEAL_HP = 70;
    public static final int CHANCE_TO_HEAL_MP = 70;
    public static final int HEAL_COOLTIME = 10 * 1000; // 10 seconds cooldown


    // Familiar
    public static final boolean USE_CUSTOM_EXP_REQ = false; // Using custom EXP values
    public static final int LV_2_EXP_REQ = 2_000;
    public static final int LV_3_EXP_REQ = 10_000;
    public static final int LV_4_EXP_REQ = 20_000;
    public static final int LV_5_EXP_REQ = 25_000;
    public static final int LV_6_EXP_REQ = 80_000;
    public static final int LV_7_EXP_REQ = 140_000;

    public static final Map<Integer, Integer> expValues = Map.ofEntries(
            Map.entry(1, LV_2_EXP_REQ),
            Map.entry(2, LV_3_EXP_REQ),
            Map.entry(3, LV_4_EXP_REQ),
            Map.entry(4, LV_5_EXP_REQ),
            Map.entry(5, LV_6_EXP_REQ),
            Map.entry(6, LV_7_EXP_REQ)
    );



//  Custom Job Skill Changes -------------------------------------------------------------------------------------------


    public static String getSkillChangeStringByJob(int jobId) {
        JobConstants.JobEnum job = JobConstants.JobEnum.getJobById(jobId);

        if (job == null) {
            return "";
        }

        switch (job) {
            case FIGHTER:
            case CRUSADER:
            case HERO:
                return getHeroSkillChangeString();

            case PAGE:
            case WHITE_KNIGHT:
            case PALADIN:
                return getPaladinSkillChangeString();

            case SPEARMAN:
            case DRAGON_KNIGHT:
            case DARK_KNIGHT:
                return getDarkKnightSkillChangeString();

            case FP_WIZARD:
            case FP_MAGE:
            case FP_ARCHMAGE:
                return getMageFPSkillChangeString();

            case IL_WIZARD:
            case IL_MAGE:
            case IL_ARCHMAGE:
                return getMageILSkillChangeString();

            case CLERIC:
            case PRIEST:
            case BISHOP:
                return getBishopSkillChangeString();

            case HUNTER:
            case RANGER:
            case BOWMASTER:
                return getBowmasterSkillChangeString();

            case CROSSBOWMAN:
            case SNIPER:
            case MARKSMAN:
                return getMarksmanSkillChangeString();

            case PATHFINDER_1:
            case PATHFINDER_2:
            case PATHFINDER_3:
            case PATHFINDER_4:
                return getPathfinderSkillChangeString();

            case ASSASSIN:
            case HERMIT:
            case NIGHT_LORD:
                return getNightLordSkillChangeString();

            case BANDIT:
            case CHIEF_BANDIT:
            case SHADOWER:
                return getShadowerSkillChangeString();

            case BLADE_RECRUIT:
            case BLADE_ACOLYTE:
            case BLADE_SPECIALIST:
            case BLADE_LORD:
            case BLADE_MASTER:
                return getDualBladeSkillChangeString();

            case BRAWLER:
            case MARAUDER:
            case BUCCANEER:
                return getBuccaneerSkillChangeString();

            case GUNSLINGER:
            case OUTLAW:
            case CORSAIR:
                return getCorsairSkillChangeString();

            case PIRATE_CANNONEER:
            case CANNONEER:
            case CANNON_BLASTER:
            case CANNON_MASTER:
                return getCannonMasterSkillChangeString();

            case JETT_1:
            case JETT_2:
            case JETT_3:
            case JETT_4:
                return getJettSkillChangeString();


            case DAWN_WARRIOR_1:
            case DAWN_WARRIOR_2:
            case DAWN_WARRIOR_3:
            case DAWN_WARRIOR_4:
                return getDawnWarriorSkillChangeString();

            case BLAZE_WIZARD_1:
            case BLAZE_WIZARD_2:
            case BLAZE_WIZARD_3:
            case BLAZE_WIZARD_4:
                return getBlazeWizardSkillChangeString();

            case WIND_ARCHER_1:
            case WIND_ARCHER_2:
            case WIND_ARCHER_3:
            case WIND_ARCHER_4:
                return getWindArcherSkillChangeString();

            case NIGHT_WALKER_1:
            case NIGHT_WALKER_2:
            case NIGHT_WALKER_3:
            case NIGHT_WALKER_4:
                return getNightWalkerSkillChangeString();

            case THUNDER_BREAKER_1:
            case THUNDER_BREAKER_2:
            case THUNDER_BREAKER_3:
            case THUNDER_BREAKER_4:
                return getThunderBreakerSkillChangeString();

            case ARAN_1:
            case ARAN_2:
            case ARAN_3:
            case ARAN_4:
                return getAranSkillChangeString();

            case EVAN_1:
            case EVAN_2:
            case EVAN_3:
            case EVAN_4:
                return getEvanSkillChangeString();

            case MERCEDES:
            case MERCEDES_1:
            case MERCEDES_2:
            case MERCEDES_3:
            case MERCEDES_4:
                return getMercedesSkillChangeString();

            case PHANTOM:
            case PHANTOM_1:
            case PHANTOM_2:
            case PHANTOM_3:
            case PHANTOM_4:
                return getPhantomSkillChangeString();

            case SHADE:
            case SHADE_1:
            case SHADE_2:
            case SHADE_3:
            case SHADE_4:
                return getShadeSkillChangeString();

            case LUMINOUS:
            case LUMINOUS_1:
            case LUMINOUS_2:
            case LUMINOUS_3:
            case LUMINOUS_4:
                return getLuminousSkillChangeString();

            case DEMON_SLAYER_1:
            case DEMON_SLAYER_2:
            case DEMON_SLAYER_3:
            case DEMON_SLAYER_4:
                return getDemonSlayerSkillChangeString();

            case DEMON_AVENGER_1:
            case DEMON_AVENGER_2:
            case DEMON_AVENGER_3:
            case DEMON_AVENGER_4:
                return getDemonAvengerSkillChangeString();

            case BATTLE_MAGE_1:
            case BATTLE_MAGE_2:
            case BATTLE_MAGE_3:
            case BATTLE_MAGE_4:
                return getBattleMageSkillChangeString();

            case WILD_HUNTER_1:
            case WILD_HUNTER_2:
            case WILD_HUNTER_3:
            case WILD_HUNTER_4:
                return getWildHunterSkillChangeString();

            case MECHANIC_1:
            case MECHANIC_2:
            case MECHANIC_3:
            case MECHANIC_4:
                return getMechanicSkillChangeString();

            case BLASTER_1:
            case BLASTER_2:
            case BLASTER_3:
            case BLASTER_4:
                return getBlasterSkillChangeString();

            case XENON:
            case XENON_1:
            case XENON_2:
            case XENON_3:
            case XENON_4:
                return getXenonSkillChangeString();

            case HAYATO_1:
            case HAYATO_2:
            case HAYATO_3:
            case HAYATO_4:
                return getHayatoSkillChangeString();

            case KANNA_1:
            case KANNA_2:
            case KANNA_3:
            case KANNA_4:
                return getKannaSkillChangeString();

            case MIHILE_1:
            case MIHILE_2:
            case MIHILE_3:
            case MIHILE_4:
                return getMihileSkillChangeString();

            case KAISER:
            case KAISER_1:
            case KAISER_2:
            case KAISER_3:
            case KAISER_4:
                return getKaiserSkillChangeString();

            case KAIN:
            case KAIN_1:
            case KAIN_2:
            case KAIN_3:
            case KAIN_4:
                return getKainSkillChangeString();

            case CADENA:
            case CADENA_1:
            case CADENA_2:
            case CADENA_3:
            case CADENA_4:
                return getCadenaSkillChangeString();

            case ANGELIC_BUSTER:
            case ANGELIC_BUSTER_1:
            case ANGELIC_BUSTER_2:
            case ANGELIC_BUSTER_3:
            case ANGELIC_BUSTER_4:
                return getAngelicBusterSkillChangeString();

            case ZERO:
            case ZERO_1:
            case ZERO_2:
            case ZERO_3:
            case ZERO_4:
                return getZeroSkillChangeString();

            case BEAST_TAMER:
            case BEAST_TAMER_1:
            case BEAST_TAMER_2:
            case BEAST_TAMER_3:
            case BEAST_TAMER_4:
                return getBeastTamerSkillChangeString();

            case KINESIS_0:
            case KINESIS_1:
            case KINESIS_2:
            case KINESIS_3:
            case KINESIS_4:
                return getKinesisSkillChangeString();

            case ADELE:
            case ADELE_1:
            case ADELE_2:
            case ADELE_3:
            case ADELE_4:
                return getAdeleSkillChangeString();

            case ILLIUM:
            case ILLIUM_1:
            case ILLIUM_2:
            case ILLIUM_3:
            case ILLIUM_4:
                return getIlliumSkillChangeString();

            case ARK:
            case ARK_1:
            case ARK_2:
            case ARK_3:
            case ARK_4:
                return getArkSkillChangeString();

            case HO_YOUNG:
            case HO_YOUNG_1:
            case HO_YOUNG_2:
            case HO_YOUNG_3:
            case HO_YOUNG_4:
                return getHoYoungSkillChangeString();
        }

        return "";
    }




    /**
     * Link Skills:
     *
     * Knight's Watch (Linked) has it's duration doubled. If it's Lv3 it is a permanent buff.
     *
     * Core Aura from 60 onwards. every 5 levels means +1 all stats & att/matt
     */
    public static final boolean CUSTOM_KNIGHTS_WATCH_DURATION = true;
    public static final int GET_KNIGHTS_WATCH_CUSTOM_DURATION_MULTIPLIER(int slv) {
        if (!CUSTOM_KNIGHTS_WATCH_DURATION) {
            return 1; // no multiplier
        }
        return slv == 3 ? 0 : 2; // if Lv3  Duration=0 (Perm)  else  double duration
    }
    public static final int CORE_AURA_EVERY_X_LEVELS = 5; // every 5 levels, increase Core Aura
    public static final int CORE_AURA_MINIMUM_LEVEL = 70; // from 70 onwards
    public static final int CORE_AURA_MAXIMUM_LEVEL = 220; // bonuses stop at 220



    /**
     * Hero:
     *
     */

    public static String getHeroSkillChangeString() {
        return "";
    }



    /**
     * Paladin:
     * Elemental Charge - Duration multiplied by {@value ELEMENTAL_CHARGE_DURATION_MULTI}
     * Parashock Guard - Changed to be +20% guard chance & Attack/MAttack for everyone affected by the Aura
     *
     */
    public static final int ELEMENTAL_CHARGE_DURATION_MULTI = 5;
    // Parashock Guard - change is done by the way we handle Auras.

    public static String getPaladinSkillChangeString() {

        return "" +
                String.format("Elemental Charge - Duration multiplied by %d.\n", ELEMENTAL_CHARGE_DURATION_MULTI) +
                String.format("Parashock Guard - Changed to be +20 percent guard chance & Attack/MAttack for everyone affected by the Aura.\n")
                ;
    }



    /**
     * Dark Knight:
     *
     */

    public static String getDarkKnightSkillChangeString() {
        return "";
    }



    /**
     * Mage FP:
     * Megiddo Flame's DoT can stack up to {@value MEGIDDO_FLAME_DOT_STACK} times.
     *
     */
    public static final int MEGIDDO_FLAME_DOT_STACK = 5;

    public static String getMageFPSkillChangeString() {
        return "" +
                String.format("Megiddo Flame's DoT can stack up to %d times.\n", MEGIDDO_FLAME_DOT_STACK)
                ;
    }



    /**
     * Mage IL:
     * Bolt Barrage - Thunder Bolts will stick to bosses (will stick to the boss with the highest HP)
     * Thunderstorm - If hitting a single target, it will proc 1 Bolt Barrage.
     * Elquines - Creates Ice Age Icicles upon attacking
     * Chilling Step - Has a Mobbing mode and a Bossing mode.
     * Blizzard Final Attack - 100% Chance to proc whilst Blizzard is on Cooldown.
     * Magic Booster - Increased Booster by another stage (total 3)
     *
     */
    public static final boolean BOLT_BARRAGE_STICK_TO_BOSS = true;
    public static final boolean BOLT_BARRAGE_PROC_BY_THUNDERSTORM = true;
    public static final boolean CHILLING_STEP_BOSSING_MODE = true;
    public static final int CHILLING_STEP_BOSS_MODE_PROC_CHANCE = 90;
    public static final int CHILLING_STEP_ICE_AGE_TILE_DURATION = 3500;
    public static final int CHILLING_STEP_ICE_AGE_TILE_COUNT = 6;
    public static final boolean ELQUINES_PROC_ICE_AGE_TILE = true;
    public static final int ELQUINES_ICE_AGE_TILE_DURATION = 9000;
    public static final boolean BYPASS_PROC_ON_BLIZZARD_FA = true;
    public static final int MAGIC_BOOSTER_IL_BOOSTER = -3;

    public static String getMageILSkillChangeString() {
        return "" +
                String.format("%s", BOLT_BARRAGE_STICK_TO_BOSS ? "Bolt Barrage - Thunder Bolts will stick to bosses (will stick to the boss with the highest HP).\n" : "") +
                String.format("%s", BOLT_BARRAGE_PROC_BY_THUNDERSTORM ? "Thunderstorm - If hitting a single target, it will proc 1 Bolt Barrage.\n" : "") +
                String.format("%s", ELQUINES_PROC_ICE_AGE_TILE ? String.format("Elquines - Creates Ice Age Icicles upon attacking (lasting %dms).\n", ELQUINES_ICE_AGE_TILE_DURATION) : "") +
                String.format("%s", CHILLING_STEP_BOSSING_MODE ? "Chilling Step - Has a Mobbing mode and a Bossing mode.\n" : "") +
                String.format("%s", BYPASS_PROC_ON_BLIZZARD_FA ? "Blizzard Final Attack - 100% Chance to proc whilst Blizzard is on Cooldown.\n" : "") +
                String.format("Increased booster by another stage (total %d)\n", -MAGIC_BOOSTER_IL_BOOSTER)
                ;
    }



    /**
     * Bishop:
     *
     */

    public static String getBishopSkillChangeString() {
        return "";
    }



    /**
     * Bowmaster:
     *
     */

    public static String getBowmasterSkillChangeString() {
        return "";
    }



    /**
     * Marksman:
     *
     */

    public static String getMarksmanSkillChangeString() {
        return "";
    }



    /**
     * Pathfinder:
     */

    public static String getPathfinderSkillChangeString() {
        return "";
    }



    /**
     * Night Lord:
     * Shadow Stars - Gives 10% final damage bonus and grants 2 additional stars for Assassin's Mark/Night Lord's Mark
     *
     */
    public static final boolean SHADOW_STARS_CUSTOM_BUFF = true;
    public static final int SHADOW_STARS_FINAL_DAMAGE = 10;
    public static final int SHADOW_STARS_ADDITIONAL_STARS = 2;

    public static String getNightLordSkillChangeString() {
        return "" +
                String.format("%s", SHADOW_STARS_CUSTOM_BUFF ? String.format("Shadow Stars - Gives %d percent final damage bonus and grans %d additional stars for Assassin's Mark/Night Lord's Mark.\n", SHADOW_STARS_FINAL_DAMAGE, SHADOW_STARS_ADDITIONAL_STARS) : "")
                ;
    }



    /**
     * Shadower:
     *
     */

    public static String getShadowerSkillChangeString() {
        return "";
    }



    /**
     * Dual Blade:
     *
     */

    public static String getDualBladeSkillChangeString() {
        return "";
    }



    /**
     * Buccaneer:
     * Spiral Assault has no cooldown.
     * Meltdown Energy Orb will charge energy even in Energised state.
     * Nautilus Final Attack charges energy
     * Dragon Strike's Debuff duration has been tripled.
     *
     */
    public static final boolean MELTTDOWN_ENERGY_ORB_CHARGES = true;
    public static final int DRAGON_STRIKE_DEBUFF_DURATION_MULTIPLIER = 3;
    public static final boolean SPIRAL_ASSAULT_NO_CD = true;

    public static String getBuccaneerSkillChangeString() {
        return "" +
                String.format("%s", SPIRAL_ASSAULT_NO_CD ? "Spiral Assault - no cooldown.\n" : "") +
                String.format("%s", MELTTDOWN_ENERGY_ORB_CHARGES ? "Meltdown Energy Orb - Charges energy even in Energised state.\n" : "") +
                String.format("Nautilus Final Attack charges energy.\n") +
                String.format("Dragon Strike - Debuff duration multiplied by %d.\n", DRAGON_STRIKE_DEBUFF_DURATION_MULTIPLIER)
                ;
    }



    /**
     * Corsair:
     * All Aboard - When attacking a monster, will proc Nautilus Strike
     * Broadside - When attacking a monster, will proc Ugly bomb
     * Eight-Legs Easton - Skill damage has been reduced by 33% (instead of 649% at lv30 it will be 435%). Lines increased to 8
     * Bullet Party - When activating, sacrifices all active summons to increase the duration by {@value BULLET_PARTY_DURATION_GAIN_PER_SUMMON} per active summon
     * Death Trigger - Cooldown decreased by {@value DEATH_TRIGGER_COOLDOWN_DECREASE_PER_SUMMON} seconds per active summon
     */
    public static final boolean SCURVY_SUMMON_PROC_NAUTILUS_STRIKE = true;
    public static final boolean BROADSIDE_PROC_UGLY_BOMB = true;
    public static final boolean BULLET_PARTY_SACRIFICE_SUMMONS = true;
    public static final int BULLET_PARTY_DURATION_GAIN_PER_SUMMON = 2;
    public static final boolean DEATH_TRIGGER_COOLDOWN_DECREASE = true;
    public static final int DEATH_TRIGGER_COOLDOWN_DECREASE_PER_SUMMON = 3;

    public static String getCorsairSkillChangeString() {
        return "" +
                String.format("%s", SCURVY_SUMMON_PROC_NAUTILUS_STRIKE ? "All Aboard - When attacking a monster, will proc Nautilus Strike.\n" : "") +
                String.format("%s", BROADSIDE_PROC_UGLY_BOMB ? "Broadside - When attacking a monster, will proc Ugly Bomb.\n" : "") +
                "Eight-Legs Easton - Skill damage has been reduced by 33% (instead of 649% at lv30, it will be 435%). Lines instead to 8.\n" +
                String.format("%s", BULLET_PARTY_SACRIFICE_SUMMONS ? String.format("Bullet Party - When activating, sacrifices all active summons to increase the duration by %d seconds per active summon.\n", BULLET_PARTY_DURATION_GAIN_PER_SUMMON) : "") +
                String.format("%s", DEATH_TRIGGER_COOLDOWN_DECREASE ? String.format("Death Trigger - Cooldown decreased by %d seconds per active summon.\n", DEATH_TRIGGER_COOLDOWN_DECREASE_PER_SUMMON) : "")
                ;
    }



    /**
     * Cannon Master:
     *
     */

    public static String getCannonMasterSkillChangeString() {
        return "";
    }



    /**
     * Jett:
     * Strikeforce showdown can be triggered by any skill at a {@value STRIKEFORCE_PROP_DEFAULT}% rate
     * This chance increases by {@value STRIKEFORCE_PROP_FROM_STARFALL} if Starfall is on cooldown
     * This chance increases by {@value STRIKEFORCE_PROP_FROM_SINGULARITY} if Singularity Shock is on cooldown
     *
     */
    public static final boolean STRIKEFORCE_PROC_ON_OTHER_ATTACKS = true; // True => Strikeforce Showdown can proc on skills other than Starforce Salvo.
    public static final int STRIKEFORCE_PROP_DEFAULT = 1; // Default prop for Strikeforce to occur.
    public static final int STRIKEFORCE_PROP_FROM_STARFALL = 5; // Added to prop, if Starfall is on Cooldown.
    public static final int STRIKEFORCE_PROP_FROM_SINGULARITY = 5; // Added to prop, if Singularity Shock is on Cooldown.

    public static String getJettSkillChangeString() {
        return "" +
                String.format("%s", STRIKEFORCE_PROC_ON_OTHER_ATTACKS ? String.format("Strikeforce showdown can be triggered by any skill at a %d percent chance.\n", STRIKEFORCE_PROP_DEFAULT) : "") +
                String.format("Starfall - Whilst on cooldown, increases Strikeforce proc chance by %d percent.\n", STRIKEFORCE_PROP_FROM_STARFALL) +
                String.format("Singularity - Whilst on cooldown, increases Strikeforce proc chance by %d percent.\n", STRIKEFORCE_PROP_FROM_SINGULARITY)
                ;
    }



    /**
     * Dawn Warrior:
     *
     */

    public static String getDawnWarriorSkillChangeString() {
        return "";
    }



    /**
     * Blaze Wizard
     * Orbital Flame Range - Increased the added range
     *
     */
    public static final double ORBITAL_FLAME_RANGE_MULTIPLIER = 1.5D; // Multiplier on the Added Range Hyper On/Off

    public static String getBlazeWizardSkillChangeString() {
        return "" +
                String.format("Orbital Flame Range - Multiplied the range by %f.\n", ORBITAL_FLAME_RANGE_MULTIPLIER)
                ;
    }



    /**
     * Wind Archer:
     * Song of Heaven - Triffling Wind will speed up the longer you hold the skill down.
     *
     */
    public static final boolean MORE_TRIFFLING_WIND_WHILE_KEYDOWN = true;
    public static final double TRIFFLING_WIND_PROC_BONUS_PER_SEC = 0.8D; // 0.8% increase per second
    public static final int TRIFFLING_WIND_PROC_BONUS_MAX = 15; // 15% increase to triffling wind creation
    public static final int TRIFFLING_WIND_DELAY_REDUCTION_PER_SEC = 8; // 8ms delay decrease per second
    public static final int TRIFFLING_WIND_DELAY_REDUCTION_MAX = 170; // 170ms delay reduction
    public static final double TRIFFLING_WIND_SIMPACT_MULTIPLIER_PER_SECOND = 5D; // 1 + (1/5D) increase per second
    public static final double TRIFFLING_WIND_SIMPACT_MULTIPLIER_MAX = 6D; // 6x max increase
    public static final int TRIFFLING_WIND_KEYDOWN_GIFT_MS = 2000; // 1500ms


    public static String getWindArcherSkillChangeString() {
        return "" +
                String.format("%s", MORE_TRIFFLING_WIND_WHILE_KEYDOWN ?
                        "Song of Heaven - Whilst holding the skill down. Trifling Wind becomes stronger and stronger.\n" +
                                String.format("\t- Trifling Wind Proc rate +%fpercent every second (max %d percent).\n", TRIFFLING_WIND_PROC_BONUS_PER_SEC, TRIFFLING_WIND_PROC_BONUS_MAX) +
                                String.format("\t- Trifling Wind Delay -%dms every second (max %dms).\n", TRIFFLING_WIND_DELAY_REDUCTION_PER_SEC, TRIFFLING_WIND_DELAY_REDUCTION_MAX) +
                                String.format("\t- Trifling Wind Speed +%f percent every second (max %f percent).\n", TRIFFLING_WIND_SIMPACT_MULTIPLIER_PER_SECOND, TRIFFLING_WIND_SIMPACT_MULTIPLIER_MAX)
                        : "")
                ;
    }



    /**
     * Night Walker:
     *
     */

    public static String getNightWalkerSkillChangeString() {
        return "";
    }



    /**
     * Thunder Breaker:
     *
     */

    public static String getThunderBreakerSkillChangeString() {
        return "";
    }



    /**
     * Aran:
     *
     */

    public static String getAranSkillChangeString() {
        return "";
    }



    /**
     * Evan:
     *
     */

    public static String getEvanSkillChangeString() {
        return "";
    }



    /**
     * Mercedes:
     * Spirit of Elluel
     * At the end of Spirit of Elluel,
     * the damage done to a mob by it's clones will be done again in 1 big blow (to that same mob) for {@value SPIRIT_OF_ELLUEL_HITS} hits.
     *
     */
    public static final boolean SPIRIT_OF_ELLUEL_FINISHER = true;
    public static final int SPIRIT_OF_ELLUEL_HITS = 15;

    public static String getMercedesSkillChangeString() {
        return "" +
                String.format("%s", SPIRIT_OF_ELLUEL_FINISHER ? String.format("Spirit of Elluel - At the end, the damage done to a mob by it's clones will be done again in 1 blow for %d hits.\n", SPIRIT_OF_ELLUEL_HITS) : "")
                ;
    }



    /**
     * Phantom:
     * Allow Phantom to save 1 preset of Equipped stolen skills. Use Ghostwalk to toggle between your current equipped stolen skills and the saved one.
     */

    public static String getPhantomSkillChangeString() {
        return "" +
                "Skill Stealing - Allow Phantom to save 1 preset. Switch between presets using Ghostwalk. (Talk to the Settings NPC)\n" +
                "Skill Stealing - Phantom can steal any non-hyper skill from Marianne in the Lumiere Ship.\n"
                ;
    }



    /**
     * Shade:
     * Spirit Bond Max (Enhanced) - Increases the recreation count of Rabbit Orb by {@value SBM_RECREATION_COUNT_INCREASE}
     * Spirit Bond Max (Enhanced) - Increased Attack Speed from +1 to +2.
     * Spirit Bond Max (Enhanced) - Increases duration to 3 minutes, but stops livers from dropping.
     *
     */
    public static final int SBM_RECREATION_COUNT_INCREASE = 6;
    public static final int SBM_BOOSTER = -2;
    public static final boolean SBM_TIME_INSTEAD_LIVER = true;
    public static final int SBM_TIME = 3 * 60;

    public static String getShadeSkillChangeString() {
        return "" +
                String.format("Spirit Bond Max (Enhanced) - Increases the recreation count of Rabbit Orb by %d.\n", SBM_RECREATION_COUNT_INCREASE) +
                String.format("Spirit Bond Max (Enhanced) - Increased Attack Speed from 1 to %d.\n", -SBM_BOOSTER) +
                String.format("Spirit Bond Max (Enhanced) - Increases duration to %d seconds, but won't drop livers.\n", SBM_TIME)
                ;
    }



    /**
     * Luminous:
     * Light Speed - Greatly increased teleport range.
     * Equilibrium - Gives 3 attack speed
     * Equilibrium - During Equilibrium, channel your roots with the Black Mage. Whilst attacking summon chains from the ground to attack nearby mobs.
     * Baptism of Light and Darkness - When the Counter 12 is reached. A buff 'Overcoming Terror' is given.
     * Overcoming Terror - Gives 1 attack speed. Also allows more chains to be summoned whilst in Equilibrium.
     *
     */
    public static final int EQUILIBRIUM_BOOSTER = -3;
    public static final int TERROR_BOOSTER = -1;
    public static final int TERROR_DURATION = 10;
    public static final int TERROR_MOONLIGHT_SPEAR_CD = 200;
    public static final int NORMAL_MOONLIGHT_SPEAR_CD = 600;

    public static String getLuminousSkillChangeString() {
        return "" +
                "Light Speed - Greatly increased the Teleport range.\n" +
                String.format("Equilibrium - Gives %d attack speed.\n", -EQUILIBRIUM_BOOSTER) +
                "Equilibrium - During Equilibrium, channel your roots with the Black Mage. Summon dark chains from the ground to attack nearby mobs.\n" +
                "Baptism of Light and Darkness - When the Counter reaches 12. A buff 'Overcoming Terror' is given.\n" +
                String.format("Overcoming Terror - Gives %d Attack. Also allows more chains to be summoned whilst in Equilibrium.\n", -TERROR_BOOSTER)
                ;
    }



    /**
     * Demon Slayer:
     *
     */

    public static String getDemonSlayerSkillChangeString() {
        return "";
    }



    /**
     * Demon Avenger:
     * Execution (Purple) - Creates 1 Nether Shield per Mob hit (at {@value NETHER_SHIELD_BY_EXECUTION_CHANCE}) and recreates {@value NETHER_SHIELD_BY_EXECUTION_RECREATIONS} times.
     *
     */
    public static final boolean DEMONIC_FRENZY_HEAL_CAP = true;
    public static final int DEMONIC_FRENZY_HEAL_CAP_VALUE = 2;
    public static final int NETHER_SHIELD_BY_EXECUTION_CHANCE = 40;
    public static final int NETHER_SHIELD_BY_EXECUTION_RECREATIONS = 4;

    public static String getDemonAvengerSkillChangeString() {
        return
                String.format("%s", DEMONIC_FRENZY_HEAL_CAP ? String.format("Increased Demonic Frenzy Healing Limit to %d percent.\n", DEMONIC_FRENZY_HEAL_CAP_VALUE) : "") +
                String.format("Execution (Purple) - Creates 1 Nether Shield per Mob hit, at a %d percent chance. Nether Shields created from Execution will recreate %d times.\n", NETHER_SHIELD_BY_EXECUTION_CHANCE, NETHER_SHIELD_BY_EXECUTION_RECREATIONS)
                ;
    }



    /**
     * Battle Mage:
     * Auras are stackable (including Aura Scythe)
     *
     */
    public static final boolean STACKING_AURAS = true;

    public static String getBattleMageSkillChangeString() {
        return "" +
                String.format("%s", STACKING_AURAS ? "Auras are stackable (including Aura Scythe).\n" : "")
                ;
    }



    /**
     * Wild Hunter:
     * Another Bite - Every {@value ANOTHER_BITE_PROC_COUNT} bites, a Random Jaguar will be spawned for {@value EXTRA_JAGUAR_DURATION} seconds
     * Another Bite - Mob increases the bite count by {@value EXTRA_JAGUAR_COUNTER_GAINED_FROM_MOB}, Boss increases it by {@value EXTRA_JAGUAR_COUNTER_GAINED_FROM_BOSS}
     *
     */
    public static final boolean JAGUAR_STORM_PLACE_ON_CHR = false;
    public static final int EXTRA_JAGUAR_COUNTER_GAINED_FROM_MOB = 1;
    public static final int EXTRA_JAGUAR_COUNTER_GAINED_FROM_BOSS = 4;
    public static final int ANOTHER_BITE_PROC_COUNT = 40;
    public static final int EXTRA_JAGUAR_DURATION = 15; // 15 seconds

    public static String getWildHunterSkillChangeString() {
        return "" +
                String.format("Another Bite - Every %d bites, a Random Jaguar will be spawned for %d seconds.\n", ANOTHER_BITE_PROC_COUNT, EXTRA_JAGUAR_DURATION) +
                String.format("Another bite - Mob increases the bite count by %d, Boss increases the bite count by %d.\n", EXTRA_JAGUAR_COUNTER_GAINED_FROM_MOB, EXTRA_JAGUAR_COUNTER_GAINED_FROM_BOSS)
                ;
    }



    /**
     * Mechanic:
     *
     */

    public static String getMechanicSkillChangeString() {
        return "";
    }



    /**
     * Xenon:
     * Amaranth Generator whilst active:
     * Pinpoint salvo will have a cooldown of {@value PINPOINT_SALVO_CD_WHILST_AMARANTH} milliseconds.
     * Aegis System will have a cooldown if {@value AEGIS_SYSTEM_CD_WHILST_AMARANTH} milliseconds.
     *
     */
    public static final boolean AMARANTH_LOWER_ROCKETS_CD = true;
    public static final int PINPOINT_SALVO_CD_WHILST_AMARANTH = 200;
    public static final int AEGIS_SYSTEM_CD_WHILST_AMARANTH = 200;

    public static String getXenonSkillChangeString() {
        return "" +
                String.format("%s", AMARANTH_LOWER_ROCKETS_CD ?
                        String.format("Amaranth Generator - whilst active, Pinpoint salvo has a cooldown of %d ms.\n", PINPOINT_SALVO_CD_WHILST_AMARANTH) +
                        String.format("Amaranth Generator - whilst active, Aegis System has a cooldown of %d ms.\n", AEGIS_SYSTEM_CD_WHILST_AMARANTH)
                : "")
                ;
    }



    /**
     * Blaster:
     *
     */

    public static String getBlasterSkillChangeString() {
        return "";
    }



    /**
     * Hayato:
     * Blade Flash - Does 8 lines.
     * God of Blades - Increases gained Sword Energy by {@value GOD_OF_BLADES_BLADE_ENERGY_MULTIPLIER}
     * God of Blades - Increases Attack Speed by 2.
     * Battoujutsu Advance - Gives Final Damage, instead of Damage%
     *
     */
    public static final boolean GOD_OF_BLADES_INCREASES_BLADE_ENERGY = true;
    public static final int GOD_OF_BLADES_BLADE_ENERGY_MULTIPLIER = 2;
    public static final int GOD_OF_BLADES_BOOSTER = -2;

    public static String getHayatoSkillChangeString() {
        return "" +
                String.format("%s", GOD_OF_BLADES_INCREASES_BLADE_ENERGY ? String.format("God of Blades - Increases gained Sword Energy by %d.\n", GOD_OF_BLADES_BLADE_ENERGY_MULTIPLIER) : "") +
                String.format("God of Blades - Increases Attack Speed by %d.\n", -GOD_OF_BLADES_BOOSTER) +
                String.format("Battoujutsu Advance - Gives Final Damage, instead of Damage percent.\n")
                ;
    }



    /**
     * Kanna:
     *
     */

    public static String getKannaSkillChangeString() {
        return "";
    }



    /**
     * Mihile:
     *
     */

    public static String getMihileSkillChangeString() {
        return "";
    }



    /**
     * Kaiser:
     * Dragon Link: Bonus Gauge is {@value DRAGON_LINK_BONUS_GAUGE}
     * Tempest Blade: Kaiser can also control blades above non-kaiser party members, within range.
     *
     */
    public static final int DRAGON_LINK_BONUS_GAUGE = 25; // Added Gauge using DragonLink
    public static final boolean TEMPEST_BLADE_ON_PARTY_MEMBERS = true; // Allows Tempest Blades to be activated on party members to be commanded by kaiser
    public static final int TEMPEST_BLADE_ON_PARTY_MEMBER_DURATION = 180; // 180 seconds duration
    public static final int TEMPEST_BLADE_DAMR = 10; // 10% DamR
    public static final int TEMPEST_BLADE_DAMR_PER_PARTY_MEMBER = 5; // 20% DamR

    public static String getKaiserSkillChangeString() {
        return "" +
                String.format("Dragon Link - Added Bonus Gauge is %d.\n", DRAGON_LINK_BONUS_GAUGE) +
                String.format("Tempest Blade - Kaiser can control blades above non-kaiser party members, within a certain range.\n")
                ;
    }



    /**
     * Kain:
     *
     */

    public static String getKainSkillChangeString() {
        return "";
    }



    /**
     * Cadena:
     *
     */
    public static final boolean VOID_STRIKE_CD_CHANGE = true;
    public static final int VOID_STRIKE_CD_REDUCTION = 400; // ms

    public static String getCadenaSkillChangeString() {
        return "";
    }



    /**
     * Angelic Buster
     * Soul Buster can trigger soul seeker expert
     *
     */
    public static final int SPARKLE_BURST_STAGE_II_REQ = 140;   // Sparkle Burst | Required Energy to reach Stage 2
    public static final int SPARKLE_BURST_STAGE_III_REQ = 260;  // Sparkle Burst | Required Energy to reach Stage 3
    public static final boolean SOUL_BUSTER_PROC_SOUL_SEEKER_EXPERT = true;     // Soul Buster can proc Soul Seeker Expert

    public static String getAngelicBusterSkillChangeString() {
        return "" +
                String.format("%s", SOUL_BUSTER_PROC_SOUL_SEEKER_EXPERT ? "Soul Buster - can trigger Soul Seeker Expert.\n" : "")
                ;
    }



    /**
     * Zero:
     * Advanced Earth Break & Wind Break Shockwaves - duration multiplied by  {@value ADVANCED_TILES_DURATION_MULTIPLIER}.
     * DoubleTime - Doesn't require you to hit mobs to increase in stack.
     * Divine Speed - Attack Speed {@value DIVINE_SPEED_BOOSTER_VALUE}.
     *
     *
     *
     * Rising Slash - damage has been decreased from 680% to 230%, number of hits has been increased from 2 to 6
     * Air Raid - Advanced Power Stomp and the shockwave’s damage has been decreased from 980% to 330%, number of hits has been increased from 3 to 9
     * Moon Strike - damage has been decreased from 180% to 120%, number of hits has been increased from 4 to 6
     * Pierce Thrust - damage has been decreased from 250% to 170%, number of hits has been increased from 4 to 6
     * Shadow Strike - damage has been decreased from 310% to 195%, number of hits has been increased from 5 to 8
     * Flash Cut - damage has been decreased from 610% to 205%, number of hits has been increased from 2 to 6
     * Flash Assaulter - damage has been decreased from 330% to 165%, number of hits has been increased from 4 to 8
     * Spin Cutter - damage has been decreased from 355% to 180%, number of hits has been increased from 4 to 8
     * Advanced Spin Cutter - damage has been decreased from 520% to 260%, number of hits has been increased from 5 to 10, sword afterimage’s damage has been decreased from 520% to 130%, number of hits has been increased from 1 to 4
     * Spin Drive - damage has been decreased from 780% to 260%, number of hits has been increased from 2 to 6
     * Wheel Wind - damage has been decreased from 220% to 120%, number of hits has been increased from 1 to 2
     *
     * Advanced Wheel Wind - damage has been decreased from 400% to 200%, number of hits has been increased from 1 to 2
     * Rolling Cross - damage has been decreased from 365% to 215%, number of hits has been increased from 7 to 12
     * Advanced Rolling Cross - damage has been decreased from 530% to 365%, number of hits has been increased from 8 to 12, sword afterimage’s damage has been decreased from 700% to 350%, number of hits has been increased from 1 to 2
     * Rolling Assault - damage has been decreased from 550% to 275%, number of hits has been increased from 5 to 10
     * Advanced Rolling Assault - damage has been decreased from 745% to 375%, number of hits has been increased from 6 to 12, sword afterimage’s damage has been decreased from 745% to 250%, number of hits has been increased from 1 to 3
     * Giga Crash - damage has been decreased from 750% to 250%, number of hits has been increased from 2 to 6
     *
     * Falling Star - damage has been decreased from 670% to 225%, number of hits has been increased from 2 to 6, shockwave’s damage has been decreased from 670% to 225%, number of hits has been increased from 1 to 3
     * Earth Break - damage has been decreased from 515% to 260%, number of hits has been increased from 4 to 8, shockwave’s damage has been decreased from 515% to 260%, number of hits has been increased from 4 to 8
     * Advanced Earth Break - damage has been decreased from 760% to 380%, number of hits has been increased from 5 to 10, shockwave’s damage has been decreased from 570% to 285%, number of hits has been increased from 5 to 10
     * Wind Cutter - damage has been decreased from 325% to 165%, number of hits has been increased from 4 to 8, whirlwinds’ damage has been decreased from 325% to 110%, number of hits has been increased from 1 to 3
     * Wind Striker - damage has been decreased from 500% to 250%, number of hits has been increased from 4 to 8
     * Storm Break - damage has been decreased from 430% to 215%, number of hits has been increased from 4 to 8, whirlwinds’ damage has been decreased from 430% to 215%, number of hits has been increased from 2 to 4
     * Advanced Storm Break - damage has been decreased from 670% to 335%, number of hits has been increased from 5 to 10, whirlwinds’ damage has been decreased from 670% to 335%, number of hits has been increased from 2 to 4
     */
    public static final int ADVANCED_TILES_DURATION_MULTIPLIER = 2; // Advanced Wind Breaker and Earth Break Duration Multiplier
    public static final boolean DOUBLE_TIME_COUNTER_REQUIRES_MOB_HITS = false; // Double time stack needs mobs to be hit to increase
    public static final int DIVINE_SPEED_BOOSTER_VALUE = -3; // Overwritten IndieBooster Value

    public static String getZeroSkillChangeString() {
        return "" +
                String.format("Advanced Earth Break & Wind Break Shockwaves - duration multiplied by %d,\n", ADVANCED_TILES_DURATION_MULTIPLIER) +
                String.format("%s", DOUBLE_TIME_COUNTER_REQUIRES_MOB_HITS ? String.format("Double Time - Does not require you to hit mobs to increase stack.\n") : "") +
                String.format("Divine Speed - Attack Speed increased to %d.\n", -DIVINE_SPEED_BOOSTER_VALUE)
                ;
    }



    /**
     * Beast Tamer:
     * Critter Select - No Action Delay (Done through Data.wz)
     *
     *
     */

    public static String getBeastTamerSkillChangeString() {
        return "" +
                "Critter Select - No Action Delay"
                ;
    }



    /**
     * Kinesis:
     * Psychic Drain - Cooldown reduced to 1 second.
     * Kinetic Jaunt - Cooldown reduced to 5 second.
     * Mind Break - Cooldown reduced to 10 second.
     * Mind Break - Final Damage per mob tripled.
     * Mind Break - If current Mind Break buff is better than the one that would be given. Pick the most beneficial one.
     * Ultimate BPM - Stops consuming PP after 800ms of not hitting mobs.
     */
    public static final boolean PSYCHIC_DRAIN_REDUCE_CD = true;
    public static final int PSYCHIC_DRAIN_COOLDOWN = 1; // 1sec

    public static final boolean KINETIC_JAUNT_REDUCE_CD = true;
    public static final int KINETIC_JAUNT_COOLDOWN = 5; // 5sec

    public static final boolean MIND_BREAK_REDUCE_CD = true;
    public static final int MIND_BREAK_COOLDOWN = 10; // 10sec

    public static final boolean MIND_BREAK_FD_BUFF = true;
    public static final int MIND_BREAK_FD_MULTIPLIER = 3;

    public static final boolean MIND_BREAK_MOST_BENEFICIAL_BUFF = true; // Grabs best buff from Mind Break. current one or the new one

    public static final boolean BPM_NO_COST_NOT_HITTING_MOBS = true;
    public static final int BPM_NO_COST_AFTER_MS = 800; // 0.8sec

    public static String getKinesisSkillChangeString() {
        return
                String.format("%s", PSYCHIC_DRAIN_REDUCE_CD ? String.format("Psychic Drain - Cooldown reduced to %d second(s).\n", PSYCHIC_DRAIN_COOLDOWN) : "") +
                String.format("%s", KINETIC_JAUNT_REDUCE_CD ? String.format("Kinetic Jaunt - Cooldown reduced to %d second(s).\n", KINETIC_JAUNT_COOLDOWN) : "") +
                String.format("%s", MIND_BREAK_REDUCE_CD ? String.format("Mind Break - Cooldown reduced to %d second(s).\n", MIND_BREAK_COOLDOWN) : "") +
                String.format("%s", MIND_BREAK_FD_BUFF ? String.format("Mind Break - Final Damage bonus per mob, multiplied by %d.\n", MIND_BREAK_FD_MULTIPLIER) : "") +
                String.format("%s", MIND_BREAK_MOST_BENEFICIAL_BUFF ? String.format("Mind Break - Auto picks most beneficial buff.\n") : "") +
                String.format("%s", BPM_NO_COST_NOT_HITTING_MOBS ? String.format("Ultimate BPM - Stops consuming PP after %dms of not hitting mobs.\n", BPM_NO_COST_AFTER_MS) : "")
                ;
    }



    /**
     * Adele:
     * Hunting Decree - Affected by Buff Duration up to {@value HUNTING_DECREE_DURATION_CAP} ms.
     *
     */
    public static final boolean HUNTING_DECREE_AFFECTED_BY_BUFF_DURATION = true; // Ether Swords duration will be affected by Buff Duration
    public static final int HUNTING_DECREE_DURATION_CAP = 45000; // Max Duration

    public static String getAdeleSkillChangeString() {
        return "" +
                String.format("%s", HUNTING_DECREE_AFFECTED_BY_BUFF_DURATION ? String.format("Hunting Decree - Affected by Buff Duration up to %d ms.\n", HUNTING_DECREE_DURATION_CAP) : "")
                ;
    }



    /**
     * Illium:
     * Complete overhaul of the 'gauge system'. Instead of only requiring to have X crystal gauge. It will now also consume them. And you do not need to reset your Crystal Battery
     *
     * Longinus Zone - Reacts with any Crystal, only if the crystal is inside the Longinus Zone. Reacts upon Creation and Removal.
     * Templar Knight - Reacts with any Crystal, only if the crystal is touched by the Energy Strike of Templar Knight.
     *
     */
    public static final boolean CUSTOM_GAUGE_SYSTEM = false; // Changes gauge system to consume crystal gauge when using skills that require it
    public static final int VORTEX_WINGS_USAGES = 3; // Increases the amount of Vortex Wings that can be used whilst in Wings Of Glory mode.
    public static final boolean DECREASE_LONGINUS_SPEAR_CD = true; // Every {DEC_LONGINUS_GAUGE_COUNT} summon gauge obtained, it will decrease longinus spear by 1sec
    public static final int DEC_LONGINUS_GAUGE_COUNT = 10;

    public static final boolean REACT_ON_LONGINUS_ZONE = true; // If Crystal is inside Longinus Zone on use. React
    public static final int REACT_ON_LONGINUS_ZONE_INCREASE = 8; // Increase Crystal Gauge by 8
    public static final boolean REACT_ON_TEMPLAR_KNIGHT = true; // If Crystal is hit by Templar Knight's Shoot Object. React
    public static final int REACT_ON_TEMPLAR_KNIGHT_INCREASE = 2; // Increase Crystal Gauge by 2

    public static String getIlliumSkillChangeString() {
        return "" +
                String.format("Vortex Wings - Can use Vortex Wing %d times during Wings of Glory.\n", VORTEX_WINGS_USAGES) +
                String.format("%s", DECREASE_LONGINUS_SPEAR_CD ? String.format("Every %d summon gauge obtained, will decrease Longinus Spear cooldown by 1 sec.\n", DEC_LONGINUS_GAUGE_COUNT) : "") +
                String.format("%s", REACT_ON_LONGINUS_ZONE ? String.format("Longinus Zone - Reacts with any Crystal, within the Zone. Reaction is triggered upon Zone Creation and Zone Removal. Increases Gauge by %d. (Reaction cooldown is not triggered).\n", REACT_ON_LONGINUS_ZONE_INCREASE) : "") +
                String.format("%s", REACT_ON_TEMPLAR_KNIGHT ? String.format("Templar Knight - Reacts with any Crystal, hit by its Energy Strike. Increases Gauge by %d. (Reaction cooldown is not triggered).\n", REACT_ON_TEMPLAR_KNIGHT_INCREASE) : "")
                ;
    }



    /**
     * Ark:
     *
     */

    public static String getArkSkillChangeString() {
        return "";
    }



    /**
     * HoYoung:
     * Gold-Banded Cudgel - Final Blow gives {@value CUDGEL_FINAL_DAMAGE_VALUE}% final damage for {@value CUDGEL_FINAL_DAMAGE_DURATION} seconds.
     * Sage: Tai Yu Miracle Tonic - Whilst active allows HoYoung to create an additional {@value MASTER_ELIXIR_ADDED_CLONE_COUNT} clones.
     *
     */
    public static final int CUDGEL_FINAL_DAMAGE_VALUE = 20; // 20% FD
    public static final int CUDGEL_FINAL_DAMAGE_DURATION = 10; // seconds
    public static final int MASTER_ELIXIR_ADDED_CLONE_COUNT = 6;

    public static String getHoYoungSkillChangeString() {
        return "" +
                String.format("Gold-Banded Cudgel - Final Blow gives %d percent final damage for %d seconds.\n", CUDGEL_FINAL_DAMAGE_VALUE, CUDGEL_FINAL_DAMAGE_DURATION) +
                String.format("Sage: Tai Yu Miracle Tonic - Whilst active allows HoYoung to create an additional %d clones.\n", MASTER_ELIXIR_ADDED_CLONE_COUNT)
                ;
    }
}
