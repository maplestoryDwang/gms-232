package net.swordie.ms.client.character.keys;

import net.swordie.ms.connection.db.TrackedObject;

import javax.persistence.Entity;
import javax.persistence.Table;
import java.util.Objects;

/**
 * Created on 1/4/2018.
 */
@Entity
@Table(name = "keymaps")
public class Keymapping extends TrackedObject {
    private int id;

    private int index;
    private byte type;
    private int val;

    public Keymapping(){}

    public Keymapping(byte type, int val) {
        this.type = type;
        this.val = val;
    }

    public byte getType() {
        return type;
    }

    public void setType(byte type) {
        this.type = type;
    }

    public int getVal() {
        return val;
    }

    public void setVal(int val) {
        this.val = val;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = (int) id;
    }

    @Override
    public int getTransactionalHash() {
        return Objects.hash(index, type, val);
    }

    public int getIndex() {
        return index;
    }

    public void setIndex(int index) {
        this.index = index;
    }

}
