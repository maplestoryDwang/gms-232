package net.swordie.ms.life.mob.boss.demian.stigma;

import net.swordie.ms.client.character.Char;
import net.swordie.ms.connection.packet.field.DemianFieldPacket;
import net.swordie.ms.enums.EnterType;
import net.swordie.ms.life.Life;
import net.swordie.ms.util.Position;
import net.swordie.ms.world.field.Field;

import java.util.Random;

/**
 * Created on 18-8-2019.
 *
 * @author Asura
 */
public class DemianStigmaIncinerateObject extends Life {

    public DemianStigmaIncinerateObject(int templateId) {
        super(templateId);
    }

    @Override
    public void broadcastSpawnPacket(Char onlyChar, EnterType enterType) {
        Field field = getField();
        setPosition(new Position(new Random().nextInt(1400) + 100, 16)); // randomise position before spawning
        if (onlyChar == null) {
            field.broadcastPacket(DemianFieldPacket.stigmaIncinerateObjectPacket(this, enterType.equals(EnterType.Animation)));
        } else {
            onlyChar.write(DemianFieldPacket.stigmaIncinerateObjectPacket(this, enterType.equals(EnterType.Animation)));
        }
    }

    @Override
    public void broadcastLeavePacket() {
        Field field = getField();
        field.broadcastPacket(DemianFieldPacket.stigmaIncinerateObjectPacket(null, true)); // null -> remove
    }
}
