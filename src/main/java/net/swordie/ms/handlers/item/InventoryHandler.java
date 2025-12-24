package net.swordie.ms.handlers.item;

import net.swordie.ms.client.Client;
import net.swordie.ms.client.character.Char;
import net.swordie.ms.client.character.info.ZeroInfo;
import net.swordie.ms.client.character.info.ZeroInfoCashLinkFlag;
import net.swordie.ms.client.character.info.ZeroInfoFlag;
import net.swordie.ms.client.character.items.BodyPart;
import net.swordie.ms.client.character.items.Equip;
import net.swordie.ms.client.character.items.Inventory;
import net.swordie.ms.client.character.items.Item;
import net.swordie.ms.client.character.modules.BagItemModule;
import net.swordie.ms.connection.InPacket;
import net.swordie.ms.connection.packet.AndroidPacket;
import net.swordie.ms.connection.packet.ItemOperation;
import net.swordie.ms.connection.packet.WvsContext;
import net.swordie.ms.constants.GameConstants;
import net.swordie.ms.constants.ItemConstants;
import net.swordie.ms.constants.QuestConstants;
import net.swordie.ms.enums.AccountType;
import net.swordie.ms.enums.BagItemInventoryOperation;
import net.swordie.ms.enums.FieldOption;
import net.swordie.ms.enums.InvType;
import net.swordie.ms.events.Events;
import net.swordie.ms.handlers.Handler;
import net.swordie.ms.handlers.header.InHeader;
import net.swordie.ms.life.drop.Drop;
import net.swordie.ms.loaders.ItemData;
import net.swordie.ms.util.Position;
import net.swordie.ms.util.container.Tuple;
import net.swordie.ms.world.field.Field;
import net.swordie.ms.world.field.Foothold;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

import static net.swordie.ms.enums.InvType.*;
import static net.swordie.ms.enums.InventoryOperation.*;

public class InventoryHandler {

    private static final Logger log = LogManager.getLogger();


    @Handler(op = InHeader.USER_CHANGE_SLOT_POSITION_REQUEST)
    public static void handleUserChangeSlotPositionRequest(Client c, InPacket inPacket) {
        Char chr = c.getChr();
        if(chr == null || !chr.isOnline() || chr.getUser() == null) {
            log.error(String.format("[CharId: %d] Dropped item or moving item in inventory while being offline.", chr.getId()));
            c.write(WvsContext.returnToTitle());
            c.close();
            return;
        }
        inPacket.decodeInt(); // update tick
        InvType invType = InvType.getInvTypeByVal(inPacket.decodeByte());
        short oldPos = inPacket.decodeShort();
        short newPos = inPacket.decodeShort();
        short quantity = inPacket.decodeShort();

        InvType invTypeFrom = invType == EQUIP ? oldPos < 0 ? EQUIPPED : EQUIP : invType;
        invTypeFrom = invTypeFrom == DEC ? oldPos < 0 ? EQUIPPED : DEC : invTypeFrom;
        Inventory inventoryFrom = chr.getInventoryByType(invTypeFrom);

        Item item = inventoryFrom.getItemBySlot(oldPos);

        if (item == null) {
            chr.dispose();
            return;
        }

        InvType invTypeTo = invType == EQUIP
                ? newPos < 0
                    ? EQUIPPED
                    : EQUIP
                : invType;
        invTypeTo = invTypeTo == DEC
                ? newPos < 0
                    ? EQUIPPED
                    : DEC
                : invTypeTo;

        Inventory inventoryTo = chr.getInventoryByType(invTypeTo);

        int maxSlots = inventoryTo.getSlots();
        if (invTypeTo != EQUIPPED && newPos > maxSlots) {
            chr.getOffenseManager().addOffense("Invalid position to move an item to.", maxSlots, newPos);
            chr.dispose();
            return;
        }

        Item swapItem = inventoryTo.getItemBySlot(newPos);
        if (swapItem != null && invTypeFrom != invTypeTo && chr.getEquipInventory().isFull() && newPos != 0) {
            chr.chatMessage("Your equip inventory is full. Please make some space.");
            chr.dispose();
            return;
        }

        if (newPos == 0) { // Drop
            dropItem(c, chr, oldPos, newPos, quantity, inventoryFrom, item);
        } else {
            int beforeSizeOn = chr.getEquippedInventory().getItems().size();
            int beforeSize = chr.getEquipInventory().getItems().size();
            int beforeSizeDec = chr.getDecInventory().getItems().size();

            if (invType.isEquipType() && invTypeFrom != invTypeTo) {
                if (equipItem(chr, oldPos, newPos, invTypeFrom, invTypeTo, item, swapItem)) return;

            } else if (invTypeFrom == EQUIPPED && invTypeTo == EQUIPPED) {
                swapEquippedItem(chr, newPos, item);
            }

            if (swapItem != null) {
                // all checks for valid slots should have been done at this point
                swapItem.setBagIndex(oldPos);
            }

            int afterSizeOn = chr.getEquippedInventory().getItems().size();
            int afterSize = chr.getEquipInventory().getItems().size();
            int afterSizeDec = chr.getDecInventory().getItems().size();

            if (afterSize + afterSizeOn + afterSizeDec != beforeSize + beforeSizeOn + beforeSizeDec) {
                throw new RuntimeException("Data duplication!");
            }

            item.setBagIndex(newPos);
            c.write(WvsContext.inventoryOperation(true, false, Move, oldPos, newPos,
                    0, item));
            item.updateToChar(chr);
        }
        chr.setBulletIDForAttack(chr.calculateBulletIDForAttack());

        if (newPos < 0
                && -newPos >= BodyPart.APBase.getVal() && -newPos < BodyPart.APEnd.getVal()
                && chr.getAndroid() != null) {
            // update android look
            chr.getField().broadcastPacket(AndroidPacket.modified(chr.getAndroid()));
        }
    }

