package net.swordie.ms.client.social.miniroom.tradingroom;

import net.swordie.ms.client.character.Char;
import net.swordie.ms.client.character.items.Equip;
import net.swordie.ms.client.character.items.EquipAttribute;
import net.swordie.ms.client.character.items.Item;
import net.swordie.ms.client.social.miniroom.MiniRoom;
import net.swordie.ms.client.social.miniroom.MiniRoomType;
import net.swordie.ms.connection.packet.MiniRoomPool;
import net.swordie.ms.connection.packet.model.MiniRoomPacket;
import net.swordie.ms.constants.GameConstants;
import net.swordie.ms.enums.InvType;
import net.swordie.ms.enums.RoomLeaveType;
import net.swordie.ms.logging.TransactionLogger;

import java.util.*;

/**
 * Created on 03/02/2022.
 *
 * @author Asura
 */
public class TradingRoom extends MiniRoom {
    public static final int MAX_CHARS = 2;

    private Map<Char, TradeOffer> tradeOffers = new HashMap<>();
    private Set<Char> confirmedChrs = new HashSet<>();

    public Map<Char, TradeOffer> getTradeOffers() {
        return tradeOffers;
    }

    public Set<Char> getConfirmedChrs() {
        return confirmedChrs;
    }

    public void addConfirmedChar(Char chr) {
        getConfirmedChrs().add(chr);
    }

    public boolean hasConfirmed(Char chr) {
        return getConfirmedChrs().contains(chr);
    }

    // chr
    public Char getTradeInitiator() {
        if (getChrs().size() > 0) {
            return getChrs().get(0);
        }
        return null;
    }

    // other
    public Char getTradeRecipient() {
        if (getChrs().size() > 1) {
            return getChrs().get(1);
        }
        return null;
    }

    public boolean canAddItem(Char chr, int pos, Item item) {
        var tradeOffer = getTradeOffers().getOrDefault(chr, null);
        if (tradeOffer != null) {
            if (tradeOffer.getOfferedItemByPosition(pos) != null) {
                return false;
            }

            return tradeOffer.canAddItems();
        }

        return false;
    }

    public void addItem(Char chr, int pos, Item item) {
        var tradeOffer = getTradeOffers().getOrDefault(chr, null);
        if (tradeOffer != null && tradeOffer.getOfferedItemByPosition(pos) == null) { // tradeOffer is not null && position is free
            tradeOffer.addItemToOfferedItems(pos, item);

            var other = getOther(chr);
            chr.write(MiniRoomPool.miniRoomBaseDlg(MiniRoomPacket.placeItem(0, pos, item)));
            other.write(MiniRoomPool.miniRoomBaseDlg(MiniRoomPacket.placeItem(1, pos, item)));
        }
    }

    public void addMoney(Char chr, Long money) {
        var tradeOffer = getTradeOffers().getOrDefault(chr, null);
        if (tradeOffer != null && tradeOffer.getMoney() + money <= GameConstants.MAX_MONEY) {
            tradeOffer.addMoney(money);

            var other = getOther(chr);
            chr.write(MiniRoomPool.miniRoomBaseDlg(MiniRoomPacket.setMoney(0, tradeOffer.getMoney())));
            other.write(MiniRoomPool.miniRoomBaseDlg(MiniRoomPacket.setMoney(1, tradeOffer.getMoney())));
        }
    }

    public boolean completeTrade() {
        Char initiator = getTradeInitiator();
        Char recipient = getTradeRecipient();

        if (initiator == null || recipient == null) {
            return false;
        }
        if(!initiator.isOnline() || !recipient.isOnline()){
            return false;
        }

        var initiatorOffering = getTradeOffers().getOrDefault(initiator, null);
        var recipientOffering = getTradeOffers().getOrDefault(recipient, null);

        if (initiatorOffering == null || recipientOffering == null) {
            return false;
        }

        // check if recipient can hold initiator's offerings
        if (!canHold(recipient, initiatorOffering.getOfferedItems().values())) {
            recipient.chatMessage("You do not have enough inventory space.");
            initiator.chatMessage(recipient.getName() + " does not have enough inventory space.");
            return false;
        }
        if (!recipient.canAddMoney(initiatorOffering.getMoney())) {
            recipient.chatMessage("You have too much mesos.");
            initiator.chatMessage(recipient.getName() + " has too much mesos.");
            return false;
        }

        // check if initiator can hold recipient's offerings
        if (!canHold(initiator, recipientOffering.getOfferedItems().values())) {
            initiator.chatMessage("You do not have enough inventory space.");
            recipient.chatMessage(initiator.getName() + " does not have enough inventory space.");
            return false;
        }
        if (!initiator.canAddMoney(recipientOffering.getMoney())) {
            initiator.chatMessage("You have too much mesos.");
            recipient.chatMessage(initiator.getName() + " has too much mesos.");
            return false;
        }


        UUID tradeUuid = UUID.randomUUID();


        // Initiator -> Recipient
        for (var item : initiatorOffering.getOfferedItems().values()) {
            if (item instanceof Equip) {
                var equip = (Equip) item;
                equip.removeScissor();
                equip.removeAttribute(EquipAttribute.UntradableAfterTransaction);
            }

            recipient.addItemToInventory(item);

            TransactionLogger.addTradeTransaction(tradeUuid, item, initiator, recipient);
        }
        var money = initiatorOffering.getMoney();
        TransactionLogger.addTradeTransaction(tradeUuid, money, initiator, recipient);
        recipient.addMoney(money);

        // Recipient -> Initiator
        for (var item : recipientOffering.getOfferedItems().values()) {
            if (item instanceof Equip) {
                var equip = (Equip) item;
                equip.removeScissor();
                equip.removeAttribute(EquipAttribute.UntradableAfterTransaction);
            }

            initiator.addItemToInventory(item);

            TransactionLogger.addTradeTransaction(tradeUuid, item, recipient, initiator);
        }
        money = recipientOffering.getMoney();
        TransactionLogger.addTradeTransaction(tradeUuid, money, recipient, initiator);
        initiator.addMoney(money);

        return true;
    }

