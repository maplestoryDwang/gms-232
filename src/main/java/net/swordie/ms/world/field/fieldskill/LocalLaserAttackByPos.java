package net.swordie.ms.world.field.fieldskill;

import net.swordie.ms.connection.OutPacket;
import net.swordie.ms.life.mob.skill.FieldSkillID;

/**
 * Created on 02/08/2021.
 *
 * @author Asura
 */
public class LocalLaserAttackByPos extends FieldSkill {

    public LocalLaserAttackByPos(int slv) {
        super(FieldSkillID.LocalLaserAttackByPos, slv);
    }

    @Override
    public void encode(OutPacket outPacket) {
        // Empty
    }
}
