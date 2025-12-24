package net.swordie.ms.life.mob.boss.will;

import net.swordie.ms.client.character.Char;
import net.swordie.ms.connection.Encodable;
import net.swordie.ms.connection.OutPacket;
import net.swordie.ms.connection.packet.field.WillFieldPacket;
import net.swordie.ms.enums.EnterType;
import net.swordie.ms.life.Life;
import net.swordie.ms.util.Position;

public class NarrowWeb extends Life implements Encodable {

    private int id;
    private int hitboxWidth;
    private int hitboxHeight;

    public NarrowWeb(int id, int type, Position pos) {
        super(type);
        this.id = id; // position in the template list
        setPosition(pos);
        setWidthHeightByType();
    }

    public int getHitboxWidth() {
        return hitboxWidth;
    }

    public int getHitboxHeight() {
        return hitboxHeight;
    }

    @Override
    public void encode(OutPacket outPacket) {
        outPacket.encodeInt(getObjectId());
        outPacket.encodeInt(getTemplateId());
        outPacket.encodePositionInt(getPosition());
        outPacket.encodeInt(getHitboxWidth());
        outPacket.encodeInt(getHitboxHeight());
    }

    private void setWidthHeightByType() {
        switch (templateId) {
            case 0:
                hitboxHeight = 75;
                hitboxWidth = 75;
                break;
            case 1:
                hitboxHeight = 150;
                hitboxWidth = 150;
                break;
            case 2:
                hitboxHeight = 280;
                hitboxWidth = 280;
                break;
        }
    }

    @Override
    public void broadcastSpawnPacket(Char onlyChar, EnterType enterType) {
        super.broadcastSpawnPacket(onlyChar, enterType);

        var packet = WillFieldPacket.web(this, NarrowWebType.Add);
        if (onlyChar == null) {
            getField().broadcastPacket(packet);
        } else {
            onlyChar.write(packet);
        }
    }

    @Override
    public void broadcastLeavePacket() {
        super.broadcastLeavePacket();

        getField().broadcastPacket(WillFieldPacket.web(this, NarrowWebType.Remove));
    }

    @Override
    public Life deepCopy() {
        return new NarrowWeb(getId(), getTemplateId(), getPosition());
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }
}
