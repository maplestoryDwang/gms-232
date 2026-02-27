package dwang.script.py.api;

import dwang.script.DwangScriptBaseApi;
import net.swordie.ms.client.character.Char;
import net.swordie.ms.connection.packet.GiantBossFieldPacket;
import net.swordie.ms.connection.packet.UserLocal;
import net.swordie.ms.connection.packet.field.FieldPacket;
import net.swordie.ms.enums.ObstacleAtomCreateType;
import net.swordie.ms.enums.ObstacleAtomEnum;
import net.swordie.ms.handlers.executors.EventManager;
import net.swordie.ms.scripts.ScriptType;
import net.swordie.ms.util.Position;
import net.swordie.ms.util.Rect;
import net.swordie.ms.util.Util;
import net.swordie.ms.world.field.ClockPacket;
import net.swordie.ms.world.field.Field;
import net.swordie.ms.world.field.Foothold;
import net.swordie.ms.world.field.bosses.gollux.GolluxMiniMapFieldClearType;
import net.swordie.ms.world.field.instance.Instance;
import net.swordie.ms.world.field.obstacleatom.ObstacleAtomFactory;
import net.swordie.ms.world.field.obstacleatom.ObstacleAtomInfo;
import net.swordie.ms.world.field.obstacleatom.ObstacleInRowInfo;
import net.swordie.ms.world.field.obstacleatom.ObstacleRadianInfo;

import java.util.*;
import java.util.concurrent.ScheduledFuture;

/**
 * @author dwang
 * @version 1.0.0
 * @Title
 * @ClassName PyBossAPI.java
 * @Description TODO
 * @createTime 2026-02-27 16:59
 */

public interface PyBossAPI extends DwangScriptBaseApi {

    
    default void setDeathCount(int deathCount) {
        Instance info = getChr().getInstance();
        if (info == null) {
            getChr().setDeathCount(deathCount);
            getChr().write(UserLocal.deathCountInfo(deathCount));
        } else {
            for (Char chr : info.getChars()) {
                chr.setDeathCount(deathCount);
                chr.write(UserLocal.deathCountInfo(deathCount));
            }
        }
    }

    default void setDeathCount2(int deathCount) {
        Instance info = getChr().getInstance();
        if (info == null) {
            getChr().setDeathCount(deathCount);
            getChr().write(UserLocal.deathCountInfo2(deathCount));
        } else {
            for (Char chr : info.getChars()) {
                chr.setDeathCount(deathCount);
                chr.write(UserLocal.deathCountInfo2(deathCount));
            }
        }
    }

    default void createObstacleAtom(ObstacleAtomEnum oae, int key, int damage, int velocity, int amount, int proc) {
        createObstacleAtom(oae, key, damage, velocity, 0, amount, proc);
    }

    
    default void createObstacleAtom(ObstacleAtomEnum oae, int key, int damage, int velocity, int angle, int amount, int proc) {
        Field field = getField();
        var fieldInfo = field.getInfo();
        int xLeft = fieldInfo.getVrLeft();
        int yTop = fieldInfo.getVrTop();

        ObstacleInRowInfo obstacleInRowInfo = new ObstacleInRowInfo(4, false, 5000, 0, 0, 0);
        ObstacleRadianInfo obstacleRadianInfo = new ObstacleRadianInfo(4, 0, 0, 0, 0);
        Set<ObstacleAtomInfo> obstacleAtomInfosSet = new HashSet<>();

        for (int i = 0; i < amount; i++) {
            if (Util.succeedProp(proc)) {
                int randomX = new Random().nextInt(fieldInfo.getWidth()) + xLeft;
                Position position = new Position(randomX, yTop);
                Foothold foothold = field.findFootHoldBelow(position);
                if (foothold != null) {
                    int footholdY = foothold.getYFromX(position.getX());
                    int height = position.getY() - footholdY;
                    height = height < 0 ? -height : height;

                    obstacleAtomInfosSet.add(new ObstacleAtomInfo(oae.getType(), key, position, new Position(), oae.getHitBox(),
                            damage, 0, 0, height, 0, velocity, height, angle));
                }
            }
        }

        field.broadcastPacket(FieldPacket.createObstacle(ObstacleAtomCreateType.NORMAL, obstacleInRowInfo, obstacleRadianInfo, obstacleAtomInfosSet));
    }

