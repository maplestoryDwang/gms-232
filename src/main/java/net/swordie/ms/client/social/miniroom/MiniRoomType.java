package net.swordie.ms.client.social.miniroom;

import java.util.Arrays;

/**
 * Created on 04/02/2022.
 *
 * @author Asura
 */
public enum MiniRoomType {
    OmokGame(1),
    MemoryGame(2),
    BattleRpsGame(3),
    TradingRoom(4),
    PersonalShop(5),
    EntrustedShop(6),
    CashTradingRoom(7),
    Wedding(8),
    EventTradingRoom(9),
    MultiYutGame(10),
    SignRoom(11),
    TenthAnniversaryBoardGame(12),
    BingoGame(13),
    OmokRenewal(14),
    MemoryGame2013(15),
    OneCardGameRoom(16),
    MultiYutGameUseSkill(17),
    UIRunnerMiniGame(18),
    ;

    private int val;

    MiniRoomType(int val) {
        this.val = val;
    }

    public int getVal() {
        return val;
    }

    public static MiniRoomType getByVal(int val) {
        return Arrays.stream(values()).filter(mrt -> mrt.getVal() == val).findFirst().orElse(null);
    }
}
