package net.swordie.ms.constants;

import net.swordie.ms.constants.lootconstants.common.boss.BronzeLootConstants;
import net.swordie.ms.constants.lootconstants.common.boss.GoldLootConstants;
import net.swordie.ms.constants.lootconstants.common.boss.GreyLootConstants;
import net.swordie.ms.constants.lootconstants.common.boss.SilverLootConstants;
import net.swordie.ms.life.drop.DropInfo;
import net.swordie.ms.util.container.Tuple;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

/**
 * Created on 29/12/2021.
 *
 * @author Asura
 */
public class BossLootConstants {
    /**
     * This class contains all the Loot information that is obtainable by bosses, PQs, events and more.
     * Common Loot Info is available per difficulty (See difficulty info below)
     *
     * Usage for specific cases (where loot should be specific to the event/PQ/boss  as well as contain Common Loot for the difficulty):
     * -> Create a method that combines the List<DropInfo> of the Common Loot with the specialised Loot for that event/PQ/boss
     *
     *
     * Ranking LootConstant per difficulty (from Easiest to Hardest)
     *
     * Tier Grey 1
     * Tier Grey ...
     * Tier Grey 9
     *
     * Tier Bronze 1
     * Tier Bronze ...
     * Tier Bronze 9
     *
     * Tier Silver 1
     * Tier Silver ...
     * Tier Silver 9
     *
     * Tier Gold 1
     * Tier Gold ...
     * Tier Gold 9
     *
     */

