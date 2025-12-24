package net.swordie.ms.connection.db.managers;

import net.swordie.ms.connection.db.BatchQueryHolder;
import net.swordie.ms.connection.db.QueryHolder;
import net.swordie.orm.connection.HikariCPDataSource;
import net.swordie.orm.dao.SworDao;
import net.swordie.orm.dao.SworDaoFactory;
import net.swordie.orm.util.ScriptRunner;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import java.io.File;
import java.io.FileReader;
import java.io.IOException;
import java.io.Reader;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

public class SwordieSqlDatabaseManager implements IDatabaseManager {

    private static final Logger log = LogManager.getLogger();

    @Override
    public void init(Class[] dbClasses) {
        HikariCPDataSource.init();
        SworDaoFactory.init();
    }

    @Override
    public void sendHeartBeat() {

    }

    @Override
    public void saveToDB(Object obj) {
        throw new UnsupportedOperationException("Use daos");
    }

    @Override
    public void deleteFromDB(Object obj) {
        throw new UnsupportedOperationException("Use daos");
    }

    @Override
    public Object getObjFromDB(Class clazz, int id) {
        throw new UnsupportedOperationException("Use daos");
    }

    @Override
    public Object getObjFromDB(Class clazz, String name) {
        throw new UnsupportedOperationException("Use daos");
    }

    @Override
    public Object getObjFromDB(Class clazz, String columnName, Object value) {
        throw new UnsupportedOperationException("Use daos");
    }

    @Override
    public Object getObjListFromDB(Class clazz) {
        throw new UnsupportedOperationException("Use daos");
    }

    @Override
    public Object getObjListFromDB(Class clazz, String columnName, Object value) {
        throw new UnsupportedOperationException("Use daos");
    }

    @Override
    public List<Object> executeSelect(SworDao dao, String query, String alias, Object... args) {
        List<Object> objs = new ArrayList<>();

        try (Connection con = HikariCPDataSource.getConnection()) {
            try (var stmt = con.prepareStatement(query)) {
                stmt.setQueryTimeout(QUERY_TIMEOUT_SECONDS);

                for (int i = 0; i < args.length; i++) {
                    stmt.setObject(i + 1, args[i]); // sql starts at 1
                }

                var resultSet = stmt.executeQuery();

                while (resultSet.next()) {
                    objs.add(dao.fromResultSet(resultSet, alias));
                }
                con.commit();
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
        long id = 0;
        try (Connection con = HikariCPDataSource.getConnection()) {
            try (var stmt = con.prepareStatement(query, Statement.RETURN_GENERATED_KEYS)) {
                stmt.setQueryTimeout(QUERY_TIMEOUT_SECONDS);

                for (int i = 0; i < args.length; i++) {
                    stmt.setObject(i + 1, args[i]); // sql starts at 1
                }
                stmt.executeUpdate();

                try (ResultSet generatedKeys = stmt.getGeneratedKeys()) {
                    if (generatedKeys.next()) {
                        id = generatedKeys.getLong(1);
                    }
                }
                con.commit();
            } catch (SQLException e) {
                e.printStackTrace();
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return id;
    }

    @Override
    public boolean executeFile(File file) {
        try (Connection con = HikariCPDataSource.getConnection()) {

            Reader reader = new FileReader(file.getPath());
            ScriptRunner scriptRunner = new ScriptRunner(con, false, true);
            scriptRunner.runScript(reader);
            con.commit();
            return true;

        } catch (SQLException | IOException e) {
            e.printStackTrace();
            return false;
        }
    }

    @Override
    public void executeBatchQuery(BatchQueryHolder batchQueryHolder) {
        if (batchQueryHolder.isEmpty()) {
            return;
        }

        try (Connection con = HikariCPDataSource.getConnection()) {
            // insert
            if (batchQueryHolder.hasInserts()) {
                try (var stmt = con.prepareStatement(batchQueryHolder.getInsertString(), Statement.RETURN_GENERATED_KEYS)) {
                    stmt.setQueryTimeout(QUERY_TIMEOUT_SECONDS);

                    List<QueryHolder> list = batchQueryHolder.getInsertQueryInfo();
                    for (var queryHolder : list) {
                        int i = 1; // sql starts at 1
                        for (var arg : queryHolder.getArgs()) {
                            stmt.setObject(i++, arg);
                        }
                        stmt.addBatch();
                    }
                    stmt.executeBatch();

                    var keys = stmt.getGeneratedKeys();
                    for (var queryHolder : list) {
                        if (keys.next()) {
                            queryHolder.assignId(keys.getLong(1));
                        } else {
                            log.error(String.format("No more keys for %s!", batchQueryHolder));
                        }
                    }
                } catch (SQLException e) {
                    log.error("[INSERT] SQLException: " + batchQueryHolder.getInsertQueryInfo());
                    e.printStackTrace();
                }
            }

            // update
            if (batchQueryHolder.hasUpdates()) {
                try (var stmt = con.prepareStatement(batchQueryHolder.getUpdateString())) {
                    stmt.setQueryTimeout(QUERY_TIMEOUT_SECONDS);

                    List<QueryHolder> list = batchQueryHolder.getUpdateQueryInfo();
                    for (var queryHolder : list) {
                        int i = 1; // sql starts at 1
                        for (var arg : queryHolder.getArgs()) {
                            stmt.setObject(i++, arg);
                        }
                        stmt.addBatch();
                    }
                    stmt.executeBatch();
                } catch (SQLException e) {
                    log.error("[UPDATE] SQLException: " + batchQueryHolder.getUpdateQueryInfo());
                    e.printStackTrace();
                }
            }

            con.commit();
        } catch (SQLException e) {
            log.error("SQLException: " + batchQueryHolder);
            e.printStackTrace();
        }
    }

    @Override
    public long executeInsert(String query, Object... args) {
        long res = 0;
        try (Connection con = HikariCPDataSource.getConnection()) {
            try (var stmt = con.prepareStatement(query, Statement.RETURN_GENERATED_KEYS)) {
                stmt.setQueryTimeout(QUERY_TIMEOUT_SECONDS);

                for (int i = 0; i < args.length; i++) {
                    stmt.setObject(i + 1, args[i]); // sql starts at 1
                }
                stmt.executeUpdate();

                var resultSet = stmt.getGeneratedKeys();
                if (resultSet.next()) {
                    res = resultSet.getLong(1);
                }
                con.commit();
            } catch (SQLException e) {
                e.printStackTrace();
            }
        } catch (SQLException e) {
            log.error("SQL: " + query);
            e.printStackTrace();
        }
        return res;
    }
}
