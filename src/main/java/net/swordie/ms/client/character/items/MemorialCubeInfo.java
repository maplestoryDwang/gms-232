package net.swordie.ms.client.character.items;

import net.swordie.ms.connection.OutPacket;

import java.util.List;

/**
 * Created on 12/20/2017.
 */
public class MemorialCubeInfo {
    private Equip equip;
    private int cubeItemID;
    private List<Integer> oldOptions;


    public MemorialCubeInfo() {
    }

    /**
     * Creates a new MemorialCubeInfo with a given equip and cube id.
     * @param equip the equip of this MemorialCubeInfo
     * @param cubeItemID the cube's item id
     * @param oldOptions the equip's old potentials
     */
    public MemorialCubeInfo(Equip equip, int cubeItemID, List<Integer> oldOptions) {
        this.equip = equip;
        this.cubeItemID = cubeItemID;
        this.oldOptions = oldOptions;
    }

    public void encode(OutPacket outPacket) {
        Equip equip = getEquip();
        outPacket.encodeByte(equip != null);
        if (equip != null) {
            equip.encode(outPacket);
            outPacket.encodeInt(getCubeItemID());
            outPacket.encodeInt(equip.getBagIndexWithEquipped());
        }
    }

    public Equip getEquip() {
        return equip;
    }

    public void setEquip(Equip equip) {
        this.equip = equip;
    }

    public int getCubeItemID() {
        return cubeItemID;
    }

    public void setCubeItemID(int cubeItemID) {
        this.cubeItemID = cubeItemID;
    }

    public List<Integer> getOldOptions() {
        return oldOptions;
    }

    public void setOldOptions(List<Integer> oldOptions) {
        this.oldOptions = oldOptions;
    }

    public void applyPotential(boolean chooseBefore) {
        Equip eqp = getEquip();
        if (chooseBefore) {
            eqp.setOptions(getOldOptions());
        }
    }
}