    private static final Map<Integer, List<DropInfo>> TEMPLATE_ID_TO_LOOT_POOL_MAP = Map.ofEntries(
            //
            // Grey 1
            //
            Map.entry(BossConstants.EASY_ZAKUM_BODY, GreyLootConstants.TIER_1_LOOT), // Zakum (Easy)

            //
            // Grey 2
            //
            Map.entry(BossConstants.NORMAL_ZAKUM_BODY, GreyLootConstants.TIER_2_LOOT), // Zakum (Normal)
            Map.entry(BossConstants.PAPULATUS_EASY_P2, GreyLootConstants.TIER_2_LOOT), //Papulatus (Easy)
            Map.entry(BossConstants.EASY_MAGNUS_TEMPLATE, GreyLootConstants.TIER_2_LOOT), // Magnus (Easy)

            //
            //Grey 3
            //
            Map.entry(BossConstants.HILLA_NORMAL, GreyLootConstants.TIER_3_LOOT), // Hilla (Normal)
            Map.entry(BossConstants.HORNTAIL_EASY, GreyLootConstants.TIER_3_LOOT), // Horntail (Easy)
            Map.entry(BossConstants.RANMARU_NORMAL_BODY, GreyLootConstants.TIER_3_LOOT), // Ranmaru (Normal)

            //
            //Grey 4
            //
            Map.entry(BossConstants.PIERRE_NORMAL_BOX, GreyLootConstants.TIER_4_LOOT), // Pierre (Normal)
            Map.entry(BossConstants.VON_BON_NORMAL, GreyLootConstants.TIER_4_LOOT), // Von Bon (Normal)
            Map.entry(BossConstants.CRIMSON_QUEEN_NORMAL_BOX, GreyLootConstants.TIER_4_LOOT), // Crimson Queen (Normal)
            Map.entry(BossConstants.VELLUM_NORMAL, GreyLootConstants.TIER_4_LOOT), // Vellum (Normal)
            Map.entry(BossConstants.GOLLUX_REWARD_EASY, GreyLootConstants.TIER_4_LOOT), // Gollux (Easy)

            //
            //Grey 5
            //
            Map.entry(BossConstants.HORNTAIL_NORMAL, GreyLootConstants.TIER_5_LOOT), // Horntail (Normal)
            Map.entry(BossConstants.VON_LEON_EASY, GreyLootConstants.TIER_5_LOOT), // Von Leon (Easy)
            Map.entry(BossConstants.ARKARIUM_EASY, GreyLootConstants.TIER_5_LOOT), // Arkarium (Easy)
            Map.entry(BossConstants.GOLLUX_REWARD_NORMAL, GreyLootConstants.TIER_5_LOOT), // Gollux (Normal)

            //
            //Grey 6
            //
            Map.entry(BossConstants.HORNTAIL_HARD, GreyLootConstants.TIER_6_LOOT), // Horntail (Chaos)
            Map.entry(BossConstants.PINK_BEAN_P2, GreyLootConstants.TIER_6_LOOT), // Pink Bean (Normal)
            Map.entry(BossConstants.VON_LEON_NORMAL, GreyLootConstants.TIER_6_LOOT), // Von Leon (Normal)

            //
            // Grey 7
            //
            Map.entry(BossConstants.VON_LEON_HARD, GreyLootConstants.TIER_7_LOOT), // Von Leon (Hard)
            Map.entry(BossConstants.ARKARIUM_NORMAL, GreyLootConstants.TIER_7_LOOT), // Arkarium (Normal)
            Map.entry(BossConstants.NORMAL_MAGNUS_TEMPLATE, GreyLootConstants.TIER_7_LOOT), // Magnus (Normal)
            Map.entry(BossConstants.PAPULATUS_NORMAL_P2, GreyLootConstants.TIER_7_LOOT), // Papulatus (Normal)
            Map.entry(BossConstants.RANMARU_HARD_BODY_5, GreyLootConstants.TIER_7_LOOT), // Ranmaru (Hard)

            //
            // Bronze 1
            //
            Map.entry(BossConstants.CYGNUS_EASY, BronzeLootConstants.TIER_1_LOOT), // Empress (Easy)
            Map.entry(BossConstants.HILLA_HARD, BronzeLootConstants.TIER_1_LOOT), // Hilla (Hard)
            Map.entry(BossConstants.CHAOS_PINK_BEAN_P2, BronzeLootConstants.TIER_1_LOOT), // Pink Bean (Chaos)

            //
            // Bronze 2
            //
            Map.entry(BossConstants.CYGNUS_NORMAL, BronzeLootConstants.TIER_2_LOOT), // Empress (Easy)
            Map.entry(BossConstants.HARD_ZAKUM_BODY, BronzeLootConstants.TIER_2_LOOT), // Zakum (Chaos)

            //
            // Bronze 3
            //
            Map.entry(BossConstants.PIERRE_CHAOS_BOX, BronzeLootConstants.TIER_3_LOOT), // Pierre (Chaos)
            Map.entry(BossConstants.VON_BON_CHAOS, BronzeLootConstants.TIER_3_LOOT), // Von Bon (Chaos)
            Map.entry(BossConstants.CRIMSON_QUEEN_CHAOS_BOX, BronzeLootConstants.TIER_3_LOOT), // Crimson Queen (Chaos)
            Map.entry(BossConstants.PRINCESS_NO, BronzeLootConstants.TIER_3_LOOT), // Princess No

            //
            // Bronze 4
            //
            Map.entry(BossConstants.VELLUM_CHAOS, BronzeLootConstants.TIER_4_LOOT), // Vellum (Chaos)
            Map.entry(BossConstants.HARD_MAGNUS_TEMPLATE, BronzeLootConstants.TIER_4_LOOT), //Magnus (Hard)
            Map.entry(BossConstants.GOLLUX_REWARD_HARD, BronzeLootConstants.TIER_4_LOOT), // Gollux (Hard)

            //
            // Bronze 5
            //
            Map.entry(BossConstants.PAPULATUS_CHAOS_P2, BronzeLootConstants.TIER_5_LOOT), // Papulatus (Chaos)
            Map.entry(BossConstants.LOTUS_P3, BronzeLootConstants.TIER_5_LOOT), // Lotus (Normal)
            Map.entry(BossConstants.DEMIAN_NORMAL_TEMPLATE_ID_2, BronzeLootConstants.TIER_5_LOOT), // Damien (Normal)
            Map.entry(BossConstants.AKECHI, BronzeLootConstants.TIER_5_LOOT), // Akechi

            //
            // Bronze 6
            //
            Map.entry(BossConstants.LUCID_REWARD_BOX_EASY, BronzeLootConstants.TIER_6_LOOT), // Lucid (Easy)
            Map.entry(BossConstants.GUARDIAN_ANGEL_SLIME_NORMAL, BronzeLootConstants.TIER_6_LOOT), // Guardian Angel Slime (Normal)


            //
            // Bronze 7
            //
            Map.entry(BossConstants.LUCID_REWARD_BOX_NORMAL, BronzeLootConstants.TIER_7_LOOT), // Lucid (Normal)
            Map.entry(BossConstants.WILL_P3, BronzeLootConstants.TIER_7_LOOT), // Will (Normal)
            Map.entry(BossConstants.GOLLUX_REWARD_HELL, BronzeLootConstants.TIER_7_LOOT), // Gollux (Hell)


            //
            // Silver 1
            //
            Map.entry(BossConstants.GLOOM, SilverLootConstants.TIER_1_LOOT), // Gloom (Normal)

            //
            // Silver 2
            //
            Map.entry(BossConstants.DARKNELL_NORMAL, SilverLootConstants.TIER_2_LOOT), // Dunkell (Normal)



            //
            // Silver 3
            //
            Map.entry(BossConstants.DEMIAN_HARD_TEMPLATE_ID_2, SilverLootConstants.TIER_3_LOOT), // Damien (Hard)

            //
            // Silver 4
            //
            Map.entry(BossConstants.LOTUS_HARD_P3, SilverLootConstants.TIER_4_LOOT), // Lotus (Hard)

            //
            // Silver 5
            //
            Map.entry(BossConstants.LUCID_REWARD_BOX_HARD, SilverLootConstants.TIER_5_LOOT), // Lucid (Hard)

            //
            // Silver 6
            //
            Map.entry(BossConstants.HARD_WILL_P3, SilverLootConstants.TIER_6_LOOT), // Will (Hard)

            //
            // Silver 7
            //
            Map.entry(BossConstants.GLOOM_CHAOS, SilverLootConstants.TIER_7_LOOT), // Gloom (Chaos)
            Map.entry(BossConstants.GUARDIAN_ANGEL_SLIME_CHAOS, SilverLootConstants.TIER_7_LOOT), // Guardian Angel SLime (Chaos)


            //
            // Silver 8
            //
            Map.entry(BossConstants.DARKNELL_CHAOS, SilverLootConstants.TIER_8_LOOT), // Dunkell (Hard)

            //
            // Silver 9
            //
            Map.entry(BossConstants.VERUS_HILLA, SilverLootConstants.TIER_9_LOOT), // Verus Hilla (Hard)

            //
            // Gold 5
            //
            Map.entry(BossConstants.GENESIS_CRUX, GoldLootConstants.TIER_5_LOOT), // Black Mage
            Map.entry(BossConstants.CHOSEN_SEREN_TREASURE_CHEST, GoldLootConstants.TIER_5_LOOT) //Seren

    );

