package net.swordie.ms.world.field.instance.instancehelper;

import net.swordie.ms.handlers.executors.EventManager;
import net.swordie.ms.world.field.Field;
import net.swordie.ms.world.field.instance.Instance;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.ScheduledFuture;

/**
 * Created on 02/02/2022.
 *
 * @author Asura
 */
public class InstanceHelper extends InstanceEvents {
    private List<ScheduledFuture> timers = new ArrayList<>();

    private Instance instance;
    private int currentStage = 1; // stage should always start at 1

    private List<ScheduledFuture> getTimers() {
        return timers;
    }

    protected synchronized ScheduledFuture addTimer(ScheduledFuture sf) {
        getTimers().add(sf);
        return sf;
    }

    protected void stopTimers() {
        if (getTimers() == null) {
            return;
        }

        for (var timer : new ArrayList<>(getTimers())) {
            EventManager.stopTimer(timer);
        }
        getTimers().clear();
    }

    protected Instance getInstance() {
        return instance;
    }

    private void setInstance(Instance instance) {
        this.instance = instance;
    }

    protected int getCurrentStage() {
        return currentStage;
    }

    protected void setCurrentStage(int currentStage) {
        this.currentStage = currentStage;
    }

    protected void increaseStage() {
        increaseStage(1);
    }

    protected void increaseStage(int inc) {
        setCurrentStage(getCurrentStage() + inc);
    }

    protected int getNextStageDelay() {
        return 4000; // ms
    }

    protected Field getField() {
        return getInstance().getField(getInstance().getEnterFieldId());
    }

    /**
     * check that occurs after 'completeStage' and returns true if the instance has been finished and should be warped out.
     * @return
     */
    protected boolean finishedInstance() {
        return false;
    }

    /**
     * Will invoke 'startStage' after the specified delay.
     *
     * Perfect place to place effects that will happen before the actual stage starts
     */
    protected void startStagePreDelay() {
        addTimer(EventManager.addEvent(() -> startStage(), getNextStageDelay()));
    }

    /**
     * Starts the stage based on the current Stage
     */
    protected void startStage() {
        startStage(getCurrentStage());
    }

    /**
     * Starts the stage and prepares everything that has to be done for that stage
     * @param stageNumber
     */
    protected void startStage(int stageNumber) {

    }

    /**
     * Increases the stage and invokes the next stage. If instance has been finished will invoke 'completeInstance'
     */
    protected void completeStage() {
        increaseStage();
        if (finishedInstance()) {
            completeInstance();
        } else {
            startStagePreDelay();
        }
    }

    /**
     * The last stage has been completed and after the specified delay the instance will be cleared.
     *
     * Perfect place for effects such as congratulatory messages about completing the instance
     */
    protected void completeInstance() {
        addTimer(EventManager.addEvent(() -> clearInstance(), getNextStageDelay()));
    }

    /**
     * Clear instance by player actions (NOT TIMER)
     */
    protected void clearInstance() {
        clearInstance(true);
    }

    /**
     * Clear instance by Timer clearInstance = false
     * @param clearInstance
     */
    public void clearInstance(boolean clearInstance) {
        stopTimers();
        if (clearInstance) {
            getInstance().clear();
        }
    }

    /**
     * Starts the instance and immediately invokes the startStage after the specified delay.
     * @param instance
     */
    public void setup(Instance instance) {
        setInstance(instance);
        startStagePreDelay();
    }

    /**
     * On MobDeath check might have to ignore a few mobs. Such as escort mobs.
     * They are placed here
     * @return list of all template Ids to be ignored
     */
    protected List<Integer> getIgnoredMobs() {
        return new ArrayList<>();
    }
}
