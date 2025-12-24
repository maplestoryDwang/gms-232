package net.swordie.ms.client.character.skills.jupiterthunder;

import net.swordie.ms.connection.Encodable;
import net.swordie.ms.connection.OutPacket;

/**
 * Created on 25/01/2021.
 *
 * @author Asura
 */
public class JupiterThunderUpdateInfo implements Encodable {
    public int objectId;
    public int unk2;
    public int curTime;
    public int w, y, z;


    @Override
    public void encode(OutPacket outPacket) {
        outPacket.encodeInt(objectId);
        outPacket.encodeInt(unk2);
        outPacket.encodeInt(curTime);
        outPacket.encodeInt(w);
        outPacket.encodeInt(y);
        outPacket.encodeInt(z);
    }
}
