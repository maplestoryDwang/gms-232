package net.swordie.ms.connection.packet;

import net.swordie.ms.client.minigames.castlecolumn.CastleColumnPhase;
import net.swordie.ms.client.minigames.castlecolumn.CastleColumnUpdateType;
import net.swordie.ms.connection.OutPacket;
import net.swordie.ms.handlers.header.OutHeader;

import java.util.List;

/**
 * Created on 01/07/2021.
 *
 * @author Asura
 */
public class CastleColumn {

    public static OutPacket castleColumnStart() {
        return castleColumnStart(CastleColumnPhase.neoCastleColumnPhases);
    }

    public static OutPacket castleColumnStart(List<CastleColumnPhase> phases) {
        OutPacket outPacket = new OutPacket(OutHeader.CASTLE_COLUMN_START);

        outPacket.encodeInt(300); // unk
        outPacket.encodeInt(5); // unk
        outPacket.encodeInt(0); // unk
        outPacket.encodeInt(1932694); // unk
        outPacket.encodeInt(phases.size());
        phases.forEach(p -> p.encode(outPacket));

        return outPacket;
    }

    public static OutPacket castleColumnUpdate(CastleColumnUpdateType type) {
        OutPacket outPacket = new OutPacket(OutHeader.CASTLE_COLUMN_UPDATE);

        outPacket.encodeInt(type.getVal());

        return outPacket;
    }

    public static OutPacket castleColumnEnd(int points) {
        OutPacket outPacket = new OutPacket(OutHeader.CASTLE_COLUMN_END);

        outPacket.encodeInt(points);

        return outPacket;
    }
}
