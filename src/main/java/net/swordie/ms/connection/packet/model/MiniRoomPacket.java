package net.swordie.ms.connection.packet.model;

import net.swordie.ms.client.character.Char;
import net.swordie.ms.client.character.items.Item;
import net.swordie.ms.client.social.miniroom.MiniRoom;
import net.swordie.ms.client.social.miniroom.gameroom.omok.OmokGameRoom;
import net.swordie.ms.connection.Encodable;
import net.swordie.ms.connection.OutPacket;
import net.swordie.ms.enums.MiniRoomAction;
import net.swordie.ms.enums.RoomLeaveType;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

/**
 * Created on 03/02/2022.
 *
 * @author Asura
 */
public class MiniRoomPacket implements Encodable {

    private static final Logger log = LogManager.getLogger();

    private MiniRoomAction miniRoomAction;
    private MiniRoom miniRoom;
    private RoomLeaveType leaveType;
    private Char toChr;
    private Char fromChr;
    private int chrPos;
    private int position;
    private Item item;
    private long money;
    private int reasonValue;
    private int chatValue;
    private String msg;
    private int xPos;
    private int yPos;
    private int playerColourValue;
    private boolean accepted;
    private boolean isDraw;
    private int movesBack;

    public MiniRoomPacket(MiniRoomAction miniRoomAction) {
        this.miniRoomAction = miniRoomAction;
    }

    @Override
    public void encode(OutPacket outPacket) {
        outPacket.encodeByte(miniRoomAction.getVal());

        switch (miniRoomAction) {
            // Common
            case EnterMiniRoom:
                outPacket.encodeByte(miniRoom.getMiniRoomType().getVal());
                outPacket.encodeByte(miniRoom.getMaxChars());
                outPacket.encodeByte(miniRoom.getMyPosition(toChr)); // myPosition

                for (var chr : miniRoom.getChrs().values()) {
                    outPacket.encodeByte(miniRoom.getMyPositionByChar(toChr, chr)); // myPosition
                    chr.getAvatarData().getAvatarLook().encode(outPacket);
                    outPacket.encodeString(chr.getName());
                    outPacket.encodeShort(chr.getJob());
                    outPacket.encodeInt(0); // wing item
                }
                outPacket.encodeByte(-1); // end indicator



                // Additional encodes for different miniroom types
                switch (miniRoom.getMiniRoomType()) {
                    case OmokGame: // Omok:
                        var omok = (OmokGameRoom) miniRoom;
                        for (var chr : miniRoom.getChrs().values()) {
                            outPacket.encodeByte(miniRoom.getMyPositionByChar(toChr, chr)); // myPosition
                            var mgr = chr.getMiniGameRecordByType(miniRoom.getMiniRoomType().getVal());
                            mgr.encode(outPacket);
                        }
                        outPacket.encodeByte(-1); // end indicator

                        outPacket.encodeString(omok.getRoomName());
                        outPacket.encodeString("");
                        break;
                }
                break;
            case Chat:
                outPacket.encodeByte(chatValue);
                if (chatValue == 23) {
                    outPacket.encodeByte(reasonValue);
                    outPacket.encodeString(fromChr.getName());
                } else if (chatValue == 25) {
                    outPacket.encodeByte(position);
                    outPacket.encodeString(fromChr.getName());
                    outPacket.encodeString(msg);
                    outPacket.encodeInt(fromChr.getId());
                    fromChr.encodeChatInfo(outPacket, msg);
                }
                break;
            case InviteRequest:
                outPacket.encodeByte(miniRoom.getMiniRoomType().getVal());
                outPacket.encodeString(fromChr.getName());
                outPacket.encodeInt(fromChr.getJob());
                outPacket.encodeInt(fromChr.getId());
                break;
            case Exit:
                outPacket.encodeByte(position);
                outPacket.encodeByte(leaveType.getVal());
                break;
            case Accept:
                outPacket.encodeByte(miniRoom.getOtherPositionByChar(fromChr)); // position
                fromChr.getAvatarData().getAvatarLook().encode(outPacket);
                outPacket.encodeString(fromChr.getName());
                outPacket.encodeShort(fromChr.getJob());
                outPacket.encodeInt(0); // wing item

                switch (miniRoom.getMiniRoomType()) {
                    case OmokGame:
                        var mgr = fromChr.getMiniGameRecordByType(miniRoom.getMiniRoomType().getVal());
                        mgr.encode(outPacket);
                        break;
                }
                break;


                // Omok
            case OmokTieReq:
                // empty
                break;
            case OmokTieRes:
                break;
            case OmokRetreatReq:
                // empty
                break;
            case OmokRetreatRes:
                outPacket.encodeByte(accepted);
                if (accepted) {
                    outPacket.encodeByte(movesBack);
                    for (var ignored = 0; ignored < movesBack; ignored++) {
                        outPacket.encodeByte(position);
                    }
                }
                break;
            case OmokUserReady:
                // empty
                break;
            case OmokUserCancelReady:
                // empty
                break;
            case OmokUserStart:
                outPacket.encodeByte(position); // myPosition
                break;
            case OmokGameResult:
                outPacket.encodeByte(isDraw); // nGameResultType
                if (isDraw) {
                    // empty
                } else {
                    outPacket.encodeByte(position);
                }
                for (var i = 0; i < 2; i++) {
                    var chr = miniRoom.getChrs().getOrDefault(i, null);
                    var mgr = chr.getMiniGameRecordByType(miniRoom.getMiniRoomType().getVal());
                    mgr.encode(outPacket);
                }
                break;
            case OmokTimeOver:
                outPacket.encodeByte(position); // myPosition
                break;
            case OmokPutStoneChecker:
                outPacket.encodeInt(xPos); // x
                outPacket.encodeInt(yPos); // y
                outPacket.encodeByte(playerColourValue); // playerColour
                break;
            case OmokPutStoneCheckerErr:
                outPacket.encodeByte(reasonValue); // 102 || 103
                break;


                // TradingRoom
            case PlaceItem:
                outPacket.encodeByte(chrPos);
                outPacket.encodeByte(position);
                item.encode(outPacket);
                break;
            case SetMesos:
                outPacket.encodeByte(chrPos);
                outPacket.encodeLong(money);
                break;
            case ConfirmTrade:
                // empty
                break;
        }
    }

