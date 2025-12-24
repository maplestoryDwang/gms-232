package net.swordie.ms.handlers.social;

import net.swordie.ms.client.Account;
import net.swordie.ms.client.character.Char;
import net.swordie.ms.client.character.items.Item;
import net.swordie.ms.connection.InPacket;
import net.swordie.ms.connection.packet.field.FieldPacket;
import net.swordie.ms.constants.GameConstants;
import net.swordie.ms.constants.ItemConstants;
import net.swordie.ms.enums.AuctionResultCode;
import net.swordie.ms.enums.AuctionState;
import net.swordie.ms.enums.ChatType;
import net.swordie.ms.enums.InvType;
import net.swordie.ms.handlers.Handler;
import net.swordie.ms.handlers.header.InHeader;
import net.swordie.ms.util.FileTime;
import net.swordie.ms.world.World;
import net.swordie.ms.world.auction.*;
import net.swordie.orm.dao.AccountDao;
import net.swordie.orm.dao.AuctionItemDao;
import net.swordie.orm.dao.SworDaoFactory;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import java.util.Set;

public class AuctionHandler {

    private static final Logger log = LogManager.getLogger();
    private static final AccountDao accountDao = (AccountDao) SworDaoFactory.getByClass(Account.class);
    private static final AuctionItemDao auctionItemDao = (AuctionItemDao) SworDaoFactory.getByClass(AuctionItem.class);

    @Handler(op = InHeader.AUCTION_REQUEST)
    public static void handleAuctionRequest(Char chr, InPacket inPacket) {
        // TODO: Move all querying logic to dao
        int type = inPacket.decodeInt();
        AuctionType at = AuctionType.getType(type);
        if (at == null) {
            chr.write(FieldPacket.auctionResult(AuctionResult.error(AuctionType.SearchItems, AuctionResultCode.UnkError)));
            log.error(String.format("Unknown auction request type %d", type));
            return;
        }
        Account acc = chr.getAccount();
        World world = chr.getWorld();
        
        switch (at) {
            case Initialize:
                handleInitialize(world, chr);
                break;
            case SearchItems:
            case SearchMarketPlace:
                handleSearch(chr, inPacket, at, world);
                break;
            case WishList:
                handleWishlist();
                break;
            case ListItem:
                handleListItem(chr, inPacket, at, acc);
                break;
            case LoadSellItems:
                handleLoadSellingItems(acc, chr);
                break;
            case AuctionCancel:
                handleAuctionCancel(chr, inPacket, at, acc);
                break;
            case LoadSoldItems:
                handleLoadSoldItems(acc, chr);
                break;
            case Reclaim:
                handleReclaim(chr, inPacket, at, acc);
                break;
            case ItemListAgain:
                handleItemListAgain(chr, inPacket, at, acc);
                break;
            case PurchaseSingle:
                handlePurchaseSingle(chr, inPacket, at, acc, world);
                break;
            case PurchaseMultiple:
                handlePurchaseMultiple(chr, inPacket, at, acc, world);
                break;
            case Collect:
                handleCollect(chr, inPacket, at, acc);
                break;
            default:
                log.warn(String.format("Unhandled auction type %s", at));

        }
    }

    private static void handleInitialize(World world, Char chr) {
        chr.write(FieldPacket.auctionResult(AuctionResult.showSearchItems(world.getInitialAuctionItems())));
        chr.write(FieldPacket.auctionResult(AuctionResult.initialize()));
    }

