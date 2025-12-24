package net.swordie.ms.connection.packet;

import net.swordie.ms.client.character.Char;
import net.swordie.ms.connection.OutPacket;
import net.swordie.ms.connection.packet.model.MiniRoomPacket;
import net.swordie.ms.enums.MiniRoomAction;
import net.swordie.ms.handlers.header.OutHeader;

/**
 * @author Sjonnie
 * Created on 8/10/2018.
 */
public class MiniRoomPool {

    public static OutPacket miniRoomBaseDlg(MiniRoomPacket miniRoomPacket) {
        OutPacket outPacket = new OutPacket(OutHeader.MINI_ROOM_BASE_DLG);

        miniRoomPacket.encode(outPacket);

        return outPacket;
    }

    public static OutPacket shopVisitorAdd(Char chr, int slot) {
        OutPacket outPacket = new OutPacket(OutHeader.MINI_ROOM_BASE_DLG);


        outPacket.encodeByte(MiniRoomAction.Accept.getVal());

        outPacket.encodeByte(slot);
        chr.getAvatarData().getAvatarLook().encode(outPacket);
        outPacket.encodeString(chr.getName());
        outPacket.encodeShort(chr.getJob());

        return outPacket;
    }

    public static OutPacket shopVisitorRemove(Char chr, int slot) {
        OutPacket outPacket = new OutPacket(OutHeader.MINI_ROOM_BASE_DLG);


        outPacket.encodeByte(MiniRoomAction.Accept.getVal());

        outPacket.encodeByte(MiniRoomAction.Accept.getVal());
        outPacket.encodeByte(slot);

        return outPacket;
    }

}
