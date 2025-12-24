package net.swordie.orm.util;

import net.swordie.ms.connection.db.DatabaseManager;
import net.swordie.ms.util.FileTime;
import net.swordie.ms.util.Util;
import net.swordie.orm.loader.EntityHolder;
import net.swordie.orm.loader.Loader;

import java.io.File;
import java.io.FileWriter;
import java.io.IOException;

public class SqlGenerator {

    private static void generateSql() throws IOException {
        var classes = DatabaseManager.dbClasses;
        var loader = new Loader();
        loader.load(classes);

        for (var entry : loader.getEntityHolders().entrySet()) {
            var clazz = entry.getKey();
            var eh = entry.getValue();

            var file = new File("D:\\Swordie\\Swordie\\resources\\" + clazz.getSimpleName() + ".txt");
            writeSql(clazz, eh, file);
        }

    }

    private static void writeSql(Class clazz, EntityHolder eh, File file) throws IOException {
        var className = clazz.getSimpleName();
        var classVarName = className.replace(className.charAt(0), Character.toLowerCase(className.charAt(0)));

        // saveOrUpdate
        var sb = new StringBuilder("public void saveOrUpdate(")
                .append(className)
                .append(" ")
                .append(classVarName)
                .append(" ) {\r\n");

        sb.append("boolean needsId = ").append(classVarName).append(".getId() == 0;\r\n\r\n");

        sb.append("String query;\r\n");
        sb.append("if (needsId) {\r\n");
        sb.append("query = \"").append(eh.getPreparedInsertStatement()).append("\";\r\n");

        sb.append("}\r\n else {\r\n");
        sb.append("query = \"").append(eh.getPreparedUpdateStatement()).append("\";\r\n}\r\n");

        sb.append("long id = DatabaseManager.executeQuery(query, \r\n");
        for (var field : eh.getEntityFields()) {
            var getter = field.getGetter() == null ? field.getColumnName() + "GETTER" : field.getGetter().getName();
            var isPrim = Util.isPrimitiveTypeForDB(field.getClazz());
            var getterStr = new StringBuilder(classVarName + ".");
            if (field.getClazz() == FileTime.class) {
                getterStr = new StringBuilder("FileTimeConverter.toDbColumn(" + getterStr.append(getter) + ");\r\n");
            } else if (isPrim) {
                getterStr.append(getter).append("(), \r\n");
            } else {
                getterStr.append(getter).append("() == null ? \"NULL\" : ").append(classVarName).append(".").append(getter).append("().getId(), \r\n");
            }

            sb.append(getterStr);
        }
        sb.append(classVarName).append(".getId()\r\n");
        sb.append(");\r\n");

        sb.append("if (needsId) {\r\n");
        sb.append(classVarName).append(".setId(id);\r\n");
        sb.append("}\r\n}\r\n\r\n");


        // delete
        sb.append("public void delete(").append(className).append(" ").append(classVarName).append(") {\r\n");
        sb.append("if (").append(classVarName).append(" == null || ").append(classVarName).append(".getId() == 0) {\r\n");
        sb.append("log.warn(\"Trying to delete object \" + ").append(classVarName).append(" + \" that is null or has id 0\");\r\n");
        sb.append("return;\r\n}\r\n");
        sb.append("DatabaseManager.executeQuery(\"").append(eh.getPreparedDeleteStatement()).append("\", ")
                .append(classVarName).append(".getId());\r\n}\r\n\r\n");

        var fw = new FileWriter(file);
        fw.write(sb.toString());
        fw.flush();
    }

    public static void main(String[] args) throws IOException {
        generateSql();
    }

}
