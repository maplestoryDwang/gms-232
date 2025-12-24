package net.swordie.ms.life.mob.boss.will;

import net.swordie.ms.util.Position;

public class StrikeInfo {
    protected int id;
    protected Position pos;
    protected boolean isReflected;

    public StrikeInfo(int id, Position pos, boolean isReflected) {
        this.id = id;
        this.pos = pos;
        this.isReflected = isReflected;
    }
}
