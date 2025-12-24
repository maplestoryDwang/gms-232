package net.swordie.ms.connection.db.managers;

import net.swordie.ms.connection.db.BatchQueryHolder;
import net.swordie.orm.dao.SworDao;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.boot.Metadata;
import org.hibernate.boot.MetadataSources;
import org.hibernate.boot.registry.StandardServiceRegistry;
import org.hibernate.boot.registry.StandardServiceRegistryBuilder;
import org.hibernate.query.Query;

import java.io.File;
import java.util.List;

public class HibernateDatabaseManager implements IDatabaseManager {

    private static SessionFactory sessionFactory;

    @Override
    public void init(Class[] dbClasses) {
        StandardServiceRegistry registry = new StandardServiceRegistryBuilder()
                .configure("hibernate.cfg.xml")
                .build();

        MetadataSources sources = new MetadataSources(registry);
        for (Class clazz : dbClasses) {
            sources.addAnnotatedClass(clazz);
        }

        Metadata metadata = sources.getMetadataBuilder().build();

        sessionFactory = metadata.getSessionFactoryBuilder().build();
    }

    public Session getSession() {
        if (sessionFactory == null) {
            return null;
        }
        return sessionFactory.openSession();
    }

    @Override
    public void sendHeartBeat() {
        Session session = getSession();
        Transaction t = session.beginTransaction();
        Query q = session.createQuery("from Char where id = 1");
        q.list();
        t.commit();
        session.close();
    }

    @Override
    public void saveToDB(Object obj) {
        try (Session session = getSession()) {
            Transaction t = session.beginTransaction();
            session.saveOrUpdate(obj);
            t.commit();
        }
    }

    @Override
    public void deleteFromDB(Object obj) {
        try (Session session = getSession()) {
            Transaction t = session.beginTransaction();
            session.delete(obj);
            t.commit();
        }
    }

    @Override
    public Object getObjFromDB(Class clazz, int id) {
        Object o;
        try (Session session = getSession()) {
            Transaction t = session.beginTransaction();
            o = session.get(clazz, id);
            t.commit();
        }
        return o;
    }

    @Override
    public Object getObjFromDB(Class clazz, String name) {
        return getObjFromDB(clazz, "name", name);
    }

    @Override
    public Object getObjFromDB(Class clazz, String columnName, Object value) {
        Object o = null;
        try (Session session = getSession()) {
            Transaction transaction = session.beginTransaction();
            // String.format for query, just to fill in the class
            // Can't set the FROM clause with a parameter it seems
            javax.persistence.Query query = session.createQuery(String.format("FROM %s WHERE %s = :val", clazz.getName(), columnName));
            query.setParameter("val", value);
            List l = ((org.hibernate.query.Query) query).list();
            if (l != null && l.size() > 0) {
                o = l.get(0);
            }
            transaction.commit();
        }
        return o;
    }

    @Override
    public Object getObjListFromDB(Class clazz) {
        List list;
        try (Session session = getSession()) {
            Transaction transaction = session.beginTransaction();
            // String.format for query, just to fill in the class
            // Can't set the FROM clause with a parameter it seems
            javax.persistence.Query query = session.createQuery(String.format("FROM %s", clazz.getName()));
            list = ((org.hibernate.query.Query) query).list();
            transaction.commit();
        }
        return list;
    }

    @Override
    public Object getObjListFromDB(Class clazz, String columnName, Object value) {
        List list;
        try (Session session = getSession()) {
            Transaction transaction = session.beginTransaction();
            // String.format for query, just to fill in the class
            // Can't set the FROM clause with a parameter it seems
            javax.persistence.Query query = session.createQuery(String.format("FROM %s WHERE %s = :val", clazz.getName(), columnName));
            query.setParameter("val", value);
            list = ((org.hibernate.query.Query) query).list();
            transaction.commit();
        }
        return list;
    }

    @Override
    public List<Object> executeSelect(SworDao dao, String queryStr, String alias, Object... args) {
        List list;
        try (Session session = getSession()) {
            Transaction transaction = session.beginTransaction();
            // String.format for query, just to fill in the class
            // Can't set the FROM clause with a parameter it seems
            javax.persistence.Query query = session.createNativeQuery(queryStr);
            list = ((org.hibernate.query.Query) query).list();
            transaction.commit();
        }
        return list;
    }

    @Override
    public long executeQuery(String queryStr, Object... args) {
        try (Session session = getSession()) {
            Transaction transaction = session.beginTransaction();
            // String.format for query, just to fill in the class
            // Can't set the FROM clause with a parameter it seems
            javax.persistence.Query query = session.createNativeQuery(queryStr);
            query.executeUpdate(); // right method?
            transaction.commit();
        }
        return 0;
    }

    @Override
    public boolean executeFile(File file) {
        throw new UnsupportedOperationException("Not Implemented");
    }

    @Override
    public void executeBatchQuery(BatchQueryHolder queryHolders) {

    }

    @Override
    public long executeInsert(String query, Object... args) {
        return 0;
    }
}
