package net.swordie.ms.life.mob.skill;

public class CallSkillWithData {

    private int skill;
    private int level;
    private int delay;

    public CallSkillWithData(){};

    public CallSkillWithData(int skill, int level, int delay) {
        this.skill = skill;
        this.level = level;
        this.delay = delay;
    }

    public int getSkill() {
        return skill;
    }

    public void setSkill(int skill) {
        this.skill = skill;
    }

    public int getLevel() {
        return level;
    }

    public void setLevel(int level) {
        this.level = level;
    }

    public int getDelay() {
        return delay;
    }

    public void setDelay(int delay) {
        this.delay = delay;
    }
}
