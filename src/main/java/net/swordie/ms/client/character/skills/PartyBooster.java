package net.swordie.ms.client.character.skills;

import net.swordie.ms.client.character.skills.temp.CharacterTemporaryStat;
import net.swordie.ms.client.character.skills.temp.TwoStateTemporaryStat;
import net.swordie.ms.connection.OutPacket;

/**
 * Created on 2/3/2018.
 */
public class PartyBooster extends TwoStateTemporaryStat {

    private int currentTime;
    private boolean hasPartyBooster;

    public PartyBooster() {
        super(false);
        currentTime = 0;
        expireTerm = 0;
    }

    @Override
    public int getExpireTerm() {
        return 1000 * expireTerm;
    }

    public int getCurrentTime() {
        return currentTime;
    }

    public void setCurrentTime(int currentTime) {
        this.currentTime = currentTime;
    }

    public boolean isHasPartyBooster() {
        return hasPartyBooster;
    }

    public void setHasPartyBooster(boolean hasPartyBooster) {
        this.hasPartyBooster = hasPartyBooster;
    }

    @Override
    public void reset() {
        super.reset();
        setCurrentTime(0);
    }

    @Override
    public void encode(CharacterTemporaryStat cts, OutPacket outPacket) {
        outPacket.encodeInt(getOption().nOption);
        outPacket.encodeInt(getOption().rOption);
        outPacket.encodeByte(isDynamicTermSet());
        outPacket.encodeInt(getCurrentTime());

        outPacket.encodeByte(!isHasPartyBooster());
        outPacket.encodeInt(!isHasPartyBooster() ? 1 : 0);
        outPacket.encodeShort(getExpireTerm() / 1000);
    }
}