    private static void handleCollect(Char chr, InPacket inPacket, AuctionType at, Account acc) {
        var auctionId = inPacket.decodeInt();
        var ai = acc.getAuctionById(auctionId);
        if (ai == null || ai.getState() != AuctionState.Sold) {
            chr.write(FieldPacket.auctionResult(AuctionResult.error(at, AuctionResultCode.NotExist)));
            return;
        }

        // Could also handle bids here if implemented
        // Just assuming that only buyout is possible right now
        long collectMoney = (long) (ai.getDeposit() + (ai.getDirectPrice() * ai.getQuantity()) * GameConstants.AUCTION_TAX);

        if (!chr.canAddMoney(collectMoney)) {
            chr.write(FieldPacket.auctionResult(AuctionResult.error(at, AuctionResultCode.InsufficientFundsForDeposit)));
            return;
        }

        ai.setState(AuctionState.SoldDone);

        chr.addMoney(collectMoney);
        auctionItemDao.saveOrUpdate(ai);

        var items = acc.getCompletedAuctionItems();
        chr.write(FieldPacket.auctionResult(AuctionResult.requestSucceed(at, auctionId)));
        chr.write(FieldPacket.auctionResult(AuctionResult.showSoldItems(items)));
    }

    private static void handlePurchaseMultiple(Char chr, InPacket inPacket, AuctionType at, Account acc, World world) {
        AuctionItem ai;
        var auctionId = inPacket.decodeInt();
        long price = inPacket.decodeLong();
        int buyQuant = inPacket.decodeInt();
        ai = world.getAuctionById(auctionId);
        if (ai == null || ai.getQuantity() <= 0 || ai.getState() != AuctionState.Init
                || /*ai.getAccountID() == acc.getId() ||*/ buyQuant <= 0) {
            chr.write(FieldPacket.auctionResult(AuctionResult.error(at, AuctionResultCode.NotExist)));
            return;
        }

        buyQuant = Math.min(buyQuant, ai.getQuantity());
        var cost = ai.getDirectPrice() * buyQuant;
        if (cost > chr.getMoney()) {
            chr.write(FieldPacket.auctionResult(AuctionResult.error(at, AuctionResultCode.InsufficientFundsForDeposit)));
            return;
        }

        chr.deductMoney(cost);
        ai.setSoldQuantity(ai.getSoldQuantity() + buyQuant);
        ai.getItem().setQuantity(ai.getQuantity() - buyQuant);

        if (ai.getQuantity() == 0) {
            // item is bought out
            // update seller's item
            ai.setBidUserID(chr.getId());
            ai.setBidUsername(chr.getName());
            ai.setState(AuctionState.Sold);
            ai.setEndDate(FileTime.currentTime());
            ai.getItem().setQuantity(buyQuant);

            // give buyer the item
            var buyerAuctionItem = acc.createAndAddAuctionByItem(ai.getItem().deepCopy(), chr, ai.getPrice());
            buyerAuctionItem.setDirectPrice(ai.getDirectPrice() * buyQuant);
            buyerAuctionItem.setEndDate(FileTime.currentTime());
            buyerAuctionItem.setState(AuctionState.Reserve);
            buyerAuctionItem.getItem().setQuantity(buyQuant);
            auctionItemDao.saveOrUpdate(buyerAuctionItem);

            notifySeller(world, ai, buyQuant, 0);
        } else {
            // give seller the money
            var sellerItem = ai.deepCopy(FileTime.currentTime());
            sellerItem.setItem(sellerItem.getItem().deepCopy());
            sellerItem.getItem().setQuantity(buyQuant);
            var sellerAccount = world.getAccountById(sellerItem.getAccountID());
            if (sellerAccount == null) {
                sellerAccount = accountDao.getById(sellerItem.getAccountID());
            }

            if (sellerAccount != null) {
                sellerItem.setBidUserID(chr.getId());
                sellerItem.setBidUsername(chr.getName());
                sellerItem.setState(AuctionState.Sold);
                sellerItem.setEndDate(FileTime.currentTime());
                sellerItem.setSoldQuantity(buyQuant);

                sellerAccount.addAuction(sellerItem);
                world.addAuction(sellerItem, true);

                auctionItemDao.saveOrUpdate(sellerItem);
                notifySeller(world, sellerItem, buyQuant, ai.getQuantity());
            }

            // give buyer the item
            Item buyerItem = ai.getItem().deepCopy();
            buyerItem.setQuantity(buyQuant);

            var buyerAuctionItem = acc.createAndAddAuctionByItem(buyerItem, chr, ai.getPrice());
            buyerAuctionItem.setDirectPrice(ai.getDirectPrice() * buyQuant);
            buyerAuctionItem.setEndDate(FileTime.currentTime());
            buyerAuctionItem.setState(AuctionState.Reserve);
            auctionItemDao.saveOrUpdate(buyerAuctionItem);
        }

        auctionItemDao.saveOrUpdate(ai);
        chr.write(FieldPacket.auctionResult(AuctionResult.requestSucceed(at, auctionId)));

        Set<AuctionItem> newItemsToShow;
        if (chr.getLastAuctionCriteria() != null) {
            newItemsToShow = world.getAuctionItemsWithFilter(chr.getLastAuctionCriteria());
        } else {
            newItemsToShow = world.getInitialAuctionItems();
        }

        chr.write(FieldPacket.auctionResult(AuctionResult.showSearchItems(newItemsToShow)));
    }

