package net.swordie.ms.life.mob.boss.will;

import net.swordie.ms.util.Rect;

public class DestroyDimensionInfo {

    protected boolean blueDimension;
    protected Rect rect;

    public DestroyDimensionInfo(boolean blueDimension, Rect rect) {
        this.blueDimension = blueDimension;
        this.rect = rect;
    }
}
