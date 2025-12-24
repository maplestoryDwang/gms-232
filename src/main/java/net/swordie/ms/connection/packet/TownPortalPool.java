package net.swordie.ms.connection.packet;

import net.swordie.ms.client.character.skills.TownPortal;
import net.swordie.ms.connection.OutPacket;
import net.swordie.ms.handlers.header.OutHeader;

/**
 * Created on 22-9-2019.
 *
 * @author Asura
 */
public class TownPortalPool {

    public static OutPacket townPortalCreated(TownPortal townPortal, boolean noAnimation) {
        OutPacket outPacket = new OutPacket(OutHeader.TOWN_PORTAL_CREATED);

        outPacket.encodeByte(noAnimation); // No Animation  (false = Animation : true = No Animation)
        outPacket.encodeInt(townPortal.getChr().getId());
        outPacket.encodePosition(townPortal.getFieldPosition()); // as this doesn't need to be initialised yet.
        outPacket.encodePosition(townPortal.getFieldPosition()); //

        return outPacket;
    }

    public static OutPacket townPortalRemoved(TownPortal townPortal, boolean animation) {
        OutPacket outPacket = new OutPacket(OutHeader.TOWN_PORTAL_REMOVED);

        outPacket.encodeByte(animation); // Animation
        outPacket.encodeInt(townPortal.getChr().getId());

        return outPacket;
    }
}
