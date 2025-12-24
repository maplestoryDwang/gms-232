package net.swordie.ms.client.character.quest.progress;

import net.swordie.ms.client.character.Char;
import net.swordie.ms.loaders.DatSerializable;

import java.io.IOException;
import java.io.RandomAccessFile;
import java.util.Objects;

/**
 * Created on 3/2/2018.
 */
public class QuestProgressItemRequirement extends QuestProgressRequirement {

    public static final String PROGRESS_TYPE = "item";

    private int itemID;
    private int requiredCount;

    @Override
    public int hashCode() {
        return Objects.hash(itemID, requiredCount);
    }

    public QuestProgressItemRequirement() {
    }

    public int getItemID() {
        return itemID;
    }

    public void setItemID(int itemID) {
        this.itemID = itemID;
    }

    public Integer getRequiredCount() {
        return requiredCount;
    }

    public void setRequiredCount(int requiredCount) {
        this.requiredCount = requiredCount;
    }

    @Override
    public boolean isComplete(Char chr) {
        return chr.hasItemCount(getItemID(), getRequiredCount());
    }

    @Override
    public String getProgressType() {
        return PROGRESS_TYPE;
    }
    @Override
    public Integer getUnitId() {
        return getItemID();
    }

    @Override
    public Integer getCurrentCount() {
        return null;
    }

    @Override
    public QuestProgressRequirement deepCopy() {
        QuestProgressItemRequirement qpir = new QuestProgressItemRequirement();
        qpir.setItemID(getItemID());
        qpir.setRequiredCount(getRequiredCount());
        qpir.setOrder(getOrder());
        return qpir;
    }

    @Override
    public void write(RandomAccessFile dos) throws IOException {
        dos.writeInt(getItemID());
        dos.writeInt(getRequiredCount());
        dos.writeInt(getOrder());
    }

    @Override
    public DatSerializable load(RandomAccessFile dis) throws IOException {
        QuestProgressItemRequirement qpir = new QuestProgressItemRequirement();
        qpir.setItemID(dis.readInt());
        qpir.setRequiredCount(dis.readInt());
        qpir.setOrder(dis.readInt());
        return qpir;
    }

    @Override
    public int getTransactionalHash() {
        return hashCode();
    }
}
