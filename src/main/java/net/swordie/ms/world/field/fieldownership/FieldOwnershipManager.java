package net.swordie.ms.world.field.fieldownership;

import net.swordie.ms.client.character.Char;
import net.swordie.ms.constants.GameConstants;
import net.swordie.ms.util.Util;
import net.swordie.ms.world.field.Field;

import java.util.ArrayList;
import java.util.List;

/**
 * Created on 15/02/2022.
 *
 * @author Asura
 */
public class FieldOwnershipManager {
    /**
     * Field Ownership
     *
     *
     * Attackers and their lastActionTime (Done by `activeChars` map)
     * All characters in the map (Grabbed from Field.java :: getChars();
     *
     * Owner is decided:
     * [X] If the activeChars is empty -> owner = first active person
     * [X] If the current owner has been inactive for 10 minutes -> owner = next active person
     * [X] If the current owner leaves -> owner = next active person or null if list empty
     *
     */
    private final Field field;
    private Char owner;
    private List<ActiveFieldChar> activeChars = new ArrayList<>();

    public FieldOwnershipManager(Field field) {
        this.field = field;
    }

    private Field getField() {
        return field;
    }

    public Char getOwner() {
        if (!getField().getChars().contains(owner)) {
            return null;
        }
        return owner;
    }

    private void setOwner(Char owner) {
        this.owner = owner;
    }

    private List<ActiveFieldChar> getActiveChars() {
        return activeChars;
    }

    private long getLastActionTime(Char chr) {
        return getActiveChars().stream().filter(ac -> ac.getChr() == chr).map(ActiveFieldChar::getLastActionTime).findFirst().orElse(Long.MIN_VALUE);
    }

    public void removeActiveChar(Char chr) {
        getActiveChars().removeIf(ac -> ac.getChr() == chr);
        if (getOwner() == chr) {
            setOwner(null);
        }
    }

    public void updateActiveChar(Char chr) {
        var activeFieldChar = new ActiveFieldChar(chr, Util.getCurrentTimeLong());

        var oldActiveFieldChar = getActiveChars().stream().filter(ac -> ac.equals(activeFieldChar)).findFirst().orElse(null);
        if (oldActiveFieldChar != null) {
            oldActiveFieldChar.updateLastActionTime();
        } else {
            getActiveChars().add(activeFieldChar);
        }

        if (!getField().getChars().contains(chr) || getOwner() == null || Util.getCurrentTimeLong() - getLastActionTime(getOwner()) > GameConstants.MAP_OWNERSHIP_LOSS_TIME) {
            setOwner(chr);
        }
    }

    @Override
    public String toString() {
        return "FieldOwnershipManager{" +
                "owner=" + owner +
                ", activeChars=" + activeChars +
                '}';
    }
}
