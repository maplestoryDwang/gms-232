package net.swordie.ms.loaders.containerclasses.mobcollection;

import net.swordie.ms.util.container.Tuple;

import java.util.ArrayList;
import java.util.List;

public class MobCollectionGroup {
    private static final int MOB_PER_GROUP = 5;

    private int groupId;
    private int recordId;
    private int rewardId;
    private int explorationCycle;
    private int explorationReward;
    private List<Integer> mobs;
    private int rewardCount;

    public MobCollectionGroup() {
        mobs = new ArrayList<>();
    }

    public int getGroupId() {
        return groupId;
    }

    public void setGroupId(int groupId) {
        this.groupId = groupId;
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

    public int getExplorationCycle() {
        return explorationCycle;
    }

    public void setExplorationCycle(int explorationCycle) {
        this.explorationCycle = explorationCycle;
    }

    public int getExplorationReward() {
        return explorationReward;
    }

    public void setExplorationReward(int explorationReward) {
        this.explorationReward = explorationReward;
    }

    public List<Integer> getMobs() {
        return mobs;
    }

    public void setMobs(List<Integer> mobs) {
        this.mobs = mobs;
    }

    public void addMob(int mobTemplateId) {
        getMobs().add(mobTemplateId);
    }

    public void setRewardCount(int rewardCount) {
        this.rewardCount = rewardCount;
    }

    public int getRewardCount() {
        return rewardCount;
    }

    public Tuple<Integer, Integer> getRewardInfo() {
        return new Tuple<>(getRewardId(), getRewardCount());
    }

    @Override
    public String toString() {
        return "MobCollectionGroup{" +
                "groupId=" + groupId +
                ", recordId=" + recordId +
                ", rewardId=" + rewardId +
                '}';
    }
}
