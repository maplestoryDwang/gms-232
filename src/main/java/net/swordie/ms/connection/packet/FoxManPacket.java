package net.swordie.ms.connection.packet;

import net.swordie.ms.client.character.Char;
import net.swordie.ms.connection.OutPacket;
import net.swordie.ms.handlers.header.OutHeader;
import net.swordie.ms.life.Haku;

/**
 * Created on 20-11-2019.
 *
 * @author Asura
 */
public class FoxManPacket {

    public static OutPacket foxManEnterField(Haku haku) {
        OutPacket outPacket = new OutPacket(OutHeader.FOX_MAN_ENTER_FIELD);

        outPacket.encodeInt(haku.getOwner().getId());
        outPacket.encodeShort(0);   // 1 = Haku Old Form,  0 = Haku New Form
        outPacket.encodePosition(haku.getPosition());
        outPacket.encodeByte(haku.getMoveAction()); //MoveAction
        outPacket.encodeShort(0); //Foothold
        outPacket.encodeInt(haku.getUpgrade()); //nUpgrade
        outPacket.encodeInt(haku.getFanID()); //FanID Equipped by Haku

        return outPacket;
    }

    public static OutPacket foxManShowChangeEffect(Haku haku) {
        OutPacket outPacket = new OutPacket(OutHeader.FOX_MAN_SHOW_CHANGE_EFFECT);

        outPacket.encodeInt(haku.getOwner().getId());

        return outPacket;
    }

    public static OutPacket foxManShowExclResult(Char chr) {
        OutPacket outPacket = new OutPacket(OutHeader.FOX_MAN_EXCL_RESULT);

        outPacket.encodeInt(chr.getId());

        return outPacket;
    }

    public static OutPacket foxManModified(Haku haku) {
        OutPacket outPacket = new OutPacket(OutHeader.FOX_MAN_MODIFIED);

        outPacket.encodeInt(haku.getOwner().getId());
        boolean change = true;
        outPacket.encodeByte(change);
        if (change) {
            outPacket.encodeInt(haku.getFanID());
        }

        return outPacket;
    }

    public static OutPacket foxManLeaveField(Char chr) {
        OutPacket outPacket = new OutPacket(OutHeader.FOX_MAN_LEAVE_FIELD);

        outPacket.encodeInt(chr.getId());

        return outPacket;
    }
}
