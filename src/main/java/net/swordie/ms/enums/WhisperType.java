package net.swordie.ms.enums;

import java.util.Arrays;

/**
 * Created on 27/06/2020.
 *
 * @author Asura
 */
public enum WhisperType {
    Find(9), // /find command
    SaveName(10), // Save name in the Whisper Window
    In(18), // Chr receives message from another
    Unk19(19),
    Unk34(34),

    Find_2(72),
    SaveName_2(138),
    Unk146(146),
    ;

    int val;

    WhisperType(int val) {
        this.val = val;
    }

    public int getVal() {
        return val;
    }

    public static WhisperType getByVal(int val) {
        return Arrays.stream(values()).filter(wt -> wt.getVal() == val).findFirst().orElse(null);
    }
}
