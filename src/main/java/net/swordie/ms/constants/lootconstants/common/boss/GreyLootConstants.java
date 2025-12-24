package net.swordie.ms.constants.lootconstants.common.boss;

import net.swordie.ms.constants.ItemConstants;
import net.swordie.ms.constants.lootconstants.common.MechEvanAdditionLootConstants;
import net.swordie.ms.constants.lootconstants.common.PotionsLootConstants;
import net.swordie.ms.life.drop.DropInfo;

import java.util.ArrayList;
import java.util.List;

/**
 * Created on 30/12/2021.
 *
 * @author Asura
 */
public class GreyLootConstants {
    /**
     * Tier Grey 1
     * <p>
     * Boss:
     * - Zakum (Easy)
     */
    public static final List<DropInfo> TIER_1_LOOT = new ArrayList<>() {{
        // Potions & Junk
        addAll(PotionsLootConstants.POTIONS_LOOT);

        // Crusader Coins
        add(new DropInfo(ItemConstants.CRUSADER_COIN, 60_00, 2, 2));
        add(new DropInfo(ItemConstants.CRUSADER_COIN, 20_00, 2, 3));

        // Medal of Honor
        add(new DropInfo(ItemConstants.BOSS_MEDAL_OF_HONOR, 20_00));

        // Spell Traces
        add(new DropInfo(ItemConstants.SPELL_TRACE_ID, 60_00, 40, 120));
        add(new DropInfo(ItemConstants.SPELL_TRACE_ID, 30_00, 40, 120));
    }};


    /**
     * Tier Grey 2
     * <p>
     * Boss:
     * - Zakum (Normal)
     * - Papulatus (Easy)
     * - Magnus (Easy)
     */
    public static final List<DropInfo> TIER_2_LOOT = new ArrayList<>() {{
        // Potions & Junk
        addAll(PotionsLootConstants.POTIONS_LOOT);

        // Crusader Coins
        new DropInfo(ItemConstants.CRUSADER_COIN, 60_00, 2, 3);
        new DropInfo(ItemConstants.CRUSADER_COIN, 20_00, 2, 4);

        // Medal of Honor
        new DropInfo(ItemConstants.BOSS_MEDAL_OF_HONOR, 30_00);
        new DropInfo(ItemConstants.BOSS_MEDAL_OF_HONOR, 20_00);

        // Spell Traces
        new DropInfo(ItemConstants.SPELL_TRACE_ID, 60_00, 80, 160);
        new DropInfo(ItemConstants.SPELL_TRACE_ID, 30_00, 80, 160);

        // Rebirth Flame
        new DropInfo(ItemConstants.REBIRTH_FLAME_110, 40_00);
    }};


    /**
     * Tier Grey 3
     * <p>
     * Boss:
     * - Hilla (Normal)
     * - Horntail (Easy)
     * - Ranmaru (Normal)
     */
    public static final List<DropInfo> TIER_3_LOOT = new ArrayList<>() {{
        // Potions & Junk
        addAll(PotionsLootConstants.POTIONS_LOOT);

        // Crusader Coins
        add(new DropInfo(ItemConstants.CRUSADER_COIN, 60_00, 2, 6));
        add(new DropInfo(ItemConstants.CRUSADER_COIN, 20_00, 3, 6));

        // Medal of Honor
        add(new DropInfo(ItemConstants.BOSS_MEDAL_OF_HONOR, 30_00));
        add(new DropInfo(ItemConstants.BOSS_MEDAL_OF_HONOR, 20_00));

        // Spell Traces
        add(new DropInfo(ItemConstants.SPELL_TRACE_ID, 60_00, 80, 160));
        add(new DropInfo(ItemConstants.SPELL_TRACE_ID, 40_00, 80, 160));
        add(new DropInfo(ItemConstants.SPELL_TRACE_ID, 30_00, 80, 160));

        // Rebirth Flame
        add(new DropInfo(ItemConstants.REBIRTH_FLAME_110, 50_00));
        add(new DropInfo(ItemConstants.REBIRTH_FLAME_120, 20_00));

        // Mechanic and Evan Additional Equips
        addAll(MechEvanAdditionLootConstants.MECH_PURE_GOLD_ADDITION_LOOT);
        addAll(MechEvanAdditionLootConstants.EVAN_GOLD_ADDITION_LOOT);
    }};


