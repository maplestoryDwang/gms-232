package net.swordie.ms.world.field.fieldskill;

import net.swordie.ms.connection.OutPacket;
import net.swordie.ms.life.mob.skill.FieldSkillID;

import java.util.List;

/**
 * Created on 02/08/2021.
 *
 * @author Asura
 */
public class CenterDirRotationAttack extends FieldSkill {

    private List<FieldSkillInfo> fieldSkillInfoList;

    public CenterDirRotationAttack(int slv) {
        super(FieldSkillID.CenterDirRotationAttack, slv);
    }

    @Override
    public void encode(OutPacket outPacket) {
        outPacket.encodeInt(fieldSkillInfoList.size());
        for (var fieldSkillInfo : fieldSkillInfoList) {
            outPacket.encodePositionInt(fieldSkillInfo.getPosition());
            outPacket.encodeInt(fieldSkillInfo.getRotation());
            outPacket.encodeInt(fieldSkillInfo.getAttackDelay());
        }
    }
}
