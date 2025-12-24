package net.swordie.ms.enums;

/**
 * @author Sjonnie
 * Created on 1/18/2019.
 */
public enum AuctionResultCode {
    // Etc/AuctionData.img/ErrorMsg/%d
    None(0),
    UnkError(1),
    MesoMarketCannotBeUsed(100),
    RequestCannotBeProcessed(101),
    NotExist(102),
    InsufficientSlots(103),
    CannotPurchaseYourItem(104),
    CannotPartialPurchase(105),
    InsufficientFundsForDeposit(106),

    InvalidListingAmount(108),
    CannotBeListed(109),

    InsufficientSlots2(116),

    Load(1000),
    ;

    private int val;

    AuctionResultCode(int val) {
        this.val = val;
    }

    public int getVal() {
        return val;
    }
}
