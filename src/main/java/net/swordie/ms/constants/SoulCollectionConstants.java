package net.swordie.ms.constants;

import net.swordie.ms.client.jobs.common.SoulSkillHandler;
import net.swordie.ms.client.soulcollection.BossSoulType;

import java.util.Arrays;

/**
 * Created on 03/07/2021.
 *
 * @author Asura
 */
public class SoulCollectionConstants {

    // region Soul Ids
    private static final int[] balrogSoulIds = new int[] {46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 125, 126, 127, 128, 129, 130, 131, 132,};
    private static final int[] balrogMagniSoulIds = new int[] {86,};

    private static final int[] vonLeonSoulIds = new int[] {66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 133, 134, 135, 136, 137, 138, 139, 140,};
    private static final int[] vonLeonMagniSoulIds = new int[] {87,};

    private static final int[] spiritOfRockSoulIds = new int[] {11, 12, 13, 14, 15, 16, 17, 90, 91, 92, 93, 94, 95, 96,};
    private static final int[] spiritOfRockMagniSoulIds = new int[] {};

    private static final int[] prisonGuardAniSoulIds = new int[] {18, 19, 20, 21, 22, 23, 24, 97, 98, 99, 100, 101, 102, 103,};
    private static final int[] prisonGuardAniMagniSoulIds = new int[] {};

    private static final int[] dragonRiderSoulIds = new int[] {25, 26, 27, 28, 29, 30, 31, 104, 105, 106, 107, 108, 109, 110,};
    private static final int[] dragonRiderMagniSoulIds = new int[] {};

    private static final int[] rexSoulIds = new int[] {32, 33, 34, 35, 36, 37, 38, 111, 112, 113, 114, 115, 116, 117,};
    private static final int[] rexMagniSoulIds = new int[] {};

    private static final int[] muGongSoulIds = new int[] {39, 40, 41, 42, 43, 44, 45, 118, 119, 120, 121, 122, 123, 124,};
    private static final int[] muGongMagniSoulIds = new int[] {};

    private static final int[] cygnusSoulIds = new int[] {76, 77, 78, 79, 80, 81, 82, 83, 180, 181, 182, 183, 184, 185, 186, 187,};
    private static final int[] cygnusMagniSoulIds = new int[] {89,};

    private static final int[] xerxesSoulIds = new int[] {149, 150, 151, 152, 153, 154, 155, 165, 166, 167, 168, 169, 170, 171,};
    private static final int[] xerxesMagniSoulIds = new int[] {};

    private static final int[] zakumSoulIds = new int[] {156, 157, 158, 159, 160, 161, 162, 163, 172, 173, 174, 175, 176, 177, 178, 179,};
    private static final int[] zakumMagniSoulIds = new int[] {164,};

    private static final int[] epheniaSoulIds = new int[] {188, 189, 190, 191, 192, 193, 194, 204, 205, 206, 207, 208, 209, 210,};
    private static final int[] epheniaMagniSoulIds = new int[] {};

    private static final int[] arkariumSoulIds = new int[] {195, 196, 197, 198, 199, 200, 201, 202, 211, 212, 213, 214, 215, 216, 217, 218,};
    private static final int[] arkariumMagniSoulIds = new int[] {203,};

    private static final int[] pianusSoulIds = new int[] {219, 220, 221, 222, 223, 224, 225, 235, 236, 237, 238, 239, 240, 241,};
    private static final int[] pianusMagniSoulIds = new int[] {};

    private static final int[] hillaSoulIds = new int[] {242, 243, 244, 245, 246, 247, 248, 249, 226, 227, 228, 229, 230, 231, 232, 233,};
    private static final int[] hillaMagniSoulIds = new int[] {234,};

    private static final int[] pinkbeanSoulIds = new int[] {56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 141, 142, 143, 144, 145, 146, 147, 148,};
    private static final int[] pinkbeanMagniSoulIds = new int[] {88, 487,};

    private static final int[] magnusSoulIds = new int[] {257, 258, 259, 260, 261, 262, 263, 264, 273, 274, 275, 276, 277, 278, 279, 280,};
    private static final int[] magnusMagniSoulIds = new int[] {265,};

    private static final int[] blackSlimeSoulIds = new int[] {250, 251, 252, 253, 254, 255, 256, 266, 267, 268, 269, 270, 271, 272,};
    private static final int[] blackSlimeMagniSoulIds = new int[] {};

    private static final int[] murgothSoulIds = new int[] {289, 290, 291, 292, 293, 294, 295, 296,};
    private static final int[] murgothMagniSoulIds = new int[] {297,};

    private static final int[] blackKnightSoulIds = new int[] {343, 344, 345, 346, 347, 348, 349, 350, 298, 299, 300, 301, 302, 303, 304, 305,};
    private static final int[] blackKnightMagniSoulIds = new int[] {306,};

    private static final int[] madMageSoulIds = new int[] {351, 352, 353, 354, 355, 356, 357, 358, 307, 308, 309, 310, 311, 312, 313, 314,};
    private static final int[] madMageMagniSoulIds = new int[] {315,};

