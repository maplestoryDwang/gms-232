package net.swordie.ms.handlers.social.minigame;

import net.swordie.ms.client.character.Char;
import net.swordie.ms.connection.InPacket;
import net.swordie.ms.connection.packet.UserLocal;
import net.swordie.ms.handlers.Handler;
import net.swordie.ms.handlers.header.InHeader;

/**
 * Created on 30/06/2021.
 *
 * @author Asura
 */
public class CastleColumnHandler {

    @Handler(ops = {InHeader.CASTLE_COLUMN_PLACE, InHeader.CASTLE_COLUMN_PLACE_2})
    public static void handleCastleColumnPlace(Char chr, InPacket inPacket, InHeader inHeader) {
        // Sanity checks surely done with all the other info. But I can't make sense of them atm.
        var type = inPacket.decodeInt();
        var idk2 = inPacket.decodeInt(); // diffX ?
        var idk3 = inPacket.decodeInt(); // diffY ?

        // End Castle Column
        if (type == 3 && inHeader.equals(InHeader.CASTLE_COLUMN_PLACE_2)) {
            // Reward
            var instance = chr.getInstance();
            var floor = 0;
            if (instance != null) {
                floor = instance.getProperty("F") == null ? 0 : (int) instance.getProperty("F");
                // TODO -> Give reward based on floor reached
            }

            // Instance Out
            handleCastleColumnRetreat(chr, inPacket);
            return;
        }

        // Placed a Floor
        if (type == 0 && inHeader.equals(InHeader.CASTLE_COLUMN_PLACE)) {
            var instance = chr.getInstance();
            if (instance != null) {
                var floor = instance.getProperty("F") == null ? 0 : (int) instance.getProperty("F");
                floor++;
                instance.addProperty("F", floor);
            }
        }
    }

    @Handler(op = InHeader.CASTLE_COLUMN_RETREAT)
    public static void handleCastleColumnRetreat(Char chr, InPacket inPacket) {
        chr.getScriptManager().warpInstanceOut(993190700, 0); // Neo Castle: Castle Column Exit
        chr.write(UserLocal.setInGameDirectionMode(false, false, false));
    }
}
