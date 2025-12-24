package net.swordie.ms.client.character.quest.progress;

import net.swordie.ms.client.character.Char;
import net.swordie.ms.loaders.DatSerializable;

import java.io.IOException;
import java.io.RandomAccessFile;
import java.util.Objects;

/**
 * Created on 3/2/2018.
 */
public class QuestProgressMobRequirement extends QuestProgressRequirement implements QuestValueRequirement {

    public static final String PROGRESS_TYPE = "mob";

    private int mobID;
    private int requiredCount;
    private int currentCount;

    public QuestProgressMobRequirement() {
    }



    public void setMobID(int mobID) {
        this.mobID = mobID;
    }

    public int getMobID() {
        return mobID;
    }

    public Integer getRequiredCount() {
        return requiredCount;
    }

    public void setRequiredCount(int requiredCount) {
        this.requiredCount = requiredCount;
    }

    public void incCurrentCount(int amount) {
        currentCount += amount;
        if(currentCount < 0) {
            currentCount = 0;
        }
    }

    public Integer getCurrentCount() {
        return currentCount;
    }

    public void setCurrentCount(int currentCount) {
        this.currentCount = currentCount;
    }

    @Override
    public boolean isComplete(Char chr) {
        return getCurrentCount() >= getRequiredCount();
    }

    @Override
    public String getProgressType() {
        return PROGRESS_TYPE;
    }

    @Override
    public Integer getUnitId() {
        return getMobID();
    }

    @Override
    public QuestProgressRequirement deepCopy() {
        QuestProgressMobRequirement qpmr = new QuestProgressMobRequirement();
        qpmr.setMobID(getMobID());
        qpmr.setRequiredCount(getRequiredCount());
        qpmr.setCurrentCount(getCurrentCount());
        qpmr.setOrder(getOrder());
        return qpmr;
    }

    @Override
    public void write(RandomAccessFile dos) throws IOException {
        dos.writeInt(getMobID());
        dos.writeInt(getRequiredCount());
        dos.writeInt(getOrder());
    }

    @Override
    public DatSerializable load(RandomAccessFile dis) throws IOException {
        QuestProgressMobRequirement qpmr = new QuestProgressMobRequirement();
        qpmr.setMobID(dis.readInt());
        qpmr.setRequiredCount(dis.readInt());
        qpmr.setOrder(dis.readInt());
        return qpmr;
    }

    @Override
    public String getValue() {
        return String.valueOf(getCurrentCount());
    }

    @Override
    public int hashCode() {
        return Objects.hash(mobID, requiredCount, currentCount);
    }

    @Override
    public int getTransactionalHash() {
        return hashCode();
    }
}
