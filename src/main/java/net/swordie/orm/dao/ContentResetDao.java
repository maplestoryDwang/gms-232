package net.swordie.orm.dao;

import net.swordie.ms.client.dailies.ContentReset;
import net.swordie.ms.connection.db.DatabaseManager;
import net.swordie.ms.connection.db.converters.FileTimeConverter;
import net.swordie.ms.enums.DailyEntry;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class ContentResetDao implements SworDao<ContentReset> {

    private static final Logger log = LogManager.getLogger();

    public void saveOrUpdate(ContentReset contentReset) {
        if (contentReset == null) {
            return;
        }
        boolean needsId = contentReset.getId() == 0;

        String query;
        if (needsId) {
            query = "INSERT INTO contentcooldowns(" +
                    "content, " +
                    "startDate, " +
                    "id " +
                    ") VALUES (?, ?, ?)";
        } else {
            query = "UPDATE contentcooldowns SET " +
                    "content = ?," +
                    "startDate = ?" +
                    " WHERE id = ?";
        }
        long id = DatabaseManager.executeQuery(query,
                contentReset.getDailyEntry().toString(),
                FileTimeConverter.toDbColumn(contentReset.getStartDate()),
                contentReset.getId()
        );

        if (needsId){
            contentReset.setId(id);
        }
    }

    public void delete(ContentReset contentReset) {
        if (contentReset == null || contentReset.getId() == 0) {
            log.debug("Trying to delete object " + contentReset + " that is null or has id 0");
            return;
        }
        DatabaseManager.executeQuery("DELETE FROM contentcooldowns WHERE id = ?", contentReset.getId());
    }


    public List<ContentReset> getList() {
        var objs = DatabaseManager.executeSelect(this, "SELECT * FROM contentcooldowns cr", "cr");
        List<ContentReset> crs = new ArrayList<>();
        for (var obj : objs) {
            if (obj != null) {
                crs.add((ContentReset) obj);
            }
        }
        return crs;
    }

    @Override
    public ContentReset fromResultSet(ResultSet resultSet, String alias) {
        ContentReset cr = null;
        try {
            cr = new ContentReset();
            cr.setId(resultSet.getLong(alias + ".id"));
            cr.setDailyEntry(DailyEntry.valueOf(resultSet.getString(alias + ".content")));
            cr.setStartDate(FileTimeConverter.fromDbColumn(resultSet.getTimestamp((alias + ".startDate"))));
            cr.setLastSavedHash();
        } catch (SQLException e) {
            e.printStackTrace();
        }

        return cr;
    }
}