    private static final int[] rampantCyborgSoulIds = new int[] {359, 360, 361, 362, 363, 364, 365, 366, 316, 317, 318, 319, 320, 321, 322, 323,};
    private static final int[] rampantCyborgMagniSoulIds = new int[] {324,};

    private static final int[] viciousHunterSoulIds = new int[] {367, 368, 369, 370, 371, 372, 373, 374, 325, 326, 327, 328, 329, 330, 331, 332,};
    private static final int[] viciousHunterMagniSoulIds = new int[] {333,};

    private static final int[] badBrawlerSoulIds = new int[] {375, 376, 377, 378, 379, 380, 381, 382, 334, 335, 336, 337, 338, 339, 340, 341,};
    private static final int[] badBrawlerMagniSoulIds = new int[] {342,};

    private static final int[] pierreSoulIds = new int[] {384, 385, 386, 387, 388, 389, 390, 391, 429, 430, 431, 432, 433, 434, 435, 436,};
    private static final int[] pierreMagniSoulIds = new int[] {392,};

    private static final int[] vonBonSoulIds = new int[] {393, 394, 395, 396, 397, 398, 399, 400, 437, 438, 439, 440, 441, 442, 443, 444,};
    private static final int[] vonBonMagniSoulIds = new int[] {401,};

    private static final int[] crimsonQueenSoulIds = new int[] {445, 446, 447, 448, 449, 450, 451, 452, 402, 403, 404, 405, 406, 407, 408, 409,};
    private static final int[] crimsonQueenMagniSoulIds = new int[] {410,};

    private static final int[] vellumSoulIds = new int[] {453, 454, 455, 456, 457, 458, 459, 460, 411, 412, 413, 414, 415, 416, 417, 418,};
    private static final int[] vellumMagniSoulIds = new int[] {419,};

    private static final int[] lotusSoulIds = new int[] {461, 462, 463, 464, 465, 466, 467, 468, 420, 421, 422, 423, 424, 425, 426, 427,};
    private static final int[] lotusMagniSoulIds = new int[] {428,};

    private static final int[] goldDragonSoulIds = new int[] {469, 470, 471, 472, 473, 474, 475, 476, 485,};
    private static final int[] goldDragonMagniSoulIds = new int[] {};

    private static final int[] redTigerSoulIds = new int[] {477, 478, 479, 480, 481, 482, 483, 484, 486,};
    private static final int[] redTigerMagniSoulIds = new int[] {};

    private static final int[] ursusSoulIds = new int[] {519, 520, 521, 522, 523, 524, 525, 526, 510, 511, 512, 513, 514, 515, 516, 517,};
    private static final int[] ursusMagniSoulIds = new int[] {518,};

    private static final int[] pinkMongSoulIds = new int[] {529, 530, 531, 532, 533, 534, 535,};
    private static final int[] pinkMongMagniSoulIds = new int[] {};

    private static final int[] tutuSoulIds = new int[] {545, 546, 547, 548, 549, 550, 551, 552, 553,};
    private static final int[] tutuMagniSoulIds = new int[] {};

    private static final int[] neneSoulIds = new int[] {554, 555, 556, 557, 558, 559, 560, 561, 562,};
    private static final int[] neneMagniSoulIds = new int[] {};

    private static final int[] damienSoulIds = new int[] {565, 566, 567, 568, 569, 570, 571, 572, 574, 575, 576, 577, 578, 579, 580, 581,};
    private static final int[] damienMagniSoulIds = new int[] {582, 573,};

    private static final int[] lucidSoulIds = new int[] {583, 584, 585, 586, 587, 588, 589, 590, 592, 593, 594, 595, 596, 597, 598, 599,};
    private static final int[] lucidMagniSoulIds = new int[] {591,};

    private static final int[] eluniteElementalSoulIds = new int[] {603, 604, 605, 606, 607, 608, 609, 610,};
    private static final int[] eluniteElementalMagniSoulIds = new int[] {611,};

    private static final int[] papulatusSoulIds = new int[] {621, 622, 623, 624, 625, 626, 627, 628, 612, 613, 614, 615, 616, 617, 618, 619,};
    private static final int[] papulatusMagniSoulIds = new int[] {620,};

    private static final int[] willSoulIds = new int[] {642, 643, 644, 645, 646, 647, 648, 649, 633, 634, 635, 636, 637, 638, 639, 640,};
    private static final int[] willMagniSoulIds = new int[] {641,};

    private static final int[] verusHillaSoulIds = new int[] {661, 662, 663, 664, 665, 666, 667, 668, 652, 653, 654, 655, 656, 657, 658, 659,};
    private static final int[] verusHillaMagniSoulIds = new int[] {660,};

    private static final int[] darknellSoulIds = new int[] {678, 679, 680, 681, 682, 683, 684, 685, 669, 670, 671, 672, 673, 674, 675, 676,};
    private static final int[] darknellMagniSoulIds = new int[] {677,};
    // endregion Soul Ids

    // region isSouldId Methods
    public static boolean isBalrogSoulId(int soulId) {
        return Arrays.stream(balrogSoulIds).anyMatch(s -> s == soulId);
    }

    public static boolean isBalrogMagniSoulId(int soulId) {
        return Arrays.stream(balrogMagniSoulIds).anyMatch(s -> s == soulId);
    }

