package net.swordie.ms.constants;

import net.swordie.ms.client.character.union.UnionRaid;
import net.swordie.ms.constants.questlineconstants.LionHeartQuestlineConstants;

import java.util.Map;

/**
 * @author Sjonnie
 * Created on 11/13/2018.
 */
public class FieldConstants {

    public static final int UNKNOWN_FIELD_ID = 999999999;
    public static final int HENESYS_FIELD_ID = 100000000;

    // Field Id : [Boss Template Id, PosX, PosY, HP]
    public static final Map<Integer, long[]> FIELD_BOSSES = Map.ofEntries(
            // Victoria Island
            Map.entry(104_010_200, new long[]{2220000, 127, 35, 80_000}), // Forest Trail 2 | Mano
            Map.entry(100_020_101, new long[]{6130101, -550, 215, 1_160_000}), // Mushmom Forest Trail | Mushmom
            Map.entry(100_020_301, new long[]{8220007, 195, -685, 2_400_000}), // Blue Mushmom Forest | Blue Mushmom
            Map.entry(105_010_301, new long[]{6300005, 1666, 1280, 9_780_000}), // Ant Tunnel Square 2 | Zombie Mushmom
            Map.entry(102_020_500, new long[]{9500338, 1670, 2145, 14_540_000}), // Gusty Peak | Stumpy
            Map.entry(105_020_400, new long[]{8220009, 1330, 140, 16_830_000}), // Cave Exit | Snack Bar
            Map.entry(105_030_500, new long[]{8130100, 375, 130, 22_660_000}), // Forbidden Altar | Jr. Balrog

            // Nihal Desert
            Map.entry(260_010_500, new long[]{3220001, 222, 275, 38_740_000}), // Dry Desert | Deo
            Map.entry(261_020_300, new long[]{7090000, 400, 167, 42_660_000}), // Lab Area C-1 | Security Camera
            Map.entry(261_010_003, new long[]{6090004, 275, 313, 49_040_000}), // Lab Unit 103 | Rurumo
            Map.entry(261_020_500, new long[]{8090000, 0, 167, 56_375_000}), // Lab Area C-3 | Deet and Roi
            Map.entry(261_030_000, new long[]{8220002, -606, -116, 3_450_000}), // Lab - Secret Basement Path | Chimera

            // Ludus Lake
            Map.entry(220_050_200, new long[]{2600613, 252, 1032, 77_760_000}), // Lost Time<2> | Timer
            Map.entry(300_010_410, new long[]{5250004, -500, 89, 80_760_000}), // Rocky Mountain Cave | Chao
            Map.entry(230_020_100, new long[]{4220000, -100, 580, 80_760_000}), // The Seaweed Tower | Seruf
            Map.entry(230_020_101, new long[]{4220000, -178, 580, 80_760_000}), // The Hidden Town | Seruf

            // El Nath Mts.
            Map.entry(200_010_302, new long[]{8220000, -91, 83, 80_530_000}), // Garden of Darkness II | Eliza
            Map.entry(211_050_000, new long[]{6090001, -473, -397, 95_530_000}), // Icy Cold Field | Snow Witch
            Map.entry(211_040_500, new long[]{8220001, -18, 514, 130_530_000}), // Sharp Cliff 3 | Snowman
            Map.entry(211_041_400, new long[]{6090000, 1558, 94, 180_530_000}), // Forest of Dead Trees IV | Riche

            // Mu Lung Garden
            Map.entry(250_020_300, new long[]{5090001, 1088, -485, 190_530_000}), // Practice Field Adv Lv | Master Dummy
            Map.entry(251_010_403, new long[]{9300119, 72, 153, 190_530_000}), // Red-Nose Pirate Den 3 | Lord Pirate
            Map.entry(250_010_503, new long[]{7220002, 704, 543, 190_530_000}), // Goblin Forest 1 | King Sage Cat
            Map.entry(250_010_304, new long[]{7220000, -432, 393, 195_530_000}), // Territory of wandering bear | Tae Roon
            Map.entry(251_010_300, new long[]{5120507, 790, 195, 35_640_000}), // Bellflower Valley | Gigantic Bellflower Root
            Map.entry(251_010_102, new long[]{5220004, 650, 61, 18_922_500}), // 80-Year-Old Herb Garden | Giant Centipede
            Map.entry(251_010_101, new long[]{6090002, 501, 123, 21_756_000}), // 60-Year-Old Herb Garden | Bamboo Warrior

            // Leafre
            Map.entry(240_040_401, new long[]{8220003, -47, 1150, 227_530_000}), // Leviathan's Canyon | Leviathan

            // Zipangu
            Map.entry(800_040_201, new long[]{9400408, 1697, 139, 780_000_000L}), // Castle Corridor | False Daimyo
            Map.entry(800_040_202, new long[]{9400403, 1539, 139, 790_000_000L}), // Castle Corridor | Kaede Ninto
            Map.entry(800_040_203, new long[]{9400409, 255, 139, 1_240_000_000L}), // Castle Corridor | Emperor Toad

            // Temple of Time
            Map.entry(270_010_500, new long[]{2600705, 290, -877, 500_000_000L}), // Memory Lane 5 | Dodo
            Map.entry(270_020_500, new long[]{2600710, 70, -529, 700_000_000L}), // Road to Regrets 5 | Lilynouch
            Map.entry(270_030_500, new long[]{2600715, -219, -570, 1_200_000_000L}) // Road to Oblivion 5 | Lyka
    );
    public static final int FIELD_BOSS_SPAWN_INTERVAL = 5 * 60 * 1000; // 5 minutes

