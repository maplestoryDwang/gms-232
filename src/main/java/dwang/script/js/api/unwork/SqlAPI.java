package dwang.script.js.api.unwork;

import dwang.script.DwangScriptBaseApi;

public interface SqlAPI extends DwangScriptBaseApi {

    /**
         * @param sql  脚本
         * @param args 每个列表，对应SQL表中的一列
         * @出自类 SqlAPI
         */
    default void batchUpdateSQL(String sql, Object args) {
        throw new RuntimeException("not implemented");
    }



    /**
         * @出自类 SqlAPI
    */
    default void createTable(String tableName, String sql) {
        throw new RuntimeException("not implemented");
    }



    /**
         * @出自类 SqlAPI
    */
    default void queryForAllResults(String sql, Object args) {
        throw new RuntimeException("not implemented");
    }



    /**
         * @出自类 SqlAPI
    */
    default void queryForBean(String sql, Object requiredType, Object args) {
        throw new RuntimeException("not implemented");
    }



    /**
         * @出自类 SqlAPI
    */
    default void queryForList(String sql, Object requiredType, Object args) {
        throw new RuntimeException("not implemented");
    }



    /**
         * @出自类 SqlAPI
    */
    default void queryForObject(String sql, Object requiredType, Object args) {
        throw new RuntimeException("not implemented");
    }



    /**
         * @出自类 SqlAPI
    */
    default void queryForObjectOrDefault(String sql, Object requiredType, Object defaulValue, Object args) {
        throw new RuntimeException("not implemented");
    }



    /**
         * @出自类 SqlAPI
    */
    default void queryForOneResult(String sql, Object args) {
        throw new RuntimeException("not implemented");
    }



    /**
         * @出自类 SqlAPI
    */
    default void updateSQL(String sql, Object args) {
        throw new RuntimeException("not implemented");
    }



}
