package net.swordie.ms.connection.db.managers;

import net.swordie.ms.connection.db.BatchQueryHolder;
import net.swordie.orm.connection.HikariCPDataSource;
import net.swordie.orm.dao.SworDao;
import net.swordie.orm.loader.Loader;

import java.io.File;
import java.lang.reflect.InvocationTargetException;
import java.sql.Connection;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class SwordieOrmDatabaseManager implements IDatabaseManager {

    private final Loader loader;

    public SwordieOrmDatabaseManager() {
        loader = new Loader();
    }

    @Override
    public void init(Class[] dbClasses) {
        HikariCPDataSource.init();
        loader.load(dbClasses);
    }

    @Override
    public void sendHeartBeat() {

    }

    @Override
    public void saveToDB(Object obj) {

    }

    @Override
    public void deleteFromDB(Object obj) {

    }

    @Override
    public Object getObjFromDB(Class clazz, int id) {
        Object obj = null;

        var entityHolder = loader.getEntityHolder(clazz);
        try (Connection con = HikariCPDataSource.getConnection()) {
            var query = entityHolder.getPreparedSelectStatement();

            try (var stmt = con.prepareStatement(query)) {
                stmt.setInt(1, id);

                var resultSet = stmt.executeQuery();

                List<Object> objs = entityHolder.createEntitiesfromResultSet(resultSet);
                if (objs.size() > 0) {
                    obj = objs.get(0);
                }

            } catch (SQLException | IllegalAccessException | InstantiationException | InvocationTargetException e) {
                e.printStackTrace();
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return obj;
    }

    @Override
    public Object getObjFromDB(Class clazz, String name) {
        return null;
    }

    @Override
    public Object getObjFromDB(Class clazz, String columnName, Object value) {
        return null;
    }

    @Override
    public Object getObjListFromDB(Class clazz) {
        return null;
    }

    @Override
    public Object getObjListFromDB(Class clazz, String columnName, Object value) {
        return null;
    }

    @Override
    public List<Object> executeSelect(SworDao dao, String query, String alias, Object... args) {
        List<Object> objs = new ArrayList<>();

        try (Connection con = HikariCPDataSource.getConnection()) {
            try (var stmt = con.prepareStatement(query)) {
                for (int i = 0; i < args.length; i++) {
                    stmt.setObject(i + 1, args[i]); // sql starts at 1
                }

                var resultSet = stmt.executeQuery();

                while (resultSet.next()) {
                    objs.add(dao.fromResultSet(resultSet, alias));
                }
            } catch (SQLException e) {
                e.printStackTrace();
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }

        return objs;
    }

    @Override
    public long executeQuery(String query, Object... args) {
        try (Connection con = HikariCPDataSource.getConnection()) {
            try (var stmt = con.prepareStatement(query)) {
                for (int i = 0; i < args.length; i++) {
                    stmt.setObject(i + 1, args[i]); // sql starts at 1
                }
                stmt.executeUpdate();
                con.commit();
            } catch (SQLException e) {
                e.printStackTrace();
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return 0;
    }

    @Override
    public boolean executeFile(File file) {
        throw new UnsupportedOperationException("Not Implemented");
    }

    @Override
    public void executeBatchQuery(BatchQueryHolder queryHolders) {

    }

    @Override
    public long executeInsert(String query, Object... args) {
        return 0;
    }
}
