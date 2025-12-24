package net.swordie.ms.client.social.miniroom;

import net.swordie.ms.client.character.Char;
import net.swordie.ms.enums.RoomLeaveType;

/**
 * Created on 04/02/2022.
 *
 * @author Asura
 */
public abstract class MiniRoomEvents {

    /**
     * Character enters the MiniRoom
     * @param chr character that entered the MiniRoom
     */
    public void charEnter(Char chr) {

    }

    /**
     * Character leaves the MiniRoom
     * @param chr character that leaves the MiniRoom
     * @param leaveType
     */
    public void charLeave(Char chr, RoomLeaveType leaveType) {

    }

    /**
     * Character has been kicked out of the MiniRoom
     * @param chr character that is kicked
     */
    public void charKicked(Char chr) {

    }

    /**
     * The MiniRoom is cancelled.
     * Clean up for specific MiniRooms should be done here
     *
     */
    public void cancelMiniRoom(Char reasonChr, RoomLeaveType reasonType) {

    }

    /**
     * The MiniRoom is completed.
     * Cleans up and processes completion
     */
    public void completeMiniRoom() {

    }

    /**
     * The MiniRoom is created
     * This is where setup for specific MiniRooms should be done
     * @param chrs
     */
    public void createMiniRoom(Char... chrs) {

    }

    /**
     * Chr chats within the MiniRoom chat
     * @param chr chr that sends the message
     * @param msg message that should be broadcasted
     */
    public void chat(Char chr, String msg) {

    }

    /**
     * inviter invites the invitee to the MiniRoom
     * @param inviter character that invites
     * @param invitee character that is invited
     */
    public void invite(Char inviter, Char invitee) {

    }

    /**
     * invitee declines the inviter's invitation to the MiniRoom
     * @param invitee invitee that has declined the invitation
     */
    public void declineInvitation(Char invitee) {

    }
}
