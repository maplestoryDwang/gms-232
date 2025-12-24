package net.swordie.ms.client.character.quest.progress;

import net.swordie.ms.client.character.Char;
import net.swordie.ms.loaders.DatSerializable;

import java.io.IOException;
import java.io.RandomAccessFile;
import java.util.Objects;

/**
 * Created on 3/2/2018.
 */
public class QuestProgressMoneyRequirement extends QuestProgressRequirement {

    public static final String PROGRESS_TYPE = "money";

    private int money;

    public QuestProgressMoneyRequirement() {
    }

    public QuestProgressMoneyRequirement(int money){
        this.money = money;
    }

    @Override
    public boolean isComplete(Char chr) {
        return chr.getMoney() >= getMoney();
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
        return getMoney();
    }

    @Override
    public QuestProgressRequirement deepCopy() {
        QuestProgressMoneyRequirement qpmr = new QuestProgressMoneyRequirement();
        qpmr.setMoney(getMoney());
        qpmr.setOrder(getOrder());
        return qpmr;
    }

    public int getMoney() {
        return money;
    }

    public void setMoney(int money) {
        this.money = money;
    }
    @Override
    public void write(RandomAccessFile dos) throws IOException {
        dos.writeInt(getMoney());
    }

    @Override
    public DatSerializable load(RandomAccessFile dis) throws IOException {
        return new QuestProgressMoneyRequirement(dis.readInt());
    }

    public void addMoney(int money) {
        setMoney(getMoney() + money);
    }

    @Override
    public int hashCode() {
        return Objects.hash(money);
    }

    @Override
    public int getTransactionalHash() {
        return hashCode();
    }
}
