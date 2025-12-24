package net.swordie.ms.connection.packet;

import net.swordie.ms.connection.OutPacket;
import net.swordie.ms.handlers.header.OutHeader;

/**
 * Created on 09/02/2022.
 *
 * @author Asura
 */
public class NewPyramidPool {
    public static OutPacket newPyramidSetWave(int wave) {
        var outPacket = new OutPacket(OutHeader.NEW_PYRAMID_SET_WAVE);

        outPacket.encodeInt(wave);

        return outPacket;
    }

    public static OutPacket newPyramidSetLife(int life) {
        var outPacket = new OutPacket(OutHeader.NEW_PYRAMID_SET_LIFE);

        outPacket.encodeInt(life);

        return outPacket;
    }

    public static OutPacket newPyramidSetPoint(int point) {
        var outPacket = new OutPacket(OutHeader.NEW_PYRAMID_SET_POINT);

        outPacket.encodeInt(point);

        return outPacket;
    }

    public static OutPacket newPyramidResult(boolean success, int wave, int life, int point, int exp) {
        var outPacket = new OutPacket(OutHeader.NEW_PYRAMID_RESULT);

        outPacket.encodeByte(success);
        outPacket.encodeInt(wave);
        outPacket.encodeInt(life);
        outPacket.encodeInt(point);
        outPacket.encodeInt(exp);
        outPacket.encodeInt(0); // ?

        return outPacket;
    }
}
