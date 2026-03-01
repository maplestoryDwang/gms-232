package dwang.script.js.api.unwork;

import dwang.script.DwangScriptBaseApi;

public interface SqlAPI extends DwangScriptBaseApi {

    default void batchUpdateSQL(String sql, Object args) { }

    default void queryForObjectOrDefault(String sql, Object requiredType, Object defaulValue, Object args) { }

    default void createTable(String tableName, String sql) { }

    default void queryForObject(String sql, Object requiredType, Object args) { }

    default void queryForOneResult(String sql, Object args) { }

    default void queryForList(String sql, Object requiredType, Object args) { }

    default void queryForAllResults(String sql, Object args) { }

    default void queryForBean(String sql, Object requiredType, Object args) { }

    default void updateSQL(String sql, Object args) { }

}
