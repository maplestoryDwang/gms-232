package net.swordie.ms.connection.packet;

import net.swordie.ms.connection.OutPacket;
import net.swordie.ms.enums.EgoEquipItemUpgradeType;
import net.swordie.ms.enums.InvType;
import net.swordie.ms.handlers.header.OutHeader;

/**
 * Created on 2/15/2020.
 *
 * @author Asura
 */
public class ZeroPool {

    /**
     * Resulting packet from InHeader EGO_EQUIP_CREATE_UPGRADE_ITEM_COST_REQUEST
     * Asks the server what the 'Add Bonus Stats' and 'Change Potential' Buttons should cost.
     *
     * @param type
     * @param mesoCost
     * @param wpCost
     * @return
     */
    public static OutPacket egoEquipCreateUpgradeItemCostResult(EgoEquipItemUpgradeType type, int mesoCost, int wpCost) {
        OutPacket outPacket = new OutPacket(OutHeader.EGO_EQUIP_CREATE_UPGRADE_ITEM_COST_RESULT);

        outPacket.encodeInt(type.getVal());
        outPacket.encodeInt(mesoCost);
        outPacket.encodeInt(wpCost);
        outPacket.encodeByte(0); // unk
        outPacket.encodeByte(0); // unk
        outPacket.encodeByte(0); // unk

        return outPacket;
    }

    public static OutPacket egoEquipCheckUpdateItemResult(InvType invType, String errorMsg, int usingSlot) {
        OutPacket outPacket = new OutPacket(OutHeader.EGO_EQUIP_CHECK_UPDATE_ITEM_RESULT);

        outPacket.encodeByte(true); // success
        outPacket.encodeString(errorMsg);
        outPacket.encodeInt(usingSlot);

        return outPacket;
    }

    public static OutPacket egoEquipComplete(boolean success, boolean flash) {
        OutPacket outPacket = new OutPacket(OutHeader.EGO_EQUIP_COMPLETE);

        outPacket.encodeByte(success);
        outPacket.encodeByte(flash);

        return outPacket;
    }

    public static OutPacket egoEquipUpgradeItemClear() {
        OutPacket outPacket = new OutPacket(OutHeader.EGO_EQUIP_GAUGE_COMPLETE_RETURN);

        return outPacket;
    }

    /**
     *
     * @param curRank
     * @param upgradeLvReq
     * @param nextLvLazuli
     * @param nextLvLapis
     * @param nextRank
     * @param upgradeEtcItemId
     * @param upgradeEtcItemCount
     * @return
     */
    public static OutPacket inheritanceInfo(int curRank, int upgradeLvReq, int nextLvLazuli, int nextLvLapis, int nextRank, int upgradeEtcItemId, int upgradeEtcItemCount) {
        OutPacket outPacket = new OutPacket(OutHeader.INHERITANCE_INFO);

        outPacket.encodeByte(true); // open success
        outPacket.encodeByte(1); // unk
        outPacket.encodeInt(curRank);
        outPacket.encodeInt(upgradeLvReq);
        outPacket.encodeInt(nextLvLazuli);
        outPacket.encodeInt(nextLvLapis);
        outPacket.encodeInt(nextRank);
        outPacket.encodeInt(upgradeEtcItemId);
        outPacket.encodeInt(upgradeEtcItemCount);
        outPacket.encodeInt(0); // loop

        return outPacket;
    }

    public static OutPacket inheritanceComplete(boolean success) {
        OutPacket outPacket = new OutPacket(OutHeader.INHERITANCE_COMPLETE);

        outPacket.encodeByte(success);

        return outPacket;
    }

    public static OutPacket inheritanceFailed() {
        OutPacket outPacket = new OutPacket(OutHeader.INHERITANCE_FAILED);

        return outPacket;
    }


}
