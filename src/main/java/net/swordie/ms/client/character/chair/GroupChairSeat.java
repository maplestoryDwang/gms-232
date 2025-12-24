package net.swordie.ms.client.character.chair;

import net.swordie.ms.client.character.Char;
import net.swordie.ms.connection.Encodable;
import net.swordie.ms.connection.OutPacket;

/**
 * Created on 3/2/2020.
 *
 * @author Asura
 */
public class GroupChairSeat implements Encodable {
    private Char chr;
    private boolean isOwner;
    private int emotion = -1; // -1 is default

    public Char getChr() {
        return chr;
    }

    public void setChr(Char chr) {
        this.chr = chr;
    }

    public boolean isOwner() {
        return isOwner;
    }

    public void setOwner(boolean owner) {
        isOwner = owner;
    }

    public int getEmotion() {
        return emotion;
    }

    public void setEmotion(int emotion) {
        this.emotion = emotion;
    }

    public boolean isTaken() {
        return getChr() != null;
    }

    public void place(Char chr, boolean isOwner, int emotion) {
        setChr(chr);
        setOwner(isOwner);
        setEmotion(emotion);
    }

    public void removeChr() {
        if (isTaken() && !isOwner()) {
            getChr().getUp();
        }
        clear();
    }

    public void clear() {
        setChr(null);
        setOwner(false);
        setEmotion(-1);
    }

    @Override
    public void encode(OutPacket outPacket) {
        outPacket.encodeInt(getChr() != null ? getChr().getId() : 0);
        outPacket.encodeByte(isOwner());
        outPacket.encodeInt(getEmotion());
    }
}
