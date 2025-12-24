package net.swordie.ms.client.character.achievement;

import net.swordie.ms.util.FileTime;

public class AchievementMedal {

    private long id;

    private int medalId;
    private AchievementMedalState state;
    private FileTime unlockTime;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public int getMedalId() {
        return medalId;
    }

    public void setMedalId(int medalId) {
        this.medalId = medalId;
    }

    public AchievementMedalState getState() {
        return state;
    }

    public void setState(AchievementMedalState state) {
        this.state = state;
    }

    public FileTime getUnlockTime() {
        return unlockTime;
    }

    public void setUnlockTime(FileTime unlockTime) {
        this.unlockTime = unlockTime;
    }
}
