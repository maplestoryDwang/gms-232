package net.swordie.ms.client.character.skills;

import net.swordie.ms.client.character.skills.temp.CharacterTemporaryStat;
import net.swordie.ms.client.character.skills.temp.TemporaryStatBase;
import net.swordie.ms.connection.OutPacket;

/**
 * Created on 15/07/2021.
 *
 * @author Asura
 */
public class GraveProclomation extends TemporaryStatBase {

    private int targetObjId; // mob ID

    public GraveProclomation(boolean dynamicTermSet) {
        super(dynamicTermSet);
    }

    public int getTargetObjId() {
        return targetObjId;
    }

    public void setTargetObjId(int targetObjId) {
        this.targetObjId = targetObjId;
    }

    @Override
    public void encode(CharacterTemporaryStat cts, OutPacket outPacket) {
        super.encode(cts, outPacket);
        outPacket.encodeInt(getTargetObjId());
        outPacket.encodeInt(0);
    }
}
