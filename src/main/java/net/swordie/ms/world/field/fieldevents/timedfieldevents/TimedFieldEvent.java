package net.swordie.ms.world.field.fieldevents.timedfieldevents;

import net.swordie.ms.handlers.executors.EventManager;
import net.swordie.ms.world.field.Field;
import net.swordie.ms.world.field.fieldevents.FieldEvent;

import java.util.concurrent.ScheduledFuture;
import java.util.concurrent.TimeUnit;

/**
 * Created on 08/02/2022.
 *
 * @author Asura
 */
public abstract class TimedFieldEvent extends FieldEvent {

    private int timeLimit;
    private ScheduledFuture destroyTimer;
    private long endTime;

    public TimedFieldEvent(Field field, int timeS) {
        super(field);
        timeLimit = timeS;
    }

    protected ScheduledFuture getDestroyTimer() {
        return destroyTimer;
    }

    protected long getEndTime() {
        return endTime;
    }

    @Override
    public boolean setup() {
        if (!super.setup()) return false;

        destroyTimer = EventManager.addEvent(this::destroy, timeLimit, TimeUnit.SECONDS);
        endTime = System.currentTimeMillis() + (timeLimit * 1_000L);
        return true;
    }

    @Override
    public void destroy() {
        EventManager.stopTimer(getDestroyTimer());

        super.destroy();
    }
}
