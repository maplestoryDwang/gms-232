package net.swordie.ms.life.mob.boss.will;

public enum WillSkillType {
    P1AdvancedDownwardStrike(1),
    P2AdvancedDownwardStrike(2),
    P3AdvancedDownwardStrike(3),
    P1Trigger(4),
    DestroyDimension(5),
    EnergyBlast(6),
    DistortionMirror(7),
    Groggy(8),
    Infection(9),
    LegSproutPlayerLoc(10),
    LegSproutNonPlayerLoc(11),
    BarrageOfBullets(12),
    NarrowWeb(13),
    ReflectedDownwardStrike(14),
    RipIntoTarget(15)
    ;

    private int val;

    WillSkillType(int val) {
        this.val = val;
    }

    public static WillSkillType byVal(short slv) {
        if (slv <= 0 || slv >= values().length) {
            return null;
        }
        return values()[slv - 1];
    }

    public int getVal() {
        return val;
    }
}
