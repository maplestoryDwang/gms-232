package net.swordie.ms.loaders.containerclasses;

import java.io.DataInputStream;
import java.io.DataOutputStream;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

/**
 * Created on 23/05/2021.
 *
 * @author Asura
 */
public class VesselInfo {
    private int vesselId; // Type into number (0=CargoSkiff, 1=Sailboat, 2=Dreadnought)
    private int cost; // upgrade cost
    private int energy; // max Energy
    private Map<Integer, Integer> expTable = new HashMap<>(); // <level, expReq> required exp to level to that level
    private Map<Integer, Integer> cargoTable = new HashMap<>(); // <level, maxCargo>
    private int pad; // PAD of the ship
    private Map<Integer, Boolean> skillMap = new HashMap<>(); // <skillId, enabled>

    public int getVesselId() {
        return vesselId;
    }

    public void setVesselId(int vesselId) {
        this.vesselId = vesselId;
    }

    public int getCost() {
        return cost;
    }

    public void setCost(int cost) {
        this.cost = cost;
    }

    public int getEnergy() {
        return energy;
    }

    public void setEnergy(int energy) {
        this.energy = energy;
    }

    public Map<Integer, Integer> getExpTable() {
        return expTable;
    }

    public void setExpTable(Map<Integer, Integer> expTable) {
        this.expTable = expTable;
    }

    public Map<Integer, Integer> getCargoTable() {
        return cargoTable;
    }

    public void setCargoTable(Map<Integer, Integer> cargoTable) {
        this.cargoTable = cargoTable;
    }

    public int getPad() {
        return pad;
    }

    public void setPad(int pad) {
        this.pad = pad;
    }

    public Map<Integer, Boolean> getSkillMap() {
        return skillMap;
    }

    public void setSkillMap(Map<Integer, Boolean> skillMap) {
        this.skillMap = skillMap;
    }

    public void write(DataOutputStream dos) throws IOException {
        dos.writeInt(getVesselId());
        dos.writeInt(getCost());
        dos.writeInt(getEnergy());

        // expTable
        dos.writeInt(getExpTable().size());
        for (var entry : getExpTable().entrySet()) {
            dos.writeInt(entry.getKey());
            dos.writeInt(entry.getValue());
        }

        // cargoTable
        dos.writeInt(getCargoTable().size());
        for (var entry : getCargoTable().entrySet()) {
            dos.writeInt(entry.getKey());
            dos.writeInt(entry.getValue());
        }

        dos.writeInt(getPad());

        // skillMap
        dos.writeInt(getSkillMap().size());
        for (var entry : getSkillMap().entrySet()) {
            dos.writeInt(entry.getKey());
            dos.writeBoolean(entry.getValue());
        }
    }

    public static VesselInfo read(DataInputStream dis) throws IOException {
        VesselInfo vi = new VesselInfo();
        vi.setVesselId(dis.readInt());
        vi.setCost(dis.readInt());
        vi.setEnergy(dis.readInt());

        // expTable
        var size = dis.readInt();
        for (int i = 0; i < size; i++) {
            vi.getExpTable().put(dis.readInt(), dis.readInt());
        }

        // cargoTable
        size = dis.readInt();
        for (int i = 0; i < size; i++) {
            vi.getCargoTable().put(dis.readInt(), dis.readInt());
        }

        vi.setPad(dis.readInt());

        // skillMap
        size = dis.readInt();
        for (int i = 0; i < size; i++) {
            vi.getSkillMap().put(dis.readInt(), dis.readBoolean());
        }

        return vi;
    }
}
