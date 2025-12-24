package net.swordie.orm.dao;

import net.swordie.ms.client.character.Char;
import net.swordie.ms.client.character.Macro;
import net.swordie.ms.connection.db.BatchQueryHolder;
import net.swordie.ms.connection.db.DatabaseManager;
import net.swordie.ms.connection.db.QueryHolder;
import net.swordie.ms.connection.db.converters.InlinedIntArrayConverter;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;

public class MacroDao implements SworDao<Macro> {

    private static final Logger log = LogManager.getLogger();

    public QueryHolder createQueryHolder(Char chr, Macro macro) {
        if (macro.isClean()) {
            return QueryHolder.clean();
        }
        boolean isInsert = macro.getId() == 0;
        var queryHolder = new QueryHolder<>(macro, isInsert);

        String query;
        if (isInsert) {
            query = "INSERT INTO macros(" +
                    "name, " +
                    "muted, " +
                    "skills, " +
                    "charid, " +
                    "macroPos, " +
                    "id " +
                    ") VALUES (?, ?, ?, ?, ?, ?)";
        } else {
            query = "UPDATE macros SET " +
                    "name = ?," +
                    "muted = ?," +
                    "skills = ?," +
                    "charid = ?," +
                    "macroPos = ?" +
                    " WHERE ID = ?";
        }

        queryHolder.setQuery(query);
        queryHolder.setArgs(
                macro.getName(),
                macro.isMuted(),
                InlinedIntArrayConverter.toDbColumn(macro.getSkills()),
                chr.getId(),
                macro.getMacroPos(),
                macro.getId()
        );

        return queryHolder;
    }

    public void delete(Macro macro) {
        if (macro == null || macro.getId() == 0) {
            log.debug("Trying to delete object " + macro + " that is null or has id 0");
            return;
        }
        DatabaseManager.executeQuery("DELETE FROM macros WHERE ID = ?", macro.getId());
    }

    @Override
    public Macro fromResultSet(ResultSet resultSet, String alias) {
        Macro mac = null;

        try {
            mac = new Macro(false);
            mac.setId(resultSet.getLong(alias + ".id"));
            mac.setMuted(resultSet.getBoolean(alias + ".muted"));
            mac.setName(resultSet.getString(alias + ".name"));
            mac.setSkills(InlinedIntArrayConverter.fromDbColumn(resultSet.getString(alias + ".skills")));
            mac.setMacroPos(resultSet.getInt(alias + ".macroPos"));

            mac.setLastSavedHash();
        } catch (SQLException e) {
            e.printStackTrace();
        }

        return mac;
    }

    public void saveOrUpdate(Char chr, List<Macro> macros) {
        var batch = new BatchQueryHolder<>();
        for (var mac : new HashSet<>(macros)) {
            batch.addQueryInfo(createQueryHolder(chr, mac));
        }
        DatabaseManager.executeBatchQuery(batch);
    }

    public List<Macro> byChar(Char chr) {
        if (chr.getId() <= 0) {
            return new ArrayList<>();
        }
        var objs = DatabaseManager.executeSelect(this, "SELECT * FROM macros m WHERE charid = ?", "m", chr.getId());
        List<Macro> saveDatas = new ArrayList<>();
        for (var obj : objs) {
            if (obj != null) {
                saveDatas.add((Macro) obj);
            }
        }
        return saveDatas;
    }
}