    private static boolean equipItem(Char chr, short oldPos, short newPos, InvType invTypeFrom, InvType invTypeTo, Item item, Item swapItem) {
        // TODO: check uniqueness of equip before we allow the player to equip this

        /*if (!chr.canEquip(item)) {
            chr.chatMessage("You need more stat to equip that item.");
            chr.dispose();
            return true;
        }*/

        if (invTypeFrom == EQUIPPED) {
            return equipFromEquippedToEquip(chr, oldPos, invTypeTo, item, swapItem);
        } else {
            return equipFromEquipToEquipped(chr, newPos, item, swapItem);
        }
    }

    @Handler(op = InHeader.ZERO_SHARE_CASH_EQUIP_PART)
    public static void handleZeroShareCashEquipPart(Char chr, InPacket inPacket) {
        int bodyPartVal = inPacket.decodeInt();
        boolean share = inPacket.decodeByte() != 0; // if true, place onto other body part too

        BodyPart bodyPart = BodyPart.getByVal(bodyPartVal);
        if (bodyPart == null) {
            log.error("Could not find BodyPart for value = " + bodyPartVal);
            return;
        }
        BodyPart cashBodyPart = BodyPart.getByVal(Math.abs(bodyPartVal) + 100);
        Equip alphaEquip = (Equip) chr.getEquippedInventory().getItemBySlot(cashBodyPart.getVal()); // Alpha

        BodyPart betaCashBodyPart = bodyPart.getBetaCashBodyPart();
        if (betaCashBodyPart == null) {
            log.error("Found no Beta CashBodyPart for BodyPart " + bodyPartVal);
            chr.dispose();
            return;
        }

        if (chr.getEquipInventory().isFull()) {
            chr.chatMessage("You do not have enough space.");
            chr.dispose();
            return;
        }

        ZeroInfo zi = chr.getZeroInfo();
        Set<ZeroInfoCashLinkFlag> cashLinks = ZeroInfoCashLinkFlag.getCashLinksFromFlag(zi.getDbcharZeroLinkCashPart());
        ZeroInfoCashLinkFlag cashLink = ZeroInfoCashLinkFlag.getByBetaCashBodyPart(betaCashBodyPart);
        if (share) {
            Equip betaEquip = (Equip) chr.getEquippedInventory().getItemBySlot(betaCashBodyPart.getVal()); // Beta
            if (betaEquip != null) {
                chr.unequip(betaEquip);
                int bagIndex = chr.getEquipInventory().getFirstOpenSlot();
                betaEquip.setBagIndex(bagIndex);
                chr.write(WvsContext.inventoryOperation(true, false, Move, (short) -betaCashBodyPart.getVal(), (short) bagIndex,
                        0, betaEquip));
                betaEquip.updateToChar(chr);
            }
            chr.equipAvatarLookLogic(alphaEquip, betaCashBodyPart.getVal());

            cashLinks.add(cashLink);

            zi.setDbcharZeroLinkCashPart(ZeroInfoCashLinkFlag.getMaskByCashLinks(cashLinks));
        } else {
            cashLinks.remove(cashLink);
            zi.setDbcharZeroLinkCashPart(ZeroInfoCashLinkFlag.getMaskByCashLinks(cashLinks));
        }

        chr.write(WvsContext.zeroInfo(chr.getZeroInfo(), ZeroInfoFlag.ZeroLinkCashPart.getVal()));
    }

