package net.swordie.ms.loaders.containerclasses.achievement;

import net.swordie.ms.client.character.achievement.AchievementType;

public class AchievementMission {
    private String name;
    private AchievementType type;

    public void setName(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }

    public void setType(AchievementType type) {
        this.type = type;
    }

    public AchievementType getType() {
        return type;
    }
}
