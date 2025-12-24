package net.swordie.ms.client.minigames.castlecolumn;

/**
 * Created on 01/07/2021.
 *
 * @author Asura
 */
public enum CastleColumnUpdateType {
    Start(1),
    MoveBlock(2),
    Finish(3),
    ;

    private int val;

    CastleColumnUpdateType(int val) {
        this.val = val;
    }

    public int getVal() {
        return val;
    }
}
