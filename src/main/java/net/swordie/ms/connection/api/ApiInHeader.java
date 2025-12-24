package net.swordie.ms.connection.api;

import java.util.HashMap;
import java.util.Map;

/**
 * @author Sjonnie
 * Created on 10/5/2018.
 */
public enum ApiInHeader {
    REQUEST_TOKEN(100),
    CREATE_ACCOUNT_REQUEST(101),
    SHUTDOWN_SERVER(102),
    CANCEL_SHUTDOWN(103),
    LOGOUT_REQUEST(104),
    ;

    private int val;
    private final static Map<Integer, ApiInHeader> opToHeaderMap = new HashMap<>();

    static {
        for (ApiInHeader ih : values()) {
            opToHeaderMap.put(ih.getVal(), ih);
        }
    }

    ApiInHeader(int val) {
        this.val = val;
    }

    public static ApiInHeader getByVal(int op) {
        return opToHeaderMap.getOrDefault(op, null);
    }

    public static ApiInHeader getInHeaderByOp(int op) {
        return opToHeaderMap.getOrDefault(op, null);
    }

    public static Object getInHeaderByOp(short op) {
        return null;
    }

    public int getVal() {
        return val;
    }
}
