package net.swordie.ms.client.dailies;

import net.swordie.ms.connection.db.TrackedObject;
import net.swordie.ms.enums.DailyEntry;
import net.swordie.ms.util.FileTime;

import java.util.Objects;

public class ContentReset extends TrackedObject {
    private long id = 0;
    private DailyEntry dailyEntry;
    private FileTime startDate;

    public ContentReset() {
    }

    public ContentReset(DailyEntry dailyEntry) {
        this.dailyEntry = dailyEntry;

        var time = FileTime.fromYYMMDDHHMMSS("220421235000").toLocalDateTime(); //21st of april 2022, at 23.50PM, put this 10 min before SSB rotation so that they both reset on friday if weekly

        var curTime = FileTime.currentTime().toLocalDateTime();
        var dailyEntryDays = dailyEntry.getDaysPerReset();
        //get the latest reset time
        while (time.plusDays(dailyEntryDays).isBefore(curTime)) {
            time = time.plusDays(dailyEntryDays);
        }

        this.startDate = FileTime.fromDate(time);
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    @Override
    public int getTransactionalHash() {
        return Objects.hash(dailyEntry, startDate);
    }

    public DailyEntry getDailyEntry() {
        return dailyEntry;
    }

    public void setDailyEntry(DailyEntry dailyEntry) {
        this.dailyEntry = dailyEntry;
    }

    public FileTime getStartDate() {
        return startDate;
    }

    public void setStartDate(FileTime startDate) {
        this.startDate = startDate;
    }

}
