package net.swordie.ms.client.character.skills;

import net.swordie.ms.client.character.skills.temp.CharacterTemporaryStat;
import net.swordie.ms.client.character.skills.temp.TemporaryStatBase;
import net.swordie.ms.connection.OutPacket;

/**
 * Created on 2/3/2018.
 */
public class GuidedBullet extends TemporaryStatBase {

    private int mobID;
    private int userID;

    public GuidedBullet() {
        super(false);
        mobID = 0;
        userID = 0;
    }

    public int getMobID() {
        return mobID;
    }

    public void setMobID(int mobID) {
        this.mobID = mobID;
    }

    public int getUserID() {
        return userID;
    }

    public void setUserID(int userID) {
        this.userID = userID;
    }

    @Override
    public void encode(CharacterTemporaryStat cts, OutPacket outPacket) {
        outPacket.encodeInt(getNOption());
        outPacket.encodeInt(getROption());
        outPacket.encodeByte(isDynamicTermSet());
        outPacket.encodeInt(1);
        outPacket.encodeInt(getMobID());
        outPacket.encodeInt(0);
    }

    @Override
    public boolean hasExpired() {
        return false;
    }

    @Override
    public void reset() {
        super.reset();
        setMobID(0);
        setUserID(0);
    }
}