    // Common
    public static MiniRoomPacket enterMiniRoom(Char toChr, MiniRoom miniRoom) {
        var packet = new MiniRoomPacket(MiniRoomAction.EnterMiniRoom);
        packet.miniRoom = miniRoom;
        packet.toChr = toChr;
        return packet;
    }

    public static MiniRoomPacket inviteRequest(Char fromChr, MiniRoom miniRoom) {
        var packet = new MiniRoomPacket(MiniRoomAction.InviteRequest);
        packet.fromChr = fromChr;
        packet.miniRoom = miniRoom;
        return packet;
    }

    public static MiniRoomPacket exit(int position, RoomLeaveType leaveType) {
        var packet = new MiniRoomPacket(MiniRoomAction.Exit);
        packet.position = position;
        packet.leaveType = leaveType;
        return packet;
    }

    public static MiniRoomPacket chat(int chatValue, Char fromChr, int position, int reasonValue, String msg) {
        var packet = new MiniRoomPacket(MiniRoomAction.Chat);
        packet.chatValue = chatValue; // only 23/25
        packet.fromChr = fromChr;
        packet.position = position;
        packet.reasonValue = reasonValue;
        packet.msg = msg;
        return packet;
    }

    // Trading Room
    public static MiniRoomPacket accept(Char chr, MiniRoom miniRoom) {
        var packet = new MiniRoomPacket(MiniRoomAction.Accept);
        packet.fromChr = chr;
        packet.miniRoom = miniRoom;
        return packet;
    }

    public static MiniRoomPacket confirmTrade() {
        var packet = new MiniRoomPacket(MiniRoomAction.ConfirmTrade);
        return packet;
    }

    public static MiniRoomPacket placeItem(int chrPos, int position, Item item) {
        var packet = new MiniRoomPacket(MiniRoomAction.PlaceItem);
        packet.chrPos = chrPos;
        packet.position = position;
        packet.item = item;
        return packet;
    }

    public static MiniRoomPacket setMoney(int chrPos, long money) {
        var packet = new MiniRoomPacket(MiniRoomAction.SetMesos);
        packet.chrPos = chrPos;
        packet.money = money;
        return packet;
    }

    // Omok
    public static MiniRoomPacket tieRequest() {
        var packet = new MiniRoomPacket(MiniRoomAction.OmokTieReq);
        return packet;
    }

    public static MiniRoomPacket tieResult(boolean accepted) {
        var packet = new MiniRoomPacket(MiniRoomAction.OmokTieRes);
        packet.accepted = accepted;
        return packet;
    }

    public static MiniRoomPacket retreatRequest() {
        var packet = new MiniRoomPacket(MiniRoomAction.OmokRetreatReq);
        return packet;
    }

    public static MiniRoomPacket retreatResult(boolean accepted, int movesBack, int position) {
        var packet = new MiniRoomPacket(MiniRoomAction.OmokRetreatRes);
        packet.accepted = accepted;
        packet.movesBack = movesBack;
        packet.position = position;
        return packet;
    }

    public static MiniRoomPacket chrReady() {
        var packet = new MiniRoomPacket(MiniRoomAction.OmokUserReady);
        return packet;
    }

    public static MiniRoomPacket chrCancelReady() {
        var packet = new MiniRoomPacket(MiniRoomAction.OmokUserCancelReady);
        return packet;
    }

    public static MiniRoomPacket startOmok(int position) {
        var packet = new MiniRoomPacket(MiniRoomAction.OmokUserStart);
        packet.position = position;
        return packet;
    }

    public static MiniRoomPacket omokGameResult(MiniRoom miniRoom, boolean isDraw, int winnerPosition) {
        var packet = new MiniRoomPacket(MiniRoomAction.OmokGameResult);
        packet.miniRoom = miniRoom;
        packet.isDraw = isDraw;
        packet.position = winnerPosition;
        return packet;
    }

    public static MiniRoomPacket omokTimeOver(int position) {
        var packet = new MiniRoomPacket(MiniRoomAction.OmokTimeOver);
        packet.position = position;
        return packet;
    }

    public static MiniRoomPacket putStoneChecker(int xPos, int yPos, int playerColourValue) {
        var packet = new MiniRoomPacket(MiniRoomAction.OmokPutStoneChecker);
        packet.xPos = xPos;
        packet.yPos = yPos;
        packet.playerColourValue = playerColourValue;
        return packet;
    }

    public static MiniRoomPacket putStoneCheckerErr(int reasonValue) {
        var packet = new MiniRoomPacket(MiniRoomAction.OmokPutStoneCheckerErr);
        packet.reasonValue = reasonValue;
        return packet;
    }
}
