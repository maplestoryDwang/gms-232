package net.swordie.ms.loaders.containerclasses;

import net.swordie.ms.life.mob.skill.MobSkillStat;
import net.swordie.ms.util.Position;
import net.swordie.ms.util.Rect;

import java.util.*;

/**
 * Created on 3/18/2018.
 */
public class MobSkillInfo {

    private short skillId;
    private short level;
    private Map<MobSkillStat, String> mobSkillStats = new HashMap<>();
    private Position rb;
    private Position lt;
    private Position lt2;
    private Position rb2;
    private List<Integer> ints = new ArrayList<>();
    private Position lt3;
    private Position rb3;
    private int otherSkillID;
    private int otherSkillLev;
    private int affectedOtherSkillID;
    private int affectedOtherSkillLev;
    private List<List<Integer>> mobGroups = new ArrayList<>();

    public short getSkillId() {
        return skillId;
    }

    public void setSkillId(short skillId) {
        this.skillId = skillId;
    }

    public short getLevel() {
        return level;
    }

    public void setLevel(short level) {
        this.level = level;
    }

    public Map<MobSkillStat, String> getMobSkillStats() {
        return mobSkillStats;
    }

    public void setMobSkillStats(Map<MobSkillStat, String> mobSkillStats) {
        this.mobSkillStats = mobSkillStats;
    }

    public void putMobSkillStat(MobSkillStat mss, String value) {
        getMobSkillStats().put(mss, value);
    }

    public int getSkillStatIntValue(MobSkillStat mobSkillStat) {
        if (!getMobSkillStats().containsKey(mobSkillStat)) {
            return 0;
        }
        return Integer.parseInt(getSkillStat(mobSkillStat));
    }

    public String getSkillStat(MobSkillStat mobSkillStat) {
        return getMobSkillStats().get(mobSkillStat);
    }

    public void setRb(Position rb) {
        this.rb = rb;
    }

    public Position getRb() {
        return rb;
    }

    public void setLt(Position lt) {
        this.lt = lt;
    }

    public Position getLt() {
        return lt;
    }

    public void setLt2(Position lt2) {
        this.lt2 = lt2;
    }

    public Position getLt2() {
        return lt2;
    }

    public void setRb2(Position rb2) {
        this.rb2 = rb2;
    }

    public Position getRb2() {
        return rb2;
    }

    public List<Integer> getInts() {
        return ints;
    }

    public void addIntToList(int value) {
        getInts().add(value);
    }

    public void setLt3(Position lt3) {
        this.lt3 = lt3;
    }

    public Position getLt3() {
        return lt3;
    }

    public void setRb3(Position rb3) {
        this.rb3 = rb3;
    }

    public Position getRb3() {
        return rb3;
    }

    public int getOtherSkillID() {
        return otherSkillID;
    }

    public void setOtherSkillID(int otherSkillID) {
        this.otherSkillID = otherSkillID;
    }

    public int getOtherSkillLev() {
        return otherSkillLev;
    }

    public void setOtherSkillLev(int otherSkillLev) {
        this.otherSkillLev = otherSkillLev;
    }

    public int getAffectedOtherSkillID() {
        return affectedOtherSkillID;
    }

    public void setAffectedOtherSkillID(int affectedOtherSkillID) {
        this.affectedOtherSkillID = affectedOtherSkillID;
    }

    public int getAffectedOtherSkillLev() {
        return affectedOtherSkillLev;
    }

    public void setAffectedOtherSkillLev(int affectedOtherSkillLev) {
        this.affectedOtherSkillLev = affectedOtherSkillLev;
    }

    public boolean hasRect() {
        return getRect() != null;
    }

    public Rect getRect() {
        if (getLt() == null) {
            return null;
        }

        return new Rect(getLt(), getRb());
    }

    public Rect getRect2() {
        if (getLt2() == null) {
            return null;
        }
        return new Rect(getLt2(), getRb2());
    }

    public Rect getRect3() {
        if (getLt3() == null) {
            return null;
        }
        return new Rect(getLt3(), getRb3());
    }

    public List<List<Integer>> getMobGroups() {
        return mobGroups;
    }

    public void addMobGroup(List<Integer> mobGroup) {
        this.mobGroups.add(mobGroup);
    }
}
