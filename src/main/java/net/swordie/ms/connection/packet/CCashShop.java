package net.swordie.ms.connection.packet;

import net.swordie.ms.client.Account;
import net.swordie.ms.client.User;
import net.swordie.ms.client.character.Char;
import net.swordie.ms.client.character.items.Item;
import net.swordie.ms.client.trunk.Trunk;
import net.swordie.ms.connection.OutPacket;
import net.swordie.ms.constants.GameConstants;
import net.swordie.ms.enums.CashItemType;
import net.swordie.ms.handlers.header.OutHeader;
import net.swordie.ms.util.FileTime;
import net.swordie.ms.world.shop.cashshop.CashItemInfo;

import java.util.List;

/**
 * Created on 4/23/2018.
 */
public class CCashShop {
    public static OutPacket queryCashResult(Char chr) {
        User user = chr.getUser();
        Account account = chr.getAccount();

        OutPacket outPacket = new OutPacket(OutHeader.CASH_SHOP_QUERY_CASH_RESULT);

        outPacket.encodeInt(account.getNxCredit());
        outPacket.encodeInt(user.getMaplePoints());
        outPacket.encodeInt(chr.getRewardPoints());
        outPacket.encodeInt(account.getNxPrepaid());

        return outPacket;
    }

    public static OutPacket cashItemResBuyDone(CashItemInfo cashItemInfo, FileTime registerDate, CashItemInfo receiveBonus) {
        OutPacket outPacket = new OutPacket(OutHeader.CASH_SHOP_CASH_ITEM_RESULT);

        outPacket.encodeByte(CashItemType.Res_Buy_Done.getVal());

        cashItemInfo.encode(outPacket);

        boolean hasRegisterDate = registerDate != null;
        outPacket.encodeInt(hasRegisterDate ? 1 : 0);
        if (hasRegisterDate) {
            outPacket.encodeFT(registerDate);
        }

        boolean hasReceiveBonus = receiveBonus != null;
        outPacket.encodeByte(hasReceiveBonus);
        if (receiveBonus != null) {
            receiveBonus.encode(outPacket);
        }

        return outPacket;
    }

    public static OutPacket error() {
        return message(CashItemType.FailReason_DBQueryFailed);
    }

    public static OutPacket resMoveLtoSDone(Item item) {
        OutPacket outPacket = new OutPacket(OutHeader.CASH_SHOP_CASH_ITEM_RESULT);

        outPacket.encodeByte(CashItemType.Res_MoveLtoS_Done.getVal());

        outPacket.encodeByte(true); // bExclRequestSent
        outPacket.encodeShort(item.getBagIndex());
        item.encode(outPacket);

        int size = 0;
        outPacket.encodeInt(size);
        for (int i = 0; i < size; i++) {
            outPacket.encodeLong(0); // sn
        }

        boolean bool = false;
        outPacket.encodeByte(bool);
        if (bool) {
            new CashItemInfo().encode(outPacket); // bonus cash item
        }

        return outPacket;
    }

    public static OutPacket resMoveStoLDone(CashItemInfo cii, Item extraMovedItem) {
        OutPacket outPacket = new OutPacket(OutHeader.CASH_SHOP_CASH_ITEM_RESULT);

        outPacket.encodeByte(CashItemType.Res_MoveStoL_Done.getVal());

        boolean extraItem = extraMovedItem != null;
        outPacket.encodeByte(extraItem);
        if (extraItem) {
            outPacket.encodeLong(extraMovedItem.getId());
            outPacket.encodeInt(extraMovedItem.getItemId());
            outPacket.encodeInt(extraMovedItem.getBagIndex());
        }
        outPacket.encode(cii);

        return outPacket;
    }

    public static OutPacket loadLockerDone(Account account) {
        OutPacket outPacket = new OutPacket(OutHeader.CASH_SHOP_CASH_ITEM_RESULT);

        outPacket.encodeByte(CashItemType.Res_LoadLocker_Done.getVal());

        Trunk trunk = account.getTrunk();
        List<CashItemInfo> locker = trunk.getLocker();
        int lockerSize = locker.size();

        boolean isOverMaxSlots = lockerSize > GameConstants.MAX_LOCKER_SIZE;
        outPacket.encodeByte(isOverMaxSlots);
        if (isOverMaxSlots) {
            outPacket.encodeInt(lockerSize - GameConstants.MAX_LOCKER_SIZE);
        }

        outPacket.encodeShort(lockerSize);
        locker.forEach(item -> item.encode(outPacket));

        outPacket.encodeShort(account.getTrunk().getSlotCount());
        outPacket.encodeShort(account.getUser().getCharacterSlots());
        outPacket.encodeShort(account.getUser().getCharacterSlots());
        outPacket.encodeShort(account.getCharacters().size());

        return outPacket;
    }

