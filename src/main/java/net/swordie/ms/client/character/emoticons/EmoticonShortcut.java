package net.swordie.ms.client.character.emoticons;

import net.swordie.ms.client.character.Char;

/**
 * Created on 20/06/2020.
 *
 * @author Asura
 */
public class EmoticonShortcut {
    private int id;
    private int emoticonId;
    private String shortcut;
    private int position;

    public EmoticonShortcut() {
    }

    public EmoticonShortcut(int emoticonId, String shortcut, int position) {
        this.emoticonId = emoticonId;
        this.shortcut = shortcut;
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

    public String getShortcut() {
        return shortcut;
    }

    public void setShortcut(String shortcut) {
        this.shortcut = shortcut;
    }

    public int getPosition() {
        return position;
    }

    public void setPosition(int position) {
        this.position = position;
    }

    public void placeToFirstFreePosition(Char chr) {
        EmoticonModule.getFirstFreePositionEmoticonShortcut(chr);
    }
}
