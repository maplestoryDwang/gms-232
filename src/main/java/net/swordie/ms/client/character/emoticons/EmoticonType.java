package net.swordie.ms.client.character.emoticons;

import java.util.Arrays;

/**
 * Created on 20/06/2020.
 *
 * @author Asura
 */
public enum EmoticonType { // Acts as both Request & Result
    UnlockGroupChatSlot(0),
    MoveEmoticonGroup(1),
    Unk2(2),
    Unk3(3),
    Unk4(4),
    AddEmoticon(5), // Add to favourites tab
    RemoveEmoticon(6), // Remove from favourites tab
    MoveEmoticon(7), // Move Emoticon around in favourites tab
    AddEmoticonShortcut(8),
    MoveEmoticonShortcut(9),
    RemoveEmoticonShortcut(10),
    ;

    private byte val;

    EmoticonType(int val) {
        this.val = (byte) val;
    }

    public byte getVal() {
        return val;
    }

    public static EmoticonType getByVal(int val) {
        return Arrays.stream(values()).filter(ert -> ert.getVal() == val).findFirst().orElse(null);
    }
}
