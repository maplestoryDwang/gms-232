package dwang.script.js.api.unwork;

import dwang.script.DwangScriptBaseApi;

public interface Reactor extends DwangScriptBaseApi {

    default void sendDestroyData(Object client) { }

    default void forceHitReactor(Character chr, int newState, int x, int y, int stance) { }

    default void packetSpawnReactor(Reactor reactor) { }

    default void getReactItem() { }

    default void packetReactorLeaveField(Reactor reactor) { }

    default void setEnableMove(int enableMove) { }

    default void getMap() { }

    default void setFacingDirection(int facingDirection) { }

    default void getDelay() { }


    default void isCustom() { }

    default void getArea() { }

    default void packetRemoveReactor(Reactor reactor) { }

    default void getReactorId() { }

    default void setDelay(int delay) { }

    default void packet反应堆_采集动作(int cid, int b1, int action, int time, int v1, int b2) { }

    default void packetTriggerReactor(Character chr, Reactor reactor, int stance) { }

    default void hitReactor(int charPos, int stance, Object c) { }

    default void getTouch() { }

    default void forceTrigger() { }

    default void sendSpawnData(Object client) { }

    default void getState() { }

    default void delayedDestroyReactor(int delay) { }

    default void getStats() { }

    default void setTimerActive(int timerActive) { }

    default void setCustom(int custom) { }

    default void getReactorType() { }

    default void forceStartReactor(Object c) { }

    default void delayedHitReactor(Object c, int delay) { }

    default void getName() { }

    default void isAlive() { }

    default void setState(int state) { }

    default void isTimerActive() { }

    default void setName(String name) { }

    default void forceHitReactor(Character chr, int newState) { }

    default void getFacingDirection() { }

    default void packet反应堆_要求延迟触发(int oid, int time) { }

    default void scheduleSetState(Character chr, int oldState, int newState, int delay) { }

    default void getType() { }

    default void setAlive(int alive) { }

    default void getEnableMove() { }

}
