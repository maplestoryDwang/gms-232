package net.swordie.ms.client.blacklist;

/**
 * Created on 05/06/2021.
 *
 * @author Asura
 */
public enum BlackListResult {
    BlackListInsertRequestDone(1),
    // 2
    BlackListDeleteRequestDone(3),
    EncodeBlackListView(4),
    FailedRequest(5),
    CharacterNotInList(6),
    CannotAddAdminCharacter(7),
    IsAlreadyRegistered(8),
    IsAlreadyBeingUsed(9),
    IsInFriendList(10),
    IsInFriendList2(11),
    ;

    private int val;

    public int getVal() {
        return val;
    }

    BlackListResult(int val) {
        this.val = val;
    }
}