    public static boolean isVonLeonSoulId(int soulId) {
        return Arrays.stream(vonLeonSoulIds).anyMatch(s -> s == soulId);
    }

    public static boolean isVonLeonMagniSoulId(int soulId) {
        return Arrays.stream(vonLeonMagniSoulIds).anyMatch(s -> s == soulId);
    }

    public static boolean isSpiritOfRockSoulId(int soulId) {
        return Arrays.stream(spiritOfRockSoulIds).anyMatch(s -> s == soulId);
    }

    public static boolean isSpiritOfRockMagniSoulId(int soulId) {
        return Arrays.stream(spiritOfRockMagniSoulIds).anyMatch(s -> s == soulId);
    }

    public static boolean isPrisonGuardAniSoulId(int soulId) {
        return Arrays.stream(prisonGuardAniSoulIds).anyMatch(s -> s == soulId);
    }

    public static boolean isPrisonGuardAniMagniSoulId(int soulId) {
        return Arrays.stream(prisonGuardAniMagniSoulIds).anyMatch(s -> s == soulId);
    }


    public static boolean isDragonRiderSoulId(int soulId) {
        return Arrays.stream(dragonRiderSoulIds).anyMatch(s -> s == soulId);
    }

    public static boolean isDragonRiderMagniSoulId(int soulId) {
        return Arrays.stream(dragonRiderMagniSoulIds).anyMatch(s -> s == soulId);
    }

    public static boolean isRexSoulId(int soulId) {
        return Arrays.stream(rexSoulIds).anyMatch(s -> s == soulId);
    }

    public static boolean isRexMagniSoulId(int soulId) {
        return Arrays.stream(rexMagniSoulIds).anyMatch(s -> s == soulId);
    }

    public static boolean isMuGongSoulId(int soulId) {
        return Arrays.stream(muGongSoulIds).anyMatch(s -> s == soulId);
    }

    public static boolean isMuGongMagniSoulId(int soulId) {
        return Arrays.stream(muGongMagniSoulIds).anyMatch(s -> s == soulId);
    }

    public static boolean isCygnusSoulId(int soulId) {
        return Arrays.stream(cygnusSoulIds).anyMatch(s -> s == soulId);
    }

    public static boolean isCygnusMagniSoulId(int soulId) {
        return Arrays.stream(cygnusMagniSoulIds).anyMatch(s -> s == soulId);
    }

    public static boolean isXerxesSoulId(int soulId) {
        return Arrays.stream(xerxesSoulIds).anyMatch(s -> s == soulId);
    }

    public static boolean isXerxesMagniSoulId(int soulId) {
        return Arrays.stream(xerxesMagniSoulIds).anyMatch(s -> s == soulId);
    }

    public static boolean isZakumSoulId(int soulId) {
        return Arrays.stream(zakumSoulIds).anyMatch(s -> s == soulId);
    }

    public static boolean isZakumMagniSoulId(int soulId) {
        return Arrays.stream(zakumMagniSoulIds).anyMatch(s -> s == soulId);
    }

    public static boolean isEpheniaSoulId(int soulId) {
        return Arrays.stream(epheniaSoulIds).anyMatch(s -> s == soulId);
    }

    public static boolean isEpheniaMagniSoulId(int soulId) {
        return Arrays.stream(epheniaMagniSoulIds).anyMatch(s -> s == soulId);
    }

    public static boolean isArkariumSoulId(int soulId) {
        return Arrays.stream(arkariumSoulIds).anyMatch(s -> s == soulId);
    }

    public static boolean isArkariumMagniSoulId(int soulId) {
        return Arrays.stream(arkariumMagniSoulIds).anyMatch(s -> s == soulId);
    }

    public static boolean isPianusSoulId(int soulId) {
        return Arrays.stream(pianusSoulIds).anyMatch(s -> s == soulId);
    }

    public static boolean isPianusMagniSoulId(int soulId) {
        return Arrays.stream(pianusMagniSoulIds).anyMatch(s -> s == soulId);
    }

    public static boolean isHillaSoulId(int soulId) {
        return Arrays.stream(hillaSoulIds).anyMatch(s -> s == soulId);
    }

    public static boolean isHillaMagniSoulId(int soulId) {
        return Arrays.stream(hillaMagniSoulIds).anyMatch(s -> s == soulId);
    }

    public static boolean isPinkBeanSoulId(int soulId) {
        return Arrays.stream(pinkbeanSoulIds).anyMatch(s -> s == soulId);
    }

    public static boolean isPinkBeanMagniSoulId(int soulId) {
        return Arrays.stream(pinkbeanMagniSoulIds).anyMatch(s -> s == soulId);
    }

    public static boolean isMagnusSoulId(int soulId) {
        return Arrays.stream(magnusSoulIds).anyMatch(s -> s == soulId);
    }

    public static boolean isMagnusMagniSoulId(int soulId) {
        return Arrays.stream(magnusMagniSoulIds).anyMatch(s -> s == soulId);
    }

    public static boolean isBlackSlimeSoulId(int soulId) {
        return Arrays.stream(blackSlimeSoulIds).anyMatch(s -> s == soulId);
    }

