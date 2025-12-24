package net.swordie.ms.client.character.familiar;

/**
 * Created on 25/04/2020.
 *
 * @author Asura
 */
public enum FamiliarModifiedMask {
    FamiliarId(0x1),
    Name(0x2),
    Locked(0x4),
    Level(0x8),
    LvExp(0x10),
    LvMaxExp(0x20),
    Grade(0x40),
    GradeExp(0x80),
    Attack(0x100),
    Defense(0x200),
    PotLines0(0x400),
    PotLines1(0x800),
    All(0xFFFF),
    ;
    private int val;

    FamiliarModifiedMask(int val) {
        this.val = val;
    }

    public int getVal() {
        return val;
    }

}
