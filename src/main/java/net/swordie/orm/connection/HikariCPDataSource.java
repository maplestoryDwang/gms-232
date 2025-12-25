package net.swordie.orm.connection;

import com.zaxxer.hikari.HikariConfig;
import com.zaxxer.hikari.HikariDataSource;

import java.sql.Connection;
import java.sql.SQLException;

public class HikariCPDataSource {

    private static final String URL = "jdbc:mysql://127.0.0.1:3306/swordie232";
    private static final String USERNAME = "root";
    private static final String PASSWORD = "root";

    private static HikariConfig config = new HikariConfig();
    private static HikariDataSource ds;

    public static void init() {
        config.setJdbcUrl(URL);
        config.setUsername(USERNAME);
        config.setPassword(PASSWORD);
        config.setLeakDetectionThreshold(1000 * 15);
        config.setMaximumPoolSize(50);
        config.addDataSourceProperty("cachePrepStmts", "true");
        config.addDataSourceProperty("prepStmtCacheSize", "250");
        config.addDataSourceProperty("prepStmtCacheSqlLimit", "2048");
        config.addDataSourceProperty("useSSL", "false");
        config.addDataSourceProperty("rewriteBatchedStatements", "true");
        config.addDataSourceProperty("autoReconnect", "false");
        config.addDataSourceProperty("allowPublicKeyRetrieval", "true");
        config.setAutoCommit(false);
        ds = new HikariDataSource(config);
    }

    public static Connection getConnection() throws SQLException {
        return ds.getConnection();
    }

    private HikariCPDataSource(){}
}
