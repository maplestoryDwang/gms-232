package net.swordie.ms.client.character.items;

import net.swordie.ms.util.FileTime;

public class PowerCrystal {
    private int bossId;
    private int playerCount;
    private long price;
    private long idk1;
    private FileTime obtainedDate;

    public PowerCrystal(int bossId, int playerCount, long price) {
        this.bossId = bossId;
        this.playerCount = playerCount;
        this.price = price;
        this.obtainedDate = FileTime.currentTime();
    }

    public PowerCrystal(int bossId, int playerCount, long price, FileTime obtainedDate) {
        this.bossId = bossId;
        this.playerCount = playerCount;
        this.price = price;
        this.obtainedDate = obtainedDate;
    }

    public int getBossId() {
        return bossId;
    }

    public int getPlayerCount() {
        return playerCount;
    }

    public long getPrice() {
        return price;
    }

    public long getIdk1() {
        return idk1;
    }

    public FileTime getObtainedDate() {
        return obtainedDate;
    }
}