    private static void handlePurchaseSingle(Char chr, InPacket inPacket, AuctionType at, Account acc, World world) {
        var auctionId = inPacket.decodeInt();
        var ai = world.getAuctionById(auctionId);
        if (ai == null || ai.getState() != AuctionState.Init || ai.getAccountID() == acc.getId()
                || ai.getQuantity() > 1) {
            chr.write(FieldPacket.auctionResult(AuctionResult.error(at, AuctionResultCode.NotExist)));
            return;
        }
        var cost = ai.getDirectPrice();
        if (cost > chr.getMoney()) {
            chr.write(FieldPacket.auctionResult(AuctionResult.error(at, AuctionResultCode.InsufficientFundsForDeposit)));
            return;
        }

        chr.deductMoney(cost);

        ai.setBidUserID(chr.getId());
        ai.setBidUsername(chr.getName());
        ai.setSoldQuantity(ai.getSoldQuantity() + 1);
        ai.setEndDate(FileTime.currentTime());
        if (ai.getSoldQuantity() == ai.getQuantity()) {
            ai.setState(AuctionState.Sold);
        }

        AuctionItem buyerAuctionItem;
        buyerAuctionItem = acc.createAndAddAuctionByItem(ai.getItem().deepCopy(), chr, ai.getPrice());
        buyerAuctionItem.setDirectPrice(ai.getDirectPrice());
        buyerAuctionItem.setEndDate(FileTime.currentTime());
        buyerAuctionItem.setState(AuctionState.Reserve);

        auctionItemDao.saveOrUpdate(ai);
        auctionItemDao.saveOrUpdate(buyerAuctionItem);
        notifySeller(world, ai, 1, 0);

        chr.write(FieldPacket.auctionResult(AuctionResult.requestSucceed(at, auctionId)));

        Set<AuctionItem> newItemsToShow;
        if (chr.getLastAuctionCriteria() != null) {
            newItemsToShow = world.getAuctionItemsWithFilter(chr.getLastAuctionCriteria());
        } else {
            newItemsToShow = world.getInitialAuctionItems();
        }

        chr.write(FieldPacket.auctionResult(AuctionResult.showSearchItems(newItemsToShow)));
    }

    private static void handleItemListAgain(Char chr, InPacket inPacket, AuctionType at, Account acc) {
        AuctionItem ai;
        Set<AuctionItem> items;
        var auctionId = inPacket.decodeInt();
        ai = acc.getAuctionById(auctionId);
        if (ai == null || ai.getState() != AuctionState.Expire) {
            chr.write(FieldPacket.auctionResult(AuctionResult.error(at, AuctionResultCode.NotExist)));
            return;
        }
        var cost = GameConstants.AUCTION_DEPOSIT_AMOUNT;
        if (cost > chr.getMoney()) {
            chr.write(FieldPacket.auctionResult(AuctionResult.error(at, AuctionResultCode.InsufficientFundsForDeposit)));
            return;
        }
        chr.deductMoney(GameConstants.AUCTION_DEPOSIT_AMOUNT);
        ai.setState(AuctionState.Done);

        AuctionItem newAi = ai.deepCopy(
                FileTime.fromDate(FileTime.currentTime().toLocalDateTime().plusHours(GameConstants.AUCTION_LIST_TIME))
        );
        newAi.setRegDate(FileTime.currentTime());
        newAi.setState(AuctionState.Init);

        chr.write(FieldPacket.auctionResult(AuctionResult.listItem(newAi)));
        chr.getWorld().addAuction(newAi, true);
        acc.addAuction(newAi);

        items = acc.getCompletedAuctionItems();
        chr.write(FieldPacket.auctionResult(AuctionResult.requestSucceed(at, auctionId)));
        chr.write(FieldPacket.auctionResult(AuctionResult.showSoldItems(items)));
        auctionItemDao.saveOrUpdate(ai);
    }

