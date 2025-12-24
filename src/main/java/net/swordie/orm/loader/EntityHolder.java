package net.swordie.orm.loader;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import javax.persistence.Table;
import javax.persistence.Transient;
import java.lang.reflect.*;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class EntityHolder {
    private static final Logger log = LogManager.getLogger();

    private final Loader loader;
    private List<EntityField> primaryKey;
    private Class clazz;
    private String tableName;
    private List<EntityField> entityFields;

    private String preparedSelectStatement;
    private String preparedInsertStatement;
    private String preparedUpdateStatement;
    private String preparedDeleteStatement;
    private Constructor constructor;
    private Map<String, Method> getters;
    private Map<String, Method> setters;

    public EntityHolder(Class clazz, Loader loader) {
        this.clazz = clazz;
        this.loader = loader;
        entityFields = new ArrayList<>();
        primaryKey = new ArrayList<>();
    }

    public void init() {
        var table = clazz.getAnnotation(Table.class);
        if (table != null) {
            setTableName(((Table) table).name());
        } else {
            setTableName(clazz.getSimpleName() + "s");
        }
        initFields();
    }

    public void initFields() {
        for (var field : clazz.getDeclaredFields()) {
            initField(field);
        }
        if (getPrimaryKey().size() == 0) {
            log.warn("No primary key for " + clazz);
        }

        createConstructor();
        createSelectPreparedStatement();
        createInsertPreparedStatement();
        createUpdatePreparedStatement();
        createDeletePreparedStatement();
    }

    private void createConstructor() {
        try {
            constructor = clazz.getConstructor();
        } catch (NoSuchMethodException e) {
            e.printStackTrace();
        }
    }

    private void initField(Field field) {
        var isTransient = field.getAnnotation(Transient.class) != null;
        if (isTransient || Modifier.isStatic(field.getModifiers()) || Modifier.isFinal(field.getModifiers())) {
            return;
        }

        var entityField = new EntityField(this, field, loader);
        entityField.init();
        getEntityFields().add(entityField);
    }

    private void createSelectPreparedStatement() {
        var sb = new StringBuilder();

        sb.append("select ");

        int i = 0;
        for (var field : getEntityFields()) {
            if (!field.isForeign()) {
                sb.append(field.getColumnName());
                if (i != getEntityFields().size() - 1) {
                    sb.append(", ");
                }
            }
            i++;
        }

        sb.append(String.format(" from %s where ", getTableName()));
        var init = true;
        for (var field : getPrimaryKey()) {
            if (init) {
                init = false;
            } else {
                sb.append(" and ");
            }
            sb.append(String.format("%s = ?", field.getColumnName()));
        }

        System.out.println(sb.toString());

        setPreparedSelectStatement(sb.toString());
    }

    public String getTableName() {
        return tableName;
    }

    public void setTableName(String tableName) {
        this.tableName = tableName;
    }

    public List<EntityField> getEntityFields() {
        return entityFields;
    }

    public void addPrimaryKey(EntityField entityField) {
        getPrimaryKey().add(entityField);
    }

    public List<EntityField> getPrimaryKey() {
        return primaryKey;
    }

    public Constructor getConstructor() {
        return constructor;
    }

    @Override
    public String toString() {
        return "EntityHolder{" +
                "primaryKey=" + primaryKey +
                ", clazz=" + clazz +
                ", tableName='" + tableName + '\'' +
                '}';
    }

    public String getPreparedSelectStatement() {
        return preparedSelectStatement;
    }

    public String getPreparedInsertStatement() {
        return preparedInsertStatement;
    }

    public String getPreparedUpdateStatement() {
        return preparedUpdateStatement;
    }

    public String getPreparedDeleteStatement() {
        return preparedDeleteStatement;
    }

    public void setPreparedSelectStatement(String preparedSelectStatement) {
        this.preparedSelectStatement = preparedSelectStatement;
    }

    public List<Object> createEntitiesfromResultSet(ResultSet resultSet) throws SQLException, IllegalAccessException, InvocationTargetException, InstantiationException {
        var objs = new ArrayList<>();
        if (resultSet.next()) {
            Object obj = getConstructor().newInstance();

            int idx = 1;
            for (var entityField : getEntityFields()) {
                if (entityField.isForeign()) {
                    continue;
                }

                if (entityField.isPrimitive()) {
                    var value = resultSet.getObject(idx);
                    entityField.getSetter().invoke(obj, value);
                } else {
                    var value = entityField.load(this);
                }
                idx++;
            }

            objs.add(obj);
        }

        return objs;
    }

    private void initSettersGetters() {
        getters = new HashMap<>();
        setters = new HashMap<>();
        for (Method method : clazz.getMethods()) {
            var lowerName = method.getName().toLowerCase();
            if (lowerName.startsWith("get")) {
                getters.put(lowerName, method);
            } else if (lowerName.startsWith("set")) {
                setters.put(lowerName, method);
            }
        }
    }

    public Method getSetterByName(String methodName) {
        if (setters == null) {
            initSettersGetters();
        }
        return setters.get(methodName.toLowerCase());
    }

    public Method getGetterByName(String methodName) {
        if (getters == null) {
            initSettersGetters();
        }
        return getters.get(methodName.toLowerCase());
    }

    private void createDeletePreparedStatement() {
        preparedDeleteStatement = "DELETE FROM " +
                getTableName() + " WHERE ID = ?";
    }

    private void createUpdatePreparedStatement() {
        var sb = new StringBuilder("UPDATE ")
                .append(getTableName())
                .append(" SET \" + \r\n");

        for (var field : getEntityFields()) {
            if (!field.getColumnName().equalsIgnoreCase("id")) {
                sb.append("\"").append(field.getColumnName()).append(" = ?,").append("\" + \r\n");
            }
        }
        sb.append("\" WHERE ID = ?");
        preparedUpdateStatement = sb.toString();
    }

    private void createInsertPreparedStatement() {
        var sb = new StringBuilder("INSERT INTO ")
                .append(getTableName())
                .append("(\" + \r\n");

        for (var field : getEntityFields()) {
            if (!field.getColumnName().equalsIgnoreCase("id")) {
                sb.append("\"").append(field.getColumnName()).append(", ").append("\" + \r\n");
            }
        }

        sb.append("\" id, \" + \r\n");
        sb.append("\") VALUES (");

        sb.append("?, ".repeat(getEntityFields().size()));

        sb.deleteCharAt(sb.length() - 1);
        sb.deleteCharAt(sb.length() - 1);
        sb.append(");");
        preparedInsertStatement = sb.toString();
    }
}
