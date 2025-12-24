package net.swordie.ms.loaders.containerclasses;

import java.io.DataInputStream;
import java.io.DataOutputStream;
import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Created on 23/05/2021.
 *
 * @author Asura
 */
public class VoyageInfo {
    private int voyageId;
    private String title; // Voyage Title
    private int unlockCoinCost; // Unlock Denaro Cost
    private Map<Integer, Integer> sailingReq = new HashMap<>(); // <VoyageId, amountCompleted>
    private int energyCost; // Energy cost to enter commerce
    private int timeSec; // Estimated Voyage Duration
    private List<Integer> mobList = new ArrayList<>(); // mobs that might appear
    private Map<Integer, Integer> timeAdv = new HashMap<>(); // <Seconds shortened , amount>
    private Map<Integer, Integer> itemAdv = new HashMap<>(); // <ItemId , amount>

    public int getVoyageId() {
        return voyageId;
    }

    public void setVoyageId(int voyageId) {
        this.voyageId = voyageId;
    }

    public int getUnlockCoinCost() {
        return unlockCoinCost;
    }

    public void setUnlockCoinCost(int unlockCoinCost) {
        this.unlockCoinCost = unlockCoinCost;
    }

    public Map<Integer, Integer> getSailingReq() {
        return sailingReq;
    }

    public void setSailingReq(Map<Integer, Integer> sailingReq) {
        this.sailingReq = sailingReq;
    }

    public int getEnergyCost() {
        return energyCost;
    }

    public void setEnergyCost(int energyCost) {
        this.energyCost = energyCost;
    }

    public int getTimeSec() {
        return timeSec;
    }

    public void setTimeSec(int timeSec) {
        this.timeSec = timeSec;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public List<Integer> getMobList() {
        return mobList;
    }

    public void setMobList(List<Integer> mobList) {
        this.mobList = mobList;
    }

    public Map<Integer, Integer> getTimeAdv() {
        return timeAdv;
    }

    public void setTimeAdv(Map<Integer, Integer> timeAdv) {
        this.timeAdv = timeAdv;
    }

    public Map<Integer, Integer> getItemAdv() {
        return itemAdv;
    }

    public void setItemAdv(Map<Integer, Integer> itemAdv) {
        this.itemAdv = itemAdv;
    }

    public void write(DataOutputStream dos) throws IOException {
        dos.writeInt(getVoyageId());
        dos.writeUTF(getTitle());
        dos.writeInt(getUnlockCoinCost());

        // Sailing Requirements
        dos.writeInt(getSailingReq().size());
        for (var entry : getSailingReq().entrySet()) {
            dos.writeInt(entry.getKey());
            dos.writeInt(entry.getValue());
        }

        dos.writeInt(getEnergyCost());
        dos.writeInt(getTimeSec());

        // MobList
        dos.writeInt(getMobList().size());
        for (var item : getMobList()) {
            dos.writeInt(item);
        }

        // TimeAdv
        dos.writeInt(getTimeAdv().size());
        for (var entry : getTimeAdv().entrySet()) {
            dos.writeInt(entry.getKey());
            dos.writeInt(entry.getValue());
        }

        // ItemAdv
        dos.writeInt(getItemAdv().size());
        for (var entry : getItemAdv().entrySet()) {
            dos.writeInt(entry.getKey());
            dos.writeInt(entry.getValue());
        }
    }

    public static VoyageInfo read(DataInputStream dis) throws IOException {
        var vi = new VoyageInfo();
        vi.setVoyageId(dis.readInt());
        vi.setTitle(dis.readUTF());
        vi.setUnlockCoinCost(dis.readInt());

        // Sailing Req
        var size = dis.readInt();
        for (int i = 0; i < size; i++) {
            vi.getSailingReq().put(dis.readInt(), dis.readInt());
        }

        vi.setEnergyCost(dis.readInt());
        vi.setTimeSec(dis.readInt());

        // MobList
        size = dis.readInt();
        for (int i = 0; i < size; i++) {
            vi.getMobList().add(dis.readInt());
        }

        // TimeAdv
        size = dis.readInt();
        for (int i = 0; i < size; i++) {
            vi.getTimeAdv().put(dis.readInt(), dis.readInt());
        }

        // ItemAdv
        size = dis.readInt();
        for (int i = 0; i < size; i++) {
            vi.getItemAdv().put(dis.readInt(), dis.readInt());
        }

        return vi;
    }
}
