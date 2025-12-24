package net.swordie.ms.life.mob.boss.will;

import net.swordie.ms.client.character.Char;
import net.swordie.ms.connection.Encodable;
import net.swordie.ms.connection.OutPacket;
import net.swordie.ms.connection.packet.field.WillFieldPacket;
import net.swordie.ms.enums.EnterType;
import net.swordie.ms.life.Life;
import net.swordie.ms.util.Position;

import java.util.Collections;

public class WillInfection extends Life implements Encodable {

    private final boolean isNew;
    private final boolean isGrave;
    private final Position position;
    private final long damageDone;

    public WillInfection(boolean isNew, int charId, boolean isGrave, Position position, long damageDone) {
        super(charId);
        this.isNew = isNew;
        this.isGrave = isGrave;
        this.position = position;
        this.damageDone = damageDone;
    }

    public boolean isNew() {
        return isNew;
    }

    public int getCharId() {
        return getTemplateId();
    }

    public boolean isGrave() {
        return isGrave;
    }

    public Position getPosition() {
        return position;
    }

    public long getDamageDone() {
        return damageDone;
    }

    @Override
    public void encode(OutPacket outPacket) {
        encode(outPacket, true);
    }

    public void encode(OutPacket outPacket, boolean encodeIsNew) {
        if (encodeIsNew) {
            outPacket.encodeByte(isNew());
        }
        outPacket.encodeInt(getObjectId());

        outPacket.encodeInt(getCharId());
        outPacket.encodeByte(isGrave());
        outPacket.encodePositionInt(getPosition());
    }

    @Override
    public void broadcastSpawnPacket(Char onlyChar, EnterType enterType) {
        var packet = WillFieldPacket.infectionCreate(this);
        if (onlyChar == null) {
            getField().broadcastPacket(packet);
        } else {
            onlyChar.write(packet);
        }
    }

    @Override
    public void broadcastLeavePacket() {
        super.broadcastLeavePacket();
        getField().broadcastPacket(WillFieldPacket.infectionRemove(Collections.singleton(getObjectId())));

        for (var chr : getField().getChars()) {
            var infection = chr.getBossInfo().getWillInfection();
            if (infection != null && infection.getObjectId() == getObjectId()) {
                chr.getBossInfo().setWillInfection(null);
            }
        }
    }
}