    public static List<DropInfo> getLootPoolByTemplateId(int templateId) {
        return TEMPLATE_ID_TO_LOOT_POOL_MAP.getOrDefault(templateId, new ArrayList<>());
    }

    //MOB ID, <UI NAME, UI ICON>
    private static final Map<Integer, Tuple<Integer, Integer>> PowerCrystalTemplateIdOverrideForUI = Map.ofEntries(
            Map.entry(BossConstants.CRIMSON_QUEEN_NORMAL_BOX, new Tuple<>(BossConstants.NORMAL_CRIMSON_QUEEN_SIMMERING, BossConstants.NORMAL_CRIMSON_QUEEN_SIMMERING)),
            Map.entry(BossConstants.PIERRE_NORMAL_BOX, new Tuple<>(BossConstants.PIERRE_NORMAL_PURPLE, BossConstants.PIERRE_NORMAL_PURPLE)),
            Map.entry(BossConstants.CRIMSON_QUEEN_CHAOS_BOX, new Tuple<>(BossConstants.CHAOS_CRIMSON_QUEEN_SIMMERING, BossConstants.CHAOS_CRIMSON_QUEEN_SIMMERING)),
            Map.entry(BossConstants.PIERRE_CHAOS_BOX, new Tuple<>(BossConstants.PIERRE_CHAOS_PURPLE, BossConstants.PIERRE_CHAOS_PURPLE)),
            Map.entry(BossConstants.JULIETA_BOX, new Tuple<>(9402270, 9402270)),
            Map.entry(BossConstants.GUARDIAN_ANGEL_SLIME_NORMAL, new Tuple<>(9210052, 8880700)),
            Map.entry(BossConstants.GUARDIAN_ANGEL_SLIME_CHAOS, new Tuple<>(9210051, 8880711)),
            Map.entry(BossConstants.CHOSEN_SEREN_TREASURE_CHEST, new Tuple<>(9210050, 8880600)),
            Map.entry(BossConstants.LUCID_REWARD_BOX_EASY, new Tuple<>(9210048, 8880142)),
            Map.entry(BossConstants.DARKNELL_CHAOS, new Tuple<>(9210047, 8645066)),
            Map.entry(BossConstants.GLOOM_CHAOS, new Tuple<>(9210046, 8644655)),
            Map.entry(BossConstants.DARKNELL_NORMAL, new Tuple<>(9210043, 8645009)),
            Map.entry(BossConstants.GLOOM, new Tuple<>(9210042, 8644650)),
            Map.entry(BossConstants.GENESIS_CRUX, new Tuple<>(9210041, 8880502)),
            Map.entry(BossConstants.VERUS_HILLA, new Tuple<>(9210040, 8880410)),
            Map.entry(BossConstants.EASY_ZAKUM_BODY, new Tuple<>(9210000, 8800022)),
            Map.entry(BossConstants.NORMAL_ZAKUM_BODY, new Tuple<>(9210001, 8800002)),
            Map.entry(BossConstants.EASY_MAGNUS_TEMPLATE, new Tuple<>(9210003, 8880010)),
            Map.entry(BossConstants.NORMAL_MAGNUS_TEMPLATE, new Tuple<>(9210004, 8880002)),
            Map.entry(BossConstants.HARD_MAGNUS_TEMPLATE, new Tuple<>(9210005, 8880000)),
            Map.entry(BossConstants.HILLA_NORMAL, new Tuple<>(9210006, 8870000)),
            Map.entry(BossConstants.HILLA_HARD, new Tuple<>(9210007, 8870100)),
            Map.entry(BossConstants.VON_LEON_EASY, new Tuple<>(9210017, 8840007)),
            Map.entry(BossConstants.VON_LEON_NORMAL, new Tuple<>(9210018, 8840000)),
            Map.entry(BossConstants.VON_LEON_HARD, new Tuple<>(9210019, 8840014)),
            Map.entry(BossConstants.HORNTAIL_NORMAL, new Tuple<>(9210021, 8810018)),
            Map.entry(BossConstants.ARKARIUM_EASY, new Tuple<>(9210023, 8860005)),
            Map.entry(BossConstants.ARKARIUM_NORMAL, new Tuple<>(9210024, 8860000)),
            Map.entry(BossConstants.CYGNUS_EASY, new Tuple<>(9210027, 8850111)),
            Map.entry(BossConstants.CYGNUS_NORMAL, new Tuple<>(9210028, 8850011)),
            Map.entry(BossConstants.LOTUS_HARD_P3, new Tuple<>(9210030, 8950001)),
            Map.entry(BossConstants.DEMIAN_HARD_TEMPLATE_ID_2, new Tuple<>(9210032, 8880100)),
            Map.entry(BossConstants.LUCID_REWARD_BOX_NORMAL, new Tuple<>(9210033, 8880140)),
            Map.entry(BossConstants.LUCID_REWARD_BOX_HARD, new Tuple<>(9210034, 8880141)),
            Map.entry(BossConstants.PAPULATUS_EASY_P2, new Tuple<>(9210035, 8500002)),
            Map.entry(BossConstants.PAPULATUS_NORMAL_P2, new Tuple<>(9210036, 8500012)),
            Map.entry(BossConstants.PAPULATUS_CHAOS_P2, new Tuple<>(9210037, 8500022)),
            Map.entry(BossConstants.HARD_WILL_P3, new Tuple<>(9210039, 8880300))

    );

