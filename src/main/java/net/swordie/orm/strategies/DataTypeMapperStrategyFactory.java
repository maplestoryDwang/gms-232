package net.swordie.orm.strategies;

import net.swordie.orm.exception.UnknownMapperException;

import java.util.HashMap;
import java.util.Map;

public class DataTypeMapperStrategyFactory {

    private static final Map<Class, DataTypeMapperStrategy> strategies = new HashMap<>();

    static {
        strategies.put(Integer.class, new IntegerMapperStrategy());
    }

    public DataTypeMapperStrategy build(Class clazz) {
        if (strategies.containsKey(clazz)) {
            return strategies.get(clazz);
        }
        throw new UnknownMapperException("Could not determine mapper for type " + clazz);
    }

}