    private static void swapEquippedItem(Char chr, short newPos, Item item) { // Used for Zero's switching of Cash Equips between Alpha&Beta
        chr.unequipAvatarLookLogic((Equip) item, item.getBagIndex());
        chr.equipAvatarLookLogic((Equip) item, newPos);
    }

    private static boolean canEquip(Char chr, Item equip, int newPos) {
        var itemId = equip.getItemId();

        if (ItemConstants.isArcaneSymbol(equip.getItemId()) && (chr.getEquippedInventory().hasItem(equip.getItemId()) || !chr.getQuestManager().hasQuestCompleted(QuestConstants.FIFTH_JOB_QUEST))) {
            // Only one type of arcane symbol can be equipped at one time.
            chr.chatMessage("You must be 5th job and not already have a symbol of the same type equipped to equip this.");
            chr.dispose();
            return false;
        }

        if (ItemConstants.isAuthenticForceSymbol(equip.getItemId()) && (chr.getEquippedInventory().hasItem(equip.getItemId()) || !chr.getQuestManager().hasQuestCompleted(QuestConstants.A_DIVINE_POWER))) {
            // Only one type of arcane symbol can be equipped at one time.
            chr.chatMessage("You must have completed 'A divine power' and not already have a symbol of the same type equipped to equip this.");
            chr.dispose();
            return false;
        }

        List<Integer> possibleEquipPositions = ItemConstants.getBodyPartArrayFromItem(
                itemId,
                chr.getAvatarData().getCharacterStat().getGender()
        );

        var bodyPart = BodyPart.getByVal(Math.abs(newPos));
        var equippable = bodyPart != null && bodyPart.matches(equip);
        var secondary = chr.getEquippedItemByBodyPart(BodyPart.Shield);
        var isCash = equip.isCash();

        // Check if shield is allowed with weapon, or weapon is allowed with shield
        if (!isCash && (ItemConstants.isShield(itemId) || (secondary != null && ItemConstants.isWeapon(itemId) && ItemConstants.isShield(secondary.getItemId())))) {
            var weaponType = ItemConstants.isWeapon(itemId)
                    ? ItemConstants.getWeaponType(itemId)
                    : chr.getWeaponType();
            equippable = ItemConstants.canWearShield(weaponType);
        }

        var info = ItemData.getEquipInfoById(itemId);
        var unique = info != null && info.isOnlyEquip();

        var alreadyEquippedUniqueItem = false;
        if (unique) {
            alreadyEquippedUniqueItem = chr.getEquippedInventory().hasItem(itemId);
        }

        var canEquip = possibleEquipPositions.contains(Math.abs(newPos)) && equippable && !alreadyEquippedUniqueItem;

        if (!canEquip) {
            chr.getOffenseManager().addOffense(String.format("Invalid position to equip %d! Possible: %s, got %d.",
                    itemId, possibleEquipPositions, newPos));

            if (chr.getUser().getAccountType() != AccountType.Player) {
                chr.chatMessage("Invalid position to equip %d! Possible: %s, got %d.",
                        itemId, possibleEquipPositions, newPos);
            } else {
                chr.chatMessage("You cannot equip that there.");
            }
            chr.dispose();
        }

        return canEquip;
    }

