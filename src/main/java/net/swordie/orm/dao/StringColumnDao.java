package net.swordie.orm.dao;

import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * Created on 02/06/2021.
 *
 * @author Asura
 */
public class StringColumnDao implements SworDao<String> {

    private String columnName;

    public StringColumnDao(String columnName) {
        this.columnName = columnName;
    }

    @Override
    public String fromResultSet(ResultSet resultSet, String alias) {
        String string = null;

        try {
            string = resultSet.getString(alias + "." + columnName);

        } catch (SQLException e) {
            e.printStackTrace();
        }

        return string;
    }
}
