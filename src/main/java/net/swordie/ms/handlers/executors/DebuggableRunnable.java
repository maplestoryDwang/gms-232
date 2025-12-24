package net.swordie.ms.handlers.executors;

import net.swordie.ms.util.Util;

public class DebuggableRunnable implements Runnable {

    private final Runnable runnable;
    private final String initiator;

    public DebuggableRunnable(Runnable runnable, int stackframePositionForDebug) {
        this.runnable = runnable;
        initiator = Util.getCallerMethod(stackframePositionForDebug);
    }

    @Override
    public void run() {
        runnable.run();
    }

    @Override
    public String toString() {
        return "DebuggableRunnable{" +
                "initiator='" + initiator + '\'' +
                '}';
    }
}
