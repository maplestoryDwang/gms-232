package dwang.script.py.api;

import dwang.script.DwangScriptBaseApi;
import net.swordie.ms.client.character.items.Equip;
import net.swordie.ms.client.character.items.Inventory;
import net.swordie.ms.client.character.items.Item;
import net.swordie.ms.client.character.items.ItemBuffs;
import net.swordie.ms.client.character.modules.InventoryModule;
import net.swordie.ms.client.character.skills.vmatrix.MatrixRecord;
import net.swordie.ms.client.character.skills.vmatrix.NodestoneModule;
import net.swordie.ms.connection.packet.WvsContext;
import net.swordie.ms.connection.packet.model.MessagePacket;
import net.swordie.ms.constants.ItemConstants;
import net.swordie.ms.constants.QuestConstants;
import net.swordie.ms.enums.BaseStat;
import net.swordie.ms.enums.InvType;
import net.swordie.ms.enums.InventoryOperation;
import net.swordie.ms.loaders.ItemData;
import net.swordie.ms.loaders.StringData;
import net.swordie.ms.scripts.ScriptType;
import net.swordie.ms.util.FileTime;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import static net.swordie.ms.enums.ChatType.GameDesc;

/**
 * @author 橘子
 * @date 2026/2/27
 * @description
 */
public interface PyInventoryAPI extends DwangScriptBaseApi {
    
    default void giveMesos(long mesos) {
        getChr().addMoney(mesos);
        getChr().write(WvsContext.message(MessagePacket.incMoneyMessage(mesos)));
    }

    
    default void deductMesos(long mesos) {
        getChr().deductMoney(mesos);
        getChr().write(WvsContext.message(MessagePacket.incMoneyMessage(-mesos)));
    }

    
    default long getMesos() {
        return getChr().getMoney();
    }

    
    default void giveItem(int id) {
        giveItem(id, 1);
    }

    
    default void giveItem(int id, int quantity) {
        getChr().addItemToInventory(id, quantity);
        String itemName = StringData.getItemStringById(id);
        if (itemName != null) {
            getChr().chatMessage(GameDesc, String.format("You've gained items: %s. (%d)", itemName, quantity));
        }
    }

    default void giveItemWithExpiry(int id, int hours) {
        var item = ItemData.getItemDeepCopy(id);
        item.setDateExpire(FileTime.fromDate(LocalDateTime.now().plusHours(hours)));
        item.setQuantity(1);
        getChr().addItemToInventory(item);

        String itemName = StringData.getItemStringById(id);
        if (itemName != null) {
            getChr().chatMessage(GameDesc, String.format("You've gained items: %s. (Expires in %d hours)", itemName, hours));
        }
    }

    default void giveAndEquip(int id) {
        if (!ItemConstants.isEquip(id)) {
            giveItem(id);
        }
        Item equip = ItemData.getItemDeepCopy(id);
        if (equip == null) {
            return;
        }

        // replace the old equip if there was any
        Inventory equipInv = getChr().getEquippedInventory();
        int bodyPart = ItemConstants.getBodyPartFromItem(id, getChr().getAvatarData().getAvatarLook().getGender());
        Item oldEquip = equipInv.getItemBySlot(bodyPart);
        if (oldEquip != null) {
            int newSlot = getChr().getEquipInventory().getFirstOpenSlot();
            getChr().unequip(oldEquip);
            oldEquip.setBagIndex(newSlot);
            oldEquip.updateToChar(getChr());
        }
        equip.setBagIndex(bodyPart);
        getChr().equip(equip, bodyPart);
        equip.updateToChar(getChr());
    }

    default void giveNewSecondary(int id) {
        if (!ItemConstants.isEquip(id)) {
            giveItem(id);
        }
        Item newEquipItem = ItemData.getItemDeepCopy(id);
        if (newEquipItem == null) {
            return;
        }

        var newEquip = (Equip) newEquipItem;
        // replace the old equip if there was any
        Inventory equipInv = getChr().getEquippedInventory();
        int bodyPart = ItemConstants.getBodyPartFromItem(id, getChr().getAvatarData().getAvatarLook().getGender());
        Item oldEquip = equipInv.getItemBySlot(bodyPart);
        if (oldEquip != null) {
            newEquip.setOptions(new ArrayList<>(((Equip) oldEquip).getOptions()));
            getChr().consumeItemFull(oldEquip);
        }
        newEquip.setBagIndex(bodyPart);
        getChr().equip(newEquip, bodyPart);
        newEquip.updateToChar(getChr());
    }

    default String enumerateInventory(InvType invType) {
        var inv = getChr().getInventoryByType(invType);

        StringBuilder sb = new StringBuilder();
        inv.sortItemsByIndex();
        for (var item : inv.getItemsNotInBag().stream().filter(i -> !i.isBagItemOwner()).collect(Collectors.toList())) {
            sb.append(String.format("#b#L%d##i%d##t%dl#\r\n", item.getBagIndex(), item.getItemId(), item.getItemId()));
        }
        sb.append("#k");

        return sb.toString();
    }

    default String enumerateList(String[] strings) {
        var sb = new StringBuilder();
        var i = 0;
        for (var str : strings) {
            sb.append(String.format("#b#L%d#%s#l\r\n", i++, str));
        }
        sb.append("#k");
        return sb.toString();
    }

    
    default boolean hasItem(int id) {
        return hasItem(id, 1);
    }

    
    default boolean isEquipped(int id) {
        return getChr().getInventoryByType(InvType.EQUIPPED).getItems().stream()
                .anyMatch(item -> item.getItemId() == id);
    }

    
    default boolean hasItem(int id, int quantity) {
        return getQuantityOfItem(id) >= quantity;
    }

