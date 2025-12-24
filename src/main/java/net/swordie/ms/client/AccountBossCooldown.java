package net.swordie.ms.client;

import net.swordie.ms.connection.db.TrackedObject;
import net.swordie.ms.enums.BossCooldown;
import net.swordie.ms.util.FileTime;

import java.util.Objects;

public class AccountBossCooldown extends TrackedObject implements Comparable {
    private long id;

    private BossCooldown bossCooldown;

    private FileTime nextEntryTime;

    public AccountBossCooldown() {
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public BossCooldown getBossCooldown() {
        return bossCooldown;
    }

    public void setBossCooldown(BossCooldown bossCooldown) {
        this.bossCooldown = bossCooldown;
    }

    public FileTime getNextEntryTime() {
        return nextEntryTime;
    }

    public void setNextEntryTime(FileTime nextEntryTime) {
        this.nextEntryTime = nextEntryTime;
    }

    @Override
    public int getTransactionalHash() {
        return Objects.hash(bossCooldown, nextEntryTime);
    }

    @Override
    public int compareTo(Object o) {
        var otherCd = ((AccountBossCooldown) o);

        return bossCooldown.toString().compareToIgnoreCase(otherCd.getBossCooldown().toString());
    }
}
