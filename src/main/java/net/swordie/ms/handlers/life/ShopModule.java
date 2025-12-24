package net.swordie.ms.handlers.life;

import net.swordie.ms.client.anticheat.Offense;
import net.swordie.ms.client.character.Char;
import net.swordie.ms.client.character.items.Equip;
import net.swordie.ms.client.character.items.Item;
import net.swordie.ms.connection.InPacket;
import net.swordie.ms.connection.packet.ShopDlg;
import net.swordie.ms.connection.packet.WvsContext;
import net.swordie.ms.connection.packet.model.MessagePacket;
import net.swordie.ms.constants.CustomConstants;
import net.swordie.ms.constants.ItemConstants;
import net.swordie.ms.constants.QuestConstants;
import net.swordie.ms.enums.DailyEntry;
import net.swordie.ms.enums.InvType;
import net.swordie.ms.enums.InventoryOperation;
import net.swordie.ms.loaders.ItemData;
import net.swordie.ms.loaders.containerclasses.ItemInfo;
import net.swordie.ms.util.Util;
import net.swordie.ms.world.shop.NpcShopDlg;
import net.swordie.ms.world.shop.NpcShopItem;
import net.swordie.ms.world.shop.result.ShopResult;
import net.swordie.ms.world.shop.result.ShopResultType;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

public class ShopModule {

    private static final Logger log = LogManager.getLogger();

    public static void handleShopSell(Char chr, InPacket inPacket, NpcShopDlg nsd) {
        var slot = inPacket.decodeShort();
        var itemId = inPacket.decodeInt();
        var quantity = inPacket.decodeShort();
        InvType it = ItemConstants.getInvTypeByItemID(itemId);
        var item = chr.getInventoryByType(it).getItemBySlot(slot);

        if (item == null || item.getItemId() != itemId || item.getQuantity() < quantity) {
            chr.chatMessage("Could not find that item.");
            return;
        }

        if (quantity < 0) {
            chr.getOffenseManager().addOffense(Offense.Type.Editing,
                    "User tried selling negative quantity to NPC shop");
            chr.dispose();
            return;
        }

        if (!chr.hasItemCount(itemId, quantity)) {
            chr.getOffenseManager().addOffense(Offense.Type.Editing,
                    String.format("Possible hack: User tried to sell %d amount of item %d while owning less",
                            quantity, itemId));
            chr.dispose();
            return;
        }

        boolean isBundle = ItemConstants.isRechargable(itemId);

        long cost;
        if (ItemConstants.isEquip(itemId)) {
            cost = ((Equip) item).getInfo().getPrice();
        } else if (isBundle) {
            quantity = (short) item.getQuantity();
            cost = ItemData.getItemInfoByID(itemId).getPrice();
        } else {
            cost = ItemData.getItemInfoByID(itemId).getPrice() * quantity;
        }
        if (item.getPowerCrystalInfo() != null) {
            cost = item.getPowerCrystalInfo().getPrice() + (int)(item.getPowerCrystalInfo().getPrice() * (CustomConstants.BOSS_CRYSTAL_PRICE_INCREASE / 100D));

            //Reduce available Power Crystals
            var quest = chr.getQuestManager().getQuestById(QuestConstants.POWER_CRYSTAL_QUEST);

            //This is blocked client sided, but we still check for it
            if (chr.getAccount().getRemainingEntries(DailyEntry.PowerCrystal) < 0) {
                chr.getOffenseManager().addOffense(Offense.Type.Editing,
                        String.format("Possible hack: User tried to sell an Intense Power crystal while over the limit",
                                quantity, itemId));
                chr.dispose();
                return;
            }
            chr.getAccount().reduceDailyEntry(DailyEntry.PowerCrystal);
            quest.setProperty("count", chr.getAccount().getRemainingEntries(DailyEntry.PowerCrystal));
            chr.write(WvsContext.message(MessagePacket.questRecordExMessage(quest)));
        }

        Item buyBackItem = item.deepCopy();
        buyBackItem.setQuantity(quantity);
        chr.consumeItem(item, quantity);
        chr.addMoney(cost);
        chr.addItemToBuyBack(buyBackItem);
        chr.write(ShopDlg.shopResult(ShopResult.update(chr, nsd)));
    }

