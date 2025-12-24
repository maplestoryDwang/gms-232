package net.swordie.ms.world.field.fieldskill;

import net.swordie.ms.connection.OutPacket;
import net.swordie.ms.life.mob.skill.FieldSkillID;

import java.util.List;

/**
 * Created on 02/08/2021.
 *
 * @author Asura
 */
public class DynamicObjectOnAndAttack extends FieldSkill {

    private List<FieldSkillInfo> fieldSkillInfoList;

    public DynamicObjectOnAndAttack(int slv) {
        super(FieldSkillID.DynamicObjectOnAndAttack, slv);
    }

    @Override
    public void encode(OutPacket outPacket) {
        outPacket.encodeInt(fieldSkillInfoList.size());
        for (var fieldSkillInfo : fieldSkillInfoList) {
            outPacket.encodePositionInt(fieldSkillInfo.getPosition());
            outPacket.encodeString(fieldSkillInfo.getObjName());
            outPacket.encodeInt(0); // unk
        }
    }
}
