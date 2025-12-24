package net.swordie.ms.enums;

import net.swordie.ms.util.Util;

import java.io.File;
import java.io.FileNotFoundException;
import java.util.Arrays;
import java.util.Scanner;

/**
 * @author Sjonnie
 * Created on 7/4/2018.
 */
public enum CashItemType {
    Req_WebShopOrderGetList(0),
    Req_LoadLocker(1),
    Req_Buy(2),
    Req_Gift(3),
    Req_SetWish(4),
    Req_IncSlotCount(5),
    Req_Unk6(6),
    Req_IncTrunkCount(7),
    Req_IncCharSlotCount(8),
    Req_IncBuyCharCount(9),
    Req_EnableEquipSlotExt(10),
    Req_CancelPurchase(11),
    Req_ConfirmPurchase(12),
    Req_Destroy(13),

    Req_MoveLtoS(15),
    Req_MoveStoL(16),
    Req_Expire(17),
    Req_Use(18),
    Req_StatChange(19),
    Req_SkillChange(20),
    Req_SkillReset(21),
    Req_DestroyPetItem(22),
    Req_SetPetName(23),
    Req_SetPetLife(24),
    Req_SetPetSkill(25),
    Req_SetItemName(26),
    Req_SetAndroidName(27),
    Req_SendMemo(28),
    Req_GetAdditionalCashShopInfo(29),
    Req_GetMaplePoint(30),
    Req_UseMaplePointFromGameSvr(31),
    Req_Rebate(32),
    Req_UseCoupon(33),
    Req_GiftCoupon(34),
    Req_Couple(35),
    Req_BuyPackage(36),
    Req_GiftPackage(37),
    Req_BuyNormal(38),
    Req_ApplyWishListEvent(39),
    Req_MovePetStat(40),
    Req_FriendShip(41),
    Req_ShopScan(42),
    Req_ShopOptionScan(43),
    Req_ShopScanSell(44),
    Req_LoadPetExceptionList(45),
    Req_UpdatePetExceptionList(46),
    Req_DestroyScript(47),
    Req_CashItemCreate(48),
    Req_PurchaseRecord(49),
    Req_DeletePurchaseRecord(50),
    /*
     */
    Req_BuyDone(51),
    Req_ExtraInfo(52), // *
    Req_Refund(53),
    Req_ConfirmRefund(54),
    Req_CancelRefund(55),
    Req_SetItemNonRefundable(56),
    Req_WebShopOrderBuyItems(57),
    Req_UseCashRandomItem(58),
    Req_UseMaplePointGiftToken(59),
    Req_BuyByToken(60),
    Req_Buy_ByMeso(61),
    Req_UpgradeValuePack(62),
    Req_BuyFarmGift(63),
    Req_CashItemGachapon(64),
    Req_GiftScript(65),
    Req_MoveToAuctionStore(66),
    Req_ClearCashOption(67),
    Req_MasterPiece(68),
    Req_DestroyCoupleRings(69),
    Req_DestroyFriendshipRings(70),
    Req_LockerTransfer(71),
    Req_TradeLogForAuction(72),
    Req_MoveToLockerFromAuction(73),
    Req_NexonStarCouponUse(74),


