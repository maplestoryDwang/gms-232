package net.swordie.ms.client.character.commerce.voyage;

/**
 * Created on 19/05/2021.
 *
 * @author Asura
 */
public enum VoyageInfoType {
    Unk9(9),
    UpdateInventoryInfo(10),
    UpdateVesselInfo(11),
    UpdateVesselInfo_2(12),
    UnlockVoyageRoute(13),
    Unk14(14),
    Unk15(15),
    Unk16(16),
    Unk17(17),
    ;

    private int val;

    VoyageInfoType(int val) {
        this.val = val;
    }

    public int getVal() {
        return val;
    }
}