    public static OutPacket rebateDone(CashItemInfo deletedItem) {
        OutPacket outPacket = new OutPacket(OutHeader.CASH_SHOP_CASH_ITEM_RESULT);

        outPacket.encodeByte(CashItemType.Res_Rebate_Done.getVal());
        outPacket.encodeLong(deletedItem.getId());

        // either extra deleted items or overflow items that are now seeable
        int size = 0;
        outPacket.encodeInt(size);
        for (int i = 0; i < size; i++) {
            outPacket.encodeLong(0); // liSN
        }

        return outPacket;
    }

    public static OutPacket message(CashItemType failReason) {
        OutPacket outPacket = new OutPacket(OutHeader.CASH_SHOP_CASH_ITEM_RESULT);

        outPacket.encodeByte(CashItemType.Res_LoadLocker_Failed.getVal());
        outPacket.encodeByte(failReason.getVal());

        return outPacket;
    }

    public static OutPacket fullInventoryMsg() {
        return message(CashItemType.FailReason_ItemLockerIsFull);
    }

    public static OutPacket extraInfoResult(int sn, int info) {
        OutPacket outPacket = new OutPacket(OutHeader.CASH_SHOP_CASH_ITEM_RESULT);

        outPacket.encodeByte(107);
        outPacket.encodeInt(sn);
        outPacket.encodeInt(info);

        return outPacket;
    }

    public static OutPacket unk3() {
        OutPacket outPacket = new OutPacket(OutHeader.CASH_SHOP_CASH_ITEM_RESULT);

        outPacket.encodeInt(0);

        return outPacket;
    }

    public static OutPacket unk6() {
        OutPacket outPacket = new OutPacket(OutHeader.CASH_SHOP_CASH_ITEM_RESULT);

        int size = 0;
        outPacket.encodeShort(size);
        for (int i = 0; i < size; i++) {
            outPacket.encodeArr(new byte[70]); // unsure what this struct is
        }

        return outPacket;
    }

    public static OutPacket incSlotCountDone(int invType, int slotCount) {
        OutPacket outPacket = new OutPacket(OutHeader.CASH_SHOP_CASH_ITEM_RESULT);

        outPacket.encodeByte(CashItemType.Res_IncSlotCount_Done.getVal());

        outPacket.encodeByte(invType);
        outPacket.encodeShort(slotCount);

        return outPacket;
    }

    public static OutPacket incSlotCountFailed(CashItemType failReason) {
        OutPacket outPacket = new OutPacket(OutHeader.CASH_SHOP_CASH_ITEM_RESULT);

        outPacket.encodeByte(CashItemType.Res_LoadLocker_Failed.getVal());
        outPacket.encodeByte(failReason.getVal());

        return outPacket;
    }

    public static OutPacket incTrunkCountDone(Trunk trunk) {
        OutPacket outPacket = new OutPacket(OutHeader.CASH_SHOP_CASH_ITEM_RESULT);

        outPacket.encodeByte(CashItemType.Res_IncTrunkCount_Done.getVal());
        outPacket.encodeShort(trunk.getSlotCount());

        return outPacket;
    }

    public static OutPacket incCharSlotCountDone(int newCharCount) {
        OutPacket outPacket = new OutPacket(OutHeader.CASH_SHOP_CASH_ITEM_RESULT);

        outPacket.encodeByte(CashItemType.Res_IncCharSlotCount_Done.getVal());
        outPacket.encodeShort(newCharCount);

        return outPacket;
    }

    public static OutPacket incCharSlotCountFailed(CashItemType reason) {
        OutPacket outPacket = new OutPacket(OutHeader.CASH_SHOP_CASH_ITEM_RESULT);

        outPacket.encodeByte(CashItemType.Res_IncCharSlotCount_Failed.getVal());
        outPacket.encodeShort(reason.getVal());

        return outPacket;
    }

    public static OutPacket surpriseItemResult(int type, CashItemInfo item, CashItemInfo randomItem) {
        OutPacket outPacket = new OutPacket(OutHeader.CASH_SHOP_SURPRISE_ITEM_RESULT);

        outPacket.encodeByte(type);
        switch (type) {
            case 166:
                outPacket.encodeLong(item.getCashItemSN());
                outPacket.encodeInt(item.getQuantity());
                outPacket.encodeInt(item.getQuantity() - 3);
                outPacket.encode(randomItem);

                // sub
                outPacket.encodeInt(randomItem.getItemId());
                outPacket.encodeByte(randomItem.getQuantity());
                outPacket.encodeByte(0); // 0 = red text
                break;
            case 165:
                outPacket.encodeByte(0); // 63 = too many cashitems, else = unknown error
                break;
            case 168:
                outPacket.encodeLong(item.getCashItemSN());
                outPacket.encodeInt(0);
                outPacket.encodeInt(0);
                var size = 1;
                outPacket.encodeInt(size);
                for (int i = 0; i < size; i++) {
                    outPacket.encode(randomItem);
                }
                size = 0;
                outPacket.encodeInt(size);
                for (int i = 0; i < size; i++) {
                    outPacket.encodeInt(0); // itemId
                    outPacket.encodeByte(0); // quantity
                }
                outPacket.encodeByte(0); // ignored
                break;
        }

        return outPacket;
    }
}
