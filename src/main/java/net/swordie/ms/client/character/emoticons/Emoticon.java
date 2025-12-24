package net.swordie.ms.client.character.emoticons;

import java.util.Objects;

/**
 * Created on 20/06/2020.
 *
 * @author Asura
 */
public class Emoticon {
    private int id;
    private int emoticonId;
    private int position; // in fav tab

    public Emoticon() {
    }

    public Emoticon(int emoticonId, int position) {
        this.emoticonId = emoticonId;
        this.position = position;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getEmoticonId() {
        return emoticonId;
    }

    public void setEmoticonId(int emoticonId) {
        this.emoticonId = emoticonId;
    }

    public int getPosition() {
        return position;
    }

    public void setPosition(int position) {
        this.position = position;
    }

    @Override
    public boolean equals(Object obj) {
        if (!(obj instanceof Emoticon)) {
            return false;
        }
        return ((Emoticon) obj).getEmoticonId() == getEmoticonId();
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(emoticonId);
    }
}
