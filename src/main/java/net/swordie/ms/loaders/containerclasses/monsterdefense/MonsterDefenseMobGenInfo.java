package net.swordie.ms.loaders.containerclasses.monsterdefense;

import java.io.IOException;
import java.io.RandomAccessFile;

/**
 * Created on 02/02/2022.
 *
 * @author Asura
 */
public class MonsterDefenseMobGenInfo {
    private int id;
    private int x, y;
    private boolean left;

    public MonsterDefenseMobGenInfo() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getX() {
        return x;
    }

    public void setX(int x) {
        this.x = x;
    }

    public int getY() {
        return y;
    }

    public void setY(int y) {
        this.y = y;
    }

    public boolean isLeft() {
        return left;
    }

    public void setLeft(boolean left) {
        this.left = left;
    }

    public void read(RandomAccessFile raf) throws IOException {
        setId(raf.readInt());
        setX(raf.readInt());
        setY(raf.readInt());
        setLeft(raf.readBoolean());
    }

    public void write(RandomAccessFile os) throws IOException {
        os.writeInt(getId());
        os.writeInt(getX());
        os.writeInt(getY());
        os.writeBoolean(isLeft());
    }
}