    Res_CharacterSaleSuccess(0),
    Res_CharacterSaleFail(1),
    Res_LimitGoodsCount_Changed(-1),
    Res_WebShopOrderGetList_Done(-1),
    Res_WebShopOrderGetList_Failed(-1),
    Res_WebShopReceive_Done(5),
    Res_Unk3(3),
    Res_LoadLocker_Done(4),
    Res_LoadLocker_Failed(5),
    Res_Unk6(6),
    Res_Unk7(7),
    Res_Unk8(8),
    Res_LoadGift_Done(9), // *
    Res_LoadGift_Failed(10),
    Res_LoadWish_Done(11),
    Res_LoadWish_Failed(12),
    Res_SetWish_Done(12),
    Res_SetWish_Failed(13),
    Res_Buy_Done(14),
    Res_Buy_Failed(15),
    Res_UseCoupon_Done(16),
    Res_NexonStarCouponUse_Done(17),
    Res_NexonStarCoupon_Failed(18),
    Res_UseCoupon_Done_NormalItem(19),
    Res_GiftCoupon_Done(20),
    Res_UseCoupon_Failed(21),
    // nothing
    Res_Gift_Done(23),
    Res_Gift_Failed(24),
    Res_IncSlotCount_Done(25),
    Res_IncSlotCount_Failed(26),
    // nothing x4
    Res_IncTrunkCount_Done(29),
    Res_IncTrunkCount_Failed(30),
    Res_IncCharSlotCount_Done(31),
    Res_IncCharSlotCount_Failed(32),
    Res_IncBuyCharCount_Done(33),
    Res_IncBuyCharCount_Failed(34),
    // nothing x2
    Res_EnableEquipSlotExt_Done(37), // *
    Res_EnableEquipSlotExt_Failed(38),
    Res_MoveLtoS_Done(39),
    Res_MoveLtoS_Failed(40),
    Res_MoveStoL_Done(41),
    Res_MoveStoL_Failed(42),
    Res_Destroy_Done(43),
    Res_Destroy_Failed(44),
    Res_Expire_Done(45), // *
    // gap start?
    Res_Expire_Failed(46),
    Res_Use_Done(47),
    Res_Use_Failed(48),
    Res_StatChange_Done(49),
    Res_StatChange_Failed(50),
    Res_SkillChange_Done(51),
    Res_SkillChange_Failed(52),
    Res_SkillReset_Done(53),
    Res_SkillReset_Failed(54),
    Res_DestroyPetItem_Done(55),
    Res_DestroyPetItem_Failed(56),
    Res_SetPetName_Done(57),
    Res_SetPetName_Failed(58),
    Res_SetPetLife_Done(59),
    Res_SetPetLife_Failed(60),
    Res_MovePetStat_Failed(61),
    Res_MovePetStat_Done(62),
    Res_SetPetSkill_Failed(63),
    Res_SetPetSkill_Done(64),
    Res_SendMemo_Done(65),
    Res_SendMemo_Warning(66),
    Res_SendMemo_Failed(67),
    Res_GetMaplePoint_Done(68),
    Res_GetMaplePoint_Failed(69),
    Res_UseMaplePointFromGameSvr_Done(70),
    Res_UseMaplePointFromGameSvr_Failed(71),
    Res_CashItemGachapon_Done(72),
    Res_CashItemGachapon_Failed(73),

    Res_Gift1_Done(72),
    Res_Gift1_Failed(73),
    Res_Gift2_Done(74),
    Res_Gift2_Failed(75),
    Res_Rebate_Done(76), // *
    Res_Rebate_Failed(77),
    Res_Couple_Done(78),
    Res_Couple_Failed(79),
    Res_BuyPackage_Done(80),
    Res_BuyPackage_Failed(81),
    Res_GiftPackage_Done(82),
    Res_GiftPackage_Failed(83),
    Res_BuyNormal_Done(84),
    Res_BuyNormal_Failed(85),
    Res_ApplyWishListEvent_Done(86),
    Res_ApplyWishListEvent_Failed(87),
    Res_Friendship_Done(88),
    Res_Friendship_Failed(89),
    Res_LoadExceptionList_Done(90),
    Res_LoadExceptionList_Failed(91),
    Res_UpdateExceptionList_Done(92),
    Res_UpdateExceptionList_Failed(93),
    Res_DestroyScript_Done(94),
    Res_DestroyScript_Failed(95),
    Res_CashItemCreate_Done(96),
    Res_CashItemCreate_Failed(97),
    Res_ClearOptionScript_Done(98),
    Res_ClearOptionScript_Failed(99),
    Res_Bridge_Failed(100),
    Res_PurchaseRecord_Done(101),
    Res_PurchaseRecord_Failed(102),
    Res_DeletePurchaseRecord_Done(103),
    Res_DeletePurchaseRecord_Failed(104),
    Res_Refund_OK(105),
    Res_Refund_Done(106),
    Res_Refund_Failed(107),
    Res_UseRandomCashItem_Done(108),
    Res_UseRandomCashItem_Failed(109),
    Res_SetAndroidName_Done(110),
    Res_SetAndroidName_Failed(111),
    Res_UseMaplePointGiftToken_Done(112),
    Res_UseMaplePointGiftToken_Failed(113),
    Res_BuyByToken_Done(114),
    Res_BuyByToken_Failed(115),
    Res_UpgradeValuePack_Done(116),
    Res_UpgradeValuePack_Failed(117),
    Res_EventCashItem_Buy_Result(118),
    Res_BuyFarmGift_Done(119),
    Res_BuyFarmGift_Failed(120),
    Res_GiftScript_Done(121),
    Res_GiftScript_Failed(122),
    Res_AvatarMegaphone_Queue_Full(123),
    Res_AvatarMegaphone_Level_Limit(124),
    Res_MovoCashItemToAuction_Done(125),
    Res_MovoCashItemToAuction_Failed(126),
    Res_MasterPiece_Done(127),
    Res_MasterPiece_Failed(128),
    Res_DestroyCoupleRings_Done(129),
    Res_DestroyCoupleRings_Failed(130),
    Res_DestroyFriendShipRings_Done(131),
    Res_DestroyFriendShipRings_Failed(132),
    Res_LockerTransfer_Done(133),
    Res_LockerTransfer_Failed(134),
    Res_MovoCashItemToLockerFromAuction_Done(135),
    Res_MovoCashItemToLockerFromAuction_Failed(138),


