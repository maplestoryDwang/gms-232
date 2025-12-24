package net.swordie.ms.client.character.skills.atom.secondatom;

import net.swordie.ms.client.character.Char;
import net.swordie.ms.client.character.skills.atom.secondatom.secondatomstate.ISecondAtomState;
import net.swordie.ms.client.character.skills.atom.secondatom.secondatomstate.SecondAtomStateModule;
import net.swordie.ms.client.character.skills.atom.secondatom.secondatomstate.SecondAtomStateType;
import net.swordie.ms.client.character.skills.info.SecondAtomInfo;
import net.swordie.ms.client.jobs.flora.Adele;
import net.swordie.ms.connection.Encodable;
import net.swordie.ms.connection.OutPacket;
import net.swordie.ms.util.Position;
import net.swordie.ms.util.Util;

import java.util.ArrayList;
import java.util.List;

/**
 * Created on 02/06/2020.
 *
 * @author Asura
 */
public class SecondAtom implements Encodable {
    private int objectId;
    private int dataIndex; // defines which Template is used  Shards = 0 | Order = 7 | Infinity = 8
    private int key;
    private int chrId;
    private int targetId;
    private int source;
    private int createDelay, enableDelay;
    private int rotate;
    private int expire;
    private int customRotation;
    private int curAttackCount, attackableCount; // cur & max
    private boolean unkBool;
    private Position position;
    private List<Integer> customList = new ArrayList<>(); // Used in 'Order'  refers to starting Angle for each SecondAtom
    private int createTime;
    private int firstAngleRange;
    private int firstAngleStart;
    private int collisionCheck;
    private boolean localOnly;
    private boolean inAttackMode;
    private ISecondAtomState state;
    private int unk;

    public SecondAtom() {
        this.createTime = Util.getCurrentTime();
    }

    public SecondAtom(int objectId, int dataIndex, int key, int chrId, int targetId, int source, int createDelay, int enableDelay,
                      int rotate, int expire, int customRotation, int attackableCount,
                      Position position, List<Integer> customList) {
        this.objectId = objectId;
        this.dataIndex = dataIndex;
        this.key = key;
        this.chrId = chrId;
        this.targetId = targetId;
        this.source = source;
        this.createDelay = createDelay;
        this.enableDelay = enableDelay;
        this.rotate = rotate;
        this.expire = expire;
        this.customRotation = customRotation;
        this.attackableCount = attackableCount;
        this.position = position;
        this.customList = customList;
        this.createTime = Util.getCurrentTime();
    }

    public int getObjectId() {
        return objectId;
    }

    public void setObjectId(int objectId) {
        this.objectId = objectId;
    }

    public int getDataIndex() {
        return dataIndex;
    }

    public void setDataIndex(int dataIndex) {
        this.dataIndex = dataIndex;
    }

    public int getKey() {
        return key;
    }

    public void setKey(int key) {
        this.key = key;
    }

    public int getChrId() {
        return chrId;
    }

    public void setChrId(int chrId) {
        this.chrId = chrId;
    }

    public int getTargetId() {
        return targetId;
    }

    public void setTargetId(int targetId) {
        this.targetId = targetId;
    }

    public int getSource() {
        return source;
    }

    public void setSource(int source) {
        this.source = source;
    }

    public int getCreateDelay() {
        return createDelay;
    }

    public void setCreateDelay(int createDelay) {
        this.createDelay = createDelay;
    }

    public int getEnableDelay() {
        return enableDelay;
    }

    public void setEnableDelay(int enableDelay) {
        this.enableDelay = enableDelay;
    }

    public int getRotate() {
        return rotate;
    }

    public void setRotate(int rotate) {
        this.rotate = rotate;
    }

    public int getExpire() {
        return expire;
    }

    public void setExpire(int expire) {
        this.expire = expire;
    }

    public int getCustomRotation() {
        return customRotation;
    }

    public void setCustomRotation(int customRotation) {
        this.customRotation = customRotation;
    }

    public int getCurAttackCount() {
        return curAttackCount;
    }

    public void setCurAttackCount(int curAttackCount) {
        this.curAttackCount = curAttackCount;
    }

