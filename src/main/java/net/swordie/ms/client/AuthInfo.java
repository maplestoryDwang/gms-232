package net.swordie.ms.client;

import net.swordie.ms.util.FileTime;

public class AuthInfo {

    private final FileTime expiryTime;
    private final int userId;
    private boolean wzVerified;
    private byte[] key;
    private boolean needsWzVerified;

    public AuthInfo(int userId, FileTime expiryTime, boolean wzVerified, boolean needsWzVerified) {
        this.expiryTime = expiryTime;
        this.userId = userId;
        this.wzVerified = wzVerified;
        this.needsWzVerified = needsWzVerified;
    }

    public FileTime getExpiryTime() {
        return expiryTime;
    }

    public int getUserId() {
        return userId;
    }

    public boolean isWzVerified() {
        return wzVerified;
    }

    public boolean isExpired() {
        return expiryTime == null || expiryTime.isExpired();
    }

    public void setKey(byte[] key) {
        this.key = key;
    }

    public byte[] getKey() {
        return key;
    }

    public void setWzVerified(boolean verified) {
        wzVerified = verified;
    }

    public boolean isNeedsWzVerified() {
        return needsWzVerified;
    }

}
