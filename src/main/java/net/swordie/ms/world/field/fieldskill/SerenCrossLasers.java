package net.swordie.ms.world.field.fieldskill;

import net.swordie.ms.connection.OutPacket;
import net.swordie.ms.life.mob.skill.FieldSkillID;

import java.util.List;

/**
 * Created on 02/08/2021.
 *
 * @author Asura
 */
public class SerenCrossLasers extends FieldSkill {

    private List<FieldSkillInfo> fieldSkillInfoList;

    public SerenCrossLasers(int slv) {
        super(FieldSkillID.SerenCrossLasers, slv);
    }

    @Override
    public void encode(OutPacket outPacket) {
        outPacket.encodeInt(0);
        outPacket.encodeInt(0);
        outPacket.encodeInt(0);
        outPacket.encodeInt(0);
        outPacket.encodeInt(0); // grabs field top as start - this amount
        outPacket.encodeInt(0);
        outPacket.encodeInt(0);
        outPacket.encodeInt(0);

        outPacket.encodeInt(fieldSkillInfoList.size());
        for (var fieldSkillInfo : fieldSkillInfoList) {
            outPacket.encodeInt(fieldSkillInfo.getStartX());
            outPacket.encodeInt(fieldSkillInfo.getHitX());
            outPacket.encodeInt(fieldSkillInfo.getAttackDelay());
        }
    }
}
