package net.swordie.ms.client.character.modules;

import net.swordie.ms.client.character.Char;
import net.swordie.ms.client.character.items.*;
import net.swordie.ms.client.character.skills.Skill;
import net.swordie.ms.client.character.skills.info.SkillUseInfo;
import net.swordie.ms.client.jobs.resistance.demon.DemonAvenger;
import net.swordie.ms.client.soulcollection.SoulCollectionModule;
import net.swordie.ms.connection.packet.ItemOperation;
import net.swordie.ms.connection.packet.WvsContext;
import net.swordie.ms.constants.CustomConstants;
import net.swordie.ms.constants.ItemConstants;
import net.swordie.ms.constants.JobConstants;
import net.swordie.ms.constants.SoulCollectionConstants;
import net.swordie.ms.enums.InvType;
import net.swordie.ms.enums.InventoryOperation;
import net.swordie.ms.enums.Stat;
import net.swordie.ms.life.drop.Drop;
import net.swordie.ms.loaders.ItemData;
import net.swordie.ms.loaders.SkillData;
import net.swordie.ms.loaders.containerclasses.ItemInfo;
import net.swordie.ms.util.FileTime;
import net.swordie.ms.util.container.Tuple;

import java.util.*;
import java.util.stream.Collectors;

import static net.swordie.ms.client.character.skills.temp.CharacterTemporaryStat.*;
import static net.swordie.ms.enums.InvType.EQUIP;
import static net.swordie.ms.enums.InvType.EQUIPPED;
import static net.swordie.ms.enums.InventoryOperation.*;

/**
 * Created on 28/06/2020.
 *
 * @author Asura
 */
public class InventoryModule {

    /**
     * Checks if 'chr' can hold the item with itemId 'itemId'.
     *
     * @param chr
     *      The character to check the inventory of.
     * @param itemId
     *      The item to check if 'chr' can hold.
     * @return
     *      If 'chr' can hold the item, true. False otherwise.
     */
    public static boolean canHold(Char chr, int itemId) {
        return canHold(chr, itemId, 1);
    }

    /**
     * Check if 'chr' can hold at least 'quantity' items with the itemId 'itemId'.
     *
     * @param chr
     *      The character to check the inventory of.
     * @param itemId
     *      The item to check if 'chr' can hold.
     * @param quantity
     *      The quantity of items that 'chr' needs to be able to hold.
     * @return
     *      Whether or not 'chr' can hold 'quantity' items with itemId 'itemId'.
     */
    public static boolean canHold(Char chr, int itemId, int quantity) {
        Item item = ItemData.getItemDeepCopy(itemId);
        item.setQuantity(quantity);
        return canHold(chr, item);
    }

    /**
     * Checks if 'chr' can hold the 'item' and it's quantity.
     *
     * @param chr
     *      The character to check the inventory of.
     * @param item
     *      The item instance to check if 'chr' can hold.
     * @return
     *      Whether or not 'chr' can hold 'item'.
     */
    public static boolean canHold(Char chr, Item item) {
        return canHold(chr, Collections.singletonList(item));
    }

    /**
     * Checks if 'chr' can hold ALL items in the 'items' list.
     * 'items' must comprise of unique stackable itemIds. Otherwise will fail.
     *
     * @param chr
     *      The character to check the inventory of.
     * @param items
     *      The List of items to be checked
     * @return
     *      True if 'chr' can hold ALL items. False otherwise
     */
    public static boolean canHold(Char chr, List<Item> items) {
        // Filtering
        List<Item> filteredItems = items.stream().filter(i -> i.getQuantity() > 0).collect(Collectors.toList());

        // Check Non-Stackable Items
        Map<InvType, Integer> nonStackableMap = new HashMap<>(); // InvType -> count
        for (Item item : filteredItems) {
            if (ItemConstants.isStackable(item)) {
                continue;
            }
            var curCount = nonStackableMap.getOrDefault(item.getInvType(), 0);
            nonStackableMap.put(item.getInvType(), curCount + 1);
        }
        for (Map.Entry<InvType, Integer> entry : nonStackableMap.entrySet()) {
            if (chr.getInventoryByType(entry.getKey()).getEmptySlots() < entry.getValue()) {
                return false;
            }
        }


        // Check Stackable Items
        for (Item item : filteredItems) {
            if (!ItemConstants.isStackable(item)) {
                continue;
            }

            InvType invType = item.getInvType();
            Inventory inventory = chr.getInventoryByType(invType);

            ItemInfo ii = ItemData.getItemInfoByID(item.getItemId());
            var maxQuantityOnItem = ii.getSlotMax();

            // Get the maximimum quantity that the inventory could hold of that ItemId
            // Get the quantity of that item it is currently holding

            // Check if the Item's Quantity is more than available
            var curQuantity = getItemCount(chr, item.getItemId());
            var maxQuantityTotal = (inventory.getItemsNotInBag().stream()
                    .filter(i -> i.getItemId() == item.getItemId() && !i.hasExpireDate())
                    .count() + inventory.getEmptySlots()) * maxQuantityOnItem;
            var availableQuantity = maxQuantityTotal - curQuantity;

            if (item.getQuantity() > availableQuantity) {
                return false;
            }
        }

        return true;
    }


