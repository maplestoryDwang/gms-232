package net.swordie.ms.loaders.containerclasses.familiarcodex;

import java.io.DataInputStream;
import java.io.DataOutputStream;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

/**
 * Created on 4/24/2020.
 *
 * @author Asura
 */
public class BadgeInfo {
    private int badgeId;
    private String name;
    private List<Integer> famList = new ArrayList<>(); // familiar list (in order)
    private List<Integer> options = new ArrayList<>();

    public int getBadgeId() {
        return badgeId;
    }

    public void setBadgeId(int badgeId) {
        this.badgeId = badgeId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<Integer> getFamList() {
        return famList;
    }

    public void setFamList(List<Integer> famList) {
        this.famList = famList;
    }

    public void addFamiliar(int familiarId) {
        getFamList().add(familiarId);
    }

    public List<Integer> getOptions() {
        return options;
    }

    public void setOptions(List<Integer> options) {
        this.options = options;
    }

    public void addOption(int option) {
        getOptions().add(option);
    }

    public void write(DataOutputStream dos) {
        try {
            dos.writeInt(getBadgeId());
            dos.writeUTF(getName());
            dos.writeShort(getFamList().size());
            for (Integer familiarId : getFamList()) {
                dos.writeInt(familiarId);
            }
            dos.writeShort(getOptions().size());
            for (Integer option : getOptions()) {
                dos.writeInt(option);
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    public static BadgeInfo read(DataInputStream dis) {
        BadgeInfo bi = null;
        try {
            bi = new BadgeInfo();
            bi.setBadgeId(dis.readInt());
            bi.setName(dis.readUTF());
            int size = dis.readShort();
            for (int i = 0; i < size; i++) {
                bi.addFamiliar(dis.readInt());
            }
            size = dis.readShort();
            for (int i = 0; i < size; i++) {
                bi.addOption(dis.readInt());
            }
        } catch (IOException e) {
            e.printStackTrace();
        }

        return bi;
    }

    public int getPositionOfFamiliar(int familiarId) {
        return getFamList().indexOf(familiarId);
    }
}
