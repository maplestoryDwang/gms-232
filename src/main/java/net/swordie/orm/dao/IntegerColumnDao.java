package net.swordie.orm.dao;

import java.sql.ResultSet;
import java.sql.SQLException;

public class IntegerColumnDao implements SworDao<Integer> {

    private String columnName;

    public IntegerColumnDao(String columnName) {
        this.columnName = columnName;
    }

    @Override
    public Integer fromResultSet(ResultSet resultSet, String alias) {
        Integer integer = null;

        try {
            integer = resultSet.getInt(alias + "." + columnName);
        } catch (SQLException e) {
            e.printStackTrace();
        }

        return integer;
    }
}
