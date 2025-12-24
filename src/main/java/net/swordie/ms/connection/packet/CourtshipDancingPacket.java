package net.swordie.ms.connection.packet;

import net.swordie.ms.client.quicktimeevent.QuickTimeEvent;
import net.swordie.ms.connection.OutPacket;
import net.swordie.ms.handlers.header.OutHeader;

import java.util.List;

/**
 * Created on 02/02/2022.
 *
 * @author Asura
 */
public class CourtshipDancingPacket {
    public static OutPacket courtshipDancingStage(int stage) {
        var outPacket = new OutPacket(OutHeader.COURTSHIP_DANCING_STAGE);

        outPacket.encodeInt(stage);

        return outPacket;
    }

    public static OutPacket courtshipDancingQuickTimeEvent(List<QuickTimeEvent> qteList) {
        var outPacket = new OutPacket(OutHeader.COURTSHIP_DANCING_QUICK_TIME_EVENT);

        outPacket.encodeInt(qteList.size());
        for (var qte : qteList) {
            outPacket.encodeInt(qte.getArrowInputs().size());
            for (var arrowInput : qte.getArrowInputs()) {
                outPacket.encodeInt(arrowInput.ordinal());
            }
        }

        return outPacket;
    }
}
