package dwang.script.py.api;

import dwang.script.DwangScriptBaseApi;
import net.swordie.ms.connection.packet.InGameDirectionEvent;
import net.swordie.ms.connection.packet.UserLocal;
import net.swordie.ms.enums.ForcedInputType;
import net.swordie.ms.life.npc.NpcMessageType;
import net.swordie.ms.util.Position;

/**
 * @author dwang
 * @version 1.0.0
 * @Title
 * @ClassName PyInGameDirectionEventAPI.java
 * @Description TODO
 * @createTime 2026-02-27 17:00
 */

public interface PyInGameDirectionEventAPI extends PyNPCAPI {

    public static final String INTENDED_NPE_MSG = "Intended NPE by forceful script stop.";

    default int moveCamera(boolean back, int speed, int x, int y) {

        getInitData(). getNpcScriptInfo().setMessageType(NpcMessageType.AskIngameDirection);
        getChr().write(UserLocal.inGameDirectionEvent(InGameDirectionEvent.cameraMove(back, speed, new Position(x, y))));
        Object response = null;
        var lastActiveScriptType = getLastActiveScriptType();
        if (getInitData().isActive(lastActiveScriptType)) {
            response = getScriptInfoByType(lastActiveScriptType).awaitResponse();
        }
        if (response == null) {
            throw new NullPointerException(INTENDED_NPE_MSG);
        }
        return (int) response;
    }

    default void moveCamera(int speed, int x, int y) {
        moveCamera(false, speed, x, y);
    }

    default void moveCameraBack(int speed) {
        moveCamera(true, speed, getChr().getPosition().getX(), getChr().getPosition().getY());
    }

    default void zoomCameraNoResponse(int time, int scale, int timePos, int x, int y) {
        getChr().write(UserLocal.inGameDirectionEvent(InGameDirectionEvent.cameraZoom(time, scale, timePos, new Position(x, y))));
    }

    default int zoomCamera(int time, int scale, int timePos, int x, int y) {
        getInitData(). getNpcScriptInfo().setMessageType(NpcMessageType.AskIngameDirection);
        getChr().write(UserLocal.inGameDirectionEvent(InGameDirectionEvent.cameraZoom(time, scale, timePos, new Position(x, y))));
        Object response = null;
        var lastActiveScriptType = getLastActiveScriptType();
        if (getInitData().isActive(lastActiveScriptType)) {
            response = getScriptInfoByType(lastActiveScriptType).awaitResponse();
        }
        if (response == null) {
            throw new NullPointerException(INTENDED_NPE_MSG);
        }
        return (int) response;
    }

    
    default int zoomCamera(int inZoomDuration, int scale, int x, int y) {
        getInitData(). getNpcScriptInfo().setMessageType(NpcMessageType.AskIngameDirection);
        getChr().write(UserLocal.inGameDirectionEvent(InGameDirectionEvent.cameraZoom(inZoomDuration, scale, 1000, new Position(x, y))));
        Object response = null;
        var lastActiveScriptType = getLastActiveScriptType();
        if (getInitData().isActive(lastActiveScriptType)) {
            response = getScriptInfoByType(lastActiveScriptType).awaitResponse();
        }
        if (response == null) {
            throw new NullPointerException(INTENDED_NPE_MSG);
        }
        return (int) response;
    }

    default void zoomCameraNoResponse(int zoomInDuration, int scale, int x, int y) {
        getChr().write(UserLocal.inGameDirectionEvent(InGameDirectionEvent.cameraZoom(zoomInDuration, scale, 1000, new Position(x, y))));
    }

    
    default void resetCamera() {
        getChr().write(UserLocal.inGameDirectionEvent(InGameDirectionEvent.cameraOnCharacter(0))); // 0 resets the Camera
    }

