package net.swordie.ms.connection.packet;

import net.swordie.ms.connection.OutPacket;
import net.swordie.ms.handlers.header.OutHeader;

/**
 * Created on 08/02/2022.
 *
 * @author Asura
 */
public class GuardCastlePacket {
    public static OutPacket guardCastleSetLife(int life) {
        OutPacket outPacket = new OutPacket(OutHeader.GUARD_CASTLE_SET_LIFE);

        outPacket.encodeInt(life);

        return outPacket;
    }

    public static OutPacket guardCastleSetWave(int wave) {
        OutPacket outPacket = new OutPacket(OutHeader.GUARD_CASTLE_SET_WAVE);

        outPacket.encodeInt(wave);

        return outPacket;
    }
}
