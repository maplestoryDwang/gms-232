package net.swordie.ms.client.character.skills;

import net.swordie.ms.client.character.Char;
import net.swordie.ms.util.Position;

/**
 * Created on 2/2/2020.
 *
 * @author Asura
 */
public class KeyDownSkillInfo {
    int skillId, slv;
    boolean left;
    int attackAction, attackSpeed;
    Position position;

    public int getSkillId() {
        return skillId;
    }

    public void setSkillId(int skillId) {
        this.skillId = skillId;
    }

    public int getSlv() {
        return slv;
    }

    public void setSlv(int slv) {
        this.slv = slv;
    }

    public boolean isLeft() {
        return left;
    }

    public void setLeft(boolean left) {
        this.left = left;
    }

    public int getAttackAction() {
        return attackAction;
    }

    public void setAttackAction(int attackAction) {
        this.attackAction = attackAction;
    }

    public int getAttackSpeed() {
        return attackSpeed;
    }

    public void setAttackSpeed(int attackSpeed) {
        this.attackSpeed = attackSpeed;
    }

    public Position getPosition() {
        return position;
    }

    public void setPosition(Position position) {
        this.position = position;
    }

    public static KeyDownSkillInfo getBy(int skillId, int slv, boolean left,
                                         int attackAction, int attackSpeed,
                                         Position position) {
        KeyDownSkillInfo kdsi = new KeyDownSkillInfo();
        kdsi.setSkillId(skillId);
        kdsi.setSlv(slv);
        kdsi.setLeft(left);
        kdsi.setAttackAction(attackAction);
        kdsi.setAttackSpeed(attackSpeed);
        kdsi.setPosition(position);

        return kdsi;
    }

    public static KeyDownSkillInfo getBy(Char chr, int skillId, boolean left,
                                         int attackAction, int attackSpeed) {
        return getBy(skillId, chr.getSkillLevel(skillId), left, attackAction, attackSpeed, chr.getPosition());
    }
}
