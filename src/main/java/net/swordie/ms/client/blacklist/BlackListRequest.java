package net.swordie.ms.client.blacklist;

import java.util.Arrays;

/**
 * Created on 05/06/2021.
 *
 * @author Asura
 */
public enum BlackListRequest {
    BlackListInsertRequest(0),
    // 1
    BlackListDeleteRequest(2),
    ;

    private int val;

    public int getVal() {
        return val;
    }

    BlackListRequest(int val) {
        this.val = val;
    }

    public static BlackListRequest getByVal(int val) {
        return Arrays.stream(values()).filter(blr -> blr.getVal() == val).findFirst().orElse(null);
    }
}
