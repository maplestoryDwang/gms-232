package net.swordie.ms.loaders.containerclasses;

import java.io.IOException;
import java.io.RandomAccessFile;
import java.util.ArrayList;
import java.util.List;

/**
 * Created on 3/2/2020.
 *
 * @author Asura
 */
public class GroupChairInfo {
    private int height, width;
    private boolean invite;
    private boolean randomSit;
    private boolean randomMainSolo;

    private List<Integer> emotions = new ArrayList<>();
    private int seats;

    public int getHeight() {
        return height;
    }

    public void setHeight(int heigh) {
        this.height = height;
    }

    public int getWidth() {
        return width;
    }

    public void setWidth(int width) {
        this.width = width;
    }

    public boolean isInvite() {
        return invite;
    }

    public void setInvite(boolean invite) {
        this.invite = invite;
    }

    public boolean isRandomSit() {
        return randomSit;
    }

    public void setRandomSit(boolean randomSit) {
        this.randomSit = randomSit;
    }

    public boolean isRandomMainSolo() {
        return randomMainSolo;
    }

    public void setRandomMainSolo(boolean randomMainSolo) {
        this.randomMainSolo = randomMainSolo;
    }

    public List<Integer> getEmotions() {
        return emotions;
    }

    public void setEmotions(List<Integer> emotions) {
        this.emotions = emotions;
    }

    public void addEmotion(Integer emotion) {
        getEmotions().add(emotion);
    }

    public int getSeats() {
        return seats;
    }

    public void setSeats(int seats) {
        this.seats = seats;
    }

    public void write(RandomAccessFile raf) throws IOException {
        raf.writeInt(this.getHeight());
        raf.writeInt(this.getWidth());

        raf.writeBoolean(this.isInvite());
        raf.writeBoolean(this.isRandomSit());
        raf.writeBoolean(this.isRandomMainSolo());

        raf.writeShort(this.getEmotions().size());
        for (int emotion : this.getEmotions()) {
            raf.writeInt(emotion);
        }

        raf.writeInt(this.getSeats());
    }

    public static GroupChairInfo load(RandomAccessFile raf) throws IOException {
        GroupChairInfo gci = new GroupChairInfo();
        gci.setHeight(raf.readInt());
        gci.setWidth(raf.readInt());

        gci.setInvite(raf.readBoolean());
        gci.setRandomSit(raf.readBoolean());
        gci.setRandomMainSolo(raf.readBoolean());

        short size = raf.readShort();
        for (int i = 0; i < size; i++) {
            gci.addEmotion(raf.readInt());
        }

        gci.setSeats(raf.readInt());

        return gci;
    }
}