    private static boolean equipFromEquipToEquipped(Char chr, short newPos, Item item, Item swapItem) {
        if (!canEquip(chr, item, newPos)) {
            return true;
        }

        if (swapItem != null) {
            chr.unequip(swapItem, true);
        }

        chr.equip(item, newPos);
        return false;
    }

    private static boolean equipFromEquippedToEquip(Char chr, short oldPos, InvType invTypeTo, Item item, Item swapItem) {
        if (invTypeTo.isEquipType() && swapItem != null) {
            if (!canEquip(chr, swapItem, oldPos)) {
                return true;
            }

            chr.unequip(item, true);
            chr.equip(swapItem, oldPos);
        } else {
            chr.unequip(item);
        }
        return false;
    }

    private static void dropItem(Client c, Char chr, short oldPos, short newPos, short quantity, Inventory inventoryFrom, Item item) {
        Field field = chr.getField();

        if ((field.getInfo().getFieldLimit() & FieldOption.DropLimit.getVal()) > 0) {
            chr.dispose();
            return;
        }

        boolean isInBag = item.isInBag();
        boolean fullDrop;
        Drop drop;
        if (!item.getInvType().isStackable(item.getItemId()) || quantity >= item.getQuantity()
                || ItemConstants.isThrowingStar(item.getItemId()) || ItemConstants.isBullet(item.getItemId())) {
            // Whole item is dropped (equip/stackable items with all their quantity)
            fullDrop = true;
            inventoryFrom.removeItem(item, true);
            item = item.deepCopy();
            item.drop();
            drop = new Drop(-1, item);
        } else {
            // Part of the stack is dropped
            fullDrop = false;
            Item dropItem = item.deepCopy();
            dropItem.setQuantity(quantity);
            item.removeQuantity(quantity);
            drop = new Drop(-1, dropItem);
        }
        int x = chr.getPosition().getX();
        int y = chr.getPosition().getY();
        Foothold fh = chr.getField().findFootHoldBelow(new Position(x, y - GameConstants.DROP_HEIGHT));
        var dropPos = new Position(x, fh.getYFromX(x));
        chr.getField().drop(drop, chr.getPosition(), dropPos);
        drop.setCanBePickedUpByPet(false);
        drop.setDropper(chr);
        if (fullDrop) {
            c.write(WvsContext.inventoryOperation(true, false, isInBag ? BagRemove : Remove,
                    oldPos, newPos, 0, item));
        } else {
            c.write(WvsContext.inventoryOperation(true, false, isInBag ? UpdateBagQuantity : UpdateQuantity,
                    oldPos, newPos, 0, item));
        }

        Events.onItemDropped(chr, item, quantity, dropPos, drop);
    }

    @Handler(op = InHeader.USER_GATHER_ITEM_REQUEST)
    public static void handleUserGatherItemRequest(Char chr, InPacket inPacket) {
        inPacket.decodeInt(); // tick
        InvType invType = InvType.getInvTypeByVal(inPacket.decodeByte());
        if (invType == null) {
            chr.dispose();
            return;
        }
        Inventory inv = chr.getInventoryByType(invType);
        List<Item> items = inv.getItems().stream().filter(i -> !i.isInBag()).sorted(Comparator.comparingInt(Item::getBagIndex)).collect(Collectors.toList());
        List<ItemOperation> itemOps = new ArrayList<>();
        for (Item item : items) {
            var newPos = inv.getFirstOpenSlot();
            var oldPos = item.getBagIndex();
            if (newPos >= oldPos) {
                continue;
            }
            item.setBagIndex(newPos);
            ItemOperation itemOp = new ItemOperation();
            itemOp.type = Move;
            itemOp.item = item;
            itemOp.newPos = (short) newPos;
            itemOp.pos = (short) oldPos;
            itemOps.add(itemOp);
        }

        chr.write(WvsContext.inventoryOperation(true, false, itemOps));
        chr.write(WvsContext.gatherItemResult(invType.getVal()));
        chr.dispose();
    }