    public static boolean isBlackSlimeMagniSoulId(int soulId) {
        return Arrays.stream(blackSlimeMagniSoulIds).anyMatch(s -> s == soulId);
    }

    public static boolean isMurgothSoulId(int soulId) {
        return Arrays.stream(murgothSoulIds).anyMatch(s -> s == soulId);
    }

    public static boolean isMurgothMagniSoulId(int soulId) {
        return Arrays.stream(murgothMagniSoulIds).anyMatch(s -> s == soulId);
    }

    public static boolean isBlackKnightSoulId(int soulId) {
        return Arrays.stream(blackKnightSoulIds).anyMatch(s -> s == soulId);
    }

    public static boolean isBlackKnightMagniSoulId(int soulId) {
        return Arrays.stream(blackKnightMagniSoulIds).anyMatch(s -> s == soulId);
    }

    public static boolean isMadMageSoulId(int soulId) {
        return Arrays.stream(madMageSoulIds).anyMatch(s -> s == soulId);
    }

    public static boolean isMadMageMagniSoulId(int soulId) {
        return Arrays.stream(madMageMagniSoulIds).anyMatch(s -> s == soulId);
    }

    public static boolean isRampantCyborgSoulId(int soulId) {
        return Arrays.stream(rampantCyborgSoulIds).anyMatch(s -> s == soulId);
    }

    public static boolean isRampantCyborgMagniSoulId(int soulId) {
        return Arrays.stream(rampantCyborgMagniSoulIds).anyMatch(s -> s == soulId);
    }

    public static boolean isViciousHunterSoulId(int soulId) {
        return Arrays.stream(viciousHunterSoulIds).anyMatch(s -> s == soulId);
    }

    public static boolean isViciousHunterMagniSoulId(int soulId) {
        return Arrays.stream(viciousHunterMagniSoulIds).anyMatch(s -> s == soulId);
    }

    public static boolean isBadBrawlerSoulId(int soulId) {
        return Arrays.stream(badBrawlerSoulIds).anyMatch(s -> s == soulId);
    }

    public static boolean isBadBrawlerMagniSoulId(int soulId) {
        return Arrays.stream(badBrawlerMagniSoulIds).anyMatch(s -> s == soulId);
    }

    public static boolean isPierreSoulId(int soulId) {
        return Arrays.stream(pierreSoulIds).anyMatch(s -> s == soulId);
    }

    public static boolean isPierreMagniSoulId(int soulId) {
        return Arrays.stream(pierreMagniSoulIds).anyMatch(s -> s == soulId);
    }

    public static boolean isVonBonSoulId(int soulId) {
        return Arrays.stream(vonBonSoulIds).anyMatch(s -> s == soulId);
    }

    public static boolean isVonBonMagniSoulId(int soulId) {
        return Arrays.stream(vonBonMagniSoulIds).anyMatch(s -> s == soulId);
    }

    public static boolean isCrimsonQueenSoulId(int soulId) {
        return Arrays.stream(crimsonQueenSoulIds).anyMatch(s -> s == soulId);
    }

    public static boolean isCrimsonQueenMagniSoulId(int soulId) {
        return Arrays.stream(crimsonQueenMagniSoulIds).anyMatch(s -> s == soulId);
    }

    public static boolean isVellumSoulId(int soulId) {
        return Arrays.stream(vellumSoulIds).anyMatch(s -> s == soulId);
    }

    public static boolean isVellumMagniSoulId(int soulId) {
        return Arrays.stream(vellumMagniSoulIds).anyMatch(s -> s == soulId);
    }

    public static boolean isLotusSoulId(int soulId) {
        return Arrays.stream(lotusSoulIds).anyMatch(s -> s == soulId);
    }

    public static boolean isLotusMagniSoulId(int soulId) {
        return Arrays.stream(lotusMagniSoulIds).anyMatch(s -> s == soulId);
    }

    public static boolean isGoldDragonSoulId(int soulId) {
        return Arrays.stream(goldDragonSoulIds).anyMatch(s -> s == soulId);
    }

    public static boolean isGoldDragonMagniSoulId(int soulId) {
        return Arrays.stream(goldDragonMagniSoulIds).anyMatch(s -> s == soulId);
    }

    public static boolean isRedTigerSoulId(int soulId) {
        return Arrays.stream(redTigerSoulIds).anyMatch(s -> s == soulId);
    }

    public static boolean isRedTigerMagniSoulId(int soulId) {
        return Arrays.stream(redTigerMagniSoulIds).anyMatch(s -> s == soulId);
    }

    public static boolean isUrsusSoulId(int soulId) {
        return Arrays.stream(ursusSoulIds).anyMatch(s -> s == soulId);
    }

    public static boolean isUrsusMagniSoulId(int soulId) {
        return Arrays.stream(ursusMagniSoulIds).anyMatch(s -> s == soulId);
    }

    public static boolean isPinkMongSoulId(int soulId) {
        return Arrays.stream(pinkMongSoulIds).anyMatch(s -> s == soulId);
    }

    public static boolean isPinkMongMagniSoulId(int soulId) {
        return Arrays.stream(pinkMongMagniSoulIds).anyMatch(s -> s == soulId);
    }

