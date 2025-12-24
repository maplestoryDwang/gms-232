package net.swordie.ms.world.field.fieldskill;

import net.swordie.ms.connection.OutPacket;
import net.swordie.ms.life.mob.skill.FieldSkillID;
import net.swordie.ms.util.Position;

import java.util.List;

/**
 * Created on 02/08/2021.
 *
 * @author Asura
 */
public class SummonedSequenceOnAndAttack extends FieldSkill {

    private List<Position> positionList;

    public SummonedSequenceOnAndAttack(int slv) {
        super(FieldSkillID.SummonedSequenceOnAndAttack, slv);
    }

    @Override
    public void encode(OutPacket outPacket) {
        outPacket.encodeInt(positionList.size());
        for (var pos : positionList) {
            outPacket.encodePositionInt(pos);
        }
    }
}
