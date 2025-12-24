package net.swordie.ms.client.character.achievement;

import net.swordie.ms.util.FileTime;

public class Achievement {

    private long id;

    private int achievementId;
    private int[] completedSubMissions;
    private AchievementState state;
    private FileTime completionTime;
    private int count;
    private boolean rewardClaimed;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public int getAchievementId() {
        return achievementId;
    }

    public void setAchievementId(int achievementId) {
        this.achievementId = achievementId;
    }

    public int[] getCompletedSubMissions() {
        return completedSubMissions;
    }

    public void setCompletedSubMissions(int[] completedSubMissions) {
        this.completedSubMissions = completedSubMissions;
    }

    public AchievementState getState() {
        return state;
    }

    public void setState(AchievementState state) {
        this.state = state;
    }

    public FileTime getCompletionTime() {
        return completionTime;
    }

    public void setCompletionTime(FileTime completionTime) {
        this.completionTime = completionTime;
    }

    public boolean isRewardClaimed() {
        return rewardClaimed;
    }

    public void setRewardClaimed(boolean rewardClaimed) {
        this.rewardClaimed = rewardClaimed;
    }

    public int getCount() {
        return count;
    }

    public void setCount(int count) {
        this.count = count;
    }
}
