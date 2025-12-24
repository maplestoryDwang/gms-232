package net.swordie.ms.world.field.fieldskill;

import net.swordie.ms.connection.OutPacket;
import net.swordie.ms.life.mob.skill.FieldSkillID;

import java.util.List;

/**
 * Created on 02/08/2021.
 *
 * @author Asura
 */
public class MonochromeAreaWarning extends FieldSkill {

    private List<FieldSkillInfo> fieldSkillInfoList;

    // Used for  Monochrome_AreaWarning  and  Monochrome_AreaWarning2
    public MonochromeAreaWarning(FieldSkillID skillID, int slv) {
        super(skillID, slv);
    }

    @Override
    public void encode(OutPacket outPacket) {
        outPacket.encodeInt(fieldSkillInfoList.size());
        outPacket.encodeInt(0);
        outPacket.encodeByte(0);
        for (var fieldSkillInfo : fieldSkillInfoList) {
            outPacket.encodeRectInt(fieldSkillInfo.getRect());
            outPacket.encodePositionInt(fieldSkillInfo.getPosition());
        }
    }
}
