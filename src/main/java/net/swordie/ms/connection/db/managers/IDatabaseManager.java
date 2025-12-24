package net.swordie.ms.connection.db.managers;

import net.swordie.ms.connection.db.BatchQueryHolder;
import net.swordie.orm.dao.SworDao;

import java.io.File;
import java.util.List;

public interface IDatabaseManager {

    int QUERY_TIMEOUT_SECONDS = 30;

    void init(Class[] dbClasses);

    void sendHeartBeat();

    void saveToDB(Object obj);

    void deleteFromDB(Object obj);

    Object getObjFromDB(Class clazz, int id);

    Object getObjFromDB(Class clazz, String name);

    Object getObjFromDB(Class clazz, String columnName, Object value);

    Object getObjListFromDB(Class clazz);

    Object getObjListFromDB(Class clazz, String columnName, Object value);

    List<Object> executeSelect(SworDao dao, String query, String alias, Object... args);

    long executeQuery(String query, Object... args);

    boolean executeFile(File file);

    void executeBatchQuery(BatchQueryHolder queryHolders);

    long executeInsert(String query, Object... args);
}
