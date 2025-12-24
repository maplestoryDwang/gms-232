package net.swordie.orm.dao;

import net.swordie.ms.client.character.Char;
import net.swordie.ms.connection.db.DatabaseManager;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.HashSet;
import java.util.Set;

public class IgnoredItemsDao implements SworDao<Integer> {

    public void delete(Char chr) {
        DatabaseManager.executeQuery("DELETE FROM ignoreditems WHERE charid = ?;", chr.getId());
    }

    public void saveOrUpdate(Char chr, Set<Integer> ignoredItems) {
        delete(chr);

        if (ignoredItems == null || ignoredItems.size() == 0) {
            return;
        }
        var queryBuilder = new StringBuilder("INSERT INTO ignoreditems (charid, ignoreditem) VALUES ");
        var queryArgs = new Object[ignoredItems.size() * 2];
        var i = 0;

        for (var item : ignoredItems) {
            queryBuilder.append("(?, ?),");
            queryArgs[i++] = chr.getId();
            queryArgs[i++] = item;
        }

        var query = queryBuilder.toString();
        DatabaseManager.executeQuery(query.substring(0, query.length() - 1), queryArgs);
    }

    @Override
    public Integer fromResultSet(ResultSet resultSet, String alias) {
        Integer ignoredItem = null;

        try {
            ignoredItem = resultSet.getInt(alias + ".ignoreditem");
        } catch (SQLException e) {
            e.printStackTrace();
        }

        return ignoredItem;
    }

    public Set<Integer> getIgnoredItems(Char chr) {
        var objs = DatabaseManager.executeSelect(this, "SELECT * FROM ignoreditems igitem " +
                "WHERE charid = ?", "igitem", chr.getId());
        Set<Integer> ignoredItems = new HashSet<>();
        for (var obj : objs) {
            if (obj != null) {
                ignoredItems.add((Integer) obj);
            }
        }
        return ignoredItems;
    }
}
