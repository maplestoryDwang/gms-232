package net.swordie.ms.client.character.commerce.voyage;

import net.swordie.ms.client.character.commerce.vessel.Vessel;
import net.swordie.ms.client.character.commerce.vessel.VesselType;
import net.swordie.ms.util.Position;
import net.swordie.ms.util.Util;

import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Created on 19/05/2021.
 *
 * @author Asura
 */
public class VoyageConstants {

    private static final Map<Integer, Integer> rewardTable = new HashMap<>() {{
        put(VoyageRouteType.Dolce.getVal(), 20); // Dolce
        put(VoyageRouteType.Luna.getVal(), 30); // Luna
        put(VoyageRouteType.Rosa.getVal(), 45); // Rosa
        put(VoyageRouteType.HerbTown.getVal(), 80); // Herb Town
        put(VoyageRouteType.Rien.getVal(), 150); // Rien
        put(VoyageRouteType.LithHarbor.getVal(), 250); // Lith Harbor
    }};

    private static final Map<Integer, Integer> expTable = new HashMap<>() {{
        put(VoyageRouteType.Dolce.getVal(), 150); // Dolce
        put(VoyageRouteType.Luna.getVal(), 300); // Luna
        put(VoyageRouteType.Rosa.getVal(), 450); // Rosa
        put(VoyageRouteType.HerbTown.getVal(), 650); // Herb Town
        put(VoyageRouteType.Rien.getVal(), 850); // Rien
        put(VoyageRouteType.LithHarbor.getVal(), 1250); // Lith Harbor
    }};

    // Blow Weather
    public static final int TEPES_WEATHER_ITEMID = 5120121;

    public static final List<String> START_VOYAGE_MESSAGES = Arrays.asList(
            "Today is a good day for a commerce! The wind will rustle my hair so prettily.",
            "I've been aching to set sail and show off my new pants.",
            "Sometimes it may feel like we're caught in a hurricane of chaos, but I've always got your back, my friend."
    );

    public static final List<String> START_HORDE_MESSAGES = Arrays.asList(
            "I will trust you to take care of this, while I treat myself to a mud mask and manicure.",
            "Something is amiss! More enemies approach!",
            "Enemies have boarded and are attacking the ship!"
    );

    public static final List<String> DEFEAT_HORDE_MESSAGES = Arrays.asList(
            "It's nice to have someone on board who knows how to use a weapon. My cutlass is purely decorative. And I leave at home, over my mantle.",
            "We just might complete the commerce ahead of schedule, thanks to you, my friend.",
            "Finally! That's the last of them!",
            "Obstacles, slain! We may continue our commerce! If only I could get rid of the stain in my vest with the same ease."
    );

    public static String getRandomStartVoyageMessage() {
        return Util.getRandomFromCollection(START_VOYAGE_MESSAGES);
    }

    public static String getRandomStartHordeMessage() {
        return Util.getRandomFromCollection(START_HORDE_MESSAGES);
    }

    public static String getRandomDefeatHordeMessage() {
        return Util.getRandomFromCollection(DEFEAT_HORDE_MESSAGES);
    }

    // Voyage
    public static final int MOBS_SPAWNED_PER_HORDE = 30;
    public static final int TIME_BETWEEN_HORDES = 7000; // ms


    // Mobs
    public static final int CAPTAIN_BLOOD_PIRATE = 9390823;
    public static final int SIREN = 9390824;

    // Blockade
    public static final int OCEAN_REEF_RUNNER = 9390825;
    public static final int CORAL_REEF_RUNNER = 9390826;

    // Boss: Grosso Polpo
    public static final int GROSSO_PROGRESS = 45; // Only spawn Grosso after 45% of progress in Voyage
    public static final int GROSSO_POLPO = 9390857;
    public static final int GROSSO_POLPO_ARMS = 9390858;

    // Boss: Livyatan
    public static final int LIVYATAN_PROGESS = 90; // Only spawn Livyatan after 90% of progress in Voyage
    public static final int LIVYATAN = 9390859;

    public static final List<Position> SPAWN_POSITIONS = Arrays.asList(
            new Position(421, 100),
            new Position(-200, 235)
    );

    public static final Position BLOCKADE_POSITION = new Position(635, 365);

    public static final Position GROSSO_POLPO_BOSS_POSITION = new Position(285, 365);
    public static final Position GROSSO_POLPO_ARMS_POSITION = new Position(48, 395);

    public static Position getRandomSpawnPosition() {
        return Util.getRandomFromCollection(SPAWN_POSITIONS);
    }

    public static long getMobHp(int voyageId, int templateId) {
        var isLivyatan = templateId == LIVYATAN;
        var isGrosso = templateId == GROSSO_POLPO;
        var isBlockade = templateId == OCEAN_REEF_RUNNER || templateId == CORAL_REEF_RUNNER;
        var baseHP = 1_000_000_000L; // 1 Bil
        var multiplier = 1D;

        switch (VoyageRouteType.getByVal(voyageId)) {
            case Dolce:
                multiplier = 1D;
                break;
            case Luna:
                multiplier = 8D;
                break;
            case Rosa:
                multiplier = 20D;
                break;
            case HerbTown:
                multiplier = 60D;
                break;
            case Rien:
                multiplier = 130D;
                break;
            case LithHarbor:
                multiplier = 200D;
                break;
        }

        if (isBlockade) {
            multiplier *= 20;
        }

        if (isGrosso) {
            multiplier *= 80;
        }

        if (isLivyatan) {
            multiplier *= 160;
        }

        return (long) (baseHP * multiplier);
    }

    public static int getDenaroReward(int voyageId, Vessel vessel) {
        var reward = rewardTable.getOrDefault(voyageId, 0);

        var multiplier = vessel.getVesselType().equals(VesselType.Dreadnought) ? 1.2D
                : vessel.getVesselType().equals(VesselType.SailBoat) ? 1.1D
                : 1D;

        return (int) (reward * multiplier);
    }

    public static int getExpReward(int voyageId) {
        return expTable.getOrDefault(voyageId, 0);
    }
}