    private static void handleReclaim(Char chr, InPacket inPacket, AuctionType at, Account acc) {
        AuctionItem ai;
        Set<AuctionItem> items;
        var auctionId = inPacket.decodeInt();
        ai = acc.getAuctionById(auctionId);

        if (ai == null || (ai.getState() != AuctionState.Reserve && ai.getState() != AuctionState.Expire)) {
            chr.write(FieldPacket.auctionResult(AuctionResult.error(at, AuctionResultCode.NotExist)));
            return;
        }

        var item = ai.getItem().deepCopy();
        var invType = item.getInvType();
        if (chr.getInventoryByType(invType).isFull()) {
            chr.write(FieldPacket.auctionResult(AuctionResult.error(at, AuctionResultCode.InsufficientSlots2)));
            return;
        }

        ai.setState(ai.getState() == AuctionState.Expire ? AuctionState.Done : AuctionState.BidSuccessDone);
        chr.addItemToInventory(item);
        items = acc.getCompletedAuctionItems();
        chr.write(FieldPacket.auctionResult(AuctionResult.requestSucceed(at, auctionId)));
        chr.write(FieldPacket.auctionResult(AuctionResult.showSoldItems(items)));
        auctionItemDao.saveOrUpdate(ai);
    }

    private static void handleAuctionCancel(Char chr, InPacket inPacket, AuctionType at, Account acc) {
        var auctionId = inPacket.decodeInt();
        var ai = acc.getAuctionById(auctionId);
        if (ai == null || ai.getState() != AuctionState.Init) {
            chr.write(FieldPacket.auctionResult(AuctionResult.error(at, AuctionResultCode.UnkError)));
            return;
        }
        ai.setEndDate(FileTime.currentTime());
        ai.setState(AuctionState.Expire);
        // show items again
        var items = acc.getSellingAuctionItems();
        chr.write(FieldPacket.auctionResult(AuctionResult.requestSucceed(at, auctionId)));
        chr.write(FieldPacket.auctionResult(AuctionResult.showSellingItems(items)));
        auctionItemDao.saveOrUpdate(ai);
    }

    private static void handleLoadSellingItems(Account acc, Char chr) {
        var items = acc.getSellingAuctionItems();
        chr.write(FieldPacket.auctionResult(AuctionResult.showSellingItems(items)));
    }