    FailReason_Unknown(0),
    FailReason_Timeout(1),
    FailReason_CashDaemonDBError(2),
    FailReason_NoRemainCash(3),
    FailReason_GiftUnderAge(4),
    FailReason_GiftLimitOver(5),
    FailReason_GiftSameAccount(6),
    FailReason_GiftUnknownRecipient(7),
    FailReason_GiftRecipientGenderMismatch(8),
    FailReason_GiftRecipientLockerFull(9),
    FailReason_BuyStoredProcFailed(10),
    FailReason_GiftStoredProcFailed(11),
    FailReason_GiftNoReceiveCharacter(12),
    FailReason_GiftNoSenderCharacter(13),
    FailReason_InvalidCoupon(14),
    FailReason_ExpiredCoupon(15),
    FailReason_UsedCoupon(16),
    FailReason_CouponForCafeOnly(17),
    FailReason_CouponForCafeOnly_Used(18),
    FailReason_CouponForCafeOnly_Expired(19),
    FailReason_NotAvailableCoupon(20),
    FailReason_GenderMisMatch(21),
    FailReason_GiftNormalItem(22),
    FailReason_GiftMaplePoint(23),
    FailReason_NoEmptyPos(24),
    FailReason_ForPremiumUserOnly(25),
    FailReason_BuyCoupleStoredProcFailed(26),
    FailReason_BuyFriendshipStoredProcFailed(27),
    FailReason_NotAvailableTime(28),
    FailReason_NoStock(29),
    FailReason_PurchaseLimitOver(30),
    FailReason_NoRemainMeso(31),
    FailReason_IncorrectSSN2(32),
    FailReason_IncorrectSPW(33),
    FailReason_ForNoPurchaseExpUsersOnly(34),
    FailReason_AlreadyApplied(35),
    FailReason_WebShopUnknown(36),
    FailReason_WebShopInventoryCount(37),
    FailReason_WebShopBuyStoredProcFailed(38),
    FailReason_WebShopInvalidOrder(39),
    FailReason_GachaponLimitOver(40),
    FailReason_NoUser(41),
    FailReason_WrongCommoditySN(42),
    FailReason_CouponLimitError(43),
    FailReason_CouponLimitError_Hour(44),
    FailReason_CouponLimitError_Day(45),
    FailReason_CouponLimitError_Week(46),
    FailReason_BridgeNotConnected(47),
    FailReason_TooYoungToBuy(48),
    FailReason_GiftTooYoungToRecv(49),
    FailReason_LimitOverTheItem(50),
    FailReason_CashLock(51),
    FailReason_FindSlotPos(52),
    FailReason_GetItem(53),
    FailReason_DestroyCashItem(54),
    FailReason_NotSaleTerm(55),
    FailReason_InvalidCashItem(56),
    FailReason_InvalidRandomCashItem(57),
    FailReason_ReceiveItem(58),
    FailReason_UseRandomCashItem(59),
    FailReason_NotGameSvr(60),
    FailReason_NotShopSvr(61),
    FailReason_ItemLockerIsFull(62),
    FailReason_NoAndroid(63),
    FailReason_DBQueryFailed(64),
    FailReason_UserSaveFailed(65),
    FailReason_CannotBuyMonthlyOnceItem(66),
    FailReason_OnlyCashItem(67),
    FailReason_NotEnoughMaplePoint(68),
    FailReason_TooMuchMaplePointAlready(69),
    FailReason_GiveMaplePointUnknown(70),
    FailReason_OnWorld(71),
    FailReason_NoRemainToken(72),
    FailReason_GiftToken(73),
    FailReason_LimitOverCharacter(74),
    FailReason_CurrentValuePack(75),
    FailReason_NoRemainCashMileage(76),
    FailReason_NotEquipItem(77),
    FailReason_DoNotReceiveCashItemInvenFull(78),
    FailReason_DoNotCheckQuest(79),
    FailReason_SpecialServerUnable(80),
    FailReason_BuyWSLimit(81),
    FailReason_NoNISMS(82),
    FailReason_RefundExpired(83),
    FailReason_NoRefundItem(84),
    FailReason_NoRefundPackage(85),
    FailReason_PurchaseItemLimitOver(86),
    FailReason_OTPStateError(87),
    FailReason_WrongPassword(88),
    FailReason_CountOver(89),
    FailReason_Reissuing(90),
    FailReason_NotExist(91),
    FailReason_NotAvailableLockerTransfer(92),
    FailReason_DormancyAccount(93),