    default void consumeItem() {
        consumeItem(getScriptInfoByType(ScriptType.Item).getParentID());
    }

    
    default void consumeItem(int itemID) {
        getChr().consumeItem(itemID, 1);
        String itemName = StringData.getItemStringById(itemID);
        if (itemName != null) {
            getChr().chatMessage(GameDesc, String.format("You've lost an item: %s.", itemName));
        }
    }

    
    default void consumeItem(int itemID, int amount) {
        getChr().consumeItem(itemID, amount);
        String itemName = StringData.getItemStringById(itemID);
        if (itemName != null) {
            getChr().chatMessage(GameDesc, String.format("You've lost items: %s. (-%d)", itemName, amount));
        }
    }

    default void consumeItem(Item item, int amount) {
        getChr().consumeItem(item, amount);
        String itemName = StringData.getItemStringById(item.getItemId());
        if (itemName != null) {
            getChr().chatMessage(GameDesc, String.format("You've lost items: %s. (-%d)", itemName, amount));
        }
    }

    default void unequip(Item item) {
        if (item instanceof Equip) {
            var equip = (Equip) item;
            int oldBagIndex = item.getBagIndex();
            getChr().unequip(equip);
            equip.setBagIndex(getChr().getEquipInventory().getFirstOpenSlot());
            equip.updateToChar(getChr());
            getChr().write(WvsContext.inventoryOperation(true, false, InventoryOperation.Move,
                    (short) -oldBagIndex, (short) equip.getBagIndex(), 0, equip));
            getChr().write(WvsContext.inventoryOperation(true, false, InventoryOperation.Remove,
                    (short) -oldBagIndex, (short) 0, 0, equip));
        }
    }

    
    default void useItem(int id) {
        ItemBuffs.giveItemBuffsFromItemID(getChr(), getChr().getTemporaryStatManager(), id);
    }

    
    default int getQuantityOfItem(int id) {
        var item2 = ItemData.getItemDeepCopy(id);
        var invType = item2.getInvType();
        return getChr().getInventoryByType(invType).getQuantity(id);
    }

    
    default boolean canHold(int id) {
        return getChr().canHoldItem(id, 1);
    }

    
    default boolean canHold(int id, int quantity) {
        return getChr().canHold(id, quantity);
    }

    
    default int getEmptyInventorySlots(InvType invType) {
        return getChr().getInventoryByType(invType).getEmptySlots();
    }

    default boolean hasAnyFullInventory() {
        for (var inv : getChr().getInventories()) {
            if (inv.isFull()) {
                return true;
            }
        }

        return false;
    }

    default boolean itemHasWantedStats(Map<String, Integer> wantedStats, int bagIndex, boolean bonus) {
        if (wantedStats.isEmpty()) {
            return false;
        }

        InvType invType = InvType.EQUIP;
        if (bagIndex >= 1000) {
            bagIndex = bagIndex % 1000;
            invType = InvType.EQUIPPED;
        }

        Equip equip = (Equip) getChr().getInventoryByType(invType).getItemBySlot(bagIndex);
        for (Map.Entry<String, Integer> entry : wantedStats.entrySet()) {
            BaseStat bs = BaseStat.getBaseStatByName(entry.getKey());
            int wantedAmount = entry.getValue();
            int amount = equip.getPotentialStat(bs, bonus);
            switch (bs) {
                case str:
                case dex:
                case inte:
                case luk:
                    amount += equip.getPotentialStat(BaseStat.allStat, bonus);
                    break;
                case strR:
                case dexR:
                case intR:
                case lukR:
                    amount += equip.getPotentialStat(BaseStat.allStatR, bonus);
                    break;
                case allStat:
                    int minAmount = equip.getPotentialStat(BaseStat.str, bonus);
                    for (BaseStat stat : BaseStat.getMainStats()) {
                        int statAmount = equip.getPotentialStat(stat, bonus);
                        if (statAmount < minAmount) {
                            minAmount = statAmount;
                        }
                    }
                    amount = minAmount;
                    break;
                case allStatR:
                    minAmount = equip.getPotentialStat(BaseStat.strR, bonus);
                    for (BaseStat stat : BaseStat.getMainStatsPerc()) {
                        int statAmount = equip.getPotentialStat(stat, bonus);
                        if (statAmount < minAmount) {
                            minAmount = statAmount;
                        }
                    }
                    amount = minAmount;
                    break;
            }
            if (amount < wantedAmount) {
                return false;
            }
        }
        return true;
    }

    default void batchRemoveItems(List<Item> items) {
        InventoryModule.removeItems( getInitData(). getChr(), items.stream().collect(Collectors.toMap(item -> item, Item::getQuantity)));
    }


    default void openMultiNodestones(int id, int amount) {
        if (!getChr().getQuestManager().hasQuestCompleted(QuestConstants.FIFTH_JOB_QUEST)) {
            getChr().chatMessage("You need to be 5th job to open this item.");
            getChr().dispose();
            return;
        }

        if (amount <= 0 || getChr().getMatrixRecords().size() > MatrixRecord.MAX_RECORDS) {
            getChr().chatMessage("You already have the maximum amount of Nodestones in your VMatrix.");
            getChr().dispose();
            return;
        }

        var consumeAmount = 0;
        for (int j = 0; j < amount; j++) {

            if (getChr().getMatrixRecords().size() > MatrixRecord.MAX_RECORDS) {
                continue;
            }

            NodestoneModule.openNodestone(getChr(), id, false);
            consumeAmount++;
        }

        if (consumeAmount < amount) {
            getChr().chatMessage("You have the maximum amount of Nodestones in your VMatrix.");
        }

        getChr().write(WvsContext.matrixUpdate(getChr(), false, 0, 0));
        consumeItem(id, consumeAmount);
    }
}
