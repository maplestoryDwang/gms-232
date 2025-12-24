package net.swordie.ms.handlers.user;

import net.swordie.ms.client.character.Char;
import net.swordie.ms.client.surprisemission.SurpriseMissionModule;
import net.swordie.ms.connection.InPacket;
import net.swordie.ms.handlers.Handler;
import net.swordie.ms.handlers.header.InHeader;

/**
 * Created on 31/01/2022.
 *
 * @author Asura
 */
public class SurpriseMissionHandler {

    @Handler(op = InHeader.SURPRISE_MISSION_CLAIM_REWARD_REQUEST)
    public static void handleSurpriseMissionClaimRewardRequest(Char chr, InPacket inPacket) {
        // empty

        var surpriseMission = chr.getSurpriseMission();
        if (surpriseMission != null) {
            SurpriseMissionModule.claimSurpriseMissionReward(chr, surpriseMission);
        }
    }
}
