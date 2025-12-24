package net.swordie.ms.life;

/**
 * Created on 1/2/2018.
 */
public enum DeathType {
    STAY(0),
    ANIMATION_DEATH(1),
    EXPLODE(2), // self-destruct?
    INSTA_DEATH(3),
    DISAPPEAR(4),
    ANIMATION_DEATH_2(5),
    ANIMATION_DEATH_3(6),
    UNK7(7),
    UNK8(8),
    UNK9(9),
    UNK10(10),
    ;

    private byte val;

    DeathType(byte val) {
        this.val = val;
    }

    DeathType(int val) {
        this((byte) val);
    }

    public byte getVal() {
        return val;
    }
}