    @Handler(op = InHeader.USER_SORT_ITEM_REQUEST)
    public static void handleUserSortItemRequest(Char chr, InPacket inPacket) {
        inPacket.decodeInt(); // tick
        InvType invType = InvType.getInvTypeByVal(inPacket.decodeByte());
        if (invType == null) {
            chr.dispose();
            return;
        }
        Inventory inv = chr.getInventoryByType(invType);
        List<Item> items = inv.getItems().stream().filter(i -> !i.isInBag()).sorted(Comparator.comparingInt(Item::getItemId)).collect(Collectors.toList());
        List<ItemOperation> itemOps = new ArrayList<>();
        List<Tuple<Integer, Integer>> moveTuple = new ArrayList<>();
        for (Item item : items) {
            var newPos = items.indexOf(item) + 1;
            var oldPos = item.getBagIndex();


            if (newPos == oldPos || moveTuple.contains(new Tuple<>(oldPos, newPos))) { // yes,  oldPos, newPos
                continue; // Ignore items that would not change position
            }
            moveTuple.add(new Tuple<>(newPos, oldPos));

            Item newPosItem = inv.getItemBySlot(newPos);
            if (newPosItem != null) {
                newPosItem.setBagIndex(oldPos);
            }

            item.setBagIndex(newPos);

            ItemOperation itemOp = new ItemOperation();
            itemOp.type = Move;
            itemOp.item = item;
            itemOp.newPos = (short) newPos;
            itemOp.pos = (short) oldPos;
            itemOps.add(itemOp);
        }

        chr.write(WvsContext.inventoryOperation(true, false, itemOps));
        chr.write(WvsContext.sortItemResult(invType.getVal()));
        chr.dispose();
    }

    @Handler(op = InHeader.USER_POP_OR_PUSH_BAG_ITEM_TO_INVEN)
    public static void handleUserPopOrPushBagItemToInven(Char chr, InPacket inPacket) {
        inPacket.decodeInt(); // tick
        var changeTypeVal = inPacket.decodeInt(); // 0, 1, 2, 3
        BagItemInventoryOperation changeType = BagItemInventoryOperation.getByVal(changeTypeVal);
        // 0  AddToBagItem
        // 1  RemoveFromBagItem
        // 2  AddToBagItemFirstSlot -> InventoryOp 5
        // 3  RemoveFromBagItem First Slot
        var inventoryType = inPacket.decodeByte();
        InvType invType = InvType.getInvTypeByVal(inventoryType);

        var bagPos = -1;
        var invenPos = -1;
        if (changeType != BagItemInventoryOperation.AddToBagFirstPos) {
            bagPos = inPacket.decodeInt(); // BagItem Identifier & Position
        }
        if (changeType != BagItemInventoryOperation.RemoveFromBagFirstPos) {
            invenPos = inPacket.decodeShort(); // invenPos
        }

        switch (changeType) {
            case AddToBag:
            case AddToBagFirstPos:
                Item item = chr.getInventoryByType(getInvTypeByVal(inventoryType)).getItemBySlot(invenPos);
                if (item == null) {
                    break;
                }

                if (changeType == BagItemInventoryOperation.AddToBagFirstPos) { // Add To Bag First Pos
                    var lastBagItemOpened = chr.getLastBagItemIndexOpened();
                    if (lastBagItemOpened == -1) {
                        break;
                    }

                    bagPos = BagItemModule.getFirstFreeSlotInBagItem(chr, invType, lastBagItemOpened);
                }

                moveItemToBagItem(chr, item, invType, bagPos, invenPos);
                break;
            case RemoveFromBag:
            case RemoveFromBagFirstPos:
                item = chr.getInventoryByType(getInvTypeByVal(inventoryType)).getItemBySlot(bagPos);
                if (item == null) {
                    break;
                }

                if (changeType == BagItemInventoryOperation.RemoveFromBagFirstPos) {
                    invenPos = chr.getInventoryByType(invType).getFirstOpenSlot();
                }

                moveItemFromBagItem(chr, item, invType, bagPos, invenPos);
                break;
        }
        chr.dispose();
    }

