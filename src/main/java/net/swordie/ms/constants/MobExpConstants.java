package net.swordie.ms.constants;

import java.util.List;

public class MobExpConstants {
    public record MobExpRate(
        int minLevel,
        int rate
    ) {}

    public static final int MOB_EXP_BASE_RATE = 4;

    public static final List<MobExpRate> MOB_EXP_RATE_PER_MIN_LEVEL = List.of(
        // make sure to sort it starting from lowest minLevel to highest
        new MobExpRate(1, 1),
        new MobExpRate(10, MOB_EXP_BASE_RATE)
    );

    /**
     * Searches for the {@link MobExpRate} with the highest minLevel for the given character level
     *
     * @param level the level of the character
     * @return exp rate found for the given level, with a minimum value of 1
     */
    public static int getRateForCharacterLevel(int level) {
        int rate = 1;
        for (MobExpRate mobExpRate : MOB_EXP_RATE_PER_MIN_LEVEL) {
            if (mobExpRate.minLevel() <= level) {
                rate = mobExpRate.rate();
            } else {
                break; // because list is sorted from lowest to highest
            }
        }

        return Math.max(rate, 1);

    }
}