    public static boolean isTutuSoulId(int soulId) {
        return Arrays.stream(tutuSoulIds).anyMatch(s -> s == soulId);
    }

    public static boolean isTutuMagniSoulId(int soulId) {
        return Arrays.stream(tutuMagniSoulIds).anyMatch(s -> s == soulId);
    }

    public static boolean isNeneSoulId(int soulId) {
        return Arrays.stream(neneSoulIds).anyMatch(s -> s == soulId);
    }

    public static boolean isNeneMagniSoulId(int soulId) {
        return Arrays.stream(neneMagniSoulIds).anyMatch(s -> s == soulId);
    }

    public static boolean isDamienSoulId(int soulId) {
        return Arrays.stream(damienSoulIds).anyMatch(s -> s == soulId);
    }

    public static boolean isDamienMagniSoulId(int soulId) {
        return Arrays.stream(damienMagniSoulIds).anyMatch(s -> s == soulId);
    }

    public static boolean isLucidSoulId(int soulId) {
        return Arrays.stream(lucidSoulIds).anyMatch(s -> s == soulId);
    }

    public static boolean isLucidMagniSoulId(int soulId) {
        return Arrays.stream(lucidMagniSoulIds).anyMatch(s -> s == soulId);
    }

    public static boolean isEluniteElementalSoulId(int soulId) {
        return Arrays.stream(eluniteElementalSoulIds).anyMatch(s -> s == soulId);
    }

    public static boolean isEluniteElementalMagniSoulId(int soulId) {
        return Arrays.stream(eluniteElementalMagniSoulIds).anyMatch(s -> s == soulId);
    }

    public static boolean isPapulatusSoulId(int soulId) {
        return Arrays.stream(papulatusSoulIds).anyMatch(s -> s == soulId);
    }

    public static boolean isPapulatusMagniSoulId(int soulId) {
        return Arrays.stream(papulatusMagniSoulIds).anyMatch(s -> s == soulId);
    }

    public static boolean isWillSoulId(int soulId) {
        return Arrays.stream(willSoulIds).anyMatch(s -> s == soulId);
    }

    public static boolean isWillMagniSoulId(int soulId) {
        return Arrays.stream(willMagniSoulIds).anyMatch(s -> s == soulId);
    }

    public static boolean isVerusHillaSoulId(int soulId) {
        return Arrays.stream(verusHillaSoulIds).anyMatch(s -> s == soulId);
    }

    public static boolean isVerusHillaMagniSoulId(int soulId) {
        return Arrays.stream(verusHillaMagniSoulIds).anyMatch(s -> s == soulId);
    }

    public static boolean isDarknellSoulId(int soulId) {
        return Arrays.stream(darknellSoulIds).anyMatch(s -> s == soulId);
    }

    public static boolean isDarknellMagniSoulId(int soulId) {
        return Arrays.stream(darknellMagniSoulIds).anyMatch(s -> s == soulId);
    }
    // endregion

