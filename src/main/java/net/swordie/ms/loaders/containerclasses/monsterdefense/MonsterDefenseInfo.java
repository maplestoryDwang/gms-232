package net.swordie.ms.loaders.containerclasses.monsterdefense;

import java.io.IOException;
import java.io.RandomAccessFile;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Created on 02/02/2022.
 *
 * @author Asura
 */
public class MonsterDefenseInfo {
    private Map<Integer, MonsterDefenseMobGenInfo> mobGens = new HashMap<>();
    private Map<Integer, List<MonsterDefenseWaveInfo>> waves = new HashMap<>();
    private int startInterval;
    // delayTime
    private int countState;
    private int createMobDelay;
    private int finishState;
    private int playState;
    private int prepareState;
    private int stopState;
    // endCondition
    private int killCount;
    private int playTime;

    public Map<Integer, MonsterDefenseMobGenInfo> getMobGens() {
        return mobGens;
    }

    public void setMobGens(Map<Integer, MonsterDefenseMobGenInfo> mobGens) {
        this.mobGens = mobGens;
    }

    public Map<Integer, List<MonsterDefenseWaveInfo>> getWaves() {
        return waves;
    }

    public void setWaves(Map<Integer, List<MonsterDefenseWaveInfo>> waves) {
        this.waves = waves;
    }

    public int getStartInterval() {
        return startInterval;
    }

    public void setStartInterval(int startInterval) {
        this.startInterval = startInterval;
    }

    public int getCountState() {
        return countState;
    }

    public void setCountState(int countState) {
        this.countState = countState;
    }

    public int getCreateMobDelay() {
        return createMobDelay;
    }

    public void setCreateMobDelay(int createMobDelay) {
        this.createMobDelay = createMobDelay;
    }

    public int getFinishState() {
        return finishState;
    }

    public void setFinishState(int finishState) {
        this.finishState = finishState;
    }

    public int getPlayState() {
        return playState;
    }

    public void setPlayState(int playState) {
        this.playState = playState;
    }

    public int getPrepareState() {
        return prepareState;
    }

    public void setPrepareState(int prepareState) {
        this.prepareState = prepareState;
    }

    public int getStopState() {
        return stopState;
    }

    public void setStopState(int stopState) {
        this.stopState = stopState;
    }

    public int getKillCount() {
        return killCount;
    }

    public void setKillCount(int killCount) {
        this.killCount = killCount;
    }

    public int getPlayTime() {
        return playTime;
    }

    public void setPlayTime(int playTime) {
        this.playTime = playTime;
    }

    public void read(RandomAccessFile raf) throws IOException {
        var size = raf.readInt();
        for (var i = 0; i < size; i++) {
            var mobGenInfo = new MonsterDefenseMobGenInfo();
            mobGenInfo.read(raf);
            getMobGens().put(mobGenInfo.getId(), mobGenInfo);
        }

        size = raf.readInt();
        for (var i = 0; i < size; i++) {
            var waveNumber = raf.readInt();
            var waveInfosSize = raf.readInt();

            var waveInfos = new ArrayList<MonsterDefenseWaveInfo>();
            for (var ii = 0; ii < waveInfosSize; ii++) {
                var waveInfo = new MonsterDefenseWaveInfo();
                waveInfo.read(raf);
                waveInfos.add(waveInfo);
            }

            getWaves().put(waveNumber, waveInfos);
        }

        setStartInterval(raf.readInt());

        setCountState(raf.readInt());
        setCreateMobDelay(raf.readInt());
        setFinishState(raf.readInt());
        setPlayState(raf.readInt());
        setPrepareState(raf.readInt());
        setStopState(raf.readInt());

        setKillCount(raf.readInt());
        setPlayTime(raf.readInt());
    }

    public void write(RandomAccessFile os) throws IOException {
        os.writeInt(getMobGens().size());
        for (var entry : getMobGens().entrySet()) {
            entry.getValue().write(os);
        }

        os.writeInt(getWaves().size());
        for (var entry : getWaves().entrySet()) {
            os.writeInt(entry.getKey());
            os.writeInt(entry.getValue().size());
            for (var waveInfo : entry.getValue()) {
                waveInfo.write(os);
            }
        }

        os.writeInt(getStartInterval());

        os.writeInt(getCountState());
        os.writeInt(getCreateMobDelay());
        os.writeInt(getFinishState());
        os.writeInt(getPlayState());
        os.writeInt(getPrepareState());
        os.writeInt(getStopState());

        os.writeInt(getKillCount());
        os.writeInt(getPlayTime());
    }
}
