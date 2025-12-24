package net.swordie.ms.loaders.containerclasses.achievement;

public class AchievementInfo {

    private int id;
    private String name;
    private int score;
    private String desc;

    public AchievementInfo(int id) {
        this.id = id;
    }

    public int getId() {
        return id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }

    public void setScore(int score) {
        this.score = score;
    }

    public int getScore() {
        return score;
    }

    public void setDesc(String desc) {
        this.desc = desc;
    }

    public String getDesc() {
        return desc;
    }
}
