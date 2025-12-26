package net.swordie.ms.handlers;

import net.swordie.ms.Server;
import net.swordie.ms.ServerConstants;
import net.swordie.ms.client.Account;
import net.swordie.ms.client.Client;
import net.swordie.ms.client.User;
import net.swordie.ms.client.character.BroadcastMsg;
import net.swordie.ms.client.character.Char;
import net.swordie.ms.client.character.cashshop.IterativeBuyInfo;
import net.swordie.ms.client.character.items.Inventory;
import net.swordie.ms.client.character.items.Item;
import net.swordie.ms.client.character.quest.Quest;
import net.swordie.ms.client.character.quest.QuestManager;
import net.swordie.ms.client.trunk.Trunk;
import net.swordie.ms.connection.InPacket;
import net.swordie.ms.connection.packet.CCashShop;
import net.swordie.ms.connection.packet.WvsContext;
import net.swordie.ms.constants.GameConstants;
import net.swordie.ms.constants.ItemConstants;
import net.swordie.ms.constants.QuestConstants;
import net.swordie.ms.constants.SSBConstants;
import net.swordie.ms.enums.CashItemType;
import net.swordie.ms.enums.CashShopActionType;
import net.swordie.ms.enums.InvType;
import net.swordie.ms.enums.QuestStatus;
import net.swordie.ms.handlers.header.InHeader;
import net.swordie.ms.life.drop.DropInfo;
import net.swordie.ms.loaders.EtcData;
import net.swordie.ms.loaders.ItemData;
import net.swordie.ms.loaders.containerclasses.CommodityItem;
import net.swordie.ms.util.Util;
import net.swordie.ms.world.shop.cashshop.CashItemInfo;
import net.swordie.ms.world.shop.cashshop.CashShop;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import java.util.HashMap;
import java.util.Map;
import java.util.Set;

/**
 * Created on 4/23/2018.
 */
public class CashShopHandler {
    private static final Logger log = LogManager.getLogger();

    @Handler(op = InHeader.CASH_SHOP_QUERY_CASH_REQUEST)
    public static void handleCashShopQueryCashRequest(Client c, InPacket inPacket) {
        c.write(CCashShop.queryCashResult(c.getChr()));
    }

    @Handler(op = InHeader.CASH_SHOP_CASH_ITEM_REQUEST)
    public static void handleCashShopCashItemRequest(Client c, InPacket inPacket) {
        Char chr = c.getChr();
        User user = chr.getUser();
        Account account = chr.getAccount();
        Trunk trunk = account.getTrunk();
        byte type = inPacket.decodeByte();
        CashItemType cit = CashItemType.getRequestTypeByVal(type);
        if (cit == null) {
            log.warn("Unknown cash shop cash item request " + type);
            c.write(CCashShop.error());
            return;
        }

        switch (cit) {
            case Req_Buy:
                handleBuy(c, inPacket, chr, user, account, trunk);
                break;
            case Req_MoveLtoS:
                handleMoveLtoS(c, inPacket, chr, trunk);
                break;
            case Req_MoveStoL:
                handleMoveStoL(c, inPacket, chr, trunk);
                break;
            case Req_SetWish:
                c.write(WvsContext.broadcastMsg(BroadcastMsg.popUpMessage("Wishlist is currently not implemented.")));
                c.write(CCashShop.queryCashResult(chr));
                break;
            case Req_IncSlotCount:
                handleIncSlotCount(c, inPacket, chr, user, account, trunk);
                break;
            case Req_IncTrunkCount:
                handleIncTrunkCount(c, inPacket, user, account, trunk);
                break;
            case Req_IncCharSlotCount:
                handleIncCharSlotCount(c, inPacket, user, account);
                break;
            case Req_IncBuyCharCount:
                handleBuyCharCount(c, inPacket, user, account, chr);
                break;
            case Req_Rebate:
                handleRebate(chr, inPacket, trunk);
                break;
            case Req_BuyPackage:
                handleBuyPackage(c, inPacket, user, account, chr);
                break;
            case Req_ExtraInfo:
                int sn = inPacket.decodeInt();
                c.write(CCashShop.extraInfoResult(sn, 13));
                break;
            default:
                c.write(CCashShop.error());
                log.warn("Unhandled cash shop cash item request " + cit);
                chr.dispose();
                break;
        }
    }