    No(-1);

    private int val;

    CashItemType(int val) {
        this.val = val;
    }

    public static CashItemType getRequestTypeByVal(byte type) {
        return Arrays.stream(values()).filter(cit -> cit.toString().startsWith("Req") && cit.getVal() == type).findAny().orElse(null);
    }

    public static CashItemType getResultTypeByVal(byte type) {
        return Arrays.stream(values()).filter(cit -> cit.toString().startsWith("Res") && cit.getVal() == type).findAny().orElse(null);
    }

    public int getVal() {
        return val;
    }

    public static void main(String[] args) {
        File file = new File("D:\\Swordie\\Swordie\\src\\main\\java\\net\\swordie\\ms\\enums\\CashItemType.java");
        int change = -1;
        boolean check = false;
        CashItemType checkOp = null;
        try (Scanner s = new Scanner(file)) {
            while (s.hasNextLine()) {
                String line = s.nextLine();
                if (line.contains(",") && line.contains("(")) {
                    String[] split = line.split("[()]");
                    String name = split[0];
                    if (!Util.isNumber(split[1])) {
                        System.out.println(line);
                        continue;
                    }
                    int val = Integer.parseInt(split[1]);
                    CashItemType oh = Arrays.stream(CashItemType.values()).filter(o -> o.toString().equals(name.trim())).findFirst().orElse(null);
                    if (oh != null) {
                        CashItemType start = Req_ExtraInfo;
                        if (oh.ordinal() >= start.ordinal() && oh.ordinal() < Res_CharacterSaleSuccess.ordinal()) {
                            if (line.contains("*")) {
                                check = true;
                                checkOp = oh;
                            }
                            val += change;
                            System.out.println(String.format("%s(%d), %s", name, val, start == oh ? "// *" : ""));
                        } else {
                            System.out.println(line);
                        }
                    }
                } else {
                    System.out.println(line);
                }
            }
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        }
        if (check) {
            System.err.println(String.format("Current op (%s) contains a * (= updated). Be sure to check for overlap.", checkOp));
        }
    }
}