    /**
     * Checks if 'chr' has an item with itemId 'itemId'.
     *
     * @param chr
     *      The character to check the inventory of.
     * @param itemId
     *      The item to check if 'chr' has.
     * @return
     *      Return whether or not 'chr' has the Item.
     */
    public static boolean hasItem(Char chr, int itemId) {
        return hasItem(chr, itemId, 1);
    }

    /**
     * Check if 'chr' has an item with itemId 'itemId' and atleast 'quantity' of them.
     *
     * @param chr
     *      The character to check the inventory of.
     * @param itemId
     *      The specific itemId to check for.
     * @param quantity
     *      The minimum quantity that 'chr' needs to have.
     * @return
     *      Returns whether or not 'chr' has 'quantity' (or more) of Items with 'itemId'.
     */
    public static boolean hasItem(Char chr, int itemId, int quantity) {
        return getItemCount(chr, itemId) >= quantity;
    }


    /**
     * Returns the amount of items in 'chr' inventory with the itemId 'itemId'.
     *
     * @param chr
     *      The character to check the inventory of.
     * @param itemId
     *      The itemId to count.
     * @return
     *      The amount of items in 'chr' inventory with itemId 'itemId'.
     */
    public static int getItemCount(Char chr, int itemId) {
        Inventory inv = chr.getInventoryByType(ItemData.getItemDeepCopy(itemId).getInvType());
        return inv.getItemsNotInBag().stream()
                .filter(i -> i.getItemId() == itemId)
                .mapToInt(Item::getQuantity)
                .sum();
    }


