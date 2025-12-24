package net.swordie.orm.dao;

import java.sql.ResultSet;

public interface SworDao<T> {

    T fromResultSet(ResultSet resultSet, String alias);

    default String createValueStringFromArgCount(int args) {
        StringBuilder sb = new StringBuilder("VALUES (");
        for (int i = 0; i < args; i++) {
            if (i == args - 1) {
                sb.append("?)");
            } else {
                sb.append("?, ");
            }
        }
        return sb.toString();
    }

}
