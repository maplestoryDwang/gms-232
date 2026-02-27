package dwang.script.py.api;

import dwang.script.DwangScriptBaseApi;
import net.swordie.ms.connection.packet.field.FieldPacket;
import net.swordie.ms.enums.ClockType;
import net.swordie.ms.handlers.executors.EventManager;
import net.swordie.ms.world.field.Clock;
import net.swordie.ms.world.field.ClockPacket;

import java.util.concurrent.TimeUnit;

/**
 * @author dwang
 * @version 1.0.0
 * @Title
 * @ClassName PyClockAPI.java
 * @Description TODO
 * @createTime 2026-02-27 17:00
 */

public interface PyClockAPI extends PyBossAPI {
    default Clock createStopWatch(int seconds) {
        return new Clock(ClockType.StopWatch, getField(), seconds);
    }

    default Clock createStopWatchForChrOnly(int seconds) {
        if ( getInitData(). getChr() != null) {
            return new Clock(ClockType.StopWatch,  getInitData(). getChr(), seconds);
        }

        return null;
    }

    default Clock createClock(int seconds) {
        return new Clock(ClockType.SecondsClock, getField(), seconds);
    }

    default void createClock(int hours, int minutes, int seconds) {
        getChr().write(FieldPacket.clock(ClockPacket.hmsClock((byte) hours, (byte) minutes, (byte) seconds)));
        addEvent(EventManager.addEvent(this::removeClock, seconds + minutes * 60 + hours * 3600, TimeUnit.SECONDS));
    }

    default void removeClock() {
        getChr().write(FieldPacket.clock(ClockPacket.removeClock()));
    }

    default void createDojoClock(int seconds) {
        if (getChr().getInstance().getClockPacket() == null) {
            getChr().getInstance().setDojoTimer(seconds);
            getChr().getInstance().getField(925070000).setProperty("StartTime", System.currentTimeMillis());
            getChr().getInstance().setForcedReturn(925020002);
        }
    }

    default void setDojoClockPaused(boolean isPaused) {
        getChr().write(FieldPacket.clock(ClockPacket.pauseTimer(false, 0)));
    }

    default String getCurClockTime() {
        if (getChr().getInstance().getClockPacket() != null) {
            long time = getChr().getInstance().getClockPacket().getCurDuration();
            long seconds = (time / 1000) % 60;
            long minutes = ((time / 1000) - seconds) / 60;
            return String.format("%d minutes and %d seconds", minutes, seconds);
        }
        return "";
    }

    default long getCurClockTimeSec() {
        long seconds = -1;
        if (getChr().getInstance().getClockPacket() != null) {
            long time = getChr().getInstance().getClockPacket().getCurDuration();
            seconds = (time / 1000);
        }
        return seconds;
    }
}