    private static void handleBuyPackage(Client c, InPacket inPacket, User user, Account account, Char chr) {
        var slotType = inPacket.decodeByte();
        var paymentMethod = inPacket.decodeInt();
        var commoditySn = inPacket.decodeInt();

        var comItem = EtcData.getCommodityItem(commoditySn);

        c.write(CCashShop.error());
    }

    private static void handleBuyCharCount(Client c, InPacket inPacket, User user, Account account, Char chr) {
        var slotType = inPacket.decodeByte();
        var paymentMethod = inPacket.decodeInt();
        var commoditySn = inPacket.decodeInt();

        var comItem = EtcData.getCommodityItem(commoditySn);

        if (comItem == null) {
            c.write(CCashShop.error());
            log.warn("Requested item could not be found.");
            return;
        }

        var itemId = comItem.getItemId();
        var itemInfo = ItemData.getItemInfoByID(itemId);

        if (itemInfo == null) {
            c.write(CCashShop.error());
            log.warn("Requested item could not be found.");
            return;
        }

        if (!applyCost(c, user, account, paymentMethod, comItem, 1)) return;

        if (user.getCharacterSlots() >= ServerConstants.MAX_CHARACTERS) {
            c.write(CCashShop.incCharSlotCountFailed(CashItemType.FailReason_LimitOverCharacter));
            return;
        }

        user.setCharacterSlots(user.getCharacterSlots() + 1);

        c.write(CCashShop.incCharSlotCountDone(user.getCharacterSlots()));
    }

    private static void handleIncCharSlotCount(Client c, InPacket inPacket, User user, Account account) {
        var slotType = inPacket.decodeByte();
        var paymentMethod = inPacket.decodeByte();
        inPacket.decodeByte();
        inPacket.decodeByte();
        inPacket.decodeByte();
        var commoditySn = inPacket.decodeInt();

        var comItem = EtcData.getCommodityItem(commoditySn);

        if (comItem == null) {
            c.write(CCashShop.error());
            log.warn("Requested item could not be found.");
            return;
        }

        var itemId = comItem.getItemId();
        var itemInfo = ItemData.getItemInfoByID(itemId);

        if (itemInfo == null) {
            c.write(CCashShop.error());
            log.warn("Requested item could not be found.");
            return;
        }

        if (!applyCost(c, user, account, paymentMethod, comItem, 1)) return;

    }

    private static void handleRebate(Char chr, InPacket inPacket, Trunk trunk) {
        long itemSn;
        CashItemInfo cii;
        inPacket.decodeInt(); // ?
        inPacket.decodeByte(); // ?
        var pin = inPacket.decodeString();

        itemSn = inPacket.decodeLong();
        cii = trunk.getLockerItemBySn(itemSn);

        if (cii == null) {
            chr.write(CCashShop.fullInventoryMsg());
            return;
        }

        trunk.removeCashItem(cii);
        chr.write(CCashShop.rebateDone(cii));
        chr.write(CCashShop.queryCashResult(chr));
    }

    private static void handleIncTrunkCount(Client c, InPacket inPacket, User user, Account account, Trunk trunk) {
        var slotType = inPacket.decodeByte();
        var paymentMethod = inPacket.decodeByte();
        inPacket.decodeByte();
        inPacket.decodeByte();
        inPacket.decodeByte();
        var commoditySn = inPacket.decodeInt();

        var comItem = EtcData.getCommodityItem(commoditySn);

        if (comItem == null) {
            c.write(CCashShop.error());
            log.warn("Requested item could not be found.");
            return;
        }

        var itemId = comItem.getItemId();
        var itemInfo = ItemData.getItemInfoByID(itemId);

        if (itemInfo == null) {
            c.write(CCashShop.error());
            log.warn("Requested item could not be found.");
            return;
        }

        if (!applyCost(c, user, account, paymentMethod, comItem, 1)) return;

        int delta = itemInfo.getDelta();
        trunk.setSlotCount(Math.min(GameConstants.MAX_TRUNK_SIZE, trunk.getSlotCount() + delta));

        c.write(CCashShop.incTrunkCountDone(trunk));
        c.write(CCashShop.queryCashResult(c.getChr()));
    }

