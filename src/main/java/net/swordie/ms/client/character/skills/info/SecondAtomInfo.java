package net.swordie.ms.client.character.skills.info;

import net.swordie.ms.jwzlib.WzObject;
import net.swordie.ms.jwzlib.WzProperty;
import net.swordie.ms.util.Position;

import java.awt.*;
import java.io.IOException;
import java.io.RandomAccessFile;
import java.util.ArrayList;
import java.util.List;

/**
 * Created on 08/06/2020.
 *
 * @author Asura
 */
public class SecondAtomInfo {
    private int dataIndex; // acts as template Id
    private int attackableCount; // acts as max attack count
    private int enableDelay, createDelay;
    private int expire;
    private int rotate;
    private int groupEvent;
    private int firstAngleRange;
    private int firstAngleStart;
    private Position position = new Position();
    private List<Integer> customList = new ArrayList<>();
    private List<Position> extraPosList = new ArrayList<>();
    private int collisionCheck;
    private boolean localOnly;

    public SecondAtomInfo() {
    }

    public int getDataIndex() {
        return dataIndex;
    }

    public void setDataIndex(int dataIndex) {
        this.dataIndex = dataIndex;
    }

    public int getAttackableCount() {
        return attackableCount;
    }

    public void setAttackableCount(int attackableCount) {
        this.attackableCount = attackableCount;
    }

    public int getEnableDelay() {
        return enableDelay;
    }

    public void setEnableDelay(int enableDelay) {
        this.enableDelay = enableDelay;
    }

    public int getCreateDelay() {
        return createDelay;
    }

    public void setCreateDelay(int createDelay) {
        this.createDelay = createDelay;
    }

    public int getExpire() {
        return expire;
    }

    public void setExpire(int expire) {
        this.expire = expire;
    }

    public int getRotate() {
        return rotate;
    }

    public void setRotate(int rotate) {
        this.rotate = rotate;
    }

    public int getGroupEvent() {
        return groupEvent;
    }

    public void setGroupEvent(int groupEvent) {
        this.groupEvent = groupEvent;
    }

    public int getFirstAngleRange() {
        return firstAngleRange;
    }

    public void setFirstAngleRange(int firstAngleRange) {
        this.firstAngleRange = firstAngleRange;
    }

    public int getFirstAngleStart() {
        return firstAngleStart;
    }

    public void setFirstAngleStart(int firstAngleStart) {
        this.firstAngleStart = firstAngleStart;
    }

    public Position getPosition() {
        return position;
    }

    public void setPosition(Position position) {
        this.position = position;
    }

    public List<Integer> getCustomList() {
        return customList;
    }

    public void setCustomList(List<Integer> customList) {
        this.customList = customList;
    }

    public void addCustom(int custom) {
        getCustomList().add(custom);
    }

    public List<Position> getExtraPosList() {
        return extraPosList;
    }

    public void setExtraPosList(List<Position> extraPosList) {
        this.extraPosList = extraPosList;
    }

    public void addExtraPos(Position position) {
        getExtraPosList().add(position);
    }

    public int getCollisionCheck() {
        return collisionCheck;
    }

    public void setCollisionCheck(int collisionCheck) {
        this.collisionCheck = collisionCheck;
    }

    public boolean isLocalOnly() {
        return localOnly;
    }

    public void setLocalOnly(boolean localOnly) {
        this.localOnly = localOnly;
    }

    public void readSecondAtomInfo(WzObject<?, ?> atomNode) {
        setAttackableCount(((WzProperty) atomNode.getChild("attackableCount", 1)).getIntValue());
        setDataIndex(((WzProperty) atomNode.getChild("dataIndex", 0)).getIntValue());
        setCreateDelay(((WzProperty) atomNode.getChild("createDelay", 0)).getIntValue());
        setEnableDelay(((WzProperty) atomNode.getChild("enableDelay", 0)).getIntValue());
        setExpire(((WzProperty) atomNode.getChild("expire", 0)).getIntValue());
        if (atomNode.getChild("pos") != null) {
            setPosition(new Position(((WzProperty<Point>) atomNode.getChild("pos")).getValue()));
        }
        setRotate(((WzProperty) atomNode.getChild("rotate", 0)).getIntValue());
        setGroupEvent(((WzProperty) atomNode.getChild("groupEvent", 0)).getIntValue());
        setFirstAngleRange(((WzProperty) atomNode.getChild("firstAngleRange", 0)).getIntValue());
        setFirstAngleStart(((WzProperty) atomNode.getChild("firstAngleStart", 0)).getIntValue());
        setCollisionCheck(((WzProperty) atomNode.getChild("collisionCheck", 0)).getIntValue());
        setLocalOnly(((WzProperty) atomNode.getChild("localOnly", 0)).getIntValue() == 1);

        // custom
        WzObject<?, ?> customNode = atomNode.getChild("custom");
        if (customNode != null) {
            for (WzObject<?, ?> custom : customNode) {
                addCustom(((WzProperty) custom).getIntValue());
            }
        }

        // extraPos
        WzObject<?, ?> extraPosNode = atomNode.getChild("extraPos");
        if (extraPosNode != null) {
            for (WzObject<?, ?> extraPos : extraPosNode) {
                addExtraPos(new Position(((WzProperty<Point>) extraPos).getValue()));
            }
        }
    }

    public void read(RandomAccessFile raf) throws IOException {
        setAttackableCount(raf.readInt());
        setDataIndex(raf.readInt());
        setCreateDelay(raf.readInt());
        setEnableDelay(raf.readInt());
        setExpire(raf.readInt());
        setPosition(new Position(raf.readInt(), raf.readInt()));
        setRotate(raf.readInt());
        setGroupEvent(raf.readInt());
        setFirstAngleRange(raf.readInt());
        setFirstAngleStart(raf.readInt());
        setLocalOnly(raf.readBoolean());
        setCollisionCheck(raf.readInt());

        // custom
        int size = raf.readShort();
        for (int i = 0; i < size; i++) {
            addCustom(raf.readInt());
        }

        // extraPos
        size = raf.readShort();
        for (int i = 0; i < size; i++) {
            addExtraPos(new Position(raf.readInt(), raf.readInt()));
        }
    }

    public void write(RandomAccessFile raf) throws IOException {
        raf.writeInt(getAttackableCount());
        raf.writeInt(getDataIndex());
        raf.writeInt(getCreateDelay());
        raf.writeInt(getEnableDelay());
        raf.writeInt(getExpire());
        raf.writeInt(getPosition().getX());
        raf.writeInt(getPosition().getY());
        raf.writeInt(getRotate());
        raf.writeInt(getGroupEvent());
        raf.writeInt(getFirstAngleRange());
        raf.writeInt(getFirstAngleStart());
        raf.writeBoolean(isLocalOnly());
        raf.writeInt(getCollisionCheck());

        // custom
        raf.writeShort(getCustomList().size());
        for (int custom : getCustomList()) {
            raf.writeInt(custom);
        }

        // extraPos
        raf.writeShort(getExtraPosList().size());
        for (Position position : getExtraPosList()) {
            raf.writeInt(position.getX());
            raf.writeInt(position.getY());
        }
    }
}
