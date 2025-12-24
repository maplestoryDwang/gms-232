package net.swordie.ms.client.social.miniroom.gameroom.omok;

import net.swordie.ms.client.character.Char;
import net.swordie.ms.client.social.miniroom.MiniRoomType;
import net.swordie.ms.client.social.miniroom.gameroom.GameKindType;
import net.swordie.ms.client.social.miniroom.gameroom.MiniGameRoom;
import net.swordie.ms.connection.packet.MiniRoomPool;
import net.swordie.ms.connection.packet.model.MiniRoomPacket;
import net.swordie.ms.enums.RoomLeaveType;

/**
 * Created on 04/02/2022.
 *
 * @author Asura
 */
public class OmokGameRoom extends MiniGameRoom {
    private static final int MAX_CHARS = 2;
    private OmokGame omokGame = new OmokGame();

    // Omok Handles  Start


    @Override
    public void charLeave(Char chr, RoomLeaveType leaveType) {
        if (isStarted() && chr != getRoomOwner()) {
            for (var other : getChrs().values()) {
                other.write(MiniRoomPool.miniRoomBaseDlg(MiniRoomPacket.omokGameResult(this, false, getPositionByChar(getRoomOwner()))));
            }
        }
        super.charLeave(chr, leaveType);
    }

    public void kickOther() {
        var chr = getChrs().getOrDefault(1, null);
        if (chr != null) {
            charKicked(chr);
        }
    }

    @Override
    public void chrReady(Char chr) {
        super.chrReady(chr);
        for (var other : getChrs().values()) {
            other.write(MiniRoomPool.miniRoomBaseDlg(MiniRoomPacket.chrReady()));
        }
    }

    @Override
    public void chrCancelReady(Char chr) {
        super.chrCancelReady(chr);
        for (var other : getChrs().values()) {
            other.write(MiniRoomPool.miniRoomBaseDlg(MiniRoomPacket.chrCancelReady()));
        }
    }

    @Override
    public void startGame() {
        if (canStartGame()) {
            omokGame = new OmokGame();
            var owner = getRoomOwner();
            omokGame.setTurn(owner); // owner is first turn
            for (var entry : getChrs().entrySet()) {
                var chr = entry.getValue();
                var pos = entry.getKey();

                chr.write(MiniRoomPool.miniRoomBaseDlg(MiniRoomPacket.startOmok(1))); // other position
                chr.write(MiniRoomPool.miniRoomBaseDlg(MiniRoomPacket.chat(23, owner, 0, 102, "")));
            }
        }

        super.startGame();
    }

    public void putStone(Char moveMaker, int xPos, int yPos, int playerColourValue) {
        if (omokGame.getRedoRequest() != null) {
            // Cannot place stone if redo request is being processed
            return;
        }
        var win = false;
        var tie = false;
        if (omokGame.putStone(moveMaker, xPos, yPos, playerColourValue)) {
            omokGame.setTurn(getOther(omokGame.getTurn()));
            for (var chr : getChrs().values()) {
                chr.write(MiniRoomPool.miniRoomBaseDlg(MiniRoomPacket.putStoneChecker(xPos, yPos, playerColourValue)));

                if (omokGame.won(xPos, yPos, playerColourValue)) {
                    win = true;

                } else if (omokGame.isTie()) {
                    tie = true;
                }
            }
        } else {
            moveMaker.write(MiniRoomPool.miniRoomBaseDlg(MiniRoomPacket.putStoneCheckerErr(103)));
        }

        if (win) {
            var loser = getOther(moveMaker);
            var moveMakerMGR = moveMaker.getMiniGameRecordByType(getMiniRoomType().getVal());
            var loserMGR = loser.getMiniGameRecordByType(getMiniRoomType().getVal());

            moveMakerMGR.incWinCount();
            loserMGR.incLossCount();
            for (var chr : getChrs().values()) {
                chr.write(MiniRoomPool.miniRoomBaseDlg(MiniRoomPacket.omokGameResult(this, false, getPositionByChar(moveMaker))));
            }
            endGame();
        } else if (tie) {
            var other = getOther(moveMaker);
            var moveMakerMGR = moveMaker.getMiniGameRecordByType(getMiniRoomType().getVal());
            var otherMGR = other.getMiniGameRecordByType(getMiniRoomType().getVal());

            moveMakerMGR.incTieCount();
            otherMGR.incTieCount();
            for (var chr : getChrs().values()) {
                chr.write(MiniRoomPool.miniRoomBaseDlg(MiniRoomPacket.omokGameResult(this, true, 0)));
            }
            endGame();
        }
    }