    public int getAttackableCount() {
        return attackableCount;
    }

    public void setAttackableCount(int attackableCount) {
        this.attackableCount = attackableCount;
    }

    public boolean hasAttacksLeft() {
        return getCurAttackCount() < getAttackableCount();
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

    public int getCreateTime() {
        return createTime;
    }

    public void setCreateTime(int createTime) {
        this.createTime = createTime;
    }

    public int getRemainingTime() {
        return (getCreateTime() + getExpire()) - Util.getCurrentTime();
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

    public boolean isInAttackMode() {
        return inAttackMode;
    }

    public void setInAttackMode(boolean inAttackMode) {
        this.inAttackMode = inAttackMode;
    }

    public ISecondAtomState getState() {
        return state;
    }

    public void setState(ISecondAtomState state) {
        this.state = state;
    }

    public SecondAtomStateType getStateType() {
        return SecondAtomStateModule.getTypeByState(getState());
    }

    public int getUnk() {
        return unk;
    }

    public void setUnk(int unk) {
        this.unk = unk;
    }

    public static SecondAtom createFromInfo(Char chr, int skillId, SecondAtomInfo sai) {
        var sa = new SecondAtom();

        // SecondAtom Owner Info
        sa.setObjectId(chr.getNewSecondAtomKey());
        sa.setChrId(chr.getId());
        sa.setKey(1);


        // SecondAtom Info
        sa.setSource(skillId);
        sa.setDataIndex(sai.getDataIndex());
        sa.setCreateDelay(sai.getCreateDelay());
        sa.setEnableDelay(sai.getEnableDelay());
        sa.setRotate(sai.getRotate());
        sa.setCustomRotation(sai.getRotate());

        sa.setFirstAngleRange(sai.getFirstAngleRange());
        sa.setFirstAngleStart(sai.getFirstAngleStart());

        sa.setExpire(sai.getExpire());
        sa.setAttackableCount(sai.getAttackableCount());
        sa.setCollisionCheck(sai.getCollisionCheck());
        sa.setPosition(chr.getPosition());

        sa.setCustomList(sai.getCustomList());


        // Broadcast Info
        sa.setLocalOnly(sai.isLocalOnly());


        return sa;
    }

    public void updateRemainingTime() {
        if (getSource() == Adele.ORDER || getSource() == Adele.INFINITE) {
            setExpire(Math.max(getRemainingTime(), 10));
        }
    }

    @Override
    public void encode(OutPacket outPacket) {
        outPacket.encodeInt(getObjectId());
        outPacket.encodeInt(1);
        outPacket.encodeInt(getDataIndex());
        outPacket.encodeInt(getKey());
        outPacket.encodeInt(getChrId());
        outPacket.encodeInt(getTargetId());
        outPacket.encodeInt(getCreateDelay()); //  create Delay
        outPacket.encodeInt(getEnableDelay()); // enable delay
        outPacket.encodeInt(getRotate());
        outPacket.encodeInt(getSource()); // skill Id

        // new 218
        outPacket.encodeInt(getFirstAngleRange());
        outPacket.encodeInt(getFirstAngleStart());
        // new 218

        outPacket.encodeInt(getExpire()); // expire
        outPacket.encodeInt(getCustomRotation());
        outPacket.encodeInt(getAttackableCount());
        outPacket.encodeInt(getCollisionCheck()); // collisionCheck
        outPacket.encodeInt(getUnk()); //  getSkillId() == 400031066 ? 0x3 : 0
        outPacket.encodePositionInt(getPosition());

        outPacket.encodeByte(isLocalOnly()); // new 218 | tile.getSkillId() == 400011119 ???

        var hasState = getState() != null;
        outPacket.encodeByte(hasState);
        if (hasState) {
            var stateValue = getStateType();
            outPacket.encodeInt(stateValue.getVal());

            getState().encode(this, outPacket); // in IDA this is the vftable call. Grabs impl of IState.
        }

        outPacket.encodeByte(0);

        outPacket.encodeInt(getCustomList().size()); // customSize
        for (int custom : getCustomList()) {
            outPacket.encodeInt(custom); // custom
        }
    }
}
