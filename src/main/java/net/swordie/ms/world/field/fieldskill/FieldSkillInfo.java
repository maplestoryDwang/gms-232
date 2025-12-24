package net.swordie.ms.world.field.fieldskill;

import net.swordie.ms.util.Position;
import net.swordie.ms.util.Rect;

/**
 * Created on 02/08/2021.
 *
 * @author Asura
 */
public class FieldSkillInfo {
    private String objName, objName2;
    private int angleMax, angleMin;
    private int attackDelay;
    private int duration;
    private int interval;
    private int set;
    private int rotation;
    private Rect rect;
    private Position position;
    private boolean flip;
    private int z;
    private int startX, hitX;
    private int yFromFieldTop;

    public String getObjName() {
        return objName;
    }

    public void setObjName(String objName) {
        this.objName = objName;
    }

    public String getObjName2() {
        return objName2;
    }

    public void setObjName2(String objName2) {
        this.objName2 = objName2;
    }

    public int getAngleMax() {
        return angleMax;
    }

    public void setAngleMax(int angleMax) {
        this.angleMax = angleMax;
    }

    public int getAngleMin() {
        return angleMin;
    }

    public void setAngleMin(int angleMin) {
        this.angleMin = angleMin;
    }

    public int getAttackDelay() {
        return attackDelay;
    }

    public void setAttackDelay(int attackDelay) {
        this.attackDelay = attackDelay;
    }

    public int getDuration() {
        return duration;
    }

    public void setDuration(int duration) {
        this.duration = duration;
    }

    public int getInterval() {
        return interval;
    }

    public void setInterval(int interval) {
        this.interval = interval;
    }

    public int getSet() {
        return set;
    }

    public void setSet(int set) {
        this.set = set;
    }

    public int getRotation() {
        return rotation;
    }

    public void setRotation(int rotation) {
        this.rotation = rotation;
    }

    public int getStartX() {
        return startX;
    }

    public void setStartX(int startX) {
        this.startX = startX;
    }

    public int getHitX() {
        return hitX;
    }

    public void setHitX(int hitX) {
        this.hitX = hitX;
    }

    public int getyFromFieldTop() {
        return yFromFieldTop;
    }

    public void setyFromFieldTop(int yFromFieldTop) {
        this.yFromFieldTop = yFromFieldTop;
    }

    public Rect getRect() {
        return rect;
    }

    public void setRect(Rect rect) {
        this.rect = rect;
    }

    public Position getPosition() {
        return position;
    }

    public void setPosition(Position position) {
        this.position = position;
    }

    public boolean isFlip() {
        return flip;
    }

    public void setFlip(boolean flip) {
        this.flip = flip;
    }

    public int getZ() {
        return z;
    }

    public void setZ(int z) {
        this.z = z;
    }
}
