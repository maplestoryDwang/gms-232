package net.swordie.ms.connection.packet;

import net.swordie.ms.connection.OutPacket;
import net.swordie.ms.handlers.header.OutHeader;
import net.swordie.ms.world.field.bosses.gollux.GolluxMiniMapFieldClearType;

import java.util.Map;

/**
 * Created on 22-9-2019.
 *
 * @author Asura
 */
public class GiantBossFieldPacket {

    public static OutPacket golluxMiniMap(Map<String, GolluxMiniMapFieldClearType> gFieldMap) {
        OutPacket outPacket = new OutPacket(OutHeader.GOLLUX_MINI_MAP);

        outPacket.encodeInt(gFieldMap.size());

        for (Map.Entry<String, GolluxMiniMapFieldClearType> entry : gFieldMap.entrySet()) {
            String fieldIdString = entry.getKey();
            GolluxMiniMapFieldClearType clearType = entry.getValue();

            outPacket.encodeString(fieldIdString);
            outPacket.encodeString(clearType.getVal());
        }

        return outPacket;
    }

    public static OutPacket golluxPortalOpen(String happeningName) {
        OutPacket outPacket = new OutPacket(OutHeader.GOLLUX_PORTAL_OPEN);

        outPacket.encodeString(happeningName);
        outPacket.encodeInt(1); // show

        return outPacket;
    }
}
