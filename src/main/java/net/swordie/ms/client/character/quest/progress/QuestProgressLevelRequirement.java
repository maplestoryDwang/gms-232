package net.swordie.ms.client.character.quest.progress;

import net.swordie.ms.client.character.Char;
import net.swordie.ms.loaders.DatSerializable;

import java.io.IOException;
import java.io.RandomAccessFile;
import java.util.Objects;

/**
 * Created on 3/2/2018.
 */
public class QuestProgressLevelRequirement extends QuestProgressRequirement {

    public static final String PROGRESS_TYPE = "level";

    private int level;

    public QuestProgressLevelRequirement() {
    }

    @Override
    public int hashCode() {
        return Objects.hash(level);
    }

    @Override
    public int getTransactionalHash() {
        return hashCode();
    }

    public QuestProgressLevelRequirement(int level){
        this.level = level;
    }

    @Override
    public boolean isComplete(Char chr) {
        return chr.getLevel() >= getLevel();
    }

    @Override
    public String getProgressType() {
        return PROGRESS_TYPE;
    }
    @Override
    public Integer getUnitId() {
        return null;
    }

    @Override
    public Integer getCurrentCount() {
        return null;
    }

    @Override
    public Integer getRequiredCount() {
        return getLevel();
    }

    @Override
    public QuestProgressRequirement deepCopy() {
        QuestProgressLevelRequirement qplr = new QuestProgressLevelRequirement();
        qplr.setLevel(getLevel());
        qplr.setOrder(getOrder());
        return qplr;
    }

    public int getLevel() {
        return level;
    }

    public void setLevel(int level) {
        this.level = level;
    }

    @Override
    public void write(RandomAccessFile dos) throws IOException {
        dos.writeInt(getLevel());
    }

    @Override
    public DatSerializable load(RandomAccessFile dis) throws IOException {
        return new QuestProgressLevelRequirement(dis.readInt());
    }


}
