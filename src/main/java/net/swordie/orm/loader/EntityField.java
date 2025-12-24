package net.swordie.orm.loader;

import net.swordie.ms.util.Util;

import javax.persistence.*;
import java.lang.reflect.Field;
import java.lang.reflect.Method;
import java.util.HashSet;
import java.util.Set;

public class EntityField {

    private Loader loader;
    private EntityHolder entity;
    private Field field;
    private Class clazz;
    private String name;
    private Set<CascadeType> cascadeTypes;
    private boolean orphanRemoval;
    private FetchType fetchType;
    private String columnName;
    private boolean selfHandled = true; // self-managed ID
    private boolean primitive = true;

    private String fkToOtherTableName; // onetoone mapping (we have the id)
    private String otherTableFk; // onetomany (other table has id)
    private boolean foreign;
    private String keyColumnName;
    private String otherTable;
    private Method setter;
    private Method getter;
    private EnumType enumType;

    public EntityField(EntityHolder entity, Field field, Loader loader) {
        this.entity = entity;
        this.field = field;
        clazz = field.getType();
        name = field.getName();
        setColumnName(name);
        cascadeTypes = new HashSet<>();
    }

    public Field getField() {
        return field;
    }

    public String getColumnName() {
        return columnName;
    }

    public void init() {
        var field = getField();

        var fieldName = field.getName();
        fieldName = fieldName.substring(0, 1).toUpperCase() + fieldName.substring(1);

        var setterName = "set" + fieldName;
        setSetter(getEntity().getSetterByName(setterName));

        var getterName = "get" + fieldName;
        setGetter(getEntity().getGetterByName(getterName));

        if (field.getAnnotation(Id.class) != null) {
            handleId(field.getAnnotation(Id.class));
        }

        if (field.getAnnotation(OneToOne.class) != null) {
            handleOneToOne(field.getAnnotation(OneToOne.class));
        }

        if (field.getAnnotation(OneToMany.class) != null) {
            handleOneToMany(field.getAnnotation(OneToMany.class));
        }

        if (field.getAnnotation(ManyToOne.class) != null) {
            handleManyToOne(field.getAnnotation(ManyToOne.class));
        }

        if (field.getAnnotation(ManyToMany.class) != null) {
            handleManyToMany(field.getAnnotation(ManyToMany.class));
        }

        if (field.getAnnotation(Column.class) != null) {
            handleColumn(field.getAnnotation(Column.class));
        }

        if (field.getAnnotation(GeneratedValue.class) != null) {
            handleGeneratedValue(field.getAnnotation(GeneratedValue.class));
        }

        if (field.getAnnotation(Convert.class) != null) {
            handleConvert(field.getAnnotation(Convert.class));
        }

        if (field.getAnnotation(MapKeyColumn.class) != null) {
//            handleMapKeyColumn(field.getAnnotation(MapKeyColumn.class));
        }

        if (field.getAnnotation(Enumerated.class) != null) {
            handleEnumerated(field.getAnnotation(Enumerated.class));
        }

        setPrimitive(Util.isPrimitiveTypeForDB(clazz));
    }

    private void handleEnumerated(Enumerated annotation) {
        var enumType = annotation.value();
        setEnumType(enumType);
    }

    private void handleMapKeyColumn(MapKeyColumn annotation) {
        // @Column = columnName
        var keyColumnName = annotation.name();
        var collectionTable = (CollectionTable) getField().getAnnotation(CollectionTable.class);
        var otherTable = collectionTable.name();
        var otherTableFk = collectionTable.joinColumns()[0].name();

        setKeyColumnName(keyColumnName);
        setOtherTable(otherTable);
        setOtherTableFk(otherTableFk);
        setForeign(true);
    }

    private void handleManyToOne(ManyToOne annotation) {
        throw new UnsupportedOperationException("ManyToOne");
    }

    private void handleManyToMany(ManyToMany annotation) {
        throw new UnsupportedOperationException("ManyToMany");
    }

    private void handleColumn(Column annotation) {
        setColumnName(annotation.name());
    }

    private void handleGeneratedValue(GeneratedValue annotation) {
        setSelfHandled(false);
    }

    private void handleConvert(Convert annotation) {

    }