    public static void handleShopRecharge(Char chr, InPacket inPacket) {
        short slot = inPacket.decodeShort();
        var item = chr.getConsumeInventory().getItemBySlot(slot);
        if (item == null || !ItemConstants.isRechargable(item.getItemId())) {
            chr.chatMessage(String.format("Was not able to find a rechargable item at position %d.", slot));
            return;
        }
        ItemInfo ii = ItemData.getItemInfoByID(item.getItemId());
        long cost = ii.getSlotMax() - item.getQuantity();
        if (chr.getMoney() < cost) {
            chr.write(ShopDlg.shopResult(ShopResult.msg(ShopResultType.NotEnoughMesosMsg)));
            return;
        }
        chr.deductMoney(cost);
        item.addQuantity(ii.getSlotMax());
        chr.write(WvsContext.inventoryOperation(true, false,
                InventoryOperation.UpdateQuantity, slot, (short) 0, 0, item));
        chr.write(ShopDlg.shopResult(ShopResult.msg(ShopResultType.Success)));
    }

    public static void handleShopBuy(Char chr, InPacket inPacket, NpcShopDlg nsd) {
        short itemIndex = inPacket.decodeShort();
        int itemId = inPacket.decodeInt();
        short quantity = inPacket.decodeShort();
        NpcShopItem nsi = nsd.getItemByIndex(itemIndex, chr.getBuyBack());
        int nsiQuant = nsi.getQuantity();

        if (nsi == null) {
            itemIndex -= nsd.getItems().size();
            nsi = chr.getBuyBackItemBySlot(itemIndex);
        }

        if (nsi == null || nsi.getItemID() != itemId) {
            chr.chatMessage("The server's item at that position was different than the client's.");
            log.warn(String.format("Possible hack: expected shop itemID %d, got %d (chr %d)", nsi.getItemID(), itemId, chr.getId()));
            return;
        }

        if (!chr.canHold(itemId, quantity * nsiQuant) || nsiQuant < 0 || quantity < 0) {
            chr.write(ShopDlg.shopResult(ShopResult.msg(ShopResultType.FullInvMsg)));
            return;
        }

        if (nsi.getTokenItemID() != 0) {
            int cost = nsi.getTokenPrice() * quantity;
            if (chr.hasItemCount(nsi.getTokenItemID(), cost)) {
                chr.consumeItem(nsi.getTokenItemID(), cost);
            } else {
                chr.write(ShopDlg.shopResult(ShopResult.msg(ShopResultType.NotEnoughMesosMsg)));
                return;
            }
        } else if (nsi.getPointQuestID() != 0) {
            var qm = chr.getQuestManager();
            var quest = qm.getQuestById(nsi.getPointQuestID());
            if (quest == null) {
                chr.chatMessage("Not enough points to buy this item.");
                return;
            }
            var pointsStr = quest.getProperty("point");
            int points = 0;
            if (Util.isNumber(pointsStr)) {
                points = Integer.parseInt(pointsStr);
            }
            if (points >= (nsi.getPointPrice() * quantity)) {
                quest.setProperty("point", Math.max(0, points - (nsi.getPointPrice() * quantity)));

                if (quest.getQRKey() == QuestConstants.UNION_COIN) {
                    chr.getUnion().setUnionCoin(Math.max(0, points - (nsi.getPointPrice() * quantity)));
                }
                chr.write(WvsContext.message(MessagePacket.questRecordExMessage(quest)));
                chr.write(WvsContext.message(MessagePacket.questRecordMessage(quest)));
            } else {
                chr.chatMessage("Not enough points to buy this item.");
                return;
            }
        } else {
            long cost = nsi.getPrice() * (long)quantity;
            if (chr.getMoney() < cost) {
                chr.write(ShopDlg.shopResult(ShopResult.msg(ShopResultType.NotEnoughMesosMsg)));
                return;
            }
            chr.deductMoney(cost);
        }

        Item item;
        if (nsi.isBuyBack()) {
            item = nsi.getItem();
            chr.removeBuyBackItem(nsi);
        } else {
            item = ItemData.getItemDeepCopy(itemId);
            item.setQuantity(quantity);
        }
        if (nsi.getQuantity() > 1) {
            item.setQuantity(nsi.getQuantity() * quantity);
        }
        if (ItemConstants.isRechargable(itemId)) {
            var itemInfo = ItemData.getItemInfoByID(itemId);
            item.setQuantity(itemInfo.getSlotMax());
        }
        chr.addItemToInventory(item);

        if (nsi.isBuyBack()) {
            chr.write(ShopDlg.shopResult(ShopResult.update(chr, nsd)));
        } else {
            chr.write(ShopDlg.shopResult(ShopResult.buy(0, 0, -1, 0)));
        }
    }
}
