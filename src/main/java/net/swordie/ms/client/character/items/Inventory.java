package net.swordie.ms.client.character.items;

import net.swordie.ms.client.character.Char;
import net.swordie.ms.constants.ItemConstants;
import net.swordie.ms.enums.BaseStat;
import net.swordie.ms.enums.InvType;
import net.swordie.ms.loaders.EtcData;
import net.swordie.ms.loaders.ItemData;
import net.swordie.ms.loaders.containerclasses.ItemInfo;
import net.swordie.ms.loaders.containerclasses.SetItemInfo;
import net.swordie.ms.util.Util;
import net.swordie.orm.dao.ItemDao;
import net.swordie.orm.dao.SworDaoFactory;

import java.util.*;
import java.util.concurrent.CopyOnWriteArrayList;
import java.util.stream.Collectors;

/**
 * Created on 11/23/2017.
 */
public class Inventory {

    private static final ItemDao itemDao = (ItemDao) SworDaoFactory.getByClass(Item.class);

    public static final int MAX_SLOTS = 128;

    private Char chr;

    private int id;

    private List<Item> items;

    private InvType type;
    private int slots;
    private Map<BaseStat, Double> baseStats = new HashMap<>();
    private Map<BaseStat, List<Integer>> nonAddBaseStats = new HashMap<>();
    private Map<BaseStat, Double> arcBaseStats = new HashMap<>();

    public Inventory() {
    }

    public Inventory(InvType t, int slots) {
        this.type = t;
        items = new CopyOnWriteArrayList<>();
        this.slots = slots;
    }

    public Inventory deepCopy() {
        Inventory inventory = new Inventory(getType(), getSlots());
        inventory.setItems(new CopyOnWriteArrayList<>(getItems()));
        return inventory;
    }

