package net.swordie.ms.loaders.containerclasses;

/**
 * Created on 07/05/2021.
 *
 * @author Asura
 */
public class StolenSkillInfo {
    private int skillId;
    private int tabPos;
    private int impeccableSkillId;

    public StolenSkillInfo(int skillId, int tabPos, int impeccableSkillId) {
        this.skillId = skillId;
        this.tabPos = tabPos;
        this.impeccableSkillId = impeccableSkillId;
    }

    public int getSkillId() {
        return skillId;
    }

    public void setSkillId(int skillId) {
        this.skillId = skillId;
    }

    public int getTabPos() {
        return tabPos;
    }

    public void setTabPos(int tabPos) {
        this.tabPos = tabPos;
    }

    public int getImpeccableSkillId() {
        return impeccableSkillId;
    }

    public void setImpeccableSkillId(int impeccableSkillId) {
        this.impeccableSkillId = impeccableSkillId;
    }
}