    private static void handleListItem(Char chr, InPacket inPacket, AuctionType at, Account acc) {
        AuctionItem ai;
        Set<AuctionItem> items;
        inPacket.decodeInt(); // auction type
        int itemId = inPacket.decodeInt();
        int quant = inPacket.decodeInt();
        long unitPrice = inPacket.decodeLong();
        int listHours = inPacket.decodeInt(); // always 24?
        InvType invType = InvType.getInvTypeByVal(inPacket.decodeByte());
        int pos = inPacket.decodeInt();

        Item item = chr.getInventoryByType(invType).getItemBySlot(pos);
        if (item == null || item.getItemId() != itemId || !item.isTradable() || quant > item.getQuantity()) {
            chr.write(FieldPacket.auctionResult(AuctionResult.error(at, AuctionResultCode.CannotBeListed)));
            return;
        }

        long cost = GameConstants.AUCTION_DEPOSIT_AMOUNT;
        if (cost > chr.getMoney() || unitPrice < GameConstants.AUCTION_MIN_PRICE
                || unitPrice > GameConstants.AUCTION_MAX_PRICE) {
            chr.write(FieldPacket.auctionResult(AuctionResult.error(at, AuctionResultCode.InsufficientFundsForDeposit)));
            return;
        }

        if (quant <= 0) {
            chr.getUser().getOffenseManager().addOffense("Tried putting negative amount items on the AH");
            chr.write(FieldPacket.auctionResult(AuctionResult.error(at, AuctionResultCode.InvalidListingAmount)));
            return;
        }

        Item toPutUp = item.deepCopy();
        if (ItemConstants.isEquip(itemId)) {
            toPutUp.setQuantity(1);
        } else {
            toPutUp.setQuantity(quant);
        }

        chr.deductMoney(GameConstants.AUCTION_DEPOSIT_AMOUNT);
        chr.consumeItem(item, quant);

        toPutUp.assignId();
        ai = acc.createAndAddAuctionByItem(toPutUp, chr, unitPrice);
        chr.write(FieldPacket.auctionResult(AuctionResult.listItem(ai)));

        // redisplay items
        items = acc.getSellingAuctionItems();
        chr.write(FieldPacket.auctionResult(AuctionResult.requestSucceed(at, (int) toPutUp.getId())));
        chr.write(FieldPacket.auctionResult(AuctionResult.showSellingItems(items)));
    }

    private static void handleWishlist() {

    }

    private static void handleSearch(Char chr, InPacket inPacket, AuctionType at, World world) {
        boolean expired = at == AuctionType.SearchMarketPlace;
        inPacket.decodeByte(); // ?
        AuctionInvType auctionInvType = AuctionInvType.getByVal(inPacket.decodeInt());
        String query1 = inPacket.decodeString();
        String query2 = inPacket.decodeString();
        AuctionEnum subType = auctionInvType.getSubByVal(inPacket.decodeInt()).getSubByVal(inPacket.decodeInt());
        int minLv = inPacket.decodeInt();
        int maxLv = inPacket.decodeInt();
        long minPrice = inPacket.decodeLong();
        long maxPrice = inPacket.decodeLong();

        var optionGrade = AuctionPotType.All;
        var andSearch = true;
        // TODO
//        int idk1 = inPacket.decodeInt();
//        int idk2 = inPacket.decodeInt();
//        int idk3 = inPacket.decodeInt();
//        int idk4 = inPacket.decodeInt();
//        AuctionPotType optionGrade = AuctionPotType.getByVal(inPacket.decodeInt());
//        AuctionPotType bonusOptionGrade = AuctionPotType.getByVal(inPacket.decodeInt());
//        inPacket.decodeInt(); // ?
//        boolean andSearch = inPacket.decodeByte() != 0;
//        int addOptionSize = inPacket.decodeInt();
        // TODO
        var criteria = new AuctionItemSearchCriteria(query1.toLowerCase(), query2.toLowerCase(),
                auctionInvType, subType, minLv, maxLv, minPrice, maxPrice, optionGrade, andSearch, expired);
        chr.setLastAuctionCriteria(criteria);
        Set<AuctionItem> items = world.getAuctionItemsWithFilter(criteria);

        if (at == AuctionType.SearchItems) {
            chr.write(FieldPacket.auctionResult(AuctionResult.showSearchItems(items)));
        } else {
            chr.write(FieldPacket.auctionResult(AuctionResult.showMarketplaceItems(items)));
        }
    }

    private static void handleLoadSoldItems(Account account, Char chr) {
        var items = account.getCompletedAuctionItems();
        chr.write(FieldPacket.auctionResult(AuctionResult.showSoldItems(items)));
    }

    private static void notifySeller(World world, AuctionItem item, int boughtQuantity, int remainingQuantity) {
        var sellerAccount = world.getAccountById(item.getAccountID());

        if (sellerAccount != null && sellerAccount.getCurrentChr() != null) {
            sellerAccount.getCurrentChr().chatMessage(
                    ChatType.GameDesc, "One of your items has been bought from the Auction House: %s (%d). Remaining: %d",
                    item.getItemName(),
                    boughtQuantity,
                    remainingQuantity
            );
        }
    }
}
