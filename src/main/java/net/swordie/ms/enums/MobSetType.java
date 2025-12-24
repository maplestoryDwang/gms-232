package net.swordie.ms.enums;

import java.util.Arrays;

/**
 * Created on 30/01/2022.
 *
 * @author Asura
 */
public enum MobSetType {
    Lv13_30Monsters(9101013),
    Lv31_50Monsters(9101014),
    Lv51_70Monsters(9101015),
    Lv71_90Monsters(9101016),
    Lv91_110Monsters(9101017),
    Lv111_130Monsters(9101018),
    Lv131_150Monsters(9101019),
    Lv151_plus_Monsters(9101020),
    MonsterParkBossLv60_114(9101021),
    MonsterParkBossLv115_159(9101022),
    MonsterParkBossLv160_plus(9101023),
    Lv10_30Monsters(9101024),
    MonstersNearYourLevel(9101025),
    EliteChampion(9101222),
    EliteMonsterOrEliteChampion(9101223),
    ;

    private int val;

    MobSetType(int val) {
        this.val = val;
    }

    public int getVal() {
        return val;
    }

    public static MobSetType getByVal(int val) {
        return Arrays.stream(values()).filter(mst -> mst.getVal() == val).findFirst().orElse(null);
    }
}
