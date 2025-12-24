package net.swordie.ms.life;

import net.swordie.ms.client.character.Char;
import net.swordie.ms.connection.packet.ReactorPool;
import net.swordie.ms.constants.GameConstants;
import net.swordie.ms.enums.EnterType;
import net.swordie.ms.handlers.executors.EventManager;
import net.swordie.ms.loaders.ReactorData;
import net.swordie.ms.loaders.containerclasses.ReactorInfo;
import net.swordie.ms.util.Position;
import net.swordie.ms.world.field.Field;

import java.util.concurrent.TimeUnit;

/**
 * Created on 4/21/2018.
 */
public class Reactor extends Life {

    private byte state;
    private String name = "";
    private int ownerID;
    private int properEventIdx;
    private int reactorTime;
    private boolean phantomForest;
    private int hitCount;

    public Reactor(int templateId) {
        super(templateId);
    }

    public byte getState() {
        return state;
    }

    public void setState(byte state) {
        this.state = state;
    }

    public void increaseState() {
        this.state++;
    }
    
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getOwnerID() {
        return ownerID;
    }

    public void setOwnerID(int ownerID) {
        this.ownerID = ownerID;
    }

    public int getProperEventIdx() {
        return properEventIdx;
    }

    public void setProperEventIdx(int properEventIdx) {
        this.properEventIdx = properEventIdx;
    }

    public void setReactorTime(int reactorTime) {
        this.reactorTime = reactorTime;
    }

    public int getReactorTime() {
        return reactorTime;
    }

    public void setPhantomForest(boolean phantomForest) {
        this.phantomForest = phantomForest;
    }

    public boolean isPhantomForest() {
        return phantomForest;
    }

    public void init() {
        setState((byte) 0);
        if (!getHomePosition().equals(new Position(0, 0))) {
            setPosition(getHomePosition());
        }

        ReactorInfo ri = ReactorData.getReactorInfoByID(getTemplateId());
        if (ri != null) {
            setName(ri.getViewName());
        }
    }

    @Override
    public void broadcastSpawnPacket(Char onlyChar, EnterType enterType) {
        if (onlyChar == null) {
            getField().broadcastPacket(ReactorPool.reactorEnterField(this));
        } else {
            onlyChar.write(ReactorPool.reactorEnterField(this));
        }
    }
    
    @Override
    public void broadcastLeavePacket() {
        Field field = getField();
        field.broadcastPacket(ReactorPool.reactorLeaveField(this));
        Reactor reactor = (Reactor) deepCopy();
        if (field.isChannelField() && !reactor.isHarvestable()) {
            reactor.init();
            EventManager.addEvent(() -> field.spawnLife(reactor, null), 5, TimeUnit.SECONDS);
        }
    }

    public void broadcastChangeState() {
        broadcastChangeState(null, (short) 0, (byte) 0);
    }

    public void broadcastChangeState(Char onlyChar, short delay, byte stateLength) {
        if (onlyChar == null) {
            getField().broadcastPacket(ReactorPool.reactorChangeState(this, delay, stateLength));
        } else {
            onlyChar.write(ReactorPool.reactorChangeState(this, delay, stateLength));
        }
    }

    public Life deepCopy() {
        Reactor copy = new Reactor(getTemplateId());
        copy.setLifeType(getLifeType());
        copy.setX(getX());
        copy.setY(getY());
        copy.setMobTime(getMobTime());
        copy.setFlip(isFlip());
        copy.setLimitedName(getLimitedName());
        copy.setPosition(getPosition().deepCopy());
        copy.setHomePosition(getPosition().deepCopy());
        return copy;
    }

    public int getHitCount() {
        return hitCount;
    }

    public void setHitCount(int hitCount) {
        this.hitCount = hitCount;
    }

    public void incHitCount() {
        setHitCount(getHitCount() + 1);
    }

    public boolean isHarvestable() {
        var id = getTemplateId();
        return id >= GameConstants.HARVEST_HERB_START && id <= GameConstants.HARVEST_VEIN_END + 1;
    }
}
