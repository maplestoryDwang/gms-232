package net.swordie.ms.enums;

import java.util.Arrays;

/**
 * Created on 15/07/2020.
 *
 * @author Asura
 */
public enum ResolutionType {
    Resolution800(1),
    Resolution1024(2),
    Resolution1280(4),
    Resolution1366(3),
    Resolution1920(5),
    ;
    private int val;

    ResolutionType(int val) {
        this.val = val;
    }

    public int getVal() {
        return val;
    }

    public static ResolutionType getByVal(int val) {
        return Arrays.stream(values()).filter(res -> res.getVal() == val).findFirst().orElse(null);
    }


    @Override
    public String toString() {
        switch (this) {
            case Resolution800:
                return "800";
            case Resolution1024:
            case Resolution1280:
                return "1024";
            case Resolution1366:
            case Resolution1920:
                return "1366";
        }

        return null;
    }
}
