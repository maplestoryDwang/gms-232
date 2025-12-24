package net.swordie.ms.client.soulcollection;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

/**
 * Created on 02/07/2021.
 *
 * @author Asura
 */
public enum BossSoulCollectionFlag {
    // Magnificent Collection Set
    Magnificent_Beefy(0x01),
    Magnificent_Swift(0x02),
    Magnificent_Clever(0x04),
    Magnificent_Fortuitous(0x08),
    Magnificent_Flashy(0x10),
    Magnificent_Potent(0x20),
    Magnificent_Radiant(0x40),
    Magnificent_Hearty(0x80),
    Magnificent_Magnificent(0x100),

    // Normal Collection Set
    Beefy(0x01),
    Swift(0x02),
    Clever(0x04),
    Fortuitous(0x08),
    Hearty(0x10),
    Ample(0x20),
    Flashy(0x40),
    ;

    private int flag;

    BossSoulCollectionFlag(int flag) {
        this.flag = flag;
    }

    public int getFlag() {
        return flag;
    }

    public static int getFlagByCollection(List<BossSoulCollectionFlag> flags) {
        return flags.stream().mapToInt(BossSoulCollectionFlag::getFlag).sum();
    }

    public static List<BossSoulCollectionFlag> getCollectionByFlag(int flag, boolean isMagnificent) {
        List<BossSoulCollectionFlag> retFlags = new ArrayList<>();
        List<BossSoulCollectionFlag> bossSouls = getFlags(isMagnificent);
        Collections.sort(bossSouls);

        for (var bossSoul : bossSouls) {
            if ((bossSoul.getFlag() & flag) != 0) {
                retFlags.add(bossSoul);
            }
        }

        return retFlags;
    }

    public static List<BossSoulCollectionFlag> getFlags(boolean isMagnificent) {
        return Arrays.stream(values()).filter(flag -> isMagnificent == flag.toString().startsWith("Magnificent_")).collect(Collectors.toList());
    }

    public static int getMaxFlag(boolean isMagnificent) {
        return getFlags(isMagnificent).stream().mapToInt(BossSoulCollectionFlag::getFlag).sum();
    }
}
