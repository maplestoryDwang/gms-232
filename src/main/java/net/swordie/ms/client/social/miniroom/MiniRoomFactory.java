package net.swordie.ms.client.social.miniroom;

import net.swordie.ms.client.social.miniroom.gameroom.omok.OmokGameRoom;
import net.swordie.ms.client.social.miniroom.tradingroom.TradingRoom;

/**
 * Created on 04/02/2022.
 *
 * @author Asura
 */
public class MiniRoomFactory {

    public static MiniRoom getByType(MiniRoomType type) {
        if (type == null) {
            return null;
        }

        switch (type) {
            case OmokGame:
                return new OmokGameRoom();
            case MemoryGame:
                return null;
            case BattleRpsGame:
                return null;
            case TradingRoom:
                return new TradingRoom();
            case PersonalShop:
                return null;
            case EntrustedShop:
                return null;
            case CashTradingRoom:
                return null;
            case Wedding:
                return null;
            case EventTradingRoom:
                return null;
            case MultiYutGame:
                return null;
            case SignRoom:
                return null;
            case TenthAnniversaryBoardGame:
                return null;
            case BingoGame:
                return null;
            case OmokRenewal:
                return null;
            case MemoryGame2013:
                return null;
            case OneCardGameRoom:
                return null;
            case MultiYutGameUseSkill:
                return null;
            case UIRunnerMiniGame:
                return null;
        }

        return null;
    }

}
