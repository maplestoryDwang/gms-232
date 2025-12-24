package net.swordie.ms.client.character.skills.vmatrix;

import net.swordie.ms.client.character.Char;
import net.swordie.ms.connection.db.TrackedObject;

import java.util.Objects;

/**
 * Created on 28-9-2019.
 *
 * @author Asura
 */
public class MatrixSlot extends TrackedObject {
    private long id;

    private int position;
    private int enhancementLv;
    private boolean unlockedByPurchase;

    public MatrixSlot() {
    }

    public MatrixSlot(Char chr, int position) {
        this.position = position;
        this.enhancementLv = 0;
        this.unlockedByPurchase = false;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    @Override
    public int getTransactionalHash() {
        return Objects.hash(position, enhancementLv, unlockedByPurchase);
    }

    public int getPosition() {
        return position;
    }

    public void setPosition(int position) {
        this.position = position;
    }

    public int getEnhancementLv() {
        return enhancementLv;
    }

    public void setEnhancementLv(int enhancementLv) {
        this.enhancementLv = enhancementLv;
    }

    public boolean isUnlockedByPurchase() {
        return unlockedByPurchase;
    }

    public void setUnlockedByPurchase(boolean unlockedByPurchase) {
        this.unlockedByPurchase = unlockedByPurchase;
    }

}
