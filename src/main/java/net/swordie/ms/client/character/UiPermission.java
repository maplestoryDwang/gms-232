package net.swordie.ms.client.character;

import net.swordie.ms.connection.Encodable;
import net.swordie.ms.connection.OutPacket;
import net.swordie.ms.util.Util;

import java.util.Collection;

public class UiPermission implements Encodable {

    public static Collection<UiPermission> PERMISSIONS;

    static {
        PERMISSIONS = Util.makeSet(
                new UiPermission(21, 1, "All"),
                new UiPermission(25, 100, "All"),
                new UiPermission(72, 1, "All"),
                new UiPermission(1000, 1, "All"),
                new UiPermission(1001, 1, "All"),

                new UiPermission(1002, 0, "All"),
                new UiPermission(1010, 0, "All"),
                new UiPermission(1022, 0, "All"),
                new UiPermission(1028, 0, "All"),
                new UiPermission(1063, 0, "All"),

                new UiPermission(1064, 0, "All"),
                new UiPermission(1092, 0, "All"),
                new UiPermission(10003, 1, "All"),
                new UiPermission(10005, 1, "All"),
                new UiPermission(10006, 1, "All"),

                new UiPermission(10020, 0, "All"),
                new UiPermission(10021, 1, "All"),
                new UiPermission(10022, 1000, "All"),
                new UiPermission(10023, 100, "All"),
                new UiPermission(10016, 0, "All")
        );
    }

    private final int key;
    private final int val;
    private final String permissions;

    public UiPermission(int key, int val, String permissions) {
        this.key = key;
        this.val = val;
        this.permissions = permissions;
    }

    public int getKey() {
        return key;
    }

    public int getVal() {
        return val;
    }

    public String getPermissions() {
        return permissions;
    }

    @Override
    public void encode(OutPacket outPacket) {
        outPacket.encodeInt(getKey());
        outPacket.encodeInt(getVal());
        outPacket.encodeString(getPermissions());
    }
}
