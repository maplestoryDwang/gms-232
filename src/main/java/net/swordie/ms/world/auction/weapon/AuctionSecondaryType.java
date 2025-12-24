package net.swordie.ms.world.auction.weapon;

import net.swordie.ms.client.character.items.Item;
import net.swordie.ms.constants.ItemConstants;
import net.swordie.ms.world.auction.AuctionEnum;

/**
 * @author Sjonnie
 * Created on 11/21/2018.
 */
public enum AuctionSecondaryType implements AuctionEnum {
    All,
    Medal,
    Rosary,
    IronChain,
    Spellbook,
    ArrowFletcing,
    BowThimble,
    DaggerScabbard,
    Charm,
    WristBand,
    FarSight,
    PowderKeg,
    Jewel,
    Ballast,
    Document,
    Orb,
    MagicArrow,
    Card,
    FoxMarble,
    MagicMarble,
    Arrowhead,
    Controller,
    Magnum,
    NovaEssence,
    SoulRing,
    ChessPiece,
    Charge,
    WarpForge,
    LucentWings,
    Wakizashi,
    Whisper,
    Fist,
    Pass,
    FanTassel,
    ;

    public static AuctionEnum getByVal(int val) {
        return values()[val];
    }

    @Override
    public AuctionEnum getSubByVal(int val) {
        return null;
    }

    @Override
    public boolean isMatching(Item item) {
        int itemId = item.getItemId();
        int prefix = itemId / 10000;
        switch (this) {
            case All:
                // TODO add everything from below
                return true;
            case Medal:
                return ItemConstants.isHeroMedal(itemId);
            case Rosary:
                return ItemConstants.isPaladinRosario(itemId);
            case IronChain:
                return ItemConstants.isDarkKnightChain(itemId);
            case Spellbook:
                return ItemConstants.isIlBook(itemId) || ItemConstants.isFpBook(itemId) || ItemConstants.isClericBook(itemId);
            case ArrowFletcing:
                return ItemConstants.isBowmasterFeather(itemId);
            case BowThimble:
                return ItemConstants.isCrossbowMasterThimble(itemId);
            case DaggerScabbard:
                return ItemConstants.isShadowerSheath(itemId);
            case Charm:
                return ItemConstants.isNightlordPouch(itemId);
            case WristBand:
                return ItemConstants.isViperWristband(itemId);
            case FarSight:
                return ItemConstants.isCaptainSight(itemId);
            case PowderKeg:
                return ItemConstants.isCannonGunpowder(itemId);
            case FanTassel:
                return ItemConstants.isFanTassel(itemId);
            case Jewel:
                return ItemConstants.isJewel(itemId);
            case Ballast:
                return ItemConstants.isBallast(itemId);
            // TODO
            case Document:
            case Orb:
            case MagicArrow:
            case Card:
            case FoxMarble:
            case MagicMarble:
            case Arrowhead:
            case Controller:
            case Magnum:
            case NovaEssence:
            case SoulRing:
            case ChessPiece:
            case Charge:
            case WarpForge:
            case LucentWings:
            case Wakizashi:
            case Whisper:
            case Fist:
            case Pass:
                return false;
        }
        return false;
    }
}
