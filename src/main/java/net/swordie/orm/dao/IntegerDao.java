package net.swordie.orm.dao;

import java.sql.ResultSet;
import java.sql.SQLException;

public class IntegerDao implements SworDao<Integer> {

    private String columnName;

    public IntegerDao(String columnName) {
        this.columnName = columnName;
    }

    @Override
    public Integer fromResultSet(ResultSet resultSet, String alias) {
        Integer i = null;

        try {
            i = resultSet.getInt(alias + "." + columnName);
        } catch (SQLException e) {
            e.printStackTrace();
        }

        return i;
    }
}