    public static BossSoulType getBossSoulTypeBySoulId(int soulID) {

        // Balrog
        if (isBalrogSoulId(soulID) || isBalrogMagniSoulId(soulID)) {
            return BossSoulType.Balrog;
        }

        // Von Leon
        if (isVonLeonSoulId(soulID) || isVonLeonMagniSoulId(soulID)) {
            return BossSoulType.VonLeon;
        }

        // Spirit Of Rock
        if (isSpiritOfRockSoulId(soulID) || isSpiritOfRockMagniSoulId(soulID)) {
            return BossSoulType.SpiritOfRock;
        }

        // Prison Guard Ani
        if (isPrisonGuardAniSoulId(soulID) || isPrisonGuardAniMagniSoulId(soulID)) {
            return BossSoulType.PrisonGuardAni;
        }

        // Dragon Rider
        if (isDragonRiderSoulId(soulID) || isDragonRiderMagniSoulId(soulID)) {
            return BossSoulType.DragonRider;
        }

        // Rex
        if (isRexSoulId(soulID) || isRexMagniSoulId(soulID)) {
            return BossSoulType.Rex;
        }

        // MuGong
        if (isMuGongSoulId(soulID) || isMuGongMagniSoulId(soulID)) {
            return BossSoulType.MuGong;
        }

        // Cygnus
        if (isCygnusSoulId(soulID) || isCygnusMagniSoulId(soulID)) {
            return BossSoulType.Cygnus;
        }

        // Xerxes
        if (isXerxesSoulId(soulID) || isXerxesMagniSoulId(soulID)) {
            return BossSoulType.Xerxes;
        }

        // Zakum
        if (isZakumSoulId(soulID) || isZakumMagniSoulId(soulID)) {
            return BossSoulType.Zakum;
        }

        // Ephenia
        if (isEpheniaSoulId(soulID) || isEpheniaMagniSoulId(soulID)) {
            return BossSoulType.Ephenia;
        }

        // Arkarium
        if (isArkariumSoulId(soulID) || isArkariumMagniSoulId(soulID)) {
            return BossSoulType.Arkarium;
        }

        // Pianus
        if (isPianusSoulId(soulID) || isPianusMagniSoulId(soulID)) {
            return BossSoulType.Pianus;
        }

        // Hilla
        if (isHillaSoulId(soulID) || isHillaMagniSoulId(soulID)) {
            return BossSoulType.Hilla;
        }

        // Pink Bean
        if (isPinkBeanSoulId(soulID) || isPinkBeanMagniSoulId(soulID)) {
            return BossSoulType.PinkBean;
        }

        // Magnus
        if (isMagnusSoulId(soulID) || isMagnusMagniSoulId(soulID)) {
            return BossSoulType.Magnus;
        }

        // Black Slime
        if (isBlackSlimeSoulId(soulID) || isBlackSlimeMagniSoulId(soulID)) {
            return BossSoulType.CaptainDarkgoo;
        }

        // Murgoth
        if (isMurgothSoulId(soulID) || isMurgothMagniSoulId(soulID)) {
            return null;
        }

        // Black Knight
        if (isBlackKnightSoulId(soulID) || isBlackKnightMagniSoulId(soulID)) {
            return BossSoulType.BlackKnight;
        }

        // Mad Mage
        if (isMadMageSoulId(soulID) || isMadMageMagniSoulId(soulID)) {
            return BossSoulType.MadMage;
        }

        // Rampant Cyborg
        if (isRampantCyborgSoulId(soulID) || isRampantCyborgMagniSoulId(soulID)) {
            return BossSoulType.RampantCyborg;
        }

        // Vicious Hunter
        if (isViciousHunterSoulId(soulID) || isViciousHunterMagniSoulId(soulID)) {
            return BossSoulType.ViciousHunter;
        }

        // Bad Brawler
        if (isBadBrawlerSoulId(soulID) || isBadBrawlerMagniSoulId(soulID)) {
            return BossSoulType.BadBrawler;
        }

        // Pierre
        if (isPierreSoulId(soulID) || isPierreMagniSoulId(soulID)) {
            return BossSoulType.Pierre;
        }

        // Von Bon
        if (isVonBonSoulId(soulID) || isVonBonMagniSoulId(soulID)) {
            return BossSoulType.VonBon;
        }

        // Crimson Queen
        if (isCrimsonQueenSoulId(soulID) || isCrimsonQueenMagniSoulId(soulID)) {
            return BossSoulType.CrimsonQueen;
        }

        // Vellum
        if (isVellumSoulId(soulID) || isVellumMagniSoulId(soulID)) {
            return BossSoulType.Vellum;
        }

        // Lotus
        if (isLotusSoulId(soulID) || isLotusMagniSoulId(soulID)) {
            return BossSoulType.Lotus;
        }

        // Gold Dragon
        if (isGoldDragonSoulId(soulID) || isGoldDragonMagniSoulId(soulID)) {
            return null;
        }

        // Red Tiger
        if (isRedTigerSoulId(soulID) || isRedTigerMagniSoulId(soulID)) {
            return null;
        }

        // Ursus
        if (isUrsusSoulId(soulID) || isUrsusMagniSoulId(soulID)) {
            return BossSoulType.Ursus;
        }

        // Pink Mong
        if (isPinkMongSoulId(soulID) || isPinkMongMagniSoulId(soulID)) {
            return null;
        }

        // Tutu
        if (isTutuSoulId(soulID) || isTutuMagniSoulId(soulID)) {
            return null;
        }

        // Nene
        if (isNeneSoulId(soulID) || isNeneMagniSoulId(soulID)) {
            return null;
        }

        // Damien
        if (isDamienSoulId(soulID) || isDamienMagniSoulId(soulID)) {
            return BossSoulType.Damien;
        }

        // Lucid
        if (isLucidSoulId(soulID) || isLucidMagniSoulId(soulID)) {
            return BossSoulType.Lucid;
        }

        // Elunite Elemental
        if (isEluniteElementalSoulId(soulID) || isEluniteElementalMagniSoulId(soulID)) {
            return null;
        }

        // Papulatus
        if (isPapulatusSoulId(soulID) || isPapulatusMagniSoulId(soulID)) {
            return BossSoulType.Papulatus;
        }

        // Will
        if (isWillSoulId(soulID) || isWillMagniSoulId(soulID)) {
            return BossSoulType.Will;
        }

        // Verus Hilla
        if (isVerusHillaSoulId(soulID) || isVerusHillaMagniSoulId(soulID)) {
            return BossSoulType.VerusHilla;
        }

        // Darknell
        if (isDarknellSoulId(soulID) || isDarknellMagniSoulId(soulID)) {
            return BossSoulType.Darknell;
        }

        return null;
    }

