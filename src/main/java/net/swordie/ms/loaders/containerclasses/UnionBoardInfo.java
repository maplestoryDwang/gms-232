package net.swordie.ms.loaders.containerclasses;

import net.swordie.ms.util.Position;

/**
 * Created on 27-1-2020.
 *
 * @author Asura
 */
public class UnionBoardInfo {
    private int gridSlotId; // Grid Slot Id
    private boolean startingPoint; // is a root position
    private boolean changeable; // is able to switch stat corresponding to that syn grid
    private int groupIndex; // Synergy Grid Type
    private int openLevel; // Level at which this grid slot is unlocked
    private Position position; // position with respect to center of the grid

    public UnionBoardInfo(int gridSlotId) {
        this.gridSlotId = gridSlotId;
    }

    public int getGridSlotId() {
        return gridSlotId;
    }

    public void setGridSlotId(int gridSlotId) {
        this.gridSlotId = gridSlotId;
    }

    public boolean isStartingPoint() {
        return startingPoint;
    }

    public void setStartingPoint(boolean startingPoint) {
        this.startingPoint = startingPoint;
    }

    public boolean isChangeable() {
        return changeable;
    }

    public void setChangeable(boolean changeable) {
        this.changeable = changeable;
    }

    public int getGroupIndex() {
        return groupIndex;
    }

    public void setGroupIndex(int groupIndex) {
        this.groupIndex = groupIndex;
    }

    public int getOpenLevel() {
        return openLevel;
    }

    public void setOpenLevel(int openLevel) {
        this.openLevel = openLevel;
    }

    public Position getPosition() {
        return position;
    }

    public void setPosition(Position position) {
        this.position = position;
    }
}
