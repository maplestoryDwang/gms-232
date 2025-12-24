package net.swordie.ms.client.character.familiar;

import java.util.HashSet;
import java.util.Set;

public class FamiliarBadgeInfo {

    private int[] collectedMask;

    private Set<Integer> familiars;

    public FamiliarBadgeInfo() {
        familiars = new HashSet<>();
        collectedMask = new int[4];
    }

    public int[] getCollectedMask() {
        return collectedMask;
    }

    public void addFamiliar(int familiarId, int badgeId, int positionOfFamiliarId) {
        getFamiliars().add(familiarId);

        collectedMask[badgeId % 4] |= 1 << positionOfFamiliarId;
    }

    private Set<Integer> getFamiliars() {
        return familiars;
    }

    public void setCollectedMask(int[] collectedMask) {
        this.collectedMask = collectedMask;
    }
}