    default void createObstacleAtomToFoothold(ObstacleAtomEnum oae, Rect allowedFhsRect, int damage, int velocity, int angle, int amount, int chance) {
        var oact = ObstacleAtomCreateType.NORMAL;

        ObstacleInRowInfo oiri = null;
        ObstacleRadianInfo ori = null;

        var field = getField();
        if (field == null) {
            return;
        }
        var allowedFhs = field.getNonWallFootholdsWithinRect(allowedFhsRect);

        Set<ObstacleAtomInfo> atomInfos = ObstacleAtomFactory.createObstacleAtoms(oae, allowedFhs,
                field.getInfo().getVrTop(), damage, velocity, angle, chance, amount);

        getChr().write(FieldPacket.createObstacle(oact, oiri, ori, atomInfos));
    }

    
    default void stopFieldEvents() {
        var events = getEvents();
        if (events.size() <= 0) {
            return;
        }

        var removedTimers = new HashSet<ScheduledFuture>();
        for (var entry : events.entrySet()) {
            var st = entry.getKey();
            var isFieldEvent = entry.getValue();
            if (isFieldEvent) {
                EventManager.stopTimer(st);
                removedTimers.add(st);
            }
        }

        for (var st : removedTimers) {
            events.remove(st);
        }
    }

    default void stopEvents() {
        var events = getEvents();
        for (ScheduledFuture st : events.keySet()) {
            EventManager.stopTimer(st);
        }
        events.clear();
        Field field = getField();
        Arrays.stream(ScriptType.values()).forEach(this::stop);
        if (field != null) {
            field.broadcastPacket(FieldPacket.clock(ClockPacket.removeClock()));
        }
        var chr = getChr();
        if (chr != null) {
            chr.write(FieldPacket.updateTemporarySkillBar(0)); // resets special skill bar
            chr.getTemporaryStatManager().removeStatsBySkill(237); // Damien Stigma
        }
    }

    private Map<ScheduledFuture, Boolean> getEvents() {
        return getInitData().getEvents();
    }

    default void addEvent(ScheduledFuture event) {
        addEvent(event, false);
    }

    default void addEvent(ScheduledFuture event, boolean isFieldEvent) {
        getEvents().put(event, isFieldEvent);
    }

    default void showGolluxMiniMap() {
        List<Integer> fieldIdList = Arrays.asList(
                863010100,    // Road to Gollux

                863010200,    // Lower Right leg
                863010210,    // Upper Right Leg
                863010220,    // Lower Left Leg
                863010230,    // Upper Left Leg
                863010240,    // Abdomen

                863010300,    // Lower Left Torso
                863010310,    // Upper Left Torso
                863010320,    // Upper Right Arm
                863010330,    // Right Shoulder

                863010400,    // Lower Right Torso
                863010410,    // Upper Right Torso
                863010420,    // Upper Left Arm
                863010430,    // Left Shoulder

                863010500,    // Heart

                863010600    // Head
        );
        Map<String, GolluxMiniMapFieldClearType> gFieldMap = new HashMap<>();
        gFieldMap.put("clearType", GolluxMiniMapFieldClearType.Defeated);

        for (int gFieldId : fieldIdList) {
            Field gField = getChr().getInstance().getFields().get(gFieldId);
            if (gField == null) {
                continue;
            }

            if (gField.hasProperty("Killed") && (boolean) gField.getProperty("Killed")) {
                gFieldMap.put(gFieldId + "", GolluxMiniMapFieldClearType.Defeated);
            } else if (gField.hasProperty("Spawned") && (boolean) gField.getProperty("Spawned")) {
                gFieldMap.put(gFieldId + "", GolluxMiniMapFieldClearType.Attacked);
            } else {
                gFieldMap.put(gFieldId + "", GolluxMiniMapFieldClearType.Unvisited);
            }
        }

        getChr().getInstance().broadcast(GiantBossFieldPacket.golluxMiniMap(gFieldMap));
    }

    default void golluxPortalOpen(String happeningName) {
        getField().broadcastPacket(GiantBossFieldPacket.golluxPortalOpen(happeningName));
    }
}