    private static void moveItemFromBagItem(Char chr, Item item, InvType invType, int bagPos, int invPos) {
        int bagItemIndex = BagItemModule.getBagItemIndexByBagItemIdentifier(bagPos);

        if (chr.getInventoryByType(invType).isFull()) {
            return;
        }

        Item toItem = chr.getInventoryByType(invType).getItemBySlot(invPos);
        if (toItem != null) {
            toItem.setBagItemIndex(bagItemIndex);
            toItem.setBagIndex(bagPos);
        }
        item.setBagItemIndex(-1); // No BagItem
        item.setBagIndex(invPos); // place at position

        chr.write(WvsContext.inventoryOperation(true, false, UpdateBagPos, (short) invPos, (short) bagPos, 0, item));
    }

    private static void moveItemToBagItem(Char chr, Item item, InvType invType, int bagPos, int invPos) {
        int bagItemIndex = BagItemModule.getBagItemIndexByBagItemIdentifier(bagPos);
        Item bagItemOwner = BagItemModule.getBagItemOwnerByBagItemIndex(chr, invType, bagItemIndex);
        if (bagItemOwner == null) {
            return;
        }

        if (BagItemModule.isBagItemFull(chr, bagItemOwner)) {
            return;
        }

        Item toItem = chr.getInventoryByType(invType).getItemBySlot(bagPos);
        if (toItem != null) {
            toItem.setBagItemIndex(-1);
            toItem.setBagIndex(invPos);
        }
        item.setBagItemIndex(bagItemIndex); // place in BagItem
        item.setBagIndex(bagPos); // place at position

        chr.write(WvsContext.inventoryOperation(true, false, UpdateBagPos, (short) invPos, (short) bagPos, (short) bagPos, item));
    }

    @Handler(op = InHeader.USER_BAG_TO_BAG_ITEM)
    public static void handleUserBagToBagItem(Char chr, InPacket inPacket) {
        inPacket.decodeInt(); // tick
        int fromBagPos = inPacket.decodeInt();
        int toBagPos = inPacket.decodeInt();
        int invTypeVal = inPacket.decodeInt();
        InvType it = InvType.getInvTypeByVal(invTypeVal);

        moveItemInBag(chr, fromBagPos, toBagPos, it);
        chr.dispose();
    }

    public static void moveItemInBag(Char chr, int fromBagPos, int toBagPos, InvType it) {
        Item fromItem = chr.getInventoryByType(it).getItemBySlot(fromBagPos);
        int fromBagItemIndex = BagItemModule.getBagItemIndexByBagItemIdentifier(fromBagPos);
        if (fromItem == null) {
            chr.dispose();
            return;
        }

        List<ItemOperation> ios = new ArrayList<>();
        Item toItem = chr.getInventoryByType(it).getItemBySlot(toBagPos);
        int toBagItemIndex = BagItemModule.getBagItemIndexByBagItemIdentifier(toBagPos);

        // Move FromItem to ToBagPos
        ItemOperation io = new ItemOperation();
        io.type = BagToBag;
        io.pos = (short) fromBagPos;
        io.newPos = (short) toBagPos;
        io.item = fromItem;
        ios.add(io);
        fromItem.setBagIndex(toBagPos);
        fromItem.setBagItemIndex(toBagItemIndex);

        if (toItem != null) {
            toItem.setBagIndex(fromBagPos);
            toItem.setBagItemIndex(fromBagItemIndex);
        }

        chr.write(WvsContext.inventoryOperation(true, false, BagToBag, (short) fromBagPos, (short) toBagPos, 0, fromItem));
    }
}
