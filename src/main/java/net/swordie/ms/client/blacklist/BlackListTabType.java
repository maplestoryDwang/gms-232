package net.swordie.ms.client.blacklist;

import java.util.Arrays;

/**
 * Created on 05/06/2021.
 *
 * @author Asura
 */
public enum BlackListTabType {
    Individual,
    Guild,
    ;

    public static BlackListTabType getByOrdinal(int ordinal) {
        return Arrays.stream(values()).filter(t -> t.ordinal() == ordinal).findFirst().orElse(null);
    }
}
