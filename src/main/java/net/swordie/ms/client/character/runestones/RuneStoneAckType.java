package net.swordie.ms.client.character.runestones;

/**
 * Created on 19-5-2019.
 *
 * @author Asura
 */
public enum RuneStoneAckType {
    RequestArrows(1),
    CantUseAnotherRuneYet(2),
    CantUseAnotherRuneYet2(3),

    TooStrongForYouToHandle_Rune(5),
    TooStrongForYouToHandle_Lure(6),
    YouCannotActivateTheRuneRightNow(7),
    TooFarAway(8),
    SecureShowArrows(9),
    ;

    private int val;

    public int getVal() {
        return val;
    }

    RuneStoneAckType(int val) {
        this.val = val;
    }
}