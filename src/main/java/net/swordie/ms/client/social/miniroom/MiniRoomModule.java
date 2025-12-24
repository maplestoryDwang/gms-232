package net.swordie.ms.client.social.miniroom;

import net.swordie.ms.client.character.Char;
import net.swordie.ms.client.character.items.Item;
import net.swordie.ms.client.social.miniroom.gameroom.MiniGameRoom;
import net.swordie.ms.client.social.miniroom.gameroom.omok.OmokGameRoom;
import net.swordie.ms.client.social.miniroom.tradingroom.TradingRoom;
import net.swordie.ms.connection.InPacket;
import net.swordie.ms.connection.packet.MiniRoomPool;
import net.swordie.ms.connection.packet.model.MiniRoomPacket;
import net.swordie.ms.enums.InvType;
import net.swordie.ms.enums.MiniRoomAction;
import net.swordie.ms.enums.RoomLeaveType;

/**
 * Created on 04/02/2022.
 *
 * @author Asura
 */
public class MiniRoomModule {
    public static void handleOmokGameRoomAction(Char chr, MiniRoomAction mrt, InPacket inPacket) {

        var miniRoom = chr.getMiniRoom();
        if (!(miniRoom instanceof OmokGameRoom)) {
            chr.chatMessage("You are not currently playing Omok");
            return;
        }

        var omokGame = (OmokGameRoom) miniRoom;

        switch (mrt) {
            // Omok
            case OmokTieReq:
                omokGame.requestTie(chr);
                break;
            case OmokTieRes:
                var accepted = inPacket.decodeByte() != 0;
                omokGame.tieRequestResponse(chr, accepted);
                break;
            case OmokGiveUpReq:
                omokGame.giveUp(chr);
                break;
            case OmokRetreatReq:
                omokGame.requestRedo(chr);
                break;
            case OmokRetreatRes:
                accepted = inPacket.decodeByte() != 0;
                omokGame.redoRequestResponse(chr, accepted);
                break;
            case OmokUserReady:
                omokGame.chrReady(chr);
                break;
            case OmokUserCancelReady:
                omokGame.chrCancelReady(chr);
                break;
            case OmokUserBoot:
                omokGame.kickOther();
                break;
            case OmokUserStart:
                omokGame.startGame();
                break;
            case OmokTimeOver:
                if (chr == omokGame.getRoomOwner()) { // it is sent to all players
                    omokGame.forfeitTurn();
                }
                break;
            case OmokPutStoneChecker:
                var xPos = inPacket.decodeInt();
                var yPos = inPacket.decodeInt();
                var playerColourValue = inPacket.decodeByte();
                omokGame.putStone(chr, xPos, yPos, playerColourValue);
                break;
        }
    }

    public static void handleTradingRoomAction(Char chr, MiniRoomAction mrt, InPacket inPacket) {
        var miniRoom = chr.getMiniRoom();
        if (!(miniRoom instanceof TradingRoom)) {
            chr.chatMessage("You are not currently trading.");
            return;
        }

        var tradingRoom = (TradingRoom) chr.getMiniRoom();

        switch (mrt) {
            // TradingRoom
            case PlaceItem:
            case PlaceItem_2:
            case PlaceItem_3:
            case PlaceItem_4:
                byte invType = inPacket.decodeByte();
                short bagIndex = inPacket.decodeShort();
                short quantity = inPacket.decodeShort();
                byte tradeSlot = inPacket.decodeByte(); // trade window slot number

                Item item = chr.getInventoryByType(InvType.getInvTypeByVal(invType)).getItemBySlot(bagIndex);
                if (quantity <= 0 || item.getQuantity() < quantity) {
                    chr.getOffenseManager().addOffense(String.format("Character {%d} tried to trade an item {%d} with a higher quantity {%s} than the item has {%d}.", chr.getId(), item.getItemId(), quantity, item.getQuantity()));
                    return;
                }

                if (!item.isTradable()) {
                    chr.getOffenseManager().addOffense(String.format("Character {%d} tried to trade an item {%d} whilst it was trade blocked.", chr.getId(), item.getItemId()));
                    return;
                }

                Item offer = item.deepCopy();
                offer.setQuantity(quantity);

                if (tradingRoom.canAddItem(chr, tradeSlot, offer)) {
                    int consumed = quantity > item.getQuantity() ? 0 : item.getQuantity() - quantity;
                    item.setQuantity(consumed + 1); // +1 because 1 gets consumed by consumeItem(item)
                    chr.consumeItem(item);

                    tradingRoom.addItem(chr, tradeSlot, offer);
                }
                break;
            case SetMesos:
            case SetMesos_2:
            case SetMesos_3:
            case SetMesos_4:
                long money = inPacket.decodeLong();

                if (money > chr.getMoney() || money < 0) {
                    chr.getOffenseManager().addOffense(String.format("Character %d tried to add an invalid amount of mesos (%d, own money: %d)",
                            chr.getId(), money, chr.getMoney()));
                    return;
                }

                chr.deductMoney(money);
                tradingRoom.addMoney(chr, money);
                break;
            case ConfirmTrade:
            case TradeConfirm:
            case TradeConfirm2:
            case TradeConfirm3:
                var other = tradingRoom.getOther(chr);
                other.write(MiniRoomPool.miniRoomBaseDlg(MiniRoomPacket.confirmTrade()));
                if (tradingRoom.hasConfirmed(other)) {
                    boolean success = tradingRoom.completeTrade();
                    if (success) {
                        tradingRoom.completeMiniRoom();

                    } else {
                        tradingRoom.cancelMiniRoom(chr, RoomLeaveType.Error);
                    }
                } else {
                    tradingRoom.addConfirmedChar(chr);
                }
                break;
            case TradeConfirmRemoteResponse:
                // just an ack by the client?
                break;
        }
    }



