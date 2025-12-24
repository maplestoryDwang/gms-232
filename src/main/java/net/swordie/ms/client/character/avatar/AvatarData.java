package net.swordie.ms.client.character.avatar;

import net.swordie.ms.client.character.CharacterStat;
import net.swordie.ms.client.character.info.ZeroInfo;
import net.swordie.ms.connection.OutPacket;
import net.swordie.ms.constants.JobConstants;

/**
 * Created on 2/18/2017.
 */
public class AvatarData {

    private int id;

    private CharacterStat characterStat;
    private AvatarLook avatarLook;
    private AvatarLook zeroAvatarLook;

    private ZeroInfo zeroInfo;

    public AvatarLook getAvatarLook() {
        return avatarLook;
    }

    public CharacterStat getCharacterStat() {
        return characterStat;
    }

    public ZeroInfo getZeroInfo() {
        return zeroInfo;
    }

    public void setZeroInfo(ZeroInfo zeroInfo) {
        this.zeroInfo = zeroInfo;
    }

    public AvatarLook getZeroAvatarLook() {
        return zeroAvatarLook;
    }

    public void setZeroAvatarLook(AvatarLook zeroAvatarLook) {
        this.zeroAvatarLook = zeroAvatarLook;
    }

    public void encode(OutPacket outPacket) {
        characterStat.encode(outPacket);
        // sub_92A050
        outPacket.encodeInt(0); // new 196
        outPacket.encodeInt(0); // new 218
        outPacket.encodeLong(0); // new 199
        outPacket.encodeInt(0); // new 227
        // ~sub_92A050
        avatarLook.encode(outPacket);
        if (JobConstants.isZero(getCharacterStat().getJob())) {
            zeroAvatarLook.encode(outPacket);
        }
    }

    public void setCharacterStat(CharacterStat characterStat) {
        this.characterStat = characterStat;
    }

    public void setAvatarLook(AvatarLook avatarLook) {
        this.avatarLook = avatarLook;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public AvatarLook getAvatarLook(boolean zeroBetaState) {
        return zeroBetaState ? getZeroAvatarLook() : getAvatarLook();
    }
}