    private void handleOneToMany(OneToMany annotation) {
        var cascadeTypes = annotation.cascade();
        setCascadeTypes(Util.makeSet(cascadeTypes));

        var joinTable = getField().getAnnotation(JoinTable.class);
        if (joinTable != null) {
            setOtherTableFk(joinTable.name());
        } else {
            setOtherTableFk(getClazz().getSimpleName() + "_fk");
        }
        setForeign(true);

    }

    private void handleOneToOne(OneToOne annotation) {
        var cascadeTypes = annotation.cascade();
        setCascadeTypes(Util.makeSet(cascadeTypes));

        var joinTable = getField().getAnnotation(JoinColumn.class);
        var name = getClazz().getSimpleName() + "_id";
        if (joinTable != null) {
            name = joinTable.name();
        }
        setColumnName(name);
        setFkToOtherTableName(name);
    }

    private void handleId(Id annotation) {
        getEntity().addPrimaryKey(this);
    }

    public EntityHolder getEntity() {
        return entity;
    }

    public void setPrimitive(boolean primitive) {
        this.primitive = primitive;
    }

    public boolean isPrimitive() {
        return primitive;
    }

    public String getFkToOtherTableName() {
        return fkToOtherTableName;
    }

    public void setFkToOtherTableName(String fkToOtherTableName) {
        this.fkToOtherTableName = fkToOtherTableName;
    }

    public String getOtherTableFk() {
        return otherTableFk;
    }

    public void setOtherTableFk(String otherTableFk) {
        this.otherTableFk = otherTableFk;
    }

    private void setColumnName(String columnName) {
        this.columnName = columnName;
    }

    public void setSelfHandled(boolean selfHandled) {
        this.selfHandled = selfHandled;
    }

    public Set<CascadeType> getCascadeTypes() {
        return cascadeTypes;
    }

    public void setCascadeTypes(Set<CascadeType> cascadeTypes) {
        this.cascadeTypes = cascadeTypes;
    }

    public boolean isOrphanRemoval() {
        return orphanRemoval;
    }

    public void setOrphanRemoval(boolean orphanRemoval) {
        this.orphanRemoval = orphanRemoval;
    }

    public FetchType getFetchType() {
        return fetchType;
    }

    public void setFetchType(FetchType fetchType) {
        this.fetchType = fetchType;
    }

    public Class getClazz() {
        return clazz;
    }

    @Override
    public String toString() {
        return "EntityField{" +
                "name='" + name + '\'' +
                ", clazz=" + clazz +
                '}';
    }

    public boolean isEagerFetch() {
        return fetchType == FetchType.EAGER;
    }

    public void setForeign(boolean foreign) {
        this.foreign = foreign;
    }

    public boolean isForeign() {
        return foreign;
    }

    public void setKeyColumnName(String keyColumnName) {
        this.keyColumnName = keyColumnName;
    }

    public String getKeyColumnName() {
        return keyColumnName;
    }

    public void setOtherTable(String otherTable) {
        this.otherTable = otherTable;
    }

    public String getOtherTable() {
        return otherTable;
    }

    public Method getSetter() {
        return setter;
    }

    public void setSetter(Method setter) {
        this.setter = setter;
    }

    public void setGetter(Method getter) {
        this.getter = getter;
    }

    public Method getGetter() {
        return getter;
    }

    public Object load(EntityHolder entityHolder) {
        if (isForeign()) {
            if (getKeyColumnName() != null) {
                return loadMap(entityHolder);
            } else {
                return loadCollection(entityHolder);
            }
        } else if (getEnumType() == null) {
            return loadEntity(entityHolder);
        } else {
            return loadEnum(entityHolder);
        }
    }

    private Object loadEnum(EntityHolder entityHolder) {
        var enumType = getEnumType();
        return null;
    }

    private Object loadEntity(EntityHolder entityHolder) {
        var entityLoader = loader.getEntityHolder(getClazz());
        return null;

    }

    private Object loadCollection(EntityHolder entityHolder) {

        return null;
    }

    private Object loadMap(EntityHolder entityHolder) {

        return null;
    }

    public void setEnumType(EnumType enumType) {
        this.enumType = enumType;
    }

    public EnumType getEnumType() {
        return enumType;
    }
}
