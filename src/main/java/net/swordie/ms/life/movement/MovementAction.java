package net.swordie.ms.life.movement;

import net.swordie.ms.client.character.Char;
import net.swordie.ms.connection.InPacket;
import net.swordie.ms.connection.OutPacket;
import net.swordie.ms.life.Life;

/**
 * Created on 1/2/2018.
 */
public class MovementAction extends MovementBase {
    public MovementAction(InPacket inPacket, byte command) {
        super();
        this.command = command;

        if (command != 80 && command != 82) {
            moveAction = inPacket.decodeByte();
            elapse = inPacket.decodeShort();
            forcedStop = inPacket.decodeByte();
        } else {
            position = inPacket.decodePosition();
            vPosition = inPacket.decodePosition();
            fh = inPacket.decodeShort();
            footStart = inPacket.decodeShort();
            idk = inPacket.decodeShort();
        }
    }

    @Override
    public void encode(OutPacket outPacket) {
        outPacket.encodeByte(getCommand());

        if (getCommand() != 80 && command != 82) {
            outPacket.encodeByte(getMoveAction());
            outPacket.encodeShort(getElapse());
            outPacket.encodeByte(getForcedStop());
        } else {
            outPacket.encodePosition(getPosition());
            outPacket.encodePosition(getVPosition());
            outPacket.encodeShort(getFh());
            outPacket.encodeShort(getFootStart());
            outPacket.encodeShort(getIdk());
        }
    }

    @Override
    public void applyTo(Char chr) {
        chr.setMoveAction(moveAction);
    }

    @Override
    public void applyTo(Life life) {
        life.setMoveAction(moveAction);
    }


}
