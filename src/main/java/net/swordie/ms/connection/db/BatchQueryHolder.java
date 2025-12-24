package net.swordie.ms.connection.db;

import java.util.ArrayList;
import java.util.List;

public class BatchQueryHolder<T extends TrackedObject> {

    List<QueryHolder> insertQueryInfo = new ArrayList<>();
    List<QueryHolder> updateQueryInfo = new ArrayList<>();

    public void addQueryInfo(QueryHolder<T> queryHolder) {
        if (!queryHolder.isClean()) {
            if (queryHolder.isInsert()) {
                insertQueryInfo.add(queryHolder);
            } else {
                updateQueryInfo.add(queryHolder);
            }
            queryHolder.setLastSavedHash();
        }
    }

    public List<QueryHolder> getInsertQueryInfo() {
        return insertQueryInfo;
    }

    public List<QueryHolder> getUpdateQueryInfo() {
        return updateQueryInfo;
    }

    public String getInsertString() {
        return getInsertQueryInfo().get(0).getQuery();
    }

    public String getUpdateString() {
        return getUpdateQueryInfo().get(0).getQuery();
    }

    public boolean isEmpty() {
        return insertQueryInfo.size() == 0 && updateQueryInfo.size() == 0;
    }

    @Override
    public String toString() {
        return "BatchQueryHolder{" +
                "insertQueryInfo=" + insertQueryInfo +
                ", updateQueryInfo=" + updateQueryInfo +
                '}';
    }

    public boolean hasInserts() {
        return getInsertQueryInfo().size() > 0;
    }

    public boolean hasUpdates() {
        return getUpdateQueryInfo().size() > 0;
    }
}
