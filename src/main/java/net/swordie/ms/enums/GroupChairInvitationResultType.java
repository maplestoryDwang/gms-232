package net.swordie.ms.enums;

import java.util.Arrays;

/**
 * Created on 3/2/2020.
 *
 * @author Asura
 */
public enum GroupChairInvitationResultType {
    ThereAreNoRemainingSeatsOnTheGroupChair(4),
    UnableToFindGroupChair(5),
    YouAreTooFarAwayToAcceptTheInvitation(6),
    InvitedPlayerToSitOnGroupChair(7),
    PlayerNotFound(8),
    GroupChairNotFound(9),
    PlayerAlreadySitting(10),
    GroupChairInvitationWasDeclined(11),
    PlayerCannotSitOnGroupChair(12),
    ;

    private int val;

    GroupChairInvitationResultType(int val) {
        this.val = val;
    }

    public int getVal() {
        return val;
    }

    public static GroupChairInvitationResultType getByVal(int val) {
        return Arrays.stream(values()).filter(t -> t.getVal() == val).findFirst().orElse(null);
    }
}
