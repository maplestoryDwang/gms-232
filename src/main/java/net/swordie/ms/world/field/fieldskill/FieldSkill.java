package net.swordie.ms.world.field.fieldskill;

import net.swordie.ms.connection.Encodable;
import net.swordie.ms.connection.OutPacket;
import net.swordie.ms.life.mob.skill.FieldSkillID;

/**
 * Created on 02/08/2021.
 *
 * @author Asura
 */
public class FieldSkill implements Encodable {
    private FieldSkillID skillID;
    private int slv;

    public FieldSkill(FieldSkillID skillID, int slv) {
        this.skillID = skillID;
        this.slv = slv;
    }

    public FieldSkillID getSkillID() {
        return skillID;
    }

    public void setSkillID(FieldSkillID skillID) {
        this.skillID = skillID;
    }

    public int getSlv() {
        return slv;
    }

    public void setSlv(int slv) {
        this.slv = slv;
    }

    @Override
    public void encode(OutPacket outPacket) {

    }
}