    private void restoreItems() {
        for (var entry : getTradeOffers().entrySet()) {
            var chr = entry.getKey();
            var tradeOffer = entry.getValue();

            for (var item : tradeOffer.getOfferedItems().values()) {
                chr.addItemToInventory(item);
            }
            chr.addMoney(tradeOffer.getMoney());
        }
    }

    private boolean canHold(Char chr, Collection<Item> checkItems) {
        Map<InvType, Integer> totalSlots = new HashMap<>();
        for (var item : checkItems) {
            var invType = item.getInvType();
            totalSlots.put(invType, totalSlots.getOrDefault(invType,0) + 1);
        }

        for (var entry : totalSlots.entrySet()) {
            var invType = entry.getKey();
            var openSlotsNeeded = entry.getValue();

            var inv = chr.getInventoryByType(invType);
            if (openSlotsNeeded > inv.getEmptySlots()) {
                return false;
            }
        }

        return true;
    }

    public Char getOther(Char chr) {
        return chr == getTradeInitiator() ? getTradeRecipient() : getTradeInitiator();
    }

    @Override
    public void chat(Char chr, String msg) {
        var other = getOther(chr);
        chr.write(MiniRoomPool.miniRoomBaseDlg(MiniRoomPacket.chat(25, chr, 1, 0, msg)));
        other.write(MiniRoomPool.miniRoomBaseDlg(MiniRoomPacket.chat(25, chr, 0, 0, msg)));
    }

    @Override
    public void invite(Char inviter, Char invitee) {
        super.invite(inviter, invitee);
        inviter.chatMessage(String.format("You sent a trade request to %s.", invitee.getName()));
    }

    @Override
    public void declineInvitation(Char invitee) {
        getTradeInitiator().chatMessage(String.format("%s has declined the trade request.", invitee.getName()));
        getInviteeSet().remove(invitee);
        cancelMiniRoom(invitee, RoomLeaveType.DeclinedInvite);
    }

    @Override
    public void createMiniRoom(Char... chrs) {
        for (var chr : chrs) {
            getTradeOffers().put(chr, new TradeOffer());
        }
        super.createMiniRoom(chrs);
    }

    @Override
    public void charEnter(Char chr) {
        super.charEnter(chr);
        getTradeOffers().put(chr, new TradeOffer());
        informOtherInventory();
    }

    @Override
    public void charLeave(Char chr, RoomLeaveType leaveType) {
        // trade implementation means, if 1 person leaves, the whole miniroom must be cancelled.
        cancelMiniRoom(chr, leaveType);
    }

    @Override
    public void cancelMiniRoom(Char reasonChr, RoomLeaveType reasonType) {
        // override to NOT call super!
        restoreItems();
        for (var chr : getChrs().values()) {
            chr.setMiniRoom(null);
            chr.write(MiniRoomPool.miniRoomBaseDlg(MiniRoomPacket.exit(0, reasonType == RoomLeaveType.LeftRoom ? RoomLeaveType.TRLeave_TradeFail : RoomLeaveType.TRLeave_TradeFail_Denied)));
        }
        getChrs().clear();
        getTradeOffers().clear();
        getConfirmedChrs().clear();
    }

    @Override
    public void completeMiniRoom() {
        for (var chr : getChrs().values()) {
            chr.setMiniRoom(null);
            chr.write(MiniRoomPool.miniRoomBaseDlg(MiniRoomPacket.exit(1, RoomLeaveType.TRLeave_TradeDone)));
        }
        getChrs().clear();
        getTradeOffers().clear();
        getConfirmedChrs().clear();
        super.completeMiniRoom();
    }

    @Override
    public MiniRoomType getMiniRoomType() {
        return MiniRoomType.TradingRoom;
    }

    @Override
    public int getMaxChars() {
        return MAX_CHARS;
    }

    @Override
    public int getMyPositionByChar(Char toChr, Char chr) {
        return chr == toChr ? 1 : 0; // for trading, myPosition should always be 1 for client
    }

    @Override
    public int getOtherPositionByChar(Char chr) {
        return 0; // for trading, otherPosition should always be 0 for client
    }

    @Override
    public int getMyPosition(Char chr) {
        return 1;
    }

    @Override
    public Char getRoomOwner() {
        return getTradeInitiator();
    }

    // Custom
    private void informOtherInventory() {
        String[] inventoryNames = new String[]{
                "eqp",
                "use",
                "etc",
                "setup",
                "cash",};
        for (String invName : inventoryNames) {
            getTradeInitiator().write(MiniRoomPool.miniRoomBaseDlg(MiniRoomPacket.chat(25, getTradeInitiator(), 1, 0,
                    String.format("%s has %d free %s slots",
                            getTradeRecipient().getName(),
                            getTradeRecipient().getInventoryByType(InvType.getInvTypeByString(invName)).getEmptySlots(),
                            invName))));
            getTradeRecipient().write(MiniRoomPool.miniRoomBaseDlg(MiniRoomPacket.chat(25, getTradeRecipient(), 1, 0,
                    String.format("%s has %d free %s slots",
                            getTradeInitiator().getName(),
                            getTradeInitiator().getInventoryByType(InvType.getInvTypeByString(invName)).getEmptySlots(),
                            invName))));
        }
    }
}
