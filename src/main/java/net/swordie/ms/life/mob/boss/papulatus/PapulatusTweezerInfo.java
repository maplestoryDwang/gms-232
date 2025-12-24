package net.swordie.ms.life.mob.boss.papulatus;

import net.swordie.ms.connection.Encodable;
import net.swordie.ms.connection.OutPacket;

public class PapulatusTweezerInfo implements Encodable {

    private final int idx;
    private final int state;
    private final int x;
    private final int charId;

    public PapulatusTweezerInfo(int idx, int state, int x, int charId) {
        this.idx = idx;
        this.state = state;
        this.x = x;
        this.charId = charId;
    }

    @Override
    public void encode(OutPacket outPacket) {
        outPacket.encodeInt(idx);
        outPacket.encodeInt(state);
        outPacket.encodeInt(x);
        outPacket.encodeInt(charId);
    }
}
