package net.swordie.orm.dao;

import java.util.List;

/**
 * Created on 28/04/2020.
 *
 * @author Asura
 */
public interface Batchable<T> extends SworDao<T> {

    List<Object> fillQueryArgs(long fkey, T item);

}
