package net.swordie.ms.life.mob.boss.papulatus;

import net.swordie.ms.connection.Encodable;
import net.swordie.ms.connection.OutPacket;

public class PapulatusLaserInfo implements Encodable {

    private final int idx;
    private final boolean enabled;
    private final long unkLong1;
    private final long unkLong2;

    public PapulatusLaserInfo(int idx, boolean enabled, long unkLong1, long unkLong2) {
        this.idx = idx;
        this.enabled = enabled;
        this.unkLong1 = unkLong1 << 48L;
        this.unkLong2 = unkLong2 << 48L;
    }

    @Override
    public void encode(OutPacket outPacket) {
        outPacket.encodeInt(idx);
        outPacket.encodeByte(enabled);
        outPacket.encodeLong(unkLong1);
        outPacket.encodeLong(unkLong2);
    }
}
