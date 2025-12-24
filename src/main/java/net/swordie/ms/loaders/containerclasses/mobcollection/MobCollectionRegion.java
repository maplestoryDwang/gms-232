package net.swordie.ms.loaders.containerclasses.mobcollection;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class MobCollectionRegion {
    private int regionId;
    private int recordId;
    private int rewardId;
    private Map<Integer, MobCollectionSession> mobCollectionSessions;
    private List<MobCollectionClearQuest> mobCollectionClearQuests;
    private int rewardCount;

    public MobCollectionRegion() {
        mobCollectionSessions = new HashMap<>();
        mobCollectionClearQuests = new ArrayList<>();
    }

    public int getRegionId() {
        return regionId;
    }

    public void setRegionId(int regionId) {
        this.regionId = regionId;
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

    public Map<Integer, MobCollectionSession> getMobCollectionSessions() {
        return mobCollectionSessions;
    }

    public List<MobCollectionClearQuest> getMobCollectionClearQuests() {
        return mobCollectionClearQuests;
    }

    public void addClearQuest(MobCollectionClearQuest clearQuest) {
        getMobCollectionClearQuests().add(clearQuest);
    }

    public void addSession(MobCollectionSession session) {
        getMobCollectionSessions().put(session.getSessionId(), session);
    }

    public MobCollectionSession getSession(int session) {
        return getMobCollectionSessions().get(session);
    }

    public void setRewardCount(int rewardCount) {
        this.rewardCount = rewardCount;
    }

    public int getRewardCount() {
        return rewardCount;
    }

    @Override
    public String toString() {
        return "MobCollectionRegion{" +
                "regionId=" + regionId +
                ", recordId=" + recordId +
                ", rewardId=" + rewardId +
                '}';
    }
}
