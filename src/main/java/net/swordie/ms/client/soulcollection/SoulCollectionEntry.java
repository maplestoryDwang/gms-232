package net.swordie.ms.client.soulcollection;

import net.swordie.ms.connection.Encodable;
import net.swordie.ms.connection.OutPacket;

/**
 * Created on 02/07/2021.
 *
 * @author Asura
 */
public class SoulCollectionEntry implements Encodable {
    private int id;
    private BossSoulType bossSoul;
    private int flag;

    public SoulCollectionEntry() {
    }

    public SoulCollectionEntry(BossSoulType bossSoul, int flag) {
        this.bossSoul = bossSoul;
        this.flag = flag;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public BossSoulType getBossSoul() {
        return bossSoul;
    }

    public void setBossSoul(BossSoulType bossSoul) {
        this.bossSoul = bossSoul;
    }

    public void setBossSoul(int bossSoulVal) {
        this.bossSoul = BossSoulType.getByVal(bossSoulVal);
    }

    public int getFlag() {
        return flag;
    }

    public void setFlag(int flag) {
        this.flag = flag;
    }

    public boolean isComplete() {
        var maxFlag = BossSoulCollectionFlag.getMaxFlag(getBossSoul().hasMagnificent());
        return getFlag() >= maxFlag;
    }

    @Override
    public boolean equals(Object obj) {
        if (!(obj instanceof SoulCollectionEntry)) {
            return false;
        }

        var otherEntry = (SoulCollectionEntry) obj;

        if (otherEntry.getBossSoul() == getBossSoul()) {
            return true;
        }

        return false;
    }

    @Override
    public void encode(OutPacket outPacket) {
        outPacket.encodeInt(getBossSoul().getVal());
        outPacket.encodeInt(getFlag());
    }
}
