package net.swordie.ms.enums;

import java.util.Arrays;

/**
 * Created by Asura on 10-8-2018.
 */
public enum MiniRoomAction {
    PlaceItem(0),
    PlaceItem_2(1),
    PlaceItem_3(2),
    PlaceItem_4(3),

    SetMesos(4),
    SetMesos_2(5),
    SetMesos_3(6),
    SetMesos_4(7),
    ConfirmTrade(8),
    TradeConfirm(9),
    TradeConfirm2(10),
    TradeConfirm3(11), // 3...?
    TradeConfirmRemoteResponse(14), // what is this even used for

    TradeRestraintItem(15),

    CreateMiniRoom(16),

    Accept(19),
    EnterMiniRoom(20),
    InviteRequest(21),
    Decline(22),

    Chat(24),
    Open1(25),
    Open2(26),

    Avatar(27),
    Exit(28),

    CheckSSN2(30),
    TradeRestraintMeso(32), // Players below or lv15 can only trade 1mil meso per day
    OwnerEnterMerchant(31),
    AddItem1(33),
    AddItem2(34),
    AddItem3(35),
    AddItem4(36),
    BuyItem(37),
    BuyItem1(38),
    BuyItem2(39),
    BuyItem3(40),
    RemoveItem(49),
    OwnerLeaveMerchant(50),
    TidyMerchant(51),
    CloseMerchant(52),
    OPEN3(80),


    // Omok Start
    OmokTieReq(88),
    OmokTieRes(89),
    OmokGiveUpReq(90),

    OmokRetreatReq(92),
    OmokRetreatRes(93),

    OmokUserReady(96),
    OmokUserCancelReady(97),
    OmokUserBoot(98),
    OmokUserStart(99),
    OmokGameResult(100),
    OmokTimeOver(101),
    OmokPutStoneChecker(102),
    OmokPutStoneCheckerErr(103),
    // Omok End
    ;

    private byte val;

    MiniRoomAction(int val) {this.val = (byte) val;}
    public byte getVal() {return val;}

    public static MiniRoomAction getByVal(byte val) {
        return Arrays.stream(values()).filter(mrt -> mrt.getVal() == val).findAny().orElse(null);
    }

    public boolean isCreateMiniRoomAction() {
        return CreateMiniRoom.equals(this);
    }

    public boolean isCommonAction() {
        return isCreateMiniRoomAction()
                || Accept.equals(this)
                || EnterMiniRoom.equals(this)
                || InviteRequest.equals(this)
                || Decline.equals(this)
                || Chat.equals(this)
                || Avatar.equals(this)
                || Exit.equals(this);
    }

    public boolean isOmokGameRoomAction() {
        return getVal() >= OmokTieReq.getVal() && getVal() <= OmokPutStoneCheckerErr.getVal();
    }

    public boolean isTradingRoomAction() {
        return getVal() >= PlaceItem.getVal() && getVal() <= TradeRestraintItem.getVal();
    }
}
