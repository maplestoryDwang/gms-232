package net.swordie.ms.connection.packet;

import net.swordie.ms.connection.OutPacket;
import net.swordie.ms.enums.EnterType;
import net.swordie.ms.enums.LeaveType;
import net.swordie.ms.handlers.header.OutHeader;
import net.swordie.ms.life.OpenGate;

/**
 * Created on 1-9-2019.
 *
 * @author Asura
 */
public class OpenGatePool {

    public static OutPacket openGateCreated(OpenGate openGate, EnterType enterType) {
        OutPacket outPacket = new OutPacket(OutHeader.OPEN_GATE_CREATED);

        outPacket.encodeByte(enterType == EnterType.Animation ? 0 : -1);
        outPacket.encodeInt(openGate.getOwnerId());
        outPacket.encodePosition(openGate.getPosition());
        outPacket.encodeByte(openGate.getOpenGateId()); // link between OpenGates

        return outPacket;
    }

    public static OutPacket openGateClose(OpenGate openGate) {
        OutPacket outPacket = new OutPacket(OutHeader.OPEN_GATE_CLOSE);

        outPacket.encodeInt(openGate.getOwnerId());

        return outPacket;
    }

    public static OutPacket openGateRemoved(OpenGate openGate, LeaveType leaveType) {
        OutPacket outPacket = new OutPacket(OutHeader.OPEN_GATE_REMOVED);

        outPacket.encodeByte(leaveType == LeaveType.ANIMATION ? 0 : -1);
        outPacket.encodeInt(openGate.getOwnerId());
        outPacket.encodeByte(openGate.getOpenGateId());

        return outPacket;
    }
}
