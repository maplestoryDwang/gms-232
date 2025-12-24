package net.swordie.ms.connection.packet;

import net.swordie.ms.connection.OutPacket;
import net.swordie.ms.handlers.header.OutHeader;

/**
 * Created on 02/02/2022.
 *
 * @author Asura
 */
public class BountyHuntPacket {
    public static OutPacket setCurrentWave(int wave) {
        var outPacket = new OutPacket(OutHeader.BOUNTY_HUNT_SET_CURRENT_WAVE);

        outPacket.encodeInt(wave);

        return outPacket;
    }
}
