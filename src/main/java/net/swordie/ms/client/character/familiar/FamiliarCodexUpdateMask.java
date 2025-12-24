package net.swordie.ms.client.character.familiar;

import java.util.Arrays;

/**
 * Created on 4/24/2020.
 *
 * @author Asura
 */
public enum FamiliarCodexUpdateMask {
    SummonGauge(0x1),
    FamiliarSlots(0x2),
    FamiliarCount(0x4),
    Unk8(0x8),
    Unk10(0x10),
    ModifySetup(0x20),
    ModifyEquippedBadges(0x40),
    ModifyFamiliarPreset(0x80),
    ModifyBadgePreset(0x100),
    All(0xFFFF),
    ;

    private final int val;

    FamiliarCodexUpdateMask(int val) {
        this.val = val;
    }

    public int getVal() {
        return val;
    }

    public static FamiliarCodexUpdateMask getByVal(int val) {
        return Arrays.stream(values()).filter(bmm -> bmm.getVal() == val).findFirst().orElse(null);
    }
}