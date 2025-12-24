package net.swordie.ms.client.surprisemission;

import net.swordie.ms.client.character.Char;
import net.swordie.ms.client.character.quest.Quest;
import net.swordie.ms.handlers.executors.EventManager;
import net.swordie.ms.util.FileTime;

import java.util.concurrent.ScheduledFuture;
import java.util.concurrent.TimeUnit;

/**
 * Created on 20/01/2022.
 *
 * @author Asura
 */
public class SurpriseMission {
    private final Quest currentSurpriseMission;
    private final Quest surpriseMissionInfo;
    private final FileTime startTime;
    private final FileTime expirationTime;
    private ScheduledFuture timer;

    public SurpriseMission(Char chr, Quest currentSurpriseMission, Quest surpriseMissionInfo, FileTime startTime, FileTime expirationTime) {
        this.currentSurpriseMission = currentSurpriseMission;
        this.surpriseMissionInfo = surpriseMissionInfo;
        this.startTime = startTime;
        this.expirationTime = expirationTime;
        var timeLimitMS = Math.abs(expirationTime.toMillis() - startTime.toMillis());
        this.timer = EventManager.addEvent(() -> SurpriseMissionModule.removeSurpriseMission(chr), timeLimitMS, TimeUnit.MILLISECONDS);
    }

    public Quest getCurrentSurpriseMission() {
        return currentSurpriseMission;
    }

    public Quest getSurpriseMissionInfo() {
        return surpriseMissionInfo;
    }

    public FileTime getStartTime() {
        return startTime;
    }

    public FileTime getExpirationTime() {
        return expirationTime;
    }

    public void stopTimer() {
        EventManager.stopTimer(timer);
    }
}
