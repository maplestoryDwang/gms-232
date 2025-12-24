package net.swordie.ms.handlers.executors;

import net.swordie.ms.util.Util;

import java.util.concurrent.Callable;

public class DebuggableCallable<V> implements Callable<V> {

    private final Callable<V> callable;
    private final String initiator;

    public DebuggableCallable(Callable<V> callable, int stackframePositionForDebug) {
        this.callable = callable;
        initiator = Util.getCallerMethod(stackframePositionForDebug);
    }

    @Override
    public V call() throws Exception {
        return callable.call();
    }

    public Callable<V> getCallable() {
        return callable;
    }

    @Override
    public String toString() {
        return "DebuggableCallable{" +
                "initiator='" + initiator + '\'' +
                '}';
    }

}
