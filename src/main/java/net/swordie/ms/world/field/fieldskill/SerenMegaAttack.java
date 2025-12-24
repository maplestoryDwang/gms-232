package net.swordie.ms.world.field.fieldskill;

import net.swordie.ms.connection.OutPacket;
import net.swordie.ms.life.mob.skill.FieldSkillID;

/**
 * Created on 02/08/2021.
 *
 * @author Asura
 */
public class SerenMegaAttack extends FieldSkill {

    public SerenMegaAttack(int slv) {
        super(FieldSkillID.SerenMegaAttack, slv);
    }

    @Override
    public void encode(OutPacket outPacket) {
        outPacket.encodeInt(0);
        outPacket.encodeInt(0);
        outPacket.encodeInt(0);
        outPacket.encodeInt(0);
        outPacket.encodeInt(0);
        outPacket.encodeInt(0);
        outPacket.encodeInt(0);
        outPacket.encodeInt(0);
        outPacket.encodeInt(0); // loop size
        for (int i = 0; i < 0; i++) {
            outPacket.encodeInt(0);
        }
    }
}
