package net.swordie.ms.constants;

/**
 * Created on 08/02/2022.
 *
 * @author Asura
 */
public class EliteChampionConstants {
    /**
     * https://strategywiki.org/wiki/MapleStory/Elite_Monsters_and_Elite_Bosses
     */

    public static final int ELITE_CHAMPION_ORB = 2023927;

    /**
     * Black Crescendo Slime
     */

    /**
     * Shadow Butterfly
     */

    /**
     * Dark Wolf
     */

    /**
     * Illusion Flower
     *
     * Illusion Flower is spawned at a random location
     * Killer bees are spawned on the edges of the field
     *
     * Killer bees will attack the Illusion Flower. slowly killing it
     *
     * If all killer bees are eliminated. Success!
     * If illusion flower is killed. Failed!
     */
    public static final int ILLUSION_FLOWER = 8220110;
    public static final int KILLER_BEE = 8220111;

    public static final int DAMAGE_PER_HIT = 10;
    public static final int ILLUSION_FLOWER_HP = 1_000;

    public static boolean isIllusionFlower(int mobTemplateId) {
        return mobTemplateId == ILLUSION_FLOWER;
    }

    /**
     * Dark Gargoyle
     */
}
