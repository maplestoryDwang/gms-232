package net.swordie.ms.connection.packet.field;

import net.swordie.ms.connection.OutPacket;
import net.swordie.ms.handlers.header.OutHeader;
import net.swordie.ms.life.mob.boss.papulatus.PapulatusFieldObject;

public class PapulatusFieldPacket {

    public static OutPacket papulatusFieldObjectChanged(PapulatusFieldObject pfo) {
        OutPacket outPacket = new OutPacket(OutHeader.PAPULATUS_FIELD_OBJECT_CHANGED);

        outPacket.encode(pfo);

        return outPacket;
    }

    public static OutPacket papulatusTeleport(int portalId) {
        OutPacket outPacket = new OutPacket(OutHeader.PAPULATUS_TELEPORT);

        outPacket.encodeInt(portalId);

        return outPacket;
    }

    public static OutPacket papulatusClock(int type) {
        OutPacket outPacket = new OutPacket(OutHeader.PAPULATUS_CLOCK);

        outPacket.encodeByte(type);
        switch (type) {
            case 0: // Init
                outPacket.encodeInt(0); // nSeconds
                outPacket.encodeInt(0); // nRedHandPos
                outPacket.encodeInt(0); // nBlueHandPos
                int size = 0;
                outPacket.encodeInt(size);
                for (int i = 0; i < size; i++) {
                    outPacket.encodeInt(0); // nType (0%, 1%, etc) (values: 0~3)
                    outPacket.encodeByte(false); // bChosen (chosen = greyed out)
                }
                break;
            case 1: // Hands only
                outPacket.encodeInt(0);
                outPacket.encodeInt(0);
                break;
            case 2: // Clock pieces only
                size = 0;
                outPacket.encodeInt(size);
                for (int i = 0; i < size; i++) {
                    outPacket.encodeInt(0);
                    outPacket.encodeByte(false);
                }
                break;
            case 3: // Disable
                break;
        }

        return outPacket;
    }

    public static OutPacket papulatusUnk3(int idk) {
        OutPacket outPacket = new OutPacket(OutHeader.PAPULATUS_UNK3);

        outPacket.encodeInt(idk);

        return outPacket;
    }
}
