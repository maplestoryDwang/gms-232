package net.swordie.ms.loaders.containerclasses;

import net.swordie.ms.client.character.items.Equip;
import net.swordie.ms.constants.ItemConstants;
import net.swordie.ms.enums.BaseStat;

import java.util.*;

public class SetItemInfo {

    private static final int MIN_ITEMS_FOR_JOKER = 3;

    private int id;
    private boolean jokerPossible;
    private boolean zeroWeaponJokerPossible;
    private Set<Integer> itemIds = new HashSet<>();
    private Map<Integer, Map<BaseStat, Integer>> effectStats = new HashMap<>();
    private Map<Integer, Map<Integer, Integer>> effectActiveSkills = new HashMap<>();
    private Map<Integer, Map<BaseStat, List<Integer>>> nonAddEffectStats = new HashMap<>();


    public SetItemInfo(int id) {
        this.id = id;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Set<Integer> getItemIds() {
        return itemIds;
    }

    public void setItemIds(Set<Integer> itemIds) {
        this.itemIds = itemIds;
    }

    public boolean isJokerPossible() {
        return jokerPossible;
    }

    public void setJokerPossible(boolean jokerPossible) {
        this.jokerPossible = jokerPossible;
    }

    public boolean isZeroWeaponJokerPossible() {
        return zeroWeaponJokerPossible;
    }

    public void setZeroWeaponJokerPossible(boolean zeroWeaponJokerPossible) {
        this.zeroWeaponJokerPossible = zeroWeaponJokerPossible;
    }

    public Map<Integer, Map<BaseStat, Integer>> getEffectStats() {
        return effectStats;
    }

    public void setEffectStats(Map<Integer, Map<BaseStat, Integer>> effectStats) {
        this.effectStats = effectStats;
    }

    public Map<Integer, Map<BaseStat, List<Integer>>> getNonAddEffectStats() {
        return nonAddEffectStats;
    }

    public void addItemId(int itemId) {
        getItemIds().add(itemId);
    }

    public void addEffectInfo(int effectLevel, Map<BaseStat, Integer> effectStats) {
        getEffectStats().put(effectLevel, effectStats);
    }

    public void addEffectStat(int effectLevel, BaseStat bs, int val) {
        if (bs.isNonAdditiveStat()) {
            if (!getNonAddEffectStats().containsKey(effectLevel)) {
                getNonAddEffectStats().put(effectLevel, new HashMap<>());
            }
            if (!getNonAddEffectStats().get(effectLevel).containsKey(bs)) {
                getNonAddEffectStats().get(effectLevel).put(bs, new ArrayList<>());
            }

            getNonAddEffectStats().get(effectLevel).get(bs).add(val);
        } else {
            if (!getEffectStats().containsKey(effectLevel)) {
                addEffectInfo(effectLevel, new HashMap<>());
            }

            var map = getEffectStats().get(effectLevel);
            if (bs == BaseStat.bd && map.containsKey(BaseStat.damR)) {
                val = map.get(BaseStat.damR);
                map.remove(BaseStat.damR);
            } else if (bs == BaseStat.damR && map.containsKey(BaseStat.bd)) {
                bs = BaseStat.bd;
                map.remove(BaseStat.bd);
            }
            if (bs.equals(BaseStat.allStat)) {
                map.put(BaseStat.str, val + map.getOrDefault(bs, 0));
                map.put(BaseStat.dex, val + map.getOrDefault(bs, 0));
                map.put(BaseStat.inte, val + map.getOrDefault(bs, 0));
                map.put(BaseStat.luk, val + map.getOrDefault(bs, 0));
            } else {
                map.put(bs, val + map.getOrDefault(bs, 0));
            }
        }
    }

    @Override
    public String toString() {
        return "SetItemInfo{" +
                "id=" + id +
                ", jokerPossible=" + jokerPossible +
                ", zeroWeaponJokerPossible=" + zeroWeaponJokerPossible +
                ", itemIds=" + itemIds +
                ", effectStats=" + effectStats +
                ", nonAddEffectStats=" + nonAddEffectStats +
                '}';
    }

    public boolean canBeJokered(int setCount, Equip jokerEquip) {
        if (setCount < MIN_ITEMS_FOR_JOKER) {
            return false;
        }

        return getItemIds().stream().anyMatch(id -> ItemConstants.isSameBodyPart(id, jokerEquip.getItemId()));
    }

    public void apply(int count, Map<BaseStat, Double> baseStats, Map<BaseStat, List<Integer>> nonAddBaseStats) {
        for (int i = 1; i <= count; i++) {
            var bsToApply = getEffectStats().get(i);
            var nonAddBsToApply = getNonAddEffectStats().get(i);

            if (bsToApply != null) {
                for (var entry : bsToApply.entrySet()) {
                    var bs = entry.getKey();
                    var val = entry.getValue();
                    baseStats.put(bs, baseStats.getOrDefault(bs, 0D) + val);
                }
            }

            if (nonAddBsToApply != null) {
                for (var entry : nonAddBsToApply.entrySet()) {
                    var bs = entry.getKey();
                    var vals = entry.getValue();
                    if (!nonAddBaseStats.containsKey(bs)) {
                        nonAddBaseStats.put(bs, new ArrayList<>());
                    }
                    nonAddBaseStats.get(bs).addAll(vals);
                }
            }
        }
    }

    public Map<Integer, Map<Integer, Integer>> getEffectActiveSkills() {
        return effectActiveSkills;
    }

    public void setEffectActiveSkills(Map<Integer, Map<Integer, Integer>> effectActiveSkills) {
        this.effectActiveSkills = effectActiveSkills;
    }

    public void addEffectActiveSkill(int effect, int skillId, int slv) {
        getEffectActiveSkills().put(effect, new HashMap<>() {{ put(skillId, slv);}});
    }
}
