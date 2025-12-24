package net.swordie.ms.loaders.containerclasses.monsterdefense;

import java.io.IOException;
import java.io.RandomAccessFile;

/**
 * Created on 02/02/2022.
 *
 * @author Asura
 */
public class MonsterDefenseWaveInfo {
    private int mobGenId; // MonsterDefenseMobGenInfo used to know the location of the mob's spawn
    private int mobId;
    private int waveAfter; // spawn delay in ms after wave starts

    public MonsterDefenseWaveInfo() {
    }

    public int getMobGenId() {
        return mobGenId;
    }

    public void setMobGenId(int mobGenId) {
        this.mobGenId = mobGenId;
    }

    public int getMobId() {
        return mobId;
    }

    public void setMobId(int mobId) {
        this.mobId = mobId;
    }

    public int getWaveAfter() {
        return waveAfter;
    }

    public void setWaveAfter(int waveAfter) {
        this.waveAfter = waveAfter;
    }

    public void read(RandomAccessFile raf) throws IOException {
        setMobGenId(raf.readInt());
        setMobId(raf.readInt());
        setWaveAfter(raf.readInt());
    }

    public void write(RandomAccessFile os) throws IOException {
        os.writeInt(getMobGenId());
        os.writeInt(getMobId());
        os.writeInt(getWaveAfter());
    }
}
