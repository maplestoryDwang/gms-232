package net.swordie.ms.world.field.obstacleatom;

import net.swordie.ms.connection.OutPacket;
import net.swordie.ms.enums.ObstacleAtomEnum;
import net.swordie.ms.util.Position;
import net.swordie.ms.util.Rect;

/**
 * Created on 5/30/2018.
 */
public class ObstacleAtomInfo {
    private int atomType;
    private int key;
    private Position startPos;
    private Position endPos;
    private int hitBoxRange;
    private int trueDamR;
    private int mobDamR;
    private int createDelay;
    private int height;
    private int vPerSec;
    private int maxP;
    private int length;
    private int angle;
    private ObstacleDiagonalInfo obstacleDiagonalInfo;

    public ObstacleAtomInfo() {
    }

    public ObstacleAtomInfo(int atomType, int key, Position startPos, Position endPos, int hitBoxRange, int trueDamR,
                            int mobDamR, int createDelay, int height, int vPerSec, int maxP, int length, int angle) {
        this.atomType = atomType;
        this.key = key;
        this.startPos = startPos;
        this.endPos = endPos;
        this.hitBoxRange = hitBoxRange;
        this.trueDamR = trueDamR;
        this.mobDamR = mobDamR;
        this.createDelay = createDelay;
        this.height = height;
        this.vPerSec = vPerSec;
        this.maxP = maxP;
        this.length = length;
        this.angle = angle;
    }

    public ObstacleAtomInfo(ObstacleAtomEnum atomType, Position startPos, Position endPos, int trueDamR, int mobDamR,
                            int createDelay, int vPerSec, int maxP, int angle) {
        this(atomType.getType(),
                0,
                startPos,
                endPos,
                atomType.getHitBox(),
                trueDamR,
                mobDamR,
                createDelay,
                Math.abs(startPos.getY() - endPos.getY()),
                vPerSec,
                maxP,
                Math.abs(startPos.getY() - endPos.getY()),
                angle
        );
    }

    public void encode(OutPacket outPacket) {
        outPacket.encodeInt(getAtomType());
        outPacket.encodeInt(getAtomType());
//        outPacket.encodeInt(getKey()); // use AtomType as key to easily check atom type without needing to save/lookup
        outPacket.encodeInt(getStartPos().getX());
        outPacket.encodeInt(getStartPos().getY());
        outPacket.encodeInt(getEndPos().getX());
        outPacket.encodeInt(getEndPos().getY());
        outPacket.encodeInt(getHitBoxRange());
        outPacket.encodeByte(0); //new 232
        outPacket.encodeRectInt(new Rect(-hitBoxRange, -hitBoxRange, hitBoxRange, hitBoxRange));
        outPacket.encodeInt(getTrueDamR());
        outPacket.encodeInt(getMobDamR());
        outPacket.encodeInt(getCreateDelay());
        outPacket.encodeInt(getHeight());
        outPacket.encodeInt(getvPerSec());
        outPacket.encodeInt(getMaxP());
        outPacket.encodeInt(getLength());
        outPacket.encodeInt(getAngle());
    }

    public int getAtomType() {
        return atomType;
    }

    public void setAtomType(int atomType) {
        this.atomType = atomType;
    }

    public int getKey() {
        return key;
    }

    public void setKey(int key) {
        this.key = key;
    }

    public Position getStartPos() {
        return startPos;
    }

    public void setStartPos(Position startPos) {
        this.startPos = startPos;
    }

    public Position getEndPos() {
        return endPos;
    }

    public void setEndPos(Position endPos) {
        this.endPos = endPos;
    }

    public int getHitBoxRange() {
        return hitBoxRange;
    }

    public void setHitBoxRange(int hitBoxRange) {
        this.hitBoxRange = hitBoxRange;
    }

    public int getTrueDamR() {
        return trueDamR;
    }

    public void setTrueDamR(int trueDamR) {
        this.trueDamR = trueDamR;
    }

    public int getMobDamR() {
        return mobDamR;
    }

    public void setMobDamR(int mobDamR) {
        this.mobDamR = mobDamR;
    }

    public int getCreateDelay() {
        return createDelay;
    }

    public void setCreateDelay(int createDelay) {
        this.createDelay = createDelay;
    }

    public int getHeight() {
        return height;
    }

    public void setHeight(int height) {
        this.height = height;
    }

    public int getvPerSec() {
        return vPerSec;
    }

    public void setvPerSec(int vPerSec) {
        this.vPerSec = vPerSec;
    }

    public int getMaxP() {
        return maxP;
    }

    public void setMaxP(int maxP) {
        this.maxP = maxP;
    }

    public int getLength() {
        return length;
    }

    public void setLength(int length) {
        this.length = length;
    }

    public int getAngle() {
        return angle;
    }

    public void setAngle(int angle) {
        this.angle = angle;
    }

    public ObstacleDiagonalInfo getObstacleDiagonalInfo() {
        return obstacleDiagonalInfo;
    }

    public void setObstacleDiagonalInfo(ObstacleDiagonalInfo obstacleDiagonalInfo) {
        this.obstacleDiagonalInfo = obstacleDiagonalInfo;
    }

    /**
     * Calculates the angle at which the ObstacleAtom must go to reach the wanted Ending Position.
     *
     * @param startPos Starting Position of the ObstacleAtom
     * @param endPos Ending Position of the ObstacleAtom
     * @return The angle the ObstacleAtom must travel to hit the wanted End Position.
     */
    public static double getAngleByPositions(Position startPos, Position endPos) {
        double width = startPos.getX() - endPos.getX();
        width = width < 0 ? -width : width;
        double hypotenuse = getLengthByPositions(startPos, endPos);

        return Math.asin(width/hypotenuse);
    }

    /**
     * Calculates the Length the ObstacleAtom must travel to reach the wanted Ending Position.
     *
     * @param startPos Starting Position of the ObstacleAtom
     * @param endPos Ending Position of the ObstacleAtom
     * @return The Length the obstacleAtom must travel to hit the wanted End Position.
     */
    public static double getLengthByPositions(Position startPos, Position endPos) {
        int height = startPos.getY() - endPos.getY();
        height = height < 0 ? -height : height;
        int width = startPos.getX() - endPos.getX();
        width = width < 0 ? -width : width;

        return Math.round(Math.sqrt(Math.round(Math.pow(height, 2)) + Math.round(Math.pow(width, 2))));
    }
}
