package net.swordie.orm.util;

import java.util.List;

public class ORMUtil {

    public static String getQueryHeader(String tableName, List<String> columns) {
        return String.format("INSERT INTO %s (%s) VALUES ", tableName, String.join(", ", columns));
    }

    public static String getFillInArgs(int size, int collectionSize) {
        var columnStr = "?,".repeat(size);
        var valueStr = String.format("(%s),", columnStr.substring(0, columnStr.length() - 1));
        var valuesStr = valueStr.repeat(collectionSize);
        return valuesStr.substring(0, valuesStr.length() - 1);
    }

    public static String getOnDuplicateKeyUpdate() {
        return " ON DUPLICATE KEY UPDATE ";
    }

    public static String getUpdateValues(List<String> columns, String keyColumn) {
        var queryBuilder = new StringBuilder();
        for (var column : columns) {
            if (column.equalsIgnoreCase(keyColumn)) {
                continue;
            }
            queryBuilder.append(String.format("%s = VALUES(%s),", column, column));
        }

        queryBuilder.deleteCharAt(queryBuilder.length() - 1); // remove last comma
        return queryBuilder.toString();
    }

    public static String getBatchQuery(String tableName, List<String> columns, String keyColumn, int collectionSize) {
        return String.format("%s%s%s%s",
                getQueryHeader(tableName, columns),
                getFillInArgs(columns.size(), collectionSize),
                getOnDuplicateKeyUpdate(),
                getUpdateValues(columns, keyColumn)
                );
    }
}