    public void giveUp(Char loser) {
        var winner = getOther(loser);

        var winnerMGR = winner.getMiniGameRecordByType(getMiniRoomType().getVal());
        var loserMGR = loser.getMiniGameRecordByType(getMiniRoomType().getVal());

        winnerMGR.incWinCount();
        loserMGR.incLossCount();

        var winnerPosition = getPositionByChar(winner);

        for (var chr : getChrs().values()) {
            chr.write(MiniRoomPool.miniRoomBaseDlg(MiniRoomPacket.omokGameResult(this, false, winnerPosition)));
        }

        endGame();
    }

    public void requestTie(Char requestor) {
        var toChr = getOther(requestor);
        toChr.write(MiniRoomPool.miniRoomBaseDlg(MiniRoomPacket.tieRequest()));
    }

    public void tieRequestResponse(Char chr, boolean isAccepted) {
        var toChr = getOther(chr);
        if (isAccepted) {
            for (var other : getChrs().values()) {
                var mgr = other.getMiniGameRecordByType(getMiniRoomType().getVal());
                mgr.incTieCount();
            }

            for (var other : getChrs().values()) {
                other.write(MiniRoomPool.miniRoomBaseDlg(MiniRoomPacket.omokGameResult(this, true, -1)));
            }

            endGame();
        } else {
            toChr.write(MiniRoomPool.miniRoomBaseDlg(MiniRoomPacket.tieResult(isAccepted)));
        }
    }

    public void forfeitTurn() {
        omokGame.setTurn(getOther(omokGame.getTurn()));
        var pos = getPositionByChar(omokGame.getTurn());
        for (var chr : getChrs().values()) {
            chr.write(MiniRoomPool.miniRoomBaseDlg(MiniRoomPacket.omokTimeOver(pos)));
        }
    }

    public void requestRedo(Char requestor) {
        if (omokGame.getRedoRequest() == null) {
            omokGame.setRedoRequest(requestor);
            var toChr = getOther(requestor);
            toChr.write(MiniRoomPool.miniRoomBaseDlg(MiniRoomPacket.retreatRequest()));
        }
    }

    public void redoRequestResponse(Char chr, boolean isAccepted) {
        var requestor = getOther(chr);
        var position = getPositionByChar(requestor);

        var moveBack = 0;
        if (isAccepted) {
            moveBack = omokGame.redo(requestor);
        }
        for (var other : getChrs().values()) {
            other.write(MiniRoomPool.miniRoomBaseDlg(MiniRoomPacket.chat(23, requestor, 0, 3, "")));
            other.write(MiniRoomPool.miniRoomBaseDlg(MiniRoomPacket.retreatResult(isAccepted, moveBack, position)));
        }
        omokGame.setRedoRequest(null);
    }

    public Char getOther(Char chr) {
        if (chr == getRoomOwner()) {
            return getChrs().getOrDefault(1, null);
        } else {
            return getRoomOwner();
        }
    }
    // Omok Handles  End

    @Override
    public MiniRoomType getMiniRoomType() {
        return MiniRoomType.OmokGame;
    }

    @Override
    public int getMaxChars() {
        return MAX_CHARS;
    }

    @Override
    public int getMyPositionByChar(Char toChr, Char chr) {
        return getPositionByChar(chr);
    }

    @Override
    public int getOtherPositionByChar(Char chr) {
        return getPositionByChar(chr);
    }

    @Override
    public Char getRoomOwner() {
        return getChrs().getOrDefault(0, null);
    }

    @Override
    public int getMyPosition(Char chr) {
        return getPositionByChar(chr);
    }

    @Override
    public GameKindType getMiniGameKind() {
        return GameKindType.Omok;
    }
}