    public static boolean isVonbonField(int fieldID) {
        return fieldID > 105200100 && fieldID < 105200120 || fieldID > 105200500 && fieldID < 105200520;
    }

    public static boolean isVonBonInstanceField(int fieldID) {
        return fieldID >= 105200100 && fieldID < 105200120 || fieldID >= 105200500 && fieldID < 105200520;
    }

    public static boolean isVellumField(int fieldID) {
        return  fieldID == 105200800 || fieldID == 105200810;
    }

    public static boolean isPierreField(int fieldID) {
        return fieldID == 105200600 || fieldID == BossConstants.PIERRE_CHAOS_FIELDID ||fieldID == 105200200 || fieldID == BossConstants.PIERRE_NORMAL_FIELDID;
    }

    public static boolean isNeverInstancedField(int fieldId) {
        switch (fieldId) {
            case 863000100: // Gollux Out Field
            case 910000000: // FM
            case OzConstants.OZ_LOBBY:
            case LionHeartQuestlineConstants.TOWER_1_FIELD_ID:
            case 450002010: //Slurpy forest (Exit of Slurpy tree habitat field boss)
            case 140020200: //Snow-covered Field 3 (Exit of Rien harbor)
            case 310000000: //Edelstein main map
            case 310050100: //Verne Mine, power plant Resistance 3rd job adv
            case 865010200: //Commerci Republic | Berry, out map for instance for quest 17613
            case 261010600: //Lab- Area B-3 exit from [Magatia's Secret] An Incident, and the Missing Alchemist (3309)
            case 261000010: //Zenumist Society, Instance warp out from Closed Lab
            case 450006130: //Morass abandoned area 3 (exit of abandoned area 4
                return true;
        }

        return false;
    }
    public static boolean isAggroField(int fieldId) {
        switch(fieldId)
        {
            case 910360001:
            case 910360200:
                return false;
        }
        return true;
    }

    public static boolean isUnionRaidField(int fieldId) {
        return fieldId == UnionRaid.GRASS_FIELD || fieldId == UnionRaid.BATTLE_ARENA;
    }

    public static boolean isMonsterParkField(int id) {
        return id >= 952020000 && id < 955000000;
    }

    public static boolean isPapulatusField(int id) {
        return id == 220080100 || id == 220080200 || id == 220080300;
    }

    public static boolean isBossWillField(int fieldId) {
        return fieldId == BossConstants.WILL_FIELD_P1 || fieldId == BossConstants.WILL_FIELD_P2 || fieldId == BossConstants.WILL_FIELD_P3
                || fieldId == BossConstants.WILL_HARD_FIELD_P1 || fieldId == BossConstants.WILL_HARD_FIELD_P2 || fieldId == BossConstants.WILL_HARD_FIELD_P3;
    }

    public static boolean isWillP2Field(int fieldId) {
        return fieldId == BossConstants.WILL_FIELD_P2 || fieldId == BossConstants.WILL_HARD_FIELD_P2;
    }

    public static boolean isWillP1Field(int fieldId) {
        return fieldId == BossConstants.WILL_FIELD_P1 || fieldId == BossConstants.WILL_HARD_FIELD_P1;
    }

    public static boolean isHardWillField(int id) {
        return id == BossConstants.WILL_HARD_FIELD_P1 || id == BossConstants.WILL_HARD_FIELD_P2 || id == BossConstants.WILL_HARD_FIELD_P3;
    }

    public static boolean isVonLeonField(int id){
        return id == BossConstants.VON_LEON_EASY_FIELDID || id == BossConstants.VON_LEON_NORMAL_FIELDID || id == BossConstants.VON_LEON_HARD_FIELDID;
    }

    public static boolean isRanmaruField(int id){
        return id == BossConstants.RANMARU_NORMAL_MAP || id == BossConstants.RANMARU_HARD_MAP;
    }

    public static boolean isCygnusField(int id){
        return id == BossConstants.CYGNUS_EASY_MAP || id == BossConstants.CYGNUS_NORMAL_MAP;
    }

    public static boolean isVoyageField(int id) {
        return id == 865000100
                || id == 865000200
                || id == 865000300
                || id == 865000400
                || id == 865000501
                || id == 865000900;
    }

