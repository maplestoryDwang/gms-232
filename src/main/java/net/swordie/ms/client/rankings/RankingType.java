package net.swordie.ms.client.rankings;

import java.util.Arrays;

/**
 * Created on 10/07/2021.
 *
 * @author Asura
 */
public enum RankingType {
    // Instance Rankings
    Oz(1),
    ;

    private int val;

    public int getVal() {
        return val;
    }

    RankingType(int val) {
        this.val = val;
    }

    public static RankingType getByVal(int val) {
        return Arrays.stream(values()).filter(rt -> rt.getVal() == val).findFirst().orElse(null);
    }
}