    private static void handleIncSlotCount(Client c, InPacket inPacket, Char chr, User user, Account account, Trunk trunk) {
        byte paymentMethod;
        int commoditySn;
        CommodityItem comItem;
        var slotType = inPacket.decodeByte();
        paymentMethod = inPacket.decodeByte();
        inPacket.decodeByte();
        inPacket.decodeByte();
        inPacket.decodeByte();
        commoditySn = inPacket.decodeInt();

        comItem = EtcData.getCommodityItem(commoditySn);

        if (comItem == null) {
            c.write(CCashShop.error());
            log.warn("Requested item could not be found.");
            return;
        }

        var itemId = comItem.getItemId();
        var itemInfo = ItemData.getItemInfoByID(itemId);

        if (itemInfo == null) {
            c.write(CCashShop.error());
            log.warn("Requested item could not be found.");
            return;
        }

        if (!applyCost(c, user, account, paymentMethod, comItem, 1)) return;

        int invTypeVal = (itemId / 1000) % 10;
        int delta = itemInfo.getDelta();
        int slots = 0;
        Map<InvType, Integer> toExpand = new HashMap<>();

        switch (invTypeVal) {
            case 0: // Storage
                trunk.addSlotCount(delta);
                slots = trunk.getSlotCount();
                break;
            case 6: // All
                toExpand.put(InvType.EQUIP, Inventory.MAX_SLOTS);
                slots = Inventory.MAX_SLOTS;
                break;
            default:
                toExpand.put(InvType.getInvTypeByVal(invTypeVal), delta);
                break;
        }

        boolean showMessage = true;

        for (var entry : toExpand.entrySet()) {
            var invType = entry.getKey();
            var increaseCount = entry.getValue();
            var inventory = chr.getInventoryByType(invType);

            if (inventory.getSlots() == Inventory.MAX_SLOTS) {
                showMessage = false;
                continue;
            }

            inventory.increaseSlots(increaseCount);
            slots = inventory.getSlots();
        }

        if (showMessage) {
            c.write(CCashShop.incSlotCountDone(invTypeVal, slots));
        }
        c.write(CCashShop.queryCashResult(chr));
    }

    private static void handleMoveStoL(Client c, InPacket inPacket, Char chr, Trunk trunk) {
        var itemSn = inPacket.decodeLong();
        var item = chr.getItemBySn(itemSn);

        if (item == null || trunk.isFullLocker()) {
            c.write(CCashShop.fullInventoryMsg());
            return;
        }

        var quant = item.getQuantity();

        var cii = CashItemInfo.fromItem(chr, item);
        c.write(CCashShop.resMoveStoLDone(cii, null));
        chr.consumeItemFull(item, false, true);

        item.setQuantity(quant);
        item.setInventory(null);
        item.setTrunk(null);
        trunk.addCashItem(cii);
        c.write(CCashShop.queryCashResult(chr));
    }

    private static void handleMoveLtoS(Client c, InPacket inPacket, Char chr, Trunk trunk) {
        CashItemInfo cii;
        long itemSn = inPacket.decodeLong();
        cii = trunk.getLockerItemBySn(itemSn);
        if (cii == null) {
            c.write(CCashShop.fullInventoryMsg());
            return;
        }
        Item item = cii.getItem();

        if (!chr.canHold(item)) {
            c.write(CCashShop.fullInventoryMsg());
            return;
        }

        trunk.removeCashItem(cii);
        chr.addItemToInventory(item);
        c.write(CCashShop.resMoveLtoSDone(item));
    }

    private static void handleBuy(Client c, InPacket inPacket, Char chr, User user, Account account, Trunk trunk) {
        byte idk1 = inPacket.decodeByte();
        byte paymentMethod = inPacket.decodeByte();
        int idk2 = inPacket.decodeInt();
        byte idk3 = inPacket.decodeByte();
        int commoditySn = inPacket.decodeInt();
        var totalBuyCount = inPacket.decodeInt();

        // save iterative buy info if we get a new batch
        if (totalBuyCount > 0) {
            if (chr.getIterativeBuyInfo() != null) {
                chr.getIterativeBuyInfo().encodeItems(chr);
            }

            chr.setIterativeBuyInfo(new IterativeBuyInfo(totalBuyCount));
        }

        CommodityItem comItem = EtcData.getCommodityItem(commoditySn);

        if (comItem == null) {
            c.write(CCashShop.error());
            log.warn("Requested item could not be found.");
            return;
        }

        if (!applyCost(c, user, account, paymentMethod, comItem, 1)) return;

        CashItemInfo cii = comItem.toCashItemInfo(account, 1);

        var similarItem = trunk.getSimilarEndDateItem(cii);
        if (similarItem != null) {
            similarItem.addQuantity(cii.getQuantity());
            cii = similarItem;
        } else {
            trunk.addCashItem(cii);
        }

        var iterativeBuyInfo = chr.getIterativeBuyInfo();
        if (iterativeBuyInfo != null) {
            iterativeBuyInfo.addCashItemInfo(cii);

            // write packet only when our iterative buy info is done
            if (iterativeBuyInfo.isDone()) {
                iterativeBuyInfo.encodeItems(chr);
                chr.setIterativeBuyInfo(null);
            }
            chr.write(CCashShop.queryCashResult(chr));
        }
    }

