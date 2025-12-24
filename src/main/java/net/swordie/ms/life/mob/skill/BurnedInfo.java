package net.swordie.ms.life.mob.skill;

import net.swordie.ms.client.character.Char;
import net.swordie.ms.connection.OutPacket;
import net.swordie.ms.util.Util;

import java.util.Objects;

/**
 * Created on 1/4/2018.
 */
public class BurnedInfo {
    private int characterId, skillId, interval, dotAnimation, dotCount, superPos, attackDelay, dotTickIdx, dotTickDamR;
    private long startTime, end;
    private long lastUpdate;
    private Char chr;
    private long damage;
    private int addedTickDamR;

    public BurnedInfo deepCopy() {
        BurnedInfo copy = new BurnedInfo();
        copy.setCharacterId(getCharacterId());
        copy.setChr(getChr());
        copy.setSkillId(getSkillId());
        copy.setDamage(getDamage());
        copy.setInterval(getInterval());
        copy.setEnd(getEnd());
        copy.setDotAnimation(getDotAnimation());
        copy.setDotCount(getDotCount());
        copy.setSuperPos(getSuperPos());
        copy.setAttackDelay(getAttackDelay());
        copy.setDotTickIdx(getDotTickIdx());
        copy.setDotTickDamR(getDotTickDamR());
        copy.setLastUpdate(getLastUpdate());
        copy.setStartTime(getStartTime());
        return copy;
    }

    public int getCharacterId() {
        return characterId;
    }

    public void setCharacterId(int characterId) {
        this.characterId = characterId;
    }

    public int getSkillId() {
        return skillId;
    }

    public void setSkillId(int skillId) {
        this.skillId = skillId;
    }

    public long getDamage() {
        return damage;
    }

    public void setDamage(long damage) {
        this.damage = damage;
    }

    public int getInterval() {
        return interval;
    }

    public void setInterval(int interval) {
        this.interval = interval;
    }

    public long getEnd() {
        return end;
    }

    public void setEnd(long end) {
        this.end = end;
    }

    public int getDotAnimation() {
        return dotAnimation;
    }

    public void setDotAnimation(int dotAnimation) {
        this.dotAnimation = dotAnimation;
    }

    public int getDotCount() {
        return dotCount;
    }

    public void setDotCount(int dotCount) {
        this.dotCount = dotCount;
    }

    public int getSuperPos() {
        return superPos;
    }

    public void setSuperPos(int superPos) {
        this.superPos = superPos;
    }

    public int getAttackDelay() {
        return attackDelay;
    }

    public void setAttackDelay(int attackDelay) {
        this.attackDelay = attackDelay;
    }

    public int getDotTickIdx() {
        return dotTickIdx;
    }

    public void setDotTickIdx(int dotTickIdx) {
        this.dotTickIdx = dotTickIdx;
    }

    public int getDotTickDamR() {
        return dotTickDamR;
    }

    public void setDotTickDamR(int dotTickDamR) {
        this.dotTickDamR = dotTickDamR;
    }

    public long getStartTime() {
        return startTime;
    }

    public void setStartTime(long startTime) {
        this.startTime = startTime;
    }

    public long getLastUpdate() {
        return lastUpdate;
    }

    public void setLastUpdate(long lastUpdate) {
        this.lastUpdate = lastUpdate;
    }

    public void encode(OutPacket outPacket) {
        outPacket.encodeInt(getCharacterId());
        outPacket.encodeInt(getSkillId());
        outPacket.encodeLong(getDamage());
        outPacket.encodeInt(getInterval());
        outPacket.encodeInt((int) getEnd());
        outPacket.encodeInt(getDotAnimation());
        outPacket.encodeInt(getDotCount());
        outPacket.encodeInt(getSuperPos());
        outPacket.encodeInt(getAttackDelay());
        outPacket.encodeInt(getDotTickIdx());
        outPacket.encodeInt(getDotTickDamR());
        outPacket.encodeInt(getAddedTickDamR() > 0 ? 1 : 0); // doesn't seem to do anything when increasing
        outPacket.encodeInt(getAddedTickDamR()); // maybe just DotTickDamR?
        outPacket.encodeInt((int) getStartTime());
        outPacket.encodeInt((int) getLastUpdate());
    }

    public Char getChr() {
        return chr;
    }

    public void setChr(Char chr) {
        this.chr = chr;
    }

    public int getAddedTickDamR() {
        return addedTickDamR;
    }

    public void setAddedTickDamR(int addedTickDamR) {
        this.addedTickDamR = addedTickDamR;
    }

    public long getRemainingDamage() {
        long curTime = Util.getCurrentTimeLong();
        long endTime = getEnd();
        long remainingTime = endTime - curTime;
        long remainingCount = remainingTime / getInterval();
        return Math.max(0, getDamage() * remainingCount);
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        BurnedInfo that = (BurnedInfo) o;
        return characterId == that.characterId &&
                skillId == that.skillId &&
                startTime == that.startTime;
    }

    @Override
    public int hashCode() {
        return Objects.hash(characterId, skillId, startTime);
    }

    @Override
    public String toString() {
        return "BurnedInfo{" +
                "skillId=" + skillId +
                ", end=" + end +
                ", superPos=" + superPos +
                ", startTime=" + startTime +
                '}';
    }
}

