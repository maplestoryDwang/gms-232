package net.swordie.ms.client.character.skills;

import net.swordie.ms.client.character.Char;
import net.swordie.ms.connection.db.TrackedObject;
import net.swordie.ms.connection.packet.WvsContext;

import java.util.Objects;

/**
 * Created on 12/20/2017.
 */
public class Skill extends TrackedObject {

    private int id;
    private int skillId;
    private int rootId;
    private int maxLevel;
    private int currentLevel;
    private int masterLevel;

    public int getSkillId() {
        return skillId;
    }

    public void setSkillId(int skillId) {
        this.skillId = skillId;
    }

    public int getRootId() {
        return rootId;
    }

    public void setRootId(int rootId) {
        this.rootId = rootId;
    }

    public void setMaxLevel(int maxLevel) {
        this.maxLevel = maxLevel;
    }

    public int getMaxLevel() {
        return maxLevel;
    }

    public int getCurrentLevel() {
        return currentLevel;
    }

    public void setCurrentLevel(int currentLevel) {
        this.currentLevel = Math.max(-1, currentLevel);
    }

    public void incCurrentLevel(int toAdd) {
        setCurrentLevel(Math.max(0, getCurrentLevel() + toAdd));
    }

    public long getId() {
        return id;
    }

    @Override
    public void setId(long id) {
        setId((int) id);
    }

    public void setId(int id) {
        this.id = id;
    }

    public void setMasterLevel(int masterLevel) {
        this.masterLevel = masterLevel;
    }

    public int getMasterLevel() {
        return masterLevel;
    }

    @Override
    public String toString() {
        return "id = " + getSkillId() + ", cur = " + getCurrentLevel() + ", master = " + getMasterLevel();
    }

    @Override
    public int getTransactionalHash() {
        return Objects.hash(skillId, rootId, maxLevel, currentLevel, masterLevel);
    }

    public void updateToChar(Char chr) {
        chr.write(WvsContext.changeSkillRecordResult(this));
    }

}
