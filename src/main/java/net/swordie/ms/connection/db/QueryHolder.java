package net.swordie.ms.connection.db;

import java.util.Arrays;

public class QueryHolder<T extends Saveable> {

    private T element;
    private String query;
    private Object[] args;
    private boolean insert;
    private boolean needsId = true; // default to true
    private int id;
    private boolean clean;

    public static QueryHolder clean(){
        var qh = new QueryHolder(null, false);
        qh.setClean(true);
        return qh;
    }

    public QueryHolder(T element, boolean insert) {
        this.element = element;
        this.insert = insert;
    }

    public QueryHolder(T element, boolean insert, boolean needsId) {
        this.element = element;
        this.insert = insert;
        this.needsId = needsId;
    }

    public String getQuery() {
        return query;
    }

    public void setQuery(String query) {
        this.query = query;
    }

    public Object[] getArgs() {
        return args;
    }

    public void setArgs(Object... args) {
        this.args = args;
    }

    public boolean isInsert() {
        return insert;
    }

    public void setInsert(boolean insert) {
        this.insert = insert;
    }

    public boolean needsId() {
        return needsId;
    }

    public void setNeedsId(boolean needsId) {
        this.needsId = needsId;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public T getElement() {
        return element;
    }

    public void setClean(boolean clean) {
        this.clean = clean;
    }

    public boolean isClean() {
        return clean;
    }

    @Override
    public String toString() {
        return "QueryHolder{" +
                "isInsert=" + insert +
                ", query='" + query + '\'' +
                ", args=" + Arrays.toString(args) +
                '}';
    }

    public void assignId(long id) {
        if (needsId()) {
            getElement().setId(id);
        }
    }

    public void setLastSavedHash() {
        var element = getElement();
        if (element instanceof TrackedObject) {
            ((TrackedObject) element).setLastSavedHash();
        }
    }
}
