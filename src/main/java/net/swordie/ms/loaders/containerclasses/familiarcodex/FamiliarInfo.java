package net.swordie.ms.loaders.containerclasses.familiarcodex;

import java.io.DataInputStream;
import java.io.DataOutputStream;
import java.io.IOException;
import java.util.HashSet;
import java.util.Set;

/**
 * Created on 4/24/2020.
 *
 * @author Asura
 */
public class FamiliarInfo {
    private int familiarId;
    private Set<Integer> badgeSetIds = new HashSet<>();

    public int getFamiliarId() {
        return familiarId;
    }

    public void setFamiliarId(int familiarId) {
        this.familiarId = familiarId;
    }

    public void write(DataOutputStream dos) {
        try {
            dos.writeInt(getFamiliarId());
            dos.writeByte(getBadgeSetIds().size());
            for (var badgeSetId : getBadgeSetIds()) {
                dos.writeByte(badgeSetId);
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    public static FamiliarInfo read(DataInputStream dis) {
        FamiliarInfo fi = null;
        try {
            fi = new FamiliarInfo();
            fi.setFamiliarId(dis.readInt());
            var size = dis.readByte();
            for (int i = 0; i < size; i++) {
                fi.addBadgeSetId(dis.readByte());
            }
        } catch (IOException e) {
            e.printStackTrace();
        }

        return fi;
    }

    public void addBadgeSetId(int badgeSetId) {
        getBadgeSetIds().add(badgeSetId);
    }

    public Set<Integer> getBadgeSetIds() {
        return badgeSetIds;
    }
}
