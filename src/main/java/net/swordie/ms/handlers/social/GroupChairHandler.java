package net.swordie.ms.handlers.social;

import net.swordie.ms.client.character.Char;
import net.swordie.ms.client.character.chair.PortableChair;
import net.swordie.ms.connection.InPacket;
import net.swordie.ms.connection.packet.UserLocal;
import net.swordie.ms.connection.packet.field.FieldPacket;
import net.swordie.ms.constants.ItemConstants;
import net.swordie.ms.enums.GroupChairInvitationResultType;
import net.swordie.ms.handlers.Handler;
import net.swordie.ms.handlers.header.InHeader;
import net.swordie.ms.world.field.Field;

/**
 * Created on 3/2/2020.
 *
 * @author Asura
 */
public class GroupChairHandler {

    @Handler(op = InHeader.USER_GROUP_CHAIR_INVITE_REQUEST)
    public static void handleUserGroupChairInviteRequest(Char chr, InPacket inPacket) {
        int invitedChrId = inPacket.decodeInt();

        Field field = chr.getField();
        Char invitedChr = field.getCharByID(invitedChrId);

        if (chr.getChair() == null || !ItemConstants.isGroupChair(chr.getChair().getItemID())) {
            chr.write(FieldPacket.groupChairInvitationResult(GroupChairInvitationResultType.GroupChairNotFound));
            return;
        }
        if (invitedChr == null) {
            // Not in field
            chr.write(FieldPacket.groupChairInvitationResult(GroupChairInvitationResultType.PlayerNotFound));
            return;
        }
        if (invitedChr.getChair() != null && invitedChr.getChair().getItemID() > 0) {
            chr.write(FieldPacket.groupChairInvitationResult(GroupChairInvitationResultType.PlayerAlreadySitting));
            return;
        }
        if (!chr.getChair().hasFreeSeats()) {
            chr.write(FieldPacket.groupChairInvitationResult(GroupChairInvitationResultType.ThereAreNoRemainingSeatsOnTheGroupChair));
            return;
        }


        chr.write(FieldPacket.groupChairInvitationResult(GroupChairInvitationResultType.InvitedPlayerToSitOnGroupChair));
        invitedChr.write(UserLocal.groupChairInvite(chr.getId()));
        chr.dispose();
    }

    @Handler(op = InHeader.USER_GROUP_CHAIR_INVITE_RESPONSE)
    public static void handleUserGroupChairInviteResponse(Char chr, InPacket inPacket) {
        int inviterChrId = inPacket.decodeInt();
        int typeVal = inPacket.decodeInt(); // 7 = Accept  |  11 = Decline
        GroupChairInvitationResultType type = GroupChairInvitationResultType.getByVal(typeVal);

        Field field = chr.getField();
        Char inviterChr = field.getCharByID(inviterChrId);

        if (inviterChr == null) {
            // Not in field
            chr.write(FieldPacket.groupChairInvitationResult(GroupChairInvitationResultType.PlayerNotFound));
            return;
        }
        if (inviterChr.getChair() == null || !ItemConstants.isGroupChair(inviterChr.getChair().getItemID())) {
            // Not sitting on a chair, or not sitting on a Group Chair
            chr.write(FieldPacket.groupChairInvitationResult(GroupChairInvitationResultType.GroupChairNotFound));
            return;
        }
        if (!inviterChr.getChair().hasFreeSeats()) {
            // Group Chair is full.
            chr.write(FieldPacket.groupChairInvitationResult(GroupChairInvitationResultType.ThereAreNoRemainingSeatsOnTheGroupChair));
            return;
        }
        if (!inviterChr.getPosition().getRectAround(PortableChair.GROUP_CHAIR_RECT).hasPositionInside(chr.getPosition())) {
            chr.write(FieldPacket.groupChairInvitationResult(GroupChairInvitationResultType.YouAreTooFarAwayToAcceptTheInvitation));
            return;
        }
        if (type == null) {
            chr.dispose();
            return;
        }
        if (type.equals(GroupChairInvitationResultType.GroupChairInvitationWasDeclined)) {
            inviterChr.write(FieldPacket.groupChairInvitationResult(GroupChairInvitationResultType.GroupChairInvitationWasDeclined));
            return;
        }


        // Update Group Chair
        PortableChair chair = inviterChr.getChair();
        chr.sit(chair);
    }

    @Handler(op = InHeader.USER_GROUP_CHAIR_REMOVE_REQUEST)
    public static void handleUserGroupChairRemoveRequest(Char chr, InPacket inPacket) {
        int removedChrId = inPacket.decodeInt();

        Field field = chr.getField();
        Char removedChr = field.getCharByID(removedChrId);
        if (removedChr == null) {
            // Couldn't find player
            return;
        }


        PortableChair chair = chr.getChair();
        chair.removeFromSeat(removedChr);
        chr.dispose();
    }
}