    /**
     * Tier Grey 4
     * <p>
     * Boss:
     * - Pierre (Normal)
     * - Von bon (Normal)
     * - Crimson Queen (Normal)
     * - Vellum (Normal)
     */
    public static final List<DropInfo> TIER_4_LOOT = new ArrayList<>() {{
        // Potions & Junk
        addAll(PotionsLootConstants.POTIONS_LOOT);

        // Crusader Coins
        add(new DropInfo(ItemConstants.CRUSADER_COIN, 60_00, 2, 3));
        add(new DropInfo(ItemConstants.CRUSADER_COIN, 30_00, 2, 3));
        add(new DropInfo(ItemConstants.CRUSADER_COIN, 30_00, 2, 4));
        add(new DropInfo(ItemConstants.CRUSADER_COIN, 20_00, 2, 4));
        add(new DropInfo(ItemConstants.CRUSADER_COIN, 10_00, 2, 4));

        // Medal of Honor
        add(new DropInfo(ItemConstants.BOSS_MEDAL_OF_HONOR, 60_00));
        add(new DropInfo(ItemConstants.BOSS_MEDAL_OF_HONOR, 30_00));
        add(new DropInfo(ItemConstants.BOSS_MEDAL_OF_HONOR, 30_00));
        add(new DropInfo(ItemConstants.BOSS_MEDAL_OF_HONOR, 20_00));

        // Spell Traces
        add(new DropInfo(ItemConstants.SPELL_TRACE_ID, 60_00, 140, 350));
        add(new DropInfo(ItemConstants.SPELL_TRACE_ID, 40_00, 140, 350));
        add(new DropInfo(ItemConstants.SPELL_TRACE_ID, 30_00, 140, 350));

        // Rebirth Flame
        add(new DropInfo(ItemConstants.REBIRTH_FLAME_110, 60_00));
        add(new DropInfo(ItemConstants.REBIRTH_FLAME_120, 30_00));

        // Chaos Scroll
        add(new DropInfo(ItemConstants.MIRACULOUS_CHAOS_SCROLL_60, 10_00));

        addAll(MechEvanAdditionLootConstants.MECH_PURE_GOLD_ADDITION_LOOT);
        addAll(MechEvanAdditionLootConstants.EVAN_GOLD_ADDITION_LOOT);
    }};


    /**
     * Tier Grey 5
     * <p>
     * Boss:
     * - Horntail (Normal)
     * - Von Leon (Easy)
     * - Arkarium (Easy)
     * - Julieta (Normal)
     * - Gollux (Normal)
     */
    public static final List<DropInfo> TIER_5_LOOT = new ArrayList<>() {{
        // Potions & Junk
        addAll(PotionsLootConstants.POTIONS_LOOT);

        // Crusader Coins
        add(new DropInfo(ItemConstants.CRUSADER_COIN, 70_00, 2, 4));
        add(new DropInfo(ItemConstants.CRUSADER_COIN, 70_00, 2, 4));
        add(new DropInfo(ItemConstants.CRUSADER_COIN, 70_00, 2, 4));
        add(new DropInfo(ItemConstants.CRUSADER_COIN, 20_00, 2, 4));
        add(new DropInfo(ItemConstants.CRUSADER_COIN, 10_00, 2, 3));

        // Medal of Honor
        add(new DropInfo(ItemConstants.BOSS_MEDAL_OF_HONOR, 60_00));
        add(new DropInfo(ItemConstants.BOSS_MEDAL_OF_HONOR, 60_00));
        add(new DropInfo(ItemConstants.BOSS_MEDAL_OF_HONOR, 60_00));
        add(new DropInfo(ItemConstants.BOSS_MEDAL_OF_HONOR, 30_00));

        // Spell Traces
        add(new DropInfo(ItemConstants.SPELL_TRACE_ID, 60_00, 300, 350));
        add(new DropInfo(ItemConstants.SPELL_TRACE_ID, 40_00, 300, 350));
        add(new DropInfo(ItemConstants.SPELL_TRACE_ID, 30_00, 300, 350));
        add(new DropInfo(ItemConstants.SPELL_TRACE_ID, 20_00, 300, 350));

        // Rebirth Flame
        add(new DropInfo(ItemConstants.REBIRTH_FLAME_120, 60_00));
        add(new DropInfo(ItemConstants.REBIRTH_FLAME_120, 10_00));

        // Chaos Scroll
        add(new DropInfo(ItemConstants.MIRACULOUS_CHAOS_SCROLL_60, 12_00));

        addAll(MechEvanAdditionLootConstants.MECH_PURE_GOLD_ADDITION_LOOT);
        addAll(MechEvanAdditionLootConstants.EVAN_GOLD_ADDITION_LOOT);
    }};


    /**
     * Tier Grey 6
     * <p>
     * Boss:
     * - OMNI-CLN
     * - Horntail (Chaos)
     * - Pink Bean (Normal)
     * - Von Leon (Normal)
     */
    public static final List<DropInfo> TIER_6_LOOT = new ArrayList<>() {{

    }};


    /**
     * Tier Grey 7
     * <p>
     * Boss:
     * - Von Leon (Hard)
     * - Arkarium (Normal)
     * - Magnus (Normal)
     * - Papulatus (Normal)
     * - Ranmaru (Hard)
     */
    public static final List<DropInfo> TIER_7_LOOT = new ArrayList<>() {{

    }};


    /**
     * Tier Grey 8
     * <p>
     * Boss:
     */
    public static final List<DropInfo> TIER_8_LOOT = new ArrayList<>() {{

    }};


    /**
     * Tier Grey 9
     * <p>
     * Boss:
     */
    public static final List<DropInfo> TIER_9_LOOT = new ArrayList<>() {{

    }};
}
