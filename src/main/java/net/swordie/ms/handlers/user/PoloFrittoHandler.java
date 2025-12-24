package net.swordie.ms.handlers.user;

import net.swordie.ms.client.character.Char;
import net.swordie.ms.connection.InPacket;
import net.swordie.ms.events.Events;
import net.swordie.ms.handlers.Handler;
import net.swordie.ms.handlers.header.InHeader;

/**
 * Created on 02/02/2022.
 *
 * @author Asura
 */
public class PoloFrittoHandler {

    @Handler(op = InHeader.POLLO_FRITTO_COURTSHIP_DANCE_RESULT)
    public static void handlePolloFrittoCourtshipDanceResult(Char chr, InPacket inPacket) {
        boolean success = inPacket.decodeByte() != 0;

        if (success) {
            Events.onQuickTimeEventSuccess(chr);
        }
    }
}
