package net.swordie.ms.client.character.familiar;

import java.util.Arrays;

public enum FamiliarModifiedType {
    // Both Request & Result
    Extract(0),
    Fuse(1),
    Upgrade(2),
    ToggleLock(3),
    Rename(4),
    ReleaseOption(5),

    // Result
    RankIncreased(7),
    MaxLvIncreased(10),
    FamiliarSlotExpanded(11),
    ;
    private byte val;

    FamiliarModifiedType(int val) {
        this.val = (byte) val;
    }

    public byte getVal() {
        return val;
    }

    public static FamiliarModifiedType byVal(byte val) {
        return Arrays.stream(values()).filter(fmt -> fmt.getVal() == val).findFirst().orElse(null);
    }
}