    //MOB ID, MESO AMOUNT
    private static final Map<Integer, Long> PowerCrystalMesoByTemplateId = Map.ofEntries(
            Map.entry(BossConstants.EASY_ZAKUM_BODY, 200_000L),
            Map.entry(BossConstants.NORMAL_ZAKUM_BODY, 612_500L),
            Map.entry(BossConstants.PAPULATUS_EASY_P2, 684_500L),
            Map.entry(BossConstants.EASY_MAGNUS_TEMPLATE, 722_000L),
            Map.entry(9400300, 722_000L), //YAKUZA boss
            Map.entry(BossConstants.HILLA_NORMAL, 800_000L),
            Map.entry(BossConstants.RANMARU_NORMAL_BODY, 840_500L),
            Map.entry(BossConstants.HORNTAIL_EASY, 882_000L),
            Map.entry(BossConstants.GIGATOAD, 882_000L),
            Map.entry(BossConstants.PIERRE_NORMAL_BOX, 968_000L),
            Map.entry(BossConstants.VON_BON_NORMAL, 968_000L),
            Map.entry(BossConstants.CRIMSON_QUEEN_NORMAL_BOX, 968_000L),
            Map.entry(BossConstants.VELLUM_NORMAL, 968_000L),
            Map.entry(BossConstants.HORNTAIL_NORMAL, 1_012_500L),
            Map.entry(BossConstants.VON_LEON_EASY, 1_058_000L),
            Map.entry(BossConstants.ARKARIUM_EASY, 1_152_000L),
            Map.entry(BossConstants.FRENZIED_GIGATOAD, 1_153_000L),
            Map.entry(BossConstants.JULIETA_BOX, 1_200_000L),
            Map.entry(BossConstants.OMNI_CLN, 1_250_000L),
            Map.entry(BossConstants.HORNTAIL_HARD, 1_352_000L),
            Map.entry(BossConstants.PINK_BEAN_P2, 1_404_500L),
            Map.entry(BossConstants.VON_LEON_NORMAL, 1_458_000L),
            Map.entry(BossConstants.VON_LEON_HARD, 2_450_000L),
            Map.entry(BossConstants.ARKARIUM_NORMAL, 2_520_500L),
            Map.entry(BossConstants.NORMAL_MAGNUS_TEMPLATE, 2_592_000L),
            Map.entry(BossConstants.PAPULATUS_NORMAL_P2, 2_664_500L),
            Map.entry(BossConstants.RANMARU_HARD_BODY_5, 2_664_500L),
            Map.entry(BossConstants.CYGNUS_EASY, 9_112_500L),
            Map.entry(BossConstants.HILLA_HARD, 11_250_000L),
            Map.entry(BossConstants.CHAOS_PINK_BEAN_P2, 12_800_000L),
            Map.entry(BossConstants.CYGNUS_NORMAL, 14_450_000L),
            Map.entry(BossConstants.HARD_ZAKUM_BODY, 16_200_000L),
            Map.entry(BossConstants.PIERRE_CHAOS_BOX, 16_200_000L),
            Map.entry(BossConstants.VON_BON_CHAOS, 16_200_000L),
            Map.entry(BossConstants.CRIMSON_QUEEN_CHAOS_BOX, 16_200_000L),
            Map.entry(BossConstants.PRINCESS_NO, 16_200_000L),
            Map.entry(BossConstants.HARD_MAGNUS_TEMPLATE, 19_012_500L),
            Map.entry(BossConstants.VELLUM_CHAOS, 21_012_500L),
            Map.entry(BossConstants.PAPULATUS_CHAOS_P2, 16_200_000L),
            Map.entry(BossConstants.AKECHI, 28_800_000L),
            Map.entry(BossConstants.LOTUS_P3, 32_512_500L),
            Map.entry(BossConstants.DEMIAN_NORMAL_TEMPLATE_ID_2, 33_800_000L),
            Map.entry(BossConstants.GUARDIAN_ANGEL_SLIME_NORMAL, 34_322_000L),
            Map.entry(BossConstants.LUCID_REWARD_BOX_EASY, 35_112_500L),
            Map.entry(BossConstants.WILL_P3, 46_512_500L),
            Map.entry(BossConstants.GLOOM, 49_612_500L),
            Map.entry(BossConstants.DARKNELL_NORMAL, 52_812_500L),
            Map.entry(BossConstants.DEMIAN_HARD_TEMPLATE_ID_2, 70_312_500L),
            Map.entry(BossConstants.LOTUS_HARD_P3, 74_112_500L),
            Map.entry(BossConstants.HARD_WILL_P3, 88_200_000L),
            Map.entry(BossConstants.VERUS_HILLA, 89_520_000L),
            Map.entry(BossConstants.GUARDIAN_ANGEL_SLIME_CHAOS, 90_312_500L),
            Map.entry(BossConstants.GLOOM_CHAOS, 92_450_000L),
            Map.entry(BossConstants.DARKNELL_CHAOS, 98_000_000L),
            //  Map.entry(0004, 110_450_000L), //TODO Verus Hilla Hard
            Map.entry(BossConstants.CHOSEN_SEREN_TREASURE_CHEST, 133_687_500L),
            //  Map.entry(0005, 151_250_000L), //TODO chosen seren hard
            //  Map.entry(0006, 200_000_000L), //TODO Guardian Kalos
            Map.entry(BossConstants.GENESIS_CRUX, 500_000_000L)
    );

    public static long getPowerCrystalMesoByTemplateId(int templateId) {
        return PowerCrystalMesoByTemplateId.getOrDefault(templateId, 0L);
    }

    public static Tuple<Integer, Integer> getPowerCrystalTemplateIdOverrideForUI(int mapEntry) {
        return PowerCrystalTemplateIdOverrideForUI.getOrDefault(mapEntry, null);
    }

    public static List<Map.Entry<Integer, Long>> getPowerCrystalMesos() {
        return PowerCrystalMesoByTemplateId.entrySet().stream().toList();
    }

    public static boolean isDropPowerCrystal(int templateId) {
        return PowerCrystalMesoByTemplateId.containsKey(templateId);
    }
}
