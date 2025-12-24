package net.swordie.ms.client.character.skills;

import net.swordie.ms.client.character.Char;

import java.util.Objects;

public class SkillCooltime {

    private int skillId;
    private long nextAvailableTime;

    public SkillCooltime() {
    }

    public SkillCooltime(Char chr, int skillId, long nextusabletime) {
        this.skillId = skillId;
        this.nextAvailableTime = nextusabletime;
    }

    public int getSkillId() {
        return skillId;
    }

    public void setSkillId(int skillId) {
        this.skillId = skillId;
    }

    public long getNextAvailableTime() {
        return nextAvailableTime;
    }

    public void setNextAvailableTime(long nextAvailableTime) {
        this.nextAvailableTime = nextAvailableTime;
    }

    public boolean isUsable() {
        return nextAvailableTime <= System.currentTimeMillis();
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        SkillCooltime that = (SkillCooltime) o;
        return skillId == that.skillId;
    }

    @Override
    public int hashCode() {
        return Objects.hash(skillId);
    }

}
