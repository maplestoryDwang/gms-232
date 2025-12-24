package net.swordie.ms.client.character.info;

import java.util.Arrays;

/**
 * Created on 2/18/2020.
 *
 * @author Asura
 */
public enum ZeroInfoFlag {
    BetaState(0x1),
    SubHP(0x2),
    SubMP(0x4),
    SubSkin(0x8),
    SubHair(0x10),
    SubFace(0x20),
    SubMHP(0x40),
    SubMMP(0x80),
    ZeroLinkCashPart(0x100),
    ZeroMixHair(0x200),
    ;

    private int val;

    ZeroInfoFlag(int val) {
        this.val = val;
    }

    public short getVal() {
        return (short) val;
    }

    public static short all() {
        return (short) Arrays.stream(values()).mapToInt(ZeroInfoFlag::getVal).sum();
    }
}
