package net.swordie.ms.client.social.miniroom;

import net.swordie.ms.client.character.Char;
import net.swordie.ms.connection.packet.MiniRoomPool;
import net.swordie.ms.connection.packet.model.MiniRoomPacket;
import net.swordie.ms.enums.RoomLeaveType;

import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;

/**
 * Created on 03/02/2022.
 *
 * @author Asura
 */
public abstract class MiniRoom extends MiniRoomEvents {

    private Map<Integer, Char> chrs = new HashMap<>();
    private Set<Char> inviteeSet = new HashSet<>();

    public Map<Integer, Char> getChrs() {
        return chrs;
    }

    protected Set<Char> getInviteeSet() {
        return inviteeSet;
    }


    @Override
    public void charEnter(Char chr) {
        chr.setMiniRoom(this);
        getChrs().put(getFirstOpenPosition(), chr);
        getInviteeSet().remove(chr);

        for (var other : getChrs().values()) {
            if (other == chr) {
                chr.write(MiniRoomPool.miniRoomBaseDlg(MiniRoomPacket.enterMiniRoom(chr, this)));
            } else {
                other.write(MiniRoomPool.miniRoomBaseDlg(MiniRoomPacket.accept(chr, this)));
            }
        }
    }

    @Override
    public void charLeave(Char chr, RoomLeaveType leaveType) {
        var position = getPositionByChar(chr);
        chr.setMiniRoom(null);
        for (var other : getChrs().values()) {
            other.write(MiniRoomPool.miniRoomBaseDlg(MiniRoomPacket.exit(position, leaveType)));
        }
        getChrs().remove(position);
    }

    @Override
    public void charKicked(Char chr) {
        charLeave(chr, RoomLeaveType.MRLeave_Kicked);
    }

    @Override
    public void cancelMiniRoom(Char reasonChr, RoomLeaveType reasonType) {
        for (var entry : getChrs().entrySet()) {
            var chr = entry.getValue();
            chr.setMiniRoom(null);
        }
        getChrs().clear();
    }

    @Override
    public void createMiniRoom(Char... chrs) {
        for (var chr : chrs) {
            chr.setMiniRoom(this);
            getChrs().put(getFirstOpenPosition(), chr);
            chr.write(MiniRoomPool.miniRoomBaseDlg(MiniRoomPacket.enterMiniRoom(chr, this)));
        }
    }


    @Override
    public void invite(Char inviter, Char invitee) {
        getInviteeSet().add(invitee);
        invitee.write(MiniRoomPool.miniRoomBaseDlg(MiniRoomPacket.inviteRequest(inviter, this)));
    }

    public boolean isInvited(Char chr) {
        return getInviteeSet().contains(chr);
    }


    protected int getFirstOpenPosition() {
        for (var i = 0; i < getMaxChars(); i++) {
            if (getChrs().getOrDefault(i, null) == null) {
                return i;
            }
        }
        return -1;
    }

    public int getPositionByChar(Char chr) {
        return getChrs().entrySet().stream().filter(e -> e.getValue() == chr).map(Map.Entry::getKey).findFirst().orElse(-1);
    }


    /**
     * get the type of miniroom of this object
     * @return
     */
    public abstract MiniRoomType getMiniRoomType();

    /**
     * Get the maximum amount of characters
     * @return
     */
    public abstract int getMaxChars();

    /**
     * Get the position of 'chr' given that the packet is sent to 'toChr'
     *
     * @param toChr
     * @param chr
     * @return
     */
    public abstract int getMyPositionByChar(Char toChr, Char chr);

    /**
     * Get the position of 'other'
     * @param chr
     * @return
     */
    public abstract int getOtherPositionByChar(Char chr);

    public abstract int getMyPosition(Char chr);

    public abstract Char getRoomOwner();
}