    private static boolean applyCost(Client c, User user, Account account, int paymentMethod, CommodityItem comItem, int quantity) {
        long cost = comItem.getPrice();
        cost *= quantity;

        if (cost > Integer.MAX_VALUE) {
            c.write(CCashShop.message(CashItemType.FailReason_NotEnoughMaplePoint));
            log.warn("Character does not have enough to pay for this item (Paying with " + paymentMethod + ")");
            return false;
        }

        boolean notEnoughMoney = true;
        switch (paymentMethod) {
            case 1: // Credit
                if (account.getNxCredit() >= cost) {
                    account.deductNXCredit((int) cost);
                    notEnoughMoney = false;
                }
                break;
            case 2: // Maple points
                if (user.getMaplePoints() >= cost) {
                    user.deductMaplePoints((int) cost);
                    notEnoughMoney = false;
                }
                break;
            case 0x20: // Prepaid
                if (account.getNxPrepaid() >= cost) {
                    account.deductNXPrepaid((int) cost);
                    notEnoughMoney = false;
                }
                break;
        }
        if (notEnoughMoney) {
            c.write(CCashShop.message(CashItemType.FailReason_NotEnoughMaplePoint));
            log.warn("Character does not have enough to pay for this item (Paying with " + paymentMethod + ")");
            return false;
        }
        return true;
    }

    @Handler(op = InHeader.CASH_SHOP_ACTION)
    public static void handleCashShopAction(Char chr, InPacket inPacket) {
        CashShop cashShop = Server.getInstance().getCashShop();
        byte type = inPacket.decodeByte();
        CashShopActionType csat = CashShopActionType.getByVal(type);
        if (csat == null) {
            log.warn("Unhandled cash shop cash action request " + type);
            chr.write(CCashShop.error());
            return;
        }
        switch (csat) {
            case Req_OpenCategory:
                int categoryIdx = inPacket.decodeInt();
//                chr.write(CCashShop.openCategoryResult(cashShop, categoryIdx));
                break;
            case Req_Favorite:
            case Req_Leave:
                break;

            default:
                chr.write(CCashShop.error());
                log.warn("Unhandled cash shop cash action request " + csat);
                chr.dispose();
                break;
        }
    }

    @Handler(op = InHeader.CASH_SHOP_TUTORIAL_DONE)
    public static void handleCashShopTutorialDone(Char chr, InPacket inPacket) {
        QuestManager qm = chr.getQuestManager();
        Quest quest = qm.getOrCreateQuestById(QuestConstants.CASH_SHOP_TUTORIAL);
        quest.setProperty("c", 1);
        quest.setStatus(QuestStatus.Completed);
        qm.addQuest(quest);
    }

    @Handler(op = InHeader.CASH_SHOP_SURPRISE_ITEM_OPEN)
    public static void handleCashShopSurpriseItemOpen(Char chr, InPacket inPacket) {
        var id = inPacket.decodeLong();

        var trunk = chr.getAccount().getTrunk();
        var item = trunk.getLockerItemBySn(id);

        if (item == null) {
            chr.boxMessage("Could not find that item.");
            chr.write(CCashShop.queryCashResult(chr));
            return;
        }

        switch (item.getItemId()) {
            case ItemConstants.SURPRISE_STYLE_BOX:
                Set<DropInfo> dropInfos = SSBConstants.getCurrentSSBInfo(); // Current SSB Pool
                var randomItemId = Util.getRandomDropInfoByChance(dropInfos);
                var randomItem = CashItemInfo.fromNewItem(chr, randomItemId.getItemID(), 1);
                trunk.addCashItem(randomItem);
                trunk.removeQuantity(item, 1);
                chr.write(CCashShop.surpriseItemResult(166, item, randomItem));
                break;
        }


    }

}
