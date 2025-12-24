package net.swordie.orm.strategies;

public interface DataTypeMapperStrategy<T> {

    void save(T obj);

    T get(String name);
}
