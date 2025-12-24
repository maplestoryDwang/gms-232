package net.swordie.ms.connection.packet;

import net.swordie.ms.connection.OutPacket;
import net.swordie.ms.handlers.header.OutHeader;
import net.swordie.ms.life.Haku;

/**
 * Created on 20-11-2019.
 *
 * @author Asura
 */
public class SkillPetPacket {

    public static OutPacket skillPetCreated(Haku haku) {
        OutPacket outPacket = new OutPacket(OutHeader.SKILL_PET_CREATED);

        outPacket.encodeInt(haku.getOwner().getId());
        outPacket.encodeInt(haku.getObjectId());
        outPacket.encodeInt(haku.getSkillID());
        outPacket.encodeByte(true); // visible (wot)
        outPacket.encodePosition(haku.getPosition());
        outPacket.encodeByte(false); // unk  from Sniff
        outPacket.encodeShort(0); // foothold

        return outPacket;
    }

    public static OutPacket skillPetState(Haku haku, byte state) {
        OutPacket outPacket = new OutPacket(OutHeader.SKILL_PET_STATE);

        outPacket.encodeInt(haku.getOwner().getId());
        outPacket.encodeInt(haku.getObjectId());
        outPacket.encodeByte(state);

        return outPacket;
    }

    public static OutPacket skillPetAction(Haku haku) {
        OutPacket outPacket = new OutPacket(OutHeader.SKILL_PET_ACTION);

        outPacket.encodeInt(haku.getOwner().getId());
        outPacket.encodeByte(0);
        outPacket.encodeByte(0);
        outPacket.encodeString("");

        return outPacket;
    }
}
