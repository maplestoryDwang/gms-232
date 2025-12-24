package net.swordie.ms.world.field.fieldskill;

import net.swordie.ms.connection.OutPacket;
import net.swordie.ms.life.mob.skill.FieldSkillID;
import net.swordie.ms.util.Position;

/**
 * Created on 02/08/2021.
 *
 * @author Asura
 */
public class GloomTerrorFlame extends FieldSkill {

    private Position position;

    public GloomTerrorFlame(int slv) {
        super(FieldSkillID.GloomTerrorFlame, slv);
    }

    @Override
    public void encode(OutPacket outPacket) {
        outPacket.encodePositionInt(position);
    }
}
