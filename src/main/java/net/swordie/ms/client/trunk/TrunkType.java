package net.swordie.ms.client.trunk;

import java.util.Arrays;

/**
 * Created on 4/7/2018.
 */
public enum TrunkType {
    TrunkReq_Load(0),
    TrunkReq_Save(1),
    TrunkReq_Close(2),
    TrunkReq_CheckSSN2(3),
    TrunkReq_GetItem(4),
    TrunkReq_PutItem(5),
    TrunkReq_SortItem(6),
    TrunkReq_Money (7),
    TrunkReq_CloseDialog(8),
    TrunkRes_GetSuccess(9),
    TrunkRes_GetUnknown(10),
    TrunkRes_GetNoMoney(11),
    TruncRes_GetHavingOnlyItem(12),
    TrunkRes_PutSuccess(13),
    TrunkRes_PutIncorrectRequest(14),
    TrunkRes_SortItem(15),
    TrunkRes_PutNoMoney(16),
    TrunkRes_PutNoSpace(17),
    TrunkRes_PutUnknown(18),
    TrunkRes_MoneySuccess(19),
    TrunkRes_MoneyUnknown(20),
    TrunkRes_GetMoneyExceedLimit(21),
    TrunkRes_PutMoneyExceedLimit(22),
    TrunkRes_TrunkCheckSSN2(23),
    TrunkRes_OpenTrunkDlg(24),
    TrunkRes_TradeBlocked(25),
    TrunkRes_TradeBlocked_NotActive_Account(26),
    TrunkRes_TradeBlocked_Snapshot(27),
    TrunkRes_BlockedBehavior(28),
    TrunkRes_GetItemExpired(29),
    TrunkRes_BlockFunction(30),
    ;

    private int val;

    TrunkType(int val) {
        this.val = val;
    }

    public static TrunkType getByVal(byte val) {
        return Arrays.stream(values()).filter(tt -> tt.getVal() == val).findAny().orElse(null);
    }

    public int getVal() {
        return val;
    }
}
