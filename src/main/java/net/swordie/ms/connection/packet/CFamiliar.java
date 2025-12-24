package net.swordie.ms.connection.packet;

import net.swordie.ms.client.character.Char;
import net.swordie.ms.client.character.skills.info.AttackInfo;
import net.swordie.ms.connection.OutPacket;
import net.swordie.ms.handlers.header.OutHeader;
import net.swordie.ms.life.Familiar;
import net.swordie.ms.life.movement.MovementInfo;

import java.util.List;

/**
 * @author Sjonnie
 * Created on 6/9/2018.
 */
public class CFamiliar {

    public static OutPacket familiarEnterField(List<Familiar> familiars, boolean summon, boolean noAnimation) {
        OutPacket outPacket = new OutPacket(OutHeader.FAMILIAR_ENTER_FIELD);
        if (familiars.size() > 0) {
            outPacket.encodeInt(familiars.get(0).getChr().getId());
        } else {
            outPacket.encodeInt(0);
        }
        outPacket.encodeByte(summon); // on/off
        outPacket.encodeByte(noAnimation); // No Animation

        outPacket.encodeByte(familiars.size());
        for (Familiar familiar : familiars) {
            outPacket.encodeByte(familiar.getIdx() + 1);
            outPacket.encodeInt(familiar.getFamiliarID());
            outPacket.encodeInt((int) familiar.getId());
            outPacket.encodeString(familiar.getName());
            outPacket.encodePosition(familiar.getChr().getPosition());
            outPacket.encodeByte(familiar.getMoveAction());
            outPacket.encodeShort(familiar.getFh());
        }

        return outPacket;
    }

    public static OutPacket familiarMove(int charID, int idx, MovementInfo movementInfo) {
        OutPacket outPacket = new OutPacket(OutHeader.FAMILIAR_MOVE);

        outPacket.encodeInt(charID);
        outPacket.encodeByte(idx);
        outPacket.encode(movementInfo);

        return outPacket;
    }

    public static OutPacket familiarAttack(AttackInfo attackInfo){
        OutPacket outPacket = new OutPacket(OutHeader.FAMILIAR_INFO);

        Familiar f = attackInfo.familiar;

        outPacket.encodeInt(f.getChr().getId());

        outPacket.encodeByte(0); // ?
        outPacket.encodeByte(attackInfo.fieldKey); // ?

        // guesses
        outPacket.encodeInt(f.getFamiliarID());
        outPacket.encodeInt(0);
        outPacket.encodeInt(0);
        outPacket.encodeLong(0);

        return outPacket;
    }

    public OutPacket familiarRename(Char chr, int idx, String newName) {
        OutPacket outPacket = new OutPacket(OutHeader.FAMILIAR_RENAME);

        outPacket.encodeInt(chr.getId());
        outPacket.encodeByte(idx);
        outPacket.encodeString(newName);

        return outPacket;
    }
}