    public static boolean isDoNotRunFieldScriptNames(String name) {
        return name.equalsIgnoreCase("SailField");
    }

    public static boolean isTowerOfOzField(int fieldId) {
        return fieldId >= 992001000 && fieldId <= 992050000;
    }

    public static boolean isTowerOfOzJQField(int fieldId) {
        return
                fieldId == 992007000 ||     // Undersea Tower of Oz : Undersea 07F (Forest)
                fieldId == 992012000 ||     // Undersea Tower of Oz : Undersea 12F (Jungle)
                fieldId == 992017000 ||     // Undersea Tower of Oz : Undersea 17F (Swamp)
                fieldId == 992019000 ||     // Undersea Tower of Oz : Undersea 19F (Beach)
                fieldId == 992022000 ||     // Undersea Tower of Oz : Undersea 22F (Clouds)
                fieldId == 992023000 ||     // Undersea Tower of Oz : Undersea 23F (Henesys)
                fieldId == 992027000 ||     // Undersea Tower of Oz : Undersea 27F (Forest)
                fieldId == 992041000 ||     // Undersea Tower of Oz : Undersea 41F (Leafre)
                fieldId == 992044000 ||     // Undersea Tower of Oz : Undersea 44F (Burning Leafre)
                fieldId == 992047000 ||     // Undersea Tower of Oz : Undersea 47F (Invisible JQ)
                fieldId == 992048000        // Undersea Tower of Oz : Undersea 48F (Invisible Jungle JQ)
                ;
    }

    public static boolean isTowerOfOzRestField(int fieldId) {
        return
                fieldId == 992005000 ||     // F5
                fieldId == 992015000 ||     // F15
                fieldId == 992025000 ||     // F25
                fieldId == 992035000 ||     // F35
                fieldId == 992045000        // F45
                ;
    }

    public static boolean isTowerOfOzBossField(int fieldId) {
        return
                fieldId == 992010000 ||     // F10
                fieldId == 992020000 ||     // F20
                fieldId == 992030000 ||     // F30
                fieldId == 992040000 ||     // F40
                fieldId == 992050000        // F50
                ;
    }

    /**
     * Fields where the mobs do not drop a bunch of equips and use items.
     * @param fieldId
     * @return
     */
    public static boolean isNoItemDropField(int fieldId) {
        if (FieldConstants.isTowerOfOzBossField(fieldId)) {
            return false;
        }

        return isTowerOfOzField(fieldId) || isVoyageField(fieldId) || isMoonBunnyField(fieldId);
    }

    public static boolean isBypassFieldLimitCheckField(int fieldId) {
        return isTowerOfOzField(fieldId);
    }

    public static boolean isNoClockField(int fieldId) {
        return isTowerOfOzField(fieldId);
    }

    public static boolean isNoFlyField(int fieldId) {
        return isTowerOfOzJQField(fieldId) || fieldId == 992034000;
    }

    public static boolean isBossMagnusField(int fieldId) {
        //                  Normal                  Hard                    Easy
        return fieldId == 401060100 || fieldId == 401060200 || fieldId == 401060300;
    }

    public static boolean isHardHillaField(int fieldId) {
        return fieldId == 262031300 || fieldId == 262031100;
    }

    public static boolean isBossZakumField(int fieldId) {
        return fieldId == BossConstants.EASY_ZAKUM_FIELD || fieldId == BossConstants.NORMAL_ZAKUM_FIELD || fieldId == BossConstants.HARD_ZAKUM_FIELD;
    }

    public static boolean isBountyHuntField(int fieldId) {
        return fieldId == 993000000;
    }

    public static boolean isNettPyramidField(int fieldId) {
        return fieldId == 926010300;
    }

    public static boolean isGuardTheCastleGatesField(int fieldId) {
        return fieldId == 993000100;
    }

    public static boolean isCourtshipDancingField(int fieldId) {
        return fieldId == 993000400;
    }

    public static boolean isInfernoWolfDenField(int fieldId) {
        return fieldId == 993000500;
    }

    public static boolean isGooExplorationField(int fieldId){
        return fieldId >= 867155900 && fieldId <= 867156400;
    }

    public static boolean isMoonBunnyField(int fieldId) {
        return fieldId == 910010000;
    }

    public static boolean isNoSpawnMobOnFieldCreate(int fieldId) {
        return isMoonBunnyField(fieldId);
    }

    public static boolean isGloomField(int fieldId) {
        return fieldId == BossConstants.GLOOM_FIELD || fieldId == BossConstants.GLOOM_HARD_FIELD;
    }

    public static boolean isAlwaysRespawnInReturnMap(int fieldId){
        return fieldId == BossConstants.VON_BON_CHAOS_REALM_FIELDID ||
                fieldId == BossConstants.VON_BON_NORMAL_FIELDID;
    }
}
