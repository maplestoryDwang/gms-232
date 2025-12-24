package net.swordie.ms.client.character.quest.progress;

import net.swordie.ms.client.character.Char;
import net.swordie.ms.connection.db.TrackedObject;
import net.swordie.ms.loaders.DatSerializable;

/**
 * Created on 3/2/2018.
 */
public abstract class QuestProgressRequirement extends TrackedObject implements DatSerializable {

    private long id;

    // order of encoding for quest record messages
    private int order = 999;

    /**
     * Returns whether this progress requirement has been completed by the player.
     * @return Completeness.
     */
    public abstract boolean isComplete(Char chr);

    public long getId() {
        return id;
    }

    public abstract String getProgressType();

    public abstract Integer getUnitId();

    public abstract Integer getCurrentCount();

    public abstract Integer getRequiredCount();

    public void setId(long id) {
        this.id = id;
    }

    public abstract QuestProgressRequirement deepCopy();

    public int getOrder() {
        return order;
    }

    public void setOrder(int order) {
        this.order = order;
    }

}
