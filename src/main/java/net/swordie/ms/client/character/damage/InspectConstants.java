package net.swordie.ms.client.character.damage;

import net.swordie.ms.client.jobs.adventurer.archer.BowMaster;

public class InspectConstants {

    public static boolean isSkipRangeSkill(int skillId) {
        return skillId == BowMaster.ARROW_PLATTER;
    }

}
