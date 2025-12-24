package net.swordie.orm.loader;

import net.swordie.orm.exception.NoValidConstructorException;
import net.swordie.orm.exception.UnmappedEntityException;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import javax.persistence.Entity;
import java.util.HashMap;
import java.util.Map;

public class Loader {
    private static final Logger log = LogManager.getLogger();

    private Map<Class, EntityHolder> entities;

    public Loader() {
        entities = new HashMap<>();
    }

    public void load(Class[] classes) {
        long start = System.currentTimeMillis();

        for (Class clazz : classes) {
            initClass(clazz);
            verifyClass(clazz);
        }

        log.info(String.format("Loaded db in %dms. Loaded classes: %d.", System.currentTimeMillis() - start, entities.size()));
    }

    private void initClass(Class clazz) {
        var entityHolder = new EntityHolder(clazz, this);
        entityHolder.init();

        entities.put(clazz, entityHolder);
    }

    public EntityHolder getEntityHolder(Class clazz) {
        if (entities.containsKey(clazz)) {
            return entities.get(clazz);
        }

        throw new UnmappedEntityException("Unmapped entity: " + clazz.getName());
    }

    private void verifyClass(Class clazz) {
        var annotation = clazz.getAnnotation(Entity.class);
        if (annotation == null) {
            throw new UnmappedEntityException("Unmapped entity: " + clazz.getName());
        }
        try {
            var ctor = clazz.getConstructor();
        } catch (NoSuchMethodException e) {
            throw new NoValidConstructorException("No constructor found for class " + clazz.getName());
        }
    }

    public Map<Class, EntityHolder> getEntityHolders() {
        return entities;
    }
}
