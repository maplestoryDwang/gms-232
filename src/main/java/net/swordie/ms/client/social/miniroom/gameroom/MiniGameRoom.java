package net.swordie.ms.client.social.miniroom.gameroom;

import net.swordie.ms.client.character.Char;
import net.swordie.ms.client.social.miniroom.MiniRoom;
import net.swordie.ms.connection.packet.MiniRoomPool;
import net.swordie.ms.connection.packet.UserPacket;
import net.swordie.ms.connection.packet.model.MiniRoomPacket;
import net.swordie.ms.enums.RoomLeaveType;

import java.util.HashSet;
import java.util.Set;

/**
 * Created on 04/02/2022.
 *
 * @author Asura
 */
public abstract class MiniGameRoom extends MiniRoom {

    private String roomName;
    private String roomPassword;
    private Set<Char> readiedChars = new HashSet<>();
    private boolean started;

    public String getRoomName() {
        return roomName;
    }

    public void setRoomName(String roomName) {
        this.roomName = roomName;
    }

    public String getRoomPassword() {
        return roomPassword;
    }

    public void setRoomPassword(String roomPassword) {
        this.roomPassword = roomPassword;
    }

    public boolean isPrivate() {
        return getRoomPassword() != null;
    }

    public boolean isStarted() {
        return started;
    }

    public void setStarted(boolean started) {
        this.started = started;
    }

    private Set<Char> getReadiedChars() {
        return readiedChars;
    }

    protected boolean canStartGame() {
        return getReadiedChars().size() >= getChrs().size();
    }

    protected void addReadyChar(Char chr) {
        getReadiedChars().add(chr);
    }

    protected void removeReadyChar(Char chr) {
        getReadiedChars().remove(chr);
    }

    @Override
    public void charEnter(Char chr) {
        super.charEnter(chr);
        var roomOwner = getRoomOwner();
        if (roomOwner != null) {
            roomOwner.getField().broadcastPacket(UserPacket.miniRoomBalloon(roomOwner, this));
        }
    }

    @Override
    public void charLeave(Char chr, RoomLeaveType leaveType) {
        var roomOwner = getRoomOwner();
        if (roomOwner == chr) { // room owner leaves
            cancelMiniRoom(chr, leaveType);
        } else {
            super.charLeave(chr, leaveType);
            removeReadyChar(chr);
            roomOwner.getField().broadcastPacket(UserPacket.miniRoomBalloon(roomOwner, this));

            if (isStarted()) {
                setStarted(false);
                roomOwner.getField().broadcastPacket(UserPacket.miniRoomBalloon(roomOwner, this));
            }
        }
    }

    @Override
    public void createMiniRoom(Char... chrs) {
        super.createMiniRoom(chrs);
        var roomOwner = getRoomOwner();
        if (roomOwner != null) {
            addReadyChar(roomOwner);
            roomOwner.getField().broadcastPacket(UserPacket.miniRoomBalloon(roomOwner, this));
        }
    }

    @Override
    public void cancelMiniRoom(Char reasonChr, RoomLeaveType reasonType) {
        var roomOwner = getRoomOwner();
        if (roomOwner != null) {
            roomOwner.getField().broadcastPacket(UserPacket.miniRoomBalloon(roomOwner, null)); // remove balloon
        }

        for (var entry : getChrs().entrySet()) {
            var chr = entry.getValue();
            var pos = entry.getKey();
            var leaveReason = RoomLeaveType.MRLeave_HostOut;
            if (roomOwner == chr) {
                leaveReason = RoomLeaveType.MGLeave_UserRequest;
            }
            chr.write(MiniRoomPool.miniRoomBaseDlg(MiniRoomPacket.exit(pos, leaveReason)));
        }

        getReadiedChars().clear();
        super.cancelMiniRoom(reasonChr, reasonType);
    }

    @Override
    public void chat(Char chr, String msg) {
        var senderPos = getPositionByChar(chr);
        for (var other : getChrs().values()) {
            other.write(MiniRoomPool.miniRoomBaseDlg(MiniRoomPacket.chat(25, chr, senderPos, 0, msg)));
        }
    }

    public void chrReady(Char chr) {
        addReadyChar(chr);
    }

    public void chrCancelReady(Char chr) {
        removeReadyChar(chr);
    }

    public void startGame() {
        setStarted(true);
        var roomOwner = getRoomOwner();
        if (roomOwner != null) {
            roomOwner.getField().broadcastPacket(UserPacket.miniRoomBalloon(roomOwner, this)); // remove balloon
        }
    }

    public void endGame() {
        setStarted(false);
        var roomOwner = getRoomOwner();
        if (roomOwner != null) {
            roomOwner.getField().broadcastPacket(UserPacket.miniRoomBalloon(roomOwner, this)); // remove balloon
        }
    }

    public abstract GameKindType getMiniGameKind();

}