    public void setChr(Char chr) {
        this.chr = chr;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getSlots() {
        return slots;
    }

    public void setSlots(int slots) {
        this.slots = slots;
    }

    public void addItem(Item item) {
        if (getItemsNotInBag().size() < getSlots()) {
            if (item.getBagIndex() == 0 && getType() != InvType.EQUIPPED) {
                item.setBagIndex(getFirstOpenSlot());
            }
            if (item.getId() == 0) {
                // ensures that each item has a unique id
                item.assignId();
            }
            item.setForceSaveNextFlush(true);
            item.setInventory(this);
            getItems().add(item);
            item.setInvType(getType());
            sortItemsByIndex();
        }
    }

    public void addItems(List<Item> addedItems) {
        addedItems.forEach(this::addItem);
    }

    public void removeItem(Item item, boolean addToRemovedItems) {
        getItems().remove(item);
        item.setInventory(null);
        sortItemsByIndex();

        if (addToRemovedItems) {
            chr.addRemovedItem(item);
        }
    }

    public void removeItems(List<Item> items, boolean addToRemovedItems) {
        getItems().removeAll(items);
        items.forEach(i -> i.setInventory(null));
        sortItemsByIndex();

        if (addToRemovedItems) {
            chr.getRemovedItems().addAll(items);
        }
    }

    public int getFirstOpenSlotInItemList(List<Item> items) {
        int oldIndex = 0;
        sortItemsByIndex();
        for (Item item : items.stream().filter(Item::isNotInBag).sorted(Comparator.comparingInt(Item::getBagIndex)).collect(Collectors.toList())) {
            if (item.getBagIndex() - oldIndex > 1) {
                // there's a gap between 2 consecutive items
                break;
            }
            oldIndex = item.getBagIndex();
        }
        return oldIndex + 1;
    }

    public int getFirstOpenSlot() {
        int oldIndex = 0;
        sortItemsByIndex();
        for (Item item : getItems().stream().filter(Item::isNotInBag).sorted(Comparator.comparingInt(Item::getBagIndex)).collect(Collectors.toList())) {
            if (item.getBagIndex() - oldIndex > 1) {
                // there's a gap between 2 consecutive items
                break;
            }
            oldIndex = item.getBagIndex();
        }
        return oldIndex + 1;
    }

    public Item getFirstItemByBodyPart(BodyPart bodyPart) {
        List<Item> items = getItemsByBodyPart(bodyPart);
        return items != null && items.size() > 0 ? items.get(0) : null;
    }

    public List<Item> getItemsByBodyPart(BodyPart bodyPart) {
        return getItems().stream().filter(item -> item.getBagIndex() == bodyPart.getVal() && item.getQuantity() > 0).collect(Collectors.toList());
    }

    public List<Item> getItems() {
        if (items == null) {
            items = itemDao.byInventory(this);
            sortItemsByIndex();
        }

        return items;
    }

    public List<Item> getSortedItems() {
        sortItemsByIndex();
        return getItems();
    }

    public void sortItemsByIndex() {
        // workaround for sort not being available for CopyOnWriteArrayList
        List<Item> temp = new ArrayList<>(getItems());
        temp.sort(Comparator.comparingInt(Item::getBagIndex));
        getItems().clear();
        getItems().addAll(temp);
    }

    public void setItems(List<Item> items) {
        this.items = items;
    }

    public InvType getType() {
        return type;
    }

    public void setType(InvType type) {
        this.type = type;
    }

    public Item getItemBySlot(int bagIndex) {
        return getItemBySlotS(bagIndex < 0 ? -bagIndex : bagIndex);
    }

    private Item getItemBySlotS(int bagIndex) {
        return Util.findWithPred(getItems(), i -> i.getBagIndex() == bagIndex);
    }

    public Item getItemByItemID(int itemId) {
        return Util.findWithPred(getItems(), i -> i.getItemId() == itemId);
    }

    public Item getItemByItemIDAndStackable(int itemId) {
        ItemInfo ii = ItemData.getItemInfoByID(itemId);
        if (ii == null) {
            return getItemByItemID(itemId);
        }
        return getItems().stream()
                .filter(item -> item.getItemId() == itemId && item.getQuantity() < ii.getSlotMax())
                .findFirst()
                .orElse(null);
    }

    public Item getItemBySN(long sn) {
        return getItems().stream().filter(item -> item.getId() == sn).findFirst().orElse(null);
    }

    public boolean containsItem(int itemID) {
        return getItemByItemID(itemID) != null;
    }

    public boolean isFull() {
        return getItemsNotInBag().size() >= getSlots();
    }

    public List<Item> getItemsNotInBag() {
        return getItems().stream().filter(Item::isNotInBag).collect(Collectors.toList());
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder("Items: ");
        for(Item item : getItems()) {
            sb.append(String.format("%d id=%d slot=%d | ", item.getItemId(), item.getId(), item.getBagIndex()));
        }
        return sb.toString();
    }

    public int getEmptySlots() {
        return getSlots() - getItemsNotInBag().size();
    }

    public boolean hasItem(int itemId) {
        return getItemByItemID(itemId) != null;
    }

    public boolean hasMaxSlots() {
        return getSlots() <= MAX_SLOTS;
    }

    public void increaseSlots(int increaseAmount) {
        setSlots(Math.min(getSlots() + increaseAmount, MAX_SLOTS));
    }

    public Map<BaseStat, Double> getBaseStats() {
        return baseStats;
    }

    public Map<BaseStat, List<Integer>> getNonAddBaseStats() {
        return nonAddBaseStats;
    }

    public double getBaseStat(BaseStat baseStat) {
        return getBaseStats().getOrDefault(baseStat, 0D);
    }

    public List<Integer> getNonAddBaseStat(BaseStat baseStat) {
        return getNonAddBaseStats().getOrDefault(baseStat, null);
    }

    public Map<BaseStat, Double> getArcBaseStats() {
        return arcBaseStats;
    }

    public void setArcBaseStats(Map<BaseStat, Double> arcBaseStats) {
        this.arcBaseStats = arcBaseStats;
    }

    public double getArcBaseStat(BaseStat baseStat) {
        return getArcBaseStats().getOrDefault(baseStat, 0D);
    }

    public void recalcBaseStats(Char chr) {
        // Clear BaseStats Maps
        getBaseStats().clear();
        getNonAddBaseStats().clear();
        getArcBaseStats().clear();

        // Recalc BaseStats from Arcane Symbols
        recalcArcBaseStats(chr);

        // Recalc all other equips
        Map<Integer, Integer> setCount = new HashMap<>();
        Set<Equip> jokerItems = new HashSet<>();

        for (var item : getItems()) {
            if (!(item instanceof Equip) || ItemConstants.isSymbol(item.getItemId()) || ((Equip) item).getInfo() == null) {
                continue;
            }
            var equip = (Equip) item;
            var info = equip.getInfo();

            for (var baseStat : BaseStat.values()) {
                if (baseStat.isNonAdditiveStat()) {
                    if (!getNonAddBaseStats().containsKey(baseStat)) {
                        getNonAddBaseStats().put(baseStat, new ArrayList<>());
                    }
                    var curStats = getNonAddBaseStats().get(baseStat);
                    curStats.addAll(equip.getNonAddBaseStat(baseStat));
                } else {
                    var curStats = getBaseStats().getOrDefault(baseStat, 0D);
                    var max = baseStat.getMaxByEquips(chr);
                    var newStat = 0D;
                    if (equip.getBagIndex() == BodyPart.HakuFan.getVal()) {
                        newStat = curStats + equip.getBaseStatForHakuFan(baseStat);
                    } else {
                        newStat = curStats + equip.getBaseStat(baseStat);
                    }
                    if (max > 0 && newStat > max) {
                        newStat = max;
                    }
                    getBaseStats().put(baseStat, newStat);
                }
            }

            var setId = info.getSetItemID();
            if (setId != 0 && !ItemConstants.isNotSetItemApplyBodyPart(equip.getBagIndex())) {
                setCount.put(setId, 1 + setCount.getOrDefault(setId, 0));
            }

            if (info.isJokerToSetItem()) {
                jokerItems.add(equip);
            }
        }

        applySets(setCount, jokerItems);
    }

    public void recalcArcBaseStats(Char chr) {
        for (var item : getItems()) {
            if (!(item instanceof Equip) || !ItemConstants.isSymbol(item.getItemId())) {
                continue;
            }
            var equip = (Equip) item;

            for (var baseStat : BaseStat.values()) {
                var curStats = getArcBaseStats().getOrDefault(baseStat, 0D);
                var max = baseStat.getMaxByEquips(chr);
                var newStat = curStats + equip.getBaseStat(baseStat);
                if (max > 0 && newStat > max) {
                    newStat = max;
                }
                getArcBaseStats().put(baseStat, newStat);
            }

            var type = SymbolType.byItemId(equip.getItemId()) == SymbolType.Arcane ? BaseStat.arc : BaseStat.authForce;
            getArcBaseStats().put(type, (double) equip.getArc());
        }
    }

    private void applySets(Map<Integer, Integer> setCount, Set<Equip> jokerItems) {
        // Gather all sets
        Set<SetItemInfo> sets = new HashSet<>();

        for (var setId : setCount.keySet()) {
            var set = EtcData.getSetItemInfoById(setId);
            if (set != null) {
                sets.add(set);
            }
        }

        // Find joker item + set it will apply to
        Equip jokerItem = null;
        SetItemInfo jokerSet = null;
        for (var ji : jokerItems) {
            SetItemInfo highestJokerSet = null;
            for (var set : sets) {
                if (set.canBeJokered(setCount.get(set.getId()), ji) && (highestJokerSet == null || highestJokerSet.getId() < set.getId())) {
                    highestJokerSet = set;
                }
            }

            if (highestJokerSet == null) {
                // no set found to put the joker in
                continue;
            }

            if (jokerItem == null || ji.getInfo().getrLevel() > jokerItem.getInfo().getrLevel() ||
                    (ji.getInfo().getrLevel() == jokerItem.getInfo().getrLevel() && highestJokerSet.getId() > jokerItem.getId())) {
                jokerItem = ji;
                jokerSet = highestJokerSet;
            }
        }

        if (jokerSet != null) {
            var jokerSetId = jokerSet.getId();
            setCount.put(jokerSetId, setCount.get(jokerSetId) + 1);
        }

        // Apply all sets' stats to stat cache
        for (var set : sets) {
            if (set != null && setCount.get(set.getId()) != 0) {
                set.apply(setCount.get(set.getId()), getBaseStats(), getNonAddBaseStats());
            }
        }
    }

    public int getQuantity(int itemId) {
        return getItems().stream()
                .filter(i -> i.getItemId() == itemId)
                .mapToInt(Item::getQuantity)
                .sum();
    }
}
