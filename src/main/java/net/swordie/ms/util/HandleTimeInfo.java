package net.swordie.ms.util;

import net.swordie.ms.handlers.header.InHeader;

public class HandleTimeInfo {
    private final InHeader inHeader;
    private long count;
    private long avgMs;

    public HandleTimeInfo(InHeader inHeader) {
        this.inHeader = inHeader;
    }

    public void addInfo(long timeToHandle) {
        avgMs = ((avgMs * count) + timeToHandle) / (count + 1);
        count++;
    }

    @Override
    public String toString() {
        return String.format("%s;%d;%d", inHeader, count, avgMs);
    }
}