    public static int getSoulSkillFromSoulID(int soulID) {

        // Balrog
        if (isBalrogSoulId(soulID)) {
            return SoulSkillHandler.HELLFIRE_BURP;
        }
        if (isBalrogMagniSoulId(soulID)) {
            return SoulSkillHandler.HELLFIRE_SNEEZE;
        }

        // Von Leon
        if (isVonLeonSoulId(soulID)) {
            return SoulSkillHandler.KITTY_CLAWS;
        }
        if (isVonLeonMagniSoulId(soulID)) {
            return SoulSkillHandler.CAT_SMACK;
        }

        // Spirit Of Rock
        if (isSpiritOfRockSoulId(soulID)) {
            return SoulSkillHandler.ROCK_AND_ROLL_BABY;
        }
        if (isSpiritOfRockMagniSoulId(soulID)) {
            return 0; // No Magnificent Skill
        }

        // Prison Guard Ani
        if (isPrisonGuardAniSoulId(soulID)) {
            return SoulSkillHandler.THE_ONE_AND_ONLY;
        }
        if (isPrisonGuardAniMagniSoulId(soulID)) {
            return 0; // No Magnificent Skill
        }

        // Dragon Rider
        if (isDragonRiderSoulId(soulID)) {
            return SoulSkillHandler.WIND_PALM;
        }
        if (isDragonRiderMagniSoulId(soulID)) {
            return 0; // No Magnificent Skill
        }

        // Rex
        if (isRexSoulId(soulID)) {
            return SoulSkillHandler.GET_OUTTA_THE_WAY;
        }
        if (isRexMagniSoulId(soulID)) {
            return 0; // No Magnificent Skill
        }

        // MuGong
        if (isMuGongSoulId(soulID)) {
            return SoulSkillHandler.MEMORIES;
        }
        if (isMuGongMagniSoulId(soulID)) {
            return 0; // No Magnificent Skill
        }

        // Cygnus
        if (isCygnusSoulId(soulID)) {
            return SoulSkillHandler.EMPRESS_OF_FLAMES;
        }
        if (isCygnusMagniSoulId(soulID)) {
            return SoulSkillHandler.EMPRESS_OF_FURY;
        }

        // Xerxes
        if (isXerxesSoulId(soulID)) {
            return SoulSkillHandler.BAAA_BAAA_ATTACK;
        }
        if (isXerxesMagniSoulId(soulID)) {
            return 0; // No Magnificent Skill
        }

        // Zakum
        if (isZakumSoulId(soulID)) {
            return SoulSkillHandler.HOT_TOTEM_DROP;
        }
        if (isZakumMagniSoulId(soulID)) {
            return SoulSkillHandler.BURNING_TOTEM_DROP;
        }

        // Ephenia
        if (isEpheniaSoulId(soulID)) {
            return SoulSkillHandler.A_QUEENLY_FRAGRANCE;
        }
        if (isEpheniaMagniSoulId(soulID)) {
            return 0; // No Magnificent Skill
        }

        // Arkarium
        if (isArkariumSoulId(soulID)) {
            return SoulSkillHandler.SNAKE_EYE;
        }
        if (isArkariumMagniSoulId(soulID)) {
            return SoulSkillHandler.SNAKE_BITE;
        }

        // Pianus
        if (isPianusSoulId(soulID)) {
            return SoulSkillHandler.TERRIBLE_PIANUS;
        }
        if (isPianusMagniSoulId(soulID)) {
            return 0; // No Magnificent Skill
        }

        // Hilla
        if (isHillaSoulId(soulID)) {
            return SoulSkillHandler.HILLA_FURY;
        }
        if (isHillaMagniSoulId(soulID)) {
            return SoulSkillHandler.HILLA_THUNDER;
        }

        // Pink Bean
        if (isPinkBeanSoulId(soulID)) {
            return SoulSkillHandler.MORE_THAN_A_CUTIE;
        }
        if (isPinkBeanMagniSoulId(soulID)) {
            return SoulSkillHandler.CUTE_OVERLOAD;
        }

        // Magnus
        if (isMagnusSoulId(soulID)) {
            return SoulSkillHandler.ADVANCE_OF_MAGNUS;
        }
        if (isMagnusMagniSoulId(soulID)) {
            return SoulSkillHandler.WRATH_OF_MAGNUS;
        }

        // Black Slime
        if (isBlackSlimeSoulId(soulID)) {
            return SoulSkillHandler.PINK_POISON_FOG;
        }
        if (isBlackSlimeMagniSoulId(soulID)) {
            return 0; // No Magnificent Skill
        }

        // Murgoth
        if (isMurgothSoulId(soulID)) {
            return SoulSkillHandler.MURGOTH_STRANGE_COMPANY;
        }
        if (isMurgothMagniSoulId(soulID)) {
            return SoulSkillHandler.MURGOTH_SUSPICIOUS_COMPANY;
        }

        // Black Knight
        if (isBlackKnightSoulId(soulID)) {
            return SoulSkillHandler.BLACK_KNIGHT;
        }
        if (isBlackKnightMagniSoulId(soulID)) {
            return SoulSkillHandler.PITCH_BLACK_KNIGHT;
        }

        // Mad Mage
        if (isMadMageSoulId(soulID)) {
            return SoulSkillHandler.MAD_MAGE;
        }
        if (isMadMageMagniSoulId(soulID)) {
            return SoulSkillHandler.COMPLETELY_MAD_MAGE;
        }

        // Rampant Cyborg
        if (isRampantCyborgSoulId(soulID)) {
            return SoulSkillHandler.RAMPANT_CYBORG;
        }
        if (isRampantCyborgMagniSoulId(soulID)) {
            return SoulSkillHandler.FULLY_RAMPANT_CYBORG;
        }

        // Vicious Hunter
        if (isViciousHunterSoulId(soulID)) {
            return SoulSkillHandler.VICIOUS_HUNTER;
        }
        if (isViciousHunterMagniSoulId(soulID)) {
            return SoulSkillHandler.UTTERLY_VICIOUS_HUNTER;
        }

        // Bad Brawler
        if (isBadBrawlerSoulId(soulID)) {
            return SoulSkillHandler.BAD_BRAWLER;
        }
        if (isBadBrawlerMagniSoulId(soulID)) {
            return SoulSkillHandler.REAL_BAD_BRAWLER;
        }

        // Pierre
        if (isPierreSoulId(soulID)) {
            return SoulSkillHandler.PIERRES_HAT_TRICK;
        }
        if (isPierreMagniSoulId(soulID)) {
            return SoulSkillHandler.PIERRE_SURPRISE;
        }

        // Von Bon
        if (isVonBonSoulId(soulID)) {
            return SoulSkillHandler.CHICKEN_LICKIN;
        }
        if (isVonBonMagniSoulId(soulID)) {
            return SoulSkillHandler.CHICKEN_RISING;
        }

        // Crimson Queen
        if (isCrimsonQueenSoulId(soulID)) {
            return SoulSkillHandler.FICKLE_QUEEN;
        }
        if (isCrimsonQueenMagniSoulId(soulID)) {
            return SoulSkillHandler.LONG_LIVE_THE_QUEEN;
        }

        // Vellum
        if (isVellumSoulId(soulID)) {
            return SoulSkillHandler.VELLUM_RAGE;
        }
        if (isVellumMagniSoulId(soulID)) {
            return SoulSkillHandler.JR_VELLUM;
        }

        // Lotus
        if (isLotusSoulId(soulID)) {
            return SoulSkillHandler.LOTUS_STRIKE;
        }
        if (isLotusMagniSoulId(soulID)) {
            return SoulSkillHandler.LOTUS_ENRAGED;
        }

        // Gold Dragon
        if (isGoldDragonSoulId(soulID)) {
            return SoulSkillHandler.BEAST_OF_FURY;
        }
        if (isGoldDragonMagniSoulId(soulID)) {
            return 0; // No Magnificent Skill
        }

        // Red Tiger
        if (isRedTigerSoulId(soulID)) {
            return SoulSkillHandler.TIGERS_TEETH;
        }
        if (isRedTigerMagniSoulId(soulID)) {
            return 0; // No Magnificent Skill
        }

        // Ursus
        if (isUrsusSoulId(soulID)) {
            return SoulSkillHandler.MIGHTY_ROAR;
        }
        if (isUrsusMagniSoulId(soulID)) {
            return SoulSkillHandler.FEROCIOUS_ROAR;
        }

        // Pink Mong
        if (isPinkMongSoulId(soulID)) {
            return SoulSkillHandler.HAPPY_NEW_WEEK;
        }
        if (isPinkMongMagniSoulId(soulID)) {
            return 0; // No Magnificent Skill
        }

        // Tutu
        if (isTutuSoulId(soulID)) {
            return SoulSkillHandler.TUTUS_SOUL;
        }
        if (isTutuMagniSoulId(soulID)) {
            return 0; // No Magnificent Skill
        }

        // Nene
        if (isNeneSoulId(soulID)) {
            return SoulSkillHandler.NENES_SOUL;
        }
        if (isNeneMagniSoulId(soulID)) {
            return 0; // No Magnificent Skill
        }

        // Damien
        if (isDamienSoulId(soulID)) {
            return SoulSkillHandler.DARK_HUNT;
        }
        if (isDamienMagniSoulId(soulID)) {
            return SoulSkillHandler.SWORD_OF_DESTRUCTION;
        }

        // Lucid
        if (isLucidSoulId(soulID)) {
            return SoulSkillHandler.NIGHTMARE_INVITE;
        }
        if (isLucidMagniSoulId(soulID)) {
            return SoulSkillHandler.MASTER_OF_NIGHTMARES;
        }

        // Elunite Elemental
        if (isEluniteElementalSoulId(soulID)) {
            return SoulSkillHandler.WEIGHED_DOWN;
        }
        if (isEluniteElementalMagniSoulId(soulID)) {
            return SoulSkillHandler.ELUNITE_VORTEX;
        }

        // Papulatus
        if (isPapulatusSoulId(soulID)) {
            return SoulSkillHandler.RULER_OF_SPACE;
        }
        if (isPapulatusMagniSoulId(soulID)) {
            return SoulSkillHandler.TIME_MASTER;
        }

        // Will
        if (isWillSoulId(soulID)) {
            return SoulSkillHandler.CRUSHING_LUNGE;
        }
        if (isWillMagniSoulId(soulID)) {
            return SoulSkillHandler.KING_OF_SPIDERS;
        }

        // Verus Hilla
        if (isVerusHillaSoulId(soulID)) {
            return SoulSkillHandler.SOUL_REND;
        }
        if (isVerusHillaMagniSoulId(soulID)) {
            return SoulSkillHandler.RED_WITCH;
        }

        // Darknell
        if (isDarknellSoulId(soulID)) {
            return SoulSkillHandler.GROUND_SLASH;
        }
        if (isDarknellMagniSoulId(soulID)) {
            return SoulSkillHandler.GROUND_SMASH;
        }

        return 0;
    }
}