    public static void handleCommonMiniRoomAction(Char chr, MiniRoomAction mrt, InPacket inPacket) {

        var miniRoom = chr.getMiniRoom();

        switch (mrt) {
            // Common
            case CreateMiniRoom:
                var miniRoomTypeVal = inPacket.decodeByte();
                var miniRoomType = MiniRoomType.getByVal(miniRoomTypeVal);
                if (miniRoomType == null) {
                    return;
                }

                var miniRoomCreated = MiniRoomFactory.getByType(miniRoomType);
                if (miniRoomCreated == null) {
                    return;
                }

                switch (miniRoomType) {
                    case OmokGame:
                        var omokGame = (OmokGameRoom) miniRoomCreated;

                        var roomName = inPacket.decodeString();
                        var bPrivate = inPacket.decodeByte() != 0;
                        String roomPassword = null;
                        if (bPrivate) {
                            roomPassword = inPacket.decodeString();
                        }
                        inPacket.decodeByte();
                        inPacket.decodeByte();
                        inPacket.decodeByte();

                        omokGame.setRoomName(roomName);
                        omokGame.setRoomPassword(roomPassword);
                        break;
                    case TradingRoom:
                        inPacket.decodeByte(); // ?
                        break;
                }
                miniRoomCreated.createMiniRoom(chr);
                break;

            case Exit:
                if (miniRoom != null) {
                    miniRoom.charLeave(chr, RoomLeaveType.LeftRoom);
                }
                break;
            case Chat:
                inPacket.decodeInt(); // tick
                String msg = inPacket.decodeString();

                if (miniRoom == null) {
                    chr.chatMessage("You are currently not in a room.");
                    return;
                }

                miniRoom.chat(chr, msg);
                break;
            case Accept:
                var inviterChrId = inPacket.decodeInt();
                var isPrivateRoom = inPacket.decodeByte() != 0;
                String enteredPassword = null;
                if (isPrivateRoom) {
                    enteredPassword = inPacket.decodeString();
                }
                inPacket.decodeByte();
                var inviter = chr.getField().getCharByID(inviterChrId);

                if (inviter == null) {
                    chr.chatMessage("Could not find that player.");
                    return;
                }
                if (inviter.isInInterface()) {
                    chr.chatMessage("That player is currently doing something else");
                    return;
                }
                if (chr.getMiniRoom() != null || chr.isInInterface()) {
                    // Accepter is already in a mini room or in an interface
                    return;
                }

                var inviterMiniRoom = inviter.getMiniRoom();

                if (inviterMiniRoom.getChrs().size() >= inviterMiniRoom.getMaxChars()) {
                    // Room is full
                    return;
                }

                if (inviterMiniRoom == null) {
                    // Inviter already cancelled the trade
                    return;
                }
                if (inviterMiniRoom instanceof TradingRoom && !(inviterMiniRoom.isInvited(chr))) {
                    // Person accepts but has not been invited to the trade
                    return;
                }
                if (inviterMiniRoom instanceof MiniGameRoom && ((MiniGameRoom) inviterMiniRoom).getRoomPassword() != null && !(((MiniGameRoom) inviterMiniRoom).getRoomPassword().equals(enteredPassword))) {
                    // Wrong Password
                    return;
                }

                inviterMiniRoom.charEnter(chr);
                break;
            case InviteRequest:
                var chrId = inPacket.decodeInt();
                var invitee = chr.getField().getCharByID(chrId);
                if (invitee == null) {
                    chr.chatMessage("Could not find that player.");
                    chr.getMiniRoom().cancelMiniRoom(invitee, RoomLeaveType.Error);
                    return;
                }
                if (invitee.getMiniRoom() != null || invitee.isInInterface()) {
                    chr.chatMessage("That player is currently doing something else");
                    chr.getMiniRoom().cancelMiniRoom(invitee, RoomLeaveType.Busy);
                    return;
                }

                miniRoom.invite(chr, invitee);
                break;
            case Decline: // always decline?
                inviterChrId = inPacket.decodeInt();
                inviter = chr.getField().getCharByID(inviterChrId);

                if (inviter == null || inviter.getMiniRoom() == null) {
                    return;
                }

                inviter.getMiniRoom().declineInvitation(chr);
                break;
        }
    }
}
