package net.swordie.ms.client.character.union;

import java.util.Arrays;

/**
 * Created on 27-1-2020.
 *
 * @author Asura
 */
public enum SynergyGridType {

    // changeable
    str(0),         // STR
    dex(1),         // DEX
    inte(2),        // INT
    luk(3),         // LUK
    att(4),         // ATT
    matt(5),        // M.ATT
    hp(6),          // HP
    mp(7),          // MP

    // non-changeable
    crDmg(8),       // Crit Damage
    asr(9),         // Abnormal Status Resistance
    exp(10),        // Bonus EXP
    cr(11),         // Critical Rate
    bdr(12),        // Boss Damage
    stance(13),     // Knockback Resistance
    buff(14),       // Buff Duration
    ied(15),        // Ignore DEF
    ;
    private int val;

    SynergyGridType(int val) {
        this.val = val;
    }

    public int getVal() {
        return val;
    }

    public static SynergyGridType getByVal(int val) {
        return Arrays.stream(values()).filter(sgt -> sgt.getVal() == val).findFirst().orElse(null);
    }
}
