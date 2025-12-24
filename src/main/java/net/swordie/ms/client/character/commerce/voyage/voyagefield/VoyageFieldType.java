package net.swordie.ms.client.character.commerce.voyage.voyagefield;

import java.util.Arrays;

/**
 * Created on 20/05/2021.
 *
 * @author Asura
 */
public enum VoyageFieldType {
    VoyageStarted(4),
    VoyageCompleted(5),
    MobsEliminated(6),
    HordeTimer(7), // Stops sailing
    ShortenedVoyageDuration(8), // Starts sailing
    VoyageDuration(9),
    ;

    private int val;

    public int getVal() {
        return val;
    }

    VoyageFieldType(int val) {
        this.val = val;
    }

    public static VoyageFieldType getByVal(int val) {
        return Arrays.stream(values()).filter(vfit -> vfit.getVal() == val).findFirst().orElse(null);
    }
}
