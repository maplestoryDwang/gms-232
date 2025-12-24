package net.swordie.ms.life.mob.boss.will;

public enum NarrowWebType {
    Add(3),
    Remove(4),
    RemoveAll(5),
    ;

    private int val;

    NarrowWebType(int val) {
        this.val = val;
    }

    public int getVal() {
        return val;
    }
}
