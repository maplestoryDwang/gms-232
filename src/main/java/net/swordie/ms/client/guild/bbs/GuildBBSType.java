package net.swordie.ms.client.guild.bbs;

import java.util.Arrays;

/**
 * @author Sjonnie
 * Created on 8/12/2018.
 */
public enum GuildBBSType {
    Req_LoadPages(0),
    Req_CreateRecord(1),
    Req_DeleteRecord(2),
    Res_LoadPages(3),
    Req_LoadRecord(4),
    Req_CreateReply(5),
    Req_DeleteReply(6),
    Res_LoadRecord(7),
    Req_Upvote(8),
    Res_MaybeLoadUpvotes(9),
    ;

    private int val;

    GuildBBSType(int val) {
        this.val = val;
    }

    public static GuildBBSType getByValue(byte val) {
        return Arrays.stream(values()).filter(gbt -> gbt.getVal() == val).findAny().orElse(null);
    }

    public int getVal() {
        return val;
    }
}
