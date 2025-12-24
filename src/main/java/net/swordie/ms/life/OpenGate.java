package net.swordie.ms.life;

import net.swordie.ms.client.character.Char;
import net.swordie.ms.connection.packet.OpenGatePool;
import net.swordie.ms.enums.EnterType;
import net.swordie.ms.enums.LeaveType;
import net.swordie.ms.util.Position;
import net.swordie.ms.util.Util;
import net.swordie.ms.world.field.Field;

/**
 * Created on 1-9-2019.
 *
 * @author Asura
 */
public class OpenGate extends Life{
    private byte openGateId;
    private Char owner;
    private OpenGate respectiveOpenGate;
    private long timeSpawned;


    public OpenGate(int templateId) {
        super(templateId);
    }


    public byte getOpenGateId() {
        return openGateId;
    }

    public void setOpenGateId(byte openGateId) {
        this.openGateId = openGateId;
    }

    public Char getOwner() {
        return owner;
    }

    public void setOwner(Char owner) {
        this.owner = owner;
    }

    public int getOwnerId() {
        return getOwner().getId();
    }

    public OpenGate getRespectiveOpenGate() {
        return respectiveOpenGate;
    }

    public void setRespectiveOpenGate(OpenGate respectiveOpenGate) {
        this.respectiveOpenGate = respectiveOpenGate;
    }

    public long getTimeSpawned() {
        return timeSpawned;
    }

    public void setTimeSpawned(long timeSpawned) {
        this.timeSpawned = timeSpawned;
    }

    public static OpenGate getOpenGateS(Char chr, Position position) {
        OpenGate openGate = new OpenGate(-1);
        openGate.setOwner(chr);
        openGate.setPosition(position);
        openGate.setTimeSpawned(Util.getCurrentTimeLong());
        openGate.setOpenGateId((byte) 0);

        return openGate;
    }

    public static OpenGate getOpenGateR(Char chr, Position position, OpenGate respectiveOpenGate) {
        OpenGate openGate = new OpenGate(-1);
        openGate.setOwner(chr);
        openGate.setPosition(position);
        openGate.setTimeSpawned(Util.getCurrentTimeLong());
        openGate.setOpenGateId((byte) 1);
        openGate.setRespectiveOpenGate(respectiveOpenGate);
        respectiveOpenGate.setRespectiveOpenGate(openGate);

        return openGate;
    }

    @Override
    public void broadcastSpawnPacket(Char onlyChar, EnterType enterType) {
        Field field = getField();
        if (onlyChar == null) {
            field.broadcastPacket(OpenGatePool.openGateCreated(this, enterType));
        } else {
            onlyChar.write(OpenGatePool.openGateCreated(this, enterType));
        }
    }

    @Override
    public void broadcastLeavePacket() {
        Field field = getField();
        field.broadcastPacket(OpenGatePool.openGateRemoved(this, LeaveType.ANIMATION));
    }
}