    /**
     * Drops 'item' from 'inventory'.
     * This method only does the inventory manipulation part.
     *
     *
     * @param chr
     *      character the inventory changes will be sent to.
     * @param inventory
     *      Inventory that will be manipulated.
     * @param item
     *      Item that will be dropped.
     * @param quantity
     *      Quantity of the item that is dropped.
     * @return
     *      instance of {@link Drop} that should be dropped.
     */
    public static Drop dropItem(Char chr, Inventory inventory, Item item, int quantity) {
        Drop drop;
        boolean isInBag = item.isInBag();
        var oldPos = item.getBagIndex();
        boolean fullDrop;
        if (!ItemConstants.isStackable(item) || quantity >= item.getQuantity()) {
            // Whole item is dropped (equip/stackable items with all their quantity)
            fullDrop = true;
            inventory.removeItem(item, true);
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
        if (fullDrop) {
            chr.write(WvsContext.inventoryOperation(true, false, isInBag ? BagRemove : Remove,
                    (short) oldPos, (short) 0, 0, item));
        } else {
            chr.write(WvsContext.inventoryOperation(true, false, isInBag ? UpdateBagQuantity : UpdateQuantity,
                    (short) oldPos, (short) oldPos, 0, item));
        }

        return drop;
    }

    // Sell

    /**
     *
     * @param chr
     * @param equip
     * @param newPos
     * @return
     */
    public static boolean equipItem(Char chr, Equip equip, int oldPos, int newPos) {
        int bagIndex = equip.getBagIndex();

        if (equip.hasSpecialAttribute(EquipSpecialAttribute.Vestige)) {
            return false;
        }

        if (chr.getEquippedInventory().getItemBySlot(-newPos) != null) {
            unequipItem(chr, equip, oldPos, true);
        }

        if (equip.isEquipTradeBlock()) {
            equip.setTradeBlock(true);
            equip.setEquipTradeBlock(false);
            equip.setEquippedDate(FileTime.currentTime());
            equip.addAttribute(EquipAttribute.Untradable);
        }

        chr.getInventoryByType(EQUIP).removeItem(equip, false);
        chr.getInventoryByType(EQUIPPED).addItem(equip);
        equip.setBagIndex(-newPos);
        chr.equipAvatarLookLogic(equip, newPos); // Change Avatar Look

        if (!equip.hasAttribute(EquipAttribute.NoNonCombatStatGain) && equip.getInfo().getCharmEXP() != 0) {
            chr.addStatAndSendPacket(Stat.charmEXP, equip.getInfo().getCharmEXP());
            equip.addAttribute(EquipAttribute.NoNonCombatStatGain);
        }

        equipAdditionalChecks(chr, equip);

        chr.write(WvsContext.inventoryOperation(true, false, Move, (short) bagIndex, (short) -newPos, 0, equip));
        return true;
    }

    /**
     *
     * @param chr
     * @param equip
     * @param byEquip
     * @return
     */
    public static boolean unequipItem(Char chr, Equip equip, int newPos, boolean byEquip) {
        if (chr.getInventoryByType(EQUIP).getEmptySlots() <= 0) {
            return false;
        }

        chr.getInventoryByType(EQUIPPED).removeItem(equip, false);
        chr.getInventoryByType(EQUIP).addItem(equip);

        int pos = equip.getBagIndex();
        chr.unequipAvatarLookLogic(equip, pos);
        equip.setBagIndex(newPos);

        unequipAdditionalChecks(chr, equip);

        if (!byEquip) {
            chr.write(WvsContext.inventoryOperation(true, false, Move, (short) -pos, (short) equip.getBagIndex(), 0, equip));
        }

        return true;
    }


    private static void equipAdditionalChecks(Char chr, Equip equip) {
        int itemID = equip.getItemId();
        List<Skill> skills = new ArrayList<>();
        for (ItemSkill itemSkill : ItemData.getEquipInfoById(equip.getItemId()).getItemSkillsByEquipLv(equip.getItemLevel())) {
            Skill skill = SkillData.getSkillDeepCopyById(itemSkill.getSkill());
            int slv = itemSkill.getSlv();

            // support for Tower of Oz rings
            if (equip.getItemLevel() > 0) {
                slv = (byte) Math.min(equip.getItemLevel(), skill.getMaxLevel());
            }

            if (skill != null) {
                skill.setCurrentLevel(slv);
                skills.add(skill);
                chr.addSkill(skill);
            }
        }

        if (skills.size() > 0) {
            chr.write(WvsContext.changeSkillRecordResult(skills, true, false, false, false));
        }

        int equippedSummonSkill = ItemConstants.getEquippedSummonSkillItem(equip.getItemId(), chr.getJob());
        if (equippedSummonSkill != 0) {
            chr.getJobHandler().handleSkill(chr, chr.getTemporaryStatManager(), equippedSummonSkill, (byte) 1, null, new SkillUseInfo());
        }

        chr.initSoulMP();

        if (equip.getSoulOptionId() > 0) {
            var soulSkillID = SoulCollectionConstants.getSoulSkillFromSoulID(equip.getSoulOptionId());
            var soulType = SoulCollectionConstants.getBossSoulTypeBySoulId(equip.getSoulOptionId());
            var soulSkillLv = 1;
            if (soulType != null) {
                soulSkillLv = SoulCollectionModule.getSoulSkillLevelBySoulType(chr, soulType);
            }
            chr.addSkill(soulSkillID, soulSkillLv, 2);
        }

        equip.updateDecentSkills(chr, true);

        if (JobConstants.isDemonAvenger(chr.getJob())) {
            ((DemonAvenger) chr.getJobHandler()).sendHpUpdate();
        }

        // check android status
        if (ItemConstants.isAndroid(itemID) || ItemConstants.isMechanicalHeart(itemID)) {
            chr.initAndroid(true);
            if (chr.getAndroid() != null) {
                chr.getField().spawnLife(chr.getAndroid(), null);
            }
        }

        chr.getEquippedInventory().recalcBaseStats(chr);

        chr.capHpMpToMax();
    }

    private static void unequipAdditionalChecks(Char chr, Equip equip) {
        int itemID = equip.getItemId();
        if (chr.getTemporaryStatManager().hasStat(SoulMP) && ItemConstants.isWeapon(equip.getItemId())) {
            chr.getTemporaryStatManager().removeStat(SoulMP);
            chr.getTemporaryStatManager().removeStat(FullSoulMP);
            chr.getTemporaryStatManager().sendResetStatPacket();
        }

        List<Skill> skills = new ArrayList<>();
        for (ItemSkill itemSkill : ItemData.getEquipInfoById(equip.getItemId()).getItemSkillsByEquipLv(equip.getItemLevel())) {
            Skill skill = chr.getSkill(itemSkill.getSkill());
            chr.removeSkill(itemSkill.getSkill());
            skill.setCurrentLevel(-1); // workaround to remove skill from window without a cc
            skills.add(skill);
        }

        if (skills.size() > 0) {
            chr.write(WvsContext.changeSkillRecordResult(skills, true, false, false, false));
        }

        int equippedSummonSkill = ItemConstants.getEquippedSummonSkillItem(equip.getItemId(), chr.getJob());
        if (equippedSummonSkill != 0) {
            chr.getField().removeSummon(equippedSummonSkill, chr.getId());

            chr.getTemporaryStatManager().removeStatsBySkill(equippedSummonSkill);
            chr.getTemporaryStatManager().removeStatsBySkill(chr.getTemporaryStatManager().getOption(RepeatEffect).rOption);
        }

        if (equip.getSoulOptionId() > 0) {
            int soulSkillID = SoulCollectionConstants.getSoulSkillFromSoulID(equip.getSoulOptionId());
            if (chr.hasSkill(soulSkillID)) {
                chr.removeSkillAndSendPacket(soulSkillID);
            }
        }

        equip.updateDecentSkills(chr, false);

        if (JobConstants.isDemonAvenger(chr.getJob())) {
            ((DemonAvenger) chr.getJobHandler()).sendHpUpdate();
        }

        if (ItemConstants.isAndroid(itemID) || ItemConstants.isMechanicalHeart(itemID)) {
            if (chr.getAndroid() != null) {
                chr.getField().removeLife(chr.getAndroid());
            }
            chr.setAndroid(null);
        }

        chr.getEquippedInventory().recalcBaseStats(chr);

        chr.capHpMpToMax();
    }


    /**
     * Gathers or Consolidates the inventory.
     *
     * @param chr
     *      The character on which these inventory operations are done.
     * @param inventory
     *      The Inventory that is sorted.
     * @return
     *      Success
     */
    public static boolean gatherInventory(Char chr, Inventory inventory) {
        List<Item> items = inventory.getItemsNotInBag().stream()
                .sorted(Comparator.comparingInt(Item::getBagIndex))
                .collect(Collectors.toList());
        List<ItemOperation> itemOps = new ArrayList<>();
        for (Item item : items) {
            var newPos = inventory.getFirstOpenSlot();
            var oldPos = item.getBagIndex();
            if (newPos >= oldPos) {
                continue;
            }
            item.setBagIndex(newPos);
            itemOps.add(new ItemOperation(Move, item, (short) oldPos, (short) newPos));
        }

        chr.write(WvsContext.inventoryOperation(true, false, itemOps));
        return true;
    }

    /**
     * Sorts the inventory based on ItemId
     *
     * @param chr
     *      The character on which these inventory operations are done.
     * @param inventory
     *      The Inventory that is sorted.
     * @return
     *      Success
     */
    public static boolean sortInventory(Char chr, Inventory inventory) {
        List<Item> items = inventory.getItemsNotInBag().stream()
                .sorted(Comparator.comparingInt(Item::getItemId))
                .collect(Collectors.toList());
        List<ItemOperation> itemOps = new ArrayList<>();
        List<Tuple<Integer, Integer>> moveTuple = new ArrayList<>();
        for (Item item : items) {
            var newPos = items.indexOf(item) + 1;
            var oldPos = item.getBagIndex();


            if (newPos == oldPos || moveTuple.contains(new Tuple<>(oldPos, newPos))) { // yes,  oldPos, newPos
                continue; // Ignore items that would not change position
            }

            moveTuple.add(new Tuple<>(newPos, oldPos));

            Item newPosItem = inventory.getItemBySlot(newPos);
            if (newPosItem != null) {
                newPosItem.setBagIndex(oldPos);
            }

            item.setBagIndex(newPos);
            itemOps.add(new ItemOperation(Move, item,  (short) oldPos, (short) newPos));
        }

        chr.write(WvsContext.inventoryOperation(true, false, itemOps));
        return true;
    }

    /**
     * Combines 'fromItem' and 'toItem'.
     *
     * If 'fromItem' and 'toItem' combine into 1 Item:
     *      remove 'fromItem' and updateQuantity on 'toItem' with the added quantity.
     *
     * If 'fromItem' and 'toItem' combine, yet remain 2 separate items:
     *      updateQuantity for both items.
     *
     * @param chr
     *      The character on which these inventory operations are done.
     * @param fromItem
     *      The item that is "used" to fill the quantity of the 'toItem'.
     * @param toItem
     *      The item that gets the added quantity from the 'fromItem'.
     * @return
     *      Successful inventory manipulation.
     */
    public static boolean combineItems(Char chr, Item fromItem, Item toItem) {
        boolean success = fromItem.getItemId() == toItem.getItemId() && ItemConstants.isStackable(fromItem);

        if (!success || ItemData.getItemInfoByID(fromItem.getItemId()) == null) {
            return false;
        }

        List<ItemOperation> itemOps = new ArrayList<>();

        var maxQuantity = ItemData.getItemInfoByID(fromItem.getItemId()).getSlotMax();

        var fromItemQ = fromItem.getQuantity();
        var toItemQ = toItem.getQuantity();

        // if combining leaves 2 separate items
        if (fromItemQ + toItemQ > maxQuantity) {
            var newFromItemQ = fromItemQ + toItemQ - maxQuantity;
            var newToItemQ = maxQuantity;

            fromItem.setQuantity(newFromItemQ); // updateQuantity
            toItem.setQuantity(newToItemQ); // updateQuantity

            itemOps.add(new ItemOperation(InventoryOperation.UpdateQuantity, fromItem, (short) fromItem.getBagIndex(), (short) fromItem.getBagIndex()));
            itemOps.add(new ItemOperation(InventoryOperation.UpdateQuantity, toItem, (short) toItem.getBagIndex(), (short) toItem.getBagIndex()));


        // if combining leaves 1 item
        } else {
            var newToItemQ = fromItemQ + toItemQ;

            Inventory inventory = chr.getInventoryByType(fromItem.getInvType());

            inventory.removeItem(fromItem, true); // remove
            toItem.setQuantity(newToItemQ); // updateQuantity

            itemOps.add(new ItemOperation(InventoryOperation.UpdateQuantity, toItem, (short) toItem.getBagIndex(), (short) toItem.getBagIndex()));
            itemOps.add(new ItemOperation(InventoryOperation.Remove, fromItem, (short) fromItem.getBagIndex(), (short) fromItem.getBagIndex()));
        }

        chr.write(WvsContext.inventoryOperation(true, false, itemOps));
        return true;
    }

    /**
     * Moves 'item' to the bagIndex 'newPos', for Items within the same category.
     *
     * If no item is present on 'newPos':
     *      'item' bagIndex will be set to 'newPos'.
     *
     * if a different item is present on 'newPos':
     *      'item' bagIndex will be switched with the bagIndex of the other item.
     *
     * if the same item is present on 'newPos' and the item is stackable:
     *      'item' and the other item will be combined
     *
     *
     * @param chr
     *      The character on which these inventory operations are done.
     * @param item
     *      The item that will be moved.
     * @param newPos
     *      The bagIndex 'item' should be placed at.
     * @return
     *      Successful inventory manipulation.
     */
    public static boolean moveItem(Char chr, Item item, short newPos) {
        InvType invType = item.getInvType();
        Inventory inv = chr.getInventoryByType(invType);
        var itemBagIndex = item.getBagIndex();

        Item otherItem = inv.getItemBySlot(newPos);
        boolean isStackableItem = ItemConstants.isStackable(item);


        // newPos is empty
        if (otherItem == null) {
            item.setBagIndex(newPos);
            chr.write(WvsContext.inventoryOperation(true, false, Move, (short) itemBagIndex, newPos, 0, item));
        } else if (otherItem.getItemId() != item.getItemId()) {
            // different items are being switched
            var otherItemBagIndex = otherItem.getBagIndex();

            item.setBagIndex(otherItemBagIndex);
            otherItem.setBagIndex(itemBagIndex);

            chr.write(WvsContext.inventoryOperation(true, false, Move, (short) itemBagIndex, (short) otherItemBagIndex, 0, item));


        // stackable items are being combined
        } else if (isStackableItem) {
            return combineItems(chr, item, otherItem);
        }

        chr.setBulletIDForAttack(chr.calculateBulletIDForAttack());
        return true;
    }

    /**
     * Consumes 1 quantity of 'item' in 'chr' inventory.
     *
     * [Note] This method should only be used where 'item' is already known to be in 'chr' inventory.
     *
     * @param chr
     *      The character on which these inventory operations are done.
     * @param item
     *      Consumes 1 quantity of 'item' in 'chr' inventory.
     * @return
     *      Successful.
     */
    public static boolean removeItem(Char chr, Item item) {
        return removeItem(chr, item, 1);
    }


    /**
     * Consumes 'quantity' quantity of 'item' in 'chr' inventory.
     *
     * [Note] This method should only be used where 'item' is already known to be in 'chr' inventory.
     *
     * @param chr
     *      The character on which these inventory operations are done.
     * @param item
     *      Consumes 'quantity' quantity of 'item' in 'chr' inventory.
     * @param quantity
     *      How many of 'item' to consume.
     * @return
     *      Successful.
     */
    public static boolean removeItem(Char chr, Item item, int quantity) {
        return removeItems(chr, Collections.singletonMap(item, quantity));
    }

    /**
     * Consumes all items keySet with quantity of valueSet.
     *
     * [Note] This method should only be used where all instances of 'items' are already known to be in 'chr' inventory.
     *
     * @param chr
     *      The character on which these inventory operations are done.
     * @param items
     *      List of {@link Item} which will be removed from 'chr' inventory.
     * @return
     *      Successful.
     */
    public static boolean removeItems(Char chr, Map<Item, Integer> items) { // <Item, ConsumeCount>

        boolean containsVac = false;
        Map<InvType, List<Item>> removedItemsMap = new HashMap<>() {{
            put(EQUIP, new ArrayList<>());
            put(InvType.CONSUME, new ArrayList<>());
            put(InvType.INSTALL, new ArrayList<>());
            put(InvType.ETC, new ArrayList<>());
            put(InvType.CASH, new ArrayList<>());
            put(InvType.DEC, new ArrayList<>());
        }};

        List<ItemOperation> itemOps = new ArrayList<>();
        for (Item item : items.keySet()) {
            var consumed = items.getOrDefault(item, 1);
            InvType invType = item.getInvType();

            if (consumed >= item.getQuantity() || !ItemConstants.isStackable(item)) {
                // Everything is consumed
                removedItemsMap.get(invType).add(item);
                itemOps.add(new ItemOperation(item.isInBag() ? BagRemove : Remove, item, (short) item.getBagIndex(), (short) item.getBagIndex()));

            } else {
                // Item still exists, just less stack
                item.removeQuantity(consumed);
                itemOps.add(new ItemOperation(item.isInBag() ? UpdateBagQuantity : UpdateQuantity, item, (short) item.getBagIndex(), (short) item.getBagIndex()));
            }


            if (item.getItemId() == CustomConstants.PET_VAC) {
                containsVac = true;
            }
        }

        chr.write(WvsContext.inventoryOperation(true, false, itemOps));
        for (Map.Entry<InvType, List<Item>> entry : removedItemsMap.entrySet()) {
            if (entry.getValue().size() == 0) {
                continue;
            }
            InvType invType = entry.getKey();
            List<Item> removedItems = entry.getValue();

            chr.getInventoryByType(invType).removeItems(removedItems, true);
        }


        // Non Item Removing Logic
        if (containsVac) {
            chr.checkAndSetPetVac();
        }
        chr.setBulletIDForAttack(chr.calculateBulletIDForAttack());

        return true;
    }

    /**
     * Removes 'quantity' of items with 'itemId' from the inventory.
     *
     * @param chr
     *      The character on which these inventory operations are done.
     * @param itemId
     *      The itemId that will be removed.
     * @return
     *      Successful
     */
    public static boolean removeItem(Char chr, int itemId) {
        return removeItem(chr, itemId, 1);
    }

    /**
     * Removes 'quantity' of items with 'itemId' from the inventory.
     *
     * @param chr
     *      The character on which these inventory operations are done.
     * @param itemId
     *      The itemId that will be removed.
     * @param quantity
     *      The amount of the specific item that will be removed.
     * @return
     *      Successful
     */
    public static boolean removeItem(Char chr, int itemId, int quantity) {
        if (ItemData.getItemDeepCopy(itemId) == null || !hasItem(chr, itemId, quantity)) {
            return false;
        }

        InvType invType = ItemData.getItemDeepCopy(itemId).getInvType();
        Inventory inventory = chr.getInventoryByType(invType);
        List<Item> items = inventory.getItems().stream()
                .filter(i -> i.getItemId() == itemId)
                .sorted(Comparator.comparingInt(Item::getBagIndex))
                .collect(Collectors.toList());

        List<ItemOperation> itemOps = new ArrayList<>();
        List<Item> removedItems = new ArrayList<>();
        var remainingDeleteQuantity = quantity;
        for (Item item : items) {
            var itemQ = item.getQuantity();

            var newRemainingDeleteQuantity = Math.max(0, (remainingDeleteQuantity - itemQ));
            var newItemQ = Math.max(0, (itemQ - remainingDeleteQuantity));

            if (newItemQ == 0) { // Remove
                itemOps.add(new ItemOperation(item.isInBag() ? BagRemove : Remove, item, (short) item.getBagIndex(), (short) item.getBagIndex()));
                removedItems.add(item);

            } else if (newItemQ > 0) { // UpdateQuantity
                item.setQuantity(newItemQ);
                itemOps.add(new ItemOperation(item.isInBag() ? UpdateBagQuantity : UpdateQuantity, item, (short) item.getBagIndex(), (short) item.getBagIndex()));
            }

            remainingDeleteQuantity = newRemainingDeleteQuantity;
            if (remainingDeleteQuantity <= 0) {
                break;
            }
        }

        chr.write(WvsContext.inventoryOperation(true, false, itemOps));
        inventory.removeItems(removedItems, true);


        // Non Item Removing Logic
        if (itemId == CustomConstants.PET_VAC) {
            chr.checkAndSetPetVac();
        }
        chr.setBulletIDForAttack(chr.calculateBulletIDForAttack());

        return true;
    }


    /**
     *
     *
     * @param item
     * @return
     */
    public static boolean addItem(Char chr, Item item, boolean byPet) {
        return addItems(chr, Collections.singletonList(item), byPet);
    }

    /**
     *
     *
     * @param chr
     * @param items
     * @param byPet
     * @return
     */
    public static boolean addItems(Char chr, List<Item> items, boolean byPet) {
        if (!canHold(chr, items)) {
            return false;
        }

        Map<InvType, List<Item>> addedItemMap = new HashMap<>() {{
            put(EQUIP, new ArrayList<>());
            put(InvType.CONSUME, new ArrayList<>());
            put(InvType.INSTALL, new ArrayList<>());
            put(InvType.ETC, new ArrayList<>());
            put(InvType.CASH, new ArrayList<>());
        }};

        boolean containsVac = false;
        List<ItemOperation> itemOps = new ArrayList<>();

        for (Item item : items) {
            InvType invType = item.getInvType();
            Inventory inventory = chr.getInventoryByType(invType);

            if (!ItemConstants.isStackable(item)) {
                // Non stackable items just go to the first open slot
                addNonStackableItem(addedItemMap, itemOps, item, invType, inventory);

            } else {
                // Stackable items could be spread throughout multiple slots.
                addStackableItem(addedItemMap, itemOps, item, invType, inventory);
            }

            if (item.getItemId() == CustomConstants.PET_VAC) {
                containsVac = true;
            }
        }

        for (Map.Entry<InvType, List<Item>> entry : addedItemMap.entrySet()) {
            if (entry.getValue().size() == 0) {
                continue;
            }
            InvType invType = entry.getKey();
            List<Item> addedItems = entry.getValue();

            chr.getInventoryByType(invType).addItems(addedItems);
        }
        chr.write(WvsContext.inventoryOperation(!byPet, false, itemOps));

        
        // Non Item Adding Logic
        if (containsVac) {
            chr.checkAndSetPetVac();
        }
        chr.setBulletIDForAttack(chr.calculateBulletIDForAttack());

        return true;
    }

    private static void addStackableItem(Map<InvType, List<Item>> addedItemMap, List<ItemOperation> itemOps, Item item, InvType invType, Inventory inventory) {
        var addedItemQuantity = item.getQuantity();
        List<Item> qualifyingItems = inventory.getItems().stream() // Items with the same ItemID sorted on bagIndex
                .filter(i -> i.getItemId() == item.getItemId() && !i.hasExpireDate())
                .sorted(Comparator.comparingInt(Item::getBagIndex))
                .collect(Collectors.toList());

        // Looping through all items with same ItemId, to see if we can max out a few existing items before adding item to a new open slot
        var maxqItemQuantity = ItemData.getItemInfoByID(item.getItemId()).getSlotMax();
        for (Item qItem : qualifyingItems) {
            var qItemQuantity = qItem.getQuantity();
            var qItemAvailableQuantity = Math.max(0, maxqItemQuantity - qItemQuantity);
            if (qItemAvailableQuantity == 0) {
                continue;
            }

            var newAddedItemQuantity = Math.max(0, addedItemQuantity - qItemAvailableQuantity);
            var newqItemQuantity = maxqItemQuantity - (Math.max(0, (qItemAvailableQuantity - addedItemQuantity)));

            qItem.setQuantity(newqItemQuantity);
            itemOps.add(new ItemOperation(UpdateQuantity, qItem, (short) qItem.getBagIndex(), (short) qItem.getBagIndex()));

            addedItemQuantity = newAddedItemQuantity;
            if (addedItemQuantity <= 0) {
                break;
            }
        }

        while (addedItemQuantity > 0) {
            var firstOpenSlot = inventory.getFirstOpenSlot();
            Item addedItem = ItemData.getItemDeepCopy(item.getItemId());
            addedItem.setQuantity(Math.min(addedItemQuantity, maxqItemQuantity));
            addedItem.setBagIndex(firstOpenSlot);

            itemOps.add(new ItemOperation(Add, addedItem, (short) addedItem.getBagIndex(), (short) addedItem.getBagIndex()));
            addedItemMap.get(invType).add(addedItem);

            addedItemQuantity = Math.max(0, (addedItemQuantity - addedItem.getQuantity()));
        }
    }

    private static void addNonStackableItem(Map<InvType, List<Item>> addedItemMap, List<ItemOperation> itemOps, Item item, InvType invType, Inventory inventory) {
        var firstOpenSlot = inventory.getFirstOpenSlot(); // no need to check, as we already did !canHold
        item.setBagIndex(firstOpenSlot);
        item.setQuantity(1);
        addedItemMap.get(invType).add(item);
        itemOps.add(new ItemOperation(Add, item, (short) item.getBagIndex(), (short) item.getBagIndex()));
    }

    public static boolean addItem(Char chr, int itemId, boolean byPet) {
        return addItem(chr, itemId, 1, byPet);
    }

    public static boolean addItem(Char chr, int itemId, int quantity, boolean byPet) {
        if (!canHold(chr, itemId, quantity)) {
            return false;
        }
        Item item = ItemData.getItemDeepCopy(itemId);
        item.setQuantity(quantity);
        return addItem(chr, item, byPet);
    }

    public static void moveNxEquipsFromEqpToDec(Char chr) {
        var eqp = chr.getEquipInventory();
        var dec = chr.getDecInventory();
        var nxItems = eqp.getItems().stream()
                .filter(Item::isCash).collect(Collectors.toList());

        if (nxItems.size() == 0) {
            return;
        }

        if (nxItems.size() > dec.getEmptySlots()) {
            chr.chatMessage("Tried to move NX items from Equip to Dec, but your Dec is too full. Please make more space (%d empty slots needed).", nxItems.size());
            return;
        }

        for (var nxItem : nxItems) {
            eqp.removeItem(nxItem, false);
            nxItem.setInvType(InvType.DEC);
            chr.addItemToInventory(nxItem);
        }
    }
}