    default void setCameraOnNpc(int npcTemplateId) {
        getChr().write(UserLocal.inGameDirectionEvent(InGameDirectionEvent.cameraOnCharacter(npcTemplateId)));
    }

    
    default int sendDelay(int delay) {
        getInitData(). getNpcScriptInfo().setMessageType(NpcMessageType.AskIngameDirection);
        getChr().write(UserLocal.inGameDirectionEvent(InGameDirectionEvent.delay(delay)));
        Object response = null;
        var lastActiveScriptType = getLastActiveScriptType();
        if (getInitData().isActive(lastActiveScriptType)) {
            response = getScriptInfoByType(lastActiveScriptType).awaitResponse();
        }
        if (response == null) {
            throw new NullPointerException(INTENDED_NPE_MSG);
        }
        return (int) response;
    }

    
    default void doEventAndSendDelay(int delay, String methodName, Object... args) {
        invoke(getChr().getScriptManager(), methodName, args);
        sendDelay(delay);
    }

    
    default void forcedMove(boolean left, int distance) {
        getChr().write(UserLocal.inGameDirectionEvent(InGameDirectionEvent.forcedMove(left, distance)));
    }

    
    default void forcedFlip(boolean left) {
        getChr().write(UserLocal.inGameDirectionEvent(InGameDirectionEvent.forcedFlip(left)));
    }

    
    default void forcedAction(int type, int duration) {
        getChr().write(UserLocal.inGameDirectionEvent(InGameDirectionEvent.forcedAction(type, duration)));
    }

    
    default void forcedInput(int type) {
        ForcedInputType fit = ForcedInputType.getByVal(type);
        if (fit == null) {
            log.error(String.format("Unknown Forced Input Type %d", type));
            return;
        }
        getChr().write(UserLocal.inGameDirectionEvent(InGameDirectionEvent.forcedInput(type)));
    }

    default void patternInputRequest(String pattern, int act, int requestCount, int time) {
        getChr().write(UserLocal.inGameDirectionEvent(InGameDirectionEvent.patternInputRequest(pattern, act, requestCount, time)));
    }

    
    default void hideUser(boolean hide) {
        getChr().write(UserLocal.inGameDirectionEvent(InGameDirectionEvent.vansheeMode(hide)));
    }

    default void showEffect(String path, int duration, int x, int y) {
        showEffect(path, duration, x, y, 0, 0, true, 0);
    }

    
    default void showEffect(String path, int duration, int x, int y, int z, int npcIdForExtend, boolean onUser, int idk2) {
        getChr().write(UserLocal.inGameDirectionEvent(InGameDirectionEvent.effectPlay(path, duration, new Position(x, y), z, npcIdForExtend, onUser, idk2)));
    }

    default void showEffectOnPosition(String path, int duration, int x, int y) {
        getChr().write(UserLocal.inGameDirectionEvent(InGameDirectionEvent.effectPlay(path, duration,
                new Position(x, y), 0, 1, false, 0)));
    }

    default void showBalloonMsgOnNpc(String path, int duration, int x, int y, int templateID) {
        int objectID = getNpcObjectIdByTemplateId(templateID);
        if (objectID == 0) return;
        getChr().write(UserLocal.inGameDirectionEvent(InGameDirectionEvent.effectPlay(path, duration,
                new Position(x, y), 0, objectID, false, 0)));
    }

    default void showBalloonMsgOnNpc(String path, int duration, int templateID) {
        showBalloonMsgOnNpc(path, duration, 0, -100, templateID);
    }

    default void showNpcEffectOnPosition(String path, int x, int y, int templateID) {
        int objectID = getNpcObjectIdByTemplateId(templateID);
        if (objectID == 0) return;
        getChr().write(UserLocal.inGameDirectionEvent(InGameDirectionEvent.effectPlay(path, 0,
                new Position(x, y), 0, objectID, false, 0)));
    }

    default void showBalloonMsg(String path, int duration) {
        getChr().write(UserLocal.inGameDirectionEvent(InGameDirectionEvent.effectPlay(path, duration,
                new Position(0, -100), 0, 0, true, 0)));
    }

    default int sayMonologue(String text, boolean isEnd) {
        getInitData(). getNpcScriptInfo().setMessageType(NpcMessageType.Monologue);
        getChr().write(UserLocal.inGameDirectionEvent(InGameDirectionEvent.monologue(text, isEnd)));
        Object response = null;
        var lastActiveScriptType = getLastActiveScriptType();
        if (getInitData().isActive(lastActiveScriptType)) {
            response = getScriptInfoByType(lastActiveScriptType).awaitResponse();
        }
        if (response == null) {
            throw new NullPointerException(INTENDED_NPE_MSG);
        }
        return (int) response;
    }

    default void avatarLookSet(int[] equipIDs) {
        getChr().write(UserLocal.inGameDirectionEvent(InGameDirectionEvent.avatarLookSet(equipIDs)));
    }

    default void removeAdditionalEffect() {
        getChr().write(UserLocal.inGameDirectionEvent(InGameDirectionEvent.removeAdditionalEffect()));
    }

    default void faceOff(int faceItemID) {
        getChr().write(UserLocal.inGameDirectionEvent(InGameDirectionEvent.faceOff(faceItemID)));
    }

    default void monologueScroll(String msg, boolean stayModal, short align, int updateSpeedTime, int decTic) {
        getChr().write(UserLocal.inGameDirectionEvent(InGameDirectionEvent.monologueScroll(msg, stayModal, align,
                updateSpeedTime, decTic)));
    }
}
