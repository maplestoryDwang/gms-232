package net.swordie.ms.connection.packet;

import net.swordie.ms.connection.OutPacket;
import net.swordie.ms.handlers.header.OutHeader;

/**
 * Created on 30/06/2021.
 *
 * @author Asura
 */
public class MonsterPyramid {

    public static OutPacket monsterPyramidUpdate() {
        OutPacket outPacket = new OutPacket(OutHeader.MONSTER_PYRAMID_UPDATE);

        var type = 0;
        while (type != 0) {
            outPacket.encodeByte(type);

            switch (type) {
                case 1: // Game Info
                    outPacket.encodeInt(0);
                    outPacket.encodeInt(0);
                    outPacket.encodeInt(0);
                    outPacket.encodeInt(0);
                    break;

                case 2: // Player Info
                    outPacket.encodeInt(0); // player position in UI
                    outPacket.encodeByte(0);
                    outPacket.encodeByte(0);
                    outPacket.encodeByte(0);
                    outPacket.encodeByte(0);
                    outPacket.encodeInt(0); // player position in UI
                    outPacket.encodeInt(0); // player chrId
                    outPacket.encodeInt(0);
                    outPacket.encodeInt(0);

                    outPacket.encodeInt(0);
                    outPacket.encodeInt(0);
                    outPacket.encodeInt(0);
                    outPacket.encodeInt(0);
                    outPacket.encodeInt(0);
                    outPacket.encodeInt(0);
                    break;

                case 3: // Pyramid Info
                    outPacket.encodeInt(0); // pyramid row
                    outPacket.encodeInt(0); // pyramid column

                    outPacket.encodeInt(0); // monster pyramid block (-1 = empty)
                    outPacket.encodeInt(0);
                    outPacket.encodeInt(0);
                    break;

                case 4: // Game Info
                    outPacket.encodeInt(0);
                    outPacket.encodeInt(0);
                    outPacket.encodeInt(0);
                    break;

                case 0: // end Mark
                    return outPacket;
            }
        }

        return outPacket;
    }

}
