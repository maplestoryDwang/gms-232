package net.swordie.ms.client.character.items;

import net.swordie.ms.enums.BaseStat;
import net.swordie.ms.enums.ItemGrade;

import java.util.HashMap;
import java.util.Map;

/**
 * Created on 1/26/2018.
 */
public class ItemOption {
    private int optionType;
    private int weight;
    private int id;
    private int reqLevel;
    private Map<Integer, Map<BaseStat, Double>> statValuesPerLevel = new HashMap<>();
    private String string;
    private Map<Integer, Map<ItemOptionType, Integer>> miscValuesPerLevel = new HashMap<>();

    public int getWeight() {
        return weight;
    }

    public void setWeight(int weight) {
        this.weight = weight;
    }

    public int getOptionType() {
        return optionType;
    }

    public void setOptionType(int optionType) {
        this.optionType = optionType;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    @Override
    public String toString() {
        return "id: " + getId() + ", optionType: " + getOptionType() + ", weight: " + getWeight();
    }

    public boolean hasMatchingGrade(short itemState) {
        return ItemGrade.isMatching(itemState, ItemGrade.getGradeByOption(getId()).getVal());
    }

    public int getFamiliarGrade() {
        return getId() / 10000;
    }

    public boolean isFamiliarBuffOption() {
        return getMiscValuesByLevel(1).containsKey(ItemOptionType.familiarBuff);
    }

    public boolean isBonus() {
        return getId() >= 2000 && getId() / 1000 % 10 == 2;
    }

    public void setReqLevel(int reqLevel) {
        this.reqLevel = reqLevel;
    }

    public int getReqLevel() {
        return reqLevel;
    }

    public Map<Integer, Map<BaseStat, Double>> getStatValuesPerLevel() {
        return statValuesPerLevel;
    }

    public void addStatValue(int level, BaseStat baseStat, double value) {
        Map<BaseStat, Double> valMap = getStatValuesPerLevel().getOrDefault(level, new HashMap<>());
        if (value != 0) {
            valMap.put(baseStat, value);
            getStatValuesPerLevel().put(level, valMap);
        }
    }

    public Map<Integer, Map<ItemOptionType, Integer>> getMiscValuesPerLevel() {
        return miscValuesPerLevel;
    }

    public void addMiscValue(int level, ItemOptionType type, int value) {
        Map<ItemOptionType, Integer> valMap = getMiscValuesPerLevel().getOrDefault(level, new HashMap<>());
        if (value != 0) {
            valMap.put(type, value);
            getMiscValuesPerLevel().put(level, valMap);
        }
    }

    public Map<BaseStat, Double> getStatValuesByLevel(int level) {
        if (level == 0) {
            level = 1;
        }

        return getStatValuesPerLevel().getOrDefault(level, new HashMap<>());
    }

    public Map<ItemOptionType, Integer> getMiscValuesByLevel(int level) {
        if (level == 0) {
            level = 1;
        }

        return getMiscValuesPerLevel().getOrDefault(level, new HashMap<>());
    }

    public boolean isAppliedFromFan() {
        BaseStat[] stats = new BaseStat[] {
                BaseStat.pad,
                BaseStat.padLv,
                BaseStat.padR,

                BaseStat.mad,
                BaseStat.madLv,
                BaseStat.madR,

                BaseStat.allStat,
                BaseStat.allStatR,

                BaseStat.str,
                BaseStat.strLv,
                BaseStat.strR,

                BaseStat.dex,
                BaseStat.dexLv,
                BaseStat.dexR,

                BaseStat.inte,
                BaseStat.intLv,
                BaseStat.intR,

                BaseStat.luk,
                BaseStat.lukLv,
                BaseStat.lukR,
        };

        for (var bs : stats) {
            if (getStatValuesByLevel(1).containsKey(bs)) {
                return true;
            }
        }

        return false;
    }

    public void setString(String string) {
        this.string = string;
    }

    public String getString(int level) {
        level = level / 10;
        String str = getString();
        String[] split = str.split("#");

        if (split.length == 1) {
            return str;
        }

        String[] split2 = split[1].split("[% ]");
        String opt = split2[0];
        int val = -1;
        for (Map.Entry<ItemOptionType, Integer> e : getMiscValuesByLevel(level).entrySet()) {
            val = e.getValue();
        }
        for (Map.Entry<BaseStat, Double> e : getStatValuesByLevel(level).entrySet()) {
            val = e.getValue().intValue();
        }
        return str.replace("#" + opt, val + "");
    }

    public String getString() {
        return string;
    }

    public enum ItemOptionType {
        prop,
        face,
        hpRecoveryOnHit,
        mpRecoveryOnHit,
        attackType,
        level,
        ignoreDam,
        damReflect,
        time,
        familiarBuff,
    }
}
