package net.swordie.ms.loaders.containerclasses.mobcollection;

import java.util.HashMap;
import java.util.Map;

public class MobCollectionSession {
    private int sessionId;
    private int recordId;
    private int rewardId;
    private Map<Integer, MobCollectionGroup> mobCollectionGroups;
    private int rewardCount;

    public MobCollectionSession() {
        mobCollectionGroups = new HashMap<>();
    }

    public int getRecordId() {
        return recordId;
    }

    public void setRecordId(int recordId) {
        this.recordId = recordId;
    }

    public int getRewardId() {
        return rewardId;
    }

    public void setRewardId(int rewardId) {
        this.rewardId = rewardId;
    }

    public Map<Integer, MobCollectionGroup> getMobCollectionGroups() {
        return mobCollectionGroups;
    }

    public void setSessionId(int sessionId) {
        this.sessionId = sessionId;
    }

    public int getSessionId() {
        return sessionId;
    }

    public void addGroup(MobCollectionGroup group) {
        getMobCollectionGroups().put(group.getGroupId(), group);
    }

    public MobCollectionGroup gerGroup(int group) {
        return mobCollectionGroups.get(group);
    }

    public void setRewardCount(int rewardCount) {
        this.rewardCount = rewardCount;
    }

    public int getRewardCount() {
        return rewardCount;
    }

    @Override
    public String toString() {
        return "MobCollectionSession{" +
                "sessionId=" + sessionId +
                ", recordId=" + recordId +
                ", rewardId=" + rewardId +
                '}';
    }
}
