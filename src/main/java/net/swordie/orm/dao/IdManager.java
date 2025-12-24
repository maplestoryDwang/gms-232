package net.swordie.orm.dao;

public interface IdManager {

    void setNeedsInsert(boolean needsInsert);

    boolean needsInsert();

